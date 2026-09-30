// b2.12.l1 « Le gérondif »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.07 futur antérieur),
// under the B2 rules of B2-BUILD-LOG.md (form, meaning, choice, text).
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
//   drill where the MEANING or the SUBJECT picks the form), trap (trapDrill
//   stepped or commonErrors), then from act 3 on the form INSIDE A TEXT of
//   60 to 120 words (complete, rewrite or correct), then the gated act check.
//
//    1  Un seul sujet, deux actions   6   meet the gérondif and the reframe:
//                                          the dangling « un contrôleur m'a
//                                          demandé » in the scene
//    2  La forme                      8   en + participe présent from the nous
//                                          stem (lesson 1 in B1's recipe);
//                                          mangeant, commençant; invariable
//    3  Trois à part, et les ajouts   7   ayant, étant, sachant; pronominals;
//                                          object pronouns; negation; « en
//                                          ayant fini » (recognition only)
//    4  En même temps                 8   simultaneity and the moment, against
//                                          pendant que / quand with two
//                                          subjects (lesson 31 in B1)
//    5  Comment ?                     8   manner and means, against avec /
//                                          par + nom and against simultaneity
//    6  Si : la condition             7   en partant tôt = si tu pars tôt;
//                                          main clause in the futur, présent,
//                                          impératif, conditionnel (lessons 10
//                                          in B1 and 2 in B2)
//    7  Parce que : la cause          7   en voulant aider; one form, several
//                                          readings; against comme, parce que
//    8  Tout en : l'opposition        7   tout en = bien que (lesson 32 in
//                                          B1), and tout en for two things at
//                                          once
//    9  Le sujet qui manque           8   subject control, the dangling
//                                          gérondif and its two repairs; « qui
//                                          sortait » against « en sortant »
//   10  La place et les faux amis     7   position and comma; en attendant,
//                                          soit dit en passant; en tout cas
//                                          and en tant que are NOT gérondifs
//   11  Tes conseils                   11  model, plan, role play, TASK, quiz
//
//   TOTAL 84 missions, 11 acts. Corpus: 161 authored rows (.1600-.1783) in
//   eleven blocks plus 28 reused seed rows, released act by act through
//   `deckTranche`. Quiz: 12 rounds of 8 (one per act 1 to 10, a recycling
//   round citing lessons 1, 10, 31 and 32 in B1 and 2 and 6 in B2, an
//   exam-format round). Chapter artwork: `gerondif-image-prompts.md`, eleven
//   prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (a later lesson may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le gérondif n'a pas de sujet à lui : il prend celui du verbe principal. »
//   EN: The gérondif has no subject of its own: it takes the main verb's.
//
//   ONE METAPHOR, LE SUJET PRÊTÉ: the gérondif borrows its subject. That one
//   fact explains the invariable form, the pronoun of a pronominal (en ME
//   levant, j'ai...), when a clause can become a gérondif (one subject), and
//   the dangling error. The meaning (time, manner, means, condition, cause,
//   opposition) is not in the form: the sentence supplies it. Rejected
//   candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the gérondif: its form (nous stem, ayant / étant / sachant,
//           pronominals, object pronouns, negation, the rare passé form for
//           recognition), its five meanings each set against the clause it
//           replaces, subject control and the dangling gérondif, position
//           and punctuation, register, the fixed phrases en attendant and
//           soit dit en passant, and the false leads en tout cas, en tant que.
//   QUOTES  the reframes of lessons 1, 10, 31 and 32 in B1 and lessons 2 and
//           6 in B2, re-exported from their corpus files; rows of lessons
//           1, 10, 23, 27, 31, 32 and 34 in B1 and 2, 5, 6, 23, 24 and 26 in
//           B2 (and a few A1 and A2 rows) reused BY ID.
//   LEAVES  the participe présent WITHOUT en and the verbal adjective to a
//           later lesson, named without a number because its trail position
//           is not occupied in this publish (act 2 card 2, act 10, roundup).
//           « Après avoir + participe » is shown once as the everyday
//           alternative to « en ayant fini » and never practised.
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
//   changes, no `why` names a position), as b2.07 does. No dangling
//   gérondif is ever a corpus row (corpus §A.7).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. TWELVE quiz rounds (96 questions): ten act rounds, one recycling round
//      and one exam-format round, as lessons 1 and 7 in B2.
//   2. THE PROVERB EXCEPTION. Act 9 accepts « L'appétit vient en mangeant »
//      and letter formulas (« En vous remerciant par avance, je vous prie… »)
//      as fixed uses where the subject is general or is the writer. The task
//      grader does not penalise the letter formula. Keep, or teach the strict
//      rule only?
//   3. « EN ATTENDANT » alone (meanwhile) is taught as a former gérondif that
//      became a fixed phrase, not as a false lead. En tout cas and en tant
//      que are the false leads. Agree with the split?
//   4. THE TASK offers two framings of one genre (advice to a newcomer on
//      learning the language OR on settling in a new city), 180 to 250
//      words, FIVE criteria (tâche 3, cohérence 3, étendue 2, correction 2,
//      registre 2 = 12), as lessons 1 and 7 in B2. Annotation block inside
//      `modelAnswer`.
//   5. NO verbCheck on the fifteen form cards (the conjugator key for a
//      gérondif is unproven in the publish gate, as lesson 7 in B2 decided).
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
  LECTURE_BLOG, LECTURE_FAITS, LECTURE_MODELE,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10,
  B101_REFRAME, B101_REFRAME_EN, B110_REFRAME, B110_REFRAME_EN, B131_REFRAME, B131_REFRAME_EN,
  B132_REFRAME, B132_REFRAME_EN, B202_REFRAME, B202_REFRAME_EN, B206_REFRAME, B206_REFRAME_EN,
  IMP_FORM_UNIT, SI_UNIT, SUBORD_UNIT, CONCESSION_UNIT, COND_PASSE_UNIT,
  IMP_FORM_REF, SI_REF, SUBORD_REF, CONCESSION_REF, COND_PASSE_REF, MODES_REF,
  ARGU_REF, LECTURE_REF, NEGO_REF, LATER_REF,
} from './gerondif-corpus.ts';
import { GERONDIF_TERMS } from './gerondif-terms.ts';

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
const PF = (n: number) => `fr.b1.projets-et-futur.${n}`;

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.12: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.12: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.12: no respell on ${id}`);
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

/** THE « IN A TEXT » BEAT that closes acts 3 to 10: one paragraph of 60 to
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
 *  ACT 1: UN SEUL SUJET, DEUX ACTIONS
 *
 *  Meet the gérondif, and the one rule under it. The scene's wrong option is
 *  the English habit (« Leaving the metro, an inspector stopped me »): the
 *  French reads it as the inspector leaving the metro. NO « ? » OR « ! » IN
 *  ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const DANGLING_METRO = {
  fr: "En sortant du métro, un contrôleur m'a demandé mon billet.",
  ipa: '/ɑ̃ sɔʁ.tɑ̃ dy me.tʁo œ̃ kɔ̃.tʁo.lœʁ ma də.mɑ̃.de mɔ̃ bi.jɛ/',
  respell: '[ahⁿ sor-tahⁿ dü may-TROH | uhⁿ kohⁿ-troh-LUHR | ma duh-mahⁿ-DAY mohⁿ bee-YEH]',
  en: 'As he came out of the metro, an inspector asked me for my ticket.',
};

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le message à l’équipe',
  frSub: 'Qui sortait du métro',
  setting: { place: 'Une agence de traduction, rue Saint-Denis', city: 'Montréal', time: 'lundi, 9 h 20', ambience: 'des bureaux ouverts, des écrans, un café qui refroidit' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, ta deuxième semaine dans une agence de traduction. Tu arrives avec vingt minutes de retard. Julie, ta responsable, t'attend près de la machine à café.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Julie',
      fr: "Bonjour. La réunion a commencé sans toi, j'imagine que tu as eu un souci.",
      en: 'Hello. The meeting started without you; I imagine you had a problem.',
      respell: '[bohⁿ-ZHOOR | la ray-ü-NYOHⁿ a ko-mahⁿ-SAY sahⁿ TWA | zhee-ma-ZHEEN | kuh tü a ü uhⁿ soo-SEE]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Oui, désolé. Il y avait des contrôles à la station Berri.',
      en: 'Yes, sorry. There were ticket checks at Berri station.',
      respell: '[wee | day-zo-LAY | eel ya-veh day kohⁿ-TROL | a la sta-syohⁿ beh-REE]',
      stage: 'Julie te demande de l’écrire en une phrase dans le canal de l’équipe.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: 'Tu ouvres le canal de l’équipe. Tes collègues vont lire ta phrase entre deux dossiers, sans te demander de précisions.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Quelle phrase dit clairement que c’est toi qui sortais du métro.',
      size: 'lg',
      options: [
        { fr: DANGLING_METRO.fr, respell: DANGLING_METRO.respell, en: DANGLING_METRO.en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1600)), respell: rsOf(E(1600)), en: en(E(1600)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Tout le monde comprend : c’est toi qui sortais, et c’est toi qui as passé le contrôle. Julie met un pouce levé.',
        breaks: 'Julie sourit. Dans ta phrase, c’est le contrôleur qui sortait du métro. Deux collègues imaginent un contrôleur pressé de rentrer chez lui.',
      },
    },
    {
      kind: 'break',
      heading: 'Le gérondif a pris le mauvais sujet',
      body: "Le gérondif n'a pas de sujet à lui : il prend celui du verbe principal. Avec « un contrôleur m'a demandé », c'est le contrôleur qui sort du métro. EN: The gérondif borrows the main verb's subject, so the inspector was the one leaving.",
      wrong: { fr: DANGLING_METRO.fr, ipa: DANGLING_METRO.ipa, respell: DANGLING_METRO.respell, en: DANGLING_METRO.en },
      right: { fr: fr(E(1600)), ipa: ipaOf(E(1600)), respell: rsOf(E(1600)), en: en(E(1600)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Le gérondif est partout en français, à l'oral comme à l'écrit. Cette leçon t'apprend à le former, à lui faire dire le moment, la manière, la condition, la cause ou l'opposition, et à ne jamais lui prêter le mauvais sujet.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['sujet'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Former le gérondif sans hésiter', s: 'Actes 2 et 3 : le radical du nous, ayant, étant, sachant, les pronoms' },
    { t: 'Lui faire dire le bon sens', s: 'Actes 4 à 8 : en même temps, comment, si, parce que, tout en' },
    { t: 'Lui donner le bon sujet', s: 'Actes 9 et 10 : le sujet qui manque, la place, les faux amis' },
    { t: 'Écrire des conseils de 200 mots', s: 'Acte 11 : ton texte pour un nouvel arrivant' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Six mois à Montréal',
  frSub: 'Lis, et cherche en devant un verbe en -ant',
  text: LECTURE_BLOG,
  glossary: [
    { word: 'le dépanneur', en: 'the corner shop', note: 'Au Québec, la petite épicerie du quartier, ouverte tard.' },
    { word: 'magasiner', en: 'to go shopping', note: 'Au Québec : faire les magasins.' },
    { word: 'grelotté', en: 'shivered', note: 'Grelotter : trembler de froid.' },
  ],
  questions: [
    { q: 'Global : à quoi sert ce billet de blog ?', a: "À donner des conseils à ceux qui arrivent à Montréal, à partir de l'expérience de l'autrice pendant ses six premiers mois." },
    { q: 'Détail : comment a-t-elle appris le vocabulaire québécois ?', a: "En écoutant ses collègues à la pause et en se trompant : deux gérondifs qui disent le moyen." },
    { q: '« En achetant votre manteau dès octobre, vous paierez moins cher » : par quelle conjonction pourrais-tu remplacer le gérondif ?', a: "Par si : si vous achetez votre manteau dès octobre. Le gérondif dit ici une condition." },
    { q: 'Inférence : que veut dire « tout en sachant que l’adaptation prend du temps » ?', a: "Elle le savait, et pourtant elle a eu envie d'abandonner : tout en marque une opposition, comme bien que." },
    { q: 'Dans la dernière phrase, qui sort du métro Mont-Royal ?', a: "Vous, le lecteur : le sujet de « croisez » est vous, et le gérondif prend ce sujet." },
    { q: 'Position : quel ton l’autrice prend-elle avec ses lecteurs ?', a: "Un ton amical et bienveillant, avec de l'humour sur ses propres erreurs (les fous rires, le froid de janvier)." },
  ],
  audio: REC('rec-b2-12-blog'),
  say: REFRAME,
  terms: ['sujet', 'maniere'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère le gérondif et son sujet',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Un sujet, deux actions', [
      it(E(1601), 'j’écoute, j’apprends'),
      it(E(1604), 'je vais au travail, je lis'),
      it(E(1605), 'je prends le métro, je gagne une heure'),
      it(E(1609), 'j’attends, je révise'),
    ], chk('Dans ces quatre phrases, qui fait l’action du gérondif ?',
      ['le sujet du verbe principal', 'une autre personne', 'on ne peut pas le savoir'], 0,
      'Le gérondif prend toujours le sujet du verbe principal : ici, je. EN: always the main subject.')),
    grp('Un sujet ou deux', [
      it('fr.b1.journalisme.1066', 'moi qui marche, moi qui écoute'),
      it(CL(1333), 'toi qui cuisines, moi qui mets la table'),
      it(E(1610), 'lui qui entre, lui qui court'),
      it(E(1611), 'lui qui veut aider, lui qui casse'),
    ], chk('« Pendant que tu cuisines, je mets la table. » Peut-on dire « en cuisinant, je mets la table » ?',
      ['non, ce serait moi qui cuisine', 'oui, c’est la même chose'], 0,
      'Deux personnes, deux sujets : pendant que reste. EN: two subjects keep pendant que.')),
    ctl('Le sens', '« En achetant ton manteau en octobre, tu paieras moins cher. » Le gérondif dit…',
      ['une condition', 'une cause passée', 'une manière de marcher'], 0,
      'Si tu achètes ton manteau en octobre : une condition. EN: a condition.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet', 'simultane'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où le mauvais sujet coûte cher',
  cases: [
    { situation: 'Tu expliques un retard à ton équipe', fr: fr(E(1600)), en: en(E(1600)) },
    { situation: 'Tu conseilles un nouveau collègue', fr: fr(E(1613)), en: en(E(1613)) },
    { situation: 'Tu aides quelqu’un à remplir un dossier', fr: fr(E(1612)), en: en(E(1612)) },
    { situation: 'Tu racontes une maladresse', fr: fr(E(1611)), en: en(E(1611)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La forme', 'Un gérondif, c’est…',
    ['en + un verbe en -ant', 'en + un nom', 'un verbe en -ant tout seul'], 0,
    'En, puis le participe présent : en sortant. EN: en plus the -ant form.'),
  ctl('Le sujet', '« En sortant du métro, j’ai dû passer un contrôle. » Qui sortait ?',
    ['moi', 'le contrôleur'], 0,
    'Le sujet de « j’ai dû » : moi. EN: the main subject, me.'),
  ctl('Le sens', 'Le sens du gérondif (moment, manière, condition…), c’est…',
    ['la phrase qui le donne', 'la terminaison qui le donne'], 0,
    'La forme est toujours la même ; le contexte choisit le sens. EN: the sentence gives the meaning.'),
], ['sujet']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Un seul sujet, deux actions',
    opener: {
      line: "Tu sortais du métro, et soudain le contrôleur aussi : ici tu découvres la forme qui emprunte son sujet au verbe principal. EN: You were leaving the metro, and suddenly so was the inspector: here you meet the form that borrows the main verb's subject.",
      imageRef: 'lessons/gerondif/act01.jpg',
    },
    sections: [],
    milestone: "Tu repères un gérondif dans un texte et tu sais qui fait son action : le sujet du verbe principal. EN: You can spot a gérondif and say who does its action.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: LA FORME
 *
 *  Form, briefly: the nous stem is lesson 1 in B1's recipe, with -ant for
 *  the imparfait endings. Spelling (e, ç), invariability.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà',
  frSub: 'La recette de l’imparfait, avec -ant',
  hint: 'Quatre cartes. Tu connais déjà le radical.',
  audio: REC('rec-b2-12-forme'),
  say: REFRAME,
  terms: ['radical'],
  cards: [
    {
      head: 'Pars de nous', label: Cap(IMP_FORM_REF),
      fr: 'nous finissons > en finissant',
      sub: '[noo fee-nee-SOHⁿ] · [ahⁿ fee-nee-SAHⁿ]',
      body: `« ${B101_REFRAME} » Même recette, mais la fin est -ant, pour toutes les personnes. EN: ${B101_REFRAME_EN}`,
    },
    {
      head: 'En devant, toujours', label: 'le gérondif',
      fr: fr(E(1628)), sub: rsOf(E(1628)),
      body: `Le gérondif, c'est en + le participe présent. Le participe seul, sans en, est une autre forme, que tu verras dans ${LATER_REF}. EN: the gérondif always starts with en.`,
    },
    {
      head: 'Le e et le ç restent', label: 'l’orthographe',
      fr: 'en mangeant · en commençant',
      sub: '[ahⁿ mahⁿ-ZHAHⁿ] · [ahⁿ ko-mahⁿ-SAHⁿ]',
      body: "Nous mangeons, nous commençons : le e et le ç du nous restent devant -ant, pour garder les sons [ʒ] et [s]. EN: keep the e and the ç of nous.",
    },
    {
      head: 'Rien ne s’accorde', label: 'invariable',
      fr: fr(E(1632)), sub: rsOf(E(1632)),
      body: "Sorties s'accorde avec elles. En riant ne bouge pas : le gérondif n'a pas de sujet à lui, donc rien avec quoi s'accorder. EN: the gérondif never agrees.",
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-forme',
  title: 'Six verbes, une recette',
  cols: ['Verbe', 'au présent', 'gérondif'],
  rows: [
    { cells: ['parler', 'nous parlons', 'en parlant'], say: fr(E(1613)),
      detail: { title: 'parler', body: "Les verbes en -er : parl-ons, donc parlant. Aucune surprise. EN: -er verbs are regular.", say: fr(E(1616)) } },
    { cells: ['finir', 'nous finissons', 'en finissant'], say: fr(E(1638)),
      detail: { title: 'finir', body: "Le -iss- du nous reste : finissant, choisissant, réussissant. EN: keep the -iss-.", say: fr(E(1617)) } },
    { cells: ['prendre', 'nous prenons', 'en prenant'], say: fr(E(1605)),
      detail: { title: 'prendre', body: "Prenons, un seul n : prenant. Apprendre et comprendre suivent. EN: one n, from prenons.", say: fr(E(1618)) } },
    { cells: ['faire', 'nous faisons', 'en faisant'], say: fr(E(1628)),
      detail: { title: 'faire', body: "Faisant s'écrit ai, mais se dit [fə] : la même chose qu'à l'imparfait, faisais. EN: written ai, said [fə].", say: fr(E(1619)) } },
    { cells: ['voir', 'nous voyons', 'en voyant'], say: fr(E(1633)),
      detail: { title: 'voir', body: "Voyons donne voyant, avec le y. Croire et envoyer font pareil : croyant, envoyant. EN: the y of voyons stays.", say: fr(E(1620)) } },
    { cells: ['manger', 'nous mangeons', 'en mangeant'], say: fr(E(1630)),
      detail: { title: 'manger', body: "Le e reste devant -ant : mangeant, voyageant, nageant. Sans lui, on lirait [g]. EN: keep the e.", say: fr(E(1622)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical'],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Du nous au gérondif',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le radical du nous', [
      it(E(1617), 'nous finissons'),
      it(E(1618), 'nous prenons'),
      it(E(1619), 'nous faisons'),
      it(E(1620), 'nous voyons'),
    ], chk('Nous buvons donne…',
      ['en buvant', 'en boivant', 'en boyant'], 0,
      'Le radical du nous : buv-, puis -ant. EN: from nous buvons.')),
    grp('L’orthographe', [
      it(E(1622), 'le e de mangeons'),
      it(E(1623), 'le ç de commençons'),
      it(E(1637), 'le e de voyageons'),
      it(E(1638), 'le -iss- de choisissons'),
    ], chk('Nager, au gérondif :',
      ['en nagant', 'en nageant'], 1,
      'Nous nageons : le e reste, sinon on lirait [g]. EN: keep the e.')),
    ctl('Invariable', '« Elles sont sorties en … »',
      ['riantes', 'riant'], 1,
      'Le gérondif ne s’accorde jamais. EN: it never agrees.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le gérondif à l’oreille',
  frSub: 'Huit phrases, un son qui revient',
  lines: [
    ln(E(1628)), ln(E(1629)), ln(E(1630)), ln(E(1631)),
    ln(E(1632)), ln(E(1633)), ln(E(1634)), ln('fr.b1.journalisme.1066'),
  ],
  questions: [
    { q: 'Première phrase : que fait-elle en même temps qu’elle chante ?', opts: ['la vaisselle', 'la cuisine'], correct: 0, why: 'En faisant la vaisselle. EN: the dishes.' },
    { q: 'Deuxième phrase : que faisait-il quand il s’est endormi ?', opts: ['il lisait', 'il regardait un film'], correct: 0, why: 'En lisant : il lisait. EN: he was reading.' },
    { q: 'Quatrième phrase : avant quelle heure finiras-tu ?', opts: ['midi', 'dix heures', 'minuit'], correct: 0, why: 'Avant midi, en commençant tôt. EN: before noon.' },
    { q: 'Cinquième phrase : comment sont-elles sorties ?', opts: ['en riant', 'en pleurant'], correct: 0, why: 'En riant, sans accord. EN: laughing.' },
    { q: 'Dernière phrase : que fait la personne pendant qu’elle marche ?', opts: ['elle écoute un balado', 'elle téléphone'], correct: 0, why: 'Un balado, c’est un podcast au Québec. EN: she listens to a podcast.' },
  ],
  audio: REC('rec-b2-12-forme-ecoute'),
  say: REFRAME,
  terms: ['radical'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de forme',
  errors: [
    {
      wrong: 'Elle chante en faire la vaisselle.',
      right: fr(E(1628)),
      why: "Normal : après pour ou sans, le français met l'infinitif. En est l'exception : il veut la forme en -ant. EN: en takes the -ant form, not the infinitive.",
    },
    {
      wrong: 'Nous avons discuté en mangant.',
      right: fr(E(1630)),
      why: "Normal : la recette dit de couper -ons. Mais le e de mangeons reste, sinon on lirait [g]. EN: keep the e of mangeons.",
    },
    {
      wrong: 'Elles sont sorties en riantes.',
      right: fr(E(1632)),
      why: "Normal : sorties s'accorde, alors riant semble devoir suivre. Le gérondif, lui, n'a pas de sujet à lui : rien à accorder. EN: the gérondif is invariable.",
    },
    {
      wrong: 'Tu progresseras écrivant un peu chaque jour.',
      right: fr(E(1634)),
      why: "Normal : l'anglais dit by writing, et by ne se voit pas dans la forme. En français, sans en, ce n'est plus un gérondif. EN: keep en.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Le e et le ç, à toi de les voir',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical'],
};

const A2_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a2-flash',
  layer: 'core',
  title: 'Huit formes à avoir en bouche',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'by speaking', back: 'en parlant', say: fr(E(1613)) },
    { front: 'while doing', back: 'en faisant', say: fr(E(1628)) },
    { front: 'while eating', back: 'en mangeant', say: fr(E(1630)) },
    { front: 'by starting', back: 'en commençant', say: fr(E(1631)) },
    { front: 'on seeing him', back: 'en le voyant', say: fr(E(1633)) },
    { front: 'by writing', back: 'en écrivant', say: fr(E(1634)) },
    { front: 'laughing', back: 'en riant', say: fr(E(1632)) },
    { front: 'by travelling', back: 'en voyageant', say: fr(E(1637)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La recette', 'Pour former le participe présent, tu pars de…',
    ['l’infinitif', 'nous au présent', 'je au présent'], 1,
    'Nous au présent : tu coupes -ons, tu ajoutes -ant. EN: from nous.'),
  ctl('L’orthographe', 'Commencer, au gérondif :',
    ['en commençant', 'en commencent'], 0,
    'Le ç du nous reste, et la fin est -ant. EN: keep the ç; -ant.'),
  ctl('L’accord', '« Ils sont partis en … »',
    ['courants', 'courant'], 1,
    'Invariable : en courant. EN: never agrees.'),
], ['radical']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La forme',
    opener: {
      line: "Nous finissons, en finissant : ici tu fabriques le gérondif avec une recette que tu connais depuis l'imparfait. EN: Nous finissons, en finissant: here you build the gérondif with a recipe you know from the imparfait.",
      imageRef: 'lessons/gerondif/act02.jpg',
    },
    sections: [],
    milestone: "Tu formes le gérondif à partir du nous, avec le e et le ç qui restent, et tu ne l'accordes jamais. EN: You can build the gérondif from nous, keep its spelling and never make it agree.",
    estScreens: 38, restPoints: ['a2-table', 'a2-ecoute'],
  },
  sections: [A2_RAPPEL, A2_TABLE, A2_CONSTRUIRE, A2_ECOUTE, A2_ERREURS, A2_DICTEE, A2_FLASH, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: TROIS À PART, ET LES AJOUTS
 *
 *  ayant, étant, sachant; the pronoun of a pronominal follows the main
 *  subject; object pronouns between en and the participle; negation; the
 *  passé form for recognition only.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'Les notes de Samir',
  frSub: 'Un premier jour au bureau',
  setting: 'Lyon. Samir commence lundi dans un cabinet d’architectes. La veille, il écrit ses bonnes résolutions ; sa sœur Nour, professeure de français, relit par-dessus son épaule.',
  bubbles: [
    { from: 'narrator', fr: 'Samir écrit vite, et Nour regarde surtout les formes en -ant.', en: 'Samir writes fast, and Nour looks mostly at the -ant forms.' },
    { from: 'user', fr: "En ayant un peu de patience, j'y arriverai.", en: 'With a little patience, I will get there.' },
    { from: 'coach', fr: 'Ayant, pour avoir. Avant, avec un v, serait un tout autre mot.', en: 'Ayant, for avoir. Avant, with a v, would be a different word.', warn: 'Avoir : ayant' },
    { from: 'user', fr: 'En étant à l’heure, je ferai bonne impression.', en: 'By being on time, I will make a good impression.' },
    { from: 'coach', fr: 'Étant, pour être. Nous sommes ne peut rien donner ici.', en: 'Étant, for être. Nous sommes cannot give anything here.', warn: 'Être : étant' },
    { from: 'user', fr: 'Et en me renseignant sur les dossiers, je gagnerai du temps.', en: 'And by finding out about the files, I will save time.' },
    { from: 'coach', fr: 'En me renseignant : le pronom suit le sujet, je, donc me.', en: 'En me renseignant: the pronoun follows the subject, je, so me.', warn: 'Pronominal : le pronom du sujet' },
    { from: 'user', fr: 'En ne disant rien en réunion, je passerais pour quelqu’un de timide.', en: 'By saying nothing in meetings, I would come across as shy.' },
    { from: 'coach', fr: 'Ne avant le participe, rien après : comme avec un verbe conjugué.', en: 'Ne before the participle, rien after: as with a conjugated verb.', warn: 'La négation' },
  ],
  closing: { fr: 'Trois verbes à part, un pronom qui suit le sujet, et ne avant le participe.', en: 'Three verbs apart, a pronoun that follows the subject, and ne before the participle.' },
  audio: REC('rec-b2-12-samir'),
  say: REFRAME,
  terms: ['trois', 'sujet'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-forme',
  title: 'Quatre ajouts à la recette',
  frSub: 'Ce que le nous ne dit pas',
  hint: 'Quatre cartes. La deuxième revient à la règle du sujet.',
  audio: REC('rec-b2-12-ajouts'),
  say: REFRAME,
  terms: ['trois', 'sujet'],
  cards: [
    {
      head: 'Trois à part', label: 'avoir, être, savoir',
      fr: 'en ayant · en étant · en sachant',
      sub: '[ahⁿ-neh-YAHⁿ] · [ahⁿ-nay-TAHⁿ] · [ahⁿ sa-SHAHⁿ]',
      body: "Pour ces trois verbes, le nous ne sert pas. Savant existe, mais c'est un nom ou un adjectif : un savant, un chien savant. EN: three verbs build their own form.",
    },
    {
      head: 'Le pronom du sujet', label: 'les pronominaux',
      fr: fr(E(1646)), sub: rsOf(E(1646)),
      body: "En me levant, en te levant, en se levant, en nous levant : le pronom change avec le sujet du verbe principal, puisque c'est lui qui fait l'action. EN: the reflexive pronoun follows the main subject.",
    },
    {
      head: 'Les pronoms après en', label: 'le, lui, y, en',
      fr: fr(E(1655)), sub: rsOf(E(1655)),
      body: "Les pronoms compléments se placent entre en et le participe : en le voyant, en lui parlant. En en parlant n'est pas une faute : le second en remplace un nom. EN: object pronouns go between en and the participle.",
    },
    {
      head: 'La négation', label: 'ne… pas, ne… rien',
      fr: fr(E(1650)), sub: rsOf(E(1650)),
      body: "Ne avant le participe, pas ou rien après. Souvent plus naturel : sans + infinitif, il est parti sans rien dire. EN: ne before, pas after; sans + infinitive is often smoother.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Complète la recette',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Trois à part', [
      it(E(1643), 'avoir : ayant'),
      it(E(1644), 'être : étant'),
      it(E(1645), 'savoir : sachant'),
      it(E(1652), 'savoir, avec ne… pas'),
    ], chk('Savoir, au gérondif :',
      ['en savant', 'en sachant', 'en sachent'], 1,
      'Sachant : savant est un nom. EN: sachant.')),
    grp('Le pronom du sujet', [
      it(E(1646), 'je : me'),
      it(E(1647), 'tu : te'),
      it(E(1648), 'il : se'),
      it(E(1649), 'nous : nous'),
    ], chk('« … levant, j’ai vu la neige. »',
      ['En se', 'En me', 'En te'], 1,
      'Le sujet est je, donc me. EN: me for je.')),
    grp('Pronoms et négation', [
      it(E(1654), 'lui entre en et parlant'),
      it(E(1655), 'deux en de suite'),
      it(E(1650), 'ne… rien'),
      it(E(1653), 'ne… pas, devant une voyelle'),
    ], chk('Où se place ne ?',
      ['avant le participe : en ne disant rien', 'avant en : ne en disant rien'], 0,
      'En reste en tête ; ne se colle au participe. EN: en first, then ne.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['trois', 'sujet'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Les formes que la main invente',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Trois verbes à part, un pronom qui suit',
    body: "Avoir, être et savoir donnent ayant, étant, sachant. Le pronom d'un pronominal suit le sujet du verbe principal. Les pronoms et ne se placent entre en et le participe. EN: ayant, étant, sachant; the pronoun follows the main subject.",
  },
  cards: [
    trap(E(1643), 'avoir', 'En avant un peu de patience, tu y arriveras.', 'Avoir donne ayant ; avant est une préposition. EN: ayant, not avant.'),
    trap(E(1644), 'être', 'En soyant poli, on obtient souvent plus.', 'Être donne étant ; soyant n’existe pas. EN: étant.'),
    trap(E(1652), 'savoir', 'En ne savant pas quoi répondre, elle a souri.', 'Savoir donne sachant. EN: sachant.'),
    trap(E(1646), 'le pronom', 'En se levant, j’ai vu la neige.', 'Le sujet est je : en me levant. EN: me for je.'),
    trap(E(1650), 'la négation', 'Il est parti en disant ne rien.', 'Ne avant le participe, rien après. EN: en ne disant rien.'),
    trap(E(1655), 'deux en', 'En parlant en avec elle, j’ai changé d’avis.', 'Le pronom en se place avant le participe : en en parlant. EN: en en parlant.'),
  ],
  drill: [
    { promptSay: 'En … un peu de patience, tu y arriveras.', opts: ['ayant', 'avant'], correct: 0 },
    { promptSay: 'En … poli, on obtient souvent plus.', opts: ['soyant', 'étant'], correct: 1 },
    { promptSay: 'En ne … pas quoi répondre, elle a souri.', opts: ['sachant', 'savant'], correct: 0 },
    { promptSay: 'En … levant, j’ai vu la neige.', opts: ['se', 'me'], correct: 1 },
    { promptSay: 'Tu te sentiras mieux en … couchant plus tôt.', opts: ['te', 'se'], correct: 0 },
    { promptSay: 'Il est parti en … disant rien.', opts: ['ne', 'n’en'], correct: 0 },
    { promptSay: 'J’ai compris son problème en … parlant.', opts: ['le', 'lui'], correct: 1 },
    { promptSay: 'Nous avons ri en … rappelant ce voyage.', opts: ['se', 'nous'], correct: 1 },
  ],
  steps: STEPS('Trois verbes à part, un pronom qui suit', 'Ce que la main écrit toute seule'),
  audio: REC('rec-b2-12-piege-ajouts'),
  say: REFRAME,
  terms: ['trois', 'sujet'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'À reconnaître, pas à imiter',
  frSub: 'La forme passée, et ce qu’on dit plutôt',
  examples: [
    ex(E(1656), 'en ayant fini : l’action est terminée avant ; rare, un peu soutenu'),
    ex(E(1657), 'après avoir fini : la tournure de tous les jours, à préférer'),
    ex(E(1651), 'sans rien dire : plus naturel que en ne disant rien'),
    ex('fr.b2.affaires.1339', 'en vous engageant : vous, donc vous'),
    ex(E(1659), 'elle, donc se : en se penchant'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['trois', 'sujet'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Compléter : ta première semaine', TEXTE_A3, [
  { q: 'Complète les deux premières : en (avoir) ta pièce d’identité ; en (être) à l’heure.', a: "En ayant ta pièce d'identité sur toi (si tu l'as sur toi : une condition) ; en étant à l'heure. Avoir et être font partie des trois verbes à part." },
  { q: 'Complète : tu gagneras du temps en (se renseigner).', a: "En te renseignant : le sujet est tu, donc te." },
  { q: 'Complète : en (ne rien dire) pendant les réunions ; en (savoir) écouter.', a: "En ne disant rien : ne avant le participe, rien après. En sachant écouter : savoir donne sachant." },
  { q: 'Complète la fin : c’est en (se tromper) que tu apprendras le plan de l’étage.', a: "C'est en te trompant : le sujet du verbe principal est tu, donc te. Avant, « si tu te trompes » garde si, et c'est très naturel ici." },
], 'rec-b2-12-texte-a3', ['trois', 'sujet']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Les trois', 'Avoir, être, savoir donnent…',
    ['ayant, étant, sachant', 'avant, étant, savant', 'ayant, soyant, sachant'], 0,
    'Ayant, étant, sachant. EN: the three verbs apart.'),
  ctl('Le pronom', '« … trompant, tu apprendras. »',
    ['En se', 'En te'], 1,
    'Le sujet est tu, donc te. EN: te for tu.'),
  ctl('La négation', '« Il est parti … »',
    ['en ne disant rien', 'en disant ne rien'], 0,
    'Ne avant le participe, rien après. EN: ne before, rien after.'),
], ['trois']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Trois à part, et les ajouts',
    opener: {
      line: "Ayant, étant, sachant, et un pronom qui suit le sujet : ici tu complètes la recette avec ce que le nous ne dit pas. EN: Ayant, étant, sachant, and a pronoun that follows the subject: here you finish the recipe.",
      imageRef: 'lessons/gerondif/act03.jpg',
    },
    sections: [],
    milestone: "Tu formes ayant, étant et sachant, tu accordes le pronom d'un pronominal au sujet, et tu places les pronoms et la négation après en. EN: You can build the three forms apart and place pronouns and negation.",
    estScreens: 36, restPoints: ['a3-construire', 'a3-piege'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_PIEGE, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: EN MÊME TEMPS
 *
 *  Meaning in contrast: the gérondif of simultaneity or of the moment, with
 *  ONE subject, against pendant que and quand with two (lesson 31 in B1).
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'La colocation d’Awa',
  frSub: 'Une personne ou deux',
  setting: 'Bruxelles. Awa vient d’emménager avec Tom. Le soir, pendant que Tom prépare le dîner, elle raconte sa journée à une amie au téléphone, et glisse de temps en temps un mot à Tom.',
  bubbles: [
    { from: 'user', fr: "Je chante en me douchant, c'est plus fort que moi.", en: 'I sing in the shower, I cannot help it.' },
    { from: 'coach', fr: 'Toi qui chantes, toi qui te douches : un sujet, deux actions en même temps.', en: 'You sing, you shower: one subject, two actions at once.', warn: 'En même temps' },
    { from: 'user', fr: "En rentrant, j'ai croisé la voisine du dessus.", en: 'On my way in, I ran into the upstairs neighbour.' },
    { from: 'coach', fr: 'En rentrant : au moment où tu rentrais. Le gérondif marque aussi un instant.', en: 'En rentrant: at the moment you came in. The gérondif can also mark an instant.', warn: 'Au moment où' },
    { from: 'user', fr: fr(CL(1333)), en: en(CL(1333)) },
    { from: 'coach', fr: 'Là, deux personnes : Tom cuisine, toi tu mets la table. Pendant que reste.', en: 'Here, two people: Tom cooks, you lay the table. Pendant que stays.', warn: 'Deux sujets : pendant que' },
    { from: 'user', fr: 'Et je fais mes devoirs tout en écoutant de la musique.', en: 'And I do my homework while listening to music.' },
    { from: 'coach', fr: 'Tout souligne que les deux choses vont ensemble, au même moment.', en: 'Tout stresses that the two things go together, at the same moment.', warn: 'Tout en' },
  ],
  closing: { fr: 'Une personne, deux actions : le gérondif. Deux personnes : pendant que ou quand.', en: 'One person, two actions: the gérondif. Two people: pendant que or quand.' },
  audio: REC('rec-b2-12-awa'),
  say: REFRAME,
  terms: ['simultane', 'bascule'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sens',
  title: 'En même temps, au même moment',
  frSub: 'Le gérondif contre pendant que',
  hint: 'Quatre cartes. La troisième garde sa conjonction.',
  audio: REC('rec-b2-12-simultane'),
  say: REFRAME,
  terms: ['simultane', 'bascule'],
  cards: [
    {
      head: 'Pendant que', label: 'deux actions qui durent',
      fr: fr(E(1661)), sub: rsOf(E(1661)),
      body: "Il chante et il se douche, en même temps, lui seul. Même sens : il chante pendant qu'il se douche. EN: two actions at once, one person.",
    },
    {
      head: 'Au moment où', label: 'un instant',
      fr: fr(E(1663)), sub: rsOf(E(1663)),
      body: "En arrivant : au moment où je suis arrivé. Le gérondif pose l'action principale sur cet instant précis. EN: at the moment when.",
    },
    {
      head: 'Deux sujets', label: Cap(SUBORD_REF),
      fr: fr(CL(1208)), sub: rsOf(CL(1208)),
      body: `« ${B131_REFRAME} » Je parlais, le camion est arrivé : deux sujets, pendant que reste. EN: ${B131_REFRAME_EN}`,
    },
    {
      head: 'Tout en', label: 'les deux à la fois',
      fr: fr(E(1668)), sub: rsOf(E(1668)),
      body: "Tout souligne que les deux choses se font à la fois : elle révise et elle écoute. L'acte 8 montre l'autre sens de tout en. EN: tout stresses at the same time.",
    },
  ],
};

const A4_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-trier',
  layer: 'core',
  size: 'lg',
  title: 'Un sujet ou deux',
  frSub: 'Le gérondif, ou la conjonction',
  groups: [
    grp('Un sujet : le gérondif', [
      it(E(1666), 'j’écoute, je note'),
      it(E(1669), 'nous marchons, nous discutons'),
      it('fr.a1.routines.183', 'elle prépare, elle écoute'),
      it('fr.b1.cafe.005', 'elle lit, elle prend son café'),
    ], chk('« Elle écoute la radio en préparant le repas. » Qui prépare le repas ?',
      ['elle', 'quelqu’un d’autre'], 0,
      'Le sujet d’écoute : elle. EN: she does both.')),
    grp('Deux sujets : la conjonction', [
      it(E(1667), 'le prof, les étudiants'),
      it(E(1664), 'je, le train'),
      it(CL(1208), 'je, le camion'),
      it(CL(1333), 'tu, je'),
    ], chk('« Pendant que le prof parle, les étudiants prennent des notes. » Pourquoi pas de gérondif ?',
      ['le prof et les étudiants sont deux sujets', 'parler ne se met pas au gérondif'], 0,
      'Un gérondif ferait parler les étudiants. EN: two subjects keep pendant que.')),
    ctl('Le moment', '« En traversant la rue, regarde des deux côtés. » Le gérondif dit…',
      ['le moment où tu regardes', 'la raison pour laquelle tu regardes', 'la condition pour traverser'], 0,
      'Au moment où tu traverses. EN: the moment.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['simultane', 'bascule'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui fait quoi, et quand',
  frSub: 'Neuf phrases, une ou deux personnes',
  lines: [
    ln(E(1660)), ln(E(1661)), ln(E(1663)), ln(E(1665)), ln(E(1667)),
    ln(E(1671)), ln(E(1674)), ln(CL(1208)), ln('fr.a2.transports-quotidiens.214'),
  ],
  questions: [
    { q: 'Première phrase : que ne faut-il jamais faire en conduisant ?', opts: ['téléphoner', 'manger'], correct: 0, why: 'Ne téléphone jamais : c’est la consigne. EN: never phone.' },
    { q: 'Troisième phrase : quand la personne a-t-elle acheté son billet ?', opts: ['à son arrivée à la gare', 'la veille'], correct: 0, why: 'En arrivant : au moment où elle est arrivée. EN: on arrival.' },
    { q: 'Quatrième phrase : qui a entendu la musique ?', opts: ['la personne qui ouvrait la porte', 'un voisin'], correct: 0, why: 'Elle ouvrait, elle a entendu : un seul sujet. EN: the one opening the door.' },
    { q: 'Cinquième phrase : combien de sujets différents ?', opts: ['deux', 'un seul'], correct: 0, why: 'Le prof et les étudiants : pendant que. EN: two.' },
    { q: 'Sixième phrase : qui sortait de la boulangerie ?', opts: ['moi', 'lui'], correct: 0, why: 'Le sujet de « j’ai croisé » : moi. EN: me.' },
  ],
  audio: REC('rec-b2-12-simultane-ecoute'),
  say: REFRAME,
  terms: ['simultane', 'sujet'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux personnes dans un gérondif',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Un sujet : le gérondif. Deux sujets : pendant que',
    body: "Le gérondif marque deux actions en même temps chez une seule personne. Quand deux personnes agissent, garde pendant que ou quand, avec un sujet pour chaque verbe. EN: one subject, gérondif; two subjects, a clause.",
  },
  cards: [
    trap(E(1667), 'deux sujets', 'En parlant, les étudiants prennent des notes.', 'Ce seraient les étudiants qui parlent. Le prof parle : pendant que le prof parle. EN: two subjects, pendant que.'),
    trap(E(1664), 'deux sujets', 'En arrivant à la gare, le train était parti.', 'Le train n’arrive pas à la gare en étant parti : quand je suis arrivé. EN: two subjects, quand.'),
    trap(CL(1208), 'deux sujets', 'En parlant au client, le camion est arrivé.', 'Le camion ne parle pas au client : pendant que je parlais. EN: two subjects.'),
    trap(E(1660), 'l’infinitif', 'Ne téléphone jamais en conduire.', 'En veut la forme en -ant : en conduisant. EN: en conduisant.'),
    trap(E(1665), 'pendant que + -ant', 'Pendant qu’ouvrant la porte, elle a entendu la musique.', 'Pendant que veut un verbe conjugué ; sinon, en ouvrant. EN: pendant que needs a conjugated verb.'),
    trap(E(1672), 'sans en', 'Elle a pleuré lisant ta lettre.', 'Sans en, ce n’est plus un gérondif : en lisant. EN: keep en.'),
  ],
  drill: [
    { promptSay: 'Pendant que le prof …, les étudiants prennent des notes.', opts: ['parle', 'parlant'], correct: 0 },
    { promptSay: '… à la gare, j’ai acheté un billet.', opts: ['En arrivant', 'Pendant qu’arrivant'], correct: 0 },
    { promptSay: 'Quand je suis arrivé à la gare, le train … parti.', opts: ['était', 'étant'], correct: 0 },
    { promptSay: 'Il chante … se douchant.', opts: ['en', 'pendant'], correct: 0 },
    { promptSay: 'Ne téléphone jamais en …', opts: ['conduire', 'conduisant'], correct: 1 },
    { promptSay: '… je dormais, le téléphone a sonné.', opts: ['En', 'Pendant que'], correct: 1 },
    { promptSay: 'Elle lit le journal en … son petit-déjeuner.', opts: ['prenant', 'prendre'], correct: 0 },
    { promptSay: 'Elle révise tout en … de la musique.', opts: ['écoute', 'écoutant'], correct: 1 },
  ],
  steps: STEPS('Un sujet : le gérondif. Deux sujets : pendant que', 'Deux personnes de trop'),
  audio: REC('rec-b2-12-piege-simultane'),
  say: REFRAME,
  terms: ['simultane', 'bascule'],
};

const A4_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a4-hacks',
  layer: 'core',
  sheetId: 'sheet-sujet',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Compte les sujets avant d’écrire. S’il n’y en a qu’un, le gérondif est possible.', why: "Le gérondif prend le sujet du verbe principal ; avec deux personnes, il en oublie une. EN: count the subjects first." },
    { hack: 'Remplace le gérondif par pendant que + le même sujet. Si la phrase tient, c’est de la simultanéité.', why: "Il chante en se douchant, il chante pendant qu'il se douche : même sens. EN: test with pendant que." },
    { hack: 'Pour un instant précis, pense à au moment où.', why: "En arrivant, j'ai vu… : au moment où je suis arrivé, j'ai vu. EN: think au moment où for one instant." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['simultane', 'sujet'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Réécrire : le message de Camille', TEXTE_A4, [
  { q: 'Première phrase : pendant que je rentrais du travail, j’ai écouté…', a: "En rentrant du travail, j'ai écouté un balado sur Montréal : je rentrais, j'écoutais, un seul sujet." },
  { q: 'Deuxième phrase : quand je suis arrivée devant chez moi, j’ai vu…', a: "En arrivant devant chez moi, j'ai vu un camion de déménagement : le même sujet, et un moment précis." },
  { q: 'Troisième phrase : pendant que les voisins portaient leurs meubles, leur chien aboyait.', a: "On garde pendant que : les voisins portent, le chien aboie, deux sujets." },
  { q: 'Les deux dernières phrases ?', a: "En les aidant, j'ai appris qu'ils partaient à Québec (un seul sujet, je). Quand ils sont partis, la rue m'a semblé bien vide : on garde quand, car ils et la rue sont deux sujets." },
], 'rec-b2-12-texte-a4', ['simultane', 'bascule']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Un sujet', '« Il chante en se douchant. » Même sens :',
    ['il chante pendant qu’il se douche', 'il chante pour se doucher', 'il chante parce qu’il se douche'], 0,
    'Deux actions en même temps, lui seul. EN: at the same time.'),
  ctl('Deux sujets', '« Pendant que je dormais, le téléphone a sonné. » Peut-on dire « en dormant » ?',
    ['oui', 'non'], 1,
    'Ce serait le téléphone qui dormait. EN: two subjects keep pendant que.'),
  ctl('L’instant', '« En arrivant à la gare, j’ai acheté un billet. » En arrivant veut dire…',
    ['au moment où je suis arrivé', 'parce que je suis arrivé'], 0,
    'Un moment précis. EN: the moment of arrival.'),
], ['simultane']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'En même temps',
    opener: {
      line: "Chanter sous la douche, lire en marchant : ici tu fais deux choses à la fois, à condition d'être seul à les faire. EN: Singing in the shower, reading as you walk: here you do two things at once, as long as you do both.",
      imageRef: 'lessons/gerondif/act04.jpg',
    },
    sections: [],
    milestone: "Tu dis deux actions en même temps ou un instant précis avec le gérondif, et tu gardes pendant que ou quand quand deux personnes agissent. EN: You can express simultaneity with one subject and keep a clause for two.",
    estScreens: 38, restPoints: ['a4-trier', 'a4-piege'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_TRIER, A4_ECOUTE, A4_PIEGE, A4_HACKS, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: COMMENT ? LA MANIÈRE ET LE MOYEN
 *
 *  en courant (how it looked), en travaillant le soir (what made it
 *  possible), against avec / par + nom, and against simultaneity.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Priya raconte',
  frSub: 'Comment tout a commencé',
  setting: 'Genève. Priya, arrivée de Bangalore il y a deux ans, prépare un entretien pour devenir guide. Son amie Clara joue la recruteuse.',
  bubbles: [
    { from: 'coach', fr: 'Racontez-moi comment vous avez appris le français si vite.', en: 'Tell me how you learned French so fast.' },
    { from: 'user', fr: "J'ai appris en regardant des séries, surtout le soir.", en: 'I learned by watching series, mostly in the evening.' },
    { from: 'coach', fr: 'Le moyen : c’est comme ça que tu as appris. Le gérondif répond à comment.', en: 'The means: that is how you learned. The gérondif answers how.', warn: 'Le moyen' },
    { from: 'user', fr: "Et j'ai payé mes cours en travaillant le week-end.", en: 'And I paid for my classes by working at weekends.' },
    { from: 'user', fr: 'Le premier jour, je suis arrivée au cours en courant.', en: 'On the first day, I ran into class.' },
    { from: 'coach', fr: 'Là, c’est la manière : on te voit courir dans le couloir.', en: 'That is the manner: we can see you running down the corridor.', warn: 'La manière' },
    { from: 'user', fr: "Mais je travaille toujours en écoutant de la musique.", en: 'But I always work while listening to music.' },
    { from: 'coach', fr: 'Ici, pas de moyen : deux choses à la fois. Même forme, autre sens.', en: 'No means here: two things at once. Same form, different meaning.', warn: 'En même temps' },
  ],
  closing: { fr: 'Comment ? En + -ant. Le moyen, la manière, ou deux choses à la fois : la phrase choisit.', en: 'How? En + -ant. The means, the manner, or two things at once: the sentence decides.' },
  audio: REC('rec-b2-12-priya'),
  say: REFRAME,
  terms: ['maniere', 'simultane'],
};

const A5_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-table',
  layer: 'core',
  sheetId: 'sheet-sens',
  title: 'Six réponses à comment ?',
  cols: ['Question', 'Réponse', 'Sens'],
  rows: [
    { cells: ['Comment est-il entré ?', 'en courant', 'la manière'], say: fr(E(1610)),
      detail: { title: 'la manière', body: "Le gérondif décrit la façon de faire : on voit la scène. EN: how it looked.", say: fr(E(1686)) } },
    { cells: ['Comment a-t-elle payé ?', 'en travaillant', 'le moyen'], say: fr(E(1677)),
      detail: { title: 'le moyen', body: "Le gérondif dit l'outil, ce qui a permis le résultat. EN: what made it possible.", say: fr(E(1680)) } },
    { cells: ['Comment apprend-on ?', 'en parlant', 'le moyen, en général'], say: fr(E(1678)),
      detail: { title: 'une vérité générale', body: "Avec on et le présent, le gérondif donne une règle de vie. EN: a general truth.", say: fr(E(1679)) } },
    { cells: ['Comment est-elle partie ?', 'en claquant la porte', 'la manière'], say: fr(E(1676)),
      detail: { title: 'un geste', body: "Le gérondif ajoute un geste qui dit toute l'humeur. EN: a telling gesture.", say: fr(E(1682)) } },
    { cells: ['avec + nom', 'avec un sourire', 'un nom, pas un verbe'], say: fr(E(1683)),
      detail: { title: 'avec ou en', body: "Avec un sourire, en souriant : même idée. Avec prend un nom ; en prend un verbe en -ant. EN: avec plus a noun, en plus a verb.", say: fr(E(1682)) } },
    { cells: ['par + nom', 'par téléphone', 'un nom, pas un verbe'], say: fr(E(1685)),
      detail: { title: 'par ou en', body: "Par téléphone, par courriel : par prend un nom. Jamais par + infinitif pour dire le moyen. EN: par takes a noun.", say: fr(E(1687)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['maniere'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le moyen ou la manière',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le moyen', [
      it(E(1677), 'le soir, pour payer'),
      it(E(1680), 'des cours, pour vivre'),
      it(E(1684), 'cuisiner, pour économiser'),
      it(E(1689), 'le club, pour rencontrer'),
    ], chk('« Il gagne sa vie en donnant des cours de guitare. » Le gérondif répond à…',
      ['comment ?', 'quand ?', 'pourquoi ?'], 0,
      'Comment gagne-t-il sa vie ? En donnant des cours. EN: how.')),
    grp('La manière', [
      it(E(1676), 'un départ bruyant'),
      it(E(1682), 'une réponse souriante'),
      it(E(1686), 'une traversée rapide'),
      it(E(1610), 'une entrée en courant'),
    ], chk('« Elle est partie en claquant la porte. » Qu’ajoute le gérondif ?',
      ['la façon dont elle est partie', 'le moment de son départ'], 0,
      'On voit la scène : la manière. EN: the manner.')),
    ctl('Moyen ou simultanéité', '« Il travaille en écoutant de la musique. » La musique…',
      ['accompagne le travail', 'permet de travailler'], 0,
      'Deux choses à la fois, pas un moyen. EN: at the same time, not a means.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['maniere'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Le moyen, partout',
  frSub: 'Dans une consigne, un argument, un proverbe',
  examples: [
    ex('fr.b2.strategies-de-comprehension.1575', `une consigne d’examen, déjà vue dans ${LECTURE_REF}`),
    ex('fr.b2.opinions-et-avis.1783', `un argument, déjà vu dans ${ARGU_REF}`),
    ex('fr.b1.maison.013', 'le moyen d’agrandir la cuisine'),
    ex(E(1679), 'le proverbe : c’est en… que met le moyen en valeur'),
    ex(E(1685), 'la réponse courte : un gérondif tout seul'),
    ex(E(1681), 'attention : ici, deux choses à la fois, pas un moyen'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['maniere'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de moyen',
  errors: [
    {
      wrong: "J'ai payé mes études par travailler le soir.",
      right: fr(E(1677)),
      why: "Normal : by working ressemble à par. Mais par ne prend pas d'infinitif pour dire le moyen : en travaillant. EN: by + -ing is en + -ant.",
    },
    {
      wrong: 'On apprend une langue en la parler.',
      right: fr(E(1678)),
      why: "Normal : on apprend à parler, avec l'infinitif. Pour le moyen, c'est en + -ant : en la parlant. EN: the means takes en + -ant.",
    },
    {
      wrong: 'Elle a répondu avec souriant.',
      right: fr(E(1682)),
      why: "Normal : with a smile se dit avec un sourire. Mais avec veut un nom ; avec un verbe, c'est en : en souriant. EN: avec plus a noun, en plus -ant.",
    },
    {
      wrong: 'Il est entré courant.',
      right: fr(E(1610)),
      why: "Normal : l'anglais dit he came in running, sans petit mot. En français, la manière veut en : en courant. EN: keep en.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['maniere'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Le verbe, puis le moyen',
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['maniere'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Compléter : un an d’espagnol', TEXTE_A5, [
  { q: 'Complète : en (télécharger) ; c’est surtout en (parler).', a: "En téléchargeant une application ; c'est surtout en parlant avec des gens : deux moyens, et c'est en… que met le second en valeur." },
  { q: 'Complète : en (s’inscrire) à un échange linguistique.', a: "En m'inscrivant : le sujet est je, donc me, et nous nous inscrivons donne inscrivant." },
  { q: 'Complète : en les (écrire) ; en (chanter).', a: "En les écrivant, le moyen de retenir les mots ; en chantant, la manière d'entrer dans la cuisine." },
  { q: 'Complète la fin : en (faire) des heures supplémentaires.', a: "En faisant des heures supplémentaires : le moyen de payer le voyage." },
], 'rec-b2-12-texte-a5', ['maniere']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La question', 'Le gérondif de manière ou de moyen répond à…',
    ['comment ?', 'où ?', 'combien ?'], 0,
    'Comment : en courant, en travaillant. EN: how.'),
  ctl('Par ou en', 'By working in the evenings :',
    ['en travaillant le soir', 'par travailler le soir'], 0,
    'Le moyen : en + -ant. EN: en + -ant.'),
  ctl('Avec ou en', 'Avec prend…',
    ['un verbe en -ant', 'un nom'], 1,
    'Avec un sourire ; en souriant. EN: avec plus a noun.'),
], ['maniere']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Comment ?',
    opener: {
      line: "Entrer en courant, payer ses études en travaillant le soir : ici le gérondif répond à la question comment. EN: Running in, paying for your studies by working evenings: here the gérondif answers how.",
      imageRef: 'lessons/gerondif/act05.jpg',
    },
    sections: [],
    milestone: "Tu dis la manière et le moyen avec le gérondif, et tu gardes avec et par pour les noms. EN: You can express manner and means, and keep avec and par for nouns.",
    estScreens: 38, restPoints: ['a5-table', 'a5-exemples'],
  },
  sections: [A5_HISTOIRE, A5_TABLE, A5_CONSTRUIRE, A5_EXEMPLES, A5_ERREURS, A5_DICTEE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: SI : LA CONDITION
 *
 *  en partant tôt = si tu pars tôt; the main verb keeps its si tense
 *  (lesson 10 in B1, lesson 2 in B2); two subjects keep si.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Le premier hiver d’Ana',
  frSub: 'Si, sans le dire',
  setting: 'Québec, en novembre. Ana, arrivée de Guadalajara, doit aller à Lévis demain matin. Son voisin Mathieu lui donne des conseils sur le palier.',
  bubbles: [
    { from: 'user', fr: "En partant tôt demain, j'éviterai les bouchons sur le pont.", en: 'If I leave early tomorrow, I will avoid the jams on the bridge.' },
    { from: 'coach', fr: 'Oui : si je pars tôt. Même sujet, et le futur ensuite.', en: 'Yes: if I leave early. Same subject, and the future after it.', warn: 'Si + présent' },
    { from: 'user', fr: 'En prenant le traversier, je gagnerais du temps.', en: 'If I took the ferry, I would save time.' },
    { from: 'coach', fr: 'Le conditionnel suit le gérondif comme il suit si + imparfait.', en: 'The conditional follows the gérondif as it follows si + imparfait.', warn: 'Si + imparfait' },
    { from: 'user', fr: "Si tu pars tôt, Mathieu viendra avec toi, m'a dit ma coloc.", en: 'If you leave early, Mathieu will come with you, my flatmate told me.' },
    { from: 'coach', fr: 'Là, deux personnes : toi qui pars, Mathieu qui vient. Si reste.', en: 'Here, two people: you leave, Mathieu comes. Si stays.', warn: 'Deux sujets : si' },
    { from: 'user', fr: "Et en réservant hier, j'aurais payé moins cher.", en: 'And if I had booked yesterday, I would have paid less.' },
    { from: 'coach', fr: 'Trop tard : le gérondif veut dire ici si j’avais réservé.', en: 'Too late: here the gérondif means if I had booked.', warn: 'Si + plus-que-parfait' },
  ],
  closing: { fr: 'Le gérondif dit si, à condition de garder le même sujet.', en: 'The gérondif can mean si, as long as the subject stays the same.' },
  audio: REC('rec-b2-12-ana'),
  say: REFRAME,
  terms: ['condition', 'bascule'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sens',
  title: 'Le si caché',
  frSub: 'Trois paires, et la limite',
  hint: 'Quatre cartes. Le temps du verbe principal ne change pas.',
  audio: REC('rec-b2-12-condition'),
  say: REFRAME,
  terms: ['condition'],
  cards: [
    {
      head: 'Si + présent', label: 'le futur ensuite',
      fr: fr(E(1694)), sub: rsOf(E(1694)),
      body: "En partant tôt = si tu pars tôt. Le verbe principal est au futur, au présent ou à l'impératif. EN: a real condition.",
    },
    {
      head: 'Si + imparfait', label: Cap(SI_REF),
      fr: fr(E(1698)), sub: rsOf(E(1698)),
      body: `En prenant le train = si tu prenais le train. « ${B110_REFRAME} » EN: ${B110_REFRAME_EN}`,
    },
    {
      head: 'Si + plus-que-parfait', label: Cap(COND_PASSE_REF),
      fr: fr('fr.b2.conseils-et-suggestions.1309'), sub: rsOf('fr.b2.conseils-et-suggestions.1309'),
      body: `En partant plus tôt = si tu étais parti plus tôt. « ${B202_REFRAME} » EN: ${B202_REFRAME_EN}`,
    },
    {
      head: 'Deux sujets', label: 'si reste',
      fr: fr(PF(1253)), sub: rsOf(PF(1253)),
      body: "Tu appuies, la machine s'arrête : deux sujets. Pour un gérondif, change le sujet : en appuyant deux fois, tu arrêtes la machine. EN: two subjects keep si.",
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Retrouve le si',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Si réel : le futur ensuite', [
      it(E(1694), 'si tu pars tôt'),
      it(E(1696), 'si tu réserves aujourd’hui'),
      it(E(1697), 'si tu cherches bien'),
      it(E(1700), 'si tu t’inscris avant vendredi'),
    ], chk('« En cherchant bien, tu trouveras un logement. » Même sens :',
      ['Si tu cherches bien, tu trouveras un logement.', 'Parce que tu cherches bien, tu trouves un logement.', 'Pendant que tu cherches, tu trouves un logement.'], 0,
      'Une condition, et le futur ensuite. EN: a condition.')),
    grp('Si imaginé : le conditionnel', [
      it(E(1698), 'si tu prenais le train'),
      it(E(1706), 'si tu t’entraînais'),
      it(E(1703), 'si tu avais lu la notice'),
      it(E(1645), 'si j’avais su cela'),
    ], chk('« En lisant la notice, tu aurais compris. » As-tu lu la notice ?',
      ['non', 'oui'], 0,
      'Le conditionnel passé dit que ça n’a pas eu lieu. EN: you did not.')),
    ctl('Deux sujets', '« Si tu pars tôt, je t’accompagnerai. » Peut-on dire « en partant tôt, je t’accompagnerai » ?',
      ['non, ce serait moi qui pars tôt', 'oui, le sens ne change pas'], 0,
      'Le gérondif prendrait le sujet je. EN: it would make me the one leaving.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition', 'bascule'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Condition ou pas',
  frSub: 'Neuf phrases, un si à entendre',
  lines: [
    ln(E(1694)), ln(E(1695)), ln(E(1697)), ln(E(1698)), ln(E(1701)),
    ln(E(1702)), ln(E(1703)), ln(E(1705)), ln(PF(1215)),
  ],
  questions: [
    { q: 'Première et deuxième phrases : disent-elles la même chose ?', opts: ['oui', 'non'], correct: 0, why: 'En partant tôt = si tu pars tôt. EN: same meaning.' },
    { q: 'Quatrième phrase : la personne prend-elle le train ?', opts: ['pas encore, c’est une hypothèse', 'oui, elle est dans le train'], correct: 0, why: 'Le conditionnel : une hypothèse. EN: a hypothesis.' },
    { q: 'Cinquième phrase : qui part tôt ?', opts: ['toi', 'moi'], correct: 0, why: 'Si tu pars : toi. Deux sujets, donc si. EN: you.' },
    { q: 'Septième phrase : la personne a-t-elle lu la notice ?', opts: ['non', 'oui'], correct: 0, why: 'Aurais compris : ça n’a pas eu lieu. EN: no.' },
    { q: 'Huitième phrase : à quelle condition auras-tu une place ?', opts: ['arriver avant huit heures', 'réserver en ligne'], correct: 0, why: 'En arrivant avant huit heures. EN: arriving before eight.' },
  ],
  audio: REC('rec-b2-12-condition-ecoute'),
  say: REFRAME,
  terms: ['condition'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Le si qui déraille',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Même sujet, et le temps du si ensuite',
    body: "Le gérondif peut remplacer si quand le sujet reste le même. Le verbe principal garde le temps qu'il aurait après si : futur, conditionnel ou conditionnel passé. EN: same subject, and the main verb keeps its si tense.",
  },
  cards: [
    trap(E(1702), 'deux sujets', 'En appuyant deux fois, la machine s’arrête.', 'La machine n’appuie pas : tu appuies, tu arrêtes la machine. EN: keep one subject.'),
    trap(E(1694), 'futur après si', 'Si tu partiras tôt, tu éviteras les bouchons.', 'Jamais de futur après si ; le gérondif évite le problème : en partant tôt. EN: never a future after si.'),
    trap(E(1698), 'conditionnel après si', 'Si tu prendrais le train, tu gagnerais deux heures.', 'Après si, l’imparfait ; ou le gérondif : en prenant le train. EN: si + imparfait, or the gérondif.'),
    trap(E(1705), 'l’infinitif', 'En arriver avant huit heures, tu auras une place.', 'En veut la forme en -ant : en arrivant. EN: en arrivant.'),
    trap(E(1700), 'le pronom', 'En s’inscrivant avant vendredi, tu auras une réduction.', 'Le sujet est tu : en t’inscrivant. EN: te for tu.'),
    trap('fr.b2.conseils-et-suggestions.1309', 'le passé', 'Hier, en partant plus tôt, tu auras évité les bouchons.', 'Hier, c’est trop tard : conditionnel passé, aurais évité. EN: past unreal, aurais.'),
  ],
  drill: [
    { promptSay: 'En … tôt, tu éviteras les bouchons.', opts: ['partant', 'partir'], correct: 0 },
    { promptSay: 'En prenant le train, tu … deux heures.', opts: ['gagnais', 'gagnerais'], correct: 1 },
    { promptSay: 'En lisant la notice, tu … compris.', opts: ['aurais', 'auras'], correct: 0 },
    { promptSay: 'En appuyant deux fois, …', opts: ['la machine s’arrête', 'tu arrêtes la machine'], correct: 1 },
    { promptSay: 'En … avant vendredi, tu auras une réduction.', opts: ['t’inscrivant', 's’inscrivant'], correct: 0 },
    { promptSay: 'En … bien, tu trouveras un logement.', opts: ['cherché', 'cherchant'], correct: 1 },
    { promptSay: 'Si tu … le train, tu gagnerais deux heures.', opts: ['prenais', 'prendrais'], correct: 0 },
    { promptSay: '… tu pars tôt, je t’accompagnerai.', opts: ['En', 'Si'], correct: 1 },
  ],
  steps: STEPS('Même sujet, et le temps du si ensuite', 'Six conditions de travers'),
  audio: REC('rec-b2-12-piege-condition'),
  say: REFRAME,
  terms: ['condition', 'bascule'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Réécrire : ton premier hiver', TEXTE_A6, [
  { q: 'Réécris les deux premières phrases.', a: "En achetant tes bottes en septembre, tu auras le choix. En t'habillant en couches, tu auras moins froid (te, pour tu)." },
  { q: 'Et « si la neige tombe fort, les écoles ferment » ?', a: "On garde si : la neige et les écoles sont deux sujets." },
  { q: 'Réécris : si tu prends le bus ; si tu sortais davantage.', a: "En prenant le bus, tu éviteras de déneiger ta voiture. En sortant davantage, tu apprécierais mieux la saison : le conditionnel reste." },
  { q: 'Réécris la dernière phrase.', a: `En écoutant mes conseils l'an dernier, tu n'aurais pas glissé devant chez toi : le conditionnel passé reste, comme dans ${COND_PASSE_REF}.` },
], 'rec-b2-12-texte-a6', ['condition', 'bascule']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le si caché', '« En partant tôt, tu éviteras les bouchons. » Même sens :',
    ['si tu pars tôt', 'parce que tu es parti tôt', 'pendant que tu pars'], 0,
    'Une condition, et le futur ensuite. EN: a condition.'),
  ctl('Le temps', '« En prenant le train, tu … deux heures. » (hypothèse)',
    ['gagnerais', 'gagneras'], 0,
    'Comme après si + imparfait : le conditionnel. EN: the conditional.'),
  ctl('Deux sujets', '« Si la neige tombe, les écoles ferment. » Un gérondif est-il possible ?',
    ['non', 'oui'], 0,
    'La neige, les écoles : deux sujets, si reste. EN: two subjects keep si.'),
], ['condition']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Si : la condition',
    opener: {
      line: "Pars tôt, et tu éviteras les bouchons : ici le gérondif cache un si, à condition que le sujet ne change pas. EN: Leave early and you will beat the traffic: here the gérondif hides a si, as long as the subject stays the same.",
      imageRef: 'lessons/gerondif/act06.jpg',
    },
    sections: [],
    milestone: "Tu remplaces si par un gérondif quand le sujet reste le même, avec le bon temps ensuite, et tu gardes si quand il change. EN: You can turn a si clause into a gérondif with the right main tense.",
    estScreens: 34, restPoints: ['a6-construire', 'a6-piege'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_ECOUTE, A6_PIEGE, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: PARCE QUE : LA CAUSE
 *
 *  en voulant aider = parce qu'il voulait aider; one gérondif, several
 *  readings; cause (unwanted result) against means (goal reached).
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le chat sur le toit',
  frSub: 'Un fait divers des Laurentides',
  text: LECTURE_FAITS,
  glossary: [
    { word: 'la gouttière', en: 'the gutter', note: 'Le petit canal au bord du toit, qui recueille l’eau de pluie.' },
    { word: 'curieux', en: 'onlookers', note: 'Ici un nom : les gens qui s’arrêtent pour regarder.' },
    { word: 'mésaventure', en: 'mishap', note: 'Une aventure désagréable, souvent sans gravité.' },
  ],
  questions: [
    { q: 'Global : de quel genre de texte s’agit-il ?', a: "Un fait divers, une brève de journal régional, racontée avec un peu d'humour." },
    { q: 'Détail : pourquoi Gilles est-il monté sur le toit ?', a: "En voulant faire descendre son chat : le gérondif donne la cause, parce qu'il voulait le faire descendre." },
    { q: '« En posant le pied sur le toit, il a fait tomber l’échelle » : le moment ou la cause ?', a: "Les deux : au moment où il a posé le pied, et c'est ce geste qui a fait tomber l'échelle." },
    { q: 'Comment a-t-il alerté sa voisine ?', a: "En criant pendant de longues minutes : le moyen, et la cause de l'alerte." },
    { q: 'Inférence : que dit « tout en sachant que c’était imprudent » de Gilles ?', a: "Qu'il reconnaît son imprudence mais ne la regrette pas : tout en marque une opposition." },
    { q: 'Position : que pensent les pompiers de cette histoire ?', a: "Qu'elle était évitable : en appelant les secours plus tôt, on évite ce genre de mésaventure. Le gérondif dit ici une condition." },
  ],
  audio: REC('rec-b2-12-faits'),
  say: REFRAME,
  terms: ['cause', 'condition'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sens',
  title: 'Parce que, sans le dire',
  frSub: 'La cause, et ses voisines',
  hint: 'Quatre cartes. La troisième oppose la cause au moyen.',
  audio: REC('rec-b2-12-cause'),
  say: REFRAME,
  terms: ['cause'],
  cards: [
    {
      head: 'La cause', label: 'parce que',
      fr: fr(E(1611)), sub: rsOf(E(1611)),
      body: "En voulant aider = parce qu'il voulait aider. Le verbe principal dit ce qui en est sorti, souvent au passé. EN: the gérondif can give the cause.",
    },
    {
      head: 'Un accident', label: 'la cause et le moment',
      fr: fr(E(1714)), sub: rsOf(E(1714)),
      body: "Il a glissé, et c'est ce qui l'a blessé : la cause et le moment se confondent. Pas besoin de choisir. EN: the cause and the moment merge.",
    },
    {
      head: 'Cause ou moyen', label: 'le résultat décide',
      fr: fr(E(1713)), sub: rsOf(E(1713)),
      body: "Un résultat qu'il n'a pas voulu : une cause. En travaillant le soir, il a payé ses études : un but atteint, donc un moyen. EN: an unwanted result is a cause.",
    },
    {
      head: 'Comme, parce que', label: Cap(SUBORD_REF),
      fr: fr(E(1716)), sub: rsOf(E(1716)),
      body: "Comme, en tête de phrase, pose la cause. Avec un seul sujet, le gérondif dit la même chose plus vite : en oubliant son passeport. EN: comme at the front; the gérondif is shorter.",
    },
  ],
};

const A7_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-trier',
  layer: 'core',
  size: 'lg',
  title: 'Cherche la cause',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('La cause', [
      it(E(1712), 'l’oubli, puis l’avion raté'),
      it(E(1717), 'les cris, puis le réveil'),
      it(E(1718), 'le refus, puis le contrat perdu'),
      it('fr.b1.expressions-imagees.1062', 'le sujet de l’ex, puis la gaffe'),
    ], chk('« En criant si fort, tu as réveillé le bébé. » Pourquoi le bébé s’est-il réveillé ?',
      ['parce que tu as crié', 'pendant que tu dormais', 'pour que tu cries'], 0,
      'Le cri a causé le réveil. EN: the shouting caused it.')),
    grp('Un gérondif, deux lectures', [
      it(E(1715), 'quand je l’ai vu, et parce que'),
      it('fr.a2.corps.001', 'la chute : le moment et la cause'),
      it('fr.a2.objets.110', 'la chute : le moment et la cause'),
      it('fr.b2.emotions.1249', 'une hypothèse, et la même chute'),
    ], chk('« En le voyant pâle, j’ai compris qu’il était malade. » Le gérondif dit…',
      ['le moment et la cause à la fois', 'seulement la manière'], 0,
      'Quand je l’ai vu, et parce que je l’ai vu pâle. EN: both at once.')),
    ctl('Cause ou moyen', '« En refusant l’offre, ils ont perdu le contrat. » La perte du contrat était…',
      ['une conséquence non voulue', 'le but recherché'], 0,
      'Un résultat non voulu : le gérondif dit la cause. EN: an unwanted result, a cause.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cause'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Ce qui a tout déclenché',
  frSub: 'Neuf phrases, neuf causes',
  lines: [
    ln(E(1710)), ln(E(1712)), ln(E(1713)), ln(E(1714)), ln(E(1715)),
    ln(E(1717)), ln(E(1718)), ln(E(1721)), ln('fr.b1.expressions-imagees.1062'),
  ],
  questions: [
    { q: 'Première phrase : voulait-il compliquer les choses ?', opts: ['non, il voulait bien faire', 'oui'], correct: 0, why: 'En voulant bien faire : la cause, contre son intention. EN: he meant well.' },
    { q: 'Deuxième phrase : pourquoi a-t-elle raté l’avion ?', opts: ['elle avait oublié son passeport', 'elle était arrivée en retard'], correct: 0, why: 'En oubliant son passeport. EN: the forgotten passport.' },
    { q: 'Quatrième phrase : sur quoi a-t-il glissé ?', opts: ['le verglas', 'une flaque'], correct: 0, why: 'Sur le verglas. EN: the ice.' },
    { q: 'Sixième phrase : qui a réveillé le bébé ?', opts: ['toi', 'le chien'], correct: 0, why: 'Tu as réveillé : toi, en criant. EN: you.' },
    { q: 'Dernière phrase : quelle gaffe la personne a-t-elle faite ?', opts: ['elle a parlé de son ex', 'elle a oublié son anniversaire'], correct: 0, why: 'Mettre les pieds dans le plat, en parlant de son ex. EN: mentioning the ex.' },
  ],
  audio: REC('rec-b2-12-cause-ecoute'),
  say: REFRAME,
  terms: ['cause'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de cause',
  errors: [
    {
      wrong: "En tombant du vélo, son bras s'est cassé.",
      right: fr('fr.a2.corps.001'),
      why: "Normal : c'est bien le bras qui s'est cassé. Mais le gérondif prend ce sujet : le bras serait tombé du vélo. EN: the gérondif takes the main subject.",
    },
    {
      wrong: 'Par vouloir aider, il a tout cassé.',
      right: fr(E(1611)),
      why: "Normal : by trying ressemble à par. Pour la cause, le français dit en voulant, ou parce qu'il voulait. EN: en voulant, not par vouloir.",
    },
    {
      wrong: "En oubliant son passeport, l'avion est parti sans elle.",
      right: fr(E(1712)),
      why: "Normal : c'est bien l'avion qui est parti. Mais c'est elle qui a oublié : elle doit être le sujet. EN: she forgot, so she is the subject.",
    },
    {
      wrong: "Parce qu'en voulant aider, il a tout cassé.",
      right: fr(E(1711)),
      why: "Normal : on veut dire la cause deux fois pour être clair. Parce que et en voulant disent la même chose : choisis l'un ou l'autre. EN: one cause marker is enough.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cause', 'sujet'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Lire : une brève de Lyon', TEXTE_A7, [
  { q: '« En voulant éviter un piéton, il a freiné » : que dit ce gérondif ?', a: "La cause : il a freiné parce qu'il voulait éviter le piéton." },
  { q: '« Le piéton traversait en regardant son téléphone » : que dit ce gérondif ?', a: "La simultanéité, et la manière : il traversait les yeux sur son téléphone. C'est aussi pour ça qu'il n'a rien vu venir." },
  { q: '« En appelant immédiatement les secours, une passante a permis… » : que dit ce gérondif ?', a: "Le moyen : c'est en appelant les secours qu'elle a permis une prise en charge rapide." },
  { q: '« En respectant les feux, on évite… » : que dit ce gérondif ?', a: "Une condition : si on respecte les feux, on évite la plupart de ces accidents." },
], 'rec-b2-12-texte-a7', ['cause', 'condition']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La cause', '« En voulant aider, il a tout cassé. » Même sens :',
    ['parce qu’il voulait aider', 'pour aider', 'bien qu’il veuille aider'], 0,
    'La cause. EN: because he wanted to help.'),
  ctl('Le sujet', '« En oubliant son passeport, … »',
    ['elle a raté l’avion', 'l’avion est parti sans elle'], 0,
    'C’est elle qui oublie : elle est le sujet. EN: she is the subject.'),
  ctl('Le sens', 'Un même gérondif peut dire le moment et la cause :',
    ['oui, la phrase choisit', 'non, jamais'], 0,
    'En le voyant pâle : quand, et parce que. EN: yes, both.'),
], ['cause']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Parce que : la cause',
    opener: {
      line: "Il voulait sauver son chat, il s'est retrouvé sur le toit : ici le gérondif dit ce qui a tout déclenché. EN: He wanted to rescue his cat and ended up on the roof: here the gérondif says what set it all off.",
      imageRef: 'lessons/gerondif/act07.jpg',
    },
    sections: [],
    milestone: "Tu lis et tu écris un gérondif de cause, tu sais qu'un même gérondif peut porter deux sens, et tu gardes le bon sujet. EN: You can express cause with the gérondif and read its double meanings.",
    estScreens: 36, restPoints: ['a7-lecture', 'a7-ecoute'],
  },
  sections: [A7_LECTURE, A7_CARTES, A7_TRIER, A7_ECOUTE, A7_ERREURS, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: TOUT EN : L'OPPOSITION
 *
 *  tout en sachant = bien qu'il sache (lesson 32 in B1), one subject, no
 *  subjunctive; tout en without a clash = two things at once.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Le discours de Léa',
  frSub: 'Pour, mais contre',
  setting: 'Lausanne. Le conseil de quartier discute d’une piste cyclable. Léa prépare son intervention à voix haute ; son colocataire Hugo l’écoute depuis le canapé.',
  bubbles: [
    { from: 'user', fr: "Tout en étant d'accord sur le fond, je conteste la méthode.", en: 'While I agree on the substance, I dispute the method.' },
    { from: 'coach', fr: 'Tu es d’accord, et pourtant tu contestes : tout en dit une opposition.', en: 'You agree, and yet you object: tout en expresses a contrast.', warn: 'L’opposition' },
    { from: 'user', fr: 'Bien que la mairie promette des économies, les impôts vont augmenter.', en: 'Although the council promises savings, taxes are going up.' },
    { from: 'coach', fr: 'La mairie, les impôts : deux sujets. Tout en est impossible ici, bien que reste.', en: 'The council, the taxes: two subjects. Tout en is impossible here; bien que stays.', warn: 'Deux sujets : bien que' },
    { from: 'user', fr: 'Je prépare mon discours tout en surveillant les enfants du voisin.', en: 'I am preparing my speech while keeping an eye on the neighbour’s children.' },
    { from: 'coach', fr: 'Là, rien ne s’oppose : deux choses à la fois. Tout en dit aussi la simultanéité.', en: 'Nothing clashes there: two things at once. Tout en also means simultaneity.', warn: 'À la fois' },
    { from: 'user', fr: 'Tout en sachant que je vais perdre, je voterai contre.', en: 'Even though I know I will lose, I will vote against.' },
    { from: 'coach', fr: 'Tu sais, et pourtant tu votes : tout en sachant, comme bien que je sache.', en: 'You know, and yet you vote: tout en sachant, like bien que je sache.', warn: 'Tout en = bien que' },
  ],
  closing: { fr: 'Tout en : deux choses chez une même personne, qui vont ensemble ou qui s’opposent.', en: 'Tout en: two things in one person, which go together or clash.' },
  audio: REC('rec-b2-12-lea'),
  say: REFRAME,
  terms: ['opposition', 'bascule'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sens',
  title: 'Tout en, sur la balance',
  frSub: 'Le gérondif contre bien que',
  hint: 'Quatre cartes. La troisième garde bien que.',
  audio: REC('rec-b2-12-opposition'),
  say: REFRAME,
  terms: ['opposition'],
  cards: [
    {
      head: 'Tout en = bien que', label: Cap(CONCESSION_REF),
      fr: fr(E(1725)), sub: rsOf(E(1725)),
      body: `« ${B132_REFRAME} » Tout en sachant pèse comme bien qu'il sache. EN: ${B132_REFRAME_EN}`,
    },
    {
      head: 'La même balance', label: 'bien que + subjonctif',
      fr: fr(CL(1446)), sub: rsOf(CL(1446)),
      body: "Bien que je connaisse le chemin = tout en connaissant le chemin. Le gérondif évite le subjonctif, mais il exige un seul sujet. EN: same meaning, no subjunctive, one subject.",
    },
    {
      head: 'Deux sujets', label: 'bien que reste',
      fr: fr(CL(1404)), sub: rsOf(CL(1404)),
      body: "Le projet est cher, je vote pour : deux sujets. Tout en ne peut pas porter le projet. EN: two subjects keep bien que.",
    },
    {
      head: 'À la fois', label: 'sans opposition',
      fr: fr(E(1730)), sub: rsOf(E(1730)),
      body: "Elle travaille, et elle suit des cours : rien ne s'oppose. Tout en dit alors que les deux vont ensemble. EN: without a clash, tout en means both at once.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'De bien que à tout en',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Tout en : l’opposition', [
      it(E(1725), 'il savait, il a accepté'),
      it(E(1727), 'je suis d’accord, je conteste'),
      it(E(1731), 'il habite près, il est en retard'),
      it(E(1736), 'il critique, il vote pour'),
    ], chk('« Tout en habitant à deux pas, il arrive toujours en retard. » Même sens :',
      ['bien qu’il habite à deux pas', 'parce qu’il habite à deux pas', 'quand il habite à deux pas'], 0,
      'Habiter près devrait l’aider : c’est une opposition. EN: although.')),
    grp('Le même sujet, deux tournures', [
      it(CL(1446), 'bien que + subjonctif'),
      it(E(1728), 'tout en + -ant'),
      it(CL(1436), 'bien que + subjonctif'),
      it(E(1727), 'tout en + -ant'),
    ], chk('« Bien que je sois d’accord, j’ai une question. » Avec tout en :',
      ['Tout en étant d’accord, j’ai une question.', 'Tout en soyant d’accord, j’ai une question.'], 0,
      'Être donne étant. EN: étant.')),
    ctl('Deux sujets', '« Bien que le projet soit cher, je vote pour. » Avec tout en ?',
      ['impossible : deux sujets', 'tout en étant cher, je vote pour'], 0,
      'Ce serait moi qui suis cher. EN: two subjects keep bien que.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition', 'bascule'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Tout en, dans la presse et ailleurs',
  frSub: 'Et les tournures voisines',
  examples: [
    ex(E(1729), 'la presse : le jury salue, et refuse quand même'),
    ex(E(1732), 'la presse politique : il se dit prêt, il ne cède rien'),
    ex(E(1734), 'alors que + indicatif : la même opposition, deux verbes conjugués'),
    ex(E(1726), 'bien que + subjonctif : la même idée, au présent'),
    ex(E(1735), 'vouloir partir, et rester quand même'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Tout en, sans subjonctif',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Tout en : un sujet, et en -ant',
    body: "Tout en se construit comme le gérondif : en + -ant, sans subjonctif ni que. Il garde le sujet du verbe principal ; avec deux sujets, reviens à bien que. EN: tout en + -ant, one subject; two subjects, bien que.",
  },
  cards: [
    trap(E(1725), 'le subjonctif', 'Tout en sache que c’était risqué, il a accepté.', 'Après tout en, le participe : sachant. EN: sachant.'),
    trap(E(1727), 'être', 'Tout en soyant d’accord sur le fond, je conteste la méthode.', 'Être donne étant. EN: étant.'),
    trap(E(1728), 'que de trop', 'Tout en que je connais le chemin, je prends le GPS.', 'Tout en veut un participe, pas que : tout en connaissant. EN: no que after tout en.'),
    trap(E(1729), 'deux sujets', 'Tout en saluant l’effort, le projet a été refusé par le jury.', 'Le projet ne salue pas : c’est le jury qui salue et qui refuse. EN: the jury is the subject.'),
    trap(E(1731), 'sans tout', 'En habitant à deux pas, il arrive toujours en retard.', 'Sans tout, on croirait à une cause. Tout marque le contraste. EN: tout marks the clash.'),
    trap(E(1735), 'l’accord', 'Tout en voulante partir, elle est restée jusqu’à la fin.', 'Invariable : voulant. EN: never agrees.'),
  ],
  drill: [
    { promptSay: 'Tout en … que c’était risqué, il a accepté.', opts: ['sachant', 'sache'], correct: 0 },
    { promptSay: 'Tout en … d’accord, je conteste la méthode.', opts: ['soyant', 'étant'], correct: 1 },
    { promptSay: '… le projet soit cher, je vote pour.', opts: ['Tout en', 'Bien que'], correct: 1 },
    { promptSay: 'Tout en … le projet, il a voté pour.', opts: ['critiquant', 'critique'], correct: 0 },
    { promptSay: 'Elle travaille tout en … des cours du soir.', opts: ['suivre', 'suivant'], correct: 1 },
    { promptSay: 'Bien qu’il … que c’est risqué, il accepte.', opts: ['sache', 'sait'], correct: 0 },
    { promptSay: 'Tout en saluant l’effort, … a refusé le projet.', opts: ['le jury', 'la décision'], correct: 0 },
    { promptSay: 'Tout en … à deux pas, il arrive en retard.', opts: ['habite', 'habitant'], correct: 1 },
  ],
  steps: STEPS('Tout en : un sujet, et en -ant', 'Six oppositions de travers'),
  audio: REC('rec-b2-12-piege-opposition'),
  say: REFRAME,
  terms: ['opposition', 'bascule'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Réécrire : l’avis d’une lectrice', TEXTE_A8, [
  { q: 'Première phrase ?', a: "Tout en étant favorable aux transports en commun, je trouve ce projet trop cher : je suis favorable, je trouve, un seul sujet." },
  { q: 'Deuxième phrase ?', a: "On garde bien que : la mairie promet, les impôts augmentent, deux sujets." },
  { q: 'Troisième phrase ?', a: "Tout en habitant à deux pas de la future station, je continuerai à prendre mon vélo." },
  { q: 'Quatrième phrase ?', a: "Tout en reconnaissant les efforts de la ville, je doute du calendrier." },
], 'rec-b2-12-texte-a8', ['opposition', 'bascule']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le sens', '« Tout en sachant que c’était risqué, il a accepté. » Il…',
    ['savait, et a accepté quand même', 'a accepté parce que c’était risqué'], 0,
    'Tout en marque l’opposition. EN: he knew, yet accepted.'),
  ctl('Le sujet', '« Bien que la mairie promette des économies, les impôts vont augmenter. » Avec tout en ?',
    ['impossible', 'tout en promettant des économies, les impôts vont augmenter'], 0,
    'Deux sujets : bien que reste. EN: two subjects.'),
  ctl('La forme', 'Après tout en, on met…',
    ['le participe en -ant', 'le subjonctif'], 0,
    'Tout en sachant, tout en étant. EN: the -ant form.'),
], ['opposition']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Tout en : l’opposition',
    opener: {
      line: "D'accord sur le fond, contre la méthode : ici tout en pose deux faits face à face, chez la même personne. EN: Agreeing on the substance, objecting to the method: here tout en sets two facts face to face, in one person.",
      imageRef: 'lessons/gerondif/act08.jpg',
    },
    sections: [],
    milestone: "Tu dis une opposition avec tout en quand le sujet est le même, et tu gardes bien que quand il change. EN: You can use tout en for a contrast within one subject, and bien que across two.",
    estScreens: 36, restPoints: ['a8-construire', 'a8-piege'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_EXEMPLES, A8_PIEGE, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: LE SUJET QUI MANQUE
 *
 *  Subject control, head on: the dangling gérondif, the two repairs, « qui
 *  sortait » against « en sortant », the imperative's hidden tu, and the
 *  tolerated fixed uses (proverbs, letter formulas).
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Le rapport de Moussa',
  frSub: 'Qui arrivait au bureau',
  setting: 'Dakar. Moussa écrit un court rapport sur l’alarme qui s’est déclenchée ce matin. Mme Ndiaye, sa responsable, le relit avec lui.',
  bubbles: [
    { from: 'user', fr: "J'ai écrit : en arrivant au bureau, l'alarme sonnait.", en: 'I wrote: arriving at the office, the alarm was ringing.' },
    { from: 'coach', fr: 'L’alarme n’arrive pas au bureau. Remets-toi en sujet.', en: 'The alarm does not arrive at the office. Put yourself back as the subject.', warn: 'Le mauvais sujet' },
    { from: 'user', fr: "En arrivant au bureau, j'ai entendu l'alarme.", en: 'As I arrived at the office, I heard the alarm.' },
    { from: 'coach', fr: 'Voilà : c’est toi qui arrives, toi qui entends.', en: 'There you are: you arrive, you hear.', warn: 'Réparer : changer le sujet' },
    { from: 'user', fr: "Ou alors : quand je suis arrivé au bureau, l'alarme sonnait.", en: 'Or else: when I got to the office, the alarm was ringing.' },
    { from: 'coach', fr: 'Aussi juste : deux sujets, donc une subordonnée.', en: 'Just as correct: two subjects, so a clause.', warn: 'Réparer : la bascule' },
    { from: 'user', fr: "J'ai croisé le gardien en sortant de l'ascenseur.", en: 'I ran into the caretaker as I came out of the lift.' },
    { from: 'coach', fr: 'C’est toi qui sortais. Si c’était lui, dis : le gardien qui sortait de l’ascenseur.', en: 'You were the one coming out. If it was him, say: the caretaker who was coming out of the lift.', warn: 'Qui sortait' },
  ],
  closing: { fr: 'Le gérondif prend le sujet du verbe principal. Sinon, change ce sujet ou passe à une subordonnée.', en: 'The gérondif takes the main subject. Otherwise, change that subject or switch to a clause.' },
  audio: REC('rec-b2-12-moussa'),
  say: REFRAME,
  terms: ['sujet', 'bascule'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sujet',
  title: 'Le sujet, et comment le réparer',
  frSub: 'Une règle, deux réparations',
  hint: 'Quatre cartes. La dernière donne l’action à l’autre personne.',
  audio: REC('rec-b2-12-sujet'),
  say: REFRAME,
  terms: ['sujet', 'bascule'],
  cards: [
    {
      head: 'Le bon sujet', label: 'celui du verbe principal',
      fr: fr(E(1740)), sub: rsOf(E(1740)),
      body: "J'entre, je vois Marie : le même sujet fait les deux actions. C'est la seule façon dont le gérondif fonctionne. EN: the same subject does both.",
    },
    {
      head: 'Réparer, un', label: 'change le sujet',
      fr: fr(E(1742)), sub: rsOf(E(1742)),
      body: "« En entrant, la porte s'est refermée » faisait entrer la porte. Mets nous en sujet, et la porte devient complément. EN: repair one: make the doer the main subject.",
    },
    {
      head: 'Réparer, deux', label: 'une subordonnée',
      fr: fr(E(1741)), sub: rsOf(E(1741)),
      body: "Ou garde les deux sujets et passe à quand, pendant que, si ou parce que : chaque verbe a alors le sien. EN: repair two: switch to a clause.",
    },
    {
      head: 'Qui sortait', label: 'l’autre personne',
      fr: fr(E(1746)), sub: rsOf(E(1746)),
      body: "J'ai croisé Paul en sortant : c'est moi qui sors. J'ai croisé Paul qui sortait : c'est Paul. La relative donne l'action à l'autre. EN: a relative clause gives the action to the other person.",
    },
  ],
};

const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-trier',
  layer: 'core',
  size: 'lg',
  title: 'Accroché, ou dans le vide',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Un gérondif bien accroché', [
      it(E(1740), 'j’entre, je vois'),
      it(E(1743), 'vous signez, vous acceptez'),
      it(E(1749), 'je remplis, je me trompe'),
      it('fr.b1.ecologie.1107', 'tu sors, tu éteins'),
    ], chk('« Éteins la lumière en sortant, s’il te plaît. » Qui sort ?',
      ['toi', 'la lumière', 'moi'], 0,
      'L’impératif a un sujet caché : tu. EN: the imperative’s subject, you.')),
    grp('Deux réparations', [
      it(E(1750), 'je garde le sujet : j’ai été hébergée'),
      it(E(1751), 'je passe à quand'),
      it(E(1754), 'pendant que, pour la pluie'),
      it(E(1755), 'nous visitons, nous voyons'),
    ], chk('« En arrivant à Montréal, une amie m’a hébergée. » Pourquoi est-ce faux ?',
      ['ce serait l’amie qui arrive à Montréal', 'arriver ne se met pas au gérondif'], 0,
      'Le sujet d’héberger est l’amie : c’est elle qui arriverait. EN: the friend would be arriving.')),
    ctl('L’autre personne', '« J’ai croisé Paul qui sortait du métro. » Qui sortait ?',
      ['Paul', 'moi'], 0,
      'Qui reprend Paul. EN: Paul.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet', 'bascule'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui fait l’action en -ant',
  frSub: 'Neuf phrases, un sujet à trouver',
  lines: [
    ln(E(1740)), ln(E(1745)), ln(E(1746)), ln(E(1747)), ln(E(1748)),
    ln(E(1750)), ln(E(1751)), ln(E(1754)), ln(CL(1334)),
  ],
  questions: [
    { q: 'Deuxième phrase : qui sortait du métro ?', opts: ['moi', 'Paul'], correct: 0, why: 'En sortant : le sujet de j’ai croisé. EN: me.' },
    { q: 'Troisième phrase : qui sortait du métro ?', opts: ['Paul', 'moi'], correct: 0, why: 'Qui sortait reprend Paul. EN: Paul.' },
    { q: 'Quatrième phrase : où l’entends-tu ?', opts: ['à la fin d’une lettre formelle', 'dans une conversation entre amis'], correct: 0, why: 'Une formule de lettre ; le sujet est celui qui écrit. EN: a letter formula.' },
    { q: 'Cinquième phrase : de qui parle ce proverbe ?', opts: ['de tout le monde', 'd’une personne précise'], correct: 0, why: 'Un proverbe : le sujet est général. EN: everyone.' },
    { q: 'Dernière phrase : pourquoi pas de gérondif ?', opts: ['je dormais, le téléphone sonnait : deux sujets', 'dormir n’a pas de gérondif'], correct: 0, why: 'Deux sujets : pendant que reste. EN: two subjects.' },
  ],
  audio: REC('rec-b2-12-sujet-ecoute'),
  say: REFRAME,
  terms: ['sujet'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Six gérondifs dans le vide',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le gérondif prend le sujet du verbe principal',
    body: "Si le verbe principal a un autre sujet, c'est lui qui fait l'action du gérondif. Répare en changeant ce sujet, ou passe à quand, pendant que, si ou parce que. EN: change the main subject, or switch to a clause.",
  },
  cards: [
    trap(E(1740), 'Marie', 'En entrant dans le bureau, Marie m’a vu.', 'C’est toi qui entres : j’ai vu Marie. EN: I came in, so I am the subject.'),
    trap(E(1742), 'la porte', 'En entrant, la porte s’est refermée.', 'La porte n’entre pas : nous avons vu la porte se refermer. EN: we are the subject.'),
    trap(E(1743), 'le passif', 'En signant le contrat, les conditions sont acceptées.', 'Les conditions ne signent rien : vous acceptez les conditions. EN: you sign, you accept.'),
    trap(E(1750), 'l’amie', 'En arrivant à Montréal, une amie m’a hébergée.', 'C’est toi qui arrives : j’ai été hébergée par une amie. EN: keep I as the subject.'),
    trap(E(1756), 'l’enjeu', 'En lisant ce rapport, l’enjeu apparaît clairement.', 'L’enjeu ne lit pas : on comprend l’enjeu. EN: on reads, on understands.'),
    trap(E(1754), 'la pluie', 'En visitant le musée, il s’est mis à pleuvoir.', 'Le il de pleuvoir ne visite rien : pendant qu’on visitait. EN: impersonal il cannot visit.'),
  ],
  drill: [
    { promptSay: 'En entrant dans le bureau, …', opts: ['j’ai vu Marie', 'Marie m’a vu'], correct: 0 },
    { promptSay: 'En signant le contrat, …', opts: ['les conditions sont acceptées', 'vous acceptez les conditions'], correct: 1 },
    { promptSay: '… à Montréal, une amie m’a hébergée.', opts: ['En arrivant', 'Quand je suis arrivée'], correct: 1 },
    { promptSay: 'En lisant ce rapport, …', opts: ['on comprend l’enjeu', 'l’enjeu apparaît'], correct: 0 },
    { promptSay: 'J’ai croisé Paul … du métro. (c’est Paul qui sortait)', opts: ['qui sortait', 'en sortant'], correct: 0 },
    { promptSay: 'J’ai croisé Paul … du métro. (c’est moi qui sortais)', opts: ['qui sortait', 'en sortant'], correct: 1 },
    { promptSay: '… le musée, il s’est mis à pleuvoir.', opts: ['En visitant', 'Pendant qu’on visitait'], correct: 1 },
    { promptSay: 'En relisant ton courriel, …', opts: ['deux fautes m’ont sauté aux yeux', 'j’ai trouvé deux fautes'], correct: 1 },
  ],
  steps: STEPS('Le gérondif prend le sujet du verbe principal', 'Qui fait vraiment l’action'),
  audio: REC('rec-b2-12-piege-sujet'),
  say: REFRAME,
  terms: ['sujet', 'bascule'],
};

const A9_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a9-focus',
  layer: 'core',
  sheetId: 'sheet-sujet',
  title: 'Avant d’écrire un gérondif',
  points: [
    "Trouve le sujet du verbe principal. EN: find the main subject first.",
    "Ce sujet doit pouvoir faire l'action du gérondif : j'entre, je vois. EN: it must be the one doing the -ant action.",
    "Sinon, change ce sujet, ou passe à quand, pendant que, si ou parce que. EN: otherwise change it, or use a clause.",
    "Tolérés : les proverbes et les formules de lettre, où le sujet est tout le monde ou celui qui écrit. EN: proverbs and letter formulas are fixed exceptions.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet', 'bascule'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Corriger : le courriel d’Hugo', TEXTE_A9, [
  { q: 'Première erreur : « en rentrant du travail, le plafond coulait ».', a: "Le plafond ne rentre pas du travail. En rentrant du travail hier soir, j'ai vu que le plafond coulait ; ou : quand je suis rentré du travail, le plafond coulait." },
  { q: 'Deuxième erreur : « en appelant le plombier, il m’a dit… ».', a: "Ce serait le plombier qui s'appelle lui-même. Quand j'ai appelé le plombier, il m'a dit qu'il passerait lundi ; ou : en appelant le plombier, j'ai appris qu'il passerait lundi." },
  { q: 'Troisième erreur : « en remplissant le formulaire, une photo est demandée ».', a: "La photo ne remplit rien. En remplissant le formulaire d'assurance, j'ai vu qu'on demandait une photo ; ou : le formulaire demande une photo." },
  { q: 'Et « en attendant son passage » ou « en vous remerciant par avance » ?', a: "Justes tous les deux : c'est Hugo qui attend, et c'est lui qui remercie (je vous prie). La formule de fin de lettre a pour sujet celui qui écrit." },
], 'rec-b2-12-texte-a9', ['sujet', 'bascule']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('La règle', 'Le gérondif fait l’action…',
    ['du sujet du verbe principal', 'du nom le plus proche'], 0,
    'Toujours le sujet du verbe principal. EN: always the main subject.'),
  ctl('Réparer', '« En sortant, la pluie a commencé. » La meilleure réparation :',
    ['Quand je suis sorti, il a commencé à pleuvoir.', 'En sortant, la pluie commençait.', 'En sortant de la pluie, elle a commencé.'], 0,
    'Deux sujets : une subordonnée. EN: switch to a clause.'),
  ctl('Qui sortait', '« J’ai vu Léa en sortant du cinéma. » Qui sortait du cinéma ?',
    ['moi', 'Léa'], 0,
    'En sortant : le sujet de j’ai vu. EN: me.'),
], ['sujet']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Le sujet qui manque',
    opener: {
      line: "La porte qui entre, l'alarme qui arrive au bureau : ici tu répares le gérondif qui a perdu son sujet. EN: The door that walks in, the alarm that arrives at work: here you repair the gérondif that lost its subject.",
      imageRef: 'lessons/gerondif/act09.jpg',
    },
    sections: [],
    milestone: "Tu repères un gérondif sans le bon sujet et tu le répares, en changeant le sujet ou en passant à une subordonnée. EN: You can spot and repair a dangling gérondif.",
    estScreens: 40, restPoints: ['a9-trier', 'a9-piege'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_TRIER, A9_ECOUTE, A9_PIEGE, A9_FOCUS, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: LA PLACE ET LES FAUX AMIS
 *
 *  position and comma; register; en attendant and soit dit en passant as
 *  fixed phrases; en tout cas and en tant que are NOT gérondifs.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'En, et encore en',
  frSub: 'Dix phrases, des vrais et des faux',
  lines: [
    ln(E(1758)), ln(E(1759)), ln(E(1760)), ln(E(1762)), ln(E(1763)),
    ln(E(1764)), ln(E(1767)), ln(E(1768)), ln('fr.b1.expressions-de-quantite.1144'), ln(PF(573)),
  ],
  questions: [
    { q: 'Deuxième phrase : que veut dire l’expression du début ?', opts: ['au fait, entre nous', 'en marchant'], correct: 0, why: 'Soit dit en passant : une remarque glissée. EN: by the way.' },
    { q: 'Cinquième phrase : combien de fois entends-tu en ?', opts: ['deux fois', 'une fois'], correct: 0, why: 'En vacances (un nom), en emportant (un gérondif). EN: twice.' },
    { q: 'Sixième phrase : y a-t-il un gérondif ?', opts: ['non', 'oui'], correct: 0, why: 'En tant que : tant n’est pas un verbe. EN: no.' },
    { q: 'Neuvième phrase : l’expression du début est-elle un gérondif ?', opts: ['non, cas est un nom', 'oui'], correct: 0, why: 'En tout cas : pas de verbe. EN: no.' },
    { q: 'Dernière phrase : que veut dire en attendant ?', opts: ['d’ici là, pour le moment', 'pendant que j’attends le bus'], correct: 0, why: 'Seul, en attendant veut dire meanwhile. EN: meanwhile.' },
  ],
  audio: REC('rec-b2-12-faux-ecoute'),
  say: REFRAME,
  terms: ['faux', 'virgule'],
};

const A10_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a10-table',
  layer: 'core',
  sheetId: 'sheet-figees',
  title: 'Vrais, figés et faux',
  cols: ['Forme', 'Gérondif ?', 'Sens'],
  rows: [
    { cells: ['en courant', 'oui', 'la manière'], say: fr(E(1610)),
      detail: { title: 'en + -ant', body: "Un vrai gérondif : en, puis un verbe en -ant, avec le sujet du verbe principal. EN: a real gérondif.", say: fr(E(1762)) } },
    { cells: ['en attendant', 'figé', 'd’ici là'], say: fr(PF(573)),
      detail: { title: 'en attendant', body: "Seul, en attendant veut dire d'ici là. Suivi d'un nom, c'est un vrai gérondif (en attendant le bus) ; en attendant que prend le subjonctif. EN: alone, it means meanwhile.", say: fr(E(1767)) } },
    { cells: ['soit dit en passant', 'figé', 'au fait'], say: fr(E(1759)),
      detail: { title: 'soit dit en passant', body: "Une formule pour glisser une remarque, sans sujet à accrocher. EN: an aside, by the way.", say: fr(E(1758)) } },
    { cells: ['en tout cas', 'non', 'de toute façon'], say: fr('fr.b1.expressions-de-quantite.1144'),
      detail: { title: 'en tout cas', body: "Cas est un nom : en tout cas ne contient aucun verbe. EN: cas is a noun.", say: fr(E(1765)) } },
    { cells: ['en tant que', 'non', 'dans le rôle de'], say: fr(E(1764)),
      detail: { title: 'en tant que', body: "Tant n'est pas un verbe : en tant que stagiaire veut dire comme stagiaire. EN: as, in the role of.", say: fr(E(1764)) } },
    { cells: ['en vacances, en retard', 'non', 'en + nom'], say: fr(E(1763)),
      detail: { title: 'en + nom', body: "En vacances, en retard : en est ici une préposition devant un nom. Dans la même phrase, en emportant est un gérondif. EN: en before a noun is a preposition.", say: fr(E(1721)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['faux'],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-trier',
  layer: 'core',
  size: 'lg',
  title: 'La place, et les vrais',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('La place et la virgule', [
      it(E(1761), 'en tête : une virgule'),
      it(E(1760), 'au milieu : deux virgules'),
      it(E(1762), 'en fin : aucune'),
      it(E(1769), 'c’est en… que : la mise en relief'),
    ], chk('« Il est entré en courant. » Faut-il une virgule avant en courant ?',
      ['non', 'oui'], 0,
      'En fin de phrase, la manière colle au verbe. EN: no comma.')),
    grp('Vrai ou faux gérondif', [
      it(E(1758), 'en passant : un vrai'),
      it(E(1763), 'en vacances : non ; en emportant : oui'),
      it(E(1764), 'en tant que : non'),
      it('fr.b1.expressions-de-quantite.1144', 'en tout cas : non'),
    ], chk('« En tant que stagiaire, tu as droit à une carte. » Où est le gérondif ?',
      ['nulle part', 'en tant'], 0,
      'Tant n’est pas un verbe. EN: there is none.')),
    ctl('Le registre', 'Le gérondif appartient…',
      ['à tous les registres, à l’oral comme à l’écrit', 'seulement à l’écrit soutenu'], 0,
      'On l’entend partout : passe à la boulangerie en rentrant. EN: every register.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['virgule', 'faux'],
};

const A10_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-exemples',
  layer: 'core',
  title: 'En attendant, et ses cousins',
  frSub: 'Des expressions à connaître',
  examples: [
    ex(PF(573), 'en attendant, seul : d’ici là'),
    ex('fr.b2.opinions-et-avis.1942', `en attendant que + subjonctif, déjà vu dans ${MODES_REF}`),
    ex(E(1767), 'en attendant que tu trouves : jusqu’à ce que tu trouves'),
    ex(E(1768), 'le registre de tous les jours : un mot entre colocataires'),
    ex('fr.b1.expressions-de-quantite.1154', 'en tout cas : une expression, pas un gérondif'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['faux'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de place et d’expression',
  errors: [
    {
      wrong: 'En ouvrant la lettre Marie a pâli.',
      right: fr(E(1761)),
      why: "Normal : à l'oral, la pause ne s'entend presque pas. À l'écrit, un gérondif en tête de phrase prend une virgule. EN: a comma after a fronted gérondif.",
    },
    {
      wrong: 'En attendant que tu trouveras un appartement, tu peux dormir ici.',
      right: fr(E(1767)),
      why: "Normal : l'attente regarde vers l'avenir. Mais en attendant que se construit comme jusqu'à ce que, avec le subjonctif. EN: subjunctive after en attendant que.",
    },
    {
      wrong: "C'est par lire beaucoup qu'on enrichit son vocabulaire.",
      right: fr(E(1769)),
      why: "Normal : by reading ressemble à par. La mise en relief garde le gérondif : c'est en lisant… que. EN: c'est en… que.",
    },
    {
      wrong: "Soit dit en passé, le directeur n'était pas au courant.",
      right: fr(E(1759)),
      why: "Normal : on pense au passé de l'histoire. Mais l'expression est figée et garde le gérondif : soit dit en passant. EN: a fixed phrase keeps passant.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['virgule', 'faux'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Trier : le mot de Léa', TEXTE_A10, [
  { q: 'Quels sont les vrais gérondifs ?', a: "En courant (la manière), en rentrant (le moment), en y réfléchissant (le moment, et un peu la cause). Chacun a pour sujet celui du verbe principal : je, tu, je." },
  { q: 'Et en attendant, soit dit en passant ?', a: "D'anciens gérondifs devenus des expressions figées : en attendant veut dire d'ici là, soit dit en passant veut dire au fait." },
  { q: 'Quels sont les faux gérondifs ?', a: "En tout cas (cas est un nom) et en tant que (tant n'est pas un verbe)." },
  { q: 'Pourquoi « en y réfléchissant, je me dis » est-il juste ?', a: "Parce que le sujet du verbe principal est je, et que c'est Léa qui réfléchit. Avec « écris-lui aussi », le gérondif aurait pris le sujet tu." },
], 'rec-b2-12-texte-a10', ['faux', 'sujet']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Faux gérondif', 'En tout cas, c’est…',
    ['une expression avec un nom', 'un gérondif'], 0,
    'Cas est un nom. EN: cas is a noun.'),
  ctl('La virgule', 'En tête de phrase, le gérondif…',
    ['prend une virgule', 'n’en prend jamais'], 0,
    'En ouvrant la lettre, Marie a pâli. EN: a comma.'),
  ctl('Le registre', 'Le gérondif est…',
    ['courant, à l’oral comme à l’écrit', 'réservé à l’écrit soutenu'], 0,
    'On l’emploie partout. EN: everywhere.'),
], ['faux']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'La place et les faux amis',
    opener: {
      line: "En tout cas, en tant que, en attendant : ici tu trouves le gérondif à sa place, et tu démasques ceux qui lui ressemblent. EN: En tout cas, en tant que, en attendant: here you put the gérondif in its place and unmask its look-alikes.",
      imageRef: 'lessons/gerondif/act10.jpg',
    },
    sections: [],
    milestone: "Tu places et ponctues le gérondif, tu reconnais les expressions figées, et tu sais que en tout cas et en tant que n'en sont pas. EN: You can place the gérondif and tell it from its look-alikes.",
    estScreens: 34, restPoints: ['a10-table', 'a10-exemples'],
  },
  sections: [A10_ECOUTE, A10_TABLE, A10_TRIER, A10_EXEMPLES, A10_ERREURS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: TES CONSEILS À UN NOUVEL ARRIVANT
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La réponse que tu vas imiter',
  frSub: 'Karim conseille Priya, sur un forum',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'une chorale', en: 'a choir', note: 'Un groupe de personnes qui chantent ensemble.' },
    { word: 'volontiers', en: 'gladly', note: 'Avec plaisir, sans se faire prier.' },
    { word: 'le chemin parcouru', en: 'how far you have come', note: 'Les progrès faits depuis le début.' },
  ],
  questions: [
    { q: 'Global : à qui Karim répond-il, et pourquoi ?', a: "À Priya, qui travaille en anglais à Québec et veut progresser en français : il lui donne ses conseils d'ancien nouvel arrivant." },
    { q: 'Détail : comment lire des mots français chaque jour sans y penser ?', a: "En changeant la langue de son téléphone : un gérondif de moyen, avec un futur ensuite (une condition)." },
    { q: '« C’est en me trompant devant mes collègues que j’ai retenu… » : que met cette tournure en valeur ?', a: "Le moyen : c'est en… que le place en tête, pour insister." },
    { q: 'Dans « en chantant, on travaille la prononciation », qui chante ?', a: "On, le sujet du verbe principal : n'importe quel membre de la chorale." },
    { q: 'Inférence : que veut dire « tout en gardant ton anglais au travail » ?', a: "Priya peut continuer à travailler en anglais, et malgré tout vivre en français le reste du temps : deux choses à la fois, avec une nuance d'opposition." },
    { q: 'Position : quel ton Karim prend-il ?', a: "Un ton chaleureux et encourageant, d'égal à égal, avec sa propre expérience comme preuve." },
  ],
  audio: REC('rec-b2-12-modele'),
  say: REFRAME,
  terms: ['maniere', 'condition'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-conseil',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Des conseils, et comment les suivre',
  steps: [
    'Salue la personne et montre que tu comprends sa situation. EN: greet and show you understand.',
    'Choisis trois ou quatre conseils, un par paragraphe : le logement, la langue, le quotidien, les gens. EN: three or four pieces of advice.',
    'Pour chaque conseil, dis comment, avec un gérondif de moyen ou de manière. EN: say how, with a gérondif.',
    'Ajoute au moins une condition (en partant tôt, tu…) et un tout en. EN: add a condition and a tout en.',
    'Vérifie le sujet de chaque gérondif, puis termine par un encouragement. EN: check every subject, then end warmly.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['maniere', 'sujet'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  sheetId: 'sheet-conseil',
  title: 'Quatre phrases que tout conseil contient',
  cases: [
    { situation: 'Tu dis comment progresser', fr: fr(E(1776)), en: en(E(1776)) },
    { situation: 'Tu poses une condition', fr: fr(E(1775)), en: en(E(1775)) },
    { situation: 'Tu nuances avec tout en', fr: fr(E(1778)), en: en(E(1778)) },
    { situation: 'Tu rassures sur les erreurs', fr: fr(E(1781)), en: en(E(1781)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['maniere', 'condition'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'L’appel de Diego',
  frSub: 'Six tours, à voix haute',
  setting: 'Ton ami Diego arrive à Lyon le mois prochain. Il t’appelle pour te demander des conseils, et tu lui réponds avec ton expérience.',
  turns: [
    {
      ai: 'Salut ! Alors, comment je fais pour trouver un appart à Lyon ?', en: 'Hi! So, how do I find a flat in Lyon?',
      user: 'En cherchant dès maintenant, tu trouveras quelque chose avant la rentrée.',
      userEn: 'If you start looking now, you will find something before September. (A condition: en cherchant = si tu cherches.)',
      alts: [
        { fr: 'Si tu cherches dès maintenant, tu trouveras avant la rentrée.', en: 'If you look now, you will find something before September. (The si clause: also right.)' },
        { fr: 'Commence tout de suite, en regardant les annonces tous les jours.', en: 'Start straight away, by checking the ads every day. (The means.)' },
      ],
    },
    {
      ai: 'Et le français ? Je le parle encore mal.', en: 'And French? I still speak it badly.',
      user: 'Tu progresseras vite en parlant avec tout le monde, même mal.',
      userEn: 'You will improve fast by talking to everyone, even badly. (The means.)',
      alts: [
        { fr: 'C’est en te trompant que tu apprendras.', en: 'Making mistakes is how you will learn. (C’est en… que: the means, highlighted.)' },
        { fr: 'En allant à un cours du soir deux fois par semaine, tu progresseras.', en: 'By going to an evening class twice a week, you will improve.' },
      ],
    },
    {
      ai: 'J’ai un peu peur d’être seul le soir.', en: 'I am a bit afraid of being alone in the evenings.',
      user: 'En t’inscrivant à un club, tu rencontreras vite des gens.',
      userEn: 'If you join a club, you will soon meet people. (A condition, with te for tu.)',
      alts: [
        { fr: 'Tu te feras des amis en allant aux fêtes de quartier.', en: 'You will make friends by going to neighbourhood parties. (The means.)' },
        { fr: 'Si tu t’inscris à un club, tu rencontreras du monde.', en: 'If you join a club, you will meet people. (The si clause: also right.)' },
      ],
    },
    {
      ai: 'Et toi, comment ça s’est passé la première fois ?', en: 'And you, how did it go the first time?',
      user: 'En arrivant, j’ai été hébergé par un collègue.',
      userEn: 'When I arrived, I was put up by a colleague. (The gérondif keeps I as the subject.)',
      alts: [
        { fr: 'Quand je suis arrivé, un collègue m’a hébergé.', en: 'When I arrived, a colleague put me up. (Two subjects: quand.)' },
        { fr: 'Un collègue m’a hébergé pendant que je cherchais un logement.', en: 'A colleague put me up while I looked for somewhere to live. (Two subjects: pendant que.)' },
      ],
    },
    {
      ai: 'Tu gardes le contact avec ta famille ?', en: 'Do you keep in touch with your family?',
      user: 'Oui, tout en évitant de passer mes soirées au téléphone.',
      userEn: 'Yes, while making sure I do not spend my evenings on the phone. (Tout en: two things at once, with a contrast.)',
      alts: [
        { fr: 'Oui, je les appelle le dimanche, en prenant mon café.', en: 'Yes, I call them on Sundays over my coffee. (Two things at once.)' },
        { fr: 'Oui, tout en vivant ma vie ici.', en: 'Yes, while living my life here. (Tout en.)' },
      ],
    },
    {
      ai: 'Merci ! Un dernier conseil ?', en: 'Thanks! One last piece of advice?',
      user: 'Sors, marche, et passe à la boulangerie en rentrant : c’est comme ça qu’on se sent chez soi.',
      userEn: 'Go out, walk, and stop at the bakery on your way home: that is how you feel at home. (A gérondif of time, in everyday speech.)',
      alts: [
        { fr: 'Ne reste pas chez toi : c’est en sortant qu’on s’attache à une ville.', en: 'Do not stay in: going out is how you get attached to a city. (C’est en… que.)' },
        { fr: 'Explore la ville en marchant, sans plan.', en: 'Explore the city on foot, without a map. (The manner.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition', 'maniere', 'sujet'],
};

const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Tes conseils à un nouvel arrivant',
  frSub: 'Mission écrite, format B2',
  brief: "Un ami, un collègue ou une personne sur un forum va s'installer dans une ville que tu connais, ou commencer à apprendre une langue que tu parles. Écris-lui un message de conseils : comment s'installer, comment progresser, quoi éviter. Choisis l'un des deux sujets, la ville ou la langue.",
  briefEn: 'A friend, a colleague or someone on a forum is about to settle in a city you know, or to start learning a language you speak. Write them a message of advice: how to settle in, how to make progress, what to avoid. Choose one of the two topics, the city or the language.',
  produce: "Écris un texte de 180 à 250 mots : au moins six gérondifs, dont au moins deux de moyen ou de manière, au moins une condition (en partant tôt, tu…) et un tout en. Chaque gérondif a le sujet du verbe principal. Termine par un encouragement.",
  responseSpec: { kind: 'text', minWords: 180, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : Un vrai message de conseils, adressé à quelqu'un, avec trois ou quatre conseils concrets, ce qu'il faut éviter, et un encouragement à la fin. Entre 180 et 250 mots.",
          '2 : Le message existe, mais les conseils restent vagues, ou l’encouragement manque, ou la longueur sort un peu des limites.',
          '1 : Une liste de phrases sans destinataire, ou un texte beaucoup trop court.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          "3 : Un conseil par paragraphe, des liens clairs (d'abord, ensuite, enfin), et des gérondifs qui s'accrochent tous au bon sujet, sans qu'on se demande qui fait quoi.",
          '2 : Le message se suit, mais un gérondif est mal accroché ou deux conseils se mélangent.',
          '1 : On ne sait pas toujours qui fait l’action, ni dans quel ordre lire les conseils.',
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          "2 : Tu emploies le gérondif pour au moins trois sens (le moyen ou la manière, la condition, le moment), un tout en, et tu sais aussi garder quand, pendant que ou si quand le sujet change.",
          '1 : Le gérondif est là, mais toujours avec le même sens, ou il n’y en a que deux ou trois.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          "2 : Les formes sont justes (le radical du nous, ayant, étant, sachant, le pronom d'un pronominal), aucun gérondif sans le bon sujet, aucun futur après si.",
          "1 : Des erreurs fréquentes (en faire, en savant, en se levant avec je, un gérondif dont le sujet change) gênent parfois la lecture.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          "2 : Le ton convient à la personne : chaleureux et direct avec un ami, poli et clair sur un forum, sans langage de SMS.",
          '1 : Le texte sonne comme une notice administrative, ou comme une conversation transcrite (genre, du coup, t’inquiète).',
        ],
      },
    ],
  },
  scaffold: [
    'En arrivant,',
    'En cherchant bien,',
    "C'est en",
    'Tout en',
    'Tu progresseras en',
    'Quand tu',
    'Pendant que',
    'Bon courage,',
  ],
  modelAnswer: "Objet : quelques conseils pour ton arrivée à Bruxelles. Salut Tomás, tu m'as demandé comment t'installer ici sans trop de difficultés. Voici ce que j'ai appris en y vivant depuis trois ans. D'abord, le logement : en cherchant dès maintenant sur les sites d'annonces, tu trouveras un studio avant la rentrée. Visite toujours l'appartement avant de signer, et regarde bien l'état des fenêtres. Ensuite, la langue. On apprend le français en le parlant, pas en relisant sa grammaire le soir. En t'inscrivant à un cours du soir, tu progresseras vite et tu rencontreras des gens dans ta situation. Moi, j'ai beaucoup appris en écoutant la radio le matin. Ne t'inquiète pas si tu te trompes : c'est en te trompant que tu retiendras les mots. Pour le quotidien, prends un abonnement de transport : en utilisant le tram, tu gagneras du temps et de l'argent. Enfin, fais-toi un réseau. En allant aux activités de ton quartier, tu te sentiras vite chez toi. Tout en gardant le contact avec ta famille, essaie de ne pas passer toutes tes soirées au téléphone : c'est ici que ta nouvelle vie commence. Quand tu arriveras, appelle-moi : je te ferai visiter la ville en te montrant mes adresses préférées. Bon courage, et à très vite. Inès\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : un vrai message à Tomás, quatre conseils (le logement, la langue, le quotidien, le réseau), ce qu'il faut éviter (passer ses soirées au téléphone) et un encouragement.\n2. Cohérence : d'abord, ensuite, pour le quotidien, enfin ; chaque gérondif a pour sujet celui du verbe principal (tu trouveras, on apprend, je te ferai visiter).\n3. Étendue : le moyen (en le parlant, en utilisant le tram), la condition (en cherchant dès maintenant, en t'inscrivant), la mise en relief (c'est en te trompant que), un tout en, et quand avec un futur des deux côtés.\n4. Correction : le pronom suit le sujet (en t'inscrivant, en te trompant, en te montrant), aucun futur après si (si tu te trompes).\n5. Registre : un message amical courant, direct et chaleureux, sans langage de SMS.",
  modelAnswerEn: "Subject: a few tips for your arrival in Brussels. Hi Tomás, you asked me how to settle in here without too much trouble. Here is what I have learned from living here for three years. First, housing: if you start looking now on the listings sites, you will find a studio before September. Always visit the flat before signing, and look carefully at the state of the windows. Next, the language. You learn French by speaking it, not by rereading your grammar at night. If you sign up for an evening class, you will make quick progress and meet people in your situation. I learned a lot by listening to the radio in the morning. Do not worry if you make mistakes: making mistakes is how you will remember the words. For everyday life, get a travel pass: by using the tram, you will save time and money. Finally, build a network. By going to the activities in your neighbourhood, you will soon feel at home. While keeping in touch with your family, try not to spend every evening on the phone: this is where your new life begins. When you arrive, call me: I will show you round the city and take you to my favourite places. Good luck, and see you very soon. Inès. The marker's notes (not counted): 1. Task: a real message to Tomás, four pieces of advice, what to avoid and a word of encouragement. 2. Coherence: clear connectors; every gérondif takes the main verb's subject. 3. Range: means, condition, the c'est en… que highlight, one tout en, and quand with a future on both sides. 4. Accuracy: the pronoun follows the subject, no future after si. 5. Register: a friendly everyday message, direct and warm, no text-speak.",
  watchFor: [
    { pattern: 'A dangling gérondif: the main verb has another subject, so the -ant action is given to the wrong person (en arrivant, les gens m’ont aidé).', criterion: 'correction', feedback: 'Le gérondif prend le sujet du verbe principal. Change ce sujet (en arrivant, j’ai été aidé) ou passe à quand.', ref: 'a9-piege' },
    { pattern: 'The infinitive after en, or en dropped (en faire, il est entré courant).', criterion: 'correction', feedback: 'En veut la forme en -ant, et le gérondif garde toujours en : en faisant, en courant.', ref: 'a2-erreurs' },
    { pattern: 'A wrong form for avoir, être or savoir (en avant, en soyant, en savant).', criterion: 'correction', feedback: 'Trois verbes à part : ayant, étant, sachant.', ref: 'a3-piege' },
    { pattern: 'The pronoun of a pronominal that does not match the subject (en se levant, j’ai…).', criterion: 'correction', feedback: 'Le pronom suit le sujet du verbe principal : en me levant, j’ai…', ref: 'a3-construire' },
    { pattern: 'A gérondif forced onto two subjects where pendant que or quand is needed.', criterion: 'coherence', feedback: 'Deux personnes, deux sujets : garde pendant que ou quand.', ref: 'a4-piege' },
    { pattern: 'Par + infinitive or avec + -ant for the means (par travailler, avec souriant).', criterion: 'etendue', feedback: 'Le moyen se dit en + -ant : en travaillant. Par et avec prennent un nom.', ref: 'a5-erreurs' },
    { pattern: 'A condition gérondif with a mismatched main tense, or a future after si (si tu partiras).', criterion: 'correction', feedback: 'En partant tôt, tu éviteras ; en prenant le train, tu gagnerais. Après si, jamais de futur.', ref: 'a6-piege' },
    { pattern: 'Tout en with a subjunctive or que (tout en sache, tout en que), or with two subjects.', criterion: 'correction', feedback: 'Tout en + -ant, un seul sujet ; sinon, bien que + subjonctif.', ref: 'a8-piege' },
    { pattern: 'Fewer than six gérondifs, only one meaning, or no condition and no tout en.', criterion: 'etendue', feedback: 'Varie les sens : le moyen, une condition, un moment, et un tout en.', ref: 'a11-plan' },
    { pattern: 'Three or more gérondifs stacked in one sentence, or a fronted gérondif with no comma.', criterion: 'coherence', feedback: 'Un gérondif par idée, et une virgule quand il ouvre la phrase.', ref: 'a10-trier' },
    { pattern: 'No closing encouragement, fewer than three pieces of advice, or a body outside 180 to 250 words.', criterion: 'tache', feedback: 'Ajoute un conseil concret et termine par un encouragement : bon courage, écris-moi…', ref: 'a11-plan' },
    { pattern: 'A register that does not fit the reader: text-speak (t’inquiète, du coup) or a cold administrative list.', criterion: 'registre', feedback: 'Adresse-toi à la personne, comme Karim : chaleureux, clair, sans langage de SMS.', ref: 'a11-lecture' },
  ],
  graderNotes: [
    'Count the words of the body only; a subject line, greeting and signature do not count. 180 to 250 with 10% tolerance (162 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'Judge each gérondif by its SUBJECT first: the doer of the -ant action must be the subject of the main verb (or the implied tu or vous of an imperative). A dangling gérondif costs one « correction » point once, not per occurrence, and « coherence » only if it actually misleads.',
    'Letter formulas (« En vous remerciant par avance. » standing alone, « En vous remerciant par avance, je vous prie… », « En attendant de vous lire… ») and proverbs (« L’appétit vient en mangeant ») are fixed uses: never score them as dangling.',
    'The MEANING of a gérondif is read from context; where it carries two readings (time and cause, means and condition), accept either and do not ask the learner to choose.',
    '« Après avoir + participe » is the everyday alternative to « en ayant + participe »: accept both; « en ayant fini » earns no extra range credit.',
    'The participe présent WITHOUT en and the verbal adjective belong to a later lesson: do not score them as errors if a learner uses them correctly, and give them no range credit.',
    'Writer and reader gender are unknown: judge agreement for internal consistency only.',
    'Accept regional vocabulary and settings (Québec, Belgium, Switzerland, West Africa): balado, magasiner, dépanneur, septante, fin de semaine, courriel and mail.',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 32 du B1 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet', 'maniere', 'condition'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes conseils à voix haute',
  frSub: 'Le sujet, puis le verbe en -ant',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet', 'maniere'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-forme',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la forme', v: 'en + nous sans -ons + -ant', say: fr(E(1628)),
      detail: { title: 'La forme', body: "Nous faisons, en faisant. Ayant, étant, sachant à part. Invariable. EN: from nous; three verbs apart; never agrees.", say: fr(E(1644)) } },
    { k: 'le sujet', v: 'celui du verbe principal', say: fr(E(1600)),
      detail: { title: 'Le sujet', body: "Le gérondif prend le sujet du verbe principal ; sinon, change ce sujet ou passe à une subordonnée. EN: the main subject, or a clause.", say: fr(E(1751)) } },
    { k: 'en même temps', v: 'pendant que, au moment où', say: fr(E(1661)),
      detail: { title: 'La simultanéité', body: "Deux actions à la fois, ou un instant. Deux sujets : pendant que, quand. EN: at once, or at the moment.", say: fr(E(1663)) } },
    { k: 'comment', v: 'la manière, le moyen', say: fr(E(1677)),
      detail: { title: 'La manière et le moyen', body: "En courant, en travaillant le soir. Avec et par prennent un nom. EN: how, with en + -ant.", say: fr(E(1610)) } },
    { k: 'si, parce que', v: 'la condition, la cause', say: fr(E(1694)),
      detail: { title: 'La condition et la cause', body: "En partant tôt, tu éviteras ; en voulant aider, il a tout cassé. EN: si or parce que, same subject.", say: fr(E(1611)) } },
    { k: 'tout en', v: 'à la fois, ou bien que', say: fr(E(1725)),
      detail: { title: 'Tout en', body: "Deux choses chez une même personne, qui vont ensemble ou qui s'opposent. EN: at once, or although.", say: fr(E(1730)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'sujet', 'opposition'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu formes le gérondif à partir du nous, avec ayant, étant et sachant à part, les pronoms à leur place et la négation autour du participe. Tu lui fais dire le moment, la manière, le moyen, la condition, la cause et, avec tout en, l'opposition. Le piège qui reste, c'est le sujet : en anglais, un -ing peut flotter, en français jamais. Avant l'examen, reprends ton texte et, pour chaque gérondif, demande-toi : qui fait cette action ? Si ce n'est pas le sujet du verbe principal, change le sujet ou passe à quand, pendant que, si. EN: For every gérondif, ask who does it; if it is not the main subject, repair the sentence.",
  stats: [
    { k: 'La forme', v: 'en + -ant, ayant, étant, sachant' },
    { k: 'Le sujet', v: 'celui du verbe principal' },
    { k: 'Les sens', v: 'moment, manière, condition, cause, opposition' },
    { k: 'Les faux', v: 'en tout cas, en tant que' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 1 to 10, a round that
 *  recycles lessons 1, 10, 31 and 32 in B1 and 2, 6 and 26 in B2 (named in
 *  each question), and an exam-format round (TCF, DELF B2 and TEF items).
 *  `fold()` strips accents, commas, apostrophes and hyphens, so every typed
 *  answer turns on a letter of the form, a pronoun or a word choice. */

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

const MESSAGE_TEF = "Bonjour, ici Mme Leroy, du service des inscriptions. Pour votre dossier, vous gagnerez du temps en remplissant le formulaire en ligne avant de venir. En arrivant, présentez-vous à l'accueil avec votre pièce d'identité. Tout en restant ouverts le samedi matin, nous vous conseillons de venir en semaine. Bonne journée.";

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-sujet', label: 'Un seul sujet', targets: ['qui-fait-quoi'],
      questions: [
        mc('« En sortant du métro, j’ai dû passer un contrôle. » Qui sortait du métro ?', ['moi', 'le contrôleur', 'on ne sait pas'], 0, 'Le sujet de j’ai dû : moi. EN: me.', 'a1-scene'),
        mc('« En sortant du métro, un contrôleur m’a demandé mon billet. » D’après la grammaire, qui sortait ?', ['le contrôleur', 'moi'], 0, 'Le gérondif prend le sujet du verbe principal. EN: the inspector.', 'a1-scene'),
        mc('Dans le billet de blog, « en achetant votre manteau dès octobre » dit…', ['une condition', 'une cause', 'un moment passé'], 0, 'Si vous achetez votre manteau. EN: a condition.', 'a1-lecture'),
        tI('Mets le verbe au gérondif.', "J'ai appris ces mots en (écouter) mes collègues.", fr(E(1601)), 'Écoutons, donc écoutant. EN: écoutant.', 'a1-reperer'),
        tI('Mets le verbe au gérondif.', "J'ai lu dix romans en (aller) au travail.", fr(E(1604)), 'Allons, donc allant. EN: allant.', 'a1-lecture'),
        eS('En prenant le métro, une heure par jour a été gagnée.', fr(E(1605)), 'C’est moi qui prends le métro : j’ai gagné. EN: I am the subject.', 'a1-usages', ["J'ai gagné une heure par jour en prenant le métro."], 'Le sujet ne va pas : c’est moi qui prends le métro. Écris la phrase correcte, avec je. EN: The subject is wrong: I take the metro. Rewrite it with je.'),
        lC('Écoute. Qui fait les deux actions ?', fr('fr.b1.journalisme.1066'), ['la même personne', 'deux personnes'], 0, 'J’écoute, je marche. EN: one person.', 'a1-reperer'),
        lC('Écoute. Peut-on dire la même chose avec un gérondif ?', fr(CL(1333)), ['non, il y a deux sujets', 'oui'], 0, 'Tu cuisines, je mets la table. EN: two subjects.', 'a1-reperer'),
      ],
    },
    {
      id: 'r2-forme', label: 'La forme', targets: ['forme-fausse'],
      questions: [
        mc('Nous finissons donne…', ['en finissant', 'en finant', 'en finirant'], 0, 'Finiss-, puis -ant. EN: finissant.', 'a2-table'),
        mc('Manger, au gérondif :', ['en mangant', 'en mangeant'], 1, 'Le e de mangeons reste. EN: mangeant.', 'a2-rappel'),
        mc('« Elles sont sorties en … »', ['riant', 'riantes', 'riants'], 0, 'Le gérondif est invariable. EN: riant.', 'a2-erreurs'),
        tI('Mets le verbe au gérondif.', 'Elle chante en (faire) la vaisselle.', fr(E(1628)), 'Faisons, donc faisant. EN: faisant.', 'a2-table'),
        tI('Mets le verbe au gérondif.', 'Il a appris le métier en (voyager).', fr(E(1637)), 'Voyageons : le e reste. EN: voyageant.', 'a2-construire'),
        tI('Mets le verbe au gérondif.', 'Elle a répondu en (choisir) ses mots.', fr(E(1638)), 'Choisissons, donc choisissant. EN: choisissant.', 'a2-construire'),
        eS('Elle chante en faire la vaisselle.', fr(E(1628)), 'En veut la forme en -ant. EN: en faisant.', 'a2-erreurs', ["Elle chante pendant qu'elle fait la vaisselle."]),
        lC('Écoute. De quel verbe vient ce gérondif ?', fr(E(1629)), ['lire', 'lier', 'lisser'], 0, 'Lisons, donc lisant. EN: lire.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-trois', label: 'Trois à part', targets: ['trois-faux'],
      questions: [
        mc('Avoir, au gérondif :', ['en ayant', 'en avant', 'en avoyant'], 0, 'Ayant : un des trois verbes à part. EN: ayant.', 'a3-cartes'),
        mc('Savoir, au gérondif :', ['en savant', 'en sachant'], 1, 'Savant est un nom. EN: sachant.', 'a3-construire'),
        mc('« … levant, j’ai vu la neige. »', ['En me', 'En se'], 0, 'Le sujet est je, donc me. EN: me.', 'a3-construire'),
        tI('Mets le verbe au gérondif.', 'En (être) poli, on obtient souvent plus.', fr(E(1644)), 'Être donne étant. EN: étant.', 'a3-cartes'),
        tI('Mets le verbe au gérondif, à la forme négative.', 'Il est parti en (ne rien dire).', fr(E(1650)), 'Ne avant le participe, rien après. EN: en ne disant rien.', 'a3-piege'),
        eS('Tu te sentiras mieux en se couchant plus tôt.', fr(E(1647)), 'Le sujet est tu : en te couchant. EN: te.', 'a3-piege', ['Tu te sentiras mieux si tu te couches plus tôt.', 'En te couchant plus tôt, tu te sentiras mieux.']),
        eS('En parlant en avec elle, j’ai changé d’avis.', fr(E(1655)), 'Le pronom se place avant le participe : en en parlant. EN: en en parlant.', 'a3-cartes'),
        lC('Écoute. Cette forme est-elle courante ?', fr(E(1656)), ['non, elle est rare : on dit plutôt après avoir fini', 'oui, très courante'], 0, 'En ayant fini : à reconnaître. EN: rare.', 'a3-exemples'),
      ],
    },
    {
      id: 'r4-simultane', label: 'En même temps', targets: ['deux-sujets-colles'],
      questions: [
        mc('« Il chante en se douchant. » Même sens :', ['Il chante pendant qu’il se douche.', 'Il chante parce qu’il se douche.', 'Il chante pour se doucher.'], 0, 'Deux actions à la fois, lui seul. EN: at the same time.', 'a4-cartes'),
        mc('Le prof parle ; les étudiants notent. Quelle phrase le dit ?', ['Pendant que le prof parle, les étudiants prennent des notes.', 'En parlant, les étudiants prennent des notes.'], 0, 'Deux sujets : pendant que. EN: two subjects.', 'a4-piege'),
        mc('« En arrivant à la gare, j’ai acheté un billet. » En arrivant veut dire…', ['au moment où je suis arrivé', 'parce que je suis arrivé', 'si j’arrive'], 0, 'Un instant précis. EN: the moment.', 'a4-cartes'),
        tI('Remplace pendant que par un gérondif.', 'Je prends des notes pendant que j’écoute le cours.', fr(E(1666)), 'Un seul sujet : en écoutant. EN: one subject.', 'a4-trier', ['Je prends des notes tout en écoutant le cours.', 'En écoutant le cours, je prends des notes.']),
        tI('Remplace quand par un gérondif.', 'Quand elle a ouvert la porte, elle a entendu la musique.', fr(E(1665)), 'Même sujet, un instant : en ouvrant. EN: en ouvrant.', 'a4-trier', ['Elle a entendu la musique en ouvrant la porte.']),
        eS('En arrivant à la gare, le train était parti.', fr(E(1664)), 'Deux sujets : quand. EN: quand.', 'a4-piege', ['Quand je suis arrivée à la gare, le train était parti.', 'Lorsque je suis arrivé à la gare, le train était parti.', 'Lorsque je suis arrivée à la gare, le train était parti.', "En arrivant à la gare, j'ai vu que le train était parti."]),
        eS('En parlant au client, le camion est arrivé.', fr(CL(1208)), 'Deux sujets : pendant que. EN: pendant que.', 'a4-piege', ['Quand je parlais au client, le camion est arrivé.', 'Alors que je parlais au client, le camion est arrivé.', 'Tandis que je parlais au client, le camion est arrivé.', "En parlant au client, j'ai vu le camion arriver."]),
        lC('Écoute. Qui sortait de la boulangerie ?', fr(E(1671)), ['moi', 'lui'], 0, 'Le sujet de j’ai croisé : moi. EN: me.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-maniere', label: 'Comment ?', targets: ['moyen-par'],
      questions: [
        mc('Le gérondif de manière ou de moyen répond à…', ['comment ?', 'où ?', 'combien ?'], 0, 'Comment : en courant, en travaillant. EN: how.', 'a5-table'),
        mc('« Il travaille en écoutant de la musique. » Le gérondif dit…', ['deux choses à la fois', 'le moyen de travailler'], 0, 'La musique accompagne. EN: at the same time.', 'a5-construire'),
        mc('She answered with a smile :', ['Elle a répondu avec un sourire.', 'Elle a répondu avec souriant.'], 0, 'Avec + nom. EN: avec plus a noun.', 'a5-table'),
        tI('Traduis : I paid for my studies by working in the evenings.', "J'ai payé mes études en (travailler) le soir.", fr(E(1677)), 'Le moyen : en travaillant. EN: en travaillant.', 'a5-construire'),
        tI('Complète le proverbe.', "C'est en (forger) qu'on devient forgeron.", fr(E(1679)), 'Forgeons : le e reste. EN: forgeant.', 'a5-exemples'),
        eS("J'ai payé mes études par travailler le soir.", fr(E(1677)), 'Le moyen : en + -ant. EN: en travaillant.', 'a5-erreurs'),
        eS('Il est entré courant.', fr(E(1610)), 'Garde en : en courant. EN: keep en.', 'a5-erreurs'),
        lC('Écoute. Comment a-t-on trouvé ce logement ?', fr(E(1685)), ['en demandant à tout le monde', 'par une agence'], 0, 'Le moyen : en demandant. EN: by asking.', 'a5-exemples'),
      ],
    },
    {
      id: 'r6-condition', label: 'Si : la condition', targets: ['condition-bancale'],
      questions: [
        mc('« En partant tôt, tu éviteras les bouchons. » Même sens :', ['Si tu pars tôt, tu éviteras les bouchons.', 'Parce que tu es parti tôt, tu as évité les bouchons.'], 0, 'Une condition. EN: si.', 'a6-cartes'),
        mc('« En prenant le train, tu … deux heures. » (une hypothèse)', ['gagnerais', 'gagnes', 'gagnais'], 0, 'Comme après si + imparfait. EN: the conditional.', 'a6-cartes'),
        mc('« Si tu pars tôt, je t’accompagnerai. » Avec un gérondif ?', ['impossible : deux sujets', 'En partant tôt, je t’accompagnerai.'], 0, 'Ce serait moi qui pars. EN: two subjects keep si.', 'a6-construire'),
        tI('Remplace si par un gérondif.', "Si tu réserves aujourd'hui, tu paieras moins cher.", fr(E(1696)), 'Même sujet : en réservant. EN: en réservant.', 'a6-construire', ["En réservant aujourd'hui, tu payeras moins cher.", "Tu paieras moins cher en réservant aujourd'hui.", "Tu payeras moins cher en réservant aujourd'hui."]),
        tI('Remplace si par un gérondif.', "Si tu t'inscris avant vendredi, tu auras une réduction.", fr(E(1700)), 'Te, pour tu : en t’inscrivant. EN: en t’inscrivant.', 'a6-piege', ["Tu auras une réduction en t'inscrivant avant vendredi."]),
        eS('En appuyant deux fois, la machine s’arrête.', fr(E(1702)), 'Tu appuies : tu dois être le sujet. EN: keep one subject.', 'a6-piege', [fr(PF(1253)), "Quand tu appuies deux fois, la machine s'arrête.", 'Tu arrêtes la machine en appuyant deux fois.']),
        eS('Si tu partiras tôt, tu éviteras les bouchons.', fr(E(1695)), 'Jamais de futur après si. EN: si tu pars.', 'a6-piege', [fr(E(1694))]),
        lC('Écoute. La personne a-t-elle lu la notice ?', fr(E(1703)), ['non', 'oui'], 0, 'Aurais compris : ça n’a pas eu lieu. EN: no.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-cause', label: 'Parce que : la cause', targets: ['cause-confuse'],
      questions: [
        mc('« En voulant aider, il a tout cassé. » Même sens :', ['parce qu’il voulait aider', 'pour aider', 'bien qu’il veuille aider'], 0, 'La cause. EN: because.', 'a7-cartes'),
        mc('« En travaillant trop, il est tombé malade. » Le gérondif dit…', ['la cause', 'le moyen'], 0, 'Un résultat non voulu : la cause. EN: the cause.', 'a7-cartes'),
        mc('« En le voyant pâle, j’ai compris. » Le gérondif dit…', ['le moment et la cause', 'seulement la condition'], 0, 'Quand je l’ai vu, et parce que. EN: both.', 'a7-trier'),
        tI('Mets le verbe au gérondif.', "En (oublier) son passeport, elle a raté l'avion.", fr(E(1712)), 'Oublions, donc oubliant. EN: oubliant.', 'a7-trier'),
        tI('Remplace parce que par un gérondif.', "Parce qu'il voulait bien faire, il a tout compliqué.", fr(E(1710)), 'Un seul sujet : en voulant. EN: en voulant.', 'a7-cartes'),
        eS("En oubliant son passeport, l'avion est parti sans elle.", fr(E(1712)), 'Elle oublie : elle est le sujet. EN: she is the subject.', 'a7-erreurs', [fr(E(1716)), "Comme elle avait oublié son passeport, l'avion est parti sans elle.", "Parce qu'elle avait oublié son passeport, l'avion est parti sans elle.", "Parce qu'elle avait oublié son passeport, elle a raté l'avion."]),
        eS('Par vouloir aider, il a tout cassé.', fr(E(1611)), 'La cause : en voulant. EN: en voulant.', 'a7-erreurs', [fr(E(1711)), 'Comme il voulait aider, il a tout cassé.']),
        lC('Écoute. Pourquoi a-t-elle raté l’avion ?', fr(E(1712)), ['elle avait oublié son passeport', 'le vol était annulé'], 0, 'En oubliant son passeport. EN: the passport.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-tout-en', label: 'Tout en', targets: ['tout-en-bancal'],
      questions: [
        mc('« Tout en sachant que c’était risqué, il a accepté. » Même sens :', ['Il a accepté alors qu’il savait que c’était risqué.', 'Il a accepté parce que c’était risqué.'], 0, 'Une opposition. EN: although.', 'a8-cartes'),
        mc('« Elle travaille tout en suivant des cours du soir. » Tout en dit ici…', ['deux choses à la fois', 'une opposition forte'], 0, 'Rien ne s’oppose. EN: both at once.', 'a8-cartes'),
        mc('« Bien que le projet soit cher, je vote pour. » Avec tout en ?', ['impossible : deux sujets', 'Tout en étant cher, je vote pour.'], 0, 'Ce serait moi qui suis cher. EN: two subjects.', 'a8-construire'),
        tI('Remplace bien que par tout en.', 'Bien que je connaisse le chemin, je prends le GPS.', fr(E(1728)), 'Un seul sujet : tout en connaissant. EN: tout en connaissant.', 'a8-construire'),
        tI('Remplace bien que par tout en.', "Bien que je sois d'accord sur le fond, je conteste la méthode.", fr(E(1727)), 'Être donne étant. EN: étant.', 'a8-construire'),
        eS('Tout en sache que c’était risqué, il a accepté.', fr(E(1725)), 'Après tout en, le participe : sachant. EN: sachant.', 'a8-piege', [fr(E(1734)), "Alors qu'il savait que c'était risqué, il a accepté.", "Bien qu'il sache que c'était risqué, il a accepté."]),
        eS('Tout en saluant l’effort, le projet a été refusé par le jury.', fr(E(1729)), 'C’est le jury qui salue : il doit être le sujet. EN: the jury.', 'a8-piege', ["Le jury a refusé le projet tout en saluant l'effort."]),
        lC('Écoute. Le ministre a-t-il cédé ?', fr(E(1732)), ['non, rien', 'oui, beaucoup'], 0, 'N’a rien cédé. EN: nothing.', 'a8-exemples'),
      ],
    },
    {
      id: 'r9-sujet', label: 'Le sujet qui manque', targets: ['gerondif-pendant'],
      questions: [
        mc('« J’ai croisé Paul en sortant du métro. » Qui sortait ?', ['moi', 'Paul'], 0, 'En sortant : le sujet de j’ai croisé. EN: me.', 'a9-cartes'),
        mc('« J’ai croisé Paul qui sortait du métro. » Qui sortait ?', ['Paul', 'moi'], 0, 'Qui reprend Paul. EN: Paul.', 'a9-cartes'),
        mc('Quelle phrase est juste ?', [fr(E(1750)), "En arrivant à Montréal, une amie m'a hébergée."], 0, 'C’est moi qui arrive. EN: I am the subject.', 'a9-trier'),
        mc('« L’appétit vient en mangeant. » Pourquoi est-ce accepté ?', ['un proverbe : le sujet est tout le monde', 'l’appétit mange vraiment'], 0, 'Un proverbe figé. EN: a fixed proverb.', 'a9-focus'),
        tI('Répare en changeant le sujet.', 'En signant le contrat, les conditions sont acceptées.', fr(E(1743)), 'Vous signez, vous acceptez. EN: you.', 'a9-piege', ['En signant le contrat, tu acceptes les conditions.', 'En signant le contrat, on accepte les conditions.', 'En signant le contrat, nous acceptons les conditions.', "En signant le contrat, j'accepte les conditions.", 'Vous acceptez les conditions en signant le contrat.']),
        eS('En entrant, la porte s’est refermée.', fr(E(1742)), 'La porte n’entre pas. EN: we are the subject.', 'a9-piege', ["Quand nous sommes entrés, la porte s'est refermée.", "Quand je suis entré, la porte s'est refermée.", "Quand je suis entrée, la porte s'est refermée.", "Quand on est entrés, la porte s'est refermée.", "En entrant, j'ai vu la porte se refermer."]),
        eS('En lisant ce rapport, l’enjeu apparaît clairement.', fr(E(1756)), 'L’enjeu ne lit pas : on comprend. EN: on.', 'a9-piege', ['En lisant ce rapport, on comprend clairement l’enjeu.', 'En lisant ce rapport, on voit clairement l’enjeu.', 'Quand on lit ce rapport, l’enjeu apparaît clairement.', 'Si on lit ce rapport, l’enjeu apparaît clairement.']),
        lC('Écoute. Pourquoi pas de gérondif ici ?', fr(CL(1334)), ['deux sujets', 'dormir n’a pas de gérondif'], 0, 'Je dormais, le téléphone a sonné. EN: two subjects.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-place', label: 'La place et les faux amis', targets: ['faux-gerondif'],
      questions: [
        mc('Lequel est un gérondif ?', ['en passant', 'en tout cas', 'en tant que'], 0, 'En + un verbe en -ant. EN: en passant.', 'a10-table'),
        mc('« En attendant, je continue comme avant. » En attendant veut dire…', ['d’ici là', 'en faisant la queue'], 0, 'Une expression figée. EN: meanwhile.', 'a10-exemples'),
        mc('Laquelle est ponctuée comme le veut l’usage ?', ['En ouvrant la lettre, Marie a pâli.', 'En ouvrant la lettre Marie a pâli.'], 0, 'En tête, une virgule. EN: a comma.', 'a10-trier'),
        tI('Complète la mise en relief.', "C'est en (lire) beaucoup qu'on enrichit son vocabulaire.", fr(E(1769)), 'Lisons, donc lisant. EN: lisant.', 'a10-trier'),
        tI('Complète l’expression figée.', "Soit dit en (passer), le directeur n'était pas au courant.", fr(E(1759)), 'Soit dit en passant. EN: passant.', 'a10-table'),
        eS('En attendant que tu trouveras un appartement, tu peux dormir ici.', fr(E(1767)), 'En attendant que + subjonctif : trouves. EN: trouves.', 'a10-erreurs', ["Jusqu'à ce que tu trouves un appartement, tu peux dormir ici."]),
        eS("C'est par lire beaucoup qu'on enrichit son vocabulaire.", fr(E(1769)), 'C’est en lisant… que. EN: en lisant.', 'a10-erreurs'),
        lC('Écoute. Combien de gérondifs dans cette phrase ?', fr(E(1763)), ['un', 'deux', 'aucun'], 0, 'En vacances : un nom ; en emportant : un gérondif. EN: one.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(IMP_FORM_REF)} : l’imparfait de finir, avec je :`, ['je finissais', 'je finirais', 'je finis'], 0, `« ${B101_REFRAME} » EN: ${B101_REFRAME_EN}`, 'a2-rappel'),
        tI(`${Cap(IMP_FORM_REF)} : la même recette donne le participe. Mets au gérondif.`, 'nous prenons : en (prendre)', 'en prenant', 'Pren-, puis -ant. EN: prenant.', 'a2-table'),
        mc(`${Cap(SI_REF)} : « Si tu … aujourd’hui, tu paieras moins cher. »`, ['réserves', 'réserveras'], 0, `« ${B110_REFRAME} » EN: ${B110_REFRAME_EN}`, 'a6-cartes'),
        mc(`${Cap(SUBORD_REF)} : « … je parlais au client, le camion est arrivé. »`, ['Pendant que', 'En'], 0, `« ${B131_REFRAME} » EN: ${B131_REFRAME_EN}`, 'a4-cartes'),
        mc(`${Cap(CONCESSION_REF)} : « Bien que je … le chemin, je prends le GPS. »`, ['connaisse', 'connais'], 0, `« ${B132_REFRAME} » EN: ${B132_REFRAME_EN}`, 'a8-cartes'),
        mc(`${Cap(MODES_REF)} : bien que, et en attendant que, prennent…`, ['le subjonctif', 'l’indicatif'], 0, `« ${B206_REFRAME} » EN: ${B206_REFRAME_EN}`, 'a10-exemples'),
        tI(`${Cap(COND_PASSE_REF)} : mets le verbe au conditionnel passé.`, 'En partant plus tôt, tu (éviter) les bouchons.', fr('fr.b2.conseils-et-suggestions.1309'), `« ${B202_REFRAME} » EN: ${B202_REFRAME_EN}`, 'a6-cartes'),
        lC(`Écoute. ${Cap(NEGO_REF)} : que dit ce gérondif ?`, fr('fr.b2.affaires.1339'), ['une condition', 'une cause passée'], 0, 'Si vous vous engagez sur deux ans. EN: a condition.', 'a3-exemples'),
      ],
    },
    {
      id: 'r12-examen', label: 'Comme à l’examen', targets: ['conseil-sans-gerondif'],
      questions: [
        mc('Format TCF. Choisissez la bonne réponse : « … les consignes, vous éviterez les erreurs. »', ['En lisant attentivement', 'Lisant attentivement de', 'En lire attentivement', 'Par lire attentivement'], 0, 'Une condition : en + -ant. EN: en lisant.', 'a6-cartes'),
        mc('Format TCF : « Il s’est blessé … du bus. »', ['en descendant', 'en descendre', 'descendant de', 'en descendu'], 0, 'Le moment et la cause : en descendant. EN: en descendant.', 'a7-cartes'),
        mc('Format DELF B2, compréhension écrite. « Tout en saluant les progrès du réseau, l’association des usagers juge les tarifs trop élevés. » L’association…', ['approuve en partie et critique en partie', 'approuve sans réserve', 'rejette tout le projet'], 0, 'Tout en : une opposition. EN: a mixed view.', 'a8-cartes'),
        mc('Format DELF B2. « En réduisant la vitesse en ville, on sauverait des vies, affirme le rapport. » Le gérondif exprime…', ['une condition', 'une cause passée', 'une opposition'], 0, 'Si on réduisait la vitesse. EN: a condition.', 'a6-cartes'),
        tI('Format TCF, phrase à compléter.', "Vous obtiendrez une réduction en (présenter) votre carte d'étudiant.", "Vous obtiendrez une réduction en présentant votre carte d'étudiant.", 'Le moyen : en présentant. EN: présentant.', 'a6-construire'),
        tI('Format DELF B2, production. Reformulez avec un gérondif.', "Quand je suis arrivé à Genève, j'ai ouvert un compte en banque.", "En arrivant à Genève, j'ai ouvert un compte en banque.", 'Un seul sujet : en arrivant. EN: en arrivant.', 'a11-plan', ["J'ai ouvert un compte en banque en arrivant à Genève."]),
        eS("En arrivant dans cette ville, les gens m'ont tout de suite aidé.", "Quand je suis arrivé dans cette ville, les gens m'ont tout de suite aidé.", 'Deux sujets : quand. EN: two subjects.', 'a9-cartes',
          ["Quand je suis arrivée dans cette ville, les gens m'ont tout de suite aidée.", "En arrivant dans cette ville, j'ai tout de suite été aidé par les gens.", "En arrivant dans cette ville, j'ai tout de suite été aidée par les gens."],
          'Format DELF B2, correction. Une forme ne va pas : écris la phrase correcte. EN: One form is wrong; write the sentence correctly.'),
        lC('Format TEF, compréhension orale. Écoute ce message. Comment gagner du temps ?', MESSAGE_TEF, ['en remplissant le formulaire en ligne', 'en venant tôt le matin', 'en appelant le service'], 0, 'En remplissant le formulaire en ligne avant de venir. EN: the online form.', 'a1-usages'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.07 does. */
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
    { front: 'la forme', back: 'en + nous sans -ons + -ant : en faisant', say: fr(E(1628)) },
    { front: 'avoir, être, savoir', back: 'en ayant, en étant, en sachant', say: fr(E(1644)) },
    { front: 'le pronominal', back: 'le pronom du sujet : en me levant', say: fr(E(1646)) },
    { front: 'le sujet', back: 'celui du verbe principal, toujours', say: fr(E(1600)) },
    { front: 'deux sujets', back: 'pendant que, quand, si, parce que', say: fr(E(1751)) },
    { front: 'by working', back: 'en travaillant', say: fr(E(1677)) },
    { front: 'if you leave early', back: 'en partant tôt', say: fr(E(1694)) },
    { front: 'although he knew', back: 'tout en sachant', say: fr(E(1725)) },
    { front: 'en tout cas', back: 'pas un gérondif : cas est un nom', say: fr('fr.b1.expressions-de-quantite.1144') },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Un sujet, et tout ce qu’il fait',
  body: `${REFRAME} Tu as repris la recette de ${IMP_FORM_REF}, les conjonctions de ${SUBORD_REF} et de ${CONCESSION_REF}, et la paire en si de ${SI_REF}, pour en faire une seule forme qui dit le moment, la manière, la condition, la cause et l'opposition, à condition de garder le bon sujet. La suite, c'est ${LATER_REF} : le participe présent sans en, et l'adjectif verbal qui lui ressemble. EN: Next comes a later lesson: the participe présent without en, and the verbal adjective that looks like it.`,
  points: [
    'En + le nous sans -ons + -ant ; ayant, étant, sachant à part.',
    'Le gérondif prend le sujet du verbe principal, toujours.',
    'Deux sujets : pendant que, quand, si, parce que, bien que.',
    'En tout cas et en tant que ne sont pas des gérondifs.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet', 'radical', 'faux'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Tes conseils',
    opener: {
      line: "Quelqu'un arrive, et tu sais comment s'y prendre : ici tu écris tes conseils à un nouvel arrivant, et tu passes l'examen. EN: Someone is arriving and you know how to go about it: here you write your advice to a newcomer and sit the exam.",
      imageRef: 'lessons/gerondif/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit tes conseils et passé l'examen : quatre-vingt-seize questions, douze manches. EN: You wrote your advice and sat the exam: ninety-six questions, twelve rounds.",
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r4-simultane', 'a11-quiz/r8-tout-en', 'a11-review'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-sujet', title: 'Un sujet ou deux', format: 'sort' as const, coach: "Deux piles : la même personne fait les deux actions, ou deux personnes agissent. EN: one subject or two.", buckets: ['un seul sujet', 'deux sujets'], items: [E(1600), E(1604), E(1609), CL(1333), E(1667), E(1664)], audio: AUDIO },
  { id: 'd-forme', title: 'Du nous au gérondif', format: 'mcq' as const, coach: "Pars de nous, coupe -ons, ajoute -ant, et garde le e ou le ç. EN: from nous, keep the e or ç.", q: 'Manger, au gérondif :', opts: ['en mangeant', 'en mangant'], correct: 0, why: 'Le e de mangeons reste. EN: mangeant.', items: [E(1616), E(1617), E(1619), E(1622), E(1623), E(1638)], audio: AUDIO },
  { id: 'd-trois', title: 'Ayant, étant, sachant', format: 'mcq' as const, coach: "Trois verbes à part, et le pronom du sujet pour les pronominaux. EN: three verbs apart; the subject's pronoun.", q: 'Savoir, au gérondif :', opts: ['en sachant', 'en savant'], correct: 0, why: 'Savant est un nom. EN: sachant.', items: [E(1640), E(1641), E(1642), E(1646), E(1650), E(1659)], audio: AUDIO },
  { id: 'd-simultane', title: 'Le gérondif ou pendant que', format: 'sort' as const, coach: "Une personne : le gérondif. Deux personnes : pendant que ou quand. EN: one person or two.", buckets: ['le gérondif', 'pendant que ou quand'], items: [E(1661), E(1666), E(1669), E(1667), E(1664), CL(1208)], audio: AUDIO },
  { id: 'd-maniere', title: 'La manière ou le moyen', format: 'sort' as const, coach: "Deux piles : ce qu'on voit (la manière), ou ce qui a permis le résultat (le moyen). EN: how it looked, or what made it possible.", buckets: ['la manière', 'le moyen'], items: [E(1676), E(1682), E(1686), E(1677), E(1680), E(1684)], audio: AUDIO },
  { id: 'd-condition', title: 'Le si caché', format: 'flashcard' as const, coach: "Lis chaque phrase, puis dis-la avec si : en partant tôt, si tu pars tôt. EN: say each one again with si.", items: [E(1694), E(1696), E(1697), E(1698), E(1700), E(1705)], audio: AUDIO },
  { id: 'd-cause', title: 'Ce qui a tout déclenché', format: 'mcq' as const, coach: "Un résultat non voulu : le gérondif dit la cause. EN: an unwanted result points to a cause.", q: '« En criant si fort, tu as réveillé le bébé. » Le gérondif dit…', opts: ['la cause', 'le moyen voulu'], correct: 0, why: 'Personne ne voulait réveiller le bébé. EN: the cause.', items: [E(1710), E(1712), E(1713), E(1714), E(1717), E(1718)], audio: AUDIO },
  { id: 'd-opposition', title: 'Tout en, sur la balance', format: 'flashcard' as const, coach: "Lis chaque phrase, puis dis-la avec bien que. EN: say each one again with bien que.", items: [E(1725), E(1727), E(1728), E(1731), E(1735), E(1736)], audio: AUDIO },
  { id: 'd-reparer', title: 'Répare le sujet', format: 'mcq' as const, coach: "Qui fait l'action en -ant ? Si ce n'est pas le sujet, change-le ou passe à quand. EN: who does the -ant action?", q: '« En entrant, la porte s’est refermée. » Répare :', opts: ['En entrant, nous avons vu la porte se refermer.', 'En entrant, la porte se refermait.'], correct: 0, why: 'Nous entrons, nous voyons. EN: we are the subject.', items: [E(1740), E(1742), E(1743), E(1750), E(1751), E(1753)], audio: AUDIO },
  { id: 'd-faux', title: 'Vrai ou faux gérondif', format: 'sort' as const, coach: "Deux piles : en suivi d'un verbe en -ant, ou en suivi d'autre chose. EN: en plus -ant, or en plus something else.", buckets: ['un gérondif', 'pas un gérondif'], items: [E(1758), E(1762), E(1768), E(1764), 'fr.b1.expressions-de-quantite.1144', 'fr.b1.expressions-de-quantite.1154'], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 et le B2 en renfort', format: 'flashcard' as const, coach: "Six phrases des leçons précédentes : dis pour chacune si un gérondif est possible, et pourquoi. EN: could each one become a gérondif?", items: [CL(1446), CL(1404), PF(1215), PF(1253), CL(1208), 'fr.b2.conseils-et-suggestions.1309'], audio: AUDIO },
  { id: 'd-conseil', title: 'Tes conseils, à voix haute', format: 'flashcard' as const, coach: "Lis chaque conseil, puis donne le tien sur le même modèle. EN: read each tip, then give your own.", items: [E(1775), E(1776), E(1777), E(1778), E(1781), E(1783)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'qui-fait-quoi', description: 'Cannot tell who does the gérondif’s action, and reads it as belonging to whoever is nearest rather than to the main subject.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-sujet', retest: 'd-sujet' },
  { id: 'forme-fausse', description: 'Builds the form on the infinitive (en faire), drops the e or ç of the nous stem, makes the participle agree, or drops en.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-forme', retest: 'd-forme' },
  { id: 'trois-faux', description: 'Writes en avant, en soyant or en savant, uses se with any subject in a pronominal, or misplaces ne and object pronouns.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-trois', retest: 'd-trois' },
  { id: 'deux-sujets-colles', description: 'Uses a gérondif for simultaneity when two different people act, instead of pendant que or quand.', detectOn: ['a4-trier', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-simultane', retest: 'd-simultane' },
  { id: 'moyen-par', description: 'Expresses the means with par + infinitive or avec + -ant, or drops en before a manner participle.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a11-mission'], drill: 'd-maniere', retest: 'd-maniere' },
  { id: 'condition-bancale', description: 'Uses a gérondif of condition with a different subject or a mismatched main tense, or puts a future after si.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-condition', retest: 'd-condition' },
  { id: 'cause-confuse', description: 'Misses the causal reading of a gérondif, writes par + infinitive for a cause, or hangs the cause on the wrong subject.', detectOn: ['a7-trier', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-cause', retest: 'd-cause' },
  { id: 'tout-en-bancal', description: 'Puts a subjunctive or que after tout en, or uses tout en where the two clauses have different subjects.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-opposition', retest: 'd-opposition' },
  { id: 'gerondif-pendant', description: 'Writes a dangling gérondif whose action is given to the main clause’s subject by mistake (en entrant, la porte s’est ouverte).', detectOn: ['a9-trier', 'a9-piege', 'a9-check', 'a11-mission'], drill: 'd-reparer', retest: 'd-reparer' },
  { id: 'faux-gerondif', description: 'Takes en tout cas or en tant que for a gérondif, garbles a fixed phrase, or leaves a fronted gérondif without its comma.', detectOn: ['a10-trier', 'a10-erreurs', 'a10-check', 'a11-mission'], drill: 'd-faux', retest: 'd-faux' },
  { id: 'recyclage', description: 'Loses a contrast the gérondif sits on: the nous stem of the imparfait, si clauses, pendant que, bien que and its subjunctive, or the conditionnel passé.', detectOn: ['a2-rappel', 'a6-cartes', 'a8-cartes'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'conseil-sans-gerondif', description: 'In an exam-format advice text, avoids the gérondif or uses it with only one meaning, so the range criterion is not met.', detectOn: ['a11-plan', 'a11-scenario', 'a11-mission'], drill: 'd-conseil', retest: 'd-conseil' },
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
 *  REFERENCE SHEETS (layer deep: teach and table only). Every sheet is
 *  reached from at least one mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-forme', 'La forme', ['la recette', 'trois verbes à part', 'les pronoms et la négation', 'les erreurs de forme'], [
    teach('sheet-forme-teach', 'En, puis le participe présent',
      `${REFRAME} Le gérondif, c'est en + le participe présent. Le participe se forme comme l'imparfait de ${IMP_FORM_REF} : « ${B101_REFRAME} », avec -ant. Il ne s'accorde jamais. Avoir, être et savoir donnent ayant, étant, sachant. EN: ${REFRAME_EN} En plus the -ant form, built from nous; it never agrees.`),
    table('sheet-forme-table', 'La recette', ['Verbe', 'nous au présent', 'gérondif'], [
      ['parler', 'nous parlons', 'en parlant'],
      ['finir', 'nous finissons', 'en finissant'],
      ['prendre', 'nous prenons', 'en prenant'],
      ['faire', 'nous faisons', 'en faisant'],
      ['voir', 'nous voyons', 'en voyant'],
      ['manger, commencer', 'nous mangeons, nous commençons', 'en mangeant, en commençant'],
      ['avoir, être, savoir', 'à part', 'en ayant, en étant, en sachant'],
    ]),
    table('sheet-forme-pronoms', 'Les pronoms et la négation', ['Cas', 'Place', 'Exemple'], [
      ['pronominal', 'le pronom du sujet', "En me levant, j'ai vu la neige."],
      ['pronom complément', 'entre en et le participe', 'Je l’ai reconnu en le voyant.'],
      ['le pronom en', 'entre en et le participe', "En en parlant avec elle, j'ai changé d'avis."],
      ['négation', 'ne avant, pas ou rien après', 'Il est parti en ne disant rien.'],
      ['plus naturel', 'sans + infinitif', 'Il est parti sans rien dire.'],
      ['forme passée (rare)', 'en ayant + participe', 'En ayant fini plus tôt, elle a pu nous aider.'],
    ]),
    table('sheet-forme-erreurs', 'Les erreurs de forme', ['À éviter', 'Correct', 'Pourquoi'], [
      ['en faire', 'en faisant', 'en veut la forme en -ant'],
      ['en mangant', 'en mangeant', 'le e de mangeons reste'],
      ['en riantes', 'en riant', 'le gérondif est invariable'],
      ['en avant, en soyant, en savant', 'en ayant, en étant, en sachant', 'trois verbes à part'],
      ["en se levant, j'ai…", "en me levant, j'ai…", 'le pronom suit le sujet'],
      ['en disant ne rien', 'en ne disant rien', 'ne avant le participe'],
    ]),
  ]),
  sheet('sheet-sens', 'Les sens du gérondif', ['en même temps', 'la manière et le moyen', 'la condition', 'la cause', 'tout en'], [
    teach('sheet-sens-teach', 'Une forme, plusieurs sens',
      "La forme ne change pas ; c'est la phrase qui donne le sens. Pour le trouver, remplace le gérondif par une subordonnée avec le même sujet : pendant que, au moment où, si, parce que, bien que. Si aucune ne va, c'est souvent la manière ou le moyen, qui répondent à comment. EN: replace it with a clause to find its meaning."),
    table('sheet-sens-table', 'Cinq sens, cinq équivalents', ['Sens', 'Gérondif', 'Équivalent'], [
      ['en même temps', 'Il chante en se douchant.', "Il chante pendant qu'il se douche."],
      ['le moment', "En arrivant à la gare, j'ai acheté un billet.", 'Au moment où je suis arrivé…'],
      ['la manière, le moyen', "J'ai payé mes études en travaillant le soir.", 'Comment ? En travaillant.'],
      ['la condition', 'En partant tôt, tu éviteras les bouchons.', 'Si tu pars tôt…'],
      ['la cause', 'En voulant aider, il a tout cassé.', "Parce qu'il voulait aider…"],
      ["l'opposition", "Tout en sachant que c'était risqué, il a accepté.", "Bien qu'il sache que c'est risqué…"],
    ]),
    table('sheet-sens-temps', 'La condition et le temps du verbe principal', ['Avec si', 'Avec le gérondif', 'Verbe principal'], [
      ['si tu pars tôt', 'en partant tôt', 'futur, présent, impératif'],
      ['si tu prenais le train', 'en prenant le train', 'conditionnel présent'],
      ['si tu étais parti plus tôt', 'en partant plus tôt', 'conditionnel passé'],
      ['si tu pars tôt, je viendrai', 'impossible', 'deux sujets : si reste'],
    ]),
  ]),
  sheet('sheet-sujet', 'Le sujet du gérondif', ['la règle', 'les deux réparations', 'qui sortait', 'les usages tolérés'], [
    teach('sheet-sujet-teach', 'Le sujet prêté',
      "Le gérondif n'a pas de sujet à lui : il prend celui du verbe principal, ou le tu et le vous caché d'un impératif. Si le verbe principal a un autre sujet, c'est lui qui fait l'action du gérondif, et la phrase dit autre chose. Répare en changeant ce sujet, ou passe à une subordonnée. EN: change the main subject, or switch to a clause."),
    table('sheet-sujet-table', 'Dans le vide, puis réparé', ['À éviter', 'Réparer 1 : le sujet', 'Réparer 2 : une subordonnée'], [
      ["En entrant, la porte s'est refermée.", 'En entrant, nous avons vu la porte se refermer.', "Quand nous sommes entrés, la porte s'est refermée."],
      ["En arrivant à Montréal, une amie m'a hébergée.", "En arrivant à Montréal, j'ai été hébergée par une amie.", "Quand je suis arrivée à Montréal, une amie m'a hébergée."],
      ['En signant le contrat, les conditions sont acceptées.', 'En signant le contrat, vous acceptez les conditions.', "Si vous signez le contrat, les conditions s'appliquent."],
      ["En visitant le musée, il s'est mis à pleuvoir.", 'En visitant le musée, nous avons vu…', "Pendant qu'on visitait le musée, il s'est mis à pleuvoir."],
    ]),
    table('sheet-sujet-qui', 'En sortant ou qui sortait', ['Phrase', 'Qui sort ?'], [
      ["J'ai croisé Paul en sortant du métro.", 'moi'],
      ["J'ai croisé Paul qui sortait du métro.", 'Paul'],
      ["Éteins la lumière en sortant, s'il te plaît.", 'toi, le sujet caché de l’impératif'],
    ]),
    table('sheet-sujet-toleres', 'Les usages tolérés', ['Cas', 'Exemple', 'Pourquoi'], [
      ['le proverbe', "L'appétit vient en mangeant.", 'le sujet est tout le monde'],
      ['la formule de lettre', 'En vous remerciant par avance.', 'seule en fin de lettre : le sujet sous-entendu est celui qui écrit'],
      ['en attendant, seul', 'En attendant, je continue comme avant.', 'une expression figée'],
    ]),
  ]),
  sheet('sheet-figees', 'La place et les faux amis', ['la place et la virgule', 'les expressions figées', 'les faux gérondifs', 'le registre'], [
    teach('sheet-figees-teach', 'Où le mettre, et ce qui lui ressemble',
      `En tête de phrase, le gérondif prend une virgule ; au milieu, deux ; en fin de phrase, souvent aucune, surtout pour la manière. Il appartient à tous les registres, à l'oral comme à l'écrit. En tout cas et en tant que ne sont pas des gérondifs. Le participe présent sans en est pour ${LATER_REF}. EN: a comma when fronted; en tout cas is not a gérondif.`),
    table('sheet-figees-place', 'La place et la virgule', ['Place', 'Ponctuation', 'Exemple'], [
      ['en tête', 'une virgule', 'En ouvrant la lettre, Marie a pâli.'],
      ['au milieu', 'deux virgules', 'Marie, en ouvrant la lettre, a pâli.'],
      ['en fin de phrase', 'souvent aucune', 'Marie a pâli en ouvrant la lettre.'],
      ['mise en relief', "c'est en… que", "C'est en lisant beaucoup qu'on enrichit son vocabulaire."],
    ]),
    table('sheet-figees-faux', 'Vrais, figés et faux', ['Forme', 'Gérondif ?', 'Sens'], [
      ['en courant, en passant devant', 'oui', 'le sens du contexte'],
      ['en attendant (seul)', 'figé', "d'ici là"],
      ['en attendant que + subjonctif', 'locution', "jusqu'à ce que"],
      ['soit dit en passant', 'figé', 'au fait, entre nous'],
      ['en tout cas', 'non', 'de toute façon'],
      ['en tant que, en avant, en vacances', 'non', 'en + un autre mot'],
    ]),
  ]),
  sheet('sheet-conseil', 'Écrire des conseils', ['le plan', 'les phrases utiles', 'la liste de contrôle'], [
    teach('sheet-conseil-teach', 'Des conseils, et comment les suivre',
      "Un bon message de conseils salue, montre qu'il comprend la situation, donne trois ou quatre conseils concrets, dit comment les suivre avec des gérondifs, prévient d'un piège, puis encourage. EN: greet, give three or four tips with how, warn, encourage."),
    table('sheet-conseil-plan', 'Le plan', ['Partie', 'Structure', 'Exemple'], [
      ["l'ouverture", 'présent', "Tu m'as demandé comment t'installer ici."],
      ['un conseil et son moyen', 'gérondif de moyen', 'On apprend le français en le parlant.'],
      ['une condition', 'gérondif + futur', "En t'inscrivant à un cours du soir, tu progresseras vite."],
      ['la mise en relief', "c'est en… que", "C'est en te trompant que tu retiendras les mots."],
      ['une nuance', 'tout en', 'Tout en gardant le contact avec ta famille, sors le soir.'],
      ['la fin', 'impératif, futur', 'Quand tu arriveras, appelle-moi.'],
    ]),
    table('sheet-conseil-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Chaque gérondif a le bon sujet', "qui fait l'action en -ant ?"],
      ['Les formes sont justes', 'nous sans -ons + -ant ; ayant, étant, sachant'],
      ['Le pronom suit le sujet', 'en te trompant, avec tu'],
      ['Au moins trois sens', 'moyen, condition, moment, et un tout en'],
      ['Pas de futur après si', 'si tu te trompes'],
      ['Une virgule en tête', 'En arrivant, présente-toi.'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-12-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const EXERCISE = 'One voice, read as written WITH the bracketed infinitives spoken as infinitives: this is the exercise text, not the answer.';
const TRAP = "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions in promptSound are NEVER spoken.";
const REC_DESC: Record<string, string> = {
  'rec-b2-12-blog': "The newcomer's blog post (act 1), one female voice with a Lyon accent, one take, relaxed and a little amused. The gérondifs are read at the pace of the rest: the learner is meant to notice them, not be told.",
  'rec-b2-12-forme': 'The four form cards (act 2). One coach voice. Card one reads « nous finissons » then « en finissant » with a small pause; card three pronounces mangeant [mɑ̃ʒɑ̃] and commençant [kɔmɑ̃sɑ̃] clearly.',
  'rec-b2-12-forme-ecoute': `${ONE_TAKE} Eight lines. The -ant endings are not stressed; the liaison in « en écrivant » is made.`,
  'rec-b2-12-samir': 'Samir and his sister Nour (act 3), Lyon, two voices, one take, calm. Nour names forms the ear hears clearly (ayant, étant); no over-articulation.',
  'rec-b2-12-ajouts': 'The four cards of act 3. One voice. Card three reads « en en parlant » with the liaison [ɑ̃nɑ̃], naturally, as one group.',
  'rec-b2-12-piege-ajouts': TRAP,
  'rec-b2-12-texte-a3': `The office how-to (act 3). ${EXERCISE}`,
  'rec-b2-12-awa': 'Awa on the phone and a coach voice (act 4), Brussels, one take, warm. Awa says « Pendant que tu cuisines, je mets la table » to Tom, turning away from the phone.',
  'rec-b2-12-simultane': 'The four simultaneity cards (act 4). One voice. Card three quotes lesson 31 in B1; read it with the same rhythm as the others.',
  'rec-b2-12-simultane-ecoute': `${ONE_TAKE} Nine lines. Line five (pendant que le prof parle) and line eight (pendant que je parlais au client) carry two subjects; read them like the rest, with no emphasis.`,
  'rec-b2-12-piege-simultane': TRAP,
  'rec-b2-12-texte-a4': "Camille's message (act 4), one voice, read as written, with the conjunctions: the rewrite is the exercise.",
  'rec-b2-12-priya': 'Priya and Clara (act 5), Geneva, two voices, one take, a mock job interview: Clara formal, Priya relaxed. Priya has a light Indian English accent in French.',
  'rec-b2-12-texte-a5': `The Spanish-learning account (act 5). ${EXERCISE}`,
  'rec-b2-12-ana': 'Ana and her neighbour Mathieu (act 6), Québec City, two voices, one take, a quick chat on the landing. Ana has a light Mexican accent; Mathieu a Québec accent.',
  'rec-b2-12-condition': 'The four condition cards (act 6). One voice. Cards one to three read the gérondif and its si equivalent with the same melody, so the learner hears the pairs match.',
  'rec-b2-12-condition-ecoute': `${ONE_TAKE} Nine lines. Lines one and two (en partant tôt / si tu pars tôt) must be read with identical rhythm.`,
  'rec-b2-12-piege-condition': TRAP,
  'rec-b2-12-texte-a6': "The winter advice (act 6), one voice with a Québec accent, read as written with every si: the rewrite is the exercise.",
  'rec-b2-12-faits': "The news brief from Val-David (act 7), one voice, one take, a regional radio newsreader with a Québec accent. The quoted lines of the retiree are read in a second, older male voice, amused.",
  'rec-b2-12-cause': 'The four cause cards (act 7). One voice. No dramatisation of the accidents: the gérondif, not the tone, carries the cause.',
  'rec-b2-12-cause-ecoute': `${ONE_TAKE} Nine lines, neutral, no dramatisation.`,
  'rec-b2-12-texte-a7': 'The Lyon news brief (act 7), one voice, a newsreader, neutral.',
  'rec-b2-12-lea': 'Léa and a coach voice (act 8), Lausanne, one take. Léa rehearses her speech half aloud, a little formal; a Swiss accent is welcome.',
  'rec-b2-12-opposition': 'The four tout en cards (act 8). One voice. Card one quotes lesson 32 in B1; « tout en » is read as one group [tutɑ̃], never stressed.',
  'rec-b2-12-piege-opposition': TRAP,
  'rec-b2-12-texte-a8': "The reader's opinion (act 8), one voice, read as written with every bien que.",
  'rec-b2-12-moussa': 'Moussa and Mme Ndiaye (act 9), Dakar, two voices, one take, a calm office. Moussa reads his wrong first sentence naturally, with no hint that it is wrong.',
  'rec-b2-12-sujet': 'The four subject cards (act 9). One voice. Card four reads « en sortant » and « qui sortait » with the same rhythm, so only the structure differs.',
  'rec-b2-12-sujet-ecoute': `${ONE_TAKE} Nine lines. Lines two and three (en sortant / qui sortait) must be read with identical rhythm; line four in a formal letter voice.`,
  'rec-b2-12-piege-sujet': TRAP,
  'rec-b2-12-texte-a9': "Hugo's email (act 9), one voice, read as written, wrong forms included, without comment.",
  'rec-b2-12-faux-ecoute': `${ONE_TAKE} Ten lines. « En tout cas » and « en tant que » are read like any other phrase opening, not singled out.`,
  'rec-b2-12-texte-a10': "Léa's note (act 10), one young female voice, casual, read as written.",
  'rec-b2-12-modele': "Karim's forum answer (act 11), one male voice with a light Algerian accent, one take, warm and unhurried, as if recording a voice message.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 12',
  intro: 'The gérondif (en + the -ant form) is everywhere in French, in speech and in writing. You build it from the nous stem you already use for the imparfait (lesson 1 in B1), with three verbs apart (ayant, étant, sachant), pronouns and negation in their place. Then you make it say five things, each set against the clause it replaces: simultaneity (pendant que), manner and means (how), condition (si), cause (parce que) and, with tout en, opposition (bien que). Above all you learn its one rule: it has no subject of its own and takes the main verb’s, so « en entrant, la porte s’est ouverte » makes the door walk in. You learn to repair that with a clause, to place and punctuate the gérondif, and to tell it from look-alikes such as en tout cas. The task: 180 to 250 words of advice to a newcomer, graded on the B2 writing criteria.',
  skill: 'PE',
  grammarAssumed: [IMP_FORM_UNIT, SI_UNIT, SUBORD_UNIT, CONCESSION_UNIT, COND_PASSE_UNIT],
  grammarIntroduced: [
    'The gérondif as en + present participle built on the nous stem of the present, invariable, with the spelling of -ger and -cer verbs, and the three forms apart ayant, étant, sachant',
    'Pronominal gérondifs with the pronoun of the main subject (en me levant), object pronouns between en and the participle (en le voyant, en en parlant), negation (en ne disant rien) against sans + infinitive, and the perfect form en ayant + participle for recognition',
    'The gérondif of simultaneity and of the moment against pendant que and quand, which stay when the subjects differ',
    'The gérondif of manner and means answering comment, against avec and par + noun and against simultaneity',
    'The gérondif of condition equivalent to si, with the main verb in the future, present, imperative, conditional or past conditional',
    'The gérondif of cause equivalent to parce que or comme, and the double readings a gérondif can carry',
    'Tout en + gérondif for simultaneity and for opposition, equivalent to bien que, with one subject only',
    'Subject control: the gérondif takes the subject of the main verb (or the implied subject of an imperative); the dangling gérondif and its two repairs; en sortant against qui sortait; proverbs and letter formulas as tolerated fixed uses',
    'Position and punctuation of the gérondif, its register, the fixed phrases en attendant and soit dit en passant, and the false leads en tout cas and en tant que',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu connais déjà le radical du nous. Ici, tu en fais le gérondif, et tu lui fais dire le moment, la manière, le moyen, la condition, la cause et, avec tout en, l'opposition, chaque fois contre la subordonnée qu'il remplace. Surtout, tu apprends sa seule règle : il prend le sujet du verbe principal. À la fin, tu écris en 180 à 250 mots des conseils à un nouvel arrivant.",
    minutes: 150,
    difficulty: 4,
    glyph: '-ant',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: GERONDIF_TERMS,
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
