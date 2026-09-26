// b1.30.l1 « La coordination » : the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]` and the validators run on `LESSON` itself, as b1.18 to
// b1.24 do.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading / listening), name
//   (cardDeck, examples, tapTable), build (groupDrill, gated), choose (a
//   drill where the LINK picks the word), trap (trapDrill stepped or
//   commonErrors), check (gated control pages before the checkpoint).
//
//    1  Le message qui ne tient pas   7   et everywhere hides the link
//    2  Mais où est donc Ornicar      8   the seven and what each links
//    3  Et, ou, et la virgule         8   list comma, ou bien, et/ou
//    4  Mais                          8   oppose, correct, non seulement
//    5  Donc, alors, et le so anglais 7   consequence; so = si/tellement
//    6  Car                           7   written, after a comma; parce que contrast
//    7  Or et ni                      7   or for recognition; ni, sans ... ni
//    8  Ajouter et préciser           8   en plus, de plus, en effet, c'est-à-dire
//    9  Sinon, et pourtant            7   sinon; pourtant/cependant recognition
//   10  Ne pas tout répéter           8   mais pas, et moi aussi, lui non plus
//   11  Expliquer une décision       11   model, plan, role play, TASK, quiz
//
//   TOTAL 86 missions, 11 acts, 474 estimated screens. Corpus: 185 authored
//   rows (.1000-.1184) plus 21 reused seed rows, 206 item ids in all, 201 of
//   them released act by act through `deckTranche` (the other 5 have no
//   flashcard drill, NOT_DECK_ABLE). Quiz: 11 rounds of 8 (35 mcq, 22
//   typeIn, 20 errorSpot, 11 listenChoose). Eleven error triggers, eleven
//   drills, five reference sheets reached from 19 missions by `sheetId`,
//   eleven terms. Three tapTables (acts 2, 5, 8). Chapter artwork:
//   `coordination-image-prompts.md`, 11 prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un connecteur ne relie pas seulement : il dit le lien. »
//   EN: A connector does not just join: it says what the link is.
//
//   ONE METAPHOR, THE COUPLING between railway carriages: every joint is a
//   different kind of link. It is NOT « connectors are glue »: glue has no
//   direction, and that is exactly the act 1 failure (et everywhere) and the
//   act 5 failure (donc at every sentence start, claiming links that are not
//   there). Rejected candidates are in the corpus, REFRAME_REJECTED.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the seven coordinating conjunctions as a system (no A1 or A2
//           lesson names et, mais or ou as such, measured 2026-09-26); list
//           punctuation; mais for correction and non seulement ... mais;
//           donc against alors, and the so of intensity (si, tellement); car
//           as written cause; or for recognition; en plus, de plus, en
//           effet, c'est-à-dire, sinon; ellipsis after et and mais.
//   QUOTES  a1.20's reframe (« Your word, then est-ce que ») with the
//           French rendering, beside parce que; a2.27's (« Find the joints »)
//           for puis and ensuite; b1.20's (« Ne ouvre un vide ... ») for ni
//           ... ni and non plus. sons.10 is cited for « et never links ».
//   LEAVES  parce que and all subordination to b1.31 (quand, si, alors que;
//           b1.10 for si); pourtant, cependant and concession to b1.32
//           (recognition only here, never a typeIn); puis, ensuite,
//           d'abord, finalement as narrative order to b1.03 and a2.27; ni ...
//           ni as negation to b1.20; connectors as reading signposts (en
//           revanche, par ailleurs, bref) to b1.37. No authored French string
//           uses a subjunctive.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (the agent and the notice say « vous »). Every learner
//   surface that explains something carries English (`en`, or a final
//   « EN: »), and NO ANSWER ever does. Every `say` is French, spoken fr-FR.
//   Theme `connecteurs-logiques`, existing (corpus §A.1), block .1000-.1199.
//   A1 and A2 citations use the English trail label; b1.* ones are French
//   from the plan. Setting: Montréal first (the Geneva decision), with
//   Liège, Abidjan, Lausanne, Lyon and Québec City; characters recur only
//   inside this lesson. The quiz's answer slots are spread by spreadSlots()
//   (options rotated WITH the index); mission slots were permuted by hand.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. No A1 or A2 lesson teaches et, mais, ou as a system; b1.30 names them
//      for the first time at B1. Is that acceptable, or should an A2 unit
//      have owned the basic three?
//   2. or is RECOGNITION only (read, chosen in checks, never typed). Keep it
//      at that for B1?
//   3. pourtant and cependant appear here for recognition with a pointer to
//      b1.32. b1.32 should cite this lesson rather than re-introduce them.
//   4. THREE tapTables (acts 2, 5, 8), one per act. Confirm, as for every
//      other B1 lesson.
//   5. At least 17 published `fr.b1.connecteurs-logiques` rows are DB-only
//      twins of authored rows (corpus DB_ONLY_TWINS). Dedupe at import or
//      keep both?
//   6. The scene's two-link sentence is .1184, numbered after act 11's
//      block because it was added last. Renumber at import, or leave?
//   7. The quiz uses a runtime spreadSlots() rotation to meet quiz-spread;
//      the authored order in the source is not the rendered order (the
//      renderer reshuffles anyway). Acceptable, or bake the rotation in?
//   8. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  DECISION_TEXT, AVIS_TEXT, LETTRE_TEXT, MESSAGE_TEXT, SEPT_MOTS,
  A227_REFRAME, A227_REFRAME_FR, A120_REFRAME, A120_REFRAME_FR, B120_REFRAME,
  INTERROGATIFS_UNIT, LIAISON_UNIT, TRANSPORTS_UNIT, PC_IMPARFAIT_UNIT, NEGATION_AV_UNIT,
  INTERROGATIFS_REF, LIAISON_REF, TRANSPORTS_REF, PC_IMPARFAIT_REF, NEGATION_AV_REF,
  SUBORDINATION_REF, CONCESSION_REF, LECTURE_REF,
} from './coordination-corpus.ts';
import { COORDINATION_TERMS } from './coordination-terms.ts';

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

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.30: no item ${id}`);
  return r;
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.30: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.30: no respell on ${id}`);
  return `[${r.respell}]`;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A listening line copied from its row. */
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
/** An examples row copied from its row. */
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
/** A useCases row copied from its row. */
const uc = (situation: string, id: string) => ({ situation, fr: src(id).fr, en: src(id).en });
const fr = (id: string) => src(id).fr;
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 · LE MESSAGE QUI NE TIENT PAS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Three true ideas joined by « et » three times: Mathieu guesses the
 *  link, and guesses wrong. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const WRONG_ET = 'Le salaire est bon et je reste à Montréal et ma mère est malade.';
const WRONG_ET_IPA = '/lə sa.lɛʁ ɛ bɔ̃ e ʒə ʁɛst a mɔ̃.ʁe.al e ma mɛʁ ɛ ma.lad/';
const WRONG_ET_RS = '[luh sa-LEHR eh BOHⁿ | ay zhuh rehst a mohⁿ-ray-AL | ay ma mehr eh ma-LAD]';
const WRONG_ET_EN = 'The salary is good and I am staying in Montréal and my mother is ill.';

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Trois et pour une décision',
  frSub: 'Un lundi matin, au bureau',
  setting: { place: 'Un bureau ouvert, boulevard Saint-Laurent', city: 'Montréal', time: '8 h 45', ambience: 'des écrans, une machine à café, la neige derrière les fenêtres' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, un lundi matin. La direction t'a proposé un poste à Genève pour deux ans, et tu as dit non. Ton collègue Mathieu arrive avec deux cafés.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mathieu',
      fr: 'Il paraît que tu refuses Genève. Raconte-moi.',
      en: 'I hear you are turning down Geneva. Tell me about it.',
      respell: '[eel pa-REH kuh tü ruh-füz zhuh-NEHV | ra-kohⁿt-MWA]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: WRONG_ET, en: WRONG_ET_EN, respell: WRONG_ET_RS,
      stage: 'Trois idées justes, trois fois et. Pour toi, le lien entre elles est évident.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mathieu',
      fr: 'Ah, tu restes pour le salaire. Montréal paie mieux, alors.',
      en: 'Oh, you are staying for the money. Montréal pays better, then.',
      respell: '[a | tü rehst poor luh sa-LEHR | mohⁿ-ray-al peh MYEU | a-LOR]',
      stage: 'Il a entendu : le salaire est bon, donc tu restes.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Ce n'est pas du tout ça. Genève paie mieux. Tu restes malgré le salaire, à cause de ta mère. Tes trois et n'ont rien dit de tout ça.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase dit vraiment ta décision ?',
      size: 'lg',
      options: [
        { fr: WRONG_ET, respell: WRONG_ET_RS, en: WRONG_ET_EN, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1184)), respell: rsOf(E(1184)), en: src(E(1184)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Mathieu pose son café. Ta mère d'abord, il comprend. Il te propose de relire ton message à la direction.",
        breaks: "Mathieu raconte à l'équipe que Montréal paie mieux que Genève. À midi, trois collègues veulent une augmentation.",
      },
    },
    {
      kind: 'break',
      heading: 'Et relie, mais il ne dit rien',
      body: "Tes trois idées étaient justes. Mais et les pose côte à côte sans dire le lien : Mathieu a deviné, et mal. mais dit le contraste, car dit la raison. EN: et puts ideas side by side; mais and car say how they connect.",
      wrong: { fr: WRONG_ET, ipa: WRONG_ET_IPA, respell: WRONG_ET_RS, en: WRONG_ET_EN },
      right: { fr: fr(E(1184)), ipa: ipaOf(E(1184)), respell: rsOf(E(1184)), en: src(E(1184)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Mathieu a compris. Il reste le message à la direction, et cette fois chaque lien devra être le bon.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Choisir le lien juste', s: 'Actes 2 à 4 : les sept mots, et, ou, la virgule, mais' },
    { t: 'Expliquer et conclure', s: 'Actes 5 à 7 : donc, alors, car, or, ni' },
    { t: 'Ajouter, préciser, alléger', s: 'Actes 8 à 10 : en plus, en effet, c’est-à-dire, sinon, l’ellipse' },
    { t: 'Écrire un message qui tient', s: 'Acte 11 : expliquer une décision en 100 mots' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the decision told well. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courriel de Camille',
  frSub: 'Lis, et regarde les petits mots entre les idées',
  text: DECISION_TEXT,
  glossary: [
    { word: 'la direction', en: 'management', note: "Les personnes qui dirigent l'entreprise." },
    { word: 'passionnant', en: 'fascinating, exciting', note: 'Très intéressant.' },
    { word: 'demandé conseil', en: 'asked for advice', note: "Demander à quelqu'un ce qu'il ferait." },
    { word: 'joignable', en: 'reachable', note: 'On peut te contacter.' },
    { word: 'dossiers', en: 'files, projects', note: 'Les projets dont tu t’occupes au travail.' },
  ],
  questions: [
    { q: 'Pourquoi Camille a-t-elle hésité ?', a: "Le poste a des avantages, « mais la ville est chère et je ne connais personne ». mais tourne la phrase vers les inconvénients." },
    { q: "Qu'est-ce qui a changé la situation pour les enfants ?", a: "« Or, l'école internationale accepte les élèves en janvier. » or apporte le fait nouveau qui change tout." },
    { q: 'Pourquoi a-t-elle accepté ?', a: "« car c'est une chance rare ». car donne la raison, après la décision." },
    { q: 'Que veut dire « au milieu de l’année » ici ?', a: "C'est janvier, dit autrement : « c'est-à-dire » précise ce qui vient d'être dit." },
    { q: 'Combien de fois trouves-tu et ?', a: "Cinq fois : et ajoute, mais il ne porte jamais seul la décision. Les mots qui font avancer le texte sont mais, donc, or et car." },
  ],
  audio: REC('rec-b1-30-camille'),
  say: REFRAME,
  terms: ['connecteur'],
};

/** BUILD, on the text just read: sort the links by what they do. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Quel lien entre les deux idées',
  groups: [
    grp('La suite va contre, ou la suite vient de', [
      it(E(1000), 'mais : on attendait autre chose'),
      it(E(1009), 'mais : un défaut après une qualité'),
      it(E(1004), 'donc : la conséquence'),
      it(E(1011), 'donc : ce qui en découle'),
    ], chk(
      '« Ma mère est malade, donc je ne peux pas partir. » Que dit donc ?',
      ['la raison', 'la conséquence', 'un contraste'], 1,
      "La maladie d'abord, puis ce qui en découle. EN: donc introduces the consequence.")),
    grp('La raison, le choix, le fait nouveau', [
      it(E(1001), 'car : la raison, après'),
      it(E(1003), 'ou : deux possibilités'),
      it(E(1006), 'or : un fait qui change tout'),
      it(E(1005), 'ni ... ni : deux refus'),
    ], chk(
      '« Je reste à Montréal, car ma mère est malade. » Que dit car ?',
      ['la raison', 'la conséquence'], 0,
      "car explique ce qui vient d'être dit. EN: car gives the reason."),
    ),
    ctl('Et, tout seul', '« Le poste est intéressant et l’équipe est sympathique. » Que fait et ?',
      ['il oppose', 'il explique', 'il ajoute'], 2,
      "et pose une idée de plus à côté de l'autre, sans rien dire d'autre. EN: et only adds."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur'],
};

const A1_PAIRES: Sec<'examples'> = {
  type: 'examples',
  id: 'a1-paires',
  layer: 'core',
  sheetId: 'sheet-sept',
  title: 'Les mêmes idées, un autre lien',
  examples: [
    ex(E(1002), 'et : deux qualités, côte à côte.'),
    ex(E(1009), 'mais : une qualité, puis un défaut.'),
    ex(E(1001), 'car : la décision, puis sa raison.'),
    ex(E(1004), 'donc : la raison, puis la décision.'),
    ex('fr.a2.marche.119', 'mais : goûter sans acheter, deux faits qui vont en sens contraire.'),
    ex(E(1008), 'et : deux étapes qui se suivent.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur', 'sept'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où le mauvais lien coûte quelque chose',
  cases: [
    uc('Tu expliques un refus à un collègue', E(1184)),
    uc('Tu préviens ton chef que tu ne peux pas partir', E(1004)),
    uc('Tu remercies pour une offre que tu refuses', E(1010)),
    uc('Tu annonces une décision réfléchie', E(1008)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le lien', 'Tu restes malgré un bon salaire. Quel mot relie les deux idées ?',
    ['mais', 'et'], 0,
    "Le salaire pousse à partir, toi tu restes : c'est un contraste. EN: a contrast needs mais."),
  ctl('La raison', "« Je reste à Montréal, ... ma mère est malade. »",
    ['donc', 'car', 'ou'], 1,
    "La maladie explique la décision : car. EN: the reason takes car."),
  ctl('Et', 'Pourquoi Mathieu a-t-il mal compris ?',
    ['et ne dit pas le lien entre les idées', 'tes phrases étaient fausses'], 0,
    "Tes idées étaient justes ; c'est le lien qui manquait. EN: the ideas were right, the link was missing."),
], ['connecteur']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le message qui ne tient pas',
    opener: {
      line: "Trois idées justes et trois fois et, et ton collègue comprend le contraire : ici tu découvres que le lien fait le sens. EN: Three true ideas, three ands, and your colleague understands the opposite: here you find that the link makes the meaning.",
      imageRef: 'lessons/coordination/act01.jpg',
    },
    sections: [],
    milestone: "Tu reconnais le lien que dit chaque connecteur, et tu sais que et ne dit presque rien. EN: You can tell what link each connector names, and you know et says almost nothing.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_PAIRES, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 · MAIS OÙ EST DONC ORNICAR
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Le souper du dimanche',
  frSub: 'Karim organise, à Liège',
  setting: "Liège, un dimanche. Karim organise un souper pour ses parents. Sa sœur Nadia l'aide au téléphone, et chaque réponse a son petit mot.",
  bubbles: [
    { from: 'narrator', fr: 'Karim fait la liste. Nadia répond à tout.', en: 'Karim makes the list. Nadia answers everything.' },
    { from: 'coach', fr: 'Pour le dessert, je peux faire une tarte ou un gâteau.', en: 'For dessert, I can make a tart or a cake.' },
    { from: 'user', fr: fr(E(1029)), en: src(E(1029)).en, warn: 'et : deux actions de plus' },
    { from: 'coach', fr: 'Papa aime le poisson, mais maman préfère la viande.', en: 'Dad likes fish, but Mum prefers meat.' },
    { from: 'user', fr: fr(E(1032)), en: src(E(1032)).en, warn: 'donc : la conséquence' },
    { from: 'coach', fr: 'Je prends le train, car ma voiture est au garage.', en: 'I am taking the train, as my car is at the garage.' },
    { from: 'user', fr: fr(E(1026)), en: src(E(1026)).en, warn: 'ni ... ni : deux refus' },
    { from: 'narrator', fr: 'Six petits mots, et aucun ne dit la même chose.', en: 'Six little words, and no two say the same thing.' },
  ],
  closing: { fr: 'Ou, et, mais, donc, car, ni : chacun dit un lien.', en: 'Ou, et, mais, donc, car, ni: each one names a link.' },
  audio: REC('rec-b1-30-souper'),
  say: REFRAME,
  terms: ['sept'],
};

const A2_SEPT: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-sept',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sept',
  title: 'Sept mots, sept liens',
  frSub: 'mais, ou, et, donc, or, ni, car',
  hint: 'Quatre cartes. Regarde ce que chaque mot fait entre les deux idées.',
  audio: REC('rec-b1-30-sept'),
  say: REFRAME,
  terms: ['sept'],
  cards: [
    {
      head: 'Ajouter ou choisir', label: 'et · ou',
      fr: `${fr(E(1021))} · ${fr(E(1022))}`,
      sub: `${rsOf(E(1021))} · ${rsOf(E(1022))}`,
      body: "et met une chose de plus. ou propose un choix entre deux. EN: et adds one more; ou offers a choice.",
    },
    {
      head: 'Changer de direction', label: 'mais',
      fr: fr(E(1023)),
      sub: rsOf(E(1023)),
      body: "Il est fatigué : on attend qu'il s'arrête. mais annonce le contraire. EN: mais announces the opposite of what you expected.",
    },
    {
      head: 'La conséquence ou la raison', label: 'donc · car',
      fr: `${fr(E(1024))} · ${fr(E(1025))}`,
      sub: `${rsOf(E(1024))} · ${rsOf(E(1025))}`,
      body: "Les mêmes deux faits. donc met la pluie d'abord et le bus après ; car met le bus d'abord et sa raison après. EN: donc gives the result, car gives the reason.",
    },
    {
      head: 'Deux refus, un fait nouveau', label: 'ni · or',
      fr: fr(E(1026)),
      sub: rsOf(E(1026)),
      body: `ni relie deux choses niées : ${Cap(NEGATION_AV_REF)} te l'a donné comme négation. or, à l'écrit, apporte un fait qui change le raisonnement. EN: ni joins two negated things; or brings in a fact that changes the argument.`,
    },
  ],
};

/** NAME, as a lookup. Six rows; or is recognition, on the card and the sheet. */
const A2_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-tableau',
  layer: 'core',
  sheetId: 'sheet-sept',
  title: 'Ce que chaque mot relie',
  cols: ['Mot', 'Le lien', 'Exemple'],
  rows: [
    { cells: ['et', 'ajoute', 'le thé et le café'], say: fr(E(1021)),
      detail: { title: 'et', body: "Deux éléments de plus, sans rien dire d'autre. EN: one more thing, nothing else.", say: fr(E(1029)) } },
    { cells: ['ou', 'propose un choix', 'le train ou l’avion'], say: fr(E(1022)),
      detail: { title: 'ou', body: "L'un, l'autre, parfois les deux. EN: one or the other.", say: fr(E(1030)) } },
    { cells: ['mais', 'oppose', 'fatigué, mais il continue'], say: fr(E(1023)),
      detail: { title: 'mais', body: "La suite va contre ce qu'on attendait. EN: what follows goes against expectation.", say: fr(E(1031)) } },
    { cells: ['donc', 'conclut', 'il pleut, donc le bus'], say: fr(E(1024)),
      detail: { title: 'donc', body: "La conséquence vient après. EN: the consequence comes second.", say: fr(E(1032)) } },
    { cells: ['car', 'explique', 'le bus, car il pleut'], say: fr(E(1025)),
      detail: { title: 'car', body: "La raison vient après, surtout à l'écrit. EN: the reason comes second, mostly in writing.", say: fr('fr.a1.cafe.145') } },
    { cells: ['ni', 'nie deux choses', 'ni le bruit ni la foule'], say: fr(E(1026)),
      detail: { title: 'ni', body: "Deux non, reliés, sans pas. EN: two nos, joined, without pas.", say: fr(E(1005)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sept'],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le bon mot entre deux idées',
  groups: [
    grp('Ajouter, choisir, opposer', [
      it(E(1029), 'et : deux actions en même temps'),
      it(E(1030), 'ou : deux moments possibles'),
      it(E(1031), 'mais : un défaut, puis une qualité'),
      it('fr.a2.verbes.405', 'mais : je sais, et pourtant pas aujourd’hui'),
    ], chk(
      '« L’appartement est petit, ... il est lumineux. »',
      ['mais', 'ou'], 0,
      "Petit, c'est un défaut ; lumineux, une qualité : mais. EN: a drawback then a plus: mais.")),
    grp('Conclure ou expliquer', [
      it(E(1032), 'donc : fermé, alors on revient'),
      it('fr.a2.cafe.060', 'donc : la pluie, puis rester dedans'),
      it('fr.a1.cafe.145', 'car : rester dedans, à cause de la pluie'),
      it(E(1025), 'car : le bus, à cause de la pluie'),
    ], chk(
      'Quel mot met la CAUSE après le fait ?',
      ['donc', 'et', 'car'], 2,
      "car : le fait d'abord, puis sa raison. donc fait l'inverse. EN: car puts the cause second.")),
    ctl('Le fait nouveau', "« Tous les candidats parlent anglais. Or, ce poste demande l'espagnol. » Que fait or ?",
      ['il apporte un fait qui change tout', 'il propose un choix'], 0,
      "Ce n'est pas ou : or change l'argument. EN: or is not ou; it turns the argument."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sept'],
};

const A2_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a2-hacks',
  layer: 'core',
  title: 'Trois astuces pour les sept',
  hacks: [
    {
      hack: 'Mais où est donc Ornicar : mais, ou, et, donc, or, ni, car.',
      why: "Les enfants français l'apprennent à l'école. La phrase donne la liste, pas le sens : le sens, c'est le lien. EN: the sentence gives the list, not the meanings.",
    },
    {
      hack: 'Enlève le mot et mets et à sa place.',
      why: "Si la phrase perd son sens, le mot disait quelque chose d'important. C'est souvent le cas avec mais, donc et car. EN: swap in et; if meaning is lost, the word mattered.",
    },
    {
      hack: 'donc regarde en avant, car regarde en arrière.',
      why: "donc part de la cause vers la suite. car part du fait vers sa raison. EN: donc points forward to the result, car back to the reason.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sept'],
};

const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le sens choisit le mot',
  groups: [
    grp('Même faits, autre lien', [
      it(E(1024), 'donc : la pluie, puis le bus'),
      it(E(1025), 'car : le bus, puis la pluie'),
      it(E(1023), 'mais : la fatigue, puis le contraire'),
      it(E(1033), 'mais : tard, et pourtant ouvert'),
    ], chk(
      "« Il pleut, donc je prends le bus. » Dis la même chose avec car.",
      ['Je prends le bus, car il pleut.', 'Il pleut, car je prends le bus.'], 0,
      "Avec car, la raison passe derrière : le bus, car il pleut. EN: with car the reason comes second.")),
    grp('Un choix ou deux refus', [
      it(E(1022), 'ou : l’un ou l’autre'),
      it(E(1030), 'ou : deux moments'),
      it(E(1026), 'ni : ni l’un ni l’autre'),
      it(E(1005), 'ni : deux refus à la fois'),
    ], chk(
      'Tu ne veux ni le train ni l’avion. Que dis-tu ?',
      ["Je ne veux ni le train ni l'avion.", "Je veux le train ou l'avion."], 0,
      "Deux refus : ni ... ni. ou garde les deux possibles. EN: two refusals take ni ... ni."),
    ),
    ctl('Le choix du sens', 'Le magasin est ouvert, même s’il est tard. Quel mot ?',
      ['donc', 'car', 'mais'], 2,
      "Tard, on attend fermé ; il est ouvert : c'est un contraste. EN: a contrast takes mais."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sept', 'connecteur'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre liens mal choisis',
  errors: [
    {
      wrong: 'Il pleut, car je prends le bus.',
      right: fr(E(1024)),
      why: "En anglais, because et so se ressemblent dans ta tête. Mais ici, la pluie n'est pas causée par le bus. donc pour la suite, car pour la raison. EN: the rain is not caused by the bus.",
    },
    {
      wrong: "L'appartement est petit, et il est lumineux.",
      right: fr(E(1031)),
      why: "Ce n'est pas faux, mais et cache le contraste : un défaut puis une qualité, c'est mais. EN: et hides the contrast.",
    },
    {
      wrong: 'Tu préfères le train or l’avion ?',
      right: fr(E(1022)),
      why: "L'anglais or se dit ou. Le or français est un autre mot, pour les raisonnements écrits. EN: English or is ou; French or is something else.",
    },
    {
      wrong: "Je n'aime pas le bruit et pas la foule.",
      right: fr(E(1026)),
      why: "On comprend, mais pour deux refus reliés, le français a ni ... ni. EN: two linked refusals take ni ... ni.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sept'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La liste', 'Quels sont les sept mots ?',
    ['mais, ou, et, donc, or, ni, car', 'mais, ou, et, puis, or, ni, car'], 0,
    "puis est un adverbe d'ordre, pas une des sept conjonctions. EN: puis is not one of the seven."),
  ctl('Le sens de or', 'L’anglais « or » se dit...',
    ['or', 'ou'], 1,
    "or, en français, est un mot d'argument. EN: the choice word is ou."),
  ctl('Donc ou car', "« Je reste à la maison, ... je suis malade. »",
    ['donc', 'ou', 'car'], 2,
    "La maladie est la raison : car. EN: the reason takes car."),
], ['sept']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Mais où est donc Ornicar',
    opener: {
      line: "Une phrase d'enfant donne sept petits mots : ici tu apprends ce que chacun dit entre deux idées. EN: A children's sentence gives seven small words: here you learn what each one says between two ideas.",
      imageRef: 'lessons/coordination/act02.jpg',
    },
    sections: [],
    milestone: "Tu connais les sept conjonctions et tu choisis la bonne selon le lien. EN: You know the seven conjunctions and pick the right one for the link.",
    estScreens: 34, restPoints: ['a2-tableau'],
  },
  sections: [A2_HISTOIRE, A2_SEPT, A2_TABLEAU, A2_CONSTRUIRE, A2_HACKS, A2_CHOISIR, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 · ET, OU, ET LA VIRGULE
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Et, ou, et les pauses',
  frSub: 'Écoute les listes',
  lines: [
    ln(E(1034)), ln(E(1037)), ln(E(1035)), ln(E(1038)),
    ln(E(1036)), ln(E(1046)), ln(E(1041)), ln(E(1049)),
  ],
  questions: [
    { q: "Première phrase : combien de choses as-tu achetées ?", opts: ['deux', 'trois'], correct: 1, why: "Du pain, du fromage et des fruits : deux pauses, un et. EN: three things, one et." },
    { q: 'Deuxième phrase : dois-tu payer par carte ET en espèces ?', opts: ['Non, l’un ou l’autre.', 'Oui, les deux.'], correct: 0, why: "ou propose un choix. EN: ou means either one." },
    { q: 'Combien de fois entends-tu et dans la troisième phrase ?', opts: ['une fois', 'trois fois', 'deux fois'], correct: 0, why: "Une seule fois, devant le dernier élément. EN: once, before the last item." },
    { q: 'Sixième phrase : « ou ... ou » veut dire...', opts: ['les deux à la fois', 'il faut choisir'], correct: 1, why: "ou tu viens, ou tu restes : pas les deux. EN: either this or that." },
    { q: 'Dernière phrase : combien d’actions ?', opts: ['deux', 'quatre', 'trois'], correct: 2, why: "Manger, boire, rire : trois, et un seul et. EN: three actions, one et." },
  ],
  audio: REC('rec-b1-30-listes-ecoute'),
  say: REFRAME,
  terms: ['virgule'],
};

const A3_LISTE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-liste',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-liste',
  title: 'La liste française',
  frSub: 'des virgules, puis et',
  hint: 'Quatre cartes. Compte les et.',
  audio: REC('rec-b1-30-liste'),
  say: REFRAME,
  terms: ['virgule'],
  cards: [
    {
      head: 'Un seul et, devant le dernier', label: 'la liste',
      fr: fr(E(1034)),
      sub: rsOf(E(1034)),
      body: "Des virgules entre les éléments, puis et devant le dernier. Pas de virgule devant ce et. EN: commas between items, et before the last, no comma before et.",
    },
    {
      head: 'Un choix, pas une addition', label: 'ou',
      fr: fr(E(1037)),
      sub: rsOf(E(1037)),
      body: "ou propose deux chemins. ou bien insiste un peu plus ; ou ... ou oblige à choisir. EN: ou offers a choice; ou bien stresses it; ou ... ou forces it.",
    },
    {
      head: 'Les deux, ou un seul', label: 'et/ou',
      fr: fr(E(1040)),
      sub: rsOf(E(1040)),
      body: "Dans un courriel ou un formulaire : l'un, l'autre, ou les deux. À l'oral, on dit plutôt : l'un ou l'autre, ou les deux. EN: and/or, mostly written.",
    },
    {
      head: 'Et ne fait pas de liaison', label: Cap(LIAISON_REF),
      fr: fr(E(1044)),
      sub: rsOf(E(1044)),
      body: "Tu l'as appris dans la leçon sur la liaison : jamais de t après et. Chaud et humide, sans t. EN: et never links; there is no t sound.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte une liste',
  groups: [
    grp('Trois éléments, un et', [
      it(E(1035), 'des papiers'),
      it(E(1036), 'des villes'),
      it(E(1047), 'des fruits'),
      it(E(1041), 'des actions'),
    ], chk(
      'Dans ces quatre listes, où est et ?',
      ['devant le dernier élément', 'entre chaque élément'], 0,
      "Une seule fois, à la fin. Les virgules font le reste. EN: once, at the end; commas do the rest.")),
    grp('Deux possibilités', [
      it(E(1038), 'deux jours'),
      it(E(1045), 'deux boissons'),
      it(E(1039), 'ou bien : deux transports'),
      it('fr.a2.marche.069', 'deux façons de payer'),
    ], chk(
      '« Tu viens samedi ou dimanche ? » Combien de jours viens-tu ?',
      ['un', 'deux'], 0,
      "ou : un des deux. EN: one of the two.")),
    ctl('La virgule', "Écris la liste : Paul, Léa, Karim.",
    ["J'ai invité Paul, Léa, et Karim.", "J'ai invité Paul, Léa et Karim.", "J'ai invité Paul et Léa et Karim."], 1,
      "Pas de virgule devant et, et un seul et. EN: no comma before et, and only one et."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['virgule'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  sheetId: 'sheet-liste',
  title: 'Et et ou, au quotidien',
  examples: [
    ex(E(1042), 'et entre deux adverbes : vite et bien.'),
    ex(E(1049), 'trois participes, un seul et.'),
    ex('fr.a1.questions.394', 'ou dans une question courte.'),
    ex('fr.a2.au-restaurant.054', 'avec ou sans : un choix au café.'),
    ex(E(1046), 'ou ... ou : il faut choisir.'),
    ex(E(1040), "et/ou : l'un, l'autre, ou les deux."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['virgule'],
};

const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Additionner ou choisir',
  groups: [
    grp('Il faut tout', [
      it(E(1035), 'trois papiers, tous obligatoires'),
      it(E(1034), 'trois achats faits'),
      it(E(1044), 'deux qualités du temps'),
      it(E(1042), 'deux qualités de sa façon de parler'),
    ], chk(
      "Pour le passeport, il faut la photo ET le formulaire. Quel mot ?",
      ['ou', 'et'], 1,
      "Tout est obligatoire : et. EN: all of them, so et.")),
    grp('Un seul suffit', [
      it(E(1037), 'carte ou espèces'),
      it(E(1039), 'métro ou bus'),
      it('fr.a1.questions.394', 'train ou bus'),
      it(E(1045), 'thé ou café'),
    ], chk(
      "Tu peux venir avec un dessert, une boisson, ou les deux. Qu'écris-tu ?",
      ['et/ou', 'et', 'ou ... ou'], 0,
      "et/ou garde les trois possibilités. EN: and/or keeps all three options.")),
    ctl('Le serveur', 'Le serveur demande : « Thé ou café ? » Tu veux les deux.',
      ['Du café.', 'Les deux, s’il vous plaît.'], 1,
      "ou propose un choix, mais tu peux demander les deux. EN: you can still ask for both."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['virgule'],
};

/** TRAP, stepped: the English list habits. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Les listes à l’anglaise',
  rule: {
    title: 'Des virgules, et un seul et',
    body: "En français, des virgules entre les éléments, et et une seule fois, devant le dernier, sans virgule avant lui. Le or anglais se dit ou. EN: commas, one et before the last item, no comma before it; English or is ou.",
  },
  cards: [
    { promptLabel: 'et partout', promptSound: 'J’ai acheté du pain et du fromage et des fruits.', fr: fr(E(1034)), ipa: ipaOf(E(1034)), tip: "Un seul et, devant le dernier. EN: one et, before the last." },
    { promptLabel: 'la virgule d’Oxford', promptSound: 'Il faut un passeport, une photo, et un formulaire.', fr: fr(E(1035)), ipa: ipaOf(E(1035)), tip: "Pas de virgule devant et. EN: no comma before et." },
    { promptLabel: 'pas de et', promptSound: 'Nous avons visité Québec, Montréal, Gatineau.', fr: fr(E(1036)), ipa: ipaOf(E(1036)), tip: "La liste se ferme avec et. EN: close the list with et." },
    { promptLabel: 'or pour ou', promptSound: 'Tu peux payer par carte or en espèces.', fr: fr(E(1037)), ipa: ipaOf(E(1037)), tip: "Le choix, c'est ou. EN: the choice word is ou." },
    { promptLabel: 'et devant chaque verbe', promptSound: 'Je me lève et je me douche et je pars.', fr: fr(E(1041)), ipa: ipaOf(E(1041)), tip: "Virgule, virgule, et. EN: comma, comma, et." },
    { promptLabel: 'et, deux fois', promptSound: "J'ai invité Paul et Léa et Karim.", fr: fr(E(1048)), ipa: ipaOf(E(1048)), tip: "Paul, Léa et Karim. EN: one et." },
  ],
  drill: [
    { promptSay: 'du pain, du fromage ... des fruits', opts: ['et', ', et'], correct: 0 },
    { promptSay: 'Tu viens samedi ... dimanche ?', opts: ['or', 'ou'], correct: 1 },
    { promptSay: 'Québec, Montréal ... Gatineau', opts: [',', 'et'], correct: 1 },
    { promptSay: 'un passeport ... une photo et un formulaire', opts: [',', 'et'], correct: 0 },
    { promptSay: 'Thé ... café ?', opts: ['ou', 'et', 'or'], correct: 0 },
    { promptSay: 'Je me lève, je me douche ... je pars.', opts: [', et', 'et', 'ou'], correct: 1 },
    { promptSay: '... tu viens maintenant, ou tu restes.', opts: ['Et', 'Or', 'Ou'], correct: 2 },
    { promptSay: 'Elle parle vite ... bien.', opts: ['ou', 'et'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Des virgules, et un seul et' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme anglaise donne' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit listes', gate: true },
  ],
  audio: REC('rec-b1-30-piege-liste'),
  say: REFRAME,
  terms: ['virgule'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris la liste que tu entends',
  frSub: 'les virgules et le et',
  itemIds: dicteeFor(3),
  audio: AUDIO,
  say: REFRAME,
  terms: ['virgule'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La liste', 'Combien de et dans une liste de quatre éléments ?',
    ['un', 'trois'], 0,
    "Un seul, devant le dernier. EN: just one."),
  ctl('La virgule', 'Mets-tu une virgule devant le et d’une liste ?',
    ['oui', 'non'], 1,
    "Non : Paul, Léa et Karim. EN: no comma before et."),
  ctl('Le choix', 'Carte ou espèces : combien de façons de payer utilises-tu ?',
    ['les deux', 'une seule', 'aucune'], 1,
    "ou : une des deux. EN: one of them."),
], ['virgule']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Et, ou, et la virgule',
    opener: {
      line: "Du pain, du fromage et des fruits : ici tu apprends à faire une liste sans mettre et partout. EN: Bread, cheese and fruit: here you learn to make a list without putting et everywhere.",
      imageRef: 'lessons/coordination/act03.jpg',
    },
    sections: [],
    milestone: "Tu ponctues une liste à la française et tu sépares et, ou et et/ou. EN: You punctuate a list the French way and tell et, ou and et/ou apart.",
    estScreens: 38, restPoints: ['a3-construire', 'a3-choisir'],
  },
  sections: [A3_ECOUTE, A3_LISTE, A3_CONSTRUIRE, A3_EXEMPLES, A3_CHOISIR, A3_PIEGE, A3_DICTEE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 · MAIS
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'La visite à Cocody',
  frSub: 'Aminata cherche un appartement',
  setting: "Abidjan, quartier de Cocody. Aminata visite un appartement avec l'agent, monsieur Kouassi. Chaque qualité a son mais.",
  bubbles: [
    { from: 'narrator', fr: "L'agent ouvre la porte. Aminata regarde tout.", en: 'The agent opens the door. Aminata looks at everything.' },
    { from: 'coach', fr: 'Le loyer est très raisonnable, madame.', en: 'The rent is very reasonable, madam.' },
    { from: 'user', fr: fr(E(1067)), en: src(E(1067)).en, warn: 'mais : un avantage, puis un défaut' },
    { from: 'coach', fr: 'Et la vue sur la lagune est superbe.', en: 'And the view over the lagoon is superb.' },
    { from: 'user', fr: fr(E(1053)), en: src(E(1053)).en, warn: 'mais : pas cher, et pourtant un problème' },
    { from: 'coach', fr: 'Le propriétaire, votre voisin, est très gentil.', en: 'The owner, your neighbour, is very kind.' },
    { from: 'user', fr: "Ce n'est pas le propriétaire, mais son fils.", en: "That is not the owner, it is his son.", warn: 'mais corrige : pas lui, mais lui' },
    { from: 'narrator', fr: "Monsieur Kouassi sourit. Il n'a plus d'argument, mais Aminata veut revenir samedi.", en: 'Mr Kouassi smiles. He has run out of arguments, but Aminata wants to come back on Saturday.' },
  ],
  closing: { fr: 'Trois fois mais : deux contrastes et une correction.', en: 'Three times mais: two contrasts and one correction.' },
  audio: REC('rec-b1-30-cocody'),
  say: REFRAME,
  terms: ['opposition'],
};

const A4_MAIS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-mais',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sept',
  title: 'Les trois emplois de mais',
  frSub: 'opposer, corriger, insister',
  hint: 'Quatre cartes. Demande-toi ce qu’on attendait avant mais.',
  audio: REC('rec-b1-30-mais'),
  say: REFRAME,
  terms: ['opposition'],
  cards: [
    {
      head: 'Opposer', label: 'mais',
      fr: fr(E(1052)),
      sub: rsOf(E(1052)),
      body: "Parler bien, écrire mal : la deuxième idée va contre la première. EN: the second idea goes against the first.",
    },
    {
      head: 'Corriger', label: 'pas ... mais',
      fr: fr(E(1054)),
      sub: rsOf(E(1054)),
      body: "Après une négation, mais donne la bonne réponse. Le verbe n'est pas répété. EN: after a negative, mais gives the right answer: not X but Y.",
    },
    {
      head: 'Ajouter plus fort', label: 'non seulement ... mais',
      fr: fr(E(1064)),
      sub: rsOf(E(1064)),
      body: "Non seulement ouvre, mais ferme avec quelque chose de plus fort. Souvent avec aussi. EN: not only ... but also.",
    },
    {
      head: "À l'oral, pour insister", label: 'mais oui · mais non',
      fr: `${fr(E(1057))} · ${fr(E(1058))}`,
      sub: `${rsOf(E(1057))} · ${rsOf(E(1058))}`,
      body: "Devant oui ou non, mais n'oppose rien : il renforce, souvent avec chaleur. EN: before oui or non, mais just adds emphasis.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte le contraste',
  groups: [
    grp('Une idée, puis son contraire', [
      it(E(1059), "l'envie, puis l'empêchement"),
      it(E(1060), 'long, mais beau'),
      it(E(1062), 'raison, mais trop fort'),
      it('fr.a2.objets.107', 'chercher, mais ne pas trouver'),
    ], chk(
      "« J'aimerais venir, mais je travaille. » Vas-tu venir ?",
      ['Oui', 'Non, sans doute pas'], 1,
      "mais annonce l'obstacle : le travail. EN: mais introduces the obstacle.")),
    grp('Pas ceci, mais cela', [
      it(E(1054), 'pas le frère, le cousin'),
      it(E(1055), 'pas lundi, mardi'),
      it(E(1063), 'pas de viande, mais du poisson'),
      it('fr.a2.internet.204', 'un code reçu, mais inutile'),
    ], chk(
      "« Je ne pars pas lundi, mais mardi. » Quand pars-tu ?",
      ['mardi', 'lundi'], 0,
      "mais corrige : la bonne réponse vient après. EN: the correct answer follows mais.")),
    ctl('Non seulement', "« Non seulement il pleut, ... il fait froid. »",
      ['et', 'mais', 'donc'], 1,
      "non seulement ... mais : les deux, et le second est plus fort. EN: not only ... but."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition'],
};

const A4_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a4-cartes',
  layer: 'core',
  title: 'Huit cartes pour mais',
  cards: [
    { front: 'I speak English well, but I write badly', back: "je parle bien anglais, mais j'écris mal", say: fr(E(1052)) },
    { front: 'it is not expensive, but it is far', back: "ce n'est pas cher, mais c'est loin", say: fr(E(1053)) },
    { front: 'not my brother but my cousin', back: 'pas mon frère, mais mon cousin', say: fr(E(1054)) },
    { front: 'not only ... but also', back: 'non seulement ... mais aussi', say: fr(E(1064)) },
    { front: 'why yes, of course', back: 'mais oui, bien sûr', say: fr(E(1057)) },
    { front: "oh no, it doesn't matter", back: "mais non, ce n'est pas grave", say: fr(E(1058)) },
    { front: 'I would like to come, but I am working', back: "j'aimerais venir, mais je travaille", say: fr(E(1059)) },
    { front: 'the rent is low, but the charges are high', back: 'le loyer est bas, mais les charges sont élevées', say: fr(E(1067)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition'],
};

const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Un vrai contraste, ou pas',
  groups: [
    grp('Contraste', [
      it(E(1052), 'bien, puis mal'),
      it(E(1067), 'bas, puis élevé'),
      it(E(1065), 'l’envie, puis la pluie'),
      it(E(1031), 'petit, puis lumineux'),
    ], chk(
      "« Il fait beau ... chaud. » Mais ou et ?",
      ['et', 'mais'], 0,
      "Beau et chaud vont dans le même sens : pas de contraste, et. EN: same direction, so et.")),
    grp('Correction ou renfort', [
      it(E(1055), 'une correction'),
      it(E(1056), 'un renfort'),
      it(E(1057), "à l'oral, pour insister"),
      it(E(1058), "à l'oral, pour rassurer"),
    ], chk(
      "« Mais non, ce n'est pas grave. » mais oppose-t-il deux idées ?",
      ['Oui', 'Non, il insiste'], 1,
      "Devant non, mais renforce. EN: before non, mais is emphasis."),
    ),
    ctl('Le bon mot', 'Tu parles espagnol et, en plus, tu le parles bien. Quel mot manque ? « Non seulement je parle espagnol, ... je le parle bien. »',
      ['car', 'mais', 'ou'], 1,
      "non seulement appelle mais. EN: non seulement calls for mais."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre mais de travers',
  errors: [
    {
      wrong: "Ce n'est pas mon frère, mais c'est mon cousin.",
      right: fr(E(1054)),
      why: "Pas faux, mais lourd : dans une correction, le français ne répète pas « c'est ». Comme l'anglais not my brother but my cousin. EN: no need to repeat c'est.",
    },
    {
      wrong: 'Il fait beau, mais il fait chaud.',
      right: 'Il fait beau et il fait chaud.',
      why: "En anglais, but sert parfois à relancer. En français, mais demande un vrai contraste. EN: mais needs a real contrast.",
    },
    {
      wrong: 'Non seulement il pleut, et il fait froid.',
      right: fr(E(1056)),
      why: "non seulement attend mais, comme not only attend but. EN: non seulement pairs with mais.",
    },
    {
      wrong: "Je ne pars pas lundi, mais je pars mardi aussi.",
      right: fr(E(1055)),
      why: "Tu corriges : lundi est faux, mardi est vrai. aussi dit le contraire, les deux jours. EN: a correction replaces; aussi would add.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition'],
};

const A4_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a4-dictee',
  layer: 'core',
  title: 'Écris le contraste que tu entends',
  frSub: 'mais, et la virgule devant lui',
  itemIds: dicteeFor(4),
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La virgule', 'Devant mais, dans une phrase à deux idées, tu mets...',
    ['une virgule', 'rien', 'un point'], 0,
    "Une virgule, en général : c'est cher, mais c'est loin. EN: usually a comma before mais."),
  ctl('La correction', "« Ce n'est pas un problème, mais une question. » Que fait mais ?",
    ['il oppose deux idées vraies', 'il corrige'], 1,
    "Le problème est faux, la question est vraie. EN: it corrects."),
  ctl('Le renfort', 'Non seulement ... ?',
    ['mais', 'et', 'donc'], 0,
    "non seulement ... mais aussi. EN: not only ... but also."),
], ['opposition']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Mais',
    opener: {
      line: "Pas cher, mais loin : ici tu apprends le mot qui tourne la phrase, et le mot qui corrige. EN: Cheap, but far: here you learn the word that turns the sentence round, and the word that corrects.",
      imageRef: 'lessons/coordination/act04.jpg',
    },
    sections: [],
    milestone: "Tu utilises mais pour opposer, pour corriger et avec non seulement, et tu ne le mets plus sans vrai contraste. EN: You use mais to contrast, to correct and with non seulement, and never without a real contrast.",
    estScreens: 36, restPoints: ['a4-construire', 'a4-choisir'],
  },
  sections: [A4_HISTOIRE, A4_MAIS, A4_CONSTRUIRE, A4_CARTES, A4_CHOISIR, A4_ERREURS, A4_DICTEE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 · DONC, ALORS, ET LE SO ANGLAIS
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Une conséquence, ou juste très',
  frSub: 'Écoute le so français',
  lines: [
    ln(E(1068)), ln(E(1069)), ln(E(1073)), ln(E(1075)),
    ln(E(1079)), ln(E(1074)), ln('fr.a2.cafe.063'), ln(E(1072)),
  ],
  questions: [
    { q: "Les deux premières phrases disent-elles la même chose ?", opts: ['Oui, avec un autre mot.', 'Non.'], correct: 0, why: "donc et alors : la même conséquence ; alors est plus oral. EN: same meaning, alors is more spoken." },
    { q: 'Troisième phrase : y a-t-il une conséquence ?', opts: ['Oui', 'Non, seulement la fatigue'], correct: 1, why: "tellement dit l'intensité, pas une suite. EN: tellement is intensity, not consequence." },
    { q: 'Quatrième phrase : que fait la personne ensuite ?', opts: ['elle va se coucher', 'elle sort'], correct: 0, why: "donc annonce ce qui suit : se coucher. EN: donc gives what follows." },
    { q: 'Pourquoi a-t-il pris un taxi ?', opts: ['il était pressé', 'le train était en retard', 'il pleuvait'], correct: 1, why: "La cause d'abord, puis alors. EN: the cause first, then alors." },
    { q: 'Dernière phrase : alors ouvre...', opts: ['une conséquence', 'une question, pour lancer la conversation'], correct: 1, why: "À l'oral, alors sert aussi à lancer. EN: alors also opens a conversation." },
  ],
  audio: REC('rec-b1-30-donc-ecoute'),
  say: REFRAME,
  terms: ['consequence'],
};

const A5_DONC: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-donc',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-lien',
  title: 'Donc, alors, et le so qui intensifie',
  frSub: 'la conséquence',
  hint: 'Quatre cartes. Cherche la cause, puis la suite.',
  audio: REC('rec-b1-30-donc'),
  say: REFRAME,
  terms: ['consequence'],
  cards: [
    {
      head: 'La conséquence', label: 'donc',
      fr: fr(E(1068)),
      sub: rsOf(E(1068)),
      body: "La cause d'abord, puis donc et ce qui en découle. EN: the cause, then donc and the result.",
    },
    {
      head: "La même chose, à l'oral", label: 'alors',
      fr: fr(E(1069)),
      sub: rsOf(E(1069)),
      body: "À l'oral, alors est très fréquent. À l'écrit soigné, donc est plus sûr. EN: alors in speech, donc in careful writing.",
    },
    {
      head: 'Donc après le verbe', label: "à l'écrit",
      fr: fr(E(1070)),
      sub: rsOf(E(1070)),
      body: "À l'écrit, donc se glisse souvent après le verbe : il faut donc, nous avons donc. EN: in writing, donc often sits after the verb.",
    },
    {
      head: "Le so de l'intensité", label: 'si · tellement',
      fr: `${fr(E(1073))} · ${fr(E(1074))}`,
      sub: `${rsOf(E(1073))} · ${rsOf(E(1074))}`,
      body: "So tired, so cold : ce n'est pas une suite, c'est très. En français : si ou tellement, jamais donc. EN: the so of intensity is si or tellement.",
    },
  ],
};

const A5_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-tableau',
  layer: 'core',
  sheetId: 'sheet-lien',
  title: 'Six façons de dire so',
  cols: ['En anglais', 'En français', 'Le sens'],
  rows: [
    { cells: ['it snowed, so...', 'donc', 'la conséquence'], say: fr(E(1068)),
      detail: { title: 'donc', body: "Neutre, à l'oral comme à l'écrit. EN: neutral, spoken or written.", say: fr(E(1075)) } },
    { cells: ['so we stayed home', 'alors', "la conséquence, à l'oral"], say: fr(E(1069)),
      detail: { title: 'alors', body: "Plus oral, très courant au Québec comme en France. EN: more spoken.", say: fr(E(1079)) } },
    { cells: ['so tired', 'tellement', "l'intensité"], say: fr(E(1073)),
      detail: { title: 'tellement', body: "Très, avec émotion. EN: very, with feeling.", say: fr(E(1073)) } },
    { cells: ['so cold, so beautiful', 'si', "l'intensité"], say: fr(E(1074)),
      detail: { title: 'si', body: "Devant un adjectif : si froid, si beau. EN: before an adjective.", say: fr(E(1081)) } },
    { cells: ['so, what now?', 'alors', 'pour lancer'], say: fr(E(1072)),
      detail: { title: 'alors, au début', body: "Pour ouvrir une question ou changer de sujet. EN: to open a question.", say: fr(E(1080)) } },
    { cells: ['so you are the new one', "c'est donc", 'la découverte'], say: fr(E(1077)),
      detail: { title: 'donc, au milieu', body: "Tu comprends quelque chose que tu viens d'apprendre. EN: realising something.", say: fr(E(1077)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consequence'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'La cause, puis la suite',
  groups: [
    grp('Donc et alors', [
      it(E(1085), 'pas de passeport, donc pas de départ'),
      it('fr.a2.routines.052', 'le bus raté, donc le retard'),
      it('fr.a2.cafe.063', 'en avance, alors on attend'),
      it(E(1079), 'le train en retard, alors le taxi'),
    ], chk(
      'Dans ces phrases, que vient AVANT donc ou alors ?',
      ['la cause', 'la conséquence'], 0,
      "La cause d'abord, la suite ensuite. EN: cause first, result second.")),
    grp("Donc dans la phrase écrite", [
      it(E(1070), 'il faut donc'),
      it(E(1071), 'nous avons donc décidé'),
      it(E(1077), "c'est donc toi"),
      it(E(1076), 'la phrase célèbre de Descartes'),
    ], chk(
      '« Nous avons ... décidé de reporter la réunion. » Où va donc ?',
      ['avant nous', 'entre avons et décidé', 'après réunion'], 1,
      "À l'écrit, donc aime se glisser après l'auxiliaire. EN: after the auxiliary."),
    ),
    ctl('Le so', "« I am so tired. »",
      ['Je suis donc fatigué.', 'Je suis tellement fatigué.'], 1,
      "C'est l'intensité : tellement. donc voudrait dire therefore. EN: intensity, not therefore."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consequence'],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Une suite, ou juste très',
  groups: [
    grp('Une suite logique', [
      it(E(1075), 'fatigué, donc au lit'),
      it(E(1082), 'le magasin ferme, donc vite'),
      it(E(1068), "la neige, donc l'école fermée"),
      it('fr.b1.connecteurs-logiques.008', 'le pont fermé, donc le détour'),
    ], chk(
      "« Il pleut, ... je reste à la maison. »",
      ['donc', 'si'], 0,
      "Une conséquence : donc, ou alors à l'oral. EN: a consequence takes donc."),
    ),
    grp("Juste l'intensité", [
      it(E(1073), 'tellement fatigué'),
      it(E(1074), 'si froid'),
      it(E(1081), 'si beau'),
      it('fr.a2.verbes.525', "alors, pour finir : à ce soir"),
    ], chk(
      '« It is so beautiful here. »',
      ["C'est donc beau ici.", "C'est si beau ici.", "C'est alors beau ici."], 1,
      "Très beau : si. EN: very beautiful, so si."),
    ),
    ctl('À l’oral', "Tu parles à un ami. « Tu as faim ? ..., on mange. »",
      ['Alors', 'Si', 'Car'], 0,
      "À l'oral, alors lance la suite. EN: alors in speech."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consequence'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Le so anglais, et donc partout',
  rule: {
    title: 'Une vraie conséquence, sinon pas de donc',
    body: "donc et alors annoncent une suite logique. Le so de l'intensité se dit si ou tellement. Et donc ne sert pas à continuer chaque phrase. EN: donc means therefore; so of intensity is si or tellement; not every sentence starts with donc.",
  },
  cards: [
    { promptLabel: 'si pour so', promptSound: 'Il a neigé toute la nuit, si l’école est fermée.', fr: fr(E(1068)), ipa: ipaOf(E(1068)), tip: "Une conséquence : donc. EN: consequence, so donc." },
    { promptLabel: 'donc pour so', promptSound: 'Je suis donc fatigué.', fr: fr(E(1073)), ipa: ipaOf(E(1073)), tip: "L'intensité : tellement. EN: intensity, so tellement." },
    { promptLabel: 'donc sans lien', promptSound: 'Donc, je suis Paul. Donc, je travaille ici.', fr: 'Je suis Paul, et je travaille ici.', ipa: '/ʒə sɥi pɔl e ʒə tʁa.vaj i.si/', tip: "Rien ne découle de rien : pas de donc. EN: no consequence, no donc." },
    { promptLabel: 'si pour so', promptSound: 'Je suis fatigué, si je vais me coucher.', fr: fr(E(1075)), ipa: ipaOf(E(1075)), tip: "si ici voudrait dire if. EN: si would mean if." },
    { promptLabel: 'donc pour so', promptSound: "C'est donc beau ici.", fr: fr(E(1081)), ipa: ipaOf(E(1081)), tip: "Très beau : si. EN: very, so si." },
    { promptLabel: 'car pour so', promptSound: 'Le train était en retard, car j’ai pris un taxi.', fr: fr(E(1079)), ipa: ipaOf(E(1079)), tip: "Le taxi est la suite, pas la cause. EN: the taxi is the result." },
  ],
  drill: [
    { promptSay: 'Il pleut, ... je reste.', opts: ['donc', 'si'], correct: 0 },
    { promptSay: 'Je suis ... fatigué.', opts: ['donc', 'tellement'], correct: 1 },
    { promptSay: "C'est ... beau ici.", opts: ['alors', 'donc', 'si'], correct: 2 },
    { promptSay: 'Le magasin ferme, ... dépêche-toi.', opts: ['donc', 'car'], correct: 0 },
    { promptSay: 'Nous avons ... décidé de reporter.', opts: ['si', 'donc'], correct: 1 },
    { promptSay: 'Tu as faim ? ..., on mange.', opts: ['Si', 'Alors', 'Car'], correct: 1 },
    { promptSay: 'Il fait ... froid ce matin.', opts: ['si', 'donc'], correct: 0 },
    { promptSay: "Il n'avait pas son passeport, ... il n'est pas parti.", opts: ['car', 'si', 'donc'], correct: 2 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Une vraie conséquence' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le so anglais donne' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-30-piege-so'),
  say: REFRAME,
  terms: ['consequence'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La conséquence', "« Il a raté son bus, ... il est arrivé en retard. »",
    ['si', 'donc'], 1,
    "Le retard découle du bus raté : donc. EN: the delay follows."),
  ctl("L'intensité", 'So tired se dit...',
    ['tellement fatigué', 'donc fatigué', 'alors fatigué'], 0,
    "tellement, ou si : l'intensité. EN: intensity."),
  ctl("L'oral", 'Quel mot est plus oral ?',
    ['donc', 'alors'], 1,
    "alors, surtout à l'oral. EN: alors is more spoken."),
], ['consequence']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Donc, alors, et le so anglais',
    opener: {
      line: "Il a neigé toute la nuit, donc l'école est fermée : ici tu apprends à dire la suite, et à ne plus traduire so par si. EN: It snowed all night, so school is closed: here you learn to say the result, and stop translating so as si.",
      imageRef: 'lessons/coordination/act05.jpg',
    },
    sections: [],
    milestone: "Tu dis une conséquence avec donc ou alors, et l'intensité avec si ou tellement. EN: You give a result with donc or alors, and intensity with si or tellement.",
    estScreens: 38, restPoints: ['a5-construire', 'a5-choisir'],
  },
  sections: [A5_ECOUTE, A5_DONC, A5_CONSTRUIRE, A5_TABLEAU, A5_CHOISIR, A5_PIEGE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 · CAR
 *
 *  car is taught; parce que is b1.31's and a1.20's, and appears only as the
 *  contrast: the spoken answer to pourquoi.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_AVIS: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-avis',
  layer: 'core',
  questionsInModal: true,
  title: 'Avis aux usagers',
  frSub: 'Lis, et cherche les raisons',
  text: AVIS_TEXT,
  glossary: [
    { word: 'usagers', en: 'passengers, users', note: 'Les personnes qui prennent le métro.' },
    { word: 'quais', en: 'platforms', note: 'Là où tu attends le train.' },
    { word: 'navettes', en: 'shuttle buses', note: 'Des bus qui font l’aller-retour entre deux stations.' },
    { word: 'abonnements', en: 'passes', note: 'La carte que tu paies chaque mois.' },
    { word: 'rouvrira', en: 'will reopen', note: 'Le futur de rouvrir.' },
  ],
  questions: [
    { q: 'Pourquoi la station est-elle fermée ?', a: "« car des travaux importants ont lieu sous les quais ». car donne la raison, après la décision." },
    { q: 'Que se passe-t-il donc pour les trains ?', a: "« Les trains ne s'arrêteront donc pas à cette station. » donc, après le verbe : la conséquence, à l'écrit." },
    { q: 'Pourquoi faut-il prévoir vingt minutes de plus ?', a: "« car la circulation est dense le samedi »." },
    { q: 'Combien de fois lis-tu car ? Est-il au début d’une phrase ?', a: "Trois fois, et toujours après une virgule, jamais au début : c'est un texte écrit, et car y est chez lui." },
  ],
  audio: REC('rec-b1-30-avis'),
  say: REFRAME,
  terms: ['cause'],
};

const A6_CAR: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-car',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-lien',
  title: 'Car, la raison écrite',
  frSub: 'car et parce que',
  hint: 'Quatre cartes. Regarde où se trouve car dans la phrase.',
  audio: REC('rec-b1-30-car'),
  say: REFRAME,
  terms: ['cause'],
  cards: [
    {
      head: 'La décision, puis sa raison', label: 'car',
      fr: fr(E(1086)),
      sub: rsOf(E(1086)),
      body: "Le fait d'abord, une virgule, puis car et la raison. C'est la place de car, toujours. EN: the fact, a comma, then car and the reason.",
    },
    {
      head: 'Jamais en premier', label: 'la place',
      fr: fr(E(1087)),
      sub: rsOf(E(1087)),
      body: "car n'ouvre jamais une phrase et ne répond jamais seul à une question. Il a besoin d'une première idée devant lui. EN: car never opens a sentence.",
    },
    {
      head: 'Même faits, deux sens', label: 'car · donc',
      fr: `${fr(E(1095))} · ${fr(E(1096))}`,
      sub: `${rsOf(E(1095))} · ${rsOf(E(1096))}`,
      body: "car regarde en arrière, vers la raison ; donc regarde en avant, vers la suite. EN: car looks back to the reason, donc forward to the result.",
    },
    {
      head: 'Pour répondre à pourquoi', label: Cap(INTERROGATIFS_REF),
      fr: fr(E(1089)),
      sub: rsOf(E(1089)),
      body: `« ${A120_REFRAME} » En français : « ${A120_REFRAME_FR} » À pourquoi, on répond parce que, jamais car. EN: answer pourquoi with parce que.`,
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le fait, la virgule, la raison',
  groups: [
    grp('Car après la décision', [
      it(E(1090), 'se coucher tôt, et pourquoi'),
      it(E(1091), 'le parapluie, et pourquoi'),
      it(E(1093), 'réserver, et pourquoi'),
      it('fr.a2.cuisine.054', 'manger tôt, et pourquoi'),
    ], chk(
      'Dans ces quatre phrases, que vient APRÈS car ?',
      ['la raison', 'la décision'], 0,
      "La décision d'abord, la raison ensuite. EN: decision first, reason after car.")),
    grp('Dans les textes officiels', [
      it(E(1088), 'un avis de la bibliothèque'),
      it(E(1097), 'un article sur les prix'),
      it('fr.b1.connecteurs-logiques.010', 'une annonce à l’aéroport'),
      it('fr.b1.connecteurs-logiques.011', 'un article sur un chantier'),
    ], chk(
      'Où lis-tu car le plus souvent ?',
      ['dans les textos entre amis', 'dans les textes écrits et officiels'], 1,
      "car est un mot de l'écrit. À l'oral, parce que est plus naturel. EN: car is mostly written."),
    ),
    ctl('La question', 'Ton ami demande : « Pourquoi tu pars ? » Tu réponds...',
      ['Car je suis fatigué.', 'Parce que je suis fatigué.'], 1,
      "À pourquoi : parce que. car ne commence jamais une réponse. EN: answer pourquoi with parce que."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cause'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  sheetId: 'sheet-lien',
  title: 'Car, dans la vraie vie',
  examples: [
    ex(E(1094), 'une raison personnelle, dans un courriel.'),
    ex(E(1099), 'une raison simple, après coup.'),
    ex(E(1100), 'une règle expliquée sur une affiche.'),
    ex('fr.b1.connecteurs-logiques.010', 'une annonce officielle.'),
    ex('fr.b1.connecteurs-logiques.001', "parce que : la même idée, plus orale. C'est le mot de la leçon suivante."),
    ex(E(1096), 'donc : les mêmes faits, dans l’autre sens.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cause', 'consequence'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Car ou donc',
  groups: [
    grp('La raison vient après', [
      it(E(1095), 'le beau temps explique la marche'),
      it(E(1098), 'le froid explique qu’on reste'),
      it(E(1099), "l'heure explique le taxi"),
      it(E(1086), 'la tempête explique l’annulation'),
    ], chk(
      '« Je rentre à pied, ... il fait beau. »',
      ['car', 'donc'], 0,
      "Le beau temps est la raison, et elle vient après : car. EN: reason after, so car.")),
    grp('La suite vient après', [
      it(E(1096), 'le beau temps, donc la marche'),
      it(E(1024), 'la pluie, donc le bus'),
      it(E(1004), 'la maladie, donc pas de départ'),
      it('fr.a2.routines.052', 'le bus raté, donc le retard'),
    ], chk(
      '« Il fait beau, ... je rentre à pied. »',
      ['car', 'donc', 'ou'], 1,
      "La marche est la suite : donc. EN: the result, so donc.")),
    ctl('Le registre', 'Tu écris une affiche pour ton immeuble. Quel mot convient ?',
      ['car', 'parce que', 'les deux'], 2,
      "À l'écrit, les deux vont ; car fait plus officiel. EN: both work in writing; car sounds more formal."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cause', 'consequence'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre car à la mauvaise place',
  errors: [
    {
      wrong: "Car il fait très froid, nous restons à l'intérieur.",
      right: fr(E(1098)),
      why: "En anglais, because peut ouvrir la phrase. car, jamais : la décision d'abord, puis car. EN: because can come first; car cannot.",
    },
    {
      wrong: 'Pourquoi tu pars ? Car je suis fatigué.',
      right: fr(E(1089)),
      why: "car traduit bien because, alors on le prend. Mais pour répondre à pourquoi, le français dit parce que. EN: answer pourquoi with parce que.",
    },
    {
      wrong: 'Il fait beau, car je rentre à pied.',
      right: fr(E(1096)),
      why: "Tu voulais dire so. Ici, car dit que le beau temps vient de ta marche. EN: this says the weather is caused by your walk.",
    },
    {
      wrong: 'Nous sommes restés à la maison car la pluie.',
      right: 'Nous sommes restés à la maison, car il pleuvait.',
      why: "because of the rain : car attend une phrase avec un verbe, pas un nom seul. EN: car needs a clause, not just a noun.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cause'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La place', 'car peut-il ouvrir une phrase ?',
    ['Non', 'Oui'], 0,
    "Jamais : la première idée, une virgule, puis car. EN: never first."),
  ctl('Pourquoi', 'Pour répondre à pourquoi, tu dis...',
    ['car', 'donc', 'parce que'], 2,
    "parce que, que tu connais depuis le A1. EN: parce que."),
  ctl('Le sens', '« Je reste, car il pleut. » La pluie est...',
    ['la raison', 'la conséquence'], 0,
    "car donne la raison. EN: the reason."),
], ['cause']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Car',
    opener: {
      line: "Sur une affiche du métro, car explique tout, mais jamais en premier : ici tu apprends la raison écrite. EN: On a metro notice car explains everything, but never first: here you learn the written reason.",
      imageRef: 'lessons/coordination/act06.jpg',
    },
    sections: [],
    milestone: "Tu donnes une raison avec car, après la décision et une virgule, et tu gardes parce que pour répondre à pourquoi. EN: You give a reason with car after the decision and a comma, and keep parce que for answering pourquoi.",
    estScreens: 32, restPoints: ['a6-avis'],
  },
  sections: [A6_AVIS, A6_CAR, A6_CONSTRUIRE, A6_EXEMPLES, A6_CHOISIR, A6_ERREURS, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 · OR ET NI
 *
 *  or is recognition: it is read in a written argument and chosen in checks,
 *  never demanded in a typeIn. ni ... ni is cited from b1.20 and taught here
 *  only as the coordinator of two negated items.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LETTRE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lettre',
  layer: 'core',
  questionsInModal: true,
  title: 'Sauvons la piscine',
  frSub: 'Une lettre à la Ville de Lausanne',
  text: LETTRE_TEXT,
  glossary: [
    { word: 'entretenir', en: 'to maintain', note: 'Garder en bon état.' },
    { word: 'natation', en: 'swimming', note: 'Le sport de nager.' },
    { word: 'francs', en: 'Swiss francs', note: 'La monnaie de la Suisse.' },
    { word: 'un luxe', en: 'a luxury', note: 'Une chose chère, pas nécessaire.' },
    { word: 'horaires réduits', en: 'shorter opening hours', note: 'Ouvert moins longtemps.' },
  ],
  questions: [
    { q: 'Quel est le premier argument de la Ville ?', a: "La piscine « coûte trop cher à entretenir » : c'est la raison, après car." },
    { q: 'Que fait le premier « Or » ?', a: "Il apporte un fait qui change l'argument : c'est la seule piscine à moins de trois kilomètres." },
    { q: 'Et le deuxième « Or » ?', a: "Un autre fait gênant pour la Ville : elle vient de dépenser le double pour un parking." },
    { q: 'Que n’ont pas beaucoup de familles ?', a: "« ni voiture ni le temps » : deux choses niées, reliées par ni ... ni." },
    { q: 'Que proposent les habitants ?', a: "Garder la piscine ouverte, « mais avec des horaires réduits ». donc annonce la proposition, mais la limite." },
  ],
  audio: REC('rec-b1-30-lettre'),
  say: REFRAME,
  terms: ['or', 'nini'],
};

const A7_OR: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-or',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-liste',
  title: 'Or et ni',
  frSub: 'le fait nouveau, les deux refus',
  hint: 'Quatre cartes. Or à lire, ni à écrire.',
  audio: REC('rec-b1-30-or'),
  say: REFRAME,
  terms: ['or', 'nini'],
  cards: [
    {
      head: 'Le fait qui change tout', label: 'or',
      fr: fr(E(1101)),
      sub: rsOf(E(1101)),
      body: "Une première idée, puis Or, virgule, et un fait qui la contredit ou la complète. Now, yet. EN: or introduces the fact that turns the argument.",
    },
    {
      head: 'Le raisonnement', label: 'or · donc',
      fr: `${fr(E(1103))} ${fr(E(1104))}`,
      sub: `${rsOf(E(1103))} · ${rsOf(E(1104))}`,
      body: "Une règle, or un cas, donc une conclusion : le raisonnement classique. Tu le liras dans les lettres et les textes d'opinion. EN: rule, or the case, donc the conclusion.",
    },
    {
      head: 'Deux choses niées', label: 'ni ... ni',
      fr: fr(E(1107)),
      sub: rsOf(E(1107)),
      body: `${Cap(NEGATION_AV_REF)} te l'a donné comme négation : « ${B120_REFRAME} » Ici, ni relie : ne devant le verbe, pas de pas. EN: ni joins two negated items, with ne and no pas.`,
    },
    {
      head: 'Après sans', label: 'sans ... ni',
      fr: fr(E(1112)),
      sub: rsOf(E(1112)),
      body: "Après sans, un seul ni suffit, et pas de ne : sans sucre ni lait. EN: after sans, one ni and no ne.",
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Relie deux non',
  groups: [
    grp('Ne ... ni ... ni', [
      it(E(1109), 'deux langues niées'),
      it(E(1114), 'deux boissons niées'),
      it(E(1108), 'deux personnes, en sujet'),
      it(E(1005), 'deux verbes niés'),
    ], chk(
      '« Ni Paul ni Léa ... venus. »',
      ['sont', 'ne sont', 'ne sont pas'], 1,
      "Avec ni, il faut ne, et jamais pas. EN: ne, never pas.")),
    grp('Sans ... ni, et ni après pas', [
      it(E(1111), 'sans manger ni boire'),
      it(E(1112), 'sans sucre ni lait'),
      it(E(1110), 'pas le froid, ni la neige'),
      it(E(1113), 'ni ne : à lire, surtout'),
    ], chk(
      'Without sugar or milk :',
      ['sans sucre ou lait', 'sans sucre ni lait'], 1,
      "Après sans, le or anglais devient ni. EN: after sans, or becomes ni."),
    ),
    ctl('Or', "« Le contrat exige un diplôme. Or, Paul n'en a pas. » Paul peut-il signer ?",
      ['Oui', 'Non'], 1,
      "or apporte le fait qui bloque : il n'a pas le diplôme. EN: or brings in the blocking fact."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nini', 'or'],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  sheetId: 'sheet-lien',
  title: 'Or, dans un argument',
  examples: [
    ex(E(1102), "la règle, puis le fait qui bloque."),
    ex(E(1105), 'ce qui était prévu, puis ce qui est arrivé.'),
    ex(E(1116), "ce que disait l'annonce, puis la réalité."),
    ex(E(1027), 'la situation, puis le fait qui change tout.'),
    ex(E(1006), 'une envie, puis le fait qui retient.'),
    ex(E(1104), 'donc tire la conclusion après or.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['or'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Or, ou, mais',
  groups: [
    grp('Un fait nouveau', [
      it(E(1101), "l'appartement déjà loué"),
      it(E(1105), 'personne à la réunion'),
      it(E(1116), 'pas de balcon'),
      it(E(1102), 'pas de diplôme'),
    ], chk(
      "« Je voulais louer cet appartement. Or, il était déjà loué. » Tu l'as loué ?",
      ['Non', 'Oui'], 0,
      "Le fait nouveau a tout arrêté. EN: the new fact stopped everything.")),
    grp('Un choix ou deux refus', [
      it(E(1022), 'ou : le train ou l’avion'),
      it(E(1107), 'ni : ni le temps ni l’envie'),
      it(E(1045), 'ou : thé ou café'),
      it(E(1114), 'ni : ni thé ni café'),
    ], chk(
      "Tu ne veux pas de thé et pas de café. Que dis-tu ?",
      ['Je ne veux ni thé ni café.', 'Je veux du thé ou du café.', 'Je ne veux pas thé ou café.'], 0,
      "Deux refus : ni ... ni. EN: two refusals."),
    ),
    ctl('Or ou mais', "À l'oral, avec un ami, tu dis plutôt...",
      ['or', 'mais'], 1,
      "or est très écrit. À l'oral, mais fait le travail. EN: in speech, use mais."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['or', 'nini'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Or n’est pas or, ni n’est pas pas',
  rule: {
    title: 'Or pour argumenter, ni sans pas',
    body: "Le or anglais se dit ou ; le or français apporte un fait nouveau. Avec ni, garde ne et enlève pas. Après sans, le or anglais devient ni. EN: English or is ou; with ni keep ne and drop pas; after sans, use ni.",
  },
  cards: [
    { promptLabel: 'or pour ou', promptSound: 'Tu préfères le thé or le café ?', fr: fr(E(1045)), ipa: ipaOf(E(1045)), tip: "Le choix : ou. EN: the choice word is ou." },
    { promptLabel: 'ni avec pas', promptSound: 'Il ne parle pas ni anglais ni espagnol.', fr: fr(E(1109)), ipa: ipaOf(E(1109)), tip: "ni prend la place de pas. EN: ni replaces pas." },
    { promptLabel: 'ni sans ne', promptSound: 'Ni Paul ni Léa sont venus.', fr: fr(E(1108)), ipa: ipaOf(E(1108)), tip: "Il faut ne devant le verbe. EN: keep ne." },
    { promptLabel: 'or après sans', promptSound: 'Sans sucre ou lait, s’il vous plaît.', fr: fr(E(1112)), ipa: ipaOf(E(1112)), tip: "Après sans, ni. EN: after sans, ni." },
    { promptLabel: 'et pour ni', promptSound: 'Je n’ai pas le temps et l’envie.', fr: fr(E(1107)), ipa: ipaOf(E(1107)), tip: "Deux choses niées : ni ... ni. EN: two negated things." },
    { promptLabel: 'ou pour or', promptSound: "Le contrat exige un diplôme. Ou, Paul n'en a pas.", fr: fr(E(1102)), ipa: ipaOf(E(1102)), tip: "Le fait nouveau : or. EN: the new fact takes or." },
  ],
  drill: [
    { promptSay: 'Thé ... café ?', opts: ['or', 'ou'], correct: 1 },
    { promptSay: 'Il ne parle ... anglais ni espagnol.', opts: ['ni', 'pas ni'], correct: 0 },
    { promptSay: 'Ni Paul ni Léa ... venus.', opts: ['sont', 'ne sont'], correct: 1 },
    { promptSay: 'sans sucre ... lait', opts: ['ni', 'ou', 'et pas'], correct: 0 },
    { promptSay: "Il voulait louer l'appartement. ..., il était loué.", opts: ['Ou', 'Ni', 'Or'], correct: 2 },
    { promptSay: "Je n'ai ... le temps ni l'envie.", opts: ['pas', 'ni'], correct: 1 },
    { promptSay: 'Il est parti sans manger ... boire.', opts: ['ni', 'ou'], correct: 0 },
    { promptSay: 'Tous les hommes sont mortels. ..., Socrate est un homme.', opts: ['Ou', 'Or', 'Et'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Or pour argumenter, ni sans pas' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-30-piege-ni'),
  say: REFRAME,
  terms: ['or', 'nini'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Or', 'Le or français veut dire...',
    ['ou', 'now, yet : un fait nouveau'], 1,
    "Ce n'est pas le or anglais. EN: not English or."),
  ctl('Ni', 'Avec ni ... ni, tu gardes...',
    ['ne', 'pas', 'ne et pas'], 0,
    "ne, sans pas. EN: ne, no pas."),
  ctl('Sans', 'Without milk or sugar :',
    ['sans lait ni sucre', 'sans lait ou sucre'], 0,
    "Après sans, ni. EN: after sans, ni."),
], ['or', 'nini']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Or et ni',
    opener: {
      line: "Dans une lettre à la Ville, un seul petit or retourne tout l'argument : ici tu apprends à le lire, et à relier deux refus avec ni. EN: In a letter to the city, one small or turns the whole argument: here you learn to read it, and to join two refusals with ni.",
      imageRef: 'lessons/coordination/act07.jpg',
    },
    sections: [],
    milestone: "Tu reconnais or dans un argument écrit et tu relies deux éléments niés avec ni. EN: You recognise or in a written argument and join two negated items with ni.",
    estScreens: 34, restPoints: ['a7-lettre', 'a7-exemples'],
  },
  sections: [A7_LETTRE, A7_OR, A7_CONSTRUIRE, A7_EXEMPLES, A7_CHOISIR, A7_PIEGE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 · AJOUTER ET PRÉCISER
 *
 *  puis and ensuite are CITED (a2.27 for a route, b1.03 for a story), not
 *  re-taught: one card and one table row.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Ajouter, prouver, préciser',
  frSub: 'Écoute ce que fait le deuxième morceau',
  lines: [
    ln(E(1117)), ln(E(1120)), ln(E(1121)), ln(E(1119)),
    ln(E(1127)), ln(E(1128)), ln(E(1123)), ln(E(1131)),
  ],
  questions: [
    { q: "Première phrase : combien d'avantages a l'appartement ?", opts: ['un', 'deux'], correct: 1, why: "Grand, et en plus bien situé : deux. EN: two." },
    { q: 'Deuxième phrase : en effet ajoute-t-il un argument ?', opts: ['Non, il donne la preuve.', 'Oui.'], correct: 0, why: "en effet confirme : il a mal dormi, voilà pourquoi. EN: en effet confirms." },
    { q: "Troisième phrase : jeudi, c'est...", opts: ['un autre jour', 'après-demain, dit autrement'], correct: 1, why: "c'est-à-dire redit plus précisément. EN: the same day, restated." },
    { q: 'Cinquième phrase : pourquoi parle-t-elle bien espagnol ?', opts: ['elle a vécu à Madrid', 'elle a étudié'], correct: 0, why: "En effet, elle a vécu à Madrid : la preuve. EN: the evidence." },
    { q: 'Dernière phrase : le bus est...', opts: ['un autre problème', 'la solution', 'la raison'], correct: 0, why: "En plus : un problème de plus. EN: one more problem." },
  ],
  audio: REC('rec-b1-30-ajout-ecoute'),
  say: REFRAME,
  terms: ['ajout', 'precision'],
};

const A8_AJOUT: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-ajout',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ajout',
  title: 'Ajouter, prouver, préciser',
  frSub: 'en plus, en effet, c’est-à-dire',
  hint: 'Quatre cartes. Demande-toi ce que la deuxième phrase apporte.',
  audio: REC('rec-b1-30-ajout'),
  say: REFRAME,
  terms: ['ajout', 'precision'],
  cards: [
    {
      head: 'Un argument de plus', label: 'en plus · de plus',
      fr: `${fr(E(1117))} · ${fr(E(1119))}`,
      sub: `${rsOf(E(1117))} · ${rsOf(E(1119))}`,
      body: "Même direction, un argument de plus. en plus à l'oral, de plus à l'écrit. EN: one more argument; en plus spoken, de plus written.",
    },
    {
      head: 'La preuve', label: 'en effet',
      fr: fr(E(1120)),
      sub: rsOf(E(1120)),
      body: "en effet confirme ce que tu viens de dire, avec une preuve. Ce n'est pas in fact, qui corrige. EN: en effet confirms; it is not in fact.",
    },
    {
      head: 'La même idée, plus précise', label: "c'est-à-dire",
      fr: fr(E(1121)),
      sub: rsOf(E(1121)),
      body: "c'est-à-dire n'ajoute rien : il redit plus clairement. EN: c'est-à-dire restates, it adds nothing.",
    },
    {
      head: "L'ordre, déjà vu", label: Cap(TRANSPORTS_REF),
      fr: fr(E(1123)),
      sub: rsOf(E(1123)),
      body: `« ${A227_REFRAME} » En français : « ${A227_REFRAME_FR} » puis et ensuite ordonnent, comme dans ${PC_IMPARFAIT_REF}. EN: puis and ensuite give order.`,
    },
  ],
};

const A8_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-tableau',
  layer: 'core',
  sheetId: 'sheet-ajout',
  title: 'Six mots qui relient deux phrases',
  cols: ['Mot', 'Ce qu’il fait', 'Registre'],
  rows: [
    { cells: ['en plus', 'ajoute', 'plutôt oral'], say: fr(E(1117)),
      detail: { title: 'en plus', body: "Un argument de plus, souvent après et à l'oral. EN: one more point.", say: fr(E(1118)) } },
    { cells: ['de plus', 'ajoute', 'écrit'], say: fr(E(1119)),
      detail: { title: 'de plus', body: "La même chose, dans un courriel ou une lettre. EN: the written version.", say: fr(E(1126)) } },
    { cells: ['en effet', 'confirme', 'neutre'], say: fr(E(1120)),
      detail: { title: 'en effet', body: "La preuve de ce qui vient d'être dit. EN: the evidence.", say: fr(E(1130)) } },
    { cells: ["c'est-à-dire", 'précise', 'neutre'], say: fr(E(1121)),
      detail: { title: "c'est-à-dire", body: "La même idée, plus claire. EN: the same idea, clearer.", say: fr(E(1128)) } },
    { cells: ['puis', "donne l'ordre", 'neutre'], say: fr(E(1124)),
      detail: { title: 'puis', body: "L'étape suivante. EN: the next step.", say: fr('fr.a2.routines.049') } },
    { cells: ['ensuite', "donne l'ordre", 'neutre'], say: fr(E(1123)),
      detail: { title: 'ensuite', body: "L'étape suivante, souvent après d'abord. EN: the next step, often after d'abord.", say: fr('fr.a2.routines.051') } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ajout'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce que la deuxième phrase apporte',
  groups: [
    grp('Un argument de plus', [
      it(E(1126), "de plus : l'école proche"),
      it(E(1129), 'et en plus : le retard'),
      it(E(1131), 'en plus : pas de bus'),
      it('fr.a1.mots-de-liaison.007', 'en plus : le vent'),
    ], chk(
      '« Le quartier est calme. De plus, les écoles sont proches. » Les écoles, c’est...',
      ['un avantage de plus', 'la preuve que le quartier est calme'], 0,
      "de plus ajoute un argument. EN: de plus adds.")),
    grp('La preuve, ou la précision', [
      it(E(1127), 'en effet : Madrid, la preuve'),
      it(E(1130), 'en effet : tu as raison'),
      it(E(1122), "c'est-à-dire : vingt heures"),
      it(E(1128), "c'est-à-dire : samedi et dimanche"),
    ], chk(
      "« Il travaille à mi-temps, c'est-à-dire vingt heures par semaine. » Vingt heures, c'est...",
      ['une nouvelle information', 'mi-temps, dit plus précisément'], 1,
      "c'est-à-dire redit. EN: it restates."),
    ),
    ctl('En effet', "« Tu as raison. En effet, c'est trop cher. » Es-tu d'accord ?",
      ['Oui', 'Non'], 0,
      "en effet confirme. EN: en effet agrees and confirms."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ajout', 'precision'],
};

const A8_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a8-cartes',
  layer: 'core',
  title: 'Huit cartes pour relier',
  cards: [
    { front: 'on top of that', back: 'en plus', say: fr(E(1117)) },
    { front: 'moreover (written)', back: 'de plus', say: fr(E(1119)) },
    { front: 'indeed, and in fact (confirming)', back: 'en effet', say: fr(E(1120)) },
    { front: 'that is, in other words', back: "c'est-à-dire", say: fr(E(1121)) },
    { front: 'and on top of that, you are late', back: 'et en plus, tu es en retard', say: fr(E(1129)) },
    { front: 'you are right, it is indeed too expensive', back: "tu as raison, en effet, c'est trop cher", say: fr(E(1130)) },
    { front: 'first we visit, then we decide', back: "d'abord on visite, ensuite on décide", say: fr(E(1123)) },
    { front: 'I will finish this file, then I will call you', back: "je finis ce dossier, puis je t'appelle", say: fr(E(1124)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ajout'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon mot pour la deuxième phrase',
  groups: [
    grp('Ajouter ou prouver', [
      it(E(1117), 'deux avantages'),
      it(E(1120), 'une observation, puis sa preuve'),
      it(E(1119), 'deux arguments, à l’écrit'),
      it(E(1127), 'une qualité, puis sa preuve'),
    ], chk(
      "« Elle parle bien espagnol. ..., elle a vécu à Madrid. »",
      ['De plus', 'En effet'], 1,
      "Madrid explique et prouve : en effet. EN: evidence takes en effet."),
    ),
    grp('Préciser ou ordonner', [
      it(E(1121), 'une date précisée'),
      it(E(1128), 'le week-end précisé'),
      it(E(1124), 'deux étapes'),
      it(E(1123), 'deux étapes, avec d’abord'),
    ], chk(
      "« Je finis ce dossier, ... je t'appelle. »",
      ["c'est-à-dire", 'puis', 'en effet'], 1,
      "Deux étapes dans l'ordre : puis. EN: two steps in order."),
    ),
    ctl('Le registre', 'Tu écris une lettre de motivation. Quel mot choisis-tu ?',
      ['de plus', 'en plus'], 0,
      "À l'écrit soigné, de plus. EN: de plus in formal writing."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ajout', 'precision'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre ajouts de travers',
  errors: [
    {
      wrong: "Il dit qu'il est riche. En effet, il est pauvre.",
      right: "Il dit qu'il est riche, mais il est pauvre.",
      why: "en effet ressemble à in fact, qui corrige. Mais en effet confirme. Pour contredire, mais. EN: en effet confirms; it cannot contradict.",
    },
    {
      wrong: 'Il pleut. En plus, il fait beau.',
      right: 'Il pleut, mais il fait doux.',
      why: "en plus ajoute dans le même sens. Une bonne nouvelle après une mauvaise, c'est un contraste : mais. EN: en plus keeps the same direction.",
    },
    {
      wrong: "J'arrive jeudi, c'est-à-dire je reste deux jours.",
      right: "J'arrive jeudi, et je reste deux jours.",
      why: "c'est-à-dire ne peut pas ajouter une information nouvelle : il redit. EN: c'est-à-dire cannot add new information.",
    },
    {
      wrong: 'Madame, le projet est utile. Et en plus, il ne coûte pas cher.',
      right: 'Madame, le projet est utile. De plus, il ne coûte pas cher.',
      why: "« Et en plus » est très oral. Dans une lettre, de plus. EN: in a letter, de plus.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ajout', 'precision'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('En effet', 'en effet sert à...',
    ['confirmer', 'contredire'], 0,
    "Il confirme avec une preuve. EN: to confirm."),
  ctl("C'est-à-dire", "c'est-à-dire ajoute-t-il une idée nouvelle ?",
    ['Oui', 'Non, il précise'], 1,
    "Il redit plus précisément. EN: it restates."),
  ctl("L'écrit", "Quel mot est plus écrit ?",
    ['en plus', 'de plus', 'et en plus'], 1,
    "de plus. EN: de plus."),
], ['ajout', 'precision']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Ajouter et préciser',
    opener: {
      line: "Grand, et en plus bien situé : ici tu apprends les mots qui ajoutent un argument, qui prouvent, et qui précisent. EN: Big, and on top of that well located: here you learn the words that add a point, prove it, and make it precise.",
      imageRef: 'lessons/coordination/act08.jpg',
    },
    sections: [],
    milestone: "Tu ajoutes avec en plus ou de plus, tu prouves avec en effet et tu précises avec c'est-à-dire. EN: You add with en plus or de plus, prove with en effet and restate with c'est-à-dire.",
    estScreens: 40, restPoints: ['a8-tableau', 'a8-cartes'],
  },
  sections: [A8_ECOUTE, A8_AJOUT, A8_TABLEAU, A8_CONSTRUIRE, A8_CARTES, A8_CHOISIR, A8_ERREURS, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 · SINON, ET POURTANT
 *
 *  sinon is taught. pourtant and cependant are CONCESSION, b1.32's: they are
 *  read, sorted and recognised here, never asked for in a typeIn.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Le départ de sept heures',
  frSub: 'Chez Sophie, à Lyon',
  setting: "Lyon, un samedi matin. Tu passes le week-end chez ton amie Sophie. Vous partez en Ardèche, et Sophie organise tout.",
  bubbles: [
    { from: 'narrator', fr: 'Six heures et demie. Sophie a déjà son manteau.', en: 'Half past six. Sophie already has her coat on.' },
    { from: 'coach', fr: fr(E(1136)), en: src(E(1136)).en },
    { from: 'user', fr: "D'accord. Je prends un café, et j'arrive.", en: 'All right. I will have a coffee, and I am coming.', warn: 'et : une action de plus' },
    { from: 'coach', fr: fr(E(1137)), en: src(E(1137)).en },
    { from: 'user', fr: "Il fait beau, pourtant. Mais bon, je le prends.", en: 'The weather is nice, though. Still, I will take it.', warn: 'pourtant : à reconnaître' },
    { from: 'coach', fr: fr(E(1147)), en: src(E(1147)).en },
    { from: 'narrator', fr: "Trois sinon en dix minutes. Sophie sourit : elle aime quand tout est prévu.", en: 'Three sinons in ten minutes. Sophie smiles: she likes everything planned.' },
  ],
  closing: { fr: 'Sinon dit ce qui arrive si tu ne fais pas la première chose.', en: 'Sinon says what happens if you do not do the first thing.' },
  audio: REC('rec-b1-30-lyon'),
  say: REFRAME,
  terms: ['connecteur'],
};

const A9_SINON: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-sinon',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ajout',
  title: 'Sinon, et pourtant',
  frSub: 'le cas contraire, et une opposition forte',
  hint: 'Quatre cartes. Les trois premières pour parler, la dernière pour lire.',
  audio: REC('rec-b1-30-sinon'),
  say: REFRAME,
  terms: ['connecteur', 'opposition'],
  cards: [
    {
      head: 'Sinon : ou bien, attention', label: 'sinon',
      fr: fr(E(1136)),
      sub: rsOf(E(1136)),
      body: "Une consigne, puis sinon et ce qui arrive si tu ne la suis pas. Otherwise, or else. EN: an instruction, then what happens if you ignore it.",
    },
    {
      head: 'Sinon : une autre possibilité', label: 'sinon',
      fr: fr(E(1139)),
      sub: rsOf(E(1139)),
      body: "Un premier plan, puis sinon et le plan B. EN: plan A, then sinon and plan B.",
    },
    {
      head: "À l'oral : à part ça", label: 'ça va, sinon',
      fr: fr(E(1140)),
      sub: rsOf(E(1140)),
      body: "En fin de conversation, sinon change de sujet : et à part ça, comment ça va ? EN: in speech, sinon also means apart from that.",
    },
    {
      head: 'Pourtant, cependant : à lire', label: Cap(CONCESSION_REF),
      fr: fr(E(1141)),
      sub: rsOf(E(1141)),
      body: `Comme mais, en plus fort : on attendait vraiment autre chose. C'est la concession, le sujet de ${CONCESSION_REF}. Ici, reconnais-les. EN: stronger than mais; recognise them now, use them later.`,
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'La consigne, puis sinon',
  groups: [
    grp('Sinon : sinon il arrive quoi', [
      it(E(1137), 'le manteau, sinon le froid'),
      it(E(1138), 'réserver, sinon plus de place'),
      it(E(1145), "la ceinture, sinon l'amende"),
      it('fr.a2.heure-et-date.099', "tout de suite, sinon l'oubli"),
    ], chk(
      "« Réserve aujourd'hui, sinon il n'y aura plus de place. » Sinon veut dire...",
      ['si tu ne réserves pas', 'si tu réserves'], 0,
      "sinon : dans le cas contraire. EN: if you do not."),
    ),
    grp('Pourtant, à reconnaître', [
      it(E(1141), 'beaucoup de travail, et pourtant l’échec'),
      it(E(1142), 'le beau temps, et pourtant dedans'),
      it(E(1143), 'un test facile, et pourtant peu de réussites'),
      it(E(1146), 'mais : riche, et pas heureux'),
    ], chk(
      "« Il fait beau. Pourtant, elle reste à l'intérieur. » On attendait...",
      ['qu’elle reste dedans', 'qu’elle sorte'], 1,
      "pourtant : le contraire de ce qu'on attendait. EN: the opposite of the expected."),
    ),
    ctl('Le plan B', '« On se voit samedi. Sinon, dimanche. » Combien de rendez-vous ?',
      ['deux', 'un seul, samedi ou dimanche'], 1,
      "sinon propose une autre possibilité. EN: an alternative, one meeting."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur', 'opposition'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  sheetId: 'sheet-ajout',
  title: 'Sinon et pourtant, en situation',
  examples: [
    ex(E(1147), "une consigne à un ami, et le risque."),
    ex(E(1145), 'une règle, et la sanction.'),
    ex(E(1139), 'un plan, et le plan B.'),
    ex(E(1140), "à l'oral : et à part ça."),
    ex(E(1143), 'cependant, dans un rapport écrit.'),
    ex(E(1142), 'pourtant, pour ce qui étonne.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Sinon, donc ou mais',
  groups: [
    grp('Le risque ou la suite', [
      it(E(1136), 'sinon : le risque'),
      it(E(1082), 'donc : la suite'),
      it(E(1137), 'sinon : le risque'),
      it(E(1070), 'donc : la suite'),
    ], chk(
      "« Mets ta ceinture, ... tu auras une amende. »",
      ['sinon', 'donc'], 0,
      "L'amende arrive si tu ne la mets pas : sinon. EN: the fine comes if you do not."),
    ),
    grp('Mais ou pourtant', [
      it(E(1146), 'mais, à l’oral comme à l’écrit'),
      it(E(1141), 'pourtant, plus fort'),
      it(E(1060), 'mais, un contraste simple'),
      it(E(1143), 'cependant, très écrit'),
    ], chk(
      'Pour parler à un ami, tu utilises surtout...',
      ['cependant', 'mais'], 1,
      "mais est partout ; pourtant et cependant sont plus forts et plus écrits. EN: mais is everywhere."),
    ),
    ctl('Le sens', "« Prends ton manteau, sinon tu vas avoir froid. » Tu prends le manteau...",
      ['pour ne pas avoir froid', 'parce que tu as froid', 'pour avoir chaud en été'], 0,
      "sinon montre le risque que tu évites. EN: to avoid the risk."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur', 'opposition'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre liens à l’envers',
  errors: [
    {
      wrong: "Réserve aujourd'hui, sinon il y aura de la place.",
      right: fr(E(1138)),
      why: "Après sinon vient le problème, pas la bonne nouvelle. EN: sinon introduces the bad outcome.",
    },
    {
      wrong: 'Il a beaucoup travaillé. Pourtant, il a réussi.',
      right: 'Il a beaucoup travaillé, donc il a réussi.',
      why: "pourtant annonce une surprise. Réussir après beaucoup de travail n'étonne personne : c'est une suite. EN: no surprise, so no pourtant.",
    },
    {
      wrong: 'Sinon tu te dépêches, on va rater le train.',
      right: fr(E(1136)),
      why: "En anglais, unless ouvre la phrase. sinon vient après la consigne. EN: sinon comes after the instruction.",
    },
    {
      wrong: 'Il pleut. Cependant, je prends mon parapluie.',
      right: 'Il pleut, donc je prends mon parapluie.',
      why: "cependant ressemble à however, et tu l'as voulu élégant. Mais le parapluie est une suite logique. EN: a logical result takes donc.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur', 'opposition'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Sinon', '« Note l’adresse, sinon tu vas l’oublier. » Sinon veut dire...',
    ['si tu ne la notes pas', 'parce que'], 0,
    "Dans le cas contraire. EN: otherwise."),
  ctl('La place', 'Où va sinon ?',
    ['avant la consigne', 'après la consigne'], 1,
    "La consigne, puis sinon et le risque. EN: after the instruction."),
  ctl('Pourtant', 'pourtant annonce...',
    ['une conséquence', 'une surprise', 'un exemple'], 1,
    "Ce qu'on n'attendait pas. EN: something unexpected."),
], ['connecteur', 'opposition']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Sinon, et pourtant',
    opener: {
      line: "Dépêche-toi, sinon on rate le train : ici tu apprends à dire le cas contraire, et à reconnaître pourtant. EN: Hurry up, or we miss the train: here you learn to say the alternative case, and to recognise pourtant.",
      imageRef: 'lessons/coordination/act09.jpg',
    },
    sections: [],
    milestone: "Tu dis le risque ou le plan B avec sinon, et tu reconnais pourtant et cependant quand tu lis. EN: You give the risk or plan B with sinon, and recognise pourtant and cependant when you read.",
    estScreens: 30, restPoints: ['a9-construire'],
  },
  sections: [A9_HISTOIRE, A9_SINON, A9_CONSTRUIRE, A9_EXEMPLES, A9_CHOISIR, A9_ERREURS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 · NE PAS TOUT RÉPÉTER
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Ce qui n’est pas répété',
  frSub: 'Écoute les phrases courtes',
  lines: [
    ln(E(1150)), ln(E(1151)), ln(E(1152)), ln(E(1154)),
    ln(E(1156)), ln(E(1158)), ln(E(1161)), ln(E(1163)),
  ],
  questions: [
    { q: 'Première phrase : parle-t-il espagnol ?', opts: ['Oui', 'Non'], correct: 1, why: "mais pas espagnol : le verbe parle n'est pas répété. EN: the verb is understood." },
    { q: 'Deuxième phrase : qui aime le thé ?', opts: ['elle et moi', 'elle seulement'], correct: 0, why: "et moi aussi : moi aussi j'aime le thé. EN: both." },
    { q: 'Troisième phrase : aimes-tu le café ?', opts: ['Oui', 'Non'], correct: 1, why: "mais pas moi. EN: I do not." },
    { q: 'Où habite la sœur ?', opts: ['à Liège', 'à Namur', 'on ne sait pas'], correct: 1, why: "et ma sœur à Namur : habite n'est pas répété. EN: habite is understood." },
    { q: 'Septième phrase : lui, il aime le froid ?', opts: ['Non', 'Oui'], correct: 0, why: "et lui non plus : il ne l'aime pas non plus. EN: neither does he." },
  ],
  audio: REC('rec-b1-30-ellipse-ecoute'),
  say: REFRAME,
  terms: ['ellipse'],
};

const A10_ELLIPSE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-ellipse',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-message',
  title: 'Dire moins, dire mieux',
  frSub: "l'ellipse après et et mais",
  hint: 'Quatre cartes. Cherche ce qui manque, et que tout le monde comprend.',
  audio: REC('rec-b1-30-ellipse'),
  say: REFRAME,
  terms: ['ellipse'],
  cards: [
    {
      head: 'Mais pas', label: 'le verbe enlevé',
      fr: fr(E(1150)),
      sub: rsOf(E(1150)),
      body: "Le verbe est déjà dit : après mais, pas suffit. Jamais « mais ne pas ». EN: after mais, pas alone; never mais ne pas.",
    },
    {
      head: 'Moi aussi, lui non plus', label: 'toute la phrase',
      fr: `${fr(E(1151))} · ${fr(E(1161))}`,
      sub: `${rsOf(E(1151))} · ${rsOf(E(1161))}`,
      body: `aussi après une phrase positive, non plus après une négative. ${Cap(NEGATION_AV_REF)} t'a donné non plus. EN: aussi after a positive, non plus after a negative.`,
    },
    {
      head: 'Le sujet dit une fois', label: 'deux verbes',
      fr: fr(E(1156)),
      sub: rsOf(E(1156)),
      body: "Même sujet pour deux verbes : il n'est pas répété après et. EN: one subject, two verbs, no repeat.",
    },
    {
      head: 'Le verbe dit une fois', label: 'deux sujets',
      fr: fr(E(1154)),
      sub: rsOf(E(1154)),
      body: "Même verbe pour deux personnes : habite n'est dit qu'une fois. La virgule garde sa place. EN: one verb, two subjects.",
    },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Enlève ce qui est déjà dit',
  groups: [
    grp('Mais pas', [
      it(E(1153), 'pas le journal'),
      it(E(1157), 'pas facile'),
      it(E(1158), 'pas le château'),
      it(E(1164), 'pas en hiver'),
    ], chk(
      "« J'aime Montréal, mais ... en hiver. »",
      ['ne pas', 'pas'], 1,
      "Après mais, pas seul. EN: just pas."),
    ),
    grp('Aussi, non plus, et toi', [
      it(E(1160), 'et son mari aussi'),
      it(E(1161), 'et lui non plus'),
      it(E(1162), 'et toi : la question courte'),
      it(E(1163), 'le même auxiliaire'),
    ], chk(
      "« Je n'aime pas le froid, et lui ... »",
      ['non plus', 'aussi'], 0,
      "Après une négation, non plus. EN: after a negative, non plus.")),
    ctl("L'article", "« Il boit du thé, mais pas ... café. »",
      ['du', 'de', 'le'], 1,
      "pas fait passer du à de, comme dans toute négation. EN: pas turns du into de."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ellipse'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-message',
  title: 'Avant d’écrire ton message',
  points: [
    "Un lien par jointure : demande-toi ce que la deuxième idée fait à la première. EN: one link per joint.",
    "Une liste : des virgules, puis un seul et. EN: commas, then one et.",
    "donc seulement pour une vraie suite, car seulement après une virgule. EN: donc for real results, car after a comma.",
    "Après et ou mais, enlève ce qui est déjà dit. EN: do not repeat after et or mais.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ellipse', 'connecteur'],
};

const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Court, mais juste',
  groups: [
    grp('La version courte', [
      it(E(1150), 'anglais oui, espagnol non'),
      it(E(1152), 'lui oui, moi non'),
      it(E(1151), 'elle oui, moi aussi'),
      it(E(1155), 'deux jours, un seul verbe'),
    ], chk(
      "Laquelle est la bonne version courte de « Je parle anglais, mais je ne parle pas espagnol » ?",
      ['Je parle anglais, mais pas espagnol.', 'Je parle anglais, mais ne pas espagnol.', 'Je parle anglais, mais espagnol non.'], 0,
      "mais pas, sans ne. EN: mais pas, no ne."),
    ),
    grp('Quand ne pas enlever', [
      it(E(1180), 'deux verbes niés et affirmés : on garde tout'),
      it(E(1163), 'le même auxiliaire, sous-entendu'),
      it(E(1156), 'le même sujet'),
      it(E(1154), 'le même verbe'),
    ], chk(
      "« Je quitte l'équipe, mais je ne quitte pas la ville. » Peut-on dire « mais pas la ville » ?",
      ['Non, jamais', 'Oui, les deux sont justes'], 1,
      "Les deux vont. La phrase longue insiste un peu plus. EN: both are right; the long one is more emphatic."),
    ),
    ctl('Aussi ou non plus', "« Elle vient ce soir, et son mari ... »",
      ['non plus', 'aussi'], 1,
      "Phrase positive : aussi. EN: positive, so aussi."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ellipse'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Les phrases courtes qui cassent',
  rule: {
    title: 'Mais pas, et moi aussi, et lui non plus',
    body: "Après mais, pas seul, jamais ne pas. Après une phrase positive, aussi ; après une négative, non plus. Et pas change du en de. EN: mais pas, not mais ne pas; aussi after positives, non plus after negatives; pas turns du into de.",
  },
  cards: [
    { promptLabel: 'ne pas', promptSound: 'Je parle anglais, mais ne pas espagnol.', fr: fr(E(1150)), ipa: ipaOf(E(1150)), tip: "mais pas, sans ne. EN: no ne." },
    { promptLabel: 'aussi après un non', promptSound: "Je n'aime pas le froid, et lui aussi.", fr: fr(E(1161)), ipa: ipaOf(E(1161)), tip: "Après une négation : non plus. EN: non plus." },
    { promptLabel: 'du après pas', promptSound: 'Il boit du thé, mais pas du café.', fr: fr(E(1165)), ipa: ipaOf(E(1165)), tip: "pas de café. EN: pas de." },
    { promptLabel: 'non pour pas', promptSound: "J'aime Montréal, mais non en hiver.", fr: fr(E(1164)), ipa: ipaOf(E(1164)), tip: "mais pas en hiver. EN: mais pas." },
    { promptLabel: 'tout répété', promptSound: "Elle aime le thé, et moi aussi j'aime le thé.", fr: fr(E(1151)), ipa: ipaOf(E(1151)), tip: "moi aussi suffit. EN: moi aussi is enough." },
    { promptLabel: 'et devant chaque verbe', promptSound: 'Il chante et il danse et il rit.', fr: 'Il chante, danse et rit.', ipa: '/il ʃɑ̃t dɑ̃s e ʁi/', tip: "Un sujet, trois verbes, un seul et. EN: one subject, one et." },
  ],
  drill: [
    { promptSay: 'Je parle anglais, mais ... espagnol.', opts: ['pas', 'ne pas'], correct: 0 },
    { promptSay: "Je n'aime pas le froid, et lui ...", opts: ['aussi', 'non plus'], correct: 1 },
    { promptSay: 'Il boit du thé, mais pas ... café.', opts: ['du', 'de'], correct: 1 },
    { promptSay: "Elle aime le thé, et moi ...", opts: ['aussi', 'non plus', 'pas'], correct: 0 },
    { promptSay: "J'aime Montréal, mais ... en hiver.", opts: ['non', 'ne pas', 'pas'], correct: 2 },
    { promptSay: 'Il aime le café, mais ... moi.', opts: ['pas', 'non plus'], correct: 0 },
    { promptSay: 'Mon frère habite à Liège, et ma sœur ... Namur.', opts: ['habite à', 'à'], correct: 1 },
    { promptSay: 'Il a fini, et ... ?', opts: ['toi', 'tu'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Mais pas, aussi, non plus' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse donne' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-30-piege-ellipse'),
  say: REFRAME,
  terms: ['ellipse'],
};

const A10_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a10-dictee',
  layer: 'core',
  title: 'Écris la phrase courte que tu entends',
  frSub: 'mais pas, et moi aussi',
  itemIds: dicteeFor(10),
  audio: AUDIO,
  say: REFRAME,
  terms: ['ellipse'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Mais pas', "« Je parle anglais, mais ... espagnol. »",
    ['ne pas', 'pas'], 1,
    "pas, seul. EN: pas alone."),
  ctl('Non plus', "« Il ne fume pas, et moi ... »",
    ['aussi', 'non plus'], 1,
    "Après une négation : non plus. EN: non plus."),
  ctl('Le verbe', "« Mon frère habite à Liège, et ma sœur à Namur. » Qu'est-ce qui manque ?",
    ['habite', 'ma sœur', 'rien'], 0,
    "habite, qui est déjà dit. EN: the verb, already said."),
], ['ellipse']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Ne pas tout répéter',
    opener: {
      line: "Je parle anglais, mais pas espagnol : ici tu apprends à enlever ce qui est déjà dit, sans perdre le sens. EN: I speak English, but not Spanish: here you learn to leave out what is already said, without losing the meaning.",
      imageRef: 'lessons/coordination/act10.jpg',
    },
    sections: [],
    milestone: "Tu raccourcis après et et mais : mais pas, et moi aussi, et lui non plus. EN: You shorten after et and mais: mais pas, et moi aussi, et lui non plus.",
    estScreens: 38, restPoints: ['a10-construire', 'a10-choisir'],
  },
  sections: [A10_ECOUTE, A10_ELLIPSE, A10_CONSTRUIRE, A10_FOCUS, A10_CHOISIR, A10_PIEGE, A10_DICTEE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 · EXPLIQUER UNE DÉCISION
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Julie',
  frSub: 'Le modèle que tu vas écrire',
  text: MESSAGE_TEXT,
  glossary: [
    { word: 'annoncer', en: 'to announce', note: 'Dire une nouvelle à tout le monde.' },
    { word: 'davantage', en: 'more', note: 'Plus, dans une phrase soignée.' },
    { word: 'vit seule', en: 'lives alone', note: 'Personne ne vit avec elle.' },
    { word: 'Lévis', en: 'Lévis', note: 'Une ville en face de Québec, de l’autre côté du fleuve.' },
    { word: 'joignable', en: 'reachable', note: 'On peut te contacter.' },
  ],
  questions: [
    { q: 'Que dit Julie en premier ?', a: "Sa décision : « j'ai pris ma décision ». Les raisons viennent ensuite." },
    { q: 'Quels mots donnent ses raisons ?', a: "car (les deux offres étaient bonnes), de plus (la famille), en effet (sa mère à Lévis)." },
    { q: 'Où est le contraste ?', a: "« Le salaire est moins élevé, mais le travail me plaît davantage. »" },
    { q: 'Quel mot conclut ?', a: "donc : « J'ai donc accepté le poste. » Après les raisons, pas avant." },
    { q: 'Combien de connecteurs différents compte-t-elle ?', a: "Dix : et, car, mais, de plus, en effet, c'est-à-dire, donc, ni ... ni, ou, sinon. Et aucun n'est là pour rien." },
  ],
  audio: REC('rec-b1-30-message'),
  say: REFRAME,
  terms: ['connecteur'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour ton message',
  steps: [
    "1. Dis ta décision tout de suite, en une phrase. EN: state the decision first.",
    "2. Donne deux ou trois raisons, reliées par car, de plus, en effet. EN: two or three reasons, linked.",
    "3. Dis ce qui t'a fait hésiter, avec mais, puis conclus avec donc. EN: the doubt with mais, then conclude with donc.",
    "4. Donne la suite : quand, comment, avec c'est-à-dire, ou, sinon. EN: what happens next.",
    "5. Relis chaque jointure : remplace le mot par et. Si le sens change, garde-le. EN: test each link by swapping in et.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    uc('Tu annonces un départ à ton équipe', E(1168)),
    uc('Tu refuses une offre avec tact', E(1179)),
    uc('Tu rassures un collègue sur la suite', E(1182)),
    uc('Tu expliques ton choix à un ami', E(1170)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Mathieu au téléphone',
  setting: "Le soir, Mathieu t'appelle. Il veut savoir ce que tu as décidé pour Genève, et il pose beaucoup de questions.",
  turns: [
    {
      ai: 'Salut. Alors, tu as pris ta décision pour Genève ?',
      en: 'Hi. So, have you made your decision about Geneva?',
      user: 'Oui, je reste à Montréal, car ma mère est malade.',
      userEn: 'Yes, I am staying in Montréal, because my mother is ill. (car: the reason, after a comma.)',
      alts: [
        { fr: 'Oui. Je reste à Montréal, parce que ma mère est malade.', en: 'Yes. I am staying in Montréal, because my mother is ill. (parce que: also right, and more spoken.)' },
        { fr: fr(E(1008)), en: src(E(1008)).en },
      ],
    },
    {
      ai: 'Mais le salaire est bien meilleur là-bas, non ?',
      en: 'But the salary is much better there, isn’t it?',
      user: "Oui, c'est vrai, mais ma famille compte plus.",
      userEn: 'Yes, that is true, but my family matters more. (mais: a contrast.)',
      alts: [
        { fr: fr(E(1000)), en: src(E(1000)).en },
        { fr: "Je sais, mais ce n'est pas l'essentiel.", en: 'I know, but that is not what matters most.' },
      ],
    },
    {
      ai: 'Et tes enfants, ils voulaient partir ?',
      en: 'And your children, did they want to go?',
      user: "Non, ils ne voulaient ni changer d'école ni quitter leurs amis.",
      userEn: 'No, they wanted neither to change school nor to leave their friends. (ni ... ni: two refusals.)',
      alts: [
        { fr: "Non, ni l'un ni l'autre.", en: 'No, neither of them.' },
        { fr: 'Non, pas du tout.', en: 'No, not at all.' },
      ],
    },
    {
      ai: 'Tu vas l’annoncer comment à la direction ?',
      en: 'How are you going to tell management?',
      user: 'Par courriel ou par téléphone, je ne sais pas encore.',
      userEn: 'By email or by phone, I do not know yet. (ou: a choice.)',
      alts: [
        { fr: "Par courriel, puis j'appelle la directrice.", en: 'By email, then I will call the director. (puis: the order.)' },
        { fr: "Par courriel, c'est-à-dire ce soir.", en: 'By email, that is, tonight. (c’est-à-dire: more precise.)' },
      ],
    },
    {
      ai: 'Tu ne regrettes pas un peu ?',
      en: 'Don’t you regret it a little?',
      user: "Un peu, mais c'est la bonne décision pour moi.",
      userEn: 'A little, but it is the right decision for me. (mais: the doubt, then the answer.)',
      alts: [
        { fr: fr(E(1012)), en: src(E(1012)).en },
        { fr: "Non. En effet, j'ai bien réfléchi.", en: 'No. Indeed, I thought it through. (en effet: the proof.)' },
      ],
    },
    {
      ai: 'Bon, alors on fête ça ce soir ?',
      en: 'Right, so shall we celebrate tonight?',
      user: "Oui, sinon on n'aura pas le temps cette semaine.",
      userEn: 'Yes, otherwise we will not have time this week. (sinon: the other case.)',
      alts: [
        { fr: 'Oui, ce soir ou demain.', en: 'Yes, tonight or tomorrow.' },
        { fr: 'Oui. Alors, on se voit à six heures.', en: 'Yes. So, see you at six. (alors: spoken.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur', 'cause'],
};

/** THE GRADED TASK: a connected message that explains a decision. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Explique ta décision',
  frSub: 'Mission écrite',
  brief: "Tu as pris une décision importante : un travail, un déménagement, des études ou un voyage. Écris un message à un collègue ou à un ami pour l'expliquer : ta décision, tes raisons, ce qui t'a fait hésiter, et la suite.",
  briefEn: 'You have made an important decision: a job, a move, studies or a trip. Write a message to a colleague or a friend explaining it: your decision, your reasons, what made you hesitate, and what happens next.',
  produce: "Écris un texte suivi de 90 à 130 mots, avec au moins cinq connecteurs différents bien choisis, dont au moins trois des sept : mais, ou, et, donc, or, ni, car.",
  responseSpec: { kind: 'text', minWords: 90, maxWords: 130 },
  rubric: {
    criteria: [
      {
        key: 'liens',
        label: 'Le bon lien à chaque jointure',
        maxPoints: 4,
        descriptors: [
          "4 : Au moins cinq connecteurs différents, et chacun dit le vrai lien : mais pour un contraste, car pour une raison, donc pour une suite.",
          "3 : Quatre ou cinq connecteurs différents, avec un ou deux liens moins justes, par exemple et là où mais irait mieux.",
          "2 : Deux ou trois connecteurs différents, ou plusieurs liens faux.",
          "1 : Presque tout est relié par et, ou le texte est une liste de phrases sans lien.",
        ],
      },
      {
        key: 'forme',
        label: 'Des connecteurs à leur place',
        maxPoints: 3,
        descriptors: [
          "3 : car après une virgule et jamais en début de phrase, un seul et par liste, si ou tellement pour so quand c'est l'intensité.",
          "2 : Une ou deux erreurs de place ou de ponctuation, mais on comprend tout.",
          "1 : Plusieurs erreurs : car en tête, et partout, si pour une conséquence.",
        ],
      },
      {
        key: 'texte',
        label: 'Un texte qui avance',
        maxPoints: 3,
        descriptors: [
          "3 : La décision d'abord, puis les raisons, le doute et la suite, sans donc à chaque phrase et sans répétition inutile.",
          "2 : L'ordre est là, mais un connecteur revient trop souvent ou une idée est répétée.",
          "1 : Pas d'ordre clair, ou le même connecteur au début de presque chaque phrase.",
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Une décision, au moins deux raisons, la suite, et entre 90 et 130 mots.',
          '1 : Il manque un élément : pas de décision claire, une seule raison, pas de suite, ou moins de 90 mots.',
        ],
      },
    ],
  },
  scaffold: [
    "J'ai pris ma décision, et...",
    "J'ai longtemps hésité, car...",
    '..., mais...',
    'De plus,',
    'En effet,',
    "J'ai donc...",
    "..., c'est-à-dire...",
    'Merci pour tout, et à bientôt.',
  ],
  modelAnswer: "Bonjour Nadia, je voulais te dire ma décision avant la réunion de lundi. J'ai bien réfléchi à l'offre de Genève, et je te remercie de ta confiance. Le poste est passionnant, mais je ne vais pas l'accepter, car ma mère est malade et elle a besoin de moi ici. De plus, mes enfants ne veulent ni changer d'école ni quitter leurs amis cette année. En effet, ils ont déjà déménagé deux fois. Je reste donc à Montréal, c'est-à-dire dans l'équipe actuelle. Je peux aider à trouver un autre candidat, ou former la personne choisie. Sinon, je reste disponible pour les appels avec le bureau de Genève. Merci encore, et à lundi. Sam",
  modelAnswerEn: "Hello Nadia, I wanted to tell you my decision before Monday's meeting. I have thought carefully about the Geneva offer, and thank you for your trust. The job is fascinating, but I am not going to take it, because my mother is ill and needs me here. What is more, my children want neither to change school nor to leave their friends this year. Indeed, they have already moved twice. So I am staying in Montréal, that is, in the current team. I can help find another candidate, or train whoever is chosen. Otherwise, I am still available for calls with the Geneva office. Thanks again, and see you Monday. Sam",
  watchFor: [
    {
      pattern: 'Ideas joined by et where the real link is a contrast, a reason or a result (le salaire est bon et je reste).',
      criterion: 'liens',
      feedback: "Demande-toi ce que la deuxième idée fait à la première. Un contraste : mais. Une raison : car. Une suite : donc.",
      ref: 'a1-scene',
    },
    {
      pattern: 'car and donc swapped, so cause and result are reversed (il fait beau, car je rentre à pied).',
      criterion: 'liens',
      feedback: "car donne la raison après, donc donne la suite après : je rentre à pied, car il fait beau.",
      ref: 'a2-choisir',
    },
    {
      pattern: 'et before every item of a list, or a comma before the final et (du pain et du fromage et des fruits).',
      criterion: 'forme',
      feedback: "Des virgules, puis un seul et devant le dernier : du pain, du fromage et des fruits.",
      ref: 'a3-piege',
    },
    {
      pattern: 'mais without a real contrast, or non seulement without mais (il fait beau, mais il fait chaud).',
      criterion: 'liens',
      feedback: "mais demande un vrai contraste. Deux idées dans le même sens : et, ou de plus.",
      ref: 'a4-erreurs',
    },
    {
      pattern: 'so translated as si for a result, or donc used for intensity (je suis fatigué, si je reste ; je suis donc fatigué).',
      criterion: 'forme',
      feedback: "La suite : donc ou alors. L'intensité : si ou tellement. si pour une suite veut dire if.",
      ref: 'a5-piege',
    },
    {
      pattern: 'donc at the head of most sentences as a filler, claiming consequences that are not there.',
      criterion: 'texte',
      feedback: "Garde donc pour une vraie conclusion. Ailleurs, et, puis ou rien du tout.",
      ref: 'a5-piege',
    },
    {
      pattern: 'car opening a sentence, or car used to answer pourquoi (Car ma mère est malade, je reste).',
      criterion: 'forme',
      feedback: "car vient après une virgule, jamais en premier : je reste, car ma mère est malade.",
      ref: 'a6-erreurs',
    },
    {
      pattern: 'or used for the English or of choice, or ni kept with pas (je n\'ai pas ni le temps ni l\'envie).',
      criterion: 'forme',
      feedback: "Le choix, c'est ou. Avec ni, garde ne et enlève pas : je n'ai ni le temps ni l'envie.",
      ref: 'a7-piege',
    },
    {
      pattern: "en effet used to contradict (as in fact), or c'est-à-dire used to add new information.",
      criterion: 'liens',
      feedback: "en effet confirme, il ne contredit pas. c'est-à-dire redit, il n'ajoute rien.",
      ref: 'a8-erreurs',
    },
    {
      pattern: 'Whole clauses repeated after et or mais, or mais ne pas (je parle anglais, mais ne pas espagnol).',
      criterion: 'texte',
      feedback: "Après mais, pas suffit : je parle anglais, mais pas espagnol.",
      ref: 'a10-piege',
    },
    {
      pattern: 'Under 90 words, no clear decision, a single reason, or no word on what happens next.',
      criterion: 'tache',
      feedback: "Relis la mission : ta décision, au moins deux raisons, la suite, entre 90 et 130 mots.",
      ref: 'a11-plan',
    },
  ],
  graderNotes: [
    'The greeting (Bonjour Nadia, Salut Mathieu) and the sign-off (Merci pour tout, et à bientôt, then the name) do NOT count toward the word budget. Count the body only, with 10% tolerance (81 to 143) before criterion « tache » loses its point.',
    "« Different connectors » means different linking words from this lesson: mais, ou, et, donc, or, ni, car, alors, en plus, de plus, en effet, c'est-à-dire, sinon, puis, ensuite, non seulement ... mais. ni ... ni counts once. Two uses of mais count once. At least three must come from the seven.",
    "parce que, quand, si, alors que and bien que are SUBORDINATION (b1.31, b1.32). Accept them where correct, never mark them as errors, but they do not count toward the five.",
    "pourtant and cependant are recognition only in this lesson. Accept a correct one; do not count it toward the five, and do not mark a slightly forced one harshly.",
    "or is recognition only. Do not require it. A correct written « Or, » counts toward the five.",
    "Serial comma before et (a, b, et c) loses at most one point under « forme » across the whole text, however often it recurs.",
    "car in an informal message to a friend is not an error; it only sounds a little formal.",
    'Accept regional vocabulary (courriel and e-mail, souper and dîner, déménager au Québec, septante in Belgium and Switzerland).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur', 'cause', 'ellipse'],
};

const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tous tes liens à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur', 'sept'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-message',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'les sept', v: 'mais, ou, et, donc, or, ni, car', say: fr(E(1020)),
      detail: { title: 'Ornicar', body: "Sept mots, sept liens. EN: seven words, seven links.", say: fr(E(1023)) } },
    { k: 'la liste', v: 'des virgules, puis un seul et', say: fr(E(1034)),
      detail: { title: 'La liste', body: "Pas de virgule devant et. EN: no comma before et.", say: fr(E(1048)) } },
    { k: 'la suite', v: 'donc, alors ; so = si pour très', say: fr(E(1068)),
      detail: { title: 'Donc', body: "La cause, puis la suite. EN: cause, then result.", say: fr(E(1073)) } },
    { k: 'la raison', v: 'car, après une virgule', say: fr(E(1086)),
      detail: { title: 'Car', body: "Jamais en premier. EN: never first.", say: fr(E(1089)) } },
    { k: 'ajouter, préciser', v: "en plus, de plus, en effet, c'est-à-dire", say: fr(E(1117)),
      detail: { title: 'Les adverbes', body: "Ajouter, prouver, redire. EN: add, prove, restate.", say: fr(E(1120)) } },
    { k: 'raccourcir', v: 'mais pas, et moi aussi', say: fr(E(1150)),
      detail: { title: "L'ellipse", body: "N'écris pas deux fois la même chose. EN: do not say it twice.", say: fr(E(1151)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sept', 'virgule'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu ne relies plus seulement : tu dis le lien. Contraste, raison, suite, choix, refus, ajout, preuve, précision : chaque jointure a son mot. Le piège qui reste est discret : un et là où il fallait mais, ou un donc en tête de chaque phrase. Avant l'examen, reprends ton message. Entoure chaque connecteur et remplace-le par et : si le sens change, il était utile ; sinon, enlève-le. EN: Circle every connector in your message and swap in et; if the meaning changes, keep it, otherwise cut it.",
  stats: [
    { k: 'Les sept', v: 'mais, ou, et, donc, or, ni, car' },
    { k: 'La liste', v: 'des virgules, un seul et' },
    { k: 'La raison, la suite', v: 'car après, donc après' },
    { k: 'Les ajouts', v: "en plus, en effet, c'est-à-dire" },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight, one per act from act 1 to act 10 plus an
 *  integration round on the message. Each round targets a distinct trigger.
 *  `fold()` strips commas and punctuation, so no typed answer turns on a
 *  comma: every typeIn and errorSpot differs from its prompt by a WORD (an et
 *  removed, car for donc, pas for ne pas). Every listenChoose carries `say`.
 *  or and pourtant are never asked for in a typeIn. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Un mot ne va pas. Écris la phrase correcte. EN: One word is wrong; write the sentence correctly.', prompt, answer, accept: [answer], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

/** The quiz's answer slots, spread evenly per option-count class by rotating
 *  each question's options WITH its correct index (content unchanged). The
 *  authored order below is the reading order; LessonRich reshuffles at
 *  runtime anyway, and this keeps validateDensity's quiz-spread rule met. */
function spreadSlots<R extends { questions: QQ[] }>(rounds: R[]): R[] {
  // Three-option questions go to the emptiest slot first (slot 2 can only be
  // fed by them); two-option questions then balance slots 0 and 1.
  const all = rounds.flatMap((r) => r.questions) as (QQ & { opts?: string[]; correct?: number })[];
  const fair = all.filter((x) => typeof x.correct === 'number').length / 3;
  const count = [0, 0, 0, 0];
  const pick = (n: number) => {
    let best = 0;
    if (n > 2 && count[n - 1] < fair) best = n - 1;
    else for (let s = 1; s < n; s++) if (count[s] < count[best]) best = s;
    count[best]++;
    return best;
  };
  const target = new Map<QQ, number>();
  for (const n of [4, 3, 2]) for (const x of all) if (Array.isArray(x.opts) && x.opts.length === n && typeof x.correct === 'number') target.set(x, pick(n));
  return rounds.map((r) => ({
    ...r,
    questions: r.questions.map((q) => {
      const x = q as QQ & { opts?: string[]; correct?: number };
      if (!Array.isArray(x.opts) || typeof x.correct !== 'number') return q;
      const n = x.opts.length;
      const t = target.get(q)!;
      const shift = (t - x.correct + n) % n;
      const opts = new Array<string>(n);
      x.opts.forEach((o, i) => { opts[(i + shift) % n] = o; });
      return { ...x, opts, correct: t } as QQ;
    }),
  }));
}

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: spreadSlots([
    {
      id: 'r1-lien', label: 'Le lien', targets: ['lien-absent'],
      questions: [
        mc('Tu restes malgré un bon salaire. Quel mot relie les deux idées ?', ['et', 'mais', 'donc'], 1, "Un contraste : mais. EN: a contrast.", 'a1-scene'),
        mc('« Je reste à Montréal, car ma mère est malade. » Que dit car ?', ['la raison', 'la conséquence'], 0, "car donne la raison. EN: the reason.", 'a1-reperer'),
        mc("Dans le courriel de Camille, « Or, l'école accepte les élèves en janvier » apporte...", ['un choix', 'une raison', 'un fait nouveau'], 2, "or : le fait qui change tout. EN: a new fact.", 'a1-lecture'),
        mc('Quel mot dit seulement « j’ajoute » ?', ['car', 'et', 'mais'], 1, "et ajoute, sans rien dire d'autre. EN: et only adds.", 'a1-reperer'),
        tI('Relie les deux phrases avec mais.', 'Le poste est intéressant. Il est loin.', fr(E(1009)), "Une qualité, puis un défaut. EN: a plus, then a minus.", 'a1-paires'),
        tI('Relie les deux phrases avec donc.', 'Ma mère est malade. Je ne peux pas partir.', fr(E(1004)), "La cause, puis la suite. EN: cause, then result.", 'a1-reperer'),
        eS(WRONG_ET, fr(E(1184)), "Un contraste et une raison : mais, puis car. EN: mais, then car.", 'a1-scene'),
        lC('Écoute. Pourquoi la personne reste-t-elle ?', fr(E(1001)), ['pour le salaire', 'à cause de sa mère'], 1, "car ma mère est malade. EN: because of her mother.", 'a1-usages'),
      ],
    },
    {
      id: 'r2-sept', label: 'Les sept mots', targets: ['sept-confondus'],
      questions: [
        mc('Complète : « Mais où est donc ... »', ['Oscar', 'Ornicar'], 1, "Mais où est donc Ornicar. EN: the mnemonic.", 'a2-hacks'),
        mc('« Il pleut, ... je prends le bus. »', ['car', 'donc', 'ou'], 1, "La suite : donc. EN: the result.", 'a2-sept'),
        mc("L'anglais « or », pour un choix, se dit...", ['ou', 'or', 'et'], 0, "ou. Le or français est un mot d'argument. EN: ou.", 'a2-erreurs'),
        mc("Quel mot n'est pas une des sept conjonctions ?", ['or', 'ni', 'puis'], 2, "puis ordonne, il n'est pas dans la liste. EN: puis is not one of them.", 'a2-tableau'),
        tI('Dis la même chose avec car.', 'Il pleut, donc je prends le bus.', fr(E(1025)), "Le fait, puis car et la raison. EN: fact, then car and the reason.", 'a2-sept'),
        tI('Relie avec ni ... ni.', "Je n'aime pas le bruit. Je n'aime pas la foule.", fr(E(1026)), "Deux refus : ni ... ni. EN: two refusals.", 'a2-tableau'),
        eS('Il pleut, car je prends le bus.', fr(E(1024)), "Le bus est la suite : donc. EN: the result takes donc.", 'a2-erreurs'),
        lC('Écoute. Quel est le lien ?', fr(E(1023)), ['une opposition', 'une conséquence', 'une addition'], 0, "Fatigué, et pourtant il continue : mais. EN: a contrast.", 'a2-construire'),
      ],
    },
    {
      id: 'r3-liste', label: 'Et, ou, la virgule', targets: ['et-partout'],
      questions: [
        mc('Où va et dans une liste de trois ?', ['devant le dernier', 'devant chaque élément'], 0, "Une seule fois, à la fin. EN: once, at the end.", 'a3-liste'),
        mc('Carte ou espèces : tu paies...', ['des deux façons', "d'une seule façon"], 1, "ou : l'un des deux. EN: one of them.", 'a3-exemples'),
        mc('« Apportez un dessert et/ou une boisson. » Tu peux apporter...', ['seulement un dessert', "l'un, l'autre, ou les deux", 'rien'], 1, "et/ou garde les trois possibilités. EN: and/or.", 'a3-liste'),
        tI('Écris la liste avec un seul et.', 'Il y a des pommes et des poires et des bananes.', fr(E(1047)), "Une virgule, puis et devant le dernier. EN: one et.", 'a3-construire'),
        tI('Écris la liste avec un seul et.', 'Je me lève et je me douche et je pars.', fr(E(1041)), "Virgule, virgule, et. EN: one et.", 'a3-piege'),
        eS('Tu peux payer par carte or en espèces.', fr(E(1037)), "Le choix : ou. EN: ou.", 'a3-piege'),
        eS("J'ai acheté du pain et du fromage et des fruits.", fr(E(1034)), "Un seul et. EN: one et.", 'a3-piege'),
        lC('Écoute. Combien de choses faut-il ?', fr(E(1035)), ['deux', 'trois'], 1, "Un passeport, une photo et un formulaire. EN: three.", 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-mais', label: 'Mais', targets: ['mais-sans-contraste'],
      questions: [
        mc('« Il fait beau ... chaud. »', ['et', 'mais', 'car'], 0, "Même sens : et. EN: same direction.", 'a4-choisir'),
        mc("« Ce n'est pas mon frère, mais mon cousin. » Que fait mais ?", ['il ajoute', 'il corrige'], 1, "La bonne réponse vient après. EN: it corrects.", 'a4-mais'),
        mc('« Non seulement il pleut, ... il fait froid. »', ['et', 'donc', 'mais'], 2, "non seulement ... mais. EN: not only ... but.", 'a4-construire'),
        tI('Dis-le en une phrase avec pas ... mais.', 'Je ne pars pas lundi. Je pars mardi.', fr(E(1055)), "La correction, sans répéter le verbe. EN: no repeated verb.", 'a4-mais'),
        tI('Relie avec mais.', "J'aimerais venir. Je travaille.", fr(E(1059)), "L'envie, puis l'obstacle. EN: the wish, then the obstacle.", 'a4-construire'),
        eS('Non seulement il pleut, et il fait froid.', fr(E(1056)), "non seulement appelle mais. EN: mais.", 'a4-erreurs'),
        eS('Il fait beau, mais il fait chaud.', 'Il fait beau et il fait chaud.', "Pas de contraste : et. EN: no contrast.", 'a4-erreurs'),
        lC('Écoute. Est-ce cher ?', fr(E(1053)), ['oui', "non, mais c'est loin"], 1, "Pas cher, mais loin. EN: not expensive, but far.", 'a4-histoire'),
      ],
    },
    {
      id: 'r5-donc', label: 'Donc, alors, so', targets: ['so-si'],
      questions: [
        mc('« I am so tired. »', ['Je suis tellement fatigué.', 'Je suis donc fatigué.'], 0, "L'intensité : tellement. EN: intensity.", 'a5-donc'),
        mc("« Il a neigé, ... l'école est fermée. »", ['si', 'car', 'donc'], 2, "La suite : donc. EN: the result.", 'a5-construire'),
        mc('Quel mot est le plus oral ?', ['alors', 'donc', 'car'], 0, "alors. EN: alors.", 'a5-tableau'),
        tI('Relie avec donc.', "Il n'avait pas son passeport. Il n'a pas pu partir.", fr(E(1085)), "La cause, puis donc. EN: cause, then donc.", 'a5-construire'),
        tI('Mets donc après le verbe.', 'Donc, il faut partir plus tôt.', fr(E(1070)), "À l'écrit : il faut donc. EN: after the verb.", 'a5-donc'),
        eS('Je suis fatigué, si je vais me coucher.', fr(E(1075)), "Une suite : donc. si voudrait dire if. EN: donc.", 'a5-piege'),
        eS("Il a neigé toute la nuit, si l'école est fermée.", fr(E(1068)), "La suite : donc. EN: donc.", 'a5-piege'),
        lC('Écoute. Y a-t-il une conséquence ?', fr(E(1074)), ['oui', "non, seulement l'intensité"], 1, "si froid : très froid. EN: just intensity.", 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-car', label: 'Car', targets: ['car-en-tete'],
      questions: [
        mc('« Pourquoi tu pars ? » Tu réponds : « ... je suis fatigué. »', ['Car', 'Parce que', 'Donc'], 1, "À pourquoi : parce que. EN: parce que.", 'a6-car'),
        mc('Où va car ?', ['après la première idée et une virgule', 'au début de la phrase'], 0, "Jamais en premier. EN: never first.", 'a6-car'),
        mc('« Il fait beau, donc je rentre à pied », avec car :', ['Il fait beau, car je rentre à pied.', 'Je rentre à pied, car il fait beau.'], 1, "La raison passe derrière. EN: the reason goes second.", 'a6-exemples'),
        tI('Relie avec car.', 'Le vol est annulé. Il y a une tempête.', fr(E(1086)), "Le fait, puis car. EN: fact, then car.", 'a6-construire'),
        tI('Relie avec car.', 'Prends un parapluie. Il va pleuvoir.', fr(E(1091)), "La consigne, puis sa raison. EN: instruction, then reason.", 'a6-construire'),
        eS("Car il fait très froid, nous restons à l'intérieur.", fr(E(1098)), "car après la décision. EN: car second.", 'a6-erreurs'),
        eS('Il fait beau, car je rentre à pied.', fr(E(1096)), "La marche est la suite : donc. EN: donc.", 'a6-choisir'),
        lC('Écoute. Pourquoi la bibliothèque est-elle fermée ?', fr(E(1088)), ['à cause des travaux', "parce que c'est dimanche"], 0, "car les travaux continuent. EN: the works.", 'a6-avis'),
      ],
    },
    {
      id: 'r7-or', label: 'Or et ni', targets: ['or-ou'],
      questions: [
        mc('« Or, il était déjà loué. » or veut dire...', ['ou', 'now, yet : un fait nouveau'], 1, "Un fait qui change tout. EN: a new fact.", 'a7-or'),
        mc('Où lis-tu surtout or ?', ['dans une lettre ou un raisonnement', 'dans un texto'], 0, "or est écrit. EN: in writing.", 'a7-lettre'),
        mc('« Ni Paul ni Léa ... venus. »', ['sont', 'ne sont pas', 'ne sont'], 2, "ne, sans pas. EN: ne, no pas.", 'a7-construire'),
        tI('Relie avec ni ... ni.', "Je n'ai pas le temps. Je n'ai pas l'envie.", fr(E(1107)), "ne, puis ni ... ni. EN: ne, then ni ... ni.", 'a7-or'),
        tI('Dis-le avec sans ... ni.', "Sans sucre et sans lait, s'il vous plaît.", fr(E(1112)), "Après sans, un seul ni. EN: sans ... ni.", 'a7-exemples'),
        eS('Il ne parle pas ni anglais ni espagnol.', fr(E(1109)), "ni remplace pas. EN: no pas.", 'a7-piege'),
        eS('Tu préfères le thé or le café ?', 'Tu préfères le thé ou le café ?', "Le choix : ou. EN: ou.", 'a7-piege'),
        lC('Écoute. Paul peut-il signer le contrat ?', fr(E(1102)), ['oui', 'non, il lui manque le diplôme'], 1, "or apporte le fait qui bloque. EN: the blocking fact.", 'a7-lettre'),
      ],
    },
    {
      id: 'r8-ajout', label: 'Ajouter et préciser', targets: ['ajout-mal'],
      questions: [
        mc("« Il a l'air fatigué. ..., il a mal dormi. »", ['De plus', 'En effet', 'Sinon'], 1, "La preuve : en effet. EN: the evidence.", 'a8-ajout'),
        mc("Quel mot ajoute un argument, à l'écrit ?", ['en effet', 'de plus'], 1, "de plus. EN: de plus.", 'a8-tableau'),
        mc("« J'arrive après-demain, ... jeudi. »", ['en plus', "c'est-à-dire"], 1, "La même date, précisée. EN: restated.", 'a8-construire'),
        tI('Ajoute avec en plus.', "L'appartement est grand. Il est bien situé.", fr(E(1117)), "Un avantage de plus. EN: one more plus.", 'a8-construire'),
        tI("Précise avec c'est-à-dire.", 'Il travaille à mi-temps : vingt heures par semaine.', fr(E(1122)), "c'est-à-dire redit plus précisément. EN: restated.", 'a8-ajout'),
        eS('Il pleut. En plus, il fait doux.', 'Il pleut, mais il fait doux.', "Une bonne nouvelle après une mauvaise : mais. EN: a contrast.", 'a8-erreurs'),
        eS("Il dit qu'il est riche. En effet, il est pauvre.", "Il dit qu'il est riche, mais il est pauvre.", "en effet confirme, il ne contredit pas. EN: use mais.", 'a8-erreurs'),
        lC('Écoute. Que fait en effet ?', fr(E(1127)), ['il oppose', 'il confirme'], 1, "Madrid, la preuve. EN: it confirms.", 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-sinon', label: 'Sinon, pourtant', targets: ['sinon-mal'],
      questions: [
        mc('« Dépêche-toi, sinon on va rater le train. » Sinon veut dire...', ['parce que', 'si tu ne te dépêches pas'], 1, "Dans le cas contraire. EN: otherwise.", 'a9-sinon'),
        mc('« On se voit samedi. Sinon, dimanche. » Dimanche, c’est...', ['une autre possibilité', 'un deuxième rendez-vous', 'une raison'], 0, "Le plan B. EN: plan B.", 'a9-sinon'),
        mc('« Il a beaucoup travaillé. Pourtant, il a échoué. » On attendait...', ['un échec', 'une réussite'], 1, "pourtant : la surprise. EN: the surprise.", 'a9-exemples'),
        tI('Relie avec sinon.', 'Prends ton manteau. Si tu ne le prends pas, tu vas avoir froid.', fr(E(1137)), "La consigne, puis sinon et le risque. EN: instruction, sinon, risk.", 'a9-construire'),
        tI('Relie avec sinon.', "Note l'adresse. Si tu ne la notes pas, tu vas l'oublier.", fr(E(1147)), "sinon remplace si tu ne la notes pas. EN: sinon.", 'a9-construire'),
        eS("Réserve aujourd'hui, sinon il y aura de la place.", fr(E(1138)), "Après sinon : le problème. EN: the bad outcome.", 'a9-erreurs'),
        eS('Il a beaucoup travaillé. Pourtant, il a réussi.', 'Il a beaucoup travaillé, donc il a réussi.', "Pas de surprise : donc. EN: a result.", 'a9-erreurs'),
        lC('Écoute. Que risques-tu ?', fr(E(1145)), ['un retard', 'une amende', 'rien'], 1, "sinon tu auras une amende. EN: a fine.", 'a9-histoire'),
      ],
    },
    {
      id: 'r10-ellipse', label: 'Ne pas tout répéter', targets: ['repete-tout'],
      questions: [
        mc('« Je parle anglais, mais ... espagnol. »', ['ne pas', 'non', 'pas'], 2, "mais pas. EN: mais pas.", 'a10-ellipse'),
        mc('« Elle aime le thé, et moi ... »', ['non plus', 'aussi'], 1, "Positif : aussi. EN: aussi.", 'a10-construire'),
        mc("« Je n'aime pas le froid, et lui ... »", ['non plus', 'aussi', 'pas'], 0, "Négatif : non plus. EN: non plus.", 'a10-ellipse'),
        tI('Raccourcis la phrase.', "J'ai lu le livre, mais je n'ai pas lu le journal.", fr(E(1153)), "mais pas le journal. EN: shorter.", 'a10-construire'),
        tI('Raccourcis la phrase.', 'Mon frère habite à Liège, et ma sœur habite à Namur.', fr(E(1154)), "habite une seule fois. EN: one habite.", 'a10-ellipse'),
        eS('Je parle anglais, mais ne pas espagnol.', fr(E(1150)), "mais pas, sans ne. EN: no ne.", 'a10-piege'),
        eS('Il boit du thé, mais pas du café.', fr(E(1165)), "pas de café. EN: pas de.", 'a10-piege'),
        lC('Écoute. Qui aime le café ?', fr(E(1152)), ['lui seulement', 'les deux', 'personne'], 0, "mais pas moi. EN: only him.", 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-message', label: 'Le message', targets: ['message-plat'],
      questions: [
        mc('Dans un message qui explique une décision, que dis-tu en premier ?', ['toutes les raisons', 'la décision'], 1, "La décision d'abord. EN: the decision first.", 'a11-plan'),
        mc("Quelle phrase donne la raison, à l'écrit ?", ["J'ai longtemps hésité, donc les deux offres étaient bonnes.", fr(E(1169))], 1, "car pour la raison. EN: car.", 'a11-lecture'),
        mc('Pour conclure après tes raisons, tu écris...', ['donc', 'car', 'ou'], 0, "donc conclut. EN: donc.", 'a11-plan'),
        tI('Relie avec de plus.', 'Le travail me plaît. Je pourrai rester près de ma famille.', 'Le travail me plaît. De plus, je pourrai rester près de ma famille.', "de plus ajoute une raison. EN: de plus.", 'a11-cheat'),
        tI('Relie avec ni ... ni.', 'Je ne regrette pas mon choix. Je ne regrette pas ces années avec vous.', fr(E(1173)), "ne, puis ni ... ni. EN: ni ... ni.", 'a11-lecture'),
        eS("Car les deux offres étaient bonnes, j'ai longtemps hésité.", fr(E(1169)), "car après la première idée. EN: car second.", 'a11-scenario'),
        eS("Je sais que c'est une surprise, et c'est la bonne décision pour moi.", fr(E(1179)), "Un contraste : mais. EN: mais.", 'a11-usages'),
        lC('Écoute. Cette phrase conclut-elle ?', fr(E(1172)), ['oui, avec donc', 'non, elle donne une raison'], 0, "J'ai donc accepté : la conclusion. EN: the conclusion.", 'a11-cheat'),
      ],
    },
  ]),
  audio: AUDIO,
  say: REFRAME,
};

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'les sept conjonctions', back: 'mais, ou, et, donc, or, ni, car', say: fr(E(1020)) },
    { front: 'une liste', back: 'des virgules, puis un seul et', say: fr(E(1034)) },
    { front: 'un contraste, une correction', back: 'mais', say: fr(E(1054)) },
    { front: 'la suite, la conséquence', back: 'donc, alors', say: fr(E(1068)) },
    { front: 'so tired, so beautiful', back: 'si, tellement', say: fr(E(1073)) },
    { front: 'la raison, à l’écrit', back: 'car, après une virgule', say: fr(E(1086)) },
    { front: 'un fait nouveau dans un argument', back: 'or', say: fr(E(1101)) },
    { front: 'ajouter, prouver, préciser', back: "en plus, en effet, c'est-à-dire", say: fr(E(1117)) },
    { front: 'but not', back: 'mais pas', say: fr(E(1150)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'La coordination, en résumé',
  body: `${REFRAME} Tu relies deux idées de même rang, et tu choisis le mot pour le lien qu'il dit : ajouter, choisir, opposer, conclure, expliquer, nier deux fois, apporter un fait. La prochaine leçon, ${SUBORDINATION_REF}, fait entrer une idée dans une autre : parce que, quand, si. EN: Next lesson: subordination, where one idea goes inside another.`,
  points: [
    'Un connecteur dit le lien : mais, donc et car ne sont pas et.',
    'Une liste : des virgules, puis un seul et.',
    'car après une virgule ; donc pour une vraie suite ; si pour très.',
    'Après et ou mais, ne répète pas ce qui est déjà dit.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur', 'virgule', 'ellipse'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Expliquer une décision',
    opener: {
      line: "À toi d'écrire le message qui explique ta décision, et dont chaque jointure dit le vrai lien. EN: Your turn to write the message that explains your decision, with every joint naming the real link.",
      imageRef: 'lessons/coordination/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton propre message et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote your own message and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 124,
    restPoints: ['a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-liste', 'a11-quiz/r6-car', 'a11-quiz/r9-sinon'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};


/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-sept', 'Les sept mots', ['mais où est donc Ornicar', 'ce que chacun relie', 'mais'], [
    teach('sheet-sept-teach', 'Le lien, pas la colle',
      `${REFRAME} Les sept conjonctions de coordination relient deux éléments de même rang : deux mots, deux groupes ou deux phrases. On les retient avec « Mais où est donc Ornicar ». Chacune dit un lien différent. EN: the seven coordinating conjunctions join two items of the same rank, and each names a different link.`),
    table('sheet-sept-table', 'Les sept, et leur lien', ['Mot', 'Le lien', 'Exemple'], [
      ['mais', "l'opposition, la correction", "Il est fatigué, mais il continue."],
      ['ou', 'le choix', "Tu préfères le train ou l'avion ?"],
      ['et', "l'addition", "J'aime le thé et le café."],
      ['donc', 'la conséquence', 'Il pleut, donc je prends le bus.'],
      ['or', "un fait nouveau (écrit)", "Or, ce poste demande l'espagnol."],
      ['ni', 'deux éléments niés', "Je n'aime ni le bruit ni la foule."],
      ['car', 'la cause (écrit)', 'Je prends le bus, car il pleut.'],
    ]),
    table('sheet-sept-mais', 'Les emplois de mais', ['Emploi', 'Exemple'], [
      ['opposer', "Je parle bien anglais, mais j'écris mal."],
      ['corriger : pas ... mais', "Ce n'est pas mon frère, mais mon cousin."],
      ['renforcer : non seulement ... mais', 'Non seulement il pleut, mais il fait froid.'],
      ["insister, à l'oral", 'Mais oui, bien sûr.'],
    ]),
  ]),
  sheet('sheet-liste', 'Et, ou, ni, et la virgule', ['la liste', 'ou, ou bien, et/ou', 'ni ... ni'], [
    teach('sheet-liste-teach', 'Des virgules, puis et',
      `Dans une liste, les virgules séparent les éléments et et arrive une seule fois, devant le dernier, sans virgule avant lui. ou propose un choix ; ou bien insiste ; ou ... ou oblige à choisir. ${Cap(LIAISON_REF)} l'a dit : et ne fait jamais de liaison. EN: commas, then one et; no comma before it; et never links.`),
    table('sheet-liste-table', 'Et, ou, ni', ['Forme', 'Sens', 'Exemple'], [
      ['A, B et C', 'tout', "J'ai acheté du pain, du fromage et des fruits."],
      ['A ou B', "l'un des deux", 'Tu peux payer par carte ou en espèces.'],
      ['A ou bien B', "l'un des deux, en insistant", 'Tu peux prendre le métro ou bien le bus.'],
      ['ou A, ou B', 'il faut choisir', 'Ou tu viens maintenant, ou tu restes à la maison.'],
      ['A et/ou B', "l'un, l'autre, ou les deux (écrit)", 'Apportez un dessert et/ou une boisson.'],
      ['ne ... ni A ni B', 'aucun des deux', 'Je ne veux ni thé ni café.'],
      ['sans A ni B', 'aucun des deux', "Sans sucre ni lait, s'il vous plaît."],
    ]),
    teach('sheet-liste-ni', 'Ni, du côté de la coordination',
      `${Cap(NEGATION_AV_REF)} t'a donné ni ... ni comme négation : « ${B120_REFRAME} » Ici, ni est un des sept : il relie deux éléments niés. Avec ne devant le verbe et sans pas. Après sans, un seul ni suffit. EN: ni joins two negated items, with ne and no pas.`),
  ]),
  sheet('sheet-lien', 'La cause et la conséquence', ['donc et alors', 'car et parce que', 'or', 'so'], [
    teach('sheet-lien-teach', 'Donc regarde en avant, car regarde en arrière',
      "donc et alors : la cause d'abord, puis la conséquence. car : le fait d'abord, puis sa raison, après une virgule, surtout à l'écrit. car n'ouvre jamais une phrase et ne répond pas à pourquoi. EN: donc points to the result, car back to the reason.",
    ),
    table('sheet-lien-table', 'Cause et conséquence', ['Mot', 'Ordre', 'Registre', 'Exemple'], [
      ['donc', 'cause, puis suite', 'neutre', 'Il pleut, donc je prends le bus.'],
      ['alors', 'cause, puis suite', 'oral', 'Il a neigé, alors on reste à la maison.'],
      ['car', 'fait, puis raison', 'écrit', 'Je prends le bus, car il pleut.'],
      ['parce que', 'fait, puis raison', 'neutre, répond à pourquoi', 'Pourquoi tu pars ? Parce que je suis fatigué.'],
      ['or', 'argument, puis fait nouveau', 'écrit', 'Je voulais le louer. Or, il était déjà loué.'],
    ]),
    teach('sheet-lien-parce-que',
      'Car et parce que',
      `${Cap(INTERROGATIFS_REF)} t'a donné parce que pour répondre à pourquoi : « ${A120_REFRAME} » En français : « ${A120_REFRAME_FR} » parce que ouvre une subordonnée, c'est le sujet de ${SUBORDINATION_REF}. Ici, retiens seulement : car à l'écrit et après une virgule, parce que partout et pour répondre. EN: car is written and never first; parce que answers pourquoi.`),
    table('sheet-lien-so', 'Le so anglais', ['Anglais', 'Français'], [
      ['so (therefore)', 'donc, alors'],
      ['so (very): so tired', 'si, tellement'],
      ['so (to start): so, what now?', 'alors'],
      ['so you are...', "c'est donc toi..."],
      ['if', 'si (et seulement pour if)'],
    ]),
  ]),
  sheet('sheet-ajout', 'Ajouter, préciser, prévenir', ['en plus, de plus', 'en effet', "c'est-à-dire", 'sinon', 'pourtant'], [
    teach('sheet-ajout-teach', 'Les adverbes qui relient',
      `Certains adverbes relient deux phrases comme les sept mots. en plus et de plus ajoutent ; en effet confirme ; c'est-à-dire précise ; sinon dit le cas contraire. puis et ensuite ordonnent : ${PC_IMPARFAIT_REF} et ${TRANSPORTS_REF} les ont déjà donnés. EN: these adverbs link sentences; puis and ensuite were taught earlier.`),
    table('sheet-ajout-table', 'Les adverbes de liaison', ['Mot', 'Le lien', 'Registre', 'Exemple'], [
      ['en plus', 'ajoute', 'plutôt oral', "C'est loin. En plus, il n'y a pas de bus."],
      ['de plus', 'ajoute', 'écrit', 'Le projet est utile. De plus, il ne coûte pas cher.'],
      ['en effet', 'confirme, prouve', 'neutre', "Il a l'air fatigué. En effet, il a mal dormi."],
      ["c'est-à-dire", 'précise', 'neutre', "J'arrive après-demain, c'est-à-dire jeudi."],
      ['sinon', 'le cas contraire', 'neutre', 'Dépêche-toi, sinon on va rater le train.'],
      ['puis, ensuite', "l'ordre", 'neutre', "D'abord on visite, ensuite on décide."],
      ['pourtant, cependant', "l'opposition forte (à reconnaître)", 'écrit', 'Il a beaucoup travaillé. Pourtant, il a échoué.'],
    ]),
    teach('sheet-ajout-pourtant', 'Pourtant, pour plus tard',
      `pourtant et cependant opposent comme mais, mais plus fort : on s'attendait vraiment à autre chose. Ils appartiennent à la concession, le sujet de ${CONCESSION_REF}. Ici, reconnais-les en lisant. EN: pourtant and cependant are concession, taught in a later lesson; recognise them for now.`),
  ]),
  sheet('sheet-message', 'Écrire un message qui tient', ["l'ellipse", 'le plan', 'la liste de contrôle'], [
    teach('sheet-message-ellipse', 'Ne pas tout répéter',
      "Après et ou mais, enlève ce qui est déjà dit. Le verbe : je parle anglais, mais pas espagnol. Le sujet : il chante et danse. Toute la phrase : elle aime le thé, et moi aussi. EN: after et or mais, leave out what is already said.",
    ),
    table('sheet-message-ellipse-table', "L'ellipse", ['Phrase complète', 'Phrase courte'], [
      ['Je parle anglais, mais je ne parle pas espagnol.', 'Je parle anglais, mais pas espagnol.'],
      ["Elle aime le thé, et j'aime le thé.", 'Elle aime le thé, et moi aussi.'],
      ["Il aime le café, mais je n'aime pas le café.", 'Il aime le café, mais pas moi.'],
      ['Mon frère habite à Liège, et ma sœur habite à Namur.', 'Mon frère habite à Liège, et ma sœur à Namur.'],
      ['Il chante et il danse.', 'Il chante et danse.'],
      ["Je n'aime pas le froid, et il n'aime pas le froid.", "Je n'aime pas le froid, et lui non plus."],
    ]),
    table('sheet-message-plan', 'Expliquer une décision', ['Étape', 'Les mots'], [
      ['la décision', "j'ai pris ma décision, et..."],
      ['les raisons', 'car, de plus, en effet'],
      ["ce qui t'a fait hésiter", 'mais, or'],
      ['la conclusion', 'donc, pour toutes ces raisons'],
      ['la suite', "c'est-à-dire, ou, sinon"],
      ['la fin', 'merci pour tout, et à bientôt'],
    ]),
    table('sheet-message-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Chaque lien est le bon', 'remplace le mot par et : le sens change-t-il ?'],
      ['Pas de et partout', 'un seul et par liste'],
      ['Pas de donc partout', 'donc seulement pour une vraie conséquence'],
      ['car à sa place', 'après une virgule, jamais en début de phrase'],
      ['Pas de si pour so', 'si ou tellement pour très, donc pour la suite'],
      ["Pas de répétition", "l'ellipse après et et mais"],
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
  { id: 'd-lien', title: 'Contraste ou raison', format: 'sort' as const, coach: "Deux piles. La deuxième idée va-t-elle contre la première, ou l'explique-t-elle ? EN: sort by the link.", buckets: ['mais : le contraste', 'car : la raison'], items: [E(1000), E(1009), E(1010), E(1001), E(1087), E(1094)], audio: AUDIO },
  { id: 'd-sept', title: 'Le bon mot entre deux idées', format: 'mcq' as const, coach: "Demande-toi ce que la deuxième idée fait à la première. EN: ask what the second idea does to the first.", q: 'Il pleut, ... je prends le bus.', opts: ['car', 'donc'], correct: 1, why: "Le bus est la suite : donc. EN: the result.", items: [E(1021), E(1022), E(1023), E(1024), E(1025), E(1026)], audio: AUDIO },
  { id: 'd-liste', title: 'Un seul et', format: 'flashcard' as const, coach: "Lis chaque liste à voix haute : une pause à chaque virgule, et un seul et. EN: read each list aloud, one et.", items: [E(1034), E(1035), E(1036), E(1041), E(1047), E(1048)], audio: AUDIO },
  { id: 'd-mais', title: 'Un vrai contraste', format: 'mcq' as const, coach: "mais seulement si la suite va contre ce qu'on attend. EN: mais only for a real contrast.", q: "Ce n'est pas cher, ... c'est loin.", opts: ['et', 'mais'], correct: 1, why: "Pas cher, c'est bien ; loin, non : mais. EN: a contrast.", items: [E(1052), E(1053), E(1054), E(1055), E(1056), E(1059)], audio: AUDIO },
  { id: 'd-donc', title: 'Une suite, ou très', format: 'sort' as const, coach: "Deux piles : une conséquence, ou juste l'intensité. EN: sort consequence from intensity.", buckets: ['la suite : donc', "l'intensité : si, tellement"], items: [E(1068), E(1073), E(1075), E(1074), E(1085), E(1081)], audio: AUDIO },
  { id: 'd-car', title: 'Car après la virgule', format: 'mcq' as const, coach: "La décision d'abord, une virgule, puis car et la raison. EN: decision, comma, car, reason.", q: 'Je reste à la maison, ... je suis malade.', opts: ['car', 'donc'], correct: 0, why: "La maladie est la raison : car. EN: the reason.", items: [E(1086), E(1087), E(1090), E(1091), E(1094), E(1098)], audio: AUDIO },
  { id: 'd-or', title: 'Or, ou, ni', format: 'mcq' as const, coach: "Le choix, c'est ou. Or apporte un fait nouveau. Ni relie deux non. EN: ou chooses, or argues, ni joins two nos.", q: 'Tu préfères le thé ... le café ?', opts: ['or', 'ou'], correct: 1, why: "Un choix : ou. EN: a choice.", items: [E(1101), E(1102), E(1105), E(1107), E(1109), E(1112)], audio: AUDIO },
  { id: 'd-ajout', title: 'Ajouter ou prouver', format: 'sort' as const, coach: "Deux piles : un argument de plus, ou la preuve de ce qui précède. EN: sort adding from proving.", buckets: ['ajoute : en plus, de plus', 'prouve : en effet'], items: [E(1117), E(1119), E(1126), E(1120), E(1127), E(1130)], audio: AUDIO },
  { id: 'd-sinon', title: 'Sinon, le cas contraire', format: 'mcq' as const, coach: "La consigne, puis sinon et ce qui arrive si tu ne la suis pas. EN: instruction, sinon, the risk.", q: 'Dépêche-toi, ... on va rater le train.', opts: ['sinon', 'donc', 'car'], correct: 0, why: "Le risque si tu ne te dépêches pas : sinon. EN: otherwise.", items: [E(1136), E(1137), E(1138), E(1145), E(1147), E(1139)], audio: AUDIO },
  { id: 'd-ellipse', title: 'Plus court', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute, et dis ce qui n'est pas répété. EN: read aloud and name what is left out.", items: [E(1150), E(1151), E(1152), E(1153), E(1157), E(1164)], audio: AUDIO },
  { id: 'd-message', title: 'Un message qui tient', format: 'flashcard' as const, coach: "Lis chaque phrase et dis le lien de son connecteur. EN: read each and name its link.", items: [E(1168), E(1169), E(1170), E(1171), E(1172), E(1176)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'lien-absent', description: 'Joins ideas with et, or sets them side by side, where the real link is a contrast, a reason or a result, so the reader has to guess the link and guesses wrong.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-lien', retest: 'd-lien' },
  { id: 'sept-confondus', description: 'Picks the wrong coordinator for the link: car for a result, donc for a reason, or the French or for the English or of choice.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-sept', retest: 'd-sept' },
  { id: 'et-partout', description: 'Puts et before every item of a list, or a comma before the final et, as English speech and the serial comma do.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-liste', retest: 'd-liste' },
  { id: 'mais-sans-contraste', description: 'Uses mais with no real contrast, repeats the verb in a correction, or pairs non seulement with et.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-mais', retest: 'd-mais' },
  { id: 'so-si', description: 'Translates the English so of consequence as si, uses donc for the so of intensity, or starts every sentence with donc as a filler.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-donc', retest: 'd-donc' },
  { id: 'car-en-tete', description: 'Opens a sentence with car, answers pourquoi with car, or reverses cause and result with car where donc was meant.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-car', retest: 'd-car' },
  { id: 'or-ou', description: 'Writes the French or for the English or of choice, keeps pas beside ni, drops ne with a double ni subject, or writes sans ... ou.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-or', retest: 'd-or' },
  { id: 'ajout-mal', description: "Uses en effet to contradict (as in fact), en plus against the direction of the first idea, or c'est-à-dire to add new information.", detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-ajout', retest: 'd-ajout' },
  { id: 'sinon-mal', description: 'Puts the good outcome after sinon, opens with sinon as with unless, or uses pourtant and cependant where nothing is surprising.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check'], drill: 'd-sinon', retest: 'd-sinon' },
  { id: 'repete-tout', description: 'Repeats the whole clause after et or mais, writes mais ne pas, or uses aussi after a negative.', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a11-mission'], drill: 'd-ellipse', retest: 'd-ellipse' },
  { id: 'message-plat', description: 'Writes the decision message as a list of sentences with few or wrong links, the reasons before the decision or no conclusion.', detectOn: ['a11-lecture', 'a11-cheat', 'a11-mission'], drill: 'd-message', retest: 'd-message' },
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-30-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-30-camille': "Camille's email (act 1), ONE VOICE, one take, a Montréal woman in her forties reading her own farewell email aloud to the team: warm, steady, never sentimental. Each connector (mais, donc, or, car, en effet) gets ordinary weight, with the small pause its comma gives and no more. « Or, » is a short clear beat.",
  'rec-b1-30-souper': "The phone call (act 2), two voices: Nadia, quick and practical, Belgian French welcome, and Karim, relaxed. Every coordinator is unstressed; the listener must hear the link from the sentence melody, not from emphasis.",
  'rec-b1-30-sept': "The four coordinator cards, one voice. Cards one and three hold two sentences across a middot: leave a clear beat between them, and read them with the same melody so only the connector changes.",
  'rec-b1-30-listes-ecoute': "REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Every list comma is a short audible pause and the final et carries NO pause before it: the questions count items by those pauses. « ou ... ou » in line six is two clear beats.",
  'rec-b1-30-liste': "The four list cards. Card one: two comma pauses, no pause before et. Card three reads et/ou as « et ou », evenly. Card four: « chaud et humide » with NO t after et.",
  'rec-b1-30-piege-liste': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace, with the list pauses at the commas; the wrong versions in promptSound are never spoken.",
  'rec-b1-30-cocody': "The flat visit (act 4), two voices: Monsieur Kouassi, the agent, smooth and a little salesy, Ivorian French welcome, and Aminata, polite and sharp. Each « mais » is a light turn in the melody, not a stressed word.",
  'rec-b1-30-mais': "The four mais cards, one voice. Card four is SPOKEN French: « Mais oui » warm and rising, « Mais non » reassuring. The other three are neutral.",
  'rec-b1-30-donc-ecoute': "REQUIRED FOR THE EAR MISSION (act 5): eight lines, ONE TAKE, ONE VOICE, Québécois or relaxed Parisian speech at conversational speed. « tellement » and « si » are lengthened slightly the way speakers do for intensity; « donc » and « alors » are not. The last line (« Alors, on fait quoi ce soir ? ») opens the conversation, with a rising question.",
  'rec-b1-30-donc': "The four donc cards. Card two is spoken register (alors, relaxed); card three is written register, read like a notice. On card four, « tellement » and « si » carry emotional lengthening.",
  'rec-b1-30-piege-so': "The audio step plays each card's CORRECT sentence, including the one authored on the card itself (« Je suis Paul, et je travaille ici. »). Read the six plainly; the wrong versions in promptSound are never spoken.",
  'rec-b1-30-avis': "The transit notice (act 6), ONE VOICE, one take, read like a Montréal métro announcement: neutral, clear, a little formal. Every « car » follows a comma pause. « Berri-UQAM » as Montrealers say it.",
  'rec-b1-30-car': "The four car cards. Card three holds two sentences across a middot; read them with the same melody. Card four is a spoken exchange: the question rises, « Parce que » answers at once.",
  'rec-b1-30-lettre': "The residents' letter (act 7), ONE VOICE, one take, a Lausanne resident reading the association's letter at a public meeting: calm, firm, persuasive. Each « Or, » gets a short deliberate beat, the way a speaker lets the new fact land.",
  'rec-b1-30-or': "The four or and ni cards, one voice. Card two is a syllogism: two sentences, a clear pause between them. On cards three and four, both ni are unstressed and evenly weighted.",
  'rec-b1-30-piege-ni': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-30-ajout-ecoute': "REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. « en plus » and « de plus » are both /plys/ with the s sounded; « en effet » runs as one group with the n carried over.",
  'rec-b1-30-ajout': "The four linking-adverb cards. Card one holds two sentences across a middot: the first spoken, the second read like written French. Card four quotes a2.27: read it plainly.",
  'rec-b1-30-lyon': "The departure (act 9), two voices: Sophie, brisk and organised, Lyon, and the learner, sleepy and amused. Each « sinon » is followed by a slight warning lift. The learner's « pourtant » line is relaxed and a little ironic.",
  'rec-b1-30-sinon': "The four sinon and pourtant cards. Card three (« Ça va, sinon ? ») is casual spoken French with a rising end. Card four is read like a written text, neutral.",
  'rec-b1-30-ellipse-ecoute': "REQUIRED FOR THE EAR MISSION (act 10): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The short second halves (« mais pas espagnol », « et moi aussi », « et lui non plus ») are said naturally, never slowed: the learner must catch the missing verb from the rhythm.",
  'rec-b1-30-ellipse': "The four ellipsis cards. Card two holds two sentences across a middot; leave a clear beat. On card four keep the comma pause before « et ma sœur ».",
  'rec-b1-30-piege-ellipse': "The audio step plays each card's CORRECT sentence, including the one authored on the card (« Il chante, danse et rit. »). Read the six plainly; the wrong versions in promptSound are never spoken.",
  'rec-b1-30-message': "Julie's message (act 11), ONE VOICE, one take, a Québécoise in her thirties reading her own message aloud before sending it: friendly, clear, slightly moved at the end. The four moves (decision, reasons, doubt and conclusion, what happens next) are audible as four blocks.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 30',
  intro: 'You have used et, mais and ou since A1 without anyone naming them. This lesson does: the seven coordinating conjunctions and the linking words beside them, each for the link it names. Joining ideas is easy; saying HOW they join is what makes a message clear. It ends with you explaining a real decision in a connected paragraph.',
  skill: 'PE',
  grammarAssumed: [INTERROGATIFS_UNIT, LIAISON_UNIT, TRANSPORTS_UNIT, PC_IMPARFAIT_UNIT, NEGATION_AV_UNIT],
  grammarIntroduced: [
    'The seven coordinating conjunctions (mais, ou, et, donc, or, ni, car) as a closed set, each defined by the logical link it names, with the Ornicar mnemonic',
    'List punctuation: commas between items and a single et before the last, with no serial comma; ou, ou bien, ou ... ou and et/ou',
    'mais for opposition, for correction after a negative (pas X mais Y) and in non seulement ... mais aussi; mais oui and mais non as spoken emphasis',
    'donc against alors for consequence, donc after the verb in writing, and the English so of intensity rendered by si or tellement, never donc',
    'car as a written, post-comma cause marker that never opens a sentence, contrasted with parce que as the answer to pourquoi',
    'or as a written argument marker introducing a decisive new fact, for recognition; ni ... ni and sans ... ni as coordination of negated items',
    "The linking adverbs en plus and de plus (addition, by register), en effet (confirmation), c'est-à-dire (restatement) and sinon (the alternative case); pourtant and cependant for recognition only",
    'Ellipsis after et and mais: mais pas, et moi aussi, and the unrepeated subject or verb',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu utilises et, mais et ou depuis le A1 sans que personne ne les nomme. Cette leçon les nomme : les sept conjonctions de coordination et les mots de liaison qui les accompagnent, chacun pour le lien qu'il dit. Relier, c'est facile ; dire comment on relie rend un message clair. À la fin, tu expliques une vraie décision dans un paragraphe qui tient.",
    minutes: 130,
    difficulty: 3,
    glyph: 'donc',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: COORDINATION_TERMS,
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
export { IMPORTED, IMPORT_IDS, NOT_SPEAKABLE, DECISION_TEXT, AVIS_TEXT, LETTRE_TEXT, MESSAGE_TEXT, SEPT_MOTS, dicteeFor };
