// b2.09.l1 « Reconnaître le subjonctif littéraire »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape) under the B2 rules of
// B2-BUILD-LOG.md, RECOGNITION variant, mirroring b2.08: every act runs SPOT
// (find the form in an extract) → MAP (to its mood and tense, its infinitive,
// and the form a writer would use today) → UNDERSTAND (questions on the text).
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema, so the lesson validates with it in place (as b2.08 does).
//
// RECOGNITION ONLY (Paul, 2026-09-27). NOTHING asks the learner to produce an
// imparfait or plus-que-parfait du subjonctif or a « conditionnel passé
// deuxième forme »: no conjugation card, no gap or option set whose job is to
// supply one, no error-spot or typeIn whose answer holds one, no flashcard or
// reviewDeck BACK that is one, no scenario `user` line in it, no speak
// practice on it. Typed answers are infinitives or modern rewrites. The
// corpus enforces it in the drills (corpus §A.3).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene, story, reading, examples), name (cardDeck,
//   tapTable, hacks), spot and map (groupDrill, gated), trap (trapDrill
//   stepped or commonErrors), then from act 3 on the forms INSIDE A TEXT of
//   60 to 120 words (« Dans un texte »: find, map, rewrite, understand), then
//   the gated act check.
//
//    1  Un chapeau sur le u        6   meet fût in a novel; it is not the
//                                       fact fut; today's form
//    2  Où il vit encore           6   classic novel, history book, press for
//                                       effect, humour, speeches; never talk;
//                                       3rd person singular dominant
//    3  Fut ou fût                 7   the circumflex pairs, hooked on lesson
//                                       8 in B2; the ear needs the trigger
//    4  La forme                   7   -ât, -ît, -ût, -înt built on the passé
//                                       simple; -ssent plurals; the sosie
//    5  Eût fini, fût venue        7   plus-que-parfait du subjonctif; against
//                                       the passé antérieur
//    6  Il eût fallu               7   the second form of the conditionnel
//                                       passé; si + eût su = avait su
//    7  La concordance             8   past main verb → imparfait du
//                                       subjonctif in books, présent today
//    8  Aujourd'hui, tu dirais     8   every map in one place; the rest of the
//                                       text does not move
//    9  Les formes vivantes        7   fût-ce, ne fût-ce que, dût-il, quoi
//                                       qu'il en fût / soit; qu'à cela ne
//                                       tienne is a présent
//   10  Comprendre l'extrait       7   a pastiche page read for meaning,
//                                       inference and irony (lessons 37 in B1
//                                       and 24 in B2)
//   11  Raconte-le à un ami        11  model, plan, role play, TASK, quiz
//
//   TOTAL 81 missions, 11 acts (6,6,7,7,7,7,8,8,7,7,11). Corpus: 165
//   authored rows (.1200-.1396) in eleven blocks (66 literary lines, 66 map
//   cards, 17 rule cards, 16 plain sentences) plus 19 reused seed rows,
//   released act by act through `deckTranche` (map cards, rule cards and
//   plain rows only). Quiz: 11 rounds of 8 (one per act 1 to 10 with acts
//   1-2 grouped, a B1 and B2 recycling round, an exam-format round).
//   Chapter artwork: `subjonctif-litteraire-image-prompts.md`, eleven prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le subjonctif littéraire change la forme, jamais le sens : tu le lis,
//   et tu dis la forme d'aujourd'hui. »
//   EN: The literary subjunctive changes the form, never the meaning: you
//   read it, and you say today's form.
//
//   ONE METAPHOR, LE COSTUME D'ÉPOQUE: the same actor in period dress. The
//   learner's move is always to see who is inside the costume and say it in
//   today's clothes. It is NOT a tense with its own meaning and NOT dead.
//   Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    recognising the imparfait and plus-que-parfait du subjonctif and
//           the second form of the conditionnel passé: where they live, the
//           circumflex clue against the passé simple, the forms built on the
//           passé simple, the person, the concordance des temps of classic
//           texts, the map to today's forms (including si and comme si), the
//           fixed forms still alive, and a first reading of a pastiche page
//           for irony.
//   QUOTES  the reframes of lessons 14, 15, 32 and 37 in B1 and lessons 2,
//           3, 5, 6, 8 and 24 in B2, re-exported from their corpus files;
//           rows of lessons 14 and 15 in B1 and 1, 2, 5, 8 and 24 in B2
//           reused BY ID.
//   LEAVES  producing any literary form (never, by decision); the other
//           literary uses of the pluperfect subjunctive (concessive
//           inversion « eût-il été riche ») beyond « dût-il »; narrative voice
//           in depth to the literature lesson of Unit 6 (named in words only,
//           since its position is not yet occupied).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English still authored on every
//   learner string (an `en` field or a final `EN: `), never on an answer.
//   tu in every instruction; characters use what the situation needs.
//   Every `say` is French. No spaced « ? » or « ! » in any scene or story
//   bubble. Stories and the scene use the straight ' only; the scenario uses
//   ’ only and embeds no corpus row. Other lessons cited by trail position in
//   words, never by raw id, and only positions that exist. Mission answer
//   slots spread by `spreadMissions()`, the quiz by `spreadSlots()`, as
//   b2.08 does (no text changes; no `why` names a position).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE `sentence` DRILL ON LITERARY LINES (as b2.08's open question 1).
//      The 66 lines are visible in the sentence hub under « La littérature »,
//      where the word tiles give every form. Acceptable?
//   2. RULE CARDS THAT NAME A FORM (qu'il fût, eût su) carry `flashcard`
//      ONLY (grammar card, « recognise »), so no voiceflash or review screen
//      asks for them from the English. Keep?
//   3. `Lesson.skill` is 'CE', as b2.08. The task is a written retelling
//      graded on a 4-criterion rubric. 'PE' instead?
//   4. THE TASK brief prints the literary extract (125 words), since `task`
//      has no source field; the retelling is 150 to 220 words.
//   5. NO REAL QUOTATION and no real historical fact is used: every text is
//      an invented pastiche, so there is nothing to fact-check.
//   6. The mapping taught for concordance keeps the présent (qu'il vînt →
//      qu'il vienne) and the subjonctif passé for prior completion. After si
//      and comme si the map is the plus-que-parfait de l'indicatif. The ne
//      explétif (craindre qu'on ne) is named and accepted with or without.
//   7. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' kept (inert).

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  LECTURE_NOTAIRE, LECTURE_CANAL, LECTURE_MEMOIRES, LECTURE_ATELIER, LECTURE_DISCOURS, LECTURE_BARON,
  LECTURE_MODELE, EXTRAIT_TACHE,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10,
  B114_REFRAME, B114_REFRAME_EN, B115_REFRAME, B115_REFRAME_EN, B137_REFRAME, B137_REFRAME_EN,
  B202_REFRAME, B202_REFRAME_EN, B203_REFRAME, B203_REFRAME_EN, B205_REFRAME, B205_REFRAME_EN,
  B206_REFRAME, B206_REFRAME_EN, B208_REFRAME, B208_REFRAME_EN, B224_REFRAME, B224_REFRAME_EN,
  FORMATION_UNIT, DECLENCHEURS_UNIT, CONDPASSE_UNIT, SI_UNIT, SUBJPASSE_UNIT, PS_UNIT,
  FORMATION_REF, DECLENCHEURS_REF, CONCESSION_REF, LECTURE_B1_REF, CONDPASSE_REF, SI_REF,
  SUBJPASSE_REF, SUBJIND_REF, PS_REF, CRITIQUE_REF,
} from './subjonctif-litteraire-corpus.ts';
import { SL_TERMS } from './subjonctif-litteraire-terms.ts';

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
  if (!r) throw new Error(`b2.09: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.09: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.09: no respell on ${id}`);
  return `[${r.respell}]`;
}

const LIT = (n: number) => `fr.b2.litterature.${n}`;
const EMO = (n: number) => `fr.b2.emotions.${n}`;
const CS = (n: number) => `fr.b2.conseils-et-suggestions.${n}`;
const OA = (n: number) => `fr.b1.opinions-et-avis.${n}`;
const RP1760 = 'fr.b2.recits-au-passe.1760';
const SC = 'fr.b2.strategies-de-comprehension.1507';

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
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

/** THE « IN A TEXT » BEAT that closes acts 3 to 10: one paragraph of 60 to
 *  120 words with the literary forms inside it. The questions always SPOT
 *  (find the forms), MAP (infinitive, mood, today's form) and UNDERSTAND; the
 *  answers sit behind the modal. Same title every time, as b2.08 does. */
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
 *  ACT 1: UN CHAPEAU SUR LE U
 *
 *  Meet the form. A friend reads « Elle exigea qu'il fût là avant midi » and
 *  takes fût for the passé simple fut: a fact. The failing instinct retells
 *  it as « il a été là ». NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La bouquinerie',
  frSub: 'Un accent que tu n\'avais pas vu',
  setting: { place: 'Une bouquinerie près de la Grand-Place', city: 'Bruxelles', time: '15 h', ambience: 'des piles de vieux livres, la pluie sur la vitrine, une odeur de papier' },
  beats: [
    {
      kind: 'narration',
      text: "Bruxelles, un samedi de pluie. Tu fouilles une bouquinerie avec ton ami Sam. Il ouvre un roman de 1880 et lit une phrase à voix haute.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Sam',
      fr: fr(E(1200)), en: en(E(1200)), respell: rsOf(E(1200)),
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Sam',
      fr: "Je ne comprends pas. Il était là, oui ou non.",
      en: "I don't get it. Was he there, yes or no?",
      respell: '[zhuh nuh kohⁿ-prahⁿ PA | ee-lay-teh LA | wee oo NOHⁿ]',
      stage: "Fût ressemble à fut, le passé simple que tu connais. Pourtant, il porte un chapeau.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "La libraire, Madame Delcour, lève les yeux de sa caisse. Elle attend, amusée, que tu expliques la phrase à Sam.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Que dit vraiment la phrase du roman.',
      size: 'lg',
      options: [
        { fr: fr(E(1201)), respell: rsOf(E(1201)), en: en(E(1201)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1202)), respell: rsOf(E(1202)), en: en(E(1202)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Sam comprend : elle a donné un ordre, et on ne sait pas encore s'il viendra. Il tourne la page pour le découvrir.",
        breaks: "Sam croit qu'il était là. Deux pages plus loin, l'homme arrive en retard, et Sam ne comprend plus pourquoi elle est si furieuse.",
      },
    },
    {
      kind: 'break',
      heading: 'Un chapeau sur le u',
      body: "Fût, avec un chapeau, n'est pas le passé simple fut. C'est un subjonctif : il dépend de exigea que, et il ne raconte aucun fait. Aujourd'hui, tu lis qu'il soit. EN: Fût with a circumflex is a subjunctive, not the passé simple fut.",
      wrong: { fr: fr(E(1201)), ipa: ipaOf(E(1201)), respell: rsOf(E(1201)), en: en(E(1201)) },
      right: { fr: fr(E(1202)), ipa: ipaOf(E(1202)), respell: rsOf(E(1202)), en: en(E(1202)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: `Dans ${PS_REF}, tu as appris à reconnaître le passé simple des livres. Les livres ont aussi leur subjonctif. Cette leçon t'apprend à le reconnaître et à le traduire, jamais à le produire.`,
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['chapeau', 'aujourdhui'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Repérer le subjonctif littéraire et savoir où il vit', s: 'Actes 1 à 3 : le chapeau, le déclencheur, le registre' },
    { t: 'Retrouver le verbe et le temps derrière chaque forme', s: 'Actes 4 à 6 : l’imparfait, le plus-que-parfait, la deuxième forme' },
    { t: 'Dire la forme d’aujourd’hui', s: 'Actes 7 à 9 : la concordance, la traduction, les formes vivantes' },
    { t: 'Comprendre une page au style classique', s: 'Actes 10 et 11 : l’ironie, puis ta mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le notaire de Valbonne',
  frSub: 'Un début de roman, lu jusqu’au bout',
  text: LECTURE_NOTAIRE,
  glossary: [
    { word: 'cachetée', en: 'sealed', note: 'Fermée par un cachet de cire.' },
  ],
  questions: [
    { q: 'Devine le sens : « Il se tut longtemps, comme s’il eût cherché ses mots. » Que fait le notaire ?', a: "Il reste silencieux, comme quelqu'un qui cherche ses mots. Se tut, c'est se taire ; après comme si, eût cherché se lit aujourd'hui avait cherché." },
    { q: 'Globale : de quoi parle cette page, en une phrase ?', a: "D'une veuve qui apporte au notaire la dernière volonté de son mari, alors que la maison est déjà promise à un autre." },
    { q: 'Repère trois formes à chapeau et donne leur infinitif.', a: "fût (être), allât (aller), vînt (venir), dît (dire), arrivât (arriver), parlât (parler), eût marché (marcher), eût fallu (falloir), eût cherché (chercher), eût dit (dire)." },
    { q: 'Détail : que demande le défunt pour sa maison ?', a: "Qu'elle soit vendue et que l'argent aille à l'école du village." },
    { q: 'Inférence : pourquoi le notaire se tait-il si longtemps ?', a: "Il sait que la maison est déjà promise au cousin : respecter la lettre va créer un conflit. La dernière phrase le confirme." },
    { q: 'Pourquoi Madame Delorme dit-elle « que je vous la remette », sans chapeau ?', a: "Elle parle : dans les paroles citées, le roman garde le subjonctif d'aujourd'hui. La narration, elle, prend le subjonctif littéraire." },
  ],
  audio: REC('rec-b2-09-notaire'),
  say: REFRAME,
  terms: ['chapeau', 'registre'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère, puis traduis',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Les formes à chapeau', [
      it(E(1200), 'fût : être'),
      it(E(1204), 'vînt : venir'),
      it(E(1206), 'fût, après bien que'),
      it(E(1210), 'parlât : parler'),
    ], chk('Ces quatre formes sont…',
      ['des subjonctifs, après que', 'des passés simples qui racontent', 'des imparfaits de l’indicatif'], 0,
      'Chaque fois, un que et un chapeau : le verbe ne raconte pas, il dépend. EN: each depends on que.')),
    grp('Les mêmes phrases, aujourd’hui', [
      it(E(1202), 'fût devient soit'),
      it(E(1205), 'vînt devient vienne'),
      it(E(1207), 'bien que… soit'),
      it(E(1211), 'parlât devient parle'),
    ], chk('Dans ces versions, quel temps a remplacé l’imparfait du subjonctif ?',
      ['le présent du subjonctif', 'le passé composé', 'l’imparfait'], 0,
      'Le présent du subjonctif : le sens reste, la forme change. EN: the present subjunctive.')),
    ctl('Le réflexe', '« Il eût fallu partir plus tôt. » Que fais-tu d’abord ?',
      ['tu cherches le sens : il aurait fallu', 'tu apprends la forme par cœur', 'tu la répètes à voix haute'], 0,
      'Tu reconnais, tu traduis ; tu ne produis pas. EN: recognise and translate.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chapeau', 'aujourdhui'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où tu vas le rencontrer',
  cases: [
    { situation: 'Tu lis un roman du XIXe siècle', fr: fr(E(1200)), en: en(E(1200)) },
    { situation: 'Tu révises un manuel d’histoire', fr: fr(E(1215)), en: en(E(1215)) },
    { situation: 'Tu lis un éditorial solennel', fr: fr(E(1223)), en: en(E(1223)) },
    { situation: 'Un collègue plaisante par courriel', fr: fr(E(1221)), en: en(E(1221)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le chapeau', 'Dans « Elle exigea qu’il fût là », fût est…',
    ['un subjonctif', 'un passé simple'], 0,
    'Le chapeau et le que : un subjonctif. EN: a subjunctive.'),
  ctl('Aujourd’hui', 'Pour le dire aujourd’hui, tu dis…',
    ['qu’il soit là', 'qu’il fut là', 'qu’il a été là'], 0,
    'Le présent du subjonctif. EN: qu’il soit.'),
  ctl('Ta tâche', 'Dans cette leçon, ces formes, tu dois…',
    ['les reconnaître et les traduire', 'les écrire dans tes messages'], 0,
    'Tu les lis ; tu ne les produis jamais. EN: you read them, you never produce them.'),
], ['chapeau']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Un chapeau sur le u',
    opener: {
      line: "Un ami lit une phrase de roman et croit y lire un fait : ici tu découvres le subjonctif des livres, et son petit chapeau. EN: A friend reads a novel's sentence and thinks it states a fact: here you meet the subjunctive of books and its little hat.",
      imageRef: 'lessons/subjonctif-litteraire/act01.jpg',
    },
    sections: [],
    milestone: "Tu repères un subjonctif littéraire à son chapeau et à son que, et tu dis la forme d'aujourd'hui. EN: You can spot a literary subjunctive by its circumflex and its que, and give today's form.",
    estScreens: 32, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: OÙ IL VIT ENCORE
 *
 *  Classic novels, careful history writing, the press for effect, humour,
 *  formal speeches. Never in conversation. Sophie's over-solemn email.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Le courriel de Sophie',
  frSub: 'Un bureau à Lausanne',
  setting: "Lausanne, au bureau. Sophie a envoyé un courriel très solennel à toute l'équipe ; son collègue Marc la taquine à la machine à café.",
  bubbles: [
    { from: 'narrator', fr: "Sophie a envoyé ce matin un courriel à toute l'équipe.", en: 'This morning Sophie sent an email to the whole team.' },
    { from: 'user', fr: fr(E(1221)), en: en(E(1221)) },
    { from: 'coach', fr: "On dirait une lettre du dix-neuvième siècle. Tu veux dire : il aurait été préférable que la réunion soit reportée.", en: 'It reads like a nineteenth-century letter. You mean: it would have been better for the meeting to be postponed.', warn: 'Pour rire, pas pour de vrai' },
    { from: 'user', fr: "C'était voulu. Je voulais que tout le monde sourie un peu.", en: 'It was on purpose. I wanted everyone to smile a little.' },
    { from: 'coach', fr: "Réussi. Mais au téléphone, personne ne parle comme ça. On dit : il aurait mieux valu reporter.", en: 'It worked. But on the phone nobody talks like that. You say: it would have been better to postpone.', warn: "À l'oral : le conditionnel passé" },
    { from: 'user', fr: "Pourtant, les journaux l'écrivent encore.", en: 'Yet newspapers still write it.' },
    { from: 'coach', fr: "Parfois, pour donner du poids. Un journaliste écrira : le ministre regretta que la loi ne fût pas votée.", en: 'Sometimes, to add weight. A journalist will write: the minister regretted that the law was not passed.', warn: "La presse, pour l'effet" },
  ],
  closing: { fr: 'Écrit pour faire sourire ou pour donner du poids : jamais pour parler.', en: 'Written to raise a smile or to add weight: never to speak.' },
  audio: REC('rec-b2-09-sophie'),
  say: REFRAME,
  terms: ['registre'],
};

const A2_GENRES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-genres',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-usages',
  title: 'Quatre endroits où il vit',
  frSub: 'L’écrit soigné, pas la conversation',
  hint: 'Quatre cartes. Regarde qui écrit, et pourquoi.',
  audio: REC('rec-b2-09-genres'),
  say: REFRAME,
  terms: ['registre'],
  cards: [
    {
      head: 'Le roman classique', label: 'le XIXe siècle',
      fr: fr(E(1206)), sub: rsOf(E(1206)),
      body: "Dans les romans du XIXe siècle, la narration met l'imparfait du subjonctif partout où un verbe au passé demande un subjonctif. Les personnages, quand ils parlent, en emploient beaucoup moins. EN: Classic novels use it wherever a past verb calls for a subjunctive.",
    },
    {
      head: 'Le livre d’histoire', label: 'le manuel soigné',
      fr: fr(E(1215)), sub: rsOf(E(1215)),
      body: "Un manuel soigné ou un ouvrage d'historien peut encore l'écrire, surtout à la troisième personne. Ton professeur, en classe, dit : a ordonné que les travaux soient achevés. EN: Careful history books may still write it.",
    },
    {
      head: 'La presse', label: 'pour l’effet',
      fr: fr(E(1223)), sub: rsOf(E(1223)),
      body: "Un éditorialiste l'emploie parfois pour donner du poids ou de l'ironie à une phrase : ne fût-ce que, il eût fallu, on eût dit. EN: Journalists use a few forms for weight or irony.",
    },
    {
      head: 'L’humour', label: 'pour rire',
      fr: fr(E(1221)), sub: rsOf(E(1221)),
      body: "Entre collègues ou entre amis, un subjonctif littéraire placé exprès fait sourire, parce qu'il est trop solennel pour la situation. EN: Used on purpose, it is funny because it is too solemn.",
    },
  ],
};

const A2_CANAL: Sec<'reading'> = {
  type: 'reading',
  id: 'a2-canal',
  layer: 'core',
  questionsInModal: true,
  title: 'Le canal de Sainte-Aure',
  frSub: 'Une page de manuel',
  text: LECTURE_CANAL,
  glossary: [
    { word: 'tracé', en: 'route, layout', note: 'Le chemin que suivra le canal, dessiné sur la carte.' },
  ],
  questions: [
    { q: 'Devine le sens : « le projet faillit échouer plusieurs fois ». Que s’est-il presque passé ?', a: "Le projet a presque échoué : faillit, c'est faillir ; faillir + infinitif veut dire presque." },
    { q: 'Globale : quel genre de texte est-ce, et pour qui est-il écrit ?', a: "Une page de manuel d'histoire régionale, pour des élèves qui préparent un examen : elle raconte, puis donne les dates à retenir." },
    { q: 'Repère quatre formes du subjonctif littéraire et dis ce qui les déclenche.', a: "creusât (demandaient qu'on), dotât (il fallait que), s'endettât (craignaient que), attendît (voulaient qu'on), fussent (ordonna que), crût (bien qu'aucun ingénieur ne), fût (bien que), aboutît (pour que)." },
    { q: 'Détail : pourquoi le chantier continue-t-il malgré le budget épuisé ?', a: "Grâce à un emprunt que les marchands garantissent eux-mêmes." },
    { q: 'Point de vue : « Il eût été plus sage d’attendre le printemps. » Qui juge ainsi, et que veut dire la phrase ?', a: "L'auteur du manuel, après coup. Aujourd'hui : il aurait été plus sage d'attendre ; le préfet a eu tort de presser les travaux." },
  ],
  audio: REC('rec-b2-09-canal'),
  say: REFRAME,
  terms: ['registre', 'signal'],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-usages',
  title: 'Six endroits, une seule exception',
  cols: ['Où', 'Subjonctif littéraire ?', 'Ce que tu lis'],
  rows: [
    { cells: ['un roman classique', 'oui, souvent', 'bien qu’il fût tard'], say: fr(E(1206)),
      detail: { title: 'Le roman classique', body: "La narration l'emploie après un verbe au passé. EN: in classic narration.", say: fr(E(1210)) } },
    { cells: ['un roman d’aujourd’hui', 'rarement, pour le style', 'on eût dit'], say: fr(E(1376)),
      detail: { title: 'Le roman récent', body: "Un auteur d'aujourd'hui l'emploie pour imiter ou pour faire sourire. EN: for pastiche or humour.", say: fr(E(1378)) } },
    { cells: ['un livre d’histoire', 'parfois', 'que les travaux fussent achevés'], say: fr(E(1215)),
      detail: { title: 'Le livre d’histoire', body: "Surtout à la troisième personne, dans un style soigné. EN: careful style, third person.", say: fr(E(1228)) } },
    { cells: ['la presse', 'pour l’effet', 'ne fût-ce que'], say: fr(E(1223)),
      detail: { title: 'La presse', body: "Quelques formes figées, pour le poids ou l'ironie. EN: a few fixed forms.", say: fr(E(1350)) } },
    { cells: ['un discours officiel', 'parfois', 'il eût été facile'], say: fr(E(1335)),
      detail: { title: 'Le discours', body: "Un discours solennel aime il eût fallu et qui eût cru. EN: formal speeches like these.", say: fr(E(1343)) } },
    { cells: ['une conversation', 'jamais, sauf pour rire', 'il fallait que tu le saches'], say: fr(E(1227)),
      detail: { title: 'La conversation', body: "On dit le présent du subjonctif, même en parlant du passé. EN: never, except as a joke.", say: fr(E(1356)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-trier',
  layer: 'core',
  size: 'lg',
  title: 'Écrit pour être lu, ou dit à voix haute',
  frSub: 'Deux piles',
  groups: [
    grp('Écrit pour être lu', [
      it(E(1215), 'un manuel'),
      it(E(1223), 'un journal'),
      it(E(1219), 'un historien juge'),
      it(E(1228), 'un manuel soigné'),
    ], chk('Où lis-tu ces quatre phrases ?',
      ['dans un texte écrit et soigné', 'dans une conversation'], 0,
      'Des formes littéraires : l’écrit soigné. EN: careful writing.')),
    grp('Dit à voix haute', [
      it(E(1227), 'une collègue au téléphone'),
      it(E(1216), 'un professeur en classe'),
      it(E(1218), 'un guide raconte'),
      it(E(1224), 'la radio en direct'),
    ], chk('Et ces quatre-là, quel subjonctif emploient-elles ?',
      ['le présent ou le passé du subjonctif', 'l’imparfait du subjonctif'], 0,
      'À l’oral, le subjonctif d’aujourd’hui. EN: today’s subjunctive in speech.')),
    ctl('La personne', 'Quelle forme rencontres-tu le plus souvent ?',
      ['qu’il fût', 'que nous fussions', 'que vous fussiez'], 0,
      'La troisième personne du singulier, de loin. EN: the third person singular.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'personne'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('L’exception', 'Où ne rencontres-tu jamais le subjonctif littéraire, sauf pour rire ?',
    ['dans une conversation', 'dans un roman classique', 'dans un manuel soigné'], 0,
    'Jamais à l’oral, sauf par jeu. EN: never in speech.'),
  ctl('La presse', 'Un journaliste écrit « ne fût-ce que ». Il veut…',
    ['donner du poids à sa phrase', 'écrire comme on parle'], 0,
    'Un effet de style. EN: for effect.'),
  ctl('La personne', 'Les formes que nous fussions, qu’ils eussent sont…',
    ['rares et vieillies', 'les plus courantes'], 0,
    'La troisième personne du singulier domine. EN: rare.'),
], ['registre', 'personne']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Où il vit encore',
    opener: {
      line: "Un courriel trop solennel fait rire tout le bureau : ici tu apprends où ce subjonctif vit encore, et où il ne met jamais les pieds. EN: An over-solemn email makes the office laugh: here you learn where this subjunctive still lives, and where it never goes.",
      imageRef: 'lessons/subjonctif-litteraire/act02.jpg',
    },
    sections: [],
    milestone: "Tu sais dans quels textes tu rencontreras le subjonctif littéraire, et pourquoi personne ne le dit. EN: You know which texts use the literary subjunctive, and why nobody says it.",
    estScreens: 32, restPoints: ['a2-canal'],
  },
  sections: [A2_HISTOIRE, A2_GENRES, A2_CANAL, A2_TABLE, A2_TRIER, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: FUT OU FÛT
 *
 *  The hook to lesson 8 in B2: fut / fût, eut / eût, fit / fît, vint / vînt,
 *  prit / prît, put / pût. The eye sees the circumflex; the ear hears
 *  nothing and must listen for the trigger.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Le passé simple, puis le subjonctif',
  frSub: `Ce que ${PS_REF} t’a donné`,
  examples: [
    ex(LIT(1105), 'fut, sans chapeau : un fait'),
    ex(E(1230), 'fût, après bien que'),
    ex(LIT(1107), 'eut : il a eu peur'),
    ex(E(1232), 'eût, après furieux que'),
    ex(LIT(1109), 'fit : elle a fait'),
    ex(E(1234), 'fît, après il fallait que'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chapeau', 'signal'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-formes',
  title: 'Six paires, un accent',
  frSub: 'Le fait et le subjonctif',
  hint: 'Quatre cartes. La dernière parle à ton oreille.',
  audio: REC('rec-b2-09-chapeau'),
  say: REFRAME,
  terms: ['chapeau', 'signal'],
  cards: [
    {
      head: 'Fut, fût', label: Cap(PS_REF),
      fr: 'il fut · qu’il fût', sub: '[eel FÜ] · [keel FÜ]',
      body: `« ${B208_REFRAME} » Fût, avec son chapeau, dépend d'un que. EN: ${B208_REFRAME_EN}`,
    },
    {
      head: 'Eut, eût ; fit, fît', label: 'avoir, faire',
      fr: 'il eut · qu’il eût · il fit · qu’il fît', sub: '[eel Ü] · [kee-LÜ] · [eel FEE] · [keel FEE]',
      body: "Même règle pour avoir et faire : sans chapeau, un passé simple ; avec un chapeau, un subjonctif. EN: same rule for avoir and faire.",
    },
    {
      head: 'Vint, vînt ; prit, prît ; put, pût', label: 'venir, prendre, pouvoir',
      fr: 'il vint · qu’il vînt', sub: '[eel VEHⁿ] · [keel VEHⁿ]',
      body: "Vînt, prît, pût : le chapeau se pose sur la voyelle du passé simple. Le son ne change pas. EN: the circumflex sits on the passé simple vowel.",
    },
    {
      head: 'L’oreille ne voit rien', label: 'le piège',
      fr: fr(E(1244)), sub: rsOf(E(1244)),
      body: "Ce fût et ce fut se prononcent pareil. À l'oral, c'est le déclencheur qui te prévient : il fallait que, bien que, avant que. EN: you hear no difference; listen for the trigger.",
    },
  ],
};

const A3_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Un fait, ou un subjonctif',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Chapeau ou pas', [
      it(LIT(1105), 'fut : un fait'),
      it(E(1230), 'fût : après bien que'),
      it(E(1246), 'fut : un fait'),
      it(E(1244), 'fût : après il fallait que'),
    ], chk('Dans la deuxième phrase, fût est…',
      ['un subjonctif', 'un passé simple'], 0,
      'Bien que, puis un chapeau : un subjonctif. EN: a subjunctive.')),
    grp('Retrouve le verbe', [
      it(E(1234), 'fît'),
      it(E(1236), 'prît'),
      it(E(1238), 'pût'),
      it(E(1240), 'vînt'),
    ], chk('Pût, dans la troisième phrase, vient de…',
      ['pouvoir', 'punir', 'plaire'], 0,
      'Pu, pût : pouvoir. EN: pouvoir.')),
    ctl('Aujourd’hui', '« Il fallut qu’il prît le premier train. » Aujourd’hui…',
      ['il a fallu qu’il prenne le premier train', 'il a fallu qu’il a pris le premier train', 'il fallait qu’il prit le premier train'], 0,
      'Fallut : a fallu ; prît : prenne. EN: prenne.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chapeau'],
};

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le que avant tout',
  frSub: 'Huit phrases, une seule oreille',
  lines: [
    ln(LIT(1105)), ln(E(1230)), ln(E(1246)), ln(E(1244)),
    ln(LIT(1107)), ln(E(1232)), ln(LIT(1109)), ln(E(1234)),
  ],
  questions: [
    { q: 'Première phrase : est-ce un fait raconté ?', opts: ['oui, un fait', 'non, un subjonctif'], correct: 0, why: 'Pas de que devant : un passé simple. EN: no que, so a fact.' },
    { q: 'Deuxième phrase : quel mot annonce le subjonctif ?', opts: ['bien que', 'personne', 'nuit'], correct: 0, why: 'Bien que déclenche le subjonctif. EN: bien que.' },
    { q: 'Quatrième phrase : le succès est-il déjà arrivé ?', opts: ['non, il le fallait', 'oui, c’est un fait'], correct: 0, why: 'Il fallait que : une nécessité, pas un fait. EN: a necessity.' },
    { q: 'Sixième phrase : que ressent-il ?', opts: ['de la colère', 'de la peur', 'de la joie'], correct: 0, why: 'Il était furieux. EN: anger.' },
    { q: 'Dernière phrase : qu’est-ce qui était nécessaire ?', opts: ['faire ses valises sans bruit', 'partir en voyage'], correct: 0, why: 'Il fallait qu’elle fasse ses valises en silence. EN: packing in silence.' },
  ],
  audio: REC('rec-b2-09-chapeau-ecoute'),
  say: REFRAME,
  terms: ['signal', 'chapeau'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Lu trop vite',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le chapeau et le que décident',
    body: "Fut, eut, fit racontent un fait : aujourd'hui, un passé composé. Fût, eût, fît dépendent d'un que : aujourd'hui, un présent du subjonctif. Regarde l'accent, puis le mot devant. EN: without the circumflex, a fact; with it, a subjunctive.",
  },
  cards: [
    { promptLabel: 'lu comme un fait', promptSound: 'Bien que ça a été une longue nuit, personne n’a dormi.', fr: fr(E(1231)), ipa: ipaOf(E(1231)), tip: 'Bien que appelle le subjonctif : soit. EN: soit, not a été.' },
    { promptLabel: 'eût lu comme eut', promptSound: 'Il était furieux qu’elle a eu raison.', fr: fr(E(1233)), ipa: ipaOf(E(1233)), tip: 'Eût, avec un chapeau : ait. EN: ait.' },
    { promptLabel: 'fît lu comme fit', promptSound: 'Il fallait qu’elle a fait ses valises en silence.', fr: fr(E(1235)), ipa: ipaOf(E(1235)), tip: 'Fît : fasse. EN: fasse.' },
    { promptLabel: 'deux temps mêlés', promptSound: 'Il fallait qu’il a pris le premier train.', fr: fr(E(1237)), ipa: ipaOf(E(1237)), tip: 'Fallut : a fallu ; prît : prenne. EN: a fallu, prenne.' },
    { promptLabel: 'pût lu comme put', promptSound: 'Elle a attendu qu’il a pu parler.', fr: fr(E(1239)), ipa: ipaOf(E(1239)), tip: 'Attendre que : puisse. EN: puisse.' },
    { promptLabel: 'le fait lu comme un subjonctif', promptSound: 'Que ce soit un succès.', fr: fr(E(1247)), ipa: ipaOf(E(1247)), tip: 'Ce fut, sans chapeau ni que : un fait. Ça a été un succès. EN: a fact.' },
  ],
  drill: [
    { promptSay: '« qu’il fût » : c’est…', opts: ['un subjonctif', 'un passé simple'], correct: 0 },
    { promptSay: '« il fut » : c’est…', opts: ['un passé simple', 'un subjonctif'], correct: 0 },
    { promptSay: '« Bien qu’il eût raison… » Aujourd’hui : bien qu’il…', opts: ['ait raison', 'a eu raison'], correct: 0 },
    { promptSay: '« Il fallait qu’elle fît ses valises. » Aujourd’hui : qu’elle…', opts: ['fasse', 'a fait'], correct: 0 },
    { promptSay: '« Elle fit ses valises. » Aujourd’hui : elle…', opts: ['a fait ses valises', 'fasse ses valises'], correct: 0 },
    { promptSay: '« Il souhaitait qu’elle vînt. » Vînt vient de…', opts: ['venir', 'vendre'], correct: 0 },
    { promptSay: '« Elle attendit qu’il pût parler. » Aujourd’hui : qu’il…', opts: ['puisse parler', 'a pu parler'], correct: 0 },
    { promptSay: 'À l’oreille, fut et fût…', opts: ['sonnent pareil', 'sonnent différemment'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le chapeau et le que décident' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que l’œil lit trop vite' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six bonnes versions' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-09-piege-chapeau'),
  say: REFRAME,
  terms: ['chapeau', 'aujourdhui'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Repérer : l’hiver de Paul', TEXTE_A3, [
  { q: 'Sépare les formes sans chapeau et les formes avec chapeau.', a: "Sans chapeau, des passés simples : fut (trois fois), tomba, se proposa, dit, partit, fit. Avec chapeau, des subjonctifs : descendît, fût, restât, eût (il n'y eût). Eût préféré, sans que, se lit aurait préféré." },
  { q: 'Dans « il fut de retour », pourquoi pas de chapeau ?', a: "C'est un fait raconté, sans que devant : un passé simple. Aujourd'hui : il est revenu." },
  { q: 'Dis en français d’aujourd’hui : « Sa mère eût préféré qu’il restât. »', a: "Sa mère aurait préféré qu'il reste." },
  { q: 'Inférence : pourquoi la mère ne dit-elle rien ?', a: "Elle a peur pour lui, mais elle sait que le village a besoin de médicaments : elle accepte en silence." },
], 'rec-b2-09-texte-a3', ['chapeau', 'signal']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le chapeau', '« Il fallait qu’elle fît ses valises. » Fît vient de…',
    ['faire', 'finir', 'fuir'], 0,
    'Fit, fît : faire. EN: faire.'),
  ctl('Le son', 'Fut et fût, à l’oreille…',
    ['sonnent pareil', 'ne se ressemblent pas'], 0,
    'Seul l’œil voit la différence. EN: they sound the same.'),
  ctl('Le signal', 'À l’oral, qu’est-ce qui annonce le subjonctif ?',
    ['le déclencheur devant que', 'l’accent'], 0,
    'Tu n’entends pas l’accent ; tu entends il fallait que. EN: the trigger.'),
], ['chapeau', 'signal']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Fut ou fût',
    opener: {
      line: `Il fut, qu'il fût : un accent sépare un fait d'un souhait. Ici tu relis le passé simple de ${PS_REF} avec un œil neuf. EN: Il fut, qu'il fût: one accent separates a fact from a wish; here you reread the passé simple with new eyes.`,
      imageRef: 'lessons/subjonctif-litteraire/act03.jpg',
    },
    sections: [],
    milestone: "Tu distingues d'un coup d'œil le passé simple du subjonctif, et à l'oreille tu te fies au déclencheur. EN: You can tell the passé simple from the subjunctive at a glance, and by ear through the trigger.",
    estScreens: 38, restPoints: ['a3-reperer', 'a3-piege'],
  },
  sections: [A3_EXEMPLES, A3_CARTES, A3_REPERER, A3_ECOUTE, A3_PIEGE, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: LA FORME
 *
 *  -ât, -ît, -ût, -înt, built on the passé simple; the -ssent plural (rare);
 *  the sosie qu'ils finissent / que nous finissions; the ne explétif.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Le bac de Fatou',
  frSub: 'Dakar, un soir de révision',
  setting: "Dakar. Fatou prépare l'épreuve de français du bac avec son oncle Idrissa, professeur à la retraite. Elle lit à voix haute une page de roman.",
  bubbles: [
    { from: 'narrator', fr: "Fatou bute sur trois formes qu'elle n'a jamais vues.", en: 'Fatou stumbles over three forms she has never seen.' },
    { from: 'user', fr: fr(E(1250)), en: en(E(1250)) },
    { from: 'coach', fr: "Chantât, c'est chanter. Pense au passé simple : elle chanta. Ajoute un chapeau et un t.", en: 'Chantât is chanter. Think of the passé simple: elle chanta. Add a circumflex and a t.', warn: '-ât : un verbe en -er' },
    { from: 'user', fr: fr(E(1252)), en: en(E(1252)) },
    { from: 'coach', fr: "Finît, c'est finir : il finit, avec un chapeau. Aujourd'hui, tu dirais qu'il finisse.", en: 'Finît is finir: il finit, with a circumflex. Today you would say qu’il finisse.', warn: '-ît : finir, partir, faire' },
    { from: 'user', fr: fr(E(1262)), en: en(E(1262)) },
    { from: 'coach', fr: "Fussent : être, au pluriel. Ces formes-là sont rares, et même un peu comiques aujourd'hui.", en: 'Fussent: être, in the plural. Those forms are rare, and a bit comic today.', warn: '-ssent : ils, elles' },
  ],
  closing: { fr: 'Retrouve le passé simple sous le chapeau, et le verbe revient.', en: 'Find the passé simple under the hat, and the verb comes back.' },
  audio: REC('rec-b2-09-fatou'),
  say: REFRAME,
  terms: ['radical', 'personne'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-formes',
  title: 'Quatre finales, un chapeau',
  frSub: 'L’imparfait du subjonctif',
  hint: 'Quatre cartes. La dernière passe au pluriel.',
  audio: REC('rec-b2-09-formes'),
  say: REFRAME,
  terms: ['radical', 'personne'],
  cards: [
    {
      head: '-ât : les verbes en -er', label: 'chanta, qu’il chantât',
      fr: fr(E(1250)), sub: rsOf(E(1250)),
      body: "Tous les verbes en -er : prends le passé simple (elle chanta), ajoute un chapeau et un t. Qu'elle chantât, qu'il parlât, que la ville se dotât. EN: -er verbs: -ât.",
    },
    {
      head: '-ît : finir, partir, faire, dire', label: 'finit, qu’il finît',
      fr: fr(E(1252)), sub: rsOf(E(1252)),
      body: "Les passés simples en -it gardent leur i et prennent un chapeau : qu'il finît, qu'il fît, qu'il dît, qu'il prît. EN: -it verbs: -ît.",
    },
    {
      head: '-ût et -înt', label: 'fut, qu’il fût ; vint, qu’il vînt',
      fr: fr(E(1256)), sub: rsOf(E(1256)),
      body: "Les passés simples en -ut et en -int font de même : qu'il fût, qu'il eût, qu'il sût, qu'il pût, qu'il vînt, qu'il tînt. EN: -ut and -int verbs: -ût, -înt.",
    },
    {
      head: 'Le pluriel : -ssent', label: 'ils, elles',
      fr: fr(E(1260)), sub: rsOf(E(1260)),
      body: "Au pluriel, un double s et -ent : qu'ils chantassent, qu'ils partissent, qu'ils fussent, qu'ils vinssent. Pas de chapeau. Ces formes sont rares aujourd'hui. EN: plural -ssent, no circumflex, and rare.",
    },
  ],
};

const A4_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a4-table',
  layer: 'core',
  sheetId: 'sheet-formes',
  title: 'Du passé simple au subjonctif',
  cols: ['Passé simple', 'Subjonctif littéraire', 'Aujourd’hui'],
  rows: [
    { cells: ['elle chanta', 'qu’elle chantât', 'qu’elle chante'], say: fr(E(1250)),
      detail: { title: 'Chanter', body: "-a devient -ât : tous les verbes en -er. EN: all -er verbs.", say: fr(E(1251)) } },
    { cells: ['il finit', 'qu’il finît', 'qu’il finisse'], say: fr(E(1252)),
      detail: { title: 'Finir', body: "-it devient -ît. EN: -it becomes -ît.", say: fr(E(1253)) } },
    { cells: ['il fut', 'qu’il fût', 'qu’il soit'], say: fr(E(1200)),
      detail: { title: 'Être', body: "La forme la plus fréquente de toutes. EN: the most frequent form.", say: fr(E(1202)) } },
    { cells: ['il eut', 'qu’il eût', 'qu’il ait'], say: fr(E(1232)),
      detail: { title: 'Avoir', body: "Eût sert aussi à former le plus-que-parfait. EN: eût also builds the pluperfect.", say: fr(E(1233)) } },
    { cells: ['il vint', 'qu’il vînt', 'qu’il vienne'], say: fr(E(1204)),
      detail: { title: 'Venir', body: "-int devient -înt : venir, tenir, et leurs familles. EN: -int becomes -înt.", say: fr(E(1205)) } },
    { cells: ['ils partirent', 'qu’ils partissent', 'qu’ils partent'], say: fr(E(1260)),
      detail: { title: 'Le pluriel', body: "-rent devient -ssent, sans chapeau. EN: -rent becomes -ssent.", say: fr(E(1261)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical'],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le verbe, puis la personne',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Retrouve l’infinitif', [
      it(E(1250), 'chantât'),
      it(E(1254), 'reconnût'),
      it(E(1256), 'sût'),
      it(E(1258), 'dît'),
    ], chk('Sût, dans la troisième phrase, vient de…',
      ['savoir', 'suivre', 'sortir'], 0,
      'Su, sût : savoir. EN: savoir.')),
    grp('Un ou plusieurs', [
      it(E(1260), 'partissent : ils'),
      it(E(1262), 'fussent : ils'),
      it(E(1264), 'lavassent : ils'),
      it(E(1266), 'eussent : ils'),
    ], chk('Ces formes en -ssent disent…',
      ['ils ou elles', 'il ou elle'], 0,
      'Le double s et -ent : le pluriel. EN: plural.')),
    ctl('Le sosie', '« Il fallait que nous finissions avant midi. » Cette phrase est…',
      ['correcte aujourd’hui aussi', 'uniquement littéraire'], 0,
      'Nous finissions : même forme au présent et à l’imparfait du subjonctif. EN: the same form in both.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'personne'],
};

const A4_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a4-hacks',
  layer: 'core',
  sheetId: 'sheet-formes',
  title: 'Trois réflexes devant un chapeau',
  hacks: [
    { hack: 'Enlève le chapeau : tu retrouves le passé simple, puis le verbe.', why: `Qu'il fît, il fit, faire. Qu'il pût, il put, pouvoir. ${Cap(PS_REF)} t'a appris ce chemin. EN: remove the circumflex, find the passé simple, then the verb.` },
    { hack: 'Cherche le que, et ce qui le précède.', why: "Un subjonctif littéraire dépend presque toujours d'un déclencheur : il fallait que, bien que, voulait que. EN: look for que and its trigger." },
    { hack: 'Ne t’arrête pas sur le ne : il ne nie rien.', why: "Il craignait qu'on ne le reconnût : ce ne est explétif. Aujourd'hui, on dit souvent qu'on le reconnaisse. EN: the ne after craindre que is not a negation." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'signal'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Retrouver : la soirée de la comtesse', TEXTE_A4, [
  { q: 'Relève les formes du subjonctif littéraire et donne leur infinitif.', a: "fût (être), cirassent (cirer), préparât (préparer), jouassent (jouer), fussent (être), détestassent (détester), sonnât (sonner)." },
  { q: 'Lesquelles sont au pluriel ?', a: "cirassent, jouassent, fussent, détestassent : ils ou elles, avec un double s." },
  { q: 'Dis en français d’aujourd’hui : « Elle exigea que les domestiques cirassent les parquets. »', a: "Elle a exigé que les domestiques cirent les parquets." },
  { q: 'Pourquoi cette fin fait-elle sourire ?', a: "Tout était prêt pour une grande fête, et personne ne vient : la comtesse mange seule douze plats, avec la même dignité." },
], 'rec-b2-09-texte-a4', ['radical', 'personne']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La finale', 'Qu’il parlât vient de…',
    ['parler', 'partir', 'paraître'], 0,
    '-ât : un verbe en -er. EN: parler.'),
  ctl('Le pluriel', 'Qu’ils vinssent : combien de personnes ?',
    ['plusieurs', 'une seule'], 0,
    '-ssent : ils. EN: several.'),
  ctl('La base', 'L’imparfait du subjonctif se construit sur…',
    ['le passé simple', 'l’imparfait de l’indicatif', 'le futur'], 0,
    'Il vint, qu’il vînt. EN: on the passé simple.'),
], ['radical', 'personne']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La forme',
    opener: {
      line: "Chantât, finît, fût, vînt : ici tu apprends à retrouver le verbe sous chaque chapeau, même au pluriel. EN: Chantât, finît, fût, vînt: here you learn to find the verb under every hat, even in the plural.",
      imageRef: 'lessons/subjonctif-litteraire/act04.jpg',
    },
    sections: [],
    milestone: "Tu retrouves l'infinitif et la personne de n'importe quel imparfait du subjonctif, sans jamais avoir à le former. EN: You can map any imperfect subjunctive to its infinitive and person.",
    estScreens: 36, restPoints: ['a4-table', 'a4-hacks'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_TABLE, A4_CONSTRUIRE, A4_HACKS, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: EÛT FINI, FÛT VENUE
 *
 *  The plus-que-parfait du subjonctif, mapped to the subjonctif passé of
 *  lesson 5 in B2; against the passé antérieur « quand il eut fini » of
 *  lesson 8 in B2.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Les souvenirs d’une institutrice',
  frSub: 'Des mémoires, écrits en 1910',
  text: LECTURE_MEMOIRES,
  glossary: [
    { word: 'poêle', en: 'stove', note: 'Le poêle à bois qui chauffait la classe.' },
  ],
  questions: [
    { q: 'Devine le sens : « il me fit comprendre qu’il eût mieux valu un homme ». Que pense le maire ?', a: "Qu'un homme aurait mieux convenu : il ne le dit pas franchement, mais il le fait comprendre." },
    { q: 'Globale : que raconte ce souvenir ?', a: "L'arrivée difficile d'une jeune institutrice dans un village de montagne, jusqu'au jour où elle décide de rester." },
    { q: 'Repère deux plus-que-parfaits du subjonctif et dis-les aujourd’hui.', a: "qu'on eût envoyé (qu'on ait envoyé), eût été réparé (ait été réparé), qu'on m'eût assuré (qu'on m'ait assuré), qu'on eût reçu (qu'on ait reçu)." },
    { q: 'Détail : pourquoi le grand élève vient-il la voir ?', a: "Il veut qu'elle l'aide à écrire une lettre à son frère, parti en Amérique sans donner de nouvelles." },
    { q: 'Inférence : pourquoi comprend-elle qu’elle restera, le jour de la réponse ?', a: "La lettre a marché : elle se sent enfin utile, et le village l'accepte." },
  ],
  audio: REC('rec-b2-09-memoires'),
  say: REFRAME,
  terms: ['anteriorite', 'personne'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-formes',
  title: 'Eût ou fût, puis le participe',
  frSub: 'Ce qui était déjà fait',
  hint: 'Quatre cartes. La dernière n’a pas de chapeau.',
  audio: REC('rec-b2-09-pqp'),
  say: REFRAME,
  terms: ['anteriorite', 'chapeau'],
  cards: [
    {
      head: 'Avec avoir', label: 'qu’il eût fini',
      fr: fr(E(1279)), sub: rsOf(E(1279)),
      body: "Eût, avec son chapeau, puis un participe : l'action était déjà finie avant l'autre. Aujourd'hui, le subjonctif passé : avant qu'il ait fini. EN: eût plus a participle: already done; today, ait fini.",
    },
    {
      head: 'Avec être', label: 'qu’elle fût venue',
      fr: fr(E(1275)), sub: rsOf(E(1275)),
      body: "Les verbes qui prennent être au passé composé prennent fût : qu'elle fût venue, qu'ils fussent arrivés. Aujourd'hui : qu'elle soit venue. EN: être verbs take fût; today, soit venue.",
    },
    {
      head: 'La même horloge', label: Cap(SUBJPASSE_REF),
      fr: fr(EMO(1263)), sub: rsOf(EMO(1263)),
      body: `« ${B205_REFRAME} » Le plus-que-parfait du subjonctif dit la même chose, dans l'habit des livres. EN: ${B205_REFRAME_EN}`,
    },
    {
      head: 'Sans chapeau : un autre temps', label: 'quand il eut fini',
      fr: fr(LIT(1126)), sub: rsOf(LIT(1126)),
      body: `Quand il eut fini, sans chapeau et sans que, c'est le passé antérieur de ${PS_REF} : aujourd'hui, quand il a fini. EN: without the circumflex, it is the passé antérieur.`,
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Déjà fait, puis aujourd’hui',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Déjà fait', [
      it(E(1277), 'eût travaillé'),
      it(E(1279), 'eût fini'),
      it(E(1281), 'fussent arrivés'),
      it(E(1288), 'eût ouvert'),
    ], chk('Dans ces phrases, l’action au subjonctif…',
      ['était déjà finie', 'allait arriver', 'se passait en même temps'], 0,
      'Eût ou fût et un participe : déjà fait. EN: already done.')),
    grp('Aujourd’hui', [
      it(E(1278), 'ait travaillé'),
      it(E(1280), 'ait fini'),
      it(E(1282), 'soient arrivés'),
      it(E(1289), 'ait ouvert'),
    ], chk('Quel temps a pris leur place ?',
      ['le subjonctif passé', 'le passé composé', 'le plus-que-parfait'], 0,
      `Le subjonctif passé de ${SUBJPASSE_REF}. EN: the past subjunctive.`)),
    ctl('Avoir ou être', '« qu’elle fût partie » : aujourd’hui…',
      ['qu’elle soit partie', 'qu’elle ait partie', 'qu’elle était partie'], 0,
      'Partir prend être : soit partie. EN: soit partie.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['anteriorite', 'aujourdhui'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Eut fini ou eût fini',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le chapeau change le temps',
    body: "Quand il eut fini, sans chapeau : un passé antérieur, un fait raconté. Qu'il eût fini, avec chapeau et que : un plus-que-parfait du subjonctif. Aujourd'hui : quand il a fini, qu'il ait fini. EN: eut fini is a fact; eût fini depends on que.",
  },
  cards: [
    { promptLabel: 'lu comme un fait', promptSound: 'Elle a attendu qu’il a fini pour se lever.', fr: fr(E(1286)), ipa: ipaOf(E(1286)), tip: 'Attendre que appelle le subjonctif : ait fini. EN: ait fini.' },
    { promptLabel: 'le fait lu comme un subjonctif', promptSound: 'Quand il ait fini, il s’est levé.', fr: fr(LIT(1127)), ipa: ipaOf(LIT(1127)), tip: 'Eut fini, sans chapeau : un fait. Quand il a fini. EN: a fact.' },
    { promptLabel: 'être oublié', promptSound: 'Il était content qu’elle ait venue.', fr: fr(E(1276)), ipa: ipaOf(E(1276)), tip: 'Venir prend être : soit venue. EN: être.' },
    { promptLabel: 'l’indicatif', promptSound: 'Je doutais qu’ils étaient déjà arrivés.', fr: fr(E(1282)), ipa: ipaOf(E(1282)), tip: 'Douter que garde le subjonctif. EN: keep the subjunctive.' },
    { promptLabel: 'le passé simple oublié', promptSound: 'Bien qu’il ait beaucoup travaillé, il échoua.', fr: fr(E(1278)), ipa: ipaOf(E(1278)), tip: 'Échoua change aussi : a échoué. EN: change the passé simple too.' },
    { promptLabel: 'la négation perdue', promptSound: 'Il regrettait qu’elle l’ait aimé.', fr: fr(E(1284)), ipa: ipaOf(E(1284)), tip: 'Ne et jamais font une vraie négation : garde-les. EN: keep the negation.' },
  ],
  drill: [
    { promptSay: '« qu’il eût fini » : aujourd’hui…', opts: ['qu’il ait fini', 'qu’il a fini'], correct: 0 },
    { promptSay: '« quand il eut fini » : aujourd’hui…', opts: ['quand il a fini', 'quand il ait fini'], correct: 0 },
    { promptSay: '« qu’elle fût venue » : aujourd’hui…', opts: ['qu’elle soit venue', 'qu’elle ait venue'], correct: 0 },
    { promptSay: '« Bien qu’il eût travaillé » : c’est…', opts: ['un plus-que-parfait du subjonctif', 'un passé antérieur'], correct: 0 },
    { promptSay: '« Il eut peur » : c’est…', opts: ['un passé simple', 'un subjonctif'], correct: 0 },
    { promptSay: '« qu’ils fussent arrivés » : combien de personnes ?', opts: ['plusieurs', 'une seule'], correct: 0 },
    { promptSay: '« Elle partit avant qu’il eût fini. » Quand elle part, il…', opts: ['n’a pas encore fini', 'a déjà fini'], correct: 0 },
    { promptSay: '« qu’on eût ouvert sa lettre » : aujourd’hui…', opts: ['qu’on ait ouvert sa lettre', 'qu’on a ouvert sa lettre'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le chapeau change le temps' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que l’œil confond' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six bonnes versions' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-09-piege-pqp'),
  say: REFRAME,
  terms: ['anteriorite', 'chapeau'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Déjà fait, hier et aujourd’hui',
  frSub: 'Deux habits, une horloge',
  examples: [
    ex(E(1275), 'le livre : fût venue'),
    ex(EMO(1263), 'aujourd’hui : soit venu'),
    ex(E(1285), 'le livre : eût fini'),
    ex(E(1286), 'aujourd’hui : ait fini'),
    ex(EMO(1267), `${SUBJPASSE_REF} : ait déjà fini`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['anteriorite', 'aujourdhui'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Retrouver : le retour d’Hélène', TEXTE_A5, [
  { q: 'Relève les plus-que-parfaits du subjonctif.', a: "n'eût changé, fût mort, l'eussent gardée. Eût aimé est une deuxième forme, et qu'elle eût seize ans un imparfait du subjonctif, sans participe." },
  { q: 'Dis en français d’aujourd’hui : « elle s’étonna que rien n’eût changé ».', a: "Elle s'est étonnée que rien n'ait changé." },
  { q: 'Et « avant qu’elle eût seize ans » ?', a: "Avant qu'elle ait seize ans : ici, eût est l'imparfait du subjonctif d'avoir, sans participe." },
  { q: 'Inférence : que révèle la question de la petite fille ?', a: "Pour cette enfant, Hélène est une étrangère : le village a changé plus qu'elle ne le croyait." },
], 'rec-b2-09-texte-a5', ['anteriorite', 'chapeau']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La forme', 'Eût ou fût, puis un participe, c’est…',
    ['le plus-que-parfait du subjonctif', 'l’imparfait du subjonctif'], 0,
    'Un temps composé : déjà fait. EN: the pluperfect subjunctive.'),
  ctl('Aujourd’hui', 'Il devient…',
    ['le subjonctif passé', 'le passé composé', 'le plus-que-parfait de l’indicatif'], 0,
    'Qu’il ait fini. EN: the past subjunctive.'),
  ctl('Le piège', '« Quand il eut fini, il se leva. » Eut fini est…',
    ['un passé antérieur', 'un plus-que-parfait du subjonctif'], 0,
    'Pas de chapeau, pas de que. EN: passé antérieur.'),
], ['anteriorite']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Eût fini, fût venue',
    opener: {
      line: "Une institutrice se souvient de ce qu'on avait fait avant son arrivée : ici tu reconnais le subjonctif de ce qui était déjà fait. EN: A schoolteacher remembers what had been done before she came: here you recognise the subjunctive of what was already done.",
      imageRef: 'lessons/subjonctif-litteraire/act05.jpg',
    },
    sections: [],
    milestone: "Tu reconnais le plus-que-parfait du subjonctif, tu le traduis par le subjonctif passé et tu ne le confonds plus avec le passé antérieur. EN: You can recognise the pluperfect subjunctive and map it to the past subjunctive.",
    estScreens: 38, restPoints: ['a5-cartes', 'a5-piege'],
  },
  sections: [A5_LECTURE, A5_CARTES, A5_CONSTRUIRE, A5_PIEGE, A5_EXEMPLES, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: IL EÛT FALLU
 *
 *  The second form of the conditionnel passé: il eût fallu, j'eusse aimé,
 *  on eût dit, s'il l'eût su, il fût venu. Same form as the pluperfect
 *  subjunctive, no que. After si: the plus-que-parfait de l'indicatif.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'La chronique de Gilles',
  frSub: 'Un studio de radio à Québec',
  setting: "Québec, un studio de radio. Le chroniqueur Gilles répète sa chronique ; la réalisatrice, Nadia, l'arrête à chaque phrase trop solennelle.",
  bubbles: [
    { from: 'narrator', fr: 'Gilles répète sa chronique avant le direct.', en: 'Gilles rehearses his column before going live.' },
    { from: 'user', fr: fr(E(1299)), en: en(E(1299)) },
    { from: 'coach', fr: 'Joli. Mais à la radio, dis plutôt : on aurait dit un château de conte.', en: 'Nice. But on the radio, say rather: it looked like a fairy-tale castle.', warn: 'Eût dit : aurait dit' },
    { from: 'user', fr: fr(E(1295)), en: en(E(1295)) },
    { from: 'coach', fr: "Même chose : il aurait fallu. Ce n'est pas un subjonctif, il n'y a pas de que.", en: 'Same thing: il aurait fallu. It is not a subjunctive; there is no que.', warn: 'Sans que : un conditionnel' },
    { from: 'user', fr: fr(E(1301)), en: en(E(1301)) },
    { from: 'coach', fr: "Là, tu exagères. Dis : s'il l'avait su, il serait venu.", en: 'Now you are overdoing it. Say: if he had known, he would have come.', warn: 'Après si : avait su' },
  ],
  closing: { fr: 'Sans que, eût et fût se lisent comme un conditionnel passé.', en: 'With no que, eût and fût read as a past conditional.' },
  audio: REC('rec-b2-09-radio'),
  say: REFRAME,
  terms: ['deuxieme'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-formes',
  title: 'La deuxième forme',
  frSub: 'Le conditionnel passé à l’ancienne',
  hint: 'Quatre cartes. Cherche le que : il n’y en a pas.',
  audio: REC('rec-b2-09-deuxieme'),
  say: REFRAME,
  terms: ['deuxieme', 'signal'],
  cards: [
    {
      head: 'Il eût fallu', label: Cap(CONDPASSE_REF),
      fr: fr(E(1295)), sub: rsOf(E(1295)),
      body: `« ${B202_REFRAME} » Il eût fallu : lis il aurait fallu. EN: ${B202_REFRAME_EN}`,
    },
    {
      head: 'J’eusse aimé', label: 'un regret très soigné',
      fr: fr(E(1297)), sub: rsOf(E(1297)),
      body: "Avec je, la forme finit en -usse : j'eusse aimé, j'eusse voulu. Aujourd'hui : j'aurais aimé. À l'oral, seulement pour faire sourire. EN: j'eusse aimé is j'aurais aimé.",
    },
    {
      head: 'On eût dit', label: 'la comparaison',
      fr: fr(E(1299)), sub: rsOf(E(1299)),
      body: "On eût dit un château, on eût dit qu'il pleurait : une comparaison, comme on aurait dit. La presse et les romans l'aiment encore. EN: on eût dit is on aurait dit.",
    },
    {
      head: 'Si… eût su, fût venu', label: Cap(SI_REF),
      fr: fr(E(1301)), sub: rsOf(E(1301)),
      body: `« ${B203_REFRAME} » Lis : s'il l'avait su, il serait venu. EN: ${B203_REFRAME_EN}`,
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Conditionnel ou subjonctif',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Avec ou sans que', [
      it(E(1295), 'sans que'),
      it(E(1221), 'eût été, puis que… fût'),
      it(E(1303), 'sans que'),
      it(E(1285), 'après attendit que'),
    ], chk('Dans la quatrième phrase, eût fini est…',
      ['un subjonctif', 'un conditionnel passé'], 0,
      'Après attendit que : un subjonctif. EN: a subjunctive.')),
    grp('Aujourd’hui', [
      it(E(1296), 'aurait fallu'),
      it(E(1298), 'aurais aimé'),
      it(E(1300), 'aurait dit'),
      it(E(1302), 'avait su, serait venu'),
    ], chk('Dans la dernière phrase, pourquoi avait su et pas aurait su ?',
      ['parce qu’il suit si', 'parce que savoir est irrégulier'], 0,
      'Jamais de conditionnel après si. EN: never a conditional after si.')),
    ctl('Le repère', 'Sans que ni déclencheur, « il eût fallu » se lit…',
      ['il aurait fallu', 'qu’il ait fallu', 'il avait fallu'], 0,
      'Un conditionnel passé. EN: il aurait fallu.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['deuxieme', 'aujourdhui'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre lectures ratées',
  errors: [
    {
      wrong: "S'il l'aurait su, il serait venu.",
      right: fr(E(1302)),
      why: "Normal : eût est souvent un conditionnel, alors on le traduit partout par aurait. Mais après si, jamais de conditionnel : s'il l'avait su. EN: after si, the pluperfect, never the conditional.",
    },
    {
      wrong: 'Il ait fallu le dire plus tôt.',
      right: fr(E(1296)),
      why: "Normal : eût ressemble au subjonctif qu'il ait. Mais sans que, c'est un conditionnel passé : il aurait fallu. EN: no que, so a conditional.",
    },
    {
      wrong: 'On a dit un château de conte.',
      right: fr(E(1300)),
      why: "Normal : on eût dit ressemble à on eut dit, un passé antérieur. Mais le chapeau en fait une comparaison : on aurait dit. EN: it is a comparison, not something said.",
    },
    {
      wrong: 'Elle soit partie si elle avait pu.',
      right: fr(E(1308)),
      why: "Normal : fût se traduit souvent par soit. Ici, pas de que : c'est le résultat d'une condition, donc serait partie. EN: no que: serait partie.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['deuxieme', 'aujourdhui'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  title: 'Le même regret, en deux habits',
  frSub: 'Le livre, puis les leçons 1 et 2 du B2',
  examples: [
    ex(E(1295), 'le livre : eût fallu'),
    ex(CS(1208), 'aujourd’hui : aurait fallu'),
    ex(E(1297), 'le livre : j’eusse aimé'),
    ex(CS(1249), 'aujourd’hui : j’aurais aimé'),
    ex(E(1301), 'le livre : eût su, fût venu'),
    ex(RP1760, 'aujourd’hui : avais su, serais venu'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['deuxieme'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Retrouver : le phare', TEXTE_A6, [
  { q: 'Relève les deuxièmes formes et dis-les aujourd’hui.', a: "n'eût jamais été vendu (n'aurait jamais été vendu), eût suffi (aurait suffi), eût dit (aurait dit). Après si, eût écouté se lit avait écouté." },
  { q: 'Et « il y eut une tempête » ?', a: "Eut, sans chapeau : un passé simple. Aujourd'hui : il y a eu une tempête." },
  { q: 'Réécris la première phrase en français d’aujourd’hui.', a: "Si l'on avait écouté le vieux gardien, le phare n'aurait jamais été vendu." },
  { q: 'Inférence : que veut dire « Il n’en pensait pas moins » ?', a: "Il ne dit rien, mais il pense qu'il avait raison : son silence est un reproche." },
], 'rec-b2-09-texte-a6', ['deuxieme', 'chapeau']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le sens', '« On eût dit un château. » Aujourd’hui…',
    ['on aurait dit un château', 'on a dit un château'], 0,
    'Une comparaison. EN: on aurait dit.'),
  ctl('Après si', '« S’il l’eût su » : aujourd’hui…',
    ['s’il l’avait su', 's’il l’aurait su', 's’il l’ait su'], 0,
    'Le plus-que-parfait après si. EN: avait su.'),
  ctl('La forme', 'La deuxième forme a la même forme que…',
    ['le plus-que-parfait du subjonctif', 'le passé simple'], 0,
    'Eût, fût et un participe. EN: the pluperfect subjunctive.'),
], ['deuxieme']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Il eût fallu',
    opener: {
      line: "Un chroniqueur de radio parle comme un vieux livre : ici tu reconnais le conditionnel passé en habit d'époque. EN: A radio columnist talks like an old book: here you recognise the past conditional in period dress.",
      imageRef: 'lessons/subjonctif-litteraire/act06.jpg',
    },
    sections: [],
    milestone: "Tu lis il eût fallu, on eût dit, s'il l'eût su, et tu dis aussitôt la forme d'aujourd'hui, même après si. EN: You can read the second form of the past conditional and map it, even after si.",
    estScreens: 36, restPoints: ['a6-cartes', 'a6-erreurs'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_ERREURS, A6_EXEMPLES, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: LA CONCORDANCE
 *
 *  A past main verb brings the imparfait du subjonctif in a classic text;
 *  today's French keeps the présent (the clock of lesson 5 in B2). The
 *  workshop page shows both: narration in the literary form, the boss's own
 *  words in today's present subjunctive.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'L’atelier de Monsieur Lambert',
  frSub: 'Une page de roman, deux subjonctifs',
  text: LECTURE_ATELIER,
  glossary: [
    { word: 'apprenti', en: 'apprentice', note: 'Un jeune qu’on forme au métier.' },
  ],
  questions: [
    { q: 'Devine le sens : « Antoine ne sut que répondre. » Que se passe-t-il ?', a: "Antoine ne sait pas quoi répondre : il est trop surpris. Sut, c'est savoir." },
    { q: 'Globale : que raconte cette page ?', a: "Un patron exigeant qui, sans un mot de compliment, choisit un jeune ouvrier pour lui succéder." },
    { q: 'Repère trois subjonctifs littéraires dans la narration, puis les deux subjonctifs d’aujourd’hui dans les paroles du patron.', a: "Narration : fussent, parlât, sortît, renvoyât, admirassent, apportât, revînt. Paroles : il faut que quelqu'un ouvre, je voudrais que ce soit vous." },
    { q: 'Pourquoi cette différence entre la narration et les paroles ?', a: "La narration suit la concordance des temps classique ; le patron, lui, parle, et on parle avec le subjonctif d'aujourd'hui." },
    { q: 'Inférence : pourquoi le patron caresse-t-il le bois longtemps, sans rien dire ?', a: "Il reconnaît un travail parfait, et sans doute un successeur. Il est ému, mais ce n'est pas un homme de compliments." },
  ],
  audio: REC('rec-b2-09-atelier'),
  say: REFRAME,
  terms: ['concordance', 'signal'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-concordance',
  title: 'Le passé devant, le subjonctif suit',
  frSub: 'La concordance des temps',
  hint: 'Quatre cartes. La troisième, c’est toi aujourd’hui.',
  audio: REC('rec-b2-09-concordance'),
  say: REFRAME,
  terms: ['concordance', 'anteriorite'],
  cards: [
    {
      head: 'Au présent : le présent', label: 'toujours',
      fr: fr(E(1317)), sub: rsOf(E(1317)),
      body: "Un verbe principal au présent appelle le présent du subjonctif, dans les livres comme aujourd'hui. Rien ne change. EN: a present main verb takes the present subjunctive everywhere.",
    },
    {
      head: 'Au passé : l’imparfait du subjonctif', label: 'dans les livres',
      fr: fr(E(1315)), sub: rsOf(E(1315)),
      body: "Dans un texte classique, un verbe principal au passé ou au conditionnel entraîne l'imparfait du subjonctif : je voulais qu'il partît, il faudrait qu'il vînt. EN: in classic texts, a past main verb brings the imperfect subjunctive.",
    },
    {
      head: 'Aujourd’hui : le présent quand même', label: Cap(SUBJPASSE_REF),
      fr: fr(E(1316)), sub: rsOf(E(1316)),
      body: "Le français d'aujourd'hui garde le présent : je voulais qu'il parte. Tu l'as vu avec j'étais content qu'il soit là. Le sens est le même. EN: today's French keeps the present.",
    },
    {
      head: 'Déjà fait : le plus-que-parfait', label: 'eût reçu, ait reçu',
      fr: fr(E(1324)), sub: rsOf(E(1324)),
      body: "Pour une action déjà finie, le livre prend le plus-que-parfait du subjonctif, et nous le subjonctif passé : qu'elle ait reçu. EN: already done: pluperfect subjunctive in books, past subjunctive today.",
    },
  ],
};

const A7_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-trier',
  layer: 'core',
  size: 'lg',
  title: 'Le livre, puis toi',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Le verbe principal au passé', [
      it(E(1315), 'voulais… partît'),
      it(E(1318), 'ordonna… ouvrît'),
      it(E(1322), 'était parti… remarquât'),
      it(E(1320), 'faudrait… vînt'),
    ], chk('Dans la quatrième phrase, quel verbe entraîne l’imparfait du subjonctif ?',
      ['faudrait, un conditionnel', 'vînt, un passé simple'], 0,
      'Dans les livres, un conditionnel aussi entraîne l’imparfait du subjonctif. EN: a conditional too.')),
    grp('La même chose, aujourd’hui', [
      it(E(1316), 'parte'),
      it(E(1319), 'ouvre'),
      it(E(1323), 'remarque'),
      it(EMO(1262), `soit là, depuis ${SUBJPASSE_REF}`),
    ], chk('Quel temps garde le français d’aujourd’hui ?',
      ['le présent du subjonctif', 'l’imparfait du subjonctif'], 0,
      'Le présent, quel que soit le verbe principal. EN: the present.')),
    ctl('Le piège', '« Je voulais qu’il vînt. » Aujourd’hui…',
      ['je voulais qu’il vienne', 'je voulais qu’il soit venu'], 0,
      'Vînt dit la même chose que vienne, pas que soit venu. EN: vienne, not soit venu.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concordance'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Deux époques, un sens',
  frSub: 'Huit phrases, le livre et toi',
  lines: [
    ln(E(1315)), ln(E(1316)), ln(E(1318)), ln(E(1321)),
    ln(E(1324)), ln(E(1325)), ln(E(1328)), ln(E(1317)),
  ],
  questions: [
    { q: 'Première phrase : le départ est-il déjà fait ?', opts: ['non, il est voulu', 'oui, il est parti'], correct: 0, why: 'Voulais que : un souhait, pas un fait. EN: a wish.' },
    { q: 'Deuxième phrase : dit-elle autre chose que la première ?', opts: ['non, la même chose', 'oui, le contraire'], correct: 0, why: 'Même sens, forme d’aujourd’hui. EN: same meaning.' },
    { q: 'Troisième phrase : qui donne l’ordre ?', opts: ['une femme', 'un homme', 'les enfants'], correct: 0, why: 'Elle ordonna. EN: a woman.' },
    { q: 'Cinquième phrase : la lettre était-elle arrivée, au moment du doute ?', opts: ['peut-être, on en doute', 'non, sûrement pas'], correct: 0, why: 'Eût reçu : déjà fait, mais on en doute. EN: maybe; it is doubted.' },
    { q: 'Dernière phrase : quand doit-il partir ?', opts: ['ce soir', 'hier'], correct: 0, why: 'Ce soir. EN: tonight.' },
  ],
  audio: REC('rec-b2-09-concordance-ecoute'),
  say: REFRAME,
  terms: ['concordance'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Le temps d’aujourd’hui',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le sens ne recule pas',
    body: "Qu'il vînt ne dit pas que c'est déjà fait : c'est un présent en habit ancien, donc qu'il vienne, même après un verbe au passé. Seul qu'il fût venu donne qu'il soit venu. EN: vînt maps to vienne; only fût venu maps to soit venu.",
  },
  cards: [
    { promptLabel: 'reculé d’un cran', promptSound: 'Je voulais qu’il soit parti.', fr: fr(E(1316)), ipa: ipaOf(E(1316)), tip: 'Partît : le présent, parte. EN: parte.' },
    { promptLabel: 'l’indicatif', promptSound: 'Elle a ordonné qu’on ouvrait les fenêtres.', fr: fr(E(1319)), ipa: ipaOf(E(1319)), tip: 'Ordonner que garde le subjonctif. EN: keep the subjunctive.' },
    { promptLabel: 'le conditionnel', promptSound: 'Il faudrait qu’il viendrait demain.', fr: fr(E(1321)), ipa: ipaOf(E(1321)), tip: 'Il faudrait que : subjonctif. EN: subjunctive.' },
    { promptLabel: 'l’indicatif après sans que', promptSound: 'Il était parti sans qu’on le remarquait.', fr: fr(E(1323)), ipa: ipaOf(E(1323)), tip: 'Sans que : subjonctif. EN: subjunctive.' },
    { promptLabel: 'l’antériorité perdue', promptSound: 'Nous doutions qu’elle reçoive notre lettre.', fr: fr(E(1325)), ipa: ipaOf(E(1325)), tip: 'Eût reçu : déjà fait, donc ait reçu. EN: already done.' },
    { promptLabel: 'l’indicatif après un sentiment', promptSound: 'J’étais heureuse que tu étais là.', fr: fr(E(1329)), ipa: ipaOf(E(1329)), tip: 'Heureuse que : subjonctif, sois. EN: sois.' },
  ],
  drill: [
    { promptSay: '« qu’il partît », après je voulais : aujourd’hui…', opts: ['qu’il parte', 'qu’il soit parti'], correct: 0 },
    { promptSay: '« qu’elle eût reçu » : aujourd’hui…', opts: ['qu’elle ait reçu', 'qu’elle reçoive'], correct: 0 },
    { promptSay: '« Il faudrait qu’il vînt. » Aujourd’hui : qu’il…', opts: ['vienne', 'viendrait'], correct: 0 },
    { promptSay: '« sans qu’on le remarquât » : aujourd’hui…', opts: ['sans qu’on le remarque', 'sans qu’on le remarquait'], correct: 0 },
    { promptSay: 'Dans les livres, après « je voulais que », on trouve…', opts: ['l’imparfait du subjonctif', 'le passé simple'], correct: 0 },
    { promptSay: 'Aujourd’hui, après « je voulais que », on met…', opts: ['le présent du subjonctif', 'l’imparfait du subjonctif'], correct: 0 },
    { promptSay: '« J’étais heureuse que tu fusses là. » Tu fusses est…', opts: ['rare et vieilli', 'la forme courante'], correct: 0 },
    { promptSay: 'Qu’il vînt et qu’il vienne ont…', opts: ['le même sens', 'des sens opposés'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le sens ne recule pas' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qu’on recule de trop' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six bonnes versions' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-09-piege-concordance'),
  say: REFRAME,
  terms: ['concordance', 'anteriorite'],
};

const A7_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a7-focus',
  layer: 'core',
  sheetId: 'sheet-concordance',
  title: 'La concordance en quatre lignes',
  frSub: 'Ce qu’il faut retenir',
  points: [
    "Verbe principal au présent ou au futur : présent du subjonctif, partout. EN: present main verb, present subjunctive.",
    "Verbe principal au passé ou au conditionnel, dans un livre : imparfait du subjonctif. EN: past main verb in books: imperfect subjunctive.",
    "Action déjà finie, dans un livre : plus-que-parfait du subjonctif. EN: already done: pluperfect subjunctive.",
    "Aujourd'hui, tu dis le présent ou le subjonctif passé, quel que soit le verbe principal. EN: today, present or past subjunctive.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concordance', 'aujourdhui'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Retrouver : le grand-père', TEXTE_A7, [
  { q: 'Relève les subjonctifs littéraires et ce qui les entraîne.', a: "voulait… devinsse, fallait… eût, voulais… laissât, sans que… sût, craignais… apprît. Chaque fois, un verbe au passé, ou sans que." },
  { q: 'Devinsse : quel verbe, quelle personne ?', a: "Devenir, avec je : que je devinsse. Aujourd'hui : que je devienne." },
  { q: 'Pourquoi la dernière phrase dit-elle « Il faut que tu continues » ?', a: "Le grand-père parle : on parle avec le présent du subjonctif. La narration garde la concordance classique." },
  { q: 'Inférence : qu’a compris le grand-père ?', a: "Que son petit-fils a du talent : il renonce au métier sérieux qu'il voulait pour lui." },
], 'rec-b2-09-texte-a7', ['concordance', 'signal']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le livre', 'Verbe principal au passé, dans un roman classique : le subjonctif est…',
    ['à l’imparfait', 'au présent'], 0,
    'La concordance classique. EN: imperfect.'),
  ctl('Aujourd’hui', 'Et dans ta bouche ?',
    ['au présent', 'à l’imparfait'], 0,
    'Le présent, même au passé. EN: present.'),
  ctl('Le piège', '« Je voulais qu’il vînt. » Sa venue était…',
    ['voulue, pas encore faite', 'déjà faite'], 0,
    'Vînt dit un souhait. EN: wanted, not done.'),
], ['concordance']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'La concordance',
    opener: {
      line: "Dans le roman, le patron voulait qu'on parlât peu ; dans sa bouche, il faut que quelqu'un ouvre : ici tu comprends pourquoi les livres reculent le subjonctif. EN: In the novel's narration the subjunctive moves into the past; in speech it stays present: here you learn why.",
      imageRef: 'lessons/subjonctif-litteraire/act07.jpg',
    },
    sections: [],
    milestone: "Tu sais pourquoi un livre écrit qu'il vînt après un verbe au passé, et tu dis qu'il vienne sans hésiter. EN: You know why books shift the subjunctive into the past, and you say today's present.",
    estScreens: 42, restPoints: ['a7-trier', 'a7-piege'],
  },
  sections: [A7_LECTURE, A7_CARTES, A7_TRIER, A7_ECOUTE, A7_PIEGE, A7_FOCUS, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: AUJOURD'HUI, TU DIRAIS
 *
 *  Every map in one place: imparfait du subjonctif → présent; plus-que-
 *  parfait du subjonctif → subjonctif passé; deuxième forme → conditionnel
 *  passé; after si → plus-que-parfait; passé simple → passé composé; the
 *  indicative around it does not move. A mayor's inauguration speech.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le pont de la Garenne',
  frSub: 'Un discours solennel',
  text: LECTURE_DISCOURS,
  glossary: [
    { word: 'riverains', en: 'local residents', note: 'Les gens qui habitent au bord de la rivière ou de la route.' },
  ],
  questions: [
    { q: 'Devine le sens : « chacun y mît du sien ». Qu’ont fait les habitants ?', a: "Chacun a fait un effort, a donné un peu de lui-même. Aujourd'hui : il a fallu que chacun y mette du sien." },
    { q: 'Globale : quel genre de texte, et pourquoi ce style ?', a: "Un discours d'inauguration : la maire choisit un style solennel pour marquer un grand jour." },
    { q: 'Repère deux deuxièmes formes et dis-les aujourd’hui.', a: "il eût été facile (il aurait été facile), qui eût cru (qui aurait cru), il eût mieux valu (il aurait mieux valu)." },
    { q: 'La maire dit aussi « je voudrais que ce pont soit ». Pourquoi pas une forme littéraire ici ?', a: "Elle parle de l'avenir, au présent de son discours : le subjonctif présent suffit. Elle garde les formes littéraires pour le récit du passé." },
    { q: 'Point de vue : « et Dieu sait qu’il y en eut ». Que laisse-t-elle entendre ?', a: "Que les critiques ont été nombreuses, parfois dures : elle le reconnaît avec un sourire, sans s'y attarder." },
  ],
  audio: REC('rec-b2-09-discours'),
  say: REFRAME,
  terms: ['registre', 'aujourdhui'],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-table',
  layer: 'core',
  sheetId: 'sheet-aujourdhui',
  title: 'Toutes les traductions',
  cols: ['Dans le livre', 'Aujourd’hui', 'La règle'],
  rows: [
    { cells: ['qu’il fût', 'qu’il soit', 'imparfait : présent'], say: fr(E(1200)),
      detail: { title: 'L’imparfait du subjonctif', body: "Il devient présent du subjonctif. EN: it becomes the present subjunctive.", say: fr(E(1202)) } },
    { cells: ['qu’il eût fini', 'qu’il ait fini', 'plus-que-parfait : passé'], say: fr(E(1285)),
      detail: { title: 'Le plus-que-parfait du subjonctif', body: "Il devient subjonctif passé. EN: it becomes the past subjunctive.", say: fr(E(1286)) } },
    { cells: ['il eût fallu', 'il aurait fallu', 'deuxième forme : conditionnel passé'], say: fr(E(1295)),
      detail: { title: 'La deuxième forme', body: "Sans que, elle devient conditionnel passé. EN: past conditional.", say: fr(E(1296)) } },
    { cells: ['s’il l’eût su', 's’il l’avait su', 'après si : plus-que-parfait'], say: fr(E(1301)),
      detail: { title: 'Après si', body: "Jamais de subjonctif ni de conditionnel après si : le plus-que-parfait. EN: the pluperfect after si.", say: fr(E(1302)) } },
    { cells: ['il fallut', 'il a fallu', 'passé simple : passé composé'], say: fr(E(1339)),
      detail: { title: 'Le passé simple autour', body: `Il devient passé composé, comme dans ${PS_REF}. EN: passé composé.`, say: fr(E(1340)) } },
    { cells: ['rien n’avançait', 'rien n’avançait', 'l’indicatif reste'], say: fr(E(1341)),
      detail: { title: 'Le reste', body: "L'imparfait et le plus-que-parfait de l'indicatif ne bougent pas. EN: the rest stays.", say: fr(E(1342)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce qui change, ce qui reste',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Quel habit pour aujourd’hui', [
      it(E(1336), 'aurait été'),
      it(E(1338), 'soit construit'),
      it(E(1340), 'a fallu, mette'),
      it(E(1342), 'ait promis'),
    ], chk('Dans la troisième phrase, combien de verbes ont changé ?',
      ['deux : fallut et mît', 'un seul : mît'], 0,
      'Fallut, un passé simple, devient aussi a fallu. EN: two verbs.')),
    grp('Ce qui ne bouge pas', [
      it(E(1342), 'n’avançait reste'),
      it(E(1344), 'arriverions reste'),
      it(E(1323), 'était parti reste'),
      it(E(1286), 'pour se lever reste'),
    ], chk('Dans la deuxième phrase, arriverions…',
      ['reste tel quel', 'devient un subjonctif'], 0,
      'Un conditionnel de l’indicatif : il ne bouge pas. EN: it stays.')),
    ctl('La règle', '« Qui eût cru ? » Aujourd’hui…',
      ['qui aurait cru', 'qui ait cru', 'qui a cru'], 0,
      'La deuxième forme : un conditionnel passé. EN: qui aurait cru.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Toutes les traductions, d’un coup d’œil',
  frSub: 'Une phrase par cas',
  examples: [
    ex(E(1202), 'imparfait du subjonctif : présent'),
    ex(E(1276), 'plus-que-parfait du subjonctif : subjonctif passé'),
    ex(E(1296), 'deuxième forme : conditionnel passé'),
    ex(E(1302), 'après si : plus-que-parfait'),
    ex(E(1392), 'après comme si : plus-que-parfait'),
    ex(E(1237), 'passé simple et subjonctif, ensemble'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre traductions à reprendre',
  errors: [
    {
      wrong: "Il fallait qu'elle soit venue seule.",
      right: fr(E(1205)),
      why: "Normal : vînt est un temps du passé, alors on cherche un subjonctif du passé. Mais qu'elle vînt dit la même chose que qu'elle vienne. EN: the imperfect subjunctive maps to the present.",
    },
    {
      wrong: "Il fallait qu'il sait la vérité.",
      right: fr(E(1257)),
      why: "Normal : sût ressemble à su, puis on pense à sait. Mais c'est un subjonctif : qu'il sache. EN: sût is savoir, subjunctive: sache.",
    },
    {
      wrong: 'Il a fallu que chacun y met du sien.',
      right: fr(E(1340)),
      why: "Normal : mît ressemble à mit, le passé simple de mettre. Mais le que et le chapeau demandent le subjonctif : mette. EN: mette.",
    },
    {
      wrong: "Bien qu'on a promis ce pont cent fois, rien n'avançait.",
      right: fr(E(1342)),
      why: "Normal : eût promis ressemble à un passé tout simple. Mais bien que garde le subjonctif : ait promis. EN: keep the subjunctive after bien que.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'signal'],
};

const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a8-dictee',
  layer: 'core',
  title: 'Écris la version d’aujourd’hui',
  frSub: 'Cinq phrases, sans chapeau',
  itemIds: [...dicteeFor(8), E(1202), E(1276), E(1296)],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Réécrire : l’école sauvée', TEXTE_A8, [
  { q: 'Relève chaque forme littéraire et donne sa traduction.', a: "eût été (aurait été), disparût (disparaisse), fussent inscrits (soient inscrits), missent (mettent), écrivît (écrive), eût cru (aurait cru), eût oublié (aurait oublié)." },
  { q: 'Réécris tout le texte en français d’aujourd’hui.', a: "Il aurait été simple de fermer l'école. Le ministère voulait qu'elle disparaisse, bien que trente enfants y soient inscrits. Il a fallu que les parents se mettent en grève et que le maire écrive au préfet. Qui aurait cru qu'une lettre suffirait ? L'école est restée ouverte, et le maire, qu'on aurait volontiers oublié, a été réélu l'année suivante. À la rentrée, les enfants ont accroché une banderole au-dessus de la porte." },
  { q: 'Qu’est-ce qui n’a pas changé ?', a: "Suffirait, un conditionnel de l'indicatif, et tout le vocabulaire. Seuls les passés simples et les formes littéraires ont bougé." },
  { q: 'Ton : que laisse entendre « qu’on eût volontiers oublié » ?', a: "Que le maire n'était pas très apprécié avant : l'affaire de l'école lui a rendu sa popularité. C'est une petite ironie." },
], 'rec-b2-09-texte-a8', ['aujourdhui', 'ironie']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('L’imparfait', '« qu’il vînt » : aujourd’hui…',
    ['qu’il vienne', 'qu’il soit venu', 'qu’il vint'], 0,
    'Le présent du subjonctif. EN: vienne.'),
  ctl('Le plus-que-parfait', '« qu’on eût promis » : aujourd’hui…',
    ['qu’on ait promis', 'qu’on avait promis'], 0,
    'Le subjonctif passé. EN: ait promis.'),
  ctl('Le reste', 'Que fais-tu de l’imparfait de l’indicatif ?',
    ['je le garde', 'je le mets au subjonctif'], 0,
    'Il ne bouge pas. EN: keep it.'),
], ['aujourdhui']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Aujourd’hui, tu dirais',
    opener: {
      line: "Une maire inaugure un pont avec des phrases d'un autre siècle : ici tu les rends au français d'aujourd'hui, sans perdre un mot de sens. EN: A mayor opens a bridge with sentences from another century: here you hand them back to today's French without losing any meaning.",
      imageRef: 'lessons/subjonctif-litteraire/act08.jpg',
    },
    sections: [],
    milestone: "Tu traduis chaque forme littéraire par la bonne forme d'aujourd'hui, et tu laisses le reste du texte tranquille. EN: You can map every literary form to today's and leave the rest alone.",
    estScreens: 40, restPoints: ['a8-table', 'a8-erreurs'],
  },
  sections: [A8_LECTURE, A8_TABLE, A8_CONSTRUIRE, A8_EXEMPLES, A8_ERREURS, A8_DICTEE, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: LES FORMES VIVANTES
 *
 *  fût-ce, ne fût-ce que, dût-il, quoi qu'il en fût against today's quoi
 *  qu'il en soit; qu'à cela ne tienne is a PRÉSENT. A newsroom in Paris.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'L’éditorial de Bruno',
  frSub: 'Une salle de rédaction à Paris',
  setting: "Paris, une salle de rédaction. Inès relit l'éditorial de son collègue Bruno sur la fermeture d'une petite gare, avant l'impression.",
  bubbles: [
    { from: 'narrator', fr: "Inès lit l'éditorial crayon en main.", en: 'Inès reads the editorial, pencil in hand.' },
    { from: 'user', fr: "Tu as écrit : il faut sauver cette gare, fût-ce au prix d'un impôt.", en: 'You wrote: this station must be saved, even at the cost of a tax.' },
    { from: 'coach', fr: "Oui. Fût-ce, c'est même si c'est. Ça donne du poids à la phrase.", en: 'Yes. Fût-ce means even if it is. It gives the sentence weight.', warn: 'Fût-ce : même' },
    { from: 'user', fr: "Et ici, quoi qu'il en fût. Tu voulais dire quoi qu'il en soit.", en: 'And here, quoi qu’il en fût. You meant quoi qu’il en soit.' },
    { from: 'coach', fr: "Exact. Quoi qu'il en fût, c'est pour un roman. Dans un journal, quoi qu'il en soit.", en: 'Right. Quoi qu’il en fût is for a novel. In a newspaper, quoi qu’il en soit.', warn: "Aujourd'hui : au présent" },
    { from: 'user', fr: "Et si le ministre refuse, je lui réponds : qu'à cela ne tienne.", en: 'And if the minister refuses, I answer: never mind.' },
    { from: 'coach', fr: "Celui-là est un présent. Tu peux même le dire à voix haute.", en: 'That one is a present. You can even say it out loud.', warn: 'Tienne : un présent' },
  ],
  closing: { fr: 'Quelques formes figées vivent encore : tu les lis, tu les comprends.', en: 'A few fixed forms still live: you read them, you understand them.' },
  audio: REC('rec-b2-09-redaction'),
  say: REFRAME,
  terms: ['figee'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-aujourdhui',
  title: 'Quatre formes figées',
  frSub: 'Encore vivantes à l’écrit',
  hint: 'Quatre cartes. Chacune a sa traduction.',
  audio: REC('rec-b2-09-figees'),
  say: REFRAME,
  terms: ['figee'],
  cards: [
    {
      head: 'Ne fût-ce que', label: 'ne serait-ce que',
      fr: fr(E(1350)), sub: rsOf(E(1350)),
      body: "Ne fût-ce qu'une heure : ne serait-ce qu'une heure, même seulement une heure. Encore courant à l'écrit soigné. EN: if only.",
    },
    {
      head: 'Fût-ce', label: 'même',
      fr: fr(E(1352)), sub: rsOf(E(1352)),
      body: "Fût-ce en traduction : même en traduction. Après une négation, fût-ce se lit pas même. EN: even; after a negation, not even.",
    },
    {
      head: 'Quoi qu’il en fût', label: 'quoi qu’il en soit',
      fr: fr(E(1354)), sub: rsOf(E(1354)),
      body: "La forme au passé des livres. Aujourd'hui, on dit toujours quoi qu'il en soit, même en racontant le passé. EN: today always quoi qu'il en soit.",
    },
    {
      head: 'Dût-il', label: 'même s’il devait',
      fr: fr(E(1358)), sub: rsOf(E(1358)),
      body: "Devoir, avec un chapeau et l'inversion : dût-il me prendre dix ans, même si ça devait me prendre dix ans. EN: even if it had to.",
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le sens, puis la vie',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Ce que ça veut dire', [
      it(E(1351), 'ne serait-ce que'),
      it(E(1353), 'même'),
      it(E(1355), 'quoi qu’il en soit'),
      it(E(1359), 'même si ça devait'),
    ], chk('Dans la troisième phrase, quoi qu’il en soit veut dire…',
      ['de toute façon', 'à cause de cela', 'pour cette raison'], 0,
      'Quoi qu’il en soit : de toute façon. EN: anyway.')),
    grp('Vivant ou littéraire', [
      it(E(1356), 'vivant'),
      it(E(1357), 'vivant, un présent'),
      it(E(1361), 'vivant'),
      it(E(1362), 'littéraire'),
    ], chk('Laquelle de ces formes est un présent du subjonctif ?',
      ['qu’à cela ne tienne', 'fût-ce', 'dût-il'], 0,
      'Tienne, de tenir, au présent. EN: tienne is present.')),
    ctl('Le sens', '« Il ne voulait rien changer, fût-ce une virgule. » Il a changé…',
      ['rien, pas même une virgule', 'seulement une virgule'], 0,
      'Après une négation, fût-ce se lit pas même. EN: not even a comma.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figee'],
};

const A9_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a9-flash',
  layer: 'core',
  title: 'Huit formes à reconnaître',
  frSub: 'Tu lis la forme, tu dis le sens',
  cards: [
    { front: 'ne fût-ce que', back: 'ne serait-ce que', say: fr(E(1351)) },
    { front: 'fût-ce', back: 'même', say: fr(E(1353)) },
    { front: 'quoi qu’il en fût', back: 'quoi qu’il en soit', say: fr(E(1355)) },
    { front: 'dût-il', back: 'même s’il devait', say: fr(E(1359)) },
    { front: 'qu’à cela ne tienne', back: 'pas de problème (un présent)', say: fr(E(1357)) },
    { front: 'il eût fallu', back: 'il aurait fallu', say: fr(E(1296)) },
    { front: 'on eût dit', back: 'on aurait dit', say: fr(E(1300)) },
    { front: 'qui eût cru', back: 'qui aurait cru', say: fr(E(1344)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['figee', 'deuxieme'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Dans un éditorial',
  frSub: 'Huit phrases, lues comme à la radio',
  lines: [
    ln(E(1350)), ln(E(1352)), ln(E(1354)), ln(E(1356)),
    ln(E(1357)), ln(E(1358)), ln(E(1361)), ln(E(1362)),
  ],
  questions: [
    { q: 'Première phrase : combien de temps, au minimum ?', opts: ['une heure', 'une journée'], correct: 0, why: 'Ne fût-ce qu’une heure : au moins une heure. EN: at least an hour.' },
    { q: 'Deuxième phrase : faut-il le lire en français ?', opts: ['pas forcément, même traduit', 'oui, seulement en français'], correct: 0, why: 'Fût-ce en traduction : même traduit. EN: even in translation.' },
    { q: 'Troisième phrase : a-t-elle cédé ?', opts: ['non', 'oui'], correct: 0, why: 'Elle ne céda pas. EN: no.' },
    { q: 'Cinquième phrase : que propose la personne ?', opts: ['de conduire l’autre', 'de lui prêter de l’argent', 'de rester à la maison'], correct: 0, why: 'Je t’emmène. EN: to drive the other.' },
    { q: 'Sixième phrase : combien de temps pourrait prendre le livre ?', opts: ['dix ans', 'dix jours'], correct: 0, why: 'Dût-il me prendre dix ans. EN: ten years.' },
  ],
  audio: REC('rec-b2-09-figees-ecoute'),
  say: REFRAME,
  terms: ['figee'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Comprendre : le départ de Julien', TEXTE_A9, [
  { q: 'Relève les formes figées et dis-les aujourd’hui.', a: "fût-ce à pied (même à pied), ne fût-ce qu'une nuit (ne serait-ce qu'une nuit), quoi qu'il en fût (quoi qu'il en soit), dût-il s'arrêter (même s'il devait s'arrêter)." },
  { q: 'Et « qu’à cela ne tienne » ?', a: "Un présent du subjonctif, dit par la sœur : pas de problème, prends ma voiture." },
  { q: 'Pourquoi la sœur le supplie-t-elle de rester ?', a: "Elle a peur qu'il parte fatigué, de nuit : elle voudrait le garder au moins une nuit." },
  { q: 'Inférence : que montre la fin sur Julien ?', a: "Sa détermination : rien ne l'empêchera d'être à Lyon, pas même la fatigue." },
], 'rec-b2-09-texte-a9', ['figee']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le sens', '« ne fût-ce que » veut dire…',
    ['ne serait-ce que', 'parce que', 'bien que'], 0,
    'Même seulement. EN: if only.'),
  ctl('Aujourd’hui', 'En racontant le passé aujourd’hui, tu dis…',
    ['quoi qu’il en soit', 'quoi qu’il en fût'], 0,
    'Toujours au présent. EN: quoi qu’il en soit.'),
  ctl('Le piège', '« Qu’à cela ne tienne » est…',
    ['un présent du subjonctif', 'un imparfait du subjonctif'], 0,
    'Tienne, de tenir, au présent. EN: a present.'),
], ['figee']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Les formes vivantes',
    opener: {
      line: "Un éditorialiste écrit fût-ce et ne fût-ce que : ici tu découvres les formes littéraires qui vivent encore dans la presse. EN: A columnist writes fût-ce and ne fût-ce que: here you meet the literary forms still alive in the press.",
      imageRef: 'lessons/subjonctif-litteraire/act09.jpg',
    },
    sections: [],
    milestone: "Tu comprends fût-ce, ne fût-ce que, dût-il et quoi qu'il en fût, et tu sais que qu'à cela ne tienne est un présent. EN: You understand the fixed forms that survive, and know qu'à cela ne tienne is a present.",
    estScreens: 36, restPoints: ['a9-cartes', 'a9-flash'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_CONSTRUIRE, A9_FLASH, A9_ECOUTE, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: COMPRENDRE L'EXTRAIT
 *
 *  A contemporary pastiche page read the B2 way: global, detail, inference,
 *  stance (lessons 37 in B1 and 24 in B2). The literary subjunctive is the
 *  surface; the question is what the solemn style does to a small baron.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le baron de Morville',
  frSub: 'Un extrait, lu comme à l’examen',
  text: LECTURE_BARON,
  glossary: [
    { word: 'écarlate', en: 'scarlet', note: 'Rouge vif, comme quelqu’un de très gêné.' },
  ],
  questions: [
    { q: 'Devine le sens : « bien que sa baronnie tînt tout entière dans un jardin ». Que veut dire le narrateur ?', a: "Que son domaine de baron se réduit à un tout petit jardin : tînt, c'est tenir, et tenir dans veut dire avoir la place dans. Le titre est bien plus grand que la réalité." },
    { q: 'Globale : que raconte cet extrait ?', a: "Un faux grand seigneur de village qui exige des honneurs, jusqu'au jour où une enfant le fait changer." },
    { q: 'Détail : qui accepte de le saluer, et pourquoi ?', a: "Le curé seul, dans l'espoir que le baron lègue son jardin à la paroisse." },
    { q: 'Inférence : que s’est-il passé « en lui cette nuit-là » ?', a: "La question de l'enfant et le rire de la mère lui ont montré qu'il était ridicule : il a décidé de redevenir simple." },
    { q: 'Point de vue et ton : comment le narrateur regarde-t-il le baron ?', a: "Avec une ironie tendre : le style solennel, plein de subjonctifs littéraires, souligne le ridicule, mais la fin le rend sympathique." },
  ],
  audio: REC('rec-b2-09-baron'),
  say: REFRAME,
  terms: ['ironie'],
};

const A10_TYPES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-types',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-lecture',
  title: 'Lire une page à l’ancienne',
  frSub: 'Quatre questions à te poser',
  hint: 'Quatre cartes. Chacune se cherche ailleurs dans le texte.',
  audio: REC('rec-b2-09-lire'),
  say: REFRAME,
  terms: ['ironie', 'registre'],
  cards: [
    {
      head: 'D’abord le sens', label: Cap(LECTURE_B1_REF),
      fr: fr(E(1380)), sub: rsOf(E(1380)),
      body: `« ${B137_REFRAME} » Devant un chapeau inconnu, ne t'arrête pas : lis la phrase jusqu'au bout. EN: ${B137_REFRAME_EN}`,
    },
    {
      head: 'Le style solennel', label: 'le décalage',
      fr: fr(E(1372)), sub: rsOf(E(1372)),
      body: "Des subjonctifs littéraires pour un jardin de trois cents mètres carrés : le style est trop grand pour la situation, et c'est voulu. EN: a style too grand for the situation.",
    },
    {
      head: 'L’inférence', label: Cap(CRITIQUE_REF),
      fr: fr(E(1371)), sub: rsOf(E(1371)),
      body: `« ${B224_REFRAME} » Un roman laisse entendre plus qu'il ne dit : cherche ce que montrent les gestes. EN: ${B224_REFRAME_EN}`,
    },
    {
      head: 'Le ton', label: 'l’ironie',
      fr: fr(E(1370)), sub: rsOf(E(1370)),
      body: "Le narrateur se moque, mais doucement : le baron finit par nous être sympathique. L'ironie n'est pas toujours méchante. EN: irony can be gentle.",
    },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce que le style fait au baron',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Le style et la situation', [
      it(E(1374), 'appelât : qu’on l’appelle'),
      it(E(1376), 'un roi en exil'),
      it(E(1378), 'eût voulu, saluât'),
      it(E(1372), 'solennel, mais comique'),
    ], chk('Pourquoi tant de subjonctifs littéraires pour ce baron ?',
      ['pour rendre sa grandeur ridicule', 'parce que l’histoire date du XIXe siècle'], 0,
      'Le roman est contemporain : le style est un clin d’œil. EN: the style is a wink.')),
    grp('Ce que le texte laisse entendre', [
      it(E(1371), 'le baron est ridicule'),
      it(E(1373), 'le décalage'),
      it(E(1370), 'une moquerie douce'),
      it(SC, 'un ton sérieux, en comparaison'),
    ], chk('« On eût dit un roi en exil. » Le narrateur pense que le baron…',
      ['se prend pour plus qu’il n’est', 'est vraiment un roi'], 0,
      'Un roi, dans un jardin : l’exagération fait sourire. EN: he thinks too much of himself.')),
    ctl('Le temps du narrateur', '« Depuis ce jour, on l’appelle simplement monsieur Morville. » Pourquoi un présent à la fin ?',
      ['le narrateur parle d’aujourd’hui', 'c’est une erreur'], 0,
      'Le récit est fini ; le narrateur regarde le présent. EN: the narrator speaks of today.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ironie'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Une lecture à la radio',
  frSub: 'Huit phrases sur le baron',
  lines: [
    ln(E(1374)), ln(E(1376)), ln(E(1378)), ln(E(1370)),
    ln(E(1371)), ln(E(1373)), ln(E(1380)), ln(E(1372)),
  ],
  questions: [
    { q: 'Première phrase : comment voulait-il qu’on l’appelle ?', opts: ['monsieur le baron', 'monsieur Morville'], correct: 0, why: 'Il exigeait monsieur le baron. EN: Monsieur le baron.' },
    { q: 'Deuxième phrase : de quoi avait-il l’air ?', opts: ['d’un roi en exil', 'd’un curé', 'd’un enfant'], correct: 0, why: 'On eût dit un roi en exil. EN: a king in exile.' },
    { q: 'Troisième phrase : le village le saluait-il ?', opts: ['non, il l’aurait voulu', 'oui, tous les jours'], correct: 0, why: 'Eût voulu : il aurait voulu, mais ce n’était pas le cas. EN: no.' },
    { q: 'Cinquième phrase : que pense le texte du baron ?', opts: ['qu’il est ridicule', 'qu’il est dangereux', 'qu’il est généreux'], correct: 0, why: 'Le texte le laisse entendre. EN: ridiculous.' },
    { q: 'Septième phrase : quel style imite l’auteur ?', opts: ['celui du XIXe siècle', 'celui de la presse d’aujourd’hui'], correct: 0, why: 'Un roman du dix-neuvième siècle. EN: nineteenth-century.' },
  ],
  audio: REC('rec-b2-09-baron-ecoute'),
  say: REFRAME,
  terms: ['ironie'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-lecture',
  title: 'Devant un extrait classique, à l’examen',
  frSub: 'Quatre gestes, dans l’ordre',
  points: [
    "Lis tout une fois pour le sens : qui, où, que se passe-t-il. Ne t'arrête pas sur un chapeau. EN: read once for meaning.",
    "Traduis dans ta tête les formes littéraires : fût, soit ; eût voulu, aurait voulu. EN: map the forms silently.",
    "Cherche le décalage entre le style et la situation : c'est souvent là qu'est l'ironie. EN: look for the gap between style and situation.",
    "Réponds avec une citation courte, puis tes mots d'aujourd'hui. EN: quote briefly, then explain in today's words.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ironie', 'aujourdhui'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Comprendre : le salon de Madame Pélissier', TEXTE_A10, [
  { q: 'Relève les formes littéraires et donne leur infinitif.', a: "admirassent (admirer), eût (avoir), s'extasiât (s'extasier), complimentât (complimenter), eût dit (dire, une deuxième forme)." },
  { q: 'Le ton est-il sérieux ou ironique ? Cite deux expressions.', a: "Ironique : « bien qu'il n'y eût rien à y admirer », « avec un sérieux admirable », « On eût dit une visite de musée »." },
  { q: 'Dis en français d’aujourd’hui : « Elle exigeait qu’on s’extasiât devant chaque bibelot. »', a: "Elle exigeait qu'on s'extasie devant chaque bibelot." },
  { q: 'Inférence : pourquoi le neveu n’est-il plus invité ?', a: "Il a dit tout haut la vérité que les adultes cachaient : Madame Pélissier ne le lui pardonne pas." },
], 'rec-b2-09-texte-a10', ['ironie', 'aujourdhui']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('L’ironie', 'Un style solennel pour une situation ridicule crée…',
    ['de l’ironie', 'de la tristesse'], 0,
    'Le décalage fait sourire. EN: irony.'),
  ctl('L’inférence', 'Une question d’inférence porte sur…',
    ['ce que le texte laisse entendre', 'un mot écrit tel quel'], 0,
    'Le non-dit. EN: the implied.'),
  ctl('La méthode', 'Devant un chapeau inconnu à l’examen, tu…',
    ['lis jusqu’au bout, puis tu traduis', 't’arrêtes pour conjuguer le verbe'], 0,
    'Le sens d’abord. EN: meaning first.'),
], ['ironie']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Comprendre l’extrait',
    opener: {
      line: "Un baron de village exigeait qu'on l'appelât monsieur le baron : ici tu lis une page au style classique comme à l'examen, ironie comprise. EN: A village baron insisted on his title: here you read a classic-style page as in an exam, irony included.",
      imageRef: 'lessons/subjonctif-litteraire/act10.jpg',
    },
    sections: [],
    milestone: "Tu comprends une page au style classique : le sens, les détails, ce qu'elle laisse entendre et son ironie. EN: You can understand a classic-style page, irony included.",
    estScreens: 38, restPoints: ['a10-types', 'a10-ecoute'],
  },
  sections: [A10_LECTURE, A10_TYPES, A10_CONSTRUIRE, A10_ECOUTE, A10_FOCUS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: RACONTE-LE À UN AMI
 *
 *  Model (Léa retells the act 1 novel opening), plan, role play, the TASK
 *  (retell a literary extract in today's French), speak practice on modern
 *  rows, cheat sheet, progress, quiz, review, roundup.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Léa',
  frSub: 'Un roman classique, raconté à un ami',
  text: LECTURE_MODELE,
  questions: [
    { q: 'Quel subjonctif Léa emploie-t-elle ?', a: "Celui d'aujourd'hui : que sa maison soit vendue, que l'argent aille, que sa femme vienne, il aurait fallu que la lettre arrive. Aucune forme littéraire." },
    { q: 'Quel temps choisit-elle pour raconter ?', a: "Le présent de narration : elle va voir, il la reçoit. C'est naturel dans un message." },
    { q: 'Comment dit-elle « comme s’il eût cherché ses mots » ?', a: "Comme s'il cherchait ses mots : après comme si, l'indicatif." },
    { q: 'Léa suit-elle l’ordre du roman ?', a: "Oui, de l'arrivée chez le notaire à la place qui retient son souffle. Elle ajoute son avis et une question." },
  ],
  audio: REC('rec-b2-09-modele'),
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-aujourdhui',
  title: 'Cinq étapes avant de raconter',
  frSub: 'Du livre au message',
  steps: [
    'Lis l’extrait une fois pour le sens : qui, où, que se passe-t-il. EN: read once for meaning.',
    'Souligne les formes à chapeau et les -ssent, et note l’infinitif de chacune. EN: underline each literary form and note its infinitive.',
    'Traduis : présent, subjonctif passé, conditionnel passé, ou plus-que-parfait après si. EN: map each form.',
    'Mets les passés simples au passé composé ; laisse l’imparfait et le plus-que-parfait. EN: passé simple to passé composé; keep the rest.',
    'Écris pour ton ami : une salutation, ton avis, une question pour finir. EN: write for your friend.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'radical'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  sheetId: 'sheet-aujourdhui',
  title: 'Quatre moments où tu traduis un classique',
  cases: [
    { situation: 'Tu racontes un roman à un ami', fr: fr(E(1388)), en: en(E(1388)) },
    { situation: 'Tu résumes un texte pour un examen', fr: fr(E(1390)), en: en(E(1390)) },
    { situation: 'Tu expliques une citation en classe', fr: fr(E(1392)), en: en(E(1392)) },
    { situation: 'Tu donnes ton avis au club de lecture', fr: fr(E(1393)), en: en(E(1393)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Explique le roman à Karim',
  frSub: 'Six tours, à voix haute',
  setting: 'Ton ami Karim prépare un exposé sur un roman classique et t’appelle : il bute sur les phrases à chapeau. Tu les lui expliques en français d’aujourd’hui, sans jamais les employer.',
  turns: [
    {
      ai: 'Salut ! Dans mon roman, il y a « il fallait qu’elle partît ». Ça veut dire quoi ?', en: 'Hi! In my novel there is « il fallait qu’elle partît ». What does it mean?',
      user: 'Ça veut dire qu’il fallait qu’elle parte, tout simplement.',
      userEn: 'It means she had to leave, that is all. (The imperfect subjunctive, told in the present subjunctive.)',
      alts: [
        { fr: 'Il fallait qu’elle s’en aille, c’est tout.', en: 'She had to go away, that is all.' },
        { fr: 'Elle devait partir.', en: 'She had to leave. (Devoir instead of il faut que: also right.)' },
      ],
    },
    {
      ai: 'Et « bien qu’il eût tout perdu » ?', en: 'And « bien qu’il eût tout perdu »?',
      user: 'Bien qu’il ait tout perdu : il avait déjà tout perdu à ce moment-là.',
      userEn: 'Although he had lost everything: he had already lost it all by then. (Pluperfect subjunctive: the past subjunctive today.)',
      alts: [
        { fr: 'Même s’il avait tout perdu.', en: 'Even though he had lost everything. (Même si with the indicative: the same idea.)' },
        { fr: 'Il avait tout perdu, et pourtant il continuait.', en: 'He had lost everything, and yet he carried on.' },
      ],
    },
    {
      ai: 'Là, j’ai « il eût fallu partir ». C’est un subjonctif ?', en: 'Here I have « il eût fallu partir ». Is that a subjunctive?',
      user: 'Non, il n’y a pas de que : c’est « il aurait fallu partir ».',
      userEn: 'No, there is no que: it is il aurait fallu partir. (The second form: a past conditional.)',
      alts: [
        { fr: 'C’est un conditionnel : il aurait fallu partir.', en: 'It is a conditional: they should have left.' },
        { fr: 'Ça veut dire qu’ils auraient dû partir.', en: 'It means they should have left. (Devoir: also right.)' },
      ],
    },
    {
      ai: 'Et « s’il l’eût su, il fût venu » ?', en: 'And « s’il l’eût su, il fût venu »?',
      user: 'S’il l’avait su, il serait venu. Après si, jamais de conditionnel.',
      userEn: 'If he had known, he would have come. (After si, the pluperfect.)',
      alts: [
        { fr: 'S’il avait été au courant, il serait venu.', en: 'If he had been aware, he would have come.' },
        { fr: 'Il ne savait pas, sinon il serait venu.', en: 'He did not know, otherwise he would have come.' },
      ],
    },
    {
      ai: 'Mon prof écrit « ne fût-ce qu’un instant » dans ses commentaires. Il est vieux jeu ?', en: 'My teacher writes « ne fût-ce qu’un instant » in his comments. Is he old-fashioned?',
      user: 'Non, c’est encore courant à l’écrit : ça veut dire « ne serait-ce qu’un instant ».',
      userEn: 'No, it is still common in writing: it means if only for a moment. (A fixed form still alive.)',
      alts: [
        { fr: 'C’est soigné, pas vieilli : ça veut dire même un instant.', en: 'It is formal, not old-fashioned: it means even a moment.' },
        { fr: 'Ça veut dire au moins un instant.', en: 'It means at least a moment.' },
      ],
    },
    {
      ai: 'Bon, et moi, je peux écrire comme ça dans mon exposé ?', en: 'Right, and can I write like that in my presentation?',
      user: 'Tu peux citer le roman, mais pour l’expliquer, écris au présent du subjonctif.',
      userEn: 'You can quote the novel, but to explain it, write in the present subjunctive. (Recognise, never produce.)',
      alts: [
        { fr: 'Cite les phrases telles quelles, et explique-les en français d’aujourd’hui.', en: 'Quote the sentences as they are, and explain them in today’s French.' },
        { fr: 'Garde ces formes pour les citations.', en: 'Keep those forms for quotations.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'figee'],
};

const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Raconte cette page à un ami',
  frSub: 'Mission écrite, format B2',
  brief: `Tu viens de lire cette page d'un roman au style classique, et elle t'a touché. Ton ami Hugo, qui n'aime pas les « vieux livres », te demande de quoi il s'agit. Écris-lui un message où tu racontes la page, dans l'ordre, en français d'aujourd'hui. Voici l'extrait : « ${EXTRAIT_TACHE} »`,
  briefEn: 'You have just read this page of a classic-style novel and it moved you. Your friend Hugo, who does not like old books, asks what it is about. Write him a message retelling the page, in order, in today’s French. The extract is printed in the brief.',
  produce: "Écris un message de 150 à 220 mots qui raconte l'extrait en français d'aujourd'hui, dans l'ordre des faits, sans aucune forme littéraire ni passé simple, avec une phrase qui donne ton avis et une question à Hugo.",
  responseSpec: { kind: 'text', minWords: 150, maxWords: 240 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : Tu racontes toute la page, du départ de Clémence jusqu'à la gare, sans rien inventer d'important, avec ton avis et une question à Hugo. Entre 150 et 220 mots.",
          "2 : L'histoire est là, mais il manque un moment clé (le père, la mère et le frère, le coin de la rue), ou ton avis, ou la longueur sort un peu des limites.",
          "1 : Un résumé de deux ou trois phrases, ou un texte qui recopie l'extrait.",
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence : faits et souhaits',
        maxPoints: 3,
        descriptors: [
          "3 : Les faits arrivent dans l'ordre du livre, et les souhaits restent des souhaits : Hugo comprend ce que chacun aurait voulu, et que personne ne l'appelait. Les connecteurs (mais, pourtant, alors, puis) relient les étapes.",
          "2 : L'ordre est presque toujours respecté, mais un souhait devient un fait (sa mère a attendu le printemps), ou un connecteur manque.",
          "1 : On ne sait plus ce qui s'est passé et ce qui était seulement souhaité.",
        ],
      },
      {
        key: 'correction',
        label: 'Correction de la traduction',
        maxPoints: 4,
        descriptors: [
          "4 : Chaque forme littéraire a sa bonne traduction : il aurait fallu qu'on la retienne, qu'elle parte, bien qu'il soit tard et qu'il pleuve, qu'elle attende, qu'elle lui ait dit adieu, qu'elle voie, comme si elle avait entendu, on aurait dit. Les passés simples sont au passé composé. Aucune forme littéraire.",
          "3 : Une ou deux erreurs de forme (qu'elle voit pour qu'elle voie), mais chaque mode a le bon rôle.",
          "2 : Plusieurs erreurs : un indicatif après bien que ou il fallait que, un subjonctif du passé à la place du présent (qu'elle soit partie pour qu'elle parte), ou un conditionnel après si.",
          "1 : Des formes littéraires ou des passés simples restent dans le texte.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre',
        maxPoints: 2,
        descriptors: [
          "2 : Un message à un ami : tu, une salutation, des phrases naturelles, ni langage de SMS ni phrases de livre.",
          "1 : Le texte sonne comme une copie du livre, ou comme une liste de SMS sans phrases.",
        ],
      },
    ],
  },
  scaffold: [
    'Salut Hugo,',
    'Je viens de lire',
    'Le soir où',
    'Il aurait fallu que',
    'Bien qu’il soit tard,',
    'Sa mère aurait voulu que',
    'On aurait dit que',
    'Et toi,',
  ],
  modelAnswer: "Salut Hugo, je viens de lire une page d'un roman au style très ancien, et je te la raconte en français d'aujourd'hui. Le soir où Clémence a quitté la maison, il aurait fallu que quelqu'un la retienne. Son père, qui avait peur qu'elle parte sans un mot, avait laissé la porte entrouverte. Bien qu'il soit tard et qu'il pleuve depuis le matin, elle a pris son manteau et elle est descendue. Sa mère aurait voulu qu'elle attende le printemps, et son frère, qu'elle lui ait au moins dit adieu. Mais Clémence ne s'est pas retournée : il fallait qu'elle voie Paris avant que sa jeunesse soit passée. Au coin de la rue, elle s'est quand même arrêtée, comme si elle avait entendu son nom. Personne ne l'appelait. Elle a souri, bien qu'elle ait les larmes aux yeux, et elle a marché vers la gare. On aurait dit qu'elle avait toujours su ce qu'elle ferait ce soir-là. Ce qui m'a touché, c'est qu'on ne sait pas si elle a raison de partir. Et toi, tu serais parti à sa place ? Bises, Léa\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : toute la page, dans l'ordre, un avis (ce qui m'a touché), une question à Hugo.\n2. Cohérence : les souhaits restent des souhaits (aurait voulu qu'elle attende) ; mais, quand même, puis relient les étapes.\n3. Correction : il eût fallu, il aurait fallu ; retînt, retienne ; craignait qu'elle ne partît, avait peur qu'elle parte ; fût et plût, soit et pleuve ; attendît, attende ; eût dit adieu, ait dit adieu ; vît, voie ; eût entendu après comme si, avait entendu ; on eût dit, on aurait dit ; les passés simples au passé composé.\n4. Registre : un message à un ami, avec tu et une salutation, naturel, sans forme littéraire.",
  modelAnswerEn: "Hi Hugo, I have just read a page of a novel written in a very old style, and here it is in today's French. The evening Clémence left home, someone should have held her back. Her father, afraid she would leave without a word, had left the door ajar. Although it was late and it had been raining since morning, she took her coat and went downstairs. Her mother would have liked her to wait for spring, and her brother would have liked her at least to say goodbye. But Clémence did not look back: she had to see Paris before her youth was over. At the street corner she stopped all the same, as if she had heard her name. Nobody was calling her. She smiled, although her eyes were full of tears, and walked to the station. It looked as though she had always known what she would do that evening. What moved me is that we never learn whether she is right to leave. And you, would you have left in her place? Love, Léa. The marker's notes (not counted): 1. Task: the whole page, in order, an opinion and a question. 2. Coherence: wishes stay wishes. 3. Accuracy: every literary form given today's form, the passé simple in the passé composé. 4. Register: a natural message to a friend.",
  watchFor: [
    { pattern: 'A literary form copied into the retelling (qu’elle vît, il eût fallu, qu’il plût).', criterion: 'correction', feedback: 'Tu racontes à un ami : chaque forme à chapeau devient une forme d’aujourd’hui. Qu’elle vît : qu’elle voie.', ref: 'a8-table' },
    { pattern: 'The imperfect subjunctive mapped to a past subjunctive: il fallait qu’elle ait vu Paris, son père avait peur qu’elle soit partie.', criterion: 'correction', feedback: 'Qu’elle vît dit la même chose que qu’elle voie : le présent, même au passé.', ref: 'a7-piege' },
    { pattern: 'The indicative after a trigger: bien qu’il était tard, il fallait qu’elle voit Paris, sa mère aurait voulu qu’elle attend.', criterion: 'correction', feedback: 'Bien que, il fallait que, vouloir que gardent le subjonctif : qu’il soit, qu’elle voie, qu’elle attende.', ref: 'a8-erreurs' },
    { pattern: 'The second form read as a subjunctive: il ait fallu qu’on la retienne, on ait dit.', criterion: 'correction', feedback: 'Sans que, eût fallu se lit aurait fallu ; on eût dit, on aurait dit.', ref: 'a6-erreurs' },
    { pattern: 'A conditional or a subjunctive after comme si: comme si elle aurait entendu, comme si elle ait entendu.', criterion: 'correction', feedback: 'Après comme si, le plus-que-parfait : comme si elle avait entendu.', ref: 'a6-construire' },
    { pattern: 'A wish told as a fact: sa mère a attendu le printemps, son frère lui a dit adieu.', criterion: 'coherence', feedback: 'La mère aurait voulu, le frère aussi : ce sont des souhaits, pas des faits.', ref: 'a1-scene' },
    { pattern: 'Qu’elle vît Paris read as a fact (elle a vu Paris), or fût read as the passé simple fut.', criterion: 'coherence', feedback: 'Il fallait qu’elle voie Paris : elle ne l’a pas encore vu. Le chapeau et le que le disent.', ref: 'a3-piege' },
    { pattern: 'The ne after craindre que read as a negation: son père avait peur qu’elle ne parte pas.', criterion: 'coherence', feedback: 'Ce ne n’est pas une négation : il avait peur qu’elle parte.', ref: 'a4-hacks' },
    { pattern: 'A passé simple left in the retelling (elle prit, elle descendit, elle sourit), or the book form plus an auxiliary (elle a prit).', criterion: 'correction', feedback: `Les passés simples deviennent des passés composés, comme dans ${PS_REF} : elle a pris, elle est descendue.`, ref: 'a8-table' },
    { pattern: 'The verb behind a form lost: plût read as plaire (qu’il plaise), retînt read as another verb.', criterion: 'correction', feedback: 'Remonte à l’infinitif : plût, avec depuis le matin, c’est pleuvoir ; retînt, c’est retenir.', ref: 'a4-table' },
    { pattern: 'Events skipped or invented, or the order changed.', criterion: 'tache', feedback: 'Suis l’extrait pas à pas : la maison, l’escalier, le coin de la rue, la gare.', ref: 'a11-plan' },
    { pattern: 'No opinion, no question to Hugo, no greeting; or a body outside 150 to 220 words.', criterion: 'registre', feedback: 'C’est un message à un ami : salue-le, donne ton avis, pose-lui une question.', ref: 'a11-usages' },
  ],
  graderNotes: [
    'Count the words of the message body only: the greeting line and the sign-off do not count. 150 to 220 with 10% tolerance (135 to 242) before criterion « tache » loses a point. responseSpec allows 240.',
    'THIS IS A RECOGNITION LESSON: the learner is never asked to produce the imperfect or pluperfect subjunctive or the second form of the past conditional. A literary form left in the retelling is an error under « correction » (the task is to translate it). Never suggest a literary form in feedback.',
    'Accept the passé composé or the present of narration for the events, as long as the choice is consistent and every mood is right. Do not penalise either choice.',
    'Accept the ne explétif or its absence after avoir peur que, craindre que and avant que (qu’elle ne parte, qu’elle parte). A real negation there is an error under « coherence ».',
    'Accept paraphrase of the literary wording (dire adieu or dire au revoir; bien qu’elle ait les larmes aux yeux or même si elle avait les larmes aux yeux; retenir or empêcher de partir) provided the meaning holds.',
    'Accept « il aurait fallu qu’on la retienne » or « quelqu’un aurait dû la retenir »: both keep the meaning.',
    'The taught map for an imperfect subjunctive is the present subjunctive (bien qu’il soit tard). Also accept the subjonctif passé for a state that is simply over (bien qu’il ait été tard). Penalise a subjonctif passé under « correction » only when it turns a pending or ongoing action into a finished one (qu’elle soit partie for qu’elle partît, qu’elle ait vu Paris for qu’elle vît, qu’il ait plu depuis le matin for qu’il plût depuis le matin).',
    'Writer gender is unknown: judge agreements referring to the writer for internal consistency only.',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 8 du B2 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'deuxieme'],
};

/** Say the modern versions out loud. Every id carries `voiceflash`, so no row
 *  holding a literary form can reach it (corpus §A.3). */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis-le aujourd’hui, à voix haute',
  frSub: 'Le livre, dit en français d’aujourd’hui',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-aujourdhui',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'où', v: 'romans classiques, histoire, presse, humour ; jamais à l’oral', say: fr(E(1216)),
      detail: { title: 'Où il vit', body: "Dans l'écrit soigné, surtout à la troisième personne. EN: careful writing only.", say: fr(E(1227)) } },
    { k: 'le chapeau', v: 'fut, un fait ; fût, un subjonctif', say: fr(E(1247)),
      detail: { title: 'Le chapeau', body: "L'œil voit l'accent ; l'oreille écoute le déclencheur. EN: the eye sees the circumflex, the ear hears the trigger.", say: fr(E(1245)) } },
    { k: 'la forme', v: 'le passé simple + chapeau ; -ssent au pluriel', say: fr(E(1251)),
      detail: { title: 'La forme', body: "Chanta, qu'elle chantât ; ils partirent, qu'ils partissent. EN: built on the passé simple.", say: fr(E(1261)) } },
    { k: 'déjà fait', v: 'eût, fût + participe : ait fini, soit venue', say: fr(E(1276)),
      detail: { title: 'Le plus-que-parfait', body: "Aujourd'hui, le subjonctif passé. EN: today, the past subjunctive.", say: fr(E(1280)) } },
    { k: 'la 2e forme', v: 'il eût fallu : il aurait fallu', say: fr(E(1296)),
      detail: { title: 'La deuxième forme', body: "Sans que, un conditionnel passé ; après si, le plus-que-parfait. EN: past conditional; pluperfect after si.", say: fr(E(1302)) } },
    { k: 'aujourd’hui', v: 'présent, subjonctif passé, conditionnel passé', say: fr(E(1316)),
      detail: { title: 'Aujourd’hui', body: "Le sens reste, seule la forme change ; le reste du texte ne bouge pas. EN: meaning stays, form changes.", say: fr(E(1342)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'chapeau', 'deuxieme'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu sais où vit le subjonctif littéraire et où il n'entre jamais. Tu distingues fut de fût, tu retrouves le verbe sous chaque chapeau, tu reconnais le plus-que-parfait du subjonctif et la deuxième forme du conditionnel passé, tu comprends pourquoi un livre recule le subjonctif, et tu dis chaque fois la forme d'aujourd'hui. Le piège qui reste, c'est de reculer d'un cran de trop : qu'il vînt n'est pas qu'il soit venu, et après si, eût su devient avait su. Avant l'examen, prends une page de roman classique, souligne chaque chapeau et écris au-dessus la forme d'aujourd'hui. Ne touche à rien d'autre. EN: Underline every literary form in a classic page, write today's form above it, and change nothing else.",
  stats: [
    { k: 'Où', v: 'l’écrit soigné ; jamais la conversation' },
    { k: 'Le chapeau', v: 'fut, un fait ; fût, un subjonctif' },
    { k: 'Déjà fait', v: 'eût fini : ait fini' },
    { k: 'Aujourd’hui', v: 'présent, passé, conditionnel passé' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight. Every question tests RECOGNITION: which
 *  mood and tense, which verb, which person, what it means, how a writer
 *  would put it today. No option set supplies a literary form to complete a
 *  gap, and no typed answer contains one. `fold()` strips accents, commas,
 *  apostrophes and hyphens, so every typed answer turns on the mood, the
 *  auxiliary or the word, never on an accent. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas dans cette version d’aujourd’hui. Écris la phrase correcte. EN: One form is wrong in this modern version; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const TODAY = 'Dis-la en français d’aujourd’hui.';

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-reperer', label: 'Repérer', targets: ['lu-comme-fait'],
      questions: [
        mc('« Elle exigea qu’il fût là avant midi. » Que dit la phrase ?', ['elle a donné un ordre', 'il était là avant midi', 'il sera là demain'], 0, 'Fût dépend d’exigea que : un ordre, pas un fait. EN: an order.', 'a1-scene'),
        mc('Où ne rencontres-tu jamais le subjonctif littéraire, sauf pour plaisanter ?', ['dans une conversation', 'dans un roman classique', 'dans un manuel soigné'], 0, 'Jamais à l’oral. EN: never in speech.', 'a2-table'),
        mc('Quelle personne rencontres-tu le plus souvent ?', ['la troisième du singulier', 'la première du pluriel', 'la deuxième du pluriel'], 0, 'Qu’il fût, qu’elle eût. EN: third person singular.', 'a2-trier'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1204)), fr(E(1205)), 'Vînt devient vienne. EN: vienne.', 'a1-reperer'),
        tI('Donne l’infinitif du verbe à chapeau.', fr(E(1210)), 'parler', 'Parlât : parler. EN: parler.', 'a1-reperer'),
        eS("Il fallait qu'elle vient seule.", fr(E(1205)), 'Il fallait que appelle le subjonctif : vienne. EN: vienne.', 'a1-reperer'),
        lC('Écoute. Cette phrase vient…', fr(E(1215)), ['d’un texte écrit et soigné', 'd’une conversation'], 0, 'Fussent achevés : un manuel. EN: careful writing.', 'a2-trier'),
        lC('Écoute. Que fait le notaire ?', fr(E(1210)), ['il attend qu’elle parle', 'il parle longtemps', 'il s’en va'], 0, 'Il attendait qu’elle parlât. EN: he waits for her to speak.', 'a1-lecture'),
      ],
    },
    {
      id: 'r2-chapeau', label: 'Fut ou fût', targets: ['chapeau-ignore'],
      questions: [
        mc('Laquelle de ces phrases contient un subjonctif ?', ['Il fallait que ce fût un succès.', 'Ce fut un succès.'], 0, 'Le chapeau et le que. EN: fût after que.', 'a3-cartes'),
        mc('« Il eut peur et recula. » Eut est…', ['un passé simple', 'un subjonctif'], 0, 'Sans chapeau ni que : un fait. EN: passé simple.', 'a3-exemples'),
        mc('Fît vient de…', ['faire', 'finir', 'fuir'], 0, 'Fit, fît : faire. EN: faire.', 'a3-reperer'),
        mc('À l’oreille, qu’est-ce qui distingue fût de fut ?', ['le déclencheur devant que', 'l’accent, qu’on entend bien'], 0, 'Le son est le même. EN: the trigger.', 'a3-cartes'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1236)), fr(E(1237)), 'Fallut : a fallu ; prît : prenne. EN: a fallu, prenne.', 'a3-piege'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1246)), fr(E(1247)), 'Fut, un fait : ça a été. EN: ça a été.', 'a3-piege', ['Cela a été un succès.', "Ç'a été un succès."]),
        eS("Il était furieux qu'elle a raison.", fr(E(1233)), 'Eût, après furieux que : ait. EN: ait.', 'a3-piege'),
        lC('Écoute. Le succès est-il un fait ?', fr(E(1244)), ['non, il le fallait', 'oui, c’était un succès'], 0, 'Il fallait que : une nécessité. EN: a necessity.', 'a3-ecoute'),
      ],
    },
    {
      id: 'r3-forme', label: 'La forme', targets: ['radical-perdu'],
      questions: [
        mc('Qu’il sût vient de…', ['savoir', 'suivre', 'sortir'], 0, 'Su, sût. EN: savoir.', 'a4-construire'),
        mc('Qu’il dît vient de…', ['dire', 'devoir', 'donner'], 0, 'Dit, dît. EN: dire.', 'a4-cartes'),
        mc('Qu’ils partissent : combien de personnes ?', ['plusieurs', 'une seule'], 0, '-ssent : ils. EN: several.', 'a4-cartes'),
        mc('L’imparfait du subjonctif se construit sur…', ['le passé simple', 'l’imparfait de l’indicatif', 'le futur'], 0, 'Il vint, qu’il vînt. EN: the passé simple.', 'a4-table'),
        tI('Donne l’infinitif du verbe à chapeau.', fr(E(1254)), 'reconnaître', 'Reconnût : reconnaître. EN: reconnaître.', 'a4-hacks'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1262)), fr(E(1263)), 'Fussent : soient. EN: soient.', 'a4-construire'),
        eS("Il craignait qu'on le reconnaît.", fr(E(1255)), 'Un subjonctif : qu’on le reconnaisse. Le ne du livre n’est pas une négation. EN: reconnaisse.', 'a4-hacks', ["Il craignait qu'on ne le reconnaisse."]),
        lC('Écoute. Qui doit chanter ?', fr(E(1250)), ['elle', 'lui', 'eux'], 0, 'Qu’elle chantât. EN: she does.', 'a4-histoire'),
      ],
    },
    {
      id: 'r4-pqp', label: 'Eût fini, fût venue', targets: ['anteriorite-perdue'],
      questions: [
        mc('« qu’il eût fini » est…', ['un plus-que-parfait du subjonctif', 'un imparfait du subjonctif', 'un passé antérieur'], 0, 'Eût et un participe, après que. EN: pluperfect subjunctive.', 'a5-cartes'),
        mc('« Quand il eut fini, il se leva. » Eut fini est…', ['un passé antérieur', 'un plus-que-parfait du subjonctif'], 0, 'Pas de chapeau, pas de que. EN: passé antérieur.', 'a5-piege'),
        mc('« qu’elle fût venue » : aujourd’hui…', ['qu’elle soit venue', 'qu’elle ait venue', 'qu’elle vienne'], 0, 'Déjà fait, avec être : soit venue. EN: soit venue.', 'a5-construire'),
        mc('« Elle partit avant qu’il eût fini sa phrase. » Quand elle part, il…', ['n’a pas encore fini', 'a déjà fini'], 0, 'Avant que : il n’avait pas fini. EN: not yet finished.', 'a5-lecture'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1277)), fr(E(1278)), 'Eût travaillé : ait travaillé ; échoua : a échoué. EN: ait travaillé.', 'a5-construire'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1281)), fr(E(1282)), 'Fussent arrivés : soient arrivés. EN: soient arrivés.', 'a5-construire'),
        eS("Il regrettait qu'elle ne l'a jamais aimé.", fr(E(1284)), 'Regretter que garde le subjonctif : ne l’eût jamais aimé devient ne l’ait jamais aimé. EN: ait, not a.', 'a5-piege'),
        lC('Écoute. Qu’est-ce qui était déjà fait ?', fr(E(1288)), ['on avait ouvert sa lettre', 'il allait écrire une lettre'], 0, 'Eût ouvert : déjà fait. EN: the letter had been opened.', 'a5-exemples'),
      ],
    },
    {
      id: 'r5-deuxieme', label: 'Il eût fallu', targets: ['deuxieme-lue-subjonctif'],
      questions: [
        mc('« Il eût fallu partir plus tôt. » Aujourd’hui…', ['il aurait fallu partir plus tôt', 'qu’il ait fallu partir plus tôt', 'il a fallu partir plus tôt'], 0, 'Sans que : un conditionnel passé. EN: il aurait fallu.', 'a6-cartes'),
        mc('« On eût dit un château de conte. » La phrase exprime…', ['une comparaison', 'une parole rapportée'], 0, 'On aurait dit. EN: a comparison.', 'a6-erreurs'),
        mc('« S’il l’eût su » : aujourd’hui…', ['s’il l’avait su', 's’il l’aurait su', 's’il l’ait su'], 0, 'Après si, le plus-que-parfait. EN: avait su.', 'a6-construire'),
        mc('Comment reconnais-tu la deuxième forme ?', ['eût ou fût et un participe, sans que', 'un verbe au futur', 'un -ssent au pluriel'], 0, 'La forme du plus-que-parfait du subjonctif, sans déclencheur. EN: no que.', 'a6-cartes'),
        tI(`Une phrase soignée. ${TODAY}`, fr(E(1297)), fr(E(1298)), 'J’eusse aimé : j’aurais aimé. EN: j’aurais aimé.', 'a6-cartes'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1301)), fr(E(1302)), 'Avait su, puis serait venu. EN: avait su, serait venu.', 'a6-erreurs', ["S'il avait su, il serait venu."]),
        eS('Elle soit partie si elle avait pu.', fr(E(1308)), 'Pas de que : serait partie. EN: serait partie.', 'a6-erreurs'),
        lC('Écoute. Tout a-t-il été perdu ?', fr(E(1303)), ['non, grâce à elle', 'oui, tout'], 0, 'Tout eût été perdu sans elle ; mais elle était là. EN: no, thanks to her.', 'a6-construire'),
      ],
    },
    {
      id: 'r6-concordance', label: 'La concordance', targets: ['concordance-reculee'],
      questions: [
        mc('« Je voulais qu’il partît. » Aujourd’hui…', ['je voulais qu’il parte', 'je voulais qu’il soit parti', 'je voulais qu’il partait'], 0, 'Le présent du subjonctif. EN: parte.', 'a7-piege'),
        mc('Dans un roman classique, après un verbe principal au passé, le subjonctif est souvent…', ['à l’imparfait', 'au futur'], 0, 'La concordance classique. EN: imperfect.', 'a7-cartes'),
        mc('« Il faudrait qu’il vînt demain. » Pourquoi vînt ?', ['le conditionnel entraîne aussi l’imparfait du subjonctif', 'il est déjà venu'], 0, 'Dans les livres, après un conditionnel aussi. EN: after a conditional too.', 'a7-trier'),
        mc('Qu’il vînt et qu’il vienne disent…', ['la même chose', 'deux choses différentes'], 0, 'Le sens ne change pas. EN: the same.', 'a7-focus'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1318)), fr(E(1319)), 'Ordonna : a ordonné ; ouvrît : ouvre. EN: ouvre.', 'a7-trier'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1324)), fr(E(1325)), 'Déjà fait : ait reçu. EN: ait reçu.', 'a7-cartes'),
        eS("Il était parti sans qu'on le remarquait.", fr(E(1323)), 'Sans que : subjonctif. EN: remarque.', 'a7-piege'),
        lC('Écoute. Le patron voulait-il qu’on parle à l’atelier ?', "Il ne tolérait pas qu'on y parlât pendant le travail.", ['non', 'oui'], 0, 'Il ne le tolérait pas. EN: no.', 'a7-lecture'),
      ],
    },
    {
      id: 'r7-aujourdhui', label: 'Aujourd’hui, tu dirais', targets: ['traduction-fausse'],
      questions: [
        tI(`Une phrase de discours. ${TODAY}`, fr(E(1335)), fr(E(1336)), 'Eût été : aurait été. EN: aurait été.', 'a8-table'),
        tI(`Une phrase de discours. ${TODAY}`, fr(E(1339)), fr(E(1340)), 'Fallut : a fallu ; mît : mette. EN: mette.', 'a8-construire'),
        tI(`Une phrase de discours. ${TODAY}`, fr(E(1343)), fr(E(1344)), 'Qui eût cru : qui aurait cru. EN: qui aurait cru.', 'a8-table'),
        eS("Bien qu'on a promis ce pont cent fois, rien n'avançait.", fr(E(1342)), 'Bien que garde le subjonctif. EN: ait promis.', 'a8-erreurs'),
        eS("Il fallait qu'il sait la vérité.", fr(E(1257)), 'Sût : sache. EN: sache.', 'a8-erreurs'),
        mc('« Rien n’avançait », dans une phrase à traduire, tu…', ['le gardes tel quel', 'le mets au subjonctif'], 0, 'L’indicatif ne bouge pas. EN: keep it.', 'a8-table'),
        mc('« qu’elle vînt seule » : aujourd’hui…', ['qu’elle vienne seule', 'qu’elle soit venue seule'], 0, 'Imparfait du subjonctif : présent. EN: vienne.', 'a8-erreurs'),
        lC('Écoute. Pour la dire aujourd’hui, combien de formes changes-tu ?', fr(E(1221)), ['deux', 'une', 'aucune'], 0, 'Eût été et fût. EN: two.', 'a8-construire'),
      ],
    },
    {
      id: 'r8-figees', label: 'Les formes vivantes', targets: ['figee-mal-lue'],
      questions: [
        mc('« Reste, ne fût-ce qu’une heure. » Cela veut dire…', ['reste au moins une heure', 'ne reste pas une heure', 'reste une heure de plus'], 0, 'Ne serait-ce qu’une heure. EN: at least an hour.', 'a9-cartes'),
        mc('« Il faut le lire, fût-ce en traduction. » Fût-ce veut dire…', ['même', 'parce que', 'sauf'], 0, 'Même en traduction. EN: even.', 'a9-cartes'),
        mc('« Qu’à cela ne tienne » est…', ['un présent du subjonctif', 'un imparfait du subjonctif'], 0, 'Tienne, de tenir, au présent. EN: present.', 'a9-construire'),
        mc('Aujourd’hui, même pour raconter le passé, tu dis…', ['quoi qu’il en soit', 'quoi qu’il en fût'], 0, 'Toujours au présent. EN: soit.', 'a9-cartes'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1354)), fr(E(1355)), 'Quoi qu’il en soit ; céda : a cédé. EN: n’a pas cédé.', 'a9-cartes'),
        tI(`Une phrase soignée. ${TODAY}`, fr(E(1350)), fr(E(1351)), 'Ne serait-ce que. EN: ne serait-ce que.', 'a9-flash', ['Reste, au moins une heure.']),
        eS('Il ne voulait rien changer, même une virgule.', fr(E(1363)), 'Après une négation : pas même. EN: pas même.', 'a9-construire', ['Il ne voulait rien changer, même pas une virgule.']),
        lC('Écoute. Combien de temps pourrait prendre le livre ?', fr(E(1358)), ['dix ans', 'dix jours', 'un an'], 0, 'Dût-il me prendre dix ans. EN: ten years.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r9-comprendre', label: 'Comprendre l’extrait', targets: ['ironie-manquee'],
      questions: [
        mc('Pourquoi tant de subjonctifs littéraires pour le baron ?', ['pour rendre sa grandeur ridicule', 'parce que le roman date du XIXe siècle'], 0, 'Un roman contemporain qui imite : un clin d’œil. EN: for irony.', 'a10-types'),
        mc('« On eût dit un roi en exil. » Le ton est…', ['ironique', 'admiratif', 'triste'], 0, 'Un roi, dans un jardin. EN: ironic.', 'a10-lecture'),
        mc('Pourquoi le curé salue-t-il le baron ?', ['pour qu’il lègue son jardin à la paroisse', 'parce qu’il l’admire', 'parce qu’il a peur de lui'], 0, 'Dans l’espoir d’un héritage. EN: for the garden.', 'a10-lecture'),
        mc('Que laisse entendre la fin de l’extrait ?', ['le baron est devenu plus simple', 'le baron a quitté le village', 'l’enfant a été punie'], 0, 'On l’appelle monsieur Morville, et il sourit. EN: he changed.', 'a10-construire'),
        tI(`Une phrase de l’extrait. ${TODAY}`, fr(E(1374)), fr(E(1375)), 'Appelât : appelle. EN: appelle.', 'a10-construire'),
        tI(`Une phrase de l’extrait. ${TODAY}`, fr(E(1378)), fr(E(1379)), 'Eût voulu : aurait voulu ; saluât : salue. EN: aurait voulu, salue.', 'a10-construire'),
        eS('On a dit un roi en exil.', fr(E(1377)), 'Une comparaison : on aurait dit. EN: on aurait dit.', 'a10-types'),
        lC('Écoute. Que dit cette phrase du style ?', fr(E(1372)), ['il est solennel, et la situation comique', 'il est simple, comme la situation'], 0, 'Le décalage crée l’ironie. EN: solemn style, comic situation.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r10-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage-b1-b2'],
      questions: [
        mc(`${Cap(FORMATION_REF)} : qu’il soit vient de…`, ['être', 'savoir'], 0, `« ${B114_REFRAME} » EN: ${B114_REFRAME_EN}`, 'a4-table'),
        mc(`${Cap(DECLENCHEURS_REF)} : dans « bien que le budget fût épuisé », qu’est-ce qui décide du subjonctif ?`, ['bien que', 'le verbe être'], 0, `« ${B115_REFRAME} » EN: ${B115_REFRAME_EN}`, 'a3-reperer'),
        mc(`${Cap(SUBJPASSE_REF)} : « j’étais content qu’il soit venu » dit que sa venue…`, ['était déjà faite', 'allait arriver'], 0, `« ${B205_REFRAME} » EN: ${B205_REFRAME_EN}`, 'a5-cartes'),
        mc(`${Cap(CONDPASSE_REF)} : « il aurait fallu » exprime…`, ['un regret ou un reproche sur le passé', 'un ordre pour demain'], 0, `« ${B202_REFRAME} » EN: ${B202_REFRAME_EN}`, 'a6-cartes'),
        mc(`${Cap(SI_REF)} : « S’il l’avait su, il serait venu. » Il est venu ?`, ['non', 'oui'], 0, `« ${B203_REFRAME} » EN: ${B203_REFRAME_EN}`, 'a6-construire'),
        mc(`${Cap(PS_REF)} : « Elle fit ses valises. » Fit est…`, ['un passé simple : elle a fait', 'un subjonctif : qu’elle fasse'], 0, `« ${B208_REFRAME} » EN: ${B208_REFRAME_EN}`, 'a3-exemples'),
        eS('Bien que la salle est petite, tout le monde tient.', fr(OA(1323)), `${Cap(CONCESSION_REF)} : bien que prend le subjonctif. EN: soit.`, 'a3-reperer'),
        lC(`Écoute. ${Cap(SUBJIND_REF)} : cette phrase affirme-t-elle un fait ?`, fr(E(1232)), ['non, elle dépend de furieux que', 'oui, elle le raconte'], 0, `« ${B206_REFRAME} » EN: ${B206_REFRAME_EN}`, 'a3-ecoute'),
      ],
    },
    {
      id: 'r11-examen', label: 'Comme à l’examen', targets: ['examen-lecture'],
      questions: [
        mc('Format DELF B2, compréhension écrite. « Le roi voulait que ses fils fussent instruits. » Que voulait le roi ?', ['que ses fils soient instruits', 'que ses fils l’instruisent', 'que ses fils partent'], 0, 'Fussent instruits : soient instruits. EN: educated sons.', 'a4-construire'),
        mc('Format TCF. Dans « Il eût mieux valu se taire », eût mieux valu correspond à…', ['aurait mieux valu', 'ait mieux valu', 'avait mieux valu', 'a mieux valu'], 0, 'La deuxième forme : conditionnel passé. EN: aurait mieux valu.', 'a6-cartes'),
        mc('Format TCF. « Bien qu’il fût malade, il vint travailler. » Aujourd’hui, bien qu’il…', ['soit malade', 'était malade', 'a été malade'], 0, 'Bien que : subjonctif présent. EN: soit.', 'a8-table'),
        mc('Format DELF B2. Dans l’extrait du baron, pourquoi la question de la petite fille compte-t-elle ?', ['elle dit tout haut ce que le village pense', 'elle veut jouer avec lui', 'elle ne connaît pas le mot baron'], 0, 'L’enfant révèle le ridicule. EN: she says what everyone thinks.', 'a10-lecture'),
        mc('Format TCF. « Il fallut qu’on appelât un médecin. » Appelât vient de…', ['appeler', 'appartenir', 'apprendre'], 0, 'Appelât : appeler. EN: appeler.', 'a4-cartes'),
        tI('Format DELF B2, reformulation. Dis-la en français d’aujourd’hui.', "Elle attendait qu'il revînt.", "Elle attendait qu'il revienne.", 'Revînt : revenir ; revienne. EN: revienne.', 'a8-table'),
        tI('Format TCF. Donne l’infinitif du verbe à chapeau.', fr(E(1389)), 'voir', 'Vît : voir. EN: voir.', 'a4-hacks'),
        lC('Format TEF, compréhension orale. Écoute cette phrase d’un livre audio. Qu’a-t-il fallu ?', fr(E(1339)), ['que chacun fasse un effort', 'que chacun parte', 'que chacun se taise'], 0, 'Y mettre du sien : faire un effort. EN: everyone had to do their bit.', 'a8-lecture'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.08 does. */
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
    { front: 'où vit le subjonctif littéraire', back: 'dans l’écrit soigné, jamais à l’oral', say: fr(E(1216)) },
    { front: 'fut, sans chapeau', back: 'un passé simple : un fait', say: fr(E(1247)) },
    { front: 'fût, avec un chapeau', back: 'un subjonctif : aujourd’hui, soit', say: fr(E(1245)) },
    { front: 'la base de qu’il vînt', back: 'le passé simple il vint', say: fr(E(1205)) },
    { front: 'la finale -ssent', back: 'ils ou elles, forme rare', say: fr(E(1261)) },
    { front: 'eût ou fût + participe', back: 'déjà fait : ait fini, soit venue', say: fr(E(1276)) },
    { front: 'il eût fallu, sans que', back: 'il aurait fallu', say: fr(E(1296)) },
    { front: 'après si ou comme si', back: 'le plus-que-parfait : avait su', say: fr(E(1302)) },
    { front: 'ne fût-ce que', back: 'ne serait-ce que', say: fr(E(1351)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Le costume d’époque',
  body: `${REFRAME} Tu as repris les déclencheurs de ${DECLENCHEURS_REF}, l'horloge de ${SUBJPASSE_REF}, le conditionnel passé de ${CONDPASSE_REF} et le passé simple de ${PS_REF}, et tu les retrouves maintenant en habit d'époque : tu repères, tu traduis, tu comprends. La suite du B2 quitte les livres pour la phrase compacte : la nominalisation, qui transforme une proposition entière en un groupe du nom. EN: Next in B2: nominalisation, turning a whole clause into a compact noun phrase.`,
  points: [
    'Le subjonctif littéraire vit dans l’écrit soigné, jamais à l’oral.',
    'Fut raconte ; fût, avec son chapeau, dépend d’un que.',
    'Imparfait : présent. Plus-que-parfait : passé. Deuxième forme : conditionnel passé.',
    'Après si et comme si : le plus-que-parfait de l’indicatif.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'chapeau'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Raconte-le à un ami',
    opener: {
      line: "Une page au style ancien t'a touché, et ton ami veut savoir : ici tu la racontes en français d'aujourd'hui, puis tu passes l'examen. EN: An old-style page moved you and your friend wants to know: here you retell it in today's French, then sit the exam.",
      imageRef: 'lessons/subjonctif-litteraire/act11.jpg',
    },
    sections: [],
    milestone: "Tu as raconté une page classique en français d'aujourd'hui et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You retold a classic page in today's French and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r4-pqp', 'a11-quiz/r8-figees', 'a11-review'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`. Recognition only:
 *  a coach asks for the verb, the mood or today's version, never a form.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-reperer', title: 'Un fait ou un subjonctif', format: 'sort' as const, coach: "Deux piles : un verbe qui raconte un fait, ou un verbe qui dépend d'un que. Regarde le chapeau. EN: sort facts from subjunctives.", buckets: ['un subjonctif', 'un passé simple'], items: [E(1200), E(1204), E(1206), LIT(1105), LIT(1107), E(1246)], audio: AUDIO },
  { id: 'd-chapeau', title: 'Fut ou fût', format: 'mcq' as const, coach: "Cherche le que, puis l'accent, avant de traduire. EN: find que, then the circumflex.", q: '« Il fallait que ce fût un succès. » Fût est…', opts: ['un subjonctif', 'un passé simple'], correct: 0, why: 'Après il fallait que, avec un chapeau. EN: a subjunctive.', items: [E(1231), E(1233), E(1235), E(1237), E(1239), E(1241)], audio: AUDIO },
  { id: 'd-forme', title: 'Le verbe sous le chapeau', format: 'flashcard' as const, coach: "Lis chaque version d'aujourd'hui à voix haute, et dis de quel verbe elle vient. EN: read each modern version aloud and name its verb.", items: [E(1251), E(1253), E(1257), E(1259), E(1261), E(1263)], audio: AUDIO },
  { id: 'd-pqp', title: 'Déjà fait', format: 'mcq' as const, coach: "Eût ou fût, puis un participe : l'action était déjà finie. EN: eût or fût plus a participle: already done.", q: '« qu’elle fût venue » : aujourd’hui…', opts: ['qu’elle soit venue', 'qu’elle vienne'], correct: 0, why: 'Déjà fait : le subjonctif passé. EN: soit venue.', items: [E(1276), E(1278), E(1280), E(1282), E(1284), E(1289)], audio: AUDIO },
  { id: 'd-deuxieme', title: 'Avec ou sans que', format: 'sort' as const, coach: "Deux piles : la forme suit un que (subjonctif), ou elle est seule (conditionnel passé). EN: sort by whether que comes first.", buckets: ['un subjonctif', 'un conditionnel passé'], items: [E(1285), E(1275), E(1281), E(1295), E(1299), E(1305)], audio: AUDIO },
  { id: 'd-concordance', title: 'Le présent quand même', format: 'flashcard' as const, coach: "Lis chaque phrase d'aujourd'hui : le verbe principal est au passé, et le subjonctif reste au présent. EN: past main verb, present subjunctive.", items: [E(1316), E(1319), E(1321), E(1323), E(1325), E(1329)], audio: AUDIO },
  { id: 'd-aujourdhui', title: 'Dis-le aujourd’hui', format: 'mcq' as const, coach: "Traduis seulement les formes littéraires ; le reste de la phrase ne bouge pas. EN: map only the literary forms.", q: '« Il fallut que chacun y mît du sien. » Aujourd’hui…', opts: ['il a fallu que chacun y mette du sien', 'il a fallu que chacun y ait mis du sien'], correct: 0, why: 'Mît : le présent, mette. EN: mette.', items: [E(1336), E(1338), E(1340), E(1342), E(1344), E(1202)], audio: AUDIO },
  { id: 'd-figees', title: 'Les formes vivantes', format: 'flashcard' as const, coach: "Lis chaque phrase et dis ce que veut dire la forme figée : même, ne serait-ce que, de toute façon, pas de problème. EN: say what each fixed form means.", items: [E(1351), E(1353), E(1355), E(1356), E(1357), E(1359)], audio: AUDIO },
  { id: 'd-lecture', title: 'Le style et la situation', format: 'mcq' as const, coach: "Compare le style à ce qui se passe vraiment : c'est là que se cache l'ironie. EN: compare style and situation.", q: '« On eût dit un roi en exil. » Le narrateur…', opts: ['se moque doucement du baron', 'admire le baron'], correct: 0, why: 'L’exagération fait sourire. EN: gentle mockery.', items: [E(1370), E(1371), E(1372), E(1373), E(1377), SC], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 et le B2 en renfort', format: 'flashcard' as const, coach: "Six phrases des leçons précédentes : dis pour chacune ce que fait le mode ou le temps. EN: say what each mood or tense does.", items: [EMO(1262), EMO(1263), CS(1208), RP1760, OA(1323), OA(1155)], audio: AUDIO },
  { id: 'd-examen', title: 'La page, racontée', format: 'flashcard' as const, coach: "Lis chaque version d'aujourd'hui à voix haute, comme si tu racontais le livre. EN: read each retelling aloud.", items: [E(1388), E(1390), E(1392), E(1396), E(1205), E(1296)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'lu-comme-fait', description: 'Reads a literary subjunctive as a narrated fact (fût as fut, vînt as vint), or uses the form in speech.', detectOn: ['a1-scene', 'a1-reperer', 'a2-trier', 'a11-mission'], drill: 'd-reperer', retest: 'd-reperer' },
  { id: 'chapeau-ignore', description: 'Ignores the circumflex and the trigger, so cannot tell fut, eut, fit from fût, eût, fît.', detectOn: ['a3-reperer', 'a3-piege', 'a3-check'], drill: 'd-chapeau', retest: 'd-chapeau' },
  { id: 'radical-perdu', description: 'Cannot find the verb behind an -ât, -ît, -ût, -înt or -ssent form, or loses the person.', detectOn: ['a4-construire', 'a4-check', 'a11-mission'], drill: 'd-forme', retest: 'd-forme' },
  { id: 'anteriorite-perdue', description: 'Maps the pluperfect subjunctive to the wrong form, or confuses qu’il eût fini with the passé antérieur quand il eut fini.', detectOn: ['a5-construire', 'a5-piege', 'a5-check'], drill: 'd-pqp', retest: 'd-pqp' },
  { id: 'deuxieme-lue-subjonctif', description: 'Reads il eût fallu or on eût dit as a subjunctive, or puts a conditional after si.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-deuxieme', retest: 'd-deuxieme' },
  { id: 'concordance-reculee', description: 'Maps an imperfect subjunctive after a past verb to a past subjunctive or to the indicative, instead of the present subjunctive.', detectOn: ['a7-trier', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-concordance', retest: 'd-concordance' },
  { id: 'traduction-fausse', description: 'Retells with an indicative after a trigger, changes the indicative around the literary form, or leaves a literary form in place.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-aujourdhui', retest: 'd-aujourdhui' },
  { id: 'figee-mal-lue', description: 'Misreads fût-ce, ne fût-ce que, dût-il or quoi qu’il en fût, or takes qu’à cela ne tienne for an old tense.', detectOn: ['a9-construire', 'a9-check'], drill: 'd-figees', retest: 'd-figees' },
  { id: 'ironie-manquee', description: 'Reads a classic-style page only for its facts, missing the gap between the solemn style and the situation.', detectOn: ['a10-lecture', 'a10-construire', 'a10-check'], drill: 'd-lecture', retest: 'd-lecture' },
  { id: 'recyclage-b1-b2', description: 'Loses a B1 or B2 point the literary subjunctive sits on: the triggers, the subjonctif passé clock, the past conditional, the si pair, the passé simple.', detectOn: ['a3-exemples', 'a5-cartes', 'a6-cartes'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'examen-lecture', description: 'In an exam-format item, cannot map a literary form to its meaning or modern form quickly enough to answer.', detectOn: ['a4-construire', 'a10-lecture', 'a11-mission'], drill: 'd-examen', retest: 'd-examen' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names a position. As b2.08 does. */
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
  sheet('sheet-usages', 'Où vit le subjonctif littéraire', ['les textes', 'l’oral', 'la personne'], [
    teach('sheet-usages-teach', 'Un subjonctif de la page soignée',
      `${REFRAME} Tu rencontres l'imparfait et le plus-que-parfait du subjonctif dans les romans classiques, les livres d'histoire soignés, certains discours solennels, et dans la presse quand elle veut donner du poids ou faire sourire. La troisième personne du singulier domine de loin. Personne ne les emploie en parlant, sauf pour plaisanter. EN: ${REFRAME_EN}`),
    table('sheet-usages-table', 'Où le rencontrer', ['Texte', 'Subjonctif littéraire ?', 'Exemple'], [
      ['un roman classique', 'oui, souvent', "Bien qu'il fût tard, le notaire la reçut."],
      ['un roman d’aujourd’hui', 'rarement, pour le style', 'On eût dit un roi en exil.'],
      ['un livre d’histoire soigné', 'parfois', "Le préfet ordonna que les travaux fussent achevés avant l'hiver."],
      ['la presse', 'pour l’effet', "Reste, ne fût-ce qu'une heure."],
      ['un discours solennel', 'parfois', 'Il eût été facile de renoncer.'],
      ['une conversation, un message', 'jamais, sauf pour rire', 'Il fallait que tu le saches avant la réunion.'],
    ]),
  ]),
  sheet('sheet-formes', 'Les formes', ['le chapeau', 'l’imparfait du subjonctif', 'le plus-que-parfait du subjonctif', 'la deuxième forme'], [
    teach('sheet-formes-teach', 'Construit sur le passé simple',
      "L'imparfait du subjonctif se construit sur le passé simple : à la troisième personne du singulier, un accent circonflexe et, pour les verbes en -er, un t (il chanta, qu'il chantât ; il finit, qu'il finît ; il fut, qu'il fût ; il vint, qu'il vînt). Les autres personnes prennent un double s (-asse, -isse, -usse, -insse ; au pluriel -assent, -issent, -ussent, -inssent). Le plus-que-parfait du subjonctif, c'est eût ou fût puis un participe. Sans que, cette même forme est la deuxième forme du conditionnel passé. EN: built on the passé simple; eût or fût plus a participle for the compound forms."),
    table('sheet-formes-table', 'La troisième personne du singulier', ['Passé simple', 'Subjonctif littéraire', 'Aujourd’hui'], [
      ['il fut', 'qu’il fût', 'qu’il soit'],
      ['il eut', 'qu’il eût', 'qu’il ait'],
      ['il fit', 'qu’il fît', 'qu’il fasse'],
      ['il vint', 'qu’il vînt', 'qu’il vienne'],
      ['il prit', 'qu’il prît', 'qu’il prenne'],
      ['il put', 'qu’il pût', 'qu’il puisse'],
      ['il sut', 'qu’il sût', 'qu’il sache'],
      ['il dit', 'qu’il dît', 'qu’il dise'],
      ['il finit', 'qu’il finît', 'qu’il finisse'],
      ['il aima', 'qu’il aimât', 'qu’il aime'],
    ]),
    table('sheet-formes-personnes', 'Les autres personnes, à reconnaître', ['Personne', 'être', 'avoir', 'aimer', 'venir'], [
      ['je', 'que je fusse', 'que j’eusse', 'que j’aimasse', 'que je vinsse'],
      ['tu', 'que tu fusses', 'que tu eusses', 'que tu aimasses', 'que tu vinsses'],
      ['nous', 'que nous fussions', 'que nous eussions', 'que nous aimassions', 'que nous vinssions'],
      ['vous', 'que vous fussiez', 'que vous eussiez', 'que vous aimassiez', 'que vous vinssiez'],
      ['ils, elles', 'qu’ils fussent', 'qu’ils eussent', 'qu’ils aimassent', 'qu’ils vinssent'],
    ]),
    table('sheet-formes-composees', 'Eût, fût et un participe', ['Tu lis', 'C’est', 'Aujourd’hui'], [
      ['qu’il eût fini', 'plus-que-parfait du subjonctif', 'qu’il ait fini'],
      ['qu’elle fût partie', 'plus-que-parfait du subjonctif', 'qu’elle soit partie'],
      ['il eût fallu', 'deuxième forme du conditionnel passé', 'il aurait fallu'],
      ['on eût dit', 'deuxième forme du conditionnel passé', 'on aurait dit'],
      ['s’il l’eût su', 'après si', 's’il l’avait su'],
      ['quand il eut fini', 'passé antérieur, sans chapeau', 'quand il a fini'],
    ]),
  ]),
  sheet('sheet-concordance', 'La concordance des temps', ['dans les livres', 'aujourd’hui'], [
    teach('sheet-concordance-teach', 'Le livre recule, toi non',
      `Dans un texte classique, le temps du subjonctif suit le verbe principal : au présent ou au futur, le présent du subjonctif ; au passé ou au conditionnel, l'imparfait du subjonctif, et le plus-que-parfait pour une action déjà faite. Le français d'aujourd'hui garde le présent et le subjonctif passé, quel que soit le verbe principal. C'est l'horloge de ${SUBJPASSE_REF} : « ${B205_REFRAME} » EN: classic texts shift the subjunctive into the past; today's French does not.`),
    table('sheet-concordance-table', 'Le livre et toi', ['Verbe principal', 'Dans le livre', 'Aujourd’hui'], [
      ['je veux', 'qu’il parte', 'qu’il parte'],
      ['je voulais', 'qu’il partît', 'qu’il parte'],
      ['il faudrait', 'qu’il vînt', 'qu’il vienne'],
      ['je doutais (déjà fait)', 'qu’elle eût reçu', 'qu’elle ait reçu'],
      ['j’étais contente (déjà fait)', 'qu’il fût venu', 'qu’il soit venu'],
    ]),
  ]),
  sheet('sheet-aujourdhui', 'Dire aujourd’hui', ['les traductions', 'les formes figées', 'la liste de contrôle'], [
    teach('sheet-aujourdhui-teach', 'Trois traductions, une exception',
      `Imparfait du subjonctif : présent du subjonctif. Plus-que-parfait du subjonctif : subjonctif passé. Deuxième forme : conditionnel passé. Après si et comme si : le plus-que-parfait de l'indicatif. Autour, le passé simple devient passé composé, comme dans ${PS_REF} ; tout le reste du texte garde ses temps. EN: three maps, one exception after si, and the passé simple to the passé composé.`),
    table('sheet-aujourdhui-table', 'Du livre au message', ['Dans le livre', 'Aujourd’hui', 'La règle'], [
      ['qu’il fût', 'qu’il soit', 'imparfait : présent'],
      ['qu’il eût fini', 'qu’il ait fini', 'plus-que-parfait : passé'],
      ['il eût fallu', 'il aurait fallu', 'deuxième forme : conditionnel passé'],
      ['s’il l’eût su', 's’il l’avait su', 'après si : plus-que-parfait'],
      ['comme s’il eût cherché', 'comme s’il avait cherché', 'après comme si : plus-que-parfait'],
      ['il fallut', 'il a fallu', 'passé simple : passé composé'],
    ]),
    table('sheet-aujourdhui-figees', 'Les formes figées', ['Tu lis', 'Ça veut dire', 'Remarque'], [
      ['ne fût-ce que', 'ne serait-ce que', 'encore courant à l’écrit'],
      ['fût-ce', 'même', 'après une négation : pas même'],
      ['dût-il', 'même s’il devait', 'écrit soigné'],
      ['quoi qu’il en fût', 'quoi qu’il en soit', 'aujourd’hui, toujours au présent'],
      ['qu’à cela ne tienne', 'pas de problème', 'un présent du subjonctif'],
    ]),
    table('sheet-aujourdhui-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Aucune forme littéraire ne reste', 'Relis chaque chapeau et chaque -ssent'],
      ['Le temps n’a pas reculé de trop', 'Qu’il vînt : qu’il vienne, pas qu’il soit venu'],
      ['Le subjonctif reste après le déclencheur', 'Bien que, il fallait que, vouloir que'],
      ['Après si et comme si, pas de subjonctif', 'Le plus-que-parfait : avait su'],
      ['Le passé simple est au passé composé', 'Fallut : a fallu'],
    ]),
  ]),
  sheet('sheet-lecture', 'Lire une page classique', ['le style', 'l’ironie', 'les questions de l’examen'], [
    teach('sheet-lecture-teach', 'Le sens d’abord, puis le style',
      `Lis la page une fois pour le sens, sans t'arrêter sur les chapeaux, comme ${LECTURE_B1_REF} te l'a appris. Traduis les formes dans ta tête, puis regarde le style : un auteur d'aujourd'hui qui écrit à la manière du XIXe siècle cherche souvent l'ironie, en mettant un style solennel sur une petite situation. ${Cap(CRITIQUE_REF)} disait : « ${B224_REFRAME} » EN: meaning first, then the style and what it implies.`),
    table('sheet-lecture-questions', 'Les questions de l’examen', ['Type', 'Ce qu’on cherche', 'Où'], [
      ['globale', 'le sujet, le genre, le but', 'le texte entier'],
      ['détail', 'un fait précis', 'une phrase, souvent citée'],
      ['inférence', 'ce que le texte laisse entendre', 'les gestes, les contrastes'],
      ['point de vue, ton', 'qui raconte, et comment', 'le style, les mots qui jugent'],
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
 *  released ONCE, and only ids a flashcard drill can reach. A literary line
 *  has no flashcard drill, so it is never released (corpus §A.3). */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-09-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const TEXTE = (what: string) => `${what}, one voice, read as a page of a book at an unhurried literary pace. Every literary form is read exactly as written, never modernised and never stressed.`;
const TRAP = (what: string) => `The audio step plays each card's CORRECT modern version (${what}). Six lines, one voice. The wrong versions in promptSound are NEVER spoken.`;
const REC_DESC: Record<string, string> = {
  'rec-b2-09-notaire': "The novel opening « Le notaire de Valbonne » (act 1), one warm male voice, one take, the pace of a 19th-century novel read aloud. The literary forms are read with no emphasis: the learner is meant to notice them, not be told. Madame Delorme's and the notary's words in quotation marks are spoken lightly in character.",
  'rec-b2-09-sophie': "Sophie and Marc at the coffee machine in Lausanne (act 2), two voices: Sophie amused and a little proud of her email, Marc teasing and friendly. One take, conversational pace; Sophie reads her email line in a mock-solemn voice.",
  'rec-b2-09-genres': 'The four genre cards (act 2). One voice. Each card line is read in the register of its genre: novel, history teacher, editorial, office joke.',
  'rec-b2-09-canal': 'The history textbook page on the Sainte-Aure canal (act 2), one clear teacher voice, one take, the pace of a lesson read aloud. Dates are read in full (mille huit cent vingt et un).',
  'rec-b2-09-chapeau': "The four fut / fût cards (act 3). One voice. Card one to three: each pair is read with IDENTICAL sound, so the learner hears that the circumflex changes nothing to the ear.",
  'rec-b2-09-chapeau-ecoute': `${ONE_TAKE} Eight lines alternating passé simple and subjunctive; fut and fût must sound exactly the same, and no trigger may be stressed.`,
  'rec-b2-09-piege-chapeau': TRAP('présent du subjonctif or passé composé'),
  'rec-b2-09-fatou': "Fatou and her uncle Idrissa in Dakar (act 4), two voices: a teenage girl reading the novel's lines slowly, a warm retired teacher explaining. One take.",
  'rec-b2-09-formes': 'The four form cards (act 4). One voice. Card four (the -ssent plural) is read a little lightly, as a curiosity.',
  'rec-b2-09-memoires': "The schoolteacher's memoir (act 5), one older female voice, one take, looking back with quiet humour. The line about the letter is read slowly.",
  'rec-b2-09-pqp': 'The four pluperfect subjunctive cards (act 5). One voice. Card four (quand il eut fini) is read with the same rhythm as card one.',
  'rec-b2-09-piege-pqp': TRAP('subjonctif passé or passé composé'),
  'rec-b2-09-radio': "Gilles and Nadia in a Québec radio studio (act 6), two voices: a columnist reading his lines with exaggerated solemnity, a producer interrupting briskly. Québec French, one take.",
  'rec-b2-09-deuxieme': 'The four second-form cards (act 6). One voice, the tone of a patient teacher.',
  'rec-b2-09-atelier': "The workshop page (act 7), one male voice, one take, a restrained literary reading. Monsieur Lambert's two sentences in quotation marks are read in a slightly lower, gruff voice, clearly as speech.",
  'rec-b2-09-concordance': 'The four concordance cards (act 7). One voice. Cards two and three (partît, parte) are read with the same rhythm.',
  'rec-b2-09-concordance-ecoute': `${ONE_TAKE} Eight lines, literary and modern mixed (lines one and two, five and six are the same sentence in both forms); read every line with the same intonation, so the ear hears the meaning does not change.`,
  'rec-b2-09-piege-concordance': TRAP('présent du subjonctif or subjonctif passé'),
  'rec-b2-09-discours': "The mayor's inauguration speech (act 8), one female voice, one take, the rhythm of a real speech outdoors: pauses for applause after « Mais le voici » and at the end. Solemn but warm, with a smile on « Dieu sait qu'il y en eut ».",
  'rec-b2-09-redaction': "Inès and Bruno in a Paris newsroom (act 9), two voices: Inès brisk and precise, Bruno amused and a little vain. One take.",
  'rec-b2-09-figees': 'The four fixed-form cards (act 9). One voice, the tone of a newspaper editor.',
  'rec-b2-09-figees-ecoute': `${ONE_TAKE} Eight lines read like an editorial on the radio; the questions are about meaning, so no fixed form may be stressed.`,
  'rec-b2-09-baron': "The baron extract (act 10), one male voice, one take, dry and gently ironic, as a writer reading his own pastiche. The little girl's question is reported, not acted. The last sentence, in the present, is read warmly.",
  'rec-b2-09-lire': 'The four reading-strategy cards (act 10). One voice, the tone of an exam coach.',
  'rec-b2-09-baron-ecoute': `${ONE_TAKE} Eight lines read like a radio reading of a novel; the questions are about meaning, so no line is dramatised.`,
  'rec-b2-09-modele': "Léa's message to Hugo (act 11), one young female voice, one take, read as a voice message to a friend: natural, quick, warm. It must sound like speech, because the point is that it contains no literary form.",
  'rec-b2-09-texte-a3': TEXTE("Paul's winter (act 3)"),
  'rec-b2-09-texte-a4': TEXTE("The countess's party (act 4), with the ending read deadpan"),
  'rec-b2-09-texte-a5': TEXTE("Hélène's return (act 5)"),
  'rec-b2-09-texte-a6': TEXTE('The lighthouse (act 6)'),
  'rec-b2-09-texte-a7': TEXTE("The grandfather (act 7), with his last line spoken plainly"),
  'rec-b2-09-texte-a8': TEXTE('The school that was saved (act 8)'),
  'rec-b2-09-texte-a9': TEXTE("Julien's departure (act 9), with his sister's line spoken plainly"),
  'rec-b2-09-texte-a10': TEXTE("Madame Pélissier's drawing room (act 10), with the irony audible but never underlined"),
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 9',
  intro: 'Classic French novels, careful history books, formal speeches and some journalism use a subjunctive nobody says aloud: qu’il fût, qu’il eût fini, il eût fallu. In this lesson you never have to produce it. You learn to recognise it and to translate it in your head. You find out where it lives, how the circumflex tells it apart from the passé simple you already read, how it is built on that passé simple, how the pluperfect subjunctive and the second form of the past conditional work, and why a classic text shifts the subjunctive into the past where today’s French keeps the present. You map every form to the one a writer would use today, meet the fixed forms still alive in the press (ne fût-ce que, quoi qu’il en soit), and read a pastiche page for its irony. The task: retell a literary page for a friend in 150 to 220 words of today’s French.',
  skill: 'CE',
  grammarAssumed: [FORMATION_UNIT, DECLENCHEURS_UNIT, CONDPASSE_UNIT, SI_UNIT, SUBJPASSE_UNIT, PS_UNIT],
  grammarIntroduced: [
    'Recognition of the imperfect and pluperfect subjunctive and their register: classic novels, careful history writing, formal speeches, journalism for effect, humour; never conversation',
    'The circumflex as the visual clue in the third person singular (fut / fût, eut / eût, fit / fît, vint / vînt, prit / prît, put / pût), and the trigger before que as the only clue for the ear',
    'The imperfect subjunctive for recognition, built on the passé simple: -ât, -ît, -ût, -înt in the third person singular, the double s of the other persons and the plural, with the third person singular as by far the most frequent',
    'The pluperfect subjunctive (eût or fût plus a participle) for recognition, against the passé antérieur (quand il eut fini)',
    'The second form of the past conditional (il eût fallu, j’eusse aimé, on eût dit, s’il l’eût su, il fût venu) read as the past conditional, with the pluperfect indicative after si and comme si',
    'The classical sequence of tenses: a past or conditional main verb bringing the imperfect subjunctive in classic texts, where today’s French keeps the present subjunctive',
    'Mapping every literary form to today’s form (present subjunctive, past subjunctive, past conditional, pluperfect after si) while the rest of the text keeps its tenses; the fixed forms fût-ce, ne fût-ce que, dût-il, quoi qu’il en fût against quoi qu’il en soit, and qu’à cela ne tienne as a present subjunctive',
    'Reading a pastiche literary page for meaning, inference and the irony of a solemn style on a small situation',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Qu'il fût, qu'il eût fini, il eût fallu : les romans classiques, les livres d'histoire soignés et certains discours emploient un subjonctif que personne ne dit. Tu n'auras jamais à le produire. Ici, tu apprends à le reconnaître grâce à son chapeau et à son déclencheur, à retrouver le verbe et le temps derrière chaque forme, et à dire aussitôt la forme d'aujourd'hui. À la fin, tu racontes à un ami, en 150 à 220 mots, une page au style classique qui t'a touché.",
    minutes: 150,
    difficulty: 4,
    glyph: 'fût',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: SL_TERMS,
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
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE, ...ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id)];
export { IMPORTED, NOT_SPEAKABLE, LECTURE_MODELE, EXTRAIT_TACHE, dicteeFor };
