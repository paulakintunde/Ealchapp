// b2.26.l1 « Réunions et négociations » · the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md, in the
// WORKSHOP SHAPE of B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 and §1.4, with the B2
// rules of b2/B2-BUILD-LOG.md. No new section types.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]` and the validators run on `LESSON` itself.
//
// THE PO@b2 REMEDIATION TARGET: `EXAM_PREP_TARGETS` should route PO@b2 here
// when the lesson publishes (B2 build log, wave 0 item 2).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (move · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   WORKSHOP rhythm per act 2 to 10 (shapes doc §1.1): MEET the exchange
//   (listening, reading, story), NOTICE the move (cardDeck, tapTable,
//   examples, focus), PRACTISE it on new material (groupDrill, trapDrill,
//   commonErrors: which fits HERE, and why), USE it (a role play, a pick-the-
//   line groupDrill « À toi », or a dictation, varied per §1.4), then the
//   gated act check. The « use it » beat is titled « À toi » throughout.
//
//    1  Oui, non, ou à quelles conditions  7  the flat no; the condition; the task announced
//    2  Ouvrir et mener la réunion          7  objectif, ordre du jour, recadrer, garder pour la fin (tapTable)
//    3  Prendre et garder la parole         6  si je peux me permettre, rebondir, couper / laisser / donner
//    4  Reformuler et clarifier             6  si je vous suis bien, autrement dit, préciser, même longueur d'onde
//    5  Nuancer un désaccord                6  je ne partage pas tout à fait, je crains que, cela dit (tapTable, role play)
//    6  Proposer et contre-proposer         6  que diriez-vous de, envisager, contre-proposition, si + imparfait
//    7  Céder pour obtenir                  6  faire un geste, en contrepartie, à condition que, le seuil
//    8  L'offre conditionnelle              6  si + présent / imparfait, sous réserve de, moyennant (tapTable)
//    9  Persuader                           6  je sais ce que tu vas me dire, justement, l'échelle des objections (role play)
//   10  Conclure et fixer la suite          6  récapituler, s'en charger, prochaines étapes, faire un suivi
//   11  À toi de négocier                  11  annotated model, plan, role play, TASK (exam format), quiz
//
//   TOTAL 73 missions, 11 acts. Texts: 5 readings of 200 to 290 words (an
//   agenda with a briefing note, internal minutes, a magazine column, a
//   written offer, a model monologue), 5 hideLines listenings (the opening
//   of a video meeting, a clarifying call, the price negotiation, a
//   persuasion, the close), one story, one scene, three role plays.
//   Corpus: 190 authored rows (.1200-.1389) plus 25 reused seed rows,
//   released act by act through `deckTranche`. Quiz: 11 rounds of 8 (acts 2
//   to 10, one exam-format round, one round recycling earlier B2 lessons).
//   Eleven error triggers, eleven drills, five reference sheets, twelve
//   terms. Three tapTables (acts 2, 5, 8).
//   Chapter artwork: `reunions-negociation-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Négocier, ce n’est pas dire oui ou non : c’est dire à quelles
//   conditions. »
//   EN: Negotiating is not saying yes or no: it is saying on what terms.
//
//   ONE METAPHOR, THE DOOR LEFT AJAR (every chapter image). A flat yes gives
//   everything away, a flat no shuts the door, a condition keeps it open
//   while saying exactly how far. Acts 2 to 4 keep the table working, acts
//   5 to 8 are the conditions, acts 9 and 10 make them stick. Rejected
//   candidates: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the spoken moves of a B2 meeting and negotiation (steering, the
//           floor, reformulating, nuanced disagreement, counter-proposals,
//           strategic concessions, conditional offers, persuasion by the
//           objection ladder, closing on owners and dates); the meeting
//           calques (prochain item, adresser, céduler, sur la même page,
//           élaborer sur, bon point, vous revenir, follow-up); the Québec,
//           France and Belgium meeting usages; the PO@b2 exam task.
//   QUOTES  lesson 36 in B1 (business vocabulary, polite disagreement) BY
//           POSITION, with its published rows imported, never retyped:
//           « Passons au point suivant. », « prendre la parole », « je
//           comprends votre point de vue », « trouver un compromis ».
//   LEAVES  written business French (lesson 36 and 39 in B1); written
//           argumentation (lesson 23 in B2, the PE target); the B2 grammar
//           the recycling round revisits (lessons 2, 3, 5, 12 and 16 in B2).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (the client gets vous, colleagues say tu). B2 French is
//   natural, not simplified; English is authored on every learner string
//   (`en`, or a final « EN: »), and NO ANSWER carries it. Every `say` is
//   French. Theme `affaires`, block fr.b2.affaires.1200-1399. Lessons are
//   cited by trail position in words, never a raw unit id. Setting leans
//   Canadian (Montréal) with Lyon and Brussels; every company and person is
//   invented. No bubble carries a « ? » or a « ! ». Answer slots are spread
//   by permuting options WITH their correct index (spreadMissionSlots,
//   spreadQuizSlots), never by editing content. One apostrophe style (’) in
//   every authored string, so every role play has one style.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. The task is a SPOKEN monologue (responseSpec audio, 180 to 300 s) in
//      TEF section B shape, self-checked against an annotated model: there
//      is no live speech grading. Six criteria, 20 points, mirroring the
//      TEF/DELF oral grids. Keep six, or fold pronunciation into range as
//      the B1 four-criterion house rubric would?
//   2. Québec usages taught as right in place: une rencontre, faire un
//      suivi, je vous donne des nouvelles. France: caler une réunion
//      (familier), revenir vers quelqu’un (courant at work, disliked by
//      purists). Belgium: nonante. Trapped as calques: céduler, vous
//      revenir, faire un follow-up, sur la même page, élaborer sur, adresser
//      une question, bon point. Keep that line?
//   3. The recycling round names lessons 2, 3, 5, 12 and 16 in B2, which
//      are not written yet (waves 2 to 5). The forms it tests are standard
//      B2; confirm the round may cite them before they exist.
//   4. `Lesson.skill` 'PO'. The PO@b2 route in EXAM_PREP_TARGETS is an
//      ealch-v2 edit this build may not make.
//   5. The preview generator, the b1 house tests and the import scripts do
//      not list B2 yet (wave 0 item 1); their checks were replicated in the
//      scratch validation.
//   6. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, refFr,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  ORDRE_TEXT, COMPTE_RENDU_TEXT, CEDER_TEXT, OFFRE_TEXT, SALON_TEXT, TASK_DOC, TASK_MODEL,
  AFFAIRES_UNIT, POLITESSE_UNIT, SI_UNIT, TUVOUS_UNIT, CONCESSION_UNIT,
  AFFAIRES_REF, POLITESSE_REF, SI_REF, ARGUMENTATION_REF,
  AFFAIRES_REF_EN, TUVOUS_REF_EN, POLITESSE_REF_EN, ARGUMENTATION_REF_EN,
  COND_PASSE_UNIT, SI_PASSE_UNIT, SUBJ_PASSE_UNIT, GERONDIF_UNIT, CONCESSION_B2_UNIT,
} from './reunions-negociation-corpus.ts';
import { REUNIONS_NEGOCIATION_TERMS } from './reunions-negociation-terms.ts';

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

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.26: no item ${id}`);
  return r;
}

/** The imports are typed by hand in the corpus; hold them to the seed. */
for (const id of IMPORT_IDS) {
  const d = SEED.get(id)?.drills ?? [];
  if (!SEED.has(id)) throw new Error(`b2.26: import ${id} is not in the seed`);
  if (!NOT_SPEAKABLE.includes(id) && !d.includes('voiceflash')) throw new Error(`b2.26: ${id} has no voiceflash but is not in NOT_SPEAKABLE`);
  if (!NOT_DECK_ABLE.includes(id) && !d.includes('flashcard')) throw new Error(`b2.26: ${id} has no flashcard but is not in NOT_DECK_ABLE`);
}

/** The row's IPA, so a scene break or a trap card never retypes one. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.26: no ipa on ${id}`);
  return r.ipa;
}

/** The authored row's respelling, BRACKETED for a section. Authored rows
 *  only: seed respellings are never printed. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`b2.26: no authored respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A quotation with no corpus row (a wrong or flat line shown as such). */
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const uc = (situation: string, id: string) => ({ situation, fr: src(id).fr, en: src(id).en });
const fr = (id: string) => src(id).fr;
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

type Card = NonNullable<Sec<'cardDeck'>['cards']>[number];
const card = (id: string, head: string, label: string, body: string): Card =>
  ({ head, label, fr: fr(id), sub: rsOf(id), body });

/** A trap card: the wrong line (never spoken) and the right row. */
const trap = (promptLabel: string, promptSound: string, id: string, tip: string) =>
  ({ promptLabel, promptSound, fr: fr(id), ipa: ipaOf(id), tip });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** The stepped trapDrill's four steps, the same in every act. */
const TRAP_STEPS = [
  { label: 'La règle', kind: 'rule' as const, title: 'Ce que le français fait' },
  { label: 'Six cartes', kind: 'cards' as const, title: 'Ce que la phrase fausse raconte' },
  { label: 'Écoute', kind: 'audio' as const, title: 'Écoute les six phrases justes' },
  { label: 'À toi', kind: 'drill' as const, title: 'Huit phrases', gate: true },
];

/** A deterministic hash, so the slot spreading below is stable run to run. */
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

const OPT_KEYS = ['opts', 'options', 'choices', 'answers'];

/** THE ANSWER-SLOT RULE (playbook 6.11, b1-answer-slots.test.ts), as b1.36
 *  does it: missions render the authored order, so answers are spread BY
 *  PERMUTING each item's options WITH its correct index. The option set and
 *  the correct string are unchanged. No `why` in this lesson names a
 *  position. */
function spreadMissionSlots(sections: LessonSection[], drills: LessonDrill[]): void {
  const counts: Record<number, number[]> = {};
  const last: number[] = [];
  const place = (n: Record<string, unknown>) => {
    const key = OPT_KEYS.find((k) => Array.isArray(n[k]))!;
    const opts = n[key] as unknown[];
    const k = opts.length;
    counts[k] ??= new Array(k).fill(0);
    const c = counts[k];
    const banned = last.length >= 2 && last[last.length - 1] === last[last.length - 2] ? last[last.length - 1] : -1;
    const slots = [...Array(k).keys()].filter((i) => i !== banned);
    const min = Math.min(...slots.map((i) => c[i]));
    const pool = slots.filter((i) => c[i] <= min + (k === 2 ? 1 : 0));
    const target = pool[hash(JSON.stringify(opts) + String(n.q ?? n.promptSay ?? n.prompt ?? '')) % pool.length];
    const cur = n.correct as number;
    [opts[cur], opts[target]] = [opts[target], opts[cur]];
    n.correct = target;
    c[target]++;
    last.push(target);
  };
  const walk = (n: unknown): void => {
    if (!n || typeof n !== 'object') return;
    if (Array.isArray(n)) { n.forEach(walk); return; }
    const o = n as Record<string, unknown>;
    if (typeof o.correct === 'number' && OPT_KEYS.some((k) => Array.isArray(o[k]))) place(o);
    Object.values(o).forEach(walk);
  };
  for (const s of sections) if (s.type !== 'quiz') walk(s);
  for (const d of drills) walk(d);
}

/** The quiz: `validateDensity` quiz-spread counts every numeric correct in
 *  the quiz together. LessonRich reshuffles at runtime anyway. */
function spreadQuizSlots(quiz: Sec<'quiz'>): void {
  const c = [0, 0, 0, 0];
  let prev = -1;
  for (const r of quiz.rounds ?? []) {
    for (const q of r.questions as unknown as Record<string, unknown>[]) {
      if (!Array.isArray(q.opts) || typeof q.correct !== 'number') continue;
      const opts = q.opts as string[];
      const slots = [...Array(opts.length).keys()].filter((i) => i !== prev);
      const min = Math.min(...slots.map((i) => c[i]));
      const pool = slots.filter((i) => c[i] === min);
      const target = pool[hash(String(q.q) + opts.join('|')) % pool.length];
      const cur = q.correct;
      [opts[cur], opts[target]] = [opts[target], opts[cur]];
      q.correct = target;
      c[target]++;
      prev = target;
    }
  }
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 · OUI, NON, OU À QUELLES CONDITIONS
 *
 *  The problem: a correct, flat no ends a negotiation. The condition keeps
 *  the table open. The exam task is announced.
 * ══════════════════════════════════════════════════════════════════════════ */

const FLAT_NO = 'Non, quinze pour cent, c’est impossible pour nous.';

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La réunion qui se ferme',
  frSub: 'Quinze pour cent',
  setting: { place: 'La salle de réunion de Tessère, dans le Mile-End', city: 'Montréal', time: 'jeudi, 9 h 40', ambience: 'un grand écran, Lyon en vidéo, des échantillons de feutre sur la table' },
  beats: [
    {
      kind: 'narration',
      text: 'Ton premier mois chez Tessère, une PME de Montréal qui fabrique des panneaux acoustiques. À l’écran, Mathilde Aubry, responsable des achats chez Coworka, à Lyon. Le contrat serait le plus gros de l’année.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mathilde',
      fr: 'Nous aimerions une remise de quinze pour cent.',
      en: 'We would like a fifteen per cent discount.',
      respell: '[noo-zeh-muh-RYOHⁿ ün ruh-MEEZ | duh kehⁿz poor SAHⁿ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: FLAT_NO,
      en: 'No, fifteen per cent is impossible for us.',
      respell: '[NOHⁿ | kehⁿz poor SAHⁿ | seh-tehⁿ-po-SEEBL poor NOO]',
      stage: 'Ta phrase est juste, polie même. Mais elle ne laisse rien à discuter.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mathilde',
      fr: 'Dans ce cas, nous allons consulter d’autres fournisseurs.',
      en: 'In that case, we are going to consult other suppliers.',
      respell: '[dahⁿ suh KA | noo-za-lohⁿ kohⁿ-sül-TAY | dohtr foor-nee-SUHR]',
      stage: 'Nadia te regarde. Personne ne parle pendant deux secondes.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle réponse garde la table ouverte ?',
      size: 'lg',
      options: [
        { fr: FLAT_NO, respell: '[NOHⁿ | kehⁿz poor SAHⁿ | seh-tehⁿ-po-SEEBL poor NOO]', en: 'No, fifteen per cent is impossible for us.', outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1200)), respell: rsOf(E(1200)), en: src(E(1200)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Mathilde prend une note. « Deux ans, dix pour cent. Et pour le paiement ? » La négociation continue.',
        breaks: 'Mathilde hoche la tête, poliment, et passe au point suivant. Le prix, lui, ne reviendra pas.',
      },
    },
    {
      kind: 'break',
      heading: 'Un non sec ferme la porte',
      body: 'Ton non était clair et correct, mais il ne proposait rien : l’autre n’avait plus qu’à partir. Dis plutôt jusqu’où tu peux aller, et contre quoi. EN: A no that offers nothing ends the talk; say how far you can go.',
      wrong: {
        fr: FLAT_NO,
        ipa: '/nɔ̃ kɛ̃z puʁ sɑ̃ sɛ.tɛ̃.pɔ.sibl puʁ nu/',
        respell: '[NOHⁿ | kehⁿz poor SAHⁿ | seh-tehⁿ-po-SEEBL poor NOO]',
        en: 'No, fifteen per cent is impossible for us.',
      },
      right: { fr: fr(E(1200)), ipa: ipaOf(E(1200)), respell: rsOf(E(1200)), en: src(E(1200)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: 'Cette leçon te donne les gestes d’une réunion et d’une négociation : mener, prendre la parole, reformuler, nuancer, proposer, céder, conditionner, persuader, conclure. À la fin, tu présentes à l’oral une offre à ton associé, tu le convaincs et tu fixes tes conditions, comme à l’examen.',
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Mener une réunion et y garder ta place', s: 'Actes 2 à 4 : ouvrir, recadrer, prendre la parole, reformuler' },
    { t: 'Négocier sans fermer la porte', s: 'Actes 5 à 8 : nuancer, contre-proposer, céder, conditionner' },
    { t: 'Convaincre et conclure', s: 'Actes 9 et 10 : les objections, la suite' },
    { t: 'Réussir l’oral B2', s: 'Acte 11 : un monologue au format du TEF et du DELF' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the agenda and the briefing note. B2 question types
 *  labelled (global, détail, inférence, point de vue). */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'L’ordre du jour et la note de Nadia',
  frSub: 'Lis, et cherche la position de Tessère',
  text: ORDRE_TEXT,
  glossary: [
    { word: 'bloque', en: 'gets stuck', note: 'Du verbe bloquer : la discussion n’avance plus.' },
    { word: 'repartir', en: 'to leave (again)', note: 'Sortir de la réunion, ici avec quelque chose en main.' },
  ],
  questions: [
    { q: 'Global : à quoi sert ce document ?', a: 'À préparer l’équipe : l’ordre du jour de la rencontre, puis la position que Tessère va défendre.' },
    { q: 'Détail : jusqu’où Tessère peut-il baisser son prix, et à quelle condition ?', a: 'Jusqu’à dix pour cent, à condition que Coworka s’engage sur deux ans.' },
    { q: 'Inférence : pourquoi Nadia écrit-elle « nous ne dirons ni oui ni non tout de suite » ?', a: 'Un oui donnerait tout, un non fermerait la porte : elle veut discuter des conditions.' },
    { q: 'Point de vue : qu’est-ce qui compte le plus pour Nadia ? Comment le sais-tu ?', a: 'Un accord que les deux équipes peuvent défendre : « le but n’est pas de gagner chaque phrase ».' },
  ],
  audio: REC('rec-b2-26-ordre'),
  say: REFRAME,
  terms: ['condition'],
};

const A1_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-negocier',
  title: 'Quatre mots pour négocier',
  frSub: 'Avant d’entrer dans la salle',
  hint: 'Quatre cartes. Chacune sert à ne pas répondre trop vite.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition'],
  cards: [
    card(E(1201), 'La question clé', 'la condition',
      'Au lieu d’un oui ou d’un non, tu demandes, ou tu dis, à quelles conditions. EN: the question that replaces yes and no.'),
    card(E(1206), 'Ce qui te reste', 'la marge',
      'Ce que tu peux encore céder avant ta limite. Tu la connais, l’autre non. EN: room for manoeuvre.'),
    card(E(1205), 'Le travail', 'la négociation',
      `Mener une négociation, c’est la conduire, pas la subir. Les mots de base sont dans ${AFFAIRES_REF}. EN: to conduct a negotiation.`),
    card(E(1210), 'Le début', 'la réunion',
      'Chacun se présente et dit ce qu’il attend : la réunion commence par là. EN: everyone speaks in turn.'),
  ],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Fermer la porte ou la garder ouverte',
  groups: [
    grp('Ce qui ferme la porte', [
      free(FLAT_NO, 'No, fifteen per cent is impossible for us.', 'un non, sans rien d’autre'),
      free('D’accord, nous acceptons tout.', 'Fine, we accept everything.', 'un oui qui donne tout'),
      free('Votre demande est trop élevée.', 'Your request is too high.', 'un jugement, pas une offre'),
    ], chk(
      'Ces trois réponses sont correctes. Qu’ont-elles en commun ?',
      ['Elles ne laissent rien à négocier.', 'Elles sont impolies.'], 0,
      'Le problème n’est pas la politesse : aucune ne propose une suite. EN: none of them leaves anything to negotiate.')),
    grp('Ce qui garde la table ouverte', [
      it(E(1200), 'une limite et sa condition'),
      it(E(1202), 'la question des conditions'),
      it(E(1203), 'pas de réponse trop vite'),
      it('fr.b1.affaires.1130', 'le but'),
    ], chk(
      'Que fait la première phrase ?',
      ['Elle refuse quinze et propose dix, contre deux ans.', 'Elle accepte quinze pour cent.', 'Elle change de sujet.'], 0,
      'Une limite, une condition, une suite : l’autre peut répondre. EN: a limit, a condition, a way forward.')),
    ctl('La marge', 'Ta marge de manœuvre, tu la dis à la cliente dès le début ?',
      ['Non, tu la gardes pour toi.', 'Oui, tout de suite.'], 0,
      'Si l’autre connaît ta limite, il ira droit à elle. EN: keep your limit to yourself.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où ces phrases changent tout',
  cases: [
    uc('La cliente refuse ton prix sans rien proposer', E(1202)),
    uc('Ton associé veut tout accepter pour signer vite', E(1207)),
    uc('La réunion commence, et personne ne se connaît', E(1211)),
    uc('Tu résumes pourquoi l’équipe négocie', E(1209)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le non sec', 'Un non correct et poli, sans rien d’autre, en négociation...',
    ['arrête souvent la discussion', 'fait toujours baisser le prix'], 0,
    'Il ne donne à l’autre aucune raison de rester. EN: it gives the other side no reason to stay.'),
  ctl('La condition', 'Laquelle garde la porte ouverte ?',
    ['Si vous vous engagez sur deux ans, nous pourrions aller jusqu’à dix.', 'Quinze pour cent, c’est non.', 'D’accord pour quinze.'], 0,
    'Une limite et ce que tu demandes en échange. EN: a limit and what you want in return.'),
  ctl('Le but', 'Pour Nadia, le but de la réunion est de...',
    ['gagner chaque phrase', 'repartir avec un accord défendable'], 1,
    '« Le but n’est pas de gagner chaque phrase. » EN: an agreement both sides can defend.'),
], ['condition']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Oui, non, ou à quelles conditions',
    opener: {
      line: 'Une cliente demande quinze pour cent, et ton non poli ferme la porte : ici tu apprends à répondre par une condition. EN: A client asks for fifteen per cent and your polite no shuts the door: here you learn to answer with a condition.',
      imageRef: 'lessons/reunions-negociation/act01.jpg',
    },
    sections: [],
    milestone: 'Tu ne réponds plus par oui ou par non : tu dis jusqu’où tu peux aller, et contre quoi. EN: You no longer answer yes or no: you say how far you can go, and for what.',
    estScreens: 36, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_CARTES, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 · OUVRIR ET MENER LA RÉUNION
 *
 *  Nadia opens the video meeting: the aim, the agenda, the minutes, then
 *  she steers (stops Julien, keeps a point for the end). Traps: prochain
 *  item, adresser, céduler, l'agenda, retourner au sujet.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Nadia ouvre la rencontre',
  frSub: 'Écoute comment elle mène la réunion',
  lines: [
    ln(E(1215)), ln(E(1216)), ln(E(1217)), ln(E(1218)), ln(E(1219)),
    ln(E(1220)), ln(E(1221)), ln(E(1222)), ln(E(1223)), ln(E(1224)),
  ],
  questions: [
    { q: 'Combien de temps dure la réunion ?', opts: ['une heure', 'deux heures', 'trente minutes'], correct: 0, why: 'Nadia le dit au début, pour justifier l’ordre du jour. EN: one hour.' },
    { q: 'Qui rédige le compte rendu ?', opts: ['Kim', 'Nadia'], correct: 0, why: 'Kim prend des notes et envoie le compte rendu demain. EN: Kim.' },
    { q: 'Pourquoi Nadia arrête-t-elle Julien ?', opts: ['Il parle d’un point prévu plus tard.', 'Il est impoli.'], correct: 0, why: 'La livraison, c’est le point quatre : elle recadre, sans reproche. EN: he jumped ahead.' },
    { q: 'Un point bloque. Que fait-elle ?', opts: ['Elle le garde pour la fin.', 'Elle l’abandonne.', 'Elle vote.'], correct: 0, why: 'Elle propose d’en reparler à la fin, au subjonctif. EN: she parks it.' },
    { q: 'À la fin de l’extrait, il reste...', opts: ['vingt minutes', 'dix minutes'], correct: 0, why: 'Vingt minutes, et elle demande d’avancer. EN: twenty minutes.' },
  ],
  audio: REC('rec-b2-26-ouverture-ecoute'),
  say: REFRAME,
  terms: ['recadrer'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-mener',
  title: 'Mener sans imposer',
  frSub: 'Cinq gestes de l’animateur',
  hint: 'Cinq cartes. Chacune fait avancer la réunion sans vexer personne.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['recadrer', 'variante'],
  cards: [
    card(E(1225), 'Le cadre', 'ouvrir',
      'Tu annonces que l’ordre du jour sera suivi : personne n’est surpris quand tu recadres. EN: to stick to the agenda.'),
    card(E(1228), 'Ramener au sujet', 'recadrer',
      'Quand la discussion part ailleurs, tu la ramènes, souvent avec « je me permets de ». EN: to refocus.'),
    card(E(1226), 'Plus doux', 'recadrer',
      'Revenons à notre sujet, si vous le voulez bien : le « si vous le voulez bien » adoucit. EN: back to the subject.'),
    card(E(1227), 'Ne pas bloquer', 'reporter',
      'Un point bloque ? Tu le gardes pour la fin, et la réunion continue. EN: park an item.'),
    card(E(1232), 'France, familier', 'la variante',
      'Entre collègues en France : on cale une réunion. Avec un client, fixe-la. EN: informal France for fitting in a meeting.'),
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ouvrir, puis diriger',
  groups: [
    grp('Ouvrir la réunion', [
      it(E(1215), 'accueillir'),
      it(E(1216), 'fixer l’objectif'),
      it(E(1217), 'le cadre, au subjonctif'),
      it(E(1218), 'qui prend les notes'),
    ], chk(
      'Dans « je propose qu’on s’en tienne à l’ordre du jour », tienne est...',
      ['au subjonctif, après proposer que', 'au présent de l’indicatif'], 0,
      'Proposer que + subjonctif : tienne, reparlions. EN: proposer que takes the subjunctive.')),
    grp('Diriger la discussion', [
      it('fr.b1.affaires.1052', 'avancer'),
      it(E(1221), 'arrêter sans vexer'),
      it(E(1229), 'recadrer'),
      it(E(1223), 'garder pour la fin'),
    ], chk(
      'Julien parle de la livraison pendant le point sur le prix. Le plus efficace :',
      ['l’arrêter et dire quand on en parlera', 'le laisser finir, puis changer d’ordre du jour', 'ne rien dire'], 0,
      'Tu l’arrêtes, et tu lui donnes un rendez-vous : il n’a rien perdu. EN: stop him and say when.')),
    ctl('Le temps', 'Il reste vingt minutes et trois points. Tu dis :',
      ['Il nous reste vingt minutes ; essayons d’avancer.', 'On a le temps, prenons notre temps.'], 0,
      'L’animateur tient l’horloge. EN: the chair keeps the clock.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recadrer'],
};

const A2_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-tableau',
  layer: 'core',
  sheetId: 'sheet-mener',
  title: 'Six moments d’une réunion',
  cols: ['Moment', 'Formule', 'Registre'],
  rows: [
    { cells: ['ouvrir', 'Merci d’être là.', 'courant'], say: fr(E(1215)),
      detail: { title: 'Accueillir', body: 'On remercie, on nomme la contrainte (le décalage horaire, le temps court). EN: welcome and name the constraint.', say: fr(E(1230)) } },
    { cells: ['fixer le but', 'L’objectif de cette réunion est de...', 'courant'], say: fr(E(1216)),
      detail: { title: 'Le but', body: 'Un verbe d’action : nous mettre d’accord, décider, choisir. EN: state the aim with an action verb.', say: fr(E(1216)) } },
    { cells: ['cadrer', 's’en tenir à l’ordre du jour', 'courant'], say: fr(E(1217)),
      detail: { title: 'Le cadre', body: 'Proposer que + subjonctif : je propose qu’on s’en tienne à... EN: proposer que + subjunctive.', say: fr(E(1217)) } },
    { cells: ['avancer', 'Passons au point suivant.', 'courant'], say: fr('fr.b1.affaires.1052'),
      detail: { title: 'Avancer', body: `Déjà vu dans ${AFFAIRES_REF}. Au B2, tu nommes le point : passons au deuxième point, le prix. EN: name the next item.`, say: fr(E(1220)) } },
    { cells: ['recadrer', 'Revenons à notre sujet.', 'courant'], say: fr(E(1222)),
      detail: { title: 'Recadrer', body: 'Plus soutenu : je me permets de recadrer la discussion. EN: bring the talk back.', say: fr(E(1229)) } },
    { cells: ['reporter', 'Nous y reviendrons à la fin.', 'courant'], say: fr(E(1223)),
      detail: { title: 'Garder un point pour la fin', body: 'Un point qui bloque ne doit pas bloquer toute la réunion. EN: park what blocks.', say: fr(E(1223)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recadrer'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  sheetId: 'sheet-variantes',
  title: 'Six calques de réunion',
  rule: {
    title: 'Des mots français, une réunion anglaise',
    body: 'Item, adresser, céduler, agenda : les mots existent ou ressemblent au français, mais la réunion, elle, parle anglais. Le français dit un point, aborder, fixer, l’ordre du jour. EN: these meeting words are English in disguise.',
  },
  cards: [
    trap('prochain item', 'Passons au prochain item.', 'fr.b1.affaires.1052', 'Un point de l’ordre du jour, jamais un item. EN: an agenda item is un point.'),
    trap('adresser', 'Adressons maintenant la question du prix.', E(1234), 'On aborde une question ; on adresse une lettre. EN: to address an issue is aborder.'),
    trap('céduler', 'On va céduler une rencontre la semaine prochaine.', E(1235), 'Céduler vient de to schedule. On l’entend au Québec, mais avec un client, on fixe une rencontre. EN: to schedule is fixer.'),
    trap('l’agenda', 'Voici l’agenda de la réunion.', 'fr.b1.affaires.1042', 'L’agenda, c’est ton carnet de rendez-vous ; la liste des points, c’est l’ordre du jour. EN: the agenda is l’ordre du jour.'),
    trap('retourner', 'Retournons au sujet.', E(1222), 'On revient à un sujet ; on retourne à un endroit. EN: to come back to a subject is revenir.'),
    trap('la différence d’heure', 'Merci d’être là malgré la différence d’heure.', E(1215), 'Entre Montréal et Lyon, c’est le décalage horaire. EN: the time difference is le décalage horaire.'),
  ],
  drill: [
    { promptSay: 'Passons au ... suivant.', opts: ['point', 'item'], correct: 0 },
    { promptSay: '... maintenant la question du prix.', opts: ['Abordons', 'Adressons'], correct: 0 },
    { promptSay: 'Voici ... de la réunion.', opts: ['l’ordre du jour', 'l’agenda'], correct: 0 },
    { promptSay: '... à notre sujet, si vous le voulez bien.', opts: ['Revenons', 'Retournons'], correct: 0 },
    { promptSay: '... une rencontre la semaine prochaine.', opts: ['Fixons', 'Cédulons'], correct: 0 },
    { promptSay: 'Merci d’être là malgré le ... horaire.', opts: ['décalage', 'changement'], correct: 0 },
    { promptSay: 'Je propose qu’on s’en ... à l’ordre du jour.', opts: ['tienne', 'tient', 'tiendra'], correct: 0 },
    { promptSay: 'Je propose que nous en ... à la fin.', opts: ['reparlions', 'reparlons'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-b2-26-piege-reunion'),
  say: REFRAME,
  terms: ['recadrer', 'variante'],
};

/** USE: pick the line the chair says. */
const A2_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-atoi',
  layer: 'core',
  size: 'lg',
  title: 'À toi : tu animes',
  groups: [
    ctl('Le début', 'Tout le monde est connecté. Ta première phrase utile :',
      ['L’objectif de cette réunion est de nous mettre d’accord sur le prix et le calendrier.', 'Bon, on verra bien ce qui se passe.'], 0,
      'Un but clair donne une direction à tout le reste. EN: a clear aim first.'),
    ctl('La dérive', 'Mathilde parle de ses vacances depuis trois minutes. Tu dis :',
      ['Je me permets de recadrer la discussion : nous parlions du prix.', 'Mathilde, ça ne nous intéresse pas.'], 0,
      'Tu recadres, et tu dis où on en était. EN: refocus, and say where you were.'),
    ctl('Le blocage', 'Les couleurs pour Bruxelles bloquent la discussion. Tu proposes :',
      ['d’en reparler à la fin', 'de décider tout de suite, coûte que coûte', 'd’annuler la réunion'], 0,
      'Garder un point pour la fin, c’est le meilleur moyen de finir la réunion. EN: park it.'),
    ctl('Entre collègues', 'À Paris, un collègue te propose : « On cale une réunion jeudi ? » C’est...',
      ['familier et normal entre collègues', 'une faute'], 0,
      'Caler, c’est familier en France, et juste entre collègues. Avec un client, fixe la réunion. EN: informal, fine among colleagues.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recadrer', 'variante'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('L’ordre du jour', 'The agenda of a meeting, en français :',
    ['l’ordre du jour', 'l’agenda'], 0,
    'L’agenda est ton carnet. EN: l’ordre du jour.'),
  ctl('Recadrer', 'Pour ramener la discussion au sujet :',
    ['Revenons à notre sujet.', 'Retournons au sujet.', 'Arrêtez de parler.'], 0,
    'Revenir à un sujet. EN: revenir.'),
  ctl('Le subjonctif', 'Je propose que nous en ... à la fin.',
    ['reparlions', 'reparlons'], 0,
    'Proposer que + subjonctif. EN: subjunctive after proposer que.'),
], ['recadrer']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Ouvrir et mener la réunion',
    opener: {
      line: 'Montréal et Lyon à l’écran, une heure et cinq points : ici tu ouvres la réunion et tu la ramènes à son sujet quand elle s’échappe. EN: Montréal and Lyon on screen, one hour and five items: here you open the meeting and bring it back when it drifts.',
      imageRef: 'lessons/reunions-negociation/act02.jpg',
    },
    sections: [],
    milestone: 'Tu ouvres une réunion, tu fixes son but et tu la recadres sans vexer personne. EN: You open a meeting, set its aim and refocus it without offending anyone.',
    estScreens: 40, restPoints: ['a2-construire', 'a2-piege'],
  },
  sections: [A2_ECOUTE, A2_CARTES, A2_CONSTRUIRE, A2_TABLEAU, A2_PIEGE, A2_ATOI, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 · PRENDRE ET GARDER LA PAROLE
 *
 *  Julien talks over Olivier; the learner enters, keeps the floor and
 *  hands it over. Errors: the sharp « Laissez-moi finir », the calque
 *  « bon point », « additionner un point ».
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the story of a meeting where one voice takes all the room. */
const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'Julien parle, Olivier attend',
  frSub: 'Trouver sa place à la table',
  setting: 'La même rencontre, vingt minutes plus tard. Julien Peeters, à Bruxelles, parle depuis cinq minutes. Olivier lève la main, deux fois.',
  bubbles: [
    { from: 'narrator', fr: 'Julien détaille ses espaces de Bruxelles, un par un. Olivier attend depuis longtemps.', en: 'Julien is describing his Brussels spaces one by one. Olivier has been waiting a long time.' },
    { from: 'coach', fr: 'Et à Bruxelles aussi, nous voudrions des couleurs différentes pour chaque étage...', en: 'And in Brussels too, we would like different colours for each floor...', warn: 'Julien ne s’arrête pas' },
    { from: 'user', fr: fr(E(1240)), en: src(E(1240)).en },
    { from: 'user', fr: fr(E(1248)), en: src(E(1248)).en },
    { from: 'coach', fr: fr(E(1242)), en: src(E(1242)).en, warn: 'Julien s’excuse, et il le dit bien' },
    { from: 'user', fr: fr(E(1246)), en: src(E(1246)).en },
    { from: 'narrator', fr: 'Olivier explique ses délais. Julien veut répondre ; Olivier finit calmement sa phrase, puis lui donne la parole.', en: 'Olivier explains his lead times. Julien wants to reply; Olivier calmly finishes his sentence, then gives him the floor.' },
  ],
  closing: { fr: 'Couper poliment, garder calmement, donner clairement : la parole circule.', en: 'Cut in politely, hold on calmly, hand over clearly: the floor moves around.' },
  audio: REC('rec-b2-26-parole'),
  say: REFRAME,
  terms: ['parole'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  sheetId: 'sheet-mener',
  title: 'Six gestes pour la parole',
  examples: [
    ex(E(1238), 'Entrer : soutenu, et sans couper brutalement.'),
    ex(E(1244), 'Entrer en partant de ce que l’autre vient de dire.'),
    ex(E(1240), 'Couper quand c’est nécessaire, en disant pourquoi.'),
    ex(E(1247), 'Garder la parole : tu termines, et tu promets d’écouter.'),
    ex(E(1239), 'Plus ferme, mais toujours poli.'),
    ex(E(1246), 'Donner la parole, en nommant la personne.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['parole'],
};

const A3_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-trier',
  layer: 'core',
  size: 'lg',
  title: 'Prendre, garder, donner',
  groups: [
    grp('Prendre la parole', [
      it(E(1238), 'soutenu'),
      it(E(1244), 'rebondir'),
      it('fr.b1.affaires.1044', 'demander'),
      it('fr.b1.affaires.1141', 'interrompre'),
    ], chk(
      'Pour entrer dans la discussion avec un client, le plus naturel au B2 :',
      ['Si je peux me permettre, j’aimerais ajouter un point.', 'Moi, je veux dire quelque chose.'], 0,
      'La formule annonce ton intervention et la rend légitime. EN: the formula makes your entry legitimate.')),
    grp('La garder, puis la donner', [
      it(E(1247), 'garder'),
      it(E(1239), 'garder, plus ferme'),
      it(E(1251), 'protéger quelqu’un'),
      it(E(1246), 'donner'),
    ], chk(
      'On te coupe au milieu d’une phrase importante. Tu...',
      ['termines calmement, puis tu écoutes', 'parles plus fort', 'arrêtes et tu te tais'], 0,
      'Le calme garde la parole mieux que la voix. EN: calm holds the floor better than volume.')),
    ctl('Rebondir', '« Pour rebondir sur ce que dit Mathilde » : tu...',
      ['pars de son idée pour dire la tienne', 'la contredis', 'changes de sujet'], 0,
      'Rebondir, c’est relier ton idée à la sienne. EN: to pick up on her point.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['parole'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de perdre la parole',
  errors: [
    { wrong: 'Laissez-moi finir !', right: fr(E(1247)),
      why: 'Tu as raison de vouloir finir. Mais l’ordre, avec un point d’exclamation, fait monter la tension. EN: right instinct, too sharp a form.' },
    { wrong: 'C’est un bon point, Mathilde.', right: fr(E(1249)),
      why: 'Normal : good point se dit partout en anglais. En français, on parle d’une remarque juste, ou on dit « vous avez raison ». EN: good point is a calque.' },
    { wrong: 'Si je peux me permettre, j’aimerais additionner un point.', right: fr(E(1238)),
      why: 'Add, c’est ajouter. Additionner, c’est faire une addition, avec des chiffres. EN: to add a point is ajouter.' },
    { wrong: 'Attendez, attendez, moi je veux parler.', right: fr('fr.b1.affaires.1044'),
      why: 'L’envie de parler est légitime. Demande la parole, ou prends-la avec une formule : on te l’accordera. EN: ask for the floor instead of grabbing it.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['parole'],
};

const A3_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-atoi',
  layer: 'core',
  size: 'lg',
  title: 'À toi : ta place à la table',
  groups: [
    ctl('Entrer', 'Tu as une idée sur le volume, mais Mathilde parle encore. Tu attends sa fin de phrase, puis :',
      ['Pour rebondir sur ce que dit Mathilde, le volume change tout.', 'Non mais attendez, le volume.'], 0,
      'Tu relies ton idée à la sienne : elle se sent écoutée. EN: link your idea to hers.'),
    ctl('Garder', 'Julien te coupe au milieu du calendrier. Tu dis :',
      ['Un instant, je termine et je vous écoute.', 'Vous me coupez encore.'], 0,
      'Tu gardes la parole et tu lui promets la sienne. EN: keep it, and promise his turn.'),
    ctl('Protéger', 'Olivier essaie de parler depuis cinq minutes. Tu dis :',
      ['Olivier voulait dire quelque chose.', 'Olivier, tu ne dis rien.', 'Julien, taisez-vous.'], 0,
      'Tu ouvres la place pour quelqu’un d’autre, sans accuser personne. EN: make room without blaming.'),
    ctl('Remercier', 'Mathilde vient de faire une remarque juste. Tu réponds :',
      ['C’est une remarque très juste.', 'C’est un bon point.'], 0,
      'Bon point est un calque ; une remarque juste est française. EN: a fair remark.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['parole'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Entrer', 'Soutenu, pour prendre la parole :',
    ['si je peux me permettre', 'attendez'], 0,
    'Une formule qui demande sans couper. EN: if I may.'),
  ctl('Garder', 'On te coupe. Le mieux :',
    ['Un instant, je termine et je vous écoute.', 'Laissez-moi finir !', 'Tu te tais.'], 0,
    'Calme et clair. EN: calm and clear.'),
  ctl('Le calque', 'Good point, en français :',
    ['une remarque juste', 'un bon point'], 0,
    'Un bon point, c’est à l’école. EN: une remarque juste.'),
], ['parole']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Prendre et garder la parole',
    opener: {
      line: 'Une voix prend toute la place, et une autre attend depuis cinq minutes : ici tu entres, tu tiens, et tu passes la parole. EN: One voice takes all the room and another has waited five minutes: here you come in, hold on and hand over.',
      imageRef: 'lessons/reunions-negociation/act03.jpg',
    },
    sections: [],
    milestone: 'Tu prends la parole sans couper brutalement, tu la gardes calmement et tu la donnes clairement. EN: You take the floor without barging in, hold it calmly and hand it over clearly.',
    estScreens: 34, restPoints: ['a3-trier'],
  },
  sections: [A3_HISTOIRE, A3_EXEMPLES, A3_TRIER, A3_ERREURS, A3_ATOI, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 · REFORMULER ET CLARIFIER
 *
 *  A call with Mathilde: the learner asks for precision and reformulates,
 *  ending each reformulation on a check. Traps: élaborer sur, sur la même
 *  page, si je vous comprends correctement, the blunt « vous voulez dire
 *  quoi », the reformulation that asserts instead of checking.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Un appel pour tout vérifier',
  frSub: 'Écoute comment on s’assure d’avoir compris',
  lines: [
    ln(E(1253)), ln(E(1254)), ln(E(1255)), ln(E(1256)), ln(E(1257)),
    ln(E(1258)), ln(E(1259)), ln(E(1260)), ln(E(1261)), ln(E(1262)),
  ],
  questions: [
    { q: 'Quand Coworka veut-il le premier lot ?', opts: ['pour la rentrée, début septembre', 'avant Noël', 'en janvier'], correct: 0, why: 'La rentrée, que tu fais préciser : début septembre. EN: early September.' },
    { q: 'Combien de panneaux dans le premier lot ?', opts: ['environ deux cent cinquante', 'six cents'], correct: 0, why: 'Deux cent cinquante, et le reste d’ici la fin de l’année. EN: about 250.' },
    { q: 'Que fait la personne de Tessère avec « autrement dit » ?', opts: ['Elle reformule en deux livraisons.', 'Elle change de sujet.'], correct: 0, why: 'Elle redit l’idée avec ses mots, puis Mathilde confirme. EN: she restates it.' },
    { q: 'Pourquoi demande-t-elle ce que veut dire « en dernier » ?', opts: ['Le mot est vague : il faut une date.', 'Elle n’a pas entendu.'], correct: 0, why: 'Un mot flou devient une date : janvier au plus tard. EN: a vague word needs a date.' },
    { q: 'Comment finit l’appel ?', opts: ['par un récapitulatif', 'par un désaccord', 'par une commande'], correct: 0, why: 'Elle récapitule pour être sur la même longueur d’onde. EN: a summary.' },
  ],
  audio: REC('rec-b2-26-appel-ecoute'),
  say: REFRAME,
  terms: ['reformuler'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-nuancer',
  title: 'Vérifier avant de répondre',
  frSub: 'Cinq formules',
  hint: 'Cinq cartes. Les deux premières reformulent, la troisième demande, les deux dernières résument.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['reformuler'],
  cards: [
    card(E(1263), 'Reformuler', 'si je vous suis bien',
      `Suivre quelqu’un, c’est suivre son raisonnement. Plus soutenu que « si je comprends bien », que tu connais déjà. EN: if I follow you.`),
    card(E(1264), 'Redire autrement', 'autrement dit',
      'Tu redis l’idée avec d’autres mots, souvent plus concrets : des chiffres, des dates. EN: in other words.'),
    card(E(1265), 'Demander', 'préciser',
      'Pour un mot flou (la rentrée, bientôt, en dernier) : pourriez-vous préciser ? EN: could you be more specific.'),
    card(E(1267), 'Nommer ce qui compte', 'ce que j’entends',
      'Tu dis ce que tu as compris de ses priorités, pas seulement de ses mots. EN: what I am hearing is.'),
    card(E(1266), 'Être d’accord sur les faits', 'l’image juste',
      'Le français parle d’ondes, pas de pages. EN: on the same wavelength.'),
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Demander, reformuler, vérifier',
  groups: [
    grp('Demander une précision', [
      it(E(1256), 'combien'),
      it(E(1260), 'un mot flou'),
      it(E(1269), 'une hypothèse à vérifier'),
    ], chk(
      'La cliente dit : « Nous voulons les panneaux assez vite. » Tu demandes :',
      ['Pourriez-vous préciser la date qui vous conviendrait ?', 'D’accord, très vite.'], 0,
      '« Assez vite » ne se livre pas ; une date, si. EN: turn vague into precise.')),
    grp('Reformuler, puis vérifier', [
      it(E(1254), 'si je vous suis bien'),
      it(E(1258), 'autrement dit'),
      it(E(1272), 'une reformulation qui interroge'),
      it(E(1268), 'ce que j’entends'),
      it('fr.b1.strategies-de-comprehension.1336', 'plus simple'),
    ], chk(
      'Une bonne reformulation se termine souvent par...',
      ['une question ou une vérification', 'une décision', 'une remise'], 0,
      'L’autre doit pouvoir dire oui ou corriger. EN: let the other side confirm or correct.')),
    ctl('Le récapitulatif', 'Pourquoi récapituler à la fin d’un appel ?',
      ['Pour être sur la même longueur d’onde avant d’écrire l’offre.', 'Pour montrer qu’on a bonne mémoire.'], 0,
      'Une erreur comprise au téléphone coûte cher dans un contrat. EN: a misunderstanding is costly later.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reformuler'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  sheetId: 'sheet-variantes',
  title: 'Six façons de mal vérifier',
  rule: {
    title: 'Vérifier, en français',
    body: 'Élaborer sur, la même page : des calques de l’anglais. Une reformulation qui affirme au lieu de demander ferme la porte à la correction. Reformule, puis laisse l’autre confirmer. EN: avoid the calques, and end your reformulation on a check.',
  },
  cards: [
    trap('élaborer sur', 'Pouvez-vous élaborer sur ce point ?', E(1256), 'Élaborer, c’est construire un plan. Pour en savoir plus : préciser. EN: to elaborate is préciser.'),
    trap('la même page', 'Est-ce qu’on est sur la même page ?', E(1262), 'Le français dit la même longueur d’onde. EN: same wavelength, not same page.'),
    trap('correctement', 'Si je vous comprends correctement, vous parlez de septembre ?', E(1254), 'Les mots sont français, la formule non : si je vous suis bien. EN: the natural formula.'),
    trap('trop direct', 'Vous voulez dire quoi, là ?', E(1269), 'Familier et brusque avec une cliente. Reformule plutôt ton hypothèse. EN: too blunt with a client.'),
    trap('une affirmation', 'Autrement dit, vous payez plus et vous recevez plus tôt.', E(1272), 'Tu affirmes à sa place. Pose la question : elle pourra corriger. EN: reformulate as a question.'),
    trap('ce que j’entends est', 'Ce que j’entends est que le délai compte plus.', E(1268), 'À l’oral, on détache : ce que j’entends, c’est que. EN: the spoken frame is c’est que.'),
  ],
  drill: [
    { promptSay: 'Si je vous ... bien, vous parlez de septembre ?', opts: ['suis', 'comprends correctement'], correct: 0 },
    { promptSay: 'Pourriez-vous ... combien de panneaux il vous faut ?', opts: ['préciser', 'élaborer'], correct: 0 },
    { promptSay: 'Pour que nous soyons sur la même ... d’onde.', opts: ['longueur', 'page'], correct: 0 },
    { promptSay: '... dit, deux livraisons.', opts: ['Autrement', 'Différemment'], correct: 0 },
    { promptSay: 'Ce que j’entends, ... que le délai compte plus.', opts: ['c’est', 'est'], correct: 0 },
    { promptSay: 'Quand vous dites « en dernier », vous ... à quelle date ?', opts: ['pensez', 'réfléchissez'], correct: 0 },
    { promptSay: 'Je récapitule, pour que nous ... d’accord.', opts: ['soyons', 'sommes'], correct: 0 },
    { promptSay: 'Pourriez-vous ... ce point ?', opts: ['préciser', 'élaborer sur'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-b2-26-piege-reformuler'),
  say: REFRAME,
  terms: ['reformuler', 'variante'],
};

/** USE: write what you hear, one reformulation at a time. */
const A4_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a4-dictee',
  layer: 'core',
  title: 'À toi : écris les reformulations',
  itemIds: dicteeFor(4),
  audio: AUDIO,
  say: REFRAME,
  terms: ['reformuler'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La formule', 'If I follow you correctly :',
    ['si je vous suis bien', 'si je vous comprends correctement'], 0,
    'La formule naturelle. EN: si je vous suis bien.'),
  ctl('Le calque', 'On the same page, en français :',
    ['sur la même longueur d’onde', 'sur la même page'], 0,
    'Les ondes, pas les pages. EN: same wavelength.'),
  ctl('La fin', 'Ta reformulation se termine par...',
    ['une vérification', 'une affirmation', 'un ordre'], 0,
    'L’autre confirme ou corrige. EN: a check.'),
], ['reformuler']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Reformuler et clarifier',
    opener: {
      line: '« Pour la rentrée », « en dernier » : des mots qui ne se livrent pas. Ici tu fais préciser, tu reformules et tu vérifies. EN: “For the new term”, “last”: words you cannot deliver. Here you ask for precision, restate and check.',
      imageRef: 'lessons/reunions-negociation/act04.jpg',
    },
    sections: [],
    milestone: 'Tu transformes un mot flou en date, et chaque reformulation se termine par une vérification. EN: You turn vague words into dates, and every restatement ends on a check.',
    estScreens: 36, restPoints: ['a4-construire'],
  },
  sections: [A4_ECOUTE, A4_CARTES, A4_CONSTRUIRE, A4_PIEGE, A4_DICTEE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 · NUANCER UN DÉSACCORD
 *
 *  Builds on lesson 36 in B1 (acknowledge, qualify, propose) and goes past
 *  it: toutefois, je ne partage pas tout à fait, je crains que + subjonctif
 *  (ne explétif), j'aurais tendance à penser, the negative question that
 *  proposes. Use it: a role play with Olivier, in tu.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le compte rendu de mardi',
  frSub: 'Lis comment deux collègues ne sont pas d’accord',
  text: COMPTE_RENDU_TEXT,
  glossary: [
    { word: 'l’enjeu', en: 'what is at stake', note: 'Ce qu’on peut gagner ou perdre.' },
    { word: 'tenait', en: 'cared (about)', note: 'Tenir à quelque chose : y attacher de l’importance.' },
  ],
  questions: [
    { q: 'Global : quel est le but de cette réunion interne ?', a: 'Fixer une position commune avant la rencontre avec Coworka.' },
    { q: 'Détail : quelle position commune l’équipe adopte-t-elle ?', a: 'Dix pour cent au plus contre deux ans d’engagement, un premier lot en septembre, pas plus de soixante jours de paiement.' },
    { q: 'Inférence : Olivier est-il contre le contrat ?', a: 'Non : il craint les délais et la marge, pas le contrat. Il propose une autre solution.' },
    { q: 'Point de vue : comment Olivier montre-t-il son désaccord sans fermer la discussion ?', a: 'Il reconnaît le point de Nadia, nuance avec « toutefois » et « je crains que », puis pose une question qui propose.' },
  ],
  audio: REC('rec-b2-26-compte-rendu'),
  say: REFRAME,
  terms: ['nuance'],
};

const A5_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-tableau',
  layer: 'core',
  sheetId: 'sheet-nuancer',
  title: 'L’échelle du désaccord',
  cols: ['Formule', 'Force', 'Quand'],
  rows: [
    { cells: ['Je ne suis pas d’accord.', 'directe', 'entre collègues proches'], say: 'Je ne suis pas d’accord.',
      detail: { title: 'Direct', body: 'Juste, mais sec avec un client : rien n’adoucit. EN: correct, but flat with a client.', say: 'Je ne suis pas d’accord avec ce calendrier.' } },
    { cells: ['pas tout à fait d’accord', 'atténuée', 'partout'], say: fr('fr.b1.affaires.1126'),
      detail: { title: 'Atténué', body: `La formule de ${AFFAIRES_REF}. Au B2, ajoute la raison. EN: softened; now add the reason.`, say: fr('fr.b1.affaires.1133') } },
    { cells: ['je ne partage pas votre analyse', 'soutenue', 'avec un client, un chef'], say: fr(E(1285)),
      detail: { title: 'Soutenu', body: 'Tu contestes l’analyse, pas la personne. EN: you dispute the analysis, not the person.', say: fr(E(1285)) } },
    { cells: ['toutefois, cela dit', 'reconnaître, puis nuancer', 'toujours'], say: fr(E(1283)),
      detail: { title: 'Reconnaître d’abord', body: 'Vous n’avez pas tort ; cela dit... La moitié de l’autre est reconnue. EN: grant a point, then add yours.', say: fr(E(1274)) } },
    { cells: ['je crains que + subjonctif', 'une inquiétude', 'un risque réel'], say: fr(E(1278)),
      detail: { title: 'L’inquiétude', body: 'Subjonctif, souvent avec un ne qui ne nie rien : je crains que nous ne puissions pas. EN: a worry, in the subjunctive.', say: fr(E(1278)) } },
    { cells: ['Ne serait-il pas plus prudent de...', 'une proposition', 'pour finir'], say: fr(E(1279)),
      detail: { title: 'La question qui propose', body: 'La forme négative invite l’autre à dire oui. EN: a negative question that invites agreement.', say: fr(E(1279)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nuance'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Reconnaître, nuancer, proposer',
  groups: [
    grp('Reconnaître ce qui est juste', [
      it(E(1283), 'vous n’avez pas tort'),
      it('fr.b1.affaires.1138', 'raison sur un point'),
      it(E(1274), 'ton point de vue, toutefois'),
    ], chk(
      'Pourquoi reconnaître d’abord ce qui est juste chez l’autre ?',
      ['Il écoute la suite au lieu de se défendre.', 'Pour lui donner raison sur tout.'], 0,
      'Une personne reconnue baisse la garde. EN: acknowledged people listen.')),
    grp('Nuancer', [
      it(E(1281), 'une opinion prudente'),
      it(E(1278), 'une inquiétude'),
      it(E(1285), 'soutenu'),
      it(E(1286), 'un prix élevé, pas cher'),
      it('fr.b1.connecteurs-logiques.1584', 'toutefois, au milieu'),
    ], chk(
      'Je crains que nous ne ... pas livrer à temps.',
      ['puissions', 'pouvons', 'pourrons'], 0,
      'Craindre que + subjonctif. Le ne ne nie rien : c’est le ne explétif. EN: subjunctive after craindre que.')),
    ctl('Proposer', 'Pour finir ton désaccord, le plus efficace :',
      ['Ne serait-il pas plus prudent de proposer huit pour cent ?', 'Bref, je suis contre.'], 0,
      'Une question qui propose laisse l’autre choisir. EN: end on a proposal.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nuance'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre désaccords qui coincent',
  errors: [
    { wrong: 'Je crains que nous ne pouvons pas livrer à temps.', right: fr(E(1278)),
      why: 'Craindre est une inquiétude, pas un fait : il demande le subjonctif, puissions. EN: craindre que takes the subjunctive.' },
    { wrong: 'Votre prix est trop cher pour ce volume.', right: fr(E(1286)),
      why: 'En anglais, a price is expensive passe. En français, un produit est cher, un prix est élevé. EN: a price is élevé, not cher.' },
    { wrong: 'Vous avez tort, le volume ne suffit pas.', right: fr(E(1283)),
      why: 'Le fond est peut-être juste, mais « vous avez tort » attaque la personne. Reconnais d’abord ce qui tient. EN: grant a point first.' },
    { wrong: 'C’est un bon point, mais le volume ne suffit pas.', right: fr(E(1283)),
      why: 'Good point, but... se traduit mot à mot, et sonne anglais. Vous n’avez pas tort ; cela dit... EN: good point is a calque.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nuance'],
};

/** USE, out loud: Olivier challenges you; you disagree with nuance, in tu.
 *  ONE APOSTROPHE STYLE (’) in every turn and alt. */
const A5_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a5-scenario',
  layer: 'core',
  title: 'À toi : Olivier n’est pas d’accord',
  setting: 'Après la réunion, Olivier passe à ton bureau. Il trouve la remise trop forte. Tu n’es pas de son avis, mais tu travailles avec lui tous les jours : tu nuances, en tu.',
  turns: [
    {
      ai: 'Franchement, dix pour cent de remise, c’est une folie.',
      en: 'Frankly, a ten per cent discount is madness.',
      user: 'Tu n’as pas tort, c’est beaucoup ; cela dit, sans remise, nous perdons le contrat.',
      userEn: 'You are not wrong, it is a lot; that said, without a discount we lose the contract. (Acknowledge, then cela dit.)',
      alts: [
        { fr: 'Je comprends ton point de vue ; toutefois, Coworka ne signera pas sans remise.', en: 'I understand your point of view; however, Coworka will not sign without a discount.' },
        { fr: 'C’est beaucoup, oui. Mais il y a deux ans de travail derrière.', en: 'It is a lot, yes. But there are two years of work behind it. (Simpler, still nuanced.)' },
      ],
    },
    {
      ai: 'Et l’atelier ? On ne livrera jamais six cents panneaux en septembre.',
      en: 'And the workshop? We will never deliver six hundred panels in September.',
      user: 'Là-dessus, je te rejoins : je crains que nous ne puissions pas tout livrer d’un coup.',
      userEn: 'On that, I agree with you: I am afraid we cannot deliver everything at once. (Craindre que + subjunctive.)',
      alts: [
        { fr: 'Tu as raison sur ce point : tout livrer en septembre, ce serait trop.', en: 'You are right on that point: delivering everything in September would be too much.' },
        { fr: 'D’accord avec toi sur ce point précis.', en: 'I agree with you on that precise point.' },
      ],
    },
    {
      ai: 'Donc on refuse ?',
      en: 'So we refuse?',
      user: 'Non. J’aurais tendance à penser qu’une livraison en deux fois règle le problème.',
      userEn: 'No. I would tend to think that delivering in two batches solves the problem. (A cautious opinion.)',
      alts: [
        { fr: 'Non, ne serait-il pas plus simple de livrer en deux fois ?', en: 'No, would it not be simpler to deliver in two batches? (A question that proposes.)' },
        { fr: 'Refuser, non. Livrer en deux fois, oui.', en: 'Refuse, no. Deliver in two batches, yes.' },
      ],
    },
    {
      ai: 'Deux fois… Mais la marge reste faible.',
      en: 'Two batches… But the margin is still thin.',
      user: 'Sur la marge, nous ne sommes pas du même avis, et c’est normal : on pourrait demander les chiffres à Kim.',
      userEn: 'On the margin we do not see things the same way, and that is fine: we could ask Kim for the figures. (Name the disagreement, then propose.)',
      alts: [
        { fr: 'Je ne partage pas tout à fait ton analyse : sur deux ans, la marge tient.', en: 'I do not entirely share your analysis: over two years, the margin holds.' },
        { fr: 'On n’est pas d’accord là-dessus ; vérifions les chiffres ensemble.', en: 'We do not agree on that; let us check the figures together.' },
      ],
    },
    {
      ai: 'D’accord. Si les chiffres tiennent, je te suis.',
      en: 'All right. If the figures hold up, I am with you.',
      user: 'Merci. Je t’envoie tout ça avant midi.',
      userEn: 'Thank you. I will send you all that before noon.',
      alts: [
        { fr: 'Parfait, je demande les chiffres à Kim tout de suite.', en: 'Perfect, I will ask Kim for the figures right away.' },
        { fr: 'Merci, on en reparle demain avec les chiffres.', en: 'Thank you, we will talk again tomorrow with the figures.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nuance'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('L’ordre', 'Un désaccord de B2 commence par...',
    ['ce qui est juste chez l’autre', 'ton objection la plus forte'], 0,
    'Reconnaître, nuancer, proposer. EN: acknowledge first.'),
  ctl('Le mode', 'Je crains que le délai ne ... trop court.',
    ['soit', 'est', 'sera'], 0,
    'Subjonctif après craindre que. EN: soit.'),
  ctl('Le prix', 'A high price :',
    ['un prix élevé', 'un prix cher'], 0,
    'Le produit est cher ; le prix est élevé. EN: élevé.'),
], ['nuance']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Nuancer un désaccord',
    opener: {
      line: 'Ton collègue n’est pas d’accord, et il a en partie raison : ici tu dis non à une idée sans fermer la discussion. EN: Your colleague disagrees and is partly right: here you say no to an idea without closing the discussion.',
      imageRef: 'lessons/reunions-negociation/act05.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais ce qui est juste, tu nuances au conditionnel ou au subjonctif, et tu finis sur une proposition. EN: You grant what is right, qualify in the conditional or subjunctive, and end on a proposal.',
    estScreens: 38, restPoints: ['a5-tableau', 'a5-erreurs'],
  },
  sections: [A5_LECTURE, A5_TABLEAU, A5_CONSTRUIRE, A5_ERREURS, A5_SCENARIO, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 · PROPOSER ET CONTRE-PROPOSER
 *
 *  The price negotiation, by ear: an ask, a counter-proposal, a Belgian
 *  « nonante », a France « revenir vers vous ». Traps: si + conditionnel,
 *  proposer que + indicatif, vous revenir, considérer, un discount.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le prix, point par point',
  frSub: 'Écoute qui propose quoi, et en échange de quoi',
  lines: [
    ln(E(1290)), ln(E(1291)), ln(E(1292)), ln(E(1293)), ln(E(1294)), ln(E(1295)),
    ln(E(1296)), ln(E(1297)), ln(E(1298)), ln(E(1299)), ln(E(1300)),
  ],
  questions: [
    { q: 'Quelle remise Coworka demande-t-il d’abord ?', opts: ['quinze pour cent', 'dix pour cent', 'huit pour cent'], correct: 0, why: 'Quinze, sous forme de question : que diriez-vous de... EN: fifteen.' },
    { q: 'Que propose Tessère en échange de dix pour cent ?', opts: ['un engagement de deux ans', 'un paiement immédiat'], correct: 0, why: 'Dix pour cent sur deux ans : une condition. EN: a two-year commitment.' },
    { q: 'Julien propose de tout commander tout de suite. La réponse :', opts: ['huit pour cent et la livraison offerte', 'quinze pour cent', 'un refus'], correct: 0, why: 'Une contre-proposition : un autre chiffre, un autre avantage. EN: a counter-proposal.' },
    { q: 'Julien dit « nonante jours ». Il veut dire...', opts: ['quatre-vingt-dix jours', 'dix-neuf jours'], correct: 0, why: 'En Belgique et en Suisse, nonante veut dire quatre-vingt-dix. EN: ninety, in Belgium.' },
    { q: 'Comment finit l’extrait ?', opts: ['Coworka veut en discuter et répondre demain.', 'Le contrat est signé.'], correct: 0, why: 'Revenir vers vous : très courant en France au travail. EN: they will get back tomorrow.' },
  ],
  audio: REC('rec-b2-26-prix-ecoute'),
  say: REFRAME,
  terms: ['contreoffre', 'variante'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-negocier',
  title: 'Proposer sans imposer',
  frSub: 'Cinq formules de la table',
  hint: 'Cinq cartes. Toutes laissent l’autre répondre.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['contreoffre', 'variante'],
  cards: [
    card(E(1301), 'Proposer en demandant', 'que diriez-vous',
      'Ta proposition devient une question : l’autre peut refuser sans perdre la face. EN: a proposal framed as a question.'),
    card(E(1303), 'Proposer sans promettre', 'envisager',
      'Le conditionnel pose une piste qui n’engage encore personne. Envisager, pas considérer. EN: we could consider.'),
    card(E(1302), 'Répondre par une offre', 'la contre-offre',
      'Tu ne dis pas seulement non : tu mets un autre chiffre à la place. EN: a counter-proposal.'),
    card(E(1304), 'Élargir', 'une option de plus',
      'Mettre une autre option sur la table : une autre durée, un autre volume. EN: put on the table.'),
    card(E(1307), 'France, au travail', 'la variante',
      'Nous revenons vers vous demain : très courant en France. Au Québec : je vous donne des nouvelles. EN: to get back to someone.'),
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Une offre, une réponse',
  groups: [
    grp('Proposer', [
      it(E(1291), 'que diriez-vous de'),
      it(E(1306), 'et si + imparfait'),
      it(E(1305), 'mettre sur la table'),
      it('fr.b1.affaires.1135', 'je propose plutôt'),
    ], chk(
      'Et si on ... d’abord le calendrier ?',
      ['regardait', 'regarderait', 'regarde'], 0,
      'Et si + imparfait : une suggestion douce. Jamais de conditionnel après si. EN: et si + imperfect.')),
    grp('Contre-proposer', [
      it(E(1292), 'la limite'),
      it(E(1293), 'en revanche'),
      it(E(1295), 'la contre-proposition'),
      it(E(1299), 'ce que nous pouvons offrir'),
    ], chk(
      'Une contre-proposition efficace contient...',
      ['un autre chiffre et une raison', 'un simple refus', 'la même offre, répétée'], 0,
      'Elle dit non à l’offre et oui à la discussion. EN: a new figure and a reason.')),
    ctl('Nonante', 'Un client de Bruxelles parle de nonante jours. Tu...',
      ['comprends quatre-vingt-dix et continues', 'le corriges'], 0,
      'Nonante est juste en Belgique et en Suisse. EN: it is right there.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contreoffre', 'variante'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  sheetId: 'sheet-variantes',
  title: 'Six propositions qui déraillent',
  rule: {
    title: 'Si + imparfait, proposer que + subjonctif',
    body: 'Après si, jamais de conditionnel : si nous baissions. Après proposer que, le subjonctif : que vous payiez. Et trois calques : vous revenir, considérer, un discount. EN: no conditional after si; subjunctive after proposer que.',
  },
  cards: [
    trap('si + conditionnel', 'Que diriez-vous si nous baisserions le prix de huit pour cent ?', E(1308), 'Le conditionnel va dans l’autre partie : diriez-vous. Après si, l’imparfait. EN: si + imperfect.'),
    trap('proposer que', 'Je vous propose que vous payez à soixante jours.', E(1309), 'Proposer que + subjonctif : payiez. EN: subjunctive.'),
    trap('vous revenir', 'Laissez-nous en discuter, et nous vous revenons demain.', E(1300), 'Calque de to get back to you, fréquent au Québec. On revient vers quelqu’un, ou on lui donne des nouvelles. EN: a calque.'),
    trap('considérer', 'Nous pourrions considérer dix pour cent sur deux ans.', E(1293), 'Envisager une solution ; considérer, c’est regarder ou juger. EN: envisager.'),
    trap('un discount', 'Je vous offre un discount de dix pour cent.', 'fr.b1.affaires.1085', 'Une remise, qu’on accorde. EN: a discount is une remise.'),
    trap('si + conditionnel', 'Et si nous commanderions tout d’un coup ?', E(1294), 'Et si nous commandions : l’imparfait, toujours. EN: imperfect after si.'),
  ],
  drill: [
    { promptSay: 'Que diriez-vous si nous ... le prix ?', opts: ['baissions', 'baisserions'], correct: 0 },
    { promptSay: 'Je vous propose que vous ... à soixante jours.', opts: ['payiez', 'payez'], correct: 0 },
    { promptSay: 'Nous pourrions ... dix pour cent sur deux ans.', opts: ['envisager', 'considérer'], correct: 0 },
    { promptSay: 'Nous ... vers vous demain.', opts: ['revenons', 'vous revenons'], correct: 0 },
    { promptSay: 'Et si on ... d’abord le calendrier ?', opts: ['regardait', 'regarderait'], correct: 0 },
    { promptSay: '... d’une remise de quinze pour cent ?', opts: ['Que diriez-vous', 'Que direz-vous'], correct: 0 },
    { promptSay: 'Je vous fais une ... : huit pour cent.', opts: ['contre-proposition', 'contre-attaque'], correct: 0 },
    { promptSay: 'Nous pouvons vous accorder une ... de dix pour cent.', opts: ['remise', 'discount'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-b2-26-piege-proposer'),
  say: REFRAME,
  terms: ['contreoffre', 'variante'],
};

const A6_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-atoi',
  layer: 'core',
  size: 'lg',
  title: 'À toi : ta réplique',
  groups: [
    ctl('Quinze pour cent', 'Mathilde : « Que diriez-vous d’une remise de quinze pour cent ? » Tu réponds :',
      ['Quinze, nous ne pouvons pas aller jusque-là ; en revanche, nous pourrions envisager dix sur deux ans.', 'Non.', 'D’accord, quinze.'], 0,
      'Ta limite, puis une contre-proposition. EN: a limit, then a counter-offer.'),
    ctl('Le paiement', 'Julien veut payer à nonante jours. Tu proposes :',
      ['Ce que nous pouvons vous offrir, c’est soixante jours, sans frais.', 'Nonante jours, jamais de la vie.'], 0,
      'Tu nommes ce que tu peux donner, pas seulement ce que tu refuses. EN: say what you can give.'),
    ctl('Élargir', 'Le prix bloque. Tu ouvres une autre piste :',
      ['Je mets une autre option sur la table : un contrat de trois ans.', 'Tant pis pour le prix.'], 0,
      'Une autre durée change le calcul pour les deux. EN: another option changes the maths.'),
    ctl('Répondre plus tard', 'Tu as besoin de l’avis de Nadia. À Lyon, tu dis :',
      ['Laissez-nous en discuter, et nous revenons vers vous demain.', 'Nous vous revenons demain.'], 0,
      'Revenir vers vous, en France. Vous revenir est un calque. EN: get back to you.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contreoffre'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le mode', 'Que diriez-vous si nous ... le paiement ?',
    ['avancions', 'avancerions'], 0,
    'Si + imparfait. EN: imperfect.'),
  ctl('La contre-offre', 'Une contre-proposition dit...',
    ['non à l’offre, oui à la discussion', 'non à tout'], 0,
    'Un autre chiffre, et la table reste ouverte. EN: no to the offer, yes to the talk.'),
  ctl('Le calque', 'We could consider ten per cent :',
    ['nous pourrions envisager dix pour cent', 'nous pourrions considérer dix pour cent'], 0,
    'Envisager. EN: envisager.'),
], ['contreoffre']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Proposer et contre-proposer',
    opener: {
      line: 'Quinze pour cent d’un côté, huit de l’autre : ici tu réponds à une offre par une autre, sans jamais fermer la table. EN: Fifteen per cent on one side, eight on the other: here you answer an offer with another offer.',
      imageRef: 'lessons/reunions-negociation/act06.jpg',
    },
    sections: [],
    milestone: 'Tu proposes en posant une question, tu contre-proposes avec un chiffre et une raison, et tu ne mets jamais de conditionnel après si. EN: You propose as a question, counter with a figure and a reason, and never put a conditional after si.',
    estScreens: 40, restPoints: ['a6-construire', 'a6-piege'],
  },
  sections: [A6_ECOUTE, A6_CARTES, A6_CONSTRUIRE, A6_PIEGE, A6_ATOI, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 · CÉDER POUR OBTENIR
 *
 *  A magazine column gives three rules: never concede without something in
 *  return, concede slowly, name the concession; and know your threshold.
 *  Errors: à condition que + indicatif, the naked concession, the aggressive
 *  refusal, the concession nobody notices.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Céder sans perdre',
  frSub: 'Une chronique du Cahier des PME',
  text: CEDER_TEXT,
  glossary: [
    { word: 'rapporte', en: 'pays off', note: 'Rapporter : donner un bénéfice.' },
    { word: 'Paradoxalement', en: 'Paradoxically', note: 'Contre ce qu’on attendrait.' },
  ],
  questions: [
    { q: 'Global : quelle est la thèse de la chronique ?', a: 'Céder n’est pas perdre, si l’on cède avec méthode : contre une contrepartie, lentement, en le disant.' },
    { q: 'Détail : pourquoi céder par petites étapes ?', a: 'Trois pour cent, puis deux, puis un montrent qu’on approche de la limite ; dix d’un coup laisse croire qu’il en reste.' },
    { q: 'Inférence : que se passe-t-il quand on baisse son prix parce que le silence gêne ?', a: 'On donne quelque chose qui n’était pas demandé, et on n’obtient rien en échange.' },
    { q: 'Point de vue : l’auteur approuve-t-il le refus ? Comment le sais-tu ?', a: 'Oui, s’il est calme : « c’est souvent ce refus calme qui fait avancer la discussion ».' },
  ],
  audio: REC('rec-b2-26-ceder'),
  say: REFRAME,
  terms: ['contrepartie'],
};

const A7_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a7-focus',
  layer: 'core',
  sheetId: 'sheet-negocier',
  title: 'Trois règles, une limite',
  points: [
    'Rien sans contrepartie : je peux faire un geste, à condition que vous... EN: never give without getting.',
    'Lentement : trois pour cent, puis deux. Un grand geste d’un coup laisse croire qu’il en reste. EN: concede in small steps.',
    'Nomme ta concession : nous faisons un effort sur ce point. Sinon, elle ne compte pas. EN: name what you give.',
    'Connais ton seuil avant d’entrer, et dis calmement : là, nous ne pouvons pas vous suivre. EN: know your bottom line.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contrepartie'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Céder, ou tenir',
  groups: [
    grp('Une concession qui rapporte', [
      it(E(1313), 'un geste et sa condition'),
      it(E(1315), 'en contrepartie'),
      it(E(1322), 'seulement si'),
      it(E(1323), 'soit… soit'),
      it('fr.b1.opinions-et-avis.1336', 'la charnière'),
    ], chk(
      'Je peux faire un geste, à condition que vous vous ... sur la durée.',
      ['engagiez', 'engagez', 'engagerez'], 0,
      'À condition que + subjonctif. EN: subjunctive after à condition que.')),
    grp('Un refus calme', [
      it(E(1317), 'la limite'),
      it(E(1318), 'la dernière offre'),
      it(E(1320), 'céder ici, pas là'),
      it(E(1316), 'nommer l’effort'),
    ], chk(
      'Selon la chronique, un refus calme...',
      ['fait souvent avancer la discussion', 'met toujours fin à la négociation'], 0,
      'L’autre comprend qu’il a atteint le vrai prix. EN: it shows the real limit.')),
    ctl('Le seuil', 'Ton seuil, tu le fixes...',
      ['avant d’entrer dans la salle', 'quand la cliente insiste'], 0,
      'Pendant la discussion, la pression le ferait bouger. EN: before, not during.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contrepartie', 'condition'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre concessions perdues',
  errors: [
    { wrong: 'Je peux faire un geste, à condition que vous vous engagez sur la durée.', right: fr(E(1313)),
      why: 'La condition n’est pas encore réalisée : à condition que demande le subjonctif, engagiez. EN: subjunctive after à condition que.' },
    { wrong: 'D’accord, on baisse de dix pour cent, pas de problème.', right: fr(E(1315)),
      why: 'Tu veux débloquer, c’est normal. Mais tu donnes dix pour cent sans rien demander. Demande l’engagement en échange. EN: never concede for nothing.' },
    { wrong: 'Non, là, c’est ridicule, vous exagérez.', right: fr(E(1317)),
      why: 'Ta limite est réelle, mais l’attaque fait de la limite une dispute. Dis-la calmement. EN: state the limit without attacking.' },
    { wrong: 'Bon, on vous met la livraison gratuite aussi.', right: fr(E(1316)),
      why: 'Un geste glissé en passant ne compte pas. Nomme-le, pour qu’il pèse dans la suite. EN: name the concession so it counts.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contrepartie'],
};

const A7_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-atoi',
  layer: 'core',
  size: 'lg',
  title: 'À toi : ce que tu cèdes',
  groups: [
    ctl('Le silence', 'Mathilde se tait depuis dix secondes après ton prix. Tu...',
      ['attends, ou tu demandes ce qui la gêne', 'baisses ton prix pour remplir le silence'], 0,
      'Le silence n’est pas une demande. EN: silence is not a request.'),
    ctl('Le geste', 'Tu es prêt à céder deux pour cent. Tu dis :',
      ['Je peux faire un geste sur le prix, à condition que vous vous engagiez sur la durée.', 'Allez, deux pour cent de moins.'], 0,
      'Le geste et sa contrepartie, dans la même phrase. EN: the gesture and its price.'),
    ctl('Le choix', 'Tu veux forcer un choix clair :',
      ['Soit vous prenez les six cents panneaux, soit nous gardons le prix actuel.', 'Prenez ce que vous voulez.', 'On verra plus tard.'], 0,
      'Soit… soit : deux portes, les deux acceptables pour toi. EN: either… or.'),
    ctl('La limite', 'On te demande encore trois pour cent, sous ton seuil. Tu dis :',
      ['Là, nous ne pouvons pas vous suivre.', 'Bon, d’accord, pour vous faire plaisir.'], 0,
      'Calme, clair, sans reproche. EN: a calm no at the threshold.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contrepartie'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La règle', 'On ne cède jamais...',
    ['sans contrepartie', 'le premier jour'], 0,
    'Rien sans rien. EN: never for nothing.'),
  ctl('Le mode', 'À condition que l’acompte ... versé à la signature.',
    ['soit', 'est', 'sera'], 0,
    'À condition que + subjonctif. EN: soit.'),
  ctl('Le rythme', 'Pour montrer qu’on approche de la limite :',
    ['trois pour cent, puis deux', 'dix pour cent d’un coup'], 0,
    'Des gestes qui rétrécissent. EN: shrinking steps.'),
], ['contrepartie']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Céder pour obtenir',
    opener: {
      line: 'Le silence devient gênant, et ton prix a envie de baisser tout seul : ici tu cèdes, mais jamais sans contrepartie. EN: The silence gets awkward and your price wants to drop by itself: here you give ground, but never for nothing.',
      imageRef: 'lessons/reunions-negociation/act07.jpg',
    },
    sections: [],
    milestone: 'Tu cèdes contre une contrepartie, par petites étapes, et tu sais dire calmement que tu as atteint ta limite. EN: You give ground for something in return, in small steps, and can calmly say you have reached your limit.',
    estScreens: 34, restPoints: ['a7-construire'],
  },
  sections: [A7_LECTURE, A7_FOCUS, A7_CONSTRUIRE, A7_ERREURS, A7_ATOI, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 · L'OFFRE CONDITIONNELLE
 *
 *  The written offer: si + présent (firm), si + imparfait (hypothesis),
 *  sous réserve de, moyennant, dans le cas de, à condition que, and the
 *  gérondif of condition. Recalls lesson 10 in B1 (si clauses).
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La proposition de Tessère',
  frSub: 'Lis chaque condition',
  text: OFFRE_TEXT,
  glossary: [
    { word: 'forfait', en: 'flat fee', note: 'Un prix fixe, quel que soit le temps passé.' },
    { word: 'ramenée', en: 'brought down', note: 'Ramener à : réduire jusqu’à.' },
  ],
  questions: [
    { q: 'Global : quelle est la fonction de ce texte ?', a: 'C’est l’offre écrite qui suit la rencontre : elle fixe le volume, le prix, la livraison, le paiement et une option.' },
    { q: 'Détail : que se passe-t-il si Coworka ne commande que pour un an ?', a: 'La remise serait ramenée à cinq pour cent.' },
    { q: 'Inférence : pourquoi l’option de formation est-elle au conditionnel, avec si + imparfait ?', a: 'C’est une hypothèse : Tessère ne l’impose pas, le client choisira.' },
    { q: 'Point de vue : quel ton choisit Nadia ? Comment le sais-tu ?', a: 'Confiant mais ouvert : « nous sommes convaincus » puis « nous restons à votre disposition pour en discuter ».' },
  ],
  audio: REC('rec-b2-26-offre'),
  say: REFRAME,
  terms: ['hypothese', 'condition'],
};

const A8_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-tableau',
  layer: 'core',
  sheetId: 'sheet-negocier',
  title: 'Six façons de poser une condition',
  cols: ['Structure', 'Ce qu’elle dit', 'Mode'],
  rows: [
    { cells: ['si + présent', 'une offre ferme', 'futur ensuite'], say: fr(E(1328)),
      detail: { title: 'L’offre ferme', body: `Si vous confirmez, nous appliquerons : c’est promis. Les bases sont dans ${SI_REF}. EN: a firm promise.`, say: fr(E(1342)) } },
    { cells: ['si + imparfait', 'une hypothèse', 'conditionnel ensuite'], say: fr(E(1329)),
      detail: { title: 'L’hypothèse', body: 'Si vous vous engagiez, nous pourrions : une piste, pas encore une promesse. EN: a hypothesis.', say: fr(E(1329)) } },
    { cells: ['si + présent, conditionnel', 'une offre adoucie', 'fréquent à l’oral'], say: fr(E(1330)),
      detail: { title: 'L’offre adoucie', body: 'Si vous vous engagez, nous pourrions : la condition est réelle, la promesse reste prudente. EN: a real condition, a cautious promise.', say: fr(E(1330)) } },
    { cells: ['à condition que', 'une condition exigée', 'subjonctif'], say: fr(E(1338)),
      detail: { title: 'La condition exigée', body: 'À condition que l’acompte soit versé : sans ça, rien. EN: a required condition, subjunctive.', say: fr(E(1313)) } },
    { cells: ['sous réserve de + nom', 'une réserve, à l’écrit', 'soutenu'], say: fr(E(1332)),
      detail: { title: 'La réserve', body: 'Suivi d’un nom : sous réserve de la validation. Jamais « sous réserve que vous validez ». EN: subject to + noun.', say: fr(E(1332)) } },
    { cells: ['moyennant + nom', 'contre un paiement', 'soutenu'], say: fr(E(1334)),
      detail: { title: 'Contre un prix', body: 'Moyennant un forfait : en échange d’une somme. EN: for a fee.', say: fr(E(1334)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese', 'condition'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ferme ou hypothétique',
  groups: [
    grp('Une offre ferme', [
      it(E(1328), 'si + présent, futur'),
      it(E(1342), 'si + présent, futur'),
      it(E(1338), 'à condition que'),
      it(E(1340), 'une durée de validité'),
    ], chk(
      'Si vous confirmez avant le trente juin, nous ... une remise.',
      ['appliquerons', 'appliquerions', 'appliquions'], 0,
      'Si + présent, puis futur : une offre ferme. EN: si + present, then future.')),
    grp('Une hypothèse', [
      it(E(1329), 'si + imparfait'),
      it(E(1335), 'dans le cas de'),
      it(E(1339), 'en + participe présent'),
      it(E(1334), 'moyennant'),
    ], chk(
      'En vous engageant sur deux ans, vous obtiendriez... Le gérondif dit ici...',
      ['une condition : si vous vous engagiez', 'un moment : pendant que vous vous engagez'], 0,
      'Le gérondif peut porter une condition. EN: the gérondif as a condition.')),
    ctl('Sous réserve', 'Laquelle est juste ?',
      ['sous réserve de la validation des couleurs', 'sous réserve que vous validez les couleurs'], 0,
      'Sous réserve de + nom. EN: subject to + noun.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Six offres mal construites',
  rule: {
    title: 'Jamais si + conditionnel',
    body: 'Si + présent ou si + imparfait ; le conditionnel va dans l’autre partie. À condition que appelle le subjonctif, sous réserve de et moyennant appellent un nom. EN: no conditional after si; subjunctive after à condition que; a noun after sous réserve de.',
  },
  cards: [
    trap('si + conditionnel', 'Si vous vous engageriez sur trois ans, nous pourrions baisser encore le prix.', E(1329), 'Si vous vous engagiez : l’imparfait après si. EN: imperfect after si.'),
    trap('à condition que', 'Le paiement se fera à soixante jours, à condition que l’acompte est versé.', E(1338), 'À condition que + subjonctif : soit versé. EN: subjunctive.'),
    trap('sous réserve que', 'Le premier lot sera livré en septembre, sous réserve que vous validez les couleurs.', E(1332), 'Sous réserve de + nom : de la validation. EN: subject to + noun.'),
    trap('si + futur', 'Si vous confirmerez la commande, nous appliquerons la remise.', E(1328), 'Si vous confirmez : le présent après si, même pour le futur. EN: present after si.'),
    trap('le gérondif', 'En vous engagez sur deux ans, vous obtiendriez la remise complète.', E(1339), 'En + participe présent : en vous engageant. EN: en + present participle.'),
    trap('moyennant que', 'Nous pourrions former vos équipes, moyennant que vous payez un forfait.', E(1334), 'Moyennant + nom : moyennant un forfait. EN: moyennant + noun.'),
  ],
  drill: [
    { promptSay: 'Si vous ... la commande, nous appliquerons la remise.', opts: ['confirmez', 'confirmerez', 'confirmeriez'], correct: 0 },
    { promptSay: 'Si vous vous ... sur trois ans, nous pourrions baisser le prix.', opts: ['engagiez', 'engageriez'], correct: 0 },
    { promptSay: 'À condition que l’acompte ... versé à la signature.', opts: ['soit', 'est'], correct: 0 },
    { promptSay: 'Sous réserve ... la validation des couleurs.', opts: ['de', 'que'], correct: 0 },
    { promptSay: 'En vous ... sur deux ans, vous obtiendriez la remise.', opts: ['engageant', 'engagez'], correct: 0 },
    { promptSay: '... un forfait de huit cents euros.', opts: ['Moyennant', 'Moyennant que'], correct: 0 },
    { promptSay: 'Dans le cas d’une commande sur un an, la remise ... de cinq pour cent.', opts: ['serait', 'soit'], correct: 0 },
    { promptSay: 'Si le premier lot vous convient, nous ... le second en décembre.', opts: ['livrerons', 'livrions'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-b2-26-piege-offre'),
  say: REFRAME,
  terms: ['hypothese'],
};

/** USE: write the conditions you hear. */
const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a8-dictee',
  layer: 'core',
  title: 'À toi : écris les conditions',
  itemIds: dicteeFor(8),
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Ferme', 'Une offre ferme :',
    ['Si vous confirmez, nous appliquerons la remise.', 'Si vous confirmiez, nous pourrions appliquer la remise.'], 0,
    'Si + présent, futur. EN: firm.'),
  ctl('Jamais', 'Après si, on ne met jamais...',
    ['le conditionnel', 'l’imparfait', 'le présent'], 0,
    'Le conditionnel va dans l’autre partie. EN: never the conditional.'),
  ctl('La réserve', 'Sous réserve ... votre accord.',
    ['de', 'que'], 0,
    'Sous réserve de + nom. EN: de.'),
], ['hypothese']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'L’offre conditionnelle',
    opener: {
      line: 'Une offre écrite où chaque promesse a sa condition : ici tu choisis entre promettre, proposer une piste ou poser une réserve. EN: A written offer where every promise has its condition: here you choose between promising, suggesting and reserving.',
      imageRef: 'lessons/reunions-negociation/act08.jpg',
    },
    sections: [],
    milestone: 'Tu fais une offre ferme avec si + présent, une hypothèse avec si + imparfait, et tu poses tes réserves sans jamais mettre de conditionnel après si. EN: You make firm offers, hypotheses and reservations, never with a conditional after si.',
    estScreens: 38, restPoints: ['a8-tableau', 'a8-piege'],
  },
  sections: [A8_LECTURE, A8_TABLEAU, A8_CONSTRUIRE, A8_PIEGE, A8_DICTEE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 · PERSUADER
 *
 *  The TEF section B move: present, give your view, then climb the
 *  objection ladder (name the objection, answer with « justement »), make
 *  it concrete for the listener, end on a request. Nadia persuades Olivier
 *  by ear; the learner persuades Kim in the role play.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Nadia convainc Olivier',
  frSub: 'Compte les objections, et écoute les réponses',
  lines: [
    ln(E(1343)), ln(E(1344)), ln(E(1345)), ln(E(1346)), ln(E(1347)), ln(E(1348)),
    ln(E(1349)), ln(E(1350)), ln(E(1351)), ln(E(1352)), ln(E(1353)),
  ],
  questions: [
    { q: 'Combien d’objections Nadia nomme-t-elle avant Olivier ?', opts: ['trois', 'une', 'cinq'], correct: 0, why: 'L’atelier plein, la marge, le risque de retard : une échelle, du plus visible au plus profond. EN: three.' },
    { q: 'Comment répond-elle à l’atelier plein ?', opts: ['Le contrat permettrait d’embaucher.', 'L’atelier n’est pas plein.'], correct: 0, why: 'Justement : l’objection devient un argument. EN: the objection becomes the argument.' },
    { q: 'Quelle crainte d’Olivier est, selon elle, la vraie ?', opts: ['le retard', 'la marge', 'les couleurs'], correct: 0, why: 'Ce qui te retient vraiment, je crois : la dernière marche de l’échelle. EN: the delay.' },
    { q: 'Que fait « imagine un peu » ?', opts: ['Il rend l’avantage concret.', 'Il pose une question technique.'], correct: 0, why: 'Douze espaces, deux villes : une image, pas une abstraction. EN: it makes the benefit concrete.' },
    { q: 'Olivier finit par...', opts: ['demander les chiffres', 'refuser', 'signer tout de suite'], correct: 0, why: 'Presque convaincu : il veut vérifier. EN: he asks for the figures.' },
  ],
  audio: REC('rec-b2-26-persuader-ecoute'),
  say: REFRAME,
  terms: ['objection'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-examen',
  title: 'L’échelle des objections',
  frSub: 'Cinq formules pour convaincre',
  hint: 'Cinq cartes, dans l’ordre d’un bon plaidoyer.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['objection', 'grille'],
  cards: [
    card(E(1354), 'Nommer l’objection', 'avant l’autre',
      'Tu dis toi-même ce qu’il pense. Il se sent compris, et l’objection perd de sa force. EN: name it first.'),
    card(E(1344), 'Retourner l’objection', 'justement',
      'Justement : ce qu’il voyait comme un obstacle devient ta raison. EN: that is exactly why.'),
    card(E(1356), 'Le geste', 'lever',
      'Lever une objection, c’est la faire disparaître par une réponse précise. EN: to answer an objection.'),
    card(E(1349), 'Rendre concret', 'l’image',
      'Imagine un peu : un lieu, un chiffre, une scène. L’abstrait ne convainc personne. EN: make it concrete.'),
    card(E(1355), 'Réduire le risque', 'la fin',
      'Tu n’as rien à perdre : un premier essai, petit, réversible. EN: nothing to lose.'),
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Une objection, une réponse',
  groups: [
    grp('Nommer les objections, dans l’ordre', [
      it(E(1343), 'la première, la plus visible'),
      it(E(1345), 'la deuxième'),
      it(E(1347), 'la vraie, à la fin'),
    ], chk(
      'Au TEF, la grille demande de parcourir l’échelle d’objections...',
      ['au-delà de la première', 'une seule fois, rapidement'], 0,
      'Une seule objection traitée, c’est la moitié du travail. EN: go beyond the first.')),
    grp('Y répondre', [
      it(E(1344), 'justement'),
      it(E(1346), 'c’est vrai, mais'),
      it(E(1348), 'une solution concrète'),
      it(E(1358), 'reconnaître la crainte'),
      it(E(1361), 'changer de regard'),
    ], chk(
      'Laquelle rattache l’avantage à Olivier lui-même ?',
      ['Ce contrat nous permettrait d’embaucher deux personnes.', 'C’est bien pour l’économie.', 'Tout le monde fait ça.'], 0,
      'L’atelier plein, c’est son problème ; l’embauche, c’est sa solution. EN: tie the benefit to the listener.')),
    ctl('La fin', 'Un plaidoyer se termine par...',
      ['une demande précise', 'un résumé du document', 'un silence'], 0,
      'Essaie une fois, viens jeudi, on rappelle Mathilde : une action. EN: end on a request.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['objection', 'grille'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de ne convaincre personne',
  errors: [
    { wrong: 'Et en plus, Coworka nous paiera d’avance, j’en suis sûr.', right: fr(E(1344)),
      why: 'Tu veux convaincre, c’est normal. Mais le document ne le dit pas : à l’examen, une information inventée coûte des points. EN: never promise what the document does not say.' },
    { wrong: 'C’est une bonne affaire pour l’entreprise, en général.', right: fr(E(1361)),
      why: '« En général » ne touche personne. Rattache l’avantage à celui qui écoute : son atelier, son année. EN: make the benefit his.' },
    { wrong: 'Tu dois accepter, c’est comme ça.', right: fr(E(1359)),
      why: 'La pression fait résister. Un petit essai réversible fait avancer. EN: lower the risk instead of pushing.' },
    { wrong: 'L’atelier est plein ? Non, il n’est pas plein.', right: fr(E(1358)),
      why: 'Contredire une crainte la renforce. Reconnais-la, puis réponds avec « justement ». EN: acknowledge the fear, then answer it.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['objection'],
};

/** USE, out loud: persuade Kim, who hesitates, in tu. ONE APOSTROPHE STYLE. */
const A9_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a9-scenario',
  layer: 'core',
  title: 'À toi : convaincre Kim',
  setting: 'Tessère a besoin de quelqu’un à Lyon pour la première installation, trois jours en septembre. Kim hésite. Tu la convaincs, en tu, en répondant à chaque objection.',
  turns: [
    {
      ai: 'Lyon, trois jours ? Je ne sais pas trop…',
      en: 'Lyon, three days? I am not really sure…',
      user: 'Je sais ce que tu vas me dire : tu n’as jamais fait d’installation.',
      userEn: 'I know what you are going to say: you have never done an installation. (Name the first objection yourself.)',
      alts: [
        { fr: 'Je comprends que tu hésites. Laisse-moi te présenter le projet en deux minutes.', en: 'I understand you are hesitating. Let me present the project in two minutes.' },
        { fr: 'Écoute, je crois que c’est fait pour toi, et je vais te dire pourquoi.', en: 'Listen, I think it is made for you, and I will tell you why. (Your view first.)' },
      ],
    },
    {
      ai: 'Exactement. Je ne suis pas technicienne.',
      en: 'Exactly. I am not a technician.',
      user: 'Justement, Olivier vient le premier jour, et tu gères le client, ce que tu fais déjà très bien.',
      userEn: 'That is exactly the point: Olivier comes on the first day, and you handle the client, which you already do very well. (Justement: the objection becomes the argument.)',
      alts: [
        { fr: 'Justement, ce n’est pas un travail technique : c’est la relation avec Coworka.', en: 'That is exactly it: it is not technical work, it is the relationship with Coworka.' },
        { fr: 'Tu n’as pas besoin de l’être : l’équipe de pose s’occupe des panneaux.', en: 'You do not need to be: the fitting team handles the panels.' },
      ],
    },
    {
      ai: 'Et mes projets ici ? Je vais prendre du retard.',
      en: 'And my projects here? I will fall behind.',
      user: 'Si tu pars du mardi au jeudi, je reprends tes deux dossiers urgents.',
      userEn: 'If you go from Tuesday to Thursday, I will take over your two urgent files. (A firm offer: si + présent, futur proche.)',
      alts: [
        { fr: 'Je comprends ta crainte ; en contrepartie, je prends tes rendez-vous de la semaine.', en: 'I understand your worry; in return, I will take your meetings that week.' },
        { fr: 'Et si on décalait ton projet d’une semaine ?', en: 'And what if we pushed your project back a week? (Et si + imparfait.)' },
      ],
    },
    {
      ai: 'Mmm. Et au fond, je ne connais personne là-bas.',
      en: 'Hmm. And really, I do not know anyone there.',
      user: 'Imagine un peu : tu serais la personne que Mathilde connaît le mieux chez nous.',
      userEn: 'Just imagine: you would be the person Mathilde knows best at our company. (Make it concrete and about her.)',
      alts: [
        { fr: 'C’est ce qui te retient vraiment, je crois. Mathilde t’attend déjà : elle connaît ton nom.', en: 'That is what is really holding you back, I think. Mathilde is already expecting you: she knows your name.' },
        { fr: 'Justement, c’est l’occasion de rencontrer Mathilde en personne.', en: 'That is exactly why: it is the chance to meet Mathilde in person.' },
      ],
    },
    {
      ai: 'Bon… Et si ça se passe mal ?',
      en: 'Well… And if it goes badly?',
      user: 'Tu n’as rien à perdre à essayer : si ça ne te convient pas, Olivier fera la suivante.',
      userEn: 'You have nothing to lose by trying: if it does not suit you, Olivier will do the next one. (Lower the risk, end on a way out.)',
      alts: [
        { fr: 'Essaie une fois : si ça ne te plaît pas, on en reparle.', en: 'Try it once: if you do not like it, we will talk about it again.' },
        { fr: 'Alors on fait le point après la première journée, et tu décides.', en: 'Then we take stock after the first day, and you decide.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['objection'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('L’ordre', 'Pour persuader, les objections, tu...',
    ['les nommes toi-même, une par une', 'attends qu’on te les oppose'], 0,
    'Répondre avant qu’on te réponde. EN: name them first.'),
  ctl('Justement', '« Justement » sert à...',
    ['faire d’une objection un argument', 'contredire la personne'], 0,
    'L’obstacle devient la raison. EN: turn it round.'),
  ctl('Le document', 'À l’examen, tu peux promettre...',
    ['seulement ce que dit le document', 'ce qui convaincra le plus'], 0,
    'Rien d’inventé. EN: nothing invented.'),
], ['objection']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Persuader',
    opener: {
      line: 'Ton collègue a trois raisons de dire non, et il ne t’en dit qu’une : ici tu les nommes toutes avant lui, et tu y réponds. EN: Your colleague has three reasons to say no and only tells you one: here you name them all first, and answer each.',
      imageRef: 'lessons/reunions-negociation/act09.jpg',
    },
    sections: [],
    milestone: 'Tu nommes les objections avant l’autre, tu les retournes avec justement, tu rends l’avantage concret et tu finis sur une demande. EN: You name objections first, turn them round, make the benefit concrete and end on a request.',
    estScreens: 40, restPoints: ['a9-construire', 'a9-erreurs'],
  },
  sections: [A9_ECOUTE, A9_CARTES, A9_CONSTRUIRE, A9_ERREURS, A9_SCENARIO, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 · CONCLURE ET FIXER LA SUITE
 *
 *  Nadia closes the meeting: recap, the open point, who does what by when.
 *  Regional: faire un suivi (Québec), revenir vers quelqu'un (France).
 *  Traps: vous revenir là-dessus, follow-up, action items, ownership,
 *  on se revient, un recap.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La fin de la rencontre',
  frSub: 'Écoute ce qui est décidé, par qui, pour quand',
  lines: [
    ln(E(1362)), ln(E(1363)), ln(E(1364)), ln(E(1365)), ln(E(1366)),
    ln(E(1367)), ln(E(1368)), ln(E(1369)), ln(E(1370)),
  ],
  questions: [
    { q: 'Combien de lots sont prévus ?', opts: ['deux', 'un', 'trois'], correct: 0, why: 'Six cents panneaux en deux lots. EN: two batches.' },
    { q: 'La remise de dix pour cent dépend de quoi ?', opts: ['d’un engagement de deux ans', 'du paiement comptant'], correct: 0, why: 'En échange d’un engagement de deux ans : la condition reste dans la conclusion. EN: the two-year commitment.' },
    { q: 'Quel point reste ouvert ?', opts: ['les couleurs pour Bruxelles', 'le prix', 'le volume'], correct: 0, why: 'Un point en suspens, nommé, avec quelqu’un qui s’en charge. EN: the Brussels colours.' },
    { q: 'Qui écrit d’ici vendredi ?', opts: ['Julien', 'Kim', 'Nadia'], correct: 0, why: 'Julien s’en occupe. Kim, elle, envoie le récapitulatif ce soir. EN: Julien.' },
    { q: 'Quand se reparle-t-on ?', opts: ['mardi prochain', 'dans un mois'], correct: 0, why: 'Mardi prochain, pour valider la commande. EN: next Tuesday.' },
  ],
  audio: REC('rec-b2-26-cloture-ecoute'),
  say: REFRAME,
  terms: ['suite'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-variantes',
  title: 'Finir pour que ça continue',
  frSub: 'Cinq formules de fin',
  hint: 'Cinq cartes. Une réunion qui finit bien a un nom et une date sur chaque décision.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite', 'variante'],
  cards: [
    card(E(1371), 'Résumer', 'récapituler',
      'Tu redis ce qui est décidé, pour que personne ne reparte avec une autre version. EN: sum up the decisions.'),
    card(E(1375), 'Ce qui reste', 'en suspens',
      'Un point pas encore décidé, nommé comme tel. EN: still pending.'),
    card(E(1373), 'Qui', 's’en charger',
      'Qui s’en charge ? Une décision sans personne ne bouge pas. EN: who takes care of it.'),
    card(E(1372), 'Et après', 'les étapes',
      'Les prochaines étapes, avec des dates. EN: the next steps.'),
    card(E(1374), 'Québec', 'la variante',
      'Faire un suivi : courant au Québec. En France, on revient vers quelqu’un, ou on assure le suivi. EN: to follow up.'),
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Décidé, qui, quand',
  groups: [
    grp('Ce qui est décidé', [
      it(E(1363), 'le volume'),
      it(E(1364), 'le prix, avec sa condition'),
      it('fr.b1.affaires.1108', 'l’accord'),
      it(E(1365), 'ce qui reste ouvert'),
    ], chk(
      'Pourquoi redire la condition (deux ans) dans le récapitulatif ?',
      ['Sans elle, la remise semble acquise.', 'Pour allonger la réunion.'], 0,
      'Le récapitulatif fait foi : la condition doit y être. EN: the recap is what people remember.')),
    grp('Qui, et pour quand', [
      it(E(1366), 'demander qui'),
      it(E(1367), 'un nom, une date'),
      it(E(1368), 'un nom, une date'),
      it(E(1369), 'le prochain rendez-vous'),
    ], chk(
      'Une décision est vraiment prise quand on sait...',
      ['qui s’en charge et pour quand', 'qui l’a proposée'], 0,
      'Trois choses : quoi, qui, quand. EN: what, who, when.')),
    ctl('Le suivi', 'À Montréal, Nadia dit : « Je fais un suivi avec vous la semaine prochaine. » C’est...',
      ['juste et courant au Québec', 'un calque à éviter'], 0,
      'Faire un suivi est courant au Québec. Faire un follow-up, lui, est un calque. EN: fine in Québec.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite', 'variante'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Six fins en anglais',
  rule: {
    title: 'La suite, en français',
    body: 'Follow-up, action items, ownership, vous revenir : la fin de réunion est l’endroit où l’anglais revient le plus. Le français dit un suivi, les prochaines étapes, qui s’en charge, revenir vers vous. EN: the end of a meeting is where English creeps back.',
  },
  cards: [
    trap('follow-up', 'Je fais un follow-up avec vous la semaine prochaine.', E(1376), 'Faire un suivi, au Québec ; en France, revenir vers vous. EN: a suivi.'),
    trap('action items', 'Quels sont les action items ?', E(1377), 'Les prochaines étapes. EN: next steps.'),
    trap('ownership', 'Qui prend l’ownership de votre côté ?', E(1366), 'Qui s’en charge ? EN: who takes care of it.'),
    trap('on se revient', 'On se revient là-dessus mardi.', E(1369), 'Calque de to get back. Nous nous reparlons mardi. EN: we will talk again.'),
    trap('un recap', 'Kim vous envoie un recap ce soir.', E(1368), 'Un récapitulatif ; « récap » existe, mais familier. EN: a summary.'),
    trap('pendant', 'Ce point reste pendant jusqu’à mardi.', E(1365), 'Pending, c’est en suspens. EN: still pending.'),
  ],
  drill: [
    { promptSay: 'Je fais un ... avec vous la semaine prochaine.', opts: ['suivi', 'follow-up'], correct: 0 },
    { promptSay: 'Quelles sont les prochaines ... ?', opts: ['étapes', 'action items'], correct: 0 },
    { promptSay: 'Qui ... de votre côté ?', opts: ['s’en charge', 'prend l’ownership'], correct: 0 },
    { promptSay: 'Reste un point en ... : les couleurs.', opts: ['suspens', 'pendant'], correct: 0 },
    { promptSay: 'Nous nous ... mardi prochain.', opts: ['reparlons', 'revenons'], correct: 0 },
    { promptSay: 'Kim vous envoie un ... ce soir.', opts: ['récapitulatif', 'recap'], correct: 0 },
    { promptSay: 'Je ... jeudi avec la réponse.', opts: ['reviens vers vous', 'vous reviens'], correct: 0 },
    { promptSay: 'Nous en ... là pour aujourd’hui.', opts: ['restons', 'arrêtons'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-b2-26-piege-suite'),
  say: REFRAME,
  terms: ['suite', 'variante'],
};

const A10_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-atoi',
  layer: 'core',
  size: 'lg',
  title: 'À toi : tu conclus',
  groups: [
    ctl('Le signal', 'Il reste cinq minutes. Tu dis :',
      ['Nous arrivons à la fin ; je vous propose de récapituler.', 'Bon, on arrête là, merci.'], 0,
      'Tu annonces la fin et tu la rends utile. EN: announce the recap.'),
    ctl('Le point ouvert', 'Les couleurs ne sont pas décidées. Tu dis :',
      ['Reste un point en suspens : les couleurs. Qui s’en charge de votre côté ?', 'Les couleurs, on verra.'], 0,
      'Un point ouvert, mais avec quelqu’un derrière. EN: open, but owned.'),
    ctl('La date', 'Pour finir, tu fixes...',
      ['le prochain rendez-vous', 'rien, chacun rappellera'], 0,
      'Nous nous reparlons mardi prochain. EN: set the next date.'),
    ctl('Le ton', 'Pour remercier après une discussion difficile :',
      ['Merci à tous pour cette discussion franche et constructive.', 'Merci, c’était long.'], 0,
      'Tu nommes la difficulté comme une qualité. EN: frank and constructive.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Les trois choses', 'Une réunion se termine sur...',
    ['ce qui est décidé, qui s’en charge, pour quand', 'un remerciement'], 0,
    'Quoi, qui, quand. EN: what, who, when.'),
  ctl('Le calque', 'Next steps, en français :',
    ['les prochaines étapes', 'les action items'], 0,
    'Les prochaines étapes. EN: les prochaines étapes.'),
  ctl('Québec', 'Faire un suivi, au Québec :',
    ['courant et juste', 'une faute'], 0,
    'Juste au Québec. EN: correct there.'),
], ['suite']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Conclure et fixer la suite',
    opener: {
      line: 'Une heure de discussion peut s’évaporer en une minute : ici tu fermes la réunion sur ce qui est décidé, par qui, et pour quand. EN: An hour of talk can vanish in a minute: here you close on what was decided, by whom and by when.',
      imageRef: 'lessons/reunions-negociation/act10.jpg',
    },
    sections: [],
    milestone: 'Tu récapitules les décisions avec leurs conditions, tu nommes ce qui reste en suspens, et chaque suite a un nom et une date. EN: You recap decisions with their conditions, name what is pending, and give every next step an owner and a date.',
    estScreens: 38, restPoints: ['a10-construire', 'a10-piege'],
  },
  sections: [A10_ECOUTE, A10_CARTES, A10_CONSTRUIRE, A10_PIEGE, A10_ATOI, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 · À TOI DE NÉGOCIER
 *
 *  An annotated model on a DIFFERENT document (a trade fair), the plan, a
 *  live negotiation role play, THE TASK in exam format (spoken, TEF
 *  section B / DELF monologue shape), then the closing sections and the
 *  one quiz.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_MODELE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-modele',
  layer: 'core',
  questionsInModal: true,
  title: 'Un monologue modèle',
  frSub: 'Le salon de Bruxelles, en format TEF',
  text: SALON_TEXT,
  glossary: [
    { word: 'stand', en: 'booth (at a trade fair)', note: 'L’espace d’une entreprise dans un salon.' },
    { word: 'tenu', en: 'run, manned', note: 'Tenir un stand : y accueillir les visiteurs.' },
  ],
  questions: [
    { q: 'Global : que fait l’orateur, du début à la fin ?', a: 'Il présente le salon, donne son avis, lève trois objections, pose une condition, puis demande une décision.' },
    { q: 'Détail : quelles sont les trois objections qu’il nomme ?', a: 'Le prix du stand, le manque d’expérience de Kim, et l’atelier sans elle.' },
    { q: 'Inférence : pourquoi garde-t-il l’atelier pour la fin ?', a: 'C’est la vraie crainte de Kim ; l’échelle va de la plus visible à la plus profonde.' },
    { q: 'Grille : où la négociation apparaît-elle ?', a: 'Dans la condition : « si tu viens seulement le jeudi et le vendredi », qui répond à la dernière objection.' },
  ],
  audio: REC('rec-b2-26-salon'),
  say: REFRAME,
  terms: ['objection', 'grille'],
};

/** The annotation: which line meets which criterion of the grid. */
const A11_ANNOTE: Sec<'examples'> = {
  type: 'examples',
  id: 'a11-annote',
  layer: 'core',
  title: 'Le modèle, annoté',
  examples: [
    ex(E(1388), 'Tâche : la position est annoncée tôt, et clairement.'),
    ex(E(1380), 'Interaction : l’objection est reconnue, puis retournée avec un chiffre.'),
    ex(E(1381), 'Tâche : une condition qui répond à la vraie crainte.'),
    ex(E(1383), 'Correction : à condition que + subjonctif, conditionnel pour proposer.'),
    ex(E(1385), 'Interaction : tenir bon sur un point, calmement.'),
    ex(E(1387), 'Cohérence : la fin est une demande précise.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['grille'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-examen',
  title: 'Cinq temps pour ton oral',
  steps: [
    '1. Présente le document exactement, sans rien inventer : chiffres, dates, contrepartie. EN: present the document accurately.',
    '2. Prends position tout de suite : mon avis est clair. EN: state your view early.',
    '3. Monte l’échelle des objections : je sais ce que tu vas me dire, ensuite, et ce qui te retient vraiment. EN: climb the objection ladder.',
    '4. Pose tes conditions : je leur proposerais..., à condition que..., là, je tiendrais bon. EN: set your conditions.',
    '5. Finis sur une demande précise : on rappelle Mathilde jeudi, tu es d’accord ? EN: end on a request.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['grille', 'condition'],
};

/** Say it out loud: the negotiation itself, by phone, in vous. ONE
 *  APOSTROPHE STYLE (’) in every turn and alt; no imported row. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au téléphone avec Mathilde',
  setting: 'Jeudi, 10 h à Montréal, 16 h à Lyon. Mathilde Aubry rappelle pour la réponse de Tessère. Tu mènes la négociation, en vous, avec la position de l’équipe.',
  turns: [
    {
      ai: 'Bonjour, Mathilde Aubry. Vous avez réfléchi à notre demande ?',
      en: 'Hello, Mathilde Aubry. Have you thought about our request?',
      user: 'Oui, merci de votre patience. Si je vous suis bien, la remise compte plus pour vous que le paiement ?',
      userEn: 'Yes, thank you for your patience. If I follow you, the discount matters more to you than the payment terms? (Reformulate before answering.)',
      alts: [
        { fr: 'Oui. Avant de répondre, pourriez-vous préciser ce qui compte le plus pour vous ?', en: 'Yes. Before I answer, could you say what matters most to you?' },
        { fr: 'Oui, et j’aimerais d’abord vérifier une chose : le calendrier reste bien le même ?', en: 'Yes, and I would like to check one thing first: the schedule is still the same?' },
      ],
    },
    {
      ai: 'Les deux comptent. Quinze pour cent, c’est notre objectif.',
      en: 'Both matter. Fifteen per cent is our target.',
      user: 'Quinze, nous ne pouvons pas aller jusque-là ; en revanche, nous pourrions envisager dix pour cent sur deux ans.',
      userEn: 'Fifteen, we cannot go that far; on the other hand, we could consider ten per cent over two years. (A limit, then a counter-proposal.)',
      alts: [
        { fr: 'Que diriez-vous de dix pour cent, si vous vous engagez sur deux ans ?', en: 'What would you say to ten per cent, if you commit to two years?' },
        { fr: 'Nous pourrions aller jusqu’à dix, à condition que le contrat porte sur deux ans.', en: 'We could go up to ten, on condition that the contract runs for two years.' },
      ],
    },
    {
      ai: 'Dix… Et le paiement à quatre-vingt-dix jours ?',
      en: 'Ten… And payment at ninety days?',
      user: 'Là, nous ne pouvons pas vous suivre : soixante jours au maximum, à condition que l’acompte soit versé à la signature.',
      userEn: 'There, we cannot go along with you: sixty days at most, on condition that the deposit is paid on signing. (A calm limit, and a condition in the subjunctive.)',
      alts: [
        { fr: 'Ce que nous pouvons vous offrir, c’est soixante jours, sans frais.', en: 'What we can offer you is sixty days, at no extra cost.' },
        { fr: 'Quatre-vingt-dix jours, c’est trop long pour une PME comme la nôtre ; soixante, en revanche, c’est possible.', en: 'Ninety days is too long for a small business like ours; sixty, on the other hand, is possible.' },
      ],
    },
    {
      ai: 'Vingt pour cent d’acompte, c’est beaucoup pour nous.',
      en: 'A twenty per cent deposit is a lot for us.',
      user: 'Je comprends votre inquiétude ; en contrepartie, nous pourrions former vos équipes à l’installation, sans frais.',
      userEn: 'I understand your concern; in return, we could train your teams in installation, free of charge. (A concession, named, against the deposit.)',
      alts: [
        { fr: 'Je peux faire un geste : la formation serait offerte, si l’acompte reste à vingt pour cent.', en: 'I can make a gesture: the training would be free, if the deposit stays at twenty per cent.' },
        { fr: 'C’est vrai ; cela dit, l’acompte nous permet de lancer la production tout de suite.', en: 'True; that said, the deposit lets us start production right away.' },
      ],
    },
    {
      ai: 'Ça, c’est intéressant. Je dois en parler avec Julien.',
      en: 'Now that is interesting. I need to discuss it with Julien.',
      user: 'Bien sûr. Je récapitule : dix pour cent sur deux ans, soixante jours, un acompte de vingt pour cent et la formation offerte.',
      userEn: 'Of course. Let me sum up: ten per cent over two years, sixty days, a twenty per cent deposit and free training. (The recap keeps every condition.)',
      alts: [
        { fr: 'Naturellement. Pour que nous soyons sur la même longueur d’onde, je vous envoie ces quatre points par écrit.', en: 'Naturally. So that we are on the same wavelength, I will send you these four points in writing.' },
        { fr: 'Très bien. Autrement dit : dix pour cent, soixante jours, l’acompte et la formation.', en: 'Very good. In other words: ten per cent, sixty days, the deposit and the training.' },
      ],
    },
    {
      ai: 'C’est bien ça. Je vous réponds vendredi.',
      en: 'That is right. I will answer you on Friday.',
      user: 'Parfait. Je vous envoie le récapitulatif ce soir, et nous nous reparlons vendredi.',
      userEn: 'Perfect. I will send you the summary this evening, and we will speak again on Friday. (Who, what, when.)',
      alts: [
        { fr: 'Merci. Kim vous envoie l’offre révisée ce soir.', en: 'Thank you. Kim will send you the revised offer this evening.' },
        { fr: 'Très bien, à vendredi, et merci pour cette discussion franche.', en: 'Very good, until Friday, and thank you for this frank discussion.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition', 'contrepartie'],
};

/** THE GRADED TASK, spoken, in exam format. No live speech grading exists:
 *  the learner records, then self-checks against the annotated model. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Convaincre ton associé',
  frSub: 'Oral · format TEF section B et DELF B2',
  brief: `Tu travailles chez Tessère. Coworka vient d’envoyer sa demande :\n\n${TASK_DOC}\n\nTon associé Olivier hésite : il trouve cette demande trop risquée pour l’atelier. Présente-lui la demande sans rien inventer, donne ton avis, réponds à ses objections et dis-lui à quelles conditions tu accepterais de signer. Prépare d’abord un plan et quelques phrases clés, en deux minutes, puis parle.`,
  briefEn: 'You work at Tessère. Coworka has sent its request (above). Your partner Olivier is hesitant: he finds it too risky for the workshop. Present the request without inventing anything, give your view, answer his objections and tell him on what terms you would sign. Prepare a plan and a few key lines in two minutes, then speak.',
  produce: 'Enregistre un monologue de trois à cinq minutes adressé à Olivier : présente la demande, prends position, lève au moins trois objections, pose au moins deux conditions (si..., à condition que...) et termine par une demande précise.',
  responseSpec: { kind: 'audio', minDurationS: 180, maxDurationS: 300 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réaliser la tâche',
        maxPoints: 4,
        descriptors: [
          '4 : La demande est présentée exactement (volume, durée, remise, paiement, calendrier, contrepartie), ta position est claire et tu poses au moins deux conditions.',
          '3 : Tout est là, mais une information du document manque, ou tu ne poses qu’une condition.',
          '2 : Ta position reste vague (on verra, peut-être), ou le document est à peine présenté.',
          '1 : Pas de position, ou des informations inventées que le document ne donne pas.',
        ],
      },
      {
        key: 'interaction',
        label: 'Parler à Olivier et lever ses objections',
        maxPoints: 4,
        descriptors: [
          '4 : Tu parles à Olivier en tu du début à la fin, tu nommes au moins trois objections avant lui et tu réponds à chacune par un argument qui le concerne.',
          '3 : Trois objections, mais une réponse reste générale (c’est bien pour l’entreprise).',
          '2 : Une ou deux objections seulement, ou des réponses qui contredisent au lieu de répondre.',
          '1 : Aucune objection traitée : tu récites l’offre sans parler à Olivier.',
        ],
      },
      {
        key: 'coherence',
        label: 'Un propos qui avance',
        maxPoints: 3,
        descriptors: [
          '3 : On entend le plan : la demande, ton avis, les objections, tes conditions, une demande finale, avec des articulateurs (d’abord, ensuite, justement, alors).',
          '2 : Le plan existe, mais une partie arrive dans le désordre, ou la fin manque.',
          '1 : Des idées posées les unes à côté des autres, sans ordre ni conclusion.',
        ],
      },
      {
        key: 'etendue',
        label: 'Richesse de la langue',
        maxPoints: 3,
        descriptors: [
          '3 : Les formules de la leçon sont là et variées : je sais ce que tu vas me dire, justement, à condition que, si + imparfait, cela dit, imagine un peu.',
          '2 : Quelques formules, souvent les mêmes.',
          '1 : Un vocabulaire de base qui ne permet ni de nuancer ni de négocier.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 3,
        descriptors: [
          '3 : Les structures difficiles sont justes : subjonctif après à condition que, jamais de conditionnel après si, conditionnel pour proposer.',
          '2 : Quelques erreurs sur ces structures, mais le message reste clair.',
          '1 : Des erreurs fréquentes qui gênent la compréhension.',
        ],
      },
      {
        key: 'prononciation',
        label: 'Prononciation (vérifie toi-même)',
        maxPoints: 3,
        descriptors: [
          '3 : En te réécoutant : un débit régulier, des liaisons naturelles, et des conditionnels (proposerais, pourrions) bien distincts des futurs.',
          '2 : Quelques hésitations ou mots mal prononcés, mais on te comprend sans effort.',
          '1 : Il faut faire un effort pour te suivre.',
        ],
      },
    ],
  },
  scaffold: [
    'Olivier, j’ai relu la demande de Coworka...',
    'Mon avis est clair :',
    'Je sais ce que tu vas me dire :',
    'Justement,',
    'Ensuite, tu vas me parler de...',
    'Je leur proposerais..., à condition que...',
    'Là, je tiendrais bon :',
    'Imagine un peu :',
    'Alors voilà ce que je te propose :',
  ],
  modelAnswer: TASK_MODEL,
  modelAnswerEn: 'Olivier, I have reread Coworka’s request and I would like us to talk about it before we answer them. They want six hundred panels for their twelve spaces, in Lyon and Brussels, over two years. They are asking for a fifteen per cent discount, payment at ninety days and a first batch of two hundred and fifty panels for September. In return, they would present us as their official supplier.\nMy view is clear: we should negotiate, not refuse. I know what you are going to say first: the workshop is already full. That is exactly the point: a two-year contract would let us hire, and we would finally know what we are producing next year.\nNext, you are going to talk to me about the margin. You are right, fifteen per cent is too much: at that price, we would be working for almost nothing. That is why I would not say yes to everything. I would offer them ten per cent, on condition that they commit to two years, and only five per cent if the order covers just one year.\nAnd what worries you most, I think, is the payment. Ninety days, for a small business like ours, is impossible. There, I would hold firm: sixty days at most, with a twenty per cent deposit on signing. As for the schedule, if we deliver in two batches, as you suggested, the workshop should meet the deadlines.\nJust imagine: our name presented as the official supplier in twelve spaces, in Lyon and Brussels. We could never afford a showcase like that.\nSo here is what I suggest: we call Mathilde back on Thursday with these three conditions, and if she refuses the deposit, we leave it there. Are you happy for me to call her?',
  watchFor: [
    {
      pattern: 'A flat yes or no to the whole request, with no condition (on accepte tout; c’est non).',
      criterion: 'tache',
      feedback: 'Ne réponds ni oui ni non : dis à quelles conditions tu signerais. Si..., à condition que...',
      ref: 'a1-reperer',
    },
    {
      pattern: 'Information invented beyond the document (payment in advance, a bigger order, a promise of other clients).',
      criterion: 'tache',
      feedback: 'Le document ne le dit pas. À l’examen, tout ce que tu présentes doit venir du document.',
      ref: 'a9-erreurs',
    },
    {
      pattern: 'Only one objection handled, or objections contradicted (non, l’atelier n’est pas plein) instead of answered.',
      criterion: 'interaction',
      feedback: 'Monte l’échelle : je sais ce que tu vas me dire, ensuite, et ce qui te retient vraiment. Réponds avec justement.',
      ref: 'a9-construire',
    },
    {
      pattern: 'Benefits stated in the abstract (c’est bien pour l’entreprise) rather than tied to Olivier and his workshop.',
      criterion: 'interaction',
      feedback: 'Rattache l’avantage à Olivier : son atelier, ses embauches, son année.',
      ref: 'a9-cartes',
    },
    {
      pattern: 'A concession with nothing asked in return (on baisse à dix, pas de problème).',
      criterion: 'tache',
      feedback: 'Rien sans contrepartie : dix pour cent, à condition qu’ils s’engagent sur deux ans.',
      ref: 'a7-focus',
    },
    {
      pattern: 'A conditional after si (si nous livrerions, si ils s’engageraient) or a futur after si.',
      criterion: 'correction',
      feedback: 'Après si, le présent ou l’imparfait : si nous livrons, si ils s’engageaient. Le conditionnel va dans l’autre partie.',
      ref: 'a8-piege',
    },
    {
      pattern: 'The indicative after à condition que, proposer que, craindre que or bien que (à condition qu’ils s’engagent written as s’engageront).',
      criterion: 'correction',
      feedback: 'À condition que, je propose que, je crains que : le subjonctif.',
      ref: 'a7-construire',
    },
    {
      pattern: 'Disagreement with Olivier that attacks (tu as tort, c’est ridicule) instead of acknowledging then qualifying.',
      criterion: 'interaction',
      feedback: 'Reconnais d’abord : tu as raison, c’est beaucoup ; cela dit...',
      ref: 'a5-tableau',
    },
    {
      pattern: 'Meeting or negotiation calques (un bon point, considérer dix pour cent, un discount, faire un follow-up, vous revenir).',
      criterion: 'etendue',
      feedback: 'Une remarque juste, envisager, une remise, faire un suivi, revenir vers vous.',
      ref: 'a6-piege',
    },
    {
      pattern: 'No audible plan: conditions before the presentation, or no ending.',
      criterion: 'coherence',
      feedback: 'Suis les cinq temps : le document, ton avis, les objections, tes conditions, une demande.',
      ref: 'a11-plan',
    },
    {
      pattern: 'The talk ends without a precise request or next step (voilà, c’est tout).',
      criterion: 'coherence',
      feedback: 'Finis sur une action : on rappelle Mathilde jeudi, tu es d’accord ?',
      ref: 'a10-construire',
    },
    {
      pattern: 'Conditional endings pronounced as futures on the recording (proposerais heard as proposerai), or long hesitations that break the argument.',
      criterion: 'prononciation',
      feedback: 'Réécoute tes conditionnels : -rais, -rions, bien distincts du futur. Ralentis plutôt que d’hésiter.',
      ref: 'a11-annote',
    },
  ],
  graderNotes: [
    'NO LIVE SPEECH GRADING EXISTS: the shipped path is the learner’s self-check against the model answer and the six descriptors. These notes are for a future grader that receives a transcript.',
    'The rubric mirrors the B2 oral grids: TEF section B (présentation, persuasion, adaptation aux objections, langue), DELF B2 (tâche, argumentation, organisation, lexique, morphosyntaxe, phonologie). Total 20 points.',
    'Duration 180 to 300 seconds; allow 10% either way before « tache » loses a point. Preparation time is not graded.',
    'Everything presented must come from the document: six hundred panels, twelve spaces, Lyon and Brussels, two years, fifteen per cent asked, ninety days, 250 panels for September, the rest in December, Tessère presented as official supplier. The speaker’s own conditions and opinions are free; facts are not.',
    'Accept any reasonable conditions (another discount, another duration, a deposit, delivery in batches). Do not mark the arithmetic.',
    `Tu with Olivier is expected throughout (a partner, ${TUVOUS_REF_EN}). A learner who uses vous consistently loses nothing under « correction » but one point under « interaction » only if it makes the talk sound like a speech to a stranger.`,
    `Accept regional usage without comment: une rencontre, faire un suivi, revenir vers quelqu’un, nonante, septante. The polite conditional of ${POLITESSE_REF_EN} and the business vocabulary of ${AFFAIRES_REF_EN} are assumed.`,
    'Speaker gender is unknown: judge agreement (convaincu, convaincue) for internal consistency only.',
    `Written argumentation belongs to ${ARGUMENTATION_REF_EN}; do not mark written-style features (paragraphing, formal connectors) as missing.`,
    'Feedback language: natural French at B2, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['grille', 'objection', 'condition'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes formules à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-negocier',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'mener', v: 'objectif, ordre du jour, recadrer', say: fr(E(1216)),
      detail: { title: 'Mener la réunion', body: 'Un but, un cadre, et tu ramènes au sujet sans vexer. EN: aim, frame, refocus.', say: fr(E(1229)) } },
    { k: 'la parole', v: 'si je peux me permettre, je vous laisse la parole', say: fr(E(1238)),
      detail: { title: 'La parole', body: 'Entrer poliment, garder calmement, donner clairement. EN: in, hold, hand over.', say: fr(E(1247)) } },
    { k: 'reformuler', v: 'si je vous suis bien, autrement dit', say: fr(E(1254)),
      detail: { title: 'Reformuler', body: 'Redire avec tes mots, puis vérifier. EN: restate, then check.', say: fr(E(1272)) } },
    { k: 'nuancer', v: 'cela dit, toutefois, je crains que', say: fr(E(1283)),
      detail: { title: 'Nuancer', body: 'Reconnaître, nuancer, proposer. Subjonctif après craindre que. EN: acknowledge, qualify, propose.', say: fr(E(1278)) } },
    { k: 'négocier', v: 'que diriez-vous, en contrepartie, à condition que', say: fr(E(1313)),
      detail: { title: 'Proposer et céder', body: 'Une contre-offre avec une raison ; jamais de geste sans contrepartie. EN: counter-offer; nothing for nothing.', say: fr(E(1315)) } },
    { k: 'conclure', v: 'récapituler, qui s’en charge, pour quand', say: fr(E(1362)),
      detail: { title: 'Conclure', body: 'Ce qui est décidé, qui, pour quand. EN: what, who, when.', say: fr(E(1369)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition', 'suite'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: 'Tu mènes une réunion, tu y prends ta place et tu vérifies ce que tu comprends. Tu dis non sans fermer la porte, tu réponds à une offre par une autre, tu cèdes contre une contrepartie et tu poses tes conditions au bon mode. Tu persuades en répondant aux objections avant qu’on te les fasse, et tu conclus sur des noms et des dates. Le piège qui reste est discret : le conditionnel qui se glisse après si quand tu parles vite, et le oui trop rapide quand le silence gêne. Avant l’examen, enregistre-toi deux minutes sur une offre inventée, puis réécoute seulement tes phrases avec si. EN: Record two minutes on an invented offer, then listen back only to your sentences with si.',
  stats: [
    { k: 'Les gestes', v: 'neuf, de l’ouverture à la conclusion' },
    { k: 'Les formules', v: 'une soixantaine, en contexte' },
    { k: 'Les variantes', v: 'Québec, France, Belgique' },
    { k: 'Les textes', v: 'cinq lectures, cinq écoutes' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 2 to 10, one round in
 *  exam format, one round recycling earlier B2 lessons (named in words).
 *  Each round's target is a distinct errorTrigger. `fold()` strips accents,
 *  commas and apostrophes and does NOT decompose « œ » (none is typed here),
 *  so every typed answer differs from its prompt by letters that survive. */

type QQ = QuizQuestion;
const TI_Q = 'Complète et écris toute la phrase. EN: Complete it and write the whole sentence.';
const ES_Q = 'Quelque chose ne va pas. Écris la phrase correcte. EN: Something is wrong; write the sentence correctly.';
const tI = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q: TI_Q, prompt, answer, accept: [answer], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: ES_Q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: 'L’examen',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-mener', label: 'Mener la réunion', targets: ['reunion-derive'],
      questions: [
        mc('Tu ouvres la réunion. Quelle phrase fixe son but ?', [fr(E(1216)), 'Voici l’agenda de la réunion.', 'On commence quand tout le monde veut.'], 0, 'Un objectif, avec un verbe d’action. EN: state the aim.', 'a2-cartes'),
        mc('To address an issue, en réunion :', ['aborder une question', 'adresser une question', 'répondre une question'], 0, 'On aborde une question ; on adresse une lettre. EN: aborder.', 'a2-piege'),
        mc('Julien parle de la livraison pendant le point sur le prix. Tu dis :', [fr(E(1221)), 'Julien, ce n’est pas le moment, taisez-vous.', 'Bon, parlons de la livraison, alors.'], 0, 'Tu l’arrêtes et tu lui dis quand. EN: stop him and say when.', 'a2-construire'),
        tI('Nous avons une heure, donc je propose qu’on s’en ___ à l’ordre du jour. (tenir, subjonctif)', fr(E(1217)), 'Proposer que + subjonctif : tienne. EN: subjunctive.', 'a2-tableau'),
        tI('Je me permets de ___ la discussion : nous parlions du prix. (to refocus)', fr(E(1229)), 'Recadrer la discussion. EN: recadrer.', 'a2-cartes'),
        eS('Passons au prochain item.', fr('fr.b1.affaires.1052'), 'Un point de l’ordre du jour, et le point suivant. EN: le point suivant.', 'a2-piege'),
        eS('Adressons maintenant la question du prix.', fr(E(1234)), 'On aborde une question. EN: aborder.', 'a2-piege'),
        lC('Écoute. Que fait la personne ?', fr(E(1223)), ['Elle garde un point pour la fin.', 'Elle refuse le point.', 'Elle conclut la réunion.'], 0, 'En reparler à la fin, au subjonctif. EN: she parks it.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r2-parole', label: 'La parole', targets: ['parole-brutale'],
      questions: [
        mc('Pour entrer poliment dans une discussion avec un client :', [fr(E(1238)), 'Attendez, moi je veux parler.', 'Stop, j’ai quelque chose à dire.'], 0, 'Une formule qui annonce ton intervention. EN: if I may.', 'a3-exemples'),
        mc('On te coupe au milieu d’une phrase. Pour garder la parole :', [fr(E(1247)), 'Laissez-moi finir !', 'Vous me coupez tout le temps.'], 0, 'Calme, avec une promesse d’écoute. EN: calm, not sharp.', 'a3-erreurs'),
        mc('Good point, en français :', ['une remarque juste', 'un bon point', 'un point bon'], 0, 'Un bon point, c’est à l’école. EN: une remarque juste.', 'a3-erreurs'),
        tI('Pour ___ sur ce que dit Mathilde, le volume change tout. (to pick up on)', fr(E(1244)), 'Rebondir sur. EN: rebondir.', 'a3-exemples'),
        tI('Pardon, Julien, je ne voulais pas vous ___ la parole. (to cut off)', fr(E(1242)), 'Couper la parole à quelqu’un. EN: couper.', 'a3-trier'),
        eS('Si je peux me permettre, j’aimerais additionner un point.', fr(E(1238)), 'Ajouter un point ; additionner, c’est calculer. EN: ajouter.', 'a3-erreurs'),
        eS('Excusez-moi de vous couper, mais le temps pousse.', fr(E(1240)), 'Le temps presse. EN: time is short.', 'a3-exemples'),
        lC('Écoute. Cette phrase sert à...', fr(E(1246)), ['donner la parole', 'prendre la parole', 'couper la parole'], 0, 'Je vous laisse la parole. EN: to hand over.', 'a3-histoire'),
      ],
    },
    {
      id: 'r3-reformuler', label: 'Reformuler', targets: ['reformulation-absente'],
      questions: [
        mc('If I follow you correctly :', ['si je vous suis bien', 'si je vous comprends correctement', 'si je vous suis correct'], 0, 'La formule naturelle. EN: si je vous suis bien.', 'a4-cartes'),
        mc('Could you elaborate on this point?', ['Pourriez-vous préciser ce point ?', 'Pourriez-vous élaborer sur ce point ?'], 0, 'Élaborer sur est un calque. EN: préciser.', 'a4-piege'),
        mc('La cliente dit : « Nous voulons les panneaux assez vite. » Tu réponds :', ['Pourriez-vous préciser la date qui vous conviendrait ?', 'Très bien, assez vite.', 'Impossible.'], 0, 'Un mot flou devient une date. EN: ask for a date.', 'a4-construire'),
        tI('Si je vous ___ bien, vous parlez de début septembre ? (suivre)', fr(E(1254)), 'Suivre quelqu’un : si je vous suis bien. EN: suis.', 'a4-cartes'),
        tI('Je récapitule, pour que nous soyons sur la même ___ d’onde.', fr(E(1262)), 'La même longueur d’onde. EN: longueur.', 'a4-piege'),
        eS('Ce que j’entends est que le délai compte plus que le prix.', fr(E(1268)), 'À l’oral : ce que j’entends, c’est que. EN: c’est que.', 'a4-piege'),
        eS('Est-ce qu’on est sur la même page pour la date ?', 'Est-ce qu’on est sur la même longueur d’onde pour la date ?', 'La même page est un calque. EN: same wavelength.', 'a4-piege'),
        lC('Écoute. Que fait la personne ?', fr(E(1258)), ['Elle reformule avec des chiffres.', 'Elle refuse la livraison.', 'Elle demande un prix.'], 0, 'Autrement dit : deux livraisons, deux dates. EN: she restates it.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r4-nuancer', label: 'Nuancer', targets: ['desaccord-plat'],
      questions: [
        mc('Pour dire non à un client sans fermer la discussion, tu commences par...', ['reconnaître ce qui est juste chez lui', 'ton argument le plus fort', 'dire non'], 0, 'Reconnaître, nuancer, proposer. EN: acknowledge first.', 'a5-construire'),
        mc('A high price :', ['un prix élevé', 'un prix cher'], 0, 'Un produit est cher ; un prix est élevé. EN: élevé.', 'a5-erreurs'),
        mc('Le plus soutenu :', [fr(E(1285)), 'Je ne suis pas d’accord avec vous.', 'Vous avez tort.'], 0, 'Tu contestes l’analyse, pas la personne. EN: the most formal.', 'a5-tableau'),
        tI('Je crains que nous ne ___ pas livrer à temps. (pouvoir)', fr(E(1278)), 'Craindre que + subjonctif. EN: puissions.', 'a5-tableau'),
        tI('Vous n’avez pas tort ; cela ___, le volume ne suffit pas.', fr(E(1283)), 'Cela dit. EN: that said.', 'a5-construire'),
        eS('Je crains que le délai est trop court.', 'Je crains que le délai soit trop court.', 'Craindre que + subjonctif. EN: soit.', 'a5-erreurs', ['Je crains que le délai ne soit trop court.']),
        eS('Votre prix me semble un peu cher pour ce volume.', fr(E(1286)), 'Un prix est élevé. EN: élevé.', 'a5-erreurs'),
        lC('Écoute. Que fait la personne ?', fr(E(1279)), ['Elle propose, sous forme de question.', 'Elle accepte l’offre.', 'Elle se plaint.'], 0, 'Une question négative qui propose. EN: a proposal as a question.', 'a5-tableau'),
      ],
    },
    {
      id: 'r5-proposer', label: 'Proposer', targets: ['proposition-calque'],
      questions: [
        mc('Que diriez-vous si nous ... le prix de huit pour cent ?', ['baissions', 'baisserions', 'baissons'], 0, 'Si + imparfait, jamais de conditionnel. EN: imperfect.', 'a6-piege'),
        mc('We could consider ten per cent :', ['Nous pourrions envisager dix pour cent.', 'Nous pourrions considérer dix pour cent.'], 0, 'Envisager une solution. EN: envisager.', 'a6-piege'),
        mc('Une contre-proposition efficace contient...', ['un autre chiffre et une raison', 'un refus simple', 'la même offre, répétée'], 0, 'Non à l’offre, oui à la discussion. EN: a new figure and a reason.', 'a6-construire'),
        tI('Je vous propose que vous ___ à soixante jours. (payer)', fr(E(1309)), 'Proposer que + subjonctif : payiez. EN: payiez.', 'a6-piege'),
        tI('Et si on ___ d’abord le calendrier ? (regarder)', fr(E(1306)), 'Et si + imparfait. EN: regardait.', 'a6-construire'),
        eS('Laissez-nous en discuter, et nous vous revenons demain.', fr(E(1300)), 'Revenir vers vous ; vous revenir est un calque. EN: get back to you.', 'a6-piege'),
        eS('Je vous offre un discount de dix pour cent.', 'Je vous offre une remise de dix pour cent.', 'Une remise. EN: a discount.', 'a6-piege'),
        lC('Écoute. Julien parle de combien de jours ?', fr(E(1297)), ['quatre-vingt-dix', 'soixante-dix', 'dix-neuf'], 0, 'Nonante, en Belgique. EN: ninety.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r6-ceder', label: 'Céder', targets: ['concession-gratuite'],
      questions: [
        mc('La règle d’or de la concession :', ['ne jamais rien donner sans contrepartie', 'céder vite pour débloquer', 'ne jamais céder'], 0, 'Rien sans rien. EN: nothing for nothing.', 'a7-focus'),
        mc('Pour montrer qu’on approche de la limite :', ['trois pour cent, puis deux', 'dix pour cent d’un coup'], 0, 'Des gestes qui rétrécissent. EN: shrinking steps.', 'a7-lecture'),
        mc('On te demande encore trois pour cent, sous ton seuil. Tu dis :', [fr(E(1317)), 'C’est ridicule, vous exagérez.', 'Bon, d’accord.'], 0, 'Une limite calme. EN: a calm no.', 'a7-atoi'),
        tI('Je peux faire un geste sur le prix, à condition que vous vous ___ sur la durée. (engager)', fr(E(1313)), 'À condition que + subjonctif. EN: engagiez.', 'a7-construire'),
        tI('En ___, nous vous demandons un engagement de deux ans. (in return)', fr(E(1315)), 'En contrepartie. EN: contrepartie.', 'a7-construire'),
        eS('Nous faisons un effort dans ce point.', fr(E(1316)), 'Un effort sur un point. EN: sur.', 'a7-focus'),
        eS('Soit vous prenez les six cents panneaux, ou nous gardons le prix actuel.', fr(E(1323)), 'Soit... soit. EN: either... or.', 'a7-construire'),
        lC('Écoute. Cette phrase, c’est...', fr(E(1318)), ['une limite', 'une concession', 'une question'], 0, 'La dernière proposition : une limite. EN: a limit.', 'a7-construire'),
      ],
    },
    {
      id: 'r7-offre', label: 'L’offre conditionnelle', targets: ['offre-mal-construite'],
      questions: [
        mc('Laquelle est une offre ferme ?', [fr(E(1328)), fr(E(1329))], 0, 'Si + présent, puis futur. EN: firm.', 'a8-tableau'),
        mc('Sous réserve ... la validation des couleurs.', ['de', 'que', 'à'], 0, 'Sous réserve de + nom. EN: de.', 'a8-piege'),
        mc('Moyennant ... :', ['un forfait', 'que vous payez'], 0, 'Moyennant + nom. EN: a noun.', 'a8-tableau'),
        tI('Si vous vous ___ sur trois ans, nous pourrions baisser encore le prix. (engager, hypothèse)', fr(E(1329)), 'Si + imparfait. EN: engagiez.', 'a8-construire'),
        tI('En vous ___ sur deux ans, vous obtiendriez la remise complète. (engager, gérondif)', fr(E(1339)), 'En + participe présent. EN: engageant.', 'a8-piege'),
        eS('Si vous confirmerez la commande avant le trente juin, nous appliquerons une remise de dix pour cent.', fr(E(1328)), 'Le présent après si. EN: confirmez.', 'a8-piege'),
        eS('Le paiement se fera à soixante jours, à condition que l’acompte est versé à la signature.', fr(E(1338)), 'À condition que + subjonctif. EN: soit.', 'a8-piege'),
        lC('Écoute. Cette phrase annonce...', fr(E(1335)), ['une option, au conditionnel', 'une promesse ferme'], 0, 'Dans le cas de... serait : une hypothèse. EN: an option.', 'a8-lecture'),
      ],
    },
    {
      id: 'r8-persuader', label: 'Persuader', targets: ['persuasion-abstraite'],
      questions: [
        mc('Pour persuader, les objections de l’autre, tu...', ['les nommes toi-même, avant lui', 'les ignores', 'attends qu’il les dise'], 0, 'Répondre avant qu’on te réponde. EN: name them first.', 'a9-cartes'),
        mc('Laquelle rend l’avantage concret ?', [fr(E(1349)), 'C’est bien pour l’entreprise.', 'Tout le monde le fait.'], 0, 'Un lieu, un chiffre : une image. EN: concrete.', 'a9-construire'),
        mc('À l’examen, tu peux promettre à ton interlocuteur...', ['ce que le document annonce', 'ce qui le convaincra le plus'], 0, 'Rien d’inventé. EN: only the document.', 'a9-erreurs'),
        tI('Olivier, je sais ce que tu vas me ___ : l’atelier est déjà plein.', fr(E(1343)), 'Je sais ce que tu vas me dire. EN: dire.', 'a9-cartes'),
        tI('Tu n’as rien à ___ à essayer : le premier lot est petit. (to lose)', fr(E(1351)), 'Rien à perdre. EN: perdre.', 'a9-cartes'),
        eS('C’est la meilleure vitrine que nous pouvons avoir en Europe.', fr(E(1350)), 'Après un superlatif, le subjonctif. EN: puissions.', 'a9-ecoute'),
        eS('Imagine peu : nos panneaux dans douze espaces, à Lyon et à Bruxelles.', fr(E(1349)), 'Imagine un peu. EN: just imagine.', 'a9-cartes'),
        lC('Écoute. Quelle objection est nommée ?', fr(E(1347)), ['le risque de retard', 'la marge', 'l’atelier plein'], 0, 'La vraie crainte, à la fin de l’échelle. EN: the delay.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r9-conclure', label: 'Conclure', targets: ['suite-floue'],
      questions: [
        mc('Une réunion se termine sur...', ['ce qui est décidé, qui s’en charge, pour quand', 'un remerciement', 'un nouveau sujet'], 0, 'Quoi, qui, quand. EN: what, who, when.', 'a10-construire'),
        mc('Next steps :', ['les prochaines étapes', 'les action items'], 0, 'Les prochaines étapes. EN: next steps.', 'a10-piege'),
        mc('Faire un suivi :', ['courant au Québec', 'un calque à éviter partout'], 0, 'Juste au Québec ; faire un follow-up, non. EN: fine in Québec.', 'a10-cartes'),
        tI('Nous arrivons à la fin ; je vous propose de ___. (to sum up)', fr(E(1362)), 'Récapituler. EN: récapituler.', 'a10-cartes'),
        tI('Reste un point en ___ : les couleurs pour Bruxelles. (pending)', fr(E(1365)), 'En suspens. EN: suspens.', 'a10-cartes'),
        eS('Je fais un follow-up avec vous la semaine prochaine.', fr(E(1376)), 'Un suivi. EN: a suivi.', 'a10-piege'),
        eS('Qui prend l’ownership de votre côté ?', fr(E(1366)), 'Qui s’en charge ? EN: who takes care of it.', 'a10-piege'),
        lC('Écoute. Qui fait quoi ?', fr(E(1367)), ['Julien écrit d’ici vendredi.', 'Kim écrit ce soir.', 'Nadia appelle mardi.'], 0, 'Julien s’en occupe. EN: Julien, by Friday.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r10-examen', label: 'Format examen', targets: ['consigne-examen'],
      questions: [
        mc('TEF, section B : on te demande de...', ['présenter le document et convaincre ton interlocuteur', 'résumer le document sans donner ton avis', 'poser des questions à l’examinateur'], 0, 'La grille note la présentation, la conviction et les objections. EN: present and persuade.', 'a11-plan'),
        mc('DELF B2, monologue : un exposé équilibré qui ne tranche jamais...', ['ne répond pas à la consigne', 'est la meilleure stratégie'], 0, 'Il faut prendre position. EN: take a side.', 'a11-mission'),
        mc('DELF B2, débat : l’examinateur conteste ta position. Tu...', ['confirmes et nuances, avec des précisions', 'changes d’avis pour lui faire plaisir', 'répètes ta phrase'], 0, 'Reconnaître, nuancer, préciser. EN: confirm and qualify.', 'a5-construire'),
        mc('TCF, tâche 3 : « Faut-il... ou... ? » Ta position répond...', ['à l’alternative posée', 'au thème en général'], 0, 'Sur l’alternative, pas sur le thème. EN: the actual question.', 'a11-plan'),
        tI('___, aucun niveau n’est requis. (That is exactly the point)', 'Justement, aucun niveau n’est requis.', 'Justement retourne l’objection. EN: justement.', 'a9-cartes'),
        tI('Mon avis est ___ : il faut négocier, pas refuser. (clear)', fr(E(1388)), 'Annonce ta position tôt. EN: clair.', 'a11-annote'),
        eS('Je leur proposerais dix pour cent, à condition qu’ils s’engageront sur deux ans.', fr(E(1383)), 'À condition que + subjonctif. EN: s’engagent.', 'a11-annote'),
        lC('Écoute ce candidat. Qu’est-ce qui ne va pas ?', 'Et en plus, ils nous paieront d’avance, c’est certain.', ['Il invente une information.', 'Il nomme une objection.', 'Il pose une condition.'], 0, 'Le document ne le dit pas. EN: invented.', 'a9-erreurs'),
      ],
    },
    {
      id: 'r11-rappel', label: 'Rappel du B2 : leçons 2, 3, 5, 12 et 16', targets: ['structure-b2'],
      questions: [
        mc('Un regret : nous ... vous prévenir plus tôt.', ['aurions dû', 'devrions', 'avions dû'], 0, `Le conditionnel passé, ${refFr(COND_PASSE_UNIT)}. EN: should have.`, 'a8-tableau'),
        tI('Si vous nous aviez prévenus, nous ___ le lot plus tôt. (livrer)', 'Si vous nous aviez prévenus, nous aurions livré le lot plus tôt.', `Si + plus-que-parfait, puis conditionnel passé : ${refFr(SI_PASSE_UNIT)}. EN: aurions livré.`, 'a8-tableau'),
        eS('Si nous aurions su, nous aurions refusé.', 'Si nous avions su, nous aurions refusé.', `Jamais de conditionnel après si, même au passé : ${refFr(SI_PASSE_UNIT)}. EN: avions su.`, 'a8-piege'),
        mc('Je regrette que vous ... venir jeudi.', ['n’ayez pas pu', 'n’avez pas pu', 'ne pourrez pas'], 0, `Subjonctif passé après je regrette que : ${refFr(SUBJ_PASSE_UNIT)}. EN: subjunctive past.`, 'a5-tableau'),
        tI('En ___ tout d’un coup, vous obtiendriez huit pour cent. (commander, gérondif)', 'En commandant tout d’un coup, vous obtiendriez huit pour cent.', `Le gérondif de condition, ${refFr(GERONDIF_UNIT)}. EN: commandant.`, 'a8-construire'),
        eS('Bien que le prix est élevé, le contrat nous intéresse.', 'Bien que le prix soit élevé, le contrat nous intéresse.', `Bien que + subjonctif : ${refFr(CONCESSION_B2_UNIT)}. EN: soit.`, 'a5-construire'),
        mc('Certes, le prix est élevé ; ... le contrat nous intéresse.', ['il n’en reste pas moins que', 'parce que', 'donc'], 0, `La concession de ${refFr(CONCESSION_B2_UNIT)}. EN: nonetheless.`, 'a5-tableau'),
        lC('Écoute. Quel temps suit « je regrette que » ?', 'Je regrette que vous n’ayez pas pu venir.', ['le subjonctif passé', 'le passé composé'], 0, `Le subjonctif passé : ${refFr(SUBJ_PASSE_UNIT)}. EN: subjunctive past.`, 'a5-tableau'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'on what terms', back: 'à quelles conditions', say: fr(E(1202)) },
    { front: 'to refocus the discussion', back: 'recadrer la discussion', say: fr(E(1229)) },
    { front: 'if I may', back: 'si je peux me permettre', say: fr(E(1238)) },
    { front: 'if I follow you', back: 'si je vous suis bien', say: fr(E(1254)) },
    { front: 'I am afraid that', back: 'je crains que + subjonctif', say: fr(E(1278)) },
    { front: 'a counter-proposal', back: 'une contre-proposition', say: fr(E(1295)) },
    { front: 'in return', back: 'en contrepartie', say: fr(E(1315)) },
    { front: 'I know what you are going to say', back: 'je sais ce que tu vas me dire', say: fr(E(1343)) },
    { front: 'the next steps', back: 'les prochaines étapes', say: fr(E(1377)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Réunions et négociations, en résumé',
  body: `${REFRAME} Tu sais maintenant mener une réunion, y prendre ta place, vérifier ce que tu comprends, dire non avec nuance, contre-proposer, céder contre une contrepartie, poser tes conditions au bon mode, persuader et conclure. Tu as aussi préparé l’oral du B2 dans son format. La prochaine leçon, ${refFr('b2.27')}, t’emmène dans la langue juridique et administrative. EN: Next comes legal and administrative French.`,
  points: [
    'Un non sec ferme la porte ; une condition la garde ouverte.',
    'Reformule, puis vérifie : c’est bien ça ?',
    'Rien sans contrepartie, et jamais de conditionnel après si.',
    'Une réunion finit sur quoi, qui et quand.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition', 'suite'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'À toi de négocier',
    opener: {
      line: 'Une demande de six cents panneaux et un associé qui hésite : à toi de le convaincre, et de dire à quelles conditions tu signerais. EN: A request for six hundred panels and a hesitant partner: your turn to convince him and say on what terms you would sign.',
      imageRef: 'lessons/reunions-negociation/act11.jpg',
    },
    sections: [],
    milestone: 'Tu as négocié au téléphone, défendu ta position à l’oral au format de l’examen, et passé le quiz : quatre-vingt-huit questions, onze rounds. EN: You negotiated by phone, defended your position orally in exam format, and sat the quiz: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a11-annote', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-reformuler', 'a11-quiz/r6-ceder', 'a11-quiz/r9-conclure'],
  },
  sections: [
    A11_MODELE, A11_ANNOTE, A11_PLAN, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-mener', 'Mener une réunion', ['ouvrir', 'recadrer', 'la parole', 'conclure'], [
    teach('sheet-mener-teach', 'Le rôle de l’animateur',
      'Animer une réunion, ce n’est pas parler le plus : c’est la faire avancer vers une décision. Tu fixes le but, tu tiens l’ordre du jour et l’horloge, tu ramènes la discussion au sujet, tu donnes la parole à ceux qui ne la prennent pas, et tu termines sur ce qui est décidé, qui s’en charge et pour quand. EN: The chair moves the meeting towards a decision.'),
    table('sheet-mener-table', 'Les formules, moment par moment', ['Moment', 'Formule', 'Remarque'], [
      ['accueillir', 'Bonjour à tous, et merci d’être là.', 'nommer la contrainte : le décalage horaire'],
      ['fixer le but', 'L’objectif de cette réunion est de...', 'un verbe d’action'],
      ['cadrer', 'Je propose qu’on s’en tienne à l’ordre du jour.', 'proposer que + subjonctif'],
      ['avancer', 'Passons au deuxième point : le prix.', 'un point, jamais un item'],
      ['aborder', 'Abordons maintenant la question du prix.', 'pas adresser'],
      ['recadrer', 'Je me permets de recadrer la discussion.', 'ou : revenons à notre sujet'],
      ['reporter', 'Je propose que nous en reparlions à la fin.', 'garder un point pour la fin'],
      ['prendre la parole', 'Si je peux me permettre, j’aimerais ajouter un point.', 'soutenu'],
      ['rebondir', 'Pour rebondir sur ce que dit Mathilde...', 'relier ton idée à la sienne'],
      ['garder la parole', 'Un instant, je termine et je vous écoute.', 'jamais « laissez-moi finir ! »'],
      ['donner la parole', 'Je vous laisse la parole, Olivier.', 'nommer la personne'],
      ['conclure', 'Je vous propose de récapituler.', 'quoi, qui, quand'],
    ]),
  ]),
  sheet('sheet-nuancer', 'Reformuler et nuancer', ['vérifier', 'reformuler', 'l’échelle du désaccord'], [
    teach('sheet-nuancer-teach', 'Vérifier, puis nuancer',
      'Avant de répondre, reformule : si je vous suis bien, autrement dit, ce que j’entends, c’est que... et finis par une question. Pour un désaccord, reconnais d’abord ce qui est juste, nuance ensuite au conditionnel, avec toutefois ou cela dit, ou au subjonctif après je crains que, puis termine par une proposition. EN: Restate and check; then acknowledge, qualify, propose.'),
    table('sheet-nuancer-table', 'Formules et registres', ['Formule', 'Fonction', 'Registre'], [
      ['si je comprends bien', 'reformuler', 'courant'],
      ['si je vous suis bien', 'reformuler', 'soutenu'],
      ['autrement dit', 'redire avec des chiffres, des dates', 'courant'],
      ['pourriez-vous préciser...', 'demander une précision', 'courant'],
      ['sur la même longueur d’onde', 'être d’accord sur les faits', 'courant ; jamais « la même page »'],
      ['je ne suis pas tout à fait d’accord', 'désaccord atténué', 'courant'],
      ['je ne partage pas tout à fait votre analyse', 'désaccord', 'soutenu'],
      ['vous n’avez pas tort ; cela dit...', 'reconnaître, puis nuancer', 'courant'],
      ['je crains que + subjonctif', 'une inquiétude', 'courant ; ne explétif possible'],
      ['j’aurais tendance à penser que', 'une opinion prudente', 'courant'],
      ['ne serait-il pas plus prudent de...', 'proposer en questionnant', 'soutenu'],
    ]),
  ]),
  sheet('sheet-negocier', 'Proposer, céder, conditionner', ['la contre-proposition', 'la concession', 'les modes de la condition'], [
    teach('sheet-negocier-teach', 'Dire à quelles conditions',
      'Une contre-proposition répond à une offre par un autre chiffre et une raison. Une concession se fait contre une contrepartie, par petites étapes, et on la nomme. Une condition se construit au bon mode : si + présent pour une offre ferme, si + imparfait pour une hypothèse, à condition que + subjonctif, sous réserve de + nom, moyennant + nom. Jamais de conditionnel après si. EN: Counter-offer, concede for something, and build each condition in the right mood.'),
    table('sheet-negocier-table', 'Les structures de la condition', ['Structure', 'Suite', 'Exemple'], [
      ['si + présent', 'futur', 'Si vous confirmez, nous appliquerons la remise.'],
      ['si + présent', 'conditionnel (offre adoucie)', 'Si vous vous engagez, nous pourrions revoir le paiement.'],
      ['si + imparfait', 'conditionnel', 'Si vous vous engagiez sur trois ans, nous pourrions baisser le prix.'],
      ['et si + imparfait ?', 'suggestion', 'Et si on regardait d’abord le calendrier ?'],
      ['à condition que', 'subjonctif', 'à condition que l’acompte soit versé'],
      ['proposer que', 'subjonctif', 'Je vous propose que vous payiez à soixante jours.'],
      ['sous réserve de', 'nom', 'sous réserve de la validation des couleurs'],
      ['moyennant', 'nom', 'moyennant un forfait de huit cents euros'],
      ['dans le cas de', 'nom, puis conditionnel', 'Dans le cas d’une commande sur un an, la remise serait de cinq pour cent.'],
      ['en + participe présent', 'conditionnel', 'En vous engageant sur deux ans, vous obtiendriez la remise.'],
      ['soit... soit', 'deux options', 'Soit vous prenez tout, soit nous gardons le prix.'],
    ]),
  ]),
  sheet('sheet-variantes', 'Québec, France, Belgique : les usages', ['les variantes', 'les calques à éviter'], [
    teach('sheet-variantes-teach', 'Une variante n’est pas un calque',
      'Une variante est juste là où on la dit : une rencontre et faire un suivi au Québec, caler une réunion (familier) et revenir vers quelqu’un en France, nonante et septante en Belgique et en Suisse. Un calque de l’anglais, lui, ne l’est nulle part à l’écrit soigné ni avec un client : un item, adresser une question, céduler, sur la même page, élaborer sur, un bon point, vous revenir, un follow-up. EN: A regional form is right where it is said; a calque is right nowhere.'),
    table('sheet-variantes-table', 'Les usages et leurs calques', ['Usage juste', 'Où', 'Calque à éviter'], [
      ['une rencontre', 'Québec', ''],
      ['fixer une rencontre', 'Québec, partout', 'céduler une rencontre'],
      ['caler une réunion', 'France, familier', ''],
      ['revenir vers vous', 'France, au travail', 'vous revenir'],
      ['je vous donne des nouvelles', 'Québec, partout', 'je vous reviens'],
      ['faire un suivi', 'Québec', 'faire un follow-up'],
      ['nonante, septante', 'Belgique, Suisse', ''],
      ['le point suivant', 'partout', 'le prochain item'],
      ['aborder une question', 'partout', 'adresser une question'],
      ['la même longueur d’onde', 'partout', 'la même page'],
      ['préciser', 'partout', 'élaborer sur'],
      ['une remarque juste', 'partout', 'un bon point'],
      ['les prochaines étapes', 'partout', 'les action items'],
    ]),
  ]),
  sheet('sheet-examen', 'L’oral B2 : TEF, TCF, DELF', ['les formats', 'la grille', 'le plan'], [
    teach('sheet-examen-teach', 'Trois examens, une même compétence',
      'TEF, section B : tu présentes un document à un proche qui hésite et tu le convaincs, en répondant à ses objections. TCF, tâche 3 : tu exposes et défends ton point de vue sur une alternative, sans préparation. DELF B2 : tu dégages le problème d’un document, tu défends ta position pendant cinq à sept minutes, puis tu débats avec l’examinateur, qui te contredit. Partout, un exposé qui ne prend pas position ne répond pas à la consigne, et rien ne doit être inventé. EN: Three formats, one skill: take a position and defend it.'),
    table('sheet-examen-table', 'Le plan en cinq temps', ['Temps', 'Ce que tu fais', 'Formule'], [
      ['1', 'présenter le document, exactement', 'j’ai relu la demande...'],
      ['2', 'prendre position', 'mon avis est clair :'],
      ['3', 'monter l’échelle des objections', 'je sais ce que tu vas me dire ; justement'],
      ['4', 'poser tes conditions', 'je leur proposerais..., à condition que...'],
      ['5', 'finir sur une demande', 'tu es d’accord pour que je l’appelle ?'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-mener', title: 'Mener sans calque', format: 'mcq' as const, coach: 'Un point, pas un item ; aborder, pas adresser ; revenir au sujet. EN: the French meeting words.', q: 'Pour ramener la discussion : ... à notre sujet.', opts: ['Revenons', 'Retournons'], correct: 0, why: 'Revenir à un sujet. EN: revenir.', items: [E(1216), E(1217), E(1220), E(1222), E(1229), E(1234)], audio: AUDIO },
  { id: 'd-parole', title: 'Prendre ou garder', format: 'sort' as const, coach: 'Deux piles : entrer dans la discussion, ou y garder et donner ta place. EN: taking the floor, or holding and handing it over.', buckets: ['prendre la parole', 'garder ou donner la parole'], items: [E(1238), E(1240), E(1244), E(1239), E(1247), E(1246)], audio: AUDIO },
  { id: 'd-reformuler', title: 'Reformuler, puis vérifier', format: 'mcq' as const, coach: 'Redis avec tes mots, puis vérifie. EN: restate, then check.', q: 'If I follow you correctly : si je vous ... bien.', opts: ['suis', 'comprends correctement'], correct: 0, why: 'Si je vous suis bien. EN: suis.', items: [E(1254), E(1258), E(1260), E(1262), E(1268), E(1269)], audio: AUDIO },
  { id: 'd-nuancer', title: 'Dire non, avec nuance', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute, lentement : reconnaître, nuancer, proposer. EN: read each one aloud.', items: [E(1274), E(1278), E(1279), E(1281), E(1283), E(1285)], audio: AUDIO },
  { id: 'd-proposer', title: 'Si + imparfait', format: 'mcq' as const, coach: 'Après si, jamais de conditionnel. EN: no conditional after si.', q: 'Que diriez-vous si nous ... le prix ?', opts: ['baissions', 'baisserions'], correct: 0, why: 'Si + imparfait. EN: baissions.', items: [E(1291), E(1293), E(1295), E(1299), E(1305), E(1308)], audio: AUDIO },
  { id: 'd-ceder', title: 'Céder ou tenir', format: 'sort' as const, coach: 'Deux piles : ce que tu cèdes contre quelque chose, et ce que tu refuses calmement. EN: concede for something, or refuse calmly.', buckets: ['une concession avec contrepartie', 'un refus calme'], items: [E(1313), E(1315), E(1322), E(1317), E(1318), E(1320)], audio: AUDIO },
  { id: 'd-offre', title: 'Ferme ou hypothèse', format: 'sort' as const, coach: 'Deux piles : ce qui est promis, et ce qui est seulement envisagé. EN: promised, or only considered.', buckets: ['une offre ferme', 'une hypothèse'], items: [E(1328), E(1342), E(1338), E(1329), E(1335), E(1339)], audio: AUDIO },
  { id: 'd-persuader', title: 'L’échelle des objections', format: 'flashcard' as const, coach: 'Lis l’échelle dans l’ordre : l’objection, puis sa réponse. EN: read each objection, then its answer.', items: [E(1343), E(1344), E(1347), E(1348), E(1349), E(1351)], audio: AUDIO },
  { id: 'd-conclure', title: 'Quoi, qui, quand', format: 'mcq' as const, coach: 'Une décision, un nom, une date. EN: a decision, a name, a date.', q: 'Next steps :', opts: ['les prochaines étapes', 'les action items'], correct: 0, why: 'Les prochaines étapes. EN: next steps.', items: [E(1362), E(1363), E(1365), E(1366), E(1368), E(1369)], audio: AUDIO },
  { id: 'd-examen', title: 'Le modèle, phrase par phrase', format: 'flashcard' as const, coach: 'Dis chaque phrase comme à l’examen : position, objection, condition, demande. EN: say each line as in the exam.', items: [E(1388), E(1380), E(1381), E(1383), E(1385), E(1387)], audio: AUDIO },
  { id: 'd-structures', title: 'Les modes du B2', format: 'mcq' as const, coach: 'Si + imparfait, à condition que + subjonctif, le gérondif pour la condition. EN: the B2 moods under load.', q: 'À condition que vous vous ... sur la durée.', opts: ['engagiez', 'engagez'], correct: 0, why: 'Subjonctif. EN: engagiez.', items: [E(1329), E(1339), E(1278), E(1338), E(1313), E(1350)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'reunion-derive', description: 'Lets the meeting drift or steers it with English shapes (le prochain item, adresser une question, céduler, l’agenda), and never states the aim.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a11-scenario'], drill: 'd-mener', retest: 'd-mener' },
  { id: 'parole-brutale', description: 'Takes or holds the floor bluntly (Attendez, Laissez-moi finir !) or with calques (un bon point, additionner un point).', detectOn: ['a3-trier', 'a3-erreurs', 'a3-check', 'a11-scenario'], drill: 'd-parole', retest: 'd-parole' },
  { id: 'reformulation-absente', description: 'Answers without checking understanding, reformulates as an assertion, or uses calques (élaborer sur, sur la même page).', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a11-scenario'], drill: 'd-reformuler', retest: 'd-reformuler' },
  { id: 'desaccord-plat', description: 'Disagrees flatly or personally (vous avez tort, un prix cher), or puts the indicative after je crains que.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a11-mission'], drill: 'd-nuancer', retest: 'd-nuancer' },
  { id: 'proposition-calque', description: 'Proposes with a conditional after si, the indicative after proposer que, or calques (considérer, vous revenir, un discount).', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-proposer', retest: 'd-proposer' },
  { id: 'concession-gratuite', description: 'Concedes with nothing in return, all at once or unannounced, or refuses aggressively at the threshold.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-ceder', retest: 'd-ceder' },
  { id: 'offre-mal-construite', description: 'Builds conditional offers in the wrong mood (si + conditionnel or futur, à condition que + indicatif, sous réserve que + indicatif) or confuses a firm offer with a hypothesis.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-offre', retest: 'd-offre' },
  { id: 'persuasion-abstraite', description: 'Persuades with abstract benefits, handles only one objection or contradicts it, or promises what the document does not say.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-persuader', retest: 'd-persuader' },
  { id: 'suite-floue', description: 'Ends a meeting without a recap, an owner or a date, or with calques (follow-up, action items, vous revenir).', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a11-scenario'], drill: 'd-conclure', retest: 'd-conclure' },
  { id: 'consigne-examen', description: 'Misses what the B2 speaking task demands: no clear position, invented facts, no objection handled, or no closing request.', detectOn: ['a11-modele', 'a11-plan', 'a11-mission'], drill: 'd-examen', retest: 'd-examen' },
  { id: 'structure-b2', description: 'Misforms the B2 structures a negotiation leans on under load (conditionnel passé, si + plus-que-parfait, subjonctif passé, gérondif, bien que).', detectOn: ['a8-tableau', 'a8-piege', 'a11-mission'], drill: 'd-structures', retest: 'd-structures' },
];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

spreadMissionSlots(SECTIONS, DRILL_LIST);
for (const s of SECTIONS) if (s.type === 'quiz') spreadQuizSlots(s);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

/** Every recordingId the sections name, each with its studio brief. */
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-26-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b2-26-ordre': 'The agenda and Nadia’s note (act 1), ONE VOICE, one take, a Montréal woman in her forties (Nadia) reading her own note to the team: brisk, confident, strategic. Québec French. The agenda items are read as a list with a short breath between them; the note is spoken, not recited.',
  'rec-b2-26-ouverture-ecoute': 'REQUIRED FOR THE EAR MISSION (act 2): ten lines, ONE TAKE, in authored order, as the opening of a video meeting. TWO VOICES: Nadia (Québec French, warm and in control) speaks every line; a light video-call feel. Natural B2 speed, no slowing for learners. « Julien, je vous arrête une seconde » is friendly, not sharp.',
  'rec-b2-26-piege-reunion': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-b2-26-parole': 'The story (act 3), THREE VOICES: a narrator; Julien (Brussels, Belgian French, enthusiastic, talks fast); the learner (Québec French, calm). Olivier is not heard. The learner’s interruption is polite and firm, never raised.',
  'rec-b2-26-appel-ecoute': 'REQUIRED FOR THE EAR MISSION (act 4): ten lines, ONE TAKE, in authored order, a phone call. TWO VOICES alternating: Mathilde (Lyon, France French, precise, friendly) and the Tessère speaker (Québec French). Phone-line feel on Mathilde only. The reformulations rise slightly at the end, as real checks.',
  'rec-b2-26-piege-reformuler': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-b2-26-compte-rendu': 'The internal minutes (act 5), ONE VOICE, one take, Kim (a Montréal woman in her late twenties) reading her minutes at the next meeting: neutral, efficient. Québec French. The two quotations from Olivier are read in his words but not acted.',
  'rec-b2-26-prix-ecoute': 'REQUIRED FOR THE EAR MISSION (act 6): eleven lines, ONE TAKE, in authored order, the price negotiation. THREE VOICES: Mathilde (Lyon, France French), Julien (Brussels, Belgian French: « nonante » is said naturally, not stressed), Nadia (Québec French). Video-call feel. Calm and businesslike; nobody raises their voice.',
  'rec-b2-26-piege-proposer': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « baissions », « payiez », « commandions » are clearly articulated.',
  'rec-b2-26-ceder': 'The magazine column (act 7), ONE VOICE, one take, a radio-columnist voice (France or Québec French), measured and slightly ironic. The quoted formulas are said as quotations, with a small change of tone.',
  'rec-b2-26-offre': 'The written offer (act 8), ONE VOICE, one take, Nadia reading her offer before sending it: precise, confident. Québec French. Each numbered section gets a short breath.',
  'rec-b2-26-piege-offre': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « engagiez » [ɑ̃.ga.ʒje] and « engageant » must be clearly different to the ear.',
  'rec-b2-26-persuader-ecoute': 'REQUIRED FOR THE EAR MISSION (act 9): eleven lines, ONE TAKE, in authored order, an office conversation. TWO VOICES: Nadia (Québec French, warm, persuasive, never pushy) speaks the first ten lines; Olivier (Québec French, a cautious man in his fifties) speaks the last, half won over. Natural speed.',
  'rec-b2-26-cloture-ecoute': 'REQUIRED FOR THE EAR MISSION (act 10): nine lines, ONE TAKE, in authored order, the close of the video meeting. ONE VOICE, Nadia (Québec French), with a clear, slightly slower summary rhythm; each decision is a separate breath.',
  'rec-b2-26-piege-suite': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-b2-26-salon': 'The model monologue (act 11), ONE VOICE, one take, a Montréal speaker in their thirties talking to a colleague: natural B2 exam pace, about two minutes, warm and convincing. The document line at the start is read neutrally, as a caption; the monologue itself is spoken, not read.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 26',
  intro: 'A correct, polite « non » can end a negotiation: it gives the other side nothing to answer. This lesson teaches the spoken moves of business meetings and negotiations at B2: opening and steering a meeting, taking and keeping the floor, checking understanding by reformulating, disagreeing with nuance, proposing and counter-proposing, conceding only in return for something, building conditional offers in the right mood, persuading by answering objections before they come, and closing on decisions, owners and dates. Québec, France and Belgium usages are marked, and the meeting calques from English are trapped. It ends with a spoken task in the format of the TEF, TCF and DELF B2 speaking papers: present a client’s request to a hesitant partner, win him over, and set your conditions.',
  skill: 'PO',
  grammarAssumed: [AFFAIRES_UNIT, TUVOUS_UNIT, POLITESSE_UNIT, SI_UNIT, CONCESSION_UNIT],
  grammarIntroduced: [
    'Steering a meeting in French: stating the aim, s’en tenir à l’ordre du jour, recadrer la discussion, garder un point pour la fin, with proposer que + subjunctive',
    'Managing the floor: si je peux me permettre, rebondir sur, couper / laisser / donner la parole, and keeping the floor calmly',
    'Reformulating and checking: si je vous suis bien, autrement dit, pourriez-vous préciser, ce que j’entends, c’est que, être sur la même longueur d’onde',
    'Graded diplomatic disagreement beyond B1: je ne partage pas tout à fait votre analyse, cela dit, toutefois, je crains que + subjunctive (with expletive ne), j’aurais tendance à penser que, the negative question that proposes',
    'Proposals and counter-proposals: que diriez-vous de, nous pourrions envisager, faire une contre-proposition, mettre sur la table, et si + imparfait',
    'Strategic concession: faire un geste, en contrepartie, à condition que + subjunctive, céder sur un point, une commande ferme, soit... soit, knowing one’s threshold',
    'Conditional offers by mood: si + présent (firm) against si + imparfait (hypothesis), never si + conditionnel; sous réserve de, moyennant, dans le cas de; the gérondif of condition',
    'Persuasion in the TEF section B shape: naming objections first (je sais ce que tu vas me dire), turning them (justement), making benefits concrete, lowering risk, ending on a request',
    'Closing a meeting on decisions, owners and dates: récapituler, s’en charger, les prochaines étapes, rester en suspens; Québec faire un suivi and France revenir vers quelqu’un',
    'A 3 to 5 minute spoken argument in B2 exam format, self-checked against an annotated model and a six-criterion grid',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Un non correct et poli peut suffire à fermer une négociation : il ne laisse rien à répondre. Cette leçon t’apprend les gestes d’une réunion et d’une négociation au B2 : mener, prendre la parole, reformuler, nuancer, contre-proposer, céder contre une contrepartie, poser tes conditions au bon mode, persuader et conclure. À la fin, tu présentes à l’oral une demande de client à ton associé, tu le convaincs et tu fixes tes conditions, au format du TEF, du TCF et du DELF B2.',
    minutes: 150,
    difficulty: 4,
    glyph: 'nég',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: REUNIONS_NEGOCIATION_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (build log, 2026-09-25). Kept, as every other lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, dicteeFor };
