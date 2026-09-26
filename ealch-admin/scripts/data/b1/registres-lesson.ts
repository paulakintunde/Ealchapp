// b1.25.l1 « Les registres de langue » — the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md with the WORKSHOP SHAPE of
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1. PILOT: with b1.37, this lesson sets the
// workshop shape for every later workshop lesson.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]` and the validators run on `LESSON` itself, as b1.21 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT
// ══════════════════════════════════════════════════════════════════════════
//
//   A grammar act is built around a FORM; a workshop act around a TEXT and a
//   MOVE. Acts 2 to 9 all run the same four beats, then the house act check:
//
//     1 MEET      one anchor text FIRST (reading, listening or story)
//     2 NOTICE    one section naming the move (cardDeck, tapTable, useCases)
//     3 PRACTISE  two checks on NEW material, never on the anchor text
//                 (groupDrill, commonErrors, trapDrill stepped)
//     4 USE       a short `scenario`: the learner SAYS the move, usually a
//                 rewrite into another register, with alts that are right
//                 for a different reader
//     +  CHECK    the gated control-page groupDrill every B1 act ends on
//
//   Act 1 is the problem scene (the register slip), with the task announced
//   in its resolve beat. Act 10 is the production act: model, plan, TASK,
//   and the closing sections. Every act shows the SAME content in two or
//   three registers side by side at least once, and nothing is ever called
//   « faux »: a register fits here, or it does not.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · anchor text)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le mauvais message          6   scene + Inès writes the same news twice
//    2  Trois registres             6   listening: one request in three registers
//    3  Les mots en trois tenues    7   reading: Hugo's familier message
//    4  La grammaire du registre    6   listening: Awa's voicemail
//    5  Un message, trois lecteurs  7   reading: Sami's move, told three times
//    6  Les textos                  6   reading: a group chat
//    7  Ouvrir et fermer            6   reading: Sami's inbox, first/last lines
//    8  Le faux pas                 6   story: Théo, too casual then too stiff
//    9  Au Québec                   6   listening: two Montréal colleagues
//   10  La même nouvelle, deux fois 11  model, plan, role play, TASK, quiz
//
//   TOTAL 67 missions, 10 acts, 460 estimated screens. Anchor texts: 6
//   readings (acts 1, 3, 5, 6, 7, 10), 3 listenings (acts 2, 4, 9), one
//   scene, one story. cardDeck 4 (acts 2, 4, 6, 9), tapTable 3 (acts 3, 5,
//   7), 9 scenarios (one per act from 2, plus the closing role play), 2
//   dictations. Corpus: 163 authored rows (.1200-.1392) plus 22 reused rows
//   (11 seed, 11 draft rows of b1.20 / b1.21 / b1.22), 185 item ids, 172 of
//   them released act by act through `deckTranche` (the other 13 are named,
//   never released: the ten texto abbreviations and the mismatched « Cher
//   Samir, je vous informe », which are review-only, and the two seed
//   salutations with no flashcard drill). Quiz: 10 rounds of 8 (39 mcq, 18
//   typeIn, 12 errorSpot, 11 listenChoose). Ten error triggers, ten drills,
//   five reference sheets reached from 9 missions by `sheetId`, ten terms,
//   16 studio briefs. Chapter artwork: `registres-image-prompts.md`, 10
//   prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Aucun registre n'est faux. Chacun va avec une personne et un moment. »
//   EN: No register is wrong. Each one fits a person and a moment.
//
//   ONE METAPHOR, THE SAME PERSON DRESSED THREE WAYS: jeans at a friend's, a
//   shirt at the office, a jacket at city hall. It extends b1.21's « tenue »
//   from questions to whole messages. It is NOT « formal is polite »: act 8
//   shows stiffness landing as coldness, and politeness is b1.09's axis.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the three registers and how to recognise them; the vocabulary
//           triplets; register MISMATCH and its effect; rewriting one message
//           for three readers; texto abbreviations (recognition); openings
//           and closings by register; Québec familiar vocabulary; the task of
//           one news item written twice. Every row carries `register`.
//   QUOTES  b1.20's dropped ne (rows .1167 / .1168 and rule .1177); b1.21's
//           reframe, its three question rows (.1016-.1018), « Madame,
//           Monsieur, » (.1178), the closing formula (.1185) and « Je vous
//           remercie par avance de votre réponse. » (.1184); b1.22's rule
//           « Devant être, ce. Devant les autres verbes, ça. » (.1127) and
//           « Cela est exact. » (.1123); b1.09's reframe.
//   LEAVES  tu / vous to b1.26 (forward pointer only, in act 8 and the
//           roundup); inversion to b1.21; the dropped ne as grammar to b1.20;
//           ça / cela / ce to b1.22; the polite conditional to b1.09; the
//           subjunctive to b1.14 to b1.16 (no « Veuillez » anywhere).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction; characters use what the situation needs.
//   English authored everywhere, never on an answer. Every `say` is French.
//   No spaced « ? » or « ! » in any bubble: the scene carries its questions in
//   narration and the choice prompt; the act 8 story is statements only.
//   Every commonErrors card states WHERE the wrong line was said, so no
//   register is ever labelled wrong in itself.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. SIZE. 67 missions, inside the shapes doc's 60-80, under the grammar
//      lessons' 76-91. Is 67 right for a workshop, or should acts gain one
//      more practice mission each?
//   2. THE « USE » BEAT IS A 3-TURN SCENARIO in acts 2-9. It is the only
//      spoken production surface in the flow (typeIn lives only in the
//      quiz). Eight mini role plays: good, or too many of one mechanic?
//   3. TEXTO ROWS (slt, jsp, mdr...) are review-only with no ipa or respell.
//      A review card still offers TTS: « mdr » will be read as letters.
//      Acceptable, or should the review drill skip audio for tag `texto`?
//   4. DRAFT ROWS REUSED BY ID: nine rows of b1.20, b1.21 and b1.22 are named
//      here instead of twinned. That ties this lesson's import to theirs.
//      Keep, or twin them into this block?
//   5. `register` IS FILLED on every authored row (the schema field existed,
//      no corpus used it). Should later B1 lessons fill it too?
//   6. QUÉBEC « Salut Marc » to a colleague is tagged courant, « Salut » to a
//      friend familier. The line is blurry in Québec. Fine at B1?
//   7. THREE tapTables (acts 3, 5, 7), one per act, as every B1 lesson does.
//   8. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  INES_TEXT, INES_PAIRES, HUGO_TEXT, HUGO_MOTS, DEMENAGEMENT_TEXT, TEXTO_TEXT, TEXTO_CLES,
  BOITE_TEXT, MODELE_TEXT, MODELE_MOVES,
  B109_REFRAME, B121_REFRAME, B121_REFRAME_EN,
  B120_ROWS, B121_ROWS, B122_ROWS,
  POLITESSE_UNIT, NEGATION_UNIT, INVERSION_UNIT, CEST_UNIT,
  POLITESSE_REF, NEGATION_REF, INVERSION_REF, CEST_REF, NEXT_REF,
} from './registres-corpus.ts';
import { REGISTRES_TERMS } from './registres-terms.ts';

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
/** This corpus, plus the three draft corpora whose rows are reused by id. */
const ROW = new Map<string, SrcItem>(
  [...ALL_ROWS, ...B120_ROWS, ...B121_ROWS, ...B122_ROWS].map((r) => [r.id, r as SrcItem]),
);
const OWN = new Set(ALL_ROWS.map((r) => r.id));

/** An item's fr/en, from a corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.25: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.25: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.25: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const free = (frs: string, en: string, note?: string): GItem => ({ fr: frs, en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
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

/** The ids reused from other lessons, by the name the sections use. */
const B120 = (n: number) => `fr.b1.negation-et-restriction.${n}`;
const B121 = (n: number) => `fr.b1.langue-soignee.${n}`;
const B122 = (n: number) => `fr.b1.description-personnes-objets.${n}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE MAUVAIS MESSAGE
 *
 *  The problem scene. NOBODY WRITES BAD FRENCH: the learner's message is
 *  correct and clear, and it goes to the wrong reader. The task is announced
 *  in the resolve beat.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le message de 7 h 05',
  frSub: 'Une panne, une responsable',
  setting: { place: 'Un stationnement de Rosemont', city: 'Montréal', time: '7 h 05', ambience: 'une voiture qui ne démarre pas, de la neige, un téléphone à la main' },
  beats: [
    {
      kind: 'narration',
      text: "Lundi, 7 h 05, à Montréal. Ta voiture ne démarre pas. Tu travailles depuis trois semaines dans un bureau de Rosemont, et ta responsable s'appelle Mme Bouchard. Tu appelles Inès, ta collègue, en haut-parleur.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: `Avant d'écrire à Mme Bouchard, tu lis ton message à Inès : « ${fr(E(1200))} »`,
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Inès',
      fr: 'Ton message est clair. Mais il est habillé pour moi, pas pour elle.',
      en: 'Your message is clear. But it is dressed for me, not for her.',
      respell: '[tohⁿ may-SAZH eh KLEHR | meh eel eh-ta-bee-YAY poor MWA | pa poor EHL]',
      stage: 'Elle ne parle pas de grammaire. Elle parle de la personne qui va lire.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Mais il n'y a pas de faute. C'est du bon français.",
      en: "But there is no mistake. It is good French.",
      respell: '[meh eel nya pa duh FOHT | seh dü bohⁿ frahⁿ-SEH]',
      stage: 'Tu as raison : chaque mot existe, chaque phrase est juste.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Inès',
      fr: "Aucune faute. Mais Salut et bagnole, c'est pour les amis.",
      en: 'No mistake. But Salut and bagnole are for friends.',
      respell: '[oh-KÜNN FOHT | meh sa-LÜ ay ba-NYOL | seh poor lay-za-MEE]',
      stage: 'Mme Bouchard ne te connaît que depuis trois semaines.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu réécris. Quel message envoies-tu à Mme Bouchard ?',
      size: 'lg',
      options: [
        { fr: fr(E(1201)), respell: rsOf(E(1201)), en: src(E(1201)).en, outcome: 'works', audio: AUDIO },
        { fr: fr(E(1200)), respell: rsOf(E(1200)), en: src(E(1200)).en, outcome: 'breaks', audio: AUDIO },
      ],
      followUp: {
        works: "Mme Bouchard répond en deux minutes : « Merci de m'avoir prévenue. Bon courage. » La nouvelle est la même. La tenue, non.",
        breaks: "Mme Bouchard répond une heure plus tard : « Bonjour. Merci de prévenir plus tôt la prochaine fois. » Elle a compris la nouvelle, et elle a remarqué le ton.",
      },
    },
    {
      kind: 'break',
      heading: 'Juste, mais pas pour elle',
      body: "Ton premier message était correct. Il allait avec Inès, pas avec une responsable que tu connais depuis trois semaines. Même nouvelle, autre tenue. EN: Your first message was correct; it fitted a friend, not a new manager.",
      wrong: { fr: fr(E(1200)), ipa: ipaOf(E(1200)), respell: rsOf(E(1200)), en: src(E(1200)).en },
      right: { fr: fr(E(1201)), ipa: ipaOf(E(1201)), respell: rsOf(E(1201)), en: src(E(1201)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "À la fin de cette leçon, tu vas écrire une nouvelle deux fois : un message à un ami, puis un courriel à une responsable ou à une administration. Chaque acte te donne un outil pour ça.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'familier'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Reconnaître les trois registres', s: 'Actes 1 et 2 : familier, courant, soutenu' },
    { t: 'Voir ce qui change', s: 'Actes 3 et 4 : les mots et la grammaire' },
    { t: 'Écrire pour le bon lecteur', s: 'Actes 5 à 8 : trois lecteurs, les textos, les formules, le faux pas' },
    { t: 'Écrire ta nouvelle deux fois', s: 'Actes 9 et 10 : le Québec, puis ta mission écrite' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET: the same news written twice, eight minutes apart. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Deux messages avant 7 h 30',
  frSub: 'La même nouvelle, deux lecteurs',
  text: INES_TEXT,
  glossary: [
    { word: 'Grosse nuit', en: 'rough night', note: 'Familier : une nuit difficile, sans dormir.' },
    { word: 'pas le choix', en: 'no choice', note: 'Familier : je n’ai pas le choix.' },
    { word: 'dsl', en: 'sorry (texting)', note: 'Désolé, en abréviation de texto. Tu le revois à l’acte 6.' },
    { word: 'joignable', en: 'reachable', note: 'On peut te joindre, par téléphone ou par courriel.' },
    { word: 'compréhension', en: 'understanding', note: 'Merci de votre compréhension : une formule de fin, courante.' },
  ],
  questions: [
    { q: 'Qu’est-ce qui est pareil dans les deux messages ?', a: 'Les faits : son fils est malade, elle travaille de la maison, elle ne vient pas à midi, elle donnera des nouvelles.' },
    { q: 'Trouve les paires : le mot pour Chloé, le mot pour Mme Bouchard.', a: INES_PAIRES.map(([a, b]) => `${a} / ${b}`).join(' ; ') + '.' },
    { q: 'Dans le premier message, un petit mot de négation manque. Lequel ?', a: "ne : « On se voit pas ». Dans le courriel, il revient : « je ne pourrai pas »." },
    { q: 'Un des deux messages est-il faux ?', a: 'Non. Chacun va avec sa lectrice : une amie, puis une responsable.' },
  ],
  audio: REC('rec-b1-25-ines'),
  say: REFRAME,
  terms: ['registre', 'lecteur'],
};

/** PRACTISE, on the text just read: whose line is it. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Pour Chloé, ou pour Mme Bouchard',
  groups: [
    grp('Les lignes pour Chloé', [
      it(E(1206), 'la première ligne'),
      it(E(1202), 'bosser'),
      it(E(1204), 'le ne est tombé'),
      it(E(1207), 'la dernière ligne'),
    ], chk(
      'Ces quatre lignes sont-elles des fautes ?',
      ['Non, elles vont avec une amie.', 'Oui, il faut les corriger.'], 0,
      "Elles sont justes, en tenue d'amis. EN: correct, in friends' clothes.")),
    grp('Les lignes pour Mme Bouchard', [
      it(E(1203), 'travailler'),
      it(E(1205), 'le ne est là'),
      it(E(1209), 'une phrase de bureau'),
      it(E(1208), 'la formule de fin'),
    ], chk(
      'Qu’est-ce qui a changé par rapport aux lignes pour Chloé ?',
      ['les faits', 'la tenue'], 1,
      "Les faits sont les mêmes. Seuls les mots et la forme changent. EN: same facts, different outfit.")),
    ctl('Et Inès', 'Inès écrit « Je te tiens au courant » à Chloé et « Je vous tiens au courant » à sa responsable. Pourquoi ?',
      ['les deux sont possibles avec les deux', 'te pour une amie, vous pour une responsable', 'te est plus poli'], 1,
      `La personne décide. Le choix entre tu et vous, c'est ${NEXT_REF}. EN: the reader decides; tu or vous comes next lesson.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['familier', 'courant'],
};

/** NOTICE: where the wrong outfit costs something real. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où le registre compte vraiment',
  cases: [
    { situation: 'Tu préviens ta responsable d’un retard', fr: fr(E(1201)), en: src(E(1201)).en },
    { situation: 'Tu préviens une amie du même retard', fr: fr(E(1200)), en: src(E(1200)).en },
    { situation: 'Tu t’excuses auprès d’un client', fr: fr(E(1212)), en: src(E(1212)).en },
    { situation: 'Tu dis à Chloé que tu la rappelles', fr: fr(E(1214)), en: src(E(1214)).en },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'lecteur'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La faute', '« Salut, ma bagnole est en panne. » Est-ce du mauvais français ?',
    ['Non, c’est du français familier.', 'Oui, c’est de l’argot.'], 0,
    "Chaque mot existe. C'est une tenue d'amis. EN: every word exists; it is friends' dress."),
  ctl('La lectrice', 'Qui choisit le registre de ton message ?',
    ['la personne qui va le lire', 'la longueur du message', 'ton humeur du matin'], 0,
    "La lectrice et le moment. EN: the reader and the moment."),
  ctl('Les faits', 'Entre le texto à Chloé et le courriel à Mme Bouchard, qu’est-ce qui change ?',
    ['la nouvelle', 'les mots et la forme'], 1,
    "La nouvelle reste la même. EN: the news stays the same."),
], ['registre', 'lecteur']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le mauvais message',
    opener: {
      line: "Un message juste peut partir chez la mauvaise personne : ici tu vois pourquoi. EN: A correct message can go to the wrong person: here you see why.",
      imageRef: 'lessons/registres/act01.jpg',
    },
    sections: [],
    milestone: "Tu sais qu'un registre n'est pas une faute, et que le lecteur le choisit. EN: You know a register is not a mistake, and that the reader chooses it.",
    estScreens: 26, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — TROIS REGISTRES
 *
 *  MEET by ear: one request, one fact, one answer, each in three registers.
 *  NOTICE: the three registers named. PRACTISE on new triplets. USE: answer
 *  three people in their own register.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Trois fois la même chose',
  frSub: 'Écoute qui parle à qui',
  lines: [
    ln(E(1220)), ln(E(1221)), ln(E(1222)),
    ln(E(1223)), ln(E(1224)), ln(E(1225)),
    ln(E(1226)), ln(B120(1168)), ln(E(1228)),
  ],
  questions: [
    { q: 'Première phrase : quel registre ?', opts: ['familier', 'courant', 'soutenu'], correct: 0, why: "« un bouquin » : le mot des amis pour un livre. EN: bouquin is the friends' word." },
    { q: 'Troisième phrase : quel mot remplace livre ?', opts: ['bouquin', 'ouvrage'], correct: 1, why: "« un ouvrage » : le mot soutenu, avec l'inversion. EN: ouvrage, the formal word." },
    { q: 'Les trois premières phrases demandent-elles la même chose ?', opts: ['Oui, la même chose.', 'Non, la dernière demande plus.'], correct: 0, why: 'Même demande, trois tenues. EN: same request, three outfits.' },
    { q: 'Sixième phrase : où l’entends-tu ?', opts: ['entre amis, au café', 'dans une lettre à l’assurance', 'dans un texto à ta sœur'], correct: 1, why: "« Mon véhicule est en réparation » : la langue des papiers officiels. EN: the language of official paperwork." },
    { q: 'Les trois dernières : laquelle dis-tu à ton frère ?', opts: ["J'en sais rien.", 'Je ne sais pas.', "Je l'ignore."], correct: 0, why: "Entre frères, le familier. Je l'ignore sonnerait froid. EN: familier between brothers." },
  ],
  audio: REC('rec-b1-25-trois-ecoute'),
  say: REFRAME,
  terms: ['familier', 'courant', 'soutenu'],
};

const A2_TROIS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-trois',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-registres',
  title: 'Trois registres, une seule langue',
  frSub: 'Familier, courant, soutenu',
  hint: 'Quatre cartes. Regarde qui lit.',
  audio: REC('rec-b1-25-trois'),
  say: REFRAME,
  terms: ['familier', 'courant', 'soutenu'],
  cards: [
    {
      head: 'Le familier', label: 'amis, famille, textos',
      fr: "bouquin · bagnole · j'en sais rien",
      sub: '[boo-KEHⁿ · ba-NYOL · zhahⁿ seh RYEHⁿ]',
      body: "La langue de la maison et des copains : des mots courts, le ne qui tombe. Ce n'est pas une faute, c'est une tenue d'intérieur. EN: the language of home and friends; not a mistake.",
    },
    {
      head: 'Le courant', label: 'presque partout',
      fr: 'livre · voiture · je ne sais pas',
      sub: '[LEEVR · vwa-TÜR · zhuh nuh seh PA]',
      body: "Le français de tous les jours : au bureau, au magasin, dans un courriel. Si tu hésites, prends celui-là. EN: everyday French; when in doubt, use it.",
    },
    {
      head: 'Le soutenu', label: 'lettres, discours, livres',
      fr: "ouvrage · véhicule · je l'ignore",
      sub: '[oo-VRAZH · vay-ee-KÜL · zhuh lee-NYOR]',
      body: "La langue des lettres officielles, des discours et des romans. Dans une conversation, elle met de la distance. EN: official letters, speeches, novels; in conversation it sounds distant.",
    },
    {
      head: 'La tenue, déjà', label: Cap(INVERSION_REF),
      fr: B121_REFRAME,
      sub: rsOf(B121(1003)),
      body: `${Cap(INVERSION_REF)} le disait pour les questions. Ici, c'est vrai pour tout le message : les mots, la grammaire, la première et la dernière ligne. EN: ${B121_REFRAME_EN} Here it holds for the whole message.`,
    },
  ],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-trier',
  layer: 'core',
  size: 'lg',
  title: 'Trois tenues, de nouveaux mots',
  groups: [
    grp('La fatigue, trois fois', [
      it(E(1229), 'à un ami'),
      it(E(1230), 'partout'),
      it(E(1231), 'dans une lettre, un roman'),
    ], chk(
      'Laquelle écris-tu à ton propriétaire ?',
      ['Je suis crevé.', 'Je suis très fatigué.', 'Je suis exténué.'], 1,
      "Le courant va avec lui. Exténué passerait, mais sonne un peu écrit. EN: courant fits; exténué sounds bookish.")),
    grp("L'ami, trois fois", [
      it(E(1232), 'au café'),
      it(E(1233), 'partout'),
      it(E(1234), 'dans un discours'),
    ], chk(
      '« Votre ami est fort aimable. » Où l’entends-tu ?',
      ['dans un discours, une lettre', 'dans un texto', 'au café, entre copains'], 0,
      "Fort aimable : deux mots soutenus. EN: fort aimable is formal.")),
    ctl('Le mot seul', '« Pote », c’est...',
      ['une faute de français', 'un mot familier pour ami'], 1,
      "Un mot juste, pour les copains. EN: a real word, for friends."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['familier', 'soutenu'],
};

/** PRACTISE: every card names WHERE the line was said, so no register is
 *  called wrong in itself. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre phrases au mauvais endroit',
  errors: [
    {
      wrong: "À ton frère : « Je l'ignore. »",
      right: `À ton frère : « ${fr(E(1226))} »`,
      why: "Normal : on t'a appris la forme soignée. À ton frère, elle sonne froide, presque vexée. EN: fine in a letter, cold with a brother.",
    },
    {
      wrong: 'Dans ton CV : « J’ai bossé deux ans chez un libraire. »',
      right: 'Dans ton CV : « J’ai travaillé deux ans chez un libraire. »',
      why: "Tes collègues disent bosser tous les jours. Un CV, lui, attend le courant. EN: colleagues say bosser; a CV expects travailler.",
    },
    {
      wrong: 'À ta collègue, à la pause : « Pourriez-vous me conseiller un ouvrage ? »',
      right: `À ta collègue, à la pause : « ${fr(E(1220))} »`,
      why: "La phrase est parfaite dans une bibliothèque. À la pause, elle crée de la distance. EN: perfect at a library desk, distant at a coffee break.",
    },
    {
      wrong: "À ton assurance : « Ma bagnole est au garage. »",
      right: `À ton assurance : « ${fr(E(1225))} »`,
      why: "Bagnole va avec tes amis. Un dossier d'assurance attend véhicule. EN: bagnole is for friends; an insurance file expects véhicule.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'familier'],
};

/** USE: answer each person in the register they used. */
const A2_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a2-scenario',
  layer: 'core',
  title: 'Réponds dans leur registre',
  setting: 'Un ami, une collègue, puis un cabinet de notaire te parlent de ton samedi. Réponds à chacun dans son registre.',
  turns: [
    {
      ai: 'Salut ! Tu fais quoi ce week-end ?',
      en: 'Hey! What are you up to this weekend?',
      user: 'Je bosse samedi, mais dimanche je suis libre.',
      userEn: "I'm working Saturday, but Sunday I'm free. (Familier: bosser, to a friend.)",
      alts: [
        { fr: 'Samedi je bosse, dimanche je suis libre.', en: "Saturday I'm working, Sunday I'm free." },
        { fr: 'Je travaille samedi, mais dimanche je suis libre.', en: "I'm working Saturday, but Sunday I'm free. (Courant: right too, just less relaxed.)" },
      ],
    },
    {
      ai: 'Bonjour ! Est-ce que tu es disponible samedi pour la formation ?',
      en: 'Hello! Are you available on Saturday for the training?',
      user: 'Non, je ne suis pas disponible samedi, mais dimanche, oui.',
      userEn: 'No, I am not available on Saturday, but Sunday, yes. (Courant: the ne stays.)',
      alts: [
        { fr: 'Samedi, je ne peux pas. Dimanche, sans problème.', en: 'Saturday I cannot. Sunday, no problem.' },
        { fr: 'Désolé, je ne suis pas libre samedi.', en: 'Sorry, I am not free on Saturday.' },
      ],
    },
    {
      ai: 'Madame, Monsieur, pourriez-vous nous indiquer vos disponibilités ?',
      en: 'Could you let us know when you are available?',
      user: 'Je suis disponible lundi et mardi, à partir de dix heures.',
      userEn: 'I am available on Monday and Tuesday, from ten. (Courant, careful: right for a service.)',
      alts: [
        { fr: 'Je serai disponible lundi et mardi, à partir de dix heures.', en: 'I will be available on Monday and Tuesday, from ten.' },
        { fr: 'Lundi ou mardi, à partir de dix heures, si cela vous convient.', en: 'Monday or Tuesday, from ten, if that suits you. (Cela: a touch of soutenu, well placed.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'courant'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le plus sûr', 'Tu écris à quelqu’un que tu ne connais pas. Quel registre est le plus sûr ?',
    ['le familier', 'le courant', 'le soutenu'], 1,
    "Le courant va avec presque tout le monde. EN: courant suits almost everyone."),
  ctl('Le soutenu', '« Je l’ignore », dit à ton frère, sonne...',
    ['froid', 'très gentil'], 0,
    "Trop soutenu pour lui : ça met de la distance. EN: too formal, so distant."),
  ctl('Le familier', 'Le familier, c’est...',
    ['du français faux', 'une tenue d’amis'], 1,
    "Des mots justes, pour les proches. EN: real words, for people close to you."),
], ['familier', 'courant', 'soutenu']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Trois registres',
    opener: {
      line: "Bouquin, livre, ouvrage : c'est le même objet, et ici tu entends à qui chaque mot parle. EN: Bouquin, livre, ouvrage: the same object, and here you hear who each word is for.",
      imageRef: 'lessons/registres/act02.jpg',
    },
    sections: [],
    milestone: "Tu reconnais le familier, le courant et le soutenu, et tu réponds à chacun dans son registre. EN: You can tell the three registers apart and answer each person in theirs.",
    estScreens: 34, restPoints: ['a2-trier'],
  },
  sections: [A2_ECOUTE, A2_TROIS, A2_TRIER, A2_ERREURS, A2_SCENARIO, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LES MOTS EN TROIS TENUES
 *
 *  MEET: Hugo's message, all familier, read BEFORE the glossary. NOTICE:
 *  the triplets. PRACTISE on new sentences, and the trap both ways (a
 *  familiar word in a careful message, a formal word with a friend). USE:
 *  retell Hugo's week to a manager.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La semaine de Hugo',
  frSub: 'Lis d’abord, les mots ensuite',
  text: HUGO_TEXT,
  glossary: [
    { word: 'bagnole', en: 'car (informal)', note: 'Courant : voiture. Soutenu : véhicule.' },
    { word: 'boulot', en: 'work, job (informal)', note: 'Courant : travail. Soutenu : emploi.' },
    { word: 'bosse', en: 'work (informal)', note: 'Bosser. Courant : travailler.' },
    { word: 'bouquine', en: 'read (informal)', note: 'Bouquiner, lire des bouquins. Courant : lire.' },
    { word: 'resto', en: 'restaurant (informal)', note: 'Le mot coupé, comme ciné pour cinéma.' },
    { word: 'potes', en: 'mates (informal)', note: 'Courant : des amis.' },
    { word: 'plus un rond', en: 'broke (informal)', note: "Courant : je n'ai plus d'argent." },
    { word: 'crevé', en: 'wiped out (informal)', note: 'Courant : très fatigué.' },
    { word: 'ça roule', en: 'all good? (informal)', note: 'Courant : ça va ?' },
  ],
  questions: [
    { q: 'Hugo écrit à qui ? Comment le sais-tu ?', a: 'À une amie, Léa : Salut, Bises, et presque un mot familier par phrase.' },
    { q: 'Trouve les mots familiers du message.', a: `${HUGO_MOTS.join(', ')}.` },
    { q: 'Quelle phrase a perdu son ne ?', a: "« j'ai plus un rond » : à l'écrit courant, je n'ai plus d'argent." },
    { q: 'Hugo raconte la même semaine à sa directrice. Que garde-t-il ?', a: 'Les faits : la panne, le bus, le projet, la fatigue. Il change les mots.' },
  ],
  audio: REC('rec-b1-25-hugo'),
  say: REFRAME,
  terms: ['familier', 'courant'],
};

const A3_TRIPLES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-triples',
  layer: 'core',
  sheetId: 'sheet-mots',
  title: 'Six mots, trois tenues',
  cols: ['Familier', 'Courant', 'Soutenu'],
  rows: [
    { cells: ['un bouquin', 'un livre', 'un ouvrage'], say: fr(E(1246)),
      detail: { title: 'Le livre', body: "Bouquin entre amis, livre partout, ouvrage dans une bibliothèque ou une lettre. EN: bouquin with friends, livre anywhere, ouvrage in a library or a letter.", say: fr(E(1253)) } },
    { cells: ['une bagnole', 'une voiture', 'un véhicule'], say: fr(E(1223)),
      detail: { title: 'La voiture', body: "Véhicule vit dans les formulaires, les panneaux et les assurances. EN: véhicule lives in forms, signs and insurance.", say: fr(E(1254)) } },
    { cells: ['le boulot', 'le travail', "l'emploi"], say: fr(E(1256)),
      detail: { title: 'Le travail', body: "Emploi pour un poste, dans une offre ou un CV. Le verbe familier, c'est bosser. EN: emploi for a post; the familiar verb is bosser.", say: fr(E(1259)) } },
    { cells: ['pas un rond', "pas d'argent", 'pas de fonds'], say: fr(E(1244)),
      detail: { title: "L'argent", body: "Des fonds, c'est de l'argent pour un projet, une banque, une association. EN: fonds is money for a bank or a project.", say: fr(E(1255)) } },
    { cells: ['crevé', 'très fatigué', 'exténué'], say: fr(E(1229)),
      detail: { title: 'La fatigue', body: "Exténué est rare à l'oral. Avec un ami, il sonne comme un roman. EN: exténué is rare in speech.", say: fr(E(1230)) } },
    { cells: ['bouffer', 'manger', 'se restaurer'], say: fr('fr.a1.cuisine.009'),
      detail: { title: 'Manger', body: "Bouffer entre amis. Se restaurer, sur un panneau d'autoroute ou dans un hôtel. EN: se restaurer on a road sign or at a hotel.", say: fr(E(1252)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['familier', 'soutenu'],
};

const A3_ASSORTIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-assortir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon mot pour le bon lecteur',
  groups: [
    grp('Le travail', [
      it(E(1258), 'entre collègues proches'),
      it(E(1250), 'le mot des amis'),
      it(E(1251), 'dans une offre d’emploi'),
      it(E(1259), 'partout'),
    ], chk(
      'Dans une lettre de motivation, tu écris...',
      ['Je cherche du boulot.', 'Je cherche un emploi.'], 1,
      "Une lettre de motivation attend le courant, ou mieux. EN: a cover letter expects emploi.")),
    grp("L'argent et la voiture", [
      it(E(1245), 'partout'),
      it(E(1255), 'la banque'),
      it(E(1241), 'partout'),
      it(E(1254), 'un panneau'),
    ], chk(
      '« Les fonds seront versés à la fin du mois. » Qui écrit ça ?',
      ['ton ami, par texto', 'ta sœur, au téléphone', 'ta banque, par courrier'], 2,
      "Fonds et versés : la langue d'une banque. EN: the language of a bank.")),
    ctl('Le verbe', '« Le soir, je bouquine un peu » veut dire...',
      ['je lis un peu', 'je range mes livres'], 0,
      "Bouquiner, c'est lire, entre amis. EN: bouquiner means to read."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['courant', 'soutenu'],
};

/** PRACTISE, the trap both ways: a familiar word where care is expected, and
 *  a formal word where a friend expects ease. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Le mot qui dépasse',
  rule: {
    title: 'Un seul mot change la tenue',
    body: "Une phrase courante avec un seul mot familier devient familière. Dans un message soigné, change le mot, pas toute la phrase. Et l'inverse marche aussi. EN: one informal word makes the whole sentence informal; swap the word.",
  },
  cards: [
    { promptLabel: 'au garage, par courriel', promptSound: "Ma bagnole est tombée en panne sur l'autoroute.", fr: fr(E(1241)), ipa: ipaOf(E(1241)), tip: "Bagnole suffit à rendre la phrase familière. EN: one word is enough." },
    { promptLabel: 'à ton responsable', promptSound: 'On bosse beaucoup sur un nouveau projet.', fr: fr(E(1243)), ipa: ipaOf(E(1243)), tip: "Bosser et on : deux marques d'amis. EN: bosser and on are friends' markers." },
    { promptLabel: 'à ta banque', promptSound: "J'ai plus un rond.", fr: fr(E(1245)), ipa: ipaOf(E(1245)), tip: "Plus un rond, et le ne est tombé. EN: slang, and ne has dropped." },
    { promptLabel: 'à la bibliothèque', promptSound: 'Ce bouquin est disponible à la bibliothèque.', fr: fr(E(1253)), ipa: ipaOf(E(1253)), tip: "Ouvrage, ou livre : jamais bouquin sur une fiche. EN: never bouquin on a catalogue card." },
    { promptLabel: 'à ta directrice', promptSound: 'Je bosse demain.', fr: fr(E(1259)), ipa: ipaOf(E(1259)), tip: "Travailler va partout. EN: travailler goes anywhere." },
    { promptLabel: 'à ton meilleur ami', promptSound: 'Je suis exténué.', fr: fr(E(1229)), ipa: ipaOf(E(1229)), tip: "Le piège inverse : trop soutenu pour un ami. EN: the reverse trap, too formal for a friend." },
  ],
  drill: [
    { promptSay: 'À ta banque : « Je n’ai plus ... sur mon compte. »', opts: ['de fric', "d'argent"], correct: 1 },
    { promptSay: 'À ton ami : « Ma ... est au garage. »', opts: ['bagnole', 'véhicule'], correct: 0 },
    { promptSay: 'Dans ton CV : « J’ai cherché ... pendant six mois. »', opts: ['du boulot', 'un emploi'], correct: 1 },
    { promptSay: 'À la bibliothèque : « Cet ... est-il disponible ? »', opts: ['ouvrage', 'bouquin'], correct: 0 },
    { promptSay: 'À ton frère : « Le soir, je ... un peu. »', opts: ['lis un ouvrage', 'bouquine'], correct: 1 },
    { promptSay: 'À ton responsable : « Nous ... sur le projet. »', opts: ['bossons', 'travaillons'], correct: 1 },
    { promptSay: 'À ta colocataire : « Je suis ... ce soir. »', opts: ['crevé', 'exténué'], correct: 0 },
    { promptSay: 'Sur le formulaire de la mairie : « Type de ... »', opts: ['bagnole', 'véhicule'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un seul mot change la tenue' },
    { label: 'Six cartes', kind: 'cards', title: 'Le mot qui dépasse' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases qui vont' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-25-piege-mots'),
  say: REFRAME,
  terms: ['familier', 'registre'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris la version courante',
  frSub: 'Quatre phrases de Hugo, en courant',
  itemIds: dicteeFor(3),
  audio: AUDIO,
  say: REFRAME,
  terms: ['courant'],
};

/** USE: Hugo told it familier; you tell the same week to his manager. */
const A3_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a3-scenario',
  layer: 'core',
  title: 'La semaine de Hugo, en réunion',
  setting: "Tu as lu le message de Hugo. Lundi, en réunion, sa directrice te demande de ses nouvelles. Garde les faits, change les mots.",
  turns: [
    {
      ai: 'Hugo n’est pas là ce matin. Vous savez pourquoi ?',
      en: 'Hugo is not here this morning. Do you know why?',
      user: "Oui, sa voiture est tombée en panne sur l'autoroute. Il vient en bus.",
      userEn: 'Yes, his car broke down on the motorway. He is coming by bus. (Voiture, not bagnole.)',
      alts: [
        { fr: 'Sa voiture est au garage, alors il prend le bus.', en: 'His car is at the garage, so he is taking the bus.' },
        { fr: 'Il a eu une panne de voiture, il arrive en bus.', en: 'He had car trouble; he is coming by bus.' },
      ],
    },
    {
      ai: 'Et le nouveau projet, ça avance ?',
      en: 'And the new project, is it moving?',
      user: 'Oui, nous travaillons beaucoup sur le nouveau projet.',
      userEn: 'Yes, we are working hard on the new project. (Travailler, not bosser comme des fous.)',
      alts: [
        { fr: 'Oui, on travaille beaucoup dessus en ce moment.', en: 'Yes, we are working on it a lot at the moment. (On: fine out loud at work.)' },
        { fr: 'Oui, il avance bien.', en: 'Yes, it is going well.' },
      ],
    },
    {
      ai: 'Il a l’air fatigué, ces temps-ci.',
      en: 'He looks tired these days.',
      user: 'Oui, il est très fatigué, mais tout va bien.',
      userEn: 'Yes, he is very tired, but all is well. (Très fatigué, not crevé.)',
      alts: [
        { fr: 'Un peu fatigué, oui, mais il va bien.', en: 'A little tired, yes, but he is fine.' },
        { fr: 'La semaine a été longue pour lui.', en: 'It has been a long week for him.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['courant', 'lecteur'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Un mot', 'Un seul mot familier dans un courriel soigné...',
    ['ne change rien', 'change la tenue de toute la phrase'], 1,
    "Un mot suffit. EN: one word is enough."),
  ctl('Le triplet', 'Bouquin, ouvrage, livre : lequel va partout ?',
    ['bouquin', 'ouvrage', 'livre'], 2,
    "Livre, le mot courant. EN: livre, the everyday word."),
  ctl('Le sens', 'Bagnole et véhicule...',
    ['désignent la même chose', 'désignent deux objets différents'], 0,
    "Même objet, deux tenues. EN: same object, two outfits."),
], ['familier', 'registre']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Les mots en trois tenues',
    opener: {
      line: "Bagnole, voiture, véhicule : un seul mot suffit à habiller une phrase, et ici tu choisis lequel. EN: Bagnole, voiture, véhicule: one word is enough to dress a sentence, and here you choose which.",
      imageRef: 'lessons/registres/act03.jpg',
    },
    sections: [],
    milestone: "Tu changes un mot familier en mot courant, et tu gardes le familier pour tes amis. EN: You can swap an informal word for an everyday one, and keep the informal one for friends.",
    estScreens: 44, restPoints: ['a3-triples', 'a3-piege'],
  },
  sections: [A3_LECTURE, A3_TRIPLES, A3_ASSORTIR, A3_PIEGE, A3_DICTEE, A3_SCENARIO, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA GRAMMAIRE DU REGISTRE
 *
 *  Each marker is CITED from its owner, never re-taught: the dropped ne
 *  (b1.20 act 10), the question (b1.21), ça / cela (b1.22 act 8). This act
 *  only adds what they did not: that together they are how you HEAR a
 *  register, and on / nous, t'as / tu as, y a / il y a.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le message d’Awa',
  frSub: 'Écoute les petits mots',
  lines: [
    ln(E(1260)), ln(E(1261)), ln(E(1262)), ln(E(1263)),
    ln(E(1264)), ln(E(1265)), ln(E(1266)), ln(E(1274)),
  ],
  questions: [
    { q: 'Deuxième phrase : entends-tu ne ?', opts: ['Non, il est tombé.', 'Oui, devant répond.'], correct: 0, why: "« ça répond pas » : ne est tombé, pas est resté. EN: ne dropped, pas stayed." },
    { q: 'Troisième phrase : qui va au cinéma ?', opts: ['Awa seule', 'Moussa seul', 'Awa et Moussa'], correct: 2, why: "« On va » : on veut dire nous, à l'oral. EN: spoken on means we." },
    { q: '« Y a une séance » : qu’est-ce qui manque ?', opts: ['il, de il y a', 'une, de une séance'], correct: 0, why: "À l'oral, il y a devient souvent y a. EN: il y a shrinks to y a." },
    { q: 'Cinquième phrase : comment la question est-elle faite ?', opts: ['avec est-ce que', 'par inversion', 'la voix monte'], correct: 2, why: "« Tu viens ou pas ? » : l'intonation, la question des amis. EN: rising voice, the friends' question." },
    { q: 'Tout ce message est...', opts: ['familier, pour une amie', 'soutenu, pour une lettre'], correct: 0, why: 'Ne tombé, on, y a, la voix qui monte : quatre signes d’amis. EN: four friends’ markers.' },
  ],
  audio: REC('rec-b1-25-awa'),
  say: REFRAME,
  terms: ['marqueur', 'familier'],
};

const A4_MARQUEURS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-marqueurs',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-grammaire',
  title: 'Quatre marqueurs de grammaire',
  frSub: 'Le sens ne bouge pas, la tenue oui',
  hint: 'Quatre cartes, trois déjà vues ailleurs.',
  audio: REC('rec-b1-25-marqueurs'),
  say: REFRAME,
  terms: ['marqueur', 'registre'],
  cards: [
    {
      head: 'Le ne qui tombe', label: Cap(NEGATION_REF),
      fr: 'je sais pas · je ne sais pas',
      sub: '[sheh PA · zhuh nuh seh PA]',
      body: `« ${fr(B120(1177))} » C'est le marqueur le plus fréquent. Le texto entre amis est la seule exception écrite. EN: ne drops in speech and stays in writing, except in texts to friends.`,
    },
    {
      head: 'On ou nous', label: 'le sujet',
      fr: 'on va au cinéma · nous allons au cinéma',
      sub: '[ohⁿ va oh see-nay-MA · noo-za-lohⁿ oh see-nay-MA]',
      body: "À l'oral, on remplace presque toujours nous, même au bureau. Dans un texte soigné, nous revient. EN: spoken on replaces nous; careful writing brings nous back.",
    },
    {
      head: 'La forme de la question', label: Cap(INVERSION_REF),
      fr: 'tu viens ? · est-ce que tu viens ? · viens-tu ?',
      sub: '[tü VYEHⁿ · ehs-kuh tü VYEHⁿ · vyehⁿ-TÜ]',
      body: `La voix qui monte entre amis, est-ce que partout, l'inversion à l'écrit soigné. « ${B121_REFRAME} » EN: rising voice, est-ce que, inversion.`,
    },
    {
      head: 'Ça ou cela', label: Cap(CEST_REF),
      fr: 'ça me convient · cela me convient',
      sub: '[sa muh kohⁿ-VYEHⁿ · suh-la muh kohⁿ-VYEHⁿ]',
      body: `« ${fr(B122(1127))} » Et à l'écrit soigné, ça devient cela. EN: ça in speech, cela in careful writing.`,
    },
  ],
};

const A4_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Les petits mots qui changent la tenue',
  groups: [
    grp('Coupé ou entier', [
      it(E(1271), "t'as"),
      it(E(1270), 'tu as'),
      it(E(1263), 'y a'),
      it(E(1268), 'il y a'),
    ], chk(
      'Dans un courriel à ta propriétaire, tu écris...',
      ['Il y a une fuite dans la salle de bains.', 'Y a une fuite dans la salle de bains.'], 0,
      "À l'écrit courant, il y a en entier. EN: in writing, il y a in full.")),
    grp('On, nous, ça, cela', [
      it(E(1274), 'on'),
      it(E(1275), 'nous'),
      it(E(1272), 'ça'),
      it(E(1273), 'cela'),
    ], chk(
      'Laquelle est la plus soignée ?',
      ['Ça me convient.', 'On part à huit heures.', 'Cela me convient tout à fait.'], 2,
      "Cela, et tout à fait : la tenue d'une lettre. EN: cela and tout à fait, letter dress.")),
    ctl('Le ne', '« Je sais pas si Moussa a les billets. » Pour ton directeur, tu ajoutes...',
      ['ne, devant sais', 'un deuxième pas'], 0,
      "Je ne sais pas : le ne revient. EN: ne comes back."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['marqueur', 'courant'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre marqueurs au mauvais endroit',
  errors: [
    {
      wrong: 'À ton directeur, par courriel : « Je sais pas si la salle est libre. »',
      right: 'À ton directeur, par courriel : « Je ne sais pas si la salle est libre. »',
      why: "Normal : tu entends ne tomber toute la journée, et ta main l'oublie. À l'écrit, il revient. EN: you hear ne drop all day; in writing it returns.",
    },
    {
      wrong: 'Dans un rapport : « On a fini le projet en mars. »',
      right: 'Dans un rapport : « Nous avons fini le projet en mars. »',
      why: "On est partout à l'oral, même en réunion. Un rapport écrit préfère nous. EN: on is everywhere in speech; a report prefers nous.",
    },
    {
      wrong: 'Dans une lettre à la mairie : « Vous avez reçu mon dossier ? »',
      right: 'Dans une lettre à la mairie : « Avez-vous reçu mon dossier ? »',
      why: `Au guichet, la voix qui monte suffit. Dans une lettre, on ne l'entend pas : ${INVERSION_REF} donne l'inversion. EN: a letter cannot hear your voice rise.`,
    },
    {
      wrong: 'Par texto, à ta sœur : « Cela me convient tout à fait. »',
      right: 'Par texto, à ta sœur : « Ça me va. »',
      why: "Le piège inverse. Cela est juste, mais à ta sœur il sonne comme un contrat. EN: the reverse trap: correct, but it sounds like a contract.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['marqueur', 'soutenu'],
};

/** USE: Awa's voicemail, redressed for a message to the team. */
const A4_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a4-scenario',
  layer: 'core',
  title: 'Le message d’Awa, pour ton équipe',
  setting: "Awa organise aussi une sortie au cinéma avec ton équipe. Elle te lit son message familier, phrase par phrase. Tu dis chaque phrase comme tu l'écrirais à l'équipe.",
  turns: [
    {
      ai: 'Première phrase : « On va au cinéma ce soir. »',
      en: 'First sentence: we are going to the cinema tonight.',
      user: fr(E(1267)),
      userEn: 'We are going to the cinema tonight. (Nous, for a written message.)',
      alts: [
        { fr: 'Nous irons au cinéma ce soir.', en: 'We will go to the cinema tonight.' },
        { fr: 'On va au cinéma ce soir, si vous voulez venir.', en: 'We are going to the cinema tonight, if you want to come. (On: fine out loud, at the coffee machine.)' },
      ],
    },
    {
      ai: 'Deuxième : « Y a une séance à vingt heures. »',
      en: 'Second: there is a showing at eight.',
      user: fr(E(1268)),
      userEn: 'There is a showing at eight. (Il y a, in full.)',
      alts: [
        { fr: 'La séance commence à vingt heures.', en: 'The showing starts at eight.' },
        { fr: 'Il y a une séance à vingt heures, au cinéma du quartier.', en: 'There is a showing at eight, at the local cinema.' },
      ],
    },
    {
      ai: 'Troisième : « Je sais pas si Moussa a les billets. »',
      en: 'Third: dunno if Moussa has the tickets.',
      user: fr(E(1276)),
      userEn: 'I do not know whether Moussa has the tickets. (The ne comes back.)',
      alts: [
        { fr: 'Je ne sais pas encore si les billets sont achetés.', en: 'I do not know yet whether the tickets are bought.' },
        { fr: 'Je vérifie avec Moussa pour les billets.', en: 'I am checking with Moussa about the tickets.' },
      ],
    },
    {
      ai: 'Et la dernière : « Tu viens ou pas ? »',
      en: 'And the last: are you coming or not?',
      user: 'Est-ce que vous venez ?',
      userEn: 'Are you coming? (Est-ce que, and vous for the whole team.)',
      alts: [
        { fr: 'Venez-vous avec nous ?', en: 'Are you coming with us? (Inversion: the written jacket.)' },
        { fr: 'Qui vient avec nous ?', en: 'Who is coming with us?' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['marqueur', 'courant'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le signe', 'Quel signe montre le plus souvent un message familier ?',
    ['nous au lieu de on', 'le ne qui tombe'], 1,
    "Le ne qui tombe, dans presque chaque phrase. EN: the dropped ne, in almost every sentence."),
  ctl('La lettre', 'Dans une lettre soignée, tu écris...',
    ['ça', 'cela'], 1,
    "Cela, à l'écrit soigné. EN: cela in careful writing."),
  ctl('Y a', '« Y a » veut dire...',
    ['il y a', 'il a', 'il y aura'], 0,
    "Il y a, coupé à l'oral. EN: il y a, cut short."),
], ['marqueur']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La grammaire du registre',
    opener: {
      line: "Je sais pas, je ne sais pas : un petit ne suffit à changer de tenue, et ici tu repères ces petits signes. EN: Je sais pas, je ne sais pas: one little ne changes the outfit, and here you learn to spot these small signs.",
      imageRef: 'lessons/registres/act04.jpg',
    },
    sections: [],
    milestone: "Tu repères le ne, on et nous, la forme de la question et cela, et tu les remets pour un message soigné. EN: You can spot ne, on and nous, the question form and cela, and restore them for a careful message.",
    estScreens: 36, restPoints: ['a4-marqueurs'],
  },
  sections: [A4_ECOUTE, A4_MARQUEURS, A4_REPERER, A4_ERREURS, A4_SCENARIO, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — UN MESSAGE, TROIS LECTEURS
 *
 *  MEET: Sami announces one move three times. NOTICE: what changes, row by
 *  row. PRACTISE on two new pieces of news. USE: say it to three people.
 *  The act also shows that a reader changes WHAT you say (the pizza never
 *  reaches the library), not only how.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Sami déménage',
  frSub: 'Une nouvelle, trois messages',
  text: DEMENAGEMENT_TEXT,
  glossary: [
    { word: 'Devine quoi', en: 'guess what', note: 'Familier : pour annoncer une nouvelle à un proche.' },
    { word: 'quatre et demi', en: 'two-bedroom flat (Québec)', note: 'Au Québec, on compte les pièces : un quatre et demi a deux chambres.' },
    { word: 'Rosemont', en: 'a Montréal neighbourhood', note: 'Un quartier de Montréal.' },
    { word: 'à compter du', en: 'as of', note: 'Soutenu : à partir de.' },
    { word: 'renseignement', en: 'information', note: 'Une information que tu demandes ou que tu donnes.' },
  ],
  questions: [
    { q: 'Quel fait reste le même dans les trois messages ?', a: 'Le déménagement, le premier juillet.' },
    { q: 'Comment Sami pose-t-il sa question à chaque lecteur ?', a: "À Chloé, la voix qui monte : T'es libre ? À Marc, est-ce que. Au service, l'inversion : Pourriez-vous." },
    { q: 'Pourquoi la pizza n’est-elle pas dans le courriel à la bibliothèque ?', a: "Elle n'intéresse pas ce lecteur. Un service veut la date et l'adresse. Le lecteur change aussi ce que tu dis." },
    { q: 'Quelle est la dernière ligne de chaque message ?', a: "Rien pour Chloé, Merci d'avance pour Marc, Cordialement pour le service." },
  ],
  audio: REC('rec-b1-25-demenagement'),
  say: REFRAME,
  terms: ['lecteur', 'registre'],
};

const A5_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-tableau',
  layer: 'core',
  sheetId: 'sheet-registres',
  title: 'Ce qui change avec le lecteur',
  cols: ['Ce qui change', 'Chloé', 'Marc', 'Le service'],
  rows: [
    { cells: ['le début', 'Devine quoi', 'Salut Marc', 'Madame, Monsieur'], say: fr(E(1280)),
      detail: { title: 'La première ligne', body: "Elle annonce le registre avant la nouvelle. EN: the first line announces the register.", say: fr(E(1283)) } },
    { cells: ['le pronom', 'tu', 'tu', 'vous'], say: fr(E(1281)),
      detail: { title: 'Tu ou vous', body: `Sami tutoie Chloé et Marc, et vouvoie le service. Ce choix a sa propre leçon : ${NEXT_REF}. EN: tu or vous gets its own lesson next.`, say: fr(E(1287)) } },
    { cells: ['la question', "T'es libre ?", 'Est-ce que tu peux ?', 'Pourriez-vous ?'], say: fr(E(1284)),
      detail: { title: 'La question', body: "La voix, est-ce que, puis l'inversion : trois tenues pour une demande. EN: three outfits for a request.", say: fr(E(1287)) } },
    { cells: ['les mots', "y aura, t'es", "je t'annonce", 'je vous informe'], say: fr(E(1282)),
      detail: { title: 'Les mots', body: "Les marqueurs de l'acte 4 et les mots de l'acte 3 suivent le lecteur. EN: the markers follow the reader.", say: fr(E(1286)) } },
    { cells: ['le contenu', 'la pizza', 'le congé', "l'adresse"], say: fr(E(1282)),
      detail: { title: 'Ce que tu dis', body: "Chaque lecteur reçoit ce qui l'intéresse : la fête, le travail, le dossier. EN: each reader gets what matters to them.", say: fr(E(1289)) } },
    { cells: ['la fin', '(rien)', "Merci d'avance", 'Cordialement'], say: fr(E(1285)),
      detail: { title: 'La dernière ligne', body: "Elle confirme le registre. Tu la revois à l'acte 7. EN: the last line confirms the register.", say: fr(E(1290)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lecteur', 'formule'],
};

const A5_QUI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-qui',
  layer: 'core',
  size: 'lg',
  title: 'Qui a reçu cette ligne',
  groups: [
    grp('Quatre lignes, trois lecteurs', [
      it(E(1291), 'la fin d’un texto'),
      it(E(1289), 'une phrase de bureau'),
      it(E(1288), 'une date, en soutenu'),
      it(E(1290), 'une fin de lettre'),
    ], chk(
      '« Je reste à votre disposition pour tout renseignement. » À qui Sami l’écrit-il ?',
      ['à Chloé', 'à Marc', 'au service'], 2,
      "Votre, disposition, renseignement : la tenue d'un service. EN: service-counter dress.")),
    grp('Même fait, trois tenues', [
      it(E(1280), 'à une amie'),
      it(E(1283), 'à un collègue'),
      it(E(1286), 'à un service'),
      it(E(1293), 'le fait tout seul'),
    ], chk(
      'Qu’ont ces quatre phrases en commun ?',
      ['le fait : le déménagement', 'les mots', 'la question'], 0,
      "Le fait reste. Tout le reste change. EN: the fact stays; the rest changes.")),
    ctl('Le détail', 'Pourquoi la pizza n’est-elle que dans le texto à Chloé ?',
      ['pizza est un mot familier', 'elle intéresse Chloé, pas le service'], 1,
      "Le lecteur choisit aussi le contenu. EN: the reader shapes the content too."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lecteur'],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Deux nouvelles, trois lecteurs',
  groups: [
    grp('Un nouveau numéro', [
      free('Nouveau num ! Note-le.', 'New number! Save it.', 'à un ami'),
      free("Je t'envoie mon nouveau numéro de téléphone.", "Here's my new phone number.", 'à une collègue'),
      free('Je vous informe de mon nouveau numéro de téléphone.', 'I am informing you of my new phone number.', 'à un service'),
    ], chk(
      'Tu écris à ton club de sport. Laquelle choisis-tu ?',
      ['Je vous informe de mon nouveau numéro de téléphone.', 'Nouveau num ! Note-le.'], 0,
      "Un club, c'est un service : vous, et les mots en entier. EN: a club is a service.")),
    grp('Une invitation', [
      free('Soirée chez moi samedi. Tu viens ?', 'Party at mine on Saturday. You coming?', 'à un ami'),
      free('Est-ce que tu es libre samedi soir ? Je fais un petit repas.', 'Are you free on Saturday evening? I am having a small dinner.', 'à une collègue'),
      free('Nous avons le plaisir de vous inviter à notre soirée du 12 avril.', 'We are pleased to invite you to our evening on 12 April.', 'une invitation officielle'),
    ], chk(
      '« Nous avons le plaisir de vous inviter » : qui écrit ?',
      ['une amie, par texto', 'une association, sur une carte'], 1,
      "Nous, le plaisir, vous : une carte officielle. EN: an official card.")),
    ctl('D’abord', 'Tu changes de lecteur. Que changes-tu en premier ?',
      ['la date de la nouvelle', 'la première ligne et le pronom', 'rien'], 1,
      "Le début annonce la tenue. La date ne bouge pas. EN: the opening sets the outfit; the date stays."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lecteur', 'registre'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris pour Marc et pour le service',
  frSub: 'Quatre phrases soignées',
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['courant', 'soutenu'],
};

const A5_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a5-scenario',
  layer: 'core',
  title: 'Trois fois, à voix haute',
  setting: "Tu déménages le premier juillet. Tu l'annonces à Chloé, puis à Marc à la machine à café, puis à l'accueil de la bibliothèque.",
  turns: [
    {
      ai: 'Salut ! Quoi de neuf ?',
      en: "Hi! What's new?",
      user: fr(E(1280)),
      userEn: "Guess what, I'm moving on the first of July. (Familier, to a friend.)",
      alts: [
        { fr: "Je déménage le premier juillet ! T'es libre pour m'aider ?", en: "I'm moving on the first of July! You free to help?" },
        { fr: 'Grosse nouvelle : je déménage en juillet.', en: "Big news: I'm moving in July." },
      ],
    },
    {
      ai: 'Bonjour ! Tu prends des vacances cet été ?',
      en: 'Hello! Are you taking a holiday this summer?',
      user: 'Oui, je déménage le premier juillet, alors je prends deux jours de congé.',
      userEn: 'Yes, I am moving on the first of July, so I am taking two days off. (Courant, to a colleague.)',
      alts: [
        { fr: 'Deux jours seulement, pour mon déménagement le premier juillet.', en: 'Just two days, for my move on the first of July.' },
        { fr: fr(E(1283)), en: `${src(E(1283)).en} (The line Sami wrote.)` },
      ],
    },
    {
      ai: 'Bonjour, que puis-je faire pour vous ?',
      en: 'Hello, what can I do for you?',
      user: "Bonjour, je déménage le premier juillet. Pourriez-vous mettre à jour mon adresse ?",
      userEn: 'Hello, I am moving on the first of July. Could you update my address? (Courant with inversion, to a service.)',
      alts: [
        { fr: "Bonjour, je voudrais changer mon adresse à compter du premier juillet.", en: 'Hello, I would like to change my address as of the first of July.' },
        { fr: 'Est-ce que vous pouvez mettre à jour mon adresse ? Je déménage en juillet.', en: 'Can you update my address? I am moving in July. (Est-ce que: fine out loud.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lecteur', 'courant'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Les faits', 'Quand tu changes de lecteur, les faits...',
    ['restent les mêmes', 'changent aussi'], 0,
    "La date, le lieu, la demande : ils ne bougent pas. EN: the facts do not move."),
  ctl('Le contenu', 'Dans un courriel à un service, tu gardes...',
    ['ce qui l’aide à traiter ta demande', 'tout ce que tu dirais à une amie'], 0,
    "Un service veut l'utile. EN: a service wants what is useful."),
  ctl('La question', 'Au service, laquelle choisis-tu ?',
    ["T'es libre ?", 'Est-ce que tu peux ?', 'Pourriez-vous ?'], 2,
    "Vous, et l'inversion : la tenue d'une lettre. EN: vous and inversion."),
], ['lecteur']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Un message, trois lecteurs',
    opener: {
      line: "Un déménagement, trois messages : ici tu écris la même nouvelle pour trois lecteurs. EN: One move, three messages: here you write the same news for three readers.",
      imageRef: 'lessons/registres/act05.jpg',
    },
    sections: [],
    milestone: "Tu gardes les faits et tu changes la tenue quand tu changes de lecteur. EN: You keep the facts and change the outfit when the reader changes.",
    estScreens: 40, restPoints: ['a5-tableau', 'a5-choisir'],
  },
  sections: [A5_LECTURE, A5_QUI, A5_TABLEAU, A5_CHOISIR, A5_DICTEE, A5_SCENARIO, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LES TEXTOS
 *
 *  RECOGNITION ONLY. The chat is read first, as a strategy: guess from
 *  context, then check the glossary. No mission ever asks the learner to
 *  WRITE an abbreviation; the use beat expands them into full words.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le groupe des amis',
  frSub: 'Devine d’abord, vérifie ensuite',
  text: TEXTO_TEXT,
  glossary: TEXTO_CLES
    .filter(([ab]) => TEXTO_TEXT.includes(ab) || TEXTO_TEXT.includes(Cap(ab)))
    .map(([ab, full, en]) => ({ word: TEXTO_TEXT.includes(ab) ? ab : Cap(ab), en, note: `En entier : ${full}.` })),
  questions: [
    { q: 'Sans le glossaire : que propose Chloé ?', a: 'Un restaurant ce soir, rendez-vous à 19 h devant le métro.' },
    { q: 'Pourquoi Maxime sera-t-il en retard ?', a: 'À cause du bus, comme d’habitude.' },
    { q: 'Quelles abréviations cachent une phrase entière ?', a: "jsp (je sais pas), tkt (t'inquiète), mdr (mort de rire)." },
    { q: 'Écrirais-tu ces messages à ta responsable ?', a: 'Non. Les abréviations vont avec les amis. Pour elle, tout s’écrit en entier.' },
  ],
  audio: REC('rec-b1-25-textos'),
  say: REFRAME,
  terms: ['texto', 'familier'],
};

const A6_ABREV: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-abrev',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-messages',
  title: 'Comment les textos coupent',
  frSub: 'À lire, pas à copier',
  hint: 'Quatre cartes. La dernière dit où elles s’arrêtent.',
  audio: REC('rec-b1-25-abrev'),
  say: REFRAME,
  terms: ['texto', 'familier'],
  cards: [
    {
      head: 'Quelques consonnes', label: 'les voyelles tombent',
      fr: 'bcp · qqch · stp · rdv',
      sub: '[boh-KOO · kehl-kuh SHOHZ · seel tuh PLEH · rahⁿ-day-VOO]',
      body: "On garde quelques consonnes : beaucoup, quelque chose, s'il te plaît, rendez-vous. EN: keep a few consonants.",
    },
    {
      head: 'Une phrase en trois lettres', label: 'jsp, tkt, mdr',
      fr: 'jsp · tkt · mdr',
      sub: '[sheh PA · tehⁿ-KYEHT · mor duh REER]',
      body: "Je sais pas, t'inquiète, mort de rire : une phrase entière, et le ne est déjà tombé. EN: a whole phrase in three letters.",
    },
    {
      head: 'Rire, des deux côtés', label: 'France et Québec',
      fr: 'mdr · lol',
      sub: '[ehm-day-EHR · LOL]',
      body: "En France, on rit avec mdr. Au Québec, on écrit souvent lol, comme en anglais. EN: France writes mdr; Québec often writes lol.",
    },
    {
      head: 'Où elles s’arrêtent', label: 'jamais dans un courriel',
      fr: fr(E(1314)),
      sub: rsOf(E(1314)),
      body: "Tu les lis vite, tu peux les écrire à tes amis. Dans un courriel, même à un collègue sympa, tout s'écrit en entier. EN: in an email, everything in full.",
    },
  ],
};

const A6_DECODER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-decoder',
  layer: 'core',
  size: 'lg',
  title: 'Décode, puis choisis',
  groups: [
    grp('Quatre nouveaux textos', [
      free('dsl, pas dispo ce soir', 'sorry, not free tonight', 'désolé, pas disponible'),
      free('tkt, jsp encore', "don't worry, dunno yet", "t'inquiète, je sais pas encore"),
      free('merci bcp, à plus', 'thanks a lot, see you', 'merci beaucoup'),
      free('rdv 18 h ?', 'meet at 6?', 'rendez-vous à 18 h'),
    ], chk(
      '« pk tu viens pas ? » veut dire...',
      ['parce que tu viens pas', 'pourquoi tu viens pas ?'], 1,
      "pk, c'est pourquoi. Et le ne est tombé. EN: pk means why.")),
    grp('Le texto, puis le courriel', [
      it(E(1315), 'à un ami, en entier'),
      it(E(1316), 'à une responsable'),
      it(E(1311), 'à un ami'),
      it(E(1317), 'partout'),
    ], chk(
      'Tu écris à ton responsable que tu seras en retard. Laquelle ?',
      ['Dsl, 10 min de retard.', 'Désolé, j’aurai dix minutes de retard.', "Je suis désolé, j'aurai dix minutes de retard."], 2,
      "Tout en entier, et une phrase complète. EN: everything in full.")),
    ctl('Le sens', '« mdr » à la fin d’un message veut dire...',
      ['c’est drôle, ou je plaisante', 'je suis fâché'], 0,
      "Mort de rire : un clin d'œil. EN: a wink."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['texto'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre textos au mauvais endroit',
  errors: [
    {
      wrong: 'À ta propriétaire : « Merci bcp pour la réparation. »',
      right: 'À ta propriétaire : « Merci beaucoup pour la réparation. »',
      why: "Bcp va si vite qu'il sort tout seul. Pour ta propriétaire, écris le mot en entier. EN: write it in full for your landlady.",
    },
    {
      wrong: 'Dans une candidature : « Dispo de suite, rdv quand vous voulez. »',
      right: 'Dans une candidature : « Je suis disponible pour un entretien dès maintenant. »',
      why: "Dispo et rdv sont des mots de groupe d'amis. Une candidature attend la phrase entière. EN: an application expects full sentences.",
    },
    {
      wrong: 'À ton responsable : « jsp si je peux venir demain »',
      right: 'À ton responsable : « Je ne sais pas si je peux venir demain. »',
      why: "Trois lettres cachent une phrase, et un ne tombé. Au travail, les deux reviennent. EN: three letters hide a phrase and a dropped ne.",
    },
    {
      wrong: 'Au groupe des amis : « Je vous remercie pour cette agréable soirée. »',
      right: 'Au groupe des amis : « Merci pour la soirée, c’était super. »',
      why: "Le piège inverse. Tes amis vont croire à une blague, ou à un reproche. EN: the reverse trap: friends will read a joke or a reproach.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['texto', 'fauxPas'],
};

/** USE: expand texts into full words for a colleague learning French. */
const A6_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a6-scenario',
  layer: 'core',
  title: 'Diego ne comprend pas les textos',
  setting: "Ton collègue Diego apprend le français. Il te montre les textos de ses amis et te demande de les dire en entier.",
  turns: [
    {
      ai: '« slt, on fait qqch ce soir ? » Ça veut dire quoi ?',
      en: 'What does that mean?',
      user: fr(E(1310)),
      userEn: 'Are we doing something tonight? (slt: salut; qqch: quelque chose.)',
      alts: [
        { fr: 'Salut, on fait quelque chose ce soir ?', en: 'Hi, are we doing something tonight?' },
        { fr: 'Ton ami te demande si vous sortez ce soir.', en: 'Your friend is asking whether you are going out tonight.' },
      ],
    },
    {
      ai: 'Et « tkt, on rentre tôt » ?',
      en: 'And this one?',
      user: fr(E(1311)),
      userEn: "Don't worry, we'll be home early. (tkt: t'inquiète.)",
      alts: [
        { fr: "Ne t'inquiète pas, on rentre tôt.", en: "Don't worry, we'll be home early. (The ne back: courant.)" },
        { fr: 'Pas de souci, on ne rentre pas tard.', en: 'No worries, we will not be back late.' },
      ],
    },
    {
      ai: 'Et « dsl, j’aurai 10 min de retard » ?',
      en: 'And this one?',
      user: fr(E(1315)),
      userEn: "Sorry, I'll be ten minutes late. (dsl: désolé.)",
      alts: [
        { fr: fr(E(1316)), en: `${src(E(1316)).en} (The version for a manager.)` },
        { fr: 'Il s’excuse : il arrive dix minutes en retard.', en: 'He is apologising: he will be ten minutes late.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['texto', 'courant'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Les textos', 'Les abréviations de texto...',
    ['s’écrivent à tes amis', 'vont dans un courriel au travail'], 0,
    "Entre amis, par texto. EN: between friends, by text."),
  ctl('bcp', '« bcp » veut dire...',
    ['bientôt', 'bon courage', 'beaucoup'], 2,
    "b, c, p : beaucoup. EN: beaucoup."),
  ctl('Le courriel', 'À ton équipe, par courriel, tu écris...',
    ['Rdv à 19 h.', 'Rendez-vous à 19 h.'], 1,
    "En entier. EN: in full."),
], ['texto']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Les textos',
    opener: {
      line: "slt, jsp, mdr : tes amis écrivent vite, et ici tu apprends à les lire sans les copier au travail. EN: slt, jsp, mdr: your friends type fast, and here you learn to read them without copying them at work.",
      imageRef: 'lessons/registres/act06.jpg',
    },
    sections: [],
    milestone: "Tu lis un texto plein d'abréviations, et tu les écris en entier dans un courriel. EN: You can read a text full of abbreviations and write them in full in an email.",
    estScreens: 34, restPoints: ['a6-abrev'],
  },
  sections: [A6_LECTURE, A6_ABREV, A6_DECODER, A6_ERREURS, A6_SCENARIO, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — OUVRIR ET FERMER
 *
 *  b1.21 owns the formal closing « Je vous prie d'agréer »; it is quoted
 *  from its row, never re-taught. This act owns the ladder from Coucou to
 *  Madame, Monsieur, and the mirror rule: answer in the outfit you received.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La boîte de réception de Sami',
  frSub: 'Seulement le début et la fin',
  text: BOITE_TEXT,
  glossary: [
    { word: 'boîte de réception', en: 'inbox', note: 'Là où arrivent tes courriels.' },
    { word: 'service à la clientèle', en: 'customer service', note: 'Au Québec. En France, on dit souvent service client.' },
    { word: 'salutations distinguées', en: 'yours faithfully', note: 'La fin des lettres officielles.' },
    { word: 'sur quel ton', en: 'in what tone', note: 'Familier, courant ou soutenu.' },
  ],
  questions: [
    { q: 'Sami n’a lu aucun message. Comment sait-il qui lui écrit ?', a: 'Par la première et la dernière ligne de chaque message.' },
    { q: 'Classe les cinq messages, du plus familier au plus soutenu.', a: 'Chloé, Maxime, Marc, la banque, la Ville.' },
    { q: 'Pourquoi la Ville écrit-elle « Monsieur, » sans Bonjour ?', a: "C'est une lettre officielle : la formule d'appel seule, puis la longue formule à la fin." },
    { q: 'Quelle fin irait avec « Bonjour Monsieur Roy, » ?', a: 'Cordialement, ou Bien cordialement.' },
  ],
  audio: REC('rec-b1-25-boite'),
  say: REFRAME,
  terms: ['formule', 'registre'],
};

const A7_FORMULES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-formules',
  layer: 'core',
  sheetId: 'sheet-messages',
  title: 'Six débuts, six fins',
  cols: ['Pour qui', 'Ouvrir', 'Fermer'],
  rows: [
    { cells: ['un proche', 'Coucou Chloé,', 'Bisous'], say: fr(E(1329)),
      detail: { title: 'Entre proches', body: "Coucou et bisous : la famille et les amis proches. Bises, en France et en Suisse. EN: family and close friends.", say: fr(E(1320)) } },
    { cells: ['un ami', 'Salut Maxime,', 'À plus'], say: fr(E(1325)),
      detail: { title: 'Entre amis', body: "Salut ouvre, À plus ferme. Au Québec, Salut va aussi avec un collègue qu'on tutoie. EN: friends, and in Québec a colleague on tu terms.", say: fr('fr.a1.salutations.032') } },
    { cells: ['un collègue', 'Bonjour Marc,', 'Bonne journée'], say: fr(E(1324)),
      detail: { title: 'Au travail', body: "Bonjour et le prénom : le courant de tous les jours. EN: Bonjour and a first name.", say: fr(E(1322)) } },
    { cells: ['un client', 'Bonjour Madame Tremblay,', 'Cordialement'], say: fr(E(1323)),
      detail: { title: 'Avec le nom', body: "Madame et le nom de famille, puis Cordialement. Au Québec, Au plaisir est aussi courant. EN: title and surname; in Québec, Au plaisir.", say: fr(E(1327)) } },
    { cells: ['un service', 'Madame, Monsieur,', 'Cordialement'], say: fr(B121(1178)),
      detail: { title: 'Sans nom', body: "Tu ne connais pas le nom : Madame, Monsieur, et une virgule. EN: no name known.", say: fr(E(1331)) } },
    { cells: ['une lettre officielle', 'Madame, Monsieur,', "Je vous prie d'agréer..."], say: fr(B121(1185)),
      detail: { title: 'La formule longue', body: `La fin des lettres officielles, vue dans ${INVERSION_REF}. Dans un courriel, Cordialement suffit souvent. EN: the long formula; in an email, Cordialement is often enough.`, say: fr(B121(1185)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formule'],
};

const A7_PAIRES: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-paires',
  layer: 'core',
  size: 'lg',
  title: 'Le bon début avec la bonne fin',
  groups: [
    grp('Quatre débuts', [
      it(E(1329), 'une proche'),
      it(E(1325), 'un ami'),
      it(E(1324), 'un collègue'),
      it(E(1323), 'une cliente'),
    ], chk(
      '« Bonjour Madame Tremblay, » : quelle fin va avec ?',
      ['Cordialement', 'Gros bisous', 'À plus'], 0,
      "Madame et le nom appellent Cordialement. EN: a title and surname call for Cordialement.")),
    grp('Quatre fins', [
      it(E(1320), 'une proche'),
      it('fr.a1.salutations.032', 'un ami'),
      it(E(1330), 'un collègue'),
      it(E(1327), 'un client'),
    ], chk(
      'Tu écris à la Ville pour une plainte. Tu finis par...',
      ['À plus', 'Bisous', fr(B121(1185))], 2,
      `La formule longue, celle de ${INVERSION_REF}. EN: the long formal closing.`)),
    ctl('Au Québec', '« Au plaisir » à la fin d’un courriel, c’est...',
      ['une fin courante au Québec', 'une fin de texto entre amis'], 0,
      "Au plaisir de vous lire : courant et aimable, au Québec. EN: a common Québec sign-off."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formule', 'quebec'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre débuts et fins mal assortis',
  errors: [
    {
      wrong: 'À ta propriétaire, en fin de courriel : « Bisous »',
      right: 'À ta propriétaire, en fin de courriel : « Bonne journée »',
      why: "Bisous sort tout seul, tu l'écris dix fois par jour. Ta propriétaire, elle, attend Bonne journée ou Cordialement. EN: habit; she expects Bonne journée.",
    },
    {
      wrong: 'À ta sœur, en fin de texto : « Cordialement »',
      right: 'À ta sœur, en fin de texto : « Bisous »',
      why: "Le piège inverse. Cordialement à ta sœur sonne comme une dispute. EN: to a sister, Cordialement sounds like a quarrel.",
    },
    {
      wrong: 'À une inconnue, au début : « Salut Madame, »',
      right: 'À une inconnue, au début : « Bonjour Madame, »',
      why: "Salut ouvre entre amis. Avec Madame, il fait un mélange de deux tenues. EN: Salut plus Madame mixes two outfits.",
    },
    {
      wrong: "Un collègue t'écrit « Bonjour Sami, ... Bonne journée ». Tu réponds : « Je vous prie d'agréer mes salutations distinguées. »",
      right: "Un collègue t'écrit « Bonjour Sami, ... Bonne journée ». Tu réponds : « Bonne journée à toi aussi. »",
      why: "Réponds dans la tenue qu'on t'a donnée. La formule longue, ici, sonne comme une porte fermée. EN: answer in the outfit you received.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formule', 'fauxPas'],
};

const A7_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a7-scenario',
  layer: 'core',
  title: 'Le début et la fin, à voix haute',
  setting: 'Tu dictes des messages à ton téléphone. Ton assistant vocal te demande seulement le début et la fin.',
  turns: [
    {
      ai: 'Un courriel à ta propriétaire, Mme Gagnon. Le début ?',
      en: 'An email to your landlady, Ms Gagnon. The opening?',
      user: 'Bonjour Madame Gagnon,',
      userEn: 'Hello Ms Gagnon, (Title and surname: courant, careful.)',
      alts: [
        { fr: 'Madame,', en: 'Madam, (Shorter and more formal: fine too.)' },
        { fr: 'Chère Madame,', en: 'Dear Madam, (Warmer, for someone you know: fine in a letter.)' },
      ],
    },
    {
      ai: 'Et la fin ?',
      en: 'And the ending?',
      user: fr(E(1330)),
      userEn: 'Thanks, and have a good day. (Courant.)',
      alts: [
        { fr: 'Cordialement,', en: 'Regards,' },
        { fr: 'Bien cordialement,', en: 'Kind regards,' },
      ],
    },
    {
      ai: 'Maintenant, un texto à Maxime. Le début et la fin ?',
      en: 'Now a text to Maxime. The opening and the ending?',
      user: 'Salut Maxime, on se voit samedi. À plus !',
      userEn: 'Hi Maxime, see you Saturday. See you! (Familier, to a friend.)',
      alts: [
        { fr: 'Coucou Maxime, à samedi ! Bises.', en: 'Hi Maxime, see you Saturday! Love. (Warmer still.)' },
        { fr: 'Salut ! À samedi.', en: 'Hi! See you Saturday.' },
      ],
    },
    {
      ai: 'Enfin, une lettre à la Ville. La formule de la fin ?',
      en: 'Finally, a letter to the city. The closing formula?',
      user: fr(B121(1185)),
      userEn: `${src(B121(1185)).en} (The long formal closing.)`,
      alts: [
        { fr: 'Cordialement.', en: 'Regards. (Shorter, accepted in most emails to a service.)' },
        { fr: fr(B121(1184)), en: `${src(B121(1184)).en} (A thank-you line, before the formula.)` },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['formule', 'lecteur'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le premier signe', 'Où vois-tu le registre en premier ?',
    ['dans la signature', 'dans la première ligne', 'dans l’objet'], 1,
    "La première ligne annonce, la dernière confirme. EN: the first line announces."),
  ctl('Cordialement', '« Cordialement » va avec...',
    ['un service, un client', 'ta sœur'], 0,
    "Un courriel de travail ou de service. EN: work and service emails."),
  ctl('Le miroir', 'Un collègue t’écrit « Bonjour, ... Bonne journée ». Tu réponds...',
    ['dans la même tenue', 'avec la formule de la Ville'], 0,
    "Réponds dans la tenue reçue. EN: mirror the outfit you received."),
], ['formule']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Ouvrir et fermer',
    opener: {
      line: "Coucou ou Madame, Monsieur : la première ligne parle avant toi, et ici tu apprends à la choisir. EN: Coucou or Madame, Monsieur: the first line speaks before you do, and here you learn to choose it.",
      imageRef: 'lessons/registres/act07.jpg',
    },
    sections: [],
    milestone: "Tu ouvres et tu fermes un message dans le registre de ton lecteur, et tu réponds dans la tenue reçue. EN: You can open and close a message in your reader's register and mirror the one you received.",
    estScreens: 36, restPoints: ['a7-formules'],
  },
  sections: [A7_LECTURE, A7_FORMULES, A7_PAIRES, A7_ERREURS, A7_SCENARIO, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LE FAUX PAS
 *
 *  MEET: a story told in statements (no « ? » in a bubble): Théo too casual
 *  with his manager, then too stiff with his best friend. NOTICE: how each
 *  slip lands. PRACTISE both directions. USE: repair both messages.
 *  tu / vous appears only as a forward pointer to b1.26.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Deux messages de Théo',
  frSub: 'Trop bas, puis trop haut',
  setting: 'Québec, un lundi. Théo écrit à sa responsable, puis à son meilleur ami. Les deux messages sont en bon français.',
  bubbles: [
    { from: 'narrator', fr: 'Lundi soir, Théo écrit à sa responsable, Mme Lacroix. Il est pressé.', en: 'Monday evening, Théo writes to his manager, Ms Lacroix. He is in a hurry.' },
    { from: 'coach', fr: fr(E(1340)), en: src(E(1340)).en, warn: 'trop familier pour une responsable' },
    { from: 'narrator', fr: 'La réponse arrive une heure plus tard.', en: 'The reply comes an hour later.' },
    { from: 'coach', fr: 'Bonjour Théo. Merci de passer par le formulaire d’absence. Cordialement.', en: 'Hello Théo. Please use the absence form. Regards.', warn: 'froid : elle remet de la distance' },
    { from: 'narrator', fr: 'Le soir, Théo écrit à son meilleur ami, Samir, pour annuler samedi.', en: 'In the evening Théo writes to his best friend Samir to cancel Saturday.' },
    { from: 'coach', fr: fr(E(1343)), en: src(E(1343)).en, warn: 'trop raide pour un meilleur ami' },
    { from: 'coach', fr: "Tu m'écris comme mon banquier. Je me demande si t'es fâché.", en: 'You are writing to me like my banker. I wonder if you are angry.', warn: 'Samir est inquiet' },
    { from: 'narrator', fr: 'Deux messages justes, deux lecteurs surpris.', en: 'Two correct messages, two surprised readers.' },
  ],
  closing: { fr: fr(E(1346)), en: src(E(1346)).en },
  audio: REC('rec-b1-25-theo'),
  say: REFRAME,
  terms: ['fauxPas', 'lecteur'],
};

const A8_EFFETS: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a8-effets',
  layer: 'core',
  sheetId: 'sheet-registres',
  title: 'Comment un faux pas est reçu',
  cases: [
    { situation: 'Trop familier avec une responsable : tu sembles négligent. Dis plutôt', fr: fr(E(1341)), en: src(E(1341)).en },
    { situation: 'Trop soutenu avec un meilleur ami : tu sembles fâché. Dis plutôt', fr: fr(E(1344)), en: src(E(1344)).en },
    { situation: 'Trop familier au guichet : tu sembles impoli. Dis plutôt', fr: fr(E(1351)), en: src(E(1351)).en },
    { situation: 'Trop soutenu avec tes amis : ils croient à une blague. Dis plutôt', fr: fr(E(1354)), en: src(E(1354)).en },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxPas', 'registre'],
};

const A8_SONNE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-sonne',
  layer: 'core',
  size: 'lg',
  title: 'Comment ça sonne',
  groups: [
    grp('Trop bas pour la personne', [
      free('Coucou Docteur, j’ai mal au dos.', 'Hi Doc, my back hurts.', 'chez le médecin'),
      free('Ouais, je sais pas trop.', 'Yeah, dunno really.', 'à un entretien d’embauche'),
      free('Bon, vous me le donnez, ce reçu ?', 'So, are you giving me that receipt?', 'à la caisse'),
    ], chk(
      'À ces personnes, ces phrases sonnent...',
      ['fâchées', 'négligentes, un peu impolies'], 1,
      "Trop familier : la personne se sent peu respectée. EN: too casual reads as careless.")),
    grp('Trop haut pour la personne', [
      free('Je ne dispose plus des fonds nécessaires pour la pizza.', 'I no longer have the necessary funds for the pizza.', 'à tes amis'),
      free('Pourriez-vous me passer le sel, je vous prie ?', 'Would you be so kind as to pass the salt?', 'à ton petit frère'),
      free('Je vous informe que je serai en retard.', 'I hereby inform you that I will be late.', 'à ton meilleur ami'),
    ], chk(
      'À ces personnes, ces phrases sonnent...',
      ['polies, parfaites', 'froides, ou ironiques', 'négligentes'], 1,
      "Trop soutenu : de la distance, ou une blague. EN: too formal reads as cold or ironic.")),
    ctl('La politesse', 'Être plus soutenu, c’est toujours être plus poli ?',
      ['Non : trop soutenu met de la distance.', 'Oui, toujours.'], 0,
      `La politesse, c'est ${POLITESSE_REF}. Le registre, c'est la bonne tenue. EN: politeness and register are two different things.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxPas'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Six faux pas à réparer',
  rule: {
    title: 'Trop bas, trop haut',
    body: "Trop familier, tu sembles négligent. Trop soutenu, tu sembles distant, ou fâché. La bonne tenue, c'est celle de ton lecteur. EN: too low reads careless, too high reads cold; the reader sets the outfit.",
  },
  cards: [
    { promptLabel: 'à ta sœur', promptSound: 'Je vous prie de m’excuser pour ce retard.', fr: fr(E(1349)), ipa: ipaOf(E(1349)), tip: "À ta sœur, la formule d'une lettre sonne comme un reproche. EN: a letter formula to a sister sounds like a reproach." },
    { promptLabel: 'à ta directrice', promptSound: "Salut, t'as reçu mon rapport ?", fr: fr(E(1350)), ipa: ipaOf(E(1350)), tip: "Salut et t'as : deux signes d'amis. EN: two friends' markers." },
    { promptLabel: 'au guichet de la mairie', promptSound: 'Je veux un formulaire, là.', fr: fr(E(1351)), ipa: ipaOf(E(1351)), tip: `Je voudrais, et s'il vous plaît : ${POLITESSE_REF}. EN: the polite conditional.` },
    { promptLabel: 'à ton colocataire', promptSound: "Auriez-vous l'amabilité de sortir les poubelles ?", fr: fr(E(1352)), ipa: ipaOf(E(1352)), tip: "Entre colocataires, la question simple. EN: the plain question between flatmates." },
    { promptLabel: 'à un client', promptSound: 'Ouais, pas de souci.', fr: fr(E(1353)), ipa: ipaOf(E(1353)), tip: "Ouais est un mot d'amis. Avec un client, oui. EN: ouais is for friends." },
    { promptLabel: 'au groupe des amis', promptSound: "Je vous remercie pour cette agréable soirée.", fr: fr(E(1354)), ipa: ipaOf(E(1354)), tip: "Tes amis croiraient à une blague. EN: your friends would think you were joking." },
  ],
  drill: [
    { promptSay: 'À ta directrice : « ... reçu mon rapport ? »', opts: ["T'as", 'Avez-vous'], correct: 1 },
    { promptSay: 'À ton colocataire : « ... sortir les poubelles ? »', opts: ['Tu peux', "Auriez-vous l'amabilité de"], correct: 0 },
    { promptSay: 'Au guichet : « Je ... un formulaire, s’il vous plaît. »', opts: ['veux', 'voudrais'], correct: 1 },
    { promptSay: 'À un client : « ..., bien sûr. »', opts: ['Ouais', 'Oui'], correct: 1 },
    { promptSay: 'À ta sœur : « ... pour le retard. »', opts: ['Pardon', 'Je vous prie de m’excuser'], correct: 0 },
    { promptSay: 'Au groupe des amis : « Merci pour l’invitation, c’est ... »', opts: ['trop sympa', 'fort aimable'], correct: 0 },
    { promptSay: 'À ta responsable : « Je serai ... demain matin. »', opts: ['pas là, tkt', 'absent'], correct: 1 },
    { promptSay: 'À ton meilleur ami : « ..., je peux pas venir samedi. »', opts: ['Cher Samir', 'Salut Samir'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Trop bas, trop haut' },
    { label: 'Six cartes', kind: 'cards', title: 'Le faux pas et sa réparation' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases qui vont' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-25-piege-faux-pas'),
  say: REFRAME,
  terms: ['fauxPas', 'lecteur'],
};

/** USE: Théo repairs both messages, out loud. */
const A8_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a8-scenario',
  layer: 'core',
  title: 'Théo répare',
  setting: "Mardi. Théo croise Mme Lacroix dans le couloir, puis Samir l'appelle. Tu parles pour Théo.",
  turns: [
    {
      ai: 'Bonjour Théo. Vous vouliez me parler de demain ?',
      en: 'Hello Théo. You wanted to talk to me about tomorrow?',
      user: fr(E(1348)),
      userEn: 'Sorry for that rather too casual message. (Courant, and an apology for the slip.)',
      alts: [
        { fr: 'Oui. Pardon pour mon message d’hier, il était un peu rapide.', en: 'Yes. Sorry about my message yesterday, it was a bit hasty.' },
        { fr: 'Oui, et excusez-moi pour le ton de mon message.', en: 'Yes, and sorry about the tone of my message.' },
      ],
    },
    {
      ai: 'Ce n’est rien. Alors, demain ?',
      en: 'It is nothing. So, tomorrow?',
      user: 'Je serai absent demain matin : j’ai un rendez-vous chez le dentiste.',
      userEn: 'I will be away tomorrow morning: I have a dentist appointment. (Courant, the same facts.)',
      alts: [
        { fr: fr(E(1342)), en: `${src(E(1342)).en} (Je serai absent le matin.)` },
        { fr: 'Je ne serai pas là demain matin, j’ai le dentiste.', en: 'I will not be in tomorrow morning, I have the dentist. (Fine out loud.)' },
      ],
    },
    {
      ai: 'Allô ? T’es fâché contre moi ?',
      en: 'Hello? Are you angry with me?',
      user: fr(E(1347)),
      userEn: 'Sorry, I wrote to you like a lawyer. (Familier: the tone of friends again.)',
      alts: [
        { fr: 'Mais non, pas du tout ! Mon message était bizarre, c’est tout.', en: 'No, not at all! My message was weird, that is all.' },
        { fr: 'Pas du tout, j’étais juste fatigué.', en: 'Not at all, I was just tired.' },
      ],
    },
    {
      ai: 'D’accord. Alors samedi, c’est non ?',
      en: 'Right. So Saturday is a no?',
      user: 'Non, je peux pas venir samedi, désolé. On se voit dimanche ?',
      userEn: "No, I can't come on Saturday, sorry. See you Sunday? (The ne dropped: normal with a friend.)",
      alts: [
        { fr: fr(E(1344)), en: `${src(E(1344)).en} (The message he should have sent.)` },
        { fr: 'Samedi, je peux pas. Mais dimanche, je suis libre.', en: "Saturday I can't. But Sunday I'm free." },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxPas', 'familier'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Trop haut', 'Trop soutenu avec un ami, ça sonne...',
    ['fâché, ou distant', 'très poli'], 0,
    "De la distance, là où il attend de la chaleur. EN: distance where warmth is expected."),
  ctl('Trop bas', 'Trop familier avec une responsable, ça sonne...',
    ['chaleureux', 'négligent'], 1,
    "Elle comprend, et elle remarque le ton. EN: she understands, and notices the tone."),
  ctl('Le vous', 'Théo écrit « Je vous informe » à Samir. Qu’est-ce qui ne va pas ?',
    ['tout le registre, vous compris', 'une faute de grammaire', 'rien du tout'], 0,
    `Le registre entier est trop haut. Le choix entre tu et vous, c'est ${NEXT_REF}. EN: the whole register is too high; tu or vous comes next lesson.`),
], ['fauxPas']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le faux pas',
    opener: {
      line: "Du bon français au mauvais endroit : ici tu vois comment un message trop bas ou trop haut est reçu. EN: Good French in the wrong place: here you see how a message pitched too low or too high lands.",
      imageRef: 'lessons/registres/act08.jpg',
    },
    sections: [],
    milestone: "Tu sais comment un faux pas de registre est reçu, dans les deux sens, et tu sais le réparer. EN: You know how a register slip lands in both directions, and how to repair it.",
    estScreens: 44, restPoints: ['a8-effets', 'a8-piege'],
  },
  sections: [A8_HISTOIRE, A8_EFFETS, A8_SONNE, A8_PIEGE, A8_SCENARIO, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — AU QUÉBEC
 *
 *  Two points, and only two: the familier reaches further in Québec (char,
 *  chum, blonde, plate, pantoute, frette), and some Québec words that sound
 *  « different » are plain COURANT there (courriel, fin de semaine, dîner,
 *  magasiner). No regional word is presented as universal, none as wrong.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La pause de midi, à Montréal',
  frSub: 'Deux collègues, en familier québécois',
  lines: [
    ln(E(1360)), ln(E(1361)), ln(E(1362)), ln(E(1363)),
    ln(E(1364)), ln(E(1365)), ln(E(1366)), ln(E(1367)),
  ],
  questions: [
    { q: 'Première phrase : où est la voiture ?', opts: ['chez un ami', 'au garage', 'dans la rue'], correct: 1, why: "« Mon char » : ma voiture, au Québec. EN: char means car in Québec." },
    { q: 'Deuxième phrase : que fait-elle samedi ?', opts: ['elle cuisine', 'elle fait les magasins'], correct: 1, why: 'Magasiner : faire les magasins. EN: magasiner means to go shopping.' },
    { q: '« C’est plate » : la fin de semaine sera...', opts: ['ennuyeuse', 'magnifique'], correct: 0, why: "Plate : ennuyeux. Il pleut tout le temps. EN: plate means boring." },
    { q: 'Quatrième phrase : qui travaille le soir ?', opts: ['son copain', 'sa copine', 'son patron'], correct: 0, why: 'Mon chum : mon copain. EN: chum means boyfriend.' },
    { q: '« Pantoute », ça veut dire...', opts: ['un peu', 'pas du tout'], correct: 1, why: "J'ai pas pantoute le goût : je n'ai pas du tout envie. EN: not at all." },
  ],
  audio: REC('rec-b1-25-montreal'),
  say: REFRAME,
  terms: ['quebec', 'familier'],
};

const A9_QUEBEC: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-quebec',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-quebec',
  title: 'Le registre, au Québec',
  frSub: 'Plus de familier, et un autre courant',
  hint: 'Quatre cartes. La dernière surprend.',
  audio: REC('rec-b1-25-quebec'),
  say: REFRAME,
  terms: ['quebec', 'courant'],
  cards: [
    {
      head: 'La voiture et les magasins', label: 'char, magasiner',
      fr: 'mon char · magasiner',
      sub: '[mohⁿ SHAR · ma-ga-zee-NAY]',
      body: "Char est familier : ta voiture. Magasiner, lui, est courant au Québec, même dans les publicités. En France, on dit faire les magasins. EN: char is informal; magasiner is standard in Québec.",
    },
    {
      head: 'Le chum et la blonde', label: 'les amoureux',
      fr: 'mon chum · ma blonde',
      sub: '[mohⁿ CHOMM · ma BLOHⁿD]',
      body: "Mon chum : mon copain, ou un bon ami. Ma blonde : ma copine, même si elle est brune. EN: boyfriend or buddy; girlfriend, whatever her hair.",
    },
    {
      head: 'Plate et pantoute', label: 'le goût',
      fr: "c'est plate · pas pantoute",
      sub: '[seh PLAT · pa pahⁿ-TOOT]',
      body: "C'est plate : c'est ennuyeux. Pas pantoute : pas du tout. Avoir le goût de : avoir envie de. EN: boring; not at all; to feel like.",
    },
    {
      head: 'Du courant, pas du familier', label: 'au Québec',
      fr: 'courriel · fin de semaine · dîner',
      sub: '[koo-RYEHL · fehⁿ duh suh-MEN · dee-NAY]',
      body: "Au Québec, ces mots sont du courant, même à l'écrit officiel. Le dîner, c'est le repas de midi. EN: standard Québec French, even in official writing; dîner is lunch.",
    },
  ],
};

const A9_TRADUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-traduire',
  layer: 'core',
  size: 'lg',
  title: 'De Montréal à Lyon',
  groups: [
    grp('À Montréal', [
      it(E(1360), 'char'),
      it(E(1362), 'plate'),
      it(E(1363), 'chum'),
      it(E(1364), 'pantoute'),
    ], chk(
      'Tu racontes la panne à un ami de Lyon. Tu dis...',
      ['Mon char est au garage.', 'Ma bagnole est au garage.'], 1,
      "À Lyon, char ne veut pas dire voiture : bagnole entre amis, voiture partout. EN: in Lyon, say bagnole or voiture.")),
    grp('Les mêmes phrases, en France', [
      it(E(1368), 'faire les magasins'),
      it(E(1369), 'ennuyeux, le week-end'),
      it(E(1370), 'mon copain'),
      it(E(1371), 'pas du tout envie'),
    ], chk(
      'Laquelle est courante en France comme au Québec ?',
      ["Je n'ai pas du tout envie de cuisiner.", "J'ai pas pantoute le goût de cuisiner.", "C'est plate, il pleut."], 0,
      "Le courant voyage partout. Le familier, moins. EN: courant travels; familier less so.")),
    ctl('Le repas', 'À Montréal, « On dîne ensemble ? » à midi, c’est...',
      ['une erreur d’heure', 'le repas de midi, en courant'], 1,
      "Au Québec, on déjeune le matin et on dîne à midi. EN: in Québec, dîner is lunch."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['quebec'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre mots qui voyagent mal',
  errors: [
    {
      wrong: 'À Lyon, à une collègue : « Mon chum vient me chercher. »',
      right: 'À Lyon, à une collègue : « Mon copain vient me chercher. »',
      why: "À Montréal, tout le monde comprend. À Lyon, chum ne dit rien. EN: understood in Montréal, not in Lyon.",
    },
    {
      wrong: "À ta directrice, à Montréal : « C'est plate, le rapport est pas prêt. »",
      right: "À ta directrice, à Montréal : « Le rapport n'est pas encore prêt, malheureusement. »",
      why: "Plate s'entend partout à Montréal, mais il reste familier. Avec ta directrice, le courant. EN: plate is common but still informal.",
    },
    {
      wrong: 'Dans une lettre à l’assurance, au Québec : « Mon char est brisé. »',
      right: `Dans une lettre à l’assurance, au Québec : « ${fr(E(1225))} »`,
      why: "Même au Québec, char reste du familier. Une assurance attend véhicule. EN: char is informal even in Québec.",
    },
    {
      wrong: 'À Paris, au restaurant, à midi : « Je voudrais dîner, s’il vous plaît. »',
      right: 'À Paris, au restaurant, à midi : « Je voudrais déjeuner, s’il vous plaît. »',
      why: "Au Québec, on dîne à midi. En France, le dîner est le soir. Même mot, autre heure. EN: same word, different mealtime.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['quebec', 'fauxPas'],
};

const A9_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a9-scenario',
  layer: 'core',
  title: 'La pause avec Geneviève',
  setting: "Geneviève, une collègue de Montréal, te parle en familier québécois à la pause. Tu la comprends, et tu lui réponds en français courant, gentiment.",
  turns: [
    {
      ai: 'Mon char est encore au garage, c’est plate.',
      en: 'My car is still at the garage, what a drag.',
      user: 'Ah non, ta voiture est encore au garage ? C’est ennuyeux.',
      userEn: 'Oh no, your car is still at the garage? That is annoying. (Courant, and you understood char and plate.)',
      alts: [
        { fr: 'Encore ? Tu veux que je te dépose ce soir ?', en: 'Again? Do you want me to drop you off tonight?' },
        { fr: 'Ah non, pas encore !', en: 'Oh no, not again!' },
      ],
    },
    {
      ai: 'Samedi, je vais magasiner au centre-ville. Tu viens ?',
      en: 'On Saturday I am going shopping downtown. Are you coming?',
      user: 'Oui, avec plaisir. On se retrouve à quelle heure ?',
      userEn: 'Yes, gladly. What time shall we meet? (Courant.)',
      alts: [
        { fr: 'Samedi, je ne peux pas, mais dimanche, oui.', en: 'Saturday I cannot, but Sunday, yes.' },
        { fr: "Bonne idée ! J'ai besoin d'un manteau.", en: 'Good idea! I need a coat.' },
      ],
    },
    {
      ai: 'On dîne ensemble à midi ?',
      en: 'Shall we have lunch together at noon?',
      user: 'Oui, bonne idée. On se retrouve à midi à la cafétéria ?',
      userEn: 'Yes, good idea. Shall we meet at noon in the cafeteria? (Dîner at noon: you understood.)',
      alts: [
        { fr: 'Avec plaisir, à midi.', en: 'Gladly, at noon.' },
        { fr: "Oui, on dîne ensemble. J'ai apporté mon lunch.", en: 'Yes, let us have lunch together. I brought my lunch. (Québec courant.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['quebec', 'courant'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Magasiner', '« Magasiner », au Québec, c’est...',
    ['du familier seulement', 'du courant'], 1,
    "Du courant : on le lit même dans les publicités. EN: standard in Québec."),
  ctl('Le chum', '« Mon chum », c’est...',
    ['mon copain, ou un bon ami', 'mon chien', 'mon chef'], 0,
    "Un copain, ou un bon ami. EN: a boyfriend or a good friend."),
  ctl('En voyage', 'Un mot familier québécois, à Paris...',
    ['est une faute', 'est parfois mal compris'], 1,
    "Pas une faute : un mot qui ne voyage pas. EN: not a mistake, a word that does not travel."),
], ['quebec']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Au Québec',
    opener: {
      line: "Mon char, ma blonde, c'est plate : à Montréal, le familier va plus loin, et ici tu apprends à le suivre. EN: Mon char, ma blonde, c'est plate: in Montréal informal French goes further, and here you learn to follow it.",
      imageRef: 'lessons/registres/act09.jpg',
    },
    sections: [],
    milestone: "Tu comprends le familier québécois, et tu sais quels mots du Québec sont du courant. EN: You understand Québec informal French and know which Québec words are standard.",
    estScreens: 36, restPoints: ['a9-quebec'],
  },
  sections: [A9_ECOUTE, A9_QUEBEC, A9_TRADUIRE, A9_ERREURS, A9_SCENARIO, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — LA MÊME NOUVELLE, DEUX FOIS
 *
 *  The production act: model, plan, where it matters, the role play, the
 *  TASK, then the closing sections in playbook order.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le vol annulé, deux fois',
  frSub: 'Le modèle de ta mission',
  text: MODELE_TEXT,
  glossary: [
    { word: 'Mauvaise nouvelle', en: 'bad news', note: 'Pour annoncer quelque chose de triste, entre amis.' },
    { word: 'pas de souci', en: 'no worries', note: 'Familier et courant : ce n’est pas un problème.' },
    { word: 'Objet', en: 'subject line', note: 'La ligne qui dit le sujet du courriel, avant la formule d’appel.' },
    { word: 'joignable', en: 'reachable', note: 'On peut te joindre.' },
    { word: 'contretemps', en: 'setback, hitch', note: 'Un problème qui change tes plans. Soutenu.' },
  ],
  questions: [
    { q: 'Quels faits sont dans les deux messages ?', a: 'Le vol annulé, la tempête, le retour le mardi au lieu du lundi.' },
    { q: 'Comment chaque message pose-t-il sa demande ?', a: "À Awa, la voix qui monte : Tu peux toujours venir me chercher ? À Mme Bouchard, l'inversion : Pourriez-vous me confirmer ?" },
    { q: 'Trouve trois marqueurs familiers dans le message à Awa.', a: "Salut, t'as pas (le ne est tombé), T'es la meilleure, Bisous." },
    { q: 'Pourquoi le taxi n’est-il pas dans le courriel ?', a: `Il n'intéresse pas Mme Bouchard. Elle veut savoir qui présente le rapport. Les étapes : ${MODELE_MOVES.join(' ; ')}.` },
  ],
  audio: REC('rec-b1-25-modele'),
  say: REFRAME,
  terms: ['lecteur', 'registre'],
};

const A10_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a10-plan',
  layer: 'core',
  title: 'Cinq étapes pour tes deux messages',
  steps: [
    '1. Écris d’abord les faits, une seule fois : quoi, quand, et ce que tu demandes. EN: write the facts once.',
    '2. Pour ton ami : Salut ou Coucou, la nouvelle, une question à la voix, Bisous ou À plus. EN: the friend message.',
    '3. Pour la responsable ou le service : l’objet, Bonjour Madame ou Madame, Monsieur, et vous. EN: the email opening.',
    '4. Dans le courriel : le ne gardé, pas d’abréviation, pas de mot familier, une question avec est-ce que ou l’inversion. EN: the email markers.',
    '5. Relis : les faits sont-ils les mêmes ? Chaque message garde-t-il sa tenue jusqu’à la fin ? EN: check facts and outfit.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lecteur', 'formule'],
};

const A10_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a10-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    { situation: 'Tu annonces un retard à ta responsable', fr: fr(E(1201)), en: src(E(1201)).en },
    { situation: 'Tu annonces un déménagement à un service', fr: fr(E(1286)), en: src(E(1286)).en },
    { situation: 'Tu annules un midi avec une amie', fr: fr(E(1204)), en: src(E(1204)).en },
    { situation: 'Tu annonces un changement de vol au bureau', fr: fr(E(1384)), en: src(E(1384)).en },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lecteur', 'registre'],
};

const A10_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a10-scenario',
  layer: 'core',
  title: 'Deux appels, une nouvelle',
  setting: "Ton vol est annulé. Tu appelles d'abord ton amie Awa, qui devait venir te chercher. Puis Mme Bouchard, ta responsable, t'appelle.",
  turns: [
    {
      ai: 'Allô ? Alors, tu rentres lundi ?',
      en: 'Hello? So, are you back on Monday?',
      user: 'Non, mon vol est annulé à cause de la tempête. Je rentre mardi soir.',
      userEn: 'No, my flight is cancelled because of the storm. I am back on Tuesday evening. (The facts, plainly.)',
      alts: [
        { fr: 'Mauvaise nouvelle : vol annulé, je rentre mardi soir.', en: 'Bad news: flight cancelled, I am back on Tuesday evening. (Familier: clipped.)' },
        { fr: fr(E(1381)), en: src(E(1381)).en },
      ],
    },
    {
      ai: 'Oh non ! Je viens te chercher mardi, alors ?',
      en: 'Oh no! I will come and get you on Tuesday, then?',
      user: "Oui, merci ! Si t'as pas le temps, pas de souci, je prendrai un taxi.",
      userEn: "Yes, thanks! If you haven't got time, no worries, I'll take a taxi. (Familier: t'as, and the ne dropped.)",
      alts: [
        { fr: fr(E(1391)), en: src(E(1391)).en },
        { fr: "Ce serait super. Sinon, je prends un taxi, t'inquiète.", en: "That would be great. Otherwise I'll take a taxi, don't worry." },
      ],
    },
    {
      ai: 'Mais non, je serai là. Tu m’envoies l’heure ?',
      en: 'Of course I will be there. Will you send me the time?',
      user: fr(E(1392)),
      userEn: "I'll send you the time tomorrow. (Familier: fine with a friend.)",
      alts: [
        { fr: "Oui, je t'écris demain matin. T'es la meilleure !", en: "Yes, I'll write tomorrow morning. You're the best!" },
        { fr: 'Promis. Merci, Awa.', en: 'Promise. Thanks, Awa.' },
      ],
    },
    {
      ai: 'Bonjour, ici Madame Bouchard. Vous rentrez bien lundi ?',
      en: 'Hello, Ms Bouchard here. You are back on Monday, right?',
      user: 'Bonjour Madame Bouchard. Malheureusement, mon vol est annulé à cause de la tempête.',
      userEn: 'Hello Ms Bouchard. Unfortunately, my flight is cancelled because of the storm. (Courant: the same fact, another outfit.)',
      alts: [
        { fr: 'Bonjour Madame. Non, mon vol a été annulé à cause de la tempête.', en: 'Hello. No, my flight was cancelled because of the storm.' },
        { fr: fr(E(1380)), en: src(E(1380)).en },
      ],
    },
    {
      ai: 'Je comprends. Et lundi, alors ?',
      en: 'I understand. And Monday, then?',
      user: fr(E(1384)),
      userEn: 'So I will not be able to be in the office on Monday. (Courant: the ne stays.)',
      alts: [
        { fr: fr(E(1385)), en: src(E(1385)).en },
        { fr: 'Je serai absent lundi, mais je reste joignable par courriel.', en: 'I will be away on Monday, but I remain reachable by email.' },
      ],
    },
    {
      ai: 'Et le rapport de lundi ?',
      en: 'And Monday’s report?',
      user: fr(E(1390)),
      userEn: 'Inès will present the report in my place. (Courant.)',
      alts: [
        { fr: 'Inès a accepté de le présenter, si cela vous convient.', en: 'Inès has agreed to present it, if that suits you. (Cela: careful.)' },
        { fr: "Je peux aussi l'envoyer par courriel dimanche soir.", en: 'I can also send it by email on Sunday evening.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lecteur', 'familier', 'courant'],
};

/** THE GRADED TASK. Announced in act 1; every act added one tool. */
const A10_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a10-mission',
  title: 'Ta nouvelle, deux fois',
  frSub: 'Mission écrite',
  brief: "Il t'arrive quelque chose : un vol annulé, un rendez-vous déplacé, une absence, un déménagement ou une bonne nouvelle. Choisis une nouvelle. Écris-la deux fois : d'abord un message à un ami, puis un courriel à ta responsable ou à une administration.",
  briefEn: 'Something is happening to you: a cancelled flight, a moved appointment, an absence, a move or some good news. Pick one piece of news. Write it twice: first a message to a friend, then an email to your manager or to an administration.',
  produce: "Écris deux textes sur la même nouvelle. Un message familier à un ami, de 30 à 60 mots. Un courriel courant ou soutenu, de 60 à 110 mots, avec un objet, une formule d'appel, une demande et une formule de fin. Les faits restent les mêmes.",
  responseSpec: { kind: 'text', minWords: 90, maxWords: 170 },
  rubric: {
    criteria: [
      {
        key: 'registre',
        label: 'Deux registres bien séparés',
        maxPoints: 4,
        descriptors: [
          '4 : Le message à ton ami est familier du début à la fin, et le courriel reste courant ou soutenu du début à la fin. Aucun mélange.',
          '3 : Les deux registres sont clairs, avec une phrase qui glisse dans l’autre tenue.',
          '2 : Un des deux textes mélange souvent les registres, ou les deux textes se ressemblent trop.',
          '1 : Les deux textes ont presque la même tenue : on ne voit pas qui lit.',
        ],
      },
      {
        key: 'marqueurs',
        label: 'Les mots et la grammaire du registre',
        maxPoints: 3,
        descriptors: [
          '3 : Dans le courriel, le ne est là, aucun mot familier, aucune abréviation, et la question est faite avec est-ce que ou l’inversion.',
          '2 : Un marqueur d’amis reste dans le courriel : un ne tombé, un mot comme bosser, ou une abréviation.',
          '1 : Plusieurs marqueurs d’amis dans le courriel.',
        ],
      },
      {
        key: 'formules',
        label: 'Le début et la fin',
        maxPoints: 3,
        descriptors: [
          '3 : Chaque texte s’ouvre et se ferme dans son registre, et le courriel a un objet.',
          '2 : Une formule ne va pas avec son lecteur, ou l’objet manque.',
          '1 : Les formules sont absentes, ou inversées : Cordialement à l’ami, Bisous dans le courriel.',
        ],
      },
      {
        key: 'tache',
        label: 'La même nouvelle, deux fois',
        maxPoints: 2,
        descriptors: [
          '2 : Deux textes, les mêmes faits, une demande dans le courriel, et la bonne longueur.',
          '1 : Un fait change d’un texte à l’autre, la demande manque, ou un texte est trop court.',
        ],
      },
    ],
  },
  scaffold: [
    'Salut ...,',
    'Devine quoi :',
    'Mauvaise nouvelle :',
    'Tu peux ... ?',
    'Objet :',
    'Bonjour Madame ...,',
    'Je ne pourrai donc pas',
    'Pourriez-vous ...',
  ],
  modelAnswer: "Coucou Léa ! Petite galère : ma fille a la varicelle, alors je reste à la maison toute la semaine. Je peux pas venir au resto jeudi, dsl. On remet ça à la semaine prochaine ? Je t'appelle ce week-end. Bisous ! Objet : absence à la formation du 14 mars. Madame, Monsieur, je suis inscrit à la formation en comptabilité du jeudi 14 mars. Ma fille est malade et je dois rester avec elle toute la semaine. Je ne pourrai donc pas assister à la séance de jeudi. Serait-il possible de m'inscrire à la prochaine session ? Pourriez-vous aussi m'envoyer les documents de la séance ? Je vous remercie par avance de votre réponse. Cordialement, Alex Martin",
  modelAnswerEn: "Hi Léa! Bit of a mess: my daughter has chickenpox, so I'm staying home all week. Can't make the restaurant on Thursday, sorry. Shall we do it next week? I'll call you this weekend. Love! Subject: absence from the 14 March training. Dear Sir or Madam, I am registered for the accounting training on Thursday 14 March. My daughter is ill and I must stay with her all week. I will therefore not be able to attend Thursday's session. Would it be possible to register me for the next session? Could you also send me the session documents? Thank you in advance for your reply. Regards, Alex Martin",
  watchFor: [
    {
      pattern: 'Texto abbreviations in the email (bcp, stp, dsl, rdv, jsp).',
      criterion: 'marqueurs',
      feedback: 'Dans le courriel, écris tout en entier : beaucoup, s’il vous plaît, désolé.',
      ref: 'a6-erreurs',
    },
    {
      pattern: 'A dropped ne in the email (je sais pas, je peux pas, c’est pas).',
      criterion: 'marqueurs',
      feedback: 'Dans le courriel, le ne revient : je ne peux pas, je ne sais pas.',
      ref: 'a4-erreurs',
    },
    {
      pattern: "Spoken grammar in the email: t'as, t'es, y a, ça instead of cela in a formal sentence, a question by intonation only.",
      criterion: 'marqueurs',
      feedback: "Écris tu as, il y a, et pose ta question avec est-ce que ou l'inversion.",
      ref: 'a4-reperer',
    },
    {
      pattern: 'A familiar word left in the email (bagnole, bosser, boulot, crevé, pote, plus un rond).',
      criterion: 'marqueurs',
      feedback: 'Change le mot, pas la phrase : voiture, travailler, très fatigué.',
      ref: 'a3-piege',
    },
    {
      pattern: 'Québec familiar words in the email to an administration (char, plate, pantoute, chum).',
      criterion: 'marqueurs',
      feedback: 'Même au Québec, char et plate restent familiers. Dans le courriel : voiture, ennuyeux.',
      ref: 'a9-erreurs',
    },
    {
      pattern: 'Openings and closings in the wrong register: Bisous or À plus in the email, Cordialement to the friend, Salut Madame.',
      criterion: 'formules',
      feedback: 'La première et la dernière ligne suivent le lecteur : Bisous pour ton ami, Cordialement pour le courriel.',
      ref: 'a7-erreurs',
    },
    {
      pattern: 'No subject line or no greeting in the email.',
      criterion: 'formules',
      feedback: "Ajoute l'objet, puis Bonjour Madame ou Madame, Monsieur.",
      ref: 'a10-plan',
    },
    {
      pattern: 'The friend message pitched too high (je vous informe, cela, inversion, a letter formula).',
      criterion: 'registre',
      feedback: 'Ton ami va croire que tu es fâché. Écris-lui comme tu lui parles.',
      ref: 'a8-sonne',
    },
    {
      pattern: 'The email pitched too low overall, reading like a text to a friend.',
      criterion: 'registre',
      feedback: 'Relis ton courriel comme ta responsable le lira : chaque phrase doit porter sa tenue.',
      ref: 'a8-piege',
    },
    {
      pattern: 'The facts differ between the two texts (another date, another reason), or the email has no request.',
      criterion: 'tache',
      feedback: 'Les faits restent les mêmes ; seule la tenue change. Et le courriel demande quelque chose.',
      ref: 'a5-qui',
    },
    {
      pattern: 'Only one text, or a text far outside its word range.',
      criterion: 'tache',
      feedback: 'Relis la mission : un message à un ami, puis un courriel, sur la même nouvelle.',
      ref: 'a10-plan',
    },
  ],
  graderNotes: [
    'Count the words of the two BODIES only: the subject line, the greetings and the sign-offs do not count. Total 90 to 170 with 10% tolerance (81 to 187); each text roughly within its own range (30-60, 60-110) before criterion « tache » loses its point.',
    'In the FRIEND message, texto abbreviations (dsl, bcp, tkt), the dropped ne, t’as, y a, on and familiar words are EXPECTED and must never be marked as errors. They are evidence for criterion « registre ».',
    'In the EMAIL, est-ce que questions are fully acceptable; inversion is not required (b1.21 owns it). Courant is enough for a manager; soutenu is welcome for an administration.',
    'tu or vous belongs to b1.26. Expect vous to a manager or an administration and do not penalise tu to a friend. Do not explain the tu / vous choice in feedback beyond one line.',
    'Accept Québec courant words everywhere (courriel, fin de semaine, dîner for lunch, magasiner, Au plaisir). Québec familiar words (char, chum, blonde, plate, pantoute) are right in the friend message and count as familiar markers in the email.',
    'The subjunctive belongs to b1.14 to b1.16. Do not ask for it and do not mark a correct one as an error.',
    'Grammar mistakes that do not touch register (an agreement, a tense) are noted once in feedback but do not cost points here.',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lecteur', 'registre', 'formule'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A10_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a10-parler',
  layer: 'core',
  title: 'Dis chaque tenue à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['familier', 'courant', 'soutenu'],
};

const A10_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a10-cheat',
  layer: 'core',
  sheetId: 'sheet-registres',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le familier', v: 'amis, famille, textos', say: fr(E(1223)),
      detail: { title: 'Le familier', body: "Bagnole, bosser, le ne qui tombe, t'as, y a. Pas une faute : une tenue d'amis. EN: not a mistake, friends' dress.", say: fr(E(1226)) } },
    { k: 'le courant', v: 'presque tout le monde', say: fr(E(1224)),
      detail: { title: 'Le courant', body: "Le ne gardé, les mots en entier, est-ce que. Si tu hésites, prends-le. EN: when in doubt.", say: fr(B120(1168)) } },
    { k: 'le soutenu', v: 'lettres, discours', say: fr(E(1225)),
      detail: { title: 'Le soutenu', body: "Ouvrage, véhicule, cela, l'inversion. Avec un ami, il sonne froid. EN: cold with a friend.", say: fr(E(1228)) } },
    { k: 'les marqueurs', v: 'ne, nous, la question, cela', say: fr(E(1276)),
      detail: { title: 'Les marqueurs', body: "Ils changent la tenue sans changer le sens. EN: they change the outfit, not the meaning.", say: fr(E(1273)) } },
    { k: 'les formules', v: 'la première et la dernière ligne', say: fr(E(1330)),
      detail: { title: 'Les formules', body: "La première ligne annonce, la dernière confirme. Réponds dans la tenue reçue. EN: mirror what you received.", say: fr(E(1331)) } },
    { k: 'le faux pas', v: 'trop bas, trop haut', say: fr(E(1346)),
      detail: { title: 'Le faux pas', body: "Trop familier : négligent. Trop soutenu : distant. EN: careless or cold.", say: fr(E(1348)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'marqueur', 'formule'],
};

const A10_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a10-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu reconnais les trois registres, à l'oral et à l'écrit. Tu sais changer un mot, un marqueur de grammaire, une première et une dernière ligne, et tu as écrit la même nouvelle pour deux lecteurs. Le piège qui reste est discret : un seul petit marqueur d'amis dans un courriel soigné, un ne tombé ou un bcp. Avant l'examen, relis ton courriel et souligne chaque ne, chaque abréviation et chaque mot familier. EN: Reread your email and underline every ne, every abbreviation and every familiar word.",
  stats: [
    { k: 'Les registres', v: 'familier, courant, soutenu' },
    { k: 'Les marqueurs', v: 'ne, nous, la question, cela' },
    { k: 'Les formules', v: 'le début et la fin' },
    { k: 'Le lecteur', v: 'les faits restent, la tenue change' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TEN rounds of eight, one per act from 1 to 9 plus an
 *  integration round on the model. Workshop shape: most questions ask
 *  which version fits WHICH reader, and typeIn is a short rewrite into the
 *  asked register, never a spelling test. `fold()` strips accents, commas,
 *  apostrophes and hyphens, so every rewrite turns on WORDS (ne, nous,
 *  voiture, beaucoup), never on punctuation. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Pour ce lecteur, un mot ou une forme ne va pas. Écris la phrase qui va. EN: One word or form does not fit this reader; write the sentence that does.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A10_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a10-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-registre', label: 'Le registre', targets: ['registre-juge'],
      questions: [
        mc('Inès écrit « Je bosse de la maison » à Chloé. C’est...', ['une faute', 'du familier, pour une amie'], 1, "Juste, en tenue d'amis. EN: correct, in friends' dress.", 'a1-reperer'),
        mc('Tu préviens ta nouvelle responsable d’un retard. Quel message ?', [fr(E(1200)), fr(E(1201))], 1, 'Une responsable que tu connais peu attend le courant. EN: a new manager expects courant.', 'a1-scene'),
        lC('Écoute. À qui Inès écrit-elle ?', fr(E(1211)), ['à Chloé, son amie', 'à Mme Bouchard'], 0, 'Le petit : familier, pour une amie. EN: familiar, for a friend.', 'a1-lecture'),
        tI('Écris la version pour Mme Bouchard.', '« Je bosse de la maison aujourd’hui. »', fr(E(1203)), "Travailler, pas bosser. EN: travailler, not bosser.", 'a1-reperer', ["Je travaille de la maison aujourd'hui."]),
        mc('Entre les deux messages d’Inès, qu’est-ce qui change ?', ['les faits', 'la date', 'la tenue'], 2, 'Les faits restent, la tenue change. EN: facts stay, outfit changes.', 'a1-check'),
        eS('À Mme Bouchard : « Je pourrai pas venir à la réunion de midi. »', fr(E(1205)), "Dans un courriel, le ne revient. EN: ne comes back in an email.", 'a1-lecture'),
        mc('« Bisous » et « Merci de votre compréhension » sont...', ['deux fautes', 'deux fins, pour deux lecteurs'], 1, 'Chaque fin va avec sa lectrice. EN: each ending fits its reader.', 'a1-lecture'),
        mc('Qui choisit le registre d’un message ?', ['le lecteur et le moment', 'la grammaire', 'la longueur'], 0, 'La personne qui lit, et quand. EN: who reads it, and when.', 'a1-check'),
      ],
    },
    {
      id: 'r2-trois', label: 'Trois registres', targets: ['registres-confondus'],
      questions: [
        lC('Écoute. Quel registre ?', fr(E(1222)), ['familier', 'courant', 'soutenu'], 2, 'Ouvrage et l’inversion : soutenu. EN: formal.', 'a2-ecoute'),
        lC('Écoute. Quel registre ?', fr(E(1226)), ['familier', 'courant', 'soutenu'], 0, "J'en sais rien : familier. EN: informal.", 'a2-ecoute'),
        mc('Tu ne sais pas qui va lire. Tu choisis...', ['le familier', 'le courant', 'le soutenu'], 1, 'Le courant va avec presque tout le monde. EN: courant suits almost everyone.', 'a2-trois'),
        tI('Écris la version courante.', '« Je suis crevé. »', fr(E(1230)), 'Très fatigué : le courant. EN: the everyday form.', 'a2-trier', ['Je suis fatigué.']),
        tI('Écris la version courante.', '« Tu me conseilles un bouquin ? »', fr(E(1221)), 'Livre, pas bouquin. EN: livre, not bouquin.', 'a2-trois', ['Tu me conseilles un livre ?', 'Tu peux me conseiller un livre ?']),
        mc('« Votre ami est fort aimable » : où l’entends-tu ?', ['au café', 'dans un discours', 'par texto'], 1, 'Fort aimable : soutenu. EN: formal.', 'a2-trier'),
        eS('À ton frère : « Je l’ignore. »', fr(E(1226)), "À ton frère, le familier. Je l'ignore sonne froid. EN: too cold for a brother.", 'a2-erreurs', ['Je ne sais pas.', 'Je sais pas.']),
        mc('« Pote » est...', ['un mot soutenu', 'un mot familier'], 1, 'Un mot d’amis. EN: a friends’ word.', 'a2-check'),
      ],
    },
    {
      id: 'r3-mots', label: 'Les mots', targets: ['mot-familier'],
      questions: [
        mc('Dans ton CV, tu écris...', ['J’ai cherché du boulot.', 'J’ai cherché un emploi.'], 1, 'Un CV attend emploi. EN: a CV expects emploi.', 'a3-assortir'),
        tI('Réécris pour ta banque.', '« J’ai plus un rond. »', fr(E(1245)), "Le ne revient, et l'argent remplace le rond. EN: ne and argent.", 'a3-piege'),
        tI('Réécris pour ta directrice.', '« Je bosse demain. »', fr(E(1259)), 'Travailler va partout. EN: travailler goes anywhere.', 'a3-piege'),
        lC('Écoute. Quel mot est familier ?', fr(E(1246)), ['soir', 'bouquine', 'peu'], 1, 'Bouquiner : lire, entre amis. EN: to read, informally.', 'a3-lecture'),
        eS('Au garage, par courriel : « Ma bagnole est tombée en panne. »', 'Ma voiture est tombée en panne.', 'Voiture, pas bagnole. EN: voiture, not bagnole.', 'a3-piege', ['Mon véhicule est tombé en panne.']),
        mc('Bouquin, livre, ouvrage : lequel va partout ?', ['bouquin', 'ouvrage', 'livre'], 2, 'Livre, le mot courant. EN: the everyday word.', 'a3-triples'),
        mc('« Se restaurer », tu le lis...', ['sur un panneau d’autoroute', 'dans un texto'], 0, 'Un mot soutenu, pour les panneaux et les hôtels. EN: formal, for signs.', 'a3-triples'),
        tI('Réécris pour ton meilleur ami.', '« Je suis exténué. »', fr(E(1229)), 'Le piège inverse : trop soutenu pour un ami. EN: too formal for a friend.', 'a3-piege', ['Je suis très fatigué.', 'Je suis fatigué.']),
      ],
    },
    {
      id: 'r4-marqueurs', label: 'Les marqueurs', targets: ['marqueur-oral'],
      questions: [
        tI('Réécris pour un courriel à ton directeur.', '« Je sais pas si la salle est libre. »', 'Je ne sais pas si la salle est libre.', 'Le ne revient à l’écrit. EN: ne returns in writing.', 'a4-erreurs'),
        tI('Réécris pour un rapport.', '« On a fini le projet en mars. »', 'Nous avons fini le projet en mars.', 'Nous, dans un rapport. EN: nous in a report.', 'a4-erreurs'),
        eS('À ta propriétaire : « Y a une fuite dans la salle de bains. »', 'Il y a une fuite dans la salle de bains.', 'Il y a, en entier. EN: il y a in full.', 'a4-reperer'),
        lC('Écoute. Quel marqueur entends-tu ?', fr(E(1261)), ['cela', 'nous', 'le ne qui tombe'], 2, '« ça répond pas » : pas de ne. EN: no ne.', 'a4-ecoute'),
        mc('Dans une lettre soignée : « ... me convient tout à fait. »', ['Ça', 'Cela'], 1, 'Cela, à l’écrit soigné. EN: cela in careful writing.', 'a4-marqueurs'),
        mc('« T’as vu l’heure ? » en courant, c’est...', ["Tu as-tu vu l'heure ?", "Tu as vu l'heure ?"], 1, 'Tu as, en entier. EN: tu as in full.', 'a4-reperer'),
        eS('Dans une lettre à la mairie : « Vous avez reçu mon dossier ? »', 'Avez-vous reçu mon dossier ?', 'Une lettre ne sait pas que ta voix monte. EN: a letter cannot hear your voice rise.', 'a4-erreurs', ['Est-ce que vous avez reçu mon dossier ?']),
        mc('Quel message porte quatre marqueurs d’amis ?', ["T'es où ? Y a une séance, tu viens ou pas ?", 'Où es-tu ? Il y a une séance. Viens-tu ?'], 0, "T'es, y a, pas de ne, la voix qui monte. EN: four friends' markers.", 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-lecteurs', label: 'Trois lecteurs', targets: ['lecteur-oublie'],
      questions: [
        mc('Sami annonce son déménagement à trois lecteurs. Qu’est-ce qui ne change pas ?', ['la première ligne', 'la date', 'la question'], 1, 'Les faits restent. EN: the facts stay.', 'a5-qui'),
        mc('« Je reste à votre disposition pour tout renseignement. » Pour qui ?', ['Chloé', 'Marc', 'le service'], 2, 'La tenue d’un service. EN: service dress.', 'a5-qui'),
        lC('Écoute. Pour quel lecteur ?', fr(E(1283)), ['une amie proche', 'un collègue', 'un service officiel'], 1, "Je t'annonce : courant, avec tu. EN: courant, to a colleague.", 'a5-tableau'),
        tI('Réécris pour le service.', '« Est-ce que tu peux mettre à jour mon dossier ? »', fr(E(1287)), 'Vous, et l’inversion pour une lettre. EN: vous and inversion.', 'a5-tableau', ['Pouvez-vous mettre à jour mon dossier ?', 'Est-ce que vous pouvez mettre à jour mon dossier ?']),
        mc('Dans le courriel au service, Sami parle-t-il de la pizza ?', ['oui', 'non'], 1, 'Le lecteur choisit aussi le contenu. EN: the reader shapes the content.', 'a5-lecture'),
        mc('Pour Chloé, « Je vous informe de mon changement d’adresse » devient...', ["Je t'informe de mon changement d'adresse.", 'Devine quoi, je déménage !'], 1, 'Pour une amie, la nouvelle, comme on la dit. EN: say it the way you would say it.', 'a5-choisir'),
        eS('À ton club de sport : « Nouveau num ! Note-le. »', 'Je vous informe de mon nouveau numéro de téléphone.', 'Un club est un service : vous, et les mots en entier. EN: a club is a service.', 'a5-choisir', ['Voici mon nouveau numéro de téléphone.', 'Je vous envoie mon nouveau numéro de téléphone.']),
        mc('Tu changes de lecteur. Tu changes d’abord...', ['la première ligne et le pronom', 'la date'], 0, 'Le début annonce la tenue. EN: the opening sets the outfit.', 'a5-check'),
      ],
    },
    {
      id: 'r6-textos', label: 'Les textos', targets: ['abreviation'],
      questions: [
        mc('« jsp » veut dire...', ['je suis parti', 'je sais pas'], 1, 'Je sais pas, en trois lettres. EN: dunno.', 'a6-abrev'),
        mc('« tkt » veut dire...', ['tu te tais', "t'inquiète", 'tout à l’heure'], 1, "T'inquiète : ne t'inquiète pas. EN: don't worry.", 'a6-abrev'),
        tI('Écris en entier.', '« merci bcp »', 'merci beaucoup', 'bcp : beaucoup. EN: a lot.', 'a6-decoder'),
        tI('Écris en entier.', '« rdv à 18 h »', 'rendez-vous à 18 h', 'rdv : rendez-vous. EN: meeting.', 'a6-decoder', ['rendez-vous à dix-huit heures']),
        eS('À ta propriétaire : « Merci bcp pour la réparation. »', 'Merci beaucoup pour la réparation.', 'Pour elle, le mot en entier. EN: in full for her.', 'a6-erreurs'),
        lC('Écoute. En texto, cette phrase s’écrit...', fr(E(1311)), ['dsl, on rentre tôt', 'tkt, on rentre tôt'], 1, "T'inquiète : tkt. EN: tkt.", 'a6-scenario'),
        mc('Où écris-tu « mdr » ?', ['dans un courriel à ton équipe', 'dans une candidature', 'à tes amis, par texto'], 2, 'Entre amis seulement. EN: friends only.', 'a6-check'),
        mc('Au Québec, pour rire, on écrit souvent...', ['lol', 'pk'], 0, 'lol, comme en anglais. EN: lol.', 'a6-abrev'),
      ],
    },
    {
      id: 'r7-formules', label: 'Ouvrir et fermer', targets: ['formule-mal-assortie'],
      questions: [
        mc('« Bonjour Madame Tremblay, » : quelle fin ?', ['Bisous', 'Cordialement', 'À plus'], 1, 'Madame et le nom appellent Cordialement. EN: title and surname.', 'a7-paires'),
        mc('À ta sœur, tu finis par...', ['Bisous', 'Cordialement'], 0, 'Cordialement à ta sœur sonne comme une dispute. EN: sounds like a quarrel.', 'a7-erreurs'),
        eS('À une inconnue : « Salut Madame, »', 'Bonjour Madame,', 'Salut et Madame ne vont pas ensemble. EN: two outfits mixed.', 'a7-erreurs', ['Madame,']),
        lC('Écoute. Pour qui est cette fin ?', fr(B121(1185)), ['une amie', 'un collègue', 'une lettre officielle'], 2, `La formule longue, celle de ${INVERSION_REF}. EN: the long formal closing.`, 'a7-formules'),
        tI('Écris la formule d’appel pour un service dont tu ne connais pas le nom.', 'Début du courriel : ...', 'Madame, Monsieur,', 'Madame, Monsieur, sans nom. EN: no name known.', 'a7-formules', ['Madame, Monsieur']),
        mc('Un collègue t’écrit « Bonjour Sami, ... Bonne journée ». Tu réponds par...', ["Je vous prie d'agréer mes salutations distinguées.", 'Bonne journée à toi aussi.'], 1, 'Réponds dans la tenue reçue. EN: mirror it.', 'a7-erreurs'),
        mc('« Au plaisir » est une fin...', ['courante au Québec', 'de texto entre amis'], 0, 'Courant et aimable, au Québec. EN: a Québec sign-off.', 'a7-paires'),
        tI('Écris une fin de courriel courante, en un mot.', 'Pour un client : ...', 'Cordialement', 'Cordialement, la fin passe-partout. EN: the all-purpose ending.', 'a7-formules', ['Cordialement,']),
      ],
    },
    {
      id: 'r8-faux-pas', label: 'Le faux pas', targets: ['faux-pas'],
      questions: [
        mc('« Cher Samir, je vous informe » à ton meilleur ami sonne...', ['très gentil', 'fâché, ou distant'], 1, 'Trop soutenu met de la distance. EN: too formal is distant.', 'a8-histoire'),
        mc('« Coucou, je bosse pas demain » à ta responsable sonne...', ['négligent', 'poli'], 0, 'Trop familier. EN: too casual.', 'a8-effets'),
        eS('Au guichet de la mairie : « Je veux un formulaire, là. »', fr(E(1351)), `Je voudrais, et s'il vous plaît : ${POLITESSE_REF}. EN: the polite conditional.`, 'a8-piege', ['Je voudrais un formulaire.']),
        eS("À ton colocataire : « Auriez-vous l'amabilité de sortir les poubelles ? »", fr(E(1352)), 'Entre colocataires, la question simple. EN: the plain question.', 'a8-piege', ['Est-ce que tu peux sortir les poubelles ?']),
        lC('Écoute. À qui peux-tu dire ça ?', fr(E(1354)), ['à un client', 'à tes amis', 'à la mairie'], 1, 'Trop sympa : familier. EN: familiar.', 'a8-piege'),
        mc('Être plus soutenu, c’est toujours être plus poli ?', ['non', 'oui'], 0, 'Trop soutenu, c’est aussi un faux pas. EN: too formal is also a slip.', 'a8-sonne'),
        tI('Réécris pour un client.', '« Ouais, pas de souci. »', fr(E(1353)), 'Oui, pas ouais. EN: oui, not ouais.', 'a8-piege', ['Oui, bien sûr.', 'Oui, aucun problème.', 'Oui, pas de problème.']),
        mc('Théo répare son message à Samir. Il dit...', ['Je vous prie de m’excuser pour ce contretemps.', fr(E(1347))], 1, 'Retour au familier, avec un sourire. EN: back to friends’ dress.', 'a8-scenario'),
      ],
    },
    {
      id: 'r9-quebec', label: 'Au Québec', targets: ['quebec-universel'],
      questions: [
        lC('Écoute. De quoi parle-t-elle ?', fr(E(1360)), ['de son chien', 'de sa voiture', 'de son travail'], 1, 'Char : voiture, au Québec. EN: car.', 'a9-ecoute'),
        mc('« Ma blonde », c’est...', ['ma sœur', 'ma copine'], 1, 'Ma copine, même si elle est brune. EN: my girlfriend.', 'a9-quebec'),
        mc('« Magasiner », au Québec, c’est...', ['du courant', 'du familier seulement'], 0, 'Du courant, même dans les publicités. EN: standard.', 'a9-quebec'),
        tI('Dis-le en courant, pour la France.', '« Mon chum travaille de soir. »', 'Mon copain travaille le soir.', 'Chum : copain. EN: boyfriend.', 'a9-traduire', ['Mon ami travaille le soir.', 'Mon copain travaille de soir.']),
        tI('Dis-le en courant.', "« C'est plate. »", "C'est ennuyeux.", 'Plate : ennuyeux. EN: boring.', 'a9-traduire', ["C'est dommage.", 'Ce n’est pas drôle.']),
        eS('Dans une lettre à l’assurance : « Mon char est brisé. »', fr(E(1225)), 'Même au Québec, char reste familier. EN: still informal.', 'a9-erreurs', ['Ma voiture est en panne.', 'Mon véhicule est en panne.', 'Ma voiture est brisée.']),
        mc('À Montréal, « on dîne » à...', ['vingt heures', 'midi'], 1, 'Le dîner, c’est le repas de midi. EN: lunch.', 'a9-traduire'),
        mc('Un mot familier québécois, à Paris, est...', ['parfois mal compris', 'une faute'], 0, 'Un mot qui ne voyage pas. EN: a word that does not travel.', 'a9-check'),
      ],
    },
    {
      id: 'r10-nouvelle', label: 'La même nouvelle', targets: ['nouvelle-deformee'],
      questions: [
        mc('Dans le modèle, qu’est-ce qui est pareil dans les deux messages ?', ['les formules', 'les faits', 'la question'], 1, 'Les faits restent, la tenue change. EN: facts stay.', 'a10-lecture'),
        mc('Quelle ligne va dans le courriel à Mme Bouchard ?', [fr(E(1384)), fr(E(1382))], 0, 'Le ne gardé, donc, pas de souci en moins. EN: the careful line.', 'a10-lecture'),
        lC('Écoute. Ce message va à...', fr(E(1383)), ['Mme Bouchard', 'Awa'], 1, "T'es la meilleure : pour une amie. EN: for a friend.", 'a10-scenario'),
        tI('Réécris pour Mme Bouchard.', '« Tu peux me confirmer que ça te va ? »', fr(E(1386)), 'Vous, l’inversion et cela. EN: vous, inversion, cela.', 'a10-lecture', ['Pouvez-vous me confirmer que cela vous convient ?', 'Est-ce que vous pouvez me confirmer que cela vous convient ?', 'Pouvez-vous me confirmer que cela vous va ?']),
        eS('Dans le courriel à Mme Bouchard : « Mon vol est annulé, dsl. »', 'Mon vol est annulé, je suis désolé.', 'Pas d’abréviation dans un courriel. EN: no abbreviations.', 'a10-plan', ['Mon vol est annulé.', 'Mon vol est annulé, je suis désolée.', 'Mon vol est annulé, toutes mes excuses.']),
        mc('Le taxi est dans le message à Awa, pas dans le courriel. Pourquoi ?', ['c’est un mot familier', 'il intéresse Awa, pas Mme Bouchard'], 1, 'Le lecteur choisit aussi le contenu. EN: the reader shapes the content.', 'a10-lecture'),
        mc('Pour finir le courriel, Alex écrit...', ['Cordialement', 'Bisous', 'À plus'], 0, 'La fin du courant. EN: the everyday closing.', 'a10-lecture'),
        tI('Complète le début du courriel.', '« ... Madame Bouchard, »', 'Bonjour', 'Bonjour, puis Madame et le nom. EN: Bonjour, then title and name.', 'a10-plan', ['Bonjour Madame Bouchard,']),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule (no slot above 40%) is checked on AUTHORED order,
 *  although LessonRich reshuffles options on every attempt. So after
 *  authoring, each closed question's options are ROTATED, with `correct`
 *  moved in step, onto whichever allowed slot is least used so far. The
 *  option set and the right answer are unchanged; only the order moves, as
 *  the build log's 2026-09-24 rebalancing did by hand. No `why` in this quiz
 *  names a position. */
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
spreadSlots(A10_QUIZ);

const A10_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a10-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'le familier', back: 'amis, famille, textos', say: fr(E(1223)) },
    { front: 'le courant', back: 'presque tout le monde', say: fr(E(1224)) },
    { front: 'le soutenu', back: 'lettres, discours, livres', say: fr(E(1225)) },
    { front: 'a book, three ways', back: 'bouquin, livre, ouvrage', say: fr(E(1221)) },
    { front: 'le ne, à l’écrit', back: 'il revient', say: fr(E(1276)) },
    { front: 'bcp, stp, jsp', back: 'beaucoup, s’il te plaît, je sais pas', say: fr(E(1313)) },
    { front: 'Bonjour Madame Tremblay,', back: 'Cordialement', say: fr(E(1330)) },
    { front: 'trop soutenu avec un ami', back: 'distant, ou fâché', say: fr(E(1346)) },
    { front: 'mon char, au Québec', back: 'ma voiture', say: fr(E(1360)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A10_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a10-roundup',
  layer: 'core',
  title: 'Les registres, en résumé',
  body: `${REFRAME} Tu sais maintenant reconnaître le familier, le courant et le soutenu, et changer un message de tenue sans changer les faits. ${Cap(NEXT_REF)} prend un choix que tu as vu passer partout ici : tu ou vous. EN: Next lesson: tu or vous.`,
  points: [
    'Le familier va avec les amis, le courant presque partout, le soutenu avec les lettres.',
    'Un mot, un ne ou une abréviation suffit à changer la tenue.',
    'La première et la dernière ligne annoncent le registre.',
    'Trop bas sonne négligent, trop haut sonne distant.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'fauxPas'],
};

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'La même nouvelle, deux fois',
    opener: {
      line: "Un vol annulé, deux messages : ici tu écris ta nouvelle pour un ami, puis pour un bureau. EN: A cancelled flight, two messages: here you write your news for a friend, then for an office.",
      imageRef: 'lessons/registres/act10.jpg',
    },
    sections: [],
    milestone: "Tu as écrit la même nouvelle dans deux registres et passé l'examen : quatre-vingts questions, dix rounds. EN: You wrote the same news in two registers and sat the exam: eighty questions, ten rounds.",
    estScreens: 130,
    restPoints: ['a10-scenario', 'a10-mission', 'a10-cheat', 'a10-quiz/r3-mots', 'a10-quiz/r6-textos', 'a10-quiz/r9-quebec'],
  },
  sections: [
    A10_LECTURE, A10_PLAN, A10_USAGES, A10_SCENARIO, A10_MISSION, A10_PARLER,
    A10_CHEAT, A10_PROGRESS, A10_QUIZ, A10_REVIEW, A10_ROUNDUP,
  ],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-registre', title: 'Pour une amie, ou pour une responsable', format: 'sort' as const, coach: "Deux piles. Demande-toi qui va lire : Chloé, ou Mme Bouchard. EN: sort by who will read it.", buckets: ['pour une amie', 'pour une responsable'], items: [E(1202), E(1203), E(1204), E(1205), E(1207), E(1208)], audio: AUDIO },
  { id: 'd-trois', title: 'Trois tenues', format: 'mcq' as const, coach: "Si tu ne connais pas la personne, le courant. EN: when you do not know the person, courant.", q: "Laquelle dis-tu à quelqu'un que tu ne connais pas ?", opts: ['Je suis crevé.', 'Je suis très fatigué.'], correct: 1, why: 'Le courant va avec tout le monde. EN: courant suits everyone.', items: [E(1220), E(1221), E(1222), E(1229), E(1230), E(1231)], audio: AUDIO },
  { id: 'd-mots', title: 'Le mot des amis, le mot de tous', format: 'sort' as const, coach: "Deux piles : le mot familier, et le mot courant. EN: sort familier from courant.", buckets: ['familier', 'courant'], items: [E(1240), E(1241), E(1244), E(1245), E(1246), E(1247)], audio: AUDIO },
  { id: 'd-marqueurs', title: 'Le ne et ses amis', format: 'mcq' as const, coach: "Pour un courriel : le ne, nous, il y a, tu as. EN: for an email, restore ne, nous, il y a, tu as.", q: 'Pour un courriel, laquelle ?', opts: ['Je ne sais pas si Moussa a les billets.', 'Je sais pas si Moussa a les billets.'], correct: 0, why: 'Le ne revient à l’écrit. EN: ne returns in writing.', items: [E(1261), E(1263), E(1267), E(1268), E(1276), E(1273)], audio: AUDIO },
  { id: 'd-lecteur', title: 'Trois lecteurs', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute, et dis pour qui elle est. EN: read each aloud and say who it is for.", items: [E(1280), E(1283), E(1286), E(1287), E(1293), E(1290)], audio: AUDIO },
  { id: 'd-textos', title: 'En entier', format: 'mcq' as const, coach: "Dans un courriel, chaque mot en entier. EN: every word in full in an email.", q: '« bcp » en entier ?', opts: ['beaucoup', 'bientôt'], correct: 0, why: 'b, c, p : beaucoup. EN: beaucoup.', items: [E(1304), E(1307), E(1302), E(1305), E(1313), E(1316)], audio: AUDIO },
  { id: 'd-formules', title: 'Le début et la fin', format: 'sort' as const, coach: "Deux piles : pour un ami, pour un service. EN: sort by reader.", buckets: ['pour un ami', 'pour un service'], items: [E(1320), 'fr.a1.salutations.032', E(1325), E(1323), E(1327), B121(1178)], audio: AUDIO },
  { id: 'd-faux-pas', title: 'Ni trop bas, ni trop haut', format: 'mcq' as const, coach: "Écoute la personne, puis prends sa tenue. EN: take the reader's outfit.", q: 'À ton colocataire, laquelle ?', opts: ["Auriez-vous l'amabilité de sortir les poubelles ?", 'Tu peux sortir les poubelles ?'], correct: 1, why: 'Entre colocataires, la question simple. EN: the plain question.', items: [E(1349), E(1350), E(1351), E(1352), E(1353), E(1354)], audio: AUDIO },
  { id: 'd-quebec', title: 'Montréal ou Lyon', format: 'sort' as const, coach: "Deux piles : le familier du Québec, le courant de France. EN: Québec familier, France courant.", buckets: ['familier, au Québec', 'courant, en France'], items: [E(1360), E(1368), E(1362), E(1369), E(1363), E(1370)], audio: AUDIO },
  { id: 'd-nouvelle', title: 'La même nouvelle', format: 'flashcard' as const, coach: "Lis chaque phrase du courriel à voix haute, comme Mme Bouchard la lira. EN: read each email line as your manager will.", items: [E(1380), E(1381), E(1384), E(1386), E(1387), E(1390)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'registre-juge', description: 'Treats a familiar register as a mistake, or sends a correct familiar message to a reader who expects everyday French.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a10-mission'], drill: 'd-registre', retest: 'd-registre' },
  { id: 'registres-confondus', description: 'Cannot tell familier, courant and soutenu apart, or answers someone in a register far from theirs.', detectOn: ['a2-trier', 'a2-erreurs', 'a2-check'], drill: 'd-trois', retest: 'd-trois' },
  { id: 'mot-familier', description: 'Leaves a familiar word (bagnole, bosser, boulot, plus un rond) in a careful message, or uses a formal word with a friend.', detectOn: ['a3-assortir', 'a3-piege', 'a3-check', 'a10-mission'], drill: 'd-mots', retest: 'd-mots' },
  { id: 'marqueur-oral', description: "Writes a careful message with spoken grammar: dropped ne, on for nous, t'as, y a, an intonation question, ça for cela.", detectOn: ['a4-reperer', 'a4-erreurs', 'a4-check', 'a10-mission'], drill: 'd-marqueurs', retest: 'd-marqueurs' },
  { id: 'lecteur-oublie', description: 'Sends the same wording to every reader, or changes the facts instead of the outfit when the reader changes.', detectOn: ['a5-qui', 'a5-choisir', 'a5-check', 'a10-mission'], drill: 'd-lecteur', retest: 'd-lecteur' },
  { id: 'abreviation', description: 'Puts texto abbreviations (bcp, stp, dsl, rdv) in an email, or cannot decode them in a friend’s message.', detectOn: ['a6-decoder', 'a6-erreurs', 'a6-check', 'a10-mission'], drill: 'd-textos', retest: 'd-textos' },
  { id: 'formule-mal-assortie', description: 'Opens and closes in a register that does not fit the reader, or mixes two registers in one greeting (Salut Madame).', detectOn: ['a7-paires', 'a7-erreurs', 'a7-check', 'a10-mission'], drill: 'd-formules', retest: 'd-formules' },
  { id: 'faux-pas', description: 'Pitches a message too stiff for a friend or flatmate, or too casual for a manager, a client or a counter.', detectOn: ['a8-sonne', 'a8-piege', 'a8-check', 'a10-mission'], drill: 'd-faux-pas', retest: 'd-faux-pas' },
  { id: 'quebec-universel', description: 'Uses a Québec familiar word (char, chum, plate) as if it were universal or formal, or misreads Québec courant words such as dîner.', detectOn: ['a9-traduire', 'a9-erreurs', 'a9-check', 'a10-mission'], drill: 'd-quebec', retest: 'd-quebec' },
  { id: 'nouvelle-deformee', description: 'In the two-message task, changes the facts between the texts, or lets one message slip into the other’s register.', detectOn: ['a10-lecture', 'a10-cheat', 'a10-mission'], drill: 'd-nouvelle', retest: 'd-nouvelle' },
];
const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-registres', 'Les trois registres', ['familier, courant, soutenu', 'qui lit, et où', 'trois lecteurs, un message', 'le faux pas'], [
    teach('sheet-registres-teach', 'Une langue, trois tenues',
      `${REFRAME} Le familier va avec les amis, la famille et les textos. Le courant va avec presque tout le monde : au travail, au magasin, dans un courriel. Le soutenu va avec les lettres officielles, les discours et les livres. Avant d'écrire, demande-toi qui va lire, et quand. EN: ${REFRAME_EN} Ask who will read it, and when.`),
    table('sheet-registres-table', 'Qui, où, quel registre', ['Registre', 'Pour qui', 'Exemple'], [
      ['familier', 'un ami, ta famille, un texto', "Tu me conseilles un bouquin ?"],
      ['courant', 'un collègue, un commerçant, un courriel', 'Est-ce que tu peux me conseiller un livre ?'],
      ['soutenu', 'une lettre officielle, un discours', 'Pourriez-vous me conseiller un ouvrage ?'],
      ['familier', 'ton frère', "J'en sais rien."],
      ['courant', 'presque tout le monde', 'Je ne sais pas.'],
      ['soutenu', 'une lettre, un roman', "Je l'ignore."],
    ]),
    table('sheet-registres-faux-pas', 'Le faux pas, dans les deux sens', ['Trop bas', 'Trop haut'], [
      ['à une responsable : Coucou, je bosse pas demain', 'à un meilleur ami : Cher Samir, je vous informe'],
      ['on te trouve négligent', 'on te croit fâché, ou distant'],
      ['au guichet : Je veux un formulaire, là', 'à tes amis : Je vous remercie pour cette agréable soirée'],
      ['on te trouve impoli', 'on croit à une blague'],
    ]),
    teach('sheet-registres-politesse', 'Poli, ou soutenu',
      `${Cap(POLITESSE_REF)} le disait : « ${B109_REFRAME} » Le registre, c'est autre chose : la tenue. Tu peux être très poli en courant, et froid en soutenu. EN: politeness and register are two different axes.`),
  ]),
  sheet('sheet-mots', 'Les mots en trois tenues', ['les triplets', 'les mots coupés', 'le mot qui dépasse'], [
    teach('sheet-mots-teach', 'Un mot suffit',
      "Beaucoup de choses ont trois noms : un pour les amis, un pour tout le monde, un pour les lettres et les panneaux. Un seul mot familier rend toute la phrase familière. Pour soigner un message, change le mot, pas les faits. EN: many things have three names; one informal word colours the whole sentence."),
    table('sheet-mots-table', 'Les triplets', ['Familier', 'Courant', 'Soutenu'], [
      ['un bouquin, bouquiner', 'un livre, lire', 'un ouvrage'],
      ['une bagnole', 'une voiture', 'un véhicule'],
      ['le boulot, bosser', 'le travail, travailler', "l'emploi, un poste"],
      ['le fric, pas un rond', "l'argent", 'les fonds'],
      ['crevé', 'très fatigué', 'exténué'],
      ['bouffer', 'manger', 'se restaurer'],
      ['un pote', 'un ami', 'un ami (fort aimable)'],
      ["j'en sais rien", 'je ne sais pas', "je l'ignore"],
    ]),
    table('sheet-mots-coupes', 'Les mots coupés, à l’oral et entre amis', ['Coupé', 'En entier'], [
      ['un resto', 'un restaurant'],
      ['le ciné', 'le cinéma'],
      ['un appart', 'un appartement'],
      ['la coloc', 'la colocation'],
      ['ça roule', 'ça va'],
    ]),
  ]),
  sheet('sheet-grammaire', 'La grammaire du registre', ['le ne qui tombe', 'on et nous', 'la question', 'ça et cela', "t'as, y a"], [
    teach('sheet-grammaire-teach', 'Les petits signes',
      `Le registre ne se voit pas seulement dans les mots. Il se voit dans la grammaire : le ne qui tombe, on au lieu de nous, la question à la voix, ça au lieu de cela, t'as et y a. Chacun a sa leçon : ${NEGATION_REF} pour le ne, ${INVERSION_REF} pour la question, ${CEST_REF} pour ça et cela. EN: register shows in grammar too; each marker has its own lesson.`),
    table('sheet-grammaire-table', 'Les marqueurs', ['Marqueur', 'Familier', 'Courant ou soutenu'], [
      ['le ne', 'Je sais pas.', 'Je ne sais pas.'],
      ['le sujet', 'On part à huit heures.', 'Nous partons à huit heures.'],
      ['tu as, tu es', "T'as vu l'heure ? T'es où ?", "Tu as vu l'heure ? Où es-tu ?"],
      ['il y a', 'Y a une séance à vingt heures.', 'Il y a une séance à vingt heures.'],
      ['la question', 'Tu viens ?', 'Est-ce que tu viens ? Viens-tu ?'],
      ['ça, cela', 'Ça me convient.', 'Cela me convient tout à fait.'],
    ]),
    teach('sheet-grammaire-cites', 'Ce que les autres leçons disent',
      `« ${fr(B120(1177))} » « ${B121_REFRAME} » « ${fr(B122(1127))} » Cette leçon les réunit : ensemble, ils te disent à qui parle une phrase. EN: this lesson puts the three together as signs of register.`),
  ]),
  sheet('sheet-messages', 'Les messages : textos et formules', ['les abréviations', 'ouvrir un message', 'fermer un message'], [
    teach('sheet-messages-teach', 'Le début, la fin, et les textos',
      "La première ligne annonce le registre, la dernière le confirme. Entre amis, par texto, on coupe les mots : tu les lis, et tu peux les écrire à tes amis. Dans un courriel, même à un collègue sympa, tout s'écrit en entier. EN: the first line announces, the last confirms; texts abbreviate, emails never do."),
    table('sheet-messages-textos', 'Les abréviations', ['Texto', 'En entier', 'Sens'], [
      ['slt', 'salut', 'hi'],
      ['qqch', 'quelque chose', 'something'],
      ['jsp', 'je sais pas', 'dunno'],
      ['mdr', 'mort de rire', 'lol'],
      ['stp, svp', "s'il te plaît, s'il vous plaît", 'please'],
      ['tkt', "t'inquiète", "don't worry"],
      ['rdv', 'rendez-vous', 'meeting'],
      ['bcp', 'beaucoup', 'a lot'],
      ['dsl', 'désolé', 'sorry'],
      ['pk', 'pourquoi', 'why'],
    ]),
    table('sheet-messages-formules', 'Ouvrir et fermer', ['Pour qui', 'Ouvrir', 'Fermer'], [
      ['un proche', 'Coucou Chloé,', 'Bisous, Gros bisous, Bises'],
      ['un ami', 'Salut Maxime,', 'À plus, À bientôt'],
      ['un collègue', 'Bonjour Marc,', 'Bonne journée, Bonne fin de journée'],
      ['un client, une personne connue', 'Bonjour Madame Tremblay, Cher Monsieur,', 'Cordialement, Bien cordialement, Au plaisir (Québec)'],
      ['un service, un inconnu', 'Madame, Monsieur,', 'Cordialement, Bien à vous'],
      ['une lettre officielle', 'Madame, Monsieur,', "Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées."],
    ]),
    teach('sheet-messages-miroir', 'La règle du miroir',
      "Quand on t'écrit, réponds dans la même tenue, ou un cran plus soigné si tu hésites. Jamais deux crans d'écart : Cordialement à ta sœur sonne comme une dispute, Bisous à ta propriétaire comme une erreur de destinataire. EN: mirror the register you received, or one step more careful."),
  ]),
  sheet('sheet-quebec', 'Le registre au Québec', ['le familier québécois', 'le courant du Québec', 'les mots qui voyagent mal'], [
    teach('sheet-quebec-teach', 'Plus de familier, et un autre courant',
      "Au Québec, le familier s'entend plus souvent qu'en France, même entre collègues. Et certains mots qui te semblent différents sont du courant, même à l'écrit officiel : courriel, fin de semaine, magasiner, dîner. Un mot familier québécois n'est pas une faute à Paris : il est parfois mal compris. EN: Québec informal French reaches further; some Québec words are standard; regional words may not travel."),
    table('sheet-quebec-table', 'Québec et France', ['Au Québec', 'Registre', 'En France']
      , [
      ['mon char', 'familier', 'ma bagnole, ma voiture'],
      ['mon chum, ma blonde', 'familier', 'mon copain, ma copine'],
      ["c'est plate", 'familier', "c'est ennuyeux"],
      ['pas pantoute', 'familier', 'pas du tout'],
      ['il fait frette', 'familier', 'il fait très froid'],
      ['avoir le goût de', 'familier', 'avoir envie de'],
      ["c'est correct", 'courant', "c'est bon, ça va"],
      ['magasiner', 'courant', 'faire les magasins'],
      ['un courriel', 'courant', 'un e-mail, un mail'],
      ['la fin de semaine', 'courant', 'le week-end'],
      ['déjeuner, dîner, souper', 'courant', 'petit-déjeuner, déjeuner, dîner'],
      ['Au plaisir', 'courant', 'Bien cordialement'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-25-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-25-ines': "Inès's two messages (act 1), ONE VOICE, one take, Québécoise, read as she reads them back before sending: the texto to Chloé quick and warm, the courriel to Mme Bouchard slower and even. A clear beat between the two. « dsl » is read as « désolé ».",
  'rec-b1-25-trois-ecoute': "REQUIRED FOR THE EAR MISSION (act 2): nine lines, ONE TAKE, THREE VOICES, in authored order. Lines 1, 4 and 7 (familier) by a young speaker, relaxed and quick; lines 2, 5 and 8 (courant) by a second voice, neutral; lines 3, 6 and 9 (soutenu) by a third voice, careful and slightly slower. The register must be audible in delivery as well as in the words.",
  'rec-b1-25-trois': "The four register cards. Each card holds three items across middots: a clear beat between them, each read in its own register (relaxed, neutral, careful). Card four is b1.21's reframe, read plainly.",
  'rec-b1-25-hugo': "Hugo's message to Léa (act 3), ONE VOICE, one take, a Lyon speaker in his thirties, read as a voice note to a friend: quick, warm, a little tired. Every familiar word (bagnole, boulot, bosse, bouquine, potes, crevé) said naturally, never stressed or mocked.",
  'rec-b1-25-piege-mots': "The audio step plays each card's CORRECT sentence, the one that fits the reader. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-25-awa': "REQUIRED FOR THE EAR MISSION (act 4): Awa's voicemail, eight lines, ONE TAKE, ONE VOICE, a West African francophone voice welcome (Dakar or Abidjan), spoken as a real voicemail: fast, friendly, no ne anywhere, « y a » and « t'es » fully reduced. The learner is asked what was NOT said, so nothing may be restored for clarity.",
  'rec-b1-25-marqueurs': "The four marker cards. Each card holds a familiar and a careful version across a middot: read the first relaxed, the second careful, with a clear beat. Card three holds three questions: rising voice, then est-ce que, then inversion.",
  'rec-b1-25-demenagement': "Sami's three messages (act 5), ONE VOICE, one take, Québécois, read as he reads them back: the texto to Chloé quick and happy, the courriel to Marc friendly and even, the letter to the library slow and careful. A clear beat between the three, so the three registers are heard as three blocks.",
  'rec-b1-25-textos': "The group chat (act 6), read by TWO VOICES alternating as Chloé and Maxime, with Sami's one line by Chloé's voice. EVERY ABBREVIATION IS READ IN FULL (slt as salut, qqch as quelque chose, mdr as mort de rire): nobody reads texto letters aloud.",
  'rec-b1-25-abrev': "The four texto cards. The fr lines are abbreviations: read the FULL forms given in the respelling (beaucoup, quelque chose, s'il te plaît, rendez-vous), a clear beat between them. On card three read « mdr » as « M D R » once, then « lol », as people do when they say them aloud.",
  'rec-b1-25-boite': "Sami's inbox (act 7), ONE VOICE, one take, read as a narrator: the narration neutral, each quoted opening and closing in the tone of its sender, from warm (Chloé) to formal (la Ville). The long formula at the end is read slowly and evenly.",
  'rec-b1-25-theo': "Théo's two messages (act 8), TWO VOICES: a narrator, and Théo; Mme Lacroix's reply and Samir's reply by a third voice. Théo's first message hurried and casual, the one to Samir stiff and stilted, so the mismatch is heard. Samir sounds puzzled and a little hurt, never angry.",
  'rec-b1-25-piege-faux-pas': "The audio step plays each card's CORRECT sentence, the one that fits the person. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-25-montreal': "REQUIRED FOR THE EAR MISSION (act 9): eight lines, ONE TAKE, TWO Montréal voices alternating (lines 1, 3, 5, 7 and 2, 4, 6, 8), at a real lunch-break pace with Québec vowels and affrication (« tu » as [tsy], « dîne » with a lax i). « chum » rhymes with « comme ». Nothing slowed down for the learner.",
  'rec-b1-25-quebec': "The four Québec cards, read by a Québécois speaker. Each card holds two or three words across middots: a clear beat between them. Card four's words are read as ordinary standard Québec French, not as slang.",
  'rec-b1-25-modele': "The model (act 10), ONE VOICE, one take, read as the writer reads both messages back before sending: the texto to Awa quick and warm, then a clear pause, then the subject line and the courriel to Mme Bouchard calm and even. The four moves (opening, news, request, closing) audible as blocks in both.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 25',
  intro: "French has three registers: familier for friends and texts, courant for almost everyone, and soutenu for official letters and speeches. None of them is wrong; each fits a person and a moment. This lesson teaches you to hear them, to see the words and the grammar that mark them, and to move a message from one to another. It ends with one piece of news written twice: to a friend, and to a manager or an administration.",
  skill: 'PE',
  grammarAssumed: [POLITESSE_UNIT, NEGATION_UNIT, INVERSION_UNIT, CEST_UNIT],
  grammarIntroduced: [
    'The three registers (familier, courant, soutenu) as a choice made for a reader and a moment, not a scale of correctness',
    'Register-marked vocabulary in triplets (bouquin / livre / ouvrage, bagnole / voiture / véhicule, boulot / travail / emploi, crevé / fatigué / exténué) and clipped words (resto, ciné, appart)',
    "Grammatical markers of register gathered as one system: ne-deletion, on for nous, t'as and y a, intonation questions against est-ce que and inversion, ça against cela (each cited from its owner lesson)",
    'Rewriting one message for three readers (a friend, a colleague, an administration) while keeping the facts constant',
    'Recognition of French texting abbreviations (slt, qqch, jsp, mdr, stp, tkt, rdv, bcp, dsl, pk) and the rule that emails write words in full',
    'Openings and closings by register, from Coucou / Bisous to Madame, Monsieur / Cordialement, and mirroring the register received',
    'Register mismatch and its social effect: too casual reads as careless, too formal reads as cold, angry or ironic',
    'Québec register: wider familiar use (char, chum, blonde, plate, pantoute, frette) and Québec standard words (courriel, fin de semaine, dîner, magasiner)',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Le français a trois registres : le familier pour les amis et les textos, le courant pour presque tout le monde, et le soutenu pour les lettres officielles et les discours. Aucun n'est faux : chacun va avec une personne et un moment. À la fin, tu écris la même nouvelle deux fois.",
    minutes: 110,
    difficulty: 3,
    glyph: 'Aa',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: REGISTRES_TERMS,
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
