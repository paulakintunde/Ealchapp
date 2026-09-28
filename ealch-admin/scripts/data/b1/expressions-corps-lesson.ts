// b1.27.l1 « Les expressions du corps » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md, in the
// VOCAB SHAPE of B1-WORKSHOP-AND-VOCAB-SHAPES.md §2. No new section types.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union, enforced by
// validateSection, drawn by TaskView), so `sections` is `LessonSection[]` and
// the validators run on `LESSON` itself, as b1.18 and b1.23 do.
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
//   grouped by MEANING, never by body part.
//
//    1  Le corps parle               7   the method; 4 idioms
//    2  S'entraider                  7   helping and cooperating; 5
//    3  Ce qui agace                 7   annoying and bothering; 5
//    4  La paresse et l'effort       7   laziness and effort; 5
//    5  La gaffe                     7   clumsy and tactless; 5
//    6  La tête ailleurs             7   distracted, attentive, obvious; 7
//    7  L'argent et les relations    7   money, cost, connections; 6
//    8  Le courage et le bon sens    7   courage and good sense; 7
//    9  La mémoire et le savoir      7   memory and knowing; 5
//   10  Dire non                     7   refusing and resisting; 5
//   11  Ce que tu ressens            7   emotions; 5
//   12  Raconte ta journée          11   model, plan, role play, TASK, quiz
//
//   TOTAL 88 missions, 12 acts. 59 idioms, at most 7 per act. Corpus: 179
//   authored rows (.1000-.1178, contiguous) plus 12 reused seed rows (ten
//   a1.24 body words, apprendre par cœur, one coup de main row), 191 item
//   ids in all, 190 released act by act through `deckTranche` (the other is
//   the seed row with no flashcard drill, listed as NOT_DECK_ABLE). Quiz: 12
//   rounds of 8 (36 mcq, 24 typeIn, 24 errorSpot, 12 listenChoose). Twelve
//   error triggers, twelve drills, five reference sheets reached from 17
//   missions by `sheetId`, eleven terms. Three tapTables (acts 3, 6, 9).
//   621 estimated screens.
//   Chapter artwork: `expressions-corps-image-prompts.md`, 12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « L'image vient du corps, le sens vient de la phrase entière. »
//   EN: The picture comes from the body; the meaning comes from the whole phrase.
//
//   ONE METAPHOR, THE PICTURE AND THE SENTENCE. Every idiom here is a small
//   picture made of a body part; the picture is the memory hook and the
//   trap. Read word by word, it gives nonsense (eyes that cost); built from
//   English word by word, it gives a French sentence nobody says (un bras et
//   une jambe). It is NOT « never translate word for word »: act 10 shows the
//   idioms whose picture IS the English one (corpus REFRAME_REJECTED).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    59 idioms whose key image is a part of the body, each with its
//           picture, meaning, register and English equivalent; the method
//           (sens propre, sens figuré, équivalent); the fixed block and what
//           moves in it (the verb, the possessive); the false friends (le
//           cœur gros, le bras long, le cœur sur la main, le mauvais sang);
//           the Québec variants (la graisse de bine, coûter un bras); the
//           dose of idioms in a short anecdote.
//   QUOTES  a1.24's reframe (the body words), with its French rendering;
//           a1.24's ten body words are imported as rows, never retyped.
//   LEAVES  animal and food idioms to b1.28 (donner sa langue au chat, avoir
//           un chat dans la gorge are b1.28's, by key image); colour idioms
//           to b1.29 (rire jaune, une peur bleue, rouge comme une tomate);
//           register as a system to b1.25; the narrative tenses to b1.03,
//           used in the anecdote and never re-taught. No authored French
//           string uses a subjunctive.
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
//   the plan. Setting: Montréal, Sherbrooke, Québec, Liège, Lyon, Genève,
//   Dakar (by a forum post), Abidjan, Ottawa, Moncton; characters recur only
//   inside this lesson. No bubble carries a « ? » or a « ! »: questions and
//   « Mon œil » live in readings, listenings, rows and choice options.
//   Register is marked on EVERY card (`label`) and every row (`register`).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 59 idioms, under the shapes doc's ceiling of 70 and still the largest
//      vocabulary load of any B1 lesson. Cut to about 45 (drop the rarer
//      ones: travailler d'arrache-pied, prendre son courage à deux mains,
//      avoir l'estomac noué), or keep 59?
//   2. TWELVE acts and TWELVE quiz rounds (96 questions), because act 1
//      teaches the method with its own four idioms. Fold act 1's round into
//      round 12 to get back to the usual eleven?
//   3. a1.24 respells « la main » `lah MAⁿ` and « l'œil » `LOY`. This lesson
//      writes MEHⁿ and UHY (corpus §A.6). Fix a1.24, or align this lesson to
//      it?
//   4. « donner une main » is a heard Québec anglicism. The grader notes
//      ACCEPT it and suggest « un coup de main »; the calque sheet lists it
//      as the form to avoid. Keep that split?
//   5. « coûter un bras » is taught as Québec first, familier. It is now
//      heard in France too. Keep the Québec label?
//   6. 32 groupDrills (eleven of them act checks). The vocab shape asks for
//      a « tell them apart » drill AND a « use them » drill per act, which
//      is two more than a grammar act. Accept, or swap one per act for an
//      `examples`?
//   7. THREE tapTables (acts 3, 6 and 9), one per act, six rows each.
//      Confirm three, as for every other B1 lesson.
//   8. Six published Postgres rows are twinned (corpus DB_ONLY_TWINS).
//      Dedupe at import or keep both?
//   9. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  BLOG_TEXT, COURRIEL_TEXT, FORUM_TEXT, ADIEU_TEXT, DEMENAGEMENT_TEXT,
  A124_REFRAME, A124_REFRAME_FR,
  CORPS_UNIT, PC_AVOIR_UNIT, PRONOMINAL_UNIT, PRONOMINAL_PC_UNIT, PC_IMPARFAIT_UNIT,
  CORPS_REF, PRONOMINAL_PC_REF, PC_IMPARFAIT_REF, ANIMAUX_REF, COULEURS_REF, REGISTRE_REF,
} from './expressions-corps-corpus.ts';
import { EXPRESSIONS_CORPS_TERMS } from './expressions-corps-terms.ts';

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

/** a1.24's reframe is quoted, not imported (corpus §D): fail loudly on drift. */
if (SEED_DATA.lessons.find((l) => l.id === 'a1.24.l1')?.reframe !== A124_REFRAME) {
  throw new Error('b1.27: A124_REFRAME no longer matches seed.json a1.24.l1.reframe');
}

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.27: no item ${id}`);
  return r;
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.27: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.27: no respell on ${id}`);
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

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE CORPS PARLE
 *
 *  The method, on four idioms: the picture, the meaning, the English. The
 *  failure is the calque: correct French words carrying an English picture.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The learner's French is grammatical and the picture is English. NO
 *  « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Un vélo trop cher',
  frSub: 'La boutique de la rue Saint-Denis',
  setting: { place: 'Une boutique de vélos usagés, rue Saint-Denis', city: 'Montréal', time: 'samedi, 11 h', ambience: 'des vélos au plafond, une odeur de pneus, une radio' },
  beats: [
    {
      kind: 'narration',
      text: "Samedi matin, dans une boutique de vélos usagés à Montréal. Tu cherches un vélo avec ton ami Karim. Le vendeur vous montre un beau vélo bleu à neuf cents dollars.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Karim',
      fr: 'Neuf cents dollars pour un vélo usagé.',
      en: 'Nine hundred dollars for a used bike.',
      respell: '[nuhf sahⁿ do-LAR poor uhⁿ vay-LOH ü-za-ZHAY]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Oui, il coûte un bras et une jambe.',
      en: 'Yes, it costs an arm and a leg (word for word).',
      respell: '[WEE eel KOOT uhⁿ BRA ay ün ZHAHⁿB]',
      stage: "Chaque mot est français. L'image, elle, vient de l'anglais.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Karim',
      fr: 'Un bras et une jambe, ça fait beaucoup de morceaux.',
      en: 'An arm and a leg, that is a lot of pieces.',
      respell: '[uhⁿ BRA ay ün ZHAHⁿB sa feh boh-KOO duh mor-SOH]',
      stage: 'Il rit. Il a compris, mais personne ne dit ça en français.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Le vendeur sourit aussi. Karim, lui, a une autre image pour dire que c'est trop cher, et elle ne vient pas du bras.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase un francophone dit-il vraiment ?',
      size: 'lg',
      options: [
        { fr: 'Ce vélo coûte un bras et une jambe.', respell: '[suh vay-LOH koot uhⁿ BRA ay ün ZHAHⁿB]', en: 'This bike costs an arm and a leg (word for word).', outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1004)), respell: rsOf(E(1004)), en: src(E(1004)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Karim hoche la tête, et le vendeur baisse le prix de cent dollars. Il a entendu quelqu'un d'ici.",
        breaks: "Karim rit encore. Le vendeur, lui, garde son prix : il a entendu un touriste.",
      },
    },
    {
      kind: 'break',
      heading: "Des mots français, une image anglaise",
      body: "Tous tes mots étaient justes. Mais une expression ne se traduit pas mot par mot : chaque langue choisit sa partie du corps. En français, ce qui est trop cher coûte les yeux de la tête. EN: Every word was French; the picture was English.",
      wrong: {
        fr: 'Ce vélo coûte un bras et une jambe.',
        ipa: '/sə ve.lo kut œ̃ bʁa e yn ʒɑ̃b/',
        respell: '[suh vay-LOH koot uhⁿ BRA ay ün ZHAHⁿB]',
        en: 'This bike costs an arm and a leg (word for word).',
      },
      right: {
        fr: fr(E(1004)),
        ipa: ipaOf(E(1004)),
        respell: rsOf(E(1004)),
        en: src(E(1004)).en,
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Cette leçon te donne une soixantaine d'images du corps : ce qu'elles montrent, ce qu'elles veulent dire, et à qui les dire. À la fin, tu racontes une journée avec elles.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['motamot', 'equivalent'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Lire une image du corps', s: "Acte 1 : l'image, le sens, l'équivalent anglais" },
    { t: "Parler de l'effort et de l'humeur", s: 'Actes 2 à 5 : aider, agacer, travailler, gaffer' },
    { t: "Parler de la tête, de l'argent, du courage", s: 'Actes 6 à 9 : distrait, payer, oser, savoir' },
    { t: 'Dire non, dire ce que tu ressens, raconter', s: 'Actes 10 à 12 : refuser, ressentir, ton anecdote' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: a newcomer who took four idioms literally, then learned
 *  the rule. `questionsInModal` so the text comes first. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Mes trois premiers mois',
  frSub: 'Lis, et cherche les parties du corps',
  text: BLOG_TEXT,
  glossary: [
    { word: 'monter ses courses', en: 'to carry her shopping upstairs', note: 'Porter les sacs du magasin jusque chez soi, en haut.' },
    { word: 'la sienne', en: 'hers', note: 'Sa main à elle.' },
    { word: 'bizarre', en: 'strange', note: 'Qui ne semble pas normal.' },
    { word: 'une dispute', en: 'an argument', note: 'Deux personnes qui ne sont pas d’accord et qui parlent fort.' },
  ],
  questions: [
    { q: "Qu'est-ce que la voisine voulait vraiment ?", a: "De l'aide pour monter ses courses. « Donner un coup de main », c'est aider un peu." },
    { q: 'Pourquoi a-t-elle eu peur pour les yeux du vendeur ?', a: "Elle a pris l'image au sens propre. Le vendeur voulait dire : les fraises sont très chères." },
    { q: 'Quelle règle Karim lui donne-t-il ?', a: `« ${REFRAME} »` },
    { q: "Quelle expression a la même image qu'en anglais ?", a: 'Tourner le dos à quelqu’un : to turn your back on someone.' },
  ],
  audio: REC('rec-b1-27-blog'),
  say: REFRAME,
  terms: ['propre', 'figure'],
};

/** LEARN: the method card by card, then a1.24's words, quoted. */
const A1_IMAGES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-images',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-methode',
  title: "L'image, le sens, l'anglais",
  frSub: 'Quatre expressions pour commencer',
  hint: "Cinq cartes. Pour chaque expression : l'image d'abord, le sens ensuite.",
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'figure', 'equivalent'],
  cards: [
    card(E(1001), 'Très cher', 'courant',
      "L'image : des yeux qui coûtent. Le sens : c'est beaucoup trop cher. EN: literally the eyes of the head; in English, an arm and a leg."),
    card(E(1000), 'Aider un peu', 'courant',
      "L'image : un petit coup donné avec la main. Le sens : aider quelqu'un, pour un moment. EN: literally a blow of hand; in English, to give a hand."),
    card(E(1002), 'Savoir sans regarder', 'courant',
      "L'image : le cœur garde les mots. Le sens : savoir parfaitement, dans l'ordre. EN: by heart, the same picture as in English."),
    card(E(1003), "Ignorer quelqu'un", 'courant',
      "L'image : tu montres ton dos. Le sens : ignorer quelqu'un, ne plus lui parler. EN: turn your back on someone, the same picture."),
    {
      head: 'Les mots, tu les connais', label: Cap(CORPS_REF),
      fr: 'la main · les yeux · la tête · le dos',
      sub: '[la MEHⁿ] · [lay ZYUH] · [la TEHT] · [luh DOH]',
      body: `« ${A124_REFRAME} » En français : « ${A124_REFRAME_FR} » L'image est nouvelle. EN: the words are known; the picture is new.`,
    },
  ],
};

/** TELL THEM APART: same picture as English, or another one. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: "Même image, ou autre image",
  groups: [
    grp("Le français et l'anglais ne voient pas la même chose", [
      it(E(1004), 'des yeux, pas un bras'),
      it(E(1010), 'le loyer, et les mêmes yeux'),
      it(E(1005), 'un coup de main, pas une main'),
      it(E(1009), 'aider pour un déménagement'),
    ], chk(
      "Dans ces quatre phrases, l'anglais a-t-il la même image ?",
      ['Non : an arm and a leg, give a hand.', 'Oui, mot pour mot.'], 0,
      "Les yeux contre un bras et une jambe, un coup de main contre a hand. EN: the English picture is different.")),
    grp('Ici, la même image', [
      it(E(1006), 'par cœur : by heart'),
      it(E(1011), 'une chanson, par cœur'),
      it(E(1007), 'tourner le dos : turn your back'),
      it(E(1012), 'à l’impératif, même image'),
    ], chk(
      'Et ces quatre-là ?',
      ['Une autre image.', 'La même image : by heart, turn your back.'], 1,
      "Parfois, les deux langues ont eu la même idée. EN: sometimes both languages chose the same picture.")),
    ctl('Le sens', '« Les fraises coûtent les yeux de la tête. » Le vendeur dit que...',
      ['les fraises sont très belles', 'les fraises sont très chères', 'les fraises font mal aux yeux'], 1,
      "Le sens est dans la phrase entière : c'est très cher. EN: they are very expensive."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent', 'motamot'],
};

/** USE: where the four blocks do a real job. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où tu vas les dire',
  cases: [
    uc('Tu demandes de l’aide à un voisin pour ton déménagement', E(1005)),
    uc('Tu te plains du prix des loyers', E(1010)),
    uc('Tu parles d’une chanson que tu adores', E(1011)),
    uc('Une amie ne te parle plus après une dispute', E(1007)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl("L'image", '« Coûter les yeux de la tête » : où est le sens ?',
    ['dans les yeux', 'dans la phrase entière'], 1,
    "Les yeux sont l'image ; le sens, c'est très cher. EN: the meaning is in the whole phrase."),
  ctl('Le mot à mot', '« It costs an arm and a leg. » En français, tu dis...',
    ['ça coûte les yeux de la tête', 'ça coûte un bras et une jambe'], 0,
    "L'anglais choisit le bras et la jambe, le français les yeux. EN: each language picks its own body part."),
  ctl('La même image', "Quelle expression a la même image qu'en anglais ?",
    ['coûter les yeux de la tête', 'donner un coup de main', 'tourner le dos'], 2,
    "Tourner le dos : turn your back. EN: the same picture."),
], ['motamot', 'equivalent']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le corps parle',
    opener: {
      line: "Tes mots sont français et ton image est anglaise : ici tu apprends à voir l'image d'une expression. EN: Your words are French and your picture is English: here you learn to see an idiom's picture.",
      imageRef: 'lessons/expressions-corps/act01.jpg',
    },
    sections: [],
    milestone: "Tu sépares l'image et le sens, et tu ne traduis plus un bras et une jambe. EN: You separate the picture from the meaning, and you no longer translate an arm and a leg.",
    estScreens: 31, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_IMAGES, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — S'ENTRAIDER
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a Québec « corvée », a neighbourhood work bee after a storm. Story
 *  bubbles avoid « ? » and « ! », like scene bubbles. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'La corvée du parc',
  frSub: 'Des mains, des coudes et un pouce',
  setting: "Samedi, à Sherbrooke. Après la tempête, tout le quartier nettoie le parc. Monique, qui organise la corvée, te raconte la semaine.",
  bubbles: [
    { from: 'narrator', fr: 'Des branches partout, un banc cassé, et trente voisins avec des gants.', en: 'Branches everywhere, a broken bench, and thirty neighbours in gloves.' },
    { from: 'coach', fr: fr(E(1024)), en: src(E(1024)).en, warn: 'la corvée : au Québec, un travail fait ensemble, sans être payé' },
    { from: 'user', fr: "Même le directeur de l'école est venu avec une pelle.", en: 'Even the school principal came with a shovel.' },
    { from: 'coach', fr: fr(E(1020)), en: src(E(1020)).en, warn: 'se serrer les coudes : rester ensemble quand c’est dur' },
    { from: 'coach', fr: 'Madame Roy a fait du café pour tout le monde. Elle a le cœur sur la main.', en: 'Madame Roy made coffee for everyone. She is very generous.', warn: 'le cœur sur la main : elle donne facilement' },
    { from: 'user', fr: 'Et ton frère a fait des pieds et des mains pour trouver une remorque.', en: 'And your brother moved heaven and earth to find a trailer.' },
    { from: 'coach', fr: 'Oui. Et la mairie nous a donné un coup de pouce pour les arbres.', en: 'Yes. And the town hall gave us a boost for the trees.', warn: 'un coup de pouce : une petite aide qui fait démarrer' },
  ],
  closing: { fr: 'Des mains, des coudes, des pieds et un pouce : cinq images, et une seule idée, on s’aide.', en: 'Hands, elbows, feet and a thumb: five pictures and one idea, we help each other.' },
  audio: REC('rec-b1-27-corvee'),
  say: REFRAME,
  terms: ['figure', 'propre'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-agir',
  title: "Cinq images de l'entraide",
  frSub: "S'aider, donner, tout essayer",
  hint: "Cinq cartes. L'image d'abord, puis le sens, puis l'anglais.",
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'equivalent', 'fauxami'],
  cards: [
    card(E(1013), 'Participer au travail', 'courant',
      "L'image : ta main dans la pâte à pain. Le sens : tu travailles avec les autres, au lieu de regarder. EN: literally the hand in the dough; in English, to pitch in."),
    card(E(1014), 'Rester unis', 'courant',
      "L'image : des coudes serrés, l'un contre l'autre. Le sens : on s'aide quand c'est difficile. EN: literally squeeze the elbows; in English, to stick together."),
    card(E(1015), 'Tout essayer', 'courant',
      "L'image : les pieds et les mains qui bougent partout. Le sens : tout faire pour réussir. EN: literally feet and hands; in English, to move heaven and earth."),
    card(E(1016), 'Aider à démarrer', 'courant',
      "L'image : un pouce qui pousse un peu. Le sens : une petite aide, au bon moment. EN: literally a blow of thumb; in English, a boost, a nudge."),
    card(E(1017), 'Très généreux', 'courant',
      "L'image : le cœur posé sur la main, prêt à donner. Le sens : donner facilement. Ce n'est pas wear your heart on your sleeve. EN: very generous."),
  ],
};

/** TELL THEM APART: the group that works, the person who helps. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le groupe, ou une personne',
  groups: [
    grp('Tout le monde ensemble', [
      it(E(1018), 'le directeur aussi'),
      it(E(1024), 'la corvée du parc'),
      it(E(1019), 'au présent, avec on'),
      it(E(1020), 'pendant la tempête'),
    ], chk(
      'Ces quatre phrases parlent de...',
      ['une personne très riche', 'un groupe qui travaille ou qui s’aide'], 1,
      "La main à la pâte et les coudes serrés : c'est le groupe. EN: pitching in and sticking together are about the group.")),
    grp('Une personne qui aide', [
      it(E(1021), 'elle a tout essayé'),
      it(E(1022), 'une petite aide, au bon moment'),
      it(E(1023), 'elle donne tout'),
      it(E(1025), 'il aide tout le monde'),
    ], chk(
      'Qui est généreux ?',
      ['la grand-mère qui a le cœur sur la main', 'la femme qui a fait des pieds et des mains'], 0,
      "Le cœur sur la main, c'est donner. Des pieds et des mains, c'est tout essayer. EN: generous against trying everything.")),
    ctl('Le pouce', '« Un petit coup de pouce » : c’est une aide...',
      ['énorme, pour toujours', 'donnée avec le pouce', 'petite, au bon moment'], 2,
      "Le pouce pousse un peu, et ça démarre. EN: a small boost at the right time."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure'],
};

/** The verb moves, the block stays. */
const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  title: 'Le verbe bouge, le reste non',
  examples: [
    ex(E(1018), 'mettre devient a mis ; la main à la pâte ne bouge pas.'),
    ex(E(1019), 'avec on, au présent : on se serre.'),
    ex(E(1020), `au passé composé : se sont serré. ${Cap(PRONOMINAL_PC_REF)} : les coudes viennent après, donc pas d'accord.`),
    ex(E(1021), 'faire devient a fait ; des pieds et des mains, dans cet ordre.'),
    ex(E(1022), 'donner devient m’a donné : le pronom va devant.'),
    ex(E(1026), 'la règle du bloc, en une phrase.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bouge', 'bloc'],
};

/** USE: real situations, the idiom that fits. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quelle image pour quelle aide',
  groups: [
    ctl('Le déménagement', 'Ton ami déménage samedi. Tu lui écris :',
      ['Je viens te donner une main.', 'Je viens te donner un coup de main.', 'Je viens te serrer les coudes.'], 1,
      "On donne un coup de main. « Une main », c'est l'anglais. EN: a coup de main, not a hand."),
    ctl('La tante', 'Ta tante paie toujours le repas de tout le monde. Elle...',
      ['a le cœur sur la main', 'a le cœur gros'], 0,
      "Le cœur sur la main : elle donne. EN: she is generous."),
    ctl('Le stage', "Un ancien prof a écrit un mot au patron, et tu as eu le stage. Il t'a...",
      ['mis la main à la pâte', 'serré les coudes', 'donné un coup de pouce'], 2,
      "Une petite aide qui fait démarrer : un coup de pouce. EN: he gave you a boost."),
    ctl('Les billets', 'Pour avoir des billets, elle a appelé dix fois et attendu trois heures. Elle a...',
      ['donné un coup de main', 'fait des pieds et des mains'], 1,
      "Elle a tout essayé. EN: she moved heaven and earth."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'motamot'],
};

/** TRAP, stepped: the English picture in French words, and the wrong part. */
const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: "Le bon morceau du corps",
  rule: {
    title: 'Le bloc ne change pas de partie du corps',
    body: "Un coup de main, pas une main. Les coudes, pas la colle. Le pouce, pas le doigt. Si tu changes une partie du corps, l'expression n'existe plus. EN: swap one body part and the idiom stops existing.",
  },
  cards: [
    { promptLabel: 'give a hand, mot à mot', promptSound: 'Tu peux me donner une main samedi ?', fr: fr(E(1005)), ipa: ipaOf(E(1005)), tip: "En français, on donne un coup de main. EN: a coup de main." },
    { promptLabel: 'pitch in, mot à mot', promptSound: 'Même le directeur a lancé dedans.', fr: fr(E(1018)), ipa: ipaOf(E(1018)), tip: "La main va dans la pâte. EN: the hand goes in the dough." },
    { promptLabel: 'stick together, mot à mot', promptSound: 'Dans le quartier, on colle ensemble.', fr: fr(E(1019)), ipa: ipaOf(E(1019)), tip: "On se serre les coudes. EN: elbows, not glue." },
    { promptLabel: "des bras à la place des pieds", promptSound: 'Elle a fait des bras et des mains pour trouver ce logement.', fr: fr(E(1021)), ipa: ipaOf(E(1021)), tip: "Des pieds et des mains, dans cet ordre. EN: feet and hands." },
    { promptLabel: 'un doigt à la place du pouce', promptSound: "Mon oncle m'a donné un coup de doigt pour trouver un stage.", fr: fr(E(1022)), ipa: ipaOf(E(1022)), tip: "Toujours le pouce. EN: always the thumb." },
    { promptLabel: 'heart on your sleeve', promptSound: 'Ma grand-mère a le cœur sur la manche.', fr: fr(E(1023)), ipa: ipaOf(E(1023)), tip: "Sur la main : elle donne. EN: on the hand, she gives." },
  ],
  drill: [
    { promptSay: 'Tu peux me donner un coup de ... ?', opts: ['main', 'bras'], correct: 0 },
    { promptSay: "Dans l'équipe, on se serre les ... .", opts: ['mains', 'coudes', 'pieds'], correct: 1 },
    { promptSay: 'Elle a fait des pieds et des ... pour venir.', opts: ['bras', 'mains'], correct: 1 },
    { promptSay: 'Tout le monde a mis la main à la ... .', opts: ['pâte', 'porte'], correct: 0 },
    { promptSay: "Il m'a donné un coup de ... pour mon CV.", opts: ['doigt', 'pied', 'pouce'], correct: 2 },
    { promptSay: 'Mon voisin a le cœur sur la ... .', opts: ['manche', 'main'], correct: 1 },
    { promptSay: 'Pendant la grève, les collègues se sont serré les ... .', opts: ['coudes', 'épaules'], correct: 0 },
    { promptSay: 'Ils ont fait des ... et des mains.', opts: ['yeux', 'pieds', 'doigts'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le bloc ne change pas de partie du corps' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la phrase fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-27-piege-aide'),
  say: REFRAME,
  terms: ['bloc', 'motamot'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le verbe', '« Se serrer les coudes » au passé composé, avec nous :',
    ['nous avons serré nos coudes', 'nous nous sommes serré les coudes'], 1,
    "Le verbe bouge, les coudes restent. EN: only the verb moves."),
  ctl('Le faux ami', '« Avoir le cœur sur la main », c’est...',
    ['être très généreux', 'montrer ses émotions'], 0,
    "Le cœur est prêt à donner. EN: very generous."),
  ctl('La petite aide', 'Laquelle est une petite aide, au bon moment ?',
    ['la main à la pâte', 'des pieds et des mains', 'un coup de pouce'], 2,
    "Le pouce pousse un peu. EN: a boost."),
], ['bloc', 'fauxami']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: "S'entraider",
    opener: {
      line: "Un parc à nettoyer, trente voisins et des gants : ici tu apprends les images de l'entraide. EN: A park to clean, thirty neighbours and gloves: here you learn the pictures of helping each other.",
      imageRef: 'lessons/expressions-corps/act02.jpg',
    },
    sections: [],
    milestone: "Tu dis qui aide, qui donne et qui ne lâche pas, avec la main, les coudes et le pouce. EN: You can say who helps, who gives and who never gives up.",
    estScreens: 47, restPoints: ['a2-construire', 'a2-choisir'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_CONSTRUIRE, A2_EXEMPLES, A2_CHOISIR, A2_PIEGE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — CE QUI AGACE
 *
 *  The first act where register decides: four of the five are familier.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: a flatshare in Liège. `hideLines`: the questions are
 *  about who is annoyed by what. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La coloc de Liège',
  frSub: "Écoute, et dis qui en a assez",
  lines: [
    ln(E(1032)), ln(E(1033)), ln(E(1034)), ln(E(1035)),
    ln(E(1036)), ln(E(1037)), ln(E(1038)), ln(E(1039)),
  ],
  questions: [
    { q: 'Première phrase : le voisin du dessus est...', opts: ['agaçant', 'gentil'], correct: 0, why: "Il lui casse les pieds avec sa musique. EN: he gets on her nerves." },
    { q: 'Deuxième phrase : la personne veut...', opts: ['plus de détails', "qu'on arrête"], correct: 1, why: "« Arrête, tu me prends la tête » : ça suffit. EN: stop, you are doing my head in." },
    { q: 'Troisième phrase : elle en a assez de quoi ?', opts: ['de son dos', 'du bruit', 'du voisin gentil'], correct: 1, why: "« J'en ai plein le dos de ce bruit. » EN: fed up with the noise." },
    { q: 'Le colocataire, la personne...', opts: ["l'adore", 'ne le supporte pas'], correct: 1, why: "Je l'ai dans le nez : je ne le supporte pas. EN: I cannot stand him." },
    { q: 'Les réunions sans fin sont...', opts: ['ennuyeuses', 'utiles', 'trop courtes'], correct: 0, why: "Elles lui cassent les pieds. EN: they bore her stiff." },
  ],
  audio: REC('rec-b1-27-coloc-ecoute'),
  say: REFRAME,
  terms: ['figure', 'registre'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-humeur',
  title: 'Cinq façons de dire que ça agace',
  frSub: 'Entre amis, surtout',
  hint: 'Cinq cartes. Regarde le registre, en haut de chaque carte.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'equivalent'],
  cards: [
    card(E(1027), 'Agacer, ennuyer', 'familier',
      "L'image : quelqu'un qui te casse les pieds. Le sens : il t'agace, ou il t'ennuie. EN: literally break someone's feet; in English, get on someone's nerves."),
    card(E(1028), 'Fatiguer, énerver', 'familier',
      "L'image : on te prend la tête. Le sens : tu n'en peux plus. Se prendre la tête : se disputer, ou trop réfléchir. EN: to do someone's head in."),
    card(E(1029), 'En avoir assez', 'familier',
      "L'image : un dos plein, trop lourd à porter. Le sens : tu en as assez. EN: literally the back full of it; in English, to be fed up."),
    card(E(1030), 'Énerver', 'courant',
      "L'image : quelque chose qui tape sur tes nerfs. Le sens : ça t'énerve. Presque l'image anglaise. EN: to get on your nerves."),
    card(E(1031), 'Ne pas supporter', 'familier',
      "L'image : quelqu'un qui te reste dans le nez. Le sens : tu ne le supportes pas, souvent sans raison. EN: literally have someone in your nose; to be unable to stand them."),
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: "Ce qui agace, et qui n'en peut plus",
  groups: [
    grp("Quelque chose agace quelqu'un", [
      it(E(1032), 'la musique du voisin'),
      it(E(1035), 'une alarme'),
      it(E(1037), 'des réunions'),
      it(E(1039), 'des questions'),
    ], chk(
      'Dans ces phrases, qui agace ?',
      ['la personne qui parle', 'le voisin, l’alarme, les réunions, les questions'], 1,
      "Le sujet agace, et me dit qui est agacé. EN: the subject annoys; me is the victim.")),
    grp("Quelqu'un n'en peut plus", [
      it(E(1033), 'arrête'),
      it(E(1034), 'le bruit, encore'),
      it(E(1038), 'les horaires de nuit'),
      it(E(1036), 'le colocataire'),
    ], chk(
      'Ces quatre personnes sont...',
      ['à bout, ou fâchées', 'contentes, au fond'], 0,
      "Elles en ont assez, ou elles ne supportent plus quelqu'un. EN: they have had enough."),
    ),
    ctl('Le registre', 'Laquelle peux-tu écrire à ton propriétaire ?',
      ['Le voisin me casse les pieds.', "J'en ai plein le dos.", fr(E(1041))], 2,
      "Les deux premières sont familières. À l'écrit : ça me dérange. EN: write the courant one."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

/** NAME, as a lookup: six ways, with the register in its own column. */
const A3_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-tableau',
  layer: 'core',
  sheetId: 'sheet-humeur',
  title: 'Six façons, deux registres',
  cols: ['Expression', 'Registre', 'Sens'],
  rows: [
    { cells: ['casser les pieds', 'familier', 'agacer'], say: fr(E(1032)),
      detail: { title: 'Casser les pieds', body: "Entre amis. Le sujet est ce qui agace. EN: informal; the subject is the annoying thing.", say: fr(E(1037)) } },
    { cells: ['prendre la tête', 'familier', 'énerver'], say: fr(E(1033)),
      detail: { title: 'Prendre la tête', body: "Très oral, souvent avec arrête. EN: very spoken.", say: fr(E(1033)) } },
    { cells: ['en avoir plein le dos', 'familier', 'en avoir assez'], say: fr(E(1034)),
      detail: { title: 'Plein le dos', body: "N'oublie pas en : j'en ai. EN: keep the en.", say: fr(E(1038)) } },
    { cells: ['taper sur les nerfs', 'courant', 'énerver'], say: fr(E(1035)),
      detail: { title: 'Les nerfs', body: "Plus neutre, presque l'image anglaise. EN: more neutral.", say: fr(E(1039)) } },
    { cells: ["avoir quelqu'un dans le nez", 'familier', 'ne pas supporter'], say: fr(E(1036)),
      detail: { title: 'Dans le nez', body: "Pour une personne, jamais pour une chose. EN: for people only.", say: fr(E(1036)) } },
    { cells: ['ça me dérange', 'courant', "la même idée, à l'écrit"], say: fr(E(1041)),
      detail: { title: 'Pour écrire', body: "Pas d'image : c'est ce que tu écris au propriétaire. EN: the plain version for writing.", say: fr(E(1041)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon registre au bon moment',
  groups: [
    ctl('Chez des amis', "Ton ami parle de son travail depuis une heure. Plus tard, tu dis à ta sœur :",
      ["Il m'a cassé les pieds avec son travail.", "Il m'a tourné le dos avec son travail."], 0,
      "Il t'a ennuyé : il t'a cassé les pieds. Entre sœurs, le familier va très bien. EN: he bored you stiff."),
    ctl('Au travail', 'Tu écris à ta patronne à propos du bruit du chantier :',
      ['Ce chantier me casse les pieds.', 'Le bruit du chantier me dérange beaucoup.'], 1,
      "À ta patronne, par écrit : le courant. EN: in writing to your boss, the courant form."),
    ctl('Encore', 'Troisième panne de métro cette semaine. Tu soupires :',
      ["J'ai le dos plein.", 'Ça me prend le dos.', "J'en ai plein le dos."], 2,
      "Le bloc entier, avec en. EN: the whole block, with en."),
    ctl('Le nez', '« Je l’ai dans le nez » veut dire...',
      ['je le sens bien', 'je ne le supporte pas'], 1,
      "Ce n'est pas une odeur : c'est une personne que tu ne supportes pas. EN: someone you cannot stand."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'figure'],
};

/** TRAP: the English possessive, the missing en, the register slip. */
const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs quand ça agace',
  errors: [
    { wrong: 'Ce bruit me casse mes pieds.', right: 'Ce bruit me casse les pieds.',
      why: "Normal : l'anglais dit my nerves. Mais me dit déjà à qui sont les pieds, donc les. EN: me already says whose, so les." },
    { wrong: 'Il me tape sur mes nerfs.', right: 'Il me tape sur les nerfs.',
      why: "La même habitude anglaise. Le pronom me suffit. EN: the pronoun is enough." },
    { wrong: "J'ai plein le dos de ce bruit.", right: fr(E(1034)),
      why: "On oublie en parce qu'il ne se traduit pas. Mais le bloc est en avoir plein le dos. EN: en belongs to the block." },
    { wrong: 'Madame, votre chien me casse les pieds.', right: 'Madame, votre chien me dérange beaucoup.',
      why: "La phrase est juste, mais familière. Avec une voisine que tu vouvoies, elle sonne impolie. EN: correct, but too familiar with vous." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'bloc'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le registre', 'Combien de ces cinq expressions sont familières ?',
    ['une', 'quatre', 'aucune'], 1,
    "Toutes sauf taper sur les nerfs. EN: four of the five."),
  ctl("À l'écrit", 'Pour une lettre au propriétaire, tu écris...',
    ['Le bruit me dérange beaucoup.', 'Le bruit me prend la tête.'], 0,
    "Le courant, sans image. EN: the plain courant form."),
  ctl('Le bloc', 'Laquelle est juste ?',
    ["J'ai plein le dos.", "J'en ai plein le dos."], 1,
    "En fait partie du bloc. EN: en is part of it."),
], ['registre', 'bloc']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Ce qui agace',
    opener: {
      line: "Un voisin trop bruyant, une alarme, des réunions sans fin : ici tu dis que ça agace, et à qui tu peux le dire. EN: A noisy neighbour, an alarm, endless meetings: here you say it annoys you, and whom you can say it to.",
      imageRef: 'lessons/expressions-corps/act03.jpg',
    },
    sections: [],
    milestone: "Tu dis que ça t'agace avec cinq images, et tu sais lesquelles garder pour tes amis. EN: You can say something annoys you five ways, and you know which to keep for friends.",
    estScreens: 38, restPoints: ['a3-construire', 'a3-choisir'],
  },
  sections: [A3_ECOUTE, A3_CARTES, A3_CONSTRUIRE, A3_TABLEAU, A3_CHOISIR, A3_ERREURS, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA PARESSE ET L'EFFORT
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: an email between two close colleagues in Lyon, where the familier
 *  idioms are normal because the reader is a friend. */
const A4_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courriel de Juliette',
  frSub: 'Qui travaille, et qui ne fait rien',
  text: COURRIEL_TEXT,
  glossary: [
    { word: 'un petit point', en: 'a quick update', note: 'Quelques nouvelles rapides sur le travail.' },
    { word: 'la maquette', en: 'the mock-up', note: 'Un premier modèle du projet, avant la version finale.' },
    { word: 'méchante', en: 'mean', note: 'Qui veut faire du mal, ou qui dit des choses dures.' },
  ],
  questions: [
    { q: 'Qui travaille beaucoup ?', a: "L'équipe, sauf Bastien : elle travaille d'arrache-pied depuis deux semaines." },
    { q: 'Que fait Bastien pendant les réunions ?', a: 'Il se tourne les pouces, ou il a la tête dans les nuages : il ne fait rien.' },
    { q: 'Et Juliette, depuis lundi ?', a: 'Elle se casse la tête pour trouver une solution.' },
    { q: '« Il a un poil dans la main » : est-ce un compliment ?', a: "Non : il est très paresseux. C'est familier, et Juliette l'écrit parce que Nadia est une collègue proche." },
  ],
  audio: REC('rec-b1-27-courriel'),
  say: REFRAME,
  terms: ['figure', 'registre'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-agir',
  title: 'Ne rien faire, tout donner',
  frSub: "La paresse et l'effort",
  hint: 'Cinq cartes. Trois pour la paresse, deux pour l’effort.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'equivalent', 'registre'],
  cards: [
    card(E(1042), 'Très paresseux', 'familier',
      "L'image : un poil a poussé dans ta main, tant elle ne travaille jamais. Le sens : tu es très paresseux. EN: literally a hair in the hand; in English, bone idle."),
    card(E(1043), 'Ne rien faire', 'courant',
      "L'image : deux pouces qui tournent l'un autour de l'autre. Le sens : tu attends, sans rien faire. EN: to twiddle your thumbs, the same picture."),
    card(E(1044), 'Ne pas aider du tout', 'courant',
      "L'image : dix doigts qui ne font rien. Le sens : tu ne travailles pas du tout. EN: literally nothing with your ten fingers; in English, not lift a finger."),
    card(E(1045), 'Travailler très dur', 'courant',
      "L'image : tu tires si fort que ton pied s'arrache du sol. Le sens : tu travailles sans t'arrêter. EN: literally tearing out the foot; in English, work flat out."),
    card(E(1046), 'Chercher, ou s’inquiéter', 'familier',
      "L'image : une tête qui casse à force de penser. Le sens : chercher très fort, ou se faire du souci pour rien. EN: to rack your brains."),
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Les bras croisés, ou les manches relevées',
  groups: [
    grp('La paresse', [
      it(E(1047), 'un collègue'),
      it(E(1048), 'depuis ce matin'),
      it(E(1049), 'pendant les vacances'),
      it(E(1053), 'un frère'),
    ], chk(
      'Ces quatre personnes...',
      ['ne font rien', 'travaillent trop'], 0,
      "Un poil, des pouces qui tournent, dix doigts immobiles : personne ne travaille. EN: nobody works.")),
    grp("L'effort", [
      it(E(1050), 'une équipe'),
      it(E(1054), 'un examen'),
      it(E(1052), 'un rapport'),
      it(E(1051), "quelqu'un qui cherche trop"),
    ], chk(
      'Et ces quatre-là ?',
      ['elles travaillent ou cherchent fort', 'elles attendent', 'elles sont en vacances'], 0,
      "D'arrache-pied et la tête cassée : beaucoup d'effort. EN: a lot of effort.")),
    ctl('Le sens propre', '« Un poil dans la main » : la main de qui ?',
      ["de quelqu'un qui ne travaille jamais", "de quelqu'un qui travaille trop", "d'un coiffeur"], 0,
      "Une main qui ne sert jamais, et un poil y pousse. EN: a hand so idle that hair grows on it."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'figure'],
};

/** Consolidation, as answers: English front, French block back. No « EN: »
 *  tail on a back. */
const A4_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a4-flash',
  layer: 'core',
  title: 'Huit cartes pour agir',
  cards: [
    { front: 'to be bone idle', back: 'avoir un poil dans la main', say: fr(E(1047)) },
    { front: 'to twiddle your thumbs', back: 'se tourner les pouces', say: fr(E(1048)) },
    { front: 'to not lift a finger', back: 'ne rien faire de ses dix doigts', say: fr(E(1053)) },
    { front: 'to work flat out', back: "travailler d'arrache-pied", say: fr(E(1050)) },
    { front: 'to rack your brains', back: 'se casser la tête', say: fr(E(1052)) },
    { front: 'to give a hand', back: 'donner un coup de main', say: fr(E(1009)) },
    { front: 'to pitch in', back: 'mettre la main à la pâte', say: fr(E(1018)) },
    { front: 'to stick together', back: 'se serrer les coudes', say: fr(E(1019)) },
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
  title: 'Qui travaille, vraiment',
  groups: [
    ctl('Les cartons', 'Tu portes des cartons. Ton colocataire joue sur son téléphone. Il...',
      ['se casse la tête', "travaille d'arrache-pied", 'se tourne les pouces'], 2,
      "Il attend, sans rien faire. EN: he is twiddling his thumbs."),
    ctl('Le problème', 'Tu cherches une solution depuis trois heures. Tu dis :',
      ['Je me casse la tête.', 'Je me tourne les pouces.'], 0,
      "Tu cherches très fort. EN: you are racking your brains."),
    ctl('Les examens', 'Ta sœur révise jour et nuit. Elle travaille...',
      ['avec un poil dans la main', "d'arrache-pied"], 1,
      "Sans s'arrêter. EN: flat out."),
    ctl('La vaisselle', 'Il ne fait jamais la vaisselle ni le ménage. Entre amis, tu dis :',
      ['Il a un poil dans la main.', 'Il a le cœur sur la main.'], 0,
      "Paresseux, pas généreux. EN: bone idle, not generous."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'fauxami'],
};

/** TRAP, stepped: the swapped part, the English possessive, the reversed
 *  meaning. */
const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Un poil, dix doigts, un pied',
  rule: {
    title: 'Le compte et le possessif sont fixés',
    body: "Un poil, pas un cheveu. Dix doigts, pas cinq. Le pied dans arrache-pied. Et avec se ou me, c'est les ou la : je me casse la tête, pas ma tête. EN: the numbers are fixed, and after se or me you say la or les.",
  },
  cards: [
    { promptLabel: 'le possessif anglais', promptSound: 'Il tourne ses pouces depuis ce matin.', fr: fr(E(1048)), ipa: ipaOf(E(1048)), tip: "Se tourner les pouces : se, puis les. EN: se plus les, not his." },
    { promptLabel: 'un cheveu à la place du poil', promptSound: 'Mon collègue a un cheveu dans la main.', fr: fr(E(1047)), ipa: ipaOf(E(1047)), tip: "Un poil, toujours. EN: always un poil." },
    { promptLabel: 'la main à la place du pied', promptSound: "L'équipe a travaillé d'arrache-main pour finir à temps.", fr: fr(E(1050)), ipa: ipaOf(E(1050)), tip: "D'arrache-pied : le pied. EN: the foot." },
    { promptLabel: 'ma tête', promptSound: 'Je me suis cassé ma tête sur ce rapport.', fr: fr(E(1052)), ipa: ipaOf(E(1052)), tip: "Me dit déjà qui : la tête. EN: la, not ma." },
    { promptLabel: 'cinq doigts', promptSound: "Pendant les vacances, je n'ai rien fait de mes cinq doigts.", fr: fr(E(1049)), ipa: ipaOf(E(1049)), tip: "Dix doigts : les deux mains. EN: ten." },
    { promptLabel: 'le sens inversé', promptSound: 'Elle a un poil dans la main : elle travaille jour et nuit.', fr: fr(E(1054)), ipa: ipaOf(E(1054)), tip: "Un poil dans la main, c'est paresseux. Pour elle : d'arrache-pied. EN: the hair means idle." },
  ],
  drill: [
    { promptSay: 'Mon collègue a un ... dans la main.', opts: ['cheveu', 'poil'], correct: 1 },
    { promptSay: 'Il ne fait rien de ses ... doigts.', opts: ['dix', 'cinq', 'deux'], correct: 0 },
    { promptSay: "Nous avons travaillé d'arrache-... .", opts: ['main', 'tête', 'pied'], correct: 2 },
    { promptSay: 'Ne te casse pas ... tête.', opts: ['la', 'ta'], correct: 0 },
    { promptSay: 'Ils se tournent ... pouces.', opts: ['leurs', 'les'], correct: 1 },
    { promptSay: 'Elle révise jour et nuit : elle travaille ... .', opts: ["d'arrache-pied", 'avec un poil dans la main'], correct: 0 },
    { promptSay: 'Tu te tournes les ... au lieu de m’aider.', opts: ['pieds', 'doigts', 'pouces'], correct: 2 },
    { promptSay: 'Je me suis cassé la ... sur ce problème.', opts: ['main', 'tête'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le compte et le possessif sont fixés' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la phrase fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-27-piege-effort'),
  say: REFRAME,
  terms: ['bloc', 'bouge'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La paresse', 'Laquelle dit que quelqu’un travaille très dur ?',
    ["travailler d'arrache-pied", 'avoir un poil dans la main', 'se tourner les pouces'], 0,
    "Le pied qui s'arrache : l'effort. EN: flat out."),
  ctl('Le registre', '« Il a un poil dans la main » : tu peux l’écrire...',
    ['à une collègue proche', 'dans une évaluation officielle'], 0,
    "C'est familier. EN: informal."),
  ctl('Le possessif', 'Laquelle est juste ?',
    ['Je me casse ma tête.', 'Je me casse la tête.'], 1,
    "Me dit déjà qui. EN: me already says whose."),
], ['registre', 'bouge']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: "La paresse et l'effort",
    opener: {
      line: "Un collègue qui ne fait rien, une équipe qui ne s'arrête pas : ici tu apprends à dire qui travaille. EN: One colleague doing nothing, a team that never stops: here you learn to say who is working.",
      imageRef: 'lessons/expressions-corps/act04.jpg',
    },
    sections: [],
    milestone: "Tu sépares la paresse de l'effort en cinq images, sans changer un doigt du bloc. EN: You can tell laziness from effort in five pictures, without changing a finger of the block.",
    estScreens: 48, restPoints: ['a4-construire', 'a4-choisir'],
  },
  sections: [A4_LECTURE, A4_CARTES, A4_CONSTRUIRE, A4_FLASH, A4_CHOISIR, A4_PIEGE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LA GAFFE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a dinner in Genève told the next day. No « ? » or « ! » in a bubble. */
const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Le souper chez les parents de Lina',
  frSub: 'Une soirée pleine de gaffes',
  setting: "Dimanche, à Genève. Lina te raconte le souper où son copain Luca a rencontré ses parents pour la première fois.",
  bubbles: [
    { from: 'narrator', fr: 'Lina rit, mais elle a encore un peu honte.', en: 'Lina is laughing, but she is still a bit embarrassed.' },
    { from: 'coach', fr: 'Luca s’est levé du pied gauche : il a raté son train et il est arrivé en retard.', en: 'Luca got out of bed on the wrong side: he missed his train and arrived late.', warn: 'se lever du pied gauche : de mauvaise humeur, et tout va mal' },
    { from: 'coach', fr: 'Puis il a voulu ouvrir le vin. Avec ses deux mains gauches, il a cassé un verre.', en: 'Then he tried to open the wine. Clumsy as he is, he broke a glass.', warn: 'deux mains gauches : maladroit' },
    { from: 'user', fr: 'Et après, il a mis les pieds dans le plat.', en: 'And then he put his foot in it.' },
    { from: 'coach', fr: "Oui. Il a parlé de mon ex devant mon père. Mon père n'a rien dit pendant dix minutes.", en: 'Yes. He talked about my ex in front of my father. My father said nothing for ten minutes.' },
    { from: 'coach', fr: "Heureusement, ma mère n'a pas la langue dans sa poche. Elle a changé de sujet en riant.", en: 'Luckily my mother is never lost for words. She changed the subject, laughing.', warn: 'pas la langue dans sa poche : elle parle facilement' },
    { from: 'user', fr: 'La prochaine fois, il va tourner sept fois sa langue dans sa bouche.', en: 'Next time he will think before he speaks.', warn: 'sa langue : la langue de Luca' },
  ],
  closing: { fr: 'Un pied gauche, deux mains gauches, deux pieds dans le plat : la soirée entière tient en trois images.', en: 'A left foot, two left hands, two feet in the dish: the whole evening fits in three pictures.' },
  audio: REC('rec-b1-27-souper'),
  say: REFRAME,
  terms: ['figure', 'bouge'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-tete',
  title: 'Les gaffes et la langue',
  frSub: 'Maladroit, ou trop bavard',
  hint: 'Cinq cartes. Trois gaffes, puis deux façons de parler.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'equivalent'],
  cards: [
    card(E(1057), 'Faire une gaffe', 'courant',
      "L'image : tes pieds dans le plat, au milieu du repas. Le sens : tu dis ce qu'il ne fallait pas dire. EN: literally the feet in the dish; in English, to put your foot in it."),
    card(E(1058), 'Être maladroit', 'familier',
      "L'image : deux mains gauches, et aucune droite. Le sens : tu casses et tu rates tout avec tes mains. EN: literally two left hands; in English, all thumbs."),
    card(E(1059), 'De mauvaise humeur', 'courant',
      "L'image : le pied gauche touche le sol en premier. Le sens : tu es de mauvaise humeur, et tout va mal. EN: to get out of bed on the wrong side."),
    card(E(1060), 'Tout oser dire', 'courant',
      "L'image : ta langue n'est pas rangée dans ta poche. Le sens : tu parles facilement, tu réponds vite. EN: never lost for words."),
    card(E(1061), 'Réfléchir avant de parler', 'courant',
      "L'image : la langue tourne sept fois avant de sortir. Le sens : prends ton temps avant de répondre. EN: think before you speak."),
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Les mains, les pieds, la langue',
  groups: [
    grp('Les mains et les pieds', [
      it(E(1063), 'rien ne marche'),
      it(E(1068), 'un verre cassé'),
      it(E(1064), 'ce matin'),
      it(E(1069), 'ne lui parle pas'),
    ], chk(
      'Ces quatre personnes sont...',
      ['maladroites, ou de mauvaise humeur', 'très calmes'], 0,
      "Deux mains gauches, ou le pied gauche : ça commence mal. EN: clumsy or grumpy.")),
    grp('La langue', [
      it(E(1062), 'son ex'),
      it(E(1067), 'au souper'),
      it(E(1065), 'ma sœur'),
      it(E(1070), 'les clients'),
    ], chk(
      "Ici, ce qui compte, c'est...",
      ['les mains', "ce qu'on dit"], 1,
      "Une gaffe, ou une réponse rapide : tout passe par la parole. EN: it is all about words.")),
    ctl('Le plat', '« Il a mis les pieds dans le plat. » Qu’est-ce qui est tombé ?',
      ['un mot de trop', 'un plat', 'ses chaussures'], 0,
      "Rien n'est tombé sur la table : il a dit une chose de trop. EN: a word too many."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'propre'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris les gaffes que tu entends',
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['bloc'],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La bonne image pour la bonne gaffe',
  groups: [
    ctl('Le souper', 'Tu parles du divorce de ton hôte devant ses enfants. Tu as...',
      ['mis les pieds dans le plat', 'tourné sept fois ta langue', 'deux mains gauches'], 0,
      "Une chose de trop, au mauvais moment. EN: you put your foot in it."),
    ctl("L'étagère", "Ton ami a monté l'étagère à l'envers, deux fois. Il...",
      ["n'a pas la langue dans sa poche", 'a deux mains gauches'], 1,
      "Ce sont ses mains qui ratent. EN: he is all thumbs."),
    ctl('La réunion', 'Ta patronne te pose une question piège. Avant de répondre, tu...',
      ['tournes sept fois ta langue dans ta bouche', 'te lèves du pied gauche'], 0,
      "Tu prends le temps. Et ta langue, parce que c'est toi. EN: you think first."),
    ctl('La vendeuse', 'La vendeuse répond à tout, vite et avec humour. Elle...',
      ["n'a pas la langue dans sa poche", 'a mis les pieds dans le plat', 'a deux mains gauches'], 0,
      "Elle parle facilement. EN: she is never lost for words."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'bouge'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre gaffes de langue',
  errors: [
    { wrong: "J'ai mis mon pied dedans en parlant de son ex.", right: fr(E(1062)),
      why: "Normal : c'est put your foot in it, mot à mot. En français, les pieds vont dans le plat. EN: the French picture is the feet in the dish." },
    { wrong: "Tu t'es levé du mauvais côté du lit ce matin.", right: fr(E(1064)),
      why: "On te comprend, c'est l'image anglaise. L'expression française, elle, parle du pied gauche. EN: understood, but the French idiom is the left foot." },
    { wrong: 'Avant de répondre, tourne sept fois sa langue dans sa bouche.', right: fr(E(1066)),
      why: "Normal : le dictionnaire écrit sa langue. Mais tu parles à quelqu'un que tu tutoies : ta langue, ta bouche. EN: the possessive follows the person." },
    { wrong: "Ma sœur n'a pas la bouche dans sa poche.", right: fr(E(1065)),
      why: "La bouche semble logique pour parler, mais le bloc dit la langue. EN: the tongue, not the mouth." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motamot', 'bouge'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La gaffe', 'Tu as dit un secret devant la personne concernée. Tu as...',
    ['mis les pieds dans le plat', 'tourné sept fois ta langue dans ta bouche'], 0,
    "Une gaffe. EN: you put your foot in it."),
  ctl('Le possessif', 'À ton ami : « Tourne sept fois ... langue dans ... bouche. »',
    ['sa / sa', 'ta / ta'], 1,
    "Tu parles à ton ami : ta. EN: ta, for tu."),
  ctl('Les mains', 'Quelle expression parle des mains ?',
    ['se lever du pied gauche', 'ne pas avoir la langue dans sa poche', 'avoir deux mains gauches'], 2,
    "Deux mains gauches : maladroit. EN: all thumbs."),
], ['bouge', 'figure']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'La gaffe',
    opener: {
      line: "Un verre cassé, un mot de trop devant les parents : ici tu apprends à raconter une gaffe, et à l'éviter. EN: A broken glass, one word too many in front of the parents: here you learn to tell a blunder, and to avoid one.",
      imageRef: 'lessons/expressions-corps/act05.jpg',
    },
    sections: [],
    milestone: "Tu racontes une gaffe et tu dis qui parle bien, avec la langue et le possessif justes. EN: You can tell a blunder and say who speaks well, with the right tongue and possessive.",
    estScreens: 42, restPoints: ['a5-construire', 'a5-choisir'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_CONSTRUIRE, A5_DICTEE, A5_CHOISIR, A5_ERREURS, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LA TÊTE AILLEURS
 *
 *  Seven idioms, one of them Québec only: the first act where a variant
 *  must be placed on a map.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: Monday morning in an office in Québec City. */
const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Lundi matin, à Québec',
  frSub: 'Qui dort encore, et qui voit tout',
  lines: [
    ln(E(1080)), ln(E(1081)), ln(E(1082)), ln(E(1083)), ln(E(1084)),
    ln(E(1085)), ln(E(1086)), ln(E(1087)), ln(E(1088)), ln(E(1089)),
  ],
  questions: [
    { q: 'Première phrase : il est souvent...', opts: ['très attentif', 'dans ses rêves'], correct: 1, why: "La tête dans les nuages : il rêve. EN: head in the clouds." },
    { q: "Deuxième phrase : pourquoi s'excuse-t-elle ?", opts: ['elle pensait à autre chose', 'elle était malade', 'elle était en retard'], correct: 0, why: "J'avais la tête ailleurs. EN: I was miles away." },
    { q: 'À six heures du matin, la personne est...', opts: ['en pleine forme', 'mal réveillée'], correct: 1, why: "Les yeux dans la graisse de bine : à peine réveillée. EN: bleary-eyed." },
    { q: "« Jeter un coup d'œil à mon courriel », c'est...", opts: ['le lire vite', 'le supprimer', 'le traduire'], correct: 0, why: "Un regard rapide. EN: a quick look." },
    { q: "L'erreur, on la voit...", opts: ['tout de suite', 'à peine'], correct: 0, why: "Elle saute aux yeux. EN: at once." },
  ],
  audio: REC('rec-b1-27-lundi-ecoute'),
  say: REFRAME,
  terms: ['figure', 'variante'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-tete',
  title: 'La tête et les yeux',
  frSub: 'Distrait, attentif, évident',
  hint: 'Sept cartes. Quatre têtes absentes, puis trois yeux qui travaillent.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'variante', 'equivalent'],
  cards: [
    card(E(1073), 'Rêver', 'courant',
      "L'image : ta tête flotte dans les nuages. Le sens : tu rêves, tu ne suis pas. EN: head in the clouds, the same picture."),
    card(E(1074), 'Penser à autre chose', 'courant',
      "L'image : ta tête est partie ailleurs. Le sens : tu es là, mais tu penses à autre chose. EN: to be miles away."),
    card(E(1075), 'Mal réveillé', 'familier',
      "L'image : des yeux qui ne sont pas en face des trous du visage. Le sens : tu n'es pas bien réveillé. EN: not with it, half asleep."),
    card(E(1076), 'Mal réveillé, au Québec', 'familier · Québec',
      "L'image : des yeux dans la graisse de bine, une sauce aux haricots. Le sens : tu es à peine réveillé. En France, on ne la comprend pas. EN: bleary-eyed."),
    card(E(1077), 'Regarder vite', 'courant',
      "L'image : un œil lancé comme un coup. Le sens : regarder rapidement. EN: literally throw a blow of eye; in English, take a quick look."),
    card(E(1078), 'Surveiller', 'courant',
      "L'image : un œil posé sur quelque chose. Le sens : surveiller, sans arrêt. EN: to keep an eye on, the same picture."),
    card(E(1079), 'Être évident', 'courant',
      "L'image : la chose saute jusqu'à tes yeux. Le sens : on la voit tout de suite. EN: literally jump to the eyes; in English, glaringly obvious."),
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'La tête absente, les yeux ouverts',
  groups: [
    grp('La tête est ailleurs', [
      it(E(1080), 'toujours'),
      it(E(1081), 'pardon'),
      it(E(1082), 'le lundi'),
      it(E(1083), 'à six heures, au Québec'),
    ], chk(
      'Ces quatre personnes sont...',
      ['distraites ou mal réveillées', 'très attentives', 'en colère'], 0,
      "Les nuages, ailleurs, les trous, la graisse de bine : personne n'est vraiment là. EN: nobody is really there.")),
    grp('Les yeux travaillent', [
      it(E(1084), 'un courriel'),
      it(E(1085), 'les enfants'),
      it(E(1087), 'le plan'),
      it(E(1088), 'le sac'),
    ], chk(
      'Et ici, les yeux...',
      ['dorment encore', 'regardent ou surveillent'], 1,
      "Un coup d'œil, un œil sur : regarder vite, ou surveiller. EN: looking or watching.")),
    ctl('Évident', "« L'erreur saute aux yeux. » Est-elle difficile à voir ?",
      ['Non, on la voit tout de suite.', 'Oui, il faut chercher.'], 0,
      "Elle saute jusqu'à tes yeux. EN: obvious."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure'],
};

const A6_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-tableau',
  layer: 'core',
  sheetId: 'sheet-tete',
  title: 'Six images, où et avec qui',
  cols: ['Expression', 'Registre', 'Sens'],
  rows: [
    { cells: ['la tête dans les nuages', 'courant', 'rêver'], say: fr(E(1080)),
      detail: { title: 'Les nuages', body: "La même image qu'en anglais. EN: the same picture.", say: fr(E(1080)) } },
    { cells: ['la tête ailleurs', 'courant', 'penser à autre chose'], say: fr(E(1081)),
      detail: { title: 'Ailleurs', body: "Souvent pour s'excuser. EN: often an apology.", say: fr(E(1081)) } },
    { cells: ['les yeux en face des trous', 'familier', 'mal réveillé'], say: fr(E(1082)),
      detail: { title: 'En France', body: "Toujours au négatif. EN: always negative.", say: fr(E(1082)) } },
    { cells: ['la graisse de bine', 'familier, Québec', 'mal réveillé'], say: fr(E(1083)),
      detail: { title: 'Au Québec', body: "Personne ne la comprend en France. EN: Québec only.", say: fr(E(1090)) } },
    { cells: ["un coup d'œil", 'courant', 'regarder vite'], say: fr(E(1084)),
      detail: { title: 'Jeter', body: "On jette un coup d'œil. EN: throw, not take.", say: fr(E(1087)) } },
    { cells: ['sauter aux yeux', 'courant', 'être évident'], say: fr(E(1086)),
      detail: { title: 'Aux yeux', body: "Avec ça : ça saute aux yeux que... EN: with ça, it is obvious that.", say: fr(E(1089)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['variante', 'registre'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Où tu es, et à qui tu parles',
  groups: [
    ctl('À Québec', 'Tu as dormi quatre heures. Tu dis à ta collègue de Québec :',
      ["J'ai les yeux dans la graisse de bine.", "J'ai le cœur sur la main."], 0,
      "Au Québec, tout le monde comprend. EN: fine in Québec."),
    ctl('À Paris', 'Même nuit, mais tu es à Paris. Pour être compris, tu dis :',
      ["J'ai les yeux dans la graisse de bine.", "Je n'ai pas les yeux en face des trous.", 'Ça me saute aux yeux.'], 1,
      "En France, la même idée a une autre image. EN: in France, the other idiom."),
    ctl('Le sac', 'Ton amie va aux toilettes, au café. Elle te demande de...',
      ["jeter un coup d'œil à son sac", 'garder un œil sur son sac'], 1,
      "Surveiller tout le temps, pas regarder une fois. EN: keep watching, not one glance."),
    ctl('La question', "Ton collègue n'a pas entendu la question. Il avait...",
      ['la tête ailleurs', 'les yeux plus gros que le ventre', 'le cœur gros'], 0,
      "Il pensait à autre chose. EN: he was miles away."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['variante', 'figure'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: "Un coup d'œil, pas un regard",
  rule: {
    title: "Le français a son verbe et sa préposition",
    body: "On jette un coup d'œil : on ne prend pas un regard. On garde un œil sur : pas un œil ouvert. Ça saute aux yeux : à les yeux, pas dans. EN: the verb and the little word are part of the block.",
  },
  cards: [
    { promptLabel: 'take a look, mot à mot', promptSound: "J'ai pris un regard au plan avant de partir.", fr: fr(E(1087)), ipa: ipaOf(E(1087)), tip: "On jette un coup d'œil. EN: throw a blow of eye." },
    { promptLabel: 'keep an eye out', promptSound: 'Garde un œil ouvert sur ton sac dans le métro.', fr: fr(E(1088)), ipa: ipaOf(E(1088)), tip: "Garder un œil sur, sans ouvert. EN: no ouvert." },
    { promptLabel: 'le ciel à la place des nuages', promptSound: 'Il a toujours la tête dans le ciel.', fr: fr(E(1080)), ipa: ipaOf(E(1080)), tip: "Dans les nuages. EN: the clouds." },
    { promptLabel: 'dans les yeux', promptSound: "L'erreur saute dans les yeux.", fr: fr(E(1086)), ipa: ipaOf(E(1086)), tip: "Sauter aux yeux. EN: aux, not dans." },
    { promptLabel: 'devant les trous', promptSound: "Le lundi matin, je n'ai pas les yeux devant les trous.", fr: fr(E(1082)), ipa: ipaOf(E(1082)), tip: "En face des trous, toujours. EN: en face des." },
    { promptLabel: 'la tête loin', promptSound: "Excuse-moi, j'avais la tête loin.", fr: fr(E(1081)), ipa: ipaOf(E(1081)), tip: "La tête ailleurs. EN: ailleurs." },
  ],
  drill: [
    { promptSay: "Tu peux ... un coup d'œil à mon texte ?", opts: ['prendre', 'jeter'], correct: 1 },
    { promptSay: 'Je garde un œil ... les enfants.', opts: ['sur', 'ouvert sur', 'dans'], correct: 0 },
    { promptSay: 'Il a la tête dans les ... .', opts: ['nuages', 'ciels'], correct: 0 },
    { promptSay: "L'erreur saute ... yeux.", opts: ['aux', 'dans les'], correct: 0 },
    { promptSay: "Je n'ai pas les yeux ... des trous.", opts: ['devant', 'en face', 'derrière'], correct: 1 },
    { promptSay: "Pardon, j'avais la tête ... .", opts: ['ailleurs', 'loin'], correct: 0 },
    { promptSay: "À Québec, à six heures, j'ai les yeux dans la graisse de ... .", opts: ['beurre', 'porc', 'bine'], correct: 2 },
    { promptSay: "Ça saute aux ... qu'il est fatigué.", opts: ['oreilles', 'yeux'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le français a son verbe et sa préposition' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la phrase fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-27-piege-yeux'),
  say: REFRAME,
  terms: ['bloc', 'motamot'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La variante', 'Où dit-on « avoir les yeux dans la graisse de bine » ?',
    ['au Québec', 'partout', 'en France'], 0,
    "Au Québec seulement. EN: Québec only."),
  ctl('Regarder', '« to take a quick look » : ...',
    ['prendre un regard', "jeter un coup d'œil"], 1,
    "On jette un coup d'œil. EN: throw, not take."),
  ctl('Évident', 'Quelle phrase dit que c’est évident ?',
    ['Il a la tête ailleurs.', 'Je garde un œil sur lui.', 'Ça saute aux yeux.'], 2,
    "Ça saute aux yeux. EN: it is glaringly obvious."),
], ['variante', 'bloc']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'La tête ailleurs',
    opener: {
      line: "Lundi, six heures, et ta tête est encore au lit : ici tu dis qui rêve, qui surveille et ce qui saute aux yeux. EN: Monday, six o'clock, and your head is still in bed: here you say who is dreaming, who is watching and what is obvious.",
      imageRef: 'lessons/expressions-corps/act06.jpg',
    },
    sections: [],
    milestone: "Tu dis que tu es distrait ou mal réveillé, au Québec comme en France, et tu jettes un coup d'œil sans prendre un regard. EN: You can say you are distracted or half awake, in Québec and in France.",
    estScreens: 48, restPoints: ['a6-cartes', 'a6-tableau'],
  },
  sections: [A6_ECOUTE, A6_CARTES, A6_CONSTRUIRE, A6_TABLEAU, A6_CHOISIR, A6_PIEGE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — L'ARGENT ET LES RELATIONS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a forum post by a Montrealer about her sister's wedding in Dakar. */
const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Un mariage à Dakar',
  frSub: 'Qui paie, combien, et avec quelles relations',
  text: FORUM_TEXT,
  glossary: [
    { word: 'le traiteur', en: 'the caterer', note: 'La personne ou l’entreprise qui prépare le repas de la fête.' },
    { word: 'franchement', en: 'frankly', note: 'Pour dire les choses comme elles sont.' },
    { word: "on l'a eue", en: 'we got it', note: 'eue : la salle, au féminin.' },
    { word: 'un gros budget', en: 'a big budget', note: 'Beaucoup d’argent à dépenser.' },
  ],
  questions: [
    { q: 'Pourquoi le mariage coûte-t-il si cher ?', a: "La salle, le traiteur et les robes coûtent les yeux de la tête, et cinq cents invités : la sœur a eu les yeux plus gros que le ventre." },
    { q: 'Qui paie ?', a: 'Toute la famille met la main au portefeuille, même Awa, à Montréal.' },
    { q: "Comment ont-ils eu la salle presque à l'œil ?", a: "L'oncle a le bras long : il connaît le propriétaire." },
    { q: 'Quelle expression Awa présente-t-elle comme québécoise ?', a: "« Ça coûte un bras ». Elle écrit : comme on dit au Québec." },
    { q: 'Que demande-t-elle au forum ?', a: 'Quoi apporter, pour ne pas arriver les mains vides.' },
  ],
  audio: REC('rec-b1-27-forum'),
  say: REFRAME,
  terms: ['figure', 'variante'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-agir',
  title: "L'argent, et qui tu connais",
  frSub: 'Payer, ne rien payer, vouloir trop',
  hint: 'Six cartes. Cinq pour l’argent, une pour les relations.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['variante', 'fauxami', 'equivalent'],
  cards: [
    card(E(1091), 'Très cher, au Québec', 'familier · Québec',
      "L'image : un bras pour payer. Le sens : c'est très cher. Surtout au Québec, entre amis. EN: an arm and a leg, with only the arm."),
    card(E(1092), 'Gratuit', 'familier',
      "L'image : payer avec un regard, rien de plus. Le sens : sans payer. EN: literally at the eye; in English, for free."),
    card(E(1093), 'Payer', 'courant',
      "L'image : ta main part chercher ton portefeuille. Le sens : tu paies, souvent sans plaisir. EN: to put your hand in your pocket, to pay up."),
    card(E(1094), 'Sans cadeau', 'courant',
      "L'image : des mains vides. Le sens : tu arrives chez quelqu'un sans rien apporter. EN: to arrive empty-handed, the same picture."),
    card(E(1095), 'Vouloir trop', 'courant',
      "L'image : tes yeux veulent plus que ton ventre ne peut manger. Le sens : tu prends ou tu prévois trop. EN: eyes bigger than your stomach, the same picture."),
    card(E(1096), 'Avoir des relations', 'courant',
      "L'image : un bras qui va très loin. Le sens : tu connais des gens importants. Ce ne sont pas de longs bras. EN: to have friends in high places."),
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Payer, trop, pas assez',
  groups: [
    grp('Payer, ou ne pas payer', [
      it(E(1097), 'une auto neuve'),
      it(E(1098), 'chez un cousin'),
      it(E(1099), 'un cadeau commun'),
      it(E(1107), 'un concert'),
    ], chk(
      'Dans ces phrases, on parle de...',
      ['la santé', "l'argent", 'la météo'], 1,
      "Un bras, l'œil, le portefeuille : tout parle d'argent. EN: all about money.")),
    grp('Trop, ou pas assez', [
      it(E(1101), 'un buffet'),
      it(E(1103), 'des meubles'),
      it(E(1100), 'un souper'),
      it(E(1106), 'la honte'),
    ], chk(
      'Les yeux plus gros que le ventre, c’est...',
      ['vouloir trop', 'avoir faim'], 0,
      "Tu prends plus que ce que tu peux finir. EN: taking more than you can handle.")),
    ctl('Le bras long', '« Son père a le bras long à la mairie. » Son père...',
      ['est très grand', 'connaît des gens importants', 'travaille à la mairie'], 1,
      "Des relations, pas des bras. EN: he has connections."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'fauxami'],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  title: 'Deux registres, un seul prix',
  examples: [
    ex(E(1004), 'courant : compris partout, même par écrit.'),
    ex(E(1097), 'familier, au Québec d’abord : entre amis.'),
    ex(E(1098), 'familier : à l’œil, entre amis.'),
    ex(E(1099), 'courant : chacun paie sa part.'),
    ex(E(1102), 'courant : on le lit aussi dans un journal.'),
    ex(E(1108), 'la règle, en une phrase.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'variante'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: "Ce que ça coûte, et comment le dire",
  groups: [
    ctl('Le souper', 'Tu es invité à souper chez des amis. Ta mère te rappelle :',
      ['Garde un œil sur ton portefeuille.', "N'arrive pas les mains vides."], 1,
      "Apporte quelque chose : du vin, un dessert. EN: do not arrive empty-handed."),
    ctl('Le buffet', 'Tu as rempli trois assiettes et tu ne peux pas finir. Tu as eu...',
      ['le bras long', 'le cœur sur la main', 'les yeux plus gros que le ventre'], 2,
      "Tes yeux voulaient plus que ton ventre. EN: your eyes were bigger than your stomach."),
    ctl('À Paris', 'Tu écris à une collègue de Paris que ton loyer est trop cher :',
      ['Mon loyer coûte un bras.', 'Mon loyer coûte les yeux de la tête.'], 1,
      "Par écrit et en France : les yeux de la tête, compris partout. EN: the one understood everywhere."),
    ctl('Le concert', "Tu n'as rien payé pour le concert. Entre amis, tu dis :",
      ["J'y suis allé à l'œil.", "J'y suis allé les mains vides."], 0,
      "À l'œil : gratuit. Les mains vides : sans cadeau. EN: free, not empty-handed."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'variante'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: "Quatre erreurs d'argent",
  errors: [
    { wrong: 'Ce vélo coûte un bras et une jambe.', right: fr(E(1004)),
      why: "Normal : c'est l'anglais, mot à mot. En français, ce sont les yeux de la tête, ou au Québec, un bras seulement. EN: the French picture is the eyes." },
    { wrong: 'Son père a le long bras à la mairie.', right: fr(E(1102)),
      why: "L'anglais met l'adjectif devant. Le bloc dit le bras long, dans cet ordre. EN: le bras long, in that order." },
    { wrong: "J'ai mangé pour l'œil chez mon cousin.", right: fr(E(1098)),
      why: "Pour semble logique, comme for free. Mais le bloc dit à l'œil. EN: à, not pour." },
    { wrong: "J'ai eu les yeux plus grands que l'estomac au buffet.", right: fr(E(1101)),
      why: "L'idée est juste et proche de l'anglais. Le bloc dit plus gros que le ventre. EN: gros and ventre." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bloc', 'motamot'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Gratuit', "« À l'œil » veut dire...",
    ['très cher', 'gratuit', 'avec attention'], 1,
    "Sans payer. EN: for free."),
  ctl('La variante', '« Ça coûte un bras » : où l’entends-tu d’abord ?',
    ['au Québec', 'dans un courriel officiel'], 0,
    "Au Québec, entre amis. EN: in Québec, informally."),
  ctl('Le faux ami', '« Avoir le bras long », c’est...',
    ['être grand', 'avoir des relations'], 1,
    "Connaître des gens importants. EN: connections."),
], ['variante', 'fauxami']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: "L'argent et les relations",
    opener: {
      line: "Un mariage à cinq cents invités, et toute la famille paie : ici tu parles d'argent, de cadeaux et de relations. EN: A wedding with five hundred guests, and the whole family pays: here you talk about money, presents and connections.",
      imageRef: 'lessons/expressions-corps/act07.jpg',
    },
    sections: [],
    milestone: "Tu dis ce qui coûte cher ou rien, qui paie et qui a des relations, en choisissant ton registre. EN: You can say what costs a lot or nothing, who pays and who has connections.",
    estScreens: 38, restPoints: ['a7-cartes', 'a7-choisir'],
  },
  sections: [A7_LECTURE, A7_CARTES, A7_CONSTRUIRE, A7_EXEMPLES, A7_CHOISIR, A7_ERREURS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LE COURAGE ET LE BON SENS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: Abidjan, the night before asking for a raise. No « ? » or « ! ». */
const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: "La veille de l'augmentation",
  frSub: 'Oser, et rester calme',
  setting: "Abidjan, un soir. Demain, Aya va demander une augmentation à sa patronne. Son cousin Koffi l'aide à se préparer.",
  bubbles: [
    { from: 'narrator', fr: 'Sur la table, des feuilles pleines de chiffres. Aya tourne en rond dans le salon.', en: 'On the table, sheets full of figures. Aya is pacing the living room.' },
    { from: 'coach', fr: "Tu n'as pas froid aux yeux, toi. Tu as déjà quitté un poste pour lancer ta boutique.", en: 'You are fearless. You already left a job to start your shop.', warn: 'ne pas avoir froid aux yeux : ne pas avoir peur' },
    { from: 'user', fr: 'Oui, mais là, j’ai peur. Je dois prendre mon courage à deux mains.', en: 'Yes, but now I am scared. I have to pluck up my courage.', warn: 'mon courage : le possessif suit la personne' },
    { from: 'coach', fr: 'Si elle dit non, tiens-lui tête, poliment. Ne te laisse pas marcher sur les pieds.', en: 'If she says no, stand up to her, politely. Do not let her walk all over you.', warn: "tenir tête à quelqu'un : ne pas céder" },
    { from: 'user', fr: 'Elle se fâche vite, tu sais.', en: 'She loses her temper quickly, you know.' },
    { from: 'coach', fr: 'Alors garde la tête froide. Tu as la tête sur les épaules, et tes chiffres sont bons.', en: 'Then keep a cool head. You have your head screwed on, and your figures are good.', warn: 'la tête froide : calme ; sur les épaules : raisonnable' },
    { from: 'user', fr: "D'accord. Je garde les pieds sur terre : je demande dix pour cent, pas cinquante.", en: 'All right. I stay down to earth: I ask for ten percent, not fifty.' },
  ],
  closing: { fr: 'Du courage pour oser, une tête froide pour rester calme : il faut les deux.', en: 'Courage to dare, a cool head to stay calm: you need both.' },
  audio: REC('rec-b1-27-augmentation'),
  say: REFRAME,
  terms: ['figure', 'bouge'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-agir',
  title: 'Oser, résister, rester calme',
  frSub: 'Le courage et le bon sens',
  hint: 'Sept cartes. Quatre pour le courage, trois pour le bon sens.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'equivalent', 'bouge'],
  cards: [
    card(E(1109), 'Ne pas avoir peur', 'courant',
      "L'image : tes yeux n'ont jamais froid, même devant le danger. Le sens : tu oses tout. EN: literally not cold in the eyes; in English, fearless."),
    card(E(1110), 'Oser, enfin', 'courant',
      "L'image : tu prends ton courage avec les deux mains. Le sens : tu fais enfin une chose difficile. EN: to pluck up your courage."),
    card(E(1111), 'Résister', 'courant',
      "L'image : ta tête reste face à l'autre. Le sens : tu refuses de céder. EN: to stand up to someone."),
    card(E(1112), 'Se défendre', 'courant',
      "L'image : personne ne marche sur tes pieds. Le sens : tu ne laisses pas les autres décider pour toi. EN: to not let people walk all over you."),
    card(E(1113), 'Rester calme', 'courant',
      "L'image : une tête froide, qui ne chauffe pas. Le sens : tu restes calme quand c'est difficile. EN: to keep a cool head, nearly the same picture."),
    card(E(1114), 'Être raisonnable', 'courant',
      "L'image : la tête bien posée sur les épaules. Le sens : tu es sérieux, tu fais les bons choix. EN: to have your head screwed on."),
    card(E(1115), 'Être réaliste', 'courant',
      "L'image : les pieds sur le sol. Le sens : tu vois les choses comme elles sont. EN: down to earth, the same picture."),
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Oser, ou rester raisonnable',
  groups: [
    grp('Oser', [
      it(E(1116), 'seule en Asie'),
      it(E(1117), 'un appel au patron'),
      it(E(1118), 'face au propriétaire'),
      it(E(1125), 'un enfant'),
    ], chk(
      'Ces quatre personnes...',
      ['ont peur', 'osent', 'dorment'], 1,
      "Froid aux yeux, courage, tête tenue : elles osent. EN: they dare.")),
    grp('Rester raisonnable', [
      it(E(1120), 'une entrevue'),
      it(E(1121), 'une fille sérieuse'),
      it(E(1122), 'un associé'),
      it(E(1124), 'un accident'),
    ], chk(
      'Et celles-ci sont...',
      ['calmes et réalistes', 'distraites'], 0,
      "La tête froide, sur les épaules, les pieds sur terre : le bon sens. EN: good sense.")),
    ctl('Céder', '« Elle ne se laisse pas marcher sur les pieds. » Elle...',
      ['danse mal', 'se défend'], 1,
      "Personne ne décide pour elle. EN: she stands her ground."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure'],
};

const A8_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a8-hacks',
  layer: 'core',
  title: 'Trois astuces pour retenir',
  hacks: [
    { hack: "Dessine l'image dans ta tête, un peu absurde : des yeux qui gèlent, un poil dans une main.",
      why: "Une image drôle reste. Mais vérifie toujours le sens : l'image ne le donne pas. EN: a funny picture sticks; the meaning still has to be learned." },
    { hack: "Apprends chaque expression dans une phrase sur ta vie : ma sœur n'a pas froid aux yeux.",
      why: "Une phrase à toi se retient mieux qu'une liste. EN: a sentence about your own life beats a list." },
    { hack: "Apprends-les par paires opposées : froid aux yeux contre l'estomac noué, la tête froide contre prendre la tête.",
      why: "Deux images contraires se rappellent l'une l'autre. EN: opposites are remembered as a pair." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'figure'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Du courage, ou du calme',
  groups: [
    ctl("L'entrevue", "Avant l'entrevue, ton amie panique. Tu lui dis :",
      ['Fais la sourde oreille.', 'Garde la tête froide.', 'Mets les pieds dans le plat.'], 1,
      "Reste calme. EN: keep a cool head."),
    ctl('Le loyer', 'Ton propriétaire veut monter le loyer de trente pour cent. Tu refuses et tu discutes. Tu lui...',
      ['tiens tête', 'tournes les pouces'], 0,
      "Tu ne cèdes pas. EN: you stand up to him."),
    ctl('Le parachute', 'Ton oncle a sauté en parachute à soixante-dix ans. Il...',
      ['a la tête ailleurs', "n'a pas froid aux yeux"], 1,
      "Il n'a peur de rien. EN: he is fearless."),
    ctl('Le projet', 'Ton associé veut ouvrir dix magasins la première année. Tu lui dis :',
      ['Garde les pieds sur terre.', 'Prends ton courage à deux mains.'], 0,
      "Sois réaliste. EN: be down to earth."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'bouge'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Le courage, bien construit',
  rule: {
    title: 'Le possessif bouge, la préposition reste',
    body: "Prendre son courage : mon, ton, son selon la personne. Tenir tête à quelqu'un : avec à. Froid aux yeux, toujours au négatif. Sur les pieds, pas sur tes pieds. EN: the possessive moves; the little words stay.",
  },
  cards: [
    { promptLabel: 'le possessif figé', promptSound: "J'ai pris son courage à deux mains et j'ai appelé le patron.", fr: fr(E(1117)), ipa: ipaOf(E(1117)), tip: "Je, donc mon courage. EN: mon, for je." },
    { promptLabel: 'tenir tête sans à', promptSound: 'Elle a tenu tête son propriétaire.', fr: fr(E(1118)), ipa: ipaOf(E(1118)), tip: "Tenir tête à quelqu'un. EN: à is needed." },
    { promptLabel: 'froid dans les yeux', promptSound: "Ma cousine n'a pas froid dans les yeux : elle est partie seule en Asie.", fr: fr(E(1116)), ipa: ipaOf(E(1116)), tip: "Froid aux yeux. EN: aux." },
    { promptLabel: 'la tête fraîche', promptSound: "Pendant l'entrevue, garde la tête fraîche.", fr: fr(E(1120)), ipa: ipaOf(E(1120)), tip: "La tête froide. EN: froide." },
    { promptLabel: 'sur tes pieds', promptSound: 'Ne te laisse pas marcher sur tes pieds.', fr: fr(E(1119)), ipa: ipaOf(E(1119)), tip: "Te dit déjà qui : les pieds. EN: les." },
    { promptLabel: 'les pieds sur le sol', promptSound: 'Mon associé a les pieds sur le sol.', fr: fr(E(1122)), ipa: ipaOf(E(1122)), tip: "Sur terre, sans article. EN: terre, no article." },
  ],
  drill: [
    { promptSay: "Il a pris ... courage à deux mains.", opts: ['son', 'mon', 'ton'], correct: 0 },
    { promptSay: 'Elle a tenu tête ... son patron.', opts: ['contre', 'à'], correct: 1 },
    { promptSay: "Il n'a pas froid ... yeux.", opts: ['aux', 'dans les'], correct: 0 },
    { promptSay: 'Garde la tête ... .', opts: ['fraîche', 'froide', 'chaude'], correct: 1 },
    { promptSay: 'Ne te laisse pas marcher sur ... pieds.', opts: ['tes', 'les'], correct: 1 },
    { promptSay: 'Mon associé a les pieds sur ... .', opts: ['terre', 'le sol', 'la terre'], correct: 0 },
    { promptSay: 'Nous avons pris ... courage à deux mains.', opts: ['son', 'leur', 'notre'], correct: 2 },
    { promptSay: 'Ma fille a la tête sur les ... .', opts: ['épaules', 'mains'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le possessif bouge, la préposition reste' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la phrase fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-27-piege-courage'),
  say: REFRAME,
  terms: ['bouge', 'bloc'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Oser', 'Quelle expression dit que tu oses enfin ?',
    ['garder la tête froide', 'prendre ton courage à deux mains', 'avoir les pieds sur terre'], 1,
    "Tu prends ton courage. EN: you pluck up your courage."),
  ctl('Le possessif', 'Avec nous : « prendre ... courage à deux mains »',
    ['notre', 'son'], 0,
    "Nous, donc notre. EN: notre for nous."),
  ctl('Le calme', '« Garder la tête froide », c’est...',
    ['avoir froid', 'rester calme'], 1,
    "La tête ne chauffe pas. EN: stay calm."),
], ['bouge', 'figure']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le courage et le bon sens',
    opener: {
      line: "Demain, Aya demande une augmentation : ici tu apprends à dire le courage, et le calme qui va avec. EN: Tomorrow Aya asks for a raise: here you learn to talk about courage, and the calm that goes with it.",
      imageRef: 'lessons/expressions-corps/act08.jpg',
    },
    sections: [],
    milestone: "Tu dis qui ose, qui résiste et qui garde la tête froide, avec le bon possessif. EN: You can say who dares, who stands firm and who keeps a cool head.",
    estScreens: 47, restPoints: ['a8-cartes', 'a8-choisir'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_HACKS, A8_CHOISIR, A8_PIEGE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LA MÉMOIRE ET LE SAVOIR
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: a quiz night in a pub in Ottawa. « Mon œil » and the
 *  questions live here and in rows, never in a bubble. */
const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Soirée quiz à Ottawa',
  frSub: 'Qui sait, qui cherche, qui se trompe',
  lines: [
    ln(E(1131)), ln(E(1132)), ln(E(1133)), ln(E(1134)), ln(E(1135)),
    ln(E(1136)), ln(E(1137)), ln(E(1138)), ln(E(1139)), ln(E(1140)),
  ],
  questions: [
    { q: 'Première phrase : se souvient-il du nom ?', opts: ['oui, très bien', 'presque'], correct: 1, why: "Sur le bout de la langue : il va presque le trouver. EN: almost." },
    { q: 'Le code de la route, elle le connaît...', opts: ['un peu', 'parfaitement', 'mal'], correct: 1, why: "Sur le bout des doigts. EN: inside out." },
    { q: "L'examen était...", opts: ['facile', 'très difficile'], correct: 0, why: "Les doigts dans le nez : sans effort. EN: easy." },
    { q: "« Tu te mets le doigt dans l'œil » : tu as...", opts: ['raison', 'complètement tort', "mal à l'œil"], correct: 1, why: "Tu te trompes complètement. EN: you are way off." },
    { q: '« Mon œil » : la personne...', opts: ["ne croit pas l'autre", "a mal à l'œil"], correct: 0, why: "Je ne te crois pas. EN: yeah, right." },
  ],
  audio: REC('rec-b1-27-quiz-ecoute'),
  say: REFRAME,
  terms: ['figure'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-tete',
  title: 'Savoir, chercher, se tromper',
  frSub: 'La mémoire et le savoir',
  hint: 'Cinq cartes. La langue, les doigts, et un œil qui ne croit rien.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'equivalent', 'registre'],
  cards: [
    card(E(1126), 'Presque se souvenir', 'courant',
      "L'image : le mot est au bout de ta langue, il ne sort pas. Le sens : tu vas presque t'en souvenir. EN: on the tip of your tongue, the same picture."),
    card(E(1127), 'Maîtriser', 'courant',
      "L'image : tout le sujet au bout de tes doigts. Le sens : tu le connais parfaitement. EN: to know inside out."),
    card(E(1128), 'Très facilement', 'familier',
      "L'image : tu fais la chose les doigts dans le nez, sans les mains. Le sens : c'est très facile. EN: hands down, with no effort."),
    card(E(1129), 'Se tromper complètement', 'familier',
      "L'image : ton doigt dans ton œil, tu ne vois plus rien. Le sens : tu te trompes complètement. EN: to be way off."),
    card(E(1130), 'Je ne te crois pas', 'familier',
      "L'image : tu montres ton œil, tu n'es pas dupe. Le sens : je ne te crois pas. On le dit seul, ou à la fin. EN: yeah, right; my foot."),
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Savoir, ou ne pas savoir',
  groups: [
    grp('Savoir, ou presque', [
      it(E(1131), 'un nom'),
      it(E(1132), 'le code de la route'),
      it(E(1136), 'un mot parti'),
      it(E(1137), 'un texte de théâtre'),
    ], chk(
      'Ces phrases disent...',
      ["qu'on sait, ou qu'on cherche un mot", "qu'on se trompe"], 0,
      "La langue et le bout des doigts : la mémoire. EN: memory.")),
    grp('Facile, faux, pas cru', [
      it(E(1133), 'un examen'),
      it(E(1134), 'une dette'),
      it(E(1135), 'des devoirs'),
      it(E(1139), 'une date'),
    ], chk(
      'Laquelle dit que c’était facile ?',
      ["le doigt dans l'œil", 'les doigts dans le nez', 'mon œil'], 1,
      "Les doigts dans le nez : sans effort. EN: easily."),
    ),
    ctl('Par cœur', 'Un poème, mot à mot, tu le connais...',
      ['sur le bout des doigts', 'par cœur'], 1,
      "Les mots dans l'ordre : par cœur. EN: by heart."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure'],
};

const A9_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-tableau',
  layer: 'core',
  sheetId: 'sheet-tete',
  title: 'Six images du savoir',
  cols: ['Expression', 'Registre', 'Sens'],
  rows: [
    { cells: ['par cœur', 'courant', 'mot à mot'], say: fr(E(1011)),
      detail: { title: 'Par cœur', body: "Les mots dans l'ordre : une chanson, un poème. EN: word for word.", say: fr(E(1006)) } },
    { cells: ['sur le bout de la langue', 'courant', 'presque'], say: fr(E(1131)),
      detail: { title: 'Le bout de la langue', body: "Le mot va venir. EN: it is coming.", say: fr(E(1136)) } },
    { cells: ['sur le bout des doigts', 'courant', 'parfaitement'], say: fr(E(1132)),
      detail: { title: 'Le bout des doigts', body: "Tout un sujet, maîtrisé. EN: a whole subject.", say: fr(E(1137)) } },
    { cells: ['les doigts dans le nez', 'familier', 'très facilement'], say: fr(E(1133)),
      detail: { title: 'Sans effort', body: "Entre amis seulement. EN: informal.", say: fr(E(1138)) } },
    { cells: ["le doigt dans l'œil", 'familier', 'se tromper'], say: fr(E(1134)),
      detail: { title: 'Se tromper', body: "Complètement, pas un peu. EN: way off.", say: fr(E(1139)) } },
    { cells: ['mon œil', 'familier', 'je ne te crois pas'], say: fr(E(1135)),
      detail: { title: 'Mon œil', body: "Seul, souvent après une question. EN: on its own.", say: fr(E(1140)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La mémoire en situation',
  groups: [
    ctl("L'actrice", "Tu cherches le nom d'une actrice, tu vas le trouver. Tu dis :",
      ["Je l'ai sur le bout de la langue.", 'Je le connais par cœur.'], 0,
      "Presque : il va venir. EN: on the tip of your tongue."),
    ctl('Le permis', "Ta sœur a eu son permis sans une faute. Elle l'a eu...",
      ["à l'œil", 'les doigts dans le nez', 'les mains vides'], 1,
      "Très facilement. EN: easily."),
    ctl("L'excuse", '« Je suis en retard à cause de la neige. » Il fait vingt-cinq degrés. Tu réponds :',
      ['Mon œil.', 'Par cœur.'], 0,
      "Tu ne le crois pas. EN: yeah, right."),
    ctl('La date', "Tu croyais que la fête était samedi. C'était vendredi. Tu...",
      ["t'es mis le doigt dans l'œil", 'avais les doigts dans le nez'], 0,
      "Tu t'es complètement trompé. EN: you were way off."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure', 'registre'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de mémoire',
  errors: [
    { wrong: "Son nom ? Je l'ai sur la pointe de la langue.", right: fr(E(1131)),
      why: "Normal : tip se traduit souvent par pointe. Mais le bloc dit le bout. EN: bout, not pointe." },
    { wrong: 'Elle connaît le code de la route par ses doigts.', right: fr(E(1132)),
      why: "Par cœur a donné l'idée de par. Le bloc dit sur le bout des doigts. EN: sur le bout des doigts." },
    { wrong: 'Tu te mets le doigt dans ton œil.', right: "Tu te mets le doigt dans l'œil.",
      why: "L'anglais dirait your. Mais te dit déjà qui : l'œil. EN: te already says whose." },
    { wrong: "J'ai réussi l'examen les doigts dans la bouche.", right: fr(E(1133)),
      why: "La bouche semble moins bizarre. Le bloc dit le nez, et c'est l'image qui fait rire. EN: the nose." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bloc', 'motamot'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Presque', 'Le mot va venir. Il est...',
    ['par cœur', 'sur le bout des doigts', 'sur le bout de la langue'], 2,
    "Presque, sur le bout de la langue. EN: on the tip of your tongue."),
  ctl('Faux', "« Se mettre le doigt dans l'œil », c'est...",
    ['se tromper complètement', 'se faire mal'], 0,
    "Se tromper, complètement. EN: be way off."),
  ctl('Le registre', '« Mon œil » : tu le dis...',
    ['à ton patron, en réunion', 'à un ami'], 1,
    "C'est familier. EN: informal."),
], ['registre', 'figure']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'La mémoire et le savoir',
    opener: {
      line: "Une soirée quiz, un nom qui ne vient pas : ici tu dis ce que tu sais, presque, parfaitement, ou pas du tout. EN: A quiz night, a name that will not come: here you say what you know, almost, perfectly or not at all.",
      imageRef: 'lessons/expressions-corps/act09.jpg',
    },
    sections: [],
    milestone: "Tu dis que tu sais, que tu cherches ou que l'autre se trompe, et tu réponds mon œil au bon moment. EN: You can say you know, you are searching or someone is wrong.",
    estScreens: 42, restPoints: ['a9-cartes', 'a9-tableau'],
  },
  sections: [A9_ECOUTE, A9_CARTES, A9_CONSTRUIRE, A9_TABLEAU, A9_CHOISIR, A9_ERREURS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — DIRE NON
 *
 *  The act where the reframe's other half shows: three of the five have the
 *  SAME picture as English, and translating them is right.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a porch in Moncton, a teenager who says no without saying it. */
const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'Zoé, seize ans',
  frSub: 'Non, sans jamais dire non',
  setting: "Moncton, un dimanche. Sur le balcon, ta voisine Josée te parle de sa fille Zoé, seize ans.",
  bubbles: [
    { from: 'narrator', fr: 'Josée soupire et pose sa tasse de café.', en: 'Josée sighs and puts down her coffee cup.' },
    { from: 'coach', fr: 'Zoé fait la tête depuis hier. Elle ne me parle plus.', en: 'Zoé has been sulking since yesterday. She does not talk to me any more.', warn: 'faire la tête : bouder' },
    { from: 'user', fr: 'Tu lui as demandé de ranger sa chambre, je suppose.', en: 'You asked her to tidy her room, I suppose.' },
    { from: 'coach', fr: 'Oui, dix fois. Elle fait la sourde oreille.', en: 'Yes, ten times. She turns a deaf ear.', warn: 'la sourde oreille : faire semblant de ne pas entendre' },
    { from: 'coach', fr: "Elle n'en fait qu'à sa tête, comme son père à son âge.", en: 'She does exactly as she pleases, like her father at her age.', warn: "n'en faire qu'à sa tête : faire ce qu'on veut" },
    { from: 'user', fr: 'Et son père ne dit rien.', en: 'And her father says nothing.' },
    { from: 'coach', fr: "Lui, il s'en lave les mains. Et moi, pour la chambre, je ferme les yeux ce mois-ci.", en: 'He washes his hands of it. And I am turning a blind eye to the room this month.', warn: 'se laver les mains, fermer les yeux : la même image en anglais' },
  ],
  closing: { fr: 'Cinq façons de refuser ou de ne pas voir, et aucune ne passe par le mot non.', en: 'Five ways of refusing or not seeing, and none of them uses the word no.' },
  audio: REC('rec-b1-27-zoe'),
  say: REFRAME,
  terms: ['figure', 'equivalent'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-humeur',
  title: 'Refuser, ignorer, laisser faire',
  frSub: 'Dire non sans le dire',
  hint: 'Cinq cartes. Regarde lesquelles ont la même image en anglais.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent', 'fauxami'],
  cards: [
    card(E(1142), 'Bouder', 'courant',
      "L'image : tu fais une tête fermée. Le sens : tu boudes, tu ne parles plus. Ce n'est pas to head. EN: to sulk."),
    card(E(1143), 'Ne pas vouloir entendre', 'courant',
      "L'image : une oreille qui devient sourde, exprès. Le sens : tu ignores une demande. EN: to turn a deaf ear, the same picture."),
    card(E(1144), "Faire ce qu'on veut", 'courant',
      "L'image : tu écoutes seulement ta tête. Le sens : tu refuses tous les conseils. EN: to do exactly as you please."),
    card(E(1145), 'Ne plus être responsable', 'courant',
      "L'image : tu laves tes mains de l'affaire. Le sens : ce n'est plus ton problème. EN: to wash your hands of it, the same picture."),
    card(E(1146), 'Laisser passer', 'courant',
      "L'image : tu fermes les yeux pour ne pas voir. Le sens : tu vois la faute, et tu ne dis rien. EN: to turn a blind eye; in French, both eyes."),
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ne pas écouter, ou laisser faire',
  groups: [
    grp('Ne pas écouter', [
      it(E(1148), 'un fils'),
      it(E(1149), 'ranger'),
      it(E(1150), 'une fille'),
      it(E(1151), 'un propriétaire'),
    ], chk(
      'Ces personnes...',
      ['écoutent tout', "ont mal aux oreilles", "refusent d'écouter, ou boudent"], 2,
      "La tête fermée, l'oreille sourde, la tête à soi : elles refusent. EN: they refuse to listen.")),
    grp('Laisser faire', [
      it(E(1152), 'un choix'),
      it(E(1153), 'les retards'),
      it(E(1154), 'pour cette fois'),
      it(E(1156), 'un maire'),
    ], chk(
      'Ici, les gens...',
      ['laissent passer, ou abandonnent', 'se battent'], 0,
      "Les mains lavées, les yeux fermés : on laisse faire. EN: letting it go.")),
    ctl('La même image', "Quelle expression a la même image qu'en anglais ?",
      ['faire la tête', "s'en laver les mains"], 1,
      "Wash your hands of it. EN: the same picture."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent', 'figure'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-pieges',
  title: 'Quand traduire, et quand ne pas traduire',
  points: [
    "Même image qu'en anglais : s'en laver les mains, tourner le dos, faire la sourde oreille. Tu peux traduire. EN: some pictures match English.",
    "Presque la même : fermer les yeux sur, avec les deux yeux, pas un seul. EN: nearly the same, with both eyes.",
    "Un faux ami : faire la tête, ce n'est pas to head, c'est bouder. EN: faire la tête means to sulk.",
    "Aucune image en anglais : n'en faire qu'à sa tête. Apprends-la dans une phrase. EN: no English picture, so learn it in a sentence.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent', 'fauxami'],
};

const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quel refus, quelle image',
  groups: [
    ctl('La fête', 'Ton fils ne te parle plus depuis que tu as dit non pour la fête. Il...',
      ['fait la tête', 'fait la sourde oreille', "s'en lave les mains"], 0,
      "Il boude. EN: he is sulking."),
    ctl('Le retard', 'Ton chef voit que tu arrives en retard, mais il ne dit rien. Il...',
      ['te tourne le dos', 'ferme les yeux'], 1,
      "Il voit, et il laisse passer. EN: he turns a blind eye."),
    ctl('Le projet', "Ton collègue dit : ce n'est plus mon problème, faites ce que vous voulez. Il...",
      ["s'en lave les mains", 'fait la tête'], 0,
      "Ce n'est plus son affaire. EN: he washes his hands of it."),
    ctl('Les conseils', 'Ta sœur ne suit jamais les conseils de personne. Elle...',
      ['a la tête sur les épaules', 'a la tête ailleurs', "n'en fait qu'à sa tête"], 2,
      "Elle fait ce qu'elle veut. EN: she does as she pleases."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux yeux, une oreille sourde',
  rule: {
    title: 'Même image, mais les petits mots français',
    body: "Fermer les yeux, les deux. La sourde oreille, l'adjectif devant. S'en laver les mains, avec en. Me tourner le dos, avec me. Et faire la tête, pas sa tête. EN: the picture matches English; the little words do not.",
  },
  cards: [
    { promptLabel: 'un seul œil', promptSound: 'La direction ferme un œil sur les retards.', fr: fr(E(1153)), ipa: ipaOf(E(1153)), tip: "Les yeux, les deux. EN: both eyes." },
    { promptLabel: "l'adjectif derrière", promptSound: "Le propriétaire fait l'oreille sourde depuis un mois.", fr: fr(E(1151)), ipa: ipaOf(E(1151)), tip: "La sourde oreille : sourde devant. EN: sourde comes first." },
    { promptLabel: 'sans en', promptSound: 'Tu as fait ton choix, je lave mes mains.', fr: fr(E(1152)), ipa: ipaOf(E(1152)), tip: "Je m'en lave les mains. EN: m'en, then les." },
    { promptLabel: 'sa tête', promptSound: 'Mon fils fait sa tête depuis hier.', fr: fr(E(1148)), ipa: ipaOf(E(1148)), tip: "Faire la tête : la. EN: la, not sa." },
    { promptLabel: 'sans en ni à', promptSound: 'Elle ne fait que sa tête.', fr: fr(E(1150)), ipa: ipaOf(E(1150)), tip: "N'en faire qu'à sa tête : en, puis à. EN: en and à." },
    { promptLabel: 'turn your back on me', promptSound: 'Elle a tourné son dos sur moi sans rien dire.', fr: fr(E(1007)), ipa: ipaOf(E(1007)), tip: "Elle m'a tourné le dos. EN: me before the verb." },
  ],
  drill: [
    { promptSay: 'Pour cette fois, je ferme ... .', opts: ['un œil', 'les yeux'], correct: 1 },
    { promptSay: 'Il fait la ... oreille.', opts: ['sourde', 'morte', 'fermée'], correct: 0 },
    { promptSay: "Je m'en lave ... mains.", opts: ['mes', 'les'], correct: 1 },
    { promptSay: 'Pourquoi tu fais ... tête ?', opts: ['la', 'ta'], correct: 0 },
    { promptSay: "Elle n'en fait qu'à ... tête.", opts: ['la', 'une', 'sa'], correct: 2 },
    { promptSay: "Il m'a tourné ... dos.", opts: ['le', 'son'], correct: 0 },
    { promptSay: "Le maire s'en est ... les mains.", opts: ['laissé', 'lavé'], correct: 1 },
    { promptSay: 'La direction ferme les yeux ... les retards.', opts: ['sur', 'pour', 'dans'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Même image, mais les petits mots français' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la phrase fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-27-piege-refus'),
  say: REFRAME,
  terms: ['bloc', 'equivalent'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le faux ami', '« Faire la tête », c’est...',
    ['bouder', 'diriger'], 0,
    "Bouder. EN: to sulk."),
  ctl('La même image', 'Laquelle a la même image en anglais ?',
    ["n'en faire qu'à sa tête", 'faire la tête', "s'en laver les mains"], 2,
    "Wash your hands of it. EN: the same picture."),
  ctl('Les yeux', '« to turn a blind eye » : ...',
    ['fermer un œil', 'fermer les yeux'], 1,
    "Les deux yeux. EN: both eyes."),
], ['equivalent', 'fauxami']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Dire non',
    opener: {
      line: "Une ado qui boude, un père qui laisse faire : ici tu dis non sans jamais dire non. EN: A sulking teenager, a father who lets it go: here you say no without ever saying no.",
      imageRef: 'lessons/expressions-corps/act10.jpg',
    },
    sections: [],
    milestone: "Tu dis qui boude, qui n'écoute pas et qui laisse faire, et tu sais quand l'image anglaise marche. EN: You can say who sulks, who will not listen and who lets it go.",
    estScreens: 42, restPoints: ['a10-construire', 'a10-choisir'],
  },
  sections: [A10_HISTOIRE, A10_CARTES, A10_CONSTRUIRE, A10_FOCUS, A10_CHOISIR, A10_PIEGE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — CE QUE TU RESSENS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a goodbye message to colleagues, Montréal. Every emotion of the act,
 *  plus two idioms from earlier acts, used again. */
const A11_LETTRE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lettre',
  layer: 'core',
  questionsInModal: true,
  title: "Le message d'Inès",
  frSub: 'Un dernier jour au bureau',
  text: ADIEU_TEXT,
  glossary: [
    { word: 'en écrivant', en: 'while writing', note: 'Pendant que j’écris.' },
    { word: 'fou rire', en: 'fit of giggles', note: 'Un rire qu’on ne peut pas arrêter.' },
    { word: 'promis', en: 'I promise', note: 'Je le promets.' },
  ],
  questions: [
    { q: "Comment se sent Inès aujourd'hui ?", a: 'Elle a le cœur gros et la gorge serrée : elle est triste et émue de partir.' },
    { q: 'Et le matin de son entrevue ?', a: "Elle avait l'estomac noué : elle avait peur." },
    { q: 'Pourquoi sa mère était-elle inquiète ?', a: 'Elle se faisait du mauvais sang depuis son départ.' },
    { q: 'Inès va-t-elle regretter son choix ?', a: "Non : elle ne va pas s'en mordre les doigts." },
    { q: "Quelles expressions d'autres actes retrouves-tu ?", a: "Un coup de main (acte 1) et se mettre le doigt dans l'œil (acte 9)." },
  ],
  audio: REC('rec-b1-27-adieu'),
  say: REFRAME,
  terms: ['figure', 'propre'],
};

const A11_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a11-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-humeur',
  title: 'Le cœur, la gorge, le ventre',
  frSub: 'Cinq émotions',
  hint: 'Cinq cartes. Deux faux amis se cachent ici.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxami', 'equivalent'],
  cards: [
    card(E(1158), 'Être triste', 'courant',
      "L'image : un cœur gros, lourd. Le sens : tu es triste. Ce n'est pas big-hearted : généreux, c'est le cœur sur la main. EN: a heavy heart."),
    card(E(1159), 'Être ému', 'courant',
      "L'image : ta gorge se serre. Le sens : tu es ému, presque en larmes. EN: a lump in your throat."),
    card(E(1160), 'Avoir peur, être stressé', 'courant',
      "L'image : un nœud dans ton estomac. Le sens : tu as peur avant un moment difficile. EN: a knot in your stomach, the same picture."),
    card(E(1161), 'Regretter', 'courant',
      "L'image : tu te mords les doigts, fâché contre toi. Le sens : tu regrettes beaucoup. EN: to bitterly regret it."),
    card(E(1162), "S'inquiéter", 'courant',
      "L'image : ton sang devient mauvais. Le sens : tu t'inquiètes beaucoup. Ce n'est pas bad blood, une dispute. EN: to worry yourself sick."),
  ],
};

const A11_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-construire',
  layer: 'core',
  size: 'lg',
  title: 'Triste, ému, inquiet',
  groups: [
    grp('Triste ou ému', [
      it(E(1163), 'quitter Montréal'),
      it(E(1164), 'un départ'),
      it(E(1169), 'la fin du stage'),
      it(E(1170), 'sans voix'),
    ], chk(
      'Ces personnes sont...',
      ['tristes ou émues', 'en colère', 'malades'], 0,
      "Le cœur gros, la gorge serrée : la tristesse. EN: sad or moved.")),
    grp('Peur, souci, regret', [
      it(E(1165), 'une entrevue'),
      it(E(1166), 'un poste refusé'),
      it(E(1167), 'un appel'),
      it(E(1168), 'une mère'),
    ], chk(
      "Laquelle parle d'un regret ?",
      ["l'estomac noué", 'se mordre les doigts', 'le mauvais sang'], 1,
      "Il a refusé, et maintenant il s'en mord les doigts. EN: regret.")),
    ctl('Le faux ami', '« Il a le cœur gros » : il est...',
      ['généreux', 'triste'], 1,
      "Triste. Généreux : le cœur sur la main. EN: sad."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxami', 'figure'],
};

const A11_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a11-flash',
  layer: 'core',
  title: 'Huit cartes pour l’humeur',
  cards: [
    { front: 'to have a heavy heart', back: 'avoir le cœur gros', say: fr(E(1163)) },
    { front: 'to have a lump in your throat', back: 'avoir la gorge serrée', say: fr(E(1164)) },
    { front: 'to have a knot in your stomach', back: "avoir l'estomac noué", say: fr(E(1165)) },
    { front: 'to bitterly regret it', back: "s'en mordre les doigts", say: fr(E(1166)) },
    { front: 'to worry yourself sick', back: 'se faire du mauvais sang', say: fr(E(1168)) },
    { front: 'to be very generous', back: 'avoir le cœur sur la main', say: fr(E(1023)) },
    { front: 'to sulk', back: 'faire la tête', say: fr(E(1148)) },
    { front: 'to be fed up', back: 'en avoir plein le dos', say: fr(E(1034)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent'],
};

const A11_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu ressens, en situation',
  groups: [
    ctl("L'aéroport", "Ton meilleur ami part vivre en Australie. À l'aéroport, tu...",
      ['as la gorge serrée', 'as les doigts dans le nez', 'te tournes les pouces'], 0,
      "Tu es ému. EN: a lump in your throat."),
    ctl("L'appel", "Ton fils n'a pas appelé depuis trois jours. Tu...",
      ['as le bras long', 'te fais du mauvais sang'], 1,
      "Tu t'inquiètes. EN: you worry yourself sick."),
    ctl('Le billet', "Tu n'as pas acheté de billet pour le concert, et il est complet. Tu...",
      ["t'en mords les doigts", "as l'estomac noué"], 0,
      "Tu regrettes. EN: you bitterly regret it."),
    ctl('Le discours', 'Dans cinq minutes, tu parles devant trois cents personnes. Tu...',
      ['as le cœur sur la main', "as l'estomac noué", 'fais la tête'], 1,
      "Tu as peur. EN: a knot in your stomach."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure'],
};

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a11-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  sheetId: 'sheet-pieges',
  title: 'Quatre faux amis du cœur',
  errors: [
    { wrong: 'Elle a le cœur gros : elle donne tout aux autres.', right: 'Elle a le cœur sur la main : elle donne tout aux autres.',
      why: "Normal : big-hearted ressemble à cœur gros. Mais le cœur gros, c'est la tristesse. EN: a big heart in French is a sad one." },
    { wrong: 'Il y a du mauvais sang entre les deux frères.', right: 'Il y a de la rancune entre les deux frères.',
      why: "L'anglais bad blood parle d'une dispute. En français, se faire du mauvais sang, c'est s'inquiéter. EN: in French it means worry, not a feud." },
    { wrong: 'Il a refusé ce poste, et maintenant il mord ses doigts.', right: fr(E(1166)),
      why: "L'idée est là, mais le bloc est s'en mordre les doigts : en, puis les. EN: en and les." },
    { wrong: 'Ma mère se fait du mauvais sang : elle est fâchée contre moi.', right: 'Ma mère se fait du mauvais sang : elle est inquiète pour moi.',
      why: "Mauvais fait penser à la colère. Le sens est l'inquiétude. EN: worried, not angry." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxami', 'bloc'],
};

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le cœur', "Laquelle dit que quelqu'un est triste ?",
    ['il a le cœur sur la main', 'il a le cœur gros'], 1,
    "Le cœur gros. EN: a heavy heart."),
  ctl('Le sang', '« Se faire du mauvais sang », c’est...',
    ["s'inquiéter", 'se disputer', 'être malade'], 0,
    "S'inquiéter. EN: to worry."),
  ctl('Le regret', 'Pour un regret, tu dis...',
    ["j'ai l'estomac noué", "je m'en mords les doigts"], 1,
    "Tu te mords les doigts. EN: regret."),
], ['fauxami', 'figure']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Ce que tu ressens',
    opener: {
      line: "Un dernier jour au bureau et une gorge qui se serre : ici tu mets des mots du corps sur ce que tu ressens. EN: A last day at the office and a tightening throat: here you put body words on what you feel.",
      imageRef: 'lessons/expressions-corps/act11.jpg',
    },
    sections: [],
    milestone: "Tu dis la tristesse, la peur, le regret et l'inquiétude, sans tomber dans les faux amis du cœur. EN: You can express sadness, fear, regret and worry without the false friends.",
    estScreens: 38, restPoints: ['a11-cartes', 'a11-choisir'],
  },
  sections: [A11_LETTRE, A11_CARTES, A11_CONSTRUIRE, A11_FLASH, A11_CHOISIR, A11_ERREURS, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — RACONTE TA JOURNÉE
 * ══════════════════════════════════════════════════════════════════════════ */

/** The model the learner imitates: six idioms, one per moment of the day. */
const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Sam',
  frSub: 'La forme que tu vas écrire',
  text: DEMENAGEMENT_TEXT,
  glossary: [
    { word: 'renversé', en: 'spilled', note: 'Le café est tombé de la tasse.' },
    { word: 'raté', en: 'missed', note: 'Le bus est parti sans toi.' },
    { word: 'une égratignure', en: 'a scratch', note: 'Une petite marque sur une surface.' },
    { word: 'le balcon', en: 'the balcony', note: "L'espace ouvert devant l'appartement, en hauteur." },
  ],
  questions: [
    { q: "Combien d'expressions Sam utilise-t-il ?", a: 'Six : se lever du pied gauche, se tourner les pouces, mettre la main à la pâte, se serrer les coudes, mettre les pieds dans le plat, avoir le cœur gros.' },
    { q: 'Où est le décor, où sont les actions ?', a: "Le décor à l'imparfait : il pleuvait, le frigo était lourd. Les actions au passé composé : je me suis levé, j'ai mis les pieds dans le plat." },
    { q: 'Pourquoi le message ne sonne-t-il pas comme une liste ?', a: "Chaque expression arrive à un moment différent de la journée, et elle y a une raison." },
    { q: 'Quel est le registre ?', a: 'Courant et amical : Sam écrit à un ami.' },
  ],
  audio: REC('rec-b1-27-demenagement'),
  say: REFRAME,
  terms: ['anecdote', 'dosage'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  title: 'Cinq étapes pour ton anecdote',
  steps: [
    "1. Choisis un moment : une journée, une soirée, un repas qui ne s'est pas passé comme prévu. EN: pick one moment.",
    "2. Pose le décor à l'imparfait : le lieu, le temps, ton humeur. EN: set the scene.",
    '3. Raconte les actions au passé composé, dans l’ordre. EN: tell the events in order.',
    '4. Place cinq ou six expressions, une par moment, là où elles aident. EN: five or six idioms, one per moment.',
    '5. Relis chaque bloc : aucun mot changé, le verbe et le possessif pour ta personne. EN: check each block.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['anecdote', 'dosage', 'bouge'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  title: 'Une expression par moment',
  cases: [
    uc('Le décor : la pluie, et personne qui attend', E(1173)),
    uc("L'action : le groupe qui s'aide", E(1174)),
    uc('Le rebondissement : ta gaffe', E(1175)),
    uc("La fin : l'émotion", E(1176)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['anecdote', 'dosage'],
};

/** Say it out loud: six turns with Léa on the phone. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'Au téléphone avec Léa',
  setting: "Dimanche soir. Ton amie Léa t'appelle pour savoir comment s'est passé le déménagement de Chloé.",
  turns: [
    {
      ai: "Salut. Alors, ce déménagement samedi, c'était comment ?",
      en: 'Hi. So, how was the move on Saturday?',
      user: fr(E(1173)),
      userEn: 'It was raining, but nobody sat idle. (se tourner les pouces, in the negative.)',
      alts: [
        { fr: 'Long, mais tout le monde a mis la main à la pâte.', en: 'Long, but everyone pitched in. (mettre la main à la pâte.)' },
        { fr: "Fatigant. On a travaillé d'arrache-pied toute la journée.", en: 'Tiring. We worked flat out all day. (travailler d’arrache-pied.)' },
      ],
    },
    {
      ai: "Et le frigo, vous l'avez monté comment ?",
      en: 'And the fridge, how did you get it up?',
      user: fr(E(1174)),
      userEn: 'The fridge was heavy, but we stuck together. (se serrer les coudes, passé composé.)',
      alts: [
        { fr: 'Quatre voisins nous ont donné un coup de main.', en: 'Four neighbours gave us a hand. (donner un coup de main.)' },
        { fr: 'Chloé a fait des pieds et des mains pour trouver un diable.', en: 'Chloé moved heaven and earth to find a hand truck. (faire des pieds et des mains.)' },
      ],
    },
    {
      ai: 'Et toi, tu étais en forme ?',
      en: 'And you, were you in good shape?',
      user: 'Non, je me suis levé du pied gauche.',
      userEn: 'No, I got out of bed on the wrong side. (se lever du pied gauche, passé composé.)',
      alts: [
        { fr: "Pas du tout, j'avais les yeux dans la graisse de bine.", en: 'Not at all, I was bleary-eyed. (the Québec idiom.)' },
        { fr: "Non, je n'avais pas les yeux en face des trous.", en: 'No, I was not with it. (the France idiom: also right.)' },
      ],
    },
    {
      ai: "Et avec la mère de Chloé, ça s'est bien passé ?",
      en: "And with Chloé's mother, did it go well?",
      user: fr(E(1175)),
      userEn: 'Of course I put my foot in it in front of her mother. (mettre les pieds dans le plat.)',
      alts: [
        { fr: 'Pas vraiment. La prochaine fois, je vais tourner sept fois ma langue dans ma bouche.', en: 'Not really. Next time I will think before I speak. (ma langue, for je.)' },
        { fr: 'Bof. Elle a fait la tête pendant une heure.', en: 'Meh. She sulked for an hour. (faire la tête.)' },
      ],
    },
    {
      ai: 'Et Chloé, elle est contente ?',
      en: 'And Chloé, is she happy?',
      user: 'Oui, mais à la fin, on avait tous le cœur gros.',
      userEn: 'Yes, but by the end we all had heavy hearts. (avoir le cœur gros: sad, not generous.)',
      alts: [
        { fr: 'Oui, mais elle avait la gorge serrée en quittant le quartier.', en: 'Yes, but she had a lump in her throat leaving the neighbourhood.' },
        { fr: "Oui, et elle ne va pas s'en mordre les doigts : l'appartement est super.", en: 'Yes, and she will not regret it: the flat is great.' },
      ],
    },
    {
      ai: 'Bon, la prochaine fois, appelle-moi. Je viendrai.',
      en: 'Well, next time, call me. I will come.',
      user: "Promis. Et merci d'avance pour le coup de main.",
      userEn: 'Promise. And thanks in advance for the helping hand. (un coup de main, as a noun.)',
      alts: [
        { fr: 'Promis. Je compte sur toi pour mettre la main à la pâte.', en: 'Promise. I am counting on you to pitch in.' },
        { fr: "D'accord, mais ne viens pas les mains vides.", en: 'OK, but do not come empty-handed. (arriver les mains vides.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['anecdote', 'registre'],
};

/** THE GRADED TASK. The unit outcome is tested here. Graded on FIT, not on
 *  count (shapes doc §2.2). */
const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Raconte ta journée',
  frSub: 'Mission écrite',
  brief: "Une journée ne s'est pas passée comme prévu : un déménagement, un premier jour de travail, un souper de famille. Écris un message à un ami pour la raconter. Utilise des expressions de la leçon, chacune au bon moment de l'histoire.",
  briefEn: 'A day did not go as planned: a move, a first day at work, a family dinner. Write a message to a friend telling the story. Use idioms from the lesson, each at the right moment of the story.',
  produce: "Écris une anecdote de 80 à 120 mots, au passé, avec au moins cinq expressions différentes de cette leçon. Chacune doit dire ce que tu veux dire, là où elle est.",
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
          "1 : Les expressions sont prises mot à mot ou au hasard : on ne comprend pas ce qui s'est passé.",
        ],
      },
      {
        key: 'bloc',
        label: 'Des expressions complètes et bien construites',
        maxPoints: 3,
        descriptors: [
          "3 : Chaque bloc est complet, sans mot changé, avec le verbe et le possessif pour ta personne.",
          "2 : Une ou deux erreurs dans un bloc : un mot changé, un possessif oublié, un en qui manque.",
          "1 : Plusieurs blocs sont cassés ou traduits de l'anglais : un bras et une jambe, donner une main.",
        ],
      },
      {
        key: 'recit',
        label: 'Une anecdote qui se suit, dans le bon registre',
        maxPoints: 3,
        descriptors: [
          "3 : Un décor, des actions dans l'ordre, une fin. Le registre va avec un ami, et il ne change pas au milieu.",
          "2 : L'histoire se suit, mais il manque le décor ou la fin, ou une expression est trop familière pour la situation.",
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
    'Salut ..., tu ne devineras jamais ma journée.',
    'Samedi, je devais...',
    'Je me suis levé...',
    'Il faisait..., mais...',
    'Heureusement,...',
    'Bien sûr,...',
    'À la fin,...',
    'Bises,',
  ],
  modelAnswer: "Salut Léa, tu ne devineras jamais ma journée de lundi. C'était mon premier jour au bureau, à Québec. J'avais l'estomac noué, et l'autobus était en panne : je suis arrivé en retard. Mon chef a gardé la tête froide et il m'a donné un coup de main pour installer mon ordinateur. À midi, j'ai mis les pieds dans le plat : j'ai demandé à une collègue si elle était la stagiaire. C'était la directrice ! Heureusement, elle n'a pas fait la tête, elle a ri. L'après-midi, j'ai travaillé d'arrache-pied sur mon premier dossier. Le soir, j'étais fatigué, mais content. Bises, Max",
  modelAnswerEn: "Hi Léa, you will never guess my Monday. It was my first day at the office, in Québec City. I had a knot in my stomach, and the bus had broken down: I arrived late. My boss kept a cool head and gave me a hand setting up my computer. At noon I put my foot in it: I asked a colleague if she was the intern. She was the director! Luckily she did not sulk, she laughed. In the afternoon I worked flat out on my first file. In the evening I was tired, but happy. Love, Max",
  watchFor: [
    {
      pattern: 'An English idiom translated word for word (ça coûte un bras et une jambe, donne-moi une main, mettre mon pied dedans).',
      criterion: 'bloc',
      feedback: "Cette image vient de l'anglais. En français : les yeux de la tête, un coup de main, les pieds dans le plat.",
      ref: 'a1-reperer',
    },
    {
      pattern: 'A body part swapped inside a block (un coup de doigt, faire des bras et des mains, un cheveu dans la main).',
      criterion: 'bloc',
      feedback: "Le bloc ne change pas de partie du corps. Relis la carte de l'expression.",
      ref: 'a2-piege',
    },
    {
      pattern: 'A familier idiom where the reader is not a friend, or the register changing in the middle of the message.',
      criterion: 'recit',
      feedback: "Casser les pieds, prendre la tête, mon œil : entre amis seulement. Garde le même registre du début à la fin.",
      ref: 'a3-erreurs',
    },
    {
      pattern: "An English-style possessive inside the block (je me suis cassé ma tête, il tourne ses pouces, me casse mes pieds).",
      criterion: 'bloc',
      feedback: "Me, te, se disent déjà qui : la tête, les pouces, les pieds.",
      ref: 'a4-piege',
    },
    {
      pattern: 'A fixed possessive that does not follow the subject (j’ai pris son courage à deux mains, tourne sept fois sa langue).',
      criterion: 'bloc',
      feedback: "Le possessif suit la personne : je prends mon courage, tourne sept fois ta langue.",
      ref: 'a5-erreurs',
    },
    {
      pattern: "The wrong verb or little word in an eye idiom (prendre un regard, garder un œil ouvert sur, sauter dans les yeux).",
      criterion: 'bloc',
      feedback: "On jette un coup d'œil, on garde un œil sur, ça saute aux yeux.",
      ref: 'a6-piege',
    },
    {
      pattern: "A money idiom mis-built (le long bras, pour l'œil, les yeux plus grands que l'estomac).",
      criterion: 'bloc',
      feedback: "Le bras long, à l'œil, les yeux plus gros que le ventre : l'ordre et les mots du bloc.",
      ref: 'a7-erreurs',
    },
    {
      pattern: 'A missing preposition in a courage idiom (tenir tête son patron, froid dans les yeux).',
      criterion: 'bloc',
      feedback: "Tenir tête à quelqu'un, ne pas avoir froid aux yeux.",
      ref: 'a8-piege',
    },
    {
      pattern: "A memory idiom calqued (sur la pointe de la langue, par mes doigts).",
      criterion: 'bloc',
      feedback: "Sur le bout de la langue, sur le bout des doigts.",
      ref: 'a9-erreurs',
    },
    {
      pattern: "A false friend used with its English sense (le cœur gros for generous, le mauvais sang for a feud, faire la tête for to head).",
      criterion: 'sens',
      feedback: "Le cœur gros, c'est triste ; généreux, c'est le cœur sur la main. Le mauvais sang, c'est l'inquiétude.",
      ref: 'a11-erreurs',
    },
    {
      pattern: 'Ten or more idioms stacked, or idioms that do not match what happened, so the message reads like a list.',
      criterion: 'sens',
      feedback: "Cinq ou six, pas dix. Garde celles qui racontent un vrai moment de ta journée.",
      ref: 'a12-plan',
    },
    {
      pattern: "The setting told in the passé composé or the events in the imparfait (il a plu toute la journée pendant que j'arrivais).",
      criterion: 'recit',
      feedback: "Le décor à l'imparfait (il pleuvait), les actions au passé composé (je suis arrivé).",
      ref: 'a12-lecture',
    },
  ],
  graderNotes: [
    'Grade on FIT, not count (shapes doc §2.2): an idiom used in a situation where its meaning does not apply scores under « sens » even if it is well built. Five fitting idioms beat eight forced ones.',
    'Count as « different » any two idioms from this lesson with different blocks. A reused idiom counts once. Idioms from other lessons (lesson 28 in B1, animals and food; lesson 29 in B1, colours) are accepted if correct but do not count toward the five.',
    'Word count INCLUDES the greeting and the sign-off: they are part of the message. 10% tolerance (72 to 132) before criterion « tache » loses its point.',
    'Accept both Québec and France variants (les yeux dans la graisse de bine, ne pas avoir les yeux en face des trous; coûter un bras, coûter les yeux de la tête). Accept « donner une main » as a heard Québec form but suggest « un coup de main » in feedback, without removing a point.',
    'Tenses (lesson 3 in B1) are judged under « recit » only, and only when they break the story; do not deduct twice for the same verb.',
    'Participle agreement in pronominal idioms (ils se sont serré les coudes, elle s’est levée du pied gauche) belongs to lessons 19 and 20 in A2: accept either spelling of serré / serrés without penalty; mark only a missing auxiliary.',
    'Do not score the subjunctive (lessons 14 to 16 in B1) if a learner uses one: accept a correct one, ignore an incorrect one under this lesson’s criteria.',
    'Accept regional vocabulary (souper, dîner, entrevue, courriel, char, auto, appart).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['anecdote', 'dosage'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Dis tes expressions à voix haute',
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
    { k: "l'image", v: 'le sens propre : ce que les mots montrent', say: fr(E(1001)),
      detail: { title: "L'image", body: "Elle aide à retenir, elle ne donne pas le sens. EN: a memory hook.", say: fr(E(1042)) } },
    { k: 'le sens', v: 'le sens figuré : ce que tout le monde comprend', say: fr(E(1004)),
      detail: { title: 'Le sens', body: "Il vient de la phrase entière. EN: from the whole phrase.", say: fr(E(1047)) } },
    { k: "l'anglais", v: 'souvent une autre partie du corps', say: fr(E(1058)),
      detail: { title: "L'équivalent", body: "Deux mains gauches : all thumbs. EN: often another body part.", say: fr(E(1063)) } },
    { k: 'le bloc', v: 'rien ne bouge, sauf le verbe et le possessif', say: fr(E(1117)),
      detail: { title: 'Ce qui bouge', body: "Je prends mon courage, tu prends ton courage. EN: verb and possessive only.", say: fr(E(1066)) } },
    { k: 'le registre', v: 'familier entre amis, courant partout', say: fr(E(1032)),
      detail: { title: 'À qui', body: "À l'écrit officiel : ça me dérange. EN: courant for writing.", say: fr(E(1041)) } },
    { k: 'les faux amis', v: 'le cœur gros, le bras long, le mauvais sang', say: fr(E(1172)),
      detail: { title: 'Attention', body: "Triste, des relations, l'inquiétude. EN: sad, connections, worry.", say: fr(E(1102)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'figure', 'fauxami'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu connais une soixantaine d'images du corps : pour aider, agacer, travailler, gaffer, rêver, payer, oser, savoir, refuser et ressentir. Pour chacune, tu sais l'image, le sens, l'anglais et le registre. Le piège qui reste est le plus discret : l'anglais qui revient quand tu parles vite, un bras et une jambe, une main à donner. Avant l'examen, choisis dix expressions et écris pour chacune une phrase sur ta vie. EN: Pick ten idioms and write one sentence about your own life for each.",
  stats: [
    { k: 'Les expressions', v: '59, en onze familles' },
    { k: 'Le registre', v: 'familier ou courant, sur chaque carte' },
    { k: 'Les faux amis', v: 'le cœur gros, le bras long' },
    { k: 'Le Québec', v: 'la graisse de bine, un bras' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight, one per act from act 1 to act 11 plus
 *  the anecdote round. Each round's target is a distinct errorTrigger.
 *  `fold()` strips accents, commas and apostrophes but does NOT decompose
 *  « œ », so every typed answer carrying œ also accepts « oe ». Every typed
 *  answer differs from its prompt by a WORD that survives folding. */

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
      id: 'r1-image', label: "L'image et le sens", targets: ['calque-anglais'],
      questions: [
        mc('« It costs an arm and a leg » : en français...', ['Ça coûte un bras et une jambe.', 'Ça coûte les yeux de la tête.'], 1, "Le français choisit les yeux. EN: the eyes of the head.", 'a1-scene'),
        mc('« Donner un coup de main », c’est...', ["frapper quelqu'un", 'saluer', 'aider'], 2, "Aider un peu. EN: to help.", 'a1-images'),
        mc("Quelle expression a la même image qu'en anglais ?", ['coûter les yeux de la tête', 'donner un coup de main', 'tourner le dos'], 2, "Turn your back. EN: the same picture.", 'a1-reperer'),
        tI('Je connais cette chanson par ___.', fr(E(1011)), "Par cœur : by heart. EN: the same picture.", 'a1-images'),
        tI('Ici, le loyer coûte les ___ de la tête.', fr(E(1010)), "Les yeux de la tête. EN: very expensive.", 'a1-usages'),
        eS('Ce vélo coûte un bras et une jambe.', fr(E(1004)), "L'image anglaise. En français : les yeux de la tête. EN: the French picture.", 'a1-scene'),
        eS('Tu peux me donner une main samedi ?', fr(E(1005)), "On donne un coup de main. EN: coup de main.", 'a1-reperer'),
        lC('Écoute. Que veut dire la phrase ?', fr(E(1007)), ["Elle m'a ignoré.", "Elle m'a aidé."], 0, "Tourner le dos : ignorer. EN: she turned her back on me.", 'a1-lecture'),
      ],
    },
    {
      id: 'r2-aide', label: "S'entraider", targets: ['aide-mal-construite'],
      questions: [
        mc('« Mettre la main à la pâte », c’est...', ['faire du pain', "voler de l'argent", 'participer au travail'], 2, "Travailler avec les autres. EN: to pitch in.", 'a2-cartes'),
        mc('Ta grand-mère donne tout ce qu’elle a. Elle a...', ['le cœur sur la main', 'le cœur gros'], 0, "Généreuse. EN: very generous.", 'a2-choisir'),
        mc('Pendant la tempête, les voisins se sont serré...', ['les mains', 'les pieds', 'les coudes'], 2, "Les coudes. EN: they stuck together.", 'a2-piege'),
        tI('Elle a fait des pieds et des ___ pour trouver ce logement.', fr(E(1021)), "Des pieds et des mains. EN: heaven and earth.", 'a2-exemples'),
        tI("Mon oncle m'a donné un coup de ___ pour trouver un stage.", fr(E(1022)), "Un coup de pouce. EN: a boost.", 'a2-piege'),
        eS('Dans le quartier, on se serre nos coudes.', fr(E(1019)), "Se dit déjà qui : les coudes. EN: les, not nos.", 'a2-exemples'),
        eS('Même le directeur a mis la main dans la pâte.', fr(E(1018)), "À la pâte. EN: à, not dans.", 'a2-piege'),
        lC('Écoute. Qui a travaillé ?', fr(E(1024)), ['tout le monde', 'personne'], 0, "Tout le monde a mis la main à la pâte. EN: everyone.", 'a2-histoire'),
      ],
    },
    {
      id: 'r3-agacer', label: 'Ce qui agace', targets: ['registre-mal-place'],
      questions: [
        mc('Pour écrire à ton propriétaire, tu choisis...', ['Le voisin me casse les pieds.', 'Le bruit me dérange beaucoup.'], 1, "Le courant, à l'écrit. EN: the courant one.", 'a3-tableau'),
        mc("« J'ai quelqu'un dans le nez » veut dire...", ['je le sens bien', 'il me manque', 'je ne le supporte pas'], 2, "Tu ne le supportes pas. EN: you cannot stand him.", 'a3-cartes'),
        mc('Laquelle est courante ?', ['casser les pieds', 'prendre la tête', 'taper sur les nerfs'], 2, "Taper sur les nerfs. EN: the courant one.", 'a3-construire'),
        tI("J'___ ai plein le dos de ce bruit.", fr(E(1034)), "En fait partie du bloc. EN: en.", 'a3-erreurs'),
        tI('Cette alarme me tape sur les ___.', fr(E(1035)), "Les nerfs. EN: nerves.", 'a3-cartes'),
        eS('Le voisin du dessus me casse mes pieds avec sa musique.', fr(E(1032)), "Me dit déjà qui : les pieds. EN: les, not mes.", 'a3-erreurs'),
        eS('Tu me tapes sur mes nerfs avec tes questions.', fr(E(1039)), "Les nerfs. EN: les, not mes.", 'a3-erreurs'),
        lC('Écoute. La personne est...', fr(E(1033)), ['contente', 'agacée'], 1, "Tu me prends la tête. EN: annoyed.", 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-effort', label: "La paresse et l'effort", targets: ['paresse-effort-inverse'],
      questions: [
        mc('« Il a un poil dans la main » : il est...', ['travailleur', 'poilu', 'paresseux'], 2, "Très paresseux. EN: bone idle.", 'a4-cartes'),
        mc('« to work flat out » : ...', ["travailler d'arrache-pied", 'se tourner les pouces'], 0, "Sans s'arrêter. EN: flat out.", 'a4-flash'),
        mc('Tu cherches une solution depuis des heures. Tu...', ['te tournes les pouces', 'te casses la tête'], 1, "Tu cherches très fort. EN: racking your brains.", 'a4-choisir'),
        tI('Il se tourne les ___ depuis ce matin.', fr(E(1048)), "Les pouces. EN: thumbs.", 'a4-piege'),
        tI('Mon frère ne fait rien de ses ___ doigts.', fr(E(1053)), "Dix doigts. EN: ten.", 'a4-piege'),
        eS('Je me suis cassé ma tête sur ce rapport.', fr(E(1052)), "Me dit déjà qui : la tête. EN: la, not ma.", 'a4-piege'),
        eS("L'équipe a travaillé d'arrache-main pour finir à temps.", fr(E(1050)), "Arrache-pied. EN: the foot.", 'a4-construire'),
        lC('Écoute. Ce collègue...', fr(E(1047)), ['travaille beaucoup', 'ne travaille pas'], 1, "Un poil dans la main. EN: idle.", 'a4-lecture'),
      ],
    },
    {
      id: 'r5-gaffe', label: 'La gaffe', targets: ['gaffe-mal-dite'],
      questions: [
        mc('« Mettre les pieds dans le plat », c’est...', ['faire une gaffe', 'renverser le repas', 'danser'], 0, "Dire ce qu'il ne fallait pas. EN: put your foot in it.", 'a5-cartes'),
        mc('Ton ami casse tout ce qu’il répare. Il a...', ['la langue dans sa poche', 'deux mains gauches'], 1, "Maladroit. EN: all thumbs.", 'a5-choisir'),
        mc('À ton ami : « Tourne sept fois ... langue dans ... bouche. »', ['sa / sa', 'la / la', 'ta / ta'], 2, "Tu, donc ta. EN: ta for tu.", 'a5-erreurs'),
        tI("Ma sœur n'a pas la ___ dans sa poche.", fr(E(1065)), "La langue. EN: the tongue.", 'a5-erreurs'),
        tI("Tu t'es levé du pied ___ ce matin.", fr(E(1064)), "Le pied gauche. EN: the left foot.", 'a5-cartes'),
        eS("J'ai mis mon pied dedans en parlant de son ex.", fr(E(1062)), "Les pieds dans le plat. EN: the French picture.", 'a5-erreurs'),
        eS("Je ne répare rien : j'ai deux mains droites.", fr(E(1063)), "Deux mains gauches. EN: two left hands.", 'a5-construire'),
        lC("Écoute. Que s'est-il passé au souper ?", fr(E(1067)), ['Il a dit une chose de trop.', 'Il a renversé un plat.'], 0, "Une gaffe, pas un accident. EN: a blunder.", 'a5-histoire'),
      ],
    },
    {
      id: 'r6-yeux', label: 'La tête ailleurs', targets: ['attention-calque'],
      questions: [
        mc('« to take a quick look » : ...', ['prendre un regard', "jeter un coup d'œil"], 1, "On jette un coup d'œil. EN: throw, not take.", 'a6-piege'),
        mc('« Avoir les yeux dans la graisse de bine » se dit...', ['au Québec', 'en France', 'partout'], 0, "Au Québec. EN: Québec only.", 'a6-tableau'),
        mc("L'erreur est évidente. Elle...", ['a la tête ailleurs', 'garde un œil', 'saute aux yeux'], 2, "Elle saute aux yeux. EN: obvious.", 'a6-cartes'),
        tI('Je garde un ___ sur les enfants.', fr(E(1085)), "Un œil sur. EN: an eye on.", 'a6-construire'),
        tI('Il a toujours la tête dans les ___.', fr(E(1080)), "Les nuages. EN: the clouds.", 'a6-construire'),
        eS("L'erreur saute dans les yeux.", fr(E(1086)), "Sauter aux yeux. EN: aux.", 'a6-piege'),
        eS('Garde un œil ouvert sur ton sac dans le métro.', fr(E(1088)), "Garder un œil sur, sans ouvert. EN: no ouvert.", 'a6-piege'),
        lC('Écoute. La personne...', fr(E(1081)), ['pensait à autre chose', 'était malade'], 0, "La tête ailleurs. EN: miles away.", 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-argent', label: "L'argent", targets: ['argent-calque'],
      questions: [
        mc("« À l'œil » veut dire...", ['gratuit', 'très cher', 'avec attention'], 0, "Sans payer. EN: for free.", 'a7-cartes'),
        mc('« Avoir le bras long », c’est...', ['être grand', 'avoir des relations'], 1, "Des relations. EN: connections.", 'a7-construire'),
        mc('Ton ami a commandé cinq plats et ne finit rien. Il a eu...', ['les mains vides', 'le bras long', 'les yeux plus gros que le ventre'], 2, "Il a voulu trop. EN: eyes bigger than his stomach.", 'a7-choisir'),
        tI('Ne viens pas les ___ vides.', fr(E(1100)), "Les mains vides. EN: empty-handed.", 'a7-construire'),
        tI('Pour le cadeau, chacun a mis la main au ___.', fr(E(1099)), "Au portefeuille. EN: the wallet.", 'a7-exemples'),
        eS('Son père a le long bras à la mairie.', fr(E(1102)), "Le bras long. EN: word order.", 'a7-erreurs'),
        eS("J'ai mangé pour l'œil chez mon cousin.", fr(E(1098)), "À l'œil. EN: à, not pour.", 'a7-erreurs'),
        lC("Écoute. Où entend-on d'abord cette phrase ?", fr(E(1097)), ['au Québec', 'dans un contrat'], 0, "Coûter un bras : Québec, familier. EN: Québec first.", 'a7-lecture'),
      ],
    },
    {
      id: 'r8-courage', label: 'Le courage', targets: ['courage-possessif'],
      questions: [
        mc('« Ne pas avoir froid aux yeux », c’est...', ['avoir peur', 'avoir froid', 'être courageux'], 2, "N'avoir peur de rien. EN: fearless.", 'a8-cartes'),
        mc('Avec nous : « Nous avons pris ... courage à deux mains. »', ['son', 'notre'], 1, "Nous, donc notre. EN: notre.", 'a8-piege'),
        mc('Ton associé rêve trop. Tu lui dis :', ['Garde les pieds sur terre.', 'Prends la tête.'], 0, "Sois réaliste. EN: stay down to earth.", 'a8-choisir'),
        tI('Elle a tenu tête ___ son propriétaire.', fr(E(1118)), "Tenir tête à quelqu'un. EN: à.", 'a8-piege'),
        tI("Pendant l'entrevue, garde la tête ___.", fr(E(1120)), "La tête froide. EN: cool head.", 'a8-cartes'),
        eS("J'ai pris son courage à deux mains et j'ai appelé le patron.", fr(E(1117)), "Je, donc mon. EN: mon.", 'a8-piege'),
        eS('Ne te laisse pas marcher sur tes pieds.', fr(E(1119)), "Te dit déjà qui : les pieds. EN: les.", 'a8-piege'),
        lC('Écoute. Cette fille est...', fr(E(1121)), ['raisonnable', 'distraite'], 0, "La tête sur les épaules. EN: sensible.", 'a8-histoire'),
      ],
    },
    {
      id: 'r9-memoire', label: 'La mémoire', targets: ['savoir-calque'],
      questions: [
        mc('Le mot va venir, tu le sens. Il est...', ['sur le bout de la langue', 'par cœur'], 0, "Presque. EN: on the tip of your tongue.", 'a9-cartes'),
        mc("« Se mettre le doigt dans l'œil », c'est...", ['se faire mal', 'regarder de près', 'se tromper complètement'], 2, "Se tromper. EN: be way off.", 'a9-tableau'),
        mc('« Mon œil » : tu le dis à...', ['ta patronne, en réunion', 'un ami qui exagère'], 1, "Familier. EN: to a friend.", 'a9-choisir'),
        tI('Elle connaît le code de la route sur le bout des ___.', fr(E(1132)), "Les doigts. EN: fingers.", 'a9-cartes'),
        tI("J'ai réussi l'examen les doigts dans le ___.", fr(E(1133)), "Le nez. EN: the nose.", 'a9-erreurs'),
        eS("Son nom ? Je l'ai sur la pointe de la langue.", fr(E(1131)), "Le bout. EN: bout, not pointe.", 'a9-erreurs'),
        eS("Je me suis mis le doigt dans mon œil sur la date.", fr(E(1139)), "Me dit déjà qui : l'œil. EN: l'œil.", 'a9-erreurs'),
        lC("Écoute. La personne croit-elle l'autre ?", fr(E(1140)), ['oui', 'non'], 1, "Mon œil : non. EN: no.", 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-refus', label: 'Dire non', targets: ['refus-petits-mots'],
      questions: [
        mc('« Faire la tête », c’est...', ['diriger', 'réfléchir', 'bouder'], 2, "Bouder. EN: to sulk.", 'a10-cartes'),
        mc('« to turn a blind eye » : ...', ['fermer un œil', 'fermer les yeux'], 1, "Les deux yeux. EN: both eyes.", 'a10-piege'),
        mc("Laquelle a la même image qu'en anglais ?", ["n'en faire qu'à sa tête", "s'en laver les mains"], 1, "Wash your hands of it. EN: the same.", 'a10-focus'),
        tI('Je lui demande de ranger, et il fait la ___ oreille.', fr(E(1149)), "La sourde oreille. EN: a deaf ear.", 'a10-cartes'),
        tI("Tu as fait ton choix, je m'en lave les ___.", fr(E(1152)), "Les mains. EN: hands.", 'a10-piege'),
        eS('Mon fils fait sa tête depuis hier.', fr(E(1148)), "Faire la tête. EN: la.", 'a10-piege'),
        eS('Elle ne fait que sa tête.', fr(E(1150)), "N'en faire qu'à sa tête. EN: en and à.", 'a10-piege'),
        lC('Écoute. Le propriétaire...', fr(E(1151)), ['répond vite', 'ne répond pas'], 1, "La sourde oreille. EN: no answer.", 'a10-histoire'),
      ],
    },
    {
      id: 'r11-coeur', label: 'Ce que tu ressens', targets: ['coeur-faux-ami'],
      questions: [
        mc('« Avoir le cœur gros », c’est...', ['être généreux', 'être malade', 'être triste'], 2, "Triste. EN: a heavy heart.", 'a11-cartes'),
        mc('« Se faire du mauvais sang », c’est...', ["s'inquiéter", 'se disputer'], 0, "S'inquiéter. EN: to worry.", 'a11-erreurs'),
        mc('Avant de parler devant trois cents personnes, tu as...', ["l'estomac noué", 'le cœur sur la main', 'le bras long'], 0, "La peur. EN: a knot in your stomach.", 'a11-choisir'),
        tI('Au moment de partir, elle avait la gorge ___.', fr(E(1164)), "La gorge serrée. EN: a lump in her throat.", 'a11-cartes'),
        tI("Il a refusé ce poste, et maintenant il s'en mord les ___.", fr(E(1166)), "Les doigts. EN: fingers.", 'a11-construire'),
        eS('Elle a le cœur gros : elle donne tout aux autres.', 'Elle a le cœur sur la main : elle donne tout aux autres.', "Généreuse : le cœur sur la main. EN: generous.", 'a11-erreurs'),
        eS('Ne te fais pas du mauvais sang, elle va rappeler.', fr(E(1167)), "Après pas, du devient de. EN: pas de.", 'a11-flash'),
        lC('Écoute. La personne est...', fr(E(1163)), ['triste de partir', 'contente de partir'], 0, "Le cœur gros. EN: sad.", 'a11-lettre'),
      ],
    },
    {
      id: 'r12-anecdote', label: "L'anecdote", targets: ['anecdote-surchargee'],
      questions: [
        mc("Dans un message de cent mots, combien d'expressions ?", ['une seule', 'quinze', 'cinq ou six'], 2, "Cinq ou six, bien placées. EN: five or six.", 'a12-plan'),
        mc("Dans le message de Sam, « il pleuvait » est...", ['le décor', 'une action'], 0, "L'imparfait, le décor. EN: the setting.", 'a12-lecture'),
        mc("À un ami de Paris, pour dire que le repas coûtait très cher :", ['Le repas coûtait un bras et une jambe.', 'Le repas coûtait les yeux de la tête.'], 1, "Les yeux de la tête. EN: the French picture.", 'a12-usages'),
        tI("Le frigo était lourd, mais on s'est serré les ___.", fr(E(1174)), "Les coudes. EN: elbows.", 'a12-lecture'),
        tI("Bien sûr, j'ai mis les pieds dans le ___ devant sa mère.", fr(E(1175)), "Le plat. EN: the dish.", 'a12-scenario'),
        eS("Il pleuvait, mais personne ne s'est tourné ses pouces.", fr(E(1173)), "Se tourner les pouces. EN: les.", 'a12-lecture'),
        eS('À la fin, on avait tous le cœur grand.', fr(E(1176)), "Le cœur gros. EN: gros.", 'a12-cheat'),
        lC('Écoute. Que dit la personne ?', fr(E(1178)), ["merci pour l'aide", 'merci pour le cadeau'], 0, "Le coup de main : l'aide. EN: thanks for the help.", 'a12-usages'),
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
    { front: 'très cher', back: 'coûter les yeux de la tête', say: fr(E(1004)) },
    { front: 'aider un peu', back: 'donner un coup de main', say: fr(E(1009)) },
    { front: 'agacer', back: 'casser les pieds (familier)', say: fr(E(1032)) },
    { front: 'paresseux', back: 'avoir un poil dans la main', say: fr(E(1047)) },
    { front: 'faire une gaffe', back: 'mettre les pieds dans le plat', say: fr(E(1062)) },
    { front: 'évident', back: 'sauter aux yeux', say: fr(E(1086)) },
    { front: 'rester calme', back: 'garder la tête froide', say: fr(E(1124)) },
    { front: 'triste', back: 'avoir le cœur gros', say: fr(E(1163)) },
    { front: 'généreux', back: 'avoir le cœur sur la main', say: fr(E(1023)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Le corps, en résumé',
  body: `${REFRAME} Tu sais maintenant lire une image du corps sans la prendre au mot, et ne plus traduire l'anglais morceau par morceau. Tu choisis ton registre, tu évites les faux amis, et tu racontes une journée avec cinq ou six images bien placées. La prochaine leçon, ${ANIMAUX_REF}, garde la méthode et change d'image : les animaux et la nourriture. Puis ${COULEURS_REF} : les couleurs. EN: Next lesson keeps the method with animal and food idioms; then colours.`,
  points: [
    "L'image aide à retenir ; le sens vient de la phrase entière.",
    "L'anglais choisit souvent une autre partie du corps.",
    'Dans le bloc, seuls le verbe et le possessif bougent.',
    'Familier entre amis, courant partout.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['propre', 'bloc', 'registre'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Raconte ta journée',
    opener: {
      line: "Un déménagement sous la pluie, une gaffe et un frigo trop lourd : à toi de raconter ta journée avec les images du corps. EN: A move in the rain, a blunder and a fridge too heavy: your turn to tell your day with body idioms.",
      imageRef: 'lessons/expressions-corps/act12.jpg',
    },
    sections: [],
    milestone: "Tu as raconté ta propre journée avec cinq expressions bien placées, et passé l'examen : quatre-vingt-seize questions, douze rounds. EN: You told your own day with five well-placed idioms and sat the exam: ninety-six questions, twelve rounds.",
    estScreens: 160,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-agacer', 'a12-quiz/r6-yeux', 'a12-quiz/r9-memoire', 'a12-quiz/r11-coeur'],
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

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-methode', 'Apprendre une expression', ["l'image, le sens, l'anglais", 'trois sortes d’images', 'ce qui bouge dans le bloc'], [
    teach('sheet-methode-teach', 'Quatre choses à retenir',
      `${REFRAME} Pour chaque expression, retiens l'image (le sens propre), le sens (le sens figuré), l'équivalent anglais, qui a souvent une autre image, et le registre : familier ou courant. EN: for each idiom learn the picture, the meaning, the English equivalent and the register.`),
    table('sheet-methode-table', 'Trois sortes d’images', ['Sorte', 'Français', 'Anglais'], [
      ['la même image', 'tourner le dos', 'turn your back'],
      ['la même image', 'connaître par cœur', 'know by heart'],
      ['la même image', "s'en laver les mains", 'wash your hands of it'],
      ['une autre image', 'coûter les yeux de la tête', 'cost an arm and a leg'],
      ['une autre image', 'avoir deux mains gauches', 'be all thumbs'],
      ['une autre image', 'mettre les pieds dans le plat', 'put your foot in it'],
      ["pas d'image en anglais", 'avoir le bras long', 'have friends in high places'],
      ['un faux ami', 'avoir le cœur gros', 'have a heavy heart (not big-hearted)'],
    ]),
    teach('sheet-methode-bloc', 'Ce qui bouge dans le bloc',
      "Le verbe se conjugue à tous les temps : je me suis cassé la tête, on se serre les coudes, il a mis les pieds dans le plat. Le possessif suit la personne : je prends mon courage à deux mains, tourne sept fois ta langue. Le reste ne bouge jamais : pas de bras à la place des yeux. EN: only the verb and the possessive change; everything else is fixed."),
  ]),
  sheet('sheet-agir', 'Aider, travailler, payer, oser', ["s'entraider", "la paresse et l'effort", "l'argent et les relations", 'le courage et le bon sens'], [
    table('sheet-agir-aide', "S'entraider", ['Expression', 'Registre', 'Sens', 'Anglais'], [
      ['donner un coup de main', 'courant', 'aider un peu', 'give a hand'],
      ['mettre la main à la pâte', 'courant', 'participer au travail', 'pitch in'],
      ['se serrer les coudes', 'courant', "rester ensemble, s'aider", 'stick together'],
      ['faire des pieds et des mains', 'courant', 'tout faire pour réussir', 'move heaven and earth'],
      ['donner un coup de pouce', 'courant', 'aider à démarrer', 'give a boost'],
      ['avoir le cœur sur la main', 'courant', 'être très généreux', 'be very generous'],
    ]),
    table('sheet-agir-effort', "La paresse et l'effort", ['Expression', 'Registre', 'Sens', 'Anglais'], [
      ['avoir un poil dans la main', 'familier', 'être très paresseux', 'be bone idle'],
      ['se tourner les pouces', 'courant', 'ne rien faire, attendre', 'twiddle your thumbs'],
      ['ne rien faire de ses dix doigts', 'courant', 'ne pas travailler du tout', 'not lift a finger'],
      ["travailler d'arrache-pied", 'courant', 'travailler très dur', 'work flat out'],
      ['se casser la tête', 'familier', 'chercher, se faire du souci', 'rack your brains'],
    ]),
    table('sheet-agir-argent', "L'argent et les relations", ['Expression', 'Registre', 'Sens', 'Anglais'], [
      ['coûter les yeux de la tête', 'courant', 'très cher', 'cost an arm and a leg'],
      ['coûter un bras (Québec)', 'familier', 'très cher', 'cost an arm and a leg'],
      ["à l'œil", 'familier', 'gratuit', 'for free'],
      ['mettre la main au portefeuille', 'courant', 'payer', 'put your hand in your pocket'],
      ['arriver les mains vides', 'courant', 'sans cadeau', 'arrive empty-handed'],
      ['avoir les yeux plus gros que le ventre', 'courant', 'vouloir trop', 'have eyes bigger than your stomach'],
      ['avoir le bras long', 'courant', 'avoir des relations', 'have friends in high places'],
    ]),
    table('sheet-agir-courage', 'Le courage et le bon sens', ['Expression', 'Registre', 'Sens', 'Anglais'], [
      ['ne pas avoir froid aux yeux', 'courant', "n'avoir peur de rien", 'be fearless'],
      ['prendre son courage à deux mains', 'courant', 'oser, enfin', 'pluck up your courage'],
      ["tenir tête à quelqu'un", 'courant', "résister à quelqu'un", 'stand up to someone'],
      ['ne pas se laisser marcher sur les pieds', 'courant', 'se défendre', 'not be a pushover'],
      ['garder la tête froide', 'courant', 'rester calme', 'keep a cool head'],
      ['avoir la tête sur les épaules', 'courant', 'être raisonnable', 'have your head screwed on'],
      ['avoir les pieds sur terre', 'courant', 'être réaliste', 'be down to earth'],
    ]),
  ]),
  sheet('sheet-humeur', 'Agacer, refuser, ressentir', ['ce qui agace', 'dire non', 'les émotions', 'familier ou courant'], [
    table('sheet-humeur-agacer', 'Ce qui agace', ['Expression', 'Registre', 'Sens', 'Anglais'], [
      ["casser les pieds à quelqu'un", 'familier', 'agacer, ennuyer', 'get on your nerves'],
      ["prendre la tête à quelqu'un", 'familier', 'fatiguer, énerver', "do your head in"],
      ['en avoir plein le dos', 'familier', 'en avoir assez', 'be fed up'],
      ['taper sur les nerfs', 'courant', 'énerver', 'get on your nerves'],
      ["avoir quelqu'un dans le nez", 'familier', 'ne pas supporter', "not stand someone"],
      ['ça me dérange', 'courant', "la même idée, pour l'écrit", 'it bothers me'],
    ]),
    teach('sheet-humeur-registre', "Familier à l'oral, courant à l'écrit",
      "Casser les pieds, prendre la tête, en avoir plein le dos : entre amis, oui. Dans une lettre au propriétaire ou un courriel au patron, dis plutôt : ce bruit me dérange, j'en ai assez, je ne supporte plus ce retard. EN: the familier forms are for friends; write the courant ones."),
    table('sheet-humeur-non', 'Dire non', ['Expression', 'Registre', 'Sens', 'Anglais'], [
      ["tourner le dos à quelqu'un", 'courant', 'ignorer, abandonner', 'turn your back on someone'],
      ['faire la tête', 'courant', 'bouder', 'sulk'],
      ['faire la sourde oreille', 'courant', 'faire semblant de ne pas entendre', 'turn a deaf ear'],
      ["n'en faire qu'à sa tête", 'courant', 'faire ce qu’on veut', 'do as you please'],
      ["s'en laver les mains", 'courant', 'ne plus être responsable', 'wash your hands of it'],
      ['fermer les yeux sur', 'courant', 'laisser passer', 'turn a blind eye to'],
    ]),
    table('sheet-humeur-emotions', 'Ce que tu ressens', ['Expression', 'Registre', 'Sens', 'Anglais'], [
      ['avoir le cœur gros', 'courant', 'être triste', 'have a heavy heart'],
      ['avoir la gorge serrée', 'courant', 'être ému, près des larmes', 'have a lump in your throat'],
      ["avoir l'estomac noué", 'courant', 'avoir peur, être stressé', 'have a knot in your stomach'],
      ["s'en mordre les doigts", 'courant', 'regretter', 'bitterly regret it'],
      ['se faire du mauvais sang', 'courant', "s'inquiéter", 'worry yourself sick'],
    ]),
  ]),
  sheet('sheet-tete', 'La tête, la langue, les yeux', ['la gaffe', 'distrait ou attentif', 'la mémoire', 'Québec et France'], [
    table('sheet-tete-gaffe', 'La gaffe et la langue', ['Expression', 'Registre', 'Sens', 'Anglais'], [
      ['mettre les pieds dans le plat', 'courant', 'dire ce qu’il ne fallait pas', 'put your foot in it'],
      ['avoir deux mains gauches', 'familier', 'être maladroit', 'be all thumbs'],
      ['se lever du pied gauche', 'courant', 'être de mauvaise humeur', 'get out of bed on the wrong side'],
      ['ne pas avoir la langue dans sa poche', 'courant', 'parler facilement, oser dire', 'never be lost for words'],
      ['tourner sept fois sa langue dans sa bouche', 'courant', 'réfléchir avant de parler', 'think before you speak'],
    ]),
    table('sheet-tete-attention', 'Distrait ou attentif', ['Expression', 'Registre', 'Sens', 'Anglais'], [
      ['avoir la tête dans les nuages', 'courant', 'rêver', 'have your head in the clouds'],
      ['avoir la tête ailleurs', 'courant', 'penser à autre chose', 'be miles away'],
      ['ne pas avoir les yeux en face des trous', 'familier', 'être mal réveillé', 'not be with it'],
      ['avoir les yeux dans la graisse de bine (Québec)', 'familier', 'être mal réveillé', 'be bleary-eyed'],
      ["jeter un coup d'œil", 'courant', 'regarder vite', 'take a quick look'],
      ['garder un œil sur', 'courant', 'surveiller', 'keep an eye on'],
      ['sauter aux yeux', 'courant', 'être évident', 'be glaringly obvious'],
    ]),
    table('sheet-tete-memoire', 'La mémoire et le savoir', ['Expression', 'Registre', 'Sens', 'Anglais'], [
      ['connaître par cœur', 'courant', 'savoir mot à mot', 'know by heart'],
      ['avoir un mot sur le bout de la langue', 'courant', 'presque se souvenir', 'on the tip of your tongue'],
      ['connaître sur le bout des doigts', 'courant', 'maîtriser un sujet', 'know inside out'],
      ['les doigts dans le nez', 'familier', 'très facilement', 'hands down'],
      ["se mettre le doigt dans l'œil", 'familier', 'se tromper complètement', 'be way off'],
      ['mon œil', 'familier', 'je ne te crois pas', 'yeah, right'],
    ]),
    teach('sheet-tete-quebec', 'Québec et France',
      "Certaines expressions ont une adresse. Au Québec : avoir les yeux dans la graisse de bine, ça coûte un bras. Et des mots de tous les jours : une entrevue, le souper, un courriel, une auto. En France, on dit plutôt : ne pas avoir les yeux en face des trous, un entretien, le dîner, un mail, une voiture. EN: some idioms and words belong to Québec; France has its own."),
  ]),
  sheet('sheet-pieges', 'Pièges et anecdote', ['les faux amis', 'les calques anglais', 'relire ton anecdote'], [
    table('sheet-pieges-faux', 'Les faux amis', ['Expression', "Ce n'est pas", "C'est"], [
      ['avoir le cœur gros', 'big-hearted', 'être triste'],
      ['avoir le bras long', 'avoir de longs bras', 'avoir des relations'],
      ['avoir le cœur sur la main', 'to wear your heart on your sleeve', 'être très généreux'],
      ['se faire du mauvais sang', 'bad blood (une dispute)', "s'inquiéter"],
      ['faire la tête', 'to head something', 'bouder'],
      ['mettre les pieds dans le plat', 'to put your foot down', 'faire une gaffe'],
    ]),
    table('sheet-pieges-calques', 'Les calques anglais', ['Anglais', 'Pas', 'Mais'], [
      ['an arm and a leg', 'un bras et une jambe', 'les yeux de la tête'],
      ['give me a hand', 'donne-moi une main', 'donne-moi un coup de main'],
      ['all thumbs', 'tous les pouces', 'deux mains gauches'],
      ['put your foot in it', 'mettre son pied dedans', 'mettre les pieds dans le plat'],
      ['on the tip of my tongue', 'sur la pointe de ma langue', 'sur le bout de la langue'],
      ['keep an eye on', 'garder un œil ouvert sur', 'garder un œil sur'],
    ]),
    table('sheet-pieges-anecdote', 'Relire ton anecdote', ['À vérifier', 'Comment'], [
      ['Cinq ou six expressions', 'pas plus : chacune doit aider ton histoire'],
      ['Le bon sens', "relis la carte : l'expression dit-elle ce que tu veux dire ?"],
      ['Le bloc complet', 'aucun mot changé : les yeux de la tête, pas du visage'],
      ['Le verbe et le possessif', 'conjugués pour ta personne : mon courage, je me suis levé'],
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
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-image', title: 'Même image, autre image', format: 'sort' as const, coach: "Deux piles : l'anglais voit la même chose, ou une autre. EN: same picture as English, or another one.", buckets: ["la même image qu'en anglais", 'une autre image'], items: [E(1007), E(1011), E(1012), E(1004), E(1005), E(1010)], audio: AUDIO },
  { id: 'd-aide', title: 'La bonne partie du corps', format: 'mcq' as const, coach: "Un coup de main, les coudes, le pouce : le bloc ne change pas. EN: the body part is fixed.", q: 'Tu peux me donner un coup de ... ?', opts: ['main', 'bras'], correct: 0, why: "Un coup de main. EN: a hand.", items: [E(1018), E(1019), E(1021), E(1022), E(1023), E(1024)], audio: AUDIO },
  { id: 'd-registre', title: 'Entre amis, ou partout', format: 'sort' as const, coach: "Deux piles : ce que tu dis à un ami, ce que tu peux écrire à tout le monde. EN: informal or courant.", buckets: ['entre amis', "partout, même à l'écrit"], items: [E(1032), E(1033), E(1034), E(1035), E(1039), E(1041)], audio: AUDIO },
  { id: 'd-effort', title: 'Paresse ou effort', format: 'sort' as const, coach: "Deux piles : ceux qui ne font rien, ceux qui travaillent dur. EN: idle or hard-working.", buckets: ['la paresse', "l'effort"], items: [E(1047), E(1048), E(1053), E(1050), E(1054), E(1052)], audio: AUDIO },
  { id: 'd-gaffe', title: 'Le possessif suit la personne', format: 'mcq' as const, coach: "Tu parles à quelqu'un que tu tutoies : ta langue, ta bouche. EN: ta for tu.", q: 'Tourne sept fois ... langue dans ta bouche.', opts: ['sa', 'ta'], correct: 1, why: "Tu, donc ta. EN: ta.", items: [E(1062), E(1063), E(1064), E(1065), E(1066), E(1069)], audio: AUDIO },
  { id: 'd-yeux', title: 'Jeter, garder, sauter', format: 'mcq' as const, coach: "Chaque expression des yeux a son verbe et sa préposition. EN: each eye idiom has its own verb.", q: "Tu peux ... un coup d'œil à mon texte ?", opts: ['jeter', 'prendre'], correct: 0, why: "On jette un coup d'œil. EN: throw.", items: [E(1081), E(1084), E(1085), E(1086), E(1087), E(1088)], audio: AUDIO },
  { id: 'd-argent', title: "L'argent ou les relations", format: 'sort' as const, coach: "Deux piles : ce qui parle d'argent, ce qui parle des gens qu'on connaît. EN: money or connections.", buckets: ["l'argent", 'les relations'], items: [E(1097), E(1098), E(1099), E(1100), E(1102), E(1105)], audio: AUDIO },
  { id: 'd-courage', title: 'Oser, avec le bon mot', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute, en regardant le possessif et la préposition. EN: read each aloud.", items: [E(1116), E(1117), E(1118), E(1119), E(1120), E(1122)], audio: AUDIO },
  { id: 'd-memoire', title: 'Le bout, pas la pointe', format: 'mcq' as const, coach: "La langue et les doigts ont un bout. EN: bout, not pointe.", q: "Je l'ai sur le ... de la langue.", opts: ['pointe', 'bout'], correct: 1, why: "Le bout de la langue. EN: bout.", items: [E(1131), E(1132), E(1133), E(1134), E(1135), E(1139)], audio: AUDIO },
  { id: 'd-refus', title: 'Les deux yeux', format: 'mcq' as const, coach: "Même image qu'en anglais, mais les petits mots français. EN: the little words are French.", q: 'Pour cette fois, je ferme ... .', opts: ['un œil', 'les yeux'], correct: 1, why: "Les deux yeux. EN: both eyes.", items: [E(1148), E(1149), E(1150), E(1152), E(1153), E(1156)], audio: AUDIO },
  { id: 'd-coeur', title: 'Triste ou généreux', format: 'sort' as const, coach: "Deux piles : le cœur gros, triste ; le cœur sur la main, généreux. EN: sad or generous.", buckets: ['triste', 'généreux'], items: [E(1163), E(1169), E(1176), E(1023), E(1025), E(1017)], audio: AUDIO },
  { id: 'd-anecdote', title: 'Une expression par moment', format: 'flashcard' as const, coach: "Lis le message de Sam, une phrase à la fois : chaque expression raconte un moment. EN: one idiom per moment.", items: [E(1173), E(1174), E(1175), E(1176), E(1177), E(1178)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'calque-anglais', description: 'Translates an English idiom word for word (an arm and a leg, give a hand), producing correct French words with an English picture nobody says.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a12-mission'], drill: 'd-image', retest: 'd-image' },
  { id: 'aide-mal-construite', description: 'Swaps a body part inside a helping idiom (un coup de doigt, des bras et des mains) or adds an English possessive to it.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a12-mission'], drill: 'd-aide', retest: 'd-aide' },
  { id: 'registre-mal-place', description: 'Uses a familier annoyance idiom (casser les pieds, prendre la tête) with someone they say vous to or in writing, or drops the en of en avoir plein le dos.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check', 'a12-mission'], drill: 'd-registre', retest: 'd-registre' },
  { id: 'paresse-effort-inverse', description: 'Reads avoir un poil dans la main as hard-working, or changes the fixed numbers and possessives (cinq doigts, ma tête).', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a12-mission'], drill: 'd-effort', retest: 'd-effort' },
  { id: 'gaffe-mal-dite', description: 'Calques put your foot in it or the wrong side of the bed, or keeps the dictionary possessive sa where the person is tu.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a12-mission'], drill: 'd-gaffe', retest: 'd-gaffe' },
  { id: 'attention-calque', description: 'Builds the eye idioms from English (prendre un regard, garder un œil ouvert, sauter dans les yeux) or uses the Québec graisse de bine in France.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a12-mission'], drill: 'd-yeux', retest: 'd-yeux' },
  { id: 'argent-calque', description: "Mis-builds the money idioms (le long bras, pour l'œil) or takes avoir le bras long for being tall.", detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a12-mission'], drill: 'd-argent', retest: 'd-argent' },
  { id: 'courage-possessif', description: 'Keeps son in prendre son courage à deux mains whatever the subject, or drops the à of tenir tête à.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a12-mission'], drill: 'd-courage', retest: 'd-courage' },
  { id: 'savoir-calque', description: 'Translates tip of the tongue with pointe, adds a possessive to se mettre le doigt dans l’œil, or uses mon œil with someone they say vous to.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a12-mission'], drill: 'd-memoire', retest: 'd-memoire' },
  { id: 'refus-petits-mots', description: 'Gets the same-picture refusal idioms right in meaning but English in form (fermer un œil, je lave mes mains, fait sa tête).', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-refus', retest: 'd-refus' },
  { id: 'coeur-faux-ami', description: 'Uses avoir le cœur gros for generous or se faire du mauvais sang for a feud, following the English look-alike.', detectOn: ['a11-construire', 'a11-erreurs', 'a11-check', 'a12-mission'], drill: 'd-coeur', retest: 'd-coeur' },
  { id: 'anecdote-surchargee', description: 'Stacks idioms as a list in the anecdote, or places them where their meaning does not fit what happened.', detectOn: ['a12-lecture', 'a12-cheat', 'a12-mission'], drill: 'd-anecdote', retest: 'd-anecdote' },
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-27-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-27-blog': "The newcomer's blog post (act 1), ONE VOICE, one take, a woman in her thirties from France who has lived in Montréal for three months: amused at herself, light. Every idiom is read as ordinary speech, with no extra weight: the learner must hear that nobody stresses an idiom. « J'ai eu peur pour ses yeux » gets a small laugh.",
  'rec-b1-27-corvee': "The work bee in Sherbrooke (act 2), THREE VOICES: a narrator, Monique (a Québécoise in her sixties, warm, organised) and the learner (relaxed, thirties). Outdoor feel, no sound effects. « la corvée » is said the Québec way, as an everyday word. Idioms at conversational speed, never slowed.",
  'rec-b1-27-piege-aide': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « coup de main » and « coup de pouce » keep the schwa light: [ku d(ə) mɛ̃].",
  'rec-b1-27-coloc-ecoute': "REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. A young Liège voice, a little exasperated, as if complaining to a friend on the phone. Belgian French welcome. Line 2 (« Arrête, tu me prends la tête ») is the most irritated; the others are tired rather than angry. The en of « j'en ai » must be audible.",
  'rec-b1-27-courriel': "Juliette's email (act 4), ONE VOICE, one take, a Lyon woman in her thirties, read aloud as if she were dictating it to herself: brisk, a bit worried, fond of Nadia. « Je ne veux pas être méchante » softens her voice; « il a un poil dans la main » is plain, not mocking.",
  'rec-b1-27-piege-effort': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « d'arrache-pied » is one word group: [da.ʁaʃ.pje], no pause at the hyphen.",
  'rec-b1-27-souper': "Lina and the learner (act 5), THREE VOICES: a narrator, Lina (a Genève woman in her twenties, laughing and slightly embarrassed; Swiss French welcome) and the learner (amused). Lina tells the evening as a comedy. « deux mains gauches » and « du pied gauche » are unstressed: the joke is in the situation, not the idiom.",
  'rec-b1-27-lundi-ecoute': "REQUIRED FOR THE EAR MISSION (act 6): ten lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. A Québec City voice, an office on a Monday morning, slightly sleepy. Line 4 (« les yeux dans la graisse de bine ») in unmistakable Québec French: it is the variant the learner must place. « coup d'œil » is [ku dœj], one group.",
  'rec-b1-27-piege-yeux': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « un œil » carries its liaison: [œ̃.nœj].",
  'rec-b1-27-forum': "Awa's forum post (act 7), ONE VOICE, one take, a Senegalese woman in her thirties who lives in Montréal: friendly, a little overwhelmed by the costs, amused at her sister. Senegalese French welcome, with a Montréal touch on « Comme on dit au Québec, le billet d'avion m'a coûté un bras ».",
  'rec-b1-27-augmentation': "Koffi and Aya (act 8), THREE VOICES: a narrator, Koffi (an Abidjan man in his thirties, confident, encouraging; Ivorian French welcome) and Aya (the learner's part, nervous then decided). Koffi's lines are a pep talk, not a lecture. Aya's last line is calm and firm.",
  'rec-b1-27-piege-courage': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « tenu tête à » links as [tə.ny tɛ.ta].",
  'rec-b1-27-quiz-ecoute': "REQUIRED FOR THE EAR MISSION (act 9): ten lines, ONE TAKE, TWO VOICES alternating (an Ontario francophone man and woman at a pub quiz, playful). Lines with a question mark rise; « Mon œil » at the end of lines 5 and 10 falls flat and dry, which is what tells the learner it means disbelief. [mɔ̃.nœj], one group.",
  'rec-b1-27-zoe': "Josée and the learner (act 10), THREE VOICES: a narrator, Josée (an Acadian woman from Moncton in her forties, tired but affectionate; Acadian French welcome) and the learner (a sympathetic neighbour). No anger in Josée's voice: resignation with a smile.",
  'rec-b1-27-piege-refus': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « la sourde oreille » is [la suʁ.dɔ.ʁɛj], with the d carried over.",
  'rec-b1-27-adieu': "Inès's goodbye message (act 11), ONE VOICE, one take, a Bordeaux woman in her thirties who has lived three years in Montréal. Moved but smiling; the voice catches slightly on « j'ai la gorge serrée » and recovers on « promis ». Never tearful: the emotion is in the words.",
  'rec-b1-27-demenagement': "Sam's message (act 12), ONE VOICE, one take, a Montréal man in his twenties recording a voice note to a friend: relaxed, self-mocking, tired after the move. The six idioms are said at normal speed; the model teaches that an idiom in an anecdote is not performed. A short pause after « Silence. »",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 27',
  intro: "French speakers say that something costs the eyes of the head, that a lazy colleague has a hair in his hand and that a tactless friend put his feet in the dish. Every one of these pictures is made of a body part you learned in A1, and none of them means what its words say. This lesson teaches about sixty of them, grouped by what they do (helping, annoying, working, blundering, paying, daring, remembering, refusing, feeling): the picture, the meaning, the register and the English equivalent, which often uses another body part. It ends with a short anecdote that uses five or six of them naturally.",
  skill: 'PE',
  grammarAssumed: [CORPS_UNIT, PC_AVOIR_UNIT, PRONOMINAL_UNIT, PRONOMINAL_PC_UNIT, PC_IMPARFAIT_UNIT],
  grammarIntroduced: [
    'Idioms as fixed blocks: the literal picture (sens propre) against the meaning (sens figuré), with the English equivalent, which often uses a different body part',
    'What moves inside an idiom: the verb is conjugated in any tense and the possessive follows the subject (prendre son courage à deux mains, tourner sept fois sa langue); nothing else changes',
    'Register marked per idiom: familier (casser les pieds, avoir un poil dans la main, mon œil) against courant (garder la tête froide, fermer les yeux sur), with a courant replacement for writing',
    'Body idioms for helping, annoying, laziness and effort, blunders, distraction and attention, money and connections, courage and good sense, memory, refusal and emotion',
    'False friends among body idioms: avoir le cœur gros (sad, not big-hearted), avoir le bras long (connections), se faire du mauvais sang (to worry), mettre les pieds dans le plat (to blunder)',
    'Regional variants: avoir les yeux dans la graisse de bine (Québec), coûter un bras (Québec first)',
    'Using five or six idioms naturally in a short spoken-style anecdote, rather than as a list',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "En français, ce qui est trop cher coûte les yeux de la tête, un collègue paresseux a un poil dans la main, et un ami maladroit met les pieds dans le plat. Tu connais chaque partie du corps depuis le A1, mais aucune de ces phrases ne dit ce que disent ses mots. Cette leçon t'apprend une soixantaine d'images : ce qu'elles montrent, ce qu'elles veulent dire, et à qui les dire, jusqu'à une petite anecdote.",
    minutes: 140,
    difficulty: 3,
    glyph: 'œil',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: EXPRESSIONS_CORPS_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, BLOG_TEXT, COURRIEL_TEXT, FORUM_TEXT, ADIEU_TEXT, DEMENAGEMENT_TEXT, dicteeFor };
