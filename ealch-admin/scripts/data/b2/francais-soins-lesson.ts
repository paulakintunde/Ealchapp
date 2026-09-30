// b2.28.l1 « Le français des soins » · the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md in the VOCAB / WORKSHOP SHAPE of
// B1-WORKSHOP-AND-VOCAB-SHAPES.md (§1.4, §2.3), under the B2 rules of
// b2/B2-BUILD-LOG.md. No new section types.
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema, so the lesson validates with it in place (as b2.16 to b2.21 do).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   VOCAB / WORKSHOP rhythm per act 2 to 11: MEET the words in a care
//   situation (listening at natural speed, reading, story), LEARN them
//   (cardDeck, tapTable, examples, focus), TELL THEM APART (groupDrill),
//   TRAP the calque or the faux ami (trapDrill stepped, or commonErrors),
//   USE them (« À toi », a pick-the-line groupDrill), then from act 3 on a
//   60 to 120 word text of the genre (« Dans un texte »: a triage note, a
//   history sheet, a transcript, a pharmacy label, a leaflet, an email, a
//   consent form, a hospital letter, a message to a relative), then the
//   gated act check.
//
//    1  Le patient précis                 7   the vague patient; the four questions; faire répéter
//    2  Où, quand, depuis quand           7   il y a / depuis / ça fait… que, par moments (tapTable)
//    3  Quelle douleur, et combien        7   lancinante, aiguë, ça me lance; zéro à dix; à l'effort
//    4  Tes antécédents                   7   antécédents, opéré de, suivi pour, allergie / intolérance
//    5  Comprendre le médecin             7   the natural-speed consultation; radio, bilan, arrêt, orienter
//    6  L'ordonnance et la pharmacie      7   au cours du repas, à jeun, en cas de besoin, en vente libre
//    7  La notice                         7   the rubriques, contre-indiqué, effet indésirable, éventuel
//    8  Le parcours de soins              7   the Lyon hospital letter; France, Québec, Belgique, Suisse (tapTable)
//    9  Poser ses questions, consentir    7   ce que ça implique, risques, alternative, délai, deuxième avis
//   10  Le mot savant, le mot courant     7   céphalée, asthénie, tachycardie; drogue, physicien (tapTable)
//   11  Parler pour un proche             7   j'accompagne, il dit que; the cautious answer, the support
//   12  À toi d'écrire                   11   model, plan, uses, role play, TASK, practice, cheat, quiz
//
//   TOTAL 88 missions, 12 acts (7 x 11 + 11). Texts: five readings of 200 to
//   350 words (a clinic's sheet, a magazine page, a leaflet, a hospital
//   letter, the model letter), nine act texts of 60 to 120 words, four
//   hideLines listenings (a triage call, the consultation at natural speed,
//   the consent talk, the cautious answer at the emergency room), three
//   stories, one scene, one role play. Corpus: 194 authored rows
//   (.1000-.1193) plus 47 reused seed rows, released act by act through
//   `deckTranche`. Quiz: 12 rounds of 8 (one per act 2 to 11, an exam round
//   in DELF B2 and TCF format, a recycling round citing A2, B1 and B2
//   lessons by position). Twelve triggers, twelve drills, five sheets,
//   twelve terms. Three tapTables (acts 2, 8, 10).
//   Chapter artwork: `francais-soins-image-prompts.md`, 12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Décris avec précision, et demande jusqu’à comprendre. »
//   EN: Describe precisely, and ask until you understand.
//
//   ONE METAPHOR, LE CARNET (every chapter image): the small notebook a
//   patient fills before the visit, during it and for someone else. It is
//   NOT « learn the doctor's words » (act 10 says the everyday word is
//   enough) and NOT « follow the orders » (act 9: you ask, you may wait).
//   Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the patient's, carer's and relative's French at B2: dating,
//           locating, qualifying and grading a symptom; the medical
//           history; understanding a consultation, a pharmacist, a leaflet
//           and a hospital letter; the consent questions; the doctor's word
//           against the everyday word; the care faux amis; the system words
//           of France, Québec, Belgium and Switzerland; speaking for a
//           relative; hearing a cautious answer; the written account for a
//           new doctor.
//   QUOTES  lesson 27 in A2 (the A2 doctor rows, imported, never retyped);
//           the reframes of lessons 19, 26, 35, 37 and 39 in B1 and of
//           lessons 5, 6, 17, 20 and 22 in B2, re-exported from their corpus
//           files; the cautious formulas of lesson 20 in B2 are HEARD, never
//           rebuilt; the empathy formulas of lesson 35 in B1, imported.
//   LEAVES  clinical vocabulary (the lesson never makes the learner a
//           clinician); science for a non-specialist to lesson 29 in B2
//           (named in the roundup); legal French to lesson 27 in B2.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English authored on every learner
//   string (an `en` field or a final `EN: `), never on an answer. tu in
//   every instruction; the doctors, the pharmacist and the nurse say vous.
//   Every `say` is French. No spaced « ? » or « ! » in any scene or story
//   bubble. The scenario uses ’ only and embeds no seed row. Lessons cited
//   by trail position in words, never by raw id (A2 through unitRef, as
//   lesson 11 in B2 does). Mission answer slots spread by
//   `spreadMissions()`, the quiz by `spreadSlots()` (no text changes, no
//   `why` names a position). Gate B2-2 spoken-variant line: the written
//   norm is taught; « ça fait… que » is courant, not wrong. NO MEDICAL
//   ADVICE: the only medicine is fictional, every dose is marked invented,
//   and the task's grader never judges medical content.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE FACT CHECK: corpus §A.7 lists 23 claims (systems of four
//      countries, emergency numbers, what a stress fracture is, fasting for
//      ultrasounds, standard leaflet phrasing). Check before publish, as
//      lesson 23 in B2's were.
//   2. « 811 », « 144 » AND « le 15 » ARE WRITTEN IN FIGURES. The device TTS
//      may read « huit cent onze » where Québec says « huit-un-un ». The
//      studio briefs say how to read them; with TTS only, should the rows
//      spell them out?
//   3. « ÇA FAIT TROIS SEMAINES QUE » is taught as correct and courant, beside
//      depuis. « Aller à l'urgence » is marked Québec, « aller aux urgences »
//      France. « Physiothérapie » (Québec) and « kinésithérapie » (France)
//      both named. « Référer » and « prescription » (Québec usage for the
//      referral and the prescription) are deliberately NOT taught either
//      way, since published rows use them. Agree?
//   4. « À DATE » (« je suis à date dans mes vaccins ») is trapped as a
//      calque heard in Québec, with « à jour » as the written choice. Keep?
//   5. THE TASK: situation A (a written account for a relative's new doctor)
//      or B (a formal email to a clinic), 200 to 250 words, DELF B2 PE,
//      FIVE criteria (tâche 3, cohérence 3, étendue 2, correction 2,
//      registre 2 = 12) as lessons 16 and 19 in B2. `Lesson.skill` 'PE'.
//   6. `Lesson.version` 1. 'coach-fr-FR' is inert; kept. The twelve openers
//      need art (ART_PENDING until Paul's images land).
//   7. The lesson cites lessons 27 and 29 in B2 (written in parallel): the
//      roundup names 29 as next, the header names 27. Both publish with it
//      or the roundup line waits.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  CLINIQUE_TEXT, ANTECEDENTS_TEXT, NOTICE_TEXT, LETTRE_TEXT, MODELE_TEXT, TASK_MODEL,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A11,
  MEDECIN_UNIT, DEPUIS_UNIT, DECL_UNIT, DISCOURS_UNIT, TUVOUS_UNIT, EMOTIONS_UNIT, IMPERS_UNIT,
  MEDECIN_REF, DEPUIS_REF, DECL_REF, DISCOURS_REF, TUVOUS_REF, EMOTIONS_REF, LECTURE_REF, COURRIELS_REF,
  SUBJ_PASSE_REF, MODES_REF, BUT_REF, IMPERS_REF, STYLE_REF, REUNIONS_REF, SCIENCE_REF,
  MEDECIN_REF_EN, TUVOUS_REF_EN, COURRIELS_REF_EN, IMPERS_REF_EN, EMOTIONS_REF_EN,
  B135_REFRAME, B135_REFRAME_EN, B137_REFRAME, B137_REFRAME_EN, B139_REFRAME, B139_REFRAME_EN,
  B126_REFRAME, B126_REFRAME_EN, B119_REFRAME, B119_REFRAME_EN, B220_REFRAME, B220_REFRAME_EN,
  B217_REFRAME, B217_REFRAME_EN, B205_REFRAME, B205_REFRAME_EN, B206_REFRAME, B206_REFRAME_EN,
  B222_REFRAME, B222_REFRAME_EN,
} from './francais-soins-corpus.ts';
import { FRANCAIS_SOINS_TERMS } from './francais-soins-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };
type TrapCard = NonNullable<Sec<'trapDrill'>['cards']>[number];
type TrapStep = NonNullable<Sec<'trapDrill'>['steps']>[number];
type Card = NonNullable<Sec<'cardDeck'>['cards']>[number];

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string; drills?: string[] };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.28: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

/** The imports are typed by hand in the corpus; hold them to the seed. */
for (const id of IMPORT_IDS) {
  const d = SEED.get(id)?.drills ?? [];
  if (!SEED.has(id)) throw new Error(`b2.28: import ${id} is not in the seed`);
  if (!NOT_SPEAKABLE.includes(id) && !d.includes('voiceflash')) throw new Error(`b2.28: ${id} has no voiceflash but is not in NOT_SPEAKABLE`);
  if (!NOT_DECK_ABLE.includes(id) && !d.includes('flashcard')) throw new Error(`b2.28: ${id} has no flashcard but is not in NOT_DECK_ABLE`);
}

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.28: no ipa on ${id}`);
  return r.ipa;
}
/** The AUTHORED row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`b2.28: no authored respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
/** A quotation with no corpus row (a vague or wrong line shown as such). */
const free = (f: string, e: string, note?: string): GItem => ({ fr: f, en: e, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const uc = (situation: string, id: string) => ({ situation, fr: fr(id), en: en(id) });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

const card = (id: string, head: string, label: string, body: string): Card =>
  ({ head, label, fr: fr(id), sub: rsOf(id), body });

/** A trap card: the WRONG version in promptSound (never spoken), the row's
 *  correct French in fr. */
const trap = (id: string, promptLabel: string, promptSound: string, tip: string): TrapCard =>
  ({ promptLabel, promptSound, fr: fr(id), ipa: ipaOf(id), tip });

const STEPS = (ruleTitle: string, cardsTitle: string): TrapStep[] => [
  { label: 'La règle', kind: 'rule', title: ruleTitle },
  { label: 'Six cartes', kind: 'cards', title: cardsTitle },
  { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
  { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
];

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** THE « IN A TEXT » BEAT that closes acts 3 to 11: one text of the genre,
 *  60 to 120 words, with the answers behind the modal. Same title every
 *  time, so a learner and a reviewer see the loop. */
function dansUnTexte(
  id: string, frSub: string, text: string, questions: { q: string; a: string }[], rec: string, terms: string[],
): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true,
    title: 'Dans un texte', frSub, text, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

/** The « use it » beat, titled the same way in every act. */
function aToi(id: string, title: string, groups: SoundGroup[], terms: string[], sheetId?: string): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: `À toi : ${title}`,
    groups, audio: AUDIO, say: REFRAME, terms, ...(sheetId ? { sheetId } : {}),
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 · LE PATIENT PRÉCIS
 *
 *  The problem: a correct, vague « j'ai mal au genou » gives the doctor
 *  nothing. The precise sentence gives the side, the duration and the
 *  trigger. Asking to repeat is part of the job. The task is announced.
 *  NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const VAGUE = {
  fr: 'J’ai mal au genou, c’est tout.',
  ipa: '/ʒe mal o ʒə.nu sɛ tu/',
  respell: '[zhay MAL oh zhuh-NOO | seh TOO]',
  en: 'My knee hurts, that is all.',
};

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Quinze minutes pour un genou',
  frSub: 'La clinique sans rendez-vous',
  setting: { place: 'Une clinique sans rendez-vous du Plateau', city: 'Montréal', time: 'mardi, 18 h 20', ambience: 'une salle d’examen, une fenêtre sur la neige, un écran d’ordinateur' },
  beats: [
    {
      kind: 'narration',
      text: 'Montréal, un mardi soir. Ton genou droit te fait mal depuis trois semaines, et tu as fini par venir à la clinique sans rendez-vous. La docteure Gagnon ferme la porte, s’assoit et ouvre ton dossier.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'La docteure Gagnon',
      fr: fr(E(1010)), en: en(E(1010)), respell: rsOf(E(1010)),
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: VAGUE.fr, en: VAGUE.en, respell: VAGUE.respell,
      stage: 'Ta phrase est juste. Elle attend la suite, et la suite ne vient pas.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'La docteure Gagnon',
      fr: 'D’accord. Il me faudrait un peu plus que ça.',
      en: 'All right. I would need a little more than that.',
      respell: '[da-KOR | eel muh foh-DREH | uhⁿ puh plü kuh SA]',
      stage: 'Elle regarde l’horloge : il reste douze minutes.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle réponse lui donne ce dont elle a besoin.',
      size: 'lg',
      options: [
        { fr: VAGUE.fr, respell: VAGUE.respell, en: VAGUE.en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1000)), respell: rsOf(E(1000)), en: en(E(1000)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'La docteure Gagnon note trois choses : le genou droit, trois semaines, les escaliers. Elle peut déjà poser les bonnes questions.',
        breaks: 'Elle pose dix questions pour obtenir ce que tu aurais pu dire en une phrase, et la consultation est presque finie.',
      },
    },
    {
      kind: 'break',
      heading: 'Une phrase juste, mais vide',
      body: 'Ta phrase était correcte, mais elle ne disait ni quel genou, ni depuis quand, ni quand ça fait mal. Donne le lieu, la durée et le déclencheur. EN: Correct but empty: give the place, the duration and the trigger.',
      wrong: { fr: VAGUE.fr, ipa: VAGUE.ipa, respell: VAGUE.respell, en: VAGUE.en },
      right: { fr: fr(E(1000)), ipa: ipaOf(E(1000)), respell: rsOf(E(1000)), en: en(E(1000)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: 'Cette leçon t’apprend à décrire avec précision, à comprendre un médecin, un pharmacien et une notice, à poser tes questions et à parler pour un proche. À la fin, tu écris au nouveau médecin d’un proche, comme au DELF B2.',
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['precision'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Décrire un symptôme avec précision', s: 'Actes 2 à 4 : quand, où, comment, combien, et ce qui est venu avant' },
    { t: 'Comprendre un médecin, un pharmacien, une notice', s: 'Actes 5 à 8 : la consultation, l’ordonnance, la notice, la lettre d’hôpital' },
    { t: 'Poser tes questions et parler pour un proche', s: 'Actes 9 à 11 : consentir, demander le mot courant, entendre une réponse prudente' },
    { t: 'Écrire au nouveau médecin d’un proche', s: 'Acte 12 : 200 à 250 mots, au format du DELF B2' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the clinic's sheet. B2 question types labelled. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La fiche de la clinique',
  frSub: 'Lis, et cherche ce que la clinique attend de toi',
  text: CLINIQUE_TEXT,
  glossary: [
    { word: 'vous échappe', en: 'you do not catch it', note: 'Un mot t’échappe : tu ne le comprends pas, ou tu ne le retiens pas.' },
    { word: 'vous en voudra', en: 'will hold it against you', note: 'En vouloir à quelqu’un : lui reprocher quelque chose.' },
  ],
  questions: [
    { q: 'Global : à quoi sert ce document ?', a: 'À aider le patient à préparer sa consultation : ce qu’il faut décrire, apporter et demander, pour que les quinze minutes servent.' },
    { q: 'Détail : quelles trois choses faut-il savoir avant de partir ?', a: 'Ce qu’on a, ce qu’on doit faire, et quand revenir.' },
    { q: 'Inférence : pourquoi la clinique conseille-t-elle de noter ses réponses ?', a: 'Parce que, stressé ou pressé, on oublie l’essentiel pendant la consultation ; écrit, rien ne se perd.' },
    { q: 'Point de vue : quelle relation la clinique veut-elle avec le patient ? Comment le sais-tu ?', a: 'Un travail à deux : « notre équipe est là pour vous soigner ; vous, vous êtes là pour nous aider à comprendre ».' },
  ],
  audio: REC('rec-b2-28-clinique'),
  say: REFRAME,
  terms: ['precision'],
};

const A1_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-decrire',
  title: 'Quatre outils du patient précis',
  frSub: 'Avant d’entrer dans la salle',
  hint: 'Quatre cartes : deux pour décrire, deux pour demander.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['precision'],
  cards: [
    card(E(1002), 'Pourquoi tu viens', 'le motif',
      'Une phrase qui dit ce qui t’amène. C’est souvent la première question de l’accueil. EN: the reason for the visit, in one sentence.'),
    card(E(1001), 'Le cœur du travail', 'décrire',
      `Où, depuis quand, comment, combien. Avoir mal à, tu le sais depuis ${MEDECIN_REF} ; ici, tu vas bien plus loin. EN: where, since when, how, how much.`),
    card(E(1008), 'Ne rien laisser passer', 'demander',
      'Faire répéter, ce n’est pas impoli : c’est ton droit, et c’est prudent. EN: asking someone to say it again is your right.'),
    card(E(1003), 'Au guichet', 'consulter pour',
      'Consulter pour une douleur, pour une toux : pour + ce qui t’amène. EN: consulter pour + the reason.'),
  ],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Vague ou précis',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Juste, mais vide', [
      free('J’ai mal au genou.', 'My knee hurts.', 'quel genou, depuis quand'),
      free('Ça ne va pas très bien.', 'I am not doing very well.', 'quoi, où'),
      free('J’ai un petit problème.', 'I have a small problem.', 'aucun renseignement'),
    ], chk('Ces trois phrases sont correctes. Que leur manque-t-il ?',
      ['où, depuis quand, comment', 'la politesse', 'un verbe au conditionnel'], 0,
      'Le problème n’est pas la grammaire : aucune ne donne au médecin de quoi travailler. EN: none of them gives the doctor anything to work with.')),
    grp('Précis', [
      it(E(1000), 'le côté, la durée, le déclencheur'),
      it(E(1003), 'le motif'),
      it(E(1006), 'préparé avant'),
      it('fr.a2.symptomes.195', 'la question qui t’attend'),
    ], chk('Dans la première phrase, quel passage dit ce qui déclenche la douleur ?',
      ['surtout quand je descends les escaliers', 'depuis trois semaines', 'au genou droit'], 0,
      'Le déclencheur : ce qui fait venir la douleur. EN: the trigger.')),
    ctl('Faire répéter', 'La docteure emploie un mot que tu ne connais pas. Tu…',
      ['lui demandes de le dire autrement', 'hoches la tête pour ne pas la déranger'], 0,
      'Mieux vaut faire répéter une phrase que repartir avec un doute. EN: better to ask than to leave in doubt.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['precision'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où ces phrases changent tout',
  cases: [
    uc('La secrétaire te demande pourquoi tu viens', E(1003)),
    uc('Le médecin emploie un mot inconnu', E(1007)),
    uc('Tu veux une explication sans jargon', E(1009)),
    uc('Tu sors, et un point reste flou', E(1011)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['precision'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Vague ou précis', 'Laquelle aide vraiment le médecin ?',
    ['J’ai mal au genou droit depuis trois semaines, surtout quand je descends les escaliers.', 'J’ai mal au genou, c’est tout.'], 0,
    'Le lieu, la durée et le déclencheur, en une phrase. EN: place, duration, trigger.'),
  ctl('Le motif', 'Le motif de consultation, c’est…',
    ['ce qui t’amène, dit en une phrase', 'la liste de tes médicaments', 'le nom de ton médecin'], 0,
    'Ce qui t’amène aujourd’hui. EN: why you came.'),
  ctl('Le doute', 'Tu n’as pas compris un mot. Le mieux :',
    ['faire répéter', 'chercher plus tard sur internet'], 0,
    'Demande tout de suite : le médecin est là pour ça. EN: ask on the spot.'),
], ['precision']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le patient précis',
    opener: {
      line: 'Quinze minutes, un genou qui fait mal, et une phrase juste qui ne dit rien : ici tu apprends à décrire, et à demander. EN: Fifteen minutes, a painful knee and a correct sentence that says nothing: here you learn to describe, and to ask.',
      imageRef: 'lessons/francais-soins/act01.jpg',
    },
    sections: [],
    milestone: 'Tu donnes au médecin le lieu, la durée et le déclencheur en une phrase, et tu fais répéter sans gêne. EN: You give the place, the duration and the trigger in one sentence, and ask for repeats without embarrassment.',
    estScreens: 38, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_CARTES, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 · OÙ, QUAND, DEPUIS QUAND
 *
 *  A call to the Québec health line at night: the start, the duration, the
 *  rhythm, the exact place. Traps: « pour trois semaines », « commencé
 *  depuis », « vient et va », « dans le matin », « plus et plus », « a
 *  apparu ».
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'L’appel de nuit',
  frSub: 'Écoute ce que l’infirmière apprend, et dans quel ordre',
  lines: [
    ln(E(1012)), ln(E(1013)), ln(E(1014)), ln(E(1015)), ln(E(1016)), ln(E(1017)),
    ln(E(1018)), ln(E(1019)), ln(E(1020)), ln(E(1021)), ln(E(1022)),
  ],
  questions: [
    { q: 'Quand la douleur a-t-elle commencé ?', opts: ['il y a trois semaines', 'il y a trois jours', 'hier soir'], correct: 0, why: 'Il y a trois semaines, après une course : il y a donne le début. EN: three weeks ago.' },
    { q: 'Au début, la douleur était là…', opts: ['seulement à l’effort, par moments', 'tout le temps, jour et nuit'], correct: 0, why: 'Par moments, seulement à l’effort. EN: now and then, only on exertion.' },
    { q: 'Où est-elle, exactement ?', opts: ['sous la rotule, côté extérieur', 'derrière le genou', 'dans toute la jambe'], correct: 0, why: 'Juste sous la rotule, sur le côté extérieur. EN: just below the kneecap, outer side.' },
    { q: 'Comment est-elle apparue ?', opts: ['progressivement', 'brusquement'], correct: 0, why: 'Progressivement : peu à peu. EN: gradually.' },
    { q: 'À quel moment de la journée est-ce pire ?', opts: ['le matin, au réveil', 'le soir, au coucher', 'à midi'], correct: 0, why: 'Le matin au réveil, puis ça se calme. EN: in the morning.' },
  ],
  audio: REC('rec-b2-28-triage-ecoute'),
  say: REFRAME,
  terms: ['duree'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Dater et placer une douleur',
  frSub: 'Cinq cartes pour le quand et le où',
  hint: 'Cinq cartes : le début, le rythme, la place.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['duree'],
  cards: [
    card(E(1028), 'Le début ou la durée', 'la règle',
      `Depuis, tu l’as vu dans ${DEPUIS_REF}. Ici, il sert à dater une douleur qui continue ; il y a donne le jour où elle a commencé. EN: depuis for what goes on, il y a for the start.`),
    card(E(1025), 'Comment elle est venue', 'l’apparition',
      'D’un coup, ou peu à peu. Au passé composé, avec être : la douleur est apparue. EN: suddenly or gradually; apparaître takes être.'),
    card(E(1024), 'Pas tout le temps', 'le rythme',
      'Par moments : de temps en temps. Le médecin veut savoir si la douleur est continue. EN: now and then.'),
    card(E(1026), 'Elle part et revient', 'le rythme',
      'Ça va et ça vient : l’ordre français est l’inverse de l’anglais. EN: it comes and goes, in the French order.'),
    card(E(1027), 'Au centimètre près', 'la place',
      'Sur le côté, au-dessus, juste en dessous : montre, puis dis. EN: place the pain precisely.'),
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le début, la durée, la place',
  groups: [
    grp('Le début', [
      it(E(1013), 'il y a + durée'),
      it('fr.a2.corps.024', 'la même forme, en A2'),
      it(E(1019), 'brusquement ou progressivement'),
    ], chk('« Il y a trois semaines », c’est…',
      ['le moment où ça a commencé', 'la durée d’une douleur qui continue'], 0,
      'Il y a pointe un moment du passé. EN: a point in the past.')),
    grp('La durée et le rythme', [
      it(E(1023), 'ça fait… que'),
      it(E(1015), 'de plus en plus'),
      it(E(1014), 'par moments'),
      it(E(1020), 'ça va et ça vient'),
    ], chk('Laquelle dit que la douleur dure encore ?',
      ['Ça fait trois semaines que j’ai mal.', 'Ça a commencé il y a trois semaines.'], 0,
      'Ça fait… que, comme depuis, parle d’une chose qui continue. EN: still going on.')),
    ctl('La place', 'Pour placer la douleur, le plus utile :',
      ['juste sous la rotule, sur le côté extérieur', 'un peu partout dans le coin'], 0,
      'Un repère (la rotule) et un côté : le médecin sait où appuyer. EN: a landmark and a side.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['duree'],
};

const A2_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-tableau',
  layer: 'core',
  sheetId: 'sheet-decrire',
  title: 'Six repères pour dater une douleur',
  cols: ['Repère', 'Ce qu’il dit', 'Exemple'],
  rows: [
    { cells: ['il y a + durée', 'le début', 'il y a trois semaines'], say: fr(E(1013)),
      detail: { title: 'Il y a', body: 'Un moment dans le passé, avec un passé composé : ça a commencé il y a trois semaines. EN: when it started.', say: fr('fr.a2.corps.024') } },
    { cells: ['depuis + durée', 'ça dure encore', 'depuis trois semaines'], say: fr(E(1000)),
      detail: { title: 'Depuis', body: 'Une durée qui continue, avec le présent : j’ai mal depuis trois semaines. EN: an ongoing duration, with the present.', say: fr('fr.a2.symptomes.006') } },
    { cells: ['ça fait… que', 'la durée, à l’oral', 'ça fait trois semaines que'], say: fr(E(1023)),
      detail: { title: 'Ça fait… que', body: 'Le même sens que depuis, très courant à l’oral. À l’écrit, il y a… que ou depuis. EN: same as depuis, common in speech.', say: fr(E(1023)) } },
    { cells: ['par moments', 'pas tout le temps', 'j’avais mal par moments'], say: fr(E(1014)),
      detail: { title: 'Par moments', body: 'La douleur n’est pas continue. Le contraire : en permanence. EN: now and then.', say: fr(E(1014)) } },
    { cells: ['de plus en plus', 'ça augmente', 'de plus en plus fréquente'], say: fr(E(1015)),
      detail: { title: 'De plus en plus', body: 'L’évolution : ça augmente. Le contraire : de moins en moins. EN: more and more.', say: fr(E(1015)) } },
    { cells: ['ça va et ça vient', 'ça part et revient', 'ça va et ça vient'], say: fr(E(1020)),
      detail: { title: 'Ça va et ça vient', body: 'L’ordre français : aller, puis venir. EN: it comes and goes.', say: fr(E(1020)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['duree'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: 'Six calques du temps',
  rule: {
    title: 'L’anglais pense for, le français choisit',
    body: 'For three weeks se dit depuis quand ça continue, il y a pour le début, et jamais pour. L’anglais souffle aussi l’ordre (comes and goes) et les petits mots (in the morning). EN: English says for; French picks depuis or il y a.',
  },
  cards: [
    trap(E(1023), 'pour + durée', 'J’ai mal pour trois semaines.', 'Pour une douleur qui continue : depuis trois semaines, ou ça fait trois semaines que. EN: depuis, not pour.'),
    trap(E(1013), 'commencé depuis', 'Ça a commencé depuis trois semaines.', 'Commencer, c’est un moment : il y a. EN: il y a for a starting point.'),
    trap(E(1020), 'vient et va', 'Maintenant, ça vient et ça va.', 'En français, on va, puis on vient : ça va et ça vient. EN: the French order.'),
    trap(E(1021), 'dans le matin', 'C’est pire dans le matin au réveil.', 'Le matin, sans dans : c’est pire le matin. EN: le matin.'),
    trap(E(1015), 'plus et plus', 'La douleur est plus et plus fréquente.', 'More and more : de plus en plus. EN: de plus en plus.'),
    trap(E(1019), 'a apparu', 'Est-ce que la douleur a apparu brusquement ?', 'Apparaître se conjugue avec être : elle est apparue. EN: être, and the agreement.'),
  ],
  drill: [
    { promptSay: 'J’ai mal … trois semaines.', opts: ['depuis', 'pour'], correct: 0 },
    { promptSay: 'Ça a commencé … trois semaines.', opts: ['il y a', 'depuis'], correct: 0 },
    { promptSay: 'Ça fait trois semaines … j’ai mal.', opts: ['que', 'depuis'], correct: 0 },
    { promptSay: 'La douleur … apparue brusquement.', opts: ['est', 'a'], correct: 0 },
    { promptSay: 'C’est pire … matin.', opts: ['le', 'dans le'], correct: 0 },
    { promptSay: 'La douleur est de plus … plus fréquente.', opts: ['en', 'et'], correct: 0 },
    { promptSay: 'Au début, j’avais mal … moments.', opts: ['par', 'dans les'], correct: 0 },
    { promptSay: 'Je suis sous traitement … lundi.', opts: ['depuis', 'il y a'], correct: 0 },
  ],
  steps: STEPS('L’anglais pense for', 'Ce que la phrase fausse raconte'),
  audio: REC('rec-b2-28-piege-temps'),
  say: REFRAME,
  terms: ['duree'],
};

const A2_ATOI = aToi('a2-atoi', 'l’infirmière te pose ses questions', [
  ctl('Le début', 'Depuis quand avez-vous mal ?',
    ['Depuis trois semaines, et c’est de plus en plus fréquent.', 'Pour trois semaines, plus ou moins.'], 0,
    'Depuis pour la durée, puis l’évolution. EN: depuis, then the trend.'),
  ctl('Le rythme', 'La douleur est-elle continue ?',
    ['Non, ça va et ça vient.', 'Non, ça vient et ça va.', 'Oui, par moments.'], 0,
    'Ça va et ça vient. « Par moments » dirait le contraire de continue. EN: comes and goes.'),
  ctl('La place', 'Montrez-moi où, exactement.',
    ['Ici, juste sous la rotule, sur le côté extérieur.', 'Dans le genou, un peu partout.'], 0,
    'Un repère et un côté. EN: a landmark and a side.'),
  ctl('L’apparition', 'Elle est venue d’un coup ?',
    ['Non, elle est apparue progressivement.', 'Non, elle a apparu progressivement.'], 0,
    'Apparaître prend être. EN: est apparue.'),
], ['duree']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le début', 'Ça a commencé … trois semaines.',
    ['il y a', 'depuis', 'pour'], 0,
    'Il y a : le moment du début. EN: il y a.'),
  ctl('La durée', 'Laquelle dit que la douleur continue ?',
    ['J’ai mal depuis trois semaines.', 'J’ai eu mal il y a trois semaines.'], 0,
    'Depuis + présent : ça dure encore. EN: still going on.'),
  ctl('Le rythme', 'It comes and goes :',
    ['ça va et ça vient', 'ça vient et ça va'], 0,
    'L’ordre français. EN: the French order.'),
], ['duree']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Où, quand, depuis quand',
    opener: {
      line: 'Trois heures du matin, un appel, une infirmière qui écoute : ici tu dates ta douleur, tu dis son rythme et tu la places au centimètre près. EN: Three in the morning, a call, a nurse who listens: here you date your pain, give its rhythm and place it precisely.',
      imageRef: 'lessons/francais-soins/act02.jpg',
    },
    sections: [],
    milestone: 'Tu dis quand la douleur a commencé, depuis combien de temps elle dure, à quel rythme, et où exactement. EN: You say when the pain started, how long it has lasted, its rhythm and exactly where it is.',
    estScreens: 42, restPoints: ['a2-construire', 'a2-piege'],
  },
  sections: [A2_ECOUTE, A2_CARTES, A2_CONSTRUIRE, A2_TABLEAU, A2_PIEGE, A2_ATOI, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 · QUELLE DOULEUR, ET COMBIEN
 *
 *  At the emergency triage: the type (lancinante, aiguë, sourde, ça tire),
 *  the strength on the zero-to-ten scale, what sets it off and what eases
 *  it. Errors: « une peine », « une douleur pointue », « mon genou me
 *  blesse », « la douleur est un six ».
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'Au triage, à cinq heures du matin',
  frSub: 'Un type, une note, un déclencheur',
  setting: 'Tu n’as presque pas dormi : te voilà à l’urgence, à cinq heures du matin. L’infirmière du triage, Karine, remplit sa fiche.',
  bubbles: [
    { from: 'narrator', fr: 'La salle d’attente est presque vide. Karine t’appelle et prend un stylo.', en: 'The waiting room is almost empty. Karine calls you and picks up a pen.' },
    { from: 'coach', fr: 'Décrivez-moi la douleur, et donnez-lui une note de zéro à dix.', en: 'Describe the pain to me, and give it a score from zero to ten.' },
    { from: 'user', fr: fr(E(1035)), en: en(E(1035)) },
    { from: 'user', fr: fr(E(1036)), en: en(E(1036)), warn: 'Une note, puis quand elle change' },
    { from: 'coach', fr: 'Dites-moi à quoi elle ressemble.', en: 'Tell me what it feels like.' },
    { from: 'user', fr: fr(E(1044)), en: en(E(1044)) },
    { from: 'user', fr: fr(E(1045)), en: en(E(1045)), warn: 'Le type, avec une image' },
    { from: 'coach', fr: 'Parlez-moi de ce qui la soulage, et de ce qui l’aggrave.', en: 'Tell me about what eases it, and what makes it worse.' },
    { from: 'user', fr: fr(E(1039)), en: en(E(1039)) },
    { from: 'user', fr: fr(E(1041)), en: en(E(1041)) },
  ],
  closing: { fr: 'Un type, une note, un déclencheur : Karine sait déjà où te placer dans la file.', en: 'A type, a score, a trigger: Karine already knows where to put you in the queue.' },
  audio: REC('rec-b2-28-urgence'),
  say: REFRAME,
  terms: ['intensite'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-decrire',
  title: 'Cinq façons de dire une douleur',
  frSub: 'Le type, au-delà de j’ai mal',
  hint: 'Cinq cartes. Une douleur sourde, tu la connais déjà ; voici les autres.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensite'],
  cards: [
    card(E(1029), 'Par élancements', 'le type',
      'Elle revient comme un pouls, par vagues. C’est souvent le mot de la nuit. EN: throbbing, in waves.'),
    card(E(1030), 'Vive et nette', 'le type',
      'Une douleur précise, forte, souvent soudaine. En médecine, aigu veut aussi dire récent. EN: sharp; in medicine, also acute.'),
    card(E(1031), 'Ce que dit le patient', 'le verbe',
      `Le médecin demande « ça vous lance ? » (${MEDECIN_REF}) ; toi, tu réponds : ça me lance. EN: the patient’s side of the question.`),
    card(E(1032), 'Avec une image', 'le type',
      'Une douleur brutale et localisée, comme une lame. Les images aident le médecin. EN: stabbing.'),
    card(E(1033), 'Une tension', 'le type',
      'Comme un élastique trop tendu : pas vraiment mal, mais ça tire. EN: a pulling feeling.'),
  ],
};

const A3_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-trier',
  layer: 'core',
  size: 'lg',
  title: 'Le type, la force, le déclencheur',
  groups: [
    grp('Le type', [
      it(E(1029), 'par élancements'),
      it(E(1030), 'vive et nette'),
      it('fr.a2.symptomes.220', 'sourde, en A2'),
      it(E(1033), 'une tension'),
    ], chk('« Ça me lance » décrit plutôt…',
      ['une douleur qui revient par élancements', 'une douleur qui brûle', 'une douleur qui ne bouge jamais'], 0,
      'Lancer, c’est la douleur par vagues. EN: throbbing.')),
    grp('La force et le déclencheur', [
      it(E(1035), 'une note'),
      it(E(1036), 'quand elle change'),
      it(E(1039), 'à l’effort'),
      it(E(1040), 'ce qui l’aggrave'),
    ], chk('Laquelle dit ce qui aggrave la douleur ?',
      ['Ça empire quand je plie le genou.', 'La nuit, ça monte à huit.'], 0,
      'Empirer quand… : le déclencheur. L’autre dit quand la note change. EN: the trigger.')),
    ctl('Soulager', '« La glace me soulage un peu. » La glace…',
      ['diminue un peu la douleur', 'augmente la douleur'], 0,
      'Soulager : rendre moins douloureux. EN: to ease.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensite'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de mal dire une douleur',
  errors: [
    { wrong: 'J’ai une peine au genou.', right: 'J’ai une douleur au genou.',
      why: 'Normal : pain ressemble à peine. Mais la peine, c’est le chagrin ; au genou, c’est une douleur, ou j’ai mal. EN: peine is sorrow, not pain.' },
    { wrong: 'C’est une douleur pointue.', right: 'C’est une douleur aiguë.',
      why: 'Sharp se dit pointu pour un couteau. Pour une douleur, le mot est aigu, aiguë. EN: a sharp pain is aiguë.' },
    { wrong: 'Mon genou me blesse quand je monte les escaliers.', right: 'Mon genou me fait mal quand je monte les escaliers.',
      why: 'Blesser, c’est causer une blessure. Une partie du corps te fait mal. EN: blesser means to injure.' },
    { wrong: 'La douleur est un six.', right: fr(E(1035)),
      why: 'L’anglais dit it is a six. En français, tu donnes une note : je dirais six, je la mets à six. EN: je dirais six.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensite'],
};

const A3_ATOI = aToi('a3-atoi', 'tu réponds à l’infirmière', [
  ctl('La note', 'Elle demande une note de zéro à dix. Tu réponds :',
    ['Sur une échelle de zéro à dix, je dirais six.', 'La douleur est un six.'], 0,
    'Je dirais : une note, avec prudence. EN: je dirais.'),
  ctl('Le type', 'Ta douleur revient par vagues, comme un pouls. Tu dis :',
    ['Ça me lance.', 'Ça me gêne un peu.', 'C’est une douleur sourde.'], 0,
    'Par élancements : ça me lance. Sourde est diffuse et continue. EN: throbbing.'),
  ctl('Le déclencheur', 'Tu veux dire ce qui fait venir la douleur :',
    ['Ça empire quand je plie le genou.', 'Ça empire depuis trois semaines.'], 0,
    'Quand je plie : le geste qui déclenche. EN: the movement.'),
  ctl('La nuance', 'Ce n’est pas vraiment une douleur, plutôt une sensation désagréable :',
    ['C’est plus une gêne qu’une vraie douleur.', 'C’est une douleur aiguë.'], 0,
    'Une gêne : moins qu’une douleur. EN: a discomfort.'),
], ['intensite']);

const A3_TEXTE = dansUnTexte('a3-texte', 'La note de l’infirmière', TEXTE_A3, [
  { q: 'Trouve le début et la durée.', a: 'Le début : il y a trois semaines, après une course à pied. La durée : depuis ce jour-là, donc trois semaines.' },
  { q: 'Quels mots disent le type de la douleur ?', a: 'Lancinante la nuit, aiguë quand le genou plie.' },
  { q: 'Pourquoi l’infirmière note-t-elle « pas de fièvre, pas de chute » ?', a: 'Ce qui n’est pas là compte aussi : une chute ou de la fièvre changeraient les hypothèses du médecin.' },
  { q: 'Que manque-t-il encore au médecin ?', a: 'Tes antécédents, tes allergies et tes traitements en cours : c’est l’acte suivant.' },
], 'rec-b2-28-texte-a3', ['intensite']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le type', 'Une douleur qui revient comme un pouls :',
    ['lancinante', 'sourde', 'une gêne'], 0,
    'Lancinante : par élancements. EN: throbbing.'),
  ctl('La note', 'It is a six, en français :',
    ['je dirais six', 'c’est un six'], 0,
    'Tu donnes une note. EN: je dirais six.'),
  ctl('Le faux ami', 'I have a pain in my knee :',
    ['j’ai mal au genou', 'j’ai une peine au genou'], 0,
    'La peine, c’est le chagrin. EN: peine is sorrow.'),
], ['intensite']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Quelle douleur, et combien',
    opener: {
      line: 'Une infirmière, une fiche, une note de zéro à dix : ici tu dis quel genre de douleur, à quelle force, et ce qui la réveille. EN: A nurse, a form, a score from zero to ten: here you say what kind of pain, how strong, and what sets it off.',
      imageRef: 'lessons/francais-soins/act03.jpg',
    },
    sections: [],
    milestone: 'Tu décris une douleur par son type, sa note sur dix et ce qui l’aggrave ou la soulage. EN: You describe a pain by its type, its score out of ten and what makes it worse or better.',
    estScreens: 40, restPoints: ['a3-trier', 'a3-atoi'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_TRIER, A3_ERREURS, A3_ATOI, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 · TES ANTÉCÉDENTS
 *
 *  A magazine page on the medical history, then the history itself:
 *  personal and family, operations, follow-up, allergy against intolerance,
 *  current treatments, habits, vaccinations. Traps: allergique de, la
 *  médecine, à date, qui court dans la famille, quand j'avais douze.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Vos antécédents en cinq minutes',
  frSub: 'Lis, et fais la liste de ce qu’on te demandera',
  text: ANTECEDENTS_TEXT,
  glossary: [
    { word: 'négligé', en: 'overlooked', note: 'Qu’on oublie ou qu’on traite trop vite.' },
    { word: 'induit en erreur', en: 'misleads', note: 'Induire en erreur : tromper, même sans le vouloir.' },
  ],
  questions: [
    { q: 'Global : à quoi sert cette page ?', a: 'À préparer la première consultation chez un nouveau médecin : quels antécédents rassembler, et comment les présenter.' },
    { q: 'Détail : quels traitements faut-il citer ?', a: 'Tous : sur ordonnance, en vente libre, les vitamines et les produits naturels.' },
    { q: 'Inférence : pourquoi les produits naturels comptent-ils ?', a: 'Parce qu’ils peuvent interagir avec un nouveau traitement ; le médecin doit les connaître pour choisir.' },
    { q: 'Point de vue : que pense l’auteur d’une réponse inventée ? Comment le sais-tu ?', a: 'Qu’elle est pire qu’un « je ne sais pas » : « une réponse inventée induit en erreur ».' },
  ],
  audio: REC('rec-b2-28-antecedents'),
  say: REFRAME,
  terms: ['antecedents'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  sheetId: 'sheet-decrire',
  title: 'Six lignes de ton dossier',
  examples: [
    ex(E(1048), 'Rien à signaler : dis-le quand même.'),
    ex(E(1049), 'Une opération, avec l’âge : on m’a enlevé.'),
    ex(E(1051), 'Une maladie suivie : suivi par.'),
    ex(E(1053), 'Une allergie, avec ce qui s’est passé.'),
    ex(E(1056), 'Les antécédents familiaux.'),
    ex(E(1058), 'Un traitement sans ordonnance : il compte aussi.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['antecedents'],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Toi, ta famille, tes traitements',
  groups: [
    grp('Tes antécédents', [
      it(E(1049), 'une opération'),
      it(E(1051), 'un suivi'),
      it(E(1053), 'une allergie'),
      it('fr.a1.corps.291', 'une intolérance, depuis l’enfance'),
    ], chk('« Mon asthme est suivi par une pneumologue » : c’est…',
      ['une maladie surveillée régulièrement', 'une maladie guérie', 'une allergie'], 0,
      'Être suivi pour : un médecin te revoit régulièrement. EN: under regular care.')),
    grp('Ta famille et tes habitudes', [
      it(E(1056), 'du côté de la famille'),
      it(E(1060), 'tabac et alcool'),
      it(E(1061), 'les vaccins'),
      it(E(1057), 'aucun traitement'),
    ], chk('Laquelle est un antécédent FAMILIAL ?',
      ['Dans ma famille, il y a des cas de diabète.', 'Mes vaccins sont à jour.'], 0,
      'Familial : ce qu’on trouve chez tes parents, tes frères et sœurs. EN: family history.')),
    ctl('Allergie ou intolérance', 'Tu digères mal le lait. Tu parles d’…',
      ['une intolérance', 'une allergie'], 0,
      'Un aliment mal digéré : une intolérance. Une allergie est une réaction du système immunitaire, parfois grave. EN: an intolerance.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['antecedents'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges du dossier médical',
  rule: {
    title: 'Le dossier a ses prépositions',
    body: 'Allergique à, opéré de, suivi pour, à jour : chaque mot du dossier a sa forme. L’anglais souffle aussi médecine pour medicine et quand j’avais douze pour at twelve. EN: each history word has its preposition.',
  },
  cards: [
    trap(E(1053), 'allergique de', 'Je suis allergique de la pénicilline.', 'Allergique à quelque chose. EN: allergique à.'),
    trap(E(1049), 'sorti', 'On m’a sorti l’appendice à vingt ans.', 'On enlève ou on retire un organe ; on ne le sort pas. EN: enlever.'),
    trap(E(1057), 'la médecine', 'En ce moment, je ne prends aucune médecine.', 'La médecine, c’est la science. Tu prends un médicament, un traitement. EN: medicine you take is un médicament.'),
    trap(E(1061), 'à date', 'Je suis à date dans mes vaccins.', 'À date calque up to date ; on l’entend au Québec, mais on écrit : mes vaccins sont à jour. EN: à jour.'),
    trap(E(1056), 'qui court', 'Le diabète court dans ma famille.', 'It runs in the family ne se traduit pas mot à mot : il y a des cas de diabète dans ma famille. EN: say there are cases.'),
    trap(E(1053), 'quand j’avais douze', 'J’ai fait une réaction quand j’avais douze.', 'L’âge prend toujours ans : à douze ans. EN: add ans.'),
  ],
  drill: [
    { promptSay: 'Je suis allergique … la pénicilline.', opts: ['à', 'de'], correct: 0 },
    { promptSay: 'En ce moment, je ne prends aucun … .', opts: ['traitement', 'médecine'], correct: 0 },
    { promptSay: 'Mes vaccins sont … .', opts: ['à jour', 'à date'], correct: 0 },
    { promptSay: 'J’ai fait une réaction à douze … .', opts: ['ans', 'années'], correct: 0 },
    { promptSay: 'On m’a … l’appendice à vingt ans.', opts: ['enlevé', 'sorti'], correct: 0 },
    { promptSay: 'Dans ma famille, il y a des … de diabète.', opts: ['cas', 'courants'], correct: 0 },
    { promptSay: 'Mon asthme est … par une pneumologue.', opts: ['suivi', 'poursuivi'], correct: 0 },
    { promptSay: 'Je digère mal le lait : c’est une …, pas une allergie.', opts: ['intolérance', 'intoxication'], correct: 0 },
  ],
  steps: STEPS('Le dossier a ses prépositions', 'Ce que la phrase fausse raconte'),
  audio: REC('rec-b2-28-piege-antecedents'),
  say: REFRAME,
  terms: ['antecedents'],
};

const A4_ATOI = aToi('a4-atoi', 'le médecin ouvre ton dossier', [
  ctl('Rien de spécial', 'Vous avez des antécédents particuliers ?',
    ['Non, je n’ai pas d’antécédents particuliers.', 'Non, je n’ai pas d’histoire.'], 0,
    'Des antécédents, pas une histoire. EN: antécédents.'),
  ctl('L’allergie', 'Vous êtes allergique à quelque chose ?',
    ['Oui, à la pénicilline : j’ai fait une réaction à douze ans.', 'Oui, un peu, je crois.'], 0,
    'Le nom exact, et ce qui s’est passé. EN: the exact name and what happened.'),
  ctl('Les traitements', 'Vous prenez d’autres médicaments ?',
    ['Seulement de la vitamine D, sans ordonnance.', 'Non, rien sur ordonnance.'], 0,
    'Tout compte, même sans ordonnance : la seconde réponse cache la vitamine D. EN: everything counts.'),
  ctl('Ce que tu ne sais pas', 'Votre grand-père avait-il des problèmes de cœur ?',
    ['Je ne sais pas, je peux demander à ma mère.', 'Oui, sûrement, comme tout le monde.'], 0,
    'Je ne sais pas est une information ; une réponse inventée trompe le médecin. EN: say you do not know.'),
], ['antecedents']);

const A4_TEXTE = dansUnTexte('a4-texte', 'Ta fiche d’antécédents', TEXTE_A4, [
  { q: 'Classe ce qui est personnel et ce qui est familial.', a: 'Personnel : l’appendice, l’asthme, la pénicilline, le lactose. Familial : le diabète du côté de la mère, le cœur du côté du père.' },
  { q: 'Pourquoi la fiche distingue-t-elle allergie et intolérance ?', a: 'Parce que ce n’est pas la même chose : l’allergie à la pénicilline peut être grave, l’intolérance au lactose est sans gravité.' },
  { q: 'Qu’est-ce qui montre que le patient n’oublie rien ?', a: 'Il cite l’inhalateur en cas de besoin et la vitamine D sans ordonnance.' },
  { q: 'Réécris la ligne « Allergie » en une phrase complète.', a: 'Je suis allergique à la pénicilline : j’ai fait une réaction à douze ans.' },
], 'rec-b2-28-texte-a4', ['antecedents']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La préposition', 'Je suis allergique … la pénicilline.',
    ['à', 'de', 'pour'], 0,
    'Allergique à. EN: à.'),
  ctl('Les traitements', 'La vitamine D sans ordonnance, tu la signales ?',
    ['oui, tout compte', 'non, ce n’est pas un médicament'], 0,
    'Tout ce que tu prends peut compter. EN: everything counts.'),
  ctl('Le faux ami', 'I am not taking any medicine :',
    ['je ne prends aucun médicament', 'je ne prends aucune médecine'], 0,
    'La médecine est une science. EN: un médicament.'),
], ['antecedents']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Tes antécédents',
    opener: {
      line: 'Un nouveau médecin, un dossier vide, et des questions sur tout ce qui est venu avant : ici tu racontes ton passé médical, sans rien oublier. EN: A new doctor, an empty file and questions about everything that came before: here you give your medical history, leaving nothing out.',
      imageRef: 'lessons/francais-soins/act04.jpg',
    },
    sections: [],
    milestone: 'Tu présentes tes antécédents, tes allergies et tes traitements, et tu dis « je ne sais pas » quand c’est vrai. EN: You give your history, allergies and treatments, and say you do not know when that is the case.',
    estScreens: 44, restPoints: ['a4-exemples', 'a4-piege'],
  },
  sections: [A4_LECTURE, A4_EXEMPLES, A4_CONSTRUIRE, A4_PIEGE, A4_ATOI, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 · COMPRENDRE LE MÉDECIN
 *
 *  The consultation at NATURAL SPEED (the lesson's required natural-speed
 *  listening): a cautious hypothesis, a test to rule something out, a
 *  prescription for imaging, a sick note, a referral, and the patient's
 *  questions and reformulation. Errors: « un papier pour être off », « un
 *  test de sang », « vouloir dire avec », the hypothesis heard as certain.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La consultation, à vitesse réelle',
  frSub: 'Écoute ce que la docteure pense, demande et décide',
  lines: [
    ln(E(1063)), ln(E(1064)), ln(E(1065)), ln(E(1066)), ln(E(1067)), ln(E(1068)),
    ln(E(1069)), ln(E(1070)), ln(E(1071)), ln(E(1072)), ln(E(1073)),
  ],
  questions: [
    { q: 'Que pense la docteure, pour l’instant ?', opts: ['que c’est peut-être une tendinite', 'que c’est sûrement une fracture', 'que ce n’est rien du tout'], correct: 0, why: '« Ça pourrait être » : une hypothèse, au conditionnel. EN: a hypothesis, not a diagnosis.' },
    { q: 'Pourquoi demande-t-elle une radio ?', opts: ['pour écarter une fracture de fatigue', 'pour confirmer la tendinite'], correct: 0, why: 'Écarter : vérifier que ce n’en est pas une. EN: to rule it out.' },
    { q: 'Combien de jours d’arrêt de travail ?', opts: ['trois', 'dix', 'cinq'], correct: 0, why: 'Trois jours, vu ton travail. Dix jours, c’est le délai avant le spécialiste. EN: three.' },
    { q: 'Faut-il être à jeun pour l’échographie du genou ?', opts: ['non', 'oui'], correct: 0, why: 'Non : seulement pour certaines échographies du ventre. EN: no.' },
    { q: 'Que fait le patient, à la fin ?', opts: ['il reformule la suite pour vérifier', 'il demande un médicament', 'il refuse la radio'], correct: 0, why: 'Si je comprends bien : il redit le programme, et la docteure peut corriger. EN: he checks by restating.' },
  ],
  audio: REC('rec-b2-28-consultation-ecoute'),
  say: REFRAME,
  terms: ['precision'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-parcours',
  title: 'Les mots de la consultation',
  frSub: 'Ce que dit le médecin, ce que tu demandes',
  hint: 'Cinq cartes : quatre pour comprendre, une pour faire préciser.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['precision'],
  cards: [
    card(E(1074), 'Vérifier, pour avancer', 'le raisonnement',
      'Le médecin écarte une hypothèse : il vérifie que ce n’est pas ça. Ce n’est pas un diagnostic. EN: to rule something out.'),
    card(E(1076), 'L’image de l’os', 'l’examen',
      'La radio montre les os ; l’échographie, les tissus comme les tendons. EN: an X-ray shows bone.'),
    card(E(1077), 'Une prise, plusieurs analyses', 'l’examen',
      'Une seule prise de sang, et le laboratoire mesure plusieurs choses. EN: blood work.'),
    card(E(1075), 'La suite du parcours', 'la décision',
      'Le médecin t’oriente vers un spécialiste : il t’envoie vers lui, avec une lettre. EN: to refer.'),
    card(E(1078), 'Faire préciser', 'demander',
      'Pour un mot que tu ne connais pas, sans couper le médecin : qu’est-ce que vous entendez par… EN: what do you mean by.'),
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce qu’elle pense, ce qu’elle décide',
  groups: [
    grp('Une hypothèse, un examen', [
      it(E(1063), 'une hypothèse'),
      it(E(1064), 'écarter'),
      it(E(1065), 'deux examens'),
      it(E(1079), 'un bilan sanguin'),
    ], chk('« Ça pourrait être une tendinite. » La docteure…',
      ['fait une hypothèse', 'annonce un diagnostic sûr'], 0,
      'Le conditionnel garde une porte ouverte : les examens diront. EN: a hypothesis.')),
    grp('Des décisions', [
      it(E(1068), 'un arrêt de travail'),
      it(E(1069), 'orienter, sous condition'),
      it(E(1072), 'le rendez-vous suivant'),
      it('fr.a2.symptomes.217', 'la même idée, en A2'),
    ], chk('« Si ça ne s’améliore pas d’ici dix jours, je vous oriente vers un spécialiste. » Le spécialiste, c’est…',
      ['seulement si ça ne va pas mieux', 'dans tous les cas, dans dix jours'], 0,
      'Si ça ne s’améliore pas : une condition. EN: only if it does not improve.')),
    ctl('Reformuler', 'Tu veux vérifier que tu as bien compris la suite. Tu dis :',
      ['Si je comprends bien : la radio d’abord, puis l’échographie.', 'D’accord, merci, au revoir.'], 0,
      'Tu redis, la docteure confirme ou corrige. EN: restate to check.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['precision'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de mal rapporter une consultation',
  errors: [
    { wrong: 'La docteure m’a donné un papier pour être off trois jours.', right: 'La docteure m’a fait un arrêt de travail de trois jours.',
      why: 'Être off vient de l’anglais, et le papier a un nom : un arrêt de travail. EN: a sick note is un arrêt de travail.' },
    { wrong: 'On va faire un test de sang.', right: fr(E(1079)),
      why: 'Blood test se calque en test de sang. On dit une prise de sang, ou un bilan sanguin pour plusieurs analyses. EN: prise de sang, bilan sanguin.' },
    { wrong: 'Qu’est-ce que vous voulez dire avec fracture de fatigue ?', right: 'Qu’est-ce que vous voulez dire par fracture de fatigue ?',
      why: 'What do you mean by : vouloir dire par, ou entendre par. Avec vient de with. EN: par, not avec.' },
    { wrong: 'J’ai une tendinite, c’est sûr.', right: 'Ça pourrait être une tendinite.',
      why: 'La docteure a parlé au conditionnel : c’est une hypothèse, pas un diagnostic. Rapporte-la telle quelle. EN: keep her conditional.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['precision'],
};

const A5_ATOI = aToi('a5-atoi', 'tu fais préciser', [
  ctl('Un mot inconnu', 'La docteure dit « échographie ». Tu ne connais pas le mot :',
    ['Excusez-moi, qu’est-ce que vous entendez par échographie ?', 'Oui, oui, bien sûr.'], 0,
    'Faire préciser tout de suite. EN: ask on the spot.'),
  ctl('Le jeûne', 'Tu veux savoir si tu dois être à jeun :',
    ['Et l’échographie, je dois la faire à jeun ?', 'Je mange avant ou pas, pour ça ?', 'Je jeûne ?'], 0,
    'Une question complète, avec le mot juste. EN: a full question.'),
  ctl('Le travail', 'Tu as besoin d’un document pour ton employeur :',
    ['Est-ce que vous pouvez me faire un arrêt de travail ?', 'Est-ce que vous pouvez me donner un papier off ?'], 0,
    'Un arrêt de travail. EN: a sick note.'),
  ctl('La suite', 'À la fin, tu résumes :',
    ['Si je comprends bien, la radio d’abord, puis l’échographie, et on se revoit.', 'Donc c’est une tendinite.'], 0,
    'Tu redis le programme, sans transformer l’hypothèse en certitude. EN: restate the plan.'),
], ['precision']);

const A5_TEXTE = dansUnTexte('a5-texte', 'La fin de la consultation', TEXTE_A5, [
  { q: 'Dans quels cas faut-il revenir sans attendre ?', a: 'Si la douleur devient insupportable, ou si le genou gonfle beaucoup.' },
  { q: 'Que fait le patient de l’arrêt de travail ?', a: 'Il le remet à son employeur.' },
  { q: 'Trouve la reformulation, et dis à quoi elle sert.', a: '« Si je comprends bien, la radio d’abord, puis l’échographie » : vérifier qu’il a compris l’ordre ; la docteure confirme.' },
  { q: 'Comment la docteure explique-t-elle « inflammation » ?', a: 'Avec une image de tous les jours : le tendon est irrité, comme une peau qui rougit après un frottement.' },
], 'rec-b2-28-texte-a5', ['precision']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('L’hypothèse', '« Ça pourrait être une tendinite » veut dire…',
    ['c’est possible, les examens diront', 'c’est certain'], 0,
    'Le conditionnel : une hypothèse. EN: possible.'),
  ctl('Écarter', 'Écarter une fracture, c’est…',
    ['vérifier que ce n’en est pas une', 'soigner une fracture', 'opérer'], 0,
    'Écarter une hypothèse. EN: rule out.'),
  ctl('Faire préciser', 'What do you mean by… ?',
    ['Qu’est-ce que vous entendez par… ?', 'Qu’est-ce que vous voulez dire avec… ?'], 0,
    'Entendre par, vouloir dire par. EN: par.'),
], ['precision']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Comprendre le médecin',
    opener: {
      line: 'Une docteure qui parle vite, une hypothèse, deux examens et un arrêt de travail : ici tu comprends tout, et tu fais préciser le reste. EN: A doctor who talks fast, a hypothesis, two tests and a sick note: here you follow it all, and have the rest explained.',
      imageRef: 'lessons/francais-soins/act05.jpg',
    },
    sections: [],
    milestone: 'Tu suis une consultation à vitesse réelle, tu sépares l’hypothèse de la décision et tu fais préciser un mot. EN: You follow a consultation at natural speed, tell a hypothesis from a decision and ask about a word.',
    estScreens: 40, restPoints: ['a5-construire', 'a5-atoi'],
  },
  sections: [A5_ECOUTE, A5_CARTES, A5_CONSTRUIRE, A5_ERREURS, A5_ATOI, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 · L'ORDONNANCE ET LA PHARMACIE
 *
 *  At the pharmacy: when to take it (au cours du repas, à jeun, matin, midi
 *  et soir, en cas de besoin, en dehors des repas), how much, for how long,
 *  the generic, over the counter, drowsiness, a possible interaction.
 *  FICTIONAL medicine only. Traps: deux fois un jour, sur un estomac vide,
 *  avec la nourriture, comme nécessaire, sur le comptoir, rendre endormi.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Au comptoir de la pharmacie',
  frSub: 'Combien, quand, et avec quoi',
  setting: 'Une pharmacie de la rue Saint-Denis, le soir même. Marc-André, le pharmacien, relit l’ordonnance de la docteure Gagnon (le médicament, Tendalgine, est fictif).',
  bubbles: [
    { from: 'narrator', fr: 'Marc-André pose la boîte sur le comptoir et te montre l’étiquette.', en: 'Marc-André puts the box on the counter and shows you the label.' },
    { from: 'coach', fr: fr(E(1080)), en: en(E(1080)) },
    { from: 'coach', fr: fr(E(1081)), en: en(E(1081)), warn: 'Le moment de la prise, et pourquoi' },
    { from: 'user', fr: 'J’ai aussi un traitement contre l’asthme. Je voudrais savoir si c’est compatible.', en: 'I also have an asthma treatment. I would like to know if they go together.' },
    { from: 'coach', fr: fr(E(1085)), en: en(E(1085)) },
    { from: 'coach', fr: fr(E(1086)), en: en(E(1086)) },
    { from: 'user', fr: 'Je conduis beaucoup. Dites-moi si ça fait somnoler.', en: 'I drive a lot. Tell me whether it makes you drowsy.' },
    { from: 'coach', fr: 'Un peu, c’est écrit sur l’étiquette. Prudence au volant.', en: 'A little, it is written on the label. Take care at the wheel.', warn: 'Il répond, et il renvoie à l’étiquette' },
  ],
  closing: { fr: 'Quand, combien, pendant combien de temps, et avec quoi d’autre : tu repars avec les quatre réponses.', en: 'When, how much, for how long and with what else: you leave with all four answers.' },
  audio: REC('rec-b2-28-pharmacie'),
  say: REFRAME,
  terms: ['posologie'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-posologie',
  title: 'Les mots de la posologie',
  frSub: 'Ce que dit une ordonnance',
  hint: 'Cinq cartes. À jeun et matin et soir, tu les as vus en A2 ; voici la suite.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['posologie'],
  cards: [
    card(E(1089), 'Pendant que tu manges', 'le moment',
      'Au cours du repas : ni avant, ni après. Le contraire d’à jeun. EN: with food.'),
    card(E(1092), 'Loin des repas', 'le moment',
      'En dehors des repas : l’estomac vide, entre deux repas. EN: between meals.'),
    card(E(1090), 'Trois prises', 'le rythme',
      'Matin, midi et soir : trois fois par jour, aux heures des repas. EN: three times a day.'),
    card(E(1091), 'Pas tous les jours', 'le rythme',
      'En cas de besoin : seulement quand c’est nécessaire. EN: as needed.'),
    card(E(1093), 'Sans ordonnance', 'la pharmacie',
      'En vente libre : tu l’achètes sans ordonnance, et le pharmacien te conseille quand même. EN: over the counter.'),
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Quand, combien, combien de temps',
  groups: [
    grp('Quand', [
      it(E(1080), 'au cours du repas'),
      it('fr.a2.symptomes.211', 'à jeun, en A2'),
      it(E(1083), 'en cas de besoin'),
      it(E(1081), 'pas à jeun'),
    ], chk('« Au cours du repas » veut dire…',
      ['pendant que tu manges', 'une heure avant de manger', 'le ventre vide'], 0,
      'Au cours de : pendant. Le ventre vide, c’est à jeun. EN: during the meal.')),
    grp('Combien et combien de temps', [
      it(E(1082), 'la limite'),
      it('fr.a2.symptomes.208', 'la dose, en A2'),
      it(E(1088), 'la durée'),
      it(E(1095), 'les trois questions'),
    ], chk('Pour la durée du traitement, le pharmacien te renvoie…',
      ['à ce qui est écrit sur l’ordonnance', 'à ton impression', 'à la boîte vide'], 0,
      'La durée est sur l’ordonnance ; en cas de doute, tu demandes. EN: follow the prescription.')),
    ctl('Poser la question', 'Tu prends déjà un autre traitement. Tu demandes :',
      ['Est-ce que je peux le prendre avec mon traitement contre l’asthme ?', 'C’est bon pour tout, ça ?'], 0,
      'Tu nommes ton traitement : le pharmacien peut vérifier. EN: name your other treatment.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['posologie'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Six calques de la pharmacie',
  rule: {
    title: 'L’étiquette anglaise sous les mots français',
    body: 'Twice a day, on an empty stomach, with food, as needed, over the counter, make you drowsy : chaque formule a sa forme française, et le calque se comprend mal au comptoir. EN: each label phrase has its own French form.',
  },
  cards: [
    trap('fr.a2.symptomes.209', 'fois un jour', 'Trois fois un jour, avant les repas.', 'Une fréquence : par jour, par semaine. EN: fois par jour.'),
    trap(E(1081), 'estomac vide', 'Ne le prenez pas sur un estomac vide.', 'On an empty stomach : à jeun. EN: à jeun.'),
    trap(E(1080), 'avec la nourriture', 'Vous le prenez avec la nourriture, matin et soir.', 'With food : au cours du repas, ou pendant le repas. EN: au cours du repas.'),
    trap(E(1083), 'comme nécessaire', 'Celui-ci, vous le prenez seulement comme nécessaire.', 'As needed : en cas de besoin, ou si nécessaire. EN: en cas de besoin.'),
    trap(E(1096), 'sur le comptoir', 'Ce médicament est sur le comptoir, mais demandez conseil au pharmacien.', 'Over the counter : en vente libre. EN: en vente libre.'),
    trap(E(1087), 'rendre endormi', 'Est-ce que ça va me rendre endormi ?', 'Make you drowsy : faire somnoler. EN: faire somnoler.'),
  ],
  drill: [
    { promptSay: 'Deux comprimés … jour.', opts: ['par', 'un'], correct: 0 },
    { promptSay: 'Ne le prenez pas … jeun.', opts: ['à', 'de'], correct: 0 },
    { promptSay: 'Vous le prenez … du repas.', opts: ['au cours', 'pendant'], correct: 0 },
    { promptSay: 'Seulement en cas de … .', opts: ['besoin', 'nécessaire'], correct: 0 },
    { promptSay: 'Ce médicament est en vente … .', opts: ['libre', 'comptoir'], correct: 0 },
    { promptSay: 'Est-ce que ça fait … ?', opts: ['somnoler', 'endormi'], correct: 0 },
    { promptSay: 'Il existe en … , et c’est moins cher.', opts: ['générique', 'générale'], correct: 0 },
    { promptSay: 'Pas plus … deux comprimés par jour.', opts: ['de', 'que'], correct: 0 },
  ],
  steps: STEPS('L’étiquette anglaise sous les mots', 'Ce que la phrase fausse raconte'),
  audio: REC('rec-b2-28-piege-pharmacie'),
  say: REFRAME,
  terms: ['posologie'],
};

const A6_ATOI = aToi('a6-atoi', 'tu lis ton étiquette', [
  ctl('Le moment', 'L’étiquette dit « au cours du repas ». Tu le prends…',
    ['en mangeant', 'une heure avant de manger', 'au coucher'], 0,
    'Au cours du repas : pendant. EN: with the meal.'),
  ctl('La limite', '« Pas plus de deux comprimés par jour. » Tu en as pris deux ce matin. Ce soir…',
    ['tu n’en prends pas d’autre', 'tu en prends un de plus'], 0,
    'Deux, c’est la limite de la journée. EN: two is the daily limit.'),
  ctl('Le générique', 'Le pharmacien propose le générique. C’est…',
    ['le même médicament, sous un autre nom, souvent moins cher', 'un médicament plus faible'], 0,
    'Même substance, autre nom. EN: the same medicine, another name.'),
  ctl('La question', 'Tu ne sais pas combien de temps le prendre :',
    ['Pendant combien de temps je dois le prendre ?', 'Je le prends pour combien longtemps ?'], 0,
    'Pendant combien de temps. EN: for how long.'),
], ['posologie'], 'sheet-posologie');

const A6_TEXTE = dansUnTexte('a6-texte', 'L’étiquette et la fiche', TEXTE_A6, [
  { q: 'Trouve les trois réponses de la posologie.', a: 'Combien : un comprimé, pas plus de deux par jour. Quand : matin et soir, au cours du repas. Combien de temps : cinq jours.' },
  { q: 'Que veut dire « prudence au volant » ?', a: 'Que le médicament peut faire somnoler : attention si tu conduis.' },
  { q: 'Pourquoi le pharmacien veut-il connaître tes autres médicaments ?', a: 'Pour vérifier qu’ils vont ensemble, même ceux en vente libre.' },
  { q: 'Que faire si tu as encore mal après cinq jours ?', a: 'Revoir ton médecin : l’ordonnance n’est pas renouvelable.' },
], 'rec-b2-28-texte-a6', ['posologie']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La fréquence', 'Twice a day :',
    ['deux fois par jour', 'deux fois un jour'], 0,
    'Par jour. EN: par.'),
  ctl('As needed', 'As needed, sur une ordonnance :',
    ['en cas de besoin', 'comme nécessaire', 'comme il faut'], 0,
    'En cas de besoin. EN: as needed.'),
  ctl('Over the counter', 'Un médicament qu’on achète sans ordonnance est…',
    ['en vente libre', 'sur le comptoir'], 0,
    'En vente libre. EN: over the counter.'),
], ['posologie']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'L’ordonnance et la pharmacie',
    opener: {
      line: 'Une boîte sur le comptoir, une étiquette, et un pharmacien qui répond à tout : ici tu sais quand, combien et combien de temps. EN: A box on the counter, a label and a pharmacist who answers everything: here you know when, how much and for how long.',
      imageRef: 'lessons/francais-soins/act06.jpg',
    },
    sections: [],
    milestone: 'Tu comprends une posologie, tu poses la question d’une interaction et tu évites les calques de l’étiquette. EN: You understand a dosage, ask about an interaction and avoid the label calques.',
    estScreens: 42, restPoints: ['a6-construire', 'a6-piege'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_PIEGE, A6_ATOI, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 · LA NOTICE
 *
 *  The leaflet of the fictional Tendalgine, read by sections: what it is
 *  for, before you take it, how to take it, adverse effects, storage.
 *  Faux amis: éventuel, préservatif; « lisez les directions »; contre-
 *  indiqué + pendant, not avec.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La notice de Tendalgine',
  frSub: 'Médicament fictif : lis par rubriques',
  text: NOTICE_TEXT,
  glossary: [
    { word: 'surviennent', en: 'occur', note: 'Survenir : arriver, se produire.' },
    { word: 'articulations', en: 'joints', note: 'Le genou, le coude, l’épaule : là où deux os se rejoignent.' },
  ],
  questions: [
    { q: 'Global : comment la notice est-elle organisée ?', a: 'En cinq rubriques numérotées, toujours dans le même ordre : à quoi il sert, avant de le prendre, comment le prendre, les effets indésirables, la conservation.' },
    { q: 'Détail : dans quels cas ne faut-il jamais le prendre ?', a: 'En cas d’allergie à l’un de ses composants, ou si l’on a déjà eu un ulcère de l’estomac.' },
    { q: 'Inférence : pourquoi la notice demande-t-elle de signaler les médicaments pris sans ordonnance ?', a: 'Parce qu’eux aussi peuvent réagir avec Tendalgine : sans ordonnance ne veut pas dire sans effet.' },
    { q: 'Point de vue : la notice promet-elle des effets indésirables ? Quelle phrase le montre ?', a: 'Non, elle dit qu’ils sont possibles : « ils ne surviennent pas systématiquement chez tout le monde ».' },
  ],
  audio: REC('rec-b2-28-notice'),
  say: REFRAME,
  terms: ['notice'],
};

const A7_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a7-focus',
  layer: 'core',
  sheetId: 'sheet-posologie',
  title: 'Lire une notice sans tout lire',
  points: [
    'Pose d’abord ta question : peut-on conduire, que faire en cas d’oubli, est-ce compatible ? EN: start from your question.',
    'Va à la rubrique qui y répond : les rubriques sont toujours dans le même ordre. EN: go to the right section.',
    'Lis cette rubrique en entier, surtout les phrases qui commencent par ne… jamais ou ne… pas. EN: read that section fully.',
    `Pour le reste, applique ${LECTURE_REF} : « ${B137_REFRAME} » EN: ${B137_REFRAME_EN}`,
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['notice'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Les mots de la notice',
  frSub: 'Cinq formules à reconnaître',
  hint: 'Cinq cartes : les mots que tu retrouves sur toutes les notices.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['notice'],
  cards: [
    card(E(1097), 'Quand ne pas le prendre', 'la rubrique 2',
      'Une contre-indication : un cas où le médicament est interdit ou dangereux. EN: a contraindication.'),
    card(E(1098), 'Ce qui peut arriver', 'la rubrique 4',
      'Sur la notice, un effet indésirable ; à l’oral, on dit souvent un effet secondaire. EN: an adverse effect.'),
    card(E(1101), 'La consigne à l’infinitif', 'la rubrique 3',
      'La notice donne ses consignes à l’infinitif ou à l’impératif : ne pas dépasser, ne prenez pas. EN: instructions in the infinitive.'),
    card(E(1102), 'Un oubli', 'la rubrique 3',
      'Ce qu’il faut faire si tu oublies une prise. EN: if you miss a dose.'),
    card(E(1100), 'La conservation', 'la rubrique 5',
      'Sur toutes les notices : les enfants ne doivent ni voir ni atteindre la boîte. EN: out of sight and reach of children.'),
  ],
};

const A7_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-trier',
  layer: 'core',
  size: 'lg',
  title: 'Quelle rubrique pour quelle question',
  groups: [
    ctl('Avant', 'Tu te demandes si tu peux le prendre avec ton allergie. Tu vas…',
      ['à la rubrique 2, les informations à connaître avant', 'à la rubrique 5, la conservation', 'à la rubrique 4, les effets indésirables'], 0,
      'Avant de le prendre : les contre-indications. EN: section 2.'),
    ctl('L’oubli', 'Tu as oublié la prise de midi. Tu cherches…',
      ['comment le prendre, rubrique 3', 'à quoi il sert, rubrique 1'], 0,
      'L’oubli fait partie de la façon de le prendre. EN: section 3.'),
    ctl('Un effet', 'Tu as sommeil depuis ce matin. Tu lis…',
      ['les effets indésirables éventuels', 'la conservation', 'à quoi il sert'], 0,
      'Somnolence : un effet indésirable possible. EN: section 4.'),
    ctl('La chaleur', 'Il fait trente degrés dans ta salle de bain. Tu vérifies…',
      ['comment le conserver', 'comment le prendre'], 0,
      'La conservation : ne pas dépasser vingt-cinq degrés, dans cet exemple. EN: storage.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['notice'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  sheetId: 'sheet-registres',
  title: 'Quatre faux pas devant une notice',
  errors: [
    { wrong: 'Ce sirop ne contient pas de préservatif.', right: fr(E(1110)),
      why: 'Normal : preservative ressemble à préservatif. Mais un préservatif, c’est un condom ; dans un sirop, c’est un conservateur. EN: preservative is conservateur.' },
    { wrong: 'Éventuellement, la douleur va passer, je le sais.', right: fr(E(1111)),
      why: 'Eventually se dit finir par. Éventuellement veut dire peut-être, ce qui contredit « je le sais ». EN: éventuellement means possibly.' },
    { wrong: 'Lisez bien les directions avant de le prendre.', right: 'Lisez bien la notice avant de le prendre.',
      why: 'Directions, en anglais, c’est le mode d’emploi. En français, les directions indiquent un chemin. EN: la notice, le mode d’emploi.' },
    { wrong: 'Ce médicament est contre-indiqué avec la grossesse.', right: 'Ce médicament est contre-indiqué pendant la grossesse.',
      why: 'Avec vient d’une traduction trop rapide. On dit pendant la grossesse, ou en cas de grossesse. EN: pendant, not avec.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['notice', 'fauxami'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Un autre passage de la notice', TEXTE_A7, [
  { q: 'Tu as pris trois comprimés au lieu de deux. Que dit la notice ?', a: 'De consulter immédiatement ton médecin ou ton pharmacien.' },
  { q: 'Tu as oublié une dose. Que dit-elle ?', a: 'De ne pas prendre de dose double pour compenser.' },
  { q: 'Pourquoi cette phrase sur la conduite ?', a: 'Parce que le médicament peut provoquer une somnolence : c’est un effet indésirable possible.' },
  { q: 'Quelle est la dernière consigne, valable pour toutes les questions ?', a: 'Demander plus d’informations à ton médecin ou à ton pharmacien.' },
], 'rec-b2-28-texte-a7', ['notice']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Les rubriques', 'Pour savoir si tu peux le prendre malgré une allergie :',
    ['les contre-indications', 'la conservation', 'les effets indésirables'], 0,
    'Avant de le prendre. EN: contraindications.'),
  ctl('Le faux ami', 'Éventuel veut dire…',
    ['possible', 'final'], 0,
    'Éventuel : possible. EN: possible.'),
  ctl('L’oubli', 'En cas d’oubli, que dit la notice de ne PAS faire ?',
    ['prendre une dose double pour compenser', 'lire la notice'], 0,
    'Ne prenez pas de dose double pour compenser. EN: no double dose.'),
], ['notice']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'La notice',
    opener: {
      line: 'Deux pages pliées en huit, en petits caractères : ici tu trouves en quelques secondes la rubrique qui répond à ta question. EN: Two pages folded eight times, in small print: here you find the section that answers your question in seconds.',
      imageRef: 'lessons/francais-soins/act07.jpg',
    },
    sections: [],
    milestone: 'Tu lis une notice par rubriques et tu reconnais ses formules et ses faux amis. EN: You read a leaflet by sections and recognise its formulas and false friends.',
    estScreens: 40, restPoints: ['a7-cartes', 'a7-erreurs'],
  },
  sections: [A7_LECTURE, A7_FOCUS, A7_CARTES, A7_TRIER, A7_ERREURS, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 · LE PARCOURS DE SOINS
 *
 *  Gérard Martin, the learner's father-in-law, moves from Lyon to Montréal.
 *  The Lyon hospital letter, then the words of the system in France,
 *  Québec, Belgium and Switzerland (only facts checked in corpus §A.7).
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La lettre de l’hôpital de Lyon',
  frSub: 'Lis le compte rendu de ton beau-père',
  text: LETTRE_TEXT,
  glossary: [
    { word: 'confrère', en: 'colleague (between doctors)', note: 'Les médecins s’appellent confrères entre eux.' },
    { word: 'survenus', en: 'that occurred', note: 'Survenir : arriver, souvent sans prévenir.' },
  ],
  questions: [
    { q: 'Global : qui écrit, à qui, et pourquoi ?', a: 'La cardiologue de l’hôpital écrit au médecin traitant de M. Martin pour résumer son hospitalisation et proposer la suite.' },
    { q: 'Détail : pourquoi M. Martin a-t-il été hospitalisé ?', a: 'Pour des malaises avec vertiges au lever.' },
    { q: 'Inférence : pourquoi l’hôpital a-t-il remis une copie du dossier au patient ?', a: 'Parce qu’il part au Québec : son futur médecin devra connaître son histoire.' },
    { q: 'Point de vue : l’état de M. Martin inquiète-t-il la cardiologue ? Comment le sais-tu ?', a: 'Pas au point de le garder : il sort « en bon état général », mais elle demande un contrôle dans un mois et un enregistrement du rythme cardiaque.' },
  ],
  audio: REC('rec-b2-28-lettre'),
  say: REFRAME,
  terms: ['parcours'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Les mots de la lettre et du système',
  frSub: 'Cinq cartes, de Lyon à Montréal',
  hint: 'Cinq cartes : trois pour la lettre, deux pour la France.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['parcours'],
  cards: [
    card(E(1125), 'Le résumé du séjour', 'la lettre',
      'L’hôpital l’écrit pour ton médecin ; garde-le et apporte-le au suivant. EN: the discharge report.'),
    card(E(1126), 'En rentrant chez soi', 'la lettre',
      'Les médicaments à prendre après l’hôpital, sur l’ordonnance jointe. EN: medication on discharge.'),
    card(E(1127), 'Vérifier que tout va bien', 'la lettre',
      'Un rendez-vous pour voir si le traitement marche. EN: a check-up.'),
    card(E(1113), 'En France', 'le système',
      'Le médecin, le plus souvent un généraliste, que tu déclares. Au Québec, on parle de médecin de famille. EN: the registered GP.'),
    card(E(1114), 'En France', 'le système',
      'La carte verte qu’on présente chez le médecin et à la pharmacie. EN: the French health card.'),
  ],
};

const A8_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-tableau',
  layer: 'core',
  sheetId: 'sheet-parcours',
  title: 'Quatre systèmes, six repères',
  cols: ['Pays', 'Repère', 'Ce qu’il faut savoir'],
  rows: [
    { cells: ['France', 'médecin traitant', 'déclaré, mieux remboursé'], say: fr(E(1115)),
      detail: { title: 'Le médecin traitant', body: 'Tu le déclares à l’Assurance maladie ; consulter hors de ce parcours est moins bien remboursé. EN: register a GP to be reimbursed better.', say: fr(E(1128)) } },
    { cells: ['France', 'carte Vitale, mutuelle', 'la mutuelle complète'], say: fr(E(1117)),
      detail: { title: 'La carte Vitale et la mutuelle', body: 'La carte Vitale accélère le remboursement ; la mutuelle paie une partie de ce que l’Assurance maladie ne couvre pas. EN: the card speeds refunds; the mutuelle tops up.', say: fr(E(1117)) } },
    { cells: ['Québec', 'carte d’assurance maladie', 'à chaque visite'], say: fr(E(1116)),
      detail: { title: 'La carte de la RAMQ', body: 'La Régie de l’assurance maladie du Québec délivre la carte ; tu la présentes à chaque visite. EN: show the card at every visit.', say: fr(E(1116)) } },
    { cells: ['Québec', 'le 811, l’urgence', 'une infirmière, jour et nuit'], say: fr(E(1118)),
      detail: { title: 'Le 811 et l’urgence', body: 'Le 811 te met en contact avec une infirmière ; pour une urgence, le 911. On dit souvent aller à l’urgence. EN: 811 for a nurse, 911 for an emergency.', say: fr(E(1124)) } },
    { cells: ['Belgique', 'la mutualité', 'on s’y affilie'], say: fr(E(1121)),
      detail: { title: 'La mutualité', body: 'En Belgique, on s’affilie à une mutualité (ou à la CAAMI, la caisse publique) pour être remboursé ; le numéro d’urgence est le 112. EN: join a mutualité (or the public CAAMI); 112 for emergencies.', say: fr(E(1121)) } },
    { cells: ['Suisse', 'l’assurance de base', 'obligatoire ; le 144'], say: fr(E(1119)),
      detail: { title: 'L’assurance de base', body: 'En Suisse, l’assurance maladie de base est obligatoire ; pour une ambulance, le 144. EN: basic insurance is compulsory; 144 for an ambulance.', say: fr(E(1120)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['parcours'],
};

const A8_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-trier',
  layer: 'core',
  size: 'lg',
  title: 'De Lyon à Montréal',
  groups: [
    grp('En France', [
      it(E(1115), 'le médecin traitant'),
      it(E(1117), 'la mutuelle'),
      it(E(1128), 'la lettre de Lyon'),
      it('fr.b2.systeme-de-sante.006', 'ce qui reste à payer'),
    ], chk('En France, la mutuelle…',
      ['rembourse une partie de ce que l’Assurance maladie ne couvre pas', 'remplace l’Assurance maladie', 'est un hôpital'], 0,
      'Elle complète. EN: it tops up.')),
    grp('Au Québec', [
      it(E(1116), 'la carte'),
      it(E(1118), 'le 811'),
      it(E(1122), 'le médecin de famille'),
      it(E(1123), 'en attendant'),
    ], chk('Ton beau-père n’a pas encore de médecin de famille. En attendant, il peut…',
      ['consulter dans une clinique sans rendez-vous', 'attendre sans voir personne'], 0,
      'La clinique sans rendez-vous. EN: a walk-in clinic.')),
    ctl('Les mots', 'Au Québec, on dit souvent…',
      ['aller à l’urgence', 'aller à l’urgent'], 0,
      'L’urgence, au singulier ; en France, les urgences. EN: à l’urgence.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['parcours'],
};

const A8_ATOI = aToi('a8-atoi', 'tu guides ton beau-père', [
  ctl('La carte', 'Il va à sa première consultation à Montréal. Il doit apporter…',
    ['sa carte d’assurance maladie', 'sa carte Vitale'], 0,
    'Au Québec, la carte de la RAMQ. La carte Vitale sert en France. EN: the Québec card.'),
  ctl('La nuit', 'À deux heures du matin, il a des vertiges mais ne veut pas aller à l’urgence. Il peut…',
    ['appeler le 811 pour parler à une infirmière', 'appeler le 144'], 0,
    'Le 811 au Québec ; le 144 est un numéro suisse. Pour une urgence, le 911. EN: 811.'),
  ctl('Le dossier', 'Son nouveau médecin voudra connaître son hospitalisation. Tu apportes…',
    ['le compte rendu d’hospitalisation de Lyon', 'la notice de ses médicaments'], 0,
    'Le compte rendu résume le séjour. EN: the discharge report.'),
  ctl('Le mot', 'En France, le généraliste déclaré s’appelle…',
    ['le médecin traitant', 'le médecin traiteur', 'le médecin de garde'], 0,
    'Traitant ; un traiteur prépare des repas. EN: traitant.'),
], ['parcours']);

const A8_TEXTE = dansUnTexte('a8-texte', 'Ton courriel au médecin de Lyon', TEXTE_A8, [
  { q: 'Pourquoi écris-tu, et au nom de qui ?', a: 'Au nom de ton beau-père, pour que son ancien médecin transmette une copie de son dossier.' },
  { q: 'Quels documents demandes-tu ?', a: 'La liste de ses traitements et les résultats de ses derniers examens.' },
  { q: 'Pourquoi joins-tu une lettre signée de lui ?', a: 'Parce que le médecin a besoin de son accord pour transmettre son dossier.' },
  { q: 'Trouve la formule d’appel et la formule finale.', a: 'Docteur ; je vous prie d’agréer, Docteur, mes salutations distinguées.' },
], 'rec-b2-28-texte-a8', ['parcours']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('France', 'La carte Vitale, c’est…',
    ['la carte d’assurance maladie française', 'une carte de mutuelle québécoise'], 0,
    'En France. EN: the French card.'),
  ctl('Québec', 'Pour parler à une infirmière, jour et nuit, au Québec :',
    ['le 811', 'le 15', 'le 144'], 0,
    'Le 811. EN: 811.'),
  ctl('La lettre', 'Un compte rendu d’hospitalisation est écrit…',
    ['par l’hôpital, pour ton médecin', 'par toi, pour l’hôpital'], 0,
    'L’hôpital résume le séjour pour le médecin. EN: by the hospital.'),
], ['parcours']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le parcours de soins',
    opener: {
      line: 'Une lettre d’hôpital de Lyon, un beau-père qui s’installe à Montréal : ici tu lis le compte rendu et tu passes d’un système de santé à l’autre. EN: A hospital letter from Lyon and a father-in-law moving to Montréal: here you read the report and move from one health system to another.',
      imageRef: 'lessons/francais-soins/act08.jpg',
    },
    sections: [],
    milestone: 'Tu lis une lettre d’hôpital et tu trouves ton chemin dans le système de santé de quatre pays. EN: You read a hospital letter and find your way in four countries’ health systems.',
    estScreens: 42, restPoints: ['a8-tableau', 'a8-atoi'],
  },
  sections: [A8_LECTURE, A8_CARTES, A8_TABLEAU, A8_TRIER, A8_ATOI, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 · POSER SES QUESTIONS, DONNER SON ACCORD
 *
 *  The specialist proposes an arthroscopy; the patient asks what it
 *  involves, the risks, the alternative, the recovery, time to think, a
 *  second opinion. Errors: une seconde opinion from « penser à propos »,
 *  « les risques impliqués », « une décision éduquée ».
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Chez le spécialiste',
  frSub: 'Écoute les questions avant le oui',
  lines: [
    ln(E(1130)), ln(E(1131)), ln(E(1132)), ln(E(1133)), ln(E(1134)), ln(E(1135)),
    ln(E(1136)), ln(E(1137)), ln(E(1138)), ln(E(1140)), ln(E(1141)),
  ],
  questions: [
    { q: 'Que propose le docteur Benali ?', opts: ['une petite intervention au genou', 'un nouveau médicament', 'un arrêt de travail'], correct: 0, why: 'Une arthroscopie, sous anesthésie. EN: a minor knee procedure.' },
    { q: 'En général, combien de temps reste-t-on à l’hôpital ?', opts: ['la journée', 'une semaine', 'une nuit'], correct: 0, why: 'On entre le matin, on ressort le soir. EN: one day.' },
    { q: 'Quelle autre option existe ?', opts: ['la physiothérapie pendant deux mois', 'une autre opération', 'aucune'], correct: 0, why: 'Essayer la physiothérapie, puis décider. EN: physiotherapy.' },
    { q: 'Le patient doit-il décider tout de suite ?', opts: ['non, rien ne presse', 'oui, avant de sortir'], correct: 0, why: 'Il peut prendre le temps de réfléchir et rappeler. EN: no rush.' },
    { q: 'Que demande encore le patient avant de décider ?', opts: ['un deuxième avis', 'un certificat', 'une ordonnance'], correct: 0, why: 'Un deuxième avis : l’avis d’un autre médecin. EN: a second opinion.' },
  ],
  audio: REC('rec-b2-28-consentement-ecoute'),
  say: REFRAME,
  terms: ['consentir'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-proche',
  title: 'Avant de dire oui',
  frSub: 'Cinq outils du consentement',
  hint: 'Cinq cartes : les questions, puis ton accord.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['consentir'],
  cards: [
    card(E(1142), 'La première question', 'demander',
      'Ce qui va se passer, pour toi : avant, pendant, après. EN: what it involves.'),
    card(E(1143), 'Peser', 'demander',
      'Ce que tu peux gagner, ce que tu risques : on te les explique avant ta décision. EN: benefits and risks.'),
    card(E(1145), 'Prendre son temps', 'ton droit',
      'Pour une intervention prévue, tu peux demander le temps de réfléchir. EN: time to think.'),
    card(E(1144), 'Dire oui', 'ton accord',
      'Un accord éclairé : donné après avoir compris. EN: informed consent.'),
    card(E(1146), 'Le but', 'ton accord',
      'Une décision éclairée : prise en connaissance de cause. EN: an informed decision.'),
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Les questions, puis la décision',
  groups: [
    grp('Tes questions', [
      it(E(1131), 'ce que ça implique'),
      it(E(1133), 'les risques'),
      it(E(1135), 'une alternative'),
      it(E(1137), 'le temps'),
    ], chk('Laquelle demande s’il existe une autre solution ?',
      ['Est-ce qu’il y a une alternative ?', 'Quels sont les risques ?'], 0,
      'Une alternative : une autre option. EN: another option.')),
    grp('Ta décision', [
      it(E(1140), 'un deuxième avis'),
      it(E(1139), 'changer d’avis'),
      it(E(1146), 'une décision éclairée'),
      it(E(1141), 'le formulaire'),
    ], chk('Tu as signé le formulaire, puis tu hésites. Tu peux…',
      ['retirer ton consentement avant l’intervention', 'seulement te taire'], 0,
      'Ton accord peut être retiré avant l’intervention. EN: you may withdraw it.')),
    ctl('Rien ne presse', '« Rappelez-moi quand vous aurez décidé » : le docteur…',
      ['te laisse le temps de réfléchir', 'veut une réponse aujourd’hui'], 0,
      'Il te laisse un délai de réflexion. EN: he gives you time.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consentir'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de mal demander',
  errors: [
    { wrong: 'Je dois penser à propos de ça avant de signer.', right: 'Je dois y réfléchir avant de signer.',
      why: 'Think about it se calque en penser à propos. En français : y réfléchir, y penser. EN: y réfléchir.' },
    { wrong: 'Quels sont les risques impliqués ?', right: fr(E(1133)),
      why: 'Involved n’a pas besoin de mot en français : quels sont les risques, tout simplement. EN: just les risques.' },
    { wrong: 'Je veux prendre une décision éduquée.', right: fr(E(1146)),
      why: 'Une personne est éduquée ; une décision est éclairée, comme le consentement. EN: éclairée.' },
    { wrong: 'Qu’est-ce que ça implique dedans ?', right: fr(E(1131)),
      why: 'Impliquer se suffit à lui-même ; ajoute concrètement si tu veux des détails. EN: no dedans.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consentir'],
};

const A9_ATOI = aToi('a9-atoi', 'tu poses tes questions', [
  ctl('Comprendre', 'Le docteur propose une arthroscopie. Ta première question :',
    ['Qu’est-ce que ça implique, concrètement ?', 'C’est quand ?'], 0,
    'D’abord comprendre ; la date viendra après. EN: understand first.'),
  ctl('Comparer', 'Tu veux savoir s’il existe une autre option :',
    ['Est-ce qu’il y a une alternative ?', 'Est-ce que c’est obligé ?', 'On fait autrement ?'], 0,
    'Une question claire et polie. EN: is there an alternative.'),
  ctl('Attendre', 'Tu ne veux pas décider aujourd’hui :',
    ['Est-ce que je peux prendre le temps de réfléchir ?', 'Je dois penser à propos de ça.'], 0,
    'Prendre le temps de réfléchir. EN: time to think.'),
  ctl('Vérifier', 'Tu veux l’avis d’un autre chirurgien :',
    ['J’aimerais avoir un deuxième avis avant de décider.', 'Je veux changer de docteur tout de suite.'], 0,
    'Un deuxième avis se demande sans rompre avec le premier médecin. EN: a second opinion.'),
], ['consentir'], 'sheet-proche');

const A9_TEXTE = dansUnTexte('a9-texte', 'Le formulaire de consentement', TEXTE_A9, [
  { q: 'Quelles sont les quatre choses qu’on a expliquées au patient ?', a: 'Ce que l’intervention implique, ses bénéfices attendus, ses risques et les autres options possibles.' },
  { q: 'Quelle autre option est nommée ?', a: 'La physiothérapie.' },
  { q: 'Le patient peut-il encore dire non après avoir signé ?', a: 'Oui : il peut retirer son consentement à tout moment avant l’intervention.' },
  { q: 'Que veulent dire « libre et éclairé » ?', a: 'Libre : sans pression. Éclairé : après avoir tout compris.' },
], 'rec-b2-28-texte-a9', ['consentir']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('La question', 'What does it involve?',
    ['Qu’est-ce que ça implique ?', 'Qu’est-ce que ça implique dedans ?'], 0,
    'Impliquer, sans rien ajouter. EN: implique.'),
  ctl('Le délai', 'Tu veux du temps :',
    ['Est-ce que je peux prendre le temps de réfléchir ?', 'Je dois penser à propos de ça.'], 0,
    'Prendre le temps de réfléchir. EN: time to think.'),
  ctl('L’accord', 'Un accord donné après avoir tout compris est…',
    ['éclairé', 'éduqué', 'obligé'], 0,
    'Un consentement éclairé. EN: informed.'),
], ['consentir']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Poser ses questions, donner son accord',
    opener: {
      line: 'Un chirurgien propose une intervention et tend un formulaire : ici tu poses toutes tes questions avant de signer, ou de ne pas signer. EN: A surgeon suggests a procedure and holds out a form: here you ask every question before you sign, or do not.',
      imageRef: 'lessons/francais-soins/act09.jpg',
    },
    sections: [],
    milestone: 'Tu demandes ce qu’une intervention implique, ses risques et ses alternatives, et tu prends le temps de décider. EN: You ask what a procedure involves, its risks and alternatives, and take time to decide.',
    estScreens: 40, restPoints: ['a9-construire', 'a9-atoi'],
  },
  sections: [A9_ECOUTE, A9_CARTES, A9_CONSTRUIRE, A9_ERREURS, A9_ATOI, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 · LE MOT SAVANT, LE MOT COURANT
 *
 *  At the kitchen table, Gérard reads his Lyon letter and does not know
 *  « céphalée » either: the technical word is not the learner's problem.
 *  Then the care faux amis: drogue, physicien, sensible, blessure,
 *  préservatif, stage.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'La lettre, à la table de la cuisine',
  frSub: 'Même un Lyonnais ne dit pas céphalée',
  setting: 'Chez toi, à Montréal. Ton beau-père, Gérard, relit la lettre de l’hôpital de Lyon, ses lunettes sur le nez.',
  bubbles: [
    { from: 'narrator', fr: 'Gérard pose la lettre et soupire. Il parle français depuis soixante-quatorze ans.', en: 'Gérard puts the letter down and sighs. He has spoken French for seventy-four years.' },
    { from: 'coach', fr: 'Céphalées matinales. Moi, je leur ai dit que j’avais mal à la tête le matin.', en: 'Morning cephalalgia. I told them I had a headache in the morning.' },
    { from: 'user', fr: fr(E(1154)), en: en(E(1154)) },
    { from: 'coach', fr: 'Et asthénie, c’est grave, ça.', en: 'And asthénie, that sounds serious.' },
    { from: 'user', fr: 'Non, c’est une grande fatigue. C’est le mot savant pour ce que tu m’as raconté.', en: 'No, it is great tiredness. It is the technical word for what you told me.', warn: 'Le mot savant, puis le mot courant' },
    { from: 'coach', fr: 'Tachycardie, je le connais. C’est quand le cœur s’emballe.', en: 'Tachycardia, I know that one. It is when your heart races.' },
    { from: 'user', fr: fr(E(1157)), en: en(E(1157)) },
    { from: 'narrator', fr: 'Gérard sourit. La prochaine fois, dit-il, il demandera les mots de tous les jours.', en: 'Gérard smiles. Next time, he says, he will ask for the everyday words.' },
  ],
  closing: { fr: 'Le mot savant est fait pour les médecins. Le mot courant est fait pour toi, et tu as le droit de le demander.', en: 'The technical word is made for doctors. The everyday word is made for you, and you may ask for it.' },
  audio: REC('rec-b2-28-cuisine'),
  say: REFRAME,
  terms: ['savant'],
};

const A10_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a10-tableau',
  layer: 'core',
  sheetId: 'sheet-registres',
  title: 'Six mots savants, six mots de tous les jours',
  cols: ['Mot savant', 'Mot courant', 'Où tu le lis'],
  rows: [
    { cells: ['une céphalée', 'un mal de tête', 'compte rendu'], say: fr(E(1148)),
      detail: { title: 'Céphalée', body: 'Un mal de tête. Au pluriel, des céphalées : des maux de tête. EN: a headache.', say: fr(E(1154)) } },
    { cells: ['une asthénie', 'une grande fatigue', 'compte rendu'], say: fr(E(1149)),
      detail: { title: 'Asthénie', body: 'Une fatigue importante, qui dure. EN: marked tiredness.', say: fr(E(1149)) } },
    { cells: ['une dyspnée', 'être essoufflé', 'compte rendu'], say: fr(E(1150)),
      detail: { title: 'Dyspnée', body: 'Du mal à respirer, le souffle court. EN: breathlessness.', say: fr(E(1150)) } },
    { cells: ['une tachycardie', 'le cœur qui s’emballe', 'électrocardiogramme'], say: fr(E(1151)),
      detail: { title: 'Tachycardie', body: 'Le cœur bat trop vite. EN: the heart beats too fast.', say: fr(E(1155)) } },
    { cells: ['un prurit', 'ça démange', 'dermatologie'], say: fr(E(1152)),
      detail: { title: 'Prurit', body: 'Une démangeaison : ça gratte. EN: itching.', say: fr(E(1152)) } },
    { cells: ['bénin, bénigne', 'sans gravité', 'résultats'], say: fr(E(1153)),
      detail: { title: 'Bénin', body: 'Qui n’est pas grave. Au féminin : bénigne. EN: not serious.', say: fr(E(1157)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['savant'],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Traduire le compte rendu',
  groups: [
    grp('Le mot savant', [
      it(E(1148), 'la tête'),
      it(E(1150), 'le souffle'),
      it(E(1151), 'le cœur'),
      it(E(1152), 'la peau'),
    ], chk('« Pas de dyspnée au repos » veut dire…',
      ['il n’est pas essoufflé au repos', 'il n’a pas mal à la tête au repos', 'il ne dort pas bien'], 0,
      'Dyspnée : être essoufflé. EN: no breathlessness at rest.')),
    grp('Le demander', [
      it(E(1156), 'la question'),
      it(E(1009), 'la même, acte 1'),
      it(E(1158), 'deux registres'),
      it('fr.a1.corps.280', 'hypertension, à l’écrit'),
    ], chk('Avec ton médecin, pour dire que tu fais de l’hypertension, tu peux dire…',
      ['j’ai de la tension', 'j’ai une tension au cœur'], 0,
      'J’ai de la tension : le mot courant. EN: the everyday phrase.')),
    ctl('Le droit', 'Tu ne comprends pas un mot savant. Tu…',
      ['demandes le mot de tous les jours', 'fais semblant de comprendre'], 0,
      'Le mot savant n’est pas plus juste : demande. EN: ask.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['savant'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  sheetId: 'sheet-registres',
  title: 'Six faux amis du soin',
  rule: {
    title: 'Même forme, autre sens',
    body: 'Drug, physician, sensitive, blessing, preservative, stage : six mots anglais qui ressemblent à un mot français au sens différent. Chez le médecin, le faux ami peut changer tout le message. EN: six look-alikes with other meanings.',
  },
  cards: [
    trap(E(1159), 'drogue', 'À la pharmacie, j’ai acheté une drogue contre la douleur.', 'Une drogue est un stupéfiant ; contre la douleur, c’est un médicament. EN: a drug you buy is un médicament.'),
    trap(E(1160), 'physicien', 'Mon physicien m’a prescrit une radio.', 'Physician se dit médecin ; un physicien fait de la physique. EN: a physician is un médecin.'),
    trap(E(1161), 'sensitive', 'Mon beau-père a la peau sensitive au soleil.', 'Sensitive se dit sensible. EN: sensible.'),
    trap(E(1162), 'blessing', 'Il s’est fait une bénédiction au bras en tombant.', 'L’anglais blessing ressemble à blessure, mais une blessure, c’est une injury. Pour dire qu’il s’est fait mal : une blessure. EN: a blessure is an injury.'),
    trap(E(1110), 'préservatif', 'Ce sirop ne contient pas de préservatif.', 'Preservative : un conservateur. EN: conservateur.'),
    trap(E(1172), 'stage', 'À ce stage, on ne peut rien affirmer.', 'Un stage est une formation en entreprise ; une étape se dit un stade. EN: stade.'),
  ],
  drill: [
    { promptSay: 'À la pharmacie, on achète des … .', opts: ['médicaments', 'drogues'], correct: 0 },
    { promptSay: 'Mon … m’a prescrit une radio.', opts: ['médecin', 'physicien'], correct: 0 },
    { promptSay: 'Il a la peau … au soleil.', opts: ['sensible', 'sensitive'], correct: 0 },
    { promptSay: 'Il s’est fait une … au bras.', opts: ['blessure', 'bénédiction'], correct: 0 },
    { promptSay: 'Ce sirop ne contient pas de … .', opts: ['conservateur', 'préservatif'], correct: 0 },
    { promptSay: 'À ce …, on ne peut rien affirmer.', opts: ['stade', 'stage'], correct: 0 },
    { promptSay: 'La lésion est … : ce n’est pas grave.', opts: ['bénigne', 'bénine'], correct: 0 },
    { promptSay: 'Pour lui, c’est une décision …, pas une décision prise à l’aveugle.', opts: ['éclairée', 'éduquée'], correct: 0 },
  ],
  steps: STEPS('Même forme, autre sens', 'Ce que le faux ami raconte'),
  audio: REC('rec-b2-28-piege-fauxamis'),
  say: REFRAME,
  terms: ['fauxami'],
};

const A10_ATOI = aToi('a10-atoi', 'tu traduis pour Gérard', [
  ctl('Céphalée', 'Gérard lit « céphalées matinales ». Tu lui dis :',
    ['Ce sont des maux de tête le matin.', 'C’est une maladie des cheveux.'], 0,
    'Céphalée : mal de tête. EN: headaches.'),
  ctl('Bénin', '« Lésion d’aspect bénin. » Tu lui dis :',
    ['Ça n’a pas l’air grave, mais on la surveille.', 'C’est grave, il faut opérer.'], 0,
    'Bénin : sans gravité ; surveillée par précaution. EN: not serious, but watched.'),
  ctl('La question', 'Tu ne connais pas le mot « prurit ». Tu demandes :',
    ['Pouvez-vous me le dire avec des mots de tous les jours ?', 'C’est un mot de la médecine ?'], 0,
    'Tu demandes le mot courant. EN: ask for the everyday word.'),
  ctl('Le faux ami', 'Gérard veut dire qu’il a acheté quelque chose contre la douleur :',
    ['un médicament', 'une drogue', 'un préservatif'], 0,
    'Un médicament. EN: a medicine.'),
], ['savant', 'fauxami']);

const A10_TEXTE = dansUnTexte('a10-texte', 'Traduire le compte rendu', TEXTE_A10, [
  { q: 'Dis la première phrase avec des mots de tous les jours.', a: 'Il a mal à la tête le matin et il est très fatigué depuis plusieurs semaines.' },
  { q: 'Que veut dire « pas de dyspnée au repos » ?', a: 'Il n’est pas essoufflé quand il ne fait pas d’effort.' },
  { q: 'Que montre l’électrocardiogramme ?', a: 'Que son cœur s’emballe, de temps en temps, pendant un court moment.' },
  { q: 'La lésion du bras est-elle inquiétante ?', a: 'Elle a l’air sans gravité (bénigne), mais son médecin traitant va la surveiller.' },
], 'rec-b2-28-texte-a10', ['savant']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Céphalée', 'Une céphalée, c’est…',
    ['un mal de tête', 'une fièvre', 'une fatigue'], 0,
    'Céphalée : la tête. EN: a headache.'),
  ctl('Le faux ami', 'A physician is…',
    ['un médecin', 'un physicien'], 0,
    'Physician : médecin. EN: médecin.'),
  ctl('Le droit', 'Tu ne connais pas un mot savant :',
    ['tu demandes le mot courant', 'tu n’oses pas demander'], 0,
    'C’est ton droit. EN: ask.'),
], ['savant', 'fauxami']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Le mot savant, le mot courant',
    opener: {
      line: 'Une lettre pleine de mots savants, et un beau-père francophone qui ne les comprend pas non plus : ici tu passes du mot du médecin au mot de tous les jours. EN: A letter full of technical words, and a French-speaking father-in-law who does not understand them either: here you move from the doctor’s word to the everyday one.',
      imageRef: 'lessons/francais-soins/act10.jpg',
    },
    sections: [],
    milestone: 'Tu traduis un compte rendu en mots de tous les jours et tu évites les faux amis du soin. EN: You turn a report into everyday words and avoid the care false friends.',
    estScreens: 42, restPoints: ['a10-construire', 'a10-piege'],
  },
  sections: [A10_HISTOIRE, A10_TABLEAU, A10_CONSTRUIRE, A10_PIEGE, A10_ATOI, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 · PARLER POUR UN PROCHE
 *
 *  At the Montréal emergency room with Gérard: the learner says who they
 *  are, speaks for him with his agreement, reports what he feels; the
 *  doctor answers cautiously (lesson 20 in B2's formulas, heard, not
 *  rebuilt); the learner asks what it means and supports (lesson 35 in B1).
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a11-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'À l’urgence, avec Gérard',
  frSub: 'Écoute ce que la médecin affirme, et ce qu’elle n’affirme pas',
  lines: [
    ln(E(1164)), ln(E(1165)), ln(E(1167)), ln(E(1168)), ln(E(1169)), ln(E(1171)),
    ln(E(1172)), ln(E(1173)), ln(E(1174)), ln(E(1175)), ln(E(1177)), ln(E(1178)),
  ],
  questions: [
    { q: 'Pourquoi le proche parle-t-il à la place de Gérard ?', opts: ['Gérard entend mal, et il le lui a demandé', 'Gérard ne parle pas français'], correct: 0, why: 'Il l’accompagne parce qu’il entend mal, et avec son accord. EN: he is hard of hearing and asked.' },
    { q: 'Depuis combien de temps Gérard a-t-il des vertiges ?', opts: ['trois semaines', 'trois jours', 'dix ans'], correct: 0, why: 'Trois semaines ; dix ans, c’est son traitement contre l’hypertension. EN: three weeks.' },
    { q: 'La médecin est-elle sûre de ce qu’elle dit ?', opts: ['non, elle reste prudente', 'oui, elle a un diagnostic'], correct: 0, why: 'À ce stade, on ne peut rien affirmer. EN: she is cautious.' },
    { q: 'Que demande-t-elle ?', opts: ['des examens complémentaires', 'une opération', 'rien de plus'], correct: 0, why: 'Elle préfère être prudente et demander d’autres examens. EN: further tests.' },
    { q: 'Comment présente-t-elle la situation ?', opts: ['pas alarmante, mais à surveiller', 'très grave', 'sans aucun intérêt'], correct: 0, why: 'Ce n’est pas alarmant, mais il faut surveiller. EN: not alarming, needs watching.' },
  ],
  audio: REC('rec-b2-28-proche-ecoute'),
  say: REFRAME,
  terms: ['proche', 'prudence'],
};

const A11_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a11-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Accompagner, et entendre',
  frSub: 'Cinq formules pour un proche',
  hint: 'Cinq cartes : deux pour parler pour lui, trois pour entendre le médecin.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['proche', 'prudence'],
  cards: [
    card(E(1182), 'Avec son accord', 'parler pour lui',
      `Tu parles pour lui, pas à sa place : dis qu’il t’a demandé d’être là. Pour rapporter ses mots, ${DISCOURS_REF} : il dit qu’il se sent fatigué. EN: speak for, not instead of.`),
    card(E(1166), 'En France', 'parler pour lui',
      'Un patient peut désigner une personne de confiance, qui l’accompagne et qu’on consulte s’il ne peut plus s’exprimer. EN: the French trusted person.'),
    card(E(1181), 'Le moment difficile', 'entendre',
      'Le médecin choisit ses mots ; écoute ce qu’il affirme et ce qu’il n’affirme pas. EN: breaking bad news.'),
    card(E(1176), 'La suite', 'entendre',
      'D’autres examens, pour préciser : ce n’est pas une réponse, c’est une étape. EN: further tests are a step.'),
    card(E(1179), 'Ce que dit le médecin', 'entendre',
      `Comprendre que + subjonctif, comme dans ${DECL_REF} : je comprends que ce soit difficile. EN: the doctor’s empathy.`),
  ],
};

const A11_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a11-exemples',
  layer: 'core',
  sheetId: 'sheet-proche',
  title: 'Six phrases prudentes, et ce qu’elles veulent dire',
  examples: [
    ex(E(1171), 'Une mauvaise nouvelle, adoucie : pas tout à fait.'),
    ex(E(1172), 'Pas encore de certitude : à ce stade.'),
    ex(E(1173), `Possible, pas sûr : il n’est pas exclu que + subjonctif, vu dans ${IMPERS_REF}.`),
    ex(E(1175), 'Rassurer sans promettre.'),
    ex('fr.b1.opinions-et-avis.1280', 'Le même degré : il se peut que.'),
    ex('fr.b2.emotions.1249', 'Au passé : il se peut qu’il se soit…'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['prudence'],
};

const A11_ATOI = aToi('a11-atoi', 'tu es là pour lui', [
  ctl('Te présenter', 'La médecin entre. Ta première phrase :',
    ['Je l’accompagne : c’est mon beau-père, il entend mal.', 'Il ne comprend rien, parlez-moi à moi.'], 0,
    'Qui tu es, et pourquoi tu es là. EN: say who you are.'),
  ctl('Rapporter', 'Gérard t’a dit : « Je me sens plus fatigué que d’habitude. » Tu rapportes :',
    ['Il dit qu’il se sent plus fatigué que d’habitude.', 'Il dit que je me sens plus fatigué que d’habitude.'], 0,
    'Le discours rapporté : il se sent. EN: he says he feels.'),
  ctl('Comprendre', '« Il n’est pas exclu qu’on doive adapter son traitement. » Tu demandes :',
    ['Qu’est-ce que ça veut dire pour lui, concrètement ?', 'Donc c’est grave ?', 'Donc tout va bien ?'], 0,
    'Ni panique ni fausse assurance : tu demandes la suite. EN: ask what it means.'),
  ctl('Soutenir', 'Plus tard, Émilie, sa fille, t’appelle, très inquiète. Tu lui dis :',
    [`${fr('fr.b1.emotions.1149').charAt(0).toUpperCase()}${fr('fr.b1.emotions.1149').slice(1)}, mais on va affronter ça ensemble.`, 'Ce n’est rien, arrête de t’inquiéter.'], 0,
    `Reconnaître, puis soutenir, comme dans ${EMOTIONS_REF}. EN: acknowledge, then support.`),
], ['proche', 'prudence'], 'sheet-proche');

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a11-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de mal entendre ou de mal dire',
  errors: [
    { wrong: 'Elle a dit qu’on doit changer son traitement.', right: 'Elle a dit qu’on devrait peut-être adapter son traitement.',
      why: 'Normal : on retient l’essentiel. Mais « il n’est pas exclu que » disait possible, pas certain ; garde sa prudence quand tu rapportes. EN: keep her caution.' },
    { wrong: 'À ce stage, on ne peut rien affirmer.', right: fr(E(1172)),
      why: 'Stage ressemble à l’anglais, mais un stage est une formation. Une étape d’une maladie : un stade. EN: stade.' },
    { wrong: 'Il m’a demandé d’être là pendant la consultation, donc je réponds à sa place.', right: 'Il m’a demandé d’être là pendant la consultation, donc je l’aide à répondre.',
      why: 'L’envie d’aider est bonne. Mais tu parles pour lui, avec lui, pas à sa place. EN: help him answer, do not answer for him.' },
    { wrong: 'Ce n’est pas grave, arrête de t’inquiéter.', right: `${fr('fr.b1.emotions.1149').charAt(0).toUpperCase()}${fr('fr.b1.emotions.1149').slice(1)}, et je suis là.`,
      why: 'Tu veux rassurer, mais tu nies ce que l’autre ressent, et tu promets ce que la médecin n’a pas dit. EN: acknowledge instead of denying.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proche', 'prudence'],
};

const A11_TEXTE = dansUnTexte('a11-texte', 'Ton message à Émilie', TEXTE_A11, [
  { q: 'Quelle est la première information, et pourquoi en premier ?', a: 'Qu’il va bien et se repose : pour rassurer Émilie avant le reste.' },
  { q: 'Trouve trois formules prudentes reprises de la médecin.', a: 'Pas tout à fait ceux qu’elle espérait ; il n’est pas exclu que ; à ce stade, elle ne peut rien affirmer (et : ce n’est pas alarmant, mais il faut surveiller).' },
  { q: 'Le message est-il plus alarmant que la médecin ? Comment le sais-tu ?', a: 'Non : il garde exactement ses mots et sa prudence, sans rien ajouter.' },
  { q: 'Quelle est la prochaine étape ?', a: 'Trouver un médecin de famille pour Gérard : tu t’en occupes demain.' },
], 'rec-b2-28-texte-a11', ['proche', 'prudence']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('La prudence', '« Il n’est pas exclu que… » veut dire…',
    ['c’est possible', 'c’est certain', 'c’est impossible'], 0,
    'Possible, sans être sûr. EN: possible.'),
  ctl('Rapporter', 'Il dit « je me sens fatigué ». Tu rapportes :',
    ['Il dit qu’il se sent fatigué.', 'Il dit que je me sens fatigué.'], 0,
    'Le point de vue change. EN: reported speech.'),
  ctl('Soutenir', 'Une réponse qui soutient :',
    ['Ça doit être dur, et je suis là.', 'Ce n’est rien du tout.'], 0,
    'Reconnaître, puis soutenir. EN: acknowledge, then support.'),
], ['proche', 'prudence']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Parler pour un proche',
    opener: {
      line: 'Ton beau-père entend mal, la médecin parle avec prudence : ici tu parles pour lui, tu écoutes ce qu’elle affirme vraiment, et tu restes à ses côtés. EN: Your father-in-law is hard of hearing and the doctor speaks carefully: here you speak for him, hear what she really says and stay by his side.',
      imageRef: 'lessons/francais-soins/act11.jpg',
    },
    sections: [],
    milestone: 'Tu parles pour un proche avec son accord, tu entends la prudence d’un médecin et tu réagis avec justesse. EN: You speak for a relative with their agreement, hear a doctor’s caution and respond well.',
    estScreens: 42, restPoints: ['a11-exemples', 'a11-erreurs'],
  },
  sections: [A11_ECOUTE, A11_CARTES, A11_EXEMPLES, A11_ATOI, A11_ERREURS, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 · À TOI D'ÉCRIRE
 *
 *  The model letter (a DIFFERENT relative: Samir for his mother), the plan,
 *  the uses, a phone call to the clinic, THE TASK (DELF B2 PE), then the
 *  closing sections and the one quiz.
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Une lettre modèle',
  frSub: 'Samir écrit à la nouvelle médecin de sa mère',
  text: MODELE_TEXT,
  glossary: [
    { word: 'cataracte', en: 'cataract', note: 'Le cristallin de l’œil devient opaque ; on l’opère souvent.' },
    { word: 'davantage', en: 'more', note: 'Plus, en registre soigné.' },
  ],
  questions: [
    { q: 'Global : dans quel ordre la lettre avance-t-elle ?', a: 'Qui écrit et pourquoi, les antécédents, le motif, ce qui a été essayé, trois questions, la formule finale.' },
    { q: 'Détail : que dit Samir sur le début et le rythme des symptômes ?', a: 'Ils ont commencé il y a environ deux mois, progressivement, et c’est pire le matin.' },
    { q: 'Inférence : pourquoi Samir précise-t-il « sans se blesser » ?', a: 'Parce que ce qui n’est pas arrivé compte aussi : la médecin sait tout de suite qu’il n’y a pas de blessure à examiner.' },
    { q: 'Point de vue : Samir donne-t-il un avis médical ? Comment le sais-tu ?', a: 'Non : il décrit et il pose des questions (faut-il revoir son traitement ?) ; il laisse la décision à la médecin.' },
  ],
  audio: REC('rec-b2-28-modele'),
  say: REFRAME,
  terms: ['proche', 'precision'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  sheetId: 'sheet-proche',
  title: 'Six temps pour ta lettre',
  steps: [
    '1. Présente-toi et dis pourquoi tu écris : je me permets de vous résumer sa situation. EN: who you are and why you write.',
    '2. Les antécédents : maladies, opérations, allergies, traitements en cours. EN: the history.',
    '3. Le motif : le début, la durée, le rythme, la place, la force, ce qui l’aggrave. EN: the symptoms, precisely.',
    '4. Ce qui a été essayé, et ce que ça a donné. EN: what has been tried.',
    '5. Tes questions, précises et numérotées dans ta tête : deux ou trois suffisent. EN: two or three precise questions.',
    `6. Une formule finale, comme dans ${COURRIELS_REF} : « ${B139_REFRAME} » EN: ${B139_REFRAME_EN}`,
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proche'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  title: 'Les phrases qui portent la lettre',
  cases: [
    uc('Tu ouvres la lettre', E(1184)),
    uc('Tu dates les symptômes', E(1185)),
    uc('Tu annonces tes questions', E(1187)),
    uc('Tu joins un document', E(1189)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proche'],
};

/** Say it out loud: the call to the clinic, in vous. ONE APOSTROPHE STYLE
 *  (’) in every turn and alt; no seed row. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'Au téléphone avec la clinique',
  setting: 'Tu appelles la Clinique médicale Rosemont (fictive), où Gérard a rendez-vous avec la docteure Leblanc le 3 novembre. Tu parles pour lui, en vous, avec son accord.',
  turns: [
    {
      ai: 'Clinique médicale Rosemont, bonjour. Que puis-je faire pour vous ?',
      en: 'Rosemont medical clinic, hello. What can I do for you?',
      user: 'Bonjour. J’appelle au sujet de mon beau-père, Gérard Martin, qui a rendez-vous avec la docteure Leblanc le 3 novembre.',
      userEn: 'Hello. I am calling about my father-in-law, Gérard Martin, who has an appointment with Dr Leblanc on 3 November. (Say who you are calling about.)',
      alts: [
        { fr: 'Bonjour. Je vous appelle pour mon beau-père, qui a un premier rendez-vous chez vous le 3 novembre.', en: 'Hello. I am calling for my father-in-law, who has a first appointment with you on 3 November.' },
        { fr: 'Bonjour, je suis un proche de M. Gérard Martin ; il a rendez-vous le 3 novembre.', en: 'Hello, I am a relative of Mr Gérard Martin; he has an appointment on 3 November.' },
      ],
    },
    {
      ai: 'Oui, je vois son dossier. C’est une première visite ?',
      en: 'Yes, I can see his file. Is it a first visit?',
      user: 'Oui. Il s’est installé à Montréal cet été et il n’a pas encore de médecin de famille.',
      userEn: 'Yes. He moved to Montréal this summer and does not have a family doctor yet. (The context, in one line.)',
      alts: [
        { fr: 'Oui, il vient d’arriver de Lyon et cherche un médecin de famille.', en: 'Yes, he has just arrived from Lyon and is looking for a family doctor.' },
        { fr: 'Oui, c’est sa première consultation au Québec.', en: 'Yes, it is his first consultation in Québec.' },
      ],
    },
    {
      ai: 'Très bien. Quel est le motif de la consultation ?',
      en: 'Very good. What is the reason for the visit?',
      user: 'Depuis trois semaines, il a des vertiges le matin, en se levant, et il se sent plus fatigué que d’habitude.',
      userEn: 'For three weeks he has been dizzy in the mornings when he gets up, and he feels more tired than usual. (Depuis + present, and the rhythm.)',
      alts: [
        { fr: 'Des vertiges au lever, depuis trois semaines, et une grande fatigue.', en: 'Dizziness when he gets up, for three weeks, and great tiredness.' },
        { fr: 'Ça fait trois semaines qu’il a des vertiges le matin, et il est très fatigué.', en: 'He has had dizzy spells in the morning for three weeks, and he is very tired. (Ça fait… que: also right, more spoken.)' },
      ],
    },
    {
      ai: 'Est-ce qu’il a des antécédents particuliers ?',
      en: 'Does he have any particular medical history?',
      user: 'Une hypertension traitée depuis dix ans, et une hospitalisation à Lyon en mars ; j’ai le compte rendu.',
      userEn: 'High blood pressure treated for ten years, and a hospital stay in Lyon in March; I have the report. (The history, and the document.)',
      alts: [
        { fr: 'Oui : de l’hypertension, et il a été hospitalisé à Lyon au printemps. J’ai la lettre de l’hôpital.', en: 'Yes: high blood pressure, and he was in hospital in Lyon in the spring. I have the hospital letter.' },
        { fr: 'Il prend un traitement contre l’hypertension, et il a été hospitalisé trois jours en mars.', en: 'He takes treatment for high blood pressure, and he was in hospital for three days in March.' },
      ],
    },
    {
      ai: 'Vous pouvez nous envoyer ce compte rendu par courriel avant le rendez-vous.',
      en: 'You can email us that report before the appointment.',
      user: 'Parfait. Est-ce que je peux l’accompagner pendant la consultation ? Il entend mal.',
      userEn: 'Perfect. May I go in with him during the consultation? He is hard of hearing. (Ask, and give the reason.)',
      alts: [
        { fr: 'Très bien, je vous l’envoie ce soir. Et je pourrai rester avec lui pendant le rendez-vous ?', en: 'Very good, I will send it tonight. And may I stay with him during the appointment?' },
        { fr: 'D’accord. Il m’a demandé de l’accompagner : est-ce possible ?', en: 'All right. He asked me to go with him: is that possible?' },
      ],
    },
    {
      ai: 'Bien sûr, s’il est d’accord. Pensez à apporter sa carte d’assurance maladie.',
      en: 'Of course, if he agrees. Remember to bring his health insurance card.',
      user: 'C’est noté : sa carte, la liste de ses médicaments et le compte rendu. Merci beaucoup.',
      userEn: 'Noted: his card, the list of his medicines and the report. Thank you very much. (Reformulate to check.)',
      alts: [
        { fr: 'Si je comprends bien : sa carte et ses documents. Merci, bonne journée.', en: 'If I understand correctly: his card and his documents. Thank you, have a good day.' },
        { fr: 'Entendu, nous apporterons tout. Merci pour votre aide.', en: 'Understood, we will bring everything. Thank you for your help.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proche', 'parcours'],
};

/** THE GRADED TASK, written, DELF B2 PE. */
const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Écrire au nouveau médecin d’un proche',
  frSub: 'Mission écrite, format DELF B2',
  brief: 'Choisis une situation. A : Gérard, ton beau-père, a son premier rendez-vous avec la docteure Leblanc, à Montréal. Il entend mal et se fatigue vite ; tu lui écris avant, pour résumer sa situation (tout ce que la leçon t’a appris sur lui). B : un de tes proches (réel ou inventé) arrive dans ta ville et a besoin d’un médecin ; écris un courriel formel à une clinique pour demander un premier rendez-vous, en résumant sa situation. Dans les deux cas : ses antécédents, ses symptômes, ce qui a été essayé, et tes questions. Pas de conseil médical : tu décris, tu demandes.',
  briefEn: 'Choose one situation. A: Gérard, your father-in-law, has his first appointment with Dr Leblanc in Montréal. He is hard of hearing and tires quickly; you write to her beforehand to summarise his situation (everything the lesson told you about him). B: someone close to you (real or invented) is arriving in your town and needs a doctor; write a formal email to a clinic asking for a first appointment and summarising their situation. In both: their history, their symptoms, what has been tried, and your questions. No medical advice: you describe, you ask.',
  produce: 'Écris un texte de 200 à 250 mots, dans le registre d’un courrier formel. Emploie au moins six mots ou formules de la leçon (par exemple : antécédents, apparu progressivement, depuis, par moments, une échelle de zéro à dix, examens complémentaires, compte rendu d’hospitalisation, médecin de famille), et termine par au moins deux questions précises.',
  responseSpec: { kind: 'text', minWords: 200, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          '3 : Qui écrit et pourquoi, les antécédents, les symptômes datés et décrits, ce qui a été essayé, au moins deux questions précises. Entre 200 et 250 mots.',
          '2 : Tout y est, mais une rubrique reste vague (des symptômes sans date, des questions générales), ou la longueur sort un peu des limites.',
          '1 : Une rubrique entière manque, ou le texte donne des conseils médicaux au lieu de décrire et de demander.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          '3 : Le texte suit l’ordre d’une consultation (présentation, antécédents, motif, essais, questions, formule) ; chaque paragraphe a une seule fonction et les liens sont clairs.',
          '2 : Le plan existe, mais une information arrive au mauvais endroit, ou deux rubriques se mélangent.',
          '1 : Le médecin doit chercher les informations dans le texte.',
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue du lexique',
        maxPoints: 2,
        descriptors: [
          '2 : Au moins six mots ou formules de la leçon, employés juste : pour dater (depuis, il y a, apparu progressivement), décrire (par moments, une échelle de zéro à dix) et nommer le parcours (antécédents, compte rendu, examens complémentaires).',
          '1 : Un vocabulaire de base (mal, malade, médicament) qui ne permet pas d’être précis.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          '2 : Depuis avec le présent pour ce qui continue, il y a pour un moment, apparaître avec être, allergique à, les accords et les modes justes.',
          '1 : Des erreurs sur ces points gênent parfois la lecture (pour trois semaines, a apparu, allergique de).',
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          '2 : Le registre d’un courrier formel à un médecin : vouvoiement, je me permets de, formule finale ; un ton précis et courtois, sans familiarité ni dramatisation.',
          '1 : Le texte sonne comme un message à un ami, ou il exagère (c’est très grave, il va mal) au lieu de décrire.',
        ],
      },
    ],
  },
  scaffold: [
    'Je me permets de vous écrire',
    'Ses antécédents :',
    'Le motif de la consultation :',
    'Depuis',
    'Ce qui a été essayé :',
    'J’aimerais vous poser',
    'Je joins à ce courriel',
    'Je vous prie d’agréer',
  ],
  modelAnswer: TASK_MODEL,
  modelAnswerEn: 'Subject: Mr Gérard Martin, before his first appointment. Doctor, my father-in-law, Mr Gérard Martin, aged seventy-four, has an appointment with you on 3 November. He moved to Montréal this summer, and I am taking the liberty of summarising his situation, because he is hard of hearing and tires quickly in consultations. His history: high blood pressure treated for ten years, a left knee replacement in 2019 and no known allergy. He does not smoke. In March he spent three days in hospital in Lyon for fainting spells; I am attaching the discharge report, which mentions brief episodes of tachycardia. The reason for the visit: for three weeks he has been dizzy in the mornings when he gets up, and he feels more tired than usual. The dizziness came on gradually; it lasts a few seconds, at times a little longer. He also has headaches when he wakes up, which he puts at four on a scale of zero to ten. What has been tried: in Lyon, the hospital had adjusted his blood pressure treatment, without real improvement. Last week, at the emergency room, further tests were requested. I would like to ask you three questions. Should these tests be repeated here, or are the ones from Lyon enough? Should his treatment be reviewed? And may I stay with him during consultations, so that he does not miss anything? Thank you in advance for your attention. Yours sincerely, Dominique Roy. The marker’s notes (not counted): 1. Task: who writes and why, the history, the symptoms dated and described, what was tried, three precise questions, an attachment. 2. Coherence: one paragraph per heading, in consultation order. 3. Range: history, hospitalised, discharge report, tachycardia, dizziness, came on gradually, at times, a zero-to-ten scale, further tests, emergency room. 4. Accuracy: depuis with the present, il y a for a point, être apparu, a subjunctive after pour que. 5. Register: vous, formal formulas, no familiarity, no medical advice.',
  watchFor: [
    { pattern: 'A duration with pour or a past tense for something still going on (il a des vertiges pour trois semaines, il avait des vertiges depuis).', criterion: 'correction', feedback: 'Pour ce qui continue : depuis + présent. Pour le début : il y a.', ref: 'a2-piege' },
    { pattern: 'Apparaître with avoir (les vertiges ont apparu), or no agreement.', criterion: 'correction', feedback: 'Apparaître se conjugue avec être : ils sont apparus.', ref: 'a2-cartes' },
    { pattern: 'Allergique de, opéré sur, la médecine for a medicine, à date for up to date.', criterion: 'correction', feedback: 'Allergique à, opéré de, un médicament, à jour.', ref: 'a4-piege' },
    { pattern: 'Symptoms without a date, a rhythm or a place (il est malade, il a des problèmes).', criterion: 'tache', feedback: 'Donne au médecin le début, la durée, le rythme et, si tu peux, une note sur dix.', ref: 'a3-trier' },
    { pattern: 'No medical history, or allergies and treatments left out.', criterion: 'tache', feedback: 'Ajoute ses antécédents : maladies, opérations, allergies, traitements en cours.', ref: 'a4-lecture' },
    { pattern: 'The writer gives medical advice or a diagnosis (il faut changer son traitement, c’est son cœur) instead of describing and asking.', criterion: 'tache', feedback: 'Tu décris et tu demandes ; la décision revient au médecin : faut-il revoir son traitement ?', ref: 'a12-lecture' },
    { pattern: 'Questions that are vague or missing (qu’est-ce que vous en pensez ?).', criterion: 'tache', feedback: 'Deux ou trois questions précises : faut-il refaire ces examens ? Son traitement doit-il être revu ?', ref: 'a9-construire' },
    { pattern: 'Information in no clear order, or several headings mixed in one paragraph.', criterion: 'coherence', feedback: 'Suis l’ordre d’une consultation : qui, antécédents, motif, essais, questions.', ref: 'a12-plan' },
    { pattern: 'Fewer than six items of the lesson, or only basic words (mal, malade, médicament).', criterion: 'etendue', feedback: 'Emploie les mots précis de la leçon : apparu progressivement, par moments, examens complémentaires.', ref: 'a12-usages' },
    { pattern: 'Technical words used wrongly, or faux amis (une drogue, mon physicien, sensitive).', criterion: 'etendue', feedback: 'Le mot courant vaut mieux qu’un mot savant mal placé ; attention aux faux amis.', ref: 'a10-piege' },
    { pattern: 'Tu, familiar formulas or dramatic tone (salut, c’est super grave, il va très mal).', criterion: 'registre', feedback: 'Vouvoie le médecin, décris sans dramatiser, et finis par une formule de courrier formel.', ref: 'a8-texte' },
  ],
  graderNotes: [
    'NO MEDICAL CONTENT IS GRADED. Never judge whether a symptom, treatment or history is medically plausible, and never add medical advice to the feedback. If the learner writes about a real relative, treat the content as private: comment only on the language and the structure.',
    'Count the words of the body only: the subject line (Objet), the greeting, the closing formula and the signature do not count. 200 to 250 with 10% tolerance (180 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'In situation A, the facts about Gérard come from the lesson (74, hypertension for ten years, knee replacement 2019, no allergy, three days in hospital in Lyon in March, dizziness in the morning for three weeks, fatigue, headaches, tests requested at the emergency room). Small invented details are fine; a contradiction of these facts costs at most one point under « tache ».',
    'In situation B, everything may be invented. A request for an appointment must be there; the relative’s history and symptoms follow the same headings.',
    'SPOKEN-VARIANT DECISION (gate B2-2, Paul 2026-09-29): the written norm is taught. « Ça fait trois semaines que » is courant and correct; in a formal letter it may cost at most one register point, never a correction point. « Pour trois semaines » for an ongoing duration and « a apparu » are errors.',
    'Accept regional usage: médecin de famille or médecin traitant, aller à l’urgence or aux urgences, physiothérapie or kinésithérapie, courriel or mail, pression or tension for blood pressure. Do not mark « référer » or « prescription » either way.',
    `Writer gender is unknown: judge agreement for internal consistency only. The doctor gets vous throughout (${TUVOUS_REF_EN}).`,
    `The letter conventions (greeting, formule finale) are those of ${COURRIELS_REF_EN}; do not require a French-only formula (Docteure, Madame la Docteure and Docteur are all fine).`,
    `The cautious formulas of ${IMPERS_REF_EN} (il se peut que, il n’est pas exclu que) count towards range if used correctly, but are not required.`,
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 20 du B2 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proche', 'precision'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Dis tes phrases de patient à voix haute',
  frSub: 'Décrire, puis demander',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['precision'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-proche',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'dater', v: 'il y a, depuis, ça fait… que', say: fr(E(1013)),
      detail: { title: 'Dater', body: 'Il y a pour le début, depuis pour ce qui continue ; par moments, de plus en plus pour le rythme. EN: start, duration, rhythm.', say: fr(E(1023)) } },
    { k: 'décrire', v: 'lancinante, aiguë, de zéro à dix', say: fr(E(1035)),
      detail: { title: 'Décrire', body: 'Le type, la note sur dix, ce qui aggrave et ce qui soulage. EN: type, score, triggers.', say: fr(E(1040)) } },
    { k: 'le passé', v: 'antécédents, allergique à', say: fr(E(1053)),
      detail: { title: 'Les antécédents', body: 'Personnels et familiaux, allergies, traitements en cours, même sans ordonnance. EN: history.', say: fr(E(1056)) } },
    { k: 'comprendre', v: 'posologie, notice, compte rendu', say: fr(E(1080)),
      detail: { title: 'Comprendre', body: 'Combien, quand, combien de temps ; la notice par rubriques ; le mot savant, puis le mot courant. EN: dosage, leaflet, report.', say: fr(E(1156)) } },
    { k: 'demander', v: 'ce que ça implique, un deuxième avis', say: fr(E(1131)),
      detail: { title: 'Demander', body: 'Les risques, l’alternative, le temps de réfléchir ; ton accord est éclairé. EN: consent.', say: fr(E(1137)) } },
    { k: 'un proche', v: 'je l’accompagne, il dit que', say: fr(E(1164)),
      detail: { title: 'Pour un proche', body: 'Avec son accord ; tu rapportes ses mots, tu entends la prudence du médecin. EN: speak for, hear the caution.', say: fr(E(1177)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['precision', 'proche'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: 'Tu sais décrire un symptôme comme un patient précis : quand il a commencé, depuis quand il dure, à quel rythme, où, de quel type et à quelle force. Tu présentes tes antécédents, tu comprends une consultation, une ordonnance, une notice et une lettre d’hôpital, tu poses les questions qui rendent ton accord éclairé et tu parles pour un proche. Le piège qui reste, c’est le calque discret : pour trois semaines, a apparu, une médecine, sur le comptoir. Avant l’examen, relis ta lettre et vérifie une seule chose : chaque symptôme a-t-il une date, un rythme et une place ? EN: Reread your letter and check that every symptom has a date, a rhythm and a place.',
  stats: [
    { k: 'Dater', v: 'il y a, depuis, par moments' },
    { k: 'Décrire', v: 'le type, la note sur dix' },
    { k: 'Comprendre', v: 'ordonnance, notice, lettre' },
    { k: 'Demander', v: 'ce que ça implique, un deuxième avis' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 2 to 11, an exam
 *  round (DELF B2 CO, CE, PE; TCF), and a recycling round citing earlier
 *  lessons by position. Each round's target is a distinct errorTrigger.
 *  `fold()` strips accents, commas and apostrophes: every typed answer
 *  differs from the wrong one by letters that survive, and every type-in
 *  accepts the other equally correct answers. */

type QQ = QuizQuestion;
const TI_Q = 'Complète et écris toute la phrase. EN: Complete it and write the whole sentence.';
const ES_Q = 'Quelque chose ne va pas. Écris la phrase correcte. EN: Something is wrong; write the sentence correctly.';
const tI = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q: TI_Q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_Q): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a12-quiz',
  layer: 'core',
  title: 'L’examen',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-temps', label: 'Dater une douleur', targets: ['duree-floue'],
      questions: [
        mc('Complète : « J’ai mal … trois semaines, et ça continue. »', ['depuis', 'il y a', 'pendant'], 0, 'Depuis + présent : une durée qui continue. EN: depuis.', 'a2-tableau'),
        mc('Complète : « Ça a commencé … trois semaines. »', ['il y a', 'depuis', 'pendant'], 0, 'Commencer, c’est un moment : il y a. EN: il y a.', 'a2-piege'),
        mc('At times, en parlant d’une douleur :', ['par moments', 'à des temps', 'en temps'], 0, 'Par moments : pas tout le temps. EN: par moments.', 'a2-cartes'),
        tI('Ça fait trois semaines ___ j’ai mal.', fr(E(1023)), 'Ça fait… que : la durée, à l’oral. EN: que.', 'a2-tableau'),
        tI('La douleur est ___ brusquement. (apparaître)', 'La douleur est apparue brusquement.', 'Apparaître se conjugue avec être et s’accorde : apparue. EN: apparue.', 'a2-piege'),
        eS('Maintenant, la douleur vient et va.', 'Maintenant, la douleur va et vient.', 'L’ordre français : aller, puis venir. EN: va et vient.', 'a2-piege', ['Maintenant, ça va et ça vient.']),
        eS('C’est pire dans le matin, puis ça se calme.', 'C’est pire le matin, puis ça se calme.', 'Le matin, sans dans. EN: le matin.', 'a2-piege', ['C’est pire le matin au réveil, puis ça se calme.', 'C’est pire au réveil, puis ça se calme.']),
        lC('Écoute. Depuis combien de temps la personne a-t-elle mal ?', fr(E(1023)), ['trois semaines', 'trois jours', 'depuis ce matin'], 0, 'Ça fait trois semaines que : trois semaines. EN: three weeks.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r2-douleur', label: 'Dire une douleur', targets: ['douleur-vague'],
      questions: [
        mc('Une douleur qui revient par élancements, comme un pouls :', ['une douleur lancinante', 'une douleur sourde', 'une gêne'], 0, 'Lancinante : par élancements. EN: throbbing.', 'a3-cartes'),
        mc('A sharp pain :', ['une douleur aiguë', 'une douleur pointue', 'une peine aiguë'], 0, 'Aigu, aiguë pour une douleur ; la peine est le chagrin. EN: aiguë.', 'a3-erreurs'),
        mc('L’infirmière demande une note de zéro à dix. La meilleure réponse :', ['Je dirais six.', 'La douleur est un six.', 'Six douleurs.'], 0, 'Tu donnes une note : je dirais six. EN: je dirais six.', 'a3-atoi'),
        tI('J’ai mal à l’___, mais pas au repos. (on exertion)', fr(E(1039)), 'À l’effort, au repos. EN: effort.', 'a3-cartes'),
        tI('Ça ___ quand je plie le genou. (to get worse)', fr(E(1040)), 'Empirer, ou s’aggraver : devenir pire. EN: empire.', 'a3-trier', ['Ça s’aggrave quand je plie le genou.']),
        eS('J’ai une peine au genou depuis trois semaines.', 'J’ai mal au genou depuis trois semaines.', 'La peine, c’est le chagrin : au genou, j’ai mal. EN: pain is douleur.', 'a3-erreurs', ['J’ai une douleur au genou depuis trois semaines.']),
        eS('Mon genou me blesse quand je monte les escaliers.', 'Mon genou me fait mal quand je monte les escaliers.', 'Blesser, c’est causer une blessure. EN: me fait mal.', 'a3-erreurs', ['J’ai mal au genou quand je monte les escaliers.']),
        lC('Écoute. Quel type de douleur la personne décrit-elle ?', fr(E(1045)), ['aiguë', 'sourde', 'une simple gêne'], 0, 'Aiguë, comme un coup de poignard. EN: sharp.', 'a3-histoire'),
      ],
    },
    {
      id: 'r3-antecedents', label: 'Les antécédents', targets: ['antecedents-oublies'],
      questions: [
        mc('Personal and family medical history :', ['les antécédents personnels et familiaux', 'les précédents médicaux de la famille', 'l’historique du patient et de sa famille médicale'], 0, 'Les antécédents. EN: antécédents.', 'a4-lecture'),
        mc('Tu digères mal le lait. Tu parles…', ['d’une intolérance', 'd’une allergie'], 0, 'Un aliment mal digéré : une intolérance. EN: an intolerance.', 'a4-construire'),
        mc('Le médecin demande tes traitements en cours. Tu cites…', ['tout, même la vitamine D sans ordonnance', 'seulement les médicaments sur ordonnance'], 0, 'Tout compte : ce que tu prends peut interagir. EN: everything.', 'a4-lecture'),
        tI('Je suis allergique ___ la pénicilline : j’ai fait une réaction à douze ans.', fr(E(1053)), 'Allergique à. EN: à.', 'a4-piege'),
        tI('On m’a ___ l’appendice à vingt ans. (to remove)', fr(E(1049)), 'Enlever, ou retirer, un organe. EN: enlevé.', 'a4-piege', ['On m’a retiré l’appendice à vingt ans.']),
        eS('En ce moment, je ne prends aucune médecine.', 'En ce moment, je ne prends aucun médicament.', 'La médecine est une science. EN: un médicament.', 'a4-piege', ['En ce moment, je ne prends aucun traitement.']),
        eS('Je suis à date dans mes vaccins.', fr(E(1061)), 'À date calque up to date : à jour. EN: à jour.', 'a4-piege', ['Je suis à jour dans mes vaccins.', 'Je suis à jour de mes vaccins.', 'Je suis à jour de mes vaccinations.']),
        lC('Écoute. De quoi parle la personne ?', fr(E(1056)), ['d’antécédents familiaux', 'd’un traitement en cours', 'd’une allergie'], 0, 'Dans ma famille : des antécédents familiaux. EN: family history.', 'a4-construire'),
      ],
    },
    {
      id: 'r4-medecin', label: 'Comprendre le médecin', targets: ['medecin-incompris'],
      questions: [
        mc('« Ça pourrait être une tendinite. » La docteure…', ['fait une hypothèse', 'donne un diagnostic sûr'], 0, 'Le conditionnel : une hypothèse. EN: a hypothesis.', 'a5-erreurs'),
        mc('Écarter une fracture, c’est…', ['vérifier que ce n’en est pas une', 'soigner une fracture', 'provoquer une fracture'], 0, 'Écarter une hypothèse. EN: to rule out.', 'a5-cartes'),
        mc('Pour faire expliquer un mot au médecin, sans le couper :', ['Qu’est-ce que vous entendez par… ?', 'Qu’est-ce que vous voulez dire avec… ?'], 0, 'Entendre par, vouloir dire par. EN: par.', 'a5-erreurs'),
        tI('Si ça ne s’améliore pas d’ici dix jours, je vous ___ vers un spécialiste. (to refer)', fr(E(1069)), 'Orienter vers. EN: oriente.', 'a5-cartes', ['Si ça ne s’améliore pas d’ici dix jours, je vous dirige vers un spécialiste.', 'Si ça ne s’améliore pas d’ici dix jours, je vous envoie vers un spécialiste.']),
        tI('On va faire un bilan ___ pour vérifier que tout va bien. (blood)', fr(E(1079)), 'Un bilan sanguin. EN: sanguin.', 'a5-cartes'),
        eS('Qu’est-ce que vous voulez dire avec fracture de fatigue ?', 'Qu’est-ce que vous voulez dire par fracture de fatigue ?', 'Vouloir dire par. EN: par.', 'a5-erreurs', ['Qu’est-ce que vous entendez par fracture de fatigue ?']),
        eS('On va faire un test de sang pour vérifier que tout va bien.', fr(E(1079)), 'Une prise de sang, un bilan sanguin. EN: blood work.', 'a5-erreurs', ['On va faire une prise de sang pour vérifier que tout va bien.', 'On va faire une analyse de sang pour vérifier que tout va bien.', 'On va faire des analyses de sang pour vérifier que tout va bien.']),
        lC('Écoute. Combien de jours d’arrêt de travail ?', fr(E(1068)), ['trois', 'dix', 'cinq'], 0, 'Trois jours. EN: three.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r5-posologie', label: 'L’ordonnance', targets: ['posologie-calquee'],
      questions: [
        mc('With food, sur une ordonnance :', ['au cours du repas', 'sur un repas', 'dans le repas'], 0, 'Au cours du repas. EN: with food.', 'a6-cartes'),
        mc('On an empty stomach :', ['à jeun', 'sur un estomac vide', 'à vide'], 0, 'À jeun. EN: à jeun.', 'a6-piege'),
        mc('As needed :', ['en cas de besoin', 'comme nécessaire', 'comme il faut'], 0, 'En cas de besoin. EN: as needed.', 'a6-piege'),
        tI('Ce médicament est en vente ___, mais demandez conseil au pharmacien. (over the counter)', fr(E(1096)), 'En vente libre. EN: libre.', 'a6-cartes'),
        tI('Pas plus ___ deux comprimés par jour.', fr(E(1082)), 'Plus de + nombre. EN: de.', 'a6-piege'),
        eS('Prenez un comprimé deux fois un jour.', 'Prenez un comprimé deux fois par jour.', 'Une fréquence : par jour. EN: par.', 'a6-piege'),
        eS('Est-ce que ça va me rendre endormi ?', fr(E(1087)), 'Faire somnoler. EN: drowsy.', 'a6-piege', ['Est-ce que ça va me faire somnoler ?', 'Est-ce que ça peut faire somnoler ?', 'Est-ce que ça va me rendre somnolent ?', 'Est-ce que ça va me rendre somnolente ?', 'Est-ce que ça fait dormir ?', 'Est-ce que ça rend somnolent ?']),
        lC('Écoute. Quand faut-il prendre ce médicament ?', fr(E(1080)), ['pendant le repas, matin et soir', 'à jeun, le matin', 'au coucher'], 0, 'Au cours du repas, matin et soir. EN: with meals.', 'a6-histoire'),
      ],
    },
    {
      id: 'r6-notice', label: 'La notice', targets: ['notice-mal-lue'],
      questions: [
        mc('La rubrique qui dit quand il ne faut PAS prendre le médicament :', ['les contre-indications', 'les effets indésirables', 'la conservation'], 0, 'Les contre-indications, avant de le prendre. EN: contraindications.', 'a7-cartes'),
        mc('« Les effets indésirables éventuels », c’est-à-dire…', ['les effets possibles', 'les effets de la fin du traitement', 'les effets garantis'], 0, 'Éventuel : possible. EN: possible.', 'a7-erreurs'),
        mc('D’après la notice fictive, si tu oublies une dose…', ['tu ne prends pas de dose double', 'tu prends deux comprimés la fois suivante'], 0, 'Pas de dose double pour compenser. EN: no double dose.', 'a7-lecture'),
        mc('« Eventually, the pain will go away. » En français :', ['La douleur finira par passer.', 'Éventuellement, la douleur passera.'], 0, 'Eventually : finir par. Éventuellement voudrait dire peut-être. EN: finir par.', 'a7-erreurs'),
        tI('Tenir hors de la vue et de la ___ des enfants. (reach)', fr(E(1100)), 'La portée. EN: portée.', 'a7-cartes'),
        tI('Ce médicament peut ___ une somnolence. (to cause)', fr(E(1106)), 'Provoquer. EN: provoquer.', 'a7-cartes', ['Ce médicament peut entraîner une somnolence.', 'Ce médicament peut causer une somnolence.']),
        eS('Ce médicament est contre-indiqué avec la grossesse.', 'Ce médicament est contre-indiqué pendant la grossesse.', 'Pendant la grossesse, ou en cas de grossesse. EN: pendant.', 'a7-erreurs', ['Ce médicament est contre-indiqué en cas de grossesse.', 'Ce médicament est contre-indiqué durant la grossesse.', 'Ce médicament est déconseillé pendant la grossesse.']),
        lC('Écoute. Que dit cette consigne ?', fr(E(1107)), ['ne pas doubler la dose suivante', 'prendre deux doses le lendemain'], 0, 'Pas de dose double pour compenser. EN: no double dose.', 'a7-lecture'),
      ],
    },
    {
      id: 'r7-parcours', label: 'Le parcours de soins', targets: ['systeme-confondu'],
      questions: [
        mc('En France, le généraliste que tu déclares à l’Assurance maladie :', ['le médecin traitant', 'le médecin de garde', 'le spécialiste'], 0, 'Le médecin traitant. EN: the registered GP.', 'a8-cartes'),
        mc('Au Québec, pour parler à une infirmière jour et nuit, on appelle…', ['le 811', 'le 144', 'le 15'], 0, 'Le 811 ; le 144 est suisse, le 15 français. EN: 811.', 'a8-tableau'),
        mc('En Suisse, l’assurance maladie de base est…', ['obligatoire', 'facultative'], 0, 'Obligatoire. EN: compulsory.', 'a8-tableau'),
        mc('Un compte rendu d’hospitalisation est écrit…', ['par l’hôpital, pour le médecin du patient', 'par le patient, pour l’hôpital'], 0, 'L’hôpital résume le séjour. EN: by the hospital.', 'a8-lecture'),
        tI('En France, on déclare un médecin ___ pour être mieux remboursé.', fr(E(1115)), 'Le médecin traitant. EN: traitant.', 'a8-cartes'),
        tI('Au Québec, on présente sa carte d’assurance ___ à chaque visite.', fr(E(1116)), 'La carte d’assurance maladie. EN: maladie.', 'a8-tableau'),
        eS('Le compte rendu est adressé à son médecin traiteur, à Lyon.', fr(E(1128)), 'Un traiteur prépare des repas ; le médecin traitant te suit. EN: traitant.', 'a8-atoi'),
        lC('Écoute. De quel pays parle-t-on ?', fr(E(1121)), ['la Belgique', 'la Suisse', 'la France'], 0, 'La mutualité, en Belgique. EN: Belgium.', 'a8-tableau'),
      ],
    },
    {
      id: 'r8-consentement', label: 'Consentir', targets: ['consentement-passif'],
      questions: [
        mc('What does it involve?', ['Qu’est-ce que ça implique ?', 'Qu’est-ce que ça implique dedans ?'], 0, 'Impliquer, sans rien ajouter. EN: implique.', 'a9-erreurs'),
        mc('Tu veux un délai avant de décider. Tu demandes…', ['à prendre le temps de réfléchir', 'à penser à propos de ça'], 0, 'Prendre le temps de réfléchir. EN: time to think.', 'a9-cartes'),
        mc('Une décision prise après avoir tout compris est une décision…', ['éclairée', 'éduquée'], 0, 'Éclairée, comme le consentement. EN: informed.', 'a9-erreurs'),
        mc('Tu as signé le formulaire, puis tu hésites. Tu peux…', ['retirer ton consentement avant l’intervention', 'seulement te taire'], 0, 'Tu peux changer d’avis avant l’intervention. EN: withdraw.', 'a9-construire'),
        tI('Avant de dire oui, demande ce que ça ___, les risques et les autres options. (to involve)', fr(E(1147)), 'Impliquer. EN: implique.', 'a9-cartes', ['Avant de dire oui, demande ce que ça comporte, les risques et les autres options.', 'Avant de dire oui, demande ce que ça entraîne, les risques et les autres options.']),
        tI('J’aimerais avoir un deuxième ___ avant de décider. (opinion)', fr(E(1140)), 'Un deuxième avis. EN: avis.', 'a9-cartes'),
        eS('Je dois penser à propos de ça avant de signer.', 'Je dois y réfléchir avant de signer.', 'Y réfléchir, y penser. EN: y réfléchir.', 'a9-erreurs', ['Je dois y penser avant de signer.', 'Je dois réfléchir avant de signer.', 'Je dois réfléchir à ça avant de signer.', 'Je dois penser à ça avant de signer.']),
        lC('Écoute. Que demande la personne ?', fr(E(1135)), ['s’il existe une autre solution', 'combien ça coûte', 'quand elle pourra sortir'], 0, 'Une alternative : une autre solution. EN: another option.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r9-registres', label: 'Le mot savant, le faux ami', targets: ['mot-savant-faux-ami'],
      questions: [
        mc('Une céphalée, en mots de tous les jours :', ['un mal de tête', 'un mal de dos', 'une fièvre'], 0, 'Céphalée : la tête. EN: a headache.', 'a10-tableau'),
        mc('Une tachycardie :', ['le cœur qui s’emballe', 'une grande fatigue', 'des démangeaisons'], 0, 'Le cœur bat trop vite. EN: racing heart.', 'a10-tableau'),
        mc('At the pharmacy, you buy…', ['des médicaments', 'des drogues'], 0, 'Une drogue est un stupéfiant. EN: médicaments.', 'a10-piege'),
        tI('Pouvez-vous me le dire avec des mots de tous les ___ ?', fr(E(1156)), 'Les mots de tous les jours. EN: jours.', 'a10-construire'),
        tI('Un ___ fait de la physique ; un médecin soigne. (physicist)', fr(E(1160)), 'Un physicien. EN: physicien.', 'a10-piege'),
        eS('Mon beau-père a la peau sensitive au soleil.', fr(E(1161)), 'Sensitive se dit sensible. EN: sensible.', 'a10-piege'),
        eS('D’après le compte rendu, la lésion est bénine.', 'D’après le compte rendu, la lésion est bénigne.', 'Bénin, bénigne au féminin. EN: bénigne.', 'a10-tableau'),
        lC('Écoute. Que veut dire le mot savant ?', fr(E(1154)), ['des maux de tête', 'des vertiges', 'une grande fatigue'], 0, 'Céphalées : maux de tête. EN: headaches.', 'a10-histoire'),
      ],
    },
    {
      id: 'r10-proche', label: 'Pour un proche', targets: ['nouvelle-mal-entendue'],
      questions: [
        mc('« Il n’est pas exclu qu’on doive adapter son traitement. » La médecin dit que c’est…', ['possible', 'certain', 'impossible'], 0, 'Possible, sans être sûr. EN: possible.', 'a11-exemples'),
        mc('« Ce n’est pas alarmant, mais il faut surveiller. » Elle veut…', ['rassurer sans promettre', 'annoncer une urgence', 'dire que tout est fini'], 0, 'Rassurer, et garder la prudence. EN: reassure without promising.', 'a11-exemples'),
        mc('Tu accompagnes ton beau-père. Ta première phrase à la médecin :', [fr(E(1164)), 'Moi, je vais tout vous dire à sa place.', 'Il ne comprend rien, parlez-moi à moi.'], 0, 'Qui tu es et pourquoi tu es là. EN: say who you are.', 'a11-atoi'),
        mc('Émilie apprend la nouvelle et s’inquiète. Une réponse qui soutient :', ['Ça doit être dur, et je suis là.', 'Ce n’est pas grave.', 'Il faut voir le bon côté.'], 0, `Reconnaître, puis soutenir, comme dans ${EMOTIONS_REF}. EN: acknowledge.`, 'a11-erreurs'),
        tI('Il dit qu’il se ___ plus fatigué que d’habitude. (sentir)', fr(E(1168)), 'Il dit que + indicatif : il se sent. EN: sent.', 'a11-atoi'),
        tI('Il n’est pas exclu qu’on ___ adapter son traitement. (devoir)', fr(E(1173)), 'Il n’est pas exclu que + subjonctif : doive. EN: doive.', 'a11-exemples'),
        eS('À ce stage, on ne peut rien affirmer.', fr(E(1172)), 'Un stage est une formation ; une étape, un stade. EN: stade.', 'a11-erreurs'),
        lC('Écoute. Que demande le proche ?', fr(E(1177)), ['ce que ça change pour le patient', 'le nom du médicament', 'l’adresse de l’hôpital'], 0, 'Ce que ça veut dire pour lui, concrètement. EN: what it means for him.', 'a11-ecoute'),
      ],
    },
    {
      id: 'r11-examen', label: 'Comme à l’examen', targets: ['consigne-examen'],
      questions: [
        mc('Format DELF B2, compréhension orale. D’après la consultation, pourquoi la docteure demande-t-elle une radio ?', ['pour écarter une fracture de fatigue', 'parce qu’elle est sûre qu’il y a une fracture', 'pour préparer une opération'], 0, 'Écarter une hypothèse. EN: to rule it out.', 'a5-ecoute'),
        mc('Format DELF B2, compréhension écrite. D’après la notice, qui ne doit jamais prendre Tendalgine ?', ['une personne allergique à l’un de ses composants', 'une personne qui conduit', 'une personne qui vient de manger'], 0, 'Ne prenez jamais… si vous êtes allergique. EN: allergic people.', 'a7-lecture'),
        mc('Format DELF B2, compréhension écrite. Dans la lettre de Lyon, le suivi proposé comprend…', ['un rendez-vous de contrôle dans un mois', 'une opération du genou', 'un arrêt de travail'], 0, 'Un contrôle dans un mois, et un enregistrement du rythme cardiaque. EN: a check-up.', 'a8-lecture'),
        mc('Format TCF. Choisissez la bonne réponse : « Ce médicament est … pendant la grossesse. »', ['déconseillé', 'déconseillée', 'déconseiller', 'déconseillant'], 0, 'Médicament est masculin : déconseillé. EN: agreement.', 'a7-cartes'),
        mc('Format TCF : « Si vous oubliez une dose, ne prenez pas de dose … pour compenser. »', ['double', 'deuxième', 'doubler', 'doublement'], 0, 'Une dose double. EN: double.', 'a7-lecture'),
        tI('Format DELF B2, production écrite. Je vous prie d’___, Docteure, mes salutations respectueuses. (to accept)', 'Je vous prie d’agréer, Docteure, mes salutations respectueuses.', 'La formule finale : je vous prie d’agréer (ou d’accepter). EN: agréer.', 'a12-plan', ['Je vous prie d’accepter, Docteure, mes salutations respectueuses.']),
        eS('Les vertiges ont apparu progressivement.', 'Les vertiges sont apparus progressivement.', 'Apparaître : être, et l’accord. EN: sont apparus.', 'a2-piege', [], 'Format DELF B2, correction. Une forme ne va pas : écris la phrase correcte. EN: One form is wrong; write the sentence correctly.'),
        lC('Format DELF B2, compréhension orale. Écoute. Que propose le chirurgien, à côté de l’intervention ?', fr(E(1136)), ['de la physiothérapie', 'un médicament', 'un deuxième avis'], 0, 'La physiothérapie pendant deux mois, puis décider. EN: physiotherapy.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r12-rappel', label: 'L’A2, le B1 et le B2 en renfort', targets: ['rappel-structures'],
      questions: [
        mc(`${Cap(MEDECIN_REF)} : « Ça vous lance ou ça vous … ? »`, ['brûle', 'brûlez'], 0, 'Ça, sujet : troisième personne. EN: brûle.', 'a3-cartes'),
        mc(`${Cap(DECL_REF)} : « Il est possible que ce … une tendinite. »`, ['soit', 'est'], 0, 'Il est possible que + subjonctif. EN: soit.', 'a11-exemples'),
        tI(`${Cap(IMPERS_REF)} : il se peut que + subjonctif. Il se peut que ce ___ une simple tendinite. (être)`, 'Il se peut que ce soit une simple tendinite.', `« ${B220_REFRAME} » EN: ${B220_REFRAME_EN}`, 'a11-exemples'),
        mc(`${Cap(DISCOURS_REF)} : Gérard dit « je me sens fatigué ». Tu rapportes :`, ['Il dit qu’il se sent fatigué.', 'Il dit que je me sens fatigué.'], 0, `« ${B119_REFRAME} » EN: ${B119_REFRAME_EN}`, 'a11-atoi'),
        mc(`${Cap(TUVOUS_REF)} : avec la médecin de ton beau-père, tu dis…`, ['vous', 'tu'], 0, `« ${B126_REFRAME} » EN: ${B126_REFRAME_EN}`, 'a12-scenario'),
        tI(`${Cap(BUT_REF)} : un seul sujet, afin de + infinitif. Je vous écris afin de vous ___ sa situation. (résumer)`, 'Je vous écris afin de vous résumer sa situation.', `« ${B217_REFRAME} » EN: ${B217_REFRAME_EN}`, 'a12-plan'),
        eS('Je regrette que vous n’avez pas pu le recevoir plus tôt.', 'Je regrette que vous n’ayez pas pu le recevoir plus tôt.', `${Cap(SUBJ_PASSE_REF)} : « ${B205_REFRAME} » EN: ${B205_REFRAME_EN}`, 'a11-exemples'),
        lC(`Écoute. ${Cap(EMOTIONS_REF)} : quelle réaction entends-tu ?`, fr('fr.b1.emotions.1149'), ['de la compassion', 'de la colère', 'de la surprise'], 0, `« ${B135_REFRAME} » EN: ${B135_REFRAME_EN}`, 'a11-atoi'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz: LessonRich reshuffles at runtime; validateDensity's quiz-spread
 *  still counts the authored order, so options rotate WITH their index. */
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
spreadSlots(A12_QUIZ);

const A12_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a12-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'it started three weeks ago', back: 'ça a commencé il y a trois semaines', say: fr(E(1013)) },
    { front: 'it comes and goes', back: 'ça va et ça vient', say: fr(E(1020)) },
    { front: 'on a scale of zero to ten', back: 'sur une échelle de zéro à dix', say: fr(E(1035)) },
    { front: 'medical history', back: 'les antécédents', say: fr(E(1048)) },
    { front: 'to rule out', back: 'écarter une hypothèse', say: fr(E(1064)) },
    { front: 'with food', back: 'au cours du repas', say: fr(E(1080)) },
    { front: 'an adverse effect', back: 'un effet indésirable', say: fr(E(1106)) },
    { front: 'what does it involve?', back: 'qu’est-ce que ça implique ?', say: fr(E(1131)) },
    { front: 'at this stage', back: 'à ce stade', say: fr(E(1172)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Le français des soins, en résumé',
  body: `${REFRAME} Tu sais décrire un symptôme au mot près, présenter des antécédents, comprendre un médecin, un pharmacien, une notice et une lettre d’hôpital, poser les questions d’un consentement éclairé, demander le mot courant, parler pour un proche et entendre une réponse prudente. Tu as aussi écrit au nouveau médecin d’un proche, au format du DELF B2. La prochaine leçon, ${SCIENCE_REF}, te fait lire et discuter la science et la technologie sans être spécialiste. EN: Next comes science and technology for a non-specialist.`,
  points: [
    'Il y a pour le début, depuis pour ce qui continue.',
    'Un type, une note sur dix, un déclencheur.',
    'Le mot savant se demande en mot courant.',
    'Avant de dire oui : ce que ça implique, les risques, l’alternative.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['precision', 'consentir'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'À toi d’écrire',
    opener: {
      line: 'Un proche, un nouveau médecin et un premier rendez-vous : à toi de lui écrire ce qu’il doit savoir, et ce que tu veux savoir. EN: A relative, a new doctor and a first appointment: your turn to write what the doctor needs to know, and what you want to know.',
      imageRef: 'lessons/francais-soins/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit au nouveau médecin d’un proche au format du DELF B2, appelé la clinique et passé le quiz : quatre-vingt-seize questions, douze rounds. EN: You wrote to a relative’s new doctor in DELF B2 format, called the clinic and sat the quiz: ninety-six questions, twelve rounds.',
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-antecedents', 'a12-quiz/r6-notice', 'a12-quiz/r9-registres'],
  },
  sections: [
    A12_LECTURE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS (layer deep: teach and table only). Every sheet is
 *  reached from at least one mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-decrire', 'Décrire un symptôme', ['dater', 'placer', 'le type et la force', 'les antécédents'], [
    teach('sheet-decrire-teach', 'Six réponses avant d’entrer',
      'Un médecin a besoin de six réponses : quand ça a commencé (il y a), depuis quand ça dure (depuis, ça fait… que), à quel rythme (par moments, de plus en plus, ça va et ça vient), où exactement (sous, au-dessus, sur le côté), de quel type et à quelle force (lancinante, aiguë, sourde ; de zéro à dix), et ce qui l’aggrave ou la soulage. Ajoute tes antécédents : maladies, opérations, allergies, traitements en cours. EN: Six answers before you go in, plus your history.'),
    table('sheet-decrire-table', 'Les formules, question par question', ['Question', 'Formule', 'Remarque'], [
      ['quand ?', 'Ça a commencé il y a trois semaines.', 'il y a + un moment'],
      ['depuis quand ?', 'J’ai mal depuis trois semaines.', 'depuis + présent'],
      ['depuis quand ?', 'Ça fait trois semaines que j’ai mal.', 'courant, surtout à l’oral'],
      ['comment est-elle venue ?', 'Elle est apparue progressivement.', 'apparaître + être'],
      ['à quel rythme ?', 'par moments ; ça va et ça vient', 'jamais « vient et va »'],
      ['où ?', 'juste sous la rotule, sur le côté extérieur', 'un repère, un côté'],
      ['de quel type ?', 'lancinante, aiguë, sourde, ça tire', 'jamais « pointue »'],
      ['à quelle force ?', 'Sur une échelle de zéro à dix, je dirais six.', 'jamais « c’est un six »'],
      ['ce qui aggrave ?', 'Ça empire quand je plie le genou.', 'à l’effort, au repos'],
      ['tes antécédents ?', 'On m’a enlevé l’appendice à vingt ans.', 'opéré de, suivi pour'],
      ['tes allergies ?', 'Je suis allergique à la pénicilline.', 'allergique à ; intolérance ≠ allergie'],
    ]),
  ]),
  sheet('sheet-posologie', 'Ordonnance, pharmacie, notice', ['la posologie', 'la pharmacie', 'les rubriques de la notice'], [
    teach('sheet-posologie-teach', 'Combien, quand, combien de temps',
      'Une posologie répond à trois questions : combien (un comprimé, pas plus de deux par jour), quand (à jeun, au cours du repas, en dehors des repas, matin, midi et soir, en cas de besoin) et pendant combien de temps. Une notice suit toujours le même plan : à quoi sert le médicament, ce qu’il faut savoir avant de le prendre, comment le prendre, les effets indésirables éventuels, la conservation. Tu vas à la rubrique qui répond à ta question. Dans cette leçon, le seul médicament nommé est fictif. EN: Dosage answers three questions; a leaflet always has the same five sections.'),
    table('sheet-posologie-table', 'Les formules et leurs calques', ['Formule juste', 'Sens', 'Calque à éviter'], [
      ['deux fois par jour', 'la fréquence', 'deux fois un jour'],
      ['à jeun', 'l’estomac vide', 'sur un estomac vide'],
      ['au cours du repas', 'en mangeant', 'avec la nourriture'],
      ['en cas de besoin', 'seulement si nécessaire', 'comme nécessaire'],
      ['en vente libre', 'sans ordonnance', 'sur le comptoir'],
      ['ça fait somnoler', 'ça donne sommeil', 'ça rend endormi'],
      ['un effet indésirable', 'le mot de la notice', '(à l’oral : un effet secondaire)'],
      ['contre-indiqué pendant la grossesse', 'à ne pas prendre', 'contre-indiqué avec'],
      ['éventuel', 'possible', 'eventual (final)'],
      ['sans conservateur', 'sans produit qui conserve', 'sans préservatif'],
    ]),
  ]),
  sheet('sheet-parcours', 'Le parcours de soins, pays par pays', ['la consultation', 'les examens', 'France, Québec, Belgique, Suisse'], [
    teach('sheet-parcours-teach', 'Les mots changent, les questions restent',
      'En France, tu déclares un médecin traitant, tu présentes ta carte Vitale, et ta mutuelle complète le remboursement de l’Assurance maladie ; en urgence, le 15 (SAMU) ou le 112. Au Québec, la RAMQ délivre la carte d’assurance maladie, qu’on présente à chaque visite ; on cherche un médecin de famille, on consulte en clinique sans rendez-vous, on appelle le 811 pour parler à une infirmière et le 911 en urgence ; on dit souvent aller à l’urgence. En Belgique, on s’affilie à une mutualité (ou à la CAAMI, la caisse publique) ; le 112 en urgence. En Suisse, l’assurance de base est obligatoire ; le 144 pour une ambulance. EN: Four systems, the same questions.'),
    table('sheet-parcours-table', 'La consultation et les examens', ['Mot', 'Sens', 'Exemple'], [
      ['écarter une hypothèse', 'vérifier que ce n’est pas ça', 'Je veux écarter une fracture de fatigue.'],
      ['passer une radio', 'une radiographie, pour les os', 'Je vous prescris une radio du genou.'],
      ['une échographie', 'une image par ultrasons', 'pas à jeun pour le genou'],
      ['un bilan sanguin', 'plusieurs analyses sur une prise de sang', 'On va faire un bilan sanguin.'],
      ['un arrêt de travail', 'le document pour l’employeur', 'Je vous fais un arrêt de trois jours.'],
      ['orienter vers', 'envoyer vers un spécialiste', 'Je vous oriente vers un spécialiste.'],
      ['un rendez-vous de contrôle', 'vérifier que tout va bien', 'dans un mois'],
      ['le compte rendu d’hospitalisation', 'le résumé du séjour', 'adressé au médecin traitant'],
      ['des examens complémentaires', 'd’autres examens, pour préciser', 'une étape, pas une réponse'],
    ]),
  ]),
  sheet('sheet-registres', 'Le mot savant et les faux amis', ['le mot savant', 'le mot courant', 'les faux amis'], [
    teach('sheet-registres-teach', 'Le mot savant n’est pas plus juste',
      'Dans un compte rendu, le médecin écrit pour un autre médecin : céphalée, asthénie, dyspnée, tachycardie, prurit, bénin. Ces mots sont plus précis entre médecins, pas plus justes pour toi : tu as le droit de demander le mot de tous les jours. Méfie-toi aussi des faux amis : une drogue n’est pas un médicament, un physicien n’est pas un médecin, sensible veut dire sensitive, une blessure est une injury, un préservatif n’est pas un conservateur, un stage n’est pas un stade. EN: Technical words are for doctors; watch the false friends.'),
    table('sheet-registres-table', 'Savant, courant, faux ami', ['Mot', 'Mot courant ou sens', 'Remarque'], [
      ['une céphalée', 'un mal de tête', 'des céphalées : des maux de tête'],
      ['une asthénie', 'une grande fatigue', ''],
      ['une dyspnée', 'être essoufflé', ''],
      ['une tachycardie', 'le cœur qui s’emballe', 'le cœur bat trop vite'],
      ['un prurit', 'ça démange', ''],
      ['bénin, bénigne', 'sans gravité', 'une lésion bénigne'],
      ['l’hypertension', 'avoir de la tension', 'à l’écrit : hypertension'],
      ['une drogue', 'un stupéfiant', 'a drug you take : un médicament'],
      ['un physicien', 'un chercheur en physique', 'a physician : un médecin'],
      ['sensible', 'sensitive', 'sensible (anglais) : sensé'],
      ['une blessure', 'an injury', 'a blessing : une bénédiction'],
      ['un stade', 'une étape', 'un stage : une formation'],
    ]),
  ]),
  sheet('sheet-proche', 'Consentir, accompagner, écrire', ['les questions du consentement', 'parler pour un proche', 'les formules prudentes', 'la lettre'], [
    teach('sheet-proche-teach', 'Demander, accompagner, écrire',
      'Avant une intervention, demande ce qu’elle implique, les bénéfices et les risques, s’il existe une alternative, combien de temps dure la convalescence ; tu peux prendre le temps de réfléchir, demander un deuxième avis, et changer d’avis avant l’intervention. Pour un proche, dis qui tu es et qu’il t’a demandé d’être là, rapporte ses mots (il dit que…) et parle pour lui, pas à sa place. Écoute la prudence du médecin (à ce stade, il n’est pas exclu que, ce n’est pas alarmant) et demande ce que ça veut dire concrètement. EN: Ask before consenting; speak for, not instead of; hear the caution.'),
    table('sheet-proche-table', 'Les formules utiles', ['Moment', 'Formule', 'Remarque'], [
      ['comprendre', 'Qu’est-ce que ça implique, concrètement ?', 'la première question'],
      ['comparer', 'Est-ce qu’il y a une alternative ?', ''],
      ['attendre', 'Est-ce que je peux prendre le temps de réfléchir ?', 'un délai de réflexion'],
      ['vérifier', 'J’aimerais avoir un deuxième avis.', 'jamais « une seconde opinion »'],
      ['accompagner', 'Je l’accompagne : c’est mon beau-père.', 'avec son accord'],
      ['rapporter', 'Il dit qu’il se sent plus fatigué.', 'le discours rapporté'],
      ['entendre', 'Il n’est pas exclu que + subjonctif', 'possible, pas certain'],
      ['entendre', 'À ce stade, on ne peut rien affirmer.', 'pas encore de certitude'],
      ['soutenir', 'Ça doit être dur, et je suis là.', 'reconnaître, puis soutenir'],
      ['écrire', 'Je me permets de vous résumer sa situation.', 'ouvrir la lettre'],
      ['écrire', 'J’aimerais vous poser trois questions.', 'annoncer les questions'],
      ['écrire', 'Je vous prie d’agréer, Docteure, mes salutations respectueuses.', 'la formule finale'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-temps', title: 'Le début ou la durée', format: 'sort' as const, coach: 'Deux piles : le moment où ça a commencé, et ce qui dure encore. EN: the start, or the ongoing duration.', buckets: ['le début', 'la durée'], items: [E(1013), 'fr.a2.corps.024', E(1019), E(1023), E(1015), E(1000)], audio: AUDIO },
  { id: 'd-douleur', title: 'Le type de douleur', format: 'mcq' as const, coach: 'Un type, une note, un déclencheur. EN: type, score, trigger.', q: 'Une douleur qui revient comme un pouls :', opts: ['lancinante', 'sourde'], correct: 0, why: 'Lancinante : par élancements. EN: throbbing.', items: [E(1029), E(1030), E(1031), E(1035), E(1039), E(1044)], audio: AUDIO },
  { id: 'd-antecedents', title: 'Ton dossier, ligne par ligne', format: 'flashcard' as const, coach: 'Lis chaque ligne à voix haute, comme devant un nouveau médecin. EN: read each line aloud.', items: [E(1048), E(1049), E(1051), E(1053), E(1056), E(1061)], audio: AUDIO },
  { id: 'd-medecin', title: 'Hypothèse ou décision', format: 'mcq' as const, coach: 'Le conditionnel propose ; les examens décident. EN: the conditional suggests.', q: 'Écarter une hypothèse, c’est…', opts: ['vérifier que ce n’est pas ça', 'confirmer que c’est ça'], correct: 0, why: 'Écarter : mettre de côté après vérification. EN: to rule out.', items: [E(1063), E(1064), E(1065), E(1069), E(1079), E(1073)], audio: AUDIO },
  { id: 'd-posologie', title: 'Les mots de l’étiquette', format: 'mcq' as const, coach: 'Quand, combien, combien de temps. EN: when, how much, how long.', q: 'Pendant le repas, sur une ordonnance :', opts: ['au cours du repas', 'sur le repas'], correct: 0, why: 'Au cours du repas. EN: with food.', items: [E(1080), E(1081), E(1082), E(1083), E(1087), E(1096)], audio: AUDIO },
  { id: 'd-notice', title: 'Les phrases de la notice', format: 'flashcard' as const, coach: 'Lis chaque consigne et dis à quelle rubrique elle appartient. EN: say which section each belongs to.', items: [E(1105), E(1106), E(1107), E(1108), E(1109), E(1110)], audio: AUDIO },
  { id: 'd-parcours', title: 'France ou Québec', format: 'sort' as const, coach: 'Deux piles : les mots de la France, les mots du Québec. EN: France, or Québec.', buckets: ['en France', 'au Québec'], items: [E(1115), E(1117), E(1128), E(1116), E(1118), E(1123)], audio: AUDIO },
  { id: 'd-consentement', title: 'Les questions avant le oui', format: 'flashcard' as const, coach: 'Dis chaque question comme si tu étais devant le chirurgien. EN: say each question aloud.', items: [E(1131), E(1133), E(1135), E(1137), E(1140), E(1146)], audio: AUDIO },
  { id: 'd-registres', title: 'Savant ou courant', format: 'mcq' as const, coach: 'Le mot savant, puis le mot de tous les jours. EN: technical, then everyday.', q: 'Une céphalée, c’est…', opts: ['un mal de tête', 'une fièvre'], correct: 0, why: 'Céphalée : la tête. EN: a headache.', items: [E(1148), E(1149), E(1150), E(1151), E(1152), E(1153)], audio: AUDIO },
  { id: 'd-proche', title: 'Parler pour lui, entendre le médecin', format: 'sort' as const, coach: 'Deux piles : ce que dit le proche, et ce que dit la médecin. EN: the relative, or the doctor.', buckets: ['le proche', 'la médecin'], items: [E(1164), E(1165), E(1170), E(1171), E(1172), E(1175)], audio: AUDIO },
  { id: 'd-examen', title: 'La lettre, phrase par phrase', format: 'flashcard' as const, coach: 'Dis chaque phrase comme dans ta lettre : ouvrir, dater, demander, joindre, remercier. EN: say each line of the letter.', items: [E(1184), E(1185), E(1187), E(1188), E(1189), E(1190)], audio: AUDIO },
  { id: 'd-rappel', title: 'Les modes sous la prudence', format: 'mcq' as const, coach: 'Il n’est pas exclu que, il se peut que : le subjonctif. EN: subjunctive after cautious formulas.', q: 'Il n’est pas exclu qu’on … adapter son traitement.', opts: ['doive', 'doit'], correct: 0, why: 'Subjonctif. EN: doive.', items: [E(1173), E(1179), 'fr.b1.opinions-et-avis.1280', 'fr.b2.emotions.1249', E(1168), E(1184)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'duree-floue', description: 'Dates a symptom with English shapes (pour trois semaines, commencé depuis, vient et va, dans le matin) or confuses the start with the duration.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a12-mission'], drill: 'd-temps', retest: 'd-temps' },
  { id: 'douleur-vague', description: 'Describes a pain without type, score or trigger, or with calques (une peine, une douleur pointue, mon genou me blesse, c’est un six).', detectOn: ['a3-trier', 'a3-erreurs', 'a3-check', 'a12-mission'], drill: 'd-douleur', retest: 'd-douleur' },
  { id: 'antecedents-oublies', description: 'Leaves out history, allergies or non-prescription treatments, or uses the wrong forms (allergique de, la médecine, à date).', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a12-mission'], drill: 'd-antecedents', retest: 'd-antecedents' },
  { id: 'medecin-incompris', description: 'Hears a doctor’s hypothesis as a diagnosis, does not ask what a word means, or reports the visit with calques (un test de sang, vouloir dire avec).', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a12-mission'], drill: 'd-medecin', retest: 'd-medecin' },
  { id: 'posologie-calquee', description: 'Reads or says a dosage through English label phrases (deux fois un jour, sur un estomac vide, comme nécessaire, sur le comptoir).', detectOn: ['a6-construire', 'a6-piege', 'a6-check'], drill: 'd-posologie', retest: 'd-posologie' },
  { id: 'notice-mal-lue', description: 'Reads a leaflet line by line instead of by section, or misreads its false friends (éventuel, préservatif, contre-indiqué avec).', detectOn: ['a7-trier', 'a7-erreurs', 'a7-check'], drill: 'd-notice', retest: 'd-notice' },
  { id: 'systeme-confondu', description: 'Mixes up the health-system words of France and Québec (carte Vitale, médecin traitant, 811, mutuelle, mutualité) or misreads a hospital letter.', detectOn: ['a8-trier', 'a8-atoi', 'a8-check', 'a12-mission'], drill: 'd-parcours', retest: 'd-parcours' },
  { id: 'consentement-passif', description: 'Agrees to a procedure without asking what it involves, the risks or the alternatives, or asks with calques (penser à propos, une décision éduquée).', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check'], drill: 'd-consentement', retest: 'd-consentement' },
  { id: 'mot-savant-faux-ami', description: 'Does not ask for the everyday word behind a technical one, or falls into a care false friend (drogue, physicien, sensitive, stage).', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-registres', retest: 'd-registres' },
  { id: 'nouvelle-mal-entendue', description: 'Turns a doctor’s cautious answer into a certainty, speaks instead of a relative rather than for them, or reassures by denying the feeling.', detectOn: ['a11-atoi', 'a11-erreurs', 'a11-check'], drill: 'd-proche', retest: 'd-proche' },
  { id: 'consigne-examen', description: 'Misses what the B2 exam tasks ask: reads the document for detail instead of the question, or writes a letter without history, dates or precise questions.', detectOn: ['a12-lecture', 'a12-plan', 'a12-mission'], drill: 'd-examen', retest: 'd-examen' },
  { id: 'rappel-structures', description: 'Misforms the earlier structures the lesson leans on (subjunctive after il n’est pas exclu que, reported speech, subjonctif passé, afin de).', detectOn: ['a11-exemples', 'a11-atoi', 'a12-mission'], drill: 'd-rappel', retest: 'd-rappel' },
];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** THE ANSWER-SLOT RULE (playbook 6.11, b1-answer-slots.test.ts): missions
 *  render the authored order, so answers are spread BY ROTATING each item's
 *  options WITH its correct index. No text changes; no `why` names a slot. */
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
spreadMissions(SECTIONS, DRILL_LIST);

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-28-[a-z0-9-]+/g) ?? [])];

const PIEGE_BRIEF = 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.';

const REC_DESC: Record<string, string> = {
  'rec-b2-28-clinique': 'The clinic’s information sheet (act 1), ONE VOICE, one take, a Montréal receptionist in her forties: warm, clear, unhurried. Québec French. The questions in the second paragraph are read as real questions.',
  'rec-b2-28-triage-ecoute': 'REQUIRED FOR THE EAR MISSION (act 2): eleven lines, ONE TAKE, in authored order, a night call to the Québec health line. TWO VOICES: the nurse (Québec French, calm, a headset feel) speaks lines 1, 6 and 8; the patient (Québec French, tired, it is 3 a.m.) speaks the others. Natural speed.',
  'rec-b2-28-piege-temps': PIEGE_BRIEF,
  'rec-b2-28-urgence': 'The triage story (act 3), THREE VOICES: a narrator; Karine the triage nurse (Québec French, brisk and kind); the patient (Québec French). « Sur une échelle de zéro à dix, je dirais six » is said with a small hesitation before « six ».',
  'rec-b2-28-texte-a3': 'The triage note (act 3), ONE VOICE, one take, read as a nurse reads her own notes aloud: headings (Motif, Début, Localisation) clearly separated, a short breath after each.',
  'rec-b2-28-antecedents': 'The magazine page (act 4), ONE VOICE, one take, a France or Québec radio-health voice: friendly, precise, a little faster than dictation pace.',
  'rec-b2-28-piege-antecedents': PIEGE_BRIEF,
  'rec-b2-28-texte-a4': 'The history sheet (act 4), ONE VOICE, one take, the patient reading their own sheet before the visit: headings clear, lists at an even pace.',
  'rec-b2-28-consultation-ecoute': 'REQUIRED FOR THE EAR MISSION (act 5), THE LESSON’S NATURAL-SPEED LISTENING: eleven lines, ONE TAKE, in authored order, a consultation. TWO VOICES: Dr Gagnon (Québec French, a woman in her forties, quick and precise) speaks lines 1 to 3, 5 to 7, 9 and 10; the patient (Québec French) speaks lines 4, 8 and 11. REAL SPEED, no slowing for learners, small overlaps allowed. « Ça pourrait être » is clearly conditional.',
  'rec-b2-28-texte-a5': 'The consultation transcript (act 5), TWO VOICES, one take: Dr Gagnon and the patient, read as a scene at a natural pace. The name labels are NOT read.',
  'rec-b2-28-pharmacie': 'The pharmacy story (act 6), THREE VOICES: a narrator; Marc-André the pharmacist (Québec French, a man in his thirties, reassuring); the patient. The medicine name « Tendalgine » is invented: stress it tahⁿ-dal-ZHEEN.',
  'rec-b2-28-piege-pharmacie': PIEGE_BRIEF,
  'rec-b2-28-texte-a6': 'The pharmacy label and note (act 6), ONE VOICE, one take, read neutrally, like a label: short phrases, a breath at each full stop. The parenthesis « médicament fictif, doses inventées » is read too.',
  'rec-b2-28-notice': 'The leaflet (act 7), ONE VOICE, one take, a neutral reading voice (France French), even pace: each numbered heading announced with its number, a clear pause before it. The note that the medicine is fictional is read.',
  'rec-b2-28-texte-a7': 'The leaflet extract (act 7), ONE VOICE, one take, same voice and pace as the leaflet itself.',
  'rec-b2-28-lettre': 'The hospital letter (act 8), ONE VOICE, one take, a Lyon cardiologist (France French, a woman in her fifties) dictating her letter: formal, precise, the medical words said naturally. « Cher confrère » is not stressed.',
  'rec-b2-28-texte-a8': 'The email to the Lyon GP (act 8), ONE VOICE, one take, the learner (Québec French) reading their email before sending it: polite, clear.',
  'rec-b2-28-consentement-ecoute': 'REQUIRED FOR THE EAR MISSION (act 9): eleven lines, ONE TAKE, in authored order, a specialist consultation. TWO VOICES: Dr Benali (Québec French, a man in his fifties, calm and unhurried) speaks lines 1, 3, 5, 7, 9 and 11; the patient speaks lines 2, 4, 6, 8 and 10. Natural speed.',
  'rec-b2-28-texte-a9': 'The consent form extract (act 9), ONE VOICE, one take, read slowly and formally, as a patient reads a form before signing.',
  'rec-b2-28-cuisine': 'The kitchen story (act 10), THREE VOICES: a narrator; Gérard (Lyon French, a man of seventy-four, amused and a little tired); the learner (Québec French). The technical words (céphalées, asthénie, tachycardie) are said slowly, as words being discovered.',
  'rec-b2-28-piege-fauxamis': PIEGE_BRIEF,
  'rec-b2-28-texte-a10': 'The report extract (act 10), ONE VOICE, one take, the same cardiologist as the Lyon letter: technical, even pace.',
  'rec-b2-28-proche-ecoute': 'REQUIRED FOR THE EAR MISSION (act 11): twelve lines, ONE TAKE, in authored order, at the Montréal emergency room. TWO VOICES: the relative (Québec French) speaks lines 1 to 5, 11 and 12; Dr Morin (Québec French, a woman in her forties, gentle and careful) speaks lines 6 to 10. The cautious lines are said slowly, never dramatically.',
  'rec-b2-28-texte-a11': 'The message to Émilie (act 11), ONE VOICE, one take, the relative (Québec French) recording a voice message: warm, steady, reassuring first.',
  'rec-b2-28-modele': 'The model letter (act 12), ONE VOICE, one take, Samir (France or Québec French, a man in his forties) reading his letter aloud before sending it: formal, calm. The subject line is read as a heading.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 28',
  intro: 'At A2 you learned to say where it hurts. At B2 you speak as a precise patient, a carer or a relative, never as a clinician. You date a symptom (il y a, depuis, ça fait… que), give its rhythm and place, its type (lancinante, aiguë, ça me lance) and its score on a zero-to-ten scale, and what makes it worse. You give a medical history, follow a consultation at natural speed, understand a pharmacist, a leaflet and a hospital letter, and ask the questions informed consent needs. You ask for the everyday word behind the technical one, avoid the care false friends, find your way in the health systems of France, Québec, Belgium and Switzerland, speak for a relative and hear a doctor’s cautious answer. The task: a 200 to 250 word account of a relative’s health for a new doctor, in DELF B2 format. No medical advice anywhere: the only medicine named is fictional.',
  skill: 'PE',
  grammarAssumed: [MEDECIN_UNIT, DEPUIS_UNIT, DECL_UNIT, DISCOURS_UNIT, TUVOUS_UNIT, EMOTIONS_UNIT, IMPERS_UNIT],
  grammarIntroduced: [
    'Dating a symptom: il y a (the start) against depuis and ça fait… que (the ongoing duration), apparaître with être, par moments, de plus en plus, ça va et ça vient, and precise location words',
    'Qualifying and grading a pain: lancinante, aiguë, en coup de poignard, ça me lance, ça tire, une gêne; the zero-to-ten scale with je dirais; à l’effort, au repos; what eases and what worsens it',
    'Giving a medical history: antécédents personnels et familiaux, être opéré de, être suivi pour, allergique à, allergy against intolerance, current treatments including non-prescription ones',
    'Understanding a consultation: a hypothesis in the conditional, écarter une hypothèse, passer une radio, une échographie, un bilan sanguin, un arrêt de travail, orienter vers un spécialiste, qu’est-ce que vous entendez par',
    'Dosage language: au cours du repas, à jeun, en dehors des repas, matin, midi et soir, en cas de besoin, en vente libre, faire somnoler, and the English label calques',
    'Reading a medicine leaflet by section: contre-indiqué, un effet indésirable, les précautions d’emploi, en cas d’oubli, ne pas dépasser la dose prescrite; faux amis éventuel, préservatif',
    'The care pathway and its words in France (médecin traitant, carte Vitale, mutuelle, 15), Québec (carte d’assurance maladie, médecin de famille, 811, l’urgence), Belgium (mutualité) and Switzerland (assurance de base, 144); reading a hospital discharge letter',
    'The informed-consent questions: qu’est-ce que ça implique, les risques, une alternative, un délai de réflexion, un deuxième avis, donner son consentement éclairé, changer d’avis',
    'Technical against everyday words (céphalée, asthénie, dyspnée, tachycardie, prurit, bénin) and the care faux amis (drogue, physicien, sensible, blessure, stage)',
    'Speaking for a relative (je l’accompagne, il dit que, parler pour lui, la personne de confiance) and hearing cautious news (à ce stade, il n’est pas exclu que, ce n’est pas alarmant)',
    'A 200 to 250 word written account of a relative’s health for a new doctor, in DELF B2 PE format',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'En A2, tu disais où tu avais mal. Ici, tu parles en patient précis, en aidant ou en proche, jamais en médecin : tu dates un symptôme, tu dis son rythme, sa place, son type et sa note sur dix, tu présentes tes antécédents, tu comprends une consultation, un pharmacien, une notice et une lettre d’hôpital, tu poses les questions d’un consentement éclairé, tu demandes le mot courant et tu parles pour un proche. À la fin, tu écris au nouveau médecin d’un proche, au format du DELF B2.',
    minutes: 160,
    difficulty: 4,
    glyph: 'soin',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: FRANCAIS_SOINS_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, dicteeFor };

// Unused citation constants are kept exported through the corpus; these
// references keep the neighbours' reframes and labels in one place.
void [STYLE_REF, REUNIONS_REF, MODES_REF, MEDECIN_REF_EN, EMOTIONS_REF_EN, B206_REFRAME, B206_REFRAME_EN, B222_REFRAME, B222_REFRAME_EN, TEXTE_A3];
