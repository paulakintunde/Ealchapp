// b2.07.l1 « Le futur antérieur »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.01 plus-que-parfait),
// under the B2 rules of B2-BUILD-LOG.md (form, meaning, choice, text).
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema now, so the lesson validates with it in place (as b2.01 does).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act (B2): meet (scene, story, reading or listening), name
//   (cardDeck, tapTable, examples), build (groupDrill, gated), choose (a
//   drill where the MEANING picks the tense), trap (trapDrill stepped or
//   commonErrors), then from act 3 on the form INSIDE A TEXT of 60 to 120
//   words (complete, rewrite or correct), then the gated act check.
//
//    1  Vendredi, ce sera fait       6   the jalon: a later moment, and what
//                                         will already be done by it
//    2  La forme                     8   avoir / être at the futur simple
//                                         (aur-, ser-, lesson 6 in B1) + the
//                                         participle; the auxiliary as in the
//                                         passé composé; the mirror of lesson
//                                         1 in B2
//    3  Les accords                  7   être with the subject, avoir with an
//                                         object placed before, pronominals
//    4  Deux futurs, une ligne       8   futur simple (at the jalon, or under
//                                         way) against futur antérieur (done
//                                         before it)
//    5  Quand, dès que, une fois que 8   prior completion after the charnières
//                                         (after lesson 7 in B1), après que +
//                                         indicatif, tant que... ne... pas
//    6  Le piège de l'anglais        7   when you've finished = quand tu auras
//                                         fini; quand j'ai fini for habits
//    7  D'ici vendredi               7   deadlines: d'ici, avant, au plus
//                                         tard, dans, à + heure
//    8  Il aura oublié               7   the likely explanation of a past
//                                         fact, beside il a dû, sans doute
//    9  En dix ans, j'aurai vu       7   bilans: a period seen from its end
//   10  Aurai ou aurais              8   the s pair with lesson 2 in B2, never
//                                         a future after si, the false leads
//   11  Ton plan, tes jalons         11  model, plan, role play, TASK, quiz
//
//   TOTAL 84 missions, 11 acts. Corpus: 167 authored rows (.1800-.1988) in
//   eleven blocks plus 18 reused seed rows, released act by act through
//   `deckTranche`. Quiz: 12 rounds of 8 (one per act 1 to 10, a recycling
//   round citing lessons 5, 6, 7 and 18 in B1 and 1 and 2 in B2, an
//   exam-format round). Chapter artwork: `futur-anterieur-image-prompts.md`,
//   eleven prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (a later lesson may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le futur antérieur se place plus tard et regarde en arrière. »
//   EN: The futur antérieur stands at a later moment and looks back.
//
//   ONE METAPHOR, LE JALON: a marker further down the road (vendredi à neuf
//   heures, ton arrivée, la fin du mois, dans dix ans, the day you will find
//   out). The futur antérieur stands on it and looks back; the futur simple
//   says what happens on it. The mirror of lesson 1 in B2's repère (act 2
//   quotes its reframe). Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    building the futur antérieur (both auxiliaries, agreement,
//           pronominals), its use round a future jalon against the futur
//           simple, after the charnières (incl. après que + indicatif),
//           against the English present perfect, for deadlines, for the
//           likely explanation of a past fact and for bilans, the aurai /
//           aurais spelling, and the false leads (aurai + nom, sera signé,
//           serai installé).
//   QUOTES  the reframes of lessons 5, 6 and 7 in B1 and lessons 1 and 2 in
//           B2, re-exported from their corpus files; rows of lessons 4, 5,
//           6, 7 and 18 in B1 and lesson 25 in B2 reused BY ID.
//   LEAVES  the conditionnel passé to lesson 2 in B2 (only contrasted here,
//           in act 10); the passé simple to lesson 8 in B2, named in the
//           roundup; « avant que » + subjonctif is named once as the contrast
//           to après que and never practised.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English still authored on every
//   learner string (an `en` field or a final `EN: `), never on an answer.
//   tu in every instruction; characters use what the situation needs.
//   Every `say` is French. No spaced « ? » or « ! » in any scene or story
//   bubble. The scenario uses ’ only and embeds no corpus row. Other lessons
//   cited by trail position in words, never by raw id. Mission answer slots
//   are spread by `spreadMissions()`, the quiz by `spreadSlots()` (no text
//   changes, no `why` names a position), as b2.01 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. TWELVE quiz rounds (96 questions): ten act rounds, one recycling round
//      and one exam-format round, as lesson 1 in B2. Fold the recycling round
//      into round 10 to get to eleven?
//   2. SPOKEN « quand t'as fini ». Act 6 says the futur antérieur is what
//      careful French writes, and that relaxed speech often says « appelle-
//      moi quand t'as fini ». The task grader scores only the written form.
//      Keep that register note, or teach the futur antérieur as the only form?
//   3. « Après qu'il soit » is taught as the common error (act 5), and après
//      que + indicatif as the written norm. Lesson 18 in B2 (not yet built)
//      is not cited, because the trail position is unoccupied in this publish.
//   4. THE TASK offers two formats (a project plan or a letter to one's
//      future self), 180 to 250 words, FIVE criteria (tâche 3, cohérence 3,
//      étendue 2, correction 2, registre 2 = 12) as lesson 1 in B2. The
//      reading is a letter and the model answer a project plan, so both are
//      shown. Annotation block inside `modelAnswer`, as in lesson 1 in B2.
//   5. NO verbCheck on the ten conjugation cards (corpus §A.7).
//   6. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' is inert; kept.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  LECTURE_CALENDRIER, LECTURE_RDV, LECTURE_MODELE,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A10_REPONSES,
  B105_REFRAME, B105_REFRAME_EN, B106_REFRAME, B106_REFRAME_EN, B107_REFRAME, B107_REFRAME_EN,
  B201_REFRAME, B201_REFRAME_EN, B202_REFRAME, B202_REFRAME_EN,
  FUT_FORM_UNIT, FUT_IRREG_UNIT, FUT_USAGE_UNIT, PQP_UNIT, COND_PASSE_UNIT,
  FUT_FORM_REF, FUT_IRREG_REF, FUT_USAGE_REF, PAIRES_REF, PASSIF_REF, PQP_REF, COND_PASSE_REF, ECOUTE_REF,
  PASSE_SIMPLE_REF, FUTUR_B1_RANGE_REF,
} from './futur-anterieur-corpus.ts';
import { FUTUR_ANTERIEUR_TERMS } from './futur-anterieur-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };
type TrapCard = NonNullable<Sec<'trapDrill'>['cards']>[number];
type TrapStep = NonNullable<Sec<'trapDrill'>['steps']>[number];

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string; drills?: string[] };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));
const OWN = new Set(ALL_ROWS.map((r) => r.id));
const PF = (n: number) => `fr.b1.projets-et-futur.${n}`;

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.07: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.07: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.07: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

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

/** THE « IN A TEXT » BEAT that closes acts 3 to 10: one paragraph of 60 to
 *  120 words, with the answers behind the modal. Always the same title, so a
 *  learner and a reviewer see the loop. */
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
 *  ACT 1: VENDREDI, CE SERA FAIT
 *
 *  Meet the jalon. One tense changes the hour at which the work is done, and
 *  the client hears a different promise. NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le client de vendredi',
  frSub: 'Un seul temps change l’heure',
  setting: { place: 'Une agence de design, boulevard Saint-Laurent', city: 'Montréal', time: 'mardi, 17 h 45', ambience: 'des écrans allumés, des maquettes au mur, la neige dehors' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, un mardi de novembre. Tu travailles dans une petite agence de design. Nathalie, ta cheffe, prépare la visite d'un client important.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nathalie',
      fr: 'Le client arrive vendredi à neuf heures. Il veut voir la présentation finie en entrant.',
      en: 'The client arrives on Friday at nine. He wants to see the finished presentation as he walks in.',
      respell: '[luh klee-YAHⁿ a-REEV | vahⁿ-druh-DEE a nuh-VUHR | eel veu VWAR | la pray-zahⁿ-ta-syohⁿ fee-NEE | ahⁿ-nahⁿ-TRAHⁿ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Pas de souci, je m'en occupe cette semaine.",
      en: 'No problem, I will deal with it this week.',
      respell: '[pa duh soo-SEE | zhuh mahⁿ-no-KÜP | set suh-MENN]',
      stage: 'Tu promets, mais Nathalie veut une heure précise pour son courriel.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: 'Nathalie écrit au client. Elle te demande une phrase claire : où en sera la présentation vendredi à neuf heures.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Quelle phrase dit au client que tout sera prêt à son arrivée.',
      size: 'lg',
      options: [
        { fr: fr(E(1801)), respell: rsOf(E(1801)), en: en(E(1801)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1800)), respell: rsOf(E(1800)), en: en(E(1800)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Nathalie copie ta phrase. À neuf heures, la présentation sera déjà prête : le client peut arriver tranquille.',
        breaks: 'Nathalie fronce les sourcils. Avec je terminerai, tu finis à neuf heures pile, pendant que le client attend dans l’entrée.',
      },
    },
    {
      kind: 'break',
      heading: 'Un seul temps a changé l’heure',
      body: "Avec je terminerai, le travail se fait à neuf heures, au moment même du rendez-vous. Avec j'aurai terminé, tu te places à neuf heures et tu regardes en arrière : c'est déjà fait. EN: je terminerai happens at nine; j'aurai terminé is already done by nine.",
      wrong: { fr: fr(E(1801)), ipa: ipaOf(E(1801)), respell: rsOf(E(1801)), en: en(E(1801)) },
      right: { fr: fr(E(1800)), ipa: ipaOf(E(1800)), respell: rsOf(E(1800)), en: en(E(1800)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Au B1, tu as appris le futur des deux côtés de quand. Ici, tu apprends son double : le futur qui regarde en arrière, pour promettre, planifier, supposer et faire un bilan.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['jalon', 'ligne'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Construire le futur antérieur sans hésiter', s: 'Actes 2 et 3 : l’auxiliaire, les accords, les pronominaux' },
    { t: 'Placer deux futurs sur une même ligne', s: 'Actes 4 à 6 : le jalon, les charnières, le piège de l’anglais' },
    { t: 'Promettre, supposer, faire un bilan', s: 'Actes 7 à 9 : d’ici vendredi, il aura oublié, en dix ans' },
    { t: 'Écrire un plan de 200 mots', s: 'Actes 10 et 11 : aurai ou aurais, puis ta mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le calendrier de Sophie',
  frSub: 'Lis, et cherche ce qui sera déjà fait',
  text: LECTURE_CALENDRIER,
  glossary: [
    { word: 'les maquettes', en: 'the mock-ups', note: 'Les premiers dessins des pages du site, avant le vrai site.' },
    { word: 'le bon de livraison', en: 'the delivery note', note: 'Le document que le client signe pour dire qu’il a bien reçu le travail.' },
    { word: 'recueilli', en: 'gathered', note: 'Recueillir des données : les rassembler peu à peu.' },
  ],
  questions: [
    { q: 'Global : à quoi sert ce courriel ?', a: "À dire au client où en sera le projet à chaque étape de la semaine, jusqu'à la mise en ligne." },
    { q: 'Détail : vendredi à neuf heures, qu’est-ce qui sera déjà fait ?', a: "« Nous aurons tout installé sur notre serveur de démonstration » : l'installation sera finie avant l'arrivée du client." },
    { q: 'Pourquoi « je ne serai pas encore rentrée » et non « je ne rentrerai pas » ?', a: "Sophie se place à la fin des essais et regarde en arrière : à ce moment-là, son retour n'aura pas encore eu lieu. Elle rentrera plus tard." },
    { q: 'Inférence : pourquoi Sophie précise-t-elle que le graphiste sera parti ?', a: "Pour que le client demande les changements de logo avant jeudi midi : la semaine suivante, personne ne pourra les faire." },
    { q: 'Dans « une fois que le site sera en ligne », le verbe est-il un futur antérieur ?', a: "Non. Sera en ligne est le futur simple d'être avec un état. Le futur antérieur aurait un participe : une fois que nous aurons mis le site en ligne." },
  ],
  audio: REC('rec-b2-07-calendrier'),
  say: REFRAME,
  terms: ['jalon', 'echeance'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère ce qui sera déjà fait',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Déjà fait au jalon', [
      it(E(1802), 'avant lundi soir'),
      it(E(1804), 'avant l’arrivée du client'),
      it(E(1805), 'avant la semaine suivante'),
      it(E(1800), 'avant neuf heures'),
    ], chk('Dans ces quatre phrases, quelle forme porte le regard en arrière ?',
      ['l’auxiliaire au futur, puis le participe', 'un adverbe de temps', 'le verbe au futur simple'], 0,
      'Aurons, aura, sera, aurai, puis un participe : c’est la marque du futur antérieur. EN: a future auxiliary plus a participle.')),
    grp('La même phrase, deux soirées', [
      it(E(1810), 'le dîner est prêt à ton retour'),
      it(E(1809), 'on cuisine à ton retour'),
      it(E(1811), 'vous raterez le début'),
      it(E(1812), 'le film démarre à votre arrivée'),
    ], chk('« Quand tu rentreras, je préparerai le dîner. » Le dîner sera-t-il prêt à ton retour ?',
      ['non, on le prépare à ce moment-là', 'oui, il sera déjà prêt'], 0,
      'Deux futurs simples vont ensemble : le dîner commence à ton retour. EN: two futurs simples happen together.')),
    ctl('Le test', 'Pour choisir le futur antérieur, que cherches-tu d’abord ?',
      ['un moment à venir, posé dans la phrase', 'les mots will have en anglais', 'un verbe très long'], 0,
      'Le jalon d’abord ; le temps se mesure à partir de lui. EN: find the later moment first.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jalon', 'ligne'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où le mauvais temps coûte cher',
  cases: [
    { situation: 'Tu promets une date à un client', fr: "D'ici jeudi, nous aurons corrigé toutes les pages.", en: 'By Thursday, we will have corrected every page.' },
    { situation: 'Tu rassures un ami qui arrive', fr: "Quand tu arriveras, j'aurai tout préparé.", en: 'When you arrive, I will have got everything ready.' },
    { situation: 'Tu expliques un silence', fr: "Il n'a pas répondu : il aura éteint son téléphone.", en: 'He did not answer: he must have switched his phone off.' },
    { situation: 'Tu fais le bilan d’une année', fr: 'Cette année, nous aurons ouvert deux nouvelles agences.', en: 'This year, we will have opened two new offices.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jalon', 'echeance'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le sens', '« Vendredi à neuf heures, j’aurai terminé la présentation. » À neuf heures, la présentation est…',
    ['déjà finie', 'en train d’être finie', 'pas commencée'], 0,
    'Tu te places à neuf heures et tu regardes en arrière : c’est fait. EN: it is already done at nine.'),
  ctl('Le jalon', 'Le futur antérieur se mesure à partir de…',
    ['un moment plus tard', 'maintenant'], 0,
    'Toujours un moment à venir : vendredi, ton arrivée, dans dix ans. EN: always a later moment.'),
  ctl('La forme', 'Aura commencé, c’est…',
    ['le futur de avoir et un participe', 'le conditionnel de avoir et un participe'], 0,
    'Aura est le futur de avoir. EN: aura is the future of avoir.'),
], ['jalon']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Vendredi, ce sera fait',
    opener: {
      line: "Le client arrive à neuf heures, et ton travail doit être derrière toi : ici tu découvres le futur qui regarde en arrière. EN: The client arrives at nine and your work must be behind you: here you meet the future that looks back.",
      imageRef: 'lessons/futur-anterieur/act01.jpg',
    },
    sections: [],
    milestone: "Tu repères le moment à venir qui sert de jalon, et tu entends la différence entre je terminerai et j'aurai terminé. EN: You can find the later moment and hear the difference between je terminerai and j'aurai terminé.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: LA FORME
 *
 *  Form, briefly: the futur simple of avoir and être is lesson 6 in B1, the
 *  participle and the auxiliary choice are the passé composé's. The mirror
 *  of lesson 1 in B2 is quoted on the last card.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà',
  frSub: 'Deux mots, un seul qui change',
  hint: 'Quatre cartes. Tu connais déjà chaque pièce.',
  audio: REC('rec-b2-07-forme'),
  say: REFRAME,
  terms: ['auxiliaire'],
  cards: [
    {
      head: 'L’auxiliaire au futur', label: Cap(FUT_IRREG_REF),
      fr: 'aurai · auras · aura · aurons · aurez · auront',
      sub: '[oh-RAY] · [oh-RA] · [oh-RA] · [oh-ROHⁿ] · [oh-RAY] · [oh-ROHⁿ]',
      body: `« ${B106_REFRAME} » Avoir donne aur-, être donne ser- : je serai, nous serons. EN: ${B106_REFRAME_EN}`,
    },
    {
      head: 'Avoir ou être', label: 'comme au passé composé',
      fr: fr(E(1827)), sub: rsOf(E(1827)),
      body: "Aller, venir, partir, rester, naître et les verbes de mouvement gardent être, comme tous les pronominaux. Les autres prennent avoir. Rien de nouveau à choisir. EN: same auxiliary as the passé composé.",
    },
    {
      head: 'Le participe ne bouge pas', label: 'le deuxième mot',
      fr: "j'ai pris > j'aurai pris",
      sub: '[zhay PREE] · [zhoh-ray PREE]',
      body: "Seul l'auxiliaire change de temps. Le participe reste celui du passé composé : pris, fait, mis, reçu, été, eu. EN: only the auxiliary changes tense.",
    },
    {
      head: 'Le miroir de la leçon 1', label: Cap(PQP_REF),
      fr: "j'avais terminé · j'aurai terminé",
      sub: '[zha-veh tehr-mee-NAY] · [zhoh-ray tehr-mee-NAY]',
      body: `« ${B201_REFRAME} » Même recette, avec l'auxiliaire au futur. EN: ${B201_REFRAME_EN}`,
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-forme',
  title: 'Six personnes, deux auxiliaires',
  cols: ['Personne', 'avec avoir', 'avec être'],
  rows: [
    { cells: ['je', "j'aurai terminé", 'je serai parti(e)'], say: fr(E(1826)),
      detail: { title: 'je', body: "Devant aurai, je devient j' : j'aurai. Devant serai, rien ne change. EN: je elides before aurai only.", say: fr(E(1835)) } },
    { cells: ['tu', 'tu auras terminé', 'tu seras parti(e)'], say: fr(E(1830)),
      detail: { title: 'tu', body: "Auras et seras prennent un s, comme tous les tu du futur. EN: tu takes -as.", say: fr(E(1840)) } },
    { cells: ['il, elle, on', 'elle aura terminé', 'elle sera partie'], say: fr(E(1839)),
      detail: { title: 'il, elle, on', body: "Avec être, elle ajoute un e au participe. Avec on, l'accord suit le sens. EN: être agrees with elle.", say: fr(E(1833)) } },
    { cells: ['nous', 'nous aurons terminé', 'nous serons parti(e)s'], say: fr(E(1838)),
      detail: { title: 'nous', body: "La liaison est obligatoire : nous aurons, en un seul souffle. EN: the liaison is compulsory.", say: fr(E(1828)) } },
    { cells: ['vous', 'vous aurez terminé', 'vous serez parti(e)(s)'], say: fr(E(1831)),
      detail: { title: 'vous', body: "Vous de politesse, une seule personne : vous serez parti. Plusieurs : partis. EN: polite vous agrees with one person.", say: fr(E(1820)) } },
    { cells: ['ils, elles', 'ils auront terminé', 'elles seront parties'], say: fr(E(1829)),
      detail: { title: 'ils, elles', body: "Auront et aurons sonnent presque pareil ; le sujet tranche. EN: auront and aurons sound close.", say: fr(E(1841)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire', 'accord'],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte les deux mots',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Avec avoir', [
      it(E(1816), 'terminer : avoir'),
      it(E(1819), 'la liaison de nous'),
      it(E(1826), 'prendre, participe pris'),
      it(E(1835), 'envoyer : avoir'),
    ], chk('J’ai envoyé devient…',
      ['j’aurai envoyé', 'je serai envoyé', 'j’aurais envoyé'], 0,
      'Le même auxiliaire, au futur, sans s. EN: same auxiliary, in the future.')),
    grp('Avec être', [
      it(E(1822), 'partir garde être'),
      it(E(1824), 'nous, et le s de l’accord'),
      it(E(1827), 'aller garde être'),
      it(E(1834), 'descendre, sans complément'),
    ], chk('Je suis resté devient…',
      ['j’aurai resté', 'je serai resté'], 1,
      'Rester prend être au passé composé, donc aussi ici. EN: rester keeps être.')),
    ctl('Avoir et être eux-mêmes', 'J’ai été absente devient…',
      ['je serai été absente', 'j’aurai été absente'], 1,
      'Être se conjugue avec avoir : j’ai été, donc j’aurai été. EN: être itself takes avoir.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Avoir ou être, à l’oreille',
  frSub: 'Dix phrases, un seul temps',
  lines: [
    ln(E(1826)), ln(E(1827)), ln(E(1828)), ln(E(1829)), ln(E(1830)),
    ln(E(1831)), ln(E(1832)), ln(E(1833)), ln(E(1838)), ln(E(1840)),
  ],
  questions: [
    { q: 'Deuxième phrase : quel auxiliaire entends-tu ?', opts: ['être', 'avoir'], correct: 0, why: 'Aller garde être : elle sera allée. EN: aller keeps être.' },
    { q: 'Cinquième phrase : avant quand la réponse arrivera-t-elle ?', opts: ['avant midi', 'avant ce soir'], correct: 0, why: 'Avant midi. EN: before noon.' },
    { q: 'Septième phrase : combien de temps la personne aura-t-elle été absente ?', opts: ['trois semaines', 'trois jours', 'trois mois'], correct: 0, why: 'Trois semaines, et être prend avoir : j’aurai été. EN: three weeks.' },
    { q: 'Neuvième phrase : qu’aura-t-on mis en ordre ?', opts: ['les comptes', 'la maison'], correct: 0, why: 'Les comptes : mettre, participe mis. EN: the accounts.' },
    { q: 'Dernière phrase : de qui parle-t-on ?', opts: ['de toi', 'de lui'], correct: 0, why: 'Tu seras devenu : c’est toi. EN: you.' },
  ],
  audio: REC('rec-b2-07-forme-ecoute'),
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de forme',
  errors: [
    {
      wrong: "J'aurai allé à la banque avant midi.",
      right: 'Je serai allé à la banque avant midi.',
      why: "Normal : en anglais, will have sert pour tous les verbes, et avoir semble plus sûr. Aller garde être, comme au passé composé. EN: English uses will have everywhere; aller keeps être.",
    },
    {
      wrong: 'Elle sera terminé son rapport ce soir.',
      right: 'Elle aura terminé son rapport ce soir.',
      why: "Normal : elle sera fatiguée existe, alors sera semble aller partout. Terminer prend avoir. EN: terminer takes avoir, as in the passé composé.",
    },
    {
      wrong: "Demain à midi, j'aurais terminé.",
      right: "Demain à midi, j'aurai terminé.",
      why: "J'aurais terminé est un conditionnel passé, le temps de la leçon 2 du B2. Pour un moment réel à venir, aurai, sans s. EN: a real future moment takes aurai.",
    },
    {
      wrong: 'Je serai été absente trois semaines.',
      right: "J'aurai été absente trois semaines.",
      why: "Normal : être appelle être dans la tête. Mais être se conjugue avec avoir : j'ai été, donc j'aurai été. EN: être takes avoir.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire', 'lettre'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Aura ou auront, à toi de voir',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a2-flash',
  layer: 'core',
  title: 'Huit formes à avoir en bouche',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'I will have sent', back: "j'aurai envoyé", say: fr(E(1835)) },
    { front: 'she will have gone', back: 'elle sera allée', say: fr(E(1827)) },
    { front: 'they will have done', back: 'ils auront fait', say: fr(E(1829)) },
    { front: 'you will have received', back: 'tu auras reçu', say: fr(E(1830)) },
    { front: 'I will have been', back: "j'aurai été", say: fr(E(1832)) },
    { front: 'we will have had', back: 'on aura eu', say: fr(E(1833)) },
    { front: 'you will have stayed', back: 'vous serez restés', say: fr(E(1831)) },
    { front: 'you will have become', back: 'tu seras devenu', say: fr(E(1840)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La recette', 'Le futur antérieur, c’est…',
    ['avoir ou être au présent, puis le participe', 'avoir ou être au futur, puis le participe', 'avoir ou être au conditionnel, puis le participe'], 1,
    'Le futur de l’auxiliaire, puis le participe. EN: future auxiliary plus participle.'),
  ctl('Le choix', 'Pour choisir entre avoir et être, tu regardes…',
    ['le passé composé du même verbe', 'la longueur du verbe'], 0,
    'Le même auxiliaire qu’au passé composé. EN: the passé composé decides.'),
  ctl('Le piège', 'Laquelle est juste ?',
    ['j’aurai été', 'je serai été'], 0,
    'Être prend avoir. EN: être takes avoir.'),
], ['auxiliaire']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La forme',
    opener: {
      line: "Deux mots, et tu connais déjà les deux : ici tu montes le futur antérieur à toutes les personnes. EN: Two words, and you already know both: here you build the futur antérieur for every person.",
      imageRef: 'lessons/futur-anterieur/act02.jpg',
    },
    sections: [],
    milestone: "Tu construis le futur antérieur avec avoir ou avec être, à toutes les personnes, sans le confondre avec le conditionnel passé. EN: You can build the futur antérieur with either auxiliary, for every person.",
    estScreens: 38, restPoints: ['a2-table', 'a2-ecoute'],
  },
  sections: [A2_RAPPEL, A2_TABLE, A2_CONSTRUIRE, A2_ECOUTE, A2_ERREURS, A2_DICTEE, A2_FLASH, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: LES ACCORDS
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'La liste de Mariam',
  frSub: 'Ce qui sera prêt samedi',
  setting: 'Lyon. Mariam prépare la visite de ses cousines. Elle écrit sur un carnet tout ce qui sera prêt samedi ; son père relit par-dessus son épaule.',
  bubbles: [
    { from: 'narrator', fr: 'Mariam écrit vite, et son père corrige les fins de mots.', en: 'Mariam writes fast, and her father corrects the word endings.' },
    { from: 'user', fr: 'Samedi soir, les cousines seront arrivées.', en: 'By Saturday evening, the cousins will have arrived.' },
    { from: 'coach', fr: 'Arrivées, avec es : avec être, le sujet décide.', en: 'Arrivées, with es: with être, the subject decides.', warn: 'Être : accord avec le sujet' },
    { from: 'user', fr: "Les photos que j'aurai imprimées seront sur la table.", en: 'The photos I will have printed will be on the table.' },
    { from: 'coach', fr: 'Imprimées : que reprend les photos, et il est placé avant.', en: 'Imprimées: que stands for the photos, and it comes first.', warn: 'Avoir : accord avec que' },
    { from: 'user', fr: 'Et maman aura préparé les chambres.', en: 'And Mum will have got the rooms ready.' },
    { from: 'coach', fr: 'Préparé, sans rien : les chambres viennent après le verbe.', en: 'Préparé, no ending: the rooms come after the verb.', warn: 'Avoir, rien avant : pas d’accord' },
  ],
  closing: { fr: "Les accords ne changent pas : ce sont ceux du passé composé, avec l'auxiliaire au futur.", en: 'The agreements do not change: they are the passé composé ones, with the auxiliary in the future.' },
  audio: REC('rec-b2-07-liste'),
  say: REFRAME,
  terms: ['accord', 'auxiliaire'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-forme',
  title: 'Les accords, en quatre cartes',
  frSub: 'Les règles du passé composé, au futur',
  hint: 'Quatre cartes. L’oreille n’entend presque rien : c’est l’écrit qui compte.',
  audio: REC('rec-b2-07-accords'),
  say: REFRAME,
  terms: ['accord'],
  cards: [
    {
      head: 'Avec être', label: 'le sujet décide',
      fr: fr(E(1843)), sub: rsOf(E(1843)),
      body: "Le participe prend le genre et le nombre du sujet : cousins, donc repartis. EN: with être, the participle agrees with the subject.",
    },
    {
      head: 'Avec avoir, rien avant', label: 'pas d’accord',
      fr: fr(E(1847)), sub: rsOf(E(1847)),
      body: "Les places viennent après le verbe : réservé reste nu. Le sujet ne compte jamais avec avoir. EN: with avoir and nothing before, no agreement.",
    },
    {
      head: 'Avec avoir, un complément avant', label: 'que, le, la, les',
      fr: fr(E(1846)), sub: rsOf(E(1846)),
      body: "Les reprend ces dossiers et arrive avant aurai : relus. Même chose avec que : les photos que tu auras prises. EN: an object placed before makes the participle agree.",
    },
    {
      head: 'Les pronominaux', label: 'toujours être',
      fr: fr(E(1848)), sub: rsOf(E(1848)),
      body: "Le pronom, puis serai : elle se sera levée. L'accord suit le sujet, sauf quand se veut dire à l'autre ou quand le complément vient après. EN: always être; the two passé composé exceptions stay.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trouve ce qui commande l’accord',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Être : le sujet', [
      it(E(1842), 'elle, donc arrivée'),
      it(E(1843), 'mes cousins, donc repartis'),
      it(E(1856), 'les filles, donc rentrées'),
      it(E(1853), 'mes parents, donc couchés'),
    ], chk('« Les filles seront … pour le dîner. » Quelle forme ?',
      ['rentré', 'rentrées', 'rentrés'], 1,
      'Filles : féminin pluriel. EN: feminine plural subject.')),
    grp('Avoir : un complément avant', [
      it(E(1844), 'que = les photos'),
      it(E(1845), 'que = la maison'),
      it(E(1846), 'les = ces dossiers'),
      it(E(1852), 'que = les documents'),
    ], chk('Dans ces phrases, qui décide de l’accord ?',
      ['le sujet', 'le complément placé avant', 'le temps du verbe'], 1,
      'Que, les ou la, placés avant avoir. EN: the object placed before.')),
    grp('Les pronominaux', [
      it(E(1848), 'elle se lève elle-même : levée'),
      it(E(1849), 'nous : installés'),
      it(E(1850), 'téléphoner à l’autre'),
      it(E(1851), 'les mains viennent après'),
    ], chk('« Ils se seront téléphoné. » Pourquoi pas téléphonés ?',
      ['on téléphone à quelqu’un', 'téléphoner ne s’accorde jamais'], 0,
      'Se veut dire l’un à l’autre : pas de complément direct. EN: se means to each other.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'L’accord qu’on oublie, l’accord qu’on invente',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Être regarde le sujet, avoir regarde avant',
    body: "Avec être, le participe s'accorde avec le sujet. Avec avoir, il ne s'accorde qu'avec un complément direct placé avant lui. Un pronominal prend toujours être. EN: être agrees with the subject; avoir only with a direct object placed before.",
  },
  cards: [
    trap(E(1842), 'accord oublié', 'Elle sera arrivé avant nous.', 'Être : le e du sujet elle. EN: être agrees with elle.'),
    trap(E(1847), 'accord inventé', 'Elles auront réservées leurs places.', 'Avoir, rien avant : pas d’accord. EN: nothing before avoir.'),
    trap(E(1844), 'accord oublié', 'Montre-moi les photos que tu auras pris.', 'Que = les photos, placé avant. EN: que stands for les photos.'),
    trap(E(1848), 'mauvais auxiliaire', 'Elle s’aura levée à l’aube.', 'Un pronominal prend être : elle se sera levée. EN: pronominals take être.'),
    trap(E(1850), 'accord inventé', 'Ils se seront téléphonés entre-temps.', 'On téléphone à quelqu’un : pas d’accord. EN: se means to each other.'),
    trap(E(1856), 'accord oublié', 'Les filles seront rentré pour le dîner.', 'Filles : féminin pluriel. EN: feminine plural.'),
  ],
  drill: [
    { promptSay: 'Elle sera … avant nous.', opts: ['arrivé', 'arrivée'], correct: 1 },
    { promptSay: 'Elles auront … leurs places.', opts: ['réservé', 'réservées'], correct: 0 },
    { promptSay: 'Les photos que tu auras …', opts: ['prises', 'pris'], correct: 0 },
    { promptSay: 'Ces dossiers, je les aurai … avant jeudi.', opts: ['relu', 'relus'], correct: 1 },
    { promptSay: 'Elle … levée à l’aube.', opts: ['se sera', 's’aura'], correct: 0 },
    { promptSay: 'Ils se seront … entre-temps.', opts: ['téléphonés', 'téléphoné'], correct: 1 },
    { promptSay: 'Tu te seras … les mains.', opts: ['lavé', 'lavées'], correct: 0 },
    { promptSay: 'Mes parents se seront … tôt.', opts: ['couché', 'couchés'], correct: 1 },
  ],
  steps: STEPS('Être regarde le sujet, avoir regarde avant', 'Ce que la main écrit toute seule'),
  audio: REC('rec-b2-07-piege-accords'),
  say: REFRAME,
  terms: ['accord'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq accords au travail',
  frSub: 'Lis, puis dis ce qui commande',
  examples: [
    ex(E(1852), 'que = les documents, placé avant : envoyés'),
    ex(E(1845), 'que = la maison, féminin : achetée'),
    ex(E(1849), 'pronominal, avec nous : installés'),
    ex(E(1851), 'les mains viennent après : lavé'),
    ex(E(1857), 'vous, plusieurs personnes : reposés'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Compléter : la visite des cousines', TEXTE_A3, [
  { q: 'Complète le début : tes cousines (arriver) ; j’(préparer) ; les draps que j’(laver) (sécher).', a: "Tes cousines seront arrivées (être, féminin pluriel) ; j'aurai préparé la chambre ; les draps que j'aurai lavés (que = les draps, placé avant) auront séché." },
  { q: 'Complète : ton père (aller) chercher un matelas.', a: "Ton père sera allé chercher un matelas : aller garde être." },
  { q: 'Complète : les filles (se lever) ; quand elles (se reposer).', a: "Les filles se seront levées ; quand elles se seront reposées. Pronominal : être, et l'accord avec elles." },
  { q: 'Complète la fin : les lettres que ta grand-mère leur (écrire).', a: "Les lettres que ta grand-mère leur aura écrites : que = les lettres, placé avant avoir." },
], 'rec-b2-07-texte-a3', ['accord']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Être', 'Avec être, le participe s’accorde avec…',
    ['le sujet', 'le complément', 'rien'], 0,
    'Le sujet : elle sera arrivée. EN: the subject.'),
  ctl('Avoir', '« Les photos que tu auras … » : pris ou prises ?',
    ['pris', 'prises'], 1,
    'Que = les photos, placé avant. EN: que placed before.'),
  ctl('Le pronominal', 'Se lever, au futur antérieur, avec elle :',
    ['elle s’aura levée', 'elle se sera levée'], 1,
    'Toujours être : elle se sera levée. EN: always être.'),
], ['accord']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Les accords',
    opener: {
      line: "Des photos imprimées, des cousines arrivées : ici tu apprends quand le participe prend un e ou un s. EN: Photos printed, cousins arrived: here you learn when the participle takes an e or an s.",
      imageRef: 'lessons/futur-anterieur/act03.jpg',
    },
    sections: [],
    milestone: "Tu accordes le participe avec le sujet après être, avec le complément placé avant après avoir, et tu construis les pronominaux avec être. EN: You can make the participle agree and build pronominal verbs with être.",
    estScreens: 36, restPoints: ['a3-construire', 'a3-piege'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_PIEGE, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: DEUX FUTURS, UNE LIGNE
 *
 *  Meaning in contrast: the futur simple at (or under way at) the jalon, the
 *  futur antérieur behind it. Lesson 7 in B1's reframe kept and extended.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Le départ d’Inès',
  frSub: 'Vingt heures, trois phrases',
  setting: 'Genève. Inès part ce soir pour Barcelone. Son colocataire Théo voudrait passer lui dire au revoir, et il essaie de comprendre à quelle heure elle sera où.',
  bubbles: [
    { from: 'user', fr: 'À vingt heures, je partirai.', en: 'At eight, I will leave.' },
    { from: 'coach', fr: 'Donc à vingt heures pile, tu fermes la porte. Théo peut encore te croiser.', en: 'So at eight exactly, you shut the door. Théo can still catch you.', warn: 'Futur simple : au jalon' },
    { from: 'user', fr: 'Non, à vingt heures, je serai partie.', en: 'No, by eight, I will have left.' },
    { from: 'coach', fr: 'Alors à vingt heures, il ne trouvera plus personne.', en: 'Then at eight, he will find nobody there.', warn: 'Futur antérieur : avant le jalon' },
    { from: 'user', fr: 'Et à vingt heures, je serai déjà dans le train.', en: 'And at eight, I will already be on the train.' },
    { from: 'coach', fr: 'Là, tu dis où tu seras : un état en cours, au futur simple.', en: 'There you say where you will be: a state under way, in the futur simple.', warn: 'Futur simple : en cours' },
  ],
  closing: { fr: 'Au jalon ou pendant : futur simple. Avant lui : futur antérieur.', en: 'At the marker or during it: futur simple. Before it: futur antérieur.' },
  audio: REC('rec-b2-07-depart'),
  say: REFRAME,
  terms: ['ligne', 'jalon'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ligne',
  title: 'Deux futurs autour d’un jalon',
  frSub: 'Le même moment, trois places',
  hint: 'Quatre cartes. Les trois premières ne diffèrent que d’un mot.',
  audio: REC('rec-b2-07-ligne'),
  say: REFRAME,
  terms: ['ligne', 'jalon'],
  cards: [
    {
      head: 'En cours', label: 'le futur simple',
      fr: fr(E(1862)), sub: rsOf(E(1862)),
      body: "À vingt heures, le trajet est en cours : tu es quelque part entre deux villes. EN: under way at the marker.",
    },
    {
      head: 'Au jalon', label: 'le futur simple',
      fr: fr(E(1860)), sub: rsOf(E(1860)),
      body: "Le départ a lieu à vingt heures pile : ce qui arrive au jalon lui-même. Quelqu'un qui passe te voit partir. EN: it happens at the marker.",
    },
    {
      head: 'Avant', label: 'le futur antérieur',
      fr: fr(E(1861)), sub: rsOf(E(1861)),
      body: "À vingt heures, le départ est derrière toi : quelqu'un qui passe ne te trouve plus. EN: by eight, it is behind you.",
    },
    {
      head: 'Ce que le B1 t’a donné', label: Cap(FUT_USAGE_REF),
      fr: fr(PF(407)), sub: rsOf(PF(407)),
      body: `« ${B107_REFRAME} » Le futur antérieur ajoute une place : derrière le jalon. EN: ${B107_REFRAME_EN}`,
    },
  ],
};

const A4_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-trier',
  layer: 'core',
  size: 'lg',
  title: 'Place chaque verbe sur la ligne',
  frSub: 'Au jalon, ou déjà fait',
  groups: [
    grp('Au jalon, ou en cours', [
      it(E(1864), 'l’atterrissage, à six heures'),
      it(E(1866), 'le lever, pendant l’atterrissage'),
      it(E(1867), 'un état : dans le train'),
      it(E(1869), 'la fête a lieu demain soir'),
    ], chk('Ces verbes disent-ils ce qui sera déjà fini ?',
      ['non, ce qui se passera à ce moment-là', 'oui, ce qui sera fait avant'], 0,
      'Le futur simple se tient sur le jalon, ou dans ce qui dure autour. EN: the futur simple is at the marker.')),
    grp('Déjà fait au jalon', [
      it(E(1865), 'le soleil est levé avant'),
      it(E(1868), 'le départ précède ta lecture'),
      it(E(1870), 'les clés rendues avant le soir'),
      it(E(1874), 'le train part avant ton arrivée'),
    ], chk('« Quand l’avion atterrira, le soleil se sera levé. » Le lever du soleil a lieu…',
      ['pendant l’atterrissage', 'avant l’atterrissage', 'après l’atterrissage'], 1,
      'L’atterrissage est le jalon ; le lever est derrière lui. EN: the sunrise comes first.')),
    ctl('Le mélange', '« Dans une heure, j’aurai tout rangé et je me coucherai. » Qu’est-ce qui vient en premier ?',
      ['le rangement', 'le coucher', 'rien, tout arrive ensemble'], 0,
      'Aurai rangé : fini d’abord ; me coucherai : au jalon. EN: tidying first, then bed.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ligne'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Au jalon, ou déjà fait',
  frSub: 'Neuf phrases, un seul moment chacune',
  lines: [
    ln(E(1860)), ln(E(1861)), ln(E(1862)), ln(E(1865)), ln(E(1866)),
    ln(E(1868)), ln(E(1867)), ln(E(1874)), ln(E(1875)),
  ],
  questions: [
    { q: 'Première phrase : à vingt heures, la personne est-elle encore là ?', opts: ['oui, elle part à ce moment-là', 'non, elle est déjà loin'], correct: 0, why: 'Je partirai : au jalon. EN: at eight exactly.' },
    { q: 'Deuxième phrase : si tu sonnes à vingt heures, qui t’ouvre ?', opts: ['personne', 'la personne qui part'], correct: 0, why: 'Je serai parti : avant le jalon. EN: already gone.' },
    { q: 'Quatrième phrase : fait-il jour quand l’avion atterrit ?', opts: ['oui, le soleil est déjà levé', 'non, pas encore'], correct: 0, why: 'Se sera levé : avant l’atterrissage. EN: the sun is already up.' },
    { q: 'Sixième phrase : où est la personne quand tu lis le message ?', opts: ['hors de la ville', 'encore en ville'], correct: 0, why: 'J’aurai quitté la ville : c’est fait. EN: she has left.' },
    { q: 'Dernière phrase : le train est-il encore à quai quand tu arrives ?', opts: ['oui, il part à ce moment-là', 'non, il est déjà parti'], correct: 0, why: 'Partira : au jalon, pas avant. EN: it leaves as you arrive.' },
  ],
  audio: REC('rec-b2-07-ligne-ecoute'),
  say: REFRAME,
  terms: ['ligne'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux futurs qui se ressemblent',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Pose le jalon, puis place le verbe',
    body: "Au jalon, ou en cours à ce moment-là : futur simple. Déjà fait avant le jalon : futur antérieur. Le même verbe peut prendre les deux, et chacun raconte autre chose. EN: at the marker, futur simple; already done by it, futur antérieur.",
  },
  cards: [
    trap(E(1861), 'personne à vingt heures', 'À vingt heures, je partirai, tu ne me trouveras plus.', 'Si on ne te trouve plus, tu es parti avant : futur antérieur. EN: gone before the marker.'),
    trap(E(1865), 'le soleil déjà levé', 'Quand l’avion atterrira, il fera jour : le soleil se lèvera.', 'Le lever a lieu avant l’atterrissage : se sera levé. EN: before the landing.'),
    trap(E(1868), 'déjà loin', 'Quand tu liras ce message, je quitterai la ville.', 'À ta lecture, le départ est fait : aurai quitté. EN: already done when you read.'),
    trap(E(1875), 'départ sous tes yeux', 'Le train sera parti quand tu arriveras, cours pour le voir partir.', 'Si tu le vois partir, il part au jalon : partira. EN: it leaves as you arrive.'),
    trap(E(1867), 'un état', 'Quand tu liras ce message, j’aurai été dans le train.', 'Être dans le train est un état en cours : je serai. EN: a state under way.'),
    trap(E(1873), 'deux moments', 'Dans une heure, je rangerai tout et je me serai couché.', 'Le rangement d’abord, le coucher ensuite. EN: the order is reversed.'),
  ],
  drill: [
    { promptSay: 'À vingt heures, je … : ne passe pas.', opts: ['serai parti', 'partirai'], correct: 0 },
    { promptSay: 'À vingt heures, je … : viens me dire au revoir à la porte.', opts: ['partirai', 'serai parti'], correct: 0 },
    { promptSay: 'Quand l’avion atterrira, il fera jour : le soleil …', opts: ['se sera levé', 'se lèvera'], correct: 0 },
    { promptSay: 'Quand tu liras ce message, j’… la ville.', opts: ['aurai quitté', 'quitterai'], correct: 0 },
    { promptSay: 'Demain soir, nous … son départ tous ensemble.', opts: ['fêterons', 'aurons fêté'], correct: 0 },
    { promptSay: 'Demain soir, elle … ses clés : l’appartement sera vide.', opts: ['aura rendu', 'rendra'], correct: 0 },
    { promptSay: 'Quand tu arriveras, le train … : cours, il est encore à quai.', opts: ['partira', 'sera parti'], correct: 0 },
    { promptSay: 'À vingt heures, je … sur la route.', opts: ['serai', 'aurai été'], correct: 0 },
  ],
  steps: STEPS('Pose le jalon, puis place le verbe', 'Le futur d’à côté'),
  audio: REC('rec-b2-07-piege-ligne'),
  say: REFRAME,
  terms: ['ligne', 'jalon'],
};

const A4_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a4-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Ajoute « déjà » dans ta tête. Si la phrase garde son sens, le futur antérieur va bien.', why: "Déjà dit exactement ce que ce temps exprime : fait avant le jalon. EN: if déjà fits, the futur antérieur fits." },
    { hack: 'Dessine la ligne : un trait pour le jalon, puis place chaque verbe dessus ou à sa gauche.', why: "À gauche, le futur antérieur ; dessus, le futur simple. EN: left of the mark or on it." },
    { hack: 'Imagine quelqu’un qui arrive au jalon. Verra-t-il l’action se faire ?', why: "S'il la voit, futur simple ; s'il arrive trop tard pour la voir, futur antérieur. EN: can a late-comer still see it happen?" },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ligne', 'jalon'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Compléter : la journée de Karim', TEXTE_A4, [
  { q: 'Complète le début : Karim (prendre) le premier train ; quand il (arriver), il (déjà relire) sa présentation.', a: "Karim prendra le premier train. Quand il arrivera à la gare du Midi, il aura déjà relu sa présentation deux fois : la relecture est finie avant l'arrivée." },
  { q: 'Complète : à dix heures, il (présenter) ; à midi, le comité (prendre) sa décision ; Karim (déjeuner).', a: "À dix heures, il présentera son projet (au jalon). À midi, le comité aura pris sa décision (déjà prise à midi), et Karim déjeunera avec son ancienne collègue." },
  { q: 'Complète la fin : quand il (rentrer), sa compagne (préparer) une surprise.', a: "Quand il rentrera à Paris, sa compagne aura préparé une surprise : elle est prête avant son retour." },
  { q: 'Dans « à midi, le comité (prendre) sa décision », les deux futurs sont-ils possibles ?', a: "Oui. Prendra : la décision tombe à midi. Aura pris : à midi, elle est déjà prise. Le sens change, pas la grammaire." },
], 'rec-b2-07-texte-a4', ['ligne']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Au jalon', '« À vingt heures, je partirai. » À vingt heures, la personne…',
    ['part à ce moment-là', 'est déjà partie', 'reste chez elle'], 0,
    'Le futur simple : au jalon lui-même. EN: at the marker.'),
  ctl('Avant', '« À vingt heures, je serai parti. » Si tu sonnes à vingt heures, on t’ouvre ?',
    ['oui', 'non'], 1,
    'Le départ est derrière le jalon : personne n’ouvre. EN: already gone.'),
  ctl('La méthode', 'Pour choisir entre les deux futurs, tu poses d’abord…',
    ['le jalon', 'la durée de l’action'], 0,
    'Le jalon ; chaque verbe se place par rapport à lui. EN: the later moment.'),
], ['ligne']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Deux futurs, une ligne',
    opener: {
      line: "Je partirai, je serai parti : ici tu places deux futurs sur une seule ligne, autour d'un même moment. EN: Two futures of one verb: here you place them on a single line, round one moment.",
      imageRef: 'lessons/futur-anterieur/act04.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre le futur simple et le futur antérieur par rapport à un jalon, et tu sais dire si l'action se fera à ce moment-là ou sera déjà faite. EN: You can choose between the two futures round a later moment.",
    estScreens: 38, restPoints: ['a4-trier', 'a4-piege'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_TRIER, A4_ECOUTE, A4_PIEGE, A4_HACKS, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: QUAND, DÈS QUE, UNE FOIS QUE
 *
 *  Lesson 7 in B1 put the future on both sides of quand and said the futur
 *  antérieur after quand belongs to B2. Here it is built: finished first,
 *  futur antérieur; together, futur simple. Après que + indicatif.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Le déménagement de Nadia',
  frSub: 'D’abord ceci, ensuite cela',
  setting: 'Bruxelles. Nadia déménage samedi. Au téléphone, elle organise la journée avec son frère Yanis, qui vient l’aider.',
  bubbles: [
    { from: 'user', fr: 'Dès que le camion sera arrivé, nous chargerons les cartons.', en: 'As soon as the lorry has arrived, we will load the boxes.' },
    { from: 'coach', fr: 'Arriver d’abord, charger ensuite : sera arrivé, au futur antérieur.', en: 'Arrive first, load next: sera arrivé, in the futur antérieur.', warn: 'Fini avant' },
    { from: 'user', fr: 'Pendant que tu porteras le canapé, je démonterai les lits.', en: 'While you carry the sofa, I will take the beds apart.' },
    { from: 'coach', fr: 'Là, les deux actions vont ensemble : deux futurs simples.', en: 'Here the two actions go together: two futurs simples.', warn: 'En même temps' },
    { from: 'user', fr: 'Une fois que nous aurons tout rangé, nous commanderons des pizzas.', en: 'Once we have put everything away, we will order pizzas.' },
    { from: 'coach', fr: 'Aurons rangé : le rangement est fini avant les pizzas.', en: 'Aurons rangé: the tidying is done before the pizzas.', warn: 'Une fois que' },
  ],
  closing: { fr: "Fini avant l'autre : futur antérieur. En même temps : futur simple.", en: 'Finished before the other: futur antérieur. At the same time: futur simple.' },
  audio: REC('rec-b2-07-demenagement'),
  say: REFRAME,
  terms: ['charniere'],
};

const A5_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-table',
  layer: 'core',
  sheetId: 'sheet-ligne',
  title: 'Six charnières',
  cols: ['Charnière', 'Ce qu’elle ajoute', 'Temps'],
  rows: [
    { cells: ['quand, lorsque', 'le moment', 'futur antérieur'], say: fr(E(1878)),
      detail: { title: 'quand, lorsque', body: "Quand est le mot de tous les jours, lorsque le mot écrit. Si l'action est finie d'abord, futur antérieur. EN: lorsque is the written twin of quand.", say: fr(E(1879)) } },
    { cells: ['dès que, aussitôt que', 'tout de suite après', 'futur antérieur'], say: fr(E(1880)),
      detail: { title: 'dès que, aussitôt que', body: "À l'instant où la première action se termine, la seconde commence. EN: immediately after.", say: fr(E(1881)) } },
    { cells: ['une fois que', 'l’étape franchie', 'futur antérieur'], say: fr(E(1882)),
      detail: { title: 'une fois que', body: "Une fois que insiste sur l'étape franchie : après, tout devient possible. EN: once the step is done.", say: fr(E(1890)) } },
    { cells: ['après que', 'l’ordre, à l’écrit', 'futur antérieur'], say: fr(E(1893)),
      detail: { title: 'après que', body: "Après que prend l'indicatif, parce que la chose sera faite. On entend souvent après qu'il soit, mais l'écrit soigné garde l'indicatif. EN: après que takes the indicative in careful French.", say: fr(E(1883)) } },
    { cells: ['tant que… ne… pas', 'rien avant la fin', 'futur antérieur'], say: fr(E(1884)),
      detail: { title: 'tant que… ne… pas', body: "Tant que tu n'auras pas fini : rien ne bouge avant la fin. EN: as long as it has not been done.", say: fr(PF(439)) } },
    { cells: ['quand, pendant que', 'en même temps', 'futur simple'], say: fr(E(1885)),
      detail: { title: 'en même temps', body: "Si les deux actions vont ensemble, pas de futur antérieur : quand tu finiras, appelle-moi. EN: at the same moment, keep the futur simple.", say: fr(E(1887)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'D’abord, ou en même temps',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Fini avant l’autre', [
      it(E(1878), 'finir, puis appeler'),
      it(E(1880), 'recevoir, puis réserver'),
      it(E(1889), 'vendre, puis déménager'),
      it(E(1886), 'lire, puis donner ton avis'),
    ], chk('« Quand tu auras fini, appelle-moi. » Tu appelles…',
      ['après avoir fini', 'en finissant', 'avant de finir'], 0,
      'Le futur antérieur place la fin avant l’appel. EN: finish first, then call.')),
    grp('En même temps', [
      it(E(1885), 'au moment même où tu finis'),
      it(E(1887), 'lire et noter ensemble'),
      it(E(1867), 'un état pendant ta lecture'),
      it(E(1866), 'le lever pendant l’atterrissage'),
    ], chk('« Quand je lirai ton mémoire, je prendrai des notes. » Les deux actions…',
      ['vont ensemble', 'se suivent'], 0,
      'Deux futurs simples : tu lis et tu notes en même temps. EN: both at once.')),
    ctl('Après que', '« Après qu’il … parlé, tu poseras tes questions. »',
      ['aura', 'ait'], 0,
      'Après que prend l’indicatif : il aura parlé. EN: indicative after après que.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Ce que le B1 t’avait montré',
  frSub: `Les phrases de ${FUT_USAGE_REF}, enfin construites`,
  examples: [
    ex('fr.b1.maison.061', 'les travaux d’abord, les amis ensuite'),
    ex('fr.b1.dictee.039', 'la formation finie, puis la recherche'),
    ex('fr.b1.metiers.053', 'après ses études, pas pendant'),
    ex(PF(439), 'tant que… ne… pas : rien avant la fin'),
    ex(E(1892), 'lorsque le film aura commencé : trop tard'),
    ex(E(1891), 'dès que : tout de suite après'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs après la charnière',
  errors: [
    {
      wrong: 'Lorsque les invités sont partis, nous rangerons.',
      right: 'Lorsque les invités seront partis, nous rangerons.',
      why: "Normal : sont partis décrit bien un départ fini. Mais ce départ est encore à venir, comme le rangement : seront partis. EN: the leaving is still to come.",
    },
    {
      wrong: "Après qu'il ait parlé, tu poseras tes questions.",
      right: "Après qu'il aura parlé, tu poseras tes questions.",
      why: "Normal : avant que prend le subjonctif, et beaucoup de francophones font pareil avec après que. L'écrit soigné garde l'indicatif. EN: après que takes the indicative.",
    },
    {
      wrong: "Tant que tu n'as pas rendu le dossier, tu ne seras pas payé.",
      right: "Tant que tu n'auras pas rendu le dossier, tu ne seras pas payé.",
      why: "Normal : n'as pas rendu est vrai aujourd'hui. Mais la paie est à venir, et le rendu aussi : les deux moitiés regardent devant. EN: both halves look ahead.",
    },
    {
      wrong: "Quand j'aurais lu ton mémoire, je te dirai ce que j'en pense.",
      right: "Quand j'aurai lu ton mémoire, je te dirai ce que j'en pense.",
      why: "Normal : aurai et aurais se prononcent souvent pareil. Après quand, un moment réel à venir : aurai, sans s. EN: no s after quand.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'lettre'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'La charnière, puis les deux moments',
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Compléter : les consignes de Zoé', TEXTE_A5, [
  { q: 'Complète : quand tu (rentrer) ; dès que le plombier (réparer).', a: "Quand tu rentreras ce soir (tu rentres, tu arroses : en même temps ; quand tu seras rentré est possible aussi) ; dès que le plombier aura réparé la fuite (fini d'abord)." },
  { q: 'Complète : une fois que tu (payer) ; tant que le propriétaire (ne pas répondre).', a: "Une fois que tu auras payé la facture ; tant que le propriétaire n'aura pas répondu." },
  { q: 'Complète : lorsque les voisins (partir).', a: "Lorsque les voisins seront partis : partir garde être, et l'accord se fait avec les voisins." },
  { q: 'Complète la fin : après que tout le monde (se coucher).', a: "Après que tout le monde se sera couché : l'indicatif après après que, et être pour le pronominal." },
], 'rec-b2-07-texte-a5', ['charniere']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Fini avant', '« Dès que j’aurai reçu ta réponse, je réserverai. » Je réserve…',
    ['après ta réponse', 'avant ta réponse', 'sans ta réponse'], 0,
    'La réponse d’abord, la réservation ensuite. EN: the answer comes first.'),
  ctl('En même temps', '« Quand tu finiras, appelle-moi. » Tu appelles…',
    ['au moment où tu finis', 'une heure après'], 0,
    'Deux moments collés : futur simple. EN: at the very moment.'),
  ctl('Après que', 'Après que prend…',
    ['l’indicatif', 'le subjonctif'], 0,
    'La chose sera faite : l’indicatif. EN: the indicative.'),
], ['charniere']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Quand, dès que, une fois que',
    opener: {
      line: "Quand tu auras fini, appelle-moi : ici tu mets deux moments à venir dans l'ordre, avec la bonne charnière. EN: When you have finished, call me: here you put two future moments in order, with the right hinge word.",
      imageRef: 'lessons/futur-anterieur/act05.jpg',
    },
    sections: [],
    milestone: "Après quand, dès que, une fois que et après que, tu mets au futur antérieur ce qui sera fini d'abord, et tu gardes le futur simple quand les deux vont ensemble. EN: After the hinge words, you use the futur antérieur for what is finished first.",
    estScreens: 38, restPoints: ['a5-table', 'a5-exemples'],
  },
  sections: [A5_HISTOIRE, A5_TABLE, A5_CONSTRUIRE, A5_EXEMPLES, A5_ERREURS, A5_DICTEE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: LE PIÈGE DE L'ANGLAIS
 *
 *  when you've finished = quand tu auras fini. The passé composé after quand
 *  is kept for habits and for the past, and the relaxed spoken « quand t'as
 *  fini » is named as a register, not taught as the written form.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Le message d’Emma',
  frSub: 'When I’ve finished, en français',
  setting: 'Genève. Emma, stagiaire anglaise, écrit à son tuteur, M. Rochat. Sa collègue Léa relit le message avec elle avant l’envoi.',
  bubbles: [
    { from: 'user', fr: "J'écris : quand j'ai fini le rapport, je vous l'envoie.", en: 'I am writing: when I have finished the report, I will send it to you.' },
    { from: 'coach', fr: "En anglais, when I've finished. En français, la fin du rapport est encore à venir.", en: 'In English, when I’ve finished. In French, the end of the report is still to come.', warn: 'Le calque' },
    { from: 'user', fr: "Donc : quand j'aurai fini le rapport, je vous l'enverrai.", en: 'So: when I have finished the report, I will send it to you.' },
    { from: 'coach', fr: "Voilà. Deux moments à venir, et le premier sera fini avant l'autre.", en: 'That is it. Two moments to come, and the first will be over before the other.', warn: 'Futur antérieur, puis futur simple' },
    { from: 'user', fr: "Mais je dis souvent : quand j'ai fini ma journée, je rentre à pied.", en: 'But I often say: when I have finished my day, I walk home.' },
    { from: 'coach', fr: "Là, c'est une habitude : passé composé et présent, rien ne change.", en: 'That is a habit: passé composé and present, nothing changes.', warn: 'Une habitude' },
  ],
  closing: { fr: "Une chose à venir : quand j'aurai fini. Une habitude : quand j'ai fini.", en: 'Something to come: quand j’aurai fini. A habit: quand j’ai fini.' },
  audio: REC('rec-b2-07-emma'),
  say: REFRAME,
  terms: ['calque'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-pieges',
  title: 'Le moment, pas la traduction',
  frSub: 'Quatre cartes contre le calque',
  hint: 'Quatre cartes. La dernière parle de l’oral.',
  audio: REC('rec-b2-07-calque'),
  say: REFRAME,
  terms: ['calque'],
  cards: [
    {
      head: 'When you’ve finished', label: 'le futur antérieur',
      fr: fr(E(1899)), sub: rsOf(E(1899)),
      body: "Ta journée de demain n'est pas finie : c'est à venir, donc aurai fini, puis rentrerai. EN: English uses the present perfect; French looks at the moment.",
    },
    {
      head: 'Une habitude', label: 'le passé composé',
      fr: fr(E(1898)), sub: rsOf(E(1898)),
      body: "Tous les soirs, dans le même ordre : le passé composé pour ce qui est fini, le présent pour la suite. EN: a habit keeps the passé composé and the present.",
    },
    {
      head: 'When you arrive', label: Cap(FUT_USAGE_REF),
      fr: fr(PF(415)), sub: rsOf(PF(415)),
      body: `Le présent anglais devient un futur simple : c'était ${FUT_USAGE_REF}. Le present perfect, lui, devient un futur antérieur. EN: an English present gives a futur; a present perfect gives a futur antérieur.`,
    },
    {
      head: 'À l’oral', label: 'le registre',
      fr: "quand t'as fini · quand tu auras fini",
      sub: '[kahⁿ ta fee-NEE] · [kahⁿ tü oh-ra fee-NEE]',
      body: "Dans une conversation détendue, on entend : appelle-moi quand t'as fini. À l'écrit et dans un français soigné, écris le futur antérieur. EN: relaxed speech says t’as fini; write auras fini.",
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'À venir, ou déjà connu',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('À venir : futur antérieur', [
      it(E(1899), 'demain, pas tous les soirs'),
      it(E(1900), 'as soon as you’ve paid'),
      it(E(1901), 'once you’ve read'),
      it(E(1903), 'when you’ve chosen'),
    ], chk('« Dès que tu auras payé » traduit…',
      ['as soon as you’ve paid', 'as soon as you paid', 'as soon as you pay'], 0,
      'Le present perfect anglais, pour une chose à venir. EN: a future completion.')),
    grp('Les autres cas', [
      it(E(1898), 'une habitude'),
      it(E(1909), 'un fait passé'),
      it(PF(415), 'when you arrive : futur simple'),
      it(E(1885), 'when you finish : au moment même'),
    ], chk('« Quand elle a obtenu son diplôme, elle est partie à Dakar. » Cette phrase parle…',
      ['du passé', 'de l’avenir'], 0,
      'Deux passés composés : c’est déjà arrivé. EN: it already happened.')),
    ctl('Le test', 'When you’ve rested, we’ll talk about it again.',
      ['Quand tu te seras reposé, on en reparlera.', 'Quand tu t’es reposé, on en reparlera.'], 0,
      'Le repos est à venir : futur antérieur, pronominal avec être. EN: a future completion.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['calque'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Habitude, passé ou avenir',
  frSub: 'Neuf phrases avec quand',
  lines: [
    ln(E(1898)), ln(E(1899)), ln(E(1909)), ln(E(1908)), ln(E(1902)),
    ln(E(1904)), ln(E(1910)), ln(PF(415)), ln('fr.b1.dictee.043'),
  ],
  questions: [
    { q: 'Première phrase : parle-t-on de demain ou de tous les jours ?', opts: ['de tous les jours', 'de demain'], correct: 0, why: 'Passé composé et présent : une habitude. EN: a habit.' },
    { q: 'Deuxième phrase : quand la personne rentrera-t-elle à pied ?', opts: ['après sa journée', 'pendant sa journée'], correct: 0, why: 'Aurai fini, puis rentrerai. EN: after her day.' },
    { q: 'Troisième phrase : est-elle déjà partie à Dakar ?', opts: ['oui', 'non, pas encore'], correct: 0, why: 'Est partie : c’est fait. EN: it has happened.' },
    { q: 'Quatrième phrase : est-elle déjà partie à Dakar ?', opts: ['non, pas encore', 'oui'], correct: 0, why: 'Partira, après le diplôme. EN: not yet.' },
    { q: 'Cinquième phrase : que demande-t-on de faire au retour ?', opts: ['prévenir', 'rappeler le lendemain'], correct: 0, why: 'Préviens-moi, une fois rentré. EN: let me know.' },
  ],
  audio: REC('rec-b2-07-calque-ecoute'),
  say: REFRAME,
  terms: ['calque'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Six phrases traduites trop vite',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le moment, pas la traduction',
    body: "Après when, as soon as ou once, l'anglais met un present perfect. Le français regarde le moment : si c'est à venir, futur antérieur. Le passé composé reste pour les habitudes et le passé. EN: look at the moment, not at the English tense.",
  },
  cards: [
    trap(E(1899), 'when I’ve finished', "Quand j'ai fini ma journée, je rentrerai à pied.", 'Demain : aurai fini, puis rentrerai. EN: a future completion.'),
    trap(E(1900), 'as soon as you’ve paid', 'Dès que tu as payé, tu recevras un reçu.', 'Le paiement est à venir : auras payé. EN: still to come.'),
    trap(E(1901), 'once you’ve read', 'Une fois que tu as lu le contrat, signe en bas.', 'La lecture est à venir, avant la signature : auras lu. EN: futur antérieur before an imperative.'),
    trap(E(1902), 'when you’ve got home', 'Préviens-moi quand tu es rentré.', 'Ton retour est à venir : seras rentré. EN: être, in the future.'),
    trap(E(1906), 'as soon as I’ve had', "Dès que j'ai eu les résultats, je t'appellerai.", 'Les résultats arrivent plus tard : aurai eu. EN: as soon as I’ve had.'),
    trap(E(1898), 'une habitude', "Quand j'aurai fini ma journée, je rentre à pied.", 'Tous les soirs : passé composé et présent. EN: a habit needs no future.'),
  ],
  drill: [
    { promptSay: 'When you’ve finished, call me : quand tu … , appelle-moi.', opts: ['auras fini', 'as fini'], correct: 0 },
    { promptSay: 'As soon as I’ve paid : dès que j’… payé', opts: ['aurai', 'ai'], correct: 0 },
    { promptSay: 'Every evening, when I’ve finished : quand j’… fini, je rentre.', opts: ['ai', 'aurai'], correct: 0 },
    { promptSay: 'Once you’ve read it : une fois que tu l’… lu', opts: ['auras', 'as'], correct: 0 },
    { promptSay: 'When she’s got her degree : quand elle … son diplôme', opts: ['aura obtenu', 'a obtenu'], correct: 0 },
    { promptSay: 'Last year, when she got her degree : quand elle … son diplôme', opts: ['a obtenu', 'aura obtenu'], correct: 0 },
    { promptSay: 'Let me know when you’ve got home : quand tu … rentré', opts: ['seras', 'es'], correct: 0 },
    { promptSay: 'When you’ve rested : quand tu … reposé', opts: ['te seras', 't’es'], correct: 0 },
  ],
  steps: STEPS('Le moment, pas la traduction', 'Ce que la traduction mot à mot raconte'),
  audio: REC('rec-b2-07-piege-calque'),
  say: REFRAME,
  terms: ['calque'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Réécrire : le message d’Emma', TEXTE_A6, [
  { q: 'Réécris les deux premières phrases.', a: "Quand j'aurai fini le rapport, je vous l'enverrai. Dès que j'aurai eu la réponse du client, je vous appellerai." },
  { q: 'Réécris la troisième.', a: "Une fois que vous l'aurez lu, dites-moi ce que vous en pensez. L'impératif reste : il donne déjà la consigne pour plus tard." },
  { q: 'Réécris la dernière.', a: "Je partirai en congé dès que j'aurai fermé les dossiers." },
  { q: 'Quelle phrase d’Emma serait juste pour une habitude ?', a: "Quand j'ai fini le rapport, je vous l'envoie : si elle le faisait chaque semaine, cette forme serait correcte." },
], 'rec-b2-07-texte-a6', ['calque']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le calque', 'When you’ve finished, se dit…',
    ['quand tu auras fini', 'quand tu as fini', 'quand tu finis'], 0,
    'Une fin à venir : futur antérieur. EN: a future completion.'),
  ctl('L’habitude', '« Quand j’ai fini ma journée, je rentre à pied. » Cette phrase est…',
    ['correcte : une habitude', 'fausse : il faut aurai'], 0,
    'Tous les soirs : passé composé et présent. EN: a habit.'),
  ctl('L’impératif', '« Une fois que tu … le contrat, signe en bas. »',
    ['auras lu', 'as lu'], 0,
    'La lecture est à venir, même avec un impératif. EN: still to come.'),
], ['calque']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Le piège de l’anglais',
    opener: {
      line: "When you've finished ne se traduit pas mot à mot : ici tu apprends à regarder le moment, pas le temps anglais. EN: When you’ve finished does not translate word for word: here you learn to look at the moment, not the English tense.",
      imageRef: 'lessons/futur-anterieur/act06.jpg',
    },
    sections: [],
    milestone: "Tu traduis when you've finished par quand tu auras fini, et tu gardes quand j'ai fini pour les habitudes. EN: You can turn the English present perfect into a futur antérieur, and keep the passé composé for habits.",
    estScreens: 36, restPoints: ['a6-construire', 'a6-piege'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_ECOUTE, A6_PIEGE, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: D'ICI VENDREDI
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Dix promesses datées',
  frSub: 'Écoute, puis dis quand ce sera fait',
  lines: [
    ln(E(1914)), ln(E(1915)), ln(E(1916)), ln(E(1917)), ln(E(1918)),
    ln(E(1919)), ln(E(1920)), ln(E(1924)), ln(E(1926)), ln(E(1927)),
  ],
  questions: [
    { q: 'Première phrase : quand le rapport sera-t-il rendu ?', opts: ['vendredi au plus tard', 'après vendredi'], correct: 0, why: 'D’ici vendredi : avant ou le jour même. EN: by Friday.' },
    { q: 'Deuxième phrase : combien de personnes seront recrutées ?', opts: ['deux', 'trois'], correct: 0, why: 'Deux personnes, avant la fin du mois. EN: two.' },
    { q: 'Quatrième phrase : quel est le dernier jour possible pour la facture ?', opts: ['lundi', 'mardi', 'vendredi'], correct: 0, why: 'Au plus tard lundi. EN: Monday at the latest.' },
    { q: 'Cinquième phrase : combien de temps le chantier aura-t-il duré ?', opts: ['un an', 'un mois'], correct: 0, why: 'Un an, au quinze mars. EN: a year.' },
    { q: 'Neuvième phrase : lundi, le dossier sera-t-il lu ?', opts: ['non, pas encore', 'oui'], correct: 0, why: 'Ne… pas encore : pas avant lundi. EN: not yet.' },
  ],
  audio: REC('rec-b2-07-echeances-ecoute'),
  say: REFRAME,
  terms: ['echeance'],
};

const A7_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-table',
  layer: 'core',
  sheetId: 'sheet-emplois',
  title: 'Six façons de fixer une échéance',
  cols: ['Marqueur', 'Ce qu’il dit', 'Exemple'],
  rows: [
    { cells: ["d'ici vendredi", 'au plus tard ce jour-là', "j'aurai rendu"], say: fr(E(1914)),
      detail: { title: "d'ici", body: "D'ici vendredi : entre maintenant et vendredi, au plus tard. EN: by Friday.", say: fr('fr.b2.strategies-de-comprehension.1716') } },
    { cells: ['avant la fin du mois', 'une limite', 'nous aurons recruté'], say: fr(E(1915)),
      detail: { title: 'avant', body: "Avant pose une limite ; le futur antérieur promet que la tâche sera derrière. EN: before sets a limit.", say: fr(E(1923)) } },
    { cells: ['au plus tard lundi', 'la dernière date', 'vous aurez reçu'], say: fr(E(1917)),
      detail: { title: 'au plus tard', body: "Au plus tard insiste sur la limite : pas un jour de plus. EN: at the latest.", say: fr(E(1922)) } },
    { cells: ['dans deux heures', 'à partir de maintenant', "j'aurai corrigé"], say: fr(E(1916)),
      detail: { title: 'dans', body: `Dans compte à partir de maintenant, comme dans ${FUT_USAGE_REF}. Ici, la tâche sera finie au bout du compte. EN: dans counts from now.`, say: fr(E(1873)) } },
    { cells: ['en une semaine', 'le temps qu’il faut', 'ils auront repeint'], say: fr(E(1925)),
      detail: { title: 'en', body: "En donne la durée du travail : en une semaine, tout sera fait. EN: en gives the time the job takes.", say: fr(E(1919)) } },
    { cells: ['le quinze mars', 'un moment précis', 'aura duré'], say: fr(E(1918)),
      detail: { title: 'une date', body: "Une heure ou une date précise sert de jalon : à ce moment-là, voilà ce qui sera fait. EN: a precise time is a marker.", say: fr(E(1800)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echeance', 'jalon'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Avant l’échéance, ou ce jour-là',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Fait avant l’échéance', [
      it(E(1914), 'd’ici vendredi'),
      it(E(1917), 'au plus tard lundi'),
      it(E(1916), 'dans deux heures'),
      it(E(1919), 'à la fin de la semaine'),
    ], chk('« D’ici vendredi, j’aurai rendu le rapport. » Le rapport sera rendu…',
      ['vendredi au plus tard', 'exactement vendredi', 'après vendredi'], 0,
      'D’ici pose une limite ; le futur antérieur met la tâche derrière elle. EN: by Friday at the latest.')),
    grp('Ce qui se passe ce jour-là', [
      it(PF(537), 'un état : tout sera prêt'),
      it(E(1869), 'la fête a lieu demain soir'),
      it(E(1864), 'l’atterrissage à six heures'),
      it(E(1801), 'le travail se fait à neuf heures'),
    ], chk('« D’ici vendredi, tout sera prêt. » Sera prêt, c’est…',
      ['le futur simple d’être et un adjectif', 'un futur antérieur'], 0,
      'Prêt est un adjectif : un état, pas un participe. EN: an adjective, a state.')),
    ctl('Pas encore', '« Lundi, je n’aurai pas encore vu le dossier. » Lundi, le dossier est…',
      ['pas encore lu', 'déjà lu'], 0,
      'Ne… pas encore entoure l’auxiliaire. EN: not yet read on Monday.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echeance'],
};

const A7_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a7-flash',
  layer: 'core',
  title: 'Huit marqueurs d’échéance',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'by Friday', back: "d'ici vendredi", say: fr(E(1914)) },
    { front: 'on Monday at the latest', back: 'au plus tard lundi', say: fr(E(1917)) },
    { front: 'by then', back: "d'ici là", say: fr(E(1924)) },
    { front: 'this time tomorrow', back: 'demain à cette heure-ci', say: fr(E(1927)) },
    { front: 'before the end of the month', back: 'avant la fin du mois', say: fr(E(1915)) },
    { front: 'two hours from now', back: 'dans deux heures', say: fr(E(1916)) },
    { front: 'within a week', back: 'en une semaine', say: fr(E(1925)) },
    { front: 'I promise', back: 'promis', say: fr(E(1920)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echeance'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs d’échéance',
  errors: [
    {
      wrong: "Jusqu'à vendredi, j'aurai rendu le rapport.",
      right: "D'ici vendredi, j'aurai rendu le rapport.",
      why: "Normal : by et until se mélangent vite. Jusqu'à dit une durée qui continue ; d'ici dit une limite. EN: jusqu'à means until, d'ici means by.",
    },
    {
      wrong: "Dans deux heures, j'ai tout corrigé.",
      right: "Dans deux heures, j'aurai tout corrigé.",
      why: "Normal : à l'oral, on dit parfois dans deux heures, c'est fait. Mais la phrase regarde un moment à venir : futur antérieur. EN: the moment is ahead.",
    },
    {
      wrong: "Lundi, je n'aurai encore pas vu le dossier.",
      right: "Lundi, je n'aurai pas encore vu le dossier.",
      why: "Normal : not yet se découpe autrement en anglais. Pas encore reste soudé, entre l'auxiliaire et le participe. EN: pas encore stays together.",
    },
    {
      wrong: "J'aurai rentré avant minuit, promis.",
      right: 'Je serai rentrée avant minuit, promis.',
      why: "Normal : will have pousse vers avoir. Rentrer, sans complément, garde être, et s'accorde. EN: rentrer keeps être.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echeance', 'auxiliaire'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Compléter : les engagements de l’équipe', TEXTE_A7, [
  { q: 'Complète : Samir (contacter) ; Léa et Paul (préparer) ; je (relire).', a: "Samir aura contacté les trois fournisseurs ; Léa et Paul auront préparé le budget ; j'aurai relu leur tableau." },
  { q: 'Complète : nous (envoyer) ; le client (prendre) ; nous (fixer).', a: "Nous aurons envoyé la proposition ; le client aura pris sa décision ; nous aurons fixé une date pour le lancement." },
  { q: 'Complète la fin : dès que vous l’(apprendre).', a: "Prévenez-moi dès que vous l'aurez appris : d'abord l'information, ensuite l'alerte." },
  { q: 'Pourquoi ce temps rassure-t-il dans un compte rendu ?', a: "Parce qu'il place chaque tâche derrière son échéance : à la date dite, le travail sera déjà fait." },
], 'rec-b2-07-texte-a7', ['echeance']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('D’ici', '« D’ici jeudi, nous aurons fixé une date. » La date sera fixée…',
    ['jeudi au plus tard', 'après jeudi'], 0,
    'D’ici jeudi : avant la limite. EN: by Thursday.'),
  ctl('Jusqu’à ou d’ici', 'By Friday, se dit…',
    ['d’ici vendredi', 'jusqu’à vendredi'], 0,
    'Jusqu’à dit une durée ; d’ici, une limite. EN: d’ici.'),
  ctl('L’auxiliaire', '« Je … rentrée avant minuit. »',
    ['serai', 'aurai'], 0,
    'Rentrer, sans complément, garde être. EN: être.'),
], ['echeance']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'D’ici vendredi',
    opener: {
      line: "Une date limite, et la tâche déjà derrière toi : ici tu promets ce qui sera fait à chaque échéance. EN: A deadline, and the task already behind you: here you promise what will be done by each deadline.",
      imageRef: 'lessons/futur-anterieur/act07.jpg',
    },
    sections: [],
    milestone: "Tu fixes une échéance avec d'ici, avant, au plus tard, dans ou en, et tu promets ce qui sera fait à cette date. EN: You can set a deadline and promise what will be done by it.",
    estScreens: 34, restPoints: ['a7-table', 'a7-flash'],
  },
  sections: [A7_ECOUTE, A7_TABLE, A7_CONSTRUIRE, A7_FLASH, A7_ERREURS, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: IL AURA OUBLIÉ
 *
 *  The same backward look, from the moment you will find out: a likely
 *  explanation of a past fact, beside « il a dû » (lesson 4 in B1) and
 *  « sans doute », against the futur simple, which predicts.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le rendez-vous manqué',
  frSub: 'Lucie fait des hypothèses',
  text: LECTURE_RDV,
  glossary: [
    { word: 'messagerie', en: 'voicemail', note: 'Le téléphone ne sonne pas : on tombe directement sur le répondeur.' },
    { word: 'essoufflé', en: 'out of breath', note: 'Qui respire vite, après avoir couru.' },
    { word: 'se sera déchargé', en: 'must have run flat', note: 'La batterie est vide, suppose Lucie.' },
  ],
  questions: [
    { q: 'Global : de quoi parle ce texte ?', a: "D'un rendez-vous où Lucie attend Hugo, qu'elle croit en retard, et des explications qu'elle imagine." },
    { q: 'Détail : cite trois hypothèses de Lucie.', a: "Il aura oublié ; il se sera trompé de café ; son tram aura eu du retard ; son téléphone se sera déchargé." },
    { q: 'Inférence : quand Lucie pense « il aura oublié », le sait-elle ?', a: "Non. Elle suppose. Le futur antérieur présente une explication probable, pas un fait." },
    { q: 'Pourquoi rejette-t-elle la première hypothèse ?', a: "Parce qu'Hugo lui a écrit la veille pour confirmer : un oubli est peu probable." },
    { q: 'Dans la dernière phrase, « dès qu’il se sera assis » est-il une hypothèse ?', a: "Non. C'est l'ordre de deux moments à venir : d'abord il s'assiéra, ensuite il enverra la photo." },
  ],
  audio: REC('rec-b2-07-rdv'),
  say: REFRAME,
  terms: ['hypothese'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-emplois',
  title: 'Supposer, en quatre cartes',
  frSub: 'Le fait est passé, l’explication est probable',
  hint: 'Quatre cartes. La dernière n’est pas une hypothèse.',
  audio: REC('rec-b2-07-hypothese'),
  say: REFRAME,
  terms: ['hypothese'],
  cards: [
    {
      head: 'Une explication probable', label: 'le futur antérieur',
      fr: fr(E(1930)), sub: rsOf(E(1930)),
      body: "Il n'est pas venu, c'est un fait. Il aura oublié, c'est ton explication : probable, pas certaine. EN: a likely explanation of a past fact.",
    },
    {
      head: 'Avec devoir', label: Cap(PAIRES_REF),
      fr: fr('fr.b1.recits-au-passe.1207'), sub: rsOf('fr.b1.recits-au-passe.1207'),
      body: "Il a dû oublier dit presque la même chose. Le futur antérieur sonne un peu plus soutenu. EN: devoir says nearly the same thing.",
    },
    {
      head: 'Avec sans doute', label: 'le passé composé',
      fr: fr(E(1935)), sub: rsOf(E(1935)),
      body: "Sans doute, probablement, sûrement : le passé composé avec un adverbe marque aussi l'hypothèse. EN: an adverb does the same job.",
    },
    {
      head: 'Pas le futur simple', label: 'une prédiction',
      fr: fr(E(1936)), sub: rsOf(E(1936)),
      body: "Il oubliera parle de demain : une prédiction. Il aura oublié parle d'hier : une supposition. EN: the futur simple predicts; the futur antérieur supposes.",
    },
  ],
};

const A8_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-trier',
  layer: 'core',
  size: 'lg',
  title: 'Supposer, promettre ou prédire',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Une hypothèse sur le passé', [
      it(E(1931), 'une erreur de jour'),
      it(E(1933), 'une correspondance ratée'),
      it(E(1938), 'une porte restée ouverte'),
      it(E(1944), 'une dispute, encore'),
    ], chk('Dans ces phrases, que fait la personne qui parle ?',
      ['elle suppose', 'elle promet', 'elle prédit'], 0,
      'Un fait est là, et elle en cherche la cause. EN: she is guessing.')),
    grp('Un autre temps, un autre sens', [
      it(E(1936), 'une prédiction'),
      it(E(1935), 'un adverbe de doute'),
      it('fr.b1.recits-au-passe.1207', 'devoir au passé composé'),
      it(E(1914), 'une échéance, pas une hypothèse'),
    ], chk('« Il oubliera, comme d’habitude. » Cette phrase parle…',
      ['de l’avenir', 'du passé'], 0,
      'Oubliera : le futur simple prédit. EN: a prediction.')),
    ctl('Le test', '« Tiens, le facteur sera passé. » Que vois-tu sans doute ?',
      ['du courrier dans la boîte', 'le facteur à la porte'], 0,
      'Tu vois le résultat et tu en déduis la cause. EN: you see the result and infer the cause.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Hier ou demain',
  frSub: 'Neuf phrases, deux sens',
  lines: [
    ln(E(1930)), ln(E(1936)), ln(E(1931)), ln(E(1932)), ln(E(1937)),
    ln(E(1942)), ln(E(1944)), ln(E(1935)), ln(E(1940)),
  ],
  questions: [
    { q: 'Première phrase : la personne sait-elle pourquoi il n’est pas venu ?', opts: ['non, elle suppose', 'oui, elle le sait'], correct: 0, why: 'Aura oublié : une hypothèse. EN: a guess.' },
    { q: 'Deuxième phrase : de quel moment parle-t-on ?', opts: ['de l’avenir', 'du passé'], correct: 0, why: 'Oubliera : une prédiction. EN: the future.' },
    { q: 'Troisième phrase : quelle erreur imagine-t-on ?', opts: ['une erreur de jour', 'une erreur d’adresse'], correct: 0, why: 'Elle se sera trompée de jour. EN: the day.' },
    { q: 'Sixième phrase : qui s’est sans doute trompé ?', opts: ['la personne qui parle', 'un ami'], correct: 0, why: 'J’aurai mal compris : c’est moi. EN: the speaker.' },
    { q: 'Dernière phrase : qu’est-il sans doute arrivé au train ?', opts: ['il a eu du retard', 'il a été annulé'], correct: 0, why: 'Aura eu du retard : une supposition. EN: it was late.' },
  ],
  audio: REC('rec-b2-07-hypothese-ecoute'),
  say: REFRAME,
  terms: ['hypothese'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre hypothèses mal construites',
  errors: [
    {
      wrong: "Il n'est pas venu : il oubliera.",
      right: "Il n'est pas venu : il aura oublié.",
      why: "Normal : on hésite entre deux futurs. Mais l'oubli a déjà eu lieu : pour l'expliquer, futur antérieur. EN: explain a past fact with the futur antérieur.",
    },
    {
      wrong: "Elle s'aura trompée de jour.",
      right: 'Elle se sera trompée de jour.',
      why: "Normal : aura appelle avoir. Mais se tromper est pronominal : être, toujours. EN: pronominals take être.",
    },
    {
      wrong: "Le train aura du retard, j'imagine.",
      right: "Le train aura eu du retard, j'imagine.",
      why: "Normal : aura du retard ressemble beaucoup. Mais sans participe, c'est un futur simple : il parle de demain. EN: without eu, it is a prediction.",
    },
    {
      wrong: "Quelqu'un aura laissée la porte ouverte.",
      right: "Quelqu'un aura laissé la porte ouverte.",
      why: "Normal : la porte est féminine, et la main accorde par réflexe. Avec avoir, la porte vient après : pas d'accord. EN: the object follows avoir.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese', 'accord'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Écrire : la cuisine de Malik', TEXTE_A8, [
  { q: 'Écris une hypothèse avec faire.', a: "Il aura fait un gâteau : la farine est partout sur la table." },
  { q: 'Écris une hypothèse avec oublier.', a: "Il aura oublié de fermer la fenêtre avant de partir." },
  { q: 'Écris deux hypothèses avec sortir et prendre.', a: "Il sera sorti acheter des œufs ; il aura pris son vélo pour aller au marché. Sortir garde être." },
  { q: 'Laquelle est la plus probable, et pourquoi ?', a: "Par exemple : il sera sorti faire des courses, puisque son vélo a disparu et que la liste n'est plus sur le frigo. Toute réponse appuyée sur un indice du texte est juste." },
], 'rec-b2-07-texte-a8', ['hypothese']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le sens', '« Il aura oublié. » La personne qui parle…',
    ['suppose', 'sait', 'promet'], 0,
    'Une explication probable, pas un fait. EN: she supposes.'),
  ctl('Le moment', '« Il aura oublié » parle…',
    ['d’un fait passé', 'd’un fait à venir'], 0,
    'L’oubli est derrière nous ; seule la certitude est à venir. EN: a past fact.'),
  ctl('Le synonyme', 'Quelle phrase dit presque la même chose ?',
    ['Il a dû oublier.', 'Il oubliera.'], 0,
    'Devoir au passé composé : la même supposition. EN: il a dû oublier.'),
], ['hypothese']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Il aura oublié',
    opener: {
      line: "Il n'est pas venu, et tu cherches pourquoi : ici le futur antérieur explique un fait passé que tu ne connais pas encore. EN: He did not come and you wonder why: here the futur antérieur explains a past fact you are not yet sure of.",
      imageRef: 'lessons/futur-anterieur/act08.jpg',
    },
    sections: [],
    milestone: "Tu proposes une explication probable avec il aura oublié, tu la distingues d'une prédiction, et tu sais la dire aussi avec devoir. EN: You can offer a likely explanation and tell it from a prediction.",
    estScreens: 34, restPoints: ['a8-lecture', 'a8-ecoute'],
  },
  sections: [A8_LECTURE, A8_CARTES, A8_TRIER, A8_ECOUTE, A8_ERREURS, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: EN DIX ANS, J'AURAI VU
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Le discours de Luc',
  frSub: 'Trente-deux ans en une page',
  setting: 'Sherbrooke. Ce soir, la bibliothèque fête le départ à la retraite de Mme Gagnon. Son collègue Luc prépare son discours avec une stagiaire.',
  bubbles: [
    { from: 'user', fr: 'En trente-deux ans, elle a accueilli des milliers de lecteurs.', en: 'In thirty-two years, she has welcomed thousands of readers.' },
    { from: 'coach', fr: "C'est juste. Mais pour un discours, on se place à la fin et on regarde tout : elle aura accueilli.", en: 'That is right. But in a speech, you stand at the end and look at it all: elle aura accueilli.', warn: 'Le bilan' },
    { from: 'user', fr: 'Elle aura vu passer trois directeurs.', en: 'She will have seen three directors come and go.' },
    { from: 'coach', fr: "Voilà : le ton d'un bilan, un peu solennel.", en: 'There: the tone of a review, a little solemn.', warn: 'Le ton' },
    { from: 'user', fr: 'Et ce soir, elle nous manquera déjà.', en: 'And tonight, we will already miss her.' },
    { from: 'coach', fr: 'Là, tu parles de ce soir même : futur simple.', en: 'There you are talking about tonight itself: futur simple.', warn: 'Futur simple : au jalon' },
  ],
  closing: { fr: 'Pour un bilan, tu te places à la fin et tu regardes en arrière.', en: 'For a review, you stand at the end and look back.' },
  audio: REC('rec-b2-07-discours'),
  say: REFRAME,
  terms: ['bilan'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-emplois',
  title: 'Le bilan, en quatre cartes',
  frSub: 'Une période vue depuis sa fin',
  hint: 'Quatre cartes. La troisième dit la même chose, autrement.',
  audio: REC('rec-b2-07-bilan'),
  say: REFRAME,
  terms: ['bilan'],
  cards: [
    {
      head: 'Le compte d’une période', label: 'le futur antérieur',
      fr: fr(E(1946)), sub: rsOf(E(1946)),
      body: "Dix ans, puis le compte : tu te places à la fin de la période et tu regardes tout ce qui aura été vu. EN: a period counted from its end.",
    },
    {
      head: 'Une période qui finit aujourd’hui', label: 'le ton du bilan',
      fr: fr(E(1950)), sub: rsOf(E(1950)),
      body: "Même si l'année se termine ce soir, le futur antérieur donne le ton d'un bilan, un peu solennel. EN: the tone of a review.",
    },
    {
      head: 'Le même fait, au passé composé', label: 'plus neutre',
      fr: fr(E(1956)), sub: rsOf(E(1956)),
      body: "Cette année a été difficile : c'est vrai aussi, mais c'est un constat, pas un bilan. EN: a plain statement.",
    },
    {
      head: 'On aura tout vu', label: 'une exclamation',
      fr: fr(E(1959)), sub: rsOf(E(1959)),
      body: "Une expression toute faite pour dire l'agacement ou l'étonnement devant quelque chose d'inattendu. EN: a set phrase: now I have seen it all.",
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Fais le compte',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Un bilan', [
      it(E(1946), 'dix ans de quartier'),
      it(E(1947), 'trente ans d’enseignement'),
      it(E(1949), 'ce que le projet apporte'),
      it(E(1951), 'six pays traversés'),
    ], chk('Dans ces phrases, où se place la personne qui parle ?',
      ['à la fin de la période', 'au début de la période', 'en dehors du temps'], 0,
      'À la fin, pour regarder en arrière. EN: at the end.')),
    grp('Avec être, et au négatif', [
      it(E(1955), 'aller garde être'),
      it(E(1958), 'pronominal : battue'),
      it(E(1957), 'ne… pas autour de auras'),
      it(E(1952), 'une vie entière'),
    ], chk('« Ce semestre, nous … trois fois à Québec. »',
      ['serons allés', 'aurons allé'], 0,
      'Aller garde être. EN: aller keeps être.')),
    ctl('Le ton', '« Cette année aura été difficile » et « cette année a été difficile » :',
      ['la première sonne comme un bilan', 'elles n’ont rien de commun'], 0,
      'Même fait, mais le futur antérieur fait le compte depuis la fin. EN: the first sounds like a review.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bilan'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Cinq bilans',
  frSub: 'Lis, puis dis ce qui est compté',
  examples: [
    ex(PF(378), `${FUT_IRREG_REF} : le premier futur antérieur que tu as lu`),
    ex(E(1948), 'au bout du compte : tout aura été tenté'),
    ex(E(1954), 'trois ans, trois postes'),
    ex(E(1952), 'un bilan triste'),
    ex(E(1957), 'un bilan qui rassure'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bilan'],
};

const A9_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a9-focus',
  layer: 'core',
  sheetId: 'sheet-emplois',
  title: 'Quatre règles pour un bilan',
  frSub: 'Avant ton discours ou ta lettre',
  points: [
    "Pose la période : en dix ans, cette année, au bout du compte. EN: name the period.",
    "Place-toi à sa fin et compte : j'aurai vu, nous aurons traversé. EN: count from the end.",
    "Avec être et les pronominaux, accorde : nous serons allés, elle se sera battue. EN: agree with être.",
    "Pour un simple constat, le passé composé suffit : cette année a été difficile. EN: a plain statement takes the passé composé.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bilan', 'accord'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Compléter : le discours pour Mme Gagnon', TEXTE_A9, [
  { q: 'Complète : elle (accueillir) ; elle (voir) passer.', a: "Elle aura accueilli des milliers de lecteurs ; elle aura vu passer trois directeurs." },
  { q: 'Complète : elle (se battre), et elle (gagner).', a: "Elle se sera battue pour garder la bibliothèque ouverte, et elle aura gagné. Pronominal : être, accord avec elle." },
  { q: 'Complète la fin : des enfants qu’elle (initier) ; elle (être) un modèle.', a: "Des enfants qu'elle aura initiés à la lecture (que = des enfants, placé avant) ; elle aura été un modèle (être prend avoir)." },
  { q: 'Pourquoi un discours de départ choisit-il ce temps ?', a: "Parce qu'il se place à la fin d'une carrière et regarde tout en arrière : c'est le ton d'un bilan." },
], 'rec-b2-07-texte-a9', ['bilan']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le bilan', '« En dix ans, j’aurai vu grandir tout un quartier. » La personne se place…',
    ['à la fin des dix ans', 'au début des dix ans'], 0,
    'À la fin, et elle regarde en arrière. EN: at the end.'),
  ctl('Être', '« Ce semestre, nous … trois fois à Québec. »',
    ['aurons allé', 'serons allés'], 1,
    'Aller garde être. EN: être.'),
  ctl('L’expression', '« On aura tout vu. » exprime…',
    ['l’agacement ou l’étonnement', 'une promesse'], 0,
    'Une expression figée de surprise. EN: surprise or irritation.'),
], ['bilan']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'En dix ans, j’aurai vu',
    opener: {
      line: "Une carrière, une année, un voyage : ici tu te places à la fin d'une période et tu fais le compte de ce qui aura été fait. EN: A career, a year, a trip: here you stand at the end of a period and count what will have been done.",
      imageRef: 'lessons/futur-anterieur/act09.jpg',
    },
    sections: [],
    milestone: "Tu fais le bilan d'une période au futur antérieur, et tu sais quand un simple passé composé suffit. EN: You can review a period with the futur antérieur, and know when the passé composé is enough.",
    estScreens: 32, restPoints: ['a9-construire', 'a9-focus'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_CONSTRUIRE, A9_EXEMPLES, A9_FOCUS, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: AURAI OU AURAIS
 *
 *  The other half of lesson 2 in B2's act 7 (« j'aurai dû »): the s pair,
 *  the nous test, never a future after si, and the false leads (aurai + nom,
 *  sera signé, serai installé).
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'Le courriel de Sarah',
  frSub: 'Trois s mal placés',
  setting: 'Lausanne. Sarah relit avec son collègue Mehdi le courriel qu’elle va envoyer à son chef avant une semaine chargée.',
  bubbles: [
    { from: 'user', fr: "J'ai écrit : je vous promets que j'aurais terminé avant mercredi.", en: 'I wrote: I promise you that I would have finished before Wednesday.' },
    { from: 'coach', fr: "Avec un s, tu imagines une chose qui n'aura pas lieu. Ton chef va s'inquiéter.", en: 'With an s, you are imagining something that will not happen. Your boss will worry.', warn: 'aurais : le conditionnel' },
    { from: 'user', fr: "Alors j'aurai terminé, sans s. Et plus haut : j'aurai dû vous prévenir.", en: 'So j’aurai terminé, no s. And further up: j’aurai dû vous prévenir.' },
    { from: 'coach', fr: "Là, c'est l'inverse : un regret regarde derrière. J'aurais dû, avec un s.", en: 'There it is the other way round: a regret looks back. J’aurais dû, with an s.', warn: Cap(COND_PASSE_REF) },
    { from: 'user', fr: "Et à la fin : si j'aurai su que la réunion était avancée.", en: 'And at the end: si j’aurai su que la réunion était avancée.' },
    { from: 'coach', fr: "Après si, ni aurai ni aurais : si j'avais su.", en: 'After si, neither aurai nor aurais: si j’avais su.', warn: 'Après si' },
  ],
  closing: { fr: 'Aurai promet. Aurais imagine ou regrette. Et après si, jamais de futur.', en: 'Aurai promises. Aurais imagines or regrets. And after si, never a future.' },
  audio: REC('rec-b2-07-sarah'),
  say: REFRAME,
  terms: ['lettre'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-pieges',
  title: 'Une lettre, deux temps',
  frSub: 'Futur antérieur ou conditionnel passé',
  hint: 'Quatre cartes. Cherche le s, puis le sens.',
  audio: REC('rec-b2-07-lettre'),
  say: REFRAME,
  terms: ['lettre'],
  cards: [
    {
      head: 'Aurai : une promesse', label: 'le futur antérieur',
      fr: fr(E(1961)), sub: rsOf(E(1961)),
      body: "Un moment réel à venir : avant ton départ, ce sera fait. EN: a real future moment.",
    },
    {
      head: 'Aurais : ce qui n’a pas eu lieu', label: Cap(COND_PASSE_REF),
      fr: fr(E(1962)), sub: rsOf(E(1962)),
      body: `« ${B202_REFRAME} » Ici, l'appel a eu lieu : je n'ai pas fini. EN: ${B202_REFRAME_EN}`,
    },
    {
      head: 'Le test de nous', label: 'l’oreille tranche',
      fr: 'nous serons · nous serions',
      sub: '[noo suh-ROHⁿ] · [noo suh-RYOHⁿ]',
      body: "À la case je, beaucoup de gens prononcent aurai et aurais pareil. À la case nous, le i s'entend : passe à nous pour trancher. EN: switch to nous; the i is audible.",
    },
    {
      head: 'Après si', label: 'jamais de futur',
      fr: fr(E(1965)), sub: rsOf(E(1965)),
      body: "Pour ce qui sera fini, si prend le passé composé. Jamais si tu auras fini, jamais si tu aurais fini. EN: never a future after si.",
    },
  ],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-trier',
  layer: 'core',
  size: 'lg',
  title: 'Promesse, regret ou fausse piste',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Aurai, serons : un moment réel', [
      it(E(1961), 'avant ton départ'),
      it(E(1963), 'avant la nuit'),
      it(E(1970), 'avant l’aube'),
      it(E(1968), 'demain à cette heure-ci'),
    ], chk('Ces phrases parlent-elles de ce qui va vraiment arriver ?',
      ['oui', 'non'], 0,
      'Un moment réel à venir, sans s ni i. EN: a real future.')),
    grp('Aurais, serions : ce qui n’a pas eu lieu', [
      it(E(1962), 'sans cet appel'),
      it(E(1964), 'sans la panne'),
      it(E(1971), 'sans l’orage'),
      it(E(1969), 'sans ton aide'),
    ], chk('« Sans la panne, nous serions rentrés avant la nuit. » Sont-ils rentrés avant la nuit ?',
      ['non', 'oui'], 0,
      'La panne a tout changé. EN: they did not.')),
    grp('Les fausses pistes', [
      it(PF(549), 'aurai + un nom : futur d’avoir'),
      it(PF(465), 'auras faim : futur d’avoir'),
      it('fr.b1.faits-et-procedures.1049', 'sera signé : un passif'),
      it(PF(410), 'serai installé : un état'),
    ], chk('« Quand j’aurai le billet, je réserverai l’hôtel. » Aurai est…',
      ['le futur simple d’avoir', 'un futur antérieur'], 0,
      'Pas de participe : c’est le futur d’avoir. EN: no participle, so futur simple.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lettre', 'piste'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Promesse ou regret',
  frSub: 'Neuf phrases, une lettre de différence',
  lines: [
    ln(E(1961)), ln(E(1962)), ln(E(1963)), ln(E(1964)), ln(E(1965)),
    ln(E(1970)), ln(E(1971)), ln(E(1973)), ln(PF(549)),
  ],
  questions: [
    { q: 'Première phrase : le travail sera-t-il fini avant le départ ?', opts: ['oui', 'non'], correct: 0, why: 'Une promesse, un moment réel. EN: yes.' },
    { q: 'Deuxième phrase : le travail est-il fini ?', opts: ['non, à cause d’un appel', 'oui'], correct: 0, why: 'Sans cet appel : l’appel a tout arrêté. EN: no.' },
    { q: 'Troisième et quatrième phrases : laquelle est une promesse ?', opts: ['la troisième', 'la quatrième'], correct: 0, why: 'Serons, sans i. EN: serons.' },
    { q: 'Cinquième phrase : quel temps suit si ?', opts: ['le passé composé', 'le futur antérieur'], correct: 0, why: 'Si tu as fini : jamais de futur après si. EN: the passé composé.' },
    { q: 'Dernière phrase : ce qui suit aurai est-il un participe ?', opts: ['non, un nom', 'oui'], correct: 0, why: 'Aurai le billet : le futur d’avoir. EN: a noun follows.' },
  ],
  audio: REC('rec-b2-07-lettre-ecoute'),
  say: REFRAME,
  terms: ['lettre'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Un s qui change tout',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le s porte le sens',
    body: "À l'oral, j'aurai et j'aurais se confondent souvent. À l'écrit, sans s, tu promets ; avec s, tu imagines ou tu regrettes. Et après si, jamais de futur. EN: in writing, the s carries the meaning; never a future after si.",
  },
  cards: [
    trap(E(1961), 'une promesse', "J'aurais fini avant ton départ, promis.", 'Une promesse regarde un moment réel : aurai, sans s. EN: a promise takes aurai.'),
    trap(E(1962), 'l’appel a eu lieu', "Sans cet appel, j'aurai fini avant ton départ.", 'Sans pose une condition : aurais. EN: a condition, so aurais.'),
    trap(E(1963), 'un retour prévu', 'Nous serions rentrés avant la nuit, ne t’inquiète pas.', 'Un retour réel à venir : serons. EN: a real future.'),
    trap(E(1965), 'après si', 'Si tu auras fini avant midi, on pourra déjeuner ensemble.', 'Après si, jamais de futur : si tu as fini. EN: si takes the passé composé here.'),
    trap(E(1969), 'sans ton aide', "Sans ton aide, je n'aurai jamais fini à temps.", 'Ton aide a tout changé : aurais. EN: what would have happened.'),
    trap(E(1968), 'un moment réel', 'Demain, à cette heure-ci, tu aurais reçu ta réponse.', 'Demain à cette heure-ci est un moment réel : auras. EN: a real moment.'),
  ],
  drill: [
    { promptSay: 'Je te promets que j’… fini avant ton départ.', opts: ['aurai', 'aurais'], correct: 0 },
    { promptSay: 'Sans cet appel, j’… fini avant ton départ.', opts: ['aurais', 'aurai'], correct: 0 },
    { promptSay: 'Nous … rentrés avant la nuit, promis.', opts: ['serons', 'serions'], correct: 0 },
    { promptSay: 'Sans la panne, nous … rentrés avant la nuit.', opts: ['serions', 'serons'], correct: 0 },
    { promptSay: 'Si tu … avant midi, on pourra déjeuner ensemble.', opts: ['as fini', 'auras fini'], correct: 0 },
    { promptSay: 'Dès que tu … le contrat, signe-le.', opts: ['auras lu', 'aurais lu'], correct: 0 },
    { promptSay: 'J’… dû te prévenir plus tôt.', opts: ['aurais', 'aurai'], correct: 0 },
    { promptSay: 'Quand j’… le billet, je réserverai l’hôtel.', opts: ['aurai', 'aurais'], correct: 0 },
  ],
  steps: STEPS('Le s porte le sens', 'Ce que la mauvaise lettre raconte'),
  audio: REC('rec-b2-07-piege-lettre'),
  say: REFRAME,
  terms: ['lettre'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-pieges',
  title: 'Quatre repères pour ne plus hésiter',
  frSub: 'Aurai, aurais, et les fausses pistes',
  points: [
    "Une promesse, une échéance, un moment réel : aurai, serai, sans s. EN: a real future: aurai.",
    "Un regret, une condition avec sans ou à ta place : aurais, serais. EN: regret or condition: aurais.",
    "Après si, le passé composé pour ce qui sera fini, jamais un futur. EN: after si, never a future.",
    "Aurai suivi d'un nom, sera suivi d'un adjectif : ce n'est pas un futur antérieur. EN: no participle, no futur antérieur.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lettre', 'piste'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Corriger : le courriel de Sarah', TEXTE_A10, [
  { q: 'Corrige les deux premières phrases.', a: "J'aurais dû vous prévenir plus tôt (un regret, avec s) : je serai absente lundi (un fait à venir, sans s)." },
  { q: 'Corrige la troisième.', a: "Je vous promets que j'aurai terminé le dossier avant mercredi : une promesse, sans s." },
  { q: 'Corrige la quatrième.', a: "Si j'avais su que la réunion était avancée, je me serais organisée autrement : après si, le plus-que-parfait ; le conditionnel passé reste dans l'autre moitié." },
  { q: 'Corrige la dernière, puis relis les cinq formes justes.', a: `Dès que j'aurai reçu les chiffres, je vous les enverrai. Les cinq formes justes : ${TEXTE_A10_REPONSES.join(' ; ')}.` },
], 'rec-b2-07-texte-a10', ['lettre']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le s', '« J’aurai dû t’écrire » : que lit ton lecteur ?',
    ['une faute : un regret au futur', 'un regret poli'], 0,
    'Un regret regarde derrière : j’aurais dû, avec s. EN: a regret takes aurais.'),
  ctl('Après si', 'Laquelle est juste ?',
    ['Si tu as fini à midi, on déjeunera.', 'Si tu auras fini à midi, on déjeunera.'], 0,
    'Jamais de futur après si. EN: never a future after si.'),
  ctl('La fausse piste', '« Quand tu auras ton diplôme » : c’est…',
    ['le futur simple d’avoir', 'un futur antérieur'], 0,
    'Pas de participe : le futur d’avoir. EN: no participle.'),
], ['lettre', 'piste']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Aurai ou aurais',
    opener: {
      line: "Une lettre muette sépare une promesse d'un regret : ici tu places le s, et tu repères ce qui ressemble au futur antérieur sans l'être. EN: One silent letter separates a promise from a regret: here you place the s and spot the look-alikes.",
      imageRef: 'lessons/futur-anterieur/act10.jpg',
    },
    sections: [],
    milestone: "Tu choisis aurai ou aurais par le sens, tu ne mets jamais de futur après si, et tu ne confonds plus aurai le billet avec un futur antérieur. EN: You choose aurai or aurais by meaning and spot the false leads.",
    estScreens: 40, restPoints: ['a10-trier', 'a10-piege'],
  },
  sections: [A10_HISTOIRE, A10_CARTES, A10_TRIER, A10_ECOUTE, A10_PIEGE, A10_FOCUS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: TON PLAN, TES JALONS
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La lettre que tu vas imiter',
  frSub: 'Awa écrit à Awa, dans cinq ans',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'à temps partiel', en: 'part-time', note: 'Quelques heures par semaine, à côté des études.' },
    { word: 'changer de route', en: 'to change course', note: 'Prendre une autre direction dans sa vie.' },
    { word: 'dure', en: 'hard (on yourself)', note: 'Être dure avec soi-même : se juger trop sévèrement.' },
  ],
  questions: [
    { q: 'Global : à qui Awa écrit-elle, et pourquoi ?', a: "À elle-même, dans cinq ans, pour se rappeler d'où elle part et ce qu'elle se promet." },
    { q: 'Détail : que se promet-elle pour dans trois ans ?', a: "D'avoir obtenu son diplôme et de travailler dans un hôpital, peut-être à Sherbrooke." },
    { q: 'Pourquoi « j’aurai obtenu » mais « je travaillerai » dans la même phrase ?', a: "Dans trois ans, le diplôme sera derrière elle ; le travail à l'hôpital, lui, se passera à ce moment-là." },
    { q: 'Dans « tu auras sûrement eu de bonnes raisons », quel emploi reconnais-tu ?', a: "L'hypothèse : Awa imagine l'explication d'un changement qu'elle ne connaît pas encore." },
    { q: 'Position : quel ton Awa prend-elle avec elle-même à la fin ?', a: "Un ton bienveillant : elle ne se juge pas, elle valorise l'effort (ce qui compte, c'est que tu auras essayé)." },
  ],
  audio: REC('rec-b2-07-modele'),
  say: REFRAME,
  terms: ['jalon', 'bilan'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-plan',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Le plan, jalon par jalon',
  steps: [
    'Pose le point de départ : où tu en es aujourd’hui, au présent. EN: start from today, in the present.',
    'Fixe trois ou quatre jalons datés : d’ici décembre, dans trois ans, au plus tard en juin. EN: set dated markers.',
    'Pour chaque jalon, dis ce qui sera déjà fait (futur antérieur) et ce qui se passera (futur simple). EN: done by then, and happening then.',
    'Relie les étapes avec dès que, une fois que, après que. EN: link the steps with hinge words.',
    'Termine par un bilan ou une hypothèse : j’espère que tu auras…, tu auras sûrement… EN: end with a review or a guess.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jalon', 'charniere'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  sheetId: 'sheet-plan',
  title: 'Quatre phrases que tout plan contient',
  cases: [
    { situation: 'Tu poses un jalon daté', fr: fr(E(1981)), en: en(E(1981)) },
    { situation: 'Tu relies deux étapes', fr: fr(E(1982)), en: en(E(1982)) },
    { situation: 'Tu t’adresses à toi-même', fr: fr(E(1985)), en: en(E(1985)) },
    { situation: 'Tu termines par un bilan', fr: fr(E(1988)), en: en(E(1988)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jalon', 'bilan'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Ton entretien de fin d’année',
  frSub: 'Six tours, à voix haute',
  setting: 'Ta responsable, Mme Kouassi, fait le point avec toi sur l’année qui vient. Elle veut savoir où tu en seras à chaque étape.',
  turns: [
    {
      ai: 'Alors, où en serez-vous du projet à la fin du mois ?', en: 'So, where will you be with the project at the end of the month?',
      user: 'À la fin du mois, j’aurai terminé la première version.',
      userEn: 'By the end of the month, I will have finished the first version. (A dated marker: futur antérieur.)',
      alts: [
        { fr: 'D’ici la fin du mois, la première version sera prête.', en: 'By the end of the month, the first version will be ready. (Être plus a state: also right.)' },
        { fr: 'J’aurai fini la première version avant le trente.', en: 'I will have finished the first version before the thirtieth.' },
      ],
    },
    {
      ai: 'Et quand est-ce que vous lancerez les essais ?', en: 'And when will you start the tests?',
      user: 'Je lancerai les essais dès que l’équipe aura validé la maquette.',
      userEn: 'I will start the tests as soon as the team has approved the mock-up. (Finished first after dès que.)',
      alts: [
        { fr: 'Une fois que la maquette aura été validée, je lancerai les essais.', en: 'Once the mock-up has been approved, I will start the tests. (A passive futur antérieur.)' },
        { fr: 'Dès que j’aurai reçu l’accord de l’équipe.', en: 'As soon as I have had the team’s go-ahead.' },
      ],
    },
    {
      ai: 'Vous serez en congé en juillet, n’est-ce pas ?', en: 'You will be on leave in July, won’t you?',
      user: 'Oui, mais d’ici là, j’aurai formé ma remplaçante.',
      userEn: 'Yes, but by then I will have trained my replacement. (D’ici là: done before the leave.)',
      alts: [
        { fr: 'Oui, et avant de partir, j’aurai tout expliqué à Julie.', en: 'Yes, and before leaving I will have explained everything to Julie.' },
        { fr: 'Oui, je serai partie le quinze, mais tout sera prêt.', en: 'Yes, I will have left by the fifteenth, but everything will be ready. (Two futures side by side.)' },
      ],
    },
    {
      ai: 'Le client n’a pas répondu à notre dernier courriel. Pourquoi, à votre avis ?', en: 'The client has not answered our last email. Why, do you think?',
      user: 'Il aura été très occupé, ou il n’aura pas vu le message.',
      userEn: 'He must have been very busy, or he must not have seen the message. (A likely explanation of a past fact.)',
      alts: [
        { fr: 'Il a dû être débordé cette semaine.', en: 'He must have been swamped this week. (Devoir: nearly the same.)' },
        { fr: 'Son assistante aura oublié de le lui transmettre.', en: 'His assistant must have forgotten to pass it on.' },
      ],
    },
    {
      ai: 'Et si le projet prend du retard ?', en: 'And if the project falls behind?',
      user: 'Si nous avons pris du retard fin mai, je vous préviendrai tout de suite.',
      userEn: 'If we have fallen behind by the end of May, I will tell you at once. (After si, the passé composé, never a future.)',
      alts: [
        { fr: 'S’il y a du retard, je vous le dirai dès que je l’aurai vu.', en: 'If there is a delay, I will tell you as soon as I have seen it.' },
        { fr: 'Si le calendrier glisse, je vous écrirai le jour même.', en: 'If the schedule slips, I will write to you the same day.' },
      ],
    },
    {
      ai: 'Et dans un an, quel bilan aimeriez-vous faire ?', en: 'And in a year, what review would you like to make?',
      user: 'Dans un an, j’espère que nous aurons livré le projet et que j’aurai beaucoup appris.',
      userEn: 'In a year, I hope we will have delivered the project and that I will have learned a lot. (A review seen from its end.)',
      alts: [
        { fr: 'Cette année m’aura appris à travailler en équipe, j’espère.', en: 'This year will have taught me to work in a team, I hope.' },
        { fr: 'On aura tout essayé, et ça aura marché.', en: 'We will have tried everything, and it will have worked.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jalon', 'echeance', 'hypothese'],
};

const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Tes jalons pour ce qui vient',
  frSub: 'Mission écrite, format B2',
  brief: "Choisis un format. Soit un plan de projet (un déménagement, une formation, un lancement, un voyage) que tu envoies à ton équipe ou à un proche, soit une lettre à toi-même, à ouvrir dans un an ou dans cinq ans. Dans les deux cas, pose des jalons datés et dis ce qui sera déjà fait à chacun.",
  briefEn: 'Choose a format. Either a project plan (a move, a training course, a launch, a trip) sent to your team or to someone close, or a letter to yourself, to open in one year or in five. Either way, set dated markers and say what will already be done by each one.',
  produce: "Écris un texte de 180 à 250 mots : au moins trois jalons datés (d'ici, avant, dans, au plus tard), au moins cinq futurs antérieurs (dont un avec être et un pronominal), au moins deux charnières (quand, dès que, une fois que, après que), le futur simple à côté, et une fin avec un bilan ou une hypothèse.",
  responseSpec: { kind: 'text', minWords: 180, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : Un plan ou une lettre complète, avec au moins trois jalons datés, ce qui sera fait à chacun, et une fin en bilan ou en hypothèse. Le format choisi est respecté. Entre 180 et 250 mots.",
          '2 : Le texte existe, mais les jalons sont vagues, ou la fin manque, ou la longueur sort un peu des limites.',
          '1 : Une liste d’envies sans dates ni étapes, ou un texte beaucoup trop court.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          "3 : Le lecteur sait toujours où il est dans le temps : chaque jalon est posé, ce qui est fini d'abord est au futur antérieur, ce qui suit au futur simple, et les charnières (dès que, une fois que) relient les étapes.",
          '2 : Le plan se suit, mais un jalon manque ou deux étapes se mélangent.',
          '1 : On ne comprend pas dans quel ordre les choses vont se passer.',
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          "2 : Tu emploies le futur antérieur avec avoir ET être, un pronominal, au moins deux charnières, une échéance (d'ici, au plus tard) et un bilan ou une hypothèse (tu auras sûrement…), à côté du futur simple.",
          '1 : Le futur antérieur est là, mais toujours avec le même verbe ou la même tournure, sans charnière ni bilan.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          "2 : Les auxiliaires, les accords et le s de aurai sont presque toujours justes ; aucun futur après si ; aucun passé composé pour une chose encore à venir après quand ou dès que.",
          "1 : Des erreurs fréquentes (j'aurai allé, quand j'ai fini pour demain, j'aurais pour une promesse, si j'aurai) gênent parfois la lecture.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          "2 : Le ton convient au format : un courriel de travail clair et chaleureux, ou une lettre personnelle sincère, sans langage de SMS.",
          '1 : Le texte sonne comme une liste administrative sans destinataire, ou comme une conversation transcrite (du coup, genre, t’as fini).',
        ],
      },
    ],
  },
  scaffold: [
    "D'ici la fin du mois,",
    'Avant l’été,',
    "Dès que j'aurai",
    'Une fois que nous aurons',
    'Quand tu liras ces lignes,',
    'Dans un an,',
    'Tu auras sûrement',
    "J'espère que",
  ],
  modelAnswer: "Objet : le déménagement du bureau, étape par étape. Bonjour à toutes et à tous, voici le calendrier que je vous propose pour que notre déménagement à Québec se passe sans stress. D'ici vendredi, j'aurai reçu les trois devis des déménageurs, et je vous enverrai le meilleur. Dès que nous aurons signé le contrat, Karim réservera l'ascenseur de l'immeuble pour le douze mars. Avant la fin du mois, chacun aura trié ses dossiers : ce qui n'aura pas été classé partira aux archives. Le dix mars au plus tard, l'équipe informatique aura débranché et étiqueté tous les ordinateurs. Le jour du déménagement, les camions arriveront à huit heures ; à midi, les déménageurs auront tout chargé, et nous déjeunerons ensemble dans les nouveaux locaux. Une fois que les meubles auront été montés, Julie et moi vérifierons chaque bureau. Si un carton manque, prévenez-moi dès que vous l'aurez remarqué. Le lundi suivant, nous nous serons tous installés, et l'accueil rouvrira à neuf heures. Je sais que ce calendrier est serré. Pourtant, dans un an, quand nous regarderons en arrière, ce déménagement nous aura sans doute rapprochés, et nous aurons gagné des bureaux plus lumineux. Merci d'avance à chacun. Amélie\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : un plan de projet complet, six jalons datés (d'ici vendredi, avant la fin du mois, le dix mars au plus tard, à midi, le lundi suivant, dans un an) et une fin en bilan.\n2. Cohérence : l'ordre des étapes est clair ; dès que et une fois que relient ce qui est fini d'abord à ce qui suit ; pourtant ouvre la conclusion.\n3. Étendue : avoir et être (aurai reçu, nous serons installés), un pronominal accordé (nous nous serons tous installés), un passif (auront été montés), une hypothèse (nous aura sans doute rapprochés), le futur simple à côté.\n4. Correction : aucun futur après si (si un carton manque), aucun s de conditionnel dans une promesse, des accords justes.\n5. Registre : un courriel professionnel courant, direct et chaleureux, sans familiarité.",
  modelAnswerEn: "Subject: the office move, step by step. Hello everyone, here is the schedule I suggest so that our move to Québec City goes without stress. By Friday, I will have received the three movers' quotes, and I will send you the best one. As soon as we have signed the contract, Karim will book the building's lift for the twelfth of March. Before the end of the month, everyone will have sorted their files: anything not filed will go to the archives. By the tenth of March at the latest, the IT team will have unplugged and labelled every computer. On moving day, the lorries will arrive at eight; by noon the movers will have loaded everything, and we will have lunch together in the new premises. Once the furniture has been assembled, Julie and I will check every office. If a box is missing, let me know as soon as you have noticed. By the following Monday, we will all have settled in, and reception will reopen at nine. I know this schedule is tight. Yet in a year, when we look back, this move will no doubt have brought us closer, and we will have gained brighter offices. Thanks in advance to everyone. Amélie. The marker's notes (not counted): 1. Task: a complete project plan, six dated markers and a closing review. 2. Coherence: a clear order; dès que and une fois que link what is finished first to what follows; pourtant opens the conclusion. 3. Range: avoir and être, an agreed pronominal, a passive, a guess, the futur simple alongside. 4. Accuracy: no future after si, no conditional s in a promise, correct agreements. 5. Register: an everyday professional email, direct and warm, never familiar.",
  watchFor: [
    { pattern: 'Every step in the futur simple, so nothing is placed before its marker and the reader cannot tell what will already be done.', criterion: 'coherence', feedback: 'Pose tes jalons, puis mets au futur antérieur ce qui sera déjà fait : d’ici vendredi, j’aurai reçu les devis.', ref: 'a1-reperer' },
    { pattern: 'The wrong auxiliary: j’aurai allé, elle aura arrivé, je serai terminé.', criterion: 'correction', feedback: 'Garde l’auxiliaire du passé composé : je serai allé, elle sera arrivée, j’aurai terminé.', ref: 'a2-erreurs' },
    { pattern: 'Agreement missed or invented, or a pronominal built with avoir: elle sera arrivé, les photos que j’aurai pris, je m’aurai installé.', criterion: 'correction', feedback: 'Être accorde avec le sujet, avoir avec un complément placé avant ; un pronominal prend être.', ref: 'a3-piege' },
    { pattern: 'The futur simple for what will already be done at the marker, or the futur antérieur for what happens at it.', criterion: 'etendue', feedback: 'Au jalon : futur simple. Déjà fait avant lui : futur antérieur.', ref: 'a4-piege' },
    { pattern: 'Après que with the subjunctive (après qu’il soit parti), or no futur antérieur after dès que, une fois que for a step finished first.', criterion: 'correction', feedback: 'Après que prend l’indicatif : après qu’il sera parti. Fini d’abord : dès que j’aurai signé.', ref: 'a5-erreurs' },
    { pattern: 'The English present perfect copied after quand or dès que for something still to come: quand j’ai fini, je vous enverrai.', criterion: 'correction', feedback: 'Une chose à venir : quand j’aurai fini. Le passé composé seulement pour une habitude.', ref: 'a6-piege' },
    { pattern: 'Jusqu’à for a deadline (jusqu’à vendredi, j’aurai fini), or pas encore split up.', criterion: 'correction', feedback: 'By Friday se dit d’ici vendredi ; pas encore reste soudé, entre l’auxiliaire et le participe.', ref: 'a7-erreurs' },
    { pattern: 'A futur simple used to guess at a past fact (il oubliera for he must have forgotten).', criterion: 'etendue', feedback: 'Pour expliquer un fait passé : il aura oublié, ou il a dû oublier.', ref: 'a8-erreurs' },
    { pattern: 'The conditional s in a promise (j’aurais terminé avant mercredi), or j’aurai dû for a regret.', criterion: 'correction', feedback: 'Une promesse : aurai, sans s. Un regret : j’aurais dû, avec s. Au doute, passe à nous.', ref: 'a10-piege' },
    { pattern: 'A future after si: si j’aurai fini, si tout sera prêt.', criterion: 'correction', feedback: 'Après si, le présent ou le passé composé : si j’ai fini, si tout est prêt.', ref: 'a10-cartes' },
    { pattern: 'No closing review or guess, fewer than three dated markers, or a body outside 180 to 250 words.', criterion: 'tache', feedback: 'Ajoute un jalon daté et termine par un bilan ou une hypothèse : dans un an, nous aurons…', ref: 'a11-plan' },
    { pattern: 'A list of dated tasks with no reader in mind, or a chatty spoken register (du coup, t’as fini, genre).', criterion: 'registre', feedback: 'Adresse-toi à quelqu’un : ton équipe ou toi-même, dans un ton clair et chaleureux.', ref: 'a9-cartes' },
  ],
  graderNotes: [
    'Count the words of the body only; a subject line, greeting and signature do not count. 180 to 250 with 10% tolerance (162 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'Judge each future by its meaning against its marker, not by the conjunction. Where both futures are correct with different meanings (« d’ici vendredi, je rendrai / j’aurai rendu le rapport »), accept either.',
    'Relaxed spoken « quand t’as fini » is accepted only inside quoted speech. In the body, a passé composé for a future completion after quand, dès que or une fois que costs one « correction » point once, not per occurrence.',
    '« Après qu’il soit parti » is widespread in speech: mark it once under « correction », not per occurrence. Après que + futur antérieur is the target.',
    'A correct conditionnel passé for a regret (j’aurais dû) is lesson 2 in B2: it gains nothing and loses nothing. A conditional form for a promise (j’aurais terminé) is scored as an error.',
    'Accept the passive futur antérieur (aura été validé) and « je vais avoir fini » in a letter to oneself; the latter earns no range credit.',
    'Writer gender is unknown: judge être and pronominal agreement for internal consistency only. On with a plural or feminine agreement is correct.',
    'Do not score the passé simple if a learner uses it: it is lesson 8 in B2 and recognition only.',
    'Accept regional vocabulary and settings (Québec, Belgium, Switzerland, West Africa): septante and nonante, fin de semaine for week-end, courriel and mail.',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 2 du B2 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jalon', 'echeance', 'bilan'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes jalons à voix haute',
  frSub: 'Le moment, puis ce qui sera fait',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jalon', 'ligne'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-forme',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la forme', v: 'aurai, serai + participe', say: fr(E(1835)),
      detail: { title: 'La forme', body: "L'auxiliaire du passé composé, au futur, puis le participe. EN: passé composé auxiliary, in the future.", say: fr(E(1827)) } },
    { k: 'la ligne', v: 'au jalon, ou déjà fait', say: fr(E(1861)),
      detail: { title: 'La ligne', body: "Futur simple au jalon ou en cours ; futur antérieur pour ce qui sera fait avant. EN: at the marker, or done before it.", say: fr(E(1860)) } },
    { k: 'les charnières', v: 'fini avant : futur antérieur', say: fr(E(1878)),
      detail: { title: 'Les charnières', body: "Quand, dès que, une fois que, après que + indicatif : ce qui est fini d'abord. EN: finished first after the hinge word.", say: fr(E(1893)) } },
    { k: 'l’anglais', v: 'when you’ve : quand tu auras', say: fr(E(1899)),
      detail: { title: 'Le calque', body: "Le present perfect anglais devient un futur antérieur ; quand j'ai fini reste pour les habitudes. EN: present perfect > futur antérieur.", say: fr(E(1898)) } },
    { k: 'les emplois', v: 'échéance, hypothèse, bilan', say: fr(E(1914)),
      detail: { title: 'Les emplois', body: "D'ici vendredi, j'aurai rendu ; il aura oublié ; en dix ans, j'aurai vu. EN: deadline, guess, review.", say: fr(E(1930)) } },
    { k: 'le s', v: 'aurai promet, aurais imagine', say: fr(E(1961)),
      detail: { title: 'Le s', body: "Aurai pour une promesse, aurais pour un regret ou une condition ; jamais de futur après si. EN: the s carries the meaning.", say: fr(E(1962)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire', 'charniere', 'lettre'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu construis le futur antérieur avec les deux auxiliaires, tu accordes son participe, tu le places à côté du futur simple autour d'un jalon, après quand, dès que et une fois que, contre le present perfect anglais, pour promettre une échéance, supposer une explication et faire un bilan. Le piège qui reste, c'est la lettre muette : aurai et aurais se prononcent pareil, et la main écrit l'un pour l'autre. Avant l'examen, reprends ton texte et souligne chaque aurai ou aurais. Pour chacun, passe à nous dans ta tête : aurons ou aurions. Si le sens dit une promesse, pas de s. EN: Underline every aurai or aurais and test it with nous; a promise takes no s.",
  stats: [
    { k: 'La forme', v: 'aurai ou serai, puis le participe' },
    { k: 'Le jalon', v: 'un moment à venir, déjà posé' },
    { k: 'Les emplois', v: 'échéance, hypothèse, bilan' },
    { k: 'Le s', v: 'aurai promet, aurais imagine' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 1 to 10, a round that
 *  recycles lessons 5, 6, 7 and 18 in B1 and 1 and 2 in B2 (named in each
 *  question), and an exam-format round (TCF, DELF B2 and TEF items).
 *  `fold()` strips accents, commas, apostrophes and hyphens, so every typed
 *  answer turns on the auxiliary, the tense, the s or an agreement LETTER. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const MESSAGE_TEF = "Bonjour, ici Marc Dubois, de l'entreprise Dubois et fils. Je vous rappelle au sujet de votre salle de bains. D'ici jeudi, je vous aurai envoyé le devis par courriel. Dès que vous l'aurez signé, nous fixerons la date des travaux, sans doute au début du mois prochain. Bonne journée.";

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-jalon', label: 'Le jalon', targets: ['aucun-jalon'],
      questions: [
        mc('« Vendredi à neuf heures, je terminerai la présentation. » À neuf heures, la présentation est…', ['en train d’être finie', 'déjà finie'], 0, 'Le futur simple : le travail se fait au jalon. EN: it happens at nine.', 'a1-scene'),
        mc('« Quand nous arriverons, le film aura commencé. » Verrez-vous le début ?', ['non', 'oui', 'on ne peut pas savoir'], 0, 'Le début sera derrière votre arrivée. EN: it will have started.', 'a1-reperer'),
        tI('Mets le verbe au temps qui dit « déjà fait ».', 'Quand tu rentreras, je (préparer) le dîner.', fr(E(1810)), 'Le dîner sera prêt avant ton retour. EN: ready before you get back.', 'a1-reperer'),
        tI('Mets le verbe au futur antérieur.', 'Lundi soir, nous (valider) les maquettes.', fr(E(1802)), 'Lundi soir sert de jalon. EN: Monday evening is the marker.', 'a1-lecture'),
        mc('Dans le courriel de Sophie, « nous aurons tout installé » se mesure à partir de…', ['l’arrivée du client vendredi', 'le moment où elle écrit', 'lundi soir'], 0, 'Vendredi à neuf heures est le jalon. EN: the client’s arrival.', 'a1-lecture'),
        eS('Quand vous arriverez, nous installons tout.', fr(E(1804)), 'L’installation sera finie avant votre arrivée. EN: done before you arrive.', 'a1-usages'),
        lC('Écoute. Le dîner sera-t-il prêt à ton retour ?', fr(E(1809)), ['non, on le prépare à ce moment-là', 'oui'], 0, 'Deux futurs simples vont ensemble. EN: they happen together.', 'a1-reperer'),
        lC('Écoute. Qu’est-ce qui aura lieu en premier ?', fr(E(1811)), ['le début du film', 'votre arrivée'], 0, 'Aura commencé : avant l’arrivée. EN: the film starts first.', 'a1-scene'),
      ],
    },
    {
      id: 'r2-forme', label: 'La forme', targets: ['auxiliaire-faux'],
      questions: [
        mc('Aller, avec je, au futur antérieur :', ['je serai allé', 'j’aurai allé', 'j’aurais allé'], 0, 'Aller garde être. EN: aller keeps être.', 'a2-erreurs'),
        mc('Terminer, avec elle :', ['elle sera terminée', 'elle aura terminé'], 1, 'Terminer prend avoir. EN: terminer takes avoir.', 'a2-construire'),
        tI('Mets au futur antérieur.', 'Ils (faire) le plus dur.', fr(E(1829)), 'Faire : avoir, participe fait. EN: avoir, fait.', 'a2-table'),
        tI('Mets au futur antérieur.', 'Tu (recevoir) ma réponse avant midi.', fr(E(1830)), 'Recevoir : avoir, participe reçu. EN: reçu.', 'a2-table'),
        tI('Mets au futur antérieur.', 'Je (être) absente trois semaines.', fr(E(1832)), 'Être se conjugue avec avoir. EN: être takes avoir.', 'a2-construire'),
        eS('Demain à midi, j’aurais terminé.', "Demain à midi, j'aurai terminé.", 'Un moment réel à venir : aurai, sans s. EN: aurai.', 'a2-erreurs'),
        eS('Elle sera terminé son rapport ce soir.', 'Elle aura terminé son rapport ce soir.', 'Terminer prend avoir. EN: avoir.', 'a2-erreurs'),
        lC('Écoute. Quel auxiliaire entends-tu ?', fr(E(1831)), ['être', 'avoir'], 0, 'Rester garde être. EN: être.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-accords', label: 'Les accords', targets: ['accord-oublie'],
      questions: [
        mc('« Mes cousins seront … dimanche. »', ['reparti', 'repartis', 'reparties'], 1, 'Être : accord avec cousins, masculin pluriel. EN: plural subject.', 'a3-cartes'),
        mc('« Les photos que tu auras … »', ['pris', 'prises'], 1, 'Que = les photos, placé avant avoir. EN: que placed before.', 'a3-construire'),
        mc('« Elles auront … leurs places. »', ['réservé', 'réservées'], 0, 'Avoir ne s’accorde jamais avec le sujet. EN: never with the subject.', 'a3-piege'),
        tI('Accorde le participe.', 'Les documents que vous aurez (envoyer) seront archivés.', fr(E(1852)), 'Que = les documents : envoyés. EN: masculine plural object before.', 'a3-construire'),
        tI('Mets au futur antérieur.', 'Elle (se lever) à l’aube.', fr(E(1848)), 'Pronominal : être, accord avec elle. EN: levée.', 'a3-cartes'),
        eS('Ils se seront téléphonés entre-temps.', fr(E(1850)), 'Se veut dire l’un à l’autre : pas d’accord. EN: no agreement.', 'a3-piege'),
        eS('Les filles seront rentré pour le dîner.', fr(E(1856)), 'Filles : féminin pluriel. EN: rentrées.', 'a3-piege'),
        lC('Écoute. Pourquoi le participe s’accorde-t-il ?', fr(E(1845)), ['que reprend la maison, placé avant', 'le sujet est ils'], 0, 'Avoir : le complément placé avant. EN: the object placed before.', 'a3-cartes'),
      ],
    },
    {
      id: 'r4-ligne', label: 'Deux futurs', targets: ['deux-futurs'],
      questions: [
        mc('« À vingt heures, je … : ne passe pas, il n’y aura personne. »', ['serai parti', 'partirai'], 0, 'Déjà parti avant le jalon. EN: already gone.', 'a4-cartes'),
        mc('« À vingt heures, je … : passe me dire au revoir à la porte. »', ['partirai', 'serai parti'], 0, 'Le départ a lieu au jalon. EN: at eight exactly.', 'a4-cartes'),
        tI('Mets le verbe au bon futur : il fera déjà jour à l’atterrissage.', 'Quand l’avion atterrira, le soleil (se lever).', fr(E(1865)), 'Le lever est derrière l’atterrissage. EN: the sun is already up.', 'a4-trier'),
        tI('Mets le verbe au bon futur : tu verras le train partir.', 'Le train (partir) quand tu arriveras à la gare.', fr(E(1875)), 'Le départ a lieu au jalon. EN: it leaves as you arrive.', 'a4-piege'),
        mc('Sur la ligne du temps, le futur antérieur se place…', ['avant le jalon', 'sur le jalon', 'après le jalon'], 0, 'Derrière le jalon. EN: before it.', 'a4-hacks'),
        eS('Quand tu liras ce message, j’aurai été dans le train.', fr(E(1867)), 'Un état en cours : je serai dans le train. EN: a state under way.', 'a4-piege'),
        lC('Écoute. Si tu sonnes à vingt heures, quelqu’un t’ouvre-t-il ?', fr(E(1861)), ['non', 'oui'], 0, 'Serai parti : avant le jalon. EN: nobody.', 'a4-ecoute'),
        lC('Écoute. Qu’est-ce qui vient en premier ?', fr(E(1873)), ['le rangement', 'le coucher'], 0, 'Aurai rangé, puis me coucherai. EN: tidying first.', 'a4-trier'),
      ],
    },
    {
      id: 'r5-charnieres', label: 'Les charnières', targets: ['charniere-plate'],
      questions: [
        mc('« Quand tu … , appelle-moi. » Tu appelles après avoir fini.', ['auras fini', 'finis'], 0, 'Fini d’abord : futur antérieur. EN: finished first.', 'a5-construire'),
        mc('« Quand je … ton mémoire, je prendrai des notes. » Tu notes en lisant.', ['lirai', 'aurai lu'], 0, 'En même temps : futur simple. EN: at the same time.', 'a5-construire'),
        mc('« Après qu’il … parlé, tu poseras tes questions. »', ['aura', 'ait', 'avait'], 0, 'Après que prend l’indicatif. EN: indicative after après que.', 'a5-table'),
        tI('Mets au bon temps : la vente d’abord.', 'Dès que nous (vendre) l’appartement, nous déménagerons.', fr(E(1889)), 'La vente sera finie avant le déménagement. EN: the sale comes first.', 'a5-construire'),
        tI('Mets au bon temps.', 'Lorsque les invités (partir), nous rangerons.', fr(E(1879)), 'Partir garde être, et le départ vient d’abord. EN: seront partis.', 'a5-table'),
        eS('Tant que tu n’as pas rendu le dossier, tu ne seras pas payé.', fr(E(1884)), 'Les deux moitiés regardent devant. EN: both halves look ahead.', 'a5-erreurs'),
        eS('Une fois que les enfants se sont endormis, on regardera le film.', fr(E(1890)), 'Le sommeil des enfants est à venir. EN: still to come.', 'a5-erreurs'),
        lC('Écoute. Qu’est-ce qui aura lieu en premier ?', fr(E(1881)), ['la signature', 'le début du travail'], 0, 'Aura signé, puis commencera. EN: signing first.', 'a5-table'),
      ],
    },
    {
      id: 'r6-anglais', label: 'Le piège de l’anglais', targets: ['calque-anglais'],
      questions: [
        mc('When you’ve finished, call me.', ['Quand tu auras fini, appelle-moi.', 'Quand tu as fini, appelle-moi.', 'Quand tu finis, appelle-moi.'], 0, 'Une fin à venir : futur antérieur. EN: a future completion.', 'a6-cartes'),
        mc('Every evening, when I’ve finished my day, I walk home.', [fr(E(1898)), "Quand j'aurai fini ma journée, je rentre à pied."], 0, 'Une habitude : passé composé et présent. EN: a habit.', 'a6-cartes'),
        mc('As soon as I’ve had the results, I’ll call you.', [fr(E(1906)), "Dès que j'ai eu les résultats, je t'appellerai."], 0, 'Les résultats arrivent plus tard : aurai eu. EN: futur antérieur.', 'a6-piege'),
        tI('Traduis : once you’ve read the contract, sign at the bottom.', 'Une fois que tu (lire) le contrat, signe en bas.', fr(E(1901)), 'La lecture est à venir. EN: auras lu.', 'a6-construire'),
        tI('Traduis : let me know when you’ve got home.', 'Préviens-moi quand tu (rentrer).', fr(E(1902)), 'Rentrer garde être : seras rentré. EN: être.', 'a6-piege', ['Préviens-moi quand tu seras rentrée.']),
        eS('Je t’écrirai quand j’ai trouvé un appartement.', fr(E(1904)), 'La recherche est à venir : aurai trouvé. EN: still to come.', 'a6-piege'),
        eS('Dès que tu as payé, tu recevras un reçu.', fr(E(1900)), 'Le paiement est à venir : auras payé. EN: auras payé.', 'a6-piege'),
        lC('Écoute. Cette phrase parle-t-elle d’une habitude ?', fr(E(1898)), ['oui', 'non, de demain'], 0, 'Passé composé et présent : tous les jours. EN: a habit.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-echeances', label: 'D’ici vendredi', targets: ['echeance-floue'],
      questions: [
        mc('By Friday, I will have handed in the report.', [fr(E(1914)), "Jusqu'à vendredi, j'aurai rendu le rapport."], 0, 'By se dit d’ici. EN: d’ici, not jusqu’à.', 'a7-erreurs'),
        mc('« Au plus tard lundi, vous aurez reçu la facture. » La facture arrive…', ['lundi ou avant', 'après lundi'], 0, 'Au plus tard : pas un jour de plus. EN: Monday at the latest.', 'a7-table'),
        mc('« En une semaine, ils auront repeint l’appartement. » En dit…', ['le temps qu’il faut', 'le moment où ça commence'], 0, 'En donne la durée du travail. EN: the time it takes.', 'a7-table'),
        tI('Mets au futur antérieur.', 'D’ici jeudi, nous (fixer) une date.', fr(E(1922)), 'D’ici jeudi : avant la limite. EN: by Thursday.', 'a7-construire'),
        tI('Mets au futur antérieur.', 'Avant l’été, elle (passer) son permis.', fr(E(1923)), 'Passer un examen : avoir. EN: avoir.', 'a7-construire'),
        eS('Lundi, je n’aurai encore pas vu le dossier.', fr(E(1926)), 'Pas encore reste soudé. EN: pas encore together.', 'a7-erreurs'),
        eS('J’aurai rentré avant minuit, promis.', fr(E(1920)), 'Rentrer garde être. EN: être.', 'a7-erreurs', ['Je serai rentré avant minuit, promis.']),
        lC('Écoute. Où seront-ils demain à cette heure-ci ?', fr(E(1927)), ['à Dakar', 'dans l’avion'], 0, 'Aurons atterri : déjà au sol. EN: already landed.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-hypothese', label: 'Il aura oublié', targets: ['hypothese-futur'],
      questions: [
        mc('« Il n’est pas venu : il aura oublié. » La personne qui parle…', ['suppose', 'sait', 'promet'], 0, 'Une explication probable. EN: a guess.', 'a8-cartes'),
        mc('Quelle phrase explique un retard qui a déjà eu lieu ?', ['Le train aura eu du retard.', 'Le train aura du retard.'], 0, 'Avec eu : une supposition sur le passé. EN: aura eu.', 'a8-erreurs'),
        mc('Quelle phrase dit presque la même chose que « il aura oublié » ?', ['Il a dû oublier.', 'Il oubliera.', 'Il aurait dû oublier.'], 0, 'Devoir au passé composé : la même supposition. EN: il a dû.', 'a8-cartes'),
        tI('Fais une supposition au futur antérieur.', 'Elle (se tromper) de jour.', fr(E(1931)), 'Pronominal : être, accord avec elle. EN: trompée.', 'a8-trier'),
        tI('Fais une supposition au futur antérieur.', 'Quelqu’un (laisser) la porte ouverte.', fr(E(1938)), 'Avoir, la porte vient après : laissé. EN: no agreement.', 'a8-trier'),
        eS('Ils se seront disputé, encore une fois.', fr(E(1944)), 'Se est complément direct : disputés. EN: agreement with ils.', 'a8-trier'),
        eS('Il n’est pas venu : il oubliera.', fr(E(1930)), 'L’oubli a déjà eu lieu : aura oublié. EN: a past fact.', 'a8-erreurs'),
        lC('Écoute. Cette phrase parle-t-elle du passé ou de l’avenir ?', fr(E(1936)), ['de l’avenir', 'du passé'], 0, 'Oubliera : une prédiction. EN: the future.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-bilan', label: 'Le bilan', targets: ['bilan-plat'],
      questions: [
        mc('« En dix ans, j’aurai vu grandir tout un quartier. » La personne se place…', ['à la fin des dix ans', 'au début des dix ans'], 0, 'À la fin, et elle regarde en arrière. EN: at the end.', 'a9-cartes'),
        mc('« On aura tout vu. » exprime…', ['l’agacement', 'une promesse', 'une prédiction'], 0, 'Une expression figée de surprise. EN: irritation or surprise.', 'a9-cartes'),
        mc('Quelle phrase sonne comme un bilan de discours ?', ['Cette année aura été difficile pour tout le monde.', 'Cette année sera difficile pour tout le monde.'], 0, 'Le futur antérieur compte depuis la fin. EN: a review.', 'a9-construire'),
        tI('Mets au futur antérieur.', 'En trois ans, elle (changer) trois fois de poste.', fr(E(1954)), 'Le compte à la fin des trois ans. EN: aura changé.', 'a9-construire'),
        tI('Mets au futur antérieur.', 'Ce semestre, nous (aller) trois fois à Québec.', fr(E(1955)), 'Aller garde être. EN: serons allés.', 'a9-construire', ['Ce semestre, nous serons allées trois fois à Québec.']),
        eS('Jusqu’au bout, elle se sera battu.', fr(E(1958)), 'Pronominal, accord avec elle : battue. EN: battue.', 'a9-focus'),
        eS('Ce projet m’aurait beaucoup appris.', fr(E(1949)), 'Un bilan, pas une condition : aura. EN: aura.', 'a9-cartes'),
        lC('Écoute. Ce bilan est-il positif ?', fr(E(1957)), ['oui', 'non'], 0, 'Tu n’auras pas perdu ton temps. EN: yes.', 'a9-exemples'),
      ],
    },
    {
      id: 'r10-lettre', label: 'Aurai ou aurais', targets: ['aurai-aurais'],
      questions: [
        mc('Laquelle est une promesse ?', ["J'aurai fini avant ton départ.", "J'aurais fini avant ton départ."], 0, 'Sans s : un moment réel à venir. EN: aurai.', 'a10-cartes'),
        mc('Laquelle est juste ?', ["J'aurais dû te prévenir.", "J'aurai dû te prévenir."], 0, 'Un regret : avec s. EN: aurais dû.', 'a10-piege'),
        mc('Laquelle est juste ?', [fr(E(1965)), 'Si tu auras fini avant midi, on pourra déjeuner ensemble.'], 0, 'Jamais de futur après si. EN: never a future after si.', 'a10-cartes'),
        mc('« Quand j’aurai le billet » : aurai est…', ['le futur simple d’avoir', 'un futur antérieur'], 0, 'Pas de participe. EN: no participle.', 'a10-trier'),
        tI('Complète avec serons ou serions.', 'Sans la panne, nous (être) rentrés avant la nuit.', fr(E(1964)), 'Une condition : serions. EN: serions.', 'a10-trier'),
        tI('Complète : un moment réel à venir.', 'Demain, à cette heure-ci, tu (recevoir) ta réponse.', fr(E(1968)), 'Un moment réel : auras reçu. EN: auras.', 'a10-piege'),
        eS("Sans ton aide, je n'aurai jamais fini à temps.", fr(E(1969)), 'Ton aide a tout changé : aurais. EN: aurais.', 'a10-piege'),
        lC('Écoute. Est-ce une promesse ?', fr(E(1963)), ['oui', 'non, un regret'], 0, 'Serons, sans i. EN: a promise.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(FUT_FORM_REF)} : le futur de parler, avec nous :`, ['nous parlerons', 'nous parlions', 'nous parlerions'], 0, `« ${B105_REFRAME} » EN: ${B105_REFRAME_EN}`, 'a2-rappel'),
        tI(`${Cap(FUT_IRREG_REF)} : le futur de être, avec je.`, 'je (être)', 'je serai', `« ${B106_REFRAME} » EN: ${B106_REFRAME_EN}`, 'a2-rappel'),
        tI(`${Cap(FUT_IRREG_REF)} : le futur de avoir, avec nous.`, 'nous (avoir)', 'nous aurons', 'Aur-, puis -ons. EN: aur- plus -ons.', 'a2-table'),
        mc(`${Cap(FUT_USAGE_REF)} : « Quand j’… à Bruxelles, je t’enverrai un message. »`, ['arriverai', 'arrive'], 0, `« ${B107_REFRAME} » EN: ${B107_REFRAME_EN}`, 'a4-cartes'),
        mc(`${Cap(FUT_USAGE_REF)} : « Si j’ai le temps, je passerai te voir. » Après si…`, ['le présent', 'le futur'], 0, 'Jamais de futur après si. EN: never a future after si.', 'a10-cartes'),
        mc(`${Cap(PASSIF_REF)} : « Le contrat sera signé demain. » C’est…`, ['un futur passif', 'un futur antérieur'], 0, 'Le contrat subit l’action demain. EN: a future passive.', 'a10-trier'),
        mc(`${Cap(PQP_REF)} : « Quand nous sommes arrivés, le film avait commencé. » Son miroir au futur :`, [fr(E(1811)), fr(E(1812))], 0, `« ${B201_REFRAME} » EN: ${B201_REFRAME_EN}`, 'a2-rappel'),
        lC(`Écoute. ${Cap(COND_PASSE_REF)} : de quoi parle cette phrase ?`, 'Sans ton appel, je serais déjà parti.', ['de ce qui n’a pas eu lieu', 'de ce qui va arriver'], 0, `« ${B202_REFRAME} » EN: ${B202_REFRAME_EN}`, 'a10-cartes'),
      ],
    },
    {
      id: 'r12-examen', label: 'Comme à l’examen', targets: ['plan-sans-jalon'],
      questions: [
        mc('Format TCF. Choisissez la bonne réponse : « Dès que vous … le formulaire, envoyez-le au service des inscriptions. »', ['aurez rempli', 'avez rempli', 'auriez rempli', 'remplissiez'], 0, 'Le formulaire sera rempli avant l’envoi. EN: done first.', 'a6-piege'),
        mc('Format TCF : « D’ici la fin de l’année, l’entreprise … deux cents personnes. »', ['aura embauché', 'a embauché', 'aurait embauché', 'embauchait'], 0, 'Une échéance : futur antérieur. EN: a deadline.', 'a7-table'),
        mc('Format DELF B2, compréhension écrite. « La mairie promet qu’au printemps, les travaux de la place auront pris fin et que le marché y reviendra. » Que dit le texte ?', ['les travaux seront finis avant le retour du marché', 'le marché reviendra pendant les travaux', 'les travaux commenceront au printemps'], 0, 'Auront pris fin : avant le printemps. EN: finished first.', 'a4-cartes'),
        mc('Format DELF B2. « L’invité n’est toujours pas arrivé ; il se sera perdu dans le quartier, suppose l’animatrice. » L’animatrice…', ['fait une hypothèse', 'annonce un fait', 'fait une promesse'], 0, 'Se sera perdu : une supposition. EN: a guess.', 'a8-cartes'),
        tI('Format TCF, phrase à compléter.', 'Lorsque vous (recevoir) votre carte, vous pourrez emprunter des livres.', 'Lorsque vous aurez reçu votre carte, vous pourrez emprunter des livres.', 'La carte d’abord, l’emprunt ensuite. EN: aurez reçu.', 'a5-table'),
        tI('Format DELF B2, production. Mets au futur antérieur.', 'Dans cinq ans, nous (s’installer) à la campagne.', 'Dans cinq ans, nous nous serons installés à la campagne.', 'Pronominal : être, accord avec nous. EN: installés.', 'a11-plan', ['Dans cinq ans, nous nous serons installées à la campagne.']),
        eS('Quand j’ai obtenu mon certificat, je chercherai un poste à Montréal.', fr(E(1982)), 'Le certificat est à venir : aurai obtenu. EN: still to come.', 'a11-usages'),
        lC('Format TEF, compréhension orale. Écoute ce message. Qu’est-ce qui sera fait avant jeudi ?', MESSAGE_TEF, ['le devis sera envoyé', 'les travaux seront finis', 'la date sera fixée'], 0, 'Je vous aurai envoyé le devis : avant jeudi. EN: the quote.', 'a7-ecoute'),
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
    { front: 'la forme', back: 'aurai ou serai, puis le participe', say: fr(E(1835)) },
    { front: 'aller, venir, partir', back: 'je serai allé, je serai venu, je serai parti', say: fr(E(1827)) },
    { front: 'le pronominal', back: 'toujours être : elle se sera levée', say: fr(E(1848)) },
    { front: 'déjà fait au jalon', back: 'le futur antérieur', say: fr(E(1861)) },
    { front: 'au jalon, ou en même temps', back: 'le futur simple', say: fr(E(1860)) },
    { front: 'when you’ve finished', back: 'quand tu auras fini', say: fr(E(1878)) },
    { front: 'by Friday', back: "d'ici vendredi, j'aurai…", say: fr(E(1914)) },
    { front: 'he must have forgotten', back: 'il aura oublié', say: fr(E(1930)) },
    { front: 'une promesse', back: 'aurai, sans s', say: fr(E(1961)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Un jalon, et ce qui sera déjà fait',
  body: `${REFRAME} Tu as repris ce que le B1 t'avait donné, le futur de ${FUTUR_B1_RANGE_REF}, et le miroir de ${PQP_REF}, pour en faire un temps complet : construit, accordé, placé sur une ligne, relié par une charnière, promis, supposé, compté. La suite, c'est ${PASSE_SIMPLE_REF} : le passé simple des romans, à reconnaître quand tu le lis. EN: Next comes lesson 8 in B2: the passé simple of novels, to recognise when you read it.`,
  points: [
    'Aurai ou serai, puis le participe, avec les accords du passé composé.',
    'Au jalon : futur simple. Déjà fait avant lui : futur antérieur.',
    'When you’ve finished : quand tu auras fini.',
    'Aurai promet, aurais imagine, et jamais de futur après si.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jalon', 'ligne', 'lettre'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Ton plan, tes jalons',
    opener: {
      line: "À toi de poser tes jalons pour l'année qui vient : ici tu écris ton plan ou ta lettre, et tu passes l'examen. EN: Your turn to set your markers for the year ahead: here you write your plan or your letter and sit the exam.",
      imageRef: 'lessons/futur-anterieur/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton plan et passé l'examen : quatre-vingt-seize questions, douze rounds. EN: You wrote your plan and sat the exam: ninety-six questions, twelve rounds.",
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r4-ligne', 'a11-quiz/r8-hypothese', 'a11-review'],
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
  { id: 'd-jalon', title: 'Au jalon ou déjà fait', format: 'sort' as const, coach: "Deux piles : ce qui sera déjà fait au moment à venir, ou ce qui se passera à ce moment-là. EN: sort by done before or happening at the marker.", buckets: ['déjà fait au jalon', 'au jalon'], items: [E(1800), E(1810), E(1811), E(1801), E(1809), E(1812)], audio: AUDIO },
  { id: 'd-auxiliaire', title: 'Avoir ou être', format: 'mcq' as const, coach: "Pense au passé composé du même verbe, puis mets l'auxiliaire au futur. EN: the passé composé decides.", q: 'Aller, avec je :', opts: ['je serai allé', 'j’aurai allé'], correct: 0, why: 'Aller garde être. EN: aller keeps être.', items: [E(1816), E(1822), E(1827), E(1832), E(1835), E(1834)], audio: AUDIO },
  { id: 'd-accord', title: 'Le e et le s', format: 'mcq' as const, coach: "Être : regarde le sujet. Avoir : regarde s'il y a un complément avant. EN: subject for être, earlier object for avoir.", q: 'Les photos que tu auras …', opts: ['prises', 'pris'], correct: 0, why: 'Que = les photos, placé avant. EN: que before.', items: [E(1842), E(1844), E(1846), E(1848), E(1852), E(1853)], audio: AUDIO },
  { id: 'd-ligne', title: 'Deux futurs, une ligne', format: 'sort' as const, coach: "Deux piles, autour d'un seul jalon. EN: two piles round one marker.", buckets: ['au jalon ou en cours', 'déjà fait'], items: [E(1860), E(1862), E(1866), E(1861), E(1865), E(1868)], audio: AUDIO },
  { id: 'd-charniere', title: 'D’abord, ou en même temps', format: 'mcq' as const, coach: "Fini avant l'autre : futur antérieur ; en même temps : futur simple. EN: first, or together.", q: 'Quand tu … , appelle-moi. (après avoir fini)', opts: ['auras fini', 'finiras'], correct: 0, why: 'La fin vient d’abord. EN: finished first.', items: [E(1878), E(1880), E(1885), E(1887), E(1889), E(1893)], audio: AUDIO },
  { id: 'd-calque', title: 'When you’ve finished', format: 'flashcard' as const, coach: "Lis chaque phrase et dis la phrase anglaise qu'elle traduit. EN: say the English each sentence translates.", items: [E(1899), E(1900), E(1901), E(1902), E(1906), E(1907)], audio: AUDIO },
  { id: 'd-echeance', title: 'By Friday', format: 'mcq' as const, coach: "D'ici, avant, au plus tard : la tâche sera derrière toi. EN: by, before, at the latest.", q: 'By Friday : … vendredi', opts: ['d’ici', 'jusqu’à'], correct: 0, why: 'Jusqu’à dit until. EN: d’ici means by.', items: [E(1914), E(1915), E(1917), E(1920), E(1922), E(1926)], audio: AUDIO },
  { id: 'd-hypothese', title: 'Supposer ou prédire', format: 'sort' as const, coach: "Deux piles : une explication d'un fait passé, ou une prédiction. EN: a guess about the past, or a prediction.", buckets: ['une hypothèse sur le passé', 'une prédiction'], items: [E(1930), E(1931), E(1940), E(1936), E(1864), E(1875)], audio: AUDIO },
  { id: 'd-bilan', title: 'Le compte, depuis la fin', format: 'flashcard' as const, coach: "Lis chaque bilan à voix haute, comme dans un discours. EN: read each review aloud, as in a speech.", items: [E(1946), E(1947), E(1949), E(1950), E(1954), E(1958)], audio: AUDIO },
  { id: 'd-lettre', title: 'Aurai ou aurais', format: 'mcq' as const, coach: "Promesse : sans s. Condition ou regret : avec s. Au doute, passe à nous. EN: promise without s; condition or regret with s.", q: 'Sans cet appel, j’… fini.', opts: ['aurais', 'aurai'], correct: 0, why: 'Sans pose une condition. EN: a condition.', items: [E(1961), E(1962), E(1963), E(1964), E(1965), E(1969)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 en renfort', format: 'flashcard' as const, coach: "Six phrases du B1 : dis pour chacune si c'est un futur simple, un futur antérieur ou une fausse piste. EN: futur simple, futur antérieur or false lead?", items: [PF(378), PF(407), PF(549), 'fr.b1.faits-et-procedures.1049', PF(439), PF(415)], audio: AUDIO },
  { id: 'd-plan', title: 'Le plan, jalon par jalon', format: 'flashcard' as const, coach: "Lis les phrases du plan dans l'ordre : le jalon, ce qui sera fait, puis la suite. EN: read the plan in order.", items: [E(1981), E(1982), E(1983), E(1984), E(1985), E(1988)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'aucun-jalon', description: 'Puts every future step in the futur simple, so what will already be done at a later moment reads as happening at it.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-jalon', retest: 'd-jalon' },
  { id: 'auxiliaire-faux', description: 'Picks the auxiliary by habit (j’aurai allé, elle sera terminé) or builds the tense on the conditional (j’aurais terminé).', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-auxiliaire', retest: 'd-auxiliaire' },
  { id: 'accord-oublie', description: 'Leaves the participle bare after être or after an object placed before avoir, adds an agreement with avoir’s subject, or builds a pronominal with avoir.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-accord', retest: 'd-accord' },
  { id: 'deux-futurs', description: 'Confuses the futur simple and the futur antérieur round a later moment, so an action at the marker reads as finished or the reverse.', detectOn: ['a4-trier', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-ligne', retest: 'd-ligne' },
  { id: 'charniere-plate', description: 'Keeps a present or passé composé after quand, dès que or une fois que for a step finished first, or uses the subjunctive after après que.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a11-mission'], drill: 'd-charniere', retest: 'd-charniere' },
  { id: 'calque-anglais', description: 'Copies the English present perfect after when or as soon as (quand j’ai fini, je t’appellerai) for something still to come.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-calque', retest: 'd-calque' },
  { id: 'echeance-floue', description: 'Uses jusqu’à for by, splits pas encore, or promises a deadline with the wrong auxiliary.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-echeance', retest: 'd-echeance' },
  { id: 'hypothese-futur', description: 'Guesses at a past fact with the futur simple (il oubliera) or drops the participle (aura du retard for aura eu du retard).', detectOn: ['a8-trier', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-hypothese', retest: 'd-hypothese' },
  { id: 'bilan-plat', description: 'Reviews a period with a conditional (m’aurait appris) or misses the être agreement in a bilan (nous aurons allé, elle se sera battu).', detectOn: ['a9-construire', 'a9-focus', 'a9-check', 'a11-mission'], drill: 'd-bilan', retest: 'd-bilan' },
  { id: 'aurai-aurais', description: 'Writes aurais for a promise or aurai for a regret, puts a future after si, or reads aurai + noun as a futur antérieur.', detectOn: ['a10-trier', 'a10-piege', 'a10-check', 'a11-mission'], drill: 'd-lettre', retest: 'd-lettre' },
  { id: 'recyclage', description: 'Loses a contrast the futur antérieur sits on: the futur simple forms and stems of B1, the future after quand, the future passive, or the conditionnel passé.', detectOn: ['a2-rappel', 'a4-cartes', 'a10-cartes'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'plan-sans-jalon', description: 'In an exam-format plan, never sets dated markers, so the reader cannot tell what will be done by when.', detectOn: ['a11-plan', 'a11-scenario', 'a11-mission'], drill: 'd-plan', retest: 'd-plan' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names a position. */
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
  sheet('sheet-forme', 'La forme', ['la recette', 'les six personnes', 'avoir ou être', 'les accords', 'les erreurs de forme'], [
    teach('sheet-forme-teach', 'Deux mots, un seul qui change',
      `${REFRAME} Le futur antérieur se forme comme le passé composé, avec l'auxiliaire au futur : j'ai terminé devient j'aurai terminé, je suis parti devient je serai parti. Les radicaux aur- et ser- viennent de ${FUT_IRREG_REF} : « ${B106_REFRAME} » Le participe ne change pas. EN: ${REFRAME_EN} Build it like the passé composé, with the auxiliary in the future.`),
    table('sheet-forme-table', 'Les six personnes', ['Personne', 'Avec avoir', 'Avec être', 'Pronominal'], [
      ['je', "j'aurai terminé", 'je serai parti(e)', 'je me serai levé(e)'],
      ['tu', 'tu auras terminé', 'tu seras parti(e)', 'tu te seras levé(e)'],
      ['il, elle, on', 'il aura terminé', 'elle sera partie', 'elle se sera levée'],
      ['nous', 'nous aurons terminé', 'nous serons parti(e)s', 'nous nous serons levé(e)s'],
      ['vous', 'vous aurez terminé', 'vous serez parti(e)(s)', 'vous vous serez levé(e)(s)'],
      ['ils, elles', 'ils auront terminé', 'elles seront parties', 'ils se seront levés'],
    ]),
    table('sheet-forme-accords', 'Qui commande l’accord', ['Cas', 'Accord avec', 'Exemple'], [
      ['être', 'le sujet', 'Elle sera arrivée avant nous.'],
      ['avoir, rien avant', 'rien', 'Elles auront réservé leurs places.'],
      ['avoir, que avant', 'le nom que reprend que', 'Montre-moi les photos que tu auras prises.'],
      ['avoir, le, la, les avant', 'le nom que reprend le pronom', 'Ces dossiers, je les aurai relus avant jeudi.'],
      ['pronominal', 'le sujet', "Elle se sera levée à l'aube."],
      ['se = à l’autre, ou complément après', 'rien', 'Ils se seront téléphoné entre-temps.'],
    ]),
    table('sheet-forme-erreurs', 'Les erreurs de forme', ['À éviter', 'Correct', 'Pourquoi'], [
      ["j'aurai allé", 'je serai allé', 'aller prend être'],
      ['elle sera terminé', 'elle aura terminé', 'terminer prend avoir'],
      ["j'aurais terminé (une promesse)", "j'aurai terminé", 'aurais est un conditionnel'],
      ["je m'aurai levé", 'je me serai levé', 'un pronominal prend être'],
      ['je serai été', "j'aurai été", 'être prend avoir'],
      ['elle aura laissée la porte', 'elle aura laissé la porte', 'la porte vient après avoir'],
    ]),
  ]),
  sheet('sheet-ligne', 'La ligne et les charnières', ['deux futurs', 'le jalon', 'les charnières', 'après que'], [
    teach('sheet-ligne-teach', 'Un jalon, deux futurs',
      `Pose d'abord le jalon : un moment à venir que ta phrase a fixé. Ce qui se passe à ce moment-là, ou ce qui est en cours, va au futur simple. Ce qui sera déjà fait avant lui va au futur antérieur. ${Cap(FUT_USAGE_REF)} disait : « ${B107_REFRAME} » Le futur antérieur ajoute la place de derrière. EN: ${B107_REFRAME_EN} The futur antérieur adds the place behind.`),
    table('sheet-ligne-table', 'Deux futurs, un jalon', ['Place', 'Temps', 'Exemple'], [
      ['en cours au jalon', 'futur simple', 'À vingt heures, je serai sur la route.'],
      ['au jalon', 'futur simple', 'À vingt heures, je partirai.'],
      ['avant le jalon', 'futur antérieur', 'À vingt heures, je serai parti.'],
      ['le jalon est quand', 'futur simple des deux côtés', 'Quand tu rentreras, je préparerai le dîner.'],
      ['fini avant le jalon', 'futur antérieur', "Quand tu rentreras, j'aurai préparé le dîner."],
      ['deux étapes', 'futur antérieur, puis futur simple', "Dans une heure, j'aurai tout rangé et je me coucherai."],
    ]),
    table('sheet-ligne-charnieres', 'Les charnières', ['Charnière', 'Fini avant', 'En même temps'], [
      ['quand, lorsque', 'Quand tu auras fini, appelle-moi.', 'Quand tu finiras, appelle-moi.'],
      ['dès que, aussitôt que', "Dès que j'aurai reçu ta réponse, je réserverai.", 'Dès que le magasin ouvrira, j’irai.'],
      ['une fois que', 'Une fois que tu auras compris, tout ira vite.', 'rare'],
      ['après que + indicatif', "Après qu'il aura parlé, tu poseras tes questions.", 'jamais après qu’il soit, à l’écrit'],
      ['tant que… ne… pas', "Tant que tu n'auras pas rendu le dossier, tu ne seras pas payé.", 'Tant que tu seras là, tout ira bien.'],
      ['pendant que', 'rare', 'Pendant que tu porteras le canapé, je démonterai les lits.'],
    ]),
  ]),
  sheet('sheet-emplois', 'Promettre, supposer, faire un bilan', ['l’échéance', 'l’hypothèse', 'le bilan'], [
    teach('sheet-emplois-teach', 'Trois emplois, un seul regard',
      "Le futur antérieur se place plus tard et regarde en arrière. À une échéance, il promet ce qui sera fait (d'ici vendredi, j'aurai rendu le rapport). Devant un fait passé qu'on ne s'explique pas, il propose une explication probable (il aura oublié). À la fin d'une période, il fait le compte (en dix ans, j'aurai vu). EN: a deadline, a guess, a review: the same look back from a later moment."),
    table('sheet-emplois-echeances', 'Les échéances', ['Marqueur', 'Ce qu’il dit', 'Exemple'], [
      ["d'ici vendredi", 'au plus tard ce jour-là', "D'ici vendredi, j'aurai rendu le rapport."],
      ['avant la fin du mois', 'une limite', 'Avant la fin du mois, nous aurons recruté deux personnes.'],
      ['au plus tard lundi', 'la dernière date', 'Au plus tard lundi, vous aurez reçu la facture.'],
      ['dans deux heures', 'à partir de maintenant', "Dans deux heures, j'aurai tout corrigé."],
      ['en une semaine', 'le temps qu’il faut', "En une semaine, ils auront repeint tout l'appartement."],
      ["jusqu'à", 'une durée qui continue, pas une limite', "jamais jusqu'à vendredi, j'aurai fini"],
    ]),
    table('sheet-emplois-hypothese', 'L’hypothèse', ['Forme', 'Ce qu’elle dit', 'Exemple'], [
      ['futur antérieur', 'une explication probable', "Il n'est pas venu : il aura oublié."],
      ['devoir au passé composé', 'presque la même chose', 'Il a dû oublier.'],
      ['passé composé + sans doute', 'la même idée, avec un adverbe', 'Il a sans doute oublié.'],
      ['futur simple', 'une prédiction, pas une hypothèse', "Il oubliera, comme d'habitude."],
    ]),
    table('sheet-emplois-bilan', 'Le bilan', ['Forme', 'Le ton', 'Exemple'], [
      ['futur antérieur', 'un bilan, un peu solennel', 'Cette année aura été difficile pour tout le monde.'],
      ['passé composé', 'un constat neutre', 'Cette année a été difficile.'],
      ['on aura tout vu', 'l’étonnement ou l’agacement', 'On aura tout vu.'],
    ]),
  ]),
  sheet('sheet-pieges', 'Les pièges', ['le calque anglais', 'aurai ou aurais', 'après si', 'les fausses pistes'], [
    teach('sheet-pieges-teach', 'Le moment, la lettre, le si',
      `Après when, as soon as ou once, l'anglais met un present perfect ; le français regarde le moment et met un futur antérieur. À l'écrit, aurai promet et aurais imagine ou regrette, comme dans ${COND_PASSE_REF} : « ${B202_REFRAME} » Après si, jamais de futur. EN: ${B202_REFRAME_EN}`),
    table('sheet-pieges-calque', 'Le calque anglais', ['Anglais', 'Français', 'Pourquoi'], [
      ["when you've finished", 'quand tu auras fini', 'une fin à venir'],
      ["as soon as I've had", "dès que j'aurai eu", 'une fin à venir'],
      ["once you've read it", "une fois que tu l'auras lu", 'une fin à venir'],
      ['when you arrive', 'quand tu arriveras', 'un moment à venir, futur simple'],
      ["every day, when I've finished", "quand j'ai fini, je rentre", 'une habitude'],
      ['he must have forgotten', 'il aura oublié', 'une hypothèse, sans will'],
    ]),
    table('sheet-pieges-lettre', 'Aurai ou aurais', ['Sens', 'Forme', 'Exemple'], [
      ['une promesse, un moment réel', 'aurai, serai', "J'aurai fini avant ton départ."],
      ['une condition, ce qui n’a pas eu lieu', 'aurais, serais', "Sans cet appel, j'aurais fini avant ton départ."],
      ['un regret', "j'aurais dû", "J'aurais dû te prévenir."],
      ['le test', 'passe à nous', 'nous aurons ou nous aurions'],
      ['après si', 'le passé composé', 'Si tu as fini avant midi, on pourra déjeuner ensemble.'],
    ]),
    table('sheet-pieges-pistes', 'Les fausses pistes', ['Ça ressemble à', 'Mais c’est', 'Exemple'], [
      ['aurai + un nom', 'le futur simple d’avoir', "Quand j'aurai le billet, je réserverai l'hôtel."],
      ['auras faim, auras le temps', 'le futur simple d’avoir', 'Quand tu auras faim, tu me le diras.'],
      ['sera + participe (subir)', 'un futur passif', 'Le contrat sera signé demain.'],
      ['serai + adjectif', 'un état au futur simple', 'Quand je serai installé, je t’inviterai.'],
      ['sera prêt, sera en ligne', 'un état au futur simple', "D'ici vendredi, tout sera prêt."],
    ]),
  ]),
  sheet('sheet-plan', 'Écrire un plan ou une lettre', ['le plan', 'les phrases utiles', 'la liste de contrôle'], [
    teach('sheet-plan-teach', 'Des jalons, puis ce qui sera fait',
      "Un bon plan part d'aujourd'hui, pose des jalons datés, dit à chacun ce qui sera déjà fait et ce qui se passera, relie les étapes par des charnières, puis se termine par un bilan ou une hypothèse. Une lettre à soi-même suit le même chemin, sur un ton plus personnel. EN: start from today, set dated markers, link the steps, end with a review or a guess."),
    table('sheet-plan-plan', 'Le plan', ['Partie', 'Temps', 'Exemple'], [
      ['le point de départ', 'présent', "Je viens d'arriver et je commence une formation."],
      ['un jalon daté', 'futur antérieur', "D'ici décembre, j'aurai terminé ma formation."],
      ['ce qui se passera', 'futur simple', 'Je chercherai un poste à Montréal.'],
      ['deux étapes reliées', 'charnière + futur antérieur', "Quand j'aurai obtenu mon certificat, je chercherai un poste."],
      ['une condition', 'si + présent', "Si tout se passe bien, je me serai installée avant l'été."],
      ['la fin', 'bilan ou hypothèse', "En un an, j'aurai appris plus qu'en cinq."],
    ]),
    table('sheet-plan-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Chaque jalon est daté', "d'ici, avant, au plus tard, dans"],
      ["L'auxiliaire est le bon", 'celui du passé composé, au futur'],
      ['Les accords tiennent', 'être : le sujet ; avoir : le complément avant'],
      ['Après quand, rien de passé', 'quand j’aurai fini, pas quand j’ai fini'],
      ['Aucun s dans une promesse', 'passe à nous : aurons ou aurions'],
      ['Aucun futur après si', 'si tout se passe bien'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-07-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const EXERCISE = 'One voice, read as written WITH the bracketed infinitives spoken as infinitives: this is the exercise text, not the answer.';
const REC_DESC: Record<string, string> = {
  'rec-b2-07-calendrier': "Sophie's email (act 1), one female voice with a light Québec accent, one take, read as a clear professional message. The futur antérieur forms (aurons validé, aura corrigé, aurons tout installé) are read at the same pace as the rest: the learner is meant to notice them, not be told.",
  'rec-b2-07-forme': 'The four form cards (act 2). One coach voice. Card one reads the six forms of aurai with a small pause between each; aurai and aurez both end on a closed [e], auront and aurons on [ɔ̃].',
  'rec-b2-07-forme-ecoute': `${ONE_TAKE} Ten lines. Line two (sera allée) and line seven (aurai été) carry the auxiliary contrast the questions ask about: read them exactly like the others.`,
  'rec-b2-07-liste': 'Mariam and her father (act 3), two voices, one take, calm and domestic. The coach lines name spellings the ear cannot hear; do not over-articulate the endings.',
  'rec-b2-07-accords': 'The four agreement cards (act 3). One voice. The participle endings are silent in most lines; do not add a sound to help.',
  'rec-b2-07-piege-accords': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions in promptSound are NEVER spoken.",
  'rec-b2-07-texte-a3': `The mother's message (act 3). ${EXERCISE}`,
  'rec-b2-07-depart': 'Inès and a coach voice (act 4), Geneva, one take, brisk. The three lines « je partirai », « je serai partie », « je serai déjà dans le train » are read with identical rhythm, so the tense is the only cue.',
  'rec-b2-07-ligne': 'The four timeline cards (act 4). One voice. Cards one to three differ by one or two words and MUST be read with identical rhythm and pitch; card four quotes lesson 7 in B1.',
  'rec-b2-07-ligne-ecoute': `${ONE_TAKE} Nine lines. Lines one and two (je partirai / je serai parti) and lines eight and nine (sera parti / partira) are the contrasts the questions test: identical rhythm.`,
  'rec-b2-07-piege-ligne': "The audio step plays each card's CORRECT sentence. Six lines, one voice, level. The wrong versions are never spoken.",
  'rec-b2-07-texte-a4': `Karim's day (act 4). ${EXERCISE}`,
  'rec-b2-07-demenagement': 'Nadia and a coach voice (act 5), Brussels, one take, practical and a little hurried. The charnières (dès que, pendant que, une fois que) are not stressed.',
  'rec-b2-07-texte-a5': `Zoé's instructions (act 5). ${EXERCISE}`,
  'rec-b2-07-emma': 'Emma (a young English speaker with a light English accent in French) and Léa (a Geneva voice) (act 6), one take, friendly. Emma’s first line is read naturally, with no hint that it is wrong.',
  'rec-b2-07-calque': 'The four calque cards (act 6). One voice. Card four reads « quand t’as fini » in a relaxed spoken way, then « quand tu auras fini » carefully: the register contrast is the point.',
  'rec-b2-07-calque-ecoute': `${ONE_TAKE} Nine lines, all with quand, dès que or une fois que. Lines three and four (a obtenu / aura obtenu) must be read with identical rhythm.`,
  'rec-b2-07-piege-calque': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The word-for-word versions in promptSound are NEVER spoken.",
  'rec-b2-07-texte-a6': "Emma's message and her tutor's reply (act 6), two voices: Emma for the quoted message, the tutor for his line, read as written (the errors are the exercise).",
  'rec-b2-07-echeances-ecoute': `${ONE_TAKE} Ten dated promises, one voice, the tone of a work voicemail. The markers (d'ici, au plus tard, dans) are not stressed.`,
  'rec-b2-07-texte-a7': `The meeting minutes (act 7). ${EXERCISE}`,
  'rec-b2-07-rdv': "Lucie's missed meeting in Liège (act 8), one voice, one take, a Belgian accent welcome but not required. Lucie's hypotheses are read as thoughts, a little faster; Hugo's quoted line is out of breath.",
  'rec-b2-07-hypothese': 'The four hypothesis cards (act 8). One voice. Card one (il aura oublié) and card four (il oubliera) are read with the same shrug: the tense, not the tone, carries the difference.',
  'rec-b2-07-hypothese-ecoute': `${ONE_TAKE} Nine lines; the questions ask whether each is a guess or a prediction, so no line may be dramatised.`,
  'rec-b2-07-texte-a8': "Malik's kitchen (act 8), one voice, read as a scene description, neutral.",
  'rec-b2-07-discours': 'Luc and a coach voice (act 9), Sherbrooke, one take, warm. Luc’s lines are read as rehearsal, not performance.',
  'rec-b2-07-bilan': 'The four review cards (act 9). One voice. Cards two and three (aura été / a été) are read with the same rhythm; card four (on aura tout vu) with a light, amused exasperation.',
  'rec-b2-07-texte-a9': `The retirement speech (act 9). ${EXERCISE}`,
  'rec-b2-07-sarah': 'Sarah and Mehdi (act 10), Lausanne, two voices, one take, conversational. The spelled forms (aurai, aurais) are pronounced as a careful speaker would: aurai [e], aurais [ɛ].',
  'rec-b2-07-lettre': 'The four s cards (act 10). One voice. Card three reads « nous serons · nous serions » with a clear [jɔ̃] in the second; that audible i is the test the card teaches.',
  'rec-b2-07-lettre-ecoute': `${ONE_TAKE} Nine lines. Lines three and four (serons / serions) and six and seven (seront / seraient) differ by one sound: identical rhythm.`,
  'rec-b2-07-piege-lettre': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong-letter versions in promptSound are NEVER spoken.",
  'rec-b2-07-texte-a10': "Sarah's draft email (act 10), one voice, read as written, wrong forms included, without comment.",
  'rec-b2-07-modele': "Awa's letter to herself (act 11), one female voice with a light Dakar accent, one take, intimate and unhurried, as if read alone at night.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 7',
  intro: 'In B1 you built the futur simple (lessons 5 and 6) and put it on both sides of quand (lesson 7), which already said that a futur antérieur after quand belongs to B2. Here you build it completely: both auxiliaries, every agreement, pronominal verbs. Then you use it round one later moment, beside the futur simple: after quand, dès que, une fois que and après que, against the English present perfect, for deadlines, for the likely explanation of a past fact, and for a review of a period. You also learn the one-letter trap with the conditionnel passé (aurai or aurais) and the look-alikes that are not futurs antérieurs. The task: a 180 to 250 word project plan or letter to your future self, graded on the B2 writing criteria.',
  skill: 'PE',
  grammarAssumed: [FUT_FORM_UNIT, FUT_IRREG_UNIT, FUT_USAGE_UNIT, PQP_UNIT, COND_PASSE_UNIT],
  grammarIntroduced: [
    'The futur antérieur as a full tense: the futur simple of avoir or être plus the past participle, for every person, with the auxiliary chosen as in the passé composé',
    'Participle agreement in the futur antérieur: with être on the subject; with avoir on a direct object placed before; pronominal verbs with être and the two passé composé exceptions',
    'The futur simple against the futur antérieur round one later moment: at or under way at the marker, against already done by it',
    'Prior completion after quand, lorsque, dès que, aussitôt que, une fois que, après que (with the indicative) and tant que... ne... pas, and the futur simple when the two actions go together',
    'The English present perfect after when, as soon as and once rendered by the futur antérieur, with the passé composé kept for habits and the past',
    'Deadlines with d’ici, avant, au plus tard, dans and en, against jusqu’à',
    'The futur antérieur of probability: a likely explanation of a past fact, beside il a dû and sans doute, against the futur simple of prediction',
    'The futur antérieur of review (bilan): a period seen from its end, and the set phrase on aura tout vu',
    'Aurai against aurais: the futur antérieur and the conditionnel passé told apart by meaning and the nous test, no future after si, and the false leads aurai + noun, the future passive and être + adjective',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Au B1, tu as construit le futur simple et tu l'as mis des deux côtés de quand. Ici, tu construis son double : le futur qui se place plus tard et regarde en arrière. Tu l'emploies après quand et dès que, contre le present perfect anglais, pour promettre une échéance, supposer une explication et faire un bilan, et tu ne le confonds plus avec le conditionnel passé. À la fin, tu écris en 180 à 250 mots un plan de projet ou une lettre à toi-même.",
    minutes: 150,
    difficulty: 4,
    glyph: 'aura',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: FUTUR_ANTERIEUR_TERMS,
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
