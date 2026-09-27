// b1.31.l1 « La subordination : cause, conséquence, but » · the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union, enforced by
// validateSection, drawn by TaskView), so `sections` is `LessonSection[]` and
// the validators run on `LESSON` itself, as b1.18 to b1.24 do.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading / listening), name
//   (cardDeck, examples, tapTable), build (groupDrill, gated), choose (a
//   drill where the MEANING picks the link), trap (trapDrill stepped or
//   commonErrors), check (gated control pages before the checkpoint).
//
//    1  Le retard                     7   main and subordinate; parce que de
//    2  Parce que                     8   the answer to pourquoi; car cited once
//    3  Puisque et comme              8   known cause, cause in front, vu que
//    4  À cause de, grâce à           7   a cause that is a noun
//    5  Si bien que, de sorte que     7   the result, in the indicative
//    6  Tellement, si, tant           8   the degree that produces a result
//    7  C'est pourquoi                7   adverbs that join two sentences
//    8  Le but, en rappel             7   pour / pour que, cited to b1.16
//    9  Le temps                      8   pendant que, depuis que, lorsque,
//                                         après que + indicative
//   10  Le mode et l'ordre            8   the conjunction picks the mood;
//                                         clause order and the comma
//   11  Expliquer un incident        11   model, plan, role play, TASK, quiz
//
//   TOTAL 86 missions, 11 acts, 471 estimated screens. Corpus: 191 authored rows in eleven blocks
//   (.1200-.1390) plus 19 reused seed rows, 210 item ids in all, 202 of
//   them released act by act through `deckTranche` (the other 8 are the
//   seed rows with no flashcard drill, listed as NOT_DECK_ABLE). Quiz: 11
//   rounds of 8 (35 mcq, 22 typeIn, 14 errorSpot, 17 listenChoose). Eleven error triggers, eleven drills, five reference sheets
//   reached by `sheetId`, twelve terms. Three tapTables (acts 3, 6, 9).
//   Chapter artwork: `subordination-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « La conjonction dit le lien. C’est aussi elle qui choisit le mode. »
//   EN: The conjunction names the link. It is also the one that picks the mood.
//
//   ONE METAPHOR, THE DOMINOES AND THE SLUICE GATE. The main clause is a
//   domino that stands alone; the subordinate clause leans on it; the
//   conjunction is the gate that sets the direction of the flow (cause,
//   result, aim, time) and lets one mood through. It is NOT « the meaning
//   of the verb picks the mood » (act 10 is built to break that), and it
//   predicts by contrast what à cause de (act 4) and par conséquent (act 7)
//   do: they are not conjunctions, so they open no subordinate clause and
//   pick no mood.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    subordination as a system (main against subordinate); parce que
//           as a clause-opener (a1.20 gave it only as the answer word);
//           puisque; comme of cause and its front position; vu que and étant
//           donné que (recognition); à cause de against grâce à, en raison
//           de (recognition); si bien que and de sorte que + indicative;
//           si / tellement / tant ... que; c'est pourquoi, par conséquent,
//           c'est pour ça que; pendant que as simultaneity, depuis que,
//           lorsque, après que + indicative; the conjunction-decides-mood
//           rule for the indicative conjunctions; clause order and the comma.
//   QUOTES  b1.03's reframe (pendant que as the interruption frame), b1.15's
//           (the expression in front of que decides) and b1.16's (count the
//           subjects), each imported, never retyped.
//   LEAVES  the coordinators (car, donc, mais, or, ni) and linking adverbs
//           to b1.30; concession (bien que, même si, pourtant, malgré) to
//           b1.32, with ONE bien que row as a mood contrast; si clauses to
//           b1.10; quand and dès que + futur to b1.05-b1.07; the subjunctive,
//           pour que, afin que, avant que, and pour + infinitive against pour
//           que to b1.14-b1.16. No authored French string uses a subjunctive
//           except the rows tagged `contraste`, each cited on screen.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (Madame Lavoie and the agency letters say « vous »).
//   Every learner surface that explains something carries English (`en`, or
//   a final « EN: »), and NO ANSWER ever does. Every `say` is French, spoken
//   fr-FR. Theme `connecteurs-logiques`, existing (corpus §A.1). A1 and A2
//   citations use the English trail label; b1.* ones are French from the
//   plan. Setting: an events agency in Montréal (Madame Lavoie, Karim), with
//   Lausanne, Québec City, Dakar and Brussels in the stories; characters
//   recur only inside this lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. RESOLVED (Paul, gate 3, 2026-09-26): b1.30 owns the car / parce que
//      contrast. Act 2 is « Parce que », teaches parce que on its own terms
//      and names car in ONE line (the a2-parce hint) that points back to
//      b1.30. Its car checks were repurposed to parce que and pourquoi; the
//      two car rows moved to act 3, whose cause table still cites car.
//      donc stays only in the register ladder (act 7).
//   2. après que. The lesson teaches the INDICATIVE for writing and names the
//      spoken subjunctive (« après qu'il soit parti ») as recognition only,
//      in one rule card, one trap card and one sheet line. The task marks a
//      subjunctive after après que as an error under « mode ». Too strict
//      for B1?
//   3. de sorte que + subjunctive (purpose) is RECOGNITION only, one row
//      (1330) set against its indicative twin (1331). Keep it, or drop it
//      so de sorte que means result only at B1?
//   4. THREE tapTables (acts 3, 6 and 9), one per act, six rows each. The
//      pilot brief allows one per LESSON; every shipped B1 lesson breaks it.
//   5. 35 published `fr.b1.connecteurs-logiques` rows are DB-only and on
//      topic; this corpus twins 8 of them (corpus DB_ONLY_TWINS). Dedupe at
//      import or keep both?
//   6. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.
//   7. The task allows the purpose with pour / afin de + infinitive only
//      (pour que is b1.16's and not required). A correct pour que is not
//      marked as an error. Confirm.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  RAPPORT_TEXT, BULLETIN_TEXT, AVIS_TEXT, INCIDENT_TEXT, INCIDENT_MOVES,
  B103_REFRAME, B115_REFRAME, B116_REFRAME,
  INTERROGATIFS_UNIT, ELISION_UNIT, PC_AVOIR_UNIT, PC_IMPARFAIT_UNIT, FUTUR_USAGE_UNIT,
  SUBJ_FORM_UNIT, SUBJ_DECL_UNIT, SUBJ_INF_UNIT,
  INTERROGATIFS_REF, ELISION_REF, PC_IMPARFAIT_REF, FUTUR_USAGE_REF, SI_REF,
  SUBJ_DECL_REF, SUBJ_INF_REF, COORDINATION_REF, CONCESSION_REF, refFr,
} from './subordination-corpus.ts';
import { SUBORDINATION_TERMS } from './subordination-terms.ts';

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

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.31: no item ${id}`);
  return r;
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.31: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.31: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const uc = (situation: string, id: string) => ({ situation, fr: src(id).fr, en: src(id).en });
const fr = (id: string) => src(id).fr;
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
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
 *  ACT 1 · LE RETARD
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The learner translates « because of » word for word. « parce que
 *  de » is not French: parce que opens a clause and waits for a verb.
 *  NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const WRONG_PARCE_QUE_DE = 'Je suis en retard parce que de la tempête.';

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Vingt minutes de retard',
  frSub: 'Un lundi de tempête, à Montréal',
  setting: { place: 'Les bureaux d’une agence d’événements, boulevard Saint-Laurent', city: 'Montréal', time: '9 h 20', ambience: 'la neige sur les manteaux, une salle de réunion déjà pleine' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, un lundi de janvier. La tempête a bloqué le métro pendant quarante minutes. Tu arrives à l'agence avec vingt minutes de retard. Ta cheffe, madame Lavoie, t'attend à la porte de la salle.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mme Lavoie',
      fr: 'Bonjour. La réunion a commencé à neuf heures.',
      en: 'Good morning. The meeting started at nine.',
      respell: '[bohⁿ-ZHOOR | la ray-ü-nyohⁿ a ko-mahⁿ-SAY | a nuh-VUHR]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: WRONG_PARCE_QUE_DE,
      en: '(Meant: I am late because of the storm.)',
      respell: '[zhuh swee-zahⁿ ruh-TAR | pars kuh duh la tahⁿ-PEHT]',
      stage: "Tu penses : because of the storm. Tu as traduit mot à mot.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mme Lavoie',
      fr: 'Parce que la tempête a fait quoi, exactement. Je vous écoute.',
      en: 'Because the storm did what, exactly. I am listening.',
      respell: '[pars kuh la tahⁿ-peht a feh KWA | ehg-zak-tuh-MAHⁿ | zhuh voo-zay-KOOT]',
      stage: 'Elle attend la suite : pour elle, parce que annonce une phrase entière.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Madame Lavoie attend un verbe qui ne vient pas. Après parce que, le français attend un sujet et un verbe. Toi, tu voulais seulement nommer la cause : la tempête.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase nomme simplement la cause ?',
      size: 'lg',
      options: [
        { fr: fr(E(1200)), respell: rsOf(E(1200)), en: src(E(1200)).en, outcome: 'works', audio: AUDIO },
        { fr: WRONG_PARCE_QUE_DE, respell: '[zhuh swee-zahⁿ ruh-TAR | pars kuh duh la tahⁿ-PEHT]', en: '(A calque of because of.)', outcome: 'breaks', audio: AUDIO },
      ],
      followUp: {
        works: "Madame Lavoie hoche la tête : la tempête, bien sûr. Elle te fait signe d'entrer et de t'asseoir.",
        breaks: "Madame Lavoie attend encore la fin de ta phrase. Toute la salle te regarde à travers la vitre.",
      },
    },
    {
      kind: 'break',
      heading: 'Parce que attend une phrase',
      body: "Parce que ouvre une subordonnée : après lui viennent un sujet et un verbe. Devant un nom seul, le français dit à cause de. Parce que de n'existe pas. EN: parce que needs a subject and a verb; before a bare noun, use à cause de.",
      wrong: {
        fr: WRONG_PARCE_QUE_DE,
        ipa: '/ʒə sɥi.zɑ̃ ʁə.taʁ paʁs kə də la tɑ̃.pɛt/',
        respell: '[zhuh swee-zahⁿ ruh-TAR | pars kuh duh la tahⁿ-PEHT]',
        en: '(A calque of because of.)',
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
      text: "Tu t'assois. Après la réunion, madame Lavoie te demande d'expliquer par écrit un autre retard, celui d'une livraison. Il faudra dire les causes, les conséquences et ce que vous allez faire.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['parceque', 'causenom'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Dire pourquoi', s: 'Actes 1 à 4 : parce que, puisque, comme, à cause de, grâce à' },
    { t: 'Dire ce qui a suivi', s: 'Actes 5 à 7 : si bien que, tellement ... que, par conséquent' },
    { t: 'Dire le but et le moment', s: 'Actes 8 et 9 : pour, afin de, pendant que, depuis que, lorsque' },
    { t: 'Choisir le mode et écrire', s: 'Actes 10 et 11 : le mode, l’ordre, et ton explication d’un incident' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: Karim's email, where nine links are already at work. */
const A1_RAPPORT: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-rapport',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courriel de Karim',
  frSub: 'Lis, et cherche les liens',
  text: RAPPORT_TEXT,
  glossary: [
    { word: 'congrès', en: 'conference', note: 'Une grande réunion de professionnels, sur plusieurs jours.' },
    { word: 'tombé en panne', en: 'broke down', note: 'Le moteur ne marche plus : le camion s’arrête.' },
    { word: 'dépanneuse', en: 'tow truck', note: 'Le camion qui vient chercher une voiture en panne.' },
    { word: 'bénévoles', en: 'volunteers', note: 'Des gens qui aident sans être payés.' },
    { word: 'au lieu de', en: 'instead of', note: 'À la place de. EN: in place of.' },
  ],
  questions: [
    { q: 'Pourquoi le camion est-il tombé en panne ?', a: "Parce que le moteur a trop chauffé. Parce que ouvre la cause, avec un sujet et un verbe." },
    { q: 'Pourquoi le chauffeur a-t-il attendu trois heures ?', a: "Comme le garage était fermé. Comme donne la cause au début de la phrase." },
    { q: 'Qu’est-ce que la tempête a causé ?', a: "L'autoroute a été fermée, et le chauffeur a dormi à l'hôtel. À cause de la tempête : un nom, pas une phrase." },
    { q: 'Que propose Karim, et dans quel but ?', a: "Livrer deux jours avant, pour éviter ce problème. Pour + infinitif dit le but." },
    { q: 'Trouve une phrase qui tient debout toute seule.', a: "Par exemple : « Le camion a quitté Québec jeudi matin. » Elle n'a besoin de rien d'autre." },
  ],
  audio: REC('rec-b1-31-rapport'),
  say: REFRAME,
  terms: ['conjonction', 'principale'],
};

/** BUILD, on the text just read: which part stands alone, which link. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Ce qui tient seul, ce qui s’appuie',
  groups: [
    grp('Une principale, une subordonnée', [
      it(E(1201), 'la cause vient après parce que'),
      it(E(1203), 'le camion, après parce que'),
      it(E(1204), 'la salle inondée'),
      it('fr.a2.objets.106', "j'étais pressé : la cause"),
    ], chk(
      'Dans ces phrases, quelle partie tient debout toute seule ?',
      ['la partie avant parce que', 'la partie après parce que'], 0,
      "La principale est avant : je suis en retard. Après parce que, c'est la subordonnée. EN: the main clause comes first here.")),
    grp('Le lien change', [
      it(E(1205), 'comme : une cause'),
      it(E(1206), 'tellement ... que : une conséquence'),
      it(E(1207), 'pour : un but'),
      it(E(1208), 'pendant que : un moment'),
    ], chk(
      "« J'ai appelé le client pour le prévenir. » Quel est le lien ?",
      ['la cause', 'le temps', 'le but'], 2,
      "Pour dit ce que tu cherches à faire : un but. EN: pour gives the aim.")),
    ctl('Le piège', '« Parce que le métro était bloqué. » Seule, à l’écrit, cette phrase est...',
      ['incomplète', 'complète'], 0,
      "Il manque la principale, celle qui tient seule. EN: the main clause is missing."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['principale', 'conjonction'],
};

/** NAME: the system, one idea per card. */
const A1_SYSTEME: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-systeme',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-cause',
  title: 'Deux phrases dans une',
  frSub: 'La principale et la subordonnée',
  hint: 'Quatre cartes. Regarde qui tient debout tout seul.',
  audio: REC('rec-b1-31-systeme'),
  say: REFRAME,
  terms: ['principale', 'conjonction'],
  cards: [
    {
      head: 'Elle tient seule', label: 'la principale',
      fr: fr(E(1202)),
      sub: rsOf(E(1202)),
      body: "Un sujet, un verbe, et la phrase est complète. Elle n'a besoin de rien. EN: a subject, a verb, and the sentence is complete.",
    },
    {
      head: 'Elle s’appuie', label: 'la subordonnée',
      fr: fr(E(1201)),
      sub: rsOf(E(1201)),
      body: "Parce que le métro était bloqué : seule, cette partie ne tient pas. Elle s'appuie sur je suis en retard. EN: the subordinate clause leans on the main one.",
    },
    {
      head: 'Le petit mot en tête', label: 'la conjonction',
      fr: fr(E(1205)),
      sub: rsOf(E(1205)),
      body: "Parce que, comme, si bien que, pendant que : la conjonction ouvre la subordonnée et dit le lien. EN: the conjunction opens the clause and names the link.",
    },
    {
      head: 'Un nom, pas une phrase', label: 'à cause de',
      fr: fr(E(1200)),
      sub: rsOf(E(1200)),
      body: "La tempête est un nom : pas de verbe, donc pas de subordonnée, donc pas de parce que. À cause de suffit. EN: a bare noun takes à cause de.",
    },
  ],
};

/** CHOOSE: where the wrong link costs something real. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où le bon lien compte',
  cases: [
    uc('Tu expliques ton retard à ta cheffe', E(1200)),
    uc('Tu écris au client : la livraison est en retard', E(1203)),
    uc("Tu annonces l'annulation d'une réunion", E(1204)),
    uc('Tu racontes la tempête à un collègue', E(1206)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conjonction', 'causenom'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La cause en un nom', 'Tu veux dire : because of the storm.',
    [WRONG_PARCE_QUE_DE, fr(E(1200))], 1,
    "Parce que attend un verbe. Devant un nom, à cause de. EN: a noun takes à cause de."),
  ctl('La principale', "« Comme il neigeait, le bureau a fermé à midi. » Quelle partie tient seule ?",
    ['le bureau a fermé à midi', 'comme il neigeait', 'aucune'], 0,
    "Le bureau a fermé à midi : un sujet, un verbe, rien à ajouter. EN: that part stands alone."),
  ctl('Le lien', "« Il a tellement neigé que les écoles ont fermé. » Les écoles fermées sont...",
    ['la cause', 'la conséquence'], 1,
    "La neige d'abord, puis les écoles : la conséquence. EN: the closure is the result."),
], ['principale', 'conjonction']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le retard',
    opener: {
      line: "Tu es en retard et tu sais pourquoi : ici tu apprends à le dire en une seule phrase qui tient debout. EN: You are late and you know why: here you learn to say it in one sentence that stands up.",
      imageRef: 'lessons/subordination/act01.jpg',
    },
    sections: [],
    milestone: "Tu sépares la principale de la subordonnée, et tu ne dis plus parce que devant un nom. EN: You can tell the main clause from the subordinate one, and you no longer put parce que before a noun.",
    estScreens: 30, restPoints: ['a1-rapport'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_RAPPORT, A1_REPERER, A1_SYSTEME, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 · PARCE QUE
 *
 *  a1.20 gave parce que as the answer word to pourquoi. Here it becomes a
 *  clause-opener. car is b1.30's: one line in the card deck's hint points
 *  back to it, and nothing else in this act teaches it.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: three whys from a cousin in Lausanne. No « ? » or « ! » in bubbles. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Trois pourquoi',
  frSub: 'Sophie veut des raisons',
  setting: "Lausanne, un dimanche soir. Tu passes le week-end chez ta cousine Sophie. Elle ne comprend pas tes choix, et elle veut des raisons.",
  bubbles: [
    { from: 'narrator', fr: 'Sophie pose sa tasse et commence ses questions.', en: 'Sophie puts her cup down and starts her questions.' },
    { from: 'coach', fr: 'Tu repars demain matin. Je pensais que tu restais toute la semaine.', en: 'You are leaving tomorrow morning. I thought you were staying all week.' },
    { from: 'user', fr: fr(E(1215)), en: src(E(1215)).en, warn: 'parce que tout seul : une réponse orale' },
    { from: 'coach', fr: 'Et ce soir, tu ne viens pas au restaurant avec nous.', en: 'And tonight you are not coming to the restaurant with us.' },
    { from: 'user', fr: 'Non, je reste ici parce que je dois finir un rapport.', en: 'No, I am staying here because I have to finish a report.', warn: 'parce que, puis un sujet et un verbe' },
    { from: 'coach', fr: 'On m’a dit aussi que tu avais refusé une promotion.', en: 'I was also told you had turned down a promotion.' },
    { from: 'user', fr: fr(E(1223)), en: src(E(1223)).en, warn: 'la cause, à l’indicatif' },
    { from: 'narrator', fr: 'Sophie hoche la tête. Trois pourquoi, trois parce que, et chaque fois une vraie phrase après.', en: 'Sophie nods. Three whys, three becauses, and a real clause after each one.' },
  ],
  closing: { fr: 'Après parce que, il y a toujours quelqu’un qui fait quelque chose.', en: 'After parce que there is always someone doing something.' },
  audio: REC('rec-b1-31-sophie'),
  say: REFRAME,
  terms: ['parceque'],
};

const A2_PARCE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-parce',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-cause',
  title: 'Parce que, de près',
  frSub: 'La cause qui répond à pourquoi',
  hint: `Quatre cartes. Car, l'autre mot de la cause, est expliqué dans ${COORDINATION_REF}.`,
  audio: REC('rec-b1-31-parce'),
  say: REFRAME,
  terms: ['parceque', 'conjonction'],
  cards: [
    {
      head: 'La réponse à pourquoi', label: Cap(INTERROGATIFS_REF),
      fr: fr(E(1215)),
      sub: rsOf(E(1215)),
      body: "Tu as appris parce que comme réponse à pourquoi. À l'oral, il répond tout seul. À l'écrit, il suit sa principale. EN: alone in a spoken answer, after the main clause in writing.",
    },
    {
      head: 'Un sujet, un verbe', label: 'parce que',
      fr: fr(E(1218)),
      sub: rsOf(E(1218)),
      body: "Après parce que : les routes sont glissantes. Un sujet, un verbe, à l'indicatif, parce que la cause est un fait. EN: a subject and a verb, in the indicative.",
    },
    {
      head: 'Devant une voyelle', label: "parce qu'",
      fr: fr(E(1216)),
      sub: rsOf(E(1216)),
      body: `Devant il, elle, on, un : parce qu'. C'est l'élision de ${ELISION_REF}, la même que pour que. EN: before a vowel, parce que elides.`,
    },
    {
      head: 'Une cause au passé', label: 'parce que',
      fr: fr(E(1225)),
      sub: rsOf(E(1225)),
      body: "Parce que ne change jamais. Le verbe après lui prend le temps de l'histoire : était, avait, voulait. EN: parce que never changes; the verb after it takes the story's tense.",
    },
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte parce que',
  groups: [
    grp('Parce que, puis une phrase', [
      it(E(1219), 'il voulait voyager'),
      it(E(1223), 'le salaire était trop bas'),
      it(E(1224), 'le dernier bus passe'),
      it('fr.a2.routines.061', "j'étais en retard"),
    ], chk(
      'Après parce que, qu’est-ce qui vient toujours ?',
      ['un nom seul', 'un sujet et un verbe'], 1,
      "Parce que ouvre une subordonnée : un sujet, un verbe. EN: a subject and a verb.")),
    grp("Parce qu' devant une voyelle", [
      it(E(1217), "parce qu'elle"),
      it(E(1226), "parce qu'il"),
      it(E(1228), "parce qu'il fait beau"),
      it('fr.a1.maison.149', "parce qu'il fait froid"),
    ], chk(
      '« parce que il pleut » : que change à l’écrit ?',
      ["on écrit parce qu'il pleut", 'rien ne change'], 0,
      "Devant une voyelle, que devient qu'. EN: que elides before a vowel.")),
    ctl('La réponse courte', '« Pourquoi tu pars ? » Quelle réponse est naturelle à l’oral ?',
      ['Parce que mon train.', fr(E(1215))], 1,
      "Même courte, la réponse garde un sujet et un verbe : mon train part. EN: even a short answer keeps a subject and a verb."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['parceque'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  sheetId: 'sheet-cause',
  title: 'Parce que, partout',
  examples: [
    ex(E(1222), 'la raison de l’appel, après la principale.'),
    ex(E(1225), 'une cause au passé : était, à l’imparfait.'),
    ex(E(1229), "c'est parce que ... que : tu mets la cause en avant."),
    ex(E(1230), "parce qu'il avait : l'élision devant il."),
    ex(E(1224), 'un conseil, puis sa raison.'),
    ex('fr.b1.connecteurs-logiques.005', 'parce que, puis une cause au passé composé.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['parceque'],
};

/** CHOOSE: the question or the answer, and the tense of the cause. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Pourquoi, parce que',
  groups: [
    grp('La réponse à pourquoi', [
      it(E(1215), 'une réponse orale'),
      it(E(1222), 'la raison de l’appel'),
      it(E(1228), 'une conversation'),
      it(E(1230), 'une explication simple'),
    ], chk(
      '« Pourquoi tu m’appelles ? » Tu réponds :',
      ["Pourquoi j'ai une question.", fr(E(1222))], 1,
      "Pourquoi pose la question, parce que donne la réponse. EN: pourquoi asks, parce que answers.")),
    grp('La cause au passé', [
      it(E(1225), 'le film'),
      it(E(1219), 'le voyage'),
      it('fr.b1.connecteurs-logiques.005', 'la panne'),
    ], chk(
      '« Elle a pleuré parce que le film ... triste. »',
      ['était', 'soit'], 0,
      "La cause est un fait : l'indicatif, ici l'imparfait. EN: the cause is a fact, so the indicative.")),
    ctl('L’insistance', "« C'est parce que tu es arrivé tard qu'on a raté le début. » Que met la phrase en avant ?",
      ['le lieu', 'la conséquence', 'la cause'], 2,
      "C'est parce que ... que pousse la cause au premier plan. EN: it puts the cause in the spotlight."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['parceque'],
};

/** TRAP: four things an anglophone does with parce que. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre parce que de travers',
  errors: [
    {
      wrong: 'Je suis en retard parce que de la neige.',
      right: fr(E(1264)),
      why: "Normal : because of a deux mots, et tu as traduit les deux. Mais parce que attend un verbe : parce qu'il neige. Ou alors à cause de la neige. EN: give parce que a verb, or use à cause de.",
    },
    {
      wrong: 'Il reste chez lui parce que il est malade.',
      right: fr(E(1226)),
      why: "On l'entend presque ainsi à l'oral rapide. À l'écrit, que devient qu' devant une voyelle. EN: write parce qu' before a vowel.",
    },
    {
      wrong: 'Elle a pleuré parce que le film soit triste.',
      right: fr(E(1225)),
      why: "Après le subjonctif, le réflexe est normal. Mais la cause est un fait : parce que prend l'indicatif. EN: parce que takes the indicative.",
    },
    {
      wrong: 'Je repars demain. Parce que mon train part à huit heures.',
      right: 'Je repars demain parce que mon train part à huit heures.',
      why: "À l'oral, parce que répond seul à pourquoi. À l'écrit, la cause suit sa principale, dans la même phrase. EN: in writing, keep the cause in its main clause's sentence.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['parceque'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris la cause que tu entends',
  frSub: 'parce que, parce qu’',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['parceque'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La suite', '« Elle ne vient pas parce que ... »',
    ['sa maladie', "qu'elle est malade", 'elle est malade'], 2,
    "Un sujet, un verbe : elle est malade. À l'écrit : parce qu'elle est malade. EN: a clause, with elision."),
  ctl('L’élision', "« Parce que il pleut » s'écrit...",
    ["parce qu'il pleut", 'parce que il pleut'], 0,
    "Que devient qu' devant il. EN: que elides."),
  ctl('Pourquoi', '« Pourquoi tu restes ? » Quelle réponse est complète ?',
    ['Parce que le rapport.', 'Parce que je dois finir un rapport.'], 1,
    "Parce que, puis un sujet et un verbe. EN: a subject and a verb."),
], ['parceque']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Parce que',
    opener: {
      line: "Pourquoi, pourquoi, pourquoi : ici tu réponds avec une vraie phrase, pas avec un mot. EN: Why, why, why: here you answer with a real clause, not a single word.",
      imageRef: 'lessons/subordination/act02.jpg',
    },
    sections: [],
    milestone: "Tu construis parce que avec un sujet et un verbe, et tu réponds à pourquoi avec une vraie phrase, à l'oral comme à l'écrit. EN: You build parce que with a subject and a verb, and answer pourquoi with a real clause, in speech and in writing.",
    estScreens: 32, restPoints: ['a2-exemples'],
  },
  sections: [A2_HISTOIRE, A2_PARCE, A2_CONSTRUIRE, A2_EXEMPLES, A2_CHOISIR, A2_ERREURS, A2_DICTEE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 · PUISQUE ET COMME
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear. `hideLines` because the questions are about what the ear
 *  caught: which cause was already known, which came first. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La cause que tout le monde connaît',
  frSub: 'Écoute puisque et comme',
  lines: [
    ln(E(1231)), ln(E(1234)), ln(E(1233)), ln(E(1235)),
    ln(E(1243)), ln(E(1242)), ln(E(1244)), ln(E(1239)),
  ],
  questions: [
    { q: 'Première phrase : la personne sait-elle déjà qu’elle a une voiture ?', opts: ['Non, c’est une nouvelle', 'Oui, bien sûr'], correct: 1, why: "Puisque : une cause que les deux connaissent. EN: a known cause." },
    { q: 'Deuxième phrase : où est la cause ?', opts: ['au début', 'à la fin'], correct: 0, why: "Comme il faisait beau : comme ouvre la phrase. EN: comme comes first." },
    { q: 'Pourquoi reste-t-on à l’intérieur ?', opts: ['il fait froid', 'il y a une grève', 'il pleut'], correct: 2, why: "Puisqu'il pleut : on le voit par la fenêtre. EN: it is raining, as both can see." },
    { q: 'Pourquoi rentre-t-on à pied ?', opts: ['le métro est en grève', 'il fait beau'], correct: 0, why: "Puisque le métro est en grève : ici, puisque vient en deuxième, c'est possible. EN: puisque can come second." },
    { q: 'Dernière phrase : quel mot ouvre la cause ?', opts: ['comme', 'vu que', 'car'], correct: 1, why: "Vu que : même sens que puisque, plus familier. EN: vu que, a casual puisque." },
  ],
  audio: REC('rec-b1-31-puisque-ecoute'),
  say: REFRAME,
  terms: ['puisque'],
};

const A3_CAUSES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-causes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-cause',
  title: 'Quatre autres causes',
  frSub: 'puisque, comme, vu que, étant donné que',
  hint: 'Quatre cartes. Les deux dernières sont surtout à reconnaître.',
  audio: REC('rec-b1-31-causes'),
  say: REFRAME,
  terms: ['puisque'],
  cards: [
    {
      head: 'Tu le sais déjà', label: 'puisque',
      fr: fr(E(1231)),
      sub: rsOf(E(1231)),
      body: "Puisque rappelle une cause que l'autre connaît, et en tire une conclusion : donc tu peux nous conduire. EN: puisque recalls a known cause to draw a conclusion.",
    },
    {
      head: 'La cause en tête', label: 'comme',
      fr: fr(E(1234)),
      sub: rsOf(E(1234)),
      body: "Comme met la cause au début, avant la principale, avec une virgule. En fin de phrase, on dit parce que. EN: comme goes first; at the end, use parce que.",
    },
    {
      head: 'À l’oral', label: 'vu que',
      fr: fr(E(1239)),
      sub: rsOf(E(1239)),
      body: "Vu que dit la même chose que puisque, sur un ton familier. Tu l'entendras souvent. EN: a casual puisque.",
    },
    {
      head: 'À l’écrit', label: 'étant donné que',
      fr: fr(E(1240)),
      sub: rsOf(E(1240)),
      body: "Étant donné que, c'est puisque dans un rapport ou une lettre officielle. Surtout à lire. EN: a formal puisque, mostly to read.",
    },
  ],
};

/** NAME, as a lookup: six causes, their place and their register. */
const A3_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-tableau',
  layer: 'core',
  sheetId: 'sheet-cause',
  title: 'Six façons de dire la cause',
  cols: ['Mot', 'Place', 'Registre'],
  rows: [
    { cells: ['parce que', 'surtout après', 'partout'], say: fr(E(1218)),
      detail: { title: 'parce que', body: "La cause neutre, la réponse à pourquoi. EN: the neutral cause.", say: fr(E(1216)) } },
    { cells: ['car', 'toujours après', 'écrit'], say: fr(E(1221)),
      detail: { title: 'car', body: "Jamais en tête, jamais en réponse. Leçon 30 du B1. EN: never first, never an answer.", say: fr(E(1227)) } },
    { cells: ['puisque', 'avant ou après', 'partout'], say: fr(E(1231)),
      detail: { title: 'puisque', body: "Une cause déjà connue des deux. EN: a cause both people know.", say: fr(E(1244)) } },
    { cells: ['comme', 'toujours avant', 'partout'], say: fr(E(1234)),
      detail: { title: 'comme', body: "La cause d'abord, puis une virgule. EN: the cause first, then a comma.", say: fr(E(1242)) } },
    { cells: ['vu que', 'avant ou après', 'oral'], say: fr(E(1239)),
      detail: { title: 'vu que', body: "Puisque, en plus familier. EN: casual puisque.", say: fr(E(1248)) } },
    { cells: ['étant donné que', 'surtout avant', 'soutenu'], say: fr(E(1240)),
      detail: { title: 'étant donné que', body: "Puisque, en plus officiel. EN: formal puisque.", say: fr(E(1240)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['puisque', 'parceque'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte puisque et comme',
  groups: [
    grp('Comme, en premier', [
      it(E(1235), 'la cause, puis la virgule'),
      it(E(1236), 'elle parle espagnol'),
      it(E(1247), 'il était tard'),
      it('fr.a2.sports-et-loisirs.061', 'il pleuvait'),
    ], chk(
      'Dans ces phrases, où est la principale ?',
      ['après la virgule', 'avant comme'], 0,
      "Comme, la cause, la virgule, puis la principale. EN: the main clause follows the comma.")),
    grp('Puisque, une cause connue', [
      it(E(1233), 'on voit la pluie'),
      it(E(1243), 'tu viens d’insister'),
      it(E(1241), 'la situation est claire'),
      it('fr.a2.sports-et-loisirs.064', 'on sait que j’aime le sport'),
    ], chk(
      '« Puisque tu insistes, je viens. » L’autre personne sait-elle qu’elle insiste ?',
      ['non', 'oui'], 1,
      "Bien sûr : puisque reprend ce qu'elle vient de faire. EN: puisque picks up what is known.")),
    ctl('Vu que', 'Quel mot dit la même chose que vu que ?',
      ['comme', 'puisque', 'car'], 1,
      "Vu que, c'est puisque en familier. EN: vu que is casual puisque."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['puisque'],
};

/** Consolidation, as answers. No « EN: » tail anywhere on a back. */
const A3_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a3-cartes',
  layer: 'core',
  title: 'Huit cartes pour la cause',
  cards: [
    { front: 'since you have a car', back: 'puisque tu as une voiture', say: fr(E(1231)) },
    { front: 'as the weather was nice, ...', back: 'comme il faisait beau, ...', say: fr(E(1234)) },
    { front: 'since it is raining', back: "puisqu'il pleut", say: fr(E(1233)) },
    { front: 'seeing that the train is late', back: 'vu que le train est en retard', say: fr(E(1239)) },
    { front: 'given that prices are rising', back: 'étant donné que les prix augmentent', say: fr(E(1240)) },
    { front: 'since you insist', back: 'puisque tu insistes', say: fr(E(1243)) },
    { front: 'as it was late, ...', back: 'comme il était tard, ...', say: fr(E(1247)) },
    { front: 'as we were early, ...', back: 'comme nous étions en avance, ...', say: fr(E(1242)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['puisque'],
};

/** CHOOSE: new or known cause, front or back. */
const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Nouvelle ou connue, devant ou derrière',
  groups: [
    grp('Une cause que l’autre ignore', [
      it(E(1222), 'l’autre ne sait pas encore'),
      it(E(1223), 'une nouvelle pour Sophie'),
      it(E(1219), 'une information'),
      it(E(1225), 'tu expliques'),
    ], chk(
      'Ton ami ne sait pas que le métro est en grève. Que dis-tu ?',
      ['Puisque le métro est en grève, je rentre à pied.', 'Je rentre à pied parce que le métro est en grève.'], 1,
      "Une nouvelle : parce que. Puisque ferait comme s'il le savait déjà. EN: new information takes parce que.")),
    grp('La cause en tête', [
      it(E(1242), 'comme, puis la virgule'),
      it(E(1247), 'comme, puis la virgule'),
      it(E(1240), 'étant donné que, en tête'),
      it('fr.b1.routines.092', 'comme, au passé'),
    ], chk(
      'Tu veux commencer par la cause. Quel mot est le plus naturel ?',
      ['car', 'parce que', 'comme'], 2,
      "Comme est fait pour ça. Car ne commence jamais. EN: comme is the front-position cause.")),
    ctl('Comme à la fin', "« Je suis rentré comme le magasin était fermé. »",
      ["C'est correct.", 'Il faut parce que, ou comme en tête.'], 1,
      "À la fin, comme se lit comme une comparaison. EN: at the end, comme reads as a comparison."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['puisque', 'parceque'],
};

/** TRAP, stepped: comme at the end, puisque for news. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Comme au bout, puisque pour une nouvelle',
  rule: {
    title: 'Comme devant, puisque pour ce qu’on sait',
    body: "Comme de cause ouvre la phrase. Puisque rappelle une cause connue ; pour une nouvelle, c'est parce que. Après les deux, l'indicatif. EN: comme goes first; puisque is for known causes; both take the indicative.",
  },
  cards: [
    { promptLabel: 'comme à la fin', promptSound: 'Nous avons mangé dehors comme il faisait beau.', fr: fr(E(1234)), ipa: ipaOf(E(1234)), tip: "Comme va devant : comme il faisait beau, nous avons mangé dehors. EN: comme first." },
    { promptLabel: 'puisque pour une nouvelle', promptSound: 'Je te préviens : puisque ma mère est malade, je ne viens pas.', fr: fr(E(1217)), ipa: ipaOf(E(1217)), tip: "Tu annonces une nouvelle : parce que. EN: news takes parce que." },
    { promptLabel: 'pas de virgule', promptSound: 'Comme le magasin était fermé je suis rentré.', fr: fr(E(1235)), ipa: ipaOf(E(1235)), tip: "Une virgule après la cause en tête. EN: a comma after the fronted cause." },
    { promptLabel: 'puisque sans élision', promptSound: 'Puisque il pleut, on reste à l’intérieur.', fr: fr(E(1233)), ipa: ipaOf(E(1233)), tip: "Puisqu' devant il. EN: puisqu' before a vowel." },
    { promptLabel: 'vu que dans une lettre', promptSound: 'Madame, vu que les prix augmentent, nous changeons de fournisseur.', fr: fr(E(1240)), ipa: ipaOf(E(1240)), tip: "Dans une lettre, étant donné que. EN: formal writing takes étant donné que." },
    { promptLabel: 'comme sans principale', promptSound: 'Comme il était tard.', fr: fr(E(1247)), ipa: ipaOf(E(1247)), tip: "Comme ouvre une subordonnée : il faut la principale. EN: comme needs its main clause." },
  ],
  drill: [
    { promptSay: '... il faisait beau, nous avons mangé dehors.', opts: ['Comme', 'Car'], correct: 0 },
    { promptSay: 'Je rentre à pied ... le métro est en grève. (ton ami le sait déjà)', opts: ['comme', 'puisque'], correct: 1 },
    { promptSay: '... il pleut, on reste à l’intérieur.', opts: ['Puisque', "Puisqu'"], correct: 1 },
    { promptSay: 'Nous sommes restés ... il pleuvait.', opts: ['parce qu’', 'comme', 'car que'], correct: 0 },
    { promptSay: 'Madame, ... les prix augmentent, nous changeons de fournisseur.', opts: ['vu que', 'étant donné que'], correct: 1 },
    { promptSay: '... tu insistes, je viens avec toi.', opts: ['Car', 'Pendant que', 'Puisque'], correct: 2 },
    { promptSay: 'Je suis rentré ... le magasin était fermé.', opts: ['comme', 'parce que'], correct: 1 },
    { promptSay: '... le magasin était fermé, je suis rentré.', opts: ['Car', 'Comme', 'Si bien que'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Comme devant, puisque pour ce qu’on sait' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-31-piege-comme'),
  say: REFRAME,
  terms: ['puisque'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Puisque', "« Puisque tu es là, aide-moi. » L'autre sait-il qu'il est là ?",
    ['oui', 'non'], 0,
    "Évidemment : puisque reprend un fait connu. EN: a known fact."),
  ctl('Comme', 'Où se met comme, quand il dit la cause ?',
    ['à la fin', 'au milieu', 'au début'], 2,
    "Au début, avant la principale. EN: at the start."),
  ctl('Le registre', 'Dans une lettre officielle, lequel choisis-tu ?',
    ['vu que', 'étant donné que'], 1,
    "Étant donné que est soutenu. EN: étant donné que is formal."),
], ['puisque']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Puisque et comme',
    opener: {
      line: "Tout le monde voit qu'il pleut : ici tu dis une cause connue, et tu la mets en tête de phrase. EN: Everyone can see it is raining: here you give a cause that is already known, and put it first.",
      imageRef: 'lessons/subordination/act03.jpg',
    },
    sections: [],
    milestone: "Tu choisis puisque pour une cause connue et comme pour une cause en tête, et tu reconnais vu que et étant donné que. EN: You use puisque for a known cause and comme for a fronted one, and you recognise vu que and étant donné que.",
    estScreens: 40, restPoints: ['a3-tableau', 'a3-cartes'],
  },
  sections: [A3_ECOUTE, A3_CAUSES, A3_TABLEAU, A3_CONSTRUIRE, A3_CARTES, A3_CHOISIR, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 · À CAUSE DE, GRÂCE À
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_BULLETIN: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-bulletin',
  layer: 'core',
  questionsInModal: true,
  title: 'Le bulletin de sept heures',
  frSub: 'Lis les causes : bonnes et mauvaises',
  text: BULLETIN_TEXT,
  glossary: [
    { word: 'verglas', en: 'black ice, freezing rain', note: 'Une couche de glace très fine sur la route.' },
    { word: 'en raison des', en: 'owing to', note: "À cause de, dans une langue officielle. EN: formal à cause de." },
    { word: 'Limoilou', en: 'Limoilou', note: 'Un quartier de la ville de Québec.' },
    { word: 'salle chauffée', en: 'heated hall', note: 'Un endroit où on peut avoir chaud pendant une panne.' },
    { word: 'automobilistes', en: 'drivers', note: 'Les personnes qui conduisent une voiture.' },
  ],
  questions: [
    { q: 'Pourquoi l’autoroute est-elle fermée ?', a: "À cause du verglas. Du, parce que de + le verglas." },
    { q: 'Qu’est-ce qui a coupé l’électricité à Limoilou ?', a: "Un arbre tombé sur une ligne : « à cause d'un arbre »." },
    { q: 'Quelle bonne nouvelle donne le bulletin ?', a: "Le courant est revenu dans le Vieux-Québec, grâce aux équipes de la ville. Grâce à : une cause positive." },
    { q: 'Quelle cause est dite avec une phrase complète ?', a: "« parce que les routes sont très glissantes » : un sujet, un verbe." },
    { q: 'Quelle expression sonne la plus officielle ?', a: "« en raison des pannes » : c'est à cause de, en plus soutenu." },
  ],
  audio: REC('rec-b1-31-bulletin'),
  say: REFRAME,
  terms: ['causenom'],
};

const A4_NOM: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-nom',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-cause',
  title: 'Quand la cause est un nom',
  frSub: 'à cause de, grâce à',
  hint: 'Quatre cartes. Regarde ce qui suit : un nom, jamais une phrase.',
  audio: REC('rec-b1-31-nom'),
  say: REFRAME,
  terms: ['causenom'],
  cards: [
    {
      head: 'Une mauvaise cause', label: 'à cause de',
      fr: fr(E(1249)),
      sub: rsOf(E(1249)),
      body: "À cause de, puis un nom : la neige. La cause a fait quelque chose de mauvais. EN: à cause de plus a noun, for a bad cause.",
    },
    {
      head: 'Une bonne cause', label: 'grâce à',
      fr: fr(E(1251)),
      sub: rsOf(E(1251)),
      body: "Grâce à, c'est une cause qui mérite un merci. Le résultat est bon. EN: grâce à thanks the cause.",
    },
    {
      head: 'Les petits mots se collent', label: 'du, au, des, aux',
      fr: fr(E(1253)),
      sub: rsOf(E(1253)),
      body: "De + le fait du, à + le fait au : à cause du brouillard, grâce au GPS, grâce aux bénévoles. EN: de and à contract with le and les.",
    },
    {
      head: 'Un nom ou une phrase', label: 'la paire',
      fr: fr(E(1264)),
      sub: rsOf(E(1264)),
      body: "Parce qu'il neige : une phrase. À cause de la neige : un nom. Les deux disent la même cause. EN: same cause, clause or noun.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte à cause de et grâce à',
  groups: [
    grp('À cause de, et ses contractions', [
      it(E(1250), 'à cause de la pluie'),
      it(E(1259), 'à cause du stress'),
      it(E(1260), 'à cause des moustiques'),
      it('fr.a2.heure-et-date.123', 'à cause de la circulation'),
    ], chk(
      '« à cause de le stress » s’écrit...',
      ['à cause du stress', 'à cause de stress'], 0,
      "De + le = du. EN: de plus le makes du.")),
    grp('Grâce à, et ses contractions', [
      it(E(1252), 'grâce au GPS'),
      it(E(1254), 'grâce à ses contacts'),
      it(E(1256), 'grâce aux bénévoles'),
      it(E(1261), 'grâce à cette formation'),
    ], chk(
      '« grâce à les bénévoles » s’écrit...',
      ['grâce des bénévoles', 'grâce aux bénévoles'], 1,
      "À + les = aux. EN: à plus les makes aux.")),
    ctl('En tête', "« À cause de la grève, le métro ne marche pas. » La virgule est...",
      ['obligatoire', 'interdite', 'rare'], 0,
      "La cause est en tête : une virgule la sépare. EN: a fronted cause takes a comma."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['causenom'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  sheetId: 'sheet-cause',
  title: 'Nom ou phrase',
  examples: [
    ex(E(1255), 'à cause de, en tête, puis une virgule.'),
    ex(E(1265), "c'est à cause de moi que : la faute, avec moi, toi, lui."),
    ex(E(1266), 'en raison de : à cause de, dans un avis officiel.'),
    ex('fr.a2.marche.148', 'à cause de la pluie : une cause simple.'),
    ex('fr.a1.deplacements.285', 'à cause des travaux : de + les = des.'),
    ex(E(1264), 'la même cause en phrase : parce qu’il neige.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['causenom', 'parceque'],
};

/** CHOOSE: good or bad cause; noun or clause. */
const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Merci, ou dommage',
  groups: [
    grp('Bonne ou mauvaise cause', [
      it(E(1251), 'un merci'),
      it(E(1253), 'un problème'),
      it(E(1256), 'un succès'),
      it(E(1250), 'une annulation'),
    ], chk(
      'Tu as eu ton permis. Ton ami t’a aidé. Que dis-tu ?',
      ["J'ai eu mon permis à cause de toi.", "J'ai eu mon permis grâce à toi."], 1,
      "Un bon résultat : grâce à. À cause de toi sonnerait comme un reproche. EN: good result, grâce à.")),
    grp('Nom ou phrase', [
      it(E(1249), 'un nom : la neige'),
      it(E(1264), 'une phrase : il neige'),
      it(E(1259), 'un nom : le stress'),
      it(E(1218), 'une phrase : les routes sont glissantes'),
    ], chk(
      '« Je suis resté ... la grève. »',
      ['parce que', 'à cause de', 'grâce à'], 1,
      "La grève est un nom, et la cause est mauvaise : à cause de. EN: a noun and a bad cause.")),
    ctl('L’ironie', '« Bravo, on a raté le train grâce à toi. » La personne est...',
      ['contente', 'ironique'], 1,
      "Grâce à pour un mauvais résultat : c'est de l'ironie. EN: that is sarcasm."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['causenom'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre causes mal collées',
  errors: [
    {
      wrong: 'La route est fermée parce que de la neige.',
      right: fr(E(1249)),
      why: "C'est le piège de because of : deux mots anglais, deux mots français. Mais devant un nom, c'est à cause de. EN: before a noun, à cause de.",
    },
    {
      wrong: 'Je suis en retard à cause que le métro était bloqué.',
      right: fr(E(1201)),
      why: "On l'entend parfois au Québec, dans une langue très familière. À l'écrit, devant une phrase, c'est parce que. EN: before a clause, parce que.",
    },
    {
      wrong: 'Le vol a été retardé à cause de le brouillard.',
      right: fr(E(1253)),
      why: "Normal : de et le sont deux mots dans ta tête. En français, ils se collent : du. EN: de + le = du.",
    },
    {
      wrong: 'Grâce à la tempête, nous avons perdu une journée.',
      right: 'À cause de la tempête, nous avons perdu une journée.',
      why: "En anglais, due to ne dit pas si c'est bien ou mal. Grâce à dit merci : pour une perte, à cause de. EN: grâce à is for good results only.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['causenom'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Nom ou phrase', '« Le vol est annulé ... brouillard. »',
    ['à cause du', 'parce que le'], 0,
    "Un nom : à cause du. EN: a noun takes à cause du."),
  ctl('Bonne cause', "« ... ton aide, j'ai réussi. »",
    ['À cause de', 'Parce que', 'Grâce à'], 2,
    "Un bon résultat : grâce à. EN: a good result."),
  ctl('La contraction', '« grâce à les bénévoles »',
    ['grâce aux bénévoles', 'grâce les bénévoles'], 0,
    "À + les = aux. EN: aux."),
], ['causenom']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'À cause de, grâce à',
    opener: {
      line: "Le verglas, les bénévoles, le brouillard : ici tu dis une cause en un seul nom, bonne ou mauvaise. EN: Black ice, volunteers, fog: here you give a cause as a single noun, good or bad.",
      imageRef: 'lessons/subordination/act04.jpg',
    },
    sections: [],
    milestone: "Tu dis une cause avec un nom, tu choisis à cause de ou grâce à, et tu colles du, au, des, aux. EN: You give a cause as a noun, pick à cause de or grâce à, and contract du, au, des, aux.",
    estScreens: 32, restPoints: ['a4-exemples'],
  },
  sections: [A4_BULLETIN, A4_NOM, A4_CONSTRUIRE, A4_EXEMPLES, A4_CHOISIR, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 · SI BIEN QUE, DE SORTE QUE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a supplier in Dakar tells a chain of results. */
const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Une semaine difficile',
  frSub: 'Moussa raconte, conséquence après conséquence',
  setting: "Un appel vidéo avec Moussa, le fournisseur de l'agence à Dakar. Les chaises pour le congrès ne sont pas encore parties. Il t'explique la semaine.",
  bubbles: [
    { from: 'narrator', fr: 'Moussa soupire avant de commencer.', en: 'Moussa sighs before he starts.' },
    { from: 'coach', fr: "Lundi, le port était en grève, si bien que le bateau n'a pas pu partir.", en: 'On Monday the port was on strike, so the ship could not leave.' },
    { from: 'user', fr: 'Et le bateau suivant, alors.', en: 'And the next ship, then.' },
    { from: 'coach', fr: "Il était complet, de sorte que nous avons dû attendre jeudi.", en: 'It was full, so we had to wait until Thursday.' },
    { from: 'user', fr: 'Donc les chaises arrivent quand, à Montréal.', en: 'So when do the chairs get to Montréal.' },
    { from: 'coach', fr: "Le bateau est parti jeudi soir, si bien qu'il arrivera dans trois semaines.", en: 'The ship left on Thursday evening, so it will arrive in three weeks.', warn: 'si bien que : ce qui en résulte' },
    { from: 'narrator', fr: 'Tu notes : une grève, un bateau complet, trois semaines. Chaque fois, la cause d’abord, puis le résultat.', en: 'You write down: a strike, a full ship, three weeks. Each time the cause first, then the result.' },
  ],
  closing: { fr: 'Si bien que et de sorte que ouvrent ce qui est arrivé ensuite.', en: 'Si bien que and de sorte que open what happened next.' },
  audio: REC('rec-b1-31-moussa'),
  say: REFRAME,
  terms: ['resultat'],
};

const A5_RESULTAT: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-resultat',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-consequence',
  title: 'Le résultat, dans la même phrase',
  frSub: 'si bien que, de sorte que',
  hint: 'Quatre cartes. La cause vient toujours avant.',
  audio: REC('rec-b1-31-resultat'),
  say: REFRAME,
  terms: ['resultat', 'conjonction'],
  cards: [
    {
      head: 'Ce qui en résulte', label: 'si bien que',
      fr: fr(E(1267)),
      sub: rsOf(E(1267)),
      body: "La pluie d'abord, la rivière ensuite. Si bien que ouvre la subordonnée du résultat. EN: si bien que opens the result clause.",
    },
    {
      head: 'Le même lien, plus écrit', label: 'de sorte que',
      fr: fr(E(1269)),
      sub: rsOf(E(1269)),
      body: "De sorte que dit la même chose. Tu le trouves surtout dans un rapport ou un courriel. EN: the same link, more written.",
    },
    {
      head: 'Un fait, donc l’indicatif', label: 'le mode',
      fr: fr(E(1275)),
      sub: rsOf(E(1275)),
      body: "Le camion est arrivé : c'est un fait, il a eu lieu. La conjonction le sait, et elle choisit l'indicatif. EN: a result is a fact, so the indicative.",
    },
    {
      head: 'Et donc', label: 'donc',
      fr: fr('fr.b1.connecteurs-logiques.008'),
      sub: '[luh pohⁿ ay-teh fehr-MAY | dohⁿk noo-za-vohⁿ dü feh-ruhⁿ day-TOOR]',
      body: `Donc relie aussi une cause et un résultat, mais ce n'est pas une conjonction de subordination. Il est dans ${COORDINATION_REF}. EN: donc does the same job, as a coordinator.`,
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'La cause, puis le résultat',
  groups: [
    grp('Si bien que', [
      it(E(1268), 'complet, donc le bus'),
      it(E(1271), 'le week-end, donc le rapport'),
      it(E(1276), 'le réveil, donc l’avion'),
      it(E(1279), 'les travaux, donc le détour'),
    ], chk(
      'Dans ces phrases, que vient après si bien que ?',
      ['le résultat', 'la cause'], 0,
      "Le résultat, toujours. La cause est avant la virgule. EN: the result follows.")),
    grp('De sorte que', [
      it(E(1270), 'la salle trop petite'),
      it(E(1273), 'le serveur en panne'),
      it(E(1280), 'le client qui ne paie pas'),
      it(E(1269), 'le badge oublié'),
    ], chk(
      "« Le serveur est tombé en panne, de sorte que le site ... inaccessible. »",
      ['soit', 'était'], 1,
      "Un fait : l'indicatif. EN: a fact, so the indicative.")),
    ctl('La virgule', 'Où va la virgule ?',
      ['après si bien que', 'avant si bien que', 'nulle part'], 1,
      "Avant : Il a plu, si bien que... EN: before si bien que."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resultat'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  sheetId: 'sheet-consequence',
  title: 'Une cause, un résultat',
  examples: [
    ex(E(1267), 'la pluie, puis la rivière.'),
    ex(E(1274), 'les prix, puis nos achats : au présent.'),
    ex(E(1275), 'la neige, puis le camion : au passé composé.'),
    ex(E(1281), "si bien qu'on : l'élision devant on."),
    ex(E(1280), 'de sorte que, dans un message au client.'),
    ex('fr.b1.connecteurs-logiques.008', 'donc : le même lien, en coordination.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resultat'],
};

/** CHOOSE: which way does the link point. */
const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Vers la cause, ou vers le résultat',
  groups: [
    grp('Parce que regarde en arrière', [
      it(E(1203), 'la cause après parce que'),
      it(E(1204), 'la cause après parce que'),
      it(E(1268), 'le résultat après si bien que'),
      it(E(1276), 'le résultat après si bien que'),
    ], chk(
      '« Nous avons pris le bus ... le train était complet. »',
      ['parce que', 'si bien que'], 0,
      "Le train complet est la cause : parce que. EN: the full train is the cause.")),
    grp('Si bien que regarde en avant', [
      it(E(1267), 'la rivière a débordé'),
      it(E(1273), 'le site était inaccessible'),
      it(E(1279), 'nous avons fait un détour'),
      it(E(1281), 'on a dormi chez Sophie'),
    ], chk(
      '« Le train était complet, ... nous avons pris le bus. »',
      ['si bien que', 'parce que', 'puisque'], 0,
      "Le bus est le résultat : si bien que. EN: the bus is the result.")),
    ctl('La paire', "« Il a plu, si bien que la rivière a débordé. » La même chose avec parce que :",
      ['Il a plu parce que la rivière a débordé.', 'La rivière a débordé parce qu’il a plu.'], 1,
      "Avec parce que, la cause passe derrière. EN: with parce que the cause moves to the end."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resultat', 'parceque'],
};

/** TRAP, stepped: the link pointing the wrong way, and the wrong mood. */
const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Le résultat à l’envers',
  rule: {
    title: 'La cause avant, le résultat après',
    body: "Si bien que et de sorte que ouvrent le RÉSULTAT, jamais la cause. Ils viennent après la cause, avec une virgule, et le verbe est à l'indicatif. EN: they open the result, after the cause, in the indicative.",
  },
  cards: [
    { promptLabel: 'le lien à l’envers', promptSound: 'La rivière a débordé, si bien qu’il a plu toute la nuit.', fr: fr(E(1267)), ipa: ipaOf(E(1267)), tip: "La pluie cause la crue, pas le contraire. EN: rain first, flood after." },
    { promptLabel: 'un subjonctif', promptSound: 'J’ai oublié mon badge, de sorte que je ne puisse pas entrer.', fr: fr(E(1269)), ipa: ipaOf(E(1269)), tip: "C'est arrivé : l'indicatif, je n'ai pas pu. EN: it happened, so the indicative." },
    { promptLabel: 'en tête de phrase', promptSound: 'Si bien que nous avons pris le bus, le train était complet.', fr: fr(E(1268)), ipa: ipaOf(E(1268)), tip: "Le résultat suit sa cause. EN: the result comes second." },
    { promptLabel: 'sans élision', promptSound: 'Il n’a pas entendu son réveil, si bien que il a raté l’avion.', fr: fr(E(1276)), ipa: ipaOf(E(1276)), tip: "Si bien qu' devant il. EN: elide before il." },
    { promptLabel: 'si bien seul', promptSound: 'Le client n’a pas payé, si bien la livraison est bloquée.', fr: fr(E(1280)), ipa: ipaOf(E(1280)), tip: "Il manque que : si bien que, de sorte que. EN: que is part of it." },
    { promptLabel: 'parce que à la place', promptSound: 'La neige a bloqué la route, parce que le camion est arrivé le lendemain.', fr: fr(E(1275)), ipa: ipaOf(E(1275)), tip: "Le camion en retard est le résultat, pas la cause. EN: the late lorry is the result." },
  ],
  drill: [
    { promptSay: 'Il a plu, ... la rivière a débordé.', opts: ['si bien que', 'parce que'], correct: 0 },
    { promptSay: "J'ai oublié mon badge, de sorte que je n'ai pas ... entrer.", opts: ['puisse', 'pu'], correct: 1 },
    { promptSay: 'La rivière a débordé ... il a plu.', opts: ['si bien que', 'parce qu’', 'de sorte que'], correct: 1 },
    { promptSay: "Il n'a pas entendu son réveil, si bien ... il a raté l'avion.", opts: ["qu'", 'que'], correct: 0 },
    { promptSay: 'La salle était trop petite, de sorte que certains ... restés debout.', opts: ['sont', 'soient'], correct: 0 },
    { promptSay: 'Le train était complet, ... nous avons pris le bus.', opts: ['puisque', 'car', 'si bien que'], correct: 2 },
    { promptSay: 'Le client n’a pas payé, de ... que la livraison est bloquée.', opts: ['façon', 'sorte'], correct: 1 },
    { promptSay: 'Les prix ont augmenté, ... nous achetons moins.', opts: ['si bien que', 'pour que', 'parce que'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'La cause avant, le résultat après' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-31-piege-resultat'),
  say: REFRAME,
  terms: ['resultat'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La direction', 'Après si bien que, tu trouves...',
    ['la cause', 'le résultat'], 1,
    "Le résultat. EN: the result."),
  ctl('Le mode', '« Il a plu, si bien que la rivière ... »',
    ['a débordé', 'ait débordé'], 0,
    "Un fait : l'indicatif. EN: a fact."),
  ctl('La place', 'Si bien que peut-il ouvrir la phrase ?',
    ['non, il suit la cause', 'oui, toujours', 'seulement à l’écrit'], 0,
    "Il vient après la cause. EN: it follows the cause."),
], ['resultat']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Si bien que, de sorte que',
    opener: {
      line: "Une grève, un bateau complet, trois semaines de retard : ici tu dis ce qui en résulte, dans la même phrase. EN: A strike, a full ship, three weeks' delay: here you say what came of it, in the same sentence.",
      imageRef: 'lessons/subordination/act05.jpg',
    },
    sections: [],
    milestone: "Tu dis le résultat avec si bien que et de sorte que, après la cause et à l'indicatif. EN: You give the result with si bien que and de sorte que, after the cause and in the indicative.",
    estScreens: 32, restPoints: ['a5-exemples'],
  },
  sections: [A5_HISTOIRE, A5_RESULTAT, A5_CONSTRUIRE, A5_EXEMPLES, A5_CHOISIR, A5_PIEGE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 · TELLEMENT, SI, TANT
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Trop, et alors',
  frSub: 'Écoute ce qui était trop fort',
  lines: [
    ln(E(1283)), ln(E(1285)), ln(E(1284)), ln(E(1286)),
    ln(E(1287)), ln(E(1289)), ln(E(1291)), ln(E(1296)),
  ],
  questions: [
    { q: 'Première phrase : qu’est-ce qui a gelé ?', opts: ['la route', 'le lac'], correct: 1, why: "Le froid était si fort que le lac a gelé. EN: the lake froze." },
    { q: 'Pourquoi sont-ils partis ?', opts: ['il y avait trop de monde', 'il faisait trop chaud', 'le film était long'], correct: 0, why: "Tellement de monde : un nom, avec de. EN: too many people." },
    { q: 'Qu’est-ce qui était trop chaud ?', opts: ['le café', 'la soupe'], correct: 1, why: "Si chaude que je me suis brûlé. EN: the soup." },
    { q: 'Cinquième phrase : qu’est-ce qui est trop rapide ?', opts: ['le train', 'sa façon de parler', 'la musique'], correct: 1, why: "Elle parle si vite : si devant un adverbe. EN: si before an adverb." },
    { q: 'Dernière phrase : ont-ils attendu jusqu’au bout ?', opts: ['oui', 'non'], correct: 1, why: "La file était si longue qu'on a abandonné. EN: they gave up." },
  ],
  audio: REC('rec-b1-31-degre-ecoute'),
  say: REFRAME,
  terms: ['intensite'],
};

const A6_DEGRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-degre',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-consequence',
  title: 'Tellement fort que',
  frSub: 'si, tellement, tant, puis que',
  hint: 'Quatre cartes. Regarde le mot devant que.',
  audio: REC('rec-b1-31-degre'),
  say: REFRAME,
  terms: ['intensite'],
  cards: [
    {
      head: 'Devant un adjectif', label: 'si, tellement',
      fr: fr(E(1284)),
      sub: rsOf(E(1284)),
      body: "Si chaude, tellement chaude : les deux marchent devant un adjectif ou un adverbe. Tellement est plus courant à l'oral. EN: si and tellement before an adjective.",
    },
    {
      head: 'Devant un nom', label: 'tellement de, tant de',
      fr: fr(E(1285)),
      sub: rsOf(E(1285)),
      body: "Tellement de monde, tant de travail : de, et jamais du ni des, comme après beaucoup. EN: de before the noun, like beaucoup de.",
    },
    {
      head: 'Après un verbe', label: 'tellement, tant',
      fr: fr(E(1288)),
      sub: rsOf(E(1288)),
      body: "Il a tellement plu, nous avons tant marché : au passé composé, le mot va entre l'auxiliaire et le participe. EN: after the verb; between auxiliary and participle.",
    },
    {
      head: 'Puis que', label: 'la conséquence',
      fr: fr(E(1283)),
      sub: rsOf(E(1283)),
      body: "Le que ouvre la conséquence, à l'indicatif : le lac a gelé. Sans que, la phrase reste en l'air. EN: que opens the result, in the indicative.",
    },
  ],
};

const A6_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-tableau',
  layer: 'core',
  sheetId: 'sheet-consequence',
  title: 'Six façons de dire trop',
  cols: ['Forme', 'Devant', 'Exemple'],
  rows: [
    { cells: ['si ... que', 'adjectif, adverbe', 'si chaude que'], say: fr(E(1284)),
      detail: { title: 'si', body: "Un peu plus écrit que tellement. EN: slightly more written.", say: fr(E(1296)) } },
    { cells: ['tellement ... que', 'adjectif, adverbe', 'tellement froid que'], say: fr(E(1283)),
      detail: { title: 'tellement + adjectif', body: "Le plus courant à l'oral. EN: the most common in speech.", say: fr(E(1289)) } },
    { cells: ['verbe + tellement que', 'après le verbe', 'il a tellement plu que'], say: fr(E(1288)),
      detail: { title: 'tellement + verbe', body: "Entre l'auxiliaire et le participe. EN: between auxiliary and participle.", say: fr(E(1295)) } },
    { cells: ['verbe + tant que', 'après le verbe', 'nous avons tant marché que'], say: fr(E(1290)),
      detail: { title: 'tant + verbe', body: "Le même sens, plus écrit. EN: same meaning, more written.", say: fr(E(1290)) } },
    { cells: ['tellement de ... que', 'un nom', 'tellement de monde que'], say: fr(E(1285)),
      detail: { title: 'tellement de', body: "De, jamais du ni des. EN: de, never du or des.", say: fr(E(1297)) } },
    { cells: ['tant de ... que', 'un nom', 'tant de travail que'], say: fr(E(1286)),
      detail: { title: 'tant de', body: "Le même sens que tellement de. EN: same as tellement de.", say: fr(E(1291)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensite'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte le degré',
  groups: [
    grp('Si ou tellement + adjectif', [
      it(E(1283), 'tellement froid'),
      it(E(1289), 'tellement long'),
      it(E(1294), 'si fatigué'),
      it(E(1296), 'si longue'),
    ], chk(
      '« La soupe était ... chaude que je me suis brûlé. »',
      ['si', 'tant'], 0,
      "Devant un adjectif : si ou tellement, pas tant. EN: tant does not go before an adjective.")),
    grp('Tellement de, tant de + nom', [
      it(E(1285), 'tellement de monde'),
      it(E(1286), 'tant de travail'),
      it(E(1291), 'tant de bruit'),
      it(E(1297), 'tellement de neige'),
    ], chk(
      '« Il y avait tellement ... neige. »',
      ['de la', 'de'], 1,
      "Tellement de, comme beaucoup de. EN: tellement de, like beaucoup de.")),
    ctl('Après le verbe', '« Elle a ... ri qu’elle a pleuré. »',
      ['si', 'tellement', 'tellement de'], 1,
      "Après un verbe : tellement, ou tant. EN: tellement after a verb."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensite'],
};

const A6_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a6-cartes',
  layer: 'core',
  title: 'Huit cartes pour trop',
  cards: [
    { front: 'it was so cold that the lake froze', back: 'il faisait tellement froid que le lac a gelé', say: fr(E(1283)) },
    { front: 'so hot that I burnt myself', back: 'si chaude que je me suis brûlé', say: fr(E(1284)) },
    { front: 'so many people that we left', back: 'tellement de monde que nous sommes partis', say: fr(E(1285)) },
    { front: 'so much work that I no longer sleep', back: 'tant de travail que je ne dors plus', say: fr(E(1286)) },
    { front: 'she talks so fast that ...', back: 'elle parle si vite que ...', say: fr(E(1287)) },
    { front: 'it rained so much that ...', back: 'il a tellement plu que ...', say: fr(E(1288)) },
    { front: 'she laughed so much that she cried', back: "elle a tellement ri qu'elle a pleuré", say: fr(E(1295)) },
    { front: 'so long that we gave up', back: "si longue qu'on a abandonné", say: fr(E(1296)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensite'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Adjectif, nom ou verbe',
  groups: [
    grp('Le mot qui suit', [
      it(E(1287), 'vite : un adverbe'),
      it(E(1290), 'marché : un verbe'),
      it(E(1291), 'bruit : un nom'),
      it('fr.b1.courses.003', 'augmenté : un verbe'),
    ], chk(
      '« Il y a ... bruit que je n’entends rien. »',
      ['tant de', 'si', 'tellement'], 0,
      "Bruit est un nom : tant de, ou tellement de. EN: a noun takes tant de.")),
    grp('Trop, ou tellement', [
      it(E(1289), 'je me suis endormi'),
      it(E(1294), 'je me suis couché'),
      it(E(1295), 'elle a pleuré'),
      it('fr.b1.conflits-reconciliation.003', "elle n'a pas parlé"),
    ], chk(
      'Le film est long, et tu t’es endormi. Que dis-tu ?',
      ['Le film était trop long que je me suis endormi.', 'Le film était tellement long que je me suis endormi.'], 1,
      "Trop ne prend pas que. Pour un résultat, tellement ... que. EN: trop takes no que.")),
    ctl('Sans que', '« Il faisait si froid. » Seule, cette phrase...',
      ['est fausse', 'dit seulement qu’il faisait très froid'], 1,
      "Sans que, il n'y a pas de conséquence : juste très froid. EN: without que there is no result."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensite'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de trop en faire',
  errors: [
    {
      wrong: 'Il y avait tellement du monde que nous sommes partis.',
      right: fr(E(1285)),
      why: "Du monde se dit tout seul, alors tu l'as gardé. Après tellement, comme après beaucoup, c'est de. EN: tellement de, like beaucoup de.",
    },
    {
      wrong: 'La file était trop longue que nous avons abandonné.',
      right: fr(E(1296)),
      why: "So long that : so devient trop dans ta tête. Mais trop ne prend pas que. Pour un résultat : si ou tellement. EN: trop cannot open a result.",
    },
    {
      wrong: 'J’ai si beaucoup de travail que je ne dors plus.',
      right: fr(E(1286)),
      why: "So much : si + beaucoup semble logique. En français, un seul mot : tant de ou tellement de. EN: tant de, not si beaucoup de.",
    },
    {
      wrong: 'Nous avons marché tant que nous avions mal aux pieds.',
      right: fr(E(1290)),
      why: "L'ordre anglais met so much à la fin. Au passé composé, tant va entre avons et marché. EN: tant sits between auxiliary and participle.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensite'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Devant un nom', '« ... de travail »',
    ['tant', 'si', 'trop que'], 0,
    "Tant de, ou tellement de. EN: tant de."),
  ctl('Le que', '« Il faisait tellement froid ... le lac a gelé. »',
    ['que', 'si bien'], 0,
    "Tellement ... que. EN: tellement ... que."),
  ctl('Trop', 'Trop ... que peut-il dire un résultat ?',
    ['oui', 'non'], 1,
    "Non : si ou tellement. EN: no."),
], ['intensite']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Tellement, si, tant',
    opener: {
      line: "Il faisait si froid que le lac a gelé : ici tu dis qu'une chose était trop forte, et ce qui en est sorti. EN: It was so cold the lake froze: here you say something was too strong, and what came of it.",
      imageRef: 'lessons/subordination/act06.jpg',
    },
    sections: [],
    milestone: "Tu dis un résultat avec si, tellement ou tant, devant un adjectif, un nom ou après un verbe. EN: You give a result with si, tellement or tant, before an adjective, a noun or after a verb.",
    estScreens: 40, restPoints: ['a6-tableau', 'a6-cartes'],
  },
  sections: [A6_ECOUTE, A6_DEGRE, A6_TABLEAU, A6_CONSTRUIRE, A6_CARTES, A6_CHOISIR, A6_ERREURS, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 · C'EST POURQUOI, PAR CONSÉQUENT
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_AVIS: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-avis',
  layer: 'core',
  questionsInModal: true,
  title: 'Avis aux locataires',
  frSub: 'Lis comment une phrase mène à la suivante',
  text: AVIS_TEXT,
  glossary: [
    { word: 'locataires', en: 'tenants', note: "Les personnes qui louent un appartement." },
    { word: 'hors service', en: 'out of order', note: 'Il ne marche pas pour le moment.' },
    { word: 'la veille', en: 'the day before', note: 'Le jour juste avant.' },
    { word: 'gênants', en: 'inconvenient', note: 'Qui dérangent.' },
    { word: 'gérance', en: 'building management', note: "En Suisse, l'agence qui gère l'immeuble." },
  ],
  questions: [
    { q: 'Pourquoi l’ascenseur ne marchera-t-il pas ?', a: "À cause des travaux. « Par conséquent, l'ascenseur sera hors service » : par conséquent ouvre une nouvelle phrase." },
    { q: 'Que conseille l’avis, et pourquoi ?', a: "De fermer les fenêtres la veille, parce que le chauffage sera coupé. « c'est pourquoi » vient après un point-virgule." },
    { q: 'Quel lien reste dans la même phrase que sa cause ?', a: "« si bien que le bruit commencera tôt » : une subordonnée, après une virgule." },
    { q: 'Quelle bonne nouvelle termine l’avis ?', a: "Le loyer sera réduit de dix pour cent : « Par conséquent » encore, en début de phrase." },
    { q: 'Où est comme, et pourquoi là ?', a: "« Comme la cour sera occupée... » : en tête, parce que comme de cause ouvre la phrase." },
  ],
  audio: REC('rec-b1-31-avis'),
  say: REFRAME,
  terms: ['adverbe', 'resultat'],
};

const A7_ADVERBES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-adverbes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-consequence',
  title: 'Deux phrases, un lien',
  frSub: "c'est pourquoi, par conséquent",
  hint: 'Quatre cartes. Regarde le point avant le lien.',
  audio: REC('rec-b1-31-adverbes'),
  say: REFRAME,
  terms: ['adverbe'],
  cards: [
    {
      head: 'Après un point', label: "c'est pourquoi",
      fr: fr(E(1301)),
      sub: rsOf(E(1301)),
      body: "La cause est une phrase complète. C'est pourquoi ouvre une deuxième phrase complète. EN: two full sentences, linked.",
    },
    {
      head: 'Le plus soutenu', label: 'par conséquent',
      fr: fr(E(1304)),
      sub: rsOf(E(1304)),
      body: "Par conséquent, suivi d'une virgule, dans un avis, un rapport, un courriel à la direction. EN: formal, followed by a comma.",
    },
    {
      head: 'À l’oral', label: "c'est pour ça que",
      fr: fr(E(1314)),
      sub: rsOf(E(1314)),
      body: "Entre amis, tu dis c'est pour ça que. Le même lien, en plus simple. EN: the spoken version.",
    },
    {
      head: 'Pas une conjonction', label: 'pas de mode',
      fr: fr(E(1302)),
      sub: rsOf(E(1302)),
      body: "Ces mots n'ouvrent pas de subordonnée : la phrase qui suit tient seule, et ils ne choisissent aucun mode. EN: no subordinate clause, no mood choice.",
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Relie deux phrases',
  groups: [
    grp("C'est pourquoi", [
      it(E(1303), 'une virgule avant'),
      it(E(1306), 'un point avant'),
      it(E(1309), 'une virgule avant'),
      it(E(1313), 'un point-virgule avant'),
    ], chk(
      "La phrase après c'est pourquoi peut-elle tenir seule ?",
      ['oui', 'non'], 0,
      "Oui : ce n'est pas une subordonnée. EN: yes, it is not a subordinate clause.")),
    grp('Par conséquent', [
      it(E(1302), 'un point-virgule avant'),
      it(E(1307), 'un point avant'),
      it(E(1310), 'un point avant'),
      it(E(1315), 'un point avant'),
    ], chk(
      'Que met-on juste après par conséquent ?',
      ['une virgule', 'que'], 0,
      "Par conséquent, virgule, puis la phrase. Jamais par conséquent que. EN: a comma, never que.")),
    ctl('Le registre', 'Dans un avis officiel, lequel choisis-tu ?',
      ["c'est pour ça que", 'par conséquent', 'vu que'], 1,
      "Par conséquent est le plus soutenu. EN: the most formal."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adverbe'],
};

/** NAME, the punctuation, as four points. */
const A7_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a7-focus',
  layer: 'core',
  sheetId: 'sheet-texte',
  title: 'Relier sans se tromper',
  points: [
    "Si bien que et de sorte que restent dans la phrase de la cause, après une virgule. EN: si bien que stays in the same sentence.",
    "C'est pourquoi peut suivre un point, un point-virgule ou une virgule. EN: c'est pourquoi can follow any of the three.",
    "Par conséquent se met en tête de la nouvelle phrase, avec une virgule. EN: par conséquent opens the new sentence, with a comma.",
    "Varie : un même lien trois fois de suite fatigue le lecteur. EN: vary your links.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adverbe', 'resultat'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Une phrase ou deux',
  groups: [
    grp('Dans la même phrase', [
      it(E(1267), 'si bien que, après une virgule'),
      it(E(1273), 'de sorte que, après une virgule'),
      it(E(1206), 'tellement ... que'),
      it(E(1303), "c'est pourquoi, aussi possible"),
    ], chk(
      '« Le pont est fermé. ... nous passons par Lévis. »',
      ["C'est pourquoi", 'Si bien que'], 0,
      "Après un point, il faut un lien qui ouvre une phrase : c'est pourquoi. EN: after a full stop, c'est pourquoi.")),
    grp('Du familier au soutenu', [
      it(E(1314), "c'est pour ça que, à l'oral"),
      it(E(1309), "c'est pourquoi, partout"),
      it(E(1310), 'par conséquent, dans un avis'),
      it(E(1304), 'par conséquent, au bureau'),
    ], chk(
      'Tu écris un texto à un ami. Lequel est le plus naturel ?',
      ['Par conséquent,', "C'est pour ça que"], 1,
      "À un ami, c'est pour ça que. EN: to a friend, c'est pour ça que.")),
    ctl('Le mode', "« Il neigeait, c'est pourquoi le vol ... annulé. »",
      ['ait été', 'a été', 'soit'], 1,
      "C'est pourquoi ne choisit aucun mode : la phrase est normale, a été. EN: no mood change."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adverbe'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux phrases qui se croient une',
  rule: {
    title: 'Adverbe ou conjonction',
    body: "C'est pourquoi et par conséquent relient deux phrases entières. Si bien que ouvre une subordonnée dans la même phrase. Ne mélange pas les deux. EN: adverbs join two sentences; si bien que builds one.",
  },
  cards: [
    { promptLabel: 'par conséquent que', promptSound: 'Le bureau sera fermé lundi, par conséquent que la réunion est reportée.', fr: fr(E(1304)), ipa: ipaOf(E(1304)), tip: "Pas de que après par conséquent. EN: no que." },
    { promptLabel: 'si bien que après un point', promptSound: 'Le pont est fermé. Si bien que nous passons par Lévis.', fr: fr(E(1301)), ipa: ipaOf(E(1301)), tip: "Après un point : c'est pourquoi. EN: after a full stop, c'est pourquoi." },
    { promptLabel: "c'est pourquoi que", promptSound: "La route était glacée, c'est pourquoi que j'ai pris le train.", fr: fr(E(1309)), ipa: ipaOf(E(1309)), tip: "C'est pourquoi, sans que. C'est pour ça que, avec que. EN: pourquoi takes no que." },
    { promptLabel: 'par conséquent en réponse', promptSound: 'Pourquoi tu ne m’as pas appelé ? Par conséquent je n’avais pas de réseau.', fr: fr(E(1314)), ipa: ipaOf(E(1314)), tip: "La cause, puis la conséquence. EN: cause first, then the result." },
    { promptLabel: 'la cause après', promptSound: "C'est pourquoi le vol a été annulé, il neigeait beaucoup.", fr: fr(E(1303)), ipa: ipaOf(E(1303)), tip: "La cause d'abord, puis c'est pourquoi. EN: the cause comes first." },
    { promptLabel: 'pas de virgule', promptSound: 'Il n’y a pas assez d’inscrits. Par conséquent l’atelier est annulé.', fr: fr(E(1307)), ipa: ipaOf(E(1307)), tip: "Une virgule après par conséquent. EN: a comma after it." },
  ],
  drill: [
    { promptSay: 'Le pont est fermé. ... nous passons par Lévis.', opts: ["C'est pourquoi", 'Si bien que'], correct: 0 },
    { promptSay: "La route était glacée, c'est ... j'ai pris le train.", opts: ['pourquoi que', 'pourquoi'], correct: 1 },
    { promptSay: "Je n'avais pas de réseau. C'est pour ça ... je n'ai pas appelé.", opts: ['que', 'pourquoi', 'comme'], correct: 0 },
    { promptSay: 'Les prix ont augmenté ; par conséquent, nous ... nos tarifs.', opts: ['changions', 'changeons'], correct: 1 },
    { promptSay: 'Il neigeait beaucoup, ... le vol a été annulé.', opts: ['parce que', "c'est pourquoi", 'puisque'], correct: 1 },
    { promptSay: 'Le bureau sera fermé lundi. ... la réunion est reportée.', opts: ['Par conséquent,', 'Par conséquent que'], correct: 0 },
    { promptSay: "Le chauffage est en panne ; ... les cours ont lieu en ligne.", opts: ["c'est pourquoi", 'car', 'comme'], correct: 0 },
    { promptSay: 'Nous avons reçu des plaintes. Par conséquent, nous ... l’horaire.', opts: ['modifiions', 'modifions', 'modifier'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Adverbe ou conjonction' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-31-piege-adverbes'),
  say: REFRAME,
  terms: ['adverbe'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Après un point', '« Le pont est fermé. ... »',
    ["C'est pourquoi nous passons par Lévis.", 'Si bien que nous passons par Lévis.'], 0,
    "Une nouvelle phrase : c'est pourquoi. EN: a new sentence."),
  ctl('Le que', "Lequel prend que ?",
    ["c'est pourquoi", 'par conséquent', "c'est pour ça"], 2,
    "C'est pour ça que. EN: c'est pour ça que."),
  ctl('Le soutenu', 'Le plus soutenu :',
    ["c'est pour ça que", 'par conséquent'], 1,
    "Par conséquent. EN: par conséquent."),
], ['adverbe']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: "C'est pourquoi",
    opener: {
      line: "Un point, puis la suite : ici tu relies deux phrases entières, sans les coller en une. EN: A full stop, then what follows: here you link two whole sentences without welding them into one.",
      imageRef: 'lessons/subordination/act07.jpg',
    },
    sections: [],
    milestone: "Tu relies deux phrases avec c'est pourquoi ou par conséquent, et tu sais que ces mots ne choisissent aucun mode. EN: You link two sentences with c'est pourquoi or par conséquent, and you know they pick no mood.",
    estScreens: 32, restPoints: ['a7-focus'],
  },
  sections: [A7_AVIS, A7_ADVERBES, A7_CONSTRUIRE, A7_FOCUS, A7_CHOISIR, A7_PIEGE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 · LE BUT, EN RAPPEL
 *
 *  b1.16 owns pour + infinitive against pour que. This act RECALLS it in
 *  order to set purpose against result: the only new thing is the contrast
 *  with si bien que / de sorte que + indicative. Every subjunctive on screen
 *  here is cited to b1.16.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Tout est prévu',
  frSub: 'Élodie prépare une fête surprise',
  setting: "Bruxelles, un vendredi. Ton amie Élodie organise une fête surprise pour son frère. Tu l'aides au téléphone, et elle t'explique chaque détail.",
  bubbles: [
    { from: 'narrator', fr: 'Élodie parle vite. Elle a tout prévu, et chaque chose a un but.', en: 'Élodie talks fast. She has planned everything, and each thing has a purpose.' },
    { from: 'coach', fr: "J'ai réservé une table pour fêter sa promotion.", en: 'I booked a table to celebrate his promotion.', warn: 'un seul sujet : pour + infinitif' },
    { from: 'coach', fr: 'Et je pars tôt pour éviter les bouchons.', en: 'And I am leaving early to avoid the traffic.' },
    { from: 'user', fr: 'Et pour les invités, tu as fait comment.', en: 'And for the guests, how did you manage.' },
    { from: 'coach', fr: fr(E(1320)), en: src(E(1320)).en, warn: 'deux sujets : afin que, leçon 16 du B1' },
    { from: 'user', fr: "Tu as tout expliqué clairement, si bien que personne ne s'est perdu.", en: 'You explained everything clearly, so nobody got lost.', warn: 'si bien que : un résultat, à l’indicatif' },
    { from: 'narrator', fr: 'Élodie rit. Pour, afin que : ce qu’elle cherchait. Si bien que : ce qui est arrivé.', en: 'Élodie laughs. Pour, afin que: what she was aiming at. Si bien que: what actually happened.' },
  ],
  closing: { fr: 'Le but regarde devant. Le résultat est déjà là.', en: 'The aim looks ahead. The result is already there.' },
  audio: REC('rec-b1-31-elodie'),
  say: REFRAME,
  terms: ['but', 'resultat'],
};

const A8_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-mode',
  title: 'Le but, ce que tu sais déjà',
  frSub: 'pour, afin de, pour que',
  hint: 'Quatre cartes. Les trois premières sont un rappel.',
  audio: REC('rec-b1-31-but'),
  say: REFRAME,
  terms: ['but', 'mode'],
  cards: [
    {
      head: 'Ce que tu as déjà', label: Cap(SUBJ_INF_REF),
      fr: fr(E(1318)),
      sub: rsOf(E(1318)),
      body: `« ${B116_REFRAME} » Un seul sujet : pour, puis l'infinitif. EN: one subject, pour plus the infinitive.`,
    },
    {
      head: 'Plus écrit', label: 'afin de',
      fr: fr(E(1319)),
      sub: rsOf(E(1319)),
      body: "Afin de dit la même chose que pour, dans un courriel ou un rapport. EN: afin de is a written pour.",
    },
    {
      head: 'Deux sujets', label: 'pour que',
      fr: fr(E(1321)),
      sub: rsOf(E(1321)),
      body: `Je parle, tout le monde comprend : deux sujets, donc pour que et le subjonctif. C'est ${SUBJ_INF_REF}, rappelée ici. EN: two subjects, pour que and the subjunctive.`,
    },
    {
      head: 'Le but ou le résultat', label: 'de sorte que',
      fr: fr(E(1331)),
      sub: rsOf(E(1331)),
      body: "Tout le monde l'a entendue : c'est arrivé, donc l'indicatif. De sorte que + subjonctif dirait un but : à reconnaître seulement. EN: result in the indicative; a purpose reading exists, to recognise.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Un sujet ou deux',
  groups: [
    grp('Un seul sujet : pour, afin de', [
      it(E(1317), 'moi, j’appelle et j’explique'),
      it(E(1324), 'moi, j’ouvre et j’aère'),
      it(E(1325), 'lui, il note et il n’oublie pas'),
      it(E(1332), 'moi, je réserve et je fête'),
    ], chk(
      'Dans ces phrases, qui fait l’action après pour ?',
      ['le même sujet', 'une autre personne'], 0,
      "Le même sujet : pour + infinitif. EN: the same subject.")),
    grp('Deux sujets : pour que, afin que', [
      it(E(1320), 'je, puis tu'),
      it(E(1321), 'je, puis tout le monde'),
      it(E(1326), 'je, puis tu'),
      it(E(1352), 'je, puis tu'),
    ], chk(
      'Après pour que, quel mode trouves-tu ici ?',
      ["l'indicatif", 'le subjonctif'], 1,
      `Le subjonctif, comme dans ${SUBJ_INF_REF}. EN: the subjunctive, from b1.16.`)),
    ctl('Afin de', '« Elle économise ... acheter une maison. »',
      ['afin que', 'afin de', 'afin'], 1,
      "Un seul sujet : afin de. EN: afin de."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['but'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  sheetId: 'sheet-mode',
  title: 'Le but et le résultat, côte à côte',
  examples: [
    ex(E(1318), 'le but : pour éviter, ce que nous voulons.'),
    ex(E(1327), 'le but : pour protéger les tuyaux.'),
    ex(E(1330), 'de sorte que + subjonctif : un but, à reconnaître.'),
    ex(E(1331), 'de sorte que + indicatif : un résultat, c’est arrivé.'),
    ex(E(1268), 'si bien que : un résultat, jamais un but.'),
    ex(E(1326), 'pour que : deux sujets, le subjonctif de la leçon 16.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['but', 'resultat'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Cherché, ou arrivé',
  groups: [
    grp('Le but ou le résultat', [
      it(E(1318), 'ce que nous cherchons'),
      it(E(1267), 'ce qui est arrivé'),
      it(E(1319), 'ce qu’elle cherche'),
      it(E(1275), 'ce qui est arrivé'),
    ], chk(
      '« Nous partons tôt pour éviter les bouchons. » Avons-nous déjà évité les bouchons ?',
      ['on ne sait pas encore', 'oui'], 0,
      "Le but regarde devant : rien n'est encore arrivé. EN: the aim is still ahead.")),
    grp('Le mode suit le lien', [
      it(E(1331), 'résultat : l’a entendue'),
      it(E(1330), 'but : t’entende'),
      it(E(1276), 'résultat : a raté'),
      it(E(1321), 'but : comprenne'),
    ], chk(
      '« Elle a parlé fort, de sorte que tout le monde ... entendue. »',
      ["l'a", "l'ait"], 0,
      "C'est arrivé : l'indicatif, l'a entendue. EN: it happened, so the indicative.")),
    ctl('Un sujet', '« Je t’écris ... te dire merci. »',
      ['pour que', 'pour', 'si bien que'], 1,
      "Un seul sujet, je : pour + infinitif. EN: pour + infinitive."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['but', 'mode'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre buts mal visés',
  errors: [
    {
      wrong: 'Nous partons tôt pour que nous évitions les bouchons.',
      right: fr(E(1318)),
      why: "En anglais, so that we avoid est normal. En français, un seul sujet donne pour + infinitif. EN: one subject, pour plus infinitive (b1.16).",
    },
    {
      wrong: 'Elle économise afin que d’acheter une maison.',
      right: fr(E(1319)),
      why: "Afin que et afin de se mélangent facilement. Devant un infinitif, c'est afin de, sans que. EN: afin de before an infinitive.",
    },
    {
      wrong: "J'ai tout expliqué, pour que personne ne s'est perdu.",
      right: "J'ai tout expliqué, si bien que personne ne s'est perdu.",
      why: "Tu voulais dire le résultat, et pour que semblait naturel. Pour que dit un but ; pour un résultat, si bien que. EN: a result needs si bien que.",
    },
    {
      wrong: 'Il a pris des notes pour ne oublier rien.',
      right: fr(E(1325)),
      why: "Devant un infinitif, ne rien se met en bloc : ne rien oublier. EN: ne rien goes together before the infinitive.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['but'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Un sujet', '« Je pars tôt ... éviter les bouchons. »',
    ['pour', 'pour que', 'si bien que'], 0,
    "Un seul sujet : pour. EN: pour."),
  ctl('But ou résultat', "Lequel dit un résultat ?",
    ['pour que', 'si bien que'], 1,
    "Si bien que : c'est arrivé. EN: si bien que."),
  ctl('Le mode', '« Je parle lentement pour que tout le monde ... »',
    ['comprend', 'comprenne'], 1,
    `Pour que : le subjonctif, ${SUBJ_INF_REF}. EN: the subjunctive.`),
], ['but', 'mode']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le but, en rappel',
    opener: {
      line: "Chaque détail de la fête a une raison d'être : ici tu dis ce que tu cherches, et tu le sépares de ce qui est arrivé. EN: Every detail of the party is there for a reason: here you say what you are aiming at, and keep it apart from what happened.",
      imageRef: 'lessons/subordination/act08.jpg',
    },
    sections: [],
    milestone: "Tu dis le but avec pour ou afin de, tu reconnais pour que, et tu ne le confonds plus avec un résultat. EN: You give an aim with pour or afin de, recognise pour que, and no longer mix it up with a result.",
    estScreens: 32, restPoints: ['a8-exemples'],
  },
  sections: [A8_HISTOIRE, A8_RAPPEL, A8_CONSTRUIRE, A8_EXEMPLES, A8_CHOISIR, A8_ERREURS, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 · LE TEMPS : PENDANT QUE, DEPUIS QUE, LORSQUE, APRÈS QUE
 *
 *  quand and dès que + futur are b1.05-b1.07's; pendant que as the
 *  interruption frame is b1.03's. This act adds pendant que for two things
 *  at once, depuis que, lorsque, and après que + indicative.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Avant, pendant, depuis',
  frSub: 'Écoute quand les choses arrivent',
  lines: [
    ln(E(1333)), ln(E(1334)), ln(E(1335)), ln(E(1337)),
    ln(E(1339)), ln(E(1344)), ln(E(1345)), ln(E(1336)),
  ],
  questions: [
    { q: 'Première phrase : les deux actions ont lieu...', opts: ['l’une après l’autre', 'en même temps'], correct: 1, why: "Pendant que : en même temps. EN: at the same time." },
    { q: 'Deuxième phrase : qu’est-ce qui a coupé le sommeil ?', opts: ['le téléphone', 'le réveil', 'un voisin'], correct: 0, why: "Pendant que je dormais, le téléphone a sonné : la coupure de la leçon 3 du B1. EN: the phone cut in." },
    { q: 'Troisième phrase : fait-il encore du vélo ?', opts: ['oui', 'non'], correct: 0, why: "Depuis que : la situation dure encore. EN: it is still going on." },
    { q: 'Cinquième phrase : quand ont-ils fermé le bureau ?', opts: ['avant son départ', 'après son départ'], correct: 1, why: "Après qu'il est parti : son départ d'abord. EN: after he left." },
    { q: 'Quel mot entends-tu dans la quatrième phrase ?', opts: ['lorsque', 'quand', 'pendant que'], correct: 0, why: "Lorsque : le quand de l'écrit. EN: lorsque." },
  ],
  audio: REC('rec-b1-31-temps-ecoute'),
  say: REFRAME,
  terms: ['temps'],
};

const A9_TEMPS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-temps',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-temps',
  title: 'Le temps, sans quand',
  frSub: 'pendant que, depuis que, lorsque, après que',
  hint: 'Quatre cartes. Les quatre prennent l’indicatif.',
  audio: REC('rec-b1-31-temps'),
  say: REFRAME,
  terms: ['temps'],
  cards: [
    {
      head: 'En même temps', label: 'pendant que',
      fr: fr(E(1333)),
      sub: rsOf(E(1333)),
      body: `Deux choses en même temps. Au passé, tu connais la coupure : « ${B103_REFRAME} » EN: two things at once; in the past, b1.03's interruption.`,
    },
    {
      head: 'Depuis un début', label: 'depuis que',
      fr: fr(E(1335)),
      sub: rsOf(E(1335)),
      body: "Depuis que donne le point de départ, et la principale dit ce qui dure encore, souvent au présent. EN: the start point, and what is still true.",
    },
    {
      head: 'Le quand écrit', label: 'lorsque',
      fr: fr(E(1337)),
      sub: rsOf(E(1337)),
      body: `Lorsque, c'est quand dans un texte soigné. Avec le futur, il suit la règle de ${FUTUR_USAGE_REF} : lorsque vous recevrez. EN: a written quand; same future rule as quand.`,
    },
    {
      head: 'Un fait déjà arrivé', label: 'après que',
      fr: fr(E(1339)),
      sub: rsOf(E(1339)),
      body: "Après que prend l'indicatif, parce que ce qui suit a eu lieu. À l'oral, tu entendras souvent le subjonctif : reconnais-le, n'écris pas. EN: indicative; the spoken subjunctive is only to recognise.",
    },
  ],
};

const A9_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-tableau',
  layer: 'core',
  sheetId: 'sheet-temps',
  title: 'Six façons de dire quand',
  cols: ['Mot', 'Sens', 'Mode'],
  rows: [
    { cells: ['quand', 'au moment où', 'indicatif'], say: 'Quand le train est arrivé, nous sommes montés.',
      detail: { title: 'quand', body: "Le mot de base, partout. Avec le futur : leçon 7 du B1. EN: the everyday word.", say: 'Quand il fait beau, nous travaillons dehors.' } },
    { cells: ['lorsque', 'quand, à l’écrit', 'indicatif'], say: fr(E(1337)),
      detail: { title: 'lorsque', body: "Même sens, plus soigné. EN: same meaning, more careful.", say: fr(E(1346)) } },
    { cells: ['pendant que', 'en même temps', 'indicatif'], say: fr(E(1333)),
      detail: { title: 'pendant que', body: "Deux actions qui durent ensemble. EN: two things at once.", say: fr(E(1344)) } },
    { cells: ['depuis que', 'à partir de', 'indicatif'], say: fr(E(1335)),
      detail: { title: 'depuis que', body: "Le début d'une situation qui dure. EN: the start of something ongoing.", say: fr(E(1345)) } },
    { cells: ['après que', 'une fois que', 'indicatif'], say: fr(E(1339)),
      detail: { title: 'après que', body: "L'indicatif à l'écrit ; le subjonctif s'entend à l'oral. EN: indicative in writing.", say: fr(E(1350)) } },
    { cells: ['avant que', 'plus tôt que', 'subjonctif'], say: fr(E(1355)),
      detail: { title: 'avant que', body: "Lui prend le subjonctif : leçon 16 du B1. EN: subjunctive, b1.16.", say: fr(E(1355)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps', 'mode'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte le temps',
  groups: [
    grp('Pendant que, depuis que', [
      it(E(1344), 'les deux durent'),
      it(E(1336), 'un changement qui dure'),
      it(E(1345), 'la rue, depuis l’ouverture'),
      it('fr.b1.cafe.085', 'pendant l’attente'),
    ], chk(
      "« Depuis qu'il a changé de travail, il ... plus calme. »",
      ['est', 'était'], 0,
      "La situation dure encore : le présent. EN: still true, so the present.")),
    grp('Lorsque, après que', [
      it(E(1337), 'lorsque, au passé'),
      it(E(1346), "lorsqu'il fait beau"),
      it(E(1340), 'après que, puis est sorti'),
      it(E(1350), 'après que, puis a signé'),
    ], chk(
      '« Après que le client ... signé, nous avons commandé. »',
      ['a', 'ait'], 0,
      "Un fait accompli : l'indicatif, a signé. EN: the indicative.")),
    ctl('Lorsque', "« Lorsque il fait beau » s'écrit...",
      ['lorsque il fait beau', "lorsqu'il fait beau"], 1,
      "Lorsqu' devant il. EN: lorsqu' before a vowel."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps'],
};

const A9_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a9-dictee',
  layer: 'core',
  title: 'Écris le moment que tu entends',
  frSub: 'pendant que, depuis que, lorsque, après que',
  itemIds: dicteeFor(9),
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quel moment',
  groups: [
    grp('En même temps ou depuis', [
      it(E(1333), 'en même temps'),
      it(E(1335), 'depuis un début'),
      it(E(1364), 'en même temps, au passé'),
      it('fr.b1.routines.083', 'depuis un changement'),
    ], chk(
      'Tu as déménagé il y a deux ans, et tu dors mieux. Que dis-tu ?',
      ["Pendant que j'ai déménagé, je dors mieux.", "Depuis que j'ai déménagé, je dors mieux."], 1,
      "Un début, et ça dure : depuis que. EN: a start point that lasts.")),
    grp('Quand ou lorsque', [
      it(E(1337), 'un rapport'),
      it(E(1338), 'une facture'),
      it(E(1346), 'une habitude'),
      it(E(1341), 'la règle'),
    ], chk(
      'Lorsque veut dire...',
      ['pendant que', 'quand', 'depuis que'], 1,
      "Lorsque, c'est quand, en plus soigné. EN: lorsque is quand.")),
    ctl('Pendant', '« ... les vacances, j’ai lu trois livres. »',
      ['Pendant', 'Pendant que'], 0,
      "Devant un nom, pendant. Devant une phrase, pendant que. EN: pendant before a noun."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Quatre moments de travers',
  rule: {
    title: 'Le temps, à l’indicatif',
    body: "Pendant que, depuis que, lorsque et après que prennent l'indicatif. Avant que, lui, prend le subjonctif : ne les mélange pas. Devant un nom, pendant et depuis, sans que. EN: all four take the indicative; avant que is the subjunctive one.",
  },
  cards: [
    { promptLabel: 'après que + subjonctif', promptSound: "Après qu'il soit parti, nous avons fermé le bureau.", fr: fr(E(1339)), ipa: ipaOf(E(1339)), tip: "À l'écrit, après que + indicatif : il est parti. EN: write the indicative." },
    { promptLabel: 'pendant que + nom', promptSound: 'Pendant que les vacances, je fais du vélo.', fr: fr(E(1335)), ipa: ipaOf(E(1335)), tip: "Devant une phrase : que. Devant un nom : pendant les vacances. EN: que only before a clause." },
    { promptLabel: 'depuis que, et le passé', promptSound: "Depuis qu'il a changé de travail, il était plus calme.", fr: fr(E(1336)), ipa: ipaOf(E(1336)), tip: "Ça dure encore : il est. EN: still true, present." },
    { promptLabel: 'lorsque sans élision', promptSound: 'Lorsque il fait beau, nous travaillons sur la terrasse.', fr: fr(E(1346)), ipa: ipaOf(E(1346)), tip: "Lorsqu' devant il. EN: elide." },
    { promptLabel: 'lorsque + présent pour demain', promptSound: 'Lorsque vous recevez la facture demain, payez en ligne.', fr: fr(E(1338)), ipa: ipaOf(E(1338)), tip: "Pour l'avenir, le futur, comme après quand. EN: future after lorsque, as after quand." },
    { promptLabel: 'pendant que + subjonctif', promptSound: 'Pendant que tu sois là, aide-moi.', fr: fr(E(1356)), ipa: ipaOf(E(1356)), tip: "Pendant que : l'indicatif, tu es là. EN: indicative." },
  ],
  drill: [
    { promptSay: "Après qu'il ... parti, nous avons fermé.", opts: ['soit', 'est'], correct: 1 },
    { promptSay: '... tu cuisines, je mets la table.', opts: ['Pendant que', 'Pendant'], correct: 0 },
    { promptSay: "Depuis que j'habite à Montréal, je ... du vélo.", opts: ['fais', 'faisais', 'ferai'], correct: 0 },
    { promptSay: '... vous recevrez la facture, payez en ligne.', opts: ['Depuis que', 'Lorsque'], correct: 1 },
    { promptSay: '... il fait beau, nous travaillons sur la terrasse.', opts: ['Lorsque', "Lorsqu'", 'Pendant'], correct: 1 },
    { promptSay: 'Pendant que tu ... là, aide-moi.', opts: ['sois', 'es'], correct: 1 },
    { promptSay: "... les vacances, j'ai lu trois livres.", opts: ['Pendant que', 'Depuis que', 'Pendant'], correct: 2 },
    { promptSay: 'Après que tout le monde ... sorti, le concierge a fermé.', opts: ['est', 'soit'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le temps, à l’indicatif' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-31-piege-temps'),
  say: REFRAME,
  terms: ['temps', 'mode'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Après que', "À l'écrit : « après qu'il ... parti »",
    ['est', 'soit'], 0,
    "L'indicatif. EN: the indicative."),
  ctl('Depuis que', "« Depuis que le café a ouvert, la rue ... plus animée. »",
    ['était', 'sera', 'est'], 2,
    "Ça dure encore : est. EN: still true."),
  ctl('Lorsque', 'Lorsque est surtout...',
    ['écrit', 'familier'], 0,
    "Écrit et soigné. EN: written."),
], ['temps']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Le temps',
    opener: {
      line: "Pendant, depuis, après : ici tu dis quand les choses arrivent, sans répéter quand à chaque phrase. EN: While, since, after: here you say when things happen without repeating quand every time.",
      imageRef: 'lessons/subordination/act09.jpg',
    },
    sections: [],
    milestone: "Tu dis le moment avec pendant que, depuis que, lorsque et après que, à l'indicatif. EN: You say when with pendant que, depuis que, lorsque and après que, in the indicative.",
    estScreens: 38, restPoints: ['a9-tableau', 'a9-dictee'],
  },
  sections: [A9_ECOUTE, A9_TEMPS, A9_TABLEAU, A9_CONSTRUIRE, A9_DICTEE, A9_CHOISIR, A9_PIEGE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 · LA CONJONCTION CHOISIT LE MODE, ET L'ORDRE
 *
 *  The reframe's second sentence, taught head-on. The subjunctive rows here
 *  are tagged `contraste` and cited on screen to b1.15, b1.16 and b1.32.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Un fait, ou autre chose',
  frSub: 'Écoute la conjonction, puis le verbe',
  lines: [
    ln(E(1351)), ln(E(1352)), ln(E(1353)), ln(E(1355)),
    ln(E(1356)), ln(E(1354)), ln(E(1366)), ln(E(1367)),
  ],
  questions: [
    { q: 'Première phrase : « tu es là », c’est...', opts: ['un fait', 'un souhait'], correct: 0, why: "Parce que : une cause réelle, l'indicatif. EN: a real cause." },
    { q: 'Deuxième phrase : quel mot ouvre la subordonnée ?', opts: ['parce que', 'puisque', 'pour que'], correct: 2, why: "Pour que, puis tu sois : le subjonctif. EN: pour que, then the subjunctive." },
    { q: 'Quatrième phrase : le client est-il déjà là ?', opts: ['oui', 'non'], correct: 1, why: "Avant que : il n'est pas encore arrivé, et le verbe est au subjonctif. EN: not yet." },
    { q: 'Sixième phrase : sortent-ils malgré la pluie ?', opts: ['oui', 'non'], correct: 0, why: "Bien que : une concession, leçon 32 du B1. EN: yes, despite the rain." },
    { q: 'Septième phrase : combien de conjonctions entends-tu ?', opts: ['une', 'deux'], correct: 1, why: "Il faut que, puis parce que : deux conjonctions, deux modes. EN: two conjunctions, two moods." },
  ],
  audio: REC('rec-b1-31-mode-ecoute'),
  say: REFRAME,
  terms: ['mode'],
};

const A10_MODE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-mode',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-mode',
  title: 'Le même verbe, deux modes',
  frSub: 'La conjonction choisit',
  hint: 'Quatre cartes. Regarde le mot avant le verbe, pas le verbe.',
  audio: REC('rec-b1-31-mode'),
  say: REFRAME,
  terms: ['mode', 'conjonction'],
  cards: [
    {
      head: 'Un fait', label: 'parce que',
      fr: fr(E(1351)),
      sub: rsOf(E(1351)),
      body: "Parce que dit une cause réelle : l'indicatif, tu es là. Puisque, comme, si bien que, pendant que font pareil. EN: the cause is real, so the indicative.",
    },
    {
      head: 'Un but', label: 'pour que',
      fr: fr(E(1352)),
      sub: rsOf(E(1352)),
      body: `Même verbe, être, mais pour que choisit le subjonctif : tu sois. C'est ${SUBJ_INF_REF}. EN: same verb, different conjunction, different mood.`,
    },
    {
      head: 'Une concession', label: 'bien que',
      fr: fr(E(1354)),
      sub: rsOf(E(1354)),
      body: `Bien que prend aussi le subjonctif. Tu l'étudieras dans ${CONCESSION_REF}. Ici, retiens seulement : c'est la conjonction qui décide. EN: bien que takes the subjunctive too, see b1.32.`,
    },
    {
      head: 'Deux conjonctions', label: Cap(SUBJ_DECL_REF),
      fr: fr(E(1366)),
      sub: rsOf(E(1366)),
      body: `« ${B115_REFRAME} » Il faut que : subjonctif. Parce que : indicatif. Chaque conjonction décide pour son verbe. EN: each conjunction decides for its own verb.`,
    },
  ],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-trier',
  layer: 'core',
  size: 'lg',
  title: 'Indicatif ou subjonctif',
  groups: [
    grp('Ces conjonctions laissent passer l’indicatif', [
      it(E(1351), 'parce que'),
      it(E(1353), 'puisque'),
      it(E(1356), 'pendant que'),
      it(E(1367), 'puisque, encore'),
    ], chk(
      'Quel mode après parce que, puisque, pendant que ?',
      ["l'indicatif", 'le subjonctif'], 0,
      "L'indicatif : ce sont des faits. EN: the indicative.")),
    grp('Celles-ci demandent le subjonctif', [
      it(E(1352), 'pour que, leçon 16'),
      it(E(1355), 'avant que, leçon 16'),
      it(E(1354), 'bien que, leçon 32'),
      it('fr.b1.famille.060', 'il faut que, puis pendant que'),
    ], chk(
      '« Il faut que tu prennes soin de ta grand-mère pendant qu’elle est malade. » Combien de modes ?',
      ['un seul', 'deux'], 1,
      "Il faut que : subjonctif. Pendant que : indicatif. EN: two conjunctions, two moods.")),
    ctl('Qui décide', '« Je reste parce que tu es là » et « Je reste pour que tu sois moins seul » : qui change le mode ?',
      ['le sujet', 'le verbe être', 'la conjonction'], 2,
      "La conjonction, et elle seule. EN: the conjunction alone."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['mode'],
};

const A10_ORDRE: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-ordre',
  layer: 'core',
  sheetId: 'sheet-texte',
  title: 'Devant ou derrière',
  examples: [
    ex(E(1359), 'la subordonnée d’abord : une virgule.'),
    ex(E(1360), 'la principale d’abord : pas de virgule.'),
    ex(E(1362), 'comme : toujours devant.'),
    ex(E(1363), 'parce que : le plus souvent derrière.'),
    ex(E(1364), 'pendant que, devant : une virgule.'),
    ex(E(1365), 'pendant que, derrière : pas de virgule.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['principale', 'conjonction'],
};

const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'L’ordre et la virgule',
  groups: [
    grp('La subordonnée devant', [
      it(E(1359), 'une virgule après pleuvait'),
      it(E(1362), 'une virgule après retard'),
      it(E(1364), 'une virgule après téléphonais'),
      it(E(1205), 'une virgule après neigeait'),
    ], chk(
      'Quand la subordonnée vient en premier, tu mets...',
      ['une virgule entre les deux', 'un point entre les deux'], 0,
      "Une virgule, et une seule phrase. EN: a comma, one sentence.")),
    grp('La principale devant', [
      it(E(1360), 'pas de virgule'),
      it(E(1363), 'pas de virgule'),
      it(E(1365), 'pas de virgule'),
      it(E(1218), 'pas de virgule'),
    ], chk(
      '« Nous sommes restés parce qu’il pleuvait. » Faut-il une virgule ?',
      ['non', 'oui, après restés'], 0,
      "La principale d'abord : en général, pas de virgule. EN: main clause first, usually no comma.")),
    ctl('Qui reste derrière', 'Lesquels ne commencent jamais la phrase ?',
      ['comme et lorsque', 'si bien que et car', 'puisque et pendant que'], 1,
      "Si bien que suit sa cause ; car ne commence jamais. EN: si bien que and car never go first."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['principale', 'conjonction'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre modes de travers',
  errors: [
    {
      wrong: 'Je reste parce que tu sois là.',
      right: fr(E(1351)),
      why: "Tu viens de travailler le subjonctif, alors il arrive partout. Mais parce que dit un fait : l'indicatif. EN: parce que states a fact.",
    },
    {
      wrong: 'Je reste pour que tu es moins seul.',
      right: fr(E(1352)),
      why: "Tu regardes le verbe, être, qui semble simple. Mais pour que choisit le subjonctif (leçon 16 du B1). EN: pour que picks the subjunctive.",
    },
    {
      wrong: 'Pendant que tu sois là, aide-moi à porter ça.',
      right: fr(E(1356)),
      why: "L'ordre ressemble à une demande, et tu penses au subjonctif. Pendant que dit juste le moment : l'indicatif. EN: pendant que takes the indicative.",
    },
    {
      wrong: 'Comme il pleuvait nous sommes restés.',
      right: 'Comme il pleuvait, nous sommes restés.',
      why: "En anglais, la virgule est souvent libre. En français, une subordonnée en tête est suivie d'une virgule. EN: a fronted clause takes a comma.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['mode', 'principale'],
};

const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Regarde le mot devant le verbe, pas le verbe.', why: "Le mode vient de la conjonction. Parce que, puisque, si bien que, pendant que : indicatif, toujours. EN: look at the conjunction." },
    { hack: "Demande-toi : c'est arrivé, ou c'est voulu ?", why: "Un fait réel prend l'indicatif. Un but, un souhait ou une chose pas encore arrivée (pour que, avant que) prennent le subjonctif. EN: facts take the indicative." },
    { hack: 'La subordonnée devant ? Une virgule.', why: "Comme il pleuvait, nous sommes restés. Derrière, en général, rien. EN: fronted clause, comma." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['mode', 'principale'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le mode', '« Je reste parce que tu ... là. »',
    ['sois', 'es'], 1,
    "Parce que : l'indicatif. EN: indicative."),
  ctl('Qui décide', 'Le mode dépend...',
    ['du verbe', 'du sujet', 'de la conjonction'], 2,
    "De la conjonction. EN: the conjunction."),
  ctl('La virgule', '« Comme il pleuvait ... nous sommes restés. »',
    ['une virgule', 'rien'], 0,
    "Subordonnée devant : une virgule. EN: a comma."),
], ['mode']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: "Le mode et l'ordre",
    opener: {
      line: "Le même verbe, être, et deux modes différents : ici tu vois que c'est le petit mot devant qui décide. EN: The same verb, être, in two different moods: here you see that the small word in front decides.",
      imageRef: 'lessons/subordination/act10.jpg',
    },
    sections: [],
    milestone: "Tu choisis le mode d'après la conjonction, et tu places la subordonnée devant ou derrière, avec la bonne virgule. EN: You pick the mood from the conjunction, and place the subordinate clause before or after, with the right comma.",
    estScreens: 38, restPoints: ['a10-trier', 'a10-choisir'],
  },
  sections: [A10_ECOUTE, A10_MODE, A10_TRIER, A10_ORDRE, A10_CHOISIR, A10_ERREURS, A10_HACKS, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 · EXPLIQUER UN INCIDENT
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le rapport de Karim',
  frSub: 'La forme que tu vas écrire',
  text: INCIDENT_TEXT,
  glossary: [
    { word: 'parc Jarry', en: 'Parc Jarry', note: 'Un grand parc de Montréal.' },
    { word: 'orage', en: 'thunderstorm', note: 'Une tempête avec des éclairs.' },
    { word: 'générateur de secours', en: 'backup generator', note: "Une machine qui donne du courant quand il n'y en a plus." },
    { word: 'tente', en: 'marquee, tent', note: 'Un grand toit de toile, pour un événement.' },
    { word: 'Cordialement', en: 'Kind regards', note: "Une fin de courriel professionnelle." },
  ],
  questions: [
    { q: 'Quelles sont les deux causes du retard ?', a: "L'orage, qui a coupé le courant, et le générateur qui ne démarrait pas. Si bien que, puis comme." },
    { q: 'Quelles conséquences Karim donne-t-il ?', a: "Il a fallu distribuer de l'eau (tellement chaud que), et rembourser la moitié des billets (par conséquent)." },
    { q: 'Quelle bonne nouvelle donne-t-il, et avec quel lien ?', a: "Personne n'a été blessé, grâce aux bénévoles : une cause positive." },
    { q: 'Quel est le but de la dernière phrase ?', a: "Éviter ce problème à l'avenir : pour + infinitif." },
    { q: 'Trouves-tu un subjonctif ?', a: "Non. Toutes les conjonctions du rapport demandent l'indicatif, et le but est dit avec pour + infinitif." },
  ],
  audio: REC('rec-b1-31-incident'),
  say: REFRAME,
  terms: ['incident', 'conjonction'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour ton explication',
  steps: [
    "1. Donne le cadre : quoi, où, quand. EN: set the frame.",
    '2. Donne au moins deux causes, avec deux liens différents : parce que, comme, à cause de, grâce à. EN: two causes, two different links.',
    '3. Donne au moins deux conséquences : si bien que, tellement ... que, par conséquent. EN: two consequences.',
    "4. Termine par le but : pour ou afin de, avec un infinitif. EN: end with the aim, pour or afin de.",
    "5. Relis : un sujet et un verbe après chaque conjonction, l'indicatif, une virgule après une subordonnée en tête. EN: check each clause, the mood and the commas.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['incident', 'mode'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    uc('Tu expliques un retard à ta cheffe', E(1370)),
    uc('Tu annonces une décision à ton équipe', E(1382)),
    uc('Tu écris aux parents après une sortie annulée', E(1389)),
    uc('Tu réponds à un client mécontent', E(1385)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['incident'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au téléphone avec madame Lavoie',
  setting: "Le lundi après le concert. Madame Lavoie t'appelle avant de lire le rapport. Elle veut comprendre, et elle pose des questions précises.",
  turns: [
    {
      ai: "Bonjour. Alors, pourquoi le concert a-t-il commencé en retard ?",
      en: 'Hello. So, why did the concert start late?',
      user: fr(E(1371)),
      userEn: 'The power cut happened because a storm hit the area. (parce que + subject + verb.)',
      alts: [
        { fr: "À cause d'un orage : le courant a été coupé.", en: 'Because of a storm: the power was cut. (à cause de + noun: also right.)' },
        { fr: fr(E(1370)), en: 'The delay is due to a power cut. (être dû à: the formal cause.)' },
      ],
    },
    {
      ai: "Et le générateur de secours ? Il était là pour ça.",
      en: 'And the backup generator? That is what it was there for.',
      user: fr(E(1372)),
      userEn: 'As the generator would not start, we called an electrician. (comme: the cause at the front.)',
      alts: [
        { fr: "Il ne démarrait pas, c'est pourquoi nous avons appelé un électricien.", en: "It would not start, which is why we called an electrician. (c'est pourquoi: also right.)" },
        { fr: "Nous avons appelé un électricien parce que le générateur ne démarrait pas.", en: 'We called an electrician because the generator would not start.' },
      ],
    },
    {
      ai: "Le public a attendu dehors, j'imagine.",
      en: 'The audience waited outside, I imagine.',
      user: fr(E(1373)),
      userEn: 'We opened the doors later, so the queue blocked the street. (si bien que: the result.)',
      alts: [
        { fr: 'Oui, et il y avait tellement de monde que la file a bloqué la rue.', en: 'Yes, and there were so many people that the queue blocked the street. (tellement de ... que: also right.)' },
        { fr: 'Oui, de sorte que la file a bloqué la rue.', en: 'Yes, so the queue blocked the street.' },
      ],
    },
    {
      ai: 'Est-ce que quelqu’un a été blessé ?',
      en: 'Was anyone hurt?',
      user: fr(E(1377)),
      userEn: 'Thanks to the volunteers, nobody was hurt. (grâce à: a positive cause.)',
      alts: [
        { fr: 'Non, personne, grâce aux bénévoles.', en: 'No, nobody, thanks to the volunteers.' },
        { fr: 'Non. Les bénévoles ont tout organisé, si bien que personne n’a été blessé.', en: 'No. The volunteers organised everything, so nobody was hurt.' },
      ],
    },
    {
      ai: "Et pour les billets, vous avez fait quoi ?",
      en: 'And what did you do about the tickets?',
      user: fr(E(1375)),
      userEn: 'Consequently, we refunded some of the tickets. (par conséquent: a new sentence.)',
      alts: [
        { fr: "C'est pour ça qu'on a remboursé une partie des billets.", en: "That's why we refunded some of the tickets. (spoken: fine on the phone.)" },
        { fr: 'Nous avons remboursé la moitié des billets.', en: 'We refunded half the tickets.' },
      ],
    },
    {
      ai: 'Et pour la prochaine fois ?',
      en: 'And for next time?',
      user: fr(E(1376)),
      userEn: 'To avoid another problem, we are going to hire a second generator. (pour + infinitive: the aim.)',
      alts: [
        { fr: 'Afin d’éviter ce problème, nous allons louer un deuxième générateur.', en: 'In order to avoid this problem, we will hire a second generator. (afin de: more written.)' },
        { fr: 'Nous allons louer un deuxième générateur pour être tranquilles.', en: 'We will hire a second generator to be on the safe side.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['incident', 'causenom'],
};

/** THE GRADED TASK. The unit outcome is tested here. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Explique un incident',
  frSub: 'Mission écrite',
  brief: "Au travail, à l'école ou dans une association, quelque chose ne s'est pas passé comme prévu : un retard, une annulation, une panne, une décision difficile. Écris un courriel pour expliquer pourquoi c'est arrivé, ce qui a suivi, et ce que vous allez faire.",
  briefEn: 'At work, at school or in a club, something did not go as planned: a delay, a cancellation, a breakdown, a hard decision. Write an email explaining why it happened, what followed, and what you are going to do.',
  produce: "Écris un texte de 100 à 140 mots avec au moins deux causes (deux liens différents), au moins deux conséquences et un but avec pour ou afin de. Après chaque conjonction, un sujet et un verbe à l'indicatif.",
  responseSpec: { kind: 'text', minWords: 100, maxWords: 140 },
  rubric: {
    criteria: [
      {
        key: 'liens',
        label: 'Des liens variés et justes',
        maxPoints: 4,
        descriptors: [
          '4 : Au moins deux causes et deux conséquences, avec au moins quatre liens différents, chacun au bon endroit : parce que, comme, à cause de, si bien que, par conséquent.',
          '3 : Deux causes et deux conséquences, mais trois liens seulement, ou un lien mal choisi.',
          '2 : Il manque une cause ou une conséquence, ou le même lien revient presque partout.',
          '1 : On ne voit pas ce qui cause quoi.',
        ],
      },
      {
        key: 'mode',
        label: 'La bonne construction',
        maxPoints: 3,
        descriptors: [
          "3 : Un sujet et un verbe après chaque conjonction, un nom après à cause de et grâce à, et l'indicatif partout où la conjonction le demande.",
          '2 : Une ou deux erreurs de construction ou de mode, mais on comprend tout.',
          '1 : Plusieurs parce que de, ou le subjonctif après parce que ou si bien que.',
        ],
      },
      {
        key: 'texte',
        label: 'Un texte qui se lit',
        maxPoints: 3,
        descriptors: [
          "3 : Le cadre d'abord, puis les causes, les conséquences et le but, avec des virgules justes et un début et une fin de courriel.",
          "2 : L'ordre est un peu confus, ou il manque des virgules après une subordonnée en tête.",
          '1 : Une liste de phrases sans ordre.',
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Un cadre (quoi, quand), un but avec pour ou afin de, et entre 100 et 140 mots.',
          '1 : Il manque le cadre ou le but, ou moins de 100 mots.',
        ],
      },
    ],
  },
  scaffold: [
    'Je vous écris pour vous expliquer...',
    'Cet incident a deux causes.',
    "D'abord, ...",
    'Ensuite, comme ...',
    '..., si bien que ...',
    'Par conséquent, ...',
    'Pour éviter ...',
    'Cordialement,',
  ],
  modelAnswer: "Chers parents, je vous écris pour vous expliquer pourquoi la sortie de ski de vendredi a été annulée. Cette décision a deux causes. D'abord, il a plu toute la nuit sur la neige, si bien que les pistes étaient couvertes de verglas. Ensuite, comme le chauffeur de l'autobus était malade, nous n'avions pas de transport. Nous avons donc annulé la sortie à cause du verglas. Les élèves étaient tellement déçus que nous avons organisé des jeux au gymnase. Par conséquent, la journée n'a pas été perdue, et grâce aux parents bénévoles, tout s'est bien passé. Afin de ne pas perdre l'argent de la sortie, nous allons la reporter au mois de février. Merci de votre compréhension. Cordialement, Julie Tremblay",
  modelAnswerEn: "Dear parents, I am writing to explain why Friday's ski trip was cancelled. This decision has two causes. First, it rained all night on the snow, so the slopes were covered in ice. Then, as the bus driver was ill, we had no transport. So we cancelled the trip because of the ice. The pupils were so disappointed that we organised games in the gym. Consequently, the day was not wasted, and thanks to the parent volunteers everything went well. So as not to lose the money for the trip, we are going to postpone it to February. Thank you for your understanding. Kind regards, Julie Tremblay",
  watchFor: [
    {
      pattern: "parce que followed by a bare noun, the calque of because of (parce que de la pluie, parce que la tempête).",
      criterion: 'mode',
      feedback: "Après parce que, un sujet et un verbe : parce qu'il pleuvait. Devant un nom : à cause de la pluie.",
      ref: 'a1-scene',
    },
    {
      pattern: 'car at the head of a sentence, or car used to answer a question.',
      criterion: 'liens',
      feedback: "Car ne commence jamais la phrase. En tête, utilise comme : Comme il pleuvait, ...",
      ref: 'a3-tableau',
    },
    {
      pattern: 'comme of cause placed after the main clause (nous sommes restés comme il pleuvait).',
      criterion: 'liens',
      feedback: "Comme, pour une cause, va au début. À la fin, dis parce que.",
      ref: 'a3-piege',
    },
    {
      pattern: 'grâce à used for a bad result, or à cause de for a good one; missing contraction (à cause de le, grâce à les).',
      criterion: 'liens',
      feedback: "Grâce à pour un bon résultat, à cause de pour un mauvais. Et de + le = du, à + les = aux.",
      ref: 'a4-erreurs',
    },
    {
      pattern: 'si bien que or de sorte que introducing the cause instead of the result, or at the head of the sentence.',
      criterion: 'liens',
      feedback: "Si bien que ouvre le résultat, après la cause : Il a plu, si bien que la rivière a débordé.",
      ref: 'a5-piege',
    },
    {
      pattern: 'Degree + result malformed (tellement du monde, trop ... que, si beaucoup de).',
      criterion: 'mode',
      feedback: "Tellement de monde, tant de travail, si long que. Trop ne prend pas que.",
      ref: 'a6-erreurs',
    },
    {
      pattern: "par conséquent or c'est pourquoi followed by que, or si bien que after a full stop.",
      criterion: 'texte',
      feedback: "Par conséquent et c'est pourquoi ouvrent une nouvelle phrase, sans que. Si bien que reste dans la phrase de la cause.",
      ref: 'a7-piege',
    },
    {
      pattern: 'Purpose with pour que and one subject (pour que nous évitions), or afin que de, or a result written as a purpose.',
      criterion: 'mode',
      feedback: "Un seul sujet : pour ou afin de + infinitif. Pour éviter ce problème...",
      ref: 'a8-erreurs',
    },
    {
      pattern: "A subjunctive after an indicative conjunction (parce que tu sois, pendant qu'il soit, après qu'il soit parti).",
      criterion: 'mode',
      feedback: "Parce que, pendant que, après que : l'indicatif. C'est la conjonction qui choisit le mode.",
      ref: 'a10-erreurs',
    },
    {
      pattern: 'A fronted subordinate clause with no comma before the main clause.',
      criterion: 'texte',
      feedback: "Subordonnée devant : une virgule. Comme le générateur ne démarrait pas, nous avons...",
      ref: 'a10-choisir',
    },
    {
      pattern: 'Fewer than two causes or two consequences, no purpose, no frame, or under 100 words.',
      criterion: 'tache',
      feedback: "Relis la mission : le cadre, deux causes, deux conséquences, un but, entre 100 et 140 mots.",
      ref: 'a11-plan',
    },
  ],
  graderNotes: [
    'The greeting (Chers parents, Madame, Bonjour ...) and the sign-off (Cordialement, name) do NOT count toward the word budget. Count the body only, with 10% tolerance (90 to 154) before criterion « tache » loses its point.',
    '« Different links » means different connectors: parce que, puisque, comme, vu que, étant donné que, à cause de, grâce à, en raison de, être dû à, si bien que, de sorte que, si / tellement / tant ... que, c’est pourquoi, par conséquent, c’est pour ça que. car and donc (b1.30) COUNT as links and are not errors when used correctly.',
    'The purpose may be pour / afin de + infinitive. A correct pour que or afin que + subjunctive (b1.16) is accepted and is NOT required. An incorrect one (pour que + one subject, pour que + indicative) is marked under « mode ».',
    "après que + subjunctive is heard in speech; in this WRITTEN task mark it once under « mode », gently, and quote the indicative form. Do not mark it twice.",
    'Concession (bien que, même si, pourtant, malgré) is b1.32. Do not require it and do not mark a correct one as an error.',
    'Accept regional vocabulary (courriel and email, autobus and bus, char in Québec for a car, septante in Belgium and Switzerland).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['incident', 'conjonction', 'mode'],
};

/** Say the lesson out loud. Every id carries `voiceflash`; the `contraste`
 *  subjunctive rows are left out, so production stays in the indicative. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes causes et tes conséquences à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash') && !r.tags.includes('contraste')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conjonction', 'resultat'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-texte',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la cause, phrase', v: 'parce que, puisque, comme', say: fr(E(1201)),
      detail: { title: 'Une phrase', body: "Un sujet et un verbe après la conjonction. Comme devant. EN: a clause; comme goes first.", say: fr(E(1234)) } },
    { k: 'la cause, nom', v: 'à cause de, grâce à', say: fr(E(1249)),
      detail: { title: 'Un nom', body: "Mauvaise cause, bonne cause. Du, au, des, aux. EN: bad or good cause, with contractions.", say: fr(E(1256)) } },
    { k: 'le résultat', v: 'si bien que, de sorte que', say: fr(E(1267)),
      detail: { title: 'Le résultat', body: "Après la cause, à l'indicatif. EN: after the cause, indicative.", say: fr(E(1269)) } },
    { k: 'le degré', v: 'si, tellement, tant ... que', say: fr(E(1283)),
      detail: { title: 'Trop fort', body: "Tellement de, tant de devant un nom. EN: de before a noun.", say: fr(E(1285)) } },
    { k: 'deux phrases', v: "c'est pourquoi, par conséquent", say: fr(E(1301)),
      detail: { title: 'Les adverbes', body: "Une nouvelle phrase, sans que. EN: a new sentence, no que.", say: fr(E(1304)) } },
    { k: 'le mode', v: 'la conjonction décide', say: fr(E(1351)),
      detail: { title: 'Le mode', body: "Parce que, pendant que, après que : indicatif. Pour que, avant que : subjonctif. EN: the conjunction decides.", say: fr(E(1339)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conjonction', 'mode', 'resultat'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu expliques pourquoi une chose est arrivée et ce qui a suivi : une cause en phrase ou en nom, un résultat dans la même phrase ou dans la suivante, un but, un moment. Et tu sais que la conjonction choisit le mode. Le piège qui reste est le plus rapide : parce que devant un nom, quand tu penses because of. Avant l'examen, relis ton courriel et souligne chaque parce que. Juste après, cherche un verbe. S'il n'y en a pas, écris à cause de. EN: Underline every parce que in your email and look for a verb right after it; if there is none, write à cause de.",
  stats: [
    { k: 'La cause', v: 'parce que, puisque, comme, à cause de' },
    { k: 'Le résultat', v: 'si bien que, tellement ... que' },
    { k: 'Deux phrases', v: "c'est pourquoi, par conséquent" },
    { k: 'Le mode', v: 'la conjonction décide' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight, one per act from act 1 to act 10 plus
 *  an integration round. Each round's target is a distinct errorTrigger.
 *  `fold()` strips accents, commas and apostrophes, so every typed answer
 *  differs from its prompt by a WORD. Options are rotated onto the least
 *  used slot after authoring (spreadSlots, below). */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, alts: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer, ...alts], why, ref });
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
      id: 'r1-systeme', label: 'La principale et la subordonnée', targets: ['parce-que-nom'],
      questions: [
        mc('Tu veux dire : because of the storm.', [WRONG_PARCE_QUE_DE, fr(E(1200)), 'Je suis en retard parce que la tempête.'], 1, "Devant un nom, à cause de. Parce que attend un verbe. EN: a noun takes à cause de.", 'a1-scene'),
        mc("« Je suis en retard parce que le métro était bloqué. » Quelle partie tient seule ?", ['je suis en retard', 'parce que le métro était bloqué'], 0, "La principale : je suis en retard. EN: the main clause.", 'a1-reperer'),
        mc("« J'ai appelé le client pour le prévenir. » Quel est le lien ?", ['la cause', 'le but', 'la conséquence'], 1, "Pour + infinitif : le but. EN: the aim.", 'a1-reperer'),
        mc('Quel mot ouvre une subordonnée ?', ['la tempête', 'parce que', 'le bureau'], 1, "Parce que est une conjonction. EN: a conjunction.", 'a1-systeme'),
        tI('Dis la cause avec un nom : la tempête.', "Je suis en retard parce qu'il y a une tempête.", fr(E(1200)), "Un nom : à cause de la tempête. EN: à cause de + noun.", 'a1-systeme'),
        tI('Relie les deux phrases avec parce que.', 'Je suis en retard. Le métro était bloqué.', fr(E(1201)), "Parce que, puis un sujet et un verbe. EN: parce que + clause.", 'a1-systeme'),
        eS('La réunion a été annulée parce que de la salle inondée.', fr(E(1204)), "Parce que attend un verbe : la salle était inondée. EN: give parce que a verb.", 'a1-scene', ["La réunion a été annulée à cause de la salle inondée."]),
        lC("Écoute. À l'écrit, cette phrase est-elle complète ?", 'Parce que le métro était bloqué.', ['Oui, elle tient seule.', 'Non, il manque la principale.'], 1, "Seule, la subordonnée ne tient pas. EN: the main clause is missing.", 'a1-reperer'),
      ],
    },
    {
      id: 'r2-parce', label: 'Parce que', targets: ['car-pourquoi'],
      questions: [
        mc('« Pourquoi tu pars ? » Quelle réponse est naturelle ?', ['Parce que mon train.', fr(E(1215))], 1, "Même courte, la réponse garde un sujet et un verbe. EN: a subject and a verb, even when short.", 'a2-construire'),
        mc("À l'écrit, où va la cause avec parce que ?", ['après sa principale', 'seule, dans sa propre phrase', 'avant pourquoi'], 0, "Après la principale, dans la même phrase. EN: after the main clause.", 'a2-erreurs'),
        mc("« C'est parce que tu es arrivé tard qu'on a raté le début. » La phrase met en avant...", ['la cause', 'le résultat'], 0, "C'est parce que ... que : la cause. EN: the cause.", 'a2-choisir'),
        mc('« Elle ne vient pas parce que ... »', ['sa maladie', "qu'elle est malade", 'de sa maladie'], 1, "Parce qu'elle est malade : élision, sujet, verbe. EN: a clause, elided.", 'a2-parce'),
        tI('Relie avec parce que.', 'Il reste chez lui. Il est malade.', fr(E(1226)), "Parce qu' devant il. EN: elide before il.", 'a2-construire'),
        tI('Relie avec parce que.', "Je t'appelle. J'ai une question.", fr(E(1222)), "Parce que + j'ai. EN: parce que + clause.", 'a2-parce'),
        eS('Elle a pleuré parce que le film soit triste.', fr(E(1225)), "La cause est un fait : l'indicatif. EN: parce que takes the indicative.", 'a2-erreurs'),
        lC('Écoute. Quel mot donne la cause ?', fr(E(1222)), ['parce que', 'puisque', 'comme'], 0, "Parce que : la raison de l'appel. EN: parce que.", 'a2-parce'),
      ],
    },
    {
      id: 'r3-puisque', label: 'Puisque et comme', targets: ['comme-au-bout'],
      questions: [
        mc('Ton ami sait déjà que tu as une voiture. Tu dis :', ['Parce que tu as une voiture, tu peux nous conduire.', fr(E(1231))], 1, "Une cause connue : puisque. EN: a known cause.", 'a3-causes'),
        mc('Où se met comme, quand il dit la cause ?', ['au début', 'à la fin', 'après car'], 0, "Au début. EN: first.", 'a3-causes'),
        mc('Dans une lettre officielle :', ['vu que', 'étant donné que'], 1, "Étant donné que est soutenu. EN: formal.", 'a3-tableau'),
        mc("« Puisque tu insistes, je viens. » Puisque dit une cause...", ['nouvelle', 'déjà connue'], 1, "Déjà connue. EN: already known.", 'a3-choisir'),
        tI('Commence par comme.', "Nous avons mangé dehors parce qu'il faisait beau.", fr(E(1234)), "Comme, la cause, une virgule. EN: comme first.", 'a3-construire'),
        tI('Mets la cause en tête avec comme.', 'Je suis rentré parce que le magasin était fermé.', fr(E(1235)), "Comme devant. EN: comme first.", 'a3-piege'),
        eS('Nous avons pris un taxi comme il était tard.', fr(E(1247)), "Comme de cause va au début. EN: comme goes first.", 'a3-piege', ["Nous avons pris un taxi parce qu'il était tard."]),
        lC('Écoute. Quel mot entends-tu ?', fr(E(1239)), ['vu que', 'comme', 'car'], 0, "Vu que : un puisque familier. EN: vu que.", 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-nom', label: 'À cause de, grâce à', targets: ['cause-renversee'],
      questions: [
        mc('« Le vol a été retardé ... brouillard. »', ['à cause du', 'parce que le', 'grâce au'], 0, "Un nom, une mauvaise cause : à cause du. EN: à cause du.", 'a4-construire'),
        mc('Un bon résultat :', ["J'ai réussi à cause de ton aide.", fr(E(1251))], 1, "Grâce à pour un bon résultat. EN: grâce à.", 'a4-choisir'),
        tI('Dis la cause avec un nom : la neige.', "La route est fermée parce qu'il neige.", fr(E(1249)), "À cause de la neige. EN: à cause de + noun.", 'a4-nom'),
        tI('Relie avec grâce aux bénévoles, en tête.', 'La fête a été un succès. Les bénévoles ont aidé.', fr(E(1256)), "Grâce à + les = grâce aux. EN: grâce aux.", 'a4-construire'),
        eS('Grâce à la tempête, nous avons perdu une journée.', 'À cause de la tempête, nous avons perdu une journée.', "Une perte : à cause de. EN: a loss takes à cause de.", 'a4-erreurs'),
        eS('La route est fermée parce que de la neige.', fr(E(1249)), "Parce que de n'existe pas. EN: no parce que de.", 'a4-erreurs', ["La route est fermée parce qu'il neige."]),
        lC('Écoute. La cause est-elle bonne ou mauvaise ?', fr(E(1261)), ['bonne', 'mauvaise'], 0, "Grâce à : une bonne cause. EN: good.", 'a4-choisir'),
        lC('Écoute. Quelle expression entends-tu ?', fr(E(1266)), ['en raison de', 'à cause de', 'grâce à'], 0, "En raison de : à cause de, en officiel. EN: formal.", 'a4-bulletin'),
      ],
    },
    {
      id: 'r5-resultat', label: 'Le résultat', targets: ['resultat-envers'],
      questions: [
        mc('Après si bien que, tu trouves...', ['la cause', 'le résultat'], 1, "Le résultat. EN: the result.", 'a5-resultat'),
        mc('« Le train était complet, ... nous avons pris le bus. »', ['parce que', 'si bien que', 'puisque'], 1, "Le bus est le résultat. EN: the result.", 'a5-choisir'),
        mc('« La salle était trop petite, de sorte que certains ... restés debout. »', ['soient', 'sont'], 1, "Un fait : l'indicatif. EN: indicative.", 'a5-piege'),
        tI('Relie avec si bien que.', 'Il a plu toute la nuit. La rivière a débordé.', fr(E(1267)), "Cause, virgule, si bien que, résultat. EN: cause, then result.", 'a5-construire'),
        tI('Relie avec de sorte que.', "J'ai oublié mon badge. Je n'ai pas pu entrer.", fr(E(1269)), "De sorte que + indicatif. EN: indicative.", 'a5-construire'),
        eS("La rivière a débordé, si bien qu'il a plu toute la nuit.", fr(E(1267)), "La pluie est la cause : elle vient d'abord. EN: cause first.", 'a5-piege', ["La rivière a débordé parce qu'il a plu toute la nuit."]),
        lC('Écoute. Quel est le résultat ?', fr(E(1276)), ["il a raté l'avion", "il n'a pas entendu son réveil"], 0, "Après si bien que : il a raté l'avion. EN: he missed the plane.", 'a5-choisir'),
        lC('Écoute. Quel lien entends-tu ?', fr(E(1280)), ['de sorte que', 'parce que', 'car'], 0, "De sorte que : le résultat. EN: the result.", 'a5-resultat'),
      ],
    },
    {
      id: 'r6-degre', label: 'Tellement, si, tant', targets: ['degre-sans-que'],
      questions: [
        mc('« Il y avait ... monde que nous sommes partis. »', ['tellement du', 'tellement de', 'si'], 1, "Tellement de + nom. EN: tellement de.", 'a6-construire'),
        mc('« La soupe était ... chaude que je me suis brûlé. »', ['si', 'tant', 'tant de'], 0, "Devant un adjectif : si. EN: si.", 'a6-degre'),
        tI('Relie avec tellement ... que.', 'Il faisait très froid. Le lac a gelé.', fr(E(1283)), "Tellement froid que. EN: tellement + adjective.", 'a6-construire'),
        tI('Relie avec tant de ... que.', "J'ai beaucoup de travail. Je ne dors plus.", fr(E(1286)), "Tant de travail que. EN: tant de + noun.", 'a6-tableau'),
        eS("La file était trop longue qu'on a abandonné.", fr(E(1296)), "Trop ne prend pas que : si longue que. EN: si, not trop.", 'a6-erreurs', ["La file était tellement longue qu'on a abandonné."]),
        eS('Nous avons marché tant que nous avions mal aux pieds.', fr(E(1290)), "Tant va entre avons et marché. EN: tant before the participle.", 'a6-erreurs'),
        lC('Écoute. Qu’est-ce qui était trop ?', fr(E(1287)), ['elle parle trop vite', 'elle parle trop fort'], 0, "Si vite que. EN: too fast.", 'a6-ecoute'),
        lC('Écoute. Le mot devant que est suivi de...', fr(E(1291)), ['un nom', 'un adjectif', 'un verbe'], 0, "Tant de bruit : un nom. EN: a noun.", 'a6-tableau'),
      ],
    },
    {
      id: 'r7-adverbes', label: "C'est pourquoi, par conséquent", targets: ['adverbe-colle'],
      questions: [
        mc('« Le pont est fermé. ... nous passons par Lévis. »', ["C'est pourquoi", 'Si bien que', 'Parce que'], 0, "Après un point : c'est pourquoi. EN: after a full stop.", 'a7-adverbes'),
        mc('Lequel prend que ?', ["c'est pourquoi", "c'est pour ça"], 1, "C'est pour ça que. EN: c'est pour ça que.", 'a7-adverbes'),
        mc('Le plus soutenu :', ["c'est pour ça que", 'par conséquent', 'vu que'], 1, "Par conséquent. EN: the most formal.", 'a7-construire'),
        mc("« Il neigeait, c'est pourquoi le vol ... annulé. »", ['a été', 'ait été'], 0, "Pas de changement de mode. EN: no mood change.", 'a7-choisir'),
        tI('Relie les deux phrases avec par conséquent.', 'Le bureau sera fermé lundi. La réunion est reportée.', fr(E(1304)), "Par conséquent, virgule. EN: a comma after it.", 'a7-construire'),
        tI("Relie avec c'est pourquoi, après une virgule.", "La route était glacée. J'ai pris le train.", fr(E(1309)), "C'est pourquoi, sans que. EN: no que.", 'a7-piege'),
        eS("La route était glacée, c'est pourquoi que j'ai pris le train.", fr(E(1309)), "C'est pourquoi ne prend pas que. EN: no que.", 'a7-piege', ["La route était glacée, c'est pour ça que j'ai pris le train."]),
        lC("Écoute. C'est à l'oral ou dans un avis ?", fr(E(1314)), ["à l'oral", 'dans un avis officiel'], 0, "C'est pour ça que : oral. EN: spoken.", 'a7-choisir'),
      ],
    },
    {
      id: 'r8-but', label: 'Le but', targets: ['but-resultat'],
      questions: [
        mc('« Nous partons tôt ... éviter les bouchons. »', ['pour que', 'pour', 'si bien que'], 1, "Un seul sujet : pour. EN: pour.", 'a8-construire'),
        mc('Lequel dit un résultat ?', ['pour que', 'afin de', 'si bien que'], 2, "Si bien que. EN: si bien que.", 'a8-choisir'),
        mc('« Elle a parlé fort, de sorte que tout le monde ... entendue. »', ["l'ait", "l'a"], 1, "C'est arrivé : l'a. EN: indicative.", 'a8-choisir'),
        tI('Dis le but avec afin de.', 'Elle économise. Elle veut acheter une maison.', fr(E(1319)), "Afin de + infinitif. EN: afin de.", 'a8-rappel'),
        tI('Dis le but avec pour.', "J'ai ouvert la fenêtre. Je voulais aérer la pièce.", fr(E(1324)), "Pour aérer. EN: pour + infinitive.", 'a8-construire'),
        eS('Nous partons tôt pour que nous évitions les bouchons.', fr(E(1318)), "Un seul sujet : pour + infinitif (leçon 16). EN: one subject.", 'a8-erreurs'),
        lC('Écoute. But ou résultat ?', fr(E(1331)), ['un résultat', 'un but'], 0, "L'a entendue : c'est arrivé. EN: a result.", 'a8-exemples'),
        lC('Écoute. Combien de sujets ?', fr(E(1321)), ['un', 'deux'], 1, "Je, puis tout le monde : pour que. EN: two.", 'a8-rappel'),
      ],
    },
    {
      id: 'r9-temps', label: 'Le temps', targets: ['temps-subjonctif'],
      questions: [
        mc('« ... tu cuisines, je mets la table. »', ['Pendant que', 'Depuis que', 'Après que'], 0, "En même temps : pendant que. EN: while.", 'a9-temps'),
        mc("À l'écrit : « Après qu'il ... parti, nous avons fermé. »", ['soit', 'est'], 1, "Après que + indicatif. EN: indicative.", 'a9-temps'),
        mc("Dans un rapport, le quand de l'écrit :", ['lorsque', 'pendant', 'depuis'], 0, "Lorsque. EN: lorsque.", 'a9-tableau'),
        tI('Relie avec depuis que.', "J'habite à Montréal. Depuis, je fais du vélo.", fr(E(1335)), "Depuis que + le début. EN: depuis que.", 'a9-construire'),
        tI('Écris-le avec lorsque.', 'Quand le train est arrivé, nous sommes montés.', fr(E(1337)), "Lorsque = quand, à l'écrit. EN: lorsque.", 'a9-tableau'),
        eS("Après qu'il soit parti, nous avons fermé le bureau.", fr(E(1339)), "À l'écrit, après que + indicatif. EN: write the indicative.", 'a9-piege'),
        lC('Écoute. Les deux actions sont-elles en même temps ?', fr(E(1344)), ['oui', 'non'], 0, "Pendant que. EN: yes.", 'a9-ecoute'),
        lC('Écoute. La situation dure-t-elle encore ?', fr(E(1345)), ['oui', 'non'], 0, "Depuis que ... est. EN: yes.", 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-mode', label: 'Le mode et l’ordre', targets: ['mode-par-verbe'],
      questions: [
        mc('Laquelle demande le subjonctif ?', ['parce que', 'pour que', 'puisque'], 1, "Pour que (leçon 16 du B1). EN: pour que.", 'a10-mode'),
        mc('« Je reste parce que tu ... là. »', ['sois', 'es'], 1, "Parce que : indicatif. EN: indicative.", 'a10-trier'),
        tI('Mets la cause en tête, avec une virgule.', "Nous sommes restés parce qu'il pleuvait.", fr(E(1359)), "Subordonnée devant, virgule. EN: fronted clause, comma.", 'a10-ordre'),
        tI('Mets la cause en tête avec comme.', "J'ai pris un taxi parce que le train avait du retard.", fr(E(1362)), "Comme devant. EN: comme first.", 'a10-ordre'),
        eS('Je reste parce que tu sois là.', fr(E(1351)), "Parce que : l'indicatif. EN: indicative.", 'a10-erreurs'),
        eS('Pendant que tu sois là, aide-moi à porter ça.', fr(E(1356)), "Pendant que : l'indicatif. EN: indicative.", 'a10-erreurs'),
        mc('Le mode dépend...', ['du verbe', 'de la conjonction'], 1, "De la conjonction. EN: the conjunction.", 'a10-mode'),
        lC('Écoute. Après la conjonction, le verbe est...', fr(E(1352)), ['au subjonctif', "à l'indicatif"], 0, "Pour que tu sois. EN: subjunctive.", 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-incident', label: "L'incident", targets: ['incident-plat'],
      questions: [
        mc("Dans une explication d'incident, qu'écris-tu d'abord ?", ["ce qui s'est passé", 'le but pour la suite', 'les remerciements'], 0, "Le cadre d'abord. EN: the frame first.", 'a11-plan'),
        mc('« ... le générateur ne démarrait pas, nous avons appelé un électricien. »', ['Comme', 'Car', 'Si bien que'], 0, "La cause en tête : comme. EN: comme.", 'a11-scenario'),
        mc("« Il faisait ... chaud dans la salle que nous avons distribué de l'eau. »", ['tellement', 'tellement de', 'tant de'], 0, "Devant un adjectif : tellement. EN: tellement.", 'a11-cheat'),
        tI('Dis le but avec pour.', 'Nous allons louer un deuxième générateur. Nous voulons éviter un nouveau problème.', fr(E(1376)), "Pour + infinitif, en tête. EN: pour first.", 'a11-lecture'),
        tI('Relie avec si bien que.', 'Nous avons ouvert les portes plus tard. La file a bloqué la rue.', fr(E(1373)), "Cause, si bien que, résultat. EN: result.", 'a11-lecture'),
        eS("Le retard est à cause d'une panne de courant.", fr(E(1370)), "Avec être, dis dû à : le retard est dû à une panne. EN: être dû à.", 'a11-lecture', ["Le retard est causé par une panne de courant."]),
        lC('Écoute. Quelle est la cause ?', fr(E(1371)), ['un orage a touché le quartier', 'la panne a eu lieu'], 0, "Après parce que : l'orage. EN: the storm.", 'a11-lecture'),
        lC('Écoute. Que dit cette phrase ?', fr(E(1375)), ['une conséquence', 'une cause'], 0, "Par conséquent : une conséquence. EN: a consequence.", 'a11-cheat'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule (no slot above 40%) is checked on AUTHORED order,
 *  although LessonRich reshuffles options on every attempt. After
 *  authoring, each closed question's options are ROTATED, with `correct`
 *  moved in step, onto the least used slot so far. The option set and the
 *  right answer are unchanged. No `why` in this quiz names a position. */
function spreadSlots(quiz: Sec<'quiz'>): void {
  const used = [0, 0, 0, 0];
  for (const r of quiz.rounds ?? []) {
    for (const q of r.questions as (QQ & { opts?: string[]; correct?: number })[]) {
      if (!Array.isArray(q.opts) || typeof q.correct !== 'number') continue;
      const n = q.opts.length;
      let target = 0;
      for (let k = 1; k < n; k++) if (used[k] < used[target]) target = k;
      const shift = (target - q.correct + n) % n;
      const old = q.opts;
      q.opts = old.map((_, i) => old[(i - shift + n) % n]);
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
    { front: 'la cause, avec une phrase', back: 'parce que + sujet + verbe', say: fr(E(1201)) },
    { front: 'une cause déjà connue', back: 'puisque', say: fr(E(1231)) },
    { front: 'la cause en tête', back: 'comme, puis une virgule', say: fr(E(1234)) },
    { front: 'la cause, avec un nom', back: 'à cause de, grâce à', say: fr(E(1249)) },
    { front: 'le résultat', back: 'si bien que, de sorte que', say: fr(E(1267)) },
    { front: 'trop fort, donc', back: 'si, tellement, tant ... que', say: fr(E(1283)) },
    { front: 'deux phrases', back: "c'est pourquoi, par conséquent", say: fr(E(1301)) },
    { front: 'le but', back: 'pour, afin de + infinitif', say: fr(E(1318)) },
    { front: 'qui choisit le mode', back: 'la conjonction', say: fr(E(1351)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'La subordination, en résumé',
  body: `${REFRAME} Tu ne dis plus seulement parce que : tu dis une cause connue, une cause en tête, une cause en un nom, un résultat, un but, un moment. La prochaine leçon, ${CONCESSION_REF}, ajoute le lien qui résiste : bien que, même si, pourtant, malgré. EN: Next lesson: concession, the link that pushes back.`,
  points: [
    'Parce que attend un sujet et un verbe ; devant un nom, à cause de.',
    'Comme ouvre la phrase ; si bien que suit sa cause.',
    "C'est pourquoi et par conséquent relient deux phrases.",
    'La conjonction choisit le mode : parce que, indicatif ; pour que, subjonctif.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conjonction', 'mode', 'causenom'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Expliquer un incident',
    opener: {
      line: "Un orage, une panne, une heure de retard : ici tu écris toi-même pourquoi c'est arrivé et ce qui a suivi. EN: A storm, a power cut, an hour's delay: here you write yourself why it happened and what followed.",
      imageRef: 'lessons/subordination/act11.jpg',
    },
    sections: [],
    milestone: "Tu as expliqué un incident avec ses causes, ses conséquences et un but, et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You explained an incident with its causes, results and an aim, and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 125,
    restPoints: ['a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-puisque', 'a11-quiz/r6-degre', 'a11-quiz/r9-temps'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here. Every sheet is
 *  reachable from a mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-cause', 'Dire la cause', ['la principale et la subordonnée', 'parce que, puisque, comme', 'à cause de, grâce à'], [
    teach('sheet-cause-systeme', 'Une phrase qui tient, une phrase qui s’appuie',
      `${REFRAME} La principale tient seule. La subordonnée commence par une conjonction et s'appuie sur elle. ${Cap(INTERROGATIFS_REF)} t'a donné parce que comme réponse à pourquoi ; à l'écrit, il suit sa principale. EN: the main clause stands alone; the conjunction opens the subordinate clause.`),
    table('sheet-cause-mots', 'Les mots de la cause', ['Mot', 'Place', 'Registre', 'Exemple'], [
      ['parce que', 'surtout après', 'partout', "Je prends un taxi parce qu'il pleut."],
      ['car (leçon 30 du B1)', 'toujours après', 'écrit', 'Le vol est annulé, car le pilote est malade.'],
      ['puisque', 'avant ou après', 'partout', 'Puisque tu as une voiture, tu peux nous conduire.'],
      ['comme', 'toujours avant', 'partout', 'Comme il faisait beau, nous avons mangé dehors.'],
      ['vu que', 'avant ou après', 'oral', 'Vu que le train est en retard, on prend un café.'],
      ['étant donné que', 'surtout avant', 'soutenu', 'Étant donné que les prix augmentent, nous changeons de fournisseur.'],
    ]),
    table('sheet-cause-nom', 'Une phrase ou un nom', ['Construction', 'Suivie de', 'Exemple'], [
      ['parce que', 'sujet + verbe', "Je suis en retard parce qu'il neige."],
      ['à cause de', 'un nom, cause mauvaise', 'Je suis en retard à cause de la neige.'],
      ['grâce à', 'un nom, cause bonne', "J'ai réussi grâce à ton aide."],
      ['en raison de', 'un nom, langue officielle', 'Le musée est fermé en raison des travaux.'],
      ['être dû à', 'un nom, langue écrite', 'Le retard est dû à une panne de courant.'],
      ['de + le, de + les', 'du, des', 'à cause du brouillard, à cause des travaux'],
      ['à + le, à + les', 'au, aux', 'grâce au GPS, grâce aux bénévoles'],
    ]),
  ]),
  sheet('sheet-consequence', 'Dire la conséquence', ['si bien que, de sorte que', 'si, tellement, tant', "c'est pourquoi, par conséquent"], [
    teach('sheet-consequence-teach', 'Dans la même phrase, ou dans la suivante',
      "Si bien que et de sorte que ouvrent le résultat dans la même phrase, après la cause et une virgule, à l'indicatif. C'est pourquoi et par conséquent ouvrent une nouvelle phrase : ce ne sont pas des conjonctions, ils ne choisissent aucun mode. EN: conjunctions build one sentence; the adverbs start a new one."),
    table('sheet-consequence-degre', 'Le degré, puis que', ['Forme', 'Devant', 'Exemple'], [
      ['si ... que', 'adjectif, adverbe', 'La soupe était si chaude que je me suis brûlé.'],
      ['tellement ... que', 'adjectif, adverbe', 'Il faisait tellement froid que le lac a gelé.'],
      ['verbe + tellement que', 'après le verbe', 'Il a tellement plu que le match a été annulé.'],
      ['verbe + tant que', 'après le verbe', 'Nous avons tant marché que nous avions mal aux pieds.'],
      ['tellement de ... que', 'un nom', 'Il y avait tellement de monde que nous sommes partis.'],
      ['tant de ... que', 'un nom', "J'ai tant de travail que je ne dors plus."],
    ]),
    table('sheet-consequence-registre', 'Du familier au soutenu', ['Lien', 'Registre', 'Exemple'], [
      ["c'est pour ça que", 'oral', "C'est pour ça que je n'ai pas appelé."],
      ['donc (leçon 30 du B1)', 'partout', 'Le pont était fermé, donc nous avons fait un détour.'],
      ['si bien que', 'partout', 'Le train était complet, si bien que nous avons pris le bus.'],
      ["c'est pourquoi", 'partout, plutôt écrit', "Le pont est fermé. C'est pourquoi nous passons par Lévis."],
      ['de sorte que', 'écrit', "J'ai oublié mon badge, de sorte que je n'ai pas pu entrer."],
      ['par conséquent', 'soutenu', 'Le bureau sera fermé lundi. Par conséquent, la réunion est reportée.'],
    ]),
  ]),
  sheet('sheet-mode', 'La conjonction et le mode', ['quel mode après quelle conjonction', 'le but et le résultat'], [
    teach('sheet-mode-teach', 'Ce n’est pas le verbe qui décide',
      `${REFRAME} ${Cap(SUBJ_DECL_REF)} l'a dit pour le subjonctif : « ${B115_REFRAME} » Ici, c'est la même idée pour la cause, le résultat et le temps. EN: the conjunction decides the mood, not the verb.`),
    table('sheet-mode-table', 'Quel mode après quelle conjonction', ['Conjonction', 'Lien', 'Mode'], [
      ['parce que, puisque, comme', 'cause', 'indicatif'],
      ['vu que, étant donné que', 'cause', 'indicatif'],
      ['si bien que, de sorte que (résultat)', 'conséquence', 'indicatif'],
      ['si, tellement, tant ... que', 'conséquence', 'indicatif'],
      ['pendant que, depuis que, lorsque', 'temps', 'indicatif'],
      ['après que', 'temps', 'indicatif (le subjonctif s’entend à l’oral)'],
      ['pour que, afin que (leçon 16 du B1)', 'but', 'subjonctif'],
      ['avant que (leçon 16 du B1)', 'temps', 'subjonctif'],
      ['bien que (leçon 32 du B1)', 'concession', 'subjonctif'],
    ]),
    teach('sheet-mode-but', 'Le but ou le résultat',
      `Le but regarde devant : pour ou afin de + infinitif avec un seul sujet, pour que + subjonctif avec deux. ${Cap(SUBJ_INF_REF)} : « ${B116_REFRAME} » Le résultat est déjà arrivé : si bien que + indicatif. De sorte que + subjonctif dit un but : à reconnaître. EN: an aim looks ahead; a result has happened.`),
  ]),
  sheet('sheet-temps', 'Le temps', ['pendant que, depuis que', 'lorsque', 'après que'], [
    teach('sheet-temps-teach', 'Quand, et les autres',
      `Quand et dès que avec le futur sont dans ${FUTUR_USAGE_REF}. Pendant que et la coupure au passé sont dans ${PC_IMPARFAIT_REF}. Ici : pendant que pour deux choses en même temps, depuis que pour un début qui dure, lorsque pour le quand écrit, après que pour un fait déjà arrivé. EN: four time links, all in the indicative.`),
    table('sheet-temps-table', 'Les liens de temps', ['Lien', 'Sens', 'Exemple'], [
      ['pendant que', 'en même temps', 'Pendant que tu cuisines, je mets la table.'],
      ['pendant + nom', 'durant', "Pendant les vacances, j'ai lu trois livres."],
      ['depuis que', 'à partir d’un début', "Depuis que j'habite à Montréal, je fais du vélo."],
      ['lorsque', 'quand, à l’écrit', 'Lorsque le train est arrivé, nous sommes montés.'],
      ['après que + indicatif', 'une fois que', "Après qu'il est parti, nous avons fermé le bureau."],
      ['avant que + subjonctif', 'plus tôt que (leçon 16 du B1)', 'Avant que le client arrive, range la salle.'],
    ]),
    teach('sheet-temps-apres', 'Après que, à l’oral',
      "La règle écrite est claire : après que + indicatif, parce que l'action a eu lieu. À l'oral, beaucoup de francophones disent « après qu'il soit parti », sous l'influence d'avant que. Reconnais-le, et à l'écrit, garde l'indicatif. EN: in speech you will hear the subjunctive; write the indicative."),
  ]),
  sheet('sheet-texte', 'Écrire une explication', ["l'ordre et la virgule", 'la liste de contrôle', 'les formules'], [
    teach('sheet-texte-ordre', "L'ordre et la virgule",
      "Subordonnée devant : une virgule. Principale devant : en général, pas de virgule. Comme de cause va toujours devant ; si bien que, de sorte que et car restent derrière. C'est pourquoi et par conséquent ouvrent une nouvelle phrase. EN: fronted clause, comma; comme first, si bien que after."),
    table('sheet-texte-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Chaque parce que a un verbe', 'sinon, à cause de + nom'],
      ['Deux causes, deux liens', 'parce que, comme, à cause de, grâce à'],
      ['Deux conséquences', 'si bien que, tellement ... que, par conséquent'],
      ['Un but', 'pour, afin de + infinitif'],
      ["L'indicatif", 'après parce que, si bien que, pendant que, après que'],
      ['Les virgules', 'après une subordonnée en tête, après par conséquent'],
    ]),
    table('sheet-texte-formules', "Les formules d'une explication", ['Formule', 'Exemple'], [
      ['je vous écris pour vous expliquer', "Je vous écris pour vous expliquer ce qui s'est passé."],
      ['cet incident a deux causes', 'Cet incident a deux causes.'],
      ['le retard est dû à', 'Le retard est dû à une panne de courant.'],
      ["c'est pourquoi nous avons décidé de", "C'est pourquoi nous avons décidé de changer de fournisseur."],
      ['afin de', 'Afin de rassurer le public, nous avons publié un message.'],
      ['nous regrettons ce retard', 'Nous regrettons ce retard et vous remercions de votre patience.'],
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
  { id: 'd-phrase-nom', title: 'Une phrase ou un nom', format: 'sort' as const, coach: "Deux piles : après le lien, une phrase avec un verbe, ou un nom seul. EN: sort by what follows the link.", buckets: ['parce que + phrase', 'à cause de + nom'], items: [E(1201), E(1200), E(1264), E(1249), E(1218), E(1253)], audio: AUDIO },
  { id: 'd-parce', title: 'Parce que, puis une phrase', format: 'mcq' as const, coach: "Parce que répond à pourquoi, et il attend un sujet et un verbe. EN: parce que answers pourquoi and needs a subject and a verb.", q: '« Pourquoi tu pars ? » « Parce que ... »', opts: ['mon train part à huit heures', 'mon train'], correct: 0, why: "Un sujet et un verbe : mon train part. EN: a clause, not a noun.", items: [E(1215), E(1216), E(1217), E(1222), E(1218), E(1224)], audio: AUDIO },
  { id: 'd-comme', title: 'Comme devant', format: 'mcq' as const, coach: "Comme de cause ouvre la phrase ; puisque rappelle ce qu'on sait. EN: comme first; puisque for known causes.", q: '... il faisait beau, nous avons mangé dehors.', opts: ['Car', 'Comme'], correct: 1, why: "Comme, en tête. EN: comme first.", items: [E(1231), E(1233), E(1234), E(1235), E(1242), E(1247)], audio: AUDIO },
  { id: 'd-cause-nom', title: 'Bonne ou mauvaise cause', format: 'sort' as const, coach: "Deux piles : grâce à pour un bon résultat, à cause de pour un mauvais. EN: good or bad cause.", buckets: ['grâce à', 'à cause de'], items: [E(1251), E(1250), E(1256), E(1253), E(1261), E(1259)], audio: AUDIO },
  { id: 'd-resultat', title: 'La cause, puis le résultat', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute : la cause, une virgule, si bien que, le résultat. EN: read each aloud in order.", items: [E(1267), E(1268), E(1269), E(1270), E(1275), E(1276)], audio: AUDIO },
  { id: 'd-degre', title: 'Tellement, puis que', format: 'mcq' as const, coach: "Si ou tellement devant un adjectif, tellement de devant un nom, puis que. EN: the degree word, then que.", q: 'Il y avait ... monde que nous sommes partis.', opts: ['tellement du', 'tellement de', 'trop'], correct: 1, why: "Tellement de. EN: tellement de.", items: [E(1283), E(1284), E(1285), E(1286), E(1288), E(1290)], audio: AUDIO },
  { id: 'd-adverbe', title: 'Une nouvelle phrase', format: 'mcq' as const, coach: "Après un point : c'est pourquoi, par conséquent. Jamais de que après eux. EN: no que after them.", q: 'Le pont est fermé. ... nous passons par Lévis.', opts: ["C'est pourquoi", 'Si bien que', "C'est pourquoi que"], correct: 0, why: "C'est pourquoi, seul. EN: c'est pourquoi.", items: [E(1301), E(1302), E(1304), E(1306), E(1309), E(1314)], audio: AUDIO },
  { id: 'd-but', title: 'Le but ou le résultat', format: 'sort' as const, coach: "Deux piles : ce qu'on cherche, et ce qui est arrivé. EN: aim or result.", buckets: ['le but', 'le résultat'], items: [E(1318), E(1267), E(1319), E(1331), E(1324), E(1268)], audio: AUDIO },
  { id: 'd-temps', title: 'Le temps, à l’indicatif', format: 'mcq' as const, coach: "Pendant que, depuis que, lorsque, après que : l'indicatif. EN: all four take the indicative.", q: "Après qu'il ... parti, nous avons fermé.", opts: ['soit', 'est'], correct: 1, why: "Est. EN: est.", items: [E(1333), E(1335), E(1337), E(1339), E(1340), E(1350)], audio: AUDIO },
  { id: 'd-mode', title: 'La conjonction décide', format: 'sort' as const, coach: "Deux piles : l'indicatif, le subjonctif. Regarde la conjonction, pas le verbe. EN: sort by the conjunction.", buckets: ["l'indicatif", 'le subjonctif'], items: [E(1351), E(1352), E(1356), E(1355), E(1353), E(1354)], audio: AUDIO },
  { id: 'd-incident', title: 'Une explication complète', format: 'flashcard' as const, coach: "Lis chaque phrase et dis si c'est une cause, une conséquence ou un but. EN: say what each one is.", items: [E(1371), E(1372), E(1373), E(1375), E(1376), E(1377)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'parce-que-nom', description: 'Puts parce que in front of a bare noun (parce que de la tempête), translating because of word for word, so the subordinate clause has no verb.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-phrase-nom', retest: 'd-phrase-nom' },
  { id: 'car-pourquoi', description: 'Answers pourquoi with parce que and a bare noun, cuts the written cause off from its main clause, or skips the elision in parce qu’il.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-parce', retest: 'd-parce' },
  { id: 'comme-au-bout', description: 'Puts comme of cause at the end of the sentence, or uses puisque to announce news the listener does not have.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-comme', retest: 'd-comme' },
  { id: 'cause-renversee', description: 'Uses grâce à for a bad result or à cause de for a good one, or leaves de le and à les uncontracted.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-cause-nom', retest: 'd-cause-nom' },
  { id: 'resultat-envers', description: 'Introduces the cause with si bien que or de sorte que, puts them at the head of the sentence, or follows them with a subjunctive.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-resultat', retest: 'd-resultat' },
  { id: 'degre-sans-que', description: 'Builds the degree-and-result pattern with trop, du after tellement, si beaucoup, or no que at all.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-degre', retest: 'd-degre' },
  { id: 'adverbe-colle', description: "Treats c'est pourquoi and par conséquent as conjunctions: adds que after them, or starts a new sentence with si bien que.", detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-adverbe', retest: 'd-adverbe' },
  { id: 'but-resultat', description: 'Uses pour que with a single subject, mixes afin que and afin de, or writes a result as if it were an aim.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-but', retest: 'd-but' },
  { id: 'temps-subjonctif', description: "Puts a subjunctive after après que or pendant que in writing, uses pendant que before a noun, or the past after depuis que for something still true.", detectOn: ['a9-construire', 'a9-piege', 'a9-check', 'a11-mission'], drill: 'd-temps', retest: 'd-temps' },
  { id: 'mode-par-verbe', description: 'Chooses the mood from the verb or from a feeling of formality instead of from the conjunction, or forgets the comma after a fronted clause.', detectOn: ['a10-trier', 'a10-erreurs', 'a10-check', 'a11-mission'], drill: 'd-mode', retest: 'd-mode' },
  { id: 'incident-plat', description: 'Writes an explanation as a list of short sentences joined by the same parce que, with no consequence and no aim, so the reader cannot follow what caused what.', detectOn: ['a11-lecture', 'a11-cheat', 'a11-mission'], drill: 'd-incident', retest: 'd-incident' },
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-31-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-31-rapport': "Karim's email (act 1), ONE VOICE, one take, a young Montréal man reading his own email aloud to his boss: clear, a little apologetic, never dramatic. Every link word (parce que, comme, pendant que, à cause de, si bien que, grâce aux, c'est pourquoi, pour) is audible and unstressed; the elision in « pendant qu'il » is kept.",
  'rec-b1-31-systeme': "The four system cards. Card one (« Le métro était bloqué ») is read as a complete, falling sentence; card two with a slight rise before « parce que » and the fall at the end, so the learner hears the join. Card four is read at the same pace as card one.",
  'rec-b1-31-sophie': "The Lausanne evening (act 2), two voices: Sophie, a Swiss Romande woman in her thirties, teasing and curious, and the learner, relaxed. The learner's three answers each start with or contain « parce que »; it is said quickly, /paʁs kə/, never /paʁ.sə.kə/.",
  'rec-b1-31-parce': "The four parce que cards, one voice. On card three, « parce qu'il » runs as one group /paʁs kil/. Card four is a cause in the past: read « était » plainly, with no stress on the tense.",
  'rec-b1-31-puisque-ecoute': "REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. « puisque » lines carry the slight « as you well know » tone of a shared fact; « comme » lines put the cause first with a clear comma pause. Line eight (« Vu que ») is casual.",
  'rec-b1-31-causes': "The four cause cards. Cards three and four (vu que, étant donné que) are recognition: read them at the same pace as the others, card three casual, card four formal.",
  'rec-b1-31-piege-comme': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-31-bulletin': "The radio bulletin (act 4), ONE VOICE, one take, a Québécois radio newsreader: brisk, neutral, the rhythm of a seven o'clock bulletin. « à cause du verglas », « en raison des pannes » and « grâce aux équipes » each read as ordinary groups.",
  'rec-b1-31-nom': "The four noun-cause cards. On card three, « à cause du » and « grâce au » are said as contractions, never « de le ». Card four holds the clause version: let « parce qu'il neige » run as one group.",
  'rec-b1-31-moussa': "The video call with Dakar (act 5), two voices: Moussa, a Senegalese supplier in his forties, patient and a little tired, and the learner. Moussa's three lines each end on « si bien que » or « de sorte que » and a result; the link word is unstressed and the result carries the fall.",
  'rec-b1-31-resultat': "The four result cards, one voice. Card four is a seed row with donc; read it with the same melody as card one so the learner hears one link, two words.",
  'rec-b1-31-piege-resultat': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-31-degre-ecoute': "REQUIRED FOR THE EAR MISSION (act 6): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. « si », « tellement » and « tant » carry the natural emphasis a speaker gives them; « que » is never stressed. Line five (« si vite ») is read at an ordinary pace, not fast.",
  'rec-b1-31-degre': "The four degree cards. On card three, « a tellement plu » is one group with no pause between tellement and plu.",
  'rec-b1-31-avis': "The notice to tenants (act 7), ONE VOICE, one take, Swiss Romande, read the way a building manager reads a notice aloud: courteous and flat. Each « Par conséquent » opens its sentence with a short pause after it (the comma).",
  'rec-b1-31-adverbes': "The four adverb cards. Card one has a real full stop before « C'est pourquoi »: a clear pause. Card three (« C'est pour ça que ») is casual.",
  'rec-b1-31-piege-adverbes': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-31-elodie': "The Brussels phone call (act 8), two voices: Élodie, a Belgian woman in her twenties, fast and excited, and the learner, amused. Élodie's « pour » and « afin que » lines are quick; the learner's last line (« si bien que personne ne s'est perdu ») is slower and satisfied.",
  'rec-b1-31-but': "The four purpose cards, one voice. Card three carries a subjunctive (« comprenne »): read it plainly, with no emphasis on the verb. Card four's « l'a entendue » is clearly the passé composé.",
  'rec-b1-31-temps-ecoute': "REQUIRED FOR THE EAR MISSION (act 9): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. « après qu'il est parti » must be clearly /ɛ/, the indicative, never /swa/: question four depends on the learner hearing a completed fact.",
  'rec-b1-31-temps': "The four time cards. Card four: « après qu'il est parti », indicative, clearly /ki.lɛ/.",
  'rec-b1-31-piege-temps': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-31-mode-ecoute': "REQUIRED FOR THE EAR MISSION (act 10): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Lines one and two share « Je reste » and must be read with the SAME melody up to the conjunction, so the only difference the ear gets is « parce que tu es » against « pour que tu sois ».",
  'rec-b1-31-mode': "The four mood cards, one voice. Cards one and two are a minimal pair: same melody, same pace. Card four holds two conjunctions; a small beat before « parce qu'il ».",
  'rec-b1-31-incident': "Karim's incident report (act 11), ONE VOICE, one take, read the way a calm employee reads a report aloud to his manager: factual, orderly. The four moves (frame, causes, consequences, aim) are audible as four blocks; « D'abord » and « Ensuite » each open a new block.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 31',
  intro: 'You can already answer pourquoi with parce que. This lesson turns that one word into a system: a main clause that stands on its own, a subordinate clause that leans on it, and a small word at its head that names the link. You learn to give a cause (parce que, puisque, comme, à cause de, grâce à), a result (si bien que, tellement ... que, par conséquent), an aim and a time, and you see that the conjunction, not the verb, decides the mood. You finish by explaining an incident in writing.',
  skill: 'PE',
  grammarAssumed: [
    INTERROGATIFS_UNIT, ELISION_UNIT, PC_AVOIR_UNIT, PC_IMPARFAIT_UNIT, FUTUR_USAGE_UNIT,
    SUBJ_FORM_UNIT, SUBJ_DECL_UNIT, SUBJ_INF_UNIT,
  ],
  grammarIntroduced: [
    'The main clause and the subordinate clause as a system, with the conjunction at the head of the subordinate clause naming the link',
    'parce que as a clause-opener requiring a subject and a finite verb, against à cause de plus a noun; the calque parce que de as an error',
    'puisque for a cause presented as known to both speakers; comme of cause in obligatory initial position; vu que and étant donné que for recognition',
    'à cause de and grâce à plus a noun as negative and positive cause, with contraction; en raison de and être dû à for recognition in formal writing',
    'si bien que and de sorte que plus the indicative for a result, positioned after the cause',
    'The degree-and-result pattern: si or tellement plus adjective or adverb, tellement or tant after a verb, tellement de or tant de plus a noun, then que',
    "c'est pourquoi, par conséquent and c'est pour ça que as sentence adverbs that open no subordinate clause and select no mood, ordered by register",
    'Purpose against result: pour and afin de plus infinitive recalled from b1.16, contrasted with si bien que plus indicative; de sorte que plus subjunctive as purpose, for recognition',
    'pendant que for simultaneity, depuis que for a starting point, lorsque as written quand, and après que plus the indicative, with the spoken subjunctive after après que for recognition',
    'That the conjunction and not the verb selects the mood, and the comma after a fronted subordinate clause',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais déjà répondre à pourquoi avec parce que. Cette leçon fait de ce mot un système : une principale qui tient seule, une subordonnée qui s'appuie sur elle, et un petit mot en tête qui dit le lien. Tu apprends à dire une cause, un résultat, un but et un moment, et tu vois que c'est la conjonction, pas le verbe, qui choisit le mode. À la fin, tu expliques un incident par écrit.",
    minutes: 135,
    difficulty: 3,
    glyph: 'que',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: SUBORDINATION_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, RAPPORT_TEXT, BULLETIN_TEXT, AVIS_TEXT, INCIDENT_TEXT, INCIDENT_MOVES, dicteeFor };

