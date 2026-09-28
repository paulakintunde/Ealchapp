// b2.23.l1 « Argumenter »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md with the WORKSHOP SHAPE of
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 and §1.4, and B2-BUILD-LOG.md on top.
// The remediation target for learners who fail B2 exam WRITING (PE@b2).
//
// Not imported, not merged into seed.json, not published. The `task` section
// is real (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]` and the validators run on `LESSON` itself.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 10 is built around a TEXT (200 to 350 words: an
//   opinion column, a forum, a radio debate, two opposed letters, a student
//   paper before and after, a TCF Tâche 3 pair, a column full of fallacies)
//   and a MOVE, in the same beats:
//
//     1 MEET      one anchor `reading` FIRST, with the four B2 question
//                 kinds labelled: global, détail, inférence, position
//     2 NOTICE    one section naming the move (cardDeck, tapTable, examples,
//                 focus), which also names the earlier lesson it builds on
//     3 PRACTISE  two checks on NEW material (groupDrill, trapDrill,
//                 commonErrors, listening, dictation)
//     4 USE       « Pour ta mission »: the act's one tool for the graded
//                 article, always under that title (a groupDrill picking the
//                 line for YOUR article; a short scenario in acts 4 and 6)
//     + CHECK     the gated control-page groupDrill every act ends on
//
//   Act 1 is the problem scene (an opinion with no reason, at a public
//   consultation), with the task announced in its resolve beat. Act 11 is
//   the production act: the model paper, the plan, a role play, the TASK,
//   and the closing sections.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · builds on · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Un avis n'est pas un argument   scene + a consultation forum
//                                       · opinion vs argument             6
//    2  La thèse                        an opinion column · the thesis
//                                       · lesson 32 in B1 (trancher)      6
//    3  Penser, croire, douter          a radio debate + a listening
//                                       · opinion verbs and their mood
//                                       · lesson 15 in B1                 6
//    4  Prouver                         a paragraph, before and after
//                                       · argument, explanation, example  6
//    5  Nuancer                         a paragraph shouted, then nuanced
//                                       + a listening · the certainty
//                                       scale · lesson 22 in B2           6
//    6  L'objection et la réponse       two opposed letters · concession
//                                       and rebuttal · lesson 32 in B1    6
//    7  Ouvrir et fermer                Tomás's paper, before and after
//                                       · introduction and conclusion
//                                       (the TEF essay opening round)     6
//    8  Deux plans                      one subject, two plans · plans
//                                       and transitions                   6
//    9  Comparer deux points de vue     a TCF Tâche 3 pair · relating
//                                       two views (the TCF round)         6
//   10  Les pièges du raisonnement      a column made of fallacies · six
//                                       fallacies and their fair versions 6
//   11  Ta mission                      the model DELF paper · plan, role
//                                       play, TASK, quiz                 11
//
//   TOTAL 71 missions, 11 acts. Texts: 11 readings (one anchor per act) and
//   2 listenings (acts 3, 5), plus the act 1 scene. cardDeck 4 (acts 2, 6,
//   9, 10), tapTable 3 (acts 3, 5, 8), trapDrill 4 (3, 5, 7, 10),
//   commonErrors 4 (2, 4, 6, 9), 3 scenarios (4, 6, 11), one dictation, one
//   focus, one examples. Corpus: 190 authored rows (.1600-.1789) plus 26
//   reused seed rows. Quiz: 11 rounds of 8 (the last one recycles earlier
//   B2 lessons). Eleven error triggers, eleven drills, five reference
//   sheets, ten terms. Chapter artwork: `argumentation-image-prompts.md`,
//   11 prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Prends position, prouve-la, et réponds à ceux qui pensent le
//     contraire. »
//   EN: Take a position, prove it, and answer those who think the opposite.
//
//   ONE METAPHOR, THREE GESTURES: the three things every B2 writing grid
//   scores (position, argumentation, the objection answered). It is NOT
//   « be as sure as possible » (act 5) and NOT « always three parts » (act 8).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the argumentative text as a whole: thesis, opinion verbs and
//           their mood beyond B1, argument-explanation-example, nuance and
//           the certainty scale, concession and rebuttal, introduction and
//           conclusion, dialectical and thematic plans, comparing two views
//           (TCF Tâche 3), six fallacies, and the DELF B2 article task.
//   QUOTES  the reframes of lessons 15, 30, 32 and 39 in B1, re-exported
//           from their corpus files; their published rows reused BY ID.
//   LEAVES  the subjunctive itself (lessons 14 to 16 in B1, 5 and 6 in B2),
//           connectors in general (30 to 32 in B1), concession grammar (16
//           in B2), academic style (22 in B2, cited in words only), critical
//           reading (24 in B2, named as what comes next).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction, including the task brief (the DELF consigne
//   says vous; the learner is tu). English authored everywhere, never on an
//   answer. Every `say` is French. No spaced « ? » or « ! » in any bubble.
//   Every scenario uses ’ only and embeds no corpus row. Lessons cited by
//   trail position in words, never by raw id. Mission answer slots spread by
//   `spreadMissions()`, the quiz by `spreadSlots()`, as b1.39 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. ROUTING. `Lesson.skill` is 'PE'. PE@b2 → b2.23 in EXAM_PREP_TARGETS
//      is the orchestrator's (wave 0, item 2). Not wired here.
//   2. THE RUBRIC has four criteria of 4 points (16), mirroring the DELF B2
//      grid as the brief lists it; register (correction sociolinguistique)
//      is folded into « consigne ». Keep, or split register out as a fifth?
//   3. THE ANNOTATED MODEL ANSWER lives in `sheet-grille` (a table keyed to
//      the rubric, then the full text), reached from the task by `sheetId`.
//      The act 11 reading is a DIFFERENT subject, annotated through its four
//      questions, so the learner imitates moves, not sentences. OK?
//   4. `briefEn` is filled although schema.ts says « B2 drops it »: the
//      brief says English is still authored on every learner string.
//   5. The recycling round cites lessons 2, 6, 10, 12 and 16 in B2, which
//      are not built yet. Trail positions come from the B2 plan.
//   6. Dated facts to check before publish: see corpus header §A.7.
//   7. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, OA, CL, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  FORUM_TEXT, CHRONIQUE_TEXT, DEBAT_TEXT, PARAGRAPHE_TEXT, NUANCE_TEXT, LETTRES_TEXT,
  COPIE_TEXT, PLANS_TEXT, DEUX_TEXTES_TEXT, SOPHISMES_TEXT, MODELE_TEXT, TASK_MODEL, TASK_MODEL_NOTES,
  B115_REFRAME, B115_REFRAME_EN, B130_REFRAME, B130_REFRAME_EN, B132_REFRAME, B132_REFRAME_EN,
  B139_REFRAME, B139_REFRAME_EN,
  SUBJ_DECL_UNIT, COORD_UNIT, SUBORD_UNIT, CONCESSION_UNIT, COURRIELS_UNIT, STYLE_UNIT,
  SUBJ_DECL_REF, COORD_REF, SUBORD_REF, CONCESSION_REF, COURRIELS_REF, STYLE_REF, CONNECTEURS_RANGE_REF,
  COND_PASSE_REF, MODES_REF, NOMINAL_REF, GERONDIF_REF, CONCESSION_B2_REF,
} from './argumentation-corpus.ts';
import { ARGUMENTATION_TERMS } from './argumentation-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string; drills?: string[] };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));
const OWN = new Set(ALL_ROWS.map((r) => r.id));

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.23: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.23: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.23: no respell on ${id}`);
  return r.respell.startsWith('[') ? r.respell : `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** THE « USE IT » BEAT: the act's one tool for the graded article, always
 *  under the same title so a reviewer and a learner see the loop. */
function pourTaMission(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ta mission', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: UN AVIS N'EST PAS ENCORE UN ARGUMENT
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La bibliothèque du dimanche',
  frSub: 'Un avis sans raison',
  setting: { place: 'Un appartement de Rosemont', city: 'Montréal', time: '22 h 05', ambience: 'un ordinateur ouvert sur un forum, une tasse de thé froide, la neige dehors' },
  beats: [
    {
      kind: 'narration',
      text: "Un soir de mars, à Montréal. L'arrondissement de Rosemont consulte les habitants : faut-il fermer la bibliothèque le dimanche pour économiser 80 000 dollars par an ? Tu ouvres le forum de la consultation.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: `Tu tapes vite : « ${fr(E(1600))} » Ton colocataire Samir lit par-dessus ton épaule.`,
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Samir',
      fr: 'Tu dis ce que tu penses. Tu ne dis pas pourquoi.',
      en: 'You say what you think. You do not say why.',
      respell: '[tü dee suh kuh tü PAHⁿS | tü nuh dee pa poor-KWA]',
      stage: "Il ne conteste pas ton avis. Il cherche ta raison.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Mais tout le monde est d'accord avec moi.",
      en: 'But everybody agrees with me.',
      respell: '[meh too luh mohⁿd eh da-kor a-vehk MWA]',
      stage: 'Le nombre te rassure. Il ne prouve rien.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Samir',
      fr: 'Le conseil ne compte pas les voix. Il lit les raisons.',
      en: 'The council does not count votes. It reads reasons.',
      respell: '[luh kohⁿ-SEHY nuh kohⁿt pa lay VWA | eel lee lay reh-ZOHⁿ]',
      stage: 'Une consultation n’est pas un référendum.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Le lendemain, la modératrice répond : « Pourriez-vous préciser vos raisons ? Seuls les avis argumentés seront transmis au conseil. » Tu dois réécrire.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu réécris. Quelle phrase envoies-tu ?',
      size: 'lg',
      options: [
        { fr: fr(E(1601)), respell: rsOf(E(1601)), en: en(E(1601)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1602)), respell: rsOf(E(1602)), en: en(E(1602)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "La modératrice transmet ton message. Au conseil, une élue le cite : elle ne savait pas que le dimanche était le jour des familles.",
        breaks: "La modératrice répond encore : « Pourquoi ? » Ton message est plus fort, mais il ne dit toujours pas pourquoi.",
      },
    },
    {
      kind: 'break',
      heading: 'Plus fort, pas plus convaincant',
      body: "Totalement, absurde : tu as haussé le ton, sans ajouter une seule raison. Le conseil ne peut rien faire d'un avis. Il peut peser une raison. EN: Louder words add no reason; a council can weigh a reason, not a mood.",
      wrong: { fr: fr(E(1601)), ipa: ipaOf(E(1601)), respell: rsOf(E(1601)), en: en(E(1601)) },
      right: { fr: fr(E(1602)), ipa: ipaOf(E(1602)), respell: rsOf(E(1602)), en: en(E(1602)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "À la fin de cette leçon, tu vas écrire un article d'opinion de 250 mots, comme à la production écrite du DELF B2 : une thèse, des arguments prouvés, une objection et ta réponse. Chaque acte te donne un outil pour ça.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['argument', 'these'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Prendre position', s: "Actes 1 à 3 : l'avis et l'argument, la thèse, les verbes d'opinion et leur mode" },
    { t: 'Prouver et nuancer', s: "Actes 4 et 5 : l'argument, l'exemple, la juste mesure" },
    { t: "Répondre à l'autre", s: "Actes 6 à 10 : l'objection, l'introduction et la conclusion, les plans, deux points de vue, les sophismes" },
    { t: 'Écrire ta copie', s: 'Acte 11 : un article de 250 mots, comme au DELF B2' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET: the consultation forum. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le forum de la consultation',
  frSub: 'Quatre avis, une modératrice',
  text: FORUM_TEXT,
  glossary: [
    { word: 'arrondissement', en: 'borough (Montréal)', note: 'Un quartier de Montréal, avec son propre conseil élu.' },
    { word: "l'heure du conte", en: 'story time', note: 'Le moment où on lit des histoires aux enfants.' },
    { word: 'fréquenté', en: 'busy, well attended', note: 'Où beaucoup de gens viennent.' },
  ],
  questions: [
    { q: 'Global : à quoi sert cette consultation ?', a: "À recueillir l'avis des habitants avant que le conseil décide de fermer, ou non, la bibliothèque le dimanche." },
    { q: 'Détail : quel exemple Aïcha donne-t-elle ?', a: "Plus de soixante enfants à l'heure du conte, le dimanche précédent : un fait qu'elle a observé." },
    { q: 'Inférence : pourquoi la modératrice interpelle-t-elle Julien et Sophie, et pas les deux autres ?', a: "Parce que Julien et Sophie donnent un avis sans raison vérifiable : leurs messages ne seront pas transmis." },
    { q: 'Position : que pense Marc-André, et comment le sais-tu ?', a: "Il est contre la fermeture du dimanche mais accepte des économies. Il concède (« Il est vrai que »), répond (« Cependant »), puis propose un essai." },
  ],
  audio: REC('rec-b2-23-forum'),
  say: REFRAME,
  terms: ['argument', 'exemple'],
};

/** PRACTISE: an opinion alone, or an opinion with its reasons. */
const A1_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-trier',
  layer: 'core',
  size: 'lg',
  title: 'Un avis, ou un argument',
  groups: [
    grp('Un avis seul', [
      it(E(1600), 'le nombre, sans raison'),
      it(E(1606), 'une affirmation'),
      it(E(1607), 'une attaque'),
    ], chk(
      'Ces trois messages disent-ils pourquoi ?',
      ["Non : ils affirment, sans raison qu'on puisse vérifier.", 'Oui : ils sont très clairs.'], 0,
      "Clair n'est pas prouvé. Aucun ne dit pourquoi. EN: clear is not proven; none says why.")),
    grp('Un avis qui donne ses raisons', [
      it(E(1602), 'la raison'),
      it(E(1604), "l'exemple"),
      it(E(1605), 'la conséquence'),
    ], chk(
      "Qu'ajoute la phrase sur les soixante enfants ?",
      ['un exemple qui prouve', 'une opinion de plus', 'une objection'], 0,
      "Un fait observé montre que la raison est vraie. EN: an observed fact shows the reason holds.")),
    ctl('La proposition', `« ${fr(E(1613))} » Marc-André...`,
      ['refuse toute économie', 'répond à la ville et propose autre chose'], 1,
      "Il reconnaît le besoin d'économies, puis propose un essai. EN: he grants the need and proposes a trial."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['argument', 'exemple'],
};

/** NOTICE: where an opinion without reasons costs something. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où un avis sans raison coûte cher',
  cases: [
    { situation: "Au DELF B2 : un avis sans raison perd les points de l'argumentation", fr: fr(E(1611)), en: en(E(1611)) },
    { situation: 'Dans une consultation publique', fr: fr(E(1608)), en: en(E(1608)) },
    { situation: 'Quand on te demande de préciser', fr: fr(E(1603)), en: en(E(1603)) },
    { situation: 'Quand tu proposes autre chose', fr: fr(E(1613)), en: en(E(1613)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['argument'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl("L'argument", "Qu'est-ce qui transforme un avis en argument ?",
    ['une raison, et un exemple', 'des mots plus forts'], 0,
    "Un argument dit pourquoi. EN: an argument says why."),
  ctl('Le nombre', '« Tout le monde est contre. » Est-ce une raison ?',
    ['Oui : la majorité a toujours raison.', 'Non : le nombre ne dit pas pourquoi.'], 1,
    "Beaucoup de gens peuvent se tromper ensemble. EN: many people can be wrong together."),
  ctl('La mission', 'À la fin de la leçon, tu écris...',
    ['un courriel de 120 mots', "un article d'opinion de 250 mots, comme au DELF B2", 'un message de forum'], 1,
    "Un article argumenté, comme à l'examen. EN: an argued article, as in the exam."),
], ['argument', 'these']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: "Un avis n'est pas un argument",
    opener: {
      line: "Tout le monde est contre, dis-tu : ici tu découvres pourquoi ça ne convainc personne. EN: Everybody is against it, you say: here you find out why that convinces nobody.",
      imageRef: 'lessons/argumentation/act01.jpg',
    },
    sections: [],
    milestone: "Tu sais qu'un avis ne devient un argument qu'avec une raison et un exemple. EN: You know an opinion only becomes an argument with a reason and an example.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_TRIER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: LA THÈSE
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a2-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La semaine de quatre jours',
  frSub: 'Une chronique, et sa thèse',
  text: CHRONIQUE_TEXT,
  glossary: [
    { word: 'caprice', en: 'whim', note: 'Une envie passagère, sans vraie raison.' },
    { word: 'roulements', en: 'rotas, shifts', note: 'Chacun à son tour, pour que le service continue.' },
    { word: 'condenser', en: 'to compress', note: 'Faire tenir la même chose dans moins de jours.' },
  ],
  questions: [
    { q: 'Global : quel est le but de cette chronique ?', a: 'Défendre la semaine de quatre jours contre ceux qui la jugent irréaliste.' },
    { q: 'Détail : où la thèse est-elle écrite ?', a: "À la fin du premier paragraphe : bien préparée, la semaine de quatre jours peut profiter autant aux entreprises qu'aux salariés." },
    { q: "Inférence : pourquoi la chroniqueuse cite-t-elle d'abord ses adversaires ?", a: 'Pour poser le débat : sa thèse répond à leur procès, et on voit contre qui elle écrit.' },
    { q: 'Position : sa conclusion répète-t-elle la thèse mot pour mot ?', a: "Non. Elle la reformule avec une condition (pour qui, à quelles conditions) et répond à la question du titre." },
  ],
  audio: REC('rec-b2-23-chronique'),
  say: REFRAME,
  terms: ['these', 'conclusion'],
};

/** NOTICE: what makes a thesis. */
const A2_THESE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-these',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-these',
  title: "Une thèse, c'est...",
  frSub: 'Quatre exigences',
  hint: 'Quatre cartes. Chacune écarte une fausse thèse.',
  audio: REC('rec-b2-23-these'),
  say: REFRAME,
  terms: ['these'],
  cards: [
    {
      head: 'Elle répond à la question', label: 'la question du titre',
      fr: fr(E(1617)), sub: rsOf(E(1617)),
      body: "Le titre demande si c'est une fausse bonne idée ; la thèse répond non, et dit à quelle condition. EN: the thesis answers the exact question asked.",
    },
    {
      head: 'Elle tranche', label: Cap(CONCESSION_REF),
      fr: fr(CL(1580)), sub: rsOf(CL(1580)),
      body: `${Cap(CONCESSION_REF)} te l'a montré : un avis équilibré pèse, puis il tranche. La thèse, c'est ce qu'il tranche. EN: a balanced view weighs, then decides; the thesis is the decision.`,
    },
    {
      head: 'Elle peut être contestée', label: 'pas un constat',
      fr: fr(E(1618)), sub: rsOf(E(1618)),
      body: "Personne ne discute ce fait : il n'y a donc rien à prouver. Un constat peut ouvrir un texte, pas le défendre. EN: an undisputed fact is not a thesis.",
    },
    {
      head: 'Elle tient en une phrase', label: 'avec une condition, au besoin',
      fr: fr(E(1626)), sub: rsOf(E(1626)),
      body: "Une phrase, une position, et si besoin une condition : à condition que, pourvu que, du moment que. EN: one sentence, with a condition if needed.",
    },
  ],
};

/** PRACTISE, on new questions: which sentence is a thesis? */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Thèse, ou pas encore',
  groups: [
    grp('Des thèses', [
      it(E(1623), 'une position'),
      it(E(1622), 'soutenu : à mon sens'),
      it(CL(1583), 'une thèse du B1'),
    ], chk(
      '« Le télétravail améliore-t-il la vie des salariés ? » Quelle phrase est une thèse ?',
      [fr(E(1619)), fr(E(1623)), fr(E(1620))], 1,
      "Elle répond, prend parti et peut être contestée. EN: it answers, takes a side, can be disputed.")),
    grp('Pas encore des thèses', [
      it(E(1618), 'un constat'),
      it(E(1621), 'une question'),
      it(E(1620), 'une phrase vraie partout'),
    ], chk(
      "Pourquoi « Il y a des avantages et des inconvénients » n'est-il pas une thèse ?",
      ['Il ne prend pas parti.', 'Il est trop court.', 'Il contient une faute.'], 0,
      "Tout a des avantages et des inconvénients : la phrase ne tranche rien. EN: true of everything, so it decides nothing.")),
    ctl('À mon sens', `« ${fr(E(1622))} » À mon sens veut dire...`,
      ['selon moi', 'de toute évidence', 'avec raison'], 0,
      "À mon sens : à mon avis, un peu plus soutenu. EN: in my view."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['these', 'opinion'],
};

/** PRACTISE: four false theses. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre fausses thèses',
  errors: [
    {
      wrong: fr(E(1619)),
      right: fr(E(1623)),
      why: "Normal : le sujet te semble important, donc tu le dis. Mais le lecteur attend ta réponse, pas ton intérêt. EN: give your answer, not the fact that the topic matters.",
    },
    {
      wrong: fr(E(1621)),
      right: 'Le télétravail est une bonne chose, à condition de garder des jours sur place.',
      why: "Recopier la question ressemble à une introduction. Mais une question ne défend rien : réponds-y. EN: a question defends nothing; answer it.",
    },
    {
      wrong: fr(E(1620)),
      right: fr(E(1626)),
      why: "La phrase paraît prudente. Elle est surtout vraie de tout, donc elle ne dit rien ici. Tranche, quitte à poser une condition. EN: decide, even with a condition.",
    },
    {
      wrong: fr(E(1618)),
      right: fr(E(1617)),
      why: "Un constat ouvre bien une introduction, mais il ne peut pas la fermer : personne ne le conteste. EN: a fact can open an introduction, not close it.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['these'],
};

/** USE: the thesis of your own article. */
const A2_MISSION = pourTaMission('a2-mission', 'Ta thèse', [
  grp("Le dossier sur l'argent liquide", [
    it(E(1633), 'une thèse'),
    it('fr.a2.argent-quotidien.060', 'le mot du sujet'),
  ], chk(
    "« Bientôt la fin de l'argent liquide ? » Ta thèse ?",
    ["L'argent liquide existe depuis très longtemps.", fr(E(1633)), "L'argent liquide est un sujet important."], 1,
    "Elle répond et prend parti. Les deux autres sont un constat et un sujet. EN: it answers and takes a side.")),
  ctl('La condition', 'Tu veux nuancer ta thèse. Tu ajoutes...',
    ['« à condition que chacun puisse encore choisir »', '« mais je ne sais pas trop »'], 0,
    "Une condition précise nuance ; un doute vague affaiblit. EN: a precise condition nuances, a vague doubt weakens."),
], ['these']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La thèse', "Une thèse, c'est...",
    ['le sujet reformulé', "ta réponse à la question, qu'on peut contester"], 1,
    "Une position, pas un thème. EN: a position, not a topic."),
  ctl('Sa place', 'Dans la chronique, la thèse arrive...',
    ["à la fin de l'introduction", 'seulement dans la dernière phrase', 'dans le titre'], 0,
    "Après avoir posé le débat. EN: once the debate is set out."),
  ctl('Le constat', `« ${fr(E(1618))} » C'est...`,
    ['une thèse', 'un constat'], 1,
    "Personne ne le conteste. EN: nobody disputes it."),
], ['these']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La thèse',
    opener: {
      line: "Une chroniqueuse défend une idée qu'on croyait réglée : ici tu trouves sa thèse, puis tu écris la tienne. EN: A columnist defends an idea people thought settled: here you find her thesis, then write yours.",
      imageRef: 'lessons/argumentation/act02.jpg',
    },
    sections: [],
    milestone: "Tu écris une thèse qui répond à la question, tranche, et peut être contestée. EN: You can write a thesis that answers the question, takes a side and can be disputed.",
    estScreens: 32, restPoints: ['a2-these'],
  },
  sections: [A2_LECTURE, A2_THESE, A2_CHOISIR, A2_ERREURS, A2_MISSION, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: PENSER, CROIRE, DOUTER
 *
 *  Builds on lesson 15 in B1 (je pense que / je ne pense pas que) and goes
 *  past it: certainty expressions + indicative, doubt and possibility +
 *  subjunctive, il semble que against il me semble que, and the inverted
 *  question of opinion.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le débat du matin',
  frSub: 'Les trottinettes, à Lyon',
  text: DEBAT_TEXT,
  glossary: [
    { word: 'en libre-service', en: 'shared, self-service', note: "À la disposition de tous, qu'on loue avec une application." },
    { word: 'adjointe aux mobilités', en: 'deputy mayor for transport', note: 'Une élue chargée des déplacements.' },
    { word: 'quoi que ce soit', en: 'anything at all', note: 'La moindre chose.' },
  ],
  questions: [
    { q: 'Global : sur quoi porte le désaccord ?', a: "Sur l'interdiction : Karim Haddad la veut, Élise Perrin préfère régler le stationnement." },
    { q: "Détail : relève deux phrases d'Élise Perrin au subjonctif.", a: "« je ne pense pas que les trottinettes soient dangereuses », « il est peu probable que nous fassions de même » (et « qu'interdire soit la seule solution »)." },
    { q: 'Inférence : pourquoi « Force est de constater que » est-il suivi de l’indicatif ?', a: 'Parce que Karim présente un fait comme établi : Paris les a interdites.' },
    { q: "Position : qui concède quelque chose à l'autre ?", a: "Élise Perrin : « Je reconnais que le système a des défauts. » Puis elle répond avec « Mais »." },
  ],
  audio: REC('rec-b2-23-debat'),
  say: REFRAME,
  terms: ['opinion', 'concession'],
};

/** NOTICE: the opinion expressions and their mood. */
const A3_MODES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-modes',
  layer: 'core',
  sheetId: 'sheet-opinion',
  title: "Six façons de donner son avis, six modes",
  cols: ['Expression', 'Ce qu’elle dit', 'Mode'],
  rows: [
    { cells: ['il est évident que', 'une certitude', 'indicatif'], say: fr(E(1634)),
      detail: { title: 'Affirmer', body: "Il est évident que, force est de constater que, je reconnais que, je suis convaincu que : tu présentes la chose comme vraie. EN: asserting takes the indicative.", say: fr(E(1644)) } },
    { cells: ['je ne pense pas que', 'une opinion niée', 'subjonctif'], say: fr(E(1637)),
      detail: { title: 'Nier son opinion', body: `${Cap(SUBJ_DECL_REF)} : « ${B115_REFRAME} » EN: ${B115_REFRAME_EN}`, say: fr(E(1646)) } },
    { cells: ['je doute que', 'un doute', 'subjonctif'], say: fr(E(1635)),
      detail: { title: 'Douter', body: "Douter, c'est déjà nier un peu : je doute que, il n'est pas certain que, puis le subjonctif. EN: doubt takes the subjunctive.", say: fr(E(1648)) } },
    { cells: ['il est possible que / probable que', 'possible / probable', 'subjonctif / indicatif'], say: fr(E(1642)),
      detail: { title: 'Possible ou probable', body: "Possible ouvre le subjonctif ; probable penche vers le vrai et garde l'indicatif. Peu probable redevient un doute. EN: possible takes the subjunctive, probable the indicative.", say: fr(E(1647)) } },
    { cells: ['il semble que / il me semble que', 'une apparence / une impression', 'subjonctif / indicatif'], say: fr(E(1641)),
      detail: { title: 'Sembler', body: `${fr(OA(1367))} EN: il semble que takes the subjunctive, il me semble que the indicative.`, say: fr(E(1638)) } },
    { cells: ['pensez-vous que… ?', 'une question inversée', 'subjonctif'], say: fr(E(1640)),
      detail: { title: 'La question', body: "Avec l'inversion, le doute est dans la question : pensez-vous que, croyez-vous que, puis le subjonctif. EN: an inverted opinion question takes the subjunctive.", say: fr(E(1651)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opinion'],
};

/** PRACTISE by ear, on new lines: affirm or doubt? HIDDEN LINES. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le télétravail, huit avis',
  frSub: 'Affirmer ou douter, à l’oreille',
  lines: [
    ln(E(1645)), ln(E(1646)), ln(E(1647)), ln(E(1648)),
    ln(E(1649)), ln(E(1650)), ln(E(1651)), ln(E(1652)),
  ],
  questions: [
    { q: 'Première phrase : la personne affirme, ou elle doute ?', opts: ['elle affirme', 'elle doute'], correct: 0, why: "Je crois que, puis l'indicatif : une affirmation. EN: an assertion." },
    { q: 'Deuxième phrase : pourquoi le verbe est-il au subjonctif ?', opts: ["parce que l'opinion est niée", 'parce que la phrase est au passé'], correct: 0, why: "Je ne crois pas que : le doute appelle soit devenu. EN: a denied opinion, subjunctive." },
    { q: 'Troisième phrase : la personne est-elle sûre ?', opts: ["presque : c'est probable", "pas du tout : c'est impossible"], correct: 0, why: "Probable garde l'indicatif : garderont. EN: probable, indicative." },
    { q: 'Cinquième phrase : quel mode suit « il est certain que » ?', opts: ["l'indicatif", 'le subjonctif'], correct: 0, why: "Une certitude : fatiguent, à l'indicatif. EN: certainty, indicative." },
    { q: 'Septième phrase : c’est...', opts: ['une affirmation', 'une question qui doute', 'un ordre'], correct: 1, why: "Croyez-vous que… puisse : l'inversion interroge, le subjonctif suit. EN: an inverted question, subjunctive." },
  ],
  audio: REC('rec-b2-23-modes-ecoute'),
  say: REFRAME,
  terms: ['opinion'],
};

/** PRACTISE, the trap: the wrong mood after an opinion. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Le mode de ton avis',
  rule: {
    title: 'Affirmer ou douter',
    body: "L'indicatif pour ce que tu présentes comme vrai ; le subjonctif pour ce que tu nies, mets en doute ou envisages seulement. EN: indicative for what you present as true; subjunctive for what you deny, doubt or merely allow.",
  },
  cards: [
    { promptLabel: 'une certitude', promptSound: 'Il est évident que les trottoirs soient encombrés.', fr: fr(E(1634)), ipa: ipaOf(E(1634)), tip: "Évident : tu affirmes, donc l'indicatif. EN: certainty, indicative." },
    { promptLabel: 'une opinion niée', promptSound: 'Je ne pense pas que les trottinettes sont dangereuses en elles-mêmes.', fr: fr(E(1637)), ipa: ipaOf(E(1637)), tip: "La négation ouvre le doute : soient. EN: denied, subjunctive." },
    { promptLabel: 'un doute', promptSound: 'Je doute que les usagers font attention sans contrôle.', fr: fr(E(1635)), ipa: ipaOf(E(1635)), tip: "Douter appelle le subjonctif : fassent. EN: doubt, subjunctive." },
    { promptLabel: 'un constat', promptSound: 'Force est de constater que Paris les ait interdites.', fr: fr(E(1644)), ipa: ipaOf(E(1644)), tip: "Force est de constater : un fait établi, l'indicatif. EN: an established fact, indicative." },
    { promptLabel: 'une apparence', promptSound: 'Il semble que les accidents sont moins nombreux cette année.', fr: fr(E(1641)), ipa: ipaOf(E(1641)), tip: "Il semble que, sans me : subjonctif. EN: il semble que, subjunctive." },
    { promptLabel: 'un aveu', promptSound: 'Je reconnais que le système ait des défauts.', fr: fr(E(1636)), ipa: ipaOf(E(1636)), tip: "Reconnaître, c'est admettre un fait : l'indicatif. EN: admitting a fact, indicative." },
  ],
  drill: [
    { promptSay: 'Il est évident que la ville ... raison.', opts: ['a', 'ait'], correct: 0 },
    { promptSay: 'Je doute que ce projet ... possible.', opts: ['est', 'soit'], correct: 1 },
    { promptSay: 'Il me semble que le prix ... trop élevé.', opts: ['est', 'soit'], correct: 0 },
    { promptSay: 'Il semble que le prix ... trop élevé.', opts: ['est', 'soit'], correct: 1 },
    { promptSay: 'Je ne crois pas que ce ... la solution.', opts: ['soit', 'est'], correct: 0 },
    { promptSay: 'Force est de constater que les chiffres ... baissé.', opts: ['aient', 'ont'], correct: 1 },
    { promptSay: 'Pensez-vous que la ville ... reculer ?', opts: ['puisse', 'peut'], correct: 0 },
    { promptSay: 'Il est peu probable que nous ... de même.', opts: ['faisons', 'fassions'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Affirmer ou douter' },
    { label: 'Six cartes', kind: 'cards', title: 'Le mauvais mode, corrigé' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-23-piege-modes'),
  say: REFRAME,
  terms: ['opinion'],
};

/** USE: the opinion verbs of your own article. */
const A3_MISSION = pourTaMission('a3-mission', "Tes verbes d'opinion", [
  grp('Pour affirmer ta thèse', [
    it(E(1656), 'la certitude'),
    it(E(1653), 'un fait établi, soutenu'),
    it(E(1658), 'soutenu'),
  ], chk(
    "« Je suis convaincu que l'argent liquide ... rester un choix. »",
    ['doit', 'doive'], 0,
    "Convaincu : tu affirmes, donc l'indicatif. EN: conviction, indicative.")),
  grp("Pour nier l'avis contraire", [
    it(OA(1297), 'le déclencheur'),
    it('fr.b1.opinions-et-avis.114', 'le doute'),
  ], chk(
    '« Je ne pense pas que la fin des espèces ... une bonne nouvelle. »',
    ['soit', 'est', 'sera'], 0,
    "L'opinion niée : le subjonctif. EN: denied opinion, subjunctive.")),
], ['opinion', 'these']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Affirmer', 'Après « il est évident que », tu mets...',
    ["l'indicatif", 'le subjonctif'], 0,
    "Une certitude. EN: certainty."),
  ctl('Nier', 'Après « je ne pense pas que », tu mets...',
    ["l'indicatif", 'le subjonctif', "l'infinitif"], 1,
    "L'opinion niée devient un doute. EN: a denied opinion becomes a doubt."),
  ctl('Sembler', '« Il semble que » et « il me semble que » prennent...',
    ['le même mode', 'deux modes différents'], 1,
    "Il semble que : subjonctif ; il me semble que : indicatif. EN: two different moods."),
], ['opinion']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Penser, croire, douter',
    opener: {
      line: "Deux invités, un micro, des trottinettes partout : ici tu entends comment le mode trahit la certitude. EN: Two guests, one microphone, scooters everywhere: here you hear how the mood gives away certainty.",
      imageRef: 'lessons/argumentation/act03.jpg',
    },
    sections: [],
    milestone: "Tu choisis le mode après chaque verbe d'opinion : l'indicatif pour affirmer, le subjonctif pour douter. EN: You pick the mood after every opinion verb.",
    estScreens: 40, restPoints: ['a3-modes', 'a3-piege'],
  },
  sections: [A3_LECTURE, A3_MODES, A3_ECOUTE, A3_PIEGE, A3_MISSION, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: PROUVER
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le paragraphe de Fatou',
  frSub: 'Avant et après la relecture',
  text: PARAGRAPHE_TEXT,
  glossary: [
    { word: 'malbouffe', en: 'junk food', note: 'La nourriture trop grasse, trop sucrée, trop salée.' },
    { word: 'annonceurs', en: 'advertisers', note: 'Les entreprises qui paient les publicités.' },
    { word: 'influençables', en: 'easily influenced', note: 'Qui changent facilement d’avis sous l’influence des autres.' },
  ],
  questions: [
    { q: "Global : qu'est-ce qui distingue les deux versions ?", a: "La première répète un avis ; la seconde annonce un argument, l'explique, puis l'illustre." },
    { q: 'Détail : quel exemple la version relue donne-t-elle ?', a: 'Le Québec, qui interdit la publicité destinée aux moins de treize ans depuis 1980.' },
    { q: 'Inférence : pourquoi le petit frère a-t-il disparu ?', a: 'Parce qu’une anecdote personnelle ne prouve rien pour tous les enfants.' },
    { q: 'Position : quelle phrase relie le paragraphe à la thèse ?', a: "La dernière : protéger les enfants ne revient pas à les priver de télévision, mais à leur laisser le temps d'apprendre à lire les publicités." },
  ],
  audio: REC('rec-b2-23-paragraphe'),
  say: REFRAME,
  terms: ['argument', 'exemple'],
};

/** NOTICE: the three beats, and the example introducers. */
const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  sheetId: 'sheet-preuves',
  title: "L'argument, l'explication, l'exemple",
  examples: [
    ex(E(1660), "Annoncer : le premier argument tient à..."),
    ex(E(1661), "Expliquer : pourquoi c'est vrai."),
    ex(E(1662), "Ainsi : l'exemple suit l'explication."),
    ex(E(1670), "Prenons l'exemple de : un cas précis, qu'on peut nommer."),
    ex(E(1672), "Comme le montre : l'exemple devient une preuve."),
    ex(E(1671), "C'est le cas de : l'argument se retrouve dans la réalité."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['argument', 'exemple'],
};

/** PRACTISE, on new material: which example proves which argument? */
const A4_RELIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-relier',
  layer: 'core',
  size: 'lg',
  title: 'Un argument et sa preuve',
  groups: [
    grp('Un argument et son exemple', [
      it(E(1660), "l'argument"),
      it(E(1663), "l'exemple"),
    ], chk(
      "L'exemple du Québec prouve...",
      ['que les enfants aiment les céréales', "qu'une interdiction est possible, et qu'elle dure", 'que la télévision est dangereuse'], 1,
      "Il montre que la mesure proposée existe déjà ailleurs. EN: it shows the measure already works elsewhere.")),
    grp("Des exemples qu'on peut vérifier", [
      it(E(1670), 'un pays'),
      it(E(1671), 'des écoles'),
      it(E(1674), 'plusieurs pays'),
    ], chk(
      "Laquelle est une preuve, plutôt qu'une anecdote ?",
      [fr(E(1665)), fr(E(1670))], 1,
      "Un cas nommé et vérifiable pèse plus qu'un souvenir. EN: a named, checkable case weighs more than a memory.")),
    ctl('Le lien', 'Après un exemple, la phrase la plus utile...',
      ["relie l'exemple à la thèse", 'raconte un deuxième souvenir'], 0,
      "Sans ce lien, le lecteur se demande à quoi sert l'exemple. EN: link it back to the thesis."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['argument', 'exemple'],
};

/** PRACTISE: four false proofs. */
const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre fausses preuves',
  errors: [
    {
      wrong: fr(E(1664)),
      right: fr(E(1661)),
      why: "Tu crois que c'est évident, donc tu ne l'expliques pas. « Tout le monde sait » n'est pas une preuve : dis ce qu'on sait, et pourquoi. EN: explain instead of claiming everyone knows.",
    },
    {
      wrong: fr(E(1665)),
      right: fr(E(1663)),
      why: "Un souvenir personnel est vivant, et le lecteur l'oublie aussitôt. Un cas connu et vérifiable pèse davantage. EN: a checkable case outweighs an anecdote.",
    },
    {
      wrong: "90 % des parents sont d'accord avec moi.",
      right: "Beaucoup de parents s'inquiètent de ces publicités.",
      why: "Un chiffre précis sans source se remarque et ruine ta crédibilité. Sans source, préfère une formule mesurée. EN: an unsourced exact figure costs credibility; use measured wording.",
    },
    {
      wrong: 'La publicité est mauvaise. Elle est vraiment très mauvaise.',
      right: fr(E(1660)),
      why: "Répéter l'avis plus fort ne l'explique pas. Remplace le deuxième adjectif par une raison. EN: replace repetition with a reason.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['exemple', 'argument'],
};

/** USE: prove out loud what you will write. ’ only, no corpus row. */
const A4_MISSION: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a4-mission',
  layer: 'core',
  title: 'Pour ta mission',
  setting: 'Au café, ton collègue Julien défend la fin de l’argent liquide. Il te pousse à prouver ce que tu dis. EN: At the café, your colleague Julien argues for the end of cash and pushes you to prove your point.',
  turns: [
    {
      ai: 'L’argent liquide, franchement, ça ne sert plus à rien. Tu as un argument ?',
      en: 'Frankly, cash is no use any more. Have you got an argument?',
      user: 'Oui : beaucoup de gens ne sont pas à l’aise avec une carte ou une application.',
      userEn: 'Yes: many people are not comfortable with a card or an app. (An argument: a reason, not just an opinion.)',
      alts: [
        { fr: 'Oui : tout le monde n’a pas de compte en banque.', en: 'Yes: not everybody has a bank account. (Another reason.)' },
        { fr: 'Oui : les espèces fonctionnent même quand le réseau tombe en panne.', en: 'Yes: cash works even when the network goes down.' },
      ],
    },
    {
      ai: 'Ah oui ? Par exemple ?',
      en: 'Really? For example?',
      user: 'Ma voisine a quatre-vingt-cinq ans, et elle paie tout en billets.',
      userEn: 'My neighbour is eighty-five and pays for everything in notes. (An example: a concrete case.)',
      alts: [
        { fr: 'Prenons l’exemple de ma grand-mère : elle n’a jamais utilisé d’application.', en: 'Take my grandmother: she has never used an app. (Prenons l’exemple de.)' },
        { fr: 'Dans mon quartier, le marché du samedi accepte surtout les espèces.', en: 'In my area, the Saturday market mostly takes cash.' },
      ],
    },
    {
      ai: 'D’accord, mais c’est un cas isolé.',
      en: 'All right, but that is an isolated case.',
      user: 'Peut-être, mais beaucoup de personnes âgées sont dans la même situation.',
      userEn: 'Maybe, but many elderly people are in the same situation. (From the example back to the argument, without an invented figure.)',
      alts: [
        { fr: 'Un exemple ne prouve pas tout, mais il montre que le problème existe.', en: 'One example does not prove everything, but it shows the problem exists.' },
        { fr: 'C’est vrai, mais elle n’est sûrement pas la seule.', en: 'True, but she is surely not the only one.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['exemple', 'argument'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Les trois temps', 'Un paragraphe qui prouve contient...',
    ['un argument, une explication, un exemple', 'trois fois le même avis'], 0,
    "Annoncer, expliquer, illustrer. EN: state, explain, illustrate."),
  ctl("L'anecdote", 'Un souvenir de ton petit frère, c’est...',
    ['une preuve pour tous les enfants', 'une anecdote, qui illustre sans prouver'], 1,
    "Un cas ne fait pas une règle. EN: one case is not a rule."),
  ctl('Le chiffre', "Tu n'as pas de source. Tu écris...",
    ['« 90 % des gens »', '« beaucoup de gens »', '« absolument tout le monde »'], 1,
    "Une formule mesurée, qu'on peut défendre. EN: a measured phrase you can defend."),
], ['argument', 'exemple']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Prouver',
    opener: {
      line: "Fatou relit son paragraphe et supprime son petit frère : ici tu apprends ce qui prouve, et ce qui amuse seulement. EN: Fatou rereads her paragraph and cuts her little brother: here you learn what proves, and what only entertains.",
      imageRef: 'lessons/argumentation/act04.jpg',
    },
    sections: [],
    milestone: "Chaque argument que tu écris est annoncé, expliqué, puis illustré par un exemple vérifiable. EN: Every argument you write is stated, explained and illustrated.",
    estScreens: 32, restPoints: ['a4-exemples'],
  },
  sections: [A4_LECTURE, A4_EXEMPLES, A4_RELIER, A4_ERREURS, A4_MISSION, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: NUANCER
 *
 *  Lesson 22 in B2 (academic style) teaches the cautious claim; this act
 *  uses it for one job: saying only what you can defend.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Deux façons de dire',
  frSub: 'Les réseaux sociaux et les adolescents',
  text: NUANCE_TEXT,
  glossary: [
    { word: 'mal-être', en: 'unhappiness, malaise', note: 'Le fait de ne pas se sentir bien, sans maladie précise.' },
    { word: 'fatalité', en: 'inevitability', note: 'Ce qui arrive forcément, quoi qu’on fasse.' },
    { word: 'en bloc', en: 'wholesale, across the board', note: 'Tout d’un coup, sans distinguer.' },
  ],
  questions: [
    { q: 'Global : les deux versions défendent-elles la même idée ?', a: "À peu près : l'usage des réseaux pose un problème. Mais A exagère et veut tout interdire ; B mesure et propose d'encadrer." },
    { q: 'Détail : relève trois mots absolus dans la version A.', a: "Tous, toujours, aucun ; et « c'est prouvé », « c'est évident »." },
    { q: 'Inférence : pourquoi B cite-t-elle ce qui va contre elle, les jeunes isolés ?', a: 'Pour montrer qu’elle a pesé les deux côtés : sa conclusion en devient plus crédible.' },
    { q: 'Position : que propose finalement la version B ?', a: "D'encadrer l'usage plutôt que de l'interdire en bloc." },
  ],
  audio: REC('rec-b2-23-nuance'),
  say: REFRAME,
  terms: ['nuance'],
};

/** NOTICE: the certainty scale. */
const A5_ECHELLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-echelle',
  layer: 'core',
  sheetId: 'sheet-opinion',
  title: 'Du certain au possible',
  cols: ['Degré', 'Pour le dire', 'Mode'],
  rows: [
    { cells: ['certain', 'il est indéniable que', 'indicatif'], say: fr(E(1695)),
      detail: { title: 'Le certain', body: "Réserve-le à ce que personne ne discute : il est indéniable que, force est de constater que. EN: keep it for what nobody disputes.", say: fr(E(1644)) } },
    { cells: ['très probable', 'sans doute, il est probable que', 'indicatif'], say: fr(E(1677)),
      detail: { title: 'Le probable', body: "Sans doute veut dire probablement, pas sans aucun doute. EN: sans doute means probably, not undoubtedly.", say: fr(E(1647)) } },
    { cells: ['possible', 'il se peut que, il se pourrait que', 'subjonctif'], say: fr(E(1642)),
      detail: { title: 'Le possible', body: "Tu ouvres une hypothèse sans l'affirmer, et le subjonctif le montre. EN: an open hypothesis, in the subjunctive.", say: fr(E(1691)) } },
    { cells: ['en partie', 'dans une certaine mesure, en partie', 'selon la phrase'], say: fr(E(1679)),
      detail: { title: 'La limite', body: "Tu dis jusqu'où ton argument va, et pas plus loin. EN: you say how far your argument goes.", say: fr(E(1680)) } },
    { cells: ['le nombre', 'la plupart, beaucoup, une partie de', 'selon la phrase'], say: fr(E(1687)),
      detail: { title: 'Le nombre', body: "À la place de tous : la plupart, beaucoup, certains. EN: instead of all.", say: fr(E(1675)) } },
    { cells: ['la fréquence', 'souvent, rarement, parfois', 'selon la phrase'], say: fr(E(1689)),
      detail: { title: 'La fréquence', body: `À la place de toujours et jamais. ${Cap(STYLE_REF)} en fait une règle du style universitaire. EN: instead of always and never.`, say: fr(E(1693)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nuance', 'opinion'],
};

/** PRACTISE by ear, on new lines: defensible, or too much? HIDDEN LINES. */
const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Huit phrases à peser',
  frSub: 'Mesurée, ou trop sûre d’elle',
  lines: [
    ln(E(1687)), ln(E(1688)), ln(E(1689)), ln(E(1690)),
    ln(E(1691)), ln(E(1692)), ln(E(1693)), ln(E(1694)),
  ],
  questions: [
    { q: 'Première phrase : combien d’habitants approuvent le projet ?', opts: ['la plupart, pas tous', 'tous, sans exception'], correct: 0, why: "La plupart : une majorité, pas l'unanimité. EN: most, not all." },
    { q: 'Deuxième phrase : cette phrase peut-elle être défendue ?', opts: ["difficilement : c'est une généralisation", "oui : c'est un fait mesuré"], correct: 0, why: "Un seul habitant qui aime le projet suffit à la faire tomber. EN: one counter-example knocks it down." },
    { q: 'Quatrième phrase : quel mot la rend fragile ?', opts: ['jamais', 'mesure', 'cette'], correct: 0, why: "Jamais promet plus que tu ne peux prouver. EN: never promises too much." },
    { q: 'Cinquième phrase : la personne affirme-t-elle que les commerçants perdront ?', opts: ['non, elle envisage une possibilité', "oui, c'est certain"], correct: 0, why: "Il se pourrait que, et le subjonctif : une hypothèse. EN: a possibility." },
    { q: 'Dernière phrase : « c’est prouvé » est ici...', opts: ['une preuve', 'une affirmation sans source'], correct: 1, why: "Prouvé par qui, comment ? Sans source, le mot ne prouve rien. EN: proven by whom?" },
  ],
  audio: REC('rec-b2-23-nuance-ecoute'),
  say: REFRAME,
  terms: ['nuance'],
};

/** PRACTISE, the trap: the absolute word. */
const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Ni tout, ni rien',
  rule: {
    title: 'Le mot absolu',
    body: "Tous, toujours, jamais, aucun, c'est prouvé : ces mots promettent plus que tu ne peux prouver. Un seul contre-exemple suffit à les faire tomber. EN: absolute words promise more than you can prove; one counter-example knocks them down.",
  },
  cards: [
    { promptLabel: 'tous', promptSound: fr(E(1681)), fr: fr(E(1676)), ipa: ipaOf(E(1676)), tip: "Beaucoup d'entre eux : vrai, et défendable. EN: many, not all." },
    { promptLabel: 'détruire', promptSound: fr(E(1682)), fr: fr(E(1675)), ipa: ipaOf(E(1675)), tip: "Sembler peser sur une partie : tu mesures l'effet. EN: measure the effect." },
    { promptLabel: "c'est prouvé", promptSound: "C'est prouvé : les réseaux rendent anxieux.", fr: fr(E(1678)), ipa: ipaOf(E(1678)), tip: "Un lien n'est pas une cause unique. EN: a link is not a sole cause." },
    { promptLabel: 'jamais', promptSound: fr(E(1690)), fr: fr(E(1689)), ipa: ipaOf(E(1689)), tip: "Souvent : la fréquence que tu peux défendre. EN: often, not never." },
    { promptLabel: 'tout le monde', promptSound: fr(E(1688)), fr: fr(E(1687)), ipa: ipaOf(E(1687)), tip: "La plupart : une majorité, pas l'unanimité. EN: most, not everybody." },
    { promptLabel: "c'est évident", promptSound: "Il faut tout interdire, c'est évident.", fr: fr(E(1680)), ipa: ipaOf(E(1680)), tip: "C'est évident dispense de prouver. Propose, et dis pourquoi. EN: obvious excuses you from proving." },
  ],
  drill: [
    { promptSay: '... adolescents utilisent les réseaux sociaux.', opts: ['La plupart des', 'Tous les'], correct: 0 },
    { promptSay: 'Ce type de mesure réduit ... la circulation.', opts: ['toujours', 'souvent'], correct: 1 },
    { promptSay: 'Les écrans jouent ... un rôle dans la fatigue.', opts: ['sans doute', 'forcément'], correct: 0 },
    { promptSay: 'Plusieurs études ... un lien.', opts: ['prouvent définitivement', 'suggèrent'], correct: 1 },
    { promptSay: 'Cette mesure aide ... les jeunes isolés.', opts: ['dans une certaine mesure', 'totalement'], correct: 0 },
    { promptSay: '... jeunes lisent encore des livres.', opts: ['Aucun', 'Beaucoup de'], correct: 1 },
    { promptSay: 'Il ... que la mesure soit utile.', opts: ['se peut', 'est certain'], correct: 0 },
    { promptSay: 'Le problème vient ... des réseaux.', opts: ['entièrement', 'en partie'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le mot absolu' },
    { label: 'Six cartes', kind: 'cards', title: 'De l’excès à la mesure' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases mesurées' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-23-piege-nuance'),
  say: REFRAME,
  terms: ['nuance'],
};

/** USE: the right measure in your own article. */
const A5_MISSION = pourTaMission('a5-mission', 'Ta juste mesure', [
  grp('Pour ton article', [
    it(E(1695), 'le certain, quand il l’est'),
    it(E(1683), 'la limite, à l’oral comme à l’écrit'),
    it(E(1684), 'le probable'),
  ], chk(
    'Tu écris sur les commerces qui refusent les espèces. Quelle phrase peux-tu défendre ?',
    ['Tous les commerces refusent les espèces.', 'De plus en plus de commerces refusent les espèces.', "Plus aucun commerce n'accepte les billets."], 1,
    "De plus en plus : une tendance, que tout lecteur peut observer. EN: a trend, not an absolute.")),
  ctl('La prudence', "Tu as lu un chiffre, mais tu n'es pas sûr de sa source. Tu écris...",
    ['« selon certaines estimations »', '« c’est prouvé »'], 0,
    "Tu signales le doute au lieu de le cacher. EN: flag the doubt instead of hiding it."),
], ['nuance', 'opinion']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Tous', 'Un seul contre-exemple suffit à faire tomber...',
    ['une généralisation', 'une phrase nuancée'], 0,
    "Tous devient faux dès qu'un seul fait exception. EN: all fails at the first exception."),
  ctl('Sans doute', '« Sans doute » veut dire...',
    ['sans aucun doute', 'probablement'], 1,
    "Un faux ami : sans doute, c'est probablement. EN: a false friend, it means probably."),
  ctl('La nuance', "Nuancer, c'est...",
    ['hésiter', 'mesurer ce que tu peux défendre', 'ne pas prendre position'], 1,
    "Tu prends position, à la bonne mesure. EN: take a position, at the right measure."),
], ['nuance']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Nuancer',
    opener: {
      line: "Le même paragraphe, crié puis mesuré : ici tu découvres lequel convainc vraiment. EN: The same paragraph, shouted then measured: here you find out which one really convinces.",
      imageRef: 'lessons/argumentation/act05.jpg',
    },
    sections: [],
    milestone: "Tu remplaces les mots absolus par ce que tu peux défendre, sans renoncer à ta position. EN: You replace absolute words with what you can defend, and keep your position.",
    estScreens: 40, restPoints: ['a5-echelle', 'a5-piege'],
  },
  sections: [A5_LECTURE, A5_ECHELLE, A5_ECOUTE, A5_PIEGE, A5_MISSION, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: L'OBJECTION ET LA RÉPONSE
 *
 *  Lesson 32 in B1 taught certes… mais and the balanced opinion; this act
 *  makes the objection a part of the argument: stated fairly, then answered.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Deux lettres opposées',
  frSub: 'Le vote obligatoire',
  text: LETTRES_TEXT,
  glossary: [
    { word: 'voter blanc', en: 'to cast a blank vote', note: 'Voter sans choisir de candidat.' },
    { word: 'vote par anticipation', en: 'advance voting', note: 'Voter quelques jours avant le jour de l’élection.' },
    { word: 'amende', en: 'fine', note: 'Une somme à payer quand on ne respecte pas une règle.' },
  ],
  questions: [
    { q: 'Global : sur quoi les deux lecteurs sont-ils d’accord ?', a: 'Sur le constat : la participation baisse. Ils divergent sur le remède.' },
    { q: 'Détail : quelle objection Hélène Gagnon prévoit-elle, et comment y répond-elle ?', a: "On ne force pas quelqu'un à s'intéresser à la politique. Elle répond que l'obligation ne porte que sur le déplacement : on peut voter blanc." },
    { q: 'Inférence : pourquoi Yves Lambert commence-t-il par « Il est vrai que » ?', a: "Pour reconnaître le constat de son adversaire avant de contester son remède : sa réponse paraît plus juste." },
    { q: 'Position : laquelle des deux lettres te convainc le plus, et pourquoi ?', a: "Réponse libre. Cite l'argument décisif, et dis s'il répond vraiment à l'objection de l'autre lettre." },
  ],
  audio: REC('rec-b2-23-lettres'),
  say: REFRAME,
  terms: ['objection', 'concession'],
};

/** NOTICE: four tools to concede, then answer. */
const A6_OUTILS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-outils',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-refuter',
  title: 'Concéder, puis répondre',
  frSub: 'Quatre outils',
  hint: 'Quatre cartes, de la plus courante à la plus soutenue.',
  audio: REC('rec-b2-23-outils'),
  say: REFRAME,
  terms: ['concession', 'objection'],
  cards: [
    {
      head: 'Certes… mais', label: Cap(CONCESSION_REF),
      fr: fr(E(1701)), sub: rsOf(E(1701)),
      body: `« ${B132_REFRAME} » Certes pose le poids adverse ; mais fait pencher la balance. EN: ${B132_REFRAME_EN}`,
    },
    {
      head: 'Il est vrai que… cependant', label: 'reconnaître, puis répondre',
      fr: fr(E(1699)), sub: rsOf(E(1699)),
      body: "Tu reconnais un fait, puis tu montres qu'il ne suffit pas : cependant, pourtant, il n'en reste pas moins que. EN: grant the fact, then show it is not enough.",
    },
    {
      head: 'On pourrait objecter que', label: "faire parler l'adversaire",
      fr: fr(E(1697)), sub: rsOf(E(1697)),
      body: "Tu formules toi-même l'objection, au conditionnel, avant d'y répondre. Le lecteur voit que tu l'as prévue. EN: voice the objection yourself, then answer it.",
    },
    {
      head: "Admettons que… il n'en reste pas moins que", label: 'soutenu',
      fr: fr(E(1707)), sub: rsOf(E(1707)),
      body: "Tu acceptes l'hypothèse adverse, au subjonctif, pour montrer que ta position tient même dans ce cas. EN: grant the opposing hypothesis and show your position still holds.",
    },
  ],
};

/** PRACTISE: pair the concession with its answer. */
const A6_ASSORTIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-assortir',
  layer: 'core',
  size: 'lg',
  title: 'Une concession, une réponse',
  groups: [
    grp('Concéder', [
      it(E(1699), 'un fait reconnu'),
      it(CL(1581), 'le mot du B1'),
      it(E(1702), 'une inquiétude partagée'),
    ], chk(
      'Après « Il est vrai que la participation baisse », quelle suite est une réponse ?',
      [fr(E(1700)), 'Et c’est très grave.', 'De plus, la participation baisse.'], 0,
      "Cependant ouvre la réponse. Les deux autres vont dans le même sens. EN: cependant opens the answer.")),
    grp('Répondre', [
      it(E(1700), 'cependant'),
      it(E(1698), 'mais'),
      it(E(1711), 'pourtant'),
    ], chk(
      `« ${fr(E(1711))} » Pourtant...`,
      ['introduit la réponse', 'ajoute un argument dans le même sens'], 0,
      "Après la concession, pourtant renverse. EN: after the concession, pourtant turns it round.")),
    ctl('Force est de constater', '« Force est de constater que les plus jeunes votent moins. » L’auteur...',
      ["présente un fait qu'on ne peut pas nier", 'avoue un doute'], 0,
      "Un fait établi, qui ferme la discussion. EN: an established fact."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concession', 'objection'],
};

/** PRACTISE: four ways to miss the objection. */
const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: "Quatre façons de rater l'objection",
  errors: [
    {
      wrong: fr(E(1710)),
      right: fr(E(1711)),
      why: "Tu crois avoir concédé. Mais balayer le point adverse dans la même phrase revient à ne rien concéder, et le correcteur le voit. EN: a concession dismissed at once does not count.",
    },
    {
      wrong: fr(E(1709)),
      right: fr(E(1697)),
      why: "Déformer l'adversaire rend la victoire facile, et fausse. Énonce sa vraie raison, la meilleure. EN: state the opponent's real argument, not a caricature.",
    },
    {
      wrong: 'Certes, la participation baisse. (et rien après)',
      right: "Certes, la participation baisse, mais l'obligation n'en soignerait pas la cause.",
      why: "Certes annonce une réponse. Sans elle, tu viens de donner raison à l'autre. EN: certes promises a but.",
    },
    {
      wrong: 'Force est de constater que les jeunes soient moins nombreux à voter.',
      right: 'Force est de constater que les jeunes sont moins nombreux à voter.',
      why: "Force est de constater présente un fait établi : l'indicatif, comme après il est évident que. EN: an established fact takes the indicative.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['objection', 'concession'],
};

/** USE: concede and answer out loud. ’ only, no corpus row. */
const A6_MISSION: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a6-mission',
  layer: 'core',
  title: 'Pour ta mission',
  setting: 'Au bureau, Yves te demande ce que tu penses de la fin de l’argent liquide. Concède ce qui est juste, puis réponds. EN: At work, Yves asks what you think of the end of cash; concede what is fair, then answer.',
  turns: [
    {
      ai: 'Franchement, payer par carte, c’est plus rapide. Tu ne peux pas dire le contraire.',
      en: 'Frankly, paying by card is quicker. You cannot say otherwise.',
      user: 'Il est vrai que c’est plus rapide. Cependant, tout le monde n’a pas de carte.',
      userEn: 'It is true that it is quicker. However, not everyone has a card. (Concede, then answer.)',
      alts: [
        { fr: 'Certes, c’est plus rapide, mais la rapidité n’est pas le seul critère.', en: 'Admittedly it is quicker, but speed is not the only criterion.' },
        { fr: 'Je ne nie pas que ce soit plus rapide ; il n’en reste pas moins que beaucoup de gens préfèrent les billets.', en: 'I do not deny it is quicker; the fact remains that many people prefer notes. (Subjunctive after je ne nie pas que.)' },
      ],
    },
    {
      ai: 'Et la fraude ? Les billets, ça facilite le travail au noir.',
      en: 'And fraud? Notes make undeclared work easier.',
      user: 'C’est vrai en partie, mais la fraude en ligne augmente aussi : la carte ne règle pas tout.',
      userEn: 'That is partly true, but online fraud is rising too: the card does not solve everything. (A nuanced concession, then a rebuttal.)',
      alts: [
        { fr: 'On pourrait le penser. Pourtant, les escroqueries par carte existent aussi.', en: 'You might think so. And yet card scams exist too.' },
        { fr: 'Admettons que les billets facilitent la fraude ; ce n’est pas une raison pour les interdire à tous.', en: 'Let us assume notes make fraud easier; that is no reason to ban them for everyone.' },
      ],
    },
    {
      ai: 'Donc tu es contre le paiement par carte ?',
      en: 'So you are against paying by card?',
      user: 'Pas du tout : je veux seulement qu’on garde le choix.',
      userEn: 'Not at all: I just want us to keep the choice. (Correct the straw man: say what you really defend.)',
      alts: [
        { fr: 'Non, je défends les deux : la carte et les espèces.', en: 'No, I defend both: cards and cash.' },
        { fr: 'Ce n’est pas ce que je dis : je refuse seulement qu’on supprime les espèces.', en: 'That is not what I am saying: I only refuse the abolition of cash.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['objection', 'concession'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Certes', 'Après « certes », on attend...',
    ['une réponse : mais, cependant', 'la fin du texte'], 0,
    "Certes promet un mais. EN: certes promises a but."),
  ctl("L'objection", "Tu cites l'argument adverse...",
    ["en le déformant pour qu'il soit faible", 'fidèlement, dans sa version la plus forte'], 1,
    "Battre la vraie objection vaut des points ; battre une caricature en coûte. EN: beat the real objection."),
  ctl('Admettons que', '« Admettons que » est suivi...',
    ["de l'indicatif", 'du subjonctif', "de l'infinitif"], 1,
    "Une hypothèse acceptée : le subjonctif. EN: a granted hypothesis, subjunctive."),
], ['objection', 'concession']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: "L'objection et la réponse",
    opener: {
      line: "Deux lecteurs, deux lettres, un même constat : ici tu donnes raison à l'autre sur un point, puis tu lui réponds. EN: Two readers, two letters, one shared diagnosis: here you grant the other side a point, then answer it.",
      imageRef: 'lessons/argumentation/act06.jpg',
    },
    sections: [],
    milestone: "Tu énonces l'objection fidèlement, tu la concèdes sur un point, puis tu y réponds. EN: You state the objection fairly, grant a point, then answer it.",
    estScreens: 34, restPoints: ['a6-outils'],
  },
  sections: [A6_LECTURE, A6_OUTILS, A6_ASSORTIR, A6_ERREURS, A6_MISSION, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: OUVRIR ET FERMER
 *
 *  The introduction (hook, question, thesis or plan) and the conclusion
 *  (sum-up, answer, opening). Its quiz round is the TEF essay-opening round.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La copie de Tomás',
  frSub: 'Une introduction et une conclusion, avant et après',
  text: COPIE_TEXT,
  glossary: [
    { word: 'mis les pieds', en: 'set foot', note: 'Être allé quelque part, même une fois.' },
    { word: 'gratuité ciblée', en: 'targeted free entry', note: 'La gratuité pour certains publics seulement.' },
    { word: 'ressources', en: 'income, funds', note: "L'argent dont un établissement dispose." },
  ],
  questions: [
    { q: 'Global : que reproche la professeure à Tomás ?', a: "Son introduction ne pose pas la question, sa conclusion n'y répond pas, et il ajoute un argument à la fin." },
    { q: 'Détail : quelle est la problématique de la nouvelle introduction ?', a: '« Faut-il pour autant la généraliser ? »' },
    { q: 'Inférence : pourquoi la nouvelle amorce parle-t-elle du Louvre ?', a: "Un fait précis et surprenant accroche mieux qu'une généralité, et il fait naître la question." },
    { q: 'Position : quelle est finalement la thèse de Tomás ?', a: 'Une gratuité ciblée : pour les jeunes, pour les habitants, et un dimanche par mois pour tous.' },
  ],
  audio: REC('rec-b2-23-copie'),
  say: REFRAME,
  terms: ['conclusion', 'these'],
};

/** NOTICE: the moves of the introduction and the conclusion. */
const A7_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a7-focus',
  layer: 'core',
  sheetId: 'sheet-these',
  title: "Ce qu'on attend au début et à la fin",
  points: [
    "L'amorce : un fait, une situation, une question précise. Jamais « depuis la nuit des temps ». EN: a precise hook, never since the dawn of time.",
    'La problématique : la question que ton texte va trancher, en une phrase. EN: the question your text will settle.',
    "La thèse, ou l'annonce du plan : ce que tu vas défendre, et dans quel ordre. EN: your thesis or your plan.",
    'La conclusion : le bilan, une réponse nette, puis une ouverture. Aucun nouvel argument. EN: sum up, answer, open; no new argument.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conclusion', 'these'],
};

/** PRACTISE: which line opens, which line closes. */
const A7_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-trier',
  layer: 'core',
  size: 'lg',
  title: 'Pour ouvrir, pour fermer',
  groups: [
    grp('Pour ouvrir', [
      it(E(1716), "l'amorce"),
      it(E(1717), 'la problématique'),
      it(E(1718), "l'annonce du plan"),
    ], chk(
      'Laquelle est une amorce utile ?',
      [fr(E(1714)), 'En 2019, le Louvre a accueilli près de dix millions de visiteurs.', fr(E(1715))], 1,
      "Un fait précis, qui prépare la question. EN: a precise fact that sets up the question.")),
    grp('Pour fermer', [
      it(E(1719), 'la réponse'),
      it(E(1728), 'le bilan'),
      it(E(1720), "l'ouverture"),
    ], chk(
      'Laquelle répond à la question « les musées devraient-ils être gratuits ? »',
      [fr(E(1721)), fr(E(1719))], 1,
      "Une réponse nette, et même nuancée. EN: a clear, even qualified, answer.")),
    ctl("L'ouverture", `« ${fr(E(1720))} » C'est...`,
      ['un nouvel argument', 'une ouverture sur une question plus large'], 1,
      "Elle prolonge la réflexion sans rouvrir le débat. EN: it widens the question without reopening it."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conclusion', 'these'],
};

/** PRACTISE, the trap: six weak openings and endings. */
const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Six débuts et fins à refaire',
  rule: {
    title: 'Ouvrir sur la question, fermer sur la réponse',
    body: "L'introduction pose le problème ; la conclusion le règle. Entre les deux, ce que tu défends ne change pas. EN: the introduction poses the problem, the conclusion settles it.",
  },
  cards: [
    { promptLabel: 'une amorce creuse', promptSound: fr(E(1714)), fr: fr(E(1716)), ipa: ipaOf(E(1716)), tip: "Ces phrases vont avec n'importe quel sujet : le lecteur les saute. EN: they fit any topic, so readers skip them." },
    { promptLabel: 'une annonce plate', promptSound: fr(E(1715)), fr: fr(E(1718)), ipa: ipaOf(E(1718)), tip: "Dis ce que tu vas montrer, pas de quoi tu vas parler. EN: say what you will show." },
    { promptLabel: 'pas de question', promptSound: fr(E(1620)), fr: fr(E(1717)), ipa: ipaOf(E(1717)), tip: "Pose la question que ton texte va trancher. EN: ask the question you will settle." },
    { promptLabel: 'une fin sans réponse', promptSound: fr(E(1721)), fr: fr(E(1719)), ipa: ipaOf(E(1719)), tip: "Chacun son avis n'est pas une réponse. Tranche. EN: decide." },
    { promptLabel: 'un argument de trop', promptSound: 'De plus, les musées devraient aussi ouvrir le soir.', fr: fr(E(1728)), ipa: ipaOf(E(1728)), tip: "Une idée nouvelle à la fin reste sans preuve. Fais le bilan. EN: a new idea at the end goes unproven." },
    { promptLabel: 'une ouverture hors sujet', promptSound: 'Et vous, aimez-vous les musées ?', fr: fr(E(1720)), ipa: ipaOf(E(1720)), tip: "L'ouverture prolonge ta question ; elle ne change pas de sujet. EN: the opening extends your question." },
  ],
  drill: [
    { promptSay: 'Pour commencer une introduction :', opts: ['un fait précis', 'depuis la nuit des temps'], correct: 0 },
    { promptSay: 'La problématique est...', opts: ['un exemple', 'une question'], correct: 1 },
    { promptSay: 'Dans ce texte, je vais...', opts: ['montrer que la gratuité doit être ciblée', 'parler des musées'], correct: 0 },
    { promptSay: 'La conclusion ajoute...', opts: ['un nouvel argument', 'une réponse nette'], correct: 1 },
    { promptSay: 'En définitive, ...', opts: ['la gratuité est un moyen, pas une fin', 'chacun son avis'], correct: 0 },
    { promptSay: 'Nous verrons d’abord ce que la gratuité permet, ... ce qu’elle coûte.', opts: ['mais', 'puis'], correct: 1 },
    { promptSay: 'Une ouverture pose...', opts: ['une question plus large', 'la même question'], correct: 0 },
    { promptSay: 'La thèse arrive...', opts: ['dans la conclusion seulement', "à la fin de l'introduction"], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Ouvrir et fermer' },
    { label: 'Six cartes', kind: 'cards', title: 'Le début et la fin refaits' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six versions réussies' },
    { label: 'À toi', kind: 'drill', title: 'Huit choix', gate: true },
  ],
  audio: REC('rec-b2-23-piege-intro'),
  say: REFRAME,
  terms: ['conclusion'],
};

/** USE: your own introduction. */
const A7_MISSION = pourTaMission('a7-mission', 'Ton introduction', [
  grp('Ton amorce et ta question', [
    it(E(1717), 'une problématique, pour modèle'),
    it(E(1789), 'une thèse possible'),
  ], chk(
    'Pour ton article, quelle amorce ?',
    ["Depuis toujours, l'homme utilise de l'argent.", 'Dans ma rue, trois commerces sur cinq refusent désormais les billets.', "Je vais parler de l'argent liquide."], 1,
    "Un fait observé et précis fait naître la question. EN: a precise observed fact raises the question.")),
  ctl('Ta conclusion', 'Ta conclusion commence par « En somme ». Ensuite...',
    ['tu réponds à la question du dossier', "tu ajoutes l'argument de la panne"], 0,
    "La panne appartient à un argument, pas à la fin. EN: the outage belongs in an argument."),
], ['these', 'conclusion']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl("L'amorce", '« Depuis la nuit des temps » est...',
    ['une amorce creuse', 'une problématique'], 0,
    "Elle va avec tous les sujets, donc avec aucun. EN: it fits every topic, so none."),
  ctl('Trois temps', 'Une introduction contient...',
    ["l'amorce, la problématique, la thèse ou le plan", 'trois arguments'], 0,
    "Les arguments viennent après. EN: arguments come later."),
  ctl('La fin', 'Dans la conclusion, un nouvel argument...',
    ['renforce ta thèse', "n'a pas sa place"], 1,
    "La conclusion fait le bilan de ce qui est prouvé. EN: it sums up what was proved."),
], ['conclusion', 'these']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Ouvrir et fermer',
    opener: {
      line: "Tomás commence par la nuit des temps et finit par chacun son avis : ici tu réécris son début et sa fin. EN: Tomás starts with the dawn of time and ends with everyone has their opinion: here you rewrite both.",
      imageRef: 'lessons/argumentation/act07.jpg',
    },
    sections: [],
    milestone: "Ton introduction pose la question et donne ta thèse ; ta conclusion y répond, sans nouvel argument. EN: Your introduction asks the question, your conclusion answers it.",
    estScreens: 38, restPoints: ['a7-focus', 'a7-piege'],
  },
  sections: [A7_LECTURE, A7_FOCUS, A7_TRIER, A7_PIEGE, A7_MISSION, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: DEUX PLANS
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Un sujet, deux plans',
  frSub: 'Le tourisme dans les villes historiques',
  text: PLANS_TEXT,
  glossary: [
    { word: 'quota', en: 'quota, cap', note: 'Un nombre maximum fixé à l’avance.' },
    { word: 'patrimoine', en: 'heritage', note: 'Les monuments et les lieux reçus du passé.' },
    { word: 'tranche', en: 'decides, settles', note: 'Trancher : choisir nettement entre deux positions.' },
  ],
  questions: [
    { q: 'Global : pourquoi le texte propose-t-il deux plans ?', a: 'Parce que deux questions différentes appellent deux plans différents.' },
    { q: 'Détail : quelles sont les trois parties du plan dialectique ?', a: "Les raisons de limiter, les raisons de ne pas limiter, puis la position de l'auteur, qui tranche." },
    { q: 'Inférence : pourquoi le plan thématique ne demande-t-il pas de position pour ou contre ?', a: "Parce que « quels sont les effets » demande d'analyser, pas de trancher." },
    { q: "Position : quelle est la position de l'auteur dans le plan dialectique ?", a: "Limiter, mais par la réservation et des taxes ciblées, pas par l'interdiction." },
  ],
  audio: REC('rec-b2-23-plans'),
  say: REFRAME,
  terms: ['plans'],
};

/** NOTICE: the plans and when to use each. */
const A8_PLANS: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-plans',
  layer: 'core',
  sheetId: 'sheet-these',
  title: 'Quel plan pour quelle question',
  cols: ['Plan', 'Les parties', 'Pour quelle question'],
  rows: [
    { cells: ['dialectique', 'pour, contre, ta position', 'Faut-il… ? Pour ou contre ?'], say: fr(E(1732)),
      detail: { title: 'Le plan dialectique', body: "Les raisons d'un côté, de l'autre, puis tu tranches. C'est le plan des sujets qui demandent une prise de position. EN: one side, the other, then your decision.", say: fr(E(1735)) } },
    { cells: ['dialectique, ta thèse en dernier', "l'autre camp, puis le tien", 'quand tu veux finir fort'], say: fr(E(1699)),
      detail: { title: 'Finir par ta thèse', body: "Commence par la position que tu vas réfuter, finis par la tienne : la dernière partie reste en mémoire. EN: end with your own side.", say: fr(E(1700)) } },
    { cells: ['thématique', 'un thème par partie', 'Quels effets ? Quels enjeux ?'], say: fr(E(1742)),
      detail: { title: 'Le plan thématique', body: "Un thème par partie, chacun avec son idée directrice : l'économie, les habitants, le patrimoine. EN: one theme per part.", say: fr(E(1736)) } },
    { cells: ['problème, causes, solutions', 'trois temps', 'Comment résoudre… ?'], say: fr(E(1738)),
      detail: { title: 'Problème et solutions', body: "Tu décris le problème, tu en cherches les causes, puis tu proposes. Utile pour une lettre qui demande quelque chose. EN: problem, causes, solutions.", say: fr(E(1613)) } },
    { cells: ['concession, puis thèse', 'certes…, mais…', 'une réponse à un texte'], say: fr(E(1701)),
      detail: { title: 'Répondre à un texte', body: "Tu concèdes ce qui est juste chez l'auteur, puis tu défends ta position : c'est le plan de la copie modèle. EN: concede, then defend.", say: fr(E(1777)) } },
    { cells: ['la transition', 'une phrase entre deux parties', 'toujours'], say: fr(E(1735)),
      detail: { title: 'La transition', body: "Elle résume la partie finie et annonce la suivante. EN: it closes one part and opens the next.", say: fr(E(1737)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['plans'],
};

/** PRACTISE: which plan for which subject. */
const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon plan',
  groups: [
    grp('Annoncer les parties', [
      it(E(1736), 'la première'),
      it(E(1737), 'la deuxième'),
      it(E(1738), 'la dernière'),
    ], chk(
      '« Quels sont les effets du télétravail sur les villes ? » Quel plan ?',
      ['dialectique', 'thématique'], 1,
      "On te demande des effets, pas une position. EN: effects, not a position.")),
    grp("Passer d'une partie à l'autre", [
      it(E(1735), 'une transition'),
      it(E(1741), 'ajouter, soutenu'),
      it('fr.b1.strategies-de-comprehension.1370', 'deux côtés'),
    ], chk(
      '« Faut-il interdire les voitures dans le centre-ville ? » Quel plan ?',
      ['thématique', 'dialectique', 'aucun'], 1,
      "Une question fermée : pour ou contre, puis tu tranches. EN: a yes-or-no question.")),
    ctl('La transition', 'Une transition...',
      ['résume une partie et annonce la suivante', 'répète la thèse mot pour mot'], 0,
      "Elle guide le lecteur d'une partie à l'autre. EN: it guides the reader."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['plans'],
};

const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a8-dictee',
  layer: 'core',
  title: 'Écris les annonces et les transitions',
  frSub: 'Les phrases qui guident le lecteur',
  itemIds: dicteeFor(8),
  audio: AUDIO,
  say: REFRAME,
  terms: ['plans'],
};

/** USE: the plan of your own article. */
const A8_MISSION = pourTaMission('a8-mission', 'Ton plan', [
  grp('Ton sujet', [
    it(E(1742), 'la règle'),
  ], chk(
    "« Bientôt la fin de l'argent liquide ? » demande...",
    ['une analyse des effets', 'une prise de position'], 1,
    "Le dossier te demande ton opinion : un plan dialectique. EN: your opinion, so a dialectical plan.")),
  ctl("L'ordre", "Tu défends l'argent liquide. Ta propre position arrive...",
    ["après la concession, pour finir sur tes arguments", 'au milieu, entre deux objections'], 0,
    "Tu concèdes d'abord, tu défends ensuite : ta position reste en mémoire. EN: concede first, defend last."),
], ['plans']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Pour ou contre', '« Pour ou contre ? » appelle un plan...',
    ['dialectique', 'thématique'], 0,
    "Deux côtés, puis ta position. EN: two sides, then your position."),
  ctl('Quels effets', '« Quels effets ? » appelle un plan...',
    ['dialectique', 'thématique'], 1,
    "Un thème par partie. EN: one theme per part."),
  ctl('Chaque partie', 'Chaque partie commence par...',
    ['une phrase qui annonce son idée', 'un exemple', 'une question au lecteur'], 0,
    "Le lecteur sait toujours où il en est. EN: the reader always knows where they are."),
], ['plans']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Deux plans',
    opener: {
      line: "Venise déborde de touristes, et la question peut se poser de deux façons : ici tu choisis le plan que la question demande. EN: Venice overflows with tourists, and the question can be asked two ways: here you choose the plan it calls for.",
      imageRef: 'lessons/argumentation/act08.jpg',
    },
    sections: [],
    milestone: "Tu choisis un plan dialectique ou thématique selon la question, et tu relies tes parties par des transitions. EN: You choose the plan from the question and link the parts.",
    estScreens: 34, restPoints: ['a8-plans'],
  },
  sections: [A8_LECTURE, A8_PLANS, A8_CHOISIR, A8_DICTEE, A8_MISSION, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: COMPARER DEUX POINTS DE VUE
 *
 *  The TCF Canada Tâche 3 move: relate two texts (agreement, disagreement,
 *  its exact ground), then take a position. Its quiz round is exam-style.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le péage urbain',
  frSub: 'Une tâche 3 du TCF',
  text: DEUX_TEXTES_TEXT,
  glossary: [
    { word: 'péage', en: 'toll, congestion charge', note: 'Une somme à payer pour passer à un endroit.' },
    { word: 'heures de pointe', en: 'rush hours', note: 'Les heures où il y a le plus de circulation.' },
    { word: 'aide-soignante', en: 'care assistant', note: 'Elle aide les infirmières auprès des malades.' },
  ],
  questions: [
    { q: "Global : sur quoi les deux textes s'accordent-ils ?", a: 'Sur un constat : la circulation dans le centre pose problème, et les transports en commun doivent progresser.' },
    { q: 'Détail : quel exemple le texte A donne-t-il ?', a: 'Stockholm, où le trafic a nettement baissé et où les habitants ont voté pour garder le péage.' },
    { q: 'Inférence : que reproche le texte B au texte A, sans le nommer ?', a: "De faire payer tout de suite pour un bénéfice promis plus tard, et d'oublier ceux qui n'ont pas le choix." },
    { q: 'Position : sur quoi porte vraiment le désaccord ?', a: "Sur l'ordre des mesures : le péage d'abord pour financer les bus (A), ou les bus d'abord (B)." },
  ],
  audio: REC('rec-b2-23-deux-textes'),
  say: REFRAME,
  terms: ['objection', 'argument'],
};

/** NOTICE: the four moves of a comparison. */
const A9_COMPARER: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-comparer',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-refuter',
  title: 'Comparer, en quatre gestes',
  frSub: 'La tâche 3 du TCF',
  hint: 'Quatre cartes, dans l’ordre de ta réponse.',
  audio: REC('rec-b2-23-comparer'),
  say: REFRAME,
  terms: ['objection'],
  cards: [
    {
      head: 'Restituer fidèlement', label: "selon, pour l'auteur de",
      fr: fr(E(1746)), sub: rsOf(E(1746)),
      body: "Chaque texte, dans ses propres termes, y compris celui que tu rejettes. EN: each text in its own terms, including the one you reject.",
    },
    {
      head: 'Situer le désaccord', label: "s'accorder sur, porter sur",
      fr: fr(E(1748)), sub: rsOf(E(1748)),
      body: "Dis sur quoi ils sont d'accord, puis où, exactement, ils se séparent. EN: say where they agree, then exactly where they part.",
    },
    {
      head: 'Relier', label: 'là où, contrairement à, tandis que',
      fr: fr(E(1745)), sub: rsOf(E(1745)),
      body: "Une phrase qui tient les deux textes ensemble vaut mieux que deux résumés. EN: one sentence holding both texts beats two summaries.",
    },
    {
      head: 'Prendre position', label: 'pour ma part',
      fr: fr(E(1750)), sub: rsOf(E(1750)),
      body: "Tu tranches, et tu réponds à la meilleure raison du camp que tu quittes. EN: decide, and answer the best reason of the side you leave.",
    },
  ],
};

/** PRACTISE: compare, or summarise twice? */
const A9_RELIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-relier',
  layer: 'core',
  size: 'lg',
  title: 'Relier les deux textes',
  groups: [
    grp('Des phrases qui comparent', [
      it(E(1744), 'un accord'),
      it(E(1745), 'là où'),
      it(E(1749), 'contrairement à'),
    ], chk(
      'Laquelle compare vraiment ?',
      [fr(E(1756)), fr(E(1745))], 1,
      "Elle tient les deux textes dans une seule phrase. EN: it holds both texts in one sentence.")),
    grp('Des outils pour relier', [
      it(E(1751), 'opposer'),
      it(E(1753), 'opposer, soutenu'),
      it(CL(107), 'opposer, vu au B1'),
      it(CL(1531), 'deux camps'),
    ], chk(
      '« Le texte A voit un prix, ... le texte B voit un impôt. »',
      ['tandis que', 'parce que', 'donc'], 0,
      "Tandis que oppose deux points de vue. EN: tandis que contrasts.")),
    ctl('La fidélité', `« ${fr(E(1757))} » Ce résumé...`,
      ['est fidèle', "déforme le texte B, qui veut d'abord de meilleurs bus"], 1,
      "Le texte B ne refuse pas tout : il change l'ordre. EN: text B changes the order, it does not refuse everything."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['objection'],
};

/** PRACTISE: four ways to fail the Tâche 3. */
const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de rater la comparaison',
  errors: [
    {
      wrong: fr(E(1756)),
      right: fr(E(1745)),
      why: "Deux résumés à la suite suivent l'ordre de ta lecture, pas une comparaison. Relie-les dans la même phrase. EN: link the two in one sentence.",
    },
    {
      wrong: fr(E(1757)),
      right: fr(E(1747)),
      why: "Simplifier le texte que tu rejettes le rend facile à battre, et la grille le sanctionne. EN: distorting the text you reject costs marks.",
    },
    {
      wrong: 'Pour ma part, je suis pour le péage. (et rien sur les deux textes)',
      right: fr(E(1748)),
      why: "La tâche demande de comparer, puis de prendre position : ta position seule ne répond qu'à la moitié. EN: compare first, then take a position.",
    },
    {
      wrong: "Le texte A pense que le péage est bon, pendant que le texte B pense qu'il est mauvais.",
      right: 'Le texte A voit dans le péage un prix, tandis que le texte B y voit un impôt.',
      why: `${Cap(CONCESSION_REF)} l'a montré : pendant que dit le temps ; tandis que et alors que opposent deux idées. EN: pendant que is about time; tandis que contrasts.`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['objection', 'argument'],
};

/** USE: state the other side fairly in your own article. */
const A9_MISSION = pourTaMission('a9-mission', "L'argument adverse", [
  grp("Restituer l'autre camp", [
    it(E(1747), 'restituer fidèlement'),
    it(E(1713), 'le mot'),
  ], chk(
    'Dans ton article, tu cites les économistes du dossier. Tu écris...',
    ['Les économistes veulent contrôler nos vies.', 'Selon ces économistes, la fin des espèces réduirait la fraude.', "Les économistes n'y connaissent rien."], 1,
    "Leur vraie raison, au conditionnel : tu la rapportes sans la reprendre. EN: their real reason, reported in the conditional.")),
  ctl('Puis', 'Après avoir cité leur argument, tu...',
    ['y réponds', 'passes à autre chose'], 0,
    "Une objection citée appelle une réponse. EN: a quoted objection needs an answer."),
], ['objection']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Comparer', "Comparer deux textes, c'est...",
    ["les résumer l'un après l'autre", 'les relier : accord, désaccord, raison'], 1,
    "Relier, pas juxtaposer. EN: link, do not list."),
  ctl('Tandis que', '« Tandis que » sert ici à...',
    ['opposer deux points de vue', 'dire que deux choses arrivent en même temps'], 0,
    "Ici il oppose, comme alors que. EN: here it contrasts."),
  ctl('La tâche 3', 'Au TCF Canada, la tâche 3 demande...',
    ['de comparer deux points de vue, puis de prendre position', 'de raconter un souvenir', 'de répondre à une invitation'], 0,
    "120 à 180 mots : comparer, puis trancher. EN: compare, then decide."),
], ['objection']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Comparer deux points de vue',
    opener: {
      line: "Deux textes, un péage, deux colères : ici tu les fais dialoguer avant de choisir ton camp. EN: Two texts, one toll, two angers: here you make them talk to each other before you choose a side.",
      imageRef: 'lessons/argumentation/act09.jpg',
    },
    sections: [],
    milestone: "Tu compares deux points de vue en les reliant, fidèlement, puis tu prends position. EN: You compare two views by linking them fairly, then take a position.",
    estScreens: 34, restPoints: ['a9-comparer'],
  },
  sections: [A9_LECTURE, A9_COMPARER, A9_RELIER, A9_ERREURS, A9_MISSION, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: LES PIÈGES DU RAISONNEMENT
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "Le billet d'humeur",
  frSub: 'Des pistes cyclables en hiver',
  text: SOPHISMES_TEXT,
  glossary: [
    { word: "Billet d'humeur", en: 'opinion piece, rant', note: 'Un texte court et subjectif, souvent en colère.' },
    { word: 'grillent', en: 'run (a red light)', note: 'Griller un feu rouge : passer sans s’arrêter. Familier.' },
    { word: 'déneiger', en: 'to clear snow from', note: 'Enlever la neige. Très courant au Québec.' },
  ],
  questions: [
    { q: "Global : que veut l'auteur ?", a: 'Que la ville ne déneige pas les pistes cyclables en hiver.' },
    { q: 'Détail : quelle « preuve » donne-t-il contre les pistes ?', a: "La fermeture de trois commerces depuis l'ouverture de la piste de la rue Saint-Denis." },
    { q: "Inférence : pourquoi cette preuve n'en est-elle pas une ?", a: 'Les deux faits se suivent, mais rien ne montre que la piste ait causé les fermetures : c’est une fausse cause.' },
    { q: 'Position : quel argument valable pourrait-il garder ?', a: 'Le coût du déneigement, par exemple, chiffré et comparé au nombre de cyclistes : une vraie raison, sans attaque.' },
  ],
  audio: REC('rec-b2-23-sophismes'),
  say: REFRAME,
  terms: ['sophisme'],
};

/** NOTICE: six reasoning traps. */
const A10_PIEGES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-pieges',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-preuves',
  title: 'Six pièges de raisonnement',
  frSub: 'Les sophismes',
  hint: 'Six cartes, six pièges du billet.',
  audio: REC('rec-b2-23-pieges'),
  say: REFRAME,
  terms: ['sophisme', 'argument'],
  cards: [
    { head: 'La généralisation', label: 'tous, toujours', fr: fr(E(1758)), sub: rsOf(E(1758)),
      body: "Tu passes de quelques cas à tous. Un seul contre-exemple suffit à te réfuter. EN: from some cases to all." },
    { head: 'La fausse cause', label: 'après, donc à cause de', fr: fr(E(1759)), sub: rsOf(E(1759)),
      body: "Deux faits qui se suivent ne sont pas forcément une cause et son effet. EN: sequence is not cause." },
    { head: "L'homme de paille", label: 'une position déformée', fr: fr(E(1762)), sub: rsOf(E(1762)),
      body: "Tu prêtes à l'adversaire une thèse plus extrême que la sienne, puis tu la bats. EN: you attack a distorted version." },
    { head: "L'attaque personnelle", label: "la personne, pas l'idée", fr: fr(E(1760)), sub: rsOf(E(1760)),
      body: "Qui défend une idée ne dit rien de sa valeur. EN: who holds an idea says nothing about its worth." },
    { head: 'Le faux dilemme', label: 'soit… soit', fr: fr(E(1761)), sub: rsOf(E(1761)),
      body: "Tu ne laisses que deux choix, alors qu'il en existe d'autres. EN: only two options when there are more." },
    { head: 'La pente glissante', label: "aujourd'hui…, demain…", fr: fr(E(1763)), sub: rsOf(E(1763)),
      body: "Tu annonces une suite de catastrophes sans montrer le lien entre elles. EN: a chain of disasters with no link shown." },
  ],
};

/** PRACTISE: name the trap. */
const A10_NOMMER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-nommer',
  layer: 'core',
  size: 'lg',
  title: 'Nomme le piège',
  groups: [
    grp('Deux pièges du billet', [
      it(E(1759), 'après, donc à cause de'),
      it(E(1761), 'deux choix seulement'),
    ], chk(
      `« ${fr(E(1761))} » C'est...`,
      ['une fausse cause', 'un faux dilemme', 'une généralisation'], 1,
      "Il existe d'autres choix : déneiger une partie des pistes, par exemple. EN: there are other options.")),
    grp('Deux autres', [
      it(E(1762), "la thèse adverse, grossie"),
      it(E(1760), 'la personne visée'),
    ], chk(
      `« ${fr(E(1760))} » L'auteur...`,
      ["attaque les personnes au lieu de l'idée", 'donne un exemple vérifiable'], 0,
      "Leur métier ne dit rien de leur argument. EN: their job says nothing about their argument.")),
    ctl('Le sondage', "« Neuf lecteurs sur dix sont d'accord avec moi. » Le problème ?",
      ['Le nombre ne prouve rien, et ses lecteurs pensaient déjà comme lui.', 'Le chiffre est trop petit.'], 0,
      "Un sondage choisi par l'auteur ne mesure que son public. EN: his own poll only measures his audience."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sophisme'],
};

/** PRACTISE, the trap: each fallacy, and its fair version. */
const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Du piège à la version loyale',
  rule: {
    title: "Critique l'idée, jamais la personne",
    body: "Pour chaque « preuve », demande-toi : est-ce vrai pour tous, le lien est-il montré, et est-ce bien ce que l'autre défend ? EN: for every proof, ask: true for all, link shown, and is it what the other side really says?",
  },
  cards: [
    { promptLabel: 'la généralisation', promptSound: fr(E(1758)), fr: fr(E(1764)), ipa: ipaOf(E(1764)), tip: "Certains, pas tous, et des deux côtés. EN: some, not all." },
    { promptLabel: 'la fausse cause', promptSound: fr(E(1759)), fr: fr(E(1765)), ipa: ipaOf(E(1765)), tip: "Tu signales que le lien manque. EN: say the link is missing." },
    { promptLabel: "l'homme de paille", promptSound: fr(E(1762)), fr: fr(E(1766)), ipa: ipaOf(E(1766)), tip: "Ce qu'ils demandent vraiment. EN: what they really ask for." },
    { promptLabel: "l'attaque personnelle", promptSound: fr(E(1760)), fr: fr(E(1767)), ipa: ipaOf(E(1767)), tip: "L'idée, pas les gens. EN: the idea, not the people." },
    { promptLabel: 'le faux dilemme', promptSound: fr(E(1761)), fr: fr(E(1768)), ipa: ipaOf(E(1768)), tip: "Une troisième voie existe. EN: a third way exists." },
    { promptLabel: 'la pente glissante', promptSound: fr(E(1763)), fr: fr(E(1769)), ipa: ipaOf(E(1769)), tip: "Une étape n'entraîne pas forcément la suivante. EN: one step does not force the next." },
  ],
  drill: [
    { promptSay: 'Les automobilistes... :', opts: ['certains ne respectent pas les limitations', 'tous grillent les feux'], correct: 0 },
    { promptSay: 'Depuis la piste, les ventes ont baissé :', opts: ["la piste en est la cause, c'est évident", "il faut chercher d'autres causes possibles"], correct: 1 },
    { promptSay: 'Mon adversaire...', opts: ['demande des pistes déneigées', 'veut interdire toutes les voitures'], correct: 0 },
    { promptSay: 'Cette proposition...', opts: ['vient de gens qui ne travaillent pas', 'coûterait deux millions par an'], correct: 1 },
    { promptSay: "Pour l'hiver, la ville peut...", opts: ['déneiger les rues et une partie des pistes', 'choisir : les rues ou les pistes'], correct: 0 },
    { promptSay: 'Une piste de plus...', opts: ['mène forcément à la fin de la voiture', "n'entraîne pas forcément d'autres fermetures"], correct: 1 },
    { promptSay: '« On a toujours fait comme ça »...', opts: ['ne dit pas pourquoi c’est mieux', 'est une raison suffisante'], correct: 0 },
    { promptSay: 'Tu critiques...', opts: ['la personne', "l'idée"], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: "L'idée, pas la personne" },
    { label: 'Six cartes', kind: 'cards', title: 'Six pièges, six versions loyales' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six versions loyales' },
    { label: 'À toi', kind: 'drill', title: 'Huit choix', gate: true },
  ],
  audio: REC('rec-b2-23-piege-sophismes'),
  say: REFRAME,
  terms: ['sophisme'],
};

/** USE: reread your own proofs. */
const A10_MISSION = pourTaMission('a10-mission', 'Relis tes preuves', [
  grp('Dans ton article', [
    it(E(1785), 'une concession loyale'),
    it(E(1786), 'un argument'),
  ], chk(
    'Laquelle glisserait un sophisme dans ta copie ?',
    ["Ceux qui veulent supprimer les espèces sont des banquiers qui ne pensent qu'à l'argent.", fr(E(1785))], 0,
    "Une attaque contre les personnes, et une généralisation. EN: a personal attack and a generalisation.")),
  ctl('La panne', 'Tu racontes une panne de terminal. Pour en faire une preuve, tu écris...',
    ["« Sans espèces, c'est le chaos total. »", '« Ce jour-là, seuls les clients qui avaient de la monnaie sont repartis avec leurs courses. »'], 1,
    "Un fait précis prouve ; une catastrophe annoncée exagère. EN: a precise fact proves."),
], ['sophisme', 'exemple']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La fausse cause', 'Deux faits se suivent. Pour parler de cause, il faut...',
    ['montrer le lien', 'que le second arrive vite'], 0,
    "Se suivre n'est pas se causer. EN: following is not causing."),
  ctl("L'homme de paille", 'Tu résumes la position adverse. Tu choisis...',
    ['sa version la plus forte', 'sa version la plus faible', 'une version inventée'], 0,
    "Battre la version forte, c'est convaincre. EN: beat the strong version."),
  ctl('Le faux dilemme', '« Soit…, soit… » devient un piège quand...',
    ["il existe d'autres choix", 'les deux choix sont vrais'], 0,
    "Tu caches les autres solutions. EN: you hide the other options."),
], ['sophisme']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Les pièges du raisonnement',
    opener: {
      line: "Un billet brillant, et presque aucun argument : ici tu démontes ses pièges pour ne jamais les écrire. EN: A brilliant column with almost no argument: here you take its traps apart so you never write them.",
      imageRef: 'lessons/argumentation/act10.jpg',
    },
    sections: [],
    milestone: "Tu reconnais six sophismes et tu sais les remplacer par une version loyale. EN: You recognise six fallacies and replace each with a fair version.",
    estScreens: 40, restPoints: ['a10-pieges', 'a10-piege'],
  },
  sections: [A10_LECTURE, A10_PIEGES, A10_NOMMER, A10_PIEGE, A10_MISSION, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: TA MISSION
 *
 *  The model paper (another subject, annotated by its questions), the plan,
 *  where it counts, a role play, the TASK, then the closing sections.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La copie modèle',
  frSub: 'Un article du DELF B2, critère par critère',
  text: MODELE_TEXT,
  glossary: [
    { word: 'enceinte', en: 'grounds, premises', note: "L'espace à l'intérieur des murs d'un établissement." },
    { word: 'fouiller', en: 'to search', note: 'Chercher dans un sac, dans des affaires.' },
    { word: 'trimestre', en: 'term (three months)', note: "Une période de trois mois de l'année scolaire." },
  ],
  questions: [
    { q: 'Respect de la consigne : est-ce un article, et répond-il à la question ?', a: "Oui : un titre, un ton de presse, et une thèse claire dès l'introduction : une interdiction totale est moins efficace qu'un usage encadré." },
    { q: "Argumentation : où est l'objection, et comment l'auteur y répond-il ?", a: "Au deuxième paragraphe : le téléphone disperse l'attention. Il concède (il est vrai que, certes), puis répond : l'interdiction ne règle rien à la sortie." },
    { q: 'Cohérence : quels mots montrent le plan ?', a: "D'abord, ensuite, enfin ; puis donc et en somme dans la conclusion." },
    { q: 'Langue : relève une hypothèse et un conditionnel.', a: "« Si chaque surveillant devait fouiller les sacs, le lycée deviendrait… » et « Tout interdire reviendrait à se priver de ces usages »." },
  ],
  audio: REC('rec-b2-23-modele'),
  say: REFRAME,
  terms: ['these', 'objection', 'argument'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Six étapes pour ta copie',
  steps: [
    "1. Lis la consigne deux fois : le genre, le destinataire, ce qu'on te demande de concéder ou de proposer. EN: read the task twice.",
    '2. Écris ta thèse en une phrase, avant tout le reste. EN: write your thesis first.',
    "3. Choisis ton plan : deux ou trois arguments, et la place de l'objection. EN: choose the plan.",
    "4. Pour chaque argument : l'annonce, l'explication, un exemple. EN: argument, explanation, example.",
    "5. L'introduction et la conclusion en dernier : elles doivent se répondre. EN: write the introduction and conclusion last.",
    "6. Relis : les modes après tes verbes d'opinion, les mots absolus, les connecteurs ; puis compte tes mots. EN: reread, then count.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['these', 'plans', 'conclusion'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    { situation: 'Au DELF B2 : un article, une lettre, une contribution de 250 mots', fr: fr(E(1788)), en: en(E(1788)) },
    { situation: "Au TEF Canada, section B : défendre ta position et répondre à l'objection", fr: fr(E(1697)), en: en(E(1697)) },
    { situation: 'Au TCF Canada, tâche 3 : comparer deux points de vue', fr: fr(E(1748)), en: en(E(1748)) },
    { situation: 'Dans une lettre au conseil de ta ville', fr: fr(E(1613)), en: en(E(1613)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['these', 'objection'],
};

/** Say the moves out loud before writing them. ’ only, no corpus row. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au micro, avant d’écrire',
  setting: 'Une journaliste de Radio Rhône fait un micro-trottoir sur la fin de l’argent liquide. Tu as trente secondes pour défendre ta position. EN: A radio journalist is doing a street poll on the end of cash; you have thirty seconds to defend your view.',
  turns: [
    {
      ai: 'Bonjour. Faut-il en finir avec l’argent liquide, selon vous ?',
      en: 'Hello. Should we do away with cash, in your view?',
      user: 'Non. Je ne pense pas que ce soit une bonne idée : la carte doit rester un choix.',
      userEn: 'No. I don’t think it’s a good idea: the card must stay a choice. (A thesis, with the subjunctive after a denied opinion.)',
      alts: [
        { fr: 'À mon avis, non : chacun doit pouvoir choisir comment il paie.', en: 'In my view, no: everyone must be able to choose how they pay.' },
        { fr: 'Je suis convaincue qu’il faut garder les espèces.', en: 'I am convinced we must keep cash. (Certainty: indicative.)' },
      ],
    },
    {
      ai: 'Pourquoi ?',
      en: 'Why?',
      user: 'D’abord parce que beaucoup de personnes âgées ne sont pas à l’aise avec les applications.',
      userEn: 'First because many elderly people are not comfortable with apps. (An argument, with a measured quantity: beaucoup, not tous.)',
      alts: [
        { fr: 'Parce que tout le monde n’a pas de compte en banque.', en: 'Because not everyone has a bank account.' },
        { fr: 'D’abord, les espèces fonctionnent même pendant une panne.', en: 'First, cash works even during an outage.' },
      ],
    },
    {
      ai: 'Vous avez un exemple ?',
      en: 'Do you have an example?',
      user: 'L’été dernier, une panne a bloqué les terminaux de mon supermarché toute une matinée.',
      userEn: 'Last summer, an outage blocked the card readers in my supermarket for a whole morning. (A concrete example.)',
      alts: [
        { fr: 'Prenons l’exemple de ma voisine : elle paie tout en billets.', en: 'Take my neighbour: she pays for everything in notes.' },
        { fr: 'Au marché de mon quartier, beaucoup de stands n’acceptent que les espèces.', en: 'At my local market, many stalls only take cash.' },
      ],
    },
    {
      ai: 'Mais la carte, c’est plus sûr contre les vols, non ?',
      en: 'But cards are safer against theft, aren’t they?',
      user: 'Il est vrai que c’est plus sûr. Cependant, la fraude en ligne augmente aussi.',
      userEn: 'It is true that it is safer. However, online fraud is rising too. (Concede, then answer.)',
      alts: [
        { fr: 'Certes, mais on peut aussi voler un numéro de carte.', en: 'Admittedly, but a card number can be stolen too.' },
        { fr: 'Je ne nie pas que ce soit plus sûr ; ce n’est pas une raison pour tout supprimer.', en: 'I don’t deny it is safer; that is no reason to abolish everything.' },
      ],
    },
    {
      ai: 'Alors, votre conclusion ?',
      en: 'So, your conclusion?',
      user: 'En somme, gardons les deux : la carte pour ceux qui la veulent, les espèces pour les autres.',
      userEn: 'In short, let’s keep both: the card for those who want it, cash for the others. (A conclusion that answers the question.)',
      alts: [
        { fr: 'En définitive, la loi devrait obliger les commerces à accepter les billets.', en: 'Ultimately, the law should make shops accept notes. (A precise proposal.)' },
        { fr: 'Bref, supprimer les espèces, ce serait exclure une partie des gens.', en: 'In short, abolishing cash would exclude some people.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['these', 'objection', 'conclusion'],
};

/** THE GRADED TASK. Announced in act 1; every act added one tool. DELF B2
 *  format (production écrite, 250 words minimum), in tu. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  sheetId: 'sheet-grille',
  title: 'Ton article d’opinion',
  frSub: 'Production écrite, comme au DELF B2',
  brief: "Le magazine Consommer autrement publie un dossier intitulé « Bientôt la fin de l'argent liquide ? ». On y lit que de plus en plus de commerces refusent les espèces, et que plusieurs économistes souhaitent leur disparition, au nom de la sécurité et de la lutte contre la fraude. Tu écris un article pour le courrier des lecteurs du magazine, dans lequel tu donnes ton opinion sur la disparition de l'argent liquide. Prends position, appuie-toi sur au moins un argument que tu concèdes à la partie adverse, et propose une solution précise. 250 mots minimum.",
  briefEn: "The magazine Consommer autrement runs a feature called « Is cash about to disappear? »: more and more shops refuse cash, and several economists want it abolished for security and to fight fraud. Write an article for the magazine's letters page giving your opinion on the disappearance of cash. Take a position, concede at least one argument to the other side, and propose a precise solution. 250 words minimum.",
  produce: "Écris un article argumenté de 250 mots au moins, avec un titre : une introduction qui pose la question et donne ta thèse, au moins deux arguments expliqués et illustrés par un exemple, un argument adverse concédé puis réfuté, une proposition précise, et une conclusion qui répond à la question.",
  responseSpec: { kind: 'text', minWords: 250, maxWords: 350 },
  rubric: {
    criteria: [
      {
        key: 'consigne',
        label: 'Le respect de la consigne',
        maxPoints: 4,
        descriptors: [
          "4 : Un article pour le courrier des lecteurs, avec un titre et un ton de presse soutenu. Ta position sur la disparition de l'argent liquide est claire, un argument adverse est concédé, une solution précise est proposée. 250 mots au moins.",
          "3 : Les trois éléments demandés sont là, mais l'un est rapide (la proposition reste vague), ou le registre glisse une fois vers le familier.",
          "2 : Il manque un élément demandé (pas de concession, ou pas de proposition), ou le texte est une lettre personnelle plutôt qu'un article, ou il fait moins de 225 mots.",
          "1 : Le texte parle de l'argent en général sans répondre au dossier, ou il est beaucoup trop court.",
        ],
      },
      {
        key: 'argumentation',
        label: 'La capacité à argumenter',
        maxPoints: 4,
        descriptors: [
          "4 : Au moins deux arguments distincts, chacun expliqué et illustré par un exemple. L'objection est énoncée fidèlement, dans sa version forte, puis réfutée. Aucun sophisme, aucune généralisation que tu ne peux défendre.",
          "3 : Les arguments sont solides, mais l'un n'a pas d'exemple, ou la réponse à l'objection reste courte.",
          "2 : Des avis plus que des arguments : peu d'explications, une concession balayée dans la même phrase, ou une généralisation (tout le monde, jamais).",
          '1 : Une opinion répétée, sans raisons ni exemples, ou des attaques contre les personnes.',
        ],
      },
      {
        key: 'coherence',
        label: 'La cohérence et la cohésion',
        maxPoints: 4,
        descriptors: [
          "4 : Une introduction qui pose la question, un paragraphe par idée, des transitions, une conclusion qui répond sans nouvel argument. Des connecteurs variés et justes : d'abord, en outre, certes… mais, il n'en reste pas moins que, en somme.",
          '3 : Le plan se suit, mais une transition manque, ou les connecteurs se répètent (et puis, mais, donc).',
          '2 : Les idées se suivent sans plan visible, ou la conclusion ne répond pas à la question.',
          '1 : Un seul bloc, sans paragraphes ni connecteurs.',
        ],
      },
      {
        key: 'langue',
        label: "L'étendue et la maîtrise de la langue",
        maxPoints: 4,
        descriptors: [
          "4 : Un vocabulaire précis et varié, des structures de B2 maîtrisées : le bon mode après les verbes d'opinion, la concession, une hypothèse, une nominalisation. Les erreurs sont rares et ne gênent pas la lecture.",
          "3 : Des structures variées, avec quelques erreurs de mode ou d'accord qui ne gênent pas la lecture.",
          '2 : Des phrases justes mais simples, ou des erreurs fréquentes de mode après je pense que et je ne pense pas que.',
          '1 : Des erreurs qui gênent la lecture à plusieurs endroits.',
        ],
      },
    ],
  },
  scaffold: [
    'Faut-il vraiment',
    'Je ne pense pas que',
    'Il est indéniable que',
    'On pourrait objecter que',
    "Il n'en reste pas moins que",
    "D'abord,",
    "Prenons l'exemple de",
    'En somme,',
  ],
  modelAnswer: TASK_MODEL,
  modelAnswerEn: "Cash: a right worth defending. In your last issue, several economists call for the end of cash, for the sake of security and the fight against fraud. Should we really welcome it? I do not think the end of cash is good news: paying by card should remain a choice, not an obligation. There is no denying that contactless payment saves time, and I understand shopkeepers who would rather not keep notes in their till. One could also object that cash makes fraud easier. That is partly true; the fact remains that online fraud keeps rising. First, the disappearance of cash would deprive some people of their independence. My neighbour, who is eighty-five, pays for everything in notes because she is not comfortable with an app. For her, a shop that refuses cash is a closed shop. Second, cash remains the only means of payment that depends on no bank. Last summer, a computer outage blocked the card readers in my supermarket for a whole morning: only the customers who had change went home with their shopping. Finally, even if paying by card is convenient, it leaves a trace of every purchase. Although I have nothing to hide, I do not see why my bank should know where I buy my bread. In short, abolishing cash would force on everyone a tool that does not suit everyone. I therefore want the law to require shops to accept cash alongside cards.",
  watchFor: [
    { pattern: "No clear position on the disappearance of cash: a topic sentence (L'argent liquide est un sujet important) or « il y a des avantages et des inconvénients » instead of a thesis.", criterion: 'consigne', feedback: "Ta thèse manque : réponds à la question du dossier en une phrase qu'on peut contester.", ref: 'a2-erreurs' },
    { pattern: 'Opinions without reasons, or the same opinion repeated more strongly (totalement, absurde, vraiment très).', criterion: 'argumentation', feedback: "Chaque avis a besoin d'un pourquoi : une raison, puis un exemple.", ref: 'a1-trier' },
    { pattern: 'Arguments with no example, or a single personal anecdote presented as proof for everyone.', criterion: 'argumentation', feedback: "Illustre chaque argument par un exemple précis, et relie-le à ta thèse.", ref: 'a4-erreurs' },
    { pattern: "Invented precise statistics with no source (90 % des Français) or « c'est prouvé ».", criterion: 'argumentation', feedback: "Sans source, préfère une formule mesurée : beaucoup, de plus en plus, selon certaines estimations.", ref: 'a4-erreurs' },
    { pattern: 'Sweeping generalisations: tous, toujours, jamais, personne, tout le monde.', criterion: 'argumentation', feedback: "Remplace le mot absolu par ce que tu peux défendre : la plupart, souvent, rarement.", ref: 'a5-piege' },
    { pattern: "No concession at all, or a concession dismissed in the same sentence (certes..., mais ça n'a aucune importance).", criterion: 'argumentation', feedback: "Concède un vrai point adverse, puis réponds-y : il est vrai que…, cependant…", ref: 'a6-erreurs' },
    { pattern: 'The opposing view distorted into a straw man (les économistes veulent contrôler nos vies), or attacks on people.', criterion: 'argumentation', feedback: "Cite la vraie raison de l'autre camp, puis critique l'idée, jamais les personnes.", ref: 'a10-piege' },
    { pattern: 'Wrong mood after opinion verbs: je ne pense pas que + indicative, il est évident que or force est de constater que + subjunctive, je doute que + indicative, bien que + indicative.', criterion: 'langue', feedback: "Affirmer : l'indicatif. Nier, douter, envisager : le subjonctif.", ref: 'a3-piege' },
    { pattern: 'Introduction with an empty hook (depuis la nuit des temps, de nos jours) or « dans ce texte, je vais parler de ».', criterion: 'coherence', feedback: "Ouvre sur un fait précis, pose la question, puis donne ta thèse.", ref: 'a7-piege' },
    { pattern: 'Conclusion that adds a new argument, or ends on « chacun son avis » instead of answering.', criterion: 'coherence', feedback: "Ta conclusion fait le bilan et répond à la question, sans nouvel argument.", ref: 'a7-piege' },
    { pattern: 'No visible plan: no paragraphs, no transitions, connectors repeated (et puis, mais, donc).', criterion: 'coherence', feedback: "Un paragraphe par idée, une transition entre les parties, des connecteurs variés.", ref: 'a8-plans' },
    { pattern: 'No precise proposal (il faut faire quelque chose) where the task asks for one.', criterion: 'consigne', feedback: "Propose une mesure précise : qui doit faire quoi.", ref: 'a11-plan' },
    { pattern: 'A personal letter (Chère Madame, bisous) or a familiar register instead of a press article.', criterion: 'consigne', feedback: "C'est un article : un titre, un ton de presse, sans familiarité.", ref: 'a11-lecture' },
  ],
  graderNotes: [
    'Count the words of the whole article, title included. Minimum 250, as in the DELF B2; below 225 costs « consigne » a point per its descriptor. responseSpec allows up to 350 with no penalty.',
    'Either position is valid. A learner may argue FOR the end of cash; the concession must then be a real argument for cash (autonomy, outages, privacy), and the proposal precise (a transition period, a legal obligation to accept notes for a time).',
    'Invented but plausible personal examples (a neighbour, a shop in my street, an outage) are expected and are NOT fallacies. Precise national statistics with no source are, and cost under « argumentation ».',
    'Mood: reward the subjunctive after je ne pense pas que, je doute que, il est possible que, bien que, admettons que; and the indicative after il est évident que, force est de constater que, je suis convaincu que, il est probable que. Accept « je ne doute pas que » with either mood.',
    'The four criteria mirror the DELF B2 grid as this lesson frames it (respect de la consigne, capacité à argumenter, cohérence et cohésion, étendue et maîtrise lexicale et grammaticale). Register (correction sociolinguistique) is judged under « consigne ». 16 points, formative: never report it as a DELF score.',
    'Accept Québec, Belgian and Swiss usage (magasiner, fin de semaine, dépanneur, septante); do not mark it as a register error.',
    'The annotated model answer is in the sheet « La grille du B2 et la copie modèle ». The act 11 reading is a different subject on purpose: do not penalise a learner who reuses its connectors or structures.',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['these', 'objection', 'conclusion'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes arguments à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['argument', 'opinion', 'nuance'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-grille',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la thèse', v: "ta réponse, qu'on peut contester", say: fr(E(1633)),
      detail: { title: 'La thèse', body: "Une phrase, à la fin de l'introduction. EN: one sentence, at the end of the introduction.", say: fr(E(1617)) } },
    { k: "l'opinion", v: 'indicatif pour affirmer, subjonctif pour douter', say: fr(E(1789)),
      detail: { title: "L'opinion", body: "Il est évident que + indicatif ; je ne pense pas que + subjonctif. EN: assert with the indicative, doubt with the subjunctive.", say: fr(E(1634)) } },
    { k: 'la preuve', v: 'argument, explication, exemple', say: fr(E(1660)),
      detail: { title: 'La preuve', body: "Un exemple vérifiable, relié à la thèse. EN: a checkable example, tied to the thesis.", say: fr(E(1663)) } },
    { k: 'la nuance', v: 'la plupart, souvent, sans doute', say: fr(E(1675)),
      detail: { title: 'La nuance', body: "Ne dis que ce que tu peux défendre. EN: say only what you can defend.", say: fr(E(1679)) } },
    { k: "l'objection", v: 'il est vrai que… cependant', say: fr(E(1699)),
      detail: { title: "L'objection", body: "Énoncée fidèlement, concédée sur un point, puis réfutée. EN: stated fairly, granted, answered.", say: fr(E(1700)) } },
    { k: 'le plan et la fin', v: 'dialectique ou thématique ; une fin qui répond', say: fr(E(1742)),
      detail: { title: 'Le plan et la fin', body: "La question choisit le plan ; la conclusion répond, sans nouvel argument. EN: the question picks the plan; the conclusion answers.", say: fr(E(1727)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['these', 'objection', 'conclusion'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu sais écrire une thèse qui tranche, choisir le mode après chaque verbe d'opinion, prouver un argument par une explication et un exemple, nuancer sans renoncer, concéder puis réfuter, ouvrir et fermer une copie, choisir un plan, comparer deux points de vue et repérer six sophismes. Le piège qui reste est discret : une concession que tu balayes dans la même phrase, ou une conclusion qui dit « chacun son avis ». Avant l'examen, relis chaque copie en te posant trois questions : où est ma thèse, où est ma preuve, où est ma réponse à l'autre camp ? EN: Before the exam, reread every paper asking: where is my thesis, my proof, my answer to the other side?",
  stats: [
    { k: 'La position', v: 'une thèse, le bon mode' },
    { k: 'La preuve', v: 'argument, explication, exemple' },
    { k: 'La réponse', v: 'concéder, puis réfuter' },
    { k: 'La forme', v: 'un plan, une fin qui répond' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 1 to 10, and a last
 *  round recycling earlier B2 lessons (B2-BUILD-LOG.md, « Spaced reuse »).
 *  Round 7 is the TEF essay-opening round, round 9 the TCF Tâche 3 round.
 *  `fold()` strips accents, commas, apostrophes and hyphens, so every typed
 *  answer turns on letters. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-argument', label: "L'avis et l'argument", targets: ['avis-sans-raison'],
      questions: [
        mc("Qu'est-ce qui distingue un argument d'un simple avis ?", ['une raison, et souvent un exemple', 'un ton plus ferme', 'une phrase plus longue'], 0, "Un argument dit pourquoi. EN: an argument says why.", 'a1-trier'),
        mc('Lequel de ces messages sera transmis au conseil ?', [fr(E(1600)), fr(E(1602)), fr(E(1606))], 1, "Le seul qui donne une raison. EN: the only one with a reason.", 'a1-lecture'),
        mc("« Tout le monde est contre. » Pourquoi n'est-ce pas un argument ?", ['Le nombre ne dit pas pourquoi.', 'La phrase est trop familière.', 'Elle contient une erreur.'], 0, "Beaucoup de gens peuvent se tromper ensemble. EN: numbers are not reasons.", 'a1-check'),
        lC('Écoute. Ce message donne-t-il une raison ?', fr(E(1602)), ['Oui : le dimanche est le seul jour des familles.', "Non, c'est seulement un avis."], 0, "Car introduit la raison. EN: car gives the reason.", 'a1-trier'),
        lC('Écoute. Que fait cette phrase ?', fr(E(1604)), ['Elle donne un exemple observé.', 'Elle exprime un doute.', 'Elle attaque les élus.'], 0, "Un fait vu, qui prouve la raison. EN: an observed fact.", 'a1-lecture'),
        tI('Complète la phrase de la modératrice.', '« Pourriez-vous préciser vos ... ? »', 'raisons', "Elle demande des raisons, pas un avis plus fort. EN: reasons.", 'a1-lecture', [fr(E(1603))]),
        tI('Écris le mot qui introduit la raison.', '« Je suis contre, ... le dimanche est le seul jour des familles. »', 'car', "Car donne la raison. EN: car gives the reason.", 'a1-trier', ['parce que']),
        eS('Seuls les avis argumentés sera transmis au conseil.', fr(E(1608)), "Les avis : le pluriel, seront. EN: plural verb.", 'a1-usages'),
      ],
    },
    {
      id: 'r2-these', label: 'La thèse', targets: ['these-floue'],
      questions: [
        mc('Laquelle est une thèse ?', [fr(E(1618)), fr(E(1617)), fr(E(1619))], 1, "Elle répond et prend parti. EN: it answers and takes a side.", 'a2-these'),
        mc('« Il y a des avantages et des inconvénients. » Le problème ?', ['Elle ne prend pas parti.', 'Elle est trop soutenue.', 'Elle est fausse.'], 0, "Vraie de tout, elle ne tranche rien. EN: true of everything.", 'a2-erreurs'),
        mc('Dans une chronique, la thèse arrive souvent...', ["à la fin de l'introduction", 'dans la signature', 'au milieu du deuxième argument'], 0, "Après avoir posé le débat. EN: once the debate is set.", 'a2-lecture'),
        lC('Écoute. Est-ce une thèse ?', fr(E(1623)), ['Oui : elle répond et prend parti.', "Non : c'est un constat."], 0, "On peut la contester : c'est une thèse. EN: disputable, so a thesis.", 'a2-choisir'),
        lC('Écoute. Est-ce une thèse ?', fr(E(1618)), ['Non : personne ne la conteste.', 'Oui : elle tranche.'], 0, "Un constat. EN: a fact.", 'a2-these'),
        tI("Complète avec l'expression soutenue qui veut dire « selon moi ».", "« À mon ... , la semaine de quatre jours mérite d'être essayée. »", 'sens', "À mon sens : selon moi. EN: in my view.", 'a2-choisir', [fr(E(1622))]),
        tI('Complète la condition.', "« Je suis favorable à la semaine de quatre jours, à ... qu'elle soit adaptée à chaque métier. »", 'condition', "À condition que : la nuance de la thèse. EN: provided that.", 'a2-these', [fr(E(1626))]),
        eS("Je suis favorable à la semaine de quatre jours, à condition qu'elle est adaptée à chaque métier.", fr(E(1626)), "À condition que : le subjonctif, soit. EN: subjunctive.", 'a2-these'),
      ],
    },
    {
      id: 'r3-modes', label: "Le mode de l'opinion", targets: ['mode-opinion'],
      questions: [
        mc('« Il est évident que les trottoirs ... encombrés. »', ['sont', 'soient'], 0, "Une certitude : l'indicatif. EN: indicative.", 'a3-modes'),
        mc('« Je doute que les usagers ... attention. »', ['font', 'fassent', 'feront'], 1, "Le doute : le subjonctif. EN: subjunctive.", 'a3-piege'),
        mc("« Il me semble que le problème, ... le stationnement. »", ["c'est", 'ce soit'], 0, "Il me semble que : l'indicatif. EN: indicative.", 'a3-modes'),
        lC('Écoute. Quel mode suit l’expression ?', fr(E(1641)), ['le subjonctif', "l'indicatif"], 0, "Il semble que, sans me : subjonctif. EN: subjunctive.", 'a3-modes'),
        lC('Écoute. La personne affirme, ou elle doute ?', fr(E(1649)), ['elle affirme', 'elle doute'], 0, "Il est certain que : une affirmation. EN: an assertion.", 'a3-ecoute'),
        tI('Mets le verbe au bon mode.', '« Je ne pense pas que les trottinettes (être) dangereuses en elles-mêmes. »', 'soient', "L'opinion niée : subjonctif. EN: subjunctive.", 'a3-piege', [fr(E(1637))]),
        tI('Mets le verbe au bon mode.', '« Il est peu probable que nous (faire) de même. »', 'fassions', "Peu probable : un doute, subjonctif. EN: subjunctive.", 'a3-modes', [fr(E(1639))]),
        eS("Pensez-vous vraiment qu'interdire est la seule solution ?", fr(E(1640)), "Question inversée : le subjonctif, soit. EN: subjunctive.", 'a3-modes'),
      ],
    },
    {
      id: 'r4-preuve', label: 'Prouver', targets: ['preuve-absente'],
      questions: [
        mc("Les trois temps d'un paragraphe qui prouve ?", ["l'argument, l'explication, l'exemple", "l'exemple, l'exemple, l'exemple", "l'avis, l'avis répété, la fin"], 0, "Annoncer, expliquer, illustrer. EN: state, explain, illustrate.", 'a4-exemples'),
        mc("Laquelle est une preuve plutôt qu'une anecdote ?", [fr(E(1665)), fr(E(1663))], 1, "Un cas vérifiable. EN: a checkable case.", 'a4-relier'),
        mc("Tu n'as pas de source pour un chiffre. Tu écris...", ['« 90 % des parents »', '« beaucoup de parents »'], 1, "Une formule mesurée. EN: measured wording.", 'a4-erreurs'),
        lC('Écoute. Que fait cette phrase dans le paragraphe ?', fr(E(1661)), ["elle explique l'argument", 'elle donne un exemple', 'elle conclut'], 0, "Elle dit pourquoi c'est vrai. EN: it explains.", 'a4-exemples'),
        lC("Écoute. Quels mots annoncent l'exemple ?", fr(E(1670)), ["prenons l'exemple de", 'la télévision', 'est interdite'], 0, "Prenons l'exemple de. EN: take the example of.", 'a4-exemples'),
        tI("Écris le mot qui introduit l'exemple.", "« ... , une marque de céréales peut faire d'un produit très sucré le héros d'une aventure. »", 'Ainsi', "Ainsi : voici comment ça se passe. EN: thus.", 'a4-exemples', [fr(E(1662)), 'Par exemple']),
        tI('Complète.', "« Comme le ... l'exemple du Québec, une telle interdiction peut durer des décennies. »", 'montre', "Comme le montre : l'exemple prouve. EN: as shown by.", 'a4-exemples', [fr(E(1672))]),
        eS("Prenons l'exemple de la Suède, où la publicité pour enfants sont interdite à la télévision.", fr(E(1670)), "La publicité : singulier, est. EN: singular verb.", 'a4-exemples'),
      ],
    },
    {
      id: 'r5-nuance', label: 'Nuancer', targets: ['generalisation'],
      questions: [
        mc('Laquelle peux-tu défendre ?', [fr(E(1681)), fr(E(1676))], 1, "Beaucoup, pas tous. EN: many, not all.", 'a5-piege'),
        mc('« Sans doute » veut dire...', ['probablement', 'sans aucun doute', 'jamais'], 0, "Un faux ami. EN: a false friend.", 'a5-echelle'),
        mc('« Il se peut que la mesure ... utile. »', ['est', 'soit'], 1, "Une possibilité : subjonctif. EN: subjunctive.", 'a5-echelle'),
        lC('Écoute. Cette phrase est-elle mesurée ?', fr(E(1693)), ['oui : elle est précise et limitée', 'non : elle généralise'], 0, "Certains quartiers, dix ans : précis. EN: precise.", 'a5-ecoute'),
        lC('Écoute. Quel est le problème ?', fr(E(1692)), ['une généralisation', 'une erreur de mode'], 0, "Les jeunes, tous : un seul contre-exemple suffit. EN: a generalisation.", 'a5-ecoute'),
        tI('Remplace le mot absolu.', '« Tous les habitants approuvent le projet. » → « La ... des habitants approuvent le projet. »', 'plupart', "La plupart : une majorité. EN: most.", 'a5-piege', [fr(E(1687))]),
        tI('Remplace « toujours » par un mot qu’on peut défendre.', '« Ce type de mesure réduit toujours la circulation. »', 'souvent', "Souvent, pas toujours. EN: often.", 'a5-piege', [fr(E(1689))]),
        eS('Ces études ne prouvent pas que les réseaux sont la seule cause.', fr(E(1678)), "Ne prouvent pas que : un doute, soient. EN: subjunctive.", 'a5-lecture'),
      ],
    },
    {
      id: 'r6-objection', label: "L'objection et la réponse", targets: ['objection-ignoree'],
      questions: [
        mc('Après « certes », on attend...', ['une réponse : mais, cependant', 'un deuxième certes', 'la signature'], 0, "Certes promet un mais. EN: certes promises a but.", 'a6-outils'),
        mc('Quelle phrase réfute vraiment ?', [fr(E(1710)), fr(E(1711))], 1, "Elle reconnaît la crainte, puis y répond. EN: it grants, then answers.", 'a6-erreurs'),
        mc(`« ${fr(E(1709))} » C'est...`, ['une objection fidèle', 'un homme de paille'], 1, "Une position déformée. EN: a straw man.", 'a6-erreurs'),
        lC('Écoute. Que fait cette phrase ?', fr(E(1697)), ["elle formule l'objection adverse", 'elle donne la thèse', 'elle conclut'], 0, "On pourrait objecter que. EN: one could object.", 'a6-outils'),
        lC('Écoute. Quel mot introduit la réponse ?', fr(E(1700)), ['cependant', 'obliger', 'symptôme'], 0, "Cependant renverse. EN: however.", 'a6-assortir'),
        tI('Complète la concession.', '« Il est ... que la participation baisse. »', 'vrai', "Il est vrai que : tu reconnais. EN: it is true that.", 'a6-outils', [fr(E(1699))]),
        tI("Complète l'expression soutenue.", "« Il n'en reste pas ... que le vote reste un droit. »", 'moins', "Il n'en reste pas moins que : la réponse. EN: the fact remains.", 'a6-outils', ["Il n'en reste pas moins que le vote reste un droit."]),
        eS("Admettons que le vote obligatoire fait monter la participation ; il n'en reste pas moins qu'il ne rend pas le débat plus riche.", fr(E(1707)), "Admettons que : subjonctif, fasse. EN: subjunctive.", 'a6-outils'),
      ],
    },
    {
      id: 'r7-tef', label: "L'introduction (TEF, section B)", targets: ['intro-conclusion'],
      questions: [
        mc("TEF, section B : « Rédigez votre lettre en 200 mots au moins : exposez les faits, défendez votre position, et répondez à l'argument adverse. » Ta première phrase ?", ['Depuis la nuit des temps, les hommes se disputent.', 'Je me permets de vous écrire au sujet de la décision annoncée le 3 mars.', 'Dans ce texte, je vais parler de la décision.'], 1, "Un fait précis, qui pose le sujet. EN: a precise opening.", 'a7-focus'),
        mc('Une introduction contient...', ["l'amorce, la problématique, la thèse ou le plan", 'trois arguments et un exemple'], 0, "Les arguments viennent après. EN: arguments come later.", 'a7-focus'),
        mc(`« ${fr(E(1717))} » est...`, ['la problématique', "l'amorce", 'la conclusion'], 0, "La question que le texte va trancher. EN: the central question.", 'a7-trier'),
        lC('Écoute. Où place-t-on cette phrase ?', fr(E(1718)), ["à la fin de l'introduction", 'dans la conclusion'], 0, "Elle annonce le plan. EN: it announces the plan.", 'a7-trier'),
        lC('Écoute. Que fait cette phrase ?', fr(E(1720)), ['elle ouvre sur une question plus large', 'elle ajoute un argument'], 0, "Une ouverture. EN: an opening onto a wider question.", 'a7-trier'),
        tI("Complète l'annonce du plan.", "« Nous verrons d'abord ce que la gratuité permet, ... ce qu'elle coûte. »", 'puis', "D'abord, puis. EN: first, then.", 'a7-piege', [fr(E(1718)), 'ensuite']),
        tI('Complète la conclusion soutenue.', '« En ... , la gratuité est un moyen, pas une fin. »', 'définitive', "En définitive : au bout du compte. EN: ultimately.", 'a7-trier', [fr(E(1728))]),
        eS('Faut-il pour autant la généralisé ?', fr(E(1717)), "Après faut-il, l'infinitif : généraliser. EN: infinitive.", 'a7-trier'),
      ],
    },
    {
      id: 'r8-plans', label: 'Les plans', targets: ['plan-absent'],
      questions: [
        mc('« Faut-il limiter les touristes ? » appelle un plan...', ['dialectique', 'thématique'], 0, "Pour ou contre, puis tu tranches. EN: dialectical.", 'a8-plans'),
        mc('« Quels sont les effets du tourisme ? » appelle un plan...', ['dialectique', 'thématique'], 1, "Un thème par partie. EN: thematic.", 'a8-plans'),
        mc('Une transition...', ['résume une partie et annonce la suivante', 'ajoute une nouvelle thèse'], 0, "Elle guide le lecteur. EN: it guides the reader.", 'a8-choisir'),
        lC('Écoute. Cette phrase...', fr(E(1735)), ['fait la transition entre deux parties', 'ouvre le texte'], 0, "Après avoir vu…, examinons… EN: a transition.", 'a8-plans'),
        lC('Écoute. Quelle partie annonce-t-elle ?', fr(E(1737)), ['la deuxième', 'la première', 'la conclusion'], 0, "Dans un second temps. EN: the second.", 'a8-choisir'),
        tI('Complète le connecteur soutenu qui ajoute.', '« En ... , les loyers ont fortement augmenté dans le centre. »', 'outre', "En outre : de plus, soutenu. EN: furthermore.", 'a8-choisir', [fr(E(1741))]),
        tI("Complète l'annonce.", '« Dans un premier ... , nous verrons les effets économiques. »', 'temps', "Dans un premier temps. EN: first.", 'a8-dictee', [fr(E(1736))]),
        eS('Dans un second temps, nous examinerons la vie des habitant.', fr(E(1737)), "Des habitants : le pluriel. EN: plural.", 'a8-dictee'),
      ],
    },
    {
      id: 'r9-tcf', label: 'Comparer (TCF, tâche 3)', targets: ['comparaison-plate'],
      questions: [
        mc('TCF, tâche 3 : « Comparez les deux points de vue, puis prenez position. » Que fais-tu d’abord ?', ['Je relie les deux textes : accord, désaccord.', 'Je donne mon avis tout de suite.', 'Je recopie le texte A.'], 0, "Comparer, puis trancher. EN: compare, then decide.", 'a9-comparer'),
        mc('Laquelle compare vraiment ?', [fr(E(1756)), fr(E(1745))], 1, "Une phrase qui tient les deux textes. EN: one sentence, both texts.", 'a9-relier'),
        mc(`« ${fr(E(1757))} » Ce résumé...`, ['est fidèle', 'déforme le texte B'], 1, "Le texte B veut d'abord de meilleurs bus. EN: it distorts text B.", 'a9-erreurs'),
        lC('Écoute. Sur quoi porte le désaccord ?', fr(E(1748)), ["sur l'ordre des mesures", 'sur le constat'], 0, "Le constat est partagé. EN: the order of measures.", 'a9-lecture'),
        lC('Écoute. Cette phrase...', fr(E(1744)), ['situe un accord entre les deux auteurs', 'donne ta position'], 0, "S'accorder sur : un accord. EN: an agreement.", 'a9-comparer'),
        tI('Complète pour opposer les deux textes.', '« Le texte A voit un prix, ... le texte B voit un impôt. »', 'tandis que', "Tandis que oppose. EN: whereas.", 'a9-relier', ['alors que']),
        tI('Complète pour prendre position.', '« Pour ma ... , je rejoins plutôt le second auteur. »', 'part', "Pour ma part. EN: for my part.", 'a9-comparer', [fr(E(1750))]),
        eS("Les deux auteurs s'accorde sur un point : la circulation pose problème.", fr(E(1744)), "Les deux auteurs : s'accordent. EN: plural verb.", 'a9-comparer'),
      ],
    },
    {
      id: 'r10-sophismes', label: 'Les sophismes', targets: ['sophisme'],
      questions: [
        mc(`« ${fr(E(1761))} » C'est...`, ['un faux dilemme', 'une fausse cause', 'une généralisation'], 0, "D'autres choix existent. EN: a false dilemma.", 'a10-pieges'),
        mc(`« ${fr(E(1759))} » C'est...`, ['une fausse cause', 'un exemple vérifiable'], 0, "Se suivre n'est pas se causer. EN: a false cause.", 'a10-pieges'),
        mc('Tu critiques...', ["l'idée", 'la personne'], 0, "Jamais la personne. EN: the idea.", 'a10-piege'),
        lC('Écoute. Quel piège ?', fr(E(1762)), ["l'homme de paille", 'la pente glissante', "l'attaque personnelle"], 0, "Une position grossie. EN: a straw man.", 'a10-nommer'),
        lC('Écoute. Cette phrase est-elle loyale ?', fr(E(1764)), ['oui : elle ne généralise pas', 'non : elle attaque les cyclistes'], 0, "Certains, des deux côtés. EN: fair.", 'a10-piege'),
        tI('Complète la version loyale.', "« Trois commerces ont fermé, mais rien ne montre que la piste en ... la cause. »", 'soit', "Rien ne montre que : subjonctif. EN: subjunctive.", 'a10-piege', [fr(E(1765))]),
        tI('Nomme ce piège.', "« Ce sont des militants qui n'ont jamais travaillé. » → l'attaque ...", 'personnelle', "L'attaque personnelle. EN: ad hominem.", 'a10-pieges', ["l'attaque personnelle", 'attaque personnelle']),
        eS("Une piste déneigée n'entraîne pas forcément la fermeture des rue.", fr(E(1769)), "Des rues : le pluriel. EN: plural.", 'a10-piege'),
      ],
    },
    {
      id: 'r11-rappel', label: 'Rappel : le B2 dans ta copie', targets: ['structures-b2'],
      questions: [
        mc(`${Cap(MODES_REF)} : « Bien que la mesure ... populaire, elle mérite d'être évaluée. »`, ['est', 'soit', 'sera'], 1, "Bien que : subjonctif. EN: subjunctive.", 'a11-parler'),
        mc(`${Cap(COND_PASSE_REF)} : « Si la ville avait consulté les habitants, elle ... ce conflit. »`, ['aurait évité', 'avait évité', 'évitera'], 0, "Si + plus-que-parfait, conditionnel passé. EN: past conditional.", 'a11-parler'),
        mc(`${Cap(CONCESSION_B2_REF)} : « Même si le paiement par carte ... pratique, il laisse une trace. »`, ['soit', 'est'], 1, "Même si : l'indicatif. EN: indicative.", 'a11-parler'),
        lC(`Écoute. ${Cap(GERONDIF_REF)} : quelle forme dit le moyen ?`, fr(E(1783)), ['en encadrant', 'on responsabilise', "l'usage"], 0, "Le gérondif : en encadrant. EN: the gerund.", 'a11-parler'),
        lC(`Écoute. ${Cap(NOMINAL_REF)} : quel nom remplace une phrase entière ?`, fr(E(1784)), ['la disparition', 'certaines', 'leur autonomie'], 0, "Si les espèces disparaissent devient la disparition des espèces. EN: nominalisation.", 'a11-parler'),
        tI('Nominalise : « si les espèces disparaissent ».', '« La ... des espèces priverait certaines personnes de leur autonomie. »', 'disparition', "Disparaître, la disparition. EN: the noun.", 'a11-parler', [fr(E(1784))]),
        tI('Mets le verbe au gérondif.', "« En (encadrer) l'usage, on responsabilise les élèves. »", 'encadrant', "En + participe présent. EN: gerund.", 'a11-parler', [fr(E(1783))]),
        eS('Si la ville aurait consulté les habitants, elle aurait évité ce conflit.', fr(E(1781)), "Après si, jamais le conditionnel : avait consulté. EN: no conditional after si.", 'a11-parler'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. Rotate each closed question's options
 *  with its `correct` index onto the least-used slot. As b1.39 does. */
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
spreadSlots(A11_QUIZ);

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'la thèse', back: "ta réponse, qu'on peut contester", say: fr(E(1617)) },
    { front: 'affirmer', back: 'il est évident que + indicatif', say: fr(E(1634)) },
    { front: 'nier ou douter', back: 'je ne pense pas que + subjonctif', say: fr(E(1637)) },
    { front: 'prouver', back: 'argument, explication, exemple', say: fr(E(1660)) },
    { front: 'nuancer', back: 'la plupart, souvent, sans doute', say: fr(E(1675)) },
    { front: 'concéder, puis répondre', back: 'il est vrai que… cependant', say: fr(E(1699)) },
    { front: "l'introduction", back: 'amorce, problématique, thèse', say: fr(E(1717)) },
    { front: 'comparer', back: 'là où A…, B…', say: fr(E(1745)) },
    { front: 'le piège à éviter', back: "critiquer l'idée, jamais la personne", say: fr(E(1767)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Convaincre, par écrit',
  body: `${REFRAME} Tu as prolongé ${CONCESSION_REF}, où tu pesais le pour et le contre, et ${COURRIELS_REF}, où tu disais ce que tu demandais : maintenant, tu défends une position sur 250 mots, et tu réponds à l'autre camp. La suite, c'est la leçon 24 du B2 : lire les textes d'opinion des autres d'un œil critique, pour trouver leur thèse, leurs preuves et ce qu'ils supposent sans le dire. EN: Next, lesson 24 in B2: reading other people's opinion pieces critically.`,
  points: [
    'Une thèse qui répond à la question, et le bon mode après chaque verbe d’opinion.',
    'Chaque argument expliqué, puis illustré par un exemple vérifiable.',
    'L’objection énoncée fidèlement, concédée sur un point, puis réfutée.',
    'Une introduction qui pose la question, une conclusion qui y répond.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['these', 'objection', 'conclusion'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Ta mission',
    opener: {
      line: "Un dossier sur la fin de l'argent liquide, et une page blanche : ici tu écris ton article, comme au DELF B2. EN: A feature on the end of cash and a blank page: here you write your article, DELF B2 style.",
      imageRef: 'lessons/argumentation/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit un article argumenté de 250 mots et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote a 250-word argued article and sat the exam: 88 questions, 11 rounds.",
    estScreens: 150,
    restPoints: ['a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-modes', 'a11-quiz/r6-objection', 'a11-quiz/r9-tcf', 'a11-review'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-raison', title: 'Un avis, ou un argument', format: 'sort' as const, coach: "Deux piles : la phrase affirme seulement, ou elle donne une raison. EN: opinion alone or reasoned.", buckets: ['un avis seul', 'un avis argumenté'], items: [E(1600), E(1606), E(1607), E(1602), E(1604), E(1605)], audio: AUDIO },
  { id: 'd-these', title: 'Une thèse qui tranche', format: 'mcq' as const, coach: "Une thèse répond, prend parti et peut être contestée. EN: answer, take a side, be disputable.", q: 'Laquelle est une thèse ?', opts: [fr(E(1620)), fr(E(1617))], correct: 1, why: "Elle tranche, avec une condition. EN: it decides.", items: [E(1617), E(1622), E(1623), E(1626), E(1633), E(1632)], audio: AUDIO },
  { id: 'd-modes', title: 'Affirmer ou douter', format: 'sort' as const, coach: "Deux piles : le verbe est à l'indicatif, ou au subjonctif. EN: sort by mood.", buckets: ['indicatif', 'subjonctif'], items: [E(1634), E(1644), E(1638), E(1637), E(1635), E(1641)], audio: AUDIO },
  { id: 'd-preuve', title: 'Argument, explication, exemple', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute et dis son rôle : argument, explication ou exemple. EN: say each sentence's role.", items: [E(1660), E(1661), E(1662), E(1663), E(1670), E(1672)], audio: AUDIO },
  { id: 'd-nuance', title: 'Défendable, ou trop sûr', format: 'sort' as const, coach: "Deux piles : la phrase se défend, ou elle va trop loin. EN: defensible or overreaching.", buckets: ['se défend', 'va trop loin'], items: [E(1675), E(1679), E(1687), E(1681), E(1682), E(1690)], audio: AUDIO },
  { id: 'd-objection', title: 'Concéder, puis répondre', format: 'flashcard' as const, coach: "Lis chaque phrase et repère le mot qui concède, puis celui qui répond. EN: find the concession and the answer.", items: [E(1697), E(1698), E(1699), E(1700), E(1701), E(1711)], audio: AUDIO },
  { id: 'd-intro', title: 'Ouvrir sur la question', format: 'mcq' as const, coach: "L'amorce, la problématique, puis la thèse ou le plan. EN: hook, question, thesis.", q: 'Laquelle ouvre bien une introduction ?', opts: [fr(E(1714)), fr(E(1716))], correct: 1, why: "Un fait précis, qui prépare la question. EN: a precise opening.", items: [E(1716), E(1717), E(1718), E(1719), E(1720), E(1728)], audio: AUDIO },
  { id: 'd-plan', title: 'Annoncer et relier', format: 'flashcard' as const, coach: "Lis les annonces et les transitions à voix haute, dans l'ordre du texte. EN: read the signposts in order.", items: [E(1735), E(1736), E(1737), E(1738), E(1741), E(1742)], audio: AUDIO },
  { id: 'd-comparer', title: 'Relier les deux textes', format: 'mcq' as const, coach: "Comparer, c'est relier : accord, désaccord, raison. EN: link, do not list.", q: 'Laquelle compare les deux textes ?', opts: [fr(E(1756)), fr(E(1745))], correct: 1, why: "Une phrase qui tient les deux. EN: one sentence, both texts.", items: [E(1744), E(1745), E(1746), E(1747), E(1748), E(1750)], audio: AUDIO },
  { id: 'd-sophisme', title: 'Piège, ou argument loyal', format: 'sort' as const, coach: "Deux piles : un piège de raisonnement, ou une version loyale. EN: fallacy or fair.", buckets: ['un piège', 'une version loyale'], items: [E(1758), E(1759), E(1762), E(1764), E(1765), E(1766)], audio: AUDIO },
  { id: 'd-rappel', title: 'Le B2 dans ta copie', format: 'flashcard' as const, coach: "Lis chaque phrase et nomme la structure : subjonctif, conditionnel passé, gérondif, nominalisation. EN: name each structure.", items: [E(1781), E(1782), E(1783), E(1784), E(1785), E(1789)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'avis-sans-raison', description: 'States an opinion, or repeats it more loudly, without giving a reason the reader could check.', detectOn: ['a1-scene', 'a1-trier', 'a1-check', 'a11-mission'], drill: 'd-raison', retest: 'd-raison' },
  { id: 'these-floue', description: 'Offers a topic sentence, a fact, a question or « advantages and disadvantages » where a thesis should take a side.', detectOn: ['a2-choisir', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-these', retest: 'd-these' },
  { id: 'mode-opinion', description: 'Puts the wrong mood after an opinion expression: subjunctive after a certainty, indicative after doubt, denial or an inverted question.', detectOn: ['a3-ecoute', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-modes', retest: 'd-modes' },
  { id: 'preuve-absente', description: 'Asserts an argument without explaining it, or supports it with an anecdote or an invented figure instead of a checkable example.', detectOn: ['a4-relier', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-preuve', retest: 'd-preuve' },
  { id: 'generalisation', description: 'Writes absolute claims (tous, toujours, jamais, c’est prouvé) that one counter-example would knock down.', detectOn: ['a5-ecoute', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-nuance', retest: 'd-nuance' },
  { id: 'objection-ignoree', description: 'Ignores the opposing view, distorts it, or concedes a point and dismisses it in the same sentence.', detectOn: ['a6-assortir', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-objection', retest: 'd-objection' },
  { id: 'intro-conclusion', description: 'Opens with an empty hook or « dans ce texte je vais parler de », or ends without answering the question or with a new argument.', detectOn: ['a7-trier', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-intro', retest: 'd-intro' },
  { id: 'plan-absent', description: 'Writes with no plan chosen for the question: no signposted parts, no transitions, a dialectical plan forced onto a question of effects or the reverse.', detectOn: ['a8-choisir', 'a8-mission', 'a8-check', 'a11-mission'], drill: 'd-plan', retest: 'd-plan' },
  { id: 'comparaison-plate', description: 'Summarises two texts one after the other, or distorts the one it rejects, instead of relating them before taking a position.', detectOn: ['a9-relier', 'a9-erreurs', 'a9-check'], drill: 'd-comparer', retest: 'd-comparer' },
  { id: 'sophisme', description: 'Argues with a fallacy: a generalisation, a false cause, a straw man, a personal attack, a false dilemma or a slippery slope.', detectOn: ['a10-nommer', 'a10-piege', 'a10-check', 'a11-mission'], drill: 'd-sophisme', retest: 'd-sophisme' },
  { id: 'structures-b2', description: 'Loses control of earlier B2 structures inside an argument: the mood after bien que or même si, the past conditional after si, the gérondif, nominalisation.', detectOn: ['a11-lecture', 'a11-scenario', 'a11-mission'], drill: 'd-rappel', retest: 'd-rappel' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so each option-count class spreads evenly and no slot repeats more than
 *  twice in a row. Same walk order as `b1-answer-slots.test.ts`. No text
 *  changes; no `why` in this lesson names a position. */
function spreadMissions(sections: LessonSection[], drills: LessonDrill[]): void {
  const OPT_KEYS = ['opts', 'options', 'choices', 'answers'];
  const used: Record<number, number[]> = {};
  let last = -1, run = 0;
  const walk = (n: any): void => {
    if (!n || typeof n !== 'object') return;
    if (Array.isArray(n)) { n.forEach(walk); return; }
    if (typeof n.correct === 'number') {
      const key = OPT_KEYS.find((k) => Array.isArray(n[k]));
      if (key) {
        const opts: unknown[] = n[key];
        const k = opts.length;
        const u = (used[k] ??= new Array(k).fill(0));
        const order = [...Array(k).keys()].sort((a, b) => u[a] - u[b] || a - b);
        const target = order.find((t) => !(t === last && run >= 2)) ?? order[0];
        const shift = (target - n.correct + k) % k;
        n[key] = opts.map((_, i) => opts[(i - shift + k) % k]);
        n.correct = target;
        u[target]++;
        run = target === last ? run + 1 : 1;
        last = target;
      }
    }
    Object.values(n).forEach(walk);
  };
  for (const s of sections) if (s.type !== 'quiz') walk(s);
  for (const d of drills) walk(d);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS (layer deep: teach and table only)
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-these', "La thèse, le plan, le début et la fin", ['la thèse', 'les plans', "l'introduction", 'la conclusion'], [
    teach('sheet-these-teach', 'Prendre position',
      `${REFRAME} La thèse est ta réponse à la question, en une phrase : elle prend parti, et quelqu'un de raisonnable pourrait la contester. Elle arrive à la fin de l'introduction, et la conclusion y répond. EN: ${REFRAME_EN}`),
    table('sheet-these-fausses', 'Thèse, ou pas encore', ['La phrase', 'Le problème', 'Mieux'], [
      [fr(E(1619)), 'un sujet, pas une réponse', fr(E(1623))],
      [fr(E(1621)), 'une question', 'Le télétravail est une bonne chose, à condition de garder des jours sur place.'],
      [fr(E(1620)), 'vraie de tout, ne tranche rien', fr(E(1626))],
      [fr(E(1618)), 'un constat', fr(E(1617))],
    ]),
    table('sheet-these-plans', 'Quel plan pour quelle question', ['Plan', 'Les parties', 'Pour quelle question'], [
      ['dialectique', 'pour, contre, ta position', 'Faut-il… ? Pour ou contre ?'],
      ['dialectique, ta thèse en dernier', "l'autre camp, puis le tien", 'quand tu veux finir sur ta position'],
      ['thématique', 'un thème par partie', 'Quels effets ? Quels enjeux ?'],
      ['problème, causes, solutions', 'trois temps', 'Comment résoudre… ?'],
      ['concession, puis thèse', 'certes…, mais…', 'une réponse à un texte (DELF B2)'],
    ]),
    table('sheet-these-debut-fin', "L'introduction et la conclusion", ['Moment', 'Ce qu’il fait', 'Exemple'], [
      ["l'amorce", 'accroche avec un fait précis', 'En 2019, le Louvre a accueilli près de dix millions de visiteurs.'],
      ['la problématique', 'pose la question à trancher', fr(E(1717))],
      ["la thèse ou l'annonce du plan", 'dit ce que tu défends, et dans quel ordre', fr(E(1718))],
      ['la transition', 'ferme une partie, ouvre la suivante', fr(E(1735))],
      ['le bilan et la réponse', 'répond à la question, sans nouvel argument', fr(E(1719))],
      ["l'ouverture", 'élargit la question', fr(E(1720))],
    ]),
  ]),
  sheet('sheet-opinion', "Les verbes d'opinion et la juste mesure", ['le mode après chaque expression', "l'échelle de certitude"], [
    teach('sheet-opinion-teach', 'Affirmer ou douter',
      `${Cap(SUBJ_DECL_REF)} : « ${B115_REFRAME} » Quand l'expression affirme, l'indicatif suit ; quand elle nie, doute ou envisage, c'est le subjonctif. EN: ${B115_REFRAME_EN}`),
    table('sheet-opinion-modes', 'Le mode après chaque expression', ['Expression', 'Mode', 'Exemple'], [
      ['je pense que, je crois que', 'indicatif', fr(E(1645))],
      ['je ne pense pas que, je ne crois pas que', 'subjonctif', fr(E(1646))],
      ['il est évident que, il est certain que', 'indicatif', fr(E(1634))],
      ['force est de constater que, je reconnais que', 'indicatif', fr(E(1644))],
      ['je suis convaincu que, j’estime que', 'indicatif', fr(E(1643))],
      ['je doute que, il n’est pas certain que', 'subjonctif', fr(E(1635))],
      ['je ne nie pas que', 'subjonctif', fr(E(1650))],
      ['il est possible que, il se peut que', 'subjonctif', fr(E(1642))],
      ['il est probable que', 'indicatif', fr(E(1647))],
      ['il est peu probable que', 'subjonctif', fr(E(1639))],
      ['il me semble que', 'indicatif', fr(E(1638))],
      ['il semble que', 'subjonctif', fr(E(1641))],
      ['pensez-vous que… ? croyez-vous que… ?', 'subjonctif', fr(E(1651))],
    ]),
    table('sheet-opinion-echelle', "L'échelle de certitude", ['Degré', 'Pour le dire', 'À la place de'], [
      ['certain', 'il est indéniable que, force est de constater que', 'c’est évident, c’est prouvé (sans source)'],
      ['très probable', 'sans doute, il est probable que', 'forcément'],
      ['possible', 'il se peut que, il se pourrait que, peut-être', 'certainement'],
      ['en partie', 'dans une certaine mesure, en partie', 'totalement, entièrement'],
      ['le nombre', 'la plupart, beaucoup, une partie de, certains', 'tous, tout le monde, personne'],
      ['la fréquence', 'souvent, rarement, parfois', 'toujours, jamais'],
    ]),
    teach('sheet-opinion-style', 'Mesurer, ce n’est pas hésiter',
      `${Cap(STYLE_REF)} en fait une règle du style universitaire : on ne dit que ce qu'on peut défendre. Une position nuancée reste une position : « à condition que », « dans une certaine mesure » précisent ta thèse, ils ne la retirent pas. EN: a nuanced position is still a position.`),
  ]),
  sheet('sheet-preuves', 'Prouver sans tricher', ['argument, explication, exemple', "introduire l'exemple", 'les sophismes'], [
    teach('sheet-preuves-teach', 'Le paragraphe qui prouve',
      "Un paragraphe, une idée. Tu annonces l'argument, tu l'expliques (pourquoi c'est vrai), tu l'illustres par un exemple qu'on peut vérifier, puis une phrase le relie à ta thèse. Une anecdote amuse, un chiffre sans source inquiète le correcteur : préfère un cas connu ou une observation présentée comme telle. EN: state, explain, illustrate, link back.")
    ,
    table('sheet-preuves-exemples', "Introduire l'exemple", ['Pour', 'Expression', 'Exemple'], [
      ['annoncer', 'le premier argument tient à', fr(E(1660))],
      ['illustrer', 'ainsi, par exemple', fr(E(1662))],
      ['nommer un cas', "prenons l'exemple de", fr(E(1670))],
      ['montrer que ça existe', "c'est le cas de", fr(E(1671))],
      ['faire de l’exemple une preuve', 'comme le montre', fr(E(1672))],
    ]),
    table('sheet-preuves-sophismes', 'Les pièges du raisonnement', ['Piège', 'Exemple', 'Version loyale'], [
      ['la généralisation', fr(E(1758)), fr(E(1764))],
      ['la fausse cause', fr(E(1759)), fr(E(1765))],
      ["l'homme de paille", fr(E(1762)), fr(E(1766))],
      ["l'attaque personnelle", fr(E(1760)), fr(E(1767))],
      ['le faux dilemme', fr(E(1761)), fr(E(1768))],
      ['la pente glissante', fr(E(1763)), fr(E(1769))],
      ["l'appel à la tradition", "Nos parents ont toujours fait comme ça.", 'Ce qui a toujours été fait n’est pas forcément le mieux : dis pourquoi.'],
      ["l'appel au nombre", "Neuf lecteurs sur dix sont d'accord avec moi.", 'Le nombre ne dit pas pourquoi : donne la raison.'],
    ]),
  ]),
  sheet('sheet-refuter', 'Concéder, réfuter, comparer', ['concéder', 'répondre', 'comparer deux textes'], [
    teach('sheet-refuter-teach', "Répondre à ceux qui pensent le contraire",
      `${Cap(CONCESSION_REF)} : « ${B132_REFRAME} » Dans un texte argumentatif, l'objection fait partie de ta démonstration : tu l'énonces fidèlement, tu reconnais ce qu'elle a de vrai, puis tu montres pourquoi ta position tient. Une concession balayée dans la même phrase ne compte pas. EN: ${B132_REFRAME_EN}`),
    table('sheet-refuter-outils', 'Concéder, puis répondre', ['Pour', 'Outil', 'Exemple'], [
      ['formuler l’objection', 'on pourrait objecter que (+ indicatif)', fr(E(1697))],
      ['reconnaître un fait', 'il est vrai que, je ne nie pas que (+ subjonctif)', fr(E(1699))],
      ['concéder, puis renverser', 'certes…, mais…', fr(E(1701))],
      ['répondre', 'cependant, pourtant, néanmoins', fr(E(1700))],
      ['accepter l’hypothèse adverse', 'admettons que (+ subjonctif)… il n’en reste pas moins que', fr(E(1707))],
      ['clore sur un fait', 'force est de constater que (+ indicatif)', fr(E(1644))],
    ]),
    table('sheet-refuter-comparer', 'Comparer deux points de vue', ['Geste', 'Outil', 'Exemple'], [
      ['restituer', "selon le texte A, pour l'auteur de B", fr(E(1746))],
      ['situer l’accord', "s'accorder sur, les deux auteurs", fr(E(1744))],
      ['situer le désaccord', 'porter sur, ne… pas sur…, mais sur…', fr(E(1748))],
      ['relier', 'là où, tandis que, alors que, contrairement à', fr(E(1745))],
      ['prendre position', 'pour ma part, je rejoins', fr(E(1750))],
    ]),
    teach('sheet-refuter-lecons', 'Où ces outils ont été appris',
      `${Cap(COORD_REF)} : les connecteurs. ${Cap(SUBORD_REF)} : la cause et la conséquence. ${Cap(CONCESSION_REF)} : la concession et l'avis équilibré. « ${B130_REFRAME} » EN: ${B130_REFRAME_EN}`),
  ]),
  sheet('sheet-grille', 'La grille du B2 et la copie modèle', ['les trois examens', 'les critères', 'la copie modèle annotée'], [
    teach('sheet-grille-teach', 'Trois examens, une même exigence',
      `Au DELF B2, au TEF Canada et au TCF Canada, la production écrite juge la même chose : une position, des arguments prouvés, et une réponse à l'objection. ${Cap(COURRIELS_REF)} disait : « ${B139_REFRAME} » Au B2, on ajoute : prouve ce que tu demandes. EN: all three exams judge a position, proven arguments and an answer to the objection. ${B139_REFRAME_EN}`),
    table('sheet-grille-examens', 'Les trois formats', ['Examen', 'La tâche', 'Longueur'], [
      ['DELF B2, production écrite', 'un article, une lettre ou une contribution : prendre position, concéder, proposer', '250 mots au moins, 1 heure'],
      ['TEF Canada, section B', "une lettre : exposer les faits, défendre sa position, répondre à l'argument adverse", '200 mots au moins, 35 minutes'],
      ['TCF Canada, tâche 3', 'comparer deux points de vue, puis prendre position', '120 à 180 mots'],
    ]),
    table('sheet-grille-criteres', 'Les critères de ta mission', ['Critère', 'Ce qu’on regarde', 'Où revoir'], [
      ['le respect de la consigne', 'le genre, le registre, la thèse, la concession, la proposition, la longueur', 'actes 2 et 11'],
      ['la capacité à argumenter', 'des arguments expliqués et illustrés, l’objection réfutée, aucun sophisme', 'actes 4, 5, 6, 10'],
      ['la cohérence et la cohésion', "l'introduction, les paragraphes, les transitions, la conclusion", 'actes 7 et 8'],
      ["l'étendue et la maîtrise de la langue", "le mode après les verbes d'opinion, la concession, l'hypothèse", 'acte 3 et le dernier round du quiz'],
    ]),
    table('sheet-grille-annotation', 'La copie modèle, paragraphe par paragraphe', ['Partie', 'Ce qu’elle fait', 'Critère'],
      TASK_MODEL_NOTES.map((r) => [...r])),
    teach('sheet-grille-modele', 'La copie modèle',
      `${TASK_MODEL} EN: A model answer of about 270 words; the table above shows where each criterion is met.`),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

spreadMissions(SECTIONS, DRILL_LIST);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !OWN.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-23-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b2-23-forum': "The act 1 consultation forum, ONE VOICE per poster (four voices plus the moderator), Montréal accents, one take each. Julien fast and irritated, Aïcha calm and concrete, Marc-André measured, Sophie dismissive, Karine neutral. A clear beat between posts.",
  'rec-b2-23-chronique': "Claire Dumas's column (act 2), ONE VOICE, one take, a Lyon speaker, the pace of a radio editorial. A slight lift on the thesis at the end of the first paragraph (« bien préparée… ») and on « Certes ».",
  'rec-b2-23-these': "The four thesis cards, read plainly, one beat between cards. Card three is a flat fact: read it flat, with no conviction.",
  'rec-b2-23-debat': "The act 3 radio debate, THREE VOICES (the host, Karim Haddad, Élise Perrin), Lyon, natural speed with the small overlaps of live radio kept short. Every opinion verb clearly audible: the mood is what the learner is listening for.",
  'rec-b2-23-modes-ecoute': "REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, TWO VOICES alternating, in authored order, at conversational speed. The subjunctive endings (soit devenu, gagnent, soient, puisse) must be heard clearly; no slowing down for them.",
  'rec-b2-23-piege-modes': "The audio step plays each card's CORRECT sentence (the right mood). Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b2-23-paragraphe': "Fatou's paragraph (act 4), ONE VOICE, one take: the draft read quickly and a little emphatic, the revised version slower and clear, the closing comment neutral. A clear beat between the three parts.",
  'rec-b2-23-nuance': "The two versions (act 5), ONE VOICE, one take: version A shouted, every absolute word hit hard; version B calm and exact. The contrast is the lesson: keep it audible, not caricatured.",
  'rec-b2-23-nuance-ecoute': "REQUIRED FOR THE EAR MISSION (act 5): eight lines, ONE TAKE, ONE VOICE, in authored order, at a normal pace. The absolute lines (2, 4, 6, 8) read with the same calm as the nuanced ones, so the learner judges the words, not the tone.",
  'rec-b2-23-piege-nuance': "The audio step plays each card's CORRECT, measured sentence. Read the six evenly; the absolute versions in promptSound are never spoken.",
  'rec-b2-23-lettres': "The two letters (act 6), TWO VOICES: Hélène Gagnon (Sherbrooke), firm and warm; Yves Lambert (Rimouski), calm and deliberate. Québec accents welcome. A clear beat between the letters.",
  'rec-b2-23-outils': "The four concession cards, read plainly, one beat between cards. Card four is long: keep the pause at the semicolon.",
  'rec-b2-23-copie': "Tomás's paper (act 7), ONE VOICE for the paper, a second voice for the teacher's comment. The « before » passages read flatly, the « after » passages with the rhythm of a real introduction and conclusion.",
  'rec-b2-23-piege-intro': "The audio step plays each card's CORRECT opening or ending. Read the six evenly; the weak versions in promptSound are never spoken.",
  'rec-b2-23-plans': "The two-plans text (act 8), ONE VOICE, one take, the pace of a teacher explaining at the board. A small pause at each « Première partie », « Deuxième partie », « Troisième partie ».",
  'rec-b2-23-deux-textes': "The TCF Tâche 3 pair (act 9), TWO VOICES: text A confident, text B indignant but controlled. The instruction lines read by a neutral third voice.",
  'rec-b2-23-comparer': "The four comparison cards, read plainly, one beat between cards.",
  'rec-b2-23-sophismes': "Gilles Bouchard's column (act 10), ONE VOICE, one take, Québécois, lively and sure of himself, as a radio chronicle; the last paragraph (the commentary) read by a second, neutral voice.",
  'rec-b2-23-pieges': "The six fallacy cards, read in the columnist's confident tone (they ARE the fallacies), one beat between cards.",
  'rec-b2-23-piege-sophismes': "The audio step plays each card's FAIR version. Read the six calmly; the fallacies in promptSound are never spoken.",
  'rec-b2-23-modele': "The model DELF paper (act 11), ONE VOICE, one take, read as a newspaper column: a pause after the title, after the thesis, between paragraphs, and before « En somme ».",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 23',
  intro: "The B2 writing lesson. An opinion, however strongly held, is not an argument. This lesson builds the argumentative text the DELF B2, TEF and TCF ask for: a thesis that answers the question, opinion verbs in the right mood, arguments explained and supported by examples, nuance instead of sweeping claims, an opposing view stated fairly, conceded and rebutted, an introduction and a conclusion that frame the question, a plan chosen for it, two points of view compared, and six reasoning traps to avoid. It builds on B1 lessons 15, 30 to 32 and 39, and on the academic style of lesson 22 in B2. The final task is an opinion article of 250 words, as in the DELF B2.",
  skill: 'PE',
  grammarAssumed: [SUBJ_DECL_UNIT, COORD_UNIT, SUBORD_UNIT, CONCESSION_UNIT, COURRIELS_UNIT, STYLE_UNIT],
  grammarIntroduced: [
    'The thesis: a one-sentence answer to the question that takes a side and can be contested, placed at the end of the introduction; false theses (topic, fact, question, « advantages and disadvantages ») rejected',
    'Opinion expressions and their mood beyond B1: certainty and admission + indicative (il est évident que, force est de constater que, je reconnais que, je suis convaincu que, j’estime que), doubt, denial and possibility + subjunctive (je doute que, je ne nie pas que, il n’est pas certain que, il est peu probable que), il semble que against il me semble que, and the inverted opinion question + subjunctive',
    'The proving paragraph: argument, explanation, checkable example, link to the thesis; example introducers (ainsi, prenons l’exemple de, c’est le cas de, comme le montre)',
    'Nuance and the certainty scale: sans doute, il se peut que, dans une certaine mesure, en partie, la plupart, souvent, in place of tous, toujours, jamais and c’est prouvé',
    'Concession and rebuttal: on pourrait objecter que, il est vrai que… cependant, certes… mais, admettons que + subjunctive… il n’en reste pas moins que',
    'The introduction (amorce, problématique, thèse or annonce du plan) and the conclusion (bilan, answer, ouverture, no new argument)',
    'Dialectical and thematic plans chosen by the question, with transitions',
    'Comparing two points of view (TCF Canada Tâche 3): restating fairly, locating agreement and disagreement, linking with là où, tandis que, contrairement à, then taking a position',
    'Six fallacies and their fair versions: generalisation, false cause, straw man, personal attack, false dilemma, slippery slope',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "La leçon de la production écrite du B2. Un avis, même très sûr de lui, n'est pas un argument. Ici, tu écris une thèse qui tranche, tu prouves chaque argument, tu nuances, tu réponds à ceux qui pensent le contraire, et tu construis ta copie du début à la fin. À la fin, tu écris un article d'opinion de 250 mots, comme au DELF B2.",
    minutes: 170,
    difficulty: 4,
    glyph: '¶',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: ARGUMENTATION_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (build log, 2026-09-25). Kept, as every B1 lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, MODELE_TEXT, dicteeFor };
