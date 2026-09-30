// b2.16.l1 « La concession »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.07 futur antérieur and
// b2.12 gérondif), under the B2 rules of B2-BUILD-LOG.md (form, meaning,
// choice, text).
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema now, so the lesson validates with it in place (as b2.07 does).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act (B2): meet (scene, story, reading or listening), name
//   (cardDeck, tapTable, examples), build (groupDrill, gated), choose (a
//   drill where the MEANING or the WORD picks the form), trap (trapDrill
//   stepped or commonErrors), then from act 3 on the form INSIDE A TEXT of
//   60 to 120 words (complete, rewrite, sort), then the gated act check.
//
//    1  Accorder un point              6   meet concession in an opinion
//                                           column; the scene's wrong option is
//                                           « même si vous ayez raison »
//    2  Un point, cinq formes          7   the map: subjunctive, indicative,
//                                           conditional, infinitive, noun, two
//                                           sentences; recap of lesson 32 in
//                                           B1, lessons 6, 12 and 23 in B2
//    3  Bien que, quoique, encore que  7   subjonctif passé for a prior fact,
//                                           encore que (soutenu), the ellipsis,
//                                           sans que against sans; « bien que +
//                                           indicatif » named as spoken
//    4  Quoi que, où que, qui que      8   quoi que against quoique, quel que
//                                           soit and its agreement, où que, qui
//                                           que, quoi que ce soit
//    5  Si riche qu'il soit            7   si / aussi… que + subjunctive,
//                                           adjectif + soit-il, tout… que +
//                                           indicative, toute before a feminine
//                                           consonant, quelque… que (recognise)
//    6  Même si, toujours l'indicatif  7   fact, hypothesis (imparfait), past
//                                           (plus-que-parfait); never the
//                                           subjunctive, future or conditional
//    7  Quand bien même                7   + conditional, même si + imparfait
//                                           as the everyday twin, quand même is
//                                           something else
//    8  Avoir beau, loin de, au lieu de 7  avoir beau in every tense and with
//                                           an infinitif passé; loin de against
//                                           au lieu de; sans + infinitive
//    9  Malgré, en dépit de            7   noun only; clause to noun (lesson
//                                           10 in B2); malgré le fait que;
//                                           « malgré que » named as contested
//   10  Pourtant, toutefois…           7   place and register of the adverbs,
//                                           certes… mais, il n'en reste pas
//                                           moins que, toujours est-il que
//   11  Concéder ou opposer            7   alors que / tandis que compare, bien
//                                           que overrides; alors que that
//                                           concedes; en revanche, par contre
//   12  Ton essai                      11  model, plan, role play, TASK, quiz
//
//   TOTAL 88 missions, 12 acts. Corpus: 184 authored rows (.2000-.2197) in
//   twelve blocks plus 26 reused seed rows, released act by act through
//   `deckTranche`. Quiz: 12 rounds of 8 (one per act 2 to 11, a recycling
//   round citing lessons 10 and 32 in B1 and 3, 5, 6, 10, 12 and 23 in B2,
//   an exam-format round). Chapter artwork: `concession-avancee-image-
//   prompts.md`, twelve prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (a later lesson may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Concéder, c'est accorder un point sans céder la partie : le mot qui
//   l'accorde impose sa forme. »
//   EN: To concede is to grant a point without giving up the game: the word
//   that grants it sets the form.
//
//   ONE METAPHOR, LE POINT ACCORDÉ: a concession grants the other side a
//   point and keeps the game. The word that grants it imposes its form
//   (subjunctive, indicative, conditional, infinitive, noun). When nothing is
//   granted and two facts sit side by side, it is opposition (act 11).
//   Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    concession at B2 by the form each tool imposes: bien que with the
//           subjonctif passé, quoique, encore que, sans que, the ellipsis;
//           quoi que, quel que soit, où que, qui que; si / aussi… que,
//           soit-il, tout… que; même si in its three tenses; quand bien même;
//           avoir beau in every tense, loin de; malgré le fait que, en dépit
//           de, nonobstant (recognition); the discourse adverbs and il n'en
//           reste pas moins que, toujours est-il que; concession against
//           opposition; the register of each tool; the spoken and contested
//           forms (bien que + indicatif, malgré que) under the gate B2-2
//           spoken-variant decision.
//   QUOTES  the reframes of lessons 10 and 32 in B1 and 6, 12 and 23 in B2,
//           re-exported from their corpus files; rows of lesson 32 in B1 and
//           lessons 3, 5, 6, 22 and 23 in B2 reused BY ID.
//   LEAVES  purpose (pour que, afin de) to a later lesson, named without a
//           number (its trail position is not occupied in this publish), in
//           the roundup. The gérondif « tout en » is cited (lesson 12 in B2),
//           never re-taught; its rows are not in the seed yet and are not
//           named.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English still authored on every
//   learner string (an `en` field or a final `EN: `), never on an answer.
//   tu in every instruction; characters use what the situation needs.
//   Every `say` is French. No spaced « ? » or « ! » in any scene or story
//   bubble. The scenario uses ’ only and embeds no corpus row. Other lessons
//   cited by trail position in words, never by raw id. Mission answer slots
//   are spread by `spreadMissions()`, the quiz by `spreadSlots()` (no text
//   changes, no `why` names a position), as b2.12 does. Gate B2-2 spoken-
//   variant decision: the written norm is taught and tested; « bien que +
//   indicatif » and « malgré que » are named as spoken or contested and cost
//   at most one point in the task; « même si + subjonctif » is taught as
//   simply wrong. « Quoi que » / « quoique » and « quel que » / « quelque »
//   are never tested by typing (fold() strips the space; corpus §A.8).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. TWELVE acts and TWELVE quiz rounds: act 1 has no round of its own (as
//      lesson 10 in B2), so the rounds are acts 2 to 11, recycling, exam.
//   2. « TOUT + ADJECTIF + QUE » is taught with the indicative as the norm
//      and the subjunctive as « also found »; only the indicative is asked
//      for, and a question that could take both asks for « la forme la plus
//      courante ». Keep, or teach the indicative only?
//   3. « PAR CONTRE » is taught as correct and mostly spoken, « certain
//      people criticise it in writing »; the task never penalises it. Agree?
//   4. « QUELQUE + ADJECTIF + QUE », « QUELQUES + NOM + QUE » and
//      « NONOBSTANT » are for recognition only (flashcard rows, no voiceflash,
//      never asked for). Keep them, or drop them as C1?
//   5. THE TASK offers two topics (télétravail as a right, advertising in the
//      street), 200 to 250 words, FIVE criteria (tâche 3, cohérence 3,
//      étendue 2, correction 2, registre 2 = 12), as lessons 7 and 12 in B2.
//      Annotation block inside `modelAnswer`.
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
  LECTURE_CHRONIQUE, LECTURE_MODELE,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A11,
  B132_REFRAME, B132_REFRAME_EN, B132_CARTE, B132_CARTE_EN, B110_REFRAME, B110_REFRAME_EN,
  B206_REFRAME, B206_REFRAME_EN, B212_REFRAME, B212_REFRAME_EN, B223_REFRAME, B223_REFRAME_EN,
  SI_UNIT, CONCESSION_UNIT, SI_PASSE_UNIT, SUBJ_PASSE_UNIT, MODES_UNIT,
  SI_REF, MEME_REF, CONCESSION_REF, SI_PASSE_REF, SUBJ_PASSE_REF, MODES_REF, NOMINAL_REF,
  GERONDIF_REF, ARGU_REF, LATER_REF,
} from './concession-avancee-corpus.ts';
import { CONCESSION_AVANCEE_TERMS } from './concession-avancee-terms.ts';

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
const CL = (n: number) => `fr.b1.connecteurs-logiques.${n}`;
const OA = (n: number) => `fr.b2.opinions-et-avis.${n}`;
const PF1495 = 'fr.b2.projets-et-futur.1495';

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.16: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.16: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.16: no respell on ${id}`);
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
 *  120 words, with the answers behind the modal. Always the same title, so a
 *  learner and a reviewer see the loop. */
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
 *  ACT 1: ACCORDER UN POINT
 *
 *  Meet concession, and the one rule under it. The scene's wrong option is
 *  « même si + subjonctif », the one form this lesson calls simply wrong: the
 *  room hears the fault and forgets the argument. NO « ? » OR « ! » IN ANY
 *  BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const MEME_SI_SUBJ = {
  fr: 'Même si vous ayez raison sur les chiffres, un quota reste nécessaire.',
  ipa: '/mɛm si vu.zɛ.je ʁɛ.zɔ̃ syʁ le ʃifʁ œ̃ kɔ.ta ʁɛst ne.se.sɛʁ/',
  respell: '[mem see voo-zeh-YAY reh-ZOHⁿ | sür lay SHEEFR | uhⁿ ko-TA | rest nay-say-SEHR]',
  en: 'Even if you are right about the figures, a quota is still necessary. (With a subjunctive that même si never takes.)',
};

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La consultation publique',
  frSub: 'Accorder un point, garder le sien',
  setting: { place: 'Le centre communautaire du Vieux-Québec', city: 'Québec', time: 'mardi, 19 h', ambience: 'des chaises pliantes, un micro, une greffière qui prend des notes' },
  beats: [
    {
      kind: 'narration',
      text: "Québec, une consultation publique sur un quota de visiteurs dans le Vieux-Québec. Tu habites le quartier et tu es pour. M. Gagnon, restaurateur, vient de parler contre.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'M. Gagnon',
      fr: 'Sans les touristes, je perds un tiers de mes clients. Ce sont mes chiffres, pas une opinion.',
      en: 'Without the tourists, I lose a third of my customers. Those are my figures, not an opinion.',
      respell: '[sahⁿ lay too-REEST | zhuh pehr uhⁿ TYEHR | duh may klee-YAHⁿ | suh sohⁿ may SHEEFR | pa ü-no-pee-NYOHⁿ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Je comprends. Mais le quartier n’en peut plus.',
      en: 'I understand. But the neighbourhood cannot take any more.',
      respell: '[zhuh kohⁿ-PRAHⁿ | meh luh kar-TYAY | nahⁿ peu PLÜ]',
      stage: 'La présidente te demande une seule phrase pour le procès-verbal.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: 'Tu veux lui accorder le point des chiffres, puis garder ta position. La salle écoute, et la greffière note chaque mot.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Quelle phrase accorde le point sans faire grimacer la salle.',
      size: 'lg',
      options: [
        { fr: MEME_SI_SUBJ.fr, respell: MEME_SI_SUBJ.respell, en: MEME_SI_SUBJ.en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(2012)), respell: rsOf(E(2012)), en: en(E(2012)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'La greffière note sans lever les yeux. M. Gagnon hoche la tête : son point est accordé, et ta position tient.',
        breaks: 'Deux personnes au premier rang se regardent. L’oreille a buté sur « vous ayez », et la salle retient la faute plutôt que l’argument.',
      },
    },
    {
      kind: 'break',
      heading: 'Même si ne prend jamais le subjonctif',
      body: "Même si est un si : il garde l'indicatif, vous avez raison. Bien que accorderait le même point avec le subjonctif : bien que vous ayez raison. Le mot choisi impose sa forme. EN: même si keeps the indicative; bien que would take the subjunctive.",
      wrong: { fr: MEME_SI_SUBJ.fr, ipa: MEME_SI_SUBJ.ipa, respell: MEME_SI_SUBJ.respell, en: MEME_SI_SUBJ.en },
      right: { fr: fr(E(2012)), ipa: ipaOf(E(2012)), respell: rsOf(E(2012)), en: en(E(2012)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Accorder un point avant de répondre, c'est la base de tout débat, à l'oral comme à l'écrit. Cette leçon t'apprend tous les mots qui l'accordent, et la forme que chacun impose : subjonctif, indicatif, conditionnel, infinitif ou nom.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['point', 'forme'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Choisir la forme que le mot impose', s: 'Actes 2 à 5 : bien que, quoi que, où que, si… que, tout… que' },
    { t: 'Concéder une hypothèse ou un effort', s: 'Actes 6 à 9 : même si, quand bien même, avoir beau, malgré' },
    { t: 'Relier deux phrases, et ne pas confondre', s: 'Actes 10 et 11 : toutefois, il n’en reste pas moins que, en revanche' },
    { t: 'Écrire un essai de 200 à 250 mots', s: 'Acte 12 : accorder le point adverse, puis y répondre' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Trop de touristes ?',
  frSub: 'Lis, et repère chaque point accordé',
  text: LECTURE_CHRONIQUE,
  glossary: [
    { word: 'riverains', en: 'local residents', note: 'Les gens qui habitent la rue ou le quartier.' },
    { word: 'bondées', en: 'packed', note: 'Pleines de monde, au point de ne plus avancer.' },
    { word: 'les autocars', en: 'the coaches', note: 'Les grands bus de tourisme.' },
    { word: 'une taxe de séjour', en: 'a tourist tax', note: 'Une petite somme payée par nuit d’hôtel.' },
  ],
  questions: [
    { q: 'Global : quelle est la position de la chroniqueuse sur le quota ?', a: "Elle est contre : le problème réel existe, mais un quota est une mauvaise réponse ; elle propose de mieux accueillir." },
    { q: 'Détail : quel point accorde-t-elle d’abord aux riverains ?', a: "Que le tourisme rend parfois le quartier invivable : bien que le tourisme fasse vivre le quartier, il le rend invivable." },
    { q: '« Même si les visiteurs étaient deux fois moins nombreux… » : un fait ou une hypothèse ?', a: "Une hypothèse : l'imparfait après même si, puis le conditionnel (resteraient)." },
    { q: 'Inférence : que veut dire « quand bien même un quota fonctionnerait » ?', a: "Elle imagine le cas le plus favorable à l'autre camp, et montre que le problème resterait : la foule irait ailleurs." },
    { q: 'Forme : cite une concession au subjonctif, une au conditionnel et une avec un nom.', a: "Bien que le tourisme fasse vivre ; quand bien même un quota fonctionnerait ; malgré le bruit et les files d'attente." },
    { q: 'Position : comment la chroniqueuse rend-elle sa critique acceptable ?', a: "Elle accorde d'abord ce qui est juste chez l'autre camp (l'exaspération, la foule), puis répond : certes, il n'en reste pas moins que, toutefois." },
  ],
  audio: REC('rec-b2-16-chronique'),
  say: REFRAME,
  terms: ['point', 'forme'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère le point accordé',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le point accordé', [
      it(E(2000), 'le tourisme fait vivre le quartier'),
      it(E(2001), 'un quota réduirait la foule'),
      it(E(2006), 'le bruit existe'),
      it(E(2011), 'votre inquiétude est compréhensible'),
    ], chk('Dans ces phrases, que fait la partie introduite par bien que, certes ou malgré ?',
      ['elle reconnaît un fait qui gêne la position', 'elle donne la cause de la position', 'elle annonce la conclusion'], 0,
      'Elle accorde un point, puis la phrase maintient la position. EN: it grants a point.')),
    grp('Un mot, une forme', [
      it(E(2002), 'quelles que soient : subjonctif'),
      it(E(2003), 'même si : imparfait'),
      it(E(2005), 'quand bien même : conditionnel'),
      it(E(2004), 'avoir beau : infinitif'),
    ], chk('« Quand bien même un quota fonctionnerait » : quelle forme suit quand bien même ?',
      ['le conditionnel', 'le subjonctif', 'l’indicatif'], 0,
      'Fonctionnerait : le conditionnel. Chaque mot impose sa forme. EN: the conditional.')),
    ctl('Accorder ou comparer', '« Alors que la mairie compte les touristes, personne ne pense au logement. » Cette phrase…',
      ['met deux faits côte à côte', 'accorde un point à la mairie'], 0,
      'Deux faits comparés : une opposition, sujet de l’acte 11. EN: two facts side by side.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['point', 'forme'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où concéder change tout',
  cases: [
    { situation: 'Tu réponds à un opposant en réunion', fr: fr(E(2011)), en: en(E(2011)) },
    { situation: 'Tu parles au micro d’une consultation', fr: fr(E(2012)), en: en(E(2012)) },
    { situation: 'Tu calmes un interlocuteur en colère', fr: fr(E(2013)), en: en(E(2013)) },
    { situation: 'Tu conclus un débat qui tourne en rond', fr: fr(E(2008)), en: en(E(2008)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['point'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Concéder', 'Concéder, c’est…',
    ['accorder un point à l’autre, puis garder sa position', 'changer d’avis', 'refuser tout ce que dit l’autre'], 0,
    'Un point accordé, la partie gardée. EN: grant a point, keep the game.'),
  ctl('La forme', '« Même si vous … raison » :',
    ['avez', 'ayez'], 0,
    'Même si garde l’indicatif. EN: avez.'),
  ctl('Le mot', 'Qui choisit la forme qui suit : subjonctif, indicatif, nom ?',
    ['le mot de concession', 'le sens de la phrase seulement'], 0,
    'Bien que, le subjonctif ; même si, l’indicatif ; malgré, un nom. EN: the word decides.'),
], ['point']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Accorder un point',
    opener: {
      line: "Tu donnes raison à l'autre sur un point, et tu gardes la partie : ici tu découvres ce qu'est une concession, et pourquoi chaque mot impose sa forme. EN: You grant the other side a point and keep the game: here you meet concession, and why each word sets its form.",
      imageRef: 'lessons/concession-avancee/act01.jpg',
    },
    sections: [],
    milestone: "Tu repères une concession dans un texte, tu dis ce qu'elle accorde, et tu sais que même si ne prend jamais le subjonctif. EN: You can spot a concession, say what it grants, and never put a subjunctive after même si.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: UN POINT, CINQ FORMES
 *
 *  The recap of lesson 32 in B1 (the scales, « choisis le mot »), lesson 6 in
 *  B2 (the mood), lesson 12 in B2 (tout en) and lesson 23 in B2 (certes… mais),
 *  then the map: one fact conceded five ways.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà',
  frSub: 'Quatre leçons, un même geste',
  hint: 'Quatre cartes. Chacune rappelle une leçon.',
  audio: REC('rec-b2-16-rappel'),
  say: REFRAME,
  terms: ['point', 'forme'],
  cards: [
    {
      head: 'La balance', label: Cap(CONCESSION_REF),
      fr: fr(CL(1404)), sub: rsOf(CL(1404)),
      body: `« ${B132_REFRAME} » Bien que, même si, malgré : tu connais les outils. Ici, tu vas plus loin. EN: ${B132_REFRAME_EN}`,
    },
    {
      head: 'Affirmer ou non', label: Cap(MODES_REF),
      fr: fr(CL(1417)), sub: rsOf(CL(1417)),
      body: `« ${B206_REFRAME} » Bien que regarde le fait ; même si, comme tout si, garde l'indicatif. EN: ${B206_REFRAME_EN}`,
    },
    {
      head: 'Tout en', label: Cap(GERONDIF_REF),
      fr: 'tout en sachant que c’était risqué',
      sub: '[too-tahⁿ sa-SHAHⁿ | kuh say-teh rees-KAY]',
      body: `« ${B212_REFRAME} » Tout en + gérondif concède aussi, avec un seul sujet. EN: ${B212_REFRAME_EN}`,
    },
    {
      head: 'Certes… mais', label: Cap(ARGU_REF),
      fr: fr(CL(1573)), sub: rsOf(CL(1573)),
      body: `« ${B223_REFRAME} » Dans un argument, la concession prépare la réponse. EN: ${B223_REFRAME_EN}`,
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-carte',
  title: 'Un point, cinq formes',
  cols: ['Mot', 'Ce qui suit', 'Registre'],
  rows: [
    { cells: ['bien que, quoique', 'subjonctif', 'courant, soutenu'], say: fr(E(2017)),
      detail: { title: 'bien que, quoique', body: "Ils admettent le fait sans l'affirmer : le subjonctif. Quoique est un peu plus soutenu. EN: the subjunctive.", say: fr(E(2024)) } },
    { cells: ['même si', 'indicatif', 'courant'], say: fr(E(2018)),
      detail: { title: 'même si', body: "Un si renforcé : présent, imparfait ou plus-que-parfait, jamais le subjonctif. EN: the indicative.", say: fr(CL(1417)) } },
    { cells: ['quand bien même', 'conditionnel', 'soutenu'], say: fr(E(2019)),
      detail: { title: 'quand bien même', body: "L'hypothèse la plus forte, au conditionnel, souvent des deux côtés. EN: the conditional.", say: fr(E(2005)) } },
    { cells: ['avoir beau', 'infinitif', 'courant'], say: fr(E(2021)),
      detail: { title: 'avoir beau', body: "Avoir se conjugue, le verbe reste à l'infinitif, et la suite dit l'échec. EN: the infinitive.", say: fr(CL(1503)) } },
    { cells: ['malgré, en dépit de', 'nom', 'courant, soutenu'], say: fr(E(2020)),
      detail: { title: 'malgré, en dépit de', body: "Un nom, jamais une phrase. En dépit de est plus soutenu. EN: a noun.", say: fr(E(2026)) } },
    { cells: ['pourtant, néanmoins', 'deux phrases', 'courant, écrit'], say: fr(E(2022)),
      detail: { title: 'pourtant, néanmoins', body: "Deux phrases complètes, reliées par un adverbe. Néanmoins s'écrit plus qu'il ne se dit. EN: two whole sentences.", say: fr(E(2027)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['forme'],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-trier',
  layer: 'core',
  size: 'lg',
  title: 'Le mot, puis la forme',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Une phrase conjuguée', [
      it(E(2017), 'bien que : subjonctif'),
      it(E(2024), 'quoique : subjonctif'),
      it(E(2018), 'même si : indicatif'),
      it(E(2025), 'alors que : indicatif'),
    ], chk('« Quoique le festival soit loin » : pourquoi soit ?',
      ['quoique impose le subjonctif', 'parce que la distance est incertaine'], 0,
      'Le festival est bien loin ; c’est le mot quoique qui impose le mode. EN: the word imposes it.')),
    grp('Un nom, un infinitif ou deux phrases', [
      it(E(2020), 'malgré : un nom'),
      it(E(2026), 'en dépit de : un nom'),
      it(E(2021), 'avoir beau : un infinitif'),
      it(E(2027), 'néanmoins : deux phrases'),
    ], chk('« Le billet a beau être cher » : quelle forme suit avoir beau ?',
      ['un infinitif', 'un nom', 'un subjonctif'], 0,
      'Être, à l’infinitif ; avoir porte le temps. EN: the infinitive.')),
    ctl('Le piège', '« Même si le billet … cher, j’irai. »',
      ['est', 'soit'], 0,
      'Même si garde l’indicatif. EN: est.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['forme'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Un même point, cinq fois',
  frSub: 'Huit phrases à l’oreille',
  lines: [
    ln(E(2017)), ln(E(2018)), ln(E(2019)), ln(E(2020)),
    ln(E(2021)), ln(E(2022)), ln(CL(1456)), ln(CL(1503)),
  ],
  questions: [
    { q: 'Première phrase : quel mot accorde le point ?', opts: ['bien que', 'même si'], correct: 0, why: 'Bien que, suivi de soit. EN: bien que.' },
    { q: 'Troisième phrase : la personne irait-elle au festival à cent euros ?', opts: ['oui', 'non'], correct: 0, why: 'J’irais : même dans ce cas. EN: yes, even then.' },
    { q: 'Cinquième phrase : quel verbe reste à l’infinitif ?', opts: ['être', 'aller'], correct: 0, why: 'A beau être cher. EN: être.' },
    { q: 'Septième phrase : la personne a-t-elle trouvé une place ?', opts: ['non', 'oui'], correct: 0, why: 'Malgré ses efforts, non. EN: no.' },
    { q: 'Dernière phrase : l’essai a-t-il marché ?', opts: ['non', 'oui'], correct: 0, why: 'J’ai beau essayer : l’effort ne change rien. EN: no.' },
  ],
  audio: REC('rec-b2-16-carte-ecoute'),
  say: REFRAME,
  terms: ['forme'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre formes empruntées',
  errors: [
    {
      wrong: 'Même si le billet soit cher, j’irai au festival.',
      right: fr(E(2018)),
      why: "Normal : bien que et même si disent presque la même chose, alors le mode passe de l'un à l'autre. Mais même si est un si : l'indicatif. EN: même si keeps the indicative.",
    },
    {
      wrong: 'Malgré que le billet soit cher, j’irai au festival.',
      right: fr(E(2020)),
      why: "Normal : bien que + phrase, donc malgré que + phrase semble logique, et on l'entend souvent à l'oral. À l'écrit, malgré que est critiqué : malgré prend un nom, malgré le prix du billet. EN: criticised in writing; malgré takes a noun.",
    },
    {
      wrong: 'Le billet a beau est cher, j’irai au festival.',
      right: fr(E(2021)),
      why: "Normal : on veut conjuguer le verbe. Mais avoir porte déjà le temps, et le verbe reste à l'infinitif : a beau être. EN: keep the infinitive.",
    },
    {
      wrong: 'Bien que le billet sera cher, j’irai au festival.',
      right: fr(E(2017)),
      why: "Normal : le prix est pour plus tard, alors le futur vient tout seul. Bien que veut le subjonctif, qui couvre aussi l'avenir : soit. EN: the subjunctive covers the future too.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['forme', 'oral'],
};

const A2_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a2-flash',
  layer: 'core',
  title: 'Huit outils à avoir en bouche',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'although (+ subjunctive)', back: 'bien que', say: fr(E(2017)) },
    { front: 'even if, even though (+ indicative)', back: 'même si', say: fr(E(2018)) },
    { front: 'even if (formal, + conditional)', back: 'quand bien même', say: fr(E(2019)) },
    { front: 'however hard I try', back: "j'ai beau essayer", say: fr(CL(1503)) },
    { front: 'despite the price', back: 'malgré le prix', say: fr(E(2020)) },
    { front: 'in spite of the rain (formal)', back: 'en dépit de la pluie', say: fr(E(2026)) },
    { front: 'nevertheless (written)', back: 'néanmoins', say: fr(E(2027)) },
    { front: 'whatever you say', back: 'quoi que tu dises', say: fr(OA(1924)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['forme'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le subjonctif', 'Lequel impose le subjonctif ?',
    ['bien que', 'même si', 'malgré'], 0,
    'Bien que, comme quoique. EN: bien que.'),
  ctl('Le nom', '« Malgré … , j’irai. »',
    ['le prix', 'que c’est cher'], 0,
    'Malgré prend un nom. EN: a noun.'),
  ctl('L’infinitif', '« J’ai beau … , ça ne marche pas. »',
    ['essayer', 'que j’essaie'], 0,
    'Avoir beau + infinitif. EN: the infinitive.'),
], ['forme']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Un point, cinq formes',
    opener: {
      line: "Un billet cher, et tu iras quand même : ici tu dis ce point de cinq façons, et chaque mot t'impose sa forme. EN: An expensive ticket, and you will go anyway: here you say it five ways, and each word sets its form.",
      imageRef: 'lessons/concession-avancee/act02.jpg',
    },
    sections: [],
    milestone: "Tu sais quelle forme suit chaque mot de concession : subjonctif, indicatif, conditionnel, infinitif, nom ou deux phrases. EN: You know which form follows each concession word.",
    estScreens: 38, restPoints: ['a2-table', 'a2-ecoute'],
  },
  sections: [A2_RAPPEL, A2_TABLE, A2_TRIER, A2_ECOUTE, A2_ERREURS, A2_FLASH, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: BIEN QUE, QUOIQUE, ENCORE QUE
 *
 *  Past B1: the subjonctif passé for a fact already accomplished (lesson 5 in
 *  B2), encore que as an afterthought (soutenu), the ellipsis, sans que
 *  against sans. « Bien que + indicatif » named as spoken.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'L’évaluation de Sophie',
  frSub: 'Un rapport qui nuance',
  setting: 'Lausanne. Claire rédige l’évaluation annuelle de Sophie, cheffe de projet ; Marc, des ressources humaines, relit avec elle avant l’envoi.',
  bubbles: [
    { from: 'narrator', fr: 'Claire lit ses phrases à voix haute ; Marc écoute surtout ce qui suit bien que.', en: 'Claire reads her sentences aloud; Marc listens mostly to what follows bien que.' },
    { from: 'user', fr: fr(E(2030)), en: en(E(2030)) },
    { from: 'coach', fr: 'Soit arrivée : l’arrivée est finie, donc le subjonctif passé.', en: 'Soit arrivée: the arrival is over, so the subjonctif passé.', warn: 'Un fait déjà accompli' },
    { from: 'user', fr: fr(E(2033)), en: en(E(2033)) },
    { from: 'coach', fr: 'Encore que, après la phrase, ajoute une réserve. C’est soutenu, et parfait dans un rapport.', en: 'Encore que, after the clause, adds a reservation. Formal, and perfect in a report.', warn: 'Encore que' },
    { from: 'user', fr: fr(E(2034)), en: en(E(2034)) },
    { from: 'coach', fr: 'Sans que, parce que ce ne sont pas les mêmes personnes : elle réorganise, les autres ne se plaignent pas.', en: 'Sans que, because these are different people: she reorganises, the others do not complain.', warn: 'Sans que : deux sujets' },
    { from: 'user', fr: fr(E(2032)), en: en(E(2032)) },
    { from: 'coach', fr: 'Quoique : le sens de bien que, un peu plus soutenu.', en: 'Quoique: the meaning of bien que, a little more formal.', warn: 'Quoique' },
  ],
  closing: { fr: 'Un fait admis, un fait accompli, une réserve après coup : le subjonctif partout.', en: 'A fact admitted, a fact accomplished, an afterthought: the subjunctive everywhere.' },
  audio: REC('rec-b2-16-sophie'),
  say: REFRAME,
  terms: ['subjonctif'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-subjonctif',
  title: 'Le subjonctif qui concède',
  frSub: 'Ce que le B1 ne disait pas',
  hint: 'Quatre cartes. La troisième supprime le verbe.',
  audio: REC('rec-b2-16-subjonctif'),
  say: REFRAME,
  terms: ['subjonctif'],
  cards: [
    {
      head: 'Déjà accompli', label: Cap(SUBJ_PASSE_REF),
      fr: fr(E(2030)), sub: rsOf(E(2030)),
      body: "Le fait concédé est fini avant le reste : subjonctif passé, soit arrivée. Pour un fait en même temps, le présent : bien qu'elle soit là. EN: a finished fact takes the subjonctif passé.",
    },
    {
      head: 'Quoique, encore que', label: 'soutenu',
      fr: fr(E(2033)), sub: rsOf(E(2033)),
      body: "Quoique a le sens de bien que, en un peu plus soutenu. Encore que vient après la phrase principale et ajoute une réserve. Les deux prennent le subjonctif. EN: quoique means bien que; encore que adds an afterthought.",
    },
    {
      head: 'Sans le verbe', label: 'l’ellipse',
      fr: fr(E(2036)), sub: rsOf(E(2036)),
      body: "Même sujet et verbe être : on peut les supprimer. Bien que très occupée, c'est bien qu'elle soit très occupée. Quoique et encore que font pareil. EN: drop the subject and être.",
    },
    {
      head: 'Sans que ou sans', label: 'deux sujets',
      fr: fr(E(2034)), sub: rsOf(E(2034)),
      body: "Deux personnes : sans que + subjonctif. Une seule : sans + infinitif, elle a décidé sans consulter. À l'écrit soigné, pas de ne après sans que. EN: two subjects, sans que; one subject, sans + infinitive.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le bon subjonctif',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Présent ou passé', [
      it(E(2031), 'le retard est déjà là'),
      it(E(2041), 'la réunion est passée'),
      it(E(2040), 'un désaccord en cours'),
      it(E(2046), 'la réunion est finie : un état'),
    ], chk('« Bien que le projet … du retard le mois dernier, le client reste satisfait. »',
      ['ait pris', 'prenne', 'a pris'], 0,
      'Le mois dernier : un fait accompli, subjonctif passé. EN: ait pris.')),
    grp('Un sujet ou deux', [
      it(E(2034), 'elle, et personne'),
      it(E(2042), 'il, et son associé'),
      it(E(2035), 'elle seule'),
      it(E(2045), 'il, et on'),
    ], chk('« Elle a pris cette décision … son équipe. »',
      ['sans consulter', 'sans qu’elle consulte'], 0,
      'Un seul sujet, elle : sans + infinitif. EN: one subject.')),
    grp('Le registre', [
      it(E(2032), 'quoique, soutenu'),
      it(E(2037), 'quoique + adjectif'),
      it(E(2044), 'quoique après la principale'),
      it(E(2047), 'encore que + adjectif'),
    ], chk('Dans un rapport officiel, quelle réserve ajoutes-tu après coup ?',
      ['encore que certains chiffres soient à vérifier', 'même si certains chiffres soient à vérifier'], 0,
      'Encore que + subjonctif ; même si ne prend jamais le subjonctif. EN: encore que.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['subjonctif'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Ce que l’oral glisse à l’écrit',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le subjonctif, même quand on parle vite',
    body: "À l'oral, on entend « bien qu'il est tard ». À l'écrit, bien que, quoique, encore que et sans que veulent le subjonctif, présent ou passé, jamais le futur. EN: in writing, these four always take the subjunctive.",
  },
  cards: [
    trap(E(2046), 'bien que + indicatif', 'Bien que la réunion est terminée, la discussion continue dans le couloir.', 'On l’entend à l’oral ; à l’écrit, soit terminée. EN: spoken only.'),
    trap(E(2040), 'bien que + futur', 'Bien qu’il ne sera pas d’accord, il appliquera la décision.', 'Le subjonctif présent couvre l’avenir : ne soit pas. EN: no future.'),
    trap(E(2031), 'le fait accompli', 'Bien que le projet a pris du retard, le client reste satisfait.', 'Un fait accompli : subjonctif passé, ait pris. EN: ait pris.'),
    trap(E(2034), 'sans que + indicatif', 'Elle a réorganisé le service sans que personne s’en plaint.', 'Sans que veut le subjonctif : plaigne. EN: plaigne.'),
    trap(E(2035), 'un seul sujet', 'Elle a pris cette décision sans qu’elle consulte son équipe.', 'Un seul sujet : sans consulter. EN: sans + infinitive.'),
    trap(E(2033), 'encore que + indicatif', 'Le rapport est solide, encore que certains chiffres sont à vérifier.', 'Encore que prend le subjonctif : soient. EN: soient.'),
  ],
  drill: [
    { promptSay: 'Bien que la réunion … terminée, on continue.', opts: ['soit', 'est'], correct: 0 },
    { promptSay: 'Bien qu’il ne … pas d’accord, il appliquera la décision.', opts: ['sera', 'soit'], correct: 1 },
    { promptSay: 'Bien que le projet … du retard en mars, le client reste satisfait.', opts: ['ait pris', 'a pris'], correct: 0 },
    { promptSay: 'Elle a réorganisé le service sans que personne s’en …', opts: ['plaint', 'plaigne'], correct: 1 },
    { promptSay: 'Elle a décidé sans … son équipe.', opts: ['consulter', 'qu’elle consulte'], correct: 0 },
    { promptSay: 'Le rapport est solide, encore que certains chiffres … à vérifier.', opts: ['soient', 'sont'], correct: 0 },
    { promptSay: 'Quoiqu’elle n’… jamais dirigé d’équipe, elle a su se faire respecter.', opts: ['ait', 'a'], correct: 0 },
    { promptSay: 'Il a signé sans que son associé … au courant.', opts: ['est', 'soit'], correct: 1 },
  ],
  steps: STEPS('Le subjonctif, même quand on parle vite', 'Ce que l’oral glisse à l’écrit'),
  audio: REC('rec-b2-16-piege-subjonctif'),
  say: REFRAME,
  terms: ['subjonctif', 'oral'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq phrases, cinq nuances',
  frSub: 'Des leçons précédentes et de celle-ci',
  examples: [
    ex(CL(1438), 'quoique + subjonctif : le sens de bien que'),
    ex('fr.b2.emotions.1357', 'un fait accompli : subjonctif passé, ait été fermée'),
    ex(OA(1907), 'sans que : ce ne sont pas les habitants qui votent'),
    ex(E(2044), 'quoique après la principale : une réserve'),
    ex(E(2037), 'quoique + adjectif : l’ellipse, plus soutenu'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['subjonctif'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Compléter : l’évaluation de Sophie', TEXTE_A3, [
  { q: 'Première phrase : bien que Sophie (arriver) il y a six mois.', a: "Bien que Sophie soit arrivée il y a six mois : l'arrivée est accomplie, subjonctif passé." },
  { q: 'Deuxième et troisième phrases : sans que personne (s’en plaindre) ; encore que certains chiffres (être) à vérifier.', a: "Sans que personne s'en plaigne ; encore que certains chiffres soient à vérifier. Sans que et encore que prennent le subjonctif." },
  { q: 'Quatrième phrase : quoiqu’elle (ne jamais diriger) d’équipe auparavant.', a: "Quoiqu'elle n'ait jamais dirigé d'équipe : un fait passé, subjonctif passé, avec ne… jamais autour de l'auxiliaire." },
  { q: 'Dernière phrase : bien qu’elle (devoir) encore apprendre à déléguer.', a: "Bien qu'elle doive encore apprendre : le subjonctif présent de devoir, doive." },
], 'rec-b2-16-texte-a3', ['subjonctif']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le passé', '« Bien qu’elle … il y a six mois »',
    ['soit arrivée', 'est arrivée', 'arrive'], 0,
    'Un fait accompli : subjonctif passé. EN: soit arrivée.'),
  ctl('Encore que', 'Encore que se place surtout…',
    ['après la phrase principale', 'en tête de phrase'], 0,
    'Il ajoute une réserve après coup. EN: after the main clause.'),
  ctl('Sans que', '« Il est parti sans … au revoir. » (lui seul)',
    ['dire', 'qu’il dise'], 0,
    'Un seul sujet : sans + infinitif. EN: sans dire.'),
], ['subjonctif']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Bien que, quoique, encore que',
    opener: {
      line: "Un rapport qui reconnaît les réserves sans perdre sa conclusion : ici tu concèdes au subjonctif, présent ou passé, du plus courant au plus soutenu. EN: A report that admits reservations and keeps its conclusion: here you concede in the subjunctive, present or past.",
      imageRef: 'lessons/concession-avancee/act03.jpg',
    },
    sections: [],
    milestone: "Tu choisis le subjonctif présent ou passé après bien que et quoique, tu ajoutes une réserve avec encore que, et tu sépares sans que de sans. EN: You can use bien que, quoique and encore que with the right subjunctive, and tell sans que from sans.",
    estScreens: 38, restPoints: ['a3-construire', 'a3-piege'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_PIEGE, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: QUOI QUE, QUEL QUE, OÙ QUE, QUI QUE
 *
 *  Every possibility granted at once. quoi que (two words) against quoique
 *  (one): never tested by typing. quel que soit agrees with its noun.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'La veille du départ',
  frSub: 'Tout ce qui peut arriver',
  setting: 'Casablanca. Demain, Karima part étudier à Montréal. Sa mère, Nadia, l’aide à fermer sa valise et lui fait ses recommandations.',
  bubbles: [
    { from: 'narrator', fr: 'Nadia ne sait pas ce qui attend sa fille. Alors elle parle de tout ce qui pourrait arriver.', en: 'Nadia does not know what awaits her daughter. So she talks about everything that might happen.' },
    { from: 'user', fr: fr(E(2048)), en: en(E(2048)) },
    { from: 'coach', fr: 'Quoi qu’il arrive : n’importe quelle chose qui arrive. Deux mots, et le subjonctif.', en: 'Quoi qu’il arrive: whatever happens. Two words, and the subjunctive.', warn: 'Quoi que' },
    { from: 'user', fr: fr(E(2049)), en: en(E(2049)) },
    { from: 'coach', fr: 'Où que : n’importe où. Ailles, le subjonctif d’aller.', en: 'Où que: wherever. Ailles, the subjunctive of aller.', warn: 'Où que' },
    { from: 'user', fr: fr(E(2050)), en: en(E(2050)) },
    { from: 'coach', fr: 'Qui que : n’importe qui. Toujours le subjonctif.', en: 'Qui que: whoever. Always the subjunctive.', warn: 'Qui que' },
    { from: 'user', fr: fr(E(2051)), en: en(E(2051)) },
    { from: 'coach', fr: 'Quelle, parce que décision est féminin.', en: 'Quelle, because décision is feminine.', warn: 'Quel que soit' },
  ],
  closing: { fr: 'Tout ce qui peut arriver, partout, avec n’importe qui : un seul mode, le subjonctif.', en: 'Whatever happens, wherever, with whoever: one mood, the subjunctive.' },
  audio: REC('rec-b2-16-karima'),
  say: REFRAME,
  terms: ['indefini'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Toutes les possibilités accordées',
  frSub: 'Quoi, quel, où, qui',
  hint: 'Quatre cartes. La première sépare deux mots qui se prononcent pareil.',
  audio: REC('rec-b2-16-indefini'),
  say: REFRAME,
  terms: ['indefini'],
  cards: [
    {
      head: 'Quoi que ou quoique', label: 'deux mots, un mot',
      fr: 'quoi que tu fasses · quoique tu sois fatiguée',
      sub: '[KWA kuh tü FASS] · [kwa-kuh tü swa fa-tee-GAY]',
      body: "Quoi que : n'importe quelle chose. Quoique : bien que. L'oreille ne les distingue pas ; le sens, si. Si tu peux dire bien que, écris quoique. EN: whatever against although.",
    },
    {
      head: 'Quel que soit', label: 'l’accord',
      fr: fr(E(2052)), sub: rsOf(E(2052)),
      body: "Quel s'accorde avec le nom qui suit soit, et soit avec lui : quels que soient les obstacles. En un seul mot, quelque veut dire autre chose. EN: quel agrees with the noun after soit.",
    },
    {
      head: 'Où que, qui que', label: 'n’importe où, n’importe qui',
      fr: fr(E(2058)), sub: rsOf(E(2058)),
      body: "Où que + subjonctif : partout. Qui que : n'importe quelle personne. Qui que ce soit et quoi que ce soit veulent dire n'importe qui, n'importe quoi. EN: wherever, whoever; qui que ce soit means anyone.",
    },
    {
      head: 'Figé', label: 'quoi qu’il en soit',
      fr: fr(E(2063)), sub: rsOf(E(2063)),
      body: "Quoi qu'il en soit veut dire de toute façon : il clôt une discussion. Quoi qu'en disent les voisins suit le même modèle, avec en. EN: be that as it may.",
    },
  ],
};

const A4_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a4-table',
  layer: 'core',
  sheetId: 'sheet-subjonctif',
  title: 'Six tournures, un mode',
  cols: ['Tournure', 'Ce qui suit', 'Sens'],
  rows: [
    { cells: ['quel que soit', 'nom masculin singulier', 'whatever'], say: fr(OA(1925)),
      detail: { title: 'quel que soit', body: "Le prix est masculin singulier : quel que soit. EN: masculine singular.", say: fr(OA(1925)) } },
    { cells: ['quelle que soit', 'nom féminin singulier', 'whatever'], say: fr(E(2051)),
      detail: { title: 'quelle que soit', body: "La décision, la météo : quelle que soit. EN: feminine singular.", say: fr(E(2061)) } },
    { cells: ['quels que soient', 'nom masculin pluriel', 'whatever'], say: fr(E(2052)),
      detail: { title: 'quels que soient', body: "Les obstacles, les revenus : quels, et soient au pluriel. EN: masculine plural.", say: fr(E(2052)) } },
    { cells: ['quelles que soient', 'nom féminin pluriel', 'whatever'], say: fr(E(2053)),
      detail: { title: 'quelles que soient', body: "Tes raisons, les réparations : quelles que soient. EN: feminine plural.", say: fr('fr.b2.maison.086') } },
    { cells: ['quoi que', 'verbe au subjonctif', 'whatever'], say: fr(E(2054)),
      detail: { title: 'quoi que', body: "En deux mots, suivi d'un verbe : quoi que tu dises, quoi qu'il arrive. EN: whatever, before a verb.", say: fr(OA(1924)) } },
    { cells: ['où que, qui que', 'verbe au subjonctif', 'wherever, whoever'], say: fr(E(2049)),
      detail: { title: 'où que, qui que', body: "Où que tu ailles, qui que vous soyez : le lieu ou la personne, n'importe lequel. EN: wherever, whoever.", say: fr(E(2064)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['indefini'],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le bon mot, le bon accord',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Quoi que ou quoique', [
      it(E(2048), 'quoi que : whatever'),
      it(E(2054), 'quoi que : whatever'),
      it(E(2055), 'quoique : although'),
      it(E(2066), 'quoi que : whatever'),
    ], chk('« … tu sois fatiguée, tu dois finir tes valises. »',
      ['Quoique', 'Quoi que'], 0,
      'Bien que tu sois fatiguée : quoique, en un mot. EN: although.')),
    grp('L’accord de quel', [
      it(E(2051), 'la décision : quelle'),
      it(E(2052), 'les obstacles : quels'),
      it(E(2053), 'tes raisons : quelles'),
      it(E(2061), 'la météo : quelle'),
    ], chk('« … que soient les risques, je pars. »',
      ['Quels', 'Quel', 'Quelles'], 0,
      'Risques : masculin pluriel. EN: quels.')),
    grp('N’importe où, n’importe qui', [
      it(E(2049), 'où que : n’importe où'),
      it(E(2058), 'où que : n’importe où'),
      it(E(2064), 'qui que : n’importe qui'),
      it(E(2067), 'où que : n’importe où'),
    ], chk('« … que vous soyez, vous devez présenter un billet. » (n’importe quelle personne)',
      ['Qui', 'Où', 'Quoi'], 0,
      'N’importe quelle personne : qui que. EN: whoever.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['indefini'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quoi que, quoique',
  frSub: 'Huit phrases, un son qui trompe',
  lines: [
    ln(E(2048)), ln(E(2050)), ln(E(2054)), ln(E(2055)),
    ln(E(2057)), ln(E(2063)), ln(E(2064)), ln(OA(1924)),
  ],
  questions: [
    { q: 'Première phrase : la mère sera-t-elle là dans tous les cas ?', opts: ['oui', 'seulement si tout va bien'], correct: 0, why: 'Quoi qu’il arrive : dans tous les cas. EN: whatever happens.' },
    { q: 'Troisième phrase : que doit faire la personne, dans tous les cas ?', opts: ['le faire bien', 'le faire vite'], correct: 0, why: 'Fais-le bien. EN: do it well.' },
    { q: 'Quatrième phrase : le mot entendu veut dire…', opts: ['bien que', 'n’importe quelle chose que'], correct: 0, why: 'Tu dois finir tes valises, bien que tu sois fatiguée : quoique. EN: although.' },
    { q: 'Sixième phrase : à quelle heure part le vol ?', opts: ['à sept heures', 'à six heures'], correct: 0, why: 'Le vol part à sept heures, de toute façon. EN: seven.' },
    { q: 'Septième phrase : qui doit présenter un billet ?', opts: ['tout le monde', 'seulement les adultes'], correct: 0, why: 'Qui que vous soyez : tout le monde. EN: everyone.' },
  ],
  audio: REC('rec-b2-16-indefini-ecoute'),
  say: REFRAME,
  terms: ['indefini'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs d’écriture',
  errors: [
    {
      wrong: 'Quelque soit ta décision, nous la respecterons.',
      right: fr(E(2051)),
      why: "Normal : quelque existe, et l'oreille entend la même chose. Mais devant soit, il faut quel en deux mots, accordé avec décision : quelle. EN: quel que soit, in two words, agreed.",
    },
    {
      wrong: 'Quoique tu fasses, fais-le bien.',
      right: fr(E(2054)),
      why: "Normal : quoique est le mot qu'on connaît. Ici le sens est n'importe quelle chose : quoi que, en deux mots. EN: whatever is quoi que.",
    },
    {
      wrong: 'Quel que soient les obstacles, elle ira jusqu’au bout.',
      right: fr(E(2052)),
      why: "Normal : quel semble figé, comme dans quel que soit le prix. Il s'accorde pourtant avec obstacles : quels. EN: quels agrees with obstacles.",
    },
    {
      wrong: 'Où que tu vas, donne-nous des nouvelles.',
      right: fr(E(2049)),
      why: "Normal : après où, on a l'habitude de l'indicatif. Où que concède : le subjonctif, ailles. EN: où que takes the subjunctive.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['indefini'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Choisir : le mot de Nadia', TEXTE_A4, [
  { q: 'Les deux premiers choix : (quoi que / quoique) tu décides ; (où que / quoique) tu habites.', a: "Quoi que tu décides (n'importe quelle chose) ; où que tu habites (n'importe où)." },
  { q: 'Troisième choix : (quel / quels) que soient tes horaires.', a: "Quels que soient tes horaires : horaires est masculin pluriel." },
  { q: 'Quatrième et cinquième choix : (qui que / quoi que) tu rencontres ; (quoi que / quoique) tu sois parfois têtue.', a: "Qui que tu rencontres (une personne) ; quoique tu sois parfois têtue (bien que)." },
  { q: 'Dernier choix : (quel / quelle) que soit la météo.', a: "Quelle que soit la météo : météo est féminin singulier." },
], 'rec-b2-16-texte-a4', ['indefini']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Quoi que', '« … tu dises, je garderai mon avis. » (n’importe quelle chose)',
    ['Quoi que', 'Quoique'], 0,
    'En deux mots. EN: whatever.'),
  ctl('L’accord', '« … que soit la météo »',
    ['Quelle', 'Quel', 'Quelque'], 0,
    'Météo : féminin singulier. EN: quelle.'),
  ctl('Le mode', 'Quoi que, où que, qui que prennent…',
    ['le subjonctif', 'l’indicatif'], 0,
    'Toujours le subjonctif. EN: the subjunctive.'),
], ['indefini']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Quoi que, où que, qui que',
    opener: {
      line: "Où que tu ailles, quoi qu'il arrive : ici tu accordes d'un coup toutes les possibilités, et tu écris enfin quoi que en deux mots. EN: Wherever you go, whatever happens: here you grant every possibility at once.",
      imageRef: 'lessons/concession-avancee/act04.jpg',
    },
    sections: [],
    milestone: "Tu sépares quoi que de quoique, tu accordes quel que soit avec son nom, et tu emploies où que et qui que au subjonctif. EN: You can tell quoi que from quoique and agree quel que soit.",
    estScreens: 40, restPoints: ['a4-table', 'a4-ecoute'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_TABLE, A4_CONSTRUIRE, A4_ECOUTE, A4_ERREURS, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: SI RICHE QU'IL SOIT, TOUT RICHE QU'IL EST
 *
 *  The degree conceded: si / aussi… que + subjunctive, adjectif + soit-il,
 *  against tout… que + indicative (the subjunctive also found). The
 *  agreement of tout. quelque… que for recognition only.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'La visite du deux-pièces',
  frSub: 'Un degré concédé',
  setting: 'Bruxelles, rue Haute. Chloé et Marc visitent un deux-pièces avec l’agent immobilier, puis en parlent sur le trottoir.',
  bubbles: [
    { from: 'narrator', fr: 'Chloé aime l’appartement, et c’est justement pour ça qu’elle cherche ce qui ne va pas.', en: 'Chloé likes the flat, and that is exactly why she looks for what is wrong.' },
    { from: 'user', fr: fr(E(2068)), en: en(E(2068)) },
    { from: 'coach', fr: 'Si + adjectif + que : un degré concédé, même le plus haut. Le subjonctif.', en: 'Si + adjective + que: a degree conceded, even the highest. The subjunctive.', warn: 'Si… que' },
    { from: 'user', fr: fr(E(2070)), en: en(E(2070)) },
    { from: 'coach', fr: 'Tout + adjectif + que : le studio est petit, c’est un fait. L’indicatif.', en: 'Tout + adjective + que: the studio is small, that is a fact. The indicative.', warn: 'Tout… que' },
    { from: 'user', fr: fr(E(2071)), en: en(E(2071)) },
    { from: 'coach', fr: 'Toute, car neuve est féminin et commence par une consonne.', en: 'Toute, because neuve is feminine and starts with a consonant.', warn: 'L’accord de tout' },
    { from: 'user', fr: fr(E(2072)), en: en(E(2072)) },
    { from: 'coach', fr: 'Aussi pratique soit-il : le même sens, avec le sujet après le verbe. Soutenu.', en: 'Aussi pratique soit-il: same meaning, subject after the verb. Formal.', warn: 'Adjectif + soit-il' },
  ],
  closing: { fr: 'Si et aussi concèdent un degré : subjonctif. Tout pose un fait : indicatif.', en: 'Si and aussi concede a degree: subjunctive. Tout states a fact: indicative.' },
  audio: REC('rec-b2-16-chloe'),
  say: REFRAME,
  terms: ['intensite'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-subjonctif',
  title: 'Si riche, tout riche',
  frSub: 'Le degré, puis le fait',
  hint: 'Quatre cartes. La troisième change de mode.',
  audio: REC('rec-b2-16-intensite'),
  say: REFRAME,
  terms: ['intensite'],
  cards: [
    {
      head: 'Si, aussi… que', label: 'subjonctif',
      fr: fr(E(2069)), sub: rsOf(E(2069)),
      body: "Si ou aussi + adjectif + que : quel que soit le degré, la conclusion tient. Le subjonctif, parce qu'on ne vérifie pas ce degré. EN: however + adjective, with the subjunctive.",
    },
    {
      head: 'Soit-il', label: 'soutenu',
      fr: fr(E(2072)), sub: rsOf(E(2072)),
      body: "Pas de que, et le sujet passe après le verbe : aussi pratique soit-il. On le lit dans la presse et les essais, rarement à l'oral. EN: the inverted form is formal.",
    },
    {
      head: 'Tout… que', label: 'indicatif',
      fr: fr(E(2074)), sub: rsOf(E(2074)),
      body: "Tout + adjectif + que pose le fait comme acquis : il est riche. L'indicatif est la forme courante ; on trouve aussi le subjonctif à l'écrit. EN: tout… que states a fact.",
    },
    {
      head: 'Toute petite', label: 'l’accord de tout',
      fr: fr(E(2079)), sub: rsOf(E(2079)),
      body: "Ici, tout est un adverbe : il ne varie pas, sauf devant un adjectif féminin qui commence par une consonne. Tout petit, toute petite, tout fatigués. EN: toute before a feminine consonant.",
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le degré ou le fait',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Si ou aussi : le subjonctif', [
      it(E(2068), 'si lumineux qu’il soit'),
      it(E(2073), 'si chers que soient'),
      it(E(2080), 'si difficile que ce soit'),
      it(E(2082), 'si pressé que tu sois'),
    ], chk('« Si pressé que tu …, relis le bail. »',
      ['sois', 'es'], 0,
      'Si + adjectif + que : subjonctif. EN: sois.')),
    grp('Tout : l’indicatif', [
      it(E(2070), 'tout petit qu’il est'),
      it(E(2074), 'tout riche qu’il est'),
      it(E(2083), 'tout fatigués qu’ils étaient'),
      it(E(2071), 'toute neuve qu’elle est'),
    ], chk('« Tout riche qu’il …, il vit simplement. » La forme la plus courante :',
      ['est', 'soit'], 0,
      'Tout… que pose un fait : est. Soit se lit aussi, plus rarement. EN: est.')),
    ctl('Tout ou toute', '« … neuve qu’elle est, la chaudière fait du bruit. »',
      ['Toute', 'Tout'], 0,
      'Neuve : féminin, avec une consonne. EN: toute.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensite'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Le degré mal concédé',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Si et aussi : subjonctif. Tout : indicatif',
    body: "Si et aussi + adjectif + que concèdent un degré : subjonctif. Tout + adjectif + que pose un fait : indicatif, et toute devant un féminin qui commence par une consonne. EN: si, aussi: subjunctive; tout: indicative.",
  },
  cards: [
    trap(E(2068), 'si… que + indicatif', 'Si lumineux qu’il est, cet appartement est trop cher pour nous.', 'Si + adjectif + que : soit. EN: soit.'),
    trap(E(2069), 'aussi… que + indicatif', 'Aussi grande que la cuisine est, elle reste mal équipée.', 'Aussi grande que soit la cuisine : subjonctif. EN: soit.'),
    trap(E(2071), 'l’accord de tout', 'Tout neuve qu’elle est, la chaudière fait un bruit terrible.', 'Neuve est féminin, avec une consonne : toute. EN: toute.'),
    trap(E(2072), 'l’inversion', 'Aussi pratique il soit, ce quartier manque d’écoles.', 'Pas de que : le sujet passe après le verbe, soit-il. EN: soit-il.'),
    trap(E(2074), 'si + indicatif', 'Si riche qu’il est, il vit très simplement.', 'Avec l’indicatif, c’est tout : tout riche qu’il est. Avec si, soit. EN: tout + indicative.'),
    trap(E(2080), 'si… que ce soit', 'Si difficile que c’est, il faudra déménager avant l’hiver.', 'Si… que : subjonctif, que ce soit. EN: ce soit.'),
  ],
  drill: [
    { promptSay: 'Si lumineux qu’il …, il est trop cher.', opts: ['soit', 'est'], correct: 0 },
    { promptSay: 'Tout riche qu’il …, il vit simplement.', opts: ['serait', 'est'], correct: 1 },
    { promptSay: '… neuve qu’elle est, la chaudière fait du bruit.', opts: ['Tout', 'Toute'], correct: 1 },
    { promptSay: '… petit qu’il est, ce studio a du charme.', opts: ['Tout', 'Toute'], correct: 0 },
    { promptSay: 'Aussi pratique …, ce quartier manque d’écoles.', opts: ['soit-il', 'il est'], correct: 0 },
    { promptSay: 'Si difficile que ce …, il faudra déménager.', opts: ['est', 'soit'], correct: 1 },
    { promptSay: 'Si chers que … les loyers, les gens veulent vivre ici.', opts: ['soient', 'sont'], correct: 0 },
    { promptSay: 'Tout fatigués qu’ils …, ils ont monté les cartons.', opts: ['étaient', 'seraient'], correct: 0 },
  ],
  steps: STEPS('Si et aussi : subjonctif. Tout : indicatif', 'Le degré mal concédé'),
  audio: REC('rec-b2-16-piege-intensite'),
  say: REFRAME,
  terms: ['intensite'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Soit ou est, tout ou toute',
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensite'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Réécrire : l’avis de Chloé et Marc', TEXTE_A5, [
  { q: 'Les deux premières phrases, avec si… que et aussi… que.', a: "Si lumineux qu'il soit, l'appartement est trop cher pour nous. Aussi grande que soit la cuisine (ou aussi grande qu'elle soit), elle est mal équipée." },
  { q: 'Les phrases trois et quatre, avec tout… que.', a: "Toute petite qu'elle est, la chambre est très calme. Toute neuve qu'elle est, la chaudière fait un bruit terrible. Toute, devant un féminin qui commence par une consonne ; l'indicatif." },
  { q: 'La cinquième, avec aussi… soit-il.', a: "Aussi pratique soit-il, le quartier manque d'écoles : le sujet passe après soit." },
  { q: 'Pourquoi le subjonctif avec si et aussi, mais l’indicatif avec tout ?', a: "Si et aussi concèdent un degré sans le vérifier ; tout pose le fait comme acquis. Le mot impose sa forme." },
], 'rec-b2-16-texte-a5', ['intensite']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Si… que', '« Si cher que … le projet »',
    ['soit', 'est'], 0,
    'Si + adjectif + que : subjonctif. EN: soit.'),
  ctl('Tout… que', '« Tout petit qu’il … »',
    ['est', 'sera'], 0,
    'Tout pose le fait : indicatif présent. EN: est.'),
  ctl('L’accord', '« … petite qu’elle est »',
    ['Toute', 'Tout'], 0,
    'Féminin, avec une consonne : toute. EN: toute.'),
], ['intensite']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Si riche qu’il soit',
    opener: {
      line: "Si lumineux qu'il soit, l'appartement reste trop cher : ici tu concèdes un degré, même le plus haut, puis tu poses un fait avec tout. EN: However bright it is, the flat is too expensive: here you concede a degree, then state a fact with tout.",
      imageRef: 'lessons/concession-avancee/act05.jpg',
    },
    sections: [],
    milestone: "Tu concèdes un degré avec si ou aussi au subjonctif, tu poses un fait avec tout à l'indicatif, et tu accordes toute quand il le faut. EN: You can concede a degree with si… que and state a fact with tout… que.",
    estScreens: 36, restPoints: ['a5-construire', 'a5-piege'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_CONSTRUIRE, A5_PIEGE, A5_DICTEE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: MÊME SI, TOUJOURS L'INDICATIF
 *
 *  même si is a si (lesson 10 in B1): present for a fact, imparfait for a
 *  hypothesis, plus-que-parfait for the past (lesson 3 in B2). Never the
 *  subjunctive, the future or the conditional straight after it.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Le train de Théo',
  frSub: 'Un fait, une hypothèse, un passé',
  setting: 'Genève. Théo prépare un voyage à Marseille ; sa collègue Inès, qui prend toujours l’avion, ne comprend pas son choix.',
  bubbles: [
    { from: 'narrator', fr: 'Inès pose des questions ; Théo répond à chaque fois par un même si.', en: 'Inès asks questions; Théo answers each time with a même si.' },
    { from: 'user', fr: fr(E(2086)), en: en(E(2086)) },
    { from: 'coach', fr: 'Même si + présent : un fait réel. Le train est vraiment plus lent.', en: 'Même si + present: a real fact. The train really is slower.', warn: 'Un fait' },
    { from: 'user', fr: fr(E(2087)), en: en(E(2087)) },
    { from: 'coach', fr: 'Même si + imparfait : une hypothèse, puis le conditionnel.', en: 'Même si + imparfait: a hypothesis, then the conditional.', warn: 'Une hypothèse' },
    { from: 'user', fr: fr(E(2088)), en: en(E(2088)) },
    { from: 'coach', fr: 'Même si + plus-que-parfait : un passé qui n’a pas eu lieu, puis le conditionnel passé.', en: 'Même si + pluperfect: a past that did not happen, then the past conditional.', warn: 'Le passé imaginé' },
    { from: 'user', fr: fr(E(2090)), en: en(E(2090)) },
    { from: 'coach', fr: 'Demain, et pourtant le présent après même si. Le futur n’y entre jamais.', en: 'Tomorrow, and yet the present after même si. The future never goes there.', warn: 'Pas de futur' },
  ],
  closing: { fr: 'Même si reste un si : présent, imparfait, plus-que-parfait, et jamais le subjonctif.', en: 'Même si is still a si: present, imparfait, pluperfect, and never the subjunctive.' },
  audio: REC('rec-b2-16-theo'),
  say: REFRAME,
  terms: ['hypothese'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-hypothese',
  title: 'Trois temps après même si',
  frSub: 'Un si renforcé',
  hint: 'Quatre cartes. La dernière compare deux mots.',
  audio: REC('rec-b2-16-meme-si'),
  say: REFRAME,
  terms: ['hypothese'],
  cards: [
    {
      head: 'Un fait', label: 'même si + présent',
      fr: fr(E(2097)), sub: rsOf(E(2097)),
      body: "C'est vraiment plus cher, et pourtant je le fais. Même si dit ici la même chose que bien que, avec l'indicatif. EN: a real fact, like bien que but in the indicative.",
    },
    {
      head: 'Une hypothèse', label: Cap(SI_REF),
      fr: fr(CL(1422)), sub: rsOf(CL(1422)),
      body: `« ${B110_REFRAME} » Même si suit la même paire : imparfait, puis conditionnel. EN: ${B110_REFRAME_EN}`,
    },
    {
      head: 'Le passé imaginé', label: Cap(SI_PASSE_REF),
      fr: fr(PF1495), sub: rsOf(PF1495),
      body: "Plus-que-parfait après même si, conditionnel passé ensuite : ce qui ne s'est pas passé n'aurait rien changé. EN: pluperfect, then past conditional.",
    },
    {
      head: 'Même si ou bien que', label: 'le mode',
      fr: fr(E(2098)), sub: rsOf(E(2098)),
      body: "Pour un fait réel, même sens : bien que le train soit, même si le train est. Le mot change, et le mode suit. Même si + subjonctif est une faute. EN: same meaning, different mood.",
    },
  ],
};

const A6_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-trier',
  layer: 'core',
  size: 'lg',
  title: 'Fait ou hypothèse',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Un fait', [
      it(E(2086), 'le train est plus lent'),
      it(E(2089), 'tu pars tôt'),
      it(E(2091), 'elle ne l’avoue pas'),
      it(E(2100), 'tu n’es pas convaincue'),
    ], chk('« Même si elle ne l’avoue pas, elle a peur de l’avion. » A-t-elle peur ?',
      ['oui, c’est un fait', 'peut-être, c’est une hypothèse'], 0,
      'Même si + présent : un fait réel. EN: yes, a fact.')),
    grp('Une hypothèse', [
      it(E(2087), 'le train n’est pas si lent'),
      it(E(2096), 'tout le monde ne prend pas le train'),
      it(E(2099), 'je ne le veux pas'),
      it(E(2094), 'le vol n’est pas moins cher'),
    ], chk('« Même si je le voulais, je ne pourrais pas partir. » La personne veut-elle partir ?',
      ['non, c’est une hypothèse', 'oui, et elle part'], 0,
      'Imparfait puis conditionnel : une hypothèse. EN: a hypothesis.')),
    ctl('Le futur', '« Même s’il … demain, nous partirons. »',
      ['neige', 'neigera'], 0,
      'Présent après même si, même pour demain. EN: neige.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Même si, trois fois',
  frSub: 'Huit phrases : fait, hypothèse ou passé',
  lines: [
    ln(E(2086)), ln(E(2087)), ln(E(2088)), ln(E(2090)),
    ln(E(2091)), ln(E(2095)), ln(E(2099)), ln(PF1495),
  ],
  questions: [
    { q: 'Deuxième phrase : le train est-il vraiment deux fois plus lent ?', opts: ['non, c’est une hypothèse', 'oui'], correct: 0, why: 'Était, puis prendrais : une hypothèse. EN: a hypothesis.' },
    { q: 'Troisième phrase : la personne avait-elle le choix ?', opts: ['non', 'oui'], correct: 0, why: 'Si j’avais eu le choix : elle ne l’avait pas. EN: no.' },
    { q: 'Quatrième phrase : la randonnée est-elle annulée s’il pleut ?', opts: ['non', 'oui'], correct: 0, why: 'Elle est maintenue. EN: no.' },
    { q: 'Cinquième phrase : de quoi la femme a-t-elle peur ?', opts: ['de l’avion', 'du train'], correct: 0, why: 'Elle a peur de l’avion, même sans l’avouer. EN: flying.' },
    { q: 'Dernière phrase : la personne a-t-elle été prévenue ?', opts: ['non', 'oui'], correct: 0, why: 'Si tu m’avais prévenu : ce n’est pas arrivé. EN: no.' },
  ],
  audio: REC('rec-b2-16-meme-si-ecoute'),
  say: REFRAME,
  terms: ['hypothese'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Ce qui n’entre jamais après même si',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Ni subjonctif, ni futur, ni conditionnel',
    body: "Après même si : le présent, l'imparfait ou le plus-que-parfait. Le futur et le conditionnel vont dans l'autre partie. Le subjonctif n'y va jamais : ce n'est pas un usage oral, c'est une faute. EN: même si keeps the si tenses.",
  },
  cards: [
    trap(E(2086), 'même si + subjonctif', 'Même si le train soit plus lent, je le préfère à l’avion.', 'Même si garde l’indicatif : est. EN: est.'),
    trap(E(2087), 'même si + conditionnel', 'Même si le train serait deux fois plus lent, je le prendrais.', 'Le conditionnel va de l’autre côté ; ici, était. EN: était.'),
    trap(E(2095), 'même si + futur', 'Même s’il neigera demain, nous partirons.', 'Le présent, même pour demain : neige. EN: neige.'),
    trap(E(2088), 'le passé imaginé', 'Même si j’aurais eu le choix, j’aurais pris le train.', 'Plus-que-parfait après même si : j’avais eu. EN: avais eu.'),
    trap(E(2100), 'même si + subjonctif', 'Même si tu ne sois pas convaincue, essaie une fois.', 'L’indicatif : tu n’es pas. EN: es.'),
    trap(E(2094), 'même si + conditionnel', 'Même si le vol serait moins cher, je prendrais le train.', 'L’imparfait après même si : était. EN: était.'),
  ],
  drill: [
    { promptSay: 'Même si le train … plus lent, je le préfère.', opts: ['est', 'soit'], correct: 0 },
    { promptSay: 'Même si le billet … deux fois plus cher, je le prendrais.', opts: ['serait', 'était'], correct: 1 },
    { promptSay: 'Même s’il … demain, nous partirons.', opts: ['neige', 'neigera'], correct: 0 },
    { promptSay: 'Même si j’… eu le choix, j’aurais pris le train.', opts: ['aurais', 'avais'], correct: 1 },
    { promptSay: 'Même si tu ne … pas convaincue, essaie.', opts: ['sois', 'es'], correct: 1 },
    { promptSay: 'Même si tout le monde … le train, les lignes ne suffiraient pas.', opts: ['prenait', 'prendrait'], correct: 0 },
    { promptSay: 'Même si le vol était moins cher, je … le train.', opts: ['prendrais', 'prenne'], correct: 0 },
    { promptSay: 'Bien que le train … plus lent, je le préfère.', opts: ['est', 'soit'], correct: 1 },
  ],
  steps: STEPS('Ni subjonctif, ni futur, ni conditionnel', 'Ce qui n’entre jamais après même si'),
  audio: REC('rec-b2-16-piege-meme-si'),
  say: REFRAME,
  terms: ['hypothese', 'oral'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Compléter : le billet de Théo', TEXTE_A6, [
  { q: 'Les deux premières phrases : même si le train (être) plus lent ; même si le billet (coûter) deux fois plus.', a: "Même si le train est plus lent (un fait, le présent) ; même si le billet coûtait deux fois plus (une hypothèse, l'imparfait, puis prendrais)." },
  { q: 'Troisième phrase : même si on m’(offrir) un vol gratuit l’an dernier.', a: "Même si on m'avait offert un vol gratuit : le passé imaginé, plus-que-parfait, puis aurais refusé." },
  { q: 'Quatrième phrase : même s’il (neiger) demain.', a: "Même s'il neige demain : le présent après même si, même pour demain." },
  { q: 'Dernière phrase : bien que ma sœur (trouver) ça absurde.', a: "Bien que ma sœur trouve ça absurde : bien que impose le subjonctif, trouve." },
], 'rec-b2-16-texte-a6', ['hypothese']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le mode', 'Après même si, le subjonctif est…',
    ['une faute', 'un usage oral accepté'], 0,
    'Une faute, à l’oral comme à l’écrit. EN: an error.'),
  ctl('L’hypothèse', '« Même si le vol … moins cher, je prendrais le train. »',
    ['était', 'serait'], 0,
    'Imparfait après même si. EN: était.'),
  ctl('Le passé', '« Même si j’… su, je serais venu. »',
    ['avais', 'aurais'], 0,
    'Plus-que-parfait après même si. EN: avais su.'),
], ['hypothese']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Même si, toujours l’indicatif',
    opener: {
      line: "Le train est plus lent, et Théo le prend quand même : ici tu concèdes un fait, une hypothèse ou un passé imaginé, toujours avec les temps de si. EN: The train is slower and Théo takes it anyway: here you concede a fact, a hypothesis or an imagined past.",
      imageRef: 'lessons/concession-avancee/act06.jpg',
    },
    sections: [],
    milestone: "Tu mets le bon temps après même si pour un fait, une hypothèse ou le passé, et jamais le subjonctif, le futur ou le conditionnel. EN: You can use the right tense after même si, and never the subjunctive.",
    estScreens: 38, restPoints: ['a6-trier', 'a6-piege'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_TRIER, A6_ECOUTE, A6_PIEGE, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: QUAND BIEN MÊME
 *
 *  The strongest hypothesis, conditional, soutenu; même si + imparfait as
 *  its everyday twin; quand même (lesson 24 in B1) is something else.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Karim prépare la réunion',
  frSub: 'L’hypothèse extrême',
  setting: 'Liège, la salle de pause d’un hôpital. Karim, délégué du personnel, répète devant sa collègue Léa ce qu’il dira demain à la direction.',
  bubbles: [
    { from: 'narrator', fr: 'Léa lui conseille d’adoucir le ton. Karim tient bon, mais choisit ses mots.', en: 'Léa advises him to soften his tone. Karim stands firm, but chooses his words.' },
    { from: 'user', fr: fr(E(2112)), en: en(E(2112)) },
    { from: 'coach', fr: 'Quand bien même + conditionnel, et le conditionnel de l’autre côté aussi.', en: 'Quand bien même + conditional, and the conditional on the other side too.', warn: 'Quand bien même' },
    { from: 'user', fr: fr(E(2113)), en: en(E(2113)) },
    { from: 'coach', fr: 'Ici, l’autre partie reste au présent : la méthode pose problème, c’est un fait.', en: 'Here, the other clause stays in the present: the method is a problem, that is a fact.', warn: 'Un fait après l’hypothèse' },
    { from: 'user', fr: fr(E(2105)), en: en(E(2105)) },
    { from: 'coach', fr: 'Même si + imparfait : le même sens, en plus courant.', en: 'Même si + imparfait: the same meaning, more everyday.', warn: 'Au quotidien' },
    { from: 'user', fr: fr(E(2107)), en: en(E(2107)) },
    { from: 'coach', fr: 'Au passé : quand bien même + conditionnel passé.', en: 'In the past: quand bien même + past conditional.', warn: 'Au passé' },
  ],
  closing: { fr: 'Quand bien même pousse l’hypothèse au plus loin : conditionnel, registre soutenu.', en: 'Quand bien même pushes the hypothesis as far as it goes: conditional, formal register.' },
  audio: REC('rec-b2-16-karim'),
  say: REFRAME,
  terms: ['hypothese'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-hypothese',
  title: 'Même dans le pire des cas',
  frSub: 'Quand bien même, et ses voisins',
  hint: 'Quatre cartes. La dernière est un faux ami.',
  audio: REC('rec-b2-16-quand-bien-meme'),
  say: REFRAME,
  terms: ['hypothese'],
  cards: [
    {
      head: 'L’hypothèse extrême', label: 'soutenu',
      fr: fr(E(2102)), sub: rsOf(E(2102)),
      body: "Quand bien même + conditionnel : même dans le cas le plus favorable à l'autre, rien ne change. Le conditionnel revient souvent de l'autre côté. EN: even if, at the extreme.",
    },
    {
      head: 'Au quotidien', label: 'même si + imparfait',
      fr: fr(E(2111)), sub: rsOf(E(2111)),
      body: "Même si le musée était gratuit dit la même chose, en plus courant. À l'oral, c'est presque toujours même si. EN: même si is the everyday twin.",
    },
    {
      head: 'Au passé', label: 'conditionnel passé',
      fr: fr(E(2107)), sub: rsOf(E(2107)),
      body: "Pour le passé imaginé, le conditionnel passé des deux côtés. Avec même si, on dirait : même si elle l'avait su. EN: past conditional on both sides.",
    },
    {
      head: 'Quand même', label: Cap(MEME_REF),
      fr: 'Il est fatigué, mais il viendra quand même.',
      sub: '[ee-leh fa-tee-GAY | meh eel vyehⁿ-DRA kahⁿ MEM]',
      body: "Quand même, seul, veut dire malgré tout et se place souvent en fin de phrase. Rien à voir avec quand bien même, qui ouvre une hypothèse. EN: quand même means all the same.",
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Deux façons d’imaginer le pire',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Quand bien même', [
      it(E(2102), 'on ajouterait des bus'),
      it(E(2103), 'tu aurais raison'),
      it(E(2106), 'la réunion aurait lieu'),
      it(E(2114), 'nous partirions à l’aube'),
    ], chk('« Quand bien même on … des bus, les routes resteraient saturées. »',
      ['ajouterait', 'ajoute', 'ajoutait'], 0,
      'Quand bien même : le conditionnel. EN: ajouterait.')),
    grp('Même si, au quotidien', [
      it(E(2105), 'même si + imparfait'),
      it(E(2111), 'même si + imparfait'),
      it(E(2104), 'la version soutenue'),
      it(E(2110), 'la version soutenue'),
    ], chk('« Quand bien même il s’excuserait », en plus courant :',
      ['même s’il s’excusait', 'même s’il s’excuserait'], 0,
      'Même si prend l’imparfait, jamais le conditionnel. EN: même s’il s’excusait.')),
    ctl('Quand même', '« Il est fatigué, mais il viendra quand même. » Quand même veut dire…',
      ['malgré tout', 'dans l’hypothèse où'], 0,
      'Quand même : malgré tout, comme dans la leçon 24 du B1. EN: all the same.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre hypothèses bancales',
  errors: [
    {
      wrong: 'Quand bien même les chiffres soient bons, la méthode pose problème.',
      right: fr(E(2113)),
      why: "Normal : c'est une concession, alors le subjonctif vient tout seul, comme après bien que. Quand bien même veut le conditionnel : seraient. EN: seraient.",
    },
    {
      wrong: 'Même si le musée serait gratuit, peu de gens y iraient.',
      right: fr(E(2111)),
      why: "Normal : quand bien même prend le conditionnel, alors on le transporte. Même si reste un si : l'imparfait, était. EN: imparfait after même si.",
    },
    {
      wrong: 'Quand bien même on ajoutera des bus, les routes resteraient saturées.',
      right: fr(E(2102)),
      why: "Normal : l'ajout de bus est pour plus tard, d'où le futur. Mais quand bien même ouvre une hypothèse : ajouterait. EN: ajouterait.",
    },
    {
      wrong: 'Quand bien même tu insistes, je ne changerais pas d’avis.',
      right: fr(E(2112)),
      why: "Normal : après quand, on met d'habitude l'indicatif. Quand bien même, lui, veut le conditionnel : insisterais. EN: insisterais.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese'],
};

const A7_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a7-hacks',
  layer: 'core',
  sheetId: 'sheet-hypothese',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Regarde le lecteur : un message à un collègue, même si ; un rapport ou un discours, quand bien même.', why: "Les deux disent la même hypothèse ; seul le registre change. EN: same meaning, different register." },
    { hack: 'Après même si, pense à si : ce qui est interdit après si l’est aussi après même si.', why: "Même si est un si renforcé : ni futur, ni conditionnel, ni subjonctif. EN: même si inherits the si rules." },
    { hack: 'Pour vérifier un quand bien même, dis la phrase avec même si et l’imparfait.', why: "Si « même si le musée était gratuit » marche, « quand bien même le musée serait gratuit » marche aussi. EN: test with the everyday version." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Réécrire : le courriel de Karim', TEXTE_A7, [
  { q: 'Première phrase, avec quand bien même.', a: "Quand bien même la direction proposerait une prime, le problème des horaires resterait entier." },
  { q: 'Deuxième phrase, avec quand bien même.', a: "Quand bien même nous obtiendrions deux postes de plus, l'équipe de nuit manquerait encore de monde." },
  { q: 'Troisième phrase, avec quand bien même.', a: "Quand bien même la réunion aurait lieu demain, rien ne changerait avant l'été." },
  { q: 'Qu’est-ce qui change de ton entre les deux versions ?', a: "Le sens reste le même ; quand bien même rend le courriel plus soutenu et plus ferme, ce qui convient à un délégué qui écrit au nom de ses collègues." },
], 'rec-b2-16-texte-a7', ['hypothese']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le mode', 'Quand bien même prend…',
    ['le conditionnel', 'le subjonctif', 'l’indicatif futur'], 0,
    'Le conditionnel. EN: the conditional.'),
  ctl('L’équivalent', 'Au quotidien, on dit plutôt…',
    ['même si + imparfait', 'bien que + subjonctif'], 0,
    'Même si + imparfait. EN: même si + imparfait.'),
  ctl('Le faux ami', '« Il viendra quand même » veut dire…',
    ['il viendra malgré tout', 'il viendra peut-être'], 0,
    'Quand même : malgré tout. EN: all the same.'),
], ['hypothese']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Quand bien même',
    opener: {
      line: "Même dans le cas le plus favorable à l'autre, rien ne change : ici tu pousses l'hypothèse au plus loin, au conditionnel, en registre soutenu. EN: Even in the case most favourable to the other side, nothing changes: here you push the hypothesis to the extreme.",
      imageRef: 'lessons/concession-avancee/act07.jpg',
    },
    sections: [],
    milestone: "Tu emploies quand bien même avec le conditionnel, tu le remplaces par même si + imparfait au quotidien, et tu ne le confonds plus avec quand même. EN: You can use quand bien même, its everyday twin, and tell it from quand même.",
    estScreens: 34, restPoints: ['a7-construire', 'a7-hacks'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_CONSTRUIRE, A7_ERREURS, A7_HACKS, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: AVOIR BEAU, LOIN DE, AU LIEU DE
 *
 *  Past B1: avoir beau in the passé composé and the conditional, with an
 *  infinitif passé and a thing as subject; loin de (the opposite of what was
 *  expected) against au lieu de; sans + infinitive with one subject.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Une semaine sans internet',
  frSub: 'Des efforts qui ne changent rien',
  setting: 'Montréal. Aïssatou raconte à son ami Hugo sa semaine de bataille avec son fournisseur internet.',
  bubbles: [
    { from: 'narrator', fr: 'Hugo écoute, et compte les efforts d’Aïssatou.', en: 'Hugo listens, and counts Aïssatou’s efforts.' },
    { from: 'user', fr: fr(E(2116)), en: en(E(2116)) },
    { from: 'coach', fr: 'J’ai eu beau : avoir au passé composé, et appeler reste à l’infinitif.', en: 'J’ai eu beau: avoir in the passé composé, and appeler stays in the infinitive.', warn: 'Avoir beau au passé' },
    { from: 'user', fr: fr(E(2122)), en: en(E(2122)) },
    { from: 'coach', fr: 'Loin de : la mise à jour devait réparer, elle a fait le contraire.', en: 'Loin de: the update was supposed to repair, it did the opposite.', warn: 'Loin de' },
    { from: 'user', fr: fr(E(2123)), en: en(E(2123)) },
    { from: 'coach', fr: 'Au lieu de : une action à la place d’une autre.', en: 'Au lieu de: one action in place of another.', warn: 'Au lieu de' },
    { from: 'user', fr: fr(E(2117)), en: en(E(2117)) },
    { from: 'coach', fr: 'Avoir beau + infinitif passé : tout est déjà vérifié, et rien ne marche.', en: 'Avoir beau + perfect infinitive: everything is already checked, and nothing works.', warn: 'L’infinitif passé' },
  ],
  closing: { fr: 'Avoir se conjugue, l’infinitif reste, et la suite dit l’échec, sans mais.', en: 'Avoir is conjugated, the infinitive stays, and the rest says it failed, without mais.' },
  audio: REC('rec-b2-16-aissatou'),
  say: REFRAME,
  terms: ['avoirbeau'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-hypothese',
  title: 'L’infinitif qui concède',
  frSub: 'Avoir beau, loin de, au lieu de',
  hint: 'Quatre cartes. Les deux dernières se ressemblent.',
  audio: REC('rec-b2-16-infinitif'),
  say: REFRAME,
  terms: ['avoirbeau'],
  cards: [
    {
      head: 'À tous les temps', label: Cap(CONCESSION_REF),
      fr: fr(CL(1507)), sub: rsOf(CL(1507)),
      body: "Tu connais j'ai beau et j'avais beau. Avoir se met aussi au passé composé, j'ai eu beau appeler, et au conditionnel, tu aurais beau redémarrer. EN: avoir beau works in every tense.",
    },
    {
      head: 'Une chose pour sujet', label: 'avec être',
      fr: fr(E(2119)), sub: rsOf(E(2119)),
      body: "Le sujet peut être une chose : l'imprimante a beau être neuve. Avec un infinitif passé, l'effort est déjà fait : j'ai beau avoir tout vérifié. EN: things can be the subject; the perfect infinitive works too.",
    },
    {
      head: 'Loin de', label: 'l’inverse',
      fr: fr(E(2121)), sub: rsOf(E(2121)),
      body: "Loin de + infinitif : l'inverse de ce qu'on attendait. Loin de se décourager, elle a recommencé : elle a fait le contraire. EN: far from doing X, the opposite.",
    },
    {
      head: 'Au lieu de', label: Cap(CONCESSION_REF),
      fr: fr(CL(1538)), sub: rsOf(CL(1538)),
      body: "Au lieu de remplace une action par une autre, sans dire que c'est surprenant. Loin de, lui, souligne le contraire de l'attendu. EN: instead of, against far from.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'L’effort, puis l’échec',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Avoir beau, à tous les temps', [
      it(E(2116), 'passé composé'),
      it(E(2118), 'conditionnel'),
      it(E(2120), 'imparfait'),
      it(E(2127), 'passé composé'),
    ], chk('« Elle … beau crier hier, personne ne l’a entendue. »',
      ['a eu', 'a', 'aura'], 0,
      'Hier, un fait fini : passé composé, a eu beau. EN: a eu.')),
    grp('Loin de ou au lieu de', [
      it(E(2121), 'le contraire de l’attendu'),
      it(E(2122), 'le contraire de l’attendu'),
      it(E(2123), 'une action à la place d’une autre'),
      it(E(2131), 'une action à la place d’une autre'),
    ], chk('« … d’être parfaite, cette solution a au moins le mérite d’exister. »',
      ['Loin', 'Au lieu'], 0,
      'Loin d’être : l’inverse de ce qu’on pourrait croire. Au lieu de veut une action remplacée par une autre. EN: far from.')),
    ctl('Sans mais', '« J’ai beau chercher, je ne trouve pas. » Faut-il ajouter mais ?',
      ['non, avoir beau dit déjà l’opposition', 'oui, sinon la phrase est incomplète'], 0,
      'Avoir beau porte l’opposition : pas de mais. EN: no mais.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avoirbeau'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Des efforts pour rien',
  frSub: 'Neuf phrases à l’oreille',
  lines: [
    ln(E(2116)), ln(E(2117)), ln(E(2118)), ln(E(2119)), ln(E(2121)),
    ln(E(2124)), ln(E(2129)), ln(E(2133)), ln(CL(1519)),
  ],
  questions: [
    { q: 'Première phrase : combien de fois la personne a-t-elle appelé ?', opts: ['trois', 'deux'], correct: 0, why: 'Trois fois, pour rien. EN: three times.' },
    { q: 'Quatrième phrase : l’imprimante est-elle vieille ?', opts: ['non, elle est neuve', 'oui'], correct: 0, why: 'Elle a beau être neuve. EN: it is new.' },
    { q: 'Cinquième phrase : qu’a-t-elle fait le lendemain ?', opts: ['elle a recommencé', 'elle a abandonné'], correct: 0, why: 'Loin de se décourager : elle a recommencé. EN: she started again.' },
    { q: 'Sixième phrase : l’homme a-t-il lu le contrat ?', opts: ['non', 'oui'], correct: 0, why: 'Il a signé sans le lire. EN: no.' },
    { q: 'Dernière phrase : la décision peut-elle encore changer ?', opts: ['non, elle est prise', 'oui, si on proteste'], correct: 0, why: 'Tu auras beau protester : elle est prise. EN: no.' },
  ],
  audio: REC('rec-b2-16-infinitif-ecoute'),
  say: REFRAME,
  terms: ['avoirbeau'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'L’infinitif qu’on oublie',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Avoir porte le temps, l’infinitif reste',
    body: "Avoir beau, loin de et sans prennent un infinitif, jamais que. Avoir se conjugue ; le verbe qui suit ne bouge pas, et la deuxième partie se passe de mais. EN: an infinitive, never que; no mais after avoir beau.",
  },
  cards: [
    trap(E(2116), 'avoir beau que', 'J’ai eu beau que j’appelle trois fois, personne n’a répondu.', 'Avoir beau + infinitif, jamais que : appeler. EN: appeler.'),
    trap(E(2119), 'le verbe conjugué', 'L’imprimante a beau est neuve, elle tombe en panne chaque semaine.', 'L’infinitif reste : être. EN: être.'),
    trap(E(2130), 'avoir beau… mais', 'Tu as beau être pressé, mais prends le temps de sauvegarder.', 'Avoir beau porte déjà l’opposition : pas de mais. EN: no mais.'),
    trap(E(2121), 'le pronom oublié', 'Loin de décourager, elle a recommencé le lendemain.', 'Le verbe est pronominal : loin de se décourager. EN: keep se.'),
    trap(E(2124), 'sans que, un sujet', 'Il a signé le contrat sans qu’il le lise.', 'Un seul sujet : sans le lire. EN: sans + infinitive.'),
    trap(E(2117), 'l’infinitif passé', 'J’ai beau avoir tout vérifier, l’application refuse ma connexion.', 'Après avoir, le participe passé : vérifié. EN: vérifié.'),
  ],
  drill: [
    { promptSay: 'J’ai eu beau …, personne n’a répondu.', opts: ['appeler', 'que j’appelle'], correct: 0 },
    { promptSay: 'L’imprimante a beau … neuve, elle tombe en panne.', opts: ['est', 'être'], correct: 1 },
    { promptSay: 'Elle … beau crier, personne ne l’a entendue.', opts: ['a eu', 'ait eu'], correct: 0 },
    { promptSay: '… de se décourager, elle a recommencé. (le contraire de l’attendu)', opts: ['Loin', 'Au lieu'], correct: 0 },
    { promptSay: '… de réparer l’écran, ils m’ont proposé un nouvel appareil. (une action à la place d’une autre)', opts: ['Loin', 'Au lieu'], correct: 1 },
    { promptSay: 'Il a signé le contrat sans … lire.', opts: ['le', 'qu’il le'], correct: 0 },
    { promptSay: 'J’ai beau avoir tout …, ça ne marche pas.', opts: ['vérifié', 'vérifier'], correct: 0 },
    { promptSay: 'Tu … beau redémarrer, le problème reviendrait.', opts: ['auras', 'aurais'], correct: 1 },
  ],
  steps: STEPS('Avoir porte le temps, l’infinitif reste', 'L’infinitif qu’on oublie'),
  audio: REC('rec-b2-16-piege-infinitif'),
  say: REFRAME,
  terms: ['avoirbeau'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Compléter : la réclamation d’Aïssatou', TEXTE_A8, [
  { q: 'Première phrase : j’(avoir beau) appeler votre service trois fois la semaine dernière.', a: "J'ai eu beau appeler : la semaine dernière, un fait fini, avoir au passé composé." },
  { q: 'Deuxième phrase : (___) régler la panne, votre mise à jour l’a aggravée.', a: "Loin de régler la panne : la mise à jour a fait le contraire de ce qu'on attendait. Au lieu de est possible aussi, mais loin de dit mieux la surprise." },
  { q: 'Troisième phrase : (___) m’envoyer un technicien, vous m’avez renvoyée vers votre site.', a: "Au lieu de m'envoyer un technicien : une action à la place d'une autre." },
  { q: 'Quatrième phrase : j’(avoir beau) être patiente.', a: "J'ai beau être patiente : le présent, puisque la patience dure encore ; pas de mais ensuite." },
], 'rec-b2-16-texte-a8', ['avoirbeau']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Avoir beau', '« Tu aurais beau … , rien ne changerait. »',
    ['insister', 'insistes'], 0,
    'L’infinitif ne bouge pas. EN: insister.'),
  ctl('Loin de', 'Loin de se plaindre, il a proposé une solution. Il…',
    ['a fait le contraire de se plaindre', 's’est plaint, puis a proposé'], 0,
    'Loin de : l’inverse de l’attendu. EN: the opposite.'),
  ctl('Sans', '« Il est parti … rien dire. » (lui seul)',
    ['sans', 'sans que'], 0,
    'Un seul sujet : sans + infinitif. EN: sans.'),
], ['avoirbeau']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Avoir beau, loin de, au lieu de',
    opener: {
      line: "Trois appels, une mise à jour, et toujours rien : ici tu concèdes l'effort avec un infinitif, à tous les temps, et tu dis ce qui s'est passé à la place. EN: Three calls, an update, and still nothing: here you concede the effort with an infinitive.",
      imageRef: 'lessons/concession-avancee/act08.jpg',
    },
    sections: [],
    milestone: "Tu conjugues avoir beau à tous les temps, tu choisis entre loin de et au lieu de, et tu gardes l'infinitif après sans quand le sujet est le même. EN: You can use avoir beau in any tense and tell loin de from au lieu de.",
    estScreens: 38, restPoints: ['a8-construire', 'a8-piege'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_ECOUTE, A8_PIEGE, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: MALGRÉ, EN DÉPIT DE, MALGRÉ LE FAIT QUE
 *
 *  A noun only; the clause turned into a noun (lesson 10 in B2); malgré le
 *  fait que (both moods, heavy); « malgré que » named as contested in
 *  writing; nonobstant for recognition.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'L’article sur le lycée',
  frSub: 'Une phrase qui devient un nom',
  setting: 'Toulouse, la rédaction d’un journal de quartier. Mme Faure écrit un article sur la fermeture d’un lycée ; Lucas, son stagiaire, relit avec elle.',
  bubbles: [
    { from: 'narrator', fr: 'L’article part ce soir. Mme Faure veut des phrases courtes et nettes.', en: 'The article goes out tonight. Mme Faure wants short, clean sentences.' },
    { from: 'user', fr: fr(E(2138)), en: en(E(2138)) },
    { from: 'coach', fr: 'Bien que + subjonctif passé : la protestation a eu lieu.', en: 'Bien que + subjonctif passé: the protest took place.', warn: 'Bien que' },
    { from: 'user', fr: fr(E(2139)), en: en(E(2139)) },
    { from: 'coach', fr: 'La même idée avec malgré : le verbe protester devient un nom, les protestations.', en: 'The same idea with malgré: the verb protester becomes a noun, les protestations.', warn: 'Malgré + nom' },
    { from: 'user', fr: fr(E(2136)), en: en(E(2136)) },
    { from: 'coach', fr: 'Malgré le fait que : correct, mais lourd. Dans un article court, malgré + nom se lit mieux.', en: 'Malgré le fait que: correct, but heavy. In a short article, malgré + noun reads better.', warn: 'Malgré le fait que' },
    { from: 'user', fr: fr(E(2135)), en: en(E(2135)) },
    { from: 'coach', fr: 'En dépit de : le sens de malgré, un peu plus soutenu.', en: 'En dépit de: the meaning of malgré, a little more formal.', warn: 'En dépit de' },
  ],
  closing: { fr: 'Malgré veut un nom : transforme le verbe, ou garde bien que.', en: 'Malgré wants a noun: turn the verb into one, or keep bien que.' },
  audio: REC('rec-b2-16-college'),
  say: REFRAME,
  terms: ['nom'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Le nom qui concède',
  frSub: 'Malgré, en dépit de, et leurs lourdeurs',
  hint: 'Quatre cartes. La dernière parle de ce qu’on entend.',
  audio: REC('rec-b2-16-nom'),
  say: REFRAME,
  terms: ['nom', 'oral'],
  cards: [
    {
      head: 'Un nom, pas une phrase', label: Cap(CONCESSION_REF),
      fr: fr(CL(1461)), sub: rsOf(CL(1461)),
      body: `« ${B132_CARTE} » Malgré et en dépit de portent un nom ; bien que porte une phrase. EN: ${B132_CARTE_EN}`,
    },
    {
      head: 'De la phrase au nom', label: Cap(NOMINAL_REF),
      fr: fr(E(2145)), sub: rsOf(E(2145)),
      body: "Bien que son gardien ait été expulsé devient malgré l'expulsion de son gardien : le verbe expulser devient le nom expulsion. EN: turn the verb into a noun.",
    },
    {
      head: 'Malgré le fait que', label: 'correct, mais lourd',
      fr: fr(E(2137)), sub: rsOf(E(2137)),
      body: "Malgré le fait que et en dépit du fait que acceptent l'indicatif ou le subjonctif. C'est correct, mais lourd : préfère bien que, ou malgré + nom. EN: correct but heavy.",
    },
    {
      head: 'Malgré que', label: 'contesté à l’écrit',
      fr: 'malgré que (oral) · bien que (écrit)',
      sub: '[mal-gray KUH] · [byehⁿ KUH]',
      body: "Malgré que + subjonctif est très répandu à l'oral, et on le trouve chez de bons auteurs, mais on le critique à l'écrit. À l'examen, écris bien que. EN: common in speech, criticised in writing.",
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'De bien que à malgré',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('La phrase devenue nom', [
      it(E(2138), 'bien que + phrase'),
      it(E(2139), 'malgré + nom'),
      it(E(2134), 'la grève'),
      it(E(2145), 'l’expulsion'),
    ], chk('« Bien que le bus soit en retard », avec malgré :',
      ['malgré le retard du bus', 'malgré que le bus est en retard', 'malgré le bus est en retard'], 0,
      'Malgré + nom : le retard du bus. EN: a noun.')),
    grp('Malgré ou en dépit de', [
      it(E(2135), 'en dépit de : soutenu'),
      it(E(2143), 'en dépit du : de + le'),
      it(E(2147), 'en dépit de ses efforts'),
      it(CL(1461), 'en dépit des critiques'),
    ], chk('Dans un communiqué officiel, laquelle est la plus soutenue ?',
      ['en dépit des protestations', 'malgré que les gens protestent'], 0,
      'En dépit de + nom ; malgré que est critiqué à l’écrit. EN: en dépit de.')),
    ctl('Le fait que', 'Après malgré le fait que, quel mode ?',
      ['l’indicatif ou le subjonctif', 'le subjonctif seulement', 'le conditionnel'], 0,
      'Les deux se trouvent. EN: either mood.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nom'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre malgré de travers',
  errors: [
    {
      wrong: 'Malgré les parents ont protesté, le lycée fermera.',
      right: fr(E(2139)),
      why: "Normal : en anglais, despite peut précéder une idée entière. Malgré, lui, ne porte qu'un nom : les protestations des parents. EN: malgré takes a noun only.",
    },
    {
      wrong: 'Malgré qu’il fasse mauvais, la sortie scolaire a eu lieu.',
      right: fr(E(2143)),
      why: "Normal : c'est ce qu'on entend partout. À l'écrit, malgré que est critiqué : en dépit du mauvais temps, ou bien qu'il fasse mauvais. EN: criticised in writing.",
    },
    {
      wrong: 'En dépit que les parents aient protesté, le lycée fermera.',
      right: fr(E(2138)),
      why: "Normal : on calque bien que. Mais on ne dit pas « en dépit que » : en dépit du fait que, ou plus simplement bien que. EN: en dépit que is not used.",
    },
    {
      wrong: 'Malgré de ses efforts, il n’a pas obtenu la bourse.',
      right: fr(E(2147)),
      why: "Normal : en dépit de a un de, alors on l'ajoute à malgré. Malgré n'en prend jamais : malgré ses efforts, ou en dépit de ses efforts. EN: no de after malgré.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nom', 'oral'],
};

const A9_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a9-focus',
  layer: 'core',
  sheetId: 'sheet-carte',
  title: 'Ce qu’il faut retenir de malgré',
  points: [
    "Malgré et en dépit de prennent un nom : malgré la grève. EN: a noun.",
    "Pour garder une phrase, passe à bien que + subjonctif. EN: or keep a clause with bien que.",
    "Malgré le fait que est correct mais lourd, avec l'indicatif ou le subjonctif. EN: correct but heavy.",
    "Malgré que se dit beaucoup, mais s'écrit mal : évite-le à l'examen. EN: avoid malgré que in writing.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nom', 'oral'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Réécrire : la lettre du collège', TEXTE_A9, [
  { q: 'Premier passage : bien que les parents aient protesté.', a: "Malgré les protestations des parents : protester devient les protestations." },
  { q: 'Deuxième passage : bien que le budget ait augmenté.', a: "Malgré la hausse du budget, ou malgré l'augmentation du budget : augmenter devient la hausse ou l'augmentation." },
  { q: 'Troisième passage : bien qu’il fasse mauvais.', a: "Malgré le mauvais temps : la météo devient un nom." },
  { q: 'Quatrième passage : bien que notre gardien ait été expulsé.', a: "Malgré l'expulsion de notre gardien : expulser devient l'expulsion." },
], 'rec-b2-16-texte-a9', ['nom']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le nom', '« Malgré … , la sortie a eu lieu. »',
    ['le mauvais temps', 'qu’il faisait mauvais'], 0,
    'Malgré + nom. EN: a noun.'),
  ctl('De + le', '« En dépit … bruit »',
    ['du', 'de le'], 0,
    'De + le = du. EN: du.'),
  ctl('À l’écrit', 'Malgré qu’il pleuve, à l’examen :',
    ['à éviter : écris bien qu’il pleuve', 'la forme la plus soutenue'], 0,
    'Critiqué à l’écrit. EN: avoid it.'),
], ['nom']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Malgré, en dépit de',
    opener: {
      line: "Des protestations, une grève, un gardien expulsé : ici tu concèdes avec un seul nom, et tu transformes une phrase entière pour qu'elle tienne après malgré. EN: Protests, a strike, a goalkeeper sent off: here you concede with a noun, turning a whole clause into one.",
      imageRef: 'lessons/concession-avancee/act09.jpg',
    },
    sections: [],
    milestone: "Tu mets un nom après malgré et en dépit de, tu transformes une phrase en nom, et tu évites malgré que à l'écrit. EN: You can use malgré with a noun and avoid malgré que in writing.",
    estScreens: 34, restPoints: ['a9-construire', 'a9-focus'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_CONSTRUIRE, A9_ERREURS, A9_FOCUS, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: POURTANT, TOUTEFOIS, IL N'EN RESTE PAS MOINS QUE
 *
 *  Two whole sentences: the adverbs, their place and register; certes…
 *  mais (lesson 23 in B2); il n'en reste pas moins que, il n'en demeure pas
 *  moins, toujours est-il que, all with the indicative.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le débat de la radio',
  frSub: 'La fermeture d’un guichet de gare, huit interventions',
  lines: [
    ln(E(2153)), ln(E(2154)), ln(E(2155)), ln(E(2156)),
    ln(E(2157)), ln(E(2161)), ln(E(2162)), ln(E(2165)),
  ],
  questions: [
    { q: 'Première intervention : que reproche-t-on à l’application ?', opts: ['elle laisse de côté les personnes âgées', 'elle est trop lente'], correct: 0, why: 'Elle exclut les personnes âgées. EN: it shuts out older people.' },
    { q: 'Troisième intervention : la personne sait-elle qui a raison ?', opts: ['non', 'oui'], correct: 0, why: 'Elle ne sait pas ; toujours est-il que le guichet a fermé. EN: no.' },
    { q: 'Quatrième intervention : que disent les chiffres ?', opts: ['ils sont encourageants', 'ils sont mauvais'], correct: 0, why: 'Encourageants, et pourtant les usagers se plaignent. EN: encouraging.' },
    { q: 'Cinquième intervention : la mesure est-elle populaire ?', opts: ['non, mais elle est nécessaire', 'oui, et elle est nécessaire'], correct: 0, why: 'Impopulaire, cependant nécessaire. EN: unpopular but necessary.' },
    { q: 'Dernière intervention : la personne est-elle convaincue ?', opts: ['non, elle doute', 'oui, tout à fait'], correct: 0, why: 'Permettez-moi toutefois d’en douter. EN: she doubts.' },
  ],
  audio: REC('rec-b2-16-debat'),
  say: REFRAME,
  terms: ['discours'],
};

const A10_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a10-table',
  layer: 'core',
  sheetId: 'sheet-discours',
  title: 'Six mots pour deux phrases',
  cols: ['Mot', 'Place', 'Registre'],
  rows: [
    { cells: ['pourtant', 'en tête ou après le verbe', 'courant, oral et écrit'], say: fr(E(2156)),
      detail: { title: 'pourtant', body: "Le plus courant : un fait aurait dû en empêcher un autre. EN: the everyday word.", say: fr(E(2178)) } },
    { cells: ['cependant', 'en tête ou après le verbe', 'plutôt écrit'], say: fr(E(2157)),
      detail: { title: 'cependant', body: "Même sens que pourtant, un peu plus écrit. EN: slightly more written.", say: fr(E(2157)) } },
    { cells: ['toutefois', 'en tête ou après le verbe', 'soutenu'], say: fr(E(2152)),
      detail: { title: 'toutefois', body: "Il nuance plus qu'il ne contredit : très fréquent dans les textes universitaires. EN: it nuances.", say: fr(CL(1474)) } },
    { cells: ['néanmoins', 'en tête ou après le verbe', 'soutenu'], say: fr(E(2162)),
      detail: { title: 'néanmoins', body: "Même famille, registre écrit. Souvent après un certes. EN: written, often after certes.", say: fr(CL(1473)) } },
    { cells: ["il n'en reste pas moins que", 'en tête, + indicatif', 'soutenu'], say: fr(E(2154)),
      detail: { title: "il n'en reste pas moins que", body: "Après une concession, le fait qui tient malgré tout. L'indicatif. EN: the fact remains that.", say: fr(OA(1707)) } },
    { cells: ['toujours est-il que', 'en tête, + indicatif', 'courant, écrit'], say: fr(E(2155)),
      detail: { title: 'toujours est-il que', body: "On laisse de côté ce qui est discuté pour poser un fait sûr. L'indicatif. EN: the fact is that.", say: fr(E(2161)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['discours'],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Relier deux phrases',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('La place de l’adverbe', [
      it(E(2152), 'toutefois après le verbe'),
      it(E(2157), 'cependant après le verbe'),
      it(E(2162), 'néanmoins après l’auxiliaire'),
      it('fr.b2.universite.1046', 'toutefois après le verbe'),
    ], chk('Quelle place est correcte ?',
      ['il reste toutefois très coûteux', 'il toutefois reste très coûteux'], 0,
      'Après le verbe conjugué, jamais avant. EN: after the conjugated verb.')),
    grp('Le fait qui tient', [
      it(E(2154), 'il n’en reste pas moins que'),
      it(E(2155), 'toujours est-il que'),
      it(E(2161), 'toujours est-il que'),
      it(E(2164), 'toujours est-il que'),
    ], chk('« Toujours est-il que personne ne nous … prévenus. »',
      ['a', 'ait'], 0,
      'Un fait : l’indicatif. EN: a.')),
    grp('Certes, puis la réponse', [
      it(E(2153), 'certes… néanmoins'),
      it(CL(1573), 'certes… mais'),
      it(E(2165), 'je comprends… toutefois'),
      it(OA(1707), 'admettons que… il n’en reste pas moins que'),
    ], chk('Après certes, qu’attend le lecteur ?',
      ['une réponse : mais, néanmoins, il n’en reste pas moins que', 'une deuxième concession, sans réponse'], 0,
      'Certes ouvre la porte pour mieux la refermer. EN: an answer.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['discours'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Des adverbes mal attachés',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Deux phrases complètes, et l’indicatif',
    body: "Pourtant, cependant, toutefois et néanmoins relient deux phrases, sans que. Ils se placent en tête ou après le verbe conjugué. Il n'en reste pas moins que et toujours est-il que prennent l'indicatif. EN: two whole sentences; the indicative.",
  },
  cards: [
    trap(E(2163), '+ subjonctif', 'Il n’en reste pas moins que le service soit mal organisé.', 'Un fait qui tient : l’indicatif, est. EN: est.'),
    trap(E(2164), '+ subjonctif', 'Toujours est-il que personne ne nous ait prévenus.', 'Un fait : a prévenus. EN: a.'),
    trap(E(2152), 'la place', 'Le projet est ambitieux ; il toutefois reste très coûteux.', 'Après le verbe conjugué : il reste toutefois. EN: after the verb.'),
    trap(E(2156), 'pourtant + que', 'Les chiffres sont encourageants. Pourtant que les usagers se plaignent.', 'Pourtant relie deux phrases : jamais de que. EN: no que.'),
    trap(E(2155), 'l’inversion', 'Je ne sais pas qui a raison ; toujours il est que le guichet a fermé.', 'Tournure figée, avec l’inversion : toujours est-il que. EN: est-il.'),
    trap(E(2160), 'demeurer', 'Le service en ligne marche bien ; il n’en demeure pas moins qu’imparfait.', 'Avec un adjectif, pas de que : il n’en demeure pas moins imparfait. EN: no que before an adjective.'),
  ],
  drill: [
    { promptSay: 'Il n’en reste pas moins que le service … mal organisé.', opts: ['est', 'soit'], correct: 0 },
    { promptSay: 'Toujours est-il que personne ne nous … prévenus.', opts: ['ait', 'a'], correct: 1 },
    { promptSay: 'Le projet est ambitieux ; il reste … très coûteux.', opts: ['toutefois', 'malgré'], correct: 0 },
    { promptSay: '…, l’application simplifie les démarches ; néanmoins, elle exclut les personnes âgées.', opts: ['Malgré', 'Certes'], correct: 1 },
    { promptSay: 'Les chiffres sont encourageants. …, les usagers se plaignent.', opts: ['Pourtant', 'Bien que'], correct: 0 },
    { promptSay: 'La mesure est impopulaire ; elle est … nécessaire.', opts: ['bien que', 'cependant'], correct: 1 },
    { promptSay: 'Je ne sais pas qui a raison ; … que le guichet a fermé.', opts: ['toujours est-il', 'quoique'], correct: 0 },
    { promptSay: 'Tout le monde était prévenu ; le guichet a … été pris d’assaut.', opts: ['néanmoins', 'malgré'], correct: 0 },
  ],
  steps: STEPS('Deux phrases complètes, et l’indicatif', 'Des adverbes mal attachés'),
  audio: REC('rec-b2-16-piege-discours'),
  say: REFRAME,
  terms: ['discours'],
};

const A10_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-exemples',
  layer: 'core',
  title: 'Cinq phrases, cinq registres',
  frSub: 'Du courrier au texte universitaire',
  examples: [
    ex(CL(1474), 'toutefois en tête, après une phrase courte'),
    ex(CL(1473), 'néanmoins : un peu plus soutenu que pourtant'),
    ex(OA(1707), 'admettons que… il n’en reste pas moins que : la concession, puis la réponse'),
    ex('fr.b2.universite.1046', 'toutefois après le verbe, dans un texte universitaire'),
    ex(E(2160), 'il n’en demeure pas moins + adjectif : plus soutenu encore'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['discours'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Compléter : le courrier de Paul Tremblay', TEXTE_A10, [
  { q: 'Premier et deuxième blancs : (___), l’application permet… ; elle exclut (___) les voyageurs…', a: "Certes, l'application permet d'acheter un billet en deux minutes. Elle exclut toutefois les voyageurs qui n'ont pas de téléphone : toutefois après le verbe." },
  { q: 'Troisième blanc : on me dit que le guichet coûtait trop cher ; (___) il rendait un service…', a: "Il n'en reste pas moins qu'il rendait un service : une concession, puis le fait qui tient, à l'indicatif." },
  { q: 'Quatrième blanc : j’ignore qui a pris cette décision ; (___) ma voisine ne voyage plus seule.', a: "Toujours est-il que ma voisine de quatre-vingts ans ne voyage plus seule : on laisse de côté ce qu'on ignore, et on pose un fait." },
  { q: 'Quel est le mouvement de cette lettre ?', a: "Elle accorde d'abord un avantage à l'application (certes), puis y répond deux fois (toutefois, il n'en reste pas moins que), et finit sur un fait concret (toujours est-il que)." },
], 'rec-b2-16-texte-a10', ['discours']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La place', 'Où placer néanmoins dans « Elle est chère ; elle reste utile » ?',
    ['elle reste néanmoins utile', 'elle néanmoins reste utile'], 0,
    'Après le verbe conjugué. EN: after the verb.'),
  ctl('Le mode', 'Il n’en reste pas moins que prend…',
    ['l’indicatif', 'le subjonctif'], 0,
    'Un fait qui tient. EN: the indicative.'),
  ctl('Le registre', 'Le plus courant à l’oral :',
    ['pourtant', 'néanmoins', 'toutefois'], 0,
    'Pourtant se dit partout. EN: pourtant.'),
], ['discours']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Pourtant, toutefois…',
    opener: {
      line: "Un débat à la radio, où chacun accorde un point avant de répondre : ici tu relies deux phrases entières, avec le mot et la place qui conviennent. EN: A radio debate where everyone grants a point before answering: here you link two whole sentences.",
      imageRef: 'lessons/concession-avancee/act10.jpg',
    },
    sections: [],
    milestone: "Tu places pourtant, toutefois et néanmoins, tu réponds à un certes, et tu poses un fait avec il n'en reste pas moins que ou toujours est-il que. EN: You can place the adverbs and answer a concession with a fact.",
    estScreens: 38, restPoints: ['a10-table', 'a10-piege'],
  },
  sections: [A10_ECOUTE, A10_TABLE, A10_CONSTRUIRE, A10_PIEGE, A10_EXEMPLES, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: CONCÉDER OU OPPOSER
 *
 *  alors que / tandis que compare two facts; bien que admits one and goes on
 *  anyway; alors que that concedes; en revanche and par contre contrast and
 *  concede nothing; au contraire is something else again.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a11-histoire',
  layer: 'core',
  title: 'Lyon ou Saint-Étienne',
  frSub: 'Un obstacle, ou deux faits côte à côte',
  setting: 'Lyon. Une journaliste interroge Malik pour un article sur les familles qui hésitent à quitter les grandes villes.',
  bubbles: [
    { from: 'narrator', fr: 'La journaliste note tout. Malik compare, puis explique ses choix.', en: 'The journalist notes everything. Malik compares, then explains his choices.' },
    { from: 'user', fr: fr(E(2170)), en: en(E(2170)) },
    { from: 'coach', fr: 'Bien que : Lyon est chère, et il y vit quand même. Un obstacle dépassé.', en: 'Bien que: Lyon is expensive, and he lives there anyway. An obstacle overridden.', warn: 'Concession' },
    { from: 'user', fr: fr(E(2171)), en: en(E(2171)) },
    { from: 'coach', fr: 'Alors que : deux villes comparées. Aucun obstacle, deux faits côte à côte.', en: 'Alors que: two cities compared. No obstacle, two facts side by side.', warn: 'Opposition' },
    { from: 'user', fr: fr(CL(1522)), en: en(CL(1522)) },
    { from: 'coach', fr: 'Encore une comparaison : lui, moi.', en: 'Another comparison: him, me.', warn: 'Opposition' },
    { from: 'user', fr: fr(E(2178)), en: en(E(2178)) },
    { from: 'coach', fr: 'Pourtant : bien gagner sa vie aurait dû suffire. C’est une concession.', en: 'Pourtant: earning a good living should have been enough. That is a concession.', warn: 'Concession' },
  ],
  closing: { fr: 'Un obstacle qu’on dépasse : concession. Deux faits qu’on compare : opposition.', en: 'An obstacle overridden: concession. Two facts compared: opposition.' },
  audio: REC('rec-b2-16-malik'),
  say: REFRAME,
  terms: ['opposition'],
};

const A11_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a11-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-discours',
  title: 'Concéder n’est pas opposer',
  frSub: 'Un obstacle, ou une comparaison',
  hint: 'Quatre cartes. La troisième change de sens selon le contexte.',
  audio: REC('rec-b2-16-opposition'),
  say: REFRAME,
  terms: ['opposition', 'point'],
  cards: [
    {
      head: 'Comparer', label: 'alors que, tandis que',
      fr: fr(CL(1526)), sub: rsOf(CL(1526)),
      body: "Deux faits mis côte à côte, à l'indicatif. Aucun n'empêche l'autre : c'est une opposition, pas une concession. EN: two facts side by side.",
    },
    {
      head: 'Dépasser un obstacle', label: 'bien que, pourtant',
      fr: fr(E(2170)), sub: rsOf(E(2170)),
      body: "Un fait aurait dû empêcher l'autre, et ne l'empêche pas : c'est la concession. EN: an obstacle overridden.",
    },
    {
      head: 'Alors que qui concède', label: 'le contexte',
      fr: fr(E(2181)), sub: rsOf(E(2181)),
      body: "Alors que peut aussi concéder : on annonçait de la pluie, et il a fait beau. Le contexte décide ; le mode reste l'indicatif. EN: alors que can concede too.",
    },
    {
      head: 'En revanche', label: 'par contre, à l’oral',
      fr: fr(CL(1543)), sub: rsOf(CL(1543)),
      body: "En revanche met deux faits en balance, souvent un défaut et une qualité ; il ne concède rien. Par contre dit la même chose, surtout à l'oral ; certains le critiquent à l'écrit. EN: contrast, not concession.",
    },
  ],
};

const A11_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-trier',
  layer: 'core',
  size: 'lg',
  title: 'Concession ou opposition',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Un obstacle dépassé', [
      it(E(2170), 'Lyon est chère, il y vit'),
      it(E(2178), 'il gagne bien sa vie, il est à découvert'),
      it(E(2173), 'il avait promis, il est parti'),
      it(E(2181), 'on annonçait la pluie, il a fait beau'),
    ], chk('« Il est parti en vacances alors qu’il avait promis de finir le dossier. » Ici, alors que…',
      ['concède : la promesse aurait dû le retenir', 'compare deux personnes'], 0,
      'Une promesse non tenue : alors que concède. EN: it concedes.')),
    grp('Deux faits comparés', [
      it(E(2171), 'deux villes'),
      it(E(2172), 'deux personnes'),
      it(E(2179), 'deux personnes'),
      it(E(2184), 'deux groupes'),
    ], chk('« Les uns veulent agrandir le parc, tandis que les autres préfèrent un parking. » C’est…',
      ['une opposition', 'une concession'], 0,
      'Deux groupes comparés : opposition. EN: opposition.')),
    ctl('En revanche', '« La ville a peu de parcs ; en revanche, ses transports sont excellents. »',
      ['une opposition : un défaut, une qualité', 'une concession : un obstacle dépassé'], 0,
      'En revanche compare. EN: contrast.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition'],
};

const A11_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a11-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Comparer ou concéder',
  frSub: 'Neuf phrases à l’oreille',
  lines: [
    ln(E(2170)), ln(E(2171)), ln(E(2172)), ln(E(2173)), ln(E(2174)),
    ln(E(2175)), ln(E(2180)), ln(E(2181)), ln(CL(1522)),
  ],
  questions: [
    { q: 'Première phrase : la personne vit-elle à Lyon ?', opts: ['oui, depuis dix ans', 'non'], correct: 0, why: 'Elle y vit depuis dix ans, malgré le prix. EN: yes.' },
    { q: 'Quatrième phrase : avait-il promis quelque chose ?', opts: ['oui, de finir le dossier', 'non'], correct: 0, why: 'Il avait promis, et il est parti. EN: yes.' },
    { q: 'Sixième phrase : faut-il payer les charges en plus ?', opts: ['non, elles sont comprises', 'oui'], correct: 0, why: 'Les charges sont comprises. EN: no.' },
    { q: 'Septième phrase : quel mot dit-on au Québec, d’après la phrase ?', opts: ['char', 'bagnole'], correct: 0, why: 'Au Québec, on dit char. EN: char.' },
    { q: 'Huitième phrase : quel temps a-t-il fait ?', opts: ['un temps magnifique', 'de la pluie'], correct: 0, why: 'On annonçait la pluie, et il a fait beau. EN: lovely weather.' },
  ],
  audio: REC('rec-b2-16-opposition-ecoute'),
  say: REFRAME,
  terms: ['opposition'],
};

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a11-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre liens mal choisis',
  errors: [
    {
      wrong: 'Bien que Lyon soit chère, Saint-Étienne reste abordable.',
      right: fr(E(2171)),
      why: "Normal : l'anglais dit although ou whereas presque indifféremment. Ici, aucun obstacle : deux villes comparées, alors que. EN: a comparison, not a concession.",
    },
    {
      wrong: 'Tandis que ma sœur vive en ville, moi, j’ai choisi la campagne.',
      right: fr(E(2172)),
      why: "Normal : on pense à bien que et à son subjonctif. Tandis que et alors que prennent l'indicatif : vit. EN: the indicative.",
    },
    {
      wrong: 'La ville a peu de parcs ; au contraire, ses transports sont excellents.',
      right: fr(E(2174)),
      why: "Normal : on cherche on the other hand. Mais au contraire annule ce qui précède ; pour mettre deux faits en balance, en revanche. EN: au contraire negates; en revanche contrasts.",
    },
    {
      wrong: 'Pendant que Lyon est chère, Saint-Étienne reste abordable.',
      right: fr(E(2171)),
      why: "Normal : while dit à la fois le temps et la comparaison. Pendant que ne dit que le temps ; pour comparer, alors que ou tandis que. EN: pendant que is time only.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition'],
};

const A11_TEXTE = dansUnTexte('a11-texte', 'Trier : le témoignage de Samir', TEXTE_A11, [
  { q: 'Trouve les deux concessions.', a: "Bien que Lyon soit plus chère, nous y avons vécu dix ans ; nous sommes partis, alors que nos amis nous le déconseillaient (un obstacle dépassé)." },
  { q: 'Trouve les trois oppositions.', a: "J'ai grandi à Saint-Étienne, alors que ma femme vient de Lyon ; le centre est vivant, en revanche les loyers ont doublé ; tandis que nos enfants regrettent leurs copains, nous respirons." },
  { q: 'Pourquoi le même alors que est-il une fois opposition, une fois concession ?', a: "Le premier compare deux origines ; le second dit que le conseil des amis aurait dû les retenir. Le contexte décide." },
  { q: 'Quel mode suit alors que et tandis que ?', a: "L'indicatif, dans les deux sens : vient, déconseillaient, regrettent." },
], 'rec-b2-16-texte-a11', ['opposition']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Comparer', '« Lyon est chère, alors que Saint-Étienne est abordable. » C’est…',
    ['une opposition', 'une concession'], 0,
    'Deux faits côte à côte. EN: opposition.'),
  ctl('En revanche', 'En revanche…',
    ['oppose deux faits', 'accorde un point avant de répondre'], 0,
    'Il compare, il ne concède rien. EN: contrast.'),
  ctl('Le mode', '« Tandis que ma sœur … en ville »',
    ['vit', 'vive'], 0,
    'Tandis que : l’indicatif. EN: vit.'),
], ['opposition']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Concéder ou opposer',
    opener: {
      line: "Lyon est chère, Saint-Étienne ne l'est pas : ici tu sépares l'obstacle qu'on dépasse des deux faits qu'on compare, et tu choisis le lien qui convient. EN: Lyon is expensive, Saint-Étienne is not: here you tell an obstacle overridden from two facts compared.",
      imageRef: 'lessons/concession-avancee/act11.jpg',
    },
    sections: [],
    milestone: "Tu distingues la concession de l'opposition, tu lis alors que dans ses deux sens, et tu emploies en revanche pour comparer, pas pour concéder. EN: You can tell concession from opposition and use en revanche for contrast.",
    estScreens: 38, restPoints: ['a11-trier', 'a11-ecoute'],
  },
  sections: [A11_HISTOIRE, A11_CARTES, A11_TRIER, A11_ECOUTE, A11_ERREURS, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12: TON ESSAI
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'L’essai que tu vas imiter',
  frSub: 'Une tribune sur les transports gratuits',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'une tribune', en: 'an opinion piece', note: 'Un texte d’opinion signé, publié dans un journal.' },
    { word: 'endettée', en: 'in debt', note: 'Qui doit beaucoup d’argent.' },
    { word: 'la fréquentation', en: 'the number of passengers', note: 'Le nombre de personnes qui utilisent un lieu ou un service.' },
    { word: "faute d'un billet", en: 'for lack of a ticket', note: 'Parce qu’il n’a pas de billet.' },
  ],
  questions: [
    { q: 'Global : quelle est la position de l’auteur ?', a: "Il est favorable à la gratuité, mais « pas à n'importe quel prix » : il pose une limite dès le début." },
    { q: 'Détail : quel est l’argument le plus sérieux des opposants, et comment l’auteur le traite-t-il ?', a: "Le coût. Il l'accorde (il est vrai que, certes), puis y répond (il n'en reste pas moins que la vente des billets rapporte peu)." },
    { q: 'Inférence : pourquoi écrire « quand bien même ce serait le cas » ?', a: "Pour accepter l'objection au pire, et montrer que sa conclusion tient quand même : les habitudes finiraient par changer." },
    { q: 'Forme : trouve une concession au subjonctif, une à l’indicatif, une à l’infinitif.', a: "Bien que la voiture reste très présente ; même si la gratuité ne règle pas tout ; j'ai beau examiner les objections." },
    { q: 'Structure : comment l’essai se termine-t-il ?', a: "Par une position nuancée (même si… elle mérite d'être essayée, à condition de…) et un fait qui tient (toujours est-il que)." },
    { q: 'Position : qu’est-ce qui rend cet essai convaincant ?', a: "Il ne cache pas les objections : il les accorde une par une, puis répond, ce qui rend sa position plus solide." },
  ],
  audio: REC('rec-b2-16-modele'),
  say: REFRAME,
  terms: ['point', 'discours'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  sheetId: 'sheet-essai',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Accorder, puis répondre',
  steps: [
    'Pose la question et ta position, avec une limite : j’y suis favorable, mais pas à n’importe quel prix. EN: state your position with a limit.',
    'Choisis l’argument le plus fort du camp d’en face, et accorde-le vraiment : il est vrai que, certes. EN: grant the strongest opposing point.',
    'Réponds-y aussitôt : il n’en reste pas moins que, toutefois, quand bien même. EN: answer it straight away.',
    'Ajoute deux arguments pour ta position, avec au moins trois formes de concession différentes. EN: two arguments, three concession forms.',
    'Conclus en reprenant ta position, nuancée : même si…, toujours est-il que… EN: conclude with nuance.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['point', 'forme'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  sheetId: 'sheet-essai',
  title: 'Quatre phrases que tout essai contient',
  cases: [
    { situation: 'Tu annonces la concession', fr: fr(E(2186)), en: en(E(2186)) },
    { situation: 'Tu accordes le point', fr: fr(E(2187)), en: en(E(2187)) },
    { situation: 'Tu réponds au point accordé', fr: fr(E(2195)), en: en(E(2195)) },
    { situation: 'Tu conclus sur un fait sûr', fr: fr(E(2194)), en: en(E(2194)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['point', 'discours'],
};

const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'En direct à la radio',
  frSub: 'Six tours, à voix haute',
  setting: 'Une radio locale organise un débat : faut-il fermer le centre de ta ville aux voitures ? Tu appelles pour défendre la fermeture, en accordant chaque fois un point à l’autre camp.',
  turns: [
    {
      ai: 'Bonjour, vous êtes en direct. Vous êtes pour la fermeture du centre aux voitures ?', en: 'Hello, you are on air. Are you in favour of closing the centre to cars?',
      user: 'Oui, même si je comprends l’inquiétude des commerçants.',
      userEn: 'Yes, even though I understand the shopkeepers’ worries. (Même si + indicative: the point granted.)',
      alts: [
        { fr: 'Oui, bien que je comprenne l’inquiétude des commerçants.', en: 'Yes, although I understand the shopkeepers’ worries. (Bien que + subjunctive: also right.)' },
        { fr: 'J’y suis favorable, malgré l’inquiétude des commerçants.', en: 'I am in favour, despite the shopkeepers’ worries. (Malgré + noun.)' },
      ],
    },
    {
      ai: 'Justement, ils disent qu’ils vont perdre des clients.', en: 'Precisely, they say they will lose customers.',
      user: 'C’est possible ; il n’en reste pas moins que les rues piétonnes attirent souvent plus de monde.',
      userEn: 'That is possible; the fact remains that pedestrian streets often draw more people. (A point granted, then the answer.)',
      alts: [
        { fr: 'Certes, mais les rues piétonnes attirent souvent plus de passants.', en: 'Admittedly, but pedestrian streets often draw more passers-by. (Certes… mais.)' },
        { fr: 'Ils ont peut-être raison ; toutefois, les rues piétonnes attirent du monde.', en: 'They may be right; however, pedestrian streets draw people in. (Toutefois.)' },
      ],
    },
    {
      ai: 'Et si les chiffres montraient le contraire ?', en: 'And what if the figures showed the opposite?',
      user: 'Quand bien même ils le montreraient, la qualité de l’air resterait une priorité.',
      userEn: 'Even if they did, air quality would remain a priority. (Quand bien même + conditional.)',
      alts: [
        { fr: 'Même s’ils le montraient, la qualité de l’air resterait une priorité.', en: 'Even if they did, air quality would remain a priority. (Même si + imparfait: the everyday twin.)' },
        { fr: 'Même dans ce cas, je resterais favorable à la fermeture.', en: 'Even then, I would still be in favour of closing it. (No concession word, also right.)' },
      ],
    },
    {
      ai: 'Vous avez essayé de convaincre vos voisins ?', en: 'Have you tried to convince your neighbours?',
      user: 'J’ai eu beau leur expliquer, ils restent contre.',
      userEn: 'However much I explained, they are still against it. (Avoir beau in the passé composé.)',
      alts: [
        { fr: 'Bien que je leur aie tout expliqué, ils restent contre.', en: 'Although I explained everything to them, they are still against it. (Bien que + subjonctif passé.)' },
        { fr: 'Oui, mais malgré mes explications, ils restent contre.', en: 'Yes, but despite my explanations, they are still against it. (Malgré + noun.)' },
      ],
    },
    {
      ai: 'Et les personnes âgées, qui ont besoin de leur voiture ?', en: 'And elderly people, who need their cars?',
      user: 'Quelle que soit la solution, il faudra prévoir des navettes pour elles.',
      userEn: 'Whatever the solution, shuttles will have to be provided for them. (Quelle que soit, agreed with solution.)',
      alts: [
        { fr: 'Quoi qu’on décide, il faudra penser à elles en premier.', en: 'Whatever is decided, they will have to come first. (Quoi que, in two words.)' },
        { fr: 'Où qu’elles habitent, elles doivent pouvoir venir en ville.', en: 'Wherever they live, they must be able to come into town. (Où que + subjunctive.)' },
      ],
    },
    {
      ai: 'Un dernier mot pour nos auditeurs ?', en: 'A last word for our listeners?',
      user: 'Toujours est-il qu’on ne peut plus attendre : essayons au moins un été.',
      userEn: 'The fact remains that we cannot wait any longer: let us at least try it for one summer. (Toujours est-il que + indicative.)',
      alts: [
        { fr: 'Si difficile que ce soit, essayons au moins un été.', en: 'However hard it may be, let us at least try it for one summer. (Si… que + subjunctive.)' },
        { fr: 'Même si tout n’est pas parfait, essayons au moins un été.', en: 'Even if not everything is perfect, let us at least try it for one summer. (Même si + indicative.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['point', 'forme'],
};

const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Ton essai : accorder, puis répondre',
  frSub: 'Mission écrite, format DELF B2',
  brief: "Un magazine en ligne ouvre un débat et publiera les meilleures contributions de ses lecteurs. Choisis l'un des deux sujets : « Le télétravail doit-il devenir un droit pour tous les salariés ? » ou « Faut-il interdire la publicité dans les rues ? ». Écris un essai argumenté : prends position, accorde au camp d'en face son argument le plus fort, puis réponds-y.",
  briefEn: 'An online magazine is opening a debate and will publish the best contributions from its readers. Choose one of the two topics: « Should working from home become a right for all employees? » or « Should advertising be banned from the streets? ». Write an argued essay: take a position, grant the other side its strongest argument, then answer it.',
  produce: "Écris un texte de 200 à 250 mots : une position claire, l'argument adverse le plus fort accordé puis réfuté, au moins deux arguments pour ta position et une conclusion nuancée. Emploie au moins trois tournures de concession de formes différentes (subjonctif, indicatif ou conditionnel, infinitif, nom) et au moins un lien comme il n'en reste pas moins que ou toutefois.",
  responseSpec: { kind: 'text', minWords: 200, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : Une position claire, l'argument adverse le plus fort vraiment accordé puis réfuté, au moins deux arguments pour ta position et une conclusion nuancée. Entre 200 et 250 mots.",
          "2 : La position est là, mais la concession est faible (un argument secondaire, ou accordé sans réponse), ou la longueur sort un peu des limites.",
          "1 : Un avis sans argument adverse, ou un texte beaucoup trop court.",
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          "3 : Un paragraphe par idée ; chaque concession est suivie de sa réponse (certes… il n'en reste pas moins que), et le lecteur sait toujours quel camp parle.",
          "2 : Le texte se suit, mais une concession reste sans réponse ou deux arguments se mélangent.",
          "1 : On ne sait pas toujours ce que l'auteur accorde et ce qu'il défend.",
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          "2 : Au moins trois tournures de concession de formes différentes (par exemple bien que + subjonctif, quand bien même + conditionnel, avoir beau + infinitif, malgré + nom), et au moins un lien comme toutefois ou il n'en reste pas moins que.",
          "1 : La concession est là, mais toujours avec le même outil (mais, même si), ou il n'y en a qu'une ou deux.",
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          "2 : Le mode suit le mot : subjonctif après bien que et quoique, indicatif après même si, conditionnel après quand bien même, infinitif après avoir beau, nom après malgré ; quel que soit accordé.",
          "1 : Des erreurs de mode fréquentes (même si + subjonctif, malgré + phrase, quelque soit) gênent parfois la lecture.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          "2 : Le registre d'un essai publié : soutenu sans raideur, respectueux de l'autre camp, sans formules orales (malgré que, par contre à répétition, du coup).",
          "1 : Le texte sonne comme une conversation transcrite, ou attaque l'autre camp au lieu de lui répondre.",
        ],
      },
    ],
  },
  scaffold: [
    'Il est vrai que',
    'Certes,',
    "Il n'en reste pas moins que",
    'Bien que',
    'Quand bien même',
    "J'ai beau",
    'Malgré',
    'Toujours est-il que',
  ],
  modelAnswer: "Le télétravail doit-il devenir un droit pour tous les salariés ? Depuis la pandémie, le télétravail fait partie du quotidien de millions de salariés, et certains voudraient en faire un droit. J'y suis favorable, avec des limites. Commençons par l'objection la plus sérieuse : le travail à distance isole. Il est vrai qu'un salarié qui ne voit plus ses collègues perd une partie de ce qui fait l'esprit d'une équipe, et que les nouveaux venus apprennent moins vite loin des plus expérimentés. Certes, une réunion en ligne ne remplace pas un café partagé. Il n'en reste pas moins que deux jours par semaine à la maison n'ont jamais empêché personne de connaître ses collègues. On objecte aussi que tous les métiers ne s'y prêtent pas. C'est exact : bien qu'une infirmière ou un boulanger puissent souhaiter plus de souplesse, ils ne peuvent pas soigner ou pétrir à distance. Un tel droit ne concernerait donc que les postes qui le permettent. Enfin, quelles que soient les réserves des employeurs, les avantages sont réels : moins de trajets, moins de fatigue et souvent plus de concentration. Même si la productivité baissait légèrement, ce qui reste à démontrer, la qualité de vie gagnée compenserait cette perte. J'ai beau chercher, je ne vois aucune raison sérieuse de refuser ce droit à ceux qui peuvent l'exercer. Toujours est-il qu'il faudra l'encadrer : un droit sans règles deviendrait vite une obligation déguisée.\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : une position nuancée dès l'introduction (favorable, avec des limites), l'argument adverse le plus fort (l'isolement) accordé puis réfuté, une deuxième objection traitée, et une conclusion.\n2. Cohérence : chaque concession a sa réponse (il est vrai que… certes… il n'en reste pas moins que ; c'est exact… donc) ; enfin annonce le dernier argument.\n3. Étendue : bien que + subjonctif, quelles que soient, même si + imparfait puis conditionnel, avoir beau + infinitif, il n'en reste pas moins que, toujours est-il que.\n4. Correction : puissent après bien que, quelles accordé avec réserves, baissait après même si, et aucun subjonctif après même si.\n5. Registre : un essai publié, soutenu et respectueux ; l'autre camp est cité (on objecte), jamais moqué.",
  modelAnswerEn: "Should working from home become a right for all employees? Since the pandemic, working from home has been part of daily life for millions of employees, and some would like to make it a right. I am in favour, within limits. Let us start with the most serious objection: remote work isolates people. It is true that an employee who no longer sees colleagues loses part of what makes a team spirit, and that newcomers learn more slowly far from more experienced staff. Admittedly, an online meeting does not replace a shared coffee. The fact remains that two days a week at home have never stopped anyone getting to know their colleagues. It is also objected that not every job lends itself to it. That is true: although a nurse or a baker may wish for more flexibility, they cannot care for patients or knead dough remotely. Such a right would therefore only apply to the jobs that allow it. Finally, whatever the employers' reservations, the benefits are real: less commuting, less fatigue and often better concentration. Even if productivity fell slightly, which remains to be shown, the quality of life gained would make up for it. However hard I look, I see no serious reason to refuse this right to those who can exercise it. The fact remains that it will have to be regulated: a right without rules would soon become a disguised obligation. The marker's notes (not counted): 1. Task: a nuanced position, the strongest objection granted then answered, a second objection, a conclusion. 2. Coherence: every concession has its answer. 3. Range: bien que, quelles que soient, même si + imparfait, avoir beau, il n'en reste pas moins que, toujours est-il que. 4. Accuracy: the mood follows the word. 5. Register: a published essay, formal and respectful.",
  watchFor: [
    { pattern: 'Même si followed by a subjunctive (même si vous ayez), or by a future or conditional in the same clause.', criterion: 'correction', feedback: 'Même si est un si : l’indicatif, et l’imparfait pour une hypothèse. Jamais soit ni serait juste après.', ref: 'a6-piege' },
    { pattern: 'Bien que or quoique followed by an indicative or a future (bien qu’il est, bien qu’il sera).', criterion: 'correction', feedback: 'À l’écrit, bien que et quoique veulent le subjonctif : bien qu’il soit. À l’oral, on entend l’indicatif, mais pas à l’examen.', ref: 'a3-piege' },
    { pattern: 'Malgré or en dépit de followed by a clause, or malgré que in the essay.', criterion: 'correction', feedback: 'Malgré prend un nom : malgré les protestations. Pour garder une phrase, écris bien que.', ref: 'a9-erreurs' },
    { pattern: 'Quelque soit written in one word, or quel que soit not agreed with its noun.', criterion: 'correction', feedback: 'Quel en deux mots, accordé avec le nom qui suit : quelles que soient les réserves.', ref: 'a4-erreurs' },
    { pattern: 'Quoique used for whatever, or quoi que used for although.', criterion: 'correction', feedback: 'Quoi que, en deux mots : n’importe quelle chose. Quoique, en un mot : bien que.', ref: 'a4-cartes' },
    { pattern: 'Avoir beau followed by a conjugated verb or que, or followed by mais.', criterion: 'correction', feedback: 'Avoir se conjugue, l’infinitif reste : j’ai beau chercher, je ne trouve pas. Pas de mais.', ref: 'a8-piege' },
    { pattern: 'Quand bien même with an indicative or subjunctive where a hypothesis is meant.', criterion: 'correction', feedback: 'Quand bien même ouvre une hypothèse : le conditionnel, quand bien même ce serait le cas.', ref: 'a7-erreurs' },
    { pattern: 'The opposing argument is mentioned but never answered, or answered without any linking word.', criterion: 'coherence', feedback: 'Chaque point accordé appelle sa réponse : certes…, il n’en reste pas moins que…', ref: 'a10-construire' },
    { pattern: 'Concession confused with opposition: en revanche or alors que used where an obstacle is overridden, or bien que used to compare two facts.', criterion: 'coherence', feedback: 'Un obstacle dépassé : bien que, pourtant. Deux faits comparés : alors que, en revanche.', ref: 'a11-trier' },
    { pattern: 'Only one concession tool used throughout (mais, or même si every time), or fewer than three forms.', criterion: 'etendue', feedback: 'Varie les formes : un subjonctif, un conditionnel ou un infinitif, un nom, et un lien comme toutefois.', ref: 'a12-plan' },
    { pattern: 'No clear position, no concession of the strongest opposing argument, or a body outside 200 to 250 words.', criterion: 'tache', feedback: 'Dis ta position dès le début, accorde l’argument le plus fort de l’autre camp, puis réponds-y.', ref: 'a12-lecture' },
    { pattern: 'A spoken register (du coup, par contre repeated, malgré que) or an attack on the other side instead of an answer.', criterion: 'registre', feedback: 'Un essai publié répond à l’autre camp sans le moquer, dans un registre soutenu.', ref: 'a12-lecture' },
  ],
  graderNotes: [
    'Count the words of the body only; the title (the question) does not count. 200 to 250 with 10% tolerance (180 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'SPOKEN-VARIANT DECISION (gate B2-2, Paul 2026-09-29): the written norm is what is taught and tested. « Bien que + indicatif » and « malgré que + subjonctif » are spoken or contested forms: name them in the feedback and remove at most ONE « correction » point in total for them, however often they occur. « Même si + subjonctif » is NOT a variant: it is an error and is marked as one.',
    'Judge each mood by the WORD that governs it. After « tout + adjectif + que », accept the indicative and the subjunctive. After « malgré le fait que » and « en dépit du fait que », accept both moods. After « quand bien même », the conditional is the norm; an indicative after it is rare and costs nothing unless the meaning is lost.',
    '« Par contre » is correct French, mostly spoken; do not penalise one occurrence. Several in a row may cost the « registre » point.',
    '« Alors que » can oppose two facts or concede one; accept either reading where the context allows it.',
    'Accept « bien que » + a subjonctif présent in a past context (bien que les places soient chères, la salle était pleine) and the subjonctif passé for a prior fact (bien qu’il soit parti); do not require the imperfect subjunctive.',
    'The concession tools of lesson 32 in B1 (mais, pourtant, même si, bien que, malgré) count towards range only if at least one B2 form (quand bien même, avoir beau in a compound tense, quel que soit, si… que, il n’en reste pas moins que, toujours est-il que, encore que) is also used.',
    'Writer and reader gender are unknown: judge agreement for internal consistency only.',
    'Accept regional vocabulary and settings (Québec, Belgium, Switzerland, West Africa): courriel and mail, fin de semaine, septante, char.',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 32 du B1 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['point', 'forme'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Dis tes concessions à voix haute',
  frSub: 'Le point accordé, puis ta position',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['point', 'forme'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-carte',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le subjonctif', v: 'bien que, quoique, quoi que, si… que', say: fr(E(2017)),
      detail: { title: 'Le subjonctif', body: "Bien que, quoique, encore que, sans que, quoi que, quel que soit, où que, qui que, si ou aussi… que. EN: the subjunctive tools.", say: fr(E(2030)) } },
    { k: "l'indicatif", v: 'même si, tout… que, alors que', say: fr(E(2018)),
      detail: { title: "L'indicatif", body: "Même si (jamais le subjonctif), tout… que, alors que, tandis que, il n'en reste pas moins que. EN: the indicative tools.", say: fr(E(2087)) } },
    { k: 'le conditionnel', v: 'quand bien même', say: fr(E(2019)),
      detail: { title: 'Le conditionnel', body: "Quand bien même, soutenu ; au quotidien, même si + imparfait. EN: the conditional.", say: fr(E(2102)) } },
    { k: "l'infinitif", v: 'avoir beau, loin de, au lieu de', say: fr(E(2021)),
      detail: { title: "L'infinitif", body: "Avoir se conjugue, l'infinitif reste, et pas de mais ensuite. EN: the infinitive tools.", say: fr(E(2116)) } },
    { k: 'le nom', v: 'malgré, en dépit de', say: fr(E(2020)),
      detail: { title: 'Le nom', body: "Malgré + nom ; malgré que reste critiqué à l'écrit. EN: a noun.", say: fr(E(2139)) } },
    { k: 'deux phrases', v: "pourtant, toutefois, il n'en reste pas moins que", say: fr(E(2022)),
      detail: { title: 'Deux phrases', body: "L'adverbe en tête ou après le verbe ; les deux tournures, avec l'indicatif. EN: two whole sentences.", say: fr(E(2154)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['forme', 'discours'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu sais accorder un point de cinq façons, et tu laisses le mot choisir la forme : le subjonctif après bien que, quoique, encore que, quoi que, quel que soit, où que, qui que et si… que ; l'indicatif après même si, tout… que et alors que ; le conditionnel après quand bien même ; l'infinitif après avoir beau et loin de ; un nom après malgré. Tu relies deux phrases avec toutefois ou il n'en reste pas moins que, et tu sépares la concession de l'opposition. Le piège qui reste, c'est le mode emprunté : un subjonctif qui glisse après même si, une phrase après malgré. Avant l'examen, reprends ton essai et, pour chaque concession, souligne le mot, puis vérifie la forme qu'il impose. EN: For every concession, underline the word and check the form it imposes.",
  stats: [
    { k: 'Le subjonctif', v: 'bien que, quoi que, si… que' },
    { k: "L'indicatif", v: 'même si, tout… que' },
    { k: 'Le reste', v: 'quand bien même, avoir beau, malgré' },
    { k: 'Opposer', v: 'alors que, en revanche' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 2 to 11, a round that
 *  recycles lessons 10 and 32 in B1 and 3, 5, 6, 10, 12 and 23 in B2 (named
 *  in each question), and an exam-format round (DELF B2 production écrite,
 *  TCF). `fold()` strips accents, commas, apostrophes, hyphens and SPACES, so
 *  quoi que / quoique and quel que / quelque are never typed (corpus §A.8);
 *  every typed answer turns on a mood, a tense or a word choice, and every
 *  equally correct answer is listed in `accept`. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_Q): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const MODE_Q = 'Mets le verbe entre parenthèses à la forme qui convient, et écris la phrase.';

const DEBAT_DELF = "Je vous l'accorde : quand on travaille seul chez soi, on peut se sentir isolé. Il n'en reste pas moins que deux jours par semaine à la maison, c'est moins de fatigue et plus de concentration. Et quand bien même certains s'ennuieraient de leurs collègues, ils pourraient toujours choisir de venir au bureau.";

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a12-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r2-carte', label: 'Un point, cinq formes', targets: ['forme-empruntee'],
      questions: [
        mc('Après bien que, quelle forme ?', ['le subjonctif', 'l’indicatif', 'le conditionnel'], 0, 'Bien que impose le subjonctif. EN: the subjunctive.', 'a2-table'),
        mc('Après quand bien même, quelle forme ?', ['le conditionnel', 'le subjonctif', 'l’infinitif'], 0, 'Quand bien même impose le conditionnel. EN: the conditional.', 'a2-table'),
        mc('« Malgré … , j’irai au festival. »', ['le prix du billet', 'que le billet est cher', 'le billet est cher'], 0, 'Malgré + nom. EN: a noun.', 'a2-trier'),
        tI(MODE_Q, "Bien que le billet (être) cher, j'irai au festival.", fr(E(2017)), 'Bien que : subjonctif, soit. EN: soit.', 'a2-table'),
        tI(MODE_Q, "Même si le billet (être) cher, j'irai au festival.", fr(E(2018)), 'Même si : indicatif, est. EN: est.', 'a2-table'),
        tI('Complète avec avoir beau au présent, et écris la phrase.', "Le billet (avoir beau) être cher, j'irai au festival.", fr(E(2021)), 'Avoir au présent, être à l’infinitif. EN: a beau.', 'a2-trier'),
        eS('Même si le billet soit cher, j’irai au festival.', fr(E(2018)), 'Même si garde l’indicatif. EN: est.', 'a2-erreurs', [fr(E(2017)), "Quoique le billet soit cher, j'irai au festival."]),
        lC('Écoute. Quelle forme suit le mot de concession ?', fr(E(2019)), ['le conditionnel', 'le subjonctif', 'l’indicatif'], 0, 'Quand bien même le billet coûterait. EN: the conditional.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-subjonctif', label: 'Bien que, quoique, encore que', targets: ['bien-que-indicatif'],
      questions: [
        mc('« Bien que le projet … du retard le mois dernier, le client reste satisfait. »', ['ait pris', 'prenne', 'a pris'], 0, 'Un fait accompli : subjonctif passé. EN: ait pris.', 'a3-cartes'),
        mc('Encore que se place surtout…', ['après la phrase principale, pour ajouter une réserve', 'en tête de phrase, pour ouvrir un paragraphe'], 0, 'Une réserve après coup. EN: an afterthought.', 'a3-cartes'),
        mc('« Elle a pris cette décision … son équipe. »', ['sans consulter', 'sans qu’elle consulte'], 0, 'Un seul sujet : sans + infinitif. EN: sans consulter.', 'a3-construire'),
        tI(MODE_Q, "Bien qu'il ne (être) pas d'accord, il appliquera la décision.", fr(E(2040)), 'Bien que : subjonctif, même pour l’avenir. EN: soit.', 'a3-piege'),
        tI('Mets le verbe au subjonctif passé, et écris la phrase.', "Bien qu'elle (manquer) la réunion, elle a lu le compte rendu.", fr(E(2041)), 'La réunion est passée : ait manqué. EN: ait manqué.', 'a3-cartes'),
        eS('Bien que la réunion est terminée, la discussion continue dans le couloir.', fr(E(2046)), 'À l’oral, on l’entend ; à l’écrit, bien que veut le subjonctif. EN: soit terminée.', 'a3-piege',
          ['Même si la réunion est terminée, la discussion continue dans le couloir.', 'Quoique la réunion soit terminée, la discussion continue dans le couloir.']),
        eS('Le rapport est solide, encore que certains chiffres sont à vérifier.', fr(E(2033)), 'Encore que + subjonctif : soient. EN: soient.', 'a3-piege',
          ['Le rapport est solide, quoique certains chiffres soient à vérifier.', 'Le rapport est solide, bien que certains chiffres soient à vérifier.', 'Le rapport est solide, même si certains chiffres sont à vérifier.']),
        lC('Écoute. Le fait concédé est-il déjà accompli ?', fr(E(2030)), ['oui : soit arrivée, un subjonctif passé', 'non : il est encore à venir'], 0, 'L’arrivée date de six mois. EN: yes.', 'a3-cartes'),
      ],
    },
    {
      id: 'r4-indefini', label: 'Quoi que, où que, qui que', targets: ['quoique-quoi-que'],
      questions: [
        mc('« … tu fasses, fais-le bien. » (n’importe quelle chose)', ['Quoi que', 'Quoique'], 0, 'En deux mots. EN: whatever.', 'a4-cartes'),
        mc('« … tu sois fatiguée, tu dois finir tes valises. » (bien que)', ['Quoique', 'Quoi que'], 0, 'En un mot : bien que. EN: although.', 'a4-construire'),
        mc('« … que soient les obstacles, elle ira jusqu’au bout. »', ['Quels', 'Quel', 'Quelles', 'Quelque'], 0, 'Obstacles : masculin pluriel. EN: quels.', 'a4-table'),
        mc('« … que soit ta décision, nous la respecterons. »', ['Quelle', 'Quelque', 'Quel'], 0, 'Décision : féminin singulier. EN: quelle.', 'a4-table'),
        tI(MODE_Q, 'Où que vous (aller), gardez vos papiers sur vous.', fr(E(2062)), 'Où que + subjonctif : alliez. EN: alliez.', 'a4-construire'),
        tI(MODE_Q, 'Qui que vous (être), vous devez présenter un billet.', fr(E(2064)), 'Qui que + subjonctif : soyez. EN: soyez.', 'a4-construire'),
        eS('Où que tu vas, donne-nous des nouvelles.', fr(E(2049)), 'Où que + subjonctif : ailles. EN: ailles.', 'a4-erreurs', ['Partout où tu vas, donne-nous des nouvelles.']),
        lC('Écoute. Quel est le sens de cette phrase ?', fr(E(2048)), ['whatever happens', 'although it happens'], 0, 'Quoi qu’il arrive : dans tous les cas. EN: whatever happens.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-intensite', label: 'Si riche qu’il soit', targets: ['si-que-mode'],
      questions: [
        mc('« Si lumineux qu’il …, il est trop cher. »', ['soit', 'est', 'sera'], 0, 'Si + adjectif + que : subjonctif. EN: soit.', 'a5-cartes'),
        mc('« Tout riche qu’il …, il vit simplement. » La forme la plus courante :', ['est', 'soit'], 0, 'Tout pose un fait : l’indicatif. EN: est.', 'a5-cartes'),
        mc('« … petite qu’elle est, la chambre est calme. »', ['Toute', 'Tout'], 0, 'Féminin, avec une consonne : toute. EN: toute.', 'a5-construire'),
        tI(MODE_Q, "Si grande qu'elle (être), la cuisine manque de rangements.", fr(E(2078)), 'Si… que : subjonctif. EN: soit.', 'a5-construire'),
        tI('Réécris avec aussi… que et le subjonctif.', 'La cuisine est grande, mais elle reste mal équipée.', fr(E(2069)), 'Aussi + adjectif + que + subjonctif. EN: aussi grande que soit.', 'a5-cartes',
          ["Aussi grande qu'elle soit, la cuisine reste mal équipée.", "La cuisine, aussi grande qu'elle soit, reste mal équipée."]),
        eS('Tout neuve qu’elle est, la chaudière fait un bruit terrible.', fr(E(2071)), 'Devant un féminin qui commence par une consonne : toute. EN: toute.', 'a5-piege',
          ["Toute neuve qu'elle soit, la chaudière fait un bruit terrible.", "Si neuve qu'elle soit, la chaudière fait un bruit terrible.", "Aussi neuve qu'elle soit, la chaudière fait un bruit terrible."]),
        eS('Si difficile que c’est, il faudra déménager avant l’hiver.', fr(E(2080)), 'Si… que : subjonctif, ce soit. EN: ce soit.', 'a5-piege',
          ["Aussi difficile que ce soit, il faudra déménager avant l'hiver.", "Si difficile que cela soit, il faudra déménager avant l'hiver.", "Aussi difficile que cela soit, il faudra déménager avant l'hiver."]),
        lC('Écoute. Le fait est-il présenté comme vrai ?', fr(E(2074)), ['oui : tout… que, à l’indicatif', 'non : c’est une hypothèse'], 0, 'Il est riche : c’est acquis. EN: yes.', 'a5-cartes'),
      ],
    },
    {
      id: 'r6-meme-si', label: 'Même si', targets: ['meme-si-subjonctif'],
      questions: [
        mc('« Même si le train … plus lent, je le préfère. »', ['est', 'soit', 'serait'], 0, 'Un fait : l’indicatif présent. EN: est.', 'a6-cartes'),
        mc('« Même si le vol … moins cher, je prendrais le train. »', ['était', 'serait', 'soit'], 0, 'Une hypothèse : l’imparfait. EN: était.', 'a6-trier'),
        mc('« Même s’il … demain, nous partirons. »', ['neige', 'neigera', 'neigerait'], 0, 'Le présent, même pour demain. EN: neige.', 'a6-trier'),
        tI('Mets le verbe au bon temps (une hypothèse), et écris la phrase.', 'Même si tout le monde (prendre) le train, les lignes ne suffiraient pas.', fr(E(2096)), 'Imparfait, puis conditionnel. EN: prenait.', 'a6-cartes'),
        tI('Mets le verbe au bon temps (le passé imaginé), et écris la phrase.', "Même si j'(avoir) le choix, j'aurais pris le train.", fr(E(2088)), 'Plus-que-parfait, puis conditionnel passé. EN: avais eu.', 'a6-cartes',
          ["Même si j'avais le choix, j'aurais pris le train."]),
        eS('Même si tu ne sois pas convaincue, essaie une fois.', fr(E(2100)), 'Même si garde l’indicatif. EN: es.', 'a6-piege',
          ['Bien que tu ne sois pas convaincue, essaie une fois.', 'Quoique tu ne sois pas convaincue, essaie une fois.']),
        eS('Même si le train serait deux fois plus lent, je le prendrais.', fr(E(2087)), 'L’imparfait après même si. EN: était.', 'a6-piege',
          ['Quand bien même le train serait deux fois plus lent, je le prendrais.']),
        lC('Écoute. Un fait ou une hypothèse ?', fr(E(2099)), ['une hypothèse', 'un fait'], 0, 'Voulais, puis pourrais : une hypothèse. EN: a hypothesis.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-quand-bien-meme', label: 'Quand bien même', targets: ['quand-bien-meme-mode'],
      questions: [
        mc('« Quand bien même on … des bus, les routes resteraient saturées. »', ['ajouterait', 'ajoutait', 'ajoute'], 0, 'Quand bien même : le conditionnel. EN: ajouterait.', 'a7-cartes'),
        mc('Quand bien même appartient au registre…', ['soutenu', 'familier'], 0, 'Soutenu ; au quotidien, même si. EN: formal.', 'a7-cartes'),
        mc('« Il viendra quand même. » Quand même veut dire…', ['malgré tout', 'dans l’hypothèse où'], 0, 'Quand même : malgré tout. EN: all the same.', 'a7-construire'),
        tI('Réécris avec quand bien même.', 'Même si le musée était gratuit, peu de gens y iraient.', fr(E(2110)), 'Quand bien même + conditionnel. EN: serait.', 'a7-hacks',
          ['Peu de gens iraient au musée, quand bien même il serait gratuit.', 'Peu de gens y iraient, quand bien même le musée serait gratuit.']),
        tI('Mets le verbe au conditionnel passé, et écris la phrase.', "Quand bien même elle l'(savoir), elle n'aurait rien pu faire.", fr(E(2107)), 'Au passé : aurait su. EN: aurait su.', 'a7-cartes'),
        eS('Quand bien même les chiffres soient bons, la méthode pose problème.', fr(E(2113)), 'Quand bien même : le conditionnel, seraient. EN: seraient.', 'a7-erreurs',
          ['Même si les chiffres étaient bons, la méthode pose problème.', 'Même si les chiffres sont bons, la méthode pose problème.', 'Bien que les chiffres soient bons, la méthode pose problème.']),
        eS('Quand bien même tu insistes, je ne changerais pas d’avis.', fr(E(2112)), 'Le conditionnel : insisterais. EN: insisterais.', 'a7-erreurs',
          ["Même si tu insistais, je ne changerais pas d'avis."]),
        lC('Écoute. Dans quel registre est cette phrase ?', fr(E(2102)), ['soutenu', 'familier'], 0, 'Quand bien même : soutenu. EN: formal.', 'a7-cartes'),
      ],
    },
    {
      id: 'r8-infinitif', label: 'Avoir beau, loin de', targets: ['avoir-beau-bancal'],
      questions: [
        mc('« Elle … beau crier hier, personne ne l’a entendue. »', ['a eu', 'ait eu', 'a eue'], 0, 'Un fait fini : passé composé d’avoir. EN: a eu.', 'a8-construire'),
        mc('« … d’être parfaite, cette solution a au moins le mérite d’exister. »', ['Loin', 'Au lieu'], 0, 'Loin d’être : l’inverse de ce qu’on pourrait croire ; au lieu de remplace une action par une autre. EN: far from.', 'a8-cartes'),
        mc('« J’ai beau chercher, je ne trouve pas. » Faut-il ajouter mais ?', ['non', 'oui'], 0, 'Avoir beau porte déjà l’opposition. EN: no.', 'a8-construire'),
        tI('Mets avoir beau au passé composé, et écris la phrase.', "J'(avoir beau) appeler trois fois, personne n'a répondu.", fr(E(2116)), 'J’ai eu beau. EN: j’ai eu beau.', 'a8-cartes'),
        tI('Mets avoir beau au conditionnel, et écris la phrase.', "Tu (avoir beau) redémarrer l'ordinateur, le problème reviendrait.", fr(E(2118)), 'Tu aurais beau. EN: tu aurais beau.', 'a8-cartes'),
        eS('L’imprimante a beau est neuve, elle tombe en panne chaque semaine.', fr(E(2119)), 'L’infinitif reste : être. EN: être.', 'a8-piege',
          ["Bien que l'imprimante soit neuve, elle tombe en panne chaque semaine.", "Même si l'imprimante est neuve, elle tombe en panne chaque semaine."]),
        eS('Il a signé le contrat sans qu’il le lise.', fr(E(2124)), 'Un seul sujet : sans le lire. EN: sans le lire.', 'a8-piege',
          ["Il a signé le contrat sans l'avoir lu."]),
        lC('Écoute. La personne a-t-elle tout vérifié ?', fr(E(2117)), ['oui, et ça ne marche toujours pas', 'non, pas encore'], 0, 'Avoir tout vérifié : c’est fait. EN: yes.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-nom', label: 'Malgré, en dépit de', targets: ['malgre-phrase'],
      questions: [
        mc('« Bien que les parents aient protesté », avec malgré :', ['malgré les protestations des parents', 'malgré que les parents ont protesté', 'malgré les parents ont protesté'], 0, 'Malgré + nom. EN: a noun.', 'a9-construire'),
        mc('À l’écrit, malgré que…', ['reste critiqué : préfère bien que', 'est la forme la plus soutenue'], 0, 'Répandu à l’oral, critiqué à l’écrit. EN: criticised in writing.', 'a9-cartes'),
        mc('« En dépit … mauvais temps »', ['du', 'de', 'que le'], 0, 'De + le = du. EN: du.', 'a9-construire'),
        tI('Réécris avec malgré et un nom.', 'Bien que notre gardien ait été expulsé, le club a gagné.', "Malgré l'expulsion de notre gardien, le club a gagné.", 'Expulser devient l’expulsion. EN: expulsion.', 'a9-cartes',
          ["Le club a gagné malgré l'expulsion de notre gardien.", "Malgré l'expulsion de son gardien, le club a gagné.", "Le club a gagné malgré l'expulsion de son gardien."]),
        tI('Réécris avec malgré et un nom.', "Bien qu'il y ait eu une grève, les cours ont repris lundi.", fr(E(2134)), 'La grève : un nom. EN: la grève.', 'a9-construire',
          ['Les cours ont repris lundi malgré la grève.', 'Malgré une grève, les cours ont repris lundi.']),
        eS('Malgré de ses efforts, il n’a pas obtenu la bourse.', fr(E(2147)), 'Malgré sans de, ou en dépit de. EN: no de after malgré.', 'a9-erreurs',
          ["Malgré ses efforts, il n'a pas obtenu la bourse."]),
        eS('En dépit que les parents aient protesté, le lycée fermera.', fr(E(2138)), 'On ne dit pas « en dépit que ». EN: bien que.', 'a9-erreurs',
          ['En dépit du fait que les parents aient protesté, le lycée fermera.', 'En dépit du fait que les parents ont protesté, le lycée fermera.', 'Malgré le fait que les parents aient protesté, le lycée fermera.', 'Malgré le fait que les parents ont protesté, le lycée fermera.', fr(E(2139)), 'En dépit des protestations des parents, le lycée fermera.', 'Quoique les parents aient protesté, le lycée fermera.']),
        lC('Écoute. Quel mode suit le fait que, ici ?', fr(E(2137)), ['l’indicatif', 'le subjonctif'], 0, 'Le budget a augmenté : l’indicatif, accepté ici. EN: the indicative.', 'a9-cartes'),
      ],
    },
    {
      id: 'r10-discours', label: 'Pourtant, toutefois…', targets: ['adverbe-bancal'],
      questions: [
        mc('« Il n’en reste pas moins que le service … mal organisé. »', ['est', 'soit'], 0, 'Un fait : l’indicatif. EN: est.', 'a10-table'),
        mc('Quelle phrase place bien toutefois ?', ['Il reste toutefois très coûteux.', 'Il toutefois reste très coûteux.'], 0, 'Après le verbe conjugué. EN: after the verb.', 'a10-construire'),
        mc('Lequel est le plus courant à l’oral ?', ['pourtant', 'néanmoins', 'toutefois'], 0, 'Pourtant se dit partout. EN: pourtant.', 'a10-table'),
        tI('Mets le verbe au passé composé, et écris la phrase.', 'Toujours est-il que personne ne nous (avoir) prévenus.', fr(E(2164)), 'Un fait : l’indicatif. EN: a prévenus.', 'a10-construire',
          ['Toujours est-il que personne ne nous a prévenues.']),
        tI('Relie les deux phrases avec il n’en reste pas moins que.', "L'application fait gagner du temps. Elle exclut une partie du public.", "L'application fait gagner du temps ; il n'en reste pas moins qu'elle exclut une partie du public.", 'La concession, puis le fait qui tient, à l’indicatif. EN: the indicative.', 'a10-table'),
        eS('Je ne sais pas qui a raison ; toujours il est que le guichet a fermé.', fr(E(2155)), 'La tournure figée : toujours est-il que. EN: est-il.', 'a10-piege'),
        eS('Il n’en reste pas moins que le service soit mal organisé.', fr(E(2163)), 'L’indicatif : est. EN: est.', 'a10-piege',
          ['Toujours est-il que le service est mal organisé.']),
        lC('Écoute. Que fait certes dans cette phrase ?', fr(E(2153)), ['il accorde un point avant la réponse', 'il conclut le débat'], 0, 'Certes, puis néanmoins. EN: it grants a point.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-opposer', label: 'Concéder ou opposer', targets: ['concession-opposition'],
      questions: [
        mc('« Lyon est chère, alors que Saint-Étienne est abordable. » C’est…', ['une opposition', 'une concession'], 0, 'Deux faits comparés. EN: opposition.', 'a11-cartes'),
        mc('« Il est parti en vacances alors qu’il avait promis de finir le dossier. » Ici, alors que…', ['marque une promesse non tenue : une concession', 'dit seulement le moment du départ'], 0, 'La promesse aurait dû le retenir. EN: a concession.', 'a11-trier'),
        mc('« Le loyer est élevé ; … , les charges sont comprises. »', ['en revanche', 'bien que'], 0, 'Deux faits en balance : en revanche. EN: on the other hand.', 'a11-cartes'),
        tI('Complète avec tandis que ou alors que, mets le verbe au passé composé, et écris la phrase.', 'Ma sœur vit en ville, (___) moi, je (choisir) la campagne.', "Ma sœur vit en ville, tandis que moi, j'ai choisi la campagne.", 'Deux faits comparés, à l’indicatif. EN: tandis que.', 'a11-trier',
          ["Ma sœur vit en ville, alors que moi, j'ai choisi la campagne."]),
        tI(MODE_Q, "Tandis que ma sœur (vivre) en ville, moi, j'ai choisi la campagne.", fr(E(2172)), 'Tandis que : l’indicatif. EN: vit.', 'a11-erreurs'),
        eS('Tandis que ma sœur vive en ville, moi, j’ai choisi la campagne.', fr(E(2172)), 'L’indicatif : vit. EN: vit.', 'a11-erreurs',
          ["Alors que ma sœur vit en ville, moi, j'ai choisi la campagne."]),
        eS('Lyon est chère, alors que Saint-Étienne soit abordable.', 'Lyon est chère, alors que Saint-Étienne est abordable.', 'Alors que : l’indicatif. EN: est.', 'a11-cartes',
          ['Lyon est chère, tandis que Saint-Étienne est abordable.', fr(E(2171))]),
        lC('Écoute. Concession ou opposition ?', fr(E(2181)), ['concession : on annonçait la pluie, et il a fait beau', 'opposition : deux villes comparées'], 0, 'Un obstacle dépassé. EN: a concession.', 'a11-ecoute'),
      ],
    },
    {
      id: 'r12-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(CONCESSION_REF)} : « Bien que le projet … cher, je vote pour. »`, ['soit', 'est'], 0, `« ${B132_REFRAME} » EN: ${B132_REFRAME_EN}`, 'a2-rappel'),
        mc(`${Cap(SI_REF)} : « Si j’… riche, je resterais à Sherbrooke. »`, ['étais', 'serais'], 0, `« ${B110_REFRAME} » EN: ${B110_REFRAME_EN}`, 'a6-cartes'),
        tI(`${Cap(SI_PASSE_REF)} : mets le verbe au plus-que-parfait, et écris la phrase.`, "Même si tu m'(prévenir), je n'aurais rien changé.", fr(PF1495), 'Même si + plus-que-parfait. EN: m’avais prévenu.', 'a6-cartes',
          ["Même si tu m'avais prévenue, je n'aurais rien changé."]),
        mc(`${Cap(SUBJ_PASSE_REF)} : « Quoique la route … fermée, les secours sont arrivés à temps. »`, ['ait été', 'a été', 'était'], 0, 'Un fait accompli : subjonctif passé. EN: ait été.', 'a3-exemples'),
        mc(`${Cap(MODES_REF)} : « Quoi que tu …, je garderai mon avis. »`, ['dises', 'dis', 'diras'], 0, `« ${B206_REFRAME} » EN: ${B206_REFRAME_EN}`, 'a4-table'),
        mc(`${Cap(GERONDIF_REF)} : « Tout en sachant que c’était risqué, il a accepté. » Même sens :`, ['Bien qu’il ait su que c’était risqué, il a accepté.', 'Parce qu’il savait que c’était risqué, il a accepté.'], 0, `« ${B212_REFRAME} » EN: ${B212_REFRAME_EN}`, 'a2-rappel'),
        tI(`${Cap(NOMINAL_REF)} : transforme en nom après malgré, et écris la phrase.`, "Malgré (le bus est en retard), nous sommes arrivés à l'heure.", "Malgré le retard du bus, nous sommes arrivés à l'heure.", 'Retarder devient le retard. EN: le retard.', 'a9-cartes'),
        lC(`Écoute. ${Cap(ARGU_REF)} : que fait la deuxième partie ?`, fr(OA(1707)), ['elle répond à la concession', 'elle accorde un deuxième point'], 0, `« ${B223_REFRAME} » EN: ${B223_REFRAME_EN}`, 'a10-exemples'),
      ],
    },
    {
      id: 'r13-examen', label: 'Comme à l’examen', targets: ['essai-sans-concession'],
      questions: [
        mc('Format DELF B2, production écrite. Pour accorder un point à l’adversaire avant d’y répondre, quelle phrase convient ?', ['Il est vrai que la gratuité coûte cher ; il n’en reste pas moins qu’elle profite à tous.', 'La gratuité coûte cher, donc il faut la refuser.', 'La gratuité coûte cher, c’est pourquoi je suis pour.'], 0, 'Un point accordé, puis la réponse. EN: grant, then answer.', 'a12-plan'),
        mc('Format TCF. Choisissez la bonne réponse : « … les objections, la mesure mérite d’être essayée. »', ['Malgré', 'Bien que', 'Même si', 'Quoique'], 0, 'Devant un nom : malgré. EN: malgré.', 'a9-cartes'),
        mc('Format TCF : « Quand bien même la ville … le budget, le problème resterait entier. »', ['doublerait', 'double', 'doublait', 'ait doublé'], 0, 'Quand bien même + conditionnel. EN: doublerait.', 'a7-cartes'),
        mc('Format DELF B2, compréhension écrite. « Certes, le télétravail isole ; il n’en reste pas moins que deux jours à la maison n’ont jamais empêché personne de connaître ses collègues. » L’auteur…', ['admet un inconvénient mais défend le télétravail', 'rejette le télétravail', 'ne prend pas position'], 0, 'Certes, puis la réponse. EN: grants, then defends.', 'a12-lecture'),
        tI('Format DELF B2, production. Réécris en une phrase, en accordant le point avec bien que.', "La gratuité coûte cher. Elle mérite d'être essayée.", "Bien que la gratuité coûte cher, elle mérite d'être essayée.", 'Bien que + subjonctif : coûte. EN: bien que.', 'a12-plan',
          ["La gratuité mérite d'être essayée, bien qu'elle coûte cher.", "Bien qu'elle coûte cher, la gratuité mérite d'être essayée.", "Bien que la gratuité coûte cher, elle mérite quand même d'être essayée."]),
        tI('Format TCF, phrase à compléter. Mets avoir beau au présent, et écris la phrase.', "J'(avoir beau) examiner les objections, aucune ne me semble décisive.", fr(E(2191)), 'Avoir au présent, l’infinitif reste. EN: j’ai beau.', 'a12-lecture'),
        eS('Quels que soit leurs revenus, les habitants ont le droit de se déplacer.', fr(E(2190)), 'Soit s’accorde aussi : soient. EN: soient.', 'a4-table',
          ['Quel que soit leur revenu, les habitants ont le droit de se déplacer.'],
          'Format DELF B2, correction. Une forme ne va pas : écris la phrase correcte. EN: One form is wrong; write the sentence correctly.'),
        lC('Format DELF B2, compréhension orale. Écoute cet extrait de débat. Que concède la syndicaliste ?', DEBAT_DELF, ['que le travail à la maison peut isoler', 'que le télétravail est interdit', 'que tout le monde veut travailler chez soi'], 0, 'Je vous l’accorde : on peut se sentir isolé. EN: that it can isolate.', 'a10-ecoute'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.12 does. */
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
    { front: 'although (subjunctive)', back: 'bien que, quoique : bien que le billet soit cher', say: fr(E(2017)) },
    { front: 'even if, even though', back: 'même si + indicatif, jamais le subjonctif', say: fr(E(2018)) },
    { front: 'even if (formal)', back: 'quand bien même + conditionnel', say: fr(E(2102)) },
    { front: 'whatever you do', back: 'quoi que tu fasses, en deux mots', say: fr(E(2054)) },
    { front: 'whatever the weather', back: 'quelle que soit la météo', say: fr(E(2061)) },
    { front: 'however bright it is', back: "si lumineux qu'il soit", say: fr(E(2068)) },
    { front: 'however hard I called', back: "j'ai eu beau appeler", say: fr(E(2116)) },
    { front: 'despite the strike', back: 'malgré la grève', say: fr(E(2134)) },
    { front: 'the fact remains that', back: "il n'en reste pas moins que + indicatif", say: fr(E(2154)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Un point accordé, une partie gardée',
  body: `${REFRAME} Tu as repris les outils de ${CONCESSION_REF}, le choix du mode de ${MODES_REF} et le tout en de ${GERONDIF_REF}, pour en faire une carte complète : cinq formes, le registre de chaque mot, et la frontière entre concession et opposition. La suite, c'est ${LATER_REF} : le but, avec pour que et afin de, selon le sujet et le registre. EN: Next comes a later lesson: purpose, with pour que and afin de, by subject and register.`,
  points: [
    'Bien que, quoi que, si… que : le subjonctif.',
    'Même si, tout… que, alors que : l’indicatif.',
    'Quand bien même : le conditionnel ; avoir beau : l’infinitif ; malgré : un nom.',
    'Concéder, c’est dépasser un obstacle ; opposer, c’est comparer.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['point', 'forme', 'opposition'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ton essai',
    opener: {
      line: "Un débat public, et ta voix dedans : ici tu écris un essai qui accorde à l'autre camp son meilleur argument avant d'y répondre, puis tu passes l'examen. EN: A public debate, and your voice in it: here you write an essay that grants the other side its best argument before answering it.",
      imageRef: 'lessons/concession-avancee/act12.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton essai et passé l'examen : quatre-vingt-seize questions, douze manches. EN: You wrote your essay and sat the exam: ninety-six questions, twelve rounds.",
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r5-intensite', 'a12-quiz/r9-nom', 'a12-review'],
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
  { id: 'd-carte', title: 'Subjonctif ou indicatif', format: 'sort' as const, coach: "Deux piles : le mot impose-t-il le subjonctif ou l'indicatif ? EN: which mood does the word impose?", buckets: ['le subjonctif', "l'indicatif"], items: [E(2017), E(2024), E(2028), E(2018), E(2029), E(2025)], audio: AUDIO },
  { id: 'd-bien-que', title: 'Le bon subjonctif', format: 'mcq' as const, coach: "Bien que, quoique, encore que : le subjonctif, et le passé pour un fait accompli. EN: the subjunctive, past for a finished fact.", q: 'Bien que la réunion … terminée, on continue.', opts: ['soit', 'est'], correct: 0, why: 'Bien que : subjonctif. EN: soit.', items: [E(2030), E(2031), E(2033), E(2040), E(2041), E(2046)], audio: AUDIO },
  { id: 'd-indefini', title: 'Quoi que ou quoique', format: 'mcq' as const, coach: "Si tu peux dire bien que, c'est quoique ; sinon, quoi que en deux mots. EN: although or whatever?", q: '« … tu fasses, fais-le bien. »', opts: ['Quoi que', 'Quoique'], correct: 0, why: 'N’importe quelle chose : quoi que. EN: whatever.', items: [E(2048), E(2054), E(2055), E(2051), E(2052), E(2061)], audio: AUDIO },
  { id: 'd-intensite', title: 'Le degré ou le fait', format: 'sort' as const, coach: "Deux piles : si ou aussi avec le subjonctif, ou tout avec l'indicatif. EN: si… que or tout… que?", buckets: ['si, aussi : subjonctif', 'tout : indicatif'], items: [E(2068), E(2069), E(2078), E(2070), E(2071), E(2074)], audio: AUDIO },
  { id: 'd-meme-si', title: 'Un fait ou une hypothèse', format: 'flashcard' as const, coach: "Lis chaque phrase, dis si c'est un fait ou une hypothèse, puis répète-la. EN: fact or hypothesis?", items: [E(2086), E(2087), E(2094), E(2095), E(2096), E(2099)], audio: AUDIO },
  { id: 'd-quand-bien-meme', title: 'Les deux jumelles', format: 'flashcard' as const, coach: "Dis chaque phrase, puis sa jumelle : quand bien même + conditionnel, même si + imparfait. EN: say each one both ways.", items: [E(2102), E(2104), E(2105), E(2110), E(2111), E(2112)], audio: AUDIO },
  { id: 'd-avoir-beau', title: 'Avoir se conjugue', format: 'mcq' as const, coach: "Avoir porte le temps, le verbe reste à l'infinitif, et pas de mais. EN: conjugate avoir, keep the infinitive.", q: 'J’ai eu beau …, personne n’a répondu.', opts: ['appeler', 'appelé'], correct: 0, why: 'L’infinitif : appeler. EN: appeler.', items: [E(2116), E(2117), E(2118), E(2119), E(2127), E(2130)], audio: AUDIO },
  { id: 'd-malgre', title: 'Un nom ou une phrase', format: 'sort' as const, coach: "Deux piles : malgré avec un nom, ou bien que avec une phrase. EN: noun or clause?", buckets: ['malgré + nom', 'bien que + phrase'], items: [E(2139), E(2134), E(2145), E(2138), E(2030), E(2098)], audio: AUDIO },
  { id: 'd-adverbes', title: 'Deux phrases reliées', format: 'flashcard' as const, coach: "Lis chaque phrase, puis dis-la avec un autre adverbe du même registre. EN: say it again with another adverb.", items: [E(2152), E(2153), E(2154), E(2155), E(2157), E(2162)], audio: AUDIO },
  { id: 'd-opposer', title: 'Concéder ou comparer', format: 'sort' as const, coach: "Deux piles : un obstacle dépassé, ou deux faits comparés. EN: concession or opposition?", buckets: ['concession', 'opposition'], items: [E(2170), E(2178), E(2181), E(2171), E(2172), E(2179)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 et le B2 en renfort', format: 'flashcard' as const, coach: "Six phrases des leçons précédentes : dis le mot de concession et la forme qu'il impose. EN: name the word and its form.", items: [CL(1404), CL(1417), CL(1422), PF1495, OA(1924), OA(1933)], audio: AUDIO },
  { id: 'd-essai', title: 'Accorder, puis répondre', format: 'flashcard' as const, coach: "Lis chaque phrase, puis donne la tienne sur le même modèle, pour ton propre sujet. EN: read each one, then make your own.", items: [E(2186), E(2187), E(2189), E(2191), E(2194), E(2195)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'forme-empruntee', description: 'Borrows the form of one concession word for another: a subjunctive after même si, a clause after malgré, a conjugated verb after avoir beau.', detectOn: ['a2-trier', 'a2-erreurs', 'a2-check', 'a12-mission'], drill: 'd-carte', retest: 'd-carte' },
  { id: 'bien-que-indicatif', description: 'Writes bien que, quoique or encore que with the indicative or a future, misses the subjonctif passé for a finished fact, or uses sans que with one subject.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-bien-que', retest: 'd-bien-que' },
  { id: 'quoique-quoi-que', description: 'Confuses quoi que with quoique, writes quelque soit, or leaves quel que soit unagreed.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a12-mission'], drill: 'd-indefini', retest: 'd-indefini' },
  { id: 'si-que-mode', description: 'Puts the indicative after si… que or aussi… que, or misses the agreement toute before a feminine adjective starting with a consonant.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a12-mission'], drill: 'd-intensite', retest: 'd-intensite' },
  { id: 'meme-si-subjonctif', description: 'Puts a subjunctive, a future or a conditional straight after même si, or mixes up the fact, hypothesis and past tenses.', detectOn: ['a6-trier', 'a6-piege', 'a6-check', 'a12-mission'], drill: 'd-meme-si', retest: 'd-meme-si' },
  { id: 'quand-bien-meme-mode', description: 'Uses quand bien même without the conditional, carries the conditional over to même si, or confuses quand bien même with quand même.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a12-mission'], drill: 'd-quand-bien-meme', retest: 'd-quand-bien-meme' },
  { id: 'avoir-beau-bancal', description: 'Conjugates the verb after avoir beau, adds que or mais, or confuses loin de with au lieu de.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a12-mission'], drill: 'd-avoir-beau', retest: 'd-avoir-beau' },
  { id: 'malgre-phrase', description: 'Puts a clause after malgré or en dépit de, writes malgré de or en dépit que, or uses malgré que in formal writing.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a12-mission'], drill: 'd-malgre', retest: 'd-malgre' },
  { id: 'adverbe-bancal', description: 'Misplaces toutefois or néanmoins, adds que after pourtant, or puts a subjunctive after il n’en reste pas moins que or toujours est-il que.', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-adverbes', retest: 'd-adverbes' },
  { id: 'concession-opposition', description: 'Uses bien que to compare two facts, en revanche or au contraire to override an obstacle, or the subjunctive after alors que or tandis que.', detectOn: ['a11-trier', 'a11-erreurs', 'a11-check', 'a12-mission'], drill: 'd-opposer', retest: 'd-opposer' },
  { id: 'recyclage', description: 'Loses a contrast this lesson sits on: bien que against même si, the si tense pairs, the subjonctif passé, tout en, or certes… mais in an argument.', detectOn: ['a2-rappel', 'a6-cartes', 'a3-exemples'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'essai-sans-concession', description: 'In an exam-format essay, states a position without granting the strongest opposing argument, or grants it and never answers it.', detectOn: ['a12-plan', 'a12-scenario', 'a12-mission'], drill: 'd-essai', retest: 'd-essai' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names a position. As b2.12 does. */
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
  sheet('sheet-carte', 'La carte des formes', ['cinq formes', 'le registre de chaque mot', 'les formes contestées'], [
    teach('sheet-carte-teach', 'Le mot impose sa forme',
      `${REFRAME} Choisis d'abord le mot qui convient au sens et au registre, puis regarde ce qu'il porte : une phrase au subjonctif ou à l'indicatif, un conditionnel, un infinitif, un nom, ou une deuxième phrase complète. EN: ${REFRAME_EN}`),
    table('sheet-carte-table', 'Cinq formes', ['Mot', 'Ce qui suit', 'Registre', 'Exemple'], [
      ['bien que, quoique, encore que', 'subjonctif', 'courant, soutenu', "Bien que le billet soit cher, j'irai."],
      ['sans que (deux sujets)', 'subjonctif', 'courant', "Il a signé sans que son associé soit au courant."],
      ['quoi que, quel que soit, où que, qui que', 'subjonctif', 'courant', 'Quelle que soit la météo, nous partirons.'],
      ['si, aussi + adjectif + que', 'subjonctif', 'soutenu', "Si lumineux qu'il soit, il est trop cher."],
      ['même si', 'indicatif (jamais le subjonctif)', 'courant', "Même si le billet est cher, j'irai."],
      ['tout + adjectif + que', 'indicatif (subjonctif aussi)', 'soutenu', "Tout riche qu'il est, il vit simplement."],
      ['alors que, tandis que', 'indicatif', 'courant', 'Lyon est chère, alors que Saint-Étienne reste abordable.'],
      ['quand bien même', 'conditionnel', 'soutenu', 'Quand bien même on ajouterait des bus, rien ne changerait.'],
      ['avoir beau, loin de, au lieu de, sans', 'infinitif', 'courant, soutenu', "J'ai eu beau appeler, personne n'a répondu."],
      ['malgré, en dépit de, nonobstant', 'nom', 'courant, soutenu, juridique', 'Malgré la grève, les cours ont repris.'],
      ['pourtant, cependant, toutefois, néanmoins', 'deux phrases', 'courant à soutenu', 'Il pleuvait ; le festival a néanmoins attiré la foule.'],
    ]),
    table('sheet-carte-contestees', 'Ce qui se dit, ce qui s’écrit', ['Forme', 'Statut', 'À écrire'], [
      ["bien qu'il est tard", "oral : répandu, critiqué à l'écrit", "bien qu'il soit tard"],
      ["malgré qu'il pleuve", "oral : répandu, contesté à l'écrit", "bien qu'il pleuve, malgré la pluie"],
      ['même si vous ayez raison', 'faute, à l’oral comme à l’écrit', 'même si vous avez raison'],
      ['quelque soit le prix', "faute d'orthographe", 'quel que soit le prix'],
      ['par contre', "correct, surtout oral ; certains le critiquent à l'écrit", 'en revanche'],
      ['en dépit que', 'ne se dit pas', 'en dépit du fait que, bien que'],
    ]),
  ]),
  sheet('sheet-subjonctif', 'Le subjonctif de concession', ['bien que, quoique, encore que, sans que', 'quoi que, quel que, où que, qui que', 'si… que et tout… que'], [
    teach('sheet-subjonctif-teach', 'Admettre sans affirmer',
      `« ${B206_REFRAME} » Bien que, quoique, encore que et sans que admettent un fait sans l'affirmer : subjonctif présent pour un fait simultané, subjonctif passé pour un fait accompli. Les indéfinis (quoi que, où que, qui que, quel que soit) concèdent toutes les possibilités d'un coup. EN: ${B206_REFRAME_EN}`),
    table('sheet-subjonctif-temps', 'Présent ou passé', ['Le fait concédé', 'Forme', 'Exemple'], [
      ['en même temps', 'subjonctif présent', 'Bien que la réunion soit terminée, on discute.'],
      ['à venir', 'subjonctif présent', "Bien qu'il ne soit pas d'accord, il appliquera la décision."],
      ['déjà accompli', 'subjonctif passé', "Bien qu'elle soit arrivée il y a six mois, elle connaît tout."],
      ['même sujet, avec être', "l'ellipse", 'Bien que très occupée, elle répond vite.'],
      ['un seul sujet', 'sans + infinitif', 'Elle a décidé sans consulter son équipe.'],
      ['après coup', 'encore que + subjonctif', 'Le rapport est solide, encore que certains chiffres soient à vérifier.'],
    ]),
    table('sheet-subjonctif-indefinis', 'Les indéfinis', ['Tournure', 'Sens', 'Exemple'], [
      ['quoi que (deux mots)', "n'importe quelle chose", 'Quoi que tu fasses, fais-le bien.'],
      ['quoique (un mot)', 'bien que', 'Quoique tu sois fatiguée, finis tes valises.'],
      ['quel, quelle, quels, quelles que soit, soient', "accord avec le nom qui suit", 'Quels que soient les obstacles…'],
      ['où que', "n'importe où", 'Où que tu ailles, donne-nous des nouvelles.'],
      ['qui que', "n'importe qui", 'Qui que vous soyez, présentez un billet.'],
      ['quoi que ce soit, qui que ce soit', "n'importe quoi, n'importe qui", 'Si tu as besoin de quoi que ce soit, appelle-moi.'],
      ["quoi qu'il en soit", 'de toute façon (figé)', "Quoi qu'il en soit, le vol part à sept heures."],
      ['quelques + nom + que (soutenu)', 'quels que soient les…', "Quelques efforts qu'il fasse, il n'arrive pas à suivre."],
    ]),
    table('sheet-subjonctif-degre', 'Le degré concédé', ['Tournure', 'Mode', 'Exemple'], [
      ['si + adjectif + que', 'subjonctif', "Si lumineux qu'il soit, il est trop cher."],
      ['aussi + adjectif + que', 'subjonctif', 'Aussi grande que soit la cuisine, elle est mal équipée.'],
      ['aussi + adjectif + soit-il (soutenu)', 'subjonctif, inversion', "Aussi pratique soit-il, ce quartier manque d'écoles."],
      ['quelque + adjectif + que (littéraire)', 'subjonctif', "Quelque habile qu'il soit, il ne convaincra personne."],
      ['tout + adjectif + que', 'indicatif (subjonctif aussi)', "Tout riche qu'il est, il vit simplement."],
      ['toute + féminin à consonne', "accord de l'adverbe", "Toute petite qu'elle est, la chambre est calme."],
    ]),
  ]),
  sheet('sheet-hypothese', 'Même si, quand bien même, avoir beau', ['les temps après même si', 'quand bien même', 'avoir beau et loin de'], [
    teach('sheet-hypothese-teach', 'Un si renforcé, une hypothèse extrême, un effort vain',
      `« ${B110_REFRAME} » Même si suit les paires de si : présent, imparfait ou plus-que-parfait après lui, jamais le subjonctif, le futur ou le conditionnel. Quand bien même dit la même hypothèse au conditionnel, en registre soutenu. Avoir beau concède un effort : avoir se conjugue, l'infinitif reste. EN: ${B110_REFRAME_EN}`),
    table('sheet-hypothese-meme-si', 'Même si : trois paires', ['Sens', 'Après même si', 'Dans l’autre partie'], [
      ['un fait', 'présent', 'présent, futur, impératif'],
      ['une hypothèse', 'imparfait', 'conditionnel présent'],
      ['le passé imaginé', 'plus-que-parfait', 'conditionnel passé'],
      ['demain', 'présent (jamais le futur)', 'futur'],
      ['jamais', 'subjonctif, futur, conditionnel', ''],
    ]),
    table('sheet-hypothese-qbm', 'Quand bien même et ses voisins', ['Tournure', 'Forme', 'Exemple'], [
      ['quand bien même (soutenu)', 'conditionnel', 'Quand bien même le musée serait gratuit, peu de gens y iraient.'],
      ['même si (courant)', 'imparfait', 'Même si le musée était gratuit, peu de gens y iraient.'],
      ['quand bien même, au passé', 'conditionnel passé', "Quand bien même elle l'aurait su, elle n'aurait rien pu faire."],
      ['quand même (seul)', 'malgré tout', 'Il est fatigué, mais il viendra quand même.'],
    ]),
    table('sheet-hypothese-beau', 'Avoir beau, loin de, au lieu de', ['Tournure', 'Sens', 'Exemple'], [
      ["j'ai beau, j'avais beau", "l'effort ne change rien", "J'ai beau chercher, je ne trouve pas."],
      ["j'ai eu beau, tu aurais beau", 'au passé composé, au conditionnel', "J'ai eu beau appeler, personne n'a répondu."],
      ['avoir beau + infinitif passé', "l'effort déjà fait", "J'ai beau avoir tout vérifié, ça ne marche pas."],
      ['loin de + infinitif', "le contraire de l'attendu", 'Loin de se décourager, elle a recommencé.'],
      ['au lieu de + infinitif', "une action à la place d'une autre", "Au lieu de m'aider, il m'a renvoyé vers le site."],
      ['sans + infinitif', 'un seul sujet', 'Il a signé le contrat sans le lire.'],
    ]),
  ]),
  sheet('sheet-discours', 'Les adverbes et l’opposition', ['la place et le registre des adverbes', 'les tournures avec l’indicatif', 'concéder ou opposer'], [
    teach('sheet-discours-teach', 'Relier deux phrases, et ne pas confondre',
      "Pourtant, cependant, toutefois et néanmoins relient deux phrases complètes ; ils se placent en tête, avec une virgule, ou après le verbe conjugué. Il n'en reste pas moins que et toujours est-il que posent un fait qui tient : l'indicatif. Alors que, tandis que et en revanche comparent deux faits : ils ne concèdent rien. EN: link two whole sentences; opposition compares, concession overrides."),
    table('sheet-discours-adverbes', 'Six mots, leur place, leur registre', ['Mot', 'Place', 'Registre'], [
      ['pourtant', 'en tête ou après le verbe', 'courant, oral et écrit'],
      ['cependant', 'en tête ou après le verbe', 'plutôt écrit'],
      ['toutefois', 'en tête ou après le verbe', 'soutenu'],
      ['néanmoins', 'en tête ou après le verbe', 'soutenu'],
      ["il n'en reste pas moins que", 'en tête, + indicatif', 'soutenu'],
      ["il n'en demeure pas moins (+ adjectif)", 'après le sujet', 'soutenu'],
      ['toujours est-il que', 'en tête, + indicatif', 'courant, écrit'],
      ['certes… mais, néanmoins', 'certes en tête, la réponse ensuite', 'courant à soutenu'],
    ]),
    table('sheet-discours-opposition', 'Concéder ou opposer', ['Lien', 'Ce qu’il fait', 'Exemple'], [
      ['bien que, pourtant', 'un obstacle dépassé', "Bien que Lyon soit plus chère, j'y vis."],
      ['alors que, tandis que', 'deux faits comparés (indicatif)', 'Lyon est chère, alors que Saint-Étienne reste abordable.'],
      ['alors que (concessif)', 'une attente contredite', "Il est parti alors qu'il avait promis de finir."],
      ['en revanche', 'deux faits en balance', 'La ville a peu de parcs ; en revanche, ses transports sont excellents.'],
      ['par contre', 'le même sens, surtout oral', 'Le loyer est élevé ; par contre, les charges sont comprises.'],
      ['au contraire', 'annule ce qui précède', "Il n'est pas triste, au contraire."],
    ]),
  ]),
  sheet('sheet-essai', 'L’essai argumenté (DELF B2)', ['le plan', 'les phrases utiles', 'la liste de contrôle'], [
    teach('sheet-essai-teach', 'Accorder, puis répondre',
      `« ${B223_REFRAME} » Un essai convaincant ne cache pas les objections : il accorde au camp d'en face son argument le plus fort, puis y répond. Varie les formes : un subjonctif, un conditionnel, un infinitif, un nom, et un lien comme il n'en reste pas moins que. EN: ${B223_REFRAME_EN}`),
    table('sheet-essai-plan', 'Le plan', ['Partie', 'Tournure', 'Exemple'], [
      ['la position, avec une limite', 'présent', 'Je suis favorable à cette mesure, avec des limites.'],
      ["l'annonce de la concession", 'commençons par', "Commençons par l'argument le plus sérieux des opposants."],
      ['le point accordé', 'il est vrai que, certes', 'Il est vrai que la gratuité coûte cher à la ville.'],
      ['la réponse', "il n'en reste pas moins que", "Il n'en reste pas moins que deux jours à la maison n'isolent personne."],
      ["l'hypothèse extrême", 'quand bien même', 'Quand bien même ce serait le cas, les habitudes finiraient par changer.'],
      ['la conclusion', 'même si…, toujours est-il que', "Toujours est-il qu'il faudra encadrer ce droit."],
    ]),
    table('sheet-essai-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ["L'argument adverse le plus fort est accordé", 'il est vrai que, certes'],
      ['Chaque point accordé a sa réponse', "il n'en reste pas moins que, toutefois"],
      ['Au moins trois formes de concession', 'subjonctif, conditionnel ou infinitif, nom'],
      ['Le mode suit le mot', 'souligne le mot, vérifie la forme'],
      ['Jamais de subjonctif après même si', 'même si vous avez raison'],
      ['Pas de malgré que à l’écrit', 'bien que, ou malgré + nom'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-16-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const EXERCISE = 'One voice, read as written WITH the bracketed infinitives and the choices spoken as printed: this is the exercise text, not the answer.';
const TRAP = "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions in promptSound are NEVER spoken.";
const REC_DESC: Record<string, string> = {
  'rec-b2-16-chronique': "Mélanie Caron's opinion column (act 1), one female voice with a Québec accent, one take, a columnist reading her own piece: measured, a little ironic on « on me répondra qu'une ville n'est pas un musée ». The concession words are read at the pace of the rest.",
  'rec-b2-16-rappel': 'The four recap cards (act 2). One coach voice. Card three reads the fragment « tout en sachant que c’était risqué » as a fragment, with a falling end.',
  'rec-b2-16-carte-ecoute': `${ONE_TAKE} Eight lines. Lines one to six say the same point five ways: keep the same melody so that only the concession word changes.`,
  'rec-b2-16-sophie': 'Claire and Marc (act 3), Lausanne, two voices, one take, an office. Claire reads her sentences aloud as she writes them; Marc comments calmly. A Swiss accent is welcome.',
  'rec-b2-16-subjonctif': 'The four subjunctive cards (act 3). One voice. Card three reads « bien que très occupée » with no pause where the verb was dropped.',
  'rec-b2-16-piege-subjonctif': TRAP,
  'rec-b2-16-texte-a3': `Sophie's annual review (act 3). ${EXERCISE}`,
  'rec-b2-16-karima': 'Nadia and a coach voice (act 4), Casablanca, one take, warm. Nadia is a mother packing her daughter’s suitcase: tender, a little anxious, never tearful. A light Moroccan accent is welcome.',
  'rec-b2-16-indefini': 'The four indefinite cards (act 4). One voice. Card one reads « quoi que tu fasses » and « quoique tu sois fatiguée » with the SAME sound for quoi que and quoique: the point is that the ear cannot tell them apart.',
  'rec-b2-16-indefini-ecoute': `${ONE_TAKE} Eight lines. Read quoi que and quoique identically; do not stress either.`,
  'rec-b2-16-texte-a4': `Nadia's note (act 4). ${EXERCISE}`,
  'rec-b2-16-chloe': 'Chloé and a coach voice (act 5), Brussels, one take, on a pavement after a flat viewing. Chloé is enthusiastic and critical at once. A Belgian accent is welcome.',
  'rec-b2-16-intensite': 'The four degree cards (act 5). One voice. Card two reads « aussi pratique soit-il » with the t of soit-il sounded [swa.til], as one group.',
  'rec-b2-16-piege-intensite': TRAP,
  'rec-b2-16-texte-a5': `Chloé and Marc's review of the flat (act 5). One voice, read as written with every mais: the rewrite is the exercise.`,
  'rec-b2-16-theo': 'Théo and a coach voice (act 6), Geneva, one take, an open-plan office. Théo is patient and a little amused by his colleague’s questions.',
  'rec-b2-16-meme-si': 'The four même si cards (act 6). One voice. Cards two and three quote lessons 10 in B1 and 3 in B2; read them with the same rhythm as the others.',
  'rec-b2-16-meme-si-ecoute': `${ONE_TAKE} Eight lines. Lines two and seven (hypotheses) are read with the same melody as the facts: only the tenses tell them apart.`,
  'rec-b2-16-piege-meme-si': TRAP,
  'rec-b2-16-texte-a6': `Théo's forum post (act 6). ${EXERCISE}`,
  'rec-b2-16-karim': 'Karim and a coach voice (act 7), Liège, one take, a hospital break room. Karim rehearses his speech half aloud: firm, formal, never aggressive. A Belgian accent is welcome.',
  'rec-b2-16-quand-bien-meme': 'The four quand bien même cards (act 7). One voice. « Quand bien même » is read as one group [kɑ̃.bjɛ̃.mɛm], never stressed.',
  'rec-b2-16-texte-a7': "Karim's email (act 7), one voice, read as written with every même si: the rewrite is the exercise.",
  'rec-b2-16-aissatou': 'Aïssatou and a coach voice (act 8), Montréal, one take, a phone call with a friend: exasperated and funny rather than angry. A light Senegalese accent is welcome.',
  'rec-b2-16-infinitif': 'The four infinitive cards (act 8). One voice. « J’ai eu beau » is read [ʒe.y.bo], with no pause after eu.',
  'rec-b2-16-infinitif-ecoute': `${ONE_TAKE} Nine lines, neutral.`,
  'rec-b2-16-piege-infinitif': TRAP,
  'rec-b2-16-texte-a8': `Aïssatou's complaint (act 8). ${EXERCISE}`,
  'rec-b2-16-college': 'Mme Faure and a coach voice (act 9), Toulouse, one take, a local newsroom in the evening. Mme Faure reads her article lines aloud as she writes them: clear, even, a journalist on deadline.',
  'rec-b2-16-nom': 'The four noun cards (act 9). One voice. Card four reads « malgré que (oral) · bien que (écrit) » as two labels, not as a sentence.',
  'rec-b2-16-texte-a9': "The school newsletter (act 9), one voice, read as written with every bien que: the rewrite is the exercise.",
  'rec-b2-16-debat': `${ONE_TAKE} REQUIRED: EIGHT interventions of a radio debate (act 10), at least three voices (a presenter is NOT needed), one take, natural overlaps avoided. Lines two and six in a more formal voice (an official), lines three and eight in a listener's voice.`,
  'rec-b2-16-piege-discours': TRAP,
  'rec-b2-16-texte-a10': "Paul Tremblay's letter (act 10), one male voice with a Québec accent, read as written with the blanks spoken as a short pause.",
  'rec-b2-16-malik': 'Malik and a coach voice (act 11), Lyon, one take, an interview in a café. Malik speaks easily, with a light Lyon accent.',
  'rec-b2-16-opposition': 'The four concession-or-opposition cards (act 11). One voice. Cards one and three both contain alors que or tandis que; read them with the same melody.',
  'rec-b2-16-opposition-ecoute': `${ONE_TAKE} Nine lines. Line seven quotes « char » and « voiture »: read the quoted words naturally, without air quotes.`,
  'rec-b2-16-texte-a11': "Samir's testimony (act 11), one male voice, conversational, read as written.",
  'rec-b2-16-modele': "Julien Moreau's op-ed (act 12), one male voice, one take, an urban planner reading his own column on a morning radio slot: calm, confident, the concessions read with the same weight as the answers.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 16',
  intro: 'At B1 you learned the concession tools (bien que, même si, malgré, pourtant). At B2 you map them by the FORM each one imposes: the subjunctive after bien que, quoique, encore que, sans que, quoi que, quel que soit, où que, qui que and si… que; the indicative after même si (never the subjunctive), tout… que and alors que; the conditional after quand bien même; the infinitive after avoir beau and loin de; a noun after malgré and en dépit de. You link whole sentences with toutefois, néanmoins, il n’en reste pas moins que and toujours est-il que, learn the register of each tool and which spoken forms (bien que + indicative, malgré que) are criticised in writing, and tell concession from opposition (alors que, en revanche). The task: a 200 to 250 word argued essay in DELF B2 format that grants the other side its strongest point before answering it.',
  skill: 'PE',
  grammarAssumed: [SI_UNIT, CONCESSION_UNIT, SI_PASSE_UNIT, SUBJ_PASSE_UNIT, MODES_UNIT],
  grammarIntroduced: [
    'Concession mapped by the form each tool imposes: subjunctive, indicative, conditional, infinitive, noun, or a second whole sentence',
    'Bien que and quoique with the subjonctif passé for a finished fact, encore que as a formal afterthought, the ellipsis bien que + adjective, sans que against sans + infinitive; bien que + indicative named as spoken',
    'The concessive indefinites quoi que (against quoique), quel que soit with its agreement, où que, qui que, quoi que ce soit, qui que ce soit, quoi qu’il en soit; quelque(s) + nom + que for recognition',
    'The conceded degree: si and aussi + adjective + que with the subjunctive, adjective + soit-il, against tout + adjective + que with the indicative, and the agreement toute before a feminine consonant',
    'Même si with the indicative only: present for a fact, imparfait for a hypothesis, plus-que-parfait for the past; never the subjunctive, the future or the conditional after it',
    'Quand bien même + conditional as the formal extreme hypothesis, même si + imparfait as its everyday equivalent, and quand même as a different word',
    'Avoir beau in every tense and with a perfect infinitive, loin de against au lieu de, sans + infinitive',
    'Malgré and en dépit de with a noun, the clause turned into a noun, malgré le fait que with either mood, nonobstant for recognition; malgré que named as contested in writing',
    'The discourse markers pourtant, cependant, toutefois, néanmoins (place and register), certes… mais, il n’en reste pas moins que, il n’en demeure pas moins, toujours est-il que with the indicative',
    'Concession against opposition: alors que and tandis que compare two facts, alors que can also concede, en revanche and par contre contrast, au contraire negates',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Au B1, tu as appris les outils de la concession. Ici, tu les ranges selon la forme que chacun impose : subjonctif, indicatif, conditionnel, infinitif ou nom, avec le registre de chacun et les formes orales qu'on critique à l'écrit. Tu relies deux phrases avec toutefois ou il n'en reste pas moins que, et tu sépares la concession de l'opposition. À la fin, tu écris un essai de 200 à 250 mots qui accorde à l'autre camp son meilleur argument avant d'y répondre.",
    minutes: 160,
    difficulty: 4,
    glyph: 'que',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: CONCESSION_AVANCEE_TERMS,
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
