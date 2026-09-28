// b1.39.l1 « Courriels et lettres »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md with the WORKSHOP SHAPE of
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 and §1.4. The B1 CAPSTONE, and the
// remediation target for learners who fail B1 exam WRITING (PE).
//
// Not imported, not merged into seed.json, not published. The `task` section
// is real (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]` and the validators run on `LESSON` itself.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around a TEXT (a real email or letter)
//   and a MOVE, in the same beats:
//
//     1 MEET      one anchor text FIRST (a `reading`, or a `listening`)
//     2 NOTICE    one section naming the move (cardDeck, tapTable, examples,
//                 focus), which also NAMES THE EARLIER B1 LESSON it recycles
//     3 PRACTISE  two checks on NEW material (groupDrill, trapDrill,
//                 commonErrors, dictation)
//     4 USE       « Pour ta mission »: the act's one tool for the graded
//                 task, always under that title (a groupDrill picking the
//                 line for YOUR email; a short scenario in acts 5 and 8)
//     + CHECK     the gated control-page groupDrill every B1 act ends on
//
//   Act 1 is the problem scene (an email with a wrong register, no subject
//   and no request), with the task announced in its resolve beat. Act 12 is
//   the production act: model, plan, role play, TASK, and the closing
//   sections.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · recycled B1 skill · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le courriel qui ne demande rien   scene + the email and its reply
//                                         · the request · lesson 25      6
//    2  Les cinq parties                  the rewritten email · anatomy
//                                         · lesson 37 (objet = headline) 6
//    3  Trois tenues, trois formules      Julien's move told three times
//                                         · formulas by register, France
//                                         and Québec · lessons 25, 26    6
//    4  La première phrase                ten openings, by ear · Je vous
//                                         écris pour… · lesson 31        6
//    5  Inviter et répondre               an invitation and two replies
//                                         · accept, decline · lessons 5,
//                                         15, 16                         6
//    6  Demander un renseignement         a request to a day camp · the
//                                         indirect question · lessons 9,
//                                         19                             6
//    7  Réclamer                          a complaint about a bill · the
//                                         four steps, firm not angry
//                                         · lessons 3, 32                6
//    8  Donner des nouvelles              Awa writes from Dakar · telling
//                                         an event · lessons 3, 30       6
//    9  S'excuser                         an apology, by ear · own it,
//                                         explain, repair · lessons 15,
//                                         16                             6
//   10  Relier les idées                  a heating complaint · one
//                                         connector per step · lessons
//                                         30 to 32                       6
//   11  Se relire                         Tomás's draft, six slips · the
//                                         checklist · lesson 26          6
//   12  Ta mission                        model request to a city service
//                                         · plan, role play, TASK, quiz 11
//
//   TOTAL 77 missions, 12 acts. Texts: 10 readings (acts 1, 2, 3, 5, 6, 7,
//   8, 10, 11, 12) and 2 listenings (acts 4, 9), plus the act 1 scene: 12
//   anchor texts, one per act. cardDeck 4 (acts 2, 5, 6, 9), tapTable 3
//   (acts 3, 7, 10), trapDrill 4, commonErrors 5, 3 scenarios (5, 8, 12),
//   one dictation. Corpus: 161 authored rows (.1000-.1183) plus 23 reused
//   seed rows. Quiz: 11 rounds of 8. Eleven error triggers, eleven drills,
//   five reference sheets, ten terms. Chapter artwork:
//   `courriels-lettres-image-prompts.md`, 12 prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Dis pourquoi tu écris, dis ce que tu demandes, et ferme comme tu as
//     ouvert. »
//   EN: Say why you are writing, say what you are asking for, and close the
//   way you opened.
//
//   ONE METAPHOR, THE ENVELOPE THAT GETS AN ANSWER. It is the B1 PE rubric
//   in one line: why (organisation), what (task done), close as you opened
//   (register held). It is NOT « formal is better »: acts 5 and 8 are warm
//   and still say why and what.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the email and the letter as a whole: the subject line, the five
//           parts, the formulas by register (France and Québec marked), the
//           opening sentence, the four exam text types and the apology, the
//           paragraph with one connector per step, the proofreading
//           checklist, and the B1 exam-style formal email task.
//   QUOTES  the reframes of lesson 9 (politeness), lesson 16 (subjunctive or
//           infinitive), lesson 25 (register), lesson 26 (tu or vous),
//           lesson 30 (connectors) and lesson 32 (concession), re-exported
//           from their corpus files; the formulas of lessons 21, 25 and 26
//           reused BY ID from the seed.
//   LEAVES  every grammar point to its owner: the conditional (9), the
//           subjunctive (14 to 16), indirect questions (19), register (25),
//           tu or vous (26), connectors (30 to 32). Each is named, used and
//           cited, never re-taught.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction; characters use what the situation needs.
//   English authored everywhere, never on an answer. Every `say` is French.
//   No spaced « ? » or « ! » in any scene or story bubble. Every scenario
//   uses ’ only and embeds no corpus row, so no scenario mixes apostrophes.
//   Other lessons cited by trail position in words, never by raw id.
//   Mission answer slots are spread by `spreadMissions()` below, which
//   rotates each closed item's options together with its `correct` index
//   (no text changes, no `why` names a position); the quiz by
//   `spreadSlots()`, as b1.25 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. ROUTING. Is this lesson where a failed B1 PE (TEF, TCF, DELF) sends
//      the learner? `Lesson.skill` is 'PE'. This lesson does not wire it.
//   2. TEXTS. 12 anchor texts, above the register lessons' 6 to 9: every
//      act meets a real email. Accept for the capstone?
//   3. THE RUBRIC has FIVE criteria (task, register and formulas,
//      organisation, range, accuracy), summing to 12, to mirror the B1 PE
//      grids, where the playbook's example has four. Keep five?
//   4. THE TASK offers two situations (a complaint to a company, a request
//      to a city service); the model answers the complaint and act 12's
//      reading models the request. One situation only, as an exam would?
//   5. « Veuillez agréer » (France) is taught as a closing formula for
//      recognition and use; it is an imperative, not the subjunctive.
//   6. « l’objet » is a 7-character term chip, under the 8 to 13 guideline.
//   7. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, LS, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  PREMIER_TEXT, ANATOMIE_TEXT, ANATOMIE_PARTIES, JULIEN_TEXT, INVITATION_TEXT, RENSEIGNEMENT_TEXT,
  RECLAMATION_TEXT, NOUVELLES_TEXT, PARAGRAPHE_TEXT, BROUILLON_TEXT, BROUILLON_FAUTES, MODELE_TEXT,
  B109_REFRAME, B109_REFRAME_EN, B116_REFRAME, B116_REFRAME_EN, B125_REFRAME, B125_REFRAME_EN,
  B126_REFRAME, B126_REFRAME_EN, B130_REFRAME, B130_REFRAME_EN, B132_REFRAME, B132_REFRAME_EN,
  PC_IMP_UNIT, FUTUR_UNIT, POLITESSE_UNIT, SUBJ_DECL_UNIT, SUBJ_INF_UNIT, DISCOURS_UNIT,
  REGISTRES_UNIT, TUVOUS_UNIT, COORD_UNIT, SUBORD_UNIT, CONCESSION_UNIT, LECTURE_UNIT,
  PC_IMP_REF, FUTUR_REF, POLITESSE_REF, SUBJ_DECL_REF, SUBJ_INF_REF, DISCOURS_REF,
  REGISTRES_REF, TUVOUS_REF, COORD_REF, SUBORD_REF, CONCESSION_REF, LECTURE_REF,
  SUBJ_RANGE_REF, CONNECTEURS_RANGE_REF,
} from './courriels-lettres-corpus.ts';
import { COURRIELS_LETTRES_TERMS } from './courriels-lettres-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string; drills?: string[] };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));
const OWN = new Set(ALL_ROWS.map((r) => r.id));

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.39: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.39: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.39: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const free = (frs: string, ens: string, note?: string): GItem => ({ fr: frs, en: ens, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
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

/** THE « USE IT » BEAT: the act's one tool for the graded task, always under
 *  the same title so a reviewer and a learner see the loop. */
function pourTaMission(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ta mission', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: LE COURRIEL QUI NE DEMANDE RIEN
 *
 *  The problem scene: an angry, hurried email with a friend's register, no
 *  subject and no request. The company understands the problem and cannot
 *  act. The graded task is announced in the resolve beat.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le canapé de Meubles Boréal',
  frSub: 'Un courriel sans demande',
  setting: { place: 'Un appartement de Limoilou', city: 'Québec', time: '21 h 10', ambience: 'un canapé neuf penché sur trois pieds, un carton ouvert, un ordinateur portable' },
  beats: [
    {
      kind: 'narration',
      text: "Mardi soir, à Québec. Ton nouveau canapé arrive de chez Meubles Boréal, et un pied est cassé. Tu es fâché, et tu es pressé. Tu ouvres ta boîte de courriel.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: `Tu écris au service à la clientèle, sans objet : « ${fr(E(1000))} » Ton amie Léa lit par-dessus ton épaule.`,
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Léa',
      fr: 'Ton message dit le problème. Il ne dit pas ce que tu veux.',
      en: 'Your message says the problem. It does not say what you want.',
      respell: '[tohⁿ may-SAZH dee luh pro-BLEM | eel nuh dee pa suh kuh tü VEU]',
      stage: 'Elle ne parle pas de grammaire. Elle parle de la personne qui va lire.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Mais c'est évident. Je veux un canapé qui tient debout.",
      en: 'But it is obvious. I want a sofa that stands up.',
      respell: '[meh seh-tay-vee-DAHⁿ | zhuh veu uhⁿ ka-na-PAY kee tyehⁿ duh-BOO]',
      stage: 'Évident pour toi. Tu sais ce que tu veux.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Léa',
      fr: 'Pour toi. Pas pour la personne qui lit cent courriels par jour.',
      en: 'To you. Not to the person who reads a hundred emails a day.',
      respell: '[poor TWA | pa poor la pehr-SONN kee lee sahⁿ koo-ryehl par ZHOOR]',
      stage: 'Remplacer, réparer, rembourser : au service, trois équipes différentes.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Deux jours plus tard, la réponse arrive : « Pourriez-vous préciser votre demande ? » Tu dois réécrire.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu réécris. Quelle phrase envoies-tu ?',
      size: 'lg',
      options: [
        { fr: fr(E(1002)), respell: rsOf(E(1002)), en: en(E(1002)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1001)), respell: rsOf(E(1001)), en: en(E(1001)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Mme Tremblay répond le lendemain : un nouveau canapé arrive jeudi. Elle savait enfin quoi faire.",
        breaks: "Mme Tremblay répond encore : « Que souhaitez-vous ? » Ton message est plus poli, mais il ne demande toujours rien.",
      },
    },
    {
      kind: 'break',
      heading: 'Poli, mais sans demande',
      body: "Ton lecteur a compris le problème. Il ne savait pas quoi faire : remplacer, réparer ou rembourser. Une demande claire, c'est une réponse rapide. EN: The reader understood the problem but not what to do; a clear request gets a quick answer.",
      wrong: { fr: fr(E(1002)), ipa: ipaOf(E(1002)), respell: rsOf(E(1002)), en: en(E(1002)) },
      right: { fr: fr(E(1001)), ipa: ipaOf(E(1001)), respell: rsOf(E(1001)), en: en(E(1001)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "À la fin de cette leçon, tu vas écrire un courriel formel de 120 à 150 mots, comme à l'examen de B1 : une réclamation, ou une demande à un service de ta ville. Chaque acte te donne un outil pour ça.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['demande', 'objet'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Construire un courriel', s: 'Actes 1 à 4 : la demande, les cinq parties, les formules, la première phrase' },
    { t: "Écrire les textes de l'examen", s: 'Actes 5 à 9 : inviter, demander, réclamer, raconter, s’excuser' },
    { t: 'Relier et relire', s: 'Actes 10 et 11 : les connecteurs, puis la relecture' },
    { t: 'Écrire ton courriel formel', s: 'Acte 12 : ta mission de 120 à 150 mots' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET: the email and the reply it got. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Un courriel, une réponse',
  frSub: 'Lis ce que le service a reçu',
  text: PREMIER_TEXT,
  glossary: [
    { word: 'préciser', en: 'to say exactly', note: 'Dire plus clairement, avec les détails.' },
    { word: 'remplacement', en: 'replacement', note: 'Un nouveau canapé à la place du canapé abîmé.' },
    { word: 'réparation', en: 'repair', note: 'On répare le pied, on garde le canapé.' },
    { word: 'remboursement', en: 'refund', note: 'On te rend ton argent.' },
    { word: 'numéro de commande', en: 'order number', note: 'Le numéro de ton achat, sur ta facture.' },
  ],
  questions: [
    { q: 'Le service a-t-il compris le problème ?', a: 'Oui : « Nous sommes désolés pour ce problème. » Il sait que le canapé est cassé.' },
    { q: 'Pourquoi le service ne peut-il rien faire ?', a: 'Il ne sait pas ce que tu veux : un remplacement, une réparation ou un remboursement. Et il n’a pas le numéro de commande.' },
    { q: 'Qu’est-ce qui manque au-dessus du message ?', a: "L'objet : la ligne que le service voit avant d'ouvrir." },
    { q: 'Le premier mot du message va-t-il avec un service à la clientèle ?', a: "Non. « Salut » va avec un ami. Pour un service : Madame, Monsieur, ou Bonjour." },
  ],
  audio: REC('rec-b1-39-premier'),
  say: REFRAME,
  terms: ['demande', 'objet'],
};

/** PRACTISE: what the service needed to read. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Ce qui manquait',
  groups: [
    grp('Ton premier courriel, et ta première correction', [
      it(E(1000), 'pas d’objet, pas de demande'),
      it(E(1002), 'le problème et ta colère'),
    ], chk(
      'Ces deux messages disent-ils ce que tu veux ?',
      ['Non, ils disent seulement le problème.', 'Oui, c’est évident.'], 0,
      "Le problème est là, la demande non. EN: the problem is there, the request is not.")),
    grp('Ce que le service avait besoin de lire', [
      it(E(1004), 'l’objet'),
      it(E(1005), 'la raison du courriel'),
      it(E(1001), 'le problème, puis la demande'),
      it(E(1010), 'une autre demande possible'),
    ], chk(
      'Quelle ligne dit ce que tu veux ?',
      ['l’objet', 'la raison du courriel', 'la question avec Pourriez-vous'], 2,
      "La question au conditionnel : c'est la demande. EN: the conditional question is the request.")),
    ctl('Et le registre', '« Salut » au service à la clientèle, c’est...',
      ['une faute de français', 'une tenue d’amis, au mauvais endroit'], 1,
      `${Cap(REGISTRES_REF)} le disait : « ${B125_REFRAME} » EN: ${B125_REFRAME_EN}`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['demande', 'registre'],
};

/** NOTICE: three requests, three different answers from the same service. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Une demande, une équipe',
  cases: [
    { situation: 'Tu veux un nouveau canapé', fr: fr(E(1001)), en: en(E(1001)) },
    { situation: 'Tu veux garder ton canapé, réparé', fr: fr(E(1011)), en: en(E(1011)) },
    { situation: 'Tu veux ton argent', fr: fr(E(1010)), en: en(E(1010)) },
    { situation: 'Le service ne sait pas ce que tu veux', fr: fr(E(1003)), en: en(E(1003)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['demande'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La demande', 'Le service a compris ton problème. Pourquoi ne fait-il rien ?',
    ['Il ne sait pas ce que tu veux.', 'Il n’a pas lu ton message.'], 0,
    "Comprendre ne suffit pas : il faut savoir quoi faire. EN: understanding is not enough; they need to know what to do."),
  ctl('L’objet', 'Ton courriel n’a pas d’objet. Le lecteur...',
    ['ne sait pas de quoi tu parles avant d’ouvrir', 'lit ton courriel plus vite'], 0,
    "L'objet est la première chose qu'il voit. EN: the subject is the first thing they see."),
  ctl('La mission', 'À la fin de la leçon, tu écris...',
    ['un texto à un ami', 'un courriel formel de 120 à 150 mots', 'une lettre de dix lignes à la main'], 1,
    "Comme à l'examen de B1 : une réclamation ou une demande. EN: as in the B1 exam."),
], ['demande', 'objet']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le courriel qui ne demande rien',
    opener: {
      line: "Un courriel peut dire le problème et ne rien demander : ici tu vois ce que ça coûte. EN: An email can state the problem and ask for nothing: here you see what that costs.",
      imageRef: 'lessons/courriels-lettres/act01.jpg',
    },
    sections: [],
    milestone: "Tu sais qu'un courriel doit dire ce que tu demandes, et pas seulement le problème. EN: You know an email must say what you ask for, not just the problem.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: LES CINQ PARTIES
 *
 *  MEET: the same complaint, rewritten. NOTICE: the five parts, and the
 *  objet read like a headline (lesson 37). PRACTISE: which part is this
 *  line; what is missing. USE: the objet of your own email.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a2-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le même courriel, réécrit',
  frSub: 'Cherche les cinq parties',
  text: ANATOMIE_TEXT,
  glossary: [
    { word: 'Objet', en: 'subject line', note: 'La ligne qui dit le sujet, avant le message.' },
    { word: 'livrée', en: 'delivered', note: 'Apportée chez toi par le magasin.' },
    { word: 'déchirure', en: 'tear', note: 'Le tissu est ouvert, déchiré.' },
    { word: 'en pièce jointe', en: 'attached', note: 'Un fichier envoyé avec le courriel.' },
  ],
  questions: [
    { q: 'Trouve les cinq parties du courriel.', a: `${ANATOMIE_PARTIES.join(' ; ')}.` },
    { q: 'Que dit la première phrase après « Madame Tremblay, » ?', a: 'Pourquoi Alex écrit : au sujet de sa commande 4821.' },
    { q: 'Où est la demande ?', a: '« Pourriez-vous me proposer un remplacement ? » Une question, au conditionnel.' },
    { q: 'Qu’est-ce qui aide le service à agir vite ?', a: 'Le numéro de commande, les photos, et les heures où Alex est disponible.' },
  ],
  audio: REC('rec-b1-39-anatomie'),
  say: REFRAME,
  terms: ['objet', 'formules'],
};

/** NOTICE: the five parts, one card each, and the objet as a headline. */
const A2_PARTIES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-parties',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-anatomie',
  title: 'Les cinq parties d’un courriel',
  frSub: 'De haut en bas',
  hint: 'Cinq cartes, dans l’ordre du courriel.',
  audio: REC('rec-b1-39-parties'),
  say: REFRAME,
  terms: ['objet', 'formules'],
  cards: [
    {
      head: "L'objet", label: Cap(LECTURE_REF),
      fr: fr(E(1004)),
      sub: rsOf(E(1004)),
      body: `Il se lit comme un titre d'article, et ${LECTURE_REF} t'a appris à lire les titres d'abord. Ton lecteur fait pareil avec l'objet. EN: The subject line works like a headline: the reader reads it first.`,
    },
    {
      head: "La formule d'appel", label: 'la première ligne',
      fr: fr(E(1016)),
      sub: rsOf(E(1016)),
      body: "Le nom ou le titre du lecteur, puis une virgule. Elle annonce le registre de tout le courriel. EN: the greeting sets the register of the whole email.",
    },
    {
      head: 'Le corps', label: 'pourquoi, les faits, la demande',
      fr: fr(E(1019)),
      sub: rsOf(E(1019)),
      body: "D'abord la raison du courriel, puis les faits, puis la demande. Des phrases courtes, un paragraphe par idée. EN: reason, facts, request, in short paragraphs.",
    },
    {
      head: 'La formule de politesse', label: 'la dernière ligne',
      fr: fr(E(1020)),
      sub: rsOf(E(1020)),
      body: "Tu remercies, puis tu fermes : Cordialement, ou une formule plus soutenue. Elle répond à la formule d'appel. EN: thank, then close in the register you opened with.",
    },
    {
      head: 'La signature', label: 'ton nom',
      fr: 'Alex Martin',
      sub: '[a-lehks mar-TEHⁿ]',
      body: "Ton prénom et ton nom, et ce qui aide le lecteur : ton adresse, ton numéro de client. EN: your full name, plus anything that helps the reader act.",
    },
  ],
};

/** PRACTISE, on new lines: which part is this? */
const A2_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Quelle partie ?',
  groups: [
    grp('Des lignes du haut', [
      it(E(1026), 'avant le message'),
      it(LS(1178), 'la première ligne du message'),
      it(E(1030), 'avant le message'),
    ], chk(
      '« Madame, Monsieur, », c’est...',
      ['l’objet', 'la formule d’appel', 'la signature'], 1,
      "La formule d'appel, pour un lecteur que tu ne connais pas. EN: the greeting, for a reader you do not know.")),
    grp('Des lignes du milieu et du bas', [
      it(E(1017), 'un fait'),
      it(E(1018), 'la pièce jointe'),
      it(E(1020), 'avant Cordialement'),
    ], chk(
      '« Je vous remercie de votre aide. » va...',
      ['au début du corps', 'à la fin, avant la formule de politesse', 'dans l’objet'], 1,
      "Tu remercies juste avant de fermer. EN: you thank just before closing.")),
    ctl('L’objet', 'Lequel est le meilleur objet pour une réclamation ?',
      [fr(E(1029)), fr(E(1026))], 1,
      "Le lecteur sait tout de suite ce que tu veux. EN: the reader knows at once what you want."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['objet', 'formules'],
};

/** PRACTISE: four emails, each missing a part. */
const A2_OUBLIS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-oublis',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre courriels, une partie oubliée',
  errors: [
    {
      wrong: 'Objet : (vide)',
      right: fr(E(1026)),
      why: "Normal : entre amis, on écrit sans objet. Un service reçoit cent courriels : sans objet, le tien attend. EN: friends skip it; a service sorts by it.",
    },
    {
      wrong: 'Le canapé est arrivé avec un pied cassé. Cordialement.',
      right: `${fr(E(1017))} ${fr(E(1019))}`,
      why: "Tu penses que le problème suffit. Sans demande, le lecteur ne sait pas quoi faire. EN: without a request the reader cannot act.",
    },
    {
      wrong: 'Je vous envoie deux photos.',
      right: fr(E(1018)),
      why: "Tu as oublié de joindre le fichier, ou de le dire. Écris « en pièce jointe », et vérifie. EN: say it is attached, and attach it.",
    },
    {
      wrong: 'Pourriez-vous me proposer un remplacement ? (et rien après)',
      right: `${fr(E(1019))} ${fr(E(1020))}`,
      why: "La demande est là, mais le courriel s'arrête net. Remercie et ferme : c'est la fin qu'on attend. EN: thank and close; an abrupt end sounds cold.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['objet', 'demande'],
};

/** USE: the subject line of your own email. */
const A2_MISSION = pourTaMission('a2-mission', 'Ton objet', [
  grp('Ta réclamation', [
    it(E(1026), 'la demande dans l’objet'),
    it(E(1004), 'le sujet et le problème'),
  ], chk(
    'Ta commande est arrivée abîmée. Ton objet ?',
    ['Objet : problème', 'Objet : commande 4821, canapé livré abîmé', 'Objet : bonjour'], 1,
    "Le numéro et le problème : le service trouve ton dossier. EN: the number and the problem.")),
  grp('Ta demande à la ville', [
    it(E(1027), 'le sujet précis'),
  ], chk(
    'Tu demandes un permis de stationnement. Ton objet ?',
    ['Objet : demande de permis de stationnement', 'Objet : question', 'Objet : urgent'], 0,
    "Le sujet en quelques mots. EN: the subject in a few words.")),
], ['objet']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('L’ordre', 'Dans quel ordre ?',
    ['formule d’appel, objet, corps, signature', 'objet, formule d’appel, corps, formule de politesse, signature'], 1,
    "L'objet d'abord, la signature à la fin. EN: subject first, signature last."),
  ctl('Le corps', 'Le corps commence par...',
    ['la raison du courriel', 'ta date de naissance', 'la formule de politesse'], 0,
    "Pourquoi tu écris, tout de suite. EN: why you are writing, straight away."),
  ctl('La pièce jointe', 'Tu envoies des photos. Tu écris...',
    ['rien, ils verront', 'je vous envoie deux photos en pièce jointe'], 1,
    "Dis-le, pour que le lecteur les cherche. EN: say so, so they look for them."),
], ['objet', 'formules']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Les cinq parties',
    opener: {
      line: "Un courriel a cinq parties, de l'objet à la signature : ici tu les places dans l'ordre. EN: An email has five parts, from subject to signature: here you put them in order.",
      imageRef: 'lessons/courriels-lettres/act02.jpg',
    },
    sections: [],
    milestone: "Tu construis un courriel en cinq parties, avec un objet qui dit tout. EN: You can build an email in five parts, with a subject line that says it all.",
    estScreens: 34, restPoints: ['a2-parties'],
  },
  sections: [A2_LECTURE, A2_PARTIES, A2_REPERER, A2_OUBLIS, A2_MISSION, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: TROIS TENUES, TROIS FORMULES
 *
 *  MEET: Julien announces one move to a friend, a manager and a bank.
 *  NOTICE: the formulas by reader, France and Québec marked (lessons 25 and
 *  26 named). PRACTISE: pair the opening with its closing; the mismatch
 *  trap. USE: the pair for your formal email.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Julien déménage',
  frSub: 'Une nouvelle, trois lecteurs',
  text: JULIEN_TEXT,
  glossary: [
    { word: 'pendre la crémaillère', en: 'have a housewarming', note: 'Fêter un nouvel appartement avec des amis.' },
    { word: 'à compter du', en: 'from, as of', note: 'À partir de cette date. Soutenu.' },
    { word: 'mettre à jour', en: 'to update', note: 'Changer une information pour la nouvelle.' },
    { word: 'dossier', en: 'file, record', note: 'Tes informations chez la banque.' },
  ],
  questions: [
    { q: 'Qu’est-ce qui est pareil dans les trois messages ?', a: 'La nouvelle : Julien déménage le 1er juillet.' },
    { q: 'Trouve la première et la dernière ligne de chaque message.', a: 'Salut Léa / Bises ; Bonjour Madame Gagnon / Bonne journée ; Madame, Monsieur / Je vous prie d’agréer, Madame, Monsieur, mes salutations distinguées.' },
    { q: 'Pourquoi le message à la banque est-il le plus soutenu ?', a: 'Julien ne connaît personne à la banque, et c’est un courrier officiel.' },
    { q: 'Julien tutoie qui ?', a: 'Léa seulement. Il vouvoie sa responsable et la banque.' },
  ],
  audio: REC('rec-b1-39-julien'),
  say: REFRAME,
  terms: ['formules', 'registre'],
};

/** NOTICE: the formulas by reader. Six rows; the sheet holds the rest. */
const A3_FORMULES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-formules',
  layer: 'core',
  sheetId: 'sheet-formules',
  title: 'Ouvrir et fermer, selon le lecteur',
  cols: ['Pour qui', 'Ouvrir', 'Fermer'],
  rows: [
    { cells: ['une amie', 'Salut Léa,', 'Bises'], say: fr(E(1032)),
      detail: { title: 'Une amie', body: "Le familier, et tu. Bises, Je t'embrasse ou À bientôt. EN: informal, with tu.", say: fr(E(1044)) } },
    { cells: ['une collègue', 'Bonjour Marc,', 'Bonne journée'], say: fr('fr.b1.rp-etiquette.1132'),
      detail: { title: 'Un collègue', body: "Le courant. Au Québec, Bonne journée ferme même un courriel de travail. EN: everyday; in Québec Bonne journée closes work emails too.", say: fr(E(1040)) } },
    { cells: ['ta responsable', 'Bonjour Madame Gagnon,', 'Cordialement'], say: fr(E(1033)),
      detail: { title: 'Une responsable', body: "Bonjour, puis Madame et le nom. Et vous, du début à la fin. EN: Bonjour plus title and name, and vous throughout.", say: fr(LS(1327)) } },
    { cells: ['un service inconnu', 'Madame, Monsieur,', 'Cordialement'], say: fr(LS(1178)),
      detail: { title: 'Un service', body: "Tu ne sais pas qui lit : Madame, Monsieur. Cordialement va partout dans un courriel. EN: when you do not know who reads it.", say: fr('fr.a1.salutations.118') } },
    { cells: ['une lettre officielle', 'Madame, Monsieur,', "Je vous prie d'agréer..."], say: fr(LS(1185)),
      detail: { title: 'Une lettre officielle', body: "La formule longue, pour une administration ou une réclamation. En France, on écrit aussi Veuillez agréer. EN: the long formula; France also uses Veuillez agréer.", say: fr(E(1036)) } },
    { cells: ['au Québec, un client', 'Bonjour Monsieur Diallo,', 'Salutations distinguées'], say: fr(E(1039)),
      detail: { title: 'Au Québec', body: "Salutations distinguées seul, en fin de courriel, est courant au Québec. On y dit courriel ; en France, on dit aussi mail. EN: the short form is common in Québec; courriel there, mail in France.", say: fr(E(1037)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formules', 'registre'],
};

/** PRACTISE, on new lines: every opening has its closing. */
const A3_ASSORTIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-assortir',
  layer: 'core',
  size: 'lg',
  title: 'Chaque début a sa fin',
  groups: [
    grp('Pour un proche', [
      it(E(1032), 'ouvrir'),
      it(LS(1321), 'fermer'),
      it(E(1038), 'fermer aussi'),
    ], chk(
      'Tu as ouvert avec « Salut Léa, ». Tu fermes avec...',
      ['Bises', 'Cordialement', 'Salutations distinguées'], 0,
      "Le familier, jusqu'au bout. EN: informal to the end.")),
    grp('Pour un service', [
      it(LS(1178), 'ouvrir'),
      it(E(1041), 'ouvrir, à une femme inconnue'),
      it(LS(1185), 'fermer, une lettre'),
    ], chk(
      'Tu as ouvert avec « Madame, Monsieur, ». Tu fermes avec...',
      ['À bientôt', 'Bises', 'Cordialement'], 2,
      "Cordialement, ou la formule longue d'une lettre. EN: Cordialement, or the long letter formula.")),
    ctl('Tu ou vous', 'Julien écrit « Bonjour Madame Gagnon, ». Ensuite, il dit...',
      ['tu', 'vous'], 1,
      `${Cap(TUVOUS_REF)} le disait : « ${B126_REFRAME} » Avec Madame, c'est vous jusqu'à la signature. EN: ${B126_REFRAME_EN}`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formules', 'registre'],
};

/** PRACTISE, the trap: an opening and a closing from two different outfits. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Le début et la fin ne vont pas ensemble',
  rule: {
    title: 'Une seule tenue, de la première à la dernière ligne',
    body: `« ${B125_REFRAME} » Mais dans un seul courriel, on n'en change pas. La fin répond au début. EN: ${B125_REFRAME_EN} Inside one email, keep one.`,
  },
  cards: [
    { promptLabel: 'à Mme Gagnon, pour ouvrir', promptSound: 'Salut Madame Gagnon,', fr: fr(E(1033)), ipa: ipaOf(E(1033)), tip: "Salut est familier, Madame est courant : deux tenues dans une ligne. EN: two outfits in one line." },
    { promptLabel: 'à une amie, pour fermer', promptSound: "Je vous prie d'agréer mes salutations distinguées.", fr: fr(E(1044)), ipa: ipaOf(E(1044)), tip: "Une lettre officielle à une amie : elle va croire que tu es fâché. EN: she will think you are angry." },
    { promptLabel: 'à la banque, pour fermer', promptSound: 'Bises,', fr: fr(E(1036)), ipa: ipaOf(E(1036)), tip: "Bises à la banque ressemble à une erreur de destinataire. EN: it looks like the wrong recipient." },
    { promptLabel: 'à un service, pour ouvrir', promptSound: 'Coucou,', fr: fr(E(1041)), ipa: ipaOf(E(1041)), tip: "Pour une personne que tu ne connais pas : Madame, ou Madame, Monsieur. EN: for someone you do not know." },
    { promptLabel: 'à un client, pour ouvrir', promptSound: 'Salut Diallo,', fr: fr(E(1039)), ipa: ipaOf(E(1039)), tip: "Le nom seul, sans Monsieur, sonne brusque. EN: the bare surname sounds curt." },
    { promptLabel: 'à un collègue, au Québec', promptSound: 'Veuillez agréer, Monsieur, mes salutations distinguées.', fr: fr(E(1040)), ipa: ipaOf(E(1040)), tip: "Trop haut pour un collègue. Au Québec, Merci et bonne journée suffit. EN: too high for a colleague." },
  ],
  drill: [
    { promptSay: 'À ta sœur : « Salut Inès, ... Bises ». Et au milieu ?', opts: ['tu', 'vous'], correct: 0 },
    { promptSay: 'À la banque : « Madame, Monsieur, ... » Pour fermer :', opts: ['Bises', 'Cordialement'], correct: 1 },
    { promptSay: 'À ta responsable : « ... Madame Gagnon, »', opts: ['Bonjour', 'Salut'], correct: 0 },
    { promptSay: 'À un ami : pour fermer', opts: ['À bientôt', 'Salutations distinguées'], correct: 0 },
    { promptSay: 'Une lettre de réclamation : pour fermer', opts: ['Gros bisous', "Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées."], correct: 1 },
    { promptSay: 'À une inconnue, au service des loisirs : pour ouvrir', opts: ['Madame,', 'Coucou,'], correct: 0 },
    { promptSay: 'À un collègue, à Montréal : pour fermer', opts: ['Merci et bonne journée,', 'Veuillez agréer...'], correct: 0 },
    { promptSay: 'À ton frère : pour ouvrir', opts: ['Monsieur,', 'Salut Hugo,'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Une seule tenue' },
    { label: 'Six cartes', kind: 'cards', title: 'Le début et la fin mélangés' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six formules qui vont' },
    { label: 'À toi', kind: 'drill', title: 'Huit formules', gate: true },
  ],
  audio: REC('rec-b1-39-piege-formules'),
  say: REFRAME,
  terms: ['formules', 'registre'],
};

/** USE: the pair for your formal email. */
const A3_MISSION = pourTaMission('a3-mission', 'Ton début et ta fin', [
  grp('À une entreprise que tu ne connais pas', [
    it(LS(1178), 'pour ouvrir'),
    it('fr.a1.salutations.118', 'pour fermer un courriel'),
    it(LS(1185), 'pour fermer une lettre'),
  ], chk(
    'Ta réclamation à Meubles Boréal commence par...',
    ['Salut,', 'Madame, Monsieur,', 'Coucou Meubles Boréal,'], 1,
    "Tu ne sais pas qui lit. EN: you do not know who reads it.")),
  ctl('Si tu connais le nom', 'La réponse vient de Nadia Tremblay. Tu lui réponds...',
    ['Bonjour Madame Tremblay,', 'Salut Nadia,'], 0,
    "Bonjour, Madame, et le nom : courant et poli. EN: Bonjour, title and name."),
], ['formules']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La paire', '« Madame, Monsieur, » et « Bises » dans le même courriel...',
    ['vont bien ensemble', 'ne vont pas ensemble'], 1,
    "La fin répond au début. EN: the closing answers the greeting."),
  ctl('Le Québec', 'Au Québec, « Salutations distinguées, » seul en fin de courriel est...',
    ['courant', 'une faute'], 0,
    "C'est la forme courte, fréquente au Québec. EN: the common short form in Québec."),
  ctl('Le mot', 'En France, on dit aussi...',
    ['un mail', 'un char'], 0,
    "Courriel au Québec, mail aussi en France. EN: courriel in Québec, mail too in France."),
], ['formules', 'registre']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Trois tenues, trois formules',
    opener: {
      line: "Salut Léa, Bonjour Madame, Madame, Monsieur : ici tu ouvres et tu fermes comme ton lecteur l'attend. EN: Three greetings: here you open and close the way your reader expects.",
      imageRef: 'lessons/courriels-lettres/act03.jpg',
    },
    sections: [],
    milestone: "Tu choisis la formule d'appel et la formule de politesse qui vont ensemble, pour chaque lecteur. EN: You choose a greeting and a closing that match, for each reader.",
    estScreens: 38, restPoints: ['a3-formules', 'a3-piege'],
  },
  sections: [A3_LECTURE, A3_FORMULES, A3_ASSORTIR, A3_PIEGE, A3_MISSION, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: LA PREMIÈRE PHRASE
 *
 *  MEET by ear: ten opening sentences. NOTICE: which opening for which
 *  situation, with « pour » and « afin de » cited from lesson 31. PRACTISE:
 *  pick the opening; four ways of burying the reason. USE: your first line.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Dix premières phrases',
  frSub: 'Écoute pourquoi chacun écrit',
  lines: [
    ln(E(1050)), ln(E(1051)), ln(E(1052)), ln(E(1053)), ln(E(1054)),
    ln(E(1055)), ln(E(1056)), ln(E(1057)), ln(E(1059)), ln(E(1060)),
  ],
  questions: [
    { q: 'Première phrase : pourquoi la personne écrit-elle ?', opts: ['pour demander un renseignement', 'pour répondre à un courriel', 'pour s’excuser'], correct: 0, why: "« pour vous demander » : le but est dit tout de suite. EN: the purpose comes at once." },
    { q: 'Deuxième phrase : y a-t-il eu un échange avant ?', opts: ['Non, c’est le premier contact.', 'Oui, une conversation, la veille.'], correct: 1, why: "« Suite à notre conversation » : on continue un échange. EN: it follows an earlier exchange." },
    { q: 'Troisième phrase : que fait la personne ?', opts: ['Elle annule.', 'Elle confirme sa présence.'], correct: 1, why: "« je confirme ma présence », en réponse à un courriel. EN: she confirms, in reply." },
    { q: 'Septième phrase : à qui la personne écrit-elle ?', opts: ['à un service', 'à un ami'], correct: 1, why: "« Je t'écris », tu : un ami. EN: tu, so a friend." },
    { q: 'Dernière phrase : quel mot dit le but, comme pour ?', opts: ['au sujet de', 'afin de'], correct: 1, why: "« afin de réserver » : afin de dit le but, un peu plus soutenu que pour. EN: afin de states a purpose." },
  ],
  audio: REC('rec-b1-39-debuts-ecoute'),
  say: REFRAME,
  terms: ['ouverture'],
};

/** NOTICE: which opening for which situation. */
const A4_DEBUTS: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-debuts',
  layer: 'core',
  sheetId: 'sheet-anatomie',
  title: 'Cinq façons de commencer',
  examples: [
    ex(E(1050), `Premier contact. Pour + infinitif dit le but, comme dans ${SUBORD_REF}.`),
    ex(E(1060), 'Afin de : le même but, un peu plus soutenu.'),
    ex(E(1051), 'Il y a eu un échange avant : un appel, une réunion.'),
    ex(E(1052), 'Tu réponds : donne la date du courriel reçu.'),
    ex(E(1055), 'Vous vous êtes mis d’accord avant : tu fais ce qui était prévu.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ouverture'],
};

/** PRACTISE, on new situations: which opening? */
const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La bonne première phrase',
  groups: [
    grp('Tu écris pour la première fois', [
      it(E(1050), 'un renseignement'),
      it(E(1053), 'soutenu'),
      it(E(1060), 'une réservation'),
    ], chk(
      'Tu n’as jamais écrit à ce centre sportif. Tu commences par...',
      ['Suite à notre conversation,', 'Je vous écris pour réserver un terrain.', 'En réponse à votre courriel,'], 1,
      "Premier contact : tu dis ton but. EN: first contact, so state your purpose.")),
    grp('Tu continues un échange', [
      it(E(1051), 'après un appel'),
      it(E(1052), 'une réponse'),
      it(E(1057), 'tu as reçu'),
    ], chk(
      'Hier, tu as parlé au téléphone avec la secrétaire. Tu commences par...',
      ['Suite à notre conversation d’hier,', 'Je me permets de vous écrire pour la première fois.'], 0,
      "Suite à : tu rappelles l'échange. EN: suite à recalls the exchange.")),
    ctl('Au sujet de', '« Je vous écris au sujet de ma commande. » Au sujet de veut dire...',
      ['à propos de', 'à cause de', 'malgré'], 0,
      "Au sujet de, à propos de : le sujet du courriel. EN: about."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ouverture'],
};

/** PRACTISE: four ways of hiding the reason. */
const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de cacher la raison',
  errors: [
    {
      wrong: fr(E(1062)),
      right: fr(E(1050)),
      why: "On t'a appris à te présenter d'abord. Dans un courriel, la raison passe avant : ton nom est dans la signature. EN: the reason comes first; your name is in the signature.",
    },
    {
      wrong: 'Suite à notre conversation, je voudrais un renseignement. (premier contact)',
      right: fr(E(1050)),
      why: "Suite à rappelle un échange qui a eu lieu. S'il n'y en a pas, le lecteur cherche. EN: suite à needs a real earlier exchange.",
    },
    {
      wrong: 'Je vous écris pour vous écrire au sujet de quelque chose.',
      right: fr(E(1005)),
      why: "La phrase a l'air polie et ne dit rien. Nomme le sujet : ta commande, ta facture. EN: name the subject.",
    },
    {
      wrong: 'En réponse à votre courriel.',
      right: fr(E(1052)),
      why: "Une phrase sans verbe principal, et sans date. Donne la date, et dis ce que tu fais. EN: give the date and say what you are doing.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ouverture'],
};

/** USE: the first line of your own email. */
const A4_MISSION = pourTaMission('a4-mission', 'Ta première phrase', [
  grp('Ta réclamation', [
    it(E(1005), 'le sujet'),
    it(E(1096), 'le sujet, précis'),
  ], chk(
    'Ta première phrase à Meubles Boréal ?',
    ['Je m’appelle Alex et j’ai acheté un canapé.', 'Je vous écris au sujet de ma commande 4821.', 'Bonjour, ça va ?'], 1,
    "Le sujet, et le numéro. EN: the subject and the number.")),
  grp('Ta demande à la ville', [
    it(E(1174), 'le but, avec afin de'),
  ], chk(
    'Ta première phrase au service de la circulation ?',
    ['Je vous écris afin de demander un permis de stationnement.', 'Suite à notre conversation, voici ma demande.'], 0,
    "Premier contact : le but tout de suite. EN: first contact, purpose at once.")),
], ['ouverture']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La place', 'Où dis-tu pourquoi tu écris ?',
    ['dans la première phrase', 'à la fin, avant Cordialement'], 0,
    "Juste après la formule d'appel. EN: right after the greeting."),
  ctl('Suite à', '« Suite à notre conversation » suppose...',
    ['un échange avant', 'un premier contact'], 0,
    "Il y a eu un appel, une réunion. EN: there was an earlier exchange."),
  ctl('Le but', '« Je vous écris afin de réserver une salle. » Afin de dit...',
    ['la cause', 'le but', 'le temps'], 1,
    "Afin de, pour : le but. EN: purpose."),
], ['ouverture']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La première phrase',
    opener: {
      line: "Ton lecteur lit la première phrase, puis décide : ici tu y mets la raison de ton courriel. EN: Your reader reads the first sentence, then decides: here you put your reason there.",
      imageRef: 'lessons/courriels-lettres/act04.jpg',
    },
    sections: [],
    milestone: "Ta première phrase dit pourquoi tu écris, avec pour, afin de, suite à ou en réponse à. EN: Your first sentence says why you are writing.",
    estScreens: 34, restPoints: ['a4-debuts'],
  },
  sections: [A4_ECOUTE, A4_DEBUTS, A4_CHOISIR, A4_ERREURS, A4_MISSION, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: INVITER ET RÉPONDRE
 *
 *  Exam type 1. MEET: an invitation and two replies. NOTICE: invite,
 *  accept, decline, and the feeling (lesson 16 quoted: que + subjunctive
 *  for two subjects, de + infinitive for one; lesson 5's future for « je
 *  serai »). PRACTISE: sort; the subjunctive or infinitive trap. USE: a
 *  short role play.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le pot de départ de Michel',
  frSub: 'Une invitation, deux réponses',
  text: INVITATION_TEXT,
  glossary: [
    { word: 'pot de départ', en: 'farewell drinks', note: 'Une petite fête au travail pour quelqu’un qui part.' },
    { word: 'prend sa retraite', en: 'is retiring', note: 'Il arrête de travailler, à la fin de sa carrière.' },
    { word: 'confirmer votre présence', en: 'confirm you will come', note: 'Dire si tu viens ou non.' },
    { word: 'transmettre', en: 'to pass on', note: 'Donner un message de ta part à quelqu’un.' },
    { word: 'vœux', en: 'good wishes', note: 'Ce que tu souhaites à quelqu’un : bonheur, santé.' },
  ],
  questions: [
    { q: 'Que demande Sophie à la fin de son invitation ?', a: 'De confirmer sa présence avant le 7 juin.' },
    { q: 'Awa accepte. Quels mots le disent ?', a: '« Je serai ravie de venir. » Et elle ajoute un sentiment : « Je suis contente que vous organisiez cette fête. »' },
    { q: 'Marc refuse. Comment son refus reste-t-il aimable ?', a: 'Il remercie, il donne une raison (une formation à Ottawa), il dit son regret, et il envoie ses vœux à Michel.' },
    { q: 'Pourquoi « que vous organisiez » mais « de ne pas pouvoir » ?', a: 'Deux sujets (je, vous) : que + subjonctif. Un seul sujet (je) : de + infinitif.' },
  ],
  audio: REC('rec-b1-39-invitation'),
  say: REFRAME,
  terms: ['genre', 'demande'],
};

/** NOTICE: invite, accept, decline, and say how you feel. */
const A5_REPONDRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-repondre',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-types',
  title: 'Inviter, accepter, refuser',
  frSub: 'Le premier type de texte',
  hint: 'Quatre cartes : une invitation et ses réponses.',
  audio: REC('rec-b1-39-repondre'),
  say: REFRAME,
  terms: ['genre'],
  cards: [
    {
      head: 'Inviter', label: 'quoi, quand, où, et une demande',
      fr: fr(E(1065)),
      sub: rsOf(E(1065)),
      body: "Une invitation dit l'événement, la date, l'heure et le lieu. Elle finit par une demande : confirmer ta présence. EN: what, when, where, then a request to reply.",
    },
    {
      head: 'Accepter', label: Cap(FUTUR_REF),
      fr: fr(E(1067)),
      sub: rsOf(E(1067)),
      body: `Merci, oui, et le futur de ${FUTUR_REF} : je serai ravie, j'y serai. EN: thanks, yes, and the future.`,
    },
    {
      head: 'Refuser', label: 'merci, non, une raison, un vœu',
      fr: fr(E(1069)),
      sub: rsOf(E(1069)),
      body: "Remercie, dis non avec malheureusement, donne une raison courte, et propose autre chose ou envoie un vœu. EN: thank, decline, give a short reason, offer something.",
    },
    {
      head: 'Ton sentiment', label: Cap(SUBJ_INF_REF),
      fr: fr(E(1068)),
      sub: rsOf(E(1068)),
      body: `« ${B116_REFRAME} » Contente que vous organisiez : deux sujets. Désolé de ne pas pouvoir : un seul. EN: two subjects take que, one takes de.`,
    },
  ],
};

/** PRACTISE, on the reply lines: yes or no, and how kindly. */
const A5_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-trier',
  layer: 'core',
  size: 'lg',
  title: 'Oui, ou non merci',
  groups: [
    grp('Pour accepter', [
      it(E(1066), 'merci d’abord'),
      it(E(1078), 'le futur'),
      it(E(1073), 'entre amis'),
    ], chk(
      '« Je serai heureux de participer. » est...',
      ['un refus', 'une acceptation'], 1,
      "Je serai heureux : tu viens. EN: you are coming.")),
    grp('Pour refuser', [
      it(E(1069), 'la raison'),
      it(E(1070), 'le regret'),
      it(E(1077), 'une autre date'),
      it(E(1074), 'entre amis'),
    ], chk(
      'Qu’est-ce qui rend un refus aimable ?',
      ['une raison et un vœu', 'un non très court'], 0,
      "Un non sec sonne froid. Une raison et un vœu le rendent aimable. EN: a reason and a wish soften a no.")),
    ctl('Le registre', '« Désolée, je ne peux pas ce soir-là. » va avec...',
      ['Sophie, pour le pot du bureau', 'une amie, par texto'], 1,
      "Le ne reste, mais le ton est d'amis. Au bureau : Malheureusement, je serai... EN: a friend's tone."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['genre', 'registre'],
};

/** PRACTISE, the trap: que + subjunctive for two subjects, de + infinitive
 *  for one (lessons 14 to 16). */
const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Que, ou de',
  rule: {
    title: 'Compte les sujets',
    body: `« ${B116_REFRAME} » Après que, le subjonctif : ${SUBJ_RANGE_REF}. EN: two subjects, que + subjunctive; one, de + infinitive.`,
  },
  cards: [
    { promptLabel: 'un seul sujet', promptSound: 'Je suis désolé que je ne puisse pas venir.', fr: fr(E(1070)), ipa: ipaOf(E(1070)), tip: "Je suis désolé, je ne peux pas : un seul sujet, donc de. EN: one subject, so de." },
    { promptLabel: 'deux sujets', promptSound: 'Je suis contente que vous organisez cette fête.', fr: fr(E(1068)), ipa: ipaOf(E(1068)), tip: "Après je suis contente que, le subjonctif : organisiez. EN: subjunctive after a feeling." },
    { promptLabel: 'un seul sujet', promptSound: 'Je serai ravie que je vienne.', fr: fr(E(1067)), ipa: ipaOf(E(1067)), tip: "Toi qui es ravie, toi qui viens : de venir. EN: same subject, de + infinitive." },
    { promptLabel: 'deux sujets', promptSound: 'Je suis désolé que vous devez reporter la réunion.', fr: fr(E(1130)), ipa: ipaOf(E(1130)), tip: "Désolé que : le subjonctif, deviez. EN: subjunctive." },
    { promptLabel: 'un seul sujet', promptSound: 'Je regrette que je ne vous aie pas prévenu.', fr: fr(E(1138)), ipa: ipaOf(E(1138)), tip: "Un seul sujet : de ne pas vous avoir prévenu. EN: one subject." },
    { promptLabel: 'deux sujets', promptSound: 'Je suis désolée que tu as attendu pour rien.', fr: fr(E(1141)), ipa: ipaOf(E(1141)), tip: "Deux sujets, un sentiment : que tu aies attendu. EN: two subjects, subjunctive." },
  ],
  drill: [
    { promptSay: 'Je suis ravi ... vous veniez.', opts: ['que', 'de'], correct: 0 },
    { promptSay: 'Je suis désolée ... ne pas pouvoir venir.', opts: ['que', 'de'], correct: 1 },
    { promptSay: 'Je suis content que tu ... là.', opts: ['es', 'sois'], correct: 1 },
    { promptSay: 'Nous sommes heureux ... participer.', opts: ['de', 'que'], correct: 0 },
    { promptSay: 'Je regrette que vous ne ... pas venir.', opts: ['pouvez', 'puissiez'], correct: 1 },
    { promptSay: 'Je serai ravie ... venir.', opts: ['de', 'que je'], correct: 0 },
    { promptSay: 'Je suis contente que vous ... cette fête.', opts: ['organisez', 'organisiez'], correct: 1 },
    { promptSay: 'Je suis désolé ... vous deviez attendre.', opts: ['que', 'de'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Compte les sujets' },
    { label: 'Six cartes', kind: 'cards', title: 'Que ou de, dans une réponse' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-39-piege-que-de'),
  say: REFRAME,
  terms: ['genre'],
};

/** USE: say your feeling, as your formal email will. */
const A5_MISSION: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a5-mission',
  layer: 'core',
  title: 'Pour ta mission',
  setting: 'Sophie te croise dans le couloir. Réponds à son invitation, puis dis ce que tu ressens, avec que ou avec de.',
  turns: [
    {
      ai: 'Tu as vu mon courriel ? Tu viens au pot de Michel vendredi ?',
      en: 'Did you see my email? Are you coming to Michel’s drinks on Friday?',
      user: 'Oui, merci pour l’invitation. Je serai ravie de venir.',
      userEn: 'Yes, thanks for the invitation. I will be delighted to come. (Thanks, yes, and the future.)',
      alts: [
        { fr: 'Avec plaisir, j’y serai.', en: 'With pleasure, I will be there. (Warmer, fine with a colleague you know.)' },
        { fr: 'Oui, je viendrai, merci.', en: 'Yes, I will come, thanks.' },
      ],
    },
    {
      ai: 'Super. Et Karim, tu sais s’il vient ?',
      en: 'Great. And Karim, do you know if he is coming?',
      user: 'Il est désolé de ne pas pouvoir venir : il sera à Ottawa.',
      userEn: 'He is sorry he cannot come: he will be in Ottawa. (One subject: de + infinitive.)',
      alts: [
        { fr: 'Non, malheureusement, il sera en formation ce jour-là.', en: 'No, unfortunately, he will be on a course that day.' },
        { fr: 'Il ne peut pas venir, il regrette beaucoup.', en: 'He cannot come; he is very sorry.' },
      ],
    },
    {
      ai: 'Dommage. Tu écris un mot pour Michel dans la carte ?',
      en: 'Too bad. Will you write a note for Michel in the card?',
      user: 'Oui : je suis contente que tu profites enfin de ta retraite.',
      userEn: 'Yes: I am glad you are finally enjoying your retirement. (Two subjects: que + subjunctive.)',
      alts: [
        { fr: 'Oui : je suis heureuse que tu aies du temps pour toi.', en: 'Yes: I am happy you have time for yourself. (Two subjects: subjunctive.)' },
        { fr: 'Oui : je suis triste de te voir partir.', en: 'Yes: I am sad to see you go. (One subject for triste: de + infinitive.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['genre'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('L’invitation', 'Une invitation finit souvent par...',
    ['une demande de réponse', 'une excuse'], 0,
    "Confirmer ta présence avant une date. EN: a request to reply by a date."),
  ctl('Le refus', 'Un refus aimable contient...',
    ['non, et rien d’autre', 'merci, non, une raison et un vœu'], 1,
    "Quatre petits morceaux. EN: four small pieces."),
  ctl('Le sentiment', '« Je suis content que vous ... » : quel mode ?',
    ['l’indicatif', 'le subjonctif', 'l’infinitif'], 1,
    "Deux sujets après un sentiment : le subjonctif. EN: subjunctive."),
], ['genre']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Inviter et répondre',
    opener: {
      line: "Un pot de départ, deux réponses : ici tu acceptes ou tu refuses, et tu dis ce que tu ressens. EN: Farewell drinks, two replies: here you accept or decline, and say how you feel.",
      imageRef: 'lessons/courriels-lettres/act05.jpg',
    },
    sections: [],
    milestone: "Tu réponds à une invitation, oui ou non, avec une raison et un sentiment bien construit. EN: You can reply to an invitation, yes or no, with a reason and a well-built feeling.",
    estScreens: 38, restPoints: ['a5-repondre', 'a5-piege'],
  },
  sections: [A5_LECTURE, A5_REPONDRE, A5_TRIER, A5_PIEGE, A5_MISSION, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: DEMANDER UN RENSEIGNEMENT
 *
 *  Exam type 2. MEET: Karim writes to a municipal day camp. NOTICE: the
 *  indirect question (lesson 19) and the polite conditional (lesson 9,
 *  reframe quoted). PRACTISE: turn a direct question into a request; four
 *  slips. USE: the request lines of your email.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le camp de jour',
  frSub: 'Karim demande trois choses',
  text: RENSEIGNEMENT_TEXT,
  glossary: [
    { word: 'camp de jour', en: 'day camp (Québec)', note: 'Des activités pour les enfants l’été, la journée. Québec.' },
    { word: 'renseignements', en: 'information', note: 'Des informations précises : prix, dates, horaires.' },
    { word: 'tarifs', en: 'prices, rates', note: 'Les prix d’un service.' },
    { word: 'horaires', en: 'times, schedule', note: 'Les heures de début et de fin.' },
    { word: 'service de garde', en: 'before- and after-care (Québec)', note: 'On garde les enfants avant ou après le camp. Québec.' },
  ],
  questions: [
    { q: 'Karim demande combien de renseignements ?', a: 'Trois : s’il reste des places, les tarifs et les horaires, et s’il y a un service de garde.' },
    { q: 'Comment chaque question est-elle construite ?', a: '« Je voudrais savoir si », « Pourriez-vous m’indiquer », « J’aimerais aussi savoir si » : des questions indirectes, au conditionnel.' },
    { q: 'Karim dit pourquoi il écrit. Où ?', a: 'Dans la première phrase : « pour obtenir des renseignements sur le camp de jour d’été ».' },
    { q: 'Pourquoi parle-t-il de sa fille et de son arrivée ?', a: 'Pour que le service comprenne sa situation : l’âge compte pour le camp.' },
  ],
  audio: REC('rec-b1-39-renseignement'),
  say: REFRAME,
  terms: ['genre', 'demande'],
};

/** NOTICE: from the spoken question to the written request. */
const A6_QUESTIONS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-questions',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-types',
  title: 'De la question à la demande',
  frSub: 'Le deuxième type de texte',
  hint: 'Quatre cartes, de l’oral au courriel.',
  audio: REC('rec-b1-39-questions'),
  say: REFRAME,
  terms: ['demande', 'registre'],
  cards: [
    {
      head: 'La question directe', label: 'entre amis, à l’oral',
      fr: fr(E(1087)),
      sub: rsOf(E(1087)),
      body: "Au guichet ou entre amis, elle passe très bien. Dans un courriel à un service, elle sonne brusque. EN: fine at a counter, abrupt in an email to a service.",
    },
    {
      head: 'Je voudrais savoir si', label: Cap(DISCOURS_REF),
      fr: fr(E(1080)),
      sub: rsOf(E(1080)),
      body: `La question devient indirecte, comme dans ${DISCOURS_REF} : si, quand, combien. Pas d'inversion, pas de point d'interrogation. EN: an indirect question, with no inversion.`,
    },
    {
      head: "Pourriez-vous m'indiquer", label: Cap(POLITESSE_REF),
      fr: fr(E(1081)),
      sub: rsOf(E(1081)),
      body: `« ${B109_REFRAME} » Un service que tu ne connais pas : le conditionnel. EN: the conditional, for a service you do not know.`,
    },
    {
      head: 'Une question par phrase', label: 'trois questions, trois phrases',
      fr: fr(E(1082)),
      sub: rsOf(E(1082)),
      body: "Une demande par phrase, reliée par aussi ou enfin. Le service répond point par point. EN: one request per sentence, so each gets an answer.",
    },
  ],
};

/** PRACTISE, on new questions: make them requests. */
const A6_TRANSFORMER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-transformer',
  layer: 'core',
  size: 'lg',
  title: 'Transforme la question',
  groups: [
    grp('Si, quand, combien', [
      it(E(1080), 'oui ou non : si'),
      it(E(1084), 'le moment : quand'),
      it(E(1085), 'le prix : combien'),
    ], chk(
      '« Est-ce qu’il reste des places ? » devient...',
      ['Je voudrais savoir est-ce qu’il reste des places.', 'Je voudrais savoir s’il reste des places.'], 1,
      "Oui ou non : si. Est-ce que disparaît. EN: yes or no becomes si.")),
    grp('Du courant au soutenu', [
      it(E(1081), 'courant et poli'),
      it('fr.b1.projets-et-futur.709', 'soigné'),
      it(E(1086), 'soutenu'),
    ], chk(
      'Laquelle est la plus soutenue ?',
      ['Vous pouvez m’envoyer le formulaire ?', fr(E(1086)), fr(E(1081))], 1,
      "Auriez-vous l'amabilité de : très soigné, pour une lettre. EN: very formal.")),
    ctl('L’inversion', '« Le camp commence-t-il le premier juillet ? » est...',
      ['une question soignée, par inversion', 'une faute'], 0,
      "Correct et soigné : le verbe, puis -t-il. EN: correct and careful."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['demande'],
};

/** PRACTISE: four slips in a written request. */
const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre demandes qui accrochent',
  errors: [
    {
      wrong: 'Je voudrais savoir est-ce que des places sont disponibles.',
      right: fr(E(1080)),
      why: "Normal : est-ce que marche dans une question directe. Après savoir, la question devient indirecte : si. EN: after savoir, use si.",
    },
    {
      wrong: 'Je veux savoir les tarifs.',
      right: fr(E(1081)),
      why: "Je veux est clair entre amis. À un service, il sonne comme un ordre : le conditionnel adoucit. EN: je veux sounds like an order.",
    },
    {
      wrong: 'Je voudrais savoir quand commence-t-il.',
      right: fr(E(1084)),
      why: "L'inversion est juste dans une question directe. Dans une question indirecte, l'ordre reste normal. EN: no inversion in an indirect question.",
    },
    {
      wrong: 'Les tarifs, les horaires, et il y a un service de garde, et ça commence quand ?',
      right: `${fr(E(1081))} ${fr(E(1082))}`,
      why: "Tout sort d'un coup, comme à l'oral. Une demande par phrase, et le service répond à chacune. EN: one request per sentence.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['demande'],
};

/** USE: the request lines of your email. */
const A6_MISSION = pourTaMission('a6-mission', 'Tes demandes', [
  grp('Ta demande à la ville', [
    it(E(1176), 'quels documents'),
    it(E(1080), 'si'),
  ], chk(
    'Tu veux savoir quels documents fournir. Tu écris...',
    ['Quels documents je dois fournir ?', 'Je souhaiterais savoir quels documents je dois fournir.', 'Je voudrais savoir quels documents dois-je fournir.'], 1,
    "Une question indirecte, au conditionnel, sans inversion. EN: indirect, conditional, no inversion.")),
  ctl('Ta réclamation', 'Tu veux une date de livraison. Tu écris...',
    ['La date de livraison, c’est quand ?', 'Pourriez-vous me confirmer la date de livraison ?'], 1,
    "Le conditionnel, pour un service. EN: the conditional, for a service."),
], ['demande']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Si', '« Je voudrais savoir ... le camp est complet. »',
    ['si', 'est-ce que', 'que'], 0,
    "Oui ou non : si. EN: si for yes or no."),
  ctl('Le conditionnel', 'À un service inconnu, tu écris...',
    ['Je veux les horaires.', 'Pourriez-vous m’indiquer les horaires ?'], 1,
    "Le conditionnel met la bonne distance. EN: the conditional sets the right distance."),
  ctl('Le nombre', 'Trois renseignements, c’est...',
    ['une phrase', 'trois phrases'], 1,
    "Une demande par phrase. EN: one request per sentence."),
], ['demande']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Demander un renseignement',
    opener: {
      line: "Un camp de jour, trois questions : ici tu les écris comme un service aime les lire. EN: A day camp, three questions: here you write them the way a service likes to read them.",
      imageRef: 'lessons/courriels-lettres/act06.jpg',
    },
    sections: [],
    milestone: "Tu demandes un renseignement par écrit : si, quand, combien, au conditionnel, une question par phrase. EN: You can ask for information in writing, one polite indirect question per sentence.",
    estScreens: 34, restPoints: ['a6-questions'],
  },
  sections: [A6_LECTURE, A6_QUESTIONS, A6_TRANSFORMER, A6_ERREURS, A6_MISSION, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: RÉCLAMER
 *
 *  Exam type 3, and the graded task's first situation. MEET: Chantal's
 *  complaint about a bill. NOTICE: the four steps (lesson 3 for the facts,
 *  lesson 32 quoted for « pourtant »). PRACTISE: firm or angry; the anger
 *  trap. USE: the request and the « already done » lines.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La facture de mars',
  frSub: 'Une réclamation, étape par étape',
  text: RECLAMATION_TEXT,
  glossary: [
    { word: 'montant erroné', en: 'wrong amount', note: 'Le prix sur la facture est faux. Soutenu.' },
    { word: "d'abonnement", en: 'subscription, plan', note: 'Le contrat que tu paies chaque mois.' },
    { word: 'réglé', en: 'solved, settled', note: 'Le problème est fini, réparé.' },
    { word: 'la différence', en: 'the difference', note: 'Ce que tu as payé en trop : 52 moins 35.' },
  ],
  questions: [
    { q: 'Quelles sont les étapes de la réclamation ?', a: 'Les faits (le changement d’abonnement), le problème (52 euros), ce qu’elle a déjà fait (deux appels), ce qu’elle demande (corriger et rembourser).' },
    { q: 'Quel mot montre que la facture contredit ce qui était prévu ?', a: '« Pourtant » : 35 euros étaient prévus, la facture dit 52.' },
    { q: 'Chantal est-elle en colère dans son courriel ?', a: 'Elle est ferme, pas en colère : des faits, des chiffres, une demande claire.' },
    { q: 'Que joint-elle, et pourquoi ?', a: 'Une copie de son contrat : c’est la preuve.' },
  ],
  audio: REC('rec-b1-39-reclamation'),
  say: REFRAME,
  terms: ['reclamer', 'demande'],
};

/** NOTICE: the steps of a complaint. The sheet holds the other types. */
const A7_ETAPES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-etapes',
  layer: 'core',
  sheetId: 'sheet-types',
  title: 'Les étapes d’une réclamation',
  cols: ['Étape', 'Ce que tu écris', 'Mot utile'],
  rows: [
    { cells: ['la raison', 'le sujet, tout de suite', 'au sujet de'], say: fr(E(1096)),
      detail: { title: 'La raison', body: "La première phrase dit de quoi tu parles : ta facture, ta commande. EN: the first sentence names the subject.", say: fr(E(1005)) } },
    { cells: ['les faits', 'ce qui s’est passé, avec des dates', 'le 2 mars, j’ai...'], say: fr(E(1103)),
      detail: { title: 'Les faits', body: `Les étapes au passé composé, la situation à l'imparfait, comme dans ${PC_IMP_REF}. Des dates, des chiffres. EN: facts in the right past tenses, with dates.`, say: fr(E(1017)) } },
    { cells: ['le problème', 'ce qui ne va pas', 'pourtant'], say: fr(E(1097)),
      detail: { title: 'Le problème', body: `« ${B132_REFRAME} » Pourtant met le problème en face de ce qui était prévu. EN: pourtant sets the problem against what was expected.`, say: fr(E(1099)) } },
    { cells: ['déjà fait', 'ce que tu as essayé', 'déjà'], say: fr(E(1098)),
      detail: { title: 'Ce que tu as déjà fait', body: "Un appel, un premier courriel : le lecteur voit que tu as été patient. EN: show you have already tried.", say: fr('fr.b1.negation-et-restriction.1189') } },
    { cells: ['la demande', 'ce que tu veux, précisément', 'donc, je vous demande de'], say: fr(E(1100)),
      detail: { title: 'La demande', body: "Corriger, remplacer, rembourser : un verbe précis, et une date si tu peux. EN: a precise verb, and a date if possible.", say: fr(E(1104)) } },
    { cells: ['la fin', 'la preuve et la formule', 'en pièce jointe'], say: fr(E(1101)),
      detail: { title: 'La fin', body: "La pièce jointe, puis une formule soutenue : c'est une lettre officielle. EN: the attachment, then a formal closing.", say: fr(E(1102)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reclamer', 'genre'],
};

/** PRACTISE, on new lines: firm, not angry. */
const A7_TON: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-ton',
  layer: 'core',
  size: 'lg',
  title: 'Ferme, pas fâché',
  groups: [
    grp('Des phrases fermes et polies', [
      it(E(1106), 'ta déception, calmement'),
      it(E(1104), 'ce que tu veux'),
      it('fr.b1.conseils-et-suggestions.1187', 'soutenu'),
    ], chk(
      'Laquelle garde un ton ferme et poli ?',
      [fr(E(1105)), fr(E(1106))], 1,
      "Ta déception, oui ; l'insulte, non. Le lecteur n'est pas l'auteur du problème. EN: disappointment yes, insults no.")),
    grp('Les faits avant la demande', [
      it(E(1103), 'un fait, avec le jour'),
      it(E(1098), 'déjà fait'),
      it('fr.b1.negation-et-restriction.1189', 'le résultat'),
    ], chk(
      'Dans une réclamation, les faits viennent...',
      ['avant la demande', 'après la formule de politesse'], 0,
      "Les faits d'abord : ils justifient la demande. EN: facts first, they justify the request.")),
    ctl('Le mot', '« Je vous demande donc de corriger cette facture. » Donc montre...',
      ['une conséquence', 'une opposition'], 0,
      `Donc : à cause des faits, voici ta demande. C'est ${SUBORD_REF}. EN: donc marks the consequence.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reclamer'],
};

/** PRACTISE, the trap: anger and vagueness, rewritten as firm facts. */
const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'La colère ne répare rien',
  rule: {
    title: 'Des faits, une demande, pas d’insulte',
    body: "La personne qui lit n'a pas cassé ton canapé. Elle peut t'aider si tu lui donnes des faits, une preuve et une demande. EN: the reader did not cause it; facts, proof and a request let them help.",
  },
  cards: [
    { promptLabel: 'la colère', promptSound: fr(E(1105)), fr: fr(E(1106)), ipa: ipaOf(E(1106)), tip: "Dis ta déception, pas une insulte. EN: disappointment, not an insult." },
    { promptLabel: 'une menace', promptSound: 'Si ce n’est pas réglé, vous allez voir.', fr: fr(E(1100)), ipa: ipaOf(E(1100)), tip: "Une demande claire vaut mieux qu'une menace. EN: a clear request beats a threat." },
    { promptLabel: 'un fait sans date', promptSound: 'Votre livraison n’est jamais arrivée.', fr: fr(E(1103)), ipa: ipaOf(E(1103)), tip: "Le jour prévu aide le service à trouver ta commande. EN: the date helps them find it." },
    { promptLabel: 'une demande floue', promptSound: 'Faites quelque chose.', fr: fr(E(1104)), ipa: ipaOf(E(1104)), tip: "Quelque chose, c'est quoi ? Nomme-le : rembourser. EN: name the action." },
    { promptLabel: 'rien d’essayé', promptSound: 'Personne ne fait jamais rien chez vous.', fr: fr(E(1098)), ipa: ipaOf(E(1098)), tip: "Dis ce que tu as fait, pas ce qu'ils ne font pas. EN: say what you did." },
    { promptLabel: 'la preuve oubliée', promptSound: 'Croyez-moi, j’ai un contrat.', fr: fr(E(1101)), ipa: ipaOf(E(1101)), tip: "Joins-le : la preuve remplace la confiance. EN: attach the proof." },
  ],
  drill: [
    { promptSay: 'Dans une réclamation : « Je suis très ... par votre service. »', opts: ['déçue', 'furieuse, c’est nul'], correct: 0 },
    { promptSay: '« Je vous demande donc de ... cette facture. »', opts: ['faire quelque chose pour', 'corriger'], correct: 1 },
    { promptSay: '« J’ai ... appelé votre service deux fois. »', opts: ['déjà', 'jamais'], correct: 0 },
    { promptSay: '« Vous trouverez en ... une copie de mon contrat. »', opts: ['pièce jointe', 'colère'], correct: 0 },
    { promptSay: '« ... , votre facture indique 52 euros. »', opts: ['Donc', 'Pourtant'], correct: 1 },
    { promptSay: 'Les faits : « Le 2 mars, j’... d’abonnement. »', opts: ['ai changé', 'changeais'], correct: 0 },
    { promptSay: '« Dans l’attente de votre ... , je vous prie d’agréer... »', opts: ['réponse', 'colère'], correct: 0 },
    { promptSay: 'Pour finir une réclamation :', opts: ['Bises', 'Je vous prie d’agréer mes salutations distinguées.'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Des faits, une demande' },
    { label: 'Six cartes', kind: 'cards', title: 'De la colère aux faits' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases fermes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-39-piege-colere'),
  say: REFRAME,
  terms: ['reclamer', 'demande'],
};

/** USE: the « already done » and the request of your complaint. */
const A7_MISSION = pourTaMission('a7-mission', 'Ta réclamation', [
  grp('Ce que tu as déjà fait', [
    it(E(1098), 'deux appels'),
  ], chk(
    'Tu as écrit au service le 4 mars, sans réponse. Tu écris...',
    ['Vous ne répondez jamais.', 'J’ai écrit à votre service le 4 mars, mais je n’ai reçu aucune réponse.'], 1,
    "Un fait daté, sans reproche. EN: a dated fact, no blame.")),
  grp('Ce que tu demandes', [
    it(E(1100), 'donc'),
    it(E(1019), 'un remplacement'),
  ], chk(
    'Ta phrase de demande ?',
    ['C’est inacceptable.', 'J’espère que vous allez réagir.', 'Je vous demande donc de remplacer le canapé avant la fin du mois.'], 2,
    "Un verbe précis et une date. EN: a precise verb and a date.")),
], ['reclamer', 'demande']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Les étapes', 'Dans une réclamation, après les faits et le problème...',
    ['ce que tu as déjà fait, puis ta demande', 'une blague, puis Bises'], 0,
    "Déjà fait, puis la demande. EN: what you did, then what you want."),
  ctl('Le ton', 'Ta réclamation doit être...',
    ['ferme et polie', 'en colère, pour qu’on te prenne au sérieux'], 0,
    "Des faits et une preuve : ça, on le prend au sérieux. EN: facts and proof get taken seriously."),
  ctl('Pourtant', '« J’ai payé. Pourtant, je n’ai rien reçu. » Pourtant dit...',
    ['une conséquence', 'une surprise contre ce qui était prévu'], 1,
    "Ce qui arrive contredit ce qui était prévu. EN: it contradicts what was expected."),
], ['reclamer']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Réclamer',
    opener: {
      line: "Une facture fausse, un courriel ferme : ici tu réclames sans colère, et on te répond. EN: A wrong bill, a firm email: here you complain without anger, and get an answer.",
      imageRef: 'lessons/courriels-lettres/act07.jpg',
    },
    sections: [],
    milestone: "Tu écris une réclamation en quatre étapes : les faits, le problème, ce que tu as fait, ce que tu demandes. EN: You can write a four-step complaint.",
    estScreens: 40, restPoints: ['a7-etapes', 'a7-piege'],
  },
  sections: [A7_LECTURE, A7_ETAPES, A7_TON, A7_PIEGE, A7_MISSION, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: DONNER DES NOUVELLES
 *
 *  Exam type 4. MEET: Awa writes from Dakar to the teacher she stayed with
 *  in Lyon. NOTICE: telling an event (lesson 3's tenses, lesson 30's order
 *  words). PRACTISE: order and tense; a dictation. USE: tell your sofa
 *  story in order, out loud.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Des nouvelles de Dakar',
  frSub: 'Awa écrit à Mme Lefèvre',
  text: NOUVELLES_TEXT,
  glossary: [
    { word: 'agence de voyages', en: 'travel agency', note: 'Une entreprise qui organise des voyages.' },
    { word: 'Saint-Louis', en: 'Saint-Louis (Senegal)', note: 'Une ville du nord du Sénégal, au bord du fleuve.' },
    { word: 'inscrite', en: 'signed up', note: 'Je me suis inscrite : j’ai donné mon nom pour un cours.' },
    { word: 'Bien amicalement', en: 'warm regards', note: 'Une fin chaleureuse et polie, avec vous.' },
  ],
  questions: [
    { q: 'Pourquoi Awa écrit-elle ?', a: 'Pour donner de ses nouvelles : elle le dit dans la première phrase.' },
    { q: 'Quels mots donnent l’ordre des étapes ?', a: 'D’abord, au début, ensuite, le mois dernier, enfin.' },
    { q: 'Trouve deux verbes du décor, à l’imparfait.', a: 'c’était difficile, je ne connaissais personne, il faisait très chaud.' },
    { q: 'Comment Awa finit-elle, avant la signature ?', a: 'Par une pensée et une question pour Mme Lefèvre : « Et vous, comment allez-vous ? »' },
  ],
  audio: REC('rec-b1-39-nouvelles'),
  say: REFRAME,
  terms: ['genre', 'connecteur'],
};

/** NOTICE: four things a news email does. */
const A8_RECIT: Sec<'focus'> = {
  type: 'focus',
  id: 'a8-recit',
  layer: 'core',
  sheetId: 'sheet-types',
  title: 'Raconter dans un courriel',
  points: [
    "Dis pourquoi tu écris : pour donner de tes nouvelles, pour raconter une journée. EN: say why you are writing.",
    `Raconte dans l'ordre : d'abord, ensuite, enfin, avec les mots de ${COORD_REF}. EN: tell it in order.`,
    `Le décor à l'imparfait, les étapes au passé composé : c'est ${PC_IMP_REF}. EN: imparfait for the setting, passé composé for the steps.`,
    'Finis par ton lecteur : une pensée, une question, un vœu. EN: end with your reader.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['genre', 'connecteur'],
};

/** PRACTISE, on the story's lines: order and tense. */
const A8_ORDRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-ordre',
  layer: 'core',
  size: 'lg',
  title: 'Dans l’ordre, au bon temps',
  groups: [
    grp('Trois étapes', [
      it(E(1116), 'la première'),
      it(E(1118), 'la deuxième'),
      it(E(1124), 'la dernière'),
    ], chk(
      'Quel mot annonce la dernière étape ?',
      ["d'abord", 'enfin', 'ensuite'], 1,
      "Enfin : la dernière chose. EN: finally, the last thing.")),
    grp('Le décor et les étapes', [
      it(E(1117), 'le décor'),
      it(E(1119), 'une étape'),
      it(E(1123), 'une étape, malgré un problème'),
    ], chk(
      '« c’était difficile, je ne connaissais personne » : pourquoi l’imparfait ?',
      ['C’est une étape finie.', 'C’est le décor, la situation.'], 1,
      "L'imparfait pose la situation. EN: the imparfait sets the situation.")),
    ctl('La fin', 'Awa finit par « Et vous, comment allez-vous ? ». Pourquoi ?',
      ['pour tourner le courriel vers sa lectrice', 'parce qu’elle a oublié une nouvelle'], 0,
      "Un courriel de nouvelles finit par l'autre. EN: news ends with the reader."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur'],
};

const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a8-dictee',
  layer: 'core',
  title: 'Écris les nouvelles d’Awa',
  frSub: 'Trois phrases du courriel',
  itemIds: dicteeFor(8),
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur'],
};

/** USE: tell the sofa story in order, out loud. */
const A8_MISSION: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a8-mission',
  layer: 'core',
  title: 'Pour ta mission',
  setting: 'Ta voisine, Mme Pelletier, te demande des nouvelles de ton canapé. Raconte dans l’ordre : ce sont les faits de ta réclamation.',
  turns: [
    {
      ai: 'Alors, ce fameux canapé, il est arrivé ?',
      en: 'So, did that famous sofa arrive?',
      user: 'Oui, mardi. D’abord, j’ai ouvert le carton : un pied était cassé.',
      userEn: 'Yes, on Tuesday. First, I opened the box: a leg was broken. (A step in the passé composé, the state in the imparfait.)',
      alts: [
        { fr: 'Oui, mardi, mais un pied était cassé.', en: 'Yes, on Tuesday, but a leg was broken.' },
        { fr: 'Il est arrivé mardi, avec un pied cassé.', en: 'It came on Tuesday, with a broken leg.' },
      ],
    },
    {
      ai: 'Oh non. Et qu’est-ce que tu as fait ?',
      en: 'Oh no. And what did you do?',
      user: 'Ensuite, j’ai écrit au service, mais je n’ai rien demandé.',
      userEn: 'Then I wrote to customer service, but I did not ask for anything. (Ensuite: the next step.)',
      alts: [
        { fr: 'Ensuite, j’ai envoyé un courriel, un peu trop vite.', en: 'Then I sent an email, a bit too fast.' },
        { fr: 'J’ai écrit au magasin le soir même.', en: 'I wrote to the shop that same evening.' },
      ],
    },
    {
      ai: 'Et maintenant, c’est réglé ?',
      en: 'And now, is it sorted?',
      user: 'Enfin, j’ai réécrit avec une demande claire : ils livrent un autre canapé jeudi.',
      userEn: 'Finally, I wrote again with a clear request: they are delivering another sofa on Thursday. (Enfin: the last step.)',
      alts: [
        { fr: 'Oui : j’ai demandé un remplacement, et il arrive jeudi.', en: 'Yes: I asked for a replacement, and it comes on Thursday.' },
        { fr: 'Presque : un nouveau canapé arrive jeudi.', en: 'Almost: a new sofa comes on Thursday.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur', 'genre'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('L’ordre', 'D’abord, ensuite, enfin : ces mots...',
    ['donnent l’ordre des étapes', 'donnent une opinion'], 0,
    "Ils guident le lecteur dans le temps. EN: they guide the reader through time."),
  ctl('Les temps', 'La situation, le décor : quel temps ?',
    ['le passé composé', 'l’imparfait', 'le futur'], 1,
    "L'imparfait pour le décor. EN: imparfait for the setting."),
  ctl('La fin', 'Un courriel de nouvelles à une personne que tu vouvoies finit par...',
    ['Bien amicalement', 'Salutations distinguées'], 0,
    "Chaleureux et poli, avec vous. EN: warm and polite."),
], ['genre', 'connecteur']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Donner des nouvelles',
    opener: {
      line: "Awa écrit de Dakar à Lyon : ici tu racontes un événement dans l'ordre, avec les bons temps. EN: Awa writes from Dakar to Lyon: here you tell an event in order, in the right tenses.",
      imageRef: 'lessons/courriels-lettres/act08.jpg',
    },
    sections: [],
    milestone: "Tu racontes des nouvelles dans un courriel : dans l'ordre, le décor à l'imparfait, et une fin tournée vers ton lecteur. EN: You can tell news in order, with the right tenses and an ending for your reader.",
    estScreens: 34, restPoints: ['a8-recit'],
  },
  sections: [A8_LECTURE, A8_RECIT, A8_ORDRE, A8_DICTEE, A8_MISSION, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: S'EXCUSER
 *
 *  MEET by ear: Julien apologises for a missed meeting. NOTICE: own it,
 *  explain in one sentence, repair (lesson 15 for « désolé que »).
 *  PRACTISE: que or de; four apologies that miss. USE: thank and
 *  acknowledge in your own email.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Les excuses de Julien',
  frSub: 'Écoute les trois temps',
  lines: [
    ln(E(1128)), ln(E(1129)), ln(E(1137)), ln(E(1130)), ln(E(1131)),
    ln(E(1132)), ln(E(1133)), ln(E(1138)), ln(E(1134)),
  ],
  questions: [
    { q: 'Pourquoi Julien s’excuse-t-il ?', opts: ['pour une erreur de facture', 'pour son absence à une réunion', 'pour un retard de paiement'], correct: 1, why: "Il n'est pas venu à la réunion. EN: he missed the meeting." },
    { q: 'Son explication est-elle longue ?', opts: ['Non : une phrase, un empêchement.', 'Oui : toute sa journée.'], correct: 0, why: "Une phrase suffit. EN: one sentence is enough." },
    { q: 'Que propose-t-il pour réparer ?', opts: ['un cadeau', 'un autre rendez-vous et ses notes'], correct: 1, why: "Il répare : une nouvelle date, ses notes le soir même. EN: a new date and his notes." },
    { q: 'Promet-il quelque chose pour l’avenir ?', opts: ['Oui, que ça n’arrivera plus.', 'Non, rien.'], correct: 0, why: "Au futur : ça ne se reproduira pas. EN: it will not happen again." },
    { q: 'Quel registre utilise-t-il ?', opts: ['familier, avec tu', 'courant, avec vous'], correct: 1, why: "Vous, et des phrases soignées : il écrit à sa responsable. EN: vous, to his manager." },
  ],
  audio: REC('rec-b1-39-excuses-ecoute'),
  say: REFRAME,
  terms: ['excuse'],
};

/** NOTICE: the three beats of a written apology. */
const A9_EXCUSES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-excuses',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-types',
  title: 'Reconnaître, expliquer, réparer',
  frSub: 'Le dernier type de texte',
  hint: 'Quatre cartes : trois temps et un regret.',
  audio: REC('rec-b1-39-excuses'),
  say: REFRAME,
  terms: ['excuse'],
  cards: [
    {
      head: 'Reconnaître', label: 'le problème, sans détour',
      fr: fr(E(1128)),
      sub: rsOf(E(1128)),
      body: "Tu nommes ce qui s'est passé, dès la première phrase. Pas de mais. EN: name what happened, first, with no but.",
    },
    {
      head: 'Expliquer', label: 'une phrase, pas plus',
      fr: fr(E(1129)),
      sub: rsOf(E(1129)),
      body: "Une raison courte. Une longue histoire sonne comme une excuse pour ne pas t'excuser. EN: one short reason.",
    },
    {
      head: 'Réparer', label: 'une solution',
      fr: fr(E(1132)),
      sub: rsOf(E(1132)),
      body: "Tu proposes une date, tu envoies tes notes, tu promets que cela ne se reproduira pas. EN: offer a fix.",
    },
    {
      head: 'Le regret', label: Cap(SUBJ_DECL_REF),
      fr: fr(E(1130)),
      sub: rsOf(E(1130)),
      body: `Désolé que + subjonctif quand l'autre subit : ${SUBJ_DECL_REF} range ce sentiment avec les autres. Pour toi-même : désolé de. EN: que + subjunctive for the other person, de for yourself.`,
    },
  ],
};

/** PRACTISE, on new lines: who does the regret fall on? */
const A9_QUE_DE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-que-de',
  layer: 'core',
  size: 'lg',
  title: 'Ton regret, ou le sien',
  groups: [
    grp('Tu regrettes ce que TU as fait', [
      it(E(1138), 'un seul sujet'),
      it(E(1070), 'un seul sujet'),
    ], chk(
      '« Je regrette ... ne pas vous avoir prévenu. »',
      ['que je', 'de'], 1,
      "Toi qui regrettes, toi qui n'as pas prévenu : de. EN: one subject, de.")),
    grp('Tu regrettes ce que L’AUTRE vit', [
      it(E(1130), 'vous devez reporter'),
      it(E(1141), 'tu as attendu'),
      it('fr.b1.opinions-et-avis.1268', 'tu dois attendre'),
    ], chk(
      '« Je suis désolé que vous ... attendre. »',
      ['devez', 'deviez', 'devoir'], 1,
      "Deux sujets après désolé que : le subjonctif. EN: subjunctive.")),
    ctl('Le registre', '« Je te revaudrai ça » va avec...',
      ['ta directrice', 'un ami qui t’a aidé'], 1,
      "Familier, entre amis : je te rendrai ce service. EN: informal, I owe you one."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['excuse'],
};

/** PRACTISE: four apologies that miss. */
const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre excuses qui ratent',
  errors: [
    {
      wrong: 'Je suis désolé, mais ce n’est pas ma faute : le bus était en retard, puis mon téléphone s’est éteint, puis...',
      right: `${fr(E(1128))} ${fr(E(1129))}`,
      why: "Tu veux être compris, c'est normal. Mais le mais annule l'excuse, et la liste la noie. EN: the but cancels the apology.",
    },
    {
      wrong: `À ta directrice : « ${fr(E(1135))} »`,
      right: `À ta directrice : « ${fr(E(1128))} »`,
      why: "C'est ce que tu dirais à un ami, et c'est juste avec lui. À ta directrice, le courant et vous. EN: fine for a friend, not your director.",
    },
    {
      wrong: 'Je m’excuse. (et rien d’autre)',
      right: `${fr(E(1134))} ${fr(E(1132))}`,
      why: "Deux mots, et le lecteur attend la suite : quoi, et comment tu répares. EN: say for what, and how you will fix it.",
    },
    {
      wrong: 'Je suis désolé que je sois en retard.',
      right: 'Je suis désolé d’être en retard.',
      why: "Tu as appris que désolé que prend le subjonctif. Mais avec un seul sujet, c'est de + infinitif. EN: one subject, de + infinitive.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['excuse'],
};

/** USE: acknowledge and thank in your formal email. */
const A9_MISSION = pourTaMission('a9-mission', 'Reconnaître et remercier', [
  grp('Ta demande à la ville', [
    it(E(1183), 'remercier'),
    it(E(1137), 'reconnaître'),
  ], chk(
    'Ta demande est pressée, et le service a beaucoup de travail. Avant la formule de fin, tu écris...',
    ['Merci bcp.', 'Débrouillez-vous.', 'Je vous remercie de votre compréhension.'], 2,
    "Tu reconnais l'effort demandé, et tu remercies. EN: acknowledge and thank.")),
  ctl('Ta réclamation', 'Le service te répond et s’excuse du retard. Tu réponds...',
    ['Je vous remercie de votre réponse.', 'Enfin, ce n’est pas trop tôt.'], 0,
    "Tu restes poli : tu obtiendras plus. EN: stay polite; you will get more."),
], ['excuse', 'formules']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Les trois temps', 'Une excuse écrite...',
    ['explique longtemps, puis s’excuse', 'reconnaît, explique en une phrase, répare'], 1,
    "Trois temps, dans cet ordre. EN: three beats, in that order."),
  ctl('Le mais', '« Je suis désolé, mais... »',
    ['annule souvent l’excuse', 'la rend plus forte'], 0,
    "Le lecteur n'entend plus que la suite. EN: the reader only hears what follows."),
  ctl('Que ou de', '« Je suis désolée ... tu aies attendu. »',
    ['de', 'que'], 1,
    "Deux sujets : que + subjonctif. EN: two subjects, que."),
], ['excuse']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: "S'excuser",
    opener: {
      line: "Une réunion manquée, un courriel à écrire : ici tu t'excuses en trois temps, sans te perdre. EN: A missed meeting, an email to write: here you apologise in three beats.",
      imageRef: 'lessons/courriels-lettres/act09.jpg',
    },
    sections: [],
    milestone: "Tu t'excuses par écrit : tu reconnais, tu expliques en une phrase, tu répares. EN: You can apologise in writing: own it, explain briefly, put it right.",
    estScreens: 34, restPoints: ['a9-excuses'],
  },
  sections: [A9_ECOUTE, A9_EXCUSES, A9_QUE_DE, A9_ERREURS, A9_MISSION, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: RELIER LES IDÉES
 *
 *  MEET: Mélanie's heating complaint, one connector per step. NOTICE: the
 *  connectors of a letter (lessons 30 to 32, lesson 30's reframe quoted).
 *  PRACTISE: pick the link; the spoken chain (et puis, en plus) trap. USE:
 *  the order of your paragraphs.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le chauffage en panne',
  frSub: 'Un connecteur à chaque étape',
  text: PARAGRAPHE_TEXT,
  glossary: [
    { word: 'chauffage', en: 'heating', note: 'Ce qui chauffe l’appartement.' },
    { word: 'radiateurs', en: 'radiators', note: 'Les appareils qui chauffent les pièces.' },
    { word: 'rappelée', en: 'called back', note: 'On ne m’a pas rappelée : personne n’a téléphoné. Rappelée, car Mélanie est une femme.' },
    { word: 'technicien', en: 'repair technician', note: 'La personne qui vient réparer.' },
  ],
  questions: [
    { q: 'Trouve les connecteurs, dans l’ordre.', a: "Tout d'abord, en effet, de plus, cependant, c'est pourquoi, enfin." },
    { q: 'Que fait « en effet » ?', a: 'Il prouve la phrase d’avant : les radiateurs ne marchent plus, la preuve, il fait quinze degrés.' },
    { q: 'Que fait « cependant » ?', a: 'Il oppose : elle a laissé un message, et pourtant personne n’a rappelé.' },
    { q: 'Quel connecteur annonce la demande ?', a: "« C'est pourquoi » : la demande est la conséquence des faits." },
  ],
  audio: REC('rec-b1-39-paragraphe'),
  say: REFRAME,
  terms: ['connecteur'],
};

/** NOTICE: six connectors, one job each. The sheet holds the rest. */
const A10_CONNECTEURS: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a10-connecteurs',
  layer: 'core',
  sheetId: 'sheet-connecteurs',
  title: 'Six connecteurs pour un courriel',
  cols: ['Connecteur', 'Il sert à', 'Leçon'],
  rows: [
    { cells: ["tout d'abord", 'commencer', 'la 30'], say: fr(E(1150)),
      detail: { title: "Tout d'abord", body: `La première étape. Puis ensuite, enfin. ${Cap(COORD_REF)} les range avec les mots d'ordre. EN: the first step.`, say: fr(E(1144)) } },
    { cells: ['en effet', 'prouver, expliquer', 'la 31'], say: fr(E(1151)),
      detail: { title: 'En effet', body: `Il donne la preuve de la phrase d'avant. Il ne remplace pas parce que : ${SUBORD_REF} fait la différence. EN: it proves the previous sentence.`, say: fr(E(1145)) } },
    { cells: ['de plus', 'ajouter', 'la 30'], say: fr(E(1152)),
      detail: { title: 'De plus', body: "Une raison de plus. À l'oral, on dit en plus ; à l'écrit, de plus ou par ailleurs. EN: another reason; en plus is spoken.", say: fr(E(1146)) } },
    { cells: ['cependant', 'opposer', 'la 32'], say: fr('fr.b1.connecteurs-logiques.101'),
      detail: { title: 'Cependant', body: `Un fait contre ce qu'on attendait. ${Cap(CONCESSION_REF)} le met avec pourtant et en revanche. EN: a fact against what was expected.`, say: fr(E(1147)) } },
    { cells: ["c'est pourquoi", 'conclure, demander', 'la 31'], say: fr('fr.b1.connecteurs-logiques.1311'),
      detail: { title: "C'est pourquoi", body: "La conséquence. Dans un courriel, c'est souvent là que vient ta demande. EN: the consequence, often where the request goes.", say: fr(E(1148)) } },
    { cells: ['enfin', 'finir', 'la 30'], say: fr(E(1149)),
      detail: { title: 'Enfin', body: "La dernière étape, ou la dernière demande. Après enfin, on ferme. EN: the last step, then you close.", say: fr(E(1149)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur'],
};

/** PRACTISE, on new sentences: which link? */
const A10_RELIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-relier',
  layer: 'core',
  size: 'lg',
  title: 'Le bon lien',
  groups: [
    grp('Ajouter, ou opposer', [
      it(E(1146), 'ajouter'),
      it(E(1154), 'ajouter'),
      it(E(1147), 'opposer'),
    ], chk(
      '« J’ai laissé un message mardi. ... , personne ne m’a rappelée. »',
      ['De plus', 'Cependant', 'En effet'], 1,
      "Un fait contre ce qu'on attendait : cependant. EN: an opposition.")),
    grp('Prouver, ou conclure', [
      it(E(1145), 'prouver'),
      it(E(1148), 'conclure'),
      it('fr.b1.connecteurs-logiques.1375', 'conclure'),
    ], chk(
      '« Le chauffage ne marche plus. ... , il fait quinze degrés. »',
      ["C'est pourquoi", 'En effet'], 1,
      "La phrase prouve la précédente : en effet. EN: proof, so en effet.")),
    ctl('La place', 'Un connecteur d’étape se met souvent...',
      ['en tête de phrase, suivi d’une virgule', 'à la fin du courriel, après la signature'], 0,
      "En tête : le lecteur voit l'étape avant de la lire. EN: at the head of the sentence."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur'],
};

/** PRACTISE, the trap: the spoken chain carried into writing. */
const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Et puis, en plus, alors',
  rule: {
    title: 'À l’oral on enchaîne, à l’écrit on montre le lien',
    body: `« ${B130_REFRAME} » Et puis et alors relient tout pareil. Dans un courriel, choisis le mot qui dit l'étape. EN: ${B130_REFRAME_EN}`,
  },
  cards: [
    { promptLabel: 'et puis', promptSound: 'Et puis, les radiateurs marchent plus.', fr: fr(E(1144)), ipa: ipaOf(E(1144)), tip: "La première étape : tout d'abord. Et le ne revient. EN: the first step, and ne comes back." },
    { promptLabel: 'en plus', promptSound: 'En plus, ma fille est malade.', fr: fr(E(1146)), ipa: ipaOf(E(1146)), tip: "En plus est oral. À l'écrit : de plus. EN: en plus is spoken." },
    { promptLabel: 'mais', promptSound: 'Mais personne m’a rappelée.', fr: fr(E(1147)), ipa: ipaOf(E(1147)), tip: "En tête de phrase, cependant. Et le ne. EN: cependant at the head." },
    { promptLabel: 'alors', promptSound: 'Alors je veux un technicien.', fr: fr(E(1148)), ipa: ipaOf(E(1148)), tip: "La conséquence, et une demande polie. EN: the consequence, politely." },
    { promptLabel: 'parce que, seul', promptSound: 'Parce que la température est à quinze degrés.', fr: fr(E(1145)), ipa: ipaOf(E(1145)), tip: "Parce que seul laisse la phrase sans verbe principal. Pour prouver : en effet. EN: use en effet." },
    { promptLabel: 'et aussi', promptSound: 'Et aussi, l’eau chaude coule mal.', fr: fr(E(1154)), ipa: ipaOf(E(1154)), tip: "Une autre raison : par ailleurs, ou de plus. EN: another point." },
  ],
  drill: [
    { promptSay: '« ... , les radiateurs ne fonctionnent plus. »', opts: ["Tout d'abord", 'Et puis'], correct: 0 },
    { promptSay: '« ... , ma fille est malade. » (une raison de plus)', opts: ['En plus', 'De plus'], correct: 1 },
    { promptSay: '« J’ai appelé. ... , personne n’a répondu. »', opts: ['Cependant', 'En effet'], correct: 0 },
    { promptSay: '« ... je vous demande d’envoyer un technicien. »', opts: ['Alors', "C'est pourquoi"], correct: 1 },
    { promptSay: '« Il fait froid. ... , il fait quinze degrés. »', opts: ['En effet', 'Cependant'], correct: 0 },
    { promptSay: '« ... , pourriez-vous me confirmer l’heure ? » (la dernière demande)', opts: ['Enfin', 'Tout d’abord'], correct: 0 },
    { promptSay: '« ... , l’eau chaude coule mal. » (un autre point)', opts: ['Et aussi', 'Par ailleurs'], correct: 1 },
    { promptSay: '« La route était glacée, ... j’ai pris le train. »', opts: ["c'est pourquoi", 'en effet'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Montre le lien' },
    { label: 'Six cartes', kind: 'cards', title: 'De l’oral à l’écrit' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases écrites' },
    { label: 'À toi', kind: 'drill', title: 'Huit liens', gate: true },
  ],
  audio: REC('rec-b1-39-piege-connecteurs'),
  say: REFRAME,
  terms: ['connecteur'],
};

/** USE: the order of your paragraphs. */
const A10_MISSION = pourTaMission('a10-mission', 'L’ordre de tes paragraphes', [
  grp('Ta réclamation, étape par étape', [
    it(E(1144), 'les faits'),
    it(E(1147), 'ce qui n’a pas marché'),
    it(E(1148), 'la demande'),
  ], chk(
    'Ta demande vient après...',
    ["C'est pourquoi", 'Tout d’abord', 'En effet'], 0,
    "La demande est la conséquence des faits. EN: the request follows from the facts.")),
  ctl('Ta demande à la ville', 'Tu donnes une deuxième raison pour ton permis. Tu commences par...',
    ['Cependant,', 'De plus,'], 1,
    "Une raison de plus : de plus. EN: another reason."),
], ['connecteur']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le rôle', '« Cependant » sert à...',
    ['ajouter', 'opposer', 'conclure'], 1,
    "Un fait contre ce qu'on attendait. EN: to oppose."),
  ctl('L’écrit', 'Dans un courriel, « en plus » devient...',
    ['de plus', 'et puis'], 0,
    "De plus, ou par ailleurs. EN: de plus."),
  ctl('Le paragraphe', 'Un paragraphe, c’est...',
    ['une idée', 'tout le courriel'], 0,
    "Une idée, puis un saut de ligne. EN: one idea, then a line break."),
], ['connecteur']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Relier les idées',
    opener: {
      line: "Tout d'abord, cependant, c'est pourquoi : ici chaque étape de ton courriel a son panneau. EN: First, however, that is why: here each step of your email gets its signpost.",
      imageRef: 'lessons/courriels-lettres/act10.jpg',
    },
    sections: [],
    milestone: "Tu organises ton courriel en paragraphes, avec un connecteur écrit en tête de chaque étape. EN: You organise your email in paragraphs, with a written connector heading each step.",
    estScreens: 38, restPoints: ['a10-connecteurs', 'a10-piege'],
  },
  sections: [A10_LECTURE, A10_CONNECTEURS, A10_RELIER, A10_PIEGE, A10_MISSION, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: SE RELIRE
 *
 *  MEET: Tomás's draft with six slips. NOTICE: the checklist (lesson 26
 *  named for tu or vous). PRACTISE: find the slip; four slips corrected.
 *  USE: reread your own email.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le brouillon de Tomás',
  frSub: 'Six erreurs avant l’envoi',
  text: BROUILLON_TEXT,
  glossary: [
    { word: 'brouillon', en: 'draft', note: 'Le texte avant la version finale.' },
    { word: "l'envoi", en: 'sending', note: 'Le moment où tu cliques sur Envoyer.' },
    { word: 'Auberge', en: 'inn', note: 'Un petit hôtel, souvent à la campagne.' },
  ],
  questions: [
    { q: 'Trouve les six erreurs de Tomás.', a: `${BROUILLON_FAUTES.join(' ; ')}.` },
    { q: 'La demande est-elle là ?', a: 'Oui : une chambre de plus. Mais elle est écrite avec tu, à une personne qu’il vouvoie.' },
    { q: 'La fin répond-elle au début ?', a: 'Non : Bonjour Madame Leblanc en haut, Bises en bas.' },
    { q: 'Pourquoi un objet plus précis ?', a: 'Madame Leblanc voit tout de suite qu’il demande une chambre de plus, pas une nouvelle réservation.' },
  ],
  audio: REC('rec-b1-39-brouillon'),
  say: REFRAME,
  terms: ['relecture'],
};

/** NOTICE: the checklist, four points. The sheet holds the full list. */
const A11_LISTE: Sec<'focus'> = {
  type: 'focus',
  id: 'a11-liste',
  layer: 'core',
  sheetId: 'sheet-relire',
  title: 'Relire avant d’envoyer',
  points: [
    'La demande : est-elle écrite, claire, au conditionnel ? EN: is the request there?',
    `Le registre : tu ou vous, le même partout, comme dans ${TUVOUS_REF}, et pas d'abréviation. EN: one register, one of tu or vous.`,
    'Les accords et les accents : ils sont arrivés, déjà, à. EN: agreements and accents.',
    'La fin répond au début : Madame appelle Cordialement. EN: the closing matches the opening.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['relecture', 'registre'],
};

/** PRACTISE, on new lines: find the slip. */
const A11_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Trouve l’erreur',
  groups: [
    grp('Les accords', [
      it(E(1161), 'ils sont arrivés'),
      it(E(1164), 'les documents envoyés'),
      it(E(1168), 'deux femmes, arrivées'),
    ], chk(
      '« Nos amis sont déjà arrivé. » Il manque...',
      ['un s à arrivé', 'un accent sur sont'], 0,
      "Avec être, le participe s'accorde : arrivés. EN: with être, the participle agrees.")),
    grp('Tu ou vous', [
      it(E(1172), 'vous, à un hôtel'),
      it(E(1160), 'vous, à un hôtel'),
    ], chk(
      '« Bonjour Madame Leblanc, ... Est-ce que tu peux me répondre ? » Le problème ?',
      ['la question', 'tu, après Madame'], 1,
      "Avec Madame, c'est vous jusqu'au bout. EN: vous all the way with Madame.")),
    ctl('L’accent', '« Ils sont déja là. » Il manque...',
      ['rien', 'un accent grave sur le a de déjà'], 1,
      "Déjà prend un accent grave. EN: déjà takes a grave accent."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['relecture'],
};

/** PRACTISE: four slips, corrected. */
const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a11-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de relecture',
  errors: [
    {
      wrong: `À Mme Leblanc : « ${fr(E(1171))} »`,
      right: `À Mme Leblanc : « ${fr(E(1172))} »`,
      why: `Tu as écrit vite, comme à une amie. « ${B126_REFRAME} » Avec Madame, c'est vous. EN: with Madame, vous.`,
    },
    {
      wrong: 'Merci bcp de votre aide.',
      right: fr(E(1162)),
      why: "Tu écris bcp tous les jours à tes amis. Dans un courriel, chaque mot en entier. EN: write every word in full.",
    },
    {
      wrong: "Les documents que j'ai envoyé sont en pièce jointe.",
      right: fr(E(1164)),
      why: "À l'oral, envoyé et envoyés sonnent pareil. À l'écrit, que reprend les documents, placés avant : envoyés. EN: the object comes first, so it agrees.",
    },
    {
      wrong: 'Objet : réservation',
      right: fr(E(1163)),
      why: "Pour toi, c'est clair. Pour l'hôtel, qui a cent réservations, non : dis ce que tu veux. EN: say what you want in the subject.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['relecture', 'objet'],
};

/** USE: reread your own email. */
const A11_MISSION = pourTaMission('a11-mission', 'Relis ton courriel', [
  grp('La fin et le début', [
    it(E(1167), 'les cinq points'),
  ], chk(
    'Tu relis : « Madame, Monsieur, » en haut, « Bises » en bas. Tu...',
    ['gardes les deux', 'changes Bises pour Cordialement'], 1,
    "La fin répond au début. EN: the closing answers the greeting.")),
  ctl('La demande', 'Ton courriel explique tout, mais tu ne trouves aucune question. Tu...',
    ['l’envoies quand même', 'ajoutes ta demande, au conditionnel'], 1,
    "Sans demande, pas de réponse. EN: no request, no answer."),
], ['relecture', 'demande']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Les cinq points', 'Quand tu relis, tu vérifies...',
    ['seulement l’orthographe', 'la demande, le registre, les accords, les accents, la fin'], 1,
    "Cinq points, pas un. EN: five points, not one."),
  ctl('Tu ou vous', 'Tu vouvoies en haut. En bas, tu...',
    ['vouvoies encore', 'tutoies'], 0,
    "Le même du début à la fin. EN: the same throughout."),
  ctl('L’abréviation', '« bcp » dans un courriel à un hôtel...',
    ['s’écrit beaucoup', 'est bien'], 0,
    "Tout en entier. EN: all in full."),
], ['relecture']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Se relire',
    opener: {
      line: "Le brouillon de Tomás a six erreurs : ici tu relis comme ton lecteur lira. EN: Tomás's draft has six slips: here you reread the way your reader will.",
      imageRef: 'lessons/courriels-lettres/act11.jpg',
    },
    sections: [],
    milestone: "Tu relis ton courriel en cinq points avant de l'envoyer : la demande, le registre, les accords, les accents, la fin. EN: You reread your email on five points before sending.",
    estScreens: 34, restPoints: ['a11-liste'],
  },
  sections: [A11_LECTURE, A11_LISTE, A11_REPERER, A11_ERREURS, A11_MISSION, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12: TA MISSION
 *
 *  The production act: the model (a request to a city service), the plan,
 *  where it matters, a role play, the TASK, then the closing sections in
 *  playbook order.
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le permis de Nathalie',
  frSub: 'Le modèle de ta mission',
  text: MODELE_TEXT,
  glossary: [
    { word: 'permis de stationnement', en: 'parking permit', note: 'Un papier de la ville pour garer ta voiture dans une rue.' },
    { word: 'résidents', en: 'residents', note: 'Les gens qui habitent le quartier.' },
    { word: 'travaux', en: 'roadworks', note: 'La ville répare la rue.' },
    { word: 'fournir', en: 'to provide', note: 'Donner, envoyer : des documents, une preuve.' },
    { word: 'disposition', en: 'at your service', note: 'Je reste à votre disposition : vous pouvez me contacter.' },
  ],
  questions: [
    { q: 'Trouve la raison, les faits et les demandes.', a: 'La raison : un permis de stationnement. Les faits : les travaux, son travail de nuit. Les demandes : quels documents, et le formulaire par courriel.' },
    { q: 'Quels connecteurs relient les étapes ?', a: 'De plus, car, donc.' },
    { q: 'Trouve deux phrases au subjonctif.', a: '« il serait important que le permis soit prêt », « J’aimerais donc que vous m’envoyiez le formulaire ».' },
    { q: 'La fin répond-elle au début ?', a: 'Oui : « Madame, Monsieur, » en haut, la formule longue de la lettre officielle en bas, et vous partout.' },
  ],
  audio: REC('rec-b1-39-modele'),
  say: REFRAME,
  terms: ['genre', 'demande'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  title: 'Six étapes pour ton courriel',
  steps: [
    "1. L'objet : le sujet et ce que tu veux, en quelques mots. EN: the subject line.",
    "2. La formule d'appel : Madame, Monsieur, si tu ne connais pas le nom. EN: the greeting.",
    '3. La première phrase : pourquoi tu écris, avec au sujet de ou afin de. EN: the reason.',
    "4. Les faits, puis ta demande, avec tout d'abord, cependant, c'est pourquoi. EN: facts, then the request, linked.",
    '5. La fin : tu remercies, puis une formule qui répond au début. EN: thanks and a matching closing.',
    '6. Relis les cinq points, et compte : 120 à 150 mots. EN: reread, and count the words.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['objet', 'connecteur', 'relecture'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    { situation: "À l'examen de B1, la production écrite", fr: fr(E(1174)), en: en(E(1174)) },
    { situation: 'Une commande abîmée', fr: fr(E(1019)), en: en(E(1019)) },
    { situation: 'Une facture fausse', fr: fr(E(1100)), en: en(E(1100)) },
    { situation: 'Un renseignement à la mairie', fr: fr(E(1176)), en: en(E(1176)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['genre', 'demande'],
};

/** Say the moves out loud before writing them. ’ only, no corpus row. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'Au téléphone, avant d’écrire',
  setting: 'Tu appelles le service de la circulation de ta ville pour ton permis. M. Ouellet te demande de tout mettre par écrit, mais il veut d’abord comprendre.',
  turns: [
    {
      ai: 'Service de la circulation, bonjour. C’est à quel sujet ?',
      en: 'Traffic department, hello. What is it about?',
      user: 'Bonjour, je vous appelle au sujet d’un permis de stationnement.',
      userEn: 'Hello, I am calling about a parking permit. (The reason, first.)',
      alts: [
        { fr: 'Bonjour, je voudrais demander un permis de stationnement.', en: 'Hello, I would like to request a parking permit.' },
        { fr: 'Bonjour, c’est pour un permis de stationnement, rue des Érables.', en: 'Hello, it is about a parking permit, rue des Érables.' },
      ],
    },
    {
      ai: 'Et pourquoi en avez-vous besoin ?',
      en: 'And why do you need one?',
      user: 'Tout d’abord, les travaux bloquent ma rue depuis un mois.',
      userEn: 'First of all, the roadworks have been blocking my street for a month. (A connector, then the fact.)',
      alts: [
        { fr: 'Depuis le mois dernier, les travaux bloquent ma rue.', en: 'Since last month, the roadworks have been blocking my street.' },
        { fr: 'Les travaux ont fermé ma rue il y a un mois.', en: 'The works closed my street a month ago.' },
      ],
    },
    {
      ai: 'Il y a d’autres places dans le quartier, non ?',
      en: 'There are other spaces in the area, aren’t there?',
      user: 'Oui, cependant je travaille de nuit et je rentre à trois heures du matin.',
      userEn: 'Yes; however, I work nights and get home at three in the morning. (Cependant: the fact that weighs against.)',
      alts: [
        { fr: 'Oui, mais je rentre très tard : je travaille de nuit.', en: 'Yes, but I get home very late: I work nights.' },
        { fr: 'Pas à trois heures du matin, malheureusement.', en: 'Not at three in the morning, unfortunately.' },
      ],
    },
    {
      ai: 'Je comprends. Qu’est-ce que vous voulez savoir, exactement ?',
      en: 'I understand. What exactly do you want to know?',
      user: 'Je voudrais savoir quels documents je dois fournir.',
      userEn: 'I would like to know which documents I have to provide. (An indirect question, in the conditional.)',
      alts: [
        { fr: 'Pourriez-vous me dire quels documents il faut ?', en: 'Could you tell me which documents are needed?' },
        { fr: 'J’aimerais savoir ce qu’il faut fournir.', en: 'I would like to know what I need to provide.' },
      ],
    },
    {
      ai: 'Écrivez-nous tout ça par courriel, avec vos preuves.',
      en: 'Write all that to us by email, with your proof.',
      user: 'Très bien. Je vous remercie de votre aide, bonne journée.',
      userEn: 'Very well. Thank you for your help, have a good day. (Thanks, and a closing that fits.)',
      alts: [
        { fr: 'D’accord, je vous écris aujourd’hui. Merci beaucoup.', en: 'All right, I will write to you today. Thank you very much.' },
        { fr: 'Parfait, merci. Je vous envoie tout ce soir.', en: 'Perfect, thanks. I will send everything tonight.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['demande', 'connecteur'],
};

/** THE GRADED TASK. Announced in act 1; every act added one tool. */
const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Ton courriel formel',
  frSub: 'Mission écrite, comme à l’examen',
  brief: "Choisis une situation. A : ta commande chez Meubles Boréal est arrivée abîmée, et le service n'a pas répondu à ton premier message. Écris une réclamation. B : des travaux bloquent ta rue depuis un mois. Écris au service de la circulation de ta ville pour demander un permis de stationnement ou une autre solution.",
  briefEn: 'Pick one situation. A: your order from Meubles Boréal arrived damaged and customer service did not answer your first message; write a complaint. B: roadworks have blocked your street for a month; write to your city’s traffic department to ask for a parking permit or another solution.',
  produce: "Écris un courriel formel de 120 à 150 mots, sans compter l'objet ni les formules : un objet, une formule d'appel, une première phrase qui dit pourquoi tu écris, les faits, au moins une demande claire, des connecteurs, et une formule de politesse qui répond au début.",
  responseSpec: { kind: 'text', minWords: 120, maxWords: 190 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'La mission accomplie',
        maxPoints: 3,
        descriptors: [
          '3 : Tu écris à la bonne personne, pour la situation choisie. La raison est dans la première phrase, les faits sont clairs, et ta demande est précise. Entre 120 et 150 mots.',
          '2 : La situation est traitée, mais la demande est floue, ou un fait important manque, ou la longueur est un peu hors limites.',
          '1 : On ne sait pas bien ce que tu demandes, ou le courriel est beaucoup trop court.',
        ],
      },
      {
        key: 'registre',
        label: 'Le registre et les formules',
        maxPoints: 2,
        descriptors: [
          "2 : Un objet précis, une formule d'appel et une formule de politesse qui vont ensemble, et vous du début à la fin, sans mot familier ni abréviation.",
          "1 : Une formule ne va pas avec l'autre, l'objet manque, tu passes de vous à tu, ou un mot familier reste.",
        ],
      },
      {
        key: 'organisation',
        label: 'Un courriel organisé et relié',
        maxPoints: 3,
        descriptors: [
          "3 : Des paragraphes dans l'ordre (la raison, les faits, la demande, la fin) et des connecteurs écrits qui montrent chaque étape : tout d'abord, cependant, c'est pourquoi, enfin.",
          "2 : L'ordre se suit, mais les connecteurs sont rares, ou oraux et répétés (et puis, et puis).",
          '1 : Les idées arrivent en vrac, sans paragraphes ni connecteurs.',
        ],
      },
      {
        key: 'etendue',
        label: 'Des phrases variées',
        maxPoints: 2,
        descriptors: [
          "2 : Tu utilises des structures de B1 : le conditionnel poli, une question indirecte, un sentiment avec que + subjonctif ou de + infinitif, le passé composé et l'imparfait.",
          '1 : Des phrases justes mais toutes sur le même modèle simple.',
        ],
      },
      {
        key: 'correction',
        label: 'Une langue correcte',
        maxPoints: 2,
        descriptors: [
          '2 : Peu d’erreurs, et elles ne gênent pas la lecture : les accords, les accents et les temps sont presque toujours justes.',
          "1 : Des erreurs fréquentes d'accords, de temps ou d'accents, qui gênent parfois la lecture.",
        ],
      },
    ],
  },
  scaffold: [
    'Objet :',
    'Madame, Monsieur,',
    'Je vous écris au sujet de',
    "Tout d'abord,",
    'Cependant,',
    "C'est pourquoi je vous demande de",
    'Pourriez-vous',
    'Je vous remercie par avance',
  ],
  modelAnswer: "Objet : commande 4821, canapé livré abîmé\n\nMadame, Monsieur,\n\nJe vous écris au sujet de ma commande 4821, livrée le mardi 3 mars. Tout d'abord, le canapé est arrivé avec un pied cassé et une déchirure sur le côté. Il était pourtant emballé dans un carton neuf. Le lendemain, j'ai écrit à votre service à la clientèle. Cependant, je n'ai reçu aucune réponse depuis deux semaines. Je suis très déçu, car ce canapé est un cadeau pour ma mère, qui emménage le 30 mars.\n\nC'est pourquoi je vous demande de remplacer le canapé avant cette date. Si ce n'est pas possible, je souhaiterais être remboursé. Pourriez-vous aussi me confirmer la date de livraison par courriel ? Il est important que le nouveau canapé arrive à temps. Vous trouverez en pièce jointe deux photos et une copie de ma facture.\n\nJe vous remercie par avance de votre réponse. Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.\n\nAlex Martin",
  modelAnswerEn: "Subject: order 4821, sofa delivered damaged. Dear Sir or Madam, I am writing about my order 4821, delivered on Tuesday 3 March. First of all, the sofa arrived with a broken leg and a tear on the side. And yet it was packed in a new box. The next day, I wrote to your customer service. However, I have had no reply for two weeks. I am very disappointed, because this sofa is a present for my mother, who moves in on 30 March. That is why I am asking you to replace the sofa before that date. If that is not possible, I would like to be refunded. Could you also confirm the delivery date by email? It is important that the new sofa arrives in time. Please find attached two photos and a copy of my invoice. Thank you in advance for your reply. Yours faithfully, Alex Martin",
  watchFor: [
    { pattern: 'No request anywhere, or a request with no action verb (faites quelque chose, j’espère que vous allez réagir).', criterion: 'tache', feedback: "Ton lecteur ne sait pas quoi faire. Écris ta demande avec un verbe précis : remplacer, rembourser, envoyer.", ref: 'a1-reperer' },
    { pattern: 'The reason for writing is not in the first sentence (a self-introduction first, or the reason buried in the middle).', criterion: 'organisation', feedback: "Mets la raison dans la première phrase : Je vous écris au sujet de, ou afin de.", ref: 'a4-erreurs' },
    { pattern: 'No subject line, or a vague one (Objet : problème, Objet : question).', criterion: 'registre', feedback: "Ajoute un objet précis : le sujet et ce que tu veux.", ref: 'a2-oublis' },
    { pattern: 'Greeting and closing do not match (Madame, Monsieur with Bises or À bientôt; Salut Madame).', criterion: 'registre', feedback: "La fin répond au début : Madame, Monsieur appelle Cordialement ou la formule longue.", ref: 'a3-piege' },
    { pattern: 'tu and vous mixed, or tu to the company or the city.', criterion: 'registre', feedback: "Avec un service, c'est vous du début à la fin.", ref: 'a11-erreurs' },
    { pattern: 'Familiar words or texting abbreviations in the email (bcp, stp, dsl, c’est nul, n’importe quoi).', criterion: 'registre', feedback: "Écris chaque mot en entier, et garde un ton ferme sans mot familier.", ref: 'a7-piege' },
    { pattern: 'Anger, insults or threats instead of facts and a request.', criterion: 'tache', feedback: "Ta colère ne répare rien : donne des faits, une preuve et une demande.", ref: 'a7-piege' },
    { pattern: 'Spoken chains instead of written connectors (et puis, en plus, alors, mais at every sentence).', criterion: 'organisation', feedback: "Remplace et puis par tout d'abord, en plus par de plus, alors par c'est pourquoi.", ref: 'a10-piege' },
    { pattern: 'One block of text with no paragraphs.', criterion: 'organisation', feedback: "Un paragraphe par étape : la raison, les faits, la demande, la fin.", ref: 'a10-connecteurs' },
    { pattern: 'Direct questions to the service (Quels documents je dois fournir ?) or « je voudrais savoir est-ce que ».', criterion: 'etendue', feedback: "Écris une question indirecte, au conditionnel : je souhaiterais savoir quels documents je dois fournir.", ref: 'a6-erreurs' },
    { pattern: 'A feeling with que + indicative, or que where there is one subject (je suis désolé que je).', criterion: 'correction', feedback: "Deux sujets : que + subjonctif. Un seul sujet : de + infinitif.", ref: 'a5-piege' },
    { pattern: 'Facts in the wrong past tense (the setting in the passé composé, the steps in the imparfait).', criterion: 'correction', feedback: "Les étapes au passé composé, la situation à l'imparfait.", ref: 'a8-recit' },
    { pattern: 'Past participle agreement missed with être or with a preceding que (ils sont arrivé, les photos que j’ai envoyé), or missing accents (déja, a for à).', criterion: 'correction', feedback: "Relis les accords et les accents avant d'envoyer.", ref: 'a11-reperer' },
  ],
  graderNotes: [
    'Count the words of the BODY only: from the first sentence after the greeting to the thanks before the closing formula. The subject line, the greeting, the closing formula and the signature do not count. 120 to 150 with 10% tolerance (108 to 165) before criterion « tache » loses a point. responseSpec allows 190 words in all so the formulas fit.',
    'Either situation is valid. Situation A must contain a request (remplacer, rembourser, réparer); situation B a request for a permit, documents or another solution. A clear request counts even as a statement (Je vous demande de...).',
    'Register: courant is enough; soutenu formulas are welcome but not required. Cordialement closes a formal email correctly. Accept Québec usage everywhere: courriel, Salutations distinguées as a short closing, Bonne journée after Cordialement in a less formal email, fin de semaine.',
    'The subjunctive (lessons 14 to 16 in B1) is rewarded under « etendue » when present and correct, never required. Do not mark « je souhaiterais être remboursé » or other de + infinitive structures as missing subjunctives.',
    'Inversion questions (lesson 21 in B1) and indirect questions (lesson 19 in B1) are both fine for the request. An intonation question in a formal email costs under « registre » only if it is clearly spoken (Vous pouvez me rembourser ?).',
    'Invented names, numbers and dates are expected; do not check them for realism. A learner may sign with any name.',
    'Writer gender is unknown: judge agreement (déçu, déçue) for internal consistency only.',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment. Name the act section to revisit from watchFor.ref.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['demande', 'genre', 'relecture'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Dis tes formules à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formules', 'ouverture', 'demande'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-relire',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: "l'objet", v: 'le sujet, et ce que tu veux', say: fr(E(1026)),
      detail: { title: "L'objet", body: "Le titre de ton courriel : précis, jamais vide. EN: precise, never empty.", say: fr(E(1004)) } },
    { k: 'les formules', v: 'la fin répond au début', say: fr(LS(1178)),
      detail: { title: 'Les formules', body: "Salut et Bises, Madame et Cordialement, Madame, Monsieur et la formule longue. EN: matching pairs.", say: fr(LS(1185)) } },
    { k: 'la première phrase', v: 'pourquoi tu écris', say: fr(E(1005)),
      detail: { title: "L'ouverture", body: "Au sujet de, afin de, suite à, en réponse à. EN: the reason, first.", say: fr(E(1050)) } },
    { k: 'la demande', v: 'un verbe précis, au conditionnel', say: fr(E(1019)),
      detail: { title: 'La demande', body: "Pourriez-vous, je voudrais savoir si, je vous demande de. EN: a precise, polite request.", say: fr(E(1080)) } },
    { k: 'les connecteurs', v: "tout d'abord, cependant, c'est pourquoi", say: fr(E(1148)),
      detail: { title: 'Les connecteurs', body: "Un par étape, en tête de phrase, écrits et pas oraux. EN: one per step, written not spoken.", say: fr(E(1147)) } },
    { k: 'la relecture', v: 'cinq points avant d’envoyer', say: fr(E(1167)),
      detail: { title: 'La relecture', body: "La demande, le registre, les accords, les accents, la fin. EN: five checks.", say: fr(E(1166)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['objet', 'formules', 'relecture'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu sais construire un courriel en cinq parties, ouvrir et fermer pour ton lecteur, dire pourquoi tu écris dès la première phrase, et écrire les textes de l'examen de B1 : inviter, répondre, demander, réclamer, raconter, t'excuser. Le piège qui reste est discret : un courriel poli qui ne demande rien, ou une fin qui ne répond pas au début. Avant l'examen, relis chaque courriel et souligne ta demande : si tu ne la trouves pas en dix secondes, ton lecteur non plus. EN: Underline your request in every email; if you cannot find it in ten seconds, neither can your reader.",
  stats: [
    { k: 'Les parties', v: 'objet, appel, corps, politesse, signature' },
    { k: 'Les types', v: 'inviter, demander, réclamer, raconter, s’excuser' },
    { k: 'Les liens', v: "tout d'abord, cependant, c'est pourquoi" },
    { k: 'La relecture', v: 'cinq points' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight, one per act from 1 to 11. Workshop
 *  shape: most questions ask which line fits, what is missing, or what a
 *  line is doing. `typeIn` rewrites a short line; `fold()` strips accents,
 *  commas, apostrophes and hyphens, so every rewrite turns on WORDS. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une chose ne va pas dans ce courriel. Écris la ligne qui va. EN: One thing does not fit in this email; write the line that does.', prompt, answer, accept: [answer, ...more], why, ref });
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
      id: 'r1-demande', label: 'La demande', targets: ['sans-demande'],
      questions: [
        mc('Le service a compris ton problème, mais ne fait rien. Pourquoi ?', ['Ton courriel ne demande rien.', 'Ton courriel est trop court.', 'Ton courriel a des fautes.'], 0, "Il ne sait pas quoi faire. EN: they do not know what to do.", 'a1-scene'),
        mc('Quelle phrase contient une demande ?', [fr(E(1002)), fr(E(1001))], 1, "Pourriez-vous le remplacer : la demande. EN: the request.", 'a1-reperer'),
        lC('Écoute. Que veut cette personne ?', fr(E(1010)), ['un remboursement', 'une réparation', 'un nouveau canapé'], 0, "Rembourser : rendre l'argent. EN: a refund.", 'a1-usages'),
        lC('Écoute. Que demande le service ?', fr(E(1003)), ['que tu dises ce que tu veux', 'que tu paies ta facture'], 0, "Préciser ta demande. EN: to state your request.", 'a1-lecture'),
        tI('Écris la demande : tu veux qu’on répare ton canapé.', '« Pourriez-vous le ... ? »', fr(E(1011)), "Réparer : tu gardes ton canapé. EN: repair it.", 'a1-usages', ['réparer']),
        tI('Écris le début pour un service à la clientèle.', '« Salut, le canapé est arrivé cassé. »', 'Bonjour, le canapé est arrivé cassé.', "Salut va avec un ami. EN: Salut is for friends.", 'a1-reperer', ['Madame, Monsieur, le canapé est arrivé cassé.', 'Bonjour, le canapé est arrivé abîmé.', 'Madame, Monsieur, le canapé est arrivé abîmé.', 'Madame, Monsieur, mon canapé est arrivé abîmé.']),
        eS('À Meubles Boréal : « Salut, pourriez-vous remplacer le canapé ? »', 'Bonjour, pourriez-vous remplacer le canapé ?', "La demande est bonne, le début non. EN: good request, wrong greeting.", 'a1-reperer', ['Madame, Monsieur, pourriez-vous remplacer le canapé ?']),
        mc('L’objet d’un courriel, c’est...', ['la ligne que le lecteur voit avant d’ouvrir', 'la dernière phrase', 'la pièce jointe'], 0, "Il se lit avant tout le reste. EN: read before anything else.", 'a1-check'),
      ],
    },
    {
      id: 'r2-parties', label: 'Les cinq parties', targets: ['partie-oubliee'],
      questions: [
        mc('Dans quel ordre ?', ['objet, formule d’appel, corps, formule de politesse, signature', 'formule d’appel, corps, objet, signature'], 0, "De l'objet à la signature. EN: subject to signature.", 'a2-parties'),
        mc('« Madame Tremblay, » est...', ['l’objet', 'la formule d’appel', 'la signature'], 1, "La première ligne du message. EN: the greeting.", 'a2-reperer'),
        lC('Écoute. Où va cette phrase ?', fr(E(1020)), ['à la fin, avant la formule', 'dans l’objet'], 0, "Tu remercies avant de fermer. EN: thanks before closing.", 'a2-reperer'),
        lC('Écoute. Qu’annonce cette phrase ?', fr(E(1018)), ['une pièce jointe', 'une demande de remboursement'], 0, "En pièce jointe : un fichier. EN: an attachment.", 'a2-oublis'),
        tI('Écris ce qui manque dans l’objet.', 'Objet : demande de ... (tu veux ton argent)', 'remboursement', "Le mot qui dit ce que tu veux. EN: the word that says what you want.", 'a2-mission', ['Objet : demande de remboursement', 'demande de remboursement']),
        tI('Complète : tu envoies des photos.', '« Je vous envoie deux photos en ... »', 'pièce jointe', "En pièce jointe. EN: attached.", 'a2-oublis', ['Je vous envoie deux photos en pièce jointe.']),
        eS('Objet : coucou', 'Objet : canapé livré abîmé', "Un objet précis pour un service. EN: a precise subject.", 'a2-oublis', ['Objet : demande de remboursement', 'Objet : commande 4821, canapé livré abîmé', 'Objet : canapé abîmé', 'Objet : canapé livré cassé']),
        mc('Quel est le meilleur objet ?', [fr(E(1030)), 'Objet : message', 'Objet : lundi'], 0, "Le sujet et le jour. EN: the subject and the day.", 'a2-mission'),
      ],
    },
    {
      id: 'r3-formules', label: 'Les formules', targets: ['formules-melangees'],
      questions: [
        mc('Tu as ouvert avec « Madame, Monsieur, ». Tu fermes avec...', ['Bises', 'Cordialement', 'À plus'], 1, "La fin répond au début. EN: the closing answers the greeting.", 'a3-assortir'),
        mc('À ta responsable, tu ouvres avec...', ['Salut Madame Gagnon,', 'Bonjour Madame Gagnon,'], 1, "Salut et Madame ne vont pas ensemble. EN: they do not mix.", 'a3-piege'),
        lC('Écoute. Pour qui est cette fin ?', fr(E(1044)), ['une amie', 'la banque'], 0, "Je t'embrasse : tu, et le familier. EN: informal.", 'a3-formules'),
        lC('Écoute. Où l’entends-tu souvent ?', fr(E(1037)), ['à la fin d’un courriel, au Québec', 'au début d’un texto'], 0, "La forme courte, fréquente au Québec. EN: the Québec short closing.", 'a3-formules'),
        tI('Écris la formule d’appel pour une femme que tu ne connais pas.', '« ... » (une seule personne, inconnue)', 'Madame,', "Madame, et une virgule. EN: Madame, with a comma.", 'a3-piege', ['Madame', 'Bonjour Madame,', 'Bonjour Madame']),
        tI('Complète la formule d’une lettre officielle.', '« Je vous prie d’... , Madame, Monsieur, mes salutations distinguées. »', 'agréer', "Je vous prie d'agréer. EN: the formal verb.", 'a3-formules', [fr(LS(1185))]),
        eS('Bonjour Madame Gagnon, (…) Bises, Julien', 'Bonne journée, Julien', "Avec Madame, pas Bises. EN: no Bises with Madame.", 'a3-piege', ['Cordialement, Julien', 'Bonne journée, Julien Roy', 'Cordialement, Julien Roy', 'Bien cordialement, Julien']),
        mc('En France, on dit aussi « un mail ». Au Québec, on écrit surtout...', ['un courriel', 'un char'], 0, "Courriel : le mot du Québec, courant. EN: the Québec word.", 'a3-check'),
      ],
    },
    {
      id: 'r4-ouverture', label: 'La première phrase', targets: ['raison-cachee'],
      questions: [
        mc('Premier contact avec un centre sportif. Ta première phrase ?', ['Suite à notre conversation, ...', 'Je vous écris pour réserver un terrain.', 'En réponse à votre courriel, ...'], 1, "Premier contact : ton but. EN: first contact, your purpose.", 'a4-choisir'),
        mc('« Suite à notre conversation d’hier » suppose...', ['un échange avant', 'un premier contact'], 0, "Il y a eu un appel. EN: there was an exchange.", 'a4-debuts'),
        lC('Écoute. Cette personne...', fr(E(1052)), ['répond à un courriel', 'écrit pour la première fois'], 0, "En réponse à : elle répond. EN: she is replying.", 'a4-ecoute'),
        lC('Écoute. Quels mots disent le but ?', fr(E(1060)), ['afin de', 'une salle', 'je vous écris'], 0, "Afin de, comme pour. EN: in order to.", 'a4-ecoute'),
        tI('Réécris : la raison d’abord.', '« Je m’appelle Alex et j’habite à Québec. Je voudrais un renseignement. »', fr(E(1050)), "Ton nom est dans la signature. EN: your name goes in the signature.", 'a4-erreurs', ['Je vous écris pour demander un renseignement.', 'Je vous écris pour obtenir un renseignement.']),
        tI('Complète avec les mots du but.', '« Je vous écris ... réserver une salle. »', 'afin de', "Afin de, ou pour. EN: in order to.", 'a4-debuts', ['pour', 'Je vous écris afin de réserver une salle.', 'Je vous écris pour réserver une salle.']),
        eS('Suite à notre conversation, je voudrais un renseignement. (Tu n’as jamais parlé à ce service.)', fr(E(1050)), "Pas d'échange avant : pas de suite à. EN: no earlier exchange.", 'a4-erreurs', ['Je vous écris pour demander un renseignement.', 'Je vous écris pour obtenir un renseignement.']),
        mc('Où dis-tu pourquoi tu écris ?', ['dans la première phrase', 'dans la signature'], 0, "Tout de suite. EN: straight away.", 'a4-check'),
      ],
    },
    {
      id: 'r5-inviter', label: 'Inviter et répondre', targets: ['reponse-bancale'],
      questions: [
        mc('Une invitation finit souvent par...', ['une demande de réponse', 'une réclamation'], 0, "Confirmer ta présence. EN: asks you to reply.", 'a5-repondre'),
        mc('Qu’est-ce qui rend un refus aimable ?', ['une raison et un vœu', 'un non très court'], 0, "Un non sec sonne froid. EN: a bare no sounds cold.", 'a5-trier'),
        lC('Écoute. Cette personne...', fr(E(1069)), ['refuse', 'accepte'], 0, "Malheureusement : un refus. EN: a refusal.", 'a5-lecture'),
        lC('Écoute. Cette personne...', fr(E(1078)), ['accepte', 'refuse'], 0, "Je serai heureux de participer. EN: yes.", 'a5-trier'),
        tI('Complète : un seul sujet.', '« Je suis désolé ... ne pas pouvoir venir. »', 'de', "Un seul sujet : de + infinitif. EN: one subject.", 'a5-piege', [fr(E(1070))]),
        tI('Mets le verbe au bon mode.', '« Je suis contente que vous (organiser) cette fête. »', fr(E(1068)), "Deux sujets : subjonctif. EN: subjunctive.", 'a5-piege', ['organisiez']),
        eS('Je serai ravie que je vienne.', fr(E(1067)), "Un seul sujet : de venir. EN: de + infinitive.", 'a5-piege', ['Je serai ravie de venir']),
        mc('« Je suis ravi que vous ... dîner samedi. »', ['venez', 'veniez', 'venir'], 1, "Ravi que : le subjonctif. EN: subjunctive.", 'a5-piege'),
      ],
    },
    {
      id: 'r6-renseignement', label: 'Demander un renseignement', targets: ['question-directe'],
      questions: [
        mc('« Est-ce qu’il reste des places ? » devient...', ['Je voudrais savoir s’il reste des places.', 'Je voudrais savoir est-ce qu’il reste des places.'], 0, "Oui ou non : si. EN: si.", 'a6-transformer'),
        mc('À un service inconnu, tu écris...', ['Je veux les horaires.', 'Pourriez-vous m’indiquer les horaires ?'], 1, "Le conditionnel. EN: the conditional.", 'a6-questions'),
        lC('Écoute. Que veut savoir cette personne ?', fr(E(1085)), ['le prix', 'l’heure', 'le lieu'], 0, "Combien coûte : le prix. EN: the price.", 'a6-lecture'),
        lC('Écoute. Quel registre ?', fr(E(1086)), ['soutenu', 'familier'], 0, "Auriez-vous l'amabilité : très soigné. EN: very formal.", 'a6-transformer'),
        tI('Réécris en question indirecte.', '« Quand le camp commence-t-il ? » → « Je voudrais savoir ... »', fr(E(1084)), "Pas d'inversion dans une question indirecte. EN: no inversion.", 'a6-erreurs', ['Je voudrais savoir quand commence le camp.']),
        tI('Réécris poliment, pour le service.', '« C’est combien, le camp ? »', fr(E(1085)), "Le conditionnel et combien. EN: conditional and combien.", 'a6-questions', ['Pourriez-vous me dire combien coûte le camp ?', 'Pourriez-vous m’indiquer les tarifs ?', "Pourriez-vous m'indiquer les tarifs du camp ?", 'Je voudrais savoir combien coûte le camp.']),
        eS('Je voudrais savoir quand commence-t-il.', 'Je voudrais savoir quand il commence.', "L'ordre normal après savoir. EN: normal order.", 'a6-erreurs', ['Je voudrais savoir quand le camp commence.']),
        mc('Trois renseignements, c’est...', ['une longue phrase', 'trois phrases'], 1, "Une demande par phrase. EN: one per sentence.", 'a6-check'),
      ],
    },
    {
      id: 'r7-reclamer', label: 'Réclamer', targets: ['plainte-en-colere'],
      questions: [
        mc('Dans une réclamation, après les faits et le problème...', ['ce que tu as déjà fait, puis ta demande', 'une blague, puis Bises'], 0, "Déjà fait, puis la demande. EN: then the request.", 'a7-etapes'),
        mc('Laquelle garde un ton ferme et poli ?', [fr(E(1105)), fr(E(1106))], 1, "La déception, pas l'insulte. EN: disappointment, not insult.", 'a7-ton'),
        lC('Écoute. C’est quelle étape ?', fr(E(1098)), ['ce que tu as déjà fait', 'la demande', 'la formule de fin'], 0, "Déjà : ce que tu as essayé. EN: what you tried.", 'a7-etapes'),
        lC('Écoute. Quel mot montre la surprise ?', fr(E(1097)), ['pourtant', 'facture', 'montant'], 0, "Pourtant : contre ce qui était prévu. EN: against expectation.", 'a7-lecture'),
        tI('Rends la demande précise.', '« Faites quelque chose pour ma facture. »', fr(E(1100)), "Un verbe précis : corriger. EN: a precise verb.", 'a7-piege', ['Je vous demande de corriger cette facture.', 'Pourriez-vous corriger cette facture ?', 'Pourriez-vous corriger ma facture ?', 'Je vous demande de corriger ma facture.']),
        tI('Mets le verbe au bon temps : une étape.', '« Le 2 mars, j’(changer) d’abonnement. »', 'Le 2 mars, j’ai changé d’abonnement.', "Une étape finie : le passé composé. EN: passé composé.", 'a7-etapes', ["Le 2 mars, j'ai changé d'abonnement.", 'ai changé']),
        eS("C'est n'importe quoi, votre service.", fr(E(1106)), "Ferme, pas insultant. EN: firm, not insulting.", 'a7-piege', ['Je suis très déçu par votre service.', 'Je suis déçue par votre service.', 'Je suis déçu par votre service.']),
        mc('Pour finir une réclamation, tu écris...', ['Bises', 'Je vous prie d’agréer mes salutations distinguées.'], 1, "Une lettre officielle : la formule longue. EN: the formal closing.", 'a7-etapes'),
      ],
    },
    {
      id: 'r8-nouvelles', label: 'Donner des nouvelles', targets: ['recit-desordre'],
      questions: [
        mc('Quel mot annonce la dernière étape ?', ["d'abord", 'ensuite', 'enfin'], 2, "Enfin : la dernière. EN: finally.", 'a8-ordre'),
        mc('Pour le décor d’un récit, tu utilises...', ['l’imparfait', 'le futur'], 0, "L'imparfait pose la situation. EN: the imparfait.", 'a8-recit'),
        lC('Écoute. C’est...', fr(E(1117)), ['le décor', 'une étape'], 0, "C'était, je connaissais : la situation. EN: the setting.", 'a8-ordre'),
        lC('Écoute. C’est quelle étape ?', fr(E(1116)), ['la première', 'la dernière'], 0, "D'abord : la première. EN: the first.", 'a8-ordre'),
        tI('Mets le verbe au bon temps : une étape.', '« Le mois dernier, nous (organiser) un voyage. »', 'Le mois dernier, nous avons organisé un voyage.', "Une étape finie : passé composé. EN: passé composé.", 'a8-recit', ['avons organisé', `${fr(E(1119)).replace(' à Saint-Louis', '')}`]),
        tI('Mets le verbe au bon temps : le décor.', '« Au début, c’(être) difficile. »', 'Au début, c’était difficile.', "La situation : imparfait. EN: imparfait.", 'a8-recit', ["Au début, c'était difficile.", 'était']),
        eS('Au début, c’était difficile, parce que je n’ai connu personne.', fr(E(1117)), "La situation dure : je ne connaissais personne. EN: an ongoing state.", 'a8-ordre', ["Au début, c'était difficile, parce que je ne connaissais personne."]),
        mc('Awa finit par « Et vous, comment allez-vous ? ». C’est...', ['tourner le courriel vers sa lectrice', 'une faute'], 0, "La fin va vers le lecteur. EN: the ending turns to the reader.", 'a8-ordre'),
      ],
    },
    {
      id: 'r9-excuses', label: "S'excuser", targets: ['excuse-floue'],
      questions: [
        mc('Les trois temps d’une excuse écrite ?', ['reconnaître, expliquer en une phrase, réparer', 'expliquer longtemps, puis s’excuser'], 0, "Trois temps courts. EN: three short beats.", 'a9-excuses'),
        mc('À ta directrice, tu écris...', [fr(E(1135)), fr(E(1128))], 1, "Le courant, et vous. EN: everyday register, vous.", 'a9-erreurs'),
        lC('Écoute. Cette phrase sert à...', fr(E(1132)), ['réparer', 'reconnaître'], 0, "Un autre rendez-vous : réparer. EN: to put it right.", 'a9-excuses'),
        lC('Écoute. Que promet la personne ?', fr(E(1131)), ['que ça n’arrivera plus', 'qu’elle viendra demain'], 0, "Au futur, négatif. EN: never again.", 'a9-ecoute'),
        tI('Complète : un seul sujet.', '« Je regrette ... ne pas vous avoir prévenu plus tôt. »', 'de', "Un seul sujet : de. EN: de.", 'a9-que-de', [fr(E(1138))]),
        tI('Mets le verbe au subjonctif.', '« Je suis désolé que vous (devoir) reporter la réunion. »', fr(E(1130)), "Deux sujets : deviez. EN: subjunctive.", 'a9-que-de', ['deviez']),
        eS('Je suis désolé que je sois en retard.', 'Je suis désolé d’être en retard.', "Un seul sujet : de + infinitif. EN: one subject.", 'a9-que-de', ["Je suis désolé d'être en retard.", 'Je suis désolée d’être en retard.', "Je suis désolée d'être en retard."]),
        mc('« Je te revaudrai ça » va avec...', ['un ami', 'ta directrice'], 0, "Familier. EN: informal.", 'a9-que-de'),
      ],
    },
    {
      id: 'r10-connecteurs', label: 'Les connecteurs', targets: ['idees-en-vrac'],
      questions: [
        mc('« J’ai laissé un message. ... , personne ne m’a rappelée. »', ['De plus', 'Cependant', 'En effet'], 1, "Une opposition. EN: opposition.", 'a10-relier'),
        mc('« Le chauffage ne marche plus. ... , il fait quinze degrés. »', ['En effet', 'Cependant'], 0, "La preuve. EN: proof.", 'a10-relier'),
        lC('Écoute. Ce connecteur...', fr(E(1146)), ['ajoute une raison', 'oppose deux faits'], 0, "De plus : ajouter. EN: adds.", 'a10-connecteurs'),
        lC('Écoute. Ce connecteur annonce...', fr(E(1148)), ['la conséquence : la demande', 'la première étape'], 0, "C'est pourquoi : la conséquence. EN: the consequence.", 'a10-connecteurs'),
        tI('Réécris pour un courriel.', '« Et puis, les radiateurs marchent plus. »', fr(E(1144)), "Tout d'abord, et le ne. EN: a written connector, and ne.", 'a10-piege', ["Tout d'abord, les radiateurs ne marchent plus.", 'Tout d’abord, les radiateurs ne marchent plus.', "Tout d'abord, les radiateurs ne fonctionnent plus."]),
        tI('Complète avec le connecteur de la conséquence.', '« ... je vous demande d’envoyer un technicien. »', "C'est pourquoi", "La demande suit les faits. EN: consequence.", 'a10-connecteurs', ['Par conséquent', 'Donc', fr(E(1148))]),
        eS('En plus, ma fille est malade.', fr(E(1146)), "En plus est oral. EN: en plus is spoken.", 'a10-piege', ['Par ailleurs, ma fille est malade.']),
        mc('Un connecteur d’étape se place souvent...', ['en tête de phrase', 'dans l’objet'], 0, "En tête. EN: at the head.", 'a10-check'),
      ],
    },
    {
      id: 'r11-relire', label: 'La relecture', targets: ['envoi-sans-relire'],
      questions: [
        mc('Tu relis. Tu cherches...', ['la demande, le registre, les accords, les accents, la fin', 'seulement l’orthographe'], 0, "Cinq points. EN: five points.", 'a11-liste'),
        mc('« Bonjour Madame Leblanc, (…) Est-ce que tu peux me répondre ? » Le problème ?', ['tu, après Madame', 'la question'], 0, "Vous jusqu'au bout. EN: vous throughout.", 'a11-erreurs'),
        lC('Écoute. Quel mot s’accorde ?', fr(E(1161)), ['arrivés', 'déjà', 'Canada'], 0, "Avec être : arrivés. EN: agreement with être.", 'a11-reperer'),
        lC('Écoute. Cette phrase va...', fr(E(1172)), ['dans un courriel à un hôtel', 'dans un texto à un frère'], 0, "Pourriez-vous : vous et le conditionnel. EN: formal.", 'a11-reperer'),
        tI('Écris le mot en entier.', '« Merci bcp de votre aide. »', fr(E(1162)), "Pas d'abréviation. EN: no abbreviation.", 'a11-erreurs', ['beaucoup']),
        tI('Corrige l’accord.', "« Les documents que j'ai envoyé sont en pièce jointe. »", fr(E(1164)), "Que reprend les documents : envoyés. EN: agreement.", 'a11-erreurs', ['envoyés']),
        eS('Nos amis sont déjà arrivé au Canada.', fr(E(1161)), "Avec être, le participe s'accorde. EN: agreement.", 'a11-reperer'),
        mc('« Madame, Monsieur, » en haut, « Bises » en bas. Tu...', ['changes Bises pour Cordialement', 'gardes les deux'], 0, "La fin répond au début. EN: match the opening.", 'a11-mission'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b1.25 does. */
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
    { front: "l'objet", back: 'le sujet, et ce que tu veux', say: fr(E(1026)) },
    { front: 'un service inconnu, pour ouvrir', back: 'Madame, Monsieur,', say: fr(E(1005)) },
    { front: 'une lettre officielle, pour fermer', back: "Je vous prie d'agréer...", say: fr(LS(1185)) },
    { front: 'la première phrase', back: 'Je vous écris au sujet de...', say: fr(E(1050)) },
    { front: 'une demande polie', back: 'Pourriez-vous...', say: fr(E(1019)) },
    { front: 'une question indirecte', back: 'Je voudrais savoir si...', say: fr(E(1080)) },
    { front: 'une réclamation', back: 'les faits, le problème, déjà fait, la demande', say: fr(E(1100)) },
    { front: 'une excuse', back: 'reconnaître, expliquer, réparer', say: fr(E(1128)) },
    { front: 'la conséquence', back: "c'est pourquoi", say: fr(E(1148)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Le B1, dans un courriel',
  body: `${REFRAME} Ce courriel a réuni tout le B1 : le conditionnel poli de ${POLITESSE_REF}, le subjonctif après un sentiment de ${SUBJ_RANGE_REF}, les questions indirectes de ${DISCOURS_REF}, le registre et tu ou vous des leçons 25 et 26, les connecteurs de ${CONNECTEURS_RANGE_REF}. Tu écris maintenant un courriel qu'on lit en dix secondes, et auquel on répond. La suite, c'est le B2 : des textes plus longs, pour convaincre. EN: Next comes B2: longer texts that argue a case.`,
  points: [
    "L'objet et la première phrase disent pourquoi tu écris.",
    'Une demande précise, au conditionnel, dans chaque courriel.',
    'La fin répond au début : une seule tenue, vous ou tu.',
    'Un connecteur par étape, puis cinq points de relecture.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['demande', 'formules', 'relecture'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ta mission',
    opener: {
      line: "Une réclamation ou une demande à ta ville : ici tu écris ton courriel formel, comme à l'examen. EN: A complaint or a request to your city: here you write your formal email, exam-style.",
      imageRef: 'lessons/courriels-lettres/act12.jpg',
    },
    sections: [],
    milestone: "Tu as écrit un courriel formel de 120 à 150 mots et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote a 120 to 150 word formal email and sat the exam: 88 questions, 11 rounds.",
    estScreens: 150,
    restPoints: ['a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-formules', 'a12-quiz/r6-renseignement', 'a12-quiz/r9-excuses', 'a12-review'],
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
  { id: 'd-demande', title: 'Le problème, ou la demande', format: 'sort' as const, coach: "Deux piles : la ligne dit le problème, ou elle demande quelque chose. EN: problem or request.", buckets: ['dit le problème', 'demande quelque chose'], items: [E(1000), E(1002), E(1017), E(1001), E(1010), E(1019)], audio: AUDIO },
  { id: 'd-parties', title: 'Les cinq parties', format: 'flashcard' as const, coach: "Lis chaque ligne à voix haute et dis à quelle partie elle appartient. EN: say which part each line is.", items: [E(1004), E(1016), E(1017), E(1018), E(1019), E(1020)], audio: AUDIO },
  { id: 'd-formules', title: 'Pour un proche, pour un service', format: 'sort' as const, coach: "Deux piles : la formule d'un proche, la formule d'un service. EN: sort by reader.", buckets: ['pour un proche', 'pour un service'], items: [E(1032), LS(1321), E(1038), LS(1178), 'fr.a1.salutations.118', E(1041)], audio: AUDIO },
  { id: 'd-ouverture', title: 'La raison, tout de suite', format: 'mcq' as const, coach: "Premier contact : ton but. Un échange avant : suite à. EN: purpose first.", q: 'Premier contact avec un service. Ta première phrase ?', opts: [fr(E(1050)), fr(E(1051))], correct: 0, why: "Pas d'échange avant : tu dis ton but. EN: no earlier exchange.", items: [E(1050), E(1051), E(1052), E(1055), E(1057), E(1060)], audio: AUDIO },
  { id: 'd-reponse', title: 'Oui, ou non merci', format: 'sort' as const, coach: "Deux piles : accepter, refuser. EN: accept or decline.", buckets: ['accepter', 'refuser'], items: [E(1067), E(1078), E(1073), E(1069), E(1070), E(1074)], audio: AUDIO },
  { id: 'd-renseignement', title: 'Je voudrais savoir si', format: 'mcq' as const, coach: "Après savoir : si, quand, combien, sans inversion. EN: indirect questions.", q: '« Est-ce qu’il reste des places ? », dans un courriel :', opts: [fr(E(1080)), 'Je voudrais savoir est-ce que des places sont encore disponibles.'], correct: 0, why: "Oui ou non : si. EN: si.", items: [E(1080), E(1081), E(1082), E(1084), E(1085), E(1086)], audio: AUDIO },
  { id: 'd-reclamer', title: 'Les étapes de la réclamation', format: 'flashcard' as const, coach: "Lis chaque étape à voix haute, calmement. EN: read each step calmly.", items: [E(1096), E(1103), E(1097), E(1098), E(1100), E(1101)], audio: AUDIO },
  { id: 'd-recit', title: 'Dans l’ordre', format: 'flashcard' as const, coach: "Lis les nouvelles d'Awa dans l'ordre, avec d'abord, ensuite, enfin. EN: read in order.", items: [E(1114), E(1116), E(1117), E(1118), E(1119), E(1124)], audio: AUDIO },
  { id: 'd-excuse', title: 'Reconnaître d’abord', format: 'mcq' as const, coach: "Reconnaître, expliquer en une phrase, réparer. EN: own it first.", q: 'Tu as manqué une réunion. Ta première phrase ?', opts: [fr(E(1129)), fr(E(1128))], correct: 1, why: "D'abord tu reconnais. EN: own it first.", items: [E(1128), E(1129), E(1131), E(1132), E(1133), E(1138)], audio: AUDIO },
  { id: 'd-connecteurs', title: 'Ajouter, ou opposer et conclure', format: 'sort' as const, coach: "Deux piles : le connecteur ajoute, ou il oppose et conclut. EN: sort by job.", buckets: ['ajouter', 'opposer, conclure'], items: [E(1146), E(1154), E(1145), E(1147), E(1148), 'fr.b1.connecteurs-logiques.1375'], audio: AUDIO },
  { id: 'd-relire', title: 'Vous, jusqu’au bout', format: 'mcq' as const, coach: "Relis : la demande, le registre, les accords, les accents, la fin. EN: the five checks.", q: 'Dans un courriel à un hôtel, laquelle ?', opts: [fr(E(1172)), fr(E(1171))], correct: 0, why: "Vous et le conditionnel. EN: vous.", items: [E(1160), E(1161), E(1162), E(1164), E(1165), E(1172)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'sans-demande', description: 'States the problem and stops: the email never says what the reader should do.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a12-mission'], drill: 'd-demande', retest: 'd-demande' },
  { id: 'partie-oubliee', description: 'Leaves out a part of the email: no subject line, no greeting, no thanks before the closing, or an attachment not mentioned.', detectOn: ['a2-reperer', 'a2-oublis', 'a2-check', 'a12-mission'], drill: 'd-parties', retest: 'd-parties' },
  { id: 'formules-melangees', description: 'Opens and closes in two different registers (Madame, Monsieur with Bises; Salut Madame), or switches between tu and vous.', detectOn: ['a3-assortir', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-formules', retest: 'd-formules' },
  { id: 'raison-cachee', description: 'Buries the reason for writing after a self-introduction or small talk, or opens with « Suite à » when there was no earlier exchange.', detectOn: ['a4-choisir', 'a4-erreurs', 'a4-check', 'a12-mission'], drill: 'd-ouverture', retest: 'd-ouverture' },
  { id: 'reponse-bancale', description: 'Replies to an invitation with a bare yes or no, or builds the feeling with the wrong structure (que for one subject, indicative after que).', detectOn: ['a5-trier', 'a5-piege', 'a5-check'], drill: 'd-reponse', retest: 'd-reponse' },
  { id: 'question-directe', description: 'Asks a service direct or blunt questions, or builds an indirect question with est-ce que or inversion.', detectOn: ['a6-transformer', 'a6-erreurs', 'a6-check', 'a12-mission'], drill: 'd-renseignement', retest: 'd-renseignement' },
  { id: 'plainte-en-colere', description: 'Writes a complaint as anger or a vague demand instead of dated facts, what was already tried and a precise request.', detectOn: ['a7-ton', 'a7-piege', 'a7-check', 'a12-mission'], drill: 'd-reclamer', retest: 'd-reclamer' },
  { id: 'recit-desordre', description: 'Tells news or an event out of order, without order words, or with the setting in the passé composé.', detectOn: ['a8-ordre', 'a8-mission', 'a8-check', 'a12-mission'], drill: 'd-recit', retest: 'd-recit' },
  { id: 'excuse-floue', description: 'Apologises with a long justification or a « mais », or without offering to put things right.', detectOn: ['a9-que-de', 'a9-erreurs', 'a9-check'], drill: 'd-excuse', retest: 'd-excuse' },
  { id: 'idees-en-vrac', description: 'Links ideas with spoken chains (et puis, en plus, alors) or not at all, so the reader cannot see the steps.', detectOn: ['a10-relier', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-connecteurs', retest: 'd-connecteurs' },
  { id: 'envoi-sans-relire', description: 'Sends without rereading: agreement and accent slips, texting abbreviations, tu and vous mixed, a closing that does not match.', detectOn: ['a11-reperer', 'a11-erreurs', 'a11-check', 'a12-mission'], drill: 'd-relire', retest: 'd-relire' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names a position. */
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
 *  REFERENCE SHEETS (layer deep: teach and table only)
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-anatomie', "L'anatomie d'un courriel", ["l'objet", 'les cinq parties', 'la première phrase'], [
    teach('sheet-anatomie-teach', 'Écrire pour être répondu',
      `${REFRAME} Un courriel a cinq parties : l'objet, la formule d'appel, le corps, la formule de politesse, la signature. Le corps commence par la raison, continue avec les faits, et contient la demande. EN: ${REFRAME_EN}`),
    table('sheet-anatomie-table', 'Les cinq parties', ['Partie', 'Ce qu’elle fait', 'Exemple'], [
      ["l'objet", 'dit le sujet avant l’ouverture', fr(E(1004))],
      ["la formule d'appel", 'salue le lecteur et fixe le registre', 'Madame, Monsieur,'],
      ['le corps : la raison', 'dit pourquoi tu écris', fr(E(1005))],
      ['le corps : les faits', 'raconte, avec des dates', fr(E(1017))],
      ['le corps : la demande', 'dit ce que le lecteur doit faire', fr(E(1019))],
      ['la formule de politesse', 'remercie et ferme', `${fr(E(1020))} Cordialement,`],
      ['la signature', 'ton nom, et ce qui aide', 'Alex Martin, 12, rue des Pins, Québec'],
    ]),
    table('sheet-anatomie-ouvrir', 'La première phrase', ['Situation', 'Première phrase'], [
      ['premier contact, un but', fr(E(1050))],
      ['premier contact, plus soutenu', fr(E(1060))],
      ['après un appel, une réunion', fr(E(1051))],
      ['tu réponds', fr(E(1052))],
      ['vous étiez d’accord avant', fr(E(1055))],
      ['un sujet précis', fr(E(1096))],
    ]),
  ]),
  sheet('sheet-formules', 'Les formules, selon le lecteur', ['ouvrir', 'fermer', 'France et Québec'], [
    teach('sheet-formules-teach', 'La fin répond au début',
      `La formule d'appel choisit la tenue, la formule de politesse la confirme. ${Cap(REGISTRES_REF)} : « ${B125_REFRAME} » ${Cap(TUVOUS_REF)} : « ${B126_REFRAME} » EN: the greeting sets the register and the closing confirms it.`),
    table('sheet-formules-table', 'Ouvrir et fermer', ['Pour qui', 'Ouvrir', 'Fermer'], [
      ['un proche', 'Coucou Léa, Salut Léa,', "Bises, Je t'embrasse, À bientôt"],
      ['un collègue', 'Bonjour Marc,', 'Bonne journée, Bonne fin de journée'],
      ['une responsable, un client connu', 'Bonjour Madame Gagnon,', 'Cordialement, Bien cordialement'],
      ['une personne qui t’écrit avec vous', 'Bonjour Monsieur Diallo,', 'Bien à vous, Cordialement'],
      ['un service, un inconnu', 'Madame, Monsieur,', 'Cordialement'],
      ['une lettre officielle, une réclamation', 'Madame, Monsieur,', "Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées."],
      ['des nouvelles, avec vous', 'Chère Madame Lefèvre,', 'Bien amicalement'],
      ['un groupe', 'Bonjour à toutes et à tous,', 'Au plaisir de vous y voir'],
    ]),
    table('sheet-formules-regions', 'France et Québec', ['Au Québec', 'En France', 'Registre'], [
      ['un courriel', 'un courriel, un mail', 'courant'],
      ['Salutations distinguées,', "Veuillez agréer... (lettre)", 'soutenu'],
      ['Merci et bonne journée,', 'Bonne journée,', 'courant'],
      ['Au plaisir', 'Bien cordialement', 'courant'],
      ['la fin de semaine', 'le week-end', 'courant'],
    ]),
  ]),
  sheet('sheet-types', "Les types de textes de l'examen", ['inviter et répondre', 'demander un renseignement', 'réclamer', 'donner des nouvelles', "s'excuser"], [
    teach('sheet-types-teach', 'Un type, des étapes',
      "À l'examen de B1 (TEF, TCF, DELF), la production écrite demande souvent un courriel ou une lettre : répondre à une invitation, demander un renseignement, réclamer, donner des nouvelles, s'excuser. Chaque type a ses étapes. Suis-les, et ta demande sera claire. EN: each exam text type has its steps; follow them."),
    table('sheet-types-table', 'Les étapes de chaque type', ['Type', 'Les étapes', 'Une phrase utile'], [
      ['inviter', 'quoi, quand, où, demande de réponse', fr(E(1065))],
      ['accepter', 'merci, oui, le futur, un sentiment', fr(E(1067))],
      ['refuser', 'merci, non, une raison, une autre date ou un vœu', fr(E(1070))],
      ['demander un renseignement', 'la raison, une question indirecte par phrase, merci', fr(E(1080))],
      ['réclamer', 'les faits, le problème, déjà fait, la demande, la preuve', fr(E(1100))],
      ['donner des nouvelles', "la raison, les étapes dans l'ordre, une question au lecteur", fr(E(1114))],
      ["s'excuser", 'reconnaître, expliquer en une phrase, réparer', fr(E(1128))],
    ]),
    teach('sheet-types-grammaire', 'La grammaire du B1 dans un courriel',
      `Le conditionnel poli : ${POLITESSE_REF}. Le subjonctif après un sentiment, ou de + infinitif : ${SUBJ_RANGE_REF}. La question indirecte : ${DISCOURS_REF}. Le passé composé et l'imparfait pour les faits : ${PC_IMP_REF}. EN: the B1 grammar each text type uses, and where it was taught.`),
  ]),
  sheet('sheet-connecteurs', 'Les connecteurs du courriel', ['ordonner', 'ajouter', 'prouver', 'opposer', 'conclure'], [
    teach('sheet-connecteurs-teach', 'Un connecteur par étape',
      `« ${B130_REFRAME} » Dans un courriel, mets-le en tête de phrase, avec une virgule, au début de chaque étape. À l'oral, et puis, en plus et alors suffisent ; à l'écrit, choisis le mot qui dit le lien. EN: ${B130_REFRAME_EN}`),
    table('sheet-connecteurs-table', 'Les connecteurs écrits', ['Pour', 'Connecteur', 'Exemple'], [
      ['commencer', "tout d'abord, d'abord", fr(E(1144))],
      ['continuer', 'ensuite, puis', fr(E(1118))],
      ['prouver', 'en effet', fr(E(1145))],
      ['ajouter', 'de plus, par ailleurs', fr(E(1146))],
      ['opposer', 'cependant, pourtant, en revanche', fr(E(1147))],
      ['conclure, demander', "c'est pourquoi, donc, par conséquent", fr(E(1148))],
      ['finir', 'enfin', fr(E(1149))],
    ]),
    table('sheet-connecteurs-oral', "De l'oral à l'écrit", ["À l'oral", "À l'écrit"], [
      ['et puis', "ensuite, tout d'abord"],
      ['en plus', 'de plus, par ailleurs'],
      ['mais', 'cependant, pourtant'],
      ['alors, du coup', "c'est pourquoi, donc"],
    ]),
    teach('sheet-connecteurs-lecons', 'Où ils ont été appris',
      `${Cap(COORD_REF)} : l'ordre et l'ajout. ${Cap(SUBORD_REF)} : la cause et la conséquence. ${Cap(CONCESSION_REF)} : « ${B132_REFRAME} » EN: ${B132_REFRAME_EN}`),
  ]),
  sheet('sheet-relire', "Relire avant d'envoyer", ['la liste', 'les critères de l’examen'], [
    teach('sheet-relire-teach', 'Cinq points',
      "Relis ton courriel comme ton lecteur le lira. Un : la demande est-elle là ? Deux : le registre, et tu ou vous, sont-ils les mêmes partout ? Trois : les accords. Quatre : les accents. Cinq : la fin répond-elle au début ? Puis compte tes mots. EN: five checks, then count your words."),
    table('sheet-relire-table', 'La liste de relecture', ['Point', 'La question', 'Exemple'], [
      ['la demande', 'Mon lecteur sait-il quoi faire ?', fr(E(1019))],
      ['le registre', 'Vous du début à la fin ? Aucun mot familier ?', fr(E(1172))],
      ["l'abréviation", 'Chaque mot en entier ?', fr(E(1162))],
      ['les accords', 'être, et que devant le verbe', fr(E(1161))],
      ['les accents', 'déjà, à, où, reçu', 'Nos amis sont déjà arrivés.'],
      ['la fin', 'Répond-elle au début ?', 'Madame, Monsieur, ... Cordialement'],
    ]),
    table('sheet-relire-examen', "Les critères de l'examen de B1", ['Critère', 'Ce qu’on regarde'], [
      ['la tâche', 'la bonne situation, une demande claire, la bonne longueur'],
      ['le registre', "les formules, l'objet, vous partout"],
      ["l'organisation", 'des paragraphes, des connecteurs'],
      ["l'étendue", 'des structures de B1 variées'],
      ['la correction', 'les accords, les temps, les accents'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-39-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-39-premier': "The act 1 reading: the narration, the hurried email and the company's reply. ONE VOICE, one take, Québécoise: the narration even, the « Salut… » email read fast and flat as it was typed, the reply calm and professional. A clear beat before the reply.",
  'rec-b1-39-anatomie': "The rewritten complaint (act 2), ONE VOICE, one take, read as the writer reads it back before sending. A short pause after the subject line, after « Madame Tremblay, », and before « Cordialement », so the five parts are heard as blocks.",
  'rec-b1-39-parties': "The five anatomy cards. Read each card's line plainly, one beat between cards. Card five is a name: read it as a signature, not a sentence.",
  'rec-b1-39-julien': "Julien's three messages (act 3), ONE VOICE, one take, Québécois: the note to Léa quick and happy, the email to his manager even, the letter to the bank slow and careful. A clear beat between the three.",
  'rec-b1-39-piege-formules': "The audio step plays each card's CORRECT formula, the one that fits the reader. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-39-debuts-ecoute': "REQUIRED FOR THE EAR MISSION (act 4): ten opening sentences, ONE TAKE, TWO VOICES alternating, in authored order, at a normal reading pace. Line seven (« Je t'écris… ») is read warmly, as to a friend; the others as office emails. Nothing slowed down.",
  'rec-b1-39-invitation': "The invitation and the two replies (act 5), THREE VOICES: Sophie (the invitation), Awa (the first reply, warm), Marc (the second reply, sorry but friendly). One take each, a clear beat between the three texts.",
  'rec-b1-39-repondre': "The four invitation cards, read plainly, one beat between cards. Card four carries lesson 16's reframe in its body; only the card line is spoken.",
  'rec-b1-39-piege-que-de': "The audio step plays each card's CORRECT sentence (que + subjunctive or de + infinitive). Read the six plainly; the wrong versions in promptSound are never spoken.",
  'rec-b1-39-renseignement': "Karim's request (act 6), ONE VOICE, one take, a Montréal speaker, read as he reads it back before sending: calm, polite, a small pause before each of the three questions.",
  'rec-b1-39-questions': "The four question cards. Card one is spoken French at a counter, quick and casual; cards two to four are written requests read evenly. A clear beat between cards.",
  'rec-b1-39-reclamation': "Chantal's complaint (act 7), ONE VOICE, one take, a Liège speaker (Belgian French welcome), firm and calm, never angry. The figures (35 euros, 52 euros) read clearly.",
  'rec-b1-39-piege-colere': "The audio step plays each card's CORRECT, firm sentence. Read the six calmly and identically in pace; the angry versions in promptSound are never spoken.",
  'rec-b1-39-nouvelles': "Awa's news (act 8), ONE VOICE, one take, a Dakar francophone voice, warm and unhurried, read as a letter to a teacher she likes. The order words (d'abord, ensuite, enfin) given a small lift.",
  'rec-b1-39-excuses-ecoute': "REQUIRED FOR THE EAR MISSION (act 9): nine lines, ONE TAKE, ONE VOICE (Julien, Québécois), in authored order, sincere and brief, as a voice memo he records before writing his email. No pause beyond the punctuation.",
  'rec-b1-39-excuses': "The four apology cards, read sincerely and plainly, one beat between cards.",
  'rec-b1-39-paragraphe': "Mélanie's heating complaint (act 10), ONE VOICE, one take, a Québécoise, firm and tired. Each connector (tout d'abord, en effet, de plus, cependant, c'est pourquoi, enfin) followed by the comma pause it carries in writing.",
  'rec-b1-39-piege-connecteurs': "The audio step plays each card's CORRECT, written sentence. Read the six evenly; the spoken versions in promptSound are never spoken.",
  'rec-b1-39-brouillon': "Tomás's draft (act 11), ONE VOICE, one take, read exactly as written, slips included: « bcp » read as the letters B C P, so the learner hears that it does not belong. No correction in the delivery.",
  'rec-b1-39-modele': "The model request (act 12), ONE VOICE, one take, a Québécoise, calm and clear, read as the writer reads it back before sending. A pause after the subject line, after the greeting, between paragraphs and before the closing formula, so the plan is audible.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 39',
  intro: "The B1 capstone. An email that states a problem but asks for nothing gets nothing back. This lesson builds the written message from the subject line to the signature: the five parts, the greetings and closings that suit each reader (France and Québec marked), the first sentence that says why you are writing, and the text types of the B1 writing exam: inviting and replying, asking for information, complaining, giving news and apologising. Every act reuses a B1 skill you already have (the polite conditional, the subjunctive after a feeling, indirect questions, register, tu or vous, connectors) and adds one tool for the final task: a formal email of 120 to 150 words, as in the TEF, TCF and DELF.",
  skill: 'PE',
  grammarAssumed: [
    PC_IMP_UNIT, FUTUR_UNIT, POLITESSE_UNIT, SUBJ_DECL_UNIT, SUBJ_INF_UNIT, DISCOURS_UNIT,
    REGISTRES_UNIT, TUVOUS_UNIT, COORD_UNIT, SUBORD_UNIT, CONCESSION_UNIT, LECTURE_UNIT,
  ],
  grammarIntroduced: [
    'The email and the formal letter as a structure: subject line, greeting, body (reason, facts, request), closing formula and signature, with attachments announced',
    'Greetings and closings matched by reader and register, from Salut / Bises to Madame, Monsieur / Je vous prie d’agréer, with Québec and France usage marked (Salutations distinguées, Merci et bonne journée, courriel against mail, Veuillez agréer)',
    'Opening sentences that state the purpose: Je vous écris pour / afin de / au sujet de, Suite à notre conversation, En réponse à votre courriel du, Comme convenu',
    'The B1 exam writing text types and their moves: invitation and reply (accept, decline with a reason), request for information (one indirect conditional question per sentence), complaint (facts, problem, already done, request, proof), news and an event told, apology (own it, explain in one sentence, repair)',
    'Paragraphing with one written connector per step (tout d’abord, en effet, de plus, cependant, c’est pourquoi, enfin), replacing spoken chains (et puis, en plus, alors)',
    'A proofreading checklist for learner writing: request stated, register and tu / vous consistent, agreement, accents, closing that matches the opening',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "La leçon qui réunit le B1. Un courriel qui dit le problème sans rien demander ne reçoit rien. Ici, tu construis un courriel de l'objet à la signature, tu ouvres et tu fermes pour ton lecteur, et tu écris les textes de l'examen. À la fin, tu écris un courriel formel de 120 à 150 mots.",
    minutes: 150,
    difficulty: 4,
    glyph: '@',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: COURRIELS_LETTRES_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, MODELE_TEXT, dicteeFor };
