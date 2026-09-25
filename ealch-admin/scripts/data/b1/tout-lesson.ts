// b1.23.l1 « Tout, tous, toute, toutes » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union, enforced by
// validateSection, drawn by TaskView), so `sections` is `LessonSection[]` and
// the validators run on `LESSON` itself, as b1.18 and b1.20 do.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading / listening), name
//   (cardDeck, examples, tapTable), build (groupDrill, gated), choose (a
//   drill where the MEANING picks the form), trap (trapDrill stepped or
//   commonErrors), check (gated control pages before the checkpoint).
//
//    1  Le premier juillet            7   the known chunks, four written forms
//    2  Quatre formes devant un nom   8   tout le / toute la / tous les / toutes les
//    3  Tous les jours, toute la journée  8   frequency against duration
//    4  Tout un, tout ce, tout mon    7   tout un, possessives, demonstratives,
//                                     tout without an article (notices)
//    5  Tout, le pronom               7   everything, singular verb
//    6  Tous, avec son s              8   pronoun tous [tus] and toutes
//    7  La place                      7   j'ai tout compris, ils sont tous partis
//    8  Tout, l'adverbe               7   completely; toute seule, tout heureuse
//    9  Les expressions               8   tout à fait, tout à l'heure, en tout cas
//   10  Tout le monde                 7   singular verb; tous les deux
//   11  Organiser une fête           11   model, plan, role play, TASK, quiz
//
//   TOTAL 85 missions, 11 acts, 452 estimated screens. Corpus: 196 authored
//   rows in eleven blocks (.1000-.1195) plus 32 reused seed rows, 228 item
//   ids in all, 219 of them released act by act through `deckTranche` (the
//   other 9 are seed rows with no flashcard drill, listed as NOT_DECK_ABLE).
//   Quiz: 11 rounds of 8 (33 mcq, 25 typeIn, 19 errorSpot, 11 listenChoose).
//   Eleven error triggers, eleven drills, five reference sheets reached from
//   16 missions by `sheetId`, twelve terms. Three tapTables (acts 3, 6, 9). Chapter artwork:
//   `tout-image-prompts.md`, 11 prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Tout, c'est sans exception. Devant un nom, il en prend la forme. »
//   EN: Tout means without exception. Before a noun, it takes that noun's shape.
//
//   ONE METAPHOR, THE WHOLE SET AGAINST ONE PIECE. Tout never picks a piece:
//   before a noun it wraps that noun and takes its gender and number; alone
//   it IS the whole set (tout, tous, toutes); before an adjective it means
//   completely. It is NOT « tout = all »: tout le monde, tous les jours and
//   tous les deux jours all break that (corpus REFRAME_REJECTED).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    tout as a system: agreement as a determiner (with an article, a
//           possessive, a demonstrative, un, or nothing); frequency against
//           duration; the pronoun tout; the pronouns tous and toutes with
//           the pronounced S; their place in compound tenses and before an
//           infinitive; the adverb and its one agreement; the fixed
//           expressions; tout le monde with a singular verb; tous les deux.
//   QUOTES  a1.08's reframe (« Le makes it every week ») and sons.06's
//           (« Silent unless there's a reason »), each with a French
//           rendering; b1.13's French reframe on the sheet that names tout
//           ce qui.
//   LEAVES  tout ce qui / tout ce que to b1.13 (cited on sheet-expressions,
//           never re-taught); pas du tout / plus du tout to b1.20 (cited);
//           the liaison mechanics of tout à fait to sons.10; même to b1.24.
//           No authored French string uses a subjunctive.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; the moving company's employee
//   says « vous ». Every learner surface that explains something carries
//   English (`en`, or a final « EN: »), and NO ANSWER ever does. Every `say`
//   is French. Theme `expressions-de-quantite`, existing. A1, A2 and sons
//   citations use the English trail label; b1.* ones are French from the
//   plan. Setting: Montréal on 1 July (moving day), with Liège, Dakar,
//   Ottawa and Moncton in the stories; characters recur only inside this
//   lesson. No bubble carries a « ? » or a « ! ».
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. « tout heureuse » is taught as THE form. The 1976 tolerance also
//      accepts « toute heureuse », and the grader notes accept it. Teach
//      the tolerance on the sheet too, or keep it grader-only?
//   2. Tout WITHOUT an article (« tout retard sera facturé ») is taught as
//      the language of notices, act 4, with one cardDeck card and one
//      reading. Recognition-plus, or should it wait for b1.25 (register)?
//   3. THREE tapTables (acts 3, 6 and 9), one per act, six rows each.
//      Confirm three, as for every other B1 lesson.
//   4. The graded task is written (PE, 80 to 120 words). The act 6 point
//      (pronoun tous said [tus]) can only be tested by ear; a spoken
//      voicemail task would test it. Add a PO task later?
//   5. Four published b1 rows of this theme are twinned (corpus
//      DB_ONLY_TWINS). Dedupe at import or keep both?
//   6. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  JUILLET_TEXT, CONDITIONS_TEXT, LETTRE_TEXT, MESSAGE_TEXT,
  A108_REFRAME, A108_REFRAME_FR, S06_REFRAME, S06_REFRAME_FR, B113_REFRAME,
  JOURS_UNIT, ROUTINE_UNIT, SALUTATIONS_UNIT, RESTAURANT_UNIT, TRANSPORTS_UNIT, MUETTES_UNIT,
  LIAISON_UNIT, PC_AVOIR_UNIT, PC_ETRE_UNIT, COD_UNIT, CE_QUI_UNIT, NEGATION_AV_UNIT,
  JOURS_REF, ROUTINE_REF, RESTAURANT_REF, TRANSPORTS_REF, MUETTES_REF, LIAISON_REF, PC_AVOIR_REF,
  CE_QUI_REF, NEGATION_AV_REF, MEME_REF,
} from './tout-corpus.ts';
import { TOUT_TERMS } from './tout-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.23: no item ${id}`);
  return r;
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.ipa) throw new Error(`b1.23: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section. Own rows only: a
 *  seed respelling may carry the U+203F tie. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`b1.23: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const uc = (situation: string, id: string) => ({ situation, fr: src(id).fr, en: src(id).en });
const fr = (id: string) => src(id).fr;
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

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE PREMIER JUILLET
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The learner's French is grammatical and books the wrong thing:
 *  « all day » translated word by word becomes « tous les jours », every
 *  day, and the company books the truck for the whole month.
 *  NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le camion du premier juillet',
  frSub: 'Un appel, une semaine avant',
  setting: { place: 'Ton salon plein de cartons, sur le Plateau', city: 'Montréal', time: '10 h 15', ambience: 'des cartons partout, du ruban adhésif, un téléphone' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, fin juin. Le premier juillet, tout le quartier déménage, et toi aussi. Tu appelles une compagnie pour réserver un camion. Tu en as besoin un seul jour : le samedi, du matin au soir.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: "L'employée",
      fr: 'Déménagements Gagnon, bonjour. Dites-moi pour combien de temps vous voulez le camion.',
      en: 'Gagnon Removals, hello. Tell me how long you want the truck for.',
      respell: '[day-may-nazh-MAHⁿ ga-NYOHⁿ | bohⁿ-ZHOOR | deet-MWA poor kohⁿ-byehⁿ duh TAHⁿ | voo voo-lay luh ka-MYOHⁿ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: fr(E(1001)),
      en: src(E(1001)).en,
      respell: rsOf(E(1001)),
      stage: 'Tu penses : all day. Tu as pris all, puis day au pluriel.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: "L'employée",
      fr: 'Très bien. Je vous le réserve pour tout le mois de juillet, chaque jour.',
      en: 'Very good. I will book it for you for the whole of July, every day.',
      respell: '[treh BYEHⁿ | zhuh voo luh ray-ZEHRV | poor too luh mwa duh zhwee-YEH | shak ZHOOR]',
      stage: 'Elle a entendu : chaque jour, un jour après l’autre.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Elle annonce le prix : trente et un jours de location. Tu voulais un seul samedi, en entier. Elle a compris des samedis, des lundis, des mardis, tout le mois.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase dit : un seul jour, du matin au soir ?',
      size: 'lg',
      options: [
        { fr: fr(E(1001)), respell: rsOf(E(1001)), en: src(E(1001)).en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1000)), respell: rsOf(E(1000)), en: src(E(1000)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "L'employée corrige tout de suite : un samedi, de sept heures à dix-neuf heures. Le prix tombe de trente et un jours à un seul.",
        breaks: "L'employée confirme : trente et un jours. Tu vas payer un camion qui dort devant chez toi tout le mois.",
      },
    },
    {
      kind: 'break',
      heading: "Tous les jours, ce n'est pas toute la journée",
      body: "Ta phrase est correcte, mais elle compte des jours qui se répètent. Pour un seul jour pris en entier, le français met tout au singulier : toute la journée. EN: tous les jours counts repeated days; toute la journée is one whole day.",
      wrong: {
        fr: fr(E(1001)),
        ipa: ipaOf(E(1001)),
        respell: rsOf(E(1001)),
        en: src(E(1001)).en,
      },
      right: {
        fr: fr(E(1000)),
        ipa: ipaOf(E(1000)),
        respell: rsOf(E(1000)),
        en: src(E(1000)).en,
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Le camion est réservé pour un samedi. Mais tout, toute, tous, toutes : il y a quatre formes, et le jour du déménagement, tu vas toutes les entendre.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['duree', 'frequence'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Accorder tout devant un nom', s: 'Actes 2 à 4 : tout le, toute la, tous les, toutes les, tout un' },
    { t: 'Compter ou mesurer le temps', s: 'Acte 3 : tous les jours, toute la journée' },
    { t: 'Dire tout, tous, toutes tout seuls', s: 'Actes 5 à 8 : le pronom, le s de tous, la place, l’adverbe' },
    { t: 'Organiser une fête par écrit', s: 'Actes 9 à 11 : les expressions, tout le monde, ton message' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: moving day, where every form of tout already works. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le premier juillet',
  frSub: 'Lis, et cherche tous les tout',
  text: JUILLET_TEXT,
  glossary: [
    { word: 'ruelles', en: 'back lanes', note: 'À Montréal, les petites rues derrière les maisons.' },
    { word: "s'entraident", en: 'help one another', note: "Chacun aide les autres." },
    { word: 'emballée', en: 'packed, wrapped', note: 'Mise dans du papier et dans un carton.' },
    { word: 'déménageurs', en: 'movers', note: 'Les personnes qui portent les meubles.' },
    { word: 'en désordre', en: 'in a mess', note: 'Rien n’est à sa place.' },
  ],
  questions: [
    { q: 'Qui déménage le premier juillet, au Québec ?', a: "« tout le monde, ou presque » : tout le monde veut dire everybody." },
    { q: 'Combien de temps les déménageurs ont-ils travaillé ?', a: "« toute la journée » : une journée, du début à la fin." },
    { q: 'Trouve les quatre formes de tout devant un nom.', a: 'tout le monde, toute la ville, tous les voisins, toutes les chaises. Le nom décide.' },
    { q: "« Ils étaient tous fatigués » : il y a un nom après tous ?", a: "Non. tous est seul, c'est un pronom : les déménageurs, tous. Son s se prononce." },
    { q: 'Combien de temps pour ranger ?', a: "« toute une semaine » : une semaine entière." },
  ],
  audio: REC('rec-b1-23-juillet'),
  say: REFRAME,
  terms: ['formes', 'accord'],
};

/** BUILD, on the text just read: tout before a noun, or tout alone. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Devant un nom, ou tout seul',
  groups: [
    grp('Devant un nom', [
      it(E(1002), 'tous : les cartons'),
      it(E(1003), 'toute : la vaisselle'),
      it(E(1004), 'toutes : les chaises'),
      it(E(1005), 'tout : le quartier'),
    ], chk(
      'Dans ces quatre phrases, qui décide de la forme de tout ?',
      ['le verbe', 'le nom qui suit'], 1,
      "Le nom : son genre et son nombre. EN: the noun decides.")),
    grp('Tout seul', [
      it(E(1006), 'tout : toutes les choses'),
      it(E(1012), 'tout : tout ce qu’il fallait faire'),
      it(E(1008), 'tous : les gens, sans nom après'),
      it('fr.a1.salutations.088', 'tout : la phrase des salutations'),
    ], chk(
      '« Ils sont tous là. » Y a-t-il un nom après tous ?',
      ['Non, tous est seul.', 'Oui, là.'], 0,
      "là n'est pas un nom. tous est seul : c'est un pronom. EN: tous stands alone here.")),
    ctl('Le camion', 'Tu veux le camion un seul samedi, du matin au soir.',
      [fr(E(1001)), fr(E(1000))], 1,
      "Un seul jour, en entier : toute la journée. EN: one whole day."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formes'],
};

/** NAME, gently: the chunks the learner already owns, sorted. */
const A1_CONNUS: Sec<'examples'> = {
  type: 'examples',
  id: 'a1-connus',
  layer: 'core',
  sheetId: 'sheet-formes',
  title: 'Ce que tu sais déjà',
  examples: [
    ex('fr.a1.routines.026', `${Cap(ROUTINE_REF)} : tous, devant jours, masculin pluriel.`),
    ex('fr.a2.transports-quotidiens.211', `${Cap(TRANSPORTS_REF)} : tout, devant le monde.`),
    ex('fr.a2.au-restaurant.189', `${Cap(RESTAURANT_REF)} : tout de suite, un bloc qui ne change pas.`),
    ex('fr.a1.salutations.088', 'Tout, tout seul : toutes les choses. Un pronom.'),
    ex('fr.a2.au-restaurant.156', 'Encore le pronom, à la fin de la commande.'),
    ex('fr.a2.transports-quotidiens.135', 'Tout devant un adverbe : complètement droit.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formes', 'pronom'],
};

/** CHOOSE: where the wrong form costs something real. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où la bonne forme compte',
  cases: [
    uc('Tu réserves un camion pour un samedi', E(1000)),
    uc('Tu dis au chauffeur que tout est chargé', E(1006)),
    uc('Tu préviens ton amie que tout le monde est arrivé', E(1009)),
    uc('Tu comptes les cartons avec les déménageurs', E(1002)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formes', 'duree'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La forme', '« ___ la vaisselle est emballée. »',
    ['Tout', 'Toute', 'Tous'], 1,
    "vaisselle est féminin singulier : toute. EN: feminine singular."),
  ctl('Le sens', "« tous les jours » veut dire...",
    ['chaque jour', 'une journée entière'], 0,
    "Des jours qui se répètent. EN: every day."),
  ctl('Le son', '« Ils sont tous là. » Entends-tu le s de tous ?',
    ['Oui', 'Non'], 0,
    "Oui : tous est seul, c'est un pronom. EN: pronoun tous sounds its s."),
], ['formes', 'duree']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le premier juillet',
    opener: {
      line: "Tu voulais un camion pour un jour et tu l'as loué pour un mois : ici tu apprends que tout change de forme et de sens. EN: You wanted a truck for a day and booked it for a month: here you learn that tout changes shape and meaning.",
      imageRef: 'lessons/tout/act01.jpg',
    },
    sections: [],
    milestone: "Tu reconnais les quatre formes de tout, et tu sais que tous les jours n'est pas toute la journée. EN: You recognise the four forms of tout, and you know tous les jours is not toute la journée.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_CONNUS, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — QUATRE FORMES DEVANT UN NOM
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a friend from Liège reads the packing list. No « ? » or « ! ». */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'La liste de Mireille',
  frSub: 'Luc lit, tu réponds',
  setting: "Vendredi soir, la veille du déménagement. Luc, ton ami de Liège, est venu t'aider. Il lit à voix haute la liste que Mireille a laissée sur le frigo.",
  bubbles: [
    { from: 'narrator', fr: 'Luc prend la liste et commence par le salon.', en: 'Luc picks up the list and starts with the living room.' },
    { from: 'coach', fr: 'Bon. Le salon, il faut le vider.', en: 'Right. The living room has to be emptied.' },
    { from: 'user', fr: fr(E(1016)), en: src(E(1016)).en, warn: 'tout : le salon, masculin singulier' },
    { from: 'coach', fr: 'Ensuite, la cuisine.', en: 'Next, the kitchen.' },
    { from: 'user', fr: fr(E(1017)), en: src(E(1017)).en, warn: 'toute : la cuisine, féminin singulier' },
    { from: 'coach', fr: 'Et les livres, dis-moi où ils vont.', en: 'And the books, tell me where they go.' },
    { from: 'user', fr: fr(E(1018)), en: src(E(1018)).en, warn: 'tous : les livres, masculin pluriel' },
    { from: 'narrator', fr: 'Luc sourit. Trois réponses, trois formes, et chaque fois, c’est le nom qui a choisi.', en: 'Luc smiles. Three answers, three forms, and each time the noun chose.' },
  ],
  closing: { fr: 'Tout, toute, tous, toutes : le nom décide, pas toi.', en: 'Tout, toute, tous, toutes: the noun decides, not you.' },
  audio: REC('rec-b1-23-liste'),
  say: REFRAME,
  terms: ['accord'],
};

/** NAME: the four forms, one per card. */
const A2_FORMES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-formes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-formes',
  title: 'Quatre formes, un seul mot',
  frSub: 'tout le, toute la, tous les, toutes les',
  hint: 'Quatre cartes. Regarde le nom, puis tout.',
  audio: REC('rec-b1-23-formes'),
  say: REFRAME,
  terms: ['formes', 'accord'],
  cards: [
    {
      head: 'Masculin singulier', label: 'tout le',
      fr: fr(E(1016)), sub: rsOf(E(1016)),
      body: "Le salon, masculin et seul : tout. Tout le salon, du mur au mur. EN: masculine singular, tout.",
    },
    {
      head: 'Féminin singulier', label: 'toute la',
      fr: fr(E(1017)), sub: rsOf(E(1017)),
      body: "La cuisine, féminin : toute. Le t final se prononce : [toot]. EN: feminine singular, toute, with a sounded t.",
    },
    {
      head: 'Masculin pluriel', label: 'tous les',
      fr: fr(E(1018)), sub: rsOf(E(1018)),
      body: "Les livres, masculin pluriel : tous. Le s est muet devant un nom : [too lay]. EN: masculine plural, tous, silent s.",
    },
    {
      head: 'Féminin pluriel', label: 'toutes les',
      fr: fr(E(1019)), sub: rsOf(E(1019)),
      body: "Les assiettes, féminin pluriel : toutes. À l'oral, toute et toutes sonnent pareil : [toot]. EN: feminine plural, toutes, same sound as toute.",
    },
  ],
};

/** BUILD: the form from the noun, including behind l'. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le nom choisit',
  groups: [
    grp("Au singulier, même devant l'", [
      it(E(1020), 'le frigo : tout'),
      it(E(1021), 'la chambre : toute'),
      it(E(1029), "l'appartement, masculin : tout"),
      it(E(1030), "l'équipe, féminin : toute"),
    ], chk(
      "Devant l', l'article ne montre plus le genre. Comment choisis-tu ?",
      ['Tu écoutes le verbe.', 'Tu connais le genre du nom.'], 1,
      "appartement est masculin, équipe est féminin : c'est le nom qui compte. EN: you need the noun's gender.")),
    grp('Au pluriel', [
      it(E(1022), 'les cartons : tous'),
      it(E(1023), 'les armoires : toutes'),
      it(E(1027), 'les voisins : tous'),
      it(E(1028), 'les clés : toutes'),
    ], chk(
      "Au pluriel, qu'est-ce qui sépare tous de toutes ?",
      ['le genre du nom', 'le nombre de choses'], 0,
      "Les deux sont au pluriel. Masculin : tous ; féminin : toutes. EN: gender alone.")),
    ctl('Avec mes', '« ___ mes amis sont venus. »',
      ['Tout', 'Tous', 'Toutes'], 1,
      "amis, masculin pluriel : tous, comme devant les. EN: tous, as before les."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  sheetId: 'sheet-formes',
  title: 'Chaque nom, sa forme',
  examples: [
    ex(E(1024), 'tous mes amis : avec un possessif, même accord qu’avec les.'),
    ex(E(1025), 'toute ma vaisselle : ma, féminin, donc toute.'),
    ex(E(1031), 'toutes les fenêtres : fenêtre est féminin.'),
    ex(E(1032), 'tous les meubles : meuble est masculin.'),
    ex('fr.a1.jours-et-mois.013', 'toute la famille : famille est féminin.'),
    ex('fr.a2.comparaisons.092', 'toute la classe : une classe entière.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

/** CHOOSE: the whole of one thing, or all of several. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Une chose entière, ou toutes les choses',
  groups: [
    grp('Une seule, en entier', [
      it(E(1021), 'une chambre, du lit au placard'),
      it(E(1020), 'un frigo, dedans et dehors'),
      it(E(1017), 'une cuisine'),
      it(E(1029), 'un appartement'),
    ], chk(
      '« Elle a rangé toute la chambre. » Combien de chambres ?',
      ['une seule, en entier', 'toutes les chambres'], 0,
      "toute la + singulier : une chose, prise en entier. EN: one thing, all of it.")),
    grp('Plusieurs, sans exception', [
      it(E(1022), 'chaque carton, sans en oublier un'),
      it(E(1023), 'chaque armoire'),
      it(E(1027), 'chaque voisin'),
      it(E(1019), 'chaque assiette'),
    ], chk(
      '« Tu as vidé toutes les armoires. » En reste-t-il une pleine ?',
      ['Oui, peut-être une.', 'Non, aucune.'], 1,
      "Tout, c'est sans exception. EN: no exception."),
    ),
    ctl('Le sens', "Tu as nettoyé une seule maison, de la cave au grenier. Tu dis que tu as nettoyé...",
      ['toutes les maisons', 'toute la maison'], 1,
      "Une maison, en entier : toute la maison. EN: the whole house."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

/** TRAP: four reasonable anglophone moves. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre accords oubliés',
  errors: [
    {
      wrong: 'Tout la cuisine est en cartons.',
      right: fr(E(1017)),
      why: "Normal : all ne change jamais en anglais. En français, tout regarde le nom : la cuisine, donc toute. EN: tout agrees with the noun.",
    },
    {
      wrong: 'Tout les livres vont dans la chambre.',
      right: fr(E(1018)),
      why: "À l'oral, tout et tous sonnent pareil devant les, donc ton oreille ne t'aide pas. À l'écrit, les livres : tous. EN: same sound, different spelling.",
    },
    {
      wrong: 'Tous les assiettes sont fragiles.',
      right: fr(E(1019)),
      why: "assiette finit en -ette, et rien ne montre son genre devant les. Elle est féminine : toutes. EN: assiette is feminine.",
    },
    {
      wrong: "Toute l'appartement sent la peinture.",
      right: fr(E(1029)),
      why: "Devant l', on ne voit plus le genre, et beaucoup de mots en a- sont féminins. Appartement est masculin : tout. EN: l' hides the gender; appartement is masculine.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris la forme que tu entends',
  frSub: 'Le nom te dit la lettre',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La forme', '« ___ les clés sont sur la table. »',
    ['Toutes', 'Tous'], 0,
    "clés, féminin pluriel : toutes. EN: feminine plural."),
  ctl('Le son', 'Devant un nom, tout et tous sonnent...',
    ['pareil, [too]', 'différemment'], 0,
    "Le s de tous est muet devant un nom. EN: same sound."),
  ctl("Devant l'", "« ___ l'équipe est fatiguée. »",
    ['Tout', 'Toute'], 1,
    "équipe est féminin : toute. EN: feminine."),
], ['accord']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Quatre formes devant un nom',
    opener: {
      line: "All ne change jamais, tout change quatre fois : ici tu apprends à laisser le nom choisir. EN: All never changes, tout changes four ways: here you learn to let the noun choose.",
      imageRef: 'lessons/tout/act02.jpg',
    },
    sections: [],
    milestone: "Tu écris tout le, toute la, tous les, toutes les selon le nom, même derrière l'. EN: You write the right form of tout from the noun, even behind l'.",
    estScreens: 32, restPoints: ['a2-exemples'],
  },
  sections: [A2_HISTOIRE, A2_FORMES, A2_CONSTRUIRE, A2_EXEMPLES, A2_CHOISIR, A2_ERREURS, A2_DICTEE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — TOUS LES JOURS, TOUTE LA JOURNÉE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear. `hideLines`: the questions are about how often or how long. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Combien de fois, ou combien de temps',
  frSub: 'Écoute le singulier et le pluriel',
  lines: [
    ln(E(1034)), ln(E(1035)), ln(E(1037)), ln(E(1042)),
    ln(E(1043)), ln(E(1049)), ln(E(1041)), ln(E(1040)),
  ],
  questions: [
    { q: 'Première phrase : combien de jours ?', opts: ['un seul', 'chaque jour'], correct: 1, why: "« tous les jours » : des jours qui se répètent. EN: every day." },
    { q: 'Deuxième phrase : combien de journées ?', opts: ['une, du matin au soir', 'chaque jour de la semaine'], correct: 0, why: "« toute la journée » : une journée entière. EN: one whole day." },
    { q: 'Les plantes, on les arrose quand ?', opts: ['chaque jour', 'un jour sur deux', 'deux fois par jour'], correct: 1, why: "« tous les deux jours » : un jour oui, un jour non. EN: every other day." },
    { q: 'Il a neigé combien de temps ?', opts: ['une nuit entière', 'chaque nuit'], correct: 0, why: "« toute la nuit » : du soir au matin. EN: all night." },
    { q: "Le chalet, avec « tout l'été », c'est...", opts: ['une habitude', 'un séjour, du début à la fin', 'une seule journée'], correct: 1, why: "tout l'été : un été entier. EN: the whole summer." },
  ],
  audio: REC('rec-b1-23-temps-ecoute'),
  say: REFRAME,
  terms: ['frequence', 'duree'],
};

const A3_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-temps',
  title: 'Compter ou mesurer',
  frSub: 'tous les jours, toute la journée',
  hint: 'Quatre cartes. Regarde si le nom est au pluriel.',
  audio: REC('rec-b1-23-temps'),
  say: REFRAME,
  terms: ['frequence', 'duree'],
  cards: [
    {
      head: 'Des fois qui se répètent', label: 'tous les + pluriel',
      fr: fr(E(1034)), sub: rsOf(E(1034)),
      body: "Lundi, mardi, mercredi... Tu comptes des jours, l'un après l'autre. Le nom est au pluriel. EN: a plural noun counts repetitions.",
    },
    {
      head: 'Un moment, en entier', label: 'toute la + singulier',
      fr: fr(E(1035)), sub: rsOf(E(1035)),
      body: "Une seule journée, de huit heures à dix-huit heures. Le nom est au singulier. EN: a singular noun measures one stretch.",
    },
    {
      head: 'Un sur deux', label: 'tous les deux',
      fr: fr(E(1037)), sub: rsOf(E(1037)),
      body: "Tous les deux jours : un jour oui, un jour non. Tous les trois mois : quatre fois par an. EN: every other day, every three months.",
    },
    {
      head: 'Ce que tu connais déjà', label: Cap(JOURS_REF),
      fr: 'tous les samedis',
      sub: '[too lay sam-DEE]',
      body: `« ${A108_REFRAME} » En français : « ${A108_REFRAME_FR} » Tous les samedis dit la même habitude, plus fort. EN: tous les makes the weekly habit explicit.`,
    },
  ],
};

/** NAME, as a lookup: six time words, how often or how long. */
const A3_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-tableau',
  layer: 'core',
  sheetId: 'sheet-temps',
  title: 'Six façons de dire le temps',
  cols: ['Expression', 'Fois ou durée', 'Sens'],
  rows: [
    { cells: ['tous les jours', 'fois', 'chaque jour'], say: fr(E(1034)),
      detail: { title: 'La fréquence', body: "Des jours qui se répètent. EN: repeated days.", say: fr(E(1043)) } },
    { cells: ['toute la journée', 'durée', 'du matin au soir'], say: fr(E(1035)),
      detail: { title: 'La durée', body: "Une journée, sans pause dans le temps. EN: one whole day.", say: fr(E(1044)) } },
    { cells: ['tous les deux jours', 'fois', 'un jour sur deux'], say: fr(E(1037)),
      detail: { title: "L'intervalle", body: "Un nombre après les : le rythme. EN: every other day.", say: fr(E(1049)) } },
    { cells: ['toutes les dix minutes', 'fois', 'six fois par heure'], say: fr(E(1039)),
      detail: { title: 'Toutes les', body: "minutes est féminin : toutes. EN: minutes is feminine.", say: fr(E(1038)) } },
    { cells: ['toute la nuit', 'durée', 'du soir au matin'], say: fr(E(1042)),
      detail: { title: 'Une nuit entière', body: "Une seule nuit, sans exception. EN: all night.", say: fr(E(1050)) } },
    { cells: ["tout l'été", 'durée', "l'été entier"], say: fr(E(1041)),
      detail: { title: "Tout l'été", body: "été est masculin : tout. EN: été is masculine.", say: fr(E(1047)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['frequence', 'duree'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Pluriel pour compter, singulier pour mesurer',
  groups: [
    grp('Combien de fois', [
      it(E(1043), 'les matins'),
      it(E(1046), 'les dimanches'),
      it(E(1048), 'les semaines'),
      it('fr.a2.pronoms-essentiels.333', 'les samedis'),
    ], chk(
      "Qu'ont en commun ces quatre noms de temps ?",
      ['Ils sont au pluriel.', 'Ils sont au singulier.'], 0,
      "Au pluriel : on compte. EN: plural, so counting.")),
    grp('Combien de temps', [
      it(E(1044), 'la matinée'),
      it(E(1047), "l'année"),
      it(E(1036), 'la semaine'),
      it('fr.a2.hebergement.102', 'la nuit'),
    ], chk(
      'Et ces quatre-là ?',
      ['au pluriel', 'au singulier'], 1,
      "Au singulier : on mesure un moment entier. EN: singular, so measuring.")),
    ctl('Un intervalle', '« toutes les quatre heures » : combien de fois par jour ?',
      ['quatre', 'vingt-quatre', 'six'], 2,
      "Vingt-quatre heures divisées par quatre : six fois. EN: six times a day."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['frequence', 'duree'],
};

/** Consolidation, as answers. No « EN: » tail on a back. */
const A3_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a3-cartes',
  layer: 'core',
  title: 'Huit cartes pour le temps',
  cards: [
    { front: 'every day', back: 'tous les jours', say: fr(E(1034)) },
    { front: 'all day', back: 'toute la journée', say: fr(E(1035)) },
    { front: 'every other day', back: 'tous les deux jours', say: fr(E(1037)) },
    { front: 'all night', back: 'toute la nuit', say: fr(E(1042)) },
    { front: 'every morning', back: 'tous les matins', say: fr(E(1043)) },
    { front: 'all summer', back: "tout l'été", say: fr(E(1041)) },
    { front: 'every ten minutes', back: 'toutes les dix minutes', say: fr(E(1039)) },
    { front: 'every three hours', back: 'toutes les trois heures', say: fr('fr.a2.symptomes.210') },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['frequence', 'duree'],
};

const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Un rythme ou un bloc',
  groups: [
    grp('Un bloc de temps', [
      it(E(1047), "l'année entière"),
      it(E(1053), 'le mois entier'),
      it('fr.a2.metiers.066', 'la journée de travail'),
      it(E(1044), 'la matinée'),
    ], chk(
      "« Le magasin est ouvert toute l'année. » Ferme-t-il en hiver ?",
      ['Oui, en hiver.', "Non, à aucun moment de l'année."], 1,
      "toute l'année : l'année entière, sans exception. EN: the whole year.")),
    grp('Deux, ce ne sont pas les deux', [
      it(E(1037), 'un jour sur deux'),
      it(E(1049), 'un mois sur deux'),
      it(E(1038), 'six fois par jour'),
      it('fr.a2.symptomes.210', 'toutes les trois heures'),
    ], chk(
      '« tous les deux mois » : tu vois tes parents...',
      ['une fois tous les deux mois', 'deux mois de suite'], 0,
      "Un nombre après les : un rythme, pas une durée. EN: every two months."),
    ),
    ctl('Le sens', 'Ta voisine a fait du bruit une seule nuit, du soir au matin. Tu dis :',
      ['Elle a fait du bruit toute la nuit.', 'Elle a fait du bruit toutes les nuits.'], 0,
      "Une nuit entière : toute la nuit. EN: one whole night."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['frequence', 'duree'],
};

/** TRAP, stepped: all day said as every day, and the other slips. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Le jour et la journée',
  rule: {
    title: 'Pluriel pour compter, singulier pour mesurer',
    body: "Tous les jours, toutes les nuits : tu comptes des fois. Toute la journée, toute la nuit : tu mesures un seul moment, en entier. Un nombre après les donne un rythme : tous les deux jours. EN: plural counts, singular measures, a number gives a rhythm.",
  },
  cards: [
    { promptLabel: 'all day, mot à mot', promptSound: "J'ai travaillé tous les jours.", fr: fr(E(1035)), ipa: ipaOf(E(1035)), tip: "Une seule journée, en entier : toute la journée. EN: one whole day." },
    { promptLabel: 'une nuit comptée', promptSound: 'Il a neigé toutes les nuits.', fr: fr(E(1042)), ipa: ipaOf(E(1042)), tip: "Une nuit, du soir au matin : toute la nuit. EN: one night." },
    { promptLabel: 'tout devant un pluriel', promptSound: 'Je fais du vélo tout les matins.', fr: fr(E(1043)), ipa: ipaOf(E(1043)), tip: "les matins, masculin pluriel : tous. EN: tous before les." },
    { promptLabel: 'deux pris pour both', promptSound: 'On arrose les plantes les deux jours.', fr: fr(E(1037)), ipa: ipaOf(E(1037)), tip: "Un jour sur deux : tous les deux jours. EN: every other day." },
    { promptLabel: 'chaque avec un nombre', promptSound: 'Le bus passe chaque dix minutes.', fr: fr(E(1039)), ipa: ipaOf(E(1039)), tip: "Avec un nombre, dis toutes les dix minutes. EN: with a number, toutes les." },
    { promptLabel: 'tout devant la semaine', promptSound: 'Il pleut tout la semaine.', fr: fr(E(1036)), ipa: ipaOf(E(1036)), tip: "la semaine est féminin : toute. EN: feminine." },
  ],
  drill: [
    { promptSay: "J'ai attendu ... matinée.", opts: ['toutes les', 'toute la'], correct: 1 },
    { promptSay: 'Je vois mes parents ... deux mois.', opts: ['tous les', 'toute la'], correct: 0 },
    { promptSay: 'Le bus passe ... dix minutes.', opts: ['chaque', 'toute la', 'toutes les'], correct: 2 },
    { promptSay: 'Il a plu ... nuit.', opts: ['toute la', 'tous les'], correct: 0 },
    { promptSay: 'Elle appelle sa mère ... dimanches.', opts: ['toute la', 'tous les'], correct: 1 },
    { promptSay: "Nous sommes restés au chalet ... l'été.", opts: ['tous', 'tout', 'toutes'], correct: 1 },
    { promptSay: 'On change les draps ... semaines.', opts: ['toutes les', 'toute la'], correct: 0 },
    { promptSay: "Le magasin est ouvert ... l'année.", opts: ['tous', 'toutes', 'toute'], correct: 2 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Pluriel pour compter, singulier pour mesurer' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-23-piege-temps'),
  say: REFRAME,
  terms: ['frequence', 'duree'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le sens', '« tous les deux jours » veut dire...',
    ['un jour sur deux', 'les deux jours'], 0,
    "Un rythme : un jour oui, un jour non. EN: every other day."),
  ctl('La durée', "« I waited all morning » : j'ai attendu...",
    ['toute la matinée', 'tous les matins'], 0,
    "Un seul matin, en entier. EN: one whole morning."),
  ctl('Le nombre', 'Pour compter des fois, le nom est...',
    ['au singulier', 'au pluriel', 'sans article'], 1,
    "Au pluriel : tous les jours, toutes les semaines. EN: plural."),
], ['frequence', 'duree']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Tous les jours, toute la journée',
    opener: {
      line: "Tu arroses tes plantes un jour sur deux, et tu as attendu toute une matinée : ici tu apprends à compter et à mesurer le temps. EN: You water your plants every other day and waited a whole morning: here you learn to count time and to measure it.",
      imageRef: 'lessons/tout/act03.jpg',
    },
    sections: [],
    milestone: "Tu choisis tous les pour compter et toute la pour mesurer, et tous les deux jours ne te trompe plus. EN: You pick tous les to count and toute la to measure, and tous les deux jours no longer fools you.",
    estScreens: 40, restPoints: ['a3-tableau', 'a3-cartes'],
  },
  sections: [A3_ECOUTE, A3_REGLE, A3_TABLEAU, A3_CONSTRUIRE, A3_CARTES, A3_CHOISIR, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — TOUT UN, TOUT CE, TOUT MON, TOUT SANS ARTICLE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the removal company's small print, where tout is everywhere. */
const A4_CONDITIONS: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-conditions',
  layer: 'core',
  questionsInModal: true,
  title: 'Les conditions de location',
  frSub: 'Lis les petites lignes',
  text: CONDITIONS_TEXT,
  glossary: [
    { word: 'facturé', en: 'charged', note: 'Ajouté à la facture, donc à payer.' },
    { word: 'démontent', en: 'take apart', note: 'Ils séparent les morceaux d’un meuble.' },
    { word: 'sous sa responsabilité', en: 'at his own risk', note: "Si ça casse, c'est pour lui." },
    { word: 'Pour toute question', en: 'for any question', note: 'Pour n’importe quelle question.' },
  ],
  questions: [
    { q: 'Pour combien de temps le camion est-il loué ?', a: "« pour toute une journée » : une journée entière, de sept heures à dix-neuf heures." },
    { q: 'Combien coûte une heure de retard ?', a: "Vingt dollars : « tout retard sera facturé ». Chaque retard, quel qu'il soit." },
    { q: 'Que doit porter chaque boîte ?', a: "« Toute boîte doit porter un nom » : sans article, toute veut dire chaque." },
    { q: 'Quels objets faut-il emballer avant l’arrivée ?', a: "« Tous vos objets fragiles » : avec vos, tous s'accorde comme avec les." },
    { q: 'Quand répondent-ils au téléphone ?', a: "« tous les jours, sauf le dimanche » : la fréquence de l'acte 3." },
  ],
  audio: REC('rec-b1-23-conditions'),
  say: REFRAME,
  terms: ['accord'],
};

const A4_MOTS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-mots',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-formes',
  title: 'Tout devant un, ce, mon, ou rien',
  frSub: 'Tout garde sa place, en tête',
  hint: 'Quatre cartes. Tout passe toujours devant.',
  audio: REC('rec-b1-23-tout-un'),
  say: REFRAME,
  terms: ['accord', 'formes'],
  cards: [
    {
      head: 'Un seul, en entier', label: 'tout un, toute une',
      fr: fr(E(1054)), sub: rsOf(E(1054)),
      body: "Tout un camion : un camion entier, et c'est beaucoup. Tout passe devant un, comme devant le. EN: tout un, a whole one, often with surprise.",
    },
    {
      head: 'Avec ce, cette, ces', label: 'tout + ces',
      fr: fr(E(1057)), sub: rsOf(E(1057)),
      body: "Tous ces cartons : tu les montres, et tu les prends tous. Même accord qu'avec les. EN: tous ces, all these.",
    },
    {
      head: 'Avec mon, ma, mes', label: 'tout + mes',
      fr: fr(E(1059)), sub: rsOf(E(1059)),
      body: "Toutes mes lettres : lettres est féminin pluriel. Le possessif ne change rien à l'accord. EN: tout agrees through a possessive.",
    },
    {
      head: 'Sans article : chaque', label: 'tout + nom',
      fr: fr(E(1065)), sub: rsOf(E(1065)),
      body: "Sans article, tout veut dire chaque, n'importe lequel. Tu le lis dans les avis et les règlements. EN: with no article, tout means any, each.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Tout, toujours en tête',
  groups: [
    grp('Tout un, toute une', [
      it(E(1054), 'un camion : tout un'),
      it(E(1055), 'une journée : toute une'),
      it(E(1056), 'une histoire : toute une'),
      it(E(1067), 'une heure : toute une'),
    ], chk(
      '« toute une journée » : combien de journées ?',
      ['toutes les journées', 'une, en entier'], 1,
      "Une journée, entière, et souvent longue. EN: one whole day.")),
    grp('Avec un possessif ou ce', [
      it(E(1058), 'cette vaisselle : toute'),
      it(E(1060), 'ses livres : tous'),
      it(E(1061), 'sa vie : toute'),
      it(E(1062), 'mon après-midi : tout'),
    ], chk(
      '« Toute cette vaisselle » : pourquoi toute ?',
      ['parce que vaisselle est féminin singulier', 'parce que cette est devant'], 0,
      "Le nom décide, pas le petit mot du milieu. EN: the noun decides."),
    ),
    ctl('Sans article', '« Toute boîte doit porter un nom. » Ça veut dire...',
      ['une seule boîte', 'toutes les boîtes, ensemble', 'chaque boîte'], 2,
      "Sans article, toute veut dire chaque. EN: each box."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Tout, devant tous les petits mots',
  examples: [
    ex(E(1063), 'tout objet : chaque objet, n’importe lequel.'),
    ex(E(1064), 'toute boîte : la langue d’un règlement.'),
    ex(E(1068), 'tous nos voisins : nos, même accord qu’avec les.'),
    ex(E(1069), 'tous ces verres : ces, pareil.'),
    ex(E(1056), 'toute une histoire : une longue histoire, une aventure.'),
    ex('fr.a2.metiers.059', 'toute votre vie : avec votre, toute.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Un avis ou une conversation',
  groups: [
    grp('La langue des avis', [
      it(E(1063), 'objet oublié'),
      it(E(1064), 'boîte sans nom'),
      it(E(1065), 'retard'),
      it(E(1066), 'la règle'),
    ], chk(
      "« Tout objet oublié sera donné » : où lis-tu ça ?",
      ['dans un texto à un ami', 'dans un règlement'], 1,
      "Tout sans article, c'est la langue des avis. EN: the language of notices.")),
    grp('Toute la ou toute une', [
      it(E(1055), 'une journée, et elle a été longue'),
      it(E(1011), 'un camion entier pour si peu'),
      it(E(1003), 'la vaisselle, toute'),
      it(E(1014), 'la famille, toute'),
    ], chk(
      "Laquelle se plaint de la longueur ?",
      ["J'ai passé toute une journée à emballer.", "J'ai emballé toute la journée."], 0,
      "toute une journée : une journée entière, et c'était long. EN: a whole day, and it felt long.")),
    ctl('Le choix', "Tu écris le règlement de l'immeuble : chaque retard sera noté.",
      ['Tous retards seront notés.', 'Tout retard sera noté.'], 1,
      "Sans article et au singulier : tout retard. EN: tout retard, singular."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre ordres et accords',
  errors: [
    {
      wrong: "J'ai passé une toute journée à emballer.",
      right: fr(E(1055)),
      why: "En anglais, a whole day : l'article vient d'abord. En français, tout passe devant tout : toute une journée. EN: tout comes first.",
    },
    {
      wrong: "J'ai gardé tous mes lettres.",
      right: fr(E(1059)),
      why: "mes ne montre pas le genre, alors on pense au masculin. lettre est féminin : toutes. EN: lettre is feminine.",
    },
    {
      wrong: 'Tout le retard sera facturé.',
      right: fr(E(1065)),
      why: "Tout le retard existe, mais c'est un seul retard, en entier. Pour dire chaque retard, pas d'article. EN: no article means each one.",
    },
    {
      wrong: 'Il a donné tout ses livres.',
      right: fr(E(1060)),
      why: "Devant ses, tout et tous sonnent pareil, [too]. À l'écrit, ses livres : tous. EN: same sound, write tous.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl("L'ordre", '« a whole truck » : ...',
    ['tout un camion', 'un tout camion'], 0,
    "Tout d'abord, puis un. EN: tout un."),
  ctl('Sans article', '« Toute personne doit signer. » Qui signe ?',
    ['chaque personne', 'une seule personne'], 0,
    "Sans article : chaque. EN: each person."),
  ctl('Le possessif', '« ___ ses amies sont venues. »',
    ['Tous', 'Toute', 'Toutes'], 2,
    "amies, féminin pluriel : toutes. EN: feminine plural."),
], ['accord']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Tout un, tout ce, tout mon',
    opener: {
      line: "Tout un camion pour trois pièces : ici tu apprends tout devant un, ce, mon, et devant rien du tout. EN: A whole truck for three rooms: here you learn tout before un, ce, mon, and before nothing at all.",
      imageRef: 'lessons/tout/act04.jpg',
    },
    sections: [],
    milestone: "Tu dis tout un, tous ces, toutes mes, et tu lis tout retard comme chaque retard. EN: You say tout un, tous ces, toutes mes, and read tout retard as each delay.",
    estScreens: 30, restPoints: ['a4-construire'],
  },
  sections: [A4_CONDITIONS, A4_MOTS, A4_CONSTRUIRE, A4_EXEMPLES, A4_CHOISIR, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — TOUT, LE PRONOM
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Le point avant le départ',
  frSub: 'Fatou vérifie avec toi',
  setting: "Samedi, midi. Le camion est presque plein. Fatou, ta voisine d'origine dakaroise, passe voir si tu as besoin d'aide.",
  bubbles: [
    { from: 'narrator', fr: 'Fatou regarde le salon vide et les derniers cartons.', en: 'Fatou looks at the empty living room and the last boxes.' },
    { from: 'coach', fr: 'Alors, on fait le point avant ton départ.', en: 'So, let us take stock before you leave.' },
    { from: 'user', fr: fr(E(1071)), en: src(E(1071)).en, warn: 'tout : sujet, tout seul' },
    { from: 'coach', fr: 'Et la cuisine, avec les verres et les plats.', en: 'And the kitchen, with the glasses and the dishes.' },
    { from: 'user', fr: fr(E(1072)), en: src(E(1072)).en, warn: 'est : au singulier' },
    { from: 'coach', fr: 'Bon, je te laisse avec les déménageurs.', en: 'Right, I will leave you with the movers.' },
    { from: 'user', fr: fr(E(1077)), en: src(E(1077)).en, warn: 'tout : après pour' },
    { from: 'narrator', fr: 'Trois fois tout, jamais de nom après lui, et le verbe toujours au singulier.', en: 'Three times tout, never a noun after it, and the verb always singular.' },
  ],
  closing: { fr: 'Tout, seul, veut dire toutes les choses.', en: 'Tout on its own means all things.' },
  audio: REC('rec-b1-23-fatou'),
  say: REFRAME,
  terms: ['pronom'],
};

const A5_PRONOM: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-pronom',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-pronom',
  title: 'Tout, tout seul',
  frSub: 'everything',
  hint: 'Quatre cartes. Cherche le nom après tout : il n’y en a pas.',
  audio: REC('rec-b1-23-pronom'),
  say: REFRAME,
  terms: ['pronom'],
  cards: [
    {
      head: 'Tout, le sujet', label: 'tout + verbe',
      fr: fr(E(1072)), sub: rsOf(E(1072)),
      body: "Tout veut dire toutes les choses, vues comme un seul bloc. Le verbe reste au singulier. EN: everything, singular verb.",
    },
    {
      head: 'Tout, après le verbe', label: 'verbe + tout',
      fr: fr(E(1074)), sub: rsOf(E(1074)),
      body: "Au présent, tout suit le verbe, comme un nom. Il ne change jamais de forme. EN: after the verb, never changing.",
    },
    {
      head: 'Après à, pour, sur', label: 'préposition + tout',
      fr: fr(E(1079)), sub: rsOf(E(1079)),
      body: "Pense à tout, merci pour tout, il sait tout sur le quartier. Même forme partout. EN: same form after a preposition.",
    },
    {
      head: 'Ce que tu connais déjà', label: Cap(RESTAURANT_REF),
      fr: fr('fr.a2.au-restaurant.183'),
      sub: '[suh suh-ra TOO | poor MWA | mehr-SEE]',
      body: "Ce sera tout : tu l'as dit au restaurant. C'était déjà le pronom : toutes les choses que tu voulais. EN: you already used the pronoun.",
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Tout, sans nom',
  groups: [
    grp('Tout, sujet', [
      it(E(1072), 'tout est emballé'),
      it(E(1076), 'tout dépend'),
      it(E(1080), 'tout était lourd'),
      it('fr.sons.masterclass.037', 'tout est prêt'),
    ], chk(
      'Après tout sujet, le verbe est...',
      ['au singulier', 'au pluriel'], 0,
      "Au singulier : tout est un bloc. EN: singular.")),
    grp('Tout, complément', [
      it(E(1073), "j'ai tout"),
      it(E(1075), "c'est tout"),
      it(E(1083), 'il sait tout'),
      it('fr.a2.verbes.157', 'nous jetons tout'),
    ], chk(
      '« Nous jetons tout. » Tout remplace...',
      ['une seule chose', 'toutes les choses'], 1,
      "Toutes les choses, sans exception. EN: everything.")),
    ctl('Tout ou tous', 'Tu parles des choses, pas des gens : « ___ est prêt. »',
      ['Tout', 'Tous'], 0,
      "Pour des choses, tout, au singulier. EN: tout for things."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronom'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Tout, partout',
  examples: [
    ex(E(1078), 'tout coûte : sujet, verbe au singulier.'),
    ex(E(1082), 'tout s’est passé : même au passé composé, singulier.'),
    ex(E(1084), 'tout est possible : anything, ici.'),
    ex(E(1085), 'pas tout : il en manque.'),
    ex('fr.a1.marche.090', 'c’est tout : à la fin d’une commande, au marché.'),
    ex(E(1087), 'vérifie tout : après un impératif.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronom'],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Tout, ou le nom',
  groups: [
    grp('Toutes les choses', [
      it(E(1086), 'les magasins, les banques, tout'),
      it(E(1071), 'la situation entière'),
      it('fr.a2.au-restaurant.183', 'la commande entière'),
      it(E(1087), 'chaque chose, avant de partir'),
    ], chk(
      "« Tout est fermé le dimanche. » Qu'est-ce qui est fermé ?",
      ['tout ce qui peut fermer', 'un seul magasin'], 0,
      "Tout, sans nom : toutes les choses. EN: everything.")),
    grp('Tout, ou tout le', [
      it(E(1072), 'tout, sans nom'),
      it(E(1003), 'toute, devant la vaisselle'),
      it(E(1006), 'tout, sans nom'),
      it(E(1016), 'tout, devant le salon'),
    ], chk(
      '« Tout est emballé » ou « toute la vaisselle est emballée » : laquelle nomme la chose ?',
      ['la première', 'la deuxième'], 1,
      "Toute la vaisselle nomme la chose. Tout seul, c'est tout. EN: the second names it."),
    ),
    ctl('Le sens', "Tu n'as rien oublié, pas un objet. Tu dis :",
      ['Tout est dans le camion.', 'Tous sont dans le camion.'], 0,
      "Des objets : tout, au singulier. Tous parle des gens ou d'un groupe nommé avant. EN: things take tout."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronom'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Tout, un bloc au singulier',
  rule: {
    title: 'Un bloc, au singulier',
    body: "Tout, pronom, parle des choses en un seul bloc. Il ne change pas, le verbe reste au singulier, et au présent il suit le verbe. Tous, avec un s, parle des gens. EN: tout is one block, singular; tous is for people.",
  },
  cards: [
    { promptLabel: 'verbe au pluriel', promptSound: 'Tout sont emballés.', fr: fr(E(1072)), ipa: ipaOf(E(1072)), tip: "Tout est un bloc : est. EN: singular verb." },
    { promptLabel: 'tous pour des choses', promptSound: 'Tous est possible.', fr: fr(E(1084)), ipa: ipaOf(E(1084)), tip: "Des choses : tout. EN: tout for things." },
    { promptLabel: 'merci à tous, pour des choses', promptSound: 'Merci pour tous.', fr: fr(E(1077)), ipa: ipaOf(E(1077)), tip: "Pour tout ce qu'elle a fait : tout. Merci à tous parle des gens. EN: for everything." },
    { promptLabel: 'tout avant le verbe', promptSound: 'Je tout comprends.', fr: fr(E(1074)), ipa: ipaOf(E(1074)), tip: "Au présent, tout suit le verbe. EN: after the verb." },
    { promptLabel: 'adjectif au pluriel', promptSound: 'Tout était trop lourds.', fr: fr(E(1080)), ipa: ipaOf(E(1080)), tip: "Tout est singulier : lourd, sans s. EN: singular adjective." },
    { promptLabel: 'tous pour it all', promptSound: 'Tous dépend du prix.', fr: fr(E(1076)), ipa: ipaOf(E(1076)), tip: "It all depends : tout dépend. EN: tout." },
  ],
  drill: [
    { promptSay: '... est emballé.', opts: ['Tous', 'Tout'], correct: 1 },
    { promptSay: 'Tout ... prêt.', opts: ['est', 'sont'], correct: 0 },
    { promptSay: 'Je comprends ... .', opts: ['tous', 'toutes', 'tout'], correct: 2 },
    { promptSay: 'Merci pour ... .', opts: ['tout', 'tous'], correct: 0 },
    { promptSay: 'Tout ... bien passé.', opts: ['se sont', "s'est"], correct: 1 },
    { promptSay: 'Elle pense à ... .', opts: ['tout', 'tous', 'toute'], correct: 0 },
    { promptSay: 'Tout était trop ... .', opts: ['lourds', 'lourd'], correct: 1 },
    { promptSay: '... coûte plus cher à Montréal.', opts: ['Tous', 'Toutes', 'Tout'], correct: 2 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un bloc, au singulier' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-23-piege-pronom'),
  say: REFRAME,
  terms: ['pronom'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le verbe', '« Tout ___ fermé. »',
    ['sont', 'est'], 1,
    "Tout, pronom : singulier. EN: singular."),
  ctl('Le sens', '« Je comprends tout. » Tout veut dire...',
    ['everything', 'everybody'], 0,
    "Toutes les choses. EN: everything."),
  ctl('Choses ou gens', 'Pour les gens, sans nom après, tu dis plutôt...',
    ['tout', 'tous'], 1,
    "Tous, pour un groupe de gens : c'est l'acte 6. EN: tous, for people."),
], ['pronom']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Tout, le pronom',
    opener: {
      line: "Les cartons sont fermés et tout est prêt : ici tu apprends tout, tout seul, qui veut dire toutes les choses. EN: The boxes are sealed and everything is ready: here you learn tout on its own, meaning all things.",
      imageRef: 'lessons/tout/act05.jpg',
    },
    sections: [],
    milestone: "Tu dis tout pour toutes les choses, avec un verbe au singulier. EN: You say tout for everything, with a singular verb.",
    estScreens: 30, restPoints: ['a5-exemples'],
  },
  sections: [A5_HISTOIRE, A5_PRONOM, A5_CONSTRUIRE, A5_EXEMPLES, A5_CHOISIR, A5_PIEGE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — TOUS, AVEC SON S
 *
 *  The core listening act. sons.06 owns the SOUND (« tous », pronoun,
 *  /tus/); this act owns the GRAMMAR that decides when the s sounds.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear. `hideLines`: the whole act is what the ear catches. */
const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le s qui sonne, le s qui dort',
  frSub: 'Écoute la fin de tous',
  lines: [
    ln(E(1094)), ln(E(1095)), ln(E(1101)), ln(E(1102)),
    ln(E(1089)), ln(E(1090)), ln(E(1097)), ln('fr.sons.jours-et-mois.040'),
  ],
  questions: [
    { q: 'Première phrase : entends-tu le s de tous ?', opts: ['oui', 'non'], correct: 0, why: "« sont tous là » : tous est seul, [toos]. EN: pronoun, sounded s." },
    { q: 'Deuxième phrase : et maintenant ?', opts: ['oui', 'non'], correct: 1, why: "« tous les voisins » : devant un nom, [too]. EN: silent before a noun." },
    { q: 'Troisième et quatrième : laquelle fait sonner le s ?', opts: ['la quatrième', 'la troisième'], correct: 0, why: "« dorment tous » : tous finit la phrase, sans nom. EN: the fourth." },
    { q: '« Tous sont d’accord » : la phrase commence par...', opts: ['[toos]', '[too]'], correct: 0, why: "tous est le sujet, tout seul : [toos]. EN: pronoun subject." },
    { q: 'Dernière phrase : pourquoi le s est-il muet ?', opts: ['tous est à la fin', 'tous est devant un nom', 'tous est au féminin'], correct: 1, why: "« tous les jours » : devant un nom, le s dort. EN: before a noun." },
  ],
  audio: REC('rec-b1-23-tus-ecoute'),
  say: REFRAME,
  terms: ['tus'],
};

const A6_SON: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-son',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-pronom',
  title: 'Tous, [too] ou [toos]',
  frSub: 'Le s de tous',
  hint: 'Quatre cartes. Regarde ce qui suit tous.',
  audio: REC('rec-b1-23-tus'),
  say: REFRAME,
  terms: ['tus'],
  cards: [
    {
      head: 'Devant un nom : muet', label: 'tous les',
      fr: fr(E(1095)), sub: rsOf(E(1095)),
      body: "Tous devant les voisins : c'est un déterminant, et le s dort. [too lay]. EN: before a noun, the s is silent.",
    },
    {
      head: 'Tout seul : sonore', label: 'tous, pronom',
      fr: fr(E(1094)), sub: rsOf(E(1094)),
      body: "Tous après le verbe, sans nom : c'est un pronom, il veut dire tous les voisins. Le s sonne : [toos]. EN: alone, it is a pronoun and the s sounds.",
    },
    {
      head: 'La raison', label: Cap(MUETTES_REF),
      fr: fr('fr.sons.muettes.059'),
      sub: '[TOOS]',
      body: `« ${S06_REFRAME} » En français : « ${S06_REFRAME_FR} » Ici, la raison, c'est que tous est seul. EN: here, the reason is that tous stands alone.`,
    },
    {
      head: 'Toutes, sans surprise', label: 'toutes',
      fr: fr(E(1092)), sub: rsOf(E(1092)),
      body: "Au féminin, rien ne change : toutes sonne [toot], pronom ou pas. Seul le masculin tous a deux sons. EN: toutes always sounds [toot].",
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Tous, toutes, pronoms',
  groups: [
    grp('Tous, pronom : [toos]', [
      it(E(1088), 'mes amis, tous'),
      it(E(1089), 'je les connais, tous'),
      it(E(1091), 'nous, tous'),
      it(E(1099), 'tous, sujet'),
    ], chk(
      'Dans ces phrases, tous est suivi...',
      ["d'un nom", "d'un verbe, d'un adjectif, ou de rien"], 1,
      "Jamais d'un nom : c'est un pronom, et le s sonne. EN: never a noun, so it sounds.")),
    grp('Toutes, pronom : [toot]', [
      it(E(1092), 'mes sœurs, toutes'),
      it(E(1093), 'les chaises, toutes'),
      it(E(1103), 'ces photos, toutes'),
      it(E(1098), 'toutes et tous'),
    ], chk(
      'Toutes, pronom, se prononce...',
      ['[toot]', '[toots]'], 0,
      "[toot], comme devant un nom. EN: same as ever."),
    ),
    ctl('La place', '« Les voisins sont là. » Ajoute tous :',
      ['Les tous voisins sont là.', 'Les voisins sont tous là.'], 1,
      "Tous, pronom, se met après le verbe. EN: after the verb."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tus'],
};

/** NAME, as a lookup: where tous stands, and what you say. */
const A6_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-tableau',
  layer: 'core',
  sheetId: 'sheet-pronom',
  title: 'Tous : six phrases, deux sons',
  cols: ['Phrase', 'Tous est', 'Tu dis'],
  rows: [
    { cells: ['tous les voisins sont là', 'devant un nom', '[too]'], say: fr(E(1095)),
      detail: { title: 'Déterminant', body: "Un nom suit : le s est muet. EN: a noun follows, silent s.", say: fr(E(1101)) } },
    { cells: ['les voisins sont tous là', 'pronom', '[toos]'], say: fr(E(1094)),
      detail: { title: 'Après le verbe', body: "Tous reprend les voisins : pronom. EN: pronoun after the verb.", say: fr(E(1102)) } },
    { cells: ['je les connais tous', 'pronom, à la fin', '[toos]'], say: fr(E(1089)),
      detail: { title: 'En fin de phrase', body: "Rien ne suit : le s sonne. EN: nothing follows.", say: fr(E(1089)) } },
    { cells: ["tous sont d'accord", 'pronom sujet', '[toos]'], say: fr(E(1090)),
      detail: { title: 'Sujet', body: "Tous ouvre la phrase, sans nom : pronom. EN: pronoun subject.", say: fr(E(1099)) } },
    { cells: ['merci à tous', 'pronom', '[toos]'], say: fr(E(1097)),
      detail: { title: 'Après à', body: "À tous : à tout le monde. EN: to everyone.", say: fr(E(1098)) } },
    { cells: ['tous ces cartons', 'devant un nom', '[too]'], say: fr(E(1057)),
      detail: { title: 'Devant ces', body: "ces cartons suit : muet. EN: silent.", say: fr(E(1057)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tus'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Mêmes mots, autre son',
  groups: [
    grp('Deux places pour tous', [
      it(E(1095), 'devant le nom : [too]'),
      it(E(1094), 'après le verbe : [toos]'),
      it(E(1101), 'devant le nom : [too]'),
      it(E(1102), 'à la fin : [toos]'),
    ], chk(
      '« Tous les enfants dorment » et « Les enfants dorment tous » : qu’est-ce qui change le plus ?',
      ['le son de tous', 'le sens'], 0,
      "Le sens est presque le même. Le son change : [too], puis [toos]. EN: the sound changes."),
    ),
    grp('Des gens', [
      it(E(1090), 'tout le groupe'),
      it(E(1097), 'toutes les personnes présentes'),
      it(E(1096), 'vous, chacun'),
      it(E(1104), 'vous, tous'),
    ], chk(
      '« Merci à tous » : tous remplace...',
      ['des choses', 'des gens'], 1,
      "Tous, pronom, parle presque toujours de gens. Pour des choses : tout. EN: people."),
    ),
    ctl("À l'oreille", 'Tu entends [too] devant voisins. Tous est...',
      ['devant un nom', 'un pronom'], 0,
      "[too] : un nom suit. EN: a noun follows."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tus'],
};

/** TRAP, stepped. The audio step matters most here: the learner hears the
 *  six correct sentences with the pronoun s. */
const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Tous, toutes, sans faute',
  rule: {
    title: 'Seul, le s sonne',
    body: "Tous, pronom, se met après le verbe, parle des gens et fait sonner son s. Au féminin, toutes. Pour des choses sans nom, c'est tout. EN: pronoun tous follows the verb, means people, and sounds its s.",
  },
  cards: [
    { promptLabel: 'tout pour des gens', promptSound: 'Mes amis sont tout venus.', fr: fr(E(1088)), ipa: ipaOf(E(1088)), tip: "Des gens, au pluriel : tous, [toos]. EN: tous for people." },
    { promptLabel: 'tous avant le verbe', promptSound: 'Les voisins tous sont là.', fr: fr(E(1094)), ipa: ipaOf(E(1094)), tip: "Le pronom tous suit le verbe. EN: after the verb." },
    { promptLabel: 'tous au féminin', promptSound: 'Mes sœurs sont tous là.', fr: fr(E(1092)), ipa: ipaOf(E(1092)), tip: "Des sœurs : toutes. EN: feminine." },
    { promptLabel: 'à tout, pour des gens', promptSound: 'Merci à tout.', fr: fr(E(1097)), ipa: ipaOf(E(1097)), tip: "Pour les gens : à tous, [toos]. EN: people take tous." },
    { promptLabel: 'tous pour des chaises', promptSound: 'Les chaises, je les prends tous.', fr: fr(E(1093)), ipa: ipaOf(E(1093)), tip: "chaises est féminin : toutes. EN: feminine." },
    { promptLabel: 'verbe au singulier', promptSound: "Tous est d'accord.", fr: fr(E(1090)), ipa: ipaOf(E(1090)), tip: "Tous est pluriel : sont. EN: plural verb." },
  ],
  drill: [
    { promptSay: 'Mes sœurs sont ... là.', opts: ['toutes', 'tous'], correct: 0 },
    { promptSay: 'Je les connais ... .', opts: ['tout', 'tous'], correct: 1 },
    { promptSay: 'Merci à ... .', opts: ['tous', 'tout', 'toute'], correct: 0 },
    { promptSay: '... sont d’accord.', opts: ['Tout', 'Toute', 'Tous'], correct: 2 },
    { promptSay: 'Les chaises, je les prends ... .', opts: ['tous', 'toutes'], correct: 1 },
    { promptSay: '« Ils sont tous là » : tous se dit...', opts: ['[toos]', '[too]'], correct: 0 },
    { promptSay: '« Tous les jours » : tous se dit...', opts: ['[toos]', '[too]'], correct: 1 },
    { promptSay: 'Les enfants dorment ... .', opts: ['tout', 'toutes', 'tous'], correct: 2 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Seul, le s sonne' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-23-piege-tus'),
  say: REFRAME,
  terms: ['tus'],
};

const A6_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a6-dictee',
  layer: 'core',
  title: 'Écris tous, toutes',
  frSub: 'Le s qui sonne s’écrit aussi',
  itemIds: dicteeFor(6),
  audio: AUDIO,
  say: REFRAME,
  terms: ['tus'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le son', '« Je les connais tous. » Tous se dit...',
    ['[too]', '[toos]'], 1,
    "À la fin, sans nom : [toos]. EN: sounded."),
  ctl('La forme', '« Mes sœurs sont ___ venues. »',
    ['toutes', 'tous', 'tout'], 0,
    "Des sœurs : toutes. EN: feminine plural."),
  ctl('Le sens', 'Tous, pronom, parle surtout...',
    ['des choses', 'des gens'], 1,
    "Des gens. Pour des choses, tout. EN: people."),
], ['tus']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Tous, avec son s',
    opener: {
      line: "Ils sont tous là, et le s de tous s'entend enfin : ici tu apprends quand il dort et quand il sonne. EN: They are all here, and the s of tous is heard at last: here you learn when it sleeps and when it sounds.",
      imageRef: 'lessons/tout/act06.jpg',
    },
    sections: [],
    milestone: "Tu dis [toos] pour le pronom et [too] devant un nom, et tu écris toutes pour des femmes. EN: You say [toos] for the pronoun and [too] before a noun, and write toutes for women.",
    estScreens: 38, restPoints: ['a6-tableau', 'a6-piege'],
  },
  sections: [A6_ECOUTE, A6_SON, A6_CONSTRUIRE, A6_TABLEAU, A6_CHOISIR, A6_PIEGE, A6_DICTEE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LA PLACE
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Hugo arrive trop tard',
  frSub: 'Le soir, dans le nouvel appartement',
  setting: "Samedi soir, dans le nouvel appartement, à Rosemont. Ton frère Hugo arrive à neuf heures, trop tard pour aider.",
  bubbles: [
    { from: 'narrator', fr: 'Hugo entre, voit les cartons et comprend qu’il a tout raté.', en: 'Hugo comes in, sees the boxes and realises he missed it all.' },
    { from: 'coach', fr: 'Désolé. Les déménageurs sont encore là, je suppose.', en: 'Sorry. The movers are still here, I suppose.' },
    { from: 'user', fr: fr(E(1107)), en: src(E(1107)).en, warn: 'tous : entre sont et partis' },
    { from: 'coach', fr: 'Et les cartons, tu les as bien fermés ce matin.', en: 'And the boxes, you did seal them this morning.' },
    { from: 'user', fr: fr(E(1114)), en: src(E(1114)).en, warn: 'tous : après les ai, avant fermés' },
    { from: 'coach', fr: 'Le nouveau code de la porte est compliqué.', en: 'The new door code is complicated.' },
    { from: 'user', fr: fr(E(1106)), en: src(E(1106)).en, warn: 'tout : entre ai et compris' },
    { from: 'narrator', fr: 'Trois phrases au passé composé, et chaque fois, tout ou tous est au milieu.', en: 'Three sentences in the passé composé, and each time tout or tous sits in the middle.' },
  ],
  closing: { fr: 'Au passé composé, tout et tous se glissent au milieu.', en: 'In the passé composé, tout and tous slip into the middle.' },
  audio: REC('rec-b1-23-hugo'),
  say: REFRAME,
  terms: ['place'],
};

const A7_PLACE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-place',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-pronom',
  title: 'Au milieu, ou devant',
  frSub: 'La place de tout et de tous',
  hint: 'Quatre cartes. Cherche l’auxiliaire.',
  audio: REC('rec-b1-23-place'),
  say: REFRAME,
  terms: ['place'],
  cards: [
    {
      head: 'Tout, au milieu', label: Cap(PC_AVOIR_REF),
      fr: fr(E(1106)), sub: rsOf(E(1106)),
      body: "Comme bien ou déjà, tout se glisse entre avoir et le participe. EN: like bien or déjà, between avoir and the participle.",
    },
    {
      head: 'Tous, au milieu aussi', label: 'être + tous + participe',
      fr: fr(E(1107)), sub: rsOf(E(1107)),
      body: "Avec être, pareil : sont tous partis. Le s de tous sonne : [toos]. EN: same with être, and the s sounds.",
    },
    {
      head: 'Avec un pronom', label: 'les ai tous',
      fr: fr(E(1108)), sub: rsOf(E(1108)),
      body: "Les avant l'auxiliaire, tous après lui. Le participe s'accorde avec les : vus. EN: les before, tous after the auxiliary.",
    },
    {
      head: 'Devant un infinitif', label: 'tout + infinitif',
      fr: fr(E(1111)), sub: rsOf(E(1111)),
      body: "Avec aller, vouloir ou il faut, tout passe devant l'infinitif : je vais tout ranger. EN: before the infinitive.",
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Glisse tout au milieu',
  groups: [
    grp('Tout, avant le participe', [
      it(E(1110), 'a tout vendu'),
      it(E(1115), 'a tout donné'),
      it(E(1116), 'as tout oublié'),
      it(E(1119), 'ont tout mangé'),
    ], chk(
      'Où est tout, dans ces quatre phrases ?',
      ['après le participe', "entre l'auxiliaire et le participe"], 1,
      "Au milieu, comme bien. EN: in the middle."),
    ),
    grp('Tous, avant le participe', [
      it(E(1108), 'les ai tous vus'),
      it(E(1109), 'sont toutes arrivées'),
      it(E(1113), 'avons tous signé'),
      it(E(1120), 'sont tous venus'),
    ], chk(
      '« Nous avons tous signé » : tous parle de...',
      ['nous, les gens', 'toutes les choses'], 0,
      "Tous reprend nous : toutes les personnes. EN: all of us."),
    ),
    ctl("L'infinitif", 'Laquelle est juste ?',
      ['Je tout vais ranger.', 'Je vais tout ranger.'], 1,
      "Tout se met devant l'infinitif, après aller. EN: before the infinitive."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['place'],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  title: 'Tout, tous, à leur place',
  examples: [
    ex(E(1112), 'il faut tout vérifier : devant l’infinitif.'),
    ex(E(1117), 'allons tous déménager : tous après le verbe conjugué.'),
    ex(E(1121), 'tout lu : au milieu, et jamais « lu tout ».'),
    ex(E(1122), 'veux tout voir : devant l’infinitif.'),
    ex('fr.sons.voyelles.364', 'tu as tout vu : une phrase des sons, déjà à la bonne place.'),
    ex(E(1114), 'les ai tous fermés : les avant, tous après.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['place'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Tout ou tous, et le sens change',
  groups: [
    grp('Au présent, au passé', [
      it(E(1074), 'présent : après le verbe'),
      it(E(1106), 'passé : au milieu'),
      it(E(1073), 'présent : après le verbe'),
      it(E(1110), 'passé : au milieu'),
    ], chk(
      'Au présent, tout suit le verbe. Au passé composé, il suit...',
      ['le participe', "l'auxiliaire"], 1,
      "L'auxiliaire : j'ai tout compris. EN: the auxiliary."),
    ),
    grp('Les gens ou les choses', [
      it(E(1119), 'les choses : tout'),
      it(E(1113), 'les gens : tous'),
      it(E(1115), 'les choses : tout'),
      it(E(1107), 'les gens : tous'),
    ], chk(
      "Laquelle dit qu'il ne reste rien à manger ?",
      ['Ils ont tout mangé.', 'Ils ont tous mangé.'], 0,
      "Tout : toute la nourriture. Tous : chaque personne a mangé. EN: tout is the food, tous the people."),
    ),
    ctl('Le son', '« Ils ont tous mangé » : tu entends...',
      ['[too]', '[toos]'], 1,
      "Pronom : le s sonne. EN: sounded s."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['place', 'tus'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre tout au mauvais endroit',
  errors: [
    {
      wrong: "J'ai compris tout.",
      right: fr(E(1106)),
      why: "En anglais, everything vient à la fin. En français, tout est un mot court : il se glisse au milieu, comme bien. EN: tout goes before the participle.",
    },
    {
      wrong: 'Ils sont partis tous.',
      right: fr(E(1107)),
      why: "They have all left : all est au milieu en anglais aussi. Garde cette place : sont tous partis. EN: same slot as English all.",
    },
    {
      wrong: 'Je les ai vus tous.',
      right: fr(E(1108)),
      why: "On le lit parfois dans un livre, mais la place normale est avant le participe : je les ai tous vus. EN: the usual place is before the participle.",
    },
    {
      wrong: 'Je vais ranger tout ce soir.',
      right: fr(E(1111)),
      why: "Tu l'entendras à l'oral, parce que tidy everything finit par everything. À l'écrit, tout passe devant l'infinitif. EN: before the infinitive.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['place'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La place', "« J'ai ___ ___. » (compris, tout)",
    ['tout compris', 'compris tout'], 0,
    "Au milieu : j'ai tout compris. EN: in the middle."),
  ctl("L'infinitif", '« Il faut ___ vérifier. »',
    ['tous', 'tout', 'toute'], 1,
    "Toutes les choses, devant l'infinitif : tout. EN: tout before the infinitive."),
  ctl('Le sens', '« Elles sont toutes arrivées. » Combien sont arrivées ?',
    ['toutes', 'une partie'], 0,
    "Sans exception. EN: all of them."),
], ['place']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'La place',
    opener: {
      line: "Ils sont tous partis et tu as tout rangé : ici tu apprends où glisser tout et tous au passé. EN: They have all gone and you have tidied everything: here you learn where to slip tout and tous in the past.",
      imageRef: 'lessons/tout/act07.jpg',
    },
    sections: [],
    milestone: "Tu mets tout et tous entre l'auxiliaire et le participe, et tout devant un infinitif. EN: You put tout and tous between the auxiliary and the participle, and tout before an infinitive.",
    estScreens: 30, restPoints: ['a7-exemples'],
  },
  sections: [A7_HISTOIRE, A7_PLACE, A7_CONSTRUIRE, A7_EXEMPLES, A7_CHOISIR, A7_ERREURS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — TOUT, L'ADVERBE
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Très, ou chacun',
  frSub: 'Écoute avant l’adjectif',
  lines: [
    ln(E(1132)), ln(E(1133)), ln(E(1123)), ln(E(1124)),
    ln(E(1126)), ln(E(1129)), ln(E(1130)), ln(E(1138)),
  ],
  questions: [
    { q: 'Phrases une et deux : laquelle veut dire very happy ?', opts: ['la première', 'la deuxième'], correct: 0, why: "« tout contents » : [too], complètement contents. EN: the first." },
    { q: 'Et laquelle dit que chacun est content ?', opts: ['la première', 'la deuxième'], correct: 1, why: "« tous contents » : [toos], le pronom. EN: the second." },
    { q: 'Elle est partie comment ?', opts: ['avec des amis', 'seule'], correct: 1, why: "« toute seule » : complètement seule. EN: all alone." },
    { q: 'La cuisinière est...', opts: ['un peu vieille', 'neuve, complètement', 'vendue'], correct: 1, why: "« toute neuve » : brand new. EN: brand new." },
    { q: '« tout heureuse » : tout change-t-il ?', opts: ['non, il fait la liaison', 'oui, il devient toute'], correct: 0, why: "Devant une voyelle, tout reste tout : [too-teu-REUZ]. EN: unchanged before a vowel." },
  ],
  audio: REC('rec-b1-23-adverbe-ecoute'),
  say: REFRAME,
  terms: ['adverbe', 'exception'],
};

const A8_ADVERBE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-adverbe',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-adverbe',
  title: 'Tout veut dire complètement',
  frSub: "Tout, l'adverbe",
  hint: 'Quatre cartes. Regarde la première lettre de l’adjectif.',
  audio: REC('rec-b1-23-adverbe'),
  say: REFRAME,
  terms: ['adverbe', 'exception'],
  cards: [
    {
      head: 'Complètement', label: 'tout + adjectif',
      fr: fr(E(1125)), sub: rsOf(E(1125)),
      body: "Tout neuf : neuf à cent pour cent. Devant un masculin, tout ne change jamais. EN: completely, unchanged before a masculine.",
    },
    {
      head: 'Devant une voyelle', label: 'tout heureuse',
      fr: fr(E(1129)), sub: rsOf(E(1129)),
      body: "Même au féminin, tout reste tout devant une voyelle ou un h muet. La liaison fait le lien : [too-teu-REUZ]. EN: unchanged before a vowel.",
    },
    {
      head: "L'exception", label: 'toute + consonne',
      fr: fr(E(1123)), sub: rsOf(E(1123)),
      body: "Devant un féminin qui commence par une consonne ou un h aspiré, tout s'accorde : toute seule, toutes contentes. EN: agrees before a feminine starting with a consonant.",
    },
    {
      head: 'Devant un adverbe', label: 'tout près',
      fr: fr(E(1124)), sub: rsOf(E(1124)),
      body: "Tout près, tout doucement, tout droit : très près, très doucement. Il ne change jamais. EN: before an adverb, never changes.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Tout ou toute, devant un adjectif',
  groups: [
    grp('Tout ne change pas', [
      it(E(1125), 'neuf, masculin'),
      it(E(1127), 'blancs, masculin pluriel'),
      it(E(1129), 'heureuse, voyelle'),
      it(E(1136), 'émues, voyelle'),
    ], chk(
      'Pourquoi tout ne change pas devant émues ?',
      ['émues est masculin', 'émues commence par une voyelle'], 1,
      "Devant une voyelle, tout reste tout. EN: vowel, no change."),
    ),
    grp('Toute, toutes', [
      it(E(1123), 'seule'),
      it(E(1126), 'neuve'),
      it(E(1128), 'contentes'),
      it(E(1130), 'honteuse, h aspiré'),
    ], chk(
      'Qu’ont en commun seule, neuve, contentes et honteuse ?',
      ['féminin, et un son de consonne au début', 'masculin'], 0,
      "Féminin plus consonne : tout s'accorde. EN: feminine plus consonant."),
    ),
    ctl('Le choix', '« La porte est ___ ouverte. »',
      ['tout', 'toute'], 0,
      "ouverte commence par une voyelle : tout ouverte. EN: vowel, tout."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adverbe', 'exception'],
};

const A8_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a8-focus',
  layer: 'core',
  sheetId: 'sheet-adverbe',
  title: 'Tout, adverbe, en quatre points',
  points: [
    "Devant un adjectif ou un adverbe, tout veut dire complètement. EN: tout means completely.",
    "Devant un masculin, singulier ou pluriel : tout, toujours. EN: masculine, always tout.",
    "Devant un féminin qui commence par une voyelle : tout aussi. EN: feminine with a vowel, still tout.",
    "Devant un féminin qui commence par une consonne : toute, toutes. EN: feminine with a consonant, toute or toutes.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adverbe', 'exception'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Complètement, ou chacun',
  groups: [
    grp('Un seul son pour deux sens', [
      it(E(1128), 'toutes : chacune, ou très'),
      it(E(1133), 'tous [toos] : chacun'),
      it(E(1132), 'tout [too] : très'),
      it('fr.a1.objets.128', 'toutes : complètement neuves'),
    ], chk(
      '« Les petites sont toutes contentes » peut vouloir dire...',
      ['chacune est contente, ou elles sont très contentes', 'seulement chacune'], 0,
      "Au féminin, les deux sens ont la même forme. Le contexte décide. EN: both readings share one form."),
    ),
    grp('Masculin pluriel', [
      it(E(1127), 'complètement blancs'),
      it('fr.a1.objets.135', 'complètement blancs'),
      it(E(1132), 'très contents'),
      it(E(1137), 'complètement seul'),
    ], chk(
      '« Les murs sont tout blancs » : pourquoi pas tous ?',
      ['murs est féminin', 'tout veut dire complètement ici'], 1,
      "Adverbe devant un masculin : tout, sans s. EN: adverb, no s."),
    ),
    ctl('Le sens', 'Tu veux dire que les enfants sont très contents. Tu dis...',
      ['Ils sont tout contents.', 'Ils sont tous contents.'], 0,
      "Très : tout, [too]. Chacun : tous, [toos]. EN: very is tout."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adverbe', 'tus'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Le féminin et la consonne',
  rule: {
    title: 'Une seule exception',
    body: "Tout, adverbe, ne change pas, sauf devant un adjectif féminin qui commence par une consonne ou un h aspiré : toute seule, toute honteuse. EN: it changes only before a feminine adjective starting with a consonant sound.",
  },
  cards: [
    { promptLabel: 'tout devant seule', promptSound: 'Elle est partie tout seule.', fr: fr(E(1123)), ipa: ipaOf(E(1123)), tip: "seule : féminin, consonne. Toute. EN: toute." },
    { promptLabel: 'tout devant neuve', promptSound: 'La cuisinière est tout neuve.', fr: fr(E(1126)), ipa: ipaOf(E(1126)), tip: "neuve : féminin, consonne. EN: toute." },
    { promptLabel: 'toute devant un masculin', promptSound: 'Le frigo est toute neuf.', fr: fr(E(1125)), ipa: ipaOf(E(1125)), tip: "neuf est masculin : tout. EN: tout." },
    { promptLabel: 'tout devant petite', promptSound: 'La table est tout petite.', fr: fr(E(1139)), ipa: ipaOf(E(1139)), tip: "petite : féminin, p. EN: toute." },
    { promptLabel: 'h aspiré oublié', promptSound: 'Elle est tout honteuse.', fr: fr(E(1130)), ipa: ipaOf(E(1130)), tip: "honteuse a un h aspiré : pas de liaison, donc toute. EN: aspirated h, toute." },
    { promptLabel: 'toute devant un adverbe', promptSound: 'Il habite toute près.', fr: fr(E(1124)), ipa: ipaOf(E(1124)), tip: "près est un adverbe : tout, toujours. EN: tout." },
  ],
  drill: [
    { promptSay: 'Elle est partie ... seule.', opts: ['tout', 'toute'], correct: 1 },
    { promptSay: 'Le frigo est ... neuf.', opts: ['tout', 'toute'], correct: 0 },
    { promptSay: 'Elle est ... heureuse.', opts: ['toute', 'toutes', 'tout'], correct: 2 },
    { promptSay: 'Les murs sont ... blancs.', opts: ['tous', 'tout'], correct: 1 },
    { promptSay: 'La table est ... petite.', opts: ['toute', 'tout'], correct: 0 },
    { promptSay: 'Parle ... doucement.', opts: ['toute', 'tout', 'tous'], correct: 1 },
    { promptSay: 'Les petites sont ... contentes.', opts: ['tout', 'toutes'], correct: 1 },
    { promptSay: 'Elle est ... honteuse.', opts: ['toute', 'tout'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Une seule exception' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-23-piege-adverbe'),
  say: REFRAME,
  terms: ['exception'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La forme', '« Elle est ___ seule. »',
    ['tout', 'toute'], 1,
    "Féminin, consonne : toute. EN: toute."),
  ctl('La voyelle', '« Elle est ___ heureuse. »',
    ['tout', 'toute', 'tous'], 0,
    "Voyelle : tout. EN: tout."),
  ctl('Le sens', '« Ils sont tout contents » veut dire...',
    ['chacun est content', 'ils sont très contents'], 1,
    "Tout, adverbe : très. EN: very."),
], ['adverbe', 'exception']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: "Tout, l'adverbe",
    opener: {
      line: "Le frigo est tout neuf et la cuisinière toute neuve : ici tu apprends le seul tout qui veut dire complètement. EN: The fridge is brand new and so is the stove: here you learn the tout that means completely.",
      imageRef: 'lessons/tout/act08.jpg',
    },
    sections: [],
    milestone: "Tu dis tout neuf, tout heureuse et toute seule, et tu entends la différence entre tout contents et tous contents. EN: You say tout neuf, tout heureuse and toute seule, and hear tout contents from tous contents.",
    estScreens: 34, restPoints: ['a8-focus'],
  },
  sections: [A8_ECOUTE, A8_ADVERBE, A8_CONSTRUIRE, A8_FOCUS, A8_CHOISIR, A8_PIEGE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LES EXPRESSIONS
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LETTRE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lettre',
  layer: 'core',
  questionsInModal: true,
  title: 'La lettre de Josée',
  frSub: 'Lis, et cherche les blocs',
  text: LETTRE_TEXT,
  glossary: [
    { word: 'de la folie', en: 'madness', note: "Une idée qui n'est pas raisonnable." },
    { word: 'tombé en panne', en: 'broke down', note: 'Le camion ne marche plus.' },
    { word: 'aboyé', en: 'barked', note: 'Ce que fait un chien.' },
    { word: 'de bonne humeur', en: 'in a good mood', note: 'Content, souriant.' },
  ],
  questions: [
    { q: "Élodie avait-elle raison ?", a: "Oui : « tu avais tout à fait raison ». tout à fait : absolument." },
    { q: 'Quand le camion est-il tombé en panne ?', a: "« Tout à coup, à huit heures » : d'un coup, sans prévenir." },
    { q: "Le chien a aboyé combien de temps ?", a: "« tout le temps » : sans arrêt." },
    { q: "« tout à l'heure » : deux fois. Passé ou futur ?", a: "Les deux : « est passé tout à l'heure » (il y a un moment), « je t'appelle tout à l'heure » (dans un moment)." },
    { q: 'Josée est-elle contente, au fond ?', a: "Oui : « En tout cas, on est enfin chez nous. Après tout, ce n'est qu'un appartement. »" },
  ],
  audio: REC('rec-b1-23-lettre'),
  say: REFRAME,
  terms: ['expressions'],
};

const A9_EXPR: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-expr',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-expressions',
  title: 'Des blocs qui ne bougent pas',
  frSub: 'Les expressions avec tout',
  hint: 'Quatre cartes. Apprends chaque bloc en entier.',
  audio: REC('rec-b1-23-expressions'),
  say: REFRAME,
  terms: ['expressions'],
  cards: [
    {
      head: 'Absolument', label: 'tout à fait',
      fr: fr(E(1141)), sub: rsOf(E(1141)),
      body: "Tout à fait : complètement, exactement. Seul, il veut dire oui, absolument. EN: absolutely.",
    },
    {
      head: 'Avant ou après', label: "tout à l'heure",
      fr: fr(E(1142)), sub: rsOf(E(1142)),
      body: "Avec un passé : il y a un moment. Avec un futur ou un présent : dans un moment. Le verbe te le dit. EN: a moment ago, or in a moment.",
    },
    {
      head: 'Quoi qu’il arrive', label: 'malgré tout, en tout cas',
      fr: fr(E(1145)), sub: rsOf(E(1145)),
      body: "Malgré tout : même avec la pluie. En tout cas : de toute façon, pour finir. EN: all the same; in any case.",
    },
    {
      head: 'Ce que tu entends déjà', label: Cap(LIAISON_REF),
      fr: fr('fr.sons.liaisons.029'),
      sub: '[too-ta-feh da-KOR]',
      body: "Le t de tout se lie à la voyelle : [too-ta-FEH]. Tu as appris le son ; ici tu apprends le sens. EN: you learned the sound; now the meaning.",
    },
  ],
};

const A9_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-tableau',
  layer: 'core',
  sheetId: 'sheet-expressions',
  title: 'Six blocs à connaître',
  cols: ['Expression', 'En anglais', 'Quand'],
  rows: [
    { cells: ['tout à fait', 'absolutely', "pour être d'accord"], say: fr(E(1141)),
      detail: { title: 'Tout à fait', body: "Un oui fort. EN: a strong yes.", say: fr('fr.sons.liaisons.029') } },
    { cells: ["tout à l'heure", 'a moment ago, in a moment', 'passé ou futur'], say: fr(E(1143)),
      detail: { title: "Tout à l'heure", body: "Le verbe dit si c'est avant ou après. EN: the verb tells you.", say: fr(E(1142)) } },
    { cells: ['tout de suite', 'right away', 'maintenant'], say: fr(E(1151)),
      detail: { title: 'Tout de suite', body: "Sans attendre. EN: at once.", say: fr(E(1010)) } },
    { cells: ['en tout cas', 'in any case', 'pour conclure'], say: fr(E(1144)),
      detail: { title: 'En tout cas', body: "On passe à l'essentiel. EN: moving on.", say: fr(E(1144)) } },
    { cells: ['malgré tout', 'all the same', 'malgré un problème'], say: fr(E(1145)),
      detail: { title: 'Malgré tout', body: "Même avec le problème. EN: despite it all.", say: fr(E(1145)) } },
    { cells: ['tout le temps', 'all the time', 'sans arrêt'], say: fr(E(1146)),
      detail: { title: 'Tout le temps', body: "Au singulier, jamais tous les temps. EN: singular.", say: fr(E(1146)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expressions'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Les blocs, par sens',
  groups: [
    grp('Le moment', [
      it(E(1142), 'il y a un moment'),
      it(E(1143), 'dans un moment'),
      it(E(1151), 'tout de suite'),
      it(E(1150), 'd’un coup'),
    ], chk(
      "« tout à l'heure » : passé ou futur ?",
      ['les deux, selon le verbe', 'seulement le passé'], 0,
      "L'ai vue : passé. Rappelle : futur proche. EN: the verb decides."),
    ),
    grp('Pour conclure', [
      it(E(1144), 'en tout cas'),
      it(E(1145), 'malgré tout'),
      it(E(1147), 'de toute façon'),
      it(E(1148), 'après tout'),
    ], chk(
      'Ces quatre expressions servent à...',
      ['compter des jours', 'relativiser ou conclure'], 1,
      "Elles ferment une idée. EN: they wrap an idea up."),
    ),
    ctl('Le bloc', "Une femme écrit : « J'arrive ___ de suite. »",
      ['tout', 'toute'], 0,
      "Un bloc ne s'accorde jamais : tout de suite. EN: fixed."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expressions'],
};

const A9_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a9-cartes',
  layer: 'core',
  title: 'Huit blocs',
  cards: [
    { front: 'absolutely', back: 'tout à fait', say: fr(E(1141)) },
    { front: 'a little while ago', back: "tout à l'heure", say: fr(E(1142)) },
    { front: 'right away', back: 'tout de suite', say: fr(E(1151)) },
    { front: 'in any case', back: 'en tout cas', say: fr(E(1144)) },
    { front: 'all the same', back: 'malgré tout', say: fr(E(1145)) },
    { front: 'all the time', back: 'tout le temps', say: fr(E(1146)) },
    { front: 'anyway', back: 'de toute façon', say: fr(E(1147)) },
    { front: 'after all', back: 'après tout', say: fr(E(1148)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expressions'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quel bloc, ici',
  groups: [
    grp('Un événement', [
      it(E(1150), 'le frigo'),
      it('fr.sons.liaisons.048', 'la lumière'),
      it(E(1149), 'le prix'),
      it(E(1158), 'au Québec'),
    ], chk(
      '« Tout à coup » veut dire...',
      ['all the time', 'suddenly'], 1,
      "D'un coup, sans prévenir. EN: suddenly."),
    ),
    grp('Tout le temps, tout de suite', [
      it(E(1146), 'sans arrêt'),
      it(E(1151), 'maintenant'),
      it('fr.sons.liaisons.035', 'à plus tard'),
      it('fr.a2.nombres.039', 'le total'),
    ], chk(
      '« Le chien aboie tout le temps. » Quand ?',
      ['sans arrêt', 'maintenant, une fois', 'jamais'], 0,
      "Tout le temps : toujours, sans pause. EN: all the time."),
    ),
    ctl('Le sens', 'Il a plu, mais vous avez déménagé quand même. Tu dis...',
      ['On a déménagé tout de suite.', 'On a déménagé malgré tout.'], 1,
      "Malgré la pluie : malgré tout. EN: all the same."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expressions'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre blocs cassés',
  errors: [
    {
      wrong: "Je te rappelle toute à l'heure.",
      right: fr(E(1143)),
      why: "l'heure est féminin, alors toute paraît logique. Mais tout à l'heure est un bloc : il ne change jamais. EN: a fixed block never agrees.",
    },
    {
      wrong: 'Tu as tous à fait raison.',
      right: fr(E(1141)),
      why: "À l'oral, [too-ta] peut faire penser à tous avec une liaison. C'est tout, sans s : tout à fait. EN: no s.",
    },
    {
      wrong: 'Le chien aboie tout les temps.',
      right: fr(E(1146)),
      why: "all the time est au singulier en anglais aussi. Garde le singulier : tout le temps. EN: singular.",
    },
    {
      wrong: "Après tous, ce n'est qu'un appartement.",
      right: fr(E(1148)),
      why: "after all ressemble à tous, all au pluriel. Mais le bloc est au singulier : après tout. EN: après tout, singular.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expressions'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl("L'accord", 'Une expression figée comme tout à fait...',
    ["s'accorde avec le sujet", 'ne change jamais'], 1,
    "C'est un bloc. EN: fixed."),
  ctl('Le sens', "« Je l'ai vue tout à l'heure. » C'était...",
    ['il y a un moment', 'dans un moment'], 0,
    "L'ai vue : passé. EN: a moment ago."),
  ctl('Le bloc', '« de toute façon » veut dire...',
    ['all the time', 'suddenly', 'anyway'], 2,
    "De toute façon : anyway. EN: anyway."),
], ['expressions']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Les expressions',
    opener: {
      line: "Le camion tombe en panne, et malgré tout, tout finit bien : ici tu apprends les blocs qui ne bougent jamais. EN: The truck breaks down, and all the same it ends well: here you learn the blocks that never move.",
      imageRef: 'lessons/tout/act09.jpg',
    },
    sections: [],
    milestone: "Tu comprends et tu dis tout à fait, tout à l'heure, en tout cas et malgré tout, sans jamais les accorder. EN: You understand and use the fixed expressions, and never make them agree.",
    estScreens: 38, restPoints: ['a9-tableau', 'a9-cartes'],
  },
  sections: [A9_LETTRE, A9_EXPR, A9_TABLEAU, A9_CONSTRUIRE, A9_CARTES, A9_CHOISIR, A9_ERREURS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — TOUT LE MONDE
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Tout le monde, tous, les deux',
  frSub: 'Écoute qui est là',
  lines: [
    ln(E(1160)), ln(E(1094)), ln(E(1170)), ln(E(1164)),
    ln(E(1165)), ln(E(1166)), ln(E(1168)), ln('fr.sons.masterclass.040'),
  ],
  questions: [
    { q: 'Première phrase : le verbe est...', opts: ['est', 'sont'], correct: 0, why: "« Tout le monde est là » : singulier. EN: singular." },
    { q: 'Troisième phrase : qui reste ?', opts: ['personne', 'toi'], correct: 1, why: "« sauf toi » : tout le monde, moins toi. EN: you." },
    { q: 'Quatrième phrase : combien de personnes sont venues ?', opts: ['deux', 'tous les amis', 'une'], correct: 0, why: "« tous les deux » : both. EN: two." },
    { q: 'Sixième phrase : elles sont combien ?', opts: ['deux', 'trois'], correct: 1, why: "« toutes les trois » : all three. EN: three." },
    { q: '« Le monde entier », c’est...', opts: ['the whole world', 'everybody'], correct: 0, why: "Le monde entier : la planète. Tout le monde : les gens. EN: the whole world." },
  ],
  audio: REC('rec-b1-23-monde-ecoute'),
  say: REFRAME,
  terms: ['monde'],
};

const A10_MONDE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-monde',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-expressions',
  title: 'Tout le monde, et les autres groupes',
  frSub: 'everybody, both, all three',
  hint: 'Quatre cartes. Regarde le verbe.',
  audio: REC('rec-b1-23-monde'),
  say: REFRAME,
  terms: ['monde'],
  cards: [
    {
      head: 'Everybody', label: 'tout le monde',
      fr: fr(E(1160)), sub: rsOf(E(1160)),
      body: "Tout le monde, ce sont les gens, vus comme un seul groupe. Le verbe reste au singulier. EN: everybody, singular verb.",
    },
    {
      head: 'Pas the whole world', label: 'le monde entier',
      fr: fr(E(1168)), sub: rsOf(E(1168)),
      body: "Pour la planète, dis le monde entier. Tout le monde regarde veut dire everybody watches. EN: the whole world is le monde entier.",
    },
    {
      head: 'Both', label: 'tous les deux',
      fr: fr(E(1164)), sub: rsOf(E(1164)),
      body: "Tous les deux, sans nom après : both. Avec un nom, tous les deux jours, c'est un rythme. EN: both, when no noun follows.",
    },
    {
      head: 'All three', label: 'toutes les trois',
      fr: fr(E(1166)), sub: rsOf(E(1166)),
      body: "Toutes les trois : trois femmes, toutes. Au masculin : tous les trois. EN: all three.",
    },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Un groupe, un verbe',
  groups: [
    grp('Tout le monde, singulier', [
      it(E(1161), 'aide'),
      it(E(1162), 'a apporté'),
      it(E(1163), 'connaît'),
      it(E(1175), 'parle'),
    ], chk(
      'Après tout le monde, le verbe est...',
      ['au pluriel', 'au singulier'], 1,
      "Au singulier, comme après il. EN: singular."),
    ),
    grp('Tous les deux, toutes les trois', [
      it(E(1165), 'deux frères'),
      it(E(1171), 'deux personnes'),
      it(E(1166), 'trois femmes'),
      it(E(1167), 'nous tous'),
    ], chk(
      '« Ils ont tous les deux raison » : combien de personnes ?',
      ['deux', 'tous les gens'], 0,
      "Tous les deux : both. EN: two."),
    ),
    ctl('Le verbe', '« Tout le monde ___ fatigué. »',
      ['sont', 'est'], 1,
      "Singulier. EN: singular."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['monde'],
};

const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-hacks',
  layer: 'core',
  title: 'Trois astuces pour les groupes',
  hacks: [
    { hack: 'Remplace tout le monde par il. Si « il est là » marche, garde est.',
      why: "Tout le monde se conjugue comme il ou elle. EN: conjugate it like il." },
    { hack: 'Après tous les deux, cherche un nom. Un nom : un rythme. Pas de nom : deux personnes.',
      why: "Tous les deux jours, c'est un jour sur deux ; nous sommes venus tous les deux, c'est both. EN: a noun gives a rhythm; none gives both." },
    { hack: 'Pour the whole world, dis le monde entier.',
      why: "Tout le monde, c'est toujours les gens autour de toi. EN: tout le monde is always people." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['monde'],
};

const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Deux sens de tous les deux',
  groups: [
    grp('Both ou un sur deux', [
      it(E(1164), 'both'),
      it(E(1037), 'un jour sur deux'),
      it(E(1171), 'both'),
      it(E(1049), 'un mois sur deux'),
    ], chk(
      '« tous les deux jours » et « tous les deux » : même sens ?',
      ['oui', 'non : un rythme, puis deux personnes'], 1,
      "Avec un nom, un rythme ; sans nom, both. EN: rhythm or both."),
    ),
    grp('Tout le monde ou tous', [
      it(E(1160), 'singulier : est'),
      it(E(1094), 'pluriel : sont'),
      it(E(1170), 'singulier : est parti'),
      it(E(1107), 'pluriel : sont partis'),
    ], chk(
      '« Tout le monde est parti » et « ils sont tous partis » : le verbe...',
      ['change de nombre', 'reste pareil'], 0,
      "Tout le monde : singulier. Tous : pluriel. EN: singular, then plural."),
    ),
    ctl('Le sens', 'Tu veux dire : everybody here speaks French.',
      ['Le monde entier parle français ici.', 'Tout le monde parle français ici.'], 1,
      "Les gens d'ici : tout le monde. EN: everybody."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['monde'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre groupes mal comptés',
  errors: [
    {
      wrong: 'Tout le monde sont là.',
      right: fr(E(1160)),
      why: "Normal : tout le monde, ce sont plusieurs personnes. Mais la grammaire le voit comme un seul groupe : est. EN: grammatically singular.",
    },
    {
      wrong: 'Tous le monde est fatigué.',
      right: fr(E(1172)),
      why: "Tu entends [too], et le groupe est grand, alors tous paraît logique. Mais le monde est singulier : tout. EN: le monde is singular.",
    },
    {
      wrong: 'Tout le monde regarde ce match.',
      right: fr(E(1168)),
      why: "Correct, mais ça veut dire everybody watches. Pour the whole world, dis le monde entier. EN: for the planet, le monde entier.",
    },
    {
      wrong: 'Nous sommes venus les deux.',
      right: fr(E(1164)),
      why: "En anglais, both est un seul mot. En français, both se dit tous les deux. EN: both is tous les deux.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['monde'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le verbe', '« Tout le monde ___ arrivé. »',
    ['est', 'sont'], 0,
    "Singulier. EN: singular."),
  ctl('Both', '« We both came » : ...',
    ['Nous sommes venus les deux.', 'Nous sommes venus tous les deux.'], 1,
    "Tous les deux. EN: tous les deux."),
  ctl('Le sens', '« Le monde entier » veut dire...',
    ['the whole world', 'everybody'], 0,
    "La planète. EN: the whole world."),
], ['monde']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Tout le monde',
    opener: {
      line: "Tout le monde est là, et le verbe reste au singulier : ici tu apprends à compter les groupes. EN: Everybody is here, and the verb stays singular: here you learn to count groups.",
      imageRef: 'lessons/tout/act10.jpg',
    },
    sections: [],
    milestone: "Tu dis tout le monde est, tous les deux pour both, et le monde entier pour la planète. EN: You say tout le monde est, tous les deux for both, and le monde entier for the planet.",
    estScreens: 30, restPoints: ['a10-hacks'],
  },
  sections: [A10_ECOUTE, A10_MONDE, A10_CONSTRUIRE, A10_HACKS, A10_CHOISIR, A10_ERREURS, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — ORGANISER UNE FÊTE
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Mireille',
  frSub: 'La forme que tu vas écrire',
  text: MESSAGE_TEXT,
  glossary: [
    { word: 'fête de départ', en: 'goodbye party', note: 'Une fête avant de partir vivre ailleurs.' },
    { word: 'la cour', en: 'the courtyard', note: "L'espace ouvert derrière l'immeuble." },
    { word: 'installer', en: 'to set up', note: 'Mettre les tables et les chaises en place.' },
    { word: 'les bienvenus', en: 'welcome', note: 'Tu es content qu’ils viennent.' },
  ],
  questions: [
    { q: 'Qui est invité ?', a: "« je vous invite tous » : tous, pronom, [toos]. Tout le monde, sans exception." },
    { q: "Qu'est-ce qui est déjà fait ?", a: "« J'ai déjà tout réservé » et « toutes les invitations sont parties »." },
    { q: 'Qui vient à midi ?', a: "« Hugo et Josée, venez tous les deux » : deux personnes, both." },
    { q: '« Vous êtes tous les bienvenus » : entends-tu le s de tous ?', a: "Non : un nom suit, les bienvenus. [too lay]." },
    { q: 'Dans quel ordre avance le message ?', a: "L'événement, le moment, ce qui est prêt, qui fait quoi, puis merci." },
  ],
  audio: REC('rec-b1-23-message'),
  say: REFRAME,
  terms: ['message', 'tus'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour ton message',
  steps: [
    "1. Dis l'événement, le jour et le lieu : tout le monde doit savoir où aller. EN: what, when, where.",
    '2. Dis combien de temps ça dure, avec toute la ou tout le. EN: how long, with toute la.',
    "3. Dis ce qui est déjà prêt, avec tout au passé composé : j'ai tout réservé. EN: what is ready.",
    '4. Dis qui fait quoi : tous les deux, toutes les boissons, chacun. EN: who does what.',
    '5. Relis chaque tout : regarde le nom, puis la forme. EN: check each tout against its noun.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['message', 'accord'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    uc("Tu invites les voisins de l'immeuble", E(1176)),
    uc('Tu préviens que tout est prêt', E(1194)),
    uc('Tu partages les tâches', E(1191)),
    uc('Tu remercies le groupe à la fin', E(1188)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['message'],
};

/** CHOOSE, out loud: six turns with Hugo on the phone, planning. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au téléphone avec Hugo',
  setting: "Jeudi soir. Tu aides Mireille à organiser sa fête de départ. Hugo t'appelle pour savoir où en est tout ça.",
  turns: [
    {
      ai: 'Salut. Alors, qui est invité, samedi ?',
      en: 'Hi. So, who is invited on Saturday?',
      user: fr(E(1176)),
      userEn: 'Everybody is invited on Saturday. (tout le monde, singular verb.)',
      alts: [
        { fr: 'Tous les voisins sont invités.', en: 'All the neighbours are invited. (tous before a noun, plural verb.)' },
        { fr: 'Ils sont tous invités.', en: 'They are all invited. (pronoun tous: say the s.)' },
      ],
    },
    {
      ai: 'Et la fête dure combien de temps ?',
      en: 'And how long does the party last?',
      user: fr(E(1185)),
      userEn: 'The party lasts all afternoon. (tout le + singular: duration.)',
      alts: [
        { fr: "Tout l'après-midi, jusqu'à dix heures.", en: 'All afternoon, until ten.' },
        { fr: 'Toute la soirée.', en: 'The whole evening. (toute la: also right.)' },
      ],
    },
    {
      ai: "Il faut encore réserver quelque chose ?",
      en: 'Is there still something to book?',
      user: fr(E(1182)),
      userEn: 'I booked everything: the hall and the chairs. (tout between the auxiliary and the participle.)',
      alts: [
        { fr: "Non, Mireille a tout réservé.", en: 'No, Mireille booked everything.' },
        { fr: 'Non, tout est réservé.', en: 'No, everything is booked. (pronoun tout, singular.)' },
      ],
    },
    {
      ai: 'Et les invitations ?',
      en: 'And the invitations?',
      user: fr(E(1183)),
      userEn: 'The invitations have all gone out. (pronoun toutes, feminine.)',
      alts: [
        { fr: 'Toutes les invitations sont parties.', en: 'All the invitations have gone out. (toutes before a noun.)' },
        { fr: 'On les a toutes envoyées.', en: 'We sent them all. (toutes after the auxiliary.)' },
      ],
    },
    {
      ai: "Josée et moi, on vient à quelle heure ?",
      en: 'Josée and I, what time do we come?',
      user: 'Venez tous les deux à midi, pour installer les tables.',
      userEn: 'Both of you come at noon, to set up the tables. (tous les deux: both.)',
      alts: [
        { fr: 'Tous les deux à midi, merci.', en: 'Both of you at noon, thanks.' },
        { fr: 'À midi, tous les deux.', en: 'At noon, both of you.' },
      ],
    },
    {
      ai: "Parfait. Autre chose ?",
      en: 'Perfect. Anything else?',
      user: "Non, c'est tout. Merci pour tout.",
      userEn: 'No, that is all. Thanks for everything. (the pronoun tout, twice.)',
      alts: [
        { fr: "Non, tout va bien. À tout à l'heure.", en: 'No, all is well. See you in a bit. (a fixed expression.)' },
        { fr: 'Non, merci à tous les deux.', en: 'No, thanks to you both.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['message', 'monde'],
};

/** THE GRADED TASK. The unit outcome is tested here. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Organise une fête',
  frSub: 'Mission écrite',
  brief: "Tu organises un événement dans ton immeuble ou avec tes amis : une fête de départ, un déménagement, ou un grand ménage. Écris un message au groupe. Dis quand, combien de temps, ce qui est prêt et qui fait quoi.",
  briefEn: 'You are organising an event in your building or with friends: a goodbye party, a move, or a big clean-up. Write a message to the group. Say when, how long, what is ready and who does what.',
  produce: "Écris un message de 80 à 120 mots avec au moins six tout différents : tout le monde, une forme devant un nom féminin, une durée (toute la) ou une fréquence (tous les), tout pronom, tous pronom et une expression figée.",
  responseSpec: { kind: 'text', minWords: 80, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'accord',
        label: 'Chaque tout a la bonne forme',
        maxPoints: 4,
        descriptors: [
          "4 : Chaque tout devant un nom a le genre et le nombre du nom, tout pronom est au singulier, et tous pronom est au pluriel.",
          "3 : Une erreur d'accord, et tout le reste est juste.",
          "2 : Deux ou trois erreurs d'accord, par exemple tout les ou tous les chaises.",
          "1 : Tout est presque toujours écrit de la même façon, sans regarder le nom.",
        ],
      },
      {
        key: 'emplois',
        label: 'Tout, sous plusieurs formes',
        maxPoints: 3,
        descriptors: [
          "3 : Au moins six emplois différents : devant un nom, pronom, tous pronom, temps, tout le monde, une expression.",
          "2 : Quatre ou cinq emplois différents.",
          "1 : Trois emplois ou moins, ou toujours le même.",
        ],
      },
      {
        key: 'message',
        label: 'Un message qui organise',
        maxPoints: 3,
        descriptors: [
          "3 : On sait quand, où, combien de temps, ce qui est prêt et qui fait quoi.",
          "2 : Il manque une de ces informations.",
          "1 : Le message est flou : on ne sait pas quoi faire ni quand venir.",
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Un vrai message au groupe, entre 80 et 120 mots, avec un début et une fin.',
          '1 : Il manque un élément : moins de 80 mots, pas de groupe, ou pas de fin.',
        ],
      },
    ],
  },
  scaffold: [
    'Salut tout le monde,',
    'Samedi, on organise...',
    'Ça dure toute la...',
    "J'ai déjà tout...",
    'Toutes les...',
    '... et ... , venez tous les deux...',
    'Vous êtes tous...',
    'Merci à tous,',
  ],
  modelAnswer: "Salut tout le monde ! Samedi, c'est le grand ménage de printemps dans notre immeuble, rue Rachel. On commence à neuf heures et on travaille toute la matinée. J'ai déjà tout acheté : les sacs, les gants et les produits. Toutes les tâches sont sur la liste, dans l'entrée. Josée et Luc, vous lavez toutes les fenêtres du hall. Les autres, vous êtes tous dans la cour avec moi. À midi, tout le monde mange ensemble : chacun apporte un plat, et on partage tout. Si vous avez une question, écrivez-moi tout de suite. Merci à tous, et à samedi ! Fatou",
  modelAnswerEn: "Hi everybody! On Saturday it is the big spring clean in our building, rue Rachel. We start at nine and work all morning. I have already bought everything: the bags, the gloves and the cleaning products. All the tasks are on the list in the entrance. Josée and Luc, you are washing all the windows in the hall. Everyone else, you are all in the courtyard with me. At noon everybody eats together: each person brings a dish and we share everything. If you have a question, write to me right away. Thanks, all of you, and see you Saturday! Fatou",
  watchFor: [
    {
      pattern: "all day written as every day, or the reverse (on travaille tous les jours for one morning).",
      criterion: 'message',
      feedback: "Pour un seul moment en entier, toute la : toute la matinée. Tous les, c'est pour compter des fois.",
      ref: 'a3-piege',
    },
    {
      pattern: "tout left unchanged before a feminine or plural noun (tout la liste, tout les tâches).",
      criterion: 'accord',
      feedback: "Regarde le nom : la liste, donc toute ; les tâches, donc toutes.",
      ref: 'a2-erreurs',
    },
    {
      pattern: "tous written before a feminine plural noun (tous les fenêtres, tous les boissons).",
      criterion: 'accord',
      feedback: "fenêtres et boissons sont féminins : toutes.",
      ref: 'a2-construire',
    },
    {
      pattern: "tout un / toute une in the wrong order or form (une toute journée, tout une heure).",
      criterion: 'accord',
      feedback: "Tout passe devant un : toute une journée, toute une heure.",
      ref: 'a4-erreurs',
    },
    {
      pattern: "Pronoun tout with a plural verb or used for people (tout sont prêts, merci à tout).",
      criterion: 'accord',
      feedback: "Tout, pour les choses, au singulier : tout est prêt. Pour les gens : merci à tous.",
      ref: 'a5-piege',
    },
    {
      pattern: "Pronoun tous or toutes with the wrong gender or before the verb (les voisins tous sont là, mes sœurs sont tous là).",
      criterion: 'accord',
      feedback: "Tous suit le verbe : ils sont tous là. Pour des femmes : toutes.",
      ref: 'a6-piege',
    },
    {
      pattern: "tout or tous after the participle (j'ai acheté tout, vous êtes invités tous).",
      criterion: 'accord',
      feedback: "Au passé composé, tout se glisse au milieu : j'ai tout acheté.",
      ref: 'a7-erreurs',
    },
    {
      pattern: "Adverb tout with the wrong agreement (toute prêt, tout seule).",
      criterion: 'accord',
      feedback: "Devant un féminin qui commence par une consonne : toute seule. Sinon, tout.",
      ref: 'a8-piege',
    },
    {
      pattern: "A fixed expression made to agree or pluralised (toute de suite, tous à fait, tout les temps).",
      criterion: 'accord',
      feedback: "Les blocs ne changent jamais : tout de suite, tout à fait, tout le temps.",
      ref: 'a9-erreurs',
    },
    {
      pattern: "tout le monde with a plural verb (tout le monde sont invités).",
      criterion: 'accord',
      feedback: "Tout le monde se conjugue comme il : tout le monde est invité.",
      ref: 'a10-erreurs',
    },
    {
      pattern: "Fewer than six different uses of tout, or no who-does-what, so the group does not know what to do.",
      criterion: 'emplois',
      feedback: "Relis la mission : six tout différents, et dis qui fait quoi.",
      ref: 'a11-plan',
    },
  ],
  graderNotes: [
    'The greeting (Salut tout le monde) and the sign-off (a name, Merci à tous) DO count toward the word budget: they carry required uses of tout. Count everything, with 10% tolerance (72 to 132) before criterion « tache » loses its point.',
    "« Different uses » means different FUNCTIONS: determiner before a noun, tout un, tout sans article, pronoun tout, pronoun tous/toutes, adverb, time (tous les / toute la), tout le monde, tous les deux, a fixed expression. Two tous les count once.",
    "Accept « toute heureuse », « toute entière » and similar agreed forms before a vowel-initial feminine adjective: the 1976 tolerance allows them. Teach « tout heureuse » in feedback without marking it wrong.",
    "Accept « en tous cas » as a variant of « en tout cas »; both are in the dictionaries.",
    "« tout ce qui / tout ce que » belongs to b1.13 and « pas du tout » to b1.20: accept them as correct uses, count each as one use of tout.",
    "Pronunciation of pronoun tous cannot be judged in writing: do not mark it.",
    "Do not score the subjunctive (b1.14 to b1.16) if a learner writes « pour que tout le monde vienne »: accept a correct one, ignore an incorrect one under this lesson's criteria.",
    'Accept regional vocabulary (tantôt for tout à l’heure, char, dépanneur, appart).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['message', 'accord'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tous tes tout à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tus', 'formes'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-expressions',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'devant un nom', v: 'tout le, toute la, tous les, toutes les', say: fr(E(1003)),
      detail: { title: "L'accord", body: "Le nom décide du genre et du nombre. EN: the noun decides.", say: fr(E(1018)) } },
    { k: 'le temps', v: 'tous les jours : fois ; toute la journée : durée', say: fr(E(1035)),
      detail: { title: 'Compter, mesurer', body: "Pluriel pour compter, singulier pour mesurer. EN: plural counts, singular measures.", say: fr(E(1037)) } },
    { k: 'tout, pronom', v: 'everything, verbe au singulier', say: fr(E(1072)),
      detail: { title: 'Un bloc', body: "Tout est prêt. EN: singular.", say: fr(E(1077)) } },
    { k: 'tous, pronom', v: '[toos], après le verbe', say: fr(E(1094)),
      detail: { title: 'Le s qui sonne', body: "Seul, le s sonne. EN: alone, the s sounds.", say: fr(E(1097)) } },
    { k: 'la place', v: "j'ai tout compris, ils sont tous partis", say: fr(E(1106)),
      detail: { title: 'Au milieu', body: "Entre l'auxiliaire et le participe. EN: in the middle.", say: fr(E(1111)) } },
    { k: 'tout, adverbe', v: 'tout neuf, tout heureuse, toute seule', say: fr(E(1123)),
      detail: { title: "L'exception", body: "Toute devant un féminin qui commence par une consonne. EN: toute before a feminine consonant.", say: fr(E(1129)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord', 'tus', 'exception'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu accordes tout avec le nom qu'il couvre, tu comptes avec tous les et tu mesures avec toute la. Tu dis tout pour les choses et tous, avec son s, pour les gens, et tu les glisses au milieu du passé composé. Le piège qui reste est le plus discret : un tout qui ne s'accorde pas quand tu écris vite, surtout devant un nom féminin pluriel. Avant l'examen, relis ton message et souligne chaque tout. Au-dessus, écris le nom qu'il couvre. EN: Underline every tout in your message and write above it the noun it covers.",
  stats: [
    { k: 'Les formes', v: 'tout, toute, tous, toutes' },
    { k: 'Le temps', v: 'tous les jours, toute la journée' },
    { k: 'Le son', v: 'tous [toos], pronom' },
    { k: 'La place', v: "j'ai tout compris" },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight, one per act from act 1 to act 10 plus
 *  an integration round on the message. Each round's target is a distinct
 *  errorTrigger. `fold()` strips accents, commas and apostrophes, so every
 *  typed answer differs from its prompt by a LETTER or a WORD that survives
 *  folding (toute against tout, tous moved before the participle). */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer], why, ref });
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
      id: 'r1-connus', label: 'Ce que tu savais déjà', targets: ['all-mot-a-mot'],
      questions: [
        mc('Tu veux le camion un seul samedi, du matin au soir.', [fr(E(1001)), 'Il me faut le camion tous les samedis.', fr(E(1000))], 2, "Un jour entier : toute la journée. EN: one whole day.", 'a1-scene'),
        mc('« Tout le monde » veut dire...', ['everybody', 'the whole world'], 0, "Les gens. EN: everybody.", 'a1-connus'),
        mc('Dans « Ce sera tout », tout est...', ['devant un nom', 'un adverbe', 'un pronom'], 2, "Seul, sans nom : un pronom. EN: a pronoun.", 'a1-connus'),
        tI('Écris la bonne forme de tout.', '___ la vaisselle est emballée.', fr(E(1003)), "vaisselle, féminin singulier : toute. EN: toute.", 'a1-reperer'),
        tI('Écris la bonne forme de tout.', '___ les chaises sont dans le camion.', fr(E(1004)), "chaises, féminin pluriel : toutes. EN: toutes.", 'a1-reperer'),
        eS('Tout les cartons sont dans le salon.', fr(E(1002)), "cartons, masculin pluriel : tous. EN: tous.", 'a1-lecture'),
        eS('Tout la famille est venue aider.', fr(E(1014)), "famille est féminin : toute. EN: toute.", 'a1-usages'),
        lC('Écoute. Combien de temps faut-il le camion ?', fr(E(1000)), ['chaque jour', 'une journée entière'], 1, "toute la journée : un jour, en entier. EN: one whole day.", 'a1-scene'),
      ],
    },
    {
      id: 'r2-formes', label: 'Quatre formes', targets: ['accord-oublie'],
      questions: [
        mc('« ___ la cuisine est en cartons. »', ['Toute', 'Tout'], 0, "cuisine, féminin : toute. EN: toute.", 'a2-formes'),
        mc('« ___ les meubles sont lourds. »', ['Tout', 'Toutes', 'Tous'], 2, "meubles, masculin pluriel : tous. EN: tous.", 'a2-construire'),
        mc("« ___ l'appartement sent la peinture. »", ['Toute', 'Tout'], 1, "appartement est masculin. EN: tout.", 'a2-erreurs'),
        tI('Écris la bonne forme de tout.', "___ l'équipe est fatiguée.", fr(E(1030)), "équipe est féminin : toute. EN: toute.", 'a2-construire'),
        tI('Écris la bonne forme de tout.', "J'ai nettoyé ___ les fenêtres.", fr(E(1031)), "fenêtres, féminin pluriel : toutes. EN: toutes.", 'a2-exemples'),
        tI('Écris la bonne forme de tout.', '___ mes amis sont venus.', fr(E(1024)), "amis, masculin pluriel : tous. EN: tous.", 'a2-exemples'),
        eS('Tous les assiettes sont fragiles.', fr(E(1019)), "assiette est féminin : toutes. EN: toutes.", 'a2-erreurs'),
        lC('Écoute. Combien de chambres a-t-elle rangées ?', fr(E(1021)), ['une, en entier', 'toutes les chambres'], 0, "toute la chambre : une seule. EN: one.", 'a2-choisir'),
      ],
    },
    {
      id: 'r3-temps', label: 'Compter ou mesurer', targets: ['frequence-duree'],
      questions: [
        mc('« I worked all day » : ...', ["J'ai travaillé tous les jours.", "J'ai travaillé toute la journée."], 1, "Un jour entier. EN: toute la journée.", 'a3-regle'),
        mc('« tous les deux jours » veut dire...', ['un jour sur deux', 'les deux jours', 'deux fois par jour'], 0, "Un rythme. EN: every other day.", 'a3-tableau'),
        mc('« toutes les quatre heures » : combien de fois par jour ?', ['quatre', 'deux', 'six'], 2, "24 : 4 = 6. EN: six.", 'a3-construire'),
        tI('Écris la bonne forme.', 'Il a neigé ___ la nuit.', fr(E(1042)), "Une nuit entière : toute. EN: toute.", 'a3-piege'),
        tI('Écris la bonne forme.', 'Le bus passe ___ les dix minutes.', fr(E(1039)), "minutes, féminin pluriel : toutes. EN: toutes.", 'a3-tableau'),
        tI('Écris la bonne forme.', "Nous sommes restés au chalet ___ l'été.", fr(E(1041)), "été, masculin : tout. EN: tout.", 'a3-cartes'),
        eS('Je fais du vélo tout les matins.', fr(E(1043)), "matins, masculin pluriel : tous. EN: tous.", 'a3-piege'),
        lC('Écoute. On arrose les plantes...', fr(E(1037)), ['chaque jour', 'un jour sur deux'], 1, "tous les deux jours. EN: every other day.", 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-tout-un', label: 'Tout un, tout ce, tout mon', targets: ['ordre-article'],
      questions: [
        mc('« a whole day » : ...', ['une toute journée', 'toute une journée'], 1, "Tout passe devant une. EN: toute une.", 'a4-mots'),
        mc('« Tout retard sera facturé. » Tout veut dire...', ['chaque', 'le retard entier'], 0, "Sans article : chaque. EN: each.", 'a4-conditions'),
        mc('« ___ mes lettres »', ['Tous', 'Toute', 'Toutes'], 2, "lettres, féminin pluriel. EN: toutes.", 'a4-construire'),
        tI('Écris la bonne forme de tout.', "J'ai emballé ___ ces verres.", fr(E(1069)), "verres, masculin pluriel : tous. EN: tous.", 'a4-exemples'),
        tI('Écris la bonne forme de tout.', '___ cette vaisselle vient de ma grand-mère.', fr(E(1058)), "vaisselle, féminin : toute. EN: toute.", 'a4-construire'),
        eS("J'ai passé une toute journée à emballer.", fr(E(1055)), "Tout d'abord : toute une journée. EN: toute une.", 'a4-erreurs'),
        eS('Il a donné tout ses livres.', fr(E(1060)), "ses livres : tous. EN: tous.", 'a4-erreurs'),
        lC('Écoute. Où lis-tu cette phrase ?', fr(E(1063)), ['dans un règlement', 'dans un texto'], 0, "Tout sans article : un avis. EN: a notice.", 'a4-choisir'),
      ],
    },
    {
      id: 'r5-pronom', label: 'Tout, le pronom', targets: ['tout-pluriel'],
      questions: [
        mc('« Tout ___ emballé. »', ['est', 'sont'], 0, "Singulier. EN: est.", 'a5-pronom'),
        mc('« Je comprends tout » : tout veut dire...', ['everybody', 'everything'], 1, "Les choses. EN: everything.", 'a5-construire'),
        mc('Pour des choses, sans nom : « Merci pour ___. »', ['tous', 'toute', 'tout'], 2, "Des choses : tout. EN: tout.", 'a5-piege'),
        tI('Écris le pronom.', '___ est fermé le dimanche.', fr(E(1086)), "Tout, au singulier. EN: tout.", 'a5-exemples'),
        tI('Mets le verbe au bon nombre.', 'Tout (être) possible.', fr(E(1084)), "Tout : singulier. EN: est.", 'a5-construire'),
        eS('Tout sont emballés.', fr(E(1072)), "Tout : singulier. EN: singular.", 'a5-piege'),
        tI('Écris le pronom.', 'Elle pense à ___.', fr(E(1079)), "Toutes les choses : tout. EN: tout.", 'a5-pronom'),
        lC("Écoute. Qu'est-ce qui va bien ?", fr(E(1071)), ['une chose', 'tout'], 1, "Tout va bien : tout, en entier. EN: everything.", 'a5-histoire'),
      ],
    },
    {
      id: 'r6-tus', label: 'Tous, avec son s', targets: ['s-muet-pronom'],
      questions: [
        mc('« Ils sont tous là » : tous se dit...', ['[toos]', '[too]'], 0, "Pronom : [toos]. EN: sounded.", 'a6-son'),
        mc('« Tous les voisins sont là » : tous se dit...', ['[toos]', '[too]'], 1, "Devant un nom : [too]. EN: silent.", 'a6-tableau'),
        mc('« Mes sœurs sont ___ là. »', ['tous', 'tout', 'toutes'], 2, "Des sœurs : toutes. EN: toutes.", 'a6-construire'),
        tI('Ajoute tous à la bonne place.', 'Les voisins sont là.', fr(E(1094)), "Après le verbe : sont tous là. EN: after the verb.", 'a6-construire'),
        tI('Écris le pronom.', 'Merci à ___.', fr(E(1097)), "Les gens : tous. EN: tous.", 'a6-tableau'),
        eS('Les chaises, je les prends tous.', fr(E(1093)), "chaises, féminin : toutes. EN: toutes.", 'a6-piege'),
        eS('Mes amis sont tout venus.', fr(E(1088)), "Des gens : tous. EN: tous.", 'a6-piege'),
        lC('Écoute. Entends-tu le s de tous ?', fr(E(1102)), ['oui', 'non'], 0, "« dorment tous » : [toos]. EN: yes.", 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-place', label: 'La place', targets: ['place-apres'],
      questions: [
        mc('Laquelle est juste ?', ["J'ai compris tout.", "J'ai tout compris."], 1, "Au milieu. EN: in the middle.", 'a7-place'),
        mc('Laquelle est juste ?', ['Je vais tout ranger.', 'Je vais ranger tout.', 'Je tout vais ranger.'], 0, "Devant l'infinitif. EN: before the infinitive.", 'a7-construire'),
        mc('Laquelle dit qu’il ne reste rien à manger ?', ['Ils ont tous mangé.', 'Ils ont mangé tous.', 'Ils ont tout mangé.'], 2, "Tout : la nourriture. EN: the food.", 'a7-choisir'),
        tI('Mets tout à sa place.', "J'ai lu. (tout)", "J'ai tout lu.", "Entre ai et lu. EN: in the middle.", 'a7-exemples'),
        tI('Mets tous à sa place.', 'Ils sont partis. (tous)', fr(E(1107)), "Entre sont et partis. EN: in the middle.", 'a7-construire'),
        eS('Je les ai vus tous.', fr(E(1108)), "Tous avant le participe. EN: before vus.", 'a7-erreurs'),
        eS('Il faut vérifier tout avant de partir.', fr(E(1112)), "Tout devant l'infinitif. EN: before vérifier.", 'a7-erreurs'),
        lC('Écoute. Qui a signé ?', fr(E(1113)), ['nous tous', 'une seule personne'], 0, "Nous avons tous signé. EN: all of us.", 'a7-histoire'),
      ],
    },
    {
      id: 'r8-adverbe', label: "Tout, l'adverbe", targets: ['adverbe-accord'],
      questions: [
        mc('« Elle est partie ___ seule. »', ['toute', 'tout'], 0, "Féminin, consonne. EN: toute.", 'a8-adverbe'),
        mc('« Elle est ___ heureuse. »', ['toute', 'tout'], 1, "Voyelle : tout. EN: tout.", 'a8-construire'),
        mc('« Ils sont tout contents » veut dire...', ['ils sont chacun contents', 'ils ne sont pas contents', 'ils sont très contents'], 2, "Adverbe : très. EN: very.", 'a8-choisir'),
        tI('Écris la bonne forme de tout.', 'La cuisinière est ___ neuve.', fr(E(1126)), "neuve : féminin, consonne. EN: toute.", 'a8-piege'),
        tI('Écris la bonne forme de tout.', 'Le frigo est ___ neuf.', fr(E(1125)), "neuf, masculin. EN: tout.", 'a8-focus'),
        eS('La table est tout petite.', fr(E(1139)), "petite : féminin, consonne. EN: toute.", 'a8-piege'),
        eS('Il habite toute près.', fr(E(1124)), "près : adverbe. EN: tout.", 'a8-focus'),
        lC('Écoute. Chacun est content, ou ils sont très contents ?', fr(E(1133)), ['chacun est content', 'très contents'], 0, "[toos] : le pronom, chacun. EN: each one.", 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-expressions', label: 'Les expressions', targets: ['bloc-accorde'],
      questions: [
        mc('« tout à fait » veut dire...', ['all the time', 'absolutely'], 1, "Absolument. EN: absolutely.", 'a9-expr'),
        mc("« Je te rappelle tout à l'heure » : c'est...", ['dans un moment', 'il y a un moment', 'demain'], 0, "Futur : dans un moment. EN: in a moment.", 'a9-tableau'),
        mc('Il a plu, et vous avez déménagé quand même. Tu dis : on a déménagé...', ['tout de suite', 'tout le temps', 'malgré tout'], 2, "Malgré la pluie. EN: all the same.", 'a9-choisir'),
        tI('Écris le bloc.', "Le chien aboie ___ ___ temps. (all the time)", fr(E(1146)), "Au singulier : tout le temps. EN: tout le temps.", 'a9-cartes'),
        tI('Écris le bloc.', '___ ___ cas, merci d’être venu. (in any case)', fr(E(1144)), "En tout cas. EN: in any case.", 'a9-cartes'),
        eS("Je te rappelle toute à l'heure.", fr(E(1143)), "Un bloc ne s'accorde pas. EN: tout.", 'a9-erreurs'),
        eS('Tu as tous à fait raison.', fr(E(1141)), "tout à fait, sans s. EN: tout.", 'a9-erreurs'),
        lC('Écoute. Quand le frigo s’est-il arrêté ?', fr(E(1150)), ['sans arrêt', "d'un coup"], 1, "Tout à coup : suddenly. EN: suddenly.", 'a9-lettre'),
      ],
    },
    {
      id: 'r10-monde', label: 'Tout le monde', targets: ['monde-pluriel'],
      questions: [
        mc('« Tout le monde ___ là. »', ['est', 'sont'], 0, "Singulier. EN: est.", 'a10-monde'),
        mc('« We both came » : ...', ['Nous sommes venus les deux.', 'Nous sommes venus tous les deux.'], 1, "Tous les deux. EN: both.", 'a10-construire'),
        mc('« the whole world » : ...', ['tout le monde', 'tous les mondes', 'le monde entier'], 2, "Le monde entier. EN: the whole world.", 'a10-hacks'),
        tI('Mets le verbe au bon nombre.', 'Tout le monde (être) fatigué.', fr(E(1172)), "Singulier : est. EN: est.", 'a10-construire'),
        tI('Mets le verbe au bon nombre.', 'Tout le monde (parler) français ici.', fr(E(1175)), "Singulier : parle. EN: parle.", 'a10-choisir'),
        eS('Tout le monde sont là.', fr(E(1160)), "Singulier. EN: est.", 'a10-erreurs'),
        eS('Tous le monde est fatigué.', fr(E(1172)), "le monde, singulier : tout. EN: tout.", 'a10-erreurs'),
        lC('Écoute. Combien sont-elles ?', fr(E(1166)), ['deux', 'trois'], 1, "Toutes les trois. EN: three.", 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-message', label: 'Le message', targets: ['message-flou'],
      questions: [
        mc('Un bon message d’organisation dit...', ['qui fait quoi, et quand', 'seulement merci'], 0, "Le moment et les tâches. EN: who does what, and when.", 'a11-plan'),
        mc("« Vous êtes tous les bienvenus » : tous se dit...", ['[toos]', '[too]'], 1, "Un nom suit : [too]. EN: silent.", 'a11-lecture'),
        mc('« Hugo et Josée, venez ___ à midi. »', ['tout le monde', 'toutes les deux', 'tous les deux'], 2, "Un homme et une femme : tous les deux. EN: tous.", 'a11-scenario'),
        tI('Écris la bonne forme de tout.', "___ l'équipe sera là.", fr(E(1181)), "équipe, féminin : toute. EN: toute.", 'a11-cheat'),
        tI('Mets tout à sa place.', "J'ai réservé : la salle et les chaises. (tout)", fr(E(1182)), "Au milieu. EN: in the middle.", 'a11-usages'),
        eS('Tout le monde sont invités samedi.', 'Tout le monde est invité samedi.', "Singulier. EN: singular.", 'a11-lecture'),
        eS('Toute les boissons sont au frais.', fr(E(1178)), "les boissons, féminin pluriel : toutes. EN: toutes.", 'a11-scenario'),
        lC('Écoute. Qu’est-ce qui est prêt ?', fr(E(1194)), ['la salle seulement', 'tout'], 1, "Tout est prêt. EN: everything.", 'a11-cheat'),
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
    { front: 'devant un nom féminin', back: 'toute la, toutes les', say: fr(E(1017)) },
    { front: 'devant un nom masculin', back: 'tout le, tous les', say: fr(E(1018)) },
    { front: 'combien de fois', back: 'tous les jours', say: fr(E(1034)) },
    { front: 'combien de temps', back: 'toute la journée', say: fr(E(1035)) },
    { front: 'everything', back: 'tout, verbe au singulier', say: fr(E(1072)) },
    { front: 'all of them', back: 'tous [toos], toutes', say: fr(E(1094)) },
    { front: 'au passé composé', back: "j'ai tout compris", say: fr(E(1106)) },
    { front: 'complètement', back: 'tout neuf, toute seule', say: fr(E(1123)) },
    { front: 'everybody', back: 'tout le monde est', say: fr(E(1160)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Tout, en résumé',
  body: `${REFRAME} Tu sais maintenant que tout n'est pas toujours all : tout le monde, tous les deux jours, tout seul. Tu accordes, tu comptes, tu mesures, et tu fais sonner le s du pronom. La prochaine leçon, ${MEME_REF}, reste dans les petits mots qui changent de sens selon leur place : même. EN: Next lesson: même, another small word whose meaning moves with its place.`,
  points: [
    'Devant un nom, tout prend son genre et son nombre.',
    'Tous les pour compter, toute la pour mesurer.',
    'Tous, pronom, fait sonner son s.',
    'Au passé composé, tout se glisse au milieu.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formes', 'tus', 'place'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Organiser une fête',
    opener: {
      line: "Mireille part, et tout le monde est invité : à toi d'écrire le message qui organise tout. EN: Mireille is leaving and everybody is invited: your turn to write the message that organises it all.",
      imageRef: 'lessons/tout/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton propre message et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote your own message and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 120,
    restPoints: ['a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-temps', 'a11-quiz/r6-tus', 'a11-quiz/r9-expressions'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
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
  sheet('sheet-formes', 'Les formes de tout', ['devant un nom', 'tout un, tout ce, tout mon', 'tout sans article'], [
    teach('sheet-formes-teach', 'Le nom décide',
      `${REFRAME} Devant un nom, tout prend le genre et le nombre de ce nom, qu'il y ait un article, un possessif, un démonstratif ou un. À l'oral, tout et tous font [too], toute et toutes font [toot]. EN: before a noun, tout agrees with it; tout and tous sound alike, so do toute and toutes.`),
    table('sheet-formes-table', 'Les quatre formes', ['Genre', 'Singulier', 'Pluriel'], [
      ['Masculin', 'tout le salon', 'tous les livres'],
      ['Féminin', 'toute la cuisine', 'toutes les assiettes'],
      ["Devant l'", "tout l'appartement, toute l'équipe", '(pas de pluriel en l’)'],
    ]),
    table('sheet-formes-autres', 'Tout devant les autres petits mots', ['Structure', 'Exemple', 'Sens'], [
      ['tout un, toute une', 'Il a fallu tout un camion.', 'a whole'],
      ['tout ce, toute cette, tous ces', 'Tous ces cartons sont à toi.', 'all these'],
      ['tout mon, toute ma, tous mes', "J'ai gardé toutes mes lettres.", 'all my'],
      ['tout + nom, sans article', 'Tout retard sera facturé.', 'any, each (avis)'],
      ['pour toute question', 'Pour toute question, appelez-nous.', 'for any question'],
    ]),
  ]),
  sheet('sheet-temps', 'Fréquence et durée', ['tous les', 'toute la', 'les intervalles'], [
    teach('sheet-temps-teach', 'Compter ou mesurer',
      `Avec un nom de temps au pluriel, tous les ou toutes les comptent des fois : tous les jours. Au singulier, tout le ou toute la mesurent un seul moment, en entier : toute la journée. Un nombre après les donne un rythme : tous les deux jours, un jour sur deux. ${Cap(JOURS_REF)} : « ${A108_REFRAME} » En français : « ${A108_REFRAME_FR} » EN: plural counts, singular measures, a number gives a rhythm.`),
    table('sheet-temps-table', 'Le temps avec tout', ['Fréquence', 'Durée'], [
      ['tous les jours', 'toute la journée'],
      ['tous les matins', 'toute la matinée'],
      ['toutes les nuits', 'toute la nuit'],
      ['toutes les semaines', 'toute la semaine'],
      ['tous les ans', "toute l'année"],
      ['tous les étés', "tout l'été"],
      ['tous les deux jours (un sur deux)', 'tout le mois'],
      ['toutes les dix minutes', "tout l'après-midi"],
    ]),
  ]),
  sheet('sheet-pronom', 'Tout, tous, toutes : pronoms', ['tout, everything', 'tous [toos], toutes', 'la place'], [
    teach('sheet-pronom-tout', 'Tout, everything',
      "Tout, sans nom après lui, veut dire toutes les choses. Il ne change jamais et le verbe reste au singulier : tout est prêt, tout va bien, j'ai tout. EN: pronoun tout is invariable and takes a singular verb."),
    teach('sheet-pronom-tous', 'Tous et toutes, pour les gens',
      `Tous et toutes reprennent un groupe déjà nommé, souvent des gens : les voisins sont tous là, mes sœurs sont toutes venues. Le s de tous pronom se prononce : [toos]. ${Cap(MUETTES_REF)} : « ${S06_REFRAME} » En français : « ${S06_REFRAME_FR} » EN: pronoun tous sounds its s; toutes is always [toot].`),
    table('sheet-pronom-place', 'Où va le pronom', ['Structure', 'Exemple'], [
      ['présent : verbe + tout', 'Je comprends tout.'],
      ['présent : verbe + tous', 'Les voisins sont tous là.'],
      ['passé composé : auxiliaire + tout + participe', "J'ai tout compris."],
      ['passé composé : auxiliaire + tous + participe', 'Ils sont tous partis.'],
      ['avec un pronom : les + auxiliaire + tous', 'Je les ai tous vus.'],
      ['infinitif : tout + infinitif', 'Je vais tout ranger.'],
      ['sujet : tous + verbe au pluriel', "Tous sont d'accord."],
      ['après à ou pour', 'Merci à tous. Merci pour tout.'],
    ]),
  ]),
  sheet('sheet-adverbe', "Tout, l'adverbe", ['complètement', "l'exception"], [
    teach('sheet-adverbe-teach', 'Complètement, et une exception',
      "Devant un adjectif ou un adverbe, tout veut dire complètement, très. Il ne change pas, sauf devant un adjectif féminin qui commence par une consonne ou un h aspiré : toute seule, toutes contentes, toute honteuse. Au féminin pluriel, toutes contentes peut aussi vouloir dire chacune est contente : le contexte décide. EN: invariable except before a feminine adjective starting with a consonant sound."),
    table('sheet-adverbe-table', "L'accord de l'adverbe", ['Adjectif', 'Tout', 'Exemple'], [
      ['masculin', 'tout', 'Le frigo est tout neuf.'],
      ['masculin pluriel', 'tout', 'Les murs sont tout blancs.'],
      ['féminin, voyelle', 'tout', 'Elle est tout heureuse.'],
      ['féminin, h muet', 'tout', 'La ville tout entière dormait.'],
      ['féminin, consonne', 'toute', 'Elle est partie toute seule.'],
      ['féminin, h aspiré', 'toute', 'Elle est toute honteuse.'],
      ['féminin pluriel, consonne', 'toutes', 'Les petites sont toutes contentes.'],
      ['devant un adverbe', 'tout', 'Il habite tout près.'],
    ]),
  ]),
  sheet('sheet-expressions', 'Expressions et message', ['les expressions figées', 'tout le monde', 'tout ce qui', 'le message'], [
    table('sheet-expressions-table', 'Les expressions avec tout', ['Expression', 'Sens', 'Exemple'], [
      ['tout à fait', 'absolutely', 'Tu as tout à fait raison.'],
      ["tout à l'heure", 'a moment ago, in a moment', "Je te rappelle tout à l'heure."],
      ['tout de suite', 'right away', 'Viens tout de suite.'],
      ['tout à coup', 'suddenly', "Tout à coup, le frigo s'est arrêté."],
      ['en tout cas', 'in any case', "En tout cas, merci d'être venu."],
      ['malgré tout', 'all the same', 'On a déménagé malgré tout.'],
      ['de toute façon', 'anyway', "De toute façon, on n'a pas le choix."],
      ['après tout', 'after all', "Après tout, ce n'est qu'un appartement."],
      ['tout le temps', 'all the time', 'Le chien aboie tout le temps.'],
      ['tout de même', 'all the same', "C'est tout de même un peu cher."],
    ]),
    teach('sheet-expressions-monde', 'Tout le monde, tous les deux',
      "Tout le monde veut dire everybody, avec un verbe au singulier : tout le monde est là. Pour the whole world, dis le monde entier. Tous les deux, sans nom après, veut dire both ; toutes les trois, all three. EN: everybody, singular verb; both is tous les deux."),
    teach('sheet-expressions-ailleurs', 'Ce que d’autres leçons te donnent',
      `Tout ce qui, tout ce que : ${CE_QUI_REF}, qui dit : « ${B113_REFRAME} » Tout ce qui brille n'est pas or. Pas du tout, plus du tout : ${NEGATION_AV_REF}. EN: tout ce qui and pas du tout belong to other lessons.`),
    table('sheet-expressions-message', 'Relire ton message', ['À vérifier', 'Comment'], [
      ['Chaque tout devant un nom', 'regarde le genre et le nombre du nom'],
      ['Fois ou durée', 'tous les jours ou toute la journée'],
      ['Tout pour les choses', 'tout est prêt, au singulier'],
      ['Tous pour les gens', 'merci à tous, vous êtes tous invités'],
      ['La place', "j'ai tout réservé, ils sont tous venus"],
      ['Qui fait quoi', 'tous les deux, toute l’équipe, chacun'],
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
  { id: 'd-mot', title: 'Un jour ou chaque jour', format: 'sort' as const, coach: "Deux piles : un seul moment en entier, ou des fois qui se répètent. EN: sort one whole stretch from repeated times.", buckets: ['un moment entier', 'des fois qui reviennent'], items: [E(1000), E(1001), E(1035), E(1034), E(1042), E(1043)], audio: AUDIO },
  { id: 'd-accord', title: 'Le nom décide', format: 'mcq' as const, coach: "Regarde le nom, puis choisis tout, toute, tous ou toutes. EN: look at the noun first.", q: '... les assiettes sont fragiles.', opts: ['Tous', 'Toutes'], correct: 1, why: "assiettes, féminin pluriel : toutes. EN: toutes.", items: [E(1016), E(1017), E(1018), E(1019), E(1029), E(1030)], audio: AUDIO },
  { id: 'd-temps', title: 'Compter ou mesurer', format: 'sort' as const, coach: "Deux piles : la fréquence et la durée. EN: frequency or duration.", buckets: ['la fréquence', 'la durée'], items: [E(1034), E(1035), E(1037), E(1044), E(1039), E(1047)], audio: AUDIO },
  { id: 'd-tout-un', title: 'Tout, en tête', format: 'mcq' as const, coach: "Tout passe devant un, ce, mon, et devant rien dans les avis. EN: tout comes first.", q: "J'ai passé ... journée à emballer.", opts: ['toute une', 'une toute'], correct: 0, why: "Tout d'abord : toute une. EN: toute une.", items: [E(1054), E(1055), E(1057), E(1059), E(1064), E(1069)], audio: AUDIO },
  { id: 'd-pronom', title: 'Tout, un bloc', format: 'mcq' as const, coach: "Tout, pour les choses, avec un verbe au singulier. EN: tout, singular.", q: 'Tout ... emballé.', opts: ['est', 'sont'], correct: 0, why: "Singulier. EN: est.", items: [E(1071), E(1072), E(1074), E(1076), E(1079), E(1086)], audio: AUDIO },
  { id: 'd-son', title: '[too] ou [toos]', format: 'sort' as const, coach: "Deux piles : le s muet devant un nom, le s qui sonne quand tous est seul. EN: silent s or sounded s.", buckets: ['[too]', '[toos]'], items: [E(1095), E(1094), E(1101), E(1102), E(1057), E(1089)], audio: AUDIO },
  { id: 'd-place', title: 'Au milieu', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute : tout ou tous entre l'auxiliaire et le participe. EN: read each aloud.", items: [E(1106), E(1107), E(1108), E(1110), E(1111), E(1114)], audio: AUDIO },
  { id: 'd-adverbe', title: 'Tout ou toute', format: 'mcq' as const, coach: "Toute seulement devant un féminin qui commence par une consonne. EN: toute only before a feminine consonant.", q: 'Elle est ... heureuse.', opts: ['toute', 'tout'], correct: 1, why: "Voyelle : tout. EN: tout.", items: [E(1123), E(1124), E(1125), E(1126), E(1129), E(1130)], audio: AUDIO },
  { id: 'd-bloc', title: 'Les blocs', format: 'flashcard' as const, coach: "Lis chaque bloc à voix haute, sans le changer. EN: read each block aloud, unchanged.", items: [E(1141), E(1142), E(1144), E(1145), E(1146), E(1147)], audio: AUDIO },
  { id: 'd-monde', title: 'Un groupe, un verbe', format: 'mcq' as const, coach: "Tout le monde se conjugue comme il. EN: like il.", q: 'Tout le monde ... là.', opts: ['est', 'sont'], correct: 0, why: "Singulier. EN: est.", items: [E(1160), E(1161), E(1162), E(1164), E(1170), E(1172)], audio: AUDIO },
  { id: 'd-message', title: 'Un message clair', format: 'flashcard' as const, coach: "Lis chaque phrase et dis quel groupe tout couvre. EN: say which group each tout covers.", items: [E(1176), E(1177), E(1178), E(1182), E(1186), E(1188)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'all-mot-a-mot', description: 'Translates all and every word for word, so all day becomes tous les jours and a single whole day turns into a repeated one.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-mot', retest: 'd-mot' },
  { id: 'accord-oublie', description: 'Leaves tout unchanged before a feminine or plural noun, as English all never changes, especially where l’ or les hides the gender.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-accord', retest: 'd-accord' },
  { id: 'frequence-duree', description: 'Uses tous les + time where one whole stretch is meant, or toute la + time for a repeated event, or reads tous les deux jours as both days.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-temps', retest: 'd-temps' },
  { id: 'ordre-article', description: 'Puts the article before tout (une toute journée), mis-agrees tout through a possessive or demonstrative, or adds an article to the tout of notices.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-tout-un', retest: 'd-tout-un' },
  { id: 'tout-pluriel', description: 'Gives pronoun tout a plural verb or adjective, or uses tous for things, because everything feels plural.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-pronom', retest: 'd-pronom' },
  { id: 's-muet-pronom', description: 'Says pronoun tous as [tu], or sounds the s of determiner tous, and uses tous for a group of women.', detectOn: ['a6-construire', 'a6-piege', 'a6-check'], drill: 'd-son', retest: 'd-son' },
  { id: 'place-apres', description: 'Puts tout or tous after the participle or after the infinitive, following the English word order of everything.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-place', retest: 'd-place' },
  { id: 'adverbe-accord', description: 'Agrees adverb tout before a masculine, vowel-initial or adverb, or leaves it unchanged before a feminine adjective starting with a consonant.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-adverbe', retest: 'd-adverbe' },
  { id: 'bloc-accorde', description: 'Makes a fixed expression agree or pluralises it (toute à l’heure, tous à fait, tout les temps).', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-bloc', retest: 'd-bloc' },
  { id: 'monde-pluriel', description: 'Gives tout le monde a plural verb, uses it for the whole world, or says les deux for both.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check', 'a11-mission'], drill: 'd-monde', retest: 'd-monde' },
  { id: 'message-flou', description: 'Writes an organising message where tout is vague or mis-agreed, with no timing and no who-does-what, so the group cannot act on it.', detectOn: ['a11-lecture', 'a11-cheat', 'a11-mission'], drill: 'd-message', retest: 'd-message' },
];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-23-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-23-juillet': "The moving-day text (act 1), ONE VOICE, one take, Québécoise, read like someone telling a friend about the first of July: amused, a little tired. Every tout is audible and unstressed. « ils étaient tous fatigués » has the pronoun s: [tus]. « tous les voisins » and « tous les cartons » do NOT: [tu].",
  'rec-b1-23-liste': "Luc and the learner (act 2), two voices: Luc, a Liège voice, relaxed; the learner, calm. The learner's three answers each open with a form of tout; « Toute la cuisine » has an audible final t before la, « Tous les livres » a silent s.",
  'rec-b1-23-formes': "The four-form cards. Read at the same pace and melody so the learner hears that tout and tous sound alike [tu] and toute and toutes sound alike [tut]. The liaison in « toutes les assiettes » is on les (lay-za), never on toutes.",
  'rec-b1-23-temps-ecoute': "REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The learner is listening for singular against plural (la journée / les jours), so give no extra weight to either: the article is the cue. « tous les deux jours » is one group, no pause after tous.",
  'rec-b1-23-temps': "The four time cards, one voice, plain delivery. Card four (« tous les samedis ») is read exactly as a2-level learners heard it: [tu le sam.di], silent s.",
  'rec-b1-23-piege-temps': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-23-conditions': "The removal company's conditions (act 4), ONE VOICE, one take, Québécois, read like a recorded phone message: brisk, neutral, a little official. « Tout retard », « Toute boîte », « Tout objet » get ordinary weight: no emphasis on tout.",
  'rec-b1-23-tout-un': "The four cards of act 4. « tout un camion » is [tu.tœ̃] with the t carried over; « toute une » is [tu.tyn]. Card four is read like a line from a notice.",
  'rec-b1-23-fatou': "Fatou and the learner (act 5), two voices: Fatou, a warm Dakar voice in her forties, Senegalese French welcome; the learner, relaxed. « Tout est emballé » runs as [tu.tɛ.tɑ̃.ba.le] with both liaisons.",
  'rec-b1-23-pronom': "The four pronoun cards, one voice. Card four is the a2-level restaurant line, read as a customer finishing an order: « Ce sera tout pour moi, merci. »",
  'rec-b1-23-piege-pronom': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-23-tus-ecoute': "REQUIRED FOR THE EAR MISSION (act 6), THE MOST IMPORTANT TAKE IN THE LESSON: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Pronoun tous is a CLEAR [tus] with the s fully sounded (lines 1, 4, 5, 6, 7); determiner tous is [tu] with NO trace of an s (lines 2, 3, 8). Do not over-articulate the s to help: say it as a native says it, but never swallow it. Lines 1 and 2 use the same words in a different order and must be read with the same melody.",
  'rec-b1-23-tus': "The four sound cards. Card one [tu le vwa.zɛ̃], card two [le vwa.zɛ̃ sɔ̃ tus la], read with identical melody so the ONLY difference is the s. Card three is the single word « tous », [tus], as sons.06 recorded it.",
  'rec-b1-23-piege-tus': "The audio step plays each card's CORRECT sentence, and here the audio IS the lesson: every pronoun tous is [tus], every toutes [tut]. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-23-hugo': "Hugo and the learner (act 7), two voices: Hugo, a Montréal voice, apologetic and cheerful; the learner, tired but amused. « Ils sont tous partis » and « je les ai tous fermés » have the pronoun s [tus]; « j'ai tout compris » has no s.",
  'rec-b1-23-place': "The four placement cards. Read tout and tous inside the verb group with no pause around them: « j'ai tout compris » is one breath.",
  'rec-b1-23-adverbe-ecoute': "REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Lines 1 and 2 are the minimal pair « tout contents » [tu kɔ̃.tɑ̃] and « tous contents » [tus kɔ̃.tɑ̃]: the s is the whole question, so it must be clearly present in line 2 and clearly absent in line 1. « tout heureuse » carries the liaison [tu.tø.ʁøz]; « toute honteuse » has NO liaison (aspirated h).",
  'rec-b1-23-adverbe': "The four adverb cards. Card two carries the liaison [tu.tø.ʁøz]; card three has a clear final t in « toute seule ».",
  'rec-b1-23-piege-adverbe': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-23-lettre': "Josée's letter (act 9), ONE VOICE, one take, Québécoise, read aloud as a letter to a friend: warm, a little exasperated, laughing at the end. Every liaison in the fixed expressions is made: tout à fait [tu.ta.fɛ], tout à l'heure [tu.ta.lœʁ], tout à coup [tu.ta.ku].",
  'rec-b1-23-expressions': "The four expression cards, one voice. Card four is sons.10's « Tout à fait d'accord », read with the same liaison.",
  'rec-b1-23-monde-ecoute': "REQUIRED FOR THE EAR MISSION (act 10): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. « tout le monde est là » is singular with no s anywhere; line 2 (« Les voisins sont tous là ») has the pronoun s [tus]. « toutes les trois » is [tut le tʁwa].",
  'rec-b1-23-monde': "The four group cards. Card two (« le monde entier ») carries the liaison-free link [mɔ̃.dɑ̃.tje]. Keep « tous les deux » as one group.",
  'rec-b1-23-message': "Mireille's message (act 11), ONE VOICE, one take, Québécoise, read the way someone records a voice note for her building's group chat: warm, organised, clear. « je vous invite tous », « on range tous ensemble » and « merci à tous » have the pronoun s [tus]; « tous les deux » and « tous les bienvenus » do not [tu].",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 23',
  intro: "You have been saying tous les jours, tout le monde and tout de suite since A1 without a rule that joins them. Tout is one word with four written forms and three jobs: before a noun it agrees with that noun, on its own it means everything (or, as tous, all of them, with a sounded s), and before an adjective it means completely. This lesson turns the chunks into a system: agreement, counting against measuring time, the pronoun and its place, the adverb's one exception, the fixed expressions, and a message that organises an event.",
  skill: 'PE',
  grammarAssumed: [
    JOURS_UNIT, ROUTINE_UNIT, SALUTATIONS_UNIT, RESTAURANT_UNIT, TRANSPORTS_UNIT, MUETTES_UNIT,
    LIAISON_UNIT, PC_AVOIR_UNIT, PC_ETRE_UNIT, COD_UNIT, CE_QUI_UNIT, NEGATION_AV_UNIT,
  ],
  grammarIntroduced: [
    'tout as a determiner agreeing in gender and number with its noun: tout le, toute la, tous les, toutes les, including behind an elided l’',
    'tout before a possessive, a demonstrative and un: tous mes, toute cette, tout un; and tout with no article meaning each, any, in notices (tout retard)',
    'tous les / toutes les plus a plural time word for frequency, including intervals (tous les deux jours), against tout le / toute la plus a singular time word for duration',
    'tout as a pronoun meaning everything, invariable, with a singular verb',
    'tous and toutes as pronouns referring back to a group, with the pronounced final s of pronoun tous',
    'The place of tout and tous between the auxiliary and the participle in compound tenses, and of tout before an infinitive',
    'tout as an adverb meaning completely, invariable except before a feminine adjective beginning with a consonant or an aspirated h',
    'The fixed expressions tout à fait, tout à l’heure, tout de suite, tout à coup, en tout cas, malgré tout, de toute façon, après tout, tout le temps, tout de même',
    'tout le monde with a singular verb and its contrast with le monde entier; tous les deux and toutes les trois meaning both and all three',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu dis tous les jours, tout le monde et tout de suite depuis le A1, sans règle pour les relier. Tout est un seul mot, avec quatre formes écrites et trois rôles : devant un nom, il s'accorde ; seul, il veut dire tout ou tous ; devant un adjectif, il veut dire complètement. Cette leçon transforme les morceaux en système, jusqu'à un message qui organise une fête.",
    minutes: 130,
    difficulty: 3,
    glyph: 'tout',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: TOUT_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 2,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (build log, 2026-09-25). Kept, as every other B1 lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, JUILLET_TEXT, CONDITIONS_TEXT, LETTRE_TEXT, MESSAGE_TEXT, dicteeFor };
