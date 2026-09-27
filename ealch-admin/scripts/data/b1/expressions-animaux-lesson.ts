// b1.28.l1 « Les animaux et la nourriture » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md, in the
// VOCAB SHAPE of B1-WORKSHOP-AND-VOCAB-SHAPES.md §2.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union, enforced by
// validateSection, drawn by TaskView), so `sections` is `LessonSection[]` and
// the validators run on `LESSON` itself, as b1.18 and b1.23 do.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (family · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   THE VOCAB SHAPE (shapes doc §2.1). An act is built around a FAMILY of
//   expressions in use, not around a form: meet them in context (story,
//   reading or listening), learn them (a cardDeck, one card per expression,
//   register on the eyebrow, picture then meaning then English), tell them
//   apart (groupDrill, then a trapDrill or commonErrors on the English
//   picture and on the look-alike that does not exist), use them (a
//   groupDrill of real situations), check (gated control pages).
//
//    1  Le lapin du samedi            7   the English picture that fails;
//                                         eight idioms met, none taught
//    2  Il fait un froid de canard    7   weather and the hour         (6)
//    3  Poser un lapin                7   waiting, no-shows, crowds    (4)
//    4  Une poule mouillée            7   fear, nerves and courage     (5)
//    5  Une faim de loup              7   hunger and mood              (6)
//    6  Malade comme un chien         7   health and sleep             (5)
//    7  Des salades                   7   lies, secrets, dodging       (6)
//    8  C'est du gâteau               7   easy, hard, busy             (6)
//    9  Têtu comme une mule           7   portraits in « comme »       (8)
//   10  Revenons à nos moutons        7   other people, and the point  (6)
//   11  La cerise sur le gâteau       7   good news and bad news       (5)
//   12  Ta journée en images         11   model, plan, role play, TASK, quiz
//
//   TOTAL 88 missions, 12 acts. Corpus: 176 authored rows (.1200-.1375)
//   plus 23 reused seed rows (the literal words), 199 item ids in all, every
//   one of them released act by act through `deckTranche`. 58 expressions
//   taught (§E of the corpus), plus « il pleut à boire debout » as the answer
//   to an English animal idiom. Quiz: 11 rounds of 8. Eleven error triggers,
//   eleven drills, five reference sheets, nine terms. Three tapTables (acts
//   2, 7, 10). Chapter artwork: `expressions-animaux-image-prompts.md`, 12
//   prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Garde l'image, traduis le sens. »
//   EN: Keep the picture, translate the meaning.
//
//   ONE METAPHOR, THE PICTURE AND THE MESSAGE. An idiom is a small picture
//   carrying a plain message. Inside French you keep the picture whole (same
//   animal, same food, same verb); across to English you carry the message
//   and let English draw its own picture. It is NOT « idioms never translate
//   »: act 9 shows the same mule and the same ox in both languages, and the
//   reframe still holds there (corpus REFRAME_REJECTED).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the idioms whose key image is an animal or a food, 58 of them in
//           ten families; the register of each (familier / courant); the
//           Québec and France variants of two; the « adjectif + comme +
//           animal » portrait and its agreement; the word-for-word trap in
//           both directions.
//   QUOTES  a1.23 (food, « lesson 26 in A1 ») and the `animaux` theme for
//           the LITERAL words, by seed id, in every act's build drill; b1.23
//           for the tout of « en faire tout un fromage » on the sheet.
//   LEAVES  body idioms to b1.27 and colour idioms to b1.29 (the three
//           lessons split by KEY IMAGE, decided up front); register as a
//           system to b1.25; the subjunctive to b1.14 to b1.16, and no
//           authored French string here uses one.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs. Every learner surface that explains something carries
//   English (`en`, or a final « EN: »), and NO ANSWER ever does. Every `say`
//   is French. Theme `expressions-imagees`, POSTGRES ONLY (corpus §A.1). A1
//   citations use the English trail label; b1.* ones are French from the
//   plan. Setting: mixed francophone with a Canadian lean (Montréal, Québec,
//   Dakar, Brussels, Lyon); Chloé, Julien, Awa, Mathieu and Élise recur only
//   inside this lesson. No bubble carries a « ? » or a « ! ».
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. RESOLVED (Paul, gate 3, 2026-09-26): « avoir la chair de poule »
//      (goosebumps) joins act 4 here as row `.1375`: a card in a4-cartes and
//      a group in a4-choisir. b1.27 does not take it.
//   2. « il pleut à boire debout » has no animal and no food, but it is the
//      only natural answer to « raining cats and dogs », the most
//      famous word-for-word trap there is. Taught here as an EQUIVALENT, not
//      counted in the 58. Keep it, or move it to b1.27 or b1.29?
//   3. Two regional forms are taught as a pair, Québec first (papillons dans
//      l'estomac / dans le ventre; une poule pas de tête / un poulet sans
//      tête). « poireauter » and « avoir la frite » are marked France. Is
//      that the right amount of regional marking for the house lean?
//   4. THREE tapTables (acts 2, 7 and 10), one per act, six rows each.
//      Confirm three, as for every other B1 lesson.
//   5. Fourteen published rows are twinned (corpus DB_ONLY_TWINS). Dedupe at
//      import or keep both?
//   6. The task is written (PE, 80 to 120 words, graded on FIT, not count).
//      A spoken anecdote (PO) would suit idioms at least as well. Add one?
//   7. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  FAMILIES,
  SAMEDI_TEXT, COURRIEL_TEXT, NOUVELLES_TEXT, ANECDOTE_TEXT,
  FOOD_UNIT, ARTICLES_UNIT, TOUT_UNIT,
  FOOD_REF, TOUT_REF, REGISTER_REF, BODY_REF, COLOUR_REF, ANIMAUX_THEME_FR,
} from './expressions-animaux-corpus.ts';
import { EXPRESSIONS_ANIMAUX_TERMS } from './expressions-animaux-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string; register?: string; tags?: string[] };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.28: no item ${id}`);
  return r;
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.28: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section. Authored rows only:
 *  the seed's A1 rows carry the old plain-n style (corpus §A.4). */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`b1.28: no house respell on ${id}`);
  return `[${r.respell}]`;
}

const fr = (id: string) => src(id).fr;
/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A listening line copied from its row. */
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
/** An examples row copied from its row. */
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
/** A useCases row copied from its row. */
const uc = (situation: string, id: string) => ({ situation, fr: src(id).fr, en: src(id).en });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** The register eyebrow of an expression card, read off the row so a card
 *  can never disagree with its row. Regional rows say where. */
function regLabel(id: string): string {
  const r = src(id);
  const where = r.tags?.includes('quebec') ? ' · Québec' : r.tags?.includes('france') ? ' · France' : '';
  return `${r.register ?? 'courant'}${where}`;
}

/** One expression card: the picture, the meaning, then the English. */
const card = (id: string, head: string, body: string) =>
  ({ head, label: regLabel(id), fr: fr(id), sub: rsOf(id), body });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE LAPIN DU SAMEDI
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The learner's French is grammatical and the picture is English:
 *  « he stood me up » arrives as « il m'a laissé debout ». That is the one
 *  failure this lesson can open on. NO « ? » OR « ! » IN ANY BUBBLE. */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le rendez-vous manqué',
  frSub: 'Une chaise vide',
  setting: { place: 'Un café, rue Saint-Denis', city: 'Montréal', time: '18 h 45', ambience: 'une table pour deux, une chaise vide, la neige dehors' },
  beats: [
    {
      kind: 'narration',
      text: "Samedi soir, dans un café de la rue Saint-Denis. Tu attends Julien depuis quarante minutes. Il ne viendra pas. Ta collègue Chloé t'appelle.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Chloé',
      fr: 'Alors, raconte-moi ton rendez-vous avec Julien.',
      en: 'So, tell me about your date with Julien.',
      respell: '[a-LOR ra-kohⁿt-MWA tohⁿ rahⁿ-day-VOO a-vehk zhü-LYEHⁿ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Julien m'a laissé debout.",
      en: 'Julien left me standing.',
      respell: '[zhü-lyehⁿ ma leh-say duh-BOO]',
      stage: "Tu penses à « he stood me up », et tu traduis chaque mot. La grammaire est juste.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Chloé',
      fr: 'Debout. Tu étais donc debout dans la rue.',
      en: 'Standing. So you were standing in the street.',
      respell: '[duh-BOO | tü ay-teh dohⁿk duh-BOO dahⁿ la RÜ]',
      stage: "Elle imagine une scène bizarre. Le message n'est pas passé.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "En anglais, l'image est quelqu'un qu'on laisse debout. En français, l'image est un lapin. Le message est le même, l'image est une autre.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase dit à Chloé que Julien n’est jamais venu ?',
      size: 'lg',
      options: [
        { fr: "Julien m'a laissé debout.", respell: '[zhü-lyehⁿ ma leh-say duh-BOO]', en: 'Julien left me standing.', outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1200)), respell: rsOf(E(1200)), en: src(E(1200)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Chloé rit : « Encore lui ». Elle a compris tout de suite : il n'est pas venu, et il n'a pas prévenu.",
        breaks: "Chloé ne comprend toujours pas. Elle te demande s'il n'y avait plus de chaises dans le café.",
      },
    },
    {
      kind: 'break',
      heading: 'Les bons mots, la mauvaise image',
      body: "Ta phrase était du français correct, avec une image anglaise. En français, celui qui ne vient pas « pose un lapin ». EN: Correct French, English picture. In French the no-show « poses a rabbit ».",
      wrong: {
        fr: "Julien m'a laissé debout.",
        ipa: '/ʒy.ljɛ̃ ma lɛ.se də.bu/',
        respell: '[zhü-lyehⁿ ma leh-say duh-BOO]',
        en: 'Julien left me standing.',
      },
      right: {
        fr: fr(E(1200)),
        ipa: ipaOf(E(1200)),
        respell: rsOf(E(1200)),
        en: src(E(1200)).en,
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Cette leçon te donne une cinquantaine d'images françaises : des animaux, des fruits, du pain. Pour chacune, l'image, puis le sens, puis l'anglais.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'motamot'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: "Voir l'image, comprendre le sens", s: 'Actes 1 à 3 : le temps, l’heure, les rendez-vous manqués' },
    { t: 'Dire ce que tu ressens', s: 'Actes 4 à 6 : la peur, la faim, l’humeur, la santé' },
    { t: 'Parler des autres', s: 'Actes 7 à 10 : les secrets, l’effort, les portraits, les disputes' },
    { t: 'Raconter une histoire', s: 'Actes 11 et 12 : les nouvelles, puis ton anecdote' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: eight idioms doing their job in one message, before any
 *  of them is taught. `questionsInModal` so the text comes first. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Chloé',
  frSub: 'Lis, et cherche les images',
  text: SAMEDI_TEXT,
  glossary: [
    { word: 'poireauté', en: 'hung around waiting', note: 'Attendu longtemps, pour rien. Tu le vois à l’acte 3.' },
    { word: 'colocataire', en: 'flatmate', note: 'La personne qui partage son appartement.' },
    { word: 'la serveuse', en: 'the waitress', note: 'La femme qui sert au café.' },
    { word: 'Bisous', en: 'Love, kisses', note: 'Une fin de message entre amis.' },
  ],
  questions: [
    { q: 'Julien est-il venu au café ?', a: "Non : « il m'a posé un lapin ». Il n'est pas venu, et il n'a pas prévenu." },
    { q: 'Quel temps faisait-il ?', a: "« Un froid de canard » : il faisait très froid. Aucun canard dans l'histoire." },
    { q: 'Chloé a-t-elle mangé un vrai gâteau ?', a: "Oui, « une grosse part de gâteau ». Mais « la cerise sur le gâteau », c'est le café offert : le petit plus." },
    { q: "Comment va Chloé aujourd'hui ?", a: "Bien : « j'ai la pêche ». Et « ce n'est pas la fin des haricots » : ce n'est pas grave." },
    { q: "Combien d'expressions imagées comptes-tu ?", a: 'Huit : froid de canard, poireauter, poser un lapin, raconter des salades, faim de loup, cerise sur le gâteau, avoir la pêche, la fin des haricots.' },
  ],
  audio: REC('rec-b1-28-samedi'),
  say: REFRAME,
  terms: ['image', 'sens'],
};

/** BUILD: the real rabbit against the rabbit that is only a picture. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Le vrai lapin et l’autre',
  groups: [
    grp('De vrais animaux', [
      it(E(1204), 'un vrai lapin, une vraie carotte'),
      it(E(1205), 'un vrai canard, sur un vrai lac'),
      it(E(1206), 'un vrai loup, dans la neige'),
    ], chk(
      'Dans ces trois phrases, les animaux sont...',
      ['des images', 'de vrais animaux'], 1,
      "Un lapin qui mange, un canard qui nage : ici, les mots disent ce qu'ils disent. EN: here the words mean what they say.")),
    grp('Des images', [
      it(E(1200), 'personne n’a vu de lapin'),
      it(E(1201), 'aucun canard dehors'),
      it(E(1202), 'aucun loup à table'),
    ], chk(
      'Et dans ces trois phrases, le lapin, le canard et le loup sont...',
      ['des images', 'de vrais animaux'], 0,
      "Il n'y a aucun animal : l'image porte un message. EN: no animal at all, a picture carrying a message.")),
    ctl('Le sens', "« Il m'a posé un lapin. » Qu'est-ce que Julien a fait ?",
      ['Il est venu avec un lapin.', "Il n'est pas venu.", 'Il a mangé du lapin.'], 1,
      "Il n'est jamais venu : c'est le sens. Le lapin, c'est l'image. EN: he never came."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'sens'],
};

/** NAME, gently: each picture next to its plain message. */
const A1_PAIRES: Sec<'examples'> = {
  type: 'examples',
  id: 'a1-paires',
  layer: 'core',
  sheetId: 'sheet-lire',
  title: "L'image et son message",
  examples: [
    ex(E(1200), "L'image : un lapin. Le message : il n'est pas venu."),
    ex(E(1207), 'Le même message, sans image.'),
    ex(E(1201), "L'image : un canard. Le message : il fait très froid."),
    ex(E(1208), 'Le même message, sans image.'),
    ex(E(1202), "L'image : un loup. Le message : j'ai très faim."),
    ex(E(1209), 'Le même message, sans image.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'sens'],
};

/** CHOOSE: where the picture does a job the plain sentence cannot. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où une image fait mieux',
  cases: [
    uc('Tu écris à une amie que ton rendez-vous n’est pas venu', E(1200)),
    uc('Ton coloc veut sortir en t-shirt, en janvier', E(1201)),
    uc('Tu arrives chez ta tante après six heures de route', E(1202)),
    uc('Tu dis la même chose à ton patron, sans image', E(1207)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'registre'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl("L'image", '« Un froid de canard » : où est le canard ?',
    ['dehors, dans le froid', "nulle part : c'est une image"], 1,
    "Aucun canard : l'image dit qu'il fait très froid. EN: no duck, just a picture."),
  ctl('Le mot à mot', '« He stood me up », en français, c’est...',
    ["Il m'a laissé debout.", "Il m'a posé un lapin.", "Il m'a mis debout."], 1,
    "Le français a sa propre image : un lapin. EN: French has its own picture."),
  ctl('La règle', 'Entre le français et l’anglais, tu traduis...',
    ['le sens', "l'image"], 0,
    `${REFRAME} EN: ${REFRAME_EN}`),
], ['image', 'motamot']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le lapin du samedi',
    opener: {
      line: "Julien n'est pas venu, et ta phrase anglaise ne passe pas : ici tu découvres que le français a ses propres images. EN: Julien never came and your English sentence does not land: here you find that French has pictures of its own.",
      imageRef: 'lessons/expressions-animaux/act01.jpg',
    },
    sections: [],
    milestone: "Tu sépares l'image du message, et tu sais qu'une image anglaise ne se traduit pas mot à mot. EN: You can separate the picture from the message, and you know an English picture does not go across word for word.",
    estScreens: 32, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_PAIRES, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — IL FAIT UN FROID DE CANARD
 *
 *  The weather and the hour: six pictures (a duck, a dog, hens three times,
 *  a snail) and one ANSWER, « il pleut à boire debout », for the English
 *  animal idiom a learner will try to carry across.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear. `hideLines`: the questions are about what the idiom MEANS,
 *  which the ear has to decode without the picture written out. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le temps et l’heure, en huit phrases',
  frSub: 'Écoute, et trouve le message',
  lines: [
    ln(E(1217)), ln(E(1218)), ln(E(1219)), ln(E(1220)),
    ln(E(1221)), ln(E(1222)), ln(E(1223)), ln(E(1226)),
  ],
  questions: [
    { q: 'Première phrase : il fait comment ?', opts: ['très froid', 'très chaud'], correct: 0, why: "« Un froid de canard » : très froid. EN: freezing." },
    { q: 'Deuxième phrase : pourquoi reste-t-on à la maison ?', opts: ['il fait beau', 'il fait un temps horrible', 'il fait trop chaud'], correct: 1, why: "« Un temps de chien » : pluie, vent, gris. EN: foul weather." },
    { q: 'Le grand-père se lève...', opts: ['très tard', 'très tôt'], correct: 1, why: "« Avec les poules » : au lever du soleil. EN: at dawn." },
    { q: 'Il rangera sa chambre...', opts: ['jamais', 'demain', 'avec les poules'], correct: 0, why: "« Quand les poules auront des dents » : jamais. EN: when pigs fly." },
    { q: 'Le bus du matin était...', opts: ['très lent', 'rapide'], correct: 0, why: "« Comme un escargot » : très lentement. EN: at a snail's pace." },
    { q: 'Depuis midi, il pleut...', opts: ['un peu', 'très fort'], correct: 1, why: "« À boire debout » : très fort. EN: pouring." },
  ],
  audio: REC('rec-b1-28-meteo-ecoute'),
  say: REFRAME,
  terms: ['image', 'sens'],
};

/** LEARN: one card per expression, register on the eyebrow. */
const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-quotidien',
  title: 'Six images pour le temps et l’heure',
  frSub: "Le canard, le chien, les poules, l'escargot",
  hint: "Six cartes. D'abord l'image, puis le sens, puis l'anglais.",
  audio: REC('rec-b1-28-meteo-cartes'),
  say: REFRAME,
  terms: ['image', 'equivalent'],
  cards: [
    card(E(1210), 'Très froid', "Image : un froid bon pour les canards, qui restent dehors l'hiver. Sens : il fait très froid. EN: bitter cold."),
    card(E(1211), 'Très mauvais temps', "Image : un temps qu'on ne donnerait qu'à un chien. Sens : pluie, vent et gris, tout à la fois. EN: foul weather."),
    card(E(1212), 'Très tôt le matin', 'Image : les poules se réveillent avec le soleil. Sens : se lever très tôt. EN: to get up at the crack of dawn.'),
    card(E(1213), 'Très tôt le soir', 'Image : les poules dorment dès que la nuit tombe. Sens : se coucher très tôt. EN: to go to bed very early.'),
    card(E(1214), 'Jamais', "Image : une poule avec des dents. Sens : jamais. L'anglais fait voler un cochon. EN: when pigs fly."),
    card(E(1215), 'Très lentement', "Image : un escargot sur la route. Sens : très lentement. Ici, l'anglais garde la même image. EN: at a snail's pace."),
  ],
};

/** LEARN, as a lookup: the six, each with the English and a sentence. */
const A2_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-tableau',
  layer: 'core',
  sheetId: 'sheet-quotidien',
  title: 'Six expressions, six phrases',
  cols: ['Expression', 'Registre', 'En anglais'],
  rows: [
    { cells: [fr(E(1210)), 'courant', 'bitter cold'], say: fr(E(1217)),
      detail: { title: 'Un froid de canard', body: "Souvent avec il fait. EN: usually after il fait.", say: fr(E(1224)) } },
    { cells: [fr(E(1211)), 'courant', 'foul weather'], say: fr(E(1218)),
      detail: { title: 'Un temps de chien', body: "Souvent avec quel : quel temps de chien. EN: often after quel.", say: fr(E(1226)) } },
    { cells: [fr(E(1212)), 'courant', 'up at dawn'], say: fr(E(1219)),
      detail: { title: 'Avec les poules, le matin', body: "Se lever : le matin. EN: getting up.", say: fr(E(1225)) } },
    { cells: [fr(E(1213)), 'courant', 'early to bed'], say: fr(E(1220)),
      detail: { title: 'Avec les poules, le soir', body: "Se coucher : le soir. EN: going to bed.", say: fr(E(1220)) } },
    { cells: [fr(E(1214)), 'courant', 'when pigs fly'], say: fr(E(1221)),
      detail: { title: 'Jamais', body: "Souvent pour se moquer un peu. EN: often teasing.", say: fr(E(1227)) } },
    { cells: [fr(E(1216)), 'courant', 'raining cats and dogs'], say: fr(E(1223)),
      detail: { title: 'Pas un seul animal', body: "L'anglais a des chats et des chiens, le français n'en a aucun. EN: no animals in French.", say: fr(E(1223)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent', 'motamot'],
};

/** TELL APART: the literal word first (the `animaux` theme), then its idiom. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le mot, puis l’image',
  groups: [
    grp('Du mot à l’image', [
      it('fr.a1.animaux.020', `le mot, dans ${ANIMAUX_THEME_FR}`),
      it(E(1210), "l'image : très froid"),
      it('fr.a1.animaux.018', 'le mot'),
      it(E(1212), "l'image : très tôt"),
    ], chk(
      '« Se lever avec les poules » : tu dors près des poules ?',
      ['Oui, dans une ferme.', 'Non, tu te lèves très tôt.'], 1,
      "Aucune ferme : l'image dit l'heure. EN: no farm, just the hour.")),
    grp('Le temps qu’il fait', [
      it(E(1217), 'le froid'),
      it(E(1218), 'la pluie, le vent, le gris'),
      it(E(1223), 'la pluie très forte'),
      it(E(1224), 'le froid du Québec'),
    ], chk(
      '« Il pleut à boire debout » : il pleut...',
      ['un peu', 'très fort', 'des animaux'], 1,
      "Très fort, et sans aucun animal. EN: pouring, no animals.")),
    ctl('Jamais', '« Quand les poules auront des dents » veut dire...',
      ['jamais', 'bientôt', 'demain matin'], 0,
      "Une poule n'aura jamais de dents. EN: never."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'sens'],
};

/** USE: a real situation picks the expression. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quelle image, ici',
  groups: [
    grp('Le matin', [
      it(E(1219), 'le grand-père'),
      it(E(1225), 'les boulangers'),
      it(E(1222), 'le bus'),
    ], chk(
      'Tu te lèves à cinq heures pour aller travailler. Tu dis :',
      ['Je me couche avec les poules.', 'Je me lève avec les poules.'], 1,
      "Le matin, on se lève avec les poules. EN: up at dawn.")),
    grp('Le soir, et jamais', [
      it(E(1220), 'au lit très tôt'),
      it(E(1221), 'la chambre en désordre'),
      it(E(1227), 'toujours en retard'),
    ], chk(
      "Ton frère promet de ranger, et tu n'y crois pas. Il rangera...",
      ['avec les poules', 'quand les poules auront des dents'], 1,
      "Jamais : une poule n'a pas de dents. EN: when pigs fly.")),
    ctl('Le temps', 'Il pleut, il vente, tout est gris. Tu dis :',
      ['Quel froid de canard.', 'Quel escargot.', 'Quel temps de chien.'], 2,
      "Pluie et vent : un temps de chien. EN: foul weather."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sens', 'contexte'],
};

/** TRAP, stepped: the English picture carried across, and two pictures mixed. */
const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: 'Le bon animal, ou aucun',
  rule: {
    title: 'Une image, un seul animal',
    body: "Le froid va avec le canard, le mauvais temps avec le chien, le jamais avec les poules. Change l'animal, et personne ne te suit. La pluie anglaise n'a aucun animal en français. EN: each picture has one animal; English rain has none in French.",
  },
  cards: [
    { promptLabel: 'raining cats and dogs, mot à mot', promptSound: 'Il pleut des chats et des chiens.', fr: fr(E(1223)), ipa: ipaOf(E(1223)), tip: "Le français ne met aucun animal : il pleut à boire debout. EN: no animals." },
    { promptLabel: 'le chien au lieu du canard', promptSound: 'Mets ton manteau, il fait un froid de chien.', fr: fr(E(1217)), ipa: ipaOf(E(1217)), tip: "Le froid est au canard. EN: cold goes with the duck." },
    { promptLabel: 'le canard au lieu du chien', promptSound: 'Quel temps de canard, on reste à la maison.', fr: fr(E(1218)), ipa: ipaOf(E(1218)), tip: "Le mauvais temps est au chien. EN: foul weather goes with the dog." },
    { promptLabel: 'when pigs fly, mot à mot', promptSound: 'Il rangera sa chambre quand les cochons voleront.', fr: fr(E(1221)), ipa: ipaOf(E(1221)), tip: "En français, ce sont des poules, et elles ont des dents. EN: hens with teeth." },
    { promptLabel: 'le soir au lieu du matin', promptSound: 'Mon grand-père se couche avec les poules à cinq heures du matin.', fr: fr(E(1219)), ipa: ipaOf(E(1219)), tip: "Le matin, on se lève avec les poules. EN: morning is se lever." },
    { promptLabel: "l'image au pluriel", promptSound: 'Ce matin, le bus avançait comme des escargots.', fr: fr(E(1222)), ipa: ipaOf(E(1222)), tip: "Un bus, un escargot : l'image reste au singulier. EN: one snail." },
  ],
  drill: [
    { promptSay: 'Il fait un froid de ... .', opts: ['chien', 'canard'], correct: 1 },
    { promptSay: 'Quel temps de ... , on reste ici.', opts: ['chien', 'canard'], correct: 0 },
    { promptSay: 'Il pleut à boire ... .', opts: ['assis', 'couché', 'debout'], correct: 2 },
    { promptSay: 'Mon grand-père se lève avec les ... .', opts: ['poules', 'canards'], correct: 0 },
    { promptSay: 'Il rangera quand les poules auront des ... .', opts: ['ailes', 'dents', 'plumes'], correct: 1 },
    { promptSay: 'Le bus avançait comme un ... .', opts: ['loup', 'escargot'], correct: 1 },
    { promptSay: 'Je suis fatigué, ce soir je me ... avec les poules.', opts: ['couche', 'lève'], correct: 0 },
    { promptSay: 'À Québec, en janvier, il fait un froid de ... .', opts: ['loup', 'chat', 'canard'], correct: 2 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Une image, un seul animal' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la mauvaise image raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-28-piege-meteo'),
  say: REFRAME,
  terms: ['image', 'motamot'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le froid', 'Il fait très froid. Il fait un froid de...',
    ['canard', 'chien'], 0,
    "Un froid de canard. EN: the duck."),
  ctl('La pluie', '« It is raining cats and dogs », en français :',
    ['Il pleut des chats.', 'Il pleut à boire debout.'], 1,
    "Pas d'animal en français. EN: no animals."),
  ctl("L'heure", 'Se coucher avec les poules, c’est se coucher...',
    ['très tard', 'avec des animaux', 'très tôt'], 2,
    "Les poules dorment dès la nuit. EN: very early."),
], ['image', 'motamot']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Il fait un froid de canard',
    opener: {
      line: "Un canard dans le froid, un chien sous la pluie, des poules qui se lèvent tôt : ici tu dis le temps et l'heure avec des images. EN: A duck in the cold, a dog in the rain, hens up early: here you talk about weather and time in pictures.",
      imageRef: 'lessons/expressions-animaux/act02.jpg',
    },
    sections: [],
    milestone: "Tu dis le froid, le mauvais temps, le matin, le soir et le jamais avec le bon animal, et tu ne fais plus pleuvoir de chats. EN: You say cold, foul weather, early, late and never with the right animal, and it no longer rains cats.",
    estScreens: 50, restPoints: ['a2-tableau', 'a2-choisir'],
  },
  sections: [A2_ECOUTE, A2_CARTES, A2_TABLEAU, A2_CONSTRUIRE, A2_CHOISIR, A2_PIEGE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — POSER UN LAPIN
 *
 *  Waiting and not showing up, and the two ends of a crowd: nobody at all
 *  (pas un chat) and far too many (des sardines).
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: Monday at the office, Chloé tells the rest. No « ? » or « ! ». */
const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'Lundi, au bureau',
  frSub: 'La suite du lapin',
  setting: "Lundi matin, dans un bureau de Montréal. Chloé arrive avec son café et son téléphone. Tu veux la suite de l'histoire.",
  bubbles: [
    { from: 'narrator', fr: 'Chloé pose son téléphone sur ton bureau.', en: 'Chloé puts her phone down on your desk.' },
    { from: 'coach', fr: "Julien m'a écrit hier soir. Il dit qu'il était malade.", en: 'Julien wrote to me last night. He says he was ill.' },
    { from: 'user', fr: 'Et toi, tu as poireauté quarante minutes pour rien.', en: 'And you hung around for forty minutes for nothing.', warn: 'poireauter : attendre longtemps, pour rien' },
    { from: 'coach', fr: "Oui. Et le café était vide, il n'y avait pas un chat.", en: 'Yes. And the café was empty, there was not a soul.', warn: 'pas un chat : personne' },
    { from: 'user', fr: 'Dis-moi si tu vas le revoir.', en: 'Tell me if you are going to see him again.' },
    { from: 'coach', fr: "Samedi, au cinéma. Mais s'il me pose encore un lapin, c'est fini.", en: 'On Saturday, at the cinema. But if he stands me up again, it is over.', warn: 'poser un lapin : ne pas venir, sans prévenir' },
    { from: 'coach', fr: 'Le samedi soir, au cinéma, on est serrés comme des sardines.', en: 'On Saturday nights at the cinema we are packed like sardines.', warn: 'serrés comme des sardines : trop de monde' },
    { from: 'narrator', fr: "Quatre images en une conversation, et pas un seul animal dans le bureau.", en: 'Four pictures in one conversation, and not a single animal in the office.' },
  ],
  closing: { fr: 'Un lapin, un poireau, un chat, des sardines : attendre, ne pas venir, personne, trop de monde.', en: 'A rabbit, a leek, a cat, sardines: waiting, not coming, nobody, too many people.' },
  audio: REC('rec-b1-28-bureau'),
  say: REFRAME,
  terms: ['image', 'sens'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-quotidien',
  title: 'Attendre, et ne pas venir',
  frSub: 'Un lapin, un poireau, un chat, des sardines',
  hint: "Quatre cartes. Regarde qui attend, et qui ne vient pas.",
  audio: REC('rec-b1-28-lapin-cartes'),
  say: REFRAME,
  terms: ['image', 'registre'],
  cards: [
    card(E(1228), 'Ne pas venir', "Image : on laisse un lapin sur la chaise vide. Sens : ne pas venir à un rendez-vous, sans prévenir. Celui qui attend « se fait poser un lapin ». EN: to stand someone up."),
    card(E(1229), 'Attendre pour rien', 'Image : planté sur place, comme un poireau dans la terre. Sens : attendre longtemps. Surtout en France. EN: to hang around waiting.'),
    card(E(1230), 'Personne', "Image : même pas un chat dans la rue. Sens : il n'y a personne. EN: there is not a soul."),
    card(E(1231), 'Trop de monde', "Image : des sardines dans une boîte. Sens : beaucoup trop de monde. Ici, l'anglais garde la même image. EN: packed like sardines."),
  ],
};

/** TELL APART: the literal rabbit and cat (the `animaux` theme), then the pictures. */
const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Qui attend, qui ne vient pas',
  groups: [
    grp('Du mot à l’image', [
      it('fr.a1.animaux.013', `le mot, dans ${ANIMAUX_THEME_FR}`),
      it(E(1228), "l'image : ne pas venir"),
      it('fr.a1.animaux.012', 'le mot'),
      it(E(1230), "l'image : personne"),
    ], chk(
      "« Il n'y a pas un chat. » Qu'est-ce qui manque dans la rue ?",
      ['des gens', 'un chat'], 0,
      "Les gens : le chat n'est qu'une image. EN: people are missing, not cats.")),
    grp('Le rendez-vous', [
      it(E(1232), 'Julien n’est pas venu'),
      it(E(1240), 'elle, elle attendait'),
      it(E(1233), 'une heure, pour rien'),
      it(E(1237), 'et sous la pluie'),
    ], chk(
      "« Elle s'est fait poser un lapin. » Qui n'est pas venu ?",
      ["l'autre personne", 'elle'], 0,
      "Elle attendait ; c'est l'autre qui n'est pas venu. EN: she was the one waiting.")),
    ctl('La foule', '« Serrés comme des sardines » : combien de monde ?',
      ['personne', 'quelques amis', 'beaucoup trop'], 2,
      "Une boîte pleine. EN: far too many."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'sens'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  itemIds: dicteeFor(3),
  audio: AUDIO,
  say: REFRAME,
  terms: ['bloc'],
};

/** USE: the situation picks the picture. */
const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Personne, ou trop de monde',
  groups: [
    grp('Personne', [
      it(E(1234), 'dimanche matin'),
      it(E(1238), 'à minuit'),
    ], chk(
      "Tu arrives au parc à minuit. Il n'y a personne. Tu dis :",
      ["Il n'y a pas un chat.", 'On est serrés comme des sardines.'], 0,
      "Personne : pas un chat. EN: not a soul.")),
    grp('Trop de monde', [
      it(E(1235), 'dans le métro'),
      it(E(1239), "dans l'ascenseur"),
    ], chk(
      'Le métro, à huit heures du matin, en semaine :',
      ["il n'y a pas un chat", 'on est serrés comme des sardines'], 1,
      "Trop de monde : des sardines. EN: packed like sardines.")),
    ctl('Le lapin', "L'an dernier, ton ami n'est pas venu à ta fête. Cette année, tu lui dis :",
      ['Ne me laisse pas debout cette fois.', 'Ne me pose pas de lapin cette fois.'], 1,
      "Le français dit lapin, et pas de après la négation. EN: a rabbit, with pas de."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contexte', 'image'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre images qui ne marchent pas',
  errors: [
    {
      wrong: "Julien m'a laissé debout hier soir.",
      right: fr(E(1232)),
      why: "Normal : l'anglais dit he stood me up. Mais laisser debout, en français, c'est ne pas offrir de chaise. EN: stood up is a rabbit in French.",
    },
    {
      wrong: "Dimanche matin, il n'y a pas un chien dans la rue.",
      right: fr(E(1234)),
      why: "Un chien paraît aussi logique qu'un chat. Mais l'image est fixe : pas un chat. EN: the picture is always a cat.",
    },
    {
      wrong: 'Dans le métro, on était serrés comme des poissons.',
      right: fr(E(1235)),
      why: "Des poissons, c'est presque ça. Mais l'image est une boîte : des sardines, comme en anglais. EN: sardines, as in English.",
    },
    {
      wrong: "Il ne m'a pas posé un lapin, il était malade.",
      right: fr(E(1241)),
      why: "Tu gardes l'expression entière, donc un lapin semble juste. Mais après pas, un devient de. EN: pas de after the negation.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motamot', 'bloc'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le lapin', '« Poser un lapin », c’est...',
    ['ne pas venir', 'arriver en retard'], 0,
    "Ne pas venir du tout, sans prévenir. EN: not coming at all."),
  ctl('Attendre', 'Tu attends longtemps, pour rien. Tu...',
    ['poses un lapin', 'poireautes'], 1,
    "Poireauter : attendre. Celui qui pose le lapin, c'est l'autre. EN: you are the one waiting."),
  ctl('Personne', "« Il n'y a pas un chat » veut dire...",
    ['il y a des chiens', 'il y a trop de monde', "il n'y a personne"], 2,
    "Personne, pas même un chat. EN: not a soul."),
], ['image', 'sens']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Poser un lapin',
    opener: {
      line: "Une chaise vide, une rue vide, un métro trop plein : ici tu dis attendre, ne pas venir, personne et trop de monde. EN: An empty chair, an empty street, a packed metro: here you say waiting, not showing up, nobody and too many.",
      imageRef: 'lessons/expressions-animaux/act03.jpg',
    },
    sections: [],
    milestone: "Tu dis qu'on t'a posé un lapin, que tu as poireauté, qu'il n'y avait pas un chat ou qu'on était serrés comme des sardines. EN: You can say you were stood up, kept waiting, alone in the street or packed in.",
    estScreens: 34, restPoints: ['a3-construire'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_DICTEE, A3_CHOISIR, A3_ERREURS, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — UNE POULE MOUILLÉE
 *
 *  Fear, nerves and courage. The act where English animals push hardest:
 *  chicken, the lion's den. And the first regional pair: des papillons dans
 *  l'estomac (Québec) and dans le ventre (France), both right.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: ten lines, some afraid, some brave. */
const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui a peur, qui fonce',
  frSub: 'Écoute, et range les gens',
  lines: [
    ln(E(1248)), ln(E(1249)), ln(E(1250)), ln(E(1251)), ln(E(1252)),
    ln(E(1253)), ln(E(1254)), ln(E(1255)), ln(E(1256)), ln(E(1257)),
  ],
  questions: [
    { q: 'Le frère a peur de quoi ?', opts: ['du noir', 'des poules'], correct: 0, why: "Du noir. La poule mouillée, c'est lui. EN: of the dark." },
    { q: 'Aller voir le patron maintenant, c’est...', opts: ['une bonne idée', 'dangereux'], correct: 1, why: "« La gueule du loup » : droit vers le danger. EN: walking into danger." },
    { q: 'Elle a appelé...', opts: ['sans attendre, avec courage', 'après une longue hésitation', 'un taureau'], correct: 0, why: "« Le taureau par les cornes » : elle a attaqué le problème. EN: she tackled it head on." },
    { q: 'Avant son entrevue, il était...', opts: ['calme', 'nerveux'], correct: 1, why: "« Des papillons dans l'estomac » : les nerfs. EN: butterflies." },
    { q: 'Pour sa fille, elle se bat...', opts: ['un peu', 'contre un lion', 'avec un grand courage'], correct: 2, why: "« Comme une lionne » : de toutes ses forces. EN: like a lioness." },
  ],
  audio: REC('rec-b1-28-peur-ecoute'),
  say: REFRAME,
  terms: ['sens', 'image'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-quotidien',
  title: 'La peur et le courage',
  frSub: 'Une poule, un loup, un taureau, un lion',
  hint: 'Sept cartes. Les deux dernières disent la même chose, dans deux pays.',
  audio: REC('rec-b1-28-peur-cartes'),
  say: REFRAME,
  terms: ['image', 'variante'],
  cards: [
    card(E(1242), 'Avoir peur de tout', "Image : une poule trempée, qui tremble dans un coin. Sens : avoir peur de tout. L'anglais dit chicken. EN: a scaredy-cat."),
    card(E(1243), 'Aller vers le danger', "Image : sauter dans la gueule ouverte du loup. Sens : aller tout seul vers le danger. L'anglais met un lion. EN: to walk into the lion's den."),
    card(E(1244), 'Attaquer le problème', "Image : attraper le taureau par devant. Sens : attaquer un problème de face. L'anglais garde la même image. EN: to take the bull by the horns."),
    card(E(1245), 'Beaucoup de courage', "Image : un lion qui défend les siens. Sens : se battre avec un grand courage. Pour une femme, on dit aussi : comme une lionne. EN: to fight like a lion."),
    card(E(1375), 'Des frissons', "Image : la peau d'une poule plumée, couverte de petits points. Sens : avoir des frissons, de froid ou d'émotion. L'anglais met une oie. EN: to have goosebumps."),
    card(E(1246), 'Nerveux, au Québec', "Image : des papillons qui volent dans le ventre. Sens : être nerveux, ou amoureux. EN: butterflies in your stomach."),
    card(E(1247), 'Nerveux, en France', "Image : la même. Sens : le même. La forme de France et de Belgique. Les deux sont justes. EN: butterflies in your stomach."),
  ],
};

/** TELL APART: the literal wolf (the `animaux` theme), then its picture. */
const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le loup, la poule, le taureau',
  groups: [
    grp('Du mot à l’image', [
      it('fr.a1.animaux.026', `le mot, dans ${ANIMAUX_THEME_FR}`),
      it(E(1243), "l'image : le danger"),
      it(E(1242), 'une poule trempée'),
      it(E(1248), 'le frère qui a peur du noir'),
    ], chk(
      '« Se jeter dans la gueule du loup » : il y a un loup ?',
      ['Oui, dans la forêt.', 'Non, un danger.'], 1,
      "Aucun loup : un danger qu'on choisit d'affronter seul. EN: no wolf, a danger.")),
    grp('La peur ou le courage', [
      it(E(1249), 'viens nager'),
      it(E(1251), 'elle a appelé'),
      it(E(1252), 'son emploi'),
      it(E(1257), 'sa fille'),
    ], chk(
      'Laquelle de ces personnes a peur ?',
      ['la poule mouillée', 'celle qui se bat comme une lionne'], 0,
      "La poule mouillée a peur ; la lionne se bat. EN: the wet hen is the scared one.")),
    ctl('Les nerfs', "« Des papillons dans l'estomac » : tu es...",
      ['malade', 'content de manger', 'nerveux'], 2,
      "Nerveux, ou amoureux. EN: nervous."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'sens'],
};

/** NAME the variation and the register, on real rows. */
const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  sheetId: 'sheet-lire',
  title: 'Deux pays, deux registres',
  examples: [
    ex(E(1253), "Au Québec : dans l'estomac, avant une entrevue."),
    ex(E(1254), 'En France : dans le ventre, avant un examen.'),
    ex(E(1251), 'Courant : tu peux le dire au travail.'),
    ex(E(1249), 'Familier : entre amis, pour se moquer gentiment.'),
    ex(E(1255), 'Un conseil, avec il faut et l’infinitif.'),
    ex(E(1256), 'Un avertissement, à un ami.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['variante', 'registre'],
};

/** USE: the situation, and the place, pick the picture. */
const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Foncer, ou trembler',
  groups: [
    grp('Les nerfs', [
      it(E(1253), 'à Montréal'),
      it(E(1254), 'à Lyon'),
    ], chk(
      'Tu es à Montréal, avant un spectacle, et ton cœur bat vite. Tu as des papillons...',
      ["dans l'estomac", 'dans le ventre'], 0,
      "Au Québec : dans l'estomac. En France : dans le ventre. Les deux sont justes. EN: Québec says estomac.")),
    grp('Foncer', [
      it(E(1251), 'elle a appelé'),
      it(E(1255), 'un conseil'),
    ], chk(
      'Ton problème dure depuis des mois. Ton amie te conseille :',
      ['Jette-toi dans la gueule du loup.', 'Prends le taureau par les cornes.'], 1,
      "Le taureau, c'est du courage utile. La gueule du loup, c'est un danger inutile. EN: the bull is good advice.")),
    ctl('La peur', 'Ton cousin refuse de monter dans la grande roue. Tu te moques gentiment :',
      ["C'est un lion.", "C'est une poule mouillée.", "C'est un loup."], 1,
      "Il a peur : une poule mouillée. EN: a scaredy-cat."),
    grp('Les frissons', [
      it(E(1375), "de froid, ou d'émotion"),
    ], chk(
      'Au concert, la chanson est si belle que tes bras frissonnent. Tu dis :',
      ["J'ai la chair de poule.", 'Je suis une poule mouillée.'], 0,
      "La chair de poule, c'est la peau qui frissonne, de froid ou d'émotion. La poule mouillée, c'est la peur. EN: goosebumps, not cowardice.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contexte', 'variante'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: "Quatre animaux venus de l'anglais",
  errors: [
    {
      wrong: "Mon frère a peur du noir, c'est un poulet.",
      right: fr(E(1248)),
      why: "Normal : l'anglais dit chicken. Mais un poulet, en français, c'est de la viande. La peur, c'est une poule mouillée. EN: a chicken is a wet hen in French.",
    },
    {
      wrong: 'Tu vas te jeter dans la bouche du loup.',
      right: fr(E(1256)),
      why: "Bouche est le mot normal. Mais pour un animal, on dit la gueule, et l'expression la garde. EN: an animal's mouth is gueule.",
    },
    {
      wrong: "Avant mon entrevue, j'avais des papillons dans mon estomac.",
      right: fr(E(1253)),
      why: "L'anglais dit my stomach. Le français met l'article : dans l'estomac, dans le ventre. EN: the article, not the possessive.",
    },
    {
      wrong: 'Il faut prendre le bœuf par les cornes.',
      right: fr(E(1255)),
      why: "Un bœuf a aussi des cornes, donc l'erreur est logique. Mais l'image est fixe : le taureau, comme en anglais. EN: the bull, as in English.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motamot', 'image'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La peur', 'Une poule mouillée, c’est quelqu’un qui...',
    ['a peur de tout', 'aime nager'], 0,
    "Qui a peur de tout. EN: a scaredy-cat."),
  ctl('Le Québec', 'Au Québec, les papillons sont dans...',
    ['le ventre', "l'estomac"], 1,
    "Dans l'estomac. En France, dans le ventre. EN: estomac in Québec."),
  ctl('Le courage', 'Prendre le taureau par les cornes, c’est...',
    ['fuir le problème', 'aller dans une ferme', 'attaquer le problème de face'], 2,
    "Attaquer le problème. EN: tackling it head on."),
], ['sens', 'variante']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Une poule mouillée',
    opener: {
      line: "Une poule trempée, un loup qui attend, un taureau qu'on attrape : ici tu dis la peur, les nerfs et le courage. EN: A soaked hen, a waiting wolf, a bull caught by the horns: here you talk about fear, nerves and courage.",
      imageRef: 'lessons/expressions-animaux/act04.jpg',
    },
    sections: [],
    milestone: "Tu dis la peur sans dire poulet, le danger avec un loup, le courage avec un taureau, et les papillons au Québec comme en France. EN: You talk about fear without a chicken, danger with a wolf, courage with a bull, and butterflies in both countries.",
    estScreens: 38, restPoints: ['a4-construire'],
  },
  sections: [A4_ECOUTE, A4_CARTES, A4_CONSTRUIRE, A4_EXEMPLES, A4_CHOISIR, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — UNE FAIM DE LOUP
 *
 *  Hunger and mood. The act of the VERB: every picture here comes with its
 *  own verb (avoir la pêche, être dans son assiette), and English « I am »
 *  pulls the learner towards être.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: lunch in a Brussels canteen. No « ? » or « ! » in any bubble. */
const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'À la cantine',
  frSub: 'Un grand plateau, un petit café',
  setting: "Une cantine d'entreprise à Bruxelles, en novembre, à midi. Tu déjeunes avec ton collègue Moussa.",
  bubbles: [
    { from: 'narrator', fr: "Moussa pose un grand plateau sur la table. Toi, tu n'as qu'un petit café.", en: 'Moussa puts a big tray down on the table. You only have a small coffee.' },
    { from: 'coach', fr: "J'ai une faim de loup, j'ai couru toute la matinée.", en: 'I am starving, I have been running around all morning.', warn: 'une faim de loup : très faim' },
    { from: 'user', fr: "Moi, je ne mange presque rien aujourd'hui.", en: 'I am hardly eating anything today.' },
    { from: 'coach', fr: 'Tu manges comme un oiseau, toi.', en: 'You eat like a bird, you.', warn: 'manger comme un oiseau : très peu' },
    { from: 'user', fr: 'Je ne suis pas dans mon assiette depuis hier.', en: 'I have been feeling off since yesterday.', warn: 'pas dans son assiette : pas en forme' },
    { from: 'coach', fr: "C'est le ciel gris. En novembre, ici, tout le monde a le cafard.", en: 'It is the grey sky. In November, round here, everybody feels down.', warn: 'avoir le cafard : être triste' },
    { from: 'user', fr: 'Et toi, tu as toujours la pêche.', en: 'And you are always full of beans.', warn: 'avoir la pêche : être en forme' },
    { from: 'coach', fr: "Ici, on dit aussi j'ai la frite. Mange un peu, ça aide.", en: 'Round here we also say j’ai la frite. Eat a little, it helps.', warn: 'avoir la frite : en Belgique et en France' },
  ],
  closing: { fr: 'Le loup, l’oiseau, la pêche, la frite, l’assiette, le cafard : ton ventre et ton moral, en images.', en: 'The wolf, the bird, the peach, the chip, the plate, the cockroach: your stomach and your mood, in pictures.' },
  audio: REC('rec-b1-28-cantine'),
  say: REFRAME,
  terms: ['image', 'sens'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-quotidien',
  title: 'La faim et l’humeur',
  frSub: 'Un loup, un oiseau, une pêche, une assiette',
  hint: 'Six cartes. Regarde bien le verbe de chaque expression.',
  audio: REC('rec-b1-28-humeur-cartes'),
  say: REFRAME,
  terms: ['image', 'bloc'],
  cards: [
    card(E(1258), 'Très faim', "Image : la faim d'un loup en hiver. Sens : avoir très faim. L'anglais mange un cheval. EN: to be starving."),
    card(E(1259), 'Très peu', "Image : un oiseau qui picore une miette. Sens : manger très peu. Ici, l'anglais garde la même image. EN: to eat like a bird."),
    card(E(1260), 'En pleine forme', "Image : une pêche ronde et bien mûre. Sens : être plein d'énergie. Avec avoir, jamais être. EN: to be full of beans."),
    card(E(1261), 'En forme, en France', "Image : une frite bien droite. Sens : le même que la pêche. Surtout en France et en Belgique. EN: to be on top form."),
    card(E(1262), 'Pas en forme', "Image : sorti de son assiette, pas à sa place. Sens : un peu malade, ou un peu triste. Avec être. EN: to feel out of sorts."),
    card(E(1263), 'Triste', "Image : un cafard, une petite bête noire. Sens : être triste, sans énergie. L'anglais a le blues. EN: to feel down."),
  ],
};

/** TELL APART: the literal peach and plate (a1.23 and its theme), then the pictures. */
const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le fruit, l’assiette, le moral',
  groups: [
    grp('Du mot à l’image', [
      it('fr.a1.cuisine.050', `le fruit (${FOOD_REF})`),
      it(E(1266), "l'image : en forme"),
      it('fr.a1.cuisine.025', 'le mot'),
      it(E(1268), "l'image : pas en forme"),
    ], chk(
      "« J'ai la pêche » : tu as un fruit dans la main ?",
      ['Oui, une pêche.', 'Non, tu es en forme.'], 1,
      "Aucun fruit : de l'énergie. EN: no fruit, just energy.")),
    grp('Le ventre', [
      it(E(1264), 'après le ski'),
      it(E(1265), 'ma sœur'),
      it(E(1272), "après l'école"),
    ], chk(
      'Qui mange très peu ?',
      ["les enfants après l'école", 'ma sœur'], 1,
      "Comme un oiseau : très peu. EN: like a bird."),
    ),
    ctl('Le verbe', 'Pour « en pleine forme », on dit...',
      ["j'ai la pêche", 'je suis la pêche', 'je fais la pêche'], 0,
      "Avoir la pêche. Faire la pêche, c'est aller pêcher des poissons. EN: faire la pêche is fishing."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'bloc'],
};

/** NAME the verb of each block, on real rows. */
const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  sheetId: 'sheet-quotidien',
  title: 'Avoir ou être : le verbe du bloc',
  examples: [
    ex(E(1266), 'avoir la pêche : avoir, jamais être.'),
    ex(E(1267), 'avoir la frite : le même verbe.'),
    ex(E(1268), 'être dans son assiette : être, avec mon, ton, son.'),
    ex(E(1270), 'pour il : son assiette.'),
    ex(E(1269), 'avoir le cafard : avoir.'),
    ex(E(1271), 'au pluriel : ils ont le cafard.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bloc'],
};

/** USE: how you feel picks the picture. */
const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Comment tu te sens',
  groups: [
    grp('La forme', [
      it(E(1273), 'bien dormi'),
      it(E(1266), 'ce matin'),
    ], chk(
      'Tu as dormi dix heures et tu veux courir. Tu dis :',
      ["J'ai le cafard.", "J'ai la pêche."], 1,
      "Plein d'énergie : la pêche. EN: full of beans.")),
    grp('Le moral', [
      it(E(1269), 'depuis son départ'),
      it(E(1271), 'en novembre'),
    ], chk(
      'Ton amie est partie vivre loin, et tu es triste. Tu dis :',
      ["J'ai le cafard.", "J'ai la frite.", "J'ai une faim de loup."], 0,
      "Triste : le cafard. EN: feeling down.")),
    ctl('Pas en forme', 'Tu as un peu mal au ventre et tu es fatigué. Tu dis :',
      ['Je mange comme un oiseau.', 'Je ne suis pas dans mon assiette.'], 1,
      "Pas bien, sans être vraiment malade. EN: out of sorts."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contexte', 'sens'],
};

/** TRAP, stepped: the verb of English « I am », and the English picture. */
const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Le nom et son verbe',
  rule: {
    title: 'Chaque image a son verbe',
    body: "On a la pêche, on a le cafard, on a une faim de loup. On n'est pas dans son assiette. L'anglais dit I am partout, et c'est là que le verbe glisse. EN: each picture has its verb; English I am pulls you towards être.",
  },
  cards: [
    { promptLabel: 'I was starving, avec être', promptSound: "Après le ski, j'étais une faim de loup.", fr: fr(E(1264)), ipa: ipaOf(E(1264)), tip: "Avoir une faim de loup. EN: avoir." },
    { promptLabel: 'I am on top form, avec être', promptSound: 'Ce matin, je suis la pêche.', fr: fr(E(1266)), ipa: ipaOf(E(1266)), tip: "Avoir la pêche. EN: avoir." },
    { promptLabel: "l'assiette avec avoir", promptSound: "Je n'ai pas mon assiette depuis hier.", fr: fr(E(1268)), ipa: ipaOf(E(1268)), tip: "Être dans son assiette. EN: être." },
    { promptLabel: 'the blues, mot à mot', promptSound: "Depuis son départ, j'ai les bleus.", fr: fr(E(1269)), ipa: ipaOf(E(1269)), tip: "Les bleus, ce sont des marques sur la peau. Le blues, c'est le cafard. EN: les bleus are bruises." },
    { promptLabel: "l'oiseau au pluriel", promptSound: 'Ma sœur mange comme des oiseaux.', fr: fr(E(1265)), ipa: ipaOf(E(1265)), tip: "Une sœur, un oiseau. EN: one bird." },
    { promptLabel: "l'assiette de quelqu'un d'autre", promptSound: "Il n'est pas dans mon assiette, il a mal dormi.", fr: fr(E(1270)), ipa: ipaOf(E(1270)), tip: "Il : son assiette. Le possessif suit la personne. EN: his own plate." },
  ],
  drill: [
    { promptSay: "Après le ski, j'avais une faim de ... .", opts: ['loup', 'chien'], correct: 0 },
    { promptSay: "Ce matin, j'... la pêche.", opts: ['suis', 'ai'], correct: 1 },
    { promptSay: 'Je ne ... pas dans mon assiette.', opts: ['suis', 'ai', 'fais'], correct: 0 },
    { promptSay: "Depuis son départ, j'ai le ... .", opts: ['bleu', 'chat', 'cafard'], correct: 2 },
    { promptSay: 'Ma sœur mange comme un ... .', opts: ['loup', 'oiseau'], correct: 1 },
    { promptSay: "Tu as la ... aujourd'hui.", opts: ['frite', 'patate'], correct: 0 },
    { promptSay: "Il n'est pas dans ... assiette.", opts: ['mon', 'son', 'ton'], correct: 1 },
    { promptSay: "Les enfants ont une faim de ... après l'école.", opts: ['cheval', 'loup'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Chaque image a son verbe' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le mauvais verbe raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-28-piege-humeur'),
  say: REFRAME,
  terms: ['bloc', 'motamot'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le verbe', "En pleine forme : j'... la pêche.",
    ['suis', 'ai'], 1,
    "Avoir la pêche. EN: avoir."),
  ctl('Le moral', 'Avoir le cafard, c’est être...',
    ['triste', 'en colère', 'affamé'], 0,
    "Triste, sans énergie. EN: feeling down."),
  ctl('La faim', 'Manger comme un oiseau, c’est manger...',
    ['beaucoup', 'très peu'], 1,
    "Très peu. EN: like a bird."),
], ['bloc', 'sens']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Une faim de loup',
    opener: {
      line: "Un loup affamé, une pêche bien mûre, une assiette vide : ici tu dis ta faim et ton humeur, avec le bon verbe. EN: A hungry wolf, a ripe peach, an empty plate: here you say how hungry you are and how you feel, with the right verb.",
      imageRef: 'lessons/expressions-animaux/act05.jpg',
    },
    sections: [],
    milestone: "Tu dis que tu as une faim de loup, la pêche ou le cafard, et que tu n'es pas dans ton assiette, sans te tromper de verbe. EN: You say you are starving, full of beans, down or out of sorts, each with its own verb.",
    estScreens: 51, restPoints: ['a5-construire', 'a5-choisir'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_CONSTRUIRE, A5_EXEMPLES, A5_CHOISIR, A5_PIEGE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — MALADE COMME UN CHIEN
 *
 *  Health and sleep, the waiting-room family. « Avoir un chat dans la gorge »
 *  is assigned to this lesson by name (corpus header): its key image is the
 *  cat, not the throat.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: a waiting room's worth of complaints. */
const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Dans la salle d’attente',
  frSub: 'Écoute, et dis ce qui ne va pas',
  lines: [
    ln(E(1279)), ln(E(1280)), ln(E(1281)), ln(E(1282)), ln(E(1283)),
    ln(E(1284)), ln(E(1285)), ln(E(1286)), ln(E(1287)), ln(E(1288)),
  ],
  questions: [
    { q: 'Première phrase : pourquoi la personne s’excuse-t-elle ?', opts: ['sa voix est enrouée', 'elle a un chat'], correct: 0, why: "« Un chat dans la gorge » : la voix enrouée. EN: a frog in the throat." },
    { q: 'Il faisait très chaud, et elle...', opts: ["s'est évanouie", 'a mangé des pommes'], correct: 0, why: "« Tomber dans les pommes » : s'évanouir. EN: to faint." },
    { q: 'Après les huîtres, il a été...', opts: ['très malade', 'un peu fatigué', 'content'], correct: 0, why: "« Malade comme un chien » : très malade. EN: sick as a dog." },
    { q: 'Le petit a...', opts: ['un cheval', 'une très forte fièvre'], correct: 1, why: "« Une fièvre de cheval » : très forte. EN: a raging fever." },
    { q: 'Après la randonnée, j’ai dormi...', opts: ['très bien', 'très mal'], correct: 0, why: "« Comme un loir » : très bien, très longtemps. EN: like a log." },
  ],
  audio: REC('rec-b1-28-sante-ecoute'),
  say: REFRAME,
  terms: ['sens', 'equivalent'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sante',
  title: 'La santé en images',
  frSub: 'Un chat, des pommes, un chien, un cheval, un loir',
  hint: "Cinq cartes. Regarde quelle image l'anglais garde.",
  audio: REC('rec-b1-28-sante-cartes'),
  say: REFRAME,
  terms: ['image', 'equivalent'],
  cards: [
    card(E(1274), 'Une voix enrouée', "Image : un chat coincé dans la gorge. Sens : avoir la voix enrouée. L'anglais met une grenouille. EN: a frog in your throat."),
    card(E(1275), "S'évanouir", "Image : tomber dans un tas de pommes. Sens : perdre connaissance. Toujours au pluriel : les pommes. EN: to faint."),
    card(E(1276), 'Très malade', "Image : un chien malade. Sens : être très malade. Ici, l'anglais garde la même image. EN: sick as a dog."),
    card(E(1277), 'Une forte fièvre', "Image : une fièvre assez forte pour un cheval. Sens : une très forte fièvre. EN: a raging fever."),
    card(E(1278), 'Très bien dormir', "Image : le loir, un petit animal qui dort tout l'hiver. Sens : dormir très bien, très longtemps. L'anglais dort comme une bûche. EN: to sleep like a log."),
  ],
};

/** TELL APART: the literal apple and dog, then the pictures. */
const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'La pomme, le chien, le loir',
  groups: [
    grp('Du mot à l’image', [
      it('fr.a1.cuisine.003', 'le fruit'),
      it(E(1275), "l'image : s'évanouir"),
      it('fr.a1.animaux.001', `le mot, dans ${ANIMAUX_THEME_FR}`),
      it(E(1276), "l'image : très malade"),
    ], chk(
      '« Elle est tombée dans les pommes. » Où est-elle tombée ?',
      ['par terre, évanouie', 'dans un panier de pommes'], 0,
      "Par terre : elle a perdu connaissance. EN: she fainted.")),
    grp('La voix et le sommeil', [
      it(E(1279), 'en réunion'),
      it(E(1284), 'sur scène'),
      it(E(1283), 'après la randonnée'),
      it(E(1287), 'les enfants'),
    ], chk(
      '« Dormir comme un loir », c’est dormir...',
      ['très mal', 'très bien'], 1,
      "Très bien, et longtemps. EN: like a log.")),
    ctl('La fièvre', '« Une fièvre de cheval », c’est...',
      ['la fièvre d’un cheval', 'une très forte fièvre', 'une petite fièvre'], 1,
      "Une très forte fièvre, chez une personne. EN: a raging fever."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'sens'],
};

const A6_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a6-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  itemIds: dicteeFor(6),
  audio: AUDIO,
  say: REFRAME,
  terms: ['bloc'],
};

/** USE: the situation, and the person you talk to, pick the picture. */
const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Chez le médecin, en réunion',
  groups: [
    grp('Chez le médecin', [
      it(E(1282), 'le petit'),
      it(E(1288), 'appelle le médecin'),
    ], chk(
      'Ton fils a quarante de fièvre. Tu dis au médecin :',
      ['Il a une fièvre de cheval.', 'Il dort comme un loir.'], 0,
      "Une très forte fièvre : de cheval. EN: a raging fever.")),
    grp('La voix', [
      it(E(1279), 'en réunion'),
      it(E(1284), 'sur scène'),
    ], chk(
      'Tu commences une réunion, et ta voix ne sort pas bien. Tu dis :',
      ['Excusez-moi, je tombe dans les pommes.', "Excusez-moi, j'ai un chat dans la gorge."], 1,
      "La voix enrouée : un chat dans la gorge. C'est courant, possible en réunion. EN: fine in a meeting.")),
    ctl('Le registre', 'Tu écris à ton patron que tu es malade. Quelle phrase va le mieux ?',
      ['Je suis malade comme un chien.', 'Je suis malade et je reste chez moi.'], 1,
      "Malade comme un chien est familier : pour un ami. Au patron, dis-le simplement. EN: familier suits a friend, not your boss."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contexte', 'registre'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre images de travers',
  errors: [
    {
      wrong: "Excusez-moi, j'ai une grenouille dans la gorge.",
      right: fr(E(1279)),
      why: "Normal : l'anglais dit a frog in my throat. Le français a mis un chat à sa place. EN: the frog is a cat in French.",
    },
    {
      wrong: "Après la randonnée, j'ai dormi comme une bûche.",
      right: fr(E(1283)),
      why: "L'anglais dort comme une bûche, a log. Le français dort comme un loir, qui dort tout l'hiver. EN: a dormouse, not a log.",
    },
    {
      wrong: "Il faisait si chaud qu'elle est tombée dans la pomme.",
      right: fr(E(1280)),
      why: "Une seule chute, donc une seule pomme : c'est logique. Mais le bloc est au pluriel : dans les pommes. EN: always plural.",
    },
    {
      wrong: 'Le petit a une fièvre de chien.',
      right: fr(E(1282)),
      why: "Le chien est déjà pris : malade comme un chien. La fièvre, c'est un cheval. EN: the fever belongs to a horse.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motamot', 'image'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La voix', '« Un chat dans la gorge », en anglais :',
    ['a frog in the throat', 'a cat in the throat'], 0,
    "Une grenouille en anglais, un chat en français. EN: a frog."),
  ctl('Le malaise', 'Tomber dans les pommes, c’est...',
    ['faire les courses', "s'évanouir"], 1,
    "Perdre connaissance. EN: to faint."),
  ctl('Le sommeil', 'Tu as dormi dix heures sans bouger. Tu as dormi comme...',
    ['un chien', 'un cheval', 'un loir'], 2,
    "Un loir. EN: like a log."),
], ['equivalent', 'image']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Malade comme un chien',
    opener: {
      line: "Un chat dans la gorge, un tas de pommes, un loir qui dort : ici tu dis la santé et le sommeil en images. EN: A cat in the throat, a heap of apples, a sleeping dormouse: here you talk about health and sleep in pictures.",
      imageRef: 'lessons/expressions-animaux/act06.jpg',
    },
    sections: [],
    milestone: "Tu dis la voix enrouée, le malaise, la grosse fièvre et la bonne nuit, et tu sais quand garder l'image pour un ami seulement. EN: You can describe a croaky voice, fainting, a high fever and a good night's sleep, and you know when an idiom is for friends only.",
    estScreens: 33, restPoints: ['a6-construire'],
  },
  sections: [A6_ECOUTE, A6_CARTES, A6_CONSTRUIRE, A6_DICTEE, A6_CHOISIR, A6_ERREURS, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — DES SALADES
 *
 *  Lies, secrets and dodging. « Donner sa langue au chat » is assigned to
 *  this lesson by name. The trap is English « fishy »: French hides an eel
 *  under a rock and never says a secret smells of fish.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a surprise being hidden in a Lyon flat. No « ? » or « ! ». */
const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Un secret dans le salon',
  frSub: 'Quelque chose se prépare',
  setting: "Un appartement partagé à Lyon, un vendredi soir. Tes colocs Hugo et Lina chuchotent dans le salon. Inès, ta meilleure amie, est dans la cuisine.",
  bubbles: [
    { from: 'narrator', fr: 'Hugo et Lina se taisent quand tu entres dans le salon.', en: 'Hugo and Lina go quiet when you walk into the living room.' },
    { from: 'user', fr: fr(E(1296)), en: src(E(1296)).en, warn: 'anguille sous roche : on cache quelque chose' },
    { from: 'coach', fr: 'Mais non, tu en fais tout un fromage.', en: 'Of course not, you are making a big fuss about it.', warn: 'en faire tout un fromage : exagérer' },
    { from: 'user', fr: "Hugo m'a dit qu'il réparait son vélo. Il raconte des salades.", en: 'Hugo told me he was fixing his bike. He is telling stories.', warn: 'raconter des salades : mentir' },
    { from: 'user', fr: 'Et toi, quand je te pose la question, tu noies le poisson.', en: 'And you, when I ask you, you change the subject.', warn: 'noyer le poisson : ne pas répondre' },
    { from: 'coach', fr: 'Devine plutôt ce qu’on mange ce soir.', en: 'Guess what we are eating tonight instead.' },
    { from: 'user', fr: fr(E(1299)), en: src(E(1299)).en, warn: 'donner sa langue au chat : arrêter de chercher' },
    { from: 'coach', fr: "Une fondue. Et arrête de faire l'autruche : demain, c'est ton anniversaire.", en: 'A fondue. And stop burying your head in the sand: tomorrow is your birthday.', warn: "faire l'autruche : ne pas vouloir voir" },
  ],
  closing: { fr: "Une anguille, des salades, un poisson, un chat, une autruche, un fromage : ce qu'on cache, et ce qu'on exagère.", en: 'An eel, salads, a fish, a cat, an ostrich, a cheese: what people hide, and what they blow up.' },
  audio: REC('rec-b1-28-secret'),
  say: REFRAME,
  terms: ['image', 'sens'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sante',
  title: 'Mentir, cacher, ne pas répondre',
  frSub: 'Des salades, une anguille, une autruche',
  hint: 'Six cartes. Trois pour cacher, trois pour parler de travers.',
  audio: REC('rec-b1-28-secret-cartes'),
  say: REFRAME,
  terms: ['image', 'equivalent'],
  cards: [
    card(E(1289), 'Mentir', "Image : une salade, où tout est mélangé. Sens : dire des mensonges, des histoires inventées. EN: to tell tall stories."),
    card(E(1290), 'Un secret', "Image : une anguille cachée sous une pierre. Sens : on nous cache quelque chose. L'anglais dit fishy. EN: something fishy is going on."),
    card(E(1291), 'Ne pas répondre', "Image : noyer un poisson, ce qui ne marche jamais. Sens : parler d'autre chose pour ne pas répondre. EN: to cloud the issue."),
    card(E(1292), 'Ne pas voir le problème', "Image : l'autruche qui cache sa tête dans le sable. Sens : refuser de voir un problème. EN: to bury your head in the sand."),
    card(E(1293), 'Arrêter de chercher', "Image : donner sa langue au chat, qui garde les secrets. Sens : arrêter de chercher et demander la réponse. Pas d'image en anglais. EN: to give up guessing."),
    card(E(1294), 'Exagérer', "Image : tout un fromage, fait avec un peu de lait. Sens : faire un grand problème d'une petite chose. EN: to make a big fuss about it."),
  ],
};

const A7_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-tableau',
  layer: 'core',
  sheetId: 'sheet-sante',
  title: 'Six expressions, six situations',
  cols: ['Expression', 'Registre', 'En anglais'],
  rows: [
    { cells: [fr(E(1289)), 'familier', 'to tell tall stories'], say: fr(E(1295)),
      detail: { title: 'Raconter des salades', body: "Toujours au pluriel. EN: always plural.", say: fr(E(1301)) } },
    { cells: [fr(E(1290)), 'courant', 'something fishy'], say: fr(E(1296)),
      detail: { title: 'Anguille sous roche', body: "Sans article : il y a anguille. EN: no article.", say: fr(E(1296)) } },
    { cells: [fr(E(1291)), 'courant', 'to cloud the issue'], say: fr(E(1297)),
      detail: { title: 'Noyer le poisson', body: "Souvent pour un politicien. EN: often about politicians.", say: fr(E(1302)) } },
    { cells: [fr(E(1292)), 'courant', 'to bury your head in the sand'], say: fr(E(1298)),
      detail: { title: "Faire l'autruche", body: "Avec faire, comme un rôle. EN: with faire.", say: fr(E(1304)) } },
    { cells: [fr(E(1293)), 'courant', 'to give up guessing'], say: fr(E(1299)),
      detail: { title: 'Sa langue au chat', body: "Après une devinette. EN: after a riddle.", say: fr(E(1303)) } },
    { cells: [fr(E(1294)), 'familier', 'to make a big fuss'], say: fr(E(1300)),
      detail: { title: 'Tout un fromage', body: "Souvent à la forme négative. EN: often in the negative.", say: fr(E(1300)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent', 'registre'],
};

/** TELL APART: the literal salad and cheese (a1.23), then the pictures. */
const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'La salade, le fromage, le poisson',
  groups: [
    grp('Du mot à l’image', [
      it('fr.a1.cuisine.020', `le mot (${FOOD_REF})`),
      it(E(1289), "l'image : mentir"),
      it('fr.a1.cuisine.011', `le mot (${FOOD_REF})`),
      it(E(1294), "l'image : exagérer"),
    ], chk(
      '« Raconter des salades » : de quoi parle-t-on ?',
      ['de mensonges', 'de légumes'], 0,
      "De mensonges. La salade, c'est l'image. EN: lies.")),
    grp('Cacher ou fuir', [
      it(E(1296), 'on chuchote'),
      it(E(1297), 'le ministre'),
      it(E(1298), 'toute ta vie'),
      it(E(1302), 'elle change de sujet'),
    ], chk(
      '« Noyer le poisson », c’est...',
      ["parler d'autre chose pour ne pas répondre", 'aller à la pêche'], 0,
      "Ne pas répondre, en parlant d'autre chose. EN: dodging.")),
    ctl('La devinette', "Tu ne trouves pas la réponse d'une devinette. Tu dis :",
      ['Je noie le poisson.', 'Je donne ma langue au chat.', "Je fais l'autruche."], 1,
      "Tu arrêtes de chercher : ta langue au chat. EN: I give up."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'sens'],
};

/** USE: which of the six fits what is happening. */
const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Mentir, cacher, exagérer',
  groups: [
    grp('Un mensonge', [
      it(E(1295), 'arrête'),
      it(E(1301), 'à tout le monde'),
    ], chk(
      "Ton neveu dit qu'il a vu un ours au parc La Fontaine. Tu ris :",
      ['Tu racontes des salades.', 'Il y a anguille sous roche.'], 0,
      "Une histoire inventée : des salades. EN: a tall story.")),
    grp('Ne pas voir', [
      it(E(1304), 'la facture'),
      it(E(1298), 'toute ta vie'),
    ], chk(
      'Ta voisine ne lit plus ses factures depuis trois mois. Elle...',
      ["fait l'autruche", 'noie le poisson'], 0,
      "Elle ne veut pas voir le problème. EN: head in the sand.")),
    ctl('Exagérer', 'Ton ami est furieux pour une petite tache sur son t-shirt. Tu lui dis :',
      ['Arrête de raconter des salades.', "N'en fais pas tout un fromage."], 1,
      "Il exagère : tout un fromage. EN: do not make a fuss."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contexte', 'sens'],
};

/** TRAP, stepped: English « fishy » and its cousins carried across. */
const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: "Les poissons de l'anglais",
  rule: {
    title: "L'anglais a ses propres poissons",
    body: "L'anglais dit fishy ; le français cache une anguille sous une roche. L'anglais enterre sa tête dans le sable ; le français fait l'autruche. Et un mensonge est une salade. EN: fishy is an eel; head in the sand is an ostrich.",
  },
  cards: [
    { promptLabel: 'fishy, mot à mot', promptSound: 'Ils chuchotent depuis ce matin, ça sent le poisson.', fr: fr(E(1296)), ipa: ipaOf(E(1296)), tip: "Ça sent le poisson parle d'une odeur. Le secret, c'est l'anguille. EN: an eel under a rock." },
    { promptLabel: 'bury your head, mot à mot', promptSound: 'Tu ne peux pas enterrer ta tête dans le sable toute ta vie.', fr: fr(E(1298)), ipa: ipaOf(E(1298)), tip: "Le français nomme l'oiseau : faire l'autruche. EN: the ostrich." },
    { promptLabel: 'le poisson au lieu de la salade', promptSound: 'Arrête de me raconter des poissons.', fr: fr(E(1295)), ipa: ipaOf(E(1295)), tip: "Des salades. EN: salads, not fish." },
    { promptLabel: 'le poisson au lieu du chat', promptSound: 'Je ne sais pas, je donne ma langue au poisson.', fr: fr(E(1299)), ipa: ipaOf(E(1299)), tip: "Au chat, qui garde les secrets. EN: to the cat." },
    { promptLabel: 'un fromage sans tout', promptSound: "Ce n'est qu'une tache, n'en fais pas un fromage.", fr: fr(E(1300)), ipa: ipaOf(E(1300)), tip: "Tout un fromage : le bloc garde tout. EN: tout un, a whole one." },
    { promptLabel: 'le chat au lieu du poisson', promptSound: 'Le ministre a noyé le chat.', fr: fr(E(1297)), ipa: ipaOf(E(1297)), tip: "On noie le poisson. EN: the fish." },
  ],
  drill: [
    { promptSay: 'Il raconte des ... à tout le monde.', opts: ['salades', 'poissons'], correct: 0 },
    { promptSay: 'Il y a ... sous roche.', opts: ['anguille', 'poisson'], correct: 0 },
    { promptSay: 'Quand je pose la question, elle noie le ... .', opts: ['chat', 'poisson'], correct: 1 },
    { promptSay: "Tu ne peux pas faire l'... toute ta vie.", opts: ['autruche', 'anguille', 'oiseau'], correct: 0 },
    { promptSay: 'Je ne sais pas, je donne ma langue au ... .', opts: ['chien', 'chat'], correct: 1 },
    { promptSay: "N'en fais pas tout un ... .", opts: ['gâteau', 'poisson', 'fromage'], correct: 2 },
    { promptSay: 'Arrête de me raconter des ... .', opts: ['salades', 'poissons'], correct: 0 },
    { promptSay: "Il a fait l'... et la facture a doublé.", opts: ['anguille', 'autruche'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: "L'anglais a ses propres poissons" },
    { label: 'Six cartes', kind: 'cards', title: "Ce que l'image anglaise raconte" },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-28-piege-secret'),
  say: REFRAME,
  terms: ['motamot', 'image'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Mentir', 'Raconter des salades, c’est...',
    ['mentir', 'cuisiner'], 0,
    "Dire des mensonges. EN: lying."),
  ctl('Un secret', '« Il y a anguille sous roche » veut dire...',
    ['il y a un poisson dans la rivière', 'on nous cache quelque chose'], 1,
    "Quelque chose se cache. EN: something fishy."),
  ctl('Exagérer', 'En faire tout un fromage, c’est...',
    ['aimer le fromage', 'garder un secret', 'exagérer un petit problème'], 2,
    "Exagérer. EN: making a fuss."),
], ['sens', 'motamot']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Des salades',
    opener: {
      line: "Une anguille sous une pierre, une autruche dans le sable : ici tu dis le mensonge, le secret et la question qu'on évite. EN: An eel under a stone, an ostrich in the sand: here you talk about lies, secrets and dodged questions.",
      imageRef: 'lessons/expressions-animaux/act07.jpg',
    },
    sections: [],
    milestone: "Tu dis qu'on te raconte des salades, qu'il y a anguille sous roche ou qu'on noie le poisson, sans jamais sentir le poisson. EN: You can say someone is lying, hiding something or dodging, without a fishy smell.",
    estScreens: 51, restPoints: ['a7-tableau', 'a7-choisir'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_TABLEAU, A7_CONSTRUIRE, A7_CHOISIR, A7_PIEGE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — C'EST DU GÂTEAU
 *
 *  Easy, hard and busy, at work. The second regional pair: une poule pas de
 *  tête (Québec) and un poulet sans tête (France). The trap is English « a
 *  piece of cake », which French eats whole.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: Mathieu's email to his team in Québec. */
const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courriel de Mathieu',
  frSub: 'Lis, et trouve ce qui est facile',
  text: COURRIEL_TEXT,
  glossary: [
    { word: 'offre', en: 'offer, bid', note: 'Le prix et les conditions proposés au client.' },
    { word: 'dîner', en: 'lunch (Québec)', note: 'Au Québec, le dîner est le repas de midi.' },
    { word: 'blagues', en: 'jokes', note: 'Des histoires pour faire rire.' },
    { word: 'coche', en: 'ticks off', note: 'Faire une petite marque devant une tâche finie.' },
  ],
  questions: [
    { q: "Pourquoi l'équipe a-t-elle du pain sur la planche ?", a: "Le client arrive jeudi et rien n'est prêt : beaucoup de travail." },
    { q: 'La présentation, c’est facile ?', a: "Non : « ce n'est pas de la tarte ». Mais les chiffres, pour Léa et Samuel, « c'est du gâteau »." },
    { q: 'Pourquoi faut-il marcher sur des œufs avec ce client ?', a: "Il n'a pas aimé la dernière offre : il faut faire très attention." },
    { q: 'Pourquoi un dîner avec lui ?', a: "« Ça ne mange pas de pain » : ça ne coûte rien d'essayer." },
    { q: "Qu'est-ce que Mathieu a fait lundi ?", a: "Il a couru « comme une poule pas de tête » : dans tous les sens. En France, on dit comme un poulet sans tête." },
  ],
  audio: REC('rec-b1-28-courriel'),
  say: REFRAME,
  terms: ['sens', 'variante'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sante',
  title: 'Facile, difficile, débordé',
  frSub: 'Un gâteau, une tarte, du pain, des œufs',
  hint: 'Sept cartes. Les deux dernières disent la même chose, dans deux pays.',
  audio: REC('rec-b1-28-effort-cartes'),
  say: REFRAME,
  terms: ['image', 'variante'],
  cards: [
    card(E(1305), 'Très facile', "Image : un gâteau, facile et bon à manger. Sens : c'est très facile. L'anglais en prend un morceau. EN: it is a piece of cake."),
    card(E(1306), 'Pas facile', "Image : ce n'est pas une tarte, douce et facile. Sens : c'est difficile. À l'oral : c'est pas de la tarte. EN: it is no picnic."),
    card(E(1307), 'Beaucoup de travail', "Image : du pain qui attend sur la planche du boulanger. Sens : avoir beaucoup de travail devant soi. EN: to have a lot on your plate."),
    card(E(1308), 'Faire très attention', "Image : marcher sur des œufs sans les casser. Sens : faire très attention à ce qu'on dit. EN: to walk on eggshells."),
    card(E(1309), 'Ça ne coûte rien', "Image : ça ne coûte même pas un morceau de pain. Sens : ça ne coûte rien d'essayer. EN: there is no harm in trying."),
    card(E(1310), 'Débordé, au Québec', "Image : une poule qui court partout, sans tête. Sens : courir dans tous les sens, sans organisation. EN: like a headless chicken."),
    card(E(1311), 'Débordé, en France', "Image : la même, avec un poulet. Sens : le même. Les deux sont justes. EN: like a headless chicken."),
  ],
};

/** TELL APART: the literal cake, bread and egg (a1.23 and its theme). */
const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le gâteau, le pain, les œufs',
  groups: [
    grp('Du mot à l’image', [
      it('fr.a1.cuisine.062', `le mot (${FOOD_REF})`),
      it(E(1312), "l'image : très facile"),
      it('fr.a1.cuisine.002', `le mot (${FOOD_REF})`),
      it(E(1314), "l'image : beaucoup de travail"),
    ], chk(
      "« J'ai du pain sur la planche » : tu es boulanger ?",
      ['Oui, tu fais du pain.', 'Non, tu as beaucoup de travail.'], 1,
      "Aucun boulanger : beaucoup de travail. EN: a lot on your plate.")),
    grp('Facile ou pas', [
      it(E(1318), 'pour toi'),
      it(E(1313), 'à Montréal'),
      it('fr.a1.cuisine.013', 'le mot'),
      it(E(1315), 'avec le beau-père'),
    ], chk(
      "« Ce n'est pas de la tarte » veut dire...",
      ["c'est difficile", "c'est facile"], 0,
      "Pas une tarte : pas facile. EN: no picnic.")),
    ctl('Essayer', '« Ça ne mange pas de pain » veut dire...',
      ["il n'y a plus de pain", "ça ne coûte rien d'essayer", "on n'a pas faim"], 1,
      "Essaie : tu ne perds rien. EN: no harm in trying."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'sens'],
};

/** NAME it in four lines, linked to the sheet. */
const A8_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a8-focus',
  layer: 'core',
  sheetId: 'sheet-sante',
  title: 'Facile ou pas : ce qu’il faut retenir',
  points: [
    "Facile : c'est du gâteau. Difficile : ce n'est pas de la tarte. EN: cake is easy; no tart is hard.",
    "Du gâteau, jamais un morceau : le morceau est anglais. EN: no piece in French.",
    'Du pain sur la planche est courant : possible au bureau. EN: fine at work.',
    'La poule pas de tête est du Québec ; en France, un poulet sans tête. EN: two forms, two countries.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent', 'variante'],
};

/** USE: the situation picks the picture. */
const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Au travail, à table',
  groups: [
    grp('Au travail', [
      it(E(1319), 'avant le déménagement'),
      it(E(1314), 'cette semaine'),
    ], chk(
      'Tu as trois rapports à finir avant vendredi. Tu dis à ta collègue :',
      ["J'ai du pain sur la planche.", "C'est du gâteau."], 0,
      "Beaucoup de travail : du pain sur la planche. EN: a lot on your plate.")),
    grp('Avec les gens', [
      it(E(1320), 'après la dispute'),
      it(E(1316), 'demande-lui'),
    ], chk(
      'Ton oncle se fâche pour un rien. À table, avec lui, tu...',
      ['cours comme une poule pas de tête', 'marches sur des œufs'], 1,
      "Tu fais très attention : des œufs. EN: on eggshells.")),
    ctl('Essayer', 'Tu hésites à demander une réduction. Ton ami te dit :',
      ["Demande, ce n'est pas de la tarte.", 'Demande, ça ne mange pas de pain.'], 1,
      "Ça ne coûte rien : ça ne mange pas de pain. EN: no harm in asking."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contexte', 'sens'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre gâteaux ratés',
  errors: [
    {
      wrong: "L'examen de conduite, c'est un morceau de gâteau.",
      right: fr(E(1312)),
      why: "Normal : l'anglais dit a piece of cake. Le français garde le gâteau, sans le morceau. EN: no piece.",
    },
    {
      wrong: "Avec mon beau-père, je marche sur des coquilles d'œufs.",
      right: fr(E(1315)),
      why: "L'anglais marche sur les coquilles, eggshells. Le français marche sur les œufs entiers. EN: whole eggs.",
    },
    {
      wrong: "Cette semaine, j'ai du pain sur la table.",
      right: fr(E(1314)),
      why: "La table paraît logique pour du pain. Mais le travail attend sur la planche du boulanger. EN: the baker's board, not the table.",
    },
    {
      wrong: 'Essaie, ça ne coûte pas de pain.',
      right: fr(E(1321)),
      why: "L'idée de coûter est juste. Mais le bloc garde son verbe : ça ne mange pas de pain. EN: the verb is manger.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motamot', 'bloc'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Facile', "« C'est du gâteau » : c'est...",
    ['difficile', 'très facile'], 1,
    "Très facile. EN: a piece of cake."),
  ctl('Le travail', 'Avoir du pain sur la planche, c’est...',
    ['avoir beaucoup de travail', 'faire du pain'], 0,
    "Beaucoup de travail. EN: a lot on your plate."),
  ctl('Le Québec', 'Au Québec, on court comme une poule...',
    ['sans tête', 'mouillée', 'pas de tête'], 2,
    "Pas de tête, au Québec. EN: the Québec form."),
], ['sens', 'variante']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: "C'est du gâteau",
    opener: {
      line: "Un gâteau tout simple, du pain qui attend, des œufs sur le sol : ici tu dis ce qui est facile, difficile ou délicat. EN: A simple cake, bread waiting, eggs on the floor: here you say what is easy, hard or delicate.",
      imageRef: 'lessons/expressions-animaux/act08.jpg',
    },
    sections: [],
    milestone: "Tu dis c'est du gâteau et ce n'est pas de la tarte, tu as du pain sur la planche, et tu marches sur des œufs sans coquilles. EN: You say easy, hard, busy and careful, without a piece or a shell.",
    estScreens: 29, restPoints: ['a8-construire'],
  },
  sections: [A8_LECTURE, A8_CARTES, A8_CONSTRUIRE, A8_FOCUS, A8_CHOISIR, A8_ERREURS, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — TÊTU COMME UNE MULE
 *
 *  Portraits: adjective + comme + animal (or food). Eight, the maximum for
 *  an act. The act where English often keeps the SAME picture (mule, ox,
 *  lamb, fox), so the reframe is tested where it looks least needed: the
 *  message crosses and the picture happens to match. The two real traps are
 *  the bat that becomes a mole, and the adjective that must agree.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: ten portraits of a family and its neighbours. */
const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La famille, en dix portraits',
  frSub: 'Écoute, et dis qui est comment',
  lines: [
    ln(E(1330)), ln(E(1331)), ln(E(1332)), ln(E(1333)), ln(E(1334)),
    ln(E(1335)), ln(E(1336)), ln(E(1337)), ln(E(1338)), ln(E(1339)),
  ],
  questions: [
    { q: 'Le père change facilement d’avis ?', opts: ['Non, jamais.', 'Oui, tout le temps.'], correct: 0, why: "« Têtu comme une mule » : il ne change jamais d'avis. EN: stubborn." },
    { q: 'La nièce est...', opts: ['un peu lente', 'très maligne', 'très bavarde'], correct: 1, why: "« Maligne comme un singe » : elle trouve toujours une solution. EN: sharp." },
    { q: 'Sans lunettes, la personne voit...', opts: ['très bien', 'très mal'], correct: 1, why: "« Myope comme une taupe » : très mal. EN: blind as a bat." },
    { q: 'La voisine...', opts: ['parle tout le temps', 'ne parle jamais'], correct: 0, why: "« Bavarde comme une pie » : elle parle sans arrêt. EN: a chatterbox." },
    { q: 'Leur chien est...', opts: ['méchant', 'très doux', 'très fort'], correct: 1, why: "« Doux comme un agneau ». EN: gentle as a lamb." },
    { q: 'Le vendeur est...', opts: ['très rusé', 'très gentil'], correct: 0, why: "« Rusé comme un renard » : attention à lui. EN: sly as a fox." },
  ],
  audio: REC('rec-b1-28-portraits-ecoute'),
  say: REFRAME,
  terms: ['comparaison', 'sens'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-portraits',
  title: 'Huit portraits en « comme »',
  frSub: 'Adjectif, comme, un animal',
  hint: "Huit cartes. Cherche celles où l'anglais garde le même animal.",
  audio: REC('rec-b1-28-portraits-cartes'),
  say: REFRAME,
  terms: ['comparaison', 'equivalent'],
  cards: [
    card(E(1322), 'Très têtu', "Image : une mule qui refuse d'avancer. Sens : qui ne change jamais d'avis. L'anglais garde la même image. EN: stubborn as a mule."),
    card(E(1323), 'Très malin', "Image : un singe qui trouve toujours une astuce. Sens : très débrouillard. Au féminin : maligne. EN: sharp as a tack."),
    card(E(1324), 'Voir très mal', "Image : la taupe, qui vit sous la terre. Sens : voir très mal. L'anglais met une chauve-souris. EN: blind as a bat."),
    card(E(1325), 'Tout petit', "Image : trois pommes l'une sur l'autre. Sens : tout petit, pour un enfant. L'anglais met une sauterelle. EN: knee-high to a grasshopper."),
    card(E(1326), 'Qui parle tout le temps', "Image : la pie, un oiseau qui crie sans arrêt. Sens : qui parle sans arrêt. EN: a real chatterbox."),
    card(E(1327), 'Très fort', "Image : un bœuf qui tire une charrette. Sens : très fort. L'anglais garde la même image. EN: strong as an ox."),
    card(E(1328), 'Très doux', "Image : un petit agneau. Sens : très doux, jamais méchant. L'anglais garde la même image. EN: gentle as a lamb."),
    card(E(1329), 'Très rusé', "Image : le renard des contes, qui trompe tout le monde. Sens : très rusé. L'anglais garde la même image. EN: sly as a fox."),
  ],
};

/** TELL APART: the literal mole and monkey, then agreement. */
const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: "L'adjectif bouge, l'animal non",
  groups: [
    grp('Du mot à l’image', [
      it('fr.a1.animaux.075', `le mot, dans ${ANIMAUX_THEME_FR}`),
      it(E(1332), "l'image : voir très mal"),
      it('fr.a1.animaux.029', 'le mot'),
      it(E(1331), "l'image : très maligne"),
    ], chk(
      "« Myope comme une taupe » : en anglais, l'animal est...",
      ['une taupe', 'une chauve-souris'], 1,
      "Blind as a bat : une chauve-souris. Le français met une taupe. EN: a bat in English.")),
    grp("L'accord", [
      it(E(1330), 'mon père : têtu'),
      it(E(1338), 'ma grand-mère : têtue'),
      it(E(1334), 'ma voisine : bavarde'),
      it(E(1331), 'ta nièce : maligne'),
    ], chk(
      '« Ma grand-mère est ... comme une mule. »',
      ['têtue', 'têtu'], 0,
      "Une grand-mère : têtue. L'adjectif suit la personne. EN: the adjective agrees.")),
    ctl("L'animal", 'Pour un homme qui parle tout le temps, on dit : bavard comme...',
      ['un pie', 'une pie'], 1,
      "L'animal ne change pas : une pie, même pour un homme. EN: the animal never changes."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['comparaison', 'image'],
};

/** Consolidation, as answers: English front, French back. No « EN: » on a back. */
const A9_CARTES_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a9-flash',
  layer: 'core',
  title: 'Huit portraits, dans les deux sens',
  cards: [
    { front: 'stubborn as a mule', back: 'têtu comme une mule', say: fr(E(1330)) },
    { front: 'sharp as a tack', back: 'malin comme un singe', say: fr(E(1331)) },
    { front: 'blind as a bat', back: 'myope comme une taupe', say: fr(E(1332)) },
    { front: 'knee-high to a grasshopper', back: 'haut comme trois pommes', say: fr(E(1333)) },
    { front: 'a real chatterbox', back: 'bavard comme une pie', say: fr(E(1334)) },
    { front: 'strong as an ox', back: 'fort comme un bœuf', say: fr(E(1335)) },
    { front: 'gentle as a lamb', back: 'doux comme un agneau', say: fr(E(1336)) },
    { front: 'sly as a fox', back: 'rusé comme un renard', say: fr(E(1337)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['comparaison', 'equivalent'],
};

/** USE: the person picks the portrait. */
const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Qui est comment',
  groups: [
    grp('La force et la douceur', [
      it(E(1335), 'le frigo'),
      it(E(1336), 'leur chien'),
    ], chk(
      'Ton voisin porte le frigo tout seul. Il est...',
      ['doux comme un agneau', 'fort comme un bœuf'], 1,
      "Très fort : un bœuf. EN: strong as an ox.")),
    grp('Petits et grands', [
      it(E(1333), 'depuis longtemps'),
      it(E(1339), 'leur fils'),
    ], chk(
      "Tu parles d'un enfant de trois ans. Il est...",
      ['haut comme trois pommes', 'myope comme une taupe'], 0,
      "Tout petit : trois pommes. EN: knee-high.")),
    ctl('Attention', 'Le vendeur te propose une affaire trop belle. Tu penses : il est...',
      ['doux comme un agneau', 'rusé comme un renard', 'bavard comme une pie'], 1,
      "Il veut te tromper : un renard. EN: sly as a fox."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contexte', 'comparaison'],
};

/** TRAP, stepped: the English animal, and the adjective that forgets to agree. */
const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Le bon animal, le bon accord',
  rule: {
    title: "L'adjectif bouge, l'animal non",
    body: "L'adjectif prend le genre de la personne : têtue, maligne, bavarde. L'animal ne change jamais : une mule, même pour un homme. Et parfois l'anglais change d'animal : la chauve-souris devient une taupe. EN: the adjective agrees, the animal stays, the bat becomes a mole.",
  },
  cards: [
    { promptLabel: 'blind as a bat, mot à mot', promptSound: 'Sans lunettes, je suis aveugle comme une chauve-souris.', fr: fr(E(1332)), ipa: ipaOf(E(1332)), tip: "Le français met une taupe, et dit myope. EN: a mole." },
    { promptLabel: "l'adjectif au masculin", promptSound: 'Ma grand-mère est têtu comme une mule.', fr: fr(E(1338)), ipa: ipaOf(E(1338)), tip: "Une grand-mère : têtue. EN: feminine." },
    { promptLabel: 'la pie au masculin', promptSound: 'Ma voisine est bavarde comme un pie.', fr: fr(E(1334)), ipa: ipaOf(E(1334)), tip: "Une pie, toujours. EN: une pie." },
    { promptLabel: 'knee-high, mot à mot', promptSound: 'Je te connais depuis que tu es haut comme une sauterelle.', fr: fr(E(1333)), ipa: ipaOf(E(1333)), tip: "Trois pommes l'une sur l'autre. EN: three apples." },
    { promptLabel: 'sharp as a tack, mot à mot', promptSound: 'Ta nièce est pointue comme une punaise.', fr: fr(E(1331)), ipa: ipaOf(E(1331)), tip: "Le français met un singe, et malin devient maligne. EN: a monkey." },
    { promptLabel: "l'agneau au féminin", promptSound: 'Leur chien est doux comme une agneau.', fr: fr(E(1336)), ipa: ipaOf(E(1336)), tip: "Un agneau, masculin. EN: un agneau." },
  ],
  drill: [
    { promptSay: 'Mon père est têtu comme une ... .', opts: ['mule', 'pie'], correct: 0 },
    { promptSay: 'Ma grand-mère est ... comme une mule.', opts: ['têtu', 'têtue'], correct: 1 },
    { promptSay: 'Sans lunettes, je suis myope comme une ... .', opts: ['chauve-souris', 'taupe'], correct: 1 },
    { promptSay: 'Ta nièce est ... comme un singe.', opts: ['maligne', 'malin'], correct: 0 },
    { promptSay: 'Leur fils est haut comme trois ... .', opts: ['poires', 'pommes', 'œufs'], correct: 1 },
    { promptSay: 'Ma voisine est bavarde comme une ... .', opts: ['pie', 'poule'], correct: 0 },
    { promptSay: 'Il porte le frigo seul, il est fort comme un ... .', opts: ['agneau', 'renard', 'bœuf'], correct: 2 },
    { promptSay: 'Attention, le vendeur est rusé comme un ... .', opts: ['loup', 'renard'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: "L'adjectif bouge, l'animal non" },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le mauvais portrait raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-28-piege-portraits'),
  say: REFRAME,
  terms: ['comparaison', 'motamot'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl("L'accord", 'Pour ta sœur : elle est ... comme une pie.',
    ['bavarde', 'bavard'], 0,
    "Ta sœur : bavarde. EN: feminine."),
  ctl('La taupe', '« Blind as a bat », en français :',
    ['aveugle comme une chauve-souris', 'myope comme une taupe'], 1,
    "Une taupe, et myope. EN: a mole."),
  ctl('Petit', 'Haut comme trois pommes, c’est...',
    ['très grand', 'tout petit', 'très gros'], 1,
    "Tout petit. EN: knee-high."),
], ['comparaison', 'equivalent']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Têtu comme une mule',
    opener: {
      line: "Une mule qui refuse, une pie qui bavarde, un renard qui sourit : ici tu fais le portrait des gens avec des animaux. EN: A mule that refuses, a chattering magpie, a smiling fox: here you describe people with animals.",
      imageRef: 'lessons/expressions-animaux/act09.jpg',
    },
    sections: [],
    milestone: "Tu décris quelqu'un avec un adjectif, comme et un animal, tu accordes l'adjectif et tu gardes l'animal, et la chauve-souris est devenue une taupe. EN: You describe people with adjective + comme + animal, agree the adjective, keep the animal, and the bat is now a mole.",
    estScreens: 54, restPoints: ['a9-construire', 'a9-choisir'],
  },
  sections: [A9_ECOUTE, A9_CARTES, A9_CONSTRUIRE, A9_CARTES_FLASH, A9_CHOISIR, A9_PIEGE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — REVENONS À NOS MOUTONS
 *
 *  Other people: meddling, priorities, compromise, and getting a
 *  conversation back to the point. The act where REGISTER costs the most:
 *  « occupe-toi de tes oignons » is fine with a brother and rude to a boss,
 *  and « revenons à nos moutons » is the one that works in a meeting.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a Sunday family supper in Québec City. No « ? » or « ! ». */
const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'Le souper du dimanche',
  frSub: 'Chacun donne son avis',
  setting: "Dimanche soir, souper de famille à Québec. Tu annonces que tu pars vivre un an à Lyon. Ton oncle Marc a un avis sur tout. Ta tante Sylvie est à côté de toi.",
  bubbles: [
    { from: 'narrator', fr: 'Ton oncle Marc donne son avis sur ton travail, ton loyer et ta valise.', en: 'Your uncle Marc gives his opinion on your job, your rent and your suitcase.' },
    { from: 'coach', fr: 'Marc, occupe-toi de tes oignons.', en: 'Marc, mind your own business.', warn: 'occupe-toi de tes oignons : ne te mêle pas de ça' },
    { from: 'user', fr: 'Il met toujours son grain de sel, mais il est gentil.', en: 'He always sticks his oar in, but he means well.', warn: 'mettre son grain de sel : donner son avis quand personne ne l’a demandé' },
    { from: 'coach', fr: "Moi, j'ai d'autres chats à fouetter que ses conseils.", en: 'I have better things to do than his advice.', warn: "d'autres chats à fouetter : des choses plus importantes" },
    { from: 'user', fr: 'Pour sa voiture, il veut quarante dollars, moi trente. On coupe la poire en deux.', en: 'For his car he wants forty dollars and I want thirty. We will split the difference.', warn: 'couper la poire en deux : faire un compromis' },
    { from: 'coach', fr: 'Et ta mère ménage la chèvre et le chou : elle ne dit rien.', en: 'And your mother keeps everyone happy: she says nothing.', warn: 'ménager la chèvre et le chou : ne fâcher personne' },
    { from: 'user', fr: "Bon, revenons à nos moutons : il me faut quelqu'un pour l'aéroport.", en: 'Right, back to the point: I need someone for the airport.', warn: 'revenons à nos moutons : revenons au sujet' },
  ],
  closing: { fr: 'Des oignons, du sel, des chats, une poire, une chèvre, des moutons : les autres, les disputes, et le vrai sujet.', en: 'Onions, salt, cats, a pear, a goat, sheep: other people, arguments, and the real point.' },
  audio: REC('rec-b1-28-souper'),
  say: REFRAME,
  terms: ['image', 'registre'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-nouvelles',
  title: 'Les autres, et le vrai sujet',
  frSub: 'Des oignons, une poire, des moutons',
  hint: 'Six cartes. Regarde le registre avant de les dire.',
  audio: REC('rec-b1-28-autres-cartes'),
  say: REFRAME,
  terms: ['image', 'registre'],
  cards: [
    card(E(1340), 'Ne te mêle pas de ça', "Image : va t'occuper de ton jardin, de tes oignons. Sens : ce n'est pas ton affaire. Familier et sec : jamais avec un patron. EN: mind your own business."),
    card(E(1341), 'Donner son avis', "Image : ajouter son grain de sel dans le plat d'un autre. Sens : donner son avis quand personne ne l'a demandé. EN: to put your two cents in."),
    card(E(1342), 'Plus important à faire', "Image : d'autres chats qui attendent. Sens : avoir des choses plus importantes à faire. L'anglais fait frire des poissons. EN: other fish to fry."),
    card(E(1343), 'Un compromis', "Image : une poire, une moitié chacun. Sens : chacun fait la moitié du chemin. EN: to split the difference."),
    card(E(1344), 'Ne fâcher personne', "Image : garder la chèvre et le chou, alors que la chèvre veut manger le chou. Sens : ne fâcher personne. Pas d'image en anglais. EN: to keep both sides happy."),
    card(E(1345), 'Revenir au sujet', "Image : un berger qui retourne à ses moutons. Sens : revenons au vrai sujet. Courant : parfait en réunion. EN: back to the point."),
  ],
};

const A10_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a10-tableau',
  layer: 'core',
  sheetId: 'sheet-nouvelles',
  title: 'À qui le dire',
  cols: ['Expression', 'Registre', 'Avec qui'],
  rows: [
    { cells: [fr(E(1340)), 'familier', 'un proche, jamais un patron'], say: fr(E(1346)),
      detail: { title: 'Tes oignons', body: "Sec, même avec s'il te plaît. EN: blunt, even with please.", say: fr(E(1346)) } },
    { cells: [fr(E(1341)), 'familier', 'amis, famille'], say: fr(E(1347)),
      detail: { title: 'Le grain de sel', body: "Souvent un reproche gentil. EN: a gentle complaint.", say: fr(E(1352)) } },
    { cells: [fr(E(1342)), 'courant', 'tout le monde'], say: fr(E(1348)),
      detail: { title: 'Les chats à fouetter', body: "Une façon polie de dire non. EN: a polite no.", say: fr(E(1354)) } },
    { cells: [fr(E(1343)), 'courant', 'au travail aussi'], say: fr(E(1349)),
      detail: { title: 'La poire en deux', body: "Pour un prix, une date, une tâche. EN: price, date, task.", say: fr(E(1353)) } },
    { cells: [fr(E(1344)), 'courant', 'au travail aussi'], say: fr(E(1350)),
      detail: { title: 'La chèvre et le chou', body: "Souvent pour un chef prudent. EN: often about a careful boss.", say: fr(E(1350)) } },
    { cells: [fr(E(1345)), 'courant', 'en réunion'], say: fr(E(1351)),
      detail: { title: 'Nos moutons', body: "Pour ramener la discussion, sans vexer. EN: to steer back, politely.", say: fr(E(1355)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'contexte'],
};

/** TELL APART: the literal sheep and pear (a1.23 and the animaux theme). */
const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Les moutons, la poire, le sel',
  groups: [
    grp('Du mot à l’image', [
      it('fr.a1.animaux.017', `le mot, dans ${ANIMAUX_THEME_FR}`),
      it(E(1351), "l'image : revenir au sujet"),
      it('fr.a1.cuisine.047', `le fruit (${FOOD_REF})`),
      it(E(1353), "l'image : un compromis"),
    ], chk(
      '« Revenons à nos moutons » : il y a des moutons dans la réunion ?',
      ['Oui, on parle de la ferme.', 'Non, on revient au sujet.'], 1,
      "Aucun mouton : le vrai sujet. EN: back to the point.")),
    grp('Les autres', [
      it(E(1346), "s'il te plaît"),
      it(E(1347), 'mon oncle'),
      it(E(1352), 'leur dispute'),
      it(E(1354), 'tes histoires'),
    ], chk(
      '« Mettre son grain de sel », c’est...',
      ["donner son avis quand personne ne l'a demandé", 'saler la soupe'], 0,
      "Un avis que personne n'a demandé. EN: two cents nobody asked for.")),
    ctl('Le compromis', 'Tu veux quarante dollars, ton ami trente. Vous finissez à trente-cinq. Vous avez...',
      ['ménagé la chèvre et le chou', 'coupé la poire en deux', 'mis votre grain de sel'], 1,
      "Chacun la moitié du chemin. EN: split the difference."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'sens'],
};

/** USE: the person in front of you picks the expression. */
const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'En réunion, en famille',
  groups: [
    grp('En réunion', [
      it(E(1355), 'le budget'),
      it(E(1350), 'le directeur'),
    ], chk(
      'En réunion, un collègue parle de ses vacances depuis dix minutes. Tu dis poliment :',
      ['Occupe-toi de tes oignons.', 'Excusez-moi, revenons à nos moutons.'], 1,
      "Courant et poli : revenons à nos moutons. EN: fine in a meeting.")),
    grp('En famille', [
      it(E(1346), 'ton frère'),
      it(E(1348), 'pas le temps'),
    ], chk(
      'Ton frère lit tes messages par-dessus ton épaule. Tu lui dis :',
      ['Occupe-toi de tes oignons.', 'Coupons la poire en deux.'], 0,
      "Avec un frère, le familier passe. EN: fine with a brother.")),
    ctl('Personne de fâché', "Ta cheffe ne veut fâcher ni les clients ni l'équipe. Elle...",
      ['ménage la chèvre et le chou', "a d'autres chats à fouetter"], 0,
      "Elle garde tout le monde content. EN: keeping both sides happy."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'contexte'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: "Quatre erreurs d'image ou de registre",
  errors: [
    {
      wrong: "Désolé, j'ai d'autres poissons à frire.",
      right: fr(E(1348)),
      why: "Normal : l'anglais dit other fish to fry. Le français, lui, a des chats à fouetter. EN: cats, not fish.",
    },
    {
      wrong: 'Mon oncle met toujours ses deux cents.',
      right: fr(E(1347)),
      why: "L'anglais donne ses two cents. Le français ajoute son grain de sel. EN: a grain of salt.",
    },
    {
      wrong: 'Monsieur le directeur, occupez-vous de vos oignons.',
      right: 'Monsieur le directeur, revenons à nos moutons.',
      why: "Le vous a l'air poli, mais l'expression reste sèche. Au patron, ramène plutôt la discussion au sujet. EN: vous cannot make this one polite.",
    },
    {
      wrong: 'Bon, revenons à nos chèvres.',
      right: fr(E(1351)),
      why: "La chèvre existe dans une autre expression, avec le chou. Ici, ce sont des moutons. EN: sheep here; the goat goes with the cabbage.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motamot', 'registre'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le sujet', 'Revenons à nos moutons, c’est...',
    ['revenons au sujet', 'allons à la ferme'], 0,
    "Au vrai sujet. EN: back to the point."),
  ctl('Le compromis', 'Couper la poire en deux, c’est...',
    ['partager un fruit', 'faire un compromis'], 1,
    "Un compromis. EN: splitting the difference."),
  ctl('Le registre', '« Occupe-toi de tes oignons » est...',
    ['poli, pour un patron', 'courant, pour tout le monde', 'familier et sec, pour un proche'], 2,
    "Familier et sec. EN: blunt, for people close to you."),
], ['registre', 'sens']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Revenons à nos moutons',
    opener: {
      line: "Un oncle qui sale le plat des autres, une poire coupée en deux, un berger et ses moutons : ici tu parles des autres, et tu ramènes la discussion au sujet. EN: An uncle salting other people's food, a pear cut in two, a shepherd and his sheep: here you talk about other people and steer back to the point.",
      imageRef: 'lessons/expressions-animaux/act10.jpg',
    },
    sections: [],
    milestone: "Tu dis ne te mêle pas de ça à un proche, tu coupes la poire en deux, et tu ramènes une réunion à ses moutons sans vexer personne. EN: You can tell a relative to butt out, split the difference, and bring a meeting back to the point without offending.",
    estScreens: 39, restPoints: ['a10-tableau'],
  },
  sections: [A10_HISTOIRE, A10_CARTES, A10_TABLEAU, A10_CONSTRUIRE, A10_CHOISIR, A10_ERREURS, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — LA CERISE SUR LE GÂTEAU
 *
 *  Good news and bad news, the family an anecdote needs most: the extra
 *  that makes it perfect, the money that helps, the moment it is lost, the
 *  mock catastrophe, and celebrating too early.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: Élise's news from Brussels. */
const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "Les nouvelles d'Élise",
  frSub: 'Lis, et trie le bon et le moins bon',
  text: NOUVELLES_TEXT,
  glossary: [
    { word: "maison d'édition", en: 'publishing house', note: 'Une entreprise qui fait des livres.' },
    { word: 'traductions', en: 'translations', note: 'Des textes passés dans une autre langue.' },
    { word: 'propriétaire', en: 'landlord', note: "La personne à qui est l'appartement." },
    { word: 'visites', en: 'viewings', note: 'Des rendez-vous pour voir un appartement.' },
  ],
  questions: [
    { q: 'Le salaire suffit-il à Élise ?', a: "Pas tout à fait : ses traductions « mettent du beurre dans les épinards », un peu plus d'argent." },
    { q: 'Quelle est « la cerise sur le gâteau » ?', a: 'Le bureau est à dix minutes à pied : le petit plus.' },
    { q: "Et l'appartement ?", a: "« Les carottes sont cuites » : c'est perdu, il est loué à quelqu'un d'autre." },
    { q: 'Élise est-elle désespérée ?', a: "Non : « ce n'est pas la fin des haricots », elle a encore deux visites." },
    { q: 'Pourquoi parle-t-elle de la peau de l’ours ?', a: "Son frère la voit déjà avec une maison. Elle répond : pas trop vite, rien n'est fait." },
  ],
  audio: REC('rec-b1-28-nouvelles'),
  say: REFRAME,
  terms: ['contexte', 'sens'],
};

const A11_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a11-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-nouvelles',
  title: 'Les bonnes et les mauvaises nouvelles',
  frSub: 'Une cerise, du beurre, des carottes, des haricots',
  hint: 'Cinq cartes. Deux bonnes nouvelles, deux mauvaises, un conseil.',
  audio: REC('rec-b1-28-nouvelles-cartes'),
  say: REFRAME,
  terms: ['image', 'contexte'],
  cards: [
    card(E(1356), 'Le petit plus', "Image : la cerise posée en haut du gâteau. Sens : le détail qui rend une bonne chose parfaite. L'anglais met du glaçage. EN: the icing on the cake."),
    card(E(1357), "Un peu plus d'argent", "Image : du beurre qui rend les épinards meilleurs. Sens : un peu plus d'argent, et la vie devient plus facile. EN: to make life a bit easier."),
    card(E(1358), "C'est fini", "Image : des carottes trop cuites, on ne peut plus rien changer. Sens : c'est perdu, trop tard. EN: the game is up."),
    card(E(1359), 'La catastrophe, pour rire', "Image : plus un haricot dans la marmite. Sens : c'est la catastrophe. Souvent pour rire. EN: that is the last straw."),
    card(E(1360), 'Pas trop vite', "Image : vendre la peau d'un ours encore vivant. Sens : fêter trop tôt. L'anglais compte ses poussins. EN: do not count your chickens."),
  ],
};

/** TELL APART: the literal cherry, carrot, butter, spinach and beans (a1.23). */
const A11_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-construire',
  layer: 'core',
  size: 'lg',
  title: 'Au marché, puis dans la vie',
  groups: [
    grp('Du mot à l’image', [
      it('fr.a1.cuisine.049', 'le fruit'),
      it(E(1361), "l'image : le petit plus"),
      it('fr.a1.cuisine.033', `le légume (${FOOD_REF})`),
      it(E(1363), "l'image : c'est fini"),
    ], chk(
      '« Les carottes sont cuites » : c’est une bonne nouvelle ?',
      ['Oui, le repas est prêt.', "Non, c'est fini, c'est perdu."], 1,
      "Trop tard pour changer. EN: the game is up.")),
    grp('Le beurre et les légumes', [
      it('fr.a1.cuisine.012', `le mot (${FOOD_REF})`),
      it('fr.a1.cuisine.089', 'le légume'),
      it(E(1362), "l'image : un peu plus d'argent"),
      it('fr.a1.cuisine.095', 'le légume'),
    ], chk(
      '« Mettre du beurre dans les épinards », c’est...',
      ["gagner un peu plus d'argent", 'cuisiner'], 0,
      "Un peu plus d'argent, et la vie est plus douce. EN: making life easier.")),
    ctl('Trop tôt', "Tu fêtes ta promotion avant l'entretien. Ton amie te dit : ne vends pas...",
      ['la cerise', "la peau de l'ours", 'les haricots'], 1,
      "La peau de l'ours, avant de l'avoir tué. EN: do not count your chickens."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'sens'],
};

/** Three tricks for picking the right news. */
const A11_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a11-hacks',
  layer: 'core',
  title: 'Trois astuces pour les nouvelles',
  hacks: [
    { hack: 'Sucré en haut, trop cuit en bas.', why: "Une cerise se pose sur un gâteau réussi ; des carottes trop cuites ne se sauvent plus. EN: the cherry tops a success; overcooked carrots cannot be saved." },
    { hack: 'La fin des haricots, souvent pour rire.', why: "Plus de café au bureau : on exagère exprès. Pour un vrai drame, dis-le simplement. EN: often ironic; say real bad news plainly." },
    { hack: "Avant de fêter, pense à l'ours.", why: "Tant que rien n'est signé, la peau de l'ours n'est pas à vendre. EN: nothing is yours until it is signed." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contexte', 'sens'],
};

/** USE: the news picks the picture. */
const A11_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Bonne ou mauvaise nouvelle',
  groups: [
    grp('Une bonne nouvelle', [
      it(E(1366), 'il fait beau'),
      it(E(1367), 'un deuxième emploi'),
    ], chk(
      'Tu as trouvé un appartement, et en plus il a un balcon. Le balcon, c’est...',
      ['la fin des haricots', 'la cerise sur le gâteau'], 1,
      "Le petit plus : la cerise. EN: the icing on the cake.")),
    grp('Une mauvaise nouvelle', [
      it(E(1368), 'trois à zéro'),
      it(E(1364), 'plus de café'),
    ], chk(
      "Le dernier train est parti, et il n'y a plus de taxi. Tu dis :",
      ['Les carottes sont cuites.', 'Ça met du beurre dans les épinards.'], 0,
      "C'est perdu : les carottes. EN: that is that.")),
    ctl('Trop tôt', 'Ton ami a passé un entretien hier, et il parle déjà de son nouveau bureau. Tu dis :',
      ["C'est la cerise sur le gâteau.", "Ne vends pas la peau de l'ours avant de l'avoir tué."], 1,
      "Rien n'est signé : l'ours. EN: do not count your chickens."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contexte', 'sens'],
};

/** TRAP, stepped: good and bad swapped, and the English picture. */
const A11_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a11-piege',
  layer: 'core',
  swipe: true,
  title: 'La bonne nouvelle, la bonne image',
  rule: {
    title: "Bonne ou mauvaise, et l'image entière",
    body: "La cerise et le beurre sont de bonnes nouvelles ; les carottes cuites et la fin des haricots, de mauvaises. Le glaçage et les poussins restent anglais. EN: cherry and butter are good, carrots and beans are bad.",
  },
  cards: [
    { promptLabel: 'the icing on the cake, mot à mot', promptSound: 'Et le glaçage sur le gâteau : il fait beau.', fr: fr(E(1366)), ipa: ipaOf(E(1366)), tip: "Le français met une cerise. EN: a cherry." },
    { promptLabel: 'count your chickens, mot à mot', promptSound: 'Ne compte pas tes poussins trop tôt.', fr: fr(E(1365)), ipa: ipaOf(E(1365)), tip: "Le français vend la peau de l'ours. EN: the bear's skin." },
    { promptLabel: 'une bonne image, une mauvaise nouvelle', promptSound: "Le train est parti sans nous, c'est la cerise sur le gâteau.", fr: fr(E(1363)), ipa: ipaOf(E(1363)), tip: "Une mauvaise nouvelle : les carottes sont cuites. EN: bad news takes the carrots." },
    { promptLabel: 'le beurre sur les épinards', promptSound: 'Ce petit contrat met du beurre sur les épinards.', fr: fr(E(1362)), ipa: ipaOf(E(1362)), tip: "Dans les épinards. EN: dans." },
    { promptLabel: 'le haricot au singulier', promptSound: "Plus de café au bureau, c'est la fin du haricot.", fr: fr(E(1364)), ipa: ipaOf(E(1364)), tip: "Des haricots, au pluriel. EN: plural." },
    { promptLabel: 'des carottes pas cuites', promptSound: 'On perd trois à zéro, les carottes sont prêtes.', fr: fr(E(1368)), ipa: ipaOf(E(1368)), tip: "Cuites : trop tard pour changer. EN: cooked means done for." },
  ],
  drill: [
    { promptSay: 'Et la ... sur le gâteau : il fait beau.', opts: ['cerise', 'crème'], correct: 0 },
    { promptSay: 'Les carottes sont ... .', opts: ['crues', 'cuites'], correct: 1 },
    { promptSay: "Plus de café, c'est la fin des ... .", opts: ['haricots', 'carottes'], correct: 0 },
    { promptSay: 'Ce contrat met du beurre dans les ... .', opts: ['haricots', 'épinards', 'carottes'], correct: 1 },
    { promptSay: "Ne vends pas la peau de l'... avant de l'avoir tué.", opts: ['loup', 'ours'], correct: 1 },
    { promptSay: 'Il a eu le poste, et le salaire, c’est la cerise sur le ... .', opts: ['gâteau', 'pain'], correct: 0 },
    { promptSay: 'Le train est parti sans nous, les ... sont cuites.', opts: ['carottes', 'pommes'], correct: 0 },
    { promptSay: 'Un deuxième emploi, ça met du ... dans les épinards.', opts: ['sel', 'fromage', 'beurre'], correct: 2 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: "Bonne ou mauvaise, et l'image entière" },
    { label: 'Six cartes', kind: 'cards', title: "Ce que l'image fausse raconte" },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-28-piege-nouvelles'),
  say: REFRAME,
  terms: ['contexte', 'motamot'],
};

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Bonne nouvelle', 'La cerise sur le gâteau, c’est...',
    ['le petit plus', 'la catastrophe'], 0,
    "Le détail qui rend tout parfait. EN: the icing on the cake."),
  ctl('Mauvaise nouvelle', '« Les carottes sont cuites » veut dire...',
    ['le repas est prêt', "c'est fini, c'est perdu"], 1,
    "C'est perdu. EN: the game is up."),
  ctl('Trop tôt', '« Don’t count your chickens », en français :',
    ['ne compte pas tes poulets', "ne vends pas la peau de l'ours", "c'est la fin des haricots"], 1,
    "L'ours, pas les poulets. EN: the bear."),
], ['contexte', 'equivalent']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'La cerise sur le gâteau',
    opener: {
      line: "Une cerise tout en haut, des carottes trop cuites, un ours encore dans la forêt : ici tu annonces les bonnes et les mauvaises nouvelles. EN: A cherry on top, overcooked carrots, a bear still in the forest: here you break good news and bad.",
      imageRef: 'lessons/expressions-animaux/act11.jpg',
    },
    sections: [],
    milestone: "Tu dis le petit plus, l'argent qui aide, le moment où tout est perdu, la fausse catastrophe, et tu sais ne pas fêter trop tôt. EN: You can give good news and bad, joke about a disaster, and warn against celebrating too soon.",
    estScreens: 41, restPoints: ['a11-construire'],
  },
  sections: [A11_LECTURE, A11_CARTES, A11_CONSTRUIRE, A11_HACKS, A11_CHOISIR, A11_PIEGE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TA JOURNÉE EN IMAGES
 *
 *  The production act: Awa's reply as the model, a plan, a role play, the
 *  graded anecdote, then the quiz. The task is graded on FIT, not count
 *  (shapes doc §2.2): an idiom counts only where it says what the story
 *  means.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET the model: eight expressions, one per idea, in a real anecdote. */
const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "La réponse d'Awa",
  frSub: 'La forme que tu vas écrire',
  text: ANECDOTE_TEXT,
  glossary: [
    { word: "entretien d'embauche", en: 'job interview', note: 'Un rendez-vous pour obtenir un travail.' },
    { word: 'La veille', en: 'The day before', note: 'Le jour avant.' },
    { word: 'la directrice', en: 'the manager', note: 'La femme qui dirige.' },
    { word: 'le poste', en: 'the job', note: 'Le travail proposé.' },
  ],
  questions: [
    { q: 'Comment était Awa la veille ?', a: "Nerveuse : « des papillons dans le ventre ». Et elle s'est couchée « avec les poules », très tôt." },
    { q: "Pourquoi est-elle arrivée juste à l'heure ?", a: 'Le bus avançait « comme un escargot ».' },
    { q: 'Comment a-t-elle répondu aux questions difficiles ?', a: "Sans noyer le poisson : elle a « pris le taureau par les cornes »." },
    { q: 'Quelle est la cerise sur le gâteau ?', a: 'Elle commence en janvier.' },
    { q: 'Combien d’expressions Awa met-elle dans une phrase ?', a: "Jamais plus d'une. Chaque image porte une idée, et l'histoire reste claire." },
  ],
  audio: REC('rec-b1-28-anecdote'),
  say: REFRAME,
  terms: ['contexte', 'image'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  sheetId: 'sheet-lire',
  title: 'Cinq étapes pour ton anecdote',
  steps: [
    "1. Choisis une vraie journée : un problème, puis une fin. EN: a real day, with a problem and an ending.",
    "2. Écris d'abord l'histoire sans image, en phrases simples. EN: write it plainly first.",
    "3. Remplace cinq ou six idées par une expression : le temps, l'attente, l'humeur, la nouvelle. EN: swap five or six ideas for idioms.",
    '4. Vérifie chaque image : le bon animal, le bon aliment, le bon verbe. EN: check each picture and its verb.',
    '5. Relis pour ton lecteur : un ami, familier ; un collègue, courant. EN: match the register to your reader.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bloc', 'registre'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    uc('Tu racontes ton samedi à un ami', E(1370)),
    uc('Tu expliques un retard', E(1371)),
    uc('Tu dis que tu avais très faim', E(1372)),
    uc('Tu finis sur une bonne nouvelle', E(1373)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contexte'],
};

/** Say it out loud first: six turns on the phone with Chloé. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'Au téléphone avec Chloé',
  setting: "Dimanche soir. Chloé t'appelle pour savoir comment s'est passée ta semaine. Réponds avec une image quand elle aide.",
  turns: [
    {
      ai: 'Salut ! Alors, ta semaine ?',
      en: 'Hi! So, how was your week?',
      user: fr(E(1370)),
      userEn: 'On Saturday the weather was foul and I felt low. (Weather and mood: two pictures, two ideas.)',
      alts: [
        { fr: 'Pas terrible : il faisait un froid de canard.', en: 'Not great: it was freezing. (The cold, not the rain: also right.)' },
        { fr: "Je n'étais pas dans mon assiette.", en: 'I was feeling off. (être, not avoir.)' },
      ],
    },
    {
      ai: 'Et ton rendez-vous avec Julien ?',
      en: 'And your date with Julien?',
      user: fr(E(1371)),
      userEn: 'I hung around for twenty minutes, then he turned up. (poireauter: waiting around.)',
      alts: [
        { fr: "Il ne m'a pas posé de lapin, cette fois.", en: 'He did not stand me up this time. (pas de after the negation.)' },
        { fr: "Il est arrivé en retard, mais il est venu.", en: 'He arrived late, but he came. (No picture: also fine.)' },
      ],
    },
    {
      ai: 'Vous avez mangé où ?',
      en: 'Where did you eat?',
      user: fr(E(1372)),
      userEn: 'Anyway, I was starving, so we ate straight away. (une faim de loup, with avoir.)',
      alts: [
        { fr: "Dans un petit resto. J'avais une faim de loup.", en: 'In a little restaurant. I was starving.' },
        { fr: 'Dans un resto plein, on était serrés comme des sardines.', en: 'In a packed restaurant, we were packed like sardines.' },
      ],
    },
    {
      ai: 'Et au travail, ça va ?',
      en: 'And how is work?',
      user: fr(E(1314)),
      userEn: 'This week I have a lot on my plate. (courant: fine about work.)',
      alts: [
        { fr: "Ce n'est pas de la tarte, mais ça va.", en: 'It is no picnic, but it is fine.' },
        { fr: 'Je cours comme une poule pas de tête.', en: 'I am running around like a headless chicken. (The Québec form.)' },
      ],
    },
    {
      ai: 'Une bonne nouvelle, quand même ?',
      en: 'Any good news, though?',
      user: fr(E(1373)),
      userEn: 'And the icing on the cake: he paid. (A good-news picture for good news.)',
      alts: [
        { fr: "Oui, j'ai la pêche depuis lundi.", en: 'Yes, I have been full of beans since Monday.' },
        { fr: 'Oui, un petit contrat qui met du beurre dans les épinards.', en: 'Yes, a small contract that makes life a bit easier.' },
      ],
    },
    {
      ai: 'Tu le revois bientôt, ton Julien ?',
      en: 'Are you seeing your Julien again soon?',
      user: "On verra. Je ne vends pas la peau de l'ours.",
      userEn: 'We will see. I am not counting my chickens. (The bear, not the chickens.)',
      alts: [
        { fr: "Samedi, s'il ne me pose pas de lapin.", en: 'On Saturday, if he does not stand me up. (si + present.)' },
        { fr: 'Quand les poules auront des dents.', en: 'When pigs fly. (A joke: never.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contexte', 'image'],
};

/** THE GRADED TASK. The unit outcome is tested here. */
const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Raconte ta journée',
  frSub: 'Mission écrite',
  brief: "Une journée ne s'est pas passée comme prévu : un rendez-vous, le travail, un voyage ou une fête. Écris un message à un ami francophone pour la raconter. Mets des expressions imagées là où elles aident, pas partout.",
  briefEn: 'A day did not go as planned: a date, work, a trip or a party. Write a message to a French-speaking friend telling the story. Put idioms where they help, not everywhere.',
  produce: "Écris un message de 80 à 120 mots, au passé, avec au moins cinq expressions imagées de la leçon, chacune à sa place : la bonne image, le bon verbe, le bon registre.",
  responseSpec: { kind: 'text', minWords: 80, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'justesse',
        label: 'Chaque image est juste',
        maxPoints: 4,
        descriptors: [
          "4 : Chaque expression a le bon animal ou le bon aliment, le bon verbe et la bonne forme : l'accord, le pluriel, la négation.",
          "3 : Une expression a un petit défaut, un verbe ou un article ; le reste est juste.",
          "2 : Deux ou trois expressions sont abîmées ou mélangées, par exemple un froid de chien ou je suis la pêche.",
          "1 : La plupart des expressions sont inventées, ou traduites de l'anglais mot à mot.",
        ],
      },
      {
        key: 'sens',
        label: 'Chaque image est à sa place',
        maxPoints: 3,
        descriptors: [
          "3 : Au moins cinq expressions, et chacune dit exactement ce que l'histoire veut dire : la cerise pour une bonne nouvelle, les carottes pour une mauvaise.",
          "2 : Cinq expressions, mais une ou deux ne vont pas avec la situation ; ou seulement trois ou quatre expressions.",
          "1 : Les expressions sont posées sans lien avec l'histoire, ou il y en a moins de trois.",
        ],
      },
      {
        key: 'naturel',
        label: 'Un message naturel',
        maxPoints: 3,
        descriptors: [
          "3 : Une expression par idée, pas une par phrase ; le registre va avec un ami ; on lit une vraie histoire.",
          "2 : Le message est clair, mais les images sont trop serrées, ou une expression sonne trop officielle.",
          "1 : Le message ressemble à une liste d'expressions, sans histoire.",
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Un vrai message à un ami, au passé, entre 80 et 120 mots, avec un début et une fin.',
          '1 : Il manque un élément : moins de 80 mots, pas de destinataire, ou pas de fin.',
        ],
      },
    ],
  },
  scaffold: [
    'Salut ... ,',
    'Tu ne vas pas me croire.',
    'Samedi, il faisait...',
    "J'ai attendu...",
    'Au début, ...',
    'Et en plus, ...',
    'Bref, ...',
    'Bisous,',
  ],
  modelAnswer: "Salut Mathieu ! Tu ne devineras jamais ma journée d'hier. Le matin, il faisait un temps de chien et je n'étais pas dans mon assiette. Au travail, on avait du pain sur la planche : une grosse livraison, et le patron courait comme une poule pas de tête. À midi, j'avais une faim de loup, mais mon collègue m'a posé un lapin pour le dîner. J'ai mangé seul, avec le cafard. Le soir, ma sœur m'a appelé : elle se marie en juin, et je suis son témoin ! Ça, c'était la cerise sur le gâteau. Bref, une drôle de journée, mais ce n'est pas la fin des haricots. Et toi, quoi de neuf ? Karim",
  modelAnswerEn: "Hi Mathieu! You will never guess what my day was like yesterday. In the morning the weather was foul and I was feeling off. At work we had a lot on our plate: a big delivery, and the boss was running around like a headless chicken. At noon I was starving, but my colleague stood me up for lunch. I ate alone, feeling low. In the evening my sister called: she is getting married in June and I am her witness! That was the icing on the cake. Anyway, a strange day, but it is not the end of the world. And you, what's new? Karim",
  watchFor: [
    {
      pattern: 'An animal or food swapped inside a fixed picture, often by mixing two idioms (un froid de chien, un temps de canard, revenons à nos chèvres).',
      criterion: 'justesse',
      feedback: "Chaque image a son animal : le froid est au canard, le mauvais temps au chien. Vérifie-le sur la fiche.",
      ref: 'a2-piege',
    },
    {
      pattern: 'Stood me up written word for word (il m’a laissé debout), or pas un lapin after a negation.',
      criterion: 'justesse',
      feedback: "Celui qui ne vient pas pose un lapin. À la forme négative : il ne m'a pas posé de lapin.",
      ref: 'a3-erreurs',
    },
    {
      pattern: 'An English animal carried into French for fear or danger (c’est un poulet, l’antre du lion), or a possessive in dans mon estomac.',
      criterion: 'justesse',
      feedback: "La peur, c'est une poule mouillée ; le danger, la gueule du loup. Et dans l'estomac, avec l'article.",
      ref: 'a4-erreurs',
    },
    {
      pattern: 'The verb of a mood idiom changed (je suis la pêche, j’ai pas dans mon assiette, j’étais une faim de loup).',
      criterion: 'justesse',
      feedback: "Chaque image a son verbe : on a la pêche, on a une faim de loup, on n'est pas dans son assiette.",
      ref: 'a5-piege',
    },
    {
      pattern: 'A health idiom translated from English (une grenouille dans la gorge, dormir comme une bûche) or dans la pomme in the singular.',
      criterion: 'justesse',
      feedback: "En français : un chat dans la gorge, dormir comme un loir, tomber dans les pommes.",
      ref: 'a6-erreurs',
    },
    {
      pattern: 'Fishy or head-in-the-sand written word for word (ça sent le poisson, enterrer sa tête), or salades and anguille confused.',
      criterion: 'justesse',
      feedback: "Un secret, c'est une anguille sous roche ; un mensonge, des salades ; ne pas voir, faire l'autruche.",
      ref: 'a7-piege',
    },
    {
      pattern: 'A piece of cake or eggshells translated (un morceau de gâteau, des coquilles d’œufs), or du pain sur la table.',
      criterion: 'justesse',
      feedback: "C'est du gâteau, sans morceau ; on marche sur des œufs ; le travail est sur la planche.",
      ref: 'a8-erreurs',
    },
    {
      pattern: 'A comme portrait with the English animal (aveugle comme une chauve-souris) or an adjective left masculine for a woman.',
      criterion: 'justesse',
      feedback: "L'adjectif s'accorde avec la personne, l'animal reste : elle est têtue comme une mule, myope comme une taupe.",
      ref: 'a9-piege',
    },
    {
      pattern: 'A blunt familiar idiom aimed at the reader (occupe-toi de tes oignons to the friend), or an idiom that sounds like a report rather than a message.',
      criterion: 'naturel',
      feedback: "Garde les expressions sèches pour parler des autres, pas à ton lecteur. Ton message reste amical.",
      ref: 'a10-erreurs',
    },
    {
      pattern: 'A good-news picture used for bad news or the reverse (la cerise sur le gâteau for a problem, les carottes sont cuites for a success).',
      criterion: 'sens',
      feedback: "La cerise, c'est le petit plus d'une bonne nouvelle ; les carottes cuites, c'est quand tout est perdu.",
      ref: 'a11-piege',
    },
    {
      pattern: 'Idioms piled into every sentence, two or three to a line, until the story disappears.',
      criterion: 'naturel',
      feedback: "Une expression par idée, pas une par phrase. Garde des phrases simples entre les images.",
      ref: 'a12-plan',
    },
    {
      pattern: 'Fewer than five of the lesson’s idioms, or five that do not fit what happened.',
      criterion: 'sens',
      feedback: "Relis la mission : au moins cinq expressions, chacune à la place d'une idée de ton histoire.",
      ref: 'a12-lecture',
    },
  ],
  graderNotes: [
    'Grade on FIT, not count (shapes doc §2.2). An idiom counts toward the five only if it says what that moment of the story means. A sixth idiom that does not fit costs a point under « sens »; it never earns one.',
    'Word count INCLUDES the greeting and the sign-off. Count everything, with 10% tolerance (72 to 132) before criterion « tache » loses its point.',
    'Accept both regional forms of the two pairs (des papillons dans l’estomac / dans le ventre; comme une poule pas de tête / comme un poulet sans tête) and do not mark a message that mixes Québec and France forms.',
    'Idioms from other lessons (the body, b1.27; colours, b1.29) or correct idioms this lesson does not teach are accepted without penalty, but only this lesson’s idioms count toward the five.',
    "c'est pas de la tarte (spoken negation without ne) is correct in a message to a friend. Do not mark it.",
    'Tense choice is b1.03’s. Do not score passé composé against imparfait here unless it breaks an idiom’s fixed form.',
    'Do not score the subjunctive (b1.14 to b1.16): accept a correct one, ignore an incorrect one under this lesson’s criteria.',
    'Accept regional vocabulary around the idioms (dîner for lunch in Québec, souper, char, dépanneur).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contexte', 'bloc'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Dis toutes tes images à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'bloc'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-nouvelles',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le temps', v: 'un froid de canard, un temps de chien', say: fr(E(1217)),
      detail: { title: "Le temps et l'heure", body: "Le canard pour le froid, le chien pour la pluie, les poules pour l'heure. EN: duck, dog, hens.", say: fr(E(1219)) } },
    { k: 'attendre', v: 'poser un lapin, poireauter', say: fr(E(1232)),
      detail: { title: 'Le rendez-vous', body: "Celui qui ne vient pas pose un lapin ; celui qui attend poireaute. EN: the no-show and the one waiting.", say: fr(E(1233)) } },
    { k: 'la peur', v: 'une poule mouillée, le taureau par les cornes', say: fr(E(1248)),
      detail: { title: 'Peur et courage', body: "La poule mouillée a peur ; le taureau, on l'attrape. EN: the wet hen and the bull.", say: fr(E(1251)) } },
    { k: "l'humeur", v: 'avoir la pêche, avoir le cafard', say: fr(E(1266)),
      detail: { title: 'Le verbe', body: "Avoir la pêche, avoir le cafard, mais être dans son assiette. EN: each with its verb.", say: fr(E(1268)) } },
    { k: 'les portraits', v: 'têtu comme une mule, bavarde comme une pie', say: fr(E(1330)),
      detail: { title: "L'accord", body: "L'adjectif suit la personne, l'animal ne change pas. EN: the adjective agrees.", say: fr(E(1338)) } },
    { k: 'les nouvelles', v: 'la cerise sur le gâteau, les carottes sont cuites', say: fr(E(1361)),
      detail: { title: 'Bonne ou mauvaise', body: "La cerise en haut, les carottes trop cuites en bas. EN: good on top, bad overcooked.", say: fr(E(1363)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'contexte'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu reconnais une cinquantaine d'images françaises, tu sais ce que chacune veut dire, et tu les dis avec leur verbe et leur registre. Le piège qui reste est le plus naturel : quand tu écris vite, l'image anglaise revient, une grenouille, un morceau de gâteau, des chats qui pleuvent. Avant l'examen, prends ton message et souligne chaque expression. Au-dessus, écris l'animal ou l'aliment : s'il n'est pas celui de la leçon, cherche la vraie image. EN: Underline each idiom and check its animal or food against the lesson.",
  stats: [
    { k: 'Les images', v: '58 expressions' },
    { k: 'Les familles', v: 'dix, une par acte' },
    { k: 'Le registre', v: 'familier ou courant' },
    { k: 'Les pays', v: 'Québec, France, Belgique' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per teaching act (2 to 11), plus an
 *  integration round on the word-for-word trap that act 1 opened and the
 *  task closes. Each round's target is a distinct errorTrigger. `fold()`
 *  strips accents, commas and apostrophes, so every typed answer turns on a
 *  WORD (canard against chien) or a LETTER that survives folding (têtue
 *  against têtu, les pommes against la pomme). A typeIn accepts the whole
 *  sentence or the missing word alone. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, also: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...also], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: "Une image ne va pas. Écris la phrase correcte. EN: One picture is wrong; write the sentence correctly.", prompt, answer, accept: [answer], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const COMPLETE = "Complète l'expression.";

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a12-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r2-meteo', label: "Le temps et l'heure", targets: ['animal-change'],
      questions: [
        mc('Il fait très froid. Il fait un froid de...', ['chien', 'canard', 'loup'], 1, "Un froid de canard. EN: the duck.", 'a2-cartes'),
        mc('« Il pleut à boire debout » : il pleut...', ['très fort', 'un peu'], 0, "Très fort, et sans animal. EN: pouring.", 'a2-tableau'),
        mc('« Quand les poules auront des dents » veut dire...', ['bientôt', 'demain', 'jamais'], 2, "Jamais. EN: when pigs fly.", 'a2-construire'),
        tI(COMPLETE, 'Quel temps de ___ , on reste à la maison.', fr(E(1218)), "Le mauvais temps est au chien. EN: chien.", 'a2-cartes', ['chien']),
        tI(COMPLETE, 'Mon grand-père se lève avec les ___ .', fr(E(1219)), "Les poules, au lever du soleil. EN: poules.", 'a2-choisir', ['poules']),
        eS('Mets ton manteau, il fait un froid de chien.', fr(E(1217)), "Le froid va avec le canard. EN: canard.", 'a2-piege'),
        eS('Il pleut des chats et des chiens depuis midi.', fr(E(1223)), "Aucun animal en français : à boire debout. EN: no animals.", 'a2-piege'),
        lC('Écoute. Le bus allait...', fr(E(1222)), ['très lentement', 'très vite'], 0, "Comme un escargot. EN: at a snail's pace.", 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-attente', label: 'Attendre', targets: ['lapin-mot-a-mot'],
      questions: [
        mc("« Il m'a posé un lapin » : il...", ['est venu avec un lapin', "n'est pas venu"], 1, "Il n'est pas venu. EN: he stood me up.", 'a3-cartes'),
        mc("« Il n'y a pas un chat » veut dire...", ['il y a des chiens', 'il y a trop de monde', "il n'y a personne"], 2, "Personne. EN: not a soul.", 'a3-construire'),
        mc('Dans le métro à huit heures, on est serrés comme des...', ['sardines', 'poissons', 'poules'], 0, "Des sardines, comme en anglais. EN: sardines.", 'a3-choisir'),
        tI(COMPLETE, "J'ai ___ une heure devant le cinéma. (poireauter)", fr(E(1233)), "Poireauté : attendu longtemps. EN: poireauté.", 'a3-cartes', ['poireauté']),
        tI('Mets la phrase à la forme négative.', "Il m'a posé un lapin.", "Il ne m'a pas posé de lapin.", "Après pas, un devient de. EN: pas de.", 'a3-erreurs'),
        eS("Julien m'a laissé debout hier soir.", fr(E(1232)), "Stood me up : un lapin, en français. EN: a rabbit.", 'a3-erreurs'),
        eS("Dimanche matin, il n'y a pas un chien dans la rue.", fr(E(1234)), "Pas un chat. EN: a cat.", 'a3-erreurs'),
        lC("Écoute. Qui n'est pas venu ?", fr(E(1240)), ['elle', "l'autre personne"], 1, "Elle s'est fait poser un lapin : l'autre n'est pas venu. EN: she was stood up.", 'a3-construire'),
      ],
    },
    {
      id: 'r4-peur', label: 'La peur et le courage', targets: ['poulet-anglais'],
      questions: [
        mc('« Chicken », pour quelqu’un qui a peur :', ['un poulet', 'une poule mouillée'], 1, "Une poule mouillée. EN: a wet hen.", 'a4-cartes'),
        mc("« Walk into the lion's den » :", ['entrer chez le lion', 'prendre le taureau par les cornes', 'se jeter dans la gueule du loup'], 2, "Un loup, en français. EN: the wolf's jaws.", 'a4-cartes'),
        mc('Au Québec, avant une entrevue, on a des papillons dans...', ["l'estomac", 'la tête'], 0, "Dans l'estomac. En France, dans le ventre. EN: estomac.", 'a4-exemples'),
        tI(COMPLETE, 'Il faut prendre le ___ par les cornes.', fr(E(1255)), "Le taureau. EN: taureau.", 'a4-construire', ['taureau']),
        tI(COMPLETE, 'Pour sa fille, elle se bat comme une ___ .', fr(E(1257)), "Une lionne. EN: lionne.", 'a4-ecoute', ['lionne']),
        eS("Mon frère a peur du noir, c'est un poulet.", fr(E(1248)), "Une poule mouillée. EN: a wet hen.", 'a4-erreurs'),
        eS("Avant mon entrevue, j'avais des papillons dans mon estomac.", fr(E(1253)), "L'article, pas le possessif : dans l'estomac. EN: the article.", 'a4-erreurs'),
        lC('Écoute. Cette personne est...', fr(E(1251)), ['peureuse', 'courageuse'], 1, "Le taureau par les cornes : du courage. EN: brave.", 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-humeur', label: "La faim et l'humeur", targets: ['verbe-change'],
      questions: [
        mc("En pleine forme : j'... la pêche.", ['suis', 'fais', 'ai'], 2, "Avoir la pêche. EN: avoir.", 'a5-exemples'),
        mc('« Avoir le cafard », c’est être...', ['triste', 'affamé'], 0, "Triste. EN: feeling down.", 'a5-cartes'),
        mc('Ma sœur mange très peu. Elle mange comme...', ['un loup', 'un cheval', 'un oiseau'], 2, "Un oiseau. EN: like a bird.", 'a5-choisir'),
        tI(COMPLETE, "Après le ski, j'avais une faim de ___ .", fr(E(1264)), "Un loup. EN: loup.", 'a5-cartes', ['loup']),
        tI('Complète avec le bon verbe.', 'Je ne ___ pas dans mon assiette depuis hier.', fr(E(1268)), "Être dans son assiette. EN: suis.", 'a5-piege', ['suis']),
        eS('Ce matin, je suis la pêche.', fr(E(1266)), "Avoir la pêche. EN: avoir.", 'a5-piege'),
        eS("Il n'est pas dans mon assiette, il a mal dormi.", fr(E(1270)), "Il : son assiette. EN: son.", 'a5-piege'),
        lC('Écoute. Comment va la personne ?', fr(E(1269)), ['elle a faim', 'elle est triste', 'elle est en forme'], 1, "Le cafard : triste. EN: low.", 'a5-histoire'),
      ],
    },
    {
      id: 'r6-sante', label: 'La santé', targets: ['grenouille'],
      questions: [
        mc('« A frog in my throat », en français :', ['un chat dans la gorge', 'une grenouille dans la gorge'], 0, "Un chat. EN: a cat.", 'a6-cartes'),
        mc('« Tomber dans les pommes », c’est...', ['faire les courses', 'tomber dans un jardin', "s'évanouir"], 2, "S'évanouir. EN: to faint.", 'a6-construire'),
        mc('« Sleep like a log » :', ['dormir comme une bûche', 'dormir comme un loir'], 1, "Un loir. EN: a dormouse.", 'a6-erreurs'),
        tI(COMPLETE, 'Le petit a une fièvre de ___ .', fr(E(1282)), "Un cheval. EN: cheval.", 'a6-cartes', ['cheval']),
        tI(COMPLETE, 'Avec cette grippe, je suis malade comme un ___ .', fr(E(1286)), "Un chien, comme en anglais. EN: chien.", 'a6-cartes', ['chien']),
        eS("Il faisait si chaud qu'elle est tombée dans la pomme.", fr(E(1280)), "Au pluriel : les pommes. EN: plural.", 'a6-erreurs'),
        mc('Tu écris à ton patron que tu es malade. Tu écris...', ['Je suis malade, je reste chez moi.', 'Je suis malade comme un chien.'], 0, "Malade comme un chien est familier. EN: plain for a boss.", 'a6-choisir'),
        lC("Écoute. Pourquoi la personne s'excuse-t-elle ?", fr(E(1279)), ['elle est en retard', 'sa voix est enrouée'], 1, "Un chat dans la gorge. EN: a croaky voice.", 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-secrets', label: 'Les salades et les secrets', targets: ['poisson-anglais'],
      questions: [
        mc('« Raconter des salades », c’est...', ['mentir', 'cuisiner'], 0, "Mentir. EN: lying.", 'a7-cartes'),
        mc('« Something fishy is going on » :', ['ça sent le poisson', 'on noie le poisson', 'il y a anguille sous roche'], 2, "L'anguille. EN: an eel.", 'a7-piege'),
        mc('Tu ne trouves pas la réponse. Tu dis :', ["Je fais l'autruche.", 'Je donne ma langue au chat.'], 1, "Ta langue au chat. EN: I give up.", 'a7-construire'),
        tI(COMPLETE, "Tu ne peux pas faire l'___ toute ta vie.", fr(E(1298)), "L'autruche. EN: autruche.", 'a7-tableau', ['autruche']),
        tI(COMPLETE, "Ce n'est qu'une tache, n'en fais pas tout un ___ .", fr(E(1300)), "Un fromage. EN: fromage.", 'a7-cartes', ['fromage']),
        eS('Arrête de me raconter des poissons.', fr(E(1295)), "Des salades. EN: salades.", 'a7-piege'),
        eS('Le ministre a noyé le chat.', fr(E(1297)), "Le poisson. EN: poisson.", 'a7-piege'),
        lC('Écoute. Que fait-elle ?', fr(E(1302)), ["elle parle d'autre chose", 'elle répond tout de suite'], 0, "Elle noie le poisson. EN: she dodges.", 'a7-choisir'),
      ],
    },
    {
      id: 'r8-effort', label: 'Facile ou pas', targets: ['morceau-gateau'],
      questions: [
        mc('« A piece of cake » :', ["c'est du gâteau", 'un morceau de gâteau'], 0, "Du gâteau, sans morceau. EN: no piece.", 'a8-erreurs'),
        mc("« Ce n'est pas de la tarte » veut dire...", ["c'est facile", "c'est sucré", "c'est difficile"], 2, "Difficile. EN: no picnic.", 'a8-cartes'),
        mc('« Walk on eggshells » :', ["marcher sur des coquilles d'œufs", 'marcher sur des œufs'], 1, "Des œufs entiers. EN: whole eggs.", 'a8-erreurs'),
        tI(COMPLETE, "Cette semaine, j'ai du pain sur la ___ .", fr(E(1314)), "La planche. EN: planche.", 'a8-construire', ['planche']),
        tI(COMPLETE, 'Essaie, ça ne ___ pas de pain.', fr(E(1321)), "Manger. EN: mange.", 'a8-erreurs', ['mange']),
        eS("L'examen de conduite, c'est un morceau de gâteau.", fr(E(1312)), "Du gâteau, sans morceau. EN: no piece.", 'a8-erreurs'),
        mc('Tu as beaucoup de travail. Tu dis à ta collègue :', ["C'est du gâteau.", "J'ai du pain sur la planche."], 1, "Beaucoup de travail. EN: a lot on your plate.", 'a8-choisir'),
        lC('Écoute. Où est-on ?', fr(E(1317)), ['au Québec', 'en France'], 0, "Une poule pas de tête : la forme du Québec. EN: Québec.", 'a8-lecture'),
      ],
    },
    {
      id: 'r9-portraits', label: 'Les portraits', targets: ['comme-anglais'],
      questions: [
        mc('« Blind as a bat » :', ['myope comme une taupe', 'aveugle comme une chauve-souris'], 0, "Une taupe. EN: a mole.", 'a9-cartes'),
        mc('« Sly as a fox » :', ['doux comme un agneau', 'fort comme un bœuf', 'rusé comme un renard'], 2, "Le renard. EN: the fox.", 'a9-flash'),
        mc('Un enfant tout petit est haut comme trois...', ['poires', 'pommes'], 1, "Trois pommes. EN: apples.", 'a9-choisir'),
        tI("Accorde l'adjectif.", 'Ma grand-mère est (têtu) comme une mule.', fr(E(1338)), "Têtue. EN: feminine.", 'a9-construire', ['têtue']),
        tI("Accorde l'adjectif.", 'Ta nièce est (malin) comme un singe.', fr(E(1331)), "Maligne. EN: maligne.", 'a9-piege', ['maligne']),
        eS('Ma voisine est bavarde comme un pie.', fr(E(1334)), "Une pie. EN: une.", 'a9-piege'),
        eS('Il porte le frigo seul, il est fort comme un agneau.', fr(E(1335)), "La force : un bœuf. EN: an ox.", 'a9-choisir'),
        lC('Écoute. Le vendeur est...', fr(E(1337)), ['très doux', 'très rusé'], 1, "Un renard. EN: sly.", 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-autres', label: 'Les autres et le sujet', targets: ['registre-oignons'],
      questions: [
        mc('En réunion, pour revenir au sujet, tu dis :', ['Revenons à nos moutons.', 'Occupe-toi de tes oignons.'], 0, "Courant et poli. EN: back to the point.", 'a10-choisir'),
        mc('« Other fish to fry » :', ["d'autres poissons à frire", "d'autres chats à fouetter"], 1, "Des chats à fouetter. EN: cats.", 'a10-erreurs'),
        mc('Vous finissez à mi-chemin entre deux prix. Vous avez...', ['mis votre grain de sel', 'ménagé la chèvre', 'coupé la poire en deux'], 2, "La poire en deux. EN: split the difference.", 'a10-construire'),
        tI(COMPLETE, 'Mon oncle met toujours son grain de ___ .', fr(E(1347)), "Du sel. EN: sel.", 'a10-cartes', ['sel']),
        tI(COMPLETE, 'Le directeur ménage la chèvre et le ___ .', fr(E(1350)), "Le chou. EN: chou.", 'a10-tableau', ['chou']),
        eS('Bon, revenons à nos chèvres.', fr(E(1351)), "Nos moutons. EN: sheep.", 'a10-erreurs'),
        mc('« Occupe-toi de tes oignons » est...', ['familier et sec', 'poli'], 0, "Familier et sec. EN: blunt.", 'a10-cartes'),
        lC('Écoute. À qui peut-on dire ça ?', fr(E(1346)), ['à un client', 'à un frère'], 1, "Familier : un proche. EN: a brother.", 'a10-tableau'),
      ],
    },
    {
      id: 'r11-nouvelles', label: 'Les nouvelles', targets: ['bonne-mauvaise'],
      questions: [
        mc('Tu as eu le poste, et en plus un bon salaire. Le salaire, c’est...', ['la fin des haricots', 'la cerise sur le gâteau'], 1, "Le petit plus. EN: the icing.", 'a11-choisir'),
        mc('« Les carottes sont cuites » : une bonne nouvelle ?', ['non', 'oui'], 0, "Non : c'est perdu. EN: bad news.", 'a11-cartes'),
        mc("« Don't count your chickens » :", ["ne vends pas la peau de l'ours", 'ne compte pas tes poussins', 'la cerise sur le gâteau'], 0, "L'ours. EN: the bear.", 'a11-piege'),
        tI(COMPLETE, 'Ce petit contrat met du beurre dans les ___ .', fr(E(1362)), "Les épinards. EN: épinards.", 'a11-construire', ['épinards']),
        tI(COMPLETE, "Plus de café au bureau, c'est la fin des ___ .", fr(E(1364)), "Des haricots. EN: haricots.", 'a11-hacks', ['haricots']),
        eS('Et le glaçage sur le gâteau : il fait beau.', fr(E(1366)), "La cerise. EN: cerise.", 'a11-piege'),
        eS("Le train est parti sans nous, c'est la cerise sur le gâteau.", fr(E(1363)), "Une mauvaise nouvelle : les carottes sont cuites. EN: bad news.", 'a11-piege'),
        lC("Écoute. C'est une bonne ou une mauvaise nouvelle ?", fr(E(1368)), ['mauvaise', 'bonne'], 0, "Les carottes sont cuites. EN: bad.", 'a11-lecture'),
      ],
    },
    {
      id: 'r12-mot-a-mot', label: 'Le mot à mot', targets: ['mot-a-mot'],
      questions: [
        mc('« He stood me up » :', ["il m'a posé un lapin", "il m'a laissé debout"], 0, "Un lapin. EN: a rabbit.", 'a1-scene'),
        mc("Entre le français et l'anglais, tu traduis...", ["l'image", 'le sens'], 1, `${REFRAME} EN: ${REFRAME_EN}`, 'a1-paires'),
        mc("Combien d'expressions dans une phrase de ton message ?", ['trois ou quatre', 'le plus possible', 'une, au plus'], 2, "Une par idée. EN: one per idea.", 'a12-plan'),
        tI(COMPLETE, 'Il pleut à ___ debout.', 'Il pleut à boire debout.', "À boire debout. EN: boire.", 'a2-tableau', ['boire']),
        tI(COMPLETE, "Excusez-moi, j'ai un ___ dans la gorge.", fr(E(1279)), "Un chat. EN: chat.", 'a6-cartes', ['chat']),
        eS("Désolé, j'ai d'autres poissons à frire.", fr(E(1348)), "Des chats à fouetter. EN: cats.", 'a10-erreurs'),
        eS("Samedi, il faisait un temps de canard et j'avais le cafard.", fr(E(1370)), "Un temps de chien. EN: chien.", 'a12-lecture'),
        lC('Écoute. Il est venu ?', fr(E(1371)), ['non, jamais', 'oui, en retard'], 1, "Il est arrivé après vingt minutes. EN: late, but he came.", 'a12-usages'),
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
    { front: 'très froid', back: 'un froid de canard', say: fr(E(1217)) },
    { front: 'ne pas venir', back: 'poser un lapin', say: fr(E(1232)) },
    { front: 'avoir peur de tout', back: 'être une poule mouillée', say: fr(E(1248)) },
    { front: 'en pleine forme', back: 'avoir la pêche', say: fr(E(1266)) },
    { front: 'une voix enrouée', back: 'un chat dans la gorge', say: fr(E(1279)) },
    { front: 'mentir', back: 'raconter des salades', say: fr(E(1295)) },
    { front: 'très facile', back: "c'est du gâteau", say: fr(E(1312)) },
    { front: 'très têtu', back: 'têtu comme une mule', say: fr(E(1330)) },
    { front: 'le petit plus', back: 'la cerise sur le gâteau', say: fr(E(1361)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Les animaux et la nourriture, en résumé',
  body: `${REFRAME} Tu as maintenant une cinquantaine d'images : un lapin sur une chaise vide, un canard dans le froid, une cerise sur un gâteau. Tu les dis entières, avec leur verbe, au bon registre, et tu laisses l'anglais dessiner les siennes. La prochaine leçon, ${COLOUR_REF}, garde les images et change de palette : rouge comme une tomate, rire jaune, une peur bleue. EN: Next lesson: the colour idioms.`,
  points: [
    "L'image d'abord, le sens ensuite, l'anglais à la fin.",
    'Chaque image a son animal, son aliment et son verbe.',
    'Familier pour les amis, courant pour tout le monde.',
    'Une expression par idée, pas une par phrase.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['image', 'registre'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ta journée en images',
    opener: {
      line: "Chloé a raconté son lapin, Awa son entretien : à toi de raconter ta journée avec les images de la leçon. EN: Chloé told her rabbit story and Awa her interview: your turn to tell your day with the lesson's pictures.",
      imageRef: 'lessons/expressions-animaux/act12.jpg',
    },
    sections: [],
    milestone: "Tu as raconté ta propre journée en images et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You told your own day in pictures and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 120,
    restPoints: ['a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r4-peur', 'a12-quiz/r7-secrets', 'a12-quiz/r10-autres'],
  },
  sections: [
    A12_LECTURE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};


/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here. The family tables are
 *  GENERATED from the corpus rows, so a sheet can never disagree with a card.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

/** Every expression of the given acts, one row each: fr, register, English, where. */
function familyRows(acts: number[]): string[][] {
  return FAMILIES.filter((f) => acts.includes(f.act)).flatMap((f) => f.ids.map((n) => {
    const r = src(E(n));
    const where = r.tags?.includes('quebec') ? 'Québec' : r.tags?.includes('france') ? 'France, Belgique' : 'partout';
    return [r.fr, r.register ?? 'courant', r.en, where];
  }));
}
const FAMILY_COLS = ['Expression', 'Registre', 'En anglais', 'Où'];

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-lire', 'Lire une expression imagée', ["l'image, le sens, l'anglais", 'familier ou courant', 'le mot à mot à éviter', 'les autres leçons'], [
    teach('sheet-lire-teach', "L'image, le sens, l'anglais",
      `${REFRAME} Une expression imagée se lit en trois temps. D'abord l'image : un lapin sur une chaise vide. Puis le sens : il n'est pas venu. Enfin l'anglais, qui a souvent une autre image : he stood me up. Tu gardes l'image française entière, avec son verbe, et tu traduis le sens. EN: picture, meaning, then English; keep the French picture whole, verb included.`),
    table('sheet-lire-registre', 'Familier ou courant', ['Registre', 'Avec qui', 'Exemples'], [
      ['courant', 'tout le monde, au travail aussi', 'prendre le taureau par les cornes, un froid de canard'],
      ['familier', 'amis, famille, collègues proches', "c'est du gâteau, avoir la pêche, poser un lapin"],
      ['familier et un peu sec', 'jamais avec un patron ni un client', 'occupe-toi de tes oignons'],
    ]),
    table('sheet-lire-motamot', 'Le mot à mot à éviter', ['En anglais', 'Pas', 'Mais'], [
      ["it's raining cats and dogs", 'il pleut des chats et des chiens', 'il pleut à boire debout'],
      ['he stood me up', "il m'a laissé debout", "il m'a posé un lapin"],
      ['when pigs fly', 'quand les cochons voleront', 'quand les poules auront des dents'],
      ['a frog in my throat', 'une grenouille dans la gorge', 'un chat dans la gorge'],
      ['a piece of cake', 'un morceau de gâteau', "c'est du gâteau"],
      ['blind as a bat', 'aveugle comme une chauve-souris', 'myope comme une taupe'],
      ['other fish to fry', "d'autres poissons à frire", "d'autres chats à fouetter"],
      ["don't count your chickens", 'ne compte pas tes poussins', "ne vends pas la peau de l'ours"],
    ]),
    teach('sheet-lire-ailleurs', 'Les autres images',
      `Les expressions du corps, comme avoir les yeux plus gros que le ventre, sont dans ${BODY_REF}. Les couleurs, comme rouge comme une tomate ou une peur bleue, sont dans ${COLOUR_REF}. Les mots simples, un lapin, une pêche, du pain, viennent de ${FOOD_REF} et de ${ANIMAUX_THEME_FR}. Le registre, en entier, est dans ${REGISTER_REF}. EN: body and colour idioms have their own lessons; the plain words come from A1.`),
  ]),
  sheet('sheet-quotidien', 'Le temps, l’attente, la peur, la faim', ['acte 2 : le temps et l’heure', 'acte 3 : attendre', 'acte 4 : la peur et le courage', 'acte 5 : la faim et l’humeur'], [
    table('sheet-quotidien-table', 'Actes 2 à 5', FAMILY_COLS, familyRows([2, 3, 4, 5])),
    teach('sheet-quotidien-verbe', 'Le verbe fait partie du bloc',
      "On A la pêche, on A le cafard, on A une faim de loup. On EST une poule mouillée, on N'EST PAS dans son assiette. On POSE un lapin, et on SE FAIT poser un lapin. Le temps du verbe change, le reste ne bouge pas. EN: learn each idiom with its verb."),
  ]),
  sheet('sheet-sante', 'La santé, les secrets, l’effort', ['acte 6 : la santé', 'acte 7 : les salades et les secrets', 'acte 8 : facile ou pas'], [
    table('sheet-sante-table', 'Actes 6 à 8', FAMILY_COLS, familyRows([6, 7, 8])),
    teach('sheet-sante-tout', 'Tout un fromage',
      `Dans « en faire tout un fromage », tout un veut dire un fromage entier, comme dans ${TOUT_REF}. Et on dit « n'en fais pas tout un fromage » : en reste devant le verbe. EN: tout un means a whole one; en stays before the verb.`),
  ]),
  sheet('sheet-portraits', 'Les portraits en « comme »', ['adjectif + comme + animal', "l'accord", 'la même image en anglais'], [
    teach('sheet-portraits-teach', "L'adjectif s'accorde, l'animal ne bouge pas",
      "Pour décrire quelqu'un, on prend un adjectif, puis comme, puis un animal ou un aliment. L'adjectif s'accorde avec la personne : têtue, maligne, bavarde. L'animal reste le même : une mule pour un homme aussi. EN: the adjective agrees with the person; the animal never changes."),
    table('sheet-portraits-table', 'Acte 9', FAMILY_COLS, familyRows([9])),
    table('sheet-portraits-accord', "L'accord", ['Masculin', 'Féminin', 'Exemple'], [
      ['têtu', 'têtue', 'Ma grand-mère est têtue comme une mule.'],
      ['malin', 'maligne', 'Ta nièce est maligne comme un singe.'],
      ['bavard', 'bavarde', 'Ma voisine est bavarde comme une pie.'],
      ['rusé', 'rusée', 'Elle est rusée comme un renard.'],
      ['haut', 'haute', 'Elle est haute comme trois pommes.'],
      ['myope, fort, doux', 'myope, forte, douce', 'Elle est forte comme un bœuf.'],
    ]),
  ]),
  sheet('sheet-nouvelles', 'Les autres, les nouvelles, ton histoire', ['acte 10 : les autres et le sujet', 'acte 11 : les nouvelles', 'relire ton anecdote'], [
    table('sheet-nouvelles-table', 'Actes 10 et 11', FAMILY_COLS, familyRows([10, 11])),
    teach('sheet-nouvelles-anecdote', 'Une anecdote qui sonne juste',
      "Une bonne anecdote a un début, un problème et une fin. Mets une expression là où elle aide : une par idée, pas une par phrase. Choisis le registre de la personne à qui tu écris. Et garde chaque image entière. EN: one idiom per idea, the right register, each picture whole."),
    table('sheet-nouvelles-relire', 'Relire ton anecdote', ['À vérifier', 'Comment'], [
      ["L'image", 'le bon animal, le bon aliment : un froid de canard, pas de chien'],
      ['Le verbe', 'avoir la pêche, être dans son assiette, poser un lapin'],
      ['Le registre', 'familier pour un ami, courant pour un collègue'],
      ['Le contexte', 'une bonne nouvelle : la cerise ; une mauvaise : les carottes'],
      ['Le nombre', 'au moins cinq expressions, une par idée'],
      ['Le mot à mot', "aucune image anglaise traduite : pas de chats qui pleuvent"],
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
  { id: 'd-meteo', title: 'Le temps ou l’heure', format: 'sort' as const, coach: "Deux piles : ce qui parle du temps qu'il fait, et ce qui parle de l'heure. EN: sort weather from time of day.", buckets: ["le temps qu'il fait", "l'heure"], items: [E(1217), E(1218), E(1223), E(1219), E(1220), E(1225)], audio: AUDIO },
  { id: 'd-attente', title: 'Le lapin', format: 'mcq' as const, coach: "Celui qui ne vient pas pose un lapin. Garde le verbe et l'animal. EN: the no-show poses a rabbit.", q: "Il n'est pas venu au rendez-vous. Il m'a ... un lapin.", opts: ['posé', 'laissé'], correct: 0, why: "Poser un lapin : c'est le bloc. EN: poser.", items: [E(1232), E(1236), E(1240), E(1233), E(1234), E(1235)], audio: AUDIO },
  { id: 'd-courage', title: 'Peur ou courage', format: 'sort' as const, coach: "Deux piles : qui a peur, et qui fonce. EN: sort fear from courage.", buckets: ['la peur', 'le courage'], items: [E(1248), E(1249), E(1253), E(1251), E(1252), E(1255)], audio: AUDIO },
  { id: 'd-humeur', title: 'Avoir ou être', format: 'mcq' as const, coach: "Chaque expression a son verbe. On a la pêche, on n'est pas dans son assiette. EN: each idiom has its verb.", q: 'Je suis en pleine forme : j’... la pêche.', opts: ['suis', 'ai'], correct: 1, why: "Avoir la pêche. EN: avoir.", items: [E(1264), E(1266), E(1268), E(1269), E(1272), E(1273)], audio: AUDIO },
  { id: 'd-sante', title: 'Le corps en images', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute, et dis le sens en anglais. EN: read each aloud and give the meaning.", items: [E(1279), E(1280), E(1281), E(1282), E(1283), E(1286)], audio: AUDIO },
  { id: 'd-secrets', title: 'Les salades', format: 'mcq' as const, coach: "Le mensonge est une salade, le secret une anguille. EN: lies are salads, secrets are eels.", q: 'Il ne dit pas la vérité : il raconte des ... .', opts: ['poissons', 'salades'], correct: 1, why: "Raconter des salades. EN: salades.", items: [E(1295), E(1296), E(1297), E(1299), E(1300), E(1304)], audio: AUDIO },
  { id: 'd-effort', title: 'Facile ou pas', format: 'sort' as const, coach: "Deux piles : c'est facile, ou ce n'est pas facile. EN: sort easy from hard.", buckets: ['facile', 'pas facile'], items: [E(1312), E(1318), E(1321), E(1313), E(1314), E(1315)], audio: AUDIO },
  { id: 'd-portraits', title: 'Le bon animal', format: 'mcq' as const, coach: "Chaque adjectif a son animal. L'adjectif s'accorde, l'animal ne change pas. EN: each adjective has its animal.", q: "Elle ne change jamais d'avis : elle est têtue comme une ... .", opts: ['mule', 'taupe', 'pie'], correct: 0, why: "Têtue comme une mule. EN: mule.", items: [E(1330), E(1331), E(1332), E(1334), E(1335), E(1338)], audio: AUDIO },
  { id: 'd-registre', title: 'Un ami ou une réunion', format: 'sort' as const, coach: "Deux piles : ce que tu dis à un ami, et ce que tu peux dire en réunion. EN: sort friends from meetings.", buckets: ['avec un ami', 'en réunion'], items: [E(1346), E(1347), E(1352), E(1350), E(1353), E(1355)], audio: AUDIO },
  { id: 'd-nouvelles', title: 'Bonne ou mauvaise', format: 'sort' as const, coach: "Deux piles : la bonne nouvelle, et la mauvaise. EN: sort good news from bad.", buckets: ['bonne nouvelle', 'mauvaise nouvelle'], items: [E(1361), E(1362), E(1366), E(1363), E(1364), E(1368)], audio: AUDIO },
  { id: 'd-mot-a-mot', title: 'Le sens, pas l’image', format: 'flashcard' as const, coach: "Lis chaque phrase, puis dis l'expression anglaise qui a le même sens. EN: read each, then give the English idiom.", items: [E(1200), E(1223), E(1279), E(1312), E(1332), E(1348)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'animal-change', description: 'Swaps the animal inside a fixed picture, mixing two idioms (un froid de chien, un temps de canard) or pluralising it.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a12-mission'], drill: 'd-meteo', retest: 'd-meteo' },
  { id: 'lapin-mot-a-mot', description: 'Renders stood up, no one around or packed in word for word from English instead of reaching for the French picture.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check', 'a12-mission'], drill: 'd-attente', retest: 'd-attente' },
  { id: 'poulet-anglais', description: "Carries the English animal across: calls a coward a poulet, walks into the lion's den, or uses the France form where the Québec one was asked for.", detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a12-mission'], drill: 'd-courage', retest: 'd-courage' },
  { id: 'verbe-change', description: 'Keeps the noun of a mood idiom and changes its verb (je suis la pêche, avoir dans son assiette), because English says I am.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a12-mission'], drill: 'd-humeur', retest: 'd-humeur' },
  { id: 'grenouille', description: 'Translates a frog in the throat, sleep like a log or sick as a dog picture by picture, putting the English animal or object into French.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a12-mission'], drill: 'd-sante', retest: 'd-sante' },
  { id: 'poisson-anglais', description: 'Reaches for fishy, bury your head or spill the beans in French, and confuses lying (salades) with hiding (anguille) or dodging (noyer le poisson).', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a12-mission'], drill: 'd-secrets', retest: 'd-secrets' },
  { id: 'morceau-gateau', description: 'Says un morceau de gâteau for a piece of cake or des coquilles for eggshells, or reverses easy and hard.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a12-mission'], drill: 'd-effort', retest: 'd-effort' },
  { id: 'comme-anglais', description: 'Uses the English animal in a comme portrait (aveugle comme une chauve-souris) or leaves the adjective masculine for a woman.', detectOn: ['a9-construire', 'a9-piege', 'a9-check', 'a12-mission'], drill: 'd-portraits', retest: 'd-portraits' },
  { id: 'registre-oignons', description: 'Uses a familiar idiom where it offends (occupe-toi de tes oignons to a boss or a client) or reaches for none when getting back to the point in a meeting.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check', 'a12-mission'], drill: 'd-registre', retest: 'd-registre' },
  { id: 'bonne-mauvaise', description: 'Uses a good-news idiom for bad news or the reverse (la cerise sur le gâteau for a problem, les carottes sont cuites for a win).', detectOn: ['a11-construire', 'a11-piege', 'a11-check', 'a12-mission'], drill: 'd-nouvelles', retest: 'd-nouvelles' },
  { id: 'mot-a-mot', description: 'Writes the anecdote by translating English idioms word for word, or piles idioms into every sentence until the story disappears.', detectOn: ['a1-scene', 'a1-check', 'a12-lecture', 'a12-mission'], drill: 'd-mot-a-mot', retest: 'd-mot-a-mot' },
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-28-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-28-samedi': "Chloé's message (act 1), ONE VOICE, one take, a Montréal woman in her late twenties reading a text aloud to a friend: amused, a little indignant, laughing by the end. Every idiom is said as ordinary speech, with no extra weight: a native does not underline « un froid de canard ». « Ce n'est pas la fin des haricots » ends on a laugh.",
  'rec-b1-28-meteo-ecoute': "REQUIRED FOR THE EAR MISSION (act 2): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed, a Québec voice. The learner decodes what each idiom MEANS, so no idiom is stressed or slowed: « un froid de canard » is one group, [fʁwad ka.naʁ], with the e of de dropped.",
  'rec-b1-28-meteo-cartes': 'The six weather and time cards, one voice, plain delivery, each expression said twice with a short pause between. « avancer comme un escargot » carries both liaisons: [kɔ.mœ̃.nɛs.kaʁ.ɡo].',
  'rec-b1-28-piege-meteo': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound (the English pictures) are never spoken.",
  'rec-b1-28-bureau': "Chloé and the learner (act 3), two voices: Chloé, a Montréal voice, amused and a little annoyed; the learner, calm and teasing. « poireauté » is [pwa.ʁo.te]; « il n'y avait pas un chat » is ordinary speech with no weight on chat; the liaison after pas is optional, keep whichever the actor says naturally.",
  'rec-b1-28-lapin-cartes': 'The four cards of act 3, one voice, plain delivery. « poser un lapin » is [po.ze œ̃ la.pɛ̃]: the nasal of lapin is clean, with no n heard.',
  'rec-b1-28-peur-ecoute': "REQUIRED FOR THE EAR MISSION (act 4): ten lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Lines 6 and 7 are the regional pair: read line 6 (« dans l'estomac », « entrevue ») with a Québec accent if the actor has one, and line 7 (« dans le ventre ») neutrally. « poule mouillée » is [pul mu.je], two clear syllables in mouillée.",
  'rec-b1-28-peur-cartes': "The seven fear and courage cards, TWO VOICES: a Québec voice for cards one to six, a France voice for card seven only, so the learner hears that the papillons pair is regional.",
  'rec-b1-28-cantine': "Moussa and the learner (act 5), two voices: Moussa, a warm voice in his thirties, Belgian or West African French both welcome, cheerful and hungry; the learner, tired and low. « j'ai la frite » is said with a Brussels lilt if the actor has one.",
  'rec-b1-28-humeur-cartes': 'The six hunger and mood cards, one voice, plain delivery. « une faim de loup » is [yn fɛ̃d lu], the de reduced to a d.',
  'rec-b1-28-piege-humeur': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-28-sante-ecoute': "REQUIRED FOR THE EAR MISSION (act 6): ten lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Line 1 is said with a real slightly hoarse voice, as the idiom describes. « dans les pommes » is [dɑ̃ le pɔm], plural les clearly heard.",
  'rec-b1-28-sante-cartes': 'The five health cards, one voice, plain delivery. « une fièvre de cheval » keeps its de: [fjɛvʁ də ʃə.val].',
  'rec-b1-28-secret': "Inès and the learner (act 7), two voices: Inès, a Lyon voice in her twenties, trying hard not to laugh; the learner, suspicious and amused. The last line reveals the surprise, so Inès lets the laugh out on « demain, c'est ton anniversaire ».",
  'rec-b1-28-secret-cartes': 'The six cards of act 7, one voice, plain delivery. « il y a anguille sous roche » is [i.lja ɑ̃.ɡij su ʁɔʃ]: the ill of anguille is a y sound, never an l.',
  'rec-b1-28-piege-secret': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-28-courriel': "Mathieu's email (act 8), ONE VOICE, one take, a Québec man in his forties reading his own email aloud before sending it: organised, friendly, a little stressed. « comme une poule pas de tête » is said fast and familiar, the way a Québécois says it; « dîner » means lunch.",
  'rec-b1-28-effort-cartes': "The seven cards of act 8, TWO VOICES: a Québec voice for cards one to six, a France voice for card seven only (« un poulet sans tête »). « marcher sur des œufs » is [maʁ.ʃe syʁ de.zø]: plural œufs, no f heard.",
  'rec-b1-28-portraits-ecoute': "REQUIRED FOR THE EAR MISSION (act 9): ten lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed, a warm family voice describing people with affection. The feminine endings must be audible where they differ: « maligne » [ma.liɲ], « bavarde » [ba.vaʁd], against « têtue », which sounds like « têtu ».",
  'rec-b1-28-portraits-cartes': 'The eight portrait cards, one voice, plain delivery, each expression said twice. « doux comme un agneau » carries the liaison [kɔ.mœ̃.na.ɲo].',
  'rec-b1-28-piege-portraits': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-28-souper': "Sylvie and the learner (act 10), two voices: Sylvie, a Québec City aunt in her sixties, warm and fed up with her husband; the learner, amused and a little embarrassed. « occupe-toi de tes oignons » is said the way it is meant in a family: firm, half a joke, never shouted.",
  'rec-b1-28-autres-cartes': "The six cards of act 10, one voice. « avoir d'autres chats à fouetter » is [do.tʁə ʃa a fwɛ.te]; « ménager la chèvre et le chou » keeps its et clearly.",
  'rec-b1-28-nouvelles': "Élise's news (act 11), ONE VOICE, one take, a Brussels woman in her late twenties recording a voice message to a friend: excited at the start, deflated for the flat, laughing at the bear. « ça met du beurre dans les épinards » runs as one easy phrase.",
  'rec-b1-28-nouvelles-cartes': "The five news cards, one voice. « vendre la peau de l'ours avant de l'avoir tué » is said in one breath, as a proverb.",
  'rec-b1-28-piege-nouvelles': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-28-anecdote': "Awa's reply (act 12), ONE VOICE, one take, a Dakar woman in her thirties reading her message aloud to a friend: warm, proud, laughing at herself. Senegalese French welcome. Every idiom is ordinary speech, never underlined: this is the model of an idiom used in passing.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 28',
  intro: "French speakers say someone « posed a rabbit » when they stood you up, and that it is « a duck's cold » when it is freezing. This lesson teaches about fifty idioms built on an animal or a food, in ten families: the weather and the hour, waiting, fear, hunger and mood, health, lies and secrets, easy and hard, portraits, other people, and news. For each one you learn the picture first, then the meaning, then the English, which usually draws a different picture. The rule that holds it together: keep the French picture whole, and translate only the meaning. You finish by telling a short anecdote with them.",
  skill: 'PE',
  grammarAssumed: [FOOD_UNIT, ARTICLES_UNIT, TOUT_UNIT],
  grammarIntroduced: [
    'Fifty-seven fixed idioms whose key image is an animal or a food, each learned with its verb and its register (familier or courant)',
    'The three-step reading of an idiom: the literal picture, the meaning, then the English equivalent, which often uses a different picture',
    'The word-for-word trap in both directions: English animal idioms rendered literally in French, and French idioms rendered literally in English',
    'Québec and France variants of the same idiom (des papillons dans l’estomac / dans le ventre; une poule pas de tête / un poulet sans tête)',
    'The portrait pattern adjective + comme + animal, with the adjective agreeing with the person and the animal unchanged',
    'Register choice for idioms: which ones fit a meeting or a colleague, and which belong only with friends',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "En français, celui qui ne vient pas « pose un lapin », et quand il fait très froid, c'est « un froid de canard ». Cette leçon t'apprend une cinquantaine d'expressions avec un animal ou un aliment, en dix familles. Pour chacune : l'image, puis le sens, puis l'anglais. À la fin, tu racontes une anecdote avec elles.",
    minutes: 140,
    difficulty: 3,
    glyph: 'lapin',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: EXPRESSIONS_ANIMAUX_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, SAMEDI_TEXT, COURRIEL_TEXT, NOUVELLES_TEXT, ANECDOTE_TEXT, dicteeFor };
