// b1.13.l1 « Lequel, ce qui et ce que » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is the draft type in `_task-section.ts`, not in schema.ts, so `sections` is
// `DraftSection[]` and the validators run on `lessonWithoutTask()`.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading / listening), name
//   (cardDeck, tapTable, examples), build (groupDrill, gated), choose (a
//   drill where the MEANING picks the form), trap (trapDrill stepped or
//   commonErrors), check (gated control pages before the checkpoint).
//
//    1  Deux trous dans la phrase   8   what the whole lesson decides
//    2  La préposition reste devant 8   word order, and why que stops here
//    3  Quatre formes, trois sons   7   lequel agrees with the noun in front
//    4  à devient auquel            7   the first soudure, and the verb's à
//    5  de devient duquel           8   the second soudure, and where dont stops
//    6  La raison pour laquelle     7   the fixed blocks a B1 writer needs
//    7  Rien devant : ce qui, ce que 7  b1.11's act 10 picked up and finished
//    8  Ce dont                     7   the third form, and the verb's de
//    9  Tout ce qui, tout ce que    7   the ce an anglophone drops
//   10  Ce qui reprend une phrase   7   after a comma, a whole idea
//   11  Écrire la fiche            11   model, plan, role play, TASK, quiz
//
//   TOTAL 84 missions, 11 acts. Corpus: 193 authored rows in one block
//   (.1400-.1592) plus 22 reused seed rows, released act by act through
//   `deckTranche`. Chapter artwork: `lequel-ce-qui-image-prompts.md`, 11
//   prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un nom devant : tu le reprends. Rien devant : tu écris ce. »
//   EN: A noun in front: you pick it up. Nothing in front: you write ce.
//
//   ONE METAPHOR, LE DEVANT. b1.11 settled WHICH little word by looking
//   BEHIND it. This lesson settles whether there is anything to pick up at
//   all, by looking IN FRONT of it. The two tests stack and neither replaces
//   the other: act 7 says exactly that on the card and quotes b1.11 verbatim
//   rather than rewording it.
//
//   It is NOT « lequel for things, qui for people » and it is NOT « after a
//   preposition, always lequel », which are the two candidates the corpus
//   rejects by name (§D). The wording says « un nom » rather than « quelque
//   chose », because in act 10 what precedes the comma is a whole sentence,
//   which is precisely not a noun, which is precisely why ce is required.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    lequel and its four forms after a preposition; the place of the
//           preposition; the two soudures (auquel / duquel and their
//           plurals, and the feminine singular that resists both); the
//           compound preposition that forces duquel where dont cannot go;
//           the fixed blocks (la raison pour laquelle, les conditions dans
//           lesquelles, grâce auquel); ce qui, ce que and ce dont; tout ce
//           qui / que / dont; and the comma form that picks up a whole
//           sentence.
//   QUOTES  b1.11's reframe (imported as B111_REFRAME, never retyped): act 7
//           hands the look-behind test on unchanged and builds on it.
//   LEAVES  to b1.12, running in parallel: dont and où as such, and the
//           prepositional relatives for PEOPLE (avec qui, à qui, chez qui).
//           dont is NAMED here wherever the contrast demands it (act 5 for
//           dont against duquel, act 8 for ce dont) and is treated as known
//           on the card, in the act check and in the task's grader notes.
//           The subjunctive is b1.14's and appears in no authored French.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (Nadia says « vous » to somebody she does not know).
//   Every learner surface that explains something carries English (`en`, or
//   a final « EN: »). Every `say` is French, spoken fr-FR. Theme
//   `pronoms-essentiels`. A2 citations use the English trail label; b1.* ones
//   are French from the plan.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE SEED CARRIES EXACTLY ONE lequel ROW in the whole corpus
//      (fr.b1.musique.001). Postgres holds roughly four times what the seed
//      shows, so there are almost certainly published lequel rows this
//      lesson could have reused and has instead re-authored. Re-probe at
//      import and dedupe, or accept the twins?
//   2. LEQUEL FOR PEOPLE is real French (« la personne à laquelle je
//      pense ») and this lesson prints it exactly once, in act 11's
//      « grâce à laquelle », because b1.12 owns avec qui / à qui. Is that
//      the right seam, or should act 6 name the people case explicitly?
//   3. THREE tapTables (acts 2, 3 and 5), one per act. The pilot brief
//      allowed one per LESSON; b1.02 to b1.11 shipped 2 and 3. Confirm the
//      looser rule.
//   4. ACT 7 REOPENS b1.11's act 10 rather than assuming it. Six of b1.11's
//      missions previewed ce qui and ce que; act 7 here re-meets them in one
//      story and one card deck and then goes past them. Is one act of
//      overlap right, or should act 7 start at ce dont?
//   5. B1 CITATIONS are French from the plan (« la leçon 12 du B1 ») because
//      b1.* units are not in the seed. Switch to the English trail label
//      once they are?
//   6. Titles, labels, card heads and stat keys carry no « EN: » tail, as in
//      b1.01 to b1.11. Tail them too?
//   7. 'coach-fr-FR' is still a proposed voice id (b1.01's question 5).
//   8. The task is WRITTEN (110 to 150 words, `skill: 'PE'`). The unit
//      outcome is written and spoken both. Should b1.13 also carry a spoken
//      task, or does the act 11 scenario cover it?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, THE_LOOK, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  READING_ATELIER, READING_LETTRE, READING_MESSAGE, READING_FICHE,
  B111_REFRAME, B111_REFRAME_EN,
  PREPOSITIONS_UNIT, LIEU_UNIT, QUI_QUE_UNIT, DONT_OU_UNIT,
  QUI_QUE_REF, DONT_OU_REF,
} from './lequel-ce-qui-corpus.ts';
import { LEQUEL_CE_QUI_TERMS } from './lequel-ce-qui-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: DraftSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.13: no item ${id}`);
  return r;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A free groupDrill item: a quotation of a passage, with no corpus row. */
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
/** A listening line copied from its row. */
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
/** An examples row copied from its row. */
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
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
 *  ACT 1 — DEUX TROUS DANS LA MÊME PHRASE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Nothing the learner says is ungrammatical. Two true short sentences
 *  simply cannot say WHICH screwdriver, and a third thing has no name at all.
 *  NO « ? » OR « ! » IN ANY BUBBLE (house rule 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: "Au comptoir de l'atelier",
  frSub: 'Six tournevis sur un établi',
  setting: { place: 'Atelier de réparation de quartier, rue Ontario', city: 'Montréal', time: '10 h 15', ambience: 'un comptoir, une file, six tournevis alignés au fond' },
  beats: [
    {
      kind: 'narration',
      text: "Samedi matin, rue Ontario. Un local ouvre ses portes et douze personnes entrent avec des objets cassés. Tu poses ta lampe de bureau sur le comptoir. Nadia sort une fiche.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nadia',
      fr: 'Bonjour. Racontez-moi la panne.',
      en: 'Good morning. Tell me about the fault.',
      respell: '[bohⁿ-ZHOOR | rah-kohⁿ-tay MWAH lah PANN]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "J'ai ouvert le boîtier avec un tournevis. Le tournevis est trop petit.",
      en: 'I opened the case with a screwdriver. The screwdriver is too small.',
      respell: '[zhay oo-VEHR luh bwah-TYAY ah-vek uhⁿ toor-nuh-VEE | luh toor-nuh-VEE eh troh puh-TEE]',
      stage: 'Deux phrases justes. Grammaticalement, rien ne cloche.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Nadia lève les yeux. Derrière elle, sur l'établi, six tournevis sont alignés. Tes deux phrases sont vraies, et elles ne montrent aucun des six.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nadia',
      fr: "J'en ai six ici. Dites-moi lequel, en une seule phrase.",
      en: 'I have six here. Tell me which one, in a single sentence.',
      respell: '[zhahⁿ nay SEESS ee-SEE | deet MWAH luh-KEL ahⁿ ün suhl FRAHZ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase désigne un seul tournevis sur les six ?',
      size: 'lg',
      options: [
        { fr: "Le tournevis que j'ai ouvert le boîtier avec est trop petit.", respell: "[luh toor-nuh-VEE kuh zhay oo-vehr luh bwah-TYAY ah-VEK | eh troh puh-TEE]", en: 'The screwdriver I opened the case with is too small.', outcome: 'breaks', audio: AUDIO },
        { fr: "Le tournevis avec lequel j'ai ouvert le boîtier est trop petit.", respell: '[luh toor-nuh-VEE ah-vek luh-KEL | zhay oo-vehr luh bwah-TYAY eh troh puh-TEE]', en: 'The screwdriver I opened the case with is too small.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Nadia va derrière, prend le plus fin des six et te le tend. Une seule phrase a suffi.",
        breaks: "Nadia s'arrête au milieu de ta phrase. Elle entend deux sujets collés, et le avec final ne se rattache à rien.",
      },
    },
    {
      kind: 'break',
      heading: 'La préposition ne reste pas au bout',
      body: "En anglais, with se pose à la fin et le mot du milieu peut même disparaître. En français, la préposition monte devant, et le nom revient sous la forme lequel. EN: French moves the preposition to the front and the noun comes back as lequel.",
      wrong: {
        fr: "Le tournevis que j'ai ouvert le boîtier avec est trop petit.",
        ipa: '/lə tuʁ.nə.vi kə ʒe u.vɛʁ lə bwa.tje a.vɛk ɛ tʁo pə.ti/',
        respell: '[luh toor-nuh-VEE kuh zhay oo-vehr luh bwah-TYAY ah-VEK]',
        en: 'The screwdriver I opened the case with is too small.',
      },
      right: {
        fr: "Le tournevis avec lequel j'ai ouvert le boîtier est trop petit.",
        ipa: '/lə tuʁ.nə.vi a.vɛk lə.kɛl ʒe u.vɛʁ lə bwa.tje ɛ tʁo pə.ti/',
        respell: '[luh toor-nuh-VEE ah-vek luh-KEL | zhay oo-vehr luh bwah-TYAY]',
        en: 'The screwdriver I opened the case with is too small.',
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Il reste une chose que tu n'as pas dite : le fil noir, qui chauffe. Aucun nom ne le désigne encore dans ta phrase. C'est la seconde moitié de cette leçon.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['devant', 'place'],
};

const A1_OBJECTIFS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-objectifs',
  layer: 'core',
  title: 'Ce que tu sauras faire',
  frSub: 'Quatre choses, onze actes',
  goals: [
    { t: 'Accrocher une phrase à un nom par-dessus une préposition', s: 'actes 2 et 3 : le stylo avec lequel, la table sur laquelle' },
    { t: 'Souder à et de au bon moment', s: 'actes 4 et 5 : auquel, duquel, et le féminin qui résiste' },
    { t: 'Écrire les blocs que tout le monde utilise', s: 'acte 6 : la raison pour laquelle, grâce auquel' },
    { t: "Parler d'une chose qu'aucun nom ne désigne", s: 'actes 7 à 10 : ce qui, ce que, ce dont' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['devant'],
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "La fiche de l'atelier",
  frSub: 'Lis, et regarde ce qui est écrit devant',
  text: READING_ATELIER,
  glossary: [
    { word: 'la panne', en: 'the fault, the breakdown', note: "Ce qui ne marche plus dans l'objet." },
    { word: "l'établi", en: 'the workbench', note: 'La grande table sur laquelle on répare.' },
    { word: 'une vis', en: 'a screw', note: 'La petite pièce que le tournevis serre.' },
    { word: 'rattaché', en: 'reattached, tied back', note: "Relié à la bonne chose, et non laissé seul." },
  ],
  questions: [
    { q: 'Pourquoi deux phrases courtes ne suffisaient-elles pas ?', a: "Il y avait six tournevis sur l'établi. Les deux phrases étaient vraies pour n'importe lequel des six." },
    { q: 'Quel mot précède avec lequel dans la phrase corrigée ?', a: 'Le nom « le tournevis ». Ce nom est ce que lequel reprend.' },
    { q: 'Quel nom précède « ce qui » dans « Ce qui m’inquiète, c’est le fil » ?', a: "Aucun. Rien n'est écrit devant, et c'est pour ça qu'il faut ce." },
    { q: 'Que fait la préposition dans « dans laquelle vous rangez les vis » ?', a: "Elle passe devant le petit mot. En anglais elle resterait à la fin de la phrase." },
  ],
  audio: REC('rec-b1-13-atelier'),
  say: REFRAME,
  terms: ['devant', 'place'],
};

const A1_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-devant',
  title: 'Quatre cartes sur le devant',
  frSub: 'Un seul geste, deux résultats',
  hint: 'Quatre cartes. Regarde chaque fois ce qui est écrit devant le trou.',
  audio: REC('rec-b1-13-devant'),
  say: REFRAME,
  terms: ['devant', 'neutre'],
  cards: [
    {
      head: 'Un nom est écrit devant', label: 'le tournevis',
      fr: "le tournevis avec lequel j'écris",
      sub: '[luh toor-nuh-VEE ah-vek luh-KEL]',
      body: "Le nom est là, donc tu le reprends. Après une préposition, il revient sous la forme lequel. EN: the noun is there, so you pick it up.",
    },
    {
      head: "Rien n'est écrit devant", label: 'ce qui',
      fr: "Ce qui m'inquiète, c'est le fil.",
      sub: '[suh kee mehⁿ-KYET]',
      body: "Aucun nom à reprendre, alors ce prend la place du nom manquant. EN: with no noun to pick up, ce stands in for the missing one.",
    },
    {
      head: 'Le test que tu connais déjà', label: Cap(QUI_QUE_REF),
      fr: "ce qui · ce que",
      sub: '[suh KEE] · [suh KUH]',
      body: `« ${B111_REFRAME} » Rien ne change derrière le trou. EN: ${B111_REFRAME_EN}`,
    },
    {
      head: 'Les deux gestes ensemble', label: 'devant, puis derrière',
      fr: "Regarde devant. Puis regarde derrière.",
      sub: '[ruh-gard duh-VAHⁿ] · [püee ruh-gard deh-RYEHR]',
      body: "Devant, tu décides s'il faut ce. Derrière, tu décides entre qui, que et dont. EN: the front decides whether ce is needed, the back decides which word follows.",
    },
  ],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère ce qui est écrit devant',
  frSub: 'Deux piles, un seul coup d’œil',
  groups: [
    grp('Un nom est écrit devant', [
      it(E(1402), 'le tournevis'),
      it(E(1405), 'le bouton'),
      it(E(1410), 'les outils'),
      it(E(1416), 'la boîte'),
    ], chk('Dans ces quatre phrases, que reprend le petit mot ?',
      ['toute la phrase de devant', 'un nom écrit juste devant'], 1,
      "Un nom est écrit là, et le mot le reprend. EN: a noun is written there, and the word picks it up.")),
    grp("Rien n'est écrit devant", [
      it(E(1404), 'aucun nom devant'),
      it(E(1407), 'aucun nom devant'),
      it(E(1412), 'aucun nom devant'),
      it(E(1413), 'tout ne compte pas comme un nom'),
    ], chk('Et ici, pourquoi ce devant le petit mot ?',
      ["parce qu'aucun nom ne précède", 'parce que la phrase est longue', 'parce que le verbe est au présent'], 0,
      "Il n'y a rien à reprendre, donc ce prend la place. EN: there is nothing to pick up, so ce stands in.")),
    ctl('Le geste', "Tu hésites devant un trou. Que regardes-tu en premier ?",
      ['le mot juste devant le trou', 'la longueur de la phrase'], 0,
      `${THE_LOOK} EN: look in front of the gap first, always.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['devant', 'neutre'],
};

const A1_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a1-exemples',
  layer: 'core',
  title: 'Cinq phrases de la fiche',
  frSub: "Ce que Nadia a écrit",
  examples: [
    ex(E(1402), 'un nom devant, et avec passe en tête'),
    ex(E(1406), 'un nom devant, et sur passe en tête'),
    ex(E(1411), 'un bloc entier : la raison pour laquelle'),
    ex(E(1404), 'rien devant : ce prend la place'),
    ex(E(1412), 'rien devant, et le verbe réclame de'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['devant', 'place'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Quatre fois où le mauvais mot coûte quelque chose',
  cases: [
    { situation: 'Tu décris une panne à un réparateur', fr: "Le tournevis avec lequel j'ai ouvert le boîtier est trop petit.", en: 'The screwdriver I opened the case with is too small.' },
    { situation: 'Tu justifies une demande écrite', fr: 'La raison pour laquelle je viens ici est simple.', en: 'The reason why I come here is simple.' },
    { situation: "Tu dis ce qui compte, sans pouvoir le nommer", fr: "Ce qui m'inquiète, c'est le fil.", en: 'What worries me is the wire.' },
    { situation: 'Tu demandes une pièce au comptoir', fr: 'Dis-moi ce dont tu as besoin.', en: 'Tell me what you need.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['devant'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le devant', 'Que décide le mot écrit juste devant le trou ?',
    ['le temps du verbe', "s'il faut écrire ce"], 1,
    "Un nom, tu le reprends. Rien, tu écris ce. EN: a noun means you pick it up; nothing means ce."),
  ctl('La préposition', "« the pen I write with » : où va avec en français ?",
    ['devant le petit mot', 'à la fin, comme en anglais'], 0,
    "avec lequel, jamais lequel avec. EN: avec lequel, never the other way round."),
  ctl('Les deux tests', 'Le test de la leçon 11 disparaît-il ici ?',
    ['oui, il est remplacé', 'non, il vient juste après', 'oui, sauf après une virgule'], 1,
    `${B111_REFRAME} EN: ${B111_REFRAME_EN}`),
], ['devant', 'place']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Deux trous dans la même phrase',
    opener: {
      line: "Six tournevis sur un établi, et deux phrases vraies qui n'en montrent aucun : ici tu apprends le geste qui les désigne. EN: Six screwdrivers on a bench and two true sentences that point at none of them: here you learn the move that picks one out.",
      imageRef: 'lessons/lequel-ce-qui/act01.jpg',
    },
    sections: [],
    milestone: "Tu sais déjà quoi regarder : le mot écrit devant le trou, et rien d'autre. EN: You already know what to look at: the word written in front of the gap, and nothing else.",
    estScreens: 24, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_OBJECTIFS, A1_LECTURE, A1_CARTES, A1_REPERER, A1_EXEMPLES, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LA PRÉPOSITION RESTE DEVANT
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Le stylo de la grand-mère',
  frSub: 'Un mot qui traîne au bout de la phrase',
  setting: "Samuel écrit une petite annonce pour retrouver un stylo. Il lit son brouillon à voix haute et quelque chose bloque à la fin de chaque phrase.",
  bubbles: [
    { from: 'user', fr: "Le stylo que j'écris avec vient de ma grand-mère.", en: 'The pen I write with came from my grandmother.', warn: "avec reste au bout, comme en anglais" },
    { from: 'coach', fr: 'Relis-la lentement. Le dernier mot se rattache à quoi.', en: 'Read it again slowly. What does the last word attach to.' },
    { from: 'user', fr: 'À rien. Il est tout seul à la fin.', en: 'To nothing. It is on its own at the end.' },
    { from: 'coach', fr: "Alors fais-le monter. Il se met devant le petit mot, et il n'en bouge plus.", en: 'So move it up. It goes in front of the little word and stays there.' },
    { from: 'user', fr: "Le stylo avec lequel j'écris vient de ma grand-mère.", en: 'The pen I write with came from my grandmother.' },
    { from: 'coach', fr: 'Voilà. Et que devient que dans cette phrase.', en: 'There. And what happens to que in that sentence.' },
    { from: 'user', fr: 'Il disparaît. Lequel a pris sa place.', en: 'It disappears. Lequel has taken its place.' },
  ],
  closing: { fr: "Une préposition devant, et le petit mot change de famille.", en: 'A preposition in front, and the little word changes family.' },
  audio: REC('rec-b1-13-stylo'),
  say: REFRAME,
  terms: ['place'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-lequel',
  title: 'Quatre cartes sur la place',
  frSub: 'Le même sens, deux ordres',
  hint: 'Quatre cartes. Regarde où se pose la préposition.',
  audio: REC('rec-b1-13-place'),
  say: REFRAME,
  terms: ['place'],
  cards: [
    {
      head: "L'ordre anglais", label: 'à ne pas recopier',
      fr: "le stylo que j'écris avec",
      sub: "[luh stee-LOH kuh zhay-KREE ah-VEK]",
      body: "En anglais le petit mot peut même disparaître, et with reste au bout. Le français ne fait ni l'un ni l'autre. EN: English strands the preposition and may drop the pronoun; French does neither.",
    },
    {
      head: "L'ordre français", label: 'avec lequel',
      fr: "le stylo avec lequel j'écris",
      sub: '[luh stee-LOH ah-vek luh-KEL · zhay-KREE]',
      body: "La préposition monte devant, et le nom revient juste derrière elle. EN: the preposition moves in front and the noun comes back right behind it.",
    },
    {
      head: 'Pourquoi pas que', label: 'la place est prise',
      fr: 'avec que · avec lequel',
      sub: '[ah-vek KUH] · [ah-vek luh-KEL]',
      body: "que ne peut être que complément direct, donc rien ne se met devant lui. EN: que can only be a direct object, so nothing may stand in front of it.",
    },
    {
      head: 'Les prépositions qui marchent', label: 'toutes, sauf deux',
      fr: 'avec · sur · dans · pour · sans · par',
      sub: '[ah-VEK] · [SÜR] · [DAHⁿ] · [POOR]',
      body: `Toutes se posent devant lequel sans rien changer. Seules à et de se soudent, et c'est l'affaire des actes 4 et 5. EN: they all sit in front of lequel unchanged; only à and de fuse.`,
    },
  ],
};

const A2_ORDRE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-ordre',
  layer: 'core',
  sheetId: 'sheet-lequel',
  title: 'Six phrases anglaises à retourner',
  frSub: "Ce que l'anglais laisse au bout",
  cols: ['Anglais', 'Français', 'Le mot qui monte'],
  rows: [
    {
      cells: ['the pen I write with', "le stylo avec lequel j'écris", 'avec'],
      say: "Le stylo avec lequel j'écris vient de ma grand-mère.",
      detail: { title: 'with', body: "En anglais with ferme la phrase. En français il ouvre la relative. EN: English closes on with; French opens the clause with it.", say: "Le chiffon avec lequel Samuel nettoie les pièces est propre." },
    },
    {
      cells: ['the table you put it on', 'la table sur laquelle tu le poses', 'sur'],
      say: 'La table sur laquelle tu poses la lampe est solide.',
      detail: { title: 'on', body: "Le nom est féminin, donc laquelle, et sur passe devant lui. EN: the noun is feminine, so laquelle, and sur goes in front.", say: "L'établi sur lequel je travaille est trop haut." },
    },
    {
      cells: ['the box I put them in', 'le carton dans lequel je les ai mis', 'dans'],
      say: "Le carton dans lequel j'ai mis les vis a disparu.",
      detail: { title: 'in', body: "dans, et non en : le contenant prend dans. EN: a container takes dans, not en.", say: 'Le tiroir dans lequel se trouvent les piles est fermé à clé.' },
    },
    {
      cells: ['the part I waited for', "la pièce pour laquelle j'ai attendu", 'pour'],
      say: "La pièce pour laquelle j'ai attendu trois semaines est arrivée.",
      detail: { title: 'for', body: "wait for donne attendre, qui n'a pas de préposition. Ici pour veut dire à cause de quoi. EN: here pour means what the waiting was for.", say: 'Le moteur pour lequel nous attendons une pièce est en panne.' },
    },
    {
      cells: ['the tools we cannot work without', 'les outils sans lesquels on ne peut rien faire', 'sans'],
      say: 'Les outils sans lesquels on ne peut rien faire sont dans la boîte rouge.',
      detail: { title: 'without', body: "Le nom est masculin pluriel, donc lesquels, et sans passe devant. EN: masculine plural, so lesquels, with sans in front.", say: 'Les outils sans lesquels personne ne peut travailler restent ici.' },
    },
    {
      cells: ['the window it comes in through', 'la fenêtre par laquelle il entre', 'par'],
      say: 'La fenêtre par laquelle entre le bruit donne sur la rue.',
      detail: { title: 'through', body: "L'anglais coupe in through en deux. Le français dit par, un seul mot, et il monte devant. EN: French uses one word, par, and it goes in front.", say: 'Le banc sous lequel le chat dort est en bois.' },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['place', 'forme'],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Fais monter la préposition',
  groups: [
    grp('Elle monte, et rien ne change', [
      it(E(1418), 'avec passe devant'),
      it(E(1419), 'sur passe devant'),
      it(E(1420), 'dans passe devant'),
      it(E(1424), 'sur, encore'),
    ], chk('Où se trouve la préposition dans ces quatre phrases ?',
      ['juste devant le petit mot', 'à la fin de la phrase'], 0,
      "Elle ouvre la relative au lieu de la fermer. EN: it opens the clause instead of closing it.")),
    grp('Des morceaux à réutiliser', [
      it(E(1429), 'le nom, la préposition, la forme'),
      it(E(1430), 'un nom féminin'),
      it(E(1431), 'un nom masculin'),
      it(E(1426), 'le morceau complet, dans une phrase'),
    ], chk('Que contient chacun de ces morceaux, dans cet ordre ?',
      ['la forme, puis le nom', 'le nom, puis la préposition, puis la forme'], 1,
      'Le nom vient toujours en premier. EN: the noun always comes first.')),
    ctl('Le mot qui disparaît', "« le stylo que j'écris avec » : que devient que quand avec monte ?",
      ['il reste', 'il devient qui', 'il devient lequel'], 2,
      "avec ne peut pas se poser devant que. EN: avec cannot stand in front of que."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['place', 'devant'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quelle préposition monte',
  frSub: 'Huit phrases, une seule écoute',
  lines: [
    ln(E(1418)), ln(E(1419)), ln(E(1420)), ln(E(1421)),
    ln(E(1424)), ln(E(1426)), ln(E(1428)), ln(E(1433)),
  ],
  questions: [
    { q: 'Première phrase : quelle préposition entends-tu devant lequel ?', opts: ['sur', 'avec'], correct: 1,
      why: "« avec lequel j'écris ». EN: avec lequel." },
    { q: 'Deuxième phrase : la lampe est posée où ?', opts: ['sur la table', 'dans un carton'], correct: 0,
      why: '« sur laquelle tu poses la lampe ». EN: on the table.' },
    { q: 'Troisième phrase : que contenait le carton ?', opts: ['des fils', 'des vis'], correct: 1,
      why: "« dans lequel j'ai mis les vis ». EN: the screws." },
    { q: 'Cinquième phrase : quel est le problème avec l’escabeau ?', opts: ['il est trop court', 'il est cassé', 'il est trop lourd'], correct: 0,
      why: '« est trop court ». EN: it is too short.' },
    { q: 'Septième phrase : le tiroir est-il ouvert ?', opts: ['Non, il est fermé à clé', 'Oui'], correct: 0,
      why: '« est fermé à clé ». EN: it is locked.' },
  ],
  audio: REC('rec-b1-13-place-ecoute'),
  say: REFRAME,
  terms: ['place'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: "Le mot qui traîne au bout",
  frSub: 'Six phrases anglaises déguisées',
  rule: {
    title: 'Rien ne finit sur une préposition',
    body: "Si ta phrase se termine par avec, sur, dans ou pour, il manque un déplacement. La préposition monte devant le petit mot, et que devient lequel. EN: a clause that ends on a preposition needs that preposition moved to the front, and que becomes lequel.",
  },
  cards: [
    { promptLabel: 'avec au bout', promptSound: "Le stylo que j'écris avec vient de ma grand-mère.",
      fr: "Le stylo avec lequel j'écris vient de ma grand-mère.",
      ipa: '/lə sti.lo a.vɛk lə.kɛl ʒe.kʁi vjɛ̃ də ma ɡʁɑ̃.mɛʁ/',
      tip: "avec monte devant, et que cède la place. EN: avec moves in front and que gives way." },
    { promptLabel: 'sur au bout', promptSound: 'La table que tu poses la lampe sur est solide.',
      fr: 'La table sur laquelle tu poses la lampe est solide.',
      ipa: '/la tabl syʁ la.kɛl ty poz la lɑ̃p ɛ sɔ.lid/',
      tip: 'Le nom est féminin, donc laquelle. EN: the noun is feminine, so laquelle.' },
    { promptLabel: 'dans au bout', promptSound: "Le carton que j'ai mis les vis dans a disparu.",
      fr: "Le carton dans lequel j'ai mis les vis a disparu.",
      ipa: '/lə kaʁ.tɔ̃ dɑ̃ lə.kɛl ʒe mi le vis a dis.pa.ʁy/',
      tip: 'Sans le déplacement, la phrase ne repart jamais sur son verbe. EN: without the move, the sentence never gets back to its main verb.' },
    { promptLabel: 'le mot effacé', promptSound: "Le chiffon Samuel nettoie les pièces avec est propre.",
      fr: 'Le chiffon avec lequel Samuel nettoie les pièces est propre.',
      ipa: '/lə ʃi.fɔ̃ a.vɛk lə.kɛl sa.my.ɛl nɛ.twa le pjɛs ɛ pʁɔpʁ/',
      tip: "L'anglais peut ne rien écrire du tout. Le français écrit les deux mots. EN: English may write nothing at all; French writes both words." },
    { promptLabel: 'sans au bout', promptSound: 'Les outils que on ne peut rien faire sans sont dans la boîte rouge.',
      fr: 'Les outils sans lesquels on ne peut rien faire sont dans la boîte rouge.',
      ipa: '/le.zu.ti sɑ̃ le.kɛl ɔ̃ nə pø ʁjɛ̃ fɛʁ sɔ̃ dɑ̃ la bwat ʁuʒ/',
      tip: 'Masculin pluriel, donc lesquels. EN: masculine plural, so lesquels.' },
    { promptLabel: 'par au bout', promptSound: 'La fenêtre que le bruit entre par donne sur la rue.',
      fr: 'La fenêtre par laquelle entre le bruit donne sur la rue.',
      ipa: '/la fə.nɛtʁ paʁ la.kɛl ɑ̃tʁ lə bʁɥi dɔn syʁ la ʁy/',
      tip: 'par monte devant, et le sujet passe derrière le verbe. EN: par moves in front and the subject follows the verb.' },
  ],
  drill: [
    { promptSay: "Le stylo ... j'écris vient de ma grand-mère.", opts: ["que j'écris avec", 'avec lequel'], correct: 1 },
    { promptSay: 'La table ... tu poses la lampe est solide.', opts: ['sur laquelle', 'sur lequel'], correct: 0 },
    { promptSay: "Le carton ... j'ai mis les vis a disparu.", opts: ['dans laquelle', 'dans lequel'], correct: 1 },
    { promptSay: 'Les outils ... on ne peut rien faire sont là.', opts: ['sans lesquels', 'sans lesquelles'], correct: 0 },
    { promptSay: "L'escabeau ... je monte est trop court.", opts: ['que je monte sur', 'sur lequel'], correct: 1 },
    { promptSay: 'La fenêtre ... entre le bruit donne sur la rue.', opts: ['par laquelle', 'par lequel'], correct: 0 },
    { promptSay: 'Le banc ... le chat dort est en bois.', opts: ['sous laquelle', 'sous lequel'], correct: 1 },
    { promptSay: "L'armoire ... tu passes contient les outils lourds.", opts: ['devant laquelle', 'devant lequel'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Rien ne finit sur une préposition' },
    { label: 'Six cartes', kind: 'cards', title: "Ce que la phrase anglaise laisse au bout" },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-13-piege-place'),
  say: REFRAME,
  terms: ['place', 'forme'],
};

const A2_ASTUCES: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a2-astuces',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Lis ta phrase à voix haute et écoute le dernier mot avant le verbe principal.',
      why: "Si c'est avec, sur ou dans, il est au mauvais endroit et il doit monter. EN: a stranded preposition is audible at the end of the clause." },
    { hack: "Dis la phrase simple d'abord : j'écris avec ce stylo. La préposition est déjà devant le nom.",
      why: 'Tu la retrouves au même endroit dans la relative. EN: the preposition sits in the same place in the simple sentence.' },
    { hack: "Si tu peux enlever le petit mot en anglais, c'est justement là qu'il en faut deux en français.",
      why: 'the pen I write with donne le stylo avec lequel. EN: where English can delete it, French needs both words.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['place', 'devant'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La place', 'Une phrase française peut-elle finir par avec ?',
    ['oui, comme en anglais', 'non, jamais dans une relative'], 1,
    'La préposition monte devant le petit mot. EN: the preposition moves in front.'),
  ctl('Le mot', 'Que devient que quand une préposition arrive devant ?',
    ['il reste que', 'il devient lequel', 'il disparaît'], 1,
    'que ne supporte aucune préposition devant lui. EN: que takes no preposition in front of it.'),
  ctl('Les prépositions', 'Combien de prépositions se soudent à lequel ?',
    ['toutes', 'aucune', 'deux'], 2,
    'à et de, et seulement elles. EN: à and de, and only those two.'),
], ['place', 'devant']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La préposition reste devant',
    opener: {
      line: "En anglais, avec se pose au bout de la phrase : ici tu apprends à le faire monter devant, là où le français le veut. EN: English leaves with at the end of the sentence; here you learn to move it to the front, where French wants it.",
      imageRef: 'lessons/lequel-ce-qui/act02.jpg',
    },
    sections: [],
    milestone: "Aucune de tes phrases ne se termine plus par une préposition qui ne se rattache à rien. EN: None of your sentences ends on a preposition attached to nothing any more.",
    estScreens: 30, restPoints: ['a2-construire'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_ORDRE, A2_CONSTRUIRE, A2_ECOUTE, A2_PIEGE, A2_ASTUCES, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — QUATRE FORMES, TROIS SONS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The ear cannot separate lesquels from lesquelles, so the act opens
 *  by proving it: eight lines, hidden, and the answers can only come from the
 *  noun in front. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: "Ce que l'oreille ne tranche pas",
  frSub: 'Huit phrases, trois sons seulement',
  lines: [
    ln(E(1436)), ln(E(1437)), ln(E(1438)), ln(E(1439)),
    ln(E(1445)), ln(E(1446)), ln(E(1447)), ln(E(1448)),
  ],
  questions: [
    { q: 'Première phrase : de quel outil parle-t-on ?', opts: ['un couteau', 'une pince'], correct: 0,
      why: '« le couteau avec lequel je coupe le fil ». EN: the knife.' },
    { q: 'Deuxième phrase : pourquoi laquelle et non lequel ?', opts: ['la pince est petite', 'la pince est un nom féminin'], correct: 1,
      why: 'La forme suit le genre du nom écrit devant. EN: the form follows the gender of the noun in front.' },
    { q: 'Troisième et quatrième phrases : entends-tu une différence entre les deux formes ?', opts: ['non, aucune', 'oui, nette'], correct: 0,
      why: 'lesquels et lesquelles se disent pareil. EN: the two plurals sound identical.' },
    { q: 'Alors comment sais-tu laquelle écrire ?', opts: ['par la longueur du mot', 'par le nom de devant'], correct: 1,
      why: 'ciseaux est masculin, pinces est féminin. EN: ciseaux is masculine, pinces feminine.' },
    { q: 'Septième phrase : que range-t-on dans les cartons ?', opts: ['des lampes', 'des fiches', 'des outils'], correct: 0,
      why: '« nous stockons les lampes ». EN: the lamps.' },
  ],
  audio: REC('rec-b1-13-formes-ecoute'),
  say: REFRAME,
  terms: ['forme'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-lequel',
  title: 'Quatre cartes sur les formes',
  frSub: 'Le nom de devant commande tout',
  hint: 'Quatre cartes. Cherche chaque fois le nom écrit devant.',
  audio: REC('rec-b1-13-formes'),
  say: REFRAME,
  terms: ['forme', 'devant'],
  cards: [
    {
      head: 'Un nom masculin singulier', label: 'lequel',
      fr: 'le couteau avec lequel je coupe',
      sub: '[luh koo-TOH ah-vek luh-KEL]',
      body: "Le couteau est masculin, donc lequel. Le mot est fait de le et de quel, collés. EN: lequel is le plus quel, stuck together.",
    },
    {
      head: 'Un nom féminin singulier', label: 'laquelle',
      fr: 'la pince avec laquelle je tiens',
      sub: '[lah PEHⁿSS ah-vek lah-KEL]',
      body: "La pince est féminine, donc la et quelle. Les deux morceaux bougent ensemble. EN: both halves agree together.",
    },
    {
      head: 'Deux pluriels, un seul son', label: 'lesquels · lesquelles',
      fr: 'lesquels · lesquelles',
      sub: '[lay-KEL] · [lay-KEL]',
      body: "Rien ne les distingue à l'oreille. Seul le nom écrit devant dit lequel des deux écrire. EN: nothing separates them by ear; only the noun in front does.",
    },
    {
      head: 'Ce qui ne décide rien', label: 'la chose elle-même',
      fr: "les ciseaux · une paire",
      sub: '[lay see-ZOH] · [ün PEHR]',
      body: "Une seule paire de ciseaux prend quand même le pluriel : le mot est pluriel, pas l'objet. EN: one pair of scissors still takes the plural, because the word is plural.",
    },
  ],
};

const A3_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-tableau',
  layer: 'core',
  sheetId: 'sheet-lequel',
  title: 'Six noms, six formes',
  frSub: 'Regarde le nom, pas la chose',
  cols: ['Le nom devant', 'La forme', 'Ce qui décide'],
  rows: [
    {
      cells: ['le couteau', 'lequel', 'masculin singulier'],
      say: 'Le couteau avec lequel je coupe le fil est émoussé.',
      detail: { title: 'le couteau', body: "Un nom masculin singulier prend lequel, quelle que soit la préposition devant. EN: a masculine singular noun takes lequel, whatever the preposition.", say: 'Le dossier dans lequel je range les fiches est vert.' },
    },
    {
      cells: ['la pince', 'laquelle', 'féminin singulier'],
      say: 'La pince avec laquelle je tiens la pièce est trop grande.',
      detail: { title: 'la pince', body: "Un nom féminin singulier prend laquelle, avec deux l et un e. EN: a feminine singular noun takes laquelle.", say: 'La pochette dans laquelle je garde les reçus est pleine.' },
    },
    {
      cells: ['les ciseaux', 'lesquels', 'masculin pluriel'],
      say: 'Les ciseaux avec lesquels tu coupes le tissu sont à Samuel.',
      detail: { title: 'les ciseaux', body: "Le mot ciseaux est toujours pluriel en français, même pour une seule paire. EN: ciseaux is always plural in French, even for one pair.", say: 'Les cartons dans lesquels nous stockons les lampes sont au fond.' },
    },
    {
      cells: ['les pinces', 'lesquelles', 'féminin pluriel'],
      say: 'Les pinces avec lesquelles on serre les fils sont rouges.',
      detail: { title: 'les pinces', body: "Féminin et pluriel : les deux marques s'ajoutent. À l'oreille, rien ne change. EN: feminine and plural both show in writing and neither shows in speech.", say: 'Les caisses dans lesquelles nous rangeons les outils sont numérotées.' },
    },
    {
      cells: ['le moteur', 'lequel', 'masculin singulier'],
      say: 'Le moteur pour lequel nous attendons une pièce est en panne.',
      detail: { title: 'le moteur', body: "pour lequel, comme avec lequel : la préposition ne change pas la forme. EN: the preposition never changes the form.", say: "L'établi sur lequel je travaille est trop haut." },
    },
    {
      cells: ['la machine', 'laquelle', 'féminin singulier'],
      say: "La machine pour laquelle j'ai rempli le formulaire est réparée.",
      detail: { title: 'la machine', body: "Le genre du nom français décide, pas celui de la chose dans ta langue. EN: the gender of the French noun decides, not the one in your own language.", say: 'La table sur laquelle tu poses la lampe est solide.' },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['forme'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Accorde avec le nom de devant',
  groups: [
    grp('Des noms singuliers', [
      it(E(1436), 'le couteau, masculin'),
      it(E(1437), 'la pince, féminin'),
      it(E(1445), 'le dossier, masculin'),
      it(E(1446), 'la pochette, féminin'),
    ], chk('Que regardes-tu pour choisir entre lequel et laquelle ?',
      ['le genre du nom écrit devant', "la longueur de l'objet"], 0,
      'Le nom commande, la chose ne compte pas. EN: the noun decides, the object does not.')),
    grp('Des noms pluriels', [
      it(E(1438), 'les ciseaux, masculin'),
      it(E(1439), 'les pinces, féminin'),
      it(E(1447), 'les cartons, masculin'),
      it(E(1448), 'les caisses, féminin'),
    ], chk('Ces quatre formes se prononcent-elles différemment ?',
      ['oui, deux par deux', 'non, toutes pareil'], 1,
      "lesquels et lesquelles donnent le même son. EN: both plurals give the same sound.")),
    ctl('Le compte', "Quatre formes écrites : combien de sons ?",
      ['quatre', 'trois', 'deux'], 1,
      'luh-KEL, lah-KEL, lay-KEL. EN: three sounds for four spellings.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['forme', 'devant'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: "Le son ne te dira pas tout",
  itemIds: dicteeFor(3),
  audio: AUDIO,
  say: REFRAME,
  terms: ['forme'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de forme',
  errors: [
    { wrong: 'La pince avec lequel je tiens la pièce est trop grande.',
      right: 'La pince avec laquelle je tiens la pièce est trop grande.',
      why: "Normal : en anglais which ne change jamais. Ici le nom de devant est féminin. EN: which never changes in English; here the noun in front is feminine." },
    { wrong: 'Les ciseaux avec lesquelles tu coupes le tissu sont à Samuel.',
      right: 'Les ciseaux avec lesquels tu coupes le tissu sont à Samuel.',
      why: "Les deux formes se disent pareil, donc l'oreille ne corrige rien. Ciseaux est masculin. EN: the two plurals sound the same, so the ear cannot help." },
    { wrong: 'Les caisses dans lesquels nous rangeons les outils sont numérotées.',
      right: 'Les caisses dans lesquelles nous rangeons les outils sont numérotées.',
      why: "Le mot suivant est masculin, ce qui trompe. C'est caisses, devant, qui commande. EN: the following word is masculine, which misleads; caisses, in front, decides." },
    { wrong: "La machine pour lequel j'ai rempli le formulaire est réparée.",
      right: "La machine pour laquelle j'ai rempli le formulaire est réparée.",
      why: "En anglais, a machine est it, sans genre. En français, machine est féminin. EN: a machine is it in English; machine is feminine in French." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['forme', 'devant'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La forme', 'Avec quoi lequel s’accorde-t-il ?',
    ['avec le sujet de la relative', 'avec le verbe', 'avec le nom écrit devant'], 2,
    'Toujours le nom de devant. EN: always the noun in front.'),
  ctl('Le son', 'lesquels et lesquelles se distinguent-ils à l’oreille ?',
    ['non', 'oui'], 0,
    'Quatre formes, trois sons. EN: four forms, three sounds.'),
  ctl('La chose', 'Une seule paire de ciseaux prend-elle le singulier ?',
    ['oui, un seul objet', 'non, le mot est pluriel'], 1,
    "C'est le mot qui compte, pas l'objet. EN: the word counts, not the object."),
], ['forme', 'devant']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Quatre formes, trois sons',
    opener: {
      line: "Quatre mots écrits, et ton oreille n'en entend que trois : ici tu apprends à choisir avec les yeux. EN: Four written words and your ear hears only three: here you learn to choose with your eyes.",
      imageRef: 'lessons/lequel-ce-qui/act03.jpg',
    },
    sections: [],
    milestone: "Tu accordes lequel avec le nom écrit devant, même quand rien ne s'entend. EN: You can agree lequel with the noun in front, even when nothing is audible.",
    estScreens: 28, restPoints: ['a3-tableau'],
  },
  sections: [A3_ECOUTE, A3_CARTES, A3_TABLEAU, A3_CONSTRUIRE, A3_DICTEE, A3_ERREURS, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — À DEVIENT AUQUEL
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: "Le cours du mardi soir",
  frSub: 'Deux mots qui se collent',
  setting: "Nadia remplit le registre des cours de réparation. Samuel lui dicte ce qu'il a écrit sur sa fiche.",
  bubbles: [
    { from: 'user', fr: "Le cours à lequel je me suis inscrit commence en mars.", en: 'The course I signed up for starts in March.', warn: 'à lequel, en deux mots' },
    { from: 'coach', fr: "Dis-le à voix haute, sans t'arrêter entre les deux mots.", en: 'Say it out loud, without stopping between the two words.' },
    { from: 'user', fr: "Auquel. Ça se colle tout seul.", en: 'Auquel. It sticks together on its own.' },
    { from: 'coach', fr: "Exactement. Et au féminin, essaie la réunion.", en: 'Exactly. And in the feminine, try la réunion.' },
    { from: 'user', fr: 'La réunion à laquelle tu penses a lieu jeudi.', en: 'The meeting you are thinking of takes place on Thursday.' },
    { from: 'coach', fr: 'Là, rien ne se colle. Le féminin singulier résiste aux deux prépositions.', en: 'There, nothing sticks. The feminine singular resists both prepositions.' },
    { from: 'user', fr: "Donc trois formes soudées, et une qui reste en deux mots.", en: 'So three fused forms and one that stays two words.' },
  ],
  closing: { fr: "Une seule exception, et elle est toujours la même.", en: 'One exception only, and it is always the same one.' },
  audio: REC('rec-b1-13-cours'),
  say: REFRAME,
  terms: ['soudure'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-lequel',
  title: 'Quatre cartes sur la soudure de à',
  frSub: 'Trois se collent, une résiste',
  hint: 'Quatre cartes. Écoute si les deux mots se collent.',
  audio: REC('rec-b1-13-auquel'),
  say: REFRAME,
  terms: ['soudure', 'forme'],
  cards: [
    {
      head: 'Masculin singulier', label: 'auquel',
      fr: 'le cours auquel je me suis inscrit',
      sub: '[luh KOOR oh-KEL]',
      body: "à plus lequel donne auquel, en un seul mot, exactement comme à plus le donne au. EN: à plus lequel gives auquel, just as à plus le gives au.",
    },
    {
      head: 'Féminin singulier', label: 'à laquelle',
      fr: 'la réunion à laquelle tu penses',
      sub: '[lah ray-ü-NYOHⁿ ah lah-KEL]',
      body: "Rien ne se colle. C'est la seule forme des huit qui reste en deux mots. EN: nothing fuses here; this is the only one of the eight that stays two words.",
    },
    {
      head: 'Les deux pluriels', label: 'auxquels · auxquelles',
      fr: 'auxquels · auxquelles',
      sub: '[oh-KEL] · [oh-KEL]',
      body: "Les deux se collent, et les deux se disent pareil. Le nom de devant tranche. EN: both fuse, both sound the same, and the noun in front decides.",
    },
    {
      head: "D'où vient le à", label: 'du verbe',
      fr: "s'inscrire à · penser à · répondre à",
      sub: '[sehⁿs-kreer AH] · [pahⁿ-say AH]',
      body: "Ce n'est pas le nom qui apporte le à, c'est le verbe de la relative. Cherche-le avant de choisir. EN: the à comes from the clause's verb, not from the noun.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Colle, ou ne colle pas',
  groups: [
    grp('Ça se colle', [
      it(E(1454), "s'inscrire à, masculin"),
      it(E(1456), 'participer à, masculin pluriel'),
      it(E(1457), 'répondre à, féminin pluriel'),
      it(E(1463), 'penser à, masculin'),
    ], chk('Combien de mots écris-tu dans ces quatre phrases ?',
      ['un seul', 'deux'], 0,
      'auquel, auxquels, auxquelles : un mot chacun. EN: one word each.')),
    grp('Ça ne se colle pas', [
      it(E(1455), 'penser à, féminin singulier'),
      it(E(1464), 'manquer à, féminin singulier'),
      it(E(1460), 'la forme toute seule'),
      it(E(1459), 'la forme soudée, pour comparer'),
    ], chk('Quelle forme reste en deux mots ?',
      ['le féminin singulier', 'le masculin pluriel', 'le féminin pluriel'], 0,
      "à laquelle, et elle seule. EN: à laquelle, and only that one.")),
    ctl('La source', "« Le concours auquel Samuel s'est présenté » : d'où vient le à ?",
      ['du nom concours', 'du verbe se présenter à'], 1,
      "Le verbe apporte sa préposition. EN: the verb brings its own preposition."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['soudure', 'devant'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Cinq verbes qui apportent un à',
  frSub: 'Le verbe décide, pas le nom',
  examples: [
    ex(E(1454), "s'inscrire à : le à vient de là"),
    ex(E(1463), 'penser à : rien à voir avec le nom projet'),
    ex(E(1467), 'toucher à : un verbe, une préposition'),
    ex(E(1469), 'inviter à : féminin pluriel, donc auxquelles'),
    ex('fr.b1.musique.001', 'assister à : un concert auquel on assiste'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['soudure'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Six soudures ratées',
  frSub: 'Deux mots là où il en faut un',
  rule: {
    title: 'Trois se collent, une seule résiste',
    body: "à lequel, à lesquels et à lesquelles n'existent pas : ils donnent auquel, auxquels et auxquelles. Seul à laquelle garde ses deux mots. EN: three of the four fuse; only à laquelle stays in two words.",
  },
  cards: [
    { promptLabel: 'à lequel', promptSound: 'Le cours à lequel je me suis inscrit commence en mars.',
      fr: 'Le cours auquel je me suis inscrit commence en mars.',
      ipa: '/lə kuʁ o.kɛl ʒə mə sɥi.zɛ̃s.kʁi kɔ.mɑ̃s ɑ̃ maʁs/',
      tip: 'à plus le donne au, ici aussi. EN: the same fusion as à plus le.' },
    { promptLabel: 'aulaquelle', promptSound: 'La réunion aulaquelle tu penses a lieu jeudi.',
      fr: 'La réunion à laquelle tu penses a lieu jeudi.',
      ipa: '/la ʁe.y.njɔ̃ a la.kɛl ty pɑ̃s a ljø ʒø.di/',
      tip: "Le féminin singulier ne se colle jamais. EN: the feminine singular never fuses." },
    { promptLabel: 'à lesquels', promptSound: 'Les ateliers à lesquels nous participons sont gratuits.',
      fr: 'Les ateliers auxquels nous participons sont gratuits.',
      ipa: '/le.za.tə.lje o.kɛl nu paʁ.ti.si.pɔ̃ sɔ̃ ɡʁa.tɥi/',
      tip: 'à plus les donne aux, et le mot suit. EN: à plus les gives aux, and the word follows.' },
    { promptLabel: 'auxquels au féminin', promptSound: 'Les questions auxquels je réponds sont toujours les mêmes.',
      fr: 'Les questions auxquelles je réponds sont toujours les mêmes.',
      ipa: '/le kɛs.tjɔ̃ o.kɛl ʒə ʁe.pɔ̃ sɔ̃ tu.ʒuʁ le mɛm/',
      tip: "Les deux se disent pareil, donc l'oreille ne prévient pas. EN: both sound the same, so the ear gives no warning." },
    { promptLabel: 'la préposition oubliée', promptSound: 'Le projet lequel je pense demande deux personnes.',
      fr: 'Le projet auquel je pense demande deux personnes.',
      ipa: '/lə pʁɔ.ʒɛ o.kɛl ʒə pɑ̃s də.mɑ̃d dø pɛʁ.sɔn/',
      tip: 'penser à : sans le à, la phrase ne tient pas. EN: penser à needs its à.' },
    { promptLabel: 'la préposition au bout', promptSound: 'Le concours que Samuel s’est présenté à a lieu à Québec.',
      fr: "Le concours auquel Samuel s'est présenté a lieu à Québec.",
      ipa: '/lə kɔ̃.kuʁ o.kɛl sa.my.ɛl sɛ pʁe.zɑ̃.te a ljø a ke.bɛk/',
      tip: "Le à monte devant et se colle. EN: the à moves in front and fuses." },
  ],
  drill: [
    { promptSay: 'Le cours ... je me suis inscrit commence en mars.', opts: ['auquel', 'à lequel'], correct: 0 },
    { promptSay: 'La réunion ... tu penses a lieu jeudi.', opts: ['auquelle', 'à laquelle'], correct: 1 },
    { promptSay: 'Les ateliers ... nous participons sont gratuits.', opts: ['auxquels', 'à lesquels'], correct: 0 },
    { promptSay: 'Les questions ... je réponds sont les mêmes.', opts: ['auxquels', 'auxquelles'], correct: 1 },
    { promptSay: 'Les outils ... personne ne touche restent au fond.', opts: ['auxquels', 'à lesquels'], correct: 0 },
    { promptSay: 'La liste ... il manque un nom est sur la porte.', opts: ['auquelle', 'à laquelle'], correct: 1 },
    { promptSay: 'Les soirées ... Nadia nous invite finissent tard.', opts: ['auxquelles', 'auxquels'], correct: 0 },
    { promptSay: 'Le concours ... Samuel s’est présenté a lieu à Québec.', opts: ['à lequel', 'auquel'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Trois se collent, une résiste' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme séparée raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-13-piege-auquel'),
  say: REFRAME,
  terms: ['soudure', 'forme'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Un mot ou deux',
  frSub: 'Huit phrases, un seul joint audible',
  lines: [
    ln(E(1454)), ln(E(1455)), ln(E(1456)), ln(E(1457)),
    ln(E(1463)), ln(E(1464)), ln(E(1467)), ln(E(1469)),
  ],
  questions: [
    { q: 'Première phrase : quand le cours commence-t-il ?', opts: ['en mars', 'en mai'], correct: 0,
      why: '« commence en mars ». EN: in March.' },
    { q: 'Deuxième phrase : entends-tu un joint entre les deux mots ?', opts: ['non, un seul mot', 'oui, à laquelle'], correct: 1,
      why: 'Le féminin singulier reste en deux mots. EN: the feminine singular stays two words.' },
    { q: 'Troisième phrase : les ateliers sont-ils payants ?', opts: ['oui', 'non, gratuits', 'on ne sait pas'], correct: 1,
      why: '« sont gratuits ». EN: they are free.' },
    { q: 'Quatrième phrase : quel verbe apporte le à ?', opts: ['répondre à', 'être'], correct: 0,
      why: 'répondre à une question. EN: répondre à.' },
    { q: 'Sixième phrase : que manque-t-il à la liste ?', opts: ['une date', 'un nom'], correct: 1,
      why: '« il manque un nom ». EN: a name.' },
  ],
  audio: REC('rec-b1-13-auquel-ecoute'),
  say: REFRAME,
  terms: ['soudure'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La soudure', 'Combien des quatre formes de à se collent ?',
    ['toutes', 'une seule', 'trois'], 2,
    'auquel, auxquels, auxquelles. EN: three of the four.'),
  ctl("L'exception", 'Quelle forme reste en deux mots ?',
    ['à laquelle', 'à lesquelles'], 0,
    'Le féminin singulier, toujours. EN: the feminine singular, always.'),
  ctl('La source', "D'où vient le à de la relative ?",
    ['du nom de devant', 'du verbe de la relative'], 1,
    "s'inscrire à, penser à, répondre à. EN: from the verb inside the clause."),
], ['soudure', 'forme']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'à devient auquel',
    opener: {
      line: "Deux mots qui se touchent et n'en font plus qu'un : ici tu apprends la première des deux soudures, et la seule forme qui y résiste. EN: Two words that touch and become one: here you learn the first of the two fusions, and the one form that resists it.",
      imageRef: 'lessons/lequel-ce-qui/act04.jpg',
    },
    sections: [],
    milestone: "Tu écris auquel, auxquels et auxquelles en un mot, et à laquelle en deux. EN: You write auquel, auxquels and auxquelles as one word, and à laquelle as two.",
    estScreens: 26, restPoints: ['a4-exemples'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_EXEMPLES, A4_PIEGE, A4_ECOUTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — DE DEVIENT DUQUEL, ET DONT S'ARRÊTE
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Le tiroir et la clé',
  frSub: 'Le même tiroir, deux phrases',
  setting: "Samuel cherche une clé. Il décrit deux fois le même tiroir, et le petit mot change entre les deux phrases.",
  bubbles: [
    { from: 'user', fr: "C'est le tiroir dont je parle.", en: 'That is the drawer I am talking about.' },
    { from: 'coach', fr: 'Bien. Maintenant dis où tu as posé la clé.', en: 'Good. Now say where you put the key.' },
    { from: 'user', fr: "C'est le tiroir dont j'ai posé la clé à côté.", en: 'That is the drawer I put the key next to.', warn: 'à côté part à la fin, et dont ne suffit plus' },
    { from: 'coach', fr: "Compte les mots qui portent le de. Dans la première phrase, un seul.", en: 'Count the words carrying the de. In the first sentence, just one.' },
    { from: 'user', fr: 'Et dans la seconde, à côté de, donc trois mots.', en: 'And in the second one, à côté de, so three words.' },
    { from: 'coach', fr: 'Voilà la frontière. Un groupe entier, et dont laisse la place à duquel.', en: 'That is the border. A whole group, and dont gives way to duquel.' },
    { from: 'user', fr: "C'est le tiroir à côté duquel j'ai posé la clé.", en: 'That is the drawer I put the key beside.' },
  ],
  closing: { fr: "Un seul de, ou un groupe : c'est tout ce qui les sépare.", en: 'A lone de, or a whole group: that is all that separates them.' },
  audio: REC('rec-b1-13-tiroir'),
  say: REFRAME,
  terms: ['compose'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-compose',
  title: 'Quatre cartes sur de',
  frSub: 'Où dont travaille, et où il arrête',
  hint: 'Quatre cartes. Compte à chaque fois les mots qui portent le de.',
  audio: REC('rec-b1-13-duquel'),
  say: REFRAME,
  terms: ['compose', 'soudure'],
  cards: [
    {
      head: 'Un de tout seul', label: 'dont',
      fr: "C'est le tiroir dont je parle.",
      sub: '[seh luh tee-RWAHR dohⁿ zhuh PARL]',
      body: `Le verbe parler porte un de, et rien d'autre ne l'accompagne. dont fait tout le travail, et ${DONT_OU_REF} le traite pour lui-même. EN: a lone de from the verb takes dont.`,
    },
    {
      head: 'Un groupe qui finit par de', label: 'duquel',
      fr: "le tiroir à côté duquel j'ai posé la clé",
      sub: '[luh tee-RWAHR ah koh-tay dü-KEL]',
      body: "à côté de compte trois mots. Après un groupe, dont n'existe plus, et duquel prend la suite. EN: after a compound preposition, dont is impossible and duquel takes over.",
    },
    {
      head: 'La même soudure que à', label: 'duquel · desquels',
      fr: 'duquel · de laquelle · desquels',
      sub: '[dü-KEL] · [duh lah-KEL] · [day-KEL]',
      body: "de plus lequel donne duquel, comme de plus le donne du. Le féminin singulier résiste encore. EN: de plus lequel gives duquel, and the feminine singular resists again.",
    },
    {
      head: 'Les groupes à reconnaître', label: 'à côté de, au bout de',
      fr: 'près de · au bout de · en face de',
      sub: '[preh DUH] · [oh boo DUH]',
      body: "Tous finissent par de et tous forcent duquel. Apprends la liste une fois, elle ne bouge plus. EN: they all end in de and they all force duquel.",
    },
  ],
};

const A5_FRONTIERE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-frontiere',
  layer: 'core',
  sheetId: 'sheet-compose',
  title: 'Six fois de, deux résultats',
  frSub: "Compte les mots qui portent le de",
  cols: ["D'où vient le de", 'Le mot', 'Exemple'],
  rows: [
    {
      cells: ['parler de', 'dont', 'le tiroir dont je parle'],
      say: "C'est le tiroir dont je parle.",
      detail: { title: 'parler de', body: "Le verbe apporte un de tout seul, donc dont. EN: the verb brings a lone de, so dont.", say: "C'est le voisin dont je t'ai parlé hier." },
    },
    {
      cells: ['avoir besoin de', 'dont', "l'outil dont j'ai besoin"],
      say: "L'outil dont j'ai besoin est très fin.",
      detail: { title: 'avoir besoin de', body: "Même cas : un seul de, venu du verbe. EN: same case, a single de from the verb.", say: 'Elle a décidé de rejoindre un club dont les membres sont très motivés.' },
    },
    {
      cells: ['à côté de', 'duquel', 'le bâtiment à côté duquel'],
      say: 'Le bâtiment à côté duquel nous garons le camion est une école.',
      detail: { title: 'à côté de', body: "Trois mots portent le de, donc dont ne passe pas. EN: three words carry the de, so dont cannot go there.", say: "C'est le tiroir à côté duquel j'ai posé la clé." },
    },
    {
      cells: ['au bout de', 'de laquelle', 'la rue au bout de laquelle'],
      say: "La rue au bout de laquelle se trouve l'atelier est calme.",
      detail: { title: 'au bout de', body: "Le nom est féminin singulier, donc rien ne se soude. EN: the noun is feminine singular, so nothing fuses.", say: 'Le délai au bout duquel la garantie finit est de deux ans.' },
    },
    {
      cells: ['près de', 'duquel', 'le parc près duquel elle habite'],
      say: 'Le parc près duquel Nadia habite ferme à vingt heures.',
      detail: { title: 'près de', body: "près dont n'existe dans aucun cas. EN: près dont does not exist in any case.", say: 'Le mur le long duquel passe le fil est humide.' },
    },
    {
      cells: ['en face de', 'desquels', 'les immeubles en face desquels'],
      say: 'Les immeubles en face desquels nous travaillons sont neufs.',
      detail: { title: 'en face de', body: "Masculin pluriel, donc desquels, soudé comme les autres pluriels. EN: masculine plural gives desquels, fused like the other plurals.", say: 'Les rayons au-dessus desquels la lampe clignote sont vides.' },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['compose', 'soudure'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Un seul de, ou un groupe',
  groups: [
    grp('Des phrases simples à transformer', [
      it('fr.a1.prepositions-essentielles.126', 'à côté de la boîte'),
      it('fr.a1.maison.124', 'à côté du salon'),
      it('fr.sons.voyelles.389', 'au bout du couloir'),
      it('fr.a1.objets.122', 'à côté du cahier'),
    ], chk('Ces quatre phrases contiennent-elles un groupe qui finit par de ?',
      ['oui, à côté de et au bout de', 'non, un de tout seul'], 0,
      "Chacune porte un groupe entier. EN: each one carries a whole group.")),
    grp('Les mêmes, devenues des relatives', [
      it(E(1472), 'à côté de, masculin'),
      it(E(1473), 'au bout de, féminin'),
      it(E(1474), 'près de, masculin'),
      it(E(1475), 'en face de, masculin pluriel'),
    ], chk('Pourquoi duquel et non dont dans ces quatre phrases ?',
      ['parce que le de ferme un groupe', 'parce que le nom est une chose', "parce que le verbe est au présent"], 0,
      "dont ne peut pas venir après un groupe. EN: dont cannot follow a compound preposition.")),
    ctl('La frontière', "« C'est le tiroir ... je parle. » Quel mot ?",
      ['duquel', 'dont'], 1,
      "parler de : un seul de, donc dont. EN: parler de is a lone de, so dont."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['compose', 'devant'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: "Cinq phrases où dont travaille encore",
  frSub: 'Un seul de, venu du verbe',
  examples: [
    ex(E(1477), 'parler de, un seul mot'),
    ex('fr.b1.cinema.001', 'parler de, encore'),
    ex('fr.b1.voisinage.004', 'parler de, au passé'),
    ex('fr.b1.sports-et-loisirs.080', 'le de dit à qui appartiennent les membres'),
    ex(E(1478), 'le même tiroir, mais un groupe devant'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['compose'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs à la frontière',
  errors: [
    { wrong: 'Le parc près dont Nadia habite ferme à vingt heures.',
      right: 'Le parc près duquel Nadia habite ferme à vingt heures.',
      why: "Normal : dont marche partout ailleurs avec de. Après un groupe, il n'existe pas. EN: dont works everywhere else with de, but never after a group." },
    { wrong: "C'est le tiroir duquel je parle.",
      right: "C'est le tiroir dont je parle.",
      why: "Compréhensible après trois actes de duquel. Ici le de est tout seul, donc dont. EN: understandable after three acts of duquel, but a lone de takes dont." },
    { wrong: "La rue au bout duquel se trouve l'atelier est calme.",
      right: "La rue au bout de laquelle se trouve l'atelier est calme.",
      why: "bout est masculin, ce qui trompe. C'est rue, le nom de devant, qui commande. EN: bout is masculine and misleads; rue, the noun in front, decides." },
    { wrong: 'Les immeubles en face de lesquels nous travaillons sont neufs.',
      right: 'Les immeubles en face desquels nous travaillons sont neufs.',
      why: "de lesquels se dit presque comme desquels, donc l'oreille laisse passer. EN: the two sound almost identical, so the ear lets it through." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['compose', 'forme'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'dont ou duquel',
  frSub: 'Huit phrases, une seule frontière',
  lines: [
    ln(E(1472)), ln(E(1473)), ln(E(1474)), ln(E(1475)),
    ln(E(1477)), ln(E(1478)), ln(E(1486)), ln(E(1488)),
  ],
  questions: [
    { q: 'Première phrase : que gare-t-on à côté du bâtiment ?', opts: ['un camion', 'une voiture'], correct: 0,
      why: '« nous garons le camion ». EN: the van.' },
    { q: 'Troisième phrase : à quelle heure ferme le parc ?', opts: ['à dix-huit heures', 'à vingt heures'], correct: 1,
      why: '« ferme à vingt heures ». EN: at eight in the evening.' },
    { q: 'Cinquième et sixième phrases : parlent-elles du même tiroir ?', opts: ['oui, le même', 'non, deux tiroirs'], correct: 0,
      why: "Le même tiroir, et pourtant deux mots différents. EN: the same drawer, and still two different words." },
    { q: 'Pourquoi le mot change-t-il entre les deux ?', opts: ['le genre change', 'le groupe à côté de arrive', 'le temps change'], correct: 1,
      why: 'Un groupe entier porte le de. EN: a whole group carries the de.' },
    { q: 'Dernière phrase : où passe le fil ?', opts: ['sous le plancher', 'le long du mur'], correct: 1,
      why: '« le mur le long duquel passe le fil ». EN: along the wall.' },
  ],
  audio: REC('rec-b1-13-duquel-ecoute'),
  say: REFRAME,
  terms: ['compose'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le compte', "Comment sais-tu s'il faut dont ou duquel ?",
    ['tu comptes les mots qui portent le de', 'tu regardes si le nom est une personne'], 0,
    'Un seul mot, dont. Un groupe, duquel. EN: one word, dont; a group, duquel.'),
  ctl('La liste', 'près dont existe-t-il en français ?',
    ['oui, à l’oral', 'non, jamais'], 1,
    'Après un groupe, dont est impossible. EN: after a group, dont is impossible.'),
  ctl("L'accord", "« la rue au bout ... se trouve l'atelier » : quelle forme ?",
    ['au bout duquel', 'au bout desquelles', 'au bout de laquelle'], 2,
    'rue est féminin singulier, et bout ne compte pas. EN: rue is feminine singular; bout does not count.'),
], ['compose', 'soudure']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'de devient duquel',
    opener: {
      line: "Il existe une seule place où dont ne peut pas aller : ici tu apprends à la reconnaître en comptant les mots. EN: There is exactly one place dont cannot go: here you learn to spot it by counting words.",
      imageRef: 'lessons/lequel-ce-qui/act05.jpg',
    },
    sections: [],
    milestone: "Tu sais quand de prend dont et quand il prend duquel, sans hésiter. EN: You know when de takes dont and when it takes duquel, without hesitating.",
    estScreens: 30, restPoints: ['a5-construire'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_FRONTIERE, A5_CONSTRUIRE, A5_EXEMPLES, A5_ERREURS, A5_ECOUTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LA RAISON POUR LAQUELLE
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "La lettre de l'arrondissement",
  frSub: 'Quatre blocs à recopier',
  text: READING_LETTRE,
  glossary: [
    { word: "l'arrondissement", en: 'the borough', note: "La division administrative d'une ville, au Québec comme à Paris." },
    { word: 'traitée', en: 'dealt with, processed', note: "Un dossier traité est un dossier qu'on a regardé et fini." },
    { word: 'la sortie de secours', en: 'the emergency exit', note: 'La porte par laquelle on sort en cas de problème.' },
    { word: 'renouvelée', en: 'renewed', note: 'On la refait pour une nouvelle période.' },
  ],
  questions: [
    { q: 'Pourquoi la demande a-t-elle attendu ?', a: 'Il manquait le plan du local. La lettre le dit avec « la raison pour laquelle votre demande n’a pas été traitée plus tôt ».' },
    { q: 'Quel bloc dit sur quoi porte la remarque de l’inspecteur ?', a: '« Le point sur lequel il revient est la sortie de secours. »' },
    { q: 'Quelle forme suit à côté de dans la lettre, et pourquoi ?', a: '« à côté de laquelle » : la sortie est un nom féminin singulier, donc rien ne se soude.' },
    { q: 'Quatre groupes reviennent. Lesquels Nadia recopie-t-elle ?', a: 'la raison pour laquelle, les conditions dans lesquelles, le point sur lequel, grâce auquel.' },
  ],
  audio: REC('rec-b1-13-lettre'),
  say: REFRAME,
  terms: ['raison', 'place'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-lequel',
  title: 'Quatre blocs à apprendre entiers',
  frSub: 'Ne les découpe pas',
  hint: 'Quatre cartes. Lis chaque bloc entier, sans le couper.',
  audio: REC('rec-b1-13-blocs'),
  say: REFRAME,
  terms: ['raison'],
  cards: [
    {
      head: 'Le bloc le plus utile de tous', label: 'the reason why',
      fr: 'la raison pour laquelle',
      sub: '[lah reh-ZOHⁿ poor lah-KEL]',
      body: "Quatre mots qui ne se séparent jamais. En français, pourquoi ne vient jamais après raison. EN: four words that never come apart, and pourquoi never follows raison.",
    },
    {
      head: 'Un bloc au pluriel', label: 'the conditions in which',
      fr: 'les conditions dans lesquelles',
      sub: '[lay kohⁿ-dee-SYOHⁿ dahⁿ lay-KEL]',
      body: "conditions est féminin pluriel, donc lesquelles, et dans reste devant. EN: conditions is feminine plural, so lesquelles, with dans in front.",
    },
    {
      head: 'Le bloc du désaccord', label: 'the point on which',
      fr: 'le point sur lequel',
      sub: '[luh PWEHⁿ sür luh-KEL]',
      body: "Très utile pour dire où porte un débat : le point sur lequel nous ne sommes pas d'accord. EN: very useful for saying where a disagreement lies.",
    },
    {
      head: 'Le bloc du remerciement', label: 'thanks to which',
      fr: 'grâce auquel · grâce à laquelle',
      sub: '[grahss oh-KEL] · [grahss ah lah-KEL]',
      body: "grâce à finit par à, donc la soudure de l'acte 4 s'applique ici aussi. EN: grâce à ends in à, so act 4's fusion applies here too.",
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Pose le bon bloc',
  groups: [
    grp('Dire pourquoi', [
      it(E(1489), 'le bloc au singulier'),
      it(E(1490), 'le bloc au pluriel'),
      it(E(1491), 'le même bloc, en tête de phrase'),
      it(E(1502), 'le bloc tout seul'),
    ], chk('Peux-tu remplacer pour laquelle par pourquoi dans ces phrases ?',
      ['non, jamais', 'oui, c’est la même chose'], 0,
      "la raison pourquoi n'existe pas en français. EN: la raison pourquoi does not exist.")),
    grp('Dire sur quoi et grâce à quoi', [
      it(E(1495), 'le point sur lequel'),
      it(E(1496), 'la question sur laquelle'),
      it(E(1492), "grâce auquel : à plus lequel"),
      it(E(1493), 'grâce à laquelle : le féminin résiste'),
    ], chk('Pourquoi grâce auquel en un mot et grâce à laquelle en deux ?',
      ['parce que seul le féminin singulier résiste', 'parce que le premier est plus court', 'parce que grâce change de sens'], 0,
      "La soudure de l'acte 4 vaut partout. EN: act 4's fusion holds everywhere.")),
    ctl('Le bloc', "Tu veux dire the reason why. Par quoi commences-tu ?",
      ['la raison pourquoi', 'la raison pour laquelle'], 1,
      'Le bloc entier, toujours le même. EN: the whole block, always the same.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['raison', 'soudure'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  title: 'Cinq blocs dans une vraie phrase',
  frSub: 'Recopiés de la lettre',
  examples: [
    ex(E(1489), 'la raison pour laquelle, en tête'),
    ex(E(1498), 'les conditions dans lesquelles, au pluriel'),
    ex(E(1500), 'le cas dans lequel, pour une règle'),
    ex(E(1501), "le délai au bout duquel, avec un groupe en de"),
    ex('fr.a2.transports-quotidiens.162', "au bout de : le même groupe, déjà connu depuis l'A2"),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['raison', 'compose'],
};

const A6_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a6-flash',
  layer: 'core',
  title: 'Huit blocs, de mémoire',
  frSub: "Retourne la carte quand tu l'as dit",
  cards: [
    { front: 'the reason why', back: 'la raison pour laquelle', say: "La raison pour laquelle je viens ici, c'est le silence." },
    { front: 'the reasons why', back: 'les raisons pour lesquelles', say: 'Les raisons pour lesquelles il part sont personnelles.' },
    { front: 'the conditions in which', back: 'les conditions dans lesquelles', say: 'Les conditions dans lesquelles ils travaillent sont difficiles.' },
    { front: 'the point on which', back: 'le point sur lequel', say: "Le point sur lequel nous ne sommes pas d'accord est le prix." },
    { front: 'the question everyone comes back to', back: 'la question sur laquelle tout le monde revient', say: 'La question sur laquelle tout le monde revient est le bruit.' },
    { front: 'thanks to which, for a masculine noun', back: 'grâce auquel', say: "L'outil grâce auquel j'ai réparé la lampe coûte huit dollars." },
    { front: 'thanks to which, for a feminine noun', back: 'grâce à laquelle', say: 'La méthode grâce à laquelle Samuel travaille vite est simple.' },
    { front: 'the case in which', back: 'le cas dans lequel', say: 'Le cas dans lequel tu peux revenir est écrit sur la fiche.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['raison'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre blocs cassés',
  errors: [
    { wrong: 'La raison pourquoi je viens ici est simple.',
      right: 'La raison pour laquelle je viens ici est simple.',
      why: "Normal : the reason why se traduit mot à mot, et le résultat est faux. EN: the word-for-word translation of the reason why is wrong." },
    { wrong: 'Les conditions dans lesquels ils travaillent sont difficiles.',
      right: 'Les conditions dans lesquelles ils travaillent sont difficiles.',
      why: "Les deux pluriels se disent pareil. conditions est féminin. EN: the two plurals sound the same; conditions is feminine." },
    { wrong: "L'outil grâce à lequel j'ai réparé la lampe coûte huit dollars.",
      right: "L'outil grâce auquel j'ai réparé la lampe coûte huit dollars.",
      why: "grâce à cache un à, donc la soudure s'applique. EN: grâce à hides an à, so the fusion applies." },
    { wrong: 'La question sur lequel tout le monde revient est le bruit.',
      right: 'La question sur laquelle tout le monde revient est le bruit.',
      why: "question ressemble à question en anglais, qui n'a pas de genre. Ici il est féminin. EN: question has no gender in English; in French it is feminine." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['raison', 'forme'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le bloc', 'Comment dit-on the reason why ?',
    ['la raison pourquoi', 'la raison pour laquelle', 'la raison que'], 1,
    'Quatre mots, toujours les mêmes. EN: four words, always the same.'),
  ctl('La soudure', 'grâce à lequel ou grâce auquel ?',
    ['grâce auquel', 'grâce à lequel'], 0,
    "Le à de grâce à se soude comme les autres. EN: the à inside grâce à fuses like any other."),
  ctl("L'accord", 'Dans les conditions dans ..., quelle forme ?',
    ['lesquels', 'lesquelles'], 1,
    'conditions est féminin pluriel. EN: conditions is feminine plural.'),
], ['raison', 'soudure']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'La raison pour laquelle',
    opener: {
      line: "Quatre mots qui ne se séparent jamais, et que tu écriras dans presque toutes tes lettres : ici tu apprends les blocs. EN: Four words that never come apart, and that you will write in almost every letter: here you learn the blocks.",
      imageRef: 'lessons/lequel-ce-qui/act06.jpg',
    },
    sections: [],
    milestone: "Tu poses la raison pour laquelle et grâce auquel sans les découper ni les traduire mot à mot. EN: You can use la raison pour laquelle and grâce auquel without cutting them up or translating them word for word.",
    estScreens: 26, restPoints: ['a6-construire'],
  },
  sections: [A6_LECTURE, A6_CARTES, A6_CONSTRUIRE, A6_EXEMPLES, A6_FLASH, A6_ERREURS, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — RIEN DEVANT : CE QUI, CE QUE
 *
 *  b1.11's act 10 previewed these two in six missions and said on the card
 *  that this lesson owns them. The thread is picked up here by NAME: the card
 *  deck quotes b1.11's reframe verbatim (B111_REFRAME, imported), the story
 *  re-meets the two forms in one exchange, and everything after that is new.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Le fil noir',
  frSub: "Une chose qu'aucun nom ne désigne",
  setting: "Nadia veut savoir ce qui te préoccupe dans cette lampe. Tu essaies de nommer la chose, et il n'y a pas de nom à donner.",
  bubbles: [
    { from: 'coach', fr: 'Dites-moi le détail qui vous inquiète le plus.', en: 'Tell me the detail that worries you most.' },
    { from: 'user', fr: "Le fil qui chauffe, c'est lui.", en: 'The wire that gets hot, that is the one.', warn: 'ici un nom est écrit devant : le fil' },
    { from: 'coach', fr: "Et si vous ne nommez rien du tout. Juste l'impression.", en: 'And if you name nothing at all. Just the feeling.' },
    { from: 'user', fr: "Qui m'inquiète, c'est le fil.", en: 'What worries me is the wire.', warn: 'il manque le mot qui tient la place du nom' },
    { from: 'coach', fr: 'Il manque un mot devant. Mettez ce, et le reste ne bouge pas.', en: 'A word is missing in front. Put ce, and the rest does not move.' },
    { from: 'user', fr: "Ce qui m'inquiète, c'est le fil.", en: 'What worries me is the wire.' },
    { from: 'coach', fr: 'Voilà. Et pour choisir entre qui et que, vous regardez derrière, comme avant.', en: 'There. And to choose between qui and que, you look behind, as before.' },
  ],
  closing: { fr: "Un mot de plus devant, et rien d'autre ne change.", en: 'One extra word in front, and nothing else changes.' },
  audio: REC('rec-b1-13-fil'),
  say: REFRAME,
  terms: ['neutre', 'devant'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ce',
  title: 'Quatre cartes sur ce',
  frSub: 'Le mot qui remplace le nom absent',
  hint: 'Quatre cartes. Cherche le nom de devant, et constate son absence.',
  audio: REC('rec-b1-13-ce'),
  say: REFRAME,
  terms: ['neutre', 'devant'],
  cards: [
    {
      head: 'Un nom est écrit devant', label: 'ce que tu sais déjà',
      fr: 'le fil qui chauffe',
      sub: '[luh feel kee SHOHF]',
      body: "Le nom est là, donc qui suffit. C'est tout le travail de la leçon 11. EN: the noun is there, so qui on its own is enough.",
    },
    {
      head: "Aucun nom devant", label: 'ce qui',
      fr: "Ce qui m'énerve, c'est le bruit.",
      sub: '[suh kee may-NEHRV]',
      body: "Rien à reprendre, alors ce prend la place du nom manquant et qui le suit. EN: with nothing to pick up, ce stands in for the missing noun.",
    },
    {
      head: 'Le test ne bouge pas', label: Cap(QUI_QUE_REF),
      fr: "Ce que je veux, c'est un atelier plus grand.",
      sub: '[suh kuh zhuh VUH]',
      body: `« ${B111_REFRAME} » je est derrière, donc ce que. EN: ${B111_REFRAME_EN}`,
    },
    {
      head: "Un seul mot en anglais", label: 'what',
      fr: 'ce qui · ce que',
      sub: '[suh KEE] · [suh KUH]',
      body: "what ne dit pas si la chose fait le verbe ou le subit. Le français le dit toujours. EN: what never says whether the thing acts or is acted on; French always does.",
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Regarde derrière, une fois ce posé',
  groups: [
    grp('Rien derrière le trou', [
      it(E(1506), 'énerve suit tout de suite'),
      it(E(1509), 'est arrivé suit tout de suite'),
      it(E(1511), 'ne marche pas suit tout de suite'),
      it(E(1517), 'va se passer suit tout de suite'),
    ], chk('Pourquoi ce qui dans ces quatre phrases ?',
      ['parce que rien ne suit le trou', 'parce que ce est masculin'], 0,
      `${B111_REFRAME} EN: ${B111_REFRAME_EN}`)),
    grp('Un sujet derrière le trou', [
      it(E(1507), 'je suit le trou'),
      it(E(1512), 'tu suit le trou'),
      it(E(1514), 'Nadia suit le trou'),
      it(E(1522), 'je suit le trou'),
    ], chk('Quel mot arrive derrière le trou ici ?',
      ['un verbe', 'un sujet'], 1,
      'je, tu, Nadia : un sujet, donc ce que. EN: a subject, so ce que.')),
    ctl('Le devant', "« ... m'énerve, c'est le bruit. » Que manque-t-il au début ?",
      ['rien', 'un verbe', 'le mot ce'], 2,
      "Aucun nom ne précède, donc il faut ce. EN: no noun precedes, so ce is required."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['neutre', 'devant'],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  title: 'Cinq phrases sans nom devant',
  frSub: 'Trois verbes qui appellent ce',
  examples: [
    ex(E(1508), 'comprendre : un sujet derrière, donc ce que'),
    ex(E(1517), 'savoir : rien derrière, donc ce qui'),
    ex('fr.a2.hebergement.119', 'voir : un sujet derrière'),
    ex('fr.b1.heure-et-date.053', "l'avenir est le sujet, derrière le trou"),
    ex('fr.b1.routines.062', "se demander : elle est le sujet, et que s'élide"),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['neutre'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'ce qui ou ce que',
  frSub: 'Huit phrases, un seul geste',
  lines: [
    ln(E(1506)), ln(E(1507)), ln(E(1509)), ln(E(1511)),
    ln(E(1513)), ln(E(1517)), ln(E(1519)), ln(E(1522)),
  ],
  questions: [
    { q: "Première phrase : qu'est-ce qui énerve la personne ?", opts: ['le bruit', 'le prix'], correct: 0,
      why: "« c'est le bruit ». EN: the noise." },
    { q: 'Deuxième phrase : que veut-elle ?', opts: ['un outil neuf', 'un atelier plus grand'], correct: 1,
      why: "« c'est un atelier plus grand ». EN: a bigger workshop." },
    { q: 'Troisième phrase : le mot après ce est-il qui ou que ?', opts: ['qui', 'que'], correct: 0,
      why: '« ce qui est arrivé » : rien ne suit le trou. EN: nothing follows the gap.' },
    { q: 'Cinquième phrase : qu’est-ce qui coûte cher ?', opts: ['les pièces', 'les outils', 'le local'], correct: 0,
      why: '« ce sont les pièces ». EN: the parts.' },
    { q: 'Dernière phrase : la personne a-t-elle trouvé ce qu’elle cherchait ?', opts: ['non', 'oui'], correct: 1,
      why: "« C'est exactement ce que je cherchais. » EN: yes, exactly." },
  ],
  audio: REC('rec-b1-13-ce-ecoute'),
  say: REFRAME,
  terms: ['neutre'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Six phrases sans leur ce',
  frSub: "Le mot que l'anglais n'a pas",
  rule: {
    title: 'Aucun nom devant, donc ce',
    body: "Une relative ne commence pas une phrase toute seule. Sans nom à reprendre, ce prend sa place, puis tu choisis qui ou que comme avant. EN: a clause cannot open a sentence alone; ce stands in for the missing noun.",
  },
  cards: [
    { promptLabel: 'le ce oublié', promptSound: "Qui m'énerve, c'est le bruit.",
      fr: "Ce qui m'énerve, c'est le bruit.",
      ipa: '/sə ki me.nɛʁv sɛ lə bʁɥi/',
      tip: "En anglais what ouvre la phrase tout seul. En français il faut deux mots. EN: English opens with what alone; French needs two words." },
    { promptLabel: 'le ce oublié', promptSound: "Que je veux, c'est un atelier plus grand.",
      fr: "Ce que je veux, c'est un atelier plus grand.",
      ipa: '/sə kə ʒə vø sɛ.tɛ̃.na.tə.lje ply ɡʁɑ̃/',
      tip: 'Le ce arrive en premier, le reste ne change pas. EN: the ce comes first and nothing else changes.' },
    { promptLabel: 'qui pour que', promptSound: 'Je ne comprends pas ce qui tu veux.',
      fr: 'Je ne comprends pas ce que tu veux.',
      ipa: '/ʒə nə kɔ̃.pʁɑ̃ pɑ sə kə ty vø/',
      tip: 'tu est derrière le trou, donc ce que. EN: tu follows the gap, so ce que.' },
    { promptLabel: 'que pour qui', promptSound: 'Explique-moi ce que ne marche pas.',
      fr: 'Explique-moi ce qui ne marche pas.',
      ipa: '/ɛks.plik mwa sə ki nə maʁʃ pɑ/',
      tip: 'Rien ne suit le trou, donc ce qui. EN: nothing follows the gap, so ce qui.' },
    { promptLabel: 'le ce oublié', promptSound: 'Personne ne sait qui va se passer.',
      fr: 'Personne ne sait ce qui va se passer.',
      ipa: '/pɛʁ.sɔn nə sɛ sə ki va sə pa.se/',
      tip: "Sans ce, la phrase parle d'une personne. EN: without ce, the sentence is about a person." },
    { promptLabel: 'le ce oublié', promptSound: 'Dis-moi que tu préfères réparer.',
      fr: 'Dis-moi ce que tu préfères réparer.',
      ipa: '/di mwa sə kə ty pʁe.fɛʁ ʁe.pa.ʁe/',
      tip: 'Sans ce, la phrase devient une comparaison. EN: without ce, the sentence turns into a comparison.' },
  ],
  drill: [
    { promptSay: "... m'énerve, c'est le bruit.", opts: ['Ce qui', 'Qui'], correct: 0 },
    { promptSay: "... je veux, c'est un atelier plus grand.", opts: ['Que', 'Ce que'], correct: 1 },
    { promptSay: 'Je ne comprends pas ... tu veux.', opts: ['ce que', 'ce qui'], correct: 0 },
    { promptSay: 'Explique-moi ... ne marche pas.', opts: ['ce que', 'ce qui'], correct: 1 },
    { promptSay: 'Personne ne sait ... va se passer.', opts: ['ce qui', 'qui'], correct: 0 },
    { promptSay: 'Dis-moi ... te plaît dans ce travail.', opts: ['ce que', 'ce qui'], correct: 1 },
    { promptSay: "... Nadia répare le plus, ce sont les lampes.", opts: ['Ce que', 'Ce qui'], correct: 0 },
    { promptSay: "C'est exactement ... je cherchais.", opts: ['ce qui', 'ce que'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Aucun nom devant, donc ce' },
    { label: 'Six cartes', kind: 'cards', title: "Ce que la phrase sans ce raconte" },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-13-piege-ce'),
  say: REFRAME,
  terms: ['neutre', 'devant'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le devant', 'Quand écris-tu ce devant qui ou que ?',
    ['toujours', "quand aucun nom ne précède", "seulement à l'écrit"], 1,
    "Ce qui m'énerve : il n'y a aucun nom à reprendre. EN: there is no noun to pick up."),
  ctl('Le test', 'Le test de la leçon 11 change-t-il avec ce ?',
    ['Non', 'Oui'], 0,
    `${B111_REFRAME} EN: ${B111_REFRAME_EN}`),
  ctl("L'anglais", 'Combien de formes françaises pour what ?',
    ['au moins deux', 'une seule'], 0,
    'ce qui et ce que, et une troisième arrive. EN: ce qui and ce que, with a third on the way.'),
], ['neutre', 'devant']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Rien devant : ce qui, ce que',
    opener: {
      line: "Parfois la chose dont tu parles n'a aucun nom dans ta phrase : ici tu apprends le petit mot qui prend sa place. EN: Sometimes the thing you are talking about has no name in your sentence: here you learn the small word that stands in for it.",
      imageRef: 'lessons/lequel-ce-qui/act07.jpg',
    },
    sections: [],
    milestone: "Tu écris ce qui et ce que sans y penser, et le test que tu connais fait le reste. EN: You write ce qui and ce que without thinking, and the test you already know does the rest.",
    estScreens: 26, restPoints: ['a7-exemples'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_CONSTRUIRE, A7_EXEMPLES, A7_ECOUTE, A7_PIEGE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — CE DONT
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The de is invisible in translation, so the act opens on the ear:
 *  eight lines, hidden, and the learner has to notice which verbs carry it. */
const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Une troisième forme après ce',
  frSub: "Huit phrases, un mot que l'anglais n'a pas",
  lines: [
    ln(E(1523)), ln(E(1524)), ln(E(1525)), ln(E(1527)),
    ln(E(1528)), ln(E(1529)), ln(E(1537)), ln(E(1539)),
  ],
  questions: [
    { q: 'Quel mot revient après ce dans ces huit phrases ?', opts: ['que', 'qui', 'dont'], correct: 2,
      why: "ce dont, huit fois. EN: ce dont, eight times." },
    { q: 'Deuxième phrase : la chose est-elle déjà réparée ?', opts: ['non', 'oui'], correct: 1,
      why: '« est déjà réparé ». EN: yes, already.' },
    { q: 'Cinquième phrase : de quoi Samuel est-il fier ?', opts: ['de sa boîte à outils', 'de son atelier'], correct: 0,
      why: "« c'est sa boîte à outils ». EN: his tool box." },
    { q: 'Sixième phrase : de quoi personne ne s’occupe ?', opts: ['du ménage', 'des lampes', 'des outils'], correct: 0,
      why: "« c'est le ménage ». EN: the cleaning." },
    { q: "Qu'ont en commun les verbes de ces phrases ?", opts: ['ils sont tous au passé', 'ils portent tous un de'], correct: 1,
      why: 'avoir besoin de, parler de, être fier de. EN: they all carry a de.' },
  ],
  audio: REC('rec-b1-13-dont-ecoute'),
  say: REFRAME,
  terms: ['besoin'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ce',
  title: 'Quatre cartes sur ce dont',
  frSub: "Le de vient du verbe, pas du sens",
  hint: 'Quatre cartes. Dis chaque verbe tout seul et écoute sa préposition.',
  audio: REC('rec-b1-13-dont'),
  say: REFRAME,
  terms: ['besoin', 'neutre'],
  cards: [
    {
      head: 'Le verbe porte un de', label: 'avoir besoin de',
      fr: "C'est exactement ce dont j'ai besoin.",
      sub: '[seh-teg-zak-tuh-MAHⁿ suh dohⁿ zhay buh-ZWEHⁿ]',
      body: "On dit avoir besoin DE quelque chose. Le de reste, et il tire dont derrière ce. EN: avoir besoin de keeps its de, and that de pulls dont in.",
    },
    {
      head: 'Le même mot, un autre verbe', label: 'parler de',
      fr: 'Ce dont tu parles est déjà réparé.',
      sub: '[suh dohⁿ tü PARL]',
      body: "parler DE quelque chose. Même cause, même forme. EN: parler de, so the same form again.",
    },
    {
      head: "Ce que l'anglais cache", label: 'what',
      fr: 'what I need · what I am talking about',
      sub: '[suh dohⁿ zhay buh-ZWEHⁿ]',
      body: "L'anglais dit what dans les deux cas et ne montre jamais le de. C'est pour ça qu'on l'oublie. EN: English says what in both cases and never shows the de.",
    },
    {
      head: 'Les trois ensemble', label: 'ce qui · ce que · ce dont',
      fr: 'ce qui · ce que · ce dont',
      sub: '[suh KEE] · [suh KUH] · [suh DOHⁿ]',
      body: "Rien derrière : ce qui. Un sujet : ce que. Un verbe qui demande de : ce dont. EN: nothing behind, a subject, or a verb that wants de.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Cherche le de du verbe',
  groups: [
    grp('Des verbes qui portent un de', [
      it(E(1530), 'le verbe tout seul'),
      it(E(1531), 'le verbe tout seul'),
      it(E(1532), 'le verbe tout seul'),
      it(E(1533), 'le verbe tout seul'),
    ], chk("Qu'ont en commun ces quatre verbes ?",
      ['ils finissent tous par de', 'ils sont tous irréguliers'], 0,
      'Le de fait partie du verbe. EN: the de is part of the verb itself.')),
    grp('Les mêmes verbes, dans une phrase', [
      it(E(1523), 'avoir besoin de'),
      it(E(1524), 'parler de'),
      it(E(1528), 'être fier de'),
      it('fr.b1.courses.001', "avoir besoin de, avec tout devant"),
    ], chk('Pourquoi ce dont et non ce que ici ?',
      ['parce que la chose est un objet', 'parce que le verbe réclame un de', 'parce que la phrase est au passé'], 1,
      'Le de du verbe décide. EN: the verb’s de decides.')),
    ctl('Le test', 'Tu hésites entre ce que et ce dont. Que fais-tu ?',
      ['tu regardes le temps du verbe', 'tu dis le verbe tout seul'], 1,
      "avoir besoin DE : le de s'entend tout de suite. EN: say the verb alone and listen for its de."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['besoin', 'neutre'],
};

const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a8-dictee',
  layer: 'core',
  title: 'Écris les phrases en ce dont',
  frSub: 'Cinq phrases, un seul mot à ne pas manquer',
  itemIds: dicteeFor(8),
  audio: AUDIO,
  say: REFRAME,
  terms: ['besoin'],
};

const A8_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a8-flash',
  layer: 'core',
  title: 'Huit verbes qui appellent ce dont',
  frSub: 'Dis le verbe, puis la phrase',
  cards: [
    { front: 'to need', back: 'avoir besoin de', say: "C'est exactement ce dont j'ai besoin." },
    { front: 'to talk about', back: 'parler de', say: 'Ce dont tu parles est déjà réparé.' },
    { front: 'to feel like, to fancy', back: 'avoir envie de', say: "Voici ce dont j'ai envie pour l'atelier." },
    { front: 'to be proud of', back: 'être fier de', say: "Ce dont Samuel est fier, c'est sa boîte à outils." },
    { front: 'to take care of', back: "s'occuper de", say: "Ce dont personne ne s'occupe, c'est le ménage." },
    { front: 'to remember', back: 'se souvenir de', say: 'Je ne me souviens plus de ce dont nous avons parlé.' },
    { front: 'to be short of', back: 'manquer de', say: "Ce dont nous manquons ici, c'est de place." },
    { front: 'to be afraid of', back: 'avoir peur de', say: "Ce dont j'ai peur, c'est de casser la pièce." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['besoin'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre de oubliés',
  errors: [
    { wrong: "C'est exactement ce que j'ai besoin.",
      right: "C'est exactement ce dont j'ai besoin.",
      why: "Normal : what I need ne montre aucun de. Le verbe français en porte un. EN: what I need shows no de; the French verb carries one." },
    { wrong: 'Ce que tu parles est déjà réparé.',
      right: 'Ce dont tu parles est déjà réparé.',
      why: "En anglais on parle about, pas of, donc le de ne se devine pas. EN: English talks about, not of, so the de is not guessable." },
    { wrong: "Ce que Samuel est fier, c'est sa boîte à outils.",
      right: "Ce dont Samuel est fier, c'est sa boîte à outils.",
      why: "Avec un adjectif, le de se voit encore moins. être fier DE. EN: with an adjective the de is even less visible." },
    { wrong: "Ce qui j'ai peur, c'est de casser la pièce.",
      right: "Ce dont j'ai peur, c'est de casser la pièce.",
      why: "Deux erreurs à la fois : le de manque, et rien ne suit le trou. EN: two errors at once, the missing de and the empty slot." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['besoin', 'neutre'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le verbe', "D'où vient le de de ce dont ?",
    ['du verbe ou de l’adjectif', 'du nom'], 0,
    'avoir besoin de, parler de, être fier de. EN: from the verb or the adjective.'),
  ctl('Le compte', 'Combien de formes après ce, en tout ?',
    ['deux', 'quatre', 'trois'], 2,
    'ce qui, ce que, ce dont. EN: three forms.'),
  ctl("L'anglais", 'what montre-t-il le de ?',
    ['oui, parfois', 'non, jamais'], 1,
    "C'est pour ça que ce dont s'oublie. EN: that is why ce dont gets forgotten."),
], ['besoin', 'neutre']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Ce dont',
    opener: {
      line: "Certains verbes traînent un de derrière eux, et l'anglais ne le montre jamais : ici tu apprends à l'entendre. EN: Some verbs drag a de behind them and English never shows it: here you learn to hear it.",
      imageRef: 'lessons/lequel-ce-qui/act08.jpg',
    },
    sections: [],
    milestone: "Tu entends le de du verbe avant d'écrire, et tu poses ce dont au lieu de ce que. EN: You hear the verb's de before writing, and you put ce dont where you used to put ce que.",
    estScreens: 26, restPoints: ['a8-dictee'],
  },
  sections: [A8_ECOUTE, A8_CARTES, A8_CONSTRUIRE, A8_DICTEE, A8_FLASH, A8_ERREURS, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — TOUT CE QUI, TOUT CE QUE
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'La caisse grise',
  frSub: 'Deux mots que personne ne dit en anglais',
  setting: "Samuel vide l'établi avant la fermeture. Il écrit un mot pour le groupe et il lui manque deux syllabes à chaque phrase.",
  bubbles: [
    { from: 'user', fr: "Tout qui est sur l'établi part demain.", en: 'Everything on the bench goes tomorrow.', warn: 'il manque le ce entre tout et qui' },
    { from: 'coach', fr: 'Relis. Entre tout et qui, il manque un mot.', en: 'Read it again. Between tout and qui, a word is missing.' },
    { from: 'user', fr: "Pourtant tout désigne déjà les choses.", en: 'But tout already points at the things.' },
    { from: 'coach', fr: "tout n'est pas un nom. Il ne reprend rien, donc le ce reste.", en: 'tout is not a noun. It picks nothing up, so the ce stays.' },
    { from: 'user', fr: "Tout ce qui est sur l'établi part demain.", en: 'Everything on the bench goes tomorrow.' },
    { from: 'coach', fr: "Et si un sujet arrive derrière, tu changes le dernier mot seulement.", en: 'And if a subject comes behind, you change only the last word.' },
    { from: 'user', fr: "J'ai noté tout ce que tu m'as dit.", en: 'I wrote down everything you told me.' },
  ],
  closing: { fr: 'tout ne remplace jamais le ce. Les deux voyagent ensemble.', en: 'tout never replaces the ce. The two travel together.' },
  audio: REC('rec-b1-13-caisse'),
  say: REFRAME,
  terms: ['tout'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ce',
  title: 'Quatre cartes sur tout ce',
  frSub: "Le mot que l'anglais n'écrit pas",
  hint: 'Quatre cartes. Compte les mots avant le verbe.',
  audio: REC('rec-b1-13-tout'),
  say: REFRAME,
  terms: ['tout', 'neutre'],
  cards: [
    {
      head: 'Rien derrière le trou', label: 'tout ce qui',
      fr: "Tout ce qui est sur l'établi part demain.",
      sub: '[too suh kee eh sür lay-tah-BLEE]',
      body: "Trois mots avant le verbe, et l'anglais n'en dit qu'un. Le test ne change pas. EN: three words before the verb where English says one.",
    },
    {
      head: 'Un sujet derrière le trou', label: 'tout ce que',
      fr: "J'ai noté tout ce que tu m'as dit.",
      sub: '[zhay noh-TAY too suh kuh tü mah DEE]',
      body: 'tu arrive derrière, donc ce que. Seul le dernier mot bouge. EN: tu comes behind, so ce que; only the last word changes.',
    },
    {
      head: 'Un verbe qui demande de', label: 'tout ce dont',
      fr: 'Tout ce dont tu as besoin est dans le tiroir.',
      sub: '[too suh dohⁿ tü ah buh-ZWEHⁿ]',
      body: "avoir besoin de : la troisième forme marche aussi après tout. EN: the third form works after tout as well.",
    },
    {
      head: "Pourquoi tout ne suffit pas", label: "tout n'est pas un nom",
      fr: 'tout ce qui · tout qui',
      sub: '[too suh KEE] · [too KEE]',
      body: "tout dit une quantité, il ne nomme rien. Il ne peut donc pas être repris par qui. EN: tout states a quantity and names nothing, so qui cannot pick it up.",
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Garde le ce',
  groups: [
    grp('Les trois formes après tout', [
      it(E(1554), 'rien derrière'),
      it(E(1555), 'un sujet derrière'),
      it(E(1556), 'un verbe qui demande de'),
      it(E(1543), 'la règle, en une ligne'),
    ], chk('Que change tout devant ces trois formes ?',
      ['rien du tout', 'il supprime le ce'], 0,
      "tout s'ajoute et ne remplace rien. EN: tout is added and replaces nothing.")),
    grp('Des phrases entières', [
      it(E(1540), 'tout ce qui, rien derrière'),
      it(E(1545), 'tout ce que, tu derrière'),
      it(E(1542), 'tout ce dont, avoir besoin de'),
      it(E(1544), 'un proverbe, avec la même forme'),
    ], chk("Dans « Tout ce qui brille n'est pas or », que suit le trou ?",
      ['le verbe brille', 'un sujet', 'un nom'], 0,
      'Rien entre le trou et le verbe, donc ce qui. EN: nothing between the gap and the verb.')),
    ctl("L'anglais", 'all I need : combien de mots manquent en français ?',
      ['aucun', 'deux', 'un'], 1,
      'tout ce dont : ce et dont. EN: two, ce and dont.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tout', 'besoin'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Cinq phrases avec tout ce',
  frSub: 'Le même geste, à chaque fois',
  examples: [
    ex(E(1546), 'rien derrière : tout ce qui'),
    ex(E(1551), "que s'élide devant il, et le ce reste"),
    ex(E(1552), 'un état, et toujours ce qui'),
    ex(E(1553), 'les voisins sont le sujet, donc tout ce que'),
    ex('fr.b1.maison.014', 'ce que après que : deux petits mots qui se suivent'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tout'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Six fois tout sans son ce',
  frSub: 'La traduction mot à mot, en direct',
  rule: {
    title: 'tout ne remplace pas le ce',
    body: "tout donne une quantité et ne nomme aucune chose. Il n'y a donc toujours aucun nom devant le trou, et le ce reste obligatoire. EN: tout gives a quantity and names nothing, so the ce is still required.",
  },
  cards: [
    { promptLabel: 'tout qui', promptSound: "Tout qui est sur l'établi part demain.",
      fr: "Tout ce qui est sur l'établi part demain.",
      ipa: '/tu sə ki ɛ syʁ le.ta.bli paʁ də.mɛ̃/',
      tip: 'everything that donne tout ce qui, en trois mots. EN: everything that gives three words in French.' },
    { promptLabel: 'tout que', promptSound: "J'ai noté tout que tu m'as dit.",
      fr: "J'ai noté tout ce que tu m'as dit.",
      ipa: '/ʒe nɔ.te tu sə kə ty ma di/',
      tip: 'Le sujet tu arrive derrière, donc ce que. EN: tu comes behind, so ce que.' },
    { promptLabel: 'tout dont', promptSound: 'Tout dont tu as besoin est dans le tiroir du bas.',
      fr: 'Tout ce dont tu as besoin est dans le tiroir du bas.',
      ipa: '/tu sə dɔ̃ ty a bə.zwɛ̃ ɛ dɑ̃ lə ti.ʁwaʁ dy bɑ/',
      tip: 'Le ce manque même quand le reste est juste. EN: the ce is missing even when the rest is right.' },
    { promptLabel: 'ce que pour ce qui', promptSound: 'Tout ce que reste ici sera donné.',
      fr: 'Tout ce qui reste ici sera donné.',
      ipa: '/tu sə ki ʁɛst i.si sə.ʁa dɔ.ne/',
      tip: 'Rien ne suit le trou, donc ce qui. EN: nothing follows the gap, so ce qui.' },
    { promptLabel: 'tout qui', promptSound: 'Elle range tout qui traîne sur la table.',
      fr: 'Elle range tout ce qui traîne sur la table.',
      ipa: '/ɛl ʁɑ̃ʒ tu sə ki tʁɛn syʁ la tabl/',
      tip: 'Le verbe traîne suit directement, donc ce qui. EN: the verb follows directly, so ce qui.' },
    { promptLabel: 'ce qui pour ce que', promptSound: 'Nous gardons tout ce qui les voisins nous apportent.',
      fr: 'Nous gardons tout ce que les voisins nous apportent.',
      ipa: '/nu ɡaʁ.dɔ̃ tu sə kə le vwa.zɛ̃ nu.za.pɔʁt/',
      tip: 'les voisins est un sujet, donc ce que. EN: les voisins is a subject, so ce que.' },
  ],
  drill: [
    { promptSay: "... est sur l'établi part demain.", opts: ['Tout qui', 'Tout ce qui'], correct: 1 },
    { promptSay: "J'ai noté ... tu m'as dit.", opts: ['tout ce que', 'tout que'], correct: 0 },
    { promptSay: '... tu as besoin est dans le tiroir.', opts: ['Tout dont', 'Tout ce dont'], correct: 1 },
    { promptSay: '... reste ici sera donné.', opts: ['Tout ce qui', 'Tout ce que'], correct: 0 },
    { promptSay: 'Elle range ... traîne sur la table.', opts: ['tout ce que', 'tout ce qui'], correct: 1 },
    { promptSay: 'Nous gardons ... les voisins nous apportent.', opts: ['tout ce que', 'tout ce qui'], correct: 0 },
    { promptSay: '... est cassé va dans la caisse grise.', opts: ['Tout qui', 'Tout ce qui'], correct: 1 },
    { promptSay: "Il emporte ... il a réparé.", opts: ["tout ce qu'", 'tout ce qui'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'tout ne remplace pas le ce' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la traduction mot à mot donne' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-13-piege-tout'),
  say: REFRAME,
  terms: ['tout', 'neutre'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Combien de mots avant le verbe',
  frSub: 'Huit phrases, trois syllabes à entendre',
  lines: [
    ln(E(1540)), ln(E(1541)), ln(E(1542)), ln(E(1544)),
    ln(E(1545)), ln(E(1550)), ln(E(1552)), ln(E(1553)),
  ],
  questions: [
    { q: "Première phrase : quand part ce qui est sur l'établi ?", opts: ['samedi', 'demain'], correct: 1,
      why: '« part demain ». EN: tomorrow.' },
    { q: 'Troisième phrase : où se trouve ce dont tu as besoin ?', opts: ['dans le tiroir du bas', 'sur la table'], correct: 0,
      why: '« dans le tiroir du bas ». EN: in the bottom drawer.' },
    { q: 'Quatrième phrase : entends-tu tout ce qui ou tout qui ?', opts: ['tout qui', 'tout ce qui'], correct: 1,
      why: 'Le ce est là, en une syllabe rapide. EN: the ce is there, as one quick syllable.' },
    { q: 'Cinquième phrase : que fait la personne ?', opts: ['elle range', 'elle jette', 'elle note tout'], correct: 2,
      why: "« J'ai noté tout ce que tu m'as dit. » EN: she wrote it all down." },
    { q: 'Dernière phrase : que gardent-ils ?', opts: ['ce que les voisins apportent', 'ce qui est cassé'], correct: 0,
      why: '« tout ce que les voisins nous apportent ». EN: what the neighbours bring.' },
  ],
  audio: REC('rec-b1-13-tout-ecoute'),
  say: REFRAME,
  terms: ['tout'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le ce', 'Après tout, le ce disparaît-il ?',
    ['oui, tout le remplace', 'non, il reste'], 1,
    "tout n'est pas un nom. EN: tout is not a noun."),
  ctl('Les trois', 'Combien de formes existent après tout ce ?',
    ['trois', 'une', 'deux'], 0,
    'tout ce qui, tout ce que, tout ce dont. EN: three.'),
  ctl('Le choix', "« ... reste ici sera donné. » Quelle forme ?",
    ['Tout ce qui', 'Tout ce que'], 0,
    'Rien ne suit le trou. EN: nothing follows the gap.'),
], ['tout', 'neutre']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Tout ce qui, tout ce que',
    opener: {
      line: "L'anglais dit all I need en trois mots, et le français en demande cinq : ici tu apprends les deux qui manquent. EN: English says all I need in three words and French wants five: here you learn the two that are missing.",
      imageRef: 'lessons/lequel-ce-qui/act09.jpg',
    },
    sections: [],
    milestone: "Tu n'écris plus jamais tout qui ni tout que : le ce reste, et seule la fin bouge. EN: You never write tout qui or tout que again: the ce stays and only the ending moves.",
    estScreens: 26, restPoints: ['a9-exemples'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_CONSTRUIRE, A9_EXEMPLES, A9_PIEGE, A9_ECOUTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — CE QUI REPREND TOUTE UNE PHRASE
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message du jeudi soir',
  frSub: 'Cinq virgules, cinq reprises',
  text: READING_MESSAGE,
  glossary: [
    { word: 'la rentrée', en: 'the start of the new season or school year', note: 'Le moment où tout recommence, après les vacances.' },
    { word: 'embêtant', en: 'annoying, a nuisance', note: 'Pas grave, mais gênant.' },
    { word: 'les habitués', en: 'the regulars', note: 'Les gens qui viennent chaque semaine.' },
    { word: "perde l'habitude", en: 'get out of the habit', note: "Arrêter de faire une chose qu'on faisait régulièrement." },
  ],
  questions: [
    { q: 'Que reprend « ce dont nous devons parler » dans la première phrase ?', a: "Le départ de Nadia en août, c'est-à-dire toute la phrase de devant, et non un nom." },
    { q: 'Pourquoi « ce que je trouve embêtant » et non « ce qui » ?', a: 'je suit le trou : un sujet est déjà là, donc ce que.' },
    { q: 'Quelle phrase du message contient une relative accrochée à un nom ?', a: "« la machine pour laquelle nous avons le plus de demandes » : le nom la machine est écrit devant." },
    { q: 'Pourquoi « ce dont les habitués seront contents » porte-t-il dont ?', a: "être content DE quelque chose. Le de vient de l'adjectif." },
  ],
  audio: REC('rec-b1-13-message'),
  say: REFRAME,
  terms: ['phrase', 'besoin'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ce',
  title: 'Quatre cartes sur la virgule',
  frSub: 'Un nom, ou tout ce que tu viens de dire',
  hint: 'Quatre cartes. Regarde ce qui est écrit avant la virgule.',
  audio: REC('rec-b1-13-virgule'),
  say: REFRAME,
  terms: ['phrase', 'devant'],
  cards: [
    {
      head: 'Un nom juste devant', label: 'qui',
      fr: 'le fil noir, qui chauffe',
      sub: '[luh feel NWAHR · kee SHOHF]',
      body: "Le nom le fil est écrit devant la virgule, donc qui le reprend tout seul. EN: the noun is written in front of the comma, so qui picks it up alone.",
    },
    {
      head: 'Une phrase entière devant', label: 'ce qui',
      fr: "La lampe s'est éteinte, ce qui a surpris tout le monde.",
      sub: "[lah LAHⁿP seh-tay-TEHⁿT · suh kee ah sür-PREE]",
      body: "Ce n'est pas la lampe qui a surpris, c'est le fait qu'elle s'éteigne. Une phrase n'est pas un nom. EN: it is the event that surprised people, and an event is not a noun.",
    },
    {
      head: 'Les trois formes reviennent', label: 'ce qui · ce que · ce dont',
      fr: 'ce qui · ce que · ce dont',
      sub: '[suh KEE] · [suh KUH] · [suh DOHⁿ]',
      body: "Le test derrière le trou ne change pas non plus ici. Seul le devant a changé. EN: the test behind the gap is unchanged; only what sits in front has changed.",
    },
    {
      head: "Un seul mot en anglais", label: 'which',
      fr: 'which · qui · ce qui',
      sub: '[kee] · [suh KEE]',
      body: "which sert pour un nom et pour une phrase entière. Le français sépare les deux cas. EN: which covers both cases; French keeps them apart.",
    },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Que reprend le petit mot',
  groups: [
    grp('Toute la phrase de devant', [
      it(E(1557), 'ce qui reprend le fait que la lampe se soit éteinte'),
      it(E(1561), 'ce qui reprend la peinture du local'),
      it('fr.b1.maison.009', 'ce qui reprend la hausse du loyer'),
      it('fr.b2.decouvertes.004', 'ce qui reprend la découverte du radium'),
    ], chk('Que reprend ce qui dans ces quatre phrases ?',
      ['le dernier nom écrit', 'toute la phrase de devant'], 1,
      "Aucun nom ne convient : c'est le fait entier. EN: no noun fits; it is the whole event.")),
    grp('Les trois formes, après la virgule', [
      it(E(1558), 'personne suit le trou, donc ce que'),
      it(E(1559), 'parler de, donc ce dont'),
      it(E(1567), 'être content de, donc ce dont'),
      it('fr.b2.tourisme.003', 'rien derrière, donc ce qui'),
    ], chk('Comment choisis-tu entre ce qui, ce que et ce dont ici ?',
      ['par ce qui suit le trou', 'par la longueur de la phrase'], 0,
      'Exactement comme dans les actes 7 et 8. EN: exactly as in acts 7 and 8.')),
    ctl('Le contraste', "« le fil noir, qui chauffe » : que reprend qui ?",
      ['toute la phrase', 'le nom le fil'], 1,
      "Un nom est écrit devant la virgule. EN: a noun is written in front of the comma."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['phrase', 'devant'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre reprises ratées',
  errors: [
    { wrong: "La lampe s'est éteinte, qui a surpris tout le monde.",
      right: "La lampe s'est éteinte, ce qui a surpris tout le monde.",
      why: "Normal : en anglais which fait les deux. Ici qui dirait que la lampe a surpris. EN: which covers both in English; here qui would say the lamp surprised people." },
    { wrong: "Nadia a fermé plus tôt, ce qui personne n'avait prévu.",
      right: "Nadia a fermé plus tôt, ce que personne n'avait prévu.",
      why: "personne est le sujet du verbe, donc la place est prise. EN: personne is the subject, so the slot is taken." },
    { wrong: 'Il manque deux pièces, ce que nous parlerons lundi.',
      right: 'Il manque deux pièces, ce dont nous parlerons lundi.',
      why: "parler DE quelque chose. Le de ne se voit pas en anglais. EN: parler de, and the de is invisible in English." },
    { wrong: 'Le prix a baissé, ce qui les habitués sont contents.',
      right: 'Le prix a baissé, ce dont les habitués sont contents.',
      why: "être content DE : c'est l'adjectif qui apporte le de. EN: être content de, and the adjective brings the de." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['phrase', 'besoin'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Après la virgule',
  frSub: 'Huit phrases, huit reprises',
  lines: [
    ln(E(1557)), ln(E(1558)), ln(E(1559)), ln(E(1561)),
    ln(E(1562)), ln(E(1566)), ln(E(1568)), ln(E(1571)),
  ],
  questions: [
    { q: "Première phrase : qu'est-ce qui a surpris tout le monde ?", opts: ["le fait qu'elle s'éteigne", 'la lampe'], correct: 0,
      why: "ce qui reprend tout ce qui précède. EN: ce qui picks up the whole preceding clause." },
    { q: 'Troisième phrase : quand parlera-t-on des pièces manquantes ?', opts: ['samedi', 'lundi'], correct: 1,
      why: '« nous parlerons lundi ». EN: on Monday.' },
    { q: 'Cinquième phrase : Samuel arrive-t-il souvent en retard ?', opts: ['non, rarement', 'oui, souvent'], correct: 0,
      why: '« ce qui arrive rarement ». EN: which rarely happens.' },
    { q: 'Sixième phrase : le local ouvre le dimanche, et alors ?', opts: ['cela dérange', 'cela arrange', 'cela coûte cher'], correct: 1,
      why: '« ce qui nous arrange ». EN: which suits us.' },
    { q: 'Dernière phrase : combien de temps a duré la réunion ?', opts: ['deux heures', 'trois heures'], correct: 1,
      why: '« a duré trois heures ». EN: three hours.' },
  ],
  audio: REC('rec-b1-13-virgule-ecoute'),
  say: REFRAME,
  terms: ['phrase'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-devant',
  title: "Quatre choses avant d'écrire",
  frSub: 'Le geste, en quatre lignes',
  points: [
    "Regarde toujours le mot écrit devant le trou avant de choisir. EN: always look at the word written in front of the gap first.",
    "Un nom, plus une préposition : lequel, accordé à ce nom. EN: a noun plus a preposition gives lequel, agreed with that noun.",
    "à et de se soudent, sauf au féminin singulier. EN: à and de fuse, except in the feminine singular.",
    "Rien devant, ou une phrase entière : ce qui, ce que, ce dont. EN: nothing in front, or a whole sentence, gives the ce forms.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['phrase', 'devant', 'soudure'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La reprise', 'Après une virgule, que reprend ce qui ?',
    ['toute la phrase de devant', 'le dernier nom'], 0,
    "Une phrase entière, et une phrase n'est pas un nom. EN: a whole sentence, and a sentence is not a noun."),
  ctl('Le contraste', "« le fil noir, qui chauffe » : pourquoi pas ce qui ?",
    ['la phrase est courte', 'un nom est écrit devant'], 1,
    'le fil est là, donc qui suffit. EN: le fil is there, so qui is enough.'),
  ctl('Le choix', 'Comment choisis-tu entre ce qui, ce que et ce dont ici ?',
    ['par le sens du verbe principal', 'par la ponctuation', 'par ce qui suit le trou'], 2,
    'Le même test que partout ailleurs. EN: the same test as everywhere else.'),
], ['phrase', 'devant']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Ce qui reprend toute une phrase',
    opener: {
      line: "Parfois ce que tu reprends n'est pas un mot mais tout ce que tu viens de dire : ici tu apprends la virgule qui le permet. EN: Sometimes what you pick up is not a word but everything you have just said: here you learn the comma that allows it.",
      imageRef: 'lessons/lequel-ce-qui/act10.jpg',
    },
    sections: [],
    milestone: "Tu reprends une phrase entière avec ce qui, ce que ou ce dont, et tu gardes qui pour les noms. EN: You can pick up a whole sentence with ce qui, ce que or ce dont, and keep qui for nouns.",
    estScreens: 26, restPoints: ['a10-construire'],
  },
  sections: [A10_LECTURE, A10_CARTES, A10_CONSTRUIRE, A10_ERREURS, A10_ECOUTE, A10_FOCUS, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — ÉCRIRE LA FICHE
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le modèle que tu vas imiter',
  frSub: 'Huit relatives dans dix lignes',
  text: READING_FICHE,
  glossary: [
    { word: 'de rechange', en: 'spare, replacement', note: 'Une pièce de rechange remplace celle qui est cassée.' },
    { word: 'abîmé', en: 'damaged', note: "Un objet abîmé n'est pas cassé, mais il a souffert." },
    { word: 'chauffe', en: 'gets hot', note: "Un fil qui chauffe est un fil dont la température monte." },
    { word: 'me joindre', en: 'reach me, get hold of me', note: 'Me téléphoner ou me contacter.' },
  ],
  questions: [
    { q: 'Quelle phrase dit avec quel outil la personne a travaillé ?', a: "« Le tournevis avec lequel j'ai ouvert le boîtier était trop petit. » La préposition avec est montée devant lequel." },
    { q: 'Quelle phrase contient un groupe qui finit par de, et quelle forme suit ?', a: "« La boîte à côté de laquelle j'ai posé la lampe » : boîte est féminin singulier, donc de laquelle en trois mots." },
    { q: 'Deux phrases commencent sans aucun nom devant. Lesquelles ?', a: "« Ce qui m'inquiète, c'est le fil noir » et « Ce dont j'ai besoin, c'est d'une pièce de rechange »." },
    { q: 'Pourquoi ce dont et non ce que dans la seconde ?', a: 'avoir besoin DE : le de vient du verbe, donc ce dont.' },
  ],
  audio: REC('rec-b1-13-fiche'),
  say: REFRAME,
  terms: ['devant', 'besoin'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: "Cinq étapes avant d'écrire",
  frSub: 'Le plan de la fiche',
  steps: [
    "Écris tes faits en phrases courtes, sans te relire. EN: write your facts as short sentences, without rereading.",
    "Pour chaque fait, cherche le nom auquel il appartient. EN: for each fact, find the noun it belongs to.",
    "Colle les deux, et regarde ce qui est écrit devant le trou. EN: join the two, and look at what is written in front of the gap.",
    "Un nom : accorde lequel, et fais monter la préposition. EN: a noun means agreeing lequel and moving the preposition to the front.",
    "Aucun nom : écris ce, puis regarde derrière pour choisir. EN: no noun means writing ce, then looking behind to choose.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['devant', 'place'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Quatre fiches qui doivent tenir',
  cases: [
    { situation: 'Tu dis avec quoi tu as travaillé', fr: "Le tournevis avec lequel j'ai ouvert le boîtier était trop petit.", en: 'The screwdriver I opened the case with was too small.' },
    { situation: 'Tu situes une pièce perdue', fr: "La boîte à côté de laquelle j'ai posé la lampe est grise.", en: 'The box I put the lamp next to is grey.' },
    { situation: 'Tu dis ce qui te préoccupe', fr: "Ce qui m'inquiète, c'est le fil noir.", en: 'What worries me is the black wire.' },
    { situation: 'Tu demandes ce qui te manque', fr: "Ce dont j'ai besoin, c'est d'une pièce de rechange.", en: 'What I need is a spare part.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['devant', 'besoin'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'De retour au comptoir',
  frSub: 'Six tours, à voix haute',
  setting: "Tu reviens le samedi suivant, cette fois pour un grille-pain. Nadia reprend une fiche vierge et te pose ses questions habituelles.",
  turns: [
    {
      ai: 'Bonjour. Racontez-moi la panne.', en: 'Good morning. Tell me about the fault.',
      user: "Le grille-pain que j'apporte ne chauffe plus d'un côté.",
      userEn: 'The toaster I am bringing in has stopped heating on one side. (que, because je follows it.)',
      alts: [
        { fr: "L'appareil dont je vous parle ne chauffe plus.", en: 'The appliance I am telling you about has stopped heating. (parler de, so dont.)' },
        { fr: "Ce qui ne marche plus, c'est le côté droit.", en: 'What has stopped working is the right-hand side. (No noun in front, so ce qui.)' },
      ],
    },
    {
      ai: 'Avez-vous déjà ouvert le boîtier.', en: 'Have you already opened the case.',
      user: "Oui, avec un couteau, parce que le tournevis avec lequel je travaille est trop gros.",
      userEn: 'Yes, with a knife, because the screwdriver I work with is too big. (avec moves in front of lequel.)',
      alts: [
        { fr: "Oui, avec la pince avec laquelle je tiens les fils.", en: 'Yes, with the pliers I hold the wires with. (Feminine noun, so laquelle.)' },
        { fr: "Non, je n'ai pas les outils sans lesquels on ne peut rien faire.", en: 'No, I do not have the tools you cannot do anything without. (Masculine plural, so lesquels.)' },
      ],
    },
    {
      ai: 'Où avez-vous posé les vis.', en: 'Where did you put the screws.',
      user: "Dans la boîte à côté de laquelle il y avait la lampe.",
      userEn: 'In the box that had the lamp next to it. (à côté de is a group, so de laquelle.)',
      alts: [
        { fr: "Sur l'établi au bout duquel vous rangez les chiffons.", en: 'On the bench at the end of which you keep the cloths. (au bout de, masculine, so duquel.)' },
        { fr: "Dans le tiroir dont je vous ai parlé la dernière fois.", en: 'In the drawer I told you about last time. (parler de on its own, so dont.)' },
      ],
    },
    {
      ai: 'Et de quoi avez-vous besoin exactement.', en: 'And what exactly do you need.',
      user: "Ce dont j'ai besoin, c'est d'une résistance neuve.",
      userEn: 'What I need is a new heating element. (avoir besoin de, so ce dont.)',
      alts: [
        { fr: "Ce que je voudrais, c'est apprendre à la changer moi-même.", en: 'What I would like is to learn to change it myself. (je follows, so ce que.)' },
        { fr: "Tout ce dont j'ai besoin tient dans une main.", en: 'Everything I need fits in one hand. (tout keeps its ce.)' },
      ],
    },
    {
      ai: 'Pourquoi revenez-vous ici plutôt que dans un magasin.', en: 'Why come back here rather than to a shop.',
      user: "La raison pour laquelle je reviens, c'est que vous expliquez.",
      userEn: 'The reason why I come back is that you explain things. (The block never comes apart.)',
      alts: [
        { fr: "Pour la méthode grâce à laquelle vous trouvez les pannes.", en: 'For the method thanks to which you find the faults. (grâce à plus laquelle.)' },
        { fr: "Le point sur lequel vous êtes les meilleurs, c'est la patience.", en: 'The point on which you are the best is patience.' },
      ],
    },
    {
      ai: 'Très bien. Je vous appelle quand la pièce arrive.', en: 'Very good. I will call you when the part comes in.',
      user: "Voici le numéro auquel vous pouvez me joindre le matin.",
      userEn: 'Here is the number you can reach me on in the morning. (joindre à, so auquel.)',
      alts: [
        { fr: "Merci. Vous avez réparé la lampe en dix minutes, ce qui m'avait étonné.", en: 'Thank you. You repaired the lamp in ten minutes, which had amazed me. (A whole sentence, so ce qui.)' },
        { fr: "Tout ce que vous m'avez appris la dernière fois m'a servi.", en: 'Everything you taught me last time has been useful. (tout ce que, with vous as the subject.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['devant', 'place', 'besoin'],
};

const A11_TASK: TaskSection = {
  type: 'task',
  id: 'a11-mission',
  title: 'Écris ta fiche de réparation',
  frSub: 'Mission écrite',
  brief: "Un objet à toi ne marche plus : une lampe, un grille-pain, un vélo, un ordinateur, une machine à coudre. Tu l'apportes à un atelier de quartier et tu remplis la fiche que le réparateur lira avant de t'appeler. Il ne verra pas l'objet avant de te lire.",
  briefEn: 'Something of yours has stopped working. Write the card the repairer will read before calling you back; they will not see the object first.',
  produce: "Écris une fiche de 110 à 150 mots avec au moins six relatives : au moins deux avec lequel après une préposition, une avec à ou de soudés, une avec un groupe qui finit par de, une avec ce qui ou ce que, et une avec ce dont.",
  responseSpec: { kind: 'text', minWords: 110, maxWords: 150 },
  rubric: {
    criteria: [
      {
        key: 'choix', label: 'Le bon mot à chaque fois', maxPoints: 4,
        descriptors: [
          "4 : Chaque relative porte le bon mot, et le choix suit ce qui est écrit devant le trou, jamais la traduction anglaise.",
          "3 : Une seule relative se trompe, et le reste est juste.",
          "2 : Plusieurs fois, un nom est écrit devant et tu écris quand même ce, ou l'inverse.",
          "1 : Le choix semble fait au hasard, ou la même forme revient partout.",
        ],
      },
      {
        key: 'forme', label: "L'accord et la soudure", maxPoints: 3,
        descriptors: [
          "3 : lequel s'accorde chaque fois avec le nom de devant, et à et de se soudent partout sauf au féminin singulier.",
          "2 : Un accord manque, ou une soudure est écrite en deux mots.",
          "1 : lequel ne bouge jamais, ou les soudures sont faites au hasard.",
        ],
      },
      {
        key: 'place', label: 'La place de la préposition', maxPoints: 3,
        descriptors: [
          "3 : Aucune phrase ne se termine par une préposition, et chaque préposition est écrite devant le petit mot.",
          "2 : Une phrase laisse avec, sur ou dans au bout.",
          "1 : Plusieurs phrases gardent l'ordre anglais, et le lecteur doit deviner à quoi la fin se rattache.",
        ],
      },
      {
        key: 'tache', label: 'La mission complète', maxPoints: 2,
        descriptors: [
          "2 : La fiche fait 110 à 150 mots, elle porte les six relatives demandées, et un réparateur peut reconnaître ton objet et ton problème sans le voir.",
          "1 : Il manque une des six relatives, ou la longueur est hors des bornes, ou la fiche conviendrait à n'importe quel objet du même genre.",
        ],
      },
    ],
  },
  scaffold: [
    "L'objet que j'apporte est",
    "Le tournevis avec lequel",
    "La boîte à côté de laquelle",
    "La raison pour laquelle",
    "Ce qui m'inquiète,",
    "Ce dont j'ai besoin,",
    'Tout ce qui reste à faire',
    'Voici le numéro auquel',
  ],
  modelAnswer: "FICHE DE RÉPARATION : grille-pain\n\nL'objet que j'apporte est un grille-pain qui ne chauffe plus d'un seul côté. Le tournevis avec lequel j'ai ouvert le boîtier était trop gros, et j'ai abîmé deux vis. La boîte à côté de laquelle j'ai posé l'appareil est grise ; une vis est peut-être tombée dedans.\n\nCe qui m'inquiète, c'est le fil rouge, qui noircit près de la résistance. Ce dont j'ai besoin, c'est d'une résistance neuve et d'un tournevis plus fin. Tout ce qui reste à faire tient en un quart d'heure.\n\nLa raison pour laquelle je reviens samedi, c'est la pièce. Voici le numéro auquel vous pouvez me joindre entre neuf heures et midi. Merci à la personne grâce à laquelle il remarchera.",
  modelAnswerEn: "REPAIR CARD: toaster. The thing I am bringing in is a toaster that has stopped heating on one side. The screwdriver I opened the case with was too big and I damaged two screws. The box I put the appliance next to is grey; a screw may have fallen into it. What worries me is the red wire, which is going black near the element. What I need is a new element and a thinner screwdriver. Everything left to do takes a quarter of an hour. The reason why I am coming back on Saturday is the part. Here is the number you can reach me on between nine and noon. Thank you to whoever gets it working again.",
  watchFor: [
    { pattern: "The preposition stranded at the end on the English pattern: « le tournevis que j'ai ouvert le boîtier avec », « la table que je l'ai posé sur ».",
      criterion: 'place',
      feedback: "La préposition ne reste pas au bout. Fais-la monter : « le tournevis avec lequel j'ai ouvert le boîtier ».",
      ref: 'a2-piege' },
    { pattern: 'que kept after a preposition: « avec que », « sur que », « dans que ».',
      criterion: 'choix',
      feedback: "que ne supporte aucune préposition devant lui. Après avec, sur ou dans, écris lequel.",
      ref: 'a2-cartes' },
    { pattern: 'lequel left in the masculine singular for a feminine or plural antecedent: « la pince avec lequel », « les outils sans lequel ».',
      criterion: 'forme',
      feedback: "Regarde le nom écrit devant : la pince donne laquelle, les outils donnent lesquels.",
      ref: 'a3-erreurs' },
    { pattern: "The two plurals confused, since they sound identical: « les caisses dans lesquels », « les cartons dans lesquelles ».",
      criterion: 'forme',
      feedback: "L'oreille ne t'aidera pas ici. caisses est féminin, cartons est masculin.",
      ref: 'a3-tableau' },
    { pattern: 'The contraction of à written in two words, or applied to the feminine singular: « à lequel », « auquelle », « aulaquelle ».',
      criterion: 'forme',
      feedback: "auquel, auxquels et auxquelles se soudent. Seul à laquelle reste en deux mots.",
      ref: 'a4-piege' },
    { pattern: 'dont used after a compound preposition: « près dont », « à côté dont », « au bout dont ».',
      criterion: 'choix',
      feedback: "Après un groupe qui finit par de, dont n'existe pas. Écris duquel, de laquelle, desquels ou desquelles.",
      ref: 'a5-erreurs' },
    { pattern: "duquel used where a lone de from the verb would have taken dont: « le tiroir duquel je parle ».",
      criterion: 'choix',
      feedback: "parler de porte un de tout seul, donc dont. Compte les mots qui portent le de.",
      ref: 'a5-frontiere' },
    { pattern: 'The block broken apart or translated word for word: « la raison pourquoi », « la raison que », « grâce à lequel ».',
      criterion: 'choix',
      feedback: "Le bloc ne se découpe pas : la raison pour laquelle, grâce auquel.",
      ref: 'a6-erreurs' },
    { pattern: "The ce dropped where no noun precedes: « Qui m'inquiète, c'est le fil », « Que je voudrais, c'est... ».",
      criterion: 'choix',
      feedback: "Aucun nom n'est écrit devant, donc ce prend sa place : « Ce qui m'inquiète ».",
      ref: 'a7-piege' },
    { pattern: "ce que written after a verb that carries de: « ce que j'ai besoin », « ce que tu parles ».",
      criterion: 'choix',
      feedback: "Dis le verbe tout seul : avoir besoin DE. Le de te donne ce dont.",
      ref: 'a8-erreurs' },
    { pattern: 'The ce dropped after tout: « tout qui reste à faire », « tout que tu as dit ».',
      criterion: 'choix',
      feedback: "tout n'est pas un nom et ne reprend rien. Écris tout ce qui, tout ce que, tout ce dont.",
      ref: 'a9-piege' },
    { pattern: 'qui or que after a comma to pick up the whole preceding sentence: « il a réparé la lampe en dix minutes, qui m’a étonné ».',
      criterion: 'choix',
      feedback: "Devant la virgule il y a une phrase, pas un nom. Écris ce qui, ce que ou ce dont.",
      ref: 'a10-erreurs' },
  ],
  graderNotes: [
    'Word count EXCLUDES the heading line (FICHE DE RÉPARATION : ...) and any signature. Count the body only, with 10% tolerance (99-165) before criterion « tache » loses its point.',
    'DO NOT SCORE the prepositional relatives for PEOPLE (avec qui, à qui, chez qui) or où. They belong to the parallel lesson on dont and où and have not been taught here. A learner who uses one correctly is not rewarded and one who uses it wrongly is not penalised.',
    'dont ON ITS OWN is treated as known, not as new: score it only in the one contrast this lesson owns, which is dont against duquel after a compound preposition. Do not mark dont for anything else.',
    'The subjunctive belongs to the next lesson. Do not mark a mood error in any subordinate clause.',
    'lequel for a person (la personne à laquelle je pense) is correct French and is accepted, but the lesson taught the thing case, so it is never required.',
    'Judge the relative by what is WRITTEN in front of the gap in the learner text, not by what the learner probably meant. A sentence can be right for a different reason than intended and still scores.',
    'An agreement that is correct but inaudible (lesquels against lesquelles) counts exactly as much as an audible one. The criterion is written accuracy.',
    'Writer gender is unknown: judge adjective agreement for internal consistency only.',
    'Accept any broken object and any francophone city. Accept regional vocabulary (grille-pain, toaster, char, magasin de quartier, ressort, résistance).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
};

/** Say the whole lesson out loud. Every authored row except the rule cards
 *  carries `voiceflash`; NOT ONE imported row does, so none may be added
 *  here (corpus §E). */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes phrases longues à voix haute',
  frSub: 'Sans couper avant le petit mot',
  skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO,
  say: REFRAME,
  terms: ['place', 'devant'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le devant', v: 'un nom, ou rien du tout', say: "Ce qui m'inquiète, c'est le fil.",
      detail: { title: 'Le devant', body: `${REFRAME} Tu regardes ce qui est écrit, pas ce que tu voulais dire. EN: ${REFRAME_EN}`, say: "Le tournevis avec lequel j'ai ouvert le boîtier est trop petit." } },
    { k: 'la place', v: 'la préposition monte devant', say: "Le stylo avec lequel j'écris vient de ma grand-mère.",
      detail: { title: 'La place', body: "Aucune relative française ne finit par avec, sur ou dans. EN: no French clause ends on avec, sur or dans.", say: 'La table sur laquelle tu poses la lampe est solide.' } },
    { k: 'les formes', v: 'quatre écrites, trois entendues', say: 'Les pinces avec lesquelles on serre les fils sont rouges.',
      detail: { title: 'Les formes', body: "lequel, laquelle, lesquels, lesquelles, accordés au nom de devant. EN: agreed with the noun in front.", say: 'La pince avec laquelle je tiens la pièce est trop grande.' } },
    { k: 'la soudure', v: 'à et de se collent, sauf au féminin', say: 'Le cours auquel je me suis inscrit commence en mars.',
      detail: { title: 'La soudure', body: "auquel, auxquels, auxquelles, duquel, desquels, desquelles. à laquelle et de laquelle restent en deux mots. EN: only the feminine singular resists.", say: 'La réunion à laquelle tu penses a lieu jeudi.' } },
    { k: 'le composé', v: 'un groupe en de prend duquel', say: 'Le parc près duquel Nadia habite ferme à vingt heures.',
      detail: { title: 'Le composé', body: "à côté de, au bout de, près de, en face de : dont ne passe pas après eux. EN: dont cannot follow any of them.", say: "C'est le tiroir dont je parle." } },
    { k: 'les trois ce', v: 'rien devant, ou toute une phrase', say: "C'est exactement ce dont j'ai besoin.",
      detail: { title: 'Les trois ce', body: "ce qui, ce que, ce dont, et le ce reste après tout. EN: ce qui, ce que, ce dont, and the ce stays after tout.", say: "Tout ce qui est sur l'établi part demain." } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['devant', 'soudure', 'neutre'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu accroches maintenant une phrase à un nom par-dessus une préposition, tu accordes lequel sans l'entendre, tu soudes à et de au bon endroit, et tu écris ce quand aucun nom ne précède. Le piège qui reste est la frontière entre dont et duquel : elle ne s'entend pas, elle se compte. Avant l'examen, reprends ta fiche et souligne chaque petit mot. Pour chacun, écris à côté le mot qui le précède. Si ce mot est un nom, le petit mot doit le reprendre ; sinon il te faut ce. La phrase où tu ne peux rien écrire à côté est celle qu'il faut réécrire. EN: Underline every relative pronoun in your card and name the word in front of it; the one where you cannot name anything is the one to rewrite.",
  stats: [
    { k: 'Le geste', v: 'devant, puis derrière' },
    { k: 'Le piège', v: "la frontière entre dont et duquel" },
    { k: 'La soudure', v: 'à et de, sauf au féminin singulier' },
    { k: 'La suite', v: 'le subjonctif, après cette leçon' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), ELEVEN rounds of eight, one per
 *  act from act 1 to act 10 plus an integration round. Each round's target is
 *  a distinct errorTrigger, so a failed round fires that round's own drill.
 *
 *  `fold()` strips commas, accents and apostrophes, so NO typed answer here
 *  turns on one. In particular « ce qu' » and « ce que » fold onto the same
 *  string, so the elision is never the point of a typed question; the spacing
 *  of « à laquelle » against « auquelle » survives folding and is typeable.
 */

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
      id: 'r1-devant', label: 'Le devant', targets: ['phrase-qui-designe-rien'],
      questions: [
        mc("Six tournevis sur l'établi. Pourquoi « Le tournevis est trop petit » ne suffit-il pas ?", ['la phrase est fausse', 'la phrase est trop longue', 'elle convient aux six'], 2, "Elle ne désigne aucun des six en particulier. EN: it points at none of the six in particular.", 'a1-scene'),
        tI('Colle ces deux phrases en une seule.', "J'ai ouvert le boîtier avec un tournevis. Le tournevis est trop petit.", "Le tournevis avec lequel j'ai ouvert le boîtier est trop petit.", "Un nom est écrit devant, donc tu le reprends. EN: a noun is written in front, so you pick it up.", 'a1-reperer'),
        mc('Devant un trou, que regardes-tu en premier ?', ['le mot écrit juste devant', 'le temps du verbe'], 0, "Le devant décide s'il faut ce. EN: what is in front decides whether ce is needed.", 'a1-cartes'),
        eS("Qui m'inquiète, c'est le fil.", "Ce qui m'inquiète, c'est le fil.", "Aucun nom ne précède, donc ce prend sa place. EN: no noun precedes, so ce stands in.", 'a1-cartes'),
        tI('Complète avec deux mots.', 'Dis-moi ___ tu as besoin.', 'Dis-moi ce dont tu as besoin.', "avoir besoin DE : le verbe porte un de. EN: the verb carries a de.", 'a1-exemples'),
        mc('« La raison pour laquelle je viens ici » : quel mot est écrit devant pour laquelle ?', ['je', 'la raison'], 1, "Le nom la raison, et il commande la forme. EN: the noun la raison, and it sets the form.", 'a1-lecture'),
        lC('Écoute. Un nom est-il écrit devant le petit mot ?', "Le tournevis avec lequel j'ai ouvert le boîtier est trop petit.", ['Oui, le tournevis', 'Non, aucun'], 0, "le tournevis est là, donc lequel le reprend. EN: le tournevis is there, so lequel picks it up.", 'a1-scene'),
        tI('Complète avec deux mots.', 'Je ne sais pas ___ a lâché.', 'Je ne sais pas ce qui a lâché.', "Rien ne suit le trou, donc ce qui. EN: nothing follows the gap, so ce qui.", 'a1-reperer'),
      ],
    },
    {
      id: 'r2-place', label: 'La place', targets: ['preposition-a-la-fin'],
      questions: [
        mc('Une relative française peut-elle finir par avec ?', ['oui, comme en anglais', 'non, jamais'], 1, 'La préposition monte devant le petit mot. EN: the preposition moves in front.', 'a2-cartes'),
        eS('La table que tu poses la lampe sur est solide.', 'La table sur laquelle tu poses la lampe est solide.', 'sur monte devant, et que devient laquelle. EN: sur moves in front and que becomes laquelle.', 'a2-piege'),
        tI('Fais monter la préposition.', "Le carton que j'ai mis les vis dans a disparu.", "Le carton dans lequel j'ai mis les vis a disparu.", 'dans ouvre la relative au lieu de la fermer. EN: dans opens the clause instead of closing it.', 'a2-construire'),
        mc("Complète : « L'escabeau ... je monte est trop court. »", ['sur lequel', 'que je monte sur'], 0, "La préposition ne reste pas au bout. EN: the preposition does not stay at the end.", 'a2-ordre'),
        lC('Écoute. Quelle préposition monte devant le petit mot ?', 'Les outils sans lesquels on ne peut rien faire sont dans la boîte rouge.', ['avec', 'sans'], 1, '« sans lesquels ». EN: sans lesquels.', 'a2-ecoute'),
        tI('Fais monter la préposition par.', 'La fenêtre ___ entre le bruit donne sur la rue.', 'La fenêtre par laquelle entre le bruit donne sur la rue.', 'fenêtre est féminin singulier, donc laquelle. EN: fenêtre is feminine singular.', 'a2-piege'),
        mc("Que devient que quand une préposition arrive devant lui ?", ['il reste que', 'il devient qui', 'il devient lequel'], 2, "que ne supporte aucune préposition devant lui. EN: que takes no preposition in front of it.", 'a2-construire'),
        mc('Combien de prépositions se soudent à lequel ?', ['toutes', 'aucune', 'deux'], 2, 'à et de, et seulement elles. EN: à and de, and only those two.', 'a2-cartes'),
      ],
    },
    {
      id: 'r3-formes', label: 'Les formes', targets: ['forme-non-accordee'],
      questions: [
        mc("Avec quoi lequel s'accorde-t-il ?", ['avec le nom écrit devant', 'avec le sujet de la relative'], 0, 'Toujours le nom de devant. EN: always the noun in front.', 'a3-cartes'),
        mc('Complète : « La pince avec ... je tiens la pièce. »', ['lequel', 'laquelle'], 1, 'pince est un nom féminin. EN: pince is feminine.', 'a3-tableau'),
        tI('Mets la bonne forme.', 'Les caisses dans ___ nous rangeons les outils sont numérotées.', 'Les caisses dans lesquelles nous rangeons les outils sont numérotées.', 'caisses est féminin pluriel. EN: caisses is feminine plural.', 'a3-construire'),
        lC('Écoute. Quelle forme est écrite dans cette phrase ?', 'Les pinces avec lesquelles on serre les fils sont rouges.', ['lesquels', 'lequel', 'lesquelles'], 2, "L'oreille ne tranche pas : pinces est féminin pluriel. EN: the ear cannot tell; pinces is feminine plural.", 'a3-ecoute'),
        eS('Les ciseaux avec lesquelles tu coupes le tissu sont à Samuel.', 'Les ciseaux avec lesquels tu coupes le tissu sont à Samuel.', 'ciseaux est masculin pluriel. EN: ciseaux is masculine plural.', 'a3-erreurs'),
        tI('Mets la bonne forme.', 'Le dossier dans ___ je range les fiches est vert.', 'Le dossier dans lequel je range les fiches est vert.', 'dossier est masculin singulier. EN: dossier is masculine singular.', 'a3-dictee'),
        mc('Quatre formes écrites : combien de sons ?', ['quatre', 'deux', 'trois'], 2, 'luh-KEL, lah-KEL, lay-KEL. EN: three sounds for four spellings.', 'a3-cartes'),
        tI('Mets la bonne forme.', "La machine pour ___ j'ai rempli le formulaire est réparée.", "La machine pour laquelle j'ai rempli le formulaire est réparée.", 'machine est féminin en français. EN: machine is feminine in French.', 'a3-erreurs'),
      ],
    },
    {
      id: 'r4-auquel', label: 'La soudure de à', targets: ['soudure-oubliee'],
      questions: [
        mc('Complète : « Le cours ... je me suis inscrit commence en mars. »', ['à lequel', 'auquel'], 1, 'à plus lequel donne auquel. EN: à plus lequel gives auquel.', 'a4-cartes'),
        mc('Complète : « La réunion ... tu penses a lieu jeudi. »', ['à laquelle', 'auquelle'], 0, 'Le féminin singulier ne se soude jamais. EN: the feminine singular never fuses.', 'a4-construire'),
        tI('Mets la forme soudée. Le verbe est participer à.', 'Les ateliers ___ nous participons sont gratuits.', 'Les ateliers auxquels nous participons sont gratuits.', 'à plus les donne aux. EN: à plus les gives aux.', 'a4-construire'),
        eS('Les questions auxquels je réponds sont toujours les mêmes.', 'Les questions auxquelles je réponds sont toujours les mêmes.', "questions est féminin pluriel, et les deux formes se disent pareil. EN: questions is feminine plural, and both forms sound alike.", 'a4-piege'),
        lC('Écoute. Le mot qui suit concours tient-il en un mot ou en deux ?', "Le concours auquel Samuel s'est présenté a lieu à Québec.", ['en deux mots', 'en un seul mot'], 1, 'auquel, soudé. EN: auquel, fused.', 'a4-ecoute'),
        tI('Mets la forme soudée. Le verbe est inviter à.', 'Les soirées ___ Nadia nous invite finissent tard.', 'Les soirées auxquelles Nadia nous invite finissent tard.', 'soirées est féminin pluriel. EN: soirées is feminine plural.', 'a4-exemples'),
        mc('Quelle forme reste en deux mots ?', ['auxquels', 'auxquelles', 'à laquelle'], 2, 'Le féminin singulier, toujours. EN: the feminine singular, always.', 'a4-cartes'),
        mc("D'où vient le à de la relative ?", ['du verbe de la relative', 'du nom de devant'], 0, "s'inscrire à, penser à, répondre à. EN: from the verb inside the clause.", 'a4-histoire'),
      ],
    },
    {
      id: 'r5-duquel', label: 'dont ou duquel', targets: ['dont-apres-un-groupe'],
      questions: [
        mc('« Le parc ... Nadia habite ferme à vingt heures. » Quelle forme ?', ['près dont', 'près duquel', 'près de lequel'], 1, 'près de est un groupe, donc duquel. EN: près de is a group, so duquel.', 'a5-cartes'),
        mc("Comment sais-tu s'il faut dont ou duquel ?", ['par le genre du nom', 'par le temps du verbe', 'en comptant les mots qui portent le de'], 2, 'Un seul mot, dont. Un groupe, duquel. EN: one word, dont; a group, duquel.', 'a5-frontiere'),
        tI('Complète. Le verbe est parler de.', "C'est le tiroir ___ je parle.", "C'est le tiroir dont je parle.", 'Le de est tout seul, donc dont. EN: the de is on its own, so dont.', 'a5-construire'),
        eS("La rue au bout duquel se trouve l'atelier est calme.", "La rue au bout de laquelle se trouve l'atelier est calme.", "rue est féminin singulier, et bout ne compte pas. EN: rue is feminine singular; bout does not count.", 'a5-erreurs'),
        tI('Complète après le groupe à côté de.', 'Le bâtiment à côté ___ nous garons le camion est une école.', 'Le bâtiment à côté duquel nous garons le camion est une école.', 'bâtiment est masculin singulier. EN: bâtiment is masculine singular.', 'a5-construire'),
        lC('Écoute. Le nom de devant est-il singulier ou pluriel ?', 'Les immeubles en face desquels nous travaillons sont neufs.', ['singulier', 'pluriel'], 1, 'les immeubles, donc desquels. EN: les immeubles, so desquels.', 'a5-ecoute'),
        mc('près dont existe-t-il en français ?', ["oui, à l'oral", "oui, à l'écrit", 'non, jamais'], 2, "Après un groupe, dont est impossible. EN: after a group, dont is impossible.", 'a5-erreurs'),
        tI('Complète après le groupe le long de.', 'Le mur le long ___ passe le fil est humide.', 'Le mur le long duquel passe le fil est humide.', 'mur est masculin singulier. EN: mur is masculine singular.', 'a5-exemples'),
      ],
    },
    {
      id: 'r6-blocs', label: 'Les blocs', targets: ['raison-pourquoi'],
      questions: [
        mc('Comment dit-on the reason why ?', ['la raison pourquoi', 'la raison pour laquelle', 'la raison que'], 1, 'Quatre mots, toujours les mêmes. EN: four words, always the same.', 'a6-cartes'),
        tI('Commence la phrase par le bloc complet.', "___ je viens ici, c'est le silence.", "La raison pour laquelle je viens ici, c'est le silence.", 'Le bloc ne se découpe pas. EN: the block does not come apart.', 'a6-flash'),
        mc('grâce à lequel ou grâce auquel ?', ['grâce auquel', 'grâce à lequel'], 0, 'grâce à cache un à, donc la soudure joue. EN: grâce à hides an à, so the fusion applies.', 'a6-construire'),
        eS('Les conditions dans lesquels ils travaillent sont difficiles.', 'Les conditions dans lesquelles ils travaillent sont difficiles.', 'conditions est féminin pluriel. EN: conditions is feminine plural.', 'a6-erreurs'),
        tI('Complète avec la préposition sur.', "Le point ___ nous ne sommes pas d'accord est le prix.", "Le point sur lequel nous ne sommes pas d'accord est le prix.", 'point est masculin singulier. EN: point is masculine singular.', 'a6-lecture'),
        lC('Écoute. Quelle forme suit grâce dans cette phrase ?', 'La méthode grâce à laquelle Samuel travaille vite est simple.', ['auquel', 'auxquelles', 'à laquelle'], 2, 'méthode est féminin singulier, donc rien ne se soude. EN: méthode is feminine singular, so nothing fuses.', 'a6-cartes'),
        mc('Peut-on découper la raison pour laquelle ?', ["non, c'est un bloc", 'oui, mot à mot'], 0, "la raison pourquoi n'existe pas. EN: la raison pourquoi does not exist.", 'a6-construire'),
        mc('Dans « les conditions dans ... », quelle forme ?', ['lesquels', 'lequel', 'lesquelles'], 2, 'Féminin pluriel. EN: feminine plural.', 'a6-erreurs'),
      ],
    },
    {
      id: 'r7-ce', label: 'Rien devant', targets: ['ce-oublie'],
      questions: [
        mc('Quand écris-tu ce devant qui ou que ?', ['toujours', "quand aucun nom ne précède"], 1, "Aucun nom à reprendre, donc ce. EN: no noun to pick up, so ce.", 'a7-cartes'),
        mc("Complète : « ... m'énerve, c'est le bruit. »", ['Ce qui', 'Ce que'], 0, 'Rien ne suit le trou. EN: nothing follows the gap.', 'a7-construire'),
        tI('Complète avec deux mots.', 'Explique-moi ___ tu as fait hier.', 'Explique-moi ce que tu as fait hier.', 'tu suit le trou, donc ce que. EN: tu follows the gap, so ce que.', 'a7-exemples'),
        lC('Écoute. Quels mots ouvrent la relative ?', 'Personne ne sait ce qui va se passer.', ['qui', 'que', 'ce qui'], 2, "Aucun nom ne précède, donc ce qui. EN: no noun precedes, so ce qui.", 'a7-ecoute'),
        eS('Je ne comprends pas ce qui tu veux.', 'Je ne comprends pas ce que tu veux.', 'tu est déjà le sujet, donc ce que. EN: tu is already the subject, so ce que.', 'a7-piege'),
        tI('Complète avec deux mots.', 'Dis-moi ___ te plaît dans ce travail.', 'Dis-moi ce qui te plaît dans ce travail.', "te est un complément, pas un sujet, donc ce qui. EN: te is an object, not a subject.", 'a7-construire'),
        mc('Le test de la leçon 11 change-t-il quand ce arrive ?', ['oui, il disparaît', "oui, il s'inverse", 'non, il reste le même'], 2, `${B111_REFRAME} EN: ${B111_REFRAME_EN}`, 'a7-cartes'),
        tI('Commence la phrase par deux mots.', "___ je veux, c'est un atelier plus grand.", "Ce que je veux, c'est un atelier plus grand.", 'je suit le trou. EN: je follows the gap.', 'a7-histoire'),
      ],
    },
    {
      id: 'r8-dont', label: 'Le de du verbe', targets: ['ce-que-pour-ce-dont'],
      questions: [
        mc("Complète : « C'est exactement ... j'ai besoin. »", ['ce que', 'ce dont'], 1, 'avoir besoin DE. EN: avoir besoin de.', 'a8-cartes'),
        eS('Ce que tu parles est déjà réparé.', 'Ce dont tu parles est déjà réparé.', 'parler DE quelque chose. EN: parler de something.', 'a8-erreurs'),
        tI('Commence la phrase par deux mots. Le groupe est être fier de.', "___ Samuel est fier, c'est sa boîte à outils.", "Ce dont Samuel est fier, c'est sa boîte à outils.", "L'adjectif porte le de. EN: the adjective carries the de.", 'a8-construire'),
        mc("D'où vient le de de ce dont ?", ["du verbe ou de l'adjectif", 'du nom'], 0, 'avoir besoin de, être fier de. EN: from the verb or the adjective.', 'a8-construire'),
        lC('Écoute. Quel mot suit ce dans cette phrase ?', "Ce dont personne ne s'occupe, c'est le ménage.", ['qui', 'que', 'dont'], 2, "s'occuper DE. EN: s'occuper de.", 'a8-ecoute'),
        tI('Complète avec deux mots.', 'Il note ___ il a besoin avant de partir.', 'Il note ce dont il a besoin avant de partir.', 'avoir besoin de, encore. EN: avoir besoin de again.', 'a8-flash'),
        mc('Combien de formes existent après ce ?', ['une', 'deux', 'trois'], 2, 'ce qui, ce que, ce dont. EN: three forms.', 'a8-cartes'),
        mc('what montre-t-il le de du verbe français ?', ['non, jamais', 'oui, toujours'], 0, "C'est pour ça que ce dont s'oublie. EN: that is why ce dont gets forgotten.", 'a8-erreurs'),
      ],
    },
    {
      id: 'r9-tout', label: 'tout garde son ce', targets: ['tout-sans-ce'],
      questions: [
        mc('Après tout, le ce disparaît-il ?', ['oui, tout le remplace', 'non, il reste'], 1, "tout n'est pas un nom. EN: tout is not a noun.", 'a9-cartes'),
        mc("Complète : « ... est sur l'établi part demain. »", ['Tout qui', 'Tout que', 'Tout ce qui'], 2, 'Le ce reste, et rien ne suit le trou. EN: the ce stays and nothing follows the gap.', 'a9-construire'),
        tI('Complète avec trois mots.', "J'ai noté ___ tu m'as dit.", "J'ai noté tout ce que tu m'as dit.", 'tu suit le trou, donc tout ce que. EN: tu follows the gap.', 'a9-exemples'),
        eS('Tout dont tu as besoin est dans le tiroir du bas.', 'Tout ce dont tu as besoin est dans le tiroir du bas.', 'Le ce manque entre tout et dont. EN: the ce is missing between tout and dont.', 'a9-piege'),
        lC('Écoute. Entends-tu un mot entre tout et qui ?', "Tout ce qui brille n'est pas or.", ['Oui, le ce', 'Non, rien'], 0, 'Une syllabe rapide, mais elle est là. EN: one quick syllable, but it is there.', 'a9-ecoute'),
        tI('Complète avec trois mots.', 'Elle range ___ traîne sur la table.', 'Elle range tout ce qui traîne sur la table.', 'Le verbe traîne suit directement. EN: the verb follows directly.', 'a9-construire'),
        mc('Pourquoi tout ne remplace-t-il pas le ce ?', ["parce qu'il est trop court", "parce qu'il ne nomme rien"], 1, 'tout dit une quantité. EN: tout states a quantity.', 'a9-histoire'),
        tI('Complète avec trois mots.', 'Nous gardons ___ les voisins nous apportent.', 'Nous gardons tout ce que les voisins nous apportent.', 'les voisins est un sujet. EN: les voisins is a subject.', 'a9-exemples'),
      ],
    },
    {
      id: 'r10-virgule', label: 'Après la virgule', targets: ['qui-pour-une-phrase'],
      questions: [
        mc('Après une virgule, que reprend ce qui ?', ['toute la phrase de devant', 'le dernier nom écrit'], 0, "Une phrase n'est pas un nom. EN: a sentence is not a noun.", 'a10-cartes'),
        mc("Complète : « La lampe s'est éteinte, ... a surpris tout le monde. »", ['qui', 'que', 'ce qui'], 2, "Ce n'est pas la lampe qui a surpris. EN: it is not the lamp that surprised anyone.", 'a10-construire'),
        tI('Complète. Le verbe est parler de.', 'Il manque deux pièces, ___ nous parlerons lundi.', 'Il manque deux pièces, ce dont nous parlerons lundi.', 'Le de du verbe donne ce dont. EN: the verb’s de gives ce dont.', 'a10-lecture'),
        eS("Nadia a fermé plus tôt, ce qui personne n'avait prévu.", "Nadia a fermé plus tôt, ce que personne n'avait prévu.", 'personne est le sujet du verbe. EN: personne is the subject.', 'a10-erreurs'),
        lC('Écoute. Le petit mot reprend-il une phrase ou un nom ?', 'Le fil noir, qui chauffe, part de la prise.', ['une phrase entière', 'un nom'], 1, 'le fil noir est écrit devant la virgule. EN: le fil noir is written in front of the comma.', 'a10-ecoute'),
        tI('Complète avec deux mots.', 'Le local a été repeint, ___ change tout.', 'Le local a été repeint, ce qui change tout.', "C'est le fait entier qui change tout. EN: it is the whole event that changes everything.", 'a10-construire'),
        mc('« le fil noir, qui chauffe » : pourquoi pas ce qui ?', ['la phrase est courte', 'un nom est écrit devant'], 1, 'le fil est là, donc qui suffit. EN: le fil is there, so qui is enough.', 'a10-cartes'),
        mc('En anglais, which sert-il pour un nom et pour une phrase ?', ['oui, pour les deux', 'non, seulement pour un nom'], 0, 'Le français sépare les deux cas. EN: French keeps the two apart.', 'a10-focus'),
      ],
    },
    {
      id: 'r11-fiche', label: 'Tout ensemble', targets: ['fiche-qui-casse'],
      questions: [
        mc('Tu écris ta fiche. Par quoi commences-tu pour choisir ton petit mot ?', ['par le sens de la phrase', 'par le temps du verbe', 'par le mot écrit devant le trou'], 2, `${REFRAME} EN: ${REFRAME_EN}`, 'a11-plan'),
        tI('Complète avec la préposition avec.', "Le tournevis ___ j'ai ouvert le boîtier était trop petit.", "Le tournevis avec lequel j'ai ouvert le boîtier était trop petit.", 'La préposition monte devant. EN: the preposition moves in front.', 'a11-lecture'),
        eS("La boîte à côté duquel j'ai posé la lampe est grise.", "La boîte à côté de laquelle j'ai posé la lampe est grise.", 'boîte est féminin singulier, donc rien ne se soude. EN: boîte is feminine singular, so nothing fuses.', 'a11-lecture'),
        mc("Complète : « ... j'ai besoin, c'est d'une pièce de rechange. »", ['Ce dont', 'Ce que'], 0, 'avoir besoin DE. EN: avoir besoin de.', 'a11-usages'),
        lC('Écoute. Le mot qui suit numéro est-il soudé ?', 'Voici le numéro auquel vous pouvez me joindre.', ['non, deux mots', 'oui, un seul mot'], 1, 'joindre à, et le masculin singulier se soude. EN: joindre à, and the masculine singular fuses.', 'a11-scenario'),
        tI('Commence la phrase par trois mots.', '___ reste à faire tient en dix minutes.', 'Tout ce qui reste à faire tient en dix minutes.', 'tout garde son ce. EN: tout keeps its ce.', 'a11-cheat'),
        mc('« Nadia a trouvé la panne en dix minutes, ... m’a étonné. »', ['qui', 'ce qui'], 1, "Devant la virgule il y a une phrase. EN: in front of the comma there is a sentence.", 'a11-lecture'),
        mc("Ta fiche finit par « le tournevis que j'ai travaillé avec ». Que fais-tu ?", ['tu fais monter avec devant lequel', "tu laisses, c'est correct"], 0, "Aucune relative ne finit sur une préposition. EN: no clause ends on a preposition.", 'a11-plan'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_REVISION: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-revision',
  layer: 'core',
  title: 'Une dernière fois',
  frSub: 'Neuf cartes, à trier toi-même',
  cards: [
    { front: 'le devant', back: 'un nom, ou rien du tout', say: "Ce qui m'inquiète, c'est le fil." },
    { front: 'la place de la préposition', back: 'devant le petit mot, jamais au bout', say: "Le stylo avec lequel j'écris vient de ma grand-mère." },
    { front: 'les quatre formes', back: 'lequel, laquelle, lesquels, lesquelles', say: 'La pince avec laquelle je tiens la pièce est trop grande.' },
    { front: 'la soudure de à', back: 'auquel, auxquels, auxquelles, mais à laquelle', say: 'Le cours auquel je me suis inscrit commence en mars.' },
    { front: 'la soudure de de', back: 'duquel, desquels, desquelles, mais de laquelle', say: 'Le parc près duquel Nadia habite ferme à vingt heures.' },
    { front: 'dont ou duquel', back: 'un de seul, ou un groupe en de', say: "C'est le tiroir dont je parle." },
    { front: 'les blocs', back: 'la raison pour laquelle, grâce auquel', say: "La raison pour laquelle je viens ici, c'est le silence." },
    { front: 'les trois ce', back: 'ce qui, ce que, ce dont', say: "C'est exactement ce dont j'ai besoin." },
    { front: 'après une virgule', back: 'une phrase entière, donc ce', say: "La lampe s'est éteinte, ce qui a surpris tout le monde." },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Un regard, en résumé',
  body: `${REFRAME} Tu es entré dans cette leçon en sachant coller deux phrases avec qui et que, et tu en sors avec tout le reste de la famille : l'outil avec lequel tu travailles, le cours auquel tu t'inscris, le parc près duquel tu habites, la raison pour laquelle tu écris, et la chose qui compte sans qu'aucun nom la désigne. Un seul regard les sépare tous, et il se pose devant le trou. La prochaine leçon change de terrain : elle ouvre le subjonctif, le mode de ce qu'on veut, de ce qu'on craint et de ce dont on doute. EN: The next lesson opens the subjunctive, the mood of wanting, fearing and doubting.`,
  points: [
    'Le mot écrit devant le trou décide tout le reste.',
    "Aucune relative française ne finit par une préposition.",
    'Seules à et de se soudent, et jamais au féminin singulier.',
    "tout ne remplace pas le ce, et une phrase entière n'est pas un nom.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['devant', 'place', 'neutre'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Écrire la fiche',
    opener: {
      line: "Un réparateur va lire ta fiche avant de voir ton objet : ici tu écris pour quelqu'un qui n'a que tes phrases. EN: A repairer will read your card before seeing your thing: here you write for somebody who has nothing but your sentences.",
      imageRef: 'lessons/lequel-ce-qui/act11.jpg',
    },
    sections: [],
    milestone: "Tu écris dix lignes où chaque détail est accroché au bon nom, et où rien ne pend dans le vide. EN: You can write ten lines in which every detail is attached to the right noun and nothing is left dangling.",
    estScreens: 130,
    restPoints: ['a11-plan', 'a11-usages', 'a11-scenario', 'a11-parler', 'a11-cheat', 'a11-quiz'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_TASK, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVISION, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here (a `table` at layer core
 *  is refused by validateDensity). Every sheet is reachable from a mission
 *  through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-devant', 'Le geste : devant, puis derrière', ['le test en deux temps', 'les six mots'], [
    teach('sheet-devant-teach', 'Deux regards, dans cet ordre', `${REFRAME} Tu regardes d'abord ce qui est écrit juste devant le trou. Si c'est un nom, il reste à choisir le mot qui le reprend. Si ce n'est pas un nom, ou s'il n'y a rien, tu écris ce, et seulement ensuite tu regardes derrière. EN: ${REFRAME_EN} Look in front first; look behind second.`),
    table('sheet-devant-mots', 'Les six mots, et ce qui les sépare', ['Ce qui est écrit devant', 'Le mot', 'Exemple'], [
      ['un nom, sans préposition', 'qui ou que', 'le tournevis QUI est trop fin'],
      ['un nom, et le verbe demande de', 'dont', 'le tiroir DONT je parle'],
      ['un nom, après une préposition', 'lequel et ses formes', "le tournevis AVEC LEQUEL j'écris"],
      ['un nom, après un groupe en de', 'duquel et ses formes', 'le parc PRÈS DUQUEL elle habite'],
      ['rien du tout', 'ce qui, ce que, ce dont', "CE QUI m'inquiète, c'est le fil"],
      ['une phrase entière, après une virgule', 'ce qui, ce que, ce dont', 'il manque deux pièces, CE DONT nous parlerons'],
    ]),
    table('sheet-devant-ordre', 'Les deux gestes, dans cet ordre', ['Ordre', 'Tu regardes', 'Tu décides'], [
      ['1', 'le mot juste devant le trou', 'un nom, ou rien'],
      ['2a', 'un nom est là', 'tu le reprends, et tu passes au geste 3'],
      ['2b', 'aucun nom', 'tu écris ce, et tu passes au geste 3'],
      ['3', 'ce qui suit le trou', 'rien : qui · un sujet : que'],
      ['3 bis', 'le verbe de la relative', 'il demande de : dont'],
      ['3 ter', 'une préposition est devant', 'lequel, accordé au nom'],
    ]),
  ]),

  sheet('sheet-lequel', 'lequel, ses formes et ses soudures', ['les quatre formes', 'les deux soudures', 'la place de la préposition'], [
    teach('sheet-lequel-teach', 'Un article et un mot interrogatif collés', "lequel est fait de le et de quel, et les deux morceaux s'accordent ensemble avec le nom de devant. C'est pour ça qu'il y a quatre formes écrites et que le pluriel prend un s des deux côtés. À l'oreille, lesquels et lesquelles ne se distinguent pas. EN: lequel is le plus quel, and both halves agree with the noun in front; the two plurals sound identical."),
    table('sheet-lequel-formes', 'Les quatre formes', ['Le nom de devant', 'La forme', 'Exemple'], [
      ['masculin singulier', 'lequel', "le couteau avec LEQUEL je coupe"],
      ['féminin singulier', 'laquelle', 'la pince avec LAQUELLE je tiens'],
      ['masculin pluriel', 'lesquels', 'les ciseaux avec LESQUELS tu coupes'],
      ['féminin pluriel', 'lesquelles', 'les pinces avec LESQUELLES on serre'],
      ["ce qu'on entend", 'trois sons', 'luh-KEL · lah-KEL · lay-KEL'],
      ['ce qui décide', 'le nom écrit devant', 'jamais la chose elle-même'],
    ]),
    table('sheet-lequel-soudure', 'Les deux soudures', ['Préposition', 'Masc. sing.', 'Fém. sing.', 'Pluriels'], [
      ['à', 'auquel', 'à laquelle', 'auxquels · auxquelles'],
      ['de', 'duquel', 'de laquelle', 'desquels · desquelles'],
      ['avec, sur, dans, pour, sans', 'avec lequel', 'avec laquelle', 'avec lesquels · lesquelles'],
      ['par, sous, devant, chez', 'par lequel', 'par laquelle', 'par lesquels · lesquelles'],
      ['la règle', 'seules à et de se soudent', 'le féminin singulier résiste', 'les pluriels se soudent'],
      ["d'où vient le à ou le de", 'du verbe de la relative', "s'inscrire à, parler de", 'penser à, avoir besoin de'],
    ]),
    table('sheet-lequel-place', 'La place de la préposition', ['Anglais', 'Français faux', 'Français juste'], [
      ['the pen I write with', "le stylo que j'écris avec", "le stylo AVEC LEQUEL j'écris"],
      ['the table you put it on', 'la table que tu le poses sur', 'la table SUR LAQUELLE tu le poses'],
      ['the box I put them in', "le carton que je les ai mis dans", "le carton DANS LEQUEL je les ai mis"],
      ['the course I signed up for', "le cours que je me suis inscrit pour", 'le cours AUQUEL je me suis inscrit'],
      ['the tools we cannot work without', 'les outils que nous ne pouvons pas travailler sans', 'les outils SANS LESQUELS nous ne pouvons pas travailler'],
      ['la règle', 'jamais de préposition à la fin', 'elle monte devant le petit mot'],
    ]),
  ]),

  sheet('sheet-compose', 'dont ou duquel', ['la frontière', 'les groupes qui finissent par de'], [
    teach('sheet-compose-teach', 'Un seul de, ou un groupe entier', `Quand le de vient du verbe et qu'il est seul, dont fait tout le travail : le tiroir DONT je parle. Quand le de termine un groupe (à côté de, au bout de, près de), dont ne passe plus, et c'est duquel qui prend le relais. C'est la seule frontière entre les deux, et ${DONT_OU_REF} traite dont pour lui-même. EN: a lone de takes dont; a de that ends a compound preposition takes duquel.`),
    table('sheet-compose-groupes', 'Les groupes qui finissent par de', ['Le groupe', 'La forme', 'Exemple'], [
      ['à côté de', 'à côté duquel', 'le bâtiment À CÔTÉ DUQUEL nous garons'],
      ['au bout de', 'au bout duquel', 'le délai AU BOUT DUQUEL la garantie finit'],
      ['près de', 'près duquel', 'le parc PRÈS DUQUEL Nadia habite'],
      ['en face de', 'en face desquels', 'les immeubles EN FACE DESQUELS nous travaillons'],
      ['au milieu de', 'au milieu de laquelle', 'la cour AU MILIEU DE LAQUELLE il y a un arbre'],
      ['le long de, autour de, au-dessus de', 'le long duquel', 'le mur LE LONG DUQUEL passe le fil'],
    ]),
    table('sheet-compose-frontiere', 'La frontière, en six lignes', ['Le de vient de', 'Le mot', 'Exemple'], [
      ['parler de', 'dont', "C'est le tiroir DONT je parle."],
      ['avoir besoin de', 'dont', "L'outil DONT j'ai besoin est fin."],
      ['à côté de', 'duquel', "le tiroir À CÔTÉ DUQUEL j'ai posé la clé"],
      ['près de', 'duquel', 'le parc PRÈS DUQUEL elle habite'],
      ['le test', 'compte les mots', 'de tout seul : dont · de dans un groupe : duquel'],
      ["l'erreur classique", 'près dont', "n'existe pas, en aucun cas"],
    ]),
  ]),

  sheet('sheet-ce', 'ce qui, ce que, ce dont', ['les trois formes', 'tout ce', 'après une virgule'], [
    teach('sheet-ce-teach', "Un mot qui remplace le nom absent", `Quand aucun nom n'est écrit devant, ce prend sa place, et le mot qui suit se choisit exactement comme avant : « ${B111_REFRAME} » Si le verbe de la relative réclame un de, la forme est ce dont. EN: ${B111_REFRAME_EN} And if the clause's verb wants de, the form is ce dont.`),
    table('sheet-ce-formes', 'Les trois formes', ['Ce qui suit le trou', 'La forme', 'Exemple'], [
      ['rien, le verbe arrive', 'ce qui', "CE QUI m'énerve, c'est le bruit."],
      ['un sujet', 'ce que', "CE QUE je veux, c'est un atelier plus grand."],
      ['un verbe qui demande de', 'ce dont', "C'est exactement CE DONT j'ai besoin."],
      ['avoir besoin de, parler de', 'ce dont', 'CE DONT tu parles est déjà réparé.'],
      ['avoir envie de, être fier de', 'ce dont', "CE DONT Samuel est fier, c'est sa boîte."],
      ["l'anglais", 'un seul mot', 'what, pour les trois'],
    ]),
    table('sheet-ce-tout', 'tout ce, et la virgule', ['Cas', 'Forme', 'Exemple'], [
      ['tout plus sujet', 'tout ce qui', "TOUT CE QUI est sur l'établi part demain."],
      ['tout plus complément', 'tout ce que', "J'ai noté TOUT CE QUE tu m'as dit."],
      ['tout plus verbe en de', 'tout ce dont', 'TOUT CE DONT tu as besoin est là.'],
      ['après une virgule, sujet', 'ce qui', "La lampe s'est éteinte, CE QUI a surpris."],
      ['après une virgule, complément', 'ce que', "Nadia a fermé tôt, CE QUE personne n'avait prévu."],
      ['après une virgule, verbe en de', 'ce dont', 'Il manque deux pièces, CE DONT nous parlerons.'],
    ]),
  ]),

  sheet('sheet-ecrire', 'Écrire une fiche qui tient', ['le plan', 'la liste de contrôle'], [
    teach('sheet-ecrire-teach', 'Chaque fait accroché au bon nom', "Une fiche utile ne donne pas plus de faits qu'une liste : elle accroche chaque fait au nom exact auquel il appartient. Le lecteur sait alors de quel objet, de quel outil et de quel problème tu parles, dès la première ligne. EN: a useful card does not add facts; it attaches each one to the exact noun it belongs to."),
    table('sheet-ecrire-plan', 'Le plan', ['Morceau', 'Forme', 'Exemple'], [
      ["l'objet", 'le nom, puis qui ou que', "L'objet QUE j'apporte est une lampe."],
      ["ce que tu as déjà fait", 'le nom, puis une préposition', "Le tournevis AVEC LEQUEL j'ai ouvert le boîtier était trop petit."],
      ['où se trouve la pièce perdue', 'un groupe en de', "La boîte À CÔTÉ DE LAQUELLE j'ai posé la lampe est grise."],
      ['ce qui te préoccupe', 'ce qui', "CE QUI m'inquiète, c'est le fil noir."],
      ['ce que tu demandes', 'ce dont', "CE DONT j'ai besoin, c'est d'une pièce."],
      ['comment te joindre', 'le nom, puis auquel', 'Voici le numéro AUQUEL vous pouvez me joindre.'],
    ]),
    table('sheet-ecrire-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Aucune préposition à la fin', 'cherche avec, sur, dans en bout de phrase'],
      ['La bonne forme de lequel', 'regarde le genre du nom écrit devant'],
      ['La soudure', 'à donne auquel, de donne duquel, sauf au féminin singulier'],
      ['dont ou duquel', 'compte les mots du groupe qui porte le de'],
      ['Le ce', "aucun nom devant : ce qui, ce que, ce dont"],
      ['tout garde son ce', 'tout ce qui, jamais tout qui'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS and ERROR TRIGGERS
 * ══════════════════════════════════════════════════════════════════════════ */

/** One per error trigger, each the resolving target of exactly one quiz
 *  round. Deliberately NOT in `sections`: a learner who never trips one never
 *  sees it. Six items is the house size. */
const DRILL_LIST: LessonDrill[] = [
  { id: 'd-devant', title: 'Un nom, ou rien', format: 'sort' as const, coach: `${THE_LOOK} Deux piles : un nom est écrit devant, ou il n'y a rien. EN: two piles, by whether a noun is written in front.`, buckets: ['un nom devant', 'rien devant'], items: [E(1402), E(1404), E(1405), E(1407), E(1410), E(1412)], audio: AUDIO },
  { id: 'd-place', title: 'La préposition monte', format: 'mcq' as const, coach: "Cherche avec, sur ou dans à la fin de ta phrase. S'il y en a un, il doit monter. EN: look for a stranded preposition and move it to the front.", q: "Le stylo ... j'écris vient de ma grand-mère.", opts: ['avec lequel', "que j'écris avec"], correct: 0, why: 'La préposition passe devant. EN: the preposition moves in front.', items: [E(1418), E(1419), E(1420), E(1424), E(1429), E(1430)], audio: AUDIO },
  { id: 'd-forme', title: 'Le genre du nom de devant', format: 'sort' as const, coach: 'Deux piles, et ne regarde que le nom écrit devant. EN: two piles, and look only at the noun written in front.', buckets: ['lequel ou lesquels', 'laquelle ou lesquelles'], items: [E(1436), E(1437), E(1438), E(1439), E(1445), E(1446)], audio: AUDIO },
  { id: 'd-auquel', title: 'à se colle', format: 'mcq' as const, coach: "Demande-toi si le verbe porte un à. S'il le porte, il faut souder, sauf au féminin singulier. EN: if the verb carries an à, fuse it, except in the feminine singular.", q: 'Le cours ... je me suis inscrit commence en mars.', opts: ['à lequel', 'auquel'], correct: 1, why: 'à plus lequel donne auquel. EN: à plus lequel gives auquel.', items: [E(1454), E(1455), E(1456), E(1457), E(1463), E(1464)], audio: AUDIO },
  { id: 'd-duquel', title: 'dont ou duquel', format: 'mcq' as const, coach: 'Compte les mots qui portent le de. Un seul mot, dont. Un groupe, duquel. EN: count the words carrying the de.', q: 'Le parc ... Nadia habite ferme à vingt heures.', opts: ['près duquel', 'dont', 'près dont'], correct: 0, why: 'près de est un groupe, donc duquel. EN: près de is a group, so duquel.', items: [E(1472), E(1474), E(1477), E(1478), E(1486), E(1488)], audio: AUDIO },
  { id: 'd-raison', title: 'Les blocs entiers', format: 'flashcard' as const, coach: 'Lis chaque bloc à voix haute, en entier, sans le découper. EN: read each block aloud whole, without cutting it up.', items: [E(1489), E(1492), E(1495), E(1498), E(1502), E(1503)], audio: AUDIO },
  { id: 'd-neutre', title: 'Le ce qui manque', format: 'mcq' as const, coach: 'Cherche un nom juste devant le trou. Il n’y en a pas, donc il faut ce. EN: look for a noun in front; there is none, so ce is required.', q: "... m'énerve, c'est le bruit.", opts: ['Ce qui', 'Qui'], correct: 0, why: "Aucun nom devant, donc ce qui. EN: no noun in front, so ce qui.", items: [E(1506), E(1507), E(1511), E(1513), E(1517), E(1522)], audio: AUDIO },
  { id: 'd-dont', title: 'Le verbe qui réclame de', format: 'mcq' as const, coach: 'Dis le verbe tout seul : avoir besoin DE. Le de est là, donc ce dont. EN: say the verb on its own; if it carries de, write ce dont.', q: "C'est exactement ... j'ai besoin.", opts: ['ce que', 'ce dont'], correct: 1, why: 'avoir besoin de, donc ce dont. EN: avoir besoin de, so ce dont.', items: [E(1523), E(1524), E(1527), E(1528), E(1536), E(1539)], audio: AUDIO },
  { id: 'd-tout', title: 'tout garde son ce', format: 'mcq' as const, coach: "tout n'est pas un nom, donc il ne reprend rien et le ce reste. EN: tout is not a noun, so the ce stays.", q: "... est sur l'établi part demain.", opts: ['Tout qui', 'Tout ce qui', 'Tout que'], correct: 1, why: 'tout ne remplace pas le ce. EN: tout does not replace the ce.', items: [E(1540), E(1541), E(1542), E(1545), E(1552), E(1554)], audio: AUDIO },
  { id: 'd-phrase', title: 'Un nom, ou toute la phrase', format: 'sort' as const, coach: "Deux piles. Regarde ce qui est devant la virgule : un nom seul, ou une phrase entière. EN: sort by what sits in front of the comma.", buckets: ['un nom', 'toute une phrase'], items: [E(1557), E(1559), E(1561), E(1563), E(1567), E(1568)], audio: AUDIO },
  { id: 'd-fiche', title: 'Une fiche qui tient', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute et nomme le mot écrit devant le trou. Si tu ne peux pas le nommer, la phrase est cassée. EN: read each one aloud and name the word written in front of the gap.', items: [E(1575), E(1578), E(1580), E(1582), E(1586), E(1589)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'phrase-qui-designe-rien', description: 'Writes a run of short separate sentences where one clause was needed, so nothing in the description says which of several identical things is meant.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-devant', retest: 'd-devant' },
  { id: 'preposition-a-la-fin', description: 'Leaves the preposition at the end of the clause on the English pattern of the pen I write with, so the sentence ends on avec or sur and the clause never attaches.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a11-mission'], drill: 'd-place', retest: 'd-place' },
  { id: 'forme-non-accordee', description: 'Uses lequel for every noun, so a feminine or plural antecedent keeps a masculine singular form and the clause points at the wrong thing.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check', 'a11-mission'], drill: 'd-forme', retest: 'd-forme' },
  { id: 'soudure-oubliee', description: 'Writes à lequel or de lequel in two words, or fuses the feminine singular into aulaquelle, so the contraction is applied by guesswork rather than by rule.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-auquel', retest: 'd-auquel' },
  { id: 'dont-apres-un-groupe', description: 'Uses dont after a compound preposition (près dont, à côté dont), which does not exist, or uses duquel where a lone de would have taken dont.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a11-mission'], drill: 'd-duquel', retest: 'd-duquel' },
  { id: 'raison-pourquoi', description: 'Translates the reason why word for word as la raison pourquoi, or breaks one of the fixed blocks apart and reassembles it wrongly.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-raison', retest: 'd-raison' },
  { id: 'ce-oublie', description: 'Writes qui or que with nothing in front of it, where French needs ce to stand in for the missing noun, so the clause opens with no antecedent at all.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-neutre', retest: 'd-neutre' },
  { id: 'ce-que-pour-ce-dont', description: 'Writes ce que after a verb that carries de (avoir besoin de, parler de), because English says what in both cases and the de is invisible in translation.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-dont', retest: 'd-dont' },
  { id: 'tout-sans-ce', description: 'Drops the ce after tout, writing tout qui or tout que, because English says all I need with no equivalent of the two small words.', detectOn: ['a9-construire', 'a9-piege', 'a9-check', 'a11-mission'], drill: 'd-tout', retest: 'd-tout' },
  { id: 'qui-pour-une-phrase', description: 'Uses qui or que after a comma to pick up the whole preceding sentence, on the English which pattern, where French needs ce qui, ce que or ce dont.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check', 'a11-mission'], drill: 'd-phrase', retest: 'd-phrase' },
  { id: 'fiche-qui-casse', description: 'Builds a long card with several clauses and loses one piece on the way: the preposition, the agreement of lequel, the contraction, or the ce.', detectOn: ['a11-scenario', 'a11-mission', 'a11-plan', 'a11-lecture'], drill: 'd-fiche', retest: 'd-fiche' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

export const SECTIONS: DraftSection[] = ACTS.flatMap((a) => a.sections);

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-13-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-13-atelier': "The workshop intake text (act 1), one female Québécoise voice, one take, read at dictation pace. The two short sentences in the middle are read flat and evenly, as somebody reading their own notes; from « Alors j'ai recommencé » the delivery opens out. NO PAUSE BETWEEN THE PREPOSITION AND lequel anywhere in this lesson's recordings: « avec lequel » is one group, or the learner hears a seam that is not there.",
  'rec-b1-13-devant': "The four devant cards (act 1). One coach voice. Card three quotes lesson 11's line and must be read as a quotation, slightly quicker, so it is heard as something already known rather than as new teaching. Card four reads its two short sentences with a real pause between them.",
  'rec-b1-13-stylo': "Samuel and the coach (act 2), two voices, one take. Samuel's first line is the WRONG form, with the preposition stranded at the end, and it must be read naturally, as somebody reading their own draft aloud. The coach does not correct it in tone, only in words.",
  'rec-b1-13-place': "The four place cards (act 2). One voice. Cards one and two hold the same words in two orders and must be read back to back at the same pace, because the card claims the difference is the ORDER and nothing else.",
  'rec-b1-13-place-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Every preposition plus lequel is one breath group. Nothing is repeated and no line is slowed for help.',
  'rec-b1-13-piege-place': "The audio step plays each card's CORRECT sentence. Six lines, one voice, same pace. The stranded-preposition versions in promptSound are NEVER spoken.",
  'rec-b1-13-formes-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. LESQUELS AND LESQUELLES ARE READ IDENTICALLY, because they are identical; any helpful difference there destroys the mission, whose whole claim is that only the noun in front separates them.',
  'rec-b1-13-formes': 'The four form cards (act 3). One voice. Card four reads the two plurals one after the other with no difference at all, then the noun in front of each, which is where the distinction actually lives.',
  'rec-b1-13-cours': 'Nadia and Samuel (act 4), two voices, one take. Nadia says « vous » to the visitor and « tu » to Samuel; the register change is audible and deliberate. The soudure « auquel » is read as one word, never as two.',
  'rec-b1-13-auquel': "The four à cards (act 4). One voice. Card two reads « à laquelle » as two clearly separate words, immediately after card one's single word « auquel », and that contrast IS the teaching.",
  'rec-b1-13-auquel-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. auquel, auxquels and auxquelles are all read as one word each; only « à laquelle » carries an audible join.',
  'rec-b1-13-piege-auquel': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The two-word versions in promptSound are never spoken.",
  'rec-b1-13-tiroir': 'Samuel and the coach (act 5), two voices, one take. The two opening lines share every word except the group carrying the de, so they must be read at the same speed and the same pitch.',
  'rec-b1-13-duquel': "The four de cards (act 5). One voice. Card one reads « dont » and card two reads « à côté duquel » about the SAME drawer, so the pair is recorded back to back in one take.",
  'rec-b1-13-duquel-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. The compound prepositions (à côté de, au bout de, près de) are read as single groups, with no pause before duquel.',
  'rec-b1-13-lettre': "The letter from the borough (act 6), one voice, one take, read as a formal document at an even pace. Each fixed block (la raison pour laquelle, les conditions dans lesquelles, le point sur lequel, grâce auquel) is one breath group, and no preposition is stressed.",
  'rec-b1-13-blocs': 'The four block cards (act 6). One voice. Every block is read whole, at speaking speed, never spelled out word by word: the card claims these are single units and the delivery has to agree.',
  'rec-b1-13-fil': "Nadia and the coach (act 7), two voices, one take. Nadia's first line names a noun and her third names none, and the two are read with exactly the same rhythm so the difference is grammatical rather than dramatic.",
  'rec-b1-13-ce': 'The four ce cards (act 7). One voice. Card three quotes lesson 11 and is read as a quotation. There is no pause between ce and the word that follows it, on any card.',
  'rec-b1-13-ce-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. Each line opens on the ce group, and ce qui and ce que are never separated by a pause.',
  'rec-b1-13-piege-ce': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The versions missing the ce are never spoken.",
  'rec-b1-13-dont-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. The mission asks the learner to hear which verb carries a de, so the verbs are not stressed and nothing marks them out.',
  'rec-b1-13-dont': 'The four ce dont cards (act 8). One voice. Card one and card two both open on « ce dont » and must sound identical up to the verb.',
  'rec-b1-13-caisse': 'Samuel and the coach (act 9), two voices, one take. Samuel drops the ce in his first line and it is read naturally, without hesitation: he believes it is correct.',
  'rec-b1-13-tout': 'The four tout cards (act 9). One voice. « tout ce qui » is read as three quick syllables in one group, never as tout, pause, ce qui.',
  'rec-b1-13-tout-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. Every tout ce group is one breath, and the learner answers on what follows the gap.',
  'rec-b1-13-piege-tout': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The versions without the ce are never spoken.",
  'rec-b1-13-message': "Samuel's message to the group (act 10), one voice, one take, read as somebody reading a message aloud. THE COMMAS ARE AUDIBLE: each « , ce qui » opens with a real pause on the comma, which is the only thing that separates it from a clause attached to a noun.",
  'rec-b1-13-virgule': 'The four comma cards (act 10). One voice. Cards one and two hold nearly the same words and differ only in whether a noun sits in front of the gap, so they are recorded back to back in the same take.',
  'rec-b1-13-virgule-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. Every comma before a ce group is a real pause. Nothing else in the line is stressed.',
  'rec-b1-13-fiche': "The model repair card (act 11), one voice, read as somebody reading a public notice aloud rather than performing it. The heading is read once, then a clear break. Every preposition plus lequel group stays joined, and the two ce openings keep their comma pause.",
};

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 13',
  intro: 'You can already join two sentences about the same thing with qui and que. What stops you now is everything those two words cannot reach: the tool you worked with, the room you walked through, the reason you came, and the thing that worries you which no noun in your sentence names at all. This lesson gives you the rest of the family, and one look that tells you which of them you need.',
  skill: 'PE',
  grammarAssumed: [PREPOSITIONS_UNIT, LIEU_UNIT, QUI_QUE_UNIT, DONT_OU_UNIT],
  grammarIntroduced: [
    'lequel, laquelle, lesquels and lesquelles as the relative pronoun used after a preposition, agreeing with the antecedent',
    'The fronted preposition: French moves avec, sur, dans and pour in front of the relative pronoun where English strands them at the end of the clause',
    'The contraction of à with lequel: auquel, auxquels, auxquelles, and the feminine singular à laquelle that does not contract',
    'The contraction of de with lequel: duquel, desquels, desquelles, and the feminine singular de laquelle that does not contract',
    'The division of labour between dont and duquel: a lone de takes dont, and a de closing a compound preposition takes duquel',
    'The fixed blocks la raison pour laquelle, les conditions dans lesquelles, le point sur lequel and grâce auquel',
    'ce qui and ce que as the relative with no nominal antecedent, where the thing referred to is an idea rather than a noun',
    'ce dont, for a clause whose verb or adjective governs de',
    'tout ce qui, tout ce que and tout ce dont, and the obligatory ce that English has no word for',
    'The sentence-level relative after a comma: ce qui, ce que and ce dont picking up a whole preceding clause',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais déjà coller deux phrases avec qui et que. Ce qui te bloque maintenant, c'est tout ce que ces deux mots n'atteignent pas : l'outil avec lequel tu as travaillé, la raison pour laquelle tu es venu, et la chose qui t'inquiète sans qu'aucun nom la désigne. Cette leçon te donne le reste de la famille, et un seul regard qui te dit lequel il te faut.",
    minutes: 130,
    difficulty: 4,
    glyph: 'quel',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: LEQUEL_CE_QUI_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 2,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Paul, 2026-09-22: every `say` is French and spoken by a fr-FR voice.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** The lesson as the CURRENT validators accept it: the draft `task` removed
 *  from `sections` and from every act. */
export function lessonWithoutTask(): Lesson {
  const isTask = (s: DraftSection): s is TaskSection => s.type === 'task';
  const taskIds = new Set(LESSON.sections.filter(isTask).map((s) => s.id));
  return {
    ...LESSON,
    sections: LESSON.sections.filter((s): s is LessonSection => !isTask(s)),
    acts: LESSON.acts?.map((a) => ({
      ...a,
      sections: a.sections.filter((id) => !taskIds.has(id)),
      restPoints: a.restPoints?.filter((rp) => !taskIds.has(rp.split('/')[0])),
    })),
  };
}

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, READING_ATELIER, READING_LETTRE, READING_MESSAGE, READING_FICHE, dicteeFor };
