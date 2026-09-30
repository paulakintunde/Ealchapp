// b2.32.l1 « Le verlan et l’argot d’aujourd’hui » · the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md in the VOCAB SHAPE of
// B1-WORKSHOP-AND-VOCAB-SHAPES.md (§2, with the register rules of §1.2),
// under the B2 rules of b2/B2-BUILD-LOG.md. No new section types.
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema, so the lesson validates with it in place (as b2.16 to b2.30 do).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   VOCAB rhythm per act 2 to 10: MEET the items in use (a listening at
//   natural speed, a reading, a story), LEARN them (cardDeck, tapTable,
//   examples: the slang line beside its neutral twin, the rung on the
//   eyebrow), TELL THEM APART (groupDrill: meaning, source, rung), TRAP the
//   right word in the wrong place (trapDrill stepped, or commonErrors), USE
//   the judgement (« À toi : … », pick the line for THIS listener), then
//   from act 3 on a 60 to 120 word text (« Dans un texte »: a film dialogue,
//   a group message, a podcast transcript, a comment section, a forum, a
//   chat, two versions of one message), then the gated act check.
//
//    1  L’échelle                        7   the wrong rung; keufs / flics / police / forces de l’ordre
//    2  Le verlan                        7   syllables by sound; laisse béton, ouf, relou, chelou, zarbi (tapTable)
//    3  Les verlans qui sont restés      7   teuf, meuf, vénère; reum, keuf; feumeu; beur / rebeu named with care
//    4  Couper les mots                  7   appart, resto, ado, dispo, prof, ciné; métro, vélo, photo
//    5  Changer la fin                   7   -os, -oche (same meaning, lower rung), -ard (scorn)
//    6  Les mots venus d’ailleurs        7   kiffer, le seum, le bled, wesh, zarma, chiller, la go
//    7  Les intensifs et les tics        7   trop, grave, de ouf, c’est chaud, genre, en mode (tapTable)
//    8  Ce qui date, ce qui dure         7   de la balle, chanmé; en PLS, ça passe crème, c’est carré; relou lasts
//    9  Les textos                       7   mdr, ptdr, jsp, tkt, oklm, jpp; the ne that comes back in writing
//   10  Traduire vers le neutre          7   keep the meaning, change the outfit, soften; what is not said (tapTable)
//   11  À toi d’écrire                  11   model, plan, uses, phone call, TASK, practice, cheat, quiz
//
//   TOTAL 81 missions, 11 acts (7 x 10 + 11). Texts: three readings of 200
//   to 350 words (two magazine pages, the model), eight act texts of 60 to
//   120 words, one texting thread, four hideLines listenings (a podcast, a
//   voice message, a concert debrief at natural speed, an interview
//   rehearsal), three stories, one scene, one role play. Corpus: 200
//   authored rows (.1000-.1199) plus 33 reused seed rows, released act by act
//   through `deckTranche`. Quiz: 11 rounds of 8 (one per act 2 to 10, an
//   exam round in DELF B2 and TCF format, a recycling round citing B1 and B2
//   lessons by position). Eleven triggers, eleven drills, four sheets, ten
//   terms. Three tapTables (acts 2, 7, 10).
//   Chapter artwork: `verlan-argot-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Comprends jusqu’en bas de l’échelle, parle à la hauteur de qui t’écoute. »
//   EN: Understand all the way down the ladder; speak at the level of
//   whoever is listening.
//
//   ONE METAPHOR, L’ÉCHELLE (every chapter image holds a slim ochre ladder):
//   four rungs, argotique, familier, courant, soutenu. Down to understand,
//   at the listener's rung to speak or write. It is NOT « slang is wrong »
//   (lesson 25 in B1: no register is wrong) and NOT « speak like the young »
//   (act 8: the adult who forces). Rejected candidates: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    recognition of verlan (and re-verlan), clipping, resuffixation,
//           borrowings, intensifiers and fillers, recent and dated slang,
//           texting abbreviations; the fourth rung (argotique) below
//           familier; judgement of who can say what to whom; conversion
//           into neutral French, with softening; how to NOT use a word you
//           are unsure of.
//   QUOTES  lesson 25 in B1 (the three registers, the textos, reused by id);
//           the reframes of lessons 20, 25, 26, 28, 38 and 39 in B1 and of
//           lessons 21 and 22 in B2, re-exported from their corpus files.
//   LEAVES  regional slang (Québec, Belgium, Africa) to lesson 31 in B2,
//           named in act 1 and in the sheet; calques and translation nuance
//           to lesson 33 in B2 (named in the roundup); insults, slurs and
//           sexual slang to nobody: named as existing, never listed.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English authored on every learner
//   string (an `en` field or a final `EN: `), never on an answer. tu in
//   every instruction; the manager, the teacher and the secretary get vous.
//   Every `say` is French. No spaced « ? » or « ! » in any scene or story
//   bubble. The scenario uses ’ only and embeds no seed row. Lessons cited
//   by trail position in words, never by raw id. Mission answer slots
//   spread by `spreadMissions()`, the quiz by `spreadSlots()` (no text
//   changes, no `why` names a position). RECOGNITION FIRST: slang rows carry
//   no voiceflash, the speak mission names courant and soutenu rows only,
//   no quiz item asks the learner to PRODUCE slang, and every errorSpot
//   tests register choice (a slang word in the wrong place), never slang
//   spelling. Gate B2-2 spoken-variant line: the dropped ne is spoken
//   French, not an error, and comes back in writing.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE FACT CHECK: corpus §A.9 lists every item with its rung and
//      meaning, §A.10 the twelve factual claims (verlan < l’envers,
//      Renaud 1977, métro < métropolitain, the Arabic, English and Ivorian
//      origins, PLS, oklm around 2014, « c’est de la balle » late 1990s).
//   2. BEUR / REBEU: shown ONCE (a3-construire, sheet-verlan) as the
//      textbook example of re-verlanisation, with the line that words
//      naming people by their origin are sensitive and not for the learner;
//      the mechanism is practised on meuf → feumeu. REVIEW 2026-09-30: KEPT,
//      with a dated / can-hurt note on .1054 and in the sheet (not a slur;
//      the textbook case of re-verlan; recognition only).
//   3. DB-ONLY HEADWORDS: relou, meuf, wesh, kiffer, c’est chaud and about
//      60 more exist in Postgres (verlan, argot-des-jeunes, expressions-
//      argot) but not in the seed, so `src()` cannot import them. They are
//      taught inside sentences, and no row twins them. Should the import
//      link the sentences to those published headwords?
//   4. REGISTER FIELD: the schema has three values; argotique rows are
//      register 'familier' + tag 'argotique'. A fourth value is a schema
//      change, not proposed here.
//   5. TEXTOS AND TTS: the thread in act 9 (a9-fil) is read aloud by TTS,
//      which will spell « slt » and « mdr » as letters. The studio brief
//      says so; recognition works on the written line anyway.
//   6. « PTDR » is glossed « pété de rire » (Wiktionnaire). « Pété » is
//      familier, not vulgar. Keep the gloss?
//   7. THE TASK: 200 to 250 words counting the email body AND the three-line
//      note (DELF B2 PE, register mediation); five criteria (tâche 3,
//      cohérence 3, étendue 2, correction 2, registre 2 = 12). `skill` 'PE'.
//   8. The lesson cites lessons 31 and 33 in B2 (written in parallel):
//      act 1 and the sheet name 31 for regional slang, the roundup names 33
//      as next. They publish together or those lines wait.
//   9. Act 4's voice message is seven lines (the playbook asks 8 to 14 for
//      B1 listenings); the id block is full, so no eighth row. Accept?
//  10. `Lesson.version` 1. 'coach-fr-FR' is inert; kept. Eleven openers
//      need art (ART_PENDING until Paul's images land).

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  ARTICLE_A1, ARTICLE_A6, MODELE_TEXT, FIL_A9, FIL_TACHE, TASK_MODEL,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10,
  REGISTRES_UNIT, TUVOUS_UNIT, COURRIELS_UNIT, NEGATION_B1_UNIT, NEGATIONS_B2_UNIT,
  NEGATION_B1_REF, REGISTRES_REF, TUVOUS_REF, CORPS_REF, ANIMAUX_REF, COULEURS_REF, ECOUTE_REF,
  COURRIELS_REF, NEGATIONS_B2_REF, STYLE_REF, REGIONAL_REF, TRADUIRE_REF,
  REGISTRES_REF_EN, TUVOUS_REF_EN, COURRIELS_REF_EN, NEGATIONS_B2_REF_EN, REGIONAL_REF_EN,
  B125_REFRAME, B125_REFRAME_EN, B126_REFRAME, B126_REFRAME_EN, B128_REFRAME, B128_REFRAME_EN,
  B120_REFRAME, B120_REFRAME_EN, B138_REFRAME, B138_REFRAME_EN, B139_REFRAME, B139_REFRAME_EN,
  B221_REFRAME, B221_REFRAME_EN, B222_REFRAME, B222_REFRAME_EN,
} from './verlan-argot-corpus.ts';
import { VERLAN_ARGOT_TERMS } from './verlan-argot-terms.ts';

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
  if (!r) throw new Error(`b2.32: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

/** The imports are typed by hand in the corpus; hold them to the seed. */
for (const id of IMPORT_IDS) {
  const d = SEED.get(id)?.drills ?? [];
  if (!SEED.has(id)) throw new Error(`b2.32: import ${id} is not in the seed`);
  if (!NOT_SPEAKABLE.includes(id) && !d.includes('voiceflash')) throw new Error(`b2.32: ${id} has no voiceflash but is not in NOT_SPEAKABLE`);
  if (!NOT_DECK_ABLE.includes(id) && !d.includes('flashcard')) throw new Error(`b2.32: ${id} has no flashcard but is not in NOT_DECK_ABLE`);
}

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.32: no ipa on ${id}`);
  return r.ipa;
}
/** The AUTHORED row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`b2.32: no authored respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
/** A quotation with no corpus row (a slang line in the wrong place, shown as such). */
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

/** A trap card: the WRONG-PLACE version in promptSound (never spoken), the
 *  row's neutral French in fr. */
const trap = (id: string, promptLabel: string, promptSound: string, tip: string): TrapCard =>
  ({ promptLabel, promptSound, fr: fr(id), ipa: ipaOf(id), tip });

const STEPS = (ruleTitle: string, cardsTitle: string): TrapStep[] => [
  { label: 'La règle', kind: 'rule', title: ruleTitle },
  { label: 'Six cartes', kind: 'cards', title: cardsTitle },
  { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases au bon barreau' },
  { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
];

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** THE « IN A TEXT » BEAT that closes acts 3 to 10: one text of 60 to 120
 *  words, with the answers behind the modal. Same title every time. */
function dansUnTexte(
  id: string, frSub: string, text: string, questions: { q: string; a: string }[], rec: string, terms: string[],
): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true,
    title: 'Dans un texte', frSub, text, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

/** The « use it » beat: pick the line for THIS listener. Same title shape. */
function aToi(id: string, title: string, groups: SoundGroup[], terms: string[], sheetId?: string): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: `À toi : ${title}`,
    groups, audio: AUDIO, say: REFRAME, terms, ...(sheetId ? { sheetId } : {}),
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 · L’ÉCHELLE
 *
 *  The problem: « relou » is a real word, and the right one with Yanis; with
 *  the bookshop manager it creates distance. The ladder, the fourth rung,
 *  the scope (France; Québec, Belgium and Africa have their own). The task
 *  is announced. NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Un mot de trop à la librairie',
  frSub: 'Samedi matin, à la Croix-Rousse',
  setting: { place: 'La librairie « La Page », sur les pentes de la Croix-Rousse', city: 'Lyon', time: 'samedi, 10 h 05', ambience: 'des cartons de livres dans l’entrée, la caisse, la pluie sur la vitrine' },
  beats: [
    {
      kind: 'narration',
      text: 'Lyon, un samedi matin. Tu travailles le week-end dans une petite librairie. Hier soir, ton colocataire Yanis t’a appris un mot qu’il répète sans arrêt : relou. Ce matin, les cartons de nouveautés sont encore dans l’entrée.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mme Roche, la responsable',
      fr: 'Bonjour. Les nouveautés ne sont toujours pas en rayon, je vois.',
      en: 'Good morning. The new books still aren’t on the shelves, I see.',
      respell: '[bohⁿ-ZHOOR | lay noo-voh-TAY | nuh sohⁿ too-zhoor pa ahⁿ reh-YOHⁿ | zhuh VWA]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: fr(E(1000)), en: en(E(1000)), respell: rsOf(E(1000)),
      stage: 'Le mot sort tout seul. Mme Roche lève les yeux de son écran.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mme Roche, la responsable',
      fr: 'Relou… Mon fils de seize ans dit ça.',
      en: 'Relou… My sixteen-year-old son says that.',
      respell: '[ruh-LOO | mohⁿ FEESS | duh seh-ZAHⁿ | dee SA]',
      stage: 'Elle sourit, mais elle a l’air surprise.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase dire à ta responsable.',
      size: 'lg',
      options: [
        { fr: fr(E(1000)), respell: rsOf(E(1000)), en: en(E(1000)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1001)), respell: rsOf(E(1001)), en: en(E(1001)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Mme Roche hoche la tête : un retard de livraison, ça arrive. Elle t’aide à ouvrir les cartons.',
        breaks: 'Elle sourit poliment, mais tu sens la distance : tu lui as parlé comme à un copain de ton âge.',
      },
    },
    {
      kind: 'break',
      heading: 'Le mot était juste, pas pour elle',
      body: 'Relou est un vrai mot, compris de presque tous. Mais c’est un mot entre amis : avec ta responsable, il crée de la distance au lieu d’en enlever. Même sens, autre barreau : pénible. EN: The word was right, the listener was wrong for it.',
      wrong: { fr: fr(E(1000)), ipa: ipaOf(E(1000)), respell: rsOf(E(1000)), en: en(E(1000)) },
      right: { fr: fr(E(1001)), ipa: ipaOf(E(1001)), respell: rsOf(E(1001)), en: en(E(1001)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: 'Cette leçon t’apprend à comprendre l’argot d’aujourd’hui (le verlan, les mots coupés, les emprunts, les textos) et à juger quand ne pas l’employer. À la fin, tu réécris un fil de messages plein d’argot en courriel neutre, comme au DELF B2.',
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['echelle'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Placer un mot sur l’échelle', s: 'Acte 1 : argotique, familier, courant, soutenu' },
    { t: 'Reconnaître comment l’argot se fabrique', s: 'Actes 2 à 6 : le verlan, les mots coupés, les nouvelles fins, les emprunts' },
    { t: 'Juger ce qui passe, ce qui date, ce qui blesse', s: 'Actes 7 à 10 : les intensifs, les mots datés, les textos, le neutre' },
    { t: 'Réécrire un fil de messages en courriel neutre', s: 'Acte 11 : 200 à 250 mots, au format du DELF B2' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the magazine page. B2 question types labelled. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'L’argot, une langue à étages',
  frSub: 'Lis, et cherche la règle que le magazine donne aux apprenants',
  text: ARTICLE_A1,
  glossary: [
    { word: 'saisis', en: 'catch, grasp', note: 'Saisir un mot : le comprendre au vol.' },
    { word: 'étage', en: 'floor, level', note: 'Ici, un niveau de la langue, un barreau de l’échelle.' },
  ],
  questions: [
    { q: 'Global : à qui s’adresse cet article, et pour quoi faire ?', a: 'À quelqu’un qui apprend le français : il explique les registres comme une échelle et donne une règle pour l’argot.' },
    { q: 'Détail : quels sont les quatre barreaux, du haut vers le bas ?', a: 'Le soutenu, le courant, le familier, puis l’argot.' },
    { q: 'Inférence : pourquoi l’article dit-il que l’argot est « souvent fait pour que les autres ne comprennent pas » ?', a: 'Parce qu’un groupe s’en sert pour se reconnaître et se protéger : ne pas comprendre, c’est ne pas en faire partie.' },
    { q: 'Point de vue : l’auteur juge-t-il l’argot ? Comment le sais-tu ?', a: 'Non : « l’argot n’est pas une faute ». Il demande seulement de comprendre beaucoup et d’employer peu, là où le mot a sa place.' },
  ],
  audio: REC('rec-b2-32-article-echelle'),
  say: REFRAME,
  terms: ['echelle', 'sensible'],
};

const A1_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-echelle',
  title: 'Quatre barreaux, un même fait',
  frSub: 'La police est arrivée, à tous les étages',
  hint: 'Quatre cartes : le fait ne bouge pas, le mot change avec la personne.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['echelle'],
  cards: [
    card(E(1002), 'Tout en bas', 'argotique',
      'Keuf, le verlan de flic : un mot de groupe, souvent hostile. Tu le comprends ; tu ne le dis pas. EN: slang, often hostile; understand it, do not say it.'),
    card(E(1003), 'Entre proches', 'familier',
      `Flic : tout le monde le comprend et le dit entre amis. ${Cap(REGISTRES_REF)} t’a donné ce barreau. EN: informal, understood by all.`),
    card(E(1004), 'Partout', 'courant',
      'La police : le mot qui va partout, à l’oral comme à l’écrit. EN: standard, fine anywhere.'),
    card(E(1005), 'En haut', 'soutenu',
      'Les forces de l’ordre : le mot d’un communiqué ou d’un discours officiel. EN: formal, official.'),
  ],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Du bas vers le haut',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le même fait, quatre barreaux', [
      it(E(1002), 'argotique'),
      it(E(1003), 'familier'),
      it(E(1004), 'courant'),
      it(E(1005), 'soutenu'),
    ], chk('Ces quatre phrases disent-elles la même chose ?',
      ['Oui : seul le registre change.', 'Non : chacune parle d’une autre police.'], 0,
      'Le fait est le même : la police est arrivée. Le mot dit qui parle, et à qui. EN: same fact, different rung.')),
    grp(`Le rappel de ${REGISTRES_REF}`, [
      it('fr.b1.langue-soignee.1235', 'le familier'),
      it('fr.b1.langue-soignee.1236', 'le courant'),
      it('fr.b1.langue-soignee.1237', 'le soutenu'),
      it(E(1007), 'le barreau ajouté ici'),
    ], chk('Qu’ajoute cette leçon à l’échelle que tu connais ?',
      ['un barreau sous le familier : l’argot', 'un barreau au-dessus du soutenu', 'rien : elle reprend les trois registres'], 0,
      'L’argot, les mots d’un groupe, sous le familier. EN: the rung below familier.')),
    ctl('Le principe', 'Tu comprends un mot d’argot. Tu dois donc…',
      ['le comprendre, sans forcément le dire', 'l’employer pour montrer tes progrès'], 0,
      'Comprendre un mot n’oblige pas à le dire. EN: understanding is not saying.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echelle'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où le barreau compte',
  cases: [
    uc('Ta responsable demande pourquoi les cartons attendent', E(1001)),
    uc('Tu entends un mot que tu ne connais pas', E(1013)),
    uc('Un ami t’apprend un mot que tu ne diras pas', E(1012)),
    uc('Tu racontes l’incident à ta voisine âgée', E(1004)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echelle'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le barreau', 'À ta responsable, pour un livreur en retard :',
    ['C’est pénible : le livreur est arrivé très en retard.', 'C’est relou, le livreur est arrivé super tard.'], 0,
    'Même fait, bon barreau. EN: same fact, right rung.'),
  ctl('L’échelle', 'Les keufs, les flics, la police, les forces de l’ordre : lequel va partout ?',
    ['la police', 'les flics', 'les forces de l’ordre'], 0,
    'Le courant va partout ; le soutenu est plus officiel, le familier reste entre proches. EN: the standard word.'),
  ctl('La portée', 'Cette leçon parle surtout…',
    ['de l’argot de France', 'de l’argot du Québec', 'de tous les argots du monde'], 0,
    `Le Québec, la Belgique et l’Afrique ont le leur : ${REGIONAL_REF} en parle. EN: France mostly.`),
], ['echelle']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'L’échelle',
    opener: {
      line: 'Un samedi, une librairie et un mot de trop : ici tu découvres les quatre barreaux de l’échelle, et pour qui chacun est fait. EN: A Saturday, a bookshop and one word too many: here you discover the four rungs of the ladder, and who each is for.',
      imageRef: 'lessons/verlan-argot/act01.jpg',
    },
    sections: [],
    milestone: 'Tu places un même fait sur quatre barreaux et tu choisis celui de la personne qui t’écoute. EN: You place one fact on four rungs and choose the listener’s rung.',
    estScreens: 38, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_CARTES, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 · LE VERLAN
 *
 *  A podcast explains the recipe: syllables inverted by SOUND, the added
 *  « e » of one-syllable words, fou → ouf reversed sound by sound. Five
 *  verlans and their neutral twins; « Ouf » the interjection is not « ouf »
 *  the verlan. Trap: the right word at the wrong rung.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Les mots de la rue, épisode 3',
  frSub: 'Écoute la recette, puis réponds',
  lines: [
    ln(E(1017)), ln(E(1018)), ln(E(1019)), ln(E(1020)), ln(E(1021)), ln(E(1022)),
    ln(E(1023)), ln(E(1024)), ln(E(1025)), ln(E(1026)), ln(E(1027)),
  ],
  questions: [
    { q: 'D’où vient le mot verlan ?', opts: ['de l’envers', 'd’un chanteur des années soixante-dix', 'du mot vertical'], correct: 0, why: 'L’envers, retourné : verlan. EN: from l’envers.' },
    { q: 'D’après l’animateur, qu’est-ce qu’on inverse ?', opts: ['les sons', 'les lettres'], correct: 0, why: 'Les sons : c’est pourquoi l’orthographe varie. EN: the sounds.' },
    { q: 'Quel mot d’origine donne chelou ?', opts: ['louche', 'loup', 'chaud'], correct: 0, why: 'Lou-che, retourné : che-lou. EN: louche.' },
    { q: 'Que fait-on souvent avant d’inverser un mot d’une syllabe ?', opts: ['on ajoute un petit e', 'on enlève la dernière lettre'], correct: 0, why: 'Lourd, lou-re, re-lou. EN: a little e is added.' },
    { q: 'Quelle est la dernière idée de l’épisode ?', opts: ['comprendre un mot ne dit pas quand l’employer', 'il faut employer le verlan le plus souvent possible', 'le verlan a disparu'], correct: 0, why: 'Comprendre, puis juger. EN: understanding is not knowing when.' },
  ],
  audio: REC('rec-b2-32-podcast-verlan'),
  say: REFRAME,
  terms: ['verlan'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Cinq verlans que tout le monde comprend',
  frSub: 'Le mot, sa source, son barreau',
  hint: 'Cinq cartes : sur chacune, le mot d’origine et le registre.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['verlan', 'date'],
  cards: [
    card(E(1028), 'Laisse tomber', 'familier, daté',
      'Tomber, retourné, donne béton. Une chanson de Renaud l’a rendu célèbre en 1977 ; tout le monde le connaît, peu le disent encore. EN: forget it; famous, dated.'),
    card(E(1029), 'Fou', 'familier',
      'Ouf, c’est fou retourné son par son. C’est ouf : c’est incroyable. EN: crazy, incredible.'),
    card(E(1030), 'Lourd', 'familier',
      'Lourd, au sens de pénible, donne relou. Très répandu entre amis, à tout âge. EN: tiresome, a pain.'),
    card(E(1031), 'Louche', 'familier',
      'Chelou : bizarre, un peu suspect. Un type chelou, une histoire chelou. EN: shady, weird.'),
    card(E(1032), 'Bizarre', 'familier, un peu daté',
      'Zarbi : bizarre. Compris de tous, mais il a un peu vieilli. EN: weird; a bit dated.'),
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le verlan et son neutre',
  groups: [
    grp('Le mot et son jumeau neutre', [
      it(E(1030), 'lourd, relou'),
      it(E(1033), 'le même sens, au neutre'),
      it(E(1031), 'louche, chelou'),
      it(E(1034), 'le même sens, au neutre'),
    ], chk('Relou et pénible : quelle différence ?',
      ['le registre : familier, puis courant', 'le sens : relou est plus fort'], 0,
      'Même sens, autre barreau. EN: same meaning, different rung.')),
    grp('Deux fois ouf', [
      it('fr.b1.emotions.1111', 'ouf : un soupir de soulagement'),
      it(E(1029), 'ouf : le verlan de fou'),
      it(E(1035), 'le verlan, au neutre'),
    ], chk('Dans « Ouf, j’ai eu mon train de justesse », ouf veut dire…',
      ['quel soulagement', 'c’est fou'], 0,
      'L’interjection ouf existait bien avant le verlan : on souffle, soulagé. EN: phew, not crazy.')),
    ctl('La recette', 'Pourquoi lourd donne relou, et pas « drelou » ?',
      ['On inverse les sons, et le d ne se prononce pas.', 'On inverse les lettres une à une.'], 0,
      'Le verlan travaille à l’oreille. EN: verlan works by ear.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verlan'],
};

const A2_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-tableau',
  layer: 'core',
  sheetId: 'sheet-verlan',
  title: 'Six verlans et leur neutre',
  cols: ['Verlan', 'Mot d’origine', 'Au neutre'],
  rows: [
    { cells: ['laisse béton', 'laisse tomber', 'laissons cela'], say: fr(E(1028)),
      detail: { title: 'Laisse béton', body: 'Familier et daté : tu le reconnais, tu le dis peu. En réunion : laissons cela de côté. EN: dated.', say: fr(E(1042)) } },
    { cells: ['ouf', 'fou', 'incroyable'], say: fr(E(1029)),
      detail: { title: 'Ouf', body: 'C’est ouf : c’est incroyable. Ne le confonds pas avec l’interjection de soulagement. EN: crazy, not phew.', say: fr(E(1035)) } },
    { cells: ['relou', 'lourd', 'pénible, exigeant'], say: fr(E(1030)),
      detail: { title: 'Relou', body: 'Pénible pour une chose ; exigeant, plus doux, pour une personne. EN: tiresome; demanding.', say: fr(E(1033)) } },
    { cells: ['chelou', 'louche', 'bizarre, suspect'], say: fr(E(1031)),
      detail: { title: 'Chelou', body: 'Un homme à l’air louche : précis, et poli. EN: suspicious-looking.', say: fr(E(1034)) } },
    { cells: ['zarbi', 'bizarre', 'étrange'], say: fr(E(1032)),
      detail: { title: 'Zarbi', body: 'Un peu daté. Au neutre, bizarre ou étrange. EN: a bit dated.', say: fr(E(1036)) } },
    { cells: ['vénère', 'énervé', 'très en colère'], say: fr(E(1045)),
      detail: { title: 'Vénère', body: 'É-ner-vé, retourné : vé-nère. Au travail : énervé, en colère. EN: furious.', say: fr(E(1050)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verlan'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: 'Le bon verlan, la mauvaise personne',
  rule: {
    title: 'Le bon mot, le mauvais barreau',
    body: 'Relou, chelou, ouf : tu les comprends, et ils vont bien entre amis. Adressés à une propriétaire, un agent ou un maire, ils font tache. Remonte d’un barreau : pénible, louche, incroyable. EN: Right word, wrong rung: climb one rung.',
  },
  cards: [
    trap(E(1039), 'à la propriétaire', 'Madame, le bruit des voisins est devenu très relou.', 'Relou devient pénible : même plainte, bon barreau. EN: pénible.'),
    trap(E(1034), 'à un agent', 'Monsieur l’agent, il y a un type chelou devant l’immeuble.', 'Un homme à l’air louche : précis et poli. EN: suspicious-looking.'),
    trap(E(1035), 'au maire', 'Monsieur le maire, ce concert était ouf.', 'Incroyable : le même enthousiasme, sans verlan. EN: incroyable.'),
    trap(E(1040), 'à ta professeure', 'Madame, votre consigne est un peu zarbi.', 'Étrange, et me paraît : tu adoucis en montant. EN: étrange.'),
    trap(E(1041), 'à ta responsable', 'Le client de ce matin était relou avec ses questions.', 'Exigeant : tu décris sans juger. EN: demanding.'),
    trap(E(1042), 'en réunion', 'Laisse béton, on en reparlera demain.', 'Laissons cela de côté : le nous de la réunion. EN: let us leave it.'),
  ],
  drill: [
    { promptSay: 'À ta propriétaire : le bruit des voisins est devenu très … .', opts: ['pénible', 'relou'], correct: 0 },
    { promptSay: 'À un agent : il y a un homme à l’air … devant l’immeuble.', opts: ['louche', 'chelou'], correct: 0 },
    { promptSay: 'Au maire : ce concert était … .', opts: ['incroyable', 'ouf'], correct: 0 },
    { promptSay: 'À ta professeure : votre consigne me paraît un peu … .', opts: ['étrange', 'zarbi'], correct: 0 },
    { promptSay: 'À ta responsable : le client était très … .', opts: ['exigeant', 'relou'], correct: 0 },
    { promptSay: 'Chelou vient de … .', opts: ['louche', 'chaud'], correct: 0 },
    { promptSay: 'Relou vient de … .', opts: ['lourd', 'roulé'], correct: 0 },
    { promptSay: 'Dans « c’est ouf », ouf veut dire … .', opts: ['incroyable', 'quel soulagement'], correct: 0 },
  ],
  steps: STEPS('Le bon mot, le mauvais barreau', 'Ce que la phrase déplacée raconte'),
  audio: REC('rec-b2-32-piege-verlan'),
  say: REFRAME,
  terms: ['verlan', 'echelle'],
};

const A2_ATOI = aToi('a2-atoi', 'qui t’écoute', [
  ctl('Ton colocataire', 'Yanis te demande comment était le concert. Tu peux dire :',
    ['C’était incroyable, vraiment.', 'Ce concert fut remarquable.'], 0,
    'Avec un ami, le courant va très bien ; le passé simple sonnerait comme un roman. EN: with a friend, plain French is fine.'),
  ctl('Ta propriétaire', 'Tu te plains du bruit à ta propriétaire :',
    ['Le bruit des voisins est devenu très pénible.', 'Le bruit des voisins est devenu super relou.'], 0,
    'Une plainte à une propriétaire : le courant, et le vous. EN: standard French.'),
  ctl('Ta professeure', 'La consigne te paraît étrange. Tu écris :',
    ['Votre consigne me paraît un peu étrange.', 'Votre consigne est un peu zarbi.'], 0,
    'Me paraît adoucit ; zarbi est familier et daté. EN: soften, climb.'),
  ctl('Un voisin âgé', 'Dans le hall, un voisin âgé te demande ce qui se passe dehors :',
    ['Il y a un homme à l’air louche devant l’immeuble.', 'Y a un type chelou devant l’immeuble.'], 0,
    'Un inconnu âgé : le barreau courant, sans verlan. EN: standard for a stranger.'),
], ['verlan', 'echelle']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La recette', 'Le verlan inverse…',
    ['les sons que l’on entend', 'les lettres que l’on écrit'], 0,
    'Les sons : lourd, relou. EN: the sounds.'),
  ctl('Le sens', 'Chelou veut dire…',
    ['bizarre, suspect', 'chaud', 'pénible'], 0,
    'Chelou, de louche. EN: shady.'),
  ctl('Le barreau', 'À une professeure, relou devient…',
    ['pénible, ou exigeant', 'lourd'], 0,
    'Lourd, dans ce sens, est familier lui aussi. EN: pénible, exigeant.'),
], ['verlan']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Le verlan',
    opener: {
      line: 'Un podcast, une recette et des mots retournés : ici tu apprends comment le verlan se fabrique, à l’oreille. EN: A podcast, a recipe and words turned round: here you learn how verlan is made, by ear.',
      imageRef: 'lessons/verlan-argot/act02.jpg',
    },
    sections: [],
    milestone: 'Tu retrouves le mot d’origine d’un verlan, tu dis son barreau et tu donnes son jumeau neutre. EN: You find the source word of a verlan, name its rung and give its neutral twin.',
    estScreens: 42, restPoints: ['a2-construire', 'a2-piege'],
  },
  sections: [A2_ECOUTE, A2_CARTES, A2_CONSTRUIRE, A2_TABLEAU, A2_PIEGE, A2_ATOI, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 · LES VERLANS QUI SONT RESTÉS
 *
 *  Léa's voice message: teuf, meuf, vénère (familier), keuf (argotique),
 *  reum (argotique, in the cards). Re-verlan practised on meuf → feumeu;
 *  beur → rebeu shown ONCE, with the line that words naming people by
 *  their origin are sensitive. Errors of judgement: reum to a grandmother,
 *  keufs to an officer, meuf about a woman who is present.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'Le message vocal de Léa',
  frSub: 'Elle parle vite, et en verlan',
  setting: 'Léa, la sœur de Yanis, dix-sept ans, t’envoie un message vocal pour samedi. Tu l’écoutes dans le tram.',
  bubbles: [
    { from: 'narrator', fr: 'Le tram traverse le Rhône. Tu mets tes écouteurs et tu lances le message de Léa.', en: 'The tram crosses the Rhône. You put your earphones in and play Léa’s message.' },
    { from: 'coach', fr: fr(E(1043)), en: en(E(1043)), warn: 'teuf : fête' },
    { from: 'coach', fr: fr(E(1046)), en: en(E(1046)), warn: 'meuf : sa copine' },
    { from: 'coach', fr: fr(E(1047)), en: en(E(1047)), warn: 'keufs : argotique' },
    { from: 'narrator', fr: 'Puis Léa parle de sa mère, qui n’a pas encore dit oui.', en: 'Then Léa talks about her mother, who has not said yes yet.' },
    { from: 'coach', fr: fr(E(1045)), en: en(E(1045)), warn: 'vénère : très énervée' },
    { from: 'user', fr: 'Je comprends presque tout. Mais ces mots-là, je les garde pour moi.', en: 'I understand almost everything. But I will keep those words to myself.' },
    { from: 'narrator', fr: 'Le soir, tu racontes le message à Yanis, avec tes mots à toi.', en: 'In the evening you tell Yanis about the message, in your own words.' },
    { from: 'user', fr: 'Léa va à une fête chez Karim samedi, mais ta mère est très énervée.', en: 'Léa is going to a party at Karim’s on Saturday, but your mother is very annoyed.' },
  ],
  closing: { fr: 'Tu as tout compris, et tu as tout redit au bon barreau.', en: 'You understood everything and said it all again at the right rung.' },
  audio: REC('rec-b2-32-vocal-lea'),
  say: REFRAME,
  terms: ['verlan', 'sensible'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-verlan',
  title: 'Cinq verlans qui sont restés',
  frSub: 'Trois familiers, deux argotiques',
  hint: 'Cinq cartes. Regarde le barreau sur chacune.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['verlan', 'sensible'],
  cards: [
    card(E(1043), 'La fête', 'familier',
      'Teuf, de fête. Compris de presque tous, entre jeunes surtout. EN: party.'),
    card(E(1045), 'Énervé', 'familier',
      'Vénère, d’énervé : très en colère. Entre amis ; au travail, on dit énervé. EN: wound up, furious.'),
    card(E(1046), 'La femme, la copine', 'familier, à manier',
      'Meuf, de femme. Entre amis, il passe ; dit d’une femme présente, il peut la vexer. EN: woman, girlfriend; can offend.'),
    card(E(1044), 'La mère', 'argotique',
      'Reum, de mère : un mot de groupe. À tes grands-parents, dis ta mère, ou maman. EN: mum, group slang.'),
    card(E(1047), 'La police', 'argotique, hostile',
      'Keuf, de flic. Devant un policier, il sonne comme une provocation. EN: cop; hostile.'),
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Qui peut le dire, et à qui',
  groups: [
    grp('Entre amis, puis pour tous', [
      it(E(1043), 'entre amis'),
      it(E(1048), 'pour tous'),
      it(E(1045), 'entre amis'),
      it(E(1050), 'pour tous'),
    ], chk('Laquelle peux-tu dire à la mère de Léa ?',
      ['Samedi, nous organisons une fête chez Karim.', 'Samedi, on fait une teuf chez Karim.'], 0,
      'La mère d’une amie : le courant. EN: standard for a friend’s mother.')),
    grp('Le verlan du verlan', [
      it(E(1053), 'meuf, puis feumeu'),
      it(E(1054), 'à reconnaître, pas à dire'),
      it(E(1055), 'la règle'),
    ], chk('Tu entends rebeu dans un film. Tu…',
      ['le comprends, sans l’employer', 'l’emploies pour parler de tes amis'], 0,
      'Un mot qui désigne des gens par leur origine : à reconnaître, jamais à dire. EN: recognise it, never use it.')),
    ctl('Le barreau', 'Lequel reste le plus marqué, le plus « groupe » ?',
      ['reum', 'teuf', 'meuf'], 0,
      'Reum reste argotique ; teuf et meuf sont familiers. EN: reum.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verlan', 'sensible'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre verlans au mauvais endroit',
  errors: [
    { wrong: 'Chère Mamie, ma reum t’embrasse très fort.', right: 'Chère Mamie, maman t’embrasse très fort.',
      why: 'Normal : ta cousine le dit. Mais pour ta grand-mère, reum sonne comme un code de bande ; dis maman. EN: reum is group slang.' },
    { wrong: 'Bonjour Monsieur l’agent, les keufs sont déjà passés.', right: 'Bonjour Monsieur l’agent, vos collègues sont déjà passés.',
      why: 'Tu voulais être précis. Mais keuf, devant un policier, sonne comme une provocation. EN: hostile in front of the police.' },
    { wrong: 'Enchanté. C’est ta meuf, elle ?', right: 'Enchanté. Tu me présentes ta compagne ?',
      why: 'Karim le dit bien. Mais devant elle, le mot la réduit à un mot de copains ; demande plutôt son prénom. EN: ask her name.' },
    { wrong: 'Mon responsable était vénère ce matin.', right: 'Mon responsable était très contrarié ce matin.',
      why: 'Vénère décrit bien la colère, entre amis. Dans un message au service du personnel, contrarié est juste et mesuré. EN: contrarié, at work.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verlan', 'sensible'],
};

const A3_ATOI = aToi('a3-atoi', 'la bonne personne', [
  ctl('La mère de Léa', 'Elle demande où va sa fille samedi. Tu réponds :',
    ['À une fête chez Karim, je crois.', 'À une teuf chez Karim, je crois.'], 0,
    'Avec une mère inquiète, le courant rassure. EN: standard reassures.'),
  ctl('Karim', 'Karim te présente une jeune femme. Tu dis :',
    ['Bonjour. Karim m’a beaucoup parlé de toi.', 'Salut, t’es la meuf de Karim ?'], 0,
    'Tu parles à elle, pas d’elle : son prénom, pas un mot de copains. EN: talk to her.'),
  ctl('Un policier', 'Un policier te demande si tu as vu quelqu’un. Tu réponds :',
    ['Non, je n’ai vu personne, je regrette.', 'Non, et vos keufs non plus, ils ont rien vu.'], 0,
    'Keuf est hostile ; le vous et le neutre suffisent. EN: neutral and polite.'),
  ctl('Yanis', 'Yanis te demande comment va Léa. Tu peux dire, entre vous :',
    ['Elle est très énervée à cause du bus.', 'Votre sœur semble fort contrariée.'], 0,
    'Entre colocataires, le courant va bien ; le soutenu serait bizarre. EN: plain French with a friend.'),
], ['verlan', 'sensible']);

const A3_TEXTE = dansUnTexte('a3-texte', 'Un dialogue de film', TEXTE_A3, [
  { q: 'Quand Léa change-t-elle de registre, et pourquoi ?', a: 'Quand sa mère ne comprend pas « teuf », puis juste après « grave » : elle remonte vers le courant pour être comprise, et pour obtenir la permission.' },
  { q: 'Que veut dire « grave » dans sa réponse ?', a: 'Oui, tout à fait : un accord fort, familier. Elle le corrige tout de suite en « tout à fait ».' },
  { q: 'Pourquoi Léa dit-elle « sa copine » plutôt que « sa meuf » ?', a: 'Parce qu’elle parle à sa mère et veut la convaincre : elle choisit un mot plus neutre.' },
  { q: 'Point de vue : que pense la mère de la façon de parler de sa fille ?', a: 'Elle s’en amuse sans la juger : sa fille sait très bien parler autrement quand elle en a besoin.' },
], 'rec-b2-32-texte-a3', ['echelle', 'verlan']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le sens', 'La teuf, c’est…',
    ['la fête', 'la tête', 'la famille'], 0,
    'Teuf, de fête. EN: party.'),
  ctl('Le barreau', 'Reum et keuf sont…',
    ['argotiques : des mots de groupe', 'courants : des mots de tous'], 0,
    'Ils restent en bas de l’échelle. EN: slang.'),
  ctl('Le sensible', 'Un mot qui désigne des gens par leur origine :',
    ['tu le comprends, tu ne l’emploies pas', 'tu l’emploies si tes amis le font'], 0,
    'Reconnaître n’est pas dire. EN: recognise, do not use.'),
], ['verlan', 'sensible']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Les verlans qui sont restés',
    opener: {
      line: 'Un message vocal plein de teuf et de vénère : ici tu comprends les verlans du quotidien, et tu sais devant qui les laisser de côté. EN: A voice message full of teuf and vénère: here you understand everyday verlan, and know when to leave it aside.',
      imageRef: 'lessons/verlan-argot/act03.jpg',
    },
    sections: [],
    milestone: 'Tu comprends teuf, meuf, vénère, reum et keuf, tu dis leur barreau, et tu sais quand un mot vexe ou blesse. EN: You understand these verlans, name their rung, and know when a word offends.',
    estScreens: 40, restPoints: ['a3-construire', 'a3-atoi'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_ERREURS, A3_ATOI, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 · COUPER LES MOTS
 *
 *  Yanis's voice message: appart, ados, resto, dispo, exam, prof, sympa,
 *  ciné. The clippings that climbed (métro, vélo, photo) against those that
 *  stayed familier. Trap: the clipped word in a letter, a form, a report.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le message de Yanis',
  frSub: 'Écoute, et retrouve les mots entiers',
  lines: [
    ln(E(1061)), ln(E(1062)), ln(E(1063)), ln(E(1064)), ln(E(1065)), ln(E(1066)),
    ln('fr.b1.expressions-de-quantite.1159'),
  ],
  questions: [
    { q: 'Où est Yanis quand il laisse son message ?', opts: ['à l’appartement', 'au restaurant', 'à la gare'], correct: 0, why: 'L’appart : l’appartement. EN: at the flat.' },
    { q: 'Qui passe ce soir ?', opts: ['sa sœur et deux adolescentes', 'deux professeurs', 'ses parents'], correct: 0, why: 'Des ados : des adolescentes de dix-sept ans. EN: two teenagers.' },
    { q: 'Que propose Yanis vers huit heures ?', opts: ['d’aller manger au restaurant', 'de réviser ensemble', 'de ranger l’appartement'], correct: 0, why: 'Se faire un resto : aller au restaurant. EN: a meal out.' },
    { q: 'Pourquoi l’examen n’a-t-il plus lieu demain ?', opts: ['le professeur l’a reporté', 'Yanis l’a annulé'], correct: 0, why: 'Le prof a décalé le partiel à jeudi. EN: the lecturer moved it.' },
    { q: 'Dans ce message, dispo veut dire…', opts: ['libre', 'fatigué', 'pressé'], correct: 0, why: 'Dispo : disponible, libre. EN: free.' },
  ],
  audio: REC('rec-b2-32-vocal-yanis'),
  say: REFRAME,
  terms: ['troncation'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  sheetId: 'sheet-procedes',
  title: 'Couper la fin du mot',
  examples: [
    ex(E(1073), 'la règle : appartement, appart'),
    ex('fr.b1.recits-au-passe.880', 'ado : un adolescent'),
    ex('fr.b1.langue-soignee.1248', 'resto, et les potes : entre amis'),
    ex('fr.b1.langue-soignee.1249', 'la même soirée, au courant'),
    ex(E(1071), 'deux troncations qui ont réussi'),
    ex(E(1072), 'photo, métro, vélo : partout'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['troncation'],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le mot court, le mot entier',
  groups: [
    grp('Deux versions du même message', [
      it(E(1064), 'dispo, exam'),
      it(E(1068), 'les mots entiers'),
      it(E(1065), 'le prof, sympa'),
      it(E(1069), 'le professeur, reporté'),
    ], chk('Qu’est-ce qui change entre les deux versions ?',
      ['la longueur des mots, et donc le registre', 'le sens du message'], 0,
      'Le fait reste ; les mots coupés descendent d’un barreau. EN: same fact, lower rung.')),
    grp('Celles qui ont monté', [
      it('fr.a1.ecole.012', 'le prof : encore familier'),
      it(E(1071), 'métro, vélo : devenus courants'),
      it(E(1074), 'le nom du procédé'),
    ], chk('Lequel peux-tu écrire dans une lettre officielle ?',
      ['le métro', 'le resto', 'l’appart'], 0,
      'Métro a monté jusqu’au courant ; resto et appart sont restés familiers. EN: métro climbed.')),
    ctl('Le réflexe', 'Tu hésites sur un mot court dans un courriel formel. Tu…',
      ['écris le mot entier', 'gardes le mot court, c’est plus rapide'], 0,
      'Dans le doute, le mot entier ne se trompe jamais de barreau. EN: the full word is always safe.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['troncation'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Le mot coupé dans une lettre',
  rule: {
    title: 'À l’écrit formel, le mot entier',
    body: 'Dispo, appart, prof, ado, resto, sympa : à l’oral entre amis, ils sont naturels. Dans une lettre, un formulaire ou un rapport, ils sonnent pressés et familiers. Écris le mot entier. EN: In formal writing, use the full word.',
  },
  cards: [
    trap(E(1077), 'à une recruteuse', 'Madame, je suis dispo dès lundi prochain.', 'Dispo reste entre amis : disponible. EN: disponible.'),
    trap(E(1079), 'à une agence', 'Je souhaite visiter l’appart de la rue Garibaldi.', 'L’appartement, en entier. EN: appartement.'),
    trap(E(1069), 'au directeur des études', 'Le prof a décalé le partiel à jeudi.', 'Le professeur a reporté : deux mots remontent. EN: professeur, reporté.'),
    trap(E(1080), 'sur un formulaire', 'Mon fils est un ado de quinze ans.', 'Adolescent, dans un document. EN: adolescent.'),
    trap(E(1081), 'dans un rapport', 'L’équipe s’est fait un resto.', 'Déjeuner au restaurant : le verbe remonte aussi. EN: restaurant.'),
    trap(E(1082), 'à une cliente', 'Merci, madame, c’était très sympa de votre part.', 'Sympa est familier : aimable. EN: aimable.'),
  ],
  drill: [
    { promptSay: 'Dans une lettre de motivation : je suis … dès lundi.', opts: ['disponible', 'dispo'], correct: 0 },
    { promptSay: 'À l’agence : je souhaite visiter l’… .', opts: ['appartement', 'appart'], correct: 0 },
    { promptSay: 'Au directeur : le … a reporté l’examen.', opts: ['professeur', 'prof'], correct: 0 },
    { promptSay: 'Sur un formulaire : mon fils est un … .', opts: ['adolescent', 'ado'], correct: 0 },
    { promptSay: 'Dans un rapport : l’équipe a déjeuné au … .', opts: ['restaurant', 'resto'], correct: 0 },
    { promptSay: 'À une cliente : c’était très … de votre part.', opts: ['aimable', 'sympa'], correct: 0 },
    { promptSay: 'Partout : je prends le … pour venir.', opts: ['métro', 'métropolitain'], correct: 0 },
    { promptSay: 'Appart vient de … .', opts: ['appartement', 'appartenir'], correct: 0 },
  ],
  steps: STEPS('À l’écrit formel, le mot entier', 'Ce que le mot coupé laisse entendre'),
  audio: REC('rec-b2-32-piege-troncation'),
  say: REFRAME,
  terms: ['troncation'],
};

const A4_ATOI = aToi('a4-atoi', 'court ou entier', [
  ctl('Un texto à Yanis', 'Tu réponds à Yanis que tu es libre ce soir :',
    ['Oui, je suis libre ce soir.', 'Madame, je suis disponible ce soir.'], 0,
    'Entre colocataires, libre ou dispo ; le Madame n’a rien à faire là. EN: plain French with a friend.'),
  ctl('La recruteuse', 'Tu écris à une recruteuse :',
    ['Je suis disponible dès lundi prochain.', 'Je suis dispo dès lundi prochain.'], 0,
    'Le mot entier, à l’écrit formel. EN: the full word.'),
  ctl('Le métro', 'Dans une lettre à la mairie, tu écris :',
    ['Je viens en métro.', 'Je viens en chemin de fer métropolitain.'], 0,
    'Métro est devenu courant ; la forme longue sonnerait comme un livre d’histoire. EN: métro is standard.'),
  ctl('Le formulaire', 'Sur un formulaire d’inscription, la case « situation » :',
    ['étudiant', 'étudiant, dispo le soir'], 0,
    'Un formulaire veut l’information seule, en mots entiers. EN: the plain information.'),
], ['troncation']);

const A4_TEXTE = dansUnTexte('a4-texte', 'Le message de la coloc', TEXTE_A4, [
  { q: 'Trouve au moins six mots coupés et donne le mot entier.', a: 'Ados (adolescentes), appart (appartement), resto (restaurant), ciné (cinéma), dispo (disponible), proprio (propriétaire), prof (professeur). Coloc aussi : colocation.' },
  { q: 'Quels mots coupés garderais-tu dans un courriel au propriétaire ?', a: 'Aucun : dans un courriel au propriétaire, on écrit propriétaire, appartement, chauffe-eau, et on vouvoie.' },
  { q: 'Pourquoi Yanis peut-il écrire ainsi sur ce groupe ?', a: 'Parce qu’il écrit à ses colocataires : entre proches, les mots coupés sont naturels.' },
  { q: 'Point de vue : quel ton a le message ?', a: 'Amical et pratique : il informe, il demande un service, il remercie (« vous êtes top »).' },
], 'rec-b2-32-texte-a4', ['troncation']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le procédé', 'Appart, resto, dispo : c’est…',
    ['une troncation : on coupe la fin', 'du verlan : on inverse'], 0,
    'La troncation coupe. EN: clipping.'),
  ctl('Ce qui a monté', 'Lequel passe partout ?',
    ['la photo', 'l’appart', 'le resto'], 0,
    'Photo a monté jusqu’au courant. EN: photo is standard.'),
  ctl('L’écrit', 'Dans une lettre de motivation :',
    ['disponible', 'dispo'], 0,
    'Le mot entier. EN: the full word.'),
], ['troncation']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Couper les mots',
    opener: {
      line: 'Un message plein de mots coupés : ici tu retrouves le mot entier, et tu sais lesquels ont monté jusqu’au courant. EN: A message full of clipped words: here you find the full word, and learn which ones climbed to standard French.',
      imageRef: 'lessons/verlan-argot/act04.jpg',
    },
    sections: [],
    milestone: 'Tu rends le mot entier à une troncation et tu sais que photo, métro et vélo passent partout, pas resto ni dispo. EN: You restore clipped words and know which ones go anywhere.',
    estScreens: 40, restPoints: ['a4-construire', 'a4-atoi'],
  },
  sections: [A4_ECOUTE, A4_EXEMPLES, A4_CONSTRUIRE, A4_PIEGE, A4_ATOI, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 · CHANGER LA FIN
 *
 *  Saturday evening: rapidos, cinoche, valoche, calmos; a chauffard in the
 *  street. -os and -oche lower the rung and keep the meaning; -ard adds
 *  scorn. Errors: -ard read as praise, the suffixed word in writing.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Samedi, dix-neuf heures',
  frSub: 'Des mots qui changent de fin',
  setting: 'Léa et Yanis se préparent à sortir. Toi, tu écoutes, et tu repères les fins de mots.',
  bubbles: [
    { from: 'narrator', fr: 'Léa regarde l’heure, Yanis cherche ses clés.', en: 'Léa checks the time, Yanis looks for his keys.' },
    { from: 'coach', fr: fr(E(1085)), en: en(E(1085)), warn: 'rapidos, cinoche' },
    { from: 'coach', fr: fr(E(1087)), en: en(E(1087)), warn: 'flemmard : moqueur' },
    { from: 'user', fr: 'Rapidos, cinoche, valoche : le même mot, avec une autre fin.', en: 'Rapidos, cinoche, valoche: the same word, with another ending.' },
    { from: 'coach', fr: fr(E(1083)), en: en(E(1083)), warn: 'calmos : du calme' },
    { from: 'narrator', fr: 'Dans la rue, une voiture passe au rouge. Léa sursaute.', en: 'In the street a car goes through the red light. Léa jumps.' },
    { from: 'coach', fr: fr(E(1088)), en: en(E(1088)), warn: 'chauffard : jamais un compliment' },
    { from: 'user', fr: 'Chauffard, lui, je l’ai déjà entendu à la radio.', en: 'Chauffard, that one, I have already heard on the radio.' },
  ],
  closing: { fr: 'Une nouvelle fin fait descendre le mot d’un barreau ; une fin en -ard, en plus, se moque.', en: 'A new ending takes the word down a rung; an -ard ending mocks as well.' },
  audio: REC('rec-b2-32-samedi'),
  say: REFRAME,
  terms: ['suffixe'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-procedes',
  title: 'Trois fins, trois effets',
  frSub: '-os, -oche, -ard',
  hint: 'Cinq cartes : deux fins qui détendent, une qui se moque.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['suffixe'],
  cards: [
    card(E(1090), 'Du calme', 'familier, -os',
      'Calme et -os : calmos. Le sens reste, le ton se détend. EN: calm down, easy.'),
    card(E(1091), 'Sans se presser', 'familier, -os',
      'Tranquille et -os : tranquillos. Même famille que rapidos. EN: nice and easy.'),
    card(E(1092), 'Le cinéma', 'familier, -oche',
      'Cinéma et -oche : cinoche. Plus familier que ciné. Même fin : téloche, valoche. EN: the flicks.'),
    card(E(1094), 'Paresseux', 'familier, -ard',
      'La flemme et -ard : flemmard. Taquin entre proches, vexant devant les autres. EN: lazybones.'),
    card(E(1095), 'Un conducteur dangereux', 'péjoratif, -ard',
      'Chauffard : un mot qu’on entend partout, même aux informations, et toujours péjoratif. EN: reckless driver.'),
  ],
};

const A5_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-trier',
  layer: 'core',
  size: 'lg',
  title: 'Détendre ou se moquer',
  groups: [
    grp('-os et -oche : le registre descend', [
      it(E(1083), 'calmos'),
      it(E(1099), 'au neutre'),
      it(E(1086), 'la téloche'),
      it(E(1101), 'au neutre'),
    ], chk('Cinoche et cinéma : le sens change-t-il ?',
      ['non, seul le registre change', 'oui, un cinoche est un petit cinéma'], 0,
      'Même salle, même film : le mot descend d’un barreau. EN: same meaning.')),
    grp('-ard : la moquerie', [
      it(E(1087), 'flemmard'),
      it(E(1102), 'au neutre, et plus doux'),
      it(E(1089), 'froussard'),
      it(E(1088), 'chauffard'),
    ], chk('Quel mot en -ard peux-tu entendre aux informations ?',
      ['chauffard', 'flemmard', 'froussard'], 0,
      'Chauffard s’entend partout, même dans la presse ; les deux autres restent familiers et moqueurs. EN: chauffard is heard everywhere.')),
    ctl('Le suffixe', 'Tranquillos veut dire…',
      ['tranquillement', 'trop tranquille'], 0,
      'Tranquille et -os : sans se presser. EN: nice and easy.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suffixe'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre fins mal placées',
  errors: [
    { wrong: 'Mon voisin est un vrai chauffard : il conduit toujours prudemment.', right: 'Mon voisin est un bon conducteur : il conduit toujours prudemment.',
      why: 'Chauffard ressemble à chauffeur, d’où l’erreur. Mais -ard le rend péjoratif : un conducteur prudent n’en est jamais un. EN: -ard is never praise.' },
    { wrong: 'Désolé, je n’ai pas lu le dossier, je suis un peu flemmard.', right: 'Je n’ai pas encore lu le dossier : je m’y mets tout de suite.',
      why: 'Tu voulais être franc et léger. Mais à ton responsable, dis ce que tu fais, pas ton défaut. EN: say what you will do.' },
    { wrong: 'Dans ma rédaction : le soir, les familles regardent la téloche.', right: 'Dans ma rédaction : le soir, les familles regardent la télévision.',
      why: 'Téloche est compris de tous, et un peu daté. Une rédaction garde le mot entier. EN: télévision in an essay.' },
    { wrong: 'Madame, je rentre tranquillos, je vous rappelle demain.', right: 'Madame, je rentre tranquillement, je vous rappelle demain.',
      why: 'Tranquillos est gentil entre amis ; avec une cliente, garde l’adverbe. EN: tranquillement.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suffixe'],
};

const A5_ATOI = aToi('a5-atoi', 'la bonne fin', [
  ctl('À Léa', 'Léa s’inquiète : tu veux la rassurer, entre vous.',
    ['Du calme, on a le temps.', 'Veuillez garder votre calme, mademoiselle.'], 0,
    'Du calme, entre amis, suffit ; la seconde phrase est d’un agent de sécurité. EN: plain and friendly.'),
  ctl('Au travail', 'Ta responsable demande si tu as fini l’inventaire :',
    ['Pas encore, je le termine rapidement.', 'Pas encore, je le termine rapidos.'], 0,
    'Rapidement, au travail. EN: rapidement.'),
  ctl('Le sens', 'Ta grand-mère traite ton frère de froussard. Elle dit qu’il est…',
    ['peureux', 'courageux', 'fatigué'], 0,
    'Froussard : qui a la frousse, la peur. EN: a scaredy-cat.'),
  ctl('La radio', 'Aux informations, un chauffard, c’est…',
    ['un conducteur dangereux', 'un chauffeur de taxi'], 0,
    'Chauffard, péjoratif. EN: reckless driver.'),
], ['suffixe']);

const A5_TEXTE = dansUnTexte('a5-texte', 'Un podcast sur les fins de mots', TEXTE_A5, [
  { q: 'Qui a raison, d’après Julien Morel, et pourquoi ?', a: 'Tout le monde : téloche, télé et télévision disent la même chose, à trois barreaux différents.' },
  { q: 'Quelle différence fait-il entre la téloche et la télé ?', a: 'Téloche change la fin (-oche) et fait un peu daté ; télé est une troncation devenue presque courante.' },
  { q: 'Contre quel suffixe met-il en garde, et pourquoi ?', a: 'Contre -ard : flemmard, froussard, chauffard ne sont jamais des compliments.' },
  { q: 'Point de vue : comment l’animateur juge-t-il ces mots ?', a: 'Sans condamner : il décrit leur registre et leur place (« là, on reste entre copains »).' },
], 'rec-b2-32-texte-a5', ['suffixe']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('-oche', 'La valoche, c’est…',
    ['la valise', 'la voiture', 'la vallée'], 0,
    'Valise et -oche. EN: suitcase.'),
  ctl('-ard', 'Le suffixe -ard ajoute souvent…',
    ['de la moquerie ou du mépris', 'de la tendresse'], 0,
    'Flemmard, froussard, chauffard. EN: scorn.'),
  ctl('-os', 'Calmos, dans un courriel formel :',
    ['on écrit « restons calmes » ou on n’en parle pas', 'on le garde, il est gentil'], 0,
    'Le suffixe familier reste entre amis. EN: leave it for friends.'),
], ['suffixe']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Changer la fin',
    opener: {
      line: 'Rapidos, cinoche, flemmard : ici tu vois comment une nouvelle fin fait descendre un mot, et quand elle se moque. EN: Rapidos, cinoche, flemmard: here you see how a new ending lowers a word, and when it mocks.',
      imageRef: 'lessons/verlan-argot/act05.jpg',
    },
    sections: [],
    milestone: 'Tu retrouves le mot sous -os et -oche, et tu entends le mépris de -ard. EN: You find the word under -os and -oche, and hear the scorn in -ard.',
    estScreens: 40, restPoints: ['a5-trier', 'a5-atoi'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_TRIER, A5_ERREURS, A5_ATOI, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 · LES MOTS VENUS D’AILLEURS
 *
 *  A magazine page on borrowings: Arabic (kiffer, le seum, le bled, wesh,
 *  zarma), English (chiller, le crush), West African French (la go). A
 *  borrowing keeps the colour of the group that brought it: in a learner's
 *  mouth, wesh can sound like imitation.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'D’où viennent les mots des jeunes',
  frSub: 'Lis, et cherche le conseil des linguistes',
  text: ARTICLE_A6,
  glossary: [
    { word: 'se glisse', en: 'slips in', note: 'Se glisser : entrer discrètement.' },
    { word: 'figurent', en: 'appear, are listed', note: 'Figurer dans un dictionnaire : y avoir sa place.' },
  ],
  questions: [
    { q: 'Global : quelle est l’idée principale de l’article ?', a: 'Les mots des jeunes viennent de plusieurs langues ; il faut les comprendre, et réfléchir avant de les employer.' },
    { q: 'Détail : quelles langues l’article cite-t-il ?', a: 'L’arabe, surtout celui du Maghreb, l’anglais et le français d’Afrique, notamment de Côte d’Ivoire.' },
    { q: 'Inférence : pourquoi wesh sonne-t-il faux dans la bouche d’un touriste ?', a: 'Parce que le mot porte la marque d’un groupe : venant de quelqu’un d’extérieur, il peut sembler imiter, ou se moquer.' },
    { q: 'Point de vue : l’auteur conseille-t-il d’apprendre ces mots ?', a: 'Oui, pour comprendre ; mais il invite à réfléchir avant de les dire soi-même.' },
  ],
  audio: REC('rec-b2-32-article-emprunts'),
  say: REFRAME,
  terms: ['emprunt'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-procedes',
  title: 'Six mots venus d’ailleurs',
  frSub: 'Leur source, leur barreau, leur sens',
  hint: 'Six cartes : cinq de l’arabe, une du français d’Afrique.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['emprunt'],
  cards: [
    card(E(1103), 'Aimer beaucoup', 'familier, de l’arabe',
      'Kiffer : aimer beaucoup. Il figure dans les dictionnaires, avec la mention familier. EN: to love.'),
    card(E(1104), 'Déçu, frustré', 'familier, de l’arabe',
      'Avoir le seum : être déçu et frustré, après un match perdu ou un train raté. EN: gutted.'),
    card(E(1105), 'Le village d’origine', 'familier, de l’arabe',
      'Le bled : le village ou le pays d’origine. Un bled perdu, lui, est un coin isolé, dit avec moquerie. EN: home village.'),
    card(E(1107), 'Salut', 'argotique, de l’arabe',
      'Wesh : salut, entre amis d’un même groupe. Dans ta bouche, il risque de sonner comme une imitation. EN: yo.'),
    card(E(1108), 'Soi-disant', 'argotique, de l’arabe',
      'Zarma : on n’y croit pas. Il a fini, zarma : il prétend avoir fini. EN: yeah right.'),
    card(E(1109), 'La fille, la copine', 'argotique en France',
      'La go : la fille, la petite amie. Courant en Côte d’Ivoire et ailleurs en Afrique, arrivé en France par le rap. EN: girl, girlfriend.'),
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'La source et le neutre',
  groups: [
    grp('D’où ils viennent', [
      it(E(1118), 'de l’arabe'),
      it(E(1119), 'de l’anglais'),
      it(E(1120), 'du français d’Afrique'),
      it(E(1110), 'chiller, dans une phrase'),
    ], chk('Chiller vient…',
      ['de l’anglais', 'de l’arabe', 'du verlan'], 0,
      'To chill : se détendre. EN: from English.')),
    grp('Le mot et son neutre', [
      it(E(1103), 'kiffer'),
      it(E(1111), 'au neutre'),
      it(E(1108), 'zarma'),
      it(E(1115), 'au neutre'),
    ], chk('« Il a fini son mémoire, zarma. » La personne pense que…',
      ['ce n’est sans doute pas vrai', 'c’est vrai et impressionnant'], 0,
      'Zarma met en doute : soi-disant. EN: supposedly.')),
    ctl('Deux bleds', '« Je rentre au bled » et « un bled perdu » :',
      ['deux sens : le village d’origine, un coin isolé', 'le même sens, deux registres'], 0,
      'Le premier est tendre, le second moqueur. EN: two meanings.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['emprunt'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'L’emprunt qui sonne faux',
  rule: {
    title: 'Un emprunt garde sa couleur',
    body: 'Kiffer, le seum, wesh, zarma, la go : tu les comprends. Mais ils portent la couleur d’un groupe ; à l’écrit, en réunion ou devant les parents d’un ami, dis-le au registre courant. EN: Borrowings keep a group’s colour; use standard French.',
  },
  cards: [
    trap(E(1111), 'dans une critique écrite', 'Je kiffe cette chanson, je l’écoute en boucle.', 'À l’écrit, j’aime beaucoup. EN: j’aime beaucoup.'),
    trap(E(1112), 'à l’entraîneur', 'Il a le seum depuis la finale.', 'Très déçu : le même sentiment, sans argot. EN: disappointed.'),
    trap(E(1113), 'à ta directrice de stage', 'Cet été, je rentre au bled voir mes grands-parents.', 'Le village de mes grands-parents : clair pour tous. EN: my grandparents’ village.'),
    trap(E(1115), 'en réunion', 'Il a fini son mémoire, zarma.', 'Il prétend : tu gardes le doute, poliment. EN: he claims.'),
    trap(E(1116), 'à la mère de ton ami', 'Sa go l’attend devant la gare.', 'Sa petite amie : la go reste l’argot d’un groupe en France. EN: his girlfriend.'),
    trap(E(1114), 'à un camarade que tu connais peu', 'Wesh Yanis, bien ou quoi ?', 'Un salut simple suffit ; wesh, dans ta bouche, sonne comme une imitation. EN: a plain hello.'),
  ],
  drill: [
    { promptSay: 'Dans une critique écrite : j’… cette chanson.', opts: ['aime beaucoup', 'kiffe'], correct: 0 },
    { promptSay: 'À l’entraîneur : il est très … depuis la finale.', opts: ['déçu', 'seum'], correct: 0 },
    { promptSay: 'En réunion : il … avoir fini son mémoire.', opts: ['prétend', 'zarma'], correct: 0 },
    { promptSay: 'À la mère de ton ami : sa … l’attend devant la gare.', opts: ['petite amie', 'go'], correct: 0 },
    { promptSay: 'Kiffer vient … .', opts: ['de l’arabe', 'de l’anglais'], correct: 0 },
    { promptSay: 'Chiller vient … .', opts: ['de l’anglais', 'de l’arabe'], correct: 0 },
    { promptSay: 'Un bled perdu, c’est … .', opts: ['un coin isolé', 'le village d’origine'], correct: 0 },
    { promptSay: 'La go vient surtout du français … .', opts: ['de Côte d’Ivoire', 'du Québec'], correct: 0 },
  ],
  steps: STEPS('Un emprunt garde sa couleur', 'Ce que l’emprunt dit de toi'),
  audio: REC('rec-b2-32-piege-emprunts'),
  say: REFRAME,
  terms: ['emprunt'],
};

const A6_ATOI = aToi('a6-atoi', 'comprendre, puis choisir', [
  ctl('Le seum', 'Ton ami te dit : « J’ai le seum, j’ai raté mon train. » Il est…',
    ['déçu et frustré', 'malade', 'en retard, mais content'], 0,
    'Avoir le seum : être déçu. EN: gutted.'),
  ctl('La critique', 'Tu écris une critique pour le journal de l’université :',
    ['J’ai beaucoup aimé ce film.', 'J’ai kiffé ce film.'], 0,
    'À l’écrit, j’ai beaucoup aimé. EN: plain French in writing.'),
  ctl('Le salut', 'Un camarade que tu connais peu te dit wesh. Tu réponds :',
    ['Salut, ça va ?', 'Wesh, bien ou quoi ?'], 0,
    'Tu comprends son salut ; tu réponds avec le tien, sans imiter. EN: answer in your own words.'),
  ctl('Zarma', '« Il a arrêté les réseaux sociaux, zarma. » Tu comprends que…',
    ['la personne n’y croit pas', 'la personne l’admire'], 0,
    'Zarma : soi-disant. EN: supposedly.'),
], ['emprunt']);

const A6_TEXTE = dansUnTexte('a6-texte', 'Des commentaires sous une vidéo', TEXTE_A6, [
  { q: 'Quelle question pose Sam, et quelle réponse reçoit-il ?', a: 'S’il peut dire wesh ; Inès répond oui entre potes, si ça vient naturellement, mais pas à la professeure.' },
  { q: 'Quel conseil donne Marc ?', a: 'D’y aller doucement avec l’argot : on remarque tout de suite quelqu’un qui force.' },
  { q: 'Que montre le commentaire d’Awa ?', a: 'Que la go est un mot ordinaire en Côte d’Ivoire : un mot argotique en France peut être courant ailleurs.' },
  { q: 'Que veut dire Sam avec « j’avais le seum » ?', a: 'Il était frustré de ne rien comprendre ; maintenant, il se sent mieux.' },
], 'rec-b2-32-texte-a6', ['emprunt']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La source', 'Kiffer, le seum, le bled et wesh viennent…',
    ['de l’arabe', 'de l’anglais', 'du verlan'], 0,
    'De l’arabe, souvent par celui du Maghreb. EN: from Arabic.'),
  ctl('Le sens', 'Kiffer veut dire…',
    ['aimer beaucoup', 'critiquer'], 0,
    'Je kiffe : j’aime beaucoup. EN: to love.'),
  ctl('Le risque', 'Pourquoi un apprenant évite-t-il wesh ?',
    ['il peut sonner comme une imitation', 'c’est une insulte', 'il n’existe qu’au Québec'], 0,
    'Un emprunt garde la couleur de son groupe. EN: it can sound like imitation.'),
], ['emprunt']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Les mots venus d’ailleurs',
    opener: {
      line: 'Une cour de lycée où l’on entend l’arabe, l’anglais et l’Afrique : ici tu reconnais les mots empruntés, et la couleur qu’ils gardent. EN: A schoolyard where you hear Arabic, English and Africa: here you recognise borrowed words, and the colour they keep.',
      imageRef: 'lessons/verlan-argot/act06.jpg',
    },
    sections: [],
    milestone: 'Tu comprends kiffer, le seum, le bled, wesh, zarma et la go, tu dis d’où ils viennent et pourquoi tu ne les imites pas. EN: You understand these borrowings, say where they come from and why you do not imitate them.',
    estScreens: 42, restPoints: ['a6-construire', 'a6-piege'],
  },
  sections: [A6_LECTURE, A6_CARTES, A6_CONSTRUIRE, A6_PIEGE, A6_ATOI, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 · LES INTENSIFS ET LES TICS
 *
 *  Two friends after a concert, at natural speed: trop, grave, de ouf,
 *  c’est chaud, genre, en mode. What each does, and its written twin.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le lendemain du concert',
  frSub: 'Écoute Léa et son amie, à vitesse réelle',
  lines: [
    ln(E(1126)), ln(E(1127)), ln(E(1128)), ln(E(1129)), ln(E(1130)),
    ln(E(1131)), ln(E(1132)), ln(E(1133)), ln(E(1134)),
  ],
  questions: [
    { q: 'Comment Léa a-t-elle trouvé le concert ?', opts: ['très bien', 'moyen', 'décevant'], correct: 0, why: 'Trop bien : très bien. EN: great.' },
    { q: 'Comment était la salle ?', opts: ['très pleine', 'presque vide'], correct: 0, why: 'Pleine de ouf : comble. EN: packed.' },
    { q: 'Pourquoi le retour a-t-il été difficile ?', opts: ['il n’y avait plus de métro', 'il pleuvait', 'ils s’étaient perdus'], correct: 0, why: 'C’était chaud : plus de métro. EN: no metro.' },
    { q: 'Combien de temps ont-ils attendu un taxi, à peu près ?', opts: ['une heure', 'dix minutes'], correct: 0, why: 'Genre, une heure : environ une heure. EN: about an hour.' },
    { q: 'Qu’a fait Yanis dans le taxi ?', opts: ['il a dormi', 'il a chanté', 'il a appelé sa mère'], correct: 0, why: 'En mode zombie, il a dormi tout le trajet. EN: he slept.' },
  ],
  audio: REC('rec-b2-32-concert'),
  say: REFRAME,
  terms: ['intensif'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Cinq tics de l’oral',
  frSub: 'Ce qu’ils font, ce qu’on écrit à la place',
  hint: 'Cinq cartes : trois qui renforcent, puis c’est chaud et genre.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensif'],
  cards: [
    card(E(1127), 'Très', 'familier',
      'Trop bien : très bien. Ici, trop n’a rien de négatif. À l’écrit : très, vraiment. EN: so good.'),
    card(E(1129), 'Vraiment, beaucoup', 'familier',
      'Grave renforce le verbe. Seul, « grave ! » veut dire oui, tout à fait. EN: totally.'),
    card(E(1128), 'Énormément', 'familier',
      'De ouf se place après un nom ou un verbe : pleine de ouf, il pleut de ouf. EN: insanely.'),
    card(E(1130), 'Difficile, risqué', 'familier',
      'C’est chaud ne parle pas de température : c’est difficile, délicat. EN: tricky.'),
    card(E(1131), 'Environ, par exemple', 'familier',
      'Genre sert à arrondir, à donner un exemple ou à hésiter. À l’écrit : environ. EN: like, about.'),
  ],
};

const A7_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-tableau',
  layer: 'core',
  sheetId: 'sheet-neutre',
  title: 'Six tics et leur version écrite',
  cols: ['À l’oral', 'Sens', 'À l’écrit'],
  rows: [
    { cells: ['trop bien', 'très bien', 'excellent'], say: fr(E(1127)),
      detail: { title: 'Trop', body: 'Un intensif, pas un reproche. À l’écrit : très, vraiment. EN: trop = très.', say: fr(E(1135)) } },
    { cells: ['grave', 'vraiment, beaucoup', 'vraiment beaucoup'], say: fr(E(1129)),
      detail: { title: 'Grave', body: 'Il renforce un verbe ; seul, il dit oui. À l’écrit : vraiment. EN: really.', say: fr(E(1137)) } },
    { cells: ['de ouf', 'énormément', 'comble, extrêmement'], say: fr(E(1128)),
      detail: { title: 'De ouf', body: 'Toujours familier. À l’écrit, choisis le mot précis : une salle comble. EN: insanely.', say: fr(E(1136)) } },
    { cells: ['c’est chaud', 'c’est difficile', 'difficile, délicat'], say: fr(E(1130)),
      detail: { title: 'C’est chaud', body: 'Difficile ou risqué ; rien à voir avec la météo. EN: tricky.', say: fr(E(1138)) } },
    { cells: ['genre', 'environ, par exemple', 'environ'], say: fr(E(1131)),
      detail: { title: 'Genre', body: 'Arrondir, donner un exemple, hésiter. À l’écrit : environ, par exemple. EN: about.', say: fr(E(1139)) } },
    { cells: ['en mode + nom', 'comme', 'comme, à la manière de'], say: fr(E(1132)),
      detail: { title: 'En mode', body: 'En mode zombie : comme un zombie. EN: like.', say: fr(E(1145)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensif'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'L’oral et son écrit',
  groups: [
    grp('Renforcer', [
      it(E(1129), 'grave'),
      it(E(1137), 'à l’écrit'),
      it(E(1130), 'c’est chaud'),
      it(E(1138), 'à l’écrit'),
    ], chk('« C’était chaud, pour rentrer. » Rentrer était…',
      ['difficile', 'agréable, il faisait beau'], 0,
      'C’est chaud : c’est difficile. EN: tough.')),
    grp('Genre, trois emplois', [
      it('fr.b1.strategies-de-comprehension.1318', 'le mot, déjà rencontré'),
      it('fr.b1.strategies-de-comprehension.1308', 'genre : un exemple'),
      it(E(1131), 'genre : pour arrondir'),
      it(E(1139), 'environ, à l’écrit'),
    ], chk('Dans « genre, on a attendu une heure », genre sert à…',
      ['arrondir une durée', 'comparer deux choses', 'dire non'], 0,
      'Une heure, à peu près. EN: about an hour.')),
    ctl('Trop', '« C’était trop bien. » C’était…',
      ['très bien', 'trop, donc pas bien'], 0,
      'Trop, intensif : très. EN: very.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensif'],
};

const A7_ATOI = aToi('a7-atoi', 'l’oral ou l’écrit', [
  ctl('La copie', 'Dans ta dissertation, tu écris :',
    ['Ce roman est vraiment passionnant.', 'Ce roman est grave passionnant.'], 0,
    'À l’écrit, vraiment. EN: vraiment.'),
  ctl('Le compte rendu', 'Dans un compte rendu de réunion :',
    ['Nous avons attendu environ une heure.', 'On a attendu genre une heure.'], 0,
    'Environ, à l’écrit. EN: about.'),
  ctl('Le sens', 'Une amie te dit : « Mon examen, c’était chaud. » Elle veut dire que…',
    ['c’était difficile', 'il faisait chaud dans la salle'], 0,
    'C’est chaud : difficile. EN: hard.'),
  ctl('Le sens', '« Il était en mode zombie. » Il était…',
    ['très fatigué, comme un zombie', 'déguisé pour une fête'], 0,
    'En mode : comme. EN: like a zombie.'),
], ['intensif']);

const A7_TEXTE = dansUnTexte('a7-texte', 'Un podcast sur grave et trop', TEXTE_A7, [
  { q: 'Que demande Claire, et que lui répond l’animateur ?', a: 'Si elle doit corriger grave, trop et de ouf ; il répond de ne pas corriger, mais de traduire.' },
  { q: 'Quel est « le seul rôle » de grave, trop et de ouf ?', a: 'Renforcer un mot, comme très ou extrêmement.' },
  { q: 'Pourquoi genre est-il « plus subtil » ?', a: 'Parce qu’il a plusieurs emplois : hésiter, donner un exemple, arrondir un chiffre.' },
  { q: 'Point de vue : l’animateur juge-t-il ces mots incorrects ?', a: 'Non : naturels à l’oral entre amis, faux seulement dans une copie.' },
], 'rec-b2-32-texte-a7', ['intensif']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Trop', 'C’est trop bien veut dire…',
    ['c’est très bien', 'c’est trop, ce n’est pas bien'], 0,
    'Trop, intensif. EN: very good.'),
  ctl('Grave', 'À l’écrit, grave devient…',
    ['vraiment', 'gravement'], 0,
    'Gravement parle d’un danger ; vraiment renforce. EN: vraiment.'),
  ctl('Genre', 'Dans un rapport, genre deux heures devient…',
    ['environ deux heures', 'genre deux heures, entre guillemets'], 0,
    'Environ, à l’écrit. EN: about.'),
], ['intensif']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Les intensifs et les tics',
    opener: {
      line: 'Un concert, une salle pleine de ouf et un retour chaud : ici tu comprends les tics de l’oral, et ce qu’on écrit à leur place. EN: A concert, a packed hall and a tough trip home: here you understand spoken tics, and what to write instead.',
      imageRef: 'lessons/verlan-argot/act07.jpg',
    },
    sections: [],
    milestone: 'Tu comprends trop, grave, de ouf, c’est chaud, genre et en mode, et tu les remplaces à l’écrit. EN: You understand these spoken tics and replace them in writing.',
    estScreens: 42, restPoints: ['a7-tableau', 'a7-atoi'],
  },
  sections: [A7_ECOUTE, A7_CARTES, A7_TABLEAU, A7_CONSTRUIRE, A7_ATOI, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 · CE QUI DATE, CE QUI DURE
 *
 *  « C’est de la balle » out of an old textbook makes Léa laugh. Dated
 *  (de la balle, chanmé, zarbi, laisse béton), recent and fast-dating (en
 *  PLS, ça passe crème, c’est carré), lasting (relou, chelou). The adult
 *  who forces.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'À la sortie du cinéma',
  frSub: 'Un mot trouvé dans un vieux manuel',
  setting: 'Dimanche soir. Tu sors du cinéma avec Léa, et tu veux lui montrer tes progrès.',
  bubbles: [
    { from: 'narrator', fr: 'Le film t’a plu. Tu cherches un mot que les jeunes emploient.', en: 'You liked the film. You look for a word young people use.' },
    { from: 'user', fr: fr(E(1146)), en: en(E(1146)), warn: 'un mot daté' },
    { from: 'narrator', fr: 'Léa éclate de rire.', en: 'Léa bursts out laughing.' },
    { from: 'coach', fr: fr(E(1147)), en: en(E(1147)) },
    { from: 'coach', fr: fr(E(1148)), en: en(E(1148)), warn: 'le mot d’aujourd’hui' },
    { from: 'user', fr: 'Je me demande si relou est daté, lui aussi.', en: 'I wonder whether relou is dated too.' },
    { from: 'coach', fr: fr(E(1153)), en: en(E(1153)), warn: 'des mots qui durent' },
    { from: 'coach', fr: 'Mais franchement, parle comme toi. C’est très bien comme ça.', en: 'But really, just talk like yourself. It is fine like that.' },
  ],
  closing: { fr: 'Un mot daté donne ton âge ; un mot forcé montre ton effort. Le plus simple reste ton registre à toi.', en: 'A dated word gives away your age; a forced word shows your effort. The simplest is your own register.' },
  audio: REC('rec-b2-32-cinema'),
  say: REFRAME,
  terms: ['date'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-echelle',
  title: 'Daté, récent, durable',
  frSub: 'L’argot a une date de fabrication',
  hint: 'Cinq cartes : deux datées, trois récentes.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['date'],
  cards: [
    card(E(1146), 'C’est génial', 'familier, daté',
      'À la mode à la fin des années quatre-vingt-dix et dans les années deux mille. Aujourd’hui, il fait sourire les ados. EN: the bomb; dated.'),
    card(E(1152), 'Génial', 'familier, un peu daté',
      'Chanmé, verlan de méchant, au sens de génial. Il a eu son heure dans les années quatre-vingt-dix et deux mille ; on l’entend moins aujourd’hui. EN: wicked; a bit dated.'),
    card(E(1149), 'Au plus mal', 'familier, récent',
      'PLS : la position latérale de sécurité des premiers secours. Au figuré : épuisé, anéanti, à bout. EN: a wreck.'),
    card(E(1150), 'Sans problème', 'familier, récent',
      'Ça passe crème : ça passe tout seul, sans difficulté. Récent, il peut vite dater. EN: it went through smoothly.'),
    card(E(1151), 'Réglé', 'familier, récent',
      'C’est carré : c’est réglé, impeccable. EN: sorted.'),
  ],
};

const A8_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-trier',
  layer: 'core',
  size: 'lg',
  title: 'Ce qui date, ce qui dure',
  groups: [
    grp('Daté', [
      it(E(1146), 'fin des années quatre-vingt-dix'),
      it(E(1152), 'chanmé'),
      it(E(1032), 'zarbi'),
      it(E(1028), 'laisse béton'),
    ], chk('Que risques-tu avec ces mots devant des ados ?',
      ['les faire sourire, ou paraître plus vieux', 'les vexer gravement'], 0,
      'Un mot daté n’est pas une faute : il donne une époque. EN: they date you.')),
    grp('Récent, et le neutre', [
      it(E(1149), 'en PLS'),
      it(E(1158), 'au neutre'),
      it(E(1151), 'c’est carré'),
      it(E(1159), 'au neutre'),
    ], chk('« Je suis en PLS » veut dire…',
      ['à bout de forces, au plus mal', 'en retard', 'en vacances'], 0,
      'L’image des premiers secours : quelqu’un qu’on allonge. EN: a wreck.')),
    ctl('Ce qui dure', 'Lequel de ces mots a le moins vieilli ?',
      ['relou', 'chanmé', 'c’est de la balle'], 0,
      'Relou se dit depuis des décennies, à tout âge. EN: relou has lasted.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['date'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Daté, forcé, déplacé',
  rule: {
    title: 'Ni daté, ni forcé',
    body: 'Un mot d’argot daté te vieillit ; un mot récent, dans ta bouche d’apprenant, peut sembler forcé ; et avec une responsable ou un client, il est déplacé. Le courant ne date jamais. EN: Dated slang ages you, new slang can sound forced; standard French never dates.',
  },
  cards: [
    trap(E(1162), 'à des ados', 'Ce film, c’est de la balle.', 'Daté : dis simplement qu’il est excellent. EN: dated; say excellent.'),
    trap(E(1158), 'à ta responsable', 'Après cette journée, je suis en PLS.', 'En PLS reste entre amis : à bout de forces. EN: exhausted.'),
    trap(E(1160), 'à ton directeur', 'J’ai rendu le dossier en retard, mais ça passe crème.', 'Cela n’a posé aucun problème : le même fait, au courant. EN: no problem.'),
    trap(E(1159), 'au client', 'Pour samedi, c’est carré : j’ai les billets.', 'Tout est réglé : clair et rassurant. EN: all settled.'),
    trap(E(1135), 'dans une critique écrite', 'Le concert était chanmé.', 'Chanmé est daté et familier : excellent. EN: excellent.'),
    trap(E(1036), 'à un ami de tes parents', 'Ton histoire est un peu zarbi, franchement.', 'Zarbi a vieilli : bizarre, tout simplement. EN: strange.'),
  ],
  drill: [
    { promptSay: 'À des ados : ce film est … .', opts: ['excellent', 'de la balle'], correct: 0 },
    { promptSay: 'À ta responsable : je suis … .', opts: ['à bout de forces', 'en PLS'], correct: 0 },
    { promptSay: 'Au client : pour samedi, tout est … .', opts: ['réglé', 'carré'], correct: 0 },
    { promptSay: 'Le mot qui a le moins vieilli : … .', opts: ['relou', 'chanmé'], correct: 0 },
    { promptSay: 'PLS veut dire position latérale de … .', opts: ['sécurité', 'soirée'], correct: 0 },
    { promptSay: 'C’est de la balle était à la mode … .', opts: ['à la fin des années quatre-vingt-dix', 'l’année dernière'], correct: 0 },
    { promptSay: 'Chanmé est le verlan de … .', opts: ['méchant', 'charmant'], correct: 0 },
    { promptSay: 'Un adulte qui imite l’argot des ados a souvent l’air de … .', opts: ['forcer', 'rajeunir'], correct: 0 },
  ],
  steps: STEPS('Ni daté, ni forcé', 'Ce que le mot dit de toi'),
  audio: REC('rec-b2-32-piege-date'),
  say: REFRAME,
  terms: ['date'],
};

const A8_ATOI = aToi('a8-atoi', 'ton registre à toi', [
  ctl('Avec Léa', 'Le film t’a beaucoup plu. Tu dis à Léa :',
    ['Il était vraiment génial, ce film.', 'Ce film, c’est de la balle.'], 0,
    'Ton registre à toi, courant et chaleureux, ne date jamais. EN: your own words.'),
  ctl('Le sens', 'Un ami écrit : « Pour la fête, c’est carré. » Il veut dire que…',
    ['tout est réglé', 'la salle est carrée'], 0,
    'C’est carré : c’est réglé. EN: sorted.'),
  ctl('Le sens', 'Ta colocataire écrit : « Je suis en PLS après ce partiel. » Elle est…',
    ['à bout de forces', 'à l’hôpital'], 0,
    'Au figuré, pas aux urgences. EN: figuratively a wreck.'),
  ctl('Le forum', 'Un collègue de cinquante ans parle comme ses enfants. On pense souvent qu’il…',
    ['force un peu', 'est très naturel'], 0,
    'L’argot d’une génération sonne faux dans une autre. EN: he is trying too hard.'),
], ['date']);

const A8_TEXTE = dansUnTexte('a8-texte', 'Un forum sur les mots des parents', TEXTE_A8, [
  { q: 'Pourquoi Lucas parle-t-il de « gênance » ?', a: 'Parce que sa mère a employé un mot daté devant ses amis : il a eu honte pour elle.' },
  { q: 'Que prédit Nadia ?', a: 'Que les jeunes d’aujourd’hui feront rire leurs enfants avec « je suis en PLS » : les mots récents dateront aussi.' },
  { q: 'Quels mots, d’après Théo, ont « survécu » ?', a: 'Relou et chelou, que ses parents emploient encore.' },
  { q: 'Point de vue : quelle solution Martine a-t-elle trouvée ?', a: 'Le registre courant : « c’est très bien » ne date jamais.' },
], 'rec-b2-32-texte-a8', ['date']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Daté', 'Lequel est le plus daté ?',
    ['c’est de la balle', 'c’est ouf', 'c’est relou'], 0,
    'Fin des années quatre-vingt-dix. EN: the most dated.'),
  ctl('Récent', 'Ça passe crème veut dire…',
    ['ça passe sans problème', 'c’est trop sucré'], 0,
    'Récent et familier. EN: goes through smoothly.'),
  ctl('Le choix', 'Ce qui ne date jamais :',
    ['le registre courant', 'l’argot le plus récent'], 0,
    'Le courant ne vieillit pas. EN: standard French.'),
], ['date']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Ce qui date, ce qui dure',
    opener: {
      line: 'Un vieux mot de manuel, et Léa qui éclate de rire : ici tu apprends que l’argot a une date, et que ton registre à toi n’en a pas. EN: An old textbook word, and Léa bursting out laughing: here you learn that slang has a date, and your own register does not.',
      imageRef: 'lessons/verlan-argot/act08.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais un mot daté, un mot récent et un mot qui dure, et tu choisis de ne pas forcer. EN: You tell dated, recent and lasting slang apart, and choose not to force it.',
    estScreens: 40, restPoints: ['a8-trier', 'a8-atoi'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_TRIER, A8_PIEGE, A8_ATOI, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 · LES TEXTOS
 *
 *  A thread with Léa (slt, jsp, pk, oklm, rdv, dsl, tkt, bcp, qqch, stp,
 *  jpp, ptdr, mdr). The abbreviations of lesson 25 in B1, reused by id,
 *  and four more; the ne that comes back in writing (lesson 20 in B1,
 *  lesson 21 in B2); mdr as a softener.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_FIL: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-fil',
  layer: 'core',
  questionsInModal: true,
  title: 'Un jeudi soir, sur ton téléphone',
  frSub: 'Lis le fil, et devine avant de vérifier',
  text: FIL_A9,
  questions: [
    { q: 'Global : que décident Léa et toi ?', a: 'D’aller au cinéma ensemble ce soir, tranquillement ; tu arriveras en retard.' },
    { q: 'Détail : où et à quelle heure est le rendez-vous ?', a: 'À vingt heures, devant le cinéma du quartier.' },
    { q: 'Inférence : que veut dire « jpp » dans ton message ?', a: 'J’en peux plus : tu as très faim, ou tu es épuisé, après ta journée.' },
    { q: 'Point de vue : ce fil pourrait-il être envoyé à un professeur ?', a: 'Non : abréviations, tutoiement, ne supprimé. Entre amis, il est parfait ; pour un professeur, tout s’écrirait en entier.' },
  ],
  audio: REC('rec-b2-32-fil'),
  say: REFRAME,
  terms: ['texto'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  sheetId: 'sheet-neutre',
  title: 'Six abréviations à reconnaître',
  examples: [
    ex('fr.b1.langue-soignee.1303', 'mort de rire ; souvent, il adoucit'),
    ex(E(1163), 'pété de rire : plus fort que mdr'),
    ex('fr.b1.langue-soignee.1302', 'je sais pas, sans le ne de l’oral'),
    ex('fr.b1.langue-soignee.1305', 't’inquiète'),
    ex(E(1164), 'au calme'),
    ex(E(1165), 'j’en peux plus'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['texto'],
};

const A9_DECODER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-decoder',
  layer: 'core',
  size: 'lg',
  title: 'Le texto, puis en entier',
  groups: [
    grp('Deux fils, deux versions', [
      it(E(1166), 'le texto'),
      it(E(1167), 'en entier'),
      it(E(1168), 'le texto'),
      it(E(1169), 'en entier'),
    ], chk('Qu’est-ce qui revient quand on écrit en entier ?',
      ['les mots complets et le ne de la négation', 'de nouvelles informations'], 0,
      'Le fait ne change pas ; les mots et le ne reviennent. EN: full words and ne.')),
    grp(`Le ne qui tombe, vu dans ${NEGATION_B1_REF}`, [
      it('fr.b1.negation-et-restriction.1167', 'à l’oral, entre amis'),
      it('fr.b1.negation-et-restriction.1168', 'à l’écrit'),
      it('fr.b1.negation-et-restriction.1177', 'la règle'),
    ], chk('Jsp, c’est…',
      ['je sais pas, sans le ne de l’oral', 'je suis parti'], 0,
      'À l’écrit formel, le ne revient : je ne sais pas. EN: I dunno.')),
    ctl('Mdr', 'Léa écrit « mdr » juste après t’avoir annoncé qu’elle sera en retard. Elle…',
      ['adoucit son message', 'se moque de toi'], 0,
      'Mdr sert souvent à dire : ce n’est pas grave. EN: it softens.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['texto'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre textos dans un courriel',
  errors: [
    { wrong: 'Bonjour Madame, dsl pour le retard, mon bus était bloqué.', right: 'Bonjour Madame, veuillez excuser mon retard : mon bus était bloqué.',
      why: 'Tu écris vite, comme tous les jours. Mais dans un courriel à une professeure, l’abréviation paraît désinvolte. EN: it looks careless.' },
    { wrong: 'Merci bcp pour votre réponse rapide.', right: 'Merci beaucoup pour votre réponse rapide.',
      why: 'Le merci est poli, l’abréviation ne l’est pas : écris le mot en entier. EN: write beaucoup.' },
    { wrong: 'Je vous envoie le dossier, mdr.', right: 'Je vous envoie le dossier ci-joint.',
      why: 'Entre amis, mdr adoucit. Dans un courriel formel, il semble se moquer du lecteur. EN: it reads as mockery here.' },
    { wrong: 'Jsp si je pourrai venir jeudi.', right: 'Je ne sais pas encore si je pourrai venir jeudi.',
      why: `À l’oral, le ne tombe ; à l’écrit formel, il revient, comme dans ${NEGATIONS_B2_REF}. EN: the ne comes back in writing.` },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['texto'],
};

const A9_ATOI = aToi('a9-atoi', 'le bon fil', [
  ctl('À Léa', 'Tu réponds à Léa que tu arrives :',
    ['ok, j’arrive dans dix minutes', 'Madame, je vous prie de patienter dix minutes.'], 0,
    'Entre amis, le texto va bien ; la formule serait comique. EN: a text is fine with a friend.'),
  ctl('Au propriétaire', 'Tu écris au propriétaire :',
    ['Bonjour Monsieur, je ne sais pas encore qui a cassé la poignée.', 'slt, jsp qui a cassé la poignée'], 0,
    'Un inconnu, un propriétaire : tout en entier. EN: full words.'),
  ctl('Oklm', 'Léa propose un ciné oklm. Elle veut dire…',
    ['tranquillement, sans stress', 'en urgence'], 0,
    'Oklm : au calme. EN: chilled.'),
  ctl('Ptdr', 'Ptdr, par rapport à mdr, c’est…',
    ['plus fort', 'plus poli'], 0,
    'Pété de rire : plus fort que mort de rire. EN: stronger.'),
], ['texto']);

const A9_TEXTE = dansUnTexte('a9-texte', 'Le groupe de la coloc', TEXTE_A9, [
  { q: 'Pourquoi Yanis refuse-t-il « slt, jsp, dsl » pour le propriétaire ?', a: 'Parce qu’on écrit au propriétaire en entier et poliment : les abréviations sont pour les amis.' },
  { q: 'Qu’est-ce qui revient dans la version de Yanis ?', a: 'Les mots entiers, le vouvoiement et le ne : « je ne sais pas qui l’a cassée ».' },
  { q: 'Que veut dire Julie avec « c’est carré » ?', a: 'Que c’est réglé : la réparation est prévue samedi.' },
  { q: 'Point de vue : Julie est-elle vexée par le conseil ?', a: 'Non, elle plaisante (« je suis plus une ado ») : le groupe se parle en familier, et c’est normal.' },
], 'rec-b2-32-texte-a9', ['texto']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Mdr', 'Mdr veut dire…',
    ['mort de rire', 'merci de répondre'], 0,
    'Mort de rire, et souvent : ce n’est pas grave. EN: lol.'),
  ctl('Le courriel', 'Dans un courriel formel, les abréviations :',
    ['s’écrivent en entier', 's’écrivent en majuscules'], 0,
    'Tout en entier. EN: spelled out.'),
  ctl('Le ne', 'Jsp devient, à l’écrit formel :',
    ['je ne sais pas', 'je sais pas'], 0,
    'Le ne revient à l’écrit. EN: je ne sais pas.'),
], ['texto']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Les textos',
    opener: {
      line: 'Un fil de messages, un jeudi soir : ici tu déchiffres les abréviations, et tu sais tout réécrire en entier. EN: A thread of messages on a Thursday evening: here you decode the abbreviations, and can write everything out in full.',
      imageRef: 'lessons/verlan-argot/act09.jpg',
    },
    sections: [],
    milestone: 'Tu lis mdr, ptdr, jsp, tkt, oklm et jpp, et tu réécris un texto en phrase complète, ne compris. EN: You read texting shortcuts and rewrite a text as a full sentence, ne included.',
    estScreens: 40, restPoints: ['a9-decoder', 'a9-atoi'],
  },
  sections: [A9_FIL, A9_EXEMPLES, A9_DECODER, A9_ERREURS, A9_ATOI, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 · TRADUIRE VERS LE NEUTRE
 *
 *  Yanis rehearses an interview and corrects himself line by line. Keep the
 *  meaning, change the outfit; soften on the way up (relou → exigeant).
 *  What is NOT translated: insults and hurtful words exist and are not
 *  taught; if unsure, do not use; ask whether a word is polite.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La répétition d’entretien',
  frSub: 'Yanis s’entraîne, et se corrige',
  lines: [
    ln(E(1173)), ln(E(1174)), ln(E(1175)), ln(E(1176)), ln(E(1177)),
    ln(E(1178)), ln(E(1179)), ln(E(1180)), ln(E(1181)), ln(E(1182)),
  ],
  questions: [
    { q: 'Que fait Yanis ?', opts: ['il répète un entretien d’embauche', 'il appelle sa sœur', 'il enregistre un podcast'], correct: 0, why: 'Bonjour, je m’appelle Yanis : il se présente comme à un recruteur. EN: a job interview.' },
    { q: 'Que fait-il après chaque phrase familière ?', opts: ['il la redit au registre courant', 'il la traduit en anglais'], correct: 0, why: 'Pardon, je reprends, autrement dit : il remonte d’un barreau. EN: he says it again.' },
    { q: 'Comment présente-t-il finalement son ancien chef ?', opts: ['comme un responsable exigeant', 'comme un chef insupportable', 'comme un ami'], correct: 0, why: 'Exigeant : le neutre adoucit. EN: demanding.' },
    { q: 'Quand peut-il commencer ?', opts: ['immédiatement', 'dans un mois'], correct: 0, why: 'Disponible immédiatement. EN: right away.' },
    { q: 'Quelle idée résume la répétition ?', opts: ['même sens, autre registre', 'il faut éviter les stages'], correct: 0, why: 'Le sens reste, le costume change. EN: same meaning.' },
  ],
  audio: REC('rec-b2-32-entretien'),
  say: REFRAME,
  terms: ['neutre'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Remonter, adoucir, se taire',
  frSub: 'Cinq gestes pour le neutre',
  hint: 'Cinq cartes : deux pour traduire, trois pour les mots qui blessent.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['neutre', 'sensible'],
  cards: [
    card(E(1183), 'Garder le sens', 'la règle',
      `Même fait, autres mots. ${Cap(ANIMAUX_REF)} disait déjà : « ${B128_REFRAME} » EN: ${B128_REFRAME_EN}`),
    card(E(1184), 'Adoucir en montant', 'la nuance',
      'Devant la personne concernée, ou un recruteur, choisis le mot qui décrit sans juger. EN: describe, do not judge.'),
    card(E(1185), 'Ce qui n’est pas enseigné', 'les mots qui blessent',
      'Ces mots existent, dans les films et dans la rue. Tu n’as pas besoin de les connaître pour les éviter. EN: you do not need them to avoid them.'),
    card(E(1186), 'Dans le doute', 'la prudence',
      'Un mot inconnu peut être une insulte. S’il y a un doute, laisse-le de côté. EN: when in doubt, leave it out.'),
    card(E(1188), 'Demander', 'la question utile',
      'Tu peux toujours demander si un mot est poli : personne ne t’en voudra. EN: you can always ask.'),
  ],
};

const A10_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a10-tableau',
  layer: 'core',
  sheetId: 'sheet-neutre',
  title: 'Six traductions vers le neutre',
  cols: ['Entre amis', 'Au neutre', 'Remarque'],
  rows: [
    { cells: ['c’est relou', 'c’est pénible', 'exigeant, pour une personne'], say: fr(E(1030)),
      detail: { title: 'Relou', body: 'Une chose pénible ; une personne exigeante : tu adoucis. EN: tiresome; demanding.', say: fr(E(1033)) } },
    { cells: ['j’ai le seum', 'je suis déçu', 'déçue au féminin'], say: fr(E(1104)),
      detail: { title: 'Le seum', body: 'Déçu, frustré ; à l’écrit formel, je regrette. EN: disappointed.', say: fr(E(1112)) } },
    { cells: ['je kiffe', 'j’aime beaucoup', 'à l’écrit aussi'], say: fr(E(1103)),
      detail: { title: 'Kiffer', body: 'J’aime beaucoup, j’adore. EN: I really like.', say: fr(E(1111)) } },
    { cells: ['c’est chaud', 'c’est difficile', 'ou délicat'], say: fr(E(1174)),
      detail: { title: 'C’est chaud', body: 'Difficile, délicat, risqué : choisis le plus précis. EN: difficult.', say: fr(E(1175)) } },
    { cells: ['il est vénère', 'il est très en colère', 'ou énervé'], say: fr(E(1045)),
      detail: { title: 'Vénère', body: 'Énervé, en colère ; au travail, contrarié. EN: angry.', say: fr(E(1050)) } },
    { cells: ['je suis dispo', 'je suis disponible', 'dans toute lettre'], say: fr(E(1180)),
      detail: { title: 'Dispo', body: 'Disponible, et tranquille disparaît. EN: available.', say: fr(E(1181)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['neutre'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Même sens, autre costume',
  rule: {
    title: 'Garder le fait, changer les mots',
    body: 'Pour remonter, garde le fait et change les mots ; adoucis si la personne est concernée ; et quand un mot blesse, ne le traduis pas : laisse-le de côté. EN: Keep the fact, change the words, soften, and drop what hurts.',
  },
  cards: [
    trap(E(1175), 'en entretien', 'Mon dernier stage, c’était chaud au début.', 'Difficile : le même fait, dit à un recruteur. EN: difficult.'),
    trap(E(1177), 'en entretien', 'Mais j’ai grave appris, c’était ouf.', 'Énormément, passionnant : l’enthousiasme reste, l’argot part. EN: enormously.'),
    trap(E(1179), 'en entretien', 'Mon ancien chef était un peu relou.', 'Exigeant : on ne critique pas un ancien chef devant un recruteur. EN: demanding.'),
    trap(E(1181), 'en entretien', 'Je suis dispo tout de suite, tranquille.', 'Disponible immédiatement : tranquille disparaît. EN: available immediately.'),
    trap(E(1189), 'à ta professeure', 'J’ai trop le seum de pas pouvoir passer l’exam.', 'Me déçoit beaucoup : la déception, dite avec mesure. EN: disappoints me.'),
    trap(E(1190), 'à ta professeure', 'C’est chaud, la situation.', 'Délicate : un mot précis, sans dramatiser. EN: delicate.'),
  ],
  drill: [
    { promptSay: 'En entretien : mon dernier stage a été … au début.', opts: ['difficile', 'chaud'], correct: 0 },
    { promptSay: 'En entretien : j’y ai … appris.', opts: ['énormément', 'grave'], correct: 0 },
    { promptSay: 'En entretien : mon ancien responsable était très … .', opts: ['exigeant', 'relou'], correct: 0 },
    { promptSay: 'À ta professeure : pour moi, c’est … en ce moment.', opts: ['difficile', 'chaud'], correct: 0 },
    { promptSay: 'Dans une lettre : je suis … immédiatement.', opts: ['disponible', 'dispo'], correct: 0 },
    { promptSay: 'Tu ne connais pas ce mot : tu demandes s’il est … .', opts: ['poli', 'court'], correct: 0 },
    { promptSay: 'Un mot peut blesser : tu … .', opts: ['ne le répètes pas', 'le traduis quand même'], correct: 0 },
    { promptSay: 'J’ai le seum devient, au neutre : je suis … .', opts: ['déçu', 'seum'], correct: 0 },
  ],
  steps: STEPS('Garder le fait, changer les mots', 'Ce que le neutre garde, et ce qu’il laisse'),
  audio: REC('rec-b2-32-piege-neutre'),
  say: REFRAME,
  terms: ['neutre', 'sensible'],
};

const A10_ATOI = aToi('a10-atoi', 'monter, adoucir, se taire', [
  ctl('La recruteuse', 'Elle demande comment était ton dernier responsable. Tu dis :',
    ['Il était très exigeant, et j’ai beaucoup appris.', 'Il était relou, mais bon.'], 0,
    'Le neutre adoucit et regarde vers l’avant. EN: soften, move on.'),
  ctl('Le mot inconnu', 'Un inconnu, dans la rue, lance un mot que tu ne connais pas. Tu…',
    ['ne le répètes pas', 'le répètes pour le retenir'], 0,
    'Un mot inconnu peut être une insulte. EN: do not repeat it.'),
  ctl('La question', 'Tu veux savoir si un mot entendu en soirée est poli. Tu demandes à Yanis :',
    ['Excuse-moi, ce mot-là, il est poli ?', 'Tu peux m’apprendre des insultes ?'], 0,
    'Demander si un mot est poli, c’est sûr ; collectionner les insultes, non. EN: ask if it is polite.'),
  ctl('Le seum', 'À ta professeure, « j’ai le seum » devient :',
    ['je regrette beaucoup cette situation', 'j’ai beaucoup de seum'], 0,
    'La déception, dite avec mesure. EN: I regret this situation.'),
], ['neutre', 'sensible']);

const A10_TEXTE = dansUnTexte('a10-texte', 'Deux versions du même message', TEXTE_A10, [
  { q: 'Qu’est-ce qui reste identique entre les deux messages ?', a: 'Les faits : l’entretien, un début difficile, un bon résultat, le début lundi.' },
  { q: 'Par quoi « c’était chaud » et « j’ai grave assuré » sont-ils remplacés ?', a: 'Par « malgré un début difficile » et « j’ai beaucoup apprécié notre échange ».' },
  { q: 'Quel détail a disparu, et pourquoi ?', a: 'Le chef « un peu relou » : on ne critique pas son futur responsable devant la recruteuse. Le neutre adoucit, ou se tait.' },
  { q: 'Point de vue : les deux messages sont-ils réussis ?', a: 'Oui, chacun pour son lecteur : l’un pour un ami, l’autre pour une responsable du recrutement.' },
], 'rec-b2-32-texte-a10', ['neutre']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La règle', 'Traduire vers le neutre, c’est…',
    ['garder le sens et changer les mots', 'changer le sens pour être poli'], 0,
    'Le fait reste. EN: keep the meaning.'),
  ctl('La nuance', 'Un chef relou devient, en entretien, un responsable…',
    ['exigeant', 'insupportable', 'relou, mais poli'], 0,
    'Le neutre adoucit. EN: demanding.'),
  ctl('La prudence', 'Un mot qui peut blesser :',
    ['tu ne l’emploies pas', 'tu l’emploies entre amis'], 0,
    'Dans le doute, laisse-le de côté. EN: leave it out.'),
], ['neutre', 'sensible']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Traduire vers le neutre',
    opener: {
      line: 'Yanis répète son entretien et se corrige à voix haute : ici tu remontes l’échelle, tu adoucis, et tu laisses de côté ce qui blesse. EN: Yanis rehearses his interview and corrects himself: here you climb the ladder, soften, and leave aside what hurts.',
      imageRef: 'lessons/verlan-argot/act10.jpg',
    },
    sections: [],
    milestone: 'Tu redis une phrase d’argot au registre courant, en gardant le sens et en adoucissant, et tu sais quels mots ne pas dire. EN: You restate slang in standard French, keeping the meaning and softening, and know which words not to say.',
    estScreens: 42, restPoints: ['a10-tableau', 'a10-atoi'],
  },
  sections: [A10_ECOUTE, A10_CARTES, A10_TABLEAU, A10_PIEGE, A10_ATOI, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 · À TOI D’ÉCRIRE
 *
 *  The model (a DIFFERENT situation: Yanis and his bookshop shift), the
 *  plan, the uses, a phone call to the department, THE TASK (DELF B2 PE,
 *  register mediation), then the closing sections and the one quiz.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Un modèle en trois temps',
  frSub: 'Le fil, le courriel, la note',
  text: MODELE_TEXT,
  glossary: [
    { word: 'hosto', en: 'hospital (informal)', note: 'Troncation familière d’hôpital.' },
    { word: 'rattraper', en: 'make up', note: 'Rattraper des heures : les faire plus tard.' },
  ],
  questions: [
    { q: 'Global : quels sont les trois temps du document ?', a: 'Le fil de messages entre amis, le courriel neutre à la responsable, puis la note qui explique les changements.' },
    { q: 'Détail : que propose Yanis pour que son absence gêne moins ?', a: 'Que son collègue Hugo le remplace, et rattraper ses heures la semaine suivante.' },
    { q: 'Inférence : pourquoi Yanis ne garde-t-il pas « c’est chaud » ?', a: 'Parce que le fait suffit (une opération) : dans un courriel, il informe sans dramatiser.' },
    { q: 'Point de vue : Yanis juge-t-il sa façon de parler avec Karim ?', a: 'Non : il dit que « reum passe » entre amis ; il change seulement de barreau pour sa responsable.' },
  ],
  audio: REC('rec-b2-32-modele'),
  say: REFRAME,
  terms: ['neutre'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-neutre',
  title: 'Six temps pour ta réécriture',
  steps: [
    '1. Relis le fil et note les faits : quoi, quand, pourquoi, ce que tu demandes. EN: list the facts.',
    '2. Ouvre le courriel : l’objet, Madame, puis je me permets de vous écrire au sujet de… EN: open formally.',
    '3. Raconte les faits au registre courant, sans argot, sans abréviation, avec le ne. EN: facts, in standard French.',
    '4. Joins la preuve et formule ta demande au conditionnel : serait-il possible… EN: attach proof, ask politely.',
    `5. Ferme comme dans ${COURRIELS_REF} : « ${B139_REFRAME} » EN: ${B139_REFRAME_EN}`,
    '6. Écris ta note : trois mots ou expressions changés, et pour chacun, pourquoi. EN: three changes, three reasons.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['neutre'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Les phrases qui portent le courriel',
  cases: [
    uc('Tu ouvres le courriel', E(1193)),
    uc('Tu donnes le fait, sans argot', E(1194)),
    uc('Tu joins la preuve', E(1195)),
    uc('Tu fais ta demande', E(1196)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['neutre'],
};

/** Say it out loud: the call to the department office, in vous. ONE
 *  APOSTROPHE STYLE (’) in every turn and alt; no seed row. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au téléphone avec le secrétariat',
  setting: 'Ton train pour Lyon vient d’être annulé et ton partiel de sociologie est demain à huit heures. Tu appelles le secrétariat du département. Tu parles au registre courant, en vous.',
  turns: [
    {
      ai: 'Secrétariat de sociologie, bonjour. Je vous écoute.',
      en: 'Sociology office, hello. I am listening.',
      user: 'Bonjour, madame. J’appelle au sujet du partiel de demain matin : mon train a été annulé.',
      userEn: 'Hello, madam. I am calling about tomorrow morning’s exam: my train has been cancelled. (The reason for the call, in one sentence.)',
      alts: [
        { fr: 'Bonjour. Je vous appelle parce que mon train a été annulé et que j’ai un partiel demain.', en: 'Hello. I am calling because my train has been cancelled and I have an exam tomorrow.' },
        { fr: 'Bonjour, madame. Je suis en licence de sociologie et j’ai un problème pour le partiel de demain.', en: 'Hello, madam. I am enrolled in sociology and I have a problem with tomorrow’s exam. (Also right: you introduce yourself first.)' },
      ],
    },
    {
      ai: 'Ah, je vois. Vous arrivez à quelle heure, du coup ?',
      en: 'Ah, I see. So what time will you get here?',
      user: 'Le train suivant n’arrive qu’à midi, donc je ne pourrai pas être là à huit heures.',
      userEn: 'The next train only arrives at noon, so I will not be able to be there at eight. (The fact, and the ne.)',
      alts: [
        { fr: 'Pas avant midi : le train suivant arrive à midi.', en: 'Not before noon: the next train arrives at noon.' },
        { fr: 'À midi seulement, je ne pourrai donc pas passer l’examen à l’heure.', en: 'Only at noon, so I will not be able to sit the exam on time.' },
      ],
    },
    {
      ai: 'Vous avez un justificatif ?',
      en: 'Do you have any proof?',
      user: 'Oui, j’ai reçu un message d’annulation. Je peux vous l’envoyer par courriel.',
      userEn: 'Yes, I received a cancellation message. I can email it to you. (The proof.)',
      alts: [
        { fr: 'Oui, la compagnie m’a envoyé une confirmation d’annulation.', en: 'Yes, the company sent me a confirmation of the cancellation.' },
        { fr: 'Oui, je vous le transmets tout de suite, si vous voulez.', en: 'Yes, I can forward it right away, if you like.' },
      ],
    },
    {
      ai: 'Très bien. Il faudra aussi prévenir votre professeure directement.',
      en: 'Very good. You will also need to let your lecturer know directly.',
      user: 'Bien sûr, je vais écrire à Mme Garnier dès ce soir.',
      userEn: 'Of course, I will write to Ms Garnier this evening. (A promise, in the future proche.)',
      alts: [
        { fr: 'D’accord, je lui écris ce soir.', en: 'All right, I will write to her this evening.' },
        { fr: 'Entendu, je la préviens par courriel tout à l’heure.', en: 'Understood, I will let her know by email shortly.' },
      ],
    },
    {
      ai: 'Elle vous proposera sans doute une session de rattrapage.',
      en: 'She will probably offer you a make-up session.',
      user: 'Ce serait parfait. Savez-vous quand ont lieu les rattrapages ?',
      userEn: 'That would be perfect. Do you know when the make-up exams take place? (The conditional, and an inverted question.)',
      alts: [
        { fr: 'Très bien. Les rattrapages ont lieu quand, en général ?', en: 'Very good. When do the make-up exams usually take place?' },
        { fr: 'Merci. Est-ce que vous connaissez déjà la date des rattrapages ?', en: 'Thank you. Do you already know the date of the make-up exams?' },
      ],
    },
    {
      ai: 'En général, deux semaines après les partiels.',
      en: 'Usually two weeks after the exams.',
      user: 'Merci beaucoup pour votre aide. Bonne fin de journée.',
      userEn: 'Thank you very much for your help. Have a good rest of the day. (A formal close, no slang.)',
      alts: [
        { fr: 'Merci, c’est très aimable. Au revoir, madame.', en: 'Thank you, that is very kind. Goodbye, madam.' },
        { fr: 'Parfait, merci pour ces informations. Bonne journée.', en: 'Perfect, thank you for the information. Have a good day.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['neutre', 'echelle'],
};

/** THE GRADED TASK, written, DELF B2 PE: register mediation. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Du fil de messages au courriel',
  frSub: 'Mission écrite, format DELF B2',
  brief: `Voici le fil de messages entre ton amie Léa et toi. ${FIL_TACHE} Écris maintenant à ta professeure, Mme Garnier, un courriel qui explique la même situation au registre courant et poli : ce qui s’est passé, ce que tu joins, ce que tu demandes. Puis ajoute une note : trois mots ou expressions du fil que tu as changés, et pourquoi.`,
  briefEn: 'Here is the message thread between your friend Léa and you (above). Now write to your lecturer, Ms Garnier, an email explaining the same situation in polite, everyday standard French: what happened, what you are attaching, what you are asking for. Then add a note: three words or expressions from the thread that you changed, and why.',
  produce: 'Écris 200 à 250 mots en tout : le courriel (sans objet, formule d’appel, formule finale ni signature) et la note. Le courriel ne contient aucun mot d’argot, aucune abréviation, et garde la négation complète. La note nomme trois changements et donne une raison pour chacun.',
  responseSpec: { kind: 'text', minWords: 200, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          '3 : Le courriel dit ce qui s’est passé et quand, la conséquence, la preuve jointe et la demande ; la note donne trois changements, avec une raison pour chacun. Entre 200 et 250 mots.',
          '2 : Tout y est, mais un élément reste vague (pas de preuve, une demande floue, une raison manquante dans la note), ou la longueur sort un peu des limites.',
          '1 : La demande manque, la note manque, ou le courriel ne raconte pas la situation du fil.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          '3 : Le courriel suit l’ordre attendu (objet, motif, conséquence, preuve, demande, formule) et la note est séparée, numérotée ou clairement découpée.',
          '2 : Le plan existe, mais une information arrive au mauvais endroit, ou la note se mêle au courriel.',
          '1 : La professeure doit chercher le motif ou la demande dans le texte.',
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue du lexique',
        maxPoints: 2,
        descriptors: [
          '2 : Chaque mot d’argot du fil a un équivalent précis et varié (annulé, arriver à temps, en pièce jointe, regretter, une session de rattrapage), et la note emploie les mots de la leçon (familier, argotique, courant, troncation, abréviation).',
          '1 : Des équivalents vagues ou répétés (très, bien, problème), ou une note sans vocabulaire du registre.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          '2 : La négation complète (je ne pourrai pas), le conditionnel de politesse (serait-il possible, pourriez-vous), les accords et l’orthographe justes, tous les mots en entier.',
          '1 : Des erreurs gênent parfois la lecture, ou il reste une négation sans ne ou une abréviation.',
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          '2 : Vouvoiement, je me permets de, formule finale ; un ton mesuré, sans argot, sans familiarité, sans dramatisation ni excès de politesse.',
          '1 : Il reste un mot familier ou argotique, un tutoiement, ou un ton trop dramatique (je suis anéanti) ou trop pompeux.',
        ],
      },
    ],
  },
  scaffold: [
    'Objet :',
    'Madame,',
    'Je me permets de vous écrire au sujet de',
    'Vous trouverez en pièce jointe',
    'Serait-il possible de',
    'Je vous prie d’agréer',
    'Note : trois changements.',
    'J’ai remplacé … par … :',
  ],
  modelAnswer: TASK_MODEL,
  modelAnswerEn: 'Subject: tomorrow’s sociology exam, train cancelled. Madam, I am writing to you about the sociology exam scheduled for tomorrow morning at eight. My train to Lyon, which I had booked three weeks ago in order to arrive the day before, was cancelled two hours before departure, and the next one only arrives at noon. I looked for another solution, but no coach or car-share would have got me there in time. I will therefore not be able to be there for the exam. Please find attached the cancellation message I received. I sincerely regret this situation, which I could not have foreseen. Would it be possible to sit this exam on another date, or in another form? I remain available for any make-up session you see fit, and I can send you other supporting documents if necessary. Thank you in advance for your understanding. Yours faithfully, Camille Martin. Note: three changes. 1. “J’ai trop le seum” became “I sincerely regret this situation”: with a lecturer, you express disappointment with restraint. 2. “Genre deux heures avant” became “two hours before departure”: genre rounds things off in speech; in writing, you give the fact. 3. I removed “wesh”, “dsl”, “jsp” and “mdr” and restored the ne: in a formal email everything is written out in full, and you do not laugh at your own situation. The marker’s notes (not counted): task, coherence, range, accuracy, register, as listed in French.',
  watchFor: [
    { pattern: 'A slang word kept in the email (c’est chaud, relou, grave, le seum, genre, en PLS, vénère).', criterion: 'registre', feedback: 'Il reste un mot d’argot : remonte d’un barreau (difficile, pénible, vraiment, déçu).', ref: 'a10-tableau' },
    { pattern: 'A texting abbreviation kept (dsl, jsp, mdr, tkt, stp, bcp).', criterion: 'correction', feedback: 'Dans un courriel formel, tout s’écrit en entier : désolé, je ne sais pas, beaucoup.', ref: 'a9-erreurs' },
    { pattern: 'A negation without ne (je serai pas là, je peux pas).', criterion: 'correction', feedback: 'À l’écrit formel, le ne revient : je ne serai pas là.', ref: 'a9-decoder' },
    { pattern: 'Genre or trop used as a filler or intensifier (genre deux heures avant, trop stricte).', criterion: 'registre', feedback: 'Genre arrondit à l’oral ; à l’écrit, donne le fait ou dis environ.', ref: 'a7-tableau' },
    { pattern: 'Tu to the lecturer, or a greeting like Salut or Wesh.', criterion: 'registre', feedback: 'Madame, et le vous du début à la fin.', ref: 'a11-plan' },
    { pattern: 'A dramatic or mocking tone (je suis anéanti, c’est une catastrophe, mdr).', criterion: 'registre', feedback: 'Décris le fait avec mesure : je regrette sincèrement cette situation.', ref: 'a10-piege' },
    { pattern: 'No proof mentioned, or no request for another date.', criterion: 'tache', feedback: 'Joins la preuve de l’annulation et demande clairement une autre date.', ref: 'a11-usages' },
    { pattern: 'The note is missing, has fewer than three changes, or gives no reason.', criterion: 'tache', feedback: 'Trois changements, et pour chacun : pourquoi ce mot ne va pas avec une professeure.', ref: 'a11-lecture' },
    { pattern: 'The note mixes into the email, or the email has no clear order.', criterion: 'coherence', feedback: 'D’abord le courriel complet, puis la note, séparée et numérotée.', ref: 'a11-plan' },
    { pattern: 'Vague or repeated equivalents (très, bien, un problème partout).', criterion: 'etendue', feedback: 'Choisis le mot précis : annulé, arriver à temps, une session de rattrapage.', ref: 'a11-usages' },
    { pattern: 'Clipped words kept (le prof, l’exam, dispo, socio).', criterion: 'correction', feedback: 'Le mot entier : professeure, examen, disponible, sociologie.', ref: 'a4-piege' },
  ],
  graderNotes: [
    'Count the words of the email body AND the note: the subject line (Objet), the greeting (Madame,), the closing formula and the signature do not count. 200 to 250 with 10% tolerance (180 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'The facts come from the thread: a train to Lyon cancelled about two hours before departure, the next one at noon, a sociology exam tomorrow morning, a cancellation message as proof, a request to sit the exam later. Small invented details are fine; a contradiction of these facts costs at most one point under « tache ».',
    'RECOGNITION FIRST: the email must contain NO slang and NO abbreviation. The note, and only the note, may QUOTE the slang it replaced, in quotation marks; a quoted word is never a register error.',
    `SPOKEN-VARIANT DECISION (gate B2-2, Paul 2026-09-29): a negation without ne is spoken French, not an error in speech; in this formal email it costs a point under « correction » (${NEGATIONS_B2_REF_EN}).`,
    'Accept any correct formal closing (je vous prie d’agréer, veuillez agréer, bien cordialement, cordialement). Accept Madame or Madame Garnier as the greeting; do not require Madame la Professeure.',
    'Accept any reasonable reason in the note if it names the register (familier, argotique, abréviation, troncation, trop dramatique, pas poli pour une professeure). Do not require the metalanguage word for word.',
    `Writer gender is unknown: judge agreement for internal consistency only (présent / présente, déçu / déçue). The lecturer gets vous throughout (${TUVOUS_REF_EN}).`,
    `The email conventions are those of ${COURRIELS_REF_EN}; the registers are those of ${REGISTRES_REF_EN}, plus the argotique rung of this lesson.`,
    `Do not mark regional usage as an error (courriel or mail, examen de reprise or session de rattrapage). Regional slang is ${REGIONAL_REF_EN}'s topic, not this task's.`,
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 25 du B1 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['neutre', 'texto'],
};

/** Say the lesson out loud. Every id carries `voiceflash`: courant and
 *  soutenu rows only, never a slang row. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis les phrases neutres à voix haute',
  frSub: 'Le bon barreau, pour tous',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['neutre'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-neutre',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'l’échelle', v: 'argotique, familier, courant, soutenu', say: fr(E(1004)),
      detail: { title: 'L’échelle', body: 'Un même fait sur quatre barreaux ; le mot dit qui parle, et à qui. EN: four rungs, one fact.', say: fr(E(1005)) } },
    { k: 'le verlan', v: 'relou, chelou, ouf, teuf, vénère', say: fr(E(1030)),
      detail: { title: 'Le verlan', body: 'Les sons à l’envers ; reum et keuf restent argotiques. EN: sounds reversed.', say: fr(E(1033)) } },
    { k: 'couper, finir', v: 'appart, dispo ; calmos, cinoche, -ard', say: fr(E(1064)),
      detail: { title: 'Couper et changer la fin', body: 'Photo, métro, vélo passent partout ; les autres restent entre amis. -ard se moque. EN: clipping, endings.', say: fr(E(1068)) } },
    { k: 'les emprunts', v: 'kiffer, le seum, le bled, wesh, la go', say: fr(E(1103)),
      detail: { title: 'Les emprunts', body: 'Ils gardent la couleur de leur groupe : tu les comprends, tu ne les imites pas. EN: borrowings.', say: fr(E(1111)) } },
    { k: 'l’oral, l’écrit', v: 'trop, grave, genre ; mdr, jsp', say: fr(E(1129)),
      detail: { title: 'Les tics et les textos', body: 'À l’écrit : très, vraiment, environ ; tous les mots en entier, et le ne. EN: tics and texts.', say: fr(E(1137)) } },
    { k: 'remonter', v: 'garder le sens, adoucir, se taire', say: fr(E(1175)),
      detail: { title: 'Vers le neutre', body: 'Même fait, autres mots ; adoucis pour la personne concernée ; laisse de côté ce qui blesse. EN: keep, soften, drop.', say: fr(E(1179)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['neutre', 'echelle'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: 'Tu comprends le verlan, les mots coupés, les nouvelles fins, les emprunts, les intensifs et les textos ; tu places chaque mot sur l’échelle, tu sais qui peut le dire à qui, et tu le traduis vers le neutre en adoucissant. Tu sais aussi ce que tu ne dis pas. Le piège qui reste, c’est le mot familier qui se glisse dans un courriel sans que tu le voies : genre, trop, le prof, un ne oublié. Avant l’examen, relis ton courriel en cherchant une seule chose : un mot que tu ne dirais pas à ta professeure. EN: Reread your email looking for one thing: a word you would not say to your lecturer.',
  stats: [
    { k: 'Comprendre', v: 'verlan, troncation, emprunts' },
    { k: 'Placer', v: 'quatre barreaux' },
    { k: 'Traduire', v: 'garder le sens, adoucir' },
    { k: 'Se taire', v: 'les mots qui blessent' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 2 to 10, an exam
 *  round (DELF B2 CE, CO, PE; TCF), and a recycling round citing earlier
 *  lessons by position. Each round's target is a distinct errorTrigger.
 *  RECOGNITION FIRST: no question asks the learner to type or pick slang
 *  as the answer for a formal listener; every errorSpot tests register
 *  choice, with the neutral word in brackets so the answer is determined.
 *  `fold()` strips accents, case, punctuation, apostrophes and hyphens. */

type QQ = QuizQuestion;
const TI_Q = 'Complète et écris toute la phrase. EN: Complete it and write the whole sentence.';
const TI_MOT = 'Écris le mot qui manque. EN: Write the missing word.';
const TI_ECRIT = 'Remplace le mot de l’oral par le mot entre parenthèses et écris toute la phrase. EN: Replace the spoken word with the one in brackets and write the whole sentence.';
const ES_REG = 'Un mot n’a pas le bon registre pour cette personne. Réécris la phrase avec les mots entre parenthèses. EN: One word is in the wrong register for this person; rewrite the sentence with the words in brackets.';
const tI = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = TI_Q): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_REG): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
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
      id: 'r1-verlan', label: 'Le verlan', targets: ['verlan-mal-lu'],
      questions: [
        mc('Le mot verlan vient de…', ['l’envers', 'vers l’avant', 'un chanteur des années soixante-dix'], 0, 'L’envers, retourné. EN: from l’envers.', 'a2-ecoute'),
        mc('Laisse béton veut dire…', ['laisse tomber', 'construis quelque chose', 'reste calme'], 0, 'Tomber, retourné : béton. EN: forget it.', 'a2-cartes'),
        mc('« Ouf, j’ai eu mon train de justesse. » Ici, ouf veut dire…', ['quel soulagement', 'c’est fou'], 0, 'L’interjection, pas le verlan. EN: phew.', 'a2-construire'),
        tI('Chelou est le verlan de ___ .', 'louche', 'Lou-che, retourné : che-lou. EN: louche.', 'a2-tableau', ['Chelou est le verlan de louche.'], TI_MOT),
        tI('Relou est le verlan de ___ .', 'lourd', 'Lourd, avec un petit e, retourné : re-lou. EN: lourd.', 'a2-tableau', ['Relou est le verlan de lourd.'], TI_MOT),
        eS('Madame, votre consigne est un peu zarbi. (étrange)', 'Madame, votre consigne est un peu étrange.', 'Zarbi reste entre amis, et il a vieilli ; à une professeure : étrange. EN: étrange.', 'a2-piege', ['Madame, votre consigne me paraît un peu étrange.', 'Madame, votre consigne me semble un peu étrange.']),
        eS('Monsieur l’agent, il y a un type chelou devant l’immeuble. (un homme à l’air louche)', 'Monsieur l’agent, il y a un homme à l’air louche devant l’immeuble.', 'Type et chelou sont familiers ; à un agent, reste précis et neutre. EN: a suspicious-looking man.', 'a2-piege'),
        lC('Écoute. Que pense la personne du cousin ?', fr(E(1030)), ['Il est pénible.', 'Il est drôle.', 'Il est timide.'], 0, 'Relou : pénible. EN: tiresome.', 'a2-cartes'),
      ],
    },
    {
      id: 'r2-restes', label: 'Les verlans qui sont restés', targets: ['verlan-mal-place'],
      questions: [
        mc('La teuf, c’est…', ['la fête', 'la tête', 'la famille'], 0, 'Teuf, de fête. EN: party.', 'a3-cartes'),
        mc('Lequel reste le plus marqué, le plus « groupe » ?', ['reum', 'meuf', 'teuf'], 0, 'Reum reste argotique ; meuf et teuf sont familiers. EN: reum.', 'a3-cartes'),
        mc('Tu entends « rebeu » dans un film. Tu…', ['le comprends, sans l’employer', 'l’emploies pour parler de tes amis'], 0, 'Un mot qui désigne des gens par leur origine : à reconnaître, jamais à dire. EN: understand it, do not use it.', 'a3-construire'),
        tI('Meuf, remis à l’envers une deuxième fois, donne ___ .', 'feumeu', 'Le verlan du verlan. EN: feumeu.', 'a3-construire', ['Meuf, remis à l’envers une deuxième fois, donne feumeu.'], TI_MOT),
        tI('Vénère vient du mot ___ .', 'énervé', 'É-ner-vé, retourné : vé-nère. EN: énervé.', 'a2-tableau', ['énervée', 'Vénère vient du mot énervé.'], TI_MOT),
        eS('Bonjour Monsieur l’agent, les keufs sont déjà passés. (vos collègues)', 'Bonjour Monsieur l’agent, vos collègues sont déjà passés.', 'Keuf, devant un policier, sonne comme une provocation. EN: hostile in front of the police.', 'a3-erreurs'),
        eS('Chère Mamie, ma reum t’embrasse très fort. (maman)', 'Chère Mamie, maman t’embrasse très fort.', 'Reum est un mot de groupe ; à ta grand-mère, maman. EN: maman.', 'a3-erreurs', ['Chère Mamie, ma mère t’embrasse très fort.']),
        lC('Écoute. Qu’est-ce qui se passe samedi ?', fr(E(1043)), ['une fête chez Karim', 'un examen', 'un déménagement'], 0, 'Une teuf : une fête. EN: a party.', 'a3-histoire'),
      ],
    },
    {
      id: 'r3-troncation', label: 'Les mots coupés', targets: ['troncation-a-lecrit'],
      questions: [
        mc('Lequel peux-tu écrire dans une lettre officielle ?', ['le métro', 'le resto', 'l’appart'], 0, 'Métro a monté jusqu’au courant. EN: métro.', 'a4-construire'),
        mc('Dispo veut dire…', ['disponible', 'disposé à tout', 'disparu'], 0, 'Dispo : disponible. EN: available.', 'a4-ecoute'),
        mc('Métro vient de…', ['chemin de fer métropolitain', 'métronome', 'mètre'], 0, 'Une troncation qui a réussi. EN: from métropolitain.', 'a4-exemples'),
        tI('Un ado, c’est un ___ .', 'adolescent', 'Ado : adolescent. EN: adolescent.', 'a4-exemples', ['Un ado, c’est un adolescent.'], TI_MOT),
        tI('Appart est la troncation d’___ .', 'appartement', 'On coupe la fin : appart. EN: appartement.', 'a4-exemples', ['Appart est la troncation d’appartement.'], TI_MOT),
        eS('Madame, je suis dispo dès lundi prochain. (disponible)', 'Madame, je suis disponible dès lundi prochain.', 'Dispo reste entre amis ; à une recruteuse, le mot entier. EN: disponible.', 'a4-piege'),
        eS('Monsieur le directeur, le prof a décalé le partiel à jeudi. (le professeur)', 'Monsieur le directeur, le professeur a décalé le partiel à jeudi.', 'Prof est familier ; au directeur, le mot entier. EN: professeur.', 'a4-piege', ['Monsieur le directeur, le professeur a reporté le partiel à jeudi.', 'Monsieur le directeur, le professeur a reporté l’examen à jeudi.']),
        lC('Écoute. Où est Yanis ?', fr(E(1061)), ['à l’appartement', 'au restaurant', 'à la gare'], 0, 'L’appart : l’appartement. EN: at the flat.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r4-suffixe', label: 'Changer la fin', targets: ['suffixe-mal-lu'],
      questions: [
        mc('Cinoche et cinéma :', ['même sens, registre différent', 'sens différent, même registre'], 0, 'Le suffixe -oche change seulement le registre. EN: same meaning.', 'a5-cartes'),
        mc('Un chauffard, c’est…', ['un conducteur dangereux', 'un chauffeur de taxi', 'un bon conducteur'], 0, 'Chauffard : -ard, péjoratif. EN: reckless driver.', 'a5-trier'),
        mc('Quel suffixe ajoute souvent de la moquerie ?', ['-ard', '-os', '-oche'], 0, 'Flemmard, froussard, chauffard. EN: -ard.', 'a5-trier'),
        tI('La téloche, c’est la ___ .', 'télévision', 'Télévision et -oche. EN: télévision.', 'a5-cartes', ['télé', 'La téloche, c’est la télévision.', 'La téloche, c’est la télé.'], TI_MOT),
        tI('Calmos veut dire : du ___ .', 'calme', 'Calme et -os. EN: calme.', 'a5-cartes', ['Calmos veut dire : du calme.'], TI_MOT),
        eS('Dans ma rédaction, les familles regardent la téloche le soir. (la télévision)', 'Dans ma rédaction, les familles regardent la télévision le soir.', 'Téloche est familier et un peu daté ; une rédaction garde le mot entier. EN: télévision.', 'a5-erreurs', [], 'Un mot n’a pas le bon registre pour une rédaction. Réécris la phrase avec les mots entre parenthèses. EN: One word is in the wrong register for an essay; rewrite the sentence with the words in brackets.'),
        eS('Madame, je rentre tranquillos, je vous rappelle demain. (tranquillement)', 'Madame, je rentre tranquillement, je vous rappelle demain.', 'Tranquillos est gentil entre amis ; avec une cliente, garde l’adverbe. EN: tranquillement.', 'a5-erreurs'),
        lC('Écoute. Que fait la personne ?', fr(E(1085)), ['elle mange vite, puis va au cinéma', 'elle regarde la télévision', 'elle fait sa valise'], 0, 'Rapidos, cinoche : rapidement, cinéma. EN: a quick bite, then the cinema.', 'a5-histoire'),
      ],
    },
    {
      id: 'r5-emprunt', label: 'Les mots venus d’ailleurs', targets: ['emprunt-imite'],
      questions: [
        mc('Kiffer veut dire…', ['aimer beaucoup', 'critiquer', 'oublier'], 0, 'Je kiffe : j’aime beaucoup. EN: to love.', 'a6-cartes'),
        mc('« Il a fini son mémoire, zarma. » La personne…', ['n’y croit pas', 'l’admire', 'le félicite'], 0, 'Zarma : soi-disant. EN: yeah right.', 'a6-construire'),
        mc('Pourquoi un apprenant évite-t-il wesh ?', ['il peut sonner comme une imitation', 'c’est une insulte', 'il n’existe qu’au Québec'], 0, 'Un emprunt garde la couleur de son groupe. EN: it can sound like imitation.', 'a6-lecture'),
        tI('Avoir le seum, c’est être ___ et frustré.', 'déçu', 'Déçu, frustré. EN: disappointed.', 'a6-cartes', ['déçue', 'Avoir le seum, c’est être déçu et frustré.'], TI_MOT),
        tI('Chiller vient de l’___ .', 'anglais', 'To chill. EN: English.', 'a6-construire', ['Chiller vient de l’anglais.'], TI_MOT),
        eS('J’ai kiffé ce film, je le recommande. (beaucoup aimé)', 'J’ai beaucoup aimé ce film, je le recommande.', 'Kiffer reste familier ; une critique écrite dit j’ai beaucoup aimé. EN: j’ai beaucoup aimé.', 'a6-piege', [], 'Un mot n’a pas le bon registre pour une critique écrite. Réécris la phrase avec les mots entre parenthèses. EN: One word is in the wrong register for a written review; rewrite the sentence with the words in brackets.'),
        eS('Madame, sa go l’attend devant la gare. (sa petite amie)', 'Madame, sa petite amie l’attend devant la gare.', 'La go reste l’argot d’un groupe en France ; à la mère de ton ami : sa petite amie. EN: his girlfriend.', 'a6-piege'),
        lC('Écoute. Comment va le joueur ?', fr(E(1104)), ['il est déçu', 'il est ravi', 'il est malade'], 0, 'Avoir le seum : être déçu. EN: gutted.', 'a6-cartes'),
      ],
    },
    {
      id: 'r6-intensif', label: 'Les intensifs et les tics', targets: ['intensif-a-lecrit'],
      questions: [
        mc('« C’était trop bien. » C’était…', ['très bien', 'trop, donc pas bien'], 0, 'Trop, intensif. EN: very good.', 'a7-construire'),
        mc('« Pour rentrer, c’était chaud. » Rentrer était…', ['difficile', 'agréable', 'possible, car il faisait chaud'], 0, 'C’est chaud : difficile. EN: tough.', 'a7-tableau'),
        mc('« Genre, on a attendu une heure. » Genre sert ici à…', ['arrondir une durée', 'comparer', 'marquer la colère'], 0, 'Environ une heure. EN: about.', 'a7-construire'),
        tI('J’ai grave aimé ce livre. (vraiment)', 'J’ai vraiment aimé ce livre.', 'Grave, à l’écrit : vraiment. EN: vraiment.', 'a7-tableau', ['J’ai vraiment beaucoup aimé ce livre.'], TI_ECRIT),
        tI('La salle était pleine de ouf. (comble)', 'La salle était comble.', 'Pleine de ouf, à l’écrit : comble. EN: packed.', 'a7-tableau', ['La salle était vraiment comble.', 'La salle était absolument comble.'], TI_ECRIT),
        eS('Nous avons attendu genre une heure. (environ)', 'Nous avons attendu environ une heure.', 'Genre arrondit à l’oral ; à l’écrit, environ. EN: about.', 'a7-construire', ['Nous avons attendu pendant environ une heure.'], 'Un mot de l’oral s’est glissé dans ce compte rendu. Réécris la phrase avec le mot entre parenthèses. EN: A spoken word slipped into this report; rewrite the sentence with the word in brackets.'),
        eS('Le dernier chapitre est grave intéressant. (très)', 'Le dernier chapitre est très intéressant.', 'Grave renforce à l’oral ; à l’écrit, très. EN: very.', 'a7-tableau', ['Le dernier chapitre est vraiment intéressant.'], 'Un mot de l’oral s’est glissé dans cette copie. Réécris la phrase avec le mot entre parenthèses. EN: A spoken word slipped into this essay; rewrite the sentence with the word in brackets.'),
        lC('Écoute. Pourquoi le retour a-t-il été difficile ?', fr(E(1130)), ['plus de métro', 'trop de monde', 'la pluie'], 0, 'C’était chaud : plus de métro. EN: no more metro.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r7-date', label: 'Ce qui date, ce qui dure', targets: ['argot-date'],
      questions: [
        mc('Lequel est le plus daté ?', ['c’est de la balle', 'c’est ouf', 'c’est relou'], 0, 'Fin des années quatre-vingt-dix. EN: the most dated.', 'a8-cartes'),
        mc('« Je suis en PLS » veut dire…', ['je suis au plus mal', 'je suis en pleine forme', 'je suis en vacances'], 0, 'L’image des premiers secours. EN: a wreck.', 'a8-cartes'),
        mc('Un adulte imite l’argot de ses élèves. Le plus souvent, il…', ['a l’air de forcer', 'paraît plus naturel'], 0, 'L’argot d’une génération sonne faux dans une autre. EN: trying too hard.', 'a8-histoire'),
        tI('PLS veut dire position latérale de ___ .', 'sécurité', 'La position des premiers secours. EN: recovery position.', 'a8-cartes', ['PLS veut dire position latérale de sécurité.'], TI_MOT),
        tI('Chanmé est le verlan de ___ .', 'méchant', 'Mé-chant, retourné : chan-mé, au sens de génial. EN: méchant.', 'a8-cartes', ['Chanmé est le verlan de méchant.'], TI_MOT),
        eS('Madame, après cette journée, je suis en PLS. (à bout de forces)', 'Madame, après cette journée, je suis à bout de forces.', 'En PLS reste entre amis. EN: exhausted.', 'a8-piege'),
        eS('Monsieur, pour samedi, c’est carré : j’ai les billets. (tout est réglé)', 'Monsieur, pour samedi, tout est réglé : j’ai les billets.', 'C’est carré, familier ; au client, tout est réglé. EN: all settled.', 'a8-piege'),
        lC('Écoute. Que pense Léa de cette expression ?', fr(E(1147)), ['elle est dépassée', 'elle est à la mode', 'elle est vulgaire'], 0, 'On dirait mon père : dépassée. EN: out of date.', 'a8-histoire'),
      ],
    },
    {
      id: 'r8-texto', label: 'Les textos', targets: ['texto-a-lecrit'],
      questions: [
        mc('Mdr, c’est…', ['mort de rire', 'merci de répondre', 'mardi, dès le réveil'], 0, 'Mort de rire. EN: lol.', 'a9-exemples'),
        mc('Oklm veut dire…', ['au calme', 'OK, là, maintenant', 'on est là'], 0, 'Au calme, tranquille. EN: chilled.', 'a9-exemples'),
        mc('Léa écrit « mdr » juste après t’avoir annoncé un retard. Elle…', ['adoucit son message', 'se moque de toi', 'a oublié quelque chose'], 0, 'Mdr adoucit souvent. EN: it softens.', 'a9-decoder'),
        tI('Jsp, en entier et à l’écrit : je ne sais ___ .', 'pas', 'Je ne sais pas : le ne revient à l’écrit. EN: pas.', 'a9-decoder', ['je ne sais pas', 'Jsp, en entier et à l’écrit : je ne sais pas.'], TI_MOT),
        tI('Ptdr, c’est plus fort que ___ .', 'mdr', 'Pété de rire, plus fort que mort de rire. EN: mdr.', 'a9-exemples', ['mort de rire', 'Ptdr, c’est plus fort que mdr.'], TI_MOT),
        eS('Merci bcp pour votre réponse rapide. (beaucoup)', 'Merci beaucoup pour votre réponse rapide.', 'Dans un courriel formel, le mot entier. EN: beaucoup.', 'a9-erreurs', [], 'Une abréviation n’a pas sa place dans ce courriel formel. Réécris la phrase avec le mot entre parenthèses. EN: An abbreviation does not belong in this formal email; rewrite the sentence with the word in brackets.'),
        eS('Jsp si je pourrai venir jeudi. (Je ne sais pas)', 'Je ne sais pas si je pourrai venir jeudi.', 'Tous les mots, et le ne. EN: je ne sais pas.', 'a9-erreurs', ['Je ne sais pas encore si je pourrai venir jeudi.'], 'Une abréviation n’a pas sa place dans ce courriel formel. Réécris la phrase avec les mots entre parenthèses. EN: An abbreviation does not belong in this formal email; rewrite the sentence with the words in brackets.'),
        lC('Écoute. Quel texto dit la même chose ?', fr(E(1172)), ['mon train est annulé, je serai en retard', 'tkt, j’arrive à l’heure', 'on se fait un ciné ce soir'], 0, 'Le même fait, en texto. EN: same fact.', 'a9-decoder'),
      ],
    },
    {
      id: 'r9-neutre', label: 'Traduire vers le neutre', targets: ['neutre-rate'],
      questions: [
        mc('En entretien, tu parles d’un ancien chef un peu relou. Tu dis qu’il était…', ['très exigeant', 'vraiment relou', 'insupportable'], 0, 'Le neutre adoucit : on ne critique pas un ancien chef devant un recruteur. EN: demanding.', 'a10-piege'),
        mc('Quelqu’un emploie un mot que tu ne connais pas. Le plus prudent :', ['demander s’il est poli avant de le répéter', 'le répéter pour t’entraîner'], 0, 'Un mot inconnu peut être une insulte. EN: ask first.', 'a10-cartes'),
        mc('Traduire vers le neutre, c’est…', ['garder le sens et changer les mots', 'changer le sens pour être poli', 'supprimer toutes les émotions'], 0, 'Le fait reste, le costume change. EN: keep the meaning.', 'a10-cartes'),
        tI('C’est relou, ce retard. (pénible)', 'C’est pénible, ce retard.', 'Relou, au neutre : pénible. EN: tiresome.', 'a10-tableau', ['Ce retard est pénible.', 'Ce retard est vraiment pénible.'], TI_ECRIT),
        tI('Il est vénère depuis ce matin. (en colère)', 'Il est en colère depuis ce matin.', 'Vénère, au neutre : en colère. EN: angry.', 'a10-tableau', ['Il est très en colère depuis ce matin.'], TI_ECRIT),
        eS('Madame, c’est chaud pour moi en ce moment. (difficile)', 'Madame, c’est difficile pour moi en ce moment.', 'C’est chaud, au sens de difficile, est familier ; à une professeure : c’est difficile. EN: difficult.', 'a10-piege', ['Madame, c’est très difficile pour moi en ce moment.']),
        eS('Madame, je suis dispo immédiatement. (disponible)', 'Madame, je suis disponible immédiatement.', 'Disponible, en entier. EN: available.', 'a10-piege'),
        lC('Écoute. Que fait Yanis dans cette phrase ?', fr(E(1175)), ['il corrige le registre de sa phrase', 'il change le nom de son stage', 'il annule son entretien'], 0, 'Pardon : il remonte d’un barreau. EN: he corrects his register.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r10-examen', label: 'Comme à l’examen', targets: ['consigne-examen'],
      questions: [
        mc('Format DELF B2, compréhension écrite. D’après l’article sur les emprunts, pourquoi wesh peut-il gêner dans la bouche d’un touriste ?', ['il sonne comme une imitation, parfois comme une moquerie', 'il est interdit à l’écrit', 'il n’est compris qu’à Marseille'], 0, 'La couleur du groupe. EN: imitation.', 'a6-lecture'),
        mc('Format DELF B2, compréhension écrite. Selon le premier article, que faut-il faire des mots qui blessent ?', ['les reconnaître pour ne jamais les employer', 'les apprendre pour se défendre', 'les traduire en anglais'], 0, 'Reconnaître, ne jamais employer. EN: recognise, never use.', 'a1-lecture'),
        mc('Format DELF B2, compréhension écrite. D’après la transcription du podcast, que conseille Julien Morel à la professeure ?', ['traduire grave et trop plutôt que les corriger', 'les interdire en classe', 'les ignorer'], 0, 'Ne corrigez pas, traduisez. EN: translate.', 'a7-texte'),
        mc('Format TCF. Choisissez le mot qui convient : « Madame, je suis … dès lundi. »', ['disponible', 'dispo', 'dispos', 'disponibles'], 0, 'Le mot entier, au singulier. EN: disponible.', 'a4-piege'),
        mc('Format TCF. Choisissez le mot qui convient, dans une lettre à la propriétaire : « Le bruit des voisins est devenu très … . »', ['pénible', 'relou', 'chelou', 'ouf'], 0, 'Le registre courant. EN: tiresome.', 'a2-piege'),
        tI('Format DELF B2, production écrite. Serait-il ___ de passer cet examen à une autre date ?', 'Serait-il possible de passer cet examen à une autre date ?', 'Le conditionnel de politesse. EN: possible.', 'a11-usages', ['Serait-il envisageable de passer cet examen à une autre date ?', 'possible', 'envisageable']),
        eS('Mon train a été annulé, genre deux heures avant le départ. (environ)', 'Mon train a été annulé environ deux heures avant le départ.', 'Genre arrondit à l’oral ; à l’écrit : environ, ou le fait exact. EN: about.', 'a11-lecture', ['Mon train a été annulé deux heures avant le départ.'], 'Format DELF B2, médiation. Un mot du fil est resté dans le courriel. Réécris la phrase avec le mot entre parenthèses. EN: A word from the thread stayed in the email; rewrite the sentence with the word in brackets.'),
        lC('Format DELF B2, compréhension orale. Écoute. Qu’annonce la personne ?', fr(E(1194)), ['l’annulation de son train', 'un retard de dix minutes', 'un changement de professeur'], 0, 'Un train annulé. EN: a cancelled train.', 'a11-usages'),
      ],
    },
    {
      id: 'r11-rappel', label: 'Le B1 et le B2 en renfort', targets: ['rappel-structures'],
      questions: [
        mc(`${Cap(REGISTRES_REF)} : « ${B125_REFRAME} » Un mot familier est donc…`, ['un mot qui va avec certaines personnes', 'une faute à corriger'], 0, `EN: ${B125_REFRAME_EN}`, 'a1-reperer'),
        mc(`${Cap(TUVOUS_REF)} : dans ton courriel à Mme Garnier, tu dis…`, ['vous', 'tu'], 0, `« ${B126_REFRAME} » EN: ${B126_REFRAME_EN}`, 'a11-plan'),
        mc(`${Cap(ANIMAUX_REF)} : « ${B128_REFRAME} » Pour « j’ai le seum », tu gardes…`, ['le sens : la déception', 'le mot seum, entre guillemets'], 0, `Garder le sens, changer les mots. EN: ${B128_REFRAME_EN}`, 'a10-cartes'),
        tI(`${Cap(NEGATIONS_B2_REF)} : à l’écrit, le ne revient. Je ___ serai pas là demain.`, 'Je ne serai pas là demain.', `« ${B221_REFRAME} » EN: ${B221_REFRAME_EN}`, 'a9-decoder', ['ne']),
        tI(`${Cap(COURRIELS_REF)} : la formule finale. Je vous prie d’___, Madame, mes salutations respectueuses. (to accept)`, 'Je vous prie d’agréer, Madame, mes salutations respectueuses.', `« ${B139_REFRAME} » EN: ${B139_REFRAME_EN}`, 'a11-plan', ['Je vous prie d’accepter, Madame, mes salutations respectueuses.', 'agréer', 'accepter']),
        mc(`${Cap(ECOUTE_REF)} : « ${B138_REFRAME} » Dans un film, un mot d’argot t’échappe. Tu…`, ['suis le sens général, puis vérifies le mot', 't’arrêtes et abandonnes le film'], 0, `EN: ${B138_REFRAME_EN}`, 'a2-ecoute'),
        mc(`${Cap(REGISTRES_REF)} : au Québec, « mon chum » veut dire…`, ['mon copain, mon ami', 'mon chien', 'mon cousin'], 0, `Chaque région a son familier ; ${REGIONAL_REF} en parle. EN: my boyfriend, my buddy.`, 'a1-lecture'),
        lC(`Écoute. ${Cap(NEGATION_B1_REF)} : quelle phrase entends-tu ?`, fr('fr.b1.negation-et-restriction.1167'), ['une négation de l’oral, sans ne', 'une négation écrite, avec ne'], 0, `« ${B120_REFRAME} » EN: ${B120_REFRAME_EN}`, 'a9-decoder'),
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
spreadSlots(A11_QUIZ);

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'relou (verlan of lourd)', back: 'pénible, exigeant', say: fr(E(1033)) },
    { front: 'chelou (verlan of louche)', back: 'bizarre, suspect', say: fr(E(1034)) },
    { front: 'vénère (verlan of énervé)', back: 'très en colère', say: fr(E(1050)) },
    { front: 'dispo, appart, prof', back: 'disponible, appartement, professeur', say: fr(E(1077)) },
    { front: 'le cinoche, la téloche', back: 'le cinéma, la télévision', say: fr(E(1101)) },
    { front: 'j’ai le seum', back: 'je suis déçu', say: fr(E(1112)) },
    { front: 'c’est chaud', back: 'c’est difficile, délicat', say: fr(E(1138)) },
    { front: 'jsp', back: 'je ne sais pas', say: fr(E(1167)) },
    { front: 'keep the meaning, change the outfit', back: 'garder le sens, changer le costume', say: fr(E(1183)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Le verlan et l’argot, en résumé',
  body: `${REFRAME} Tu comprends le verlan, les mots coupés, les nouvelles fins, les emprunts, les intensifs et les textos ; tu places chaque mot sur l’échelle, tu sais qui peut le dire à qui, et tu le traduis vers le neutre en adoucissant. Tu as aussi réécrit un fil de messages en courriel, au format du DELF B2. La prochaine leçon, ${TRADUIRE_REF}, te fait traduire sans calquer : garder le sens d’une langue à l’autre. EN: Next comes translation without calques.`,
  points: [
    'Quatre barreaux : argotique, familier, courant, soutenu.',
    'Le verlan inverse les sons ; la troncation coupe ; -ard se moque.',
    'Un emprunt garde la couleur de son groupe.',
    'Vers le neutre : garder le sens, adoucir, laisser ce qui blesse.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echelle', 'neutre'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'À toi d’écrire',
    opener: {
      line: 'Un fil de messages plein d’argot, et une professeure qui attend un courriel : à toi de remonter l’échelle, et d’expliquer tes choix. EN: A message thread full of slang, and a lecturer waiting for an email: your turn to climb the ladder and explain your choices.',
      imageRef: 'lessons/verlan-argot/act11.jpg',
    },
    sections: [],
    milestone: 'Tu as réécrit un fil d’argot en courriel neutre au format du DELF B2, appelé le secrétariat et passé le quiz : quatre-vingt-huit questions, onze rounds. EN: You rewrote a slang thread as a neutral email in DELF B2 format, called the office and sat the quiz: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-troncation', 'a11-quiz/r6-intensif', 'a11-quiz/r9-neutre'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS (layer deep: teach and table only). Every sheet is
 *  reached from at least one mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-echelle', 'L’échelle des registres', ['les quatre barreaux', 'qui parle à qui', 'les mots qui datent', 'les mots sensibles'], [
    teach('sheet-echelle-teach', 'Quatre barreaux, et la personne en face',
      `En haut, le soutenu (les forces de l’ordre) ; au milieu, le courant, qui va partout (la police) ; plus bas, le familier, celui des proches (les flics) ; tout en bas, l’argot, les mots d’un groupe (les keufs). ${Cap(REGISTRES_REF)} a posé les trois premiers barreaux ; cette leçon ajoute le quatrième. Le sens ne change pas : c’est la personne qui écoute qui décide du barreau. L’argot vieillit vite ; le courant ne date jamais. Certains mots blessent (insultes, mots qui désignent des gens par leur origine, mots hostiles envers la police) : cette leçon ne les enseigne pas, et dans le doute, on ne les emploie pas. Cette leçon parle de la France ; le Québec, la Belgique, la Suisse et l’Afrique ont leur propre argot (${REGIONAL_REF}). EN: Four rungs; the listener decides; some words hurt and are not taught.`),
    table('sheet-echelle-table', 'Qui peut le dire, et à qui', ['Mot', 'Barreau', 'À qui'], [
      ['les keufs', 'argotique, hostile', 'à personne, en tant qu’apprenant'],
      ['les flics', 'familier', 'entre amis'],
      ['la police', 'courant', 'à tout le monde'],
      ['les forces de l’ordre', 'soutenu', 'dans un texte officiel'],
      ['relou, chelou, ouf', 'familier', 'entre amis, à tout âge'],
      ['reum, wesh, zarma, la go', 'argotique', 'entre membres d’un groupe'],
      ['meuf', 'familier, à manier', 'entre amis, jamais d’une femme présente'],
      ['c’est de la balle, chanmé, zarbi', 'familier, daté', 'ils font sourire'],
      ['en PLS, ça passe crème', 'familier, récent', 'entre amis ; ils dateront'],
      ['beur, rebeu', 'sensible', 'à reconnaître, jamais à dire'],
    ]),
  ]),
  sheet('sheet-verlan', 'Le verlan', ['la fabrication', 'les mots restés', 'le verlan du verlan'], [
    teach('sheet-verlan-teach', 'Les sons à l’envers',
      'Le mot verlan vient de l’envers. On coupe le mot en syllabes et on les inverse, à l’oreille : bizarre donne zarbi, louche donne chelou. Un mot d’une syllabe reçoit souvent un petit « e » avant d’être retourné (lourd, relou ; femme, meuf ; mère, reum), et la fin tombe parfois (fête, teuf ; flic, keuf). Fou se retourne son par son : ouf. Un verlan peut être retourné une deuxième fois : meuf donne feumeu. Beur, verlan d’arabe, aujourd’hui daté, a donné rebeu : ces mots désignent des gens par leur origine et peuvent blesser ; on les reconnaît, on ne les emploie pas. EN: Sounds reversed; one-syllable words take an extra e; re-verlan exists; origin words are not for you.'),
    table('sheet-verlan-table', 'Verlan, source, neutre', ['Verlan', 'Source', 'Au neutre'], [
      ['laisse béton (daté)', 'laisse tomber', 'laissons cela'],
      ['ouf', 'fou', 'incroyable'],
      ['relou', 'lourd', 'pénible, exigeant'],
      ['chelou', 'louche', 'bizarre, suspect'],
      ['zarbi (daté)', 'bizarre', 'étrange'],
      ['vénère', 'énervé', 'très en colère'],
      ['teuf', 'fête', 'fête'],
      ['meuf', 'femme', 'femme, compagne'],
      ['reum (argotique)', 'mère', 'mère, maman'],
      ['keuf (argotique)', 'flic', 'policier, police'],
      ['chanmé (daté)', 'méchant', 'génial, excellent'],
    ]),
  ]),
  sheet('sheet-procedes', 'Couper, changer la fin, emprunter', ['la troncation', 'les suffixes', 'les emprunts'], [
    teach('sheet-procedes-teach', 'Trois autres façons de fabriquer l’argot',
      'La troncation coupe la fin d’un mot : appart, resto, ado, dispo, prof, ciné. Photo, métro et vélo ont monté jusqu’au courant ; les autres restent familiers. Les suffixes -os et -oche remplacent la fin sans changer le sens : calmos, tranquillos, rapidos, cinoche, téloche, valoche. Le suffixe -ard ajoute de la moquerie : flemmard, froussard, chauffard. Les emprunts viennent de l’arabe (kiffer, le seum, le bled, wesh, zarma), de l’anglais (chiller, le crush) et du français d’Afrique (la go) ; ils gardent la couleur de leur groupe. EN: Clipping, new endings, borrowings.'),
    table('sheet-procedes-table', 'Le mot d’argot et son mot neutre', ['Argot', 'Procédé', 'Au neutre'], [
      ['l’appart', 'troncation', 'l’appartement'],
      ['dispo', 'troncation', 'disponible'],
      ['un ado', 'troncation', 'un adolescent'],
      ['calmos', '-os', 'du calme'],
      ['le cinoche', '-oche', 'le cinéma'],
      ['un flemmard', '-ard, moqueur', 'quelqu’un de paresseux'],
      ['un chauffard', '-ard, même dans la presse', 'un conducteur dangereux'],
      ['kiffer', 'emprunt, arabe', 'aimer beaucoup'],
      ['avoir le seum', 'emprunt, arabe', 'être déçu, frustré'],
      ['zarma', 'emprunt, arabe', 'soi-disant'],
      ['chiller', 'emprunt, anglais', 'se détendre'],
      ['la go', 'emprunt, français d’Afrique', 'la fille, la petite amie'],
    ]),
  ]),
  sheet('sheet-neutre', 'Traduire vers le neutre', ['les intensifs', 'les textos', 'garder le sens, adoucir', 'la note de la tâche'], [
    teach('sheet-neutre-teach', 'Garder le sens, changer le costume',
      'Pour remonter l’échelle, garde le fait et change les mots. Les intensifs (trop, grave, de ouf) deviennent très, vraiment, extrêmement ; genre devient environ ou par exemple ; c’est chaud devient c’est difficile ou délicat. Les textos s’écrivent en entier, et le ne revient. Devant la personne concernée ou un recruteur, adoucis : un chef relou devient un responsable exigeant. Ce qui blesse ne se traduit pas : on le laisse de côté. Dans la tâche, la note dit trois changements et, pour chacun, pourquoi. EN: Keep the fact, change the words, soften, drop what hurts.'),
    table('sheet-neutre-table', 'De l’oral entre amis à l’écrit', ['Entre amis', 'Au neutre', 'Remarque'], [
      ['c’est relou', 'c’est pénible', 'exigeant, pour une personne'],
      ['j’ai le seum', 'je suis déçu', 'je regrette, à l’écrit formel'],
      ['je kiffe', 'j’aime beaucoup', ''],
      ['c’est chaud', 'c’est difficile', 'ou délicat'],
      ['trop bien, grave bien', 'très bien, vraiment bien', ''],
      ['de ouf', 'énormément, extrêmement', ''],
      ['genre deux heures', 'environ deux heures', ''],
      ['je suis en PLS', 'je suis à bout de forces', ''],
      ['mdr, ptdr', '(rien)', 'on ne rit pas de sa situation'],
      ['jsp, tkt, dsl', 'je ne sais pas, ne t’inquiète pas, désolé', 'le ne revient'],
      ['je serai pas là', 'je ne serai pas là', 'la négation complète'],
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
  { id: 'd-verlan', title: 'Le mot sous le verlan', format: 'mcq' as const, coach: 'Retourne les sons, pas les lettres. EN: reverse the sounds.', q: 'Chelou vient de…', opts: ['louche', 'chaud'], correct: 0, why: 'Lou-che, che-lou. EN: louche.', items: [E(1030), E(1031), E(1029), E(1032), E(1028), E(1022)], audio: AUDIO },
  { id: 'd-verlan-place', title: 'Entre amis, ou pour tous', format: 'sort' as const, coach: 'Deux piles : ce qui reste entre amis, et ce qui va à tout le monde. EN: friends only, or everyone.', buckets: ['entre amis', 'pour tous'], items: [E(1043), E(1046), E(1045), E(1048), E(1051), E(1050)], audio: AUDIO },
  { id: 'd-troncation', title: 'Le mot entier', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute, avec les mots entiers. EN: read each line with full words.', items: [E(1067), E(1068), E(1069), E(1077), E(1079), E(1080)], audio: AUDIO },
  { id: 'd-suffixe', title: 'Détendre ou se moquer', format: 'sort' as const, coach: 'Deux piles : la fin qui détend, la fin qui se moque. EN: relaxed, or mocking.', buckets: ['-os et -oche : même sens', '-ard : péjoratif'], items: [E(1083), E(1085), E(1086), E(1087), E(1089), E(1088)], audio: AUDIO },
  { id: 'd-emprunt', title: 'D’où vient le mot', format: 'mcq' as const, coach: 'L’arabe, l’anglais, l’Afrique : chaque emprunt garde sa couleur. EN: each loanword keeps its colour.', q: 'Kiffer vient…', opts: ['de l’arabe', 'de l’anglais'], correct: 0, why: 'D’un mot arabe. EN: from Arabic.', items: [E(1103), E(1104), E(1105), E(1110), E(1118), E(1119)], audio: AUDIO },
  { id: 'd-intensif', title: 'Dans une copie', format: 'flashcard' as const, coach: 'Dis chaque phrase comme dans une copie : très, vraiment, environ. EN: say it as you would write it.', items: [E(1135), E(1136), E(1137), E(1138), E(1139), E(1140)], audio: AUDIO },
  { id: 'd-date', title: 'Daté ou toujours là', format: 'sort' as const, coach: 'Deux piles : les mots qui ont vieilli, ceux qui durent. EN: dated, or lasting.', buckets: ['daté', 'toujours là'], items: [E(1146), E(1152), E(1032), E(1028), E(1030), E(1031)], audio: AUDIO },
  { id: 'd-texto', title: 'Tout en entier', format: 'flashcard' as const, coach: 'Lis la version entière de chaque texto, ne compris. EN: read the full version.', items: [E(1167), E(1169), E(1172), 'fr.b1.negation-et-restriction.1168', E(1171), E(1170)], audio: AUDIO },
  { id: 'd-neutre', title: 'Remonter l’échelle', format: 'mcq' as const, coach: 'Garde le fait, change les mots, adoucis. EN: keep, change, soften.', q: 'Au neutre, c’est relou devient…', opts: ['c’est pénible', 'c’est lourd'], correct: 0, why: 'Lourd, dans ce sens, est familier lui aussi. EN: pénible.', items: [E(1175), E(1177), E(1179), E(1181), E(1189), E(1190)], audio: AUDIO },
  { id: 'd-examen', title: 'Le courriel, phrase par phrase', format: 'flashcard' as const, coach: 'Dis chaque phrase comme dans ton courriel : ouvrir, raconter, joindre, demander, fermer. EN: say each line of the email.', items: [E(1193), E(1194), E(1195), E(1196), 'fr.b1.langue-soignee.1387', 'fr.b1.langue-soignee.1208'], audio: AUDIO },
  { id: 'd-rappel', title: 'Le ne de l’écrit', format: 'mcq' as const, coach: 'À l’oral, le ne tombe ; à l’écrit formel, il revient. EN: ne comes back in writing.', q: 'Dans un courriel formel :', opts: ['Je ne sais pas.', 'Je sais pas.'], correct: 0, why: 'La négation complète. EN: the full negation.', items: ['fr.b1.negation-et-restriction.1168', 'fr.b1.negation-et-restriction.1167', E(1012), E(1186), E(1167), E(1191)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'verlan-mal-lu', description: 'Cannot recover the source word of a verlan, reads it letter by letter, or confuses ouf the interjection with ouf the verlan.', detectOn: ['a2-construire', 'a2-piege', 'a2-check'], drill: 'd-verlan', retest: 'd-verlan' },
  { id: 'verlan-mal-place', description: 'Uses a familiar or argotique verlan (reum, keuf, meuf) with someone it offends or excludes.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check', 'a11-mission'], drill: 'd-verlan-place', retest: 'd-verlan-place' },
  { id: 'troncation-a-lecrit', description: 'Keeps clipped words (dispo, appart, prof, ado, resto) in a letter, a form or a formal email.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-troncation', retest: 'd-troncation' },
  { id: 'suffixe-mal-lu', description: 'Misses the meaning under -os and -oche, or reads an -ard word (chauffard, flemmard) as neutral or as praise.', detectOn: ['a5-trier', 'a5-erreurs', 'a5-check'], drill: 'd-suffixe', retest: 'd-suffixe' },
  { id: 'emprunt-imite', description: 'Misreads a borrowing (zarma, le seum, le bled) or imitates one (wesh, la go) where it sounds borrowed or mocking.', detectOn: ['a6-construire', 'a6-piege', 'a6-check'], drill: 'd-emprunt', retest: 'd-emprunt' },
  { id: 'intensif-a-lecrit', description: 'Carries spoken intensifiers and fillers (grave, trop, de ouf, genre, c’est chaud) into written French, or reads trop as negative.', detectOn: ['a7-construire', 'a7-atoi', 'a7-check', 'a11-mission'], drill: 'd-intensif', retest: 'd-intensif' },
  { id: 'argot-date', description: 'Uses dated slang (c’est de la balle, chanmé) or forces recent slang (en PLS, ça passe crème), or cannot tell dated from lasting.', detectOn: ['a8-trier', 'a8-piege', 'a8-check'], drill: 'd-date', retest: 'd-date' },
  { id: 'texto-a-lecrit', description: 'Leaves texting abbreviations or the dropped ne in a formal message, or reads mdr literally.', detectOn: ['a9-decoder', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-texto', retest: 'd-texto' },
  { id: 'neutre-rate', description: 'Changes the meaning when moving to neutral French, forgets to soften for the person concerned, or repeats a word that may hurt.', detectOn: ['a10-piege', 'a10-atoi', 'a10-check', 'a11-mission'], drill: 'd-neutre', retest: 'd-neutre' },
  { id: 'consigne-examen', description: 'Misses what the B2 exam task asks: rewrites the thread without the facts, the proof or the request, or writes the note without reasons.', detectOn: ['a11-lecture', 'a11-plan', 'a11-mission'], drill: 'd-examen', retest: 'd-examen' },
  { id: 'rappel-structures', description: 'Misforms the earlier structures the lesson leans on: the full written negation, vous in a formal email, the formal closing.', detectOn: ['a9-decoder', 'a11-plan', 'a11-mission'], drill: 'd-rappel', retest: 'd-rappel' },
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-32-[a-z0-9-]+/g) ?? [])];

const PIEGE_BRIEF = 'The audio step plays each card’s NEUTRAL sentence (the fr field). Read the six plainly and identically in pace, France French; the slang versions in promptSound are never spoken.';

const REC_DESC: Record<string, string> = {
  'rec-b2-32-article-echelle': 'The magazine page on the register ladder (act 1), ONE VOICE, one take, a France French magazine voice, lively and clear. The quoted teenager line (« C’est trop relou, ce prof… ») is said in a lighter, faster voice, then back to the reading voice. « Les keufs » is said neutrally, as a word being described.',
  'rec-b2-32-podcast-verlan': 'REQUIRED FOR THE EAR MISSION (act 2): eleven lines, ONE TAKE, ONE VOICE, in authored order: Julien Morel, a Paris podcast host in his thirties, warm and quick, natural speed. The verlan words and their sources are said clearly but NOT slowed down. « 1977 » is read « mille neuf cent soixante-dix-sept ».',
  'rec-b2-32-piege-verlan': PIEGE_BRIEF,
  'rec-b2-32-vocal-lea': 'The voice-message story (act 3), THREE VOICES: a narrator; Léa, seventeen, Lyon, fast and cheerful, verlan said naturally (teuf, meuf, vénère, keufs); the learner, calm, in standard French. No exaggeration or caricature of youth speech.',
  'rec-b2-32-texte-a3': 'The film dialogue (act 3), TWO VOICES, one take: Léa (seventeen) and her mother (forties, amused). Léa’s « Grave. Enfin, oui, tout à fait. » carries a small self-correction. The name labels are NOT read.',
  'rec-b2-32-vocal-yanis': 'REQUIRED FOR THE EAR MISSION (act 4): seven lines, ONE TAKE, ONE VOICE, in authored order: Yanis, twenty-two, Villeurbanne, a relaxed voice message recorded while walking. Natural speed; clipped words (appart, resto, dispo, exam, prof, ciné) said as he would say them.',
  'rec-b2-32-piege-troncation': PIEGE_BRIEF,
  'rec-b2-32-texte-a4': 'Yanis’s group message (act 4), ONE VOICE, one take, read as he would read it aloud to the flatmates: friendly, quick, the clipped words natural.',
  'rec-b2-32-samedi': 'The Saturday story (act 5), THREE VOICES: a narrator; Léa (fast, teasing); the learner (standard French). « Chauffard » is said with real indignation.',
  'rec-b2-32-texte-a5': 'The podcast transcript on endings (act 5), ONE VOICE (Julien Morel, as in act 2), one take; the listener’s quoted question read slightly differently, as a quotation.',
  'rec-b2-32-article-emprunts': 'The magazine page on borrowings (act 6), ONE VOICE, one take, France French, clear and even. Kiffer, le seum, le bled, wesh, zarma, chiller, crush and la go are said naturally, as words being described, never as an imitation of an accent.',
  'rec-b2-32-piege-emprunts': PIEGE_BRIEF,
  'rec-b2-32-texte-a6': 'The comment section (act 6), FIVE VOICES, one take: Sam (a young Québécois), Inès (Lyon), Marc (Paris), Awa (Abidjan, Ivorian French, her own accent, no caricature), Sam again. The usernames are NOT read.',
  'rec-b2-32-concert': 'REQUIRED FOR THE EAR MISSION (act 7), NATURAL SPEED: nine lines, ONE TAKE, in authored order, two friends the morning after a concert. TWO VOICES: Inès asks (lines 1 and 9), Léa answers (lines 2 to 8). Real speed, small overlaps allowed; the intensifiers (trop, grave, de ouf) carry their natural stress.',
  'rec-b2-32-texte-a7': 'The podcast transcript on intensifiers (act 7), TWO VOICES, one take: Claire, a teacher from Nantes (her question), and Julien Morel (his answer).',
  'rec-b2-32-cinema': 'The cinema story (act 8), THREE VOICES: a narrator; the learner (says « c’est de la balle » proudly, with a slight accent); Léa (laughs, then kind). No mockery in her voice at the end.',
  'rec-b2-32-piege-date': PIEGE_BRIEF,
  'rec-b2-32-texte-a8': 'The forum thread (act 8), FOUR VOICES, one take: Lucas (sixteen), Nadia (forty-five), Théo (nineteen), Martine (sixty-two). Ages audible, none caricatured. Names and ages are NOT read.',
  'rec-b2-32-fil': 'The texting thread (act 9), TWO VOICES, one take: Léa and the learner reading their own messages. The abbreviations are read as people read them aloud: slt « salut », jsp « je sais pas », pk « pourquoi », oklm « au calme », rdv « rendez-vous », dsl « désolé », tkt « t’inquiète », bcp « beaucoup », qqch « quelque chose », stp « s’il te plaît », jpp « j’en peux plus », ptdr and mdr as letters (« pé-té-dé-erre », « emme-dé-erre »). With device TTS only, the letters will be spelled: expected.',
  'rec-b2-32-texte-a9': 'The flatshare chat (act 9), THREE VOICES, one take: Julie, Yanis, the learner. Yanis reads his proposed message to the landlord in a slightly more careful voice.',
  'rec-b2-32-entretien': 'REQUIRED FOR THE EAR MISSION (act 10): ten lines, ONE TAKE, ONE VOICE, in authored order: Yanis rehearsing a job interview at home. Each familier line is said casually; each correction (Pardon, Je reprends, Non, Autrement dit) in a noticeably more careful, standard voice. Natural speed.',
  'rec-b2-32-piege-neutre': PIEGE_BRIEF,
  'rec-b2-32-texte-a10': 'The two versions of one message (act 10), ONE VOICE, one take: Yanis reads the message to Karim casually, then the email to the recruiter in a careful, formal voice.',
  'rec-b2-32-modele': 'The model (act 11), TWO VOICES, one take: Yanis and Karim for the thread (casual), then Yanis alone for the email (formal, calm) and the note (explanatory). Headings (Le fil, Le courriel, La note) read as headings.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 32',
  intro: 'At B1 you learned three registers. At B2 you meet the fourth, below them: slang, the words of a group. You learn to recognise verlan (relou, chelou, ouf, teuf, vénère), clipped words (appart, dispo, ado), new endings (calmos, cinoche, flemmard), borrowings from Arabic, English and African French (kiffer, le seum, wesh, la go), intensifiers and fillers (trop, grave, de ouf, genre) and texting shortcuts (mdr, jsp, oklm). Above all you learn judgement: which rung each word sits on, who can say it to whom, what is dated or forced, what can hurt, and how to translate it up into neutral French, softening as you go. You are taught to understand slang, not to speak it. The task: rewrite a slang-filled message thread as a neutral email to a lecturer, with a note on three changes, in DELF B2 format. The lesson covers France; regional slang is lesson 31 in B2.',
  skill: 'PE',
  grammarAssumed: [REGISTRES_UNIT, TUVOUS_UNIT, COURRIELS_UNIT, NEGATION_B1_UNIT, NEGATIONS_B2_UNIT],
  grammarIntroduced: [
    'The register ladder with a fourth rung below familier: argotique, familier, courant, soutenu, and one fact expressed on all four',
    'How verlan is built: syllables inverted by sound, the added schwa of one-syllable words, re-verlanisation; laisse béton, ouf, relou, chelou, zarbi, teuf, meuf, vénère, reum, keuf',
    'Clipping and its outcomes: appart, resto, ado, dispo, prof against the clippings that became standard (métro, vélo, photo)',
    'Resuffixation: -os and -oche lower the register without changing the meaning; -ard adds scorn (flemmard, froussard, chauffard)',
    'Borrowings in youth slang: kiffer, avoir le seum, le bled, wesh, zarma (Arabic), chiller, le crush (English), la go (African French), and why a learner does not imitate them',
    'Spoken intensifiers and fillers and their written equivalents: trop, grave, de ouf, c’est chaud, genre, en mode',
    'Dated, recent and lasting slang; the adult who forces',
    'Texting abbreviations (mdr, ptdr, jsp, tkt, oklm, jpp) and their full written forms with the restored ne',
    'Translating slang into neutral French: keeping the meaning, softening for the person concerned, leaving hurtful words unsaid',
    'A 200 to 250 word register mediation in DELF B2 PE format: a slang thread rewritten as a neutral email, with a note on three changes',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B1, tu as appris trois registres. Ici, tu découvres le quatrième, tout en bas : l’argot, les mots d’un groupe. Tu reconnais le verlan, les mots coupés, les nouvelles fins, les emprunts, les intensifs et les textos ; surtout, tu juges : quel barreau, qui peut le dire à qui, ce qui date, ce qui blesse, et comment le dire au neutre. Tu apprends à comprendre l’argot, pas à le parler. À la fin, tu réécris un fil de messages en courriel neutre, au format du DELF B2.',
    minutes: 150,
    difficulty: 4,
    glyph: 'ouf',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: VERLAN_ARGOT_TERMS,
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

// Citation constants kept in one place; these references keep every import in use.
void [CORPS_REF, COULEURS_REF, STYLE_REF, B222_REFRAME, B222_REFRAME_EN, free];
