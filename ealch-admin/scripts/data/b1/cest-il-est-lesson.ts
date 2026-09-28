// b1.22.l1 « C'est ou il est » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union, enforced by
// validateSection, drawn by TaskView), so `sections` is `LessonSection[]` and
// the validators run on `LESSON` itself, as b1.20 does. No
// `lessonWithoutTask()` shim, and `_task-section.ts` is not imported.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading / listening), name
//   (cardDeck, examples, tapTable), build (groupDrill, gated), choose (a
//   drill where the MEANING picks the form), trap (trapDrill stepped or
//   commonErrors), check (gated control pages before the checkpoint).
//
//    1  Au bureau des objets trouvés  7   the finger and the label, a1.06 cited
//    2  L'étiquette                   8   il / elle by the noun's gender, agreement
//    3  Le métier et l'adjectif       8   il est médecin / c'est un bon médecin
//    4  C'est moi                     7   names, moi toi lui eux, the phone
//    5  C'est beau                    8   a situation, an idea: c'est + masculine
//    6  Ce sont                       8   ce sont written, c'est + plural spoken
//    7  De ou à                       7   il est facile de / c'est facile à
//    8  Ça, cela, ce                  7   ce only before être
//    9  Mettre en relief              8   c'est ... qui, c'est ... que
//   10  Les il figés                  7   il est midi, il est tard, il est temps
//   11  Le portrait                  11   model, plan, role play, TASK, quiz
//
//   TOTAL 86 missions, 11 acts, 452 estimated screens. Corpus: 192 authored
//   rows in eleven blocks (.1000-.1191) plus 25 reused seed rows, 217 item
//   ids in all, 212 of them released act by act through `deckTranche` (the
//   other 5 are the seed rows with no flashcard drill, NOT_DECK_ABLE).
//   Quiz: 11 rounds of 8 (33 mcq, 23 typeIn, 21 errorSpot, 11
//   listenChoose). Eleven error triggers, eleven drills, five reference
//   sheets reached from 19 missions by `sheetId`, eleven terms. Three
//   tapTables (acts 3, 5, 7). Chapter artwork:
//   `cest-il-est-image-prompts.md`, 11 prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « C'est montre du doigt. Il est colle une étiquette. »
//   EN: C'est points a finger. Il est sticks on a label.
//
//   ONE METAPHOR, THE FINGER AND THE LABEL. C'est points: at a noun with its
//   little word, a name, a person, a whole scene, the one thing you want to
//   stress. Il est labels something already pointed at, and inherits its
//   gender. It is NOT « things against people » (act 2 and act 4 break
//   that) and NOT « speech against writing » (true only in act 7). The one
//   place it rests is the frozen il of the clock, which a1.12 owns and act
//   10 names as frozen.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    il / elle for objects by grammatical gender; the job, nationality
//           and religion once an adjective or complement arrives (c'est un
//           bon médecin); c'est + stressed pronoun and ce sont eux / c'est
//           eux; c'est + masculine adjective for a situation, an idea or an
//           activity; ce sont against spoken c'est + plural as REGISTER;
//           il est + adj + de + inf (written), c'est + adj + de + inf
//           (spoken), c'est / il est + adj + à + inf (pointing back); ce
//           against ça and cela; c'est ... qui / que as mise en relief; the
//           contrast il est tard / c'est trop tard; a written portrait.
//   QUOTES  a1.06's determiner test (its grammarIntroduced wording, since
//           its reframe is about the six forms of être), a1.12's reframe for
//           the clock, a2.33's reframe for ce, b1.11's reframe for qui/que.
//   LEAVES  the determiner test itself, c'est Marc and ce sont mes parents
//           (a1.06); the bare profession (a1.11); il est français / c'est
//           un Français (a1.22); the clock (a1.12); ce, cet, cette and
//           celui (a2.33); verb agreement after c'est moi qui (b1.11); the
//           subjunctive after il est important que and c'est dommage que
//           (b1.14 to b1.16: no authored French string uses one).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (Madame Pelletier and the scenario's director say
//   « vous »). Every learner surface that explains something carries
//   English (`en`, or a final « EN: »), and NO ANSWER ever does. Every `say`
//   is French. Theme `description-personnes-objets`, existing, widened to
//   a1-b1 in Postgres (corpus §A.1). A1 and A2 citations use the English
//   trail label; b1.* ones are French from the plan. Setting: Montréal (a
//   lost-and-found desk, a design agency, a flat on rue Saint-Denis), with
//   Québec City, Dakar, Liège, Genève and Port-au-Prince in the texts;
//   characters recur only inside this lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. Act 6 presents « c'est mes collègues » as ordinary SPEECH, while
//      a1.06's s09-identity calls it « not right ». The lesson keeps a1.06's
//      rule for writing (the task marks it) and only names the spoken form
//      as what the learner will hear. Is that the right B1 step, or should
//      the spoken plural stay unmentioned?
//   2. a1.06 already teaches the determiner test, c'est Marc and « c'est une
//      bonne idée ». Acts 1 and 4 cite them in a single card each and build
//      on them. Is one card enough of a recap?
//   3. THREE tapTables (acts 3, 5, 7), one per act, six rows each. Confirm.
//   4. Act 10 (the frozen il) is the lightest act: a1.12 owns the clock. Its
//      new content is il est tard against c'est trop tard and il est temps
//      de. Keep it as an act, or fold it into act 7?
//   5. The DB holds two published a2 rows this corpus twins
//      (corpus DB_ONLY_TWINS). Dedupe at import or keep both?
//   6. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.
//   7. The task is written (PE, 80 to 120 words, a portrait). A spoken
//      introduction of a colleague would test act 4 and act 6's register
//      better. Add a PO task later?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  REGISTRE_TEXT, CARTE_TEXT, REGLEMENT_TEXT, PORTRAIT_TEXT, PORTRAIT_MOVES,
  A106_TEST_FR, A112_REFRAME, A112_REFRAME_FR, A233_REFRAME, A233_REFRAME_FR, B111_REFRAME,
  ETRE_UNIT, ARTICLES_UNIT, HEURE_UNIT, PAYS_UNIT, ACCORD_UNIT, MEDECIN_UNIT, DEMONSTRATIFS_UNIT,
  QUI_QUE_UNIT, NEGATION_AV_UNIT,
  ETRE_REF, ARTICLES_REF, HEURE_REF, PAYS_REF, MEDECIN_REF, DEMONSTRATIFS_REF, QUI_QUE_REF, TOUT_REF,
} from './cest-il-est-corpus.ts';
import { CEST_IL_EST_TERMS } from './cest-il-est-terms.ts';

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
  if (!r) throw new Error(`b1.22: no item ${id}`);
  return r;
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.22: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.22: no respell on ${id}`);
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

/** The trapDrill step list, identical in every act. */
const TRAP_STEPS = (rule: string) => [
  { label: 'La règle', kind: 'rule' as const, title: rule },
  { label: 'Six cartes', kind: 'cards' as const, title: 'Ce que la forme fausse raconte' },
  { label: 'Écoute', kind: 'audio' as const, title: 'Écoute les six phrases correctes' },
  { label: 'À toi', kind: 'drill' as const, title: 'Huit phrases', gate: true },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — AU BUREAU DES OBJETS TROUVÉS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The learner's French is grammatical and says the wrong thing:
 *  « elle » picks up la valise, so the agent hears that the SUITCASE is a
 *  nuisance. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const WRONG_EMBETANTE = 'Elle est vraiment embêtante.';
const WRONG_EMBETANTE_RS = '[eh-leh vreh-mahⁿ ahⁿ-beh-TAHⁿT]';
const WRONG_EMBETANTE_EN = 'The suitcase itself is really annoying.';

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La valise qui ne sort pas',
  frSub: 'Un samedi matin, Gare Centrale',
  setting: { place: 'Bureau des objets trouvés, Gare Centrale', city: 'Montréal', time: '9 h 10', ambience: 'un comptoir, des étagères pleines de sacs, le bruit des trains' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, Gare Centrale, un samedi matin. Ta valise n'est pas sortie du train. Tu vas au bureau des objets trouvés. Madame Pelletier regarde son écran.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mme Pelletier',
      fr: 'Votre valise est partie à Toronto par erreur. Elle arrive demain matin.',
      en: 'Your suitcase went to Toronto by mistake. It arrives tomorrow morning.',
      respell: '[vo-truh va-LEEZ eh par-TEE a to-rohⁿ-TOH par eh-RUHR | eh-la-reev duh-mehⁿ ma-TEHⁿ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: WRONG_EMBETANTE,
      en: WRONG_EMBETANTE_EN,
      respell: WRONG_EMBETANTE_RS,
      stage: "Tu penses : it's really annoying. Tu as pris elle, parce que tu parlais de ta valise.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mme Pelletier',
      fr: 'Ah, votre valise est embêtante. Elle est trop lourde, peut-être. Je peux vous prêter un chariot.',
      en: 'Oh, your suitcase is a nuisance. It is too heavy, perhaps. I can lend you a trolley.',
      respell: '[A | vo-truh va-LEEZ eh ahⁿ-beh-TAHⁿT | eh-leh troh LOORD puh-TEHT | zhuh peu voo pray-TAY uhⁿ sha-RYOH]',
      stage: 'Elle a entendu : la valise elle-même pose un problème.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Madame Pelletier cherche déjà un chariot. Mais toi, tu ne parlais pas de la valise. Tu parlais de la situation : une journée entière sans tes affaires.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase parle de la situation ?',
      size: 'lg',
      options: [
        { fr: fr(E(1002)), respell: rsOf(E(1002)), en: src(E(1002)).en, outcome: 'works', audio: AUDIO },
        { fr: WRONG_EMBETANTE, respell: WRONG_EMBETANTE_RS, en: WRONG_EMBETANTE_EN, outcome: 'breaks', audio: AUDIO },
      ],
      followUp: {
        works: "Madame Pelletier sourit : « Oui, c'est embêtant, je sais. » Elle te donne un bon pour un petit kit de voyage.",
        breaks: "Madame Pelletier revient avec un chariot. Tu n'as rien à mettre dessus, et personne ne parle de ton problème.",
      },
    },
    {
      kind: 'break',
      heading: "Elle, c'est la valise",
      body: "Elle reprend un nom féminin déjà dit : ici, la valise. Une situation entière n'a pas de nom. Tu la montres avec c'est, et l'adjectif reste au masculin. EN: elle refers back to la valise; a whole situation takes c'est and the masculine.",
      wrong: {
        fr: WRONG_EMBETANTE,
        ipa: '/ɛ.lɛ vʁɛ.mɑ̃ ɑ̃.bɛ.tɑ̃t/',
        respell: WRONG_EMBETANTE_RS,
        en: WRONG_EMBETANTE_EN,
      },
      right: {
        fr: fr(E(1002)),
        ipa: ipaOf(E(1002)),
        respell: rsOf(E(1002)),
        en: src(E(1002)).en,
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Ta valise arrive demain. En attendant, Madame Pelletier te montre les objets trouvés du jour. Tu vas apprendre à les montrer, puis à les décrire.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['doigt', 'etiquette', 'situation'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Montrer ou décrire, sans hésiter', s: 'Actes 1 à 4 : les objets, les métiers, les prénoms, moi et toi' },
    { t: 'Parler d’une situation', s: 'Actes 5 et 6 : c’est beau, ce sont, et ce qu’on entend à l’oral' },
    { t: 'Aller plus loin dans la phrase', s: 'Actes 7 à 10 : de ou à, ça et cela, c’est ... qui, il est tard' },
    { t: 'Écrire un vrai portrait', s: 'Acte 11 : une collègue ou un voisin, en quelques lignes' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: a register where the finger and the label alternate. */
const A1_REGISTRE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-registre',
  layer: 'core',
  questionsInModal: true,
  title: 'Le registre du samedi',
  frSub: 'Lis, et regarde qui montre et qui décrit',
  text: REGISTRE_TEXT,
  glossary: [
    { word: 'objets trouvés', en: 'lost property', note: 'Les choses que des voyageurs ont oubliées.' },
    { word: 'sac à dos', en: 'backpack', note: 'Un sac qu’on porte sur le dos.' },
    { word: 'porte-clés', en: 'key ring', note: 'L’anneau qui tient les clés ensemble.' },
    { word: 'manche', en: 'handle', note: 'La partie du parapluie que tu tiens dans la main.' },
    { word: 'pressé', en: 'in a hurry', note: 'Il n’a pas le temps.' },
  ],
  questions: [
    { q: 'Quand Madame Pelletier présente un objet pour la première fois, que dit-elle ?', a: "c'est ou ce sont : « c'est un sac à dos noir », « ce sont des clés de voiture ». Elle montre l'objet du doigt." },
    { q: 'Et ensuite, pour le décrire ?', a: "il est, elle est, elles sont : « il est neuf », « elles sont sur un porte-clés rouge ». L'étiquette vient après le doigt." },
    { q: "Pourquoi « elle est fermée » et pas « il est fermé » ?", a: 'Parce que elle reprend la valise, un nom féminin.' },
    { q: "« C'est normal » : de quoi parle-t-elle ?", a: "De la situation : le monsieur est pressé parce que son train part à midi. Pas de nom, donc c'est, au masculin." },
    { q: "« Il est déjà onze heures et demie » : ce il montre-t-il quelque chose ?", a: "Non. C'est le il de l'heure, qui ne remplace aucun nom. Tu le retrouveras à l'acte 10." },
  ],
  audio: REC('rec-b1-22-registre'),
  say: REFRAME,
  terms: ['doigt', 'etiquette'],
};

/** BUILD, on the text just read: the finger, then the label. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Le doigt, puis l’étiquette',
  groups: [
    grp('Le doigt : on montre', [
      it(E(1000), 'la valise, montrée'),
      it(E(1003), 'un sac, montré'),
      it(E(1012), 'des clés, au pluriel'),
      it(E(1005), 'une personne, par son nom'),
    ], chk(
      "Qu'est-ce qui vient juste après c'est ou ce sont, dans ces quatre phrases ?",
      ['un adjectif tout seul', 'un nom avec son petit mot, ou un nom propre'], 1,
      "Un petit mot ou un nom propre : on montre la chose. EN: a determiner or a name, so you point.")),
    grp("L'étiquette : on décrit", [
      it(E(1001), 'la valise : elle'),
      it(E(1004), 'le sac : il'),
      it(E(1013), 'les clés : elles'),
      it(E(1006), 'Madame Pelletier : elle'),
    ], chk(
      'Il, elle, elles : que font-ils ici ?',
      ['ils reprennent un nom déjà montré', 'ils montrent un objet nouveau'], 0,
      "Ils reprennent ce qu'on a déjà montré, et l'adjectif suit. EN: they refer back to what was already shown.")),
    ctl('La situation', "« C'est vraiment embêtant. » Qu'est-ce que c'est montre ?",
      ['la valise', 'Madame Pelletier', 'toute la situation'], 2,
      "Toute la situation, qui n'a pas de nom : d'où le masculin. EN: the whole situation, so the masculine."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['doigt', 'etiquette'],
};

/** NAME, gently: what a1.06 gave, beside the new objects. */
const A1_RAPPEL: Sec<'examples'> = {
  type: 'examples',
  id: 'a1-rappel',
  layer: 'core',
  sheetId: 'sheet-doigt',
  title: 'Ce que tu sais déjà',
  examples: [
    ex('fr.a1.metiers.274', `${Cap(ETRE_REF)} : un petit mot devant le nom, donc c'est.`),
    ex('fr.a1.metiers.275', 'Le même médecin, sans petit mot : il est.'),
    ex('fr.a1.metiers.256', 'Un prénom est déjà précis : on le montre.'),
    ex(E(1010), "Un objet qu'on montre : c'est un."),
    ex(E(1011), "Le même objet, décrit : il, parce que parapluie est masculin."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['doigt', 'etiquette'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où le bon choix compte',
  cases: [
    uc('Tu décris ta valise au comptoir', E(1001)),
    uc('Tu réagis à une mauvaise nouvelle', E(1002)),
    uc('Tu présentes la personne du comptoir à un ami', E(1005)),
    uc("Tu remercies l'agente", E(1014)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['doigt', 'situation'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le doigt', "Tu montres ton parapluie à l'agente. Que dis-tu ?",
    ["C'est un parapluie.", 'Il est un parapluie.'], 0,
    "Un petit mot, un : tu montres. EN: a determiner, so c'est."),
  ctl("L'étiquette", '« Ma valise ? ... est bleue. »',
    ['Elle', "C'", 'Il'], 0,
    "Elle reprend la valise, un nom féminin. EN: elle refers back to la valise."),
  ctl('La situation', '« Ta valise est à Toronto. ... embêtant. »',
    ['Elle est vraiment', "C'est vraiment"], 1,
    "Toute la situation : c'est, au masculin. EN: the situation takes c'est."),
], ['doigt', 'situation']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Au bureau des objets trouvés',
    opener: {
      line: "Ta valise est à Toronto, et ta phrase accuse la valise : ici tu apprends à montrer, puis à décrire. EN: Your suitcase is in Toronto and your sentence blames the suitcase: here you learn to point, then to describe.",
      imageRef: 'lessons/cest-il-est/act01.jpg',
    },
    sections: [],
    milestone: "Tu sépares le doigt de l'étiquette : c'est pour montrer, il ou elle est pour décrire. EN: You can tell the finger from the label: c'est to point, il or elle est to describe.",
    estScreens: 30, restPoints: ['a1-registre'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_REGISTRE, A1_REPERER, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — L'ÉTIQUETTE
 *
 *  il or elle for a THING follows the noun's gender (la veste, elle; le
 *  manteau, il), and the adjective agrees with it. English it covers every
 *  object; this is the act that takes it away.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a first day at a design agency. Story bubbles avoid « ? » and « ! ». */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Le premier jour',
  frSub: 'Hugo te fait visiter',
  setting: "Lundi matin, dans une agence de design, boulevard Saint-Laurent. C'est ton premier jour. Hugo, ton collègue, te fait visiter.",
  bubbles: [
    { from: 'narrator', fr: 'Hugo ouvre la porte de ton bureau.', en: 'Hugo opens the door of your office.' },
    { from: 'coach', fr: 'Voici ton bureau, à côté de la fenêtre.', en: 'Here is your office, next to the window.' },
    { from: 'user', fr: fr(E(1025)), en: src(E(1025)).en, warn: 'il : le bureau, déjà montré' },
    { from: 'coach', fr: 'Et voici les chaises. On vient de les recevoir.', en: 'And here are the chairs. They just arrived.' },
    { from: 'user', fr: fr(E(1021)), en: src(E(1021)).en, warn: 'elles : les chaises, féminin pluriel' },
    { from: 'coach', fr: 'Cet après-midi, tu rencontres Monsieur Roy, le directeur.', en: 'This afternoon you meet Mr Roy, the director.' },
    { from: 'coach', fr: fr(E(1029)), en: src(E(1029)).en, warn: 'il : Monsieur Roy, déjà nommé' },
    { from: 'narrator', fr: "Hugo parle vite. Mais chaque il, chaque elle reprend une chose qu'il vient de te montrer.", en: 'Hugo talks fast. But every il and every elle picks up something he has just shown you.' },
  ],
  closing: { fr: "D'abord on montre, ensuite on colle l'étiquette : il pour le bureau, elles pour les chaises.", en: 'First you point, then you stick on the label: il for the office, elles for the chairs.' },
  audio: REC('rec-b1-22-bureau'),
  say: REFRAME,
  terms: ['etiquette'],
};

/** NAME: the noun's gender picks the pronoun, even for a thing. */
const A2_ACCORD: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-accord',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-doigt',
  title: 'Le nom choisit il ou elle',
  frSub: 'Même pour un objet',
  hint: 'Quatre cartes. Regarde le nom avant de choisir.',
  audio: REC('rec-b1-22-accord'),
  say: REFRAME,
  terms: ['etiquette'],
  cards: [
    {
      head: 'Un nom féminin', label: 'elle',
      fr: fr(E(1017)),
      sub: rsOf(E(1017)),
      body: "Veste est féminin, donc elle, même pour un objet. L'anglais dit it partout ; le français choisit par le genre du nom. EN: the noun's gender picks il or elle, even for a thing.",
    },
    {
      head: 'Le même objet, un autre nom', label: 'il',
      fr: fr(E(1016)),
      sub: rsOf(E(1016)),
      body: "Manteau est masculin : il, et gris sans e. Change le nom, et le pronom change avec lui. EN: change the noun and the pronoun follows it.",
    },
    {
      head: 'Une personne', label: 'il, elle',
      fr: fr(E(1027)),
      sub: rsOf(E(1027)),
      body: "Pour une personne, il ou elle suit la personne, et l'adjectif aussi : gentille, généreuse. EN: for a person, the pronoun and the adjective follow the person.",
    },
    {
      head: 'Le pluriel', label: 'ils, elles',
      fr: fr(E(1021)),
      sub: rsOf(E(1021)),
      body: "Chaises est féminin pluriel : elles sont, et confortables avec un s. EN: plural noun, plural pronoun, plural adjective.",
    },
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Il pour un nom masculin, elle pour un féminin',
  groups: [
    grp('Un nom masculin', [
      it(E(1016), 'le manteau'),
      it(E(1026), "l'ordinateur"),
      it(E(1025), 'le bureau'),
      it(E(1019), 'ton frère'),
    ], chk(
      'Manteau, ordinateur, bureau : quel pronom ?',
      ['elle', 'il'], 1,
      "Trois noms masculins : il. EN: three masculine nouns, so il.")),
    grp('Un nom féminin', [
      it(E(1017), 'la veste'),
      it(E(1024), 'la table'),
      it(E(1030), 'la soupe'),
      it(E(1033), 'la valise'),
    ], chk(
      '« La soupe ? ... est trop chaude. »',
      ['Elle', 'Il'], 0,
      "Soupe est féminin : elle, et chaude avec un e. EN: soupe is feminine.")),
    ctl('Au pluriel', '« Ces fleurs ? ... sont pour toi. »',
      ['Ils', 'Ce', 'Elles'], 2,
      "Fleurs est féminin pluriel : elles. EN: feminine plural, elles."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['etiquette'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  sheetId: 'sheet-doigt',
  title: "L'étiquette, partout",
  examples: [
    ex(E(1020), 'la chambre, puis elle : le nom vient d’abord.'),
    ex('fr.a2.adjectifs-essentiels.022', 'une personne déjà connue : elle, et généreuse.'),
    ex('fr.a2.adjectifs-essentiels.032', 'le nom arrive à la fin, mais elle le reprend quand même.'),
    ex(E(1022), 'mes voisins : ils, et sympathiques au pluriel.'),
    ex(E(1031), 'ces fleurs : elles.'),
    ex(E(1028), 'la question, avec il : ton chef est déjà nommé.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['etiquette'],
};

/** CHOOSE: has the thing already been shown, or is it new? */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Déjà montré, ou nouveau',
  groups: [
    grp("Déjà montré : l'étiquette", [
      it(E(1028), 'ton chef, dans la même phrase'),
      it(E(1029), 'le chef, déjà nommé'),
      it('fr.a1.description-personnes-objets.041', 'la table, nommée juste avant'),
      it(E(1030), 'la soupe'),
    ], chk(
      'Tu as déjà dit « mon chef ». Pour le décrire :',
      ["C'est sérieux.", 'Il est sérieux.'], 1,
      "Le chef est déjà montré : tu colles l'étiquette. EN: already named, so il est.")),
    grp('Nouveau : le doigt', [
      it(E(1003), 'un sac, pour la première fois'),
      it(E(1010), 'un parapluie, pour la première fois'),
      it(E(1000), 'ma valise'),
      it(E(1012), 'des clés'),
    ], chk(
      'Tu sors un objet de ton sac. Ta première phrase :',
      ["C'est un parapluie.", 'Il est un parapluie.'], 0,
      "Un objet nouveau, avec un : tu montres. EN: something new, with un, so c'est.")),
    ctl('Le piège de it', 'It is grey, pour ta veste :',
      ["C'est grise.", 'Elle est grise.'], 1,
      "La veste est déjà là : elle, et grise au féminin. EN: the jacket is already named: elle."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['etiquette', 'doigt'],
};

/** TRAP: four things an anglophone does with it. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre étiquettes mal collées',
  errors: [
    {
      wrong: 'Ma veste ? Il est grise.',
      right: fr(E(1017)),
      why: "Normal : en anglais, it sert pour tous les objets, et il ressemble à it. Mais veste est féminin, donc elle. EN: English it covers every object; French picks by gender.",
    },
    {
      wrong: "Mon ordinateur ? C'est lent.",
      right: fr(E(1026)),
      why: "« C'est lent » existe : il parle de tout, du réseau, de la journée. Pour l'ordinateur lui-même, déjà nommé, colle l'étiquette : il est lent. EN: c'est lent is about everything; il est lent is about the computer.",
    },
    {
      wrong: 'Les chaises sont neuves. Ils sont confortables.',
      right: fr(E(1021)),
      why: "Tu as pensé au pluriel, et c'est bien. Mais chaises est féminin : elles, et confortables. EN: feminine plural noun, so elles.",
    },
    {
      wrong: 'Ta tante ? Elle est gentil et généreux.',
      right: fr(E(1027)),
      why: "Tu as bien choisi elle. L'adjectif suit aussi le nom : gentille, généreuse. EN: the adjective agrees too.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['etiquette'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: "Écris l'étiquette que tu entends",
  frSub: 'il, elle, et leurs adjectifs',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['etiquette'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le genre', '« Mon ordinateur ? ... est lent. »',
    ['Il', 'Elle'], 0,
    "Ordinateur est masculin : il. EN: masculine noun, il."),
  ctl("L'accord", '« Ma chambre ? Elle est ... . »',
    ['calme et petit', 'calme et petite', 'calmes et petites'], 1,
    "Chambre est féminin singulier : petite. EN: feminine singular."),
  ctl('Le pluriel', '« Les chaises ? ... confortables. »',
    ['Elles sont', 'Ils sont'], 0,
    "Chaises est féminin pluriel : elles. EN: elles."),
], ['etiquette']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: "L'étiquette",
    opener: {
      line: "Ta veste est grise, et it ne suffit plus : ici tu apprends à coller la bonne étiquette, il ou elle. EN: Your jacket is grey and it no longer works: here you learn to stick on the right label, il or elle.",
      imageRef: 'lessons/cest-il-est/act02.jpg',
    },
    sections: [],
    milestone: "Tu reprends un objet avec il ou elle selon le genre du nom, et l'adjectif suit. EN: You can refer to an object with il or elle by its noun's gender, with the adjective agreeing.",
    estScreens: 32, restPoints: ['a2-exemples'],
  },
  sections: [A2_HISTOIRE, A2_ACCORD, A2_CONSTRUIRE, A2_EXEMPLES, A2_CHOISIR, A2_ERREURS, A2_DICTEE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LE MÉTIER ET L'ADJECTIF
 *
 *  a1.06 and a1.11 own il est médecin and c'est un médecin. What is new: the
 *  moment an adjective or a complement arrives, the job is a noun you point
 *  at, and il est un is never right. Nationality and religion, the same.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear. `hideLines` because the questions are about what the ear
 *  caught: was there an article or not. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Une soirée de réseautage',
  frSub: 'Écoute les présentations',
  lines: [
    ln(E(1034)), ln(E(1035)), ln(E(1036)), ln(E(1037)),
    ln(E(1040)), ln(E(1041)), ln(E(1049)), ln(E(1051)),
  ],
  questions: [
    { q: 'Deuxième phrase : qu’est-ce qu’on apprend de plus sur l’ingénieur ?', opts: ['Il est très doué.', 'Il est québécois.'], correct: 0, why: "« C'est un ingénieur très doué » : l'adjectif fait venir c'est un. EN: the adjective brings in c'est un." },
    { q: 'Troisième et quatrième phrases : la même femme a-t-elle le même métier ?', opts: ['Non', 'Oui, comptable'], correct: 1, why: "Le même métier, d'abord sans article, puis avec une et un adjectif. EN: same job, bare and then with an adjective." },
    { q: 'Cinquième phrase : as-tu entendu un article avant sénégalaise ?', opts: ['Oui, une', 'On ne sait pas', 'Non'], correct: 2, why: "« Elle est sénégalaise » : une étiquette, sans article. EN: a label, no article." },
    { q: 'Septième phrase : combien de fois entends-tu est ?', opts: ['deux fois', 'une fois', 'trois fois'], correct: 0, why: "« C'est un collègue, il est graphiste » : deux fois, une fois pour montrer, une fois pour décrire. EN: twice, point then describe." },
    { q: 'Dernière phrase : le médecin est...', opts: ['mauvais', 'bon'], correct: 1, why: "« C'est un bon médecin » : bon, et donc c'est un. EN: a good doctor." },
  ],
  audio: REC('rec-b1-22-reseau-ecoute'),
  say: REFRAME,
  terms: ['metier'],
};

const A3_METIER: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-metier',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-metier',
  title: 'Le métier, avec ou sans article',
  frSub: "Quand l'adjectif arrive",
  hint: 'Quatre cartes. Cherche le petit mot devant le métier.',
  audio: REC('rec-b1-22-metier'),
  say: REFRAME,
  terms: ['metier'],
  cards: [
    {
      head: 'Ce que tu sais déjà', label: Cap(ETRE_REF),
      fr: "il est médecin · c'est un médecin",
      sub: '[ee-leh mayd-SEHⁿ] · [seh-tuhⁿ mayd-SEHⁿ]',
      body: `« ${A106_TEST_FR} » Ici, on ajoute un adjectif. EN: the A1 test, and now an adjective joins it.`,
    },
    {
      head: 'Un adjectif arrive', label: "c'est un",
      fr: fr(E(1035)),
      sub: rsOf(E(1035)),
      body: "Très doué décrit l'ingénieur : le métier redevient un nom, avec un, et on le montre. Il est un ingénieur doué ne se dit pas. EN: with an adjective, the job becomes a noun: c'est un.",
    },
    {
      head: 'La nationalité', label: Cap(PAYS_REF),
      fr: "elle est sénégalaise · c'est une Sénégalaise",
      sub: '[eh-leh say-nay-ga-LEHZ] · [seh-tünn say-nay-ga-LEHZ]',
      body: "Sans article, c'est un adjectif, en minuscule. Avec une, c'est un nom, avec une majuscule. EN: bare adjective in lower case; with une, a capitalised noun.",
    },
    {
      head: 'La religion, la vie', label: 'il est, elle est',
      fr: fr(E(1042)),
      sub: rsOf(E(1042)),
      body: "Catholique, musulmane, marié, retraité : des étiquettes, sans article, comme le métier. EN: religion and status work like a job: no article.",
    },
  ],
};

/** NAME, as a lookup: the same person, labelled and then pointed at. */
const A3_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-tableau',
  layer: 'core',
  sheetId: 'sheet-metier',
  title: 'Étiqueter, puis montrer',
  cols: ["L'étiquette", 'Le doigt', 'Ce qui arrive'],
  rows: [
    { cells: ['il est médecin', "c'est un bon médecin", 'un adjectif'], say: fr(E(1051)),
      detail: { title: 'bon', body: "Bon décrit le médecin : on montre, avec un. EN: bon makes it c'est un.", say: fr('fr.a1.metiers.275') } },
    { cells: ['elle est comptable', "c'est une excellente comptable", 'un adjectif'], say: fr(E(1037)),
      detail: { title: 'excellente', body: "L'adjectif peut aller devant le métier : l'article reste. EN: the article stays wherever the adjective sits.", say: fr(E(1036)) } },
    { cells: ['il est québécois', "c'est un Québécois", 'un, et la majuscule'], say: fr(E(1039)),
      detail: { title: 'la nationalité', body: "Avec un, la nationalité devient un nom, avec une majuscule. EN: with un, a capitalised noun.", say: fr(E(1038)) } },
    { cells: ['il est boulanger', "c'est le boulanger du quartier", 'le, et un complément'], say: fr(E(1045)),
      detail: { title: 'du quartier', body: "Un complément précise le métier : on le montre, avec le. EN: a complement makes it c'est le.", say: fr(E(1044)) } },
    { cells: ['elle est infirmière', "c'est une infirmière qui travaille la nuit", 'une, et qui'], say: fr(E(1047)),
      detail: { title: 'qui', body: "Une relative aussi précise le métier : c'est une. EN: a relative clause works the same way.", say: fr('fr.a1.metiers.261') } },
    { cells: ['il est graphiste', "c'est un collègue", 'un autre nom'], say: fr(E(1049)),
      detail: { title: 'deux phrases', body: "On montre la personne, puis on colle l'étiquette du métier. EN: point at the person, then label the job.", say: fr(E(1049)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['metier'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Seul, ou avec un adjectif',
  groups: [
    grp('Le métier seul', [
      it(E(1034), 'ingénieur'),
      it(E(1036), 'comptable'),
      it(E(1044), 'boulanger, après un nom'),
      it('fr.a1.metiers.261', 'infirmière'),
    ], chk(
      'Que trouves-tu entre est et le métier ?',
      ['un ou une', 'rien'], 1,
      "Rien : le métier est une étiquette. EN: nothing, the job is a label.")),
    grp('Le métier précisé', [
      it(E(1035), 'très doué'),
      it(E(1037), 'excellente'),
      it(E(1045), 'du quartier'),
      it(E(1051), 'bon'),
    ], chk(
      "Pourquoi c'est dans ces quatre phrases ?",
      ['parce que ce sont des hommes', 'parce que le métier a un petit mot et un adjectif ou un complément'], 1,
      "Le métier est précisé : c'est un nom qu'on montre. EN: the job is specified, so you point at it.")),
    ctl('La nationalité', '« ... une Sénégalaise. »',
      ["C'est", 'Elle est'], 0,
      "Une devant : on montre, et la majuscule suit. EN: une, so c'est."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['metier'],
};

/** Consolidation, as answers. No « EN: » tail anywhere on a back. */
const A3_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a3-cartes',
  layer: 'core',
  title: 'Huit cartes pour les métiers',
  cards: [
    { front: 'he is an engineer', back: 'il est ingénieur', say: fr(E(1034)) },
    { front: 'he is a very gifted engineer', back: "c'est un ingénieur très doué", say: fr(E(1035)) },
    { front: 'she is an accountant', back: 'elle est comptable', say: fr(E(1036)) },
    { front: 'she is an excellent accountant', back: "c'est une excellente comptable", say: fr(E(1037)) },
    { front: 'she is Senegalese', back: 'elle est sénégalaise', say: fr(E(1040)) },
    { front: 'she is a Senegalese woman', back: "c'est une Sénégalaise", say: fr(E(1041)) },
    { front: 'he is the neighbourhood baker', back: "c'est le boulanger du quartier", say: fr(E(1045)) },
    { front: 'he is a good doctor', back: "c'est un bon médecin", say: fr(E(1051)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['metier'],
};

const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Qui il est, et ce qu’il est',
  groups: [
    grp('Adjectif ou nom', [
      it('fr.a1.pays-et-nationalites.316', 'une étiquette'),
      it(E(1039), 'un nom, montré'),
      it('fr.a1.pays-et-nationalites.317', 'une étiquette'),
      it(E(1041), 'un nom, montré'),
    ], chk(
      "« C'est un Québécois » : pourquoi la majuscule ?",
      ['parce que la phrase commence par c’est', 'parce que c’est un nom, avec un devant'], 1,
      "Avec un, Québécois est un nom de personne : majuscule. EN: with un it is a noun, so a capital.")),
    grp('Montrer, puis décrire', [
      it(E(1049), 'un collègue, puis graphiste'),
      it(E(1048), 'marié, père : des étiquettes'),
      it(E(1050), 'bénévole : une étiquette'),
      it('fr.a1.metiers.247', 'un professeur, montré'),
    ], chk(
      "« C'est un collègue, il est graphiste. » Combien de métiers sans article ?",
      ['un : graphiste', 'deux'], 0,
      "Collègue a un, graphiste n'a rien : un seul métier-étiquette. EN: only graphiste is bare.")),
    ctl('Le choix', 'Ton médecin est excellent. Que dis-tu ?',
      ['Il est un excellent médecin.', 'Il est excellent médecin.', "C'est un excellent médecin."], 2,
      "Un adjectif : c'est un. EN: an adjective, so c'est un."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['metier', 'doigt'],
};

/** TRAP, stepped: un kept after il est. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Il est un, jamais',
  rule: {
    title: 'Il est ne prend pas de petit mot',
    body: "Après il est ou elle est, jamais un, une ou le. Si le métier ou la nationalité a un petit mot, tu passes à c'est. EN: il est never takes a determiner; with one, switch to c'est.",
  },
  cards: [
    { promptLabel: 'un après il est', promptSound: 'Il est un ingénieur.', fr: fr(E(1034)), ipa: ipaOf(E(1034)), tip: "Le métier seul : pas d'article. EN: a bare job." },
    { promptLabel: 'un adjectif avec il est', promptSound: 'Il est un ingénieur très doué.', fr: fr(E(1035)), ipa: ipaOf(E(1035)), tip: "Avec un adjectif, c'est un. EN: with an adjective, c'est un." },
    { promptLabel: 'une majuscule sans article', promptSound: 'Elle est Sénégalaise.', fr: fr(E(1040)), ipa: ipaOf(E(1040)), tip: "Sans article, c'est un adjectif, en minuscule. EN: bare, so lower case." },
    { promptLabel: "c'est sans petit mot", promptSound: "C'est comptable.", fr: fr(E(1036)), ipa: ipaOf(E(1036)), tip: "Pour une personne et un métier seul : elle est. EN: a bare job takes elle est." },
    { promptLabel: 'la religion avec un article', promptSound: 'Il est un catholique, elle est une musulmane.', fr: fr(E(1042)), ipa: ipaOf(E(1042)), tip: "La religion est une étiquette : pas d'article. EN: no article for religion." },
    { promptLabel: 'le bon médecin', promptSound: 'Il est un bon médecin.', fr: fr(E(1051)), ipa: ipaOf(E(1051)), tip: "Bon fait venir c'est un. EN: bon brings c'est un." },
  ],
  drill: [
    { promptSay: 'Il est ... .', opts: ['ingénieur', 'un ingénieur'], correct: 0 },
    { promptSay: '... un excellent médecin.', opts: ['Il est', "C'est"], correct: 1 },
    { promptSay: 'Elle est ... .', opts: ['Sénégalaise', 'une sénégalaise', 'sénégalaise'], correct: 2 },
    { promptSay: "C'est une ... .", opts: ['Québécoise', 'québécoise'], correct: 0 },
    { promptSay: '... le boulanger du quartier.', opts: ['Il est', "C'est", 'Elle est'], correct: 1 },
    { promptSay: 'Elle est ... .', opts: ['une infirmière', 'la infirmière', 'infirmière'], correct: 2 },
    { promptSay: 'Il est ... et père de deux enfants.', opts: ['marié', 'un marié'], correct: 0 },
    { promptSay: '... une comptable très sérieuse.', opts: ["C'est", 'Elle est'], correct: 0 },
  ],
  steps: TRAP_STEPS('Il est ne prend pas de petit mot'),
  audio: REC('rec-b1-22-piege-metier'),
  say: REFRAME,
  terms: ['metier'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le métier seul', '« Mon père est ... . »',
    ['un boulanger', 'boulanger'], 1,
    "Après est, le métier seul n'a pas d'article. EN: a bare job."),
  ctl("L'adjectif", 'Ta collègue est une comptable excellente. Tu dis :',
    ["C'est une excellente comptable.", 'Elle est une excellente comptable.'], 0,
    "Avec un adjectif, c'est une. EN: c'est une with an adjective."),
  ctl('La majuscule', '« Il est ... . »',
    ['Canadien', 'canadien', 'un Canadien'], 1,
    "Sans article, un adjectif, en minuscule. EN: bare, lower case."),
], ['metier']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: "Le métier et l'adjectif",
    opener: {
      line: "Il est médecin, tu le sais ; un excellent médecin, c'est autre chose : ici tu apprends ce qu'un adjectif change. EN: He is a doctor, you know that; an excellent doctor is another matter: here you learn what an adjective changes.",
      imageRef: 'lessons/cest-il-est/act03.jpg',
    },
    sections: [],
    milestone: "Tu dis il est ingénieur et c'est un ingénieur doué, et tu ne mets plus jamais un après il est. EN: You can say il est ingénieur and c'est un ingénieur doué, and never put un after il est.",
    estScreens: 38, restPoints: ['a3-tableau', 'a3-cartes'],
  },
  sections: [A3_ECOUTE, A3_METIER, A3_TABLEAU, A3_CONSTRUIRE, A3_CARTES, A3_CHOISIR, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — C'EST MOI
 *
 *  a1.06 owns c'est Marc. New: moi, toi, lui, eux; ce sont eux against
 *  c'est eux; the phone.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the intercom rings all evening. No « ? » or « ! » in a bubble. */
const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: "L'interphone",
  frSub: 'Qui sonne ce soir',
  setting: "Vendredi soir, chez toi, rue Saint-Denis. Tu reçois tes nouveaux collègues à souper. L'interphone ne s'arrête pas.",
  bubbles: [
    { from: 'narrator', fr: "Première sonnerie. Tu appuies sur le bouton de l'interphone.", en: 'First ring. You press the intercom button.' },
    { from: 'coach', fr: fr(E(1056)), en: src(E(1056)).en, warn: 'nous, après c’est' },
    { from: 'user', fr: "Ah, c'est vous. Montez, c'est au troisième.", en: "Oh, it's you. Come up, it's on the third floor." },
    { from: 'narrator', fr: 'Deuxième sonnerie. Une voix que tu ne connais pas encore.', en: 'Second ring. A voice you do not know yet.' },
    { from: 'coach', fr: fr(E(1062)), en: src(E(1062)).en, warn: 'un nom et un prénom : c’est' },
    { from: 'user', fr: 'Bonsoir, Julie. Entrez, la porte est ouverte.', en: 'Good evening, Julie. Come in, the door is open.' },
    { from: 'coach', fr: "Quelqu'un sonne encore. Je crois que c'est Monsieur Roy.", en: "Someone is ringing again. I think it's Mr Roy." },
    { from: 'user', fr: "Oui, c'est lui. Il a un gâteau.", en: "Yes, it's him. He has a cake." },
  ],
  closing: { fr: 'Un prénom, un nom, moi, nous, lui : on montre, avec c’est.', en: 'A first name, a surname, moi, nous, lui: you point, with c’est.' },
  audio: REC('rec-b1-22-interphone'),
  say: REFRAME,
  terms: ['tonique', 'doigt'],
};

const A4_TONIQUE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-tonique',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-doigt',
  title: 'Un nom, un pronom : on montre',
  frSub: "c'est Aïcha, c'est moi",
  hint: 'Quatre cartes. Après c’est, jamais je, tu ou il.',
  audio: REC('rec-b1-22-tonique'),
  say: REFRAME,
  terms: ['tonique'],
  cards: [
    {
      head: 'Un prénom', label: Cap(ETRE_REF),
      fr: fr(E(1052)),
      sub: rsOf(E(1052)),
      body: "Tu le sais depuis le A1 : devant un prénom, c'est. Un nom propre est déjà précis, on le montre. EN: a name is already precise, so you point at it.",
    },
    {
      head: 'Moi, toi, lui', label: "c'est + pronom",
      fr: "c'est moi · c'est lui",
      sub: '[seh MWA] · [seh LWEE]',
      body: "Devant moi, toi, lui, elle, nous et vous : toujours c'est. Il est moi n'existe pas. EN: before a stressed pronoun, always c'est.",
    },
    {
      head: 'Eux et elles', label: "ce sont · c'est",
      fr: fr(E(1057)),
      sub: rsOf(E(1057)),
      body: "Au pluriel, ce sont eux à l'écrit. À l'oral, tu entendras aussi c'est eux. Avec nous et vous, toujours c'est. EN: ce sont eux in writing, c'est eux in speech; always c'est nous.",
    },
    {
      head: 'Au téléphone', label: "qui est à l'appareil",
      fr: fr(E(1062)),
      sub: rsOf(E(1062)),
      body: "Au téléphone, tu te présentes avec c'est et ton nom. Si on te demande, toi : c'est moi-même. EN: on the phone, c'est plus your name.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Montre la personne',
  groups: [
    grp('Un nom propre', [
      it(E(1052), 'un prénom'),
      it(E(1059), 'un titre et un nom'),
      it(E(1067), 'un prénom, puis qui elle est'),
      it('fr.a1.metiers.256', 'le prénom seul'),
    ], chk(
      'Après c’est, un prénom prend-il un article ?',
      ['Non, jamais.', 'Oui, le ou la.'], 0,
      "Jamais : un prénom est déjà précis. EN: never, a name is already precise.")),
    grp('Un pronom', [
      it(E(1053), 'moi'),
      it(E(1055), 'lui'),
      it(E(1063), 'vous'),
      it(E(1064), 'elle'),
    ], chk(
      '« C’est ... » : quel pronom va après ?',
      ['moi', 'je'], 0,
      "La forme forte : moi. Je a toujours besoin d'un verbe. EN: the stressed form moi."),),
    ctl('Le pluriel', "À l'écrit : « ... eux, les nouveaux voisins. »",
      ["C'est", 'Ils sont', 'Ce sont'], 2,
      "Ce sont eux, à l'écrit. EN: ce sont eux in writing."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tonique'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  sheetId: 'sheet-doigt',
  title: 'Montrer quelqu’un, partout',
  examples: [
    ex(E(1054), 'une question, avec toi : c’est toujours c’est.'),
    ex(E(1058), 'eux, à l’oral : c’est eux.'),
    ex(E(1061), 'la question qu’on te pose au téléphone.'),
    ex('fr.a2.rp-etiquette.002', 'la réponse quand c’est toi qu’on demande.'),
    ex(E(1066), 'au négatif : ce n’est pas moi.'),
    ex(E(1065), 'la paire à retenir.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tonique'],
};

/** CHOOSE: who someone is, or what they are like. */
const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Qui est-ce, ou comment est-il',
  groups: [
    grp('Qui, puis comment', [
      it(E(1059), 'qui : un nom'),
      it(E(1029), 'comment : des adjectifs'),
      it(E(1052), 'qui : un prénom'),
      it(E(1018), 'comment : drôle'),
    ], chk(
      "« C'est Monsieur Roy » et « il est sérieux » : laquelle dit qui c'est ?",
      ['Il est sérieux.', "C'est Monsieur Roy."], 1,
      "Le doigt dit qui ; l'étiquette dit comment. EN: the finger says who, the label says what like."),),
    grp('Au téléphone', [
      it(E(1061), 'la question'),
      it(E(1062), 'se présenter'),
      it('fr.a2.rp-etiquette.002', 'c’est toi qu’on demande'),
      it(E(1065), 'la paire'),
    ], chk(
      "On demande Hugo. C'est toi, Hugo. Que dis-tu ?",
      ["C'est moi-même.", 'Il est moi.', 'Je suis lui.'], 0,
      "C'est moi-même : tu te montres. EN: you point at yourself."),),
    ctl('Le prénom', 'Tu présentes ta cousine : « ... Chloé. »',
      ['Elle est', "C'est"], 1,
      "Devant un prénom : c'est. EN: before a name, c'est."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tonique', 'etiquette'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de rater quelqu’un',
  errors: [
    {
      wrong: 'Il est Hugo, mon collègue.',
      right: "C'est Hugo, mon collègue.",
      why: "Normal : en anglais, he is Hugo passe très bien. En français, un prénom se montre du doigt : c'est Hugo. EN: a name takes c'est.",
    },
    {
      wrong: "C'est je.",
      right: fr(E(1053)),
      why: "Je ne vit jamais seul : il lui faut un verbe. Après c'est, il faut la forme forte, moi. EN: after c'est, the stressed form moi.",
    },
    {
      wrong: 'Ils sont eux, les nouveaux voisins.',
      right: fr(E(1057)),
      why: "Ils et eux disent deux fois la même chose. Pour montrer des personnes : ce sont eux. EN: to point at people, ce sont eux.",
    },
    {
      wrong: "Qui est à l'appareil ? Il est Julie Côté.",
      right: "Qui est à l'appareil ? C'est Julie Côté.",
      why: "Au téléphone, on te demande qui c'est : tu te montres, avec c'est. EN: on the phone you point at yourself with c'est.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tonique'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl("L'interphone", 'On sonne, tu réponds que c’est toi :',
    ["C'est moi.", "C'est je.", 'Il est moi.'], 0,
    "C'est moi : la forme forte. EN: c'est moi."),
  ctl('Le prénom', '« ... Aïcha, de la comptabilité. »',
    ['Elle est', "C'est"], 1,
    "Un prénom : c'est. EN: a name, c'est."),
  ctl("L'écrit", '« ... eux qui ont appelé. » (à l’écrit)',
    ['Ce sont', "C'est", 'Ils sont'], 0,
    "À l'écrit, ce sont eux. EN: ce sont eux in writing."),
], ['tonique']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: "C'est moi",
    opener: {
      line: "L'interphone sonne, et tu dois dire qui c'est : ici tu montres les gens par leur nom, ou avec moi, toi, lui. EN: The intercom rings and you have to say who it is: here you point at people by name, or with moi, toi, lui.",
      imageRef: 'lessons/cest-il-est/act04.jpg',
    },
    sections: [],
    milestone: "Tu montres quelqu'un avec c'est et son nom, ou avec moi, toi, lui, eux, et tu te présentes au téléphone. EN: You can point at someone with c'est and a name or a stressed pronoun, and introduce yourself on the phone.",
    estScreens: 28, restPoints: ['a4-construire'],
  },
  sections: [A4_HISTOIRE, A4_TONIQUE, A4_CONSTRUIRE, A4_EXEMPLES, A4_CHOISIR, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — C'EST BEAU
 *
 *  A situation, an idea, an activity or a reaction has no noun, so no
 *  gender: c'est and the masculine. « Elle est difficile » is about a named
 *  feminine noun, never about a situation.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_CARTE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-carte',
  layer: 'core',
  questionsInModal: true,
  title: 'Une carte de Québec',
  frSub: 'Lis, et cherche ce que Chloé montre',
  text: CARTE_TEXT,
  glossary: [
    { word: 'étroites', en: 'narrow', note: 'Pas larges : deux personnes passent à peine.' },
    { word: 'traversier', en: 'ferry', note: 'Au Québec, le bateau qui traverse le fleuve.' },
    { word: "l'essentiel", en: 'the main thing', note: 'Ce qui compte le plus.' },
    { word: 'ravie', en: 'delighted', note: 'Très contente.' },
    { word: "Je t'embrasse", en: 'Love', note: 'La fin d’une carte à un ami.' },
  ],
  questions: [
    { q: "« C'est magnifique, ici » : de quoi parle Chloé ?", a: "De tout : la ville, l'air, le moment. Pas de nom précis, donc c'est, au masculin." },
    { q: 'Et « elle est pleine de charme » ?', a: 'De la vieille ville, un nom féminin déjà nommé. Donc elle, et pleine au féminin.' },
    { q: "Trouve un c'est + adjectif qui parle d'une activité.", a: "« c'est fatigant, mais c'est beau » : monter les rues. « C'est cher, mais c'est délicieux » : manger à Québec." },
    { q: 'Pourquoi « il est propre » ?', a: "Il reprend l'hôtel, déjà nommé : une étiquette sur l'hôtel." },
    { q: "« C'était génial » : pourquoi pas « il était génial » ?", a: "Chloé parle de toute la sortie en traversier, pas d'un nom. C'était montre toute l'expérience." },
  ],
  audio: REC('rec-b1-22-carte'),
  say: REFRAME,
  terms: ['situation', 'etiquette'],
};

const A5_SITUATION: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-situation',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-situation',
  title: 'Montrer tout le tableau',
  frSub: "c'est + adjectif au masculin",
  hint: 'Quatre cartes. Cherche le nom : parfois, il n’y en a pas.',
  audio: REC('rec-b1-22-situation'),
  say: REFRAME,
  terms: ['situation'],
  cards: [
    {
      head: 'Tout le paysage', label: "c'est + masculin",
      fr: fr(E(1068)),
      sub: rsOf(E(1068)),
      body: "Tu montres tout : la ville, la neige, la lumière. Pas de nom précis, donc pas de genre : beau reste au masculin. EN: no single noun, no gender, so the masculine.",
    },
    {
      head: 'Un nom précis', label: 'elle est',
      fr: fr(E(1069)),
      sub: rsOf(E(1069)),
      body: "La vue est un nom féminin, déjà dit : tu colles l'étiquette, belle, magnifique. EN: a named feminine noun takes elle est and agrees.",
    },
    {
      head: 'Une activité', label: "c'est, après un infinitif",
      fr: fr(E(1078)),
      sub: rsOf(E(1078)),
      body: "Travailler de nuit n'est pas un nom : c'est une activité. Tu la montres avec c'est, au masculin. EN: an activity takes c'est and the masculine.",
    },
    {
      head: 'Une réaction', label: "c'est + adjectif",
      fr: "c'est vrai · c'est dommage · c'est génial",
      sub: '[seh VREH] · [seh do-MAZH] · [seh zhay-NYAL]',
      body: "Tu réagis à ce qu'on vient de dire : c'est, et un adjectif au masculin. C'est le cœur de la conversation. EN: reacting to what was said: c'est plus an adjective.",
    },
  ],
};

const A5_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-tableau',
  layer: 'core',
  sheetId: 'sheet-situation',
  title: 'La situation, ou le nom',
  cols: ['Tu parles de', "C'est", 'Il, elle est'],
  rows: [
    { cells: ['Québec en hiver', "c'est beau", 'la ville : elle est belle'], say: fr(E(1068)),
      detail: { title: 'le tout ou la ville', body: "Tout le moment : c'est beau. La ville seule : elle est belle. EN: the whole moment or the city itself.", say: fr(E(1085)) } },
    { cells: ['un déménagement', "c'est difficile", 'la question : elle est difficile'], say: fr(E(1070)),
      detail: { title: 'difficile', body: "Même adjectif, deux choses : la situation, ou une question précise. EN: same adjective, two targets.", say: fr(E(1071)) } },
    { cells: ['la vie à Genève', "c'est cher", 'la robe : elle est chère'], say: fr(E(1072)),
      detail: { title: 'cher', body: "La vie en général : c'est cher. Une robe précise : elle est chère. EN: life in general, or one dress.", say: fr(E(1077)) } },
    { cells: ['ta proposition', "c'est une bonne idée", 'ton idée : elle est bonne'], say: fr(E(1080)),
      detail: { title: 'une idée', body: "Avec une et un nom : c'est. EN: une plus a noun, so c'est.", say: fr(E(1080)) } },
    { cells: ['travailler de nuit', "c'est fatigant", 'la nuit : elle est longue'], say: fr(E(1078)),
      detail: { title: 'une activité', body: "Une activité n'a pas de genre : c'est, au masculin. EN: an activity has no gender.", say: fr(E(1078)) } },
    { cells: ["la réunion d'hier", "c'était ennuyeux", 'la réunion : elle était longue'], say: fr(E(1084)),
      detail: { title: 'au passé', body: "La règle ne change pas au passé : c'était, il était, elle était. EN: same rule in the past.", say: fr(E(1084)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['situation'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Une situation, ou un nom',
  groups: [
    grp('Tu montres une situation', [
      it(E(1070), 'un déménagement, en général'),
      it(E(1072), 'la vie, en général'),
      it(E(1078), 'une activité'),
      it(E(1079), 'la ville, puis l’impression'),
    ], chk(
      "Dans ces phrases, l'adjectif après c'est est :",
      ['accordé avec le nom qui suit', 'au masculin, toujours'], 1,
      "Au masculin : la situation n'a pas de genre. EN: always masculine after c'est.")),
    grp('Tu décris un nom', [
      it(E(1069), 'la vue'),
      it(E(1071), 'cette question'),
      it(E(1077), 'la robe'),
      it(E(1020), 'la chambre'),
    ], chk(
      "« Cette question est difficile. » Pourquoi pas c'est ?",
      ['parce que question est un nom précis', 'parce que la question est facile'], 0,
      "Un nom précis, déjà dit : l'étiquette. EN: a named noun gets the label.")),
    ctl('La réaction', "Ton ami a eu le poste. Tu réagis :",
      ['Il est génial.', "C'est génial."], 1,
      "Tu réagis à la nouvelle : c'est. EN: reacting to news, c'est."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['situation', 'etiquette'],
};

const A5_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a5-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    {
      hack: 'Cherche un seul nom, déjà dit.',
      why: "S'il y en a un, colle l'étiquette : il ou elle. S'il n'y en a pas, montre avec c'est. EN: one named noun, il or elle; none, c'est.",
    },
    {
      hack: "Après c'est, l'adjectif est au masculin.",
      why: "Si tu entends c'est belle, quelque chose ne va pas : c'est ne prend jamais un adjectif féminin seul. EN: c'est never takes a bare feminine adjective.",
    },
    {
      hack: 'Ajoute « tout ça » dans ta tête.',
      why: "« Tout ça, c'est cher. » Si la phrase garde son sens, tu parlais d'une situation. EN: if « all that » fits, it is a situation.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['situation'],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Réagir, ou décrire',
  groups: [
    grp('La même idée, deux cibles', [
      it(E(1072), 'la vie en général'),
      it(E(1077), 'une robe précise'),
      it('fr.a1.marche.094', 'le prix, au marché'),
      it(E(1071), 'une question précise'),
    ], chk(
      "Au marché, « c'est trop cher » parle de :",
      ['une fraise précise', 'le prix en général, la situation'], 1,
      "Tu montres la situation : le prix, tout ça. EN: the situation, the price in general.")),
    grp('Réagir', [
      it(E(1073), 'une bonne nouvelle'),
      it(E(1074), 'une mauvaise nouvelle'),
      it(E(1082), 'rien d’étonnant'),
      it(E(1083), 'une situation difficile'),
    ], chk(
      'Ton amie a raté son train. Tu réagis :',
      ["C'est dommage.", 'Elle est dommage.', 'Il est dommage.'], 0,
      "Tu réagis à la situation : c'est dommage. EN: c'est dommage."),),
    ctl("L'idée", '« Ta proposition ? ... une bonne idée. »',
      ['Elle est', "C'est"], 1,
      "Une et un nom : c'est. EN: une plus a noun, c'est."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['situation'],
};

/** TRAP, stepped: a feminine adjective after c'est, or il / elle for a
 *  situation. */
const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'La situation n’a pas de genre',
  rule: {
    title: "C'est, et le masculin",
    body: "Pour une situation, une activité ou une réaction : c'est, et l'adjectif au masculin. Il ou elle est seulement pour un nom déjà dit. EN: a situation takes c'est and the masculine; il or elle only for a named noun.",
  },
  cards: [
    { promptLabel: 'un féminin après c’est', promptSound: "C'est belle, Québec en hiver.", fr: fr(E(1068)), ipa: ipaOf(E(1068)), tip: "Tout le paysage : beau, au masculin. EN: the masculine." },
    { promptLabel: 'il pour une activité', promptSound: 'Travailler de nuit, il est fatigant.', fr: fr(E(1078)), ipa: ipaOf(E(1078)), tip: "Une activité : c'est. EN: an activity takes c'est." },
    { promptLabel: 'c’est pour un nom précis', promptSound: "La vue ? C'est belle.", fr: fr(E(1069)), ipa: ipaOf(E(1069)), tip: "La vue, déjà dite : elle est belle. EN: a named noun takes elle est." },
    { promptLabel: 'un accord après c’est', promptSound: "C'est chère, la vie à Genève.", fr: fr(E(1072)), ipa: ipaOf(E(1072)), tip: "Après c'est, cher reste au masculin. EN: cher stays masculine." },
    { promptLabel: 'il pour une réaction', promptSound: 'Il est dommage.', fr: fr(E(1074)), ipa: ipaOf(E(1074)), tip: "Tu réagis : c'est dommage. EN: a reaction takes c'est." },
    { promptLabel: 'il pour une idée', promptSound: 'Ta proposition ? Il est une bonne idée.', fr: fr(E(1080)), ipa: ipaOf(E(1080)), tip: "Une et un nom : c'est. EN: une plus a noun, c'est." },
  ],
  drill: [
    { promptSay: "C'est ... , Québec en hiver.", opts: ['belle', 'beau'], correct: 1 },
    { promptSay: 'La vue ? ... magnifique.', opts: ['Elle est', "C'est"], correct: 0 },
    { promptSay: 'Travailler de nuit, ... fatigant.', opts: ['il est', "c'est", 'elle est'], correct: 1 },
    { promptSay: "C'est ... , la vie à Genève.", opts: ['cher', 'chère'], correct: 0 },
    { promptSay: 'Cette question ? ... difficile.', opts: ["C'est", 'Il est', 'Elle est'], correct: 2 },
    { promptSay: 'Ton train est parti ? ... dommage.', opts: ['Il est', "C'est"], correct: 1 },
    { promptSay: 'La robe est jolie, mais ... un peu chère.', opts: ['elle est', "c'est"], correct: 0 },
    { promptSay: 'Un déménagement, ... difficile.', opts: ['il est', 'elle est', "c'est"], correct: 2 },
  ],
  steps: TRAP_STEPS("C'est, et le masculin"),
  audio: REC('rec-b1-22-piege-situation'),
  say: REFRAME,
  terms: ['situation'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le paysage', 'Tu regardes le fleuve au coucher du soleil :',
    ["C'est beau.", "C'est belle."], 0,
    "Tout le paysage : masculin. EN: the whole view, masculine."),
  ctl('Le nom', '« La chambre ? ... petite. »',
    ['Elle est', "C'est"], 0,
    "La chambre, un nom déjà dit : elle est. EN: a named noun, elle est."),
  ctl("L'activité", '« Nager dans le lac en mai, ... froid. »',
    ['il est', "c'est", 'elle est'], 1,
    "Une activité : c'est. EN: an activity, c'est."),
], ['situation']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: "C'est beau",
    opener: {
      line: "Le fleuve, la neige, la lumière : quand tu montres tout le tableau, il n'y a plus de nom. Ici tu apprends c'est beau. EN: The river, the snow, the light: when you point at the whole picture there is no noun left. Here you learn c'est beau.",
      imageRef: 'lessons/cest-il-est/act05.jpg',
    },
    sections: [],
    milestone: "Tu parles d'une situation, d'une activité ou d'une idée avec c'est et le masculin, et tu gardes elle est pour un nom précis. EN: You can talk about a situation with c'est and the masculine, and keep elle est for a named noun.",
    estScreens: 38, restPoints: ['a5-tableau', 'a5-hacks'],
  },
  sections: [A5_CARTE, A5_SITUATION, A5_TABLEAU, A5_CONSTRUIRE, A5_HACKS, A5_CHOISIR, A5_PIEGE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — CE SONT
 *
 *  a1.06 owns ce sont mes parents. New: what the learner will HEAR (c'est
 *  + plural), what they must WRITE (ce sont), the negative, and ce sont
 *  against ils sont by the same finger-and-label rule.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear. `hideLines`: the questions are about c'est vs ce sont,
 *  which the ear can tell apart (/sɛ/ against /sə sɔ̃/). */
const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Les photos du voyage',
  frSub: 'Écoute qui montre quoi',
  lines: [
    ln(E(1086)), ln(E(1087)), ln(E(1088)), ln(E(1093)),
    ln(E(1094)), ln(E(1097)), ln(E(1099)), ln(E(1095)),
  ],
  questions: [
    { q: 'Les deux premières phrases disent-elles la même chose ?', opts: ['Non', 'Oui, avec deux registres'], correct: 1, why: "Ce sont, puis c'est à l'oral : même sens. EN: same meaning, two registers." },
    { q: 'Troisième phrase : d’où viennent les amis ?', opts: ['de Dakar', 'de Liège', 'de Genève'], correct: 0, why: "« Ce sont des amis de Dakar. » EN: from Dakar." },
    { q: 'Cinquième phrase : as-tu entendu ce sont ?', opts: ["Oui", "Non, c'est"], correct: 1, why: "« C'est les photos » : la forme orale. EN: the spoken form." },
    { q: 'Sixième phrase : ces gens sont-ils des touristes ?', opts: ['Non, des voisins', 'Oui', 'On ne sait pas'], correct: 0, why: "« Ce ne sont pas des touristes, ce sont des voisins. » EN: neighbours." },
    { q: "Septième phrase : de qui sont-ce les parents ?", opts: ['de Moussa', "d'Hugo"], correct: 1, why: "« Ce sont les parents d'Hugo. » EN: Hugo's." },
  ],
  audio: REC('rec-b1-22-photos-ecoute'),
  say: REFRAME,
  terms: ['pluriel'],
};

const A6_PLURIEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-pluriel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-situation',
  title: 'Le doigt au pluriel',
  frSub: "ce sont, ou c'est à l'oral",
  hint: "Quatre cartes. L'écrit et l'oral ne disent pas tout à fait la même chose.",
  audio: REC('rec-b1-22-pluriel'),
  say: REFRAME,
  terms: ['pluriel'],
  cards: [
    {
      head: 'Ce que tu sais déjà', label: Cap(ETRE_REF),
      fr: fr('fr.a1.metiers.259'),
      sub: '[suh sohⁿ may pa-RAHⁿ]',
      body: "Le pluriel de c'est, c'est ce sont. Tu l'as appris au A1, et à l'écrit, rien ne change. EN: the plural of c'est is ce sont.",
    },
    {
      head: 'Ce que tu vas entendre', label: "c'est + pluriel",
      fr: fr(E(1087)),
      sub: rsOf(E(1087)),
      body: "À l'oral, beaucoup de francophones disent c'est mes collègues. Dans une conversation, c'est un registre, pas une faute. À l'écrit, non. EN: in speech c'est + plural is ordinary; not in writing.",
    },
    {
      head: 'Au négatif', label: 'ce ne sont pas',
      fr: fr(E(1089)),
      sub: rsOf(E(1089)),
      body: "À l'écrit, le négatif garde le pluriel : ce ne sont pas. Et après être, l'article reste : des, pas de. EN: ce ne sont pas, and the article stays after être.",
    },
    {
      head: 'Ce sont, ou ils sont', label: 'le doigt, l’étiquette',
      fr: 'ce sont des gens accueillants · ils sont accueillants',
      sub: '[suh sohⁿ day ZHAHⁿ a-kuh-YAHⁿ] · [eel sohⁿ ta-kuh-YAHⁿ]',
      body: "Avec des et un nom : ce sont. Avec un adjectif seul : ils sont. Le pluriel garde la même règle. EN: the plural keeps the finger-and-label rule.",
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce sont, ou ils sont',
  groups: [
    grp('Ce sont + nom', [
      it(E(1086), 'mes collègues'),
      it(E(1088), 'des amis'),
      it(E(1093), 'les photos'),
      it('fr.a2.pronoms-essentiels.370', 'mes clés'),
    ], chk(
      'Que trouves-tu après ce sont ?',
      ['un adjectif tout seul', 'un petit mot et un nom'], 1,
      "Un petit mot et un nom : tu montres. EN: a determiner and a noun, so ce sont.")),
    grp('Ils, elles sont + adjectif', [
      it(E(1091), 'accueillants'),
      it(E(1022), 'sympathiques'),
      it(E(1021), 'confortables'),
      it(E(1031), 'pour toi'),
    ], chk(
      '« Tes voisins ? ... très accueillants. »',
      ['Ils sont', 'Ce sont'], 0,
      "Un adjectif seul : l'étiquette, ils sont. EN: a bare adjective, ils sont.")),
    ctl('Au négatif', "À l'écrit : « ... des touristes. »",
      ["Ce n'est pas", 'Ils ne sont pas', 'Ce ne sont pas'], 2,
      "Ce ne sont pas, et des reste. EN: ce ne sont pas des."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pluriel'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  sheetId: 'sheet-situation',
  title: 'Ce sont, dans la vie',
  examples: [
    ex(E(1096), 'de bons souvenirs : de devant un adjectif, et ce sont.'),
    ex(E(1097), 'le négatif, puis le positif.'),
    ex(E(1099), 'la réponse écrite à « qui sont ces gens ».'),
    ex('fr.a1.adjectifs-essentiels.212', 'de vieux amis : ce sont.'),
    ex(E(1101), 'des objets, au pluriel.'),
    ex(E(1095), 'eux, à l’écrit.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pluriel'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: "L'oral, l'écrit",
  groups: [
    grp("L'oral ou l'écrit", [
      it(E(1087), "à l'oral"),
      it(E(1086), "à l'écrit"),
      it(E(1094), "à l'oral"),
      it(E(1093), "à l'écrit"),
    ], chk(
      'Tu écris une légende sous tes photos. Laquelle ?',
      ["C'est les photos de mon voyage.", 'Ce sont les photos de mon voyage.'], 1,
      "À l'écrit : ce sont. EN: in writing, ce sont.")),
    grp('Un nom, ou un adjectif', [
      it(E(1090), 'des gens, un nom'),
      it(E(1091), 'accueillants, un adjectif'),
      it(E(1096), 'des souvenirs, un nom'),
      it(E(1187), 'des voisins, un nom'),
    ], chk(
      '« Des voisins formidables » : ce sont ou ils sont ?',
      ['Ils sont des voisins formidables.', 'Ce sont des voisins formidables.'], 1,
      "Des et un nom : ce sont. EN: des plus a noun, ce sont.")),
    ctl('La question', "« Qui sont ces gens ? » Tu réponds à l'écrit :",
      ["Ce sont les parents d'Hugo.", "Ils sont les parents d'Hugo."], 0,
      "Les et un nom : ce sont. EN: ce sont."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pluriel', 'doigt'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre pluriels ratés',
  errors: [
    {
      wrong: 'Ils sont mes collègues.',
      right: fr(E(1086)),
      why: "Normal : en anglais, they are my colleagues. Mais mes est un petit mot : tu montres, donc ce sont. EN: mes is a determiner, so ce sont.",
    },
    {
      wrong: 'Ce sont très accueillants.',
      right: fr(E(1091)),
      why: "Ce sont veut un nom. Avec un adjectif seul, colle l'étiquette : ils sont. EN: ce sont needs a noun; a bare adjective takes ils sont.",
    },
    {
      wrong: 'Ce ne sont pas de touristes.',
      right: 'Ce ne sont pas des touristes.',
      why: "Après pas, des devient souvent de. Mais après être, l'article reste : ce ne sont pas des. EN: after être, des stays.",
    },
    {
      wrong: "Madame, c'est les documents demandés.",
      right: 'Madame, ce sont les documents demandés.',
      why: "C'est les documents se dit dans une conversation. Dans un courriel, écris ce sont. EN: in an email, ce sont.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pluriel'],
};

const A6_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a6-dictee',
  layer: 'core',
  title: 'Écris le pluriel que tu entends',
  frSub: 'à l’écrit, ce sont',
  itemIds: dicteeFor(6),
  audio: AUDIO,
  say: REFRAME,
  terms: ['pluriel'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl("L'écrit", 'Tu écris : « ... mes amis de Dakar. »',
    ['Ce sont', "C'est"], 0,
    "À l'écrit : ce sont. EN: ce sont in writing."),
  ctl("L'adjectif", '« Tes voisins ? ... sympathiques. »',
    ['Ce sont', 'Ils sont', "C'est"], 1,
    "Un adjectif seul : ils sont. EN: ils sont."),
  ctl("L'oral", "Ton ami dit « c'est mes parents ». C'est :",
    ['une faute grave', "de l'oral ordinaire"], 1,
    "À l'oral, c'est courant. À l'écrit, ce sont. EN: ordinary speech; write ce sont."),
], ['pluriel']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Ce sont',
    opener: {
      line: "Tu entends « c'est mes collègues » et tu écris « ce sont » : ici tu apprends le doigt au pluriel, à l'oral et à l'écrit. EN: You hear « c'est mes collègues » and write « ce sont »: here you learn the pointing finger in the plural, spoken and written.",
      imageRef: 'lessons/cest-il-est/act06.jpg',
    },
    sections: [],
    milestone: "Tu écris ce sont, tu comprends c'est + pluriel à l'oral, et tu gardes ils sont pour un adjectif. EN: You can write ce sont, understand spoken c'est + plural, and keep ils sont for an adjective.",
    estScreens: 32, restPoints: ['a6-exemples'],
  },
  sections: [A6_ECOUTE, A6_PLURIEL, A6_CONSTRUIRE, A6_EXEMPLES, A6_CHOISIR, A6_ERREURS, A6_DICTEE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — DE OU À
 *
 *  il est + adj + de + inf announces an infinitive still to come (written);
 *  c'est + adj + de + inf is its spoken twin; c'est / il est + adj + à +
 *  inf points BACK at a noun already named. a2.28's « c'est difficile à
 *  expliquer » is the chunk this act turns into a rule.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_REGLEMENT: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-reglement',
  layer: 'core',
  questionsInModal: true,
  title: "Le règlement de l'immeuble",
  frSub: 'Lis, et cherche de et à',
  text: REGLEMENT_TEXT,
  glossary: [
    { word: 'bail', en: 'lease', note: 'Le contrat de location.' },
    { word: 'couloirs', en: 'corridors', note: 'Les passages entre les appartements.' },
    { word: 'sous-sol', en: 'basement', note: 'L’étage sous la rue.' },
    { word: 'trier', en: 'to sort', note: 'Séparer le papier et le plastique.' },
    { word: 'concierge', en: 'caretaker', note: 'La personne qui s’occupe de l’immeuble.' },
  ],
  questions: [
    { q: 'Trouve trois phrases avec il est ... de.', a: "Il est important de lire, il est interdit de fumer, il est conseillé de fermer, il est nécessaire de trier, il est possible d'écrire. Un texte officiel : il est, de, puis l'infinitif." },
    { q: "« Il est facile à trouver » : il, c'est quoi ?", a: 'Le local à vélos, déjà nommé. Il est une étiquette sur lui, et à renvoie à lui.' },
    { q: "« C'est simple à faire » : qu'est-ce qui est simple ?", a: "Le tri, dont on vient de parler. À renvoie à ce qui est déjà dit." },
    { q: "Comment ton voisin dirait-il « il est interdit de fumer » dans l'escalier ?", a: "« C'est interdit de fumer ici. » À l'oral, c'est remplace souvent il est." },
    { q: "« C'est un homme patient, et il est très efficace » : pourquoi deux formes ?", a: "Le doigt, puis l'étiquette : c'est un homme, avec un ; il est efficace, un adjectif." },
  ],
  audio: REC('rec-b1-22-reglement'),
  say: REFRAME,
  terms: ['infinitif'],
};

const A7_INFINITIF: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-infinitif',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-infinitif',
  title: 'De annonce, à revient',
  frSub: "il est facile de, c'est facile à",
  hint: "Quatre cartes. Regarde ce qui vient après l'infinitif.",
  audio: REC('rec-b1-22-infinitif'),
  say: REFRAME,
  terms: ['infinitif'],
  cards: [
    {
      head: 'La règle écrite', label: 'il est + adj + de',
      fr: fr(E(1102)),
      sub: rsOf(E(1102)),
      body: "Ce il ne remplace rien : il annonce l'infinitif qui arrive après, avec son complément. C'est la forme des règlements et des courriels. EN: il announces the infinitive to come; the written form.",
    },
    {
      head: 'La même chose, à l’oral', label: "c'est + adj + de",
      fr: fr(E(1103)),
      sub: rsOf(E(1103)),
      body: "À l'oral, tu montres du doigt : c'est difficile de. Le sens ne change pas, seul le registre change. EN: the spoken version, same meaning.",
    },
    {
      head: 'Tu reviens à un nom', label: "c'est + adj + à",
      fr: fr(E(1104)),
      sub: rsOf(E(1104)),
      body: "Le logement est déjà nommé. L'infinitif n'a plus de complément, et à renvoie au nom. EN: the noun is already named, so à points back to it.",
    },
    {
      head: 'Tu la connais déjà', label: Cap(MEDECIN_REF),
      fr: fr('fr.a2.symptomes.222'),
      sub: '[seh dee-fee-SEEL a eks-plee-KAY]',
      body: "Cette phrase du A2 est déjà une règle : à, parce que la chose à expliquer est déjà là. Avec un nom précis : il ou elle est + adjectif + à. EN: à points back; a named noun takes il or elle est + à.",
    },
  ],
};

const A7_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-tableau',
  layer: 'core',
  sheetId: 'sheet-infinitif',
  title: 'Six phrases, trois structures',
  cols: ['Phrase', 'Structure', 'Registre'],
  rows: [
    { cells: ['il est difficile de trouver un logement', 'il est + adj + de', 'écrit'], say: fr(E(1102)),
      detail: { title: 'il est ... de', body: "L'infinitif et son complément arrivent après. EN: the infinitive and its object come after.", say: fr(E(1106)) } },
    { cells: ["c'est difficile de trouver un logement", "c'est + adj + de", 'oral'], say: fr(E(1103)),
      detail: { title: "c'est ... de", body: "Même sens, à l'oral. EN: same meaning, spoken.", say: fr(E(1112)) } },
    { cells: ["un logement, c'est difficile à trouver", "c'est + adj + à", 'les deux'], say: fr(E(1104)),
      detail: { title: "c'est ... à", body: "Le nom est dit avant : à revient vers lui. EN: the noun comes first; à points back.", say: fr(E(1108)) } },
    { cells: ['ce formulaire est facile à remplir', 'nom + est + adj + à', 'les deux'], say: fr(E(1107)),
      detail: { title: 'le nom sujet', body: "Le nom est le sujet : à. EN: the noun is the subject, so à.", say: fr(E(1114)) } },
    { cells: ['cette recette ? elle est simple à préparer', 'elle est + adj + à', 'les deux'], say: fr(E(1110)),
      detail: { title: 'elle est ... à', body: "Une étiquette sur la recette, déjà nommée. EN: a label on the recipe.", say: fr(E(1116)) } },
    { cells: ['il est interdit de fumer', 'il est + adj + de', 'écrit, règlement'], say: fr(E(1105)),
      detail: { title: 'les règlements', body: "La forme des panneaux et des règlements. EN: the form of signs and rules.", say: fr('fr.b1.droit.002') } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'De ou à',
  groups: [
    grp("De : l'infinitif arrive avec son complément", [
      it(E(1102), 'trouver un logement'),
      it(E(1106), 'signer le bail'),
      it(E(1111), 'payer en ligne'),
      it(E(1113), 'arriver en avance'),
    ], chk(
      "Dans ces phrases, que vient après l'infinitif ?",
      ['rien du tout', 'son complément : un logement, le bail, en ligne'], 1,
      "Le complément suit : de annonce tout ça. EN: the object follows, and de announces it.")),
    grp('À : on revient à un nom', [
      it(E(1104), 'le logement'),
      it(E(1107), 'le formulaire'),
      it(E(1110), 'la recette'),
      it(E(1114), 'le texte'),
    ], chk(
      '« Ce texte est difficile à lire. » Lire quoi ?',
      ['le texte, déjà nommé', 'autre chose'], 0,
      "Le texte : à renvoie vers lui. EN: à points back to the text.")),
    ctl('De ou à', '« Il est nécessaire ... réserver. »',
      ['à', 'de', 'que'], 1,
      "Il est + adjectif, puis de. EN: il est + adj + de."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: "L'écrit, l'oral, la personne",
  groups: [
    grp("L'écrit ou l'oral", [
      it(E(1105), 'un règlement'),
      it('fr.b1.droit.002', 'un panneau'),
      it(E(1112), 'une conversation'),
      it(E(1115), 'une conversation'),
    ], chk(
      "Tu écris le règlement d'une salle de sport. Laquelle ?",
      ['Il est interdit de manger dans la salle.', "C'est interdit de manger dans la salle."], 0,
      "Un règlement : il est ... de. EN: rules take il est ... de.")),
    grp('Une personne, une chose', [
      it(E(1116), 'une personne'),
      it(E(1108), 'une chose'),
      it(E(1117), 'un service qu’on te rend'),
      it('fr.a2.symptomes.222', 'une chose'),
    ], chk(
      '« Elle est agréable à vivre. » Qui est agréable ?',
      ['la vie en général', 'une personne, déjà nommée'], 1,
      "Elle reprend une personne, et à renvoie à elle. EN: elle is a person; à points back."),),
    ctl('La réaction', 'Ton voisin porte tes courses. Tu dis :',
      ["Il est gentil à m'aider.", "C'est gentil de m'aider."], 1,
      "Tu montres ce qu'il fait : c'est gentil de. EN: c'est gentil de."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif'],
};

/** TRAP, stepped: de and à swapped. */
const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'De devant, à derrière',
  rule: {
    title: 'De annonce, à revient',
    body: "Il est + adjectif + de : l'infinitif arrive avec son complément. Nom + est + adjectif + à : l'infinitif revient vers le nom. EN: de looks ahead to the infinitive; à looks back to a named noun.",
  },
  cards: [
    { promptLabel: 'à au lieu de de', promptSound: 'Il est difficile à trouver un logement à Montréal.', fr: fr(E(1102)), ipa: ipaOf(E(1102)), tip: "Le logement vient après : de. EN: the object follows, so de." },
    { promptLabel: 'de au lieu de à', promptSound: "Un logement, c'est difficile de trouver.", fr: fr(E(1104)), ipa: ipaOf(E(1104)), tip: "Le logement est déjà dit : à. EN: already named, so à." },
    { promptLabel: 'elle pour une règle', promptSound: "Elle est interdite de fumer dans l'immeuble.", fr: fr(E(1105)), ipa: ipaOf(E(1105)), tip: "Le il de la règle ne remplace rien : il. EN: the impersonal il." },
    { promptLabel: 'de après un nom sujet', promptSound: 'Ce formulaire est facile de remplir.', fr: fr(E(1107)), ipa: ipaOf(E(1107)), tip: "Le formulaire est le sujet : à. EN: the noun is the subject, so à." },
    { promptLabel: 'que au lieu de de', promptSound: 'Il est important que signer le bail.', fr: fr(E(1106)), ipa: ipaOf(E(1106)), tip: "Devant un infinitif : de. EN: de before an infinitive." },
    { promptLabel: 'de oublié', promptSound: 'Il est nécessaire réserver.', fr: fr(E(1119)), ipa: ipaOf(E(1119)), tip: "L'adjectif appelle de. EN: the adjective needs de." },
  ],
  drill: [
    { promptSay: 'Il est difficile ... trouver un logement.', opts: ['à', 'de'], correct: 1 },
    { promptSay: "Un logement, c'est difficile ... trouver.", opts: ['à', 'de'], correct: 0 },
    { promptSay: 'Ce formulaire est facile ... remplir.', opts: ['de', 'à'], correct: 1 },
    { promptSay: "... interdit de fumer dans l'immeuble.", opts: ['Il est', 'Elle est', 'Ce est'], correct: 0 },
    { promptSay: "C'est gentil ... m'aider.", opts: ['à', 'de'], correct: 1 },
    { promptSay: 'Cette recette ? Elle est simple ... préparer.', opts: ['de', 'à'], correct: 1 },
    { promptSay: 'Il est conseillé ... arriver en avance.', opts: ["d'", 'à', 'que'], correct: 0 },
    { promptSay: 'Ce texte est difficile ... lire.', opts: ['à', 'de'], correct: 0 },
  ],
  steps: TRAP_STEPS('De annonce, à revient'),
  audio: REC('rec-b1-22-piege-infinitif'),
  say: REFRAME,
  terms: ['infinitif'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl("L'écrit", '« Il est important ... signer le bail. »',
    ['de', 'à'], 0,
    "Il est + adjectif + de. EN: de."),
  ctl('Le retour', '« Ce plat ? Il est facile ... faire. »',
    ['de', 'à'], 1,
    "Le plat est déjà dit : à. EN: à."),
  ctl("L'oral", "« C'est interdit de fumer ici. » C'est :",
    ['une faute', 'un règlement officiel', "de l'oral"], 2,
    "À l'oral, c'est remplace il est. EN: spoken French."),
], ['infinitif']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'De ou à',
    opener: {
      line: "Un règlement dit il est interdit de, ton voisin dit c'est interdit : ici tu apprends les deux, et quand dire à. EN: A rule says il est interdit de, your neighbour says c'est interdit: here you learn both, and when to say à.",
      imageRef: 'lessons/cest-il-est/act07.jpg',
    },
    sections: [],
    milestone: "Tu écris il est facile de faire quelque chose, tu le dis avec c'est, et tu reviens à un nom avec à. EN: You can write il est facile de, say it with c'est, and point back to a noun with à.",
    estScreens: 36, restPoints: ['a7-tableau', 'a7-choisir'],
  },
  sections: [A7_REGLEMENT, A7_INFINITIF, A7_CONSTRUIRE, A7_TABLEAU, A7_CHOISIR, A7_PIEGE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — ÇA, CELA, CE
 *
 *  a2.33 names the ce of c'est as a distinct subject and stops there. New:
 *  ce only before être; ça before any other verb in speech, cela in
 *  writing; ça, c'est as a double finger.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Au comptoir du dépanneur',
  frSub: 'Écoute ça, ce et cela',
  lines: [
    ln(E(1120)), ln(E(1121)), ln(E(1122)), ln(E(1125)),
    ln(E(1126)), ln(E(1128)), ln(E(1132)), ln(E(1135)),
  ],
  questions: [
    { q: 'Première phrase : combien de fois montre-t-on ?', opts: ['une fois', 'deux fois'], correct: 1, why: "« Ça, c'est pratique » : ça, puis c'est. EN: twice." },
    { q: 'Deuxième phrase : que veut dire « ça marche » ici ?', opts: ["d'accord", 'un appareil marche', 'on va à pied'], correct: 0, why: "Ça marche : d'accord. EN: OK." },
    { q: 'Quatrième phrase : quel mot vient avant me plaît ?', opts: ['ce', 'ça'], correct: 1, why: "Devant plaire, ça. EN: ça before plaire." },
    { q: "Cinquième phrase : « C'est ça » veut dire...", opts: ["c'est exact", "c'est cher", 'je ne sais pas'], correct: 0, why: "C'est ça : oui, exactement. EN: that's right." },
    { q: 'Septième phrase : est-ce que ça marche ?', opts: ['Oui', 'Non'], correct: 1, why: "« Ça ne marche pas. » EN: it does not work." },
  ],
  audio: REC('rec-b1-22-ca-ecoute'),
  say: REFRAME,
  terms: ['ca'],
};

const A8_CA: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-ca',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-relief',
  title: 'Ce, ça, cela',
  frSub: 'Le doigt sans nom',
  hint: 'Quatre cartes. Regarde le verbe juste après.',
  audio: REC('rec-b1-22-ca'),
  say: REFRAME,
  terms: ['ca'],
  cards: [
    {
      head: 'Ce que dit le A2', label: Cap(DEMONSTRATIFS_REF),
      fr: "ce sac · c'est un sac",
      sub: '[suh SAK] · [seh-tuhⁿ SAK]',
      body: `« ${A233_REFRAME} » En français : « ${A233_REFRAME_FR} » Le ce de c'est ne va que devant être. EN: the ce of c'est only goes before être.`,
    },
    {
      head: 'Devant les autres verbes', label: 'ça',
      fr: fr(E(1125)),
      sub: rsOf(E(1125)),
      body: "Devant plaire, marcher, coûter, dépendre : ça. Ce me plaît ne se dit pas. EN: before any verb but être, ça.",
    },
    {
      head: "À l'écrit", label: 'cela',
      fr: fr(E(1124)),
      sub: rsOf(E(1124)),
      body: "Cela est la forme écrite de ça. Dans un courriel ou une lettre, écris cela. EN: cela is the written ça.",
    },
    {
      head: 'Montrer deux fois', label: "ça, c'est",
      fr: fr(E(1120)),
      sub: rsOf(E(1120)),
      body: "Ça, c'est montre deux fois, pour insister, à l'oral : ça au début, c'est ensuite. EN: ça, c'est points twice, for emphasis.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce devant être, ça ailleurs',
  groups: [
    grp('Devant être : ce', [
      it(E(1126), "c'est"),
      it(E(1129), "ce n'est pas"),
      it(E(1131), "ça, puis c'est"),
      it(E(1133), "tout ça, puis c'est"),
    ], chk(
      "Que vient juste après ce ou c' dans ces phrases ?",
      ['être : est, n’est', 'un autre verbe'], 0,
      "Toujours être. EN: always être."),),
    grp('Devant un autre verbe : ça, cela', [
      it(E(1121), 'marcher'),
      it(E(1125), 'plaire'),
      it(E(1124), 'poser, à l’écrit'),
      it(E(1128), 'dépendre'),
    ], chk(
      '« ... me plaît beaucoup. »',
      ['Ce', 'Ça'], 1,
      "Plaire n'est pas être : ça. EN: ça."),),
    ctl('Écrit ou oral', 'Dans un courriel au propriétaire : « ... ne pose aucun problème. »',
      ['Ça', 'Ce', 'Cela'], 2,
      "À l'écrit : cela. EN: cela in writing."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ca'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  sheetId: 'sheet-relief',
  title: 'Ça et cela, dans la vie',
  examples: [
    ex(E(1122), 'ça devant coûter.'),
    ex('fr.a2.courses.177', 'ça devant faire, à la caisse.'),
    ex('fr.a2.internet.202', 'deux fois ça, et aucun ce.'),
    ex(E(1130), 'cela dit : une expression écrite.'),
    ex(E(1123), 'cela devant être : très soutenu, écrit.'),
    ex(E(1135), 'ça devant faire.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ca'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Choisir le bon doigt',
  groups: [
    grp('Ce, ça ou cela', [
      it(E(1120), 'ça, puis c’est'),
      it(E(1132), 'ça, et un négatif'),
      it(E(1123), 'cela, à l’écrit'),
      it(E(1126), 'c’est, pour dire oui'),
    ], chk(
      "« Ça ne marche pas » : pourquoi ça et pas ce ?",
      ['parce que la phrase est négative', 'parce que le verbe est marcher, pas être'], 1,
      "Le verbe décide : marcher, donc ça. EN: the verb decides."),),
    grp('Montrer avec ça', [
      it(E(1131), 'ton bureau'),
      it(E(1133), 'le passé'),
      it(E(1129), 'ce qui ne va pas'),
      it(E(1145), 'la raison'),
    ], chk(
      "« Ça, c'est mon bureau. » Combien de fois montres-tu ?",
      ['une fois', 'deux fois : ça, puis c’est'], 1,
      "Deux fois : c'est pour insister. EN: twice, for emphasis."),),
    ctl('La réponse', '« Vous partez lundi, c’est bien ça. » C’est exact. Tu dis :',
      ["C'est ça.", 'Il est ça.', 'Ce est ça.'], 0,
      "C'est ça : oui, c'est exact. EN: that's right."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ca', 'doigt'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre doigts mal placés',
  errors: [
    {
      wrong: 'Ce me plaît beaucoup.',
      right: fr(E(1125)),
      why: "En anglais, it pleases me : un seul petit mot pour tout. En français, ce ne va que devant être. Devant plaire : ça. EN: ce only before être.",
    },
    {
      wrong: 'Ça est pratique.',
      right: "C'est pratique.",
      why: "Ça est logique, puisque ça montre. Mais devant être, on dit c'est. EN: before être, ça becomes c'.",
    },
    {
      wrong: 'Il marche.',
      right: fr(E(1121)),
      why: "Pour dire d'accord, tu montres toute l'idée : ça marche. Il marche parle d'un nom masculin, un appareil par exemple. EN: ça marche means OK; il marche is about a named thing.",
    },
    {
      wrong: 'Ce dépend.',
      right: fr(E(1128)),
      why: "Dépend sonne proche de est, mais ce n'est pas être : ça. EN: ça before dépendre.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ca'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le verbe', '« ... coûte combien ? »',
    ['Ça', 'Ce'], 0,
    "Coûter n'est pas être : ça. EN: ça."),
  ctl("L'écrit", 'Dans une lettre : « ... est exact. »',
    ['Ça', 'Cela', 'Il'], 1,
    "À l'écrit, cela. EN: cela."),
  ctl('Devant être', '« ... pratique. »',
    ['Ça est', "C'est"], 1,
    "Devant être : c'est. EN: c'est."),
], ['ca']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Ça, cela, ce',
    opener: {
      line: "Ça coûte combien, c'est pratique, cela ne pose aucun problème : ici tu choisis le bon doigt selon le verbe. EN: Ça coûte combien, c'est pratique, cela ne pose aucun problème: here you pick the right pointer by the verb.",
      imageRef: 'lessons/cest-il-est/act08.jpg',
    },
    sections: [],
    milestone: "Tu mets ce devant être, ça devant les autres verbes, et cela quand tu écris. EN: You can use ce before être, ça before other verbs, and cela in writing.",
    estScreens: 30, restPoints: ['a8-exemples'],
  },
  sections: [A8_ECOUTE, A8_CA, A8_CONSTRUIRE, A8_EXEMPLES, A8_CHOISIR, A8_ERREURS, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — METTRE EN RELIEF
 *
 *  The finger at its strongest. b1.11 owns qui against que and the verb
 *  agreement after « c'est moi qui »; this act owns the CHOICE to stress,
 *  and what can be stressed: a person, a time, a place, a reason.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: "L'imprimante",
  frSub: 'Qui a fait quoi',
  setting: "Mardi, à l'agence. L'imprimante est cassée depuis ce matin. Monsieur Roy veut savoir ce qui s'est passé.",
  bubbles: [
    { from: 'narrator', fr: 'Monsieur Roy entre avec une feuille déchirée à la main.', en: 'Mr Roy comes in with a torn sheet in his hand.' },
    { from: 'coach', fr: "On m'a dit que c'était toi, pour l'imprimante.", en: 'I was told it was you, with the printer.' },
    { from: 'user', fr: fr(E(1141)), en: src(E(1141)).en, warn: 'le doigt, pour dire : pas moi' },
    { from: 'coach', fr: "D'accord. Et le technicien, quelqu'un l'a appelé ce matin.", en: 'All right. And the technician, somebody called him this morning.' },
    { from: 'user', fr: fr(E(1136)), en: src(E(1136)).en, warn: 'le doigt sur Hugo' },
    { from: 'coach', fr: 'Bon. Il faut aussi une imprimante de secours pour demain.', en: 'Right. We also need a backup printer for tomorrow.' },
    { from: 'user', fr: fr(E(1137)), en: src(E(1137)).en, warn: 'le doigt sur Aïcha' },
    { from: 'narrator', fr: "Monsieur Roy note tout. Trois fois, tu as posé le doigt sur la bonne personne.", en: 'Mr Roy writes it all down. Three times, you put your finger on the right person.' },
  ],
  closing: { fr: "Pour insister, c'est ... qui : le doigt se pose sur une seule personne.", en: 'To stress it, c’est ... qui: the finger lands on one person only.' },
  audio: REC('rec-b1-22-imprimante'),
  say: REFRAME,
  terms: ['relief'],
};

const A9_RELIEF: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-relief',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-relief',
  title: 'Le doigt le plus fort',
  frSub: "c'est ... qui, c'est ... que",
  hint: 'Quatre cartes. Cherche ce qui est entre c’est et qui ou que.',
  audio: REC('rec-b1-22-relief'),
  say: REFRAME,
  terms: ['relief'],
  cards: [
    {
      head: 'Une personne, et pas une autre', label: "c'est ... qui",
      fr: fr(E(1136)),
      sub: rsOf(E(1136)),
      body: "Tu veux dire : Hugo, et personne d'autre. Tu le mets entre c'est et qui. EN: to stress Hugo, put him between c'est and qui.",
    },
    {
      head: 'Un moment, un lieu', label: "c'est ... que",
      fr: fr(E(1139)),
      sub: rsOf(E(1139)),
      body: "Tu insistes sur demain. Après, il y a déjà un sujet, je : donc que. EN: when a subject follows, que.",
    },
    {
      head: 'La règle de qui et que', label: Cap(QUI_QUE_REF),
      fr: fr(E(1138)),
      sub: rsOf(E(1138)),
      body: `« ${B111_REFRAME} » La règle ne change pas après c'est. EN: the qui and que rule holds after c'est.`,
    },
    {
      head: 'Pour se défendre', label: "ce n'est pas ... qui",
      fr: fr(E(1141)),
      sub: rsOf(E(1141)),
      body: "Au négatif, le doigt dit : pas moi. Le verbe suit moi : ai, comme dans la leçon 11 du B1. EN: the negative points away; the verb agrees with moi.",
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Qui, ou que',
  groups: [
    grp("C'est ... qui", [
      it(E(1136), 'Hugo'),
      it(E(1142), 'lui'),
      it(E(1143), 'eux'),
      it(E(1152), 'ma voisine'),
    ], chk(
      'Après qui, trouves-tu un autre sujet ?',
      ['Oui, toujours.', 'Non : qui est le sujet.'], 1,
      "Qui fait lui-même le verbe. EN: qui is the subject."),),
    grp("C'est ... que", [
      it(E(1138), 'ce dossier'),
      it(E(1140), 'à Liège'),
      it(E(1147), 'en mars'),
      it(E(1148), 'la vue'),
    ], chk(
      'Après que, trouves-tu un sujet ?',
      ['Oui : je, elle, on.', 'Non, jamais.'], 0,
      "Un sujet suit : que. EN: a subject follows, so que."),),
    ctl('Le pluriel', "À l'écrit : « ... eux qui ont choisi le restaurant. »",
      ["C'est", 'Ils sont', 'Ce sont'], 2,
      "Ce sont eux, à l'écrit. EN: ce sont eux."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['relief'],
};

/** Consolidation, as answers. No « EN: » tail on a back. */
const A9_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a9-cartes',
  layer: 'core',
  title: 'Huit cartes pour insister',
  cards: [
    { front: 'it was Hugo who called', back: "c'est Hugo qui a appelé", say: fr(E(1136)) },
    { front: "it's this file I'm looking for", back: "c'est ce dossier que je cherche", say: fr(E(1138)) },
    { front: "it's tomorrow that I start", back: "c'est demain que je commence", say: fr(E(1139)) },
    { front: "it wasn't me who broke the printer", back: "ce n'est pas moi qui ai cassé l'imprimante", say: fr(E(1141)) },
    { front: "that's why I'm calling you", back: "c'est pour ça que je t'appelle", say: fr(E(1145)) },
    { front: "you're the one who decides", back: "c'est toi qui décides", say: fr(E(1149)) },
    { front: "we're the ones paying", back: "c'est nous qui payons", say: fr(E(1150)) },
    { front: "it's in March that we move", back: "c'est en mars qu'on déménage", say: fr(E(1147)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['relief'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Sur quoi tu insistes',
  groups: [
    grp('Le mot mis en relief', [
      it(E(1146), 'le coupable : le chat'),
      it(E(1147), 'le moment : en mars'),
      it(E(1149), 'la personne : toi'),
      it('fr.b1.heure-et-date.058', 'l’heure exacte'),
    ], chk(
      "« C'est en mars qu'on déménage. » Sur quoi insistes-tu ?",
      ['sur les personnes', 'sur le moment'], 1,
      "Le doigt est sur en mars. EN: the finger is on en mars."),),
    grp('Qui ou que', [
      it(E(1150), 'qui'),
      it(E(1145), 'que'),
      it(E(1153), 'qui'),
      it('fr.b1.maison.059', 'qui'),
    ], chk(
      "« C'est pour ça ... je t'appelle. »",
      ['que', 'qui'], 0,
      "Un sujet suit, je : que. EN: que."),),
    ctl('La réponse', "Ton chef croit que Hugo a appelé. C'est Aïcha. Tu dis :",
      ['Non, Aïcha, elle a appelé.', 'Non, il est Aïcha qui a appelé.', "Non, c'est Aïcha qui a appelé."], 2,
      "Le doigt sur Aïcha : c'est ... qui. EN: c'est Aïcha qui."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['relief'],
};

/** TRAP, stepped: il est for emphasis, qui and que swapped, agreement. */
const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Le relief bien posé',
  rule: {
    title: "C'est, le mot, puis qui ou que",
    body: "On met en relief avec c'est, jamais il est. Puis qui si rien d'autre ne fait le verbe, que s'il y a un sujet. Le verbe suit le mot montré. EN: c'est, the word, then qui or que; the verb agrees with the word.",
  },
  cards: [
    { promptLabel: 'il est pour insister', promptSound: 'Il est Hugo qui a appelé.', fr: fr(E(1136)), ipa: ipaOf(E(1136)), tip: "Pour insister, on montre : c'est. EN: stressing is pointing." },
    { promptLabel: 'que sans sujet', promptSound: "C'est Aïcha que a trouvé la solution.", fr: fr(E(1137)), ipa: ipaOf(E(1137)), tip: "Pas de sujet après : qui. EN: no subject after, so qui." },
    { promptLabel: 'qui avec un sujet', promptSound: "C'est ce dossier qui je cherche.", fr: fr(E(1138)), ipa: ipaOf(E(1138)), tip: "Je est le sujet : que. EN: je is the subject, so que." },
    { promptLabel: 'le verbe après toi qui', promptSound: "C'est toi qui décide.", fr: fr(E(1149)), ipa: ipaOf(E(1149)), tip: "Toi qui, donc tu : décides. EN: toi qui takes the tu form." },
    { promptLabel: 'le verbe après nous qui', promptSound: "C'est nous qui paient.", fr: fr(E(1150)), ipa: ipaOf(E(1150)), tip: "Nous qui : payons. EN: nous qui takes the nous form." },
    { promptLabel: 'la préposition oubliée', promptSound: "C'est Liège qu'elle a grandi.", fr: fr(E(1140)), ipa: ipaOf(E(1140)), tip: "Le lieu garde sa préposition : c'est à Liège. EN: keep the preposition." },
  ],
  drill: [
    { promptSay: "C'est Hugo ... a appelé.", opts: ['que', 'qui'], correct: 1 },
    { promptSay: "C'est ce dossier ... je cherche.", opts: ['que', 'qui'], correct: 0 },
    { promptSay: '... toi qui décides.', opts: ['Il est', "C'est"], correct: 1 },
    { promptSay: "C'est toi qui ... .", opts: ['décide', 'décident', 'décides'], correct: 2 },
    { promptSay: "C'est nous qui ... .", opts: ['payons', 'paient'], correct: 0 },
    { promptSay: "C'est ... Liège qu'elle a grandi.", opts: ['en', 'à', 'dans'], correct: 1 },
    { promptSay: "C'est pour ça ... je t'appelle.", opts: ['que', 'qui'], correct: 0 },
    { promptSay: "... eux qui ont choisi le restaurant. (à l'écrit)", opts: ["C'est", 'Ils sont', 'Ce sont'], correct: 2 },
  ],
  steps: TRAP_STEPS("C'est, le mot, puis qui ou que"),
  audio: REC('rec-b1-22-piege-relief'),
  say: REFRAME,
  terms: ['relief'],
};

const A9_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a9-dictee',
  layer: 'core',
  title: 'Écris le relief que tu entends',
  frSub: "c'est ... qui, c'est ... que",
  itemIds: dicteeFor(9),
  audio: AUDIO,
  say: REFRAME,
  terms: ['relief'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Qui', "« C'est Moussa ... a les clés. »",
    ['qui', 'que'], 0,
    "Pas d'autre sujet : qui. EN: qui."),
  ctl('Que', "« C'est la vue ... j'aime le plus. »",
    ['qui', 'que'], 1,
    "Je est le sujet : que. EN: que."),
  ctl('Le doigt', 'Pour insister sur Hugo :',
    ['Il est Hugo qui a appelé.', "C'est Hugo qui a appelé.", 'Hugo est qui a appelé.'], 1,
    "On montre : c'est. EN: c'est."),
], ['relief']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Mettre en relief',
    opener: {
      line: "Ce n'est pas toi qui as cassé l'imprimante, c'est Hugo qui a appelé : ici le doigt se pose sur un seul mot. EN: It wasn't you who broke the printer, it was Hugo who called: here the finger lands on one word.",
      imageRef: 'lessons/cest-il-est/act09.jpg',
    },
    sections: [],
    milestone: "Tu mets un mot en relief avec c'est ... qui ou c'est ... que, et le verbe suit le mot montré. EN: You can stress a word with c'est ... qui or que, with the verb agreeing.",
    estScreens: 38, restPoints: ['a9-construire', 'a9-choisir'],
  },
  sections: [A9_HISTOIRE, A9_RELIEF, A9_CONSTRUIRE, A9_CARTES, A9_CHOISIR, A9_PIEGE, A9_DICTEE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — LES IL FIGÉS
 *
 *  a1.12 owns il est midi. The frozen il points at nothing, which is the one
 *  place the reframe rests. New: il est tard / tôt against c'est trop tard
 *  (the clock or the missed chance), il est temps de, il était une fois,
 *  and c'est lundi for a day.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La fin de la soirée',
  frSub: "Écoute l'horloge et la situation",
  lines: [
    ln(E(1154)), ln(E(1155)), ln(E(1156)), ln(E(1157)),
    ln(E(1158)), ln(E(1162)), ln(E(1164)), ln(E(1165)),
  ],
  questions: [
    { q: 'Première phrase : pourquoi rentre-t-on ?', opts: ["parce qu'il est tard", "parce qu'il fait froid"], correct: 0, why: "« Il est tard, je rentre. » EN: because it is late." },
    { q: 'Troisième phrase : que faut-il faire ?', opts: ['manger', 'partir', 'attendre'], correct: 1, why: "« Il est temps de partir. » EN: leave." },
    { q: "Cinquième phrase : peut-on encore s'inscrire ?", opts: ['Oui', 'Non'], correct: 1, why: "« C'est trop tard pour s'inscrire » : la chance est passée. EN: no, the chance has gone." },
    { q: 'Septième phrase : quel jour sommes-nous ?', opts: ['mardi', 'dimanche', 'lundi'], correct: 2, why: "« C'est lundi, aujourd'hui. » EN: Monday." },
    { q: 'Dernière phrase : pourquoi ne pas appeler ?', opts: ["parce qu'il est trop tard", 'parce que personne ne répond'], correct: 0, why: "« Il est trop tard pour appeler » : l'horloge. EN: it is too late on the clock." },
  ],
  audio: REC('rec-b1-22-heure-ecoute'),
  say: REFRAME,
  terms: ['fige'],
};

const A10_FIGE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-fige',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-relief',
  title: 'Le il qui ne montre rien',
  frSub: 'il est midi, il est tard',
  hint: "Quatre cartes. Regarde si tu parles de l'horloge ou d'une situation.",
  audio: REC('rec-b1-22-fige'),
  say: REFRAME,
  terms: ['fige'],
  cards: [
    {
      head: 'Ce que tu sais déjà', label: Cap(HEURE_REF),
      fr: fr(E(1163)),
      sub: rsOf(E(1163)),
      body: `« ${A112_REFRAME} » En français : « ${A112_REFRAME_FR} » Ce il ne remplace aucun nom. EN: the clock's il stands for nothing.`,
    },
    {
      head: "L'heure qui passe", label: 'il est tard',
      fr: fr(E(1154)),
      sub: rsOf(E(1154)),
      body: "Tard, tôt, déjà huit heures : le même il figé. Tu parles de l'horloge. EN: late and early take the clock's il.",
    },
    {
      head: 'Trop tard pour quelque chose', label: "c'est trop tard",
      fr: fr(E(1158)),
      sub: rsOf(E(1158)),
      body: "Ici, tu ne regardes pas l'horloge : tu montres une situation. L'inscription est fermée, la chance est passée. EN: c'est trop tard points at a missed chance.",
    },
    {
      head: 'Il est temps', label: 'il est temps de',
      fr: fr(E(1156)),
      sub: rsOf(E(1156)),
      body: "Une expression figée, puis de et un infinitif. Il est grand temps : c'est encore plus urgent. EN: il est temps de, a fixed phrase.",
    },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: "L'horloge, ou ce qu'on montre",
  groups: [
    grp("L'horloge : il est", [
      it(E(1154), 'tard'),
      it(E(1155), 'tôt'),
      it(E(1157), 'huit heures'),
      it(E(1161), 'encore tôt'),
    ], chk(
      'Ce il remplace-t-il un nom ?',
      ['Oui, le jour.', 'Non, il ne remplace rien.'], 1,
      "Il est figé : il ne reprend aucun nom. EN: the frozen il refers to nothing."),),
    grp("Ce qu'on montre : c'est", [
      it(E(1158), 'une chance passée'),
      it(E(1162), "l'heure du dîner"),
      it(E(1164), 'le jour'),
    ], chk(
      "« C'est l'heure du dîner » : pourquoi c'est ?",
      ["parce que l'heure a un petit mot, l'", "parce qu'il est tard"], 0,
      "L'heure du dîner est un nom avec son petit mot : on montre. EN: a noun with l', so c'est."),),
    ctl('Il est temps', '« ... temps de partir. »',
      ["C'est", 'Il est'], 1,
      "Il est temps de : figé. EN: il est temps de."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fige'],
};

/** The whole lesson in four points, before the portrait. */
const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-doigt',
  title: 'Ce qu’il faut retenir avant le portrait',
  points: [
    "Tu montres avec c'est : un nom et son petit mot, un prénom, moi, une situation. EN: point with c'est.",
    "Tu décris avec il ou elle est : un nom déjà dit, un métier seul, un adjectif. EN: label with il or elle est.",
    "Un adjectif sur le métier, et c'est revient : c'est un bon médecin. EN: an adjective on the job brings c'est un.",
    "À l'écrit : ce sont, il est ... de, cela. EN: in writing, ce sont, il est ... de, cela.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['doigt', 'etiquette', 'metier'],
};

const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Figé, ou montré',
  groups: [
    grp("L'horloge ou la situation", [
      it(E(1165), "l'horloge"),
      it(E(1158), 'la situation'),
      it(E(1154), "l'horloge"),
      it(E(1162), 'un moment nommé'),
    ], chk(
      "Il est 23 h. Tu ne veux pas appeler ta tante. Tu dis :",
      ['Elle est trop tard pour appeler.', 'Il est trop tard pour appeler.'], 1,
      "L'horloge : il est. EN: the clock, il est."),),
    grp('Le il figé partout', [
      it(E(1156), 'il est temps de'),
      it('fr.b1.heure-et-date.047', 'il est grand temps de'),
      it(E(1159), 'il était une fois'),
      it('fr.a1.temps-et-frequence.052', 'il est midi'),
    ], chk(
      "« Il était une fois un vieux boulanger. » Ce il remplace-t-il le boulanger ?",
      ['Non, il ne remplace rien.', 'Oui.'], 0,
      "Le boulanger arrive après : il est figé. EN: the frozen il."),),
    ctl('Le jour', "« ... lundi, aujourd'hui. »",
      ['Il est', 'Elle est', "C'est"], 2,
      "Un jour, on le montre : c'est lundi. EN: c'est lundi."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fige'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: "Quatre pièges de l'heure",
  errors: [
    {
      wrong: "C'est six heures du matin.",
      right: fr(E(1167)),
      why: "En anglais, it's six : it ressemble à c'est. Pour l'heure, le français garde son il figé. EN: the clock always takes il est.",
    },
    {
      wrong: 'Il est temps à partir.',
      right: fr(E(1156)),
      why: "Il est temps de, comme il est difficile de : l'infinitif arrive avec de. EN: il est temps de.",
    },
    {
      wrong: "Il est lundi, aujourd'hui.",
      right: fr(E(1164)),
      why: "Le jour n'est pas l'heure : tu le montres, c'est lundi. On dit aussi nous sommes lundi. EN: a day takes c'est, or nous sommes.",
    },
    {
      wrong: 'Elle est tard, je rentre.',
      right: fr(E(1154)),
      why: "Tu penses peut-être à l'heure, qui est féminin. Mais ce il ne remplace aucun nom : il reste il. EN: the frozen il never becomes elle.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fige'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl("L'heure", '« ... midi pile. »',
    ['Il est', "C'est"], 0,
    "L'heure : il est. EN: il est."),
  ctl('La chance passée', "Le train est parti il y a une heure. « ... trop tard. »",
    ["C'est", 'Elle est'], 0,
    "Tu montres la situation : c'est trop tard. EN: c'est trop tard."),
  ctl('Temps', '« Il est temps ... partir. »',
    ['à', 'de', 'que'], 1,
    "Il est temps de. EN: de."),
], ['fige']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Les il figés',
    opener: {
      line: "Il est tard, et c'est trop tard : ici tu sépares l'horloge de la situation, et tu gardes le il qui ne montre rien. EN: Il est tard, and c'est trop tard: here you tell the clock from the situation, and keep the il that points at nothing.",
      imageRef: 'lessons/cest-il-est/act10.jpg',
    },
    sections: [],
    milestone: "Tu dis il est tard pour l'horloge, c'est trop tard pour une chance passée, et il est temps de partir. EN: You can say il est tard for the clock, c'est trop tard for a missed chance, and il est temps de.",
    estScreens: 30, restPoints: ['a10-focus'],
  },
  sections: [A10_ECOUTE, A10_FIGE, A10_CONSTRUIRE, A10_FOCUS, A10_CHOISIR, A10_ERREURS, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — LE PORTRAIT
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET the shape one last time, as the model the learner will imitate. */
const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Aïcha, par Hugo',
  frSub: 'Le portrait que tu vas écrire',
  text: PORTRAIT_TEXT,
  glossary: [
    { word: 'graphiste', en: 'graphic designer', note: 'La personne qui fait les images, les logos, les affiches.' },
    { word: 'habillée', en: 'dressed', note: 'Ses vêtements.' },
    { word: 'fiable', en: 'reliable', note: 'Tu peux compter sur elle.' },
    { word: "s'ennuyer", en: 'to be bored', note: 'Le contraire de s’amuser.' },
    { word: "l'adorer", en: 'love her', note: 'Beaucoup l’aimer.' },
  ],
  questions: [
    { q: 'Comment Hugo montre-t-il Aïcha au début ?', a: "Avec c'est : « c'est notre nouvelle graphiste, et c'est une personne formidable »." },
    { q: 'Combien de fois trouves-tu elle est ?', a: "Six fois : sénégalaise, née, grande, bien habillée, organisée, drôle. Ce sont les étiquettes du portrait." },
    { q: "« Elle est sénégalaise » : pourquoi pas d'article ?", a: "La nationalité est une étiquette, un adjectif en minuscule, comme un métier seul." },
    { q: "Trouve deux phrases avec c'est ... qui.", a: "« c'est elle qui trouve la solution » et « c'est elle qui apporte des fruits ». Le doigt se pose sur Aïcha." },
    { q: "« Il est rare de s'ennuyer » : quelle structure ?", a: "il est + adjectif + de + infinitif, la forme écrite de l'acte 7." },
  ],
  audio: REC('rec-b1-22-portrait'),
  say: REFRAME,
  terms: ['portrait', 'relief'],
};

/** NAME: how to plan a hundred words of portrait. */
const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour ton portrait',
  steps: [
    "1. Montre la personne avec c'est : c'est mon voisin Moussa, c'est notre graphiste. EN: point first, with c'est.",
    "2. Décris-la avec il ou elle est : trois adjectifs, bien accordés. EN: then three labels with il or elle est.",
    "3. Donne son métier ou sa nationalité : sans article, ou avec c'est un et un adjectif. EN: the job, bare or with c'est un.",
    "4. Raconte une anecdote avec c'est ... qui. EN: tell one story with c'est ... qui.",
    "5. Relis : chaque c'est montre, chaque il ou elle reprend un nom déjà dit. EN: check every c'est and every il.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['portrait', 'doigt', 'etiquette'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    uc('Tu présentes une nouvelle collègue à ton équipe', E(1168)),
    uc('Tu écris une recommandation pour un voisin', E(1172)),
    uc('Tu décris une collègue dans un courriel', E(1184)),
    uc('Tu remercies quelqu’un devant tout le monde', E(1178)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['portrait'],
};

/** CHOOSE, out loud: six turns at a team lunch. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: "Le dîner d'équipe",
  setting: "Vendredi midi, au restaurant, près de l'agence. Monsieur Roy, le directeur, ne connaît pas encore toute l'équipe. Il te demande de présenter tes collègues.",
  turns: [
    {
      ai: 'Alors, vous connaissez déjà tout le monde ?',
      en: 'So, do you already know everyone?',
      user: fr(E(1168)),
      userEn: "Let me introduce Aïcha. She's our new graphic designer. (c'est to point at her, with notre.)",
      alts: [
        { fr: "Presque. Voici Aïcha, c'est la nouvelle graphiste.", en: "Almost. This is Aïcha, she's the new graphic designer." },
        { fr: 'Oui. Aïcha est graphiste, elle est arrivée en septembre.', en: 'Yes. Aïcha is a graphic designer; she arrived in September. (graphiste with no article: also right.)' },
      ],
    },
    {
      ai: "Elle vient d'où, Aïcha ?",
      en: 'Where is Aïcha from?',
      user: fr(E(1169)),
      userEn: 'She is Senegalese and she speaks four languages. (elle est + nationality, no article, lower case.)',
      alts: [
        { fr: "C'est une Sénégalaise de Dakar.", en: 'She is a Senegalese woman from Dakar. (une, so c’est and a capital: also right.)' },
        { fr: 'Elle est de Dakar.', en: 'She is from Dakar.' },
      ],
    },
    {
      ai: "Et le grand monsieur à côté d'elle, c'est qui ?",
      en: 'And the tall man next to her, who is he?',
      user: "C'est Hugo. Il est designer, et c'est un collègue très drôle.",
      userEn: 'That is Hugo. He is a designer, and he is a very funny colleague. (c’est for the name, il est for the bare job, c’est un with an adjective.)',
      alts: [
        { fr: "C'est Hugo, notre designer.", en: 'That is Hugo, our designer.' },
        { fr: "C'est Hugo. Il est très drôle.", en: 'That is Hugo. He is very funny.' },
      ],
    },
    {
      ai: 'Et vous, travailler ici, ça vous plaît ?',
      en: 'And you, do you like working here?',
      user: fr(E(1115)),
      userEn: "It's nice working here. (c'est + adjective + de, spoken.)",
      alts: [
        { fr: 'Oui, ça me plaît beaucoup.', en: 'Yes, I like it a lot. (ça before plaire.)' },
        { fr: "Oui, c'est une équipe formidable.", en: 'Yes, it is a wonderful team.' },
      ],
    },
    {
      ai: 'Qui a organisé ce dîner ? Excellente idée.',
      en: 'Who organised this lunch? Excellent idea.',
      user: "C'est Julie qui l'a organisé. Elle est très à l'écoute.",
      userEn: "Julie is the one who organised it. She is a very good listener. (c'est ... qui, then elle est.)",
      alts: [
        { fr: "C'est Julie, des ressources humaines.", en: 'It was Julie, from human resources.' },
        { fr: "C'est elle, là-bas. C'est Julie.", en: "It's her, over there. It's Julie." },
      ],
    },
    {
      ai: 'Bon, il est déjà deux heures.',
      en: 'Right, it is already two o’clock.',
      user: 'Oui, il est temps de retourner au bureau.',
      userEn: 'Yes, it is time to go back to the office. (il est temps de, the frozen il.)',
      alts: [
        { fr: "Oui, c'est l'heure de rentrer.", en: 'Yes, it is time to head back. (l’heure, with its little word: c’est.)' },
        { fr: 'Déjà ? Il est tard, alors.', en: 'Already? It is late, then.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['portrait', 'doigt'],
};

/** THE GRADED TASK. The unit outcome is tested here: a written portrait
 *  where every c'est points and every il or elle labels. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Écris un portrait',
  frSub: 'Mission écrite',
  brief: "Le petit journal de ton immeuble ou de ton équipe prépare une page : « Les gens d'ici ». Écris le portrait d'un voisin ou d'une collègue que tu apprécies. Montre la personne, décris-la, puis raconte une anecdote.",
  briefEn: "Your building's or your team's newsletter is preparing a page called « The people here ». Write a portrait of a neighbour or colleague you like. Point the person out, describe them, then tell one story about them.",
  produce: "Écris un portrait de 80 à 120 mots, avec au moins trois c'est qui montrent, au moins trois il ou elle est qui décrivent, un métier ou une nationalité, et une phrase avec c'est ... qui ou c'est ... que.",
  responseSpec: { kind: 'text', minWords: 80, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'choix',
        label: "C'est ou il est, au bon endroit",
        maxPoints: 4,
        descriptors: [
          "4 : Chaque c'est montre (un nom avec son petit mot, un prénom, une situation) et chaque il ou elle est décrit un nom déjà dit.",
          "3 : Presque tout est juste, avec une ou deux confusions entre c'est et il est.",
          "2 : Plusieurs confusions, par exemple il est un ou elle est pour une situation.",
          "1 : C'est et il est sont presque toujours mélangés.",
        ],
      },
      {
        key: 'formes',
        label: 'Des formes justes',
        maxPoints: 3,
        descriptors: [
          "3 : Le métier sans article après il est, c'est un avec un adjectif, les accords justes, ce sont à l'écrit.",
          "2 : Une ou deux erreurs d'article ou d'accord.",
          "1 : Plusieurs erreurs d'article ou d'accord.",
        ],
      },
      {
        key: 'portrait',
        label: 'Un vrai portrait',
        maxPoints: 3,
        descriptors: [
          "3 : On voit la personne : tu la montres, tu la décris, et une anecdote avec c'est ... qui ou que la fait vivre.",
          "2 : Il manque l'anecdote, ou la description reste une liste.",
          "1 : On ne sait pas bien qui est la personne.",
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Un voisin ou une collègue, entre 80 et 120 mots, et tout ce que la mission demande.',
          '1 : Il manque un élément, ou moins de 80 mots.',
        ],
      },
    ],
  },
  scaffold: [
    'Je voudrais te présenter...',
    "C'est mon voisin / ma collègue...",
    'Il est... / Elle est...',
    "C'est un(e)... très...",
    "C'est quelqu'un de...",
    "C'est lui / elle qui...",
    "C'est grâce à lui / elle que...",
    "C'est un plaisir de...",
  ],
  modelAnswer: "Je voudrais te présenter mon voisin Moussa. C'est un ancien chauffeur de taxi, et il est retraité depuis deux ans. Il est né à Port-au-Prince, mais c'est un vrai Montréalais : il connaît toutes les rues de la ville. Il est drôle, il est très généreux et il est toujours de bonne humeur. C'est quelqu'un de fiable. L'été, c'est lui qui arrose mes plantes quand je pars en vacances. En hiver, c'est souvent lui qui déneige l'entrée avant tout le monde. C'est rare, un voisin comme ça, et c'est grâce à lui que je parle un peu créole.",
  modelAnswerEn: "Let me introduce my neighbour Moussa. He is a former taxi driver, and he has been retired for two years. He was born in Port-au-Prince, but he is a real Montrealer: he knows every street in the city. He is funny, very generous and always in a good mood. He is someone you can rely on. In summer, he is the one who waters my plants when I go on holiday. In winter, he is often the one who clears the snow from the entrance before anyone else. A neighbour like that is rare, and it is thanks to him that I speak a little Creole.",
  watchFor: [
    {
      pattern: "il est or elle est followed by un, une or le before a job or a noun (il est un chauffeur, elle est une bonne collègue).",
      criterion: 'choix',
      feedback: "Après il est, pas de petit mot. Avec un adjectif, passe à c'est : c'est une bonne collègue.",
      ref: 'a3-piege',
    },
    {
      pattern: "il or elle used for an object against its noun's gender, or an adjective that does not agree (ma voiture, il est rouge).",
      criterion: 'formes',
      feedback: "Il ou elle suit le genre du nom : ma voiture, elle est rouge.",
      ref: 'a2-erreurs',
    },
    {
      pattern: "il est or elle est before a first name or a stressed pronoun (il est Moussa, elle est moi).",
      criterion: 'choix',
      feedback: "Un prénom se montre : c'est Moussa.",
      ref: 'a4-erreurs',
    },
    {
      pattern: "il est / elle est for a whole situation, or a feminine adjective after c'est (elle est difficile, la vie ici; c'est belle).",
      criterion: 'choix',
      feedback: "Pour une situation, c'est et le masculin : c'est difficile, c'est beau.",
      ref: 'a5-piege',
    },
    {
      pattern: "c'est + plural noun in the written portrait, or ils sont before a determiner (c'est mes voisins, ils sont des amis).",
      criterion: 'formes',
      feedback: "À l'écrit, ce sont : ce sont des voisins formidables.",
      ref: 'a6-erreurs',
    },
    {
      pattern: "de and à swapped after an adjective (il est facile à vivre avec lui, c'est un plaisir à travailler avec elle).",
      criterion: 'formes',
      feedback: "De annonce l'infinitif et son complément ; à revient vers un nom déjà dit : il est facile à vivre, c'est un plaisir de travailler avec elle.",
      ref: 'a7-piege',
    },
    {
      pattern: "ce before a verb other than être (ce me plaît, ce dépend).",
      criterion: 'formes',
      feedback: "Ce ne va que devant être. Devant plaire : ça, ou cela à l'écrit.",
      ref: 'a8-erreurs',
    },
    {
      pattern: "Emphasis built with il est, or qui and que swapped (il est lui qui arrose, c'est lui que arrose).",
      criterion: 'choix',
      feedback: "Pour insister : c'est lui qui arrose mes plantes.",
      ref: 'a9-piege',
    },
    {
      pattern: "No anecdote, so the portrait stays a list of adjectives.",
      criterion: 'portrait',
      feedback: "Ajoute une histoire : c'est lui qui... c'est grâce à elle que...",
      ref: 'a11-plan',
    },
    {
      pattern: "Under 80 words, or no job or nationality given.",
      criterion: 'tache',
      feedback: "Relis la mission : entre 80 et 120 mots, avec un métier ou une nationalité.",
      ref: 'a11-plan',
    },
  ],
  graderNotes: [
    'Count words in the body; a greeting or signature, if any, does not count. Allow 10% tolerance (72 to 132) before criterion « tache » loses its point.',
    "Spoken c'est + plural (c'est mes voisins) is heard everywhere, but in this WRITTEN task it counts under « formes ». Do not mark c'est eux as an error: it is tolerated in writing too, if less careful than ce sont eux.",
    "« Elle est ma voisine » and « il est mon collègue » are heard and accepted; do not mark them. What is marked is il est un / une before a job or noun phrase, and il est + first name.",
    "« Il est rare de » and « c'est rare de » are both accepted: the task is not a register test. Accept c'est + adjective + de throughout.",
    "The subjunctive (c'est dommage que, il est important que) belongs to lessons 14 to 16 in B1. Do not require it; do not mark a correct one as an error.",
    "Nationality in lower case after il est, with a capital after un / une. A wrong capital is one error under « formes », not under « choix ».",
    'Accept regional vocabulary (dîner for lunch in Québec, déneiger, dépanneur, char for a car).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['portrait', 'doigt', 'etiquette'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes portraits à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['doigt', 'etiquette'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-doigt',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le doigt', v: "c'est + petit mot, prénom, moi", say: fr(E(1052)),
      detail: { title: 'Montrer', body: "C'est montre : un nom avec son petit mot, un prénom, moi. EN: c'est points.", say: fr(E(1053)) } },
    { k: "l'étiquette", v: 'il, elle est + nom déjà dit', say: fr(E(1017)),
      detail: { title: 'Décrire', body: "Il ou elle suit le genre du nom. EN: il or elle follows the noun.", say: fr(E(1026)) } },
    { k: 'le métier', v: "seul : il est ; précisé : c'est un", say: fr(E(1035)),
      detail: { title: 'Le métier', body: "Un adjectif fait venir c'est un. EN: an adjective brings c'est un.", say: fr(E(1034)) } },
    { k: 'la situation', v: "c'est + masculin", say: fr(E(1068)),
      detail: { title: 'La situation', body: "Pas de nom, pas de genre. EN: no noun, no gender.", say: fr(E(1070)) } },
    { k: 'de ou à', v: "il est facile de ; c'est facile à", say: fr(E(1102)),
      detail: { title: "L'infinitif", body: "De annonce, à revient. EN: de ahead, à back.", say: fr(E(1104)) } },
    { k: 'le relief', v: "c'est ... qui, c'est ... que", say: fr(E(1136)),
      detail: { title: 'Insister', body: "Le mot entre c'est et qui ou que. EN: the word between c'est and qui or que.", say: fr(E(1139)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['doigt', 'etiquette', 'relief'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu montres avec c'est et tu décris avec il ou elle est : les objets, les gens, les métiers, les situations. Tu écris ce sont et il est facile de, tu dis c'est facile à, et tu mets un mot en relief. Le piège qui reste est le plus discret : un elle est qui se glisse pour une situation quand tu parles vite. Avant l'examen, relis ton portrait et souligne chaque c'est et chaque il ou elle est. Pour chaque il ou elle, trouve le nom qu'il reprend. S'il n'y en a pas, écris c'est. EN: Underline every c'est and every il or elle est in your portrait; for each il or elle, find the noun it refers to, and if there is none, write c'est.",
  stats: [
    { k: 'Le doigt', v: "c'est, ce sont" },
    { k: "L'étiquette", v: 'il, elle, ils, elles sont' },
    { k: 'La situation', v: "c'est + masculin" },
    { k: 'Le relief', v: "c'est ... qui, que" },
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
    { front: 'montrer un objet', back: "c'est un, c'est ma", say: fr(E(1000)) },
    { front: 'décrire un objet déjà montré', back: 'il ou elle, selon le genre du nom', say: fr(E(1017)) },
    { front: 'un métier seul', back: 'il est médecin, sans article', say: fr('fr.a1.metiers.275') },
    { front: 'un métier avec un adjectif', back: "c'est un bon médecin", say: fr(E(1051)) },
    { front: 'un prénom, moi, toi', back: "c'est Aïcha, c'est moi", say: fr(E(1053)) },
    { front: 'une situation', back: "c'est + adjectif au masculin", say: fr(E(1068)) },
    { front: 'le pluriel, à l’écrit', back: 'ce sont', say: fr(E(1086)) },
    { front: 'un adjectif + infinitif', back: "il est facile de ; c'est facile à", say: fr(E(1102)) },
    { front: 'insister sur un mot', back: "c'est ... qui, c'est ... que", say: fr(E(1136)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: "C'est ou il est, en résumé",
  body: `${REFRAME} Tu ne choisis plus au hasard : tu te demandes si tu montres ou si tu décris. La prochaine leçon, ${TOUT_REF}, reste dans la description et te donne tout, toute, tous et toutes. EN: Next lesson: tout, in all its forms.`,
  points: [
    "C'est montre : un petit mot, un prénom, moi, une situation.",
    'Il ou elle est décrit un nom déjà dit, et suit son genre.',
    "Un adjectif sur le métier : c'est un bon médecin.",
    "À l'écrit : ce sont, il est ... de, cela.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['doigt', 'etiquette', 'portrait'],
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight, one per act from act 1 to act 10 plus
 *  an integration round on the portrait. Each round's target is a distinct
 *  errorTrigger, so a failed round fires that round's own drill.
 *
 *  `fold()` strips accents, case, commas and apostrophes, so no typed answer
 *  turns on one: every typed answer differs from its prompt by a WORD (c'est
 *  against il est, de against à, qui against que, ce sont against c'est).
 *  Every typeIn and errorSpot carries `prompt`, every listenChoose `say`. */

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
      id: 'r1-doigt', label: "Le doigt et l'étiquette", targets: ['doigt-etiquette'],
      questions: [
        mc("Tu montres ton sac à l'agente. Que dis-tu ?", ["C'est un sac à dos noir.", 'Il est un sac à dos noir.'], 0, "Un petit mot : tu montres. EN: un, so c'est.", 'a1-reperer'),
        mc('« Ma valise ? ... est bleue. »', ['Il', "C'", 'Elle'], 2, "Elle reprend la valise. EN: elle for la valise.", 'a1-reperer'),
        mc('Ta valise est à Toronto. Tu parles de la situation :', [WRONG_EMBETANTE, fr(E(1002))], 1, "La situation : c'est, au masculin. EN: c'est for the situation.", 'a1-scene'),
        tI("Montre l'objet : commence par c'est.", 'Il est un parapluie.', fr(E(1010)), "Un objet qu'on montre : c'est un. EN: c'est un.", 'a1-rappel'),
        tI('Décris le parapluie, déjà montré.', "C'est rouge, avec un manche en bois.", fr(E(1011)), "Le parapluie est déjà là : il est. EN: il est.", 'a1-registre'),
        eS('Il est Madame Pelletier, au comptoir.', fr(E(1005)), "Un nom propre se montre : c'est. EN: c'est for a name.", 'a1-reperer'),
        eS("C'est patiente et très polie.", fr(E(1006)), "Madame Pelletier est déjà nommée : elle est. EN: elle est.", 'a1-usages'),
        lC('Écoute. De quoi parle cette phrase ?', fr(E(1002)), ['de toute la situation', 'de la valise'], 0, "C'est embêtant : la situation. EN: the situation.", 'a1-scene'),
      ],
    },
    {
      id: 'r2-genre', label: 'Il ou elle', targets: ['il-pour-it'],
      questions: [
        mc('« Ma veste ? ... est grise. »', ['Il', 'Elle'], 1, "Veste est féminin : elle. EN: elle.", 'a2-accord'),
        mc('« Mon ordinateur ? Il est ... . »', ['lente', 'lents', 'lent'], 2, "Ordinateur, masculin singulier : lent. EN: lent.", 'a2-construire'),
        mc('« Les chaises ? ... sont confortables. »', ['Elles', 'Ils', 'Ce'], 0, "Chaises, féminin pluriel : elles. EN: elles.", 'a2-accord'),
        tI('Reprends le nom avec il ou elle.', 'La soupe ? La soupe est trop chaude.', fr(E(1030)), "Soupe est féminin : elle. EN: elle.", 'a2-construire'),
        tI('Reprends le nom avec il ou elle.', 'Cette table ? Cette table est en bois.', fr(E(1024)), "Table est féminin : elle. EN: elle.", 'a2-exemples'),
        tI('Reprends le nom avec il ou elle.', 'Mon manteau ? Mon manteau est gris.', fr(E(1016)), "Manteau est masculin : il. EN: il.", 'a2-choisir'),
        eS('Ma veste ? Il est grise.', fr(E(1017)), "Veste est féminin. EN: feminine noun.", 'a2-erreurs'),
        lC('Écoute. De qui ou de quoi parle-t-on ?', fr(E(1029)), ["d'une chose", "d'une situation", "d'une personne déjà nommée"], 2, "Il est sérieux : le chef, déjà nommé. EN: the boss.", 'a2-histoire'),
      ],
    },
    {
      id: 'r3-metier', label: "Le métier et l'adjectif", targets: ['il-est-un'],
      questions: [
        mc('« Il est ... . »', ['ingénieur', 'un ingénieur'], 0, "Le métier seul : pas d'article. EN: bare job.", 'a3-metier'),
        mc('Ton médecin est excellent. Tu dis :', ["C'est un excellent médecin.", 'Il est un excellent médecin.', 'Il est excellent médecin.'], 0, "Un adjectif : c'est un. EN: c'est un.", 'a3-choisir'),
        mc('Quelle phrase est bien écrite ?', ['Elle est Sénégalaise.', "C'est une sénégalaise.", "C'est une Sénégalaise."], 2, "Avec une, un nom, et une majuscule. EN: une, capital.", 'a3-tableau'),
        tI('Ajoute « très doué » : change le début.', 'Il est ingénieur.', fr(E(1035)), "C'est un ingénieur très doué. EN: c'est un.", 'a3-metier'),
        tI('Ajoute « excellente » : change le début.', 'Elle est comptable.', fr(E(1037)), "C'est une excellente comptable. EN: c'est une.", 'a3-tableau'),
        eS('Il est un bon médecin.', fr(E(1051)), "Bon fait venir c'est un. EN: c'est un bon médecin.", 'a3-piege'),
        eS('Il est un catholique, elle est une musulmane.', fr(E(1042)), "La religion, une étiquette : pas d'article. EN: no article.", 'a3-piege'),
        lC('Écoute. Entends-tu un article devant le métier ?', fr(E(1036)), ['non', 'oui'], 0, "Elle est comptable : pas d'article. EN: no article.", 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-tonique', label: "C'est moi", targets: ['il-est-prenom'],
      questions: [
        mc("On sonne. Tu réponds que c'est toi :", ["C'est je.", 'Il est moi.', "C'est moi."], 2, "C'est moi. EN: c'est moi.", 'a4-tonique'),
        mc('« ... Aïcha, de la comptabilité. »', ['Elle est', "C'est"], 1, "Un prénom : c'est. EN: c'est.", 'a4-construire'),
        mc("À l'écrit : « ... eux, les nouveaux voisins. »", ['Ce sont', "C'est", 'Ils sont'], 0, "Ce sont eux, à l'écrit. EN: ce sont eux.", 'a4-tonique'),
        tI('Présente-toi au téléphone, avec c’est.', 'Julie Côté, des ressources humaines.', fr(E(1062)), "C'est et ton nom. EN: c'est + name.", 'a4-tonique'),
        tI("Dis que ce n'est pas toi, mais Hugo.", 'Moi ? Non. Hugo.', fr(E(1066)), "Ce n'est pas moi, c'est Hugo. EN: ce n'est pas moi.", 'a4-exemples'),
        eS('Il est Hugo, mon collègue.', "C'est Hugo, mon collègue.", "Un prénom : c'est. EN: c'est.", 'a4-erreurs'),
        eS('Oui, il est lui.', fr(E(1055)), "Devant lui : c'est. EN: c'est lui.", 'a4-choisir'),
        lC('Écoute. Qui parle ?', fr(E(1053)), ["un voisin qu'on décrit", "la personne à l'interphone"], 1, "C'est moi : on se montre. EN: someone at the intercom.", 'a4-histoire'),
      ],
    },
    {
      id: 'r5-situation', label: "C'est beau", targets: ['situation-feminin'],
      questions: [
        mc("Tu regardes le fleuve : « C'est ... , ici. »", ['beau', 'belle'], 0, "Le paysage : masculin. EN: masculine.", 'a5-situation'),
        mc('« La vue ? ... magnifique. »', ["C'est", 'Elle est'], 1, "La vue, un nom déjà dit : elle est. EN: elle est.", 'a5-tableau'),
        mc('Ton amie a raté son train. Tu réagis :', ["C'est dommage.", 'Elle est dommage.', 'Il est dommage.'], 0, "Une réaction : c'est. EN: c'est dommage.", 'a5-choisir'),
        tI("Parle de l'activité, avec c'est.", 'Travailler de nuit, il est fatigant.', fr(E(1078)), "Une activité : c'est. EN: c'est.", 'a5-construire'),
        tI('Parle de la vue, un nom précis, avec elle.', "La vue est belle. C'est magnifique.", fr(E(1069)), "La vue : elle est. EN: elle est.", 'a5-construire'),
        eS("C'est belle, Québec en hiver.", fr(E(1068)), "Après c'est, masculin : beau. EN: beau.", 'a5-piege'),
        eS('Ta proposition ? Il est une bonne idée.', fr(E(1080)), "Une et un nom : c'est. EN: c'est une.", 'a5-piege'),
        lC('Écoute. De quoi parle-t-on ?', fr(E(1072)), ['de la vie en général', "d'un objet cher"], 0, "C'est cher : la situation. EN: life in general.", 'a5-carte'),
      ],
    },
    {
      id: 'r6-pluriel', label: 'Ce sont', targets: ['pluriel-ecrit'],
      questions: [
        mc('Tu écris : « ... mes collègues. »', ["C'est", 'Ce sont'], 1, "À l'écrit : ce sont. EN: ce sont.", 'a6-pluriel'),
        mc('« Tes voisins ? ... très accueillants. »', ['Ce sont', "C'est", 'Ils sont'], 2, "Un adjectif seul : ils sont. EN: ils sont.", 'a6-construire'),
        mc("« C'est mes collègues », à l'oral, c'est :", ['une faute grave', 'une forme courante'], 1, "Courant à l'oral ; à l'écrit, ce sont. EN: common in speech.", 'a6-pluriel'),
        tI('Écris-la pour une légende de photo.', "C'est les photos de mon voyage.", fr(E(1093)), "À l'écrit : ce sont. EN: ce sont.", 'a6-choisir'),
        tI('Mets au négatif.', 'Ce sont mes affaires.', fr(E(1089)), "Ce ne sont pas. EN: ce ne sont pas.", 'a6-pluriel'),
        eS('Ce ne sont pas de touristes, ce sont des voisins.', fr(E(1097)), "Après être, des reste. EN: des stays.", 'a6-erreurs'),
        eS('Ils sont mes collègues.', fr(E(1086)), "Mes est un petit mot : ce sont. EN: ce sont.", 'a6-erreurs'),
        lC('Écoute. Est-ce la forme écrite ou orale ?', fr(E(1087)), ['écrite', 'orale'], 1, "C'est + pluriel : l'oral. EN: spoken.", 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-infinitif', label: 'De ou à', targets: ['de-a-inverses'],
      questions: [
        mc('« Il est difficile ... trouver un logement. »', ['de', 'à'], 0, "Il est + adjectif + de. EN: de.", 'a7-infinitif'),
        mc("« Un logement, c'est difficile ... trouver. »", ['de', 'à'], 1, "Le logement est déjà dit : à. EN: à.", 'a7-infinitif'),
        mc("Pour le règlement d'une piscine :", ["C'est interdit de courir.", 'Il est interdit de courir.'], 1, "Un règlement : il est ... de. EN: il est.", 'a7-choisir'),
        tI('Écris-le pour un règlement.', "C'est interdit de fumer dans l'immeuble.", fr(E(1105)), "À l'écrit : il est. EN: il est.", 'a7-reglement'),
        tI("Dis-le à un ami, avec c'est.", 'Il est possible de payer en ligne.', fr(E(1112)), "À l'oral : c'est. EN: c'est.", 'a7-tableau'),
        eS('Ce formulaire est facile de remplir.', fr(E(1107)), "Le formulaire est le sujet : à. EN: à.", 'a7-piege'),
        eS('Il est difficile à trouver un logement à Montréal.', fr(E(1102)), "Le logement vient après : de. EN: de.", 'a7-piege'),
        lC('Écoute. Le logement est-il nommé avant difficile ?', fr(E(1104)), ['oui', 'non'], 0, "Un logement, puis c'est difficile à. EN: yes, so à.", 'a7-construire'),
      ],
    },
    {
      id: 'r8-ca', label: 'Ça, cela, ce', targets: ['ce-devant-verbe'],
      questions: [
        mc('« ... me plaît beaucoup. »', ['Ça', 'Ce'], 0, "Devant plaire : ça. EN: ça.", 'a8-ca'),
        mc('« ... est pratique. »', ['Ça', "C'"], 1, "Devant être : c'. EN: c'.", 'a8-construire'),
        mc('Dans un courriel : « ... ne pose aucun problème. »', ['Ça', 'Ce', 'Cela'], 2, "À l'écrit : cela. EN: cela.", 'a8-ca'),
        tI('Écris-le pour un courriel, avec cela.', 'Ça ne pose aucun problème.', fr(E(1124)), "Cela, à l'écrit. EN: cela.", 'a8-exemples'),
        tI('Insiste avec ça au début.', "C'est mon bureau.", fr(E(1131)), "Ça, c'est : deux fois. EN: ça, c'est.", 'a8-choisir'),
        eS('Ce dépend.', fr(E(1128)), "Devant dépendre : ça. EN: ça.", 'a8-erreurs'),
        eS('Ça est pratique.', "C'est pratique.", "Devant être : c'est. EN: c'est.", 'a8-erreurs'),
        lC('Écoute. Quel mot entends-tu devant le verbe ?', fr(E(1125)), ['ce', 'ça'], 1, "Ça me plaît. EN: ça.", 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-relief', label: 'Mettre en relief', targets: ['relief-rate'],
      questions: [
        mc("« C'est Hugo ... a appelé. »", ['qui', 'que'], 0, "Pas d'autre sujet : qui. EN: qui.", 'a9-relief'),
        mc("« C'est ce dossier ... je cherche. »", ['qui', 'que'], 1, "Je est le sujet : que. EN: que.", 'a9-construire'),
        mc("« C'est toi qui ... . »", ['décide', 'décident', 'décides'], 2, "Toi qui : décides. EN: décides.", 'a9-piege'),
        tI('Insiste sur Aïcha.', 'Aïcha a trouvé la solution.', fr(E(1137)), "C'est Aïcha qui. EN: c'est ... qui.", 'a9-relief'),
        tI('Insiste sur demain.', 'Je commence demain.', fr(E(1139)), "C'est demain que. EN: c'est ... que.", 'a9-relief'),
        eS('Il est Hugo qui a appelé.', fr(E(1136)), "Pour insister : c'est. EN: c'est.", 'a9-piege'),
        eS("C'est Liège qu'elle a grandi.", fr(E(1140)), "Le lieu garde à. EN: keep à.", 'a9-piege'),
        lC('Écoute. Sur quoi insiste-t-on ?', fr(E(1147)), ['sur les personnes', 'sur le lieu', 'sur le moment'], 2, "En mars : le moment. EN: the time.", 'a9-choisir'),
      ],
    },
    {
      id: 'r10-fige', label: 'Les il figés', targets: ['heure-cest'],
      questions: [
        mc('« ... midi pile. »', ['Il est', "C'est"], 0, "L'heure : il est. EN: il est.", 'a10-fige'),
        mc("« ... lundi, aujourd'hui. »", ['Il est', "C'est"], 1, "Un jour : c'est. EN: c'est.", 'a10-choisir'),
        mc("L'inscription est fermée depuis hier. Tu dis :", ["Elle est trop tard pour s'inscrire.", "C'est trop tard pour s'inscrire."], 1, "Une chance passée : c'est. EN: c'est trop tard.", 'a10-fige'),
        tI("Donne l'heure.", "C'est six heures du matin.", fr(E(1167)), "L'heure : il est. EN: il est.", 'a10-erreurs'),
        tI('Complète avec le il figé.', '... temps de partir.', fr(E(1156)), "Il est temps de. EN: il est temps de.", 'a10-construire'),
        eS('Il est temps à partir.', fr(E(1156)), "Il est temps de. EN: de.", 'a10-erreurs'),
        eS('Elle est tard, je rentre.', fr(E(1154)), "Le il figé ne change pas. EN: il.", 'a10-erreurs'),
        lC("Écoute. Parle-t-on de l'horloge ?", fr(E(1154)), ["non, d'une personne", 'oui'], 1, "Il est tard : l'horloge. EN: the clock.", 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-portrait', label: 'Le portrait', targets: ['portrait-plat'],
      questions: [
        mc('Par quoi commence un bon portrait ?', ['par une liste de défauts', "par c'est : on montre la personne"], 1, "On montre d'abord. EN: point first.", 'a11-plan'),
        mc('« Moussa ? ... un ancien chauffeur de taxi. »', ["C'est", 'Il est'], 0, "Un et un adjectif : c'est. EN: c'est un.", 'a11-lecture'),
        mc("« ... quelqu'un de fiable. »", ['Il est', 'Elle est', "C'est"], 2, "Quelqu'un est un nom : c'est. EN: c'est quelqu'un.", 'a11-cheat'),
        tI('Corrige le début du portrait.', 'Je te présente Aïcha. Elle est notre nouvelle graphiste.', fr(E(1168)), "Notre est un petit mot : c'est. EN: c'est notre.", 'a11-lecture'),
        tI("Raconte avec c'est ... qui.", "Il arrose mes plantes l'été.", fr(E(1176)), "C'est lui qui. EN: c'est lui qui.", 'a11-plan'),
        eS('Elle est une excellente cheffe de projet.', fr(E(1184)), "Un adjectif : c'est une. EN: c'est une.", 'a11-usages'),
        eS('Ils sont des voisins formidables.', fr(E(1187)), "Des et un nom : ce sont. EN: ce sont.", 'a11-scenario'),
        lC('Écoute. Cette phrase montre-t-elle ou décrit-elle ?', fr(E(1175)), ['elle décrit', 'elle montre'], 0, "Il est drôle : une étiquette. EN: it describes.", 'a11-lecture'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Le portrait',
    opener: {
      line: "À toi d'écrire le portrait d'un voisin ou d'une collègue : montre, décris, raconte. EN: Your turn to write a portrait of a neighbour or colleague: point, describe, tell.",
      imageRef: 'lessons/cest-il-est/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton propre portrait et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote your own portrait and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 120,
    restPoints: ['a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-metier', 'a11-quiz/r6-pluriel', 'a11-quiz/r9-relief'],
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
  sheet('sheet-doigt', "Le doigt et l'étiquette", ['la règle', 'il ou elle pour un objet', 'moi, toi, lui', 'la liste du portrait'], [
    teach('sheet-doigt-teach', 'Montrer ou décrire',
      `${REFRAME} ${Cap(ETRE_REF)} t'a donné le test : « ${A106_TEST_FR} » À B1, la même image va plus loin : une situation se montre, une personne se montre par son nom, et une chose déjà montrée reçoit son étiquette, il ou elle selon le genre du nom. EN: c'est points; il or elle est labels something already named.`),
    table('sheet-doigt-table', 'Montrer ou décrire', ['Tu veux', 'Forme', 'Exemple'], [
      ['montrer un objet', "c'est + un, une, le, ma", "C'est ma valise."],
      ['décrire un objet déjà montré', 'il, elle est + adjectif', 'Elle est bleue et très lourde.'],
      ['montrer une personne', "c'est + prénom", "C'est Aïcha, de la comptabilité."],
      ['décrire une personne', 'il, elle est + adjectif', 'Il est sérieux, mais il est juste.'],
      ['montrer une situation', "c'est + adjectif au masculin", "C'est vraiment embêtant."],
      ['montrer au pluriel', 'ce sont + nom', 'Ce sont des clés de voiture.'],
      ['décrire au pluriel', 'ils, elles sont + adjectif', 'Elles sont sur un porte-clés rouge.'],
    ]),
    table('sheet-doigt-pronoms', "Les pronoms après c'est", ['Pronom', 'Exemple'], [
      ['moi', "C'est moi."],
      ['toi', "C'est toi, Hugo ?"],
      ['lui, elle', "Oui, c'est lui."],
      ['nous, vous', "C'est nous, on arrive."],
      ['eux, elles (écrit)', 'Ce sont eux, les nouveaux voisins.'],
      ['eux, elles (oral)', "C'est eux, là-bas."],
    ]),
    table('sheet-doigt-portrait', 'Le portrait : la liste de contrôle', ['À vérifier', 'Comment'], [
      ['Tu montres la personne', PORTRAIT_MOVES[0]],
      ['Tu la décris', PORTRAIT_MOVES[1]],
      ['Tu racontes', PORTRAIT_MOVES[2]],
      ['Chaque il ou elle', 'reprend un nom déjà dit, avec le bon genre'],
      ['Pas de il est un', "avec un adjectif, c'est un"],
      ['À l’écrit', 'ce sont, et il est ... de'],
    ]),
  ]),
  sheet('sheet-metier', 'Le métier, la nationalité, la religion', ['sans article', 'avec un adjectif', 'la majuscule'], [
    teach('sheet-metier-teach', "L'étiquette, puis le nom montré",
      `${Cap(ARTICLES_REF)} et ${ETRE_REF} t'ont donné il est médecin, sans article. Dès que le métier est précisé, par un adjectif, un complément ou une relative, il redevient un nom qu'on montre : c'est un bon médecin, c'est le boulanger du quartier. ${Cap(PAYS_REF)} dit la même chose pour la nationalité. EN: a specified job is a noun you point at.`),
    table('sheet-metier-table', "L'étiquette ou le doigt", ['Étiquette', 'Doigt', 'Pourquoi'], [
      ['Il est médecin.', "C'est un bon médecin.", 'un adjectif'],
      ['Elle est comptable.', "C'est une excellente comptable.", 'un adjectif'],
      ['Il est boulanger.', "C'est le boulanger du quartier.", 'un complément'],
      ['Elle est infirmière.', "C'est une infirmière qui travaille la nuit.", 'une relative'],
      ['Il est québécois.', "C'est un Québécois de Rimouski.", 'un nom, avec une majuscule'],
      ['Elle est sénégalaise.', "C'est une Sénégalaise.", 'un nom, avec une majuscule'],
      ['Il est catholique.', "C'est un catholique pratiquant.", 'un adjectif'],
      ['Il est marié, retraité.', '(pas de forme avec c’est)', 'un état, toujours une étiquette'],
    ]),
  ]),
  sheet('sheet-situation', 'La situation et le pluriel', ["c'est + masculin", 'ce sont', "l'oral et l'écrit"], [
    teach('sheet-situation-teach', 'Une situation n’a pas de genre',
      "Quand tu montres une situation, une activité, une idée ou une réaction, il n'y a pas de nom : c'est, et l'adjectif reste au masculin. C'est beau, c'est cher, travailler de nuit, c'est fatigant. Elle est belle, elle est chère parlent d'un nom féminin précis. EN: a situation takes c'est and the masculine.",
    ),
    table('sheet-situation-table', 'La situation ou le nom', ['Situation', 'Nom précis'], [
      ["C'est beau, Québec en hiver.", 'La vue est belle. Elle est magnifique.'],
      ["C'est difficile, un déménagement.", 'Cette question est difficile.'],
      ["C'est cher, la vie à Genève.", 'La robe est jolie. Elle est un peu chère.'],
      ["Travailler de nuit, c'est fatigant.", 'Le serveur est fatigué.'],
      ["C'était ennuyeux.", 'La réunion était longue.'],
      ["C'est dommage. C'est génial. C'est vrai.", '(des réactions : jamais il ou elle)'],
    ]),
    teach('sheet-situation-pluriel', "Ce sont, et ce qu'on entend",
      `${Cap(ETRE_REF)} t'a donné ce sont comme pluriel de c'est. À l'écrit, c'est toujours vrai. À l'oral, beaucoup de francophones disent c'est mes collègues : tu l'entendras, et tu peux le dire entre amis. Au négatif : ce ne sont pas des touristes, et l'article reste après être. EN: write ce sont; c'est + plural is ordinary speech.`),
    table('sheet-situation-registre', "L'oral et l'écrit", ["À l'oral", "À l'écrit"], [
      ["C'est mes collègues.", 'Ce sont mes collègues.'],
      ["C'est les photos de mon voyage.", 'Ce sont les photos de mon voyage.'],
      ["C'est eux, là-bas.", 'Ce sont eux.'],
      ["C'est pas des touristes.", 'Ce ne sont pas des touristes.'],
    ]),
  ]),
  sheet('sheet-infinitif', 'De ou à', ['il est + adj + de', "c'est + adj + de", '... + adj + à'], [
    teach('sheet-infinitif-teach', 'De annonce, à revient',
      `Il est difficile de trouver un logement : le il ne remplace rien, il annonce l'infinitif et son complément. C'est la forme écrite. À l'oral, c'est difficile de. Si le nom est déjà dit, l'infinitif revient vers lui avec à : un logement, c'est difficile à trouver ; ce texte est difficile à lire. ${Cap(MEDECIN_REF)} t'a déjà donné c'est difficile à expliquer. EN: de looks ahead, à looks back.`),
    table('sheet-infinitif-table', 'Trois structures', ['Structure', 'Registre', 'Exemple'], [
      ['il est + adj + de + inf + complément', 'écrit', 'Il est important de signer le bail.'],
      ["c'est + adj + de + inf + complément", 'oral', "C'est possible de payer en ligne."],
      ["nom, c'est + adj + à + inf", 'les deux', "Un logement, c'est difficile à trouver."],
      ['nom + est + adj + à + inf', 'les deux', 'Ce formulaire est facile à remplir.'],
      ['il, elle est + adj + à + inf', 'les deux', 'Elle est agréable à vivre.'],
      ["c'est gentil de + inf", 'les deux', "C'est gentil de m'aider."],
      ['il est interdit, conseillé, nécessaire de', 'écrit, règlement', 'Il est conseillé d’arriver en avance.'],
    ]),
  ]),
  sheet('sheet-relief', 'Ça, le relief, le il figé', ['ce, ça, cela', "c'est ... qui, que", 'il est midi, il est tard'], [
    teach('sheet-relief-ca', 'Ce devant être, ça ailleurs',
      `${Cap(DEMONSTRATIFS_REF)} disait : « ${A233_REFRAME} » En français : « ${A233_REFRAME_FR} » Le ce de c'est est un troisième ce, qui ne va que devant être. Devant les autres verbes : ça à l'oral, cela à l'écrit. EN: ce before être only; ça or cela elsewhere.`),
    table('sheet-relief-ca-table', 'Ce, ça, cela', ['Mot', 'Devant', 'Exemple'], [
      ['ce, c’', 'être', "C'est ça."],
      ['ça', 'les autres verbes, oral', 'Ça me plaît beaucoup.'],
      ['cela', 'les autres verbes, écrit', 'Cela ne pose aucun problème.'],
      ["ça, c'est", 'pour insister', "Ça, c'est pratique."],
    ]),
    teach('sheet-relief-teach', 'Mettre en relief',
      `Pour insister sur un mot, mets-le entre c'est et qui ou que. ${Cap(QUI_QUE_REF)} donne la règle : « ${B111_REFRAME} » Le verbe après qui suit le mot montré : c'est toi qui décides, c'est nous qui payons. Un lieu garde sa préposition : c'est à Liège que. EN: stress a word with c'est ... qui or que.`),
    table('sheet-relief-table', 'Ce que tu peux mettre en relief', ['Mot', 'Exemple'], [
      ['une personne', "C'est Hugo qui a appelé."],
      ['un pronom', "C'est toi qui décides."],
      ['une chose', "C'est ce dossier que je cherche."],
      ['un moment', "C'est demain que je commence."],
      ['un lieu', "C'est à Liège qu'elle a grandi."],
      ['une raison', "C'est pour ça que je t'appelle."],
      ['au pluriel, à l’écrit', 'Ce sont eux qui ont choisi le restaurant.'],
    ]),
    teach('sheet-relief-fige', 'Le il qui ne montre rien',
      `${Cap(HEURE_REF)} disait : « ${A112_REFRAME} » En français : « ${A112_REFRAME_FR} » Il est midi, il est tard, il est tôt, il est temps de partir, il était une fois : ce il ne reprend aucun nom. C'est trop tard, lui, montre une situation : la chance est passée. EN: the frozen il for the clock; c'est trop tard for a missed chance.`),
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
  { id: 'd-doigt', title: 'Montrer ou décrire', format: 'sort' as const, coach: "Deux piles : la phrase montre-t-elle, ou décrit-elle ? EN: sort pointing from describing.", buckets: ['on montre', 'on décrit'], items: [E(1000), E(1001), E(1003), E(1004), E(1010), E(1011)], audio: AUDIO },
  { id: 'd-genre', title: 'Il ou elle', format: 'mcq' as const, coach: "Regarde le genre du nom, pas la chose. EN: look at the noun's gender.", q: 'Ma veste ? ... est grise.', opts: ['Il', 'Elle'], correct: 1, why: "Veste est féminin. EN: feminine.", items: [E(1016), E(1017), E(1024), E(1026), E(1030), E(1033)], audio: AUDIO },
  { id: 'd-metier', title: "Il est, ou c'est un", format: 'mcq' as const, coach: "Le métier seul : il est. Avec un adjectif : c'est un. EN: bare job il est; with an adjective c'est un.", q: '... un excellent médecin.', opts: ["C'est", 'Il est'], correct: 0, why: "Un adjectif : c'est un. EN: c'est un.", items: [E(1034), E(1035), E(1036), E(1037), E(1040), E(1041)], audio: AUDIO },
  { id: 'd-tonique', title: 'Un prénom, un pronom', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute : c'est, puis le nom ou le pronom. EN: read each aloud.", items: [E(1052), E(1053), E(1055), E(1056), E(1059), E(1066)], audio: AUDIO },
  { id: 'd-situation', title: 'La situation ou le nom', format: 'sort' as const, coach: "Deux piles : une situation entière, ou un nom précis. EN: situation or named noun.", buckets: ['une situation', 'un nom précis'], items: [E(1068), E(1069), E(1070), E(1071), E(1072), E(1077)], audio: AUDIO },
  { id: 'd-pluriel', title: "L'oral ou l'écrit", format: 'sort' as const, coach: "Deux piles : ce qui se dit, et ce qui s'écrit. EN: spoken or written.", buckets: ["à l'oral", "à l'écrit"], items: [E(1087), E(1086), E(1094), E(1093), E(1058), E(1057)], audio: AUDIO },
  { id: 'd-infinitif', title: 'De ou à', format: 'mcq' as const, coach: "De annonce l'infinitif ; à revient vers un nom déjà dit. EN: de ahead, à back.", q: "Un logement, c'est difficile ... trouver.", opts: ['de', 'à'], correct: 1, why: "Le logement est déjà dit : à. EN: à.", items: [E(1102), E(1103), E(1104), E(1107), E(1108), E(1114)], audio: AUDIO },
  { id: 'd-ca', title: 'Ce ou ça', format: 'mcq' as const, coach: "Ce devant être, ça devant les autres verbes. EN: ce before être only.", q: '... me plaît beaucoup.', opts: ['Ça', 'Ce'], correct: 0, why: "Plaire : ça. EN: ça.", items: [E(1120), E(1121), E(1124), E(1125), E(1128), E(1132)], audio: AUDIO },
  { id: 'd-relief', title: 'Le doigt sur un mot', format: 'flashcard' as const, coach: "Lis chaque phrase et dis sur quoi elle insiste. EN: read each and say what it stresses.", items: [E(1136), E(1137), E(1138), E(1139), E(1141), E(1149)], audio: AUDIO },
  { id: 'd-fige', title: "L'horloge ou la situation", format: 'sort' as const, coach: "Deux piles : l'horloge, ou ce qu'on montre. EN: the clock or what you point at.", buckets: ["l'horloge : il est", "ce qu'on montre : c'est"], items: [E(1154), E(1158), E(1157), E(1162), E(1165), E(1164)], audio: AUDIO },
  { id: 'd-portrait', title: 'Un portrait qui vit', format: 'flashcard' as const, coach: "Lis chaque phrase : montre-t-elle, décrit-elle ou raconte-t-elle ? EN: point, describe or tell.", items: [E(1168), E(1170), E(1175), E(1176), E(1178), E(1184)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'doigt-etiquette', description: 'Uses il or elle est to introduce something not yet named, or c’est to describe something already named, so a sentence about a situation is heard as a sentence about an object.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-doigt', retest: 'd-doigt' },
  { id: 'il-pour-it', description: 'Uses il for every object, as English uses it, instead of choosing il or elle by the noun’s gender, and leaves the adjective unagreed.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-genre', retest: 'd-genre' },
  { id: 'il-est-un', description: 'Keeps un or une after il est before a job, nationality or religion, especially once an adjective is added (il est un bon médecin).', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-metier', retest: 'd-metier' },
  { id: 'il-est-prenom', description: 'Introduces a person with il est or elle est before a first name or a stressed pronoun (il est Hugo, c’est je).', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-tonique', retest: 'd-tonique' },
  { id: 'situation-feminin', description: 'Uses elle est or a feminine adjective for a whole situation, activity or reaction (elle est difficile, c’est belle), borrowing the gender of a noun that was never said.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-situation', retest: 'd-situation' },
  { id: 'pluriel-ecrit', description: 'Writes c’est + plural noun, or ils sont before a determiner, carrying spoken habits or English they are into written French.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-pluriel', retest: 'd-pluriel' },
  { id: 'de-a-inverses', description: 'Swaps de and à after an adjective: à before an infinitive with its object (il est difficile à trouver un logement), de after a noun already named.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-infinitif', retest: 'd-infinitif' },
  { id: 'ce-devant-verbe', description: 'Puts ce before a verb other than être (ce me plaît, ce dépend), or ça before être (ça est).', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-ca', retest: 'd-ca' },
  { id: 'relief-rate', description: 'Builds emphasis with il est, swaps qui and que, or leaves the verb after c’est toi qui in the il form.', detectOn: ['a9-construire', 'a9-piege', 'a9-check', 'a11-mission'], drill: 'd-relief', retest: 'd-relief' },
  { id: 'heure-cest', description: 'Tells the time with c’est, as English it’s suggests, or turns the frozen il into elle, or says il est temps à.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check'], drill: 'd-fige', retest: 'd-fige' },
  { id: 'portrait-plat', description: 'Writes a portrait that only lists adjectives with il est, never points at the person with c’est and never tells a story with c’est ... qui.', detectOn: ['a11-lecture', 'a11-cheat', 'a11-mission'], drill: 'd-portrait', retest: 'd-portrait' },
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-22-[a-z0-9-]+/g) ?? [])];

const PIEGE_BRIEF = "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.";

const REC_DESC: Record<string, string> = {
  'rec-b1-22-registre': "The lost-and-found register (act 1), ONE VOICE, one take: Madame Pelletier, a calm Montréalaise in her fifties, reading her own notes aloud at the end of a shift. Each « Premier objet : c'est ... » is a small new start; the il est / elle est that follow are lighter and quicker. The final « il est déjà onze heures et demie » is flat, a clock, not a comment.",
  'rec-b1-22-bureau': "The office tour (act 2), two voices: Hugo, quick and friendly, Québécois, in his thirties, and the learner, calm. The narrator is a third, neutral voice. Every il and elle that picks up a noun is unstressed; the noun it refers to was said a moment before and should still be in the ear.",
  'rec-b1-22-accord': "The four gender cards, one voice. Cards one and two (« Ma veste ? Elle est grise », « Mon manteau ? Il est gris ») must be read with IDENTICAL melody so the only change is elle / il and grise / gris. Make the final z of grise clearly audible.",
  'rec-b1-22-reseau-ecoute': "REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, TWO VOICES alternating (a man and a woman at a networking evening), conversational speed. The learner listens for whether an article sits before the job. Do NOT slow down on « un », « une » or their absence; the liaison in « c'est un » (seh-tuhⁿ) must be natural.",
  'rec-b1-22-metier': "The four job cards, one voice. Card one holds two phrases across a middot; leave a clear beat. On card three, « sénégalaise » and « Sénégalaise » sound identical: read them the same way, the card is about the page, not the ear.",
  'rec-b1-22-piege-metier': PIEGE_BRIEF,
  'rec-b1-22-interphone': "The intercom evening (act 4), four voices: the colleagues at the intercom (slightly muffled, as through a speaker), Julie Côté (warm, a little formal), Aïcha (Dakar French, relaxed), and the learner. The narrator is neutral. « C'est nous », « c'est lui » are short and bright, the way people announce themselves.",
  'rec-b1-22-tonique': "The four name and pronoun cards, one voice. « C'est moi », « c'est lui » with the stress on the pronoun. Card three: « Ce sont eux » with the liaison sohⁿ-TEU.",
  'rec-b1-22-carte': "The postcard from Québec City (act 5), ONE VOICE, one take: Chloé, young, enthusiastic, Québécoise, reading her own card aloud to a friend. Every « c'est » + adjective (magnifique, fatigant, beau, cher, délicieux) is a reaction and carries a little warmth; every « elle est » / « il est » is plainer, a label.",
  'rec-b1-22-situation': "The four situation cards. Card one « C'est beau, Québec en hiver » and card two « La vue est belle » must make the masculine beau /bo/ and the feminine belle /bɛl/ audibly different. Card four holds three reactions across middots; a clear beat between them.",
  'rec-b1-22-piege-situation': PIEGE_BRIEF,
  'rec-b1-22-photos-ecoute': "REQUIRED FOR THE EAR MISSION (act 6): eight lines, ONE TAKE, ONE VOICE, relaxed, as someone showing holiday photos on a phone. Lines two and five are CASUAL (« c'est mes collègues », « c'est les photos »): /sɛ/, never swallowed. Lines one and four are the same sentences with « ce sont » /sə sɔ̃/, clearly two syllables. The contrast is the whole exercise.",
  'rec-b1-22-pluriel': "The four plural cards. Card two is casual speech; card one is careful. Card four holds two sentences across a middot: « ils sont accueillants » with the liaison sohⁿ-ta.",
  'rec-b1-22-reglement': "The building rules (act 7), ONE VOICE, one take, a neutral, administrative Montréal voice, read the way a caretaker reads a notice to a new tenant. Every « il est ... de » is even and official; « C'est simple à faire » near the end is a little more personal.",
  'rec-b1-22-infinitif': "The four infinitive cards. Card one and card two differ only in « il est » against « c'est »: read them with the same melody. Card three (« Un logement, c'est difficile à trouver ») has a short pause after logement.",
  'rec-b1-22-piege-infinitif': PIEGE_BRIEF,
  'rec-b1-22-ca-ecoute': "REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, ONE VOICE, a shopkeeper at a Montréal dépanneur, casual and quick. « Ça » is always /sa/, clearly different from « ce » /sə/; the learner is listening for exactly that.",
  'rec-b1-22-ca': "The four ce / ça / cela cards. Card three (« Cela ne pose aucun problème ») is read in a careful, written register; card four (« Ça, c'est pratique ») with a small pause after ça.",
  'rec-b1-22-imprimante': "The printer story (act 9), two voices: Monsieur Roy, Québécois, calm but annoyed, and the learner, firm. Each of the learner's three lines puts the STRESS on the word in relief (moi, Hugo, Aïcha), the way a speaker corrects someone. The narrator is a third, neutral voice.",
  'rec-b1-22-relief': "The four emphasis cards. On each, lean slightly on the word between c'est and qui / que (Hugo, demain, ce dossier, moi), never on qui or que themselves.",
  'rec-b1-22-piege-relief': PIEGE_BRIEF,
  'rec-b1-22-heure-ecoute': "REQUIRED FOR THE EAR MISSION (act 10): eight lines, ONE TAKE, ONE VOICE, late in an evening among friends, relaxed. « Il est tard » and « c'est trop tard » must both be clear; do not reduce « il est » to /jɛ/ here, the learner needs to hear il.",
  'rec-b1-22-fige': `The four frozen-il cards. Card one is the clock phrase from ${HEURE_REF}; read it identically in rhythm to card two (« Il est tard, je rentre ») so the learner hears one il doing both.`,
  'rec-b1-22-portrait': "The model portrait (act 11), ONE VOICE, one take: Hugo introducing Aïcha to a friend, warm and admiring, never gushing. The three moves (point, describe, tell) are audible as three blocks. The two « c'est elle qui » lines put a light stress on elle.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 22',
  intro: "You met c'est and il est in A1, with one test: a little word in front of the noun means c'est. That test goes silent the moment there is no noun at all: a view, a situation, an activity, a reaction. This lesson gives you one picture that covers them all: c'est points at something, il est sticks a label on something already pointed at. With it you describe objects, people, jobs and situations, write ce sont and il est facile de, and stress a word with c'est ... qui.",
  skill: 'PE',
  grammarAssumed: [
    ETRE_UNIT, ARTICLES_UNIT, HEURE_UNIT, PAYS_UNIT, ACCORD_UNIT, MEDECIN_UNIT, DEMONSTRATIFS_UNIT,
    QUI_QUE_UNIT, NEGATION_AV_UNIT,
  ],
  grammarIntroduced: [
    'il and elle as anaphoric pronouns for inanimate nouns, selected by grammatical gender and not by the referent, with adjective agreement',
    "The reappearance of the article with a profession, nationality or religion once it is modified by an adjective, complement or relative clause (c'est un bon médecin against il est médecin)",
    "c'est with a stressed pronoun (moi, toi, lui, nous, vous), and ce sont eux against spoken c'est eux",
    "c'est plus an invariable masculine adjective for a situation, activity, idea or reaction, against il or elle est for a named noun",
    "ce sont in writing against c'est plus a plural noun in speech, as a register choice, and ce ne sont pas with the article preserved after être",
    "Adjective plus infinitive: il est + adj + de (impersonal, written), c'est + adj + de (spoken), and c'est or il / elle est + adj + à pointing back to a named noun",
    'ce restricted to être; ça before other verbs in speech and cela in writing; ça, c’est as double deixis',
    "Mise en relief with c'est ... qui and c'est ... que for a person, pronoun, thing, time, place or reason, with ce sont ... qui in writing",
    "The frozen impersonal il of il est tard, il est temps de and il était une fois, against c'est trop tard for a missed chance and c'est lundi for a day",
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu connais c'est et il est depuis le A1, avec un test : un petit mot devant le nom, et c'est c'est. Ce test se tait dès qu'il n'y a plus de nom : un paysage, une situation, une activité, une réaction. Cette leçon te donne une seule image pour tout : c'est montre du doigt, il est colle une étiquette. Avec elle, tu décris les objets, les gens, les métiers et les situations, et tu écris un vrai portrait.",
    minutes: 130,
    difficulty: 3,
    glyph: "c'est",
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: CEST_IL_EST_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, REGISTRE_TEXT, CARTE_TEXT, REGLEMENT_TEXT, PORTRAIT_TEXT, dicteeFor };
