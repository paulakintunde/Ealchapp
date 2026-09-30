// b2.34.l1 « Les proverbes et les expressions figées » · the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md in the VOCAB SHAPE of
// B1-WORKSHOP-AND-VOCAB-SHAPES.md (§2, §2.2a), under the B2 rules of
// b2/B2-BUILD-LOG.md. No new section types. THE LAST LESSON OF B2.
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema, so the lesson validates with it in place (as b2.16 to b2.30 do).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   VOCAB rhythm per act 2 to 11: MEET the family in use (a listening at
//   natural speed, a story, a reading), LEARN it (cardDeck: the image, the
//   sense, the English equivalent, the register; or a tapTable), TELL THEM
//   APART (groupDrill), TRAP the calque or the damaged form (trapDrill
//   stepped, or commonErrors), USE it (« À toi », a pick-the-line
//   groupDrill), then from act 3 on a 60 to 120 word text of a real genre
//   (« Dans un texte »: a post, a money column, a blog, a note to a
//   neighbour, a teacher's note, a newsletter, a subtitler's note, an email,
//   minutes), then the gated act check.
//
//    1  Comme dit le proverbe              7   the half-quoted proverb; proverb, figée, locution
//    2  La forme d'un proverbe             7   no article, present, qui = celui qui, no verb (tapTable)
//    3  L'effort et la patience            7   petit à petit, Paris / Rome, lentement, vouloir
//    4  La prudence                        7   prévenir, chat échaudé, Fontaine, les œufs
//    5  Les autres et nous                 7   se ressemble, tel père, l'habit, les absents
//    6  Semer et récolter                  7   sème le vent, récolte, fumée, pluie, goutte d'eau
//    7  La Fontaine                        7   four morals quoted exactly, the fables behind them
//    8  Le proverbe dans la conversation   7   comme on dit, the half quote, the twist, register (tapTable)
//    9  D'une langue à l'autre             7   same image, other image, none; the calques (tapTable)
//   10  Des expressions pour le travail    7   pierre deux coups, cordes, chemins, mal en patience
//   11  Négocier, apaiser, trancher        7   eau dans son vin, huile sur le feu, même bateau
//   12  À toi d'écrire                    11   model, plan, uses, phone-in, TASK, practice, cheat, quiz
//
//   TOTAL 88 missions, 12 acts (7 x 11 + 11). Texts: five readings of 200
//   to 250 words (an opinion column, an advice column, a magazine page on La
//   Fontaine, a team email, the model column), nine act texts of 90 to 105
//   words, four hideLines listenings (a radio chronicle, a phone call, a
//   family dinner, a residents' meeting at natural speed), three stories,
//   one scene, one role play. Corpus: 166 authored rows (.1600-.1765) plus
//   19 reused seed rows, released act by act through `deckTranche`. Quiz:
//   12 rounds of 8 (one per act 2 to 11, an exam round in DELF B2 and TCF
//   format, a recycling round citing B1 and B2 lessons by position). Twelve
//   triggers, twelve drills, five sheets, eleven terms. Three tapTables
//   (acts 2, 8, 9).
//   Chapter artwork: `proverbes-image-prompts.md`, 12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un proverbe se cite, une expression figée se conjugue. »
//   EN: A proverb is quoted; a fixed expression is conjugated.
//
//   ONE METAPHOR, LA PIÈCE ANCIENNE (every chapter image): an old ochre coin
//   passed from hand to hand. It is NOT « a proverb is always true » (act 8
//   and the task discuss it) and NOT « never translate word for word » (act
//   9: tel père, tel fils). Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    what a proverb is against a fixed expression and a locution; the
//           form of French proverbs; twenty frequent proverbs by theme; how
//           a proverb is announced, cut, twisted and used as a hook; their
//           register; their English equivalents (same image, other image,
//           none); La Fontaine's four most quoted morals; eleven B2 fixed
//           expressions of work and negotiation; the opinion column that
//           opens on a proverb.
//   QUOTES  lessons 27, 28, 29 in B1 (their idiom rows, imported, never
//           retyped; their reframes re-exported); lesson 25 in B1 (register);
//           lessons 8, 11, 12, 14, 16, 23 in B2 (a passé simple row, soi,
//           two gérondif proverbs, the past infinitive, concession, the
//           opinion text), re-exported reframes, rows imported by id.
//   LEAVES  slang and verlan to lesson 32 in B2, regional French to lesson
//           31 in B2, translation technique beyond proverbs to lesson 33 in
//           B2 (all written in parallel); body, animal and colour idioms to
//           lessons 27 to 29 in B1.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English authored on every learner
//   string (an `en` field or a final `EN: `), never on an answer. tu in every
//   instruction; the advice columnist and the radio host say vous. Every
//   `say` is French. No spaced « ? » or « ! » in any scene or story bubble.
//   The scenario uses ’ only and embeds no seed row. Lessons cited by trail
//   position in words, never by raw id. Mission answer slots spread by
//   `spreadMissions()`, the quiz by `spreadSlots()` (no text changes, no
//   `why` names a position). Proverb type-ins accept every attested variant
//   (Paris / Rome, fait / faite, jamais / pas, ce que l'on / ce qu'on) and the
//   missing half alone.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE FACT CHECK: corpus §A.7 lists every proverb in its standard form,
//      the four La Fontaine quotations with fable, book and number, and the
//      other claims (« à Rome, fais comme les Romains » heard but not fixed;
//      « hurler avec les loups »; the old sense of « pierre qui roule »).
//   2. LA FONTAINE, « Apprenez que tout flatteur / Vit aux dépens de celui qui
//      l'écoute »: the row prints the two verses as one sentence with a
//      lowercase « vit » and no slash (TTS). Keep, or print the verse break?
//   3. DB-ONLY HEADWORDS: « qui ne tente rien n'a rien », « tomber des
//      nues », « tirer son épingle du jeu », « mettre de l'eau dans son vin »,
//      « tourner autour du pot », « c'est pas la mer à boire » are published
//      Postgres rows the seed does not carry, so the lesson teaches them in
//      SENTENCE rows and card text and authors no twin. Reuse them by id once
//      the seed carries them?
//   4. « Rome ne s'est pas faite en un jour » is the seed's form; the lesson
//      teaches Paris and Rome, fait and faite, as all correct. Agree?
//   5. THE TASK: situation A (an opinion column « Un proverbe à l'épreuve »)
//      or B (an advice-column reply to Malik), 200 to 250 words, DELF B2 PE,
//      FIVE criteria (tâche 3, cohérence 3, étendue 2, correction 2, registre
//      2 = 12), `Lesson.skill` 'PE'.
//   6. The roundup celebrates B2 complete and points to the Examiner's DELF
//      B2 papers; it names no C1 lesson. `Lesson.version` 1; twelve openers
//      on ART_PENDING.
//   7. Lessons 31 to 33 in B2 are written in parallel: the LEAVES line and the
//      act 9 card cite lesson 33 in B2 by position; all four publish together.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  CHRONIQUE_TEXT, COURRIER_TEXT, LAFONTAINE_TEXT, COURRIEL_TEXT, MODELE_TEXT, TASK_MODEL,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A11,
  REGISTRES_UNIT, CORPS_UNIT, ANIMAUX_UNIT, COULEURS_UNIT, GERONDIF_UNIT, INFINITIVES_UNIT,
  CONCESSION_UNIT, ARGUMENTATION_UNIT,
  REGISTRES_REF, CORPS_REF, ANIMAUX_REF, COULEURS_REF, MODES_REF, PASSE_SIMPLE_REF, INSISTANCE_REF,
  GERONDIF_REF, INFINITIVES_REF, CONCESSION_REF, IMPERS_REF, ARGUMENTATION_REF, NEGOCIATION_REF,
  LITTERATURE_REF, TRADUCTION_REF,
  REGISTRES_REF_EN, ARGUMENTATION_REF_EN, CONCESSION_REF_EN, ANIMAUX_REF_EN,
  B128_REFRAME, B128_REFRAME_EN, B125_REFRAME, B125_REFRAME_EN,
  B206_REFRAME, B206_REFRAME_EN, B208_REFRAME, B208_REFRAME_EN, B211_REFRAME, B211_REFRAME_EN,
  B212_REFRAME, B212_REFRAME_EN, B214_REFRAME, B214_REFRAME_EN, B216_REFRAME, B216_REFRAME_EN,
  B223_REFRAME, B223_REFRAME_EN,
} from './proverbes-corpus.ts';
import { PROVERBES_TERMS } from './proverbes-terms.ts';

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
  if (!r) throw new Error(`b2.34: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

/** The imports are typed by hand in the corpus; hold them to the seed. */
for (const id of IMPORT_IDS) {
  const d = SEED.get(id)?.drills ?? [];
  if (!SEED.has(id)) throw new Error(`b2.34: import ${id} is not in the seed`);
  if (!NOT_SPEAKABLE.includes(id) && !d.includes('voiceflash')) throw new Error(`b2.34: ${id} has no voiceflash but is not in NOT_SPEAKABLE`);
  if (!NOT_DECK_ABLE.includes(id) && !d.includes('flashcard')) throw new Error(`b2.34: ${id} has no flashcard but is not in NOT_DECK_ABLE`);
}

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.34: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling (authored, or the seed's), BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.34: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
/** A quotation with no corpus row (a damaged or calqued line shown as such). */
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
/** A card for a seed row that carries no respelling: the respelling is given. */
const cardR = (id: string, sub: string, head: string, label: string, body: string): Card =>
  ({ head, label, fr: fr(id), sub, body });

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

/** THE « IN A TEXT » BEAT that closes acts 3 to 11: one text of a real genre,
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
 *  ACT 1 · COMME DIT LE PROVERBE
 *
 *  The problem: a grandmother says half a proverb and the learner hears an
 *  unfinished sentence. A proverb is quoted, often by half; a fixed
 *  expression is conjugated; a locution is one word. The task is announced.
 *  NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const PERDU = {
  fr: 'Je ne comprends pas la fin de ta phrase, Mamie.',
  ipa: '/ʒə nə kɔ̃.pʁɑ̃ pa la fɛ̃ də ta fʁaz ma.mi/',
  respell: '[zhuh nuh kohⁿ-PRAHⁿ PA | la fehⁿ duh ta FRAZ | ma-MEE]',
  en: 'I do not understand the end of your sentence, Grandma.',
};

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le déjeuner du dimanche',
  frSub: 'Une offre d’emploi à Montréal',
  setting: { place: 'La cuisine de sa grand-mère, à la Croix-Rousse', city: 'Lyon', time: 'dimanche, 13 h', ambience: 'une cafetière, une tarte aux pommes, une offre d’emploi imprimée sur la table' },
  beats: [
    {
      kind: 'narration',
      text: 'Lyon, un dimanche midi. Inès a trouvé une offre d’emploi à Montréal, et elle hésite depuis une semaine. Sa grand-mère pose la cafetière, regarde la feuille imprimée et sourit.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mamie Jeanne',
      fr: fr(E(1600)), en: en(E(1600)), respell: rsOf(E(1600)),
      stage: 'Elle s’arrête au milieu, et elle attend.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: PERDU.fr, en: PERDU.en, respell: PERDU.respell,
      stage: 'Pour toi, la phrase est coupée. Pour elle, elle est finie.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mamie Jeanne',
      fr: 'Mais si, tout le monde connaît la suite.',
      en: 'Oh come on, everyone knows the rest.',
      respell: '[meh SEE | too luh mohⁿd ko-neh la SWEET]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle réponse montre que tu as reconnu le proverbe.',
      size: 'lg',
      options: [
        { fr: PERDU.fr, respell: PERDU.respell, en: PERDU.en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1601)), respell: rsOf(E(1601)), en: en(E(1601)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Mamie Jeanne sourit : tu as complété le proverbe, et tu as pris ta décision. On passe au dessert.',
        breaks: 'Mamie Jeanne soupire et récite le proverbe en entier, puis deux autres. Le déjeuner devient un cours.',
      },
    },
    {
      kind: 'break',
      heading: 'Un proverbe se dit à moitié',
      body: 'Mamie n’avait pas oublié la fin : elle comptait sur toi pour la connaître. Un proverbe se cite souvent à moitié, et chacun complète. EN: A proverb is often said by half; everyone completes it.',
      wrong: { fr: PERDU.fr, ipa: PERDU.ipa, respell: PERDU.respell, en: PERDU.en },
      right: { fr: fr(E(1601)), ipa: ipaOf(E(1601)), respell: rsOf(E(1601)), en: en(E(1601)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: 'Cette leçon t’apprend à reconnaître un proverbe, à le citer, à le discuter et à le traduire, puis à placer des expressions figées de niveau B2. À la fin, tu écris une chronique qui s’ouvre sur un proverbe, comme au DELF B2.',
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['proverbe', 'citation'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Reconnaître un proverbe et sa forme', s: 'Actes 1 et 2 : proverbe, expression figée, locution' },
    { t: 'Comprendre et citer vingt proverbes', s: 'Actes 3 à 7 : la patience, la prudence, les gens, les conséquences, La Fontaine' },
    { t: 'Employer un proverbe dans la conversation', s: 'Actes 8 et 9 : le citer à moitié, le détourner, le traduire' },
    { t: 'Placer des expressions figées, puis écrire', s: 'Actes 10 à 12 : au travail, en négociation, puis ta chronique' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the opinion column. B2 question types labelled. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La chronique de Nadia',
  frSub: 'Une chronique qui s’ouvre sur un proverbe',
  text: CHRONIQUE_TEXT,
  glossary: [
    { word: 'toutes faites', en: 'ready-made', note: 'Des phrases toutes faites : qu’on répète sans y penser.' },
    { word: 'volontiers', en: 'readily', note: 'Facilement, sans se faire prier.' },
  ],
  questions: [
    { q: 'Global : de quoi parle cette chronique ?', a: 'De l’usage des proverbes : ce qu’ils ont d’utile, et pourquoi il faut s’en méfier un peu.' },
    { q: 'Détail : qu’est-ce que le proverbe a fait faire à Nadia à vingt ans ?', a: 'Partir étudier à Québec sans connaître personne.' },
    { q: 'Inférence : pourquoi cite-t-elle « la fortune sourit aux audacieux » puis « prudence est mère de sûreté » ?', a: 'Pour montrer que deux proverbes peuvent dire le contraire : aucun ne suffit à décider.' },
    { q: 'Point de vue : que pense Nadia des proverbes ? Comment le sais-tu ?', a: 'Elle les aime et les emploie, mais comme des conseils, pas comme des preuves : « le proverbe donne un conseil, il ne prend pas la décision à ma place ».' },
  ],
  audio: REC('rec-b2-34-chronique'),
  say: REFRAME,
  terms: ['proverbe', 'accroche'],
};

const A1_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-forme',
  title: 'Proverbe, expression, locution',
  frSub: 'Trois sortes de mots figés',
  hint: 'Quatre cartes : trois familles, et la façon d’annoncer un proverbe.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['proverbe', 'figement', 'locution'],
  cards: [
    card(E(1602), 'Une vérité pour tous', 'le proverbe',
      'Anonyme, au présent, souvent sans article : pierre qui roule n’amasse pas mousse. Tu le cites tel quel, ou à moitié. EN: anonymous, in the present, quoted.'),
    card(E(1603), 'Une image qui se conjugue', 'l’expression figée',
      `Tu en as appris beaucoup dans ${CORPS_REF}, ${ANIMAUX_REF} et ${COULEURS_REF}. Ici, tu vas plus loin : la forme, l’usage, la traduction. EN: you met many in lessons 27 to 29 in B1.`),
    card(E(1605), 'Un groupe, un seul mot', 'la locution',
      'Pas d’image à comprendre : un groupe figé qui sert d’adverbe, de préposition ou de conjonction. EN: a fixed group used as one word.'),
    card(E(1607), 'Pour annoncer', 'la citation',
      'Comme on dit, comme dit le proverbe : l’annonce prévient que la suite est connue de tous. EN: the announcement says the rest is known.'),
  ],
};

const A1_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-trier',
  layer: 'core',
  size: 'lg',
  title: 'Proverbe, expression ou locution',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Des proverbes', [
      it('fr.b1.heure-et-date.051', 'une vérité, au présent'),
      it('fr.a2.heure-et-date.150', 'une préférence, pour tous'),
      it(E(1612), 'sans article'),
    ], chk('Qu’ont en commun ces trois phrases ?',
      ['elles se citent comme une vérité générale', 'leur verbe change avec le sujet', 'elles remplacent un seul mot'], 0,
      'Un proverbe vaut pour tout le monde : on le cite, on ne le conjugue pas. EN: a general truth, quoted.')),
    grp('Des expressions figées', [
      it('fr.b1.expressions-imagees.1307', `vue dans ${ANIMAUX_REF}`),
      it('fr.b1.expressions-imagees.1343', 'même leçon'),
      it(E(1604), 'conjuguée à l’imparfait'),
    ], chk('Dans la troisième phrase, qu’est-ce qui a changé ?',
      ['le temps du verbe : nous avions', 'l’image : le pain devient du riz', 'rien du tout'], 0,
      'Le verbe se conjugue ; l’image reste. EN: the verb changes, the image stays.')),
    ctl('Et tout de suite', '« Tout de suite », c’est…',
      ['une locution', 'un proverbe', 'une expression imagée'], 0,
      'Un groupe figé qui sert d’adverbe, sans image à comprendre. EN: a locution.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figement', 'locution'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où un proverbe fait son effet',
  cases: [
    uc('Ta grand-mère t’encourage à postuler', E(1600)),
    uc('Tu reconnais le proverbe et tu décides', E(1601)),
    uc('Tu parles d’une habitude de famille', E(1609)),
    uc('Tu expliques pourquoi on le coupe', E(1610)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['citation'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La moitié', '« Comme on dit, après la pluie… » Que fait la personne ?',
    ['elle cite un proverbe à moitié', 'elle oublie la fin de sa phrase'], 0,
    'Elle compte sur toi pour connaître la suite : le beau temps. EN: a half quote.'),
  ctl('Ce qui se conjugue', 'Laquelle se conjugue avec le sujet ?',
    ['avoir du pain sur la planche', 'pierre qui roule n’amasse pas mousse'], 0,
    'L’expression figée entre dans ta phrase : j’ai, nous avions du pain sur la planche. EN: the expression conjugates.'),
  ctl('La chronique', 'Pour Nadia, un proverbe sert surtout à…',
    ['ouvrir une discussion', 'prouver qu’on a raison', 'remplacer un argument'], 0,
    'Il donne un conseil ; il ne décide pas. EN: it opens a discussion.'),
], ['proverbe', 'citation']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Comme dit le proverbe',
    opener: {
      line: 'Un déjeuner du dimanche, une offre d’emploi et une phrase coupée en deux : ici tu apprends à reconnaître un proverbe, et à le finir. EN: A Sunday lunch, a job offer and a sentence cut in half: here you learn to recognise a proverb, and to finish it.',
      imageRef: 'lessons/proverbes/act01.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais un proverbe cité à moitié, et tu le distingues d’une expression figée et d’une locution. EN: You recognise a half-quoted proverb and tell it from a fixed expression and a locution.',
    estScreens: 40, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_CARTES, A1_TRIER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 · LA FORME D'UN PROVERBE
 *
 *  A radio chronicle, « le proverbe du lundi »: no article, the present of
 *  general truth, qui = celui qui with a singular verb, proverbs with no
 *  verb, two halves that rhyme. Traps: an added article, a changed tense, a
 *  plural after qui, an added verb.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le proverbe du lundi',
  frSub: 'Écoute ce que l’animateur remarque dans la forme',
  lines: [
    ln(E(1611)), ln(E(1612)), ln(E(1613)), ln(E(1614)), ln(E(1615)), ln(E(1616)),
    ln(E(1617)), ln(E(1618)), ln(E(1619)), ln(E(1620)), ln(E(1621)),
  ],
  questions: [
    { q: 'Quel est le proverbe du jour ?', opts: ['celui de la pierre et de la mousse', 'celui du père et du fils', 'celui de la pluie et du soleil'], correct: 0, why: 'La pierre qui roule, sans article. EN: the rolling stone.' },
    { q: 'Pourquoi le verbe est-il au présent, selon l’animateur ?', opts: ['parce que le proverbe vaut pour tous les temps', 'parce que l’histoire se passe aujourd’hui'], correct: 0, why: 'Le présent de vérité générale. EN: the timeless present.' },
    { q: 'Au sens classique, que veut dire ce proverbe ?', opts: ['qu’on ne s’enrichit pas en changeant sans cesse de métier', 'qu’il faut voyager pour réussir', 'que les pierres sont inutiles'], correct: 0, why: 'Le sens classique, celui des dictionnaires ; aujourd’hui, certains y voient plutôt un éloge du mouvement. EN: the traditional sense.' },
    { q: 'Dans le deuxième proverbe cité, que veut dire qui ?', opts: ['celui qui', 'quelle personne', 'lequel'], correct: 0, why: 'Qui n’interroge pas : il désigne n’importe qui. EN: whoever.' },
    { q: 'Quel exemple donne-t-il d’un proverbe sans verbe ?', opts: ['celui du père et du fils', 'celui de la pierre', 'celui de la lenteur'], correct: 0, why: 'Tel père, tel fils : le verbe est sous-entendu. EN: no verb.' },
  ],
  audio: REC('rec-b2-34-lundi-ecoute'),
  say: REFRAME,
  terms: ['proverbe'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-forme',
  title: 'Cinq marques d’un proverbe',
  frSub: 'Ce qui fait qu’on le reconnaît',
  hint: 'Cinq cartes. Regarde les articles, le temps et le rythme.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['proverbe'],
  cards: [
    card(E(1612), 'Pas d’article', 'la forme',
      'Pierre, mousse : ni « une pierre », ni « de la mousse ». Le proverbe parle de toutes les pierres. EN: no article: it speaks of all stones.'),
    card(E(1625), 'Le présent de toujours', 'le temps',
      'Vrai hier, aujourd’hui et demain : c’est le temps des proverbes et des définitions. EN: the timeless present.'),
    card(E(1622), 'Qui, c’est celui qui', 'la structure',
      'En tête de proverbe, qui n’interroge pas : il désigne n’importe qui, et le verbe reste au singulier. EN: qui means whoever, with a singular verb.'),
    card(E(1655), 'Sans verbe', 'l’ellipse',
      'Tel père, tel fils ; après la pluie, le beau temps : le verbe est sous-entendu. EN: the verb is left out.'),
    card(E(1654), 'Deux moitiés qui riment', 'le rythme',
      'Ressemble, assemble : la rime aide à retenir, et elle permet de couper le proverbe en deux. EN: the rhyme makes it easy to remember.'),
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Repère la forme',
  groups: [
    grp('Des noms sans article', [
      it(E(1612), 'pierre, mousse'),
      it(E(1645), 'chat, eau'),
      it(E(1669), 'fumée, feu'),
    ], chk('Dans ces proverbes, le sujet est…',
      ['général : tous les chats, toutes les pierres', 'un chat ou une pierre précis'], 0,
      'Pas d’article, parce que le proverbe parle de tous. EN: a general subject.')),
    grp('Qui, c’est celui qui', [
      it(E(1617), 'qui va lentement'),
      it(E(1654), 'qui se ressemble'),
      it(E(1667), 'qui sème le vent'),
    ], chk('Qui sème le vent récolte la tempête. Qui récolte la tempête ?',
      ['celui qui sème le vent', 'le vent lui-même', 'personne'], 0,
      'Qui = celui qui : la même personne sème et récolte. EN: whoever sows.')),
    ctl('Sans verbe', 'Lequel n’a pas de verbe conjugué ?',
      ['Après la pluie, le beau temps.', 'Mieux vaut prévenir que guérir.', 'L’habit ne fait pas le moine.'], 0,
      'Après la pluie, le beau temps : le verbe est sous-entendu. EN: no verb.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proverbe'],
};

const A2_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-tableau',
  layer: 'core',
  sheetId: 'sheet-forme',
  title: 'Six moules de proverbes',
  cols: ['Forme', 'Ce qu’elle fait', 'Exemple'],
  rows: [
    { cells: ['nom sans article', 'le sujet vaut pour tous', 'pierre qui roule…'], say: fr(E(1612)),
      detail: { title: 'Sans article', body: 'Le proverbe parle de toutes les pierres et de tous les chats : pas d’article. EN: no article, a general subject.', say: fr(E(1645)) } },
    { cells: ['qui…, verbe', 'celui qui', 'qui va lentement…'], say: fr(E(1617)),
      detail: { title: 'Qui, c’est celui qui', body: 'Qui désigne n’importe qui ; le verbe reste au singulier. EN: whoever, with a singular verb.', say: fr(E(1654)) } },
    { cells: ['il ne faut pas…', 'un conseil pour tous', 'il ne faut pas mettre…'], say: fr(E(1650)),
      detail: { title: 'Il ne faut pas', body: 'Le conseil est impersonnel : il s’adresse à tout le monde. EN: impersonal advice.', say: fr(E(1647)) } },
    { cells: ['mieux vaut… que…', 'une préférence', 'mieux vaut prévenir…'], say: fr(E(1642)),
      detail: { title: 'Mieux vaut', body: 'Mieux vaut, sans il : la forme courte et figée de il vaut mieux. EN: a fixed short form.', say: fr('fr.a2.heure-et-date.150') } },
    { cells: ['tel…, tel…', 'deux moitiés, sans verbe', 'tel père, tel fils'], say: fr(E(1655)),
      detail: { title: 'Tel…, tel…', body: 'Pas de verbe ; tel s’accorde avec le nom : telle mère, telle fille. EN: tel agrees.', say: fr(E(1656)) } },
    { cells: ['pas de… sans…', 'une cause cachée', 'pas de fumée sans feu'], say: fr(E(1669)),
      detail: { title: 'Pas de… sans…', body: 'Ce qu’on voit suppose une cause. Attention : une rumeur a une cause, pas toujours une raison. EN: an effect has a cause.', say: fr(E(1680)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proverbe'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: 'Six proverbes abîmés',
  rule: {
    title: 'On cite, on ne répare pas',
    body: 'Un proverbe cité garde sa forme : pas d’article ajouté, pas de temps changé, pas de verbe inventé, et qui prend un verbe au singulier. EN: keep the quoted form exactly as it is.',
  },
  cards: [
    trap(E(1612), 'un article en trop', 'Une pierre qui roule n’amasse pas de mousse.', 'Sans article : pierre, mousse. EN: no articles.'),
    trap(E(1617), 'un temps changé', 'Qui allait lentement allait sûrement.', 'Le proverbe reste au présent. EN: keep the present.'),
    trap(E(1654), 'un pluriel', 'Qui se ressemblent s’assemblent.', 'Qui = celui qui : le verbe reste au singulier. EN: singular.'),
    trap(E(1655), 'des articles', 'Tel le père, tel le fils.', 'Ni article ni verbe. EN: no article.'),
    trap(E(1670), 'un verbe ajouté', 'Après la pluie, il fait beau temps.', 'Le proverbe n’a pas de verbe. EN: no verb.'),
    trap(E(1669), 'un article en trop', 'Il n’y a pas de fumée sans le feu.', 'Sans feu, sans article. EN: sans feu.'),
  ],
  drill: [
    { promptSay: '… qui roule n’amasse pas mousse.', opts: ['Pierre', 'Une pierre'], correct: 0 },
    { promptSay: 'Qui se ressemble … .', opts: ['s’assemble', 's’assemblent'], correct: 0 },
    { promptSay: 'Qui va lentement … sûrement.', opts: ['va', 'allait'], correct: 0 },
    { promptSay: '… père, tel fils.', opts: ['Tel', 'Tel le'], correct: 0 },
    { promptSay: 'Il n’y a pas de fumée sans … .', opts: ['feu', 'le feu'], correct: 0 },
    { promptSay: 'Après la pluie, … beau temps.', opts: ['le', 'il fait'], correct: 0 },
    { promptSay: '… mère, telle fille.', opts: ['Telle', 'Tel'], correct: 0 },
    { promptSay: 'Qui sème le vent … la tempête.', opts: ['récolte', 'récoltent'], correct: 0 },
  ],
  steps: STEPS('On cite, on ne répare pas', 'Ce que la forme abîmée change'),
  audio: REC('rec-b2-34-piege-forme'),
  say: REFRAME,
  terms: ['proverbe', 'citation'],
};

const A2_ATOI = aToi('a2-atoi', 'tu cites sans abîmer', [
  ctl('La pierre', 'Ton ami change encore de travail. Tu lui dis :',
    ['Tu sais, pierre qui roule n’amasse pas mousse.', 'Tu sais, une pierre qui roule n’amasse pas de mousse.'], 0,
    'Le proverbe garde sa forme, sans article. EN: no article.'),
  ctl('Le temps', 'Tu racontes le conseil que ta mère te donnait :',
    ['Ma mère disait : qui va lentement va sûrement.', 'Ma mère disait : qui allait lentement allait sûrement.'], 0,
    'Le verbe du récit change (disait) ; celui du proverbe reste au présent. EN: the proverb stays in the present.'),
  ctl('Le pluriel', 'Deux amis ont exactement les mêmes goûts. Tu dis :',
    ['Qui se ressemble s’assemble.', 'Qui se ressemblent s’assemblent.'], 0,
    'Singulier, même pour deux personnes. EN: singular.'),
  ctl('Sans verbe', 'Ta fille a le même rire que toi :',
    ['Telle mère, telle fille.', 'Tel la mère, tel la fille.', 'Comme la mère, comme la fille.'], 0,
    'Telle s’accorde, sans article ni verbe. EN: telle mère, telle fille.'),
], ['proverbe', 'citation'], 'sheet-forme');

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('L’article', 'Quelle citation est juste ?',
    ['Chat échaudé craint l’eau froide.', 'Le chat échaudé craint l’eau froide.'], 0,
    'Sans article : le proverbe parle de tous les chats. EN: no article.'),
  ctl('Qui', 'Dans un proverbe, qui en tête veut dire…',
    ['celui qui', 'quelle personne', 'les gens qui'], 0,
    'N’importe qui, au singulier. EN: whoever.'),
  ctl('Le temps', 'Les proverbes sont au présent parce que…',
    ['ils disent une vérité de tous les temps', 'ils racontent une histoire récente'], 0,
    'Le présent de vérité générale. EN: the timeless present.'),
], ['proverbe']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La forme d’un proverbe',
    opener: {
      line: 'Une radio, un animateur et une pierre qui roule : ici tu apprends à reconnaître un proverbe à sa forme, et à le citer sans l’abîmer. EN: A radio show, a host and a rolling stone: here you learn to recognise a proverb by its form, and to quote it without damaging it.',
      imageRef: 'lessons/proverbes/act02.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais un proverbe à son présent, à ses noms sans article, à son qui et à ses deux moitiés, et tu le cites intact. EN: You recognise a proverb by its present, its bare nouns, its qui and its two halves, and quote it intact.',
    estScreens: 44, restPoints: ['a2-construire', 'a2-piege'],
  },
  sections: [A2_ECOUTE, A2_CARTES, A2_CONSTRUIRE, A2_TABLEAU, A2_PIEGE, A2_ATOI, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 · L'EFFORT ET LA PATIENCE
 *
 *  A bakery in Limoilou, six months in; an uncle who answers every worry
 *  with a proverb. Petit à petit, Paris / Rome, qui va lentement, vouloir
 *  c'est pouvoir; the bear's skin (lesson 28 in B1) and c'est en forgeant
 *  (lesson 12 in B2), reused. Errors: the calque « construite », « petit par
 *  petit », « vouloir est pouvoir », « avant de le tuer ».
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'La boulangerie d’Awa',
  frSub: 'Un oncle qui répond par des proverbes',
  setting: 'Québec, quartier Limoilou. Six mois après l’ouverture, la boulangerie d’Awa ne remplit pas encore sa caisse. Son oncle Moussa passe tous les matins.',
  bubbles: [
    { from: 'narrator', fr: 'Sept heures du matin. Awa compte la caisse de la veille ; Moussa boit son café au comptoir.', en: 'Seven in the morning. Awa counts yesterday’s takings; Moussa drinks his coffee at the counter.' },
    { from: 'user', fr: fr(E(1626)), en: en(E(1626)) },
    { from: 'coach', fr: fr(E(1627)), en: en(E(1627)), warn: 'Le proverbe de la patience' },
    { from: 'user', fr: fr(E(1628)), en: en(E(1628)) },
    { from: 'coach', fr: fr(E(1629)), en: en(E(1629)) },
    { from: 'user', fr: fr(E(1630)), en: en(E(1630)) },
    { from: 'coach', fr: fr(E(1631)), en: en(E(1631)), warn: 'Un proverbe, puis un conseil concret' },
    { from: 'user', fr: fr(E(1632)), en: en(E(1632)) },
    { from: 'coach', fr: fr('fr.b1.expressions-imagees.1365'), en: en('fr.b1.expressions-imagees.1365'), warn: `Vu dans ${ANIMAUX_REF}` },
  ],
  closing: { fr: 'Quatre proverbes, une seule idée : le temps travaille pour ceux qui persévèrent.', en: 'Four proverbs, one idea: time works for those who persevere.' },
  audio: REC('rec-b2-34-boulangerie'),
  say: REFRAME,
  terms: ['proverbe', 'figure'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-proverbes',
  title: 'Six proverbes de l’effort',
  frSub: 'L’image, le sens, l’anglais',
  hint: 'Six cartes. Pour chacune : l’image d’abord, le sens ensuite.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['proverbe', 'figure'],
  cards: [
    card(E(1627), 'Peu à peu', 'la patience',
      'Image : un oiseau qui apporte une brindille après l’autre. Sens : un grand résultat se construit lentement. EN: little by little.'),
    card(E(1629), 'Pas en un jour', 'la patience',
      'Sens : une grande œuvre demande du temps. L’anglais dit Rome was not built in a day ; le français dit Paris ou Rome. EN: Rome was not built in a day.'),
    cardR('fr.b1.heure-et-date.051', '[ROMM | nuh seh pa FEHT | ahⁿ-nuhⁿ ZHOOR]', 'La même idée', 'la variante',
      'Avec Rome ; on entend « fait » ou « faite », les deux sont admis. EN: the Rome version; fait and faite both occur.'),
    card(E(1617), 'Lentement, sûrement', 'la patience',
      'Qui avance sans se presser arrive au but. L’anglais parle d’une course : slow and steady. EN: slow and steady wins the race.'),
    card(E(1634), 'La volonté', 'l’effort',
      'Deux infinitifs et c’est : si tu le veux vraiment, tu trouves le moyen. EN: where there is a will, there is a way.'),
    card('fr.b1.expressions-imagees.1360', 'Pas trop tôt', 'la prudence',
      `Vu dans ${ANIMAUX_REF} : ne fête pas un succès que tu n’as pas encore. Le proverbe complet commence par il ne faut pas. EN: do not count your chickens.`),
  ],
};

const A3_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-trier',
  layer: 'core',
  size: 'lg',
  title: 'L’image et le sens',
  groups: [
    grp('La patience', [
      it(E(1633), 'dix pages par jour'),
      it(E(1635), 'un projet pas encore prêt'),
      it(E(1631), 'un dimanche par mois'),
    ], chk('Que conseillent ces trois phrases ?',
      ['avancer peu à peu, sans se décourager', 'aller le plus vite possible', 'abandonner un projet trop long'], 0,
      'Le temps fait son travail, à condition de continuer. EN: keep going, step by step.')),
    grp('L’effort et le bon moment', [
      it(E(1636), 'reprendre ses études'),
      it('fr.b2.connecteurs-logiques.1679', `vu dans ${GERONDIF_REF}`),
      it(E(1638), 'le jury n’a pas voté'),
    ], chk('Laquelle conseille de ne pas fêter trop tôt ?',
      ['celle du jury', 'celle des études', 'celle de la forge'], 0,
      'Le résultat n’est pas encore connu : on ne vend pas la peau de l’ours. EN: not won yet.')),
    ctl('En forgeant', `« C’est en forgeant qu’on devient forgeron » (${GERONDIF_REF}) veut dire…`,
      ['c’est en pratiquant qu’on apprend', 'il faut devenir forgeron', 'le travail manuel vaut mieux que les études'], 0,
      'La pratique fait le métier ; l’anglais dit practice makes perfect. EN: practice makes perfect.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre proverbes mal cités',
  errors: [
    { wrong: 'Rome n’a pas été construite en un jour.', right: fr('fr.b1.heure-et-date.051'),
      why: 'Normal : l’anglais dit built. Le proverbe français dit « ne s’est pas faite » ; construite se comprend, mais ce n’est plus le proverbe. EN: the French proverb uses se faire.' },
    { wrong: 'Petit par petit, l’oiseau fait son nid.', right: fr(E(1627)),
      why: 'Little by little pousse vers par. En français : petit à petit, comme peu à peu. EN: petit à petit.' },
    { wrong: 'Vouloir est pouvoir.', right: fr(E(1634)),
      why: 'Normal : on pense à une égalité. Le proverbe met une pause et c’est : vouloir, c’est pouvoir. EN: with c’est.' },
    { wrong: 'Il ne faut pas vendre la peau de l’ours avant de le tuer.', right: 'Il ne faut pas vendre la peau de l’ours avant de l’avoir tué.',
      why: `Normal : avant de + infinitif présent est courant. Le proverbe garde l’infinitif passé, vu dans ${INFINITIVES_REF}. EN: the past infinitive.` },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proverbe', 'citation'],
};

const A3_ATOI = aToi('a3-atoi', 'le bon proverbe au bon moment', [
  ctl('L’impatience', 'Ton ami veut parler couramment en trois mois. Tu lui dis :',
    ['Paris ne s’est pas fait en un jour.', 'Qui se ressemble s’assemble.', 'Les absents ont toujours tort.'], 0,
    'Une grande œuvre prend du temps. EN: it takes time.'),
  ctl('Le progrès', 'Tu progresses un peu chaque semaine :',
    ['Petit à petit, l’oiseau fait son nid.', 'Après la pluie, le beau temps.'], 0,
    'Une brindille après l’autre. EN: little by little.'),
  ctl('Trop tôt', 'Ton équipe fête une victoire avant la fin du match :',
    ['Il ne faut pas vendre la peau de l’ours avant de l’avoir tué.', 'Qui va lentement va sûrement.'], 0,
    'Le match n’est pas fini : ne fête pas encore. EN: not yet won.'),
  ctl('La volonté', 'Ta voisine a couru un marathon à soixante ans :',
    ['Vouloir, c’est pouvoir.', 'Chat échaudé craint l’eau froide.'], 0,
    'Sa volonté a trouvé le moyen. EN: where there is a will.'),
], ['proverbe'], 'sheet-proverbes');

const A3_TEXTE = dansUnTexte('a3-texte', 'La page de la boulangerie', TEXTE_A3, [
  { q: 'Quels proverbes Awa cite-t-elle, et dans quel ordre ?', a: 'Petit à petit, l’oiseau fait son nid ; qui va lentement va sûrement ; il ne faut pas vendre la peau de l’ours.' },
  { q: 'Pourquoi écrit-elle « paraît-il » après le deuxième ?', a: 'Elle prend un peu de distance : c’est ce qu’on dit, et elle a vérifié que ça marchait.' },
  { q: 'Pourquoi ne fête-t-elle pas la commande de Noël ?', a: 'Rien n’est signé : elle ne veut pas célébrer un succès qu’elle n’a pas encore.' },
  { q: 'Quel proverbe coupe-t-elle, et comment ?', a: 'Celui de l’ours : elle s’arrête à « la peau de l’ours », tout le monde connaît la suite.' },
], 'rec-b2-34-texte-a3', ['proverbe', 'citation']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Paris', 'Rome was not built in a day, en français :',
    ['Paris ne s’est pas fait en un jour.', 'Paris n’a pas été construit en un jour.'], 0,
    'Se faire, pas construire. EN: se faire.'),
  ctl('Le sens', 'Petit à petit, l’oiseau fait son nid veut dire…',
    ['les résultats se construisent peu à peu', 'les oiseaux travaillent beaucoup'], 0,
    'On passe de l’image au sens. EN: from the image to the meaning.'),
  ctl('La forme', 'Où est l’infinitif passé ?',
    ['avant de l’avoir tué', 'avant de le tuer', 'avant qu’il le tue'], 0,
    'Avoir + participe : l’action est finie avant l’autre. EN: the past infinitive.'),
], ['proverbe', 'figure']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'L’effort et la patience',
    opener: {
      line: 'Une boulangerie qui démarre, un oncle qui répond par des proverbes : ici tu apprends ceux de la patience, et quand les dire. EN: A bakery getting started and an uncle who answers in proverbs: here you learn the proverbs of patience, and when to say them.',
      imageRef: 'lessons/proverbes/act03.jpg',
    },
    sections: [],
    milestone: 'Tu cites les proverbes de l’effort et de la patience, avec Paris ou Rome, et tu sais lequel convient à quel moment. EN: You quote the proverbs of effort and patience and know which one fits which moment.',
    estScreens: 40, restPoints: ['a3-trier', 'a3-atoi'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_TRIER, A3_ERREURS, A3_ATOI, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 · LA PRUDENCE
 *
 *  A phone call between Julien and his sister Léa: he wants to put all his
 *  savings into a friend's restaurant. Mieux vaut prévenir que guérir, chat
 *  échaudé, Fontaine, les œufs; mieux vaut tard, chaque chose en son temps
 *  (seed rows). Traps: the English calques (safe / sorry, once bitten) and
 *  damaged forms.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le coup de fil de Léa',
  frSub: 'Écoute ce que Léa oppose à son frère',
  lines: [
    ln(E(1639)), ln(E(1640)), ln(E(1641)), ln(E(1642)), ln(E(1643)),
    ln(E(1644)), ln(E(1646)), ln(E(1647)), ln(E(1648)), ln(E(1649)),
  ],
  questions: [
    { q: 'Que veut faire Julien de ses économies ?', opts: ['les mettre toutes dans un restaurant', 'acheter un appartement', 'les placer à la banque'], correct: 0, why: 'Toutes ses économies, dans le restaurant de son ami. EN: all into a restaurant.' },
    { q: 'Pourquoi refuse-t-il d’abord de faire relire le contrat ?', opts: ['l’affaire vient de son meilleur ami', 'la relecture coûte trop cher'], correct: 0, why: 'Il fait confiance à son ami. EN: he trusts his friend.' },
    { q: 'Pourquoi Léa lit-elle tout, depuis l’an dernier ?', opts: ['elle a signé un bail sans le lire, et elle s’en méfie', 'elle travaille dans une banque', 'son frère le lui a demandé'], correct: 0, why: 'Une mauvaise expérience l’a rendue prudente. EN: once bitten.' },
    { q: 'Quand Julien jure que ça ne lui arrivera jamais, que lui dit Léa ?', opts: ['qu’on ne peut jamais jurer une chose pareille', 'qu’il a raison d’être sûr de lui'], correct: 0, why: 'Il ne faut jamais dire : Fontaine… EN: never say never.' },
    { q: 'Que décide Julien à la fin ?', opts: ['faire relire le contrat et garder la moitié', 'tout investir quand même', 'renoncer au projet'], correct: 0, why: 'Un contrat relu, et pas tous les œufs dans le même panier. EN: a compromise.' },
  ],
  audio: REC('rec-b2-34-prudence-ecoute'),
  say: REFRAME,
  terms: ['proverbe'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-proverbes',
  title: 'Six proverbes de la prudence',
  frSub: 'Avant, après, et au bon moment',
  hint: 'Six cartes. L’anglais a souvent une autre image : garde celle du français.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['proverbe', 'figure'],
  cards: [
    card(E(1642), 'Avant le problème', 'la prudence',
      'Agir avant vaut mieux que réparer après. Mieux vaut, forme figée de il vaut mieux. L’anglais dit better safe than sorry. EN: better safe than sorry.'),
    card(E(1645), 'La brûlure', 'la prudence',
      'Image : un chat brûlé par l’eau chaude se méfie même de l’eau froide. Sens : après une mauvaise expérience, on devient très prudent. EN: once bitten, twice shy.'),
    card(E(1647), 'Jamais, vraiment', 'la prudence',
      'Image : on jure à une fontaine qu’on ne boira jamais son eau, puis on a soif. Sens : ne jure pas que tu ne feras jamais une chose. EN: never say never.'),
    card(E(1650), 'Un seul panier', 'la prudence',
      'Ne mets pas toutes tes ressources dans un seul projet. Même image en anglais. À quelqu’un, tu dis : tous tes œufs. EN: all your eggs in one basket.'),
    cardR('fr.a2.heure-et-date.150', '[myuh voh TAR | kuh zha-MEH]', 'Enfin', 'le retard',
      'Même moule que mieux vaut prévenir : mieux vaut… que… Le proverbe console quand on agit tard. EN: better late than never.'),
    cardR('fr.b1.heure-et-date.050', '[shak SHOHZ | ahⁿ sohⁿ TAHⁿ]', 'Dans l’ordre', 'le bon moment',
      'Sans verbe : une chose après l’autre, chacune à son moment. EN: everything in its own time.'),
  ],
};

const A4_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-trier',
  layer: 'core',
  size: 'lg',
  title: 'Quel proverbe pour quel risque',
  groups: [
    grp('Après une mauvaise expérience', [
      it(E(1643), 'la cause'),
      it(E(1644), 'depuis, je lis tout'),
      it(E(1652), 'échaudé, tout seul'),
    ], chk('Échaudé par son dernier contrat : que veut dire échaudé ici ?',
      ['rendu méfiant par une mauvaise expérience', 'brûlé par de l’eau chaude'], 0,
      'Le mot du proverbe vit aussi seul, au sens figuré. EN: made wary.')),
    grp('Avant de prendre un risque', [
      it(E(1642), 'agir avant'),
      it(E(1648), 'répartir'),
      it(E(1653), 'les freins'),
    ], chk('Laquelle conseille de répartir ses ressources ?',
      ['celle des œufs', 'celle des freins', 'celle de la prévention'], 0,
      'Un seul panier, et tout se casse ensemble. EN: spread the risk.')),
    ctl('Jamais', 'Il ne faut jamais dire : Fontaine… s’adresse à quelqu’un qui…',
      ['jure qu’il ne fera jamais une chose', 'boit trop d’eau', 'se méfie de tout'], 0,
      'Personne n’est à l’abri de faire un jour ce qu’il refusait. EN: never say never.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figure'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Six prudences mal traduites',
  rule: {
    title: 'Le français a déjà son proverbe',
    body: 'Better safe than sorry, once bitten, twice shy : l’anglais souffle une traduction mot à mot. Le français a déjà son proverbe, souvent avec une autre image, et il en garde chaque mot. EN: French already has its own proverb.',
  },
  cards: [
    trap(E(1642), 'better safe than sorry', 'Mieux vaut être sûr que désolé.', 'Le proverbe français oppose prévenir et guérir. EN: prévenir, guérir.'),
    trap(E(1645), 'once bitten, twice shy', 'Une fois mordu, deux fois timide.', 'Le français prend le chat et l’eau froide. EN: the scalded cat.'),
    trap(E(1644), 'un autre mot', 'Justement : chat brûlé craint l’eau froide. Depuis, je lis tout.', 'Échaudé : brûlé par l’eau chaude ; le proverbe garde ce mot. EN: échaudé.'),
    trap(E(1647), 'la fin changée', 'Il ne faut jamais dire : Fontaine, je ne boirai jamais ton eau.', 'Pas de ton eau : un seul jamais, au début. EN: one jamais.'),
    trap(E(1650), 'un autre objet', 'Il ne faut pas mettre tous ses œufs dans le même sac.', 'Le panier, comme en anglais. EN: the basket.'),
    trap(E(1653), 'l’ordre inversé', 'Mieux vaut guérir que prévenir : j’ai fait vérifier les freins avant de partir.', 'Prévenir d’abord : c’est tout le sens. EN: prevention first.'),
  ],
  drill: [
    { promptSay: 'Mieux vaut … que guérir.', opts: ['prévenir', 'être sûr'], correct: 0 },
    { promptSay: 'Chat … craint l’eau froide.', opts: ['échaudé', 'mordu'], correct: 0 },
    { promptSay: 'Il ne faut jamais dire : Fontaine, je ne boirai pas … .', opts: ['de ton eau', 'jamais ton eau'], correct: 0 },
    { promptSay: 'Il ne faut pas mettre tous ses œufs dans le même … .', opts: ['panier', 'sac'], correct: 0 },
    { promptSay: 'Ne mets pas tous … œufs dans le même panier.', opts: ['tes', 'ses'], correct: 0 },
    { promptSay: '… vaut tard que jamais.', opts: ['Mieux', 'Plus'], correct: 0 },
    { promptSay: 'Chaque chose en … temps.', opts: ['son', 'bon'], correct: 0 },
    { promptSay: '… par son dernier contrat, il relit tout.', opts: ['Échaudé', 'Mordu'], correct: 0 },
  ],
  steps: STEPS('Le français a déjà son proverbe', 'Ce que le calque fait entendre'),
  audio: REC('rec-b2-34-piege-prudence'),
  say: REFRAME,
  terms: ['calque', 'proverbe'],
};

const A4_ATOI = aToi('a4-atoi', 'tu conseilles la prudence', [
  ctl('Avant', 'Ta sœur part en montagne sans regarder la météo. Tu lui dis :',
    ['Mieux vaut prévenir que guérir.', 'Après la pluie, le beau temps.'], 0,
    'Regarder avant de partir. EN: better safe than sorry.'),
  ctl('Après', 'Depuis sa panne sur l’autoroute, ton père fait réviser sa voiture tous les trois mois :',
    ['Chat échaudé craint l’eau froide.', 'Qui va lentement va sûrement.'], 0,
    'Une mauvaise expérience l’a rendu prudent. EN: once bitten.'),
  ctl('Jamais', 'Ton ami jure qu’il ne vivra jamais en banlieue :',
    ['Il ne faut jamais dire : Fontaine, je ne boirai pas de ton eau.', 'Mieux vaut tard que jamais.'], 0,
    'On ne jure pas ce genre de chose. EN: never say never.'),
  ctl('Répartir', 'Ta cousine veut placer tout son argent dans une seule entreprise. Tu lui dis :',
    ['Ne mets pas tous tes œufs dans le même panier.', 'Ne mets pas tous ses œufs dans le même panier.'], 0,
    'Tu lui parles : tes œufs. Le proverbe cité tel quel dit ses œufs. EN: tes, when you speak to her.'),
], ['proverbe'], 'sheet-proverbes');

const A4_TEXTE = dansUnTexte('a4-texte', 'La chronique argent', TEXTE_A4, [
  { q: 'Quels trois proverbes le chroniqueur emploie-t-il ?', a: 'Mieux vaut prévenir que guérir ; il ne faut pas mettre tous ses œufs dans le même panier ; il ne faut jamais dire : Fontaine, je ne boirai pas de ton eau.' },
  { q: 'Quel mot d’un autre proverbe apparaît seul, au sens figuré ?', a: 'Échaudé : « si vous avez déjà été échaudé », c’est-à-dire rendu méfiant par une mauvaise expérience.' },
  { q: 'À quoi sert la dernière phrase ?', a: 'Le texte donne des réflexes, pas un conseil financier : il renvoie à un professionnel.' },
], 'rec-b2-34-texte-a4', ['proverbe', 'figure']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le calque', 'Better safe than sorry, en français :',
    ['Mieux vaut prévenir que guérir.', 'Mieux vaut être sûr que désolé.'], 0,
    'Le proverbe français existe déjà. EN: the French proverb.'),
  ctl('Le chat', 'Chat échaudé craint l’eau froide parle de quelqu’un qui…',
    ['a souffert et devient prudent', 'n’aime pas l’eau', 'a peur des chats'], 0,
    'De l’image au sens. EN: once bitten, twice shy.'),
  ctl('Le possessif', 'Tu parles à un ami. Laquelle est juste ?',
    ['Ne mets pas tous tes œufs dans le même panier.', 'Ne mets pas tous ses œufs dans le même panier.'], 0,
    'À l’impératif, tu t’adresses à lui : tes œufs. EN: tes with the imperative.'),
], ['proverbe']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La prudence',
    opener: {
      line: 'Un frère prêt à tout miser, une sœur qui a appris à se méfier : ici tu apprends les proverbes de la prudence, et leurs faux jumeaux anglais. EN: A brother ready to stake everything and a sister who has learned caution: here you learn the proverbs of prudence and their false English twins.',
      imageRef: 'lessons/proverbes/act04.jpg',
    },
    sections: [],
    milestone: 'Tu conseilles la prudence avec le bon proverbe, et tu ne traduis plus better safe than sorry mot à mot. EN: You advise caution with the right proverb and no longer translate better safe than sorry word for word.',
    estScreens: 42, restPoints: ['a4-trier', 'a4-atoi'],
  },
  sections: [A4_ECOUTE, A4_CARTES, A4_TRIER, A4_PIEGE, A4_ATOI, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 · LES AUTRES ET NOUS
 *
 *  An advice column in a Brussels magazine: a new employee judged by her
 *  jeans and left out of meetings. Qui se ressemble s'assemble, tel père tel
 *  fils, telle mère telle fille, l'habit ne fait pas le moine, les absents
 *  ont toujours tort, se fier aux apparences. Errors: a misapplied proverb,
 *  « les vêtements », « le tort », a proverb not adapted to the person.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courrier de Solange',
  frSub: 'Une lectrice, trois proverbes, une réponse',
  text: COURRIER_TEXT,
  glossary: [
    { word: 'lucides', en: 'clear-sighted', note: 'Qui voient les choses comme elles sont.' },
    { word: 'garde-robe', en: 'wardrobe', note: 'L’ensemble des vêtements de quelqu’un.' },
  ],
  questions: [
    { q: 'Global : à quoi sert la réponse de Solange ?', a: 'À conseiller Clara : garder son style, mais soigner sa présence et ne pas laisser les décisions se prendre sans elle.' },
    { q: 'Détail : quels trois proverbes Solange emploie-t-elle ?', a: 'L’habit ne fait pas le moine ; les absents ont toujours tort ; qui se ressemble s’assemble.' },
    { q: 'Inférence : que veut dire Solange quand elle écrit que le proverbe dit « qu’ils ont tort de le faire, pas qu’ils ne le font pas » ?', a: 'Le proverbe critique ceux qui jugent sur l’apparence ; il ne prétend pas que personne ne le fait. Clara doit donc en tenir compte.' },
    { q: 'Point de vue : Solange donne-t-elle raison à la mère ou au compagnon ?', a: 'Aux deux, à moitié : le style n’est pas le problème, mais la présence et les alliés comptent.' },
  ],
  audio: REC('rec-b2-34-courrier'),
  say: REFRAME,
  terms: ['proverbe', 'accroche'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-proverbes',
  title: 'Six façons de juger les autres',
  frSub: 'Ressemblance, apparence, absence',
  hint: 'Six cartes. Ces proverbes jugent vite : garde un sourire en les disant.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['proverbe', 'figure'],
  cards: [
    card(E(1654), 'Les semblables', 'les gens',
      'Sens : les gens qui se ressemblent se retrouvent. L’anglais parle d’oiseaux du même plumage. EN: birds of a feather flock together.'),
    card(E(1655), 'La ressemblance', 'les gens',
      'Le fils ressemble au père, souvent pour un défaut. Même image en anglais. EN: like father, like son.'),
    card(E(1656), 'Au féminin', 'les gens',
      'Tel s’accorde : telle mère, telle fille. On adapte le proverbe aux personnes dont on parle. EN: like mother, like daughter.'),
    card(E(1657), 'Les apparences', 'les gens',
      'Image : la robe du moine ne fait pas de lui un moine. Sens : ne juge pas quelqu’un sur son apparence. Ici, habit veut dire vêtement. EN: clothes do not make the man.'),
    card(E(1658), 'Ne pas être là', 'les gens',
      'Celui qui n’est pas là ne peut pas se défendre, et on lui donne tort. Pas d’équivalent anglais figé. EN: no fixed English equivalent.'),
    card(E(1664), 'Juger sur la mine', 'l’expression',
      'C’est ce que l’habit ne fait pas le moine déconseille. On se fie aux apparences, puis on se trompe. EN: to trust appearances.'),
  ],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quel proverbe, quelle situation',
  groups: [
    grp('Ils se ressemblent, ou pas', [
      it(E(1659), 'les mêmes goûts'),
      it(E(1660), 'têtu comme son père'),
      it(E(1666), 'le contraire du proverbe'),
    ], chk('Dans la troisième phrase, que fait la personne ?',
      ['elle contredit le proverbe', 'elle le cite tel quel', 'elle le traduit'], 0,
      'Contrairement au proverbe : on le discute. EN: she disagrees with it.')),
    grp('L’apparence et l’absence', [
      it(E(1661), 'le vieux pull'),
      it(E(1662), 'la réunion manquée'),
      it(E(1663), 'un pays tous les deux ans'),
    ], chk('Quelle phrase illustre l’habit ne fait pas le moine ?',
      ['celle du vieux pull', 'celle de la réunion', 'celle des voyages'], 0,
      'On l’a jugé sur son pull : c’était le directeur. EN: judged by his clothes.')),
    ctl('Avec un sourire', 'Les proverbes sur les gens, on les cite plutôt…',
      ['avec humour, comme une impression', 'comme un jugement définitif'], 0,
      'Ils jugent vite : une impression, pas une sentence. EN: with a smile.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proverbe'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de rater un proverbe sur les gens',
  errors: [
    { wrong: 'Ils ne se ressemblent pas du tout : qui se ressemble s’assemble.', right: fr(E(1659)),
      why: 'Normal : on pense que le proverbe parle d’amitié en général. Il parle de gens qui se ressemblent et se retrouvent ; ici, il ne s’applique pas. EN: it needs people who are alike.' },
    { wrong: 'Les vêtements ne font pas le moine.', right: fr(E(1657)),
      why: 'Normal : pour toi, habit fait penser à une habitude. Ici, c’est un vêtement, et le proverbe garde ce mot. EN: habit here is a garment.' },
    { wrong: 'Les absents ont toujours le tort.', right: fr(E(1658)),
      why: 'Normal : un nom appelle un article. Mais avoir tort n’en prend pas : ils ont tort. EN: avoir tort, no article.' },
    { wrong: 'Elle est aussi têtue que sa mère : tel père, tel fils.', right: 'Elle est aussi têtue que sa mère : telle mère, telle fille.',
      why: 'Normal : on apprend le proverbe au masculin. Mais on l’adapte aux personnes : telle mère, telle fille. EN: adapt it to the people.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proverbe', 'citation'],
};

const A5_ATOI = aToi('a5-atoi', 'le proverbe qui juge juste', [
  ctl('L’inconnue', 'Tu as jugé une collègue sur sa tenue, et tu t’es trompé :',
    ['L’habit ne fait pas le moine.', 'Tel père, tel fils.'], 0,
    'Tu l’avais jugée sur l’apparence. EN: appearances.'),
  ctl('La réunion', 'Tu as raté la réunion, et on t’a donné le pire dossier :',
    ['Les absents ont toujours tort.', 'Qui va lentement va sûrement.'], 0,
    'Tu n’étais pas là pour te défendre. EN: the absent.'),
  ctl('Les amis', 'Tes deux amis fous de jazz se sont rencontrés à un concert :',
    ['Qui se ressemble s’assemble.', 'Pierre qui roule n’amasse pas mousse.'], 0,
    'Les mêmes goûts les ont réunis. EN: birds of a feather.'),
  ctl('La nièce', 'Ta nièce cuisine aussi bien que sa mère :',
    ['Telle mère, telle fille.', 'Telle mère, tel fils.'], 0,
    'Adapte le proverbe à la personne. EN: adapt it.'),
], ['proverbe'], 'sheet-proverbes');

const A5_TEXTE = dansUnTexte('a5-texte', 'Tel père, tel fils, vraiment', TEXTE_A5, [
  { q: 'Pourquoi le fils levait-il les yeux au ciel ?', a: 'Il ne se trouvait pas du tout comme son père, et le proverbe l’agaçait.' },
  { q: 'Qu’est-ce qui lui fait dire que le proverbe « n’avait pas tout à fait tort » ?', a: 'Comme son père, il relit ses contrats et déteste être en retard.' },
  { q: 'Comment reprend-il « l’habit ne fait pas le moine » ?', a: 'Il l’élargit : « le métier non plus » ; ce qui les rapproche ne se voit pas.' },
], 'rec-b2-34-texte-a5', ['proverbe', 'citation']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('L’habit', 'Dans l’habit ne fait pas le moine, l’habit, c’est…',
    ['le vêtement', 'l’habitude', 'la maison'], 0,
    'Un vêtement, ici celui du moine. EN: the garment.'),
  ctl('L’accord', 'Pour une mère et sa fille :',
    ['Telle mère, telle fille.', 'Tel mère, tel fille.'], 0,
    'Tel s’accorde avec le nom. EN: telle.'),
  ctl('Le tort', 'Les absents ont toujours…',
    ['tort', 'le tort', 'des torts'], 0,
    'Avoir tort, sans article. EN: avoir tort.'),
], ['proverbe']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Les autres et nous',
    opener: {
      line: 'Un jean qu’on juge, une réunion sans toi, un fils qui ressemble à son père : ici tu apprends les proverbes qui parlent des gens, et à les dire avec un sourire. EN: Jeans that get judged, a meeting without you, a son like his father: here you learn the proverbs about people, and to say them with a smile.',
      imageRef: 'lessons/proverbes/act05.jpg',
    },
    sections: [],
    milestone: 'Tu choisis le proverbe qui juge juste, tu l’adaptes à la personne et tu sais quand il ne s’applique pas. EN: You pick the proverb that fits, adapt it to the person, and know when it does not apply.',
    estScreens: 40, restPoints: ['a5-lecture', 'a5-erreurs'],
  },
  sections: [A5_LECTURE, A5_CARTES, A5_CHOISIR, A5_ERREURS, A5_ATOI, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 · SEMER ET RÉCOLTER
 *
 *  A neighbour dispute told on a balcony of the Plateau, a friend who
 *  answers in proverbs. Qui sème le vent récolte la tempête, on récolte ce
 *  que l'on sème, pas de fumée sans feu (and its limit: a cause is not
 *  proof), après la pluie le beau temps, la goutte d'eau qui fait déborder
 *  le vase, l'appétit vient en mangeant (lesson 12 in B2). Traps: changed
 *  words and English calques.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'La dispute du quatrième étage',
  frSub: 'Une voisine, une amie, cinq images',
  setting: 'Montréal, un soir, sur un balcon du Plateau. Nathalie raconte à son amie Sonia la dispute qui l’oppose à son voisin.',
  bubbles: [
    { from: 'narrator', fr: 'Nathalie pose son verre et soupire. Sonia attend la suite.', en: 'Nathalie puts down her glass and sighs. Sonia waits for the rest.' },
    { from: 'user', fr: fr(E(1672)), en: en(E(1672)) },
    { from: 'user', fr: fr(E(1673)), en: en(E(1673)) },
    { from: 'user', fr: fr(E(1674)), en: en(E(1674)) },
    { from: 'coach', fr: fr(E(1667)), en: en(E(1667)), warn: 'La conséquence' },
    { from: 'user', fr: fr(E(1675)), en: en(E(1675)) },
    { from: 'coach', fr: fr(E(1676)), en: en(E(1676)), warn: 'Une cause, pas une preuve' },
    { from: 'user', fr: fr(E(1677)), en: en(E(1677)) },
    { from: 'coach', fr: fr(E(1678)), en: en(E(1678)), warn: 'La consolation' },
  ],
  closing: { fr: 'Semer, récolter, la fumée, la goutte d’eau, puis la pluie qui passe : cinq images pour une dispute.', en: 'Sowing, reaping, smoke, the last drop, then the rain that passes: five images for one quarrel.' },
  audio: REC('rec-b2-34-balcon'),
  say: REFRAME,
  terms: ['proverbe', 'figure'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-proverbes',
  title: 'Causes et conséquences',
  frSub: 'Cinq proverbes et une expression',
  hint: 'Six cartes. La cinquième n’est pas un proverbe : regarde comment elle entre dans la phrase.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['proverbe', 'figement'],
  cards: [
    card(E(1667), 'La tempête', 'la conséquence',
      'Image : semer du vent, récolter une tempête. Sens : qui provoque un conflit en subit un plus grand. L’anglais garde l’image. EN: sow the wind, reap the whirlwind.'),
    card(E(1668), 'La récolte', 'la conséquence',
      'Tes actes finissent par te revenir, en bien ou en mal. Même image en anglais. EN: you reap what you sow.'),
    card(E(1669), 'La fumée', 'la cause',
      'Une rumeur a souvent une cause. À citer avec prudence : une cause n’est pas une preuve. EN: no smoke without fire.'),
    card(E(1670), 'Le beau temps', 'la consolation',
      'Sans verbe : après les ennuis vient le calme. L’anglais parle d’un nuage bordé d’argent. EN: every cloud has a silver lining.'),
    card(E(1671), 'La goutte de trop', 'l’expression figée',
      'Pas un proverbe : une expression qu’on place dans la phrase. C’est la goutte d’eau qui fait déborder le vase. EN: the last straw.'),
    card('fr.b2.connecteurs-logiques.1748', 'Plus on a, plus on veut', 'la conséquence',
      `Vu dans ${GERONDIF_REF}, avec son gérondif figé. Sens : le désir grandit à mesure qu’on le satisfait. EN: appetite comes with eating.`),
  ],
};

const A6_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-trier',
  layer: 'core',
  size: 'lg',
  title: 'Cause, conséquence, consolation',
  groups: [
    grp('La conséquence', [
      it(E(1679), 'le menteur'),
      it(E(1674), 'le voisin ne salue plus'),
      it(E(1681), 'trois jours de retard'),
    ], chk('Dans la phrase du menteur, que dit le proverbe ?',
      ['ses mensonges se retournent contre lui', 'il a eu de la chance', 'personne ne l’a vu mentir'], 0,
      'On récolte ce que l’on sème. EN: it comes back to him.')),
    grp('La rumeur et la consolation', [
      it(E(1676), 'une fête, une fois'),
      it(E(1680), 'une cause, pas une preuve'),
      it(E(1678), 'demain, ça ira mieux'),
    ], chk('Pourquoi citer « pas de fumée sans feu » avec prudence ?',
      ['une rumeur peut avoir une cause sans être vraie', 'le proverbe est trop familier'], 0,
      'Une cause n’est pas une preuve. EN: a cause is not proof.')),
    ctl('Proverbe ou expression', 'La goutte d’eau qui fait déborder le vase, c’est…',
      ['une expression qu’on place dans la phrase', 'un proverbe qu’on cite seul'], 0,
      'On dit « c’est la goutte d’eau… » : elle entre dans ta phrase. EN: a fixed expression.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figement'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Six conséquences mal dites',
  rule: {
    title: 'Chaque proverbe garde ses mots',
    body: 'Sous l’influence de l’anglais, on change un mot : l’orage, le soleil, la paille du chameau. Le proverbe français garde les siens : la tempête, le beau temps, la goutte d’eau. EN: keep the French words.',
  },
  cards: [
    trap(E(1667), 'un autre orage', 'Qui sème le vent récolte l’orage.', 'La tempête, pas l’orage. EN: la tempête.'),
    trap(E(1669), 'where there is smoke', 'Où il y a de la fumée, il y a du feu.', 'Le français dit : il n’y a pas de fumée sans feu. EN: the French form.'),
    trap(E(1670), 'le soleil', 'Après la pluie, le soleil.', 'Le beau temps, pas le soleil. EN: le beau temps.'),
    trap(E(1681), 'the last straw', 'Ces trois jours de retard, c’est la paille qui casse le dos du chameau.', 'Le français remplit un vase, goutte à goutte. EN: the drop of water.'),
    trap(E(1668), 'd’autres verbes', 'On moissonne ce que l’on plante.', 'Récolter et semer, les deux verbes du proverbe. EN: récolter, semer.'),
    trap(E(1676), 'à l’envers', 'Il n’y a pas de feu sans fumée : tu as fait une fête, une fois.', 'La fumée d’abord : ce qu’on voit fait deviner la cause. EN: smoke first.'),
  ],
  drill: [
    { promptSay: 'Qui sème le vent récolte … .', opts: ['la tempête', 'l’orage'], correct: 0 },
    { promptSay: 'On récolte ce que l’on … .', opts: ['sème', 'plante'], correct: 0 },
    { promptSay: 'Il n’y a pas de … sans feu.', opts: ['fumée', 'flamme'], correct: 0 },
    { promptSay: 'Après la pluie, … .', opts: ['le beau temps', 'le soleil'], correct: 0 },
    { promptSay: 'C’est la goutte d’eau qui fait déborder … .', opts: ['le vase', 'le verre'], correct: 0 },
    { promptSay: 'L’appétit vient en … .', opts: ['mangeant', 'buvant'], correct: 0 },
    { promptSay: 'Il a menti : il … ce qu’il a semé.', opts: ['récolte', 'moissonne'], correct: 0 },
    { promptSay: 'Qui sème le … récolte la tempête.', opts: ['vent', 'feu'], correct: 0 },
  ],
  steps: STEPS('Chaque proverbe garde ses mots', 'Ce que le mot changé abîme'),
  audio: REC('rec-b2-34-piege-consequence'),
  say: REFRAME,
  terms: ['calque', 'proverbe'],
};

const A6_ATOI = aToi('a6-atoi', 'la bonne conséquence', [
  ctl('La dispute', 'Ton collègue a insulté tout le monde, et plus personne ne l’aide :',
    ['On récolte ce que l’on sème.', 'Petit à petit, l’oiseau fait son nid.'], 0,
    'Ses actes lui reviennent. EN: you reap what you sow.'),
  ctl('La rumeur', 'Tu veux dire qu’une rumeur a sans doute une cause, avec prudence :',
    ['Il n’y a pas de fumée sans feu, mais attendons de savoir.', 'Il n’y a pas de fumée sans feu, donc c’est vrai.'], 0,
    'Une cause n’est pas une preuve. EN: cautious.'),
  ctl('Le détail de trop', 'Après dix retards, le onzième te met en colère :',
    ['C’est la goutte d’eau qui fait déborder le vase.', 'C’est une tempête dans un verre d’eau.'], 0,
    'Le petit détail de trop, après beaucoup d’autres. EN: the last straw.'),
  ctl('Consoler', 'Ton amie sort d’une semaine terrible :',
    ['Après la pluie, le beau temps.', 'Qui sème le vent récolte la tempête.'], 0,
    'Le calme revient après les ennuis. EN: a silver lining.'),
], ['proverbe'], 'sheet-proverbes');

const A6_TEXTE = dansUnTexte('a6-texte', 'Le mot de Nathalie', TEXTE_A6, [
  { q: 'Avec quel proverbe Nathalie reconnaît-elle ses torts, et comment le prolonge-t-elle ?', a: 'Qui sème le vent récolte la tempête ; elle le prolonge au passé : j’ai récolté ce que j’avais semé.' },
  { q: 'Comment emploie-t-elle « pas de fumée sans feu » ?', a: 'Elle admet une petite part de vérité (une soirée, un samedi) sans accepter la rumeur.' },
  { q: 'Pourquoi finit-elle sur « après la pluie, le beau temps, j’espère » ?', a: 'Elle propose la réconciliation, avec prudence : « j’espère ».' },
], 'rec-b2-34-texte-a6', ['proverbe', 'citation']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La tempête', 'Qui sème le vent récolte…',
    ['la tempête', 'l’orage', 'la pluie'], 0,
    'La tempête : le mot du proverbe. EN: la tempête.'),
  ctl('La prudence', 'Il n’y a pas de fumée sans feu prouve-t-il qu’une rumeur est vraie ?',
    ['non, il dit seulement qu’elle a une cause', 'oui, toujours'], 0,
    'Une cause, pas une preuve. EN: not proof.'),
  ctl('Le vase', 'The last straw, en français :',
    ['la goutte d’eau qui fait déborder le vase', 'la dernière paille'], 0,
    'Une autre image pour la même idée. EN: the last drop.'),
], ['proverbe', 'figement']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Semer et récolter',
    opener: {
      line: 'Un mot sec sur une porte, une rumeur dans l’immeuble, une amie sur un balcon : ici tu apprends les proverbes des causes et des conséquences. EN: A curt note on a door, a rumour in the building, a friend on a balcony: here you learn the proverbs of causes and consequences.',
      imageRef: 'lessons/proverbes/act06.jpg',
    },
    sections: [],
    milestone: 'Tu dis une conséquence, une cause et une consolation avec le bon proverbe, et tu cites la fumée avec prudence. EN: You express a consequence, a cause and a consolation with the right proverb, and quote the smoke with care.',
    estScreens: 42, restPoints: ['a6-trier', 'a6-atoi'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_TRIER, A6_PIEGE, A6_ATOI, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 · LA FONTAINE, FABRIQUE DE PROVERBES
 *
 *  A magazine page: four morals quoted word for word (corpus §A.7 v to y),
 *  the fables behind them, the passé simple of the fables (lesson 8 in B2),
 *  soi after on (lesson 11 in B2). A moral is a quotation, not an anonymous
 *  proverb. Errors: « à l'heure », « que nous », « celui qu'il écoute », the
 *  moral read as approval.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Pourquoi citons-nous La Fontaine',
  frSub: 'Une page de magazine',
  text: LAFONTAINE_TEXT,
  glossary: [
    { word: 'fabuliste', en: 'fable writer', note: 'L’auteur de fables.' },
    { word: 'détournez', en: 'twist', note: 'Détourner une citation : en changer exprès la fin ou le sens.' },
  ],
  questions: [
    { q: 'Global : quelle est l’idée principale de cette page ?', a: 'Nous citons La Fontaine sans le savoir, mais une morale est une citation : on la cite exactement, ou on dit qu’on la détourne.' },
    { q: 'Détail : où La Fontaine place-t-il « la raison du plus fort » ?', a: 'Au début d’une fable où un loup dévore un agneau innocent.' },
    { q: 'Inférence : que veut dire l’auteur quand il écrit que La Fontaine « laisse au lecteur le soin de s’indigner » ?', a: 'La Fontaine montre l’injustice sans la juger : c’est au lecteur de la trouver révoltante.' },
    { q: 'Point de vue : quelle différence l’auteur fait-il entre un proverbe et une morale ?', a: 'Un proverbe n’a pas d’auteur et chacun l’arrange ; une morale est une citation qu’on respecte mot pour mot.' },
  ],
  audio: REC('rec-b2-34-lafontaine'),
  say: REFRAME,
  terms: ['morale', 'citation'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-lafontaine',
  title: 'Quatre morales, mot pour mot',
  frSub: 'Et les fables qui les portent',
  hint: 'Six cartes. Ici, pas de variante : on cite exactement.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['morale', 'citation'],
  cards: [
    card(E(1682), 'Le loup et l’agneau', 'la morale',
      'Le premier vers de la fable. La Fontaine décrit la loi du plus fort ; il ne l’approuve pas. Aujourd’hui, on la cite pour dénoncer. EN: described, not approved.'),
    card(E(1683), 'Le lièvre et la tortue', 'la morale',
      'Mieux vaut partir à temps que courir vite. Cite-la avec le point-virgule du texte. EN: set off in good time.'),
    card(E(1684), 'Le lion et le rat', 'la morale',
      `Soi, et pas nous : on est un sujet général, comme dans ${INSISTANCE_REF}. Le plus faible peut sauver le plus fort. EN: we often need someone smaller.`),
    card(E(1685), 'Le corbeau et le renard', 'la morale',
      'Deux vers réunis en une phrase. Celui qui flatte vit aux dépens de celui qui l’écoute. EN: flatterers live off those who listen.'),
    card(E(1686), 'La leçon de l’histoire', 'le mot',
      'La morale tire la leçon de la fable, souvent en un ou deux vers, au début ou à la fin. EN: the moral.'),
    card('fr.a1.ecole.091', 'Le genre', 'le mot',
      'Une courte histoire, souvent avec des animaux, qui porte une leçon. Beaucoup viennent d’Ésope. EN: a fable.'),
  ],
};

const A7_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-trier',
  layer: 'core',
  size: 'lg',
  title: 'Quelle fable, quelle morale',
  groups: [
    grp('Les histoires', [
      it(E(1690), 'le loup et l’agneau'),
      it(E(1691), 'le lièvre et la tortue'),
      it(E(1692), 'le lion et le rat'),
      it('fr.b2.litterature.1020', `au passé simple, comme dans ${PASSE_SIMPLE_REF}`),
    ], chk('Dans « Le Lion et le Rat », qui sauve qui ?',
      ['le rat sauve le lion', 'le lion sauve le rat'], 0,
      'Le petit libère le grand du filet. EN: the rat frees the lion.')),
    grp('Les morales aujourd’hui', [
      it(E(1689), 'dénoncer un abus'),
      it(E(1694), 'la stagiaire'),
      it(E(1695), 'le mémoire'),
    ], chk('Quand on cite « la raison du plus fort » aujourd’hui, on veut souvent…',
      ['dénoncer un abus de pouvoir', 'féliciter le plus fort', 'parler des animaux'], 0,
      'On reprend le constat pour le critiquer. EN: to denounce it.')),
    ctl('Le temps des fables', `Le renard s’approcha du corbeau : ce temps, vu dans ${PASSE_SIMPLE_REF}, est celui…`,
      ['des récits écrits, comme les fables', 'de la conversation', 'des proverbes'], 0,
      `« ${B208_REFRAME} » EN: ${B208_REFRAME_EN}`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['morale'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre morales mal citées',
  errors: [
    { wrong: 'Rien ne sert de courir, il faut partir à l’heure.', right: fr(E(1683)),
      why: 'Normal : à l’heure semble dire la même chose. La morale dit à point, au bon moment ; une citation se cite exactement. EN: à point, quoted exactly.' },
    { wrong: 'On a souvent besoin d’un plus petit que nous.', right: fr(E(1684)),
      why: `Normal : on veut souvent dire nous. Mais on est ici un sujet général, et la morale dit soi, comme dans ${INSISTANCE_REF}. EN: soi after on.` },
    { wrong: 'Apprenez que tout flatteur vit aux dépens de celui qu’il écoute.', right: fr(E(1685)),
      why: 'Normal : on imagine le flatteur qui écoute. C’est l’autre qui l’écoute, et qui paie. EN: the listener pays.' },
    { wrong: 'La raison du plus fort est toujours la meilleure : La Fontaine trouve cela juste.', right: fr(E(1690)),
      why: 'Normal : la phrase semble approuver. Mais la fable montre un loup injuste : La Fontaine décrit, il n’approuve pas. EN: he describes, he does not approve.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['morale', 'citation'],
};

const A7_ATOI = aToi('a7-atoi', 'la morale qui convient', [
  ctl('La veille', 'Ton frère commence son rapport la veille, et il panique :',
    ['Rien ne sert de courir ; il faut partir à point.', 'La raison du plus fort est toujours la meilleure.'], 0,
    'Il fallait commencer à temps. EN: set off in good time.'),
  ctl('Le plus jeune', 'Le plus jeune de l’équipe a trouvé la solution :',
    ['On a souvent besoin d’un plus petit que soi.', 'Tel père, tel fils.'], 0,
    'Le rat qui libère le lion. EN: someone smaller.'),
  ctl('Le vendeur', 'Un vendeur te couvre de compliments avant de te vendre un abonnement :',
    ['Tout flatteur vit aux dépens de celui qui l’écoute.', 'Qui se ressemble s’assemble.'], 0,
    'La morale du corbeau, sans son « apprenez que ». EN: the crow’s moral.'),
  ctl('L’abus', 'Une grande entreprise impose ses prix à un petit fournisseur :',
    ['C’est la raison du plus fort, comme chez La Fontaine.', 'C’est la goutte d’eau qui fait déborder le vase.'], 0,
    'On cite la morale pour dénoncer. EN: to denounce.'),
], ['morale'], 'sheet-lafontaine');

const A7_TEXTE = dansUnTexte('a7-texte', 'La note de l’enseignante', TEXTE_A7, [
  { q: 'Pourquoi la morale a-t-elle « fait réagir » ?', a: 'Les élèves aimaient le lièvre, rapide et drôle, et la morale lui donne tort.' },
  { q: 'Que répond un élève à celle qui proteste ?', a: 'Le lièvre n’a pas perdu faute de vitesse, mais par excès de confiance.' },
  { q: 'Comment l’enseignante conclut-elle ?', a: 'Sans trancher : discuter la morale est peut-être la meilleure façon de lire La Fontaine.' },
], 'rec-b2-34-texte-a7', ['morale']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Exactement', 'Une morale de La Fontaine se cite…',
    ['mot pour mot', 'à sa façon, comme un proverbe'], 0,
    'C’est une citation, avec un auteur. EN: word for word.'),
  ctl('Soi', 'On a souvent besoin d’un plus petit que…',
    ['soi', 'nous', 'lui'], 0,
    'Après on, sujet général : soi. EN: soi.'),
  ctl('Le loup', 'Dans la fable du loup et de l’agneau, La Fontaine…',
    ['décrit la loi du plus fort sans l’approuver', 'donne raison au loup'], 0,
    'Il décrit ; le lecteur juge. EN: he describes.'),
], ['morale']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'La Fontaine',
    opener: {
      line: 'Un loup, une tortue, un rat et un corbeau, trois siècles plus tard : ici tu apprends les morales qu’on cite encore, mot pour mot. EN: A wolf, a tortoise, a rat and a crow, three centuries on: here you learn the morals people still quote, word for word.',
      imageRef: 'lessons/proverbes/act07.jpg',
    },
    sections: [],
    milestone: 'Tu cites quatre morales de La Fontaine exactement, tu connais la fable de chacune et tu sais que le fabuliste décrit sans approuver. EN: You quote four La Fontaine morals exactly, know each fable, and know he describes without approving.',
    estScreens: 42, restPoints: ['a7-lecture', 'a7-erreurs'],
  },
  sections: [A7_LECTURE, A7_CARTES, A7_TRIER, A7_ERREURS, A7_ATOI, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 · LE PROVERBE DANS LA CONVERSATION
 *
 *  A family dinner at natural speed: a mother who quotes, a son who
 *  finishes the proverbs with a sigh and twists one. How a proverb is
 *  announced (comme on dit, tu connais le proverbe, comme dirait ma
 *  grand-mère, si l'on en croit le proverbe), cut, twisted, discussed
 *  (certes… encore faut-il; a beau dire, lesson 16 in B2), and its register.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le dîner du vendredi',
  frSub: 'Écoute qui cite, qui coupe et qui détourne',
  lines: [
    ln(E(1697)), ln(E(1698)), ln(E(1699)), ln(E(1700)), ln(E(1701)),
    ln(E(1702)), ln(E(1703)), ln(E(1704)), ln(E(1705)),
  ],
  questions: [
    { q: 'Pourquoi Hugo n’a-t-il pas eu la promotion ?', opts: ['il n’était pas à la réunion', 'il est arrivé en retard au travail', 'il l’a refusée'], correct: 0, why: 'Kevin était là, pas lui : les absents ont toujours tort. EN: he was not there.' },
    { q: 'Quand sa mère commence un proverbe sur la pluie, que fait Hugo ?', opts: ['il le finit, un peu agacé', 'il demande la suite', 'il change de sujet'], correct: 0, why: 'Il connaît la fin, et la chanson. EN: he finishes it.' },
    { q: 'Que fait Hugo du proverbe sur la lenteur ?', opts: ['il en change la fin pour faire rire', 'il le traduit en anglais', 'il le cite exactement'], correct: 0, why: 'Un détournement : tout le monde connaît l’original. EN: a twist.' },
    { q: 'Quel ton a son « Merci, maman » final ?', opts: ['un peu las, avec humour', 'très reconnaissant', 'en colère'], correct: 0, why: 'Il répond à un proverbe par un autre, en souriant. EN: weary humour.' },
    { q: 'Combien de proverbes la mère cite-t-elle en tout ?', opts: ['quatre', 'deux', 'un seul'], correct: 0, why: 'Les absents, la pluie, la lenteur, l’oiseau. EN: four.' },
  ],
  audio: REC('rec-b2-34-diner-ecoute'),
  say: REFRAME,
  terms: ['citation', 'ironie'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ecrire',
  title: 'Six façons d’amener un proverbe',
  frSub: 'Du familier au soutenu',
  hint: `Six cartes. Regarde le registre, comme dans ${REGISTRES_REF}.`,
  audio: AUDIO,
  say: REFRAME,
  terms: ['citation', 'registre'],
  cards: [
    card(E(1607), 'La plus courante', 'courant',
      'Comme on dit, puis le proverbe, entier ou coupé. Elle va partout. EN: as they say.'),
    card(E(1608), 'En le nommant', 'courant',
      'Tu annonces que ce qui suit est un proverbe. Variante : comme le dit le proverbe. EN: as the saying goes.'),
    card(E(1706), 'À quelqu’un', 'courant',
      'Tu comptes sur l’autre pour finir le proverbe. Avec vous : vous connaissez le proverbe. EN: you know the saying.'),
    card(E(1707), 'Avec un sourire', 'courant',
      'Le conditionnel prend ses distances : c’est sa phrase à elle, pas tout à fait la tienne. EN: as my grandmother would say.'),
    card(E(1708), 'Pour l’écrit', 'soutenu',
      'Tu cites le proverbe pour le discuter, dans une chronique ou un essai. EN: if the proverb is to be believed.'),
    card(E(1709), 'Pour couper court', 'familier',
      'Tu as déjà entendu ce discours, et tu le fais savoir, un peu las. EN: I have heard it all before.'),
  ],
};

const A8_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-tableau',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Six usages d’un proverbe',
  cols: ['Usage', 'Ce que ça fait', 'Exemple'],
  rows: [
    { cells: ['annoncer', 'dire que c’est connu', 'comme on dit…'], say: fr(E(1699)),
      detail: { title: 'Annoncer', body: 'Comme on dit, comme dit le proverbe, tu connais le proverbe : la suite est connue de tous. EN: announce it.', say: fr(E(1704)) } },
    { cells: ['couper', 'laisser l’autre finir', 'après la pluie…'], say: fr(E(1700)),
      detail: { title: 'Couper', body: 'La première moitié suffit : l’autre complète, ou sourit. EN: say half.', say: fr(E(1701)) } },
    { cells: ['détourner', 'faire rire', 'qui va lentement arrive en retard'], say: fr(E(1703)),
      detail: { title: 'Détourner', body: 'On change la fin exprès. Ça ne marche que si tout le monde connaît l’original. EN: twist it.', say: fr(E(1705)) } },
    { cells: ['discuter', 'accorder, puis nuancer', 'certes…, encore faut-il…'], say: fr(E(1711)),
      detail: { title: 'Discuter', body: `Certes, puis la limite : la concession de ${CONCESSION_REF}. EN: concede, then qualify.`, say: fr(E(1710)) } },
    { cells: ['ouvrir un texte', 'une accroche', 'si l’on en croit le proverbe…'], say: fr(E(1759)),
      detail: { title: 'Ouvrir', body: 'Dans une chronique, le proverbe pose la question ; tes arguments y répondent. EN: a hook.', say: fr(E(1712)) } },
    { cells: ['contredire', 'montrer une exception', 'contrairement au proverbe…'], say: fr(E(1666)),
      detail: { title: 'Contredire', body: 'Un proverbe n’a pas toujours raison : tu peux le dire, exemple à l’appui. EN: disagree with it.', say: fr(E(1710)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['citation', 'accroche'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre proverbes mal placés',
  errors: [
    { wrong: 'Comme dit le proverbe, qui ne tente rien n’a rien : il est donc prouvé que tu dois partir.', right: fr(E(1711)),
      why: 'Normal : le proverbe sonne comme une loi. Mais il ne prouve rien ; dans un texte sérieux, on le discute. EN: a proverb proves nothing.' },
    { wrong: 'Si l’on en croit l’adage, les absents ont toujours tort, maman.', right: fr(E(1699)),
      why: 'Normal : tu veux bien parler. Mais à table, cette annonce sonne comme un discours ; un simple eh oui suffit. EN: too formal at the table.' },
    { wrong: 'Bon, comme on dit, après la pluie, la tempête.', right: fr(E(1700)),
      why: 'Normal : les deux images parlent du temps qu’il fait. Mais on ne mélange pas deux proverbes, sauf pour faire rire, et alors tout le monde le voit. EN: do not blend two proverbs.' },
    { wrong: 'Comme on dit en anglais, ne compte pas tes poulets.', right: fr('fr.b1.expressions-imagees.1369'),
      why: `Normal : le proverbe te vient en anglais. En français, cite le proverbe français, vu dans ${ANIMAUX_REF}. EN: quote the French proverb.` },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['citation', 'registre'],
};

const A8_ATOI = aToi('a8-atoi', 'le ton juste', [
  ctl('À table', 'Ton frère se plaint encore de son patron. Tu dis, un peu las :',
    ['Je connais la chanson.', 'Si l’on en croit le proverbe, tu as tort.'], 0,
    'Familier, pour la famille. EN: familiar.'),
  ctl('Au travail', 'En réunion, tu cites un proverbe sans avoir l’air de faire la leçon :',
    ['Comme on dit, mieux vaut prévenir que guérir.', 'Je connais la chanson : mieux vaut prévenir que guérir.'], 0,
    'Comme on dit : courant et neutre. EN: neutral.'),
  ctl('À l’écrit', 'Tu commences une chronique :',
    ['Si l’on en croit le proverbe, les absents ont toujours tort.', 'Eh oui, les absents ont toujours tort.'], 0,
    'Soutenu, pour ouvrir une discussion. EN: formal.'),
  ctl('Le clin d’œil', 'Ton ami arrive encore en retard et dit qu’il va lentement mais sûrement. Tu réponds :',
    ['Qui va lentement arrive en retard, surtout aux réunions.', 'Qui va lentement va sûrement, c’est prouvé.'], 0,
    'Le détournement fait sourire parce que tout le monde connaît l’original. EN: a twist.'),
], ['registre', 'ironie'], 'sheet-ecrire');

const A8_TEXTE = dansUnTexte('a8-texte', 'Le mot de la présidente', TEXTE_A8, [
  { q: 'Quel proverbe sert d’accroche, et pour quelle question ?', a: 'Mieux vaut tard que jamais : il ouvre la question des bancs installés après trois ans.' },
  { q: 'Comment la présidente nuance-t-elle ce proverbe ?', a: 'Avec certes, puis « le proverbe a beau dire » : trois ans, c’est long pour cinq bancs.' },
  { q: 'Quel deuxième proverbe emploie-t-elle, et avec quelle annonce ?', a: 'Qui ne tente rien n’a rien, annoncé par « si l’on en croit un autre proverbe ».' },
], 'rec-b2-34-texte-a8', ['accroche', 'citation']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Couper', 'Comme on dit, qui sème le vent… : c’est…',
    ['une citation à moitié, tout à fait normale', 'une faute : il faut tout dire'], 0,
    'Tout le monde connaît la suite. EN: a normal half quote.'),
  ctl('Le registre', 'Laquelle convient à une chronique ?',
    ['si l’on en croit le proverbe', 'je connais la chanson'], 0,
    'Soutenu pour l’écrit ; familier à table. EN: formal.'),
  ctl('La preuve', 'Dans un texte argumenté, un proverbe…',
    ['ouvre ou ferme la discussion', 'prouve ta thèse'], 0,
    'Tes arguments font la preuve. EN: it proves nothing.'),
], ['citation', 'accroche']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le proverbe dans la conversation',
    opener: {
      line: 'Un dîner de famille, une mère qui cite, un fils qui soupire : ici tu apprends à annoncer, couper, détourner et discuter un proverbe, au bon registre. EN: A family dinner, a mother who quotes, a son who sighs: here you learn to announce, cut, twist and discuss a proverb in the right register.',
      imageRef: 'lessons/proverbes/act08.jpg',
    },
    sections: [],
    milestone: 'Tu amènes un proverbe au bon registre, tu le coupes ou le détournes, et tu le discutes sans en faire une preuve. EN: You bring in a proverb in the right register, cut or twist it, and discuss it without using it as proof.',
    estScreens: 42, restPoints: ['a8-tableau', 'a8-atoi'],
  },
  sections: [A8_ECOUTE, A8_CARTES, A8_TABLEAU, A8_ERREURS, A8_ATOI, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 · D'UNE LANGUE À L'AUTRE
 *
 *  A subtitling studio in Ottawa: an English series full of proverbs. Three
 *  cases: the same image (tel père, tel fils), another image (the chickens
 *  become a bear, the bite a scalded cat), no fixed equivalent (« when in
 *  Rome »: translate the sense; « hurler avec les loups » is near but
 *  pejorative, « autres pays, autres mœurs » only observes). The
 *  calques trapped. Lesson 33 in B2 owns translation; this act owns proverbs.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Trois répliques avant minuit',
  frSub: 'Un studio de sous-titrage à Ottawa',
  setting: 'Ottawa, dans un studio de sous-titrage. Julie traduit une série anglaise ; son collègue Tom lui lit les répliques difficiles.',
  bubbles: [
    { from: 'narrator', fr: 'Il est tard. Il reste trois répliques, toutes avec un proverbe.', en: 'It is late. Three lines are left, each with a proverb.' },
    { from: 'user', fr: fr(E(1713)), en: en(E(1713)) },
    { from: 'coach', fr: fr(E(1714)), en: en(E(1714)), warn: 'Une autre image' },
    { from: 'user', fr: fr(E(1715)), en: en(E(1715)) },
    { from: 'coach', fr: fr(E(1716)), en: en(E(1716)) },
    { from: 'user', fr: fr(E(1717)), en: en(E(1717)) },
    { from: 'coach', fr: fr(E(1718)), en: en(E(1718)), warn: 'Pas d’équivalent unique' },
    { from: 'coach', fr: fr(E(1725)), en: en(E(1725)) },
  ],
  closing: { fr: 'Un proverbe se traduit par un proverbe ; sinon, par son sens.', en: 'A proverb is translated by a proverb; otherwise, by its meaning.' },
  audio: REC('rec-b2-34-studio'),
  say: REFRAME,
  terms: ['equivalent', 'calque'],
};

const A9_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-tableau',
  layer: 'core',
  sheetId: 'sheet-proverbes',
  title: 'Six proverbes, deux langues',
  cols: ['Anglais', 'Français', 'Image'],
  rows: [
    { cells: ['like father, like son', 'tel père, tel fils', 'la même'], say: fr(E(1655)),
      detail: { title: 'La même image', body: 'Mot à mot, et c’est juste : les deux langues ont le même proverbe. EN: same image.', say: fr(E(1720)) } },
    { cells: ['no smoke without fire', 'pas de fumée sans feu', 'la même'], say: fr(E(1669)),
      detail: { title: 'La même image', body: 'Même image, même sens, et la même prudence à garder. EN: same image.', say: fr(E(1680)) } },
    { cells: ['count your chickens', 'la peau de l’ours', 'une autre'], say: fr(E(1714)),
      detail: { title: 'Une autre image', body: 'Les poussins deviennent un ours : cherche toujours le proverbe qui existe. EN: another image.', say: fr('fr.b1.expressions-imagees.1365') } },
    { cells: ['once bitten, twice shy', 'chat échaudé…', 'une autre'], say: fr(E(1645)),
      detail: { title: 'Une autre image', body: 'La morsure devient une brûlure, et c’est un chat. EN: another image.', say: fr(E(1716)) } },
    { cells: ['birds of a feather', 'qui se ressemble…', 'une autre'], say: fr(E(1654)),
      detail: { title: 'Une autre image', body: 'Les oiseaux disparaissent ; le français garde la rime. EN: another image.', say: fr(E(1659)) } },
    { cells: ['when in Rome…', 'pas de proverbe fixe', 'aucune'], say: fr(E(1722)),
      detail: { title: 'Pas d’équivalent', body: 'On traduit le sens : il faut s’adapter aux usages du pays. Autres pays, autres mœurs s’en approche, mais il constate sans conseiller. EN: translate the meaning; autres pays, autres mœurs only observes.', say: fr(E(1725)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent'],
};

const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-trier',
  layer: 'core',
  size: 'lg',
  title: 'Même image, autre image, aucune',
  groups: [
    grp('La même image', [
      it(E(1720), 'tel père, tel fils'),
      it(E(1668), 'semer et récolter'),
      it(E(1612), 'la pierre qui roule'),
    ], chk('Pour ces trois proverbes, le mot à mot…',
      ['donne le proverbe de l’autre langue', 'donne un calque'], 0,
      'Parfois, les deux langues ont la même image. EN: same image.')),
    grp('Une autre image', [
      it(E(1714), 'les poussins, l’ours'),
      it(E(1716), 'la morsure, le chat'),
      it(E(1634), 'la volonté et le moyen'),
    ], chk('Pour ces proverbes, que faut-il faire ?',
      ['chercher le proverbe français qui existe', 'traduire chaque mot'], 0,
      'Même idée, autre image. EN: find the French one.')),
    ctl('Aucune', 'When in Rome, do as the Romans do : la meilleure traduction est souvent…',
      ['il faut s’adapter aux usages du pays', 'qui se ressemble s’assemble', 'Rome ne s’est pas faite en un jour'], 0,
      'Pas de proverbe figé : on traduit le sens. Hurler avec les loups s’en approche, mais il est péjoratif : suivre le groupe, souvent contre son jugement. EN: translate the meaning.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equivalent'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Six proverbes calqués',
  rule: {
    title: 'Le proverbe existe déjà',
    body: 'Traduire un proverbe mot à mot donne une phrase que personne ne reconnaît. Cherche d’abord le proverbe français ; s’il n’y en a pas, dis le sens. EN: look for the existing proverb first.',
  },
  cards: [
    trap(E(1714), 'count your chickens', 'Ne compte pas tes poulets avant qu’ils soient éclos.', 'Le français vend la peau de l’ours. EN: the bear’s skin.'),
    trap(E(1716), 'once bitten, twice shy', 'Une fois mordu, deux fois timide : même idée, autre image.', 'Le chat échaudé. EN: the scalded cat.'),
    trap(E(1634), 'where there’s a will', 'Où il y a une volonté, il y a un chemin.', 'Vouloir, c’est pouvoir. EN: vouloir, c’est pouvoir.'),
    trap(E(1654), 'birds of a feather', 'Les oiseaux d’une plume volent ensemble.', 'Qui se ressemble s’assemble. EN: the rhyme.'),
    trap(E(1725), 'when in Rome', 'Quand à Rome, fais comme les Romains.', 'Pas de proverbe figé : dis le sens. EN: the meaning.'),
    trap(E(1729), 'two birds, one stone', 'En passant à la banque, j’ai posté le colis : j’ai tué deux oiseaux avec une pierre.', 'Le français fait d’une pierre deux coups. EN: deux coups.'),
  ],
  drill: [
    { promptSay: 'Il ne faut pas vendre la … de l’ours avant de l’avoir tué.', opts: ['peau', 'tête'], correct: 0 },
    { promptSay: 'Chat … craint l’eau froide.', opts: ['échaudé', 'mordu'], correct: 0 },
    { promptSay: 'Vouloir, c’est … .', opts: ['pouvoir', 'un chemin'], correct: 0 },
    { promptSay: 'Qui se ressemble … .', opts: ['s’assemble', 'vole ensemble'], correct: 0 },
    { promptSay: '… père, tel fils.', opts: ['Tel', 'Comme le'], correct: 0 },
    { promptSay: 'J’ai fait d’une pierre deux … .', opts: ['coups', 'oiseaux'], correct: 0 },
    { promptSay: 'Qui ne tente rien n’a … .', opts: ['rien', 'aucun gain'], correct: 0 },
    { promptSay: 'Il faut s’adapter aux … du pays.', opts: ['usages', 'Romains'], correct: 0 },
  ],
  steps: STEPS('Le proverbe existe déjà', 'Ce que le calque fait entendre'),
  audio: REC('rec-b2-34-piege-calques'),
  say: REFRAME,
  terms: ['calque', 'equivalent'],
};

const A9_ATOI = aToi('a9-atoi', 'tu sous-titres', [
  ctl('Les poussins', 'La réplique dit : don’t count your chickens.',
    ['Ne vends pas la peau de l’ours.', 'Ne compte pas tes poussins.'], 0,
    'Le proverbe français, pas le calque. EN: the French proverb.'),
  ctl('La volonté', 'La réplique dit : where there’s a will, there’s a way.',
    ['Vouloir, c’est pouvoir.', 'Où il y a une volonté, il y a un chemin.'], 0,
    'Le proverbe qui existe. EN: vouloir, c’est pouvoir.'),
  ctl('Le père', 'La réplique dit : like father, like son.',
    ['Tel père, tel fils.', 'Comme le père, comme le fils.'], 0,
    'Ici, la même image : le proverbe existe. EN: same image.'),
  ctl('Rome', 'La réplique dit : when in Rome, do as the Romans do.',
    ['Ici, fais comme les gens d’ici.', 'Quand tu es à Rome, hurle avec les loups.'], 0,
    'Pas de proverbe fixe : traduis le sens ; hurler avec les loups ajouterait un jugement négatif. EN: the meaning.'),
], ['equivalent', 'calque'], 'sheet-proverbes');

const A9_TEXTE = dansUnTexte('a9-texte', 'La note de la traductrice', TEXTE_A9, [
  { q: 'Quelle règle la traductrice s’est-elle donnée ?', a: 'Traduire un proverbe par un proverbe français quand il existe, même si l’image change.' },
  { q: 'Quand a-t-elle gardé l’image anglaise ?', a: 'Quand le français a la même : tel père, tel fils.' },
  { q: 'Qu’a-t-elle fait pour « when in Rome », et pourquoi ?', a: 'Elle a traduit le sens, parce qu’aucune formule française ne s’impose.' },
  { q: `Quel principe de ${TRADUCTION_REF} retrouves-tu ici ?`, a: 'Traduire le sens plutôt que les mots, et éviter les calques.' },
], 'rec-b2-34-texte-a9', ['equivalent', 'calque']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le calque', 'Once bitten, twice shy :',
    ['chat échaudé craint l’eau froide', 'une fois mordu, deux fois timide'], 0,
    'Le proverbe qui existe. EN: the existing proverb.'),
  ctl('La même image', 'Lequel se traduit mot à mot ?',
    ['like father, like son', 'don’t count your chickens'], 0,
    'Tel père, tel fils : même image. EN: same image.'),
  ctl('Rome', 'Pour when in Rome, le français a…',
    ['plusieurs formules, aucune vraiment figée', 'un proverbe unique, connu de tous'], 0,
    'On traduit donc le sens. EN: no fixed equivalent.'),
], ['equivalent']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'D’une langue à l’autre',
    opener: {
      line: 'Une série anglaise, un studio de sous-titrage, trois proverbes avant minuit : ici tu apprends à traduire un proverbe par un proverbe, ou par son sens. EN: An English series, a subtitling studio, three proverbs before midnight: here you learn to translate a proverb with a proverb, or with its meaning.',
      imageRef: 'lessons/proverbes/act09.jpg',
    },
    sections: [],
    milestone: 'Devant un proverbe anglais, tu trouves le proverbe français, tu gardes l’image quand elle est la même, et tu traduis le sens quand il n’y a rien. EN: Faced with an English proverb, you find the French one, keep the image when it matches, and translate the sense when there is none.',
    estScreens: 42, restPoints: ['a9-trier', 'a9-atoi'],
  },
  sections: [A9_HISTOIRE, A9_TABLEAU, A9_TRIER, A9_PIEGE, A9_ATOI, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 · DES EXPRESSIONS FIGÉES POUR LE TRAVAIL
 *
 *  A team lead's email in Geneva: faire d'une pierre deux coups, plusieurs
 *  cordes à son arc, ne pas y aller par quatre chemins, prendre son mal en
 *  patience, se noyer dans un verre d'eau, tomber des nues, tourner autour
 *  du pot; avoir du pain sur la planche (lesson 28 in B1) and se mettre le
 *  doigt dans l'œil (lesson 27 in B1) reused, never re-taught. Traps: the
 *  English images, the lost y, the wrong possessive.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courriel de Sophie',
  frSub: 'Un projet en retard, huit expressions',
  text: COURRIEL_TEXT,
  glossary: [
    { word: 'désespérée', en: 'hopeless', note: 'Sans espoir de s’arranger.' },
    { word: 'comptes rendus', en: 'reports', note: 'Des textes qui résument ce qui a été fait ou dit.' },
  ],
  questions: [
    { q: 'Global : pourquoi Sophie écrit-elle à son équipe ?', a: 'Pour annoncer le retard du projet et proposer un plan.' },
    { q: 'Détail : à quoi servira la réunion de jeudi ?', a: 'À faire le point et à préparer la démonstration : deux choses d’un coup.' },
    { q: 'Inférence : pourquoi écrit-elle « la situation est sérieuse, pas désespérée » ?', a: 'Pour éviter la panique : elle reconnaît le problème sans dramatiser.' },
    { q: 'Point de vue : quel ton Sophie choisit-elle ? Comment le sais-tu ?', a: 'Direct mais rassurant : elle ne va pas par quatre chemins, mais elle propose un plan et remercie l’équipe.' },
  ],
  audio: REC('rec-b2-34-courriel'),
  say: REFRAME,
  terms: ['figement', 'figure'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-figees',
  title: 'Six expressions pour le bureau',
  frSub: 'L’image, le sens, le registre',
  hint: 'Six cartes. Toutes se conjuguent : regarde le verbe et le possessif.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['figement', 'figure'],
  cards: [
    card(E(1728), 'Deux buts, un geste', 'courant',
      'Image : une seule pierre, deux coups au but. L’anglais tue deux oiseaux. EN: to kill two birds with one stone.'),
    card(E(1730), 'Plusieurs talents', 'courant',
      'Image : l’archer qui garde des cordes de rechange. Sens : savoir faire plusieurs choses, avoir plusieurs solutions. EN: more than one string to your bow.'),
    card(E(1732), 'Droit au but', 'courant',
      'Dire les choses directement. Le plus souvent avec y : je n’y vais pas par quatre chemins, elle n’y est pas allée par quatre chemins. EN: to get straight to the point.'),
    card(E(1734), 'Attendre sans se plaindre', 'courant',
      'Le possessif suit le sujet : je prends mon mal en patience, nous prenons notre mal en patience. EN: to grin and bear it.'),
    card(E(1736), 'Un petit rien', 'courant',
      'Être dépassé par une toute petite difficulté. Souvent à la forme négative : ne te noie pas dans un verre d’eau. EN: to be thrown by a trifle.'),
    card(E(1739), 'La grande surprise', 'courant',
      'Les nues, un vieux mot pour les nuages : on tombe du ciel, tant on est surpris. Au passé composé avec être. EN: to be flabbergasted.'),
  ],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-trier',
  layer: 'core',
  size: 'lg',
  title: 'Le sens, puis la phrase',
  groups: [
    grp('Au bureau', [
      it(E(1729), 'la banque et le colis'),
      it(E(1731), 'trois langues et le code'),
      it(E(1733), 'deux mois de retard'),
      it('fr.b1.expressions-imagees.1314', `vue dans ${ANIMAUX_REF}`),
    ], chk('Dans la troisième phrase, que fait la personne ?',
      ['elle annonce une mauvaise nouvelle sans détour', 'elle cherche son chemin', 'elle hésite longtemps'], 0,
      'Elle n’y va pas par quatre chemins. EN: straight to the point.')),
    grp('Les nerfs', [
      it(E(1735), 'le train en retard'),
      it(E(1737), 'une signature'),
      it(E(1738), 'dis-moi ce qui ne va pas'),
      it('fr.b1.expressions-imagees.1129', `vue dans ${CORPS_REF}`),
    ], chk('Tourner autour du pot, c’est…',
      ['éviter de dire les choses directement', 'faire la cuisine', 'se tromper complètement'], 0,
      'Le contraire de ne pas y aller par quatre chemins. EN: to beat about the bush.')),
    ctl('Déjà vue', `Avoir du pain sur la planche, vue dans ${ANIMAUX_REF}, veut dire…`,
      ['avoir beaucoup de travail', 'avoir de quoi manger', 'être boulanger'], 0,
      'Beaucoup à faire. EN: a lot on your plate.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figement'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Six expressions abîmées',
  rule: {
    title: 'L’image ne se traduit pas',
    body: 'Kill two birds, beat around the bush : l’anglais propose ses images. L’expression française garde les siennes, et ses petits mots : le possessif, les nues, l’arc. EN: keep the French image and its small words.',
  },
  cards: [
    trap(E(1729), 'kill two birds', 'En passant à la banque, j’ai posté le colis : j’ai fait d’une pierre deux oiseaux.', 'Deux coups, pas deux oiseaux. EN: deux coups.'),
    trap(E(1738), 'beat around the bush', 'Arrête de tourner autour du buisson et dis-moi ce qui ne va pas.', 'Le français tourne autour du pot. EN: le pot.'),
    trap(E(1739), 'les nuages', 'Quand la directrice a annoncé la fusion, toute l’équipe est tombée des nuages.', 'Des nues : le vieux mot reste dans l’expression. EN: des nues.'),
    trap(E(1731), 'l’image inversée', 'Elle parle trois langues et sait coder : elle a plusieurs arcs à sa corde.', 'Les cordes sont à l’arc : plusieurs cordes à son arc. EN: strings to the bow.'),
    trap(E(1735), 'le mauvais possessif', 'Le train a une heure de retard : je prends son mal en patience.', 'Je prends mon mal : le possessif suit le sujet. EN: mon mal.'),
    trap(E(1737), 'une tasse de thé', 'Ne te noie pas dans une tasse de thé : il manque juste une signature.', 'Un verre d’eau, en français. EN: un verre d’eau.'),
  ],
  drill: [
    { promptSay: 'J’ai fait d’une pierre deux … .', opts: ['coups', 'oiseaux'], correct: 0 },
    { promptSay: 'Arrête de tourner autour du … .', opts: ['pot', 'buisson'], correct: 0 },
    { promptSay: 'Toute l’équipe est tombée des … .', opts: ['nues', 'nuages'], correct: 0 },
    { promptSay: 'Je ne vais pas … aller par quatre chemins.', opts: ['y', 'en'], correct: 0 },
    { promptSay: 'Je prends … mal en patience.', opts: ['mon', 'son'], correct: 0 },
    { promptSay: 'Nous avons plusieurs cordes à … arc.', opts: ['notre', 'son'], correct: 0 },
    { promptSay: 'Ne te noie pas dans un verre d’… .', opts: ['eau', 'thé'], correct: 0 },
    { promptSay: 'Elle n’y est pas … par quatre chemins.', opts: ['allée', 'allé'], correct: 0 },
  ],
  steps: STEPS('L’image ne se traduit pas', 'Ce que l’expression abîmée fait entendre'),
  audio: REC('rec-b2-34-piege-travail'),
  say: REFRAME,
  terms: ['figement', 'calque'],
};

const A10_ATOI = aToi('a10-atoi', 'l’expression qui tombe juste', [
  ctl('Deux en un', 'Tu profites d’un voyage d’affaires à Paris pour voir ta sœur :',
    ['Je fais d’une pierre deux coups.', 'Je prends mon mal en patience.'], 0,
    'Deux buts, un seul voyage. EN: two birds, one stone.'),
  ctl('Direct', 'Tu dois annoncer un refus sans détour :',
    ['Je ne vais pas y aller par quatre chemins : c’est non.', 'Je vais tourner autour du pot : c’est non.'], 0,
    'Droit au but. EN: straight to the point.'),
  ctl('Patienter', 'Ton vol a trois heures de retard, et tu n’y peux rien :',
    ['Je prends mon mal en patience.', 'Je tombe des nues.'], 0,
    'Attendre sans se plaindre. EN: grin and bear it.'),
  ctl('La surprise', 'Ta collègue apprend qu’elle est promue sans l’avoir demandé :',
    ['Elle tombe des nues.', 'Elle a du pain sur la planche.'], 0,
    'Une très grande surprise. EN: flabbergasted.'),
], ['figement'], 'sheet-figees');

const A10_TEXTE = dansUnTexte('a10-texte', 'La réponse de Léa', TEXTE_A10, [
  { q: 'Quelles expressions Léa reprend-elle du courriel de Sophie ?', a: 'Tourner autour du pot, faire d’une pierre deux coups, prendre son mal en patience, tomber des nues.' },
  { q: 'Avec quelle expression dit-elle que Sophie a été directe ?', a: 'Tu n’as pas tourné autour du pot : Sophie l’avait demandé à l’équipe, Léa le lui renvoie.' },
  { q: 'Comment adapte-t-elle « prendre son mal en patience » ?', a: 'Au futur et à la première personne : je prendrai mon mal en patience.' },
], 'rec-b2-34-texte-a10', ['figement']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le possessif', 'Avec nous :',
    ['nous prenons notre mal en patience', 'nous prenons son mal en patience'], 0,
    'Le possessif suit le sujet. EN: notre.'),
  ctl('L’auxiliaire', 'Laquelle est juste ?',
    ['Toute l’équipe est tombée des nues.', 'Toute l’équipe a tombé des nues.'], 0,
    'Tomber se conjugue avec être. EN: être.'),
  ctl('Le calque', 'Kill two birds with one stone :',
    ['faire d’une pierre deux coups', 'tuer deux oiseaux avec une pierre'], 0,
    'L’image française. EN: the French image.'),
], ['figement']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Des expressions pour le travail',
    opener: {
      line: 'Un projet en retard, une cheffe qui écrit sans détour : ici tu places des expressions figées dans ta phrase, avec le bon verbe et le bon possessif. EN: A project running late and a team lead who writes plainly: here you fit fixed expressions into your sentence, with the right verb and possessive.',
      imageRef: 'lessons/proverbes/act10.jpg',
    },
    sections: [],
    milestone: 'Tu places sept expressions de travail dans tes phrases, tu conjugues leur verbe et tu accordes leur possessif. EN: You use seven work expressions in your sentences, conjugating the verb and matching the possessive.',
    estScreens: 42, restPoints: ['a10-lecture', 'a10-piege'],
  },
  sections: [A10_LECTURE, A10_CARTES, A10_TRIER, A10_PIEGE, A10_ATOI, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 · NÉGOCIER, APAISER, TRANCHER
 *
 *  A residents' meeting in Lyon at natural speed (the negotiation of lesson
 *  26 in B2): jeter de l'huile sur le feu, être dans le même bateau, mettre
 *  de l'eau dans son vin, un coup d'épée dans l'eau, tirer son épingle du
 *  jeu, ce n'est pas la mer à boire, une tempête dans un verre d'eau;
 *  couper la poire en deux (lesson 28 in B1) reused. Errors: a reversed
 *  meaning, « navire », « tasse de thé », « de jeu ».
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a11-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'L’assemblée des copropriétaires',
  frSub: 'Écoute qui apaise et qui aggrave',
  lines: [
    ln(E(1743)), ln(E(1744)), ln(E(1745)), ln(E(1746)),
    ln(E(1747)), ln(E(1748)), ln(E(1749)), ln(E(1750)),
  ],
  questions: [
    { q: 'Quel est le problème de départ ?', opts: ['refaire la façade coûte cher', 'le syndic a démissionné', 'le toit fuit'], correct: 0, why: 'La présidente le dit sans détour. EN: the facade is expensive.' },
    { q: 'Pourquoi une copropriétaire ne veut-elle pas voter contre ?', opts: ['pour ne pas aggraver le conflit avec le syndic', 'parce qu’elle aime la façade'], correct: 0, why: 'Ce serait jeter de l’huile sur le feu. EN: not to inflame things.' },
    { q: 'Quel compromis la présidente propose-t-elle ?', opts: ['la façade cette année, le toit l’an prochain', 'tout refaire tout de suite', 'ne rien faire'], correct: 0, why: 'Chacun fait la moitié du chemin. EN: split the difference.' },
    { q: 'Pourquoi M. Roux s’en sort-il bien ?', opts: ['son appartement donne sur la cour', 'il vend son appartement', 'il n’est pas venu'], correct: 0, why: 'La façade ne le concerne pas. EN: his flat faces the courtyard.' },
    { q: 'Que décide-t-on pour juin ?', opts: ['demander trois devis, puis revoter', 'refaire la façade sans devis'], correct: 0, why: 'Voter sans devis ne servirait à rien. EN: three quotes, then a vote.' },
  ],
  audio: REC('rec-b2-34-assemblee-ecoute'),
  say: REFRAME,
  terms: ['figement'],
};

const A11_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a11-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-figees',
  title: 'Six expressions pour négocier',
  frSub: 'Apaiser, aggraver, juger',
  hint: `Six cartes pour une négociation, comme dans ${NEGOCIATION_REF}.`,
  audio: AUDIO,
  say: REFRAME,
  terms: ['figement', 'figure'],
  cards: [
    card(E(1746), 'Céder un peu', 'le compromis',
      'Image : couper son vin avec de l’eau, le rendre moins fort. Sens : modérer ses exigences. Le possessif suit le sujet. EN: to soften your position.'),
    card(E(1749), 'S’en sortir', 'l’habileté',
      'Sens : se dégager adroitement d’une situation délicate, sans y perdre, souvent quand les autres y perdent. EN: to come out of it well.'),
    card(E(1751), 'Aggraver', 'le conflit',
      'Image : de l’huile sur un feu, qui repart de plus belle. Sens : aggraver une tension. EN: to add fuel to the fire.'),
    card(E(1753), 'Le même sort', 'la solidarité',
      'Partager la même situation, souvent difficile. Même image en anglais. On dit aussi : dans la même galère. EN: in the same boat.'),
    card(E(1752), 'Pour rien', 'l’échec',
      'Image : frapper l’eau avec une épée, qui se referme aussitôt. Sens : une action qui ne sert à rien. EN: a wasted effort.'),
    card(E(1754), 'Beaucoup de bruit', 'la mesure',
      'Une grosse agitation pour une chose sans importance. L’anglais met la tempête dans une tasse de thé. EN: a storm in a teacup.'),
  ],
};

const A11_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-trier',
  layer: 'core',
  size: 'lg',
  title: 'Apaiser ou aggraver',
  groups: [
    grp('Pour apaiser', [
      it(E(1746), 'céder un peu'),
      it(E(1747), 'la moitié chacun'),
      it(E(1750), 'ce n’est pas si difficile'),
      it('fr.b1.expressions-imagees.1353', `vue dans ${ANIMAUX_REF}`),
    ], chk('Ces phrases servent surtout à…',
      ['trouver un compromis', 'aggraver le conflit', 'quitter la réunion'], 0,
      'Chacun cède un peu, et on avance. EN: to reach a compromise.')),
    grp('Pour juger une action', [
      it(E(1744), 'l’huile sur le feu'),
      it(E(1748), 'un vote sans devis'),
      it(E(1757), 'le local à vélos'),
    ], chk('Laquelle dit qu’une action ne servirait à rien ?',
      ['celle du vote sans devis', 'celle du syndic', 'celle du local à vélos'], 0,
      'Un coup d’épée dans l’eau. EN: a wasted effort.')),
    ctl('Déjà vue', `Couper la poire en deux, vue dans ${ANIMAUX_REF}, c’est…`,
      ['faire chacun la moitié du chemin', 'partager un fruit', 'refuser de négocier'], 0,
      'Le compromis classique. EN: split the difference.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figement'],
};

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a11-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre négociations mal dites',
  errors: [
    { wrong: 'Il a mis de l’eau dans son vin : il est devenu plus exigeant.', right: fr(E(1755)),
      why: 'Normal : on pourrait croire qu’il se renforce. C’est le contraire : l’eau adoucit le vin, comme les exigences. EN: it means softening.' },
    { wrong: 'Nous sommes tous dans le même navire : l’immeuble est à nous tous.', right: fr(E(1745)),
      why: 'Normal : navire et bateau sont proches. Mais l’expression dit bateau, ou la même galère. EN: le même bateau.' },
    { wrong: 'La dispute sur le local à vélos ? Une tempête dans une tasse de thé.', right: fr(E(1757)),
      why: 'Normal : l’anglais met la tempête dans une tasse. Le français la met dans un verre d’eau. EN: un verre d’eau.' },
    { wrong: 'Toute l’équipe a perdu sa prime, mais elle a tiré son épingle de jeu.', right: fr(E(1756)),
      why: 'Normal : de et du se ressemblent. L’expression dit du jeu, comme on sort du jeu. EN: du jeu.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figement', 'calque'],
};

const A11_ATOI = aToi('a11-atoi', 'tu négocies', [
  ctl('Le compromis', 'Ton associé et toi voulez deux prix différents. Tu proposes :',
    ['Coupons la poire en deux.', 'Jetons de l’huile sur le feu.'], 0,
    'Chacun la moitié du chemin. EN: split the difference.'),
  ctl('Céder', 'Tu acceptes de baisser un peu tes exigences :',
    ['Je veux bien mettre de l’eau dans mon vin.', 'Je veux bien mettre de l’eau dans son vin.'], 0,
    'Le possessif suit le sujet : mon vin. EN: mon vin.'),
  ctl('Inutile', 'Envoyer une plainte sans preuve, ce serait…',
    ['un coup d’épée dans l’eau', 'la goutte d’eau qui fait déborder le vase'], 0,
    'Une action qui ne sert à rien. EN: a wasted effort.'),
  ctl('Relativiser', 'Deux voisins se disputent pour une place de parking vide :',
    ['C’est une tempête dans un verre d’eau.', 'Nous sommes tous dans le même bateau.'], 0,
    'Beaucoup de bruit pour rien. EN: a storm in a teacup.'),
], ['figement'], 'sheet-figees');

const A11_TEXTE = dansUnTexte('a11-texte', 'Le compte rendu', TEXTE_A11, [
  { q: 'Quelles expressions le compte rendu reprend-il de la réunion ?', a: 'Dans le même bateau, jeter de l’huile sur le feu, mettre de l’eau dans son vin.' },
  { q: 'Que résume « chacun a mis de l’eau dans son vin » ?', a: 'Tout le monde a cédé un peu : la façade cette année, le toit l’an prochain.' },
  { q: 'Comment le compte rendu dit-il le coup d’épée dans l’eau ?', a: 'Sans expression : « un vote sans devis étant jugé inutile ».' },
  { q: 'Pourquoi un compte rendu peut-il garder ces expressions ?', a: 'Elles sont courantes, pas familières, et elles résument vite une position.' },
], 'rec-b2-34-texte-a11', ['figement', 'registre']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le sens', 'Mettre de l’eau dans son vin, c’est…',
    ['modérer ses exigences', 'devenir plus exigeant'], 0,
    'L’eau adoucit. EN: to soften.'),
  ctl('L’image', 'A storm in a teacup, en français :',
    ['une tempête dans un verre d’eau', 'une tempête dans une tasse de thé'], 0,
    'Le verre d’eau. EN: the glass of water.'),
  ctl('Le petit mot', 'Tirer son épingle…',
    ['du jeu', 'de jeu', 'au jeu'], 0,
    'Du jeu. EN: du jeu.'),
], ['figement']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Négocier, apaiser, trancher',
    opener: {
      line: 'Une façade à refaire, un syndic à ménager, des voisins qui s’échauffent : ici tu apprends les expressions qui apaisent, qui aggravent et qui jugent. EN: A facade to redo, a managing agent to handle, neighbours getting heated: here you learn the expressions that calm, inflame and judge.',
      imageRef: 'lessons/proverbes/act11.jpg',
    },
    sections: [],
    milestone: 'En réunion, tu proposes un compromis, tu refuses d’aggraver et tu juges une action inutile, avec l’expression qui convient. EN: In a meeting you propose a compromise, refuse to inflame, and call an action pointless, with the right expression.',
    estScreens: 42, restPoints: ['a11-trier', 'a11-atoi'],
  },
  sections: [A11_ECOUTE, A11_CARTES, A11_TRIER, A11_ERREURS, A11_ATOI, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 · À TOI D'ÉCRIRE, ET LE B2 EST BOUCLÉ
 *
 *  The model column (« les absents ont toujours tort », a proverb the task
 *  excludes), the plan, the uses, a radio phone-in, THE TASK (DELF B2 PE),
 *  then the closing sections, the one quiz and the celebration: B2 complete.
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Une chronique modèle',
  frSub: 'Les absents ont-ils toujours tort',
  text: MODELE_TEXT,
  glossary: [
    { word: 'malentendu', en: 'misunderstanding', note: 'Ce qu’on a mal compris, de part et d’autre.' },
    { word: 'muet', en: 'silent', note: 'Qui ne parle pas.' },
  ],
  questions: [
    { q: 'Global : comment la chronique est-elle construite ?', a: 'Le proverbe et la question ; ce qu’il a de vrai (certes) ; ce qu’il oublie (pourtant) ; la position de l’auteur (pour ma part) ; la conclusion (bref).' },
    { q: 'Détail : quelles expressions figées l’auteur emploie-t-il ?', a: 'Tomber des nues, avoir plusieurs cordes à son arc, se noyer dans un verre d’eau.' },
    { q: 'Inférence : pourquoi l’auteur change-t-il le proverbe dans sa dernière phrase ?', a: 'Pour dire sa thèse d’un trait : les absents n’ont pas toujours tort, s’ils se font entendre.' },
    { q: 'Point de vue : le proverbe sert-il de preuve dans ce texte ?', a: 'Non : il ouvre la question ; les exemples (la machine à café, la note envoyée avant la réunion) font la preuve.' },
  ],
  audio: REC('rec-b2-34-modele'),
  say: REFRAME,
  terms: ['accroche', 'figement'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Six temps pour ta chronique',
  steps: [
    '1. Ouvre sur le proverbe, cité exactement, puis pose la question : est-ce toujours vrai ? EN: open with the proverb and a question.',
    '2. Accorde-lui ce qu’il a de vrai, avec un exemple : certes… EN: grant what is true, with an example.',
    '3. Montre sa limite, avec un autre exemple : pourtant, mais… EN: show its limit.',
    `4. Donne ta position : pour ma part, je ne crois pas que + subjonctif, comme dans ${MODES_REF}. EN: state your position.`,
    '5. Place au moins trois expressions figées là où elles disent quelque chose, conjuguées. EN: three fixed expressions, conjugated, where they mean something.',
    '6. Conclus : le proverbe ouvre la discussion, ou un proverbe détourné qui résume ta thèse. EN: conclude, perhaps with a twist.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accroche'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  title: 'Les phrases qui portent la chronique',
  cases: [
    uc('Tu ouvres sur le proverbe', E(1759)),
    uc('Tu accordes un point', E(1760)),
    uc('Tu montres la limite', E(1761)),
    uc('Tu donnes ta position', E(1762)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accroche'],
};

/** Say it out loud: a radio phone-in, the host says vous. ONE APOSTROPHE
 *  STYLE (’) in every turn and alt; no seed row. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'La tribune du matin',
  setting: 'Une radio de Québec (fictive) ouvre sa tribune téléphonique. Le sujet du jour : « Qui va lentement va sûrement : vrai ou faux ? » L’animatrice, Martine, te passe à l’antenne.',
  turns: [
    {
      ai: 'Bonjour, vous êtes en ondes. Aujourd’hui, un proverbe : qui va lentement va sûrement. Vous êtes d’accord ?',
      en: 'Hello, you are on the air. Today, a proverb: slow and steady wins the race. Do you agree?',
      user: 'Bonjour. Oui, en partie : qui va lentement va sûrement, mais pas toujours assez vite.',
      userEn: 'Hello. Yes, partly: slow and steady wins the race, but not always fast enough. (Agree, then qualify.)',
      alts: [
        { fr: 'En partie seulement : le proverbe a raison pour les projets longs.', en: 'Only partly: the proverb is right for long projects.' },
        { fr: 'Oui et non : tout dépend de ce qu’on entreprend.', en: 'Yes and no: it all depends on what you take on.' },
      ],
    },
    {
      ai: 'Qu’est-ce qui vous fait dire ça ?',
      en: 'What makes you say that?',
      user: 'Ma sœur a ouvert son restaurant petit à petit, sans s’endetter, et il marche très bien.',
      userEn: 'My sister opened her restaurant little by little, without going into debt, and it is doing very well. (An example for the proverb.)',
      alts: [
        { fr: 'J’ai appris le piano lentement, et je joue encore vingt ans après.', en: 'I learned the piano slowly, and I still play twenty years later.' },
        { fr: 'Mon voisin a rénové sa maison pièce par pièce : c’est solide.', en: 'My neighbour renovated his house room by room: it is solid.' },
      ],
    },
    {
      ai: 'Et quand est-ce que le proverbe se trompe, selon vous ?',
      en: 'And when is the proverb wrong, in your view?',
      user: 'Quand il y a une date limite : rien ne sert de courir ; il faut partir à point.',
      userEn: 'When there is a deadline: there is no point running; you have to set off in good time. (La Fontaine, quoted exactly.)',
      alts: [
        { fr: 'Quand on laisse passer une occasion : qui ne tente rien n’a rien.', en: 'When you let a chance go by: nothing ventured, nothing gained. (Another proverb against it.)' },
        { fr: 'Au travail, parfois, il faut aller vite, sinon quelqu’un d’autre le fait.', en: 'At work, sometimes you have to be quick, or someone else does it.' },
      ],
    },
    {
      ai: 'Certains auditeurs disent que c’est un proverbe de paresseux.',
      en: 'Some listeners say it is a proverb for lazy people.',
      user: 'Je ne suis pas d’accord : aller lentement, ce n’est pas ne rien faire.',
      userEn: 'I disagree: going slowly is not doing nothing. (Disagree politely.)',
      alts: [
        { fr: 'Je comprends, mais la lenteur et la paresse, ce n’est pas la même chose.', en: 'I understand, but slowness and laziness are not the same thing.' },
        { fr: 'Je ne crois pas qu’ils aient raison : la patience demande de l’effort.', en: 'I do not think they are right: patience takes effort. (Je ne crois pas que + subjunctive.)' },
      ],
    },
    {
      ai: 'Vous avez un exemple où il vaut mieux ne pas attendre ?',
      en: 'Do you have an example where it is better not to wait?',
      user: 'Oui : pour la santé, mieux vaut prévenir que guérir, alors on agit tout de suite.',
      userEn: 'Yes: with health, better safe than sorry, so you act straight away. (Another proverb, used as an example.)',
      alts: [
        { fr: 'Avec un voisin fâché : il ne faut pas jeter de l’huile sur le feu, mais il faut lui parler vite.', en: 'With an angry neighbour: you must not add fuel to the fire, but you must talk to him soon.' },
        { fr: 'Pour une fuite d’eau : un petit problème ignoré devient vite la goutte d’eau qui fait déborder le vase.', en: 'For a water leak: a small problem ignored soon becomes the last straw.' },
      ],
    },
    {
      ai: 'Merci. Un mot pour conclure ?',
      en: 'Thank you. A word to finish?',
      user: 'Le proverbe ouvre la discussion, il ne la ferme pas : à chacun de trouver son rythme.',
      userEn: 'The proverb opens the discussion, it does not close it: everyone has to find their own pace. (Conclude without using the proverb as proof.)',
      alts: [
        { fr: 'Comme dirait ma grand-mère, chaque chose en son temps.', en: 'As my grandmother would say, everything in its own time.' },
        { fr: 'Allez lentement si vous voulez, mais partez à temps.', en: 'Go slowly if you like, but set off in time.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['citation', 'accroche'],
};

/** THE GRADED TASK, written, DELF B2 PE. */
const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Un proverbe à l’épreuve',
  frSub: 'Mission écrite, format DELF B2',
  brief: 'Choisis une situation. A : le magazine en ligne (fictif) « Idées reçues » publie chaque mois la chronique « Un proverbe à l’épreuve ». Choisis un proverbe de la leçon, sauf « les absents ont toujours tort », et écris la chronique : ouvre sur le proverbe, montre ce qu’il a de vrai, puis ses limites, et conclus. B : dans le courrier des lecteurs du même magazine, Malik, 29 ans, écrit : on lui propose un poste à Moncton, loin de sa famille ; sa mère lui répète « Pierre qui roule n’amasse pas mousse », son meilleur ami « Qui ne tente rien n’a rien ». Réponds-lui : ouvre sur un proverbe, dis ce qu’il a de juste et de faux dans sa situation, et conseille-le.',
  briefEn: 'Choose one situation. A: the online magazine « Idées reçues » (fictional) runs a monthly column « A proverb put to the test ». Choose a proverb from the lesson, except « les absents ont toujours tort », and write the column: open with the proverb, show what is true in it, then its limits, and conclude. B: in the same magazine’s letters page, Malik, 29, writes that he has been offered a job in Moncton, far from his family; his mother keeps saying « Pierre qui roule n’amasse pas mousse », his best friend « Qui ne tente rien n’a rien ». Reply to him: open with a proverb, say what is right and wrong about it in his situation, and advise him.',
  produce: 'Écris un texte de 200 à 250 mots. Ouvre sur un proverbe cité exactement, discute s’il est vrai (ce qu’il a de juste, ses limites) et emploie au moins trois expressions figées de la leçon, conjuguées et bien placées (par exemple : faire d’une pierre deux coups, prendre son mal en patience, ne pas y aller par quatre chemins, mettre de l’eau dans son vin, tomber des nues).',
  responseSpec: { kind: 'text', minWords: 200, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          '3 : Le texte s’ouvre sur un proverbe cité exactement, montre ce qu’il a de vrai et ce qu’il oublie, et conclut ; en situation B, il conseille Malik. Entre 200 et 250 mots.',
          '2 : Tout y est, mais la discussion reste d’un seul côté (le proverbe a raison, point), ou la longueur sort un peu des limites.',
          '1 : Le proverbe manque ou sert de preuve, sans discussion ; ou le texte parle d’autre chose.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          '3 : Un plan clair (accroche, ce qui est vrai, la limite, la position, la conclusion) ; les liens (certes, pourtant, pour ma part, bref) guident le lecteur.',
          '2 : Le plan existe, mais une idée arrive au mauvais endroit, ou les liens manquent entre deux parties.',
          '1 : Les idées se suivent sans ordre ; le lecteur doit deviner la position.',
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue du lexique',
        maxPoints: 2,
        descriptors: [
          '2 : Au moins trois expressions figées de la leçon, bien choisies et intégrées à la phrase (verbe conjugué, possessif accordé), et un proverbe annoncé au bon registre.',
          '1 : Moins de trois expressions, ou des expressions placées en liste, sans lien avec l’idée.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          '2 : Les proverbes et les morales sont cités sans être abîmés ; les expressions gardent leurs petits mots (du jeu, des nues, son mal) ; les modes et les accords sont justes.',
          '1 : Des proverbes abîmés ou calqués (une pierre qui roule, une fois mordu), des expressions aux petits mots changés ou avec le mauvais possessif.',
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          '2 : Le registre d’une chronique ou d’un courrier des lecteurs : soigné, personnel sans être familier ; le proverbe annoncé comme il faut (si l’on en croit le proverbe, comme dit le proverbe).',
          '1 : Le texte sonne comme un message à un ami (je connais la chanson, bref quoi), ou comme un discours solennel et figé.',
        ],
      },
    ],
  },
  scaffold: [
    'Comme dit le proverbe,',
    'Si l’on en croit le proverbe,',
    'Certes,',
    'Pourtant,',
    'Pour ma part, je ne crois pas que',
    'À votre place,',
    'Encore faut-il',
    'Bref,',
  ],
  modelAnswer: TASK_MODEL,
  modelAnswerEn: 'Subject: Re: Moncton or not Moncton? Dear Malik, « Nothing ventured, nothing gained », says your friend; « A rolling stone gathers no moss », replies your mother. There you are, caught between two proverbs, and that is rather a good sign: each contains some truth, but neither will decide for you. Your friend is right on one point. A job like this does not come up every year, and if you turn it down out of fear, you may bitterly regret it. Yet your mother is not wrong either: moving too often means losing your friends, your bearings and sometimes your savings. But you are not talking about roaming the world; you are talking about a job, in a particular town, for a few years. In your place, I would get straight to the point with your employer: ask for a six-month trial period and the possibility of coming back if the experience does not suit you. That way you will kill two birds with one stone: you will try your luck without risking everything. And if the distance weighs on you, grin and bear it for the first months; Moncton was not built in a day, and neither is your new life. In short, proverbs open the reflection; it is up to you to conclude it. Safe travels, perhaps. Solange. The marker’s notes (not counted): 1. Task: two proverbs at the opening, what is true in them, their limits, precise advice, a conclusion. 2. Coherence: four paragraphs; pourtant, mais, ainsi, en somme. 3. Range: four fixed expressions placed naturally and one proverb twisted to conclude. 4. Accuracy: the possessive follows the subject, the conditional of advice (je n’y irais pas). 5. Register: vous for a letters page, warm but careful, no proverb used as proof.',
  watchFor: [
    { pattern: 'A proverb quoted with an added article, a changed tense or a plural after qui (une pierre qui roule, qui se ressemblent s’assemblent).', criterion: 'correction', feedback: 'Un proverbe se cite intact : pas d’article ajouté, le présent, et qui avec un verbe au singulier.', ref: 'a2-piege' },
    { pattern: 'An English proverb translated word for word (une fois mordu, deux fois timide; ne compte pas tes poulets).', criterion: 'correction', feedback: 'Cherche le proverbe français qui existe : chat échaudé craint l’eau froide, la peau de l’ours.', ref: 'a9-piege' },
    { pattern: 'A La Fontaine moral misquoted (partir à l’heure, un plus petit que nous).', criterion: 'correction', feedback: 'Une morale se cite mot pour mot : rien ne sert de courir ; il faut partir à point.', ref: 'a7-erreurs' },
    { pattern: 'The proverb used as proof (comme dit le proverbe, donc c’est vrai) with no discussion.', criterion: 'tache', feedback: 'Le proverbe ouvre la question ; tes exemples et tes arguments y répondent.', ref: 'a8-erreurs' },
    { pattern: 'Only agreement or only disagreement with the proverb: no « certes… pourtant ».', criterion: 'tache', feedback: 'Montre ce que le proverbe a de vrai, puis ce qu’il oublie.', ref: 'a12-lecture' },
    { pattern: 'Fewer than three fixed expressions, or expressions listed without a link to the idea.', criterion: 'etendue', feedback: 'Place trois expressions là où elles disent quelque chose, dans une vraie phrase.', ref: 'a12-plan' },
    { pattern: 'A fixed expression not conjugated or with the wrong possessive (je prends son mal en patience, nous avons plusieurs cordes à son arc).', criterion: 'correction', feedback: 'Le verbe se conjugue et le possessif suit le sujet : je prends mon mal en patience.', ref: 'a10-piege' },
    { pattern: 'A fixed expression with a changed small word or the wrong auxiliary (tirer son épingle de jeu, l’équipe a tombé des nues).', criterion: 'correction', feedback: 'Garde les petits mots et le bon auxiliaire : tirer son épingle du jeu, elle est tombée des nues.', ref: 'a10-piege' },
    { pattern: 'A proverb applied to a situation it does not fit (qui se ressemble s’assemble for two very different people).', criterion: 'tache', feedback: 'Vérifie le sens du proverbe avant de l’appliquer.', ref: 'a5-erreurs' },
    { pattern: 'No clear plan, or no connectors between the parts.', criterion: 'coherence', feedback: 'Suis le plan : accroche, certes, pourtant, pour ma part, bref.', ref: 'a12-plan' },
    { pattern: 'Familiar announcements or tone in a column (je connais la chanson, bref quoi), or tu and vous mixed in the reply to Malik.', criterion: 'registre', feedback: 'Annonce le proverbe au bon registre (si l’on en croit le proverbe) et garde le même pronom du début à la fin.', ref: 'a8-cartes' },
  ],
  graderNotes: [
    'Count the words of the body only: the subject line, the greeting and the signature do not count. 200 to 250 with 10% tolerance (180 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'Accept every attested form of a proverb: Paris or Rome ne s’est pas fait or faite en un jour; il ne faut jamais or pas dire : Fontaine…; on récolte ce que l’on sème or ce qu’on sème; après la pluie, le beau temps or après la pluie vient le beau temps; vouloir, c’est pouvoir or quand on veut, on peut. A proverb adapted to the person (telle mère, telle fille; ne mets pas tous tes œufs) is correct.',
    'A proverb twisted on purpose (« Moncton ne s’est pas faite en un jour », « les absents n’ont pas toujours tort ») is welcome if the original stays recognisable; do not mark it as a misquotation. A La Fontaine moral must be exact unless the writer says it is twisted.',
    `Fixed expressions from ${ANIMAUX_REF_EN} and lessons 27 and 29 in B1 count towards the three (avoir du pain sur la planche, couper la poire en deux, s’en mordre les doigts). Proverbs do not count as fixed expressions.`,
    'Situation B: vous is expected in a letters-page reply; a consistent tu costs at most one register point, never a correction point. Situation A: the writer may use je, nous or on.',
    `The structure follows ${ARGUMENTATION_REF_EN} (position, proof, counter-argument) and the concession of ${CONCESSION_REF_EN} (certes, pourtant, avoir beau, encore faut-il); credit them under « coherence », do not require them by name.`,
    'Do not judge the advice itself (whether Malik should move); judge only whether it is argued, precise and in the right register.',
    `Register points follow ${REGISTRES_REF_EN}: courant or soutenu for a column; a single familiar touch used on purpose, in quotation marks, is fine.`,
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 16 du B2 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accroche', 'figement'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Dis tes proverbes à voix haute',
  frSub: 'Cite, puis conjugue',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proverbe', 'figement'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le proverbe', v: 'au présent, sans article, cité', say: fr(E(1612)),
      detail: { title: 'Le proverbe', body: 'Une vérité générale, anonyme : tu la cites, entière ou à moitié. EN: quote it.', say: fr(E(1617)) } },
    { k: 'l’expression', v: 'dans ta phrase, conjuguée', say: fr(E(1735)),
      detail: { title: 'L’expression figée', body: 'Le verbe se conjugue, le possessif suit le sujet, l’image reste. EN: conjugate it.', say: fr(E(1755)) } },
    { k: 'annoncer', v: 'comme on dit, si l’on en croit', say: fr(E(1700)),
      detail: { title: 'Annoncer', body: 'Familier, courant ou soutenu : l’annonce donne le registre. EN: the announcement sets the register.', say: fr(E(1704)) } },
    { k: 'La Fontaine', v: 'mot pour mot', say: fr(E(1683)),
      detail: { title: 'La Fontaine', body: 'Une morale est une citation : exacte, ou clairement détournée. EN: exact, or clearly twisted.', say: fr(E(1684)) } },
    { k: 'traduire', v: 'un proverbe, sinon le sens', say: fr(E(1714)),
      detail: { title: 'Traduire', body: 'Même image, autre image, ou pas d’équivalent : alors le sens. EN: same image, another, or none.', say: fr(E(1725)) } },
    { k: 'écrire', v: 'accroche, certes, pourtant, bref', say: fr(E(1759)),
      detail: { title: 'Écrire', body: 'Le proverbe ouvre, tes arguments prouvent, ta conclusion tranche. EN: hook, argue, conclude.', say: fr(E(1763)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proverbe', 'figement'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: 'Tu reconnais un proverbe à sa forme, tu en cites une vingtaine sans les abîmer, entiers ou à moitié, et tu sais les discuter au lieu de t’en servir comme preuve. Tu cites La Fontaine mot pour mot, tu trouves le proverbe français derrière un proverbe anglais, et tu places des expressions figées en conjuguant leur verbe et en accordant leur possessif. Le piège qui reste, c’est le calque discret : une fois mordu, tomber des nuages, faire d’une pierre deux oiseaux. Avant l’examen, relis ta chronique et vérifie une seule chose : chaque proverbe et chaque expression sont-ils intacts ? EN: Reread your column and check that every proverb and expression is intact.',
  stats: [
    { k: 'Citer', v: 'intact, entier ou à moitié' },
    { k: 'Discuter', v: 'certes, pourtant, pour ma part' },
    { k: 'Traduire', v: 'un proverbe, sinon le sens' },
    { k: 'Placer', v: 'le verbe conjugué, le bon possessif' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 2 to 11, an exam round
 *  (DELF B2 CE, CO, PE; TCF), and a recycling round citing earlier lessons
 *  by position. Each round's target is a distinct errorTrigger. `fold()`
 *  strips accents, commas and apostrophes: every typed answer differs from
 *  the wrong one by letters that survive, and every proverb type-in accepts
 *  the missing half alone and every attested variant. */

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
      id: 'r1-forme', label: 'La forme d’un proverbe', targets: ['forme-abimee'],
      questions: [
        mc('Quelle citation est juste ?', ['Pierre qui roule n’amasse pas mousse.', 'Une pierre qui roule n’amasse pas de mousse.', 'La pierre qui roule n’amasse pas la mousse.'], 0, 'Sans article : le proverbe parle de toutes les pierres. EN: no article.', 'a2-cartes'),
        mc('Dans « Qui va lentement va sûrement », qui veut dire…', ['celui qui', 'quelle personne', 'les gens qui'], 0, 'Qui = celui qui, avec un verbe au singulier. EN: whoever.', 'a2-construire'),
        mc('Quel proverbe n’a pas de verbe conjugué ?', ['Tel père, tel fils.', 'Qui se ressemble s’assemble.', 'L’habit ne fait pas le moine.'], 0, 'Tel père, tel fils : le verbe est sous-entendu. EN: no verb.', 'a2-tableau'),
        tI('Qui se ressemble ___.', fr(E(1654)), 'S’assemble, au singulier : qui = celui qui. EN: s’assemble.', 'a2-piege', ['s’assemble']),
        tI('Il n’y a pas de fumée sans ___.', fr(E(1669)), 'Sans feu, sans article. EN: sans feu.', 'a2-piege', ['feu']),
        eS('Qui se ressemblent s’assemblent.', fr(E(1654)), 'Le verbe reste au singulier après qui. EN: singular.', 'a2-piege'),
        eS('Après la pluie, il fait beau temps.', fr(E(1670)), 'Le proverbe n’a pas de verbe. EN: no verb.', 'a2-piege', ['Après la pluie vient le beau temps.']),
        lC('Écoute. Qu’a de particulier ce proverbe ?', fr(E(1655)), ['il n’a pas de verbe', 'il est au passé', 'il a un article'], 0, 'Deux moitiés, sans verbe. EN: no verb.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r2-patience', label: 'L’effort et la patience', targets: ['patience-confuse'],
      questions: [
        mc('Rome was not built in a day, en français :', ['Paris ne s’est pas fait en un jour.', 'Paris n’a pas été construit en un jour.', 'Rome n’a pas été construite dans un jour.'], 0, 'Le proverbe dit se faire, et en un jour. EN: se faire, en un jour.', 'a3-erreurs'),
        mc('Petit à petit, l’oiseau fait son nid veut dire…', ['un grand résultat se construit peu à peu', 'les oiseaux travaillent beaucoup', 'il faut se dépêcher'], 0, 'De l’image au sens. EN: little by little.', 'a3-cartes'),
        mc('Lequel conseille de ne pas fêter trop tôt ?', ['Il ne faut pas vendre la peau de l’ours avant de l’avoir tué.', 'Vouloir, c’est pouvoir.', 'Qui va lentement va sûrement.'], 0, 'Le résultat n’est pas encore là. EN: not yet won.', 'a3-trier'),
        tI('Petit à petit, l’oiseau ___.', fr(E(1627)), 'Fait son nid. EN: fait son nid.', 'a3-cartes', ['fait son nid']),
        tI('Rome ne s’est pas ___ en un jour.', 'Rome ne s’est pas faite en un jour.', 'Faite ou fait : les deux se disent. EN: faite or fait.', 'a3-cartes', ['Rome ne s’est pas fait en un jour.', 'faite', 'fait']),
        eS('Vouloir est pouvoir.', fr(E(1634)), 'Vouloir, c’est pouvoir. EN: c’est.', 'a3-erreurs', ['Quand on veut, on peut.']),
        eS('Il ne faut pas vendre la peau de l’ours avant de le tuer.', 'Il ne faut pas vendre la peau de l’ours avant de l’avoir tué.', `L’infinitif passé, vu dans ${INFINITIVES_REF}. EN: avant de l’avoir tué.`, 'a3-erreurs', ['Il ne faut jamais vendre la peau de l’ours avant de l’avoir tué.']),
        lC('Écoute. Que conseille Moussa ?', fr(E(1631)), ['avancer pas à pas', 'ouvrir tous les jours', 'fermer la boulangerie'], 0, 'Un dimanche par mois d’abord. EN: step by step.', 'a3-histoire'),
      ],
    },
    {
      id: 'r3-prudence', label: 'La prudence', targets: ['prudence-calquee'],
      questions: [
        mc('Better safe than sorry :', ['Mieux vaut prévenir que guérir.', 'Mieux vaut être sûr que désolé.', 'Mieux vaut tard que jamais.'], 0, 'Le proverbe français existe déjà. EN: prévenir, guérir.', 'a4-piege'),
        mc('Once bitten, twice shy :', ['Chat échaudé craint l’eau froide.', 'Une fois mordu, deux fois timide.', 'Chat brûlé craint le feu.'], 0, 'Le chat échaudé. EN: the scalded cat.', 'a4-piege'),
        mc('Ton ami jure qu’il ne prendra jamais l’avion. Tu lui dis :', ['Il ne faut jamais dire : Fontaine, je ne boirai pas de ton eau.', 'Chaque chose en son temps.', 'Mieux vaut tard que jamais.'], 0, 'On ne jure pas qu’on ne fera jamais une chose. EN: never say never.', 'a4-cartes'),
        tI('Mieux vaut prévenir que ___.', fr(E(1642)), 'Guérir. EN: guérir.', 'a4-cartes', ['guérir', 'Il vaut mieux prévenir que guérir.']),
        tI('Il ne faut pas mettre tous ses œufs dans le même ___.', fr(E(1650)), 'Le panier. EN: panier.', 'a4-cartes', ['panier']),
        eS('Ne mets pas tous ses œufs dans le même panier.', 'Ne mets pas tous tes œufs dans le même panier.', 'À l’impératif, tu t’adresses à quelqu’un : tes œufs. EN: tes.', 'a4-atoi', ['Et ne mets pas tous tes œufs dans le même panier.', 'Il ne faut pas mettre tous ses œufs dans le même panier.', 'Ne mettez pas tous vos œufs dans le même panier.']),
        eS('Justement : chat brûlé craint l’eau froide.', 'Justement : chat échaudé craint l’eau froide.', 'Échaudé, le mot du proverbe. EN: échaudé.', 'a4-piege', ['Chat échaudé craint l’eau froide.']),
        lC('Écoute. Que conseille Léa ?', fr(E(1648)), ['de répartir ses économies', 'de tout investir', 'de ne rien faire'], 0, 'Pas tous les œufs dans le même panier. EN: spread the risk.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r4-gens', label: 'Les autres et nous', targets: ['gens-maljuges'],
      questions: [
        mc('L’habit ne fait pas le moine veut dire…', ['il ne faut pas juger sur l’apparence', 'les moines portent un habit', 'il faut bien s’habiller'], 0, 'L’apparence trompe. EN: appearances.', 'a5-cartes'),
        mc('Pour une mère et sa fille :', ['Telle mère, telle fille.', 'Tel mère, tel fille.', 'Comme la mère, comme la fille.'], 0, 'Tel s’accorde. EN: telle.', 'a5-erreurs'),
        mc('Birds of a feather flock together :', ['Qui se ressemble s’assemble.', 'Les oiseaux d’une plume volent ensemble.', 'Tel père, tel fils.'], 0, 'Le proverbe français, avec sa rime. EN: the French proverb.', 'a5-cartes'),
        tI('Les absents ont toujours ___.', fr(E(1658)), 'Tort, sans article. EN: tort.', 'a5-erreurs', ['tort']),
        tI('L’habit ne fait pas ___.', fr(E(1657)), 'Le moine. EN: le moine.', 'a5-cartes', ['le moine']),
        eS('Les vêtements ne font pas le moine.', fr(E(1657)), 'Le proverbe garde l’habit. EN: l’habit.', 'a5-erreurs'),
        eS('Les absents ont toujours le tort.', fr(E(1658)), 'Avoir tort, sans article. EN: ont tort.', 'a5-erreurs'),
        lC('Écoute. Que dit la mère de son fils ?', fr(E(1663)), ['qu’en bougeant sans cesse, il ne construit rien', 'qu’il est riche', 'qu’il lui ressemble'], 0, 'Pierre qui roule n’amasse pas mousse. EN: a rolling stone.', 'a5-choisir'),
      ],
    },
    {
      id: 'r5-consequences', label: 'Semer et récolter', targets: ['consequence-calquee'],
      questions: [
        mc('Qui sème le vent récolte…', ['la tempête', 'l’orage', 'la pluie'], 0, 'La tempête. EN: la tempête.', 'a6-piege'),
        mc('The last straw :', ['la goutte d’eau qui fait déborder le vase', 'la paille qui casse le dos du chameau', 'la dernière goutte de pluie'], 0, 'Une autre image pour la même idée. EN: the last drop.', 'a6-piege'),
        mc('Il n’y a pas de fumée sans feu. Que peut-on en conclure d’une rumeur ?', ['qu’elle a sans doute une cause, pas forcément qu’elle est vraie', 'qu’elle est forcément vraie', 'qu’elle est fausse'], 0, 'Une cause n’est pas une preuve. EN: not proof.', 'a6-trier'),
        tI('On récolte ce que l’on ___.', fr(E(1668)), 'Sème. EN: sème.', 'a6-cartes', ['sème', 'On récolte ce qu’on sème.']),
        tI('Après la pluie, ___.', fr(E(1670)), 'Le beau temps. EN: le beau temps.', 'a6-cartes', ['le beau temps', 'Après la pluie vient le beau temps.', 'vient le beau temps']),
        eS('Où il y a de la fumée, il y a du feu.', fr(E(1669)), 'Le français dit : il n’y a pas de fumée sans feu. EN: the French form.', 'a6-piege', ['Pas de fumée sans feu.']),
        eS('Ces trois jours de retard, c’est la goutte d’eau qui fait déborder le verre.', fr(E(1681)), 'Le vase, pas le verre. EN: le vase.', 'a6-piege'),
        lC('Écoute. Que conseille Sonia ?', fr(E(1678)), ['de parler au voisin, en espérant que ça s’arrange', 'de déménager', 'de répondre encore plus sèchement'], 0, 'Après la pluie, le beau temps. EN: talk to him.', 'a6-histoire'),
      ],
    },
    {
      id: 'r6-lafontaine', label: 'La Fontaine', targets: ['morale-deformee'],
      questions: [
        mc('Rien ne sert de courir ; il faut partir…', ['à point', 'à l’heure', 'tôt'], 0, 'À point : la morale exacte. EN: à point.', 'a7-erreurs'),
        mc('La raison du plus fort est toujours la meilleure : La Fontaine…', ['décrit la loi du plus fort sans l’approuver', 'donne raison au loup', 'parle de sport'], 0, 'Il décrit ; le lecteur juge. EN: he describes.', 'a7-lecture'),
        mc('On a souvent besoin d’un plus petit que…', ['soi', 'nous', 'lui'], 0, `Après on, sujet général : soi, comme dans ${INSISTANCE_REF}. EN: soi.`, 'a7-erreurs'),
        tI('La raison du plus fort est toujours ___.', fr(E(1682)), 'La meilleure. EN: la meilleure.', 'a7-cartes', ['la meilleure']),
        tI('Apprenez que tout flatteur vit aux dépens de celui qui ___.', fr(E(1685)), 'L’écoute : c’est l’autre qui écoute. EN: l’écoute.', 'a7-erreurs', ['l’écoute']),
        eS('On a souvent besoin d’un plus petit que nous.', fr(E(1684)), 'Soi, après on. EN: soi.', 'a7-erreurs'),
        eS('Rien ne sert de courir ; il faut partir à l’heure.', fr(E(1683)), 'À point : on cite exactement. EN: à point.', 'a7-erreurs'),
        lC('Écoute. De quelle fable s’agit-il ?', fr(E(1692)), ['Le Lion et le Rat', 'Le Corbeau et le Renard', 'Le Lièvre et la Tortue'], 0, 'Le rat qui libère le lion. EN: the lion and the rat.', 'a7-trier'),
      ],
    },
    {
      id: 'r7-conversation', label: 'Le proverbe en conversation', targets: ['proverbe-mal-place'],
      questions: [
        mc('« Comme on dit, après la pluie… » : la personne…', ['cite un proverbe à moitié', 'oublie la fin', 'se trompe de proverbe'], 0, 'La suite est connue de tous. EN: a half quote.', 'a8-tableau'),
        mc('Quelle annonce convient à une chronique ?', ['si l’on en croit le proverbe', 'je connais la chanson', 'eh oui'], 0, 'Soutenu, pour l’écrit. EN: formal.', 'a8-cartes'),
        mc('Dans un texte argumenté, le proverbe sert…', ['d’accroche ou de conclusion', 'de preuve', 'de titre obligatoire'], 0, 'Tes arguments font la preuve. EN: a hook.', 'a8-erreurs'),
        mc('« Qui va lentement arrive en retard » est…', ['un proverbe détourné pour faire rire', 'le proverbe exact', 'une morale de La Fontaine'], 0, 'Un détournement. EN: a twist.', 'a8-tableau'),
        tI('Certes, qui ne tente rien n’a rien ; ___ faut-il savoir ce que l’on tente.', fr(E(1711)), `Encore faut-il : la concession de ${CONCESSION_REF}. EN: encore faut-il.`, 'a8-tableau', ['encore', 'Certes, qui ne tente rien n’a rien ; encore faut-il savoir ce qu’on tente.']),
        tI('Le proverbe a ___ dire, cette fois, la prudence ne nous a pas protégés.', fr(E(1710)), `Avoir beau dire, vu dans ${CONCESSION_REF}. EN: a beau.`, 'a8-tableau', ['beau']),
        eS('Bon, comme on dit, après la pluie, la tempête.', 'Bon, comme on dit, après la pluie, le beau temps.', 'Un proverbe, pas deux mélangés. EN: le beau temps.', 'a8-erreurs', ['Bon, comme on dit, après la pluie vient le beau temps.']),
        lC('Écoute. Quel ton a cette réponse ?', fr(E(1705)), ['un peu las, avec humour', 'très sérieux', 'en colère'], 0, 'Un proverbe contre un proverbe, en souriant. EN: weary humour.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r8-traduire', label: 'D’une langue à l’autre', targets: ['calque-proverbe'],
      questions: [
        mc('Don’t count your chickens before they hatch :', ['Il ne faut pas vendre la peau de l’ours avant de l’avoir tué.', 'Ne compte pas tes poussins avant qu’ils éclosent.', 'Petit à petit, l’oiseau fait son nid.'], 0, 'Une autre image : l’ours. EN: the bear.', 'a9-piege'),
        mc('Like father, like son :', ['Tel père, tel fils.', 'Comme le père, comme le fils.', 'Qui se ressemble s’assemble.'], 0, 'La même image. EN: same image.', 'a9-tableau'),
        mc('When in Rome, do as the Romans do : que fait un bon traducteur ?', ['il traduit le sens', 'il traduit mot à mot', 'il met un autre proverbe sur Rome'], 0, 'Pas de proverbe figé : le sens. EN: the meaning.', 'a9-trier'),
        mc('Hurler avec les loups veut dire…', ['suivre le groupe, même contre son jugement', 'avoir peur de la foule', 'crier très fort'], 0, 'Faire comme les autres sans les approuver : c’est péjoratif, plus que when in Rome. EN: follow the crowd.', 'a9-trier'),
        tI('Vouloir, c’est ___.', fr(E(1634)), 'Pouvoir. EN: pouvoir.', 'a9-piege', ['pouvoir']),
        eS('Où il y a une volonté, il y a un chemin.', fr(E(1634)), 'Le proverbe français existe : vouloir, c’est pouvoir. EN: vouloir, c’est pouvoir.', 'a9-piege', ['Quand on veut, on peut.']),
        eS('Une fois mordu, deux fois timide.', fr(E(1645)), 'Chat échaudé craint l’eau froide. EN: the scalded cat.', 'a9-piege'),
        lC('Écoute. Que conseille le père, à la fin ?', fr(E(1717)), ['de suivre les usages du pays', 'de rentrer chez lui', 'de se méfier de tout'], 0, 'Le sens de when in Rome. EN: follow local customs.', 'a9-histoire'),
      ],
    },
    {
      id: 'r9-travail', label: 'Les expressions du travail', targets: ['expression-figee-abimee'],
      questions: [
        mc('Kill two birds with one stone :', ['faire d’une pierre deux coups', 'tuer deux oiseaux d’une pierre', 'avoir plusieurs cordes à son arc'], 0, 'L’image française. EN: deux coups.', 'a10-piege'),
        mc('Tourner autour du pot, c’est…', ['éviter de dire les choses directement', 'cuisiner lentement', 'se tromper complètement'], 0, 'Le contraire d’aller droit au but. EN: beat about the bush.', 'a10-trier'),
        mc('Elle parle quatre langues : elle a…', ['plusieurs cordes à son arc', 'du pain sur la planche', 'la tête dans les nuages'], 0, 'Plusieurs talents. EN: more than one string.', 'a10-cartes'),
        tI('Le train a une heure de retard : je prends ___ mal en patience.', fr(E(1735)), 'Mon mal : le possessif suit le sujet. EN: mon.', 'a10-piege', ['mon']),
        tI('Elle parle trois langues et sait coder : elle a plusieurs cordes à son ___.', fr(E(1731)), 'À son arc. EN: arc.', 'a10-cartes', ['arc']),
        eS('Quand la directrice a annoncé la fusion, toute l’équipe a tombé des nues.', fr(E(1739)), 'Tomber se conjugue avec être : est tombée. EN: est tombée.', 'a10-cartes'),
        eS('Arrête de tourner autour du buisson et dis-moi ce qui ne va pas.', fr(E(1738)), 'Autour du pot. EN: le pot.', 'a10-piege'),
        lC('Écoute. Qu’a fait la personne ?', fr(E(1729)), ['deux choses en un seul trajet', 'elle a perdu son colis', 'elle a attendu à la banque'], 0, 'D’une pierre deux coups. EN: two in one.', 'a10-trier'),
      ],
    },
    {
      id: 'r10-negocier', label: 'Négocier', targets: ['negociation-malmenee'],
      questions: [
        mc('Mettre de l’eau dans son vin, c’est…', ['modérer ses exigences', 'devenir plus exigeant', 'boire moins'], 0, 'L’eau adoucit. EN: to soften.', 'a11-erreurs'),
        mc('A storm in a teacup :', ['une tempête dans un verre d’eau', 'une tempête dans une tasse de thé', 'un coup d’épée dans l’eau'], 0, 'Le verre d’eau. EN: the glass of water.', 'a11-erreurs'),
        mc('Voter sans devis ne servirait à rien : ce serait…', ['un coup d’épée dans l’eau', 'une tempête dans un verre d’eau', 'la goutte d’eau qui fait déborder le vase'], 0, 'Une action inutile. EN: a wasted effort.', 'a11-cartes'),
        mc('Pour ne pas aggraver un conflit, il ne faut pas…', ['jeter de l’huile sur le feu', 'couper la poire en deux', 'mettre de l’eau dans son vin'], 0, 'L’huile ranime le feu. EN: add fuel.', 'a11-trier'),
        tI('Je veux bien mettre de l’eau dans ___ vin.', 'Je veux bien mettre de l’eau dans mon vin.', 'Mon vin : le possessif suit le sujet. EN: mon.', 'a11-atoi', ['mon']),
        tI('Nous sommes tous dans le même ___ : l’immeuble est à nous tous.', fr(E(1745)), 'Le même bateau. EN: bateau.', 'a11-cartes', ['bateau']),
        eS('Toute l’équipe a perdu sa prime, mais elle a tiré son épingle de jeu.', fr(E(1756)), 'Du jeu. EN: du jeu.', 'a11-erreurs'),
        lC('Écoute. Que propose la présidente ?', fr(E(1747)), ['un compromis', 'un vote contre', 'de tout refaire'], 0, 'La moitié chacun. EN: a compromise.', 'a11-ecoute'),
      ],
    },
    {
      id: 'r11-examen', label: 'Comme à l’examen', targets: ['consigne-examen'],
      questions: [
        mc('Format DELF B2, compréhension écrite. D’après la chronique de Nadia, les proverbes servent surtout à…', ['ouvrir une discussion', 'prouver qu’on a raison', 'remplacer les arguments'], 0, 'Un conseil, pas une décision. EN: to open a discussion.', 'a1-lecture'),
        mc('Format DELF B2, compréhension écrite. D’après la page sur La Fontaine, pourquoi faut-il citer une morale exactement ?', ['c’est une citation, qui a un auteur', 'c’est plus poli', 'personne ne la connaît'], 0, 'Un proverbe s’arrange ; une citation se respecte. EN: it has an author.', 'a7-lecture'),
        mc('Format DELF B2, compréhension écrite. Dans la chronique modèle, que reproche l’auteur au proverbe ?', ['il oublie qu’on peut être absent sans être muet', 'il est trop ancien', 'il est faux dans tous les cas'], 0, 'Pourtant, il oublie une chose essentielle. EN: its blind spot.', 'a12-lecture'),
        mc('Format TCF. Choisissez la bonne réponse : « Chat … craint l’eau froide. »', ['échaudé', 'échaudée', 'échauder', 'échaudant'], 0, 'Participe passé masculin, accordé avec chat. EN: échaudé.', 'a4-cartes'),
        mc('Format TCF. Choisissez la bonne réponse : « Il ne faut pas vendre la peau de l’ours avant de l’… tué. »', ['avoir', 'être', 'a', 'avait'], 0, `L’infinitif passé, vu dans ${INFINITIVES_REF}. EN: avoir.`, 'a3-erreurs'),
        tI('Format DELF B2, production écrite. ___, le proverbe contient une part de vérité. (admittedly)', fr(E(1760)), 'Certes : on accorde un point avant de le nuancer. EN: certes.', 'a12-usages', ['certes', 'Il est vrai que le proverbe contient une part de vérité.']),
        eS('Pour ma part, je ne crois pas qu’un proverbe suffit à trancher.', fr(E(1762)), `Je ne crois pas que + subjonctif : suffise, comme dans ${MODES_REF}. EN: suffise.`, 'a12-usages', [], 'Format DELF B2, correction. Une forme ne va pas : écris la phrase correcte. EN: One form is wrong; write the sentence correctly.'),
        lC('Format DELF B2, compréhension orale. Écoute. Quel est le rôle de cette phrase dans une chronique ?', fr(E(1763)), ['conclure', 'ouvrir le texte', 'donner un exemple'], 0, 'Bref annonce la conclusion. EN: to conclude.', 'a12-plan'),
      ],
    },
    {
      id: 'r12-rappel', label: 'Le B1 et le B2 en renfort', targets: ['rappel-structures'],
      questions: [
        mc(`${Cap(GERONDIF_REF)} : « C’est en … qu’on devient forgeron. »`, ['forgeant', 'forger', 'forgé'], 0, `« ${B212_REFRAME} » EN: ${B212_REFRAME_EN}`, 'a3-trier'),
        tI(`${Cap(INFINITIVES_REF)} : un infinitif sujet. ___ forme la jeunesse. (voyager)`, fr('fr.b2.faits-et-procedures.1371'), `« ${B214_REFRAME} » EN: ${B214_REFRAME_EN}`, 'a3-erreurs', ['voyager']),
        mc(`${Cap(CONCESSION_REF)} : « … , le proverbe a raison sur un point ; pourtant, il oublie l’essentiel. »`, ['Certes', 'Parce que', 'Donc'], 0, `« ${B216_REFRAME} » EN: ${B216_REFRAME_EN}`, 'a8-tableau'),
        eS('Je ne crois pas que ce proverbe est toujours vrai.', 'Je ne crois pas que ce proverbe soit toujours vrai.', `${Cap(MODES_REF)} : « ${B206_REFRAME} » EN: ${B206_REFRAME_EN}`, 'a12-usages'),
        mc(`${Cap(ANIMAUX_REF)} : « ${B128_REFRAME} » Couper la poire en deux veut dire…`, ['faire un compromis', 'partager un fruit', 'se disputer'], 0, `« ${B128_REFRAME} » EN: ${B128_REFRAME_EN}`, 'a11-trier'),
        mc(`${Cap(REGISTRES_REF)} : « Je connais la chanson » est…`, ['familier', 'soutenu', 'neutre et formel'], 0, `« ${B125_REFRAME} » EN: ${B125_REFRAME_EN}`, 'a8-cartes'),
        mc(`${Cap(ARGUMENTATION_REF)} : dans une chronique, après le proverbe, il faut…`, ['prendre position et le prouver', 'citer un deuxième proverbe comme preuve', 'raconter sa journée'], 0, `« ${B223_REFRAME} » EN: ${B223_REFRAME_EN}`, 'a12-plan'),
        lC(`Écoute. ${Cap(PASSE_SIMPLE_REF)} : à quel temps sont les verbes ?`, fr('fr.b2.litterature.1020'), ['au passé simple', 'au passé composé', 'au présent'], 0, `« ${B208_REFRAME} » EN: ${B208_REFRAME_EN}`, 'a7-trier'),
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
    { front: 'a rolling stone gathers no moss', back: 'pierre qui roule n’amasse pas mousse', say: fr(E(1612)) },
    { front: 'Rome was not built in a day', back: 'Paris ne s’est pas fait en un jour', say: fr(E(1629)) },
    { front: 'once bitten, twice shy', back: 'chat échaudé craint l’eau froide', say: fr(E(1645)) },
    { front: 'clothes do not make the man', back: 'l’habit ne fait pas le moine', say: fr(E(1657)) },
    { front: 'no smoke without fire', back: 'il n’y a pas de fumée sans feu', say: fr(E(1669)) },
    { front: 'there is no point running; set off in time', back: 'rien ne sert de courir ; il faut partir à point', say: fr(E(1683)) },
    { front: 'kill two birds with one stone', back: 'faire d’une pierre deux coups', say: fr(E(1729)) },
    { front: 'to grin and bear it', back: 'prendre son mal en patience', say: fr(E(1735)) },
    { front: 'to soften your position', back: 'mettre de l’eau dans son vin', say: fr(E(1755)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Le B2 est bouclé',
  body: `${REFRAME} Tu reconnais un proverbe à sa forme, tu le cites intact, entier ou à moitié, tu le détournes pour faire sourire et tu le discutes au lieu d’en faire une preuve. Tu cites La Fontaine mot pour mot, tu trouves le proverbe français derrière l’anglais, et tu places des expressions figées en conjuguant leur verbe. C’était la dernière leçon du B2 : trente-quatre leçons, et, comme on dit, petit à petit, l’oiseau a fait son nid. Les épreuves blanches du DELF B2 t’attendent dans l’Examinateur. EN: That was the last B2 lesson; the DELF B2 mock papers are waiting in the Examiner.`,
  points: [
    'Un proverbe se cite ; une expression figée se conjugue.',
    'Un proverbe ouvre la discussion ; il ne la ferme pas.',
    'Une morale de La Fontaine se cite mot pour mot.',
    'Un proverbe se traduit par un proverbe, sinon par son sens.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proverbe', 'figement'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'À toi d’écrire',
    opener: {
      line: 'Une chronique, un proverbe à l’épreuve et la dernière page du B2 : à toi d’ouvrir sur un proverbe, de le discuter, et de conclure. EN: A column, a proverb put to the test and the last page of B2: your turn to open with a proverb, discuss it, and conclude.',
      imageRef: 'lessons/proverbes/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit une chronique qui s’ouvre sur un proverbe au format du DELF B2, défendu ton avis à la radio et passé le dernier quiz du B2 : quatre-vingt-seize questions, douze rounds. Le B2 est bouclé. EN: You wrote a column that opens on a proverb in DELF B2 format, defended your view on the radio and sat the last B2 quiz: ninety-six questions, twelve rounds. B2 is complete.',
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-prudence', 'a12-quiz/r6-lafontaine', 'a12-quiz/r9-travail'],
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
  sheet('sheet-forme', 'Proverbe, expression, locution', ['trois familles', 'la forme d’un proverbe'], [
    teach('sheet-forme-teach', 'Trois sortes de mots figés',
      'Un proverbe est une phrase anonyme qui prétend dire une vérité générale : au présent, souvent sans article, souvent en deux moitiés qui riment ; tu le cites, entier ou à moitié. Une expression figée garde son image, mais elle entre dans ta phrase : son verbe se conjugue et son possessif suit le sujet. Une locution est un groupe figé qui joue le rôle d’un seul mot (tout de suite, à cause de, bien que), sans image à comprendre. EN: A proverb is quoted; a fixed expression is conjugated; a locution works as one word.'),
    table('sheet-forme-table', 'Les moules du proverbe', ['Forme', 'Ce qu’elle fait', 'Exemple'], [
      ['nom sans article', 'le sujet vaut pour tous', 'Pierre qui roule n’amasse pas mousse.'],
      ['qui…, verbe au singulier', 'qui = celui qui', 'Qui va lentement va sûrement.'],
      ['il ne faut pas…', 'un conseil pour tous', 'Il ne faut pas mettre tous ses œufs dans le même panier.'],
      ['mieux vaut… que…', 'une préférence', 'Mieux vaut prévenir que guérir.'],
      ['tel…, tel…', 'deux moitiés sans verbe', 'Tel père, tel fils. Telle mère, telle fille.'],
      ['nom, nom', 'sans verbe', 'Après la pluie, le beau temps.'],
      ['pas de… sans…', 'une cause cachée', 'Il n’y a pas de fumée sans feu.'],
      ['infinitif, c’est infinitif', 'une équivalence', 'Vouloir, c’est pouvoir.'],
      ['le présent', 'vrai à toute époque', 'Chat échaudé craint l’eau froide.'],
    ]),
  ]),
  sheet('sheet-proverbes', 'Les proverbes, thème par thème', ['la patience', 'la prudence', 'les gens', 'les conséquences', 'l’anglais'], [
    teach('sheet-proverbes-teach', 'Le sens, puis l’anglais',
      'Chaque proverbe a une image et un sens. L’anglais a parfois la même image (tel père, tel fils), souvent une autre (la peau de l’ours, le chat échaudé), parfois aucun proverbe figé : alors on traduit le sens. Les variantes admises sont notées : Paris ou Rome, fait ou faite, il ne faut pas ou jamais dire. EN: Image, meaning, and the English equivalent, which is often a different image.'),
    table('sheet-proverbes-table', 'Vingt proverbes', ['Proverbe', 'Sens', 'Anglais'], [
      ['Petit à petit, l’oiseau fait son nid.', 'le résultat vient peu à peu', 'little by little'],
      ['Paris (Rome) ne s’est pas fait(e) en un jour.', 'une grande œuvre prend du temps', 'Rome was not built in a day'],
      ['Qui va lentement va sûrement.', 'sans se presser, on arrive', 'slow and steady wins the race'],
      ['Il ne faut pas vendre la peau de l’ours avant de l’avoir tué.', 'ne fête pas trop tôt', 'don’t count your chickens'],
      ['Vouloir, c’est pouvoir.', 'la volonté trouve le moyen', 'where there’s a will, there’s a way'],
      ['Qui ne tente rien n’a rien.', 'il faut oser', 'nothing ventured, nothing gained'],
      ['Mieux vaut prévenir que guérir.', 'agir avant le problème', 'better safe than sorry'],
      ['Chat échaudé craint l’eau froide.', 'une mauvaise expérience rend prudent', 'once bitten, twice shy'],
      ['Il ne faut jamais dire : Fontaine, je ne boirai pas de ton eau.', 'ne jure pas que tu ne le feras jamais', 'never say never'],
      ['Il ne faut pas mettre tous ses œufs dans le même panier.', 'répartir les risques', 'don’t put all your eggs in one basket'],
      ['Qui se ressemble s’assemble.', 'les semblables se retrouvent', 'birds of a feather flock together'],
      ['Tel père, tel fils.', 'le fils ressemble au père', 'like father, like son'],
      ['L’habit ne fait pas le moine.', 'ne juge pas sur l’apparence', 'clothes do not make the man'],
      ['Les absents ont toujours tort.', 'qui n’est pas là ne se défend pas', '(pas d’équivalent figé)'],
      ['Qui sème le vent récolte la tempête.', 'qui provoque subit pire', 'sow the wind, reap the whirlwind'],
      ['On récolte ce que l’on sème.', 'tes actes te reviennent', 'you reap what you sow'],
      ['Il n’y a pas de fumée sans feu.', 'une rumeur a une cause (pas une preuve)', 'no smoke without fire'],
      ['Après la pluie, le beau temps.', 'le calme revient', 'every cloud has a silver lining'],
      ['Pierre qui roule n’amasse pas mousse.', 'qui change sans cesse ne s’enrichit pas', 'a rolling stone gathers no moss'],
      ['(when in Rome…)', 'il faut s’adapter aux usages du pays', '(pas de proverbe figé en français)'],
    ]),
  ]),
  sheet('sheet-lafontaine', 'La Fontaine', ['quatre morales', 'les fables'], [
    teach('sheet-lafontaine-teach', 'Une morale est une citation',
      'Jean de La Fontaine (1621-1695) a publié ses Fables de 1668 à 1694 ; beaucoup reprennent des histoires d’Ésope. Leurs morales sont devenues proverbiales, mais elles ont un auteur : on les cite mot pour mot, ou on dit clairement qu’on les détourne. La Fontaine décrit souvent le monde tel qu’il est, sans l’approuver : la raison du plus fort est un constat, pas un conseil. EN: A moral has an author: quote it exactly.'),
    table('sheet-lafontaine-table', 'Quatre morales', ['Morale', 'Fable', 'Sens'], [
      ['La raison du plus fort est toujours la meilleure.', 'Le Loup et l’Agneau (livre I)', 'le plus fort impose sa loi (constat)'],
      ['Rien ne sert de courir ; il faut partir à point.', 'Le Lièvre et la Tortue (livre VI)', 'partir à temps vaut mieux que courir'],
      ['On a souvent besoin d’un plus petit que soi.', 'Le Lion et le Rat (livre II)', 'le plus faible peut sauver le plus fort'],
      ['Apprenez que tout flatteur vit aux dépens de celui qui l’écoute.', 'Le Corbeau et le Renard (livre I)', 'le flatteur profite de qui l’écoute'],
    ]),
  ]),
  sheet('sheet-figees', 'Les expressions figées de B2', ['au travail', 'pour négocier', 'le verbe et le possessif'], [
    teach('sheet-figees-teach', 'L’image reste, le verbe bouge',
      'Une expression figée garde ses mots et ses petits mots (tirer son épingle du jeu, tomber des nues), mais son verbe se conjugue et son possessif suit le sujet : je prends mon mal en patience, nous avons plusieurs cordes à notre arc. L’anglais a souvent une autre image : ne la traduis pas. EN: Keep the words, conjugate the verb, match the possessive.'),
    table('sheet-figees-table', 'Treize expressions', ['Expression', 'Sens', 'Exemple'], [
      ['faire d’une pierre deux coups', 'atteindre deux buts d’un coup', 'J’ai fait d’une pierre deux coups.'],
      ['avoir plusieurs cordes à son arc', 'savoir faire plusieurs choses', 'Elle a plusieurs cordes à son arc.'],
      ['ne pas y aller par quatre chemins', 'dire les choses directement', 'Je n’y vais pas par quatre chemins.'],
      ['prendre son mal en patience', 'supporter en attendant', 'Je prends mon mal en patience.'],
      ['se noyer dans un verre d’eau', 'être dépassé par un rien', 'Ne te noie pas dans un verre d’eau.'],
      ['tomber des nues', 'être très surpris', 'Toute l’équipe est tombée des nues.'],
      ['tourner autour du pot', 'éviter de dire les choses', 'Arrête de tourner autour du pot.'],
      ['mettre de l’eau dans son vin', 'modérer ses exigences', 'Il a mis de l’eau dans son vin.'],
      ['jeter de l’huile sur le feu', 'aggraver une tension', 'Ne jette pas d’huile sur le feu.'],
      ['être dans le même bateau', 'partager la même situation', 'Nous sommes tous dans le même bateau.'],
      ['un coup d’épée dans l’eau', 'une action inutile', 'Ce serait un coup d’épée dans l’eau.'],
      ['une tempête dans un verre d’eau', 'beaucoup de bruit pour rien', 'C’est une tempête dans un verre d’eau.'],
      ['tirer son épingle du jeu', 's’en sortir adroitement, sans perte','Elle a tiré son épingle du jeu.'],
    ]),
  ]),
  sheet('sheet-ecrire', 'Citer, discuter, écrire', ['annoncer un proverbe', 'les registres', 'le plan de la chronique'], [
    teach('sheet-ecrire-teach', 'Le proverbe ouvre, tes arguments prouvent',
      'On annonce un proverbe (comme on dit, comme dit le proverbe, tu connais le proverbe), on le coupe à moitié, on le détourne pour faire sourire. À l’écrit, il sert d’accroche ou de conclusion, jamais de preuve : on l’ouvre (si l’on en croit le proverbe), on lui accorde ce qu’il a de vrai (certes), on montre sa limite (pourtant), on prend position (pour ma part, je ne crois pas que + subjonctif) et on conclut (bref). EN: Announce, cut or twist in speech; in writing, open, concede, qualify, conclude.'),
    table('sheet-ecrire-table', 'Les formules et leur registre', ['Formule', 'Registre', 'Usage'], [
      ['je connais la chanson', 'familier', 'couper court, un peu las'],
      ['comme dirait ma grand-mère', 'courant', 'citer avec un sourire'],
      ['comme on dit', 'courant', 'annoncer, partout'],
      ['comme dit le proverbe', 'courant', 'annoncer en le nommant'],
      ['tu connais le proverbe', 'courant', 'laisser l’autre finir'],
      ['si l’on en croit le proverbe', 'soutenu', 'ouvrir une chronique'],
      ['le proverbe a beau dire', 'courant', 'le contredire'],
      ['certes…, encore faut-il…', 'soutenu', 'accorder, puis nuancer'],
      ['contrairement au proverbe', 'courant', 'montrer une exception'],
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
  { id: 'd-forme', title: 'Proverbe ou expression', format: 'sort' as const, coach: 'Deux piles : ce qu’on cite, et ce qu’on conjugue. EN: quoted, or conjugated.', buckets: ['le proverbe', 'l’expression figée'], items: [E(1612), E(1617), E(1655), E(1728), E(1734), E(1751)], audio: AUDIO },
  { id: 'd-patience', title: 'Les proverbes de la patience', format: 'mcq' as const, coach: 'L’image d’abord, le sens ensuite. EN: image, then meaning.', q: 'Rome was not built in a day :', opts: ['Paris ne s’est pas fait en un jour.', 'Paris n’a pas été construit en un jour.'], correct: 0, why: 'Se faire, pas construire. EN: se faire.', items: [E(1627), E(1629), E(1617), E(1634), E(1633), E(1636)], audio: AUDIO },
  { id: 'd-prudence', title: 'Les proverbes de la prudence', format: 'flashcard' as const, coach: 'Dis chaque proverbe comme un conseil à un ami. EN: say each one as advice.', items: [E(1642), E(1645), E(1647), E(1650), E(1652), E(1653)], audio: AUDIO },
  { id: 'd-gens', title: 'Les proverbes sur les gens', format: 'mcq' as const, coach: 'Adapte le proverbe à la personne. EN: adapt it to the person.', q: 'Pour une mère et sa fille :', opts: ['Telle mère, telle fille.', 'Tel père, tel fils.'], correct: 0, why: 'Tel s’accorde avec le nom. EN: telle.', items: [E(1654), E(1655), E(1656), E(1657), E(1658), E(1661)], audio: AUDIO },
  { id: 'd-consequence', title: 'Causes et conséquences', format: 'flashcard' as const, coach: 'Lis chaque proverbe et dis ce qu’il annonce : une conséquence, une cause, une consolation. EN: consequence, cause or comfort.', items: [E(1667), E(1668), E(1669), E(1670), E(1679), E(1681)], audio: AUDIO },
  { id: 'd-lafontaine', title: 'Les morales, mot pour mot', format: 'flashcard' as const, coach: 'Dis chaque morale exactement, puis nomme la fable. EN: say it exactly, then name the fable.', items: [E(1682), E(1683), E(1684), E(1685), E(1690), E(1693)], audio: AUDIO },
  { id: 'd-conversation', title: 'Annoncer au bon registre', format: 'mcq' as const, coach: 'À table, au bureau, dans une chronique : l’annonce change. EN: the announcement follows the setting.', q: 'À table, pour citer un proverbe :', opts: ['comme on dit', 'si l’on en croit le proverbe'], correct: 0, why: 'Courant, pour la conversation. EN: courant.', items: [E(1607), E(1608), E(1706), E(1707), E(1708), E(1709)], audio: AUDIO },
  { id: 'd-traduire', title: 'Le proverbe qui existe', format: 'mcq' as const, coach: 'Cherche le proverbe français avant de traduire. EN: find the French proverb first.', q: 'Once bitten, twice shy :', opts: ['Chat échaudé craint l’eau froide.', 'Une fois mordu, deux fois timide.'], correct: 0, why: 'Le proverbe français existe. EN: the scalded cat.', items: [E(1714), E(1716), E(1719), E(1720), E(1725), E(1726)], audio: AUDIO },
  { id: 'd-travail', title: 'Les expressions du bureau', format: 'flashcard' as const, coach: 'Dis chaque phrase en gardant les petits mots : du, des, mon. EN: keep the small words.', items: [E(1729), E(1731), E(1733), E(1735), E(1737), E(1739)], audio: AUDIO },
  { id: 'd-negocier', title: 'Négocier avec une image', format: 'flashcard' as const, coach: 'Dis chaque phrase comme en réunion, calmement. EN: say each one calmly, as in a meeting.', items: [E(1745), E(1746), E(1748), E(1755), E(1756), E(1757)], audio: AUDIO },
  { id: 'd-examen', title: 'La chronique, phrase par phrase', format: 'flashcard' as const, coach: 'Dis chaque phrase à sa place : ouvrir, accorder, nuancer, prendre position, conclure. EN: each line in its place.', items: [E(1759), E(1760), E(1761), E(1762), E(1763), E(1711)], audio: AUDIO },
  { id: 'd-rappel', title: 'Les modes sous le proverbe', format: 'mcq' as const, coach: 'Je ne crois pas que + subjonctif. EN: subjunctive after je ne crois pas que.', q: 'Je ne crois pas qu’un proverbe … à trancher.', opts: ['suffise', 'suffit'], correct: 0, why: 'Subjonctif. EN: suffise.', items: [E(1762), E(1711), E(1710), E(1729), E(1684), 'fr.b2.faits-et-procedures.1371'], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'forme-abimee', description: 'Damages a proverb when quoting it: adds an article, changes the tense, puts a plural verb after qui or adds a verb to a verbless proverb.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a12-mission'], drill: 'd-forme', retest: 'd-forme' },
  { id: 'patience-confuse', description: 'Calques the English patience proverbs (Rome n’a pas été construite, petit par petit) or loses the past infinitive of the bear’s skin.', detectOn: ['a3-trier', 'a3-erreurs', 'a3-check'], drill: 'd-patience', retest: 'd-patience' },
  { id: 'prudence-calquee', description: 'Translates the caution proverbs word for word (mieux vaut être sûr que désolé, une fois mordu) or keeps ses œufs when speaking to someone.', detectOn: ['a4-trier', 'a4-piege', 'a4-check', 'a12-mission'], drill: 'd-prudence', retest: 'd-prudence' },
  { id: 'gens-maljuges', description: 'Misapplies a proverb about people, keeps it in the masculine for women, or damages it (les vêtements, le tort).', detectOn: ['a5-choisir', 'a5-erreurs', 'a5-check', 'a12-mission'], drill: 'd-gens', retest: 'd-gens' },
  { id: 'consequence-calquee', description: 'Changes a word in a consequence proverb (l’orage, le soleil, le verre) or quotes pas de fumée sans feu as proof.', detectOn: ['a6-trier', 'a6-piege', 'a6-check'], drill: 'd-consequence', retest: 'd-consequence' },
  { id: 'morale-deformee', description: 'Misquotes a La Fontaine moral (à l’heure, que nous, celui qu’il écoute) or reads la raison du plus fort as approval.', detectOn: ['a7-trier', 'a7-erreurs', 'a7-check', 'a12-mission'], drill: 'd-lafontaine', retest: 'd-lafontaine' },
  { id: 'proverbe-mal-place', description: 'Uses a proverb as proof, announces it in the wrong register, or blends two proverbs.', detectOn: ['a8-atoi', 'a8-erreurs', 'a8-check', 'a12-mission'], drill: 'd-conversation', retest: 'd-conversation' },
  { id: 'calque-proverbe', description: 'Translates an English proverb word for word instead of finding the French one, or forces a proverb where none exists (when in Rome).', detectOn: ['a9-trier', 'a9-piege', 'a9-check', 'a12-mission'], drill: 'd-traduire', retest: 'd-traduire' },
  { id: 'expression-figee-abimee', description: 'Breaks a fixed expression: the English image (deux oiseaux, le buisson), the wrong auxiliary, the wrong possessive.', detectOn: ['a10-trier', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-travail', retest: 'd-travail' },
  { id: 'negociation-malmenee', description: 'Reverses the meaning of a negotiation expression (mettre de l’eau dans son vin) or changes its words (navire, tasse de thé, de jeu).', detectOn: ['a11-trier', 'a11-erreurs', 'a11-check'], drill: 'd-negocier', retest: 'd-negocier' },
  { id: 'consigne-examen', description: 'Misses what the B2 exam tasks ask: reads a column for its topic instead of its stance, or writes a column that states a proverb without discussing it.', detectOn: ['a12-lecture', 'a12-plan', 'a12-mission'], drill: 'd-examen', retest: 'd-examen' },
  { id: 'rappel-structures', description: 'Misforms the earlier structures the lesson leans on (the subjunctive after je ne crois pas que, the past infinitive, the gérondif, certes).', detectOn: ['a8-tableau', 'a12-usages', 'a12-mission'], drill: 'd-rappel', retest: 'd-rappel' },
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-34-[a-z0-9-]+/g) ?? [])];

const PIEGE_BRIEF = 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the damaged or calqued versions in promptSound are never spoken.';

const REC_DESC: Record<string, string> = {
  'rec-b2-34-chronique': 'Nadia’s column (act 1), ONE VOICE, one take, a Québec woman in her forties reading her own column: warm, a little wry. The opening « Qui ne tente rien… » trails off on purpose; the quoted proverbs are said slightly slower, as quotations.',
  'rec-b2-34-lundi-ecoute': 'REQUIRED FOR THE EAR MISSION (act 2): eleven lines, ONE TAKE, ONE VOICE, in authored order, a radio host’s « proverbe du lundi » (France or Québec French, a man in his fifties, a morning-radio voice). The proverbs are said with a small pause before them, as a host quoting. Natural speed.',
  'rec-b2-34-piege-forme': PIEGE_BRIEF,
  'rec-b2-34-boulangerie': 'The bakery story (act 3), THREE VOICES: a narrator; Awa (Québec French, a woman in her thirties, tired but determined); her uncle Moussa (Senegalese French welcome, a man in his sixties, calm, amused). Moussa says every proverb as if it were obvious.',
  'rec-b2-34-texte-a3': 'Awa’s post (act 3), ONE VOICE, one take, Awa reading her own post: proud, warm, a smile on « paraît-il ».',
  'rec-b2-34-prudence-ecoute': 'REQUIRED FOR THE EAR MISSION (act 4): ten lines, ONE TAKE, in authored order, a phone call. TWO VOICES: Julien (Belgian or France French, a man in his twenties, excited) speaks lines 1, 3, 5, 7 and 10; his sister Léa (a woman in her thirties, calm, a little ironic) speaks lines 2, 4, 6, 8 and 9. Natural speed, a phone feel.',
  'rec-b2-34-piege-prudence': PIEGE_BRIEF,
  'rec-b2-34-texte-a4': 'The money column (act 4), ONE VOICE, one take, a radio columnist: clear, brisk, friendly. The last sentence (the disclaimer) is read plainly, not rushed.',
  'rec-b2-34-courrier': 'The advice column (act 5), TWO VOICES, one take: Clara’s letter (a Belgian woman in her twenties, a little anxious), then Solange’s reply (a woman in her sixties, warm, direct). Names at the end of each part are read.',
  'rec-b2-34-texte-a5': 'The blog post (act 5), ONE VOICE, one take, a man in his thirties (a musician), relaxed and self-mocking.',
  'rec-b2-34-balcon': 'The balcony story (act 6), THREE VOICES: a narrator; Nathalie (Québec French, a woman in her forties, annoyed then embarrassed); Sonia (Québec French, a friend, gently teasing). Sonia’s proverbs land like punchlines.',
  'rec-b2-34-piege-consequence': PIEGE_BRIEF,
  'rec-b2-34-texte-a6': 'Nathalie’s note (act 6), ONE VOICE, one take, Nathalie reading her note before slipping it under the door: sincere, a little formal.',
  'rec-b2-34-lafontaine': 'The magazine page on La Fontaine (act 7), ONE VOICE, one take, a France French voice, cultured but not stiff. THE QUOTATIONS ARE READ EXACTLY, with the pause of the semicolon in « Rien ne sert de courir ; il faut partir à point ».',
  'rec-b2-34-texte-a7': 'The teacher’s note (act 7), ONE VOICE, one take, a teacher (France or Swiss French) telling the class discussion with amusement.',
  'rec-b2-34-diner-ecoute': 'REQUIRED FOR THE EAR MISSION (act 8): nine lines, ONE TAKE, in authored order, a family dinner at NATURAL SPEED, small overlaps allowed. TWO VOICES: the mother (France French, a woman in her sixties, affectionate) speaks lines 1, 3, 4, 6 and 8; her son Hugo (a man in his thirties, weary, joking) speaks lines 2, 5, 7 and 9. The half proverb in line 4 trails off; line 7 is the twist, said deadpan.',
  'rec-b2-34-texte-a8': 'The residents’ newsletter (act 8), ONE VOICE, one take, the association’s president (Québec French, a woman in her fifties): cheerful, firm on « poliment mais fermement ».',
  'rec-b2-34-studio': 'The subtitling story (act 9), THREE VOICES: a narrator; Tom (Ottawa, a bilingual man in his twenties); Julie (Québec French, a translator in her forties, quick and sure). No English is read in this recording.',
  'rec-b2-34-piege-calques': PIEGE_BRIEF,
  'rec-b2-34-texte-a9': 'The subtitler’s note (act 9), ONE VOICE, one take, Julie reading her note: precise, calm. « when in Rome » is said in English, briefly, as a quotation.',
  'rec-b2-34-courriel': 'The team lead’s email (act 10), ONE VOICE, one take, Sophie (Swiss French, a woman in her forties): direct, reassuring, never alarmed. The subject line is read as a heading.',
  'rec-b2-34-piege-travail': PIEGE_BRIEF,
  'rec-b2-34-texte-a10': 'Léa’s reply (act 10), ONE VOICE, one take, Léa (a woman in her thirties): friendly, a little dry humour.',
  'rec-b2-34-assemblee-ecoute': 'REQUIRED FOR THE EAR MISSION (act 11): eight lines, ONE TAKE, in authored order, a residents’ meeting in Lyon at NATURAL SPEED. THREE VOICES: the president Mme Dubois (lines 1, 3, 5, 8, calm and firm), Mme Petit (lines 2 and 6, cautious), M. Blanc (lines 4 and 7, grumbling). France French. Small overlaps allowed.',
  'rec-b2-34-texte-a11': 'The minutes (act 11), ONE VOICE, one take, a secretary reading the minutes: neutral, even, a short pause at each full stop. « 12 mai » is read « douze mai ».',
  'rec-b2-34-modele': 'The model column (act 12), ONE VOICE, one take, a columnist (France or Québec French, in their forties): measured, the proverb at the opening said as a quotation, the twisted proverb at the end with a small smile.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 34',
  intro: 'At B1 you learned idioms of the body, of animals and of colours. This last B2 lesson goes further. You learn what a proverb is (a general truth, in the present, often with no article) and how it differs from a fixed expression, which you conjugate, and a locution. You meet twenty frequent proverbs by theme, four La Fontaine morals quoted word for word, and a set of B2 fixed expressions for work and negotiation. You learn how proverbs are really used: announced, cut in half, twisted for a laugh, used as a hook but never as proof, in the right register. You find the English equivalent, which is often a different image, and say so when there is none. The task: a 200 to 250 word opinion column that opens with a proverb and discusses whether it holds, in DELF B2 format. Then B2 is complete.',
  skill: 'PE',
  grammarAssumed: [CORPS_UNIT, ANIMAUX_UNIT, COULEURS_UNIT, REGISTRES_UNIT, GERONDIF_UNIT, INFINITIVES_UNIT, CONCESSION_UNIT, ARGUMENTATION_UNIT],
  grammarIntroduced: [
    'Proverb, fixed expression and locution: a proverb is quoted (whole or by half), a fixed expression is conjugated inside the sentence, a locution works as one word',
    'The form of French proverbs: nouns without articles, the present of general truth, qui meaning celui qui with a singular verb, verbless proverbs (tel père, tel fils), rhyming halves',
    'Twenty frequent proverbs by theme (patience, prudence, people, consequences, daring), with their accepted variants (Paris or Rome, fait or faite)',
    'La Fontaine as a source: four morals quoted word for word, the fables behind them, the moral as a description rather than an approval',
    'Using proverbs in speech: announcing them (comme on dit, tu connais le proverbe, si l’on en croit le proverbe), quoting by half, twisting, discussing (certes… encore faut-il, avoir beau dire), and their register',
    'Translating proverbs: same image, another image, no fixed equivalent (when in Rome), and the English calques to avoid',
    'B2 fixed expressions of work and negotiation (faire d’une pierre deux coups, avoir plusieurs cordes à son arc, ne pas y aller par quatre chemins, prendre son mal en patience, se noyer dans un verre d’eau, tomber des nues, mettre de l’eau dans son vin, jeter de l’huile sur le feu, un coup d’épée dans l’eau), with the verb conjugated and the possessive matched to the subject',
    'A 200 to 250 word opinion column that opens with a proverb and discusses whether it holds, in DELF B2 PE format',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B1, tu as appris les expressions du corps, des animaux et des couleurs. Cette dernière leçon du B2 va plus loin : ce qu’est un proverbe, et ce qui le distingue d’une expression figée ; vingt proverbes par thème ; quatre morales de La Fontaine, mot pour mot ; des expressions figées pour le travail et la négociation. Tu apprends à annoncer un proverbe, à le couper, à le détourner, à le discuter et à le traduire. À la fin, tu écris une chronique qui s’ouvre sur un proverbe, au format du DELF B2, et le B2 est bouclé.',
    minutes: 160,
    difficulty: 4,
    glyph: 'adage',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: PROVERBES_TERMS,
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
void [ex, free, IMPERS_REF, LITTERATURE_REF, B211_REFRAME, B211_REFRAME_EN, TEXTE_A3];
