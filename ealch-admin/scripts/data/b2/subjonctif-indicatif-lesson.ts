// b2.06.l1 « Subjonctif ou indicatif ? »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.01), under the B2
// rules of B2-BUILD-LOG.md (form, meaning, choice, text).
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema, so the lesson validates with it in place (as b2.01 does).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act (B2): meet (scene, story, reading or listening), name
//   (cardDeck, tapTable, examples), build (groupDrill, gated), choose (a
//   drill where the MEANING picks the mood), trap (trapDrill stepped or
//   commonErrors), then from act 3 on the choice INSIDE A TEXT of 60 to 120
//   words, then the gated act check. Form is NOT re-taught: lesson 14 in B1
//   owns it, lesson 5 in B2 owns the subjonctif passé.
//
//    1  La pierre posée             6   the one question: assert the fact or
//                                        not (scene: qui soit / qui est calme)
//    2  Ce que le B1 t'a donné      6   recap of lessons 14-16 in B1 and 23 in
//                                        B2, rows reused by id
//    3  Penser, croire, être sûr    8   affirmative, negative, inverted and
//                                        negative questions, je ne doute pas
//    4  Certain, probable, possible 8   the certainty scale; il paraît, sans
//                                        doute, peut-être que
//    5  Chercher ou avoir trouvé    8   relatives: exists, sought, denied
//    6  Le seul, le premier…        7   judge or state; le premier à + inf.
//    7  Le but ou le résultat       8   pour que / si bien que, de sorte que
//                                        both ways, trop… pour que
//    8  Bien que ou même si         7   quoi que / quoique, quel que, si…
//                                        que, même si + imparfait, avoir beau
//    9  Avant que, après que        7   THE trap; ne explétif; ways out
//   10  Quand les deux sont…        8   register and meaning: ne pas croire,
//                                        comprendre, dire, supposer, que en tête
//   11  Ta réponse sur le forum     11  model, plan, role play, TASK, quiz
//
//   TOTAL 84 missions, 11 acts. Corpus: 162 authored rows (.1800-.1981) in
//   eleven blocks plus 31 reused seed rows (lessons 11, 15, 16, 31, 32, 35 in
//   B1, lesson 23 in B2), released act by act through `deckTranche`. Quiz:
//   12 rounds of 8 (one per act 1 to 10, a recycling round, an exam-format
//   round). Chapter artwork: `subjonctif-indicatif-image-prompts.md`, eleven.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « L'indicatif affirme un fait ; le subjonctif le regarde sans l'affirmer. »
//   EN: The indicative asserts a fact; the subjunctive looks at it without
//   asserting it.
//
//   ONE METAPHOR, LA PIERRE POSÉE / LA PIERRE TENUE: the indicative puts the
//   fact down on the table; the subjunctive holds it up and looks at it. It
//   does not replace b1.15's reframe (the expression before que decides
//   where it decides alone); it settles the cases where the choice is open.
//   Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the mood choice by meaning: opinion verbs in every sentence form,
//           the certainty scale, relatives of existence, superlatives, goal
//           against result, concession beyond B1, time clauses (après que),
//           and the both-moods cases.
//   QUOTES  the reframes of lessons 14, 15, 16, 31, 32 in B1 and 23 in B2,
//           re-exported from their corpus files, never retyped.
//   LEAVES  the subjonctif passé FORM to lesson 5 in B2 (read here only:
//           qu'il soit venu, que j'aie vu); the conditionnel passé (read in
//           1922 only) to lessons 2 and 3 in B2; the futur antérieur after
//           après que (1952, read only) to lesson 7 in B2; the literary
//           subjunctive to lesson 9 in B2 (not cited: not yet on the trail).
//           Unit 3's deeper concession, purpose and time lessons are not
//           cited by number, since their positions are not yet occupied.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French; English authored on every learner string (an `en`
//   field or a final `EN: `), never on an answer. tu in every instruction.
//   Every `say` is French. No spaced « ? » or « ! » in any scene or story
//   bubble. The scenario uses ’ only and embeds no corpus row. Other lessons
//   cited by trail position in words, only positions that exist. Every
//   contrast row uses a verb whose two moods differ (corpus §A.5). Mission
//   answer slots spread by `spreadMissions()`, the quiz by `spreadSlots()`.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE SPOKEN VARIANTS. The lesson calls « je ne crois pas qu'il est
//      venu » and « personne qui peut » spoken variants, not errors, and
//      marks the subjunctive as the written and exam norm; trap cards
//      present them as « à l'écrit » corrections. Grader note: at most one
//      point lost. Keep that line?
//   2. « IL EST PROBABLE QUE + INDICATIF » is taught as the rule, with the
//      subjunctive flagged as an error in writing (a4-erreurs). Some usage
//      guides tolerate it. Keep it strict?
//   3. TWELVE quiz rounds (96 questions) and ELEVEN readings (three long,
//      eight « dans un texte »), as b2.01.
//   4. THE TASK has FIVE criteria (tâche 3, cohérence 3, étendue 2,
//      correction 2, registre 2 = 12), as b2.01 and b2.22.
//   5. Row 1956 is the first row in this theme marked `familier` for a
//      grammatical variant rather than vocabulary. OK?
//   6. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' is inert, kept.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  LECTURE_FORUM, LECTURE_CHRONIQUE, LECTURE_MODELE,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10,
  B114_REFRAME, B114_REFRAME_EN, B115_REFRAME, B115_REFRAME_EN, B116_REFRAME, B116_REFRAME_EN,
  B131_REFRAME, B131_REFRAME_EN, B132_REFRAME, B132_REFRAME_EN, B223_REFRAME, B223_REFRAME_EN,
  FORMATION_UNIT, DECL_UNIT, INF_UNIT, SUBORD_UNIT, CONCESSION_UNIT, ARG_UNIT, SUBJ_PASSE_UNIT,
  FORMATION_REF, DECL_REF, INF_REF, SUBORD_REF, CONCESSION_REF, ARG_REF, SUBJ_PASSE_REF, SUBJ_B1_RANGE_REF,
} from './subjonctif-indicatif-corpus.ts';
import { SUBJ_IND_TERMS } from './subjonctif-indicatif-terms.ts';

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
  if (!r) throw new Error(`b2.06: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.06: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.06: no respell on ${id}`);
  return `[${r.respell}]`;
}

const OA = (n: number) => `fr.b1.opinions-et-avis.${n}`;
const OA2 = (n: number) => `fr.b2.opinions-et-avis.${n}`;
const CL = (n: number) => `fr.b1.connecteurs-logiques.${n}`;

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
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

/** THE « IN A TEXT » BEAT that closes acts 3 to 10: one paragraph of 60 to
 *  120 words where the choice has to be made, with the answers behind the
 *  modal. Always the same title, so a learner and a reviewer see the loop. */
function dansUnTexte(
  id: string, frSub: string, text: string, questions: { q: string; a: string }[], rec: string, terms: string[],
): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true,
    title: 'Dans un texte', frSub, text, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: LA PIERRE POSÉE
 *
 *  Meet the choice. One mood changes what the agent hears: a flat you
 *  already know, or a flat you are looking for. NO « ? » OR « ! » IN ANY
 *  BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Un trois et demie à Saint-Roch',
  frSub: 'Un seul mode change l’appartement',
  setting: { place: 'Une agence de la rue Saint-Joseph', city: 'Québec', time: '10 h 15', ambience: 'un écran, des annonces au mur, la neige dehors' },
  beats: [
    {
      kind: 'narration',
      text: "Québec, quartier Saint-Roch. Tu viens d'arriver et tu cherches un logement. À l'agence de la rue Saint-Joseph, Mme Gagnon ouvre son ordinateur et attend tes critères.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mme Gagnon',
      fr: 'Bonjour. Dites-moi ce que vous cherchez.',
      en: 'Hello. Tell me what you are looking for.',
      respell: '[bohⁿ-ZHOOR | deet-MWA | suh kuh voo shehr-SHAY]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Un trois et demie, pas trop cher, près du parc.',
      en: 'A one-bedroom flat, not too expensive, near the park.',
      respell: '[uhⁿ trwa-zay-duh-MEE | pa troh SHEHR | preh dü PARK]',
      stage: 'À Québec, un trois et demie, c’est un logement avec une chambre.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Mme Gagnon tape. Il te reste le critère le plus important : le calme. Tu n'as encore rien visité.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu décris ce que tu veux, pas un appartement que tu connais. Quelle phrase dis-tu.',
      size: 'lg',
      options: [
        { fr: fr(E(1801)), respell: rsOf(E(1801)), en: en(E(1801)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1800)), respell: rsOf(E(1800)), en: en(E(1800)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Mme Gagnon filtre les annonces : rue sans autobus, dernier étage, cour à l’arrière. Elle a compris ton critère.',
        breaks: 'Mme Gagnon lève les yeux et te demande lequel. Pour elle, tu parles d’un appartement précis, que tu as déjà vu quelque part.',
      },
    },
    {
      kind: 'break',
      heading: 'Un seul mode, deux appartements',
      body: "Avec qui est calme, tu affirmes qu'un appartement calme existe et tu sembles le connaître. Avec qui soit calme, tu décris celui que tu cherches, sans dire qu'il existe. EN: qui est asserts a flat you know; qui soit describes the one you want.",
      wrong: { fr: fr(E(1801)), ipa: ipaOf(E(1801)), respell: rsOf(E(1801)), en: en(E(1801)) },
      right: { fr: fr(E(1800)), ipa: ipaOf(E(1800)), respell: rsOf(E(1800)), en: en(E(1800)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: `Au B1, ${SUBJ_B1_RANGE_REF} t'ont appris quelles expressions déclenchent le subjonctif. Ici, tu apprends à choisir quand la phrase te laisse le choix, et ce que ce choix dit de toi.`,
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['affirmer', 'regarder'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Choisir le mode par le sens', s: 'Actes 1 à 4 : affirmer ou non, penser et croire, l’échelle de certitude' },
    { t: 'Choisir dans une relative', s: 'Actes 5 et 6 : chercher ou avoir trouvé, le seul qui' },
    { t: 'Choisir après une conjonction', s: 'Actes 7 à 9 : le but ou le résultat, bien que ou même si, avant que ou après que' },
    { t: 'Répondre sur un forum en 200 mots', s: 'Actes 10 et 11 : les nuances, puis ta mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Un parc à la place du stationnement',
  frSub: 'Lis, et regarde ce que chacun affirme',
  text: LECTURE_FORUM,
  glossary: [
    { word: 'le stationnement', en: 'the car park', note: 'Au Québec, le parc de stationnement : le parking, en France.' },
    { word: 'le conseiller', en: 'the councillor', note: 'L’élu qui représente le quartier au conseil municipal.' },
    { word: 'un chantier', en: 'a building site', note: 'Le lieu des travaux, avec son bruit et ses camions.' },
  ],
  questions: [
    { q: 'Global : de quoi parlent les voisins ?', a: 'Du projet de la Ville : transformer le stationnement de la rue du Roi en parc.' },
    { q: 'Détail : qui affirme la date du printemps, et qui ne fait que l’envisager ?', a: "Julie l'affirme comme probable : « il est probable que le parc sera prêt ». Nadia l'envisage seulement : « il est possible que le parc soit prêt »." },
    { q: 'Inférence : pourquoi Marc écrit-il « je sais que les commerçants sont inquiets » puis « je doute que les commerçants soient d’accord » ?', a: "Leur inquiétude est un fait qu'il affirme. Leur accord, il n'y croit pas : il le regarde sans l'affirmer." },
    { q: 'Position : que pense Marc du projet, à la fin ?', a: "Il est partagé : il reconnaît que c'est le seul projet qui puisse sauver la rue, mais il craint le chantier. Son « appartement qui soit calme » est un souhait, pas un appartement qu'il a trouvé." },
  ],
  audio: REC('rec-b2-06-forum'),
  say: REFRAME,
  terms: ['affirmer', 'regarder'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Posé ou regardé',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Le fait est posé', [
      it(E(1802), 'probable : Julie s’engage'),
      it(E(1805), 'savoir : un fait'),
      it(E(1809), 'la consultation a eu lieu'),
      it(E(1806), 'même si : un vrai si, aucun doute'),
    ], chk('Que font ces quatre phrases avec le fait ?',
      ['elles le posent comme vrai', 'elles le souhaitent', 'elles en doutent'], 0,
      'Probable, savoir, après que, même si : la phrase affirme. EN: all four assert the fact.')),
    grp('Le fait est regardé', [
      it(E(1803), 'possible : on envisage'),
      it(E(1804), 'douter'),
      it(E(1807), 'il faut que : on réclame'),
      it(E(1810), 'on cherche la personne'),
    ], chk('« Il faut que la Ville fasse une vraie consultation. » La consultation a-t-elle eu lieu ?',
      ['non, on la réclame', 'oui, c’est un fait établi'], 0,
      'La phrase la veut, elle ne dit pas qu’elle existe. EN: it demands it, it does not report it.')),
    ctl('Le test', 'Avant de choisir le mode, que te demandes-tu ?',
      ['si la phrase affirme le fait', 'si le fait est vrai', 'si la phrase est longue'], 0,
      'Un fait vrai peut prendre le subjonctif : bien que le projet soit cher. Ce qui compte, c’est ce que la phrase en fait. EN: ask whether the sentence asserts it.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affirmer', 'regarder'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où le mauvais mode coûte cher',
  cases: [
    { situation: 'Tu cherches un logement', fr: fr(E(1800)), en: en(E(1800)) },
    { situation: 'Tu réponds à une consultation publique', fr: fr(E(1812)), en: en(E(1812)) },
    { situation: 'Tu écris un compte rendu', fr: fr(E(1809)), en: en(E(1809)) },
    { situation: 'Tu recommandes une collègue', fr: "C'est la seule personne qui puisse reprendre ce dossier.", en: 'She is the only person who could take this file over.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affirmer', 'regarder'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le sens', '« Je cherche un appartement qui soit calme. » Cet appartement existe-t-il pour toi ?',
    ['pas encore', 'oui, tu l’as visité'], 0,
    'Qui soit : tu décris ce que tu cherches. EN: you describe what you are looking for.'),
  ctl('Le fait vrai', '« Bien que le projet soit cher, je vote pour. » Le projet est-il cher ?',
    ['oui', 'non', 'on ne sait pas'], 0,
    'Il est cher, et pourtant subjonctif : bien que concède sans affirmer. EN: true, but conceded, not asserted.'),
  ctl('Probable', '« Il est probable que le parc … prêt au printemps. »',
    ['sera', 'soit'], 0,
    'Probable t’engage : indicatif. EN: probable asserts.'),
], ['affirmer']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'La pierre posée',
    opener: {
      line: "Le même appartement, deux phrases, deux agences : ici tu découvres la seule question qui compte, affirmer le fait ou non. EN: The same flat, two sentences, two reactions: here you meet the one question that matters, asserting the fact or not.",
      imageRef: 'lessons/subjonctif-indicatif/act01.jpg',
    },
    sections: [],
    milestone: "Tu reconnais une phrase qui affirme un fait et une phrase qui le regarde sans l'affirmer, même quand le fait est vrai. EN: You can tell a sentence that asserts a fact from one that only looks at it.",
    estScreens: 32, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: CE QUE LE B1 T'A DONNÉ
 *
 *  Recap only, never re-taught: lessons 14 to 16 in B1 and lesson 23 in B2,
 *  quoted and reused by id. Then the one thing B2 adds: the question of
 *  meaning where the list leaves a choice.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà',
  frSub: 'Trois leçons du B1 en quatre cartes',
  hint: 'Quatre cartes. La dernière est la nouvelle.',
  audio: REC('rec-b2-06-rappel'),
  say: REFRAME,
  terms: ['affirmer'],
  cards: [
    {
      head: 'L’expression décide', label: Cap(DECL_REF),
      fr: fr(OA(1208)), sub: rsOf(OA(1208)),
      body: `« ${B115_REFRAME} » Vouloir, falloir, ressentir, douter : cette liste reste vraie. EN: ${B115_REFRAME_EN}`,
    },
    {
      head: 'Compte les sujets', label: Cap(INF_REF),
      fr: `${fr(OA(1400))} · ${fr(OA(1401))}`, sub: `${rsOf(OA(1400))} · ${rsOf(OA(1401))}`,
      body: `« ${B116_REFRAME} » Un seul sujet : l'infinitif. EN: ${B116_REFRAME_EN}`,
    },
    {
      head: 'La forme', label: Cap(FORMATION_REF),
      fr: 'qu’il soit · qu’il ait · qu’il puisse · qu’il fasse',
      sub: '[keel SWA] · [keel EH] · [keel PWEES] · [keel FASS]',
      body: `« ${B114_REFRAME} » Ici, surtout soit, ait, puisse, fasse, sache. EN: ${B114_REFRAME_EN}`,
    },
    {
      head: 'Ce que le B2 ajoute', label: 'la question du sens',
      fr: fr(E(1822)), sub: rsOf(E(1822)),
      body: "Au B1, l'expression décidait seule. Au B2, beaucoup de phrases laissent le choix : une question, un superlatif, de sorte que. Là, c'est ce que la phrase fait du fait qui tranche. EN: where the list leaves a choice, meaning decides.",
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-affirmer',
  title: 'Six familles, deux modes',
  cols: ['Famille', 'Mode', 'Pourquoi'],
  rows: [
    { cells: ['la volonté', 'subjonctif', 'tu veux le fait'], say: fr(E(1819)),
      detail: { title: 'La volonté', body: "Vouloir que, souhaiter que, exiger que : le fait est désiré, pas affirmé. EN: wanting is not asserting.", say: fr(OA(1201)) } },
    { cells: ['la nécessité', 'subjonctif', 'tu le réclames'], say: fr(OA(1213)),
      detail: { title: 'La nécessité', body: "Il faut que, il est important que : tu dis ce qui doit arriver, pas ce qui arrive. EN: necessity does not report.", say: fr(E(1807)) } },
    { cells: ['le sentiment', 'subjonctif', 'tu y réagis'], say: fr(E(1818)),
      detail: { title: 'Le sentiment', body: "Le fait est souvent vrai ; la phrase réagit, elle n'informe pas. EN: a feeling reacts to the fact, it does not report it.", say: fr(E(1977)) } },
    { cells: ['le doute', 'subjonctif', 'tu le mets en question'], say: fr(E(1804)),
      detail: { title: 'Le doute', body: "Douter, il est possible, il semble que : tu envisages, tu ne t'engages pas. EN: doubt does not commit.", say: fr(E(1817)) } },
    { cells: ['l’opinion affirmée', 'indicatif', 'tu t’engages'], say: fr(E(1816)),
      detail: { title: 'L’opinion affirmée', body: "Je pense, je crois, il me semble, je suis sûr : ton avis, présenté comme vrai. EN: an opinion stated as true.", say: fr(OA(1359)) } },
    { cells: ['l’espoir, la cause', 'indicatif', 'tu donnes pour vrai'], say: fr(E(1815)),
      detail: { title: 'L’espoir, la cause', body: "Espérer attend un fait qu'on croit réel ; parce que donne une cause réelle. EN: hope and cause take the indicative.", say: fr(E(1821)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affirmer', 'regarder'],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-trier',
  layer: 'core',
  size: 'lg',
  title: 'Range sans hésiter',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Indicatif : la phrase affirme', [
      it(E(1815), 'espérer'),
      it(E(1816), 'il me semble'),
      it(E(1821), 'parce que'),
      it(OA(1205), 'espérer, au présent'),
    ], chk('Qu’ont en commun espérer, il me semble et parce que ?',
      ['ils présentent le fait comme vrai', 'ils expriment un doute'], 0,
      'Tous trois donnent le fait pour vrai : indicatif. EN: all three assert.')),
    grp('Subjonctif : la phrase veut, ressent ou doute', [
      it(E(1817), 'il semble, sans me'),
      it(E(1818), 'un sentiment'),
      it(E(1819), 'une volonté'),
      it(OA(1213), 'une nécessité'),
    ], chk('« Il semble que le quartier … besoin d’un parc. »',
      ['ait', 'a'], 0,
      'Il semble, sans me : subjonctif. EN: il semble que takes the subjunctive.')),
    ctl('Un seul sujet', '« Les habitants veulent … la rue aux piétons. »',
      ['rendre', 'qu’ils rendent'], 0,
      'Les mêmes personnes veulent et rendent : l’infinitif. EN: same subject, infinitive.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affirmer', 'regarder'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  title: 'Quatre phrases que tu as déjà écrites',
  frSub: 'Relis-les avec la question du B2',
  examples: [
    ex(OA2(1637), `${Cap(ARG_REF)} : une thèse niée, donc soient.`),
    ex(OA(1208), `${Cap(DECL_REF)} : la bascule, ne pense pas que.`),
    ex(OA(1359), 'Il me semble : ton avis, donné pour vrai.'),
    ex(OA(1401), `${Cap(INF_REF)} : deux sujets, donc que.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affirmer'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs que le B1 n’a pas éteintes',
  errors: [
    {
      wrong: 'J’espère que la mairie tienne parole.',
      right: fr(E(1815)),
      why: "Normal : espérer ressemble à souhaiter. Mais espérer attend un fait qu'on croit réel : indicatif. EN: espérer takes the indicative.",
    },
    {
      wrong: 'Il me semble que le quartier ait besoin d’un parc.',
      right: fr(E(1816)),
      why: "Normal : il semble que prend le subjonctif. Avec me, tu donnes ton avis et tu l'affirmes. EN: il me semble que takes the indicative.",
    },
    {
      wrong: 'Parce que la rue soit dangereuse, les parents s’inquiètent.',
      right: fr(E(1821)),
      why: "Normal : la phrase parle d'une inquiétude. Mais parce que donne une cause réelle, affirmée. EN: parce que states a real cause.",
    },
    {
      wrong: 'Les habitants veulent qu’ils rendent la rue aux piétons.',
      right: fr(E(1820)),
      why: `Normal : l'anglais met souvent un sujet. Mais ce sont les mêmes personnes : l'infinitif, comme dans ${INF_REF}. EN: same subject, infinitive.`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affirmer'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Espérer', '« J’espère que la mairie … parole. »',
    ['tiendra', 'tienne'], 0,
    'Espérer : indicatif. EN: espérer takes the indicative.'),
  ctl('Il me semble', 'Il me semble que et il semble que prennent-ils le même mode ?',
    ['non', 'oui'], 0,
    'Il me semble : indicatif ; il semble : subjonctif. EN: me makes the difference.'),
  ctl('Le B2', 'Qu’est-ce que le B2 ajoute à la liste du B1 ?',
    ['une question de sens là où la liste laisse le choix', 'une nouvelle liste à apprendre', 'rien'], 0,
    'La liste reste vraie ; le sens tranche quand elle hésite. EN: meaning decides where the list leaves a choice.'),
], ['affirmer']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Ce que le B1 t’a donné',
    opener: {
      line: "Tu connais déjà la liste : ici tu la reprends en cinq minutes, et tu découvres la question que le B2 ajoute. EN: You already know the list: here you review it quickly and meet the question B2 adds.",
      imageRef: 'lessons/subjonctif-indicatif/act02.jpg',
    },
    sections: [],
    milestone: "Tu retrouves les familles du B1 sans hésiter, et tu sais que le sens tranche quand la liste laisse le choix. EN: You can recall the B1 families and know that meaning decides where the list leaves a choice.",
    estScreens: 34, restPoints: ['a2-table', 'a2-exemples'],
  },
  sections: [A2_RAPPEL, A2_TABLE, A2_TRIER, A2_EXEMPLES, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: PENSER, CROIRE, ÊTRE SÛR
 *
 *  Past lesson 15 in B1 (la bascule): the three sentence forms, the
 *  inverted question that doubts or asks, and the negative question that
 *  asserts. Lesson 23 in B2 used these verbs in argument; here the mood.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'La directrice viendra-t-elle',
  frSub: 'Léo et Inès, la veille de la réunion',
  setting: 'Lausanne, au bureau. Léo et Inès préparent la réunion de jeudi et se demandent si leur directrice, à Bruxelles toute la semaine, fera le déplacement.',
  bubbles: [
    { from: 'narrator', fr: 'Inès relit l’ordre du jour. Léo regarde l’agenda partagé.', en: 'Inès rereads the agenda. Léo looks at the shared calendar.' },
    { from: 'user', fr: 'Je ne crois pas qu’elle vienne jeudi.', en: 'I do not think she will come on Thursday.' },
    { from: 'coach', fr: 'Tu nies ton opinion : subjonctif, vienne.', en: 'You deny your opinion: subjunctive, vienne.', warn: 'Opinion niée : subjonctif' },
    { from: 'user', fr: 'Karim, lui, est sûr qu’elle fera l’aller-retour.', en: 'Karim is sure she will make the round trip.' },
    { from: 'coach', fr: 'Il est sûr, il affirme : indicatif, et au futur.', en: 'He is sure, he asserts: indicative, in the future.', warn: 'Certitude : indicatif' },
    { from: 'user', fr: 'Moi, je doute qu’elle ait le temps.', en: 'I doubt she has the time.' },
    { from: 'coach', fr: 'Douter ne laisse jamais le choix : ait.', en: 'Douter never leaves a choice: ait.', warn: 'Doute : subjonctif' },
  ],
  closing: { fr: 'Affirmer, c’est l’indicatif ; nier ou douter, le subjonctif ; la question, elle, choisit selon ton doute.', en: 'Asserting takes the indicative; denying or doubting, the subjunctive; a question chooses according to your doubt.' },
  audio: REC('rec-b2-06-directrice'),
  say: REFRAME,
  terms: ['affirmer', 'question'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-affirmer',
  title: 'Un verbe, quatre formes de phrase',
  frSub: 'Croire à l’affirmatif, au négatif, en question',
  hint: 'Quatre cartes. La troisième demande l’oreille la plus fine.',
  audio: REC('rec-b2-06-croire'),
  say: REFRAME,
  terms: ['question', 'affirmer'],
  cards: [
    {
      head: 'À l’affirmatif', label: 'indicatif',
      fr: fr(E(1825)), sub: rsOf(E(1825)),
      body: "Je crois, je pense, je suis sûr : tu donnes ton opinion pour vraie. EN: an affirmative opinion asserts.",
    },
    {
      head: 'Au négatif', label: 'subjonctif, à l’écrit',
      fr: fr(E(1826)), sub: rsOf(E(1826)),
      body: `La bascule de ${DECL_REF} : nier ton opinion, c'est ne plus affirmer. À l'oral, l'indicatif s'entend aussi : l'acte 10 y revient. EN: a denied opinion takes the subjunctive in writing.`,
    },
    {
      head: 'En question inversée', label: 'les deux, deux sens',
      fr: `${fr(E(1827))} · ${fr(E(1828))}`, sub: `${rsOf(E(1827))} · ${rsOf(E(1828))}`,
      body: "Qu'il vienne : tu doutes toi-même. Qu'il viendra : tu demandes simplement l'avis de l'autre. Avec est-ce que ou l'intonation, l'indicatif. EN: inversion plus subjunctive signals your doubt.",
    },
    {
      head: 'La question négative', label: 'indicatif',
      fr: fr(E(1831)), sub: rsOf(E(1831)),
      body: "Tu ne doutes pas : tu invites l'autre à te donner raison. La question négative affirme. EN: a negative question asserts and takes the indicative.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Affirmer, nier, demander',
  frSub: 'Trois groupes, trois gâchettes',
  groups: [
    grp('Tu affirmes', [
      it(E(1825), 'croire'),
      it(E(1833), 'être sûr'),
      it(E(1835), 'ne pas douter : tu es sûr'),
      it(OA(1302), 'penser'),
    ], chk('« Je ne doute pas qu’elle réussira. » La personne est-elle sûre ?',
      ['oui', 'non', 'elle ne le dit pas'], 0,
      'Ne pas douter, c’est être sûr : l’indicatif suit. EN: no doubt, so indicative.')),
    grp('Tu nies ou tu doutes', [
      it(E(1826), 'ne pas croire'),
      it(E(1836), 'douter'),
      it(E(1837), 'ne pas être sûr'),
      it(OA(1303), 'ne pas penser'),
    ], chk('« Je ne suis pas sûr qu’elle … le temps. »',
      ['ait', 'a'], 0,
      'Pas sûr : tu n’affirmes pas. EN: not sure, so subjunctive.')),
    grp('Tu demandes', [
      it(E(1827), 'inversion : tu doutes'),
      it(E(1828), 'inversion : tu demandes un avis'),
      it(E(1830), 'est-ce que : une vraie question'),
      it(E(1831), 'question négative : tu cherches l’accord'),
    ], chk('« Crois-tu qu’il vienne à la réunion ? » Celui qui parle…',
      ['en doute', 'en est sûr', 'ne pose pas de question'], 0,
      'Le subjonctif dans la question laisse entendre son doute. EN: the subjunctive signals doubt.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['question', 'affirmer'],
};

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui doute, qui affirme',
  frSub: 'Dix phrases, un seul mot qui change',
  lines: [
    ln(E(1825)), ln(E(1826)), ln(E(1827)), ln(E(1828)), ln(E(1831)),
    ln(E(1833)), ln(E(1835)), ln(E(1836)), ln(E(1837)), ln(E(1843)),
  ],
  questions: [
    { q: 'Première phrase : la personne pense-t-elle qu’il sera là ?', opts: ['oui', 'non'], correct: 0, why: 'Elle l’affirme, à l’indicatif et au futur. EN: she asserts it.' },
    { q: 'Troisième phrase : celui qui pose la question y croit-il ?', opts: ['plutôt non, il en doute', 'oui, il en est sûr'], correct: 0, why: 'Le subjonctif, après l’inversion, laisse entendre son doute. EN: the subjunctive signals doubt.' },
    { q: 'Cinquième phrase : que cherche celui qui parle ?', opts: ['l’accord de l’autre', 'à savoir si l’autre doute'], correct: 0, why: 'Une question négative cherche l’accord : indicatif. EN: a negative question seeks agreement.' },
    { q: 'Septième phrase : la personne pense-t-elle qu’elle réussira ?', opts: ['oui', 'non'], correct: 0, why: 'Ne pas douter, c’est être sûr. EN: no doubt.' },
    { q: 'Neuvième phrase : qu’est-ce qui manque peut-être ?', opts: ['le temps', 'l’argent', 'la place'], correct: 0, why: 'Il n’est pas sûr qu’elle ait le temps. EN: time.' },
  ],
  audio: REC('rec-b2-06-croire-ecoute'),
  say: REFRAME,
  terms: ['question'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Le mode qui trahit ta pensée',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Affirmer ou non',
    body: "Croire, penser, être sûr à l'affirmatif : indicatif. Nier, douter, ne pas être sûr : subjonctif. La question négative affirme : indicatif. EN: affirmative opinions assert; denied or doubted ones do not.",
  },
  cards: [
    { promptLabel: 'croire à l’affirmatif', promptSound: 'Je crois qu’il vienne à la réunion.', fr: fr(E(1825)), ipa: ipaOf(E(1825)), tip: 'Tu affirmes ton opinion : indicatif. EN: an affirmative opinion asserts.' },
    { promptLabel: 'douter', promptSound: 'Je doute qu’elle réussira.', fr: fr(E(1836)), ipa: ipaOf(E(1836)), tip: 'Douter : subjonctif, toujours. EN: douter always takes the subjunctive.' },
    { promptLabel: 'être sûr', promptSound: 'Je suis sûre que le bureau soit fermé.', fr: fr(E(1833)), ipa: ipaOf(E(1833)), tip: 'Sûr, à l’affirmatif : indicatif. EN: sure asserts.' },
    { promptLabel: 'pas sûr', promptSound: 'Je ne suis pas sûr qu’elle a le temps.', fr: fr(E(1837)), ipa: ipaOf(E(1837)), tip: 'Pas sûr : à l’écrit, subjonctif. EN: not sure, subjunctive in writing.' },
    { promptLabel: 'opinion niée', promptSound: 'Je ne pense pas que c’est une bonne idée.', fr: fr(E(1840)), ipa: ipaOf(E(1840)), tip: 'Très fréquent à l’oral ; à l’écrit, ce soit. EN: common in speech; write ce soit.' },
    { promptLabel: 'question inversée', promptSound: 'Pensez-vous que ce plan est réaliste ?', fr: fr(E(1834)), ipa: ipaOf(E(1834)), tip: 'À l’écrit, l’inversion appelle le subjonctif. EN: in writing, inversion calls for the subjunctive.' },
  ],
  drill: [
    { promptSay: 'Je crois qu’il … à la réunion.', opts: ['viendra', 'vienne'], correct: 0 },
    { promptSay: 'Je doute qu’elle …', opts: ['réussisse', 'réussira'], correct: 0 },
    { promptSay: 'Je suis sûre que le bureau … fermé.', opts: ['est', 'soit'], correct: 0 },
    { promptSay: 'Je ne suis pas sûr qu’elle … le temps.', opts: ['ait', 'a'], correct: 0 },
    { promptSay: 'Ne crois-tu pas qu’il … raison ?', opts: ['a', 'ait'], correct: 0 },
    { promptSay: 'Je ne pense pas que ce … une bonne idée.', opts: ['soit', 'est'], correct: 0 },
    { promptSay: 'Je reconnais que tu … raison.', opts: ['as', 'aies'], correct: 0 },
    { promptSay: 'Penses-tu vraiment qu’ils … accepter ?', opts: ['puissent', 'peuvent'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Affirmer ou non' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la main écrit trop vite' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-06-piege-croire'),
  say: REFRAME,
  terms: ['affirmer', 'question'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Vienne ou viendra, à toi de l’entendre',
  itemIds: dicteeFor(3),
  audio: AUDIO,
  say: REFRAME,
  terms: ['question'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Compléter : le message de Léo', TEXTE_A3, [
  { q: 'Complète les deux premiers : tu crois que la directrice (venir) ; je ne pense pas qu’elle (avoir) le temps.', a: "Tu crois que la directrice viendra (question par l'intonation : indicatif) ; je ne pense pas qu'elle ait le temps (opinion niée : subjonctif)." },
  { q: 'Complète : crois-tu vraiment qu’elle (pouvoir) rentrer ; Karim est sûr qu’elle (faire) l’aller-retour.', a: "Crois-tu vraiment qu'elle puisse rentrer (inversion et doute : subjonctif) ; il est sûr qu'elle fera l'aller-retour (certitude : indicatif)." },
  { q: 'Complète : ne trouves-tu pas qu’il (être) trop optimiste ; elle (lire) notre rapport.', a: "Ne trouves-tu pas qu'il est un peu trop optimiste (question négative : indicatif) ; elle lira notre rapport (une certitude, au futur)." },
  { q: 'Complète la dernière : je doute qu’on (savoir) quoi que ce soit.', a: "Je doute qu'on sache quoi que ce soit avant vendredi. Douter : subjonctif." },
], 'rec-b2-06-texte-a3', ['question', 'affirmer']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le négatif', '« Je ne crois pas qu’il … à la réunion. » À l’écrit :',
    ['vienne', 'viendra'], 0,
    'Opinion niée : subjonctif à l’écrit. EN: subjunctive in writing.'),
  ctl('L’inversion', '« Crois-tu qu’il viendra ? » Celui qui parle…',
    ['demande un avis, sans douter', 'en doute fortement'], 0,
    'L’indicatif : une vraie question. EN: a plain question.'),
  ctl('La question négative', '« Ne trouves-tu pas que ce quartier … plus agréable ? »',
    ['est', 'soit'], 0,
    'Elle cherche l’accord : indicatif. EN: it seeks agreement.'),
], ['question']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Penser, croire, être sûr',
    opener: {
      line: "Je crois qu'il viendra, crois-tu qu'il vienne : ici tu apprends ce que ton mode dit de ton doute. EN: I think he will come, do you really think he will: here you learn what your mood says about your doubt.",
      imageRef: 'lessons/subjonctif-indicatif/act03.jpg',
    },
    sections: [],
    milestone: "Tu choisis le mode après croire, penser et être sûr, à l'affirmatif, au négatif et en question, et tu entends le doute dans une question inversée. EN: You can choose the mood after opinion verbs in every sentence form.",
    estScreens: 44, restPoints: ['a3-cartes', 'a3-ecoute', 'a3-dictee'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_ECOUTE, A3_PIEGE, A3_DICTEE, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: CERTAIN, PROBABLE, POSSIBLE
 *
 *  The certainty scale. The border runs between probable and possible, not
 *  between sure and unsure: probable commits the speaker.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le bulletin de la mairie',
  frSub: 'Neuf phrases, neuf degrés de certitude',
  lines: [
    ln(E(1846)), ln(E(1848)), ln(E(1849)), ln(E(1850)), ln(E(1851)),
    ln(E(1853)), ln(E(1854)), ln(E(1856)), ln(E(1858)),
  ],
  questions: [
    { q: 'Première phrase : la baisse de la circulation est-elle présentée comme sûre ?', opts: ['oui', 'non'], correct: 0, why: 'Il est clair que : une certitude, indicatif. EN: a certainty.' },
    { q: 'Troisième phrase : les loyers vont-ils rester au même niveau ?', opts: ['sans doute pas', 'oui, sûrement'], correct: 0, why: 'Peu probable qu’ils soient gelés : ils vont sans doute monter. EN: unlikely to be frozen.' },
    { q: 'Cinquième phrase : d’où vient l’information ?', opts: ['de ce qu’on raconte', 'd’un document officiel'], correct: 0, why: 'Il paraît que : une rumeur, mais rapportée à l’indicatif. EN: hearsay, still indicative.' },
    { q: 'Septième phrase : les travaux seront-ils terminés à temps pour l’été ?', opts: ['non, c’est exclu', 'peut-être'], correct: 0, why: 'Il est exclu : non. Et le subjonctif suit quand même. EN: ruled out.' },
    { q: 'Dernière phrase : que craint-on ?', opts: ['que l’argent ne suffise pas', 'que les travaux aillent trop vite'], correct: 0, why: 'Il n’est pas certain que le budget suffise. EN: the money may not be enough.' },
  ],
  audio: REC('rec-b2-06-bulletin-ecoute'),
  say: REFRAME,
  terms: ['certitude'],
};

const A4_ECHELLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a4-echelle',
  layer: 'core',
  sheetId: 'sheet-certitude',
  title: 'L’échelle de certitude',
  cols: ['Expression', 'Mode', 'Ce que tu fais'],
  rows: [
    { cells: ['il est certain, clair, évident que', 'indicatif', 'tu affirmes'], say: fr(E(1846)),
      detail: { title: 'Certain, clair, évident', body: "Le haut de l'échelle : tu poses le fait. EN: the top of the scale asserts.", say: fr(OA2(1649)) } },
    { cells: ['il est vrai que', 'indicatif', 'tu reconnais un fait'], say: fr(E(1855)),
      detail: { title: 'Il est vrai que', body: "Souvent le début d'une concession : tu reconnais, puis tu nuances. EN: often the start of a concession.", say: fr(E(1855)) } },
    { cells: ['il est probable que', 'indicatif', 'tu t’engages'], say: fr(E(1848)),
      detail: { title: 'Probable', body: "Pas sûr, et pourtant indicatif : tu donnes le fait pour le plus vraisemblable. EN: not certain, yet you commit.", say: fr(OA(1377)) } },
    { cells: ['il paraît, sans doute, peut-être que', 'indicatif', 'tu rapportes ou supposes'], say: fr(E(1851)),
      detail: { title: 'Il paraît, sans doute, peut-être', body: "Une rumeur ou une supposition, mais énoncée comme une information. EN: hearsay and guesses stay indicative.", say: fr(E(1853)) } },
    { cells: ['il semble, il est possible, il se peut que', 'subjonctif', 'tu envisages'], say: fr(E(1856)),
      detail: { title: 'Possible, il se peut, il semble', body: "Tu ouvres une possibilité sans t'engager. EN: you open a possibility without committing.", say: fr(E(1850)) } },
    { cells: ['peu probable, exclu, pas certain que', 'subjonctif', 'tu écartes'], say: fr(E(1849)),
      detail: { title: 'Peu probable, exclu, pas certain', body: "Le bas de l'échelle : tu écartes le fait, tu ne l'affirmes pas. EN: the bottom of the scale sets the fact aside.", say: fr(E(1858)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['certitude'],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte et descends l’échelle',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Tu t’engages : indicatif', [
      it(E(1846), 'clair'),
      it(E(1848), 'probable'),
      it(E(1855), 'vrai'),
      it(E(1857), 'il me semble'),
    ], chk('« Il est probable que les loyers vont augmenter. » L’auteur s’engage-t-il ?',
      ['oui, il donne le fait pour probable', 'non, il n’en sait rien'], 0,
      'Probable t’engage : c’est pour cela que l’indicatif suit. EN: probable commits the speaker.')),
    grp('Tu envisages ou tu écartes : subjonctif', [
      it(E(1849), 'peu probable'),
      it(E(1850), 'il se peut'),
      it(E(1854), 'exclu'),
      it(E(1856), 'il semble, sans me'),
    ], chk('« Il est exclu que les travaux … finis avant l’été. »',
      ['soient', 'sont'], 0,
      'Exclu : tu écartes le fait, tu ne l’affirmes pas. EN: ruled out, so subjunctive.')),
    ctl('La frontière', 'Où passe la frontière entre les deux modes ?',
      ['entre probable et possible', 'entre sûr et pas sûr', 'entre vrai et faux'], 0,
      'Probable affirme encore ; possible n’affirme plus. EN: the border lies between probable and possible.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['certitude'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Six degrés, déjà rencontrés',
  frSub: 'Du B1 à la leçon 23 du B2',
  examples: [
    ex(OA(1377), 'Probable : est, indicatif.'),
    ex(OA(1376), 'Possible : soit, subjonctif.'),
    ex(OA2(1649), `${Cap(ARG_REF)} : certain, indicatif.`),
    ex(OA2(1639), 'Peu probable : fassions.'),
    ex(E(1858), 'Pas certain : suffise.'),
    ex(OA(1287), 'Il semble, sans me : connaisse.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['certitude'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs d’échelle',
  errors: [
    {
      wrong: 'Il est probable que la réunion ait lieu jeudi.',
      right: fr(E(1860)),
      why: "Normal : probable ressemble à possible. Mais probable t'engage : à l'écrit et à l'examen, l'indicatif. EN: probable takes the indicative in careful French.",
    },
    {
      wrong: 'Il est possible que la réunion aura lieu jeudi.',
      right: fr(E(1861)),
      why: "Normal : aura lieu dit l'avenir. Mais possible ouvre une possibilité sans l'affirmer : subjonctif présent, même pour demain. EN: possible takes the subjunctive, even about the future.",
    },
    {
      wrong: 'Il paraît que la mairie ait changé d’avis.',
      right: fr(E(1851)),
      why: "Normal : c'est une rumeur, donc un doute. Mais il paraît que rapporte une information : indicatif. EN: il paraît que reports, so indicative.",
    },
    {
      wrong: 'Peut-être que le chantier prenne du retard.',
      right: fr(E(1853)),
      why: "Normal : peut-être exprime un doute. Mais peut-être que et sans doute que sont suivis de l'indicatif. EN: peut-être que takes the indicative.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['certitude'],
};

const A4_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a4-flash',
  layer: 'core',
  title: 'Huit degrés de certitude',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'it is clear that', back: 'il est clair que + indicatif', say: fr(E(1846)) },
    { front: 'it is likely that', back: 'il est probable que + indicatif', say: fr(E(1848)) },
    { front: 'it is unlikely that', back: 'il est peu probable que + subjonctif', say: fr(E(1849)) },
    { front: 'it may be that', back: 'il se peut que + subjonctif', say: fr(E(1850)) },
    { front: 'apparently', back: 'il paraît que + indicatif', say: fr(E(1851)) },
    { front: 'there is no way that', back: 'il est exclu que + subjonctif', say: fr(E(1854)) },
    { front: 'it seems to me that', back: 'il me semble que + indicatif', say: fr(E(1857)) },
    { front: 'it is not certain that', back: 'il n’est pas certain que + subjonctif', say: fr(E(1858)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['certitude'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Compléter : le bulletin de février', TEXTE_A4, [
  { q: 'Complète : il est certain que les travaux (commencer) ; il est probable qu’ils (durer) six mois.', a: "Il est certain que les travaux commenceront le 3 mars ; il est probable qu'ils dureront six mois. Deux engagements : indicatif, au futur." },
  { q: 'Complète : il est possible qu’une partie du marché (devoir) déménager.', a: "Il est possible qu'une partie du marché doive déménager. Possible : subjonctif." },
  { q: 'Complète : il semble que les commerçants (être) prêts ; il nous semble que cette solution (être) la plus simple.', a: "Il semble que les commerçants soient prêts (subjonctif) ; il nous semble que cette solution est la plus simple (avec nous, un avis affirmé : indicatif)." },
  { q: 'Complète : il est peu probable que le parking (rouvrir) ; il paraît que plusieurs habitants (vouloir) une réunion.', a: "Il est peu probable que le parking rouvre avant l'automne (subjonctif) ; il paraît que plusieurs habitants veulent une réunion (une information : indicatif)." },
], 'rec-b2-06-texte-a4', ['certitude']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Probable', '« Il est probable que la réunion … lieu jeudi. »',
    ['aura', 'ait'], 0,
    'Probable t’engage : indicatif. EN: probable asserts.'),
  ctl('Possible', '« Il se peut que la mairie … sur sa décision. »',
    ['revienne', 'reviendra', 'revient'], 0,
    'Il se peut : tu envisages, subjonctif. EN: possibility, subjunctive.'),
  ctl('Peut-être que', '« Peut-être que le chantier … du retard. »',
    ['prendra', 'prenne'], 0,
    'Peut-être que : indicatif. EN: peut-être que takes the indicative.'),
], ['certitude']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Certain, probable, possible',
    opener: {
      line: "Probable ou possible, un mot d'écart et deux modes : ici tu places chaque expression sur l'échelle de ta certitude. EN: Probable or possible, one word apart and two moods: here you place each expression on the scale of your certainty.",
      imageRef: 'lessons/subjonctif-indicatif/act04.jpg',
    },
    sections: [],
    milestone: "Tu sais où passe la frontière, entre probable et possible, et tu gardes l'indicatif après il paraît, sans doute et peut-être que. EN: You know the border lies between probable and possible.",
    estScreens: 42, restPoints: ['a4-echelle', 'a4-exemples'],
  },
  sections: [A4_ECOUTE, A4_ECHELLE, A4_CONSTRUIRE, A4_EXEMPLES, A4_ERREURS, A4_FLASH, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: CHERCHER OU AVOIR TROUVÉ
 *
 *  The relative clause whose antecedent is sought, wished for or denied.
 *  Built on lesson 11 in B1 (qui and que), never re-teaching it.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'L’annonce de Chloé',
  frSub: 'Une colocataire, un appartement, un chat',
  setting: 'Montréal, un café du Plateau. Chloé rédige avec toi une annonce pour trouver une colocataire, et parle de ce qu’elle a déjà trouvé.',
  bubbles: [
    { from: 'narrator', fr: 'Chloé tape l’annonce sur son téléphone et te la lit à voix haute.', en: 'Chloé types the ad on her phone and reads it out to you.' },
    { from: 'user', fr: 'Je cherche une colocataire qui sache cuisiner.', en: 'I am looking for a flatmate who can cook.' },
    { from: 'coach', fr: 'Sache : elle n’existe pas encore, tu la décris.', en: 'Sache: she does not exist yet, you are describing her.', warn: 'Cherchée : subjonctif' },
    { from: 'user', fr: 'Et j’ai déjà un appartement qui est tout près du métro.', en: 'And I already have a flat that is right by the metro.' },
    { from: 'coach', fr: 'Est : celui-là existe, tu l’as signé.', en: 'Est: that one exists, you have signed for it.', warn: 'Trouvé : indicatif' },
    { from: 'user', fr: 'Mais il n’y a personne dans l’immeuble qui puisse garder mon chat.', en: 'But there is nobody in the building who could look after my cat.' },
    { from: 'coach', fr: 'Personne : tu nies qu’elle existe, donc puisse.', en: 'Personne: you deny she exists, so puisse.', warn: 'Nié : subjonctif' },
  ],
  closing: { fr: 'Ce qui existe prend l’indicatif ; ce que tu cherches, ou ce qui n’existe pas, le subjonctif.', en: 'What exists takes the indicative; what you are looking for, or what does not exist, the subjunctive.' },
  audio: REC('rec-b2-06-colocation'),
  say: REFRAME,
  terms: ['recherche'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-relatives',
  title: 'La chose existe-t-elle',
  frSub: 'Quatre cartes, une seule question',
  hint: 'Quatre cartes. La dernière piège ceux qui s’arrêtent au verbe chercher.',
  audio: REC('rec-b2-06-recherche'),
  say: REFRAME,
  terms: ['recherche'],
  cards: [
    {
      head: 'Tu la cherches', label: 'subjonctif',
      fr: fr(E(1864)), sub: rsOf(E(1864)),
      body: "La colocataire n'existe pas encore pour toi : tu décris celle que tu veux. EN: sought, not yet found.",
    },
    {
      head: 'Tu l’as trouvée', label: 'indicatif',
      fr: fr(E(1865)), sub: rsOf(E(1865)),
      body: "Elle existe, tu l'affirmes : sait. EN: found, so indicative.",
    },
    {
      head: 'Tu nies qu’elle existe', label: 'subjonctif',
      fr: fr(E(1868)), sub: rsOf(E(1868)),
      body: "Personne qui, rien qui, aucun… qui, y a-t-il quelqu'un qui : la chose est niée ou mise en question. EN: denied or questioned existence takes the subjunctive.",
    },
    {
      head: 'Tu cherches une chose connue', label: 'indicatif',
      fr: fr('fr.b1.pronoms-essentiels.1191'), sub: rsOf('fr.b1.pronoms-essentiels.1191'),
      body: "Cette valise existe, tu l'as perdue : indicatif. Ce n'est pas le verbe chercher qui décide, c'est l'existence. EN: a known thing takes the indicative, even after chercher.",
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Existe, cherché ou nié',
  frSub: 'Trois groupes, trois gâchettes',
  groups: [
    grp('La chose existe', [
      it(E(1865), 'trouvée'),
      it(E(1867), 'tu le connais'),
      it(E(1869), 'quelqu’un est là'),
      it(E(1874), 'elle l’a'),
    ], chk('« Elle a un travail qui lui … de voyager. »',
      ['permet', 'permette'], 0,
      'Elle l’a : il existe, indicatif. EN: she has it, so indicative.')),
    grp('On la cherche', [
      it(E(1864), 'une colocataire'),
      it(E(1870), 'une salle'),
      it(E(1873), 'un travail souhaité'),
      it(E(1880), 'quelqu’un à trouver'),
    ], chk('Dans ces phrases, la chose cherchée existe-t-elle ?',
      ['on ne le sait pas encore', 'oui, on l’a trouvée'], 0,
      'Tu décris ce que tu veux, sans dire qu’il existe. EN: described, not asserted.')),
    grp('On la nie, ou on demande si elle existe', [
      it(E(1868), 'personne'),
      it(E(1871), 'aucun'),
      it(E(1872), 'y a-t-il'),
      it(E(1878), 'rien'),
    ], chk('« Je ne connais aucun médecin qui … des visites à domicile. »',
      ['fasse', 'fait'], 0,
      'Aucun : tu nies qu’il existe. EN: denied, so subjunctive.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recherche'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Existe-t-il, oui ou non',
  frSub: 'Dix phrases, une question d’existence',
  lines: [
    ln(E(1864)), ln(E(1865)), ln(E(1866)), ln(E(1867)), ln(E(1868)),
    ln(E(1869)), ln(E(1872)), ln(E(1873)), ln(E(1874)), ln(E(1878)),
  ],
  questions: [
    { q: 'Deuxième phrase : la colocataire existe-t-elle déjà ?', opts: ['oui, elle est trouvée', 'non, on la cherche'], correct: 0, why: 'Sait : elle existe. EN: she exists.' },
    { q: 'Troisième phrase : celui qui parle connaît-il un tel restaurant ?', opts: ['non, il en cherche un', 'oui'], correct: 0, why: 'Soit : il ne sait pas s’il existe. EN: he does not know one.' },
    { q: 'Cinquième phrase : quelqu’un peut-il aider ?', opts: ['non, personne', 'oui'], correct: 0, why: 'Personne qui puisse. EN: nobody.' },
    { q: 'Huitième phrase : ce travail existe-t-il déjà ?', opts: ['non, elle le souhaite', 'oui, elle l’a'], correct: 0, why: 'Permette : un souhait. EN: a wish.' },
    { q: 'Dernière phrase : peut-on la faire changer d’avis ?', opts: ['non, rien ne le peut', 'oui, facilement'], correct: 0, why: 'Rien qui puisse. EN: nothing can.' },
  ],
  audio: REC('rec-b2-06-recherche-ecoute'),
  say: REFRAME,
  terms: ['recherche'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'La relative qui ment',
  frSub: 'Six cartes, huit phrases, à l’écrit soigné',
  rule: {
    title: 'Existe, ou pas',
    body: "Une chose trouvée, connue, possédée : indicatif. Une chose cherchée, souhaitée, niée ou mise en question : subjonctif. À l'oral, l'indicatif s'entend après personne qui ; à l'écrit, non. EN: existing things take the indicative; sought or denied ones, the subjunctive.",
  },
  cards: [
    { promptLabel: 'personne qui', promptSound: 'Il n’y a personne ici qui peut m’aider.', fr: fr(E(1868)), ipa: ipaOf(E(1868)), tip: 'Personne : la chose est niée. EN: denied.' },
    { promptLabel: 'aucun… qui', promptSound: 'Je ne connais aucun médecin qui fait des visites à domicile.', fr: fr(E(1871)), ipa: ipaOf(E(1871)), tip: 'Aucun : subjonctif à l’écrit. EN: subjunctive in writing.' },
    { promptLabel: 'déjà trouvée', promptSound: 'J’ai trouvé une colocataire qui sache cuisiner.', fr: fr(E(1865)), ipa: ipaOf(E(1865)), tip: 'Trouvée : elle existe, indicatif. EN: found, indicative.' },
    { promptLabel: 'y a-t-il', promptSound: 'Y a-t-il quelqu’un qui sait où sont les clés ?', fr: fr(E(1872)), ipa: ipaOf(E(1872)), tip: 'Tu demandes si elle existe : subjonctif. EN: questioned existence.' },
    { promptLabel: 'déjà possédé', promptSound: 'Elle a un travail qui lui permette de voyager.', fr: fr(E(1874)), ipa: ipaOf(E(1874)), tip: 'Elle l’a : indicatif. EN: she has it.' },
    { promptLabel: 'rien qui', promptSound: 'Il n’y a rien qui peut la faire changer d’avis.', fr: fr(E(1878)), ipa: ipaOf(E(1878)), tip: 'Rien : subjonctif. EN: nothing, subjunctive.' },
  ],
  drill: [
    { promptSay: 'Il n’y a personne ici qui … m’aider.', opts: ['puisse', 'peut'], correct: 0 },
    { promptSay: 'J’ai trouvé une colocataire qui … cuisiner.', opts: ['sait', 'sache'], correct: 0 },
    { promptSay: 'Nous cherchons une salle qui … accueillir cent personnes.', opts: ['puisse', 'peut'], correct: 0 },
    { promptSay: 'Je connais un restaurant qui … ouvert le lundi.', opts: ['est', 'soit'], correct: 0 },
    { promptSay: 'Y a-t-il quelqu’un qui … où sont les clés ?', opts: ['sache', 'sait'], correct: 0 },
    { promptSay: 'Elle a un travail qui lui … de voyager.', opts: ['permet', 'permette'], correct: 0 },
    { promptSay: 'Je cherche le dossier que tu m’… envoyé hier.', opts: ['as', 'aies'], correct: 0 },
    { promptSay: 'Trouve-moi quelqu’un qui … bien le quartier.', opts: ['connaisse', 'connaît'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Existe, ou pas' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que l’oral laisse passer' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-06-piege-recherche'),
  say: REFRAME,
  terms: ['recherche'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Cinq relatives au travail',
  frSub: 'Lis, puis dis si la chose existe',
  examples: [
    ex(E(1879), 'Le dossier existe, tu l’as reçu : m’as envoyé.'),
    ex('fr.b1.pronoms-essentiels.1191', 'Une valise précise : indicatif, malgré chercher.'),
    ex(E(1876), 'Pas encore trouvé : soit.'),
    ex(E(1877), 'Trouvé : est.'),
    ex(E(1866), 'Tu ne sais pas s’il existe : soit.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recherche'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Compléter : l’annonce des Jardins du Plateau', TEXTE_A5, [
  { q: 'Complète : des bénévoles qui (avoir) du temps et qui (savoir) jardiner.', a: "Des bénévoles qui aient un peu de temps et qui sachent jardiner : on les cherche, subjonctif." },
  { q: 'Complète : une voisine qui (vouloir) bien prêter ses outils ; personne qui (pouvoir) s’occuper de l’arrosage.', a: "Une voisine qui veut bien prêter ses outils (trouvée : indicatif) ; il n'y a encore personne qui puisse s'occuper de l'arrosage (niée : subjonctif)." },
  { q: 'Complète : quelqu’un qui (être) disponible ; un local qui (faire) vingt mètres carrés.', a: "Connaissez-vous quelqu'un qui soit disponible (on demande s'il existe : subjonctif) ; un local qui fasse au moins vingt mètres carrés (cherché : subjonctif)." },
  { q: 'Complète la dernière : le local que la mairie nous (proposer) l’an dernier.', a: "Le local que la mairie nous avait proposé l'an dernier, ou nous a proposé. Il existe, on le connaît : indicatif." },
], 'rec-b2-06-texte-a5', ['recherche']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Cherché', '« Nous cherchons un logement qui … proche de l’école. »',
    ['soit', 'est'], 0,
    'Pas encore trouvé : subjonctif. EN: not yet found.'),
  ctl('Trouvé', '« Nous avons trouvé un logement qui … proche de l’école. »',
    ['est', 'soit'], 0,
    'Il existe : indicatif. EN: it exists.'),
  ctl('Ce qui décide', 'Dans une relative, qu’est-ce qui décide du mode ?',
    ['l’existence de la chose', 'le verbe chercher', 'la longueur de la phrase'], 0,
    'Je cherche une valise que je ne retrouve plus : indicatif. L’existence décide. EN: existence decides.'),
], ['recherche']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Chercher ou avoir trouvé',
    opener: {
      line: "Une colocataire qui sache cuisiner, ou qui sait déjà : ici tu décides si la chose dont tu parles existe. EN: A flatmate who can cook, one you want or one you have: here you decide whether the thing you talk about exists.",
      imageRef: 'lessons/subjonctif-indicatif/act05.jpg',
    },
    sections: [],
    milestone: "Tu choisis le mode d'une relative selon l'existence de la chose : trouvée, cherchée ou niée. EN: You can choose the mood of a relative clause by whether its antecedent exists.",
    estScreens: 44, restPoints: ['a5-cartes', 'a5-ecoute', 'a5-exemples'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_CONSTRUIRE, A5_ECOUTE, A5_PIEGE, A5_EXEMPLES, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: LE SEUL, LE PREMIER, LE MEILLEUR
 *
 *  Both moods are correct after a superlative; they do not say the same
 *  thing. The subjunctive judges, the indicative states. And le premier à
 *  + infinitive takes the choice away.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Nos coups de cœur',
  frSub: 'Le journal du quartier, à Liège',
  setting: 'Liège, le local du journal de quartier. Sophie et toi rédigez la page des coups de cœur : un restaurant, un chef, une adresse.',
  bubbles: [
    { from: 'narrator', fr: 'Sophie relit ta première phrase à voix haute.', en: 'Sophie reads your first sentence aloud.' },
    { from: 'user', fr: 'Le Petit Zinc est le seul restaurant de la rue qui est ouvert le lundi.', en: 'Le Petit Zinc is the only restaurant in the street that is open on Mondays.' },
    { from: 'coach', fr: 'C’est écrit sur la porte : un constat, donc est.', en: 'It is written on the door: a statement of fact, so est.', warn: 'Constat : indicatif' },
    { from: 'user', fr: 'Et c’est la meilleure cuisine que je connaisse.', en: 'And it is the best cooking I know.' },
    { from: 'coach', fr: 'Là, tu donnes ton avis : connaisse. Au subjonctif, tu signes ton jugement.', en: 'There you give your opinion: connaisse. With the subjunctive, you sign your judgement.', warn: 'Jugement : subjonctif' },
    { from: 'user', fr: 'Le chef a été le premier à proposer un menu végétarien.', en: 'The chef was the first to offer a vegetarian menu.' },
    { from: 'coach', fr: 'Le premier à, puis l’infinitif : aucun mode à choisir.', en: 'Le premier à, then the infinitive: no mood to choose.', warn: 'Le premier à + infinitif' },
  ],
  closing: { fr: 'Le subjonctif juge, l’indicatif constate, et l’infinitif évite la question.', en: 'The subjunctive judges, the indicative states, and the infinitive avoids the question.' },
  audio: REC('rec-b2-06-coups-de-coeur'),
  say: REFRAME,
  terms: ['seul'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-relatives',
  title: 'Juger ou constater',
  frSub: 'Le seul, le meilleur, le premier',
  hint: 'Quatre cartes. Les deux modes sont justes : ils ne disent pas la même chose.',
  audio: REC('rec-b2-06-seul'),
  say: REFRAME,
  terms: ['seul'],
  cards: [
    {
      head: 'Le seul qui : un jugement', label: 'subjonctif',
      fr: fr(E(1883)), sub: rsOf(E(1883)),
      body: "Tu penses qu'aucun autre ne le pourrait : c'est ton avis, pas un fait qu'on vérifie. EN: a judgement takes the subjunctive.",
    },
    {
      head: 'Le seul qui : un constat', label: 'indicatif',
      fr: fr(E(1884)), sub: rsOf(E(1884)),
      body: "Un seul a répondu : on peut compter les réponses. EN: a checkable fact takes the indicative.",
    },
    {
      head: 'Le meilleur que', label: 'les deux',
      fr: `${fr(E(1885))} · ${fr(E(1886))}`, sub: `${rsOf(E(1885))} · ${rsOf(E(1886))}`,
      body: `Que j'aie vu : ton jugement, plus écrit. Que j'ai vu : un classement, plus oral. La forme j'aie vu est celle de ${SUBJ_PASSE_REF}. EN: both are correct; the subjunctive sounds more considered.`,
    },
    {
      head: 'Le premier à', label: 'l’infinitif',
      fr: fr(E(1887)), sub: rsOf(E(1887)),
      body: "Le premier, le dernier, le seul à, puis l'infinitif : la question du mode disparaît. EN: le premier à + infinitive avoids the choice.",
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Qui juge, qui constate',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Tu juges', [
      it(E(1883), 'ton avis sur l’architecte'),
      it(E(1889), 'ton avis sur une amie'),
      it(E(1890), 'ton goût'),
      it(E(1892), 'ton évaluation'),
    ], chk('Dans ces phrases, qui parle ?',
      ['quelqu’un qui donne son avis', 'un horaire ou un classement'], 0,
      'Le subjonctif signe un jugement personnel. EN: the subjunctive signs a judgement.')),
    grp('Tu constates', [
      it(E(1884), 'on compte les réponses'),
      it(E(1888), 'c’est affiché'),
      it(E(1891), 'on le voit dans la rue'),
      it(E(1898), 'on le vérifie sur place'),
    ], chk('« C’est le seul bus qui … jusqu’au lac. »',
      ['va', 'aille'], 0,
      'Un fait d’horaire : indicatif. EN: a timetable fact.')),
    ctl('Pour éviter le choix', '« Elle a été la dernière … la salle. »',
      ['à quitter', 'qui quitte', 'de quitter'], 0,
      'La dernière à, puis l’infinitif. EN: la dernière à + infinitive.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['seul'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  title: 'Cinq superlatifs au travail',
  frSub: 'Jugement, constat ou infinitif',
  examples: [
    ex(E(1894), 'Ton jugement sur un élu : connaisse.'),
    ex(E(1895), 'Un fait d’horaire : va.'),
    ex(E(1897), 'Ton avis sur le parc : puissent.'),
    ex(E(1896), 'La dernière à : l’infinitif.'),
    ex(E(1979), 'La seule solution : ton jugement, satisfasse.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['seul'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de superlatif',
  errors: [
    {
      wrong: 'Marc a été le premier qui arrive.',
      right: fr(E(1887)),
      why: "Normal : l'anglais dit the first who arrived. Le français préfère le premier à, suivi de l'infinitif, et le mode ne se pose plus. EN: use le premier à + infinitive.",
    },
    {
      wrong: 'C’est le seul architecte qui peuve sauver ce bâtiment.',
      right: fr(E(1883)),
      why: `Normal : ils peuvent donne peuv-. Mais pouvoir est irrégulier : puisse, comme dans ${FORMATION_REF}. EN: pouvoir has an irregular subjunctive.`,
    },
    {
      wrong: 'Elle a été la dernière de quitter la salle.',
      right: fr(E(1896)),
      why: "Normal : de suit souvent un adjectif. Après le premier, le dernier, le seul, c'est à. EN: le dernier à, not de.",
    },
    {
      wrong: 'C’est le meilleur film que j’aille vu cette année.',
      right: fr(E(1885)),
      why: `Normal : aie et aille se ressemblent à l'oreille. Avoir donne que j'aie ; aller, que j'aille. Cette forme passée vient de ${SUBJ_PASSE_REF}. EN: aie is avoir, aille is aller.`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['seul'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Compléter : la critique du Petit Zinc', TEXTE_A6, [
  { q: 'Complète : le meilleur restaurant que je (connaître) ; le seul qui (servir) encore une cuisine de marché.', a: "Que je connaisse (ton jugement : subjonctif) ; le seul qui serve encore une vraie cuisine de marché (jugement : subjonctif ; sert si tu parles d'un fait vérifié)." },
  { q: 'Complète : le seul restaurant de la rue qui (être) ouvert le lundi.', a: "Qui est ouvert le lundi : c'est écrit sur la porte, un fait vérifiable, indicatif." },
  { q: 'Complète : le chef a été le premier (proposer) un menu végétarien.', a: "Le premier à proposer : à et l'infinitif, sans choix de mode." },
  { q: 'Complète les deux dernières : le seul reproche qu’on (pouvoir) lui faire ; l’adresse la plus sûre que je (pouvoir) recommander.', a: "Qu'on puisse lui faire ; que je puisse vous recommander. Deux jugements : subjonctif." },
], 'rec-b2-06-texte-a6', ['seul']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le jugement', '« C’est la seule personne qui me … vraiment. » Ton avis :',
    ['comprenne', 'comprend'], 0,
    'Un jugement : subjonctif. EN: a judgement.'),
  ctl('Le constat', '« C’est la seule boulangerie du quartier qui … ouverte le dimanche. »',
    ['est', 'soit'], 0,
    'Un fait affiché : indicatif. EN: a posted fact.'),
  ctl('Les deux', '« Le meilleur film que j’aie vu », « que j’ai vu » : lequel est faux ?',
    ['aucun des deux', 'que j’aie vu', 'que j’ai vu'], 0,
    'Les deux sont justes ; le subjonctif est plus soigné. EN: both are correct.'),
], ['seul']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Le seul, le premier, le meilleur',
    opener: {
      line: "Le seul restaurant ouvert le lundi, la meilleure cuisine que tu connaisses : ici tu sépares ce que tu juges de ce que tu constates. EN: The only restaurant open on Mondays, the best cooking you know: here you separate what you judge from what you state.",
      imageRef: 'lessons/subjonctif-indicatif/act06.jpg',
    },
    sections: [],
    milestone: "Après un superlatif ou le seul, tu choisis le subjonctif pour juger et l'indicatif pour constater, ou tu passes par à et l'infinitif. EN: After a superlative you judge with the subjunctive and state with the indicative.",
    estScreens: 38, restPoints: ['a6-cartes', 'a6-exemples'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_EXEMPLES, A6_ERREURS, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: LE BUT OU LE RÉSULTAT
 *
 *  Built on lesson 31 in B1 (de sorte que both ways, si bien que), rows
 *  reused by id. Adds de façon que, sans que, and the pair tellement… que
 *  against trop… pour que.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'La rue des écoles',
  frSub: 'Avant et après la fermeture',
  setting: 'Annecy, à la sortie de l’école. Des parents parlent de la rue que la ville vient de fermer aux voitures le matin.',
  bubbles: [
    { from: 'narrator', fr: 'Le portail s’ouvre. Les enfants courent sur la chaussée vide.', en: 'The gate opens. The children run into the empty road.' },
    { from: 'user', fr: 'La ville a fermé la rue pour que les enfants puissent jouer.', en: 'The town closed the street so that the children could play.' },
    { from: 'coach', fr: 'Pour que : le but, au moment de la décision. Subjonctif.', en: 'Pour que: the goal, at the moment of the decision. Subjunctive.', warn: 'But : subjonctif' },
    { from: 'user', fr: 'Et maintenant, elle est fermée, si bien que les enfants peuvent jouer.', en: 'And now it is closed, so the children can play.' },
    { from: 'coach', fr: 'Si bien que : le résultat, il est là. Indicatif.', en: 'Si bien que: the result, it is here. Indicative.', warn: 'Résultat : indicatif' },
    { from: 'user', fr: 'Il faut des bancs de sorte que les grands-parents puissent s’asseoir.', en: 'We need benches so that grandparents can sit down.' },
    { from: 'coach', fr: 'De sorte que dit ici un but : subjonctif. Pour un résultat, il prendrait l’indicatif.', en: 'De sorte que states a goal here: subjunctive. For a result it would take the indicative.', warn: 'De sorte que : les deux' },
  ],
  closing: { fr: 'Le but vise, le résultat constate : subjonctif pour l’un, indicatif pour l’autre.', en: 'A goal aims, a result states: subjunctive for one, indicative for the other.' },
  audio: REC('rec-b2-06-ecole'),
  say: REFRAME,
  terms: ['but'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-liens',
  title: 'Viser ou constater',
  frSub: 'Les conjonctions du but et du résultat',
  hint: 'Quatre cartes. La deuxième vient de la leçon 31 du B1.',
  audio: REC('rec-b2-06-but'),
  say: REFRAME,
  terms: ['but'],
  cards: [
    {
      head: 'Le but', label: 'subjonctif',
      fr: fr(E(1901)), sub: rsOf(E(1901)),
      body: "Pour que, afin que, sans que : le fait n'est pas encore atteint, tu le vises. EN: a goal is not reached yet.",
    },
    {
      head: 'De sorte que, deux fois', label: Cap(SUBORD_REF),
      fr: `${fr(CL(1330))} · ${fr(CL(1331))}`, sub: `${rsOf(CL(1330))} · ${rsOf(CL(1331))}`,
      body: `« ${B131_REFRAME} » Ici, c'est le sens de la conjonction qui choisit : but ou résultat. EN: ${B131_REFRAME_EN}`,
    },
    {
      head: 'Le résultat', label: 'indicatif',
      fr: fr(E(1902)), sub: rsOf(E(1902)),
      body: "Si bien que, tellement… que : le fait est arrivé, tu le constates. Si bien que ne prend jamais le subjonctif. EN: a result is there.",
    },
    {
      head: 'Trop ou tellement', label: 'deux modes',
      fr: `${fr(E(1911))} · ${fr(E(1910))}`, sub: `${rsOf(E(1911))} · ${rsOf(E(1910))}`,
      body: "Trop… pour que : ce qui ne peut pas arriver, subjonctif. Tellement… que : la conséquence réelle, indicatif. EN: trop pour que takes the subjunctive, tellement que the indicative.",
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Visé ou obtenu',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le but : subjonctif', [
      it(E(1903), 'de sorte que, pour un but'),
      it(E(1905), 'de façon que, pour un but'),
      it(E(1908), 'afin que'),
      it(E(1907), 'sans que'),
    ], chk('« Installez des bancs de sorte que les personnes âgées … se reposer. »',
      ['puissent', 'peuvent'], 0,
      'Les bancs ne sont pas encore là : un but. EN: a goal, so subjunctive.')),
    grp('Le résultat : indicatif', [
      it(E(1904), 'de sorte que, pour un résultat'),
      it(E(1906), 'de façon que, pour un résultat'),
      it(E(1909), 'si bien que'),
      it(E(1910), 'tellement… que'),
    ], chk('« La réunion a eu lieu le soir, si bien que beaucoup de parents … venus. »',
      ['sont', 'soient'], 0,
      'Ils sont venus : un résultat. EN: a result, so indicative.')),
    ctl('La paire', '« Il fait trop chaud pour que les enfants … sortir. »',
      ['puissent', 'peuvent'], 0,
      'Trop… pour que : subjonctif. EN: trop pour que takes the subjunctive.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['but'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'But ou résultat',
  frSub: 'Dix phrases, un seul verbe qui tranche',
  lines: [
    ln(E(1901)), ln(E(1902)), ln(E(1903)), ln(E(1904)), ln(E(1905)),
    ln(E(1906)), ln(E(1908)), ln(E(1909)), ln(E(1910)), ln(E(1911)),
  ],
  questions: [
    { q: 'Première phrase : les enfants jouent-ils déjà dans la rue ?', opts: ['pas encore, c’est le but', 'oui, c’est le résultat'], correct: 0, why: 'Puissent : un but. EN: a goal.' },
    { q: 'Deuxième phrase : et maintenant ?', opts: ['ils peuvent jouer', 'pas encore'], correct: 0, why: 'Si bien que : le résultat. EN: the result.' },
    { q: 'Quatrième phrase : les bancs sont-ils déjà installés ?', opts: ['oui', 'non, on les demande'], correct: 0, why: 'On a installé, puis peuvent : un résultat. EN: done.' },
    { q: 'Sixième phrase : tout le monde a-t-il compris ?', opts: ['oui', 'on ne le sait pas'], correct: 0, why: 'L’a comprise : c’est arrivé. EN: it happened.' },
    { q: 'Dernière phrase : les enfants vont-ils sortir ?', opts: ['non, il fait trop chaud', 'oui, tout de suite'], correct: 0, why: 'Trop chaud pour que : la sortie n’a pas lieu. EN: too hot.' },
  ],
  audio: REC('rec-b2-06-but-ecoute'),
  say: REFRAME,
  terms: ['but'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Le but qu’on prend pour un fait',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Viser ou constater',
    body: "Pour que, afin que, sans que, trop… pour que : subjonctif. Si bien que, tellement… que : indicatif. De sorte que et de façon que : le sens choisit. EN: goals take the subjunctive, results the indicative.",
  },
  cards: [
    { promptLabel: 'pour que', promptSound: 'La ville ferme la rue pour que les enfants peuvent jouer.', fr: fr(E(1901)), ipa: ipaOf(E(1901)), tip: 'Pour que : subjonctif, toujours. EN: always subjunctive.' },
    { promptLabel: 'si bien que', promptSound: 'La ville a fermé la rue, si bien que les enfants puissent jouer.', fr: fr(E(1902)), ipa: ipaOf(E(1902)), tip: 'Si bien que : un résultat, indicatif. EN: a result.' },
    { promptLabel: 'sans que', promptSound: 'Le projet a été voté sans que les habitants sont consultés.', fr: fr(E(1907)), ipa: ipaOf(E(1907)), tip: 'Sans que : subjonctif. EN: sans que takes the subjunctive.' },
    { promptLabel: 'tellement que', promptSound: 'Il fait tellement chaud que les enfants ne puissent pas sortir.', fr: fr(E(1910)), ipa: ipaOf(E(1910)), tip: 'Tellement… que : la conséquence réelle. EN: a real consequence.' },
    { promptLabel: 'trop pour que', promptSound: 'Il fait trop chaud pour que les enfants peuvent sortir.', fr: fr(E(1911)), ipa: ipaOf(E(1911)), tip: 'Trop… pour que : subjonctif. EN: subjunctive.' },
    { promptLabel: 'pour que', promptSound: 'Je t’écris maintenant pour que tu as le temps de répondre.', fr: fr(E(1915)), ipa: ipaOf(E(1915)), tip: 'Le but : aies. EN: a goal, aies.' },
  ],
  drill: [
    { promptSay: 'La ville ferme la rue pour que les enfants … jouer.', opts: ['puissent', 'peuvent'], correct: 0 },
    { promptSay: 'La ville a fermé la rue, si bien que les enfants … jouer.', opts: ['peuvent', 'puissent'], correct: 0 },
    { promptSay: 'Mets ton badge de sorte qu’on te …', opts: ['reconnaisse', 'reconnaît'], correct: 0 },
    { promptSay: 'Il a mis son badge, de sorte qu’on l’… reconnu.', opts: ['a', 'ait'], correct: 0 },
    { promptSay: 'Le projet a été voté sans que les habitants … consultés.', opts: ['soient', 'sont'], correct: 0 },
    { promptSay: 'Il fait tellement chaud que les enfants ne … pas sortir.', opts: ['peuvent', 'puissent'], correct: 0 },
    { promptSay: 'Je t’ai écrit tôt, si bien que tu … eu le temps de répondre.', opts: ['as', 'aies'], correct: 0 },
    { promptSay: 'Afin que chacun … donner son avis, la réunion aura lieu le soir.', opts: ['puisse', 'peut'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Viser ou constater' },
    { label: 'Six cartes', kind: 'cards', title: 'Le but et le résultat confondus' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-06-piege-but'),
  say: REFRAME,
  terms: ['but'],
};

const A7_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a7-hacks',
  layer: 'core',
  title: 'Trois astuces pour le but et le résultat',
  hacks: [
    { hack: 'Remplace par pour que. Si la phrase garde son sens, c’est un but : subjonctif.', why: "Pour que ne dit que le but ; s'il convient, ta conjonction vise. EN: if pour que fits, it is a goal." },
    { hack: 'Remplace par si bien que. Si la phrase garde son sens, c’est un résultat : indicatif.', why: "Si bien que ne dit que le résultat. EN: if si bien que fits, it is a result." },
    { hack: 'Même sujet des deux côtés : pour, afin de, sans, suivis de l’infinitif.', why: `${Cap(INF_REF)} l'a posé : un seul sujet se passe de que. EN: one subject, no que.` },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['but'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Compléter : le bilan de la rue Centrale', TEXTE_A7, [
  { q: 'Complète : pour que les poussettes (pouvoir) passer ; si bien que la rue (être) plus fraîche.', a: "Pour que les poussettes puissent passer (le but : subjonctif) ; si bien que la rue est plus fraîche aujourd'hui (le résultat : indicatif)." },
  { q: 'Complète : de sorte que la circulation ne (être) presque pas gênée.', a: "De sorte que la circulation n'a presque pas été gênée : c'est arrivé, un résultat, indicatif." },
  { q: 'Complète : des fontaines, de sorte que les enfants (avoir) de l’eau en été.', a: "De sorte que les enfants aient de l'eau : une demande, donc un but, subjonctif." },
  { q: 'Complète la dernière : afin que rien ne (se faire) sans eux.', a: "Afin que rien ne se fasse sans eux : afin que, subjonctif." },
], 'rec-b2-06-texte-a7', ['but']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Si bien que', '« Il a plu, si bien que la rue … inondée. »',
    ['est', 'soit'], 0,
    'Un résultat : indicatif. EN: a result.'),
  ctl('De sorte que', '« Mets ton badge de sorte qu’on te … »',
    ['reconnaisse', 'reconnaît'], 0,
    'Un but : subjonctif. EN: a goal.'),
  ctl('Le test', 'Pour savoir si de sorte que dit un but, tu essaies…',
    ['de le remplacer par pour que', 'de le remplacer par parce que'], 0,
    'Si pour que convient, c’est un but. EN: if pour que fits, it is a goal.'),
], ['but']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Le but ou le résultat',
    opener: {
      line: "Fermer la rue pour que les enfants jouent, ou l'avoir fermée si bien qu'ils jouent : ici tu sépares ce que tu vises de ce que tu obtiens. EN: Closing a street so that children can play, or having closed it so they can: here you separate aim from outcome.",
      imageRef: 'lessons/subjonctif-indicatif/act07.jpg',
    },
    sections: [],
    milestone: "Tu choisis le subjonctif pour un but et l'indicatif pour un résultat, même avec de sorte que et de façon que. EN: You can choose the subjunctive for a goal and the indicative for a result.",
    estScreens: 42, restPoints: ['a7-cartes', 'a7-ecoute'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_CONSTRUIRE, A7_ECOUTE, A7_PIEGE, A7_HACKS, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: BIEN QUE OU MÊME SI
 *
 *  Built on lesson 32 in B1 (bien que against même si), rows reused. Adds
 *  quoi que / quoique, quel que, si… que, bien que + adjective, même si for
 *  a hypothesis, and avoir beau.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'La lettre au journal',
  frSub: 'Quatre façons de concéder',
  setting: 'Sherbrooke. Tu aides ta voisine Ginette à écrire au journal local contre le déménagement du marché.',
  bubbles: [
    { from: 'narrator', fr: 'Ginette a déjà écrit trois phrases. Elle te les lit.', en: 'Ginette has already written three sentences. She reads them to you.' },
    { from: 'user', fr: 'Bien que la mairie ait des arguments, elle s’y prend mal.', en: 'Although the council has arguments, it is going about it badly.' },
    { from: 'coach', fr: 'Bien que concède sans affirmer : ait.', en: 'Bien que concedes without asserting: ait.', warn: 'Bien que : subjonctif' },
    { from: 'user', fr: 'Même si la mairie a des arguments, elle s’y prend mal.', en: 'Even if the council has arguments, it is going about it badly.' },
    { from: 'coach', fr: 'Même si reste un si : a, à l’indicatif.', en: 'Même si is still a si: a, in the indicative.', warn: 'Même si : indicatif' },
    { from: 'user', fr: 'Quoi que disent les élus, le marché fait partie de notre vie.', en: 'Whatever the councillors say, the market is part of our life.' },
    { from: 'coach', fr: 'Quoi que, en deux mots : quelle que soit la chose. Et disent, ici, est un subjonctif.', en: 'Quoi que, in two words: whatever. And disent here is a subjunctive.', warn: 'Quoi que : subjonctif' },
  ],
  closing: { fr: 'Bien que, quoique, quoi que, quel que : subjonctif. Même si : indicatif.', en: 'Bien que, quoique, quoi que, quel que: subjunctive. Même si: indicative.' },
  audio: REC('rec-b2-06-lettre'),
  say: REFRAME,
  terms: ['concession'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-liens',
  title: 'Concéder, au-delà du B1',
  frSub: 'Bien que, même si, et leurs cousins',
  hint: 'Quatre cartes. La première rappelle la leçon 32 du B1.',
  audio: REC('rec-b2-06-concession'),
  say: REFRAME,
  terms: ['concession'],
  cards: [
    {
      head: 'Bien que ou même si', label: Cap(CONCESSION_REF),
      fr: `${fr(CL(1435))} · ${fr(CL(1417))}`, sub: `${rsOf(CL(1435))} · ${rsOf(CL(1417))}`,
      body: `« ${B132_REFRAME} » Bien que : subjonctif ; même si : indicatif. EN: ${B132_REFRAME_EN}`,
    },
    {
      head: 'Quoi que, quel que', label: 'subjonctif',
      fr: `${fr(E(1924))} · ${fr(E(1925))}`, sub: `${rsOf(E(1924))} · ${rsOf(E(1925))}`,
      body: "Quoi que en deux mots : quelle que soit la chose. Quel que s'accorde avec le nom : quelle que soit la raison. EN: whatever, with the subjunctive.",
    },
    {
      head: 'Même si, pour imaginer', label: 'imparfait, plus-que-parfait',
      fr: `${fr(E(1921))} · ${fr(E(1922))}`, sub: `${rsOf(E(1921))} · ${rsOf(E(1922))}`,
      body: "Même si suit la règle de si : l'imparfait pour aujourd'hui, le plus-que-parfait pour le passé. Jamais de subjonctif. EN: même si follows si.",
    },
    {
      head: 'Les raccourcis', label: 'sans verbe conjugué',
      fr: `${fr(E(1927))} · ${fr(E(1928))}`, sub: `${rsOf(E(1927))} · ${rsOf(E(1928))}`,
      body: "Bien que fatiguée : bien que devant un adjectif. Avoir beau, puis l'infinitif : la concession de l'oral, sans mode à choisir. EN: two ways round the choice.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Concède avec le bon mode',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Subjonctif : tu concèdes sans affirmer', [
      it(E(1919), 'bien que'),
      it(E(1923), 'quoique, en un mot'),
      it(E(1924), 'quoi que, en deux mots'),
      it(E(1933), 'si… que, soutenu'),
    ], chk('« Quel que … le prix, le quartier a besoin de ce parc. »',
      ['soit', 'est'], 0,
      'Quel que : subjonctif. EN: quel que takes the subjunctive.')),
    grp('Indicatif : même si reste un si', [
      it(E(1920), 'même si, un fait'),
      it(E(1921), 'même si, une hypothèse'),
      it(E(1922), 'même si, au passé'),
      it(E(1932), 'même si, au présent imaginé'),
    ], chk('« Même si le loyer … élevé, nous restons. »',
      ['est', 'soit'], 0,
      'Même si : indicatif, toujours. EN: même si, indicative.')),
    ctl('Quoique ou quoi que', '« … tu dises, je garderai mon avis. »',
      ['Quoi que', 'Quoique'], 0,
      'Quelle que soit la chose que tu dises : deux mots. EN: whatever you say.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concession'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de concession',
  errors: [
    {
      wrong: 'Même si la rue soit plus calme, les commerçants se plaignent.',
      right: fr(E(1920)),
      why: "Normal : même si concède, comme bien que. Mais c'est un si, et si ne prend jamais le subjonctif. EN: même si never takes the subjunctive.",
    },
    {
      wrong: 'Bien que la rue est plus calme, les commerçants se plaignent.',
      right: fr(E(1919)),
      why: "Normal : la rue est vraiment plus calme, c'est un fait. Mais bien que le concède sans l'affirmer : subjonctif. EN: bien que takes the subjunctive, even for a true fact.",
    },
    {
      wrong: 'Quoique tu dises, je garderai mon avis.',
      right: fr(E(1924)),
      why: "Normal : à l'oreille, c'est le même mot. Quoique en un mot veut dire bien que ; quoi que en deux mots, quelle que soit la chose que. EN: quoique means although, quoi que means whatever.",
    },
    {
      wrong: 'Quelque soit le prix, le quartier a besoin de ce parc.',
      right: fr(E(1925)),
      why: "Normal : quelque existe. Ici, quel que s'accorde avec le nom qui suit : quel que soit le prix, quelle que soit la raison. EN: quel que agrees with the noun.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concession'],
};

const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a8-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Quoi que ou quoique, à toi de l’écrire',
  itemIds: dicteeFor(8),
  audio: AUDIO,
  say: REFRAME,
  terms: ['concession'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Compléter : le courrier des lecteurs', TEXTE_A8, [
  { q: 'Complète : bien que je (vivre) ici depuis vingt ans ; même si la mairie (avoir) raison.', a: "Bien que je vive dans ce quartier depuis vingt ans (subjonctif) ; même si la mairie a raison sur le fond (indicatif)." },
  { q: 'Complète : quoi que les élus (dire).', a: "Quoi que les élus disent : quelle que soit la chose qu'ils disent, subjonctif. Disent a ici la forme du subjonctif." },
  { q: 'Complète : quel que (être) le coût du déménagement.', a: "Quel que soit le coût : quel que, subjonctif, accordé avec le coût." },
  { q: 'Complète la dernière : même si la décision (être) déjà prise.', a: "Même si la décision est déjà prise (ou était déjà prise, pour l'imaginer) : même si garde l'indicatif." },
], 'rec-b2-06-texte-a8', ['concession']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Bien que', '« Bien que le loyer … élevé, nous restons. »',
    ['soit', 'est'], 0,
    'Bien que : subjonctif. EN: subjunctive.'),
  ctl('Même si', '« Même si la ville … tout, je serais contre. »',
    ['payait', 'paie', 'paye jamais'], 0,
    'Une hypothèse avec même si : l’imparfait, comme après si. EN: imparfait for a hypothesis.'),
  ctl('L’orthographe', 'Quoi que tu fasses = …',
    ['quelle que soit la chose que tu fasses', 'bien que tu fasses'], 0,
    'Deux mots : quelle que soit la chose. EN: whatever you do.'),
], ['concession']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Bien que ou même si',
    opener: {
      line: "La rue est plus calme, et pourtant ils se plaignent : ici tu concèdes avec le bon mot et le bon mode. EN: The street is quieter and yet they complain: here you concede with the right word and the right mood.",
      imageRef: 'lessons/subjonctif-indicatif/act08.jpg',
    },
    sections: [],
    milestone: "Tu concèdes avec bien que, quoi que et quel que au subjonctif, et avec même si à l'indicatif, même pour imaginer. EN: You can concede with the subjunctive after bien que and with the indicative after même si.",
    estScreens: 40, restPoints: ['a8-cartes', 'a8-erreurs'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_ERREURS, A8_DICTEE, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: AVANT QUE, APRÈS QUE
 *
 *  THE trap: après que + indicative, heard everywhere with the subjunctive.
 *  Built on lessons 15 and 31 in B1, which named the rule; here the reason,
 *  the tenses after après que, the expletive ne, and the ways out.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Avant, après, en attendant',
  frSub: 'Neuf phrases, une ligne du temps',
  lines: [
    ln(E(1937)), ln(E(1938)), ln(E(1939)), ln(E(1941)), ln(E(1942)),
    ln(E(1943)), ln(E(1944)), ln(E(1950)), ln(E(1951)),
  ],
  questions: [
    { q: 'Première phrase : le vote a-t-il eu lieu avant les travaux ?', opts: ['oui', 'non'], correct: 0, why: 'Après que : le vote est accompli. EN: the vote came first.' },
    { q: 'Deuxième phrase : la décision était-elle prise quand les habitants ont manifesté ?', opts: ['non, pas encore', 'oui'], correct: 0, why: 'Avant que : pas encore. EN: not yet.' },
    { q: 'Quatrième phrase : le gardien est-il déjà parti ?', opts: ['non', 'oui'], correct: 0, why: 'Avant que : pas encore. Le ne ne nie rien. EN: the ne is expletive.' },
    { q: 'Sixième phrase : depuis quand entend-on les oiseaux ?', opts: ['depuis la fermeture de la rue', 'depuis l’ouverture du parc'], correct: 0, why: 'Depuis que la rue est fermée. EN: since the street closed.' },
    { q: 'Dernière phrase : quand recevra-t-on une lettre ?', opts: ['dès que la décision sera prise', 'avant la décision'], correct: 0, why: 'Dès que : indicatif, au futur. EN: as soon as.' },
  ],
  audio: REC('rec-b2-06-temps-ecoute'),
  say: REFRAME,
  terms: ['apres'],
};

const A9_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-table',
  layer: 'core',
  sheetId: 'sheet-liens',
  title: 'Six conjonctions de temps',
  cols: ['Conjonction', 'Mode', 'Le fait'],
  rows: [
    { cells: ['après que', 'indicatif', 'accompli'], say: fr(E(1937)),
      detail: { title: 'Après que', body: "Le fait a eu lieu : tu l'affirmes. À l'examen, jamais après qu'il soit. EN: après que takes the indicative.", say: fr(CL(1339)) } },
    { cells: ['avant que', 'subjonctif', 'à venir'], say: fr(E(1938)),
      detail: { title: 'Avant que', body: "Le fait n'a pas encore eu lieu. À l'écrit soigné, un ne explétif peut s'ajouter : il ne nie rien. EN: avant que takes the subjunctive.", say: fr(E(1941)) } },
    { cells: ['jusqu’à ce que', 'subjonctif', 'attendu'], say: fr(E(1950)),
      detail: { title: 'Jusqu’à ce que', body: "Tu attends un fait qui n'est pas là. EN: until, subjunctive.", say: fr(OA(1340)) } },
    { cells: ['en attendant que', 'subjonctif', 'attendu'], say: fr(E(1942)),
      detail: { title: 'En attendant que', body: "Même logique : le fait attendu n'est pas affirmé. EN: until, while waiting for.", say: fr(E(1942)) } },
    { cells: ['depuis que, maintenant que', 'indicatif', 'réel'], say: fr(E(1943)),
      detail: { title: 'Depuis que, maintenant que', body: "Un fait réel sert de point de départ. EN: a real starting point.", say: fr(E(1944)) } },
    { cells: ['dès que, quand', 'indicatif', 'posé, même futur'], say: fr(E(1951)),
      detail: { title: 'Dès que, quand', body: "Même dans l'avenir, le fait est posé : futur, pas subjonctif. EN: future indicative.", say: fr(E(1952)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['apres'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Avant ou après sur la ligne',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le fait a eu lieu : indicatif', [
      it(E(1937), 'après que'),
      it(E(1939), 'après que, avec être'),
      it(E(1943), 'depuis que'),
      it(E(1952), 'après que, au futur antérieur'),
    ], chk('« Après que le maire … arrivé, la séance a commencé. »',
      ['est', 'soit'], 0,
      'Après que : indicatif. EN: après que takes the indicative.')),
    grp('Le fait est à venir : subjonctif', [
      it(E(1938), 'avant que'),
      it(E(1940), 'avant que, sans ne'),
      it(E(1942), 'en attendant que'),
      it(E(1950), 'jusqu’à ce que'),
    ], chk('« Avant que le maire …, relisons nos questions. »',
      ['vienne', 'vient'], 0,
      'Avant que : subjonctif. EN: avant que takes the subjunctive.')),
    ctl('La sortie de secours', 'Pour éviter après que, tu peux écrire…',
      ['après le vote, ou après avoir voté', 'après que le vote soit'], 0,
      'Un nom ou l’infinitif passé : plus de mode à choisir. EN: a noun or a past infinitive.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['apres'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Après qu’il soit parti',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Accompli ou à venir',
    body: "Après que regarde un fait accompli : indicatif, même si l'oreille entend partout le subjonctif. Avant que, jusqu'à ce que, en attendant que regardent un fait à venir : subjonctif. EN: après que takes the indicative, avant que the subjunctive.",
  },
  cards: [
    { promptLabel: 'après que', promptSound: 'Après que le conseil ait voté, les travaux ont commencé.', fr: fr(E(1937)), ipa: ipaOf(E(1937)), tip: 'Le vote est accompli : a voté. EN: accomplished, indicative.' },
    { promptLabel: 'après que', promptSound: 'Après qu’elle soit partie, la réunion a continué.', fr: fr(E(1939)), ipa: ipaOf(E(1939)), tip: 'L’erreur la plus fréquente, même chez les francophones. EN: the commonest error.' },
    { promptLabel: 'avant que', promptSound: 'Avant que le conseil prend sa décision, les habitants ont manifesté.', fr: fr(E(1938)), ipa: ipaOf(E(1938)), tip: 'Avant que : prenne. EN: subjunctive.' },
    { promptLabel: 'en attendant que', promptSound: 'En attendant que la mairie répond, on continue la pétition.', fr: fr(E(1942)), ipa: ipaOf(E(1942)), tip: 'Un fait attendu : réponde. EN: subjunctive.' },
    { promptLabel: 'jusqu’à ce que', promptSound: 'On attendra jusqu’à ce que tout le monde est assis.', fr: fr(E(1950)), ipa: ipaOf(E(1950)), tip: 'Jusqu’à ce que : soit. EN: subjunctive.' },
    { promptLabel: 'depuis que', promptSound: 'Depuis que la rue soit fermée, on entend les oiseaux.', fr: fr(E(1943)), ipa: ipaOf(E(1943)), tip: 'Un fait réel : est. EN: indicative.' },
  ],
  drill: [
    { promptSay: 'Après que le conseil … voté, les travaux ont commencé.', opts: ['a', 'ait'], correct: 0 },
    { promptSay: 'Avant que le conseil … sa décision, ils ont manifesté.', opts: ['prenne', 'prend'], correct: 0 },
    { promptSay: 'Après qu’elle … partie, la réunion a continué.', opts: ['est', 'soit'], correct: 0 },
    { promptSay: 'En attendant que la mairie …, on continue.', opts: ['réponde', 'répond'], correct: 0 },
    { promptSay: 'Depuis que la rue … fermée, on entend les oiseaux.', opts: ['est', 'soit'], correct: 0 },
    { promptSay: 'On attendra jusqu’à ce que tout le monde … assis.', opts: ['soit', 'est'], correct: 0 },
    { promptSay: 'Dès que la décision … prise, nous vous écrirons.', opts: ['sera', 'soit'], correct: 0 },
    { promptSay: 'Finissons avant que le gardien ne …', opts: ['parte', 'part'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Accompli ou à venir' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que tout le monde dit, et que l’examen refuse' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-06-piege-temps'),
  say: REFRAME,
  terms: ['apres'],
};

const A9_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a9-flash',
  layer: 'core',
  title: 'Huit conjonctions de temps',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'after (a clause)', back: 'après que + indicatif', say: fr(E(1937)) },
    { front: 'before (a clause)', back: 'avant que + subjonctif', say: fr(E(1938)) },
    { front: 'until', back: 'jusqu’à ce que + subjonctif', say: fr(E(1950)) },
    { front: 'while waiting for', back: 'en attendant que + subjonctif', say: fr(E(1942)) },
    { front: 'since (time)', back: 'depuis que + indicatif', say: fr(E(1943)) },
    { front: 'now that', back: 'maintenant que + indicatif', say: fr(E(1944)) },
    { front: 'as soon as', back: 'dès que + indicatif', say: fr(E(1951)) },
    { front: 'after voting', back: 'après avoir voté', say: fr(E(1945)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['apres'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Compléter : le compte rendu du conseil', TEXTE_A9, [
  { q: 'Complète : après que la présidente (ouvrir) la séance ; avant que la salle (pouvoir) poser ses questions.', a: "Après que la présidente a ouvert la séance (accompli : indicatif) ; avant que la salle puisse poser ses questions (à venir : subjonctif)." },
  { q: 'Complète : après que chacun (s’exprimer).', a: "Après que chacun s'est exprimé : indicatif, jamais se soit exprimé à l'examen." },
  { q: 'Complète : jusqu’à ce que la mairie (répondre) ; en attendant qu’elle le (faire).', a: "Jusqu'à ce que la mairie réponde ; en attendant qu'elle le fasse. Deux faits attendus : subjonctif." },
  { q: 'Complète la dernière : depuis que la pétition (être) en ligne.', a: "Depuis que la pétition est en ligne : un fait réel, indicatif." },
], 'rec-b2-06-texte-a9', ['apres']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Après que', '« Après que le conseil … voté, les travaux ont commencé. »',
    ['a', 'ait'], 0,
    'Un fait accompli : indicatif. EN: indicative.'),
  ctl('Le ne', '« Finissons avant que le gardien ne parte. » Le gardien part-il ?',
    ['oui, bientôt : le ne ne nie rien', 'non, il reste'], 0,
    'Le ne explétif est un signe de registre, pas une négation. EN: the expletive ne negates nothing.'),
  ctl('Dès que', '« Dès que la décision … prise, nous vous écrirons. »',
    ['sera', 'soit'], 0,
    'Dès que : indicatif, au futur. EN: future indicative.'),
], ['apres']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Avant que, après que',
    opener: {
      line: "Tout le monde dit après qu'il soit parti, et l'examen le refuse : ici tu places chaque fait avant ou après, et le mode suit. EN: Everyone says après qu'il soit parti and the exam refuses it: here you place each fact before or after, and the mood follows.",
      imageRef: 'lessons/subjonctif-indicatif/act09.jpg',
    },
    sections: [],
    milestone: "Tu écris après que avec l'indicatif et avant que, jusqu'à ce que, en attendant que avec le subjonctif, et tu sais contourner la question. EN: You write après que with the indicative and avant que with the subjunctive.",
    estScreens: 42, restPoints: ['a9-table', 'a9-piege'],
  },
  sections: [A9_ECOUTE, A9_TABLE, A9_CONSTRUIRE, A9_PIEGE, A9_FLASH, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: QUAND LES DEUX SONT POSSIBLES
 *
 *  Where both moods are correct and say different things: register and
 *  certainty after a denied opinion, comprendre que, dire que, supposer
 *  que, que + subjunctive at the head of the sentence, le fait que.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le subjonctif est-il en train de mourir',
  frSub: 'Une chronique de langue',
  text: LECTURE_CHRONIQUE,
  glossary: [
    { word: "à l'appui", en: 'to back it up', note: 'Avec des exemples qui prouvent ce qu’on dit.' },
    { word: 'par analogie', en: 'by analogy', note: 'Parce qu’une forme ressemble à une autre.' },
    { word: 'les correcteurs', en: 'the markers', note: 'Ceux qui corrigent les copies d’examen.' },
  ],
  questions: [
    { q: 'Global : à quelle question répond la chronique ?', a: "Le subjonctif est-il en train de disparaître ? Réponse : non, il se porte bien ; ce sont les zones de choix qui bougent." },
    { q: 'Détail : que dit l’auteur de la phrase « je ne crois pas qu’il est venu » ?', a: "Qu'elle n'est pas fautive à l'oral : elle garde le fait plus présent. Mais à l'écrit soigné et à l'examen, le subjonctif reste la norme." },
    { q: 'Inférence : pourquoi « après qu’il soit parti » s’entend-il partout ?', a: "Par analogie avec avant que, qui prend le subjonctif : les deux conjonctions se ressemblent, alors on les aligne." },
    { q: 'Position : l’auteur accepte-t-il « après qu’il soit parti » ?', a: "Non : il donne raison aux grammairiens et aux correcteurs, et propose de contourner avec après son départ ou après être parti." },
  ],
  audio: REC('rec-b2-06-chronique'),
  say: REFRAME,
  terms: ['registre'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-nuances',
  title: 'Deux modes justes, deux sens',
  frSub: 'Le choix que le B2 te laisse',
  hint: 'Quatre cartes. Aucune ne contient une faute.',
  audio: REC('rec-b2-06-nuances'),
  say: REFRAME,
  terms: ['registre'],
  cards: [
    {
      head: 'Une opinion niée', label: 'écrit ou oral',
      fr: `${fr(E(1955))} · ${fr(E(1956))}`, sub: `${rsOf(E(1955))} · ${rsOf(E(1956))}`,
      body: `Soit venu : l'écrit, la norme. Est venu : l'oral, et le fait reste plus présent. La forme soit venu est celle de ${SUBJ_PASSE_REF}. EN: written norm against spoken nuance.`,
    },
    {
      head: 'Comprendre que', label: 'accepter ou découvrir',
      fr: `${fr('fr.b1.emotions.1170')} · ${fr(E(1957))}`, sub: `${rsOf('fr.b1.emotions.1170')} · ${rsOf(E(1957))}`,
      body: "Je comprends que tu sois déçue : je l'accepte. J'ai compris que tu étais déçu : je l'ai découvert. EN: accepting takes the subjunctive, realising the indicative.",
    },
    {
      head: 'Dire que', label: 'ordonner ou informer',
      fr: `${fr(E(1958))} · ${fr(E(1959))}`, sub: `${rsOf(E(1958))} · ${rsOf(E(1959))}`,
      body: "Dis-lui qu'il vienne : un ordre, subjonctif. Dis-lui qu'il vient : une information, indicatif. Même chose avec écrire. EN: an order takes the subjunctive, news the indicative.",
    },
    {
      head: 'Supposer, et que en tête', label: 'l’hypothèse et le thème',
      fr: `${fr(E(1961))} · ${fr(E(1962))}`, sub: `${rsOf(E(1961))} · ${rsOf(E(1962))}`,
      body: "Supposons que : une hypothèse, subjonctif ; je suppose que, c'est je pense, indicatif. Que en tête de phrase pose le thème sans l'affirmer : subjonctif. EN: hypothesis and fronted que take the subjunctive.",
    },
  ],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-trier',
  layer: 'core',
  size: 'lg',
  title: 'Même verbe, autre sens',
  frSub: 'Trois groupes, trois gâchettes',
  groups: [
    grp('Comprendre', [
      it('fr.b1.emotions.1170', 'accepter'),
      it(E(1957), 'découvrir'),
      it(E(1966), 'accepter'),
      it(E(1967), 'découvrir'),
    ], chk('« J’ai compris qu’elle était inquiète. » Comprendre veut dire ici…',
      ['se rendre compte', 'accepter'], 0,
      'Un constat : indicatif. EN: realising, indicative.')),
    grp('Dire, écrire', [
      it(E(1958), 'un ordre'),
      it(E(1959), 'une information'),
      it(E(1969), 'un ordre'),
      it(E(1968), 'une information'),
    ], chk('« Écris-leur qu’ils soient à l’heure. » Tu…',
      ['leur demandes d’être à l’heure', 'leur annonces qu’ils sont à l’heure'], 0,
      'Le subjonctif fait un ordre. EN: the subjunctive makes it an order.')),
    grp('Supposer, et que en tête', [
      it(E(1960), 'je pense que'),
      it(E(1961), 'une hypothèse'),
      it(E(1962), 'le thème en tête'),
      it(E(1963), 'le fait affirmé'),
    ], chk('« Supposons que la réunion … lieu. »',
      ['ait', 'aura'], 0,
      'Supposons : une hypothèse, subjonctif. EN: a hypothesis.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'affirmer'],
};

const A10_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-exemples',
  layer: 'core',
  title: 'Cinq phrases à double sens',
  frSub: 'Lis, puis dis ce que le mode change',
  examples: [
    ex(E(1955), 'L’écrit : la norme après une opinion niée.'),
    ex(E(1956), 'L’oral : le fait reste plus présent.'),
    ex(E(1962), 'Que en tête : le thème, sans l’affirmer.'),
    ex(E(1964), 'Le fait que, en début de phrase : le plus souvent subjonctif.'),
    ex(E(1960), 'Je suppose : je pense, donc indicatif.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-hacks',
  layer: 'core',
  title: 'Trois astuces quand les deux sont possibles',
  hacks: [
    { hack: 'À l’écrit et à l’examen, après une opinion niée, choisis le subjonctif.', why: "L'indicatif n'est pas faux, mais il sonne oral, et le correcteur note l'écrit. EN: the subjunctive is the written norm." },
    { hack: 'Traduis le verbe : accepter ou découvrir, ordonner ou informer.', why: "Si ta traduction change, le mode change avec elle. EN: if the translation changes, so does the mood." },
    { hack: 'Si tu hésites encore, change de construction : un nom ou un infinitif.', why: "Après son départ, avant de partir : la question du mode disparaît. EN: a noun or an infinitive removes the choice." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-nuances',
  title: 'Ce qu’il faut retenir avant d’écrire',
  points: [
    "Là où la liste décide, obéis-lui : il faut que, bien que, avant que. EN: where the list decides, follow it.",
    "Là où elle laisse le choix, demande-toi si tu affirmes le fait. EN: where it leaves a choice, ask if you assert.",
    "À l'écrit, le subjonctif après une opinion niée ; jamais après après que. EN: subjunctive after a denied opinion, never after après que.",
    "En cas de doute, un nom ou un infinitif. EN: when in doubt, use a noun or an infinitive.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'affirmer'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Choisir et expliquer : le message de Hugo', TEXTE_A10, [
  { q: 'Choisis : je ne crois pas que Marc (être) venu hier. Que change chaque forme ?', a: "Soit venu : la norme écrite. Est venu : possible à l'oral, et le fait reste plus présent. Dans un message soigné, soit venu." },
  { q: 'Choisis : dis-lui qu’il (venir) samedi.', a: "Qu'il vienne : Hugo donne un ordre, subjonctif. Qu'il vient serait une simple information." },
  { q: 'Choisis : j’ai compris qu’il (être) fâché ; je comprends qu’il (être) fâché.', a: "J'ai compris qu'il était fâché : il l'a découvert, indicatif. Je comprends qu'il soit fâché : il l'accepte, subjonctif." },
  { q: 'Choisis les deux dernières : supposons qu’il (dire) non ; qu’il (avoir) raison, je ne le conteste pas.', a: "Supposons qu'il dise non : une hypothèse, subjonctif. Qu'il ait raison : que en tête de phrase, subjonctif." },
], 'rec-b2-06-texte-a10', ['registre']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('À l’examen', '« Je ne crois pas qu’il … venu hier. » Dans ta copie :',
    ['soit', 'est'], 0,
    'Le subjonctif est la norme écrite. EN: the written norm.'),
  ctl('Dire que', '« Dis-lui qu’il vienne demain. » C’est…',
    ['un ordre', 'une information'], 0,
    'Le subjonctif fait un ordre. EN: an order.'),
  ctl('Que en tête', '« Qu’il … compétent, personne ne le conteste. »',
    ['soit', 'est'], 0,
    'Que en tête de phrase : subjonctif. EN: fronted que takes the subjunctive.'),
], ['registre']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Quand les deux sont possibles',
    opener: {
      line: "Je ne crois pas qu'il soit venu, qu'il est venu : ici tu apprends ce que le mode change quand les deux sont justes. EN: Two correct sentences, two meanings: here you learn what the mood changes when both are right.",
      imageRef: 'lessons/subjonctif-indicatif/act10.jpg',
    },
    sections: [],
    milestone: "Tu sais ce que le mode change quand les deux sont possibles, et tu choisis la forme écrite quand c'est l'écrit qui compte. EN: You know what the mood changes when both are possible.",
    estScreens: 44, restPoints: ['a10-lecture', 'a10-trier', 'a10-hacks'],
  },
  sections: [A10_LECTURE, A10_CARTES, A10_TRIER, A10_EXEMPLES, A10_HACKS, A10_FOCUS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: TA RÉPONSE SUR LE FORUM
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La réponse que tu vas imiter',
  frSub: 'Awa répond sur le forum de Saint-Roch',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'les livraisons', en: 'the deliveries', note: 'Les marchandises apportées aux commerces par camion.' },
    { word: 'repris des couleurs', en: 'perked up', note: 'Ils vont mieux, ils ont retrouvé des clients.' },
    { word: 'en vaut la chandelle', en: 'it is worth it', note: 'Une expression : le résultat mérite l’effort ou le prix.' },
  ],
  questions: [
    { q: 'Global : que fait Awa dans sa réponse ?', a: "Elle sépare les faits de ses doutes et de ses souhaits, puis elle prend position pour le parc." },
    { q: 'Détail : cite un fait qu’elle affirme, et un doute.', a: "Un fait : le stationnement est plein le matin et presque vide le soir. Un doute : je ne suis pas sûre que les livraisons puissent se faire." },
    { q: 'Inférence : pourquoi écrit-elle « des voisins qui puissent présenter nos questions » ?', a: "Parce qu'elle ne les a pas encore trouvés : elle les cherche, donc subjonctif." },
    { q: 'Position : de quel côté est Awa, et avec quelle réserve ?', a: "Elle est pour le parc, mais elle réclame une vraie consultation et des chiffres publics, et elle s'inquiète des livraisons." },
  ],
  audio: REC('rec-b2-06-modele'),
  say: REFRAME,
  terms: ['affirmer', 'regarder'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-nuances',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Le plan d’une réponse sur un forum',
  steps: [
    'Présente-toi en une phrase : qui tu es, pourquoi le projet te concerne. EN: say who you are and why it matters to you.',
    'Pose les faits, à l’indicatif : il est certain que, il est probable que, je sais que. EN: set out the facts in the indicative.',
    'Dis tes doutes, au subjonctif : je doute que, je ne suis pas sûr que, il n’est pas certain que. EN: voice your doubts in the subjunctive.',
    'Concède et prends position : bien que, même si, puis ton avis. EN: concede, then take a side.',
    'Termine par un souhait ou une demande : je souhaite que, il faut que, nous cherchons des voisins qui. EN: end with a wish or a request.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affirmer', 'regarder'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  sheetId: 'sheet-nuances',
  title: 'Quatre phrases que toute réponse contient',
  cases: [
    { situation: 'Tu poses un fait probable', fr: fr(E(1975)), en: en(E(1975)) },
    { situation: 'Tu dis ton doute', fr: fr(E(1973)), en: en(E(1973)) },
    { situation: 'Tu concèdes, puis tu tiens ta position', fr: fr(E(1977)), en: en(E(1977)) },
    { situation: 'Tu termines sur un souhait', fr: fr(E(1974)), en: en(E(1974)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affirmer', 'concession'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Parle du projet avec Samira',
  frSub: 'Six tours, à voix haute',
  setting: 'Samira, ta voisine, t’arrête dans l’escalier. La mairie veut transformer la vieille halle en médiathèque et supprimer le parking. Elle veut savoir ce que tu en penses.',
  turns: [
    {
      ai: 'Tu as vu le projet de la halle ? Tu en penses quoi ?', en: 'Have you seen the plan for the market hall? What do you think?',
      user: 'Je pense que c’est une bonne idée, mais je ne suis pas sûr que le parking soit inutile.',
      userEn: 'I think it is a good idea, but I am not sure the car park is useless. (An asserted opinion, then a doubt: indicative, then subjunctive.)',
      alts: [
        { fr: 'Il me semble que c’est une bonne idée, mais il faut que la mairie écoute les commerçants.', en: 'It seems to me a good idea, but the council has to listen to the shopkeepers.' },
        { fr: 'Je trouve l’idée bonne, même si je doute qu’elle plaise à tout le monde.', en: 'I like the idea, even if I doubt everyone will like it.' },
      ],
    },
    {
      ai: 'La mairie dit que tout sera prêt en mai.', en: 'The council says everything will be ready in May.',
      user: 'Il est possible que tout soit prêt en mai, mais il est probable que le chantier prendra du retard.',
      userEn: 'Everything may be ready in May, but the work will probably fall behind. (Possible: subjunctive; probable: indicative.)',
      alts: [
        { fr: 'Il est peu probable que tout soit fini en mai.', en: 'It is unlikely that everything will be finished in May.' },
        { fr: 'Sans doute que le chantier prendra du retard, comme toujours.', en: 'No doubt the work will fall behind, as always. (Sans doute que: indicative.)' },
      ],
    },
    {
      ai: 'Tu crois qu’ils vont vraiment fermer le parking ?', en: 'Do you think they are really going to close the car park?',
      user: 'Je ne crois pas qu’ils puissent le fermer sans consultation.',
      userEn: 'I do not think they can close it without a consultation. (A denied opinion: subjunctive.)',
      alts: [
        { fr: 'Ça m’étonnerait qu’ils le fassent sans nous demander notre avis.', en: 'I would be surprised if they did it without asking us. (A feeling: subjunctive.)' },
        { fr: 'Crois-tu qu’ils prennent ce risque avant les élections ?', en: 'Do you really think they would take that risk before the elections? (Inversion and doubt: subjunctive.)' },
      ],
    },
    {
      ai: 'Moi, je voudrais surtout un endroit calme pour lire.', en: 'What I would really like is a quiet place to read.',
      user: 'Moi aussi : je cherche un lieu qui soit ouvert le soir, et il n’y en a aucun dans le quartier.',
      userEn: 'Me too: I am looking for a place that is open in the evening, and there is none in the area. (A place you are looking for: subjunctive.)',
      alts: [
        { fr: 'C’est le seul projet qui puisse nous donner un lieu pareil.', en: 'It is the only project that could give us such a place. (A judgement: subjunctive.)' },
        { fr: 'Il n’y a rien dans le quartier qui soit ouvert après vingt heures.', en: 'There is nothing in the area open after eight. (Denied: subjunctive.)' },
      ],
    },
    {
      ai: 'Et les commerçants, ils sont contre ?', en: 'And the shopkeepers, are they against it?',
      user: 'Bien qu’ils soient inquiets, beaucoup ont signé la pétition pour le projet.',
      userEn: 'Although they are worried, many have signed the petition for the project. (Bien que: subjunctive.)',
      alts: [
        { fr: 'Même s’ils sont inquiets, beaucoup ont signé la pétition.', en: 'Even if they are worried, many have signed the petition. (Même si: indicative.)' },
        { fr: 'Après que la mairie a présenté les chiffres, plusieurs ont changé d’avis.', en: 'After the council presented the figures, several changed their minds. (Après que: indicative.)' },
      ],
    },
    {
      ai: 'Alors, tu vas écrire quoi sur le forum ?', en: 'So what are you going to write on the forum?',
      user: 'Que je soutiens le projet, pour que la mairie sache que le quartier le veut, à condition qu’elle garde quelques places.',
      userEn: 'That I support the project, so the council knows the area wants it, provided it keeps a few spaces. (A goal and a condition: subjunctive.)',
      alts: [
        { fr: 'Je vais écrire que je suis pour, bien que j’aie des doutes sur le parking.', en: 'I will write that I am for it, although I have doubts about the car park.' },
        { fr: 'Je souhaite que la mairie fasse une vraie consultation, et je vais le dire.', en: 'I want the council to hold a real consultation, and I am going to say so.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affirmer', 'regarder'],
};

const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Réponds sur le forum de ton quartier',
  frSub: 'Mission écrite, format B2',
  brief: "Sur le forum de ton quartier, la mairie présente un projet : transformer l'ancienne halle du marché en médiathèque et supprimer le parking qui l'entoure. Les réactions sont vives. Réponds au fil de discussion : dis ce qui est établi, ce qui te semble probable, ce dont tu doutes et ce que tu souhaites, puis prends position.",
  briefEn: 'On your neighbourhood forum, the council presents a plan: turn the old market hall into a media library and remove the car park around it. Reactions are heated. Reply in the thread: say what is established, what seems likely, what you doubt and what you wish for, then take a position.',
  produce: "Écris une réponse de 180 à 250 mots qui mêle des faits à l'indicatif (au moins deux, dont un avec il est probable ou il est certain), des doutes au subjonctif (au moins deux), un souhait ou une demande, une concession avec bien que ou même si, une relative de recherche (nous cherchons des voisins qui…) et une position claire.",
  responseSpec: { kind: 'text', minWords: 180, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : Tu réponds au projet, tu sépares les faits, les doutes et les souhaits, et tu prends une position claire. Le ton convient à un forum de voisins. Entre 180 et 250 mots.",
          '2 : La réponse existe, mais la position est floue, ou les faits et les avis se mélangent, ou la longueur sort un peu des limites.',
          '1 : Un avis sans faits ni doutes, ou un texte beaucoup trop court.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          "3 : Le lecteur suit ta pensée : des faits, puis des doutes, puis une concession et ta position, puis un souhait. Les liens (en revanche, bien que, donc, d'ailleurs) relient les parties.",
          '2 : La réponse se suit, mais un passage saute d’une idée à l’autre sans lien.',
          '1 : On ne comprend pas ce que tu penses du projet.',
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          "2 : Tu fais varier le mode par le sens : certitude et probabilité à l'indicatif, doute et possibilité au subjonctif, une concession, une relative de recherche, un souhait, et au moins une conjonction de but ou de temps.",
          "1 : Le subjonctif est là, mais toujours après la même expression, et sans concession ni relative.",
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          "2 : Les modes sont presque toujours justes, y compris les pièges : il est probable que, après que, même si à l'indicatif ; bien que, il est possible que, pour que au subjonctif. Les formes irrégulières (soit, ait, puisse, fasse, sache) sont justes.",
          "1 : Des erreurs fréquentes (même si + subjonctif, j'espère que tu viennes, après qu'il soit, qu'il peuve) gênent parfois la lecture.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          "2 : Un français écrit, courtois et direct, adapté à un forum de voisins : ni langage de SMS, ni lettre administrative. Tu t'adresses aux autres sans les attaquer.",
          '1 : Le texte sonne comme un message rapide (genre, du coup, ça va être grave) ou comme un rapport officiel.',
        ],
      },
    ],
  },
  scaffold: [
    'Bonjour à tous.',
    "J'habite",
    'Il est certain que',
    'Il est probable que',
    'En revanche, je doute que',
    'Bien que je comprenne',
    "Nous cherchons d'ailleurs des voisins qui",
    'Je souhaite que',
  ],
  modelAnswer: "Bonjour à tous. J'habite à deux pas de la halle, et je voudrais distinguer ce que l'on sait de ce que l'on suppose. Il est certain que la halle est vide depuis trois ans : le marché s'est installé place de la Gare. Il est probable que la médiathèque attirera les familles et les étudiants, puisque la plus proche est à vingt minutes en bus. En revanche, je ne suis pas sûr que la suppression du parking soit une bonne idée. Je doute que les personnes âgées puissent venir à pied depuis le haut du quartier, et il n'est pas certain que la ligne 4 passe assez souvent. Bien que je comprenne l'envie d'un lieu sans voitures, il faut que la mairie garde au moins une vingtaine de places réservées. Je cherche d'ailleurs des voisins qui soient prêts à porter cette demande au conseil du 12 mars. Après que la bibliothèque de Carouge a ouvert ses portes, tout le quartier a changé en un an : c'est le meilleur exemple que je connaisse. Même si le projet coûte cher, il en vaut la peine. Mon souhait est donc simple : que la mairie fasse une vraie consultation, et qu'elle nous dise enfin combien de places elle compte garder. Bonne soirée à tous, Karim.\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : les faits, les doutes, le souhait et la position sont séparés ; la position est claire (pour, avec une condition).\n2. Cohérence : faits, puis en revanche et les doutes, puis bien que et la position, puis le souhait final ; d'ailleurs et donc relient les parties.\n3. Étendue : il est certain et il est probable à l'indicatif ; je ne suis pas sûr, je doute, il n'est pas certain au subjonctif ; une relative de recherche (des voisins qui soient prêts) ; un superlatif jugé (le meilleur exemple que je connaisse) ; après que et même si à l'indicatif.\n4. Correction : soit, puissent, passe, garde, connaisse, fasse ; aucun subjonctif après après que ni après même si.\n5. Registre : courtois et direct, adapté à des voisins.",
  modelAnswerEn: "Hello everyone. I live a stone's throw from the hall, and I would like to separate what we know from what we assume. It is certain that the hall has been empty for three years: the market moved to the station square. The media library will probably draw families and students, since the nearest one is twenty minutes away by bus. On the other hand, I am not sure that removing the car park is a good idea. I doubt older people can walk down from the top of the neighbourhood, and it is not certain that the number 4 runs often enough. Although I understand the wish for a car-free place, the council must keep at least twenty reserved spaces. I am looking for neighbours who would be ready to take this request to the council meeting on 12 March. After the Carouge library opened, the whole area changed within a year: it is the best example I know. Even if the project costs a lot, it is worth it. So my wish is simple: that the council holds a real consultation and finally tells us how many spaces it intends to keep. Good evening, Karim. The marker's notes (not counted): 1. Task: facts, doubts, wish and position kept apart; a clear position with a condition. 2. Coherence: facts, then doubts, then a concession and the position, then the wish. 3. Range: certain and probable in the indicative; doubt and uncertainty in the subjunctive; a relative of search; a judged superlative; après que and même si in the indicative. 4. Accuracy: every mood right, no subjunctive after après que or même si. 5. Register: courteous and direct.",
  watchFor: [
    { pattern: 'Every clause in the same mood, so facts and doubts read alike (all indicative, or subjunctive sprinkled for elegance).', criterion: 'tache', feedback: 'Sépare ce que tu affirmes de ce que tu regardes sans l’affirmer : le mode doit changer avec ton intention.', ref: 'a1-reperer' },
    { pattern: 'Trigger errors already covered in B1: j’espère que tu viennes, il me semble qu’il soit, parce qu’il soit.', criterion: 'correction', feedback: 'Espérer, il me semble et parce que donnent le fait pour vrai : indicatif.', ref: 'a2-erreurs' },
    { pattern: 'The wrong mood after an opinion verb: je crois qu’il vienne, je ne pense pas qu’il est (in writing), je doute qu’il viendra.', criterion: 'correction', feedback: 'Opinion affirmée : indicatif. Opinion niée ou doute : subjonctif, à l’écrit.', ref: 'a3-piege' },
    { pattern: 'Il est probable que + subjunctive, or il est possible que + indicative or future.', criterion: 'correction', feedback: 'Probable t’engage : indicatif. Possible n’affirme pas : subjonctif.', ref: 'a4-erreurs' },
    { pattern: 'Il paraît que, peut-être que or sans doute que followed by a subjunctive.', criterion: 'correction', feedback: 'Il paraît que, peut-être que, sans doute que : indicatif.', ref: 'a4-erreurs' },
    { pattern: 'A relative of search or denial in the indicative in writing (des voisins qui sont prêts, personne qui peut), or a found thing in the subjunctive.', criterion: 'etendue', feedback: 'Ce que tu cherches ou nies : subjonctif. Ce qui existe : indicatif.', ref: 'a5-piege' },
    { pattern: 'An invented subjunctive form: qu’il peuve, qu’il soye, que j’aille vu.', criterion: 'correction', feedback: 'Pouvoir donne puisse, être donne soit, avoir donne aie.', ref: 'a6-erreurs' },
    { pattern: 'Pour que or sans que with the indicative, or si bien que with the subjunctive.', criterion: 'correction', feedback: 'Un but : subjonctif. Un résultat : indicatif.', ref: 'a7-piege' },
    { pattern: 'Même si + subjunctive, bien que + indicative, or quoique written for quoi que.', criterion: 'correction', feedback: 'Bien que : subjonctif. Même si : indicatif. Quoi que en deux mots veut dire quelle que soit la chose.', ref: 'a8-erreurs' },
    { pattern: 'Après que + subjunctive (après qu’elle soit partie), or avant que + indicative.', criterion: 'correction', feedback: 'Après que : indicatif. Avant que : subjonctif. Ou contourne : après son départ.', ref: 'a9-piege' },
    { pattern: 'No concession, no relative of search and no wish; or a body outside 180 to 250 words.', criterion: 'etendue', feedback: 'Ajoute une concession, une relative (nous cherchons des voisins qui…) et un souhait ; compte tes mots sans la signature.', ref: 'a11-plan' },
    { pattern: 'A familiar or aggressive tone towards other posters (n’importe quoi, vous n’y comprenez rien).', criterion: 'registre', feedback: 'Reste courtois : concède d’abord, puis donne ta position.', ref: 'a11-usages' },
  ],
  graderNotes: [
    'Count the words of the reply only; a greeting line and the signature do not count. 180 to 250 with 10% tolerance (162 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'After a denied opinion (je ne crois pas que, je ne pense pas que), the indicative is a SPOKEN variant, not a grammar error: at most one « correction » point lost in total for it, and only if it recurs. The subjunctive is expected in this written task.',
    'Accept both moods after le seul, le premier, le meilleur, l’unique (act 6): score the choice only if it contradicts the meaning (a timetable fact in the subjunctive is odd, not wrong: no penalty).',
    'Accept both moods after de sorte que and de façon que when the meaning allows either; after si bien que only the indicative is correct.',
    'Après que + subjunctive is an error in this task (the exam norm), even though it is widespread; count it once, not per occurrence.',
    'Accept a regular -er verb whose subjunctive and indicative forms are identical (qu’il passe, qu’il garde) as correct in either reading: do not penalise what cannot be seen.',
    'The subjonctif passé (qu’il soit venu, que j’aie vu) belongs to lesson 5 in B2: accept a correct one, do not require it, and do not penalise a present subjunctive where the past would be finer.',
    'Accept regional vocabulary and settings (Québec, Belgium, Switzerland, West Africa): stationnement for parking, septante and nonante, commune or municipalité for mairie.',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 15 du B1 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affirmer', 'regarder', 'concession'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes phrases à voix haute',
  frSub: 'Affirmer, douter, souhaiter',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affirmer', 'regarder'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-affirmer',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la question', v: 'affirmer le fait, ou non', say: fr(E(1805)),
      detail: { title: 'La question', body: "Affirmer : indicatif. Vouloir, craindre, douter, chercher, juger, concéder : subjonctif. EN: assert or not.", say: fr(E(1804)) } },
    { k: 'croire', v: 'affirmatif, négatif, question', say: fr(E(1826)),
      detail: { title: 'Croire', body: "Je crois qu'il viendra ; je ne crois pas qu'il vienne ; crois-tu qu'il vienne doute, ne crois-tu pas qu'il a raison affirme. EN: the sentence form matters.", say: fr(E(1831)) } },
    { k: 'la certitude', v: 'probable : ind. ; possible : subj.', say: fr(E(1848)),
      detail: { title: 'L’échelle', body: "La frontière passe entre probable et possible. EN: probable asserts, possible does not.", say: fr(E(1850)) } },
    { k: 'les relatives', v: 'existe : ind. ; cherché, nié : subj.', say: fr(E(1864)),
      detail: { title: 'Les relatives', body: "Après le seul, le meilleur : le subjonctif juge, l'indicatif constate. EN: judge or state.", say: fr(E(1883)) } },
    { k: 'les liens', v: 'but, concession : subj. ; résultat, même si : ind.', say: fr(E(1919)),
      detail: { title: 'Les liens', body: "Pour que, bien que : subjonctif. Si bien que, même si : indicatif. EN: goal and concession against result and même si.", say: fr(E(1920)) } },
    { k: 'le temps', v: 'après que : ind. ; avant que : subj.', say: fr(E(1937)),
      detail: { title: 'Le temps', body: "Après que regarde un fait accompli ; avant que, un fait à venir. EN: accomplished against to come.", say: fr(E(1938)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affirmer', 'certitude', 'apres'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu ne choisis plus le mode à partir d'une liste seulement : tu te demandes ce que ta phrase fait du fait. Tu gardes l'indicatif après probable, après que et même si ; tu passes au subjonctif pour douter, chercher, juger, viser, concéder et attendre ; et tu sais ce que change le mode quand les deux sont possibles. Le piège qui reste, c'est l'oreille : après qu'il soit parti et je ne crois pas qu'il est venu s'entendent partout. Avant l'examen, relis ta réponse et souligne chaque verbe qui suit que. Pour chacun, écris à côté : j'affirme, ou je regarde. Si ta note ne correspond pas au mode, corrige. EN: Underline every verb after que in your reply and write next to it whether you assert or only look; fix any mismatch.",
  stats: [
    { k: 'La question', v: 'affirmer le fait, ou non' },
    { k: 'La frontière', v: 'entre probable et possible' },
    { k: 'Le piège', v: 'après que + indicatif' },
    { k: 'La nuance', v: 'deux modes justes, deux sens' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 1 to 10, a round that
 *  recycles lessons 14, 15, 16, 31 and 32 in B1 and lesson 23 in B2 (named
 *  in each question), and an exam-format round (TCF, DELF B2, TEF items).
 *  `fold()` strips accents, commas, apostrophes and hyphens, so every typed
 *  answer turns on the mood (soit / est, ait / a), never on an accent. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const ANNONCE = "Message de la mairie. À partir du 1er juin, la rue du Marché sera fermée aux voitures le samedi. Il est possible que la mesure soit étendue au dimanche, et nous souhaitons que les commerçants nous fassent part de leur avis avant la fin du mois.";

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-affirmer', label: 'Affirmer ou non', targets: ['affirme-ou-pas'],
      questions: [
        mc('« Je cherche un appartement qui soit calme. » Cet appartement existe-t-il pour toi ?', ['pas encore, c’est ce que tu cherches', 'oui, tu l’as déjà visité'], 0, 'Qui soit : tu décris un souhait, sans affirmer qu’il existe. EN: a wish, not a known flat.', 'a1-scene'),
        mc('« Je sais que les commerçants sont inquiets. » Pourquoi l’indicatif ?', ['la phrase affirme un fait', 'savoir est un verbe irrégulier', 'que est suivi de les'], 0, 'Savoir pose le fait comme vrai. EN: savoir asserts.', 'a1-reperer'),
        mc('Laquelle affirme la date ?', [fr(E(1802)), fr(E(1803))], 0, 'Probable : tu t’engages, indicatif. EN: probable asserts.', 'a1-lecture'),
        tI('Mets le verbe au bon mode.', 'Il faut que la Ville (faire) une vraie consultation.', fr(E(1807)), 'Il faut que : la phrase réclame, elle n’affirme pas. EN: necessity, subjunctive.', 'a1-reperer', ['fasse']),
        tI('Mets le verbe au bon mode.', 'Je doute que les commerçants (être) d’accord.', fr(E(1804)), 'Douter : subjonctif. EN: doubt, subjunctive.', 'a1-lecture', ['soient']),
        eS('Il est possible que le parc sera prêt au printemps.', fr(E(1803)), 'Possible : tu envisages, subjonctif. EN: possible takes the subjunctive.', 'a1-lecture'),
        lC('Écoute. La personne affirme-t-elle le fait ?', fr(E(1805)), ['oui', 'non, elle le regarde de loin', 'elle affirme le contraire'], 0, 'Je sais que : une affirmation. EN: an assertion.', 'a1-reperer'),
        lC('Écoute. Le financement est-il affirmé ?', fr(E(1812)), ['non, il est mis en doute', 'oui', 'oui, il est même promis'], 0, 'Je ne crois pas que : subjonctif, le fait n’est pas affirmé. EN: doubted.', 'a1-usages'),
      ],
    },
    {
      id: 'r2-rappel', label: 'Ce que le B1 t’a donné', targets: ['declencheur-oublie'],
      questions: [
        mc('« J’espère que la mairie … parole. »', ['tiendra', 'tienne', 'tiendrait'], 0, 'Espérer attend un fait qu’on croit réel : indicatif. EN: espérer takes the indicative.', 'a2-erreurs'),
        mc('« Il me semble que le quartier … besoin d’un parc. »', ['a', 'ait'], 0, 'Il me semble : ton avis, indicatif. EN: indicative.', 'a2-erreurs'),
        mc('« Il semble que le quartier … besoin d’un parc. »', ['ait', 'a'], 0, 'Il semble, sans me : subjonctif. EN: subjunctive.', 'a2-table'),
        tI('Mets le verbe au bon mode.', 'Je suis ravie que le projet (être) enfin lancé.', fr(E(1818)), 'Le sentiment : subjonctif, même sur un fait sûr. EN: feelings take the subjunctive.', 'a2-table', ['soit']),
        tI('Un seul sujet : écris la phrase avec l’infinitif.', 'Les habitants veulent (ils rendent) la rue aux piétons.', fr(E(1820)), 'Les mêmes personnes : l’infinitif. EN: same subject, infinitive.', 'a2-rappel'),
        eS('Parce que la rue soit dangereuse, les parents s’inquiètent.', fr(E(1821)), 'Parce que donne une cause réelle : indicatif. EN: a real cause.', 'a2-erreurs'),
        mc('Laquelle est juste ?', [fr(E(1819)), 'Les habitants veulent que la rue devient piétonne.', 'Les habitants veulent que la rue deviendra piétonne.'], 0, 'Vouloir que : subjonctif, devienne. EN: vouloir que takes the subjunctive.', 'a2-trier'),
        lC('Écoute. Quel mode suit l’expression ?', fr(OA(1359)), ['l’indicatif', 'le subjonctif'], 0, 'Il me semble que : indicatif. EN: indicative.', 'a2-table'),
      ],
    },
    {
      id: 'r3-opinion', label: 'Penser, croire, être sûr', targets: ['opinion-mode'],
      questions: [
        mc('« Crois-tu qu’il vienne à la réunion ? » Que laisse entendre celui qui parle ?', ['qu’il en doute', 'qu’il en est sûr'], 0, 'Le subjonctif dans la question laisse entendre le doute. EN: doubt.', 'a3-cartes'),
        mc('« Ne crois-tu pas qu’il … raison ? »', ['a', 'ait'], 0, 'Une question négative cherche l’accord : indicatif. EN: indicative.', 'a3-cartes'),
        mc('Laquelle dit que tu en es sûr ?', [fr(E(1835)), fr(E(1836))], 0, 'Ne pas douter, c’est être sûr : l’indicatif suit. EN: no doubt.', 'a3-construire'),
        tI('Mets le verbe au bon mode.', 'Je suis sûre que le bureau (être) fermé.', fr(E(1833)), 'Certitude affirmée : indicatif. EN: indicative.', 'a3-construire', ['est']),
        tI('Mets le verbe au bon mode.', 'Je ne suis pas sûr qu’elle (avoir) le temps.', fr(E(1837)), 'Pas sûr : subjonctif. EN: subjunctive.', 'a3-piege', ['ait']),
        eS('Je crois qu’il vienne à la réunion.', fr(E(1825)), 'Croire à l’affirmatif : indicatif. EN: indicative.', 'a3-piege'),
        eS('Je doute qu’elle réussira.', fr(E(1836)), 'Douter : subjonctif. EN: subjunctive.', 'a3-piege'),
        lC('Écoute. Cette question demande-t-elle simplement un avis ?', fr(E(1828)), ['oui, sans douter', 'non, elle doute', 'non, elle affirme le contraire'], 0, 'Qu’il viendra : une vraie question. EN: a plain question.', 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-certitude', label: 'Certain, probable, possible', targets: ['echelle-confondue'],
      questions: [
        mc('Laquelle t’engage le plus ?', ['il est probable que', 'il est possible que', 'il se peut que'], 0, 'Probable affirme encore ; possible n’affirme plus. EN: probable commits.', 'a4-echelle'),
        mc('« Il est peu probable que les loyers … gelés. »', ['soient', 'sont', 'seront'], 0, 'Peu probable : tu écartes, subjonctif. EN: subjunctive.', 'a4-echelle'),
        mc('« Il paraît que la mairie … d’avis. »', ['a changé', 'ait changé'], 0, 'Il paraît que rapporte une information : indicatif. EN: indicative.', 'a4-erreurs'),
        tI('Mets le verbe au bon mode.', 'Il est probable que la réunion (avoir) lieu jeudi.', fr(E(1860)), 'Probable : indicatif, au futur. EN: indicative.', 'a4-construire', ['aura']),
        tI('Mets le verbe au bon mode.', 'Il est possible que la réunion (avoir) lieu jeudi.', fr(E(1861)), 'Possible : subjonctif. EN: subjunctive.', 'a4-construire', ['ait']),
        eS('Peut-être que le chantier prenne du retard.', fr(E(1853)), 'Peut-être que : indicatif. EN: indicative.', 'a4-erreurs'),
        eS('Il n’est pas certain que le budget suffit.', fr(E(1858)), 'Pas certain : subjonctif. EN: subjunctive.', 'a4-exemples'),
        lC('Écoute. La personne donne-t-elle son propre avis ?', fr(E(1857)), ['oui, avec me', 'non, c’est une apparence générale', 'non, elle cite la mairie'], 0, 'Il me semble : ton avis, indicatif. EN: your own view.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-recherche', label: 'Chercher ou avoir trouvé', targets: ['relative-existence'],
      questions: [
        mc('« J’ai trouvé une colocataire qui … cuisiner. »', ['sait', 'sache'], 0, 'Trouvée : elle existe, indicatif. EN: indicative.', 'a5-cartes'),
        mc('« Il n’y a personne ici qui … m’aider. » À l’écrit :', ['puisse', 'peut'], 0, 'Personne : la chose est niée, subjonctif. EN: subjunctive.', 'a5-piege'),
        mc('« Je cherche le dossier que tu m’as envoyé hier. » Pourquoi l’indicatif ?', ['ce dossier existe, tu le connais', 'chercher prend toujours l’indicatif'], 0, 'L’existence décide, pas le verbe chercher. EN: existence decides.', 'a5-exemples'),
        tI('Mets le verbe au bon mode.', 'Nous cherchons un logement qui (être) proche de l’école.', fr(E(1876)), 'Pas encore trouvé : subjonctif. EN: subjunctive.', 'a5-construire', ['soit']),
        tI('Mets le verbe au bon mode.', 'Nous avons trouvé un logement qui (être) proche de l’école.', fr(E(1877)), 'Trouvé : indicatif. EN: indicative.', 'a5-construire', ['est']),
        eS('Elle a un travail qui lui permette de voyager.', fr(E(1874)), 'Elle l’a : indicatif. EN: indicative.', 'a5-piege'),
        eS('Je ne connais aucun médecin qui fait des visites à domicile.', fr(E(1871)), 'Aucun : la chose est niée, subjonctif. EN: subjunctive.', 'a5-piege'),
        lC('Écoute. Ce restaurant existe-t-il pour celui qui parle ?', fr(E(1866)), ['il ne le sait pas', 'oui, il le connaît', 'oui, il vient d’y manger'], 0, 'Soit : il ne sait pas s’il existe. EN: unknown.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-superlatif', label: 'Le seul, le premier, le meilleur', targets: ['superlatif-mode'],
      questions: [
        mc('« C’est le seul bus qui … jusqu’au lac. » Un fait d’horaire :', ['va', 'aille'], 0, 'Un constat : indicatif. EN: a checkable fact.', 'a6-cartes'),
        mc('« C’est le seul élu qui … vraiment le dossier. » Ton jugement :', ['connaisse', 'connaît'], 0, 'Un jugement : subjonctif. EN: a judgement.', 'a6-construire'),
        mc('Pour éviter le choix, tu écris…', ['Marc a été le premier à arriver.', 'Marc a été le premier qui arrive.'], 0, 'Le premier à + infinitif. EN: le premier à + infinitive.', 'a6-erreurs'),
        tI('Mets le verbe au mode du jugement.', 'C’est le plus beau quartier que je (connaître).', fr(E(1890)), 'Ton goût : subjonctif. EN: subjunctive.', 'a6-exemples', ['connaisse']),
        tI('Complète avec à et l’infinitif.', 'Elle a été la dernière (quitter) la salle.', fr(E(1896)), 'La dernière à. EN: la dernière à.', 'a6-erreurs', ['à quitter']),
        eS('C’est le seul architecte qui peuve sauver ce bâtiment.', fr(E(1883)), 'Pouvoir : puisse. EN: puisse.', 'a6-erreurs'),
        mc('« C’est la seule boulangerie du quartier qui est ouverte le dimanche. » Pourquoi l’indicatif ?', ['c’est un fait qu’on peut vérifier', 'boulangerie est féminin'], 0, 'Un fait affiché : indicatif. EN: a posted fact.', 'a6-cartes'),
        lC('Écoute. Est-ce un jugement ou un constat ?', fr(E(1889)), ['un jugement', 'un constat', 'une question'], 0, 'Comprenne : ton avis. EN: a judgement.', 'a6-histoire'),
      ],
    },
    {
      id: 'r7-but', label: 'Le but ou le résultat', targets: ['but-resultat'],
      questions: [
        mc('« La ville a fermé la rue, si bien que les enfants … jouer. »', ['peuvent', 'puissent'], 0, 'Si bien que : un résultat, indicatif. EN: a result.', 'a7-cartes'),
        mc('« Installez des bancs de sorte que les personnes âgées … se reposer. »', ['puissent', 'peuvent'], 0, 'Un but : subjonctif. EN: a goal.', 'a7-construire'),
        mc('« Il fait tellement chaud que les enfants … sortir. »', ['ne peuvent pas', 'ne puissent pas'], 0, 'Tellement… que : la conséquence réelle. EN: indicative.', 'a7-piege'),
        tI('Mets le verbe au bon mode.', 'Il fait trop chaud pour que les enfants (pouvoir) sortir.', fr(E(1911)), 'Trop… pour que : subjonctif. EN: subjunctive.', 'a7-piege', ['puissent']),
        tI('Mets le verbe au mode du résultat.', 'Il a mis son badge, de sorte qu’on l’(reconnaître).', fr(E(1914)), 'C’est arrivé : indicatif. EN: a result.', 'a7-construire', ['a reconnu']),
        eS('Le projet a été voté sans que les habitants sont consultés.', fr(E(1907)), 'Sans que : subjonctif. EN: subjunctive.', 'a7-piege'),
        eS('Je t’écris maintenant pour que tu as le temps de répondre.', fr(E(1915)), 'Pour que : aies. EN: subjunctive.', 'a7-piege'),
        lC('Écoute. Est-ce un but ou un résultat ?', fr(E(1906)), ['un résultat', 'un but', 'une condition'], 0, 'L’a comprise : c’est arrivé. EN: it happened.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-concession', label: 'Bien que ou même si', targets: ['concession-mode'],
      questions: [
        mc('« Même si la rue … plus calme, les commerçants se plaignent. »', ['est', 'soit', 'serait'], 0, 'Même si : indicatif. EN: indicative.', 'a8-cartes'),
        mc('« Bien que la rue … plus calme, les commerçants se plaignent. »', ['soit', 'est', 'serait'], 0, 'Bien que : subjonctif. EN: subjunctive.', 'a8-cartes'),
        mc('« … tu dises, je garderai mon avis. »', ['Quoi que', 'Quoique'], 0, 'En deux mots : quelle que soit la chose. EN: whatever.', 'a8-erreurs'),
        tI('Mets le verbe au bon mode.', 'Quel que (être) le prix, le quartier a besoin de ce parc.', fr(E(1925)), 'Quel que : subjonctif. EN: subjunctive.', 'a8-construire', ['soit']),
        tI('Mets le verbe au bon mode.', 'Même si le loyer (être) élevé, nous restons.', fr(E(1931)), 'Même si : indicatif. EN: indicative.', 'a8-construire', ['est']),
        eS('Bien que le loyer est élevé, nous restons.', fr(E(1930)), 'Bien que : soit. EN: subjunctive.', 'a8-erreurs'),
        eS('Même si la rue soit plus calme, les commerçants se plaignent.', fr(E(1920)), 'Même si : est. EN: indicative.', 'a8-erreurs'),
        lC('Écoute. Comment la concession est-elle faite ?', fr(E(1927)), ['bien que, sans verbe', 'même si', 'malgré'], 0, 'Bien que fatiguée : bien que devant un adjectif. EN: an ellipsis.', 'a8-cartes'),
      ],
    },
    {
      id: 'r9-temps', label: 'Avant que, après que', targets: ['apres-que-subj'],
      questions: [
        mc('« Après que le conseil … voté, les travaux ont commencé. »', ['a', 'ait', 'aurait'], 0, 'Après que : indicatif. EN: indicative.', 'a9-table'),
        mc('« Avant que le maire …, relisons nos questions. »', ['vienne', 'vient'], 0, 'Avant que : subjonctif. EN: subjunctive.', 'a9-construire'),
        mc('« Depuis que la rue … fermée, on entend les oiseaux. »', ['est', 'soit', 'sera'], 0, 'Depuis que : un fait réel. EN: indicative.', 'a9-table'),
        tI('Mets le verbe au bon mode.', 'Après que le maire (arriver), la séance a commencé.', fr(E(1948)), 'Après que : est arrivé. EN: indicative.', 'a9-construire', ['est arrivé']),
        tI('Mets le verbe au bon mode.', 'En attendant que la mairie (répondre), on continue la pétition.', fr(E(1942)), 'En attendant que : subjonctif. EN: subjunctive.', 'a9-piege', ['réponde']),
        eS('Après qu’elle soit partie, la réunion a continué.', fr(E(1939)), 'Après que : est partie. EN: indicative.', 'a9-piege'),
        eS('On attendra jusqu’à ce que tout le monde est assis.', fr(E(1950)), 'Jusqu’à ce que : soit. EN: subjunctive.', 'a9-piege'),
        lC('Écoute. Le gardien est-il déjà parti ?', fr(E(1941)), ['non', 'oui'], 0, 'Avant que : pas encore. Le ne explétif ne nie rien. EN: not yet.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-nuance', label: 'Quand les deux sont possibles', targets: ['nuance-ignoree'],
      questions: [
        mc('« Je ne crois pas qu’il est venu hier. » À l’examen, tu écris plutôt…', [fr(E(1955)), fr(E(1956))], 0, 'Le subjonctif est la norme écrite. EN: the written norm.', 'a10-cartes'),
        mc('« Dis-lui qu’il vienne demain. » C’est…', ['un ordre', 'une information', 'un regret'], 0, 'Le subjonctif fait un ordre. EN: an order.', 'a10-cartes'),
        mc('« J’ai compris qu’elle était inquiète. » Comprendre veut dire ici…', ['découvrir', 'accepter', 'regretter'], 0, 'Un constat : indicatif. EN: realising.', 'a10-trier'),
        tI('Mets le verbe au bon mode : tu acceptes ce qu’elle ressent.', 'Je comprends qu’elle (être) inquiète.', fr(E(1966)), 'Comprendre = accepter : subjonctif. EN: subjunctive.', 'a10-trier', ['soit']),
        tI('Mets le verbe au bon mode : une hypothèse.', 'Supposons que la réunion (avoir) lieu.', fr(E(1961)), 'Supposons que : subjonctif. EN: subjunctive.', 'a10-exemples', ['ait']),
        eS('Qu’il est compétent, personne ne le conteste.', fr(E(1962)), 'Que en tête de phrase : subjonctif. EN: subjunctive.', 'a10-exemples'),
        mc('« Écris-leur qu’ils soient à l’heure. » Tu…', ['leur demandes d’être à l’heure', 'leur annonces qu’ils sont à l’heure'], 0, 'Le subjonctif fait un ordre. EN: an order.', 'a10-trier'),
        lC('Écoute. Ce registre est plutôt…', fr(E(1956)), ['oral', 'soutenu', 'administratif'], 0, 'L’indicatif après une opinion niée sonne oral. EN: spoken.', 'a10-lecture'),
      ],
    },
    {
      id: 'r11-recyclage', label: 'Le B1 en renfort', targets: ['recyclage-b1'],
      questions: [
        tI(`${Cap(FORMATION_REF)} : forme le subjonctif.`, 'Il faut que tu (faire) une pause.', 'Il faut que tu fasses une pause.', `« ${B114_REFRAME} » EN: ${B114_REFRAME_EN}`, 'a2-rappel', ['fasses']),
        mc(`${Cap(DECL_REF)} : « Je ne pense pas que ce film … trop long. »`, ['soit', 'est', 'sera'], 0, `« ${B115_REFRAME} » EN: ${B115_REFRAME_EN}`, 'a2-rappel'),
        mc(`${Cap(INF_REF)} : laquelle est juste ?`, [fr(OA(1400)), 'Je veux que je parte avant six heures.'], 0, `« ${B116_REFRAME} » EN: ${B116_REFRAME_EN}`, 'a2-rappel'),
        mc(`${Cap(SUBORD_REF)} : « Elle a parlé fort, de sorte que tout le monde l’a entendue. » Ici, de sorte que dit…`, ['un résultat', 'un but'], 0, `« ${B131_REFRAME} » EN: ${B131_REFRAME_EN}`, 'a7-cartes'),
        mc(`${Cap(CONCESSION_REF)} : « Bien que le projet … cher, je vote pour. »`, ['soit', 'est'], 0, `« ${B132_REFRAME} » EN: ${B132_REFRAME_EN}`, 'a8-cartes'),
        eS('Après qu’il soit parti, nous avons fermé le bureau.', fr(CL(1339)), `${Cap(SUBORD_REF)} le disait déjà : après que regarde un fait accompli. EN: indicative after après que.`, 'a9-piege'),
        tI(`${Cap(ARG_REF)} : la thèse niée.`, 'Je ne pense pas que les trottinettes (être) dangereuses en elles-mêmes.', fr(OA2(1637)), `« ${B223_REFRAME} » EN: ${B223_REFRAME_EN}`, 'a2-exemples', ['soient']),
        lC(`Écoute. ${Cap(DECL_REF)} : quel mode entends-tu ?`, fr(OA(1208)), ['le subjonctif', 'l’indicatif'], 0, 'Ne pense pas que : la bascule, subjonctif. EN: subjunctive.', 'a2-rappel'),
      ],
    },
    {
      id: 'r12-examen', label: 'Comme à l’examen', targets: ['mode-examen'],
      questions: [
        mc('Format TCF. Choisissez la bonne réponse : « Bien qu’il … beaucoup de monde, la réunion a commencé à l’heure. »', ['y ait', 'y a', 'y aura', 'y avait'], 0, 'Bien que : subjonctif. EN: subjunctive.', 'a8-cartes'),
        mc('Format TCF : « Je cherche un stagiaire qui … parler espagnol. »', ['sache', 'sait', 'saura', 'savait'], 0, 'Un stagiaire pas encore trouvé : subjonctif. EN: not yet found.', 'a5-cartes'),
        mc('Format TCF : « Après que les résultats … publiés, le ministre a réagi. »', ['ont été', 'aient été', 'soient', 'seraient'], 0, 'Après que : indicatif. EN: indicative.', 'a9-table'),
        mc('Format DELF B2, compréhension écrite. « Il est peu probable que la ville revienne sur sa décision, même si les habitants protestent. » Que pense l’auteur ?', ['la décision ne changera sans doute pas', 'la ville va changer d’avis', 'les habitants ne protestent pas'], 0, 'Peu probable : il écarte le changement. EN: unlikely to change.', 'a4-echelle'),
        mc('Format DELF B2. « Je ne suis pas certaine que ce plan soit le bon ; il est clair, en revanche, que la situation actuelle ne peut pas durer. » De quoi l’autrice est-elle sûre ?', ['que la situation actuelle ne peut pas durer', 'que le plan est le bon', 'de rien'], 0, 'Il est clair que : indicatif, c’est ce qu’elle affirme. EN: what she asserts.', 'a4-construire'),
        tI('Format TCF, phrase à compléter.', 'Il faut que la commission (prendre) une décision avant l’été.', 'Il faut que la commission prenne une décision avant l’été.', 'Il faut que : subjonctif. EN: subjunctive.', 'a2-table', ['prenne']),
        eS('Je doute que cette mesure va changer quelque chose.', 'Je doute que cette mesure puisse changer quelque chose.', 'Douter : subjonctif, puisse. EN: subjunctive.', 'a3-piege', ['Je doute que cette mesure change quelque chose.']),
        lC('Format TEF, compréhension orale. Écoute cette annonce. Qu’est-ce qui est certain ?', ANNONCE, ['la fermeture de la rue le samedi', 'la fermeture le dimanche', 'l’accord des commerçants'], 0, 'Sera fermée : indicatif, c’est décidé. Le dimanche reste possible. EN: the Saturday closure is certain.', 'a4-ecoute'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.01 does. */
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
    { front: 'la question à se poser', back: 'est-ce que j’affirme le fait ?', say: fr(E(1805)) },
    { front: 'croire, à l’affirmatif', back: 'indicatif : je crois qu’il viendra', say: fr(E(1825)) },
    { front: 'la question inversée qui doute', back: 'crois-tu qu’il vienne', say: fr(E(1827)) },
    { front: 'probable et possible', back: 'probable : indicatif ; possible : subjonctif', say: fr(E(1848)) },
    { front: 'une chose cherchée', back: 'subjonctif : qui sache, qui puisse', say: fr(E(1864)) },
    { front: 'le seul qui', back: 'le subjonctif juge, l’indicatif constate', say: fr(E(1883)) },
    { front: 'le but et le résultat', back: 'pour que + subj. ; si bien que + ind.', say: fr(E(1902)) },
    { front: 'bien que et même si', back: 'bien que + subj. ; même si + ind.', say: fr(E(1919)) },
    { front: 'après que', back: 'indicatif, toujours à l’examen', say: fr(E(1937)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Affirmer, ou regarder sans affirmer',
  body: `${REFRAME} Tu as repris la liste de ${SUBJ_B1_RANGE_REF}, les liens de ${SUBORD_REF} et de ${CONCESSION_REF}, les verbes d'opinion de ${ARG_REF}, et tu en as fait un choix : là où la liste décide, tu lui obéis ; là où elle hésite, tu te demandes ce que ta phrase fait du fait. La suite, c'est le futur antérieur, dans la leçon 7 du B2 : ce qui sera déjà fait, et ce qu'on devine du passé. EN: Next comes lesson 7 in B2: the futur antérieur, for what will already be done and for guesses about the past.`,
  points: [
    'Affirmer le fait : indicatif. Le regarder sans l’affirmer : subjonctif.',
    'La frontière passe entre probable et possible.',
    'Pour que, bien que, avant que : subjonctif. Si bien que, même si, après que : indicatif.',
    'Quand les deux sont justes, le mode change le sens ou le registre.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affirmer', 'regarder', 'registre'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Ta réponse sur le forum',
    opener: {
      line: "Un projet dans ton quartier, et tout le monde a un avis : ici tu réponds sur le forum en mêlant faits, doutes et souhaits, puis tu passes l'examen. EN: A plan for your neighbourhood and everyone has a view: here you reply on the forum, mixing facts, doubts and wishes, then sit the exam.",
      imageRef: 'lessons/subjonctif-indicatif/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ta réponse et passé l'examen : quatre-vingt-seize questions, douze rounds. EN: You wrote your reply and sat the exam: ninety-six questions, twelve rounds.",
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r4-certitude', 'a11-quiz/r8-concession', 'a11-review'],
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
  { id: 'd-affirmer', title: 'Posé ou regardé', format: 'sort' as const, coach: "Deux piles : la phrase affirme le fait, ou elle fait autre chose avec lui. EN: sort by whether the sentence asserts.", buckets: ['le fait est affirmé', 'le fait est regardé'], items: [E(1802), E(1805), E(1809), E(1803), E(1804), E(1807)], audio: AUDIO },
  { id: 'd-rappel', title: 'Les familles du B1', format: 'mcq' as const, coach: "Espérer, il me semble, parce que : le fait est donné pour vrai. EN: these three assert.", q: 'J’espère que tu … samedi.', opts: ['viens', 'viennes'], correct: 0, why: 'Espérer : indicatif. EN: indicative.', items: [E(1815), E(1816), E(1821), E(1817), E(1818), E(1819)], audio: AUDIO },
  { id: 'd-opinion', title: 'Croire et douter', format: 'mcq' as const, coach: "Affirmer ton opinion : indicatif. La nier ou en douter : subjonctif. EN: assert or doubt.", q: 'Je doute qu’elle …', opts: ['réussisse', 'réussira'], correct: 0, why: 'Douter : subjonctif. EN: subjunctive.', items: [E(1825), E(1826), E(1827), E(1828), E(1831), E(1836)], audio: AUDIO },
  { id: 'd-echelle', title: 'Sur l’échelle', format: 'sort' as const, coach: "Deux piles : l'expression t'engage, ou elle envisage seulement. EN: commit or consider.", buckets: ['tu t’engages', 'tu envisages ou tu écartes'], items: [E(1846), E(1848), E(1851), E(1849), E(1850), E(1856)], audio: AUDIO },
  { id: 'd-recherche', title: 'Existe ou pas', format: 'sort' as const, coach: "Deux piles : la chose existe, ou on la cherche et on la nie. EN: exists or not.", buckets: ['la chose existe', 'cherchée ou niée'], items: [E(1865), E(1867), E(1869), E(1864), E(1866), E(1868)], audio: AUDIO },
  { id: 'd-superlatif', title: 'Juger ou constater', format: 'flashcard' as const, coach: "Lis chaque phrase et dis si elle juge ou si elle constate. EN: judgement or statement.", items: [E(1883), E(1884), E(1885), E(1886), E(1888), E(1889)], audio: AUDIO },
  { id: 'd-but', title: 'Viser ou obtenir', format: 'mcq' as const, coach: "Un but n'est pas atteint : subjonctif. Un résultat est là : indicatif. EN: goal or result.", q: 'Il a plu, si bien que la rue … inondée.', opts: ['est', 'soit'], correct: 0, why: 'Si bien que : indicatif. EN: indicative.', items: [E(1901), E(1902), E(1903), E(1904), E(1910), E(1911)], audio: AUDIO },
  { id: 'd-concession', title: 'Concéder', format: 'mcq' as const, coach: "Bien que concède au subjonctif ; même si reste un si, à l'indicatif. EN: bien que or même si.", q: 'Même si le loyer … élevé, nous restons.', opts: ['est', 'soit'], correct: 0, why: 'Même si : indicatif. EN: indicative.', items: [E(1919), E(1920), E(1923), E(1924), E(1925), E(1927)], audio: AUDIO },
  { id: 'd-temps', title: 'Avant, après', format: 'mcq' as const, coach: "Après que : un fait accompli, indicatif. Avant que : un fait à venir, subjonctif. EN: after or before.", q: 'Après que le maire … arrivé, la séance a commencé.', opts: ['est', 'soit'], correct: 0, why: 'Après que : indicatif. EN: indicative.', items: [E(1937), E(1938), E(1939), E(1940), E(1942), E(1950)], audio: AUDIO },
  { id: 'd-nuance', title: 'Deux modes, deux sens', format: 'flashcard' as const, coach: "Lis chaque paire à voix haute et dis ce que le mode change. EN: say what the mood changes.", items: [E(1955), E(1956), E(1958), E(1959), E(1962), E(1963)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 en renfort', format: 'flashcard' as const, coach: "Six phrases du B1 : dis pour chacune ce qui choisit le mode. EN: say what picks the mood.", items: [OA(1201), OA(1208), OA(1401), CL(1331), CL(1404), CL(1339)], audio: AUDIO },
  { id: 'd-examen', title: 'La réponse, phrase par phrase', format: 'flashcard' as const, coach: "Lis les phrases de la réponse modèle : fait, doute, souhait, concession. EN: read the model reply aloud.", items: [E(1972), E(1973), E(1974), E(1976), E(1977), E(1979)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'affirme-ou-pas', description: 'Chooses the mood by whether the fact is true rather than by whether the sentence asserts it, so a wished-for or doubted fact comes out in the indicative.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-affirmer', retest: 'd-affirmer' },
  { id: 'declencheur-oublie', description: 'Falls back into B1 trigger errors: subjunctive after espérer, il me semble or parce que, or que with a single subject.', detectOn: ['a2-trier', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-rappel', retest: 'd-rappel' },
  { id: 'opinion-mode', description: 'Uses the subjunctive after an affirmative opinion verb, the indicative after a denied or doubted one in writing, or misreads the doubt in an inverted question.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-opinion', retest: 'd-opinion' },
  { id: 'echelle-confondue', description: 'Treats probable like possible (or the reverse), or puts a subjunctive after il paraît, peut-être or sans doute que.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-echelle', retest: 'd-echelle' },
  { id: 'relative-existence', description: 'Picks the mood of a relative clause by the main verb rather than by whether the antecedent exists, is sought or is denied.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-recherche', retest: 'd-recherche' },
  { id: 'superlatif-mode', description: 'After le seul, le premier or a superlative, cannot tell a judgement from a checkable fact, or invents a subjunctive form.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-superlatif', retest: 'd-superlatif' },
  { id: 'but-resultat', description: 'Confuses goal and result: pour que or sans que with the indicative, si bien que with the subjunctive, de sorte que without regard to meaning.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-but', retest: 'd-but' },
  { id: 'concession-mode', description: 'Writes même si with the subjunctive or bien que with the indicative, or confuses quoique with quoi que.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-concession', retest: 'd-concession' },
  { id: 'apres-que-subj', description: 'Writes après que with the subjunctive (après qu’il soit parti), or avant que, jusqu’à ce que with the indicative.', detectOn: ['a9-construire', 'a9-piege', 'a9-check', 'a11-mission'], drill: 'd-temps', retest: 'd-temps' },
  { id: 'nuance-ignoree', description: 'Where both moods are possible, uses the spoken form in writing or misses the change of meaning (comprendre, dire, supposer).', detectOn: ['a10-trier', 'a10-exemples', 'a10-check', 'a11-mission'], drill: 'd-nuance', retest: 'd-nuance' },
  { id: 'recyclage-b1', description: 'Loses a B1 foundation this lesson builds on: the subjunctive forms, the negation swing, the same-subject rule, de sorte que, bien que.', detectOn: ['a2-rappel', 'a7-cartes', 'a8-cartes'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'mode-examen', description: 'In an exam-format item or the written reply, lets the ear decide the mood instead of the meaning.', detectOn: ['a11-plan', 'a11-scenario', 'a11-mission'], drill: 'd-examen', retest: 'd-examen' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names a position. As b2.01 does. */
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
 *  REFERENCE SHEETS (layer deep: teach and table only). Every sheet is
 *  reached from at least one mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-affirmer', 'Affirmer ou non', ['la question à se poser', 'les familles du B1', 'penser, croire, être sûr'], [
    teach('sheet-affirmer-teach', 'Une seule question',
      `${REFRAME} ${Cap(DECL_REF)} disait : « ${B115_REFRAME} » C'est toujours vrai là où l'expression décide seule. Au B2, beaucoup de phrases laissent le choix ; alors demande-toi si ta phrase affirme le fait, ou si elle le veut, le craint, le doute, le cherche, le juge ou le concède. EN: ${REFRAME_EN}`),
    table('sheet-affirmer-familles', 'Les familles', ['Famille', 'Mode', 'Exemple'], [
      ['volonté', 'subjonctif', 'Les habitants veulent que la rue devienne piétonne.'],
      ['nécessité', 'subjonctif', 'Il faut que la Ville fasse une vraie consultation.'],
      ['sentiment', 'subjonctif', 'Je suis ravie que le projet soit enfin lancé.'],
      ['doute, possibilité', 'subjonctif', "Je doute que les commerçants soient d'accord."],
      ['opinion affirmée', 'indicatif', "Il me semble que le quartier a besoin d'un parc."],
      ['espoir, cause, savoir', 'indicatif', "J'espère que la mairie tiendra parole."],
    ]),
    table('sheet-affirmer-croire', 'Penser, croire, être sûr', ['Forme de phrase', 'Mode', 'Exemple'], [
      ['affirmative', 'indicatif', "Je crois qu'il viendra à la réunion."],
      ['négative, à l’écrit', 'subjonctif', "Je ne crois pas qu'il vienne à la réunion."],
      ['négative, à l’oral', 'indicatif possible', "Je ne crois pas qu'il est venu hier."],
      ['inversion, avec doute', 'subjonctif', "Crois-tu qu'il vienne à la réunion ?"],
      ['inversion, vraie question', 'indicatif', "Crois-tu qu'il viendra à la réunion ?"],
      ['est-ce que, intonation', 'indicatif', "Est-ce que tu crois qu'il viendra ?"],
      ['question négative', 'indicatif', "Ne crois-tu pas qu'il a raison ?"],
      ['je ne doute pas que', 'indicatif (ou subjonctif)', "Je ne doute pas qu'elle réussira."],
    ]),
  ]),
  sheet('sheet-certitude', 'L’échelle de certitude', ['s’engager ou envisager', 'les expressions', 'les pièges'], [
    teach('sheet-certitude-teach', 'La frontière passe entre probable et possible',
      "Plus tu t'engages sur le fait, plus tu restes à l'indicatif, même sans certitude : il est probable que. Dès que tu envisages seulement, ou que tu écartes, le subjonctif : il est possible que, il est peu probable que. Il paraît que, sans doute que et peut-être que restent à l'indicatif. EN: probable still asserts; possible does not."),
    table('sheet-certitude-table', 'Les expressions', ['Expression', 'Mode', 'Exemple'], [
      ['il est certain, clair, évident que', 'indicatif', 'Il est clair que la circulation va baisser.'],
      ['il est vrai que', 'indicatif', 'Il est vrai que la place est brûlante en été.'],
      ['il est probable que', 'indicatif', 'Il est probable que les loyers vont augmenter.'],
      ['il paraît que, sans doute que, peut-être que', 'indicatif', 'Peut-être que le chantier prendra du retard.'],
      ['il me semble que', 'indicatif', 'Il me semble que les habitants sont partagés.'],
      ['il semble que', 'subjonctif', 'Il semble que les habitants soient partagés.'],
      ['il est possible que, il se peut que', 'subjonctif', 'Il se peut que la mairie revienne sur sa décision.'],
      ['il est peu probable, exclu, pas certain, pas clair que', 'subjonctif', "Il n'est pas certain que le budget suffise."],
    ]),
  ]),
  sheet('sheet-relatives', 'Chercher, trouver, juger', ['la chose existe-t-elle', 'le seul, le premier, le meilleur', 'à + infinitif'], [
    teach('sheet-relatives-teach', 'L’existence et le jugement',
      "Dans une relative, ce n'est pas le verbe principal qui décide, c'est l'existence de la chose : trouvée ou connue, indicatif ; cherchée, souhaitée, niée ou mise en question, subjonctif. Après le seul, l'unique, le premier, le dernier ou un superlatif, les deux modes sont justes : le subjonctif juge, l'indicatif constate. EN: existence decides; after a superlative, judge or state."),
    table('sheet-relatives-existence', 'La chose existe-t-elle', ['Cas', 'Mode', 'Exemple'], [
      ['trouvée, possédée', 'indicatif', "J'ai trouvé une colocataire qui sait cuisiner."],
      ['connue, même cherchée', 'indicatif', "Je cherche le dossier que tu m'as envoyé hier."],
      ['cherchée, souhaitée', 'subjonctif', 'Je cherche une colocataire qui sache cuisiner.'],
      ['niée : personne, rien, aucun', 'subjonctif', "Il n'y a personne ici qui puisse m'aider."],
      ['mise en question', 'subjonctif', "Y a-t-il quelqu'un qui sache où sont les clés ?"],
    ]),
    table('sheet-relatives-seul', 'Le seul, le premier, le meilleur', ['Cas', 'Mode', 'Exemple'], [
      ['un jugement', 'subjonctif', "C'est le seul architecte qui puisse sauver ce bâtiment."],
      ['un fait vérifiable', 'indicatif', "C'est le seul bus qui va jusqu'au lac."],
      ['le meilleur que', 'les deux', "C'est le meilleur film que j'aie vu, ou que j'ai vu."],
      ['le premier, le dernier à', 'infinitif', 'Marc a été le premier à arriver.'],
    ]),
  ]),
  sheet('sheet-liens', 'But, résultat, concession, temps', ['le but et le résultat', 'la concession', 'le temps'], [
    teach('sheet-liens-teach', 'Viser, concéder, attendre',
      `${Cap(SUBORD_REF)} disait : « ${B131_REFRAME} » Un but n'est pas atteint : subjonctif. Un résultat est là : indicatif. Une concession avec bien que ou quoi que ne s'affirme pas : subjonctif ; même si reste un si : indicatif. Un fait accompli après après que : indicatif ; un fait à venir après avant que : subjonctif. EN: ${B131_REFRAME_EN}`),
    table('sheet-liens-but', 'Le but et le résultat', ['Conjonction', 'Mode', 'Exemple'], [
      ['pour que, afin que', 'subjonctif', 'La ville ferme la rue pour que les enfants puissent jouer.'],
      ['sans que', 'subjonctif', 'Le projet a été voté sans que les habitants soient consultés.'],
      ['trop… pour que', 'subjonctif', 'Il fait trop chaud pour que les enfants puissent sortir.'],
      ['de sorte que, de façon que (but)', 'subjonctif', "Mets ton badge de sorte qu'on te reconnaisse."],
      ['de sorte que, de façon que (résultat)', 'indicatif', "Il a mis son badge, de sorte qu'on l'a reconnu."],
      ['si bien que, tellement… que', 'indicatif', 'La ville a fermé la rue, si bien que les enfants peuvent jouer.'],
    ]),
    table('sheet-liens-concession', 'La concession', ['Conjonction', 'Mode', 'Exemple'], [
      ['bien que, quoique', 'subjonctif', 'Bien que la rue soit plus calme, les commerçants se plaignent.'],
      ['quoi que', 'subjonctif', 'Quoi que tu dises, je garderai mon avis.'],
      ['quel que', 'subjonctif', 'Quel que soit le prix, le quartier a besoin de ce parc.'],
      ['si… que (soutenu)', 'subjonctif', 'Si cher que soit le projet, il reste nécessaire.'],
      ['même si', 'indicatif', 'Même si la rue est plus calme, les commerçants se plaignent.'],
      ['même si (hypothèse)', 'imparfait, plus-que-parfait', 'Même si la ville payait tout, je serais contre.'],
      ['bien que + adjectif, avoir beau', 'sans verbe conjugué', "J'ai beau insister, la mairie ne répond pas."],
    ]),
    table('sheet-liens-temps', 'Le temps', ['Conjonction', 'Mode', 'Exemple'], [
      ['après que', 'indicatif', 'Après que le conseil a voté, les travaux ont commencé.'],
      ['avant que (ne)', 'subjonctif', 'Finissons avant que le gardien ne parte.'],
      ['jusqu’à ce que, en attendant que', 'subjonctif', 'En attendant que la mairie réponde, on continue la pétition.'],
      ['depuis que, maintenant que', 'indicatif', 'Depuis que la rue est fermée, on entend les oiseaux.'],
      ['dès que, quand', 'indicatif', 'Dès que la décision sera prise, nous vous écrirons.'],
      ['après + nom, après avoir', 'sans mode', 'Après le vote, le conseil a levé la séance.'],
    ]),
  ]),
  sheet('sheet-nuances', 'Nuances et réponse écrite', ['quand les deux sont possibles', 'le plan de la réponse', 'la liste de contrôle'], [
    teach('sheet-nuances-teach', 'Deux modes justes, deux sens',
      "Quand les deux modes sont possibles, l'indicatif affirme davantage le fait. Après une opinion niée, il sonne oral ; à l'écrit, le subjonctif. Comprendre, dire, supposer changent de sens avec le mode. Que en tête de phrase pose le thème : subjonctif. EN: where both moods occur, the indicative asserts more and sounds more spoken."),
    table('sheet-nuances-table', 'Même verbe, autre sens', ['Verbe', 'Avec le subjonctif', 'Avec l’indicatif'], [
      ['ne pas croire', 'la norme écrite', "l'oral, le fait plus présent"],
      ['comprendre', 'accepter : je comprends que tu sois déçue', "découvrir : j'ai compris que tu étais déçu"],
      ['dire, écrire', "un ordre : dis-lui qu'il vienne", "une information : dis-lui qu'il vient"],
      ['supposer', 'une hypothèse : supposons que', 'une opinion : je suppose que'],
      ['que en tête', "le thème : qu'il soit compétent, personne ne le conteste", '(sans que : il est compétent)'],
    ]),
    table('sheet-nuances-controle', 'Ta réponse sur le forum', ['À vérifier', 'Comment'], [
      ['Les faits sont à l’indicatif', 'certain, probable, je sais que'],
      ['Les doutes sont au subjonctif', 'je doute que, pas sûr, pas certain'],
      ['Une concession', 'bien que + subj. ou même si + ind.'],
      ['Une relative de recherche', 'nous cherchons des voisins qui soient…'],
      ['Aucun subjonctif après après que', 'après que + indicatif, ou après + nom'],
      ['Un souhait final', 'je souhaite que, il faut que'],
    ]),
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-06-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const PIEGE = "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions in promptSound are NEVER spoken.";
const TEXTE = 'One voice, read as the exercise text: the bracketed infinitives are spoken as written (« venir », « avoir »), never conjugated.';
const REC_DESC: Record<string, string> = {
  'rec-b2-06-forum': 'The Saint-Roch forum thread (act 1), four voices (Julie, Marc, Nadia, Paul) with light Québec accents welcome, one take, natural speed. The time stamps are read. The moods are never stressed: the learner is meant to notice them.',
  'rec-b2-06-rappel': 'The four recap cards (act 2). One coach voice. Card three reads « qu’il soit, qu’il ait, qu’il puisse, qu’il fasse » with a short pause between each.',
  'rec-b2-06-directrice': 'Léo and Inès at the Lausanne office (act 3), two voices plus a coach, one take, conversational. « vienne » and « viendra » must each be clearly audible.',
  'rec-b2-06-croire': 'The four croire cards (act 3). One voice. Card three holds the pair « crois-tu qu’il vienne / qu’il viendra »: same rhythm and rising intonation for both, so only the verb differs.',
  'rec-b2-06-croire-ecoute': `${ONE_TAKE} Ten lines. Lines three and four (the inverted questions) must share the same intonation.`,
  'rec-b2-06-piege-croire': PIEGE,
  'rec-b2-06-texte-a3': `Léo’s message (act 3). ${TEXTE}`,
  'rec-b2-06-bulletin-ecoute': `${ONE_TAKE} Nine lines, read as a council bulletin on local radio, neutral and even. No line may sound more or less certain than its words.`,
  'rec-b2-06-texte-a4': `The February bulletin (act 4). ${TEXTE}`,
  'rec-b2-06-colocation': 'Chloé and the coach in a Plateau café (act 5), two voices, Montréal accent welcome, one take, relaxed.',
  'rec-b2-06-recherche': 'The four existence cards (act 5). One voice. Cards one and two differ by sache / sait: identical rhythm.',
  'rec-b2-06-recherche-ecoute': `${ONE_TAKE} Ten lines; the questions ask whether each thing exists, so no line may be dramatised.`,
  'rec-b2-06-piege-recherche': PIEGE,
  'rec-b2-06-texte-a5': `The allotment association ad (act 5). ${TEXTE}`,
  'rec-b2-06-coups-de-coeur': 'Sophie and the coach at the Liège neighbourhood paper (act 6), two voices, Belgian accent welcome, one take, warm.',
  'rec-b2-06-seul': 'The four superlative cards (act 6). One voice. Card three reads « que j’aie vu » and « que j’ai vu »: they sound almost alike, read them identically.',
  'rec-b2-06-texte-a6': `The Petit Zinc review (act 6). ${TEXTE}`,
  'rec-b2-06-ecole': 'Parents outside an Annecy school (act 7), two voices plus a coach, one take, children’s voices faintly in the background at most.',
  'rec-b2-06-but': 'The four goal and result cards (act 7). One voice. Card two quotes lesson 31 in B1; card four pairs trop… pour que with tellement… que at the same pace.',
  'rec-b2-06-but-ecoute': `${ONE_TAKE} Ten lines. Lines one and two, three and four, five and six are pairs: identical rhythm so the mood is the only cue.`,
  'rec-b2-06-piege-but': PIEGE,
  'rec-b2-06-texte-a7': `The rue Centrale review (act 7). ${TEXTE}`,
  'rec-b2-06-lettre': 'Ginette’s letter in Sherbrooke (act 8), two voices (Ginette, a coach), Québec accent welcome, one take, firm but calm.',
  'rec-b2-06-concession': 'The four concession cards (act 8). One voice. Card one quotes lesson 32 in B1. « quoi que » and « quoique » sound the same: do not separate the syllables to help.',
  'rec-b2-06-texte-a8': `The letter to the editor (act 8). ${TEXTE}`,
  'rec-b2-06-temps-ecoute': `${ONE_TAKE} Nine lines. Line four carries the expletive ne: read it lightly, as in careful speech, never stressed like a negation.`,
  'rec-b2-06-piege-temps': PIEGE,
  'rec-b2-06-texte-a9': `The neighbourhood council minutes (act 9). ${TEXTE}`,
  'rec-b2-06-chronique': 'The Lausanne language column (act 10), one voice, one take, the tone of a radio columnist: amused, precise. The quoted phrases (« je ne crois pas qu’il est venu », « après qu’il soit parti ») are read naturally, without irony.',
  'rec-b2-06-nuances': 'The four both-moods cards (act 10). One voice. Each card holds a pair: read both halves at the same pace; the second sentence of card one (the spoken variant) is relaxed, not sloppy.',
  'rec-b2-06-texte-a10': `Hugo’s message (act 10). ${TEXTE}`,
  'rec-b2-06-modele': 'Awa’s model reply (act 11), one voice, one take, read as a neighbour would read her own post aloud: clear, courteous, convinced.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 6',
  intro: 'In B1 you learned which expressions set off the subjunctive (lessons 14 to 16) and which conjunctions choose a mood (lessons 31 and 32). This lesson is about the places where the list leaves you a choice, and the one question that settles it: does your sentence assert the fact, or does it do something else with it? You work through opinion verbs in every sentence form, the certainty scale (probable against possible), relative clauses about things sought or found, superlatives that judge or state, goal against result, bien que against même si, and the famous après que trap. Then the cases where both moods are correct and say different things. The task: a 180 to 250 word forum reply about a local project that mixes facts, doubts, wishes and a position, graded on the B2 writing criteria.',
  skill: 'PE',
  grammarAssumed: [FORMATION_UNIT, DECL_UNIT, INF_UNIT, SUBORD_UNIT, CONCESSION_UNIT, ARG_UNIT, SUBJ_PASSE_UNIT],
  grammarIntroduced: [
    'The mood choice as a question of assertion: the indicative asserts the fact, the subjunctive does something else with it (wants, fears, doubts, seeks, judges, concedes, awaits)',
    'Opinion verbs across sentence forms: affirmative (indicative), negative (subjunctive in writing, indicative as a spoken variant), inverted question (subjunctive signals doubt, indicative asks), est-ce que and intonation questions, the negative question that asserts, je ne doute pas que',
    'The certainty scale: certain, clair, vrai, probable with the indicative; possible, il se peut, peu probable, exclu, pas certain with the subjunctive; il paraît, sans doute, peut-être que with the indicative',
    'Relative clauses: indicative when the antecedent exists or is known, subjunctive when it is sought, wished for, denied (personne, rien, aucun) or questioned',
    'After le seul, le premier, l’unique and superlatives: the subjunctive judges, the indicative states a checkable fact; le premier à + infinitive',
    'Goal against result: pour que, afin que, sans que, trop… pour que with the subjunctive; si bien que, tellement… que with the indicative; de sorte que and de façon que both ways',
    'Concession beyond B1: quoi que against quoique, quel que, si… que, bien que + adjective, même si with the imparfait or plus-que-parfait for a hypothesis, avoir beau',
    'Time clauses: après que with the indicative against avant que, jusqu’à ce que, en attendant que with the subjunctive; the expletive ne; depuis que, dès que, maintenant que; après + noun or past infinitive as a way out',
    'Where both moods are correct: register and certainty after a denied opinion; comprendre, dire, écrire, supposer changing meaning with the mood; que + subjunctive at the head of a sentence; le fait que',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Au B1, tu as appris quelles expressions déclenchent le subjonctif. Ici, tu apprends à choisir quand la phrase te laisse le choix, avec une seule question : est-ce que tu affirmes le fait ? Penser et croire en question, probable ou possible, chercher ou avoir trouvé, le seul qui, le but ou le résultat, bien que ou même si, avant que ou après que, et les cas où les deux modes sont justes. À la fin, tu réponds en 180 à 250 mots sur le forum de ton quartier.",
    minutes: 150,
    difficulty: 4,
    glyph: 'que',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: SUBJ_IND_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (build log, 2026-09-25). Kept, as every B1 and B2 lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, LECTURE_MODELE, dicteeFor };
