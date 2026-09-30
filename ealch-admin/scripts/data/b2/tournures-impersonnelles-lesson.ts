// b2.20.l1 « Les tournures impersonnelles »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.15 cause-consequence
// and b2.16 concession-avancee), under the B2 rules of B2-BUILD-LOG.md (form,
// meaning, choice, text).
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema, so the lesson validates with it in place (as b2.16 does).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act (B2): meet (scene, story, reading or listening), name
//   (cardDeck, tapTable, examples), build (groupDrill, gated), choose (a
//   drill where the MEANING or the DEGREE picks the form), trap (trapDrill
//   stepped or commonErrors), then from act 3 on the form INSIDE A TEXT of
//   60 to 120 words (complete, rewrite, sort), then the gated act check.
//
//    1  Un il qui ne désigne personne  6   the minutes of a co-owners'
//                                           meeting; the scene's wrong option
//                                           is « il est certain » where the
//                                           engineer said « il se peut »
//    2  Quatre familles, deux modes    7   the map (necessity, probability,
//                                           judgement, distance); recap of
//                                           lessons 15 and 22 in B1, 6 and 22
//                                           in B2
//    3  Il faut, il suffit de          7   the infinitive family: il faut, il
//                                           suffit de, il convient de, il y a
//                                           lieu de, il vaut mieux, il importe
//                                           de; no one in particular vs que
//    4  Il faut que, il importe que    7   necessity graded, the subjunctive;
//                                           il ne faut pas que vs il n'est pas
//                                           nécessaire que
//    5  Probable ou possible           8   the scale: above even odds the
//                                           indicative, below the subjunctive;
//                                           the past on both sides
//    6  La négation et la question     7   denied certainty flips to the
//                                           subjunctive, denied doubt back to
//                                           the indicative; the question
//    7  Il semble, il paraît           7   impression, opinion, hearsay,
//                                           verified fact
//    8  Il est dommage que             7   judgement + subjunctive, the
//                                           subjonctif passé, de or que, il
//                                           est (written) vs c'est (spoken)
//    9  Il a été décidé que            7   impersonal passives in notices;
//                                           the hidden verb picks the mood; il
//                                           est interdit de vs on ne peut pas
//   10  Il manque deux chaises         7   il reste, il manque, il existe, il
//                                           est arrivé: singular agreement; il
//                                           s'agit de; il arrive que
//   11  Du certain au douteux          7   a report conclusion graded claim by
//                                           claim
//   12  Ta note                        11  model, plan, role play, TASK, quiz
//
//   TOTAL 88 missions, 12 acts. Corpus: 191 authored rows (.2000-.2195) in
//   twelve blocks plus 46 reused seed rows, released act by act through
//   `deckTranche`. Quiz: 12 rounds of 8 (one per act 2 to 11, a recycling
//   round citing lessons 15, 16, 18 and 22 in B1 and 5, 6, 14 and 16 in B2,
//   an exam-format round). Chapter artwork:
//   `tournures-impersonnelles-image-prompts.md`, twelve prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (a later lesson may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le il ne désigne personne : ce qui suit dit jusqu'où tu t'engages. »
//   EN: The il points at no one: what follows says how far you commit.
//
//   ONE METAPHOR, LE CURSEUR D'ENGAGEMENT: the empty il is a seat the French
//   sentence needs; the expression after it is a cursor (obligation or
//   suggestion, certainty or guess, judgement, unsigned decision), and the
//   mood follows the cursor. Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the impersonal il as a system of four graded families: the
//           infinitive necessity family (il suffit de, il convient de, il y a
//           lieu de, il importe de, il vaut mieux, il te faut); the
//           subjunctive necessity scale and il ne faut pas que against il
//           n'est pas nécessaire que; the probability scale by even odds,
//           with the past on both sides; the negation flip (il n'est pas
//           certain que, il ne fait aucun doute que, il n'est pas douteux
//           que); the source family (il semble, il me semble, il paraît, il
//           s'avère, il se trouve); judgement + subjunctive with de or que and
//           the il est / c'est register; the impersonal passive in notices
//           (décidé, rappelé, prévu, convenu, constaté + indicative against
//           demandé, exigé + subjunctive; il sera procédé à for recognition);
//           singular agreement of impersonal verbs; il s'agit de with no
//           personal subject; il arrive que; il en va de même.
//   QUOTES  the reframes of lessons 15, 16, 18 and 22 in B1 and 5, 6, 14, 16
//           and 22 in B2, re-exported from their corpus files; rows of those
//           lessons reused BY ID.
//   LEAVES  combined negations to lesson 21 in B2 (named in the roundup);
//           il s'agit de + infinitive stays lesson 14 in B2's; the
//           subjonctif passé form stays lesson 5 in B2's (used, not built).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English still authored on every
//   learner string (an `en` field or a final `EN: `), never on an answer.
//   tu in every instruction; characters use what the situation needs.
//   Every `say` is French. No spaced « ? » or « ! » in any scene or story
//   bubble (rows 2087 and 2088, which end in « ? », are never in a bubble).
//   The scenario uses ’ only and embeds no corpus row. Other lessons cited
//   by trail position in words, never by raw id. Mission answer slots are
//   spread by `spreadMissions()`, the quiz by `spreadSlots()` (no text
//   changes, no `why` names an option position), as b2.16 does.
//   Gate B2-2 spoken-variant decision: the written norm is taught and
//   tested; the indicative after a NEGATED certainty is named as spoken, and
//   every closed item that tests it says « à l'écrit ». MOOD POLICIES
//   (corpus §A.8): the indicative after « il semble que » is never a wrong
//   option and is accepted in every type-in (lesson 15 in B2's policy); the
//   subjunctive after « il est probable que » and after « il ne fait aucun
//   doute que » is never a wrong option; « il arrive que » is never
//   mood-tested; the inverted question is tested for meaning only.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. TWELVE acts and TWELVE quiz rounds: act 1 has no round of its own (as
//      lessons 15 and 16 in B2), so the rounds are acts 2 to 11, recycling,
//      exam.
//   2. « IL N'EST PAS CERTAIN QUE + INDICATIF » is named as spoken, never
//      accepted in a written-norm question, and costs at most one point in
//      the task. The FUTURE indicative there (« il n'est pas certain qu'il
//      viendra ») is found in careful writing; no question offers it. Keep?
//   3. « IL N'EST PAS DOUTEUX QUE » (row 2090) is taught with the indicative
//      as soutenu, for recognition only (flashcard + review, no voiceflash).
//      The literary « il n'est pas douteux qu'il ne vienne » is not taught.
//      Keep, or drop the row?
//   4. « IL A ÉTÉ DÉCIDÉ QUE » is taught with the indicative; décider que +
//      subjunctive (read as an order) exists, so no question ever offers the
//      subjunctive after it as the wrong option (rappeler que and constater
//      que carry the mood tests instead).
//   5. THE TASK offers two topics (the library on Sundays, e-scooters in the
//      city centre), 200 to 250 words, FIVE criteria (tâche 3, cohérence 3,
//      étendue 2, correction 2, registre 2 = 12), as lessons 15 and 16 in
//      B2. Annotation block inside `modelAnswer`.
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
  LECTURE_AG, LECTURE_RAPPORT, LECTURE_MODELE,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A11,
  B115_REFRAME, B115_REFRAME_EN, B116_REFRAME, B116_REFRAME_EN, B118_REFRAME, B118_REFRAME_EN,
  B122_REFRAME, B122_REFRAME_EN, B205_REFRAME, B205_REFRAME_EN, B206_REFRAME, B206_REFRAME_EN,
  B214_REFRAME, B214_REFRAME_EN, B216_REFRAME, B216_REFRAME_EN, B222_REFRAME, B222_REFRAME_EN,
  DECL_UNIT, SUBJ_INF_UNIT, PASSIF_UNIT, CEST_UNIT, SUBJ_PASSE_UNIT, MODES_UNIT,
  DECL_REF, SUBJ_INF_REF, PASSIF_REF, CEST_REF, SUBJ_PASSE_REF, MODES_REF, INFINITIVES_REF,
  CAUSE_REF, CONCESSION_REF, NEGATION_REF, ACADEMIQUE_REF,
} from './tournures-impersonnelles-corpus.ts';
import { TOURNURES_IMPERSONNELLES_TERMS } from './tournures-impersonnelles-terms.ts';

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
const OA1 = (n: number) => `fr.b1.opinions-et-avis.${n}`;
const OA2 = (n: number) => `fr.b2.opinions-et-avis.${n}`;
const DPO = (n: number) => `fr.b1.description-personnes-objets.${n}`;
const UNI = (n: number) => `fr.b2.universite.${n}`;
const EM1317 = 'fr.b2.emotions.1317';
const FP1072 = 'fr.b1.faits-et-procedures.1072';
const FP1204 = 'fr.b2.faits-et-procedures.1204';
const FP1311 = 'fr.b2.faits-et-procedures.1311';
const CL1966 = 'fr.b2.connecteurs-logiques.1966';
const CL2154 = 'fr.b2.connecteurs-logiques.2154';

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.20: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;
const F = (n: number) => fr(E(n));

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.20: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.20: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const itE = (n: number, note?: string): GItem => it(E(n), note);
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const lnE = (n: number) => ln(E(n));
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });
/** A card built from a row: fr and the bracketed respelling. */
const card = (id: string, head: string, label: string, body: string) =>
  ({ head, label, fr: fr(id), sub: rsOf(id), body });

/** A trap card: the WRONG version in promptSound (never spoken), the row's
 *  correct French in fr. */
const trap = (n: number, promptLabel: string, promptSound: string, tip: string): TrapCard =>
  ({ promptLabel, promptSound, fr: F(n), ipa: ipaOf(E(n)), tip });

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
 *  ACT 1: UN IL QUI NE DÉSIGNE PERSONNE
 *
 *  The scene's wrong option is grammatical: « il est certain qu'il y aura »
 *  claims more than the engineer said. The break shows the mood following
 *  the degree. NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: "L'assemblée des copropriétaires",
  frSub: 'Ne pas en dire plus que sa source',
  setting: { place: 'La salle commune du 4200, rue Saint-Denis', city: 'Montréal', time: 'mardi, 19 h', ambience: 'des chaises pliantes, un tableau blanc, du café tiède' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, l'assemblée des copropriétaires de ton immeuble. Tu es secrétaire de séance : c'est toi qui rédiges le compte rendu. Mme Nguyen, l'ingénieure, présente l'état de la toiture.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mme Nguyen',
      fr: F(2013), en: en(E(2013)), respell: rsOf(E(2013)),
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Le président',
      fr: 'Notez-le au compte rendu, s’il vous plaît.', en: 'Put it in the minutes, please.',
      respell: '[no-tay-LUH | oh kohⁿt rahⁿ-DÜ | seel voo PLEH]',
      stage: 'Trente copropriétaires liront ta phrase demain matin.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Selon ce que dira ta phrase, les copropriétaires voteront, ou non, des travaux d'urgence.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: "Quelle phrase dit exactement ce que l'ingénieure a dit ?",
      size: 'lg',
      options: [
        { fr: F(2004), respell: rsOf(E(2004)), en: `${en(E(2004))} (More than the engineer said.)`, outcome: 'breaks', audio: AUDIO },
        { fr: F(2003), respell: rsOf(E(2003)), en: en(E(2003)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Le lendemain, les copropriétaires lisent « possible ». Ils surveillent leurs plafonds, et personne ne vote de travaux d’urgence.',
        breaks: 'Le lendemain, trois copropriétaires exigent des travaux d’urgence à quatre-vingt mille dollars : le compte rendu disait « certain ». L’ingénieure n’a jamais dit ça.',
      },
    },
    {
      kind: 'break',
      heading: "L'ingénieure a dit possible, pas certain",
      body: "Certain engage le compte rendu : un fait annoncé, à l'indicatif, il y aura. Possible laisse la porte ouverte : le subjonctif, il y ait. L'expression dit jusqu'où tu t'engages, et le mode suit. EN: certain commits you (indicative); possible leaves the door open (subjunctive).",
      wrong: { fr: F(2004), ipa: ipaOf(E(2004)), respell: rsOf(E(2004)), en: `${en(E(2004))} (More than the engineer said.)` },
      right: { fr: F(2003), ipa: ipaOf(E(2003)), respell: rsOf(E(2003)), en: en(E(2003)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Un compte rendu, une note, un rapport : partout, le il impersonnel permet de parler sans nommer personne. Mais ce qui le suit t'engage plus ou moins. Cette leçon t'apprend à régler ce curseur : nécessité, probabilité, jugement, distance.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['vide', 'engagement'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Exiger ou conseiller', s: 'Actes 3 et 4 : il faut, il suffit de, il convient de, il importe que' },
    { t: 'Dire ton degré de certitude', s: 'Actes 5 à 7 : probable ou possible, la négation, il semble, il paraît' },
    { t: 'Juger, et prendre de la distance', s: 'Actes 8 à 10 : il est dommage que, il a été décidé que, il manque' },
    { t: 'Écrire une note officielle', s: 'Actes 11 et 12 : du certain au douteux, en 200 à 250 mots' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le compte rendu',
  frSub: "Lis, et repère ce que le texte affirme ou non",
  text: LECTURE_AG,
  glossary: [
    { word: 'copropriété', en: 'co-ownership', note: 'Un immeuble dont chaque appartement a son propriétaire, et les parties communes à tous.' },
    { word: 'infiltrations', en: 'leaks', note: 'De l’eau qui passe à travers le toit ou un mur.' },
    { word: 'déneigement', en: 'snow removal', note: 'Enlever la neige des rues et des entrées.' },
    { word: 'le quorum', en: 'the quorum', note: 'Le nombre minimum de présents pour que le vote compte.' },
  ],
  questions: [
    { q: 'Global : à quoi sert ce texte ?', a: "À informer tous les copropriétaires, présents ou absents, de ce qui a été dit et décidé à l'assemblée." },
    { q: 'Détail : les travaux de toiture commenceront-ils cet hiver ?', a: "Non : il a été décidé de refaire la toiture au printemps, et il n'est pas nécessaire de lancer des travaux d'urgence." },
    { q: "Inférence : l'ingénieure est-elle sûre qu'il y aura des infiltrations ?", a: "Non : il est possible qu'il y ait des infiltrations. Possible, et le subjonctif : une hypothèse, d'où une simple surveillance." },
    { q: 'Degré : les charges vont-elles augmenter, selon le compte rendu ?', a: "Probablement : il est probable que, avec l'indicatif. Le secrétaire y croit, sans le présenter comme un fait." },
    { q: 'Position : où le secrétaire donne-t-il un avis ?', a: "Il est dommage que si peu de résidents soient venus : un jugement, avec le subjonctif." },
    { q: 'Forme : trouve trois tournures qui ne nomment pas qui décide.', a: "Il a été décidé que, il est rappelé aux résidents que, il est demandé aux absents de." },
  ],
  audio: REC('rec-b2-20-ag'),
  say: REFRAME,
  terms: ['vide', 'engagement'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Ce que le texte affirme, et ce qu’il n’affirme pas',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le texte s’engage', [
      itE(2000, 'une décision prise'),
      itE(2002, 'une hausse probable'),
      itE(2010, 'une information sûre'),
      itE(2012, 'un fait constaté'),
    ], chk('Ces quatre phrases présentent les faits comme…',
      ['acquis, ou presque', 'de simples hypothèses'], 0,
      'Une décision, une forte probabilité, une information, un constat : le texte s’engage, et l’indicatif suit. EN: the text commits.')),
    grp('Le texte ne s’engage pas', [
      itE(2003, 'une simple possibilité'),
      itE(2013, 'rien n’est sûr'),
      itE(2005, 'une obligation'),
      itE(2006, 'un regret'),
    ], chk('Pourquoi le subjonctif dans ces phrases ?',
      ['l’expression doute, exige ou juge au lieu d’affirmer', 'les faits sont faux'], 0,
      'Possible, il se peut, il faut, il est dommage : aucune n’affirme simplement un fait. EN: none of them asserts.')),
    ctl('Le il', '« Il manque encore deux signatures » : qu’est-ce qui manque ?',
      ['deux signatures', 'une personne absente'], 0,
      'Le il est vide : ce qui manque, ce sont les signatures. EN: the signatures.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['vide', 'engagement'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où le il impersonnel compte',
  cases: [
    { situation: 'Tu rédiges le compte rendu d’une réunion', fr: F(2000), en: en(E(2000)) },
    { situation: 'Tu rappelles une règle sur une affiche', fr: F(2001), en: en(E(2001)) },
    { situation: 'Tu annonces une hausse sans la promettre', fr: F(2002), en: en(E(2002)) },
    { situation: 'Tu rapportes l’avis prudent d’une experte', fr: F(2003), en: en(E(2003)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['engagement'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le il', 'Le il de « il est possible que » désigne…',
    ['personne : c’est un sujet vide', 'l’ingénieure', 'le toit'], 0,
    'Un sujet vide, que le français exige. EN: no one.'),
  ctl('Le degré', 'L’ingénieure a dit « il se peut ». Le compte rendu écrit…',
    ['il est possible que', 'il est certain que'], 0,
    'Tu ne t’engages pas plus que ta source. EN: no more than the source.'),
  ctl('Le mode', '« Il est possible qu’il y … des infiltrations. »',
    ['ait', 'aura'], 0,
    'Possible : le subjonctif. EN: ait.'),
], ['vide', 'engagement']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Un il qui ne désigne personne',
    opener: {
      line: "Un compte rendu que trente voisins liront : ici tu découvres le il qui ne désigne personne, et jusqu'où ce qui le suit t'engage. EN: Minutes thirty neighbours will read: here you meet the il that points at no one, and how far what follows it commits you.",
      imageRef: 'lessons/tournures-impersonnelles/act01.jpg',
    },
    sections: [],
    milestone: "Tu repères une tournure impersonnelle, tu dis si elle affirme ou non, et tu ne t'engages pas plus que ta source. EN: You can spot an impersonal expression, say whether it asserts, and commit no further than your source.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: QUATRE FAMILLES, DEUX MODES
 *
 *  The recap of lessons 15 and 22 in B1 and 6 and 22 in B2, then the map:
 *  one library said in every family.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà',
  frSub: 'Quatre leçons, un même il',
  hint: 'Quatre cartes. Chacune rappelle une leçon.',
  audio: REC('rec-b2-20-rappel'),
  say: REFRAME,
  terms: ['vide', 'engagement'],
  cards: [
    card(OA1(1201), 'L’expression décide', Cap(DECL_REF),
      `« ${B115_REFRAME} » Il faut que, il est possible que : tu connais la liste. Ici, tu la ranges par degré d'engagement. EN: ${B115_REFRAME_EN}`),
    card(DPO(1102), 'Il est ou c’est', Cap(CEST_REF),
      `« ${B122_REFRAME} » Il est difficile de, à l'écrit ; c'est difficile de, à l'oral. La même règle vaut pour il est dommage que. EN: ${B122_REFRAME_EN}`),
    card(OA2(1846), 'Affirmer ou non', Cap(MODES_REF),
      `« ${B206_REFRAME} » Clair et probable affirment : l'indicatif. Ici, l'échelle devient plus fine. EN: ${B206_REFRAME_EN}`),
    card(UNI(1099), 'Jamais plus sûr', Cap(ACADEMIQUE_REF),
      `« ${B222_REFRAME} » Dans une note, chaque tournure dit ce que tes preuves permettent. EN: ${B222_REFRAME_EN}`),
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-carte',
  title: 'Quatre familles, et le mode de chacune',
  cols: ['Famille', 'Exemple', 'Ce qui suit'],
  rows: [
    { cells: ['nécessité', 'il faut que', 'subjonctif'], say: F(2017),
      detail: { title: 'la nécessité', body: "Tu exiges ou tu conseilles : il faut que, il vaut mieux que, il suffit que. Toujours le subjonctif. EN: necessity takes the subjunctive.", say: F(2028) } },
    { cells: ['certitude', 'il est probable que', 'indicatif'], say: F(2018),
      detail: { title: 'la certitude', body: "Tu affirmes, même avec prudence : certain, clair, probable. L'indicatif. EN: the indicative.", say: F(2022) } },
    { cells: ['doute', 'il est possible que', 'subjonctif'], say: F(2019),
      detail: { title: 'le doute', body: "Tu n'affirmes pas : possible, il se peut, douteux. Le subjonctif. EN: the subjunctive.", say: F(2024) } },
    { cells: ['jugement', 'il est dommage que', 'subjonctif'], say: F(2020),
      detail: { title: 'le jugement', body: "Tu juges un fait, même sûr : le subjonctif. EN: a judgement takes the subjunctive.", say: F(2027) } },
    { cells: ['distance', 'il a été décidé que', 'indicatif'], say: F(2021),
      detail: { title: 'la distance', body: "Personne ne signe la décision, mais elle est affirmée : l'indicatif. EN: the indicative.", say: F(2030) } },
    { cells: ['pour tous', 'il suffit de, il est interdit de', 'infinitif'], say: F(2029),
      detail: { title: "l'infinitif", body: "Personne de précis : de + infinitif, ou l'infinitif seul après il faut. EN: no one in particular, the infinitive.", say: F(2030) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['engagement'],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-trier',
  layer: 'core',
  size: 'lg',
  title: 'La famille, puis le mode',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Affirmer : l’indicatif', [
      itE(2018, 'probable : sera'),
      itE(2022, 'certain : sera'),
      itE(2021, 'décidé : serait'),
      itE(2026, 'clair : veulent'),
    ], chk('« Il est … que la bibliothèque sera ouverte le dimanche. » Quel mot va avec sera ?',
      ['probable', 'possible'], 0,
      'Sera est un indicatif ; possible voudrait soit. EN: probable.')),
    grp('Ne pas affirmer : le subjonctif', [
      itE(2017, 'il faut que : soit'),
      itE(2019, 'possible : soit'),
      itE(2020, 'dommage : ne soit pas'),
      itE(2024, 'possible : soit'),
    ], chk('Pourquoi soit après il est dommage que ?',
      ['tu juges le fait au lieu de l’affirmer', 'la bibliothèque est peut-être ouverte'], 0,
      'Le fait est sûr, mais tu le juges : le subjonctif. EN: a judgement.')),
    ctl('Le registre', '« C’est dommage que la bibliothèque ferme si tôt. » Où l’entends-tu ?',
      ['plutôt à l’oral', 'dans un rapport officiel'], 0,
      'À l’écrit : il est dommage que. EN: in speech.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['engagement'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Une bibliothèque, huit phrases',
  frSub: 'Écoute la famille de chaque phrase',
  lines: [lnE(2017), lnE(2018), lnE(2019), lnE(2020), lnE(2021), lnE(2022), lnE(2027), lnE(2029)],
  questions: [
    { q: 'Première phrase : de quelle famille s’agit-il ?', opts: ['la nécessité', 'la probabilité'], correct: 0, why: 'Il faut que : une nécessité. EN: necessity.' },
    { q: 'Deuxième et troisième phrases : laquelle est la plus sûre ?', opts: ['la deuxième', 'la troisième'], correct: 0, why: 'Probable, avec sera, est plus sûr que possible. EN: the second.' },
    { q: 'Cinquième phrase : sait-on qui a pris la décision ?', opts: ['non, personne n’est nommé', 'oui, la bibliothécaire'], correct: 0, why: 'Il a été décidé : personne ne signe. EN: no.' },
    { q: 'Septième phrase : dans quel registre ?', opts: ['plutôt oral', 'écrit soutenu'], correct: 0, why: 'C’est dommage que : la forme de l’oral. EN: spoken.' },
    { q: 'Dernière phrase : que faut-il pour entrer ?', opts: ['seulement sa carte', 'une réservation et sa carte'], correct: 0, why: 'Il suffit de présenter sa carte : rien d’autre. EN: just the card.' },
  ],
  audio: REC('rec-b2-20-carte-ecoute'),
  say: REFRAME,
  terms: ['engagement'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre modes empruntés',
  errors: [
    {
      wrong: 'Il est possible que la bibliothèque est ouverte le dimanche.',
      right: F(2019),
      why: "Normal : possible sonne comme une information. Mais possible n'affirme pas : le subjonctif, soit. EN: possible does not assert.",
    },
    {
      wrong: 'Il faut que la bibliothèque est ouverte le dimanche.',
      right: F(2017),
      why: "Normal : le fait semble évident, alors l'indicatif vient tout seul. Il faut que exige : le subjonctif. EN: il faut que demands the subjunctive.",
    },
    {
      wrong: 'Il est certain que la bibliothèque soit ouverte le dimanche.',
      right: F(2022),
      why: "Normal : on a retenu que il est + adjectif + que appelle souvent le subjonctif. Certain affirme : l'indicatif, sera. EN: certain asserts.",
    },
    {
      wrong: 'Il suffit présenter sa carte à l’accueil.',
      right: F(2029),
      why: "Normal : il faut se construit sans de, alors on copie. Il suffit, lui, veut de : il suffit de présenter. EN: il suffit de.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['engagement'],
};

const A2_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a2-flash',
  layer: 'core',
  title: 'Huit tournures à avoir en bouche',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'it is necessary that (+ subjunctive)', back: 'il faut que', say: F(2017) },
    { front: 'it is likely that (+ indicative)', back: 'il est probable que', say: F(2018) },
    { front: 'it is possible that (+ subjunctive)', back: 'il est possible que', say: F(2019) },
    { front: 'it is a pity that', back: 'il est dommage que', say: F(2020) },
    { front: 'it has been decided that', back: 'il a été décidé que', say: F(2021) },
    { front: 'it is clear that', back: 'il est clair que', say: F(2026) },
    { front: 'you only need to', back: 'il suffit de', say: F(2029) },
    { front: 'it is best to', back: 'il vaut mieux', say: F(2028) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['engagement'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le mot', '« Il est … que la salle sera fermée lundi. »',
    ['probable', 'possible'], 0,
    'Sera, un indicatif : probable. EN: probable.'),
  ctl('Le mode', '« Il est possible que la salle … fermée lundi. »',
    ['soit', 'sera'], 0,
    'Possible : le subjonctif. EN: soit.'),
  ctl('La famille', '« Il a été décidé que… » appartient à…',
    ['la distance', 'le jugement'], 0,
    'Une décision que personne ne signe. EN: distance.'),
], ['engagement']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Quatre familles, deux modes',
    opener: {
      line: "La même bibliothèque, dite de six façons : ici tu ranges les tournures impersonnelles en quatre familles, et chacune choisit son mode. EN: The same library said six ways: here you sort impersonal expressions into four families, each with its mood.",
      imageRef: 'lessons/tournures-impersonnelles/act02.jpg',
    },
    sections: [],
    milestone: "Tu sais dans quelle famille ranger chaque tournure, et quel mode elle choisit. EN: You know each expression's family and the mood it picks.",
    estScreens: 38, restPoints: ['a2-table', 'a2-ecoute'],
  },
  sections: [A2_RAPPEL, A2_TABLE, A2_TRIER, A2_ECOUTE, A2_ERREURS, A2_FLASH, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: IL FAUT, IL SUFFIT DE, IL CONVIENT DE
 *
 *  The infinitive family: with de or without it; no one in particular
 *  against someone named (lesson 16 in B1).
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'Au contrôle des habitants',
  frSub: 'Des règles pour tout le monde',
  setting: 'Lausanne, au contrôle des habitants. Karim arrive du Maroc pour un poste à l’hôpital ; Léa, au guichet, lui explique les démarches.',
  bubbles: [
    { from: 'narrator', fr: 'Léa ne dit jamais « vous devez » : elle parle comme le règlement.', en: 'Léa never says “you must”: she speaks like the regulations.' },
    { from: 'user', fr: F(2032), en: en(E(2032)) },
    { from: 'coach', fr: 'Il faut + infinitif : la règle vaut pour tout le monde, personne n’est nommé.', en: 'Il faut + infinitive: the rule applies to everyone, no one is named.', warn: 'Il faut + infinitif' },
    { from: 'user', fr: F(2033), en: en(E(2033)) },
    { from: 'coach', fr: 'Il suffit de : la seule chose à faire. Avec de, puis l’infinitif.', en: 'Il suffit de: the only thing to do. With de, then the infinitive.', warn: 'Il suffit de' },
    { from: 'user', fr: F(2036), en: en(E(2036)) },
    { from: 'coach', fr: 'Il y a lieu de : le français des administrations. À l’oral, Léa dirait plutôt : il faut vérifier.', en: 'Il y a lieu de: administrative French. Aloud, Léa would rather say: il faut vérifier.', warn: 'Il y a lieu de' },
    { from: 'user', fr: F(2041), en: en(E(2041)) },
    { from: 'coach', fr: 'Ici, quelqu’un de précis doit agir, l’employeur : que, et le subjonctif.', en: 'Here someone in particular must act, the employer: que, and the subjunctive.', warn: 'Que + subjonctif' },
  ],
  closing: { fr: 'Pour tout le monde, l’infinitif ; pour quelqu’un de précis, que et le subjonctif.', en: 'For everyone, the infinitive; for someone in particular, que and the subjunctive.' },
  audio: REC('rec-b2-20-lea'),
  say: REFRAME,
  terms: ['necessite'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-necessite',
  title: 'Exiger avec un infinitif',
  frSub: 'Avec de, ou sans',
  hint: 'Quatre cartes. La dernière nomme quelqu’un.',
  audio: REC('rec-b2-20-infinitif'),
  say: REFRAME,
  terms: ['necessite'],
  cards: [
    card(E(2033), 'Il faut, il suffit de', "l'infinitif",
      "Il faut + infinitif, sans de. Il suffit de + infinitif, ou il suffit d'un nom : il suffit d'un clic. La règle vaut pour tout le monde. EN: il faut takes no de; il suffit de does."),
    card(E(2036), 'Il convient de, il y a lieu de', 'soutenu, administratif',
      "Il convient de : il est bon de, dans un texte soigné. Il y a lieu de : il y a des raisons de, dans une lettre officielle. Il n'y a pas lieu de s'inquiéter : aucune raison. EN: formal and administrative."),
    card(E(2038), 'Il vaut mieux, il importe de', 'le conseil',
      "Il vaut mieux + infinitif, sans de : un conseil. Il importe de : il est important de, en plus soutenu. EN: il vaut mieux takes no de."),
    card(E(2041), 'Quelqu’un de précis', Cap(SUBJ_INF_REF),
      `« ${B116_REFRAME} » Un sujet précis, l'employeur : que + subjonctif. EN: ${B116_REFRAME_EN}`),
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'De, rien, ou que',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Avec de', [
      itE(2033, 'il suffit de'),
      itE(2035, 'il convient de'),
      itE(2036, 'il y a lieu de'),
      itE(2039, 'il importe de'),
    ], chk('« Il convient … tout changement d’adresse. »',
      ['de signaler', 'signaler', 'que signaler'], 0,
      'Il convient de + infinitif. EN: de.')),
    grp('Sans de', [
      itE(2032, 'il faut'),
      itE(2038, 'il vaut mieux'),
      itE(2046, 'il faudrait'),
      itE(2047, 'il ne faut pas'),
    ], chk('« Il vaut mieux … rendez-vous le matin. »',
      ['prendre', 'de prendre'], 0,
      'Il vaut mieux + infinitif, sans de. EN: no de.')),
    grp('Pour tous ou pour quelqu’un', [
      itE(2041, 'l’employeur : que'),
      itE(2040, 'il te faut + nom'),
      itE(2034, 'il suffit d’un + nom'),
      itE(2045, 'il faudra + infinitif'),
    ], chk('Ton employeur doit remplir l’attestation :',
      ["il faut que ton employeur remplisse l'attestation", "il faut ton employeur remplir l'attestation"], 0,
      'Quelqu’un de précis : que + subjonctif. EN: que.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['necessite'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Six constructions bancales',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'De, ou rien',
    body: "Il suffit de, il convient de, il y a lieu de, il importe de prennent de. Il faut et il vaut mieux se construisent sans de. Pour quelqu'un de précis : que + subjonctif. EN: some take de; il faut and il vaut mieux do not.",
  },
  cards: [
    trap(2032, 'il faut de', "Pour s'inscrire, il faut de présenter une pièce d'identité.", 'Il faut + infinitif, sans de. EN: no de.'),
    trap(2033, 'il suffit sans de', 'Il suffit remplir le formulaire en ligne.', 'Il suffit de. EN: de.'),
    trap(2035, 'il convient que + infinitif', "Il convient que signaler tout changement d'adresse dans les huit jours.", 'Il convient de + infinitif. EN: de.'),
    trap(2038, 'il vaut mieux de', 'Il vaut mieux de prendre rendez-vous le matin.', 'Pas de de après il vaut mieux. EN: no de.'),
    trap(2041, 'un sujet sans que', "Il faut ton employeur remplir l'attestation.", 'Un sujet précis : que + subjonctif. EN: que + subjunctive.'),
    trap(2036, 'il y a lieu à', "Il y a lieu à vérifier la date d'expiration du permis.", 'Il y a lieu de. EN: de.'),
  ],
  drill: [
    { promptSay: 'Il suffit … remplir le formulaire.', opts: ['de', 'que'], correct: 0 },
    { promptSay: 'Il faut … une pièce d’identité.', opts: ['présenter', 'de présenter'], correct: 0 },
    { promptSay: 'Il vaut mieux … rendez-vous le matin.', opts: ['de prendre', 'prendre'], correct: 1 },
    { promptSay: 'Il convient … joindre une photo récente.', opts: ['de', 'à'], correct: 0 },
    { promptSay: 'Il faut que ton employeur … l’attestation.', opts: ['remplit', 'remplisse'], correct: 1 },
    { promptSay: 'Il y a lieu … vérifier le permis.', opts: ['de', 'à'], correct: 0 },
    { promptSay: 'Il … d’un clic pour prendre rendez-vous.', opts: ['suffit', 'faut'], correct: 0 },
    { promptSay: 'Il importe … conserver une copie.', opts: ['de', 'que'], correct: 0 },
  ],
  steps: STEPS('De, ou rien', 'Six constructions bancales'),
  audio: REC('rec-b2-20-piege-infinitif'),
  say: REFRAME,
  terms: ['necessite'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq phrases, cinq registres',
  frSub: 'Des leçons précédentes et de celle-ci',
  examples: [
    ex(OA1(1482), 'il vaut mieux + infinitif : un conseil pour tous'),
    ex(OA1(1483), 'il vaut mieux que tu… : un conseil pour toi'),
    ex(UNI(1031), 'il convient de : l’annonce d’un plan'),
    ex(UNI(1135), 'il importe de : soutenu, dans un texte universitaire'),
    ex(E(2034), 'il suffit d’un nom : un clic suffit'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['necessite'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Compléter : le guide de Lausanne', TEXTE_A3, [
  { q: 'Premier et deuxième blancs : il convient (___) signaler ; il suffit (___) remplir.', a: "De, les deux fois : il convient de signaler votre adresse, il suffit de remplir le formulaire." },
  { q: 'Troisième blanc : il faut (___) votre employeur remplisse l’attestation.', a: "Que : quelqu'un de précis, votre employeur, avec le subjonctif remplisse." },
  { q: 'Quatrième blanc : il y a lieu (___) vérifier.', a: "De : il y a lieu de vérifier, le français des administrations." },
  { q: 'Cinquième et sixième blancs : il vaut mieux (___) prendre ; il n’y a pas lieu (___) s’inquiéter.', a: "Rien après il vaut mieux (il vaut mieux prendre rendez-vous) ; de après il n'y a pas lieu (de s'inquiéter)." },
], 'rec-b2-20-texte-a3', ['necessite']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Avec de', '« Il suffit … remplir le formulaire. »',
    ['de', 'que'], 0,
    'Il suffit de + infinitif. EN: de.'),
  ctl('Sans de', '« Il vaut mieux … rendez-vous le matin. »',
    ['prendre', 'de prendre'], 0,
    'Pas de de après il vaut mieux. EN: prendre.'),
  ctl('Que', 'Ton employeur doit signer. Après il faut…',
    ['que + subjonctif', 'de + infinitif'], 0,
    'Quelqu’un de précis : que. EN: que.'),
], ['necessite']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Il faut, il suffit de',
    opener: {
      line: "Un guichet, un nouveau venu, des règles pour tout le monde : ici tu exiges ou tu conseilles avec un infinitif, sans nommer personne. EN: A counter, a newcomer, rules for everyone: here you require or advise with an infinitive, naming no one.",
      imageRef: 'lessons/tournures-impersonnelles/act03.jpg',
    },
    sections: [],
    milestone: "Tu construis il faut, il suffit de, il convient de, il y a lieu de et il vaut mieux, et tu passes à que quand quelqu'un de précis doit agir. EN: You can build the infinitive family and switch to que when a named person must act.",
    estScreens: 36, restPoints: ['a3-construire', 'a3-piege'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_PIEGE, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: IL FAUT QUE, IL IMPORTE QUE
 *
 *  Necessity graded from the bare minimum to the obligation, always the
 *  subjunctive; forbid (il ne faut pas que) against let off (il n'est pas
 *  nécessaire que).
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'La note de service',
  frSub: 'Obligatoire, conseillé, interdit',
  setting: 'Liège, l’unité de cardiologie d’un hôpital. Mme Lambert, la cadre infirmière, présente la nouvelle note de service à Julien, infirmier arrivé lundi.',
  bubbles: [
    { from: 'narrator', fr: 'Julien lit la note à voix haute ; Mme Lambert précise ce qui est obligatoire et ce qui ne l’est pas.', en: 'Julien reads the memo aloud; Mme Lambert explains what is compulsory and what is not.' },
    { from: 'user', fr: F(2048), en: en(E(2048)) },
    { from: 'coach', fr: 'Indispensable : l’obligation la plus forte. Le subjonctif, ait.', en: 'Indispensable: the strongest obligation. The subjunctive, ait.', warn: 'Il est indispensable que' },
    { from: 'user', fr: F(2050), en: en(E(2050)) },
    { from: 'coach', fr: 'Il importe que : le sens de il est important que, en plus soutenu.', en: 'Il importe que: the meaning of il est important que, more formal.', warn: 'Il importe que' },
    { from: 'user', fr: F(2052), en: en(E(2052)) },
    { from: 'coach', fr: 'Il suffit que : le minimum. Rien de plus n’est demandé.', en: 'Il suffit que: the bare minimum. Nothing more is asked.', warn: 'Il suffit que' },
    { from: 'user', fr: F(2055), en: en(E(2055)) },
    { from: 'coach', fr: 'Il n’est pas nécessaire que : tu es dispensé. Ce n’est pas une interdiction.', en: 'Il n’est pas nécessaire que: you are let off. It is not a ban.', warn: 'Pas nécessaire' },
  ],
  closing: { fr: 'Du minimum à l’obligation, un seul mode : le subjonctif.', en: 'From the bare minimum to the obligation, one mood: the subjunctive.' },
  audio: REC('rec-b2-20-lambert'),
  say: REFRAME,
  terms: ['necessite'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Exiger avec que',
  frSub: 'Toujours le subjonctif',
  hint: 'Quatre cartes. La dernière sépare interdire et dispenser.',
  audio: REC('rec-b2-20-necessite'),
  say: REFRAME,
  terms: ['necessite'],
  cards: [
    card(E(2051), 'L’obligation', 'subjonctif',
      "Il faut que, il est nécessaire, essentiel, indispensable que : tu exiges, donc le subjonctif. Pour un fait qui doit déjà être accompli, le subjonctif passé. EN: obligation takes the subjunctive."),
    card(E(2050), 'Il importe que', 'soutenu',
      "Il importe que : il est important que, dans un texte soigné. À l'oral, on dit plutôt il faut que. EN: formal."),
    card(E(2053), 'Le minimum, le conseil', 'il suffit, il vaut mieux',
      "Il suffit que : une seule condition, et c'est assez. Il vaut mieux que : un conseil. Il est souhaitable que : un vœu poli. Toujours le subjonctif. EN: minimum and advice take the subjunctive too."),
    card(E(2054), 'Interdire ou dispenser', 'la négation',
      "Il ne faut pas que tu partes : c'est interdit. Il n'est pas nécessaire que tu sois là : tu es dispensé, comme dans tu n'es pas obligée de. EN: must not against don't have to."),
  ],
};

const A4_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a4-table',
  layer: 'core',
  sheetId: 'sheet-necessite',
  title: 'Six degrés d’exigence',
  cols: ['Tournure', 'Force', 'Registre'],
  rows: [
    { cells: ['il suffit que', 'le minimum', 'courant'], say: F(2052),
      detail: { title: 'il suffit que', body: "Une seule condition, et c'est assez. EN: all it takes.", say: F(2034) } },
    { cells: ['il vaut mieux que', 'un conseil', 'courant'], say: F(2053),
      detail: { title: 'il vaut mieux que', body: "Un conseil, pas un ordre. EN: advice.", say: fr(OA1(1248)) } },
    { cells: ['il est souhaitable que', 'un vœu', 'soutenu'], say: F(2061),
      detail: { title: 'il est souhaitable que', body: "Tu souhaites, poliment, dans un texte officiel. EN: a polite wish.", say: F(2129) } },
    { cells: ['il faut que', "l'obligation", 'courant'], say: F(2059),
      detail: { title: 'il faut que', body: "L'obligation ordinaire, à l'oral comme à l'écrit. EN: the ordinary obligation.", say: F(2062) } },
    { cells: ['il importe que', "l'obligation", 'soutenu'], say: F(2050),
      detail: { title: 'il importe que', body: "La même force, en plus soigné. EN: the same, more formal.", say: F(2189) } },
    { cells: ['il est indispensable que', "l'obligation la plus forte", 'courant, écrit'], say: F(2048),
      detail: { title: 'il est indispensable que', body: "Sans cela, rien ne marche. EN: without it, nothing works.", say: fr(EM1317) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['necessite'],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Exiger, conseiller, dispenser',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('L’obligation', [
      itE(2048, 'indispensable : ait'),
      itE(2049, 'nécessaire : mette'),
      itE(2051, 'essentiel : soit'),
      itE(2062, 'il faut absolument : soit'),
    ], chk('« Il est nécessaire que chaque visiteur … un masque. »',
      ['mette', 'met'], 0,
      'Nécessaire : subjonctif, mette. EN: mette.')),
    grp('Le minimum et le conseil', [
      itE(2052, 'il suffit que'),
      itE(2053, 'il vaut mieux que'),
      itE(2061, 'il est souhaitable que'),
      it(OA1(1248), 'il vaut mieux que'),
    ], chk('Laquelle demande le moins ?',
      ['il suffit que', 'il est indispensable que'], 0,
      'Il suffit que : une seule condition. EN: the bare minimum.')),
    grp('Interdire ou dispenser', [
      itE(2054, 'interdit'),
      itE(2055, 'dispensé'),
      itE(2056, 'dispensée, avec un sujet'),
      itE(2047, 'interdit : ne pas oublier'),
    ], chk('« You don’t have to stay after the handover. »',
      ["Il n'est pas nécessaire que tu restes après la relève.", 'Il ne faut pas que tu restes après la relève.'], 0,
      'Tu es dispensé, pas interdit. EN: not necessary.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['necessite'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre exigences bancales',
  errors: [
    {
      wrong: 'Il est nécessaire que chaque visiteur met un masque.',
      right: F(2049),
      why: "Normal : met et mette se ressemblent, et le masque est bien réel. Mais nécessaire exige : le subjonctif, mette. EN: mette.",
    },
    {
      wrong: 'Il ne faut pas que tu sois là avant sept heures.',
      right: F(2055),
      why: "Normal : en anglais, you don't have to se traduit mot à mot. Mais il ne faut pas que interdit ; pour dispenser, il n'est pas nécessaire que. EN: must not is not don't have to.",
    },
    {
      wrong: 'Il importe que l’équipe de nuit est prévenue avant vingt heures.',
      right: F(2050),
      why: "Normal : il importe ressemble à une information. C'est pourtant une exigence, comme il est important que : soit. EN: soit.",
    },
    {
      wrong: 'Il suffit que tu fais une photo de l’ordonnance.',
      right: F(2052),
      why: "Normal : il suffit demande si peu qu'on oublie qu'il exige quand même. Le subjonctif : fasses. EN: fasses.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['necessite'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Compléter : la note de service', TEXTE_A4, [
  { q: 'Les trois premiers verbes : avoir, être, mettre.', a: "Il est indispensable que chaque patient ait son bracelet ; il importe que l'équipe de nuit soit prévenue ; il faut que chaque visiteur mette un masque. Trois exigences, trois subjonctifs." },
  { q: 'Les familles doivent-elles prendre rendez-vous ?', a: "Non : il n'est pas nécessaire que les familles prennent rendez-vous. Elles sont dispensées, puisqu'elles peuvent venir librement." },
  { q: 'Un soignant peut-il partir avant la relève ?', a: "Non : il ne faut pas qu'un soignant parte avant la relève. C'est interdit." },
  { q: 'Quelle est la phrase la plus forte de la note ?', a: "Il est indispensable que chaque patient ait son bracelet : indispensable est le haut de l'échelle." },
], 'rec-b2-20-texte-a4', ['necessite']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le mode', '« Il faut que l’équipe … le registre. »',
    ['remplisse', 'remplit'], 0,
    'Il faut que : subjonctif. EN: remplisse.'),
  ctl('La négation', '« You must not leave before the handover. »',
    ['il ne faut pas que tu partes', 'il n’est pas nécessaire que tu partes'], 0,
    'Il ne faut pas que : c’est interdit. EN: must not.'),
  ctl('Le registre', 'Le plus soutenu :',
    ['il importe que', 'il faut que'], 0,
    'Il importe que : le registre de l’écrit soigné. EN: il importe que.'),
], ['necessite']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Il faut que, il importe que',
    opener: {
      line: "Une note de service qui ne laisse rien au hasard : ici tu gradues l'exigence, du minimum à l'obligation, et tu sépares interdire de dispenser. EN: A ward memo that leaves nothing to chance: here you grade a requirement from the minimum to the obligation, and tell must not from don't have to.",
      imageRef: 'lessons/tournures-impersonnelles/act04.jpg',
    },
    sections: [],
    milestone: "Tu gradues une exigence avec il suffit que, il vaut mieux que, il faut que ou il est indispensable que, et tu ne confonds plus il ne faut pas que et il n'est pas nécessaire que. EN: You can grade a requirement and tell must not from don't have to.",
    estScreens: 36, restPoints: ['a4-table', 'a4-construire'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_TABLE, A4_CONSTRUIRE, A4_ERREURS, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: PROBABLE OU POSSIBLE
 *
 *  The scale by even odds: above, the indicative; below, the subjunctive,
 *  including for a past fact. POLICY: no subjunctive is ever offered as the
 *  wrong option after « probable » or « il ne fait aucun doute ».
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le porte-parole, avant la tempête',
  frSub: 'Huit phrases, huit degrés',
  lines: [lnE(2064), lnE(2065), lnE(2066), lnE(2067), lnE(2068), lnE(2071), lnE(2072), lnE(2078)],
  questions: [
    { q: 'Première phrase : la tempête touchera-t-elle la ville ?', opts: ['oui, c’est certain', 'peut-être'], correct: 0, why: 'Il est certain que, avec le futur : il s’engage. EN: yes, certainly.' },
    { q: 'Troisième phrase : des vols seront-ils annulés ?', opts: ['peut-être', 'certainement'], correct: 0, why: 'Il est possible que : une porte ouverte. EN: maybe.' },
    { q: 'Cinquième phrase : les routes seront-elles dégagées avant midi ?', opts: ['sans doute pas', 'sûrement'], correct: 0, why: 'Douteux : il n’y croit guère. EN: probably not.' },
    { q: 'Sixième phrase : l’hiver sera-t-il long ?', opts: ['oui, sans aucun doute', 'on ne sait pas'], correct: 0, why: 'Il ne fait aucun doute : il affirme. EN: yes.' },
    { q: 'Dernière phrase : le pont sera-t-il fermé ?', opts: ['peut-être', 'oui, c’est décidé'], correct: 0, why: 'Il se peut que : rien n’est décidé. EN: maybe.' },
  ],
  audio: REC('rec-b2-20-tempete-ecoute'),
  say: REFRAME,
  terms: ['echelle'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-certitude',
  title: 'Une chance sur deux',
  frSub: 'Au-dessus, en dessous',
  hint: 'Quatre cartes. La troisième ne tient qu’à un mot.',
  audio: REC('rec-b2-20-echelle'),
  say: REFRAME,
  terms: ['echelle'],
  cards: [
    card(E(2065), 'Au-dessus de la moitié', 'indicatif',
      "Certain, sûr, clair, évident, probable, il ne fait aucun doute : tu affirmes, même avec prudence. L'indicatif, souvent le futur. EN: above even odds, the indicative."),
    card(E(2067), 'En dessous', 'subjonctif',
      "Possible, il se peut, il se pourrait, peu probable, douteux, il n'est pas exclu : tu n'affirmes pas. Le subjonctif, qui couvre aussi l'avenir. EN: below even odds, the subjunctive."),
    card(OA2(1849), 'À un mot près', Cap(MODES_REF),
      `« ${B206_REFRAME} » Probable et peu probable ne sont qu'à un mot l'un de l'autre, et ils changent de mode. EN: ${B206_REFRAME_EN}`),
    card(E(2074), 'Déjà passé', Cap(SUBJ_PASSE_REF),
      "Pour un fait déjà passé : probable + passé composé (a commencé), possible + subjonctif passé (ait commencé). EN: past facts keep the same split."),
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Place le curseur',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Au-dessus : l’indicatif', [
      itE(2064, 'certain'),
      itE(2065, 'très probable'),
      itE(2071, 'aucun doute'),
      itE(2079, 'évident'),
    ], chk('« Il est … que la tempête touchera Québec demain. »',
      ['certain', 'possible'], 0,
      'Touchera, un indicatif : certain. EN: certain.')),
    grp('En dessous : le subjonctif', [
      itE(2066, 'possible'),
      itE(2067, 'peu probable'),
      itE(2068, 'douteux'),
      itE(2070, 'pas exclu'),
    ], chk('« Il est douteux que les routes … dégagées avant midi. »',
      ['soient', 'seront'], 0,
      'Douteux : sous la moitié, le subjonctif. EN: soient.')),
    grp('Déjà passé', [
      itE(2073, 'probable : a commencé'),
      itE(2074, 'possible : ait commencé'),
      itE(2081, 'possible : ait sous-estimé'),
      it(OA2(1854), 'exclu : soient finis'),
    ], chk('« Il est possible que la ville … la tempête. » (c’est déjà fait)',
      ['ait sous-estimé', 'a sous-estimé'], 0,
      'Possible, et un fait passé : le subjonctif passé. EN: ait sous-estimé.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echelle'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Le curseur mal placé',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le mot place le curseur',
    body: "Certain, clair, probable : l'indicatif. Possible, peu probable, douteux, il se peut : le subjonctif, même pour demain, et le subjonctif passé pour un fait passé. EN: the word sets the cursor, and the mood follows.",
  },
  cards: [
    trap(2066, 'possible + indicatif', 'Il est possible que des vols sont annulés en soirée.', 'Possible : soient. EN: soient.'),
    trap(2067, 'peu probable + futur', 'Il est peu probable que le courant sera coupé.', 'Peu probable : soit. EN: soit.'),
    trap(2078, 'il se peut + indicatif', 'Il se peut que nous devons fermer le pont.', 'Il se peut que : devions. EN: devions.'),
    trap(2072, 'clair + subjonctif', 'Il est clair que les secours soient prêts.', 'Clair affirme : sont. EN: sont.'),
    trap(2074, 'le passé', 'Il est possible que la neige a déjà commencé à Rimouski.', 'Un fait passé, sous la moitié : ait commencé. EN: ait.'),
    trap(2070, 'pas exclu + indicatif', "Il n'est pas exclu que l'école reprend jeudi.", 'Pas exclu : une possibilité, reprenne. EN: reprenne.'),
  ],
  drill: [
    { promptSay: 'Il est possible que des vols … annulés.', opts: ['soient', 'sont'], correct: 0 },
    { promptSay: 'Il est … que les écoles seront fermées.', opts: ['possible', 'probable'], correct: 1 },
    { promptSay: 'Il est peu probable que le courant … coupé.', opts: ['sera', 'soit'], correct: 1 },
    { promptSay: 'Il est clair que les secours … prêts.', opts: ['sont', 'soient'], correct: 0 },
    { promptSay: 'Il se peut que nous … fermer le pont.', opts: ['devions', 'devons'], correct: 0 },
    { promptSay: 'Il ne fait aucun doute que l’hiver … long.', opts: ['sera', 'être'], correct: 0 },
    { promptSay: 'Il est douteux que les routes … dégagées.', opts: ['seront', 'soient'], correct: 1 },
    { promptSay: 'Il est possible que la neige … déjà commencé.', opts: ['ait', 'a'], correct: 0 },
  ],
  steps: STEPS('Le mot place le curseur', 'Le curseur mal placé'),
  audio: REC('rec-b2-20-piege-echelle'),
  say: REFRAME,
  terms: ['echelle'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Soit ou sera, ait ou a',
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['echelle'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Cinq degrés, des leçons précédentes',
  frSub: 'Du probable au pas exclu',
  examples: [
    ex(OA2(1848), 'probable : vont augmenter, l’indicatif'),
    ex(OA2(1849), 'peu probable : soient gelés, le subjonctif'),
    ex(OA2(1850), 'il se peut : revienne'),
    ex(UNI(1094), 'il n’est pas exclu : jouent, dans un texte universitaire'),
    ex(E(2069), 'il se pourrait : plus prudent encore, au conditionnel'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echelle'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Compléter : le point météo', TEXTE_A5, [
  { q: 'Premier et deuxième verbes : certain, très probable.', a: "Il est certain qu'elle touchera la ville ; il est très probable que les écoles seront fermées. Au-dessus de la moitié : l'indicatif, ici le futur." },
  { q: 'Troisième et quatrième verbes : possible, peu probable.', a: "Il est possible que des vols soient annulés ; il est peu probable que le courant soit coupé. En dessous : le subjonctif, même pour demain." },
  { q: 'Dernier verbe : il est douteux que les routes (être) dégagées.', a: "Soient dégagées : douteux, le subjonctif." },
  { q: 'Classe les cinq tournures, de la plus sûre à la moins sûre.', a: "Certain, très probable, possible, peu probable, douteux." },
], 'rec-b2-20-texte-a5', ['echelle']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le curseur', 'Tu y crois à plus d’une chance sur deux. Tu écris…',
    ['il est probable que + indicatif', 'il est possible que + subjonctif'], 0,
    'Au-dessus de la moitié : probable, l’indicatif. EN: probable.'),
  ctl('Le mode', '« Il est peu probable que la tempête … avant la nuit. »',
    ['faiblisse', 'faiblira'], 0,
    'Peu probable : le subjonctif. EN: faiblisse.'),
  ctl('Le passé', '« Il est possible que la ville … la tempête. » (c’est fait)',
    ['ait sous-estimé', 'a sous-estimé'], 0,
    'Le subjonctif passé. EN: ait sous-estimé.'),
], ['echelle']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Probable ou possible',
    opener: {
      line: "Une tempête qui arrive, et un porte-parole qui pèse chaque mot : ici tu places tes affirmations sur une échelle, du certain au douteux. EN: A storm coming in and a spokesperson weighing every word: here you place your claims on a scale from certain to doubtful.",
      imageRef: 'lessons/tournures-impersonnelles/act05.jpg',
    },
    sections: [],
    milestone: "Tu places une affirmation au-dessus ou en dessous d'une chance sur deux, et le mode suit : l'indicatif pour probable, le subjonctif pour possible. EN: You can place a claim above or below even odds and pick the mood.",
    estScreens: 40, restPoints: ['a5-construire', 'a5-piege'],
  },
  sections: [A5_ECOUTE, A5_CARTES, A5_CONSTRUIRE, A5_PIEGE, A5_DICTEE, A5_EXEMPLES, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: LA NÉGATION ET LA QUESTION
 *
 *  Deny a certainty and the subjunctive comes in (written norm; the present
 *  indicative there is named as spoken); deny a doubt and the indicative
 *  comes back. The inverted question: both moods, two meanings (lesson 6
 *  in B2), tested for meaning only.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'L’article de Tom',
  frSub: 'Une rédactrice qui retire les certitudes',
  setting: 'Bruxelles, la rédaction d’un quotidien. Nora, rédactrice en chef, relit l’article de Tom avant publication ; l’enquête n’est pas terminée.',
  bubbles: [
    { from: 'narrator', fr: 'Tom a écrit « il est certain » partout. Nora reprend ses phrases une par une.', en: 'Tom wrote « il est certain » everywhere. Nora goes through his sentences one by one.' },
    { from: 'user', fr: F(2083), en: en(E(2083)) },
    { from: 'coach', fr: 'Tu n’en sais rien encore. Nie la certitude, et le subjonctif arrive.', en: 'You do not know that yet. Deny the certainty and the subjunctive comes in.', warn: 'Une certitude niée' },
    { from: 'user', fr: F(2082), en: en(E(2082)) },
    { from: 'coach', fr: 'Le lecteur comprend que le journal n’affirme plus rien.', en: 'The reader understands the paper is no longer asserting anything.', warn: 'Le subjonctif' },
    { from: 'user', fr: F(2089), en: en(E(2089)) },
    { from: 'coach', fr: 'Ici, tu nies un doute : c’est une affirmation, l’indicatif reste.', en: 'Here you deny a doubt: that is an assertion, the indicative stays.', warn: 'Aucun doute' },
    { from: 'user', fr: F(2085), en: en(E(2085)) },
    { from: 'coach', fr: 'Deux négations, et toujours une simple possibilité : le subjonctif passé.', en: 'Two negatives, and still only a possibility: the subjonctif passé.', warn: 'Pas impossible' },
  ],
  closing: { fr: 'Nier une certitude, c’est douter ; nier un doute, c’est affirmer.', en: 'Denying a certainty is doubting; denying a doubt is asserting.' },
  audio: REC('rec-b2-20-nora'),
  say: REFRAME,
  terms: ['negation'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-certitude',
  title: 'Quand le non fait basculer le mode',
  frSub: 'La négation, puis la question',
  hint: 'Quatre cartes. La dernière accepte les deux modes.',
  audio: REC('rec-b2-20-negation'),
  say: REFRAME,
  terms: ['negation'],
  cards: [
    card(E(2082), 'La certitude niée', 'subjonctif',
      "Il n'est pas certain, pas sûr, pas clair, pas prouvé que : la certitude est retirée, le subjonctif arrive. À l'oral, on entend parfois l'indicatif ; à l'écrit, le subjonctif. EN: denied certainty, subjunctive."),
    card(E(2089), 'Le doute nié', 'indicatif',
      "Il ne fait aucun doute que : nier le doute, c'est affirmer. L'indicatif. Il n'est pas douteux que suit la même règle, en plus soutenu. EN: denied doubt, indicative."),
    card(E(2085), 'Pas impossible', 'deux négations',
      "Il n'est pas impossible, il n'est pas exclu que : deux négations ne font pas une certitude, seulement une possibilité. Le subjonctif. EN: not impossible only means possible."),
    card(E(2087), 'La question', Cap(MODES_REF),
      "Est-il certain que la réunion ait eu lieu ? Le subjonctif met en doute. Est-il vrai que le maire a démissionné ? L'indicatif demande simplement. Les deux sont corrects. EN: in an inverted question, both moods, two meanings."),
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Lis la négation',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('La certitude niée', [
      itE(2082, 'pas certain : soit'),
      itE(2084, 'pas sûr : aboutisse'),
      itE(2094, 'pas clair : soit'),
      itE(2096, 'pas prouvé : soit'),
    ], chk('À l’écrit : « Il n’est pas sûr que l’enquête … cette année. »',
      ['aboutisse', 'aboutit'], 0,
      'La certitude est niée : le subjonctif. EN: aboutisse.')),
    grp('Le doute nié', [
      itE(2089, 'aucun doute : ont été'),
      itE(2093, 'aucun doute : peut'),
      itE(2090, 'pas douteux : parlera'),
      itE(2095, 'clair : est'),
    ], chk('À l’écrit, quel début va avec « … que les chiffres ont été vérifiés » ?',
      ['Il ne fait aucun doute', 'Il n’est pas certain'], 0,
      'Ont été, un indicatif : aucun doute. EN: no doubt.')),
    grp('La question', [
      itE(2087, 'la question qui doute'),
      itE(2088, 'la question simple'),
      it(OA2(1858), 'pas certain : suffise'),
      it(OA1(1286), 'pas certain : parte'),
    ], chk('« Est-il certain que la réunion ait eu lieu ? » La personne…',
      ['met la réunion en doute', 'demande simplement si la réunion a eu lieu'], 0,
      'Avec l’inversion, le subjonctif doute. EN: she doubts it.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['negation'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'La négation oubliée',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Regarde la phrase entière',
    body: "Le mot ne suffit pas : lis aussi ne… pas. À l'écrit, il est certain que prend l'indicatif, il n'est pas certain que le subjonctif. Il est douteux que prend le subjonctif, il ne fait aucun doute que l'indicatif. EN: read the negation too.",
  },
  cards: [
    trap(2082, 'certitude niée + indicatif', "Il n'est pas certain que le ministre est au courant.", 'À l’écrit : soit. EN: soit.'),
    trap(2084, 'pas sûr + indicatif', "Il n'est pas sûr que l'enquête aboutit cette année.", 'Pas sûr : aboutisse. EN: aboutisse.'),
    trap(2086, 'pas probable + indicatif', "Il n'est pas probable que la commission se réunit avant l'été.", 'Pas probable : réunisse. EN: réunisse.'),
    trap(2085, 'pas impossible + indicatif', "Il n'est pas impossible que le rapport a été modifié.", 'Une possibilité : ait été. EN: ait été.'),
    trap(2095, 'clair + subjonctif', 'Il est clair que la source soit fiable.', 'Clair affirme : est. EN: est.'),
    trap(2097, 'prouvé + subjonctif', 'Il est prouvé que le document soit authentique.', 'Prouvé affirme : est. EN: est.'),
  ],
  drill: [
    { promptSay: 'À l’écrit : il n’est pas certain que le ministre … au courant.', opts: ['soit', 'est'], correct: 0 },
    { promptSay: 'Il est certain que le ministre … au courant.', opts: ['soit', 'est'], correct: 1 },
    { promptSay: 'Il ne fait aucun doute que le journal … publier l’article.', opts: ['peut', 'pouvoir'], correct: 0 },
    { promptSay: 'Il n’est pas sûr que l’enquête … cette année.', opts: ['aboutisse', 'aboutit'], correct: 0 },
    { promptSay: 'Il est clair que la source … fiable.', opts: ['soit', 'est'], correct: 1 },
    { promptSay: 'Il n’est pas impossible que le rapport … été modifié.', opts: ['ait', 'a'], correct: 0 },
    { promptSay: 'Il n’est pas probable que la commission … avant l’été.', opts: ['se réunit', 'se réunisse'], correct: 1 },
    { promptSay: 'Il est prouvé que le document … authentique.', opts: ['est', 'soit'], correct: 0 },
  ],
  steps: STEPS('Regarde la phrase entière', 'La négation oubliée'),
  audio: REC('rec-b2-20-piege-negation'),
  say: REFRAME,
  terms: ['negation'],
};

const A6_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a6-hacks',
  layer: 'core',
  sheetId: 'sheet-certitude',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Avant de choisir le mode, lis toute l’expression, ne… pas compris.', why: "Il est certain et il n'est pas certain ne prennent pas le même mode. EN: the negation changes the mood." },
    { hack: 'Remplace par « je suis sûr que » : si la phrase affirme toujours, garde l’indicatif.', why: "Il ne fait aucun doute que, c'est je suis sûr que : l'indicatif. Il n'est pas certain que, c'est je ne suis pas sûr que : le subjonctif. EN: test with je suis sûr." },
    { hack: 'Deux négations ne font pas une certitude.', why: "Il n'est pas impossible que veut dire c'est possible, rien de plus : le subjonctif. EN: not impossible means possible." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['negation'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Réécrire : le rectificatif', TEXTE_A6, [
  { q: 'Les trois phrases entre crochets, à la forme négative.', a: "Il n'est pas certain que le ministre soit au courant. Il n'est pas clair que la source soit fiable. Il n'est pas prouvé que le document soit authentique. La certitude est retirée : le subjonctif." },
  { q: 'La dernière phrase : il ne fait aucun doute que les chiffres (avoir) été vérifiés.', a: "Ont été vérifiés : nier le doute, c'est affirmer, l'indicatif." },
  { q: 'Pourquoi le journal publie-t-il ce rectificatif ?', a: "Parce qu'il avait présenté comme certains des faits que l'enquête n'a pas prouvés ; il corrige son degré d'engagement, pas seulement les faits." },
  { q: 'Qu’est-ce qui reste sûr, selon la rédaction ?', a: "Seulement que les chiffres ont été vérifiés." },
], 'rec-b2-20-texte-a6', ['negation']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La négation', 'À l’écrit, après « il n’est pas certain que »…',
    ['le subjonctif', 'l’indicatif'], 0,
    'La certitude est niée. EN: the subjunctive.'),
  ctl('Le doute nié', '« Il ne fait aucun doute que… » : la phrase…',
    ['affirme', 'doute'], 0,
    'Nier le doute, c’est affirmer. EN: it asserts.'),
  ctl('La question', '« Est-il certain que la réunion ait eu lieu ? »',
    ['la personne doute', 'la personne demande l’heure'], 0,
    'Le subjonctif, dans la question, met en doute. EN: she doubts.'),
], ['negation']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'La négation et la question',
    opener: {
      line: "Un article qui affirmait trop, et une rédactrice qui corrige : ici tu vois le mode basculer quand la négation arrive. EN: An article that claimed too much and an editor who corrects it: here you watch the mood flip when a negation comes in.",
      imageRef: 'lessons/tournures-impersonnelles/act06.jpg',
    },
    sections: [],
    milestone: "Tu mets le subjonctif après une certitude niée, l'indicatif après un doute nié, et tu lis une question inversée pour ce qu'elle veut dire. EN: You can flip the mood after a negation and read an inverted question for its meaning.",
    estScreens: 38, restPoints: ['a6-construire', 'a6-piege'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_PIEGE, A6_HACKS, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: IL SEMBLE, IL PARAÎT, IL S'AVÈRE
 *
 *  Where a claim comes from. POLICY (lesson 15 in B2): « il semble que » is
 *  taught with the subjunctive; the indicative after it is never a wrong
 *  option and every type-in accepts it.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La nouvelle ligne, à la radio',
  frSub: 'Huit phrases, quatre sources',
  lines: [lnE(2098), lnE(2099), lnE(2100), lnE(2101), lnE(2102), lnE(2104), lnE(2111), lnE(2109)],
  questions: [
    { q: 'Première phrase : c’est…', opts: ['une impression', 'un fait vérifié'], correct: 0, why: 'Il semble que : une impression. EN: an impression.' },
    { q: 'Deuxième phrase : qui parle ?', opts: ['quelqu’un qui donne son avis', 'quelqu’un qui répète une rumeur'], correct: 0, why: 'Il me semble que : un avis. EN: an opinion.' },
    { q: 'Troisième phrase : les billets gratuits sont-ils confirmés ?', opts: ['non, c’est une rumeur', 'oui'], correct: 0, why: 'Il paraît que : on l’a entendu dire. EN: hearsay.' },
    { q: 'Cinquième phrase : la durée du chantier est-elle vérifiée ?', opts: ['oui', 'non'], correct: 0, why: 'Il s’avère que : c’est vérifié. EN: yes.' },
    { q: 'Septième phrase : la rumeur était-elle vraie ?', opts: ['non', 'oui'], correct: 0, why: 'Il s’est avéré qu’elle était fausse. EN: no.' },
  ],
  audio: REC('rec-b2-20-dakar-ecoute'),
  say: REFRAME,
  terms: ['source'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-certitude',
  title: 'D’où vient ce que tu dis',
  frSub: 'Rumeur, impression, avis, fait',
  hint: 'Quatre cartes, quatre sources.',
  audio: REC('rec-b2-20-source'),
  say: REFRAME,
  terms: ['source'],
  cards: [
    card(E(2098), 'Il semble que', Cap(CAUSE_REF),
      "Une impression, souvent tirée d'indices : le subjonctif à l'écrit. L'indicatif se lit aussi chez de bons auteurs, et il n'est pas compté faux. Il semblerait que : plus prudent encore. EN: an impression, subjunctive in writing."),
    card(E(2099), 'Il me semble que', 'un avis',
      "Avec me, te, lui, c'est un avis personnel, presque je pense que : l'indicatif. À la forme négative, il ne me semble pas que, le subjonctif revient. EN: a personal opinion, indicative."),
    card(E(2100), 'Il paraît que', 'une rumeur',
      "Il paraît que ne mesure pas une probabilité : il rapporte ce qu'on a entendu, sans le garantir. L'indicatif. Paraît-il, à ce qu'il paraît : même sens. EN: hearsay, not probability."),
    card(E(2102), 'Il s’avère que', 'un fait vérifié',
      "Il s'avère que, il s'est avéré que : le fait a été vérifié. Il se trouve que : c'est ainsi, par hasard. L'indicatif. EN: it turns out; verified."),
  ],
};

const A7_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-trier',
  layer: 'core',
  size: 'lg',
  title: 'Trie par source',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Une impression ou un avis', [
      itE(2098, 'il semble : une impression'),
      itE(2107, 'il semble : d’après les chiffres'),
      itE(2099, 'il me semble : un avis'),
      itE(2113, 'il me semble : un avis'),
    ], chk('« Il me semble que ce reportage manque de chiffres. » C’est…',
      ['l’avis de la personne qui parle', 'une rumeur'], 0,
      'Il me semble que : un avis. EN: an opinion.')),
    grp('Une rumeur', [
      itE(2100, 'il paraît'),
      itE(2104, 'paraît-il'),
      itE(2110, 'à ce qu’il paraît'),
      it(OA1(1364), 'il paraît'),
    ], chk('« Il paraît que la ligne … prolongée jusqu’à l’aéroport. »',
      ['sera', 'soit'], 0,
      'Il paraît que : l’indicatif. EN: sera.')),
    grp('Un fait vérifié', [
      itE(2102, 'il s’avère'),
      itE(2111, 'il s’est avéré'),
      itE(2103, 'il se trouve'),
    ], chk('Laquelle présente un fait vérifié ?',
      ['Il s’avère que la ligne a été construite en deux ans.', 'Il paraît que la ligne a été construite en deux ans.'], 0,
      'Il s’avère que : vérifié. EN: il s’avère.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['source'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre sources brouillées',
  errors: [
    {
      wrong: 'Il paraît que les billets soient gratuits le premier mois.',
      right: F(2100),
      why: "Normal : paraître ressemble à sembler. Mais il paraît que rapporte une nouvelle : l'indicatif, seront. EN: il paraît que takes the indicative.",
    },
    {
      wrong: 'Il me semble que la nouvelle ligne soit en avance.',
      right: F(2099),
      why: "Normal : il semble que prend le subjonctif, et me paraît tout petit. Mais il me semble que donne ton avis : l'indicatif. EN: il me semble que takes the indicative.",
    },
    {
      wrong: "D'après les premiers chiffres, il paraît que la fréquentation dépasse les prévisions.",
      right: F(2107),
      why: "Normal : en anglais, it appears that sert pour des chiffres. En français, il paraît que rapporte une rumeur ; pour une impression tirée de chiffres : il semble que. EN: il paraît is hearsay.",
    },
    {
      wrong: "Il s'est avéré que la rumeur soit fausse.",
      right: F(2111),
      why: "Normal : on doutait de la rumeur, alors le subjonctif s'invite. Mais il s'avère que présente un fait vérifié : l'indicatif, était. EN: a verified fact.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['source'],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  title: 'Cinq phrases, cinq sources',
  frSub: 'Des leçons précédentes et de celle-ci',
  examples: [
    ex(OA2(1856), 'il semble que : soient, une impression'),
    ex(OA2(1857), 'il me semble que : sont, un avis'),
    ex(OA1(1359), 'il me semble que : l’indicatif'),
    ex(CL1966, 'il semblerait que : plus prudent, dans une analyse'),
    ex(E(2105), 'il ne me semble pas que : le subjonctif revient'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['source'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Trier : le journal de la radio', TEXTE_A7, [
  { q: 'Première phrase : la construction en deux ans.', a: "Un fait vérifié : il s'avère que, avec l'indicatif." },
  { q: 'Deuxième phrase : la fréquentation.', a: "Une impression, tirée des premiers chiffres : il semble que." },
  { q: 'Troisième phrase : les billets gratuits.', a: "Une rumeur : il paraît que, et la société ne l'a pas confirmé." },
  { q: 'Dernière phrase : la reporter.', a: "Un avis : il me semble que, avec l'indicatif, suivi d'une réserve (il faut attendre le bilan)." },
], 'rec-b2-20-texte-a7', ['source']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La rumeur', '« Il paraît que… » rapporte…',
    ['ce qu’on a entendu dire', 'une probabilité calculée'], 0,
    'Une rumeur, pas une probabilité. EN: hearsay.'),
  ctl('L’avis', '« Il me semble que la ligne … en avance. »',
    ['est', 'soit'], 0,
    'Un avis : l’indicatif. EN: est.'),
  ctl('Le fait', '« Il s’avère que… » présente…',
    ['un fait vérifié', 'une impression'], 0,
    'Vérifié. EN: a verified fact.'),
], ['source']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Il semble, il paraît',
    opener: {
      line: "Une nouvelle ligne de bus, et quatre façons d'en parler : ici tu dis d'où vient ce que tu avances, rumeur, impression, avis ou fait vérifié. EN: A new bus line and four ways to talk about it: here you say where your claim comes from.",
      imageRef: 'lessons/tournures-impersonnelles/act07.jpg',
    },
    sections: [],
    milestone: "Tu sépares il paraît que (une rumeur), il semble que (une impression), il me semble que (ton avis) et il s'avère que (un fait vérifié). EN: You can tell hearsay, impression, opinion and verified fact apart.",
    estScreens: 36, restPoints: ['a7-cartes', 'a7-trier'],
  },
  sections: [A7_ECOUTE, A7_CARTES, A7_TRIER, A7_ERREURS, A7_EXEMPLES, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: IL EST DOMMAGE QUE, IL EST TEMPS QUE
 *
 *  A judgement takes the subjunctive, even about a certain fact (lesson 15
 *  in B1); the subjonctif passé for a finished fact; de for everyone, que
 *  for someone; il est in writing, c'est in speech (lesson 22 in B1).
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Le bilan de la fête',
  frSub: 'Réussites, regrets, reproches',
  setting: 'Lyon, au lendemain de la Fête des Lumières. Inès, qui coordonne les bénévoles, rédige le bilan avec Hugo.',
  bubbles: [
    { from: 'narrator', fr: 'Inès veut un bilan juste : ce qui s’est bien passé, ce qui a déçu, ce qu’il faut changer.', en: 'Inès wants a fair review: what went well, what disappointed, what must change.' },
    { from: 'user', fr: F(2121), en: en(E(2121)) },
    { from: 'coach', fr: 'Il est heureux que : un jugement positif, et le subjonctif passé pour un fait fini.', en: 'Il est heureux que: a positive judgement, and the subjonctif passé for a finished fact.', warn: 'Un jugement' },
    { from: 'user', fr: F(2114), en: en(E(2114)) },
    { from: 'coach', fr: 'La navette a bien été supprimée, c’est sûr. Tu la juges : le subjonctif.', en: 'The shuttle really was cut, that is certain. You judge it: the subjunctive.', warn: 'Un fait sûr, jugé' },
    { from: 'user', fr: F(2118), en: en(E(2118)) },
    { from: 'coach', fr: 'Un regret pour tout le monde : de + infinitif. Personne de précis.', en: 'A regret for everyone: de + infinitive. No one in particular.', warn: 'De + infinitif' },
    { from: 'user', fr: F(2117), en: en(E(2117)) },
    { from: 'coach', fr: 'Il est temps que : un reproche, et un appel. Revoie, au subjonctif.', en: 'Il est temps que: a reproach, and a call to act. Revoie, in the subjunctive.', warn: 'Il est temps que' },
  ],
  closing: { fr: 'Un jugement, même sur un fait sûr, prend le subjonctif.', en: 'A judgement, even about a certain fact, takes the subjunctive.' },
  audio: REC('rec-b2-20-ines'),
  say: REFRAME,
  terms: ['jugement'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-jugement',
  title: 'Juger un fait',
  frSub: 'Le subjonctif, même pour un fait sûr',
  hint: 'Quatre cartes. La dernière change de registre.',
  audio: REC('rec-b2-20-jugement'),
  say: REFRAME,
  terms: ['jugement', 'registre'],
  cards: [
    card(E(2116), 'Juger un fait sûr', Cap(DECL_REF),
      "Il est normal, dommage, regrettable, étonnant, heureux, temps que : tu juges, tu n'affirmes pas. Le subjonctif, même si le fait est certain. EN: a judgement takes the subjunctive."),
    card(E(2114), 'Un fait passé', 'subjonctif passé',
      "Le fait jugé est fini : le subjonctif passé, ait été supprimée, aient répondu. EN: a finished fact, subjonctif passé."),
    card(E(2118), 'De ou que', Cap(SUBJ_INF_REF),
      "Il est dommage de fermer les quais : pour tout le monde. Il est dommage que la mairie ferme les quais : pour quelqu'un de précis. EN: de for everyone, que for someone."),
    card(E(2120), 'Il est ou c’est', Cap(CEST_REF),
      `« ${B122_REFRAME} » Il est dommage que dans un rapport ; c'est dommage que à l'oral ; dommage que, tout seul, encore plus familier. EN: ${B122_REFRAME_EN}`),
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le jugement, puis la forme',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Le jugement : subjonctif', [
      itE(2116, 'normal : veuillent'),
      itE(2117, 'temps : revoie'),
      itE(2127, 'temps : tienne'),
      itE(2129, 'souhaitable : finisse'),
    ], chk('« Il est normal que les riverains … du calme. »',
      ['veuillent', 'veulent'], 0,
      'Un jugement : subjonctif. EN: veuillent.')),
    grp('Un fait passé', [
      itE(2114, 'regrettable : ait été'),
      itE(2115, 'étonnant : aient répondu'),
      itE(2121, 'heureux : se soit arrêtée'),
      itE(2122, 'inadmissible : aient été'),
    ], chk('« Il est étonnant que si peu de bénévoles … hier. »',
      ['aient répondu', 'ont répondu'], 0,
      'Un jugement sur un fait fini : le subjonctif passé. EN: aient répondu.')),
    grp('De ou que', [
      itE(2118, 'pour tous : de'),
      itE(2119, 'la mairie : que'),
      itE(2123, 'pour tous : de'),
      itE(2120, 'à l’oral : c’est'),
    ], chk('Un reproche à la mairie :',
      ['Il est dommage que la mairie ferme les quais si tôt.', 'Il est dommage de la mairie fermer les quais si tôt.'], 0,
      'Quelqu’un de précis : que + subjonctif. EN: que.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jugement'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Des jugements à l’indicatif',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Juger, ce n’est pas affirmer',
    body: "Il est dommage, regrettable, étonnant, normal, temps que : le subjonctif, même pour un fait sûr, et le subjonctif passé pour un fait fini. Pour tout le monde : de + infinitif. EN: judgements take the subjunctive.",
  },
  cards: [
    trap(2116, 'normal + indicatif', 'Il est normal que les riverains veulent du calme après minuit.', 'Veuillent. EN: veuillent.'),
    trap(2115, 'étonnant + indicatif', 'Il est étonnant que si peu de bénévoles ont répondu.', 'Aient répondu. EN: aient.'),
    trap(2117, 'temps + indicatif', 'Il est temps que la ville revoit son plan de circulation.', 'Revoie. EN: revoie.'),
    trap(2121, 'heureux + indicatif', 'Il est heureux que la pluie s’est arrêtée à temps.', 'Se soit arrêtée. EN: se soit.'),
    trap(2118, 'de oublié', 'Il est dommage fermer les quais si tôt.', 'Il est dommage de + infinitif. EN: de.'),
    trap(2119, 'que sans sujet', 'Il est dommage que fermer les quais si tôt.', 'Que demande un sujet : que la mairie ferme. EN: que needs a subject.'),
  ],
  drill: [
    { promptSay: 'Il est normal que les riverains … du calme.', opts: ['veulent', 'veuillent'], correct: 1 },
    { promptSay: 'Il est temps que la mairie … compte des riverains.', opts: ['tienne', 'tient'], correct: 0 },
    { promptSay: 'Il est dommage … fermer les quais si tôt.', opts: ['de', 'que'], correct: 0 },
    { promptSay: 'Il est regrettable que le programme … publié si tard.', opts: ['ait été', 'a été'], correct: 0 },
    { promptSay: 'Il est étonnant que si peu de bénévoles … répondu.', opts: ['ont', 'aient'], correct: 1 },
    { promptSay: 'Dans un rapport soigné, la forme attendue : … dommage que la navette ait disparu.', opts: ['Il est', 'C’est'], correct: 0 },
    { promptSay: 'Il serait souhaitable que la fête … plus tôt.', opts: ['finisse', 'finit'], correct: 0 },
    { promptSay: 'Il est heureux que la pluie se … arrêtée à temps.', opts: ['soit', 'est'], correct: 0 },
  ],
  steps: STEPS('Juger, ce n’est pas affirmer', 'Des jugements à l’indicatif'),
  audio: REC('rec-b2-20-piege-jugement'),
  say: REFRAME,
  terms: ['jugement'],
};

const A8_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a8-flash',
  layer: 'core',
  title: 'Huit jugements',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'it is regrettable that', back: 'il est regrettable que', say: F(2114) },
    { front: 'it is surprising that', back: 'il est étonnant que', say: F(2115) },
    { front: 'it is understandable that', back: 'il est normal que', say: F(2116) },
    { front: 'it is time (that)', back: 'il est temps que', say: F(2117) },
    { front: 'it is fortunate that', back: 'il est heureux que', say: F(2121) },
    { front: 'it is unacceptable that', back: 'il est inadmissible que', say: F(2122) },
    { front: 'it is natural to', back: 'il est naturel de', say: F(2123) },
    { front: 'it would be preferable that', back: 'il serait souhaitable que', say: F(2129) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jugement'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Compléter : le bilan des bénévoles', TEXTE_A8, [
  { q: 'Les deux premiers verbes : s’arrêter, être supprimée.', a: "Il est heureux que la pluie se soit arrêtée ; il est regrettable que la navette ait été supprimée. Deux faits finis, deux subjonctifs passés." },
  { q: 'Vouloir et revoir.', a: "Il est normal que les riverains veuillent du calme ; il est temps que la ville revoie son plan. Le subjonctif présent." },
  { q: 'Fermer et finir.', a: "Il est dommage de fermer les quais (pour tout le monde, l'infinitif) ; il serait souhaitable que la fête finisse plus tôt (le subjonctif)." },
  { q: 'Ce bilan est-il écrit ou oral ? Comment le sais-tu ?', a: "Écrit : il est heureux, il est regrettable, il est dommage de. À l'oral, on dirait plutôt c'est dommage." },
], 'rec-b2-20-texte-a8', ['jugement']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le passé', '« Il est regrettable que la navette … supprimée. » (c’est fait)',
    ['ait été', 'a été'], 0,
    'Un jugement sur un fait fini. EN: ait été.'),
  ctl('De ou que', 'Un regret pour tout le monde :',
    ['il est dommage de partir si tôt', 'il est dommage que partir si tôt'], 0,
    'Pour tout le monde : de + infinitif. EN: de.'),
  ctl('Le registre', 'Dans un bilan écrit, la forme attendue :',
    ['il est dommage que', 'c’est dommage que'], 0,
    'Il est : la forme de l’écrit. EN: il est.'),
], ['jugement', 'registre']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Il est dommage que',
    opener: {
      line: "Un bilan de fête, avec ses réussites et ses ratés : ici tu juges un fait, même sûr, et le subjonctif suit. EN: A festival review with its successes and failures: here you judge a fact, even a certain one, and the subjunctive follows.",
      imageRef: 'lessons/tournures-impersonnelles/act08.jpg',
    },
    sections: [],
    milestone: "Tu juges un fait au subjonctif, présent ou passé, tu choisis de ou que, et tu écris il est dans un rapport. EN: You can judge a fact in the subjunctive, choose de or que, and write il est in a report.",
    estScreens: 38, restPoints: ['a8-construire', 'a8-piege'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_PIEGE, A8_FLASH, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: IL A ÉTÉ DÉCIDÉ QUE
 *
 *  The impersonal passive in notices and minutes (lesson 18 in B1): nobody
 *  signs, and the hidden verb picks the mood. Mood tests use rappeler,
 *  constater and exiger, never décider (open question 4).
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Les avis de la semaine',
  frSub: 'Des règles que personne ne signe',
  setting: 'Toulouse, une résidence étudiante. Mme Garcia, la directrice, dicte les avis de la semaine à Yanis, étudiant et assistant à mi-temps.',
  bubbles: [
    { from: 'narrator', fr: 'Mme Garcia veut des avis clairs, que personne ne prendra pour une attaque personnelle.', en: 'Mme Garcia wants clear notices that nobody will take as a personal attack.' },
    { from: 'user', fr: F(2130), en: en(E(2130)) },
    { from: 'coach', fr: 'Il a été décidé que : la décision est affirmée, mais personne ne la signe. L’indicatif.', en: 'Il a été décidé que: the decision is stated, but nobody signs it. The indicative.', warn: 'Il a été décidé' },
    { from: 'user', fr: F(2133), en: en(E(2133)) },
    { from: 'coach', fr: 'Il est demandé que : on veut quelque chose, donc le subjonctif.', en: 'Il est demandé que: something is wanted, so the subjunctive.', warn: 'Il est demandé que' },
    { from: 'user', fr: F(2132), en: en(E(2132)) },
    { from: 'coach', fr: 'Avec les personnes : il est demandé aux résidents de, puis l’infinitif.', en: 'With the people named: il est demandé aux résidents de, then the infinitive.', warn: 'De + infinitif' },
    { from: 'user', fr: F(2139), en: en(E(2139)) },
    { from: 'coach', fr: 'Sur l’affiche, il est interdit de. Dans le couloir, Yanis dira : on ne peut pas fumer.', en: 'On the notice, il est interdit de. In the corridor, Yanis will say: on ne peut pas fumer.', warn: 'L’affiche' },
  ],
  closing: { fr: 'Personne ne signe ; le verbe, lui, choisit toujours le mode.', en: 'Nobody signs; the verb still picks the mood.' },
  audio: REC('rec-b2-20-garcia'),
  say: REFRAME,
  terms: ['distance'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-distance',
  title: 'Prendre de la distance',
  frSub: 'Le passif impersonnel',
  hint: 'Quatre cartes. La dernière est à reconnaître.',
  audio: REC('rec-b2-20-distance'),
  say: REFRAME,
  terms: ['distance'],
  cards: [
    card(E(2130), 'Personne ne signe', Cap(PASSIF_REF),
      `« ${B118_REFRAME} » Il a été décidé, convenu, constaté que : l'avis ne dit pas qui décide. EN: ${B118_REFRAME_EN}`),
    card(E(2133), 'Le verbe choisit', 'indicatif ou subjonctif',
      "Décider, rappeler, prévoir, constater, convenir affirment : l'indicatif. Demander, exiger, souhaiter veulent : le subjonctif. EN: statement verbs indicative, wish verbs subjunctive."),
    card(E(2139), 'L’affiche et le couloir', 'le registre',
      "Il est interdit de, il est recommandé de : la voix du règlement. On ne peut pas, il vaut mieux : la voix de la conversation. Les deux sont corrects. EN: the notice and the corridor."),
    card(E(2140), 'Reconnaître', 'soutenu',
      "Il sera procédé à, il est question de : des tournures d'avis et de compte rendu, à reconnaître plus qu'à employer. EN: formal, to recognise."),
  ],
};

const A9_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-table',
  layer: 'core',
  sheetId: 'sheet-distance',
  title: 'Sur l’affiche, dans le couloir',
  cols: ['Sur l’affiche', 'Dans le couloir', 'Mode'],
  rows: [
    { cells: ['il est interdit de fumer', 'on ne peut pas fumer', 'infinitif'], say: F(2139),
      detail: { title: 'interdire', body: "Même règle, deux voix : le règlement, puis la conversation. EN: same rule, two voices.", say: F(2138) } },
    { cells: ['il est demandé aux résidents de trier', 'il faut trier, s’il te plaît', 'infinitif'], say: F(2132),
      detail: { title: 'demander à quelqu’un', body: "Il est demandé à quelqu'un de + infinitif. EN: asked to.", say: F(2132) } },
    { cells: ['il est demandé que chaque chambre soit libérée', 'il faut libérer la chambre', 'subjonctif'], say: F(2133),
      detail: { title: 'demander que', body: "Demander, c'est vouloir : que + subjonctif. EN: subjunctive.", say: F(2144) } },
    { cells: ['il a été décidé que la salle fermerait', 'la salle va fermer à 22 h', 'indicatif'], say: F(2130),
      detail: { title: 'décider', body: "Une décision affirmée : l'indicatif, souvent le conditionnel d'un futur vu du passé. EN: indicative.", say: F(2136) } },
    { cells: ['il est rappelé que les visites sont interdites', 'je te rappelle que c’est interdit', 'indicatif'], say: F(2131),
      detail: { title: 'rappeler', body: "Un rappel affirme un fait : l'indicatif. EN: indicative.", say: F(2131) } },
    { cells: ['il est recommandé de fermer sa fenêtre', 'ferme ta fenêtre en partant', 'infinitif'], say: F(2137),
      detail: { title: 'recommander', body: "Un conseil sans destinataire précis : de + infinitif. EN: advice to all.", say: fr(DPO(1113)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['distance', 'registre'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le verbe caché',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Affirmer : l’indicatif', [
      itE(2130, 'décidé'),
      itE(2131, 'rappelé'),
      itE(2134, 'prévu'),
      itE(2136, 'convenu'),
    ], chk('« Il est rappelé que les visites … interdites après minuit. »',
      ['sont', 'soient'], 0,
      'Rappeler un fait : l’indicatif. EN: sont.')),
    grp('Vouloir : le subjonctif', [
      itE(2133, 'demandé que'),
      itE(2144, 'exigé que'),
      itE(2132, 'demandé de'),
      itE(2137, 'recommandé de'),
    ], chk('« Il est exigé que chaque résident … une assurance habitation. »',
      ['ait', 'a'], 0,
      'Exiger, c’est vouloir : ait. EN: ait.')),
    grp('L’affiche ou le couloir', [
      itE(2139, 'l’affiche'),
      itE(2138, 'le couloir'),
      it(FP1072, 'l’affiche'),
      itE(2146, 'un projet, sans auteur'),
    ], chk('Le plus naturel pour prévenir un ami dans le couloir :',
      ['On ne peut pas fumer dans la résidence.', "Il est interdit de fumer dans l'enceinte de la résidence."], 0,
      'À un ami : la voix de la conversation. EN: on ne peut pas.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['distance'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre avis de travers',
  errors: [
    {
      wrong: 'Il est rappelé que les visites soient interdites après minuit.',
      right: F(2131),
      why: "Normal : un avis officiel sonne comme un ordre, alors le subjonctif vient. Mais rappeler affirme un fait : sont. EN: rappeler asserts.",
    },
    {
      wrong: 'Il est exigé que chaque résident a une assurance habitation.',
      right: F(2144),
      why: "Normal : l'assurance existe, c'est un fait. Mais exiger, c'est vouloir : ait. EN: exiger wants.",
    },
    {
      wrong: 'Il est demandé aux résidents qu’ils trient leurs déchets.',
      right: F(2132),
      why: "Normal : en anglais, it is requested that residents sort… Avec une personne après demander, le français prend de + infinitif. EN: demander à quelqu'un de.",
    },
    {
      wrong: 'Il sera procédé à contrôler les extincteurs lundi.',
      right: F(2140),
      why: "Normal : procéder ressemble à commencer à. Mais il sera procédé à prend un nom : à un contrôle. EN: procéder à + noun.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['distance'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Compléter : l’avis de la résidence', TEXTE_A9, [
  { q: 'Premier et deuxième verbes : fermer (au conditionnel), être.', a: "Il a été décidé que la salle de sport fermerait ; il est rappelé que les visites sont interdites. Décider et rappeler affirment : l'indicatif." },
  { q: 'Troisième verbe : il est demandé que chaque chambre (être) libérée.', a: "Soit libérée : demander, c'est vouloir, le subjonctif." },
  { q: 'Quatrième et cinquième verbes : durer (au futur), avoir.', a: "Il est prévu que les travaux dureront trois semaines (prévoir affirme) ; il est exigé que chaque résident ait une assurance (exiger veut)." },
  { q: 'Qui a pris ces décisions ?', a: "L'avis ne le dit pas : il a été décidé, il est demandé. La direction signe l'avis, mais aucune phrase ne nomme qui décide." },
], 'rec-b2-20-texte-a9', ['distance']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Rappeler', 'Après « il est rappelé que »…',
    ['l’indicatif', 'le subjonctif'], 0,
    'Un rappel affirme. EN: the indicative.'),
  ctl('Exiger', '« Il est exigé que chaque résident … une assurance. »',
    ['ait', 'a'], 0,
    'Exiger : le subjonctif. EN: ait.'),
  ctl('Le registre', 'Sur l’affiche :',
    ['il est interdit de fumer', 'on peut pas fumer, hein'], 0,
    'La voix du règlement. EN: il est interdit de.'),
], ['distance']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Il a été décidé que',
    opener: {
      line: "Un hall de résidence, et des avis que personne ne signe : ici tu prends de la distance, et le verbe caché choisit toujours le mode. EN: A residence hall and notices nobody signs: here you step back, and the hidden verb still picks the mood.",
      imageRef: 'lessons/tournures-impersonnelles/act09.jpg',
    },
    sections: [],
    milestone: "Tu rédiges un avis à l'impersonnel, avec l'indicatif après décider ou rappeler et le subjonctif après demander ou exiger, et tu sais le redire dans le couloir. EN: You can write an impersonal notice with the right mood and say it again in plain speech.",
    estScreens: 38, restPoints: ['a9-table', 'a9-construire'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_TABLE, A9_CONSTRUIRE, A9_ERREURS, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: IL MANQUE DEUX CHAISES
 *
 *  Impersonal verbs with the real subject after: singular agreement, the
 *  participle unagreed; il s'agit de with no personal subject (lesson 14 in
 *  B2 owns + infinitive); il arrive que (never mood-tested); il en va de
 *  même.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'La veille du colloque',
  frSub: 'Compter avec il',
  setting: 'Abidjan, la veille d’un colloque sur l’eau potable. Fanta vérifie la salle avec Ibrahim, son assistant.',
  bubbles: [
    { from: 'narrator', fr: 'Fanta a une liste, et elle compte tout.', en: 'Fanta has a list, and she counts everything.' },
    { from: 'user', fr: F(2148), en: en(E(2148)) },
    { from: 'coach', fr: 'Manque, au singulier : le sujet du verbe, c’est il. Les chaises viennent après.', en: 'Manque, singular: the subject of the verb is il. The chairs come after.', warn: 'Il manque' },
    { from: 'user', fr: F(2151), en: en(E(2151)) },
    { from: 'coach', fr: 'Arrivé, sans accord : avec il, le participe reste masculin singulier.', en: 'Arrivé, unagreed: with il, the participle stays masculine singular.', warn: 'Il est arrivé' },
    { from: 'user', fr: F(2154), en: en(E(2154)) },
    { from: 'coach', fr: 'Il s’agit de : toujours avec il. Jamais « le colloque s’agit ».', en: 'Il s’agit de: always with il. Never « le colloque s’agit ».', warn: 'Il s’agit de' },
    { from: 'user', fr: F(2153), en: en(E(2153)) },
    { from: 'coach', fr: 'Il arrive que : parfois. Suivi du subjonctif, suffise.', en: 'Il arrive que: sometimes. Followed by the subjunctive, suffise.', warn: 'Il arrive que' },
  ],
  closing: { fr: 'Le vrai sujet vient après ; le verbe, lui, reste avec il.', en: 'The real subject comes after; the verb stays with il.' },
  audio: REC('rec-b2-20-fanta'),
  say: REFRAME,
  terms: ['accord', 'vide'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-distance',
  title: 'Le vrai sujet après le verbe',
  frSub: 'Il reste, il manque, il s’agit',
  hint: 'Quatre cartes. La troisième n’a jamais d’autre sujet que il.',
  audio: REC('rec-b2-20-accord'),
  say: REFRAME,
  terms: ['accord'],
  cards: [
    card(E(2149), 'Le vrai sujet après', 'il reste, il manque',
      "Il reste, il manque, il existe, il est arrivé : ce qui reste ou manque vient après le verbe. Plus soigné que il y a, et plus précis. EN: the real subject comes after the verb."),
    card(E(2148), 'Toujours au singulier', "l'accord",
      "Le verbe s'accorde avec il : il manque deux chaises, il s'est produit deux coupures, il a été vendu trois cents billets. Le participe reste masculin singulier. EN: always singular."),
    card(E(2155), 'Il s’agit de', Cap(INFINITIVES_REF),
      "Il s'agit de + nom (de quoi on parle) ou + infinitif (ce qu'il faut faire). Jamais d'autre sujet que il : ce livre parle de, ce livre traite de. EN: il s'agit de never has a personal subject."),
    card(E(2153), 'Il arrive que, il en va de même', 'deux tournures utiles',
      "Il arrive que + subjonctif : parfois. Il en va de même pour : c'est pareil pour, en plus soutenu. EN: sometimes; the same goes for."),
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Il commande le verbe',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Le verbe reste au singulier', [
      itE(2148, 'manque'),
      itE(2152, 's’est produit'),
      itE(2150, 'existe'),
      itE(2160, 'reste'),
    ], chk('« Il … encore trois badges à imprimer. »',
      ['reste', 'restent'], 0,
      'Le verbe s’accorde avec il. EN: reste.')),
    grp('Le participe ne s’accorde pas', [
      itE(2151, 'arrivé'),
      itE(2161, 'arrivé'),
      itE(2163, 'vendu'),
      itE(2162, 'manquait'),
    ], chk('« Il est … des choses étranges. »',
      ['arrivé', 'arrivées'], 0,
      'Avec il : masculin singulier. EN: arrivé.')),
    grp('Il s’agit de', [
      itE(2154, '+ nom'),
      itE(2155, 'dans ce livre'),
      itE(2156, 'avec un vrai sujet'),
      it(FP1204, '+ infinitif'),
    ], chk('Quelle phrase est correcte ?',
      ["Ce livre parle d'une famille d'Abidjan.", "Ce livre s'agit d'une famille d'Abidjan."], 0,
      'Avec un vrai sujet : parler de, traiter de. EN: parle.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Des accords en trop',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Il commande le verbe',
    body: "Dans une tournure impersonnelle, le verbe et le participe s'accordent avec il, au singulier, même devant un pluriel. Il s'agit de n'a jamais de sujet personnel. EN: il governs the verb; il s'agit de takes no personal subject.",
  },
  cards: [
    trap(2148, 'le verbe au pluriel', 'Il manquent deux chaises au premier rang.', 'Manque. EN: manque.'),
    trap(2151, 'ils', 'Ils sont arrivés des colis pour les intervenants.', 'Il est arrivé. EN: il est arrivé.'),
    trap(2152, 'le participe accordé', "Il s'est produites deux coupures de courant ce matin.", 'S’est produit. EN: produit.'),
    trap(2150, 'existent', 'Il existent plusieurs façons de disposer la salle.', 'Existe. EN: existe.'),
    trap(2155, 'un sujet personnel', "Ce livre s'agit d'une famille d'Abidjan.", 'Dans ce livre, il s’agit de. EN: il s’agit.'),
    trap(2161, 'arrivées', 'Il est arrivées des choses étranges pendant la répétition.', 'Arrivé. EN: arrivé.'),
  ],
  drill: [
    { promptSay: 'Il … deux chaises au premier rang.', opts: ['manquent', 'manque'], correct: 1 },
    { promptSay: 'Il est … des colis pour les intervenants.', opts: ['arrivé', 'arrivés'], correct: 0 },
    { promptSay: 'Il … plusieurs façons de disposer la salle.', opts: ['existe', 'existent'], correct: 0 },
    { promptSay: 'Il s’est … deux coupures ce matin.', opts: ['produites', 'produit'], correct: 1 },
    { promptSay: '… ce livre, il s’agit d’une famille.', opts: ['Dans', 'De'], correct: 0 },
    { promptSay: 'Il … encore trois badges.', opts: ['reste', 'restent'], correct: 0 },
    { promptSay: 'Il a été … plus de trois cents billets.', opts: ['vendus', 'vendu'], correct: 1 },
    { promptSay: 'Il … de même pour les badges.', opts: ['en va', 'va'], correct: 0 },
  ],
  steps: STEPS('Il commande le verbe', 'Des accords en trop'),
  audio: REC('rec-b2-20-piege-accord'),
  say: REFRAME,
  terms: ['accord'],
};

const A10_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a10-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Manque ou manquent, arrivé ou arrivés',
  itemIds: dicteeFor(10),
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Compléter : le message de Fanta', TEXTE_A10, [
  { q: 'Manquer et exister, au présent.', a: "Il manque encore deux chaises ; il existe plusieurs façons. Le verbe reste au singulier, avec il." },
  { q: 'Arriver et se produire, au passé composé.', a: "Il est arrivé des colis ; il s'est produit deux coupures. Le participe ne s'accorde pas : il reste masculin singulier." },
  { q: 'S’agir, au présent.', a: "Dans le programme, il s'agit de l'eau potable : toujours avec il." },
  { q: 'Pourquoi Fanta n’écrit-elle pas « le programme s’agit de l’eau potable » ?', a: "Parce que il s'agit de n'a jamais d'autre sujet que il. Avec le programme pour sujet, elle écrirait : le programme porte sur l'eau potable." },
], 'rec-b2-20-texte-a10', ['accord']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('L’accord', '« Il … deux chaises. »',
    ['manque', 'manquent'], 0,
    'Avec il, au singulier. EN: manque.'),
  ctl('Le participe', '« Il s’est … deux coupures. »',
    ['produit', 'produites'], 0,
    'Sans accord. EN: produit.'),
  ctl('Il s’agit', '« Ce film … d’une guerre. »',
    ['parle', 's’agit'], 0,
    'Avec un vrai sujet : parle, traite. EN: parle.'),
], ['accord']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Il manque deux chaises',
    opener: {
      line: "Une salle à préparer, des chaises qui manquent : ici tu comptes avec il, et le verbe reste au singulier. EN: A room to set up and chairs missing: here you count with il, and the verb stays singular.",
      imageRef: 'lessons/tournures-impersonnelles/act10.jpg',
    },
    sections: [],
    milestone: "Tu écris il manque, il reste, il est arrivé au singulier devant un pluriel, et tu ne donnes jamais de sujet personnel à il s'agit de. EN: You can keep impersonal verbs singular and use il s'agit de correctly.",
    estScreens: 36, restPoints: ['a10-construire', 'a10-piege'],
  },
  sections: [A10_HISTOIRE, A10_CARTES, A10_CONSTRUIRE, A10_PIEGE, A10_DICTEE, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: DU CERTAIN AU DOUTEUX
 *
 *  A report conclusion graded claim by claim, every family at once (lesson
 *  22 in B2: never surer than the evidence).
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La conclusion du rapport',
  frSub: 'Lis, et classe chaque affirmation',
  text: LECTURE_RAPPORT,
  glossary: [
    { word: 'les comptages', en: 'the counts', note: 'Des mesures : on compte les passants.' },
    { word: 'se dégagent', en: 'emerge', note: 'Apparaissent clairement.' },
    { word: 'prématuré', en: 'premature', note: 'Trop tôt pour être sûr.' },
    { word: 'les riverains', en: 'local residents', note: 'Les gens qui habitent la rue.' },
  ],
  questions: [
    { q: 'Global : que recommande le rapport ?', a: "De prolonger l'expérience d'un an, en associant les commerçants et en prévoyant un accès pour les taxis." },
    { q: 'Détail : quel résultat est présenté comme un fait mesuré ?', a: "La hausse de la fréquentation des commerces : il est établi que, appuyé sur les comptages (18 %)." },
    { q: 'Inférence : pourquoi « il est probable » pour la qualité de l’air, et pas « il est établi » ?', a: "Parce qu'une seule station de mesure était installée : la preuve est partielle." },
    { q: 'Degré : classe du plus sûr au moins sûr : l’air, le bruit, les livraisons.', a: "L'air (probable, indicatif), le bruit (possible, subjonctif), les livraisons (peu probable, subjonctif)." },
    { q: 'Position : les auteurs sont-ils pour ou contre la rue piétonne ?', a: "Plutôt pour, avec prudence : ils recommandent de prolonger, mais jugent prématuré de parler de succès." },
    { q: 'Forme : trouve une nécessité, une crainte et une question ouverte.', a: "Il est indispensable que les commerçants soient associés ; il est à craindre que le secteur devienne trop cher ; il reste à savoir si les riverains accepteront." },
  ],
  audio: REC('rec-b2-20-rapport'),
  say: REFRAME,
  terms: ['echelle', 'engagement'],
};

const A11_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le degré que tes données permettent',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Un fait mesuré', [
      itE(2164, 'établi'),
      itE(2173, 'il ressort de l’enquête'),
      itE(2176, 'établi : a doublé'),
      itE(2178, 'clair'),
    ], chk('Un comptage montre une hausse de 18 %. Tu écris…',
      ['il est établi que la fréquentation a augmenté', 'il est possible que la fréquentation ait augmenté'], 0,
      'Un fait mesuré : établi, l’indicatif. EN: established.')),
    grp('Une tendance ou une hypothèse', [
      itE(2165, 'probable'),
      itE(2166, 'possible'),
      itE(2175, 'possible : aient changé'),
      it(UNI(1099), 'probable : est sous-estimé'),
    ], chk('Une seule station de mesure pour l’air. Tu écris…',
      ["il est probable que la qualité de l'air s'est améliorée", "il est établi que la qualité de l'air s'est améliorée"], 0,
      'Une preuve partielle : probable. EN: probable.')),
    grp('Un doute, une crainte, une recommandation', [
      itE(2167, 'peu probable'),
      itE(2171, 'pas certain'),
      itE(2172, 'à craindre'),
      itE(2170, 'indispensable'),
    ], chk('« Il est à craindre que le secteur … trop cher. »',
      ['devienne', 'devient'], 0,
      'Une crainte : le subjonctif. EN: devienne.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echelle', 'engagement'],
};

const A11_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a11-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'L’autrice du rapport, à la radio',
  frSub: 'Huit phrases, huit degrés',
  lines: [lnE(2173), lnE(2165), lnE(2166), lnE(2171), lnE(2172), lnE(2177), lnE(2169), lnE(2170)],
  questions: [
    { q: 'Première phrase : d’où vient la satisfaction des piétons ?', opts: ['d’une enquête', 'd’une rumeur'], correct: 0, why: 'Il ressort de l’enquête. EN: a survey.' },
    { q: 'Deuxième phrase : l’air s’est-il amélioré ?', opts: ['probablement', 'c’est prouvé'], correct: 0, why: 'Il est probable que : pas plus. EN: probably.' },
    { q: 'Quatrième phrase : la hausse tiendra-t-elle en hiver ?', opts: ['ce n’est pas sûr', 'oui'], correct: 0, why: 'Il n’est pas certain que. EN: not sure.' },
    { q: 'Sixième phrase : l’autrice parle-t-elle de succès ?', opts: ['non, pas encore', 'oui, sans réserve'], correct: 0, why: 'Il serait prématuré de conclure. EN: not yet.' },
    { q: 'Dernière phrase : qui doit être associé aux décisions ?', opts: ['les commerçants', 'les touristes'], correct: 0, why: 'Il est indispensable que les commerçants soient associés. EN: the shopkeepers.' },
  ],
  audio: REC('rec-b2-20-interview-ecoute'),
  say: REFRAME,
  terms: ['echelle'],
};

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a11-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre degrés faussés',
  errors: [
    {
      wrong: "Il est certain que la qualité de l'air s'est améliorée.",
      right: F(2165),
      why: "Normal : le résultat est encourageant, alors on l'affirme. Mais une seule station de mesure ne permet que probable. EN: claim only what the data allow.",
    },
    {
      wrong: 'Il est possible que le bruit a simplement été déplacé.',
      right: F(2166),
      why: "Normal : le bruit, lui, est bien réel. Mais possible n'affirme pas : ait été. EN: ait été.",
    },
    {
      wrong: 'Il est peu probable que les livraisons pourront se faire le soir.',
      right: F(2167),
      why: "Normal : le soir est dans l'avenir, alors le futur vient. Le subjonctif couvre l'avenir : puissent. EN: puissent.",
    },
    {
      wrong: "Il n'est pas certain que cette hausse se maintient en hiver.",
      right: F(2171),
      why: "Normal : à l'oral, on l'entend. À l'écrit, la certitude niée demande le subjonctif : se maintienne. EN: in writing, the subjunctive.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echelle', 'negation'],
};

const A11_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a11-focus',
  layer: 'core',
  sheetId: 'sheet-carte',
  title: 'Ce qu’il faut retenir avant d’écrire',
  points: [
    "Un fait mesuré : il est établi que, il ressort de, avec l'indicatif. EN: measured facts, the indicative.",
    "Une tendance : il est probable que, l'indicatif ; une hypothèse : il est possible que, le subjonctif. EN: trend indicative, hypothesis subjunctive.",
    "Un doute ou une crainte : il n'est pas certain que, il est à craindre que, le subjonctif. EN: doubt and fear, the subjunctive.",
    "Une recommandation : il convient de, il est indispensable que. EN: recommendations.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echelle', 'engagement'],
};

const A11_TEXTE = dansUnTexte('a11-texte', 'Réécrire : le premier jet du stagiaire', TEXTE_A11, [
  { q: 'Première et deuxième phrases : mesuré, probable.', a: "Il est établi que la fréquentation des commerces a augmenté. Il est probable que la qualité de l'air s'est améliorée. L'indicatif, les deux fois." },
  { q: 'Troisième phrase : une hypothèse.', a: "Il est possible que le bruit ait été déplacé vers les rues voisines : le subjonctif passé." },
  { q: 'Quatrième phrase : peu probable.', a: "Il est peu probable que les livraisons puissent se faire le soir : le subjonctif." },
  { q: 'Dernière phrase : une crainte.', a: "Il est à craindre que le secteur devienne trop cher : le subjonctif." },
], 'rec-b2-20-texte-a11', ['echelle']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le degré', 'Un seul témoignage. Tu écris…',
    ['il est possible que', 'il est établi que'], 0,
    'Une hypothèse, pas un fait établi. EN: possible.'),
  ctl('Le mode', '« Il est établi que le nombre de piétons … doublé. »',
    ['a', 'ait'], 0,
    'Un fait mesuré : l’indicatif. EN: a.'),
  ctl('La prudence', '« Il serait prématuré de conclure… » veut dire…',
    ['il est trop tôt pour être sûr', 'c’est un succès'], 0,
    'Trop tôt. EN: too early.'),
], ['echelle']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Du certain au douteux',
    opener: {
      line: "Un été d'essai, des chiffres et des doutes : ici tu donnes à chaque affirmation d'un rapport le degré que tes données permettent. EN: A trial summer, figures and doubts: here you give each claim in a report the degree your data allow.",
      imageRef: 'lessons/tournures-impersonnelles/act11.jpg',
    },
    sections: [],
    milestone: "Tu classes les affirmations d'un rapport, du fait établi à la crainte, et chaque tournure prend son mode. EN: You can grade a report's claims from established fact to fear.",
    estScreens: 40, restPoints: ['a11-lecture', 'a11-ecoute'],
  },
  sections: [A11_LECTURE, A11_CONSTRUIRE, A11_ECOUTE, A11_ERREURS, A11_FOCUS, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12: TA NOTE
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La note que tu vas imiter',
  frSub: 'La semaine de quatre jours, à Namur',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'collège communal', en: 'municipal executive', note: 'En Belgique, le bourgmestre et les échevins qui dirigent la commune.' },
    { word: "l'absentéisme", en: 'absenteeism', note: 'Les absences au travail.' },
    { word: 'les délais', en: 'the deadlines', note: 'Le temps prévu pour finir un travail.' },
    { word: 'les modalités', en: 'the arrangements', note: 'La façon concrète d’organiser quelque chose.' },
  ],
  questions: [
    { q: 'Global : à quoi sert cette note ?', a: "À aider le collège communal à décider : elle examine l'essai, sépare ce qui est sûr de ce qui ne l'est pas, et recommande." },
    { q: 'Détail : quel résultat est le plus sûr ?', a: "La baisse de l'absentéisme : il est établi que, avec les chiffres des deux services." },
    { q: 'Inférence : pourquoi « il semble que » pour la fatigue ?', a: "Parce que la source est une enquête interne : une impression, pas une mesure." },
    { q: 'Structure : comment la note est-elle organisée ?', a: "L'objet, puis les résultats du plus sûr au moins sûr, deux jugements, et enfin les recommandations." },
    { q: 'Forme : trouve une tournure à l’indicatif, une au subjonctif, une à l’infinitif.', a: "Il est établi que l'absentéisme a baissé ; il est peu probable que cette mesure suffise ; il convient de lancer un second essai." },
    { q: 'Position : l’autrice est-elle favorable ?', a: "Oui, sous conditions : il est recommandé d'adopter la mesure, avec un second essai et le choix du jour de repos." },
  ],
  audio: REC('rec-b2-20-modele'),
  say: REFRAME,
  terms: ['engagement', 'echelle'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  sheetId: 'sheet-carte',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Du certain au douteux, puis recommander',
  steps: [
    'Pose l’objet de ta note en une phrase : la présente note examine… EN: state the subject.',
    'Donne d’abord ce qui est établi, avec l’indicatif : il est établi que, il ressort de. EN: start with what is established.',
    'Puis ce qui est probable, possible ou douteux, en réglant le mode sur le degré. EN: then the uncertain, the mood set by the degree.',
    'Ajoute un jugement si c’est utile : il est regrettable que, il est dommage que. EN: add a judgement if it helps.',
    'Termine par tes recommandations : il convient de, il est indispensable que, il est recommandé de. EN: end with recommendations.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['engagement', 'echelle'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  title: 'Quatre phrases que toute note contient',
  cases: [
    { situation: 'Tu annonces l’objet de ta note', fr: F(2182), en: en(E(2182)) },
    { situation: 'Tu poses un fait mesuré', fr: F(2183), en: en(E(2183)) },
    { situation: 'Tu signales un risque sans l’affirmer', fr: F(2185), en: en(E(2185)) },
    { situation: 'Tu recommandes, sans dire je', fr: F(2191), en: en(E(2191)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['engagement'],
};

const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'Au conseil de quartier',
  frSub: 'Six tours, à voix haute',
  setting: 'Tu présentes ta note sur l’ouverture de la médiathèque le dimanche devant le conseil de quartier. Une conseillère te pose des questions ; tu réponds en dosant chaque affirmation.',
  turns: [
    {
      ai: 'Bonsoir. Selon vous, la demande existe vraiment ?', en: 'Good evening. In your view, is there really a demand?',
      user: 'Oui, il est établi que la demande existe : plus de mille habitants ont signé la pétition.',
      userEn: 'Yes, it is established that the demand exists: over a thousand residents signed the petition. (Il est établi que + indicative: a measured fact.)',
      alts: [
        { fr: 'Il ne fait aucun doute que la demande existe : la salle d’étude est pleine chaque samedi.', en: 'There is no doubt the demand exists: the study room is full every Saturday. (Il ne fait aucun doute que + indicative.)' },
        { fr: 'Il est clair que beaucoup d’habitants attendent cette ouverture.', en: 'It is clear that many residents are waiting for this opening. (Il est clair que + indicative.)' },
      ],
    },
    {
      ai: 'Et qui viendra, le dimanche ?', en: 'And who will come on Sundays?',
      user: 'Il est probable que les étudiants et les familles seront les premiers usagers.',
      userEn: 'Students and families will probably be the first users. (Probable + indicative.)',
      alts: [
        { fr: 'Il est possible que les familles soient les plus nombreuses.', en: 'Families may be the most numerous. (Possible + subjunctive: less sure, also right.)' },
        { fr: 'Il semble que les étudiants soient les plus demandeurs.', en: 'Students seem to be the keenest. (Il semble que + subjunctive: an impression.)' },
      ],
    },
    {
      ai: 'La fréquentation va-t-elle durer ?', en: 'Will attendance last?',
      user: 'Il n’est pas certain qu’elle se maintienne après les premiers mois.',
      userEn: 'It is not certain it will hold after the first few months. (Negated certainty + subjunctive.)',
      alts: [
        { fr: 'Il est possible qu’elle baisse une fois l’effet de nouveauté passé.', en: 'It may drop once the novelty wears off. (Possible + subjunctive.)' },
        { fr: 'Il est peu probable qu’elle reste aussi forte toute l’année.', en: 'It is unlikely to stay this high all year. (Peu probable + subjunctive.)' },
      ],
    },
    {
      ai: 'Et le personnel, il est d’accord ?', en: 'And the staff, do they agree?',
      user: 'Il est regrettable qu’aucune consultation n’ait encore eu lieu.',
      userEn: 'It is regrettable that no consultation has taken place yet. (Regrettable + subjonctif passé.)',
      alts: [
        { fr: 'Il est dommage qu’on ne l’ait pas encore consulté.', en: 'It is a pity they have not been consulted yet. (Dommage + subjonctif passé.)' },
        { fr: 'Il faut que le personnel soit consulté avant toute décision.', en: 'The staff must be consulted before any decision. (Il faut que + subjunctive: a necessity, also right.)' },
      ],
    },
    {
      ai: 'Qu’est-ce que vous recommandez, concrètement ?', en: 'What do you recommend, in practice?',
      user: 'Il convient d’ouvrir de 13 h à 18 h, pendant un an, à titre d’essai.',
      userEn: 'Opening from 1 to 6 p.m. for a year, as a trial, is advisable. (Il convient de + infinitive.)',
      alts: [
        { fr: 'Il est recommandé d’ouvrir le dimanche après-midi pendant un an.', en: 'Opening on Sunday afternoons for a year is recommended. (Il est recommandé de + infinitive.)' },
        { fr: 'Il vaut mieux commencer par un essai d’un an.', en: 'It is best to start with a one-year trial. (Il vaut mieux + infinitive.)' },
      ],
    },
    {
      ai: 'Une dernière condition ?', en: 'One last condition?',
      user: 'Il est indispensable que les agents qui travaillent le dimanche soient volontaires.',
      userEn: 'It is essential that the staff who work on Sundays be volunteers. (Indispensable + subjunctive.)',
      alts: [
        { fr: 'Il faut que les agents du dimanche soient volontaires et compensés.', en: 'Sunday staff must be volunteers and compensated. (Il faut que + subjunctive.)' },
        { fr: 'Il importe que personne ne soit obligé de travailler le dimanche.', en: 'It is important that nobody is forced to work on Sundays. (Il importe que + subjunctive, formal.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['engagement', 'echelle'],
};

const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Ta note : du certain au douteux',
  frSub: 'Mission écrite, format DELF B2',
  brief: "Ta commune étudie une proposition, et on te demande une note écrite pour préparer la décision. Choisis l'un des deux sujets : « Faut-il ouvrir la médiathèque le dimanche ? » ou « Faut-il interdire les trottinettes électriques en libre-service dans le centre-ville ? ». Pèse la proposition : sépare ce qui est établi de ce qui est probable, possible ou douteux, puis recommande.",
  briefEn: 'Your town is studying a proposal and you are asked for a written note to prepare the decision. Choose one of the two topics: « Should the media library open on Sundays? » or « Should rental e-scooters be banned from the city centre? ». Weigh the proposal: separate what is established from what is probable, possible or doubtful, then make recommendations.',
  produce: "Écris une note de 200 à 250 mots : l'objet, les faits établis, les points incertains classés du plus probable au plus douteux, et tes recommandations. Emploie au moins cinq tournures impersonnelles différentes, avec au moins une à l'indicatif (il est établi que, il est probable que), une au subjonctif (il est possible que, il n'est pas certain que, il faut que) et une à l'infinitif (il convient de, il est recommandé de).",
  responseSpec: { kind: 'text', minWords: 200, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : L'objet est posé, les faits sont séparés des hypothèses, chaque point incertain a son degré, et la note recommande. Entre 200 et 250 mots.",
          "2 : La note pèse la proposition, mais les degrés se mélangent (un témoignage donné pour un fait), ou la longueur sort un peu des limites.",
          "1 : Un avis sans degrés ni recommandations, ou un texte beaucoup trop court.",
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          "3 : Un ordre clair (objet, faits, incertitudes, recommandations) ; chaque affirmation est reliée à sa source (des chiffres, une enquête, un témoignage).",
          "2 : Le texte se suit, mais une partie manque ou deux degrés se contredisent.",
          "1 : On ne sait pas toujours ce qui est sûr et ce qui est supposé.",
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          "2 : Au moins cinq tournures impersonnelles différentes, à l'indicatif, au subjonctif et à l'infinitif (il est établi que, il est probable que, il n'est pas certain que, il est regrettable que, il convient de…).",
          "1 : Toujours les mêmes (il faut, il est important), ou moins de cinq.",
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          "2 : Le mode suit le degré : indicatif après établi, certain, probable ; subjonctif après possible, peu probable, pas certain, il faut, il est dommage ; il manque, il reste au singulier.",
          "1 : Des erreurs de mode fréquentes (il est possible que + indicatif, il faut que + indicatif) gênent parfois la lecture.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          "2 : Le registre d'une note officielle : impersonnel, précis, sans je ni formules orales (c'est sûr que, du coup).",
          "1 : Le texte sonne comme une conversation, ou affirme tout avec la même force.",
        ],
      },
    ],
  },
  scaffold: [
    'La présente note examine',
    'Il est établi que',
    'Il est probable que',
    'Il est possible que',
    "Il n'est pas certain que",
    'Il est regrettable que',
    'Il convient de',
    'Il est indispensable que',
  ],
  modelAnswer: "Note au conseil municipal. Objet : l'ouverture de la médiathèque le dimanche.\n\nLa présente note examine la proposition d'ouvrir la médiathèque le dimanche après-midi, à titre d'essai. Ce que l'on sait. Il est établi que la demande existe : plus de mille habitants ont signé la pétition, et la salle d'étude est pleine chaque samedi. Il est probable que les étudiants et les familles seront les premiers usagers, puisque le dimanche est souvent leur seul jour libre. Il ressort d'ailleurs d'une enquête auprès des usagers que les horaires actuels conviennent mal aux salariés. Ce qui reste incertain. Il est possible que la fréquentation baisse après quelques mois, une fois l'effet de nouveauté passé. Il est peu probable, en revanche, que l'ouverture coûte moins de 40 000 euros par an, car il faudra payer plus cher les heures du dimanche. Il n'est pas certain non plus que le personnel soit volontaire, et il est regrettable qu'aucune consultation n'ait encore eu lieu. Recommandations. Il convient d'ouvrir la médiathèque de 13 h à 18 h pendant un an. Il est indispensable que les agents qui travaillent le dimanche soient volontaires et compensés, et il faudra que la fréquentation soit mesurée chaque mois. Un bilan à six mois dira s'il y a lieu de poursuivre. En conclusion, il est recommandé d'adopter la proposition, à titre d'essai : il s'agit d'un service public de plus, pas d'une dépense de prestige.\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : l'objet, puis les faits établis, puis les incertitudes classées (probable, possible, peu probable, pas certain), puis les recommandations.\n2. Cohérence : chaque affirmation a sa source (la pétition, la salle pleine, le coût des heures du dimanche) ; les intertitres guident la lecture.\n3. Étendue : il est établi que, il ressort de, il est probable que, il est possible que, il est peu probable que, il n'est pas certain que, il est regrettable que, il convient de, il est indispensable que, il y a lieu de, il est recommandé de, il s'agit de.\n4. Correction : l'indicatif après établi et probable (existe, seront), le subjonctif après possible, peu probable, pas certain et indispensable (baisse, coûte, soit, soient), le subjonctif passé après regrettable (n'ait eu lieu).\n5. Registre : une note officielle, impersonnelle du début à la fin, sans je ni formule orale.",
  modelAnswerEn: "Note to the town council. Subject: opening the media library on Sundays. This note examines the proposal to open the media library on Sunday afternoons as a trial. What we know. It is established that the demand exists: over a thousand residents signed the petition, and the study room is full every Saturday. Students and families will probably be the first users, since Sunday is often their only free day. A survey of users also shows that the current opening hours suit working people poorly. What remains uncertain. Attendance may drop after a few months, once the novelty wears off. On the other hand, the opening is unlikely to cost less than 40,000 euros a year, since Sunday hours will have to be paid at a higher rate. Nor is it certain that staff will volunteer, and it is regrettable that no consultation has yet taken place. Recommendations. The library should open from 1 to 6 p.m. for a year. It is essential that staff working on Sundays be volunteers and compensated, and attendance will have to be measured every month. A six-month review will show whether there are grounds to continue. In conclusion, adopting the proposal as a trial is recommended: this is one more public service, not a vanity expense. The marker's notes (not counted): 1. Task: subject, established facts, graded uncertainties, recommendations. 2. Coherence: every claim has its source. 3. Range: eleven impersonal constructions in three moods. 4. Accuracy: the mood follows the degree. 5. Register: impersonal and official throughout.",
  watchFor: [
    { pattern: 'Il est possible / peu probable / douteux que or il se peut que followed by an indicative or a future.', criterion: 'correction', feedback: 'Sous la moitié, le subjonctif, même pour demain : il est possible que la fréquentation baisse.', ref: 'a5-piege' },
    { pattern: 'Il est certain / clair / évident / établi que followed by a subjunctive.', criterion: 'correction', feedback: 'Certain, clair, établi affirment : l’indicatif, il est établi que la demande existe.', ref: 'a5-cartes' },
    { pattern: 'A negated certainty (il n’est pas certain, sûr, clair, prouvé que) followed by a present indicative.', criterion: 'correction', feedback: 'À l’écrit, la certitude niée demande le subjonctif : il n’est pas certain que le personnel soit volontaire.', ref: 'a6-piege' },
    { pattern: 'Il faut que, il est indispensable que, il importe que followed by an indicative.', criterion: 'correction', feedback: 'Une exigence prend le subjonctif : il faut que la fréquentation soit mesurée.', ref: 'a4-erreurs' },
    { pattern: 'A judgement (il est dommage, regrettable, étonnant que) followed by an indicative, or a present subjunctive for a finished fact.', criterion: 'correction', feedback: 'Un jugement prend le subjonctif, et le subjonctif passé pour un fait fini : il est regrettable qu’aucune consultation n’ait eu lieu.', ref: 'a8-piege' },
    { pattern: 'Il paraît que used to present data or a probability, or il me semble que with a subjunctive.', criterion: 'correction', feedback: 'Il paraît que rapporte une rumeur. Pour une impression tirée des chiffres : il semble que.', ref: 'a7-erreurs' },
    { pattern: 'An impersonal verb agreed in the plural (il manquent, ils restent, il s’est produites), or il s’agit de with a personal subject.', criterion: 'correction', feedback: 'Le verbe reste avec il, au singulier : il manque deux agents. Et jamais « la mesure s’agit de ».', ref: 'a10-piege' },
    { pattern: 'A missing or extra de: il faut de, il vaut mieux de, il suffit + infinitive, il convient que + infinitive.', criterion: 'correction', feedback: 'Il faut, il vaut mieux : sans de. Il suffit de, il convient de, il y a lieu de : avec de.', ref: 'a3-piege' },
    { pattern: 'Every claim given the same strength: a single testimony or an estimate presented as an established fact, or everything hedged.', criterion: 'tache', feedback: 'Donne à chaque affirmation le degré que tes données permettent : établi, probable, possible, douteux.', ref: 'a11-construire' },
    { pattern: 'No recommendations, or recommendations that do not follow from the facts presented.', criterion: 'coherence', feedback: 'Termine par ce qu’il convient de faire, en lien avec ce que tu as établi.', ref: 'a12-plan' },
    { pattern: 'Fewer than five different impersonal constructions, or none in one of the three forms (indicative, subjunctive, infinitive).', criterion: 'etendue', feedback: 'Varie : il est établi que, il est probable que, il n’est pas certain que, il est regrettable que, il convient de.', ref: 'a12-plan' },
    { pattern: 'A spoken register (c’est sûr que, du coup, je pense que everywhere) in an official note.', criterion: 'registre', feedback: 'Une note officielle parle à l’impersonnel : il est dommage que, il est recommandé de.', ref: 'a9-table' },
  ],
  graderNotes: [
    'Count the words of the body only; the heading lines (Note…, Objet…) and the section labels do not count. 200 to 250 with 10% tolerance (180 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'SPOKEN-VARIANT DECISION (gate B2-2, Paul 2026-09-29): the written norm is taught and tested. A present indicative after a negated certainty (il n’est pas certain que … est) is a spoken form: name it and remove at most ONE « correction » point in total for spoken forms, however often they occur. A future indicative there (il n’est pas certain qu’il viendra) is found in careful writing and costs nothing. An indicative after il est possible, peu probable or il faut que is NOT a variant: it is an error.',
    '« Il semble que » + indicative is NOT marked wrong (lesson 15 in B2’s policy): the subjunctive is the written norm, the indicative is found in good writers. « Il est probable que » + subjunctive and « il ne fait aucun doute que » + subjunctive are rare but found: do not penalise them. « Il arrive que » accepts both moods.',
    'An inverted question (est-il certain que) accepts both moods with different meanings: judge only whether the meaning fits the note.',
    'After « il a été décidé que », accept the indicative (future, conditional) and do not penalise a subjunctive where the decision reads as an order. After « il est demandé que », « il est exigé que », « il est souhaitable que » the subjunctive is required.',
    '« C’est + adjectif + de / que » is correct spoken French: one occurrence costs nothing; a note written throughout with c’est may lose the « registre » point.',
    'Accept « il faudrait », « il conviendrait de », « il serait souhaitable que » (the conditional softens a recommendation) as distinct constructions for range.',
    'The constructions of lessons 15 and 22 in B1 (il faut que, il est important que, il est possible que, il est difficile de) count towards range only if at least two B2 forms are also used (il est établi que, il n’est pas certain que, il est à craindre que, il convient de, il y a lieu de, il a été décidé que, il ressort de).',
    'Writer and reader gender are unknown: judge agreement for internal consistency only. Accept regional vocabulary and institutions (courriel, fin de semaine, bourgmestre, échevin, syndic, conseil municipal, collège communal).',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 15 du B1 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['engagement', 'echelle'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Dis tes tournures à voix haute',
  frSub: 'Le degré, puis le mode',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['engagement'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-carte',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la nécessité', v: 'il faut que, il suffit que, il importe que', say: F(2017),
      detail: { title: 'La nécessité', body: "Du minimum à l'obligation : le subjonctif. Sans personne de précis : il faut, il convient de + infinitif. EN: necessity.", say: F(2048) } },
    { k: 'le certain', v: 'établi, certain, clair, probable', say: F(2018),
      detail: { title: 'Au-dessus de la moitié', body: "Tu affirmes, même avec prudence : l'indicatif. EN: the indicative.", say: F(2164) } },
    { k: 'le douteux', v: 'possible, peu probable, douteux', say: F(2019),
      detail: { title: 'En dessous', body: "Tu n'affirmes pas : le subjonctif, et le subjonctif passé pour un fait passé. EN: the subjunctive.", say: F(2166) } },
    { k: 'la négation', v: "il n'est pas certain que, il ne fait aucun doute que", say: F(2082),
      detail: { title: 'La bascule', body: "Certitude niée : le subjonctif. Doute nié : l'indicatif. EN: the flip.", say: F(2089) } },
    { k: 'le jugement', v: 'il est dommage, regrettable, temps que', say: F(2020),
      detail: { title: 'Le jugement', body: "Le subjonctif, même pour un fait sûr ; de + infinitif pour tout le monde ; il est à l'écrit, c'est à l'oral. EN: judgements.", say: F(2114) } },
    { k: 'la distance', v: 'il a été décidé, il est demandé, il manque', say: F(2021),
      detail: { title: 'La distance', body: "Décider, rappeler : l'indicatif ; demander, exiger : le subjonctif. Il manque, il reste : toujours au singulier. EN: distance and agreement.", say: F(2148) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['engagement', 'echelle'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu sais régler le curseur derrière le il impersonnel : exiger (il suffit que, il faut que, il est indispensable que) ou dispenser (il n'est pas nécessaire que) ; affirmer (il est établi, certain, probable, avec l'indicatif) ou supposer (possible, peu probable, douteux, avec le subjonctif) ; retourner le mode quand la négation arrive ; dire d'où vient une information (il paraît, il semble, il s'avère) ; juger un fait ; laisser une décision sans signature ; garder il manque et il reste au singulier. Le piège qui reste, c'est le degré : dire certain quand tes données disent possible. Avant l'examen, relis ta note et, pour chaque tournure, demande-toi quelle preuve la justifie. EN: For every expression in your note, ask which evidence supports it.",
  stats: [
    { k: 'La nécessité', v: 'il faut que, il convient de' },
    { k: "L'échelle", v: 'probable ou possible' },
    { k: 'La négation', v: 'pas certain, aucun doute' },
    { k: 'La distance', v: 'il a été décidé, il manque' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 2 to 11, a round that
 *  recycles lessons 15, 16, 18 and 22 in B1 and 5, 6, 14 and 16 in B2 (named
 *  in each question), and an exam-format round (DELF B2, TCF). Every typed
 *  answer turns on a mood, a tense, a small word or an agreement letter, and
 *  every equally correct answer is listed in `accept`. Mood policies: corpus
 *  §A.8. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.';
const ES_ECRIT = 'À l’écrit, une forme ne va pas. Écris la phrase correcte. EN: In writing, one form is wrong; write the sentence correctly.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_Q): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const MODE_Q = 'Mets le verbe entre parenthèses à la forme qui convient, et écris la phrase. EN: Put the verb in brackets in the right form and write the sentence.';
const PETIT_MOT_Q = 'Complète avec le petit mot qui manque, et écris la phrase. EN: Fill in the missing little word and write the sentence.';

const DEBAT_ORAL = "Il est établi que l'essai a réduit l'absentéisme, c'est vrai. Mais il n'est pas certain que le service d'accueil puisse fermer le vendredi : il est même probable qu'il faudra le garder ouvert, au moins le matin.";

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a12-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r2-carte', label: 'Quatre familles, deux modes', targets: ['famille-melangee'],
      questions: [
        mc('Après « il est possible que », quel mode ?', ['le subjonctif', 'l’indicatif'], 0, 'Possible n’affirme pas. EN: the subjunctive.', 'a2-table'),
        mc('Après « il a été décidé que », quel mode ?', ['l’indicatif', 'l’infinitif'], 0, 'Une décision affirmée : l’indicatif. EN: the indicative.', 'a2-table'),
        mc('« Il est … que la bibliothèque sera ouverte le dimanche. » Quel mot convient ?', ['probable', 'possible', 'dommage'], 0, 'Sera est un indicatif : seul probable l’accepte. EN: probable.', 'a2-trier'),
        tI(MODE_Q, 'Il faut que la bibliothèque (être) ouverte le dimanche.', F(2017), 'Il faut que : subjonctif, soit. EN: soit.', 'a2-table'),
        tI(MODE_Q, 'Il est probable que la salle (être, au futur) fermée lundi.', F(2025), 'Probable : indicatif, sera. EN: sera.', 'a2-trier',
          ['Il est probable que la salle va être fermée lundi.']),
        eS('Il est possible que la salle est fermée lundi.', F(2024), 'Possible : le subjonctif, soit. EN: soit.', 'a2-erreurs',
          ['Il se peut que la salle soit fermée lundi.', F(2025), 'Il est probable que la salle est fermée lundi.']),
        mc('Dans « il faut que tu viennes », que désigne il ?', ['personne : c’est un sujet vide', 'la personne qui parle', 'toi'], 0, 'Le il de il faut ne remplace aucun nom. EN: nothing.', 'a2-rappel'),
        lC('Écoute. À quelle famille appartient cette phrase ?', F(2020), ['le jugement', 'la probabilité', 'la distance'], 0, 'Il est dommage que : un jugement. EN: a judgement.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-infinitif', label: 'Il faut, il suffit de', targets: ['infinitif-bancal'],
      questions: [
        mc('« Il suffit … remplir le formulaire en ligne. »', ['de', 'que', 'à'], 0, 'Il suffit de + infinitif. EN: de.', 'a3-cartes'),
        mc('Quelle phrase est correcte ?', ['Il vaut mieux prendre rendez-vous le matin.', 'Il vaut mieux de prendre rendez-vous le matin.'], 0, 'Pas de de après il vaut mieux. EN: no de.', 'a3-piege'),
        mc('Ton employeur doit remplir l’attestation. Quelle phrase le dit ?', ["Il faut que ton employeur remplisse l'attestation.", "Il faut ton employeur remplir l'attestation."], 0, 'Quelqu’un de précis : que + subjonctif. EN: que.', 'a3-construire'),
        tI(PETIT_MOT_Q, "Il convient (___) signaler tout changement d'adresse dans les huit jours.", F(2035), 'Il convient de + infinitif. EN: de.', 'a3-cartes'),
        tI(PETIT_MOT_Q, "Il y a lieu (___) vérifier la date d'expiration du permis.", F(2036), 'Il y a lieu de + infinitif, le français des administrations. EN: de.', 'a3-cartes'),
        eS("Pour s'inscrire, il faut de présenter une pièce d'identité.", F(2032), 'Il faut + infinitif, sans de. EN: no de.', 'a3-piege',
          ["Il faut présenter une pièce d'identité pour s'inscrire."]),
        mc('« Il n’y a pas lieu de s’inquiéter » veut dire…', ['il n’y a aucune raison de s’inquiéter', 'il ne faut surtout pas s’inquiéter à cet endroit'], 0, 'Il y a lieu de : il y a des raisons de. EN: no cause for concern.', 'a3-cartes'),
        lC('Écoute. Qui doit agir ?', F(2041), ['ton employeur', 'toi', 'tout le monde'], 0, 'Que + ton employeur : quelqu’un de précis. EN: your employer.', 'a3-construire'),
      ],
    },
    {
      id: 'r4-necessite', label: 'Il faut que, il importe que', targets: ['necessite-mode'],
      questions: [
        mc('« Il est indispensable que chaque patient … son bracelet au poignet. »', ['ait', 'a', 'avoir'], 0, 'Indispensable : subjonctif. EN: ait.', 'a4-cartes'),
        mc('« You don’t have to be there before seven. »', ["Il n'est pas nécessaire que tu sois là avant sept heures.", 'Il ne faut pas que tu sois là avant sept heures.'], 0, 'Il n’est pas nécessaire que dispense ; il ne faut pas que interdit. EN: not necessary.', 'a4-cartes'),
        mc('Laquelle demande le moins ?', ['il suffit que', 'il faut que', 'il est indispensable que'], 0, 'Il suffit que : une seule condition. EN: il suffit que.', 'a4-table'),
        tI(MODE_Q, "Il faut que l'équipe de jour (remplir) le registre avant de partir.", F(2059), 'Il faut que : remplisse. EN: remplisse.', 'a4-construire'),
        tI(MODE_Q, 'Il vaut mieux que tu (prendre) ta pause avant minuit.', F(2053), 'Il vaut mieux que : subjonctif, prennes. EN: prennes.', 'a4-cartes'),
        eS('Il est nécessaire que chaque visiteur met un masque.', F(2049), 'Nécessaire : subjonctif, mette. EN: mette.', 'a4-erreurs',
          ['Il est nécessaire que chaque visiteur porte un masque.']),
        eS("Il importe que l'équipe de nuit est prévenue avant vingt heures.", F(2050), 'Il importe que : subjonctif, soit. EN: soit.', 'a4-erreurs'),
        lC('Écoute. Est-ce une interdiction ?', F(2054), ['oui : tu ne dois pas partir', 'non : tu peux partir si tu veux'], 0, 'Il ne faut pas que : c’est interdit. EN: yes.', 'a4-cartes'),
      ],
    },
    {
      id: 'r5-echelle', label: 'Probable ou possible', targets: ['echelle-mode'],
      questions: [
        mc('« Il est possible que des vols … annulés. »', ['soient', 'sont', 'seront'], 0, 'Possible : subjonctif. EN: soient.', 'a5-cartes'),
        mc('« Il est … que la tempête touchera Québec demain. »', ['certain', 'possible', 'peu probable'], 0, 'Touchera est un indicatif : seul certain l’accepte. EN: certain.', 'a5-construire'),
        mc('« Il est douteux que les routes … dégagées avant midi. »', ['soient', 'seront', 'sont'], 0, 'Douteux : sous la moitié, le subjonctif. EN: soient.', 'a5-cartes'),
        tI(MODE_Q, 'Il est peu probable que la tempête (faiblir) avant la nuit.', F(2076), 'Peu probable : subjonctif, faiblisse. EN: faiblisse.', 'a5-construire',
          ['Il est peu probable que la tempête ait faibli avant la nuit.']),
        tI(MODE_Q, 'Il est probable que la tempête (faiblir, au futur) dans la nuit.', F(2077), 'Probable : indicatif, faiblira. EN: faiblira.', 'a5-construire',
          ['Il est probable que la tempête va faiblir dans la nuit.']),
        eS('Il se peut que nous devons fermer le pont.', F(2078), 'Il se peut que : subjonctif, devions. EN: devions.', 'a5-piege',
          ['Il est possible que nous devions fermer le pont.', 'Il est probable que nous devons fermer le pont.', 'Il est probable que nous devrons fermer le pont.']),
        eS('Il est possible que la neige a déjà commencé à Rimouski.', F(2074), 'Possible, et c’est déjà fait : subjonctif passé, ait commencé. EN: ait.', 'a5-piege',
          [F(2073)]),
        lC('Écoute. La personne y croit-elle à plus d’une chance sur deux ?', F(2067), ['non : c’est peu probable', 'oui : c’est probable'], 0, 'Peu probable, avec soit : sous la moitié. EN: no.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-negation', label: 'La négation et la question', targets: ['bascule-oubliee'],
      questions: [
        mc('À l’écrit : « Il n’est pas certain que le ministre … au courant. »', ['soit', 'est'], 0, 'La certitude est niée : le subjonctif. EN: soit.', 'a6-cartes'),
        mc('À l’écrit, quel début va avec « … que les chiffres ont été vérifiés » ?', ['Il ne fait aucun doute', 'Il n’est pas certain', 'Il est peu probable'], 0, 'Ont été, un indicatif : nier le doute, c’est affirmer. EN: no doubt.', 'a6-cartes'),
        mc('« Est-il certain que la réunion ait eu lieu ? » Que fait cette question ?', ['elle met la réunion en doute', 'elle demande simplement l’heure de la réunion'], 0, 'Avec l’inversion, le subjonctif doute. EN: it doubts.', 'a6-cartes'),
        tI('Mets la phrase à la forme négative, comme à l’écrit, et écris-la. EN: Make the sentence negative, as in writing.', 'Il est certain que le ministre est au courant.', F(2082), 'La certitude niée : le subjonctif, soit. EN: soit.', 'a6-construire',
          ["Il n'est pas sûr que le ministre soit au courant."]),
        tI(MODE_Q, "Il n'est pas certain que le journal (pouvoir) publier l'article.", F(2092), 'Pas certain : puisse. EN: puisse.', 'a6-construire'),
        eS("Il n'est pas clair que la source est fiable.", F(2094), 'À l’écrit, la clarté niée demande le subjonctif : soit. EN: soit.', 'a6-piege', [], ES_ECRIT),
        eS("Il n'est pas impossible que le rapport a été modifié.", F(2085), 'Deux négations, et toujours une possibilité : ait été. EN: ait été.', 'a6-piege', [], ES_ECRIT),
        lC('Écoute. Le journal affirme-t-il que le document est authentique ?', F(2096), ['non : ce n’est pas prouvé', 'oui : c’est prouvé'], 0, 'Il n’est pas prouvé que… soit : rien n’est affirmé. EN: no.', 'a6-construire'),
      ],
    },
    {
      id: 'r7-source', label: 'Il semble, il paraît', targets: ['source-confondue'],
      questions: [
        mc('« Il paraît que les billets seront gratuits. » D’où vient l’information ?', ['on l’a entendu dire', 'on l’a vérifié', 'c’est l’avis de la personne'], 0, 'Il paraît que : une rumeur. EN: hearsay.', 'a7-cartes'),
        mc('Laquelle donne ton avis personnel ?', ['Il me semble que la ligne est en avance.', 'Il semble que la ligne soit en avance.', 'Il paraît que la ligne est en avance.'], 0, 'Il me semble que : ton avis. EN: il me semble.', 'a7-cartes'),
        mc('« Il paraît que la ligne … prolongée jusqu’à l’aéroport. »', ['sera', 'soit'], 0, 'Il paraît que + indicatif. EN: sera.', 'a7-trier'),
        tI(MODE_Q, 'Il me semble que la nouvelle ligne (être) en avance.', F(2099), 'Il me semble que : un avis, l’indicatif. EN: est.', 'a7-cartes'),
        tI(MODE_Q, 'Il semble que la nouvelle ligne (être) en avance sur le calendrier.', F(2098), 'Il semble que : le subjonctif de l’écrit. L’indicatif (est) se lit aussi et n’est pas compté faux. EN: soit.', 'a7-cartes',
          ['Il semble que la nouvelle ligne est en avance sur le calendrier.']),
        eS('Il me semble que ce soit la meilleure solution.', "Il me semble que c'est la meilleure solution.", 'Il me semble que, à la forme affirmative : l’indicatif. EN: c’est.', 'a7-erreurs',
          ['Il semble que ce soit la meilleure solution.']),
        eS("Il s'avère que la rumeur soit fausse.", "Il s'avère que la rumeur est fausse.", 'Il s’avère que : un fait vérifié, l’indicatif. EN: est.', 'a7-erreurs',
          [F(2111)]),
        lC('Écoute. Cette information est-elle vérifiée ?', F(2104), ['non : paraît-il, c’est une rumeur', 'oui : c’est confirmé'], 0, 'Paraît-il : on le dit. EN: no, hearsay.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-jugement', label: 'Il est dommage que', targets: ['jugement-mode'],
      questions: [
        mc('« Il est normal que les riverains … du calme après minuit. »', ['veuillent', 'veulent', 'vouloir'], 0, 'Un jugement : subjonctif. EN: veuillent.', 'a8-cartes'),
        mc('Un regret qui vaut pour tout le monde :', ['Il est dommage de fermer les quais si tôt.', 'Il est dommage que fermer les quais si tôt.'], 0, 'Pour tout le monde : de + infinitif. EN: de.', 'a8-construire'),
        mc('Dans un rapport écrit, quelle forme ?', ['Il est regrettable que la navette ait été supprimée.', 'C’est dommage qu’ils aient supprimé la navette.'], 0, 'Il est regrettable que : le registre de l’écrit. EN: il est.', 'a8-cartes'),
        tI(MODE_Q, 'Il est temps que la mairie (tenir) compte des riverains.', F(2127), 'Il est temps que : tienne. EN: tienne.', 'a8-construire'),
        tI('Mets le verbe au subjonctif passé, et écris la phrase. EN: Put the verb in the subjonctif passé and write the sentence.', 'Il est regrettable que le programme (être) publié si tard.', F(2126), 'Un fait passé : ait été publié. EN: ait été.', 'a8-cartes'),
        eS('Il est étonnant que si peu de bénévoles ont répondu.', F(2115), 'Un jugement, même sur un fait sûr : aient répondu. EN: aient.', 'a8-piege'),
        eS('Il est temps que la ville revoit son plan de circulation.', F(2117), 'Il est temps que : subjonctif, revoie. EN: revoie.', 'a8-piege'),
        lC('Écoute. Dans quel registre ?', F(2120), ['plutôt oral : c’est dommage de', 'écrit soutenu : il est dommage de'], 0, 'C’est : la forme de l’oral. EN: spoken.', 'a8-cartes'),
      ],
    },
    {
      id: 'r9-distance', label: 'Il a été décidé que', targets: ['passif-mode'],
      questions: [
        mc('« Il est demandé que chaque chambre … libérée avant dix heures. »', ['soit', 'est', 'sera'], 0, 'Demander, c’est vouloir : subjonctif. EN: soit.', 'a9-cartes'),
        mc('« Il est rappelé que les visites … interdites après minuit. »', ['sont', 'soient'], 0, 'Rappeler un fait : l’indicatif. EN: sont.', 'a9-construire'),
        mc('Sur l’affiche de la résidence :', ["Il est interdit de fumer dans l'enceinte de la résidence.", 'On fume pas, hein, dans la résidence.'], 0, 'Il est interdit de : la voix de l’affiche. EN: the notice.', 'a9-table'),
        tI(MODE_Q, 'Il est exigé que chaque résident (avoir) une assurance habitation.', F(2144), 'Exiger : subjonctif, ait. EN: ait.', 'a9-construire'),
        tI('Mets le verbe au plus-que-parfait, et écris la phrase. EN: Put the verb in the pluperfect and write the sentence.', 'Il a été constaté que plusieurs vélos (disparaître).', F(2143), 'Constater : un fait, l’indicatif, avaient disparu. EN: avaient disparu.', 'a9-construire'),
        eS('Il est demandé aux résidents qu’ils trient leurs déchets.', F(2132), 'Il est demandé à quelqu’un de + infinitif. EN: de trier.', 'a9-erreurs',
          ['Il est demandé que les résidents trient leurs déchets.']),
        eS('Il est rappelé que les visites soient interdites après minuit.', F(2131), 'Rappeler un fait : l’indicatif, sont. EN: sont.', 'a9-erreurs'),
        lC('Écoute. Qui a pris la décision ?', F(2136), ['le texte ne le dit pas', 'le directeur', 'chaque étage'], 0, 'Il a été convenu : personne n’est nommé. EN: we are not told.', 'a9-cartes'),
      ],
    },
    {
      id: 'r10-accord', label: 'Il manque deux chaises', targets: ['accord-pluriel'],
      questions: [
        mc('« Il … deux chaises au premier rang. »', ['manque', 'manquent'], 0, 'Le verbe s’accorde avec il. EN: manque.', 'a10-cartes'),
        mc('« Il est … des colis pour les intervenants. »', ['arrivé', 'arrivés'], 0, 'Accord avec il : masculin singulier. EN: arrivé.', 'a10-construire'),
        mc('Quelle phrase est correcte ?', ["Dans ce livre, il s'agit d'une famille d'Abidjan.", "Ce livre s'agit d'une famille d'Abidjan."], 0, 'Il s’agit de n’a pas d’autre sujet que il. EN: il s’agit.', 'a10-cartes'),
        tI('Mets le verbe au présent, et écris la phrase. EN: Put the verb in the present and write the sentence.', 'Il (rester) encore trois badges à imprimer.', F(2160), 'Reste, au singulier. EN: reste.', 'a10-construire'),
        tI('Mets le verbe au passé composé, et écris la phrase. EN: Put the verb in the passé composé and write the sentence.', 'Il (se produire) deux coupures de courant ce matin.', F(2152), 'S’est produit, sans accord. EN: s’est produit.', 'a10-construire'),
        eS('Il existent plusieurs façons de disposer la salle.', F(2150), 'Existe, au singulier. EN: existe.', 'a10-piege',
          ['Il y a plusieurs façons de disposer la salle.']),
        eS("Ce colloque s'agit de l'eau potable.", "Dans ce colloque, il s'agit de l'eau potable.", 'Il s’agit de n’a jamais de sujet personnel : dans ce colloque, il s’agit de…, ou ce colloque porte sur… EN: no personal subject.', 'a10-piege',
          ["Ce colloque porte sur l'eau potable.", "Ce colloque traite de l'eau potable.", "Ce colloque parle de l'eau potable.", "Il s'agit d'un colloque sur l'eau potable."]),
        lC('Écoute. Combien de chaises manque-t-il ?', F(2148), ['deux', 'une', 'aucune'], 0, 'Il manque deux chaises. EN: two.', 'a10-construire'),
      ],
    },
    {
      id: 'r11-degres', label: 'Du certain au douteux', targets: ['degre-faux'],
      questions: [
        mc('Un comptage montre une hausse de 18 %. Quelle tournure ?', ['Il est établi que', 'Il est possible que', 'Il est à craindre que'], 0, 'Un fait mesuré : il est établi que. EN: established.', 'a11-construire'),
        mc('Un seul témoignage d’un riverain. Quelle tournure ?', ['Il est possible que', 'Il est établi que', 'Il ne fait aucun doute que'], 0, 'Une hypothèse. EN: possible.', 'a11-construire'),
        mc('« Il est à craindre que le secteur … trop cher. »', ['devienne', 'devient', 'devenir'], 0, 'Une crainte : subjonctif. EN: devienne.', 'a11-lecture'),
        tI(MODE_Q, 'Il est possible que certains clients (avoir) changé de quartier.', F(2175), 'Possible : subjonctif passé, aient changé. EN: aient.', 'a11-construire'),
        tI(MODE_Q, 'Il est établi que le nombre de piétons (avoir) doublé.', F(2176), 'Établi : indicatif, a doublé. EN: a.', 'a11-construire'),
        eS('Il est peu probable que les livraisons peuvent se faire le soir.', F(2167), 'Peu probable : subjonctif, puissent. EN: puissent.', 'a11-erreurs'),
        eS("Il n'est pas certain que cette hausse se maintient en hiver.", F(2171), 'À l’écrit, la certitude niée : maintienne. EN: maintienne.', 'a11-erreurs', [], ES_ECRIT),
        lC('Écoute. L’autrice conclut-elle que la mesure est un succès ?', F(2177), ['non : ce serait prématuré', 'oui, sans réserve'], 0, 'Il serait prématuré de conclure. EN: no.', 'a11-ecoute'),
      ],
    },
    {
      id: 'r12-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(DECL_REF)} : « Il faut que tu … avec nous. »`, ['viennes', 'viens', 'venir'], 0, `« ${B115_REFRAME} » EN: ${B115_REFRAME_EN}`, 'a2-rappel'),
        mc(`${Cap(SUBJ_INF_REF)} : un conseil pour tout le monde :`, ['Il vaut mieux réserver à l’avance le week-end.', 'Il vaut mieux que réserver à l’avance le week-end.'], 0, `« ${B116_REFRAME} » EN: ${B116_REFRAME_EN}`, 'a3-exemples'),
        mc(`${Cap(CEST_REF)} : dans un texte écrit, lequel ?`, ['Il est difficile de trouver un logement à Montréal.', 'C’est difficile, hein, de trouver un logement à Montréal.'], 0, `« ${B122_REFRAME} » EN: ${B122_REFRAME_EN}`, 'a2-rappel'),
        mc(`${Cap(PASSIF_REF)} : sur une affiche, lequel ?`, ['Il est interdit de fumer dans les chambres.', 'On fume pas dans les chambres.'], 0, `« ${B118_REFRAME} » EN: ${B118_REFRAME_EN}`, 'a9-table'),
        tI(`${Cap(SUBJ_PASSE_REF)} : mets le verbe au subjonctif passé, et écris la phrase.`, "Il est indispensable que les clés (être) rendues à l'agence.", fr(EM1317), `« ${B205_REFRAME} » EN: ${B205_REFRAME_EN}`, 'a4-table'),
        mc(`${Cap(MODES_REF)} : « Il est peu probable que les loyers … gelés. »`, ['soient', 'sont'], 0, `« ${B206_REFRAME} » EN: ${B206_REFRAME_EN}`, 'a5-exemples'),
        tI(`${Cap(INFINITIVES_REF)} : complète avec le petit mot, et écris la phrase.`, "Il s'agit (___) remplir ce formulaire avant lundi.", fr(FP1311), `« ${B214_REFRAME} » EN: ${B214_REFRAME_EN}`, 'a10-cartes'),
        lC(`Écoute. ${Cap(CONCESSION_REF)} : que fait la deuxième phrase ?`, fr(CL2154), ['elle pose un fait qui tient malgré le point accordé', 'elle accorde un deuxième point'], 0, `« ${B216_REFRAME} » EN: ${B216_REFRAME_EN}`, 'a12-lecture'),
      ],
    },
    {
      id: 'r13-examen', label: 'Comme à l’examen', targets: ['note-sans-degres'],
      questions: [
        mc('Format DELF B2, production écrite. Une note officielle doit séparer ce qui est sûr de ce qui ne l’est pas. Quelle phrase le fait ?', ["Il est établi que l'absentéisme a baissé ; il est possible, en revanche, que les coûts augmentent.", 'Il est certain que tout ira mieux grâce à cette mesure.', 'C’est sûr que ça va marcher.'], 0, 'Deux degrés, deux modes. EN: grade each claim.', 'a12-plan'),
        mc('Format TCF. Choisissez la bonne réponse : « Il est indispensable que chaque candidat … sa pièce d’identité. »', ['présente', 'présentera', 'présenter', 'a présenté'], 0, 'Indispensable + subjonctif : présente. EN: présente.', 'a4-cartes'),
        mc('Format TCF : « Il est … que la réunion sera reportée. »', ['probable', 'possible', 'peu probable', 'douteux'], 0, 'Sera, un indicatif : seul probable l’accepte. EN: probable.', 'a5-construire'),
        mc('Format DELF B2, compréhension écrite. « Il n’est pas exclu que le service d’accueil doive rester ouvert le vendredi. » L’autrice…', ['envisage cette possibilité sans l’affirmer', 'affirme que ce sera le cas', 'exclut cette possibilité'], 0, 'Il n’est pas exclu : c’est possible, rien de plus. EN: possible.', 'a12-lecture'),
        tI('Format TCF, phrase à compléter. Mets le verbe au mode qui convient, et écris la phrase.', 'Il est peu probable que cette mesure (suffire) à réduire les coûts.', F(2186), 'Peu probable : suffise. EN: suffise.', 'a12-lecture'),
        tI('Format DELF B2, production. Réécris en une phrase qui commence par « Il est regrettable que ».', "On n'a pas consulté les syndicats, et c'est regrettable.", F(2187), 'Il est regrettable que + subjonctif passé. EN: n’aient pas été consultés.', 'a8-cartes',
          ["Il est regrettable qu'on n'ait pas consulté les syndicats.", "Il est regrettable que l'on n'ait pas consulté les syndicats."]),
        eS('Il semble que les salariés soient plus reposés, et il est probable que la productivité restera stable, mais il est possible que les coûts augmenteront.',
          'Il semble que les salariés soient plus reposés, et il est probable que la productivité restera stable, mais il est possible que les coûts augmentent.',
          'Possible : le subjonctif, même pour l’avenir, augmentent. EN: augmentent.', 'a12-lecture',
          ['Il semble que les salariés sont plus reposés, et il est probable que la productivité restera stable, mais il est possible que les coûts augmentent.'],
          'Format DELF B2, correction. Une forme ne va pas : écris la phrase correcte. EN: One form is wrong; write the sentence correctly.'),
        lC('Format DELF B2, compréhension orale. Écoute cet extrait. Que dit la porte-parole de l’accueil le vendredi ?', DEBAT_ORAL, ['qu’il faudra probablement le garder ouvert', 'qu’il fermera le vendredi', 'que rien n’a changé'], 0, 'Il est même probable qu’il faudra le garder ouvert. EN: it will probably stay open.', 'a11-ecoute'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.16 does. */
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
    { front: 'it is essential that', back: 'il est indispensable que + subjonctif', say: F(2048) },
    { front: 'you only need to', back: 'il suffit de + infinitif', say: F(2033) },
    { front: 'you don’t have to', back: "il n'est pas nécessaire que + subjonctif", say: F(2055) },
    { front: 'it is likely that', back: 'il est probable que + indicatif', say: F(2077) },
    { front: 'it may be that', back: 'il se peut que + subjonctif', say: F(2078) },
    { front: 'it is not certain that', back: "il n'est pas certain que + subjonctif", say: F(2082) },
    { front: 'apparently (hearsay)', back: 'il paraît que + indicatif', say: F(2100) },
    { front: 'it is regrettable that', back: 'il est regrettable que + subjonctif', say: F(2114) },
    { front: 'two chairs are missing', back: 'il manque deux chaises', say: F(2148) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Un il vide, un curseur plein',
  body: `${REFRAME} Tu as repris la liste de ${DECL_REF}, le il est de ${CEST_REF} et l'échelle de ${MODES_REF} pour en faire un système : quatre familles, un curseur, et le mode qui suit. La suite, c'est ${NEGATION_REF} : les négations combinées, leur portée, et comment ne pas les empiler. EN: Next comes lesson 21 in B2: combined negations, their scope, and how not to stack them.`,
  points: [
    'Il faut que, il est dommage que, il est possible que : le subjonctif.',
    'Il est établi, certain, probable que ; il a été décidé que : l’indicatif.',
    'Une certitude niée bascule au subjonctif ; un doute nié revient à l’indicatif.',
    'Il manque, il reste, il s’agit : le verbe reste avec il.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['engagement', 'echelle'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ta note',
    opener: {
      line: "Une proposition sur la table, et ta note pour aider à trancher : ici tu écris du certain au douteux, puis tu passes l'examen. EN: A proposal on the table and your note to help decide: here you write from certain to doubtful, then sit the exam.",
      imageRef: 'lessons/tournures-impersonnelles/act12.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ta note et passé l'examen : quatre-vingt-seize questions, douze manches. EN: You wrote your note and sat the exam: ninety-six questions, twelve rounds.",
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r5-echelle', 'a12-quiz/r9-distance', 'a12-review'],
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
  { id: 'd-carte', title: 'Affirmer ou non', format: 'sort' as const, coach: "Deux piles : l'expression affirme-t-elle le fait, ou non ? EN: does the expression assert the fact?", buckets: ["l'indicatif", 'le subjonctif'], items: [E(2018), E(2022), E(2021), E(2017), E(2019), E(2020)], audio: AUDIO },
  { id: 'd-infinitif', title: 'De, ou rien', format: 'mcq' as const, coach: "Il suffit de, il convient de, il y a lieu de ; il faut et il vaut mieux sans de. EN: which ones take de?", q: 'Il suffit … remplir le formulaire.', opts: ['de', 'que'], correct: 0, why: 'Il suffit de + infinitif. EN: de.', items: [E(2032), E(2033), E(2035), E(2036), E(2038), E(2043)], audio: AUDIO },
  { id: 'd-necessite', title: 'Exiger, c’est le subjonctif', format: 'mcq' as const, coach: "Du minimum à l'obligation, le subjonctif ; et il n'est pas nécessaire que pour dispenser. EN: requirements take the subjunctive.", q: 'Il faut que l’équipe … le registre.', opts: ['remplisse', 'remplit'], correct: 0, why: 'Il faut que : subjonctif. EN: remplisse.', items: [E(2048), E(2049), E(2050), E(2052), E(2054), E(2055)], audio: AUDIO },
  { id: 'd-echelle', title: 'Au-dessus ou en dessous', format: 'sort' as const, coach: "Deux piles : plus ou moins d'une chance sur deux ? EN: above or below even odds?", buckets: ['au-dessus : indicatif', 'en dessous : subjonctif'], items: [E(2064), E(2065), E(2071), E(2066), E(2067), E(2068)], audio: AUDIO },
  { id: 'd-negation', title: 'La bascule', format: 'sort' as const, coach: "Deux piles : une certitude niée, ou un doute nié ? EN: denied certainty or denied doubt?", buckets: ['certitude niée : subjonctif', 'doute nié : indicatif'], items: [E(2082), E(2084), E(2094), E(2089), E(2093), E(2090)], audio: AUDIO },
  { id: 'd-source', title: 'D’où vient l’information', format: 'flashcard' as const, coach: "Lis chaque phrase, dis si c'est une rumeur, une impression, un avis ou un fait vérifié, puis répète-la. EN: name the source, then say it aloud.", items: [E(2098), E(2099), E(2100), E(2102), E(2104), E(2111)], audio: AUDIO },
  { id: 'd-jugement', title: 'Juger au subjonctif', format: 'mcq' as const, coach: "Un jugement, même sur un fait sûr : le subjonctif, et le subjonctif passé pour un fait fini. EN: judgements take the subjunctive.", q: 'Il est normal que les riverains … du calme.', opts: ['veuillent', 'veulent'], correct: 0, why: 'Un jugement : veuillent. EN: veuillent.', items: [E(2114), E(2115), E(2116), E(2117), E(2118), E(2121)], audio: AUDIO },
  { id: 'd-distance', title: 'Le verbe caché', format: 'sort' as const, coach: "Deux piles : le verbe caché affirme-t-il, ou veut-il ? EN: does the hidden verb state or want?", buckets: ['affirmer : indicatif', 'vouloir : subjonctif'], items: [E(2130), E(2131), E(2134), E(2136), E(2133), E(2144)], audio: AUDIO },
  { id: 'd-accord', title: 'Avec il, au singulier', format: 'mcq' as const, coach: "Le verbe et le participe s'accordent avec il, même devant un pluriel. EN: always singular.", q: 'Il … deux chaises au premier rang.', opts: ['manque', 'manquent'], correct: 0, why: 'Avec il : manque. EN: manque.', items: [E(2148), E(2150), E(2151), E(2152), E(2160), E(2161)], audio: AUDIO },
  { id: 'd-degres', title: 'Le bon degré', format: 'flashcard' as const, coach: "Lis chaque phrase et dis son degré : établi, probable, possible, peu probable, pas certain, ou une crainte. EN: name the degree.", items: [E(2164), E(2165), E(2166), E(2167), E(2171), E(2172)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 et le B2 en renfort', format: 'flashcard' as const, coach: "Six phrases des leçons précédentes : dis la famille de chaque tournure et le mode qu'elle choisit. EN: name the family and the mood.", items: [OA1(1201), DPO(1102), OA2(1849), FP1072, FP1311, EM1317], audio: AUDIO },
  { id: 'd-note', title: 'Les phrases d’une note', format: 'flashcard' as const, coach: "Lis chaque phrase, puis donne la tienne sur le même modèle, pour ton propre sujet. EN: read each one, then make your own.", items: [E(2182), E(2183), E(2184), E(2186), E(2188), E(2191)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'famille-melangee', description: 'Picks the mood from the surface il est + adjective instead of the family: a subjunctive after certain or clair, an indicative after il faut que or possible.', detectOn: ['a2-trier', 'a2-erreurs', 'a2-check', 'a12-mission'], drill: 'd-carte', retest: 'd-carte' },
  { id: 'infinitif-bancal', description: 'Adds de after il faut or il vaut mieux, drops it after il suffit, il convient or il y a lieu, or keeps the infinitive when a named person must act.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-infinitif', retest: 'd-infinitif' },
  { id: 'necessite-mode', description: 'Writes il faut que, il est nécessaire or indispensable que, or il importe que with the indicative, or uses il ne faut pas que to mean don’t have to.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a12-mission'], drill: 'd-necessite', retest: 'd-necessite' },
  { id: 'echelle-mode', description: 'Puts the indicative after possible, peu probable, douteux or il se peut, the subjunctive after certain or clair, or misses the subjonctif passé for a past fact.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a12-mission'], drill: 'd-echelle', retest: 'd-echelle' },
  { id: 'bascule-oubliee', description: 'Keeps the indicative after a negated certainty in writing, the subjunctive after a denied doubt, or reads an inverted question as neutral.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a12-mission'], drill: 'd-negation', retest: 'd-negation' },
  { id: 'source-confondue', description: 'Uses il paraît que for a likelihood drawn from data, il me semble que with the subjunctive, or presents an impression as a verified fact.', detectOn: ['a7-trier', 'a7-erreurs', 'a7-check', 'a12-mission'], drill: 'd-source', retest: 'd-source' },
  { id: 'jugement-mode', description: 'Writes a judgement (dommage, regrettable, normal, temps) with the indicative, a present subjunctive for a finished fact, or que with no subject.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a12-mission'], drill: 'd-jugement', retest: 'd-jugement' },
  { id: 'passif-mode', description: 'Gives an impersonal passive the wrong mood (il est rappelé que + subjunctive, il est exigé que + indicative) or writes il est demandé aux résidents qu’ils.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a12-mission'], drill: 'd-distance', retest: 'd-distance' },
  { id: 'accord-pluriel', description: 'Agrees an impersonal verb or participle with the plural that follows (il manquent, il est arrivés), or gives il s’agit de a personal subject.', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-accord', retest: 'd-accord' },
  { id: 'degre-faux', description: 'Claims more or less than the evidence allows in a report: a single testimony as an established fact, or a measured fact as a mere possibility.', detectOn: ['a11-construire', 'a11-erreurs', 'a11-check', 'a12-mission'], drill: 'd-degres', retest: 'd-degres' },
  { id: 'recyclage', description: 'Loses a contrast this lesson sits on: the trigger list, one subject or two, the passive on the notice, il est against c’est, the subjonctif passé, il s’agit de, il n’en reste pas moins que.', detectOn: ['a2-rappel', 'a3-exemples', 'a9-table'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'note-sans-degres', description: 'In an exam-format note, writes every claim with the same strength or gives no recommendations.', detectOn: ['a12-plan', 'a12-scenario', 'a12-mission'], drill: 'd-note', retest: 'd-note' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names an option position. */
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
  sheet('sheet-carte', 'La carte des tournures impersonnelles', ['quatre familles', 'le mode de chacune', 'la note officielle'], [
    teach('sheet-carte-teach', 'Le il vide, le curseur plein',
      `${REFRAME} Le il ne remplace aucun nom. L'expression qui le suit dit si tu exiges, si tu affirmes, si tu supposes, si tu juges ou si tu laisses la décision sans signature, et le mode suit : ce qui affirme prend l'indicatif, ce qui exige, doute ou juge prend le subjonctif, et personne de précis appelle l'infinitif. EN: ${REFRAME_EN}`),
    table('sheet-carte-table', 'Quatre familles', ['Famille', 'Tournures', 'Ce qui suit', 'Exemple'], [
      ['nécessité', 'il faut, il suffit, il importe, il est indispensable que', 'subjonctif', 'Il faut que la bibliothèque soit ouverte le dimanche.'],
      ['nécessité, pour tous', 'il faut, il suffit de, il convient de, il y a lieu de', 'infinitif', 'Il suffit de remplir le formulaire en ligne.'],
      ['au-dessus de la moitié', 'établi, certain, clair, évident, probable, aucun doute', 'indicatif', 'Il est probable que la tempête faiblira dans la nuit.'],
      ['en dessous de la moitié', 'possible, il se peut, peu probable, douteux, pas exclu', 'subjonctif', 'Il est peu probable que le courant soit coupé.'],
      ['la source', 'il paraît, il me semble, il s’avère / il semble', 'indicatif / subjonctif', 'Il paraît que les billets seront gratuits.'],
      ['jugement', 'il est dommage, regrettable, étonnant, normal, temps que', 'subjonctif', 'Il est temps que la ville revoie son plan de circulation.'],
      ['distance, affirmer', 'il a été décidé, rappelé, prévu, convenu, constaté que', 'indicatif', 'Il est rappelé que les visites sont interdites après minuit.'],
      ['distance, vouloir', 'il est demandé, exigé, souhaitable que', 'subjonctif', 'Il est exigé que chaque résident ait une assurance habitation.'],
      ['accord', 'il manque, il reste, il existe, il est arrivé', 'le verbe au singulier', 'Il manque deux chaises au premier rang.'],
    ]),
    table('sheet-carte-note', 'La note officielle : liste de contrôle', ['À vérifier', 'Comment'], [
      ["L'objet est annoncé", 'la présente note examine…'],
      ['Les faits établis viennent d’abord', 'il est établi que, il ressort de + indicatif'],
      ['Chaque point incertain a son degré', 'probable (indicatif), possible, peu probable, pas certain (subjonctif)'],
      ['Chaque affirmation a sa source', 'des chiffres, une enquête, un témoignage'],
      ['Les recommandations ferment la note', 'il convient de, il est indispensable que, il est recommandé de'],
      ['Pas de je, pas de formule orale', "il est dommage que plutôt que c'est dommage"],
    ]),
  ]),
  sheet('sheet-necessite', 'La nécessité', ['avec l’infinitif', 'avec que', 'interdire ou dispenser'], [
    teach('sheet-necessite-teach', 'Du minimum à l’obligation',
      `« ${B116_REFRAME} » Pour tout le monde : il faut, il vaut mieux + infinitif ; il suffit de, il convient de, il y a lieu de, il importe de + infinitif. Pour quelqu'un de précis : que + subjonctif, du minimum (il suffit que) à l'obligation (il est indispensable que). EN: ${B116_REFRAME_EN}`),
    table('sheet-necessite-inf', 'Avec l’infinitif', ['Tournure', 'Construction', 'Registre'], [
      ['il faut', 'sans de', 'courant'],
      ['il vaut mieux', 'sans de', 'courant'],
      ['il suffit de, il suffit d’un + nom', 'avec de', 'courant'],
      ['il convient de', 'avec de', 'soutenu'],
      ['il y a lieu de, il n’y a pas lieu de', 'avec de', 'administratif'],
      ['il importe de', 'avec de', 'soutenu'],
      ['il te faut + nom', 'sans de', 'soigné'],
    ]),
    table('sheet-necessite-que', 'Avec que et le subjonctif', ['Tournure', 'Force', 'Exemple'], [
      ['il suffit que', 'le minimum', "Il suffit que tu fasses une photo de l'ordonnance."],
      ['il vaut mieux que', 'un conseil', 'Il vaut mieux que tu prennes ta pause avant minuit.'],
      ['il est souhaitable que', 'un vœu', 'Il est souhaitable que chaque famille prévienne avant de venir.'],
      ['il faut que, il est nécessaire que', "l'obligation", 'Il est nécessaire que chaque visiteur mette un masque.'],
      ['il importe que, il est essentiel que', "l'obligation, soutenu", "Il importe que l'équipe de nuit soit prévenue."],
      ['il est indispensable que', "l'obligation la plus forte", 'Il est indispensable que chaque patient ait son bracelet.'],
    ]),
    table('sheet-necessite-negation', 'Interdire ou dispenser', ['Tournure', 'Sens', 'En anglais'], [
      ['il ne faut pas que tu partes', "c'est interdit", 'you must not leave'],
      ["il n'est pas nécessaire que tu sois là", 'tu es dispensé', "you don't have to be there"],
      ["tu n'es pas obligée de rester", 'tu es dispensée', "you don't have to stay"],
    ]),
  ]),
  sheet('sheet-certitude', 'La certitude et ses degrés', ['l’échelle', 'la négation et la question', 'la source'], [
    teach('sheet-certitude-teach', 'Une chance sur deux',
      `« ${B206_REFRAME} » Au-dessus d'une chance sur deux, tu affirmes : l'indicatif. En dessous, tu n'affirmes pas : le subjonctif, qui couvre aussi l'avenir. Pour un fait passé : passé composé d'un côté, subjonctif passé de l'autre. Nie une certitude et le subjonctif arrive ; nie un doute et l'indicatif revient. EN: ${B206_REFRAME_EN}`),
    table('sheet-certitude-echelle', 'L’échelle', ['Tournure', 'Degré', 'Mode'], [
      ['il est établi, il ne fait aucun doute que', 'sûr', 'indicatif'],
      ['il est certain, sûr, clair, évident que', 'sûr', 'indicatif'],
      ['il est probable que', 'plus d’une chance sur deux', 'indicatif'],
      ['il est possible que, il se peut que', 'peut-être', 'subjonctif'],
      ['il se pourrait que, il n’est pas exclu que', 'peut-être, prudent', 'subjonctif'],
      ['il est peu probable, douteux que', 'sans doute pas', 'subjonctif'],
      ['il est exclu que', 'non', 'subjonctif'],
    ]),
    table('sheet-certitude-negation', 'La négation et la question', ['Forme', 'Mode', 'Exemple'], [
      ["il n'est pas certain, sûr, clair, prouvé que", "subjonctif (à l'écrit)", "Il n'est pas certain que le ministre soit au courant."],
      ["il n'est pas impossible que", 'subjonctif', "Il n'est pas impossible que le rapport ait été modifié."],
      ['il ne fait aucun doute que', 'indicatif', 'Il ne fait aucun doute que les chiffres ont été vérifiés.'],
      ["il n'est pas douteux que (soutenu)", 'indicatif', "Il n'est pas douteux que la presse en parlera."],
      ['est-il certain que… ?', 'subjonctif : on doute', 'Est-il certain que la réunion ait eu lieu ?'],
      ['est-il vrai que… ?', 'indicatif : on demande', 'Est-il vrai que le maire a démissionné ?'],
    ]),
    table('sheet-certitude-source', 'La source', ['Tournure', 'Ce que tu dis', 'Mode'], [
      ['il paraît que, paraît-il', 'une rumeur, sans garantie', 'indicatif'],
      ['il semble que, il semblerait que', 'une impression', "subjonctif à l'écrit (l'indicatif se lit aussi)"],
      ['il me semble que', 'ton avis', 'indicatif'],
      ['il ne me semble pas que', 'ton avis, nié', 'subjonctif'],
      ["il s'avère que, il s'est avéré que", 'un fait vérifié', 'indicatif'],
      ['il se trouve que', "c'est ainsi, par hasard", 'indicatif'],
    ]),
  ]),
  sheet('sheet-jugement', 'Le jugement', ['il est + adjectif + que', 'de ou que', 'il est ou c’est'], [
    teach('sheet-jugement-teach', 'Juger, ce n’est pas affirmer',
      `« ${B115_REFRAME} » Il est dommage, regrettable, étonnant, normal, heureux, temps que : le subjonctif, même pour un fait sûr, et le subjonctif passé pour un fait fini. Pour tout le monde : il est + adjectif + de + infinitif. EN: ${B115_REFRAME_EN}`),
    table('sheet-jugement-table', 'Six jugements', ['Tournure', 'Sens', 'Exemple'], [
      ['il est dommage que', 'un regret', 'Il est dommage que la mairie ferme les quais si tôt.'],
      ['il est regrettable que', 'un regret, soutenu', 'Il est regrettable que la navette ait été supprimée.'],
      ['il est étonnant, surprenant que', 'une surprise', 'Il est étonnant que si peu de bénévoles aient répondu.'],
      ['il est normal, naturel que', 'une chose compréhensible', 'Il est normal que les riverains veuillent du calme.'],
      ['il est heureux que', 'une chance', "Il est heureux que la pluie se soit arrêtée à temps."],
      ['il est temps que', 'un appel', 'Il est temps que la ville revoie son plan de circulation.'],
    ]),
    table('sheet-jugement-registre', 'Il est ou c’est', ['À l’écrit', 'À l’oral', 'Remarque'], [
      ['il est dommage que', "c'est dommage que, dommage que", 'les deux sont corrects'],
      ['il est dommage de partir', "c'est dommage de partir", 'pour tout le monde : de'],
      ['il est difficile de trouver', "c'est difficile de trouver", 'la leçon 22 du B1'],
      ['il est interdit de fumer', 'on ne peut pas fumer', "l'affiche et le couloir"],
    ]),
  ]),
  sheet('sheet-distance', 'La distance et l’accord', ['le passif impersonnel', 'le verbe caché', 'il manque, il s’agit'], [
    teach('sheet-distance-teach', 'Personne ne signe',
      `« ${B118_REFRAME} » Il a été décidé, il est rappelé, il est demandé : l'avis ne dit pas qui décide. Le verbe caché choisit le mode : décider, rappeler, prévoir, convenir, constater affirment (indicatif) ; demander, exiger, souhaiter veulent (subjonctif). Avec il, le verbe reste au singulier. EN: ${B118_REFRAME_EN}`),
    table('sheet-distance-table', 'Le verbe caché', ['Tournure', 'Mode', 'Exemple'], [
      ['il a été décidé que', 'indicatif', 'Il a été décidé que la salle de sport fermerait à vingt-deux heures.'],
      ['il est rappelé que', 'indicatif', 'Il est rappelé que les visites sont interdites après minuit.'],
      ['il est prévu que / de', 'indicatif / infinitif', 'Il est prévu que les travaux dureront trois semaines.'],
      ['il a été constaté que', 'indicatif', 'Il a été constaté que plusieurs vélos avaient disparu.'],
      ['il est demandé, exigé que', 'subjonctif', 'Il est demandé que chaque chambre soit libérée avant dix heures.'],
      ['il est demandé à quelqu’un de', 'infinitif', 'Il est demandé aux résidents de trier leurs déchets.'],
      ['il sera procédé à + nom (à reconnaître)', 'nom', 'Il sera procédé à un contrôle des extincteurs lundi.'],
    ]),
    table('sheet-distance-accord', 'Il commande le verbe', ['Tournure', 'Accord', 'Exemple'], [
      ['il manque, il reste', 'singulier', 'Il manque deux chaises au premier rang.'],
      ['il existe', 'singulier', 'Il existe plusieurs façons de disposer la salle.'],
      ['il est arrivé, il s’est produit', 'participe masculin singulier', "Il s'est produit deux coupures de courant ce matin."],
      ['il a été vendu', 'participe masculin singulier', 'Il a été vendu plus de trois cents billets.'],
      ['il s’agit de', 'jamais de sujet personnel', "Dans ce livre, il s'agit d'une famille d'Abidjan."],
      ['il arrive que', '+ subjonctif', 'Il arrive que le générateur ne suffise pas.'],
      ['il en va de même pour', 'singulier', 'Il en va de même pour les badges.'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-20-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const EXERCISE = 'One voice, read as written WITH the bracketed infinitives and the choices spoken as printed: this is the exercise text, not the answer.';
const TRAP = "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions in promptSound are NEVER spoken.";
const CARDS = 'One coach voice, calm, four cards in order; each card reads its French line once, then its body.';
const REC_DESC: Record<string, string> = {
  'rec-b2-20-ag': "The minutes of the co-owners' meeting (act 1), one male voice with a Montréal accent, one take, a volunteer secretary reading his own minutes: plain, careful, a little formal. The impersonal openings (il a été décidé, il est rappelé) are read at the pace of the rest.",
  'rec-b2-20-rappel': `The four recap cards (act 2). ${CARDS}`,
  'rec-b2-20-carte-ecoute': `${ONE_TAKE} Eight lines about the same library. Keep the same melody on every line so that only the opening expression changes; line seven (c'est dommage) is said a little more casually.`,
  'rec-b2-20-lea': 'Léa and a coach voice (act 3), Lausanne, one take, a town-hall counter. Léa is helpful and precise, never curt. A Swiss accent is welcome.',
  'rec-b2-20-infinitif': `The four infinitive cards (act 3). ${CARDS} « Il y a lieu de » is read [il.i.a.ljø.də], one group.`,
  'rec-b2-20-piege-infinitif': TRAP,
  'rec-b2-20-texte-a3': `The Lausanne newcomers' guide (act 3). One voice; each blank is spoken as a short pause. ${EXERCISE}`,
  'rec-b2-20-lambert': 'Mme Lambert, Julien and a coach voice (act 4), Liège, one take, a hospital ward office. Mme Lambert is firm and warm; Julien reads the memo aloud. A Belgian accent is welcome.',
  'rec-b2-20-necessite': `The four necessity cards (act 4). ${CARDS} Card four contrasts « il ne faut pas que » and « il n'est pas nécessaire que »: give both the same weight.`,
  'rec-b2-20-texte-a4': `The cardiology ward memo (act 4). ${EXERCISE}`,
  'rec-b2-20-tempete-ecoute': `${ONE_TAKE} Eight lines, one spokesperson for a civil-protection service, Québec accent, calm and measured. Do NOT colour the certain lines as more confident than the doubtful ones: only the words must tell the degree.`,
  'rec-b2-20-echelle': `The four scale cards (act 5). ${CARDS}`,
  'rec-b2-20-piege-echelle': TRAP,
  'rec-b2-20-texte-a5': `The local radio weather point (act 5). One voice, a radio presenter. ${EXERCISE}`,
  'rec-b2-20-nora': 'Nora, Tom and a coach voice (act 6), Brussels, one take, a newsroom late in the afternoon. Nora is exacting but kind; Tom reads his lines a little too confidently. A Belgian accent is welcome.',
  'rec-b2-20-negation': `The four negation cards (act 6). ${CARDS} Card four reads the two questions with a rising question melody.`,
  'rec-b2-20-piege-negation': TRAP,
  'rec-b2-20-texte-a6': `The newspaper correction (act 6). One voice; the bracketed sentences are read as written (they are the affirmative originals). ${EXERCISE}`,
  'rec-b2-20-dakar-ecoute': `${ONE_TAKE} Eight lines of a radio news bulletin, one voice with a light Senegalese accent, neutral news delivery: no line may sound more certain than another.`,
  'rec-b2-20-source': `The four source cards (act 7). ${CARDS} « Paraît-il » is read [pa.ʁɛ.til], the t sounded.`,
  'rec-b2-20-texte-a7': "The Dakar radio bulletin (act 7), one voice, a news presenter, read as written.",
  'rec-b2-20-ines': 'Inès, Hugo and a coach voice (act 8), Lyon, one take, a volunteers’ office the morning after the festival: tired, satisfied, frank. A light Lyon accent is welcome.',
  'rec-b2-20-jugement': `The four judgement cards (act 8). ${CARDS} Card four reads « c'est dommage » more casually than « il est dommage ».`,
  'rec-b2-20-piege-jugement': TRAP,
  'rec-b2-20-texte-a8': `The volunteers' review (act 8). ${EXERCISE}`,
  'rec-b2-20-garcia': 'Mme Garcia, Yanis and a coach voice (act 9), Toulouse, one take, a residence office. Mme Garcia dictates in a steady notice voice; Yanis repeats in plain speech. A Toulouse accent is welcome.',
  'rec-b2-20-distance': `The four distance cards (act 9). ${CARDS}`,
  'rec-b2-20-texte-a9': `The residence notice (act 9). One voice, read like an official announcement. ${EXERCISE}`,
  'rec-b2-20-fanta': 'Fanta, Ibrahim and a coach voice (act 10), Abidjan, one take, an empty conference room the evening before: brisk, cheerful, counting. An Ivorian accent is welcome.',
  'rec-b2-20-accord': `The four agreement cards (act 10). ${CARDS}`,
  'rec-b2-20-piege-accord': TRAP,
  'rec-b2-20-texte-a10': `Fanta's message (act 10). ${EXERCISE}`,
  'rec-b2-20-rapport': "The evaluation report conclusion (act 11), one female voice with a Québec accent, one take, a civil servant presenting her findings: even, precise, never emphatic.",
  'rec-b2-20-interview-ecoute': `${ONE_TAKE} Eight lines, the report's author interviewed on local radio, Québec accent. Every degree is carried by the words, not by the tone.`,
  'rec-b2-20-texte-a11': "The trainee's first draft (act 11), one young male voice, a little too confident, read as written.",
  'rec-b2-20-modele': "The model note on the four-day week (act 12), one female voice with a Belgian accent, one take, read like a briefing to elected officials: clear, neutral, the uncertain points with the same weight as the facts.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 20',
  intro: 'At B1 you learned the triggers one by one (il faut que, il est possible que) and the il est / c’est choice. At B2 the impersonal il becomes a system: the il points at no one, and the expression after it says how far you commit. Necessity is graded from il suffit que to il est indispensable que (subjunctive), with il faut, il convient de and il y a lieu de for no one in particular, and il ne faut pas que (must not) set against il n’est pas nécessaire que (don’t have to). Probability is graded by even odds: established, certain, probable take the indicative; possible, peu probable, douteux the subjunctive, and a negation flips the mood. You separate hearsay (il paraît), impression (il semble), opinion (il me semble) and verified fact (il s’avère), judge facts with il est dommage que, write notices that nobody signs (il a été décidé que, il est demandé que), and keep impersonal verbs singular (il manque deux chaises). The task: a 200 to 250 word official note, DELF B2 style, that grades its claims from certain to doubtful and recommends.',
  skill: 'PE',
  grammarAssumed: [DECL_UNIT, SUBJ_INF_UNIT, PASSIF_UNIT, CEST_UNIT, SUBJ_PASSE_UNIT, MODES_UNIT],
  grammarIntroduced: [
    'The impersonal il as an empty subject and four graded families (necessity, probability, judgement, distance), each with its mood',
    'The infinitive necessity family: il faut and il vaut mieux without de; il suffit de, il convient de, il y a lieu de, il importe de with de; il te faut + noun; que + subjunctive when a named person must act',
    'Necessity graded with the subjunctive, from il suffit que and il vaut mieux que to il faut que, il importe que and il est indispensable que; il ne faut pas que (forbidden) against il n’est pas nécessaire que (let off)',
    'Probability graded by even odds: il est établi, certain, clair, évident, probable, il ne fait aucun doute + indicative against il est possible, il se peut, il se pourrait, peu probable, douteux, il n’est pas exclu + subjunctive; the past on both sides',
    'The negation flip: a denied certainty takes the subjunctive in writing, a denied doubt the indicative; il n’est pas impossible que; the inverted question with either mood',
    'The source of a claim: il paraît que (hearsay, indicative), il semble que (impression, subjunctive in writing), il me semble que (opinion, indicative), il s’avère que and il se trouve que (verified)',
    'Judgement: il est dommage, regrettable, étonnant, normal, heureux, temps que + subjunctive, subjonctif passé for a finished fact, de + infinitive for everyone, il est in writing against c’est in speech',
    'Distance: impersonal passives in notices and minutes, il a été décidé, rappelé, prévu, convenu, constaté que + indicative against il est demandé, exigé que + subjunctive; il est interdit de against on ne peut pas; il est question de and il sera procédé à for recognition',
    'Impersonal verbs with the real subject after them (il reste, il manque, il existe, il est arrivé, il s’est produit, il a été vendu) stay singular; il s’agit de never takes a personal subject; il arrive que; il en va de même pour',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Au B1, tu as appris les déclencheurs un par un, et le choix entre il est et c'est. Ici, le il impersonnel devient un système : il ne désigne personne, et ce qui le suit dit jusqu'où tu t'engages. Tu gradues une exigence, tu places une affirmation au-dessus ou en dessous d'une chance sur deux, tu retournes le mode quand la négation arrive, tu dis d'où vient une information, tu juges un fait et tu rédiges des avis que personne ne signe. À la fin, tu écris une note officielle de 200 à 250 mots, du certain au douteux.",
    minutes: 160,
    difficulty: 4,
    glyph: 'il',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: TOURNURES_IMPERSONNELLES_TERMS,
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
