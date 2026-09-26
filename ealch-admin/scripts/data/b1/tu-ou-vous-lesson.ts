// b1.26.l1 « Tu ou vous » : the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md, in the
// WORKSHOP shape (B1-WORKSHOP-AND-VOCAB-SHAPES.md §1, register variant).
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]` and the validators run on `LESSON` itself, as b1.20 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   WORKSHOP rhythm per act 2 to 10 (shapes doc §1.1): meet the TEXT
//   (reading, listening, story), notice the MOVE (tapTable, cardDeck,
//   focus, examples), practise it on NEW material (groupDrill, trapDrill,
//   commonErrors: "which fits HERE, and why"), use it (flashcards, a
//   rewrite groupDrill, a scenario), then the gated act check.
//
//    1  Le premier matin à Lyon      6   a Montréal tu at a Lyon firm; task announced
//    2  Le réglage par défaut        6   strangers, services, work / close, children, peers
//    3  Passer au tu                 7   on se tutoie, on se dit tu, accepting, declining
//    4  Qui propose                  6   the senior offers, the junior waits; one-way tu
//    5  Au bureau, en famille        6   start-ups and sites tu, firms and offices vous, in-laws
//    6  Une seule personne           6   vous êtes gentille, Madame; arrivé / arrivée / arrivés
//    7  Les échos                    6   te/vous, ton/votre, tes/vos, viens/venez, assieds-toi
//    8  Le faux pas                  6   the three-word repair, receiving a slip
//    9  À l'écrit                    6   Madame, Monsieur / Bonjour Maître / Bonjour Julie / Salut
//   10  Ailleurs en français         6   Québec, Belgium, Switzerland, West Africa
//   11  Deux messages, deux distances 11 model, plan, role play, TASK, quiz
//
//   TOTAL 72 missions, 11 acts, 446 estimated screens. Corpus: 151 authored
//   rows in eleven blocks (.1000-.1150) plus 15 reused seed rows, 166 item
//   ids in all, 163 of them released act by act through `deckTranche` (the
//   other 3 are seed rows with no flashcard drill, NOT_DECK_ABLE). Texts: 6
//   readings, 3 listenings, 2 stories and the opening scene. Quiz: 11 rounds
//   of 8 (36 mcq, 23 typeIn, 14 errorSpot, 15 listenChoose). Eleven error
//   triggers, eleven drills, five reference sheets reached from 10 missions
//   by `sheetId`, eleven terms. Three tapTables (acts 2, 7, 9), four
//   cardDecks, three trapDrills, five commonErrors, two scenarios.
//   Chapter artwork: `tu-ou-vous-image-prompts.md`, 11 prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Tu ou vous règle la distance. La personne, elle, ne change pas. »
//   EN: Tu or vous sets the distance. The person stays the same.
//
//   ONE METAPHOR, THE DISTANCE BETWEEN TWO PEOPLE, drawn as the width of a
//   table (term « la distance »; every chapter image). Choosing tu or vous
//   sets that width; it is NOT a mark of niceness (b1.09's point) and NOT a
//   number (act 6: vous is grammatically plural, the person is one). The
//   second sentence is what makes acts 6 and 7 part of the same lesson: the
//   verb and the echoes follow the distance, the agreement follows the
//   person. Rejected candidates: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    tu against vous as a system: the default, switching and who
//           offers, workplace and family conventions, singular-vous
//           agreement, the echoes, the slip and its repair, email
//           greetings and sign-offs by distance, francophone variation.
//   QUOTES  b1.09's reframe (sheet-choix) and b1.21's (sheet-ecrit), both
//           imported and never retyped. a1.05 is CITED through its own rows
//           (fr.a1.cafe.176 to .178, act 6 card 1), not through its
//           reframe, which is about conjugation. b1.25 is POINTED AT for
//           register (roundup, sheet-choix) and not quoted: it is being
//           written in parallel.
//   LEAVES  subject pronouns to a1.05; the politeness ladder and the polite
//           conditional to b1.09 (scenario alts accept « vous pourriez »);
//           inversion to b1.21 (« Pourriez-vous » is used, never taught);
//           register in general to b1.25; pronominal verbs to a2.22 and the
//           être participle to a2.21 (both cited by label); the full formal
//           letter to b1.39 (« Je vous prie d'agréer » is recognition only);
//           the subjunctive to b1.14 to b1.16 (no authored French string
//           uses it; « J'attends sa proposition » stands in for it).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22) AND THE WORKSHOP SHAPE
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (Madame Roux and Maître Girard say vous, Théo and Julie
//   tu). Every learner surface that explains something carries English
//   (`en`, or a final « EN: »), and NO ANSWER ever does. Every `say` is
//   French. Theme `rp-etiquette`, existing (corpus §A.1). A1 and A2
//   citations use the English trail label; b1.* ones are French from the
//   plan. Setting: Lyon and Montréal, with Genève, Liège and Dakar;
//   characters recur only inside this lesson. The learner's own gender is
//   never agreed with anything: every learner line avoids it.
//
//   Bubbles carry no spaced « ? » or « ! » (6.4): every question in this
//   lesson lives in a choice row, a reading, a listening, a scenario turn or
//   a quiz. The learner's tu request in the scene is written as a request
//   with a full stop.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE WORKSHOP SHAPE, second instance. 72 missions (shapes doc: 60 to
//      80), 9 texts plus 3 dialogues (shapes doc: 6 to 9 readings or
//      listenings; the two stories and the scene are extra). Every act from
//      2 to 10 opens on its text and closes on a gated check, so each act is
//      six missions. Keep six as the workshop act, or allow seven or eight?
//   2. « Je peux te tutoyer ? » is common spoken French and is NOT taught as
//      a mistake (it was in the first draft; the grader notes now accept
//      it). The lesson teaches « On peut se tutoyer ? » as the default
//      question. Agree?
//   3. FRANCOPHONE CLAIMS are hedged (souvent, beaucoup, à peu près): the
//      Swiss office vous, West African elders and tonton / tata, Québec
//      pupils tutoying teachers. A reader from each region should check the
//      four voices in act 10 before publish.
//   4. The DB holds on-topic rows the seed does not (tutoyer, vouvoyer and
//      their nouns at fr.a2.rp-etiquette.008-.011; « On se tutoie ? »;
//      « Tu peux me tutoyer, on n'est pas au bureau »), so this corpus twins
//      nine of them (corpus DB_ONLY_TWINS). Dedupe at import or keep both?
//   5. FIVE commonErrors (acts 2, 4, 8, 9, 10), the top of the 3 to 5 band.
//      Act 10's are wrong IDEAS about regions rather than wrong forms. Keep?
//   6. THREE tapTables (acts 2, 7, 9), one per act, as every B1 lesson.
//   7. The task is WRITTEN (PE, 70 to 120 words over two messages and a
//      line). Act 8's slip is spoken; a PO task on the phone would test it
//      better. Add one later?
//   8. The lesson is NOT in `_preview-b1.ts` SLUGS (this build may not touch
//      that file), so it has not been seen on the device. One line to add.
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
  GUIDE_TEXT, COURRIER_TEXT, MOTS_TEXT, COURRIELS_TEXT, VOIX_TEXT, MODELE_TEXT,
  B109_REFRAME, B109_REFRAME_EN, B121_REFRAME, B121_REFRAME_EN,
  PRONOMS_UNIT, PRONOMINAUX_UNIT, PC_ETRE_UNIT, POLITESSE_UNIT, INVERSION_UNIT,
  PRONOMS_REF, PRONOMINAUX_REF, PC_ETRE_REF, POLITESSE_REF, INVERSION_REF, REGISTRES_REF,
  COURRIELS_REF, NEXT_REF,
} from './tu-ou-vous-corpus.ts';
import { TU_OU_VOUS_TERMS } from './tu-ou-vous-terms.ts';

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
  if (!r) throw new Error(`b1.26: no item ${id}`);
  return r;
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.26: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.26: no respell on ${id}`);
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
 *  ACT 1 · LE PREMIER MATIN À LYON
 *
 *  The problem, shown. The learner's French is correct and the distance is
 *  wrong: a Montréal studio tu, dropped on an older stranger at a Lyon law
 *  firm. The task is announced in the resolve beat.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4): the learner's tu
 *  request is written as a statement with a full stop, which French allows
 *  for a request, and the questions live in the choice rows. */
const TU_ACCUEIL = "Bonjour. Tu peux prévenir Maître Girard, s'il te plaît. J'ai rendez-vous à neuf heures.";

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Un tu de Montréal',
  frSub: 'Le premier matin à Lyon',
  setting: { place: "L'accueil du cabinet Girard, rue de la République", city: 'Lyon', time: '8 h 55', ambience: 'un grand bureau en bois, du parquet, le silence du matin' },
  beats: [
    {
      kind: 'narration',
      text: "Lyon, un lundi matin. Tu arrives de Montréal, où tout le monde se tutoie au studio. Tu as rendez-vous avec une cliente, Maître Girard, avocate. À l'accueil, une dame d'une soixantaine d'années lève les yeux.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Madame Roux',
      fr: fr(E(1024)), en: src(E(1024)).en, respell: rsOf(E(1024)),
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: TU_ACCUEIL,
      en: 'Hello. Can you let Maître Girard know, please. I have an appointment at nine.',
      respell: '[bohⁿ-ZHOOR | tü peu pray-vuh-neer meh-truh zhee-RAR | seel tuh PLEH | zhay rahⁿ-day-VOO a nuh-VUHR]',
      stage: 'À Montréal, tu parles comme ça à tout le monde.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Madame Roux',
      fr: fr(E(1002)), en: src(E(1002)).en, respell: rsOf(E(1002)),
      stage: 'Elle a répondu avec vous, et sa voix est devenue plus froide.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Elle ne sourit plus. Elle appelle Maître Girard sans te regarder. Tu n'as rien dit de faux, et pourtant quelque chose s'est fermé.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase ouvre bien ce premier matin ?',
      size: 'lg',
      options: [
        { fr: fr(E(1001)), respell: rsOf(E(1001)), en: src(E(1001)).en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1000)), respell: rsOf(E(1000)), en: src(E(1000)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Madame Roux sourit et appelle Maître Girard tout de suite. Le vous a gardé la bonne distance, et elle t'offre un café.",
        breaks: "Madame Roux répond avec vous, un peu sèche. Le tu a supprimé une distance qu'elle n'avait pas choisie.",
      },
    },
    {
      kind: 'break',
      heading: 'À Montréal, oui. Ici, pas encore.',
      body: "Ta phrase est correcte, et à Montréal elle passe partout. Mais ici, une dame plus âgée que tu ne connais pas, c'est vous. EN: correct French, wrong distance: an older stranger gets vous.",
      wrong: { fr: fr(E(1001)), ipa: ipaOf(E(1001)), respell: rsOf(E(1001)), en: src(E(1001)).en },
      right: { fr: fr(E(1000)), ipa: ipaOf(E(1000)), respell: rsOf(E(1000)), en: src(E(1000)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Maître Girard arrive. À la fin de cette leçon, tu vas écrire la même nouvelle deux fois : à Julie, ta collègue de Montréal, en tu, et à Maître Girard, en vous.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['distance', 'defaut'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Choisir la bonne distance', s: 'Actes 2 et 5 : par défaut, au travail, en famille' },
    { t: 'Passer au tu au bon moment', s: 'Actes 3, 4 et 8 : proposer, attendre, réparer un faux pas' },
    { t: 'Garder toute la phrase cohérente', s: 'Actes 6 et 7 : l’accord, votre ou ton, venez ou viens' },
    { t: 'Écrire la même nouvelle deux fois', s: 'Actes 9 à 11 : les courriels, le Québec, et ta mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the firm's welcome note, a real text in vous where the
 *  whole etiquette of the lesson is already at work. */
const A1_GUIDE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-guide',
  layer: 'core',
  questionsInModal: true,
  title: 'Le guide du cabinet',
  frSub: 'Lis, et cherche qui dit tu à qui',
  text: GUIDE_TEXT,
  glossary: [
    { word: 'usages', en: 'customs, the way things are done', note: 'Ce qui se fait dans un lieu, sans être une loi.' },
    { word: 'associé', en: 'partner (in a firm)', note: 'Un avocat qui possède une partie du cabinet.' },
    { word: 'signe de confiance', en: 'sign of trust', note: 'On te montre qu’on te fait confiance.' },
    { word: "l'accueil", en: 'reception', note: 'Le bureau à l’entrée, où on reçoit les visiteurs.' },
    { word: 'échappe', en: 'slips out', note: 'Le mot sort sans que tu le décides.' },
  ],
  questions: [
    { q: 'Qui les avocats vouvoient-ils toujours ?', a: 'Tous les clients, même ceux qu’ils connaissent depuis vingt ans.' },
    { q: 'Un associé te propose le tu. Que fais-tu ?', a: 'Tu acceptes simplement : c’est un signe de confiance.' },
    { q: 'Qui propose le tu la première semaine ?', a: 'Pas toi. Le guide dit : « Ne le proposez pas vous-même la première semaine. »' },
    { q: 'Deux collègues se tutoient à la pause. Et devant un client ?', a: 'Ils reviennent au vous. Devant un client, on garde la distance.' },
    { q: 'Et si le tu t’échappe ?', a: 'Ce n’est pas un drame : tu t’excuses d’un mot, et tu continues.' },
  ],
  audio: REC('rec-b1-26-guide'),
  say: REFRAME,
  terms: ['distance', 'vouvoyer'],
};

/** BUILD, on the text just read: the two distances side by side. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Deux distances',
  groups: [
    grp('Au cabinet, on dit vous', [
      it(E(1000), 'à l’accueil, une inconnue plus âgée'),
      it(E(1002), 'la réponse de Madame Roux'),
      it(E(1004), 'une présentation au travail'),
      it(E(1006), 'la règle du cabinet'),
    ], chk(
      'Dans ces quatre phrases, qui parle à qui ?',
      ['Des gens qui se connaissent bien.', 'Des gens qui gardent une distance.'], 1,
      'Un cabinet, une cliente, une inconnue : ici, la distance est la règle. EN: at the firm, distance is the rule.')),
    grp('À Montréal et entre amis, on dit tu', [
      it(E(1005), 'au studio, à Montréal'),
      it(E(1010), 'avec des amis'),
      it('fr.a1.cafe.176', 'à un proche'),
      it(E(1007), 'la règle du tu'),
    ], chk(
      'Le tu de ces phrases est-il impoli ?',
      ['Non, il est proche.', 'Oui, toujours un peu.'], 0,
      "Le tu n'est pas une faute de politesse : il enlève la distance. EN: tu is not rude; it removes distance.")),
    ctl('Le guide', 'Le guide dit : « Madame Roux vous dira vous. » Et toi, que lui dis-tu ?',
      ['tu, pour être sympathique', 'vous aussi', 'rien, tu attends'], 1,
      'La distance se règle à deux, et elle va dans les deux sens. EN: the distance runs both ways.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['distance', 'defaut'],
};

/** CHOOSE: where the wrong distance costs something real. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où la distance compte',
  cases: [
    uc("À l'accueil d'un cabinet, à Lyon", E(1000)),
    uc('On te fait attendre, poliment', E(1002)),
    uc('Tu racontes ta vie à Montréal', E(1005)),
    uc('Tu hésites avant de parler', E(1011)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['distance', 'vouvoyer'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La dame à l’accueil', 'Une inconnue plus âgée, dans un cabinet à Lyon. Tu dis...',
    ['tu', 'vous'], 1,
    'vous : tu ne la connais pas, et elle est plus âgée. EN: vous for an older stranger.'),
  ctl('Le tu de Montréal', 'Le tu de ton studio, à Montréal, est-il impoli ?',
    ['Non, il est proche.', 'Oui.'], 0,
    'Il enlève la distance, et là-bas, c’est normal. EN: it is close, not rude.'),
  ctl('La phrase de la leçon', 'Tu ou vous règle...',
    ['la politesse', 'la distance', "l'âge"], 1,
    'La distance. La personne, elle, ne change pas. EN: the distance; the person stays the same.'),
], ['distance', 'defaut']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le premier matin à Lyon',
    opener: {
      line: 'Un tu de Montréal, un matin à Lyon, et une porte se ferme : ici tu apprends à régler la distance. EN: A Montréal tu, a Lyon morning, and a door closes: here you learn to set the distance.',
      imageRef: 'lessons/tu-ou-vous/act01.jpg',
    },
    sections: [],
    milestone: "Tu sais que tu et vous règlent une distance, et qu'une inconnue plus âgée, au travail, c'est vous. EN: You know tu and vous set a distance, and that an older stranger at work gets vous.",
    estScreens: 26, restPoints: ['a1-guide'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_GUIDE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 · LE RÉGLAGE PAR DÉFAUT
 *
 *  The starting point before anything else is known. Heard first, across one
 *  ordinary day, then named, then sorted.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear. `hideLines` because the questions are about who is talking
 *  to whom, which the ear has to catch from tu or vous alone. */
const A2_JOURNEE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-journee',
  layer: 'core',
  hideLines: true,
  title: 'Une journée, dix phrases',
  frSub: 'Écoute qui dit tu, et à qui',
  lines: [
    ln(E(1016)), ln(E(1017)), ln(E(1018)), ln(E(1019)), ln(E(1020)),
    ln(E(1021)), ln(E(1022)), ln(E(1023)), ln(E(1024)), ln(E(1025)),
  ],
  questions: [
    { q: 'Première phrase : qui parle à qui ?', opts: ['deux amies', 'un client à une boulangère'], correct: 1, why: '« Bonjour Madame, vous avez encore des croissants ? » Un service, une inconnue : vous. EN: a shop counter, vous.' },
    { q: 'Deuxième phrase : à qui parle-t-on ?', opts: ['à un enfant', 'à un collègue', 'au médecin'], correct: 0, why: '« Tu as quel âge ? » On pose cette question à un enfant, et on lui dit tu. EN: a child, tu.' },
    { q: 'Quatrième phrase : pourquoi tu ?', opts: ['Il parle à sa mère.', 'Il parle à une inconnue.'], correct: 0, why: '« Maman, tu viens dîner dimanche ? » La famille : tu. EN: family, tu.' },
    { q: 'Septième phrase : qui parle ?', opts: ['un ami', 'un enfant', 'un employé au guichet'], correct: 2, why: '« Vous pouvez me montrer votre pièce d’identité ? » Une administration : vous. EN: an official, vous.' },
    { q: 'Huitième phrase : tu, avec quelqu’un qu’on connaît peu. Pourquoi ?', opts: ['Deux étudiants du même âge.', 'C’est impoli.'], correct: 0, why: '« Tu es aussi en master de droit ? » Entre étudiants, on se tutoie tout de suite. EN: students of the same age, tu at once.' },
  ],
  audio: REC('rec-b1-26-journee'),
  say: REFRAME,
  terms: ['defaut', 'distance'],
};

/** NOTICE: the default, six situations in one table. */
const A2_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-tableau',
  layer: 'core',
  sheetId: 'sheet-choix',
  title: 'Le point de départ',
  cols: ['Situation', 'Tu ou vous', 'Pourquoi'],
  rows: [
    { cells: ['la boulangère, le vendeur', 'vous', 'un service, un inconnu'], say: fr(E(1016)),
      detail: { title: 'Les commerces', body: 'Tu ne connais pas la personne, et elle te rend un service : vous. EN: a stranger serving you gets vous.', say: fr(E(1029)) } },
    { cells: ['le guichet, la mairie', 'vous', 'une administration'], say: fr(E(1022)),
      detail: { title: 'Les bureaux', body: 'L’employé te dit vous, et tu lui réponds vous. EN: officials say vous, and so do you.', say: fr(E(1024)) } },
    { cells: ['ton médecin', 'vous', 'même après dix ans'], say: fr(E(1020)),
      detail: { title: 'Les services', body: 'On peut connaître son médecin depuis longtemps et garder le vous. EN: years of acquaintance do not remove it.', say: fr(E(1031)) } },
    { cells: ['un enfant', 'tu', 'toujours'], say: fr(E(1017)),
      detail: { title: 'Les enfants', body: 'À un enfant, on dit tu, même si on ne le connaît pas. EN: children always get tu.', say: fr(E(1028)) } },
    { cells: ['ta famille, tes amis', 'tu', 'les proches'], say: fr(E(1019)),
      detail: { title: 'Les proches', body: 'La famille et les amis : tu. Un vous, là, sonnerait comme une dispute. EN: family and friends get tu.', say: fr(E(1025)) } },
    { cells: ['un étudiant de ton âge', 'tu', 'les pairs'], say: fr(E(1023)),
      detail: { title: 'Les pairs', body: 'Entre jeunes du même âge, à une soirée ou à la fac, tu vient tout de suite. EN: young peers say tu at once.', say: fr(E(1030)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['defaut'],
};

/** PRACTISE: sort on NEW people, not the ones from the listening. */
const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-trier',
  layer: 'core',
  size: 'lg',
  title: 'Tu ou vous, par défaut',
  groups: [
    grp('Là, on dit vous', [
      it(E(1018), 'un inconnu dans la rue'),
      it(E(1035), 'au guichet'),
      it(E(1026), 'un chef, la première fois'),
      it('fr.a1.salutations.015', 'la formule de politesse du A1'),
    ], chk(
      'Qu’ont ces quatre personnes en commun ?',
      ['Tu ne les connais pas, ou c’est le travail.', 'Elles sont toutes âgées.'], 0,
      'Ce n’est pas l’âge qui compte d’abord, c’est la distance : inconnu, service, travail. EN: strangers, services, work.')),
    grp('Là, on dit tu', [
      it(E(1021), 'un ami'),
      it(E(1025), 'ta grand-mère'),
      it(E(1028), 'un enfant'),
      it(E(1034), 'ton frère'),
    ], chk(
      'Et ces quatre-là ?',
      ['Ce sont des collègues.', 'Des proches, ou un enfant.'], 1,
      'Les proches et les enfants : pas de table entre vous. EN: close people and children.')),
    ctl('Entre les deux', 'Un étudiant de ton âge, à une soirée. Tu dis...',
      ['tu, tout de suite', 'vous, puis tu plus tard'], 0,
      'Entre jeunes, dans un lieu détendu, le tu vient tout seul. EN: young peers, tu at once.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['defaut', 'tutoyer'],
};

/** PRACTISE, the traps: four reasonable choices in the wrong room. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre distances mal réglées',
  errors: [
    {
      wrong: 'Tu as encore des croissants ?',
      right: fr(E(1016)),
      why: 'Normal : en anglais, you va partout. Mais à la boulangerie, c’est un service entre inconnus : vous. EN: a shop counter is a stranger, so vous.',
    },
    {
      wrong: 'Vous avez quel âge ?',
      right: fr(E(1017)),
      why: 'Aucune faute de grammaire, et on sent ton respect. Mais à un enfant de six ans, vous sonne froid. EN: grammatical, but cold to a child.',
    },
    {
      wrong: 'Salut, vous faites quoi ce soir ?',
      right: fr(E(1021)),
      why: 'Avec un ami, vous remet une table entre vous. Il va se demander ce qui ne va pas. EN: vous to a friend sounds like something is wrong.',
    },
    {
      wrong: "Tu peux m'aider, s'il te plaît ?",
      right: fr(E(1035)),
      why: 'C’est la phrase qu’on dit à un ami. Au guichet de la préfecture, l’employée ne te connaît pas : vous. EN: at an official counter, vous.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['defaut'],
};

/** USE: say it to the right person. Backs are answers: no EN tail. */
const A2_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a2-cartes',
  layer: 'core',
  title: 'Huit phrases, huit personnes',
  cards: [
    { front: 'to the baker: do you still have croissants?', back: 'vous avez encore des croissants ?', say: fr(E(1016)) },
    { front: 'to a child: how old are you?', back: 'tu as quel âge ?', say: fr(E(1017)) },
    { front: 'to a friend: what are you doing tonight?', back: 'tu fais quoi ce soir ?', say: fr(E(1021)) },
    { front: 'to a stranger: do you know where the post office is?', back: 'vous savez où est la poste ?', say: fr(E(1018)) },
    { front: 'to your mum: are you coming to dinner on Sunday?', back: 'tu viens dîner dimanche ?', say: fr(E(1019)) },
    { front: 'at the counter: could you help me, please?', back: "vous pouvez m'aider, s'il vous plaît ?", say: fr(E(1035)) },
    { front: 'to your doctor: I am calling about my results', back: 'je vous appelle pour mes résultats', say: fr(E(1020)) },
    { front: 'to a fellow student: are you doing law too?', back: 'tu es aussi en master de droit ?', say: fr(E(1023)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['defaut'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le vendeur', 'Au magasin, tu parles au vendeur. Tu dis...',
    ['vous', 'tu'], 0,
    'Un inconnu qui te rend un service : vous. EN: vous.'),
  ctl('Ta grand-mère', 'Et à ta grand-mère ?',
    ['vous, par respect', 'tu, comme à toute la famille'], 1,
    'En France, on tutoie presque toujours sa famille. Certaines familles font autrement : l’acte 5 en parle. EN: family usually gets tu.'),
  ctl('Le point de départ', 'Par défaut, un inconnu de ton âge, dans un bureau, c’est...',
    ['tu', 'ça dépend de son humeur', 'vous'], 2,
    'Au bureau, sans autre information, vous. EN: at work, by default, vous.'),
], ['defaut']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Le réglage par défaut',
    opener: {
      line: "La boulangère, ton frère, un enfant, le guichet : ici tu apprends le point de départ, avant toute autre information. EN: The baker, your brother, a child, the counter: here you learn the starting point, before anything else is known.",
      imageRef: 'lessons/tu-ou-vous/act02.jpg',
    },
    sections: [],
    milestone: 'Tu choisis tu ou vous par défaut : les inconnus, les services et le travail d’un côté, les proches, les enfants et les pairs de l’autre. EN: You pick the default: strangers, services and work on one side; close people, children and peers on the other.',
    estScreens: 34, restPoints: ['a2-tableau', 'a2-erreurs'],
  },
  sections: [A2_JOURNEE, A2_TABLEAU, A2_TRIER, A2_ERREURS, A2_CARTES, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 · PASSER AU TU
 *
 *  Proposing, offering, accepting, and keeping vous kindly. Théo, the Lyon
 *  partner of the learner's studio, is a peer: either of them may ask.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the switch, as it happens. Bubbles carry no « ? » or « ! ». */
const A3_THEO: Sec<'story'> = {
  type: 'story',
  id: 'a3-theo',
  layer: 'core',
  title: 'Deux cafés',
  frSub: 'Théo propose',
  setting: 'Lyon, la start-up de Théo, partenaire de ton studio. Deuxième jour. Vous avez à peu près le même âge, et vous vous vouvoyez encore.',
  bubbles: [
    { from: 'narrator', fr: 'Théo pose deux cafés sur la table et s’assoit en face de toi.', en: 'Théo puts two coffees on the table and sits down opposite you.' },
    { from: 'coach', fr: 'Bon, on travaille ensemble tous les jours. On peut se tutoyer, si vous voulez.', en: 'Right, we work together every day. We can say tu, if you like.', warn: 'Il propose avec on, et il dit encore vous' },
    { from: 'user', fr: fr(E(1040)), en: src(E(1040)).en, warn: 'Tu acceptes simplement' },
    { from: 'coach', fr: 'Super. Alors, montre-moi où tu en es avec les maquettes.', en: 'Great. So show me where you are with the mock-ups.', warn: 'Il passe au tu tout de suite' },
    { from: 'user', fr: 'Presque fini. Je te les montre cet après-midi.', en: 'Nearly done. I will show them to you this afternoon.', warn: 'Toi aussi : te, et plus vous' },
    { from: 'narrator', fr: 'Un seul échange, et toute la suite a changé : tu, te, ton.', en: 'One exchange, and everything after it has changed: tu, te, ton.' },
  ],
  closing: { fr: 'Il propose, tu acceptes, et vous passez au tu dans la phrase suivante.', en: 'He offers, you accept, and you both switch to tu in the next sentence.' },
  audio: REC('rec-b1-26-theo'),
  say: REFRAME,
  terms: ['passage', 'tutoyer'],
};

/** NOTICE: the four moves, one per card. */
const A3_FORMULES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-formules',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-passage',
  title: 'Proposer, offrir, accepter',
  frSub: 'Les formules du passage',
  hint: 'Quatre cartes. Regarde qui parle, et à qui.',
  audio: REC('rec-b1-26-formules'),
  say: REFRAME,
  terms: ['passage', 'propose'],
  cards: [
    {
      head: 'Proposer entre pairs', label: 'on',
      fr: fr(E(1036)), sub: rsOf(E(1036)),
      body: 'Avec on, la question est à deux : personne n’impose rien. C’est la forme la plus courante. EN: with on, the question belongs to both of you.',
    },
    {
      head: 'Offrir, quand tu as plus de poids', label: 'me tutoyer',
      fr: fr(E(1039)), sub: rsOf(E(1039)),
      body: 'La personne la plus âgée, ou le chef, donne la permission. Elle le dit souvent encore avec vous. EN: the senior person gives permission, often still in vous.',
    },
    {
      head: 'Accepter', label: 'volontiers',
      fr: fr(E(1040)), sub: rsOf(E(1040)),
      body: 'Un mot suffit : avec plaisir, volontiers, oui bien sûr. Puis tu passes au tu tout de suite. EN: one word, then switch at once.',
    },
    {
      head: 'Garder le vous, gentiment', label: 'pour l’instant',
      fr: fr(E(1043)), sub: rsOf(E(1043)),
      body: 'C’est permis. Souris et reste chaleureux : le vous n’est pas un reproche. EN: allowed, if you say it warmly.',
    },
  ],
};

/** PRACTISE, on new lines. */
const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Demander et répondre',
  groups: [
    grp('Proposer', [
      it(E(1036), 'la question courte, entre pairs'),
      it(E(1037), 'la même, plus légère'),
      it(E(1049), 'avec une raison'),
      it(E(1050), 'en laissant le choix'),
    ], chk(
      'Dans ces quatre phrases, qui décide ?',
      ['Les deux personnes, ensemble.', 'Celui qui parle, seul.'], 0,
      'Avec on et une question, personne n’impose rien. EN: with on and a question, nobody imposes anything.')),
    grp('Répondre', [
      it(E(1040), 'accepter'),
      it(E(1041), 'accepter, et le dire en tu'),
      it(E(1051), 'accepter en un mot'),
      it(E(1043), 'garder le vous, gentiment'),
    ], chk(
      '« Je préfère garder le vous pour l’instant. » Est-ce impoli ?',
      ['Oui, c’est un refus sec.', 'Non, c’est permis, si tu le dis gentiment.'], 1,
      'On a le droit de garder la distance. Le ton fait tout. EN: allowed; tone does the work.')),
    ctl('Après le oui', 'Tu as dit « Avec plaisir, on se tutoie. » Ta phrase suivante :',
      [fr(E(1047)), fr(E(1046))], 1,
      'Tu as accepté : la phrase suivante est déjà en tu. EN: the next sentence is already in tu.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passage', 'tutoyer'],
};

/** PRACTISE, the traps, stepped. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Six passages ratés',
  rule: {
    title: 'La question, la réponse, puis le tu',
    body: 'On pose la question, et on attend la réponse. Après le oui, tout passe au tu. Et un refus se dit avec une phrase, pas avec un mot. EN: ask, wait; after the yes, everything goes to tu.',
  },
  cards: [
    { promptLabel: 'le tu avant la réponse', promptSound: 'On peut se tutoyer ? Tu travailles ici depuis longtemps ?', fr: fr(E(1036)), ipa: ipaOf(E(1036)), tip: 'Ta question est une vraie question : attends la réponse avant de passer au tu. EN: wait for the answer before switching.' },
    { promptLabel: 'le vous qui revient', promptSound: 'Avec plaisir. Vous travaillez ici depuis longtemps ?', fr: fr(E(1046)), ipa: ipaOf(E(1046)), tip: 'Tu as dit oui : la phrase suivante est en tu. EN: you said yes, so switch now.' },
    { promptLabel: 'la permission d’en haut', promptSound: 'Oui, vous pouvez.', fr: fr(E(1041)), ipa: ipaOf(E(1041)), tip: '« Vous pouvez » donne une permission, comme un chef. Entre pairs, accepte. EN: between peers, accept rather than grant.' },
    { promptLabel: 'le pronom mal placé', promptSound: 'On peut tutoyer nous ?', fr: fr(E(1036)), ipa: ipaOf(E(1036)), tip: 'se va devant tutoyer : on se tutoie, l’un l’autre. EN: se goes before the verb.' },
    { promptLabel: 'le mauvais verbe', promptSound: 'Tu peux me vouvoyer, tu sais.', fr: fr(E(1038)), ipa: ipaOf(E(1038)), tip: 'Tu offres le tu : c’est tutoyer. Vouvoyer, c’est dire vous. EN: offering tu is tutoyer.' },
    { promptLabel: 'un non tout sec', promptSound: 'Non.', fr: fr(E(1043)), ipa: ipaOf(E(1043)), tip: 'Un non tout court ferme la porte. Garde le vous avec une phrase, et un sourire. EN: decline with a sentence, not a word.' },
  ],
  drill: [
    { promptSay: 'On peut ... tutoyer ?', opts: ['nous', 'se'], correct: 1 },
    { promptSay: 'Je peux vous ... ?', opts: ['tutoyer', 'vouvoyer'], correct: 0 },
    { promptSay: 'Avec plaisir. ... travailles ici depuis longtemps ?', opts: ['Vous', 'Tu'], correct: 1 },
    { promptSay: 'Tu peux ... tutoyer, tu sais.', opts: ['me', 'moi', 'te'], correct: 0 },
    { promptSay: 'On se dit ... ?', opts: ['vous', 'tu'], correct: 1 },
    { promptSay: "Je préfère garder le ... pour l'instant.", opts: ['vous', 'tu', 'toi'], correct: 0 },
    { promptSay: 'Oui, bien sûr, ...-moi.', opts: ['vouvoie', 'tutoie'], correct: 1 },
    { promptSay: 'Si vous voulez, on peut se dire ... .', opts: ['tu', 'vous'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'La question, la réponse, puis le tu' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme ratée raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-26-piege-passage'),
  say: REFRAME,
  terms: ['passage'],
};

/** USE: three situations, three lines to pick. */
const A3_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-atoi',
  layer: 'core',
  size: 'lg',
  title: 'À toi de passer au tu',
  groups: [
    grp('Une voisine de ton âge propose', [
      it(E(1037), 'sa question'),
      it(E(1045), 'ta réponse possible'),
    ], chk(
      'Elle te dit « On se dit tu ? ». Tu réponds :',
      ['Oui, vous pouvez.', 'Avec plaisir, on se tutoie.'], 1,
      'Entre pairs, on accepte, on ne donne pas la permission. EN: accept, do not grant.')),
    grp('Un collègue depuis un an, du même âge', [
      it(E(1049), 'la question, avec une raison'),
      it(E(1052), 'sa réponse possible'),
    ], chk(
      'Vous vous vouvoyez encore. Tu proposes :',
      [fr(E(1049)), 'On peut se vouvoyer, non ?', 'Tu peux me vouvoyer.'], 0,
      'Entre pairs, tu peux demander, avec on et une raison. EN: between peers you may ask.')),
    ctl('Pas encore', 'Un fournisseur que tu connais à peine te propose le tu. Tu préfères attendre. Tu dis :',
      [fr(E(1043)), 'Non.'], 0,
      'Une phrase, et un sourire : la porte reste ouverte. EN: a sentence and a smile.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passage', 'tutoyer'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris la question que tu entends',
  frSub: 'Proposer et offrir le tu',
  itemIds: dicteeFor(3),
  audio: AUDIO,
  say: REFRAME,
  terms: ['passage'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La question', 'Tu demandes le tu à un collègue de ton âge. Tu dis...',
    ['On peut se vouvoyer ?', 'On peut se tutoyer ?'], 1,
    'Pour passer au tu, le verbe est tutoyer. Vouvoyer, c’est dire vous. EN: switching to tu is tutoyer.'),
  ctl('La réponse', '« On se tutoie ? » La meilleure réponse :',
    ['Volontiers.', 'Oui, vous pouvez.', 'Non.'], 0,
    'Un mot chaleureux suffit. EN: one warm word is enough.'),
  ctl('La suite', 'Tu as accepté le tu. La phrase suivante est...',
    ['en vous, par sécurité', 'en tu'], 1,
    'Tout de suite en tu. Revenir au vous, c’est reprendre ton oui. EN: switch at once.'),
], ['passage']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Passer au tu',
    opener: {
      line: 'Deux cafés, une question, et la table devient plus étroite : ici tu apprends à proposer et à accepter le tu. EN: Two coffees, one question, and the table gets narrower: here you learn to offer and accept tu.',
      imageRef: 'lessons/tu-ou-vous/act03.jpg',
    },
    sections: [],
    milestone: 'Tu proposes le tu entre pairs, tu l’acceptes en un mot, tu passes au tu tout de suite, et tu sais garder le vous gentiment. EN: You can offer tu between peers, accept it in a word, switch at once, and keep vous kindly.',
    estScreens: 38, restPoints: ['a3-formules', 'a3-piege'],
  },
  sections: [A3_THEO, A3_FORMULES, A3_CONSTRUIRE, A3_PIEGE, A3_ATOI, A3_DICTEE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 · QUI PROPOSE
 *
 *  The direction of the offer. Between peers anyone may ask; otherwise the
 *  older or more senior person offers, and the junior waits. This is the act
 *  that contradicts « Dans le doute, demande » (REFRAME_REJECTED).
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_COURRIER: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-courrier',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courrier de Nadia',
  frSub: 'Une question, une réponse',
  text: COURRIER_TEXT,
  glossary: [
    { word: 'directrice', en: 'director, manager (a woman)', note: 'La personne qui dirige le service.' },
    { word: 'poids', en: 'weight, clout', note: 'Ici, l’importance dans l’entreprise.' },
    { word: 'sens', en: 'direction', note: 'De qui vers qui.' },
    { word: 'en revanche', en: 'on the other hand', note: 'Pour dire le contraire de ce qui précède.' },
    { word: 'discours', en: 'speech', note: 'Ici, beaucoup de mots pour une petite chose.' },
  ],
  questions: [
    { q: 'Qui tutoie déjà Inès ?', a: 'Les collègues de son âge.' },
    { q: 'Inès peut-elle proposer le tu à sa directrice ?', a: 'Non. C’est la directrice qui décide de la distance, donc c’est à elle de proposer.' },
    { q: 'Entre collègues du même âge, qui peut demander ?', a: 'N’importe qui : « On se tutoie ? »' },
    { q: 'Et avec un client ?', a: 'C’est le client qui choisit.' },
    { q: 'Que fait Inès si sa directrice lui propose un jour le tu ?', a: 'Elle accepte simplement, sans discours.' },
  ],
  audio: REC('rec-b1-26-courrier'),
  say: REFRAME,
  terms: ['propose', 'passage'],
};

const A4_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a4-focus',
  layer: 'core',
  sheetId: 'sheet-passage',
  title: 'Dans quel sens va le tu',
  points: [
    'Le plus âgé, ou le chef, offre le tu. Le plus jeune attend. EN: the senior offers; the junior waits.',
    'Entre gens du même âge, n’importe qui peut demander : on se tutoie ? EN: between equals, anyone may ask.',
    'Avec un client, c’est le client qui choisit. EN: with a customer, the customer chooses.',
    'Tu et vous peuvent aller ensemble : ta directrice te tutoie, tu la vouvoies. EN: it can be asymmetric.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['propose'],
};

const A4_QUI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-qui',
  layer: 'core',
  size: 'lg',
  title: 'Qui propose, qui attend',
  groups: [
    grp('Qui propose ?', [
      it(E(1056), 'au travail'),
      it(E(1057), 'entre pairs'),
      it(E(1061), 'au magasin'),
      it(E(1055), 'la règle générale'),
    ], chk(
      'Ta cheffe a cinquante ans, toi vingt-cinq. Qui peut proposer le tu ?',
      ['toi', 'personne, jamais', 'elle'], 2,
      'La plus âgée, et ta cheffe : c’est à elle. EN: she is older and senior, so it is hers to offer.')),
    grp('Et toi, en attendant', [
      it(E(1062), 'dans le doute'),
      it(E(1058), 'tu attends'),
      it(E(1059), 'tu ne commences pas'),
      it(E(1060), 'et un jour, ça arrive'),
    ], chk(
      'Ta directrice te tutoie, mais ne t’a rien proposé. Tu lui dis...',
      ['vous, et tu attends sa proposition', 'tu, puisqu’elle te tutoie'], 0,
      'Elle peut te tutoyer sans te l’offrir. Le tu pour toi vient avec sa proposition. EN: her tu is not yet an offer.')),
    ctl('Le client', 'Tu travailles dans un magasin. Un client de ton âge te tutoie et te dit « On se tutoie ». Tu...',
      ['gardes le vous, toujours', 'le tutoies aussi'], 1,
      'Le client a choisi. Tu peux suivre. EN: the customer chose; you may follow.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['propose'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre offres dans le mauvais sens',
  errors: [
    {
      wrong: 'Madame, on peut se tutoyer ?',
      right: fr(E(1062)),
      why: 'Normal : entre collègues de ton âge, c’est la bonne question. Mais la première semaine, avec ta directrice, c’est à elle de proposer. EN: right question, wrong direction.',
    },
    {
      wrong: 'Vous pouvez me tutoyer, vous savez.',
      right: fr(E(1058)),
      why: 'Offrir le tu, c’est donner une permission. Un stagiaire ne donne pas de permission à la directrice. EN: offering is granting, and juniors do not grant.',
    },
    {
      wrong: "Oh, merci, c'est un grand honneur, je ne sais pas quoi dire, vraiment.",
      right: fr(E(1040)),
      why: 'Ton émotion est sincère, mais un long discours rend le moment lourd. Un mot suffit. EN: one word, not a speech.',
    },
    {
      wrong: "Je la tutoie, puisqu'elle me tutoie.",
      right: fr(E(1065)),
      why: 'Normal : en anglais, tout va dans les deux sens. Ici, la plus âgée peut te tutoyer, et toi, tu gardes le vous jusqu’à sa proposition. EN: tu can run one way only.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['propose', 'vouvoyer'],
};

/** USE: the lines to say, as answers. No EN tail on a back. */
const A4_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a4-cartes',
  layer: 'core',
  title: 'Huit phrases pour attendre et accepter',
  cards: [
    { front: 'when in doubt, keep vous and wait', back: 'dans le doute, garde le vous et attends', say: fr(E(1062)) },
    { front: 'at work, the boss offers', back: "au travail, c'est le chef qui propose", say: fr(E(1056)) },
    { front: 'you can say tu to me (said by the senior)', back: 'vous pouvez me tutoyer', say: fr(E(1039)) },
    { front: 'she offered me tu after a month', back: "elle m'a proposé le tu au bout d'un mois", say: fr(E(1060)) },
    { front: 'I am waiting for her to offer', back: "j'attends sa proposition", say: fr(E(1058)) },
    { front: 'I say vous to her, and she says tu to me', back: 'je la vouvoie, et elle me tutoie', say: fr(E(1065)) },
    { front: 'the customer decides, not the salesperson', back: 'le client décide, pas le vendeur', say: fr(E(1061)) },
    { front: 'gladly', back: 'volontiers', say: fr(E(1051)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['propose'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le sens', 'Le tu se propose de...',
    ['la personne la plus âgée vers l’autre', 'la personne la plus jeune vers l’autre'], 0,
    'Le plus âgé, ou le chef, offre. EN: the senior offers.'),
  ctl('Dans le doute', 'Tu ne sais pas si ta cheffe veut le tu. Tu...',
    ['demandes tout de suite', 'gardes le vous et attends', 'passes au tu pour voir'], 1,
    'Tu attends : c’est à elle de régler la distance. EN: keep vous and wait.'),
  ctl('Deux sens', 'Elle te tutoie, tu la vouvoies. Est-ce possible ?',
    ['Oui, c’est courant.', 'Non, c’est une erreur.'], 0,
    'Tout à fait : la distance n’est pas toujours la même dans les deux sens. EN: yes, it is common.'),
], ['propose']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Qui propose',
    opener: {
      line: 'Tu as envie du tu, mais ce n’est pas à toi de le dire : ici tu apprends dans quel sens va la proposition. EN: You would like tu, but it is not yours to say: here you learn which way the offer goes.',
      imageRef: 'lessons/tu-ou-vous/act04.jpg',
    },
    sections: [],
    milestone: 'Tu sais qui propose le tu, tu attends quand ce n’est pas à toi, et tu acceptes sans discours. EN: You know who offers tu, you wait when it is not yours to offer, and you accept without a speech.',
    estScreens: 30, restPoints: ['a4-focus'],
  },
  sections: [A4_COURRIER, A4_FOCUS, A4_QUI, A4_ERREURS, A4_CARTES, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 · AU BUREAU, EN FAMILLE
 *
 *  The default bends with the place: start-ups and building sites tu,
 *  administrations and law firms vous, and families where the in-laws are
 *  vouvoyés. Plus the return to vous in front of a client.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Chacun sa maison',
  frSub: 'Écoute qui travaille où',
  lines: [
    ln(E(1066)), ln(E(1067)), ln(E(1068)), ln(E(1069)), ln(E(1070)),
    ln(E(1075)), ln(E(1071)), ln(E(1072)), ln(E(1073)), ln(E(1077)),
  ],
  questions: [
    { q: 'Dans la start-up, qui tutoie-t-on ?', opts: ['tout le monde, même la patronne', 'seulement les stagiaires'], correct: 0, why: '« Tout le monde se tutoie, même la patronne. » EN: everyone, the boss included.' },
    { q: 'Sur le chantier, le tu arrive quand ?', opts: ['après un mois', 'jamais', 'dès le premier jour'], correct: 2, why: '« On se tutoie dès le premier jour. » EN: from day one.' },
    { q: 'Au cabinet, deux collègues se tutoient. Et en réunion ?', opts: ['Ils se tutoient aussi.', 'Ils se vouvoient.'], correct: 1, why: '« On se tutoie à la pause, et on se vouvoie en réunion. » EN: vous in meetings.' },
    { q: 'Depuis quand l’homme vouvoie-t-il ses beaux-parents ?', opts: ['depuis quinze ans', 'depuis le mariage'], correct: 0, why: '« Je vouvoie mes beaux-parents depuis quinze ans. » EN: fifteen years.' },
    { q: 'Dans la dernière phrase, qui a proposé le tu ?', opts: ['la personne qui parle', 'les beaux-parents', 'le maire'], correct: 1, why: '« Mes beaux-parents m’ont proposé le tu au mariage. » Les plus âgés proposent. EN: the in-laws, the older ones.' },
  ],
  audio: REC('rec-b1-26-maisons'),
  say: REFRAME,
  terms: ['defaut', 'propose'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  sheetId: 'sheet-choix',
  title: 'Chaque lieu a sa règle',
  examples: [
    ex(E(1066), 'une start-up : souvent tu, à tous les étages'),
    ex(E(1067), 'un chantier, un atelier : tu tout de suite'),
    ex(E(1068), 'un cabinet d’avocats : vous'),
    ex(E(1069), 'une administration : vous, pour tout le monde'),
    ex(E(1071), 'des beaux-parents : souvent vous, parfois longtemps'),
    ex(E(1073), 'et certaines familles vouvoient encore les grands-parents'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['defaut', 'vouvoyer'],
};

const A5_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-trier',
  layer: 'core',
  size: 'lg',
  title: 'Souvent tu, souvent vous',
  groups: [
    grp('Là, souvent tu', [
      it(E(1066), 'la start-up'),
      it(E(1067), 'le chantier'),
      it(E(1077), 'après le mariage'),
      it(E(1072), 'une femme et ses beaux-parents'),
    ], chk(
      'Dans une start-up, ta patronne te tutoie le premier jour. Est-ce bizarre ?',
      ['Non, c’est la règle du lieu.', 'Oui, elle est impolie.'], 0,
      'Chaque lieu a sa règle. Là, le tu est normal. EN: the place sets the rule.')),
    grp('Là, souvent vous', [
      it(E(1068), 'le cabinet'),
      it(E(1069), 'la mairie'),
      it(E(1071), 'des beaux-parents'),
      it(E(1073), 'une famille à l’ancienne'),
    ], chk(
      'Tu vouvoies ta belle-mère depuis dix ans. Est-ce froid ?',
      ['Oui, toujours.', 'Pas forcément : c’est l’usage de sa famille.'], 1,
      'Dans beaucoup de familles, c’est le respect habituel. EN: in many families it is ordinary respect.')),
    ctl('Devant un client', 'Au cabinet, tu tutoies ta collègue à la pause. Un client entre. Tu lui parles...',
      ['en tu, comme avant', 'en vous, devant le client'], 1,
      'Devant un client, on revient au vous. EN: back to vous in front of a client.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['defaut', 'vouvoyer'],
};

const A5_ASTUCES: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a5-astuces',
  layer: 'core',
  title: 'Trois astuces pour un nouveau poste',
  hacks: [
    { hack: 'La première semaine, écoute avant de parler.', why: 'Qui dit tu à qui, à la pause et en réunion : les autres te donnent la règle du lieu. EN: listen first; the others show you the rule.' },
    { hack: 'Dans le doute, commence par vous.', why: 'Passer du vous au tu est facile et agréable. Revenir du tu au vous est gênant. EN: going to tu is easy; going back is awkward.' },
    { hack: 'Devant un client, reviens au vous.', why: 'Même avec une collègue que tu tutoies : le client voit un bureau, pas une amitié. EN: in front of clients, go back to vous.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['defaut', 'distance'],
};

const A5_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-atoi',
  layer: 'core',
  size: 'lg',
  title: 'Trois premières fois',
  groups: [
    grp('Le premier dîner chez tes beaux-parents', [
      it(E(1078), 'la bonne entrée'),
      it(E(1071), 'ce qui peut durer'),
    ], chk(
      'Ta belle-mère ouvre la porte. Elle ne t’a rien proposé. Tu dis...',
      ['Salut, ça va ?', fr(E(1078))], 1,
      'Tu es invité, elle est plus âgée : vous, et tu attends. EN: vous, and wait for her offer.')),
    grp('Le premier jour sur un chantier', [
      it(E(1067), 'la règle du lieu'),
      it(E(1074), 'ce que tu fais d’abord'),
    ], chk(
      'Le chef d’équipe te tutoie dès le matin. Tu lui réponds...',
      ['en tu, comme tout le monde', 'en vous, par sécurité', 'sans pronom'], 0,
      'Sur un chantier, tout le monde se tutoie, et on t’a donné la règle. EN: follow the rule of the place.')),
    ctl('Le client de la start-up', 'Dans ta start-up, tout le monde se tutoie. Un client arrive, soixante ans, costume. Tu lui dis...',
      ['tu, c’est la culture de la boîte', 'vous'], 1,
      'La culture de la maison vaut pour la maison. Le client décide. EN: the house rule stops at the client.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['defaut', 'propose'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La start-up', 'Dans une start-up, le tu avec la patronne est...',
    ['souvent normal', 'toujours une faute'], 0,
    'C’est souvent la règle du lieu. EN: often the norm there.'),
  ctl('La mairie', 'À la mairie, l’employé dit à tous les usagers...',
    ['tu', 'vous', 'tu aux jeunes, vous aux vieux'], 1,
    'Une administration vouvoie tout le monde. EN: vous for everyone.'),
  ctl('Les beaux-parents', 'Vouvoyer ses beaux-parents pendant des années, c’est...',
    ['un usage courant', 'un signe de dispute'], 0,
    'Dans beaucoup de familles, c’est simplement l’usage. EN: an ordinary custom.'),
], ['defaut']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Au bureau, en famille',
    opener: {
      line: 'Une start-up, un chantier, un cabinet, un dîner de famille : ici tu apprends que chaque lieu déplace la ligne. EN: A start-up, a building site, a law firm, a family dinner: here you learn that each place moves the line.',
      imageRef: 'lessons/tu-ou-vous/act05.jpg',
    },
    sections: [],
    milestone: 'Tu lis la règle d’un lieu avant de parler, tu reviens au vous devant un client, et tu sais que des beaux-parents peuvent rester vous longtemps. EN: You read a place’s rule before speaking, go back to vous in front of a client, and know in-laws may stay vous for years.',
    estScreens: 32, restPoints: ['a5-exemples', 'a5-astuces'],
  },
  sections: [A5_ECOUTE, A5_EXEMPLES, A5_TRIER, A5_ASTUCES, A5_ATOI, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 · UNE SEULE PERSONNE
 *
 *  The reframe's second sentence. Singular vous: the verb takes the vous
 *  form, the adjective and the être participle follow the REAL person. a1.05
 *  gave « Vous êtes prêt ? / prêts ? » and said the ear cannot tell them
 *  apart; this act makes the learner WRITE the difference.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a receptionist who says vous to everyone, and a different ending
 *  every time. Bubbles are statements only. */
const A6_ACCUEIL: Sec<'story'> = {
  type: 'story',
  id: 'a6-accueil',
  layer: 'core',
  title: 'Quatre fois vous',
  frSub: 'Madame Roux accueille',
  setting: 'Neuf heures, à l’accueil du cabinet Girard. Madame Roux dit vous à tout le monde. Écoute la fin de ses phrases.',
  bubbles: [
    { from: 'narrator', fr: 'La porte s’ouvre quatre fois en dix minutes.', en: 'The door opens four times in ten minutes.' },
    { from: 'coach', fr: fr(E(1081)), en: src(E(1081)).en, warn: 'Maître Girard est une femme : arrivée' },
    { from: 'coach', fr: 'Monsieur Petit, vous êtes le premier client ce matin. Installez-vous.', en: 'Mr Petit, you are the first client this morning. Make yourself comfortable.', warn: 'Un homme : le premier' },
    { from: 'coach', fr: 'Monsieur et Madame Blanc, vous êtes arrivés ensemble, je vois.', en: 'Mr and Mrs Blanc, you arrived together, I see.', warn: 'Deux personnes : arrivés' },
    { from: 'coach', fr: 'Des chocolats pour moi. Vous êtes gentille, Madame.', en: 'Chocolates for me. You are kind, madam.', warn: 'Une dame : gentille' },
    { from: 'narrator', fr: 'Toujours vous, toujours êtes. Mais la fin de la phrase change avec la personne en face.', en: 'Always vous, always êtes. But the end of the sentence changes with the person opposite.' },
  ],
  closing: { fr: 'Le verbe suit vous. L’adjectif et le participe suivent la personne.', en: 'The verb follows vous. The adjective and the participle follow the person.' },
  audio: REC('rec-b1-26-accueil'),
  say: REFRAME,
  terms: ['accord', 'vouvoyer'],
};

const A6_ACCORD: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-accord',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-accord',
  title: 'Un vous, une personne',
  frSub: 'Le verbe, l’adjectif, le participe',
  hint: 'Quatre cartes. Regarde la fin de chaque phrase.',
  audio: REC('rec-b1-26-accord'),
  say: REFRAME,
  terms: ['accord'],
  cards: [
    {
      head: 'Ce que tu sais depuis le A1', label: Cap(PRONOMS_REF),
      fr: `${fr('fr.a1.cafe.177')} · ${fr('fr.a1.cafe.178')}`,
      sub: `${rsOf('fr.a1.cafe.177')} · ${rsOf('fr.a1.cafe.178')}`,
      body: 'Vous sert pour une personne et pour un groupe, et à l’oral on n’entend pas la différence. À l’écrit, la fin de la phrase la montre. EN: one person or a group, the same out loud; the ending shows it in writing.',
    },
    {
      head: 'Le verbe suit vous', label: 'êtes, avez, pouvez',
      fr: fr(E(1086)), sub: rsOf(E(1086)),
      body: 'Même pour une seule personne, le verbe prend la forme de vous : vous êtes, jamais vous est. EN: the verb always takes the vous form.',
    },
    {
      head: 'L’adjectif suit la personne', label: 'gentille, prête',
      fr: fr(E(1079)), sub: rsOf(E(1079)),
      body: 'Une dame : gentille, au féminin. Et pas de s : elle est seule. EN: one woman, so feminine and singular.',
    },
    {
      head: 'Le participe aussi', label: 'arrivé, arrivée',
      fr: fr(E(1081)), sub: rsOf(E(1081)),
      body: `Avec être, comme dans ${PC_ETRE_REF}, le participe suit la personne : arrivé pour un homme, arrivée pour une femme, arrivés pour un groupe. EN: the être participle follows the person.`,
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Regarde qui est en face',
  groups: [
    grp('À un homme', [
      it(E(1080), 'arrivé'),
      it(E(1082), 'sûr'),
      it(E(1086), 'content'),
      it(E(1090), 'installé'),
    ], chk(
      'À un homme seul, la fin de l’adjectif...',
      ['prend un e', 'prend un s', 'ne prend rien'], 2,
      'Un homme, une personne : masculin singulier. EN: masculine singular.')),
    grp('À une femme', [
      it(E(1079), 'gentille'),
      it(E(1083), 'prête'),
      it(E(1084), 'perdue'),
      it(E(1089), 'allée'),
    ], chk(
      '« Vous êtes allée à Montréal, Madame ? » Pourquoi allée ?',
      ['parce que Madame est une femme', 'parce que vous est pluriel'], 0,
      'Le e vient de la personne, pas de vous. EN: the e comes from the woman.')),
    grp('À un groupe', [
      it(E(1085), 'contents'),
      it('fr.a2.verbes.686', 'arrivés'),
      it('fr.a1.cafe.178', 'prêts'),
    ], chk(
      '« Vous êtes contents » : à combien de personnes parles-tu ?',
      ['une', 'plusieurs'], 1,
      'Le s dit qu’il y a plusieurs personnes. EN: the s means several people.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Le pluriel qui n’en est pas un',
  rule: {
    title: 'Le verbe suit vous, le reste suit la personne',
    body: 'Vous demande la forme êtes. Mais une dame seule reste une dame seule : gentille, prête, arrivée, sans s. Et un homme seul : content, arrivé. EN: vous sets the verb; the person sets the ending.',
  },
  cards: [
    { promptLabel: 'le pluriel de politesse', promptSound: 'Vous êtes gentilles, Madame.', fr: fr(E(1079)), ipa: ipaOf(E(1079)), tip: 'Une seule dame : pas de s. EN: one woman, no s.' },
    { promptLabel: 'le s du groupe', promptSound: 'Vous êtes arrivés, Monsieur ?', fr: fr(E(1080)), ipa: ipaOf(E(1080)), tip: 'Un homme seul : arrivé. Le s, c’est pour un groupe. EN: one man, no s.' },
    { promptLabel: 'le verbe au singulier', promptSound: 'Vous est prête, Madame ?', fr: fr(E(1083)), ipa: ipaOf(E(1083)), tip: 'Le verbe suit vous : êtes, toujours. EN: the verb is always êtes.' },
    { promptLabel: 'le e oublié', promptSound: 'Vous vous êtes perdu, Madame ?', fr: fr(E(1084)), ipa: ipaOf(E(1084)), tip: 'Une femme : perdue. EN: a woman, so perdue.' },
    { promptLabel: 'le masculin par défaut', promptSound: 'Vous êtes allé à Montréal, Madame ?', fr: fr(E(1089)), ipa: ipaOf(E(1089)), tip: 'Madame dit qui est en face : allée. EN: Madame tells you the ending.' },
    { promptLabel: 'même au pluriel', promptSound: 'Vous-mêmes, vous en pensez quoi ?', fr: fr(E(1091)), ipa: ipaOf(E(1091)), tip: 'À une seule personne : vous-même, sans s. EN: one person, no s.' },
  ],
  drill: [
    { promptSay: 'Vous êtes ..., Madame.', opts: ['gentils', 'gentille'], correct: 1 },
    { promptSay: 'Monsieur, vous êtes ... ?', opts: ['arrivé', 'arrivés'], correct: 0 },
    { promptSay: 'Madame, vous ... prête ?', opts: ['est', 'êtes'], correct: 1 },
    { promptSay: 'À un couple : vous êtes ... de votre séjour ?', opts: ['contents', 'content', 'contentes'], correct: 0 },
    { promptSay: 'Madame, vous vous êtes ... ?', opts: ['perdues', 'perdu', 'perdue'], correct: 2 },
    { promptSay: '..., vous en pensez quoi ? (à une personne)', opts: ['Vous-même', 'Vous-mêmes'], correct: 0 },
    { promptSay: 'Monsieur, vous êtes ... ?', opts: ['sûrs', 'sûr'], correct: 1 },
    { promptSay: 'Maître Girard, vous êtes ... tôt.', opts: ['arrivé', 'arrivée', 'arrivés'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le verbe suit vous, le reste suit la personne' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-26-piege-accord'),
  say: REFRAME,
  terms: ['accord'],
};

const A6_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-atoi',
  layer: 'core',
  size: 'lg',
  title: 'Écris-le pour la bonne personne',
  groups: [
    grp('Une cliente arrive', [
      it('fr.a1.cafe.177', 'la question du A1, à une personne'),
      it(E(1083), 'à une femme'),
    ], chk(
      'Tu accueilles Maître Girard, une femme. Tu écris...',
      ['Vous êtes prêtes ?', 'Vous êtes prête ?'], 1,
      'Une seule personne, une femme : prête. EN: prête.')),
    grp('Un client, seul', [
      it(E(1086), 'content'),
      it(E(1090), 'installé'),
    ], chk(
      'Tu demandes à Monsieur Petit s’il est content de son séjour. Tu écris...',
      ['Vous êtes contents ?', 'Vous est content ?', 'Vous êtes content ?'], 2,
      'Le verbe en êtes, l’adjectif au masculin singulier. EN: êtes, content.')),
    ctl('Vous-même', 'Tu demandes son avis à une seule personne. Tu dis...',
      [fr(E(1091)), 'Vous-mêmes, vous en pensez quoi ?'], 0,
      'Une personne : vous-même. EN: vous-même for one person.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le verbe', 'Avec vous, à une seule personne, le verbe être est...',
    ['êtes', 'est'], 0,
    'Toujours êtes. EN: always êtes.'),
  ctl('L’adjectif', '« Vous êtes ... , Madame. » (gentil)',
    ['gentils', 'gentilles', 'gentille'], 2,
    'Une dame seule : gentille. EN: gentille.'),
  ctl('Le groupe', '« Vous êtes arrivés » parle de...',
    ['plusieurs personnes', 'une seule personne'], 0,
    'Le s dit le groupe. EN: the s means a group.'),
], ['accord']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Une seule personne',
    opener: {
      line: 'Vous garde la table entre vous, mais en face il n’y a qu’une personne : ici tu accordes avec elle. EN: Vous keeps the table between you, but there is only one person opposite: here you agree with her.',
      imageRef: 'lessons/tu-ou-vous/act06.jpg',
    },
    sections: [],
    milestone: 'Avec vous, tu mets le verbe en êtes et tu accordes l’adjectif et le participe avec la vraie personne. EN: With vous, you use êtes and agree the adjective and participle with the real person.',
    estScreens: 32, restPoints: ['a6-accord', 'a6-piege'],
  },
  sections: [A6_ACCUEIL, A6_ACCORD, A6_CONSTRUIRE, A6_PIEGE, A6_ATOI, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 · LES ÉCHOS
 *
 *  Once the choice is made, every small word follows it: object pronouns,
 *  possessives, the imperative, the reflexive imperative, toi/vous after a
 *  preposition. The anchor text is the same note written twice.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_MOTS: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-mots',
  layer: 'core',
  questionsInModal: true,
  title: 'Deux mots sur le frigo',
  frSub: 'La même consigne, deux distances',
  text: MOTS_TEXT,
  glossary: [
    { word: 'Coucou', en: 'Hi there', note: 'Un bonjour très familier, pour les proches.' },
    { word: 'croquettes', en: 'dry pet food', note: 'La nourriture du chat.' },
    { word: 'pot de fleurs', en: 'flowerpot', note: 'Les clés sont cachées dessous.' },
    { word: 'souci', en: 'problem, worry', note: 'Un petit problème.' },
    { word: 'gardienne', en: 'sitter', note: 'La personne qui garde le chat.' },
  ],
  questions: [
    { q: 'Qui est Aminata pour Awa ?', a: 'Sa sœur : Awa la tutoie et signe « Bisous ».' },
    { q: 'Dans le premier mot, que devient « vos clés » ?', a: '« Tes clés ». Avec tu, le possessif pluriel est tes.' },
    { q: 'Comment Awa dit-elle « sit on the balcony » aux deux ?', a: '« Assieds-toi » à sa sœur, « Asseyez-vous » à la gardienne.' },
    { q: 'Quels mots ne changent pas du tout ?', a: 'Le chat, les croquettes, le frigo, le balcon. Seuls les petits mots qui parlent à la personne changent.' },
    { q: 'Combien de fois le vous revient-il dans le deuxième mot ?', a: 'À chaque verbe et à chaque possessif : vos, donnez, changez, asseyez-vous, vous avez, appelez-moi, je vous laisse.' },
  ],
  audio: REC('rec-b1-26-mots'),
  say: REFRAME,
  terms: ['echos'],
};

const A7_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-tableau',
  layer: 'core',
  sheetId: 'sheet-accord',
  title: 'Tout ce qui suit le choix',
  cols: ['Avec tu', 'Avec vous', 'Ce qui change'],
  rows: [
    { cells: ["te, t'", 'vous', 'le pronom'], say: fr(E(1100)),
      detail: { title: 'Le pronom', body: 'Je te remercie, je vous remercie. EN: te becomes vous.', say: fr(E(1101)) } },
    { cells: ['ton, ta', 'votre', 'un seul objet'], say: fr(E(1096)),
      detail: { title: 'Un objet', body: 'Ton numéro, votre numéro. Ta clé, votre clé. EN: one thing, votre.', say: fr(E(1097)) } },
    { cells: ['tes', 'vos', 'plusieurs objets'], say: fr(E(1098)),
      detail: { title: 'Plusieurs objets', body: 'Tes clés, vos clés. EN: several things, vos.', say: fr(E(1099)) } },
    { cells: ['viens, prends', 'venez, prenez', "l'impératif"], say: fr(E(1092)),
      detail: { title: "L'impératif", body: 'Sans pronom sujet : viens, venez. EN: the imperative has no subject pronoun.', say: fr(E(1093)) } },
    { cells: ['assieds-toi', 'asseyez-vous', 'le verbe pronominal'], say: fr(E(1094)),
      detail: { title: 'Pronominal', body: `Tu t'assois, vous vous asseyez, comme dans ${PRONOMINAUX_REF}. EN: the reflexive pronoun follows too.`, say: fr(E(1095)) } },
    { cells: ['toi', 'vous', 'après pour, avec'], say: fr(E(1107)),
      detail: { title: 'Après une préposition', body: "C'est pour toi, c'est pour vous. EN: after a preposition, toi or vous.", say: fr(E(1108)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echos'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Change de distance',
  groups: [
    grp('Passe au vous', [
      it(E(1097), 'votre numéro'),
      it(E(1099), 'vos clés, votre manteau'),
      it(E(1101), 'vous, votre aide'),
      it(E(1105), 'excusez-moi, vous'),
    ], chk(
      'Dans ces phrases en vous, que devient ton ?',
      ['vos', 'votre', 'ton'], 1,
      'Un objet : votre. Plusieurs : vos. EN: one thing votre, several vos.')),
    grp('Passe au tu', [
      it(E(1092), 'viens, assieds-toi'),
      it(E(1094), "tu t'assois"),
      it(E(1102), "tu t'appelles"),
      it(E(1107), 'pour toi'),
    ], chk(
      '« Venez, asseyez-vous » en tu, c’est...',
      ['Viens, asseyez-toi.', 'Viens, assieds-toi.'], 1,
      'Les deux mots changent : le verbe et le pronom. EN: both the verb and the pronoun change.')),
    ctl('Le pronom', '« Je vous remercie pour votre aide » en tu :',
      [fr(E(1100)), 'Je te remercie pour votre aide.'], 0,
      'te et ton vont ensemble. EN: te goes with ton.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echos'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Six phrases qui mélangent',
  rule: {
    title: 'Une phrase, une distance',
    body: 'Si tu commences en vous, tout suit en vous : vous, votre, vos, venez, asseyez-vous. Un seul mot en tu, et la phrase hésite entre deux distances. EN: one sentence, one distance.',
  },
  cards: [
    { promptLabel: 'impératif vous, pronom tu', promptSound: 'Venez, asseyez-toi.', fr: fr(E(1093)), ipa: ipaOf(E(1093)), tip: 'asseyez va avec vous. EN: asseyez goes with vous.' },
    { promptLabel: 'un possessif de tu', promptSound: 'Vous pouvez me donner ton numéro ?', fr: fr(E(1097)), ipa: ipaOf(E(1097)), tip: 'Avec vous : votre. EN: vous takes votre.' },
    { promptLabel: 'deux pronoms', promptSound: 'Tu vous appelles comment ?', fr: fr(E(1102)), ipa: ipaOf(E(1102)), tip: 'tu va avec te : tu t’appelles. EN: tu takes te.' },
    { promptLabel: 'vos pour un seul objet', promptSound: 'Prenez vos clés et vos manteau.', fr: fr(E(1099)), ipa: ipaOf(E(1099)), tip: 'Un manteau : votre. Des clés : vos. EN: one coat, votre.' },
    { promptLabel: 'toi après vous', promptSound: "Tenez, c'est pour toi.", fr: fr(E(1108)), ipa: ipaOf(E(1108)), tip: 'Tenez, c’est vous : pour vous. EN: tenez goes with vous.' },
    { promptLabel: 'te avec votre', promptSound: 'Je te remercie pour votre aide.', fr: fr(E(1100)), ipa: ipaOf(E(1100)), tip: 'te va avec ton. EN: te goes with ton.' },
  ],
  drill: [
    { promptSay: 'Venez, ...-vous.', opts: ['assieds', 'asseyez'], correct: 1 },
    { promptSay: 'Vous pouvez me donner ... numéro ?', opts: ['votre', 'ton', 'vos'], correct: 0 },
    { promptSay: 'Tu ... appelles comment ?', opts: ['vous', "t'"], correct: 1 },
    { promptSay: 'Prenez ... manteau.', opts: ['votre', 'vos'], correct: 0 },
    { promptSay: "Tiens, c'est pour ... .", opts: ['vous', 'toi'], correct: 1 },
    { promptSay: 'Je vous remercie pour ... aide.', opts: ['ton', 'votre', 'ta'], correct: 1 },
    { promptSay: 'Prends ... clés.', opts: ['tes', 'vos'], correct: 0 },
    { promptSay: 'Excusez-moi, je ... ai fait attendre.', opts: ['vous', 'te', "t'"], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Une phrase, une distance' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le mélange raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-26-piege-echos'),
  say: REFRAME,
  terms: ['echos'],
};

const A7_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-atoi',
  layer: 'core',
  size: 'lg',
  title: 'Récris pour l’autre distance',
  groups: [
    grp('La même phrase, deux distances', [
      it('fr.a2.heure-et-date.097', 'à un proche'),
      it('fr.a1.dictee.137', 'à une personne qu’on vouvoie'),
    ], chk(
      '« Viens tout de suite, s’il te plaît » en vous :',
      ['Viens tout de suite, s’il vous plaît.', 'Venez tout de suite, s’il vous plaît.'], 1,
      'Le verbe change aussi : venez. EN: the verb changes too.')),
    grp('Au comptoir, puis entre amies', [
      it('fr.a2.hebergement.123', 'au comptoir'),
      it(E(1103), 'en vous'),
    ], chk(
      '« Vous pouvez épeler votre nom, madame ? » à une amie :',
      ['Tu peux épeler ton nom ?', 'Tu peux épeler votre nom ?', 'Vous peux épeler ton nom ?'], 0,
      'tu, peux, ton : tout suit. EN: everything follows.')),
    ctl('Le mot pour la gardienne', '« Donne-lui ses croquettes. » En vous :',
      ['Donnez-lui ses croquettes.', 'Donnez-vous ses croquettes.'], 0,
      'lui, c’est le chat : il ne change pas. Seul le verbe passe au vous. EN: lui is the cat; only the verb changes.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echos'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le possessif', 'Avec vous, un seul objet :',
    ['vos', 'votre'], 1,
    'votre pour un objet. EN: votre.'),
  ctl("L'impératif", '« Assieds-toi » en vous :',
    ['Asseyez-toi.', 'Assieds-vous.', 'Asseyez-vous.'], 2,
    'Le verbe et le pronom changent ensemble. EN: both change.'),
  ctl('Le mélange', '« Vous pouvez me donner ton numéro ? » Où est le problème ?',
    ['ton', 'vous', 'me'], 0,
    'Avec vous, votre. EN: vous takes votre.'),
], ['echos']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Les échos',
    opener: {
      line: 'Tu as choisi vous, et chaque petit mot doit le suivre : ici tu gardes toute la phrase à la même distance. EN: You chose vous, and every small word has to follow: here you keep the whole sentence at one distance.',
      imageRef: 'lessons/tu-ou-vous/act07.jpg',
    },
    sections: [],
    milestone: 'Tu passes toute une phrase du tu au vous : pronom, possessif, impératif, verbe pronominal. EN: You can move a whole sentence from tu to vous: pronoun, possessive, imperative, reflexive.',
    estScreens: 34, restPoints: ['a7-tableau', 'a7-piege'],
  },
  sections: [A7_MOTS, A7_TABLEAU, A7_CONSTRUIRE, A7_PIEGE, A7_ATOI, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 · LE FAUX PAS
 *
 *  What a slip sounds like, the three-word repair, and how to receive one.
 *  The scenario gives the learner the other side: the client slips, then
 *  offers tu.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Deux faux pas',
  frSub: 'Écoute comment on répare',
  lines: [
    ln(E(1114)), ln(E(1111)), ln(E(1118)), ln(E(1113)),
    ln(E(1116)), ln(E(1117)), ln(E(1109)), ln(E(1112)),
  ],
  questions: [
    { q: 'Première phrase : quel est le problème ?', opts: ['une faute de grammaire', 'un tu à une cliente'], correct: 1, why: '« Tu peux m’envoyer le contrat ? » La phrase est juste, la distance ne l’est pas. EN: right grammar, wrong distance.' },
    { q: 'Que fait la personne juste après ?', opts: ['elle s’excuse d’un mot', 'elle explique pendant une minute', 'elle raccroche'], correct: 0, why: '« Excusez-moi, le tu m’a échappé. » Court, clair. EN: short and clear.' },
    { q: 'Maître Girard est-elle fâchée ?', opts: ['Non : « ce n’est rien ».', 'Oui, très.'], correct: 0, why: '« Je vous en prie, ce n’est rien. » EN: she brushes it aside.' },
    { q: 'Avec quel pronom la phrase reprend-elle ?', opts: ['tu', 'vous'], correct: 1, why: '« Je reprends : vous pouvez m’envoyer le contrat ? » EN: back in vous.' },
    { q: 'Dernière phrase : que propose l’autre personne ?', opts: ['de garder le vous', 'de raccrocher', 'de passer au tu'], correct: 2, why: '« Ce n’est pas grave, on peut se tutoyer. » Parfois, le faux pas ouvre la porte. EN: sometimes the slip opens the door.' },
  ],
  audio: REC('rec-b1-26-faux-pas'),
  say: REFRAME,
  terms: ['fauxpas'],
};

const A8_REPARER: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-reparer',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-passage',
  title: 'Réparer en trois mots',
  frSub: 'Et recevoir un faux pas',
  hint: 'Quatre cartes. Aucune ne dure plus d’une phrase.',
  audio: REC('rec-b1-26-reparer'),
  say: REFRAME,
  terms: ['fauxpas'],
  cards: [
    {
      head: 'La plus courte', label: 'pardon',
      fr: fr(E(1110)), sub: rsOf(E(1110)),
      body: 'Trois mots, et tu continues. C’est la réparation la plus naturelle. EN: three words, then carry on.',
    },
    {
      head: 'Avec une petite explication', label: 'échapper',
      fr: fr(E(1111)), sub: rsOf(E(1111)),
      body: 'Le tu t’a échappé : tu ne l’as pas choisi. La phrase le dit, et c’est tout. EN: it slipped out; say so, and stop.',
    },
    {
      head: 'Reprendre la phrase', label: 'je reprends',
      fr: fr(E(1113)), sub: rsOf(E(1113)),
      body: 'Tu redis ta phrase, entièrement en vous. Pas un seul mot du tu ne reste. EN: say the sentence again, all in vous.',
    },
    {
      head: 'Quand l’autre se trompe', label: 'rassurer',
      fr: fr(E(1118)), sub: rsOf(E(1118)),
      body: 'Un client te tutoie par erreur et s’excuse ? Tu le rassures en un mot. Tu ne lui fais pas remarquer. EN: reassure in a word.',
    },
  ],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre réparations ratées',
  errors: [
    {
      wrong: 'Oh là là, je suis vraiment, vraiment désolé, je ne voulais pas vous manquer de respect...',
      right: fr(E(1110)),
      why: 'Tu veux montrer ton respect, c’est normal. Mais trois excuses font d’un petit tu un grand moment. EN: a long apology makes the slip bigger.',
    },
    {
      wrong: "Tu peux m'envoyer le contrat ? Et tu as reçu mes notes ?",
      right: fr(E(1113)),
      why: 'Le tu est sorti, et tu continues comme si de rien n’était. La cliente l’entend deux fois. EN: carrying on in tu doubles the slip.',
    },
    {
      wrong: "Pardon. Vous pouvez m'envoyer ton contrat ?",
      right: "Pardon. Vous pouvez m'envoyer votre contrat ?",
      why: 'Tu as réparé le pronom, mais un mot du tu est resté. Reprends toute la phrase en vous. EN: repair the whole sentence, possessive included.',
    },
    {
      wrong: 'Merci, mais vous savez, je ne sais pas... enfin, comme vous voulez.',
      right: fr(E(1045)),
      why: 'On t’offre le tu : accepte, ou garde le vous gentiment, mais choisis. Hésiter laisse l’autre dans le doute. EN: accept or decline, but choose.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxpas', 'passage'],
};

const A8_JUGER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-juger',
  layer: 'core',
  size: 'lg',
  title: 'Réparer, recevoir',
  groups: [
    grp('Réparer', [
      it('fr.a1.salutations.014', 'le mot de base'),
      it(E(1110), 'trois mots'),
      it(E(1111), 'une petite explication'),
      it(E(1113), 'la phrase reprise'),
    ], chk(
      'Combien de mots faut-il pour réparer un faux pas ?',
      ['un long discours', 'un ou deux, puis on continue', 'aucun, on fait semblant'], 1,
      'Court, puis la suite : l’erreur disparaît avec la phrase suivante. EN: short, then move on.')),
    grp('Recevoir', [
      it(E(1118), 'rassurer'),
      it(E(1116), 'continuer'),
      it(E(1112), 'proposer le tu'),
    ], chk(
      'Un client te dit tu par erreur, puis s’excuse. Tu...',
      ['le rassures en un mot', 'lui fais remarquer son erreur'], 0,
      'Ce n’est rien, et tu le dis vite. EN: it is nothing; say so quickly.')),
    ctl('Montréal', 'Tu expliques : « Pardon, à Montréal, on se tutoie tout le temps. » Est-ce utile ?',
      ['Oui, et il faut tout raconter.', 'Oui, une fois, en une phrase.'], 1,
      'Une phrase suffit, et elle fait souvent sourire. EN: one sentence, often with a smile.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxpas'],
};

/** USE, out loud: the other side of the slip. */
const A8_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a8-scenario',
  layer: 'core',
  title: 'Au téléphone avec Maître Girard',
  setting: 'Trois mois plus tard. Tu appelles Maître Girard pour le contrat. Cette fois, c’est elle qui se trompe, puis qui propose.',
  turns: [
    {
      ai: 'Cabinet Girard, bonjour.',
      en: 'Girard firm, good morning.',
      user: "Bonjour Maître, c'est pour le contrat. Vous pouvez me l'envoyer aujourd'hui ?",
      userEn: 'Hello Maître, it is about the contract. Could you send it to me today? (vous, and your request in vous.)',
      alts: [
        { fr: "Bonjour Maître, vous pourriez m'envoyer le contrat aujourd'hui ?", en: 'Hello Maître, could you send me the contract today? (The conditional from b1.09: also right.)' },
        { fr: "Bonjour, c'est au sujet du contrat. Vous l'avez prêt ?", en: 'Hello, it is about the contract. Do you have it ready?' },
      ],
    },
    {
      ai: 'Bien sûr. Tu... pardon, vous l’aurez avant midi.',
      en: 'Of course. You (tu)... sorry, you (vous) will have it before noon.',
      user: 'Parfait, merci beaucoup.',
      userEn: 'Perfect, thank you very much. (She slipped and repaired it herself: you say nothing about it.)',
      alts: [
        { fr: 'Très bien, merci.', en: 'Very good, thank you.' },
        { fr: 'Merci, je vous en prie.', en: 'Thank you, not at all. (A light reassurance: also right.)' },
      ],
    },
    {
      ai: 'Et vous, vous avez bien reçu mes notes ?',
      en: 'And did you get my notes?',
      user: 'Oui, merci, tout est arrivé hier.',
      userEn: 'Yes, thank you, everything arrived yesterday.',
      alts: [
        { fr: 'Oui, je les ai lues hier soir.', en: 'Yes, I read them last night.' },
        { fr: 'Oui, merci, je les ai.', en: 'Yes, thanks, I have them.' },
      ],
    },
    {
      ai: 'Dites, on se parle tous les jours. On peut se tutoyer, non ?',
      en: 'Listen, we talk every day. We can say tu, can’t we?',
      user: fr(E(1040)),
      userEn: 'With pleasure, let’s say tu. (She is the client: she offers, you accept simply.)',
      alts: [
        { fr: 'Volontiers.', en: 'Gladly.' },
        { fr: 'Oui, bien sûr, avec plaisir.', en: 'Yes, of course, with pleasure.' },
      ],
    },
    {
      ai: 'Parfait. Alors, tu me rappelles vendredi ?',
      en: 'Perfect. So, will you call me back on Friday?',
      user: 'Oui, je te rappelle vendredi matin.',
      userEn: 'Yes, I will call you back on Friday morning. (Straight into tu: te, not vous.)',
      alts: [
        { fr: 'Oui, sans faute. Je t’appelle vendredi.', en: 'Yes, without fail. I will call you on Friday.' },
        { fr: 'Promis, je te rappelle vendredi.', en: 'Promise, I will call you back on Friday.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxpas', 'passage'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La réparation', 'Tu as dit tu à une cliente. La meilleure réparation :',
    ['Oh, pardon : vous, bien sûr.', 'Je suis vraiment, vraiment désolé...'], 0,
    'Trois mots, et tu continues. EN: three words, then carry on.'),
  ctl('La suite', 'Après la réparation, ta phrase est...',
    ['entièrement en vous', 'un peu en tu, un peu en vous'], 0,
    'Toute la phrase revient au vous, possessif compris. EN: the whole sentence, possessive included.'),
  ctl('De l’autre côté', 'Un client se trompe et te tutoie. Tu...',
    ['lui fais remarquer', 'le rassures en un mot', 'le tutoies aussi'], 1,
    'Ce n’est rien : tu le dis vite. EN: reassure quickly.'),
], ['fauxpas']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le faux pas',
    opener: {
      line: 'Le tu t’a échappé devant une cliente : ici tu répares en trois mots, et tu passes à la suite. EN: The tu slipped out in front of a client: here you repair it in three words and move on.',
      imageRef: 'lessons/tu-ou-vous/act08.jpg',
    },
    sections: [],
    milestone: 'Tu répares un faux pas en trois mots, tu reprends ta phrase en vous, et tu rassures quelqu’un qui se trompe. EN: You repair a slip in three words, restart in vous, and reassure someone who slips.',
    estScreens: 30, restPoints: ['a8-reparer', 'a8-juger'],
  },
  sections: [A8_ECOUTE, A8_REPARER, A8_ERREURS, A8_JUGER, A8_SCENARIO, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 · À L'ÉCRIT
 *
 *  Emails show the distance before the first sentence. The same news three
 *  times, then the openings and closings by reader. Letters in full belong to
 *  b1.39, and are only recognised here.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_COURRIELS: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-courriels',
  layer: 'core',
  questionsInModal: true,
  title: 'Une nouvelle, trois courriels',
  frSub: 'Regarde le début et la fin',
  text: COURRIELS_TEXT,
  glossary: [
    { word: 'petite nouvelle', en: 'quick news', note: 'Une façon légère d’annoncer quelque chose, entre proches.' },
    { word: 'Bien cordialement', en: 'Kind regards', note: 'La fin la plus courante d’un courriel en vous.' },
    { word: 'au sujet de', en: 'about, regarding', note: 'Pour dire de quoi parle le message.' },
    { word: 'déplacer', en: 'to move, reschedule', note: 'Changer la date.' },
    { word: "Je vous prie d'agréer", en: 'Yours faithfully (opening words)', note: 'Le début de la formule d’une lettre officielle. Tu la reconnais ; tu l’écriras plus tard.' },
  ],
  questions: [
    { q: 'Quel courriel va à Julie ?', a: 'Le premier : « Salut Julie », tu, et « À plus ! ».' },
    { q: 'Comment le deuxième courriel commence-t-il et finit-il ?', a: '« Bonjour Maître Girard » et « Bien cordialement ». Tout le milieu est en vous.' },
    { q: 'Pourquoi le troisième commence-t-il par « Madame, Monsieur » ?', a: 'On ne sait pas qui va lire : c’est la distance la plus grande.' },
    { q: 'La nouvelle change-t-elle entre les trois ?', a: 'Non. Seules les formules et les pronoms changent.' },
    { q: 'Dans le deuxième, comment la demande est-elle posée ?', a: '« Pourriez-vous m’envoyer le dossier ? » : vous, avec l’inversion et le conditionnel.' },
  ],
  audio: REC('rec-b1-26-courriels'),
  say: REFRAME,
  terms: ['formules', 'distance'],
};

const A9_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-tableau',
  layer: 'core',
  sheetId: 'sheet-ecrit',
  title: 'Le début et la fin',
  cols: ['Tu écris à', 'Tu commences', 'Tu finis'],
  rows: [
    { cells: ['une amie', 'Salut Julie,', 'Bises, À plus'], say: fr(E(1121)),
      detail: { title: 'Une amie', body: 'Salut, et Bises ou À plus : tout est en tu. EN: friends: Salut, Bises.', say: fr(E(1125)) } },
    { cells: ['une collègue que tu tutoies', 'Bonjour Julie,', 'Bonne journée'], say: fr(E(1122)),
      detail: { title: 'Une collègue', body: 'Bonjour et le prénom : proche, mais au travail. EN: Bonjour plus first name.', say: fr(E(1132)) } },
    { cells: ['une avocate, une cliente', 'Bonjour Maître Girard,', 'Bien cordialement'], say: fr(E(1120)),
      detail: { title: 'Une avocate', body: 'On dit Maître à un avocat ou à une avocate, et vous. EN: Maître for a lawyer.', say: fr(E(1124)) } },
    { cells: ['une cliente que tu connais', 'Bonjour Madame,', 'Bien à vous'], say: fr('fr.a1.marche.087'),
      detail: { title: 'Une cliente', body: 'Bonjour Madame, ou Bonjour Madame Martin. EN: Bonjour Madame.', say: fr('fr.a1.salutations.119') } },
    { cells: ['un bureau inconnu', 'Madame, Monsieur,', "Je vous prie d'agréer..."], say: fr(E(1119)),
      detail: { title: 'Un inconnu', body: `La distance la plus grande. La lettre complète viendra dans ${COURRIELS_REF}. EN: the widest distance.`, say: fr(E(1123)) } },
    { cells: ['au Québec, un collègue', 'Bonjour Mathieu,', 'Merci, bonne journée'], say: fr(E(1133)),
      detail: { title: 'Au Québec', body: 'Bonjour et le prénom sont très courants, même avec un client. EN: in Québec, Bonjour plus first name is common.', say: fr(E(1132)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formules'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon début, la bonne fin',
  groups: [
    grp('Les débuts', [
      it(E(1119), 'le plus distant'),
      it(E(1120), 'une avocate'),
      it(E(1122), 'une collègue'),
      it(E(1121), 'une amie'),
    ], chk(
      'Tu écris pour la première fois au service client d’une banque. Tu commences par...',
      ['Salut,', 'Madame, Monsieur,', 'Bonjour Julie,'], 1,
      'Tu ne sais pas qui lira : la plus grande distance. EN: unknown reader, widest distance.')),
    grp('Les fins', [
      it('fr.a1.salutations.118', 'en vous, courant'),
      it(E(1124), 'en vous, un peu plus chaud'),
      it(E(1132), 'neutre'),
      it(E(1125), 'en tu, affectueux'),
    ], chk(
      'Tu écris à Maître Girard. Tu finis par...',
      ['Bien cordialement,', 'Bises,'], 0,
      'Bises est pour les proches. EN: Bises is for close people.')),
    ctl('Pour Julie', 'Tu écris à Julie, ta collègue de Montréal. Tu finis par...',
      ["Je vous prie d'agréer...", 'Bonne journée,', 'Madame, Monsieur,'], 1,
      'Une collègue que tu tutoies : une fin simple. EN: a simple sign-off.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formules'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre courriels qui hésitent',
  errors: [
    {
      wrong: 'Salut Maître Girard,',
      right: fr(E(1120)),
      why: 'Salut va avec tu. Une avocate que tu vouvoies : Bonjour Maître. EN: Salut belongs to tu.',
    },
    {
      wrong: "Madame, Monsieur, tu peux m'envoyer le dossier avant jeudi ?",
      right: `${fr(E(1119))} ${fr(E(1129))}`,
      why: 'Le début dit vous, le milieu doit suivre. EN: the opening sets vous; the body follows.',
    },
    {
      wrong: 'Merci pour votre aide. Bises,',
      right: `Merci pour votre aide. ${fr(E(1124))}`,
      why: 'Tout le courriel est en vous, et la fin passe au tu. Bises, c’est pour les proches. EN: the sign-off must match.',
    },
    {
      wrong: 'Cher Julie,',
      right: 'Chère Julie,',
      why: 'Julie est une femme : chère. Comme dans « vous êtes gentille », la formule suit la personne. EN: the greeting agrees with the person.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formules', 'accord'],
};

const A9_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-atoi',
  layer: 'core',
  size: 'lg',
  title: 'Même nouvelle, deux lecteurs',
  groups: [
    grp('L’annonce', [
      it(E(1128), 'pour Julie'),
      it(E(1127), 'pour Maître Girard'),
    ], chk(
      '« Petite nouvelle : la réunion passe à vendredi. » À qui l’écris-tu ?',
      ['à Maître Girard', 'à Julie'], 1,
      'Petite nouvelle est léger et proche. EN: light and close.')),
    grp('La demande', [
      it(E(1130), 'en tu'),
      it(E(1129), 'en vous'),
    ], chk(
      'Tu demandes le dossier à Maître Girard. Tu écris...',
      [fr(E(1129)), fr(E(1130))], 0,
      `Vous, avec la forme soignée de ${INVERSION_REF}. EN: vous, in the careful form.`)),
    ctl('La fin pour Julie', 'Et tu finis le message à Julie par...',
      ['À plus !', 'Bien à vous'], 0,
      'Entre collègues qui se tutoient, une fin légère. EN: a light sign-off.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formules'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le plus distant', 'Tu ne sais pas qui va lire. Tu commences par...',
    ['Salut,', 'Bonjour Julie,', 'Madame, Monsieur,'], 2,
    'La plus grande distance. EN: the widest distance.'),
  ctl('La fin', 'Bises, c’est pour...',
    ['les proches', 'les clients'], 0,
    'Les proches, en tu. EN: close people.'),
  ctl('Le milieu', 'Le courriel commence par « Bonjour Maître Girard ». Au milieu...',
    ['tu peux mélanger', 'tout est en vous'], 1,
    'Une distance pour tout le message. EN: one distance for the whole message.'),
], ['formules']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: "À l'écrit",
    opener: {
      line: 'Avant la première phrase, ton courriel a déjà choisi la distance : ici tu règles le début et la fin. EN: Before its first sentence, your email has already chosen the distance: here you set the opening and the sign-off.',
      imageRef: 'lessons/tu-ou-vous/act09.jpg',
    },
    sections: [],
    milestone: 'Tu commences et tu finis un courriel à la bonne distance, et tout le milieu suit. EN: You open and close an email at the right distance, and the body follows.',
    estScreens: 32, restPoints: ['a9-tableau', 'a9-erreurs'],
  },
  sections: [A9_COURRIELS, A9_TABLEAU, A9_CHOISIR, A9_ERREURS, A9_ATOI, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 · AILLEURS EN FRANÇAIS
 *
 *  The line moves: Québec tutoie far more widely and keeps vous for respect
 *  or distance; Belgium and Switzerland sit close to France; in West Africa
 *  age and status weigh heavily. Every claim is hedged (souvent, beaucoup):
 *  none of these is a law, and the reframe still holds everywhere.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_VOIX: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-voix',
  layer: 'core',
  questionsInModal: true,
  title: 'Quatre voix, quatre lignes',
  frSub: 'Montréal, Liège, Genève, Dakar',
  text: VOIX_TEXT,
  glossary: [
    { word: 'dépanneur', en: 'corner shop (Québec)', note: 'Au Québec, la petite épicerie du quartier.' },
    { word: 'profs', en: 'teachers', note: 'Le mot familier pour professeurs.' },
    { word: 'Suisse romande', en: 'French-speaking Switzerland', note: 'La partie de la Suisse où on parle français.' },
    { word: 'aînés', en: 'elders', note: 'Les personnes plus âgées que toi.' },
    { word: 'tonton', en: 'uncle (familiar)', note: 'À Dakar et ailleurs, on appelle souvent ainsi un homme plus âgé, même sans lien de famille.' },
  ],
  questions: [
    { q: 'Qui tutoie Mathieu, à Montréal ?', a: 'Son patron, la caissière du dépanneur, et beaucoup d’élèves tutoient leurs profs.' },
    { q: 'Pour qui Mathieu garde-t-il le vous ?', a: 'Les personnes âgées, ou pour montrer du respect.' },
    { q: 'En Belgique, c’est très différent de la France ?', a: 'Non, Lucie dit que c’est à peu près pareil.' },
    { q: 'Où Nicolas tutoie-t-il tout le monde ?', a: 'Au club de foot. Au bureau, le vous reste la règle.' },
    { q: 'Qu’est-ce qui compte beaucoup pour Awa ?', a: 'L’âge : elle vouvoie souvent ses aînés.' },
  ],
  audio: REC('rec-b1-26-voix'),
  say: REFRAME,
  terms: ['variantes'],
};

const A10_AILLEURS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-ailleurs',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-monde',
  title: 'Où passe la ligne',
  frSub: 'Quatre régions',
  hint: 'Quatre cartes. La distance existe partout ; la ligne bouge.',
  audio: REC('rec-b1-26-ailleurs'),
  say: REFRAME,
  terms: ['variantes', 'distance'],
  cards: [
    {
      head: 'Au Québec', label: 'le tu partout',
      fr: fr(E(1134)), sub: rsOf(E(1134)),
      body: 'Au travail, dans les commerces, à l’école : le tu est courant. Le vous marque le respect, l’âge ou la distance. EN: tu is widespread; vous marks respect.',
    },
    {
      head: 'En Belgique et en Suisse', label: 'comme en France',
      fr: fr(E(1138)), sub: rsOf(E(1138)),
      body: 'La règle de l’acte 2 marche bien. Au bureau, en Suisse, le vous reste souvent la règle. EN: close to France.',
    },
    {
      head: 'En Afrique de l’Ouest', label: 'l’âge d’abord',
      fr: fr(E(1139)), sub: rsOf(E(1139)),
      body: 'L’âge et le statut comptent beaucoup. On vouvoie souvent ses aînés, et on les appelle parfois tonton ou tata. EN: age and status weigh heavily.',
    },
    {
      head: 'Partout', label: 'les jeunes',
      fr: fr(E(1141)), sub: rsOf(E(1141)),
      body: 'Entre jeunes du même âge, le tu vient vite, à Montréal comme à Liège ou à Dakar. EN: young peers say tu everywhere.',
    },
  ],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-trier',
  layer: 'core',
  size: 'lg',
  title: 'Où est-on ?',
  groups: [
    grp('Au Québec', [
      it(E(1134), 'beaucoup plus de tu'),
      it(E(1135), 'à l’école'),
      it(E(1142), 'au commerce'),
      it(E(1136), 'le vous qui reste'),
    ], chk(
      'Une caissière de Montréal te dit tu. C’est...',
      ['courant, et chaleureux', 'une insulte'], 0,
      'Au Québec, c’est normal, même avec un inconnu. EN: normal in Québec.')),
    grp('En Europe et en Afrique de l’Ouest', [
      it(E(1138), 'Belgique et Suisse'),
      it(E(1139), 'à Dakar'),
      it(E(1140), 'ce qui compte'),
      it(E(1143), 'un aîné, en famille'),
    ], chk(
      'À Dakar, tu parles à un homme plus âgé que tu appelles tonton. Tu lui dis souvent...',
      ['vous', 'tu'], 0,
      'L’âge compte : vous, souvent avec tonton. EN: vous to an elder.')),
    ctl('Partout', 'Entre jeunes du même âge, à Liège, à Montréal ou à Dakar :',
      ['vous, au début', 'ça dépend du pays', 'tu, très vite'], 2,
      'Là-dessus, la francophonie est d’accord. EN: young peers, tu, everywhere.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['variantes'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre idées trop simples',
  errors: [
    {
      wrong: 'Au Québec, le vous n’existe plus.',
      right: fr(E(1136)),
      why: 'On l’entend moins, c’est vrai. Mais il reste, pour les aînés et pour le respect. EN: rarer, not gone.',
    },
    {
      wrong: 'Le tu des Québécois est impoli.',
      right: fr(E(1137)),
      why: 'Normal, si tu viens de Lyon. Mais là-bas, ce tu est chaleureux, et le refuser peut sembler froid. EN: warm there, not rude.',
    },
    {
      wrong: 'À Dakar, on tutoie tout le monde, comme à Montréal.',
      right: fr(E(1139)),
      why: 'Entre jeunes, oui. Avec les aînés, l’âge compte beaucoup : vous, souvent. EN: elders usually get vous.',
    },
    {
      wrong: 'En Suisse, c’est complètement différent de la France.',
      right: fr(E(1138)),
      why: 'La Suisse romande et la Belgique suivent à peu près la règle de France. EN: much the same as France.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['variantes'],
};

const A10_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-atoi',
  layer: 'core',
  size: 'lg',
  title: 'Trois villes, trois réponses',
  groups: [
    grp('Au dépanneur, à Montréal', [
      it(E(1142), 'la caissière'),
      it(E(1137), 'ce que ça veut dire'),
    ], chk(
      'Le caissier te dit « Tu veux un sac ? ». Tu réponds...',
      ['Pardon, on ne se connaît pas.', 'Oui, merci.'], 1,
      'Tu réponds simplement. Là-bas, c’est le ton normal. EN: just answer.')),
    grp('Chez le grand-père d’Awa, à Dakar', [
      it(E(1143), 'la question du matin'),
      it(E(1139), 'la règle'),
    ], chk(
      'Le grand-père d’Awa t’accueille le matin. Tu lui dis...',
      ['Vous avez bien dormi ?', 'Tu as bien dormi ?'], 0,
      'Un aîné, chez lui : vous. EN: vous to an elder.')),
    ctl('Un rendez-vous à Genève', 'Premier rendez-vous avec un banquier, à Genève. Tu dis...',
      ['vous', 'tu, comme à Montréal'], 0,
      'Au bureau, en Suisse, vous. EN: vous at a Swiss office.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['variantes'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le Québec', 'Au Québec, le vous...',
    ['a disparu', 'marque le respect ou la distance'], 1,
    'Il reste, pour le respect. EN: it remains, for respect.'),
  ctl('La Belgique', 'En Belgique, on fait...',
    ['à peu près comme en France', 'comme au Québec', 'tout en vous'], 0,
    'Proche de la France. EN: close to France.'),
  ctl('La règle', 'Ce qui change d’un pays à l’autre, c’est...',
    ['l’idée de distance', 'l’endroit où passe la ligne'], 1,
    'La distance existe partout ; la ligne bouge. EN: the line moves; the distance stays.'),
], ['variantes']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Ailleurs en français',
    opener: {
      line: 'À Montréal, la caissière te tutoie ; à Dakar, tu vouvoies l’oncle d’une amie : ici tu vois la ligne bouger. EN: In Montréal the cashier says tu; in Dakar you say vous to a friend’s uncle: here you watch the line move.',
      imageRef: 'lessons/tu-ou-vous/act10.jpg',
    },
    sections: [],
    milestone: 'Tu sais où passe la ligne au Québec, en Belgique, en Suisse et en Afrique de l’Ouest, et tu ne prends plus un tu québécois pour une insulte. EN: You know where the line falls in Québec, Belgium, Switzerland and West Africa, and a Québec tu no longer sounds rude.',
    estScreens: 30, restPoints: ['a10-ailleurs', 'a10-erreurs'],
  },
  sections: [A10_VOIX, A10_AILLEURS, A10_TRIER, A10_ERREURS, A10_ATOI, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 · DEUX MESSAGES, DEUX DISTANCES
 *
 *  The production act: the model, the plan, the role play, the TASK (the
 *  same news to a colleague in tu and to a client in vous, plus one line
 *  that proposes or accepts the switch), then the closing sections.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_MODELE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-modele',
  layer: 'core',
  questionsInModal: true,
  title: 'Les trois messages de Sofia',
  frSub: 'La forme que tu vas écrire',
  text: MODELE_TEXT,
  glossary: [
    { word: 'changement de plan', en: 'change of plan', note: 'Une façon légère d’annoncer une nouvelle date.' },
    { word: 'maquettes', en: 'mock-ups', note: 'Les premiers dessins d’un projet.' },
    { word: 'fin de semaine', en: 'weekend (Québec)', note: 'Au Québec, on dit la fin de semaine pour le week-end.' },
    { word: 'je reste à votre disposition', en: 'please let me know if you need anything', note: 'Une formule polie de fin de courriel, en vous.' },
    { word: 'graphiste', en: 'graphic designer', note: 'La personne qui fait les images et les logos.' },
  ],
  questions: [
    { q: 'Quel message va à Mathieu, le collègue ?', a: 'Le premier : Salut, tu, tes maquettes, je t’envoie, et une fin légère.' },
    { q: 'Qu’est-ce qui ne change pas entre les deux messages ?', a: 'La nouvelle : lundi, quatorze heures, avant vendredi. Seules la distance et les formules changent.' },
    { q: 'Comment Sofia demande-t-elle le logo à la cliente ?', a: '« Pourriez-vous nous envoyer votre logo ? » : vous, votre, et la question soignée.' },
    { q: 'Pourquoi Sofia peut-elle proposer le tu à Karine ?', a: 'Elles ont le même âge et travaillent dans le même bureau : entre pairs, n’importe qui peut demander.' },
    { q: 'Proposerait-elle le tu à Madame Lefebvre ?', a: 'Non. Madame Lefebvre est la cliente : c’est elle qui choisirait.' },
  ],
  audio: REC('rec-b1-26-modele'),
  say: REFRAME,
  terms: ['distance', 'formules'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour tes deux messages',
  steps: [
    '1. Écris la nouvelle une fois, pour toi : quoi, quand, où. EN: write the facts down once.',
    '2. Pour Julie : Salut ou Bonjour Julie, tu, te, ton, tes, et une fin légère. EN: Julie gets tu from start to finish.',
    '3. Pour Maître Girard : Bonjour Maître, vous, votre, vos, une demande polie, Bien cordialement. EN: the client gets vous from start to finish.',
    '4. Ajoute une ligne de passage : tu proposes le tu à un pair, ou tu acceptes l’offre d’une personne plus âgée. EN: one switching line, in the right direction.',
    '5. Relis chaque message : un seul pronom, et tous les petits mots le suivent. EN: one pronoun per message, and every echo matches.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echos', 'formules'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    uc('Tu annonces un changement à une collègue', E(1128)),
    uc('Tu demandes un document à un pair', E(1145)),
    uc('Tu demandes un document à une cliente', E(1146)),
    uc('Tu proposes le tu à un collègue de ton âge', E(1149)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['distance', 'passage'],
};

/** USE, out loud: one call, two distances, and a switch. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Une visio à trois',
  setting: 'Lundi, visioconférence. Julie est à Montréal, Maître Girard à Lyon. Tu parles à l’une en tu, à l’autre en vous, dans la même conversation.',
  turns: [
    {
      ai: 'Julie : Salut ! Alors, la réunion avec le cabinet, c’est quand ?',
      en: 'Julie: Hi! So when is the meeting with the firm?',
      user: 'Salut Julie ! Elle passe à vendredi, dix heures.',
      userEn: 'Hi Julie! It moves to Friday, ten o’clock. (Julie is your colleague: Salut, and tu.)',
      alts: [
        { fr: 'Salut ! Vendredi, à dix heures.', en: 'Hi! Friday, at ten.' },
        { fr: 'Petite nouvelle : c’est vendredi, dix heures.', en: 'Quick news: it is Friday, ten o’clock.' },
      ],
    },
    {
      ai: 'Julie : Parfait. Tu as besoin de quoi de ma part ?',
      en: 'Julie: Perfect. What do you need from me?',
      user: fr(E(1145)),
      userEn: 'Can you send me your plans before Thursday? (tu, tes.)',
      alts: [
        { fr: 'Envoie-moi tes plans avant jeudi, s’il te plaît.', en: 'Send me your plans before Thursday, please. (The tu imperative: also right.)' },
        { fr: 'Tu pourrais m’envoyer tes plans avant jeudi ?', en: 'Could you send me your plans before Thursday?' },
      ],
    },
    {
      ai: 'Maître Girard : Bonjour à tous. Vendredi dix heures, c’est confirmé de mon côté.',
      en: 'Maître Girard: Hello everyone. Friday at ten is confirmed on my side.',
      user: 'Merci, Maître. Je vous confirme aussi notre rendez-vous.',
      userEn: 'Thank you, Maître. I confirm our meeting too. (The client: vous, notre.)',
      alts: [
        { fr: fr(E(1127)), en: src(E(1127)).en },
        { fr: 'Parfait, merci. À vendredi, alors.', en: 'Perfect, thank you. See you on Friday, then.' },
      ],
    },
    {
      ai: 'Maître Girard : Vous avez besoin d’autre chose ?',
      en: 'Maître Girard: Do you need anything else?',
      user: fr(E(1146)),
      userEn: 'Could you send me your contract before Thursday? (vous, votre, and the careful question.)',
      alts: [
        { fr: "Vous pouvez m'envoyer votre contrat avant jeudi ?", en: 'Can you send me your contract before Thursday? (Less formal, still vous: also right.)' },
        { fr: 'Oui, votre contrat, avant jeudi, si possible.', en: 'Yes, your contract, before Thursday, if possible.' },
      ],
    },
    {
      ai: 'Maître Girard : Bien sûr. On se parle souvent, maintenant : vous pouvez m’appeler Hélène, et me tutoyer.',
      en: 'Maître Girard: Of course. We talk often now: you can call me Hélène, and say tu.',
      user: "Avec plaisir. Alors, je t'appelle jeudi, Hélène.",
      userEn: 'With pleasure. So, I will call you on Thursday, Hélène. (She offers, you accept, and switch at once: te.)',
      alts: [
        { fr: 'Volontiers. Merci, Hélène.', en: 'Gladly. Thank you, Hélène.' },
        { fr: 'Avec plaisir. À jeudi, alors.', en: 'With pleasure. See you Thursday, then.' },
      ],
    },
    {
      ai: 'Julie : Et moi, je vous laisse ! Bises à tous.',
      en: 'Julie: And I will leave you to it! Love to everyone.',
      user: 'Bises, Julie, et merci !',
      userEn: 'Love, Julie, and thanks! (Back to Julie: the light sign-off.)',
      alts: [
        { fr: 'Merci Julie, à plus !', en: 'Thanks Julie, see you!' },
        { fr: 'Salut Julie, bonne soirée à Montréal !', en: 'Bye Julie, have a good evening in Montréal!' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['distance', 'passage'],
};

/** THE GRADED TASK. Two messages, same news, two distances, plus one line
 *  that moves a relationship to tu in the right direction. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Deux messages, deux distances',
  frSub: 'Mission écrite',
  brief: "La réunion de jeudi avec le cabinet Girard passe à vendredi, dix heures. Écris deux courts messages. Le premier à Julie, ta collègue de Montréal, que tu tutoies. Le deuxième à Maître Girard, ta cliente, que tu vouvoies. Dans chacun, annonce la nouvelle et demande un document. Ajoute enfin une ligne à Théo, un collègue de ton âge, ou une réponse à une offre de tu.",
  briefEn: 'Thursday’s meeting with the Girard firm moves to Friday at ten. Write two short messages: one to Julie, your Montréal colleague (tu), and one to Maître Girard, your client (vous). In each, give the news and ask for a document. Then add one line to Théo, a colleague your age, or a reply to an offer of tu.',
  produce: 'Écris deux messages de 70 à 120 mots en tout, un en tu et un en vous, chacun avec un début et une fin qui vont avec sa distance, puis une ligne qui propose ou accepte le tu dans le bon sens.',
  responseSpec: { kind: 'text', minWords: 70, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'distance',
        label: 'La bonne distance',
        maxPoints: 4,
        descriptors: [
          '4 : Le message à Julie est en tu du début à la fin, le message à Maître Girard en vous du début à la fin, et ta ligne de passage va dans le bon sens.',
          '3 : Une seule phrase à la mauvaise distance, ou une ligne de passage dans le mauvais sens.',
          '2 : Plusieurs phrases à la mauvaise distance.',
          '1 : Les deux messages sont à la même distance.',
        ],
      },
      {
        key: 'echos',
        label: 'Tous les petits mots suivent',
        maxPoints: 3,
        descriptors: [
          '3 : Chaque petit mot suit : te ou vous, ton ou votre, tes ou vos, l’impératif, et l’accord avec la vraie personne.',
          '2 : Un ou deux mots mélangés (vous et ton), ou un accord au pluriel pour une seule personne.',
          '1 : Des mélanges dans presque chaque phrase.',
        ],
      },
      {
        key: 'formules',
        label: 'Le début et la fin',
        maxPoints: 3,
        descriptors: [
          '3 : Chaque message commence et finit à sa distance : Salut ou Bonjour Julie d’un côté, Bonjour Maître et Bien cordialement de l’autre.',
          '2 : Un début ou une fin décalé : Salut à la cliente, ou Bises dans le message en vous.',
          '1 : Pas de début ni de fin, ou les mêmes formules pour les deux.',
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Deux messages sur la même nouvelle, une demande dans chacun, une ligne de passage, entre 70 et 120 mots.',
          '1 : Il manque un élément : un message, une demande, la ligne de passage, ou moins de 70 mots.',
        ],
      },
    ],
  },
  scaffold: [
    'Salut Julie,',
    'Petite nouvelle :',
    "Tu peux m'envoyer...",
    'Bonjour Maître Girard,',
    'Je vous confirme...',
    "Pourriez-vous m'envoyer...",
    'Bien cordialement,',
    'On se tutoie ?',
  ],
  modelAnswer: "Salut Julie, petite nouvelle de Lyon : la réunion avec le cabinet passe à vendredi, dix heures. Tu peux m'envoyer tes plans avant jeudi ? Je te montre la salle en photo ce soir. Merci, et bonne soirée à Montréal ! À plus.\n\nBonjour Maître Girard, je vous confirme notre rendez-vous de vendredi, à dix heures, à votre cabinet. Pourriez-vous m'envoyer votre contrat avant jeudi ? Je vous remercie, et je reste à votre disposition. Bien cordialement.\n\nÀ Théo : Théo, on travaille ensemble tous les jours : on se tutoie ?",
  modelAnswerEn: "Hi Julie, quick news from Lyon: the meeting with the firm moves to Friday at ten. Can you send me your plans before Thursday? I will send you a photo of the room tonight. Thanks, and have a good evening in Montréal! See you.\n\nHello Maître Girard, I am confirming our meeting on Friday at ten, at your office. Could you send me your contract before Thursday? Thank you, and do let me know if you need anything. Kind regards.\n\nTo Théo: Théo, we work together every day: shall we say tu?",
  watchFor: [
    {
      pattern: 'vous in the message to Julie (vous pouvez, votre, Bonjour Julie, vous allez bien), so a colleague reads a distance nobody asked for.',
      criterion: 'distance',
      feedback: 'Julie est ta collègue, et vous vous tutoyez : garde le tu du début à la fin.',
      ref: 'a2-erreurs',
    },
    {
      pattern: 'tu anywhere in the message to Maître Girard (tu peux, ton contrat), the Montréal reflex of the opening scene.',
      criterion: 'distance',
      feedback: 'Maître Girard est ta cliente, et elle ne t’a rien proposé : vous, partout.',
      ref: 'a1-scene',
    },
    {
      pattern: 'The switching line PROPOSES tu to Maître Girard (on se tutoie, Maître ?), or offers it from below (vous pouvez me tutoyer, to a senior).',
      criterion: 'distance',
      feedback: 'Avec une cliente ou une personne plus âgée, c’est elle qui propose. Propose le tu à un pair, comme Théo.',
      ref: 'a4-erreurs',
    },
    {
      pattern: 'An accepted tu followed by vous, or an acceptance turned into a speech (c’est un grand honneur, merci beaucoup, vraiment).',
      criterion: 'distance',
      feedback: 'Tu as accepté : un mot suffit, et la phrase suivante est en tu.',
      ref: 'a3-piege',
    },
    {
      pattern: 'Echoes mixed inside one message (vous pouvez m’envoyer ton contrat, tu peux m’envoyer vos plans, je te remercie pour votre aide).',
      criterion: 'echos',
      feedback: 'Une phrase, une distance : avec vous, votre et vos ; avec tu, ton, ta, tes.',
      ref: 'a7-piege',
    },
    {
      pattern: 'An imperative in the wrong person (Envoyez-moi to Julie, Envoie-moi to Maître Girard).',
      criterion: 'echos',
      feedback: 'L’impératif suit aussi : envoie-moi pour Julie, envoyez-moi pour Maître Girard.',
      ref: 'a7-tableau',
    },
    {
      pattern: 'Plural agreement for one person addressed as vous (vous êtes arrivés, Maître ; vous êtes gentils).',
      criterion: 'echos',
      feedback: 'Maître Girard est une seule personne, une femme : vous êtes arrivée, vous êtes gentille.',
      ref: 'a6-piege',
    },
    {
      pattern: 'An opening or closing at the wrong distance (Salut Maître Girard ; Bises at the end of the vous message ; Madame, Monsieur to Julie).',
      criterion: 'formules',
      feedback: 'Le début et la fin disent la distance : Bonjour Maître et Bien cordialement pour elle, Salut et À plus pour Julie.',
      ref: 'a9-erreurs',
    },
    {
      pattern: 'No greeting or no sign-off at all, so the messages read like notes.',
      criterion: 'formules',
      feedback: 'Ajoute un début et une fin à chaque message : c’est là que la distance se voit d’abord.',
      ref: 'a9-tableau',
    },
    {
      pattern: 'Cher Julie, or another greeting that does not agree with the person.',
      criterion: 'formules',
      feedback: 'Julie est une femme : chère Julie. La formule suit la personne.',
      ref: 'a9-choisir',
    },
    {
      pattern: 'One message only, no request, no switching line, or under 70 words.',
      criterion: 'tache',
      feedback: 'Relis la mission : deux messages, une demande dans chacun, une ligne de passage, 70 à 120 mots.',
      ref: 'a11-plan',
    },
  ],
  graderNotes: [
    'Word count covers all three parts; greetings and sign-offs do NOT count. 10% tolerance (63 to 132) before criterion « tache » loses its point.',
    '« Bonjour Julie » and « Salut Julie » are both right for Julie. For the lawyer accept « Bonjour Maître », « Bonjour Maître Girard », « Madame » or « Bonjour Madame Girard »; only « Salut » or a first name without an offer is a formules error.',
    'The switching line is right if it PROPOSES tu to a peer (Théo, a colleague of the same age) with on, OR ACCEPTS an offer from someone older, senior or a client (Avec plaisir, on se tutoie ; Volontiers). A proposal TO Maître Girard, or « vous pouvez me tutoyer » said to a senior, is a distance error.',
    '« Je peux te tutoyer ? » is common spoken French and is NOT an error in the switching line if addressed to a peer.',
    'Pourriez-vous, Vous pourriez, Est-ce que vous pourriez and Vous pouvez are all accepted in the vous message (b1.09, b1.21). Do not mark register beyond tu and vous: that is b1.25’s.',
    'The subjunctive is not taught here; do not require it, and do not mark a correct one as an error.',
    'Learner gender is unknown: judge agreement with the learner’s own self (je suis arrivé or arrivée) for internal consistency only. Agreement with Maître Girard, a woman, is marked.',
    'Accept Québec forms (courriel, fin de semaine, Bonjour plus first name between colleagues).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['distance', 'echos', 'formules'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis chaque distance à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['distance', 'tutoyer'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-ecrit',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'par défaut', v: 'vous : inconnus, services, travail', say: fr(E(1027)),
      detail: { title: 'Le point de départ', body: 'Tu pour les proches, les enfants et les pairs. EN: tu for close people, children and peers.', say: fr(E(1009)) } },
    { k: 'le passage', v: 'on se tutoie ? · avec plaisir', say: fr(E(1036)),
      detail: { title: 'Passer au tu', body: 'Une question, un oui, et le tu tout de suite. EN: ask, accept, switch.', say: fr(E(1040)) } },
    { k: 'qui propose', v: 'le plus âgé, le chef, le client', say: fr(E(1063)),
      detail: { title: 'Le sens', body: 'Entre pairs, n’importe qui. Sinon, tu attends. EN: between peers anyone; otherwise wait.', say: fr(E(1062)) } },
    { k: "l'accord", v: 'vous êtes, mais gentille, arrivé', say: fr(E(1079)),
      detail: { title: 'Une seule personne', body: 'Le verbe suit vous ; l’adjectif suit la personne. EN: verb from vous, ending from the person.', say: fr(E(1088)) } },
    { k: 'les échos', v: 'votre, vos, venez, asseyez-vous', say: fr(E(1093)),
      detail: { title: 'Tout suit', body: 'Une phrase, une distance. EN: one sentence, one distance.', say: fr(E(1106)) } },
    { k: "à l'écrit", v: 'Bonjour Maître · Salut Julie', say: fr(E(1120)),
      detail: { title: 'Les formules', body: 'Le début et la fin disent la distance. EN: the greeting and sign-off set it.', say: fr(E(1131)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['defaut', 'passage', 'formules'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu choisis tu ou vous par défaut, tu lis la règle d'un bureau ou d'une famille, et tu sais qui propose le tu. Tu gardes toute la phrase à la même distance, avec l'accord de la vraie personne. Le piège qui reste est discret : un seul petit mot du tu, un ton ou un tes, dans un message en vous. Avant l'examen, relis tes deux messages et souligne chaque pronom, chaque possessif et chaque verbe à l'impératif : dans chaque message, ils doivent tous aller du même côté. EN: Underline every pronoun, possessive and imperative in both messages; within a message, they must all point the same way.",
  stats: [
    { k: 'Par défaut', v: 'vous au travail, tu entre proches' },
    { k: 'Le passage', v: 'le plus âgé propose' },
    { k: "L'accord", v: 'vous êtes gentille, Madame' },
    { k: 'Les échos', v: 'votre, vos, venez' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from act 1 to act 10, plus
 *  an integration round on the two messages. Each round's target is a
 *  distinct errorTrigger. The workshop quiz tests judgement: most rounds give
 *  a person or a situation and ask which line fits. Every typed answer
 *  differs from its prompt by a WORD or an agreement LETTER, which survives
 *  fold(). Every typeIn and errorSpot carries `prompt`; every listenChoose
 *  carries `say`. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Un mot ne va pas avec la distance. Écris la phrase correcte. EN: One word is at the wrong distance; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
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
      id: 'r1-distance', label: 'La distance', targets: ['tu-reflexe'],
      questions: [
        mc('À l’accueil d’un cabinet, à Lyon, une dame de soixante ans. Quelle phrase ?', [fr(E(1000)), fr(E(1001))], 0, 'Une inconnue plus âgée, au travail : vous. EN: an older stranger at work gets vous.', 'a1-scene'),
        mc('Le tu de Montréal, entre collègues, est...', ['impoli', 'interdit', 'proche'], 2, 'Il enlève la distance : il n’est pas impoli. EN: close, not rude.', 'a1-reperer'),
        mc('Tu ou vous règle...', ['la distance', 'la politesse', 'la grammaire'], 0, 'La distance. La personne, elle, ne change pas. EN: the distance.', 'a1-check'),
        mc('Selon le guide du cabinet, qui propose le tu la première semaine ?', ['toi', 'Madame Roux', 'un associé, s’il le veut'], 2, '« Ne le proposez pas vous-même la première semaine. » EN: not you.', 'a1-guide'),
        tI('Récris pour une inconnue plus âgée.', "Tu peux prévenir Maître Girard, s'il te plaît ?", "Vous pouvez prévenir Maître Girard, s'il vous plaît ?", 'vous, et s’il vous plaît. EN: vous, and s’il vous plaît.', 'a1-scene'),
        tI('Récris pour Madame Roux.', 'Tu peux attendre ici ?', 'Vous pouvez attendre ici ?', 'Une inconnue plus âgée : vous. EN: vous.', 'a1-usages'),
        eS('Bonjour Madame, tu peux prévenir Maître Girard ?', 'Bonjour Madame, vous pouvez prévenir Maître Girard ?', 'Bonjour Madame ouvre en vous ; la suite suit. EN: Madame sets vous.', 'a1-usages'),
        lC('Écoute. À qui parle-t-on ?', fr(E(1000)), ['à une amie', 'à une inconnue, avec distance'], 1, 'Bonjour Madame, vous, s’il vous plaît. EN: a stranger.', 'a1-scene'),
      ],
    },
    {
      id: 'r2-defaut', label: 'Par défaut', targets: ['defaut-inverse'],
      questions: [
        mc('À la boulangerie, tu dis...', [fr(E(1016)), 'Bonjour Madame, tu as encore des croissants ?'], 0, 'Un service entre inconnus : vous. EN: vous at a shop.', 'a2-tableau'),
        mc('À un enfant de six ans :', ['Vous avez quel âge ?', 'Tu as quel âge ?'], 1, 'À un enfant, tu. EN: tu to a child.', 'a2-erreurs'),
        mc('Un étudiant de ton âge, à une soirée :', ['vous, toute la soirée', 'rien, tu attends', 'tu, tout de suite'], 2, 'Entre pairs jeunes, tu vient tout de suite. EN: young peers say tu.', 'a2-trier'),
        tI('Récris pour un ami.', 'Salut, vous faites quoi ce soir ?', fr(E(1021)), 'Un ami : tu. EN: tu to a friend.', 'a2-erreurs'),
        tI('Récris pour l’employée au guichet.', "Tu peux m'aider, s'il te plaît ?", fr(E(1035)), 'Au guichet : vous. EN: vous at an official counter.', 'a2-erreurs'),
        eS('Docteur, je t’appelle pour mes résultats.', fr(E(1020)), 'Ton médecin, même après dix ans : vous. EN: vous to your doctor.', 'a2-tableau'),
        lC('Écoute. Qui parle ?', fr(E(1025)), ['un employé à un client', 'un médecin', 'un petit-enfant à sa grand-mère'], 2, 'Mamie, et tu. EN: a grandchild.', 'a2-journee'),
        lC('Écoute. Où est-on ?', fr(E(1022)), ['au guichet', 'chez des amis'], 0, 'Pièce d’identité, et vous. EN: at a counter.', 'a2-journee'),
      ],
    },
    {
      id: 'r3-passage', label: 'Le passage', targets: ['passage-rate'],
      questions: [
        mc('Tu proposes le tu à un collègue de ton âge :', ['On peut se vouvoyer ?', fr(E(1036))], 1, 'tutoyer, avec on. EN: with on and tutoyer.', 'a3-formules'),
        mc('« On se tutoie ? » Tu acceptes :', ['Oui, vous pouvez.', 'Non.', fr(E(1040))], 2, 'Accepter, pas donner une permission. EN: accept, do not grant.', 'a3-piege'),
        mc('Tu as dit oui. Ta phrase suivante :', [fr(E(1046)), fr(E(1047))], 0, 'Tout de suite en tu. EN: switch at once.', 'a3-construire'),
        tI('Complète la question.', 'On peut ... tutoyer ?', fr(E(1036)), 'se : on se tutoie, l’un l’autre. EN: se.', 'a3-formules'),
        tI('Passe au tu : tu viens d’accepter.', 'Vous travaillez ici depuis longtemps ?', fr(E(1046)), 'Après le oui : tu. EN: tu after the yes.', 'a3-piege'),
        eS('Tu peux tutoyer moi, tu sais.', fr(E(1038)), 'me, devant tutoyer. EN: me before the verb.', 'a3-piege'),
        eS('Tu peux me vouvoyer, tu sais.', fr(E(1038)), 'Offrir le tu, c’est tutoyer. EN: offering tu is tutoyer.', 'a3-piege'),
        lC('Écoute. Cette personne propose, ou accepte ?', fr(E(1051)), ['elle accepte', 'elle propose'], 0, 'Volontiers : un oui, en un mot. EN: she accepts.', 'a3-construire'),
      ],
    },
    {
      id: 'r4-initiative', label: 'Qui propose', targets: ['propose-trop-tot'],
      questions: [
        mc('Ta directrice a soixante ans. Qui propose le tu ?', ['elle', 'toi'], 0, 'La plus âgée, la cheffe. EN: she does.', 'a4-focus'),
        mc('Dans le doute, tu...', ['demandes tout de suite', 'passes au tu', 'gardes le vous et attends'], 2, 'Tu attends sa proposition. EN: keep vous and wait.', 'a4-qui'),
        mc('Entre collègues du même âge, qui peut demander ?', ['seulement le plus âgé', 'personne', 'n’importe qui'], 2, 'Entre pairs, n’importe qui. EN: anyone.', 'a4-courrier'),
        mc('Au magasin, qui choisit ?', ['le vendeur', 'le client'], 1, 'Le client décide. EN: the customer.', 'a4-qui'),
        tI('Complète.', 'C’est à la personne la plus ... de proposer le tu. (âgé)', fr(E(1055)), 'la plus âgée : le e va avec personne. EN: âgée agrees with personne.', 'a4-focus'),
        tI('Écris le tu dans un seul sens : toi vous, elle tu.', 'Je la ... , et elle me ... .', fr(E(1065)), 'Toi : vouvoie. Elle : tutoie. EN: one-way tu.', 'a4-erreurs'),
        eS('Dans le doute, garde le tu et attends.', fr(E(1062)), 'Dans le doute, c’est le vous qu’on garde. EN: keep vous.', 'a4-cartes'),
        lC('Écoute. Qui dit sans doute cette phrase ?', fr(E(1039)), ['une personne plus âgée ou le chef', 'un stagiaire'], 0, 'Offrir, c’est le rôle du plus âgé. EN: the senior offers.', 'a4-focus'),
      ],
    },
    {
      id: 'r5-lieux', label: 'Chaque lieu', targets: ['contexte-ignore'],
      questions: [
        mc('Dans une start-up, ta patronne te tutoie le premier jour. C’est...', ['une faute', 'souvent normal'], 1, 'C’est souvent la règle du lieu. EN: often normal.', 'a5-exemples'),
        mc('À la mairie, l’employé dit...', ['tu à tout le monde', 'tu aux jeunes', 'vous à tous les usagers'], 2, 'Une administration vouvoie tout le monde. EN: vous to all.', 'a5-exemples'),
        mc('Au cabinet, tu tutoies une collègue. Un client arrive. Tu lui parles...', ['en vous', 'en tu'], 0, 'Devant un client, on revient au vous. EN: vous in front of a client.', 'a5-trier'),
        tI('Récris pour le premier dîner chez tes beaux-parents.', "Salut, merci pour l'invitation.", fr(E(1078)), 'Bonsoir Madame : la distance du premier dîner. EN: Bonsoir Madame.', 'a5-atoi', ["Bonsoir Madame, merci pour l'invitation"]),
        tI('Complète avec le bon verbe.', 'Je ... mes beaux-parents depuis quinze ans. (je leur dis vous)', fr(E(1071)), 'vouvoyer : je vouvoie. EN: vouvoyer.', 'a5-exemples'),
        eS('Sur le chantier, on se vouvoie dès le premier jour.', fr(E(1067)), 'Sur un chantier, tu tout de suite. EN: tu on a building site.', 'a5-ecoute'),
        lC('Écoute. Où travaille cette personne ?', fr(E(1066)), ['dans une mairie', 'dans une start-up', 'dans un cabinet'], 1, 'Même la patronne : une start-up. EN: a start-up.', 'a5-ecoute'),
        lC('Écoute. En réunion, ces collègues se disent...', fr(E(1075)), ['vous', 'tu'], 0, 'Tu à la pause, vous en réunion. EN: vous in meetings.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-accord', label: 'Une seule personne', targets: ['accord-pluriel'],
      questions: [
        mc('« Vous êtes ..., Madame. » (gentil)', ['gentils', 'gentilles', 'gentille'], 2, 'Une dame seule : gentille. EN: gentille.', 'a6-accord'),
        mc('À un homme seul : « Vous êtes ... ? » (arriver)', ['arrivé', 'arrivés', 'arrivée'], 0, 'Un homme, une personne : arrivé. EN: arrivé.', 'a6-construire'),
        mc('« Vous êtes contents » parle à...', ['plusieurs personnes', 'une personne'], 0, 'Le s dit le groupe. EN: a group.', 'a6-construire'),
        tI('Écris pour une dame seule.', 'Vous êtes (prêt), Madame ?', fr(E(1083)), 'prête : une femme, une seule. EN: prête.', 'a6-piege'),
        tI('Écris pour Maître Girard, une femme.', 'Vous êtes (arrivé) tôt ce matin, Maître.', fr(E(1081)), 'arrivée : le participe suit la personne. EN: arrivée.', 'a6-accord'),
        eS('Vous êtes gentilles, Madame.', fr(E(1079)), 'Une seule dame : pas de s. EN: no s.', 'a6-piege'),
        eS('Monsieur, vous est sûr ?', 'Monsieur, vous êtes sûr ?', 'Le verbe suit vous : êtes. EN: êtes.', 'a6-piege'),
        lC('Écoute. À combien de personnes parle-t-on ?', fr('fr.a2.verbes.686'), ['une', 'plusieurs'], 1, 'Ensemble : plusieurs. À l’oral, le mot ensemble le dit. EN: several.', 'a6-construire'),
      ],
    },
    {
      id: 'r7-echos', label: 'Les échos', targets: ['echo-melange'],
      questions: [
        mc('Avec vous, un seul objet :', ['ton numéro', 'vos numéro', 'votre numéro'], 2, 'votre, pour un objet. EN: votre.', 'a7-tableau'),
        mc('« Assieds-toi » en vous :', ['Asseyez-toi.', 'Assieds-vous.', 'Asseyez-vous.'], 2, 'Le verbe et le pronom changent. EN: both change.', 'a7-tableau'),
        mc('« Tenez, c’est pour ... »', ['toi', 'vous'], 1, 'Tenez va avec vous. EN: vous.', 'a7-piege'),
        tI('Passe au vous.', 'Prends tes clés et ton manteau.', fr(E(1099)), 'prenez, vos, votre. EN: prenez, vos, votre.', 'a7-construire'),
        tI('Passe au tu.', 'Vous vous appelez comment ?', fr(E(1102)), 'tu t’appelles. EN: tu t’appelles.', 'a7-construire'),
        tI('Passe au vous.', 'Je te remercie pour ton aide.', fr(E(1101)), 'vous, votre. EN: vous, votre.', 'a7-tableau'),
        eS('Vous pouvez me donner ton numéro ?', fr(E(1097)), 'Avec vous : votre. EN: votre.', 'a7-piege'),
        lC('Écoute. Tu ou vous ?', fr(E(1095)), ['tu', 'vous'], 1, 'Vous vous asseyez : vous. EN: vous.', 'a7-mots'),
      ],
    },
    {
      id: 'r8-faux-pas', label: 'Le faux pas', targets: ['faux-pas-rate'],
      questions: [
        mc('Tu as dit tu à une cliente. La meilleure réparation :', ['Je suis vraiment, vraiment désolé, je ne voulais pas vous manquer de respect.', 'Rien, tu continues en tu.', fr(E(1110))], 2, 'Trois mots, et tu continues. EN: short.', 'a8-reparer'),
        mc('Un client te tutoie par erreur, puis s’excuse. Tu dis...', ['Vous devriez faire attention.', fr(E(1118))], 1, 'Tu le rassures en un mot. EN: reassure.', 'a8-juger'),
        mc('Après la réparation, ta phrase est...', ['entièrement en vous', 'en vous, sauf le possessif'], 0, 'Toute la phrase. EN: all of it.', 'a8-erreurs'),
        tI('Reprends en vous.', "Tu peux m'envoyer le contrat ?", "Vous pouvez m'envoyer le contrat ?", 'vous pouvez. EN: vous pouvez.', 'a8-reparer'),
        tI('Écris la réparation la plus courte.', 'Oh, pardon : ... , bien sûr.', fr(E(1110)), 'vous, bien sûr. EN: vous.', 'a8-reparer'),
        eS("Pardon. Vous pouvez m'envoyer ton contrat ?", "Pardon. Vous pouvez m'envoyer votre contrat ?", 'Le possessif aussi revient au vous. EN: votre.', 'a8-erreurs'),
        lC('Écoute. Cette personne est-elle fâchée ?', fr(E(1118)), ['oui', 'non'], 1, 'Ce n’est rien : elle rassure. EN: no.', 'a8-ecoute'),
        lC('Écoute. Que propose-t-on ?', fr(E(1112)), ['de passer au tu', 'de raccrocher'], 0, 'On peut se tutoyer. EN: tu.', 'a8-scenario'),
      ],
    },
    {
      id: 'r9-ecrit', label: "À l'écrit", targets: ['formule-decalee'],
      questions: [
        mc('Tu écris au service client d’une banque, sans nom :', ['Salut,', 'Bonjour Julie,', 'Madame, Monsieur,'], 2, 'Lecteur inconnu : la plus grande distance. EN: widest.', 'a9-tableau'),
        mc('Tu finis un courriel à Maître Girard :', ['Bien cordialement,', 'Bises,', 'À plus !'], 0, 'Une fin en vous. EN: vous sign-off.', 'a9-choisir'),
        mc('« Petite nouvelle : la réunion passe à vendredi. » C’est pour...', ['Maître Girard', 'Julie'], 1, 'Léger et proche. EN: Julie.', 'a9-atoi'),
        tI('Écris le début pour Maître Girard.', 'Salut Maître Girard,', fr(E(1120)), 'Bonjour, pas Salut. EN: Bonjour.', 'a9-erreurs'),
        tI('Récris en vous.', "Tu peux m'envoyer le dossier avant jeudi ?", "Vous pouvez m'envoyer le dossier avant jeudi ?", 'vous pouvez, ou pourriez-vous. EN: vous.', 'a9-courriels', [fr(E(1129))]),
        eS('Cher Julie,', 'Chère Julie,', 'Julie est une femme : chère. EN: chère.', 'a9-erreurs'),
        eS('Madame, Monsieur, tu peux confirmer cette date ?', 'Madame, Monsieur, vous pouvez confirmer cette date ?', 'Le début dit vous. EN: vous.', 'a9-erreurs'),
        lC('Écoute. À qui écrit-on ?', fr(E(1128)), ['à un bureau inconnu', 'à une collègue qu’on tutoie'], 1, 'Petite nouvelle : proche. EN: a colleague.', 'a9-courriels'),
      ],
    },
    {
      id: 'r10-ailleurs', label: 'Ailleurs', targets: ['variante-generalisee'],
      questions: [
        mc('Au Québec, une caissière te tutoie. C’est...', ['courant et chaleureux', 'impoli'], 0, 'Normal là-bas. EN: normal there.', 'a10-ailleurs'),
        mc('Au Québec, le vous...', ['n’existe plus', 'est obligatoire au travail', 'marque le respect ou la distance'], 2, 'Il reste pour le respect. EN: respect.', 'a10-voix'),
        mc('À Dakar, à un aîné, on dit souvent...', ['tu', 'vous'], 1, 'L’âge compte. EN: vous.', 'a10-trier'),
        mc('En Belgique et en Suisse, on fait...', ['comme au Québec', 'tout en tu', 'à peu près comme en France'], 2, 'Proche de la France. EN: like France.', 'a10-ailleurs'),
        tI('Pose la question à l’oncle, avec vous.', 'Tonton, tu as bien dormi ?', fr(E(1143)), 'Un aîné : vous avez. EN: vous.', 'a10-atoi'),
        tI('Complète.', 'Au Québec, on se ... beaucoup plus qu’en France. (dire tu)', fr(E(1134)), 'on se tutoie. EN: tutoie.', 'a10-ailleurs'),
        lC('Écoute. Où est-on, sans doute ?', fr(E(1135)), ['en Suisse', 'au Québec'], 1, 'Montréal : le Québec. EN: Québec.', 'a10-voix'),
        lC('Écoute. Qu’est-ce qui compte dans ce choix ?', fr(E(1140)), ['l’âge et le statut', 'le métier seulement'], 0, 'L’âge et le statut. EN: age and status.', 'a10-voix'),
      ],
    },
    {
      id: 'r11-messages', label: 'Deux messages', targets: ['meme-distance'],
      questions: [
        mc('Même nouvelle, pour Julie et pour Maître Girard. Combien de distances ?', ['deux', 'une'], 0, 'Deux lecteurs, deux distances. EN: two.', 'a11-plan'),
        mc('Dans le message à Maître Girard, la demande :', [fr(E(1145)), fr(E(1146))], 1, 'vous, votre. EN: vous.', 'a11-usages'),
        mc('Ta ligne de passage va à Théo, un collègue de ton âge. Tu écris...', ['Vous pouvez me tutoyer, Théo.', fr(E(1149))], 1, 'Entre pairs, on demande avec on. EN: ask with on.', 'a11-modele'),
        tI('Passe ce message au vous, pour une cliente.', "Tu peux m'envoyer tes plans avant jeudi ?", "Vous pouvez m'envoyer vos plans avant jeudi ?", 'vous, vos. EN: vous, vos.', 'a11-plan', ["Pourriez-vous m'envoyer vos plans avant jeudi ?"]),
        tI('Passe au tu, pour Julie.', 'Je vous remercie, et à vendredi.', 'Je te remercie, et à vendredi.', 'te. EN: te.', 'a11-cheat'),
        eS("Bonjour Maître Girard, tu peux m'envoyer votre contrat ?", "Bonjour Maître Girard, vous pouvez m'envoyer votre contrat ?", 'Tout le message est en vous. EN: vous.', 'a11-scenario'),
        eS("Salut Julie, vous pouvez m'envoyer tes plans ?", "Salut Julie, tu peux m'envoyer tes plans ?", 'Salut, tes : tout est en tu. EN: tu.', 'a11-modele'),
        lC('Écoute. Pour qui est cette phrase ?', fr(E(1147)), ['pour Maître Girard', 'pour Julie'], 0, 'Je vous remercie : la cliente. EN: the client.', 'a11-scenario'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'par défaut, au travail', back: 'vous', say: fr(E(1026)) },
    { front: 'par défaut, entre proches et avec un enfant', back: 'tu', say: fr(E(1028)) },
    { front: 'proposer le tu entre pairs', back: 'on peut se tutoyer ?', say: fr(E(1036)) },
    { front: 'qui propose, sinon', back: 'le plus âgé, le chef, le client', say: fr(E(1063)) },
    { front: 'accepter', back: 'avec plaisir, volontiers', say: fr(E(1040)) },
    { front: 'vous, à une dame seule', back: 'vous êtes gentille', say: fr(E(1079)) },
    { front: 'les échos de vous', back: 'votre, vos, venez, asseyez-vous', say: fr(E(1099)) },
    { front: 'réparer un faux pas', back: 'oh, pardon : vous, bien sûr', say: fr(E(1110)) },
    { front: 'écrire à une avocate', back: 'Bonjour Maître, Bien cordialement', say: fr(E(1120)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Tu ou vous, en résumé',
  body: `${REFRAME} Tu règles la distance selon la personne, le lieu et le pays, tu sais qui peut la changer, et chaque petit mot suit ton choix. Tu ou vous n’est qu’une des marques du registre : les autres sont dans ${REGISTRES_REF}. La prochaine leçon, ${NEXT_REF}, change de terrain : les expressions imagées du corps. EN: Next lesson: body idioms.`,
  points: [
    'Par défaut : vous au travail et avec les inconnus, tu entre proches.',
    'Le plus âgé, le chef ou le client propose le tu.',
    'Le verbe suit vous ; l’adjectif suit la personne.',
    'Une phrase, une distance : votre, vos, venez.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['distance', 'propose', 'accord'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Deux messages, deux distances',
    opener: {
      line: 'À toi d’écrire la même nouvelle deux fois : à Julie en tu, à Maître Girard en vous. EN: Your turn to write the same news twice: to Julie in tu, to Maître Girard in vous.',
      imageRef: 'lessons/tu-ou-vous/act11.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit la même nouvelle à deux distances et passé l’examen : quatre-vingt-huit questions, onze rounds. EN: You wrote the same news at two distances and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 128,
    restPoints: ['a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-passage', 'a11-quiz/r6-accord', 'a11-quiz/r9-ecrit'],
  },
  sections: [
    A11_MODELE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
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
  sheet('sheet-choix', 'Tu ou vous : le choix', ['par défaut', 'au travail', 'en famille', 'le registre'], [
    teach('sheet-choix-teach', 'Une distance, pas une note de politesse',
      `${REFRAME} Par défaut, vous pour les inconnus, les commerces, les administrations et le travail ; tu pour la famille, les amis, les enfants et les gens de ton âge. ${Cap(POLITESSE_REF)} le dit autrement : « ${B109_REFRAME} » Toute l'échelle de la politesse existe en vous, et encore en tu. Tu ou vous n'est qu'une marque du registre ; les autres sont dans ${REGISTRES_REF}. EN: vous or tu sets the distance; politeness and register work inside each.`),
    table('sheet-choix-defaut', 'Le point de départ', ['Situation', 'Tu ou vous', 'Exemple'], [
      ['un commerce', 'vous', 'Bonjour Madame, vous avez encore des croissants ?'],
      ['un guichet, une mairie', 'vous', "Vous pouvez m'aider, s'il vous plaît ?"],
      ['ton médecin', 'vous', 'Docteur, je vous appelle pour mes résultats.'],
      ['un inconnu dans la rue', 'vous', 'Excusez-moi, Monsieur, vous savez où est la poste ?'],
      ['la famille, les amis', 'tu', 'Maman, tu viens dîner dimanche ?'],
      ['un enfant', 'tu', 'Tu as quel âge ?'],
      ['un jeune de ton âge', 'tu', 'Tu es aussi en master de droit ?'],
    ]),
    table('sheet-choix-lieux', 'Chaque lieu a sa règle', ['Lieu', 'Souvent', 'À savoir'], [
      ['start-up, agence', 'tu', 'même avec la patronne'],
      ['chantier, atelier, cuisine', 'tu', 'dès le premier jour'],
      ['cabinet d’avocats, banque', 'vous', 'avec les clients et les associés'],
      ['administration, mairie', 'vous', 'avec tous les usagers'],
      ['devant un client', 'vous', 'même entre collègues qui se tutoient'],
      ['beaux-parents', 'vous, souvent', 'jusqu’à leur proposition, parfois toujours'],
      ['grands-parents', 'tu, le plus souvent', 'certaines familles vouvoient encore'],
    ]),
  ]),
  sheet('sheet-passage', 'Passer au tu, et les faux pas', ['proposer', 'accepter et refuser', 'qui propose', 'le faux pas'], [
    teach('sheet-passage-teach', 'Qui propose, et comment',
      "La personne la plus âgée, le chef ou le client propose le tu. Entre gens du même âge, n'importe qui peut demander. Dans le doute, garde le vous et attends. Après le oui, passe au tu dans la phrase suivante. EN: the senior offers; between equals anyone may ask; after yes, switch at once."),
    table('sheet-passage-formules', 'Les formules', ['Pour', 'Formule', 'Qui'], [
      ['proposer', 'On peut se tutoyer ?', 'entre pairs'],
      ['proposer', 'On se dit tu ?', 'entre pairs, plus léger'],
      ['offrir', 'Vous pouvez me tutoyer.', 'le plus âgé, le chef'],
      ['offrir', 'Tu peux me tutoyer, tu sais.', 'le plus âgé, qui tutoie déjà'],
      ['accepter', 'Avec plaisir, on se tutoie. · Volontiers.', 'tout le monde'],
      ['garder le vous', "Je préfère garder le vous pour l'instant.", 'avec un sourire'],
    ]),
    table('sheet-passage-faux-pas', 'Le faux pas', ['Moment', 'Formule'], [
      ['tu as dit tu par erreur', 'Oh, pardon : vous, bien sûr.'],
      ['tu expliques en une phrase', "Excusez-moi, le tu m'a échappé."],
      ['tu reprends', "Je reprends : vous pouvez m'envoyer le contrat ?"],
      ["l'autre s'est trompé", "Je vous en prie, ce n'est rien."],
      ["l'autre en profite", "Ce n'est pas grave, on peut se tutoyer."],
    ]),
  ]),
  sheet('sheet-accord', 'Vous singulier et les échos', ["l'accord", 'les pronoms', 'les possessifs', "l'impératif"], [
    teach('sheet-accord-teach', 'Le verbe suit vous, le reste suit la personne',
      `${Cap(PRONOMS_REF)} te l'a montré : vous sert pour une personne et pour un groupe. Le verbe prend toujours la forme de vous : vous êtes, vous avez. Mais l'adjectif et le participe avec être suivent la vraie personne, comme dans ${PC_ETRE_REF}. EN: the verb follows vous; the adjective and the être participle follow the real person.`),
    table('sheet-accord-table', "L'accord avec vous", ['À qui', 'Adjectif', 'Participe'], [
      ['un homme', 'Vous êtes sûr ?', 'Vous êtes arrivé ?'],
      ['une femme', 'Vous êtes gentille, Madame.', 'Vous êtes arrivée tôt.'],
      ['plusieurs personnes', 'Vous êtes contents ?', 'Vous êtes arrivés ensemble ?'],
      ['une personne, en insistant', 'Vous-même, vous en pensez quoi ?', 'Vous vous êtes perdue, Madame ?'],
    ]),
    table('sheet-accord-echos', 'Les échos', ['Avec tu', 'Avec vous', 'Exemple en vous'], [
      ["te, t'", 'vous', 'Je vous remercie.'],
      ['ton, ta', 'votre', 'Vous pouvez me donner votre numéro ?'],
      ['tes', 'vos', 'Prenez vos clés.'],
      ['viens, prends, excuse-moi', 'venez, prenez, excusez-moi', 'Venez, asseyez-vous.'],
      ["assieds-toi, tu t'appelles", 'asseyez-vous, vous vous appelez', 'Vous vous appelez comment ?'],
      ['pour toi, avec toi', 'pour vous, avec vous', "Tenez, c'est pour vous."],
    ]),
  ]),
  sheet('sheet-ecrit', 'Les courriels', ['les débuts', 'les fins', 'la relecture'], [
    teach('sheet-ecrit-teach', 'La distance avant la première phrase',
      `Le début et la fin d'un courriel disent la distance avant le premier mot du message. Ensuite, tout le milieu suit : un seul pronom. En vous, la question soignée de ${INVERSION_REF} va bien : Pourriez-vous m'envoyer le dossier ? « ${B121_REFRAME} » La lettre officielle complète viendra dans ${COURRIELS_REF}. EN: the opening and sign-off set the distance; the body follows.`),
    table('sheet-ecrit-formules', 'Les débuts et les fins', ['Lecteur', 'Début', 'Fin'], [
      ['une amie', 'Salut Julie,', 'Bises, À plus !'],
      ['une collègue que tu tutoies', 'Bonjour Julie,', 'Bonne journée, Merci'],
      ['une avocate', 'Bonjour Maître Girard,', 'Bien cordialement,'],
      ['une cliente que tu connais', 'Bonjour Madame,', 'Cordialement, Bien à vous'],
      ['un bureau inconnu', 'Madame, Monsieur,', "Je vous prie d'agréer l'expression de mes salutations distinguées."],
      ['au Québec, un collègue', 'Bonjour Mathieu,', 'Merci, bonne journée'],
    ]),
    table('sheet-ecrit-relire', 'La relecture', ['À vérifier', 'Comment'], [
      ['un seul pronom par message', 'souligne chaque tu et chaque vous'],
      ['les possessifs', 'ton, ta, tes ou votre, vos'],
      ["l'impératif", 'envoie-moi ou envoyez-moi'],
      ["l'accord", 'une femme : chère, gentille, arrivée'],
      ['le début et la fin', 'à la même distance que le milieu'],
      ['la ligne de passage', 'on propose à un pair ; on accepte d’un aîné'],
    ]),
  ]),
  sheet('sheet-monde', 'Ailleurs en français', ['Québec', 'Belgique et Suisse', "Afrique de l'Ouest"], [
    teach('sheet-monde-teach', 'La ligne bouge, la distance reste',
      "Partout, vous garde une distance et tu l'enlève. Ce qui change, c'est l'endroit où passe la ligne. Ces usages sont des tendances, pas des lois : écoute d'abord les gens autour de toi. EN: the idea of distance is everywhere; where the line falls varies, and these are tendencies, not laws."),
    table('sheet-monde-table', 'Où passe la ligne', ['Où', 'Tu', 'Vous'], [
      ['Québec', 'très courant : travail, commerces, école', 'respect, âge, distance, service formel'],
      ['Belgique', 'à peu près comme en France', 'clients, inconnus'],
      ['Suisse romande', 'entre pairs, au club, entre amis', 'souvent la règle au bureau'],
      ["Afrique de l'Ouest", 'entre jeunes du même âge', 'souvent aux aînés, avec tonton ou tata'],
      ['partout', 'les jeunes entre eux', 'les administrations'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-distance', title: 'Tu ou vous, au premier matin', format: 'sort' as const, coach: 'Deux piles : la distance, ou la proximité. EN: sort by distance.', buckets: ['vous', 'tu'], items: [E(1000), E(1005), E(1002), E(1010), E(1006), 'fr.a1.cafe.176'], audio: AUDIO },
  { id: 'd-defaut', title: 'Le point de départ', format: 'sort' as const, coach: 'Inconnus, services, travail d’un côté ; proches et enfants de l’autre. EN: sort by default.', buckets: ['vous', 'tu'], items: [E(1016), E(1017), E(1022), E(1021), E(1020), E(1025)], audio: AUDIO },
  { id: 'd-passage', title: 'La question, puis le tu', format: 'mcq' as const, coach: 'On pose la question avec on, on accepte en un mot, puis tout passe au tu. EN: ask, accept, switch.', q: 'On peut ... tutoyer ?', opts: ['nous', 'se'], correct: 1, why: 'se : on se tutoie. EN: se.', items: [E(1036), E(1037), E(1040), E(1041), E(1045), E(1046)], audio: AUDIO },
  { id: 'd-initiative', title: 'Qui propose', format: 'mcq' as const, coach: 'Le plus âgé, le chef ou le client propose. Toi, tu attends. EN: the senior offers.', q: 'Ta directrice a soixante ans. Qui propose le tu ?', opts: ['elle', 'toi'], correct: 0, why: 'Elle. EN: she does.', items: [E(1055), E(1056), E(1058), E(1062), E(1060), E(1065)], audio: AUDIO },
  { id: 'd-lieux', title: 'Chaque lieu', format: 'sort' as const, coach: 'Deux piles : les lieux du tu, les lieux du vous. EN: sort the places.', buckets: ['souvent tu', 'souvent vous'], items: [E(1066), E(1068), E(1067), E(1069), E(1077), E(1071)], audio: AUDIO },
  { id: 'd-accord', title: 'La vraie personne', format: 'mcq' as const, coach: 'Le verbe suit vous ; l’adjectif suit la personne en face. EN: the ending follows the person.', q: 'Vous êtes ..., Madame.', opts: ['gentils', 'gentille'], correct: 1, why: 'Une dame seule : gentille. EN: gentille.', items: [E(1079), E(1080), E(1081), E(1083), E(1084), E(1086)], audio: AUDIO },
  { id: 'd-echos', title: 'Une phrase, une distance', format: 'flashcard' as const, coach: 'Lis chaque paire à voix haute : la phrase en tu, puis en vous. EN: read each pair aloud.', items: [E(1092), E(1093), E(1097), E(1099), E(1101), E(1105)], audio: AUDIO },
  { id: 'd-faux-pas', title: 'Trois mots', format: 'flashcard' as const, coach: 'Dis chaque réparation vite, sans discours. EN: say each repair quickly.', items: [E(1110), E(1111), E(1113), E(1118), E(1116), E(1112)], audio: AUDIO },
  { id: 'd-formules', title: 'Le début et la fin', format: 'sort' as const, coach: 'Deux piles : les formules du tu, les formules du vous. EN: sort the formulas.', buckets: ['en tu', 'en vous'], items: [E(1121), E(1119), E(1125), E(1120), E(1126), E(1124)], audio: AUDIO },
  { id: 'd-variantes', title: 'Où passe la ligne', format: 'mcq' as const, coach: 'La distance existe partout ; la ligne bouge. EN: the line moves.', q: 'Au Québec, le tu d’une caissière est...', opts: ['chaleureux', 'impoli'], correct: 0, why: 'Courant et chaleureux. EN: warm.', items: [E(1134), E(1135), E(1136), E(1137), E(1139), E(1138)], audio: AUDIO },
  { id: 'd-messages', title: 'Deux messages', format: 'flashcard' as const, coach: 'Lis chaque phrase et dis à qui elle va : Julie ou Maître Girard. EN: say who each line is for.', items: [E(1145), E(1146), E(1147), E(1148), E(1149), E(1127)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'tu-reflexe', description: 'Says tu to an older stranger or at a formal workplace by reflex, as English you or a Montréal studio allows.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-distance', retest: 'd-distance' },
  { id: 'defaut-inverse', description: 'Picks the wrong default: tu to a shop assistant or an official, vous to a friend or a child.', detectOn: ['a2-trier', 'a2-erreurs', 'a2-check'], drill: 'd-defaut', retest: 'd-defaut' },
  { id: 'passage-rate', description: 'Mishandles the switch: keeps vous after accepting, grants permission instead of accepting, confuses tutoyer and vouvoyer, or declines with a bare non.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-passage', retest: 'd-passage' },
  { id: 'propose-trop-tot', description: 'Proposes tu to someone older, senior or a client, or answers a one-way tu with tu, as if the offer ran in both directions.', detectOn: ['a4-qui', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-initiative', retest: 'd-initiative' },
  { id: 'contexte-ignore', description: 'Applies one rule everywhere: vous at a start-up or on a site, tu to a client in front of colleagues, tu to parents-in-law before any offer.', detectOn: ['a5-trier', 'a5-atoi', 'a5-check'], drill: 'd-lieux', retest: 'd-lieux' },
  { id: 'accord-pluriel', description: 'Treats singular vous as plural in the ending (vous êtes gentils, Madame) or as singular in the verb (vous est).', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-accord', retest: 'd-accord' },
  { id: 'echo-melange', description: 'Mixes tu and vous forms inside one sentence: vous with ton or tes, tu with votre, an imperative or reflexive in the other person.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-echos', retest: 'd-echos' },
  { id: 'faux-pas-rate', description: 'Repairs a slip with a long apology, carries on in tu as if nothing happened, or leaves a tu possessive in the repaired sentence.', detectOn: ['a8-erreurs', 'a8-juger', 'a8-check'], drill: 'd-faux-pas', retest: 'd-faux-pas' },
  { id: 'formule-decalee', description: 'Opens or closes an email at the wrong distance (Salut Maître, Bises to a client), or lets the body drift from the greeting.', detectOn: ['a9-choisir', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-formules', retest: 'd-formules' },
  { id: 'variante-generalisee', description: 'Reads another francophone region through the France rule: hears a Québec tu as rude, or assumes young-peer tu applies to elders in Dakar.', detectOn: ['a10-trier', 'a10-erreurs', 'a10-check'], drill: 'd-variantes', retest: 'd-variantes' },
  { id: 'meme-distance', description: 'Writes the colleague and the client at the same distance, or drifts from one to the other inside a message.', detectOn: ['a11-modele', 'a11-scenario', 'a11-mission'], drill: 'd-messages', retest: 'd-messages' },
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-26-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-26-guide': "The firm's welcome note (act 1), ONE VOICE, one take, a woman from Lyon in her fifties reading it the way an office manager reads a note aloud to a new recruit: warm, formal, unhurried. Every vous is clear. The two quotations (« Bonjour Madame », « Salut ») are read inside the sentence, with no change of voice.",
  'rec-b1-26-journee': "REQUIRED FOR THE EAR MISSION (act 2): ten lines, ONE TAKE, in authored order, at conversational speed, with a different voice per line where the studio can (a customer, an adult to a child, a passer-by, a son, a patient, a friend, a clerk, a student, a counter clerk, a grandchild). The learner answers from tu or vous alone, so the pronoun must never be stressed or slowed. Line two is said warmly to a small child.",
  'rec-b1-26-theo': "The coffee with Théo (act 3), two voices: Théo, a relaxed Lyon man in his late twenties, and the learner. Théo's offer ends on « si vous voulez » with a small smile in the voice; his next line is already easy and fast in tu. The learner's « Avec plaisir, on se tutoie » is light, never ceremonial.",
  'rec-b1-26-formules': 'The four switching cards, one voice. Card two (« Vous pouvez me tutoyer ») is read as an older person giving permission, kindly. Card four is warm, never cold: the whole card is that keeping vous can be friendly.',
  'rec-b1-26-piege-passage': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-26-courrier': "The advice column (act 4), two voices: Inès, a young Geneva woman, a little anxious, then Nadia, older, calm and amused. A clear pause between the letter and the answer. Nadia's « non, attends » is kind, not sharp. The two quotations (« On se tutoie ? », « Tu peux me tutoyer ») are read as quotations, with a slight change of tone.",
  'rec-b1-26-maisons': "REQUIRED FOR THE EAR MISSION (act 5): ten lines, ONE TAKE, several voices in authored order at conversational speed: a start-up employee, a builder, a lawyer, a town-hall clerk, two colleagues, a husband talking about his in-laws. tu and vous are never stressed; the questions turn on WHERE each speaker is, so let the voices sound like their places without caricature.",
  'rec-b1-26-accueil': "Madame Roux at reception (act 6), ONE VOICE for her, a Lyon woman in her sixties, courteous and brisk, plus a neutral narrator. Her four lines are addressed to four different people; she does NOT change her tone for the agreement, because the ear cannot hear it and the lesson is about writing it.",
  'rec-b1-26-accord': "The four agreement cards. Card one holds two sentences across a middot that must sound IDENTICAL (« Vous êtes prêt ? » / « Vous êtes prêts ? »): that sameness is the card. Cards three and four at the same pace; « gentille » and « arrivée » plainly, with no teaching emphasis on the ending.",
  'rec-b1-26-piege-accord': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-26-mots': "The two fridge notes (act 7), ONE VOICE, Awa, a Dakar woman in her forties, one take. The note to her sister is quick and warm; the note to the sitter is the SAME melody at a slightly more careful pace, so the only difference the ear gets is the words. A clear pause between the two notes.",
  'rec-b1-26-piege-echos': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-26-faux-pas': "REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, in authored order, at conversational speed. Two voices: the learner (lines 1, 2, 4, 6, 7) and Maître Girard (lines 3, 5, 8). Line 1 is said naturally, with no hesitation: the slip is not audible as a slip until line 2. The repairs (lines 2, 7) are quick and light, never embarrassed. Line 8 is warm, with a smile.",
  'rec-b1-26-reparer': 'The four repair cards, one voice. Every line is short and light: the whole deck is that a repair takes a breath, not a speech. Card four is reassuring and relaxed.',
  'rec-b1-26-courriels': 'The three emails (act 9), ONE VOICE, one take, read aloud as their writer would read them before sending. The first quick and friendly, the second careful, the third formal and slow. A clear pause between emails. The greetings and sign-offs are read as part of the text.',
  'rec-b1-26-voix': "The four francophone voices (act 10), FOUR VOICES: Mathieu, a Montréal man in his thirties with a light Québécois accent; Lucie, from Liège; Nicolas, from Geneva; Awa, from Dakar. Each accent natural, never exaggerated. « dépanneur » and « tonton » are said as ordinary words.",
  'rec-b1-26-ailleurs': 'The four region cards, one neutral voice, plain delivery. Card one may carry a light Québécois colour if the studio has it; the others are neutral.',
  'rec-b1-26-modele': "Sofia's three messages (act 11), ONE VOICE, one take, a Montréal woman in her thirties reading her own messages aloud before sending: the first quick and warm, the second careful and clear, the switching line light and smiling. A clear pause between the three.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 26',
  intro: 'You met vous in A1 as the polite you, and it is also simply the plural. This lesson is about choosing: when French puts vous and when it puts tu, who may change it and how, what a workplace or a family expects, how every small word after the choice has to follow it, how to repair a slip, how emails show the distance before the first sentence, and how Québec, Belgium, Switzerland and West Africa each set the line in a different place.',
  skill: 'PE',
  grammarAssumed: [PRONOMS_UNIT, PRONOMINAUX_UNIT, PC_ETRE_UNIT, POLITESSE_UNIT, INVERSION_UNIT],
  grammarIntroduced: [
    'The default choice between tu and vous by relationship and setting: strangers, shops, offices and work against friends, family, children and peers',
    'Switching to tu: se tutoyer, on se dit tu, tu peux me tutoyer, accepting and declining, and who offers (the older or more senior person)',
    'Workplace and family conventions: start-ups and trades against administrations and law firms, parents-in-law, and returning to vous in front of a client',
    'Singular vous agreement: the verb in the vous form, the adjective and the être participle agreeing with the real person in gender and number',
    'Consistency after the choice: te/vous, ton ta tes/votre vos, the imperative (viens/venez), reflexive forms (assieds-toi/asseyez-vous), toi/vous after a preposition',
    'Repairing a slip in one short formula, and receiving one',
    'Email greetings and sign-offs by distance: Madame, Monsieur; Bonjour Maître; Bonjour Julie; Salut; Cordialement; Bises',
    'Francophone variation in tu and vous: Québec, Belgium, Switzerland, and West African usage around age and status',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu connais vous depuis le A1 : le vous de politesse, et le pluriel. Cette leçon t'apprend à choisir : quand le français met vous, quand il met tu, qui peut changer et comment, ce qu'attendent un bureau ou une famille, comment chaque petit mot suit le choix, comment réparer un faux pas, comment un courriel montre la distance, et comment le Québec, la Belgique, la Suisse et l'Afrique de l'Ouest placent la ligne.",
    minutes: 120,
    difficulty: 3,
    glyph: 'vous',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: TU_OU_VOUS_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, GUIDE_TEXT, COURRIER_TEXT, MOTS_TEXT, COURRIELS_TEXT, VOIX_TEXT, MODELE_TEXT, dicteeFor };
