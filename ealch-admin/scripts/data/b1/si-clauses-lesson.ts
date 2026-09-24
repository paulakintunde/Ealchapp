// b1.10.l1 « Les phrases avec si » — the lesson.
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
//   Rhythm per act: meet (scene / story / reading), name (cardDeck, examples,
//   tapTable), build (groupDrill, gated), choose (a drill where the MEANING
//   picks the pair), trap (trapDrill stepped or commonErrors), check (gated
//   control pages before the checkpoint).
//
//    1  Deux si, deux mondes        6   the four si's, side by side, in one text
//    2  La paire réelle             7   si + présent, puis futur
//    3  Jamais -rai, jamais -rais    8   the one absolute rule, and its trap
//    4  Trois suites                7   futur, présent or impératif after si
//    5  L'ordre et la virgule       7   either half first, and the comma
//    6  La paire irréelle           8   si + imparfait, puis conditionnel
//    7  Si j'ai, si j'avais         8   choosing the pair, and what each says
//    8  Le si qui pose une question 7   demander si, savoir si: not a condition
//    9  Si on allait au cinéma      7   the suggestion si, the polite si, si oui
//   10  Quand ou si                 7   certain and dated against possible
//   11  Ce qui ne s'est jamais passé 6  si + plus-que-parfait, RECOGNITION only
//   12  Écrire avec si             11   model, plan, role play, TASK, quiz
//
//   TOTAL 89 missions, 12 acts. Corpus: 179 authored rows in twelve blocks
//   plus 36 reused seed rows, released act by act through `deckTranche`.
//   Chapter artwork: `si-clauses-image-prompts.md`, twelve prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (later lessons may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Une phrase avec si, c'est une paire : tu choisis la paire, pas les temps. »
//   EN: A si sentence is a pair: you choose the pair, not the tenses.
//
//   ONE METAPHOR, LA PAIRE. The three patterns are not three rules. They are
//   three matched pairs, and the learner picks one, once, by how far the
//   situation is from what is real. Pick the pair and both tenses are already
//   decided; pick a tense on its own and you write « si je serai ». The pair
//   also survives the clause order, which is act 5: a pair is a pair whichever
//   half is written first. It is NOT a step-back rule (act 4 breaks that) and
//   NOT a difference rule (act 4 breaks that too).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the si system as one system: the real pair, the present-unreal
//           pair, the absolute rule, the clause order and its comma, the
//           choice between the pairs, si as an indirect question, si + on as
//           a suggestion, the polite si and the short forms.
//   QUOTES  b1.07's reframe, which this lesson is built on and which owns
//           « si + présent > futur »; b1.08's (the conditional); b1.05's (the
//           future stem); b1.01's (the imparfait endings). All four are real
//           imports from their corpus files and are never retyped.
//   LEAVES  to B2: BUILDING si + plus-que-parfait > conditionnel passé. Act 11
//           teaches recognition, says so on the card, in the milestone and in
//           the act check, and the task's grader notes forbid marking one
//           either way. Mixed pairs are named once, in act 11, and never
//           drilled. The full polite-request repertoire is b1.09's; act 9
//           gives « si vous voulez bien » and « si possible » only.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the situation
//   needs (the hall manager and the club secretary say « vous »). Every
//   learner surface that explains something carries English (`en`, or a final
//   « EN: »). Every `say` is French, spoken fr-FR. Theme `projets-et-futur`.
//   A2 citations use the English trail label; b1.* ones are French from the
//   plan. No em dash, no spaced « ? » or « ! » in a bubble, no U+203F tie.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. TWELVE acts and TWELVE quiz rounds (96 questions). The rich standard
//      allows 8 to 12 rounds; b1.01 to b1.08 shipped 10 and 11. Twelve is the
//      ceiling and it is here because the si system really does have twelve
//      distinct sub-topics. Trim to eleven by folding act 9 into act 4?
//   2. ACT 11 is recognition only: the learner reads and glosses
//      « si + plus-que-parfait », and never builds one. Is that the right
//      boundary, or should the whole act wait for B2?
//   3. ACT 8 teaches that a future IS allowed after si when si means whether.
//      That directly contradicts act 3's absolute rule, which is why act 3
//      flags it forward and act 8 flags it back. Confirm the pair of flags is
//      enough, or should act 8 move before act 3?
//   4. THREE tapTables (acts 4, 7 and 9), one per act. The pilot brief allowed
//      one per LESSON; b1.02 to b1.08 shipped 2 and 3. Confirm the looser rule.
//   5. b1.07's corpus header still says b1.10 owns `.800`-`.999`. The log
//      moved this lesson to 1200-1399 after the b1.05 collision and nothing
//      here is authored below 1200. b1.07 is not edited by this build: is a
//      one-line correction to its header wanted in the wave commit?
//   6. B1 CITATIONS are French from the plan (« la leçon 7 du B1 »). Switch to
//      the English trail label once the b1 units are in the seed?
//   7. Titles, labels, card heads and stat keys carry no « EN: » tail, as in
//      b1.01 to b1.08. Tail them too?
//   8. 'coach-fr-FR' is still a proposed voice id (b1.01's question 5).
//   9. The task is WRITTEN (120 to 160 words, `skill: 'PE'`). The suggestion
//      si and the polite si are spoken moves: should b1.10 also carry a
//      spoken task, or does the act 12 role play cover them?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  READING_SORTIE, READING_MODELE,
  B101_REFRAME, B101_REFRAME_EN, B105_REFRAME, B105_REFRAME_EN,
  B107_REFRAME, B107_REFRAME_EN, B108_REFRAME, B108_REFRAME_EN,
  IMP_FORM_UNIT, FUTUR_REG_UNIT, FUTUR_IRR_UNIT, FUTUR_USE_UNIT, COND_UNIT,
  MODAUX_UNIT, TIME_PREP_UNIT,
  IMP_FORM_REF, FUTUR_REG_REF, FUTUR_IRR_REF, FUTUR_USE_REF, COND_REF, POLI_REF,
} from './si-clauses-corpus.ts';
import { SI_TERMS } from './si-clauses-terms.ts';

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
  if (!r) throw new Error(`b1.10: no item ${id}`);
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
 *  ACT 1 — DEUX SI, DEUX MONDES
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Nothing here is ungrammatical. The wrong sentence simply tells the
 *  other person that the answer is already no. NO « ? » OR « ! » IN ANY
 *  BUBBLE (house rule 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La sortie du club',
  frSub: 'Deux réponses, deux messages',
  setting: { place: 'Club de randonnée, salle Jules-Verne', city: 'Nantes', time: '19 h 10', ambience: 'un tableau, des chaises empilées, la pluie contre la vitre' },
  beats: [
    {
      kind: 'narration',
      text: "Le club de randonnée de Nantes prépare sa sortie d'automne. Mme Roussel compte les places dans le car. Il en reste deux, et elle veut une réponse ce soir.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mme Roussel',
      fr: 'Il me reste deux places pour samedi. Vous venez.',
      en: 'I have two seats left for Saturday. You are coming.',
      respell: '[eel muh rest duh plass poor sam-DEE | voo vuh-NAY]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Si j'avais le temps, je viendrais avec vous.",
      en: 'If I had time, I would come with you.',
      respell: '[see zha-veh luh TAHⁿ | zhuh vyehⁿ-DREH a-vek VOO]',
      stage: "La phrase est juste. Mais elle dit que le temps, tu ne l'as pas.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mme Roussel',
      fr: "Très bien. Je donne votre place à quelqu'un d'autre.",
      en: 'Very well. I will give your seat to someone else.',
      respell: '[treh BYEHⁿ | zhuh don vo-truh plass a kel-kuhⁿ DOHTR]',
      stage: 'Pour elle, tu viens de refuser.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Tu voulais dire : je ne sais pas encore, mais c'est possible. Elle a entendu : c'est déjà non. Une seule paire de temps sépare les deux messages.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase garde ta place dans le car.',
      size: 'lg',
      options: [
        { fr: "Si j'avais le temps, je viendrais avec vous.", respell: '[see zha-veh luh TAHⁿ | zhuh vyehⁿ-DREH a-vek VOO]', en: 'If I had time, I would come with you.', outcome: 'breaks', audio: AUDIO },
        { fr: "Si j'ai le temps, je viendrai avec vous.", respell: '[see zhay luh TAHⁿ | zhuh vyehⁿ-DREH a-vek VOO]', en: 'If I have time, I will come with you.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Elle écrit ton nom au crayon et ajoute : « réponse vendredi ». La place reste à toi jusque-là.",
        breaks: "Elle barre ton nom. Pour elle, le temps est une chose que tu n'as pas, et ça ne changera pas d'ici samedi.",
      },
    },
    {
      kind: 'break',
      heading: 'Deux moitiés, une paire',
      body: "Une seule lettre sépare les deux moitiés du début. Si j'ai annonce une chose possible. Si j'avais annonce une chose qui n'est pas le cas. Le résultat suit tout seul. EN: the first half sets the world and the second follows.",
      wrong: {
        fr: "Si j'avais le temps, je viendrais avec vous.",
        ipa: '/si ʒa.vɛ lə tɑ̃ ʒə vjɛ̃.dʁɛ a.vɛk vu/',
        respell: '[see zha-veh luh TAHⁿ | zhuh vyehⁿ-DREH a-vek VOO]',
        en: 'If I had time, I would come with you.',
      },
      right: {
        fr: "Si j'ai le temps, je viendrai avec vous.",
        ipa: '/si ʒe lə tɑ̃ ʒə vjɛ̃.dʁe a.vɛk vu/',
        respell: '[see zhay luh TAHⁿ | zhuh vyehⁿ-DREH a-vek VOO]',
        en: 'If I have time, I will come with you.',
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Deux paires, deux mondes. Il en existe une troisième, pour ce qui ne s'est jamais passé, et tu la reconnaîtras à la fin de cette leçon.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['paire', 'choix'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Construire les deux paires qui comptent', s: 'Actes 2 et 6 : le réel et ce qui ne l’est pas' },
    { t: 'Ne plus jamais écrire si je serai', s: 'Acte 3 : la seule règle sans exception' },
    { t: 'Choisir la paire qui dit ce que tu penses', s: 'Actes 5 et 7 : l’ordre, la virgule et le choix' },
    { t: 'Reconnaître les autres si', s: 'Actes 8 à 11 : la question, la proposition, quand, le regret' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the same evening in writing, with four different si's
 *  already at work. Noticing before the rule. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le tableau de la salle',
  frSub: 'Quatre si dans un seul texte',
  text: READING_SORTIE,
  glossary: [
    { word: 'le refuge', en: 'the mountain hut', note: 'La maison de pierre où les marcheurs dorment ou attendent la fin de la pluie.' },
    { word: 'hausse les épaules', en: 'shrugs', note: 'Le geste de quelqu’un qui trouve la phrase évidente.' },
    { word: 'au feutre bleu', en: 'in blue marker', note: 'Écrit gros, pour que toute la salle lise.' },
    { word: 'efface', en: 'rubs out', note: 'Enlève ce qui est écrit sur le tableau.' },
  ],
  questions: [
    { q: 'Quelles deux lignes du tableau parlent de choses qui peuvent vraiment arriver ?', a: "« Si le car est complet, nous prendrons le train » et « Si le temps est mauvais, nous resterons au refuge ». Présent après si, futur derrière." },
    { q: 'Quelle phrase dit une chose qui n’est pas le cas ?', a: "« Si j'avais une voiture, je vous emmènerais tous. » Mme Roussel n'a pas de voiture." },
    { q: 'Dans « Je me demande si le car est déjà réservé », est-ce que si pose une condition ?', a: "Non. Léa se pose une question. Ce si veut dire whether, et c'est l'acte 8." },
    { q: 'Que fait « Et si on partait vendredi soir ? »', a: "Ce n'est pas une condition non plus : c'est une proposition. Il n'y a même pas de deuxième moitié." },
    { q: 'Pourquoi personne n’efface la dernière ligne ?', a: "Parce qu'elle parle d'un passé qui n'a pas eu lieu : ils n'ont pas su, donc ils n'ont pas réservé. C'est le regret." },
  ],
  audio: REC('rec-b1-10-tableau'),
  say: REFRAME,
  terms: ['paire', 'question'],
};

/** BUILD. Sort the four si's the text just showed. */
const A1_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-trier',
  layer: 'core',
  size: 'lg',
  title: 'Range chaque si dans son monde',
  frSub: 'Quatre familles, un seul mot',
  groups: [
    grp('Ça peut arriver', [
      it(E(1204), 'le car peut très bien être complet'),
      it(E(1211), 'la météo de novembre, en vrai'),
      it('fr.b1.cafe.088', 'un oubli est toujours possible'),
      it(E(1206), 'Ousmane n’a pas encore répondu'),
    ], chk('Ces quatre phrases : quelle moitié porte le futur ?',
      ['la moitié derrière si', 'la moitié qui commence par si', 'les deux'], 0,
      'Derrière si, le présent. Le futur attend dans le résultat. EN: present after si, future in the result.')),
    grp('Ce n’est pas le cas', [
      it(E(1208), 'il n’y a pas de voiture'),
      it(E(1205), 'le car n’est pas complet aujourd’hui'),
      it(E(1212), 'il ne fait pas mauvais pour l’instant'),
      it('fr.b1.litterature.004', 'le temps manque, vraiment'),
    ], chk('Que dit l’imparfait après si ?',
      ['que c’est déjà arrivé', 'que ce n’est pas le cas maintenant'], 1,
      'L’imparfait après si ne parle pas du passé : il ouvre un monde à côté. EN: it opens a world beside this one.')),
    grp('Ni condition ni paire', [
      it(E(1213), 'une question, pas une condition'),
      it(E(1214), 'une proposition, sans deuxième moitié'),
      it(E(1209), 'un passé qui n’a pas eu lieu'),
      it(E(1210), 'aucun si du tout : le décor'),
    ], chk('Combien de ces quatre phrases posent une condition ?',
      ['deux', 'une seule', 'aucune'], 2,
      'Une question, une proposition, un regret, une constatation. Aucune condition. EN: not one of them is a condition.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['paire', 'reel', 'irreel'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où la mauvaise paire coûte cher',
  cases: [
    { situation: 'Tu réponds à une invitation que tu peux encore accepter', fr: "Si j'ai le temps, je passerai te voir.", en: 'If I have time, I will drop in on you.' },
    { situation: 'Tu refuses poliment, sans dire non', fr: "Si j'avais le temps, je passerais te voir.", en: 'If I had time, I would drop in on you.' },
    { situation: 'Tu écris une consigne de sécurité au travail', fr: 'Si le voyant rouge s’allume, appelle le technicien.', en: 'If the red light comes on, call the technician.' },
    { situation: 'Tu demandes une information que tu ne connais pas', fr: 'Je me demande si le car est déjà parti.', en: 'I wonder whether the coach has already left.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['choix', 'question'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le message', 'Pourquoi « Si j’avais le temps » a-t-il fait perdre la place ?',
    ['parce que la phrase est fausse', 'parce qu’elle dit que le temps manque déjà', 'parce qu’elle est trop longue'], 1,
    'La forme était juste. C’est le monde qu’elle annonce qui a refusé. EN: the form was right; the world it announced said no.'),
  ctl('La paire', 'Tu choisis quoi, exactement, au début d’une phrase avec si ?',
    ['les deux temps, un par un', 'la paire, une seule fois'], 1,
    'Un seul choix, et les deux moitiés suivent. EN: one choice, and both halves follow.'),
  ctl('Les autres si', 'Est-ce que tous les si posent une condition ?',
    ['oui, toujours', 'non, trois autres emplois arrivent dans cette leçon'], 1,
    'La question, la proposition et le regret utilisent le même mot. EN: three other jobs share the word.'),
], ['paire', 'choix']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Deux si, deux mondes',
    opener: {
      line: "Tu dis presque la même phrase et on comprend le contraire : ici tu apprends à choisir ton monde. EN: You say almost the same sentence and they hear the opposite: here you learn to choose your world.",
      imageRef: 'lessons/si-clauses/act01.jpg',
    },
    sections: [],
    milestone: "Tu reconnais les quatre emplois de si dans un texte ordinaire. EN: You can spot the four jobs si does in an everyday text.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_TRIER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LA PAIRE RÉELLE : SI + PRÉSENT, PUIS FUTUR
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Le tableau, ligne par ligne',
  frSub: 'Ce que le club a vraiment prévu',
  setting: 'Mme Roussel relit les consignes avec Ousmane, la veille du départ.',
  bubbles: [
    { from: 'narrator', fr: 'Ousmane veut comprendre ce qui se passera samedi.', en: 'Ousmane wants to know what will happen on Saturday.' },
    { from: 'user', fr: 'Et si le car est complet.', en: 'And if the coach is full.' },
    { from: 'coach', fr: 'Si le car est complet, nous prendrons le train.', en: 'If the coach is full, we will take the train.', warn: 'Présent après si, futur derrière' },
    { from: 'user', fr: 'Et si le temps est mauvais.', en: 'And if the weather is bad.' },
    { from: 'coach', fr: 'Si le temps est mauvais, nous resterons au refuge.', en: 'If the weather is bad, we will stay at the refuge.', warn: 'La même paire, deuxième fois' },
    { from: 'user', fr: 'Et si tout le monde arrive à l’heure.', en: 'And if everyone arrives on time.' },
    { from: 'coach', fr: 'Si tout le monde arrive à l’heure, nous partirons à huit heures.', en: 'If everyone arrives on time, we will leave at eight.', warn: 'Trois fois la même paire' },
    { from: 'narrator', fr: 'Trois conditions, trois résultats, et pas un seul futur derrière si.', en: 'Three conditions, three results, and not one future after si.' },
  ],
  closing: { fr: 'Le présent devant, le futur derrière : voilà la paire de tous les jours.', en: 'Present in front, future behind: the everyday pair.' },
  audio: REC('rec-b1-10-tableau-relu'),
  say: REFRAME,
  terms: ['reel', 'paire'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'La paire réelle, en quatre cartes',
  frSub: 'Si + présent, puis futur',
  hint: 'Quatre cartes. Regarde bien où se trouve le r du futur.',
  audio: REC('rec-b1-10-paire-reelle'),
  say: REFRAME,
  terms: ['reel', 'paire'],
  cards: [
    {
      head: 'La condition', label: 'le présent',
      fr: 'Si tu réserves aujourd’hui...',
      sub: '[see tü ray-ZEHRV oh-zhoor-DWEE]',
      body: "La chose est possible : la réservation est encore ouverte. Après si, un simple présent. EN: the condition is possible, so si takes a plain present.",
    },
    {
      head: 'Le résultat', label: 'le futur',
      fr: '...tu paieras moins cher.',
      sub: '[tü peh-RA mwehⁿ SHEHR]',
      body: `Le futur vit ici et nulle part ailleurs. « ${B107_REFRAME} » EN: ${B107_REFRAME_EN}`,
    },
    {
      head: 'Le radical est déjà payé', label: Cap(FUTUR_REG_REF),
      fr: 'paier- · attendr- · partir-',
      sub: '[peh-YEHR] · [a-TAHⁿDR] · [par-TEER]',
      body: `« ${B105_REFRAME} » Tu ne rachètes rien : le futur de cette leçon est celui que tu construis déjà. EN: ${B105_REFRAME_EN}`,
    },
    {
      head: 'Devant une voyelle', label: "l'élision",
      fr: 'si il > s’il · si elle reste si elle',
      sub: '[seel] · [see EL]',
      body: "Si perd son i devant il et ils, jamais devant elle ni devant on. EN: si elides before il and ils only.",
    },
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte la paire réelle',
  frSub: 'Trois groupes, trois gâchettes',
  groups: [
    grp('Au travail', [
      it(E(1218), 'la salle est peut-être prise'),
      it(E(1220), 'le remplaçant n’est pas encore trouvé'),
      it(E(1222), 'la réponse peut arriver ou non'),
      it(E(1225), 'le badge, tu peux l’oublier demain'),
    ], chk('Dans ces quatre phrases, combien de verbes portent un r de futur ?',
      ['un seul, dans le résultat', 'deux, un de chaque côté'], 0,
      'La moitié si reste au présent, toujours. EN: the si half stays in the present.')),
    grp('À la maison', [
      it(E(1224), 'les enfants peuvent tenir, ou pas'),
      it(E(1223), 'le magasin ferme parfois à midi'),
      it('fr.b1.maison.074', 'le loyer peut encore monter'),
      it('fr.b1.cuisine.093', 'les invités sont souvent en avance'),
    ], chk('« Si le loyer augmente encore, nous devrons déménager. » Le déménagement est-il décidé ?',
      ['oui, c’est prévu', 'non, il dépend du loyer', 'on ne peut pas savoir'], 1,
      'Le futur du résultat est suspendu à la condition. EN: the result hangs on the condition.')),
    ctl('Le test', 'Tu hésites sur le verbe qui suit si. Que fais-tu ?',
      ['tu écris le même temps que dans le résultat', 'tu enlèves le futur et tu gardes le présent'], 1,
      'Derrière si, aucune forme en r. EN: no r-form behind si.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reel', 'regle'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  title: 'Cinq promesses conditionnelles',
  frSub: 'Toutes la même paire',
  examples: [
    ex(E(1215), 'un prix : la réduction dépend de la date'),
    ex(E(1219), 'la même idée, adressée à vous'),
    ex(E(1216), 'un retard : le résultat est une attente'),
    ex(E(1221), 'une personne : elle finit, ou elle ne finit pas'),
    ex('fr.b1.dictee.035', 'une administration : le certificat suit la réussite'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reel'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Où entends-tu le futur',
  frSub: 'Huit phrases, une seule paire',
  lines: [
    ln(E(1215)), ln(E(1216)), ln(E(1219)), ln(E(1221)),
    ln(E(1223)), ln(E(1228)), ln(E(1229)), ln(E(1225)),
  ],
  questions: [
    { q: 'Première phrase : le futur est dans quelle moitié ?', opts: ['la première', 'la seconde'], correct: 1, why: '« tu paieras » arrive après la virgule. EN: the future comes after the comma.' },
    { q: 'Deuxième phrase : quel temps entends-tu juste après si ?', opts: ['le présent', 'le futur', 'le conditionnel'], correct: 0, why: '« si le train est en retard » : un présent tout simple. EN: a plain present.' },
    { q: 'Sixième phrase : que devient si devant il ?', opts: ['il reste si', 's’il, avec une apostrophe'], correct: 1, why: 'Si perd son i devant il. EN: si drops its i before il.' },
    { q: 'Septième phrase : combien de personnes viendront ?', opts: ['une', 'deux'], correct: 1, why: '« nous viendrons tous les deux » : deux, s’il y a de la place. EN: both of them.' },
    { q: 'Huitième phrase : qui doit passer à l’accueil ?', opts: ['celui qui oublie son badge', 'tout le monde'], correct: 0, why: 'Le résultat ne tombe que si la condition tombe. EN: only if the condition happens.' },
  ],
  audio: REC('rec-b1-10-reelle-ecoute'),
  say: REFRAME,
  terms: ['reel'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de paire réelle',
  errors: [
    {
      wrong: 'Si tu réserveras aujourd’hui, tu paieras moins cher.',
      right: 'Si tu réserves aujourd’hui, tu paieras moins cher.',
      why: "Normal : les deux moitiés parlent de demain, alors le futur semble dû des deux côtés. Le français n'en met qu'un. EN: both halves are about tomorrow; French still writes only one future.",
    },
    {
      wrong: 'Si le train est en retard, nous attendons à la gare.',
      right: 'Si le train est en retard, nous attendrons à la gare.',
      why: "Correct ailleurs : « nous attendons » dirait une habitude. Ici le train n'est pas encore parti, donc le résultat est à venir. EN: right elsewhere, wrong for a result still ahead.",
    },
    {
      wrong: 'Si il fait beau, nous mangerons dehors.',
      right: 'S’il fait beau, nous mangerons dehors.',
      why: "Normal : si elle et si on gardent leur i, alors si il semble possible. Devant il et ils seulement, le i tombe. EN: si elides before il and ils only.",
    },
    {
      wrong: 'Si vous payez avant vendredi, vous avez une réduction demain.',
      right: 'Si vous payez avant vendredi, vous aurez une réduction demain.',
      why: "Le présent existe bien dans le résultat, mais pour ce qui est déjà vrai. Avec demain, il faut le futur. EN: a present result is for what is already true.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reel', 'regle'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La moitié si', 'Quel temps prend la condition réelle ?',
    ['le futur', 'le présent', 'le conditionnel'], 1,
    'Le présent, toujours, même quand la phrase entière parle de demain. EN: the present, even for a sentence about tomorrow.'),
  ctl('La moitié résultat', 'Et le résultat ?',
    ['le futur', 'le présent'], 0,
    'C’est lui qui porte la forme en r. EN: that is where the r-form lives.'),
  ctl('L’élision', 'Devant quels mots si perd-il son i ?',
    ['devant elle et on', 'devant il et ils', 'devant tous les pronoms'], 1,
    'S’il, s’ils. Si elle, si on, si elles restent entiers. EN: only before il and ils.'),
], ['reel', 'paire']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La paire réelle',
    opener: {
      line: "Ce qui peut vraiment arriver demain se dit au présent derrière si : ici tu montes la paire de tous les jours. EN: What can really happen tomorrow is said in the present after si: here you build the everyday pair.",
      imageRef: 'lessons/si-clauses/act02.jpg',
    },
    sections: [],
    milestone: "Tu construis une condition réelle avec son futur, sans jamais mettre de futur après si. EN: You build a real condition with its future, and never put a future after si.",
    estScreens: 34, restPoints: ['a2-construire'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_CONSTRUIRE, A2_EXEMPLES, A2_ECOUTE, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — JAMAIS -RAI, JAMAIS -RAIS
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courriel corrigé',
  frSub: 'Six si, aucun futur derrière',
  text: "Léa a écrit au gymnase municipal. Mme Roussel a relu le message avant l'envoi, un stylo rouge à la main.\n\nLe premier jet disait : « Si nous aurons assez de participants, nous louerons deux cars. » Mme Roussel a barré « aurons » et écrit « avons » au-dessus.\n\n« Regarde les autres, a-t-elle dit. Tu les as toutes écrites correctement. »\n\nC'était vrai. Plus bas, Léa avait écrit : « Si le dossier est complet, la mairie répondra en dix jours. » Puis : « Si nous partons tôt, nous éviterons les bouchons. » Et encore : « Si je gagne ce contrat, je recruterai quelqu'un », dans un autre courriel qu'elle avait gardé comme modèle.\n\n« Une seule phrase sur six, a dit Mme Roussel. Et toujours la première. Quand tu commences un message, ta main veut mettre le futur partout. »\n\nLéa a relu le message en entier. Aucune autre forme en r derrière un si. Elle a envoyé.",
  glossary: [
    { word: 'le premier jet', en: 'the first draft', note: 'La première version, avant toute correction.' },
    { word: 'barré', en: 'crossed out', note: 'Rayé d’un trait, pour dire que le mot ne va pas.' },
    { word: 'les bouchons', en: 'the traffic jams', note: 'Les files de voitures arrêtées sur la route.' },
    { word: 'au-dessus', en: 'above it', note: 'Dans l’espace entre deux lignes.' },
  ],
  questions: [
    { q: 'Quelle était la seule faute du message ?', a: "« Si nous aurons assez de participants ». Un futur juste derrière si." },
    { q: 'Par quoi Mme Roussel l’a-t-elle remplacé ?', a: "Par « avons » : le présent. La moitié si ne porte jamais le futur." },
    { q: 'Où étaient les futurs corrects du message ?', a: "Dans les moitiés résultat : répondra, éviterons, recruterai, louerons." },
    { q: 'Pourquoi la faute est-elle toujours dans la première phrase ?', a: "Parce qu’au début d’un message on pense à demain, et la main met le futur partout." },
  ],
  audio: REC('rec-b1-10-courriel-corrige'),
  say: REFRAME,
  terms: ['regle', 'reel'],
};

const A3_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'La seule règle sans exception',
  frSub: 'Ni -rai, ni -rais',
  hint: 'Quatre cartes. Celle du milieu est la plus chère à oublier.',
  audio: REC('rec-b1-10-regle-dure'),
  say: REFRAME,
  terms: ['regle'],
  cards: [
    {
      head: 'Ce qui est interdit', label: 'derrière si',
      fr: 'si je serai · si je serais',
      sub: '[see zhuh suh-REH] · [see zhuh suh-REH]',
      body: "Aucune des deux ne s'écrit quand si pose une condition. Ni le futur, ni le conditionnel. EN: neither form is written where si sets a condition.",
    },
    {
      head: 'La ligne que tu connais déjà', label: Cap(FUTUR_USE_REF),
      fr: 'quand j’aurai les clés, si j’ai les clés',
      sub: '[kahⁿ zhoh-REH lay KLAY] · [see zhay lay KLAY]',
      body: `« ${B107_REFRAME} » Cette leçon reprend cette ligne et lui ajoute tout le reste. EN: ${B107_REFRAME_EN}`,
    },
    {
      head: 'Où vont les formes en r', label: 'le résultat',
      fr: 'Si le bus ne passe pas, je marcherai.',
      sub: '[see luh büss nuh pass PA | zhuh mar-shuh-REH]',
      body: "Le r a le droit d'exister une seule fois par phrase, et c'est dans la moitié résultat. EN: the r-form belongs to the result half, once.",
    },
    {
      head: 'Une seule exception, plus tard', label: 'acte 8',
      fr: 'Je me demande si le car sera complet.',
      sub: '[zhuh muh duh-MAHⁿD | see luh kar suh-ra kohⁿ-PLEH]',
      body: "Ici si ne pose pas de condition : il rapporte une question. La règle dure ne le concerne pas. EN: this si reports a question, so the hard rule does not apply.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trouve le r et vérifie sa place',
  frSub: 'Deux groupes, une gâchette chacun',
  groups: [
    grp('Le r est bien placé', [
      it(E(1230), 'viens au présent, irons au futur'),
      it(E(1233), 'partons au présent, éviterons au futur'),
      it(E(1234), 'gagne au présent, recruterai au futur'),
      it(E(1235), 'est au présent, répondra au futur'),
    ], chk('Dans ces quatre phrases, le r du futur apparaît combien de fois ?',
      ['deux fois par phrase', 'une fois par phrase'], 1,
      'Un seul r, et toujours du même côté. EN: one r, always on the same side.')),
    grp('Le conditionnel suit la même règle', [
      it(E(1237), 'étais au passé de forme, demanderais au conditionnel'),
      it(E(1238), 'avions, puis inviterions'),
      it('fr.b1.sports-et-loisirs.088', 'était, puis progresserait'),
      it(E(1241), 'passait, puis marcherais'),
    ], chk('Derrière si, vois-tu un seul -rais ?',
      ['oui, dans la première', 'non, aucun'], 1,
      'Ni futur ni conditionnel : la règle est la même pour les deux. EN: the rule covers both r-forms.')),
    ctl('Le test de relecture', 'Tu relis ton message. Que cherches-tu exactement ?',
      ['les virgules', 'un r juste derrière un si', 'les majuscules'], 1,
      'Un r derrière si est toujours une faute quand si pose une condition. EN: an r right behind si is the error.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regle', 'paire'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Le futur qui déborde',
  frSub: 'Six phrases, une seule faute possible',
  rule: {
    title: 'Le r ne traverse jamais le si',
    body: "En anglais, les deux moitiés peuvent porter will. En français, la moitié si le refuse. Si ta main écrit un r juste après si, efface-le et garde le présent. EN: English allows will on both sides; French refuses it after si.",
  },
  cards: [
    { promptLabel: 'si + futur', promptSound: 'Si tu viendras demain, nous irons au marché ensemble.', fr: 'Si tu viens demain, nous irons au marché ensemble.', ipa: '/si ty vjɛ̃ də.mɛ̃ nu.zi.ʁɔ̃ o maʁ.ʃe ɑ̃.sɑ̃bl/', tip: 'Demain est déjà dans la phrase : le présent suffit. EN: demain already dates it.' },
    { promptLabel: 'si + futur', promptSound: 'Si nous partirons tôt, nous éviterons les bouchons.', fr: 'Si nous partons tôt, nous éviterons les bouchons.', ipa: '/si nu paʁ.tɔ̃ to nu.ze.vi.tə.ʁɔ̃ le bu.ʃɔ̃/', tip: 'Un seul r par phrase, et il est déjà pris. EN: one r per sentence, already used.' },
    { promptLabel: 'si + conditionnel', promptSound: 'Si nous aurions plus de place, nous inviterions tout le monde.', fr: 'Si nous avions plus de place, nous inviterions tout le monde.', ipa: '/si nu.za.vjɔ̃ ply də plas nu.zɛ̃.vi.tə.ʁi.jɔ̃ tu lə mɔ̃d/', tip: 'La faute la plus célèbre du français. EN: the most famous error in the language.' },
    { promptLabel: 'si + conditionnel', promptSound: 'Si je serais à ta place, je demanderais un délai.', fr: 'Si j’étais à ta place, je demanderais un délai.', ipa: '/si ʒe.tɛ a ta plas ʒə də.mɑ̃.də.ʁɛ œ̃ de.lɛ/', tip: 'Après si, être devient étais, jamais serais. EN: être gives étais after si.' },
    { promptLabel: 'si + futur', promptSound: 'Si le dossier sera complet, la mairie répondra en dix jours.', fr: 'Si le dossier est complet, la mairie répondra en dix jours.', ipa: '/si lə do.sje ɛ kɔ̃.plɛ la mɛ.ʁi ʁe.pɔ̃.dʁa ɑ̃ di ʒuʁ/', tip: 'Le dossier, on le regarde aujourd’hui. EN: the file is looked at today.' },
    { promptLabel: 'si + futur', promptSound: 'Si vous accepterez notre offre, nous signerons cette semaine.', fr: 'Si vous acceptez notre offre, nous signerons cette semaine.', ipa: '/si vu.zak.sɛp.te nɔ.tʁɔfʁ nu si.ɲə.ʁɔ̃ sɛt sə.mɛn/', tip: 'Accepter se fait maintenant, signer se fera après. EN: accepting is now, signing comes after.' },
  ],
  drill: [
    { promptSay: 'Si tu ... demain, nous irons au marché ensemble.', opts: ['viendras', 'viens'], correct: 1 },
    { promptSay: 'Si le bus ne ... pas, je marcherai jusqu’au centre.', opts: ['passe', 'passera'], correct: 0 },
    { promptSay: 'Si j’... à ta place, je demanderais un délai.', opts: ['serais', 'étais'], correct: 1 },
    { promptSay: 'Si nous ... plus de place, nous inviterions tout le monde.', opts: ['aurions', 'avions'], correct: 1 },
    { promptSay: 'Si elle ... se libérer, elle passera nous voir.', opts: ['peut', 'pourra'], correct: 0 },
    { promptSay: 'Si vous ... notre offre, nous signerons cette semaine.', opts: ['accepterez', 'acceptez'], correct: 1 },
    { promptSay: 'Si tu me ... avant midi, je m’organiserai autrement.', opts: ['préviendras', 'préviens'], correct: 1 },
    { promptSay: 'Si je ... ce contrat, je recruterai quelqu’un.', opts: ['gagne', 'gagnerai'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le r ne traverse jamais le si' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la main écrit toute seule' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-10-piege-futur'),
  say: REFRAME,
  terms: ['regle'],
};

const A3_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a3-focus',
  layer: 'core',
  sheetId: 'sheet-jamais',
  title: 'Ce qu’il faut retenir avant d’écrire',
  frSub: 'Quatre lignes, une seule règle',
  points: [
    "Derrière un si de condition, aucune forme en -rai et aucune en -rais. EN: no -rai and no -rais behind a si that sets a condition.",
    "Le futur et le conditionnel vivent dans la moitié résultat, une fois chacun. EN: the future and the conditional live in the result half.",
    "Après si, être donne est ou était, jamais sera ni serait. EN: after si, être gives est or était.",
    "Le si qui rapporte une question, lui, accepte le futur : acte 8. EN: the si that reports a question does allow a future.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regle', 'question'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Le r, une seule fois par phrase',
  itemIds: dicteeFor(3),
  audio: AUDIO,
  say: REFRAME,
  terms: ['regle'],
};

const A3_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a3-flash',
  layer: 'core',
  title: 'Huit débuts de phrase',
  frSub: 'Toujours au présent',
  cards: [
    { front: 'if you come', back: 'si tu viens', say: 'Si tu viens demain, nous irons au marché ensemble.' },
    { front: 'if I win', back: 'si je gagne', say: 'Si je gagne ce contrat, je recruterai quelqu’un.' },
    { front: 'if we leave', back: 'si nous partons', say: 'Si nous partons tôt, nous éviterons les bouchons.' },
    { front: 'if she can', back: 'si elle peut', say: 'Si elle peut se libérer, elle passera nous voir.' },
    { front: 'if you accept', back: 'si vous acceptez', say: 'Si vous acceptez notre offre, nous signerons cette semaine.' },
    { front: 'if it rains', back: 's’il pleut', say: 'S’il pleut trop fort, le spectacle sera annulé.' },
    { front: 'if I were you', back: 'si j’étais toi', say: 'Si j’étais toi, je lirais le contrat deux fois.' },
    { front: 'if we had', back: 'si nous avions', say: 'Si nous avions plus de place, nous inviterions tout le monde.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regle'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La règle', 'Que peut-on écrire juste derrière un si de condition ?',
    ['un futur', 'un présent ou un imparfait', 'un conditionnel'], 1,
    'Les deux temps sans r. EN: the two tenses with no r.'),
  ctl('Être', 'Après si, être donne quoi ?',
    ['sera ou serait', 'est ou était'], 1,
    'Sera et serait vivent de l’autre côté. EN: sera and serait live on the other side.'),
  ctl('L’exception', 'Existe-t-il un si qui accepte le futur ?',
    ['non, jamais', 'oui, celui qui rapporte une question', 'oui, tous'], 1,
    '« Je me demande si le car sera complet » : ce si ne conditionne rien. EN: that si conditions nothing.'),
], ['regle', 'question']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Jamais -rai, jamais -rais',
    opener: {
      line: "Ta main veut mettre le futur des deux côtés : ici tu apprends le seul endroit où il n’a pas le droit d’aller. EN: Your hand wants a future on both sides: here you learn the one place it may not go.",
      imageRef: 'lessons/si-clauses/act03.jpg',
    },
    sections: [],
    milestone: "Tu relis un message et tu repères tout seul un r posé derrière un si. EN: You can reread a message and spot an r-form sitting behind a si.",
    estScreens: 40, restPoints: ['a3-construire', 'a3-focus'],
  },
  sections: [A3_LECTURE, A3_REGLE, A3_CONSTRUIRE, A3_PIEGE, A3_FOCUS, A3_DICTEE, A3_FLASH, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — TROIS SUITES POUR UNE SEULE CONDITION
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Trois réponses à la même question',
  frSub: 'Si tu as faim',
  setting: 'Ousmane arrive au refuge après quatre heures de marche. Léa est déjà dans la cuisine.',
  bubbles: [
    { from: 'user', fr: 'J’ai faim.', en: 'I am hungry.' },
    { from: 'coach', fr: 'Si tu as faim, il y a du pain dans la cuisine.', en: 'If you are hungry, there is bread in the kitchen.', warn: 'Le résultat est déjà vrai : présent' },
    { from: 'user', fr: 'Je ne le trouve pas.', en: 'I cannot find it.' },
    { from: 'coach', fr: 'Si tu as faim, prends du pain dans la cuisine.', en: 'If you are hungry, take some bread from the kitchen.', warn: 'Le résultat est une instruction : impératif' },
    { from: 'user', fr: 'Je préfère attendre le repas.', en: 'I would rather wait for the meal.' },
    { from: 'coach', fr: 'Si tu as faim, je te préparerai quelque chose.', en: 'If you are hungry, I will make you something.', warn: 'Le résultat viendra plus tard : futur' },
    { from: 'narrator', fr: 'Une seule condition, trois réponses, trois temps différents derrière la virgule.', en: 'One condition, three answers, three different tenses after the comma.' },
  ],
  closing: { fr: 'La moitié si ne bouge pas. C’est la moitié résultat qui choisit son temps.', en: 'The si half never moves. The result half picks its tense.' },
  audio: REC('rec-b1-10-refuge'),
  say: REFRAME,
  terms: ['suite', 'reel'],
};

const A4_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a4-table',
  layer: 'core',
  sheetId: 'sheet-suites',
  title: 'Six résultats, trois temps',
  frSub: 'Touche une ligne',
  cols: ['Résultat', 'Temps', 'Ce qu’il dit'],
  rows: [
    {
      cells: ['nous devrons attendre', 'futur', 'ça arrivera après'],
      say: 'Si le serveur oublie notre commande, nous devrons attendre encore.',
      detail: { title: 'Le futur', body: 'Le résultat n’a pas encore eu lieu et dépend de la condition. C’est la suite la plus courante. EN: the result has not happened yet and hangs on the condition.', say: 'Si les invités arrivent tôt, nous devrons cuisiner plus vite.' },
    },
    {
      cells: ['il y a du pain', 'présent', 'c’est déjà vrai'],
      say: 'Si tu as faim, il y a du pain dans la cuisine.',
      detail: { title: 'Le présent qui informe', body: 'Le pain est déjà là. La condition ne le fabrique pas : elle dit seulement quand l’information sert. EN: the bread is already there; the condition says when the fact is useful.', say: 'Si la réception est fermée, le code est sur la porte.' },
    },
    {
      cells: ['le thé devient amer', 'présent', 'c’est toujours vrai'],
      say: 'Si on chauffe trop l’eau, le thé devient amer.',
      detail: { title: 'Le présent de vérité', body: 'Chaque fois que la condition arrive, le résultat arrive aussi. Ni promesse ni projet : une loi. EN: every time the condition happens, so does the result.', say: 'Si tu appuies deux fois, la machine s’arrête.' },
    },
    {
      cells: ['prends du pain', 'impératif', 'fais-le'],
      say: 'Si tu as faim, prends du pain dans la cuisine.',
      detail: { title: 'L’impératif', body: 'Le résultat est une instruction donnée à quelqu’un. C’est la forme des consignes et des modes d’emploi. EN: the result is an instruction, as in a set of directions.', say: 'Si le voyant rouge s’allume, appelle le technicien.' },
    },
    {
      cells: ['revenez me voir', 'impératif', 'la consigne'],
      say: 'Si ça ne passe pas, revenez me voir.',
      detail: { title: 'Vous aussi', body: 'L’impératif de vous sert au travail, chez le médecin et dans les notices. La paire ne change pas. EN: the vous imperative works the same way.', say: 'Si vous avez un doute, demandez confirmation par courriel.' },
    },
    {
      cells: ['je te préparerai', 'futur', 'je m’en charge'],
      say: 'Si tu as faim, je te préparerai quelque chose.',
      detail: { title: 'La promesse', body: 'Tu prends l’action sur toi. Le futur dit que c’est toi qui feras, et pas l’autre. EN: the future says that you are the one who will act.', say: 'Si le train a du retard, je vous préviendrai tout de suite.' },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite', 'reel'],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trie les trois suites',
  frSub: 'Même condition, trois familles',
  groups: [
    grp('Le résultat viendra', [
      it(E(1250), 'je le ferai pour toi'),
      it(E(1255), 'je te préviendrai'),
      it(E(1260), 'nous te rembourserons'),
      it(E(1220), 'je prendrai ma journée'),
    ], chk('Ces résultats ont-ils déjà eu lieu ?',
      ['non, ils attendent la condition', 'oui, tous'], 0,
      'Le futur suspend le résultat à la condition. EN: the future hangs the result on the condition.')),
    grp('Le résultat est déjà là', [
      it(E(1246), 'le pain est dans la cuisine depuis ce matin'),
      it(E(1247), 'le code est écrit sur la porte'),
      it(E(1256), 'la garantie existe déjà'),
      it('fr.b1.hebergement.005', 'le numéro est affiché'),
    ], chk('Que fait la condition, ici ?',
      ['elle fabrique le résultat', 'elle dit quand l’information sert'], 1,
      'Le pain n’apparaît pas parce que tu as faim. EN: the bread does not appear because you are hungry.')),
    grp('Fais-le', [
      it(E(1248), 'à toi de te servir'),
      it(E(1249), 'une consigne de sécurité'),
      it(E(1254), 'une demande adressée à vous'),
      it('fr.a2.symptomes.217', 'la consigne du médecin'),
    ], chk('Quel temps prend la moitié si dans ces trois familles ?',
      ['il change à chaque fois', 'toujours le présent', 'le futur'], 1,
      'Trois résultats, une seule condition, un seul temps devant. EN: three results, one tense in front.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Le même train, trois messages',
  frSub: 'Ce que change le temps du résultat',
  examples: [
    ex(E(1254), 'une instruction : à toi de me prévenir'),
    ex(E(1255), 'une promesse : c’est moi qui préviens'),
    ex(E(1256), 'une information : la garantie existe déjà'),
    ex(E(1252), 'une vérité générale : toujours, pour tout le monde'),
    ex(E(1258), 'une possibilité offerte, valable aujourd’hui'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite'],
};

const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Choisis la suite que la situation demande',
  frSub: 'Quatre pages, quatre décisions',
  groups: [
    ctl('Une notice de machine', 'Tu écris un mode d’emploi. Quelle suite après « Si le voyant rouge s’allume » ?',
      ['un futur', 'un impératif', 'un conditionnel'], 1,
      'Une notice donne des ordres, pas des prévisions. EN: a manual gives instructions, not forecasts.'),
    ctl('Une réponse à un client', 'Le colis peut ne pas arriver. Tu écris « Si le colis n’arrive pas lundi, nous... »',
      ['vous remboursons', 'vous rembourserons'], 1,
      'Le remboursement viendrait après, donc futur. EN: the refund would come afterwards.'),
    ctl('Une règle de cuisine', '« Si on chauffe trop l’eau, le thé... » Que mets-tu ?',
      ['deviendra amer', 'devient amer'], 1,
      'C’est vrai chaque fois : présent des deux côtés. EN: true every time, so present on both sides.'),
    ctl('Un panneau d’accueil', '« Si la réception est fermée, le code... » Que mets-tu ?',
      ['sera sur la porte', 'est sur la porte'], 1,
      'Le code est déjà écrit : le futur serait un mensonge. EN: the code is already there.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite', 'reel'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre suites mal choisies',
  errors: [
    {
      wrong: 'Si le voyant rouge s’allume, tu appelleras le technicien.',
      right: 'Si le voyant rouge s’allume, appelle le technicien.',
      why: "Normal : le futur français sert aussi d'ordre poli. Sur une notice, il éloigne l'action au lieu de la déclencher. EN: the future can order politely, but a manual needs the imperative.",
    },
    {
      wrong: 'Si tu as faim, il y aura du pain dans la cuisine.',
      right: 'Si tu as faim, il y a du pain dans la cuisine.',
      why: "Correct ailleurs : ce serait vrai si le pain arrivait plus tard. Ici il est déjà là. EN: right if the bread came later; it is already there.",
    },
    {
      wrong: 'Si on chauffe trop l’eau, le thé deviendra amer.',
      right: 'Si on chauffe trop l’eau, le thé devient amer.',
      why: "Le futur n'est pas faux, il est trop étroit : il parle d'une fois. La phrase veut dire toujours. EN: the future talks about one occasion; the sentence means every time.",
    },
    {
      wrong: 'Si vous avez un doute, vous demanderez confirmation par courriel.',
      right: 'Si vous avez un doute, demandez confirmation par courriel.',
      why: "Dans un courriel d'entreprise, ce futur sonne comme une obligation imposée. L'impératif est plus court et plus clair. EN: that future reads as an imposed obligation.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Les trois suites', 'Après si + présent, que peut porter le résultat ?',
    ['un futur seulement', 'un futur, un présent ou un impératif'], 1,
    'Trois suites, une seule condition. EN: three results, one condition.'),
  ctl('Le présent du résultat', 'Quand le résultat reste-t-il au présent ?',
    ['quand il est déjà vrai ou toujours vrai', 'quand la phrase est courte', 'jamais'], 0,
    'Le pain dans la cuisine, et le thé qui devient amer. EN: already true, or true every time.'),
  ctl('La moitié si', 'Est-ce que la moitié si change avec la suite choisie ?',
    ['oui', 'non, elle reste au présent'], 1,
    'Elle ne bouge jamais. EN: it never moves.'),
], ['suite', 'reel']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Trois suites',
    opener: {
      line: "Une seule condition peut donner trois réponses très différentes : ici tu choisis laquelle tu écris. EN: One condition can give three very different answers: here you choose which one you write.",
      imageRef: 'lessons/si-clauses/act04.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre un futur, un présent et un impératif selon ce que le résultat doit faire. EN: You choose between a future, a present and an imperative by what the result has to do.",
    estScreens: 34, restPoints: ['a4-construire'],
  },
  sections: [A4_HISTOIRE, A4_TABLE, A4_CONSTRUIRE, A4_EXEMPLES, A4_CHOISIR, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — L'ORDRE DES DEUX MOITIÉS ET LA VIRGULE
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Le message trop long',
  frSub: 'La même phrase, retournée',
  setting: 'Léa écrit aux familles. Ousmane relit par-dessus son épaule.',
  bubbles: [
    { from: 'user', fr: 'Si la météo le permet, nous partirons samedi.', en: 'If the weather allows, we will leave on Saturday.' },
    { from: 'coach', fr: 'Mets le samedi en avant. Les parents cherchent la date.', en: 'Put the Saturday first. The parents are looking for the date.' },
    { from: 'user', fr: 'Nous partirons samedi si la météo le permet.', en: 'We will leave on Saturday if the weather allows.', warn: 'Même sens, autre ordre' },
    { from: 'coach', fr: 'Et la virgule disparaît. Elle ne sert que devant le résultat.', en: 'And the comma goes. It only works in front of the result.' },
    { from: 'user', fr: 'Donc l’ordre ne change rien au sens.', en: 'So the order does not change the meaning.' },
    { from: 'coach', fr: 'Rien du tout. Il change ce que ton lecteur voit en premier.', en: 'Nothing at all. It changes what your reader sees first.' },
    { from: 'narrator', fr: 'Léa garde la deuxième version. La date est le premier mot utile.', en: 'Léa keeps the second version. The date is the first useful word.' },
  ],
  closing: { fr: 'Une paire reste une paire, dans les deux sens.', en: 'A pair stays a pair, either way round.' },
  audio: REC('rec-b1-10-retourne'),
  say: REFRAME,
  terms: ['virgule', 'paire'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Les deux ordres, carte par carte',
  frSub: 'Et la virgule qui suit',
  hint: 'Quatre cartes. Regarde seulement la ponctuation.',
  audio: REC('rec-b1-10-ordre'),
  say: REFRAME,
  terms: ['virgule'],
  cards: [
    {
      head: 'Si devant', label: 'avec virgule',
      fr: 'Si la météo le permet, nous partirons samedi.',
      sub: '[see la may-tay-oh luh pehr-MEH | noo par-tee-ROHⁿ sam-DEE]',
      body: 'La condition ouvre la phrase, alors une virgule marque la fin de la première moitié. EN: the condition opens, so a comma closes it.',
    },
    {
      head: 'Si derrière', label: 'sans virgule',
      fr: 'Nous partirons samedi si la météo le permet.',
      sub: '[noo par-tee-ROHⁿ sam-DEE | see la may-tay-oh luh pehr-MEH]',
      body: 'Le résultat ouvre la phrase, et si s’accroche derrière sans ponctuation. EN: the result opens and si hooks on with no punctuation.',
    },
    {
      head: 'Le sens ne bouge pas', label: 'les deux',
      fr: 'Appelle-moi si tu as un problème.',
      sub: '[a-pel MWA | see tü a uhⁿ pro-BLEM]',
      body: 'Les deux versions disent exactement la même chose. Seul l’ordre des informations change. EN: both versions say exactly the same thing.',
    },
    {
      head: 'La paire ne bouge pas non plus', label: "l'irréel aussi",
      fr: 'Je viendrais avec toi si j’avais un jour de congé.',
      sub: '[zhuh vyehⁿ-DREH a-vek TWA | see zha-veh uhⁿ zhoor duh kohⁿ-ZHAY]',
      body: 'Imparfait derrière si, conditionnel dans l’autre moitié, même quand si arrive en second. EN: the pair holds even when si comes second.',
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Retourne la phrase, garde la paire',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Le résultat en premier', [
      it(E(1261), 'la date avant la condition'),
      it(E(1263), 'l’ordre avant la condition'),
      it(E(1270), 'le message avant la condition'),
      it('fr.a1.corps.216', 'le conseil avant la condition'),
    ], chk('Combien de virgules dans ces quatre phrases ?',
      ['une par phrase', 'aucune'], 1,
      'Quand si arrive en second, rien ne le sépare du résultat. EN: nothing separates them in that order.')),
    grp('Si en premier', [
      it(E(1262), 'la condition ouvre'),
      it(E(1264), 'la condition ouvre aussi'),
      it(E(1269), 'la pluie ouvre la phrase'),
      it(E(1266), 'le congé ouvre la phrase'),
    ], chk('Que marque la virgule, exactement ?',
      ['une pause pour respirer', 'la fin de la moitié si', 'le début du sujet'], 1,
      'Elle ferme la condition et ouvre le résultat. EN: it closes the condition and opens the result.')),
    ctl('Le test', 'Tu hésites sur la virgule. Que regardes-tu ?',
      ['la longueur de la phrase', 'lequel des deux morceaux commence'], 1,
      'Si devant, virgule. Si derrière, rien. EN: si in front, comma; si behind, nothing.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['virgule', 'paire'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quelle moitié arrive en premier',
  frSub: 'Huit phrases, deux ordres',
  lines: [
    ln(E(1261)), ln(E(1264)), ln(E(1268)), ln(E(1271)),
    ln(E(1273)), ln(E(1262)), ln(E(1274)), ln(E(1272)),
  ],
  questions: [
    { q: 'Première phrase : par quoi commence-t-elle ?', opts: ['par la condition', 'par le résultat'], correct: 1, why: '« Nous partirons samedi » arrive avant le si. EN: the result comes first.' },
    { q: 'Deuxième phrase : y a-t-il une virgule à l’écrit ?', opts: ['oui', 'non'], correct: 0, why: 'Si ouvre la phrase, donc une virgule ferme sa moitié. EN: si opens, so a comma closes it.' },
    { q: 'Quatrième phrase : quelle paire entends-tu ?', opts: ['la réelle', 'l’irréelle'], correct: 1, why: '« étaient » puis « resterions » : imparfait et conditionnel. EN: imparfait and conditional.' },
    { q: 'Cinquième phrase : le rendez-vous est-il fixé ?', opts: ['oui, sans condition', 'il dépend de ce que tu préfères'], correct: 1, why: 'Le si arrive en second, mais il conditionne quand même. EN: si still conditions, even in second place.' },
    { q: 'Huitième phrase : elle a déjà ce poste ?', opts: ['oui', 'non, le salaire ne va pas'], correct: 1, why: 'L’imparfait après si dit que ce n’est pas le cas. EN: the imparfait says it is not the case.' },
  ],
  audio: REC('rec-b1-10-ordre-ecoute'),
  say: REFRAME,
  terms: ['virgule', 'irreel'],
};

const A5_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a5-focus',
  layer: 'core',
  sheetId: 'sheet-suites',
  title: 'L’ordre, en quatre lignes',
  frSub: 'À relire avant d’écrire',
  points: [
    'Les deux moitiés se mettent dans les deux sens, sans changer de sens. EN: either half may come first, with no change of meaning.',
    'Si devant : une virgule ferme la moitié si. EN: si in front takes a comma after it.',
    'Si derrière : aucune ponctuation entre les deux. EN: si behind takes no punctuation at all.',
    'La paire de temps, elle, ne change jamais avec l’ordre. EN: the pair of tenses never changes with the order.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['virgule', 'paire'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre phrases mal montées',
  errors: [
    {
      wrong: 'Nous partirons samedi, si la météo le permet et si le car est réservé.',
      right: 'Nous partirons samedi si la météo le permet et si le car est réservé.',
      why: "Normal : la phrase est longue, alors la main cherche une pause. Quand si arrive en second, la virgule ne s'écrit pas. EN: length invites a comma; the order refuses one.",
    },
    {
      wrong: 'Si tu as un problème appelle-moi.',
      right: 'Si tu as un problème, appelle-moi.',
      why: "Correct à l'oral, où la pause s'entend. À l'écrit, la virgule est ce qui montre où finit la condition. EN: the pause is audible; in writing the comma is what shows it.",
    },
    {
      wrong: 'Je viendrais avec toi si j’aurais un jour de congé.',
      right: 'Je viendrais avec toi si j’avais un jour de congé.',
      why: "La faute voyage avec l'ordre : mise en second, la moitié si ressemble à une suite normale et attire le conditionnel. EN: in second place the si half looks like ordinary continuation.",
    },
    {
      wrong: 'Si la météo le permet nous partirons, samedi.',
      right: 'Si la météo le permet, nous partirons samedi.',
      why: "La virgule a glissé : elle appartient à la frontière entre les deux moitiés, pas au milieu du résultat. EN: the comma belongs to the border between the halves.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['virgule'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('L’ordre', 'Les deux moitiés peuvent-elles changer de place ?',
    ['oui, toujours', 'non, jamais', 'seulement à l’oral'], 0,
    'Les deux ordres existent en français écrit comme parlé. EN: both orders exist in writing and in speech.'),
  ctl('La virgule', 'Quand écris-tu une virgule ?',
    ['quand si arrive en second', 'quand la phrase est longue', 'quand si ouvre la phrase'], 2,
    'Elle ferme la moitié si, et seulement celle-là. EN: it closes the si half, and only that.'),
  ctl('La paire', 'L’ordre change-t-il les temps ?',
    ['oui', 'non'], 1,
    'Imparfait et conditionnel restent appariés dans les deux sens. EN: the pair holds either way.'),
], ['virgule', 'paire']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'L’ordre et la virgule',
    opener: {
      line: "Tu peux commencer par la condition ou par le résultat : ici tu apprends ce que la virgule fait dans chaque cas. EN: You can start with the condition or the result: here you learn what the comma does in each case.",
      imageRef: 'lessons/si-clauses/act05.jpg',
    },
    sections: [],
    milestone: "Tu écris une phrase avec si dans les deux ordres, avec la bonne ponctuation. EN: You can write a si sentence in either order, with the right punctuation.",
    estScreens: 32, restPoints: ['a5-construire'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_CONSTRUIRE, A5_ECOUTE, A5_FOCUS, A5_ERREURS, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LA PAIRE IRRÉELLE : SI + IMPARFAIT, PUIS CONDITIONNEL
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Le minibus qui n’existe pas',
  frSub: 'Tout ce qui manque au club',
  setting: 'Après la réunion, Ousmane, Léa et Mme Roussel rangent les chaises.',
  bubbles: [
    { from: 'user', fr: 'Nous ne sommes que six. Le car coûte trop cher.', en: 'There are only six of us. The coach costs too much.' },
    { from: 'coach', fr: 'Si nous étions plus nombreux, nous louerions un minibus.', en: 'If there were more of us, we would hire a minibus.', warn: 'Nous ne sommes pas plus nombreux' },
    { from: 'user', fr: 'Et si quelqu’un savait conduire un minibus.', en: 'And if someone could drive a minibus.' },
    { from: 'coach', fr: 'Si je savais conduire, je vous emmènerais tous les trois.', en: 'If I could drive, I would take all three of you.', warn: 'Elle ne sait pas conduire' },
    { from: 'user', fr: 'Alors il reste le train.', en: 'So the train it is.' },
    { from: 'coach', fr: 'Si j’habitais plus près, je viendrais à pied.', en: 'If I lived closer, I would come on foot.', warn: 'Elle habite loin' },
    { from: 'narrator', fr: 'Trois phrases, trois choses qui ne sont pas vraies. Et derrière chaque si, un imparfait.', en: 'Three sentences, three things that are not true. And an imparfait behind every si.' },
  ],
  closing: { fr: 'L’imparfait après si ne parle pas du passé. Il ouvre un monde à côté du nôtre.', en: 'The imparfait after si is not about the past. It opens a world beside ours.' },
  audio: REC('rec-b1-10-minibus'),
  say: REFRAME,
  terms: ['irreel', 'paire'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'La paire irréelle, en quatre cartes',
  frSub: 'Si + imparfait, puis conditionnel',
  hint: 'Quatre cartes. Les deux morceaux sont déjà à toi.',
  audio: REC('rec-b1-10-paire-irreelle'),
  say: REFRAME,
  terms: ['irreel', 'paire'],
  cards: [
    {
      head: 'La condition', label: "l'imparfait",
      fr: 'Si j’habitais plus près...',
      sub: '[see zha-bee-teh plü PREH]',
      body: `Ce n'est pas le cas aujourd'hui. « ${B101_REFRAME} » EN: ${B101_REFRAME_EN}`,
    },
    {
      head: 'Le résultat', label: 'le conditionnel',
      fr: '...je viendrais à pied.',
      sub: '[zhuh vyehⁿ-DREH a PYAY]',
      body: `« ${B108_REFRAME} » Rien de neuf à acheter : la forme vient de ${COND_REF}. EN: ${B108_REFRAME_EN}`,
    },
    {
      head: 'Un imparfait qui n’est pas du passé', label: 'attention',
      fr: 'Si j’avais une voiture, je vous emmènerais tous.',
      sub: '[see zha-veh ün vwa-TÜR | zhuh voo-zahⁿ-men-REH TOOSS]',
      body: 'La voiture manque maintenant, pas autrefois. Après si, l’imparfait mesure la distance, pas le temps. EN: after si the imparfait measures distance, not time.',
    },
    {
      head: 'Le conseil déguisé', label: 'si j’étais toi',
      fr: 'Si j’étais toi, je lirais le contrat deux fois.',
      sub: '[see zhay-teh TWA | zhuh lee-REH luh kohⁿ-tra duh FWA]',
      body: 'Tu ne seras jamais l’autre personne, donc la paire irréelle est la seule possible. EN: you will never be the other person, so only the unreal pair fits.',
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte la paire irréelle',
  frSub: 'Trois groupes, trois gâchettes',
  groups: [
    grp('Ce qui manque', [
      it(E(1277), 'ils ne sont pas nombreux'),
      it(E(1282), 'elle ne sait pas conduire'),
      it(E(1278), 'tu ne parles pas espagnol'),
      it(E(1288), 'le chien est bien là'),
    ], chk('Que dit chacune de ces phrases sur aujourd’hui ?',
      ['que la condition est remplie', 'que la condition manque'], 1,
      'La paire irréelle annonce toujours un manque. EN: the unreal pair always announces something missing.')),
    grp('Ce qui changerait', [
      it('fr.b1.soins.004', 'le conseil par la place'),
      it('fr.b1.ecologie.005', 'un monde où l’on trie mieux'),
      it(E(1289), 'une ville plus abordable'),
      it(E(1284), 'un logement plus grand'),
    ], chk('Le résultat de ces phrases porte quelle forme ?',
      ['un futur', 'un conditionnel', 'un présent'], 1,
      'Imparfait devant, conditionnel derrière : la paire complète. EN: imparfait in front, conditional behind.')),
    ctl('La bascule', 'Tu passes de « Si tu viens » à « Si tu venais ». Que devient le résultat ?',
      ['il reste au futur', 'il passe au conditionnel'], 1,
      'Les deux moitiés bougent ensemble, toujours. EN: both halves move together.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['irreel', 'paire'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  title: 'Cinq mondes voisins',
  frSub: 'Aucun n’existe aujourd’hui',
  examples: [
    ex(E(1276), 'la distance : elle est réelle, et elle ne change pas'),
    ex(E(1280), 'le quartier : tu ne le connais pas'),
    ex(E(1287), 'l’entreprise : elle n’embauche pas'),
    ex('fr.b1.famille.066', 'les beaux-parents : ils ne viennent pas'),
    ex('fr.b1.metiers.051', 'l’expérience : elle manque, donc pas de candidature'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['irreel'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Réel ou pas réel',
  frSub: 'Huit phrases, deux paires mélangées',
  lines: [
    ln(E(1276)), ln(E(1230)), ln(E(1279)), ln(E(1232)),
    ln(E(1281)), ln(E(1290)), ln(E(1235)), ln(E(1291)),
  ],
  questions: [
    { q: 'Première phrase : la personne habite-t-elle près ?', opts: ['oui', 'non'], correct: 1, why: '« si j’habitais » dit que ce n’est pas le cas. EN: the imparfait says it is not so.' },
    { q: 'Deuxième phrase : la visite est-elle encore possible ?', opts: ['oui', 'non'], correct: 0, why: '« si tu viens » laisse la porte ouverte. EN: the present leaves the door open.' },
    { q: 'Troisième phrase : a-t-elle une voiture ?', opts: ['oui', 'non'], correct: 1, why: '« si elle avait une voiture » : elle n’en a pas. EN: she does not have one.' },
    { q: 'Sixième phrase : quelle paire entends-tu ?', opts: ['la réelle', 'l’irréelle'], correct: 1, why: '« demandais » puis « ferais » : imparfait et conditionnel. EN: the unreal pair.' },
    { q: 'Septième phrase : le dossier est-il complet ?', opts: ['on ne sait pas encore', 'non, il ne l’est pas'], correct: 0, why: 'Le présent après si laisse les deux possibilités ouvertes. EN: the present leaves both open.' },
  ],
  audio: REC('rec-b1-10-irreelle-ecoute'),
  say: REFRAME,
  terms: ['irreel', 'reel'],
};

const A6_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a6-dictee',
  layer: 'core',
  title: 'Écris le monde voisin',
  frSub: 'Imparfait devant, conditionnel derrière',
  itemIds: dicteeFor(6),
  audio: AUDIO,
  say: REFRAME,
  terms: ['irreel'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux pièges de la paire irréelle',
  frSub: 'Le conditionnel qui glisse, le futur qui reste',
  rule: {
    title: 'Les deux moitiés bougent ensemble',
    body: "Quand tu passes du réel à l'irréel, tu changes les DEUX temps, jamais un seul. Un imparfait devant avec un futur derrière donne une phrase qui ne veut rien dire. EN: move both halves together, never only one.",
  },
  cards: [
    { promptLabel: 'conditionnel après si', promptSound: 'Si j’aurais une voiture, je vous emmènerais tous.', fr: 'Si j’avais une voiture, je vous emmènerais tous.', ipa: '/si ʒa.vɛ yn vwa.tyʁ ʒə vu.zɑ̃.mɛn.ʁɛ tus/', tip: 'Avoir donne avais après si, jamais aurais. EN: avoir gives avais after si.' },
    { promptLabel: 'futur au résultat', promptSound: 'Si nous étions plus nombreux, nous louerons un minibus.', fr: 'Si nous étions plus nombreux, nous louerions un minibus.', ipa: '/si nu.ze.tjɔ̃ ply nɔ̃.bʁø nu lu.ʁi.jɔ̃ œ̃ mi.ni.bys/', tip: 'Imparfait devant, donc conditionnel derrière. EN: imparfait in front means conditional behind.' },
    { promptLabel: 'conditionnel après si', promptSound: 'Si je serais toi, je lirais le contrat deux fois.', fr: 'Si j’étais toi, je lirais le contrat deux fois.', ipa: '/si ʒe.tɛ twa ʒə li.ʁɛ lə kɔ̃.tʁa dø fwa/', tip: 'La formule complète est si j’étais toi, sans exception. EN: the fixed form is si j’étais toi.' },
    { promptLabel: 'futur au résultat', promptSound: 'Si tu parlais espagnol, tu trouveras du travail là-bas.', fr: 'Si tu parlais espagnol, tu trouverais du travail là-bas.', ipa: '/si ty paʁ.lɛ ɛs.pa.ɲɔl ty tʁu.və.ʁɛ dy tʁa.vaj la ba/', tip: 'Le travail n’arrivera pas : il arriverait. EN: the job will not come; it would come.' },
    { promptLabel: 'présent au résultat', promptSound: 'Si le loyer baissait, beaucoup de gens restent en ville.', fr: 'Si le loyer baissait, beaucoup de gens resteraient en ville.', ipa: '/si lə lwa.je bɛ.sɛ bo.ku də ʒɑ̃ ʁɛs.tə.ʁɛ ɑ̃ vil/', tip: 'Le loyer ne baisse pas, alors personne ne reste. EN: the rent is not falling, so nobody stays.' },
    { promptLabel: 'conditionnel après si', promptSound: 'Si vous connaîtriez le quartier, vous comprendriez le prix.', fr: 'Si vous connaissiez le quartier, vous comprendriez le prix.', ipa: '/si vu kɔ.nɛ.sje lə kaʁ.tje vu kɔ̃.pʁɑ̃.dʁi.je lə pʁi/', tip: 'Un seul -riez par phrase, et il est déjà pris. EN: one -riez per sentence, already used.' },
  ],
  drill: [
    { promptSay: 'Si j’... une voiture, je vous emmènerais tous.', opts: ['aurais', 'avais'], correct: 1 },
    { promptSay: 'Si nous étions plus nombreux, nous ... un minibus.', opts: ['louerions', 'louerons'], correct: 0 },
    { promptSay: 'Si j’... toi, je lirais le contrat deux fois.', opts: ['étais', 'serais'], correct: 0 },
    { promptSay: 'Si tu parlais espagnol, tu ... du travail là-bas.', opts: ['trouveras', 'trouverais'], correct: 1 },
    { promptSay: 'Si le loyer baissait, beaucoup de gens ... en ville.', opts: ['resteraient', 'restent'], correct: 0 },
    { promptSay: 'Si vous ... le quartier, vous comprendriez le prix.', opts: ['connaîtriez', 'connaissiez'], correct: 1 },
    { promptSay: 'Si mon frère ..., la maison serait complète.', opts: ['viendrait', 'venait'], correct: 1 },
    { promptSay: 'Si on vivait à la campagne, les enfants ... plus.', opts: ['sortiraient', 'sortiront'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Les deux moitiés bougent ensemble' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la main écrit toute seule' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-10-piege-irreel'),
  say: REFRAME,
  terms: ['irreel', 'regle'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La condition', 'Quel temps prend la condition irréelle ?',
    ['le conditionnel', 'l’imparfait', 'le futur'], 1,
    'Et il ne parle pas du passé. EN: and it is not about the past.'),
  ctl('Le résultat', 'Et le résultat ?',
    ['le conditionnel présent', 'l’imparfait'], 0,
    'La forme de la leçon 8, réutilisée telle quelle. EN: the form from lesson 8, reused as is.'),
  ctl('La bascule', 'Tu changes la moitié si. Que fais-tu de l’autre ?',
    ['rien', 'je la change aussi'], 1,
    'Une paire ne se casse pas en deux. EN: a pair does not split.'),
], ['irreel', 'paire']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'La paire irréelle',
    opener: {
      line: "Ce qui n’est pas le cas a sa propre paire : ici tu apprends à parler du monde d’à côté. EN: What is not the case has its own pair: here you learn to talk about the world next door.",
      imageRef: 'lessons/si-clauses/act06.jpg',
    },
    sections: [],
    milestone: "Tu construis une condition irréelle et son conditionnel sans casser la paire. EN: You build an unreal condition and its conditional without breaking the pair.",
    estScreens: 38, restPoints: ['a6-construire', 'a6-ecoute'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_EXEMPLES, A6_ECOUTE, A6_DICTEE, A6_PIEGE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — SI J'AI LE TEMPS, SI J'AVAIS LE TEMPS
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Deux réponses au même message',
  frSub: 'Le club attend deux places',
  text: "Mme Roussel a envoyé le même message à deux membres du club : « Il reste deux places pour samedi. Réponds avant vendredi. »\n\nOusmane a répondu : « Si j'ai le temps, je passerai signer la feuille. » Mme Roussel a écrit son nom au crayon et a laissé la place ouverte jusqu'au vendredi soir.\n\nLéa a répondu : « Si j'avais le temps, je passerais signer la feuille. » Mme Roussel a rayé son nom le jour même et a proposé la place à quelqu'un d'autre.\n\nLes deux phrases sont correctes. Elles ne demandent pas la même chose. La première dit : ce n'est pas décidé, garde-moi la place. La seconde dit : le temps me manque, et il me manquera encore samedi.\n\nLe vendredi soir, Ousmane n'avait toujours pas signé. Mme Roussel l'a appelé. « Si tu venais quand même, tu ferais plaisir à tout le monde », lui a-t-elle dit. Elle savait déjà qu'il ne viendrait pas : elle avait choisi l'autre paire.",
  glossary: [
    { word: 'rayé', en: 'crossed out', note: 'Barré d’un trait, comme un nom qu’on enlève d’une liste.' },
    { word: 'la feuille', en: 'the sheet', note: 'La liste où chacun signe pour réserver sa place.' },
    { word: 'le jour même', en: 'that same day', note: 'Sans attendre, le jour où le message est arrivé.' },
    { word: 'quand même', en: 'all the same', note: 'Malgré tout ce qui empêche.' },
  ],
  questions: [
    { q: 'Pourquoi la place d’Ousmane reste-t-elle ouverte ?', a: "Parce que « Si j'ai le temps » dit que la venue est encore possible." },
    { q: 'Pourquoi celle de Léa est-elle donnée à quelqu’un d’autre ?', a: "Parce que « Si j'avais le temps » dit que le temps manque déjà et manquera encore." },
    { q: 'Les deux phrases sont-elles correctes ?', a: "Oui, toutes les deux. Ce n'est pas une question de forme, c'est une question de message." },
    { q: 'Que fait Mme Roussel à la fin, avec « Si tu venais quand même » ?', a: "Elle choisit la paire irréelle, parce qu'elle est déjà sûre qu'il ne viendra pas." },
  ],
  audio: REC('rec-b1-10-deux-reponses'),
  say: REFRAME,
  terms: ['choix', 'paire'],
};

const A7_PAIRES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-paires',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Quatre situations, deux fois chacune',
  frSub: 'Ce que ton lecteur entend',
  hint: 'Quatre cartes. Chacune porte les deux versions.',
  audio: REC('rec-b1-10-choix'),
  say: REFRAME,
  terms: ['choix'],
  cards: [
    {
      head: 'La visite', label: 'la porte ouverte',
      fr: 'Si j’ai le temps, je passerai te voir.',
      sub: '[see zhay luh TAHⁿ | zhuh pa-suh-REH tuh VWAR]',
      body: 'Rien n’est décidé. Ton lecteur garde de la place pour toi. EN: nothing is settled, so your reader keeps room for you.',
    },
    {
      head: 'La visite', label: 'la porte fermée',
      fr: 'Si j’avais le temps, je passerais te voir.',
      sub: '[see zha-veh luh TAHⁿ | zhuh pa-suh-REH tuh VWAR]',
      body: 'Le temps manque, et il manquera encore. C’est un refus poli. EN: the time is missing and will stay missing: a polite refusal.',
    },
    {
      head: 'Le contrat', label: 'la paire réelle',
      fr: 'Si nous gagnons ce marché, nous ouvrirons une deuxième boutique.',
      sub: '[see noo ga-nyohⁿ suh mar-SHAY | noo-zoo-vree-ROHⁿ ün deu-ZYEM boo-TEEK]',
      body: 'Le dossier est déposé, la réponse arrive bientôt. On peut encore gagner. EN: the bid is in and the answer is coming.',
    },
    {
      head: 'Le contrat', label: "la paire irréelle",
      fr: 'Si nous gagnions ce marché, nous ouvririons une deuxième boutique.',
      sub: '[see noo ga-nyee-YOHⁿ suh mar-SHAY | noo-zoo-vree-ree-YOHⁿ ün deu-ZYEM boo-TEEK]',
      body: 'On rêve à voix haute. Personne autour de la table n’y croit vraiment. EN: this is thinking aloud; nobody at the table really believes it.',
    },
  ],
};

const A7_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-table',
  layer: 'core',
  sheetId: 'sheet-paires',
  title: 'Les trois paires, en une table',
  frSub: 'Touche une ligne',
  cols: ['Après si', 'Dans le résultat', 'Ce que ça dit'],
  rows: [
    {
      cells: ['présent', 'futur', 'ça peut arriver'],
      say: 'Si j’ai le temps, je passerai te voir.',
      detail: { title: 'La paire réelle', body: 'La condition est encore ouverte, et le résultat attend derrière. C’est la paire des projets. EN: the condition is still open and the result waits behind it.', say: 'Si tu viens en train, je t’attendrai à la gare.' },
    },
    {
      cells: ['présent', 'présent', 'c’est toujours vrai'],
      say: 'Si on chauffe trop l’eau, le thé devient amer.',
      detail: { title: 'La même paire, sans futur', body: 'Quand le résultat est déjà vrai ou vrai chaque fois, le présent reste des deux côtés. EN: when the result is already true, the present stays on both sides.', say: 'Si la réception est fermée, le code est sur la porte.' },
    },
    {
      cells: ['présent', 'impératif', 'fais-le'],
      say: 'Si tu as faim, prends du pain dans la cuisine.',
      detail: { title: 'La même paire, en consigne', body: 'La troisième suite de l’acte 4. La moitié si n’a toujours pas bougé. EN: the third result from act 4; the si half still has not moved.', say: 'Si le voyant rouge s’allume, appelle le technicien.' },
    },
    {
      cells: ['imparfait', 'conditionnel présent', 'ce n’est pas le cas'],
      say: 'Si j’avais le temps, je passerais te voir.',
      detail: { title: 'La paire irréelle', body: 'La condition manque aujourd’hui. C’est la paire des refus polis, des conseils et des rêves. EN: the condition is missing today: refusals, advice and daydreams.', say: 'Si j’étais toi, je lirais le contrat deux fois.' },
    },
    {
      cells: ['plus-que-parfait', 'conditionnel passé', 'ça n’a jamais eu lieu'],
      say: 'Si j’avais su, j’aurais pris un autre train.',
      detail: { title: 'La paire du regret', body: 'Tu la reconnais à l’acte 11. La construire est le travail du B2, pas celui de cette leçon. EN: you recognise it in act 11; building it is B2 work.', say: 'Si nous avions réservé plus tôt, nous aurions payé moins cher.' },
    },
    {
      cells: ['futur ou conditionnel', 'rien du tout', 'interdit'],
      say: 'Si le dossier est complet, la mairie répondra en dix jours.',
      detail: { title: 'La ligne qui n’existe pas', body: 'Aucune paire ne commence par un futur ou un conditionnel derrière si. C’est la règle de l’acte 3. EN: no pair begins with an r-form after si.', say: 'Si tu viens demain, nous irons au marché ensemble.' },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['paire', 'regret'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Choisis la paire que la situation demande',
  frSub: 'Quatre pages, quatre décisions',
  groups: [
    ctl('Tu peux encore venir', 'Tu ne sais pas si tu seras libre samedi. Tu écris...',
      ['Si j’avais le temps, je passerais.', 'Si j’ai le temps, je passerai.'], 1,
      'Tu veux qu’on te garde la place : la porte reste ouverte. EN: you want the seat kept, so keep the door open.'),
    ctl('Tu veux refuser sans dire non', 'Tu sais déjà que tu ne viendras pas. Tu écris...',
      ['Si j’avais le temps, je passerais.', 'Si j’ai le temps, je passerai.'], 0,
      'La paire irréelle refuse poliment, sans prononcer le mot non. EN: the unreal pair refuses politely.'),
    ctl('Le dossier est déposé', 'La réponse arrive dans deux semaines. Tu écris...',
      ['Si nous gagnions ce marché...', 'Si nous gagnons ce marché...'], 1,
      'Gagner est encore possible, donc la paire réelle. EN: winning is still possible.'),
    ctl('Personne n’y croit', 'Vous rêvez à voix haute pendant la pause. Tu dis...',
      ['Si nous gagnions ce marché...', 'Si nous gagnons ce marché...'], 0,
      'La paire irréelle dit que c’est du rêve, et tout le monde le comprend. EN: the unreal pair marks it as daydreaming.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['choix', 'reel'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La porte est-elle ouverte',
  frSub: 'Huit phrases, quatre situations',
  lines: [
    ln(E(1292)), ln(E(1293)), ln(E(1296)), ln(E(1297)),
    ln(E(1304)), ln(E(1305)), ln(E(1306)), ln(E(1307)),
  ],
  questions: [
    { q: 'Première phrase : la visite est-elle encore possible ?', opts: ['oui', 'non'], correct: 0, why: '« si j’ai le temps » : rien n’est décidé. EN: nothing is settled yet.' },
    { q: 'Deuxième phrase : et celle-là ?', opts: ['oui', 'non, c’est un refus poli'], correct: 1, why: '« si j’avais le temps » ferme la porte en douceur. EN: it closes the door gently.' },
    { q: 'Cinquième phrase : les fenêtres seront-elles changées ?', opts: ['peut-être, ça dépend du budget', 'non, jamais'], correct: 0, why: 'Le présent après si laisse la décision ouverte. EN: the present keeps the decision open.' },
    { q: 'Sixième phrase : et là ?', opts: ['peut-être', 'non, le budget ne le permet pas'], correct: 1, why: 'L’imparfait dit que le budget, on ne l’a pas. EN: the imparfait says the budget is not there.' },
    { q: 'Huitième phrase : l’étagère sera-t-elle finie ce soir ?', opts: ['oui, c’est prévu', 'non, il manque la perceuse'], correct: 1, why: '« si tu me prêtais » : la perceuse n’est pas venue. EN: the drill has not arrived.' },
  ],
  audio: REC('rec-b1-10-choix-ecoute'),
  say: REFRAME,
  terms: ['choix'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Écris les deux versions',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('La version ouverte', [
      it(E(1294), 'le marché peut encore se gagner'),
      it(E(1298), 'elle n’a pas encore répondu'),
      it(E(1302), 'l’aide est là si tu la demandes'),
      it(E(1296), 'le train est une option réelle'),
    ], chk('Ces quatre phrases laissent-elles une décision à prendre ?',
      ['oui', 'non'], 0,
      'La paire réelle garde toujours la porte ouverte. EN: the real pair always keeps the door open.')),
    grp('La version fermée', [
      it(E(1295), 'le marché est déjà perdu, ou presque'),
      it(E(1299), 'elle a déjà dit non'),
      it(E(1303), 'l’aide n’est pas demandée'),
      it('fr.b1.dictee.031', 'le temps manque, vraiment'),
    ], chk('« Si elle acceptait, tout serait réglé. » A-t-elle accepté ?',
      ['oui', 'non', 'on ne sait pas'], 1,
      'La paire irréelle dit que la condition n’est pas remplie. EN: the unreal pair says the condition is not met.')),
    ctl('Le test du lecteur', 'Avant d’envoyer, quelle question te poses-tu ?',
      ['ma phrase est-elle correcte', 'est-ce que je veux qu’on m’attende'], 1,
      'Les deux phrases sont correctes. Seul le message change. EN: both are correct; only the message changes.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['choix', 'irreel'],
};

const A7_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a7-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  frSub: 'Avant d’écrire, pas après',
  hacks: [
    {
      hack: 'Demande-toi si la condition est vraie aujourd’hui. Si elle peut l’être, prends le présent.',
      why: 'Le seul critère fiable est le monde, pas le temps de la phrase. EN: the only reliable test is the world, not the tense.',
    },
    {
      hack: 'Relis ta phrase avec « mais ce n’est pas le cas ». Si ça sonne juste, tu voulais l’imparfait.',
      why: 'La paire irréelle porte toujours ce sous-entendu. EN: the unreal pair always carries that implication.',
    },
    {
      hack: 'Si tu veux refuser sans dire non, choisis exprès la paire irréelle.',
      why: 'Ce n’est pas une faute, c’est un outil : tout francophone entend le refus. EN: not an error but a tool; every French speaker hears the refusal.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['choix', 'irreel'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le critère', 'Comment choisis-tu entre les deux paires ?',
    ['selon la longueur de la phrase', 'selon la politesse', 'selon ce qui est vrai aujourd’hui'], 2,
    'Le monde décide, pas la grammaire. EN: the world decides, not the grammar.'),
  ctl('Le message', '« Si j’avais le temps, je passerais » veut dire...',
    ['je ne viendrai pas', 'je viendrai peut-être'], 0,
    'Un refus poli, et tout le monde l’entend comme tel. EN: a polite refusal, heard as one.'),
  ctl('La correction', 'Une des deux versions est-elle fausse ?',
    ['oui, l’irréelle', 'non, les deux sont justes', 'oui, la réelle'], 1,
    'Ce n’est pas une question de forme mais de message. EN: not a question of form but of message.'),
], ['choix', 'paire']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Si j’ai, si j’avais',
    opener: {
      line: "Deux phrases justes, deux messages opposés : ici tu choisis celui que ton lecteur recevra. EN: Two correct sentences, two opposite messages: here you choose the one your reader gets.",
      imageRef: 'lessons/si-clauses/act07.jpg',
    },
    sections: [],
    milestone: "Tu choisis ta paire selon ce que tu veux dire, et plus selon la forme qui te vient. EN: You choose your pair by what you mean, not by the form that comes first.",
    estScreens: 40, restPoints: ['a7-table', 'a7-ecoute'],
  },
  sections: [A7_LECTURE, A7_PAIRES, A7_TABLE, A7_CHOISIR, A7_ECOUTE, A7_CONSTRUIRE, A7_HACKS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LE SI QUI POSE UNE QUESTION
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Trois questions sans réponse',
  frSub: 'Le même mot, un autre métier',
  setting: 'Vendredi soir, au téléphone. Léa appelle Ousmane depuis la gare.',
  bubbles: [
    { from: 'user', fr: 'Je me demande si le car est déjà parti.', en: 'I wonder whether the coach has already left.' },
    { from: 'coach', fr: 'Personne ne le sait. Appelle le chauffeur.', en: 'Nobody knows. Call the driver.' },
    { from: 'user', fr: 'Je me demande si le car sera complet.', en: 'I wonder whether the coach will be full.', warn: 'Un futur juste derrière si' },
    { from: 'coach', fr: 'Là, tu peux mettre un futur. Ce si ne conditionne rien.', en: 'There you can use a future. That si conditions nothing.' },
    { from: 'user', fr: 'Alors la règle de l’acte trois ne tient plus.', en: 'So the rule from act three no longer holds.' },
    { from: 'coach', fr: 'Elle tient. Elle parle du si qui pose une condition, et celui-ci pose une question.', en: 'It holds. It is about the si that sets a condition, and this one asks a question.' },
    { from: 'narrator', fr: 'Deux mots identiques, deux métiers. Le verbe qui précède dit lequel.', en: 'Two identical words, two jobs. The verb in front says which.' },
  ],
  closing: { fr: 'Demander, savoir, vérifier, dire : derrière ces verbes, si veut dire whether.', en: 'After demander, savoir, vérifier and dire, si means whether.' },
  audio: REC('rec-b1-10-gare'),
  say: REFRAME,
  terms: ['question', 'regle'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Deux si, en quatre cartes',
  frSub: 'La condition et la question',
  hint: 'Quatre cartes. Regarde le mot qui arrive AVANT si.',
  audio: REC('rec-b1-10-deux-si'),
  say: REFRAME,
  terms: ['question', 'reel'],
  cards: [
    {
      head: 'Le si de condition', label: 'une paire',
      fr: 'Si le car est complet, nous prendrons le train.',
      sub: '[see luh kar eh kohⁿ-PLEH | noo prahⁿ-DROHⁿ luh TREHⁿ]',
      body: 'Deux moitiés, une paire, et aucune forme en r derrière si. EN: two halves, one pair, and no r-form after si.',
    },
    {
      head: 'Le si de question', label: 'aucune paire',
      fr: 'Je me demande si le car sera complet.',
      sub: '[zhuh muh duh-MAHⁿD | see luh kar suh-ra kohⁿ-PLEH]',
      body: 'Une seule idée, rapportée comme une question. Le futur a le droit d’être là. EN: one reported question, and the future is allowed.',
    },
    {
      head: 'Comment les séparer', label: 'le verbe devant',
      fr: 'demander · savoir · vérifier · dire',
      sub: '[duh-mahⁿ-DAY] · [sa-VWAR] · [vay-ree-FYAY] · [DEER]',
      body: 'Derrière un verbe de question, si veut dire whether. Partout ailleurs, il conditionne. EN: after a verb of asking, si means whether.',
    },
    {
      head: 'Un troisième si, à ne pas confondre', label: 'si + adjectif',
      fr: 'Tu pars toujours si tôt.',
      sub: '[tü par too-zhoor see TOH]',
      body: 'Devant un adjectif ou un adverbe, si veut dire tellement. Il ne pose ni condition ni question. EN: before an adjective or adverb, si means so.',
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Condition ou question',
  frSub: 'Trois groupes, trois gâchettes',
  groups: [
    grp('Une question rapportée', [
      it(E(1308), 'après je me demande'),
      it(E(1310), 'après je ne sais pas'),
      it(E(1312), 'après savoir'),
      it('fr.sons.elision.072', 'la même structure, plus courte'),
    ], chk('Que peut-on mettre juste derrière si, dans ces quatre phrases ?',
      ['le présent seulement', 'le présent, le futur ou un temps du passé'], 1,
      'Ce si ne conditionne rien, donc la règle dure ne le touche pas. EN: this si conditions nothing.')),
    grp('Le futur est permis', [
      it(E(1309), 'sera, juste derrière si'),
      it(E(1316), 'continuera, juste derrière si'),
      it(E(1319), 'partira, juste derrière si'),
      it(E(1321), 'dira commande la question'),
    ], chk('Ces quatre phrases contredisent-elles l’acte 3 ?',
      ['oui', 'non, elles parlent d’un autre si'], 1,
      'La règle dure concerne la condition, pas la question. EN: the hard rule is about conditions only.')),
    ctl('Le test', 'Comment sais-tu quel si tu as sous les yeux ?',
      ['tu regardes la longueur de la phrase', 'tu regardes le verbe qui arrive avant'], 1,
      'Demander, savoir, vérifier, dire : la question. Sinon, la condition. EN: the verb in front decides.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['question', 'regle'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Cinq questions rapportées',
  frSub: 'Aucune n’est une condition',
  examples: [
    ex(E(1311), 'un ordre qui contient une question'),
    ex(E(1315), 'la question de quelqu’un d’autre, rapportée'),
    ex(E(1317), 'une vérification à venir'),
    ex('fr.a2.marche.130', 'une question posée au marché'),
    ex('fr.b1.routines.060', 'une question qu’on se pose à soi-même'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['question'],
};

const A8_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a8-focus',
  layer: 'core',
  sheetId: 'sheet-si-autres',
  title: 'Les si qui ne conditionnent rien',
  frSub: 'Quatre lignes à garder',
  points: [
    'Après demander, savoir, vérifier et dire, si veut dire whether. EN: after verbs of asking, si means whether.',
    'Ce si accepte le futur et le conditionnel juste derrière lui. EN: that si does allow a future or a conditional right behind it.',
    'Devant un adjectif ou un adverbe, si veut dire tellement. EN: before an adjective or an adverb, si means so.',
    'Partout ailleurs, si ouvre une condition et la règle dure revient. EN: everywhere else si opens a condition and the hard rule returns.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['question', 'regle'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre confusions entre les deux si',
  errors: [
    {
      wrong: 'Je me demande si le car est complet demain.',
      right: 'Je me demande si le car sera complet demain.',
      why: "Normal : la règle de l'acte 3 vient de coûter cher, alors la main enlève tous les futurs. Ici il en faut un. EN: act 3's rule was expensive, so the hand removes every future; this one is needed.",
    },
    {
      wrong: 'Je ne sais pas est-ce qu’elle viendra demain.',
      right: 'Je ne sais pas si elle viendra demain.',
      why: "Normal : est-ce que sert à poser une question directe. Rapportée, elle devient si. EN: est-ce que asks directly; reported, it becomes si.",
    },
    {
      wrong: 'Si le car sera complet, nous prendrons le train.',
      right: 'Si le car est complet, nous prendrons le train.',
      why: "L'inverse de la première erreur : ici si conditionne vraiment, donc le futur est interdit. EN: here si really does condition, so the future is out.",
    },
    {
      wrong: 'Elle voudrait savoir que la salle est libre jeudi.',
      right: 'Elle voudrait savoir si la salle est libre jeudi.',
      why: "Avec que, elle affirme que la salle est libre. Avec si, elle pose la question. EN: with que she asserts it; with si she asks it.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['question'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le métier', 'Dans « Je me demande si tu viendras », que fait si ?',
    ['il pose une condition', 'il rapporte une question'], 1,
    'Personne ne conditionne rien : on ne sait pas, voilà tout. EN: nothing is conditioned; it is simply unknown.'),
  ctl('Le futur', 'Le futur est-il permis derrière ce si ?',
    ['oui', 'non', 'seulement à l’oral'], 0,
    'La règle dure ne concerne que le si de condition. EN: the hard rule covers the conditional si only.'),
  ctl('Le repère', 'Qu’est-ce qui te dit quel si tu as ?',
    ['la ponctuation', 'le verbe placé devant'], 1,
    'Demander, savoir, vérifier, dire. EN: demander, savoir, vérifier, dire.'),
], ['question', 'regle']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le si qui pose une question',
    opener: {
      line: "Le même petit mot sert aussi à dire « je ne sais pas » : ici la règle dure s’arrête. EN: The same little word also says I do not know: here the hard rule stops.",
      imageRef: 'lessons/si-clauses/act08.jpg',
    },
    sections: [],
    milestone: "Tu reconnais le si qui rapporte une question et tu oses mettre un futur derrière. EN: You can spot the si that reports a question and dare to put a future behind it.",
    estScreens: 32, restPoints: ['a8-construire'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_EXEMPLES, A8_FOCUS, A8_ERREURS, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — SI ON ALLAIT AU CINÉMA
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Une soirée à décider',
  frSub: 'Proposer sans demander',
  setting: 'La sortie est annulée. Ousmane, Léa et Mme Roussel restent dans la salle.',
  bubbles: [
    { from: 'user', fr: 'Et maintenant.', en: 'And now what.' },
    { from: 'coach', fr: 'Si on allait au cinéma ce soir.', en: 'How about going to the cinema tonight.', warn: 'Une proposition, pas une condition' },
    { from: 'user', fr: 'Il n’y a pas de deuxième moitié.', en: 'There is no second half.' },
    { from: 'coach', fr: 'Non. La phrase s’arrête là, et c’est ce qui en fait une proposition.', en: 'No. The sentence stops there, and that is what makes it a suggestion.' },
    { from: 'user', fr: 'Si on prenait un café avant.', en: 'How about a coffee first.' },
    { from: 'coach', fr: 'Voilà. Passez me voir demain, si vous voulez bien.', en: 'That is it. Come and see me tomorrow, if you would be so kind.', warn: 'Ici si adoucit, il ne conditionne pas' },
    { from: 'narrator', fr: 'Trois emplois de plus, et pas une seule paire de temps à choisir.', en: 'Three more jobs, and not one pair of tenses to choose.' },
  ],
  closing: { fr: 'Si + on + imparfait propose. Si vous voulez bien adoucit. Sinon, si oui et si possible abrègent.', en: 'Si plus on suggests, si vous voulez bien softens, and the short forms shorten.' },
  audio: REC('rec-b1-10-soiree'),
  say: REFRAME,
  terms: ['suggestion', 'paire'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Proposer, adoucir, abréger',
  frSub: 'Trois emplois de plus',
  hint: 'Quatre cartes. Aucune ne demande de choisir une paire.',
  audio: REC('rec-b1-10-proposer'),
  say: REFRAME,
  terms: ['suggestion'],
  cards: [
    {
      head: 'La proposition', label: 'si + on + imparfait',
      fr: 'Si on allait au cinéma ce soir ?',
      sub: '[see ohⁿ-na-leh oh see-nay-MA suh SWAR]',
      body: 'L’imparfait ne dit rien d’irréel ici : il rend la proposition légère. La moitié résultat n’existe pas. EN: the imparfait just makes the suggestion light; there is no result half.',
    },
    {
      head: 'La porte ouverte', label: 'et si',
      fr: 'Et si on changeait de date ?',
      sub: '[ay see ohⁿ shahⁿ-ZHEH duh DAT]',
      body: 'Et devant si annonce une idée neuve au milieu d’une discussion. EN: et in front of si announces a new idea mid-discussion.',
    },
    {
      head: 'Adoucir', label: 'si vous voulez bien',
      fr: 'Passez me voir demain, si vous voulez bien.',
      sub: '[pa-say muh vwar duh-MEHⁿ | see voo voo-lay BYEHⁿ]',
      body: `La condition est une politesse, pas un vrai obstacle. Le répertoire complet est ${POLI_REF}. EN: the condition is politeness, not a real obstacle.`,
    },
    {
      head: 'Abréger', label: 'les formes courtes',
      fr: 'si oui · sinon · si possible',
      sub: '[see WEE] · [see-NOHⁿ] · [see po-SEEBL]',
      body: 'Trois blocs figés. Aucun verbe derrière, et aucune paire à monter. EN: three fixed blocks, with no verb and no pair.',
    },
  ],
};

const A9_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-table',
  layer: 'core',
  sheetId: 'sheet-si-autres',
  title: 'Six si qui ne conditionnent rien',
  frSub: 'Touche une ligne',
  cols: ['Forme', 'Ce qu’elle fait', 'Où'],
  rows: [
    {
      cells: ['si on + imparfait', 'propose', 'entre amis, en réunion'],
      say: 'Si on prenait un café avant la réunion ?',
      detail: { title: 'La proposition', body: 'La phrase s’arrête après la première moitié. C’est la forme orale la plus courante pour proposer. EN: the sentence stops after the first half.', say: 'Si on se retrouvait devant la gare ?' },
    },
    {
      cells: ['et si', 'relance', 'au milieu d’une discussion'],
      say: 'Et si on changeait de date ?',
      detail: { title: 'La relance', body: 'Et signale que tu proposes autre chose que ce qui vient d’être dit. EN: et signals that you are offering an alternative.', say: 'Et si on partait vendredi soir ?' },
    },
    {
      cells: ['si vous voulez bien', 'adoucit', 'au travail, par écrit'],
      say: 'Si vous voulez bien, nous passerons signer la convention mardi.',
      detail: { title: 'La politesse', body: 'Tu laisses à l’autre la possibilité de refuser, sans vraiment poser de condition. EN: you leave room to refuse without really setting a condition.', say: 'Nous commencerons à neuf heures, si tout le monde est d’accord.' },
    },
    {
      cells: ['si possible', 'atténue', 'dans une demande'],
      say: 'Envoyez le dossier avant vendredi, si possible.',
      detail: { title: 'La demande souple', body: 'Deux mots à la fin d’une phrase, et la demande devient un souhait. EN: two words at the end turn a demand into a wish.', say: 'Le prochain train, si possible.' },
    },
    {
      cells: ['sinon', 'annonce la suite', 'partout'],
      say: 'Réponds avant ce soir, sinon la place sera prise.',
      detail: { title: 'La conséquence', body: 'Sinon veut dire « si ce n’est pas le cas », en un seul mot. Le futur derrière est normal. EN: sinon means if that is not the case, in one word.', say: 'Sinon, nous garderions la date du mois prochain.' },
    },
    {
      cells: ['si oui', 'enchaîne', 'après une question'],
      say: 'Est-ce que tu viens samedi ? Si oui, je réserve deux places.',
      detail: { title: 'La réponse conditionnelle', body: 'Si oui reprend la question qui vient d’être posée, sans la répéter. EN: si oui picks up the question just asked, without repeating it.', say: 'Si oui, je préparerai la liste des inscrits.' },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suggestion'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Propose, adoucis, abrège',
  frSub: 'Trois groupes, trois gâchettes',
  groups: [
    grp('Proposer', [
      it(E(1322), 'une soirée'),
      it(E(1323), 'un café'),
      it(E(1324), 'un rendez-vous'),
      it(E(1325), 'une idée neuve'),
    ], chk('Combien de ces phrases ont une deuxième moitié ?',
      ['toutes', 'aucune', 'deux'], 1,
      'La proposition s’arrête après si. EN: the suggestion stops after si.')),
    grp('Adoucir et abréger', [
      it(E(1328), 'si vous voulez bien, à la fin'),
      it(E(1331), 'si possible, à la fin'),
      it(E(1333), 'sinon annonce la conséquence'),
      it('fr.b1.heure-et-date.033', 'si tu veux, à la fin'),
    ], chk('« Réponds avant ce soir, sinon la place sera prise. » Le futur derrière sinon est-il correct ?',
      ['non, jamais de futur après si', 'oui, sinon n’est pas un si de condition'], 1,
      'Sinon est un mot entier, et la règle dure ne le touche pas. EN: sinon is a word of its own.')),
    ctl('Le test', 'Tu veux proposer une sortie à voix haute. Quelle forme ?',
      ['si on va au cinéma', 'si on allait au cinéma'], 1,
      'L’imparfait rend la proposition légère. Le présent sonne comme une condition inachevée. EN: the imparfait makes it a suggestion.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suggestion'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Proposition, politesse ou conséquence',
  frSub: 'Huit phrases, trois emplois',
  lines: [
    ln(E(1322)), ln(E(1328)), ln(E(1325)), ln(E(1333)),
    ln(E(1331)), ln(E(1324)), ln(E(1335)), ln(E(1329)),
  ],
  questions: [
    { q: 'Première phrase : que fait la personne ?', opts: ['elle pose une condition', 'elle propose quelque chose'], correct: 1, why: 'Si on allait : une proposition, sans deuxième moitié. EN: a suggestion with no second half.' },
    { q: 'Deuxième phrase : la visite est-elle vraiment conditionnelle ?', opts: ['oui, elle dépend de la volonté', 'non, c’est une politesse'], correct: 1, why: 'Si vous voulez bien adoucit une demande. EN: it softens a request.' },
    { q: 'Quatrième phrase : que se passe-t-il sans réponse ?', opts: ['rien', 'la place sera prise'], correct: 1, why: 'Sinon annonce la conséquence de l’absence de réponse. EN: sinon announces the consequence.' },
    { q: 'Cinquième phrase : le dossier doit-il absolument partir vendredi ?', opts: ['oui, c’est obligatoire', 'si c’est faisable'], correct: 1, why: 'Si possible transforme l’ordre en souhait. EN: si possible turns the order into a wish.' },
    { q: 'Septième phrase : combien de places seront réservées ?', opts: ['deux, en cas de oui', 'deux, dans tous les cas'], correct: 0, why: 'Si oui reprend la question posée juste avant. EN: si oui picks up the question just asked.' },
  ],
  audio: REC('rec-b1-10-proposer-ecoute'),
  say: REFRAME,
  terms: ['suggestion'],
};

const A9_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a9-flash',
  layer: 'core',
  title: 'Huit blocs à réutiliser',
  frSub: 'Aucun ne demande de paire',
  cards: [
    { front: 'how about going', back: 'si on allait', say: 'Si on allait au cinéma ce soir ?' },
    { front: 'what if we changed', back: 'et si on changeait', say: 'Et si on changeait de date ?' },
    { front: 'if you would be so kind', back: 'si vous voulez bien', say: 'Passez me voir demain, si vous voulez bien.' },
    { front: 'if possible', back: 'si possible', say: 'Envoyez le dossier avant vendredi, si possible.' },
    { front: 'otherwise', back: 'sinon', say: 'Réponds avant ce soir, sinon la place sera prise.' },
    { front: 'if so', back: 'si oui', say: 'Si oui, je préparerai la liste des inscrits.' },
    { front: 'if you ever', back: 'si jamais', say: 'Si jamais tu passes par Nantes, préviens-moi.' },
    { front: 'if everyone agrees', back: 'si tout le monde est d’accord', say: 'Nous commencerons à neuf heures, si tout le monde est d’accord.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suggestion'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('La proposition', 'Quelle forme sert à proposer une sortie ?',
    ['si on va', 'si on allait', 'si on ira'], 1,
    'Si + on + imparfait, et la phrase s’arrête. EN: si plus on plus imparfait, and it stops.'),
  ctl('La deuxième moitié', 'Une proposition avec si en a-t-elle une ?',
    ['oui', 'non'], 1,
    'C’est justement ce qui la distingue d’une condition. EN: that is what marks it out from a condition.'),
  ctl('Sinon', 'Peut-on écrire un futur derrière sinon ?',
    ['non, jamais', 'oui', 'seulement au passé'], 1,
    'Sinon est un mot entier, pas un si suivi d’un verbe. EN: sinon is a word of its own.'),
], ['suggestion', 'regle']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Si on allait au cinéma',
    opener: {
      line: "Une moitié suffit pour proposer une soirée : ici tu apprends les si qui ne conditionnent rien. EN: One half is enough to suggest an evening out: here you learn the si's that condition nothing.",
      imageRef: 'lessons/si-clauses/act09.jpg',
    },
    sections: [],
    milestone: "Tu proposes, tu adoucis une demande et tu abrèges avec sinon, si oui et si possible. EN: You can suggest, soften a request, and shorten with sinon, si oui and si possible.",
    estScreens: 32, restPoints: ['a9-table'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_TABLE, A9_CONSTRUIRE, A9_ECOUTE, A9_FLASH, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — QUAND OU SI
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Deux lettres de motivation',
  frSub: 'Le même projet, deux certitudes',
  text: "Ousmane et Léa préparent la même candidature. Les deux veulent partir travailler à l'étranger l'an prochain. Les deux passent leur diplôme en juin.\n\nOusmane a écrit : « Quand j'aurai mon diplôme, je chercherai un poste à l'étranger. » Il a déjà validé tous ses examens sauf un, et il sait qu'il l'aura.\n\nLéa a écrit : « Si j'ai mon diplôme, je chercherai un poste à l'étranger. » Il lui reste trois examens et un stage, et elle ne se sent pas sûre.\n\nLes deux phrases sont correctes. Elles ne disent pas la même chose du tout. Quand annonce une date qui viendra ; si annonce une chose qui viendra peut-être.\n\nUne différence les sépare encore : quand prend le futur des deux côtés, et si ne le prend jamais. « Quand j'aurai » contre « Si j'ai ». C'est la même idée dans les deux phrases, et deux temps différents.\n\nMme Roussel a lu les deux lettres. « Même si je ne décide rien, a-t-elle dit, je préfère la tienne, Ousmane. Elle ne demande pas la permission d'exister. »",
  glossary: [
    { word: 'la candidature', en: 'the application', note: 'Le dossier envoyé pour obtenir un poste ou une place.' },
    { word: 'validé', en: 'passed', note: 'Réussi, pour un examen ou un module.' },
    { word: 'un stage', en: 'a work placement', note: 'Une période de travail qui fait partie des études.' },
    { word: 'la permission d’exister', en: 'permission to exist', note: 'Une image : la phrase ne s’excuse pas d’être là.' },
  ],
  questions: [
    { q: 'Pourquoi Ousmane écrit-il quand et Léa si ?', a: "Ousmane est sûr d'avoir son diplôme ; Léa ne l'est pas. Quand pour le certain, si pour le possible." },
    { q: 'Quel temps suit quand, et quel temps suit si ?', a: "Quand prend le futur (j'aurai). Si prend le présent (j'ai). L'idée est pourtant la même." },
    { q: 'Les deux lettres sont-elles correctes ?', a: "Oui. Elles disent deux degrés de certitude différents, et chacune est juste pour celle qui l'écrit." },
    { q: 'Que fait « Même si je ne décide rien » ?', a: "Même si accepte la situation et dit que rien ne change : ce n'est pas une condition." },
  ],
  audio: REC('rec-b1-10-lettres'),
  say: REFRAME,
  terms: ['certitude', 'reel'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Quand contre si, en quatre cartes',
  frSub: 'Deux certitudes, deux grammaires',
  hint: 'Quatre cartes. La troisième est celle qui coûte cher.',
  audio: REC('rec-b1-10-quand-si'),
  say: REFRAME,
  terms: ['certitude'],
  cards: [
    {
      head: 'Quand', label: 'c’est daté',
      fr: 'Quand j’aurai mon diplôme, je chercherai un poste.',
      sub: '[kahⁿ zhoh-REH mohⁿ dee-PLOHM | zhuh shehr-shuh-REH uhⁿ POST]',
      body: 'Le diplôme viendra. Seule la date reste inconnue. EN: the diploma is coming; only the date is unknown.',
    },
    {
      head: 'Si', label: 'c’est possible',
      fr: 'Si j’ai mon diplôme, je chercherai un poste.',
      sub: '[see zhay mohⁿ dee-PLOHM | zhuh shehr-shuh-REH uhⁿ POST]',
      body: 'Le diplôme n’est pas garanti. La phrase entière dépend de lui. EN: the diploma is not guaranteed and the sentence hangs on it.',
    },
    {
      head: 'La différence qui coûte cher', label: Cap(FUTUR_USE_REF),
      fr: 'quand j’aurai · si j’ai',
      sub: '[kahⁿ zhoh-REH] · [see zhay]',
      body: `« ${B107_REFRAME} » Même idée, deux temps, et c'est la grammaire qui tranche. EN: ${B107_REFRAME_EN}`,
    },
    {
      head: 'Même si', label: 'ni l’un ni l’autre',
      fr: 'Même si le temps est mauvais, la course aura lieu.',
      sub: '[mem see luh tahⁿ eh moh-VEH | la koorss oh-ra LYUH]',
      body: 'Même si accepte la mauvaise météo et annonce que rien ne change. Ce n’est pas une condition. EN: même si accepts the situation and says nothing changes.',
    },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Sûr, possible, ou accepté',
  frSub: 'Trois groupes, trois gâchettes',
  groups: [
    grp('C’est sûr : quand', [
      it(E(1337), 'le diplôme arrive'),
      it(E(1339), 'le train arrivera bien'),
      it(E(1345), 'tu seras prêt un jour'),
      it(E(1349), 'l’installation se fera'),
    ], chk('Quel temps prend la moitié quand ?',
      ['le présent', 'le futur'], 1,
      'Quand prend le futur des deux côtés. EN: quand takes the future on both sides.')),
    grp('C’est possible : si', [
      it(E(1338), 'le diplôme n’est pas gagné'),
      it(E(1340), 'le train peut être en retard'),
      it(E(1346), 'tu ne seras peut-être pas prêt'),
      it(E(1350), 'le logement n’est pas trouvé'),
    ], chk('Et la moitié si ?',
      ['le futur aussi', 'le présent, toujours'], 1,
      'La règle de l’acte 3 tient jusqu’ici. EN: act 3’s rule still holds.')),
    grp('C’est accepté : même si', [
      it(E(1347), 'la course a lieu de toute façon'),
      it('fr.b1.sports-et-loisirs.004', 'elle rejoue quand même'),
      it('fr.b1.maison.079', 'elle prend l’appartement quand même'),
      it(E(1348), 'la règle, en une phrase'),
    ], chk('Après « même si », le résultat dépend-il de la condition ?',
      ['oui', 'non, il arrive de toute façon'], 1,
      'Même si concède : il ne conditionne rien. EN: même si concedes; it conditions nothing.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['certitude', 'regle'],
};

const A10_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-exemples',
  layer: 'core',
  title: 'Cinq paires de certitude',
  frSub: 'La même idée, deux degrés',
  examples: [
    ex(E(1342), 'la pluie viendra : quand, et un futur'),
    ex(E(1343), 'la pluie peut venir : si, et un présent'),
    ex(E(1344), 'la règle, en une phrase'),
    ex('fr.b1.routines.079', 'si + vouloir : un but, pas une date'),
    ex('fr.b1.metiers.049', 'la même structure, au travail'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['certitude'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Le futur qui traverse la frontière',
  frSub: 'Quand le prend, si le refuse',
  rule: {
    title: 'Deux mots, deux traitements',
    body: "Quand prend le futur dans ses deux moitiés. Si ne le prend jamais dans la sienne. Même idée, deux temps différents. EN: quand takes the future twice; si never takes it once.",
  },
  cards: [
    { promptLabel: 'si + futur', promptSound: 'Si j’aurai mon diplôme, je chercherai un poste à l’étranger.', fr: 'Si j’ai mon diplôme, je chercherai un poste à l’étranger.', ipa: '/si ʒe mɔ̃ di.plom ʒə ʃɛʁ.ʃə.ʁe œ̃ pɔst a le.tʁɑ̃.ʒe/', tip: 'Le diplôme n’est pas garanti, donc si, donc présent. EN: not guaranteed, so si, so present.' },
    { promptLabel: 'quand + présent', promptSound: 'Quand le train arrive, nous prendrons un taxi.', fr: 'Quand le train arrivera, nous prendrons un taxi.', ipa: '/kɑ̃ lə tʁɛ̃ a.ʁi.və.ʁa nu pʁɑ̃.dʁɔ̃.zœ̃ tak.si/', tip: 'Le train arrivera bien un jour : quand veut le futur. EN: the train will arrive, so quand takes the future.' },
    { promptLabel: 'si + futur', promptSound: 'S’il pleuvra, la route sera glissante.', fr: 'S’il pleut, la route sera glissante.', ipa: '/sil plø la ʁut sə.ʁa ɡli.sɑ̃t/', tip: 'La pluie n’est pas promise, donc si, donc présent. EN: the rain is not promised.' },
    { promptLabel: 'quand + présent', promptSound: 'Quand tu es prêt, fais-moi signe.', fr: 'Quand tu seras prêt, fais-moi signe.', ipa: '/kɑ̃ ty sə.ʁa pʁɛ fɛ mwa siɲ/', tip: 'Tu seras prêt, c’est certain : le futur est obligatoire. EN: you will be ready, so the future is required.' },
    { promptLabel: 'si + futur', promptSound: 'Si nous trouverons un logement, nous vous inviterons.', fr: 'Si nous trouvons un logement, nous vous inviterons.', ipa: '/si nu tʁu.vɔ̃.zœ̃ lɔʒ.mɑ̃ nu vu.zɛ̃.vi.tə.ʁɔ̃/', tip: 'Le logement n’est pas trouvé : si, et présent. EN: the flat is not found yet.' },
    { promptLabel: 'quand + présent', promptSound: 'Quand nous sommes installés, nous vous inviterons.', fr: 'Quand nous serons installés, nous vous inviterons.', ipa: '/kɑ̃ nu sə.ʁɔ̃.zɛ̃s.ta.le nu vu.zɛ̃.vi.tə.ʁɔ̃/', tip: 'L’installation se fera : quand, et futur des deux côtés. EN: it will happen, so quand and two futures.' },
  ],
  drill: [
    { promptSay: 'Quand j’... mon diplôme, je chercherai un poste.', opts: ['aurai', 'ai'], correct: 0 },
    { promptSay: 'Si j’... mon diplôme, je chercherai un poste.', opts: ['aurai', 'ai'], correct: 1 },
    { promptSay: 'Quand le train ..., nous prendrons un taxi.', opts: ['arrive', 'arrivera'], correct: 1 },
    { promptSay: 'Si le train ... à l’heure, nous prendrons un taxi.', opts: ['arrive', 'arrivera'], correct: 0 },
    { promptSay: 'Quand tu ... prêt, fais-moi signe.', opts: ['seras', 'es'], correct: 0 },
    { promptSay: 'Si tu ... prêt avant midi, fais-moi signe.', opts: ['seras', 'es'], correct: 1 },
    { promptSay: 'Quand il ..., la route sera glissante.', opts: ['pleut', 'pleuvra'], correct: 1 },
    { promptSay: 'Même si le temps ... mauvais, la course aura lieu.', opts: ['est', 'sera'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Deux mots, deux traitements' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la main écrit toute seule' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-10-piege-quand'),
  say: REFRAME,
  terms: ['certitude', 'regle'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-suites',
  title: 'Quand, si, même si',
  frSub: 'Trois mots, trois messages',
  points: [
    'Quand annonce un moment qui viendra, et prend le futur des deux côtés. EN: quand announces a moment that will come and takes the future twice.',
    'Si annonce un moment qui viendra peut-être, et ne prend jamais le futur. EN: si announces a maybe and never takes the future.',
    'Même si accepte la situation et dit que rien ne change. EN: même si accepts the situation and says nothing changes.',
    'Le test : peux-tu mettre une date ? Alors quand. Sinon, si. EN: the test: can you put a date on it? Then quand.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['certitude', 'regle'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le test', 'Comment choisis-tu entre quand et si ?',
    ['selon la longueur', 'selon que le moment est garanti ou non'], 1,
    'Une date qu’on peut poser appelle quand. EN: a moment you can date calls for quand.'),
  ctl('Les temps', 'Quand prend quoi, dans sa propre moitié ?',
    ['le présent', 'le futur', 'le conditionnel'], 1,
    'Et si prend le présent dans la sienne. EN: and si takes the present in its own.'),
  ctl('Même si', 'Le résultat dépend-il de ce qui suit même si ?',
    ['oui', 'non'], 1,
    'Il arrive de toute façon. EN: it happens either way.'),
], ['certitude', 'paire']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Quand ou si',
    opener: {
      line: "Même idée, deux degrés de certitude, et deux temps différents : ici tu choisis ton mot. EN: The same idea, two degrees of certainty, two different tenses: here you choose your word.",
      imageRef: 'lessons/si-clauses/act10.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre quand et si selon ce qui est garanti, et tu mets le bon temps derrière chacun. EN: You choose between quand and si by what is guaranteed, and put the right tense behind each.",
    estScreens: 34, restPoints: ['a10-construire'],
  },
  sections: [A10_LECTURE, A10_CARTES, A10_CONSTRUIRE, A10_EXEMPLES, A10_PIEGE, A10_FOCUS, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — CE QUI NE S'EST JAMAIS PASSÉ (RECONNAISSANCE SEULEMENT)
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a11-histoire',
  layer: 'core',
  title: 'La ligne écrite au crayon',
  frSub: 'Une paire que tu lis, sans la monter',
  setting: 'Le lundi suivant, Mme Roussel efface le tableau. La dernière ligne, au crayon, résiste.',
  bubbles: [
    { from: 'narrator', fr: 'La ligne dit : si nous avions su, nous aurions réservé plus tôt.', en: 'The line says: if we had known, we would have booked earlier.' },
    { from: 'user', fr: 'Ce n’est aucune des deux paires.', en: 'That is neither of the two pairs.' },
    { from: 'coach', fr: 'C’est la troisième. Elle parle d’un passé qui n’a pas eu lieu.', en: 'It is the third one. It talks about a past that never happened.' },
    { from: 'user', fr: 'Donc ils n’ont pas su, et ils n’ont pas réservé.', en: 'So they did not know, and they did not book.' },
    { from: 'coach', fr: 'Exactement. Tu viens de la lire sans l’avoir apprise.', en: 'Exactly. You just read it without having learned it.' },
    { from: 'user', fr: 'Et je dois savoir l’écrire.', en: 'And I need to know how to write it.' },
    { from: 'coach', fr: 'Pas dans cette leçon. Tu la reconnais, tu la comprends, et tu la construiras au B2.', en: 'Not in this lesson. You recognise it, you understand it, and you will build it at B2.' },
  ],
  closing: { fr: 'Trois paires en tout. Tu en montes deux, tu en lis trois.', en: 'Three pairs in all. You build two and you read three.' },
  audio: REC('rec-b1-10-crayon'),
  say: REFRAME,
  terms: ['regret', 'paire'],
};

const A11_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a11-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'La paire du regret',
  frSub: 'Reconnaissance seulement',
  hint: 'Quatre cartes. Tu n’auras pas à écrire ces formes aujourd’hui.',
  audio: REC('rec-b1-10-regret'),
  say: REFRAME,
  terms: ['regret', 'paire'],
  cards: [
    {
      head: 'La condition', label: 'un passé qui n’a pas eu lieu',
      fr: 'Si j’avais su...',
      sub: '[see zha-veh SÜ]',
      body: 'Je n’ai pas su. La forme dit à la fois le passé et le fait que ce passé n’existe pas. EN: I did not know, and the form says both things at once.',
    },
    {
      head: 'Le résultat', label: 'ce qui n’est pas arrivé',
      fr: '...j’aurais pris un autre train.',
      sub: '[zhoh-reh pree uhⁿ-noh-truh TREHⁿ]',
      body: `Je n’ai pas pris d’autre train. « ${B108_REFRAME} » EN: ${B108_REFRAME_EN}`,
    },
    {
      head: 'La troisième paire', label: 'la famille au complet',
      fr: 'présent-futur · imparfait-conditionnel · plus-que-parfait-conditionnel passé',
      sub: '[ray-EL] · [ee-ray-EL] · [ruh-GREH]',
      body: 'Même système, un cran plus loin. Tu montes les deux premières et tu lis la troisième. EN: the same system, one notch further on.',
    },
    {
      head: 'La frontière', label: 'B2',
      fr: 'Si tu m’avais prévenu, je serais venu t’aider.',
      sub: '[see tü ma-veh pray-vuh-NÜ | zhuh suh-reh vuh-nü teh-DAY]',
      body: 'Construire cette paire est le travail du niveau suivant. Ici tu la lis et tu dis ce qu’elle veut dire. EN: building this pair is next level work; here you read it and gloss it.',
    },
  ],
};

const A11_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a11-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Est-ce que c’est arrivé',
  frSub: 'Huit phrases, une seule paire',
  lines: [
    ln(E(1351)), ln(E(1352)), ln(E(1353)), ln(E(1354)),
    ln(E(1356)), ln(E(1357)), ln(E(1358)), ln(E(1360)),
  ],
  questions: [
    { q: 'Première phrase : ont-ils évité les bouchons ?', opts: ['oui', 'non'], correct: 1, why: 'Ils ne sont pas partis plus tôt, donc ils les ont eus. EN: they did not leave earlier, so they hit them.' },
    { q: 'Deuxième phrase : la personne savait-elle ?', opts: ['oui', 'non'], correct: 1, why: '« Si j’avais su » veut toujours dire que je ne savais pas. EN: it always means I did not know.' },
    { q: 'Troisième phrase : est-il venu aider ?', opts: ['oui', 'non'], correct: 1, why: 'Personne ne l’a prévenu, donc il n’est pas venu. EN: nobody warned him, so he did not come.' },
    { q: 'Cinquième phrase : ont-ils payé moitié prix ?', opts: ['oui', 'non'], correct: 1, why: 'Ils n’ont pas réservé en janvier. EN: they did not book in January.' },
    { q: 'Huitième phrase : a-t-elle rencontré l’équipe ?', opts: ['oui', 'non'], correct: 1, why: 'La personne n’est pas venue, donc elle n’a rencontré personne. EN: the person did not come.' },
  ],
  audio: REC('rec-b1-10-regret-ecoute'),
  say: REFRAME,
  terms: ['regret'],
};

const A11_RECONNAITRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-reconnaitre',
  layer: 'core',
  size: 'lg',
  title: 'Lis la paire, dis ce qui s’est passé',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Ce qui n’a pas eu lieu', [
      it(E(1356), 'ils n’ont pas réservé en janvier'),
      it(E(1357), 'la sœur n’a pas été écoutée'),
      it(E(1358), 'le château n’a pas été visité'),
      it('fr.b1.hebergement.004', 'la réservation est arrivée trop tard'),
    ], chk('Ces quatre phrases racontent-elles ce qui est arrivé, ou le contraire ?',
      ['ce qui est arrivé', 'le contraire de ce qui est arrivé'], 1,
      'La paire du regret dit toujours l’inverse des faits. EN: the regret pair always says the opposite of the facts.')),
    grp('Les trois paires ensemble', [
      it(E(1292), 'la paire réelle : la porte est ouverte'),
      it(E(1362), 'la paire irréelle : le choix manque aujourd’hui'),
      it(E(1363), 'la paire du regret : le choix n’a jamais existé'),
      it(E(1359), 'la famille au complet'),
    ], chk('Combien de ces paires dois-tu savoir CONSTRUIRE aujourd’hui ?',
      ['les trois', 'deux', 'une seule'], 1,
      'La réelle et l’irréelle. La troisième, tu la lis. EN: the real and the unreal; the third one you read.')),
    ctl('La frontière', 'Quand construiras-tu la paire du regret ?',
      ['dans cette leçon', 'au niveau B2'], 1,
      'Ici, la reconnaître et la comprendre suffit. EN: recognising and understanding it is enough here.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret', 'paire'],
};

const A11_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a11-exemples',
  layer: 'core',
  title: 'Cinq regrets ordinaires',
  frSub: 'À lire, pas à écrire',
  examples: [
    ex('fr.b2.maison.065', 'le bail a été signé quand même'),
    ex('fr.b1.dictee.046', 'les fautes ont bien été faites'),
    ex('fr.b1.famille.084', 'la fête n’a pas eu lieu'),
    ex('fr.b1.dictee.041', 'les études se sont arrêtées'),
    ex(E(1361), 'le magasin a ouvert trop tard'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret'],
};

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le sens', '« Si j’avais su, j’aurais pris un autre train. » Quel train a-t-elle pris ?',
    ['un autre', 'celui-là', 'aucun'], 1,
    'La paire du regret dit l’inverse des faits. EN: the regret pair says the opposite of the facts.'),
  ctl('La famille', 'Combien de paires le système compte-t-il ?',
    ['deux', 'trois', 'quatre'], 1,
    'Réelle, irréelle, et celle du regret. EN: real, unreal, and the regret pair.'),
  ctl('La frontière', 'Que t’est-il demandé aujourd’hui avec cette troisième paire ?',
    ['la reconnaître et la comprendre', 'la construire sans faute'], 0,
    'La construire est le travail du B2. EN: building it is B2 work.'),
], ['regret', 'paire']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Ce qui ne s’est jamais passé',
    opener: {
      line: "Il existe une troisième paire, pour ce qui n’a pas eu lieu : ici tu apprends à la lire, pas encore à l’écrire. EN: There is a third pair, for what never happened: here you learn to read it, not yet to write it.",
      imageRef: 'lessons/si-clauses/act11.jpg',
    },
    sections: [],
    milestone: "Tu lis « si + plus-que-parfait » et tu dis ce qui s’est réellement passé. Construire cette paire reste le travail du B2. EN: You can read the pluperfect pair and say what really happened; building it stays B2 work.",
    estScreens: 28, restPoints: ['a11-cartes'],
  },
  sections: [A11_HISTOIRE, A11_CARTES, A11_ECOUTE, A11_RECONNAITRE, A11_EXEMPLES, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — ÉCRIRE AVEC SI
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message que tu vas imiter',
  frSub: 'Huit si, trois métiers',
  text: READING_MODELE,
  glossary: [
    { word: 'le gymnase', en: 'the sports hall', note: 'La grande salle municipale où l’on joue au basket ou au volley.' },
    { word: 'un tournoi', en: 'a tournament', note: 'Une compétition sur une journée, avec plusieurs équipes.' },
    { word: 'les inscriptions', en: 'the registrations', note: 'La liste des personnes qui s’inscrivent, et la période pour le faire.' },
    { word: 'la convention', en: 'the agreement', note: 'Le papier signé entre le club et la mairie.' },
  ],
  questions: [
    { q: 'Quel si de la première phrase ne pose pas de condition ?', a: "« pour savoir si le gymnase est libre » : c'est une question rapportée, pas une condition." },
    { q: 'Où est la paire irréelle du message ?', a: "« Si vous pouviez répondre avant vendredi, cela nous aiderait beaucoup » et « Si le budget ne suffisait pas, nous demanderions une subvention »." },
    { q: 'Pourquoi « quand la convention sera signée » et non « si » ?', a: "Parce que la signature est prévue : on peut lui mettre une date. Quand prend le futur des deux côtés." },
    { q: 'Que font sinon, si possible et si oui dans ce message ?', a: "Ils abrègent : ils remplacent une phrase entière par deux mots, sans paire à monter." },
  ],
  audio: REC('rec-b1-10-modele'),
  say: REFRAME,
  terms: ['paire', 'question', 'suggestion'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  sheetId: 'sheet-ecrire-si',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Le plan du message',
  steps: [
    'Dis pourquoi tu écris, avec « pour savoir si » : une question, pas une condition. EN: say why you are writing, with pour savoir si.',
    'Pose la condition réelle : si + présent, puis futur, pour ce qui peut arriver. EN: put the real condition: si plus present, then future.',
    'Ajoute une condition irréelle : si + imparfait, puis conditionnel, pour ce qui manque. EN: add an unreal condition for what is missing.',
    'Abrège une fois avec sinon, si oui ou si possible. EN: shorten once with sinon, si oui or si possible.',
    'Relis chaque si et vérifie qu’aucun -rai ni -rais ne le suit. EN: reread every si and check that no r-form follows it.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['paire', 'regle'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  sheetId: 'sheet-ecrire-si',
  title: 'Quatre phrases que tout message contient',
  cases: [
    { situation: 'Tu dis pourquoi tu écris', fr: 'Je vous écris pour savoir si le gymnase est libre ce week-end.', en: 'I am writing to find out whether the sports hall is free this weekend.' },
    { situation: 'Tu annonces ce qui arrivera', fr: 'Si la salle est disponible, nous confirmerons la date lundi.', en: 'If the room is available, we will confirm the date on Monday.' },
    { situation: 'Tu demandes un effort que tu ne peux pas exiger', fr: 'Si vous pouviez répondre avant vendredi, cela nous aiderait beaucoup.', en: 'If you could answer before Friday, that would help us a lot.' },
    { situation: 'Tu prévois le cas contraire', fr: 'Sinon, nous garderions la date du mois prochain.', en: 'Otherwise, we would keep next month as the date.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reel', 'irreel', 'question'],
};

const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'Au téléphone avec le gymnase',
  frSub: 'Six tours, à voix haute',
  setting: 'Tu appelles le gymnase municipal pour organiser le tournoi du club. Monsieur Faure décroche.',
  turns: [
    {
      ai: 'Gymnase municipal, bonjour.', en: 'Municipal sports hall, good morning.',
      user: 'Bonjour, je vous appelle pour savoir si la salle est libre samedi après-midi.',
      userEn: 'Hello, I am calling to find out whether the hall is free on Saturday afternoon. (si means whether, so no condition.)',
      alts: [
        { fr: 'Bonjour, je me demande si la salle est libre samedi après-midi.', en: 'Hello, I wonder whether the hall is free on Saturday afternoon.' },
        { fr: 'Bonjour, pourriez-vous me dire si la salle sera libre samedi ?', en: 'Hello, could you tell me whether the hall will be free on Saturday? (A future after si: allowed here.)' },
      ],
    },
    {
      ai: 'Samedi après-midi, il y a déjà un entraînement jusqu’à quinze heures.', en: 'On Saturday afternoon there is already a training session until three.',
      user: 'Si l’entraînement finit à quinze heures, nous commencerons à quinze heures trente.',
      userEn: 'If the training ends at three, we will start at half past three. (The real pair: present, then future.)',
      alts: [
        { fr: 'Nous commencerons à quinze heures trente si l’entraînement finit à l’heure.', en: 'We will start at half past three if the training ends on time.' },
        { fr: 'Si l’entraînement finit à quinze heures, tout va bien pour nous.', en: 'If the training ends at three, that works for us. (A present result: already true.)' },
      ],
    },
    {
      ai: 'Il faudrait une convention signée avant le tournoi.', en: 'A signed agreement would be needed before the tournament.',
      user: 'Si vous voulez bien, nous passerons signer la convention mardi.',
      userEn: 'If you would be so kind, we will come and sign the agreement on Tuesday. (The polite si: it softens, it does not condition.)',
      alts: [
        { fr: 'Nous passerons signer mardi, si possible.', en: 'We will come and sign on Tuesday, if possible.' },
        { fr: 'Quand la convention sera signée, nous préviendrons les familles.', en: 'When the agreement is signed, we will let the families know. (Quand: it is going to happen.)' },
      ],
    },
    {
      ai: 'Combien d’équipes attendez-vous.', en: 'How many teams are you expecting.',
      user: 'Six pour l’instant. Si le nombre augmente, il faudra un deuxième car.',
      userEn: 'Six for now. If the number goes up, a second coach will be needed. (Still real: it can happen.)',
      alts: [
        { fr: 'Six pour l’instant. Si nous étions douze, nous demanderions deux terrains.', en: 'Six for now. If there were twelve of us, we would ask for two courts. (Unreal: there are not twelve.)' },
        { fr: 'Six, et si une équipe se désiste, nous vous préviendrons tout de suite.', en: 'Six, and if a team pulls out, we will let you know straight away.' },
      ],
    },
    {
      ai: 'Le tarif du samedi est plus élevé que celui du mercredi.', en: 'The Saturday rate is higher than the Wednesday one.',
      user: 'Si le budget ne suffisait pas, nous demanderions une subvention à la mairie.',
      userEn: 'If the budget were not enough, we would ask the town hall for a grant. (Unreal: the budget is enough for now.)',
      alts: [
        { fr: 'Si le budget ne suffit pas, nous demanderons une subvention.', en: 'If the budget is not enough, we will ask for a grant. (Also right, and it sounds more likely.)' },
        { fr: 'Sinon, nous garderions la date du mois prochain.', en: 'Otherwise, we would keep next month as the date.' },
      ],
    },
    {
      ai: 'Je vous envoie le formulaire ce soir.', en: 'I will send you the form tonight.',
      user: 'Merci. Si possible, envoyez-le par courriel, et si oui, je préparerai la liste des inscrits.',
      userEn: 'Thank you. If possible, send it by email, and if so, I will prepare the list of names. (Two short forms, no pair to build.)',
      alts: [
        { fr: 'Merci. Répondez avant vendredi, sinon les inscriptions fermeront sans nous.', en: 'Thank you. Answer before Friday, otherwise registration will close without us.' },
        { fr: 'Merci beaucoup. Si jamais vous avez un imprévu, prévenez-moi.', en: 'Thank you very much. If anything comes up, let me know.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reel', 'irreel', 'suggestion'],
};

const A12_TASK: TaskSection = {
  type: 'task',
  id: 'a12-mission',
  title: 'Écris pour réserver une salle',
  frSub: 'Mission écrite',
  brief: "Tu organises quelque chose : un tournoi, une répétition, un atelier ou une fête d'immeuble. Il te faut une salle, et une chose n'est pas sûre dans ton projet. Écris à la personne qui gère la salle.",
  briefEn: 'You are organising something and you need a room. One thing in your plan is not certain. Write to the person who manages the room.',
  produce: "Écris un message de 120 à 160 mots qui contient : une question rapportée avec « savoir si », une condition réelle (si + présent, puis futur), une condition irréelle (si + imparfait, puis conditionnel), une forme courte (sinon, si oui ou si possible), et une phrase avec quand pour ce qui est déjà sûr.",
  responseSpec: { kind: 'text', minWords: 120, maxWords: 160 },
  rubric: {
    criteria: [
      {
        key: 'paires', label: 'Les paires sont complètes', maxPoints: 4,
        descriptors: [
          '4 : La paire réelle et la paire irréelle sont toutes les deux là, chacune avec ses deux temps corrects.',
          '3 : Les deux paires sont là, mais une seule moitié boite. On comprend quand même.',
          '2 : Une seule des deux paires est présente, ou une paire est cassée : un temps d’une paire avec un temps de l’autre.',
          '1 : Les temps sont choisis un par un. Aucune paire ne tient du début à la fin.',
        ],
      },
      {
        key: 'regle', label: 'Rien derrière si', maxPoints: 3,
        descriptors: [
          '3 : Aucun -rai et aucun -rais derrière un si de condition, nulle part dans le message.',
          '2 : Une seule forme en r derrière un si, et le reste est propre.',
          '1 : Plusieurs futurs ou conditionnels sont posés derrière si.',
        ],
      },
      {
        key: 'autres', label: 'Les autres si sont là', maxPoints: 3,
        descriptors: [
          '3 : La question rapportée, la forme courte et la phrase avec quand sont toutes les trois présentes et justes.',
          '2 : Deux des trois sont là, ou la troisième est présente mais mal employée.',
          '1 : Le message n’utilise si que pour conditionner.',
        ],
      },
      {
        key: 'tache', label: 'La mission complète', maxPoints: 2,
        descriptors: [
          '2 : Le message fait 120 à 160 mots, il ouvre, il demande une chose précise et il se termine poliment.',
          '1 : Il manque l’ouverture, la demande ou la formule de fin, ou la longueur est hors des bornes.',
        ],
      },
    ],
  },
  scaffold: [
    'Je vous écris pour savoir si',
    'Si la salle est',
    'Si vous pouviez',
    'Sinon,',
    'Si possible,',
    'Si oui,',
    'Quand',
    'Je vous remercie d’avance',
  ],
  modelAnswer: "Bonjour Monsieur,\n\nJe vous écris pour savoir si la petite salle du centre est libre le samedi 14 mars, de quatorze à dix-huit heures. Notre association y organiserait un atelier de réparation de vélos.\n\nSi la salle est disponible ce jour-là, nous confirmerons dès le lundi suivant et nous enverrons la liste des participants. Si le nombre d'inscrits dépasse vingt personnes, il nous faudra aussi la cour, et je vous le dirai tout de suite.\n\nSi nous avions un local à nous, nous ne vous dérangerions pas chaque année. Ce n'est pas encore le cas, et votre salle reste la seule assez grande dans le quartier.\n\nSi possible, envoyez-nous une réponse avant vendredi. Sinon, nous reporterions l'atelier au mois d'avril. Quand la date sera fixée, nous préviendrons les familles.\n\nJe vous remercie d'avance de votre réponse.\n\nBien cordialement,\nSamira Cheriet",
  modelAnswerEn: "Hello Sir, I am writing to find out whether the small hall at the centre is free on Saturday 14 March, from two until six. Our association would run a bicycle repair workshop there. If the hall is available that day, we will confirm the following Monday and send the list of participants. If the number of registrations goes over twenty, we will also need the yard, and I will tell you straight away. If we had premises of our own, we would not disturb you every year. That is not the case yet, and your hall is still the only one big enough in the neighbourhood. If possible, send us an answer before Friday. Otherwise, we would put the workshop back to April. When the date is set, we will let the families know. Thank you in advance for your reply. Best wishes, Samira Cheriet",
  watchFor: [
    {
      pattern: 'A future or a conditional directly after a conditional si: « si je serai », « si nous aurions », « si vous pourriez ».',
      criterion: 'regle',
      feedback: 'Derrière un si de condition, aucune forme en r. Mets le présent ou l’imparfait, et garde le -rai ou le -rais pour l’autre moitié.',
      ref: 'a3-piege',
    },
    {
      pattern: 'A broken pair: si + imparfait followed by a future, or si + présent followed by a present conditional.',
      criterion: 'paires',
      feedback: 'Tu as changé une moitié et laissé l’autre. Les deux bougent ensemble : présent avec futur, imparfait avec conditionnel.',
      ref: 'a6-piege',
    },
    {
      pattern: 'Only the real pair in the whole message, with no unreal one anywhere.',
      criterion: 'paires',
      feedback: 'Il manque la paire irréelle. Ajoute une phrase sur ce qui te manque : si nous avions..., nous ...ions.',
      ref: 'a6-cartes',
    },
    {
      pattern: 'Only the unreal pair, used even for things that can really happen.',
      criterion: 'paires',
      feedback: 'Tout ton message parle d’un monde qui n’existe pas. Ce qui peut arriver prend si + présent et un futur.',
      ref: 'a7-choisir',
    },
    {
      pattern: 'A missing comma after a si half placed first, or a comma written where si comes second.',
      criterion: 'tache',
      feedback: 'Si devant, une virgule après la condition. Si derrière, aucune ponctuation entre les deux moitiés.',
      ref: 'a5-focus',
    },
    {
      pattern: 'An indirect question opened with que instead of si: « savoir que la salle est libre ».',
      criterion: 'autres',
      feedback: 'Avec que tu affirmes, avec si tu demandes. Ici tu ne sais pas encore : écris « savoir si ».',
      ref: 'a8-erreurs',
    },
    {
      pattern: 'The reported question missing entirely: the message never says why it is being written.',
      criterion: 'autres',
      feedback: 'Ouvre par « Je vous écris pour savoir si... ». C’est la phrase qui dit ce que tu cherches.',
      ref: 'a12-plan',
    },
    {
      pattern: 'A future removed from a reported question out of caution: « je me demande si la salle est libre samedi prochain » where the writer means will be.',
      criterion: 'autres',
      feedback: 'Ici si rapporte une question, donc le futur est permis : « si la salle sera libre ». La règle dure ne s’applique qu’aux conditions.',
      ref: 'a8-focus',
    },
    {
      pattern: 'Si used where the event is certain and dated: « si la date est fixée, nous préviendrons les familles ».',
      criterion: 'autres',
      feedback: 'La date sera fixée de toute façon : écris « quand la date sera fixée », avec le futur des deux côtés.',
      ref: 'a10-piege',
    },
    {
      pattern: 'No short form anywhere: no sinon, no si oui, no si possible.',
      criterion: 'autres',
      feedback: 'Ajoute une forme courte. Sinon annonce ce que tu feras en cas de refus, en un seul mot.',
      ref: 'a9-table',
    },
    {
      pattern: 'A si + plus-que-parfait pattern, correct or not.',
      criterion: 'paires',
      feedback: 'Cette paire n’est pas demandée ici. Tu la reconnais, et tu la construiras au niveau suivant.',
      ref: 'a11-cartes',
    },
    {
      pattern: 'A body outside 120 to 160 words, counted without the greeting and the sign-off.',
      criterion: 'tache',
      feedback: 'Compte tes mots sans le bonjour et sans la signature. En dessous de cent vingt, il manque une des cinq phrases demandées.',
      ref: 'a12-plan',
    },
  ],
  graderNotes: [
    'Word count EXCLUDES the greeting and the sign-off (Paul, 2026-09-22). Count the body only, with 10% tolerance (108-176) before criterion « tache » loses its point.',
    'DO NOT SCORE si + plus-que-parfait > conditionnel passé. Act 11 teaches recognition only. A learner who writes one correctly gains nothing and one who writes it wrongly loses nothing.',
    'Do not score the subjunctive. « il faudrait que » and « je voudrais que » are outside this lesson; a wrong verb after them is ignored.',
    'A future after si IS correct when si reports a question (savoir si, se demander si, dire si, vérifier si). Do not mark it as the act 3 error. Read what the verb in front of si is doing before scoring.',
    'Accept both « si le budget ne suffit pas » and « si le budget ne suffisait pas » in the same message: the choice between the pairs is the writer’s, and both are defensible for a budget.',
    'Judge « même si » as a concession, never as a condition, and never penalise the present after it.',
    'Writer gender is unknown: judge adjective and participle agreement for internal consistency only.',
    'Accept regional vocabulary and institutions (la mairie, la commune, le conseil municipal, la maison de quartier, le centre communautaire) and regional address forms.',
    'Accept any venue and any event: the situation is the learner’s to choose.',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
};

/** Say the whole lesson out loud. Every authored row carries `voiceflash`
 *  except the grammar cards; the three added ids are the only reused rows
 *  that carry it. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Dis tes conditions à voix haute',
  frSub: 'Les deux paires, sans les lire',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    'fr.a2.symptomes.217',
    'fr.a2.internet.212',
    'fr.sons.elision.072',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['paire', 'reel'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-paires',
  title: 'Toute la leçon sur un écran',
  rows: [
    {
      k: 'la paire réelle', v: 'si + présent, puis futur', say: 'Si j’ai le temps, je passerai te voir.',
      detail: { title: 'La paire réelle', body: 'Ça peut arriver. Le résultat peut aussi rester au présent ou passer à l’impératif. EN: it can really happen; the result may also be a present or an imperative.', say: 'Si tu as faim, prends du pain dans la cuisine.' },
    },
    {
      k: 'la paire irréelle', v: 'si + imparfait, puis conditionnel', say: 'Si j’avais le temps, je passerais te voir.',
      detail: { title: 'La paire irréelle', body: 'Ce n’est pas le cas aujourd’hui. C’est aussi la forme du refus poli et du conseil. EN: not the case today; also the polite refusal and the piece of advice.', say: 'Si j’étais toi, je lirais le contrat deux fois.' },
    },
    {
      k: 'la règle dure', v: 'ni -rai ni -rais derrière si', say: 'Si le dossier est complet, la mairie répondra en dix jours.',
      detail: { title: 'La règle dure', body: 'Une seule forme en r par phrase, et elle vit dans la moitié résultat. EN: one r-form per sentence, in the result half.', say: 'Si nous partons tôt, nous éviterons les bouchons.' },
    },
    {
      k: 'la virgule', v: 'si devant, virgule ; si derrière, rien', say: 'Appelle-moi si tu as un problème.',
      detail: { title: 'La virgule', body: 'Elle ferme la moitié si, et seulement quand cette moitié ouvre la phrase. EN: it closes the si half, and only when that half opens the sentence.', say: 'Si tu as un problème, appelle-moi.' },
    },
    {
      k: 'si = whether', v: 'après demander, savoir, dire', say: 'Je me demande si le car sera complet.',
      detail: { title: 'La question', body: 'Ce si ne conditionne rien, et le futur est permis juste derrière lui. EN: that si conditions nothing and does allow a future.', say: 'Je ne sais pas si elle viendra demain.' },
    },
    {
      k: 'les formes courtes', v: 'sinon · si oui · si possible', say: 'Réponds avant ce soir, sinon la place sera prise.',
      detail: { title: 'Les formes courtes', body: 'Trois blocs figés, sans verbe et sans paire. Si on + imparfait, lui, propose. EN: three fixed blocks, with no verb and no pair.', say: 'Si on allait au cinéma ce soir ?' },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['paire', 'regle', 'question'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu montes les deux paires qui comptent, tu les choisis selon ce qui est vrai, tu les écris dans les deux ordres, et tu lis la troisième sans l'avoir apprise. Le piège qui reste est le premier si de chaque message : c'est là que la main pose un futur, parce qu'elle pense déjà à demain. Avant l'examen, reprends ton message et souligne chaque si. Pour chacun, écris à côté ce qu'il fait : une condition réelle, une condition irréelle, une question, une proposition, une politesse ou une forme courte. Si tu n'arrives pas à nommer le métier d'un si, c'est celui-là qu'il faut réécrire. EN: Underline every si in your message and name the job it does; the one you cannot name is the one to rewrite.",
  stats: [
    { k: 'La paire réelle', v: 'si + présent, puis futur' },
    { k: 'La paire irréelle', v: 'si + imparfait, puis conditionnel' },
    { k: 'La règle dure', v: 'ni -rai ni -rais derrière si' },
    { k: 'Les autres si', v: 'question, proposition, politesse, formes courtes' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), TWELVE rounds of eight, one per
 *  act from act 1 to act 11 plus an integration round. Each round's target is
 *  a distinct errorTrigger, so a failed round fires that round's own drill.
 *
 *  `fold()` strips commas, accents and apostrophes, so no answer depends on
 *  one: the comma of act 5 is tested by mcq, never by typeIn. Every typeIn
 *  and errorSpot carries `prompt`, every listenChoose carries `say`. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer], why, ref });
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
      id: 'r1-mondes', label: 'Deux mondes', targets: ['mauvaise-paire'],
      questions: [
        mc('« Si j’avais le temps, je passerais te voir. » Que comprend ton lecteur ?', ['tu viendras peut-être', 'tu es déjà venu', 'tu ne viendras pas'], 2, 'La paire irréelle dit que le temps manque déjà. EN: the unreal pair says the time is already missing.', 'a1-scene'),
        mc('« Si j’ai le temps, je passerai te voir. » Et là ?', ['tu viendras peut-être', 'tu ne viendras pas'], 0, 'Le présent après si laisse la porte ouverte. EN: the present keeps the door open.', 'a1-scene'),
        tI('Mets la phrase dans le monde réel.', 'Si le car (être) complet, nous prendrons le train.', 'Si le car est complet, nous prendrons le train.', 'Le car peut très bien être complet. EN: the coach really might be full.', 'a1-trier'),
        tI('Mets la phrase dans le monde irréel.', 'Si le car (être) complet, nous prendrions le train.', 'Si le car était complet, nous prendrions le train.', 'Le conditionnel derrière appelle l’imparfait devant. EN: the conditional behind calls for the imparfait in front.', 'a1-trier'),
        mc('Combien de métiers différents si fait-il dans cette leçon ?', ['deux', 'un seul', 'quatre'], 2, 'Condition, question, proposition, politesse. EN: condition, question, suggestion, politeness.', 'a1-lecture'),
        tI('Complète la paire irréelle.', 'Si j’(avoir) une voiture, je vous emmènerais tous.', 'Si j’avais une voiture, je vous emmènerais tous.', 'La voiture manque maintenant. EN: the car is missing now.', 'a1-usages'),
        eS('Si j’aurais le temps, je passerais te voir.', 'Si j’avais le temps, je passerais te voir.', 'Avoir donne avais après si, jamais aurais. EN: avoir gives avais after si.', 'a1-check'),
        lC('Écoute. La porte est-elle encore ouverte ?', 'Si j’ai le temps, je passerai te voir.', ['non', 'on ne peut pas savoir', 'oui'], 2, 'Le présent après si laisse le choix à faire. EN: the present leaves the choice to be made.', 'a1-scene'),
      ],
    },
    {
      id: 'r2-reelle', label: 'La paire réelle', targets: ['resultat-au-present'],
      questions: [
        mc('Quel temps prend la condition réelle, juste après si ?', ['le futur', 'le conditionnel', 'le présent'], 2, 'Même quand toute la phrase parle de demain. EN: even when the whole sentence is about tomorrow.', 'a2-cartes'),
        tI('Mets le verbe du résultat au bon temps.', 'Si tu réserves aujourd’hui, tu (payer) moins cher.', 'Si tu réserves aujourd’hui, tu paieras moins cher.', 'Le futur vit dans la moitié résultat. EN: the future lives in the result half.', 'a2-construire'),
        mc('« Si le loyer augmente encore, nous devrons déménager. » Le déménagement est-il décidé ?', ['oui', 'c’est déjà fait', 'non, il dépend du loyer'], 2, 'Le résultat est suspendu à la condition. EN: the result hangs on the condition.', 'a2-construire'),
        tI('Complète la moitié résultat.', 'Si le train est en retard, nous (attendre) à la gare.', 'Si le train est en retard, nous attendrons à la gare.', 'Le train n’est pas encore passé : le résultat est à venir. EN: the result is still ahead.', 'a2-erreurs'),
        mc('Devant quels mots si perd-il son i ?', ['devant elle et on', 'devant tous les pronoms', 'devant il et ils'], 2, 'S’il, s’ils. Si elle et si on restent entiers. EN: only before il and ils.', 'a2-check'),
        tI('Écris la forme élidée.', 'Si il fait beau, nous mangerons dehors.', 'S’il fait beau, nous mangerons dehors.', 'Le i de si tombe devant il. EN: si drops its i before il.', 'a2-cartes'),
        eS('Si tu réserveras aujourd’hui, tu paieras moins cher.', 'Si tu réserves aujourd’hui, tu paieras moins cher.', 'Un seul futur par phrase, et il est déjà pris. EN: one future per sentence, already used.', 'a2-erreurs'),
        lC('Écoute. Où est le futur ?', 'Si vous payez avant vendredi, vous aurez une réduction.', ['dans la première moitié', 'dans la seconde'], 1, '« vous aurez » arrive après la virgule. EN: it comes after the comma.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-jamais', label: 'La règle dure', targets: ['si-plus-r'],
      questions: [
        mc('Peut-on écrire « si je serai » quand si pose une condition ?', ['non', 'oui'], 0, 'Ni futur ni conditionnel derrière un si de condition. EN: neither r-form after a conditional si.', 'a3-regle'),
        mc('Après si, être donne quoi ?', ['sera ou serait', 'est ou était'], 1, 'Sera et serait vivent de l’autre côté. EN: sera and serait live on the other side.', 'a3-check'),
        tI('Corrige la moitié si.', 'Si nous partirons tôt, nous éviterons les bouchons.', 'Si nous partons tôt, nous éviterons les bouchons.', 'Le r du futur est déjà pris par éviterons. EN: the r is already used.', 'a3-piege'),
        tI('Corrige la moitié si.', 'Si je serais à ta place, je demanderais un délai.', 'Si j’étais à ta place, je demanderais un délai.', 'La formule est si j’étais, sans exception. EN: the fixed form is si j’étais.', 'a3-piege'),
        mc('Que cherches-tu quand tu relis un message avec des si ?', ['les majuscules', 'les virgules', 'un r juste derrière un si'], 2, 'C’est la faute la plus fréquente et la plus visible. EN: the commonest and most visible error.', 'a3-construire'),
        tI('Corrige la moitié si.', 'Si vous accepterez notre offre, nous signerons cette semaine.', 'Si vous acceptez notre offre, nous signerons cette semaine.', 'Accepter se fait maintenant, signer se fera après. EN: accepting is now, signing comes after.', 'a3-flash'),
        eS('Si le dossier sera complet, la mairie répondra en dix jours.', 'Si le dossier est complet, la mairie répondra en dix jours.', 'Le dossier, on le regarde aujourd’hui. EN: the file is looked at today.', 'a3-lecture'),
        lC('Écoute. Le futur est-il du bon côté ?', 'Si tu viens demain, nous irons au marché ensemble.', ['non', 'il y en a deux', 'oui'], 2, 'Viens au présent, irons au futur. EN: present in front, future behind.', 'a3-focus'),
      ],
    },
    {
      id: 'r4-suites', label: 'Les trois suites', targets: ['suite-unique'],
      questions: [
        mc('Après si + présent, que peut porter le résultat ?', ['un futur seulement', 'un conditionnel', 'un futur, un présent ou un impératif'], 2, 'Trois suites, une seule condition. EN: three results, one condition.', 'a4-table'),
        mc('Tu écris une notice de machine. Quelle suite ?', ['un impératif', 'un futur'], 0, 'Une notice donne des ordres, pas des prévisions. EN: a manual gives instructions.', 'a4-choisir'),
        tI('Écris le résultat à l’impératif.', 'Si le voyant rouge s’allume, (appeler) le technicien.', 'Si le voyant rouge s’allume, appelle le technicien.', 'Une consigne s’adresse à quelqu’un. EN: an instruction is addressed to someone.', 'a4-construire'),
        mc('« Si tu as faim, il y a du pain dans la cuisine. » Le pain arrive-t-il à cause de ta faim ?', ['non, il est déjà là', 'oui'], 0, 'La condition dit quand l’information sert. EN: the condition says when the fact is useful.', 'a4-construire'),
        tI('Écris le résultat au présent de vérité.', 'Si on chauffe trop l’eau, le thé (devenir) amer.', 'Si on chauffe trop l’eau, le thé devient amer.', 'C’est vrai chaque fois : présent des deux côtés. EN: true every time.', 'a4-exemples'),
        mc('La moitié si change-t-elle avec la suite choisie ?', ['oui', 'non, elle reste au présent'], 1, 'Elle ne bouge jamais. EN: it never moves.', 'a4-check'),
        eS('Si vous avez un doute, vous demanderez confirmation par courriel.', 'Si vous avez un doute, demandez confirmation par courriel.', 'Ce futur sonne comme une obligation imposée. EN: that future reads as an imposed obligation.', 'a4-erreurs'),
        lC('Écoute. Le résultat est-il une instruction ?', 'Si ça ne passe pas, revenez me voir.', ['oui', 'non'], 0, 'Un impératif de vous : la consigne du médecin. EN: a vous imperative.', 'a4-histoire'),
      ],
    },
    {
      id: 'r5-ordre', label: 'L’ordre et la virgule', targets: ['ordre-virgule'],
      questions: [
        mc('Quand écris-tu une virgule entre les deux moitiés ?', ['quand si arrive en second', 'quand si ouvre la phrase'], 1, 'Elle ferme la moitié si, et seulement celle-là. EN: it closes the si half only.', 'a5-focus'),
        mc('L’ordre des deux moitiés change-t-il le sens ?', ['non', 'oui'], 0, 'Il change seulement ce que la phrase met en avant. EN: only what the sentence puts first.', 'a5-check'),
        tI('Retourne la phrase, sans changer les temps.', 'Si la météo le permet, nous partirons samedi.', 'Nous partirons samedi si la météo le permet.', 'Et la virgule disparaît avec le retournement. EN: and the comma goes with it.', 'a5-construire'),
        tI('Retourne la phrase, sans changer les temps.', 'Appelle-moi si tu as un problème.', 'Si tu as un problème, appelle-moi.', 'Si ouvre la phrase, donc une virgule la ferme. EN: si opens, so a comma closes it.', 'a5-cartes'),
        mc('La paire de temps change-t-elle avec l’ordre ?', ['oui', 'non'], 1, 'Imparfait et conditionnel restent appariés dans les deux sens. EN: the pair holds either way.', 'a5-cartes'),
        tI('Complète la moitié si.', 'Je viendrais avec toi si j’(avoir) un jour de congé.', 'Je viendrais avec toi si j’avais un jour de congé.', 'En second, la moitié si attire le conditionnel : ne cède pas. EN: in second place it attracts the conditional.', 'a5-erreurs'),
        eS('Elle accepterait ce poste si le salaire serait correct.', 'Elle accepterait ce poste si le salaire était correct.', 'La règle dure vaut aussi quand si arrive en second. EN: the hard rule holds in second place too.', 'a5-ecoute'),
        lC('Écoute. Par quoi la phrase commence-t-elle ?', 'Nous partirons samedi si la météo le permet.', ['par la condition', 'par le résultat'], 1, 'Le résultat ouvre, et rien ne les sépare. EN: the result opens and nothing separates them.', 'a5-histoire'),
      ],
    },
    {
      id: 'r6-irreelle', label: 'La paire irréelle', targets: ['paire-cassee'],
      questions: [
        mc('Quel temps prend la condition irréelle ?', ['le conditionnel', 'le futur', 'l’imparfait'], 2, 'Et il ne parle pas du passé. EN: and it is not about the past.', 'a6-cartes'),
        mc('« Si j’habitais plus près, je viendrais à pied. » Habite-t-elle près ?', ['non', 'oui'], 0, 'L’imparfait après si annonce toujours un manque. EN: it always announces something missing.', 'a6-construire'),
        tI('Complète le résultat.', 'Si nous étions plus nombreux, nous (louer) un minibus.', 'Si nous étions plus nombreux, nous louerions un minibus.', 'Imparfait devant, conditionnel derrière. EN: imparfait in front, conditional behind.', 'a6-piege'),
        tI('Complète la moitié si.', 'Si tu (parler) espagnol, tu trouverais du travail là-bas.', 'Si tu parlais espagnol, tu trouverais du travail là-bas.', 'Le conditionnel derrière appelle l’imparfait devant. EN: the conditional calls for the imparfait.', 'a6-exemples'),
        mc('Tu changes la moitié si. Que fais-tu de l’autre ?', ['rien', 'je la change aussi'], 1, 'Une paire ne se casse pas en deux. EN: a pair does not split.', 'a6-check'),
        tI('Complète la formule fixe.', 'Si j’(être) toi, je lirais le contrat deux fois.', 'Si j’étais toi, je lirais le contrat deux fois.', 'Si j’étais toi, sans exception. EN: si j’étais toi, always.', 'a6-cartes'),
        eS('Si le loyer baissait, beaucoup de gens resteront en ville.', 'Si le loyer baissait, beaucoup de gens resteraient en ville.', 'Le loyer ne baisse pas, alors personne ne reste. EN: the rent is not falling.', 'a6-piege'),
        lC('Écoute. Cette personne a-t-elle une voiture ?', 'Si elle avait une voiture, elle irait travailler plus vite.', ['oui', 'non'], 1, 'L’imparfait après si dit que non. EN: the imparfait says no.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-choix', label: 'Le choix', targets: ['choix-par-defaut'],
      questions: [
        mc('Comment choisis-tu entre les deux paires ?', ['selon la politesse', 'selon la longueur', 'selon ce qui est vrai aujourd’hui'], 2, 'Le monde décide, pas la grammaire. EN: the world decides.', 'a7-check'),
        mc('Tu veux qu’on te garde une place. Tu écris...', ['Si j’ai le temps, je passerai.', 'Si j’avais le temps, je passerais.'], 0, 'La paire réelle garde la porte ouverte. EN: the real pair keeps the door open.', 'a7-choisir'),
        mc('Tu veux refuser sans dire non. Tu écris...', ['Si j’avais le temps, je passerais.', 'Si j’ai le temps, je passerai.'], 0, 'La paire irréelle refuse poliment. EN: the unreal pair refuses politely.', 'a7-hacks'),
        tI('Écris la version ouverte.', 'Si nous (gagner) ce marché, nous ouvrirons une deuxième boutique.', 'Si nous gagnons ce marché, nous ouvrirons une deuxième boutique.', 'Le dossier est déposé : on peut encore gagner. EN: the bid is in.', 'a7-construire'),
        tI('Écris la version fermée.', 'Si nous (gagner) ce marché, nous ouvririons une deuxième boutique.', 'Si nous gagnions ce marché, nous ouvririons une deuxième boutique.', 'On rêve à voix haute. EN: this is thinking aloud.', 'a7-paires'),
        mc('Une des deux versions est-elle fausse ?', ['oui, l’irréelle', 'non, les deux sont justes'], 1, 'Ce n’est pas une question de forme mais de message. EN: not form but message.', 'a7-lecture'),
        eS('Si le budget le permettait, nous changerons les fenêtres cette année.', 'Si le budget le permettait, nous changerions les fenêtres cette année.', 'Une moitié a bougé et l’autre est restée. EN: one half moved and the other did not.', 'a7-ecoute'),
        lC('Écoute. La perceuse est-elle arrivée ?', 'Si tu me prêtais ta perceuse, je finirais l’étagère ce soir.', ['oui', 'non'], 1, 'L’imparfait dit que non. EN: the imparfait says no.', 'a7-table'),
      ],
    },
    {
      id: 'r8-question', label: 'Le si qui demande', targets: ['question-conditionnee'],
      questions: [
        mc('Dans « Je me demande si tu viendras », que fait si ?', ['il pose une condition', 'il rapporte une question'], 1, 'Personne ne conditionne rien. EN: nothing is conditioned.', 'a8-cartes'),
        mc('Le futur est-il permis derrière ce si ?', ['oui', 'non'], 0, 'La règle dure ne concerne que le si de condition. EN: the hard rule covers conditions only.', 'a8-focus'),
        tI('Mets le verbe au futur : la question porte sur demain.', 'Je ne sais pas si elle (venir) demain.', 'Je ne sais pas si elle viendra demain.', 'Ce si rapporte une question, donc le futur passe. EN: this si reports a question.', 'a8-construire'),
        mc('Qu’est-ce qui te dit quel si tu as sous les yeux ?', ['la ponctuation', 'le verbe placé devant'], 1, 'Demander, savoir, vérifier, dire. EN: demander, savoir, vérifier, dire.', 'a8-check'),
        tI('Remplace la question directe par une question rapportée.', 'Je ne sais pas est-ce qu’elle viendra demain.', 'Je ne sais pas si elle viendra demain.', 'Est-ce que sert aux questions directes seulement. EN: est-ce que is for direct questions.', 'a8-erreurs'),
        mc('« Tu pars toujours si tôt. » Que veut dire si, ici ?', ['si conditionnel', 'whether', 'tellement'], 2, 'Devant un adverbe, si veut dire tellement. EN: before an adverb, si means so.', 'a8-cartes'),
        eS('Elle voudrait savoir que la salle est libre jeudi.', 'Elle voudrait savoir si la salle est libre jeudi.', 'Avec que elle affirme, avec si elle demande. EN: que asserts, si asks.', 'a8-exemples'),
        lC('Écoute. Cette phrase pose-t-elle une condition ?', 'Je me demande si le car sera complet.', ['oui', 'non, elle pose une question'], 1, 'Un futur derrière si, et c’est correct. EN: a future after si, and it is right.', 'a8-histoire'),
      ],
    },
    {
      id: 'r9-proposer', label: 'Proposer et abréger', targets: ['suggestion-au-present'],
      questions: [
        mc('Quelle forme sert à proposer une sortie ?', ['si on va', 'si on ira', 'si on allait'], 2, 'Si + on + imparfait, et la phrase s’arrête. EN: si plus on plus imparfait.', 'a9-cartes'),
        mc('Une proposition avec si a-t-elle une deuxième moitié ?', ['oui', 'non'], 1, 'C’est ce qui la distingue d’une condition. EN: that is what marks it out.', 'a9-check'),
        tI('Transforme en proposition.', 'On prend un café avant la réunion.', 'Si on prenait un café avant la réunion ?', 'L’imparfait rend la proposition légère. EN: the imparfait makes it light.', 'a9-construire'),
        mc('Peut-on écrire un futur derrière sinon ?', ['oui', 'non'], 0, 'Sinon est un mot entier, pas un si suivi d’un verbe. EN: sinon is a word of its own.', 'a9-construire'),
        tI('Complète la forme courte.', 'Envoyez le dossier avant vendredi, (si possible).', 'Envoyez le dossier avant vendredi, si possible.', 'Deux mots, et l’ordre devient un souhait. EN: two words turn the order into a wish.', 'a9-table'),
        mc('« Si vous voulez bien » pose-t-il une vraie condition ?', ['oui', 'non, c’est une politesse'], 1, 'Tu laisses la place de refuser, sans conditionner. EN: you leave room to refuse.', 'a9-flash'),
        eS('Si on va au cinéma ce soir ?', 'Si on allait au cinéma ce soir ?', 'Le présent sonne comme une condition inachevée. EN: the present sounds like an unfinished condition.', 'a9-histoire'),
        lC('Écoute. Que fait cette phrase ?', 'Et si on changeait de date ?', ['elle propose', 'elle conditionne'], 0, 'Et si relance une discussion avec une idée neuve. EN: et si offers an alternative.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-quand', label: 'Quand ou si', targets: ['quand-pour-si'],
      questions: [
        mc('Comment choisis-tu entre quand et si ?', ['selon la longueur', 'selon que le moment est garanti'], 1, 'Une date qu’on peut poser appelle quand. EN: a moment you can date calls for quand.', 'a10-focus'),
        mc('Quand prend quel temps dans sa propre moitié ?', ['le futur', 'le présent'], 0, 'Et si prend le présent dans la sienne. EN: and si takes the present in its own.', 'a10-check'),
        tI('Complète : le diplôme est certain.', 'Quand j’(avoir) mon diplôme, je chercherai un poste.', 'Quand j’aurai mon diplôme, je chercherai un poste.', 'Quand prend le futur des deux côtés. EN: quand takes the future twice.', 'a10-piege'),
        tI('Complète : le diplôme n’est pas garanti.', 'Si j’(avoir) mon diplôme, je chercherai un poste.', 'Si j’ai mon diplôme, je chercherai un poste.', 'Si ne prend jamais le futur. EN: si never takes the future.', 'a10-piege'),
        mc('Après « même si », le résultat dépend-il de la condition ?', ['oui', 'non, il arrive de toute façon'], 1, 'Même si concède, il ne conditionne pas. EN: même si concedes.', 'a10-construire'),
        tI('Complète la phrase de certitude.', 'Quand tu (être) prêt, fais-moi signe.', 'Quand tu seras prêt, fais-moi signe.', 'Tu seras prêt : c’est sûr, donc futur. EN: you will be ready, so the future.', 'a10-cartes'),
        eS('Si j’aurai mon diplôme, je chercherai un poste à l’étranger.', 'Si j’ai mon diplôme, je chercherai un poste à l’étranger.', 'Le diplôme n’est pas garanti, donc si, donc présent. EN: not guaranteed, so si, so present.', 'a10-lecture'),
        lC('Écoute. La pluie est-elle annoncée comme certaine ?', 'Quand il pleuvra, la route sera glissante.', ['oui', 'non'], 0, 'Quand annonce un moment qui viendra. EN: quand announces a moment that will come.', 'a10-exemples'),
      ],
    },
    {
      id: 'r11-regret', label: 'Le regret', targets: ['regret-mal-lu'],
      questions: [
        mc('« Si j’avais su, j’aurais pris un autre train. » Quel train a-t-elle pris ?', ['un autre', 'celui-là'], 1, 'La paire du regret dit l’inverse des faits. EN: the regret pair says the opposite of the facts.', 'a11-cartes'),
        mc('Combien de paires le système compte-t-il ?', ['une seule', 'deux', 'trois'], 2, 'Réelle, irréelle, et celle du regret. EN: real, unreal and regret.', 'a11-check'),
        mc('Que t’est-il demandé avec la troisième paire dans cette leçon ?', ['la reconnaître', 'la construire sans faute'], 0, 'La construire est le travail du B2. EN: building it is B2 work.', 'a11-reconnaitre'),
        tI('Écris ce qui s’est réellement passé.', 'Si nous étions partis plus tôt, nous aurions évité les bouchons. Donc nous (ne pas éviter) les bouchons.', 'Si nous étions partis plus tôt, nous aurions évité les bouchons. Donc nous n’avons pas évité les bouchons.', 'Le regret raconte toujours le contraire des faits. EN: the regret pair always inverts the facts.', 'a11-ecoute'),
        mc('« Si tu m’avais prévenu, je serais venu t’aider. » Est-il venu aider ?', ['oui', 'non'], 1, 'Personne ne l’a prévenu. EN: nobody warned him.', 'a11-histoire'),
        tI('Complète la paire irréelle du présent, pas celle du regret.', 'Si j’(avoir) le choix, je recommencerais tout.', 'Si j’avais le choix, je recommencerais tout.', 'Le conditionnel présent appelle l’imparfait. EN: the present conditional calls for the imparfait.', 'a11-reconnaitre'),
        eS('Si vous aviez réservé en janvier, vous auriez payé moitié prix, donc vous avez payé moitié prix.', 'Si vous aviez réservé en janvier, vous auriez payé moitié prix, donc vous avez payé plein tarif.', 'La paire du regret dit ce qui n’est pas arrivé. EN: the regret pair says what did not happen.', 'a11-exemples'),
        lC('Écoute. Le bail a-t-il été signé ?', 'Si j’avais su, je n’aurais jamais signé ce bail.', ['oui', 'non'], 0, 'Elle n’a pas su, donc elle a signé. EN: she did not know, so she signed.', 'a11-exemples'),
      ],
    },
    {
      id: 'r12-tout', label: 'Tout ensemble', targets: ['si-non-relu'],
      questions: [
        mc('Tu ouvres un message pour demander une salle. Quelle première phrase ?', ['Je vous écris si la salle est libre.', 'Je vous écris pour savoir si la salle est libre.'], 1, 'Une question rapportée, pas une condition. EN: a reported question, not a condition.', 'a12-plan'),
        tI('Complète la condition réelle.', 'Si la salle (être) disponible, nous confirmerons la date lundi.', 'Si la salle est disponible, nous confirmerons la date lundi.', 'La salle peut l’être : présent après si. EN: it really might be, so the present.', 'a12-usages'),
        tI('Complète la condition irréelle.', 'Si le budget ne (suffire) pas, nous demanderions une subvention.', 'Si le budget ne suffisait pas, nous demanderions une subvention.', 'Le conditionnel derrière appelle l’imparfait devant. EN: the conditional calls for the imparfait.', 'a12-scenario'),
        mc('Dans un message, qu’est-ce qui reste au présent ?', ['la condition réelle et le remerciement', 'la condition irréelle'], 0, 'Le merci est un fait, pas une hypothèse. EN: the thanks is a fact.', 'a12-lecture'),
        mc('Que relis-tu en dernier, avant d’envoyer ?', ['chaque si, et ce qui le suit', 'les majuscules'], 0, 'Un r derrière un si de condition est toujours une faute. EN: an r behind a conditional si is always an error.', 'a12-cheat'),
        tI('Écris la phrase de certitude.', 'Quand la convention (être) signée, nous préviendrons les familles.', 'Quand la convention sera signée, nous préviendrons les familles.', 'La signature est prévue : quand et futur. EN: the signing is planned.', 'a12-lecture'),
        eS('Si vous pourriez répondre avant vendredi, cela nous aiderait beaucoup.', 'Si vous pouviez répondre avant vendredi, cela nous aiderait beaucoup.', 'Pouvoir donne pouviez après si, jamais pourriez. EN: pouvoir gives pouviez after si.', 'a12-usages'),
        lC('Écoute. Cette phrase abrège-t-elle une condition ?', 'Sinon, nous garderions la date du mois prochain.', ['oui', 'non'], 0, 'Sinon veut dire « si ce n’est pas le cas », en un mot. EN: sinon means if that is not the case.', 'a12-scenario'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a12-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'la paire réelle', back: 'si + présent, puis futur', say: 'Si j’ai le temps, je passerai te voir.' },
    { front: 'la paire irréelle', back: 'si + imparfait, puis conditionnel', say: 'Si j’avais le temps, je passerais te voir.' },
    { front: 'la paire du regret', back: 'si + plus-que-parfait, puis conditionnel passé', say: 'Si j’avais su, j’aurais pris un autre train.' },
    { front: 'la règle dure', back: 'ni -rai ni -rais derrière si', say: 'Si nous partons tôt, nous éviterons les bouchons.' },
    { front: 'les trois suites', back: 'futur, présent ou impératif', say: 'Si tu as faim, prends du pain dans la cuisine.' },
    { front: 'la virgule', back: 'si devant, virgule ; si derrière, rien', say: 'Appelle-moi si tu as un problème.' },
    { front: 'si = whether', back: 'après demander, savoir, dire', say: 'Je me demande si le car sera complet.' },
    { front: 'la proposition', back: 'si + on + imparfait', say: 'Si on allait au cinéma ce soir ?' },
    { front: 'quand ou si', back: 'sûr et daté, ou seulement possible', say: 'Quand j’aurai mon diplôme, je chercherai un poste à l’étranger.' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Une paire, pas deux règles',
  body: `${REFRAME} Tu montes la paire réelle et la paire irréelle, tu les choisis selon ce qui est vrai, tu les écris dans les deux ordres, et tu lis la troisième sans l'avoir apprise. Tu sais aussi que si ne conditionne pas toujours : il demande, il propose et il adoucit. La prochaine leçon quitte le futur et prend les pronoms relatifs, qui et que. EN: Next lesson leaves the future behind and takes the relative pronouns.`,
  points: [
    'Deux paires à monter, une troisième à lire.',
    'Derrière un si de condition, jamais de -rai ni de -rais.',
    'L’ordre des moitiés est libre ; la virgule suit la moitié si.',
    'Le si de la question, lui, accepte le futur.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['paire', 'regle', 'question'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Écrire avec si',
    opener: {
      line: "À toi d’écrire : ce qui peut arriver, ce qui manque, ce que tu ne sais pas encore. EN: Your turn to write: what can happen, what is missing, and what you do not yet know.",
      imageRef: 'lessons/si-clauses/act12.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton propre message et passé l'examen : quatre-vingt-seize questions, douze rounds. EN: You wrote your own message and sat the exam: ninety-six questions, twelve rounds.",
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-parler', 'a12-cheat', 'a12-progress', 'a12-quiz', 'a12-review'],
  },
  sections: [
    A12_LECTURE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_TASK, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here (a `table` at layer core
 *  is refused by validateDensity). Every sheet is reachable from a mission
 *  through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-paires', 'Les trois paires', ['le système complet', 'le tableau', 'ce que chaque paire dit'], [
    teach('sheet-paires-teach', 'Un système, pas trois règles', `${REFRAME} Tu ne choisis pas deux temps l'un après l'autre : tu choisis une paire, une seule fois, en regardant à quelle distance du réel se trouve la situation. Proche, c'est la paire réelle. À côté, c'est la paire irréelle. Derrière, dans un passé qui n'a pas eu lieu, c'est la paire du regret, que tu lis sans encore la construire. EN: ${REFRAME_EN} Pick the pair by how far the situation is from what is real.`),
    table('sheet-paires-table', 'Les trois paires', ['Après si', 'Dans le résultat', 'Ce que ça dit', 'Exemple'], [
      ['présent', 'futur', 'ça peut arriver', 'Si j’ai le temps, je passerai te voir.'],
      ['présent', 'présent', 'c’est déjà ou toujours vrai', 'Si tu as faim, il y a du pain dans la cuisine.'],
      ['présent', 'impératif', 'fais-le', 'Si le voyant rouge s’allume, appelle le technicien.'],
      ['imparfait', 'conditionnel présent', 'ce n’est pas le cas', 'Si j’avais le temps, je passerais te voir.'],
      ['plus-que-parfait', 'conditionnel passé', 'ça n’a jamais eu lieu', 'Si j’avais su, j’aurais pris un autre train.'],
      ['futur ou conditionnel', 'rien', 'interdit', 'Aucune phrase française ne commence ainsi.'],
    ]),
    table('sheet-paires-message', 'Ce que ton lecteur entend', ['Tu écris', 'Il comprend'], [
      ['Si j’ai le temps, je passerai.', 'Garde-moi la place, ce n’est pas décidé.'],
      ['Si j’avais le temps, je passerais.', 'Je ne viendrai pas, mais je le dis gentiment.'],
      ['Si nous gagnons ce marché, nous ouvrirons.', 'Le dossier est déposé et on y croit.'],
      ['Si nous gagnions ce marché, nous ouvririons.', 'On rêve à voix haute.'],
      ['Si j’étais toi, je lirais le contrat.', 'Je te donne un conseil, la décision reste à toi.'],
      ['Si j’avais su, je n’aurais pas signé.', 'J’ai signé, et je le regrette.'],
    ]),
  ]),
  sheet('sheet-jamais', 'La règle dure', ['ce qui est interdit', 'les formes à corriger', 'la seule exception'], [
    teach('sheet-jamais-teach', 'Ni -rai, ni -rais derrière si', `Quand si pose une CONDITION, aucune forme en r ne le suit : ni le futur, ni le conditionnel. C'est la ligne que ${FUTUR_USE_REF} a ouverte : « ${B107_REFRAME} » Cette leçon l'étend au conditionnel, qui obéit exactement à la même interdiction. Une seule forme en r par phrase, et elle vit dans la moitié résultat. EN: ${B107_REFRAME_EN} The same ban covers the conditional.`),
    table('sheet-jamais-table', 'Corriger la moitié si', ['Interdit', 'Correct', 'Pourquoi'], [
      ['si je serai', 'si je suis', 'le futur appartient au résultat'],
      ['si je serais', 'si j’étais', 'le conditionnel aussi'],
      ['si j’aurai', 'si j’ai', 'avoir suit la même règle'],
      ['si j’aurais', 'si j’avais', 'la faute la plus célèbre du français'],
      ['si tu viendras', 'si tu viens', 'demain est déjà dans la phrase'],
      ['si vous pourriez', 'si vous pouviez', 'pouvoir donne pouviez après si'],
    ]),
    table('sheet-jamais-exception', 'La seule exception', ['Type de si', 'Futur permis ?', 'Exemple'], [
      ['si de condition', 'non', 'Si le car est complet, nous prendrons le train.'],
      ['si = whether', 'oui', 'Je me demande si le car sera complet.'],
      ['si = tellement', 'sans objet', 'Tu pars toujours si tôt.'],
      ['sinon', 'oui', 'Réponds avant ce soir, sinon la place sera prise.'],
      ['même si', 'non, présent', 'Même si le temps est mauvais, la course aura lieu.'],
      ['si + on, proposition', 'non, imparfait', 'Si on allait au cinéma ce soir ?'],
    ]),
  ]),
  sheet('sheet-suites', 'Les suites, l’ordre et quand', ['les trois suites', 'la virgule', 'quand contre si'], [
    teach('sheet-suites-teach', 'Ce qui peut suivre une condition réelle', "Après si + présent, trois choses peuvent venir : un futur pour ce qui arrivera, un présent pour ce qui est déjà vrai ou vrai chaque fois, un impératif pour ce qu'il faut faire. La moitié si, elle, ne bouge dans aucun des trois cas. L'ordre des deux moitiés est libre, et la virgule suit la moitié si quand elle ouvre la phrase. EN: three results, one unchanging condition, and a comma only when the si half comes first."),
    table('sheet-suites-table', 'Les trois suites', ['Résultat', 'Quand l’employer', 'Exemple'], [
      ['futur', 'ce qui arrivera après', 'Si le colis n’arrive pas lundi, nous vous rembourserons.'],
      ['présent, déjà vrai', 'l’information existe déjà', 'Si la réception est fermée, le code est sur la porte.'],
      ['présent, toujours vrai', 'une loi, une habitude', 'Si on chauffe trop l’eau, le thé devient amer.'],
      ['impératif tu', 'une consigne à quelqu’un', 'Si tu as faim, prends du pain dans la cuisine.'],
      ['impératif vous', 'une notice, un courriel', 'Si vous avez un doute, demandez confirmation par courriel.'],
      ['interdit', 'jamais après si', 'si tu auras, si tu aurais'],
    ]),
    table('sheet-suites-ordre', 'L’ordre et la virgule', ['Ordre', 'Ponctuation', 'Exemple'], [
      ['si devant', 'une virgule', 'Si tu as un problème, appelle-moi.'],
      ['si derrière', 'aucune', 'Appelle-moi si tu as un problème.'],
      ['si devant, paire irréelle', 'une virgule', 'Si j’avais un jour de congé, je viendrais avec toi.'],
      ['si derrière, paire irréelle', 'aucune', 'Je viendrais avec toi si j’avais un jour de congé.'],
    ]),
    table('sheet-suites-quand', 'Quand, si, même si', ['Mot', 'Ce qu’il annonce', 'Temps après lui'], [
      ['quand', 'un moment qui viendra', 'le futur'],
      ['si', 'un moment qui viendra peut-être', 'le présent'],
      ['même si', 'une situation acceptée', 'le présent'],
      ['sinon', 'la conséquence du contraire', 'le futur ou le conditionnel'],
    ]),
  ]),
  sheet('sheet-si-autres', 'Les si qui ne conditionnent rien', ['la question', 'la proposition', 'la politesse', 'les formes courtes'], [
    teach('sheet-si-autres-teach', 'Quatre autres métiers', `Si ne pose pas toujours une condition. Après demander, savoir, vérifier et dire, il rapporte une QUESTION, et le futur est permis derrière lui. Avec on et un imparfait, il PROPOSE, et la phrase s'arrête là. En fin de phrase, il ADOUCIT une demande. Et dans sinon, si oui, si possible et si jamais, il forme des blocs figés sans verbe. Le répertoire complet des demandes polies est ${POLI_REF}. EN: four jobs where si sets no condition at all.`),
    table('sheet-si-autres-table', 'Reconnaître le métier', ['Ce qui vient avant si', 'Métier', 'Exemple'], [
      ['demander, savoir, vérifier, dire', 'la question', 'Je me demande si le car sera complet.'],
      ['rien, puis on + imparfait', 'la proposition', 'Si on allait au cinéma ce soir ?'],
      ['et', 'la relance', 'Et si on changeait de date ?'],
      ['une demande complète', 'la politesse', 'Passez me voir demain, si vous voulez bien.'],
      ['un adjectif ou un adverbe derrière', 'tellement', 'Tu pars toujours si tôt.'],
      ['rien : un bloc figé', 'la forme courte', 'Réponds avant ce soir, sinon la place sera prise.'],
    ]),
    table('sheet-si-autres-courtes', 'Les formes courtes', ['Forme', 'Sens', 'Exemple'], [
      ['sinon', 'si ce n’est pas le cas', 'Sinon, nous garderions la date du mois prochain.'],
      ['si oui', 'si la réponse est oui', 'Si oui, je préparerai la liste des inscrits.'],
      ['si possible', 'si c’est faisable', 'Le prochain train, si possible.'],
      ['si jamais', 'au cas où', 'Si jamais tu passes par Nantes, préviens-moi.'],
      ['si tu veux', 'à ta convenance', 'On peut arriver une demi-heure en avance si tu veux.'],
      ['si vous voulez bien', 'avec votre accord', 'Passez me voir demain, si vous voulez bien.'],
    ]),
  ]),
  sheet('sheet-ecrire-si', 'Écrire un message avec si', ['le plan', 'la liste de contrôle'], [
    teach('sheet-ecrire-si-teach', 'Cinq phrases et une relecture', "Un message qui demande quelque chose tient en cinq phrases : pourquoi tu écris, ce qui arrivera si tout va bien, ce qui manque, ce que tu feras sinon, et ce qui est déjà sûr. Les trois premières portent chacune un si différent ; la quatrième abrège ; la cinquième prend quand. La relecture, elle, ne regarde qu'une chose : ce qui suit chaque si. EN: five sentences, then one reread that looks only at what follows each si."),
    table('sheet-ecrire-si-plan', 'Le plan', ['Phrase', 'Forme', 'Exemple'], [
      ['pourquoi tu écris', 'pour savoir si', 'Je vous écris pour savoir si le gymnase est libre.'],
      ['ce qui arrivera', 'si + présent, futur', 'Si la salle est disponible, nous confirmerons lundi.'],
      ['ce que tu demandes', 'si + imparfait, conditionnel', 'Si vous pouviez répondre avant vendredi, cela nous aiderait.'],
      ['le cas contraire', 'sinon', 'Sinon, nous garderions la date du mois prochain.'],
      ['ce qui est déjà sûr', 'quand + futur', 'Quand la convention sera signée, nous préviendrons les familles.'],
      ['la sortie', 'présent', 'Nous vous remercions d’avance de votre réponse.'],
    ]),
    table('sheet-ecrire-si-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Aucun r derrière si', 'Cherche chaque si et lis le mot d’après'],
      ['Les paires tiennent', 'Présent avec futur, imparfait avec conditionnel'],
      ['La virgule suit l’ordre', 'Si devant, virgule ; si derrière, rien'],
      ['La question est là', 'Une phrase avec savoir si ou se demander si'],
      ['Une forme courte', 'Sinon, si oui ou si possible, une fois'],
      ['Quand pour le certain', 'Ce qui est daté prend quand, pas si'],
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
  { id: 'd-paire', title: 'Possible ou pas', format: 'sort' as const, coach: 'Deux piles. Demande-toi si la condition peut encore se produire. EN: sort by whether the condition can still happen.', buckets: ['ça peut arriver', 'ce n’est pas le cas'], items: [E(1200), E(1201), E(1204), E(1205), E(1211), E(1212)], audio: AUDIO },
  { id: 'd-reel', title: 'Présent devant, futur derrière', format: 'mcq' as const, coach: 'La moitié si reste au présent, toujours. EN: the si half stays in the present.', q: 'Si tu réserves aujourd’hui, tu ... moins cher.', opts: ['paieras', 'paies'], correct: 0, why: 'Le futur vit dans la moitié résultat. EN: the future lives in the result half.', items: [E(1215), E(1216), E(1219), E(1221), E(1228), E(1229)], audio: AUDIO },
  { id: 'd-jamais', title: 'Cherche le r', format: 'mcq' as const, coach: 'Lis le mot juste après si. S’il porte un r de futur, efface-le. EN: read the word right after si.', q: 'Si vous ... notre offre, nous signerons cette semaine.', opts: ['accepterez', 'acceptez'], correct: 1, why: 'Accepter se fait maintenant, signer se fera après. EN: accepting is now.', items: [E(1230), E(1233), E(1236), E(1239), E(1240), E(1244)], audio: AUDIO },
  { id: 'd-suite', title: 'Trois suites', format: 'sort' as const, coach: 'Trois piles : ce qui arrivera, ce qui est déjà vrai, ce qu’il faut faire. EN: three piles, by what the result does.', buckets: ['ça arrivera', 'c’est déjà vrai', 'fais-le'], items: [E(1250), E(1246), E(1248), E(1255), E(1256), E(1254)], audio: AUDIO },
  { id: 'd-ordre', title: 'Devant ou derrière', format: 'mcq' as const, coach: 'Regarde laquelle des deux moitiés ouvre la phrase. EN: look at which half opens the sentence.', q: 'Appelle-moi si tu as un problème. Faut-il une virgule ?', opts: ['oui', 'non'], correct: 1, why: 'Si arrive en second : rien ne les sépare. EN: si comes second, so nothing separates them.', items: [E(1261), E(1262), E(1263), E(1264), E(1267), E(1275)], audio: AUDIO },
  { id: 'd-irreel', title: 'La paire ne se casse pas', format: 'mcq' as const, coach: 'Imparfait devant, conditionnel derrière, et jamais un seul des deux. EN: imparfait in front, conditional behind.', q: 'Si nous étions plus nombreux, nous ... un minibus.', opts: ['louerions', 'louerons'], correct: 0, why: 'Les deux moitiés bougent ensemble. EN: both halves move together.', items: [E(1276), E(1277), E(1282), E(1285), E(1289), E(1291)], audio: AUDIO },
  { id: 'd-choix', title: 'Ouverte ou fermée', format: 'sort' as const, coach: 'Une pile pour les portes ouvertes, une pour les refus polis. EN: open doors, or polite refusals.', buckets: ['la porte est ouverte', 'la porte est fermée'], items: [E(1292), E(1293), E(1296), E(1297), E(1304), E(1305)], audio: AUDIO },
  { id: 'd-question', title: 'Condition ou question', format: 'mcq' as const, coach: 'Regarde le verbe qui arrive AVANT si. EN: look at the verb in front of si.', q: 'Je me demande si le car ... complet.', opts: ['est', 'sera'], correct: 1, why: 'Ce si rapporte une question : le futur passe. EN: this si reports a question.', items: [E(1308), E(1309), E(1310), E(1314), E(1316), E(1320)], audio: AUDIO },
  { id: 'd-suggestion', title: 'Proposer, adoucir, abréger', format: 'flashcard' as const, coach: 'Pour chaque carte, dis la situation où tu l’emploierais. EN: for each card, say where you would use it.', items: [E(1322), E(1325), E(1326), E(1330), E(1332), E(1334)], audio: AUDIO },
  { id: 'd-quand', title: 'Sûr ou possible', format: 'mcq' as const, coach: 'Peux-tu poser une date ? Alors quand. Sinon, si. EN: can you put a date on it?', q: 'Quand j’... mon diplôme, je chercherai un poste.', opts: ['ai', 'aurai'], correct: 1, why: 'Quand prend le futur des deux côtés. EN: quand takes the future twice.', items: [E(1337), E(1338), E(1341), E(1344), E(1345), E(1346)], audio: AUDIO },
  { id: 'd-regret', title: 'Ce qui s’est vraiment passé', format: 'flashcard' as const, coach: 'Lis chaque phrase et dis ce qui est réellement arrivé. EN: read each one and say what really happened.', items: [E(1351), E(1352), E(1353), E(1355), E(1357), E(1360)], audio: AUDIO },
  { id: 'd-ecrire', title: 'Le message, phrase par phrase', format: 'flashcard' as const, coach: 'Lis chaque phrase et dis quel morceau du plan elle occupe. EN: name which part of the plan each sentence fills.', items: [E(1364), E(1366), E(1369), E(1370), E(1374), E(1377)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'mauvaise-paire', description: 'Picks the pair by habit rather than by the situation, so a possible plan is announced as impossible or a refusal reads as a promise.', detectOn: ['a1-scene', 'a1-trier', 'a1-check', 'a12-mission'], drill: 'd-paire', retest: 'd-paire' },
  { id: 'resultat-au-present', description: 'Leaves the result half in the present where the result is still ahead, so a promise about tomorrow reads as a habit.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a12-mission'], drill: 'd-reel', retest: 'd-reel' },
  { id: 'si-plus-r', description: 'Writes a future or a conditional directly after a conditional si, because both halves of the sentence are about the same future moment.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-jamais', retest: 'd-jamais' },
  { id: 'suite-unique', description: 'Uses the future for every result, so instructions become forecasts and facts that are already true are pushed into tomorrow.', detectOn: ['a4-construire', 'a4-choisir', 'a4-erreurs', 'a12-mission'], drill: 'd-suite', retest: 'd-suite' },
  { id: 'ordre-virgule', description: 'Punctuates by sentence length rather than by clause order, so a comma appears where si comes second and goes missing where si opens.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check'], drill: 'd-ordre', retest: 'd-ordre' },
  { id: 'paire-cassee', description: 'Moves one half of the pair and leaves the other, producing si plus imparfait with a future, or si plus present with a conditional.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a12-mission'], drill: 'd-irreel', retest: 'd-irreel' },
  { id: 'choix-par-defaut', description: 'Reaches for the same pair whatever the situation, usually the unreal one, so every plan in the message sounds like a daydream or a refusal.', detectOn: ['a7-choisir', 'a7-construire', 'a7-check', 'a12-mission'], drill: 'd-choix', retest: 'd-choix' },
  { id: 'question-conditionnee', description: 'Treats the si of a reported question as a condition and strips its future, or the reverse, and leaves a future after a real condition.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a12-mission'], drill: 'd-question', retest: 'd-question' },
  { id: 'suggestion-au-present', description: 'Suggests with si plus a present, or writes a second half after a suggestion, so the proposal reads as an unfinished condition.', detectOn: ['a9-construire', 'a9-ecoute', 'a9-check'], drill: 'd-suggestion', retest: 'd-suggestion' },
  { id: 'quand-pour-si', description: 'Uses si for something already dated and certain, or keeps the present after quand where French requires the future.', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-quand', retest: 'd-quand' },
  { id: 'regret-mal-lu', description: 'Reads si plus a pluperfect as a real possibility, so a sentence about what never happened is taken as a plan or an offer.', detectOn: ['a11-ecoute', 'a11-reconnaitre', 'a11-check'], drill: 'd-regret', retest: 'd-regret' },
  { id: 'si-non-relu', description: 'Sends a whole message without checking each si in turn, so one half-corrected sentence survives among several right ones.', detectOn: ['a12-mission', 'a12-plan', 'a12-scenario'], drill: 'd-ecrire', retest: 'd-ecrire' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-10-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-10-tableau': "The noticeboard text (act 1), one female French voice, one take, read at dictation pace. The three lines quoted from the board are read a shade flatter than the narration, so the learner hears a document being read out. Every final -rait and -rais is a clean [ɛ] with no audible t or s.",
  'rec-b1-10-tableau-relu': 'Mme Roussel and Ousmane rereading the board (act 2), two voices, one take. The three coach answers must be read with identical rhythm, because the mission claims they are three instances of one pattern.',
  'rec-b1-10-paire-reelle': 'The four real-pair cards (act 2). One coach voice. Card two carries the future and card one does not: do not help by stressing the -ras, because the learner is meant to find it from the word order.',
  'rec-b1-10-reelle-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Lines six and seven carry the elided s’il: read them naturally, with no pause at the apostrophe.',
  'rec-b1-10-courriel-corrige': "The corrected email story (act 3), one female French voice, one take, read at dictation pace. The quoted draft sentence with its error is read exactly like the correct ones: the point is that nothing in the sound gives it away.",
  'rec-b1-10-regle-dure': 'The four hard-rule cards (act 3). One voice. Card one holds « si je serai » and « si je serais » side by side and they must be read IDENTICALLY, because the card says the ear cannot separate them.',
  'rec-b1-10-piege-futur': "The audio step plays each card's CORRECT sentence. Six lines, same pace, same voice. The wrong versions in promptSound are NEVER spoken. Every r must be audible in the result half and absent from the si half.",
  'rec-b1-10-refuge': 'The refuge kitchen exchange (act 4), two voices, one take. The three coach answers begin with the same four words and must be read identically up to the comma, so that only the result half differs.',
  'rec-b1-10-retourne': 'Léa and Ousmane turning a sentence round (act 5), two voices, one take. The two versions of the sentence are read with the SAME pace; the comma version takes a small real pause and the other takes none.',
  'rec-b1-10-ordre': 'The four order cards (act 5). One voice. Card one pauses at the comma, card two does not. That single difference is the whole teaching, so it must be audible without being exaggerated.',
  'rec-b1-10-ordre-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational speed. The pause after a leading si half is the only cue the learner has, so it must be real and consistent across all four of them.',
  'rec-b1-10-minibus': 'The minibus conversation (act 6), two voices, one take. Everything is imagined, so the delivery stays light and quick; nothing here should sound like a decision or a complaint.',
  'rec-b1-10-paire-irreelle': 'The four unreal-pair cards (act 6). One coach voice. The imparfait forms must not be read as past narration: they are level and matter of fact, because the card says they are not about the past.',
  'rec-b1-10-irreelle-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order. The real and unreal pairs alternate, and the only cue is the verb after si, so no line may be given extra emphasis.',
  'rec-b1-10-piege-irreel': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The broken-pair versions in promptSound are never spoken.",
  'rec-b1-10-deux-reponses': "The two replies (act 7), one voice, read as someone reading messages aloud rather than performing them. Ousmane's line and Léa's line differ by two syllables and must otherwise be read identically.",
  'rec-b1-10-choix': 'The four choice cards (act 7). One voice. Cards one and two are the same sentence in two pairs: read them at the same speed, with no helpful stress on ai or avais.',
  'rec-b1-10-choix-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. The eight lines are four minimal pairs; the learner answers from the verb after si, so nothing else may vary.',
  'rec-b1-10-gare': 'The station phone call (act 8), two voices, one take. Line three carries a future straight after si and must be read completely normally: the mission only works if nothing in the delivery flags it as special.',
  'rec-b1-10-deux-si': 'The four two-si cards (act 8). One voice. Cards one and two both begin with si and must open identically, because the difference is entirely in what came before.',
  'rec-b1-10-soiree': 'The evening conversation (act 9), two voices, one take. The suggestions rise at the end like questions, and the polite si vous voulez bien falls: that contour difference is the teaching.',
  'rec-b1-10-proposer': 'The four suggestion cards (act 9). One voice. Cards one and two rise; cards three and four are level. No sarcasm anywhere: these are ordinary forms, not performances.',
  'rec-b1-10-proposer-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order. Three jobs are mixed here (suggestion, politeness, consequence) and the intonation is the only cue, so it must be natural and consistent.',
  'rec-b1-10-lettres': "The two application letters (act 10), one voice, read as someone reading documents aloud. « Quand j'aurai » and « Si j'ai » must be given the same weight, because the lesson claims the difference is grammatical and not emphatic.",
  'rec-b1-10-quand-si': 'The four quand and si cards (act 10). One voice. Card three holds the minimal pair and both halves are read at identical speed.',
  'rec-b1-10-piege-quand': "The audio step plays each card's CORRECT sentence. Six lines, one voice, level. Three begin with quand and three with si, and they are read exactly alike.",
  'rec-b1-10-crayon': 'The pencil line on the board (act 11), two voices, one take. The coach is unhurried: the whole act is permission not to learn something yet, and it must not sound like a warning.',
  'rec-b1-10-regret': 'The four regret cards (act 11). One voice, level and unsentimental. A conditionnel passé is not a sigh: the French does the work, and the reading does not.',
  'rec-b1-10-regret-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. Every line is the same pattern, so the learner is listening for meaning and not for form; no line may be dramatised.',
  'rec-b1-10-modele': 'The model message (act 12), one voice, read as someone reading a message aloud rather than performing it. The five parts must be audible through the pauses: why I write, what will happen, what I am asking, the alternative, and what is already settled.',
};

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 10',
  intro: 'You already build the future, the conditional and the imparfait. This lesson is about the one word that decides which of them you may use: si. French treats a si sentence as a matched pair, so you choose the pair once, by how far the situation is from what is real, and both tenses follow. The rule that costs English speakers most is the shortest one in the language: after a conditional si, never a future and never a conditional.',
  skill: 'PE',
  grammarAssumed: [IMP_FORM_UNIT, FUTUR_REG_UNIT, FUTUR_IRR_UNIT, FUTUR_USE_UNIT, COND_UNIT, MODAUX_UNIT, TIME_PREP_UNIT],
  grammarIntroduced: [
    'The si system as one system of matched pairs rather than three separate rules',
    'The real condition: si plus the present, with a future, a present or an imperative in the result half',
    'The absolute rule that a conditional si is never followed by a future or a conditional',
    'The present-unreal condition: si plus the imparfait, with the present conditional in the result half',
    'Either clause order, and the comma that follows from it',
    'Choosing between the real and the unreal pair for the same situation, and what each implies to the reader',
    'si as an indirect question after demander, savoir, vérifier and dire, where a future is allowed',
    'si plus on plus the imparfait as a suggestion with no result half',
    'The polite si (si vous voulez bien, si tout le monde est d’accord) and the short forms si oui, sinon, si possible and si jamais',
    'quand against si as dated certainty against open possibility',
    'RECOGNITION ONLY: si plus the plus-que-parfait with the conditionnel passé, for a past that never happened',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais déjà construire le futur, le conditionnel et l'imparfait. Cette leçon parle du mot qui décide lequel tu as le droit d'employer : si. En français, une phrase avec si est une paire. Tu choisis la paire une seule fois, selon la distance entre la situation et le réel, et les deux temps suivent. La règle qui coûte le plus cher aux anglophones est aussi la plus courte : derrière un si de condition, jamais de futur et jamais de conditionnel.",
    minutes: 130,
    difficulty: 3,
    glyph: 'si',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: SI_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, READING_SORTIE, READING_MODELE, dicteeFor };
