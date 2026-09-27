// b1.29.l1 « Les expressions de couleur » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md, in the
// VOCAB SHAPE of B1-WORKSHOP-AND-VOCAB-SHAPES.md §2. No new section types.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union, enforced by
// validateSection, drawn by TaskView), so `sections` is `LessonSection[]` and
// the validators run on `LESSON` itself, as b1.18, b1.23 and b1.27 do.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (family of expressions · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   The vocab loop per act (shapes doc §2.1): meet them in context (story /
//   reading / listening), learn them (cardDeck: image, meaning, English,
//   register), tell them apart (groupDrill, then trapDrill or commonErrors on
//   the false friend and the English calque), use them (a groupDrill of real
//   situations), check (gated control pages before the checkpoint). Acts are
//   grouped by FEELING or SITUATION, never by colour.
//
//    1  La palette                   7   the method; 4 idioms
//    2  La peur et le froid          7   fear, cold, the dark; 5
//    3  La colère                    7   anger; 5, plus the agreement point
//    4  La gêne                      7   embarrassment; 4
//    5  L'envie et la santé          7   envy, sick, bruised, pale, tipsy; 5
//    6  L'argent au noir             7   money and the black market; 5
//    7  Le blanc                     7   the blank, the mock, the fake; 5
//    8  En rose ou en noir           7   optimism, pessimism, naivety; 7
//    9  Le feu vert                  7   permission and approval; 6
//   10  La série noire               7   bad luck and trouble; 5
//   11  Débutant ou doué             7   new, green, gifted; 7
//   12  Raconte ta semaine          11   model, plan, role play, TASK, quiz
//
//   TOTAL 88 missions, 12 acts. 58 idioms, at most 7 per act. Corpus: 190
//   authored rows (.1400-.1589, contiguous) plus 13 reused seed rows (eight
//   a1.13 colour words, four a1.13 agreement rows, one a2 bruise row), 203
//   item ids in all, every one released act by act through `deckTranche`.
//   Quiz: 11 rounds of 8 = 88 (33 mcq, 24 typeIn, 20 errorSpot, 11
//   listenChoose; slots 14/16/14), act 1's method folded into the closing
//   round, as b1.27's open question 2 proposed. Twelve error triggers and
//   twelve drills (act 12's trigger fires from its sections, not from a
//   round). Five reference sheets reached from 25 missions by `sheetId`,
//   eleven terms, three tapTables (acts 3, 6 and 10). 601 estimated screens.
//   Chapter artwork: `expressions-couleurs-image-prompts.md`, 12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Chaque langue a sa palette : pars du sens, pas de la couleur. »
//   EN: Every language has its own palette: start from the meaning, not from
//   the colour.
//
//   ONE METAPHOR, THE PALETTE. English is blue when it is sad, French is
//   black; French is blue when it is afraid, English has no colour at all.
//   Carrying the English colour across gives a French sentence nobody says
//   (je me sens bleu), and reading the French colour with English eyes gives
//   nonsense (rire jaune is not fear). It is NOT « the colour never
//   translates »: voir rouge, vert de jalousie, le feu vert are the same
//   colour, and starting from the meaning gets those right too (corpus
//   REFRAME_REJECTED).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    58 idioms whose key image is a colour, each with its picture,
//           meaning, register and English equivalent; the three cases (same
//           colour, another colour, no colour in English); agreement INSIDE
//           an idiom (une peur bleue, rouges de colère, verte de jalousie,
//           hauts en couleur) against the invariable cases (after voir: ils
//           ont vu rouge; colour nouns: dans le rouge, en rose); the false
//           friends (rire jaune, mariage blanc, un bleu, cordon bleu); the
//           variants (le pouce vert in Québec, la main verte and un examen
//           blanc in France); the dose of idioms in a short anecdote.
//   QUOTES  a1.13's reframe (colours agree, things that became colours do
//           not) and a2.03's, both re-exported from their own files and
//           rendered in French; a1.13's colour words and agreement rows are
//           imported, never retyped.
//   LEAVES  body idioms to b1.27, animal and food idioms to b1.28 (donner sa
//           langue au chat, une poule mouillée, le mouton noir); register as
//           a system to b1.25; the narrative tenses to b1.03, used in the
//           anecdote and never re-taught. No authored French string uses a
//           subjunctive.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs. Every learner surface that explains something carries
//   English (`en`, or a final « EN: »), and NO ANSWER ever does. Every `say`
//   is French. Theme `expressions-imagees`, POSTGRES ONLY (corpus §A.1). A1
//   and A2 citations use the English trail label; b1.* ones are French from
//   the plan. Setting: Montréal, the Mauricie, Québec City, Gatineau,
//   Bruxelles, Lyon, Genève, Dakar (by a news brief), Moncton; characters
//   recur only inside this lesson. No bubble carries a « ? » or a « ! »:
//   questions live in readings, listenings, rows and choice options.
//   Register is marked on EVERY card (`label`) and every row (`register`).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. « avoir la main verte / le pouce vert » carries a body word (la
//      main, le pouce) but its meaning is the colour of plants, and b1.27
//      did not take it. Taught here (act 11). Keep it here, or move it to
//      b1.27?
//   2. ELEVEN quiz rounds for twelve acts: act 1's method round is folded
//      into round 11 (the integration round), the fold b1.27's open
//      question 2 proposed. b1.27 still ships twelve. Align the two?
//   3. « un bleu » (a rookie) and « blanc comme un cachet d'aspirine » are
//      marked France; « un examen blanc » too (Québec says examen de
//      pratique). Confirm the France labels?
//   4. Left out on purpose: « le téléphone rouge » (rare in speech), « se
//      fâcher tout rouge », « rouge comme une pivoine », « se mettre au
//      vert », « hisser le drapeau blanc », « le point noir ». Add any?
//   5. « être gris » (tipsy) is still heard but sounds a little old. Keep?
//   6. « passer la nuit sur la corde à linge », the Québec way to say a
//      sleepless night, is mentioned on the variants sheet only, not taught,
//      because its key image is not a colour. Keep it as a sheet mention?
//   7. THREE tapTables (acts 3, 6 and 10), one per act, six rows each.
//   8. Six published Postgres rows are twinned (corpus DB_ONLY_TWINS).
//      Dedupe at import or keep both?
//   9. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  CHRONIQUE_TEXT, HONTE_TEXT, DAKAR_TEXT, FETE_TEXT, ENTREVUE_TEXT,
  A113_REFRAME, A113_REFRAME_FR, A203_REFRAME, A203_REFRAME_FR,
  COULEURS_UNIT, ACCORD_UNIT, PC_AVOIR_UNIT, PC_IMPARFAIT_UNIT,
  COULEURS_REF, ACCORD_REF, PC_IMPARFAIT_REF, CORPS_B1_REF, ANIMAUX_REF, CONNECTEURS_REF,
} from './expressions-couleurs-corpus.ts';
import { EXPRESSIONS_COULEURS_TERMS } from './expressions-couleurs-terms.ts';

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
const SEED_DATA = seed as unknown as { items: SrcItem[]; lessons: { id: string; reframe?: string }[] };
const SEED = new Map(SEED_DATA.items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));

/** a1.13's and a2.03's reframes are re-exported from their authoring files
 *  (corpus §D); fail loudly if the seed has drifted from them. */
for (const [lid, want] of [['a1.13.l1', A113_REFRAME], ['a2.03.l1', A203_REFRAME]] as const) {
  if (SEED_DATA.lessons.find((l) => l.id === lid)?.reframe !== want) {
    throw new Error(`b1.29: the quoted reframe no longer matches seed.json ${lid}.reframe`);
  }
}

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.29: no item ${id}`);
  return r;
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.29: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.29: no respell on ${id}`);
  return `[${r.respell}]`;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const uc = (situation: string, id: string) => ({ situation, fr: src(id).fr, en: src(id).en });
const fr = (id: string) => src(id).fr;
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** One idiom card: the block, its register as the eyebrow, its respelling,
 *  and a body that goes picture, meaning, English (shapes doc §2.2). */
type Card = NonNullable<Sec<'cardDeck'>['cards']>[number];
const card = (id: string, head: string, label: string, body: string): Card =>
  ({ head, label, fr: fr(id), sub: rsOf(id), body });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** The stepped trapDrill's four steps, identical in every trap of the lesson. */
const trapSteps = (ruleTitle: string) => [
  { label: 'La règle', kind: 'rule' as const, title: ruleTitle },
  { label: 'Six cartes', kind: 'cards' as const, title: 'Ce que la phrase fausse raconte' },
  { label: 'Écoute', kind: 'audio' as const, title: 'Écoute les six phrases correctes' },
  { label: 'À toi', kind: 'drill' as const, title: 'Huit phrases', gate: true },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LA PALETTE
 *
 *  The method, on four idioms, one of each case: another colour in English
 *  (broyer du noir / feel blue), a colour only in French (une peur bleue),
 *  the same colour (voir rouge), no colour in English (une nuit blanche).
 *  The failure is the calque: French words carrying an English colour.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The learner's French is grammatical and the colour is English. NO
 *  « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Un lundi tout bleu',
  frSub: 'Un bureau du Plateau',
  setting: { place: 'Un bureau du Plateau-Mont-Royal', city: 'Montréal', time: 'lundi, 8 h 45', ambience: 'des plantes, une machine à café, la neige dehors' },
  beats: [
    {
      kind: 'narration',
      text: "Lundi matin, dans un bureau du Plateau, à Montréal. Ton meilleur ami est reparti en France hier, et ta fin de semaine a été triste. Ta collègue Sophie t'apporte un café.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Sophie',
      fr: "Tu as l'air fatigué ce matin.",
      en: 'You look tired this morning.',
      respell: '[tü a lehr fa-tee-GAY suh ma-TEHⁿ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Oui, je me sens tout bleu aujourd'hui.",
      en: 'Yes, I feel all blue today (word for word).',
      respell: '[WEE zhuh muh sahⁿ too BLUH oh-zhoor-DWEE]',
      stage: "Chaque mot est français. La couleur, elle, vient de l'anglais.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Sophie',
      fr: 'Tout bleu. Tu as froid, alors. Je te prête mon foulard.',
      en: 'All blue. So you are cold. I will lend you my scarf.',
      respell: '[too BLUH tü a FRWA a-LOR zhuh tuh PREHT mohⁿ foo-LAR]',
      stage: "Pour elle, on est bleu de froid, pas de tristesse.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Tu souris, mais tu ne sais pas comment dire triste avec une couleur. Sophie, elle, en a une, et ce n'est pas le bleu.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase une Montréalaise comprend-elle tout de suite ?',
      size: 'lg',
      options: [
        { fr: 'Je me sens tout bleu depuis lundi.', respell: '[zhuh muh sahⁿ too BLUH duh-pwee luhⁿ-DEE]', en: 'I have been feeling all blue since Monday (word for word).', outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1404)), respell: rsOf(E(1404)), en: src(E(1404)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Sophie pose la main sur ton épaule. Elle a compris : tu es triste. Elle t'invite à dîner ce midi.",
        breaks: "Sophie te tend son foulard. Elle croit encore que tu as froid.",
      },
    },
    {
      kind: 'break',
      heading: 'Une tristesse anglaise, en bleu',
      body: "Tous tes mots étaient justes. Mais en français, la tristesse n'est pas bleue : elle est noire. Le bleu, c'est le froid, ou la peur. EN: Every word was French; the colour was English.",
      wrong: {
        fr: 'Je me sens tout bleu depuis lundi.',
        ipa: '/ʒə mə sɑ̃ tu blø də.pɥi lœ̃.di/',
        respell: '[zhuh muh sahⁿ too BLUH duh-pwee luhⁿ-DEE]',
        en: 'I have been feeling all blue since Monday (word for word).',
      },
      right: {
        fr: fr(E(1404)),
        ipa: ipaOf(E(1404)),
        respell: rsOf(E(1404)),
        en: src(E(1404)).en,
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Cette leçon te donne une soixantaine d'expressions de couleur : leur image, leur sens, l'anglais, et à qui les dire. À la fin, tu racontes une semaine avec elles.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['calque', 'palette'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Lire une couleur sans la traduire', s: "Acte 1 : l'image, le sens, l'équivalent anglais" },
    { t: 'Dire la peur, la colère, la gêne, l’envie', s: 'Actes 2 à 5 : quatre familles, et l’accord de la couleur' },
    { t: "Parler d'argent, de vide, d'humeur, de permission", s: 'Actes 6 à 9 : le noir, le blanc, le rose, le vert' },
    { t: 'Raconter les ennuis, les débuts, ta semaine', s: 'Actes 10 à 12 : la malchance, les débutants, ton anecdote' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: a newcomer who carried English colours across, then
 *  learned the rule. `questionsInModal` so the text comes first. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Les couleurs de mon français',
  frSub: 'Lis, et cherche les quatre couleurs',
  text: CHRONIQUE_TEXT,
  glossary: [
    { word: 'inquiète', en: 'worried', note: 'Elle pense qu’il y a un problème.' },
    { word: 'araignées', en: 'spiders', note: 'Les petites bêtes à huit pattes.' },
    { word: 'annulé', en: 'cancelled', note: 'Les vacances n’auront pas lieu.' },
    { word: 'sans sommeil', en: 'without sleep', note: 'On ne dort pas.' },
  ],
  questions: [
    { q: 'Pourquoi Sophie demande-t-elle « Tu as froid ? »', a: "Emma a dit qu'elle se sentait bleue. En français, on est bleu de froid, pas de tristesse." },
    { q: 'En français, quelle est la couleur de la tristesse, et celle de la peur ?', a: 'Le noir pour la tristesse (broyer du noir), le bleu pour la peur (une peur bleue).' },
    { q: "Quelle expression a la même couleur qu'en anglais ?", a: 'Voir rouge : to see red.' },
    { q: 'Quelle est la règle d’Emma ?', a: `« ${REFRAME} »` },
  ],
  audio: REC('rec-b1-29-chronique'),
  say: REFRAME,
  terms: ['palette', 'equivalent'],
};

/** LEARN: the four cases card by card, then a1.13's words, quoted. */
const A1_PALETTE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-palette',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-methode',
  title: "L'image, le sens, l'anglais",
  frSub: 'Quatre couleurs pour commencer',
  hint: "Cinq cartes. Pour chaque expression : l'image d'abord, le sens ensuite, puis l'anglais.",
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'equivalent', 'palette'],
  cards: [
    card(E(1400), 'Être triste', 'courant',
      "L'image : broyer, écraser du noir. Le sens : être triste, sans énergie. L'anglais change de couleur : to feel blue. EN: another colour in English."),
    card(E(1401), 'Avoir très peur', 'courant',
      "L'image : une peur de couleur bleue. Le sens : avoir très peur. En anglais, pas de couleur : to be scared stiff. EN: a colour only in French."),
    card(E(1402), 'Se fâcher d’un coup', 'courant',
      "L'image : tout devient rouge devant tes yeux. Le sens : une colère soudaine. EN: to see red, the same colour."),
    card(E(1403), 'Ne pas dormir', 'courant',
      "L'image : une nuit blanche, vide. Le sens : tu n'as pas dormi du tout. EN: a sleepless night, no colour in English."),
    {
      head: 'Les couleurs, tu les connais', label: Cap(COULEURS_REF),
      fr: 'noir · bleu · rouge · blanc',
      sub: '[NWAR] · [BLUH] · [ROOZH] · [BLAHⁿ]',
      body: `« ${A113_REFRAME} » En français : « ${A113_REFRAME_FR} » Les mots sont connus ; l'image est nouvelle. EN: the words are known; the picture is new.`,
    },
  ],
};

/** TELL THEM APART: another colour, or the same one. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Même couleur, ou autre couleur',
  groups: [
    grp("L'anglais change de couleur, ou n'en a pas", [
      it(E(1404), 'feel blue : le bleu devient noir'),
      it(E(1405), 'scared stiff : pas de couleur'),
      it(E(1407), 'sleepless : pas de couleur'),
      it(E(1410), 'la même nuit blanche'),
    ], chk(
      "Dans ces quatre phrases, l'anglais a-t-il la même couleur ?",
      ['Oui, mot pour mot.', 'Non : une autre couleur, ou aucune.'], 1,
      "Blue devient noir ; scared et sleepless n'ont pas de couleur. EN: the English colour is different or missing.")),
    grp('Ici, la même couleur', [
      it(E(1406), 'voir rouge : see red'),
      it(E(1412), 'au présent, même image'),
    ], chk(
      'Et ces deux-là ?',
      ['La même couleur : see red.', 'Une autre couleur.'], 0,
      "Parfois, les deux langues ont choisi le même rouge. EN: sometimes both languages chose the same colour.")),
    ctl('Le sens', '« Ma sœur a une peur bleue des orages. » Ta sœur...',
      ['aime les orages', 'a très peur des orages', 'est triste quand il pleut'], 1,
      "Le bleu, en français, c'est la peur. EN: she is scared stiff of them."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent', 'calque'],
};

/** USE: where the four blocks do a real job. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où tu vas les dire',
  cases: [
    uc('Une amie te demande pourquoi tu es si calme depuis lundi', E(1404)),
    uc('Tu expliques pourquoi ta sœur reste à la maison quand il y a un orage', E(1405)),
    uc('Tu préviens un ami avant un souper de famille', E(1412)),
    uc('Tu racontes ta veille d’examen', E(1407)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La tristesse', '« I feel blue. » En français, tu dis...',
    ['Je me sens bleu.', 'Je broie du noir.'], 1,
    "L'anglais est triste en bleu, le français en noir. EN: each language picks its own colour."),
  ctl('La peur', '« Une peur bleue », en anglais, c’est...',
    ['to be scared stiff', 'to feel blue', 'to see red'], 0,
    "Pas de couleur en anglais : scared stiff. EN: the colour exists only in French."),
  ctl('La même couleur', "Quelle expression a la même couleur qu'en anglais ?",
    ['passer une nuit blanche', 'broyer du noir', 'voir rouge'], 2,
    "Voir rouge : to see red. EN: the same colour."),
], ['palette', 'calque']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'La palette',
    opener: {
      line: "Broyer du noir, avoir une peur bleue, passer une nuit blanche : ici tu apprends que le français peint avec ses propres couleurs. EN: Grinding black, a blue fear, a white night: here you learn that French paints with its own colours.",
      imageRef: 'lessons/expressions-couleurs/act01.jpg',
    },
    sections: [],
    milestone: "Tu pars du sens, et tu ne te sens plus bleu quand tu es triste. EN: You start from the meaning, and you no longer feel blue when you are sad.",
    estScreens: 31, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_PALETTE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LA PEUR ET LE FROID
 *
 *  Fear shows on the face: white, green, blue. The first place the colour
 *  agrees with the person (blanche comme un linge, verts de peur).
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a camping night in the Mauricie. Story bubbles avoid « ? » and
 *  « ! », like scene bubbles. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Une nuit en Mauricie',
  frSub: 'Le feu, la forêt et un orignal',
  setting: "Le lendemain, à Trois-Rivières. Ton ami Luc te raconte sa nuit de camping avec sa fille Léa, huit ans, dans le parc de la Mauricie.",
  bubbles: [
    { from: 'narrator', fr: 'Un feu de camp, deux tentes, et une forêt très sombre.', en: 'A campfire, two tents, and a very dark forest.' },
    { from: 'coach', fr: fr(E(1426)), en: src(E(1426)).en, warn: 'nuit noire : il fait complètement noir' },
    { from: 'user', fr: 'Et vous êtes partis marcher quand même.', en: 'And you went for a walk anyway.' },
    { from: 'coach', fr: fr(E(1427)), en: src(E(1427)).en, warn: 'on ne voit plus rien' },
    { from: 'coach', fr: 'Un craquement dans les arbres. Léa était verte de peur.', en: 'A crack in the trees. Léa was petrified.', warn: 'verte : Léa est une fille, la couleur s’accorde' },
    { from: 'user', fr: "Et toi, tu étais blanc comme un linge, j'imagine.", en: 'And you were as white as a sheet, I imagine.' },
    { from: 'coach', fr: 'Oui. C’était un orignal. Il nous a fait une peur bleue.', en: 'Yes. It was a moose. It scared the living daylights out of us.', warn: 'faire une peur bleue : faire très peur' },
  ],
  closing: { fr: 'La nuit noire, un visage vert, un autre blanc, une peur bleue : quatre couleurs pour une seule peur.', en: 'The pitch-dark night, one green face, one white, a blue fear: four colours for one fear.' },
  audio: REC('rec-b1-29-mauricie'),
  say: REFRAME,
  terms: ['figure', 'accord'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-emotions',
  title: 'Les couleurs de la peur',
  frSub: 'Blanc, vert, bleu, noir',
  hint: "Cinq cartes. L'image d'abord, puis le sens, puis l'anglais.",
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'equivalent', 'accord'],
  cards: [
    card(E(1414), 'Faire très peur', 'courant',
      "L'image : tu donnes une peur bleue à quelqu'un. Le sens : tu lui fais très peur. On dit faire, pas donner. EN: to scare the living daylights out of someone."),
    card(E(1415), 'Pâle de peur', 'courant',
      "L'image : un visage blanc comme un tissu de lin. Le sens : très pâle, de peur ou de choc. EN: white as a sheet, almost the same picture."),
    card(E(1416), 'Terrifié', 'courant',
      "L'image : la peur rend le visage vert. Le sens : avoir très peur. L'anglais garde le vert pour l'envie. EN: petrified."),
    card(E(1417), 'Gelé', 'courant',
      "L'image : la peau et les lèvres deviennent bleues. Le sens : avoir très froid. EN: blue with cold, the same picture."),
    card(E(1418), 'Tout noir', 'courant',
      "L'image : une nuit toute noire. Le sens : on ne voit plus rien. EN: it is pitch dark."),
  ],
};

/** TELL THEM APART: fear, or cold and night. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'La peur, ou le froid et la nuit',
  groups: [
    grp('La peur', [
      it(E(1419), 'un chien'),
      it(E(1421), "l'ours"),
      it(E(1423), 'la tempête'),
      it(E(1420), 'une arrivée sans bruit'),
    ], chk(
      'Ces quatre phrases parlent de...',
      ['la peur', 'la tristesse'], 0,
      "Bleue, blanche, verts : trois couleurs pour la même peur. EN: three colours for fear.")),
    grp('Le froid et la nuit', [
      it(E(1424), 'une heure dans la neige'),
      it(E(1425), 'les lèvres'),
      it(E(1426), 'à vingt heures'),
      it(E(1427), 'le sentier'),
    ], chk(
      'Et ces quatre-là ?',
      ['la peur, encore', 'le froid et le noir complet', 'la colère'], 1,
      "Bleu de froid, nuit noire : le corps et la nuit. EN: cold and darkness."),
    ),
    ctl("L'accord", '« Quand elle a vu l’ours, elle est devenue ... comme un linge. »',
      ['blanc', 'blanche'], 1,
      "Elle, donc blanche. La couleur s'accorde comme d'habitude. EN: it agrees with elle."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'accord'],
};

/** The colour agrees with the person: a2.03, applied inside an idiom. */
const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  sheetId: 'sheet-accord',
  title: "La couleur s'accorde avec la personne",
  examples: [
    ex(E(1421), 'blanche : avec elle.'),
    ex(E(1422), 'blanc : avec il.'),
    ex(E(1423), 'verts : avec les enfants, au pluriel.'),
    ex(E(1425), 'bleues : avec les lèvres, féminin pluriel.'),
    ex(E(1419), 'une peur bleue : bleue va avec peur, un nom féminin.'),
    ex(E(1428), `la règle. ${Cap(ACCORD_REF)} : « ${A203_REFRAME_FR} »`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord', 'bloc'],
};

/** USE: real situations, the idiom that fits. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quelle couleur pour quelle peur',
  groups: [
    ctl('Le chat', 'Ton chat saute sur toi dans le noir. Tu dis :',
      ['Tu m’as fait une peur bleue.', 'Tu m’as fait une peur blanche.', 'Tu m’as donné une peur bleue.'], 0,
      "Une peur bleue, avec faire. EN: bleue, with faire."),
    ctl("L'avion", 'Après un vol très agité, ton frère sort pâle et tremblant. Il est...',
      ['bleu de froid', 'blanc comme un linge'], 1,
      "Pâle de peur : blanc comme un linge. EN: white as a sheet."),
    ctl('Le parc', 'Tu attends le bus à moins trente. Tes doigts sont...',
      ['bleus de froid', 'verts de peur'], 0,
      "Le froid : bleus de froid, au pluriel avec les doigts. EN: blue with cold."),
    ctl('Le sentier', 'Il est vingt-deux heures en forêt, sans lampe. Tu écris :',
      ['Il faisait nuit blanche.', 'Il faisait nuit noire.', 'Il faisait peur bleue.'], 1,
      "Le noir complet : nuit noire. Une nuit blanche, c'est une nuit sans sommeil. EN: pitch dark."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'calque'],
};

/** TRAP, stepped: the English colour, the English noun, the missing
 *  agreement, the wrong verb. */
const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: 'Chaque peur a sa couleur',
  rule: {
    title: 'La couleur est fixée, l’accord suit',
    body: "La peur est bleue, pas jaune. Le visage est blanc comme un linge, pas comme un drap. Et la couleur s'accorde : elle est devenue blanche. EN: the colour is fixed; its agreement follows the person.",
  },
  cards: [
    { promptLabel: 'yellow, la peur anglaise', promptSound: "Le chien du voisin m'a fait une peur jaune.", fr: fr(E(1419)), ipa: ipaOf(E(1419)), tip: "En français, la peur est bleue. EN: blue, not yellow." },
    { promptLabel: 'white as a sheet, mot à mot', promptSound: "Il est sorti de l'avion blanc comme un drap.", fr: fr(E(1422)), ipa: ipaOf(E(1422)), tip: "Comme un linge. EN: linge, not drap." },
    { promptLabel: "l'accord oublié", promptSound: "Quand elle a vu l'ours, elle est devenue blanc comme un linge.", fr: fr(E(1421)), ipa: ipaOf(E(1421)), tip: "Elle, donc blanche. EN: it agrees." },
    { promptLabel: 'le mauvais verbe', promptSound: "Tu m'as donné une peur bleue, je ne t'ai pas entendu arriver.", fr: fr(E(1420)), ipa: ipaOf(E(1420)), tip: "On fait une peur bleue. EN: faire, not donner." },
    { promptLabel: 'la peur à la place du froid', promptSound: "Après une heure dans la neige, j'étais bleu de peur.", fr: fr(E(1424)), ipa: ipaOf(E(1424)), tip: "Bleu de froid ; la peur bleue est un nom. EN: blue with cold." },
    { promptLabel: 'pitch dark, mot à mot', promptSound: 'À vingt heures, il faisait déjà noir comme du goudron.', fr: fr(E(1426)), ipa: ipaOf(E(1426)), tip: "Il fait nuit noire. EN: nuit noire." },
  ],
  drill: [
    { promptSay: 'Ce film m’a fait une peur ... .', opts: ['jaune', 'bleue'], correct: 1 },
    { promptSay: 'Elle est devenue ... comme un linge.', opts: ['blanche', 'blanc'], correct: 0 },
    { promptSay: 'Il est sorti blanc comme un ... .', opts: ['drap', 'mouchoir', 'linge'], correct: 2 },
    { promptSay: 'Après la tempête, les enfants étaient ... de peur.', opts: ['verts', 'vert'], correct: 0 },
    { promptSay: 'Mes lèvres sont bleues de ... .', opts: ['peur', 'froid'], correct: 1 },
    { promptSay: 'Tu m’as ... une peur bleue.', opts: ['donné', 'fait', 'mis'], correct: 1 },
    { promptSay: 'Dans la forêt, il faisait nuit ... .', opts: ['noire', 'blanche'], correct: 0 },
    { promptSay: 'Ma sœur a une ... bleue des araignées.', opts: ['nuit', 'colère', 'peur'], correct: 2 },
  ],
  steps: trapSteps('La couleur est fixée, l’accord suit'),
  audio: REC('rec-b1-29-piege-peur'),
  say: REFRAME,
  terms: ['bloc', 'accord'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le verbe', 'Le chien du voisin m’a ... une peur bleue.',
    ['fait', 'donné'], 0,
    "On fait une peur bleue à quelqu'un. EN: faire."),
  ctl("L'accord", 'Les enfants étaient ... de peur.',
    ['vert', 'verts'], 1,
    "Avec les enfants : verts. EN: plural agreement."),
  ctl('Le noir', '« Il fait nuit noire », c’est...',
    ["une nuit sans sommeil", 'le noir complet', 'une nuit triste'], 1,
    "On ne voit plus rien. EN: pitch dark."),
], ['accord', 'bloc']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La peur et le froid',
    opener: {
      line: "Une forêt noire, un craquement et deux visages pâles : ici tu dis la peur avec ses couleurs. EN: A dark forest, a crack and two pale faces: here you say fear with its colours.",
      imageRef: 'lessons/expressions-couleurs/act02.jpg',
    },
    sections: [],
    milestone: "Tu dis la peur en bleu, en blanc et en vert, et la couleur s'accorde avec la personne. EN: You can say fear in blue, white and green, with the colour agreeing.",
    estScreens: 44, restPoints: ['a2-construire', 'a2-choisir'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_CONSTRUIRE, A2_EXEMPLES, A2_CHOISIR, A2_PIEGE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LA COLÈRE
 *
 *  Anger, and the lesson's one grammar point: the colour agrees, except
 *  after voir and when it is a noun (a1.13 and a2.03, applied).
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: a Gatineau household on a bad day. `hideLines`: the
 *  questions are about who is angry at what. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Une journée de colère',
  frSub: 'Écoute, et dis qui se fâche',
  lines: [
    ln(E(1434)), ln(E(1435)), ln(E(1436)), ln(E(1437)), ln(E(1438)),
    ln(E(1439)), ln(E(1440)), ln(E(1441)), ln(E(1442)), ln(E(1444)),
  ],
  questions: [
    { q: 'Première phrase : le patron est...', opts: ['très en colère', 'un peu triste'], correct: 0, why: "Une colère noire : une très grande colère. EN: a towering rage." },
    { q: 'Quatrième phrase : qui est rouge de colère ?', opts: ['les joueurs', "l'arbitre", 'le public'], correct: 0, why: "Les joueurs sont sortis rouges de colère. EN: the players." },
    { q: 'Les bouchons du matin, pour la personne, c’est...', opts: ['un plaisir', 'ce qu’elle déteste le plus'], correct: 1, why: "Sa bête noire. EN: her pet hate." },
    { q: 'Les journaux, avec le ministre...', opts: ['sont très durs', 'sont d’accord', 'ne disent rien'], correct: 0, why: "Ils tirent à boulets rouges sur lui. EN: they lay into him." },
    { q: 'Les voisines ont vu rouge à cause...', opts: ['d’un feu rouge', 'de leur place de parking'], correct: 1, why: "La place était prise. EN: someone took their parking space." },
  ],
  audio: REC('rec-b1-29-colere-ecoute'),
  say: REFRAME,
  terms: ['figure', 'equivalent'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-emotions',
  title: 'Cinq couleurs de la colère',
  frSub: 'Noir, rouge, vert',
  hint: "Cinq cartes. Regarde bien la couleur : l'anglais ne choisit pas toujours la même.",
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent', 'fauxami'],
  cards: [
    card(E(1429), 'Une très grande colère', 'courant',
      "L'image : une colère toute noire. Le sens : une colère forte, qui dure. On entre dans une colère noire. EN: a towering rage, a black mood."),
    card(E(1430), 'Le visage fâché', 'courant',
      "L'image : le visage devient rouge. Le sens : très fâché. EN: red with anger, the same picture."),
    card(E(1431), 'Furieux', 'courant',
      "L'image : la rage rend vert. Le sens : furieux, souvent sans le dire. Attention : en anglais, le vert est l'envie. EN: livid."),
    card(E(1432), 'Ce que tu détestes', 'courant',
      "L'image : une bête noire, qui fait peur. Le sens : la chose ou la personne que tu détestes le plus. EN: your pet hate; English borrowed bête noire."),
    card(E(1433), 'Critiquer très fort', 'courant',
      "L'image : des boulets de canon rouges de chaleur. Le sens : attaquer quelqu'un avec des mots, souvent dans la presse. EN: to lay into someone."),
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Qui se fâche, et contre quoi',
  groups: [
    grp('On voit la colère', [
      it(E(1434), 'le patron'),
      it(E(1436), 'elle'),
      it(E(1437), 'les joueurs'),
      it(E(1438), 'il lit un message'),
    ], chk(
      'Ces quatre personnes sont...',
      ['un peu déçues', 'très en colère'], 1,
      "Noire, rouge, rouges, vert : quatre colères qu'on voit. EN: anger you can see.")),
    grp('Ce qu’on déteste, ceux qu’on attaque', [
      it(E(1439), 'les bouchons'),
      it(E(1440), 'les fautes'),
      it(E(1441), 'le ministre'),
      it(E(1444), 'il ne dit rien'),
    ], chk(
      'Dans « c’est ma bête noire », la bête noire est...',
      ['ce que je déteste le plus', 'un animal', 'ma colère'], 0,
      "Une chose ou une personne qu'on ne supporte pas. EN: my pet hate.")),
    ctl("L'accord", '« Les voisines ont vu ... »',
      ['rouges', 'rouge'], 1,
      "Après voir, rouge ne change pas. EN: no agreement after voir."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'accord'],
};

/** NAME, as a lookup: when the colour agrees and when it does not. The
 *  last row is a1.13's rule, quoted and rendered. */
const A3_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-tableau',
  layer: 'core',
  sheetId: 'sheet-accord',
  title: 'La couleur s’accorde, ou pas',
  cols: ['Expression', 'Accord ?', 'Exemple'],
  rows: [
    { cells: ['une colère noire', 'oui', 'des colères noires'], say: fr(E(1434)),
      detail: { title: 'Un adjectif', body: "Noire va avec colère, un nom féminin. EN: an adjective agrees with its noun.", say: fr(E(1435)) } },
    { cells: ['rouge de colère', 'oui', 'ils sont rouges'], say: fr(E(1437)),
      detail: { title: 'Avec la personne', body: "Rouges : les joueurs. Rouge garde son e au masculin. EN: rouge agrees in number.", say: fr(E(1436)) } },
    { cells: ['vert de rage', 'oui', 'elle est verte'], say: fr(E(1438)),
      detail: { title: 'Vert, verte', body: "Au féminin, tu entends le t : verte. EN: you hear the t in verte.", say: fr(E(1475)) } },
    { cells: ['voir rouge', 'non', 'elles ont vu rouge'], say: fr(E(1442)),
      detail: { title: 'Après voir', body: "Rouge dit comment on voit, pas qui on est. Pas d'accord. EN: after voir, rouge never changes.", say: fr(E(1406)) } },
    { cells: ['dans le rouge, en rose', 'non', 'ils sont dans le rouge'], say: fr(E(1485)),
      detail: { title: 'Un nom', body: "Le rouge, le rose, le noir : ce sont des noms. Ils ne s'accordent pas. EN: a colour noun never agrees.", say: fr(E(1515)) } },
    { cells: ['marron, orange, bleu marine', 'non', 'des sacs marron'], say: fr('fr.a1.couleurs.269'),
      detail: { title: 'Ce que tu sais déjà', body: `${Cap(COULEURS_REF)} : « ${A113_REFRAME_FR} » Les couleurs composées non plus. EN: ${A113_REFRAME}`, say: fr('fr.a1.couleurs.239') } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La bonne colère au bon moment',
  groups: [
    ctl('Le match', "L'arbitre a refusé le but. Les joueuses sont sorties...",
      ['rouge de colère', 'rouges de colère'], 1,
      "Les joueuses : rouges, au pluriel. EN: plural."),
    ctl('La facture', 'Ton voisin reçoit une facture de trois mille dollars. Il...',
      ['a vu rouge', 'a vu la vie en rose', 'a ri jaune'], 0,
      "Une colère soudaine : il a vu rouge. EN: he saw red."),
    ctl('Les bouchons', 'Tu détestes les bouchons plus que tout. Tu dis :',
      ["C'est ma bête noire.", "C'est ma colère noire."], 0,
      "Ce que tu détestes : ta bête noire. EN: your pet hate."),
    ctl('La presse', 'Tous les journaux critiquent très fort le maire. Ils...',
      ['lui donnent le feu vert', 'tirent à boulets rouges sur lui'], 1,
      "Une attaque très dure : à boulets rouges. EN: they lay into him."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord', 'figure'],
};

/** TRAP: the agreement both ways, the silent e, the English green. */
const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  sheetId: 'sheet-accord',
  title: 'Quatre erreurs de colère',
  errors: [
    { wrong: 'Les voisines ont vu rouges : leur place de parking était prise.', right: fr(E(1442)),
      why: "Normal : ailleurs, la couleur s'accorde. Mais après voir, rouge dit comment on voit : pas d'accord. EN: no agreement after voir." },
    { wrong: 'Les joueurs sont sortis rouge de colère.', right: fr(E(1437)),
      why: "Normal : tu viens d'apprendre voir rouge, sans accord. Ici, rouge décrit les joueurs : rouges. EN: here it describes the players." },
    { wrong: 'Le patron est entré dans une colère noir.', right: fr(E(1434)),
      why: "À l'oral, noir et noire sonnent pareil. À l'écrit, colère est féminin : noire. EN: same sound, but write the e." },
    { wrong: 'Quand il a lu le message, il est devenu vert de jalousie.', right: fr(E(1438)),
      why: "Vert de jalousie existe, mais c'est l'envie. Pour la colère : vert de rage. EN: green with envy is envy; for anger, rage." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord', 'bloc'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl("L'accord", 'Laquelle est juste ?',
    ['Elles ont vu rouge.', 'Elles ont vu rouges.'], 0,
    "Après voir, pas d'accord. EN: no agreement."),
  ctl('La bête noire', '« Les fautes, c’est la bête noire de mon prof. » Il...',
    ['les aime bien', 'les déteste', 'en a peur la nuit'], 1,
    "Ce qu'il déteste le plus. EN: his pet hate."),
  ctl('Le vert', 'Vert de rage, c’est...',
    ['furieux', 'jaloux'], 0,
    "La rage : la colère. Jaloux, c'est vert de jalousie. EN: livid."),
], ['accord', 'fauxami']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La colère',
    opener: {
      line: "Une facture, un but refusé, une place de parking volée : ici tu dis la colère, et tu accordes sa couleur. EN: A bill, a disallowed goal, a stolen parking space: here you say anger and make its colour agree.",
      imageRef: 'lessons/expressions-couleurs/act03.jpg',
    },
    sections: [],
    milestone: "Tu dis la colère en noir, en rouge et en vert, et tu sais quand la couleur ne s'accorde pas. EN: You can say anger in three colours and know when the colour does not agree.",
    estScreens: 40, restPoints: ['a3-construire', 'a3-choisir'],
  },
  sections: [A3_ECOUTE, A3_CARTES, A3_CONSTRUIRE, A3_TABLEAU, A3_CHOISIR, A3_ERREURS, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA GÊNE
 *
 *  Embarrassment is red in both languages, except for the forced laugh,
 *  which is yellow in French and has nothing to do with fear.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a forum post, the worst wedding speech in Bruxelles. */
const A4_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Ma pire honte',
  frSub: 'Lis, et compte les rouges',
  text: HONTE_TEXT,
  glossary: [
    { word: 'discours', en: 'speech', note: 'Quelques mots, debout, devant tout le monde.' },
    { word: 'les mariés', en: 'the bride and groom', note: 'Les deux personnes qui se marient.' },
    { word: 'étouffé', en: 'choked', note: "L'eau est passée du mauvais côté." },
    { word: "jusqu'au dessert", en: 'until dessert', note: 'Pendant tout le repas.' },
  ],
  questions: [
    { q: 'Quand Thomas devient-il rouge comme une tomate ?', a: "Avant même d'ouvrir la bouche : on lui demande un discours et il n'est pas prêt." },
    { q: 'Le marié a ri jaune. Il trouvait la blague drôle ?', a: "Non. Il a ri sans en avoir envie, pour être poli. Rire jaune, c'est un rire forcé." },
    { q: 'Combien de fois Thomas rougit-il ?', a: 'Trois fois : rouge comme une tomate, rouge de honte, et le rouge aux joues jusqu’au dessert.' },
    { q: 'Quelles expressions sont familières ?', a: 'Rouge comme une tomate. Les autres sont courantes.' },
  ],
  audio: REC('rec-b1-29-honte'),
  say: REFRAME,
  terms: ['figure', 'registre'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-emotions',
  title: 'Rouge, et un peu jaune',
  frSub: 'La gêne et le rire forcé',
  hint: 'Cinq cartes. Trois rouges, un jaune, et le mot jaune lui-même.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'fauxami'],
  cards: [
    card(E(1445), 'Très gêné', 'familier',
      "L'image : un visage rouge comme une tomate. Le sens : tu rougis de gêne. L'anglais choisit un autre légume : a beetroot. EN: as red as a beetroot."),
    card(E(1446), 'La honte', 'courant',
      "L'image : la honte rend rouge. Le sens : très gêné par ce que tu as fait. EN: red with shame, the same picture."),
    card(E(1447), 'Le rire forcé', 'courant',
      "L'image : un rire jaune. Le sens : tu ris sans en avoir envie, par politesse ou par gêne. Ce n'est pas la peur. EN: a forced laugh; yellow is not fear here."),
    card(E(1448), 'Rougir', 'courant',
      "L'image : du rouge sur les joues. Le sens : tu rougis, de gêne ou de plaisir. EN: to be flushed."),
    card('fr.sons.couleurs.004', 'Le jaune ne tremble pas', Cap(COULEURS_REF),
      "En anglais, yellow peut vouloir dire lâche. En français, jamais : la peur est bleue, et le jaune, c'est le rire forcé. EN: French yellow is never cowardly."),
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le visage rougit, le rire sonne faux',
  groups: [
    grp('Le visage rougit', [
      it(E(1449), 'au tableau'),
      it(E(1450), 'devant tout le monde'),
      it(E(1455), 'un compliment'),
      it(E(1456), 'le rouge monte'),
    ], chk(
      'Dans ces quatre phrases, le rouge vient...',
      ['de la colère', 'de la gêne'], 1,
      "Un tableau, un public, un compliment : on rougit de gêne. EN: embarrassment, not anger.")),
    grp('La honte et le rire forcé', [
      it(E(1451), 'il part'),
      it(E(1452), 'une chute'),
      it(E(1453), 'une coupe de cheveux'),
      it(E(1454), 'Marc'),
    ], chk(
      'Marc « a ri jaune ». Il...',
      ['a eu peur', 'a trouvé ça très drôle', 'a ri sans en avoir envie'], 2,
      "Un rire forcé : on se moque de lui. EN: a forced laugh.")),
    ctl('Le registre', 'Laquelle peux-tu écrire dans un courriel à ta directrice ?',
      ['Je suis devenu rouge comme une tomate.', "J'avais le rouge aux joues."], 1,
      "La tomate est familière. Le rouge aux joues, courant. EN: the courant one."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'figure'],
};

/** Consolidation, as answers: English front, French block back. No « EN: »
 *  tail on a back. Four from this act, four from acts 1 to 3. */
const A4_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a4-flash',
  layer: 'core',
  title: 'Huit cartes pour le visage',
  cards: [
    { front: 'as red as a beetroot', back: 'rouge comme une tomate', say: fr(E(1450)) },
    { front: 'red with shame', back: 'rouge de honte', say: fr(E(1451)) },
    { front: 'to give a forced laugh', back: 'rire jaune', say: fr(E(1453)) },
    { front: 'to be flushed', back: 'avoir le rouge aux joues', say: fr(E(1455)) },
    { front: 'to see red', back: 'voir rouge', say: fr(E(1406)) },
    { front: 'a towering rage', back: 'une colère noire', say: fr(E(1434)) },
    { front: 'to be scared stiff', back: 'avoir une peur bleue', say: fr(E(1405)) },
    { front: 'as white as a sheet', back: 'blanc comme un linge', say: fr(E(1422)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent'],
};

const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Rouge, ou jaune',
  groups: [
    ctl('Le compliment', 'Ton collègue te dit, devant tout le monde, que ta présentation était parfaite. Tu...',
      ['as le rouge aux joues', 'vois rouge'], 0,
      "Un compliment : tu rougis. Voir rouge, c'est la colère. EN: you blush."),
    ctl('La blague', 'Ton oncle fait une blague sur ton accent. Tout le monde rit. Toi, tu...',
      ['as une peur bleue', 'ris jaune', 'broies du noir'], 1,
      "Tu ris, mais sans en avoir envie. EN: a forced laugh."),
    ctl('Le texto', 'Tu envoies un message d’amour à ton patron par erreur. Entre amis, tu racontes :',
      ["J'étais rouge comme une tomate.", "J'étais vert de rage."], 0,
      "La gêne est rouge. EN: embarrassment."),
    ctl('La honte', 'Tu as oublié l’anniversaire de ta mère. Tu es...',
      ['rouge de colère', 'blanc de froid', 'rouge de honte'], 2,
      "Tu as fait quelque chose de mal : la honte. EN: red with shame."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'fauxami'],
};

/** TRAP, stepped: the English vegetable, the wrong colour, the wrong verb,
 *  the English possessive. */
const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Rouge, et le rire jaune',
  rule: {
    title: 'La gêne est rouge, le rire forcé est jaune',
    body: "Rouge comme une tomate, pas comme une betterave. On rit jaune : le verbe rire, jamais sourire. Et le rouge aux joues se dit sans possessif. EN: a tomato, rire, and no possessive.",
  },
  cards: [
    { promptLabel: 'beetroot, mot à mot', promptSound: 'Elle est devenue rouge comme une betterave devant tout le monde.', fr: fr(E(1450)), ipa: ipaOf(E(1450)), tip: "En français, une tomate. EN: a tomato." },
    { promptLabel: 'la mauvaise couleur', promptSound: 'Tout le monde a ri, sauf Marc, qui a ri vert.', fr: fr(E(1454)), ipa: ipaOf(E(1454)), tip: "Le rire forcé est jaune. EN: yellow." },
    { promptLabel: 'le mauvais verbe', promptSound: "Il a souri jaune quand on s'est moqué de sa coupe de cheveux.", fr: fr(E(1453)), ipa: ipaOf(E(1453)), tip: "On rit jaune. EN: rire, not sourire." },
    { promptLabel: 'le possessif anglais', promptSound: 'Après le compliment, elle avait du rouge sur ses joues.', fr: fr(E(1455)), ipa: ipaOf(E(1455)), tip: "Le rouge aux joues. EN: no possessive." },
    { promptLabel: "embarrassed, mot à mot", promptSound: "J'étais rouge d'embarras après ma chute.", fr: fr(E(1452)), ipa: ipaOf(E(1452)), tip: "Rouge de honte. EN: shame." },
    { promptLabel: 'le rouge, un nom', promptSound: 'La rouge lui est montée aux joues.', fr: fr(E(1456)), ipa: ipaOf(E(1456)), tip: "Le rouge : un nom masculin. EN: le rouge." },
  ],
  drill: [
    { promptSay: 'Je suis devenu rouge comme une ... .', opts: ['betterave', 'tomate'], correct: 1 },
    { promptSay: 'Il a ... jaune à ma blague.', opts: ['ri', 'souri', 'pleuré'], correct: 0 },
    { promptSay: 'Elle avait le rouge ... joues.', opts: ['sur ses', 'aux'], correct: 1 },
    { promptSay: 'Rouge de ... , il a quitté la salle.', opts: ['honte', 'peur', 'froid'], correct: 0 },
    { promptSay: 'Le rire forcé est ... .', opts: ['bleu', 'jaune'], correct: 1 },
    { promptSay: 'Elles étaient ... de honte.', opts: ['rouge', 'rouges'], correct: 1 },
    { promptSay: 'Le ... lui est monté aux joues.', opts: ['rouge', 'jaune', 'rose'], correct: 0 },
    { promptSay: 'Tout le monde a ri, sauf Marc, qui a ri ... .', opts: ['rouge', 'noir', 'jaune'], correct: 2 },
  ],
  steps: trapSteps('La gêne est rouge, le rire forcé est jaune'),
  audio: REC('rec-b1-29-piege-gene'),
  say: REFRAME,
  terms: ['bloc', 'calque'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le jaune', '« Rire jaune », c’est...',
    ['rire de peur', 'rire sans en avoir envie'], 1,
    "Un rire forcé. La peur est bleue. EN: a forced laugh."),
  ctl('La tomate', '« Rouge comme une tomate » est...',
    ['familier', 'courant', 'soutenu'], 0,
    "Entre amis. EN: informal."),
  ctl('Le visage', 'Le rouge aux joues, c’est...',
    ['la colère', 'la gêne ou le plaisir'], 1,
    "On rougit. EN: you blush."),
], ['fauxami', 'registre']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La gêne',
    opener: {
      line: "Un discours raté, une blague qui tombe à plat : ici tu dis la gêne, rouge ou jaune. EN: A failed speech, a joke that falls flat: here you say embarrassment, red or yellow.",
      imageRef: 'lessons/expressions-couleurs/act04.jpg',
    },
    sections: [],
    milestone: "Tu rougis en français, et tu sais que le jaune n'a pas peur. EN: You can blush in French, and you know yellow is not afraid.",
    estScreens: 42, restPoints: ['a4-construire', 'a4-choisir'],
  },
  sections: [A4_LECTURE, A4_CARTES, A4_CONSTRUIRE, A4_FLASH, A4_CHOISIR, A4_PIEGE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — L'ENVIE ET LA SANTÉ
 *
 *  Green for envy (the same as English), green for sickness, blue for a
 *  bruise, white for no tan, grey for tipsy.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a Monday in a Bruxelles office, after a colleague's holiday. */
const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Le retour d’Anaïs',
  frSub: 'Bronzée, et un peu abîmée',
  setting: "Lundi, dans un bureau de Bruxelles. Ta collègue Anaïs revient d'une semaine au Maroc. Ton collègue Bruno, lui, n'est pas parti.",
  bubbles: [
    { from: 'narrator', fr: 'Anaïs arrive bronzée, avec cent photos dans son téléphone.', en: 'Anaïs arrives tanned, with a hundred photos on her phone.' },
    { from: 'coach', fr: "En février, j'étais blanche comme un cachet d'aspirine.", en: 'In February, I was pasty white.', warn: 'blanche : Anaïs, au féminin ; familier, surtout en France et en Belgique' },
    { from: 'user', fr: 'Bruno, lui, ne dit rien. Il est vert de jalousie.', en: 'Bruno says nothing. He is green with envy.' },
    { from: 'coach', fr: "Le premier jour, sur le bateau, j'étais toute verte.", en: 'On the first day, on the boat, I looked green.', warn: 'toute verte : elle avait mal au cœur' },
    { from: 'user', fr: 'Et tu as un bleu sur le bras.', en: 'And you have a bruise on your arm.' },
    { from: 'coach', fr: "Une chute à la fête de l'hôtel. J'étais un peu grise, ce soir-là.", en: 'A fall at the hotel party. I was a bit tipsy that night.', warn: 'grise : un peu ivre' },
  ],
  closing: { fr: 'Blanche, verte, un bleu, grise, et un collègue vert de jalousie : aucune de ces couleurs ne se peint.', en: 'White, green, a bruise, grey and a green-with-envy colleague: none of these colours comes in a tin.' },
  audio: REC('rec-b1-29-bruxelles'),
  say: REFRAME,
  terms: ['figure', 'variante'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-emotions',
  title: "L'envie, et le corps en couleurs",
  frSub: 'Vert, bleu, blanc, gris',
  hint: 'Cinq cartes. Regarde qui est familier.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent', 'registre'],
  cards: [
    card(E(1459), 'Très jaloux', 'courant',
      "L'image : la jalousie rend vert. Le sens : très jaloux. Ici, le français et l'anglais ont la même couleur. EN: green with envy."),
    card(E(1460), 'Mal au cœur', 'familier',
      "L'image : un visage vert. Le sens : tu vas être malade, sur un bateau ou après un repas. EN: to look green, the same picture."),
    card(E(1461), 'Une marque sur la peau', 'courant',
      "L'image : la peau devient bleue. Le sens : une marque après un coup. Un bleu est un nom : des bleus. EN: a bruise."),
    card(E(1462), 'Pas bronzé', 'familier',
      "L'image : blanc comme un médicament. Le sens : très pâle, surtout après l'hiver. Surtout en France et en Belgique. EN: pasty white."),
    card(E(1463), 'Un peu ivre', 'familier',
      "L'image : la tête devient grise. Le sens : un peu ivre, pas plus. EN: tipsy."),
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: "L'envie, ou le corps",
  groups: [
    grp("L'envie", [
      it(E(1464), 'une promotion'),
      it(E(1465), 'une nouvelle auto'),
      it(E(1475), 'une sœur qui se tait'),
    ], chk(
      'Dans ces phrases, le vert dit...',
      ['la jalousie', 'la maladie'], 0,
      "Vert de jalousie : comme en anglais. EN: green with envy.")),
    grp('Le corps', [
      it(E(1466), 'un bateau'),
      it(E(1468), 'une table'),
      it(E(1469), 'le hockey'),
      it('fr.a2.corps.008', 'depuis hier'),
    ], chk(
      '« Un bleu », dans ces phrases, c’est...',
      ['une couleur de vêtement', 'une marque sur la peau', 'un débutant'], 1,
      "Après un coup, la peau garde une marque. EN: a bruise.")),
    ctl('Le gris', '« Il était un peu gris » veut dire qu’il...',
      ['était triste', 'avait bu un peu trop', 'était fatigué'], 1,
      "Gris : un peu ivre. EN: tipsy."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'propre'],
};

/** Three tricks to keep these five apart. */
const A5_ASTUCES: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a5-astuces',
  layer: 'core',
  title: 'Trois astuces pour ne pas mélanger',
  hacks: [
    { hack: "Le vert de la jalousie, tu l'as déjà : c'est le même qu'en anglais.",
      why: "Pars du sens : jaloux. La couleur française est la même, garde-la. EN: same colour; keep it." },
    { hack: 'Un bleu sur la peau est un nom : un bleu, des bleus, se faire un bleu.',
      why: "Tu ne dis pas « ma peau est bleue ». La marque elle-même s'appelle un bleu. EN: the bruise is the noun." },
    { hack: "Gris comme un ciel de novembre : la tête un peu dans le brouillard, après deux verres.",
      why: "Une image pour retenir que gris, c'est un peu ivre, pas triste. EN: grey is tipsy, not sad." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['palette', 'propre'],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quelle couleur pour ton corps',
  groups: [
    ctl('Le traversier', 'Ton amie a mal au cœur sur le traversier. Tu lui dis :',
      ['Tu es toute verte.', 'Tu es verte de jalousie.'], 0,
      "Mal au cœur : toute verte. La jalousie, c'est autre chose. EN: you look green."),
    ctl('Le genou', 'Tu es tombé à vélo hier. Aujourd’hui, sur ton genou, tu as...',
      ['un bleu', 'un noir', 'un rouge'], 0,
      "La marque s'appelle un bleu. EN: a bruise."),
    ctl('La fête', 'Après deux verres, ton cousin chante un peu trop fort. Il est...',
      ['gris', 'blanc'], 0,
      "Un peu ivre : gris. EN: tipsy."),
    ctl('Le voisin', 'Ton voisin regarde ta nouvelle piscine sans rien dire. Il est...',
      ['tout vert', 'blanc comme un linge', 'vert de jalousie'], 2,
      "Il est jaloux. EN: green with envy."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'registre'],
};

/** TRAP: the agreement, the English black, the random blue, the
 *  yellow of other languages. */
const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  sheetId: 'sheet-pieges',
  title: "Quatre erreurs d'envie et de santé",
  errors: [
    { wrong: 'Ma cousine était vert de jalousie devant ma nouvelle auto.', right: fr(E(1465)),
      why: "Normal : on apprend le bloc au masculin. Mais la couleur s'accorde avec ta cousine : verte. EN: verte, for a woman." },
    { wrong: "Je me suis cogné à la table et j'ai un noir.", right: fr(E(1468)),
      why: "Normal : en anglais, on a un œil au beurre noir, black and blue. En français, la marque s'appelle un bleu. EN: a bruise is un bleu." },
    { wrong: 'Après deux verres de vin, il était un peu bleu.', right: fr(E(1472)),
      why: "Normal : en anglais, blue veut dire beaucoup de choses. En français, bleu, c'est le froid ou la peur. Un peu ivre : gris. EN: tipsy is grey." },
    { wrong: 'Il est jaune de jalousie depuis ta promotion.', right: fr(E(1464)),
      why: "Normal : dans d'autres langues, la jalousie est jaune. En français comme en anglais, elle est verte. EN: envy is green." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord', 'calque'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La jalousie', 'Laquelle a la même couleur qu’en anglais ?',
    ['vert de jalousie', 'être gris', 'avoir un bleu'], 0,
    "Green with envy. EN: the same colour."),
  ctl('Le bleu', '« J’ai un bleu au genou. » C’est...',
    ['une marque sur la peau', 'un pantalon bleu'], 0,
    "Un bleu : la marque d'un coup. EN: a bruise."),
  ctl('Le registre', 'Laquelle est familière ?',
    ['vert de jalousie', 'être gris'], 1,
    "Être gris : entre amis. EN: informal."),
], ['registre', 'accord']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: "L'envie et la santé",
    opener: {
      line: "Un collègue jaloux, un bateau qui bouge, un bleu au bras : ici tu dis l'envie et le corps en couleurs. EN: A jealous colleague, a rocking boat, a bruise: here you say envy and the body in colours.",
      imageRef: 'lessons/expressions-couleurs/act05.jpg',
    },
    sections: [],
    milestone: "Tu dis l'envie, le mal de mer, un bleu et deux verres de trop, chacun avec sa couleur. EN: You can say envy, seasickness, a bruise and one drink too many, each with its colour.",
    estScreens: 38, restPoints: ['a5-construire', 'a5-choisir'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_CONSTRUIRE, A5_ASTUCES, A5_CHOISIR, A5_ERREURS, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — L'ARGENT AU NOIR
 *
 *  Black is hidden money, red is debt, white is laundered, green is the US
 *  dollar. Four of five share the English colour; the image is the trap.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a news brief from Dakar. */
const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le travail au noir à Dakar',
  frSub: "Lis la brève, et suis l'argent",
  text: DAKAR_TEXT,
  glossary: [
    { word: 'en recul', en: 'on the decline', note: 'Il y en a moins qu’avant.' },
    { word: 'statut', en: 'status', note: 'Une place officielle : un contrat, des droits.' },
    { word: 'prêts', en: 'loans', note: "L'argent que la banque donne et qu'on rend plus tard." },
    { word: 'importés', en: 'imported', note: 'Qui viennent d’un autre pays.' },
  ],
  questions: [
    { q: 'Pourquoi les jeunes Dakarois refusent-ils de travailler au noir ?', a: "Parce qu'il n'y a ni contrat, ni assurance, ni retraite : ils veulent un vrai statut." },
    { q: 'Que veut dire « un compte dans le rouge » ?', a: "Il n'y a plus d'argent sur le compte : on doit de l'argent à la banque." },
    { q: 'Qu’a fait le commerçant arrêté ?', a: "Il blanchissait de l'argent : il cachait l'origine d'un argent sale dans sa boutique." },
    { q: 'Pourquoi les produits importés coûtent-ils plus cher ?', a: 'Parce que le billet vert, le dollar américain, continue de monter.' },
  ],
  audio: REC('rec-b1-29-dakar'),
  say: REFRAME,
  terms: ['propre', 'figure'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-vie',
  title: "Cinq couleurs de l'argent",
  frSub: 'Noir, rouge, blanc, vert',
  hint: "Cinq cartes. Le noir, ici, c'est ce qu'on cache.",
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'equivalent'],
  cards: [
    card(E(1476), 'Sans déclarer', 'courant',
      "L'image : travailler dans le noir, là où personne ne voit. Le sens : sans contrat, sans payer d'impôts. EN: to work off the books, cash in hand."),
    card(E(1477), 'Le commerce caché', 'courant',
      "L'image : un marché dans l'ombre. Le sens : acheter et vendre en dehors de la loi. EN: the black market, the same colour."),
    card(E(1478), 'À découvert', 'courant',
      "L'image : les chiffres en rouge sur le relevé. Le sens : ton compte est sous zéro. EN: to be in the red, the same picture."),
    card(E(1479), "Laver l'argent sale", 'courant',
      "L'image : rendre l'argent blanc, propre. Le sens : cacher d'où vient un argent illégal. L'anglais le lave : to launder. EN: another picture."),
    card(E(1480), 'Le dollar américain', 'courant',
      "L'image : un billet de couleur verte. Le sens : le dollar américain, dans les journaux. Le dollar canadien, lui, n'est pas vert. EN: a greenback."),
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Caché, ou dans le rouge',
  groups: [
    grp('Caché : le noir', [
      it(E(1481), 'la fin de semaine'),
      it(E(1482), 'des peintres'),
      it(E(1483), 'des billets de concert'),
      it(E(1484), 'pendant la guerre'),
    ], chk(
      'Dans ces phrases, le noir veut dire...',
      ['la nuit', 'la tristesse', 'caché, hors la loi'], 2,
      "Au noir, au marché noir : ce qu'on cache. EN: hidden, illegal.")),
    grp("Le compte et l'argent", [
      it(E(1485), 'depuis le quinze'),
      it(E(1486), 'un contrat'),
      it(E(1487), 'la police'),
      it(E(1488), "l'euro"),
    ], chk(
      '« Dans le rouge », c’est...',
      ['avoir des dettes', 'avoir beaucoup d’argent'], 0,
      "Le compte est sous zéro. EN: in the red.")),
    ctl('Le vert', 'Au Canada, « le billet vert », c’est...',
      ['le dollar canadien', 'le dollar américain'], 1,
      "Le dollar américain. EN: the US dollar."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'propre'],
};

/** NAME, as a lookup: the English colour next to the French one. */
const A6_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-tableau',
  layer: 'core',
  sheetId: 'sheet-vie',
  title: "L'argent, en deux palettes",
  cols: ['Français', 'Anglais', 'Même couleur ?'],
  rows: [
    { cells: ['travailler au noir', 'off the books', 'non'], say: fr(E(1481)),
      detail: { title: 'Au noir', body: "L'anglais n'a pas de couleur ici. Le noir français, c'est caché. EN: no colour in English.", say: fr(E(1491)) } },
    { cells: ['le marché noir', 'the black market', 'oui'], say: fr(E(1483)),
      detail: { title: 'Le marché noir', body: "La même couleur, la même image. EN: the same colour.", say: fr(E(1484)) } },
    { cells: ['être dans le rouge', 'to be in the red', 'oui'], say: fr(E(1485)),
      detail: { title: 'Dans le rouge', body: "Le rouge est un nom : pas d'accord. Nous sommes dans le rouge. EN: no agreement.", say: fr(E(1486)) } },
    { cells: ['sortir du rouge', 'to get out of the red', 'oui'], say: fr(E(1486)),
      detail: { title: 'Sortir du rouge', body: "Du rouge : de + le. EN: the same picture, moving out.", say: fr(E(1486)) } },
    { cells: ["blanchir de l'argent", 'to launder money', 'non'], say: fr(E(1487)),
      detail: { title: 'Blanchir', body: "Le français rend l'argent blanc ; l'anglais le lave. EN: whiten against wash.", say: fr(E(1487)) } },
    { cells: ['un billet vert', 'a greenback', 'oui'], say: fr(E(1488)),
      detail: { title: 'Le billet vert', body: "Le dollar américain, surtout dans les journaux. EN: press language.", say: fr(E(1489)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent', 'palette'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: "Suis l'argent",
  groups: [
    ctl('Le plombier', 'Le plombier te propose un prix plus bas, sans facture. Il veut...',
      ['travailler au noir', 'blanchir de l’argent'], 0,
      "Sans facture, sans déclarer : au noir. EN: cash in hand."),
    ctl('Le relevé', 'Ta banque t’écrit : ton solde est de moins deux cents dollars. Tu es...',
      ['au marché noir', 'dans le rouge'], 1,
      "Sous zéro : dans le rouge. EN: in the red."),
    ctl('Les billets', 'Des billets pour la finale se vendent dix fois leur prix sur un site douteux. C’est...',
      ['un chèque en blanc', 'le marché noir', 'le billet vert'], 1,
      "Un commerce caché : le marché noir. EN: the black market."),
    ctl('Les nouvelles', 'Le journaliste dit : « Le dollar américain a monté. » Il peut dire aussi :',
      ['Le billet vert a monté.', 'Le billet rouge a monté.', 'Le marché noir a monté.'], 0,
      "Le billet vert : le dollar américain. EN: the greenback."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'equivalent'],
};

/** TRAP, stepped: dans le noir, the English wash, the English word order,
 *  the English dollar, the noun rouge, the noun noir. */
const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: "L'argent qui change de couleur",
  rule: {
    title: 'Au noir, dans le rouge, et on blanchit',
    body: "On travaille au noir, pas dans le noir. On blanchit l'argent, on ne le lave pas. Le rouge et le noir sont des noms ici : ils ne s'accordent pas. EN: au noir, blanchir, and no agreement on a colour noun.",
  },
  cards: [
    { promptLabel: 'dans le noir', promptSound: 'Il travaille dans le noir les fins de semaine.', fr: fr(E(1481)), ipa: ipaOf(E(1481)), tip: "Au noir : sans déclarer. Dans le noir : sans lumière. EN: au noir." },
    { promptLabel: 'launder, mot à mot', promptSound: "La police a arrêté un homme qui lavait de l'argent.", fr: fr(E(1487)), ipa: ipaOf(E(1487)), tip: "On blanchit l'argent. EN: whiten." },
    { promptLabel: "l'ordre anglais", promptSound: 'Ces billets de concert se vendent au noir marché.', fr: fr(E(1483)), ipa: ipaOf(E(1483)), tip: "Le marché noir : la couleur après le nom. EN: colour after the noun." },
    { promptLabel: 'le dollar vert', promptSound: "Le dollar vert a baissé face à l'euro.", fr: fr(E(1488)), ipa: ipaOf(E(1488)), tip: "Le billet vert. EN: billet." },
    { promptLabel: 'la rouge', promptSound: "Grâce à ce contrat, l'entreprise est sortie de la rouge.", fr: fr(E(1486)), ipa: ipaOf(E(1486)), tip: "Du rouge : un nom masculin. EN: le rouge." },
    { promptLabel: "l'accord du nom", promptSound: 'Beaucoup de peintres sont payés aux noirs.', fr: fr(E(1482)), ipa: ipaOf(E(1482)), tip: "Au noir ne bouge jamais. EN: au noir is fixed." },
  ],
  drill: [
    { promptSay: 'Il travaille ... noir.', opts: ['dans le', 'au'], correct: 1 },
    { promptSay: "Ils ... de l'argent dans une boutique.", opts: ['blanchissaient', 'lavaient'], correct: 0 },
    { promptSay: 'On achetait du beurre au ... .', opts: ['noir marché', 'marché noir'], correct: 1 },
    { promptSay: 'Mon compte est dans le ... .', opts: ['rouge', 'noir', 'blanc'], correct: 0 },
    { promptSay: 'Le ... vert a baissé.', opts: ['dollar', 'billet'], correct: 1 },
    { promptSay: "L'entreprise est sortie ... rouge.", opts: ['de la', 'du'], correct: 1 },
    { promptSay: 'Elles travaillent au ... .', opts: ['noires', 'noir'], correct: 1 },
    { promptSay: 'Nous sommes dans le ... depuis mars.', opts: ['vert', 'blanc', 'rouge'], correct: 2 },
  ],
  steps: trapSteps('Au noir, dans le rouge, et on blanchit'),
  audio: REC('rec-b1-29-piege-argent'),
  say: REFRAME,
  terms: ['bloc', 'calque'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le noir', '« Travailler au noir », c’est travailler...',
    ['la nuit', 'sans déclarer'], 1,
    "Le noir, ici, c'est ce qu'on cache. EN: off the books."),
  ctl('Le blanc', 'Laver de l’argent sale, en français :',
    ["blanchir de l'argent", "nettoyer de l'argent", "rougir de l'argent"], 0,
    "Blanchir. EN: to launder."),
  ctl('Le rouge', 'Laquelle est juste ?',
    ['Nous sommes dans le rouge.', 'Nous sommes dans les rouges.'], 0,
    "Le rouge est un nom : il ne bouge pas. EN: no agreement."),
], ['propre', 'accord']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: "L'argent au noir",
    opener: {
      line: "Un plombier sans facture, un compte à zéro, un dollar qui monte : ici tu suis l'argent en couleurs. EN: A plumber with no invoice, an empty account, a rising dollar: here you follow money in colours.",
      imageRef: 'lessons/expressions-couleurs/act06.jpg',
    },
    sections: [],
    milestone: "Tu dis l'argent caché, les dettes et le dollar, et tu ne travailles plus dans le noir. EN: You can talk about hidden money, debt and the dollar.",
    estScreens: 44, restPoints: ['a6-construire', 'a6-choisir'],
  },
  sections: [A6_LECTURE, A6_CARTES, A6_CONSTRUIRE, A6_TABLEAU, A6_CHOISIR, A6_PIEGE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LE BLANC
 *
 *  White is emptiness: no sleep, no words, no real exam, no real marriage.
 *  One English blue turns white: out of the blue, de but en blanc.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: a student in Lyon the week of her oral exam. `hideLines`:
 *  the questions are about what went blank and what was fake. */
const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Une semaine en blanc',
  frSub: 'Écoute, et dis ce qui manque',
  lines: [
    ln(E(1497)), ln(E(1498)), ln(E(1499)), ln(E(1500)), ln(E(1501)),
    ln(E(1502)), ln(E(1503)), ln(E(1504)), ln(E(1505)), ln(E(1506)),
  ],
  questions: [
    { q: 'Première phrase : devant le jury, la personne...', opts: ['a oublié ce qu’elle voulait dire', 'a très bien parlé'], correct: 0, why: "Un blanc : plus un mot ne vient. EN: her mind went blank." },
    { q: "L'examen blanc de lundi, c’est...", opts: ['le vrai examen', 'un examen pour s’entraîner', 'un examen sans questions'], correct: 1, why: "Un examen blanc : pour s'entraîner. EN: a mock exam." },
    { q: 'Le couple s’est marié...', opts: ["par amour", 'pour les papiers'], correct: 1, why: "Un mariage blanc : un faux mariage. EN: a sham marriage." },
    { q: '« De but en blanc », la personne a posé sa question...', opts: ['sans prévenir', 'par écrit', 'très lentement'], correct: 0, why: "Directement, sans préparer. EN: point-blank." },
    { q: 'Le bus ou le métro, pour elle...', opts: ['le bus est mieux', "c'est pareil"], correct: 1, why: "Bonnet blanc et blanc bonnet : aucune différence. EN: six of one." },
  ],
  audio: REC('rec-b1-29-blanc-ecoute'),
  say: REFRAME,
  terms: ['figure', 'fauxami'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-vie',
  title: 'Cinq blancs',
  frSub: 'Le vide, le faux, le pareil',
  hint: 'Cinq cartes. Cherche ce qui manque dans chacune.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'variante'],
  cards: [
    card(E(1492), 'Tout oublier', 'courant',
      "L'image : la tête devient une page blanche. Le sens : d'un coup, plus un mot ne vient. EN: to go blank, almost the same picture."),
    card(E(1493), "L'examen d'entraînement", 'courant',
      "L'image : un examen blanc, qui ne compte pas. Le sens : un examen pour s'entraîner. Surtout en France ; au Québec, un examen de pratique. EN: a mock exam."),
    card(E(1494), 'Un faux mariage', 'courant',
      "L'image : un mariage vide, sans amour. Le sens : on se marie pour les papiers. Ce n'est pas la robe blanche. EN: a sham marriage."),
    card(E(1495), 'Sans prévenir', 'courant',
      "L'image : tirer droit sur le centre blanc de la cible. Le sens : directement, sans préparer. L'anglais tire du bleu : out of the blue. EN: point-blank."),
    card(E(1496), "C'est pareil", 'familier',
      "L'image : un bonnet blanc, un blanc bonnet : les mêmes mots, dans l'autre sens. Le sens : aucune différence. EN: six of one, half a dozen of the other."),
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le vide, ou le faux',
  groups: [
    grp('Plus rien dans la tête', [
      it(E(1497), 'le jury'),
      it(E(1498), 'un discours'),
      it(E(1407), 'la veille'),
      it(E(1410), 'le bébé'),
    ], chk(
      'Dans ces phrases, il manque...',
      ['les mots ou le sommeil', 'l’argent'], 0,
      "Un blanc, une nuit blanche : le vide. EN: words or sleep are missing.")),
    grp('Pour de faux, ou sans prévenir', [
      it(E(1499), 'avant le vrai'),
      it(E(1501), 'les papiers'),
      it(E(1503), 'célibataire'),
      it(E(1504), 'un départ'),
    ], chk(
      '« Un examen blanc » et « un mariage blanc » ont un point commun...',
      ['ils sont faux ou pour s’entraîner', 'ils se passent l’hiver', 'ils sont très chers'], 0,
      "Ils ne sont pas vrais : l'un pour s'entraîner, l'autre pour les papiers. EN: neither is the real thing.")),
    ctl('Pareil', 'Le train de 8 h ou celui de 8 h 10 : ça ne change rien. Tu dis :',
      ["C'est bonnet blanc et blanc bonnet.", "C'est de but en blanc."], 0,
      "Aucune différence. EN: six of one."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'propre'],
};

/** Write what you hear: five of the act's sentences. */
const A7_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a7-dictee',
  layer: 'core',
  title: 'Écris les cinq blancs',
  itemIds: dicteeFor(7),
  audio: AUDIO,
  say: REFRAME,
  terms: ['bloc'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quel blanc pour quel vide',
  groups: [
    ctl("L'entrevue", 'Pendant ton entrevue, tu oublies le nom de ton ancienne entreprise. Tu as eu...',
      ['une nuit blanche', 'un blanc'], 1,
      "Plus un mot ne vient : un blanc. EN: you went blank."),
    ctl('La question', 'Au premier rendez-vous, il te demande ton salaire sans prévenir. Il a demandé...',
      ['de but en blanc', 'en noir et blanc', 'noir sur blanc'], 0,
      "Sans prévenir : de but en blanc. EN: point-blank."),
    ctl('Le lycée', 'À Lyon, un mois avant le bac, les élèves passent...',
      ['un mariage blanc', 'un examen blanc'], 1,
      "Un examen pour s'entraîner. EN: a mock exam."),
    ctl('La loi', 'Ils se marient pour qu’elle ait ses papiers. La police parle...',
      ["d'un mariage en blanc", "d'un mariage blanc", "d'une nuit blanche"], 1,
      "Un mariage blanc : un faux mariage. En blanc, c'est la robe. EN: a sham marriage."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxami', 'figure'],
};

/** TRAP: the English blue, the writer's blank page, the white dress, the
 *  agreement of nuit blanche. */
const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  sheetId: 'sheet-pieges',
  title: 'Quatre erreurs en blanc',
  errors: [
    { wrong: "Il m'a demandé hors du bleu si j'étais célibataire.", right: fr(E(1503)),
      why: "Normal : en anglais, out of the blue. Mais le français tire dans le blanc : de but en blanc. EN: the French colour is white." },
    { wrong: "Devant le jury, j'ai eu une page blanche.", right: fr(E(1497)),
      why: "La page blanche existe : c'est l'écrivain qui n'écrit plus. À l'oral, devant un jury, tu as un blanc. EN: spoken, un blanc." },
    { wrong: "Ils se sont mariés en blanc pour les papiers.", right: fr(E(1501)),
      why: "Normal : se marier en blanc existe, mais c'est la robe blanche. Pour les papiers : un mariage blanc. EN: en blanc is the dress." },
    { wrong: "J'ai passé une nuit blanc avant l'examen.", right: fr(E(1407)),
      why: "À l'oral, tu entends blanche, mais à l'écrit on oublie le -che. La nuit est féminine : blanche. EN: nuit is feminine." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxami', 'calque'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le blanc', 'Nuit blanche, un blanc, mariage blanc : qu’est-ce qui manque ?',
    ['la couleur', 'quelque chose : le sommeil, les mots, l’amour'], 1,
    "Le blanc, c'est souvent le vide. EN: white is emptiness."),
  ctl("L'anglais", '« Out of the blue », en français :',
    ['hors du bleu', 'noir sur blanc', 'de but en blanc'], 2,
    "Le bleu anglais devient blanc. EN: another colour."),
  ctl('Le pays', '« Un examen blanc » se dit surtout...',
    ['en France', 'au Québec'], 0,
    "Au Québec, on dit plutôt un examen de pratique. EN: France."),
], ['figure', 'variante']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Le blanc',
    opener: {
      line: "Une nuit sans sommeil, une tête vide devant le jury : ici tu dis tout ce que le blanc laisse vide. EN: A night without sleep, an empty head before the panel: here you say everything white leaves empty.",
      imageRef: 'lessons/expressions-couleurs/act07.jpg',
    },
    sections: [],
    milestone: "Tu dis le vide, le faux et le pareil en blanc, et tu ne tires plus du bleu anglais. EN: You can say empty, fake and the same in white.",
    estScreens: 40, restPoints: ['a7-construire', 'a7-choisir'],
  },
  sections: [A7_ECOUTE, A7_CARTES, A7_CONSTRUIRE, A7_DICTEE, A7_CHOISIR, A7_ERREURS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — EN ROSE OU EN NOIR
 *
 *  Two palettes for one life: pink for the optimist, black and grey for the
 *  pessimist, rose water and a blue flower for the romantic.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: two friends leaving a cinema in Genève. */
const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'La sortie du cinéma',
  frSub: 'Deux amis, deux palettes',
  setting: "Samedi soir, à Genève. Tu sors du cinéma avec ton amie Chiara. Elle a adoré le film d'amour ; toi, beaucoup moins.",
  bubbles: [
    { from: 'narrator', fr: "Deux heures de violons, un baiser sous la pluie, et Chiara qui pleure encore.", en: 'Two hours of violins, a kiss in the rain, and Chiara still crying.' },
    { from: 'coach', fr: "J'ai adoré. Je suis très fleur bleue, je sais.", en: 'I loved it. I am a hopeless romantic, I know.', warn: 'fleur bleue : romantique, un peu naïve' },
    { from: 'user', fr: "Moi, je l'ai trouvé un peu à l'eau de rose.", en: 'I found it a bit soppy.' },
    { from: 'coach', fr: 'Toi, tu vois tout en noir. Moi, je vois la vie en rose.', en: 'You look on the dark side. I see the world through rose-tinted glasses.', warn: 'deux palettes : le rose et le noir' },
    { from: 'user', fr: "Dans la vraie vie, l'amour, ce n'est pas tout rose.", en: 'In real life, love is not all roses.' },
    { from: 'coach', fr: 'Arrête de faire grise mine et viens manger une fondue.', en: 'Stop pulling a long face and come and eat a fondue.', warn: 'faire grise mine : avoir l’air mécontent' },
  ],
  closing: { fr: 'Du rose, du noir, du gris, du bleu : deux amis, deux palettes, un seul film.', en: 'Pink, black, grey, blue: two friends, two palettes, one film.' },
  audio: REC('rec-b1-29-geneve'),
  say: REFRAME,
  terms: ['palette', 'figure'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-vie',
  title: 'Voir en rose, voir en noir',
  frSub: "L'optimiste, le pessimiste, le romantique",
  hint: 'Sept cartes. Deux roses, trois sombres, deux romantiques.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent', 'propre'],
  cards: [
    card(E(1508), 'Optimiste', 'courant',
      "L'image : tu regardes la vie à travers du rose. Le sens : tout te semble beau. EN: rose-tinted glasses, almost the same picture."),
    card(E(1509), 'Pas facile', 'courant',
      "L'image : tout n'est pas rose. Le sens : il y a aussi des difficultés. Souvent au négatif. EN: it is not all roses."),
    card(E(1510), 'Pessimiste', 'courant',
      "L'image : tu vois tout en noir. Le sens : tu imagines toujours le pire. EN: to look on the dark side."),
    card(E(1511), 'Des pensées tristes', 'courant',
      "L'image : des idées noires. Le sens : des pensées très tristes, parfois graves. Si c'est ton cas, parles-en à quelqu'un. EN: dark thoughts."),
    card(E(1512), "L'air mécontent", 'courant',
      "L'image : un visage gris. Le sens : tu montres que tu n'es pas content, ou déçu. EN: to pull a long face."),
    card(E(1513), 'Trop sentimental', 'courant',
      "L'image : l'eau parfumée à la rose, douce et sucrée. Le sens : une histoire trop sentimentale. EN: soppy, schmaltzy."),
    card(E(1514), 'Romantique et naïf', 'courant',
      "L'image : une petite fleur bleue. Le sens : très romantique, un peu naïf. On dit être fleur bleue, sans article. EN: a hopeless romantic."),
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le rose, ou le noir et le gris',
  groups: [
    grp('En rose', [
      it(E(1515), 'amoureux'),
      it(E(1516), 'même sous la pluie'),
      it(E(1517), "la vie d'artiste"),
      it(E(1518), "l'étranger"),
    ], chk(
      '« Ce n’est pas tout rose » veut dire...',
      ['il y a des difficultés', 'tout va très bien', 'c’est une couleur laide'], 0,
      "Pas tout rose : pas seulement facile. EN: not all roses.")),
    grp('En noir et en gris', [
      it(E(1519), 'ça va aller'),
      it(E(1520), 'la fatigue'),
      it(E(1521), "l'accident"),
      it(E(1523), 'la pluie'),
    ], chk(
      'Ces quatre personnes sont...',
      ['optimistes', 'amoureuses', 'tristes ou pessimistes'], 2,
      "Tout en noir, des idées noires, grise mine : le côté sombre. EN: the dark side.")),
    ctl('Le romantique', '« Il est très fleur bleue. » Il...',
      ['aime les fleurs du jardin', 'est très romantique', 'est souvent triste'], 1,
      "Romantique, un peu naïf. EN: a hopeless romantic."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'propre'],
};

/** Which colour moves and which does not, in this family. */
const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  sheetId: 'sheet-accord',
  title: 'Ce qui bouge, ce qui reste',
  examples: [
    ex('fr.sons.couleurs.008', "le mot. Dans « en rose », c'est un nom : il ne bouge pas."),
    ex(E(1520), 'tout en noir : noir est un nom, même avec il.'),
    ex(E(1524), 'grise va avec mine, un nom féminin, même au pluriel des enfants.'),
    ex(E(1526), "à l'eau de rose : ne bouge jamais, même avec des romans."),
    ex(E(1527), 'fleur bleue : sans article, et bleue reste féminin.'),
    ex(E(1528), 'la règle des deux palettes.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord', 'bloc'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quelle humeur, quelle couleur',
  groups: [
    ctl('Le nouveau travail', 'Ton ami a un nouveau travail, un nouvel appartement, une amoureuse. Il...',
      ['voit tout en noir', 'fait grise mine', 'voit la vie en rose'], 2,
      "Tout va bien : il voit la vie en rose. EN: rose-tinted glasses."),
    ctl('La pluie', 'Ta sœur apprend que le pique-nique est annulé. Elle...',
      ['fait grise mine', 'a carte blanche'], 0,
      "Déçue : grise mine. EN: a long face."),
    ctl('Le roman', "Un roman où le prince épouse la bergère après trois pages. C'est...",
      ['à boulets rouges', "à l'eau de rose", 'noir sur blanc'], 1,
      "Trop sentimental : à l'eau de rose. EN: soppy."),
    ctl('Le déménagement', 'Tu expliques à un ami que vivre à l’étranger est parfois dur :',
      ["Ce n'est pas toujours rose.", "C'est toujours à l'eau de rose."], 0,
      "Pas toujours rose : pas toujours facile. EN: not always rosy."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'palette'],
};

/** TRAP, stepped: the English glasses, the agreement of a noun, the English
 *  roses, the English face, rose water, the article. */
const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Le rose et le noir, sans lunettes',
  rule: {
    title: 'En rose, en noir : des noms qui ne bougent pas',
    body: "On voit la vie en rose, pas avec des lunettes roses. En rose et en noir, la couleur est un nom : pas d'accord. Et on est fleur bleue, sans article. EN: no glasses, no agreement, no article.",
  },
  cards: [
    { promptLabel: 'rose-tinted glasses, mot à mot', promptSound: "Depuis qu'il est amoureux, il porte des lunettes roses.", fr: fr(E(1515)), ipa: ipaOf(E(1515)), tip: "Il voit la vie en rose. EN: no glasses." },
    { promptLabel: "l'accord du nom", promptSound: 'Arrête de voir tout en noire, ça va aller.', fr: fr(E(1519)), ipa: ipaOf(E(1519)), tip: "En noir : un nom, pas d'accord. EN: no agreement." },
    { promptLabel: 'all roses, mot à mot', promptSound: "La vie d'artiste, ce n'est pas que des roses.", fr: fr(E(1517)), ipa: ipaOf(E(1517)), tip: "Tout rose : la couleur, pas les fleurs. EN: the colour." },
    { promptLabel: 'long face, mot à mot', promptSound: 'Quand il a vu la pluie, il a fait une longue figure.', fr: fr(E(1523)), ipa: ipaOf(E(1523)), tip: "Faire grise mine. EN: a grey face." },
    { promptLabel: "l'eau oubliée", promptSound: "C'est un film à la rose, mais j'ai pleuré.", fr: fr(E(1525)), ipa: ipaOf(E(1525)), tip: "À l'eau de rose : de l'eau parfumée. EN: rose water." },
    { promptLabel: "l'article en trop", promptSound: "Il est une fleur bleue : il écrit encore des poèmes d'amour.", fr: fr(E(1527)), ipa: ipaOf(E(1527)), tip: "Être fleur bleue, sans article. EN: no article." },
  ],
  drill: [
    { promptSay: 'Il voit la vie en ... .', opts: ['rose', 'roses'], correct: 0 },
    { promptSay: 'Elle voit tout en ... .', opts: ['noir', 'noire'], correct: 0 },
    { promptSay: "Ce n'est pas tout ... .", opts: ['blanc', 'rose', 'vert'], correct: 1 },
    { promptSay: 'Les enfants font ... mine.', opts: ['gris', 'grise'], correct: 1 },
    { promptSay: "Un roman à ... de rose.", opts: ["l'eau", 'la fleur', 'la vie'], correct: 0 },
    { promptSay: 'Il est très ... bleue.', opts: ['une fleur', 'fleur'], correct: 1 },
    { promptSay: 'Depuis son départ, elle a des idées ... .', opts: ['grises', 'blanches', 'noires'], correct: 2 },
    { promptSay: 'Quand il est fatigué, il voit tout en ... .', opts: ['rose', 'noir'], correct: 1 },
  ],
  steps: trapSteps('En rose, en noir : des noms qui ne bougent pas'),
  audio: REC('rec-b1-29-piege-humeur'),
  say: REFRAME,
  terms: ['bloc', 'accord'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl("L'optimiste", 'Qui voit la vie en rose ?',
    ["celui qui imagine toujours le pire", "celui qui trouve tout beau"], 1,
    "Le rose : tout va bien. EN: the optimist."),
  ctl("L'accord", 'Laquelle est juste ?',
    ['Elles voient tout en noir.', 'Elles voient tout en noires.'], 0,
    "En noir : un nom, pas d'accord. EN: no agreement."),
  ctl('Le romantique', "Un film trop sentimental est...",
    ['à boulets rouges', "à l'eau de rose", 'haut en couleur'], 1,
    "À l'eau de rose. EN: soppy."),
], ['palette', 'accord']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'En rose ou en noir',
    opener: {
      line: "Un film d'amour, une amie qui pleure et toi qui soupires : ici tu dis l'humeur en rose, en noir et en gris. EN: A love film, a friend in tears and you sighing: here you say moods in pink, black and grey.",
      imageRef: 'lessons/expressions-couleurs/act08.jpg',
    },
    sections: [],
    milestone: "Tu dis l'optimiste, le pessimiste et le romantique, sans lunettes roses. EN: You can describe the optimist, the pessimist and the romantic.",
    estScreens: 44, restPoints: ['a8-construire', 'a8-choisir'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_EXEMPLES, A8_CHOISIR, A8_PIEGE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LE FEU VERT
 *
 *  Permission and approval, mostly the English colour: the green light,
 *  carte blanche, a blank cheque, the red carpet. The traps are the small
 *  words around the colour (noir sur blanc, carte blanche with no article).
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: an email from a manager in Gatineau. */
const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courriel de Nathalie',
  frSub: 'Lis, et cherche ce qui est permis',
  text: FETE_TEXT,
  glossary: [
    { word: 'la direction', en: 'management', note: 'Les chefs de l’entreprise.' },
    { word: "on s'en souvient encore", en: 'we still remember it', note: 'Le karaoké de l’an dernier a laissé des souvenirs.' },
    { word: "un petit mot d'accueil", en: 'a short welcome speech', note: 'Quelques mots pour dire bienvenue.' },
    { word: "d'ici vendredi", en: 'by Friday', note: 'Avant vendredi, au plus tard.' },
  ],
  questions: [
    { q: 'Qui a donné le feu vert, et pour quoi ?', a: 'La direction, pour la fête du 15 décembre.' },
    { q: 'Karine a carte blanche. Mais elle a une limite. Laquelle ?', a: "Le budget : deux mille dollars. Ce n'est pas un chèque en blanc." },
    { q: 'Qu’est-ce que Nathalie annonce clairement ?', a: 'Pas de karaoké cette année. Elle annonce la couleur.' },
    { q: 'Comment va-t-on accueillir les collègues de Toronto ?', a: 'Comme des vedettes : on déroule le tapis rouge, avec un souper, un mot d’accueil et des cadeaux.' },
  ],
  audio: REC('rec-b1-29-fete'),
  say: REFRAME,
  terms: ['figure', 'registre'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-vie',
  title: 'Six couleurs pour dire oui',
  frSub: 'Permettre, accueillir, écrire',
  hint: "Six cartes. Presque toutes ont la couleur de l'anglais : regarde les petits mots.",
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent', 'bloc'],
  cards: [
    card(E(1529), 'Permettre', 'courant',
      "L'image : le feu de circulation passe au vert. Le sens : on te dit oui, tu peux commencer. EN: to give the green light, the same picture."),
    card(E(1530), 'Libre de décider', 'courant',
      "L'image : une carte blanche, sans rien d'écrit. Le sens : tu décides seul. Sans article : avoir carte blanche. EN: a free hand."),
    card(E(1531), 'Sans limite', 'courant',
      "L'image : un chèque signé, sans montant. Le sens : une confiance ou une liberté totale, souvent au négatif. EN: a blank cheque."),
    card(E(1532), 'Dire clairement', 'courant',
      "L'image : au jeu de cartes, on annonce sa couleur, pique ou cœur. Le sens : dire tout de suite ce que tu veux. EN: to lay your cards on the table."),
    card(E(1533), 'Accueillir en vedette', 'courant',
      "L'image : un tapis rouge devant la porte. Le sens : recevoir quelqu'un comme une personne très importante. EN: to roll out the red carpet."),
    card(E(1534), 'Par écrit', 'courant',
      "L'image : de l'encre noire sur du papier blanc. Le sens : écrit, clair, officiel. L'anglais dit black AND white. EN: in black and white."),
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Permettre, ou dire clairement',
  groups: [
    grp('Oui, tu peux', [
      it(E(1535), 'un projet'),
      it(E(1536), 'la Ville'),
      it(E(1537), 'la fête'),
      it(E(1538), 'le menu'),
    ], chk(
      'Dans ces phrases, on...',
      ['refuse', 'hésite', 'permet'], 2,
      "Le feu vert, carte blanche : oui. EN: permission.")),
    grp('Clairement, et par écrit', [
      it(E(1541), 'pas de réunion'),
      it(E(1542), 'le poste'),
      it(E(1544), 'ton accord'),
      it(E(1545), 'le contrat'),
    ], chk(
      '« Noir sur blanc », c’est...',
      ['par écrit', 'en photo'], 0,
      "Écrit, sur le papier. EN: in writing.")),
    ctl('Le chèque', "« Je ne vais pas te signer un chèque en blanc. » La personne dit...",
      ['je te donne tout', 'je ne te donne pas une liberté totale', "je n'ai pas d'argent"], 1,
      "Au négatif, souvent : pas de confiance sans limite. EN: no blank cheque."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'equivalent'],
};

/** The four things to watch in this family, summarised. */
const A9_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a9-focus',
  layer: 'core',
  sheetId: 'sheet-vie',
  title: 'Les petits mots autour de la couleur',
  points: [
    "Le feu vert : c'est un feu de circulation, pas une lumière. EN: a traffic light.",
    'Avoir ou donner carte blanche, sans article. EN: no article.',
    'Noir sur blanc, pas en noir et blanc. EN: sur, not et.',
    "On déroule le tapis rouge ; on le roule quand la fête est finie. EN: unroll to welcome.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bloc', 'calque'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Oui, non, et par écrit',
  groups: [
    ctl('Le chantier', 'La Ville a dit oui : les travaux commencent lundi. La Ville a...',
      ['vu rouge', 'annoncé la couleur', 'donné le feu vert'], 2,
      "Elle permet : le feu vert. EN: the green light."),
    ctl('Le mariage', 'Ta sœur te laisse choisir toute la musique de son mariage. Tu as...',
      ['carte blanche', 'un chèque en blanc'], 0,
      "Tu décides seul pour la musique : carte blanche. EN: a free hand."),
    ctl("L'entrevue", 'Dès la première minute, la candidate dit : « Je veux travailler de chez moi. » Elle...',
      ['annonce la couleur', 'rit jaune'], 0,
      "Elle dit clairement ce qu'elle veut. EN: she lays her cards on the table."),
    ctl('La visite', 'Le maire visite l’école : fleurs, musique, discours. L’école...',
      ['tire à boulets rouges', 'broie du noir', 'déroule le tapis rouge'], 2,
      "Un accueil de vedette. EN: the red carpet."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'registre'],
};

/** TRAP: the English conjunction, the English light, the extra article,
 *  the wrong verb. */
const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  sheetId: 'sheet-pieges',
  title: 'Quatre erreurs de permission',
  errors: [
    { wrong: 'Je veux ton accord en noir et blanc.', right: fr(E(1544)),
      why: "Normal : in black and white. Mais en noir et blanc, c'est une vieille photo. Par écrit : noir sur blanc. EN: sur, not et." },
    { wrong: 'La directrice nous a donné la lumière verte pour le projet.', right: fr(E(1535)),
      why: "Normal : the green light. En français, c'est un feu de circulation : le feu vert. EN: feu, not lumière." },
    { wrong: "Le chef m'a donné une carte blanche pour le menu.", right: fr(E(1538)),
      why: "Normal : en anglais, a free hand prend un article. Carte blanche, non. EN: no article." },
    { wrong: "L'hôtel a roulé le tapis rouge pour la ministre.", right: fr(E(1543)),
      why: "Rouler le tapis, c'est le ranger. Pour accueillir, on le déroule. EN: dérouler, to unroll." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['calque', 'bloc'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le feu', '« Donner le feu vert », c’est...',
    ['permettre', 'refuser', 'se fâcher'], 0,
    "Oui, tu peux. EN: to allow."),
  ctl("L'article", 'Laquelle est juste ?',
    ["J'ai une carte blanche.", "J'ai carte blanche."], 1,
    "Sans article. EN: no article."),
  ctl("L'écrit", '« In black and white », en français :',
    ['en noir et blanc', 'noir sur blanc'], 1,
    "Noir sur blanc : par écrit. EN: sur."),
], ['bloc', 'equivalent']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Le feu vert',
    opener: {
      line: "Une fête à organiser, un budget et des invités de Toronto : ici tu dis oui, non et par écrit, en couleurs. EN: A party to organise, a budget and guests from Toronto: here you say yes, no and in writing, in colours.",
      imageRef: 'lessons/expressions-couleurs/act09.jpg',
    },
    sections: [],
    milestone: "Tu donnes le feu vert, tu laisses carte blanche et tu veux tout noir sur blanc. EN: You can give the green light, a free hand, and ask for it in writing.",
    estScreens: 38, restPoints: ['a9-construire', 'a9-choisir'],
  },
  sections: [A9_LECTURE, A9_CARTES, A9_CONSTRUIRE, A9_FOCUS, A9_CHOISIR, A9_ERREURS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — LA SÉRIE NOIRE
 *
 *  Bad luck is black, trouble is every colour at once. The trap is the
 *  little en of « en voir » and the faire of « en faire voir ».
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: voice messages from a family in Moncton. `hideLines`: the
 *  questions are about who suffers what. */
const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Les messages de Josée',
  frSub: 'Écoute, et dis qui a de la malchance',
  lines: [
    ln(E(1552)), ln(E(1553)), ln(E(1554)), ln(E(1555)), ln(E(1556)),
    ln(E(1557)), ln(E(1558)), ln(E(1559)), ln(E(1560)), ln(E(1561)),
  ],
  questions: [
    { q: 'Première phrase : la panne, la grippe et le dégât d’eau, c’est...', opts: ['une série noire', 'une nuit noire'], correct: 0, why: "Des malheurs l'un après l'autre. EN: a run of bad luck." },
    { q: "Pourquoi l'homme est-il sur la liste noire de la banque ?", opts: ['il a trop d’argent', 'il a payé en retard', 'il travaille au noir'], correct: 1, why: "Un retard de paiement. EN: a late payment." },
    { q: 'Le fils de deux ans...', opts: ['est très sage', 'rend la vie difficile à sa mère'], correct: 1, why: "Il lui en fait voir de toutes les couleurs. EN: he gives her a hard time." },
    { q: 'La grand-mère, pendant la guerre...', opts: ['a vécu des moments très durs', 'a peint des tableaux', 'a travaillé au marché'], correct: 0, why: "Elle en a vu de toutes les couleurs. EN: she went through a lot." },
    { q: 'Samedi, au marché Jean-Talon, il y avait...', opts: ['très peu de monde', 'beaucoup de monde'], correct: 1, why: "Noir de monde : plein de gens. EN: packed." },
  ],
  audio: REC('rec-b1-29-moncton-ecoute'),
  say: REFRAME,
  terms: ['figure', 'variante'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-vie',
  title: 'Cinq couleurs des ennuis',
  frSub: 'Noir, et toutes les autres',
  hint: 'Cinq cartes. Pour les deux dernières, regarde qui souffre.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'equivalent'],
  cards: [
    card(E(1547), 'La malchance', 'courant',
      "L'image : une série toute noire. Le sens : des malheurs, l'un après l'autre. EN: a run of bad luck, a losing streak."),
    card(E(1548), 'Rejeté', 'courant',
      "L'image : ton nom sur une liste noire. Le sens : on ne veut plus de toi. EN: to be blacklisted, the same picture."),
    card(E(1551), 'Plein de gens', 'courant',
      "L'image : une foule si dense qu'on ne voit plus que du noir. Le sens : beaucoup, beaucoup de monde. EN: packed, heaving."),
    card(E(1549), 'Passer des moments durs', 'courant',
      "L'image : tu vois toutes les couleurs du malheur. Le sens : tu vis des moments difficiles. N'oublie pas en. EN: to go through a lot."),
    card(E(1550), 'Rendre la vie dure', 'courant',
      "L'image : tu fais voir toutes les couleurs à quelqu'un. Le sens : tu lui rends la vie difficile. EN: to give someone a hard time."),
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'La malchance, ou les moments durs',
  groups: [
    grp('La malchance', [
      it(E(1552), 'panne, grippe, dégât'),
      it(E(1553), 'six défaites'),
      it(E(1554), 'la banque'),
      it(E(1555), "l'école"),
    ], chk(
      'Dans ces phrases, le noir dit...',
      ['la malchance ou le refus', 'la tristesse'], 0,
      "Une série noire, une liste noire. EN: bad luck, rejection.")),
    grp('Les moments durs', [
      it(E(1556), 'un déménagement'),
      it(E(1557), 'la guerre'),
      it(E(1558), 'un enfant de deux ans'),
      it(E(1559), 'un client'),
    ], chk(
      '« Ce client nous en a fait voir de toutes les couleurs. » Qui a souffert ?',
      ['le client', 'nous', 'personne'], 1,
      "Avec faire, c'est l'autre qui fait souffrir. EN: we did."),
    ),
    ctl('La foule', '« Les magasins sont noirs de monde. » Ils sont...',
      ['vides', 'sombres', 'pleins'], 2,
      "Plein de gens. EN: packed."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'bloc'],
};

/** NAME, as a lookup: black trouble, and one callback to act 3. */
const A10_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a10-tableau',
  layer: 'core',
  sheetId: 'sheet-vie',
  title: 'Les ennuis en couleurs',
  cols: ['Expression', 'Qui souffre ?', 'Anglais'],
  rows: [
    { cells: ['une série noire', 'moi, nous', 'a run of bad luck'], say: fr(E(1552)),
      detail: { title: 'Une série noire', body: "Des malheurs à la suite, ou des défaites. EN: bad luck after bad luck.", say: fr(E(1553)) } },
    { cells: ['être sur la liste noire', 'moi, rejeté', 'blacklisted'], say: fr(E(1554)),
      detail: { title: 'La liste noire', body: "La même image qu'en anglais. EN: the same picture.", say: fr(E(1555)) } },
    { cells: ['en voir de toutes les couleurs', 'moi', 'go through a lot'], say: fr(E(1557)),
      detail: { title: 'En voir', body: "Le sujet souffre. N'oublie pas en. EN: the subject suffers.", say: fr(E(1556)) } },
    { cells: ['en faire voir... à quelqu’un', "l'autre", 'give someone a hard time'], say: fr(E(1558)),
      detail: { title: 'En faire voir', body: "Le sujet fait souffrir quelqu'un. EN: the subject makes someone suffer.", say: fr(E(1559)) } },
    { cells: ['noir de monde', 'personne, trop de gens', 'packed'], say: fr(E(1560)),
      detail: { title: 'Noir de monde', body: "Noir s'accorde : les magasins sont noirs de monde. EN: noir agrees.", say: fr(E(1561)) } },
    { cells: ['c’est ma bête noire', 'moi, agacé', 'my pet hate'], say: fr(E(1439)),
      detail: { title: 'Rappel de l’acte 3', body: "Ce que tu détestes le plus. EN: what you hate most.", say: fr(E(1440)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent', 'accord'],
};

const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quels ennuis, quelle couleur',
  groups: [
    ctl('La semaine', 'Lundi, ton téléphone tombe. Mardi, ton vélo est volé. Mercredi, tu es malade. C’est...',
      ['une nuit noire', 'une colère noire', 'une série noire'], 2,
      "Des malheurs à la suite. EN: a run of bad luck."),
    ctl('Les ados', 'Ta voisine parle de ses deux adolescents. Ils lui...',
      ['en font voir de toutes les couleurs', 'en voient de toutes les couleurs'], 0,
      "Ils lui rendent la vie difficile : en faire voir. EN: they give her a hard time."),
    ctl('Le lendemain de Noël', 'Le lendemain de Noël, les centres commerciaux sont...',
      ['noirs de monde', 'noir de monde'], 0,
      "Noirs, avec les centres commerciaux. EN: packed, and agreeing."),
    ctl('Le site', "Ton patron t'interdit un site de jeux au bureau. Le site est...",
      ['au marché noir', 'sur la liste noire'], 1,
      "Interdit : sur la liste noire. EN: blacklisted."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'accord'],
};

/** TRAP, stepped: the English list, the missing en, voir for faire voir,
 *  the English streak, the agreement, the English people. */
const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'En voir, en faire voir',
  rule: {
    title: 'Le petit en, et le faire',
    body: "En voir de toutes les couleurs : tu souffres, et en ne part jamais. En faire voir à quelqu'un : tu fais souffrir. Noir de monde s'accorde, avec le monde, pas les gens. EN: keep en; faire makes someone else suffer.",
  },
  cards: [
    { promptLabel: 'une autre couleur', promptSound: 'Après un retard de paiement, il est sur la liste rouge de la banque.', fr: fr(E(1554)), ipa: ipaOf(E(1554)), tip: "La liste noire. EN: black." },
    { promptLabel: 'le en oublié', promptSound: 'Ma grand-mère a vu de toutes les couleurs pendant la guerre.', fr: fr(E(1557)), ipa: ipaOf(E(1557)), tip: "En voir : garde en. EN: keep en." },
    { promptLabel: 'voir au lieu de faire voir', promptSound: 'Mon fils de deux ans me voit de toutes les couleurs.', fr: fr(E(1558)), ipa: ipaOf(E(1558)), tip: "Il m'en fait voir. EN: faire voir." },
    { promptLabel: 'losing streak, mot à mot', promptSound: "L'équipe a connu une ligne noire de six défaites.", fr: fr(E(1553)), ipa: ipaOf(E(1553)), tip: "Une série noire. EN: série." },
    { promptLabel: "l'accord oublié", promptSound: 'À Noël, les magasins sont noir de monde.', fr: fr(E(1561)), ipa: ipaOf(E(1561)), tip: "Noirs : avec les magasins. EN: agreement." },
    { promptLabel: 'people, mot à mot', promptSound: 'Samedi, le marché Jean-Talon était noir de gens.', fr: fr(E(1560)), ipa: ipaOf(E(1560)), tip: "Noir de monde. EN: monde, not gens." },
  ],
  drill: [
    { promptSay: 'Il est sur la liste ... de la banque.', opts: ['noire', 'rouge'], correct: 0 },
    { promptSay: 'On ... a vu de toutes les couleurs.', opts: ['les', 'en'], correct: 1 },
    { promptSay: "Mes enfants m'en ... voir de toutes les couleurs.", opts: ['font', 'voient'], correct: 0 },
    { promptSay: "L'équipe a connu une ... noire.", opts: ['ligne', 'série', 'nuit'], correct: 1 },
    { promptSay: 'Les rues étaient ... de monde.', opts: ['noires', 'noir'], correct: 0 },
    { promptSay: 'Le marché était noir de ... .', opts: ['gens', 'monde'], correct: 1 },
    { promptSay: 'Quelle série ... : panne, grippe, dégât d’eau.', opts: ['blanche', 'rose', 'noire'], correct: 2 },
    { promptSay: 'Ce client nous en a fait voir de toutes les ... .', opts: ['couleurs', 'nuits'], correct: 0 },
  ],
  steps: trapSteps('Le petit en, et le faire'),
  audio: REC('rec-b1-29-piege-ennuis'),
  say: REFRAME,
  terms: ['bloc', 'accord'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Qui souffre', '« Mes voisins m’en font voir de toutes les couleurs. » Qui souffre ?',
    ['moi', 'mes voisins'], 0,
    "Ils me font souffrir. EN: I do."),
  ctl('La malchance', 'Des malheurs l’un après l’autre, c’est...',
    ['une liste noire', 'une série noire', 'une bête noire'], 1,
    "Une série noire. EN: a run of bad luck."),
  ctl('Le en', 'Laquelle est juste ?',
    ["Pendant la guerre, elle en a vu de toutes les couleurs.", 'Pendant la guerre, elle a vu de toutes les couleurs.'], 0,
    "Le en fait partie du bloc. EN: keep en."),
], ['bloc', 'figure']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'La série noire',
    opener: {
      line: "Une panne, une grippe, un dégât d'eau et un enfant de deux ans : ici tu racontes les ennuis en couleurs. EN: A breakdown, the flu, a leak and a two-year-old: here you tell your troubles in colours.",
      imageRef: 'lessons/expressions-couleurs/act10.jpg',
    },
    sections: [],
    milestone: "Tu racontes la malchance et tu dis qui fait souffrir qui, sans perdre le en. EN: You can tell bad luck and say who makes whom suffer.",
    estScreens: 44, restPoints: ['a10-construire', 'a10-choisir'],
  },
  sections: [A10_ECOUTE, A10_CARTES, A10_CONSTRUIRE, A10_TABLEAU, A10_CHOISIR, A10_PIEGE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — DÉBUTANT OU DOUÉ
 *
 *  A French rookie is blue where an English one is green; gifted cooks,
 *  gardeners and minds get their colours too. One Québec variant.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a first day in a kitchen in Old Québec. */
const A11_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a11-histoire',
  layer: 'core',
  title: 'Premier jour en cuisine',
  frSub: 'Un restaurant du Vieux-Québec',
  setting: "Un restaurant du Vieux-Québec, avant le service du midi. Tu commences aujourd'hui en cuisine. Le sous-chef, Jonathan, te présente l'équipe.",
  bubbles: [
    { from: 'narrator', fr: 'Des casseroles, des herbes sur le rebord de la fenêtre, et six cuisiniers qui te regardent.', en: 'Pans, herbs on the windowsill, and six cooks looking at you.' },
    { from: 'coach', fr: "Ici, tout le monde commence comme toi. Tu es encore un peu vert, c'est normal.", en: 'Here everyone starts like you. You are still a bit green, that is normal.', warn: 'encore vert : pas encore d’expérience' },
    { from: 'coach', fr: 'La cheffe, Martine, est un vrai cordon bleu. Et un personnage haut en couleur.', en: 'The chef, Martine, is a superb cook. And a larger-than-life character.', warn: 'cordon bleu : elle cuisine très bien' },
    { from: 'user', fr: "Et les herbes sur la fenêtre, c'est elle aussi.", en: 'And the herbs on the window, that is her too.' },
    { from: 'coach', fr: 'Oui, elle a le pouce vert. Son basilic pousse même en hiver.', en: 'Yes, she has a green thumb. Her basil grows even in winter.', warn: 'le pouce vert : au Québec ; en France, la main verte' },
    { from: 'coach', fr: 'Pour le reste, fais travailler ta matière grise, et pose des questions.', en: 'For the rest, put your grey matter to work, and ask questions.' },
  ],
  closing: { fr: 'Encore vert, un cordon bleu, haut en couleur, le pouce vert, la matière grise : une cuisine, cinq couleurs.', en: 'Still green, a superb cook, larger than life, a green thumb, grey matter: one kitchen, five colours.' },
  audio: REC('rec-b1-29-cuisine'),
  say: REFRAME,
  terms: ['variante', 'figure'],
};

const A11_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a11-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-vie',
  title: 'Sept couleurs du talent',
  frSub: 'Du débutant au cordon bleu',
  hint: 'Sept cartes. Deux pour le débutant, cinq pour le talent. Regarde le pays.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['variante', 'equivalent'],
  cards: [
    card(E(1563), 'Un débutant', 'familier · France',
      "L'image : un bleu. Le sens : quelqu'un qui commence, au travail, à l'armée, au sport. L'anglais dit green. EN: a rookie."),
    card(E(1564), 'Sans expérience', 'courant',
      "L'image : un fruit encore vert, pas mûr. Le sens : pas encore prêt. EN: still green, the same picture."),
    card(E(1565), 'Un très bon cuisinier', 'courant',
      "L'image : le ruban bleu d'une médaille. Le sens : une personne qui cuisine très bien. Au menu, le cordon-bleu est un plat. EN: a superb cook."),
    card(E(1566), 'Doué pour les plantes', 'courant · France',
      "L'image : une main verte. Le sens : tes plantes poussent bien. EN: green fingers."),
    card(E(1567), 'Doué pour les plantes', 'courant · Québec',
      "L'image : un pouce vert, comme en anglais d'Amérique. Le sens : le même. EN: a green thumb."),
    card(E(1568), "L'intelligence", 'courant',
      "L'image : la matière grise du cerveau. Le sens : l'intelligence, la réflexion. EN: grey matter, the same picture."),
    card(E(1569), 'Très original', 'courant',
      "L'image : une personne pleine de couleurs. Le sens : vivante, originale, qu'on remarque. EN: colourful, larger than life."),
  ],
};

const A11_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le débutant, ou le talent',
  groups: [
    grp('Le débutant', [
      it(E(1570), 'depuis lundi'),
      it(E(1571), 'le café, les photocopies'),
      it(E(1572), 'un poste'),
      it(E(1573), 'elle apprend vite'),
    ], chk(
      'Un bleu, et quelqu’un d’encore vert...',
      ['manquent d’expérience', 'sont tristes', 'sont malades'], 0,
      "Bleu en France, vert partout : le débutant. EN: both are beginners.")),
    grp('Le talent', [
      it(E(1574), 'la cuisine'),
      it(E(1575), 'un balcon'),
      it(E(1576), 'des tomates'),
      it(E(1577), 'un projet'),
    ], chk(
      'Ces quatre phrases parlent...',
      ["d'un défaut", "d'un talent ou de l'intelligence"], 1,
      "Cuisiner, faire pousser, réfléchir. EN: talents."),
    ),
    ctl('Le pays', '« Avoir le pouce vert » se dit surtout...',
      ['en France', 'au Québec'], 1,
      "Au Québec ; en France, la main verte. EN: Québec."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['variante', 'figure'],
};

/** The agreement and the variants, one more time, on this family. */
const A11_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a11-exemples',
  layer: 'core',
  sheetId: 'sheet-accord',
  title: 'Accords et adresses',
  examples: [
    ex(E(1573), 'verte : avec elle.'),
    ex(E(1580), 'hauts : avec les personnages. Couleur, lui, ne bouge pas.'),
    ex(E(1571), 'les bleus : un nom, au pluriel comme les autres.'),
    ex(E(1575), 'la main verte : en France.'),
    ex(E(1576), 'le pouce vert : au Québec.'),
    ex(E(1582), 'le faux ami du menu.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord', 'variante'],
};

const A11_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Débutant, doué, ou les deux',
  groups: [
    ctl('Le stagiaire', 'À Lyon, un nouveau stagiaire ne sait pas encore où est l’imprimante. Entre collègues, on dit :',
      ["C'est un bleu.", "C'est un vert."], 0,
      "En France, le débutant est un bleu. EN: a rookie."),
    ctl('La tante', 'Ta tante fait le meilleur pâté chinois de Sherbrooke. C’est...',
      ['une fleur bleue', 'un cordon bleu', 'un billet vert'], 1,
      "Elle cuisine très bien. EN: a superb cook."),
    ctl('Le jardin', 'À Montréal, ton voisin a le plus beau jardin de la rue. Il...',
      ['a le pouce vert', 'est encore vert', 'voit la vie en rose'], 0,
      "Doué pour les plantes, au Québec. EN: a green thumb."),
    ctl("L'oncle", 'Ton oncle porte des chemises jaunes et raconte des histoires incroyables. C’est un personnage...',
      ['haut en couleur', 'en couleur haute'], 0,
      "Original, vivant : haut en couleur. EN: colourful."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'variante'],
};

/** TRAP: the English green, the English fingers, the agreement of haut,
 *  the English material. */
const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a11-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  sheetId: 'sheet-pieges',
  title: 'Quatre erreurs de débutant',
  errors: [
    { wrong: "C'est un vert : il a commencé lundi.", right: fr(E(1570)),
      why: "Normal : a greenhorn. Mais le débutant français est un bleu. Encore vert existe, comme adjectif. EN: a noun: un bleu." },
    { wrong: 'Ma voisine a les doigts verts : son balcon est une jungle.', right: fr(E(1575)),
      why: "Normal : green fingers. En France, la main verte ; au Québec, le pouce vert. EN: the hand or the thumb." },
    { wrong: 'Les deux cuisinières sont des personnages haut en couleur.', right: fr(E(1580)),
      why: "On apprend le bloc au singulier. Mais haut décrit les personnages : hauts. EN: haut agrees." },
    { wrong: 'Fais travailler ton matériel gris.', right: fr(E(1578)),
      why: "Normal : grey matter. En français, c'est la matière grise, au féminin. EN: matière, feminine." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['calque', 'accord'],
};

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le débutant', '« A rookie », en français familier :',
    ['un vert', 'un bleu', 'un gris'], 1,
    "Un bleu. L'anglais dit green. EN: another colour."),
  ctl('Le cordon bleu', '« Ma mère est un cordon bleu. » Elle...',
    ['cuisine très bien', 'porte un ruban bleu'], 0,
    "Une personne qui cuisine très bien. EN: a superb cook."),
  ctl("L'accord", 'Laquelle est juste ?',
    ['des personnages hauts en couleur', 'des personnages haut en couleurs'], 0,
    "Haut s'accorde, couleur non. EN: hauts, couleur."),
], ['variante', 'accord']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Débutant ou doué',
    opener: {
      line: "Un premier jour en cuisine, une cheffe géniale et un basilic en hiver : ici tu dis le débutant et le talent en couleurs. EN: A first day in a kitchen, a brilliant chef and basil in winter: here you say beginner and talent in colours.",
      imageRef: 'lessons/expressions-couleurs/act11.jpg',
    },
    sections: [],
    milestone: "Tu dis un bleu et un cordon bleu, et tu sais où l'on a le pouce vert. EN: You can say rookie and superb cook, and you know where people have a green thumb.",
    estScreens: 44, restPoints: ['a11-construire', 'a11-choisir'],
  },
  sections: [A11_HISTOIRE, A11_CARTES, A11_CONSTRUIRE, A11_EXEMPLES, A11_CHOISIR, A11_ERREURS, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — RACONTE TA SEMAINE
 * ══════════════════════════════════════════════════════════════════════════ */

/** The model the learner imitates: six idioms, one per moment of the week. */
const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Hugo',
  frSub: 'La forme que tu vas écrire',
  text: ENTREVUE_TEXT,
  glossary: [
    { word: 'la veille', en: 'the day before', note: 'Le dimanche, avant l’entrevue du lundi.' },
    { word: 'pouding chômeur', en: 'a Québec cake baked in maple or brown-sugar syrup', note: 'Un dessert québécois simple et très sucré.' },
    { word: 'convaincue', en: 'convinced', note: 'Elle est sûre, maintenant.' },
    { word: 'goûter', en: 'to taste', note: 'Manger un peu pour connaître le goût.' },
  ],
  questions: [
    { q: "Combien d'expressions de couleur Hugo utilise-t-il ?", a: 'Six : une peur bleue, une nuit blanche, rouge comme une tomate, rire jaune, carte blanche, le feu vert.' },
    { q: 'Où est le décor, où sont les actions ?', a: "Le décor à l'imparfait : j'avais une entrevue, j'en avais une peur bleue. Les actions au passé composé : j'ai passé une nuit blanche, je suis devenu rouge, elle m'a donné le feu vert." },
    { q: 'Pourquoi le message ne sonne-t-il pas comme une liste ?', a: "Chaque expression arrive à un moment différent de la semaine, et elle y a une raison." },
    { q: 'Quel est le registre ?', a: 'Courant et amical : Hugo écrit à un ami. Rouge comme une tomate est familier, et c’est bien pour un ami.' },
  ],
  audio: REC('rec-b1-29-hugo'),
  say: REFRAME,
  terms: ['dosage', 'registre'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  sheetId: 'sheet-pieges',
  title: 'Cinq étapes pour ton anecdote',
  steps: [
    "1. Choisis un moment : une semaine, une journée, une soirée qui ne s'est pas passée comme prévu. EN: pick one moment.",
    "2. Pose le décor à l'imparfait : le lieu, le temps, ton humeur. EN: set the scene.",
    '3. Raconte les actions au passé composé, dans l’ordre. EN: tell the events in order.',
    '4. Pars du sens : pour chaque moment, cherche la couleur française, pas celle de l’anglais. Cinq ou six, pas plus. EN: start from the meaning; five or six idioms.',
    '5. Relis chaque bloc : aucun mot changé, et la couleur accordée quand elle doit l’être. EN: check each block and its agreement.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['dosage', 'palette', 'accord'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  title: 'Une couleur par moment',
  cases: [
    uc('Avant : la peur du grand jour', E(1587)),
    uc('La veille : pas de sommeil', E(1583)),
    uc('Le rebondissement : ta gêne', E(1584)),
    uc('La fin : la bonne nouvelle', E(1586)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['dosage', 'figure'],
};

/** Say it out loud: six turns with Malik on the phone. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'Au téléphone avec Malik',
  setting: "Vendredi soir. Ton ami Malik t'appelle pour savoir comment s'est passée ton entrevue de lundi. Tu es Hugo.",
  turns: [
    {
      ai: "Salut Hugo. Alors, cette entrevue, ça s'est passé comment ?",
      en: 'Hi Hugo. So, how did the interview go?',
      user: fr(E(1587)),
      userEn: 'I was scared stiff of it. (avoir une peur bleue, imparfait.)',
      alts: [
        { fr: "Pas facile. La veille, j'ai passé une nuit blanche.", en: 'Not easy. The night before, I did not sleep a wink. (passer une nuit blanche.)' },
        { fr: 'Je broyais du noir depuis dimanche.', en: 'I had been feeling down since Sunday. (broyer du noir, imparfait.)' },
      ],
    },
    {
      ai: 'Et devant la patronne ?',
      en: 'And in front of the boss?',
      user: fr(E(1584)),
      userEn: 'In front of the boss, I went as red as a beetroot. (rouge comme une tomate, familier.)',
      alts: [
        { fr: "J'ai eu un blanc : j'ai oublié le nom de mon ancien restaurant.", en: 'I went blank: I forgot the name of my old restaurant. (avoir un blanc.)' },
        { fr: "J'avais le rouge aux joues pendant dix minutes.", en: 'I was flushed for ten minutes. (avoir le rouge aux joues.)' },
      ],
    },
    {
      ai: 'Elle a été gentille avec toi ?',
      en: 'Was she nice to you?',
      user: fr(E(1589)),
      userEn: 'She made a joke, and I gave a forced laugh. (rire jaune: forced, not afraid.)',
      alts: [
        { fr: 'Oui, mais elle a annoncé la couleur : beaucoup de travail le samedi.', en: 'Yes, but she laid her cards on the table: a lot of work on Saturdays. (annoncer la couleur.)' },
        { fr: 'Oui, elle ne voit pas tout en noir, heureusement.', en: 'Yes, luckily she does not look on the dark side. (voir tout en noir.)' },
      ],
    },
    {
      ai: "Et l'essai en cuisine ?",
      en: 'And the cooking test?',
      user: fr(E(1585)),
      userEn: 'She gave me a free hand to cook a dish. (avoir carte blanche, no article.)',
      alts: [
        { fr: "J'ai fait travailler ma matière grise : un pouding chômeur à l'érable.", en: 'I put my grey matter to work: a maple pouding chômeur. (la matière grise.)' },
        { fr: 'Pas si facile : je suis encore un peu vert.', en: 'Not that easy: I am still a bit green. (être encore vert.)' },
      ],
    },
    {
      ai: 'Et alors, tu as le poste ?',
      en: 'So, did you get the job?',
      user: fr(E(1586)),
      userEn: 'On Thursday, she gave me the green light. (donner le feu vert.)',
      alts: [
        { fr: "Oui, j'ai le feu vert : je commence lundi.", en: 'Yes, I have the green light: I start on Monday. (avoir le feu vert.)' },
        { fr: "Oui, et c'est écrit noir sur blanc dans mon contrat.", en: 'Yes, and it is in black and white in my contract. (noir sur blanc.)' },
      ],
    },
    {
      ai: 'Bravo. Ta sœur doit être contente pour toi.',
      en: 'Well done. Your sister must be happy for you.',
      user: 'Contente ? Elle est verte de jalousie.',
      userEn: 'Happy? She is green with envy. (vert de jalousie, agreeing with elle.)',
      alts: [
        { fr: 'Oui, elle voit la vie en rose pour moi.', en: 'Yes, she sees everything through rose-tinted glasses for me. (voir la vie en rose.)' },
        { fr: 'Oui, et elle dit que je suis un vrai cordon bleu.', en: 'Yes, and she says I am a superb cook. (un cordon bleu.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['dosage', 'registre'],
};

/** THE GRADED TASK. The unit outcome is tested here. Graded on FIT, not on
 *  count (shapes doc §2.2). */
const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Raconte ta semaine',
  frSub: 'Mission écrite',
  brief: "Une semaine ou une journée ne s'est pas passée comme prévu : une entrevue, un examen, un voyage, une fête de famille. Écris un message à un ami pour la raconter. Utilise des expressions de couleur de la leçon, chacune au bon moment de l'histoire.",
  briefEn: 'A week or a day did not go as planned: an interview, an exam, a trip, a family party. Write a message to a friend telling the story. Use colour idioms from the lesson, each at the right moment of the story.',
  produce: "Écris une anecdote de 80 à 120 mots, au passé, avec au moins cinq expressions de couleur différentes de cette leçon. Chacune doit dire ce que tu veux dire, là où elle est.",
  responseSpec: { kind: 'text', minWords: 80, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'sens',
        label: 'Chaque expression dit ce que tu veux dire',
        maxPoints: 4,
        descriptors: [
          "4 : Au moins cinq expressions, et chacune a le bon sens dans sa situation. On sourit, on ne s'arrête pas.",
          "3 : Une expression a un sens un peu à côté, et tout le reste est juste.",
          "2 : Deux expressions ont le mauvais sens, ou elles arrivent comme une liste, sans raison.",
          "1 : Les couleurs viennent de l'anglais ou arrivent au hasard : on ne comprend pas ce qui s'est passé.",
        ],
      },
      {
        key: 'bloc',
        label: 'La bonne couleur, le bloc complet, le bon accord',
        maxPoints: 3,
        descriptors: [
          "3 : Chaque bloc est complet, avec la couleur française, et la couleur est accordée quand elle doit l'être.",
          "2 : Une ou deux erreurs : un mot changé, un accord oublié, un en qui manque.",
          "1 : Plusieurs blocs sont cassés ou pris à l'anglais : je me sens bleu, un vert pour un débutant.",
        ],
      },
      {
        key: 'recit',
        label: 'Une anecdote qui se suit, dans le bon registre',
        maxPoints: 3,
        descriptors: [
          "3 : Un décor, des actions dans l'ordre, une fin. Le registre va avec un ami, et il ne change pas au milieu.",
          "2 : L'histoire se suit, mais il manque le décor ou la fin, ou une expression ne va pas avec la personne qui lit.",
          "1 : On ne suit pas l'histoire : des phrases sans ordre, ou une liste d'expressions.",
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Un vrai message à un ami, entre 80 et 120 mots, avec au moins cinq expressions différentes.',
          '1 : Il manque un élément : moins de 80 mots, moins de cinq expressions, ou pas de destinataire.',
        ],
      },
    ],
  },
  scaffold: [
    'Salut ..., tu ne devineras jamais ma semaine.',
    'Lundi, je devais...',
    "J'en avais...",
    'Il faisait..., et...',
    'Heureusement,...',
    'Bien sûr,...',
    'À la fin,...',
    'Bises,',
  ],
  modelAnswer: "Salut Inès, ma semaine a commencé comme une vraie série noire. Lundi, mon auto est tombée en panne sur l'autoroute, et j'ai attendu la dépanneuse deux heures dans la neige. Mardi, j'avais une présentation devant toute l'équipe. J'en avais une peur bleue, et au milieu, j'ai eu un blanc. Je suis devenue rouge comme une tomate. Heureusement, ma directrice ne voit pas tout en noir : elle a souri, elle m'a posé deux questions, et jeudi, elle m'a donné le feu vert pour mon projet. On a fêté ça au restaurant vendredi soir. Bises, Camille",
  modelAnswerEn: "Hi Inès, my week started like a real run of bad luck. On Monday my car broke down on the motorway, and I waited two hours in the snow for the tow truck. On Tuesday I had a presentation in front of the whole team. I was scared stiff of it, and halfway through, my mind went blank. I went as red as a beetroot. Luckily my director does not look on the dark side: she smiled, asked me two questions, and on Thursday she gave me the green light for my project. We celebrated at a restaurant on Friday night. Love, Camille",
  watchFor: [
    {
      pattern: 'An English colour carried into French (je me sens bleu for sad, une peur jaune for fear, un vert for a rookie).',
      criterion: 'bloc',
      feedback: "Cette couleur vient de l'anglais. Pars du sens : triste, c'est broyer du noir ; la peur est bleue ; un débutant est un bleu.",
      ref: 'a1-reperer',
    },
    {
      pattern: 'A fear idiom mis-built (donner une peur bleue, blanc comme un drap) or the colour not agreeing with a woman or a plural (elle est devenue blanc).',
      criterion: 'bloc',
      feedback: "On fait une peur bleue ; blanc comme un linge ; et la couleur s'accorde : elle est devenue blanche.",
      ref: 'a2-piege',
    },
    {
      pattern: "Agreement put where it does not belong (elles ont vu rouges, dans les rouges) or left out where it does (ils étaient rouge de colère).",
      criterion: 'bloc',
      feedback: "Après voir et pour un nom, pas d'accord : elles ont vu rouge. Sinon, la couleur s'accorde : ils étaient rouges.",
      ref: 'a3-erreurs',
    },
    {
      pattern: 'rire jaune used for fear, or rouge comme une betterave, sourire jaune, du rouge sur ses joues.',
      criterion: 'sens',
      feedback: "Rire jaune, c'est rire sans en avoir envie, pas avoir peur. Et c'est rouge comme une tomate.",
      ref: 'a4-piege',
    },
    {
      pattern: 'An English colour for the body (un noir for a bruise, un peu bleu for tipsy, jaune de jalousie).',
      criterion: 'bloc',
      feedback: "La marque est un bleu, un peu ivre, c'est gris, et la jalousie est verte.",
      ref: 'a5-erreurs',
    },
    {
      pattern: "A money idiom mis-built (travailler dans le noir, laver de l'argent, le noir marché).",
      criterion: 'bloc',
      feedback: "Au noir, blanchir de l'argent, le marché noir : la couleur française et son ordre.",
      ref: 'a6-piege',
    },
    {
      pattern: "The English blue or the writer's blank page (hors du bleu, j'ai eu une page blanche devant le jury), or une nuit blanc.",
      criterion: 'bloc',
      feedback: "De but en blanc ; à l'oral, j'ai eu un blanc ; et une nuit blanche.",
      ref: 'a7-erreurs',
    },
    {
      pattern: "A mood idiom calqued or agreed (des lunettes roses, voir tout en noire, il est une fleur bleue).",
      criterion: 'bloc',
      feedback: "Voir la vie en rose, voir tout en noir sans accord, être fleur bleue sans article.",
      ref: 'a8-piege',
    },
    {
      pattern: "The small words around a permission idiom (en noir et blanc, la lumière verte, une carte blanche).",
      criterion: 'bloc',
      feedback: "Noir sur blanc, le feu vert, avoir carte blanche sans article.",
      ref: 'a9-erreurs',
    },
    {
      pattern: "The en of en voir de toutes les couleurs dropped, or voir used for en faire voir.",
      criterion: 'bloc',
      feedback: "J'en ai vu de toutes les couleurs ; il m'en a fait voir de toutes les couleurs.",
      ref: 'a10-piege',
    },
    {
      pattern: 'Ten or more idioms stacked, or idioms that do not match what happened, so the message reads like a list.',
      criterion: 'sens',
      feedback: "Cinq ou six, pas dix. Garde celles qui racontent un vrai moment de ta semaine.",
      ref: 'a12-plan',
    },
    {
      pattern: "The setting told in the passé composé or the events in the imparfait (j'ai eu une peur bleue toute la semaine pendant qu'elle me donnait le feu vert).",
      criterion: 'recit',
      feedback: "Le décor à l'imparfait (j'en avais une peur bleue), les actions au passé composé (elle m'a donné le feu vert).",
      ref: 'a12-lecture',
    },
  ],
  graderNotes: [
    'Grade on FIT, not count (shapes doc §2.2): an idiom used where its meaning does not apply scores under « sens » even if it is well built. Five fitting idioms beat eight forced ones.',
    'Count as « different » any two idioms from this lesson with different blocks. A reused idiom counts once. Idioms from lesson 27 in B1 (body) and lesson 28 in B1 (animals and food) are accepted if correct but do not count toward the five.',
    'Word count INCLUDES the greeting and the sign-off: they are part of the message. 10% tolerance (72 to 132) before criterion « tache » loses its point.',
    'Agreement: judge the colour INSIDE the idiom only (blanche comme un linge, verts de peur, elles ont vu rouge). Adjective agreement elsewhere belongs to lesson 10 in A2 and counts under « bloc » only once per text.',
    'Accept both Québec and France variants (le pouce vert, la main verte; un examen de pratique, un examen blanc; auto, voiture; fin de semaine, week-end). Do not mark « un bleu » for a rookie as wrong in a Québec setting; suggest « une recrue » at most.',
    'Accept « être en rouge » for an overdrawn account as a heard variant of « être dans le rouge ».',
    'Tenses (lesson 3 in B1) are judged under « recit » only, and only when they break the story; do not deduct twice for the same verb.',
    'Do not score the subjunctive (lessons 14 to 16 in B1) if a learner uses one: accept a correct one, ignore an incorrect one under this lesson’s criteria.',
    'Treat « avoir des idées noires » with care: if a text suggests real distress, the feedback says so kindly and does not joke.',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['dosage', 'accord'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Dis tes couleurs à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bloc', 'registre'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-methode',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la palette', v: 'pars du sens, puis cherche la couleur française', say: fr(E(1404)),
      detail: { title: 'La palette', body: "Triste en noir, la peur en bleu. EN: start from the meaning.", say: fr(E(1405)) } },
    { k: "l'anglais", v: 'même couleur, autre couleur, ou aucune', say: fr(E(1406)),
      detail: { title: "L'équivalent", body: "Voir rouge, un bleu, une nuit blanche. EN: same, other or none.", say: fr(E(1570)) } },
    { k: "l'accord", v: 'la couleur-adjectif s’accorde', say: fr(E(1437)),
      detail: { title: 'Accordée', body: "Blanche comme un linge, rouges de colère. EN: it agrees.", say: fr(E(1421)) } },
    { k: 'pas d’accord', v: 'après voir, et pour un nom', say: fr(E(1442)),
      detail: { title: 'Fixée', body: "Elles ont vu rouge ; dans le rouge ; en rose. EN: no agreement.", say: fr(E(1520)) } },
    { k: 'le registre', v: 'familier entre amis, courant partout', say: fr(E(1450)),
      detail: { title: 'À qui', body: "Au bureau : le feu vert, carte blanche. EN: courant for work.", say: fr(E(1535)) } },
    { k: 'les faux amis', v: 'rire jaune, mariage blanc, un bleu', say: fr(E(1457)),
      detail: { title: 'Attention', body: "Un rire forcé, un faux mariage, un débutant. EN: not what English suggests.", say: fr(E(1501)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['palette', 'accord', 'fauxami'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu connais une soixantaine d'expressions de couleur : pour la peur, la colère, la gêne, l'envie, l'argent, le vide, l'humeur, la permission, la malchance et les débuts. Pour chacune, tu sais l'image, le sens, l'anglais et le registre, et tu sais quand la couleur s'accorde. Le piège qui reste est le plus discret : la couleur anglaise qui revient quand tu parles vite, je me sens bleu, un vert au travail. Avant l'examen, choisis dix expressions et écris pour chacune une phrase sur ta vie. EN: Pick ten idioms and write one sentence about your own life for each.",
  stats: [
    { k: 'Les expressions', v: '58, en onze familles' },
    { k: "L'accord", v: 'oui, sauf après voir et pour un nom' },
    { k: 'Les faux amis', v: 'rire jaune, un mariage blanc' },
    { k: 'Le Québec', v: 'le pouce vert' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from act 2 to act 11, plus
 *  a closing round that covers act 1's method and act 12's anecdote. Each
 *  round's target is a distinct errorTrigger. `fold()` strips accents,
 *  commas and apostrophes but does NOT decompose « œ », so every typed
 *  answer carrying œ also accepts « oe ». Every typed answer differs from
 *  its prompt by a WORD or an agreement LETTER that survives folding. */

type QQ = QuizQuestion;
const OE = (s: string) => [...new Set([s, s.replace(/œ/g, 'oe').replace(/Œ/g, 'Oe')])];
const TI_Q = "Complète l'expression et écris toute la phrase. EN: Complete the idiom and write the whole sentence.";
const tI = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q: TI_Q, prompt, answer, accept: OE(answer), why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: "Une partie de l'expression ne va pas. Écris la phrase correcte. EN: One part of the idiom is wrong; write the sentence correctly.", prompt, answer, accept: OE(answer), why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a12-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-peur', label: 'La peur et le froid', targets: ['peur-mal-dite'],
      questions: [
        mc('Le chien du voisin m’a ... une peur bleue.', ['donné', 'mis', 'fait'], 2, "On fait une peur bleue à quelqu'un. EN: faire.", 'a2-cartes'),
        mc('« Blanc comme un linge », c’est...', ['très propre', 'très pâle'], 1, "Pâle de peur ou de choc. EN: white as a sheet.", 'a2-cartes'),
        mc('Après une heure dans la neige, tes lèvres sont...', ['bleues de froid', 'vertes de peur', 'blanches comme un linge'], 0, "Le froid : bleues de froid. EN: blue with cold.", 'a2-choisir'),
        tI('Pendant la tempête, les enfants étaient ___ de peur.', fr(E(1423)), "Verts : avec les enfants, au pluriel. EN: plural agreement.", 'a2-exemples'),
        tI('À vingt heures, il faisait déjà nuit ___.', fr(E(1426)), "Nuit noire : le noir complet. EN: pitch dark.", 'a2-cartes'),
        eS("Quand elle a vu l'ours, elle est devenue blanc comme un linge.", fr(E(1421)), "Elle : blanche. EN: it agrees.", 'a2-piege'),
        eS("Il est sorti de l'avion blanc comme un drap.", fr(E(1422)), "Comme un linge, pas comme un drap. EN: linge.", 'a2-piege'),
        lC('Écoute. Que s’est-il passé ?', fr(E(1419)), ['Le chien était triste.', 'Le chien m’a fait très peur.'], 1, "Une peur bleue : très peur. EN: it scared me stiff.", 'a2-histoire'),
      ],
    },
    {
      id: 'r2-colere', label: 'La colère et l’accord', targets: ['accord-oublie'],
      questions: [
        mc('« Elles ont vu ... »', ['rouge', 'rouges'], 0, "Après voir, pas d'accord. EN: no agreement.", 'a3-tableau'),
        mc('« Vert de rage », c’est...', ['jaloux', 'malade', 'furieux'], 2, "La rage : la colère. EN: livid.", 'a3-cartes'),
        mc('« Les bouchons, c’est ma bête noire. » Les bouchons sont...', ['un animal du Québec', 'ce que je déteste le plus'], 1, "Ma bête noire : ce que je déteste. EN: my pet hate.", 'a3-cartes'),
        tI('Les joueurs sont sortis ___ de colère.', fr(E(1437)), "Rouges : avec les joueurs. EN: plural.", 'a3-tableau'),
        tI('Le patron est entré dans une colère ___.', fr(E(1434)), "Noire : avec colère, féminin. EN: feminine.", 'a3-erreurs'),
        eS('Les voisines ont vu rouges : leur place de parking était prise.', fr(E(1442)), "Après voir : rouge. EN: no agreement.", 'a3-erreurs'),
        eS('Les journaux tirent à boulets verts sur le ministre.', fr(E(1441)), "À boulets rouges. EN: red.", 'a3-cartes'),
        lC('Écoute. La personne est...', fr(E(1444)), ['furieuse, mais silencieuse', 'jalouse', 'malade'], 0, "Vert de rage, sans rien dire. EN: livid but silent.", 'a3-ecoute'),
      ],
    },
    {
      id: 'r3-gene', label: 'La gêne', targets: ['jaune-peur'],
      questions: [
        mc('« Rire jaune », c’est...', ['rire sans en avoir envie', 'rire de peur'], 0, "Un rire forcé. La peur est bleue. EN: a forced laugh.", 'a4-cartes'),
        mc('« As red as a beetroot », en français familier :', ['rouge comme une betterave', 'rouge de colère', 'rouge comme une tomate'], 2, "Une tomate. EN: a tomato.", 'a4-piege'),
        mc('Tu reçois un compliment devant tout le monde. Tu...', ['vois rouge', 'as le rouge aux joues'], 1, "Tu rougis. Voir rouge, c'est la colère. EN: you blush.", 'a4-choisir'),
        tI('Rouge de ___, il a quitté la salle.', fr(E(1451)), "Rouge de honte. EN: shame.", 'a4-cartes'),
        tI('Tout le monde a ri, sauf Marc, qui a ri ___.', fr(E(1454)), "Ri jaune : un rire forcé. EN: yellow.", 'a4-piege'),
        tI('Après le compliment, elle avait le rouge ___ joues.', fr(E(1455)), "Aux joues, sans possessif. EN: aux.", 'a4-piege'),
        eS("Il a souri jaune quand on s'est moqué de sa coupe de cheveux.", fr(E(1453)), "On rit jaune. EN: rire.", 'a4-piege'),
        lC('Écoute. Comment était la personne ?', fr(E(1452)), ['très gênée', 'très fâchée', 'très fatiguée'], 0, "Rouge de honte. EN: embarrassed.", 'a4-lecture'),
      ],
    },
    {
      id: 'r4-sante', label: "L'envie et la santé", targets: ['sante-calque'],
      questions: [
        mc('« J’ai un bleu au genou. »', ['J’ai un pantalon bleu.', 'J’ai une marque sur la peau.'], 1, "Un bleu : la marque d'un coup. EN: a bruise.", 'a5-cartes'),
        mc('Après deux verres, il est un peu...', ['bleu', 'vert', 'gris'], 2, "Gris : un peu ivre. EN: tipsy.", 'a5-erreurs'),
        mc('Sur le bateau, ton amie a mal au cœur. Elle est...', ['toute verte', 'verte de jalousie'], 0, "Mal au cœur : toute verte. EN: she looks green.", 'a5-choisir'),
        tI('Ma cousine était ___ de jalousie devant ma nouvelle auto.', fr(E(1465)), "Verte : avec ma cousine. EN: feminine.", 'a5-erreurs'),
        tI("Après l'hiver, je suis blanc comme un cachet d'___.", fr(E(1470)), "Un cachet d'aspirine. EN: an aspirin.", 'a5-cartes'),
        eS("Je me suis cogné à la table et j'ai un noir.", fr(E(1468)), "La marque est un bleu. EN: a bruise.", 'a5-erreurs'),
        eS('Il est jaune de jalousie depuis ta promotion.', fr(E(1464)), "La jalousie est verte. EN: green.", 'a5-erreurs'),
        lC('Écoute. Comment était Paul ?', fr(E(1466)), ['Paul était jaloux.', 'Paul était gelé.', 'Paul avait mal au cœur.'], 2, "Tout vert, sur un bateau. EN: seasick.", 'a5-histoire'),
      ],
    },
    {
      id: 'r5-argent', label: "L'argent au noir", targets: ['argent-calque'],
      questions: [
        mc('« Travailler au noir », c’est travailler...', ['la nuit', 'sans déclarer'], 1, "Le noir : ce qu'on cache. EN: off the books.", 'a6-cartes'),
        mc("Cacher l'origine d'un argent sale, c'est...", ["blanchir de l'argent", "laver de l'argent", "noircir de l'argent"], 0, "Blanchir. EN: to launder.", 'a6-piege'),
        mc('Ton solde est de moins cent dollars. Tu es...', ['au marché noir', 'dans le rouge'], 1, "Sous zéro : dans le rouge. EN: in the red.", 'a6-choisir'),
        tI('Il travaille ___ noir les fins de semaine.', fr(E(1481)), "Au noir. EN: au.", 'a6-piege'),
        tI("Grâce à ce contrat, l'entreprise est sortie ___ rouge.", fr(E(1486)), "Du rouge : un nom masculin. EN: du.", 'a6-tableau'),
        eS("La police a arrêté un homme qui lavait de l'argent.", fr(E(1487)), "On blanchit l'argent. EN: blanchir.", 'a6-piege'),
        eS('Ces billets de concert se vendent au noir marché.', fr(E(1483)), "Le marché noir. EN: word order.", 'a6-piege'),
        lC('Écoute. De quoi parle-t-on ?', fr(E(1488)), ['du dollar canadien', "de l'euro", 'du dollar américain'], 2, "Le billet vert. EN: the US dollar.", 'a6-lecture'),
      ],
    },
    {
      id: 'r6-blanc', label: 'Le blanc', targets: ['blanc-calque'],
      questions: [
        mc('« Un examen blanc », c’est...', ['un examen raté', 'un examen en hiver', 'un examen pour s’entraîner'], 2, "Pour s'entraîner. EN: a mock exam.", 'a7-cartes'),
        mc('« Out of the blue », en français :', ['de but en blanc', 'hors du bleu'], 0, "Le bleu devient blanc. EN: another colour.", 'a7-erreurs'),
        mc('Un mariage pour les papiers, c’est...', ['un mariage en blanc', 'un mariage blanc'], 1, "Un mariage blanc ; en blanc, c'est la robe. EN: a sham marriage.", 'a7-choisir'),
        tI("Devant le jury, j'ai eu un ___.", fr(E(1497)), "Un blanc. EN: a blank.", 'a7-cartes'),
        tI("Le bus ou le métro, c'est bonnet blanc et blanc ___.", fr(E(1505)), "Bonnet blanc et blanc bonnet. EN: the same.", 'a7-cartes'),
        eS("J'ai passé une nuit blanc avant l'examen.", fr(E(1407)), "La nuit : blanche. EN: feminine.", 'a7-erreurs'),
        eS("Il m'a demandé hors du bleu si j'étais célibataire.", fr(E(1503)), "De but en blanc. EN: white.", 'a7-erreurs'),
        lC('Écoute. Pourquoi se sont-ils mariés ?', fr(E(1501)), ['pour les papiers', 'par amour'], 0, "Un mariage blanc. EN: for the papers.", 'a7-ecoute'),
      ],
    },
    {
      id: 'r7-humeur', label: 'En rose ou en noir', targets: ['humeur-calque'],
      questions: [
        mc('Qui voit la vie en rose ?', ['le pessimiste', "l'optimiste"], 1, "Le rose : tout va bien. EN: the optimist.", 'a8-cartes'),
        mc('Un roman trop sentimental est...', ['fleur bleue', 'haut en couleur', "à l'eau de rose"], 2, "À l'eau de rose. EN: soppy.", 'a8-choisir'),
        mc('« Il est très fleur bleue. » Il est...', ['très romantique', 'très triste', 'très doué'], 0, "Romantique, un peu naïf. EN: a hopeless romantic.", 'a8-cartes'),
        tI('Arrête de voir tout en ___, ça va aller.', fr(E(1519)), "Tout en noir. EN: black.", 'a8-piege'),
        tI('Les enfants font ___ mine : les vacances sont finies.', fr(E(1524)), "Grise mine : grise avec mine. EN: grise.", 'a8-exemples'),
        eS("Depuis qu'il est amoureux, il porte des lunettes roses.", fr(E(1515)), "Il voit la vie en rose. EN: no glasses.", 'a8-piege'),
        eS("Il est une fleur bleue : il écrit encore des poèmes d'amour.", fr(E(1527)), "Être fleur bleue, sans article. EN: no article.", 'a8-piege'),
        lC("Écoute. La vie d'artiste est...", fr(E(1517)), ['toujours facile', 'parfois difficile'], 1, "Pas tout rose. EN: not all roses.", 'a8-histoire'),
      ],
    },
    {
      id: 'r8-feu', label: 'Le feu vert', targets: ['permission-petits-mots'],
      questions: [
        mc('« Donner le feu vert », c’est...', ['permettre', 'refuser'], 0, "Dire oui. EN: to allow.", 'a9-cartes'),
        mc('« In black and white », en français :', ['en noir et blanc', 'blanc sur noir', 'noir sur blanc'], 2, "Noir sur blanc. EN: in writing.", 'a9-erreurs'),
        mc('Pour accueillir la ministre, l’hôtel...', ['a roulé le tapis rouge', 'a déroulé le tapis rouge'], 1, "On déroule le tapis. EN: unroll.", 'a9-erreurs'),
        tI("Le chef m'a donné ___ blanche pour le menu.", fr(E(1538)), "Carte blanche, sans article. EN: carte.", 'a9-cartes'),
        tI("C'est écrit noir ___ blanc dans le contrat.", fr(E(1545)), "Noir sur blanc. EN: sur.", 'a9-focus'),
        tI('Dès le début, elle a annoncé la ___ : pas de réunion le vendredi.', fr(E(1541)), "Annoncer la couleur. EN: colour.", 'a9-cartes'),
        eS('La directrice nous a donné la lumière verte pour le projet.', fr(E(1535)), "Le feu vert. EN: feu.", 'a9-erreurs'),
        lC('Écoute. Que dit la personne ?', fr(E(1539)), ["Je te donne de l'argent.", 'Je signe tout.', 'Je ne te donne pas une liberté totale.'], 2, "Pas de chèque en blanc. EN: no blank cheque.", 'a9-construire'),
      ],
    },
    {
      id: 'r9-ennuis', label: 'La série noire', targets: ['en-voir-oublie'],
      questions: [
        mc('« Mes ados m’en font voir de toutes les couleurs. » Qui souffre ?', ['mes ados', 'moi'], 1, "Ils me font souffrir. EN: I do.", 'a10-tableau'),
        mc('Panne, grippe, dégât d’eau : c’est...', ['une nuit noire', 'une bête noire', 'une série noire'], 2, "Une série noire. EN: a run of bad luck.", 'a10-cartes'),
        mc('Le lendemain de Noël, les magasins sont...', ['noirs de monde', 'noir de monde'], 0, "Noirs : avec les magasins. EN: agreement.", 'a10-piege'),
        tI('Ma grand-mère ___ a vu de toutes les couleurs pendant la guerre.', fr(E(1557)), "En a vu. EN: keep en.", 'a10-piege'),
        tI('Après un retard de paiement, il est sur la liste ___ de la banque.', fr(E(1554)), "La liste noire. EN: black.", 'a10-cartes'),
        eS('Mon fils de deux ans me voit de toutes les couleurs.', fr(E(1558)), "Il m'en fait voir. EN: faire voir.", 'a10-piege'),
        eS('Samedi, le marché Jean-Talon était noir de gens.', fr(E(1560)), "Noir de monde. EN: monde.", 'a10-piege'),
        lC("Écoute. Comment était l'équipe ?", fr(E(1553)), ['elle gagnait tout', 'elle était en vacances', 'elle perdait sans arrêt'], 2, "Six défaites : une série noire. EN: a losing streak.", 'a10-ecoute'),
      ],
    },
    {
      id: 'r10-debutant', label: 'Débutant ou doué', targets: ['debutant-calque'],
      questions: [
        mc('« A rookie », en français familier :', ['un vert', 'un bleu'], 1, "Un bleu. EN: another colour.", 'a11-cartes'),
        mc('« Avoir le pouce vert » se dit surtout...', ['en France', 'en Belgique', 'au Québec'], 2, "Au Québec. EN: Québec.", 'a11-construire'),
        mc('« Ta mère est un cordon bleu. » Elle...', ['cuisine très bien', 'porte un ruban bleu'], 0, "Un très bon cuisinier. EN: a superb cook.", 'a11-cartes'),
        tI('Elle est encore ___, mais elle apprend vite.', fr(E(1573)), "Verte : avec elle. EN: feminine.", 'a11-exemples'),
        tI('Fais travailler ta matière ___.', fr(E(1578)), "La matière grise. EN: grey.", 'a11-erreurs'),
        eS('Les deux cuisinières sont des personnages haut en couleur.', fr(E(1580)), "Hauts : avec les personnages. EN: agreement.", 'a11-erreurs'),
        eS("C'est un vert : il a commencé lundi.", fr(E(1570)), "Un bleu. EN: blue.", 'a11-erreurs'),
        lC('Écoute. Qui est doué pour les plantes ?', fr(E(1575)), ['personne', 'la voisine'], 1, "La main verte. EN: the neighbour.", 'a11-histoire'),
      ],
    },
    {
      id: 'r11-palette', label: 'Toute la palette', targets: ['couleur-anglaise'],
      questions: [
        mc('« I feel blue. » En français :', ['Je me sens bleu.', 'Je broie du noir.'], 1, "La tristesse est noire. EN: black.", 'a1-scene'),
        mc("Laquelle a la même couleur qu'en anglais ?", ['une peur bleue', 'une nuit blanche', 'voir rouge'], 2, "To see red. EN: the same.", 'a1-reperer'),
        mc("Dans un message à un ami, combien d'expressions ?", ['cinq ou six, chacune à sa place', 'le plus possible', 'une seule'], 0, "Pas un arc-en-ciel. EN: five or six.", 'a12-plan'),
        tI("J'ai passé une nuit ___ avant l'examen.", fr(E(1407)), "Une nuit blanche. EN: sleepless.", 'a1-palette'),
        tI("Jeudi, elle m'a donné le feu ___.", fr(E(1586)), "Le feu vert. EN: green.", 'a12-lecture'),
        eS('Je me sens tout bleu depuis lundi.', fr(E(1404)), "Je broie du noir. EN: the French colour.", 'a1-scene'),
        eS("Elle a fait une blague, et j'ai ri bleu.", fr(E(1589)), "Ri jaune. EN: yellow.", 'a12-usages'),
        lC("Écoute. Comment était Hugo avant l'entrevue ?", fr(E(1587)), ['il était très sûr de lui', 'il avait très peur'], 1, "Une peur bleue. EN: scared stiff.", 'a12-lecture'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a12-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'être triste', back: 'broyer du noir', say: fr(E(1404)) },
    { front: 'avoir très peur', back: 'avoir une peur bleue', say: fr(E(1405)) },
    { front: 'se fâcher d’un coup', back: 'voir rouge (sans accord)', say: fr(E(1442)) },
    { front: 'un rire forcé', back: 'rire jaune', say: fr(E(1453)) },
    { front: 'sans déclarer', back: 'travailler au noir', say: fr(E(1481)) },
    { front: 'tout oublier d’un coup', back: 'avoir un blanc', say: fr(E(1497)) },
    { front: 'optimiste', back: 'voir la vie en rose', say: fr(E(1515)) },
    { front: 'permettre', back: 'donner le feu vert', say: fr(E(1535)) },
    { front: 'un débutant', back: 'un bleu (familier)', say: fr(E(1570)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Les couleurs, en résumé',
  body: `${REFRAME} Tu sais maintenant lire une couleur française sans la traduire, et ne plus porter la couleur anglaise en français. Tu accordes la couleur quand elle décrit, tu la laisses quand elle est un nom ou qu'elle suit voir, tu évites les faux amis, et tu racontes une semaine avec cinq ou six couleurs bien placées. Avec ${CORPS_B1_REF} et ${ANIMAUX_REF}, tu as maintenant les trois familles d'expressions imagées. La prochaine leçon, ${CONNECTEURS_REF}, change de sujet : les mots qui relient tes phrases. EN: With body and animal idioms, you now have all three families; next come the connectors.`,
  points: [
    'Pars du sens, puis cherche la couleur française.',
    "L'anglais a la même couleur, une autre, ou aucune.",
    "La couleur s'accorde, sauf après voir et pour un nom.",
    'Familier entre amis, courant partout.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['palette', 'accord', 'registre'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Raconte ta semaine',
    opener: {
      line: "Une entrevue, une nuit blanche et un pouding qui convainc : à toi de raconter ta semaine en couleurs. EN: An interview, a sleepless night and a winning pudding: your turn to tell your week in colours.",
      imageRef: 'lessons/expressions-couleurs/act12.jpg',
    },
    sections: [],
    milestone: "Tu as raconté ta semaine avec cinq couleurs bien placées, et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You told your week with five well-placed colours and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 152,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-gene', 'a12-quiz/r6-blanc', 'a12-quiz/r9-ennuis'],
  },
  sections: [
    A12_LECTURE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const COLS = ['Expression', 'Registre', 'Sens', 'Anglais'];

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-methode', 'Apprendre une expression de couleur', ["l'image, le sens, l'anglais", 'quatre sortes de couleurs', 'Québec et France'], [
    teach('sheet-methode-teach', 'Quatre choses à retenir',
      `${REFRAME} Pour chaque expression, retiens l'image (le sens propre), le sens (le sens figuré), l'équivalent anglais, qui a souvent une autre couleur ou aucune, et le registre : familier ou courant. EN: for each idiom learn the picture, the meaning, the English equivalent and the register.`),
    table('sheet-methode-table', 'Quatre sortes de couleurs', ['Sorte', 'Français', 'Anglais'], [
      ['la même couleur', 'voir rouge', 'see red'],
      ['la même couleur', 'vert de jalousie', 'green with envy'],
      ['la même couleur', 'le feu vert', 'the green light'],
      ['une autre couleur', 'broyer du noir', 'feel blue'],
      ['une autre couleur', 'un bleu', 'a greenhorn'],
      ['une autre couleur', 'de but en blanc', 'out of the blue'],
      ["pas de couleur en anglais", 'une peur bleue', 'scared stiff'],
      ["pas de couleur en anglais", 'une nuit blanche', 'a sleepless night'],
      ['un faux ami', 'rire jaune', 'a forced laugh (not fear)'],
      ['un faux ami', 'un mariage blanc', 'a sham marriage (not a white wedding)'],
    ]),
    teach('sheet-methode-variantes', 'Québec et France',
      "Certaines expressions ont une adresse. Au Québec : avoir le pouce vert ; on dit aussi passer la nuit sur la corde à linge pour une nuit blanche. En France : avoir la main verte, un examen blanc, un bleu pour un débutant, blanc comme un cachet d'aspirine. Et des mots de tous les jours : une auto, la fin de semaine, une entrevue au Québec ; une voiture, le week-end, un entretien en France. EN: some idioms and words belong to Québec, others to France."),
  ]),
  sheet('sheet-accord', "L'accord de la couleur", ["quand elle s'accorde", 'quand elle ne bouge pas', 'ce que tu sais du A1 et du A2'], [
    teach('sheet-accord-teach', "Comme d'habitude, avec deux exceptions",
      `Dans une expression, la couleur-adjectif s'accorde comme ailleurs : une peur bleue, une colère noire, elle est verte de jalousie, ils sont rouges de colère, des personnages hauts en couleur. Deux cas ne bougent pas : après voir (elles ont vu rouge), et quand la couleur est un nom (dans le rouge, en rose, en noir, au noir). ${Cap(ACCORD_REF)} : « ${A203_REFRAME_FR} » ${Cap(COULEURS_REF)} : « ${A113_REFRAME_FR} » EN: ${A203_REFRAME} ${A113_REFRAME}`),
    table('sheet-accord-table', "S'accorde ou pas", ['Expression', 'Accord ?', 'Exemple'], [
      ['une peur bleue', 'oui', 'des peurs bleues'],
      ['une colère noire', 'oui', 'des colères noires'],
      ['blanc comme un linge', 'oui', 'elle est devenue blanche comme un linge'],
      ['vert de peur, de rage, de jalousie', 'oui', 'ils étaient verts de peur'],
      ['rouge de colère, de honte', 'oui', 'elles étaient rouges de honte'],
      ['noir de monde', 'oui', 'les magasins sont noirs de monde'],
      ['encore vert', 'oui', 'elle est encore verte'],
      ['haut en couleur', 'haut oui, couleur non', 'des personnages hauts en couleur'],
      ['voir rouge', 'non', 'elles ont vu rouge'],
      ['voir la vie en rose, voir tout en noir', 'non', 'ils voient tout en noir'],
      ['être dans le rouge', 'non', 'nous sommes dans le rouge'],
      ['travailler au noir', 'non', 'elles travaillent au noir'],
      ['marron, orange, bleu marine', 'jamais', 'des sacs marron, des fleurs orange'],
    ]),
  ]),
  sheet('sheet-emotions', 'La peur, la colère, la gêne, l’envie', ['la peur et le froid', 'la colère', 'la gêne', "l'envie et la santé"], [
    table('sheet-emotions-peur', 'La peur et le froid', COLS, [
      ['avoir une peur bleue', 'courant', 'avoir très peur', 'be scared stiff'],
      ["faire une peur bleue à quelqu'un", 'courant', 'faire très peur', 'scare the living daylights out of someone'],
      ['blanc comme un linge', 'courant', 'très pâle', 'white as a sheet'],
      ['vert de peur', 'courant', 'terrifié', 'petrified'],
      ['bleu de froid', 'courant', 'gelé', 'blue with cold'],
      ['il fait nuit noire', 'courant', 'le noir complet', 'it is pitch dark'],
    ]),
    table('sheet-emotions-colere', 'La colère', COLS, [
      ['voir rouge', 'courant', 'se fâcher d’un coup', 'see red'],
      ['une colère noire', 'courant', 'une très grande colère', 'a towering rage'],
      ['rouge de colère', 'courant', 'très fâché', 'red with anger'],
      ['vert de rage', 'courant', 'furieux', 'livid'],
      ["c'est ma bête noire", 'courant', 'ce que je déteste le plus', 'my pet hate'],
      ["tirer à boulets rouges sur quelqu'un", 'courant', 'critiquer très fort', 'lay into someone'],
    ]),
    table('sheet-emotions-gene', 'La gêne', COLS, [
      ['rouge comme une tomate', 'familier', 'rouge de gêne', 'red as a beetroot'],
      ['rouge de honte', 'courant', 'très gêné', 'red with shame'],
      ['rire jaune', 'courant', 'rire sans en avoir envie', 'give a forced laugh'],
      ['avoir le rouge aux joues', 'courant', 'rougir', 'be flushed'],
    ]),
    table('sheet-emotions-sante', "L'envie et la santé", COLS, [
      ['vert de jalousie', 'courant', 'très jaloux', 'green with envy'],
      ['être tout vert', 'familier', 'avoir mal au cœur', 'look green'],
      ['avoir un bleu', 'courant', 'une marque sur la peau', 'have a bruise'],
      ["blanc comme un cachet d'aspirine (France)", 'familier', 'pas bronzé du tout', 'pasty white'],
      ['être gris', 'familier', 'un peu ivre', 'be tipsy'],
    ]),
  ]),
  sheet('sheet-vie', "L'argent, le blanc, l'humeur, le travail", ["l'argent au noir", 'le blanc', 'en rose ou en noir', 'le feu vert', 'la malchance', 'débutant ou doué'], [
    table('sheet-vie-argent', "L'argent au noir", COLS, [
      ['travailler au noir', 'courant', 'sans déclarer', 'work off the books'],
      ['le marché noir', 'courant', 'le commerce caché', 'the black market'],
      ['être dans le rouge', 'courant', 'à découvert', 'be in the red'],
      ["blanchir de l'argent", 'courant', "cacher l'origine de l'argent", 'launder money'],
      ['un billet vert', 'courant', 'un dollar américain', 'a greenback'],
    ]),
    table('sheet-vie-blanc', 'Le blanc', COLS, [
      ['passer une nuit blanche', 'courant', 'ne pas dormir', 'have a sleepless night'],
      ['avoir un blanc', 'courant', 'oublier tout, d’un coup', 'go blank'],
      ['un examen blanc (France)', 'courant', 'un examen pour s’entraîner', 'a mock exam'],
      ['un mariage blanc', 'courant', 'un faux mariage', 'a sham marriage'],
      ['de but en blanc', 'courant', 'sans prévenir', 'out of the blue'],
      ["c'est bonnet blanc et blanc bonnet", 'familier', "c'est pareil", 'six of one, half a dozen of the other'],
    ]),
    table('sheet-vie-humeur', 'En rose ou en noir', COLS, [
      ['broyer du noir', 'courant', 'être triste', 'feel blue'],
      ['voir la vie en rose', 'courant', 'être optimiste', 'see the world through rose-tinted glasses'],
      ["ce n'est pas tout rose", 'courant', "ce n'est pas facile", 'it is not all roses'],
      ['voir tout en noir', 'courant', 'être pessimiste', 'look on the dark side'],
      ['avoir des idées noires', 'courant', 'avoir des pensées tristes', 'have dark thoughts'],
      ['faire grise mine', 'courant', "avoir l'air mécontent", 'pull a long face'],
      ["à l'eau de rose", 'courant', 'trop sentimental', 'soppy'],
      ['être fleur bleue', 'courant', 'romantique, un peu naïf', 'be a hopeless romantic'],
    ]),
    table('sheet-vie-feu', 'Le feu vert', COLS, [
      ['donner le feu vert', 'courant', 'permettre', 'give the green light'],
      ['avoir carte blanche', 'courant', 'être libre de décider', 'have a free hand'],
      ['un chèque en blanc', 'courant', 'une liberté sans limite', 'a blank cheque'],
      ['annoncer la couleur', 'courant', 'dire clairement ce qu’on veut', 'lay your cards on the table'],
      ['dérouler le tapis rouge', 'courant', 'accueillir comme une vedette', 'roll out the red carpet'],
      ['noir sur blanc', 'courant', 'par écrit', 'in black and white'],
    ]),
    table('sheet-vie-malchance', 'La malchance', COLS, [
      ['une série noire', 'courant', 'des malheurs à la suite', 'a run of bad luck'],
      ['être sur la liste noire', 'courant', 'être refusé, rejeté', 'be blacklisted'],
      ['en voir de toutes les couleurs', 'courant', 'passer des moments difficiles', 'have a rough time'],
      ["en faire voir de toutes les couleurs à quelqu'un", 'courant', 'rendre la vie difficile', 'give someone a hard time'],
      ['noir de monde', 'courant', 'plein de gens', 'packed'],
    ]),
    table('sheet-vie-debutant', 'Débutant ou doué', COLS, [
      ['un bleu (France)', 'familier', 'un débutant', 'a rookie'],
      ['être encore vert', 'courant', 'manquer d’expérience', 'be still green'],
      ['un cordon bleu', 'courant', 'une personne qui cuisine très bien', 'a superb cook'],
      ['avoir la main verte (France)', 'courant', 'réussir les plantes', 'have green fingers'],
      ['avoir le pouce vert (Québec)', 'courant', 'réussir les plantes', 'have a green thumb'],
      ['la matière grise', 'courant', "l'intelligence", 'grey matter'],
      ['haut en couleur', 'courant', 'très original, très vivant', 'colourful, larger than life'],
    ]),
  ]),
  sheet('sheet-pieges', 'Pièges et anecdote', ['les faux amis', "les couleurs de l'anglais", 'relire ton anecdote'], [
    table('sheet-pieges-faux', 'Les faux amis', ['Expression', "Ce n'est pas", "C'est"], [
      ['rire jaune', 'avoir peur (yellow)', 'rire sans en avoir envie'],
      ['un mariage blanc', 'un mariage en robe blanche', 'un faux mariage'],
      ['un bleu', 'une couleur', 'un débutant, ou une marque sur la peau'],
      ['un cordon bleu (une personne)', 'le plat du menu', 'quelqu’un qui cuisine très bien'],
      ['vert de rage', 'jaloux', 'furieux'],
      ['une nuit blanche', 'une nuit de neige', 'une nuit sans dormir'],
    ]),
    table('sheet-pieges-calques', "Les couleurs de l'anglais", ['Anglais', 'Pas', 'Mais'], [
      ['I feel blue', 'je me sens bleu', 'je broie du noir'],
      ['a greenhorn', 'un vert', 'un bleu'],
      ['out of the blue', 'hors du bleu', 'de but en blanc'],
      ['a yellow coward', 'une peur jaune', 'une peur bleue'],
      ['white as a sheet', 'blanc comme un drap', 'blanc comme un linge'],
      ['in black and white', 'en noir et blanc', 'noir sur blanc'],
    ]),
    table('sheet-pieges-anecdote', 'Relire ton anecdote', ['À vérifier', 'Comment'], [
      ['Cinq ou six expressions', 'pas plus : chacune doit aider ton histoire'],
      ['Le bon sens', "relis la carte : l'expression dit-elle ce que tu veux dire ?"],
      ['La bonne couleur', 'la couleur française, pas celle de l’anglais'],
      ["L'accord", 'une peur bleue, verte de jalousie ; mais elles ont vu rouge'],
      ['Le registre', 'familier pour un ami, courant pour un collègue'],
      ['Les temps', "le décor à l'imparfait, les actions au passé composé"],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of at
 *  most one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-palette', title: 'Même couleur, ou autre', format: 'sort' as const, coach: "Deux piles : l'anglais a la même couleur, ou une autre, ou aucune. EN: same colour as English, or not.", buckets: ["la même couleur qu'en anglais", 'une autre couleur, ou aucune'], items: [E(1406), E(1412), E(1404), E(1405), E(1407), E(1410)], audio: AUDIO },
  { id: 'd-peur', title: 'Faire peur, en bleu', format: 'mcq' as const, coach: "Une peur bleue se fait, elle ne se donne pas. EN: faire une peur bleue.", q: 'Tu m’as ... une peur bleue.', opts: ['donné', 'fait'], correct: 1, why: "On fait une peur bleue. EN: faire.", items: [E(1419), E(1420), E(1421), E(1422), E(1423), E(1424)], audio: AUDIO },
  { id: 'd-accord', title: "S'accorde, ou pas", format: 'sort' as const, coach: "Deux piles : la couleur décrit quelqu'un, ou elle suit voir, ou c'est un nom. EN: agrees or stays.", buckets: ["la couleur s'accorde", 'la couleur ne bouge pas'], items: [E(1437), E(1434), E(1423), E(1442), E(1406), E(1520)], audio: AUDIO },
  { id: 'd-jaune', title: 'Le rire jaune', format: 'mcq' as const, coach: "Le rire forcé est jaune ; la peur, en français, est bleue. EN: yellow is a forced laugh.", q: 'Il a ri ... à ma blague.', opts: ['bleu', 'jaune', 'rouge'], correct: 1, why: "Rire jaune : un rire forcé. EN: yellow.", items: [E(1453), E(1454), E(1458), E(1449), E(1450), E(1455)], audio: AUDIO },
  { id: 'd-sante', title: "L'envie ou le corps", format: 'sort' as const, coach: "Deux piles : la jalousie, ou ce qui arrive au corps. EN: envy or the body.", buckets: ["l'envie", 'le corps'], items: [E(1464), E(1465), E(1475), E(1466), E(1468), E(1472)], audio: AUDIO },
  { id: 'd-argent', title: 'Au noir', format: 'mcq' as const, coach: "L'argent caché est au noir, et on le blanchit. EN: au noir, blanchir.", q: 'Il travaille ... noir.', opts: ['au', 'dans le', 'en'], correct: 0, why: "Au noir : sans déclarer. EN: au.", items: [E(1481), E(1482), E(1483), E(1485), E(1487), E(1488)], audio: AUDIO },
  { id: 'd-blanc', title: 'Les cinq blancs', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute et dis ce qui manque : le sommeil, les mots, le vrai. EN: read each aloud.", items: [E(1497), E(1499), E(1501), E(1503), E(1505), E(1407)], audio: AUDIO },
  { id: 'd-humeur', title: 'En rose, ou en noir', format: 'sort' as const, coach: "Deux piles : l'optimiste et le pessimiste. EN: pink or black.", buckets: ['en rose', 'en noir ou en gris'], items: [E(1515), E(1516), E(1517), E(1519), E(1520), E(1523)], audio: AUDIO },
  { id: 'd-feu', title: 'Les petits mots', format: 'mcq' as const, coach: "Carte blanche sans article, noir sur blanc, le feu vert. EN: the small words.", q: "J'ai ... blanche pour la fête.", opts: ['une carte', 'la carte', 'carte'], correct: 2, why: "Sans article. EN: no article.", items: [E(1535), E(1537), E(1538), E(1541), E(1544), E(1545)], audio: AUDIO },
  { id: 'd-ennuis', title: 'Le petit en', format: 'mcq' as const, coach: "En voir, en faire voir : le en reste. EN: keep en.", q: 'Ma grand-mère ... a vu de toutes les couleurs.', opts: ['les', 'en'], correct: 1, why: "En a vu. EN: en.", items: [E(1556), E(1557), E(1558), E(1559), E(1552), E(1554)], audio: AUDIO },
  { id: 'd-debutant', title: 'Débutant ou doué', format: 'sort' as const, coach: "Deux piles : celui qui commence, et celui qui a du talent. EN: rookie or gifted.", buckets: ['le débutant', 'le talent'], items: [E(1570), E(1572), E(1573), E(1574), E(1575), E(1576)], audio: AUDIO },
  { id: 'd-anecdote', title: 'Une couleur par moment', format: 'flashcard' as const, coach: "Lis le message de Hugo, une phrase à la fois : chaque couleur raconte un moment. EN: one idiom per moment.", items: [E(1587), E(1583), E(1584), E(1589), E(1585), E(1586)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'couleur-anglaise', description: 'Carries the English colour into French (je me sens bleu for sad), producing correct French words nobody says.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a12-mission'], drill: 'd-palette', retest: 'd-palette' },
  { id: 'peur-mal-dite', description: 'Builds the fear idioms from English (donner une peur bleue, blanc comme un drap) or leaves the colour unagreed with a woman or a plural.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a12-mission'], drill: 'd-peur', retest: 'd-peur' },
  { id: 'accord-oublie', description: 'Agrees rouge after voir or on a colour noun, or leaves an adjective colour unagreed (rouge de colère for a plural subject).', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check', 'a12-mission'], drill: 'd-accord', retest: 'd-accord' },
  { id: 'jaune-peur', description: 'Reads rire jaune as fear (the English yellow), or calques the blush (rouge comme une betterave, du rouge sur ses joues).', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a12-mission'], drill: 'd-jaune', retest: 'd-jaune' },
  { id: 'sante-calque', description: 'Uses an English or other-language colour for the body (un noir for a bruise, bleu for tipsy, jaune de jalousie).', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a12-mission'], drill: 'd-sante', retest: 'd-sante' },
  { id: 'argent-calque', description: "Mis-builds the money idioms (dans le noir, laver de l'argent, le noir marché) or agrees a colour noun (aux noirs).", detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a12-mission'], drill: 'd-argent', retest: 'd-argent' },
  { id: 'blanc-calque', description: "Translates out of the blue with bleu, uses the writer's page blanche for a spoken blank, or confuses mariage blanc with a white wedding.", detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a12-mission'], drill: 'd-blanc', retest: 'd-blanc' },
  { id: 'humeur-calque', description: 'Calques rose-tinted glasses, agrees en noir, or adds an article to être fleur bleue.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a12-mission'], drill: 'd-humeur', retest: 'd-humeur' },
  { id: 'permission-petits-mots', description: 'Gets the permission idioms right in colour but English in form (en noir et blanc, la lumière verte, une carte blanche).', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a12-mission'], drill: 'd-feu', retest: 'd-feu' },
  { id: 'en-voir-oublie', description: 'Drops the en of en voir de toutes les couleurs, or uses voir where en faire voir is meant, so the wrong person suffers.', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-ennuis', retest: 'd-ennuis' },
  { id: 'debutant-calque', description: 'Calls a rookie un vert or green fingers les doigts verts, or leaves haut unagreed in hauts en couleur.', detectOn: ['a11-construire', 'a11-erreurs', 'a11-check', 'a12-mission'], drill: 'd-debutant', retest: 'd-debutant' },
  { id: 'anecdote-surchargee', description: 'Stacks colour idioms as a list in the anecdote, or places them where their meaning does not fit what happened.', detectOn: ['a12-lecture', 'a12-cheat', 'a12-mission'], drill: 'd-anecdote', retest: 'd-anecdote' },
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-29-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-29-chronique': "Emma's column (act 1), ONE VOICE, one take, a woman in her late twenties from Lyon who has lived in Montréal for a year: amused at herself, light. Sophie's « Tu as froid ? » is quoted with a small worried rise. Every idiom is read as ordinary speech, never stressed: the learner must hear that nobody performs an idiom.",
  'rec-b1-29-mauricie': "Luc and the learner (act 2), THREE VOICES: a narrator, Luc (a Trois-Rivières man in his forties, a good storyteller, Québec French) and the learner (amused). Luc lowers his voice on « Un craquement dans les arbres » and laughs on « C'était un orignal ». No sound effects.",
  'rec-b1-29-piege-peur': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. The final e of « blanche » is not pronounced but the ch is: [blɑ̃ʃ].",
  'rec-b1-29-colere-ecoute': "REQUIRED FOR THE EAR MISSION (act 3): ten lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. A Gatineau woman telling a friend about a bad day, exasperated but funny. Line 9 (« Les voisines ont vu rouge ») gets the most heat; line 10 is flat and quiet. « rouges de colère » in line 4 links normally: [ʁuʒ də kɔ.lɛʁ].",
  'rec-b1-29-honte': "Thomas's forum post (act 4), ONE VOICE, one take, a Bruxelles man in his thirties, Belgian French welcome, laughing at himself. A tiny pause before « qui a ri jaune »; « je me suis étouffé » half laughed. The idioms are ordinary speech, never stressed.",
  'rec-b1-29-piege-gene': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « ri jaune » is [ʁi ʒon], with a closed o.",
  'rec-b1-29-bruxelles': "Anaïs and the learner (act 5), THREE VOICES: a narrator, Anaïs (a Bruxelles woman in her late twenties, cheerful, a little proud of her tan; Belgian French welcome) and the learner (teasing, warm). « J'étais un peu grise » is said with a guilty laugh.",
  'rec-b1-29-dakar': "The news brief (act 6), ONE VOICE, one take, a Dakar radio newsreader, woman, forties, Senegalese French welcome: clear, neutral, news pace. No emphasis on the idioms: they are ordinary press vocabulary.",
  'rec-b1-29-piege-argent': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « au noir » is [o nwaʁ], one group; « blanchissait » keeps its nasal: [blɑ̃.ʃi.sɛ].",
  'rec-b1-29-blanc-ecoute': "REQUIRED FOR THE EAR MISSION (act 7): ten lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. A Lyon student in her early twenties, the week of her oral exam, half stressed, half amused. Line 10 (« À Montréal, la Nuit blanche ») with a lighter, dreamy tone. « un blanc » is [œ̃ blɑ̃], never [œ̃ blɑ̃k].",
  'rec-b1-29-geneve': "Chiara and the learner (act 8), THREE VOICES: a narrator, Chiara (a Genève woman in her thirties, Swiss French welcome, still moved by the film, laughing at herself) and the learner (dry, teasing). The last line is an invitation, warm and bossy.",
  'rec-b1-29-piege-humeur': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « en rose » is [ɑ̃ ʁoz]; « poèmes » keeps its open è: [pɔ.ɛm].",
  'rec-b1-29-fete': "Nathalie's email (act 9), ONE VOICE, one take, a Gatineau manager in her forties, Québec French: friendly, organised, a little firm on « pas de karaoké cette année ». Read as a voice memo of the email, not as a speech.",
  'rec-b1-29-moncton-ecoute': "REQUIRED FOR THE EAR MISSION (act 10): ten lines, ONE TAKE, TWO VOICES alternating (Josée, an Acadian woman from Moncton in her forties, tired but funny; and her sister, calmer). Acadian French welcome. Line 1 lists its three misfortunes with a sigh between them. « en a vu » links: [ɑ̃.na vy].",
  'rec-b1-29-piege-ennuis': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. The en of « en a vu » and « m'en fait voir » must be clearly audible.",
  'rec-b1-29-hugo': "Hugo's message (act 12), ONE VOICE, one take, a Québec City man in his twenties recording a voice note to a friend: relieved, self-mocking, proud at the end. The six idioms at normal speed; the model teaches that an idiom in an anecdote is not performed. A small laugh on « et j'ai ri jaune ».",
  'rec-b1-29-cuisine': "Jonathan and the learner (act 11), THREE VOICES: a narrator, Jonathan (a Québec City sous-chef in his thirties, relaxed, protective of the new cook) and the learner (nervous, curious). Kitchen ambience very low. « le pouce vert » said the Québec way, as ordinary speech.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 29',
  intro: "An English speaker who is sad feels blue; a French speaker grinds black. A French speaker who is terrified has a blue fear, and a rookie at work is a blue, not a green. This lesson teaches about sixty colour idioms, grouped by what they say (fear, anger, embarrassment, envy, money, emptiness, mood, permission, bad luck, beginners): the picture, the meaning, the register and the English equivalent, which often has another colour or none. It shows when the colour agrees inside an idiom and when it does not, and it ends with a short anecdote that uses five or six of them naturally.",
  skill: 'PE',
  grammarAssumed: [COULEURS_UNIT, ACCORD_UNIT, PC_AVOIR_UNIT, PC_IMPARFAIT_UNIT],
  grammarIntroduced: [
    'Colour idioms as fixed blocks: the literal picture (sens propre) against the meaning (sens figuré), with the English equivalent, which may keep the colour, change it or have none',
    'Agreement inside a colour idiom: the colour adjective agrees as usual (une peur bleue, rouges de colère, verte de jalousie, hauts en couleur); it does not after voir (elles ont vu rouge) or as a noun (dans le rouge, en rose, au noir)',
    'Register marked per idiom: familier (rouge comme une tomate, être gris, un bleu) against courant (donner le feu vert, carte blanche, le marché noir)',
    'Colour idioms for fear, anger, embarrassment, envy and health, money, emptiness, optimism and naivety, permission, bad luck and beginners',
    'False friends among colour idioms: rire jaune (a forced laugh, not fear), un mariage blanc (a sham marriage), un bleu (a rookie or a bruise), un cordon bleu (a cook, not the dish)',
    'Regional variants: avoir le pouce vert (Québec) against avoir la main verte (France); un examen blanc and un bleu marked France',
    'Using five or six idioms naturally in a short spoken-style anecdote, rather than as a list',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "En anglais, on est triste en bleu ; en français, on broie du noir. Une peur bleue n'a pas de couleur en anglais, et un débutant, chez nous, est un bleu. Cette leçon t'apprend une soixantaine d'expressions de couleur : ce qu'elles montrent, ce qu'elles veulent dire, à qui les dire, et quand la couleur s'accorde, jusqu'à une petite anecdote.",
    minutes: 140,
    difficulty: 3,
    glyph: 'bleu',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: EXPRESSIONS_COULEURS_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, CHRONIQUE_TEXT, HONTE_TEXT, DAKAR_TEXT, FETE_TEXT, ENTREVUE_TEXT, dicteeFor };
