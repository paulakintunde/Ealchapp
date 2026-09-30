// b2.11.l1 « Les pronoms d'insistance »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.07 futur antérieur),
// under the B2 rules of B2-BUILD-LOG.md (form, meaning, choice, text).
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema, so the lesson validates with it in place (as b2.07 does).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act (B2): meet (scene, story, reading or listening), name
//   (cardDeck, tapTable, examples), build (groupDrill, gated), choose (a
//   drill where the MEANING picks the pronoun), trap (trapDrill stepped or
//   commonErrors), then from act 3 on the form INSIDE A TEXT of 60 to 120
//   words (complete, rewrite or correct), then the gated act check.
//
//    1  Lui adore, moi je déteste    6   two opinions, two people: the flat
//                                         sentence against the contrasted one
//    2  Deux camps, deux pronoms     8   the forms recalled (lesson 35 in A2),
//                                         contrast at the head, after a noun,
//                                         at the end; the subject pronoun stays
//    3  La reprise                   7   left and right detachment in speech,
//                                         the resuming pronoun, the neutral
//                                         written order
//    4  Seul devant le verbe         7   lui seul, eux ont refusé, lui aussi;
//                                         moi seul peux (the verb's person)
//    5  Toi et moi, nous             7   compound subjects: the person that
//                                         wins, optional nous / vous, ni … ni,
//                                         politeness order
//    6  C'est moi qui                8   c'est … qui / que, the verb after
//                                         c'est moi qui, ce sont eux qui
//    7  Le renfort                   7   -même(s), aussi, non plus, tous, deux
//    8  Qui est il                   7   il continues, lui switches; lui / le /
//                                         à lui after penser à, tenir à
//    9  Soi                          7   soi after on, chacun, personne, il
//                                         faut; lui for a named person
//   10  À moi, à lui                 7   whose thing, whose turn, un ami à moi,
//                                         son livre à elle
//   11  L'oral et l'écrit            7   register: which forms are speech,
//                                         which are careful writing
//   12  Ta voix dans le débat       11   model, plan, role play, TASK, quiz
//
//   TOTAL 89 missions, 12 acts. Corpus: 180 authored rows (.1800-.1990) in
//   twelve blocks plus 33 reused seed rows, released act by act through
//   `deckTranche`. Quiz: 12 rounds of 8 (one per act 1 to 11, acts 1 and 2
//   sharing round 1, a recycling round citing lessons 35 and 34 in A2,
//   lessons 11, 17, 22 and 24 in B1 and lessons 2 and 6 in B2, and an
//   exam-format round). Chapter artwork: `pronoms-insistance-image-prompts.md`,
//   twelve prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (a later lesson may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le pronom tonique met une personne sous le projecteur. »
//   EN: The stressed pronoun puts one person in the spotlight.
//
//   ONE METAPHOR, LE PROJECTEUR: a stage with several people on it, and the
//   stressed pronoun is the light that picks one out, to oppose it (act 2),
//   to name the one who did it (act 6), to tell the reader which man acts
//   now (act 8), to narrow or widen the circle (acts 4 and 7), to say whose
//   turn it is (act 10). Soi is the light on nobody in particular (act 9).
//   Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    contrast between people with stressed pronouns; left and right
//           detachment with its resuming pronoun, against the neutral order;
//           the stressed pronoun alone as subject (lui seul, eux ont refusé,
//           moi seul peux); agreement with compound subjects and ni … ni;
//           verb agreement after c'est moi qui and the error c'est moi qui
//           a; reinforcement with -même(s), aussi, non plus, tous, deux;
//           disambiguation with lui, and lui / le / à lui; soi against lui;
//           à moi, à moi de, un ami à moi, son livre à elle; the register
//           of each.
//   QUOTES  the reframes of lesson 35 in A2 (English, with its French
//           rendering), lessons 11, 17, 22, 23, 24 and 25 in B1, and lessons
//           6 and 23 in B2, re-exported from their corpus files; rows of
//           lessons 35, 34 and 22 in A2, lessons 11, 20, 22, 23 and 24 in B1
//           and lessons 2, 23 and 25 in B2 reused BY ID.
//   LEAVES  the eight forms, after a preposition, c'est moi and moi aussi to
//           lesson 35 in A2 (recalled on one card); the possessive pronouns
//           to lesson 34 in A2; qui / que to lesson 11 in B1; moi-même as a
//           form to lesson 24 in B1 (only its plural agreement and vous-même
//           are added); the gérondif to lesson 12 in B2, named in the roundup.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English still authored on every
//   learner string (an `en` field or a final `EN: `), never on an answer.
//   tu in every instruction; characters use what the situation needs. Every
//   `say` is French. No spaced « ? » or « ! » in any scene or story bubble.
//   The scenario uses ’ only and embeds no corpus row. Other lessons cited by
//   trail position in words, never by raw id (A-level labels come from
//   unitRef, « lesson 35 in A2 », as B1 lessons print them). Mission answer
//   slots are spread by `spreadMissions()`, the quiz by `spreadSlots()` (no
//   text changes, no `why` names a position), as b2.07 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. TWELVE ACTS and twelve quiz rounds (acts 1 and 2 share round 1). Keep
//      twelve acts, or fold act 11 (register) into the closing act?
//   2. SPOKEN FORMS. « Nous, on », « c'est eux qui », « Il est fou, lui » and
//      the detached sentences are taught as normal SPEECH (« nous, on » and
//      the right-detached jabs marked `familier`; « c'est eux qui » and plain
//      left detachment `courant` + tag `oral`, as a2.36 and b1.22 mark « C'est
//      eux »), and the task grader asks for the written forms. Keep that
//      line (same as the spoken-variant decision of gate B2-2)?
//   3. « Lui aussi a voté contre », « Eux ont refusé » and « Moi seul peux »
//      are taught as correct written French; « Moi aussi ai voté » and
//      « Moi ai refusé » as errors. Confirm this is the line you want.
//   4. After chacun, act 9 teaches soi (chacun pour soi, chacun est rentré
//      chez soi) and the grader accepts « chacun est rentré chez lui »,
//      which current usage allows. Confirm.
//   5. THREE tapTables (acts 2, 6, 11) and two focus sections (acts 10, 11).
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
  LECTURE_CINECLUB, LECTURE_RADIO, LECTURE_MODELE,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A6_REPONSES, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A11,
  A236_REFRAME, A236_REFRAME_FR, B111_REFRAME, B111_REFRAME_EN, B122_REFRAME, B122_REFRAME_EN,
  B123_REFRAME, B123_REFRAME_EN, B124_REFRAME, B124_REFRAME_EN, B125_REFRAME, B125_REFRAME_EN,
  B117_REFRAME, B117_REFRAME_EN, B206_REFRAME, B206_REFRAME_EN, B223_REFRAME, B223_REFRAME_EN,
  TONIQUES_UNIT, POSSESSIFS_UNIT, INDIRECT_UNIT, QUI_QUE_UNIT, ORDRE_UNIT, CEST_UNIT, MEME_UNIT,
  TONIQUES_REF, POSSESSIFS_REF, INDIRECT_REF, QUI_QUE_REF, ORDRE_REF, CEST_REF, TOUT_REF, MEME_REF,
  REGISTRES_REF, COND_PASSE_REF, SUBJ_IND_REF, ARGUMENTATION_REF, GERONDIF_REF,
} from './pronoms-insistance-corpus.ts';
import { PRONOMS_INSISTANCE_TERMS } from './pronoms-insistance-terms.ts';

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
const PE2 = (n: number) => `fr.a2.pronoms-essentiels.${String(n).padStart(3, '0')}`;

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.11: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.11: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.11: no respell on ${id}`);
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

/** THE « IN A TEXT » BEAT that closes acts 3 to 11: one paragraph of 60 to
 *  120 words, with the answers behind the modal. */
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
 *  ACT 1: LUI ADORE, MOI JE DÉTESTE
 *
 *  Meet the contrast. Two opinions side by side read as a list; with a
 *  stressed pronoun each opinion gets its owner. NO « ? » OR « ! » IN ANY
 *  BUBBLE, and no name in a section respelling that trips the nasal check.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le débat du ciné-club',
  frSub: 'Deux avis, une seule phrase',
  setting: { place: 'La bibliothèque du Plateau', city: 'Montréal', time: 'jeudi, 22 h', ambience: 'des chaises en rang, un micro qui passe de main en main, la neige dehors' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, un jeudi soir de février. La projection du ciné-club vient de finir. Tu es venu avec Karim, ton collègue. Nadia, l'animatrice, fait le tour de la salle pour recueillir les avis.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nadia',
      fr: 'Vous deux, au fond, dites-moi ce que vous en avez pensé.',
      en: 'You two at the back, tell me what you thought of it.',
      respell: '[voo DEU | oh FOHⁿ | deet-MWA | suh kuh voo-zahⁿ-na-vay pahⁿ-SAY]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Lui et moi, on n'est pas du tout d'accord.",
      en: 'He and I do not agree at all.',
      respell: '[LWEE ay MWA | ohⁿ neh pa dü too da-KOR]',
      stage: 'Karim a adoré. Toi, tu as trouvé ça interminable. Toute la salle attend la suite.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Nadia te tend le micro. Tu dois résumer les deux avis en une phrase, pour que la salle entende qu'il y a deux camps.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Quelle phrase fait entendre deux camps.',
      size: 'lg',
      options: [
        { fr: fr(E(1801)), respell: rsOf(E(1801)), en: en(E(1801)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1800)), respell: rsOf(E(1800)), en: en(E(1800)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Nadia sourit : deux camps, le débat peut commencer. Elle tend le micro à Karim, puis à toi.',
        breaks: 'Nadia fronce les sourcils. Il, c’est qui : le réalisateur, Karim ? Et ton j’ai trouvé ça long sonne comme la suite, pas comme une opposition.',
      },
    },
    {
      kind: 'break',
      heading: 'Deux avis côte à côte ne font pas un débat',
      body: "Sans pronom tonique, il ne dit pas qui, et les deux phrases font une liste. Avec lui, puis moi, chaque avis a sa personne. EN: Without stressed pronouns the clauses read as a list; lui and moi give each opinion its owner.",
      wrong: { fr: fr(E(1801)), ipa: ipaOf(E(1801)), respell: rsOf(E(1801)), en: en(E(1801)) },
      right: { fr: fr(E(1800)), ipa: ipaOf(E(1800)), respell: rsOf(E(1800)), en: en(E(1800)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: `Dans ${TONIQUES_REF}, tu as appris où va moi. Ici, tu apprends à quoi il sert quand plusieurs personnes parlent : opposer, désigner, insister, lever un doute.`,
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['projecteur', 'contraste'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Opposer deux personnes dans une phrase', s: 'Actes 1 à 3 : le contraste, la reprise, l’oral' },
    { t: 'Faire porter le verbe au bon pronom', s: 'Actes 4 à 6 : lui seul, toi et moi, c’est moi qui ai' },
    { t: 'Renforcer, lever un doute, dire à qui', s: 'Actes 7 à 10 : même, lui ou il, soi, à moi de' },
    { t: 'Répondre dans un débat, à l’écrit', s: 'Actes 11 et 12 : le registre, puis ta mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le compte rendu du ciné-club',
  frSub: 'Lis, et cherche qui pense quoi',
  text: LECTURE_CINECLUB,
  glossary: [
    { word: 'Gaspésie', en: 'the Gaspé peninsula', note: 'Une région du Québec, au bord de la mer, connue pour la pêche.' },
    { word: 'bénévoles', en: 'volunteers', note: 'Des personnes qui aident sans être payées.' },
    { word: 'marqué', en: 'stayed with me', note: 'Des images qui m’ont marqué : je ne les oublie pas.' },
  ],
  questions: [
    { q: 'Global : à quoi sert ce texte ?', a: 'À rendre compte de la séance et du débat qui a suivi, avis par avis.' },
    { q: 'Détail : qui a défendu la fin du film ?', a: 'Karim. « Lui seul » dit qu’il était le seul, contre toute la salle.' },
    { q: 'Pourquoi « Eux ont applaudi » et non « Ils ont applaudi » ?', a: 'Eux oppose les étudiants du premier rang aux autres spectateurs. Ils serait neutre, sans camp.' },
    { q: 'Inférence : qu’a pensé Bertrand du film ?', a: 'Il hésite : il a préféré le livre, mais il reconnaît la force de certaines images.' },
    { q: 'Que veut dire « c’est à nous de préparer le café » ?', a: 'Que c’est le tour, ou le rôle, des bénévoles la semaine suivante.' },
  ],
  audio: REC('rec-b2-11-cineclub'),
  say: REFRAME,
  terms: ['contraste', 'projecteur'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère les pronoms qui mettent en lumière',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Deux camps', [
      it(E(1802), 'eux, face aux autres'),
      it(E(1806), 'les autres, contre les étudiants'),
      it(E(1809), 'Julie, contre la salle'),
      it(E(1810), 'le secrétaire, contre le film'),
    ], chk('Dans ces phrases, que fait le pronom tonique ?',
      ['il oppose une personne aux autres', 'il remplace un lieu', 'il marque le pluriel'], 0,
      'Chaque pronom tonique sépare un avis des autres avis. EN: it sets one person against the others.')),
    grp('Une seule personne', [
      it(E(1805), 'lui seul : personne d’autre'),
      it(E(1804), 'c’est elle qui : Nadia, pas une autre'),
      it('fr.b2.strategies-de-comprehension.1645', 'une voix contre toutes les autres'),
      it(E(1803), 'moi, puis le film, repris par l’'),
    ], chk('« C’est elle qui a choisi le film. » Que dit la phrase ?',
      ['que Nadia, et personne d’autre, l’a choisi', 'que le film est au féminin'], 0,
      'C’est … qui désigne la personne sous le projecteur. EN: it names the one who did it.')),
    ctl('Le test', 'Enlève moi dans « Moi, j’ai préféré le livre ». Que perd la phrase ?',
      ['l’opposition avec les autres avis', 'son sujet', 'son temps'], 0,
      'La phrase reste juste, mais elle ne s’oppose plus à rien. EN: it stays correct and loses the contrast.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contraste', 'projecteur'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où la phrase plate coûte cher',
  cases: [
    { situation: 'Tu résumes deux avis opposés en réunion', fr: fr(E(1815)), en: en(E(1815)) },
    { situation: 'Tu racontes une scène avec deux hommes', fr: fr(E(1918)), en: en(E(1918)) },
    { situation: 'On cherche qui a fait une erreur', fr: fr(E(1897)), en: en(E(1897)) },
    { situation: 'Tu donnes ton avis dans un forum', fr: fr(E(1967)), en: en(E(1967)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contraste'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le sens', '« Lui, il a adoré ; moi, j’ai trouvé ça long. » Combien de camps ?',
    ['deux', 'un seul', 'aucun'], 0,
    'Lui d’un côté, moi de l’autre. EN: two sides.'),
  ctl('Le rôle', 'Le pronom tonique sert ici à…',
    ['mettre une personne sous le projecteur', 'remplacer le verbe'], 0,
    'Il désigne une personne face aux autres. EN: it picks one person out.'),
  ctl('La phrase plate', '« Il a adoré, j’ai trouvé ça long. » Le problème ?',
    ['on ne sait pas qui est il, et l’opposition ne s’entend pas', 'le temps du verbe est faux'], 0,
    'La phrase est correcte, mais plate. EN: correct, but flat.'),
], ['contraste']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Lui adore, moi je déteste',
    opener: {
      line: "Deux avis, et la salle doit entendre deux camps : ici tu découvres le pronom qui met une personne sous le projecteur. EN: Two opinions, and the room must hear two sides: here you meet the pronoun that puts one person in the spotlight.",
      imageRef: 'lessons/pronoms-insistance/act01.jpg',
    },
    sections: [],
    milestone: "Tu entends la différence entre deux avis posés côte à côte et deux avis opposés, et tu sais ce que le pronom tonique ajoute. EN: You can hear the difference between two opinions listed and two opinions opposed.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: DEUX CAMPS, DEUX PRONOMS
 *
 *  Form, briefly: the eight forms are lesson 35 in A2's. What is new is the
 *  contrast and the three places it sits.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais, et ce qui change',
  frSub: 'Les huit formes, au service du contraste',
  hint: 'Quatre cartes. La première, tu la connais.',
  audio: REC('rec-b2-11-rappel'),
  say: REFRAME,
  terms: ['contraste'],
  cards: [
    {
      head: 'Les huit formes', label: Cap(TONIQUES_REF),
      fr: 'moi · toi · lui · elle · nous · vous · eux · elles',
      sub: '[MWA] · [TWA] · [LWEE] · [EL] · [NOO] · [VOO] · [EU] · [EL]',
      body: `« ${A236_REFRAME} » ${A236_REFRAME_FR} Ici, tu vas plus loin : ce que fait moi quand deux personnes parlent. EN: the eight forms are known; here, what they do.`,
    },
    {
      head: 'Deux personnes, deux pronoms', label: 'en tête',
      fr: fr(E(1815)), sub: rsOf(E(1815)),
      body: "Chaque camp reçoit son pronom tonique, et le pronom sujet reste devant le verbe : elle, elle vote ; lui, il vote. EN: each side gets its stressed pronoun; the subject pronoun stays.",
    },
    {
      head: 'Après un nom', label: 'entre virgules',
      fr: fr(E(1818)), sub: rsOf(E(1818)),
      body: "Le nom est déjà sujet : lui, entre deux virgules, l'oppose aux autres, sans il derrière. EN: after a subject noun, lui between commas, no extra il.",
    },
    {
      head: 'En fin de phrase', label: 'à l’oral',
      fr: fr(E(1828)), sub: rsOf(E(1828)),
      body: "Moi arrive après coup, pour insister sur celui qui parle. C'est surtout de l'oral. EN: at the end, mostly in speech.",
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-formes',
  title: 'Six paires pour opposer',
  cols: ['Tonique', 'Sujet', 'En contraste'],
  rows: [
    { cells: ['moi', 'je', 'moi, je pars'], say: fr(E(1814)),
      detail: { title: 'moi et je', body: "Moi se détache, je reste devant le verbe. Jamais je, je. EN: moi detaches, je stays.", say: fr(E(1823)) } },
    { cells: ['toi', 'tu', 'toi, tu restes'], say: fr(E(1822)),
      detail: { title: 'toi et tu', body: "Toi pour pointer ton interlocuteur face aux autres. EN: toi points at the person you address.", say: fr(E(1814)) } },
    { cells: ['lui', 'il', 'lui, il vote contre'], say: fr(E(1811)),
      detail: { title: 'lui et il', body: "Lui change de forme : c'est lui qui s'entend. EN: lui is the audible one.", say: fr(E(1815)) } },
    { cells: ['elle', 'elle', 'elle, elle vient'], say: fr(E(1826)),
      detail: { title: 'elle, elle', body: "Même forme deux fois : ce n'est pas un bégaiement, c'est un contraste. EN: the same word twice is a contrast.", say: fr(E(1809)) } },
    { cells: ['nous · vous', 'nous (on) · vous', 'nous, on reste'], say: fr(E(1816)),
      detail: { title: 'nous, on', body: "À l'oral, nous, on est très courant. À l'écrit : nous, nous. EN: nous, on is spoken.", say: fr(E(1812)) } },
    { cells: ['eux · elles', 'ils · elles', 'eux, ils veulent'], say: fr(E(1817)),
      detail: { title: 'eux et ils', body: "Eux pour un groupe d'hommes ou mixte, elles pour un groupe de femmes. EN: eux for men or mixed.", say: fr(E(1830)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contraste'],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Place le pronom qui oppose',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('En tête', [
      it(E(1814), 'toi contre moi'),
      it(E(1820), 'lui d’accord, moi non'),
      it(E(1821), 'vous contre nous'),
      it(E(1830), 'elles contre nous'),
    ], chk('Dans ces phrases, que reste-t-il devant chaque verbe ?',
      ['le pronom sujet : je, tu, il, nous', 'le pronom tonique seul', 'rien'], 0,
      'Le pronom tonique se détache ; le sujet reste collé au verbe. EN: the subject pronoun stays by the verb.')),
    grp('Après un nom', [
      it(E(1818), 'mon frère, face aux autres'),
      it(E(1819), 'les voisins, eux'),
      it(E(1824), 'ma sœur, elle'),
      it(E(1809), 'Julie, elle'),
    ], chk('« Mon frère, lui, n’a rien dit. » À l’écrit, faut-il ajouter il ?',
      ['non, le nom est déjà sujet', 'oui, toujours'], 0,
      'Le nom porte le verbe ; lui l’oppose aux autres. À l’oral, on entend parfois il en plus. EN: the noun is the subject.')),
    ctl('La fin', '« Je n’en sais rien, moi. » Ce moi en fin de phrase…',
      ['insiste sur celui qui parle', 'est le complément du verbe', 'est une faute'], 0,
      'Il vient après coup, pour insister : c’est de l’oral. EN: an afterthought, in speech.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contraste'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui pense quoi, à l’oreille',
  frSub: 'Dix phrases, deux camps chaque fois',
  lines: [
    ln(E(1814)), ln(E(1815)), ln(E(1816)), ln(E(1817)), ln(E(1820)),
    ln(E(1821)), ln(E(1826)), ln(E(1830)), ln(PE2(422)), ln(E(1827)),
  ],
  questions: [
    { q: 'Première phrase : qui part ?', opts: ['la personne qui parle', 'la personne à qui on parle'], correct: 0, why: 'Moi, je pars : celui qui parle. EN: the speaker leaves.' },
    { q: 'Deuxième phrase : qui vote contre ?', opts: ['lui', 'elle'], correct: 0, why: 'Lui, il vote contre. EN: he votes against.' },
    { q: 'Quatrième phrase : que préfèrent les femmes ?', opts: ['un parking', 'un jardin'], correct: 0, why: 'Elles, elles préfèrent un parking. EN: a car park.' },
    { q: 'Septième phrase : qui est malade ?', opts: ['Marc', 'Julie'], correct: 0, why: 'Lui, il est malade : Marc. EN: Marc.' },
    { q: 'Huitième phrase : qui a gagné ?', opts: ['elles', 'nous'], correct: 0, why: 'Elles ont gagné ; nous avons perdu. EN: they won.' },
  ],
  audio: REC('rec-b2-11-contraste-ecoute'),
  say: REFRAME,
  terms: ['contraste'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de contraste',
  errors: [
    {
      wrong: "Moi suis d'accord avec toi.",
      right: "Moi, je suis d'accord avec toi.",
      why: "Normal : dans ta tête, moi est déjà le sujet. Mais moi ne porte pas le verbe : je reste devant suis. EN: moi does not carry the verb; je stays.",
    },
    {
      wrong: 'Je, je pense que c’est trop tôt.',
      right: 'Moi, je pense que c’est trop tôt.',
      why: "Normal : on veut répéter la personne pour insister. Mais je ne se détache jamais ; c'est moi qui se détache. EN: only moi can be detached.",
    },
    {
      wrong: "Mon frère, il, n'a rien dit.",
      right: fr(E(1818)),
      why: "Normal : il est bien le pronom de mon frère. Mais entre deux virgules, il faut la forme tonique : lui. EN: the detached form is lui.",
    },
    {
      wrong: 'Ils, ils veulent un jardin.',
      right: 'Eux, ils veulent un jardin.',
      why: "Normal : ils et elles se ressemblent, et elles, elles existe. Mais pour ils, la forme détachée est eux. EN: the detached form of ils is eux.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contraste'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Les virgules font le contraste',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['contraste'],
};

const A2_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a2-flash',
  layer: 'core',
  title: 'Huit tournures à avoir en bouche',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'as for me, I…', back: 'moi, je…', say: fr(E(1823)) },
    { front: 'my brother, for his part', back: 'mon frère, lui', say: fr(E(1818)) },
    { front: 'they (the men), they want', back: 'eux, ils veulent', say: fr(E(1817)) },
    { front: "don't ask me, I have no idea", back: "je n'en sais rien, moi", say: fr(E(1828)) },
    { front: 'you stay, I leave', back: 'toi, tu restes ; moi, je pars', say: fr(E(1814)) },
    { front: 'we are staying (spoken)', back: 'nous, on reste', say: fr(E(1816)) },
    { front: 'I voted against too', back: "moi aussi, j'ai voté contre", say: fr(E(1827)) },
    { front: 'the neighbours, for their part', back: 'les voisins, eux', say: fr(E(1819)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contraste'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le sujet', '« Moi, je pars. » Qui porte le verbe ?',
    ['je', 'moi'], 0,
    'Je reste devant pars ; moi se détache. EN: je carries the verb.'),
  ctl('La forme', 'La forme détachée de ils, c’est…',
    ['eux', 'ils', 'leur'], 0,
    'Eux, ils veulent un jardin. EN: eux.'),
  ctl('Après un nom', '« Les voisins, … , sont d’accord. »',
    ['eux', 'ils'], 0,
    'Entre virgules, la forme tonique. EN: between commas, eux.'),
], ['contraste']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Deux camps, deux pronoms',
    opener: {
      line: "Tu connais déjà moi, toi, lui et eux : ici tu t'en sers pour dresser un camp contre un autre. EN: You already know moi, toi, lui and eux: here you use them to set one side against another.",
      imageRef: 'lessons/pronoms-insistance/act02.jpg',
    },
    sections: [],
    milestone: "Tu opposes deux personnes en tête de phrase, après un nom ou en fin de phrase, en gardant le pronom sujet devant le verbe. EN: You can set two people against each other in three positions.",
    estScreens: 38, restPoints: ['a2-table', 'a2-ecoute'],
  },
  sections: [A2_RAPPEL, A2_TABLE, A2_CONSTRUIRE, A2_ECOUTE, A2_ERREURS, A2_DICTEE, A2_FLASH, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: LA REPRISE
 *
 *  Detachment in speech: a word pulled to the front or the end, and the
 *  pronoun that picks it up inside the sentence. Against the neutral order.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'La semaine de Hugo',
  frSub: 'Comme on parle entre amis',
  setting: 'Lyon, un vendredi soir, à la terrasse d’un café. Hugo raconte sa semaine à Inès, sans chercher ses mots.',
  bubbles: [
    { from: 'narrator', fr: 'Hugo parle vite, et il détache presque tout.', en: 'Hugo talks fast, and he detaches almost everything.' },
    { from: 'user', fr: fr(E(1832)), en: en(E(1832)) },
    { from: 'coach', fr: "Moi, puis ce film : deux mots détachés, et l' qui reprend le film.", en: 'Moi, then ce film: two detached words, and l’ picks up the film.', warn: 'Deux mots détachés, une reprise' },
    { from: 'user', fr: fr(E(1840)), en: en(E(1840)) },
    { from: 'coach', fr: 'Du café : une quantité, reprise par en.', en: 'Du café: a quantity, picked up by en.', warn: 'La reprise : en' },
    { from: 'user', fr: 'Et mon chef, il veut tout pour lundi. Il est fou, lui.', en: 'And my boss wants everything for Monday. He is mad, that one.' },
    { from: 'coach', fr: 'Lui, en fin de phrase : on montre la personne du doigt, après coup.', en: 'Lui at the end: you point at the person as an afterthought.', warn: 'Détaché à droite' },
  ],
  closing: { fr: "À l'oral, on détache et on reprend. À l'écrit neutre, on remet l'ordre simple : j'ai adoré ce film.", en: 'In speech you detach and pick up. In neutral writing you restore the plain order.' },
  audio: REC('rec-b2-11-hugo'),
  say: REFRAME,
  terms: ['reprise'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-reprise',
  title: 'Détacher et reprendre, en quatre cartes',
  frSub: 'Un mot sort de la phrase, un pronom le remplace',
  hint: 'Quatre cartes. Cherche chaque fois le petit mot qui reprend.',
  audio: REC('rec-b2-11-reprise'),
  say: REFRAME,
  terms: ['reprise'],
  cards: [
    {
      head: 'À gauche', label: 'en tête',
      fr: fr(E(1834)), sub: rsOf(E(1834)),
      body: "Le mot détaché ouvre la phrase ; l' le reprend devant le verbe. Sans ce petit mot, la phrase boite : ce livre, j'ai lu. EN: detached first, picked up by a pronoun.",
    },
    {
      head: 'À droite', label: 'en fin',
      fr: fr(E(1835)), sub: rsOf(E(1835)),
      body: "Le pronom annonce, le nom arrive après, comme une précision. EN: the pronoun announces, the noun follows.",
    },
    {
      head: 'Le bon pronom', label: 'le, lui, y, en',
      fr: fr(E(1838)), sub: rsOf(E(1838)),
      body: "Le verbe choisit la reprise : lire le livre, l' ; habiter dans le quartier, y ; boire du café, en ; parler à ta sœur, lui. EN: the verb picks the resuming pronoun.",
    },
    {
      head: 'L’écrit neutre', label: 'sans détacher',
      fr: fr(E(1839)), sub: rsOf(E(1839)),
      body: "Dans un rapport ou un courriel, garde l'ordre simple : sujet, verbe, complément. Détacher sonne parlé. EN: neutral writing keeps plain order.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trouve le pronom qui reprend',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le, la, les', [
      it(E(1832), 'l’ reprend ce film'),
      it(E(1834), 'l’ reprend ce livre'),
      it(E(1843), 'les reprend tes idées'),
      it(E(1846), 'les, et l’accord de relus'),
    ], chk('« Tes idées, je les trouve excellentes. » Que reprend les ?',
      ['tes idées', 'je', 'excellentes'], 0,
      'Les renvoie au mot détaché en tête. EN: les stands for the detached noun.')),
    grp('Y, en, lui', [
      it(E(1838), 'y : un lieu'),
      it(E(1840), 'en : une quantité'),
      it(E(1841), 'lui : parler à quelqu’un'),
      it(E(1847), 'y : aller à Paris'),
    ], chk('« Ta sœur, je lui ai parlé hier. » Pourquoi lui et pas la ?',
      ['on parle à quelqu’un', 'ta sœur est un pluriel'], 0,
      'Parler à quelqu’un : lui. EN: parler à takes lui.')),
    ctl('L’écrit', '« Ce quartier, j’y habite depuis dix ans. » À l’écrit neutre :',
      [fr(E(1839)), 'Ce quartier habite depuis dix ans.', 'J’y habite depuis dix ans ce quartier.'], 0,
      'On remet le lieu à sa place, et y disparaît. EN: the place goes back, y disappears.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reprise'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'La reprise oubliée, la mauvaise reprise',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Un mot détaché, un pronom qui le reprend',
    body: "Un complément détaché est repris dans la phrase par un pronom que le verbe choisit : le, la, les, lui, y ou en. Détaché, il devient lui. EN: a detached word needs a resuming pronoun chosen by the verb.",
  },
  cards: [
    trap(E(1834), 'reprise oubliée', "Ce livre, j'ai lu en une nuit.", 'Lire quelque chose : le livre revient en l’. EN: the object comes back as l’.'),
    trap(E(1841), 'mauvais pronom', "Ta sœur, je l'ai parlé hier.", 'Parler à quelqu’un : lui. EN: parler à takes lui.'),
    trap(E(1838), 'reprise oubliée', "Ce quartier, j'habite depuis dix ans.", 'Habiter dans un lieu : y. EN: a place takes y.'),
    trap(E(1840), 'mauvais pronom', 'Du café, je le bois beaucoup trop.', 'Du café, une quantité : en. EN: a partitive takes en.'),
    trap(E(1836), 'mauvaise forme', 'Il est fou, il.', 'Détaché, il devient lui. EN: the detached form is lui.'),
    trap(E(1846), 'accord oublié', 'Ces dossiers, je les ai relu hier soir.', 'Les est placé avant : relus. EN: agreement with les.'),
  ],
  drill: [
    { promptSay: 'Ce livre, je … ai lu en une nuit.', opts: ['l’', 'lui'], correct: 0 },
    { promptSay: 'Ta sœur, je … ai parlé hier.', opts: ['lui', 'l’'], correct: 0 },
    { promptSay: 'Ce quartier, j’… habite depuis dix ans.', opts: ['y', 'en'], correct: 0 },
    { promptSay: 'Du café, j’… bois trop.', opts: ['en', 'y'], correct: 0 },
    { promptSay: 'Il est fou, …', opts: ['lui', 'il'], correct: 0 },
    { promptSay: 'Tes idées, je … trouve excellentes.', opts: ['les', 'leur'], correct: 0 },
    { promptSay: 'Paris, j’… vais chaque été.', opts: ['y', 'le'], correct: 0 },
    { promptSay: 'Moi, mes voisins, je ne … vois jamais.', opts: ['les', 'leur'], correct: 0 },
  ],
  steps: STEPS('Un mot détaché, un pronom qui le reprend', 'Ce que la bouche oublie'),
  audio: REC('rec-b2-11-piege-reprise'),
  say: REFRAME,
  terms: ['reprise'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq reprises au travail',
  frSub: 'Lis, puis trouve le petit mot',
  examples: [
    ex(E(1842), 'moi, puis mes voisins : deux mots détachés, repris par les'),
    ex(E(1844), 'ça reprend tout un genre de réunion'),
    ex(E(1837), 'elle, à droite : on insiste après coup'),
    ex(E(1843), 'les, puis excellentes au féminin pluriel'),
    ex(E(1847), 'un lieu, repris par y'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reprise'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Réécrire : le message de Hugo', TEXTE_A3, [
  { q: 'Réécris les deux premières phrases, sans rien détacher.', a: "Je ne peux pas aller à la réunion de demain. J'ai fini le rapport hier soir et je te l'envoie." },
  { q: 'Et les deux suivantes ?', a: 'Le client veut des chiffres plus précis. Peux-tu refaire les graphiques ?' },
  { q: 'Et la phrase sur le directeur ?', a: "J'en ai parlé au directeur : il est d'accord. Le directeur retrouve sa place de complément, et lui disparaît." },
  { q: 'Que devient la fin du message, avec toi ?', a: "Dans un courriel neutre : « Merci beaucoup pour ton aide ». Le toi détaché et t'es appartiennent à l'oral." },
], 'rec-b2-11-texte-a3', ['reprise', 'registre']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La règle', 'Un mot détaché en tête doit être…',
    ['repris par un pronom dans la phrase', 'répété tel quel', 'supprimé'], 0,
    'Ce film, je l’ai adoré. EN: picked up by a pronoun.'),
  ctl('Le choix', '« Paris, j’… vais chaque été. »',
    ['y', 'le', 'en'], 0,
    'Un lieu : y. EN: a place takes y.'),
  ctl('Le registre', '« Moi, ce film, je l’ai adoré » sonne…',
    ['parlé', 'administratif'], 0,
    'La dislocation appartient surtout à l’oral. EN: detachment is mostly spoken.'),
], ['reprise']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La reprise',
    opener: {
      line: "À l'oral, on sort un mot de la phrase et on le reprend par un pronom : ici tu apprends à détacher, et à remettre en ordre pour l'écrit. EN: In speech you pull a word out and pick it up with a pronoun: here you learn to detach, and to restore the order for writing.",
      imageRef: 'lessons/pronoms-insistance/act03.jpg',
    },
    sections: [],
    milestone: "Tu détaches un mot à gauche ou à droite avec le bon pronom de reprise, et tu sais remettre la phrase dans l'ordre neutre de l'écrit. EN: You can detach a word with the right resuming pronoun, and restore the neutral order.",
    estScreens: 36, restPoints: ['a3-construire', 'a3-piege'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_PIEGE, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: SEUL DEVANT LE VERBE
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Le code de la salle',
  frSub: 'Qui savait, qui ne savait pas',
  setting: 'Genève, un lundi matin. Un tableau a disparu du musée. L’inspectrice Morel interroge Théo, le gardien de nuit.',
  bubbles: [
    { from: 'narrator', fr: 'L’inspectrice veut savoir qui connaissait le code de la salle.', en: 'The inspector wants to know who knew the code of the room.' },
    { from: 'coach', fr: 'Dites-moi qui connaissait le code de la salle.', en: 'Tell me who knew the code of the room.' },
    { from: 'user', fr: 'Le directeur. Lui seul connaissait le code.', en: 'The director. He alone knew the code.' },
    { from: 'coach', fr: 'Lui seul : pas de il, parce que seul le met sous le projecteur.', en: 'Lui seul: no il, because seul puts him in the spotlight.', warn: 'Lui seul, sans il' },
    { from: 'user', fr: "Les deux autres gardiens ont fait leur ronde. Eux ont tout fermé ; moi, je suis resté à l'accueil.", en: 'The two other guards did their round. They locked everything; I stayed at reception.' },
    { from: 'coach', fr: 'Eux porte le verbe tout seul, face à toi. Pour toi, il faut je.', en: 'Eux carries the verb on its own, against you. For you, you need je.', warn: 'Eux contre moi' },
    { from: 'user', fr: "Et le chef d'équipe, lui non plus n'a rien vu.", en: 'And the team leader did not see anything either.' },
  ],
  closing: { fr: 'Lui seul, eux, lui non plus : le pronom tonique porte le verbe tout seul quand il s’oppose ou qu’il insiste.', en: 'Lui seul, eux, lui non plus: the stressed pronoun carries the verb alone when it contrasts or insists.' },
  audio: REC('rec-b2-11-musee'),
  say: REFRAME,
  terms: ['seulDevant'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-formes',
  title: 'Quand le pronom tonique porte le verbe',
  frSub: 'Quatre cas, un seul accord',
  hint: 'Quatre cartes. Regarde qui porte le verbe.',
  audio: REC('rec-b2-11-seul'),
  say: REFRAME,
  terms: ['seulDevant'],
  cards: [
    {
      head: 'Face à un autre', label: 'le contraste',
      fr: fr(E(1850)), sub: rsOf(E(1850)),
      body: "Eux s'oppose à nous : il peut porter le verbe tout seul. On l'entend dans les récits, les comptes rendus, la presse. EN: in contrast, eux can carry the verb alone.",
    },
    {
      head: 'Avec seul', label: 'moi seul, toi seul',
      fr: fr(E(1851)), sub: rsOf(E(1851)),
      body: "Moi et toi ne portent un verbe qu'avec seul, et le verbe garde leur personne : moi seul peux, toi seul sais. EN: moi seul peux, first person.",
    },
    {
      head: 'Avec aussi, non plus', label: 'lui aussi',
      fr: fr(E(1854)), sub: rsOf(E(1854)),
      body: "Lui aussi, lui non plus : pas de il. Avec moi et toi, on garde je et tu : moi aussi, j'ai voté contre. EN: lui aussi alone; moi aussi keeps je.",
    },
    {
      head: 'Le verbe suit le pronom', label: 'l’accord',
      fr: fr(E(1853)), sub: rsOf(E(1853)),
      body: "Eux seuls sont, elle seule a, moi seul connais : le verbe prend la personne du pronom, jamais la troisième personne par défaut. EN: the verb takes the pronoun's person.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Fais porter le verbe au bon pronom',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Avec seul', [
      it(E(1849), 'lui seul : troisième personne'),
      it(E(1851), 'moi seul : première personne'),
      it(E(1852), 'toi seule : deuxième personne'),
      it(E(1859), 'toi seul sais, avec un s'),
    ], chk('« Moi seul … signer ce document. » Quelle forme ?',
      ['peux', 'peut'], 0,
      'Le verbe suit moi : peux. EN: first person, peux.')),
    grp('En contraste', [
      it(E(1850), 'eux contre nous'),
      it(E(1856), 'eux savaient, nous non'),
      it(E(1857), 'elle crie, lui n’entend rien'),
      it(E(1854), 'lui aussi, comme les autres'),
    ], chk('« Elle a crié ; lui n’a rien entendu. » Qui n’a rien entendu ?',
      ['l’homme', 'la femme'], 0,
      'Lui, face à elle. EN: the man.')),
    ctl('Moi aussi', 'Laquelle est juste ?',
      ["Moi aussi, j'ai voté contre.", 'Moi aussi ai voté contre.'], 0,
      'Avec aussi, moi garde je. EN: moi aussi keeps je.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['seulDevant', 'accord'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui, et combien',
  frSub: 'Dix phrases, un pronom qui porte le verbe',
  lines: [
    ln(E(1849)), ln(E(1850)), ln(E(1851)), ln(E(1853)), ln(E(1855)),
    ln(E(1856)), ln(E(1857)), ln(E(1859)), ln(E(1862)), ln(E(1863)),
  ],
  questions: [
    { q: 'Première phrase : combien de personnes connaissaient le code ?', opts: ['une seule', 'plusieurs'], correct: 0, why: 'Lui seul : personne d’autre. EN: only one.' },
    { q: 'Deuxième phrase : qui a accepté ?', opts: ['nous', 'eux'], correct: 0, why: 'Eux ont refusé, nous avons accepté. EN: we did.' },
    { q: 'Quatrième phrase : qui est resté jusqu’au bout ?', opts: ['eux seuls', 'tout le monde'], correct: 0, why: 'Eux seuls sont restés. EN: only they.' },
    { q: 'Septième phrase : qui a crié ?', opts: ['elle', 'lui'], correct: 0, why: 'Elle a crié ; lui n’a rien entendu. EN: she did.' },
    { q: 'Dernière phrase : qui a compris le problème ?', opts: ['elle seule', 'tout le monde'], correct: 0, why: 'Elle seule a compris. EN: only she.' },
  ],
  audio: REC('rec-b2-11-seul-ecoute'),
  say: REFRAME,
  terms: ['seulDevant'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de sujet seul',
  errors: [
    {
      wrong: 'Moi seul peut signer ce document.',
      right: fr(E(1851)),
      why: "Normal : seul sonne comme une troisième personne. Mais le verbe suit moi : peux. EN: the verb follows moi.",
    },
    {
      wrong: 'Moi ai refusé, eux ont accepté.',
      right: "Moi, j'ai refusé ; eux ont accepté.",
      why: "Normal : eux ont accepté est juste, alors moi semble marcher aussi. Mais moi et toi ne portent un verbe qu'avec seul. EN: moi alone cannot carry the verb.",
    },
    {
      wrong: 'Il seul connaissait le code.',
      right: fr(E(1849)),
      why: "Normal : il est le sujet habituel. Mais seul demande la forme tonique : lui seul. EN: seul needs lui.",
    },
    {
      wrong: 'Eux seuls avait les clés.',
      right: fr(E(1862)),
      why: "Normal : eux seuls sonne comme un bloc. Mais eux est pluriel : avaient. EN: plural verb.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['seulDevant', 'accord'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Compléter : l’assemblée des locataires', TEXTE_A4, [
  { q: 'Les plus âgés, (ils ou eux ?), ont voté contre.', a: 'Eux : après le nom, entre virgules, le pronom tonique oppose les plus âgés aux jeunes.' },
  { q: '(Elle seule) (connaître) le coût exact.', a: "Elle seule connaissait le coût exact : troisième personne du singulier, à l'imparfait." },
  { q: 'Le gérant, (il ou lui ?), n’a rien dit. Moi seul (avoir) demandé un devis.', a: "Le gérant, lui, n'a rien dit. Moi seul ai demandé un deuxième devis : le verbe suit moi." },
  { q: 'Puis (il ou lui ?) aussi a voté pour.', a: 'Puis lui aussi a voté pour : avec aussi, lui porte le verbe tout seul, sans il.' },
], 'rec-b2-11-texte-a4', ['seulDevant']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Lui seul', '« … seul connaissait le code. »',
    ['Lui', 'Il'], 0,
    'Seul demande la forme tonique. EN: seul needs lui.'),
  ctl('Le verbe', '« Toi seul … où sont les clés. »',
    ['sais', 'sait'], 0,
    'Le verbe suit toi : sais. EN: second person.'),
  ctl('Moi', '« Moi, … refusé. »',
    ['j’ai', 'ai'], 0,
    'Sans seul, moi a besoin de je. EN: moi needs je.'),
], ['seulDevant']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Seul devant le verbe',
    opener: {
      line: "Lui seul savait, eux ont refusé : ici le pronom tonique porte le verbe tout seul, et tu règles son accord. EN: He alone knew, they refused: here the stressed pronoun carries the verb alone, and you get its agreement right.",
      imageRef: 'lessons/pronoms-insistance/act04.jpg',
    },
    sections: [],
    milestone: "Tu fais porter le verbe à lui, eux ou moi seul, avec la bonne personne, et tu sais quand garder je et tu. EN: You can let lui, eux or moi seul carry the verb, in the right person.",
    estScreens: 34, restPoints: ['a4-cartes', 'a4-ecoute'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_ECOUTE, A4_ERREURS, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: TOI ET MOI, NOUS
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Deux sujets, un verbe',
  frSub: 'Lis, puis trouve la personne du verbe',
  examples: [
    ex(E(1865), 'Paul et moi : nous, sans reprise, à l’écrit'),
    ex(PE2(427), `la même chose, avec nous repris, comme dans ${TONIQUES_REF}`),
    ex(E(1867), 'toi et lui : vous'),
    ex(E(1869), 'Marie et lui : ils'),
    ex(E(1870), 'ni toi ni moi : nous'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-accords',
  title: 'La personne qui l’emporte',
  frSub: 'Quatre cartes, une seule règle',
  hint: 'Quatre cartes. Cherche qui est dans le groupe.',
  audio: REC('rec-b2-11-accord'),
  say: REFRAME,
  terms: ['accord'],
  cards: [
    {
      head: 'Moi dans le groupe', label: 'nous',
      fr: fr(E(1873)), sub: rsOf(E(1873)),
      body: "Mes collègues et moi, c'est nous : avons. Par politesse, moi se met en dernier : mes collègues et moi. EN: with moi, the verb is nous; moi goes last.",
    },
    {
      head: 'Toi dans le groupe', label: 'vous',
      fr: fr(E(1876)), sub: rsOf(E(1876)),
      body: "Toi et ta sœur, c'est vous : avez. Si moi est là aussi, nous l'emporte : toi et moi, nous avons. EN: toi plus another gives vous.",
    },
    {
      head: 'Avec ou sans reprise', label: 'nous, vous',
      fr: fr(E(1868)), sub: rsOf(E(1868)),
      body: "La reprise nous ou vous est fréquente, surtout à l'oral. À l'écrit soigné, on peut s'en passer : toi et lui êtes invités. EN: resuming nous or vous is optional.",
    },
    {
      head: 'Ni … ni', label: 'la même règle',
      fr: fr(E(1870)), sub: rsOf(E(1870)),
      body: "Ni toi ni moi : moi l'emporte encore, donc nous, connaissons. EN: ni … ni follows the same rule.",
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trouve la personne du verbe',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Avec moi : nous', [
      it(E(1865), 'Paul et moi : sommes'),
      it(E(1873), 'mes collègues et moi : avons'),
      it(E(1875), 'Julien et moi : avons'),
      it(E(1877), 'mon mari et moi : remercions'),
    ], chk('« Julien et moi … la même opinion. »',
      ['avons', 'ont', 'avez'], 0,
      'Moi dans le groupe : nous. EN: nous.')),
    grp('Sans moi : vous ou ils', [
      it(E(1867), 'toi et lui : vous'),
      it(E(1876), 'toi et ta sœur : vous'),
      it(E(1869), 'Marie et lui : ils'),
      it(E(1878), 'lui et elle : ils'),
    ], chk('« Toi et lui … invités samedi. »',
      ['êtes', 'sont', 'sommes'], 0,
      'Toi dans le groupe, sans moi : vous. EN: vous.')),
    ctl('La politesse', 'À l’écrit, laquelle est la plus soignée ?',
      [fr(E(1877)), 'Moi et mon mari, on vous remercie.'], 0,
      'Moi en dernier, et nous plutôt que on. EN: moi last, nous not on.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Le verbe à la mauvaise personne',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'La personne la plus proche l’emporte',
    body: "Moi avec quelqu'un donne nous ; toi avec quelqu'un d'autre que moi donne vous ; sans moi ni toi, ils ou elles. Après et, les pronoms sont toniques : Marie et lui. EN: moi gives nous, toi gives vous; after et, stressed forms.",
  },
  cards: [
    trap(E(1865), 'mauvaise personne', 'Paul et moi sont arrivés en retard.', 'Paul et moi, c’est nous : sommes. EN: that is nous.'),
    trap(E(1875), 'mauvaise personne', 'Julien et moi ont la même opinion.', 'Julien et moi, c’est nous : avons. EN: avons.'),
    trap(E(1876), 'mauvaise personne', 'Toi et ta sœur, vous ont raison.', 'Vous : avez. EN: avez.'),
    trap(E(1870), 'mauvaise personne', 'Ni toi ni moi ne connaissent la réponse.', 'Moi l’emporte : connaissons. EN: connaissons.'),
    trap(E(1873), 'ordre impoli', 'Moi et mes collègues avons signé la pétition.', 'À l’écrit, moi en dernier. EN: moi goes last.'),
    trap(E(1869), 'mauvaise forme', 'Marie et il sont partis ensemble.', 'Après et, la forme tonique : lui. EN: after et, lui.'),
  ],
  drill: [
    { promptSay: 'Paul et moi … arrivés en retard.', opts: ['sommes', 'sont'], correct: 0 },
    { promptSay: 'Toi et lui … invités samedi.', opts: ['êtes', 'sont'], correct: 0 },
    { promptSay: 'Marie et lui … partis ensemble.', opts: ['sont', 'êtes'], correct: 0 },
    { promptSay: 'Ni toi ni moi ne … la réponse.', opts: ['connaissons', 'connaissent'], correct: 0 },
    { promptSay: 'Toi et moi, … avons raison.', opts: ['nous', 'vous'], correct: 0 },
    { promptSay: 'Ta sœur et toi, … venez à quelle heure ?', opts: ['vous', 'ils'], correct: 0 },
    { promptSay: 'Mes collègues et … avons signé.', opts: ['moi', 'je'], correct: 0 },
    { promptSay: 'Mon mari et moi vous … de votre accueil.', opts: ['remercions', 'remercient'], correct: 0 },
  ],
  steps: STEPS('La personne la plus proche l’emporte', 'Ce que la main écrit trop vite'),
  audio: REC('rec-b2-11-piege-accord'),
  say: REFRAME,
  terms: ['accord'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Sommes ou sont, avons ou ont',
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Compléter : le message de Sofia', TEXTE_A5, [
  { q: 'Complète : ma sœur et moi (ne pas pouvoir) ; notre cousin et nous (partir).', a: 'Ma sœur et moi ne pouvons pas venir ; notre cousin et nous partons : moi ou nous dans le groupe, donc nous.' },
  { q: 'Complète : vous et moi (pouvoir) ; mes parents et moi vous (remercier).', a: 'Vous et moi pouvons en parler (moi l’emporte sur vous) ; mes parents et moi vous remercions.' },
  { q: 'Complète : ni ma sœur ni moi ne (vouloir).', a: 'Ni ma sœur ni moi ne voulons perdre notre place : même règle avec ni … ni.' },
  { q: 'Complète la fin : mon frère et elle (répéter).', a: 'Mon frère et elle répètent : ni moi ni toi dans le groupe, donc ils.' },
], 'rec-b2-11-texte-a5', ['accord']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Moi', 'Paul et moi, c’est…',
    ['nous', 'ils', 'vous'], 0,
    'Moi dans le groupe : nous. EN: nous.'),
  ctl('Toi', 'Toi et Marie, c’est…',
    ['vous', 'nous'], 0,
    'Toi sans moi : vous. EN: vous.'),
  ctl('L’ordre', 'À l’écrit, on écrit…',
    ['mes amis et moi', 'moi et mes amis'], 0,
    'Par politesse, moi en dernier. EN: moi last.'),
], ['accord']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Toi et moi, nous',
    opener: {
      line: "Paul et moi, toi et lui, ni toi ni moi : ici tu trouves la personne du verbe quand deux sujets se partagent la lumière. EN: Paul and I, you and he, neither you nor I: here you find the verb's person when two subjects share the light.",
      imageRef: 'lessons/pronoms-insistance/act05.jpg',
    },
    sections: [],
    milestone: "Tu accordes le verbe avec deux sujets, avec ou sans reprise, et tu places moi en dernier. EN: You can agree the verb with compound subjects and put moi last.",
    estScreens: 34, restPoints: ['a5-construire', 'a5-piege'],
  },
  sections: [A5_EXEMPLES, A5_CARTES, A5_CONSTRUIRE, A5_PIEGE, A5_DICTEE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: C'EST MOI QUI
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'La machine à café',
  frSub: 'Qui l’a laissée allumée',
  setting: 'Montréal, un lundi matin. La machine à café du bureau est en panne, et Mme Tremblay cherche qui l’a utilisée en dernier.',
  bubbles: [
    { from: 'narrator', fr: 'Mme Tremblay passe de bureau en bureau.', en: 'Mrs Tremblay goes from office to office.' },
    { from: 'coach', fr: "Quelqu'un a laissé la machine allumée tout le week-end.", en: 'Someone left the machine on all weekend.' },
    { from: 'user', fr: "Ce n'est pas moi qui l'ai utilisée en dernier.", en: 'I am not the one who used it last.' },
    { from: 'coach', fr: 'Moi qui ai : le verbe garde la personne de moi.', en: 'Moi qui ai: the verb keeps the person of moi.', warn: 'Moi qui ai' },
    { from: 'user', fr: "C'est nous qui sommes venus samedi, Julien et moi.", en: 'We are the ones who came on Saturday, Julien and I.' },
    { from: 'coach', fr: 'Nous qui sommes : première personne du pluriel.', en: 'Nous qui sommes: first person plural.', warn: 'Nous qui sommes' },
    { from: 'user', fr: "Mais c'est lui qui l'a éteinte, pas moi.", en: 'But he is the one who switched it off, not me.' },
  ],
  closing: { fr: 'Après c’est … qui, le verbe suit le pronom : moi qui ai, nous qui sommes, lui qui a.', en: 'After c’est … qui, the verb follows the pronoun.' },
  audio: REC('rec-b2-11-cafe'),
  say: REFRAME,
  terms: ['relief'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-accords',
  title: 'Mettre une personne en relief',
  frSub: 'C’est … qui, c’est … que',
  hint: 'Quatre cartes. La deuxième est la plus importante.',
  audio: REC('rec-b2-11-relief'),
  say: REFRAME,
  terms: ['relief'],
  cards: [
    {
      head: 'Désigner la personne', label: Cap(CEST_REF),
      fr: fr('fr.b1.description-personnes-objets.1142'), sub: rsOf('fr.b1.description-personnes-objets.1142'),
      body: `« ${B122_REFRAME} » C'est … qui montre du doigt celui qui agit. Ici, tu règles l'accord du verbe. EN: ${B122_REFRAME_EN}`,
    },
    {
      head: 'Le verbe suit le pronom', label: 'moi qui ai',
      fr: fr(E(1886)), sub: rsOf(E(1886)),
      body: "Qui reprend moi, et le verbe garde la première personne : ai, pas a. C'est moi qui a s'entend souvent à l'oral ; à l'écrit, c'est une faute. EN: qui keeps the person of moi.",
    },
    {
      head: 'C’est ou ce sont', label: 'eux, elles',
      fr: fr(E(1884)), sub: rsOf(E(1884)),
      body: "À l'écrit, ce sont eux qui, ce sont elles qui. À l'oral, c'est eux qui est courant. Nous et vous gardent c'est. EN: ce sont eux in writing; c'est eux in speech.",
    },
    {
      head: 'C’est … que', label: 'à toi que',
      fr: fr(E(1889)), sub: rsOf(E(1889)),
      body: "Pour un complément, c'est … que, et la préposition reste avec le pronom : c'est à toi que je parle, c'est avec eux que je pars. EN: c'est … que keeps the preposition.",
    },
  ],
};

const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-table',
  layer: 'core',
  sheetId: 'sheet-accords',
  title: 'Six personnes après qui',
  cols: ['Personne', 'Avec avoir', 'Avec être'],
  rows: [
    { cells: ['moi', "c'est moi qui ai", "c'est moi qui suis"], say: fr(E(1886)),
      detail: { title: 'moi qui', body: "Première personne : ai, suis. Jamais a, jamais est. EN: first person.", say: fr(E(1894)) } },
    { cells: ['toi', "c'est toi qui as", "c'est toi qui es"], say: fr(E(1887)),
      detail: { title: 'toi qui', body: "Deuxième personne : as, es, avec un s. EN: second person, with s.", say: fr(E(1896)) } },
    { cells: ['lui, elle', "c'est lui qui a", "c'est elle qui est"], say: fr(E(1891)),
      detail: { title: 'lui qui', body: "Troisième personne : a, est. EN: third person.", say: fr('fr.b1.description-personnes-objets.1142') } },
    { cells: ['nous', "c'est nous qui avons", "c'est nous qui sommes"], say: fr(E(1882)),
      detail: { title: 'nous qui', body: "Première personne du pluriel : avons, sommes. EN: first person plural.", say: fr(E(1895)) } },
    { cells: ['vous', "c'est vous qui avez", "c'est vous qui êtes"], say: fr(E(1883)),
      detail: { title: 'vous qui', body: "Deuxième personne du pluriel : avez, êtes. EN: second person plural.", say: fr(E(1892)) } },
    { cells: ['eux, elles', 'ce sont eux qui ont', 'ce sont elles qui sont'], say: fr(E(1884)),
      detail: { title: 'eux qui', body: "À l'écrit, ce sont ; à l'oral, c'est eux qui ont. EN: ce sont in writing.", say: fr(E(1885)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['relief', 'accord'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Accorde après qui, choisis après que',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Qui : le verbe suit', [
      it(E(1882), 'nous qui sommes'),
      it(E(1883), 'vous qui avez'),
      it(E(1886), 'moi qui ai'),
      it(E(1887), 'toi qui avais'),
    ], chk('« C’est moi qui … proposé cette idée. »',
      ['ai', 'a', 'est'], 0,
      'Le verbe suit moi. EN: ai, after moi.')),
    grp('Que : le complément', [
      it(E(1888), 'lui, complément de voir'),
      it(E(1889), 'à toi, avec la préposition'),
      it(E(1890), 'avec eux, avec la préposition'),
      it(E(1899), 'de toi, avec la préposition'),
    ], chk('Tu parles à ton ami : « C’est … que je parle. »',
      ['à toi', 'toi', 'ton'], 0,
      'Parler à quelqu’un : la préposition reste. EN: à stays.')),
    ctl('La négation', '« Ce n’est pas lui qui a commencé, c’est moi. » Qui a commencé ?',
      ['la personne qui parle', 'lui'], 0,
      'Ce n’est pas lui, c’est moi. EN: the speaker.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['relief'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui a fait quoi',
  frSub: 'Dix phrases en relief',
  lines: [
    ln(E(1882)), ln(E(1883)), ln(E(1884)), ln(E(1886)), ln(E(1887)),
    ln(E(1891)), ln(E(1894)), ln(E(1897)), ln(E(1900)), ln('fr.b1.pronoms-essentiels.1022'),
  ],
  questions: [
    { q: 'Première phrase : qui est arrivé les premiers ?', opts: ['nous', 'vous'], correct: 0, why: 'C’est nous qui sommes arrivés. EN: we did.' },
    { q: 'Quatrième phrase : qui a proposé l’idée ?', opts: ['la personne qui parle', 'une collègue'], correct: 0, why: 'C’est moi qui ai proposé. EN: the speaker.' },
    { q: 'Sixième phrase : qui décide ?', opts: ['elle', 'la personne qui parle'], correct: 0, why: 'C’est elle qui décide, pas moi. EN: she does.' },
    { q: 'Huitième phrase : qui a commencé ?', opts: ['la personne qui parle', 'lui'], correct: 0, why: 'Ce n’est pas lui, c’est moi. EN: the speaker.' },
    { q: 'Neuvième phrase : est-ce une question ?', opts: ['oui', 'non'], correct: 0, why: 'L’intonation monte : c’est une question. EN: yes.' },
  ],
  audio: REC('rec-b2-11-relief-ecoute'),
  say: REFRAME,
  terms: ['relief'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'C’est moi qui a, et ses cousins',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Qui garde la personne du pronom',
    body: "Après c'est moi qui, c'est toi qui, c'est nous qui, le verbe ne passe pas à la troisième personne : il garde celle du pronom. À l'écrit, ce sont eux qui. EN: after qui, the verb keeps the pronoun's person.",
  },
  cards: [
    trap(E(1886), 'qui a', 'C’est moi qui a proposé cette idée.', 'Moi : ai. EN: ai, after moi.'),
    trap(E(1883), 'qui a', 'C’est vous qui l’a dit.', 'Vous : avez. EN: avez.'),
    trap(E(1882), 'qui sont', 'C’est nous qui sont arrivés les premiers.', 'Nous : sommes. EN: sommes.'),
    trap(E(1887), 'qui avait', 'C’est toi qui avait raison.', 'Toi : avais, avec un s. EN: avais.'),
    trap(E(1892), 'qui est', 'C’est vous qui est en charge du dossier.', 'Vous : êtes. EN: êtes.'),
    trap(E(1897), 'qui ai', 'Ce n’est pas lui qui ai commencé, c’est moi.', 'Le verbe suit lui, pas moi : a. EN: a, after lui.'),
  ],
  drill: [
    { promptSay: 'C’est moi qui … proposé cette idée.', opts: ['ai', 'a'], correct: 0 },
    { promptSay: 'C’est vous qui l’… dit.', opts: ['avez', 'a'], correct: 0 },
    { promptSay: 'C’est nous qui … arrivés les premiers.', opts: ['sommes', 'sont'], correct: 0 },
    { promptSay: 'C’est toi qui … raison.', opts: ['avais', 'avait'], correct: 0 },
    { promptSay: 'Ce n’est pas lui qui … commencé.', opts: ['a', 'ai'], correct: 0 },
    { promptSay: 'C’est vous qui … en charge du dossier.', opts: ['êtes', 'est'], correct: 0 },
    { promptSay: 'À l’écrit : … eux qui ont gagné.', opts: ['ce sont', 'c’est'], correct: 0 },
    { promptSay: 'C’est … que je parle.', opts: ['à toi', 'toi'], correct: 0 },
  ],
  steps: STEPS('Qui garde la personne du pronom', 'Ce que l’oreille laisse passer'),
  audio: REC('rec-b2-11-piege-relief'),
  say: REFRAME,
  terms: ['relief'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Corriger : le compte rendu de Bastien', TEXTE_A6, [
  { q: 'Trouve les deux premières erreurs.', a: `${TEXTE_A6_REPONSES[0]} ; ${TEXTE_A6_REPONSES[1]}. Le verbe suit moi, puis vous.` },
  { q: 'Et la troisième ?', a: `${TEXTE_A6_REPONSES[2]} : nous, et le pronom du verbe pronominal suit aussi.` },
  { q: 'Et les deux dernières ?', a: `${TEXTE_A6_REPONSES[3]} ; ${TEXTE_A6_REPONSES[4]}.` },
  { q: 'Faut-il corriger « ce sont Lucie et Omar qui présenteront » ?', a: 'Non : deux noms, troisième personne du pluriel, et ce sont à l’écrit. La phrase est juste.' },
], 'rec-b2-11-texte-a6', ['relief']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Moi qui', '« C’est moi qui … les clés. »',
    ['ai', 'a'], 0,
    'Le verbe suit moi. EN: ai.'),
  ctl('Nous qui', '« C’est nous qui … d’accord. »',
    ['sommes', 'sont', 'est'], 0,
    'Nous : sommes. EN: sommes.'),
  ctl('L’écrit', 'Dans un rapport :',
    ['ce sont eux qui ont décidé', 'c’est eux qui ont décidé'], 0,
    'À l’écrit, ce sont eux. EN: ce sont in writing.'),
], ['relief']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'C’est moi qui',
    opener: {
      line: "Quand on cherche qui a fait quoi, c'est … qui désigne la personne : ici tu règles le verbe qui la suit. EN: When people ask who did what, c'est … qui names the person: here you get the verb after it right.",
      imageRef: 'lessons/pronoms-insistance/act06.jpg',
    },
    sections: [],
    milestone: "Tu mets une personne en relief avec c'est … qui ou c'est … que, et le verbe garde la personne du pronom : c'est moi qui ai. EN: You can highlight a person and keep the verb in the pronoun's person.",
    estScreens: 42, restPoints: ['a6-table', 'a6-ecoute'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_TABLE, A6_CONSTRUIRE, A6_ECOUTE, A6_PIEGE, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: LE RENFORT
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Le déménagement d’Amina',
  frSub: 'Sans camion, sans déménageurs',
  setting: 'Liège, un samedi. Amina et ses amis ont vidé un appartement entier, et elle raconte la journée à sa voisine.',
  bubbles: [
    { from: 'narrator', fr: 'Amina a mal au dos, mais elle est fière.', en: 'Amina’s back hurts, but she is proud.' },
    { from: 'user', fr: 'Nous avons tout porté nous-mêmes, sans camion.', en: 'We carried everything ourselves, without a van.' },
    { from: 'coach', fr: 'Nous-mêmes, avec un s : le pronom est pluriel.', en: 'Nous-mêmes, with an s: the pronoun is plural.', warn: 'Nous-mêmes, au pluriel' },
    { from: 'user', fr: 'Les voisins du dessous ont aidé. Eux aussi ont porté des cartons.', en: 'The downstairs neighbours helped. They carried boxes too.' },
    { from: 'coach', fr: 'Eux aussi : comme vous, et sans ils.', en: 'Eux aussi: like you, and without ils.', warn: 'Eux aussi, sans ils' },
    { from: 'user', fr: fr(E(1903)), en: en(E(1903)) },
    { from: 'coach', fr: 'À nous deux : ensemble, toi et moi.', en: 'À nous deux: together, you and I.', warn: 'Deux, juste après le pronom' },
  ],
  closing: { fr: 'Même, aussi, seul, tous, deux : un petit mot après le pronom tonique élargit ou resserre la lumière.', en: 'A small word after the stressed pronoun widens or narrows the light.' },
  audio: REC('rec-b2-11-amina'),
  say: REFRAME,
  terms: ['renfort'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-accords',
  title: 'Quatre renforts',
  frSub: 'Même, aussi, tous, deux',
  hint: 'Quatre cartes. Regarde les s.',
  audio: REC('rec-b2-11-renfort'),
  say: REFRAME,
  terms: ['renfort'],
  cards: [
    {
      head: 'Même, au pluriel', label: Cap(MEME_REF),
      fr: fr('fr.b1.comparaisons.1069'), sub: rsOf('fr.b1.comparaisons.1069'),
      body: `« ${B124_REFRAME} » Nous-mêmes, eux-mêmes, elles-mêmes : même prend un s quand le pronom est pluriel. EN: ${B124_REFRAME_EN}`,
    },
    {
      head: 'Vous-même ou vous-mêmes', label: 'la politesse',
      fr: fr(E(1907)), sub: rsOf(E(1907)),
      body: "Vous-même pour une seule personne qu'on vouvoie, vous-mêmes pour plusieurs : le s dit combien vous êtes. EN: one polite person, no s.",
    },
    {
      head: 'Aussi, non plus', label: 'comme les autres',
      fr: fr(E(1911)), sub: rsOf(E(1911)),
      body: "Eux aussi, nous non plus : le pronom rejoint les autres. Avec lui et eux, le pronom sujet disparaît. EN: joining the others.",
    },
    {
      head: 'Tous, deux, trois', label: Cap(TOUT_REF),
      fr: fr(E(1904)), sub: rsOf(E(1904)),
      body: `Vous tous, nous deux, eux trois : le mot suit directement le pronom, sans article. « ${B123_REFRAME} » EN: ${B123_REFRAME_EN}`,
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Élargis ou resserre la lumière',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Même', [
      it(E(1906), 'de moi-même : seul, sans aide'),
      it(E(1907), 'vous-même : une personne'),
      it(E(1908), 'vous-mêmes : plusieurs'),
      it(E(1909), 'eux-mêmes, sujet'),
    ], chk('« Vous l’avez dit vous-mêmes. » Combien de personnes ?',
      ['plusieurs', 'une seule'], 0,
      'Le s de mêmes dit le pluriel. EN: the s marks the plural.')),
    grp('Deux, tous, trois', [
      it(E(1902), 'vous deux'),
      it(E(1903), 'à nous deux : ensemble'),
      it(E(1904), 'vous tous'),
      it(E(1905), 'eux trois'),
    ], chk('« À nous deux, nous finirons ce soir. » Que veut dire à nous deux ?',
      ['ensemble, toi et moi', 'chacun de son côté'], 0,
      'À nous deux : en unissant nos forces. EN: together.')),
    grp('Aussi, non plus', [
      it(E(1910), 'nous non plus'),
      it(E(1911), 'eux aussi'),
      it('fr.b1.expressions-de-quantite.1167', 'nous tous, à l’oral avec on'),
      it(E(1915), 'moi-même, avec je'),
    ], chk('« Eux aussi ont signé. » Faut-il ajouter ils ?',
      ['non, eux porte le verbe', 'oui, toujours'], 0,
      'Avec aussi, eux suffit. EN: eux is enough.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['renfort'],
};

const A7_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a7-flash',
  layer: 'core',
  title: 'Huit renforts à avoir en bouche',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'we ourselves', back: 'nous-mêmes', say: fr('fr.b1.comparaisons.1069') },
    { front: 'you yourself (polite)', back: 'vous-même', say: fr(E(1907)) },
    { front: 'you yourselves', back: 'vous-mêmes', say: fr(E(1908)) },
    { front: 'you two', back: 'vous deux', say: fr(E(1902)) },
    { front: 'between the two of us', back: 'à nous deux', say: fr(E(1903)) },
    { front: 'all of you', back: 'vous tous', say: fr(E(1904)) },
    { front: 'they did too', back: 'eux aussi', say: fr(E(1911)) },
    { front: 'on my own', back: 'de moi-même', say: fr(E(1906)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['renfort'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de renfort',
  errors: [
    {
      wrong: 'Nous avons tout porté nous-même.',
      right: 'Nous avons tout porté nous-mêmes.',
      why: "Normal : même ressemble à un mot qui ne change pas. Après un pronom pluriel, il prend un s. EN: plural after a plural pronoun.",
    },
    {
      wrong: 'Nous les deux, on part demain.',
      right: 'Nous deux, on part demain.',
      why: "Normal : on dit bien tous les deux. Mais après un pronom, le nombre arrive seul : nous deux, vous trois. EN: no article after the pronoun.",
    },
    {
      wrong: 'Ils aussi ont signé.',
      right: fr(E(1911)),
      why: "Normal : ils est le sujet habituel. Mais aussi demande la forme tonique : eux aussi. EN: aussi needs eux.",
    },
    {
      wrong: 'Madame, vous l’avez reconnu vous-mêmes.',
      right: 'Madame, vous l’avez reconnu vous-même.',
      why: "Normal : vous finit par un s. Mais une seule personne vouvoyée : vous-même, sans s. EN: one person, no s.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['renfort'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Compléter : le message d’Amina', TEXTE_A7, [
  { q: 'Complète le début : nous-(…) ; les enfants (…).', a: 'Nous-mêmes, avec un s ; les enfants aussi ont planté des tomates.' },
  { q: 'Complète : vous (…), vous êtes invités ; Paul et Léo, vous (…).', a: 'Vous tous, vous êtes invités ; Paul et Léo, vous deux, vous apportez les chaises ?' },
  { q: 'Complète la fin : eux (…) connaissent le code ; elle-(…).', a: 'Eux seuls connaissent le code, personne d’autre ; Mme Roy, elle-même, a promis de venir.' },
], 'rec-b2-11-texte-a7', ['renfort']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le pluriel', '« Ils ont tout organisé … »',
    ['eux-mêmes', 'eux-même'], 0,
    'Pronom pluriel, même pluriel. EN: plural.'),
  ctl('La politesse', 'Tu vouvoies une seule personne : « Vérifiez … »',
    ['vous-même', 'vous-mêmes'], 0,
    'Une personne, pas de s. EN: no s.'),
  ctl('Le nombre', '« … deux, vous êtes inséparables. »',
    ['Vous', 'Les vous'], 0,
    'Le nombre suit le pronom directement. EN: no article.'),
], ['renfort']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Le renfort',
    opener: {
      line: "Nous-mêmes, eux aussi, vous deux, vous tous : ici un petit mot après le pronom élargit ou resserre la lumière. EN: Nous-mêmes, eux aussi, vous deux, vous tous: here a small word after the pronoun widens or narrows the light.",
      imageRef: 'lessons/pronoms-insistance/act07.jpg',
    },
    sections: [],
    milestone: "Tu renforces un pronom tonique avec même, aussi, non plus, tous ou deux, et tu accordes même au pluriel. EN: You can reinforce a stressed pronoun and agree même in the plural.",
    estScreens: 34, restPoints: ['a7-cartes', 'a7-flash'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_CONSTRUIRE, A7_FLASH, A7_ERREURS, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: QUI EST IL
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui est qui',
  frSub: 'Dix phrases, deux personnes chaque fois',
  lines: [
    ln(E(1918)), ln(E(1919)), ln(E(1920)), ln(E(1921)), ln(E(1932)),
    ln(E(1922)), ln(E(1923)), ln(E(1926)), ln(E(1927)), ln(E(1933)),
  ],
  questions: [
    { q: 'Première phrase : qui n’a pas reconnu l’autre ?', opts: ['Paul', 'Marc'], correct: 0, why: 'Lui, en tête, passe à l’autre homme : Paul. EN: Paul.' },
    { q: 'Troisième phrase : qui n’a pas décroché ?', opts: ['la mère', 'Léa'], correct: 0, why: 'Elle, elle : la lumière passe sur la mère. EN: the mother.' },
    { q: 'Quatrième phrase : qui voulait une augmentation ?', opts: ['Karim', 'le directeur'], correct: 0, why: 'Lui : l’autre homme, Karim. EN: Karim.' },
    { q: 'Cinquième phrase : qui l’a mal pris ?', opts: ['Marc', 'Paul'], correct: 0, why: 'Lui : celui qu’on a remplacé. EN: Marc.' },
    { q: 'Dernière phrase : à qui pense-t-il ?', opts: ['à lui-même', 'à un autre homme'], correct: 0, why: 'Sans autre homme dans la phrase, lui renvoie au sujet. EN: himself.' },
  ],
  audio: REC('rec-b2-11-ambiguite-ecoute'),
  say: REFRAME,
  terms: ['ambiguite'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-reprise',
  title: 'Il, lui, le, à lui',
  frSub: 'Lever le doute, choisir la place',
  hint: 'Quatre cartes. Les deux premières lèvent un doute.',
  audio: REC('rec-b2-11-ambiguite'),
  say: REFRAME,
  terms: ['ambiguite'],
  cards: [
    {
      head: 'Il continue', label: 'le même sujet',
      fr: fr(E(1919)), sub: rsOf(E(1919)),
      body: "Après une phrase où Marc est sujet, il continue d'habitude avec Marc. Mais Paul est aussi un il, et le lecteur hésite. EN: il tends to continue the subject, and the reader hesitates.",
    },
    {
      head: 'Lui change', label: 'l’autre homme',
      fr: fr(E(1918)), sub: rsOf(E(1918)),
      body: "Lui, en tête et sans il, fait passer la lumière sur l'autre : c'est Paul qui n'a pas reconnu Marc. EN: a stressed lui switches to the other man.",
    },
    {
      head: 'Lui devant le verbe', label: Cap(INDIRECT_REF),
      fr: fr(PE2(238)), sub: rsOf(PE2(238)),
      body: `Je lui parle : lui complément, devant le verbe, comme dans ${INDIRECT_REF}. Il ne met personne en lumière ; il remplace à + une personne. EN: object lui goes before the verb.`,
    },
    {
      head: 'À lui, après le verbe', label: 'penser à',
      fr: fr(E(1922)), sub: rsOf(E(1922)),
      body: "Penser à, tenir à, faire attention à, s'intéresser à : la personne reste après le verbe, avec à et le pronom tonique. Jamais je lui pense. EN: these verbs keep à + stressed pronoun.",
    },
  ],
};

const A8_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-trier',
  layer: 'core',
  size: 'lg',
  title: 'Lui devant, à lui derrière',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Lui, devant le verbe', [
      it(E(1923), 'téléphoner à quelqu’un'),
      it(PE2(238), 'parler à quelqu’un'),
      it(E(1931), 'écrire à quelqu’un'),
      it(E(1841), 'parler à ta sœur, repris'),
    ], chk('« Je … téléphone tous les soirs. » (à mon frère)',
      ['lui', 'à lui', 'le'], 0,
      'Téléphoner à : lui, devant le verbe. EN: lui before the verb.')),
    grp('À lui, après le verbe', [
      it(E(1922), 'penser à'),
      it(E(1926), 'tenir à'),
      it(E(1927), 's’intéresser à'),
      it(E(1925), 'faire attention à'),
    ], chk('« Je tiens beaucoup … » (à ma sœur)',
      ['à elle', 'lui', 'la'], 0,
      'Tenir à : à elle, après le verbe. EN: à elle.')),
    ctl('Le, pas lui', '« Je … ai croisé ce matin. » (mon voisin)',
      ['l’', 'lui'], 0,
      'Croiser quelqu’un, sans à : le, élidé en l’. EN: no à, so le.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ambiguite'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Lui, le ou à lui',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le verbe choisit, le doute se lève',
    body: "Un complément sans à : le. Avec à, lui devant le verbe, sauf après penser à, tenir à, faire attention à, s'intéresser à : à lui après. Pour passer à l'autre personne, lui en tête. EN: no à, le; with à, lui; after penser à, à lui.",
  },
  cards: [
    trap(E(1922), 'lui devant', 'Je lui pense souvent.', 'Penser à : à lui, après le verbe. EN: penser à keeps à lui.'),
    trap(E(1923), 'le au lieu de lui', 'Je le téléphone tous les soirs.', 'Téléphoner à : lui. EN: téléphoner à takes lui.'),
    trap(E(1926), 'lui devant', 'Je lui tiens beaucoup.', 'Tenir à : à elle. EN: tenir à keeps à.'),
    trap(E(1924), 'lui au lieu de le', 'Je lui ai croisé ce matin.', 'Croiser quelqu’un : le, élidé. EN: croiser takes le.'),
    trap(E(1918), 'il ambigu', 'Marc a croisé Paul au marché ; il ne l’a pas reconnu.', 'Pour parler de Paul, lui. EN: lui switches to Paul.'),
    trap(E(1925), 'leur devant', 'Fais-leur attention.', 'Faire attention à : à eux, après le verbe. EN: à eux.'),
  ],
  drill: [
    { promptSay: 'Je pense souvent … (à mon père).', opts: ['à lui', 'lui'], correct: 0 },
    { promptSay: 'Je … téléphone ce soir (à ma mère).', opts: ['lui', 'la'], correct: 0 },
    { promptSay: 'Je … ai croisé ce matin (mon voisin).', opts: ['l’', 'lui'], correct: 0 },
    { promptSay: 'Fais attention … (aux enfants).', opts: ['à eux', 'leur'], correct: 0 },
    { promptSay: 'Je … ai écrit une lettre (à mon oncle).', opts: ['lui', 'l’'], correct: 0 },
    { promptSay: 'On peut compter … (sur tes amis).', opts: ['sur eux', 'les'], correct: 0 },
    { promptSay: 'Elle s’intéresse … (à ce chanteur).', opts: ['à lui', 'lui'], correct: 0 },
    { promptSay: 'Marc a vu Paul ; … ne l’a pas vu (Paul).', opts: ['lui', 'il'], correct: 0 },
  ],
  steps: STEPS('Le verbe choisit, le doute se lève', 'Six pronoms mal placés'),
  audio: REC('rec-b2-11-piege-ambiguite'),
  say: REFRAME,
  terms: ['ambiguite'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Cinq phrases où la lumière passe',
  frSub: 'Lis, puis dis de qui on parle',
  examples: [
    ex(E(1920), 'elle, elle : la lumière passe sur la mère'),
    ex(E(1921), 'lui : Karim, pas le directeur'),
    ex(E(1932), 'lui : Marc, celui qu’on a remplacé'),
    ex(E(1933), 'sans autre homme, lui renvoie au sujet'),
    ex(PE2(261), `avec lui, après une préposition, comme dans ${INDIRECT_REF}`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ambiguite'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Réécrire : la dispute des voisins', TEXTE_A8, [
  { q: 'Qui a reproché le bruit à qui ?', a: 'M. Petit à M. Blanc : il continue avec le premier sujet. Cette phrase peut rester.' },
  { q: 'Réécris la troisième phrase.', a: "Lui a répondu qu'il n'avait jamais rien entendu. Lui, en tête, fait passer la lumière sur M. Blanc." },
  { q: 'Réécris la quatrième phrase.', a: "Le texte ne dit pas qui s'énerve. Choisis et dis-le : M. Petit s'est énervé, et M. Blanc, lui, a claqué la porte. Quand le doute reste, redonne un nom." },
  { q: 'Dans la dernière phrase, sa femme, c’est la femme de qui ?', a: 'De M. Petit, le dernier sujet précis. Pour lever tout doute : Mme Petit a appelé Mme Blanc.' },
], 'rec-b2-11-texte-a8', ['ambiguite']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le doute', '« Marc a vu Paul ; lui ne l’a pas vu. » Qui ne l’a pas vu ?',
    ['Paul', 'Marc'], 0,
    'Lui passe à l’autre homme. EN: Paul.'),
  ctl('Penser', '« Je pense … » (à mon frère)',
    ['à lui', 'lui'], 0,
    'Penser à : à lui. EN: à lui.'),
  ctl('Parler', '« Je … parle tous les jours. » (à mon frère)',
    ['lui', 'à lui', 'le'], 0,
    'Parler à : lui, devant le verbe. EN: lui.'),
], ['ambiguite']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Qui est il',
    opener: {
      line: "Deux hommes dans la phrase, et un il qui hésite : ici lui fait passer la lumière sur l'autre, et tu choisis entre lui, le et à lui. EN: Two men in the sentence and a hesitant il: here lui switches the light, and you choose between lui, le and à lui.",
      imageRef: 'lessons/pronoms-insistance/act08.jpg',
    },
    sections: [],
    milestone: "Tu lèves le doute entre deux personnes avec lui ou elle, et tu places lui, le et à lui selon le verbe. EN: You can lift an ambiguity with lui and place lui, le and à lui.",
    estScreens: 36, restPoints: ['a8-cartes', 'a8-piege'],
  },
  sections: [A8_ECOUTE, A8_CARTES, A8_TRIER, A8_PIEGE, A8_EXEMPLES, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: SOI
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Le retour de vacances',
  frSub: 'On est bien chez soi',
  setting: 'Genève, un dimanche soir. Sara rentre de vacances et retrouve sa colocation, où Julien a laissé un mot.',
  bubbles: [
    { from: 'narrator', fr: 'Sara pose sa valise et s’assoit dans la cuisine.', en: 'Sara puts down her suitcase and sits in the kitchen.' },
    { from: 'user', fr: fr(E(1936)), en: en(E(1936)) },
    { from: 'coach', fr: 'Chez soi : on ne désigne personne en particulier.', en: 'Chez soi: on names nobody in particular.', warn: 'On, donc soi' },
    { from: 'user', fr: 'Julien, lui, est reparti chez lui, à Lausanne.', en: 'Julien, for his part, has gone back home, to Lausanne.' },
    { from: 'coach', fr: 'Julien est une personne précise : chez lui.', en: 'Julien is a particular person: chez lui.', warn: 'Une personne précise : lui' },
    { from: 'user', fr: 'Chacun range ses affaires, cela va de soi.', en: 'Everyone puts their things away, that goes without saying.' },
    { from: 'coach', fr: 'Cela va de soi : une expression figée, qui veut dire évidemment.', en: 'Cela va de soi: a fixed phrase meaning obviously.', warn: 'Une expression figée' },
  ],
  closing: { fr: 'Soi pour tout le monde, ou pour personne en particulier ; lui ou elle dès qu’on nomme quelqu’un.', en: 'Soi for anyone at all; lui or elle as soon as someone is named.' },
  audio: REC('rec-b2-11-sara'),
  say: REFRAME,
  terms: ['soi'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-soi',
  title: 'Soi ou lui',
  frSub: 'La lumière sur personne en particulier',
  hint: 'Quatre cartes. Regarde toujours le sujet.',
  audio: REC('rec-b2-11-soi'),
  say: REFRAME,
  terms: ['soi'],
  cards: [
    {
      head: 'On, chacun, personne', label: 'soi',
      fr: fr(E(1941)), sub: rsOf(E(1941)),
      body: "Un sujet qui ne désigne personne de précis appelle soi : on, chacun, personne, tout le monde. Après chacun, lui se dit aussi : chacun est rentré chez lui. EN: an indefinite subject takes soi; after chacun, lui is also used.",
    },
    {
      head: 'Un sujet précis', label: 'lui, elle',
      fr: fr(E(1940)), sub: rsOf(E(1940)),
      body: "Dès que le sujet a un nom, c'est lui ou elle : Paul est rentré chez lui, Marie a ses clés sur elle. EN: a named subject takes lui or elle.",
    },
    {
      head: 'Il faut, un infinitif', label: 'n’importe qui',
      fr: fr(E(1938)), sub: rsOf(E(1938)),
      body: "Il faut et un infinitif sujet parlent de n'importe qui : il faut avoir confiance en soi ; prendre du temps pour soi. EN: il faut and infinitives take soi.",
    },
    {
      head: 'Les expressions figées', label: Cap(MEME_REF),
      fr: fr(E(1937)), sub: rsOf(E(1937)),
      body: `Cela va de soi (évidemment), chacun pour soi, en soi (dans sa nature), et soi-même, vu dans ${MEME_REF} : on les apprend telles quelles. EN: fixed phrases, learned whole.`,
    },
  ],
};

const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-trier',
  layer: 'core',
  size: 'lg',
  title: 'Personne en particulier, ou quelqu’un de précis',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Soi', [
      it(E(1935), 'chacun'),
      it(E(1936), 'on'),
      it(E(1939), 'personne'),
      it(E(1942), 'on, encore'),
    ], chk('Dans ces phrases, qui est le sujet ?',
      ['personne en particulier', 'une personne précise'], 0,
      'On, chacun, personne : n’importe qui. EN: nobody in particular.')),
    grp('Lui ou elle', [
      it(E(1940), 'Paul'),
      it(E(1947), 'Marie'),
      it(E(1950), 'elle, une femme précise'),
      it(E(1933), 'il, un homme précis'),
    ], chk('« Paul est rentré chez … »',
      ['lui', 'soi'], 0,
      'Paul est précis : lui. EN: lui.')),
    ctl('En soi', '« Le problème n’est pas grave en soi. » En soi veut dire…',
      ['dans sa nature', 'chez lui', 'pour tout le monde'], 0,
      'En soi : considéré en lui-même. EN: in itself.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['soi'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Soi, lui ou elle',
  frSub: 'Dix phrases, un seul petit mot',
  lines: [
    ln(E(1935)), ln(E(1936)), ln(E(1937)), ln(E(1938)), ln(E(1940)),
    ln(E(1941)), ln(E(1942)), ln(E(1944)), ln(E(1947)), ln(E(1950)),
  ],
  questions: [
    { q: 'Deuxième phrase : où est-on bien ?', opts: ['chez soi', 'au travail'], correct: 0, why: 'On est bien chez soi. EN: at home.' },
    { q: 'Troisième phrase : que veut dire l’expression ?', opts: ['c’est évident', 'c’est difficile'], correct: 0, why: 'Cela va de soi : évidemment. EN: obviously.' },
    { q: 'Cinquième phrase : où Paul est-il allé ?', opts: ['chez lui', 'chez un ami'], correct: 0, why: 'Paul est rentré chez lui. EN: home.' },
    { q: 'Neuvième phrase : où sont les clés de Marie ?', opts: ['sur elle', 'chez elle'], correct: 0, why: 'Sur elle : dans sa poche. EN: on her.' },
    { q: 'Dernière phrase : de qui ne parle-t-elle jamais ?', opts: ['d’elle-même', 'd’une autre femme'], correct: 0, why: 'Sans autre femme dans la phrase, elle renvoie au sujet. EN: herself.' },
  ],
  audio: REC('rec-b2-11-soi-ecoute'),
  say: REFRAME,
  terms: ['soi'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de soi',
  errors: [
    {
      wrong: 'Paul est rentré chez soi.',
      right: fr(E(1940)),
      why: "Normal : soi ressemble à se, le pronom de Paul dans il se lève. Mais Paul est précis : chez lui. EN: a named person takes lui.",
    },
    {
      wrong: 'Personne n’aime parler de lui.',
      right: fr(E(1939)),
      why: "Normal : lui est plus fréquent. Mais avec personne, lui ferait penser à un autre homme : de soi. EN: after personne, soi.",
    },
    {
      wrong: 'Cela va de lui.',
      right: fr(E(1937)),
      why: "Normal : lui est le pronom qu'on emploie le plus. Mais l'expression est figée : cela va de soi. EN: a fixed phrase.",
    },
    {
      wrong: 'Marie a toujours ses clés sur soi.',
      right: fr(E(1947)),
      why: "Normal : on dit avoir de l'argent sur soi, en général. Mais avec Marie comme sujet : sur elle. EN: with Marie, sur elle.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['soi'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Compléter : les règles de la colocation', TEXTE_A9, [
  { q: 'Complète les règles un et deux.', a: 'Derrière soi (le sujet est chacun ; derrière lui se dit aussi) ; sur soi (le sujet est on).' },
  { q: 'Et la règle trois ?', a: 'Chez lui : Julien est une personne précise.' },
  { q: 'Et les règles quatre et cinq ?', a: "Pour soi (un infinitif sujet, n'importe qui) ; à elle (les chats sont à Sara, c'est à elle de les nourrir)." },
], 'rec-b2-11-texte-a9', ['soi']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('On', '« On est bien chez … »',
    ['soi', 'lui'], 0,
    'On : personne en particulier. EN: soi.'),
  ctl('Paul', '« Paul est rentré chez … »',
    ['lui', 'soi'], 0,
    'Une personne précise : lui. EN: lui.'),
  ctl('Figé', '« Cela va de soi » veut dire…',
    ['évidemment', 'cela part tout seul'], 0,
    'Une expression figée. EN: obviously.'),
], ['soi']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Soi',
    opener: {
      line: "Chacun pour soi, on est bien chez soi : ici la lumière tombe sur tout le monde à la fois, et tu la sépares de lui et d'elle. EN: Chacun pour soi, on est bien chez soi: here the light falls on everyone at once, and you tell it apart from lui and elle.",
      imageRef: 'lessons/pronoms-insistance/act09.jpg',
    },
    sections: [],
    milestone: "Tu choisis soi après on, chacun, personne ou il faut, et lui ou elle pour une personne précise. EN: You can choose soi after indefinite subjects, and lui or elle for a named person.",
    estScreens: 34, restPoints: ['a9-cartes', 'a9-ecoute'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_TRIER, A9_ECOUTE, A9_ERREURS, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: À MOI, À LUI
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-exemples',
  layer: 'core',
  title: 'À qui, et à qui le tour',
  frSub: 'Lis, puis dis ce que fait à',
  examples: [
    ex(PE2(388), `à qui est la chose, comme dans ${POSSESSIFS_REF}`),
    ex(E(1952), 'à moi de + infinitif : mon rôle'),
    ex(E(1953), 'à toi de : ton tour'),
    ex(E(1955), 'un ami à moi : un de mes amis'),
    ex(E(1963), 'à elle lève le doute de son'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aMoi'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-soi',
  title: 'Quatre emplois de à moi',
  frSub: 'La chose, le tour, l’ami, le doute',
  hint: 'Quatre cartes. Regarde ce qui suit le pronom.',
  audio: REC('rec-b2-11-a-moi'),
  say: REFRAME,
  terms: ['aMoi'],
  cards: [
    {
      head: 'À qui c’est', label: Cap(POSSESSIFS_REF),
      fr: fr(E(1958)), sub: rsOf(E(1958)),
      body: "Être à quelqu'un : ce vélo est à eux, il leur appartient. Avec le pronom possessif, on dirait c'est le leur. EN: être à + pronoun, possession.",
    },
    {
      head: 'À qui le tour', label: 'à moi de',
      fr: fr(E(1954)), sub: rsOf(E(1954)),
      body: "C'est à moi de + infinitif : c'est mon tour, ou mon rôle. Sans de, la phrase parle d'une chose qui m'appartient. EN: à moi de + infinitive, my turn or my job.",
    },
    {
      head: 'Un ami à moi', label: 'un de mes',
      fr: fr(E(1962)), sub: rsOf(E(1962)),
      body: "Un ami à moi, une collègue à moi : un de mes amis, dit avec un peu de chaleur. Jamais un ami de moi. EN: a friend of mine.",
    },
    {
      head: 'Son livre à elle', label: 'lever le doute',
      fr: fr(E(1963)), sub: rsOf(E(1963)),
      body: "Son livre peut être à lui ou à elle. À elle lève le doute et insiste : son livre à elle, pas à lui. EN: à elle says whose book it is.",
    },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le tour, ou la chose',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('À moi de : le tour, le rôle', [
      it(E(1952), 'mon rôle'),
      it(E(1953), 'ton tour'),
      it(E(1959), 'notre rôle'),
      it(E(1961), 'ton tour de payer'),
    ], chk('« C’est à toi de jouer. » Que veut dire la phrase ?',
      ['c’est ton tour', 'ce jeu t’appartient'], 0,
      'À toi de + infinitif : ton tour. EN: your turn.')),
    grp('À moi : l’appartenance', [
      it(E(1955), 'un de mes amis'),
      it(E(1956), 'son idée, à elle'),
      it(E(1957), 'une façon bien à lui'),
      it(E(1964), 'leur façon à eux'),
    ], chk('« C’est une idée à elle. » Que dit à elle ?',
      ['que l’idée vient d’elle, pas d’un autre', 'que l’idée est pour elle'], 0,
      'À elle insiste sur l’auteur de l’idée. EN: her own idea.')),
    ctl('La chose', '« Ce vélo est à eux, pas à nous. » Le vélo est…',
      ['le leur', 'le nôtre'], 0,
      'À eux : il leur appartient. EN: theirs.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aMoi'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de à moi',
  errors: [
    {
      wrong: "C'est à moi décider.",
      right: fr(E(1952)),
      why: "Normal : en anglais, it's up to me to decide passe par to. En français, de relie à moi et l'infinitif. EN: de before the infinitive.",
    },
    {
      wrong: 'Un ami de moi habite à Lyon.',
      right: fr(E(1955)),
      why: "Normal : a friend of mine fait penser à de. Mais avec un pronom tonique, c'est à : un ami à moi. EN: à moi, not de moi.",
    },
    {
      wrong: "C'est lui de s'excuser, pas à moi.",
      right: fr(E(1954)),
      why: "Normal : le à se perd à l'oral rapide. Mais sans à, la phrase ne dit plus à qui revient le rôle. EN: keep à.",
    },
    {
      wrong: "C'est son livre d'elle, pas de lui.",
      right: fr(E(1963)),
      why: "Normal : de sert souvent à dire à qui. Mais pour préciser son, sa, ses, on dit à elle, à lui. EN: à elle, not d'elle.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aMoi'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-soi',
  title: 'Quatre règles pour à moi',
  frSub: 'Avant le texte',
  points: [
    "À moi : à qui est la chose. Ce vélo est à eux. EN: whose it is.",
    "À moi de + infinitif : à qui le tour ou le rôle. C'est à toi de jouer. EN: whose turn or job.",
    "Un ami à moi : un de mes amis. EN: a friend of mine.",
    "Son livre à elle : à + pronom lève le doute de son, sa, ses. EN: à elle says whose.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aMoi'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Compléter : l’écharpe rose', TEXTE_A10, [
  { q: 'Complète les deux premiers blancs.', a: "Cette écharpe n'est pas à moi ; elle est peut-être à toi, Clara ?" },
  { q: 'Complète le troisième.', a: 'Une amie à moi : une de mes amies. Une amie à elle (une amie de Clara) va aussi.' },
  { q: 'Complète les deux derniers.', a: "C'est à moi de décider ; ce sera à vous, les stagiaires, de choisir : un rôle, donc à + pronom + de." },
], 'rec-b2-11-texte-a10', ['aMoi']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le tour', '« C’est à moi de décider » veut dire…',
    ['c’est mon rôle', 'la décision m’appartient comme un objet'], 0,
    'À moi de + infinitif : mon rôle. EN: my job.'),
  ctl('L’ami', 'A friend of mine :',
    ['un ami à moi', 'un ami de moi'], 0,
    'Avec un pronom tonique : à. EN: à moi.'),
  ctl('Le doute', '« C’est son sac … » (le sac d’une femme)',
    ['à elle', 'd’elle'], 0,
    'À elle lève le doute de son. EN: à elle.'),
], ['aMoi']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'À moi, à lui',
    opener: {
      line: "À qui est l'écharpe, à qui le tour de payer : ici à suivi d'un pronom tonique dit à qui revient la chose ou le rôle. EN: Whose scarf, whose turn to pay: here à with a stressed pronoun says who the thing or the job belongs to.",
      imageRef: 'lessons/pronoms-insistance/act10.jpg',
    },
    sections: [],
    milestone: "Tu dis à qui est une chose, à qui revient un rôle, et tu lèves le doute de son avec à lui ou à elle. EN: You can say whose thing and whose turn it is, and lift the doubt of son.",
    estScreens: 32, restPoints: ['a10-construire'],
  },
  sections: [A10_EXEMPLES, A10_CARTES, A10_CONSTRUIRE, A10_ERREURS, A10_FOCUS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: L'ORAL ET L'ÉCRIT
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Un débat, deux versions',
  frSub: 'Ce qu’on dit, et ce qu’on écrit',
  text: LECTURE_RADIO,
  glossary: [
    { word: 'commerçants', en: 'shopkeepers', note: 'Les personnes qui tiennent un magasin.' },
    { word: 'loyers', en: 'rents', note: 'Ce qu’on paie chaque mois pour un local ou un logement.' },
    { word: 'parvenus', en: 'reached', note: 'Parvenir à un accord : réussir à s’entendre.' },
  ],
  questions: [
    { q: 'Global : à quoi servent les deux parties du texte ?', a: 'La première rapporte les paroles telles quelles ; la seconde les résume pour l’écrit.' },
    { q: 'Détail : que devient « Moi, franchement, je suis pour » dans le résumé ?', a: 'Mme Peeters s’est déclarée favorable au projet : le moi et l’adverbe de l’oral disparaissent.' },
    { q: 'Comment le résumé dit-il « C’est nous qui payons les loyers, pas eux » ?', a: 'Il rappelle que ce sont les commerçants qui paient les loyers : ce sont, un nom à la place de nous, aucune reprise.' },
    { q: 'Inférence : pourquoi « Il exagère, lui » n’apparaît-il pas dans le résumé ?', a: 'Parce que c’est une réaction orale, familière et un peu vive ; le résumé garde l’idée sans le ton.' },
    { q: 'Position : le résumé prend-il parti ?', a: 'Non : il présente les deux avis avec quant à lui et pour sa part, et conclut sans trancher.' },
  ],
  audio: REC('rec-b2-11-radio'),
  say: REFRAME,
  terms: ['registre'],
};

const A11_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a11-table',
  layer: 'core',
  sheetId: 'sheet-registre',
  title: 'Six passages de l’oral à l’écrit',
  cols: ['À l’oral', 'À l’écrit soigné', 'Exemple écrit'],
  rows: [
    { cells: ['moi, je', 'pour ma part, quant à moi', 'Pour ma part, je pense que…'], say: fr(E(1970)),
      detail: { title: 'Moi, je', body: "Dans une lettre ou un essai, pour ma part ou quant à moi. EN: pour ma part in writing.", say: fr(E(1967)) } },
    { cells: ['nous, on', 'nous', 'Nous ne sommes pas d’accord.'], say: fr(E(1971)),
      detail: { title: 'Nous, on', body: "À l'écrit, on garde nous sans on : nous ne sommes pas d'accord. Pour insister, on redouble : nous, nous avons voté pour la comédie. EN: nous without on in writing; nous, nous to insist.", say: fr(E(1812)) } },
    { cells: ['les parents, eux, ils', 'les parents, quant à eux', 'Les parents, quant à eux, s’inquiètent.'], say: fr(E(1974)),
      detail: { title: 'Quant à eux', body: "Le même contraste, sans ils en plus. EN: the same contrast, no extra ils.", say: fr(E(1978)) } },
    { cells: ["c'est eux qui", 'ce sont eux qui', 'Ce sont elles qui ont lancé le projet.'], say: fr(E(1885)),
      detail: { title: 'Ce sont eux', body: "À l'écrit, ce sont devant eux et elles. EN: ce sont in writing.", say: fr(E(1972)) } },
    { cells: ['il exagère, lui', 'on garde l’idée, pas le ton', 'Elle juge ces propos exagérés.'], say: fr(E(1975)),
      detail: { title: 'La pique', body: "Une réaction vive se résume : on dit ce qu'elle pense, pas comment elle l'a dit. EN: summarise the idea, drop the tone.", say: fr(E(1974)) } },
    { cells: ['ce film, je l’ai adoré', "j'ai adoré ce film", "J'ai adoré ce film."], say: fr(E(1832)),
      detail: { title: 'Le mot détaché', body: "À l'écrit neutre, l'ordre simple : sujet, verbe, complément. EN: plain order.", say: fr(E(1833)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

const A11_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-trier',
  layer: 'core',
  size: 'lg',
  title: 'L’oral, l’écrit, ou partout',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Plutôt à l’oral', [
      it(E(1970), 'moi, je'),
      it(E(1971), 'nous, on'),
      it(E(1975), 'lui, en fin de phrase'),
      it(E(1979), 'elle, elle, et s’en ficher'),
    ], chk('Ces phrases conviennent surtout…',
      ['à la conversation', 'à un rapport écrit'], 0,
      'Détachements et familiarités : de l’oral. EN: speech.')),
    grp('À l’écrit soigné', [
      it(E(1967), 'pour ma part'),
      it(E(1968), 'quant à moi'),
      it(E(1969), 'en ce qui me concerne'),
      it(E(1974), 'quant à eux'),
    ], chk('Pour dire moi, je dans une lettre de motivation, tu écris…',
      ['pour ma part, je', 'moi, je'], 0,
      'Pour ma part : le contraste, au registre soigné. EN: pour ma part.')),
    ctl('Partout', '« Le maire lui-même a reconnu l’erreur. » Ce registre est…',
      ['neutre, bon partout', 'seulement oral'], 0,
      'Lui-même insiste sans sonner parlé. EN: neutral.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

const A11_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a11-hacks',
  layer: 'core',
  title: 'Trois astuces pour passer à l’écrit',
  hacks: [
    { hack: 'Imagine ta phrase dans un journal. Si le journaliste devait la réécrire, réécris-la toi aussi.', why: "Un journaliste résume les paroles : il garde l'idée et enlève les détachements. EN: write it the way a newspaper would quote it." },
    { hack: 'Cherche les virgules autour d’un pronom : moi, je ; lui, il ; eux, ils.', why: "Deux pronoms pour une personne, c'est la marque de l'oral. À l'écrit, garde-en un, ou passe à quant à. EN: two pronouns for one person signal speech." },
    { hack: 'Garde les formes qui vont partout : lui seul, eux-mêmes, c’est moi qui, ce sont eux qui.', why: "Elles insistent sans sonner parlé. EN: these work in any register." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

const A11_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a11-focus',
  layer: 'core',
  sheetId: 'sheet-registre',
  title: 'Quatre règles de registre',
  frSub: 'Avant ta réponse écrite',
  points: [
    "À l'oral : moi, je ; nous, on ; les mots détachés ; c'est eux qui. EN: speech.",
    "À l'écrit soigné : pour ma part, quant à moi, quant à eux, ce sont eux qui. EN: careful writing.",
    "Partout : lui seul, eux aussi, nous-mêmes, c'est moi qui ai, c'est à moi de. EN: everywhere.",
    `${Cap(REGISTRES_REF)} disait : « ${B125_REFRAME} » EN: ${B125_REFRAME_EN}`,
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

const A11_TEXTE = dansUnTexte('a11-texte', 'Réécrire : l’avis de M. Girard', TEXTE_A11, [
  { q: 'Que gardes-tu de la première phrase ?', a: "L'idée : M. Girard apprécie le marché du dimanche. Moi, je vais être franc et le mot détaché disparaissent." },
  { q: 'Réécris la deuxième phrase.', a: 'Il regrette toutefois que les camions arrivent dès cinq heures du matin et empêchent les riverains de dormir.' },
  { q: 'Réécris la troisième.', a: 'Selon lui, ce sont les camions, et non les clients, qui causent le bruit.' },
  { q: 'Et la fin ?', a: 'Il reproche à la mairie son silence et demande que la situation change.' },
], 'rec-b2-11-texte-a11', ['registre']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('L’écrit', 'Dans un essai, pour opposer ton avis :',
    ['pour ma part, je', 'moi, je'], 0,
    'Pour ma part : le registre soigné. EN: pour ma part.'),
  ctl('L’oral', '« Nous, on n’est pas d’accord » est…',
    ['familier', 'soutenu'], 0,
    'Nous, on : de l’oral. EN: spoken.'),
  ctl('Partout', 'Laquelle va à l’oral comme à l’écrit ?',
    ['c’est moi qui ai signé', 'il est fou, lui'], 0,
    'C’est moi qui ai : neutre. EN: neutral.'),
], ['registre']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'L’oral et l’écrit',
    opener: {
      line: "Le même débat, dit à la radio puis résumé sur un site : ici tu sais quelles insistances appartiennent à la parole et lesquelles tiennent à l'écrit. EN: The same debate, spoken on air then summed up online: here you learn which forms belong to speech and which hold in writing.",
      imageRef: 'lessons/pronoms-insistance/act11.jpg',
    },
    sections: [],
    milestone: "Tu passes une parole détachée à l'écrit soigné, avec pour ma part, quant à eux et ce sont eux qui. EN: You can turn detached speech into careful writing.",
    estScreens: 34, restPoints: ['a11-table', 'a11-hacks'],
  },
  sections: [A11_LECTURE, A11_TABLE, A11_TRIER, A11_HACKS, A11_FOCUS, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12: TA VOIX DANS LE DÉBAT
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La réponse que tu vas imiter',
  frSub: 'Mathieu répond à Claire et à Olivier',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'concilier', en: 'to reconcile', note: 'Faire aller ensemble deux choses qui s’opposent.' },
    { word: 'trancher', en: 'to decide', note: 'Prendre une décision nette entre deux options.' },
    { word: 'permanence', en: 'duty rota', note: 'Une présence assurée, à tour de rôle, pour répondre au public.' },
  ],
  questions: [
    { q: 'Global : que fait Mathieu dans ce message ?', a: 'Il résume les deux avis, déplace la question et propose un essai.' },
    { q: 'Détail : que pensent Claire et Olivier ?', a: 'Claire y voit une chance de concilier travail et famille ; Olivier craint que les clients ne trouvent personne le vendredi.' },
    { q: 'Quelles formes opposent les trois voix ?', a: 'Claire, elle ; Olivier, lui ; eux deux ; pour ma part : chacun a son pronom, et Mathieu se place face à eux.' },
    { q: 'Pourquoi « c’est nous qui décidons » et pas « c’est nous qui décident » ?', a: 'Le verbe suit nous : décidons.' },
    { q: 'Position : Mathieu est-il pour ou contre ?', a: "Ni l'un ni l'autre au départ : il déplace la question vers l'organisation, puis propose un essai encadré. C'est une position nuancée." },
  ],
  audio: REC('rec-b2-11-modele'),
  say: REFRAME,
  terms: ['contraste', 'registre'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  sheetId: 'sheet-registre',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Leurs avis, puis le tien',
  steps: [
    'Nomme les deux avis, chacun avec son pronom : Karim, lui… ; Léa, elle… EN: name each opinion with its pronoun.',
    'Dis ce qu’ils ont de juste : eux deux ont raison sur un point. EN: grant what is right.',
    'Oppose ton avis : pour ma part, je crois que… EN: set your view against theirs.',
    'Appuie-le sur un fait, avec c’est … qui et un -même : c’est nous-mêmes qui avons voté… EN: back it with a fact.',
    'Termine par une proposition : ce n’est pas à moi seul de décider, alors… EN: end with a proposal.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contraste', 'registre'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  sheetId: 'sheet-registre',
  title: 'Quatre phrases que toute réponse contient',
  cases: [
    { situation: 'Tu opposes ton avis à celui des autres', fr: fr(E(1982)), en: en(E(1982)) },
    { situation: 'Tu présentes deux voix, puis la tienne', fr: fr(E(1984)), en: en(E(1984)) },
    { situation: 'Tu appuies ton avis sur un fait', fr: fr(E(1983)), en: en(E(1983)) },
    { situation: 'Tu rappelles que la décision est collective', fr: fr(E(1985)), en: en(E(1985)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contraste'],
};

const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'La réunion des copropriétaires',
  frSub: 'Six tours, à voix haute',
  setting: 'La réunion des copropriétaires de ton immeuble, à Lyon. La syndique, Mme Faure, fait parler chacun sur le projet de jardin dans la cour.',
  turns: [
    {
      ai: 'Karim et Léa sont contre le projet. Et vous, qu’en pensez-vous ?', en: 'Karim and Léa are against the project. And you, what do you think?',
      user: 'Eux sont contre ; moi, je suis plutôt pour.',
      userEn: 'They are against it; I am rather for it. (Two camps, two stressed pronouns.)',
      alts: [
        { fr: 'Pour ma part, je suis plutôt favorable au projet.', en: 'For my part, I am rather in favour of the project. (The careful register: also right.)' },
        { fr: 'Eux, ils hésitent ; moi, je n’hésite pas.', en: 'They are hesitating; I am not. (Spoken, with ils: also right.)' },
      ],
    },
    {
      ai: 'Qui a eu l’idée du jardin, au départ ?', en: 'Who had the idea of the garden in the first place?',
      user: 'C’est moi qui ai proposé l’idée, l’an dernier.',
      userEn: 'I am the one who suggested the idea, last year. (C’est moi qui ai: the verb follows moi.)',
      alts: [
        { fr: 'C’est nous qui l’avons proposée, ma voisine et moi.', en: 'We suggested it, my neighbour and I. (Nous qui avons.)' },
        { fr: 'L’idée vient de moi, je l’avoue.', en: 'The idea is mine, I admit.' },
      ],
    },
    {
      ai: 'Karim dit que ça coûtera trop cher. Que lui répondez-vous ?', en: 'Karim says it will cost too much. What do you say to him?',
      user: 'Lui pense au coût ; moi, je pense à ce que chacun y gagnera.',
      userEn: 'He is thinking about the cost; I am thinking about what everyone will gain. (Lui alone, in contrast.)',
      alts: [
        { fr: 'Il a raison sur le coût, mais le budget existe déjà.', en: 'He is right about the cost, but the budget already exists.' },
        { fr: 'Karim, lui, voit le prix ; moi, je vois le jardin.', en: 'Karim sees the price; I see the garden.' },
      ],
    },
    {
      ai: 'Et qui s’occupera des plantes ?', en: 'And who will look after the plants?',
      user: 'Mes voisins du troisième et moi, nous pouvons les arroser.',
      userEn: 'My neighbours on the third floor and I can water them. (With moi, the verb goes to nous.)',
      alts: [
        { fr: 'Nous-mêmes, à tour de rôle.', en: 'We ourselves, taking turns. (Nous-mêmes, with an s.)' },
        { fr: 'Si c’est à moi de le faire, je le ferai.', en: 'If it is up to me to do it, I will. (À moi de + infinitive.)' },
      ],
    },
    {
      ai: 'Léa, elle, a peur du bruit. Vous la comprenez ?', en: 'Léa is afraid of the noise. Do you understand her?',
      user: 'Oui, je la comprends, mais le bruit ne vient pas du jardin en soi.',
      userEn: 'Yes, I understand her, but the noise does not come from the garden itself. (En soi: in itself.)',
      alts: [
        { fr: 'Elle a raison de poser la question, bien sûr.', en: 'She is right to raise the question, of course.' },
        { fr: 'Oui, mais c’est à nous tous de fixer des règles.', en: 'Yes, but it is up to all of us to set rules. (À nous tous de.)' },
      ],
    },
    {
      ai: 'Alors, on vote aujourd’hui ?', en: 'So, shall we vote today?',
      user: 'Ce n’est pas à moi seul de décider : votons tous ensemble.',
      userEn: 'It is not up to me alone to decide: let us all vote together. (À moi seul de: whose role it is.)',
      alts: [
        { fr: 'Oui, et chacun décidera pour soi, sans pression.', en: 'Yes, and everyone will decide for themselves, without pressure. (Chacun, then soi.)' },
        { fr: 'Je propose qu’on vote à la prochaine réunion.', en: 'I suggest we vote at the next meeting.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contraste', 'relief', 'aMoi'],
};

const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Ta réponse dans le forum',
  frSub: 'Mission écrite, format B2',
  brief: "Dans le forum de ton immeuble, deux voisins ont réagi au projet de transformer la cour en jardin partagé. Karim pense que le jardin coûtera trop cher ; Léa craint le bruit et les moustiques. Tu leur réponds : tu présentes leurs deux avis, tu leur opposes le tien, et tu fais une proposition.",
  briefEn: 'In your building’s forum, two neighbours have reacted to the plan to turn the courtyard into a shared garden. Karim thinks it will cost too much; Léa fears the noise and the mosquitoes. You reply: present both views, set yours against them, and make a proposal.',
  produce: "Écris une réponse de 150 à 220 mots : présente les deux avis avec des pronoms toniques (Karim, lui… ; eux pensent que…), oppose-leur le tien (moi, je… ou pour ma part), avec au moins un c'est … qui bien accordé et un -même, et termine par une proposition.",
  responseSpec: { kind: 'text', minWords: 150, maxWords: 240 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          '3 : Les deux avis sont présentés fidèlement, le tien s’y oppose clairement, et une proposition termine le message. Entre 150 et 220 mots.',
          '2 : Les trois voix sont là, mais un avis est déformé ou la proposition manque, ou la longueur sort un peu des limites.',
          '1 : Seul ton avis apparaît, ou le texte est beaucoup trop court.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          '3 : Le lecteur sait toujours qui pense quoi : chaque avis a sa personne (lui, elle, eux, moi), les connecteurs (pourtant, d’abord, ensuite, donc) relient les arguments, et aucun il n’est ambigu.',
          '2 : Le message se suit, mais une voix se confond avec une autre à un endroit.',
          '1 : On ne sait pas qui défend quoi.',
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          "2 : Tu emploies le contraste (lui, eux, moi ou pour ma part), un c'est … qui accordé, un -même, et au moins un autre renfort (seul, aussi, deux, à moi de, soi).",
          '1 : Les pronoms toniques sont là, mais toujours dans la même tournure.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          "2 : Les accords sont presque toujours justes : c'est moi qui ai, c'est nous qui sommes, Paul et moi sommes, nous-mêmes, moi seul peux ; chaque mot détaché est repris par le bon pronom.",
          "1 : Des erreurs fréquentes (c'est moi qui a, moi suis, eux-même, chez soi pour un voisin précis) gênent parfois la lecture.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          '2 : Un message de forum courtois et direct : pour ma part, quant à eux, ce sont eux qui ; pas de pique ni de phrase détachée comme à l’oral.',
          '1 : Le texte sonne comme une conversation transcrite (moi, je, nous, on, il exagère, lui) ou comme une lettre administrative froide.',
        ],
      },
    ],
  },
  scaffold: [
    'Karim, lui,',
    'Léa, elle,',
    'Eux deux',
    'Pour ma part,',
    "C'est nous-mêmes qui",
    'Chacun',
    "Ce n'est pas à moi seul",
    'Je propose donc',
  ],
  modelAnswer: "Objet : Re : un jardin dans la cour. Bonjour à tous, merci pour vos deux messages, qui posent de vraies questions. Karim, lui, pense que le jardin coûtera trop cher à la copropriété. Léa, elle, craint surtout le bruit des enfants et les moustiques en été. Eux deux ont raison sur un point : un projet mal préparé nous coûterait cher, et pas seulement en argent. Pour ma part, pourtant, je crois que le jardin est une bonne idée. D'abord, le coût : c'est nous-mêmes qui avons voté l'an dernier un budget pour refaire la cour, et le jardin ne dépasserait pas cette somme. Ensuite, le bruit : la cour est déjà un lieu de passage, et quelques bacs de fleurs ne la rendraient pas plus bruyante. Quant aux moustiques, il suffit de ne pas laisser d'eau stagnante. Surtout, chacun y trouverait quelque chose pour soi : un coin d'ombre, des herbes pour la cuisine, un endroit où parler aux voisins. Je propose donc un essai d'un an, avec deux bacs seulement. Si personne ne veut s'en occuper, c'est moi qui les arroserai. Ce n'est pas à moi seul de décider, bien sûr : votons à la prochaine assemblée. Bien à vous, Camille, troisième étage\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : les deux avis sont résumés fidèlement, le mien s'y oppose (pour ma part, pourtant), une proposition termine le message.\n2. Cohérence : Karim, lui ; Léa, elle ; eux deux : chaque voix a sa personne ; d'abord, ensuite, quant à, surtout, donc relient les arguments.\n3. Étendue : contraste, c'est nous-mêmes qui avons, c'est moi qui arroserai, pour soi, à moi seul de.\n4. Correction : le verbe suit nous et moi après qui ; nous-mêmes au pluriel ; soi après chacun.\n5. Registre : un message de forum courtois ; aucune phrase détachée à la manière de l'oral.",
  modelAnswerEn: "Subject: Re: a garden in the courtyard. Hello everyone, thank you for your two messages, which raise real questions. Karim thinks the garden will cost the building too much. Léa is mostly afraid of children's noise and of mosquitoes in summer. Both of them are right on one point: a badly prepared project would cost us dearly, and not only in money. For my part, though, I believe the garden is a good idea. First, the cost: we ourselves voted last year for a budget to redo the courtyard, and the garden would not go over that amount. Next, the noise: the courtyard is already a thoroughfare, and a few flower boxes would not make it noisier. As for mosquitoes, it is enough not to leave standing water. Above all, everyone would find something there for themselves: a shady corner, herbs for cooking, a place to talk to the neighbours. So I suggest a one-year trial, with only two boxes. If nobody wants to look after them, I will water them myself. It is not up to me alone to decide, of course: let us vote at the next meeting. Best wishes, Camille, third floor. The marker's notes (not counted): 1. Task: both views summarised faithfully, mine set against them, a closing proposal. 2. Coherence: each voice has its pronoun; connectors link the arguments. 3. Range: contrast, c'est nous-mêmes qui avons, c'est moi qui, pour soi, à moi seul de. 4. Accuracy: the verb follows nous and moi after qui; nous-mêmes plural; soi after chacun. 5. Register: a courteous forum message, no spoken detachment.",
  watchFor: [
    { pattern: 'The two opinions listed with il and elle only, so the reader cannot hear the two sides or tell who thinks what.', criterion: 'coherence', feedback: 'Donne à chaque avis son pronom tonique : Karim, lui, pense que… ; Léa, elle, craint…', ref: 'a2-construire' },
    { pattern: 'A detached word with no resuming pronoun, or the wrong one (ce jardin, j’aime ; le budget, nous avons voté).', criterion: 'correction', feedback: 'Un mot détaché doit être repris : ce jardin, je l’aime. À l’écrit, préfère l’ordre simple.', ref: 'a3-piege' },
    { pattern: 'Moi or toi carrying the verb alone (moi pense), or a third person verb after moi seul (moi seul peut).', criterion: 'correction', feedback: 'Sans seul, moi a besoin de je ; avec seul, le verbe suit moi : moi seul peux.', ref: 'a4-erreurs' },
    { pattern: 'Compound subjects with the wrong person (mes voisins et moi ont, toi et Léa ont).', criterion: 'correction', feedback: 'Moi dans le groupe : nous ; toi sans moi : vous.', ref: 'a5-piege' },
    { pattern: 'The verb in the third person after c’est moi qui, c’est nous qui (c’est moi qui a, c’est nous qui ont).', criterion: 'correction', feedback: 'Après qui, le verbe garde la personne du pronom : c’est moi qui ai, c’est nous qui avons.', ref: 'a6-piege' },
    { pattern: 'Même left singular after a plural pronoun (nous-même, eux-même), or no reinforcement at all.', criterion: 'etendue', feedback: 'Nous-mêmes, eux-mêmes : même prend un s après un pronom pluriel.', ref: 'a7-erreurs' },
    { pattern: 'An il or elle that could be either neighbour, or lui and le mixed up (je lui pense, je le téléphone).', criterion: 'coherence', feedback: 'Pour passer à l’autre personne, lui en tête ; penser à lui, mais je lui téléphone.', ref: 'a8-piege' },
    { pattern: 'Soi used for a named person (Karim pense à soi), or lui after on or personne where soi is expected (after chacun, lui is also correct).', criterion: 'correction', feedback: 'Soi pour on, personne, il faut (après chacun, soi ou lui) ; lui ou elle pour une personne précise.', ref: 'a9-erreurs' },
    { pattern: 'C’est à moi décider, c’est lui de, or un voisin de moi.', criterion: 'correction', feedback: 'C’est à moi de décider ; un voisin à moi.', ref: 'a10-erreurs' },
    { pattern: 'A spoken register in the written reply: moi, je throughout, nous, on, c’est eux qui, or a jab such as il exagère, lui.', criterion: 'registre', feedback: 'À l’écrit : pour ma part, quant à eux, ce sont eux qui. Garde l’idée, laisse le ton de l’oral.', ref: 'a11-table' },
    { pattern: 'Only one voice, no proposal, or a body outside 150 to 220 words.', criterion: 'tache', feedback: 'Présente les deux avis, oppose le tien, puis propose quelque chose : je propose donc…', ref: 'a12-plan' },
  ],
  graderNotes: [
    'Count the words of the body only; a subject line, greeting and signature do not count. 150 to 220 with 10% tolerance (135 to 240) before criterion « tache » loses a point. responseSpec allows 240.',
    'Judge each stressed pronoun by what it does in this text: a contrast, a highlight, a reinforcement or a switch of person. A correct pronoun that does nothing earns no range credit and loses nothing.',
    'Spoken forms (moi, je; nous, on; c’est eux qui; a detached word) are accepted inside quoted speech. In the body, a spoken form costs one « registre » point once, not per occurrence.',
    '« C’est moi qui a » and « c’est nous qui ont » are scored under « correction » once each, not per occurrence. « C’est eux qui » in the body is a register slip, not an accuracy error.',
    'After chacun, accept both « chez soi » and « chez lui »: current usage allows both. After on, personne, tout le monde and il faut, soi is the target; lui is an error only where it clearly means someone else.',
    'Accept « Lui aussi a voté contre », « Eux ont refusé » and « Moi seul peux » as correct written French. « Moi aussi ai » and « Moi ai » are errors.',
    'Writer gender is unknown: judge agreement (moi seul or moi seule, nous-mêmes) for internal consistency only.',
    'Do not score the subjunctive after craindre que (with or without the expletive ne): it is lesson 6 in B2 and gains nothing, loses nothing.',
    'Accept regional vocabulary and settings (Québec, Belgium, Switzerland, West Africa): courriel and mail, syndic and gérance, septante and nonante.',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 22 du B1 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contraste', 'relief', 'registre'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Dis ton avis à voix haute',
  frSub: 'Leurs avis, puis le tien',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contraste'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-formes',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le contraste', v: 'lui, il… ; moi, je…', say: fr(E(1800)),
      detail: { title: 'Le contraste', body: "Un pronom tonique par camp, le pronom sujet devant le verbe. EN: one stressed pronoun per side.", say: fr(E(1814)) } },
    { k: 'la reprise', v: 'ce livre, je l’ai lu', say: fr(E(1834)),
      detail: { title: 'La reprise', body: "Un mot détaché est repris par le, lui, y ou en ; à l'écrit neutre, l'ordre simple. EN: detach and pick up; plain order in writing.", say: fr(E(1838)) } },
    { k: 'seul devant', v: 'lui seul, eux, moi seul peux', say: fr(E(1849)),
      detail: { title: 'Le sujet seul', body: "Lui et eux portent le verbe en contraste ; moi et toi avec seul, le verbe à leur personne. EN: lui and eux alone; moi seul peux.", say: fr(E(1851)) } },
    { k: 'l’accord', v: 'Paul et moi sommes ; c’est moi qui ai', say: fr(E(1865)),
      detail: { title: 'L’accord', body: "Moi l'emporte (nous), puis toi (vous) ; après qui, le verbe suit le pronom. EN: moi gives nous; after qui, the pronoun's person.", say: fr(E(1886)) } },
    { k: 'soi', v: 'on, chacun : soi ; Paul : lui', say: fr(E(1936)),
      detail: { title: 'Soi', body: "Soi pour personne en particulier, lui ou elle pour quelqu'un de précis. EN: soi for anyone, lui for someone.", say: fr(E(1940)) } },
    { k: 'à moi', v: 'à moi de, un ami à moi', say: fr(E(1952)),
      detail: { title: 'À moi', body: "À moi : la chose ; à moi de : le tour ; un ami à moi ; son livre à elle. EN: whose thing, whose turn.", say: fr(E(1955)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contraste', 'accord', 'soi'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu opposes deux personnes avec leurs pronoms toniques, tu détaches et reprends un mot à l'oral, tu fais porter le verbe à lui seul ou à eux, tu accordes le verbe avec deux sujets et après c'est moi qui, tu renforces avec même, aussi, tous et deux, tu lèves le doute entre deux hommes, tu choisis soi ou lui, et tu dis à qui revient une chose ou un rôle, dans le bon registre. Le piège qui reste, c'est c'est moi qui a : l'oreille l'entend partout. Avant l'examen, relis ta réponse et entoure chaque qui. Pour chacun, regarde le pronom juste avant, et mets le verbe à sa personne. EN: Circle every qui and put the verb in the person of the pronoun before it.",
  stats: [
    { k: 'Le contraste', v: 'un pronom par camp' },
    { k: 'Le sujet seul', v: 'lui seul, moi seul peux' },
    { k: 'Le relief', v: 'c’est moi qui ai' },
    { k: 'Le registre', v: 'pour ma part, à l’écrit' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: acts 1 and 2 share round 1, one round
 *  per act from 3 to 11, a recycling round citing lessons 35 and 34 in A2,
 *  lessons 11, 17, 22 and 24 in B1 and lessons 2 and 6 in B2 (named in each
 *  question), and an exam-format round (TCF, DELF B2, TEF items). `fold()`
 *  strips accents, commas, apostrophes and hyphens, so every typed answer
 *  turns on a pronoun, a person or an agreement LETTER. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const MESSAGE_TEF = "Bonjour, c'est Claire, du service des voyages. Pour le séminaire de Québec, c'est moi qui m'occupe des réservations d'hôtel. Julien, lui, s'occupe des billets de train. Les participants, eux, doivent seulement confirmer leur présence avant vendredi. Merci et bonne journée.";

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a12-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-contraste', label: 'Le contraste', targets: ['contraste-plat'],
      questions: [
        mc('Tu résumes deux avis opposés. Laquelle fait entendre deux camps ?', [fr(E(1800)), fr(E(1801))], 0, 'Lui et moi donnent chaque avis à sa personne. EN: each opinion gets its owner.', 'a1-scene'),
        mc('« Mon frère, lui, n’a rien dit. » Que fait lui ?', ['il oppose le frère aux autres', 'il est complément du verbe', 'il remplace le verbe'], 0, 'Entre virgules, lui met le frère sous le projecteur. EN: it sets him against the others.', 'a2-rappel'),
        tI('Ajoute le pronom tonique qui s’oppose à lui.', '(…), je prends le métro ; lui, il prend son vélo.', fr(E(1823)), 'Moi, face à lui. EN: moi against lui.', 'a2-construire'),
        tI('Oppose les deux personnes avec des pronoms toniques.', 'Elle vote pour ; il vote contre.', fr(E(1815)), 'Elle, elle ; lui, il : un pronom par camp. EN: one pronoun per side.', 'a2-table', ['Elle, elle vote pour ; lui, il vote contre', 'Elle vote pour ; lui vote contre.', 'Elle, elle vote pour ; lui vote contre.']),
        mc('« Julie, elle, a trouvé la musique magnifique. » Que comprend le lecteur ?', ['que les autres ne l’ont pas trouvée magnifique', 'que Julie était seule', 'que Julie a composé la musique'], 0, 'Elle, entre virgules, oppose Julie à la salle. EN: Julie against the others.', 'a1-lecture'),
        eS("Moi suis d'accord avec toi.", "Moi, je suis d'accord avec toi.", 'Moi ne porte pas le verbe : je reste devant. EN: je stays.', 'a2-erreurs'),
        lC('Écoute. Qui vote contre ?', fr(E(1815)), ['lui', 'elle'], 0, 'Lui, il vote contre. EN: he does.', 'a2-ecoute'),
        lC('Écoute. Qui reste ?', fr(E(1816)), ['nous', 'vous'], 0, 'Nous, on reste ; vous partez. EN: we stay.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r2-reprise', label: 'La reprise', targets: ['reprise-oubliee'],
      questions: [
        mc('« Ce livre, … lu en une nuit. »', ["je l'ai", "j'ai", 'je lui ai'], 0, 'Lire le livre : l’. EN: the object comes back as l’.', 'a3-cartes'),
        mc('« Ta sœur, je … ai parlé hier. »', ['lui', "l'", 'la'], 0, 'Parler à quelqu’un : lui. EN: lui.', 'a3-construire'),
        tI('Reprends le mot détaché avec le bon pronom.', "Ce quartier, j'habite depuis dix ans.", fr(E(1838)), 'Un lieu : y. EN: y.', 'a3-piege'),
        tI('Réécris la phrase à l’écrit neutre, sans rien détacher.', "Moi, ce film, je l'ai adoré.", fr(E(1833)), 'L’ordre simple : sujet, verbe, complément. EN: plain order.', 'a3-cartes'),
        mc('« Il est fou, lui. » Ce lui en fin de phrase…', ['montre la personne après coup, à l’oral', 'est un complément', 'est une faute'], 0, 'Une dislocation à droite. EN: an afterthought.', 'a3-histoire'),
        eS('Du café, je le bois beaucoup trop.', fr(E(1840)), 'Une quantité : en. EN: en.', 'a3-piege'),
        eS('Ces dossiers, je les ai relu hier soir.', fr(E(1846)), 'Les placé avant : relus. EN: relus.', 'a3-piege'),
        lC('Écoute. Que reprend le pronom ?', fr(E(1843)), ['tes idées', 'la personne qui parle'], 0, 'Les reprend tes idées. EN: your ideas.', 'a3-construire'),
      ],
    },
    {
      id: 'r3-seul', label: 'Seul devant le verbe', targets: ['seul-mal-accorde'],
      questions: [
        mc('« Moi seul … signer ce document. »', ['peux', 'peut'], 0, 'Le verbe suit moi. EN: peux.', 'a4-cartes'),
        mc('Laquelle est juste ?', ["Moi aussi, j'ai voté contre.", 'Moi aussi ai voté contre.'], 0, 'Moi aussi garde je. EN: moi aussi keeps je.', 'a4-construire'),
        mc('« … seul connaissait le code. »', ['Lui', 'Il'], 0, 'Seul demande la forme tonique. EN: lui.', 'a4-erreurs'),
        tI('Conjugue le verbe à l’imparfait.', 'Eux seuls (avoir) les clés.', fr(E(1862)), 'Eux : pluriel, avaient. EN: avaient.', 'a4-construire'),
        tI('Conjugue le verbe au présent.', 'Moi seul (connaître) la réponse.', fr(E(1861)), 'Moi : première personne, connais. EN: connais.', 'a4-cartes'),
        eS('Il seul connaissait le code.', fr(E(1849)), 'Lui seul. EN: lui seul.', 'a4-erreurs'),
        eS('Moi ai refusé, eux ont accepté.', "Moi, j'ai refusé ; eux ont accepté.", 'Moi a besoin de je ; eux porte le verbe seul. EN: moi needs je.', 'a4-erreurs', ["Moi, j'ai refusé, eux ont accepté."]),
        lC('Écoute. Qui n’a rien entendu ?', fr(E(1857)), ['lui', 'elle'], 0, 'Lui n’a rien entendu. EN: he did not.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r4-accord', label: 'Toi et moi', targets: ['accord-compose'],
      questions: [
        mc('« Paul et moi … arrivés en retard. »', ['sommes', 'sont', 'êtes'], 0, 'Moi dans le groupe : nous. EN: sommes.', 'a5-cartes'),
        mc('« Toi et lui … invités samedi. »', ['êtes', 'sont', 'sommes'], 0, 'Toi sans moi : vous. EN: êtes.', 'a5-construire'),
        mc('À l’écrit, laquelle est la plus soignée ?', [fr(E(1877)), 'Moi et mon mari, on vous remercie de votre accueil.'], 0, 'Moi en dernier, nous plutôt que on. EN: moi last.', 'a5-construire'),
        tI('Conjugue au présent.', 'Julien et moi (avoir) la même opinion.', fr(E(1875)), 'Nous : avons. EN: avons.', 'a5-piege'),
        tI('Conjugue au présent.', 'Ni toi ni moi ne (connaître) la réponse.', fr(E(1870)), 'Moi l’emporte : connaissons. EN: connaissons.', 'a5-cartes'),
        eS('Toi et ta sœur, vous ont raison.', fr(E(1876)), 'Vous : avez. EN: avez.', 'a5-piege'),
        eS('Marie et il sont partis ensemble.', fr(E(1869)), 'Après et, lui. EN: lui.', 'a5-piege'),
        lC('Écoute. À quelle personne est le verbe ?', fr(E(1873)), ['nous', 'ils'], 0, 'Mes collègues et moi : nous. EN: nous.', 'a5-exemples'),
      ],
    },
    {
      id: 'r5-relief', label: 'C’est moi qui', targets: ['qui-a'],
      questions: [
        mc('« C’est moi qui … proposé cette idée. »', ['ai', 'a', 'est'], 0, 'Le verbe suit moi. EN: ai.', 'a6-cartes'),
        mc('« C’est nous qui … arrivés les premiers. »', ['sommes', 'sont'], 0, 'Nous : sommes. EN: sommes.', 'a6-table'),
        mc('À l’écrit : « … eux qui ont gagné. »', ['Ce sont', "C'est"], 0, 'À l’écrit, ce sont eux. EN: ce sont.', 'a6-cartes'),
        tI('Conjugue au présent.', "C'est vous qui (être) en charge du dossier.", fr(E(1892)), 'Vous : êtes. EN: êtes.', 'a6-table'),
        tI('Mets les personnes en relief avec c’est … que.', 'Je pars en vacances avec eux.', fr(E(1890)), 'La préposition reste avec le pronom. EN: avec eux que.', 'a6-construire'),
        eS("C'est moi qui a organisé la soirée.", fr(E(1894)), 'Moi : ai. EN: ai.', 'a6-piege'),
        eS("Ce n'est pas lui qui ai commencé, c'est moi.", fr(E(1897)), 'Le verbe suit lui : a. EN: a.', 'a6-piege'),
        lC('Écoute. Qui a proposé l’idée ?', fr(E(1886)), ['la personne qui parle', 'quelqu’un d’autre'], 0, 'C’est moi qui ai proposé. EN: the speaker.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r6-renfort', label: 'Le renfort', targets: ['renfort-accord'],
      questions: [
        mc('« Nous avons peint la cuisine … »', ['nous-mêmes', 'nous-même'], 0, 'Pronom pluriel, même pluriel. EN: nous-mêmes.', 'a7-cartes'),
        mc('Tu vouvoies une seule personne : « Vous l’avez reconnu … »', ['vous-même', 'vous-mêmes'], 0, 'Une personne, pas de s. EN: vous-même.', 'a7-cartes'),
        mc('« … aussi ont signé. »', ['Eux', 'Ils', 'Leur'], 0, 'Aussi demande la forme tonique. EN: eux.', 'a7-erreurs'),
        tI('Ajoute même à la bonne forme.', 'Elles ont tout réparé (elles, même).', fr(E(1913)), 'Elles-mêmes. EN: elles-mêmes.', 'a7-construire'),
        tI('Écris le pronom et le nombre : you two.', '(…) deux, vous venez avec moi.', fr(E(1914)), 'Vous deux, sans article. EN: vous deux.', 'a7-flash'),
        eS('Nous les deux, on part demain.', 'Nous deux, on part demain.', 'Après le pronom, pas d’article. EN: nous deux.', 'a7-erreurs'),
        mc('« À nous deux, nous finirons ce soir » veut dire…', ['toi et moi ensemble', 'chacun de son côté'], 0, 'À nous deux : ensemble. EN: together.', 'a7-construire'),
        lC('Écoute. Combien de personnes ont quitté la réunion ?', fr(E(1905)), ['trois', 'deux'], 0, 'Eux trois. EN: three.', 'a7-construire'),
      ],
    },
    {
      id: 'r7-ambiguite', label: 'Qui est il', targets: ['il-ambigu'],
      questions: [
        mc('« Marc a croisé Paul ; lui ne l’a pas reconnu. » Qui n’a pas reconnu l’autre ?', ['Paul', 'Marc'], 0, 'Lui passe à l’autre homme. EN: Paul.', 'a8-cartes'),
        mc('« Je pense souvent … » (à mon père)', ['à lui', 'lui', 'le'], 0, 'Penser à : à lui. EN: à lui.', 'a8-trier'),
        mc('« Je … téléphone tous les soirs. » (à ma mère)', ['lui', 'la', 'à elle'], 0, 'Téléphoner à : lui. EN: lui.', 'a8-trier'),
        tI('Remplace le complément par un pronom.', 'Je tiens beaucoup à ma sœur.', fr(E(1926)), 'Tenir à : à elle. EN: à elle.', 'a8-piege'),
        tI('Remplace le complément par un pronom.', "J'ai écrit une lettre à mon oncle.", fr(E(1931)), 'Écrire à : lui, devant le verbe. EN: lui.', 'a8-trier'),
        eS('Je lui pense souvent.', fr(E(1922)), 'Penser à : à lui, après le verbe. EN: à lui.', 'a8-piege'),
        mc('« Léa a appelé sa mère ; elle, elle n’a pas décroché. » Qui n’a pas décroché ?', ['la mère', 'Léa'], 0, 'Elle, elle : la lumière passe sur la mère. EN: the mother.', 'a8-exemples'),
        lC('Écoute. Qui voulait une augmentation ?', fr(E(1921)), ['Karim', 'le directeur'], 0, 'Lui : Karim. EN: Karim.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r8-soi', label: 'Soi', targets: ['soi-lui'],
      questions: [
        mc('« Personne n’aime parler de … »', ['soi', 'lui'], 0, 'Personne : soi. EN: soi.', 'a9-cartes'),
        mc('« On est bien chez … »', ['soi', 'lui', 'eux'], 0, 'On : soi. EN: soi.', 'a9-cartes'),
        mc('« Cela va de soi » veut dire…', ['c’est évident', 'cela part tout seul', 'c’est à moi'], 0, 'Une expression figée. EN: obviously.', 'a9-histoire'),
        tI('Complète avec soi, lui ou elle.', 'Tout le monde veut une maison à (…).', fr(E(1946)), 'Tout le monde : soi. EN: soi.', 'a9-trier'),
        tI('Complète avec soi, lui ou elle.', 'Marie a toujours ses clés sur (…).', fr(E(1947)), 'Marie : elle. EN: elle.', 'a9-erreurs'),
        eS('Paul est rentré chez soi.', fr(E(1940)), 'Paul est précis : lui. EN: lui.', 'a9-erreurs'),
        mc('« Le problème n’est pas grave en soi. » En soi veut dire…', ['dans sa nature', 'chez lui', 'pour moi'], 0, 'En soi : en lui-même. EN: in itself.', 'a9-trier'),
        lC('Écoute. Le sujet désigne-t-il quelqu’un de précis ?', fr(E(1941)), ['non, personne en particulier', 'oui, un homme précis'], 0, 'Chacun : soi. EN: nobody in particular.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r9-a-moi', label: 'À moi, à lui', targets: ['a-moi-de'],
      questions: [
        mc('« C’est à toi de jouer » veut dire…', ['c’est ton tour', 'ce jeu est à toi'], 0, 'À toi de : ton tour. EN: your turn.', 'a10-cartes'),
        mc('« C’est à moi » veut dire…', ['ça m’appartient', 'c’est mon tour'], 0, 'Sans de : la possession. EN: mine.', 'a10-exemples'),
        mc('A friend of mine lives in Lyon.', [fr(E(1955)), 'Un ami de moi habite à Lyon.', 'Un ami à me habite à Lyon.'], 0, 'Un ami à moi. EN: à moi.', 'a10-erreurs'),
        tI('Complète : c’est ton tour.', "C'est (…) payer l'addition.", fr(E(1961)), 'À toi de + infinitif. EN: à toi de.', 'a10-construire'),
        tI('Lève le doute : le livre est à une femme.', "C'est son livre, pas à lui.", fr(E(1963)), 'Son livre à elle. EN: à elle.', 'a10-cartes'),
        eS("C'est à moi décider.", fr(E(1952)), 'À moi de + infinitif. EN: de.', 'a10-erreurs'),
        eS("C'est lui de s'excuser, pas à moi.", fr(E(1954)), 'C’est à lui de. EN: à lui de.', 'a10-erreurs'),
        lC('Écoute. À qui est le vélo ?', fr(E(1958)), ['à eux', 'à nous'], 0, 'Ce vélo est à eux. EN: theirs.', 'a10-construire'),
      ],
    },
    {
      id: 'r10-registre', label: 'L’oral et l’écrit', targets: ['registre-melange'],
      questions: [
        mc('Dans une lettre de motivation, tu écris…', ['Pour ma part, je pense que…', 'Moi, je pense que…'], 0, 'Pour ma part : l’écrit soigné. EN: pour ma part.', 'a11-table'),
        mc('« Nous, on n’est pas d’accord. » Ce registre est…', ['familier, à l’oral', 'soigné, à l’écrit'], 0, 'Nous, on : l’oral. EN: spoken.', 'a11-trier'),
        mc('À l’écrit soigné, « les parents, eux, ils s’inquiètent » devient…', [fr(E(1974)), 'Les parents, eux, ils s’inquiètent.', 'Eux, les parents, ils s’inquiètent.'], 0, 'Quant à eux, sans ils. EN: quant à eux.', 'a11-table'),
        tI('Réécris la phrase pour un compte rendu écrit.', "C'est eux qui ont gagné.", fr(E(1884)), 'À l’écrit, ce sont eux. EN: ce sont.', 'a11-table'),
        tI('Remplace eux par sa version soignée.','Mes collègues, (…), préfèrent le télétravail.', fr(E(1978)), 'Quant à eux. EN: quant à eux.', 'a11-focus'),
        mc('Laquelle convient partout, à l’oral comme à l’écrit ?', [fr(E(1976)), fr(E(1975))], 0, 'Lui-même : neutre. EN: neutral.', 'a11-hacks'),
        mc('Dans le résumé écrit du débat, « Il exagère, lui » devient…', ['Mme Peeters juge ces propos exagérés.', 'Il exagère, lui, dit-elle.'], 0, 'L’écrit garde l’idée, pas le ton. EN: the idea, not the tone.', 'a11-lecture'),
        lC('Écoute. Cette phrase est plutôt…', fr(E(1971)), ['orale et familière', 'écrite et soignée'], 0, 'Nous, on : l’oral. EN: spoken.', 'a11-trier'),
      ],
    },
    {
      id: 'r11-recyclage', label: 'L’A2, le B1 et le B2 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(TONIQUES_REF)} : « C’est … » (la personne qui parle)`, ['moi', 'je'], 0, `« ${A236_REFRAME} » ${A236_REFRAME_FR} EN: no verb right after it, so moi.`, 'a2-rappel'),
        mc(`${Cap(POSSESSIFS_REF)} : « C’est à moi » se dit aussi…`, ["c'est le mien", "c'est de moi"], 0, 'La même possession, avec le pronom possessif. EN: c’est le mien.', 'a10-exemples'),
        mc(`${Cap(QUI_QUE_REF)} : « C’est toi … as trouvé le sac. »`, ['qui', 'que'], 0, `« ${B111_REFRAME} » EN: ${B111_REFRAME_EN}`, 'a6-cartes'),
        tI(`${Cap(CEST_REF)} : mets la personne en relief avec c’est … qui.`, 'Nous payons.', fr('fr.b1.description-personnes-objets.1150'), `« ${B122_REFRAME} » EN: ${B122_REFRAME_EN}`, 'a6-cartes'),
        mc(`${Cap(ORDRE_REF)} : « Je … ai parlé hier. » (à ta sœur)`, ['lui', 'la'], 0, `« ${B117_REFRAME} » EN: ${B117_REFRAME_EN}`, 'a8-cartes'),
        tI(`${Cap(MEME_REF)} : ajoute même à la bonne forme.`, 'Ils ont tout organisé (eux, même).', fr('fr.b1.comparaisons.1071'), `« ${B124_REFRAME} » EN: ${B124_REFRAME_EN}`, 'a7-cartes'),
        mc(`${Cap(COND_PASSE_REF)} : « Moi, je n’aurais pas accepté. » Que fait moi ?`, ['il oppose mon choix à celui d’un autre', 'il est le complément de accepter'], 0, 'Le contraste, avec un conditionnel passé. EN: it sets my choice against another.', 'a11-trier'),
        lC(`Écoute. ${Cap(SUBJ_IND_REF)} : le verbe après je ne pense pas que…`, 'Je ne pense pas que ce soit à eux seuls de décider.', ['est au subjonctif', 'est à l’indicatif'], 0, `« ${B206_REFRAME} » EN: ${B206_REFRAME_EN}`, 'a12-usages'),
      ],
    },
    {
      id: 'r12-examen', label: 'Comme à l’examen', targets: ['reponse-sans-camp'],
      questions: [
        mc('Format TCF. Choisissez la bonne réponse : « C’est nous qui … la soirée de samedi. »', ['organisons', 'organisent', 'organise', 'organisez'], 0, 'Le verbe suit nous. EN: organisons.', 'a6-table'),
        mc('Format TCF : « Ses collègues ont refusé le projet ; …, au contraire, l’a défendu jusqu’au bout. »', ['lui', 'il', 'le', 'soi'], 0, 'En contraste, lui porte le verbe. EN: lui.', 'a4-cartes'),
        mc('Format DELF B2, compréhension écrite. « Les syndicats, quant à eux, jugent la réforme précipitée. » Que signale quant à eux ?', ['une position opposée à celle des autres acteurs', 'une conséquence de la réforme', 'une citation exacte'], 0, 'Quant à eux : le contraste, à l’écrit. EN: an opposing position.', 'a11-lecture'),
        mc('Format DELF B2. « La ministre elle-même a reconnu des erreurs. » Elle-même souligne…', ['que même la responsable admet le problème', 'que la ministre parle d’elle', 'que la ministre est seule au gouvernement'], 0, 'Elle-même : même elle. EN: even she.', 'a7-cartes'),
        tI('Format TCF, phrase à compléter.', 'Mes voisins et moi (avoir) signé la pétition.', 'Mes voisins et moi avons signé la pétition.', 'Moi dans le groupe : avons. EN: avons.', 'a5-cartes'),
        tI('Format DELF B2, production. Oppose ton avis au leur, en une phrase.', 'Ils pensent que le projet coûte trop cher ; je crois le contraire.', 'Eux pensent que le projet coûte trop cher ; moi, je crois le contraire.', 'Eux, puis moi, je : deux camps. EN: two sides.', 'a12-usages', ['Eux, ils pensent que le projet coûte trop cher ; moi, je crois le contraire.', 'Eux pensent que le projet coûte trop cher ; pour ma part, je crois le contraire.']),
        eS("Ce n'est pas à eux seul de décider.", fr(E(1985)), 'Eux : seuls, au pluriel. EN: seuls.', 'a12-usages'),
        lC('Format TEF, compréhension orale. Écoute ce message. Qui s’occupe des réservations d’hôtel ?', MESSAGE_TEF, ['la personne qui parle', 'Julien', 'les participants'], 0, 'C’est moi qui m’occupe des réservations. EN: the speaker.', 'a6-ecoute'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far. */
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
    { front: 'deux camps', back: 'lui, il… ; moi, je…', say: fr(E(1800)) },
    { front: 'un mot détaché', back: 'repris par le, lui, y ou en', say: fr(E(1834)) },
    { front: 'he alone', back: 'lui seul', say: fr(E(1849)) },
    { front: 'Paul and I', back: 'Paul et moi sommes', say: fr(E(1865)) },
    { front: "c'est moi qui…", back: "c'est moi qui ai", say: fr(E(1886)) },
    { front: 'we ourselves', back: 'nous-mêmes', say: fr('fr.b1.comparaisons.1069') },
    { front: 'l’autre homme', back: 'lui, en tête', say: fr(E(1918)) },
    { front: 'on, chacun', back: 'soi', say: fr(E(1936)) },
    { front: "it's up to me", back: "c'est à moi de", say: fr(E(1952)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Une personne sous le projecteur',
  body: `${REFRAME} Tu as repris les huit formes de ${TONIQUES_REF} pour en faire un outil de débat : opposer deux camps, détacher et reprendre, porter le verbe tout seul, accorder après c'est moi qui, renforcer, lever un doute, dire à qui revient le tour, dans le bon registre. « ${B223_REFRAME} » disait ${ARGUMENTATION_REF} : tu as maintenant les pronoms pour le faire. La suite, c'est ${GERONDIF_REF} : le gérondif, pour dire comment et en même temps que quoi. EN: Next comes lesson 12 in B2: the gérondif, for manner and simultaneity. ${B223_REFRAME_EN}`,
  points: [
    'Un pronom tonique par camp, le pronom sujet devant le verbe.',
    'Lui seul, eux, moi seul peux : le verbe suit le pronom.',
    'C’est moi qui ai, c’est nous qui sommes, ce sont eux qui ont.',
    'Soi pour personne en particulier, à moi de pour le tour.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['projecteur', 'relief'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ta voix dans le débat',
    opener: {
      line: "Deux voisins ont donné leur avis, et c'est à toi de répondre : ici tu écris ta réponse et tu passes l'examen. EN: Two neighbours have given their views and it is your turn to reply: here you write your answer and sit the exam.",
      imageRef: 'lessons/pronoms-insistance/act12.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ta réponse dans le débat et passé l'examen : quatre-vingt-seize questions, douze manches. EN: You wrote your reply and sat the exam: ninety-six questions, twelve rounds.",
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r4-accord', 'a12-quiz/r8-soi', 'a12-review'],
  },
  sections: [
    A12_LECTURE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-contraste', title: 'Deux camps ou une liste', format: 'sort' as const, coach: "Deux piles : les phrases qui opposent deux personnes, et les phrases plates. EN: sort contrasted from flat.", buckets: ['deux camps, deux pronoms', 'une phrase plate'], items: [E(1800), E(1814), E(1815), E(1801), E(1833), E(1839)], audio: AUDIO },
  { id: 'd-reprise', title: 'Le pronom qui reprend', format: 'mcq' as const, coach: "Le verbe choisit la reprise : le, lui, y ou en. EN: the verb picks the pronoun.", q: 'Ce livre, je … ai lu en une nuit.', opts: ['l’', 'lui'], correct: 0, why: 'Lire le livre : l’. EN: l’.', items: [E(1832), E(1834), E(1838), E(1840), E(1841), E(1846)], audio: AUDIO },
  { id: 'd-seul', title: 'Le verbe suit le pronom', format: 'mcq' as const, coach: "Lui seul, eux seuls, moi seul : le verbe prend leur personne. EN: the verb takes the pronoun's person.", q: 'Moi seul … signer ce document.', opts: ['peux', 'peut'], correct: 0, why: 'Moi : peux. EN: peux.', items: [E(1849), E(1850), E(1851), E(1853), E(1861), E(1862)], audio: AUDIO },
  { id: 'd-accord', title: 'Toi et moi, nous', format: 'mcq' as const, coach: "Moi dans le groupe : nous ; toi sans moi : vous. EN: moi gives nous.", q: 'Paul et moi … arrivés en retard.', opts: ['sommes', 'sont'], correct: 0, why: 'Nous : sommes. EN: sommes.', items: [E(1865), E(1867), E(1869), E(1870), E(1873), E(1875)], audio: AUDIO },
  { id: 'd-relief', title: 'Moi qui ai', format: 'mcq' as const, coach: "Après qui, regarde le pronom juste avant, et mets le verbe à sa personne. EN: look at the pronoun before qui.", q: 'C’est moi qui … proposé cette idée.', opts: ['ai', 'a'], correct: 0, why: 'Moi : ai. EN: ai.', items: [E(1882), E(1883), E(1886), E(1887), E(1894), E(1896)], audio: AUDIO },
  { id: 'd-renfort', title: 'Même, deux, tous', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute et dis ce que le petit mot ajoute. EN: say what the small word adds.", items: [E(1902), E(1903), E(1904), E(1906), E(1907), E(1908)], audio: AUDIO },
  { id: 'd-ambiguite', title: 'Lui devant, à lui derrière', format: 'sort' as const, coach: "Deux piles : lui devant le verbe, ou à lui après. EN: before the verb, or after it.", buckets: ['lui devant le verbe', 'à lui après le verbe'], items: [E(1923), E(1931), PE2(238), E(1922), E(1926), E(1927)], audio: AUDIO },
  { id: 'd-soi', title: 'Soi ou lui', format: 'sort' as const, coach: "Deux piles : personne en particulier, ou quelqu'un de précis. EN: nobody in particular, or someone named.", buckets: ['soi', 'lui ou elle'], items: [E(1935), E(1936), E(1941), E(1940), E(1947), E(1950)], audio: AUDIO },
  { id: 'd-a-moi', title: 'À moi, à moi de', format: 'mcq' as const, coach: "La chose : à moi. Le tour ou le rôle : à moi de. EN: whose thing, or whose turn.", q: "C'est … décider.", opts: ['à moi de', 'à moi'], correct: 0, why: 'Un rôle, avec un infinitif : à moi de. EN: à moi de.', items: [E(1952), E(1953), E(1954), E(1955), E(1959), E(1961)], audio: AUDIO },
  { id: 'd-registre', title: 'L’oral ou l’écrit', format: 'sort' as const, coach: "Deux piles : ce qu'on dit, et ce qu'on écrit dans un texte soigné. EN: speech or careful writing.", buckets: ['à l’oral', 'à l’écrit soigné'], items: [E(1970), E(1971), E(1975), E(1967), E(1968), E(1974)], audio: AUDIO },
  { id: 'd-recyclage', title: 'L’A2 et le B1 en renfort', format: 'flashcard' as const, coach: "Six phrases des leçons précédentes : dis pour chacune ce que fait le pronom tonique. EN: say what the stressed pronoun does.", items: [PE2(401), PE2(427), 'fr.b1.pronoms-essentiels.1022', 'fr.b1.description-personnes-objets.1149', 'fr.b1.comparaisons.1071', 'fr.b1.expressions-de-quantite.1167'], audio: AUDIO },
  { id: 'd-debat', title: 'Leurs avis, puis le tien', format: 'flashcard' as const, coach: "Lis les phrases du débat dans l'ordre : leurs avis, le tien, ta proposition. EN: read the debate in order.", items: [E(1982), E(1984), E(1983), E(1985), E(1986), E(1988)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'contraste-plat', description: 'Lists two opposed opinions with plain subject pronouns, so the reader hears no contrast and cannot tell who thinks what.', detectOn: ['a1-scene', 'a2-construire', 'a2-check', 'a12-mission'], drill: 'd-contraste', retest: 'd-contraste' },
  { id: 'reprise-oubliee', description: 'Detaches a word and forgets the resuming pronoun, picks the wrong one (le for lui, le for en), or leaves detachment in neutral writing.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-reprise', retest: 'd-reprise' },
  { id: 'seul-mal-accorde', description: 'Lets moi carry a verb without seul (moi ai refusé), writes il seul, or puts the verb in the third person after moi seul.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a12-mission'], drill: 'd-seul', retest: 'd-seul' },
  { id: 'accord-compose', description: 'Agrees the verb with the nearest noun after a compound subject (Paul et moi sont), or uses a subject pronoun after et.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a12-mission'], drill: 'd-accord', retest: 'd-accord' },
  { id: 'qui-a', description: 'Puts the verb in the third person after c’est moi qui, c’est nous qui, c’est vous qui (c’est moi qui a).', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a12-mission'], drill: 'd-relief', retest: 'd-relief' },
  { id: 'renfort-accord', description: 'Leaves même singular after a plural pronoun, adds an article after the pronoun (nous les deux), or writes ils aussi.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a12-mission'], drill: 'd-renfort', retest: 'd-renfort' },
  { id: 'il-ambigu', description: 'Leaves an ambiguous il where two men are in play, or confuses lui, le and à lui (je lui pense, je le téléphone).', detectOn: ['a8-trier', 'a8-piege', 'a8-check', 'a12-mission'], drill: 'd-ambiguite', retest: 'd-ambiguite' },
  { id: 'soi-lui', description: 'Uses soi for a named person (Paul est rentré chez soi) or lui after on, personne or il faut.', detectOn: ['a9-trier', 'a9-erreurs', 'a9-check', 'a12-mission'], drill: 'd-soi', retest: 'd-soi' },
  { id: 'a-moi-de', description: 'Drops the de of c’est à moi de, drops the à (c’est lui de), or writes un ami de moi.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check', 'a12-mission'], drill: 'd-a-moi', retest: 'd-a-moi' },
  { id: 'registre-melange', description: 'Writes the spoken forms (moi, je; nous, on; c’est eux qui; detached words) into a careful written text.', detectOn: ['a11-trier', 'a11-hacks', 'a11-check', 'a12-mission'], drill: 'd-registre', retest: 'd-registre' },
  { id: 'recyclage', description: 'Loses a form this lesson builds on: the stressed pronoun after c’est, qui against que, the order of the little words, or moi-même.', detectOn: ['a2-rappel', 'a6-cartes', 'a7-cartes'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'reponse-sans-camp', description: 'In an exam-format reply, presents only one voice, or never sets the writer’s view against the others.', detectOn: ['a12-plan', 'a12-scenario', 'a12-mission'], drill: 'd-debat', retest: 'd-debat' },
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
  sheet('sheet-formes', 'Le contraste et le sujet seul', ['les huit formes', 'le contraste', 'la place', 'le sujet seul'], [
    teach('sheet-formes-teach', 'Une personne sous le projecteur',
      `${REFRAME} Les huit formes viennent de ${TONIQUES_REF}. Pour opposer deux personnes, donne à chacune son pronom tonique et garde le pronom sujet devant le verbe : lui, il adore ; moi, je déteste. EN: ${REFRAME_EN} One stressed pronoun per side; the subject pronoun stays by the verb.`),
    table('sheet-formes-table', 'Les formes en contraste', ['Tonique', 'Sujet', 'Exemple'], [
      ['moi', 'je', 'Moi, je pars.'],
      ['toi', 'tu', 'Toi, tu restes.'],
      ['lui', 'il', 'Lui, il vote contre.'],
      ['elle', 'elle', 'Elle, elle vient.'],
      ['nous', 'nous (on, à l’oral)', 'Nous, nous avons voté pour la comédie.'],
      ['vous', 'vous', 'Vous, vous avez le temps.'],
      ['eux', 'ils', 'Eux, ils veulent un jardin.'],
      ['elles', 'elles', 'Elles, elles ont gagné.'],
    ]),
    table('sheet-formes-place', 'Où le placer', ['Place', 'Exemple', 'Registre'], [
      ['en tête', 'Moi, je prends le métro.', 'courant'],
      ['après un nom sujet', "Mon frère, lui, n'a rien dit.", 'courant, écrit aussi'],
      ['en fin de phrase', "Je n'en sais rien, moi.", 'oral'],
      ['seul sujet, en contraste', 'Eux ont refusé, nous avons accepté.', 'écrit, récit'],
    ]),
    table('sheet-formes-seul', 'Le pronom tonique sujet', ['Cas', 'Exemple', 'Le verbe'], [
      ['lui, eux en contraste', "Elle a crié ; lui n'a rien entendu.", 'troisième personne'],
      ['avec seul', 'Moi seul peux signer ce document.', 'la personne du pronom'],
      ['avec aussi, non plus', 'Lui aussi a voté contre.', 'troisième personne'],
      ['avec même', "Lui-même l'a reconnu.", 'troisième personne'],
      ['moi, toi sans seul', "Moi aussi, j'ai voté contre.", 'je ou tu reste obligatoire'],
    ]),
  ]),
  sheet('sheet-reprise', 'La reprise et le bon pronom', ['détacher à gauche', 'détacher à droite', 'le pronom de reprise', 'lui, le ou à lui', 'il ou lui'], [
    teach('sheet-reprise-teach', 'Détacher, reprendre, remettre en ordre',
      "À l'oral, on détache un mot en tête ou en fin de phrase, et un pronom le reprend dans la phrase. C'est le verbe qui choisit ce pronom. À l'écrit neutre, on remet l'ordre simple : sujet, verbe, complément. EN: speech detaches and picks up; neutral writing restores plain order."),
    table('sheet-reprise-table', 'Le pronom de reprise', ['Le verbe', 'La reprise', 'Exemple'], [
      ['lire quelque chose', 'le, la, les', "Ce livre, je l'ai lu en une nuit."],
      ['parler à quelqu’un', 'lui, leur', 'Ta sœur, je lui ai parlé hier.'],
      ['habiter, aller quelque part', 'y', "Ce quartier, j'y habite depuis dix ans."],
      ['boire du café', 'en', "Du café, j'en bois beaucoup trop."],
      ['une idée, une situation', 'ça', "Ce genre de réunion, moi, ça m'épuise."],
      ['à droite', 'le pronom annonce', "Je l'ai lu en une nuit, ce livre."],
    ]),
    table('sheet-reprise-lui', 'Lui, le ou à lui', ['Le verbe', 'Le pronom', 'Exemple'], [
      ['voir, croiser quelqu’un', 'le, la', "Je l'ai croisé ce matin."],
      ['parler, téléphoner, écrire à', 'lui, devant le verbe', 'Je lui téléphone tous les soirs.'],
      ['penser à, songer à', 'à lui, après le verbe', 'Je pense souvent à lui.'],
      ['tenir à, s’intéresser à', 'à lui, à elle', 'Je tiens beaucoup à elle.'],
      ['faire attention à', 'à eux', 'Fais attention à eux.'],
    ]),
    table('sheet-reprise-il', 'Il ou lui', ['Forme', 'Ce que comprend le lecteur', 'Exemple'], [
      ['il', 'le même sujet, en général', "Marc a croisé Paul ; il ne l'a pas reconnu."],
      ['lui, en tête', 'l’autre homme', "Marc a croisé Paul ; lui ne l'a pas reconnu."],
      ['elle, elle', 'l’autre femme', "Léa a appelé sa mère ; elle, elle n'a pas décroché."],
      ['un nom', 'aucun doute', 'Mme Petit a appelé Mme Blanc.'],
    ]),
  ]),
  sheet('sheet-accords', 'Les accords', ['deux sujets', 'c’est … qui', 'même, tous, deux'], [
    teach('sheet-accords-teach', 'Le verbe suit la personne',
      `Deux sujets : la personne la plus proche de celui qui parle l'emporte (moi, puis toi, puis les autres). Après c'est … qui, le verbe garde la personne du pronom : c'est moi qui ai. ${Cap(QUI_QUE_REF)} disait : « ${B111_REFRAME} » EN: ${B111_REFRAME_EN} The verb follows the person.`),
    table('sheet-accords-deux', 'Deux sujets', ['Sujets', 'Personne', 'Exemple'], [
      ['X et moi', 'nous', 'Paul et moi sommes arrivés en retard.'],
      ['toi et X', 'vous', 'Toi et lui, vous êtes invités samedi.'],
      ['lui et elle, X et lui', 'ils', 'Marie et lui sont partis ensemble.'],
      ['ni toi ni moi', 'nous', 'Ni toi ni moi ne connaissons la réponse.'],
      ['la politesse', 'moi en dernier', 'Mon mari et moi vous remercions de votre accueil.'],
    ]),
    table('sheet-accords-qui', 'Après c’est … qui', ['Pronom', 'Avoir', 'Être'], [
      ['moi', "c'est moi qui ai", "c'est moi qui suis"],
      ['toi', "c'est toi qui as", "c'est toi qui es"],
      ['lui, elle', "c'est lui qui a", "c'est elle qui est"],
      ['nous', "c'est nous qui avons", "c'est nous qui sommes"],
      ['vous', "c'est vous qui avez", "c'est vous qui êtes"],
      ['eux, elles', 'ce sont eux qui ont (oral : c’est eux)', 'ce sont elles qui sont'],
    ]),
    table('sheet-accords-renfort', 'Les renforts', ['Renfort', 'Accord', 'Exemple'], [
      ['même', 'même au pluriel après nous, vous (plusieurs), eux, elles', 'Nous avons peint la cuisine nous-mêmes.'],
      ['vous-même', 'une personne vouvoyée', "Vous l'avez reconnu vous-même."],
      ['aussi, non plus', 'lui, eux sans pronom sujet', 'Eux aussi ont signé.'],
      ['tous', 'sans article', 'Vous tous, vous êtes invités.'],
      ['deux, trois', 'sans article', 'Vous deux, vous êtes inséparables.'],
      ['à nous deux', 'ensemble', 'À nous deux, nous finirons ce soir.'],
    ]),
  ]),
  sheet('sheet-soi', 'Soi et à moi', ['soi ou lui', 'les expressions figées', 'à moi, à moi de', 'un ami à moi'], [
    teach('sheet-soi-teach', 'Personne en particulier, ou quelqu’un de précis',
      "Soi reprend un sujet qui ne désigne personne de précis : on, chacun, personne, tout le monde, il faut, un infinitif. Un sujet nommé prend lui ou elle. Après chacun, l'usage accepte aussi lui : chacun est rentré chez lui. EN: soi for indefinite subjects; after chacun, lui is also accepted."),
    table('sheet-soi-table', 'Soi ou lui', ['Sujet', 'Pronom', 'Exemple'], [
      ['on', 'soi', 'On est bien chez soi.'],
      ['chacun', 'soi (ou lui)', 'Chacun est rentré chez soi.'],
      ['personne, tout le monde', 'soi', "Personne n'aime parler de soi."],
      ['il faut, un infinitif', 'soi', 'Il faut avoir confiance en soi.'],
      ['un homme nommé', 'lui', 'Paul est rentré chez lui.'],
      ['une femme nommée', 'elle', 'Marie a toujours ses clés sur elle.'],
    ]),
    table('sheet-soi-figees', 'Les expressions figées', ['Expression', 'Sens', 'Exemple'], [
      ['cela va de soi', 'évidemment', 'Cela va de soi.'],
      ['chacun pour soi', 'chacun ne pense qu’à lui', 'Chacun pour soi.'],
      ['en soi', 'dans sa nature', "Le problème n'est pas grave en soi."],
      ['soi-même', 'soi, avec insistance', "On n'est jamais si bien servi que par soi-même."],
    ]),
    table('sheet-soi-a-moi', 'À moi, à moi de', ['Forme', 'Sens', 'Exemple'], [
      ['être à moi', 'la possession', 'Ce vélo est à eux, pas à nous.'],
      ['à moi de + infinitif', 'le tour, le rôle', "C'est à moi de décider."],
      ['un ami à moi', 'un de mes amis', 'Un ami à moi habite à Lyon.'],
      ['son livre à elle', 'lever le doute de son', "C'est son livre à elle, pas à lui."],
      ['bien à lui', 'qui n’appartient qu’à lui', 'Il a une façon bien à lui de raconter les histoires.'],
    ]),
  ]),
  sheet('sheet-registre', 'L’oral et l’écrit', ['les deux registres', 'les formes sûres', 'la réponse dans un débat', 'la liste de contrôle'], [
    teach('sheet-registre-teach', 'Aucun registre n’est faux',
      `${Cap(REGISTRES_REF)} disait : « ${B125_REFRAME} » Moi, je, les mots détachés, nous, on et c'est eux qui vont avec la parole. Pour ma part, quant à eux et ce sont eux qui vont avec l'écrit soigné. EN: ${B125_REFRAME_EN}`),
    table('sheet-registre-table', 'De l’oral à l’écrit', ['À l’oral', 'À l’écrit soigné'], [
      ['Moi, je pense que…', 'Pour ma part, je pense que…'],
      ["Nous, on n'est pas d'accord.", "Nous ne sommes pas d'accord."],
      ['Les parents, eux, ils s’inquiètent.', "Les parents, quant à eux, s'inquiètent."],
      ["C'est eux qui ont lancé le projet.", 'Ce sont eux qui ont lancé le projet.'],
      ["Ce film, je l'ai adoré.", "J'ai adoré ce film."],
      ['Il exagère, lui.', 'Elle juge ces propos exagérés.'],
    ]),
    table('sheet-registre-plan', 'La réponse dans un débat', ['Étape', 'Exemple'], [
      ['les deux avis', 'Karim, lui, pense que… ; Léa, elle, craint…'],
      ['ce qu’ils ont de juste', 'Eux deux ont raison sur un point.'],
      ['ton avis', 'Pour ma part, je crois que…'],
      ['un fait', "C'est nous-mêmes qui avons voté ce budget."],
      ['la proposition', "Ce n'est pas à moi seul de décider : je propose donc…"],
    ]),
    table('sheet-registre-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Chaque avis a sa personne', 'lui, elle, eux, moi ou pour ma part'],
      ['Aucun il ambigu', 'lui en tête, ou le nom'],
      ['Le verbe après qui', "c'est moi qui ai, c'est nous qui sommes"],
      ['Les renforts accordés', 'nous-mêmes, eux seuls'],
      ['Le registre écrit', 'ni moi, je en série, ni mot détaché'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];

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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-11-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const EXERCISE = 'One voice, read as written, blanks and bracketed cues spoken as they appear: this is the exercise text, not the answer.';
const REC_DESC: Record<string, string> = {
  'rec-b2-11-cineclub': "Bertrand's report (act 1), one male voice with a Montréal accent, one take, read as a friendly club newsletter. The stressed pronouns (eux, lui seul, moi) carry a natural contrastive stress, never an exaggerated one.",
  'rec-b2-11-rappel': 'The four recall cards (act 2), one coach voice. Card one reads the eight forms with a short pause between each; elle and elles sound the same and must not be split.',
  'rec-b2-11-contraste-ecoute': `${ONE_TAKE} Ten lines. Each line has two camps: the two stressed pronouns carry a light rise, the same on every line, so the questions test the words and not the voice.`,
  'rec-b2-11-hugo': 'Hugo and a coach voice (act 3), Lyon, one take, relaxed and fast, as friends talk on a terrace. Hugo detaches naturally; the coach lines are calm.',
  'rec-b2-11-reprise': 'The four detachment cards (act 3), one voice. Cards one and two (ce livre, je l’ai lu / je l’ai lu, ce livre) are read with the pause on the comma, as speech does.',
  'rec-b2-11-piege-reprise': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions in promptSound are NEVER spoken.",
  'rec-b2-11-texte-a3': "Hugo's voice message (act 3), one male voice, read as a real voicemail, detachments and t'es included: the exercise is to rewrite it.",
  'rec-b2-11-musee': 'Inspector Morel and Théo (act 4), Geneva, two voices, one take, calm and precise. Théo stresses lui seul and eux slightly, as a witness does.',
  'rec-b2-11-seul': 'The four subject cards (act 4), one voice, level. No extra stress on seul.',
  'rec-b2-11-seul-ecoute': `${ONE_TAKE} Ten lines. Lines one and four (lui seul, eux seuls) and seven (elle / lui) are the contrasts the questions test: identical rhythm.`,
  'rec-b2-11-texte-a4': `The tenants' meeting minutes (act 4). ${EXERCISE}`,
  'rec-b2-11-accord': 'The four agreement cards (act 5), one voice. Sommes, avez, êtes and connaissons are pronounced clearly; no liaison is dropped.',
  'rec-b2-11-piege-accord': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions are never spoken.",
  'rec-b2-11-texte-a5': `Sofia's message (act 5). ${EXERCISE}`,
  'rec-b2-11-cafe': 'Mrs Tremblay and a colleague (act 6), Montréal, two voices, one take, light office comedy. The colleague says « c’est moi qui ai » with a clear [e] on ai.',
  'rec-b2-11-relief': 'The four highlighting cards (act 6), one voice. Card two reads « c’est moi qui ai » with a clear [e]: that sound is what separates ai from a.',
  'rec-b2-11-relief-ecoute': `${ONE_TAKE} Ten lines. The auxiliaries ai [e], a [a], sommes and avez must be audible; line nine rises as a question.`,
  'rec-b2-11-piege-relief': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The c’est moi qui a versions are NEVER spoken.",
  'rec-b2-11-texte-a6': "Bastien's minutes (act 6), one voice, read as written, wrong forms included, without comment.",
  'rec-b2-11-amina': 'Amina and a coach voice (act 7), Liège, one take, tired and proud. A light Belgian accent is welcome.',
  'rec-b2-11-renfort': 'The four reinforcement cards (act 7), one voice. Nous-mêmes and vous-même sound the same: do not add a sound for the s.',
  'rec-b2-11-texte-a7': `Amina's message (act 7). ${EXERCISE}`,
  'rec-b2-11-ambiguite-ecoute': `${ONE_TAKE} Ten lines. Lines one and two differ only by lui / il: read them with identical rhythm, with the natural light stress on lui.`,
  'rec-b2-11-ambiguite': 'The four cards on il, lui, le and à lui (act 8), one voice, level.',
  'rec-b2-11-piege-ambiguite': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions are never spoken.",
  'rec-b2-11-texte-a8': "Nora's account of the quarrel (act 8), one voice, read as written, with every ambiguous il left in place.",
  'rec-b2-11-sara': 'Sara and a coach voice (act 9), Geneva, one take, warm and a little tired after travelling.',
  'rec-b2-11-soi': 'The four soi cards (act 9), one voice. Soi is [swa], never reduced.',
  'rec-b2-11-soi-ecoute': `${ONE_TAKE} Ten lines. Lines two and five (chez soi / chez lui) are the contrast the questions test: identical rhythm.`,
  'rec-b2-11-texte-a9': `The flat-share rules (act 9). ${EXERCISE}`,
  'rec-b2-11-a-moi': 'The four à moi cards (act 10), one voice. Card two separates « à moi » and « à moi de » with the natural pause of the sentence, no more.',
  'rec-b2-11-texte-a10': `The pink scarf (act 10). ${EXERCISE}`,
  'rec-b2-11-radio': 'The Brussels radio debate (act 11). THREE voices for the transcript (a presenter, Mme Peeters, M. Lambert), spoken and overlapping slightly, Belgian accents welcome; then ONE neutral newsreader voice for the written summary. The contrast between the two halves is the lesson.',
  'rec-b2-11-texte-a11': "M. Girard's opinion (act 11), one older male voice, spoken and emphatic, dropped ne included: the exercise is to rewrite it.",
  'rec-b2-11-modele': "Mathieu's forum reply (act 12), one voice, one take, read as a considered written message, calm and courteous.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 11',
  intro: 'In lesson 35 in A2 you learned the eight stressed pronouns and where they go. Here you use them when several people are speaking or spoken about: to set one person against another, to detach and pick up a word as speech does, to let lui or eux carry the verb alone, to agree the verb after Paul et moi and after c’est moi qui, to reinforce with même, aussi, seul, tous and deux, to make clear which of two men is acting, to choose soi or lui, and to say whose thing or whose turn it is. You also learn which of these forms belong to speech and which to careful writing. The task: a 150 to 220 word reply in a discussion, setting your view against two others, graded on the B2 writing criteria.',
  skill: 'PE',
  grammarAssumed: [TONIQUES_UNIT, POSSESSIFS_UNIT, INDIRECT_UNIT, QUI_QUE_UNIT, ORDRE_UNIT, CEST_UNIT, MEME_UNIT],
  grammarIntroduced: [
    'Contrast between people with stressed pronouns at the head of the clause, after a subject noun or at the end, with the subject pronoun kept before the verb',
    'Left and right detachment (dislocation) in speech with the resuming pronoun chosen by the verb (le, lui, y, en, ça), against the neutral written order',
    'The stressed pronoun alone as subject when contrasted or qualified (lui seul, eux ont refusé, lui aussi, lui non plus), moi and toi only with seul, the verb in the pronoun’s person',
    'Agreement with compound subjects (Paul et moi sommes, toi et lui êtes), optional resuming nous or vous, ni … ni, and the politeness order',
    'Verb agreement after c’est moi qui, c’est nous qui, c’est vous qui, ce sont eux qui, and c’est … que with its preposition',
    'Reinforcement with -même(s) in agreement (vous-même, vous-mêmes), aussi, non plus, tous, deux and à nous deux',
    'Disambiguation between two people with a stressed lui or elle, and lui before the verb against à lui after penser à, tenir à, faire attention à, s’intéresser à',
    'Soi after on, chacun, personne, tout le monde, il faut and infinitives, against lui and elle for a named person; cela va de soi, chacun pour soi, en soi',
    'À + stressed pronoun for possession, for whose turn or role (c’est à moi de), for un ami à moi and for lifting the ambiguity of son (son livre à elle)',
    'The register of each form: spoken detachment, moi je and nous on against pour ma part, quant à eux and ce sont eux qui in careful writing',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu connais moi, toi, lui et eux. Ici, tu t'en sers quand plusieurs personnes parlent : pour opposer deux avis, détacher un mot comme à l'oral, faire porter le verbe à lui seul, accorder après c'est moi qui, renforcer avec même ou tous, lever un doute entre deux personnes, choisir soi ou lui et dire à qui revient le tour. À la fin, tu réponds en 150 à 220 mots dans un débat, en opposant ton avis à celui des autres.",
    minutes: 150,
    difficulty: 4,
    glyph: 'moi',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: PRONOMS_INSISTANCE_TERMS,
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
