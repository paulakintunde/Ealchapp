// c1.16.l1 « Mémoire, vérité, beauté, éthique » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 (THE VOCAB SHAPE) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (wave 5).
// Structural model: the reviewed C1 vocabulary lesson c1.12 « Le vocabulaire
// des idées » (`./vocabulaire-idees-*`): its act loop, counts and helpers.
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE VOCAB SHAPE, AS BUILT HERE (model: c1.12's counts)
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around ONE BALANCE (two or three
//   neighbouring words that weigh different things), in the same beats:
//     1. MEET THEM IN USE   a `story`, a one-take `listening` or a `reading`
//     2. LEARN THEM         a `cardDeck` (4 cards) or a `tapTable` (6 rows),
//                           linked to a sheet
//     3. TELL THEM APART    a gated `groupDrill` of collocations and bank rows
//     4. TRAP               a stepped `trapDrill` or a `commonErrors`
//     5. ONE MORE ANGLE     a listening, examples, flashcards, hacks, focus or
//                           dictation
//     6. DANS UN TEXTE      the same title every act: a short text (100 to
//                           130 words) read for the act's balance
//     7. CHECK              the gated act check
//
//    1  Le témoin sincère            6   evening of testimonies scene (« il
//                                         ment » for « il se trompe »), goals,
//                                         the write-up, recap of b2.28, b2.29,
//                                         b1.34 and c1.12, useCases
//    2  Sincère, véridique, vraisemblable 7  la véracité, en toute sincérité
//    3  Mentir ou se tromper          7   tromper, induire en erreur, mentir
//                                         par omission, pieux mensonge, bonne
//                                         et mauvaise foi
//    4  Infox ou erreur               7   FranceTerme and OQLF, information
//                                         fallacieuse, nouvelle satirique,
//                                         rumeur, relayer, l'intox
//    5  Morale, éthique, déontologie  7   a newspaper's code read in full;
//                                         faire la morale, le moral, immoral
//                                         and amoral
//    6  Remords, regret, honte        7   culpabilité, mauvaise conscience,
//                                         avoir conscience de, conscience
//                                         professionnelle
//    7  Intègre, pas intégral         7   probité, scrupules, conflit
//                                         d'intérêts, cautionner
//    8  Le joli, le beau, le sublime  7   un beau geste, embellir, Boileau
//    9  Le goût et l'esthétique       7   de mauvais goût, kitsch, criard,
//                                         esthète, avoir beau + infinitif
//   10  Mémoire et souvenir           7   the pupils' article read in full;
//                                         se rappeler, à la mémoire de, de
//                                         mémoire d'homme, trou de mémoire
//   11  Commémorer, se souvenir       7   fêter / commémorer / célébrer,
//                                         histoire / mémoire, devoir et travail
//                                         de mémoire, lieu de mémoire, loi
//                                         mémorielle (literacy only)
//   12  Ta réponse                   11   model reply, plan, role play, TASK,
//                                         practice, quiz, review
//
//   TOTAL 87 missions, 12 acts. Corpus: 160 authored rows (.1200-.1359) in
//   twelve blocks plus 48 reused rows (43 Postgres-only in PG_ROWS, 5 in
//   seedPlusPacks), released act by act through `deckTranche`. Texts: 4
//   readings of 170 to 290 words (the write-up, a newspaper's code, the
//   pupils' article, the model reply), 10 « Dans un texte » paragraphs, one
//   scene, stories, hideLines listenings, one role play. Quiz: 12 rounds of 8
//   (one per act 2 to 11, a recycling round citing b1.34, b2.28, b2.29 and
//   c1.12, a « comme à l'examen » round). Chapter artwork:
//   `notions-morales-image-prompts.md`, twelve prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (a later lesson may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Chaque mot pèse autre chose : dis ce que tu poses sur la balance. »
//   EN: Each word weighs something different: say what you are putting on
//   the scales.
//
//   ONE METAPHOR, LA BALANCE: a pair of scales; each word of the field weighs
//   something different (intention or facts, a fault or a loss, one person or
//   a group, a light pleasure or an overwhelming grandeur). Rejected
//   candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the moral, aesthetic and memorial headwords at C1 (wave 5
//           ownership): sincère / véridique / vraisemblable; mentir / se
//           tromper / tromper; infox / fausse nouvelle / information
//           fallacieuse / erreur, both norms marked; morale / éthique /
//           déontologie; remords / regret / honte / culpabilité; intègre /
//           intégral; le joli / le beau / le sublime; le goût, l'esthétique;
//           souvenir / mémoire; commémorer / fêter / célébrer; histoire /
//           mémoire, devoir et travail de mémoire; and the reply that says what
//           someone's words really weighed.
//   QUOTES  the reframes of b1.34, b2.28, b2.29 and c1.12, re-exported from
//           their corpus files; rows of b1.34, b2.28, b2.29 and 43 Postgres
//           bank rows (philosophie, ethique, valeurs, b1 themes) reused BY ID;
//           one PD line of Boileau, verified on Wikisource.
//   LEAVES  croire / savoir, cause / raison, sophisme / paralogisme and the
//           verbs of proof to c1.12 (cited, never re-taught); political and
//           social headwords to c1.15; intensity and connotation as a system
//           to c1.17; the historical references themselves to c1.13.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   C1: unsimplified French; English authored on every learner string (an
//   `en` field or a final « EN: »), never on an answer. tu in every
//   instruction; characters use what the situation needs (the reply in the
//   task is written in vous to an unknown reader). Every `say` is French. No
//   « ? » or « ! » in any scene or story bubble. Other lessons cited by trail
//   position in words, read from the seed units; c1.12 and c1.17 are typed
//   from the plan (IDEES_REF, NEXT_REF_PLANNED). Mission answer slots spread
//   by `spreadMissions()`, the quiz by `spreadSlots()` (no text changes; no
//   `why` names a position), as c1.12. Wave 5 review lessons applied:
//   nothing correct is taught as an error (se rappeler de is a register
//   choice, never an errorSpot; morale and éthique are said to overlap); no
//   item with two defensible answers (typeIns list every correct synonym in
//   `accept`); the model answer copies no whole sentence of the reader's
//   letter and adds no figure; every listening names its speakers. Up to 4
//   tapTables (decision 16): acts 3, 5, 8 and 11. Unpadded tag (« C1 · LEÇON
//   16 »).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. FACT CHECK before publish: the thirteen claims in corpus §A.7
//      (FranceTerme JO 4 Oct 2018, the OQLF fiche « fausse nouvelle » 2018,
//      Boileau Épître IX, se rappeler de per the BDL, Code des professions
//      art. 87, the C-23.1 law title, the jour du Souvenir, Ricœur's title,
//      the 2001 law as a « loi mémorielle », the 2008 Assemblée nationale
//      mission, véracité per Larousse, standard senses, the invented dates).
//   2. Memorial laws appear only in sheet-memoire and one collocation card,
//      as literacy (what the term means, that it was debated), with one
//      example (the law of 21 May 2001) and no politician named. Keep the
//      example, or keep the term only?
//   3. Ricœur is cited by name and title (sheet-memoire, act 11 card), never
//      quoted. The brief allows it; c1.12 named no thinker at all. Keep?
//   4. « Se rappeler de quelque chose » is taught as a register choice
//      (OQLF: attested since the 18th century, grammarians reluctant), never
//      as an error. Agree, or keep it out entirely?
//   5. 43 reused rows are Postgres-only (PG_ROWS): the merge must carry them
//      and the gate preview needs them; 18 need the decision 13 typography
//      pass (corpus §A.5). fr.b2.recherche.079 « un conflit d'intérêts » is
//      reused instead of an authored twin.
//   6. c1.15 (ethique 1000-1199, same wave) may reuse ethique .050 « la
//      morale », .051 « l'éthique », .072 « la déontologie »: harmless (a row
//      may sit in two lessons), but the two authors did not coordinate.
//   7. `Lesson.skill` is 'CE' as the brief says, while the task is written
//      (as c1.12). `Lesson.version` is 1. 'coach-fr-FR' is inert; kept. The
//      twelve openers need art (ART_PENDING until Paul's images land).

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, PH, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, PG_ROWS, dicteeFor,
  LECTURE_TEMOINS, LECTURE_CHARTE, LECTURE_ECOLE, LECTURE_MODELE, MESSAGE_THERESE,
  TEXTE_A2, TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A11,
  B134_REFRAME, B134_REFRAME_EN, B228_REFRAME, B228_REFRAME_EN, B229_REFRAME, B229_REFRAME_EN,
  C112_REFRAME, C112_REFRAME_EN,
  MEDIAS_UNIT, SOINS_UNIT, SCIENCE_UNIT,
  MEDIAS_REF, SOINS_REF, SCIENCE_REF, IDEES_REF, NEXT_REF_PLANNED,
} from './notions-morales-corpus.ts';
import { NOTIONS_MORALES_TERMS } from './notions-morales-terms.ts';

const seed = seedPlusPacks();

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS (as c1.12)
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
const PG = new Map<string, SrcItem>(PG_ROWS.map((r) => [r.id, r]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));
const OWN = new Set(ALL_ROWS.map((r) => r.id));

/** An item's fr/en, from this corpus, the seed, or the Postgres-only rows.
 *  Throws on a typo, so no section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id) ?? PG.get(id);
  if (!r) throw new Error(`c1.16: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

for (const id of IMPORT_IDS) {
  if (!SEED.has(id) && !PG.has(id)) throw new Error(`c1.16: import ${id} is in neither the seed nor PG_ROWS`);
}

function ipaOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.ipa) throw new Error(`c1.16: no authored ipa on ${id}`);
  return r.ipa;
}
/** The AUTHORED row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.16: no authored respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const uc = (situation: string, id: string) => ({ situation, fr: fr(id), en: en(id) });
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

/** THE « DANS UN TEXTE » BEAT that closes acts 2 to 11. */
function dansUnTexte(
  id: string, frSub: string, text: string, questions: { q: string; a: string }[], rec: string, terms: string[],
): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true,
    title: 'Dans un texte', frSub, text, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

const SOINS_ROW = 'fr.b2.soins.1144';
const SOINS_DECISION = 'fr.b2.soins.1146';
const SCIENCE_ROW = 'fr.b2.methode-scientifique.1075';
const MEDIAS_ROW = 'fr.b1.journalisme.1120';
const MEDIAS_CIRCULE = 'fr.b1.journalisme.1129';

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE TÉMOIN SINCÈRE
 *
 *  The problem: at the Société d'histoire's evening of testimonies, an old
 *  man's memory of the 1976 flood does not match the archives; someone says
 *  « il ment ». The learner writes the line for the record. Then the
 *  write-up, and the recap of b2.28, b2.29, b1.34 and c1.12 by trail
 *  position. NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const MENT = {
  fr: 'M. Lavoie ment sur la date de la crue.',
  ipa: '/mə.sjø la.vwa mɑ̃ syʁ la dat də la kʁy/',
  respell: '[muh-SYEU la-VWA | mahⁿ sür la DAT | duh la KRÜ]',
  en: 'Mr Lavoie is lying about the date of the flood. (Mentir says he knows it is false.)',
};

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Une phrase pour le registre', frSub: 'La Soirée des témoins',
  setting: { place: 'La salle paroissiale de Sainte-Ondine-du-Lac', city: 'Sainte-Ondine-du-Lac', time: 'lundi 9 mars, 19 h 30', ambience: 'des chaises pliantes, un micro, des photos de la crue au mur, un registre ouvert' },
  beats: [
    { kind: 'narration', text: 'Sainte-Ondine-du-Lac, au Québec. La Société d’histoire recueille les souvenirs de la crue d’avril 1976, pour ses cinquante ans. M. Gérard Lavoie, quatre-vingt-huit ans, vient de raconter un dimanche matin, l’eau jusqu’aux marches de l’église. Les archives disent mardi, et le bureau de poste.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Un homme au fond', fr: 'Alors il ment, tout simplement.', en: 'So he is just lying.', respell: '[a-LOR eel MAHⁿ | too sehⁿ-pluh-MAHⁿ]', stage: 'Plusieurs têtes se tournent vers M. Lavoie.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Hélène, la secrétaire', fr: 'Tu tiens le registre ce soir. Écris une phrase juste, qu’on puisse garder.', en: 'You are keeping the record tonight. Write a fair sentence we can keep.', respell: '[tü tyehⁿ luh ruh-ZHEESTR suh SWAR | ay-KREE ün FRAHZ ZHÜST | kohⁿ pweess gar-DAY]', stage: 'Elle te tend le stylo.', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'Tu veux être exact. M. Lavoie croit tout ce qu’il raconte ; ce sont ses dates qui ne tiennent pas.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle phrase écris-tu dans le registre ?', size: 'lg',
      options: [
        { fr: MENT.fr, respell: MENT.respell, en: MENT.en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1200)), respell: rsOf(E(1200)), en: en(E(1200)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'M. Lavoie hoche la tête. La salle se calme : personne ne l’accuse, on corrige seulement les dates.',
        breaks: 'M. Lavoie se lève, blessé, et quitte la salle. Mentir, c’est dire faux en le sachant : tu viens d’écrire qu’il savait.',
      },
    },
    {
      kind: 'break', heading: 'Sincère, mais pas exact',
      body: 'Mentir pèse une intention : dire faux en le sachant. M. Lavoie ne savait pas ; il est sincère, c’est son souvenir qui n’est pas exact. Chaque mot pèse autre chose. EN: Lying weighs an intention; he is sincere, his memory is inaccurate.',
      wrong: { fr: MENT.fr, ipa: MENT.ipa, respell: MENT.respell, en: MENT.en },
      right: { fr: fr(E(1200)), ipa: ipaOf(E(1200)), respell: rsOf(E(1200)), en: en(E(1200)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Hélène relit ta phrase et la garde. Cette leçon t’apprend à dire ce que pèse chaque mot du vrai, du bien, du beau et du souvenir. À la fin, tu répondras par écrit à une lectrice qui les confond.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['sincerite', 'balance'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Juger un récit sans accuser la personne', s: 'Actes 2 à 4 : sincère ou véridique, mentir ou se tromper, infox ou erreur' },
    { t: 'Dire de quel bien tu parles', s: 'Actes 5 à 7 : morale, éthique, déontologie, remords, intégrité' },
    { t: 'Nuancer un jugement sur le beau', s: 'Actes 8 et 9 : joli, beau, sublime, le goût' },
    { t: 'Parler de mémoire avec justesse', s: 'Actes 10 à 12 : souvenir, mémoire, commémoration, ta réponse' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'Le compte rendu de la soirée', frSub: 'Lis, et repère ce que chaque mot juge',
  text: LECTURE_TEMOINS,
  glossary: [
    { word: 'recueille', en: 'collects', note: 'Recueillir des souvenirs, des témoignages : les rassembler avec soin.' },
    { word: 'barque', en: 'rowing boat', note: 'Un petit bateau à rames.' },
    { word: 'tranché', en: 'settled', note: 'Trancher une question : décider.' },
  ],
  questions: [
    { q: 'Global : à quoi sert ce texte ?', a: 'À rendre compte de la Soirée des témoins : il résume le récit de M. Lavoie, la discussion qui a suivi, la règle retenue, et annonce la prochaine soirée.' },
    { q: 'Détail : sur quels deux points le souvenir de M. Lavoie diffère-t-il des archives ?', a: 'Le jour (un dimanche pour lui, le mardi 13 avril selon les archives) et le niveau de l’eau (les marches de l’église pour lui, le bureau de poste selon les archives).' },
    { q: 'Détail : pourquoi le ton est-il monté ?', a: 'Quelqu’un a dit que M. Lavoie mentait.' },
    { q: 'Inférence : pourquoi la secrétaire écrit-elle « comme chacun de nous se tromperait » ?', a: 'Pour montrer qu’une erreur de mémoire après cinquante ans est normale, et qu’elle ne dit rien de la sincérité du témoin.' },
    { q: 'Inférence : que veut dire « la mémoire d’un village n’est pas encore son histoire » ?', a: 'Les souvenirs que garde le village ne sont pas encore des faits vérifiés par des sources, comme les archives.' },
    { q: 'Position : quelle règle la Société retient-elle ?', a: 'Avant de juger un témoignage, se demander si l’on juge la personne ou le récit.' },
  ],
  audio: REC('rec-c1-16-soiree'), say: REFRAME, terms: ['sincerite', 'balance'],
};

const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: 'Le B1, le B2 et le C1, en renfort',
  groups: [
    grp('L’éthique, déjà rencontrée au B2', [
      it(SOINS_ROW, `${Cap(SOINS_REF)} : le consentement du patient`),
      it(SOINS_DECISION, `${Cap(SOINS_REF)} : une décision éclairée`),
      it(SCIENCE_ROW, `${Cap(SCIENCE_REF)} : quand la recherche se corrige`),
    ], chk('« Donner son consentement éclairé » : qu’est-ce qui rend un consentement éclairé ?',
      ['avoir compris ce qu’on accepte', 'avoir signé vite', 'avoir confiance au médecin'], 0,
      'Éclairé : après avoir compris. Une question d’éthique du soin, que tu as vue au B2. EN: having understood what you accept.')),
    grp('Le vrai, déjà rencontré au B1', [
      it(MEDIAS_ROW, `${Cap(MEDIAS_REF)} : les deux mots`),
      it(MEDIAS_CIRCULE, `${Cap(MEDIAS_REF)} : une nouvelle qui circule`),
      it(PH(244), 'une phrase sur la vérité, déjà dans la banque'),
    ], chk('Au B1, tu as appris « une fausse nouvelle, une infox ». Ici, tu vas surtout apprendre…',
      ['qui recommande quel mot, et ce qui sépare une infox d’une erreur', 'à repérer une photo truquée'], 0,
      'La photo truquée est acquise. Ici, tu pèses l’intention de tromper. EN: who recommends which word, and intent.')),
    ctl('La méthode', `${Cap(IDEES_REF)} t’a donné une méthode : « ${C112_REFRAME} » Ici, la question devient…`,
      ['ce que chaque mot pèse', 'quel mot est le plus savant', 'quel mot est le plus court'], 0,
      `Même méthode, question précise : que pose chaque mot sur la balance ? EN: ${C112_REFRAME_EN}`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['balance'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Là où un mot blesse ou protège',
  cases: [
    uc('Tu rapportes un témoignage inexact sans accuser', E(1200)),
    uc('Tu sépares la personne et son récit', E(1208)),
    uc('Tu dis ce qu’on garde pour une plaque', E(1209)),
    uc('Tu défends la valeur d’un témoin', E(1210)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['balance'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le mot juste', 'M. Lavoie croit ce qu’il raconte, mais ses dates sont fausses. Il…',
    ['se trompe', 'ment', 'triche'], 0,
    'Il croit dire vrai : il se trompe. EN: he is mistaken.'),
  ctl('La méthode', 'Deux mots jugent la même scène. Avant de choisir, tu…',
    ['dis ce que chacun pèse', 'prends le plus dur'], 0,
    `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('Le renfort', 'Dans cette leçon, croire et savoir, vus à la leçon 12 du C1, sont…',
    ['supposés connus', 'enseignés de nouveau'], 0,
    'Ils sont cités, jamais réenseignés. EN: assumed known.'),
], ['balance']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le témoin sincère',
    opener: {
      line: 'Un vieil homme ému, des archives qui le contredisent : ici tu découvres qu’un seul mot peut accuser ou protéger. EN: A moved old man, archives that contradict him: here you see that one word can accuse or protect.',
      imageRef: 'lessons/notions-morales/act01.jpg',
    },
    sections: [],
    milestone: 'Tu rapportes un témoignage inexact sans accuser son auteur, et tu sais que chaque mot pèse autre chose. EN: You can report an inaccurate testimony without accusing its author, and you know each word weighs something different.',
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — SINCÈRE, VÉRIDIQUE, VRAISEMBLABLE
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a2-histoire', layer: 'core',
  title: 'Le livre de Mopti', frSub: 'Sincère ne veut pas dire vrai',
  setting: 'Au club de lecture de Sainte-Ondine, Fatoumata et Hélène parlent d’un récit d’enfance que le club vient de lire.',
  bubbles: [
    { from: 'narrator', fr: 'Le livre est posé sur la table, plein de marque-pages. Fatoumata a souligné des dates.', en: 'The book lies on the table, full of bookmarks. Fatoumata has underlined some dates.' },
    { from: 'user', fr: 'J’ai adoré ce livre. On sent qu’elle dit ce qu’elle a vécu.', en: 'I loved this book. You can feel she is telling what she lived through.' },
    { from: 'coach', fr: fr(E(1218)), en: en(E(1218)), warn: 'Sincérité' },
    { from: 'user', fr: 'Pourtant, Fatoumata a trouvé trois dates impossibles.', en: 'Yet Fatoumata found three impossible dates.' },
    { from: 'coach', fr: fr(E(1219)), en: en(E(1219)), warn: 'Véracité' },
    { from: 'user', fr: 'Et la scène du lion au marché, elle l’a inventée.', en: 'And the scene with the lion at the market, she made it up.' },
    { from: 'coach', fr: 'Dans le récit, elle est vraisemblable. Elle l’annonce d’ailleurs en postface.', en: 'Within the story it is plausible. She says so in the afterword, too.', warn: 'Vraisemblable' },
    { from: 'coach', fr: fr(E(1223)), en: en(E(1223)), warn: 'La règle' },
  ],
  closing: { fr: 'Un livre peut être sincère sans être toujours véridique.', en: 'A book can be sincere without always being truthful.' },
  audio: REC('rec-c1-16-club'), say: REFRAME, terms: ['sincerite'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-vrai',
  title: 'Trois adjectifs, trois balances', frSub: 'La personne, le récit, l’apparence',
  hint: 'Quatre cartes. Demande-toi chaque fois : ce mot pèse-t-il la personne, le récit ou l’apparence ?',
  audio: REC('rec-c1-16-vrai-cartes'), say: REFRAME, terms: ['sincerite'],
  cards: [
    { head: 'La personne', label: 'sincère', fr: fr(E(1212)), sub: rsOf(E(1212)),
      body: 'Sincère : on dit ce qu’on pense. La sincérité ne garantit pas que c’est vrai. EN: the speaker means it.' },
    { head: 'Le récit', label: 'véridique, la véracité', fr: fr(E(1213)), sub: rsOf(E(1213)),
      body: 'Véridique : conforme aux faits. La véracité s’emploie surtout pour un récit, un témoignage. Soutenu. EN: the account matches the facts.' },
    { head: 'L’apparence', label: 'vraisemblable', fr: fr(E(1214)), sub: rsOf(E(1214)),
      body: 'Vraisemblable : qui a l’air vrai. Un mensonge habile est vraisemblable ; une vérité étrange peut sembler invraisemblable. EN: it looks true.' },
    { head: 'La formule', label: 'en toute sincérité', fr: fr(E(1225)), sub: rsOf(E(1225)),
      body: 'En toute sincérité : la personne s’engage sur ce qu’elle pense, pas sur les faits. EN: in all sincerity.' },
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-construire', layer: 'core', size: 'lg',
  title: 'La personne ou le récit', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('On pèse la personne', [
      it(E(1215), 'la famille'),
      it(E(1218), 'parler avec sincérité'),
      it('fr.b1.negation-et-restriction.172', 'aucun doute sur la personne'),
      it(E(1203), 'sincère et dans l’erreur'),
    ], chk('« Nous n’avons aucun doute sur sa sincérité. » On est sûr…',
      ['qu’elle pense ce qu’elle dit', 'que ce qu’elle dit est vrai'], 0,
      'La sincérité pèse la personne, pas les faits. EN: that she means it.')),
    grp('On pèse le récit', [
      it(E(1216), 'la famille'),
      it(E(1222), 'vérifier la véracité'),
      it(E(1224), 'conforme aux faits'),
      it(PH(48), 'le mot général'),
    ], chk('Le journaliste « a vérifié la véracité des faits ». Il a vérifié…',
      ['que les faits rapportés sont exacts', 'que le témoin est sincère'], 0,
      'La véracité pèse le récit. EN: that the facts are accurate.')),
    ctl('L’apparence', '« Son histoire est vraisemblable, mais elle est fausse. » C’est…',
      ['possible : vraisemblable ne pèse que l’apparence', 'contradictoire'], 0,
      'Avoir l’air vrai n’est pas être vrai. EN: possible.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sincerite'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a2-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Sincère pèse la personne',
    body: 'Quand tu parles de ce qu’une personne pense, dis sincère. Quand tu parles des faits, dis vrai, exact ou véridique. Quand ça a seulement l’air vrai, dis vraisemblable. EN: sincere for the speaker, true or truthful for the facts, plausible for appearances.',
  },
  cards: [
    trap(E(1219), 'sincérité et véracité', 'Personne ne doute de sa véracité ; on doute de la sincérité de son récit.', 'La personne est sincère ; c’est le récit dont on doute. EN: swapped.'),
    trap(E(1220), 'vraisemblable', 'Son histoire est véridique, mais elle est fausse.', 'Véridique et fausse se contredisent. Ce qui a l’air vrai : vraisemblable. EN: vraisemblable.'),
    trap(E(1203), 'sincère', 'Un témoin peut être véridique et se tromper.', 'Véridique, c’est conforme aux faits : il ne se trompe donc pas. Le mot est sincère. EN: sincère.'),
    trap(E(1222), 'la véracité des faits', 'Le journaliste a vérifié la sincérité des faits.', 'Des faits ne sont pas sincères : on vérifie leur véracité. EN: véracité.'),
    trap(E(1221), 'invraisemblable', 'C’est insincère, et pourtant c’est vrai.', 'Ce qui semble faux et qui est vrai : invraisemblable. EN: invraisemblable.'),
    trap(E(1225), 'en toute sincérité', 'En toute véracité, je ne me souviens plus de la date.', 'La formule figée est en toute sincérité. EN: fixed phrase.'),
  ],
  drill: [
    { promptSay: 'Elle a parlé avec une grande … .', opts: ['sincérité', 'véracité'], correct: 0 },
    { promptSay: 'On doute de la … de son récit.', opts: ['véracité', 'sincérité'], correct: 0 },
    { promptSay: 'Son histoire est …, mais elle est fausse.', opts: ['vraisemblable', 'véridique'], correct: 0 },
    { promptSay: 'Ce récit est … : tout s’est passé ainsi.', opts: ['véridique', 'vraisemblable'], correct: 0 },
    { promptSay: 'Un témoin peut être … et se tromper.', opts: ['sincère', 'véridique'], correct: 0 },
    { promptSay: 'C’est …, et pourtant c’est vrai.', opts: ['invraisemblable', 'insincère'], correct: 0 },
    { promptSay: 'En toute …, je ne m’en souviens plus.', opts: ['sincérité', 'véracité'], correct: 0 },
    { promptSay: 'Le journaliste a vérifié la … des faits.', opts: ['véracité', 'sincérité'], correct: 0 },
  ],
  steps: STEPS('Sincère pèse la personne', 'Six phrases à redresser'),
  audio: REC('rec-c1-16-piege-vrai'), say: REFRAME, terms: ['sincerite'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a2-ecoute', layer: 'core', hideLines: true,
  title: 'Huit phrases entendues', frSub: 'Hélène commente les témoignages',
  lines: [
    ln(E(1218)), ln(E(1219)), ln(E(1220)), ln(E(1221)),
    ln(E(1222)), ln(E(1224)), ln(PH(270)), ln(E(1225)),
  ],
  questions: [
    { q: 'Hélène, première phrase : la témoin croyait-elle ce qu’elle disait ?', opts: ['oui, elle était sincère', 'non, elle mentait'], correct: 0, why: 'Une grande sincérité : elle pensait ce qu’elle disait. EN: yes.' },
    { q: 'Deuxième phrase : de quoi doute-t-on ?', opts: ['du récit', 'de la personne'], correct: 0, why: 'On doute de la véracité du récit, pas de sa sincérité. EN: the account.' },
    { q: 'Troisième phrase : l’histoire est-elle vraie ?', opts: ['non, elle en a seulement l’air', 'oui'], correct: 0, why: 'Vraisemblable, mais fausse. EN: no.' },
    { q: 'Quatrième phrase : le fait est-il vrai ?', opts: ['oui, même s’il semble impossible', 'non'], correct: 0, why: 'Invraisemblable, et pourtant vrai. EN: yes.' },
    { q: 'Septième phrase : que personne ne peut faire ?', opts: ['prétendre détenir toute la vérité', 'dire la vérité'], correct: 0, why: 'Nul ne peut se targuer de détenir la vérité absolue. EN: claim to hold the whole truth.' },
  ],
  audio: REC('rec-c1-16-vrai-ecoute'), say: REFRAME, terms: ['sincerite'],
};

const A2_TEXTE = dansUnTexte('a2-texte', 'Lire : une critique de livre', TEXTE_A2, [
  { q: 'Que pèse la critique quand elle parle de « sincérité » ?', a: 'L’autrice : elle dit ce qu’elle a ressenti, sans pose.' },
  { q: 'Pourquoi le livre n’est-il « pas toujours véridique » ?', a: 'Il contient des dates impossibles, et l’éditeur a reconnu deux erreurs.' },
  { q: 'Pourquoi la critique refuse-t-elle de parler de mensonge ?', a: 'L’autrice ne cherche pas à tromper : elle se trompe sur des dates et annonce elle-même la scène inventée.' },
  { q: 'Que veut dire « vraisemblable dans le récit » pour la scène du lion ?', a: 'Elle a l’air vraie dans l’histoire, mais elle a été imaginée.' },
], 'rec-c1-16-texte-a2', ['sincerite']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La personne', 'Elle dit exactement ce qu’elle pense. Elle est…',
    ['sincère', 'véridique', 'vraisemblable'], 0,
    'Sincère pèse la personne. EN: sincere.'),
  ctl('Le récit', 'Pour dire, en registre soutenu, qu’un témoignage est conforme aux faits, on parle de sa…',
    ['véracité', 'sincérité'], 0,
    'La véracité pèse le récit. EN: truthfulness.'),
  ctl('L’apparence', 'Un mensonge bien construit est souvent…',
    ['vraisemblable', 'véridique'], 0,
    'Il a l’air vrai, sans l’être. EN: plausible.'),
], ['sincerite']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Sincère, véridique, vraisemblable',
    opener: {
      line: 'Un beau récit d’enfance et trois dates impossibles : ici tu sépares la sincérité d’une personne et la vérité d’un récit. EN: A fine childhood memoir and three impossible dates: here you separate a person’s sincerity from an account’s truth.',
      imageRef: 'lessons/notions-morales/act02.jpg',
    },
    sections: [],
    milestone: 'Tu dis sincère pour la personne, véridique pour le récit et vraisemblable pour l’apparence. EN: You say sincère for the speaker, véridique for the account and vraisemblable for appearances.',
    estScreens: 38, restPoints: ['a2-construire', 'a2-ecoute'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_CONSTRUIRE, A2_PIEGE, A2_ECOUTE, A2_TEXTE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — MENTIR OU SE TROMPER
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a3-histoire', layer: 'core',
  title: 'La voiture d’occasion', frSub: 'Qui ment, qui se trompe',
  setting: 'Samira, à Gatineau, appelle son frère Karim : la voiture qu’elle vient d’acheter a déjà eu un accident.',
  bubbles: [
    { from: 'narrator', fr: 'Samira tient le rapport du garage d’une main, son téléphone de l’autre.', en: 'Samira holds the garage report in one hand, her phone in the other.' },
    { from: 'user', fr: 'Le vendeur m’a juré qu’elle n’avait jamais eu d’accident. Le rapport du garage le mentionnait.', en: 'The seller swore it had never had an accident. The garage report mentioned it.' },
    { from: 'coach', fr: 'Il le savait, donc il a menti. Ce n’est pas une erreur.', en: 'He knew, so he lied. It is not a mistake.', warn: 'Mentir' },
    { from: 'user', fr: 'Et le site affichait un faux kilométrage, recopié d’une vieille fiche.', en: 'And the site showed a wrong mileage, copied from an old listing.' },
    { from: 'coach', fr: 'Le site s’est trompé, mais il t’a induite en erreur. L’effet est le même, pas l’intention.', en: 'The site made a mistake, but it misled you. The effect is the same, not the intention.', warn: 'Induire en erreur' },
    { from: 'user', fr: 'Il n’a pas parlé des freins non plus.', en: 'He did not mention the brakes either.' },
    { from: 'coach', fr: fr(E(1233)), en: en(E(1233)), warn: 'Par omission' },
    { from: 'coach', fr: fr(E(1236)), en: en(E(1236)), warn: 'La règle' },
  ],
  closing: { fr: 'Le menteur sait ; celui qui se trompe croit.', en: 'The liar knows; the one who is wrong believes.' },
  audio: REC('rec-c1-16-voiture'), say: REFRAME, terms: ['mensonge'],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-table', layer: 'core', sheetId: 'sheet-vrai',
  title: 'Six façons de dire faux',
  cols: ['Expression', 'Ce qu’elle pèse', 'Intention ?'],
  rows: [
    { cells: ['mentir', 'dire faux en le sachant', 'oui'], say: fr(E(1232)),
      detail: { title: 'Mentir', body: 'Le menteur sait que c’est faux. Il peut mentir effrontément, ou par petites touches. EN: knowingly saying what is false.', say: fr(E(1237)) } },
    { cells: ['se tromper', 'dire faux en croyant dire vrai', 'non'], say: fr(E(1230)),
      detail: { title: 'Se tromper', body: 'On croit dire vrai. Un témoin, un site, un expert peuvent se tromper de bonne foi. EN: believing the false is true.', say: fr(E(1239)) } },
    { cells: ['tromper qqn', 'l’amener à croire le faux', 'souvent'], say: fr(E(1231)),
      detail: { title: 'Tromper quelqu’un', body: 'Le plus souvent exprès : on l’a trompé sur le prix. Se tromper, avec se, c’est l’erreur. EN: to deceive.', say: fr(E(1231)) } },
    { cells: ['induire en erreur', 'faire croire le faux', 'pas forcément'], say: fr(E(1234)),
      detail: { title: 'Induire en erreur', body: 'Un panneau, une phrase ambiguë peuvent induire en erreur sans le vouloir. Soutenu. EN: to mislead.', say: fr(E(1234)) } },
    { cells: ['mentir par omission', 'taire ce qui compte', 'oui'], say: fr(E(1233)),
      detail: { title: 'Par omission', body: 'Rien de faux n’est dit ; ce qui compte est tu. On le juge comme un mensonge. EN: lying by omission.', say: fr(E(1226)) } },
    { cells: ['un pieux mensonge', 'mentir pour épargner', 'oui, bienveillante'], say: fr(E(1238)),
      detail: { title: 'Un pieux mensonge', body: 'Un mensonge pour protéger ou épargner. Le juger est une question morale, pas de vocabulaire. EN: a white lie.', say: fr(E(1227)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['mensonge'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-construire', layer: 'core', size: 'lg',
  title: 'Savoir ou croire dire vrai', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('On sait que c’est faux', [
      it('fr.b2.ethique.081', 'le mot du B2'),
      it(E(1232), 'effrontément'),
      it(E(1235), 'de mauvaise foi'),
      it('fr.b2.ethique.043', 'cacher la vérité'),
    ], chk('« Il est de mauvaise foi. » Cela veut dire…',
      ['il sait que c’est faux, ou refuse de le voir', 'il se trompe sans le savoir'], 0,
      'La mauvaise foi pèse une intention. EN: he knows, or refuses to see.')),
    grp('On croit dire vrai', [
      it(E(1229), 'de bonne foi'),
      it(E(1239), 'je ne savais pas'),
      it(E(1230), 'qui se trompe croit dire vrai'),
      it(E(1228), 'avec ou sans intention'),
    ], chk('Un panneau mal placé a envoyé les visiteurs au mauvais endroit. Il les a…',
      ['induits en erreur', 'menti'], 0,
      'Un panneau ne ment pas : il induit en erreur. EN: misled them.')),
    ctl('Le pieux mensonge', '« Un pieux mensonge » est…',
      ['un mensonge dit pour épargner quelqu’un', 'une erreur sans gravité'], 0,
      'C’est bien un mensonge, avec une intention bienveillante. EN: a lie meant kindly.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['mensonge'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a3-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre façons d’accuser à tort',
  errors: [
    { wrong: 'Il ne ment pas : il trompe de date.', right: fr(E(1201)),
      why: 'Normal : tromper et se tromper se ressemblent. Mais l’erreur, c’est se tromper, avec le pronom ; tromper quelqu’un, c’est le duper. EN: se tromper.' },
    { wrong: 'Je l’ai dit de bon foi ; je ne savais pas que c’était faux.', right: fr(E(1239)),
      why: 'Normal : on dit un bon ami. Mais foi est féminin : de bonne foi. EN: bonne foi.' },
    { wrong: 'Ce panneau a induit les visiteurs à erreur.', right: fr(E(1234)),
      why: 'Normal : on pense à inciter à. L’expression figée est induire en erreur. EN: en erreur.' },
    { wrong: 'En taisant le défaut, le vendeur a menti par omis.', right: fr(E(1233)),
      why: 'Normal : on cherche un participe. L’expression est figée : mentir par omission. EN: par omission.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['mensonge'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a3-exemples', layer: 'core',
  title: 'La vérité et le mensonge, dans la banque', frSub: 'Des phrases déjà publiées',
  examples: [
    ex(PH(299), 'la vérité peut coûter plus que le mensonge'),
    ex(PH(259), 'une question morale, pas de vocabulaire'),
    ex('fr.b1.amis.044', 'la franchise : dire sans détour'),
    ex(E(1238), 'un pieux mensonge, à discuter'),
    ex(E(1237), 'avouer son mensonge'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['mensonge'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Lire : une chronique radio', TEXTE_A3, [
  { q: 'Pourquoi la chronique dit-elle que le vendeur a menti ?', a: 'Il savait que la voiture avait eu un accident : le rapport du garage le mentionnait.' },
  { q: 'Le site d’annonces a-t-il menti ?', a: 'Non : il s’est trompé en recopiant une ancienne fiche, mais il a induit l’acheteuse en erreur.' },
  { q: 'Qu’est-ce que le vendeur a fait d’autre ?', a: 'Il a menti par omission : il n’a jamais parlé des freins usés.' },
  { q: 'Quelle différence la chronique fait-elle entre le vendeur et le site ?', a: 'L’intention : le vendeur savait, le site non.' },
], 'rec-c1-16-texte-a3', ['mensonge']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('L’intention', 'Il dit faux en croyant dire vrai. Il…',
    ['se trompe', 'ment', 'trompe'], 0,
    'Sans intention : se tromper. EN: he is mistaken.'),
  ctl('Le silence', 'Taire un défaut que l’on connaît, c’est…',
    ['mentir par omission', 'se tromper'], 0,
    'On sait, et l’on se tait. EN: lying by omission.'),
  ctl('La chose', 'Un panneau ambigu peut…',
    ['induire en erreur', 'mentir'], 0,
    'Une chose ne ment pas : elle induit en erreur. EN: mislead.'),
], ['mensonge']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Mentir ou se tromper',
    opener: {
      line: 'Une voiture d’occasion, un vendeur trop sûr de lui : ici tu sépares celui qui ment de celui qui se trompe. EN: A used car and an overconfident seller: here you separate the one who lies from the one who is wrong.',
      imageRef: 'lessons/notions-morales/act03.jpg',
    },
    sections: [],
    milestone: 'Tu sais qui ment, qui se trompe et qui induit en erreur, et tu nommes un mensonge par omission. EN: You can tell who lies, who is wrong and who misleads, and name a lie by omission.',
    estScreens: 38, restPoints: ['a3-table', 'a3-erreurs'],
  },
  sections: [A3_HISTOIRE, A3_TABLE, A3_CONSTRUIRE, A3_ERREURS, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — INFOX OU ERREUR (past b1.34, which owns the two words)
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'Le Fil de l’Estuaire', frSub: 'Une journaliste, Inès Morin, fait le point',
  lines: [
    ln(E(1245)), ln(E(1246)), ln(E(1247)), ln(E(1248)),
    ln(E(1249)), ln(E(1251)), ln(E(1252)), ln(E(1253)),
  ],
  questions: [
    { q: 'Inès Morin, première phrase : une infox est-elle seulement fausse ?', opts: ['non, elle peut aussi être délibérément biaisée', 'oui, seulement fausse'], correct: 0, why: 'Mensongère ou délibérément biaisée : la définition officielle. EN: it can be deliberately slanted.' },
    { q: 'Deuxième phrase : quel terme l’OQLF privilégie-t-il ?', opts: ['fausse nouvelle', 'infox', 'fake news'], correct: 0, why: 'Au Québec : fausse nouvelle. EN: fausse nouvelle.' },
    { q: 'Quatrième phrase : le site satirique veut-il tromper ?', opts: ['non', 'oui'], correct: 0, why: 'Une nouvelle satirique veut faire rire. EN: no.' },
    { q: 'Cinquième phrase : la voisine voulait-elle tromper ?', opts: ['non, elle était de bonne foi', 'oui'], correct: 0, why: 'Elle a relayé de bonne foi. EN: no.' },
    { q: 'Septième phrase : qu’était-ce, finalement ?', opts: ['une erreur de date', 'une infox'], correct: 0, why: 'Une erreur, sans intention de tromper. EN: a mistake in the date.' },
    { q: 'Dernière phrase : que déconseille l’OQLF ?', opts: ['l’emprunt anglais', 'le mot infox'], correct: 0, why: 'L’OQLF déconseille fake news et marque infox comme un mot de France. EN: the English borrowing.' },
  ],
  audio: REC('rec-c1-16-infox-ecoute'), say: REFRAME, terms: ['infox'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-vrai',
  title: 'Qui recommande quel mot', frSub: 'La France, le Québec, et l’intention',
  hint: 'Quatre cartes. La première vient de la leçon 34 du B1.',
  audio: REC('rec-c1-16-infox-cartes'), say: REFRAME, terms: ['infox'],
  cards: [
    { head: 'Les deux mots', label: Cap(MEDIAS_REF), fr: fr(MEDIAS_ROW), sub: '[ün fohss noo-VEL, ü-nehⁿ-FOX]',
      body: 'Tu les connais depuis le B1. Ici, tu apprends qui les recommande, et ce qu’ils pèsent. EN: you know both words; here, who recommends them and what they weigh.' },
    { head: 'En France', label: 'infox, information fallacieuse', fr: fr(E(1240)), sub: rsOf(E(1240)),
      body: 'La Commission d’enrichissement de la langue française les recommande depuis le Journal officiel du 4 octobre 2018. Infox vient d’information et d’intoxication. EN: France’s official terms since 2018.' },
    { head: 'Au Québec', label: 'fausse nouvelle', fr: fr(E(1246)), sub: rsOf(E(1246)),
      body: 'L’OQLF privilégie fausse nouvelle, retient aussi information fallacieuse, marque infox comme un mot de France et déconseille fake news. EN: Québec prefers fausse nouvelle.' },
    { head: 'Ce qui n’en est pas une', label: 'nouvelle satirique', fr: fr(E(1241)), sub: rsOf(E(1241)),
      body: 'Une nouvelle satirique veut faire rire, et une erreur de bonne foi n’a rien voulu. L’OQLF demande de ne pas les confondre avec une fausse nouvelle. EN: satire and good-faith mistakes are not fake news.' },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-construire', layer: 'core', size: 'lg',
  title: 'Tromper exprès, ou non', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('On veut tromper', [
      it(E(1245), 'la définition officielle'),
      it(E(1240), 'le terme soutenu'),
      it(E(1244), 'familier : une manœuvre'),
      it('fr.b2.ethique.240', 'laisser circuler de fausses informations'),
    ], chk('Un message faux, écrit par quelqu’un qui sait qu’il est faux et veut vendre des filtres, c’est…',
      ['une infox', 'une erreur', 'une nouvelle satirique'], 0,
      'Fausse et voulue : une infox, ou une fausse nouvelle au Québec. EN: fake news.')),
    grp('On ne veut pas tromper', [
      it(E(1241), 'faire rire'),
      it(E(1252), 'une erreur de date'),
      it(E(1249), 'relayer de bonne foi'),
      it(E(1242), 'sans source sûre'),
    ], chk('Ma voisine a relayé l’infox sans savoir qu’elle était fausse. Elle…',
      ['a été de bonne foi', 'a fabriqué une infox'], 0,
      'L’intention est celle de l’auteur ; qui relaie peut être de bonne foi. EN: she acted in good faith.')),
    ctl('Le registre', 'Dans une conversation entre amis, pour dire « c’est de la propagande », on entend…',
      ['c’est de l’intox', 'c’est une information fallacieuse'], 0,
      'L’intox est familier ; information fallacieuse est le terme soutenu. EN: c’est de l’intox.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['infox'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a4-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Pas d’infox sans intention',
    body: 'Garde infox ou fausse nouvelle pour ce qui veut tromper. Une erreur reste une erreur, une satire reste une satire. En France, infox est recommandé ; au Québec, fausse nouvelle est privilégié. EN: no fake news without intent to deceive.',
  },
  cards: [
    trap(E(1252), 'erreur, pas infox', 'Ce n’était pas une erreur, juste une infox de date.', 'Une date fausse donnée par erreur n’est pas une infox. EN: an error.'),
    trap(E(1248), 'satirique', 'Ce site d’infox ne cherche pas à tromper.', 'Un site qui fait rire sans vouloir tromper est satirique. EN: satirique.'),
    trap(E(1249), 'de bonne foi', 'Ma voisine a fabriqué l’infox de bonne foi.', 'On ne fabrique pas une infox de bonne foi : elle l’a relayée. EN: relayé.'),
    trap(E(1246), 'le terme québécois', 'Au Québec, l’OQLF privilégie « infox ».', 'L’OQLF privilégie fausse nouvelle ; il marque infox comme un mot de France. EN: fausse nouvelle.'),
    trap(E(1240), 'fallacieuse', 'une information fallacieusement', 'L’adjectif : une information fallacieuse. EN: adjective.'),
    trap(E(1245), 'la définition', 'Une infox est toujours une erreur sans intention.', 'Une infox est mensongère ou délibérément biaisée. EN: deliberate.'),
  ],
  drill: [
    { promptSay: 'Une … est mensongère ou délibérément biaisée.', opts: ['infox', 'erreur'], correct: 0 },
    { promptSay: 'Au Québec, on dit plutôt une … .', opts: ['fausse nouvelle', 'infox'], correct: 0 },
    { promptSay: 'Ce site … ne cherche pas à tromper.', opts: ['satirique', 'fallacieux'], correct: 0 },
    { promptSay: 'Elle a relayé l’infox de … foi.', opts: ['bonne', 'mauvaise'], correct: 0 },
    { promptSay: 'Une information … : le terme soutenu.', opts: ['fallacieuse', 'satirique'], correct: 0 },
    { promptSay: 'Ce n’était pas une infox, juste une … de date.', opts: ['erreur', 'rumeur'], correct: 0 },
    { promptSay: 'Une … n’est pas une information tant qu’on n’a pas de source.', opts: ['rumeur', 'satire'], correct: 0 },
    { promptSay: 'Familier : c’est de l’… .', opts: ['intox', 'infaux'], correct: 0 },
  ],
  steps: STEPS('Pas d’infox sans intention', 'Six phrases à redresser'),
  audio: REC('rec-c1-16-piege-infox'), say: REFRAME, terms: ['infox'],
};

const A4_FLASH: Sec<'flashcards'> = {
  type: 'flashcards', id: 'a4-flash', layer: 'core',
  title: 'Huit mots du vrai et du faux', frSub: 'De l’anglais au français',
  cards: [
    { front: 'fake news (France, official)', back: 'une infox, une information fallacieuse', say: fr(E(1245)) },
    { front: 'fake news (Québec, preferred)', back: 'une fausse nouvelle', say: fr(E(1246)) },
    { front: 'a satirical news story', back: 'une nouvelle satirique', say: fr(E(1248)) },
    { front: 'a baseless rumour', back: 'une rumeur infondée', say: fr(E(1251)) },
    { front: 'to pass on, to share further', back: 'relayer', say: fr(E(1249)) },
    { front: 'it is propaganda (informal)', back: 'c’est de l’intox', say: 'Ne crois pas ce message : c’est de l’intox.' },
    { front: 'in good faith', back: 'de bonne foi', say: fr(E(1239)) },
    { front: 'a mistake made in good faith', back: 'une erreur de bonne foi', say: fr(E(1252)) },
  ],
  audio: AUDIO, say: REFRAME, terms: ['infox'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Lire : une mise au point', TEXTE_A4, [
  { q: 'Pourquoi le premier message est-il une infox ?', a: 'Il est faux, et son auteur le savait : il vend des filtres. Il voulait tromper.' },
  { q: 'Le deuxième message est-il une infox ?', a: 'Non : l’office de tourisme s’est trompé de date et s’en est excusé. C’est une erreur.' },
  { q: 'Pourquoi le troisième message n’est-il pas une fausse nouvelle ?', a: 'C’est une nouvelle satirique : personne n’était censé la croire.' },
  { q: 'Pourquoi le site écrit-il « ce que l’on appelle plutôt au Québec une fausse nouvelle » ?', a: 'L’OQLF privilégie fausse nouvelle, alors qu’infox est recommandé en France.' },
], 'rec-c1-16-texte-a4', ['infox']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('L’intention', 'Une date fausse donnée par erreur, puis corrigée, c’est…',
    ['une erreur', 'une infox'], 0,
    'Sans intention de tromper : une erreur. EN: a mistake.'),
  ctl('Le Québec', 'Au Québec, le terme privilégié est…',
    ['fausse nouvelle', 'infox', 'fake news'], 0,
    'L’OQLF privilégie fausse nouvelle. EN: fausse nouvelle.'),
  ctl('La France', 'En France, le Journal officiel recommande…',
    ['infox et information fallacieuse', 'fake news'], 0,
    'Recommandation de 2018. EN: infox and information fallacieuse.'),
], ['infox']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Infox ou erreur',
    opener: {
      line: 'Trois messages faux, trois intentions différentes : ici tu pèses ce qui sépare une infox d’une erreur. EN: Three false messages, three different intentions: here you weigh what separates fake news from a mistake.',
      imageRef: 'lessons/notions-morales/act04.jpg',
    },
    sections: [],
    milestone: 'Tu gardes infox et fausse nouvelle pour ce qui veut tromper, et tu sais qui recommande quel mot. EN: You keep infox and fausse nouvelle for what aims to deceive, and know who recommends which word.',
    estScreens: 40, restPoints: ['a4-construire', 'a4-flash'],
  },
  sections: [A4_ECOUTE, A4_CARTES, A4_CONSTRUIRE, A4_PIEGE, A4_FLASH, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — MORALE, ÉTHIQUE, DÉONTOLOGIE
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a5-lecture', layer: 'core', questionsInModal: true,
  title: 'La charte du Courrier', frSub: 'Lis : de quel devoir parle chaque article',
  text: LECTURE_CHARTE,
  glossary: [
    { word: 'Préambule', en: 'Preamble', note: 'Le texte qui ouvre une charte et en dit l’esprit.' },
    { word: 'rectification', en: 'correction', note: 'Une correction publiée.' },
    { word: 'manquement', en: 'breach', note: 'Le fait de ne pas respecter un devoir.' },
  ],
  questions: [
    { q: 'Global : à quoi sert cette charte ?', a: 'À fixer les devoirs professionnels des journalistes du Courrier : c’est un texte de déontologie.' },
    { q: 'Détail : pourquoi le préambule dit-il que ce n’est pas une leçon de morale ?', a: 'Parce qu’il ne dit pas le bien et le mal pour tous : il dit ce que des journalistes s’engagent à faire dans leur métier.' },
    { q: 'Détail : où va la question de la photo d’une victime ?', a: 'En comité, cas par cas : c’est une question d’éthique, plus large que la charte.' },
    { q: 'Inférence : quel article concerne directement le témoignage de M. Lavoie ?', a: 'L’article 6 : ne jamais présenter le souvenir d’un témoin comme un fait établi sans le dire.' },
    { q: 'Inférence : que se passe-t-il en cas de manquement ?', a: 'Le comité de rédaction l’examine et peut demander une rectification.' },
  ],
  audio: REC('rec-c1-16-charte'), say: REFRAME, terms: ['morale'],
};

const A5_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a5-table', layer: 'core', sheetId: 'sheet-morale',
  title: 'Six mots du bien',
  cols: ['Mot', 'Ce qu’il pèse', 'Exemple'],
  rows: [
    { cells: ['la morale', 'le bien et le mal, pour tous', 'faire la morale'], say: fr(E(1261)),
      detail: { title: 'La morale', body: 'Les règles du bien et du mal qu’une société ou une personne tient pour valables. Faire la morale : en donner des leçons. EN: right and wrong.', say: fr(E(1265)) } },
    { cells: ['l’éthique', 'comment bien agir dans un cas', 'un comité d’éthique'], say: fr(E(1264)),
      detail: { title: 'L’éthique', body: 'La réflexion sur la bonne conduite dans un domaine précis : la recherche, le soin, les affaires. Souvent employé pour morale. EN: reflection on right conduct.', say: fr(E(1256)) } },
    { cells: ['la déontologie', 'les devoirs d’une profession', 'un code de déontologie'], say: fr(E(1263)),
      detail: { title: 'La déontologie', body: 'Les règles écrites d’un métier. On y manque, on la respecte. Au Québec, chaque ordre professionnel adopte un code de déontologie. EN: a profession’s duties.', say: fr(E(1255)) } },
    { cells: ['le moral', 'l’état d’esprit', 'avoir le moral'], say: fr(E(1266)),
      detail: { title: 'Le moral, au masculin', body: 'Rien à voir avec le bien : avoir le moral, c’est être de bonne humeur, avoir confiance. EN: morale, spirits.', say: fr(E(1266)) } },
    { cells: ['immoral', 'contraire à la morale', 'un acte immoral'], say: fr(E(1267)),
      detail: { title: 'Immoral', body: 'Qui va contre la morale : on le juge. EN: immoral.', say: fr(E(1267)) } },
    { cells: ['amoral', 'étranger à la morale', 'un être amoral'], say: fr(E(1267)),
      detail: { title: 'Amoral', body: 'Qui ignore la morale, sans la combattre : un enfant très jeune, une machine, un personnage cynique. EN: amoral.', say: fr(E(1267)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['morale'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-construire', layer: 'core', size: 'lg',
  title: 'Pour tous, ou pour un métier', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le bien, pour tous', [
      it('fr.b2.ethique.050', 'le mot du B2'),
      it(E(1258), 'la famille'),
      it(E(1254), 'péjoratif'),
      it('fr.b1.litterature.067', 'la leçon d’une fable'),
    ], chk('« Arrête de me faire la morale. » La personne reproche…',
      ['des leçons de bien et de mal non demandées', 'un manquement professionnel'], 0,
      'Faire la morale : donner des leçons. EN: unwanted lectures.')),
    grp('Le devoir d’un métier', [
      it('fr.b2.ethique.072', 'le mot du B2'),
      it(E(1260), 'la famille'),
      it(E(1257), 'ne pas respecter un devoir'),
      it('fr.b2.ethique.047', 'la déontologie médicale'),
    ], chk('Un médecin parle de son patient à des inconnus. Il manque…',
      ['à la déontologie', 'de moral'], 0,
      'Le secret fait partie des devoirs de la profession. EN: to professional ethics.')),
    ctl('Entre les deux', 'Faut-il autoriser cette expérience sur des enfants ? On consulte…',
      ['le comité d’éthique', 'le code de la route'], 0,
      'Une réflexion sur un cas : l’éthique. EN: the ethics committee.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['morale'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a5-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre faux pas du bien',
  errors: [
    { wrong: 'Après la défaite, l’équipe n’a plus la morale.', right: fr(E(1266)),
      why: 'Normal : morale anglais se dit pour une équipe. En français, c’est le moral, au masculin. EN: le moral.' },
    { wrong: 'Arrête de me donner la morale : je connais les règles.', right: fr(E(1265)),
      why: 'Normal : on donne une leçon. Mais l’expression figée est faire la morale. EN: faire la morale.' },
    { wrong: 'Ce médecin a manqué la déontologie en parlant de son patient.', right: fr(E(1263)),
      why: 'Normal : on manque un train, sans préposition. Mais on manque à un devoir, à la déontologie. EN: manquer à.' },
    { wrong: 'Un être immoral ignore la morale.', right: fr(E(1267)),
      why: 'Normal : im- et a- disent tous deux un manque. Mais immoral va contre la morale ; amoral l’ignore. EN: amoral.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['morale'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a5-dictee', layer: 'core',
  title: 'Écris les deux phrases que tu entends', frSub: 'Morale et déontologie',
  itemIds: dicteeFor(5),
  audio: AUDIO, say: REFRAME, terms: ['morale'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Lire : un courriel de clinique', TEXTE_A5, [
  { q: 'Quelle question relève de la déontologie ?', a: 'La prise en charge d’une urgence : le code que suit la clinique l’impose.' },
  { q: 'Quelle question relève de l’éthique ?', a: 'Refuser ou non de soigner, hors urgence, l’animal d’un client qui ne paie jamais : on en discutera ensemble.' },
  { q: 'Que demande la directrice à l’accueil ?', a: 'De ne pas faire la morale aux clients.' },
  { q: 'Pourquoi n’emploie-t-elle pas le mot morale pour l’urgence ?', a: 'Parce que c’est une règle écrite de la profession, pas un jugement général sur le bien et le mal.' },
], 'rec-c1-16-texte-a5', ['morale']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le métier', 'Les devoirs écrits d’une profession forment…',
    ['sa déontologie', 'sa morale', 'son moral'], 0,
    'La déontologie pèse une profession. EN: its professional ethics.'),
  ctl('Le masculin', 'Après une mauvaise nouvelle, on n’a plus…',
    ['le moral', 'la morale'], 0,
    'Le moral : l’état d’esprit. EN: le moral.'),
  ctl('L’ignorance', 'Une machine qui n’a aucune notion du bien est…',
    ['amorale', 'immorale'], 0,
    'Amoral : étranger à la morale. EN: amoral.'),
], ['morale']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Morale, éthique, déontologie',
    opener: {
      line: 'Une charte de journal qui refuse de faire la morale : ici tu sépares le bien pour tous, la réflexion sur un cas et les devoirs d’un métier. EN: A newspaper’s code that refuses to moralise: here you separate right for all, reflection on a case and a trade’s duties.',
      imageRef: 'lessons/notions-morales/act05.jpg',
    },
    sections: [],
    milestone: 'Tu choisis entre morale, éthique et déontologie, et tu ne confonds plus le moral et la morale. EN: You choose between morale, éthique and déontologie, and no longer confuse le moral with la morale.',
    estScreens: 40, restPoints: ['a5-table', 'a5-erreurs'],
  },
  sections: [A5_LECTURE, A5_TABLE, A5_CONSTRUIRE, A5_ERREURS, A5_DICTEE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — REMORDS, REGRET, HONTE
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a6-histoire', layer: 'core',
  title: 'La lettre de Jacques', frSub: 'Une perte, une faute',
  setting: 'À Lausanne, Mireille et Bertrand préparent la rubrique du courrier des lecteurs. Ils lisent la lettre d’un certain Jacques.',
  bubbles: [
    { from: 'narrator', fr: 'Mireille lit à voix haute. Bertrand prend des notes pour la réponse.', en: 'Mireille reads aloud. Bertrand takes notes for the reply.' },
    { from: 'user', fr: 'Il n’a jamais appris le piano, et il le regrette.', en: 'He never learned the piano, and he regrets it.' },
    { from: 'coach', fr: 'Un regret, sans faute : c’est une perte, rien de plus.', en: 'A regret, with no fault: it is a loss, nothing more.', warn: 'Le regret' },
    { from: 'user', fr: 'Mais il a laissé accuser une collègue à sa place, et elle a perdu son poste.', en: 'But he let a colleague be blamed in his place, and she lost her job.' },
    { from: 'coach', fr: 'Là, c’est une faute. Ce qui le ronge depuis vingt ans, ce sont des remords.', en: 'That is a fault. What has been gnawing at him for twenty years is remorse.', warn: 'Le remords' },
    { from: 'user', fr: 'Il dit qu’il a honte devant sa femme.', en: 'He says he feels ashamed in front of his wife.' },
    { from: 'coach', fr: 'La honte vient du regard des autres ; la culpabilité, de son propre jugement.', en: 'Shame comes from other people’s eyes; guilt from one’s own judgement.', warn: 'La honte' },
    { from: 'coach', fr: fr(E(1278)), en: en(E(1278)), warn: 'La règle' },
  ],
  closing: { fr: 'Un regret se porte ; un remords pèse une faute.', en: 'A regret is carried; remorse weighs a fault.' },
  audio: REC('rec-c1-16-lettre'), say: REFRAME, terms: ['remords'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a6-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-morale',
  title: 'Quatre sentiments moraux', frSub: 'La faute, la perte, le regard, le jugement',
  hint: 'Quatre cartes. Demande-toi : y a-t-il une faute, et qui juge ?',
  audio: REC('rec-c1-16-remords-cartes'), say: REFRAME, terms: ['remords'],
  cards: [
    { head: 'Une faute commise', label: 'le remords', fr: fr(E(1273)), sub: rsOf(E(1273)),
      body: 'La douleur d’avoir mal agi. On n’a des remords que pour ses propres actes. EN: remorse for one’s own wrong.' },
    { head: 'Une perte', label: 'le regret', fr: fr(E(1274)), sub: rsOf(E(1274)),
      body: 'La peine de ce qu’on a perdu ou pas fait. Le regret est plus large : on peut aussi regretter une faute. EN: regret, broader.' },
    { head: 'Le regard des autres', label: 'la honte', fr: fr(E(1275)), sub: rsOf(E(1275)),
      body: 'On se sent diminué devant les autres, parfois sans faute grave : un oubli, une maladresse. EN: shame.' },
    { head: 'Deux consciences', label: 'la conscience', fr: fr(E(1277)), sub: rsOf(E(1277)),
      body: 'Avoir conscience de : savoir, percevoir. Avoir mauvaise conscience : se sentir coupable. EN: awareness or guilty conscience.' },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-construire', layer: 'core', size: 'lg',
  title: 'Une faute, ou une perte', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Il y a une faute', [
      it(PH(92), 'le mot du B2'),
      it(PH(91), 'se juger soi-même'),
      it(PH(93), 'ce qu’on a commis'),
      it(PH(88), 'répondre de ses actes'),
    ], chk('Il a menti à son amie et ne dort plus. Il éprouve…',
      ['des remords', 'des regrets de voyage'], 0,
      'Une faute commise : le remords. EN: remorse.')),
    grp('Il n’y a pas forcément de faute', [
      it(E(1269), 'une perte'),
      it(E(1274), 'un mariage manqué'),
      it(E(1272), 'le regard des autres'),
      it(E(1270), 'mauvaise ou bonne conscience'),
    ], chk('Elle n’a pas pu aller au mariage de son amie, retenue par une grève. Elle a…',
      ['des regrets', 'des remords'], 0,
      'Aucune faute : un regret. EN: regrets.')),
    ctl('La responsabilité', '« La responsabilité morale » suppose surtout…',
      ['qu’on a pu choisir d’agir autrement', 'qu’on a eu des regrets'], 0,
      'On répond de ce qu’on a choisi. EN: that one could have chosen otherwise.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['remords'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a6-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le remords pèse une faute',
    body: 'Pour une faute qui ronge, dis remords. Pour une perte ou une occasion manquée, dis regret. Et ne confonds pas avoir conscience de, savoir, avec avoir mauvaise conscience, se sentir coupable. EN: remorse for a fault, regret for a loss.',
  },
  cards: [
    trap(E(1273), 'des remords', 'Il a des souvenirs : il n’aurait jamais dû lui mentir.', 'Une faute qui ronge : des remords. EN: remords.'),
    trap(E(1277), 'deux consciences', 'Avoir conscience d’un risque, c’est déjà avoir mauvaise conscience.', 'Savoir qu’un risque existe n’est pas se sentir coupable. EN: two senses.'),
    trap(E(1276), 'conscience professionnelle', 'Elle fait son travail avec une grande conscience professionnelle de soi.', 'L’expression est figée : la conscience professionnelle. EN: fixed phrase.'),
    trap(E(1279), 'ni honte ni remords', 'Il ne ressent ni honte ni remord.', 'Le remords prend un s, même au singulier. EN: remords.'),
    trap(E(1280), 'la culpabilité', 'La culpabilisation l’empêche de dormir.', 'Le sentiment, c’est la culpabilité. EN: culpabilité.'),
    trap(E(1275), 'avoir honte de', 'J’ai honte d’oublier son anniversaire hier.', 'Une chose passée : avoir honte d’avoir oublié, à l’infinitif passé. EN: infinitif passé.'),
  ],
  drill: [
    { promptSay: 'Il a des … : il n’aurait jamais dû mentir.', opts: ['remords', 'regrets de voyage'], correct: 0 },
    { promptSay: 'Je … de ne pas être allée à son mariage.', opts: ['regrette', 'remords'], correct: 0 },
    { promptSay: 'J’ai … d’avoir oublié son anniversaire.', opts: ['honte', 'remords'], correct: 0 },
    { promptSay: 'Avoir … conscience : se sentir coupable.', opts: ['mauvaise', 'bonne'], correct: 0 },
    { promptSay: 'Avoir … d’un risque : le savoir.', opts: ['conscience', 'mauvaise conscience'], correct: 0 },
    { promptSay: 'La … l’empêche de dormir.', opts: ['culpabilité', 'faute'], correct: 0 },
    { promptSay: 'Il ne ressent ni honte ni … .', opts: ['remords', 'remord'], correct: 0 },
    { promptSay: 'Elle travaille avec une grande … professionnelle.', opts: ['conscience', 'déontologie'], correct: 0 },
  ],
  steps: STEPS('Le remords pèse une faute', 'Six phrases à redresser'),
  audio: REC('rec-c1-16-piege-remords'), say: REFRAME, terms: ['remords'],
};

const A6_HACKS: Sec<'hacks'> = {
  type: 'hacks', id: 'a6-hacks', layer: 'core', title: 'Trois tests quand tu hésites',
  hacks: [
    { hack: 'Le test de la faute : y a-t-il un acte qu’on se reproche ? Si oui, remords. Sinon, regret.',
      why: 'On ne peut pas avoir de remords pour un train manqué à cause d’une grève. EN: the fault test.' },
    { hack: 'Le test du regard : la peine disparaîtrait-elle si personne ne savait ? Si oui, c’est plutôt de la honte.',
      why: 'La culpabilité reste même seul ; la honte a besoin des autres. EN: the audience test.' },
    { hack: 'Devant conscience, cherche le de : avoir conscience de, c’est savoir.',
      why: 'Avoir conscience du danger n’a rien de moral ; avoir mauvaise conscience, si. EN: look for de.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['remords'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Lire : une lettre au magazine', TEXTE_A6, [
  { q: 'Quel est le regret de Jacques ?', a: 'Ne jamais avoir appris le piano : une perte, sans faute.' },
  { q: 'D’où viennent ses remords ?', a: 'D’une faute : il a laissé accuser une collègue d’une erreur qu’il avait commise.' },
  { q: 'Devant qui a-t-il honte ?', a: 'Devant sa femme : il n’ose pas lui parler de celui qu’il était.' },
  { q: 'Que veut dire la réponse « un remords se répare, parfois » ?', a: 'Contrairement au regret, il pèse une faute envers quelqu’un, qu’on peut parfois réparer en lui écrivant.' },
], 'rec-c1-16-texte-a6', ['remords']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La faute', 'Pour une faute commise qui ronge, le mot le plus précis est…',
    ['des remords', 'des regrets', 'de la nostalgie'], 0,
    'Regret n’est pas faux, mais remords est le mot précis : il pèse une faute. EN: remorse, the precise word.'),
  ctl('Le savoir', '« Il a conscience des risques » veut dire…',
    ['il les connaît', 'il se sent coupable'], 0,
    'Avoir conscience de : savoir. EN: he is aware of them.'),
  ctl('Le travail', 'Le soin qu’on met à bien faire son métier, c’est…',
    ['la conscience professionnelle', 'la déontologie'], 0,
    'Une qualité de la personne, pas un code écrit. EN: conscientiousness.'),
], ['remords']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Remords, regret, honte',
    opener: {
      line: 'Une lettre à un magazine, un piano jamais appris et une faute jamais avouée : ici tu sépares le regret, le remords et la honte. EN: A letter to a magazine, a piano never learned and a fault never admitted: here you separate regret, remorse and shame.',
      imageRef: 'lessons/notions-morales/act06.jpg',
    },
    sections: [],
    milestone: 'Tu dis remords pour une faute, regret pour une perte, et tu distingues la honte de la culpabilité. EN: You say remords for a fault, regret for a loss, and tell shame from guilt.',
    estScreens: 38, restPoints: ['a6-construire', 'a6-hacks'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_PIEGE, A6_HACKS, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — INTÈGRE, PAS INTÉGRAL
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a7-histoire', layer: 'core',
  title: 'Le chantier de la digue', frSub: 'Se retirer, ou cautionner',
  setting: 'Après la séance du conseil municipal, Fatoumata et Hélène commentent le vote sur la nouvelle digue de Sainte-Ondine.',
  bubbles: [
    { from: 'narrator', fr: 'Sur le parvis de l’hôtel de ville, les dernières personnes repartent.', en: 'On the forecourt of the town hall, the last people are leaving.' },
    { from: 'user', fr: 'Le conseiller Bélanger s’est retiré du vote. Son beau-frère dirige une des entreprises.', en: 'Councillor Bélanger withdrew from the vote. His brother-in-law runs one of the companies.' },
    { from: 'coach', fr: 'Il a déclaré un conflit d’intérêts. C’est ce qu’on attend d’un élu intègre.', en: 'He declared a conflict of interest. That is what one expects of an elected official with integrity.', warn: 'Intègre' },
    { from: 'user', fr: 'Et la directrice va publier le texte intégral des offres.', en: 'And the director is going to publish the full text of the bids.' },
    { from: 'coach', fr: 'Intégral, ici, veut dire complet. Rien à voir avec l’intégrité, malgré la ressemblance.', en: 'Intégral here means complete. Nothing to do with integrity, despite the likeness.', warn: 'Intégral' },
    { from: 'user', fr: 'L’an dernier, personne n’avait rien dit pour le contrat sans appel d’offres.', en: 'Last year nobody said anything about the contract with no call for tenders.' },
    { from: 'coach', fr: fr(E(1290)), en: en(E(1290)), warn: 'Cautionner' },
    { from: 'coach', fr: fr(E(1292)), en: en(E(1292)), warn: 'La règle' },
  ],
  closing: { fr: 'Une personne est intègre ; un texte est intégral.', en: 'A person has integrity; a text is complete.' },
  audio: REC('rec-c1-16-digue'), say: REFRAME, terms: ['integrite'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a7-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-morale',
  title: 'Quatre mots de l’intégrité', frSub: 'Ce qu’on refuse, ce qu’on déclare',
  hint: 'Quatre cartes. La dernière est un piège de forme.',
  audio: REC('rec-c1-16-integrite-cartes'), say: REFRAME, terms: ['integrite'],
  cards: [
    { head: 'Qu’on ne peut acheter', label: 'intègre', fr: fr(E(1281)), sub: rsOf(E(1281)),
      body: 'Intègre : ni corruptible ni complaisant. On dit aussi d’une personne qu’elle a de l’intégrité. EN: of integrity.' },
    { head: 'Le respect rigoureux', label: 'la probité', fr: fr(E(1282)), sub: rsOf(E(1282)),
      body: 'La probité : respecter scrupuleusement ses devoirs, surtout avec l’argent et la parole donnée. Soutenu. EN: probity.' },
    { head: 'Ce qu’on déclare', label: 'un conflit d’intérêts', fr: fr(E(1283)), sub: rsOf(E(1283)),
      body: 'Quand un intérêt personnel peut peser sur une décision prise pour d’autres. On le déclare, puis on se retire. EN: a conflict of interest.' },
    { head: 'Le faux voisin', label: 'intégral', fr: fr(E(1291)), sub: rsOf(E(1291)),
      body: 'Intégral : complet, entier. Un texte intégral, un remboursement intégral. Le nom : l’intégralité. EN: complete.' },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-construire', layer: 'core', size: 'lg',
  title: 'Refuser, ou cautionner', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Ceux qui refusent', [
      it('fr.b2.ethique.071', 'le mot du B2'),
      it(E(1288), 'un juge intègre'),
      it(E(1287), 'se retirer à temps'),
      it(E(1289), 'hésiter par souci moral'),
    ], chk('Il hésite à accepter un cadeau d’un fournisseur. Il…',
      ['a des scrupules', 'est sans scrupules'], 0,
      'Avoir des scrupules : hésiter par souci moral. EN: has qualms.')),
    grp('Ceux qui laissent faire', [
      it(E(1284), 'prêt à tout'),
      it('fr.b1.negation-et-restriction.269', 'aucun scrupule'),
      it(E(1285), 'donner son appui'),
      it('fr.b2.ethique.025', 'démissionner plutôt que cautionner'),
    ], chk('« Ce cadre a démissionné plutôt que de cautionner une décision. » Cautionner veut dire…',
      ['approuver, donner son appui', 'payer une caution'], 0,
      'Ici, cautionner, c’est approuver ; payer une caution est un autre sens. EN: to endorse.')),
    ctl('Le texte complet', 'Pour dire que tout le rapport est en ligne, on écrit le texte…',
      ['intégral', 'intègre'], 0,
      'Intégral : complet. EN: the full text.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['integrite'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a7-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre glissements de l’intégrité',
  errors: [
    { wrong: 'Un juge intégral ne se laisse pas acheter.', right: fr(E(1288)),
      why: 'Normal : les deux mots se ressemblent et viennent du même latin. Mais une personne est intègre ; un texte est intégral. EN: intègre.' },
    { wrong: 'Le texte intègre du rapport est en ligne.', right: fr(E(1291)),
      why: 'Normal : même confusion, dans l’autre sens. Un texte complet est intégral. EN: intégral.' },
    { wrong: 'Elle a été promue pour sa probabilité, pas pour ses relations.', right: fr(E(1293)),
      why: 'Normal : les deux mots commencent pareil. La probité est une qualité morale ; la probabilité, la chance qu’une chose arrive. EN: probité.' },
    { wrong: 'Se taire, c’est parfois cautionné.', right: fr(E(1290)),
      why: 'Normal : à l’oral, cautionner et cautionné sonnent pareil. Après c’est, on garde l’infinitif : c’est cautionner. EN: infinitive.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['integrite'],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a7-exemples', layer: 'core',
  title: 'Cinq portraits', frSub: 'De la probité aux petits arrangements',
  examples: [
    ex(E(1293), 'la probité récompensée'),
    ex(E(1294), 'refuser les petits arrangements'),
    ex('fr.b2.recherche.079', 'le mot, déjà dans la banque'),
    ex(E(1290), 'le silence qui cautionne'),
    ex(E(1286), 'deux familles voisines'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['integrite'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Lire : une brève municipale', TEXTE_A7, [
  { q: 'Pourquoi le conseiller Bélanger s’est-il retiré du vote ?', a: 'Son beau-frère dirige une entreprise candidate : il évite un conflit d’intérêts.' },
  { q: 'Qui est décrit comme intègre, sans que le mot soit employé ?', a: 'La directrice générale, connue pour sa probité.' },
  { q: 'Que veut dire « le texte intégral des offres » ?', a: 'Le texte complet des offres, sans coupure.' },
  { q: 'Que reproche l’opposition au conseil ?', a: 'D’avoir cautionné, l’an dernier, un contrat signé sans appel d’offres.' },
], 'rec-c1-16-texte-a7', ['integrite']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La personne', 'Une fonctionnaire qu’on ne peut pas corrompre est…',
    ['intègre', 'intégrale', 'intégrée'], 0,
    'Intègre pèse une personne. EN: of integrity.'),
  ctl('Le silence', 'Se taire devant une pratique douteuse, c’est parfois la…',
    ['cautionner', 'déclarer'], 0,
    'Le silence peut cautionner. EN: endorse it.'),
  ctl('La décision', 'Avant un vote où son frère est candidat, on déclare…',
    ['un conflit d’intérêts', 'une probité'], 0,
    'On le déclare, puis on se retire. EN: a conflict of interest.'),
], ['integrite']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Intègre, pas intégral',
    opener: {
      line: 'Un conseiller qui se retire, un texte publié en entier : ici tu sépares l’intégrité d’une personne et l’intégralité d’un texte. EN: A councillor who steps aside, a text published in full: here you separate a person’s integrity from a text’s completeness.',
      imageRef: 'lessons/notions-morales/act07.jpg',
    },
    sections: [],
    milestone: 'Tu parles d’intégrité, de probité et de conflit d’intérêts, et tu ne dis plus intègre pour intégral. EN: You talk about integrity, probity and conflicts of interest, and no longer say intègre for intégral.',
    estScreens: 38, restPoints: ['a7-construire', 'a7-exemples'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_CONSTRUIRE, A7_ERREURS, A7_EXEMPLES, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LE JOLI, LE BEAU, LE SUBLIME
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a8-ecoute', layer: 'core', hideLines: true,
  title: 'Carnet de route', frSub: 'Margot raconte son voyage au micro',
  lines: [
    ln(E(1300)), ln(E(1302)), ln(E(1305)), ln(E(1301)),
    ln(E(1308)), ln(E(1303)), ln(E(1306)), ln('fr.b1.paysages.147'),
  ],
  questions: [
    { q: 'Margot, première phrase : est-elle bouleversée ?', opts: ['non, c’est plaisant, sans plus', 'oui'], correct: 0, why: 'Joli, sans plus : un plaisir léger. EN: no.' },
    { q: 'Deuxième phrase : pourquoi refuse-t-elle le mot joli ?', opts: ['ce qu’elle voit est d’un autre ordre : beau', 'ce qu’elle voit est laid'], correct: 0, why: 'Beau, et c’est autre chose : une harmonie qu’on admire. EN: it is beautiful, another order.' },
    { q: 'Quatrième phrase : qu’ont-ils ressenti devant la chute ?', opts: ['un saisissement : ils sont restés sans voix', 'un plaisir tranquille'], correct: 0, why: 'Sans voix : le sublime saisit. EN: they were overwhelmed.' },
    { q: 'Sixième phrase : le beau geste est-il esthétique ?', opts: ['non, il est généreux', 'oui'], correct: 0, why: 'Un beau geste : le beau dit aussi le bien. EN: it is generous.' },
    { q: 'Septième phrase : ses souvenirs sont-ils exacts ?', opts: ['non, il les a rendus plus beaux', 'oui'], correct: 0, why: 'Embellir un souvenir : le présenter mieux que nature. EN: he prettied them up.' },
  ],
  audio: REC('rec-c1-16-beau-ecoute'), say: REFRAME, terms: ['sublime'],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a8-table', layer: 'core', sheetId: 'sheet-beau',
  title: 'Six degrés du beau',
  cols: ['Mot', 'Ce qu’il pèse', 'On réagit'],
  rows: [
    { cells: ['joli', 'un plaisir léger, à petite échelle', 'on sourit'], say: fr(E(1295)),
      detail: { title: 'Joli', body: 'Gracieux, agréable, souvent petit : un joli village, une jolie mélodie. Dire seulement joli d’une grande œuvre peut sonner comme une réserve. EN: pretty.', say: fr(E(1300)) } },
    { cells: ['beau', 'une harmonie qu’on admire', 'on contemple'], say: fr(E(1302)),
      detail: { title: 'Beau', body: 'Des proportions justes, une harmonie. Le mot le plus large : il peut couvrir le joli et le sublime. EN: beautiful.', say: fr(E(1305)) } },
    { cells: ['sublime', 'une grandeur qui dépasse', 'on reste sans voix'], say: fr(E(1301)),
      detail: { title: 'Sublime', body: 'Ce qui saisit et dépasse : l’océan en tempête, la haute montagne. Dans la langue courante, aussi « excellent ». EN: sublime.', say: fr(E(1297)) } },
    { cells: ['le sentiment du sublime', 'admiration et effroi', 'on est saisi'], say: fr(E(1298)),
      detail: { title: 'Le sentiment du sublime', body: 'Dans la tradition esthétique, un mélange d’admiration et de peur devant ce qui nous dépasse. Soutenu. EN: awe.', say: fr(E(1301)) } },
    { cells: ['un beau geste', 'le bien, pas l’esthétique', 'on salue'], say: fr(E(1303)),
      detail: { title: 'Un beau geste', body: 'Beau dit aussi le bien : un geste généreux, une belle âme. Le beau et le bien se croisent dans la langue. EN: a fine gesture.', say: fr(E(1296)) } },
    { cells: ['embellir', 'rendre plus beau, ou mieux que nature', 'on se méfie'], say: fr(E(1306)),
      detail: { title: 'Embellir', body: 'Rendre plus beau une rue, une maison ; ou présenter mieux que nature un souvenir, un récit. EN: to make more beautiful, to embellish.', say: fr(E(1306)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['sublime'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-construire', layer: 'core', size: 'lg',
  title: 'Plaire, ou saisir', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Ce qui plaît et ce qui s’admire', [
      it(E(1295), 'joli : à petite échelle'),
      it(E(1308), 'jolie sans être belle'),
      it(PH(181), 'l’harmonie, déjà dans la banque'),
      it(PH(176), 'l’œuvre d’art'),
    ], chk('« Une ville peut être jolie sans être belle. » Cette phrase…',
      ['sépare un plaisir léger d’une harmonie admirée', 'se contredit'], 0,
      'Le joli et le beau pèsent deux choses différentes. EN: it separates two degrees.')),
    grp('Ce qui saisit', [
      it(PH(175), 'le mot du B2'),
      it(E(1297), 'un paysage sublime'),
      it(E(1298), 'admiration et effroi'),
      it(E(1301), 'sans voix'),
    ], chk('Devant le fleuve en tempête, une pointe de peur et d’admiration. C’est…',
      ['sublime', 'joli', 'mignon'], 0,
      'La grandeur qui dépasse et inquiète : le sublime. EN: sublime.')),
    ctl('Le beau et le regard', '« La beauté n’existe pas indépendamment du regard qui la contemple. » Selon cette thèse, la beauté…',
      ['dépend en partie de celui qui regarde', 'se mesure comme un poids'], 0,
      'Une thèse sur le beau, pas une règle de vocabulaire : à discuter. EN: depends partly on the viewer.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sublime'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a8-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le joli plaît, le sublime saisit',
    body: 'Garde joli pour un plaisir léger, beau pour une harmonie qu’on admire, sublime pour ce qui dépasse et laisse sans voix. Et un beau geste parle du bien, pas de l’apparence. EN: pretty pleases, sublime overwhelms.',
  },
  cards: [
    trap(E(1301), 'sans voix : sublime', 'Devant la chute, nous sommes restés sans voix : c’était joli.', 'Rester sans voix devant une chute, c’est le sublime ; joli serait trop faible. EN: sublime.'),
    trap(E(1300), 'joli, sans plus', 'C’est sublime, sans plus.', 'Sublime et sans plus se contredisent. EN: joli.'),
    trap(E(1303), 'un beau geste', 'Il a eu la belle geste de rendre l’argent.', 'Geste est masculin : le beau geste, où beau dit le bien. On dit aussi un joli geste. EN: masculine.'),
    trap(E(1306), 'embellir', 'Avec les années, il a embelli de ses souvenirs.', 'Embellir quelque chose, sans de. EN: embellir ses souvenirs.'),
    trap(E(1305), 'une beauté austère', 'Cette chapelle est d’une joliesse austère.', 'Austère va mal avec le joli ; la sobriété grave relève du beau. EN: beauté.'),
    trap(E(1295), 'un joli petit village', 'un grandiose petit village', 'Petit, plaisant, à taille humaine : joli. Grandiose et petit se contredisent. EN: joli.'),
  ],
  drill: [
    { promptSay: 'C’est …, sans plus.', opts: ['joli', 'sublime'], correct: 0 },
    { promptSay: 'Nous sommes restés sans voix : c’était … .', opts: ['sublime', 'joli'], correct: 0 },
    { promptSay: 'Il a eu le … geste de rendre l’argent.', opts: ['beau', 'bel'], correct: 0 },
    { promptSay: 'Le joli plaît, le beau s’admire, le sublime … .', opts: ['saisit', 'amuse'], correct: 0 },
    { promptSay: 'Avec les années, il a … ses souvenirs.', opts: ['embelli', 'beauté'], correct: 0 },
    { promptSay: 'Cette chapelle est d’une beauté … .', opts: ['austère', 'mignonne'], correct: 0 },
    { promptSay: 'Le sentiment du … mêle admiration et effroi.', opts: ['sublime', 'joli'], correct: 0 },
    { promptSay: 'Un … petit village, aux maisons colorées.', opts: ['joli', 'grandiose'], correct: 0 },
  ],
  steps: STEPS('Le joli plaît, le sublime saisit', 'Six phrases à redresser'),
  audio: REC('rec-c1-16-piege-beau'), say: REFRAME, terms: ['sublime'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a8-exemples', layer: 'core',
  title: 'Le beau et le vrai', frSub: 'Un vers du XVIIe siècle, et la banque',
  examples: [
    ex(E(1307), 'Boileau, Épître IX : le beau ne vaut que par le vrai'),
    ex(PH(204), 'une thèse : la beauté dépend du regard'),
    ex('fr.b1.paysages.147', 'la beauté gravée dans la mémoire'),
    ex(E(1302), 'refuser le mot joli'),
    ex(E(1296), 'le beau qui dit le bien'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sublime'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Lire : un carnet de voyage', TEXTE_A8, [
  { q: 'Qu’est-ce qui est joli, et pourquoi ?', a: 'Le village de Port-Aubin : plaisant, coloré, fleuri, mais on l’oublie vite.' },
  { q: 'Qu’est-ce qui est beau, et à quoi le voit-on ?', a: 'L’église : ses proportions justes et sa pierre grise donnent une impression d’harmonie, on la regarde longtemps.' },
  { q: 'Pourquoi le soir sur la falaise est-il sublime ?', a: 'L’immensité, le fleuve en tempête et une pointe de peur les laissent sans voix.' },
  { q: 'Quelle gradation le texte suit-il ?', a: 'Du joli au beau, puis au sublime : du plaisir léger à l’admiration, puis au saisissement.' },
], 'rec-c1-16-texte-a8', ['sublime']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le degré', 'Un petit café fleuri, plaisant, vite oublié, c’est…',
    ['joli', 'sublime'], 0,
    'Un plaisir léger : joli. EN: pretty.'),
  ctl('Le saisissement', 'Ce qui dépasse et laisse sans voix est…',
    ['sublime', 'joli', 'gracieux'], 0,
    'Le sublime saisit. EN: sublime.'),
  ctl('Le bien', 'Rendre l’argent trouvé, c’est…',
    ['un beau geste', 'un geste d’artiste'], 0,
    'Beau dit aussi le bien. EN: a fine gesture.'),
], ['sublime']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le joli, le beau, le sublime',
    opener: {
      line: 'Un village fleuri, une église, un fleuve en tempête : ici tu pèses le plaisir, l’admiration et le saisissement. EN: A flowery village, a church, a river in a storm: here you weigh pleasure, admiration and awe.',
      imageRef: 'lessons/notions-morales/act08.jpg',
    },
    sections: [],
    milestone: 'Tu dis joli, beau ou sublime selon ce que tu ressens, et tu reconnais le beau qui parle du bien. EN: You say joli, beau or sublime according to what you feel, and recognise the beau that speaks of the good.',
    estScreens: 40, restPoints: ['a8-table', 'a8-piege'],
  },
  sections: [A8_ECOUTE, A8_TABLE, A8_CONSTRUIRE, A8_PIEGE, A8_EXEMPLES, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LE GOÛT ET L'ESTHÉTIQUE
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a9-histoire', layer: 'core',
  title: 'L’exposition de Dakar', frSub: 'On en discute, ou pas',
  setting: 'À Dakar, Ousmane et sa cousine Awa sortent de l’exposition Couleurs du fleuve, au centre culturel.',
  bubbles: [
    { from: 'narrator', fr: 'Sur le trottoir, Awa tient un petit sac de la boutique. Ousmane fronce les sourcils.', en: 'On the pavement, Awa holds a small bag from the shop. Ousmane frowns.' },
    { from: 'user', fr: 'J’ai trouvé certains tableaux criards. Trop de rouge, rien pour reposer l’œil.', en: 'I found some paintings garish. Too much red, nothing to rest the eye.' },
    { from: 'coach', fr: 'Tu donnes des raisons. Un jugement de goût se discute, même s’il ne se démontre pas.', en: 'You are giving reasons. A judgement of taste can be argued, even if it cannot be proved.', warn: 'Le goût' },
    { from: 'user', fr: 'Je reconnais quand même qu’il y a une vraie esthétique, d’une salle à l’autre.', en: 'I do admit there is a real aesthetic, from one room to the next.' },
    { from: 'coach', fr: 'Une esthétique : un style cohérent. Tu peux ne pas aimer et la reconnaître.', en: 'An aesthetic: a consistent style. You can dislike it and still recognise it.', warn: 'L’esthétique' },
    { from: 'user', fr: 'Et ton aimant de la boutique, avec le coucher de soleil pailleté, avoue que c’est kitsch.', en: 'And your magnet from the shop, with the glittery sunset, admit it is kitsch.' },
    { from: 'coach', fr: fr(E(1314)), en: en(E(1314)), warn: 'Kitsch' },
    { from: 'coach', fr: fr(E(1319)), en: en(E(1319)), warn: 'La règle' },
  ],
  closing: { fr: 'Le goût se discute avec des raisons ; il ne se prouve pas.', en: 'Taste is argued with reasons; it is not proved.' },
  audio: REC('rec-c1-16-dakar'), say: REFRAME, terms: ['gout'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a9-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-beau',
  title: 'Quatre mots du goût', frSub: 'Juger le beau, et le faux ami',
  hint: 'Quatre cartes. La dernière n’a rien à voir avec la beauté.',
  audio: REC('rec-c1-16-gout-cartes'), say: REFRAME, terms: ['gout'],
  cards: [
    { head: 'Juger juste', label: 'avoir du goût', fr: fr(E(1310)), sub: rsOf(E(1310)),
      body: 'Savoir juger du beau, choisir avec justesse. Le goût se forme : on apprend à voir. EN: to have taste.' },
    { head: 'Quand le goût touche au bien', label: 'de mauvais goût', fr: fr(E(1309)), sub: rsOf(E(1309)),
      body: 'Une plaisanterie de mauvais goût choque, blesse ou tombe mal. Le jugement est ici moral autant qu’esthétique. EN: in poor taste.' },
    { head: 'Le style et la réflexion', label: 'l’esthétique', fr: fr(E(1313)), sub: rsOf(E(1313)),
      body: 'L’esthétique : la réflexion sur le beau, ou le style d’une œuvre. Esthétique (adjectif) : agréable à voir. Un esthète : qui place le beau avant tout. EN: aesthetics, aesthetic.' },
    { head: 'Le faux ami', label: 'avoir beau', fr: fr(E(1316)), sub: rsOf(E(1316)),
      body: 'Avoir beau + infinitif : faire en vain. Elle a eu beau chercher : elle a cherché pour rien. Aucune beauté là-dedans. EN: however hard she tried.' },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-construire', layer: 'core', size: 'lg',
  title: 'Juger, et dire pourquoi', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Les mots du jugement', [
      it(PH(177), 'le mot du B2'),
      it(PH(178), 'la réflexion sur le beau'),
      it(E(1312), 'trop d’éclat'),
      it(E(1311), 'chargé, sentimental'),
    ], chk('« Des couleurs criardes » : le reproche porte sur…',
      ['un éclat qui choque l’œil', 'un prix trop élevé'], 0,
      'Criard : trop d’éclat. Le contraire : sobre. EN: garish brightness.')),
    grp('Les raisons du jugement', [
      it(E(1318), 'le goût se forme'),
      it(E(1321), 'l’esthète juge'),
      it(PH(212), 'le sens que le spectateur prête'),
      it(E(1317), 'solide, mais pas esthétique'),
    ], chk('« Le pont est solide, mais il n’est pas très esthétique. » Esthétique veut dire ici…',
      ['agréable à regarder', 'qui concerne la philosophie'], 0,
      'L’adjectif courant : beau à voir. EN: attractive.')),
    ctl('L’illusion', '« On préfère parfois une belle illusion à une vérité inconfortable. » La phrase relie…',
      ['le beau et le vrai, avec une question morale', 'deux synonymes'], 0,
      'Le beau, le vrai et le bien se croisent : c’est toute la leçon. EN: beauty and truth, morally.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['gout'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a9-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre faux pas du goût',
  errors: [
    { wrong: 'Elle a eu beau à chercher, elle n’a rien trouvé.', right: fr(E(1316)),
      why: 'Normal : beaucoup d’expressions prennent à. Avoir beau se construit directement avec l’infinitif. EN: no à.' },
    { wrong: 'une plaisanterie de mauvaise goût', right: fr(E(1309)),
      why: 'Normal : plaisanterie est féminin, et l’adjectif semble le suivre. Mais il s’accorde avec goût, masculin : de mauvais goût. EN: mauvais.' },
    { wrong: 'Le pont est solide, mais il n’est pas très éthique.', right: fr(E(1317)),
      why: 'Normal : éthique et esthétique se ressemblent à l’oreille. Pour l’apparence, c’est esthétique ; éthique parle du bien. EN: esthétique.' },
    { wrong: 'J’ai beau d’essayer, je n’aime pas ce tableau.', right: fr(E(1322)),
      why: 'Normal : essayer de appelle de. Mais après avoir beau, l’infinitif suit sans préposition. EN: j’ai beau essayer.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['gout'],
};

const A9_FLASH: Sec<'flashcards'> = {
  type: 'flashcards', id: 'a9-flash', layer: 'core',
  title: 'Huit mots du goût', frSub: 'De l’anglais au français',
  cards: [
    { front: 'to have taste', back: 'avoir du goût', say: fr(E(1318)) },
    { front: 'in poor taste (a joke)', back: 'de mauvais goût', say: fr(E(1315)) },
    { front: 'kitsch', back: 'kitsch', say: fr(E(1314)) },
    { front: 'garish', back: 'criard, criarde', say: fr(E(1320)) },
    { front: 'understated, plain', back: 'sobre', say: 'Je préfère un décor sobre.' },
    { front: 'an aesthete', back: 'un esthète', say: fr(E(1321)) },
    { front: 'attractive (to look at)', back: 'esthétique', say: fr(E(1317)) },
    { front: 'however hard I try', back: 'j’ai beau essayer', say: fr(E(1322)) },
  ],
  audio: AUDIO, say: REFRAME, terms: ['gout'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Lire : un avis de visiteur', TEXTE_A9, [
  { q: 'Quel reproche Ousmane fait-il à certains tableaux ?', a: 'Ils sont criards : trop de rouge, rien pour reposer l’œil.' },
  { q: 'Que reconnaît-il pourtant ?', a: 'Une vraie esthétique, cohérente d’une salle à l’autre.' },
  { q: 'Que juge-t-il kitsch ?', a: 'Les souvenirs vendus à la boutique.' },
  { q: 'Pourquoi cite-t-il le proverbe sur les goûts et les couleurs ?', a: 'Pour montrer qu’il en discute quand même, en donnant ses raisons.' },
], 'rec-c1-16-texte-a9', ['gout']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le faux ami', '« Il a eu beau insister » veut dire…',
    ['il a insisté pour rien', 'il a insisté avec élégance'], 0,
    'Avoir beau : en vain. EN: he insisted in vain.'),
  ctl('La morale', 'Une plaisanterie qui blesse est…',
    ['de mauvais goût', 'kitsch', 'sobre'], 0,
    'De mauvais goût : déplacé, choquant. EN: in poor taste.'),
  ctl('Le jugement', 'Un jugement de goût…',
    ['se discute avec des raisons', 'se démontre comme un calcul'], 0,
    'On le discute, on ne le prouve pas. EN: is argued with reasons.'),
], ['gout']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Le goût et l’esthétique',
    opener: {
      line: 'Une exposition à Dakar, un aimant pailleté : ici tu apprends à juger le beau en donnant tes raisons. EN: An exhibition in Dakar and a glittery magnet: here you learn to judge beauty by giving your reasons.',
      imageRef: 'lessons/notions-morales/act09.jpg',
    },
    sections: [],
    milestone: 'Tu juges une œuvre avec des raisons, tu reconnais le kitsch et le mauvais goût, et avoir beau ne te trompe plus. EN: You judge a work with reasons, recognise kitsch and bad taste, and avoir beau no longer fools you.',
    estScreens: 38, restPoints: ['a9-construire', 'a9-flash'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_CONSTRUIRE, A9_ERREURS, A9_FLASH, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — MÉMOIRE ET SOUVENIR
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a10-lecture', layer: 'core', questionsInModal: true,
  title: 'Les élèves enquêtent', frSub: 'Lis : un souvenir, une mémoire',
  text: LECTURE_ECOLE,
  glossary: [
    { word: 'aînés', en: 'elders', note: 'Les personnes âgées d’une communauté. Courant au Québec.' },
    { word: 'jure', en: 'swears', note: 'Jurer que : affirmer avec force.' },
    { word: 'versés', en: 'deposited', note: 'Verser des documents aux archives : les y déposer.' },
  ],
  questions: [
    { q: 'Global : que font les élèves de l’école des Berges ?', a: 'Ils recueillent et enregistrent les souvenirs des aînés sur la crue de 1976.' },
    { q: 'Détail : comment l’enseignante distingue-t-elle souvenir et mémoire ?', a: 'Le souvenir, c’est ce qu’une personne garde d’un moment vécu ; la mémoire du village, c’est ce que tous ces souvenirs forment ensemble.' },
    { q: 'Détail : qu’ont découvert les élèves ?', a: 'Deux témoins ne se rappellent jamais la même scène de la même façon.' },
    { q: 'Inférence : pourquoi Léa parle-t-elle de trou de mémoire ?', a: 'Pour éviter d’accuser de mensonge un témoin qui oublie ou se trompe.' },
    { q: 'Position : que veut dire la dernière phrase ?', a: 'Les enregistrements garderont une trace quand les témoins ne seront plus là pour se souvenir.' },
  ],
  audio: REC('rec-c1-16-ecole'), say: REFRAME, terms: ['souvenir'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a10-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-memoire',
  title: 'Le souvenir et la mémoire', frSub: 'Une personne, un groupe, une faculté',
  hint: 'Quatre cartes. La troisième est une question de registre, pas une faute.',
  audio: REC('rec-c1-16-memoire-cartes'), say: REFRAME, terms: ['souvenir'],
  cards: [
    { head: 'Ce qui revient', label: 'le souvenir', fr: fr(E(1323)), sub: rsOf(E(1323)),
      body: 'Un souvenir : une image, un moment qui revient à une personne. On le garde, on le perd, on l’embellit. EN: a memory, a recollection.' },
    { head: 'La faculté, le groupe', label: 'la mémoire', fr: fr(E(1205)), sub: rsOf(E(1205)),
      body: 'La mémoire : la faculté de se souvenir, et ce qu’un groupe garde ensemble. On dit la mémoire d’un village. EN: memory, individual or collective.' },
    { head: 'Le registre', label: 'se rappeler, se souvenir de', fr: fr(E(1327)), sub: rsOf(E(1327)),
      body: 'À l’écrit soigné : se rappeler quelque chose, se souvenir de quelque chose. Se rappeler de est très courant à l’oral ; les grammairiens le boudent encore. EN: register, not error.' },
    { head: 'Pour honorer', label: 'à la mémoire de', fr: fr(E(1332)), sub: rsOf(E(1332)),
      body: 'À la mémoire de : pour honorer un disparu, sur une plaque, une dédicace. En souvenir de : plus intime. EN: in memory of.' },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-construire', layer: 'core', size: 'lg',
  title: 'Une personne, ou un groupe', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le souvenir d’une personne', [
      it(E(1333), 'des souvenirs flous'),
      it(E(1329), 'comme si c’était hier'),
      it(E(1324), 'un oubli passager'),
      it(PH(152), 'l’oubli, le mot du B2'),
    ], chk('« J’ai eu un trou de mémoire au milieu de mon discours. » C’est…',
      ['un oubli soudain et passager', 'une perte de mémoire durable'], 0,
      'Un trou de mémoire : on oublie un instant. EN: a brief blank.')),
    grp('La mémoire d’un groupe, ou ce qu’on honore', [
      it(PH(151), 'le mot du B2'),
      it(E(1331), 'de mémoire d’homme'),
      it(E(1336), 'dédier à la mémoire de'),
      it(PH(23), 'mémoire et identité'),
    ], chk('« De mémoire d’homme, l’eau n’était jamais montée si haut. » Cela veut dire…',
      ['aussi loin qu’on se souvienne', 'selon un témoin précis'], 0,
      'De mémoire d’homme : selon tout ce dont on se souvient. EN: in living memory.')),
    ctl('Le mot masculin', '« Un mémoire est un travail de recherche ; la mémoire est la faculté de se souvenir. » Le mémoire, au masculin, c’est…',
      ['un écrit, un travail de recherche', 'un souvenir précis'], 0,
      'Deux genres, deux sens : vu dès le B1. EN: a dissertation.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['souvenir'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a10-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre faux pas de la mémoire',
  errors: [
    { wrong: 'Je me souviens cette crue comme si c’était hier.', right: fr(E(1329)),
      why: 'Normal : se rappeler se construit sans préposition, et l’on calque. Mais se souvenir prend toujours de. EN: se souvenir de.' },
    { wrong: 'Cette plaque a été posée en mémoire aux sinistrés.', right: fr(E(1332)),
      why: 'Normal : on pense à rendre hommage aux sinistrés. Mais mémoire se construit avec de : à la mémoire des sinistrés, ou en mémoire des sinistrés. EN: à la mémoire de.' },
    { wrong: 'De souvenir d’homme, l’eau n’était jamais montée si haut.', right: fr(E(1331)),
      why: 'Normal : souvenir et mémoire sont voisins. L’expression figée est de mémoire d’homme. EN: de mémoire d’homme.' },
    { wrong: 'Ce fut une soirée mémoriale.', right: fr(E(1335)),
      why: 'Normal : on pense à un mémorial. L’adjectif qui dit qu’on s’en souviendra est mémorable. EN: mémorable.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['souvenir'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a10-focus', layer: 'core', sheetId: 'sheet-memoire',
  title: 'Ce qu’il faut retenir sur la mémoire',
  points: [
    'Un souvenir est d’abord celui d’une personne ; la mémoire peut être celle d’un groupe. EN: a recollection is first one person’s; memory can be a group’s.',
    'Se souvenir de quelque chose ; à l’écrit soigné, se rappeler quelque chose. EN: se souvenir de; se rappeler, without de, in careful writing.',
    'À la mémoire de, pour honorer ; en souvenir de, plus intime. EN: in memory of; as a keepsake of.',
    'Un trou de mémoire n’est pas un mensonge. EN: a memory lapse is not a lie.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['souvenir'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Lire : un avis de bibliothèque', TEXTE_A10, [
  { q: 'Qu’est-ce qu’une photo de la crue, pour chaque famille ?', a: 'Un souvenir de famille.' },
  { q: 'Que formeront ces photos ensemble ?', a: 'La mémoire de la ville.' },
  { q: 'À la mémoire de qui l’exposition ouvrira-t-elle ?', a: 'Des deux sauveteurs disparus la nuit de la crue.' },
  { q: 'Que peut faire une photo floue ?', a: 'Raviver le souvenir d’un voisin.' },
], 'rec-c1-16-texte-a10', ['souvenir']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le groupe', 'Ce que tout un village garde de son passé, c’est sa…',
    ['mémoire', 'souvenir', 'mémorable'], 0,
    'La mémoire peut être collective. EN: its memory.'),
  ctl('La construction', 'Se souvenir se construit…',
    ['avec de', 'sans préposition'], 0,
    'Se souvenir de quelque chose. EN: with de.'),
  ctl('L’hommage', 'Sur une plaque, pour honorer des victimes, on écrit…',
    ['à la mémoire des victimes', 'en mémoire aux victimes'], 0,
    'La formule consacrée : à la mémoire de. EN: in memory of the victims.'),
], ['souvenir']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Mémoire et souvenir',
    opener: {
      line: 'Des élèves qui enregistrent les aînés : ici tu sépares le souvenir d’une personne et la mémoire d’un village. EN: Pupils recording their elders: here you separate one person’s memories from a village’s memory.',
      imageRef: 'lessons/notions-morales/act10.jpg',
    },
    sections: [],
    milestone: 'Tu dis souvenir pour ce qui revient à une personne, mémoire pour la faculté ou un groupe, et tu choisis la construction selon le registre. EN: You say souvenir for what comes back to one person, mémoire for the faculty or a group, and choose the construction by register.',
    estScreens: 40, restPoints: ['a10-cartes', 'a10-erreurs'],
  },
  sections: [A10_LECTURE, A10_CARTES, A10_CONSTRUIRE, A10_ERREURS, A10_FOCUS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — COMMÉMORER, SE SOUVENIR (memorial laws: literacy only)
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a11-histoire', layer: 'core',
  title: 'Le comité du 13 avril', frSub: 'Commémorer n’est pas fêter',
  setting: 'À la mairie de Sainte-Ondine, le comité prépare les cinquante ans de la crue. Fatoumata, l’archiviste, et Bruno, un élu, relisent le programme.',
  bubbles: [
    { from: 'narrator', fr: 'Sur la table, le programme et un croquis de la plaque.', en: 'On the table, the programme and a sketch of the plaque.' },
    { from: 'user', fr: 'Pour le 13 avril, j’avais écrit « la fête des cinquante ans de la crue ».', en: 'For 13 April, I had written « the party for the fiftieth anniversary of the flood ».' },
    { from: 'coach', fr: fr(E(1344)), en: en(E(1344)), warn: 'Commémorer' },
    { from: 'user', fr: 'Et pour le concert du 14, celui de la nouvelle digue.', en: 'And for the concert on the 14th, the one for the new dyke.' },
    { from: 'coach', fr: 'Là, on célèbre une réussite. Célébrer peut aussi se dire d’une mémoire, mais fêter, jamais pour un drame.', en: 'That is celebrating a success. Célébrer can also be said of a memory, but fêter never of a tragedy.', warn: 'Célébrer' },
    { from: 'user', fr: 'Pour la plaque, j’hésite entre les dates des archives et les souvenirs des témoins.', en: 'For the plaque, I am torn between the dates in the archives and the witnesses’ memories.' },
    { from: 'coach', fr: fr(E(1347)), en: en(E(1347)), warn: 'Histoire et mémoire' },
    { from: 'coach', fr: fr(E(1348)), en: en(E(1348)), warn: 'La règle' },
  ],
  closing: { fr: 'On commémore un drame, on fête une réussite ; l’histoire vérifie ce que la mémoire garde.', en: 'You commemorate a tragedy and celebrate a success; history checks what memory keeps.' },
  audio: REC('rec-c1-16-comite'), say: REFRAME, terms: ['commemorer'],
};

const A11_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a11-table', layer: 'core', sheetId: 'sheet-memoire',
  title: 'Six mots de la mémoire publique',
  cols: ['Expression', 'Ce qu’elle pèse', 'Registre'],
  rows: [
    { cells: ['commémorer', 'rappeler solennellement', 'courant'], say: fr(E(1343)),
      detail: { title: 'Commémorer', body: 'Rappeler en public un événement, souvent grave, à date fixe : une cérémonie commémorative. EN: to commemorate.', say: fr(E(1338)) } },
    { cells: ['fêter, célébrer', 'se réjouir, ou honorer', 'courant'], say: fr(E(1344)),
      detail: { title: 'Fêter, célébrer', body: 'On fête un succès, jamais un drame. Célébrer est plus large : célébrer une victoire, célébrer la mémoire de quelqu’un. EN: to celebrate.', say: fr(E(1342)) } },
    { cells: ['le devoir de mémoire', 'l’obligation de se souvenir', 'courant'], say: fr(E(1346)),
      detail: { title: 'Le devoir de mémoire', body: 'L’idée qu’une société doit se souvenir de certains drames. Le mot est très employé ; certains lui préfèrent travail de mémoire. EN: the duty to remember.', say: fr(E(1346)) } },
    { cells: ['le travail de mémoire', 'comprendre un passé difficile', 'soutenu'], say: fr(E(1339)),
      detail: { title: 'Le travail de mémoire', body: 'Un effort pour comprendre et intégrer le passé, plutôt que de seulement s’en souvenir. Le philosophe Paul Ricœur a réfléchi à ces mots dans La Mémoire, l’histoire, l’oubli (2000). EN: the work of remembrance.', say: fr(E(1351)) } },
    { cells: ['un lieu de mémoire', 'où un groupe reconnaît son passé', 'soutenu'], say: fr(E(1340)),
      detail: { title: 'Un lieu de mémoire', body: 'Un lieu, un objet, une date : un monument aux morts, un drapeau, une fête nationale. EN: a site of memory.', say: fr(E(1349)) } },
    { cells: ['une loi mémorielle', 'une loi qui qualifie le passé', 'soutenu'], say: fr(E(1341)),
      detail: { title: 'Une loi mémorielle', body: 'En France, une loi qui dit comment la République qualifie un fait du passé. Le mot décrit ; des historiens et des parlementaires en ont débattu. EN: a memory law.', say: fr(E(1347)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['commemorer'],
};

const A11_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-construire', layer: 'core', size: 'lg',
  title: 'Garder, ou vérifier', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('La mémoire garde et rappelle', [
      it('fr.b1.les-fetes.042', 'le mot du B1'),
      it('fr.b2.valeurs.083', 'le mot du B2'),
      it(E(1345), 'au Canada, le 11 novembre'),
      it('fr.b1.evenements-familiaux.021', 'des souvenirs partagés'),
    ], chk('Au Canada, le 11 novembre s’appelle…',
      ['le jour du Souvenir', 'la fête du Souvenir'], 0,
      'Le jour du Souvenir, date de l’armistice de 1918, honore ceux qui sont morts au service du pays. EN: Remembrance Day.')),
    grp('L’histoire établit et vérifie', [
      it(E(1347), 'chercher ce qui s’est passé'),
      it(E(1346), 'le devoir et le travail'),
      it(PH(248), 'juger le passé avec ses valeurs'),
      it(E(1351), 'recueillir des témoignages'),
    ], chk('« Le devoir de mémoire ne dispense pas du travail d’historien. » Cela veut dire…',
      ['se souvenir ne remplace pas vérifier les faits', 'les historiens doivent oublier'], 0,
      'La mémoire garde ; l’histoire vérifie. EN: remembering does not replace checking.')),
    ctl('L’équilibre', '« Trop de mémoire enferme ; trop d’oubli efface. » La phrase cherche…',
      ['un équilibre entre se souvenir et oublier', 'à interdire l’oubli'], 0,
      'Ni tout garder, ni tout effacer. EN: a balance.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['commemorer'],
};

const A11_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a11-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'On ne fête pas un drame',
    body: 'Pour un drame, dis commémorer. Fêter va avec une joie ; célébrer peut dire les deux. Et la mémoire n’est pas l’histoire : l’une garde, l’autre vérifie. EN: commemorate a tragedy; memory keeps, history checks.',
  },
  cards: [
    trap(E(1344), 'commémorer', 'On ne commémore pas un drame : on le fête.', 'C’est l’inverse : un drame se commémore. EN: reversed.'),
    trap(E(1343), 'commémorera', 'Le 13 avril, la ville fêtera la crue de 1976.', 'Une crue meurtrière se commémore. EN: commémorera.'),
    trap(E(1338), 'commémorative', 'une cérémonie commémorante', 'L’adjectif : commémorative. EN: commémorative.'),
    trap(E(1347), 'histoire et mémoire', 'La mémoire cherche ce qui s’est passé ; l’histoire dit ce qu’un groupe en retient.', 'Les rôles sont inversés : l’histoire cherche, la mémoire retient. EN: swapped.'),
    trap(E(1345), 'le jour du Souvenir', 'Au Canada, le 11 novembre est la fête du Souvenir.', 'On ne fête pas ; c’est le jour du Souvenir. EN: jour du Souvenir.'),
    trap(E(1349), 'le monument aux morts', 'Le monument des morts se dresse au centre du village.', 'L’expression figée est le monument aux morts. EN: aux morts.'),
  ],
  drill: [
    { promptSay: 'On ne fête pas un drame : on le … .', opts: ['commémore', 'célèbre en dansant'], correct: 0 },
    { promptSay: 'Une cérémonie … aura lieu le 13 avril.', opts: ['commémorative', 'festive'], correct: 0 },
    { promptSay: 'L’histoire … ce qui s’est passé.', opts: ['cherche', 'retient'], correct: 0 },
    { promptSay: 'La mémoire dit ce qu’un groupe en … .', opts: ['retient', 'démontre'], correct: 0 },
    { promptSay: 'Au Canada, le 11 novembre est le jour du … .', opts: ['Souvenir', 'Mémoire'], correct: 0 },
    { promptSay: 'Le monument … morts se dresse au centre du village.', opts: ['aux', 'des'], correct: 0 },
    { promptSay: 'Le … de mémoire ne dispense pas du travail d’historien.', opts: ['devoir', 'lieu'], correct: 0 },
    { promptSay: 'Le 14, la ville … l’inauguration de la digue.', opts: ['célébrera', 'commémorera'], correct: 0 },
  ],
  steps: STEPS('On ne fête pas un drame', 'Six phrases à redresser'),
  audio: REC('rec-c1-16-piege-commemorer'), say: REFRAME, terms: ['commemorer'],
};

const A11_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a11-dictee', layer: 'core',
  title: 'Écris les deux phrases que tu entends', frSub: 'Commémorer et se souvenir',
  itemIds: dicteeFor(11),
  audio: AUDIO, say: REFRAME, terms: ['commemorer'],
};

const A11_TEXTE = dansUnTexte('a11-texte', 'Lire : un communiqué de la Ville', TEXTE_A11, [
  { q: 'Que commémore la Ville le 13 avril ?', a: 'Les cinquante ans de la crue de 1976, par une cérémonie devant le nouveau monument des sauveteurs.' },
  { q: 'Que célèbre-t-elle le 14 avril ?', a: 'L’inauguration de la nouvelle digue, avec un concert.' },
  { q: 'Que portera la plaque, et que deviennent les témoignages ?', a: 'La plaque portera les dates établies par les historiens ; les témoignages des élèves seront présentés à part, sous le titre Nos souvenirs.' },
  { q: 'Que veut dire « l’une garde, l’autre vérifie » ?', a: 'La mémoire garde les souvenirs ; l’histoire vérifie les faits par des sources.' },
], 'rec-c1-16-texte-a11', ['commemorer']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le drame', 'Pour les cinquante ans d’une crue meurtrière, la ville…',
    ['commémore', 'fête'], 0,
    'Un drame se commémore. EN: commemorates.'),
  ctl('Les rôles', 'Établir les faits par des sources, c’est le rôle…',
    ['de l’histoire', 'de la mémoire', 'de la commémoration'], 0,
    'L’histoire établit, la mémoire retient. EN: of history.'),
  ctl('Le mot', 'Une loi qui dit comment la République qualifie un fait du passé s’appelle…',
    ['une loi mémorielle', 'une loi mémorable'], 0,
    'Mémoriel : qui concerne la mémoire collective. EN: a memory law.'),
], ['commemorer']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Commémorer, se souvenir',
    opener: {
      line: 'Une plaque, une cérémonie, un concert le lendemain : ici tu sépares ce qu’on commémore, ce qu’on fête, ce que la mémoire garde et ce que l’histoire vérifie. EN: A plaque, a ceremony, a concert the next day: here you separate commemorating and celebrating, what memory keeps and what history checks.',
      imageRef: 'lessons/notions-morales/act11.jpg',
    },
    sections: [],
    milestone: 'Tu commémores un drame sans le fêter, et tu dis ce que la mémoire garde et ce que l’histoire établit. EN: You commemorate a tragedy without celebrating it, and say what memory keeps and history establishes.',
    estScreens: 40, restPoints: ['a11-table', 'a11-piege'],
  },
  sections: [A11_HISTOIRE, A11_TABLE, A11_CONSTRUIRE, A11_PIEGE, A11_DICTEE, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TA RÉPONSE
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a12-lecture', layer: 'core', questionsInModal: true,
  title: 'La réponse que tu vas imiter', frSub: 'Hélène répond à Raymond',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'précisait', en: 'specified', note: 'Préciser : dire de façon exacte, ajouter un détail qui évite l’erreur.' },
    { word: 'salutations distinguées', en: 'yours faithfully', note: 'La formule de politesse d’une lettre formelle.' },
  ],
  questions: [
    { q: 'Global : que fait Hélène dans sa réponse ?', a: 'Elle nomme trois mots de Raymond qui pèsent autre chose, montre chaque distinction, puis propose une critique reformulée.' },
    { q: 'Détail : quelles sont les trois confusions ?', a: 'Mentir et se tromper ; infox et erreur ; morale et déontologie.' },
    { q: 'Détail : pourquoi le journal n’a-t-il pas manqué à sa déontologie ?', a: 'L’article précisait que les archives donnent le mardi 13 avril : il ne présentait pas le souvenir comme un fait établi.' },
    { q: 'Inférence : pourquoi Hélène écrit-elle « je ne partage pas vos mots » plutôt que « vous avez tort » ?', a: 'Pour corriger les mots sans attaquer la personne, et reconnaître la colère du lecteur.' },
    { q: 'Position : quel ton choisit-elle, et à quoi le vois-tu ?', a: 'Courtois et précis : elle remercie, vouvoie, ne se moque pas et finit sur une critique plus juste.' },
  ],
  audio: REC('rec-c1-16-modele'), say: REFRAME, terms: ['balance'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-reponse',
  title: 'Cinq étapes avant d’écrire', frSub: 'Nommer, peser, reformuler',
  steps: [
    'Remercie, et reconnais en une phrase ce qui est juste dans la lettre. EN: thank the writer and grant what is fair.',
    'Repère chaque mot qui pèse autre chose que ce que la personne veut dire. EN: find each word that weighs something else.',
    'Pour chaque confusion : nomme-la, dis ce que chaque mot pèse, donne un cas. EN: name it, say what each word weighs, give a case.',
    'Dis ce que la distinction change : l’accusation tombe, ou la critique devient plus juste. EN: say what the distinction changes.',
    'Termine par la critique reformulée avec le mot juste, puis une formule de politesse. EN: end with the restated criticism.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['balance'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', sheetId: 'sheet-reponse',
  title: 'Quatre phrases que toute bonne réponse contient',
  cases: [
    uc('Tu ouvres avec courtoisie', E(1352)),
    uc('Tu nommes la confusion', E(1353)),
    uc('Tu reconnais la colère, pas le mot', E(1359)),
    uc('Tu annonces la critique reformulée', E(1356)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['balance'],
};

const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core',
  title: 'À la radio, Les Voix du lac', frSub: 'Six tours, à voix haute',
  setting: 'Tu appelles l’émission de Radio Lac-Bleu, qui parle ce soir du nouveau monument de Sainte-Ondine. Une auditrice vient de le traiter d’immoral et de fêter la crue. Dis ce que ses mots pèsent, et propose une critique plus juste.',
  turns: [
    {
      ai: 'Bonsoir, vous êtes en direct. Vous vouliez réagir à notre auditrice ?', en: 'Good evening, you are on air. You wanted to respond to our listener?',
      user: 'Oui. Je comprends sa colère, mais plusieurs de ses mots pèsent autre chose.',
      userEn: 'Yes. I understand her anger, but several of her words weigh something else. (Granting, then naming the problem.)',
      alts: [
        { fr: 'Oui, merci. Je crois qu’elle mélange le goût et la morale.', en: 'Yes, thank you. I think she is mixing up taste and morality. (Naming the confusion at once.)' },
        { fr: 'Oui. Sa critique serait plus forte avec d’autres mots.', en: 'Yes. Her criticism would be stronger with other words. (Announcing the reformulation.)' },
      ],
    },
    {
      ai: 'Elle trouve le monument laid, et la dépense immorale. Qu’en pensez-vous ?', en: 'She finds the monument ugly, and the expense immoral. What do you think?',
      user: 'Laid, c’est un jugement de goût ; immoral, c’est un jugement sur le bien. Le premier ne prouve pas le second.',
      userEn: 'Ugly is a judgement of taste; immoral is a judgement about right and wrong. The first does not prove the second. (Taste against morality.)',
      alts: [
        { fr: 'Une dépense peut être discutable sans être immorale.', en: 'An expense can be debatable without being immoral. (The precise word.)' },
        { fr: 'On peut détester une œuvre sans accuser ceux qui l’ont commandée.', en: 'You can hate a work without accusing those who commissioned it. (A case that shows it.)' },
      ],
    },
    {
      ai: 'Elle dit aussi que ceux qui le trouvent sublime n’ont aucun goût.', en: 'She also says that those who find it sublime have no taste.',
      user: 'Un jugement de goût se discute, mais il ne se démontre pas. Elle peut le trouver joli, sans plus.',
      userEn: 'A judgement of taste can be argued, but not proved. She can find it pretty, nothing more. (Joli against sublime.)',
      alts: [
        { fr: 'Entre joli et sublime, il y a beaucoup de place.', en: 'Between pretty and sublime there is a lot of room. (The degrees of beauty.)' },
        { fr: 'Ceux que le monument émeut ne manquent pas de goût pour autant.', en: 'Those whom the monument moves are not lacking in taste for all that. (Taste is argued, not proved.)' },
      ],
    },
    {
      ai: 'Et les souvenirs des témoins, corrigés par des historiens ?', en: 'And the witnesses’ memories, corrected by historians?',
      user: 'Personne ne les efface : ils seront présentés à part. Mais une plaque doit porter des faits établis.',
      userEn: 'Nobody is erasing them: they will be shown separately. But a plaque must carry established facts. (Memory against history.)',
      alts: [
        { fr: 'La mémoire garde, l’histoire vérifie : les deux ont leur place.', en: 'Memory keeps, history checks: both have their place. (The balance named.)' },
        { fr: 'Le devoir de mémoire ne dispense pas du travail d’historien.', en: 'The duty to remember does not excuse us from the historian’s work. (The lesson’s line.)' },
      ],
    },
    {
      ai: 'Elle trouve choquant de faire une fête le 13 avril.', en: 'She finds it shocking to hold a party on 13 April.',
      user: 'Ce n’est pas une fête : c’est une commémoration. On commémore un drame, on ne le fête pas.',
      userEn: 'It is not a party: it is a commemoration. You commemorate a tragedy, you do not celebrate it. (Commémorer against fêter.)',
      alts: [
        { fr: 'Le 13, la ville commémore ; c’est le 14 qu’elle célèbre la nouvelle digue.', en: 'On the 13th the town commemorates; it is on the 14th that it celebrates the new dyke. (Two days, two verbs.)' },
        { fr: 'Une cérémonie commémorative n’a rien d’une fête.', en: 'A commemorative ceremony is nothing like a party. (The adjective.)' },
      ],
    },
    {
      ai: 'Que lui proposeriez-vous de dire, alors ?', en: 'What would you suggest she say, then?',
      user: '« Je trouve ce monument peu réussi, et je voudrais que les souvenirs aient leur place. » C’est plus juste, et plus fort.',
      userEn: '« I find this monument unsuccessful, and I would like the memories to have their place. » It is more accurate, and stronger. (The restated criticism.)',
      alts: [
        { fr: 'Qu’elle n’aime pas le monument, sans accuser la Ville d’immoralité.', en: 'That she does not like the monument, without accusing the town of immorality. (Restated without the moral charge.)' },
        { fr: 'Qu’elle tient aux souvenirs des témoins, à côté des dates établies.', en: 'That she cares about the witnesses’ memories, beside the established dates. (Restated with mémoire and histoire.)' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['balance', 'commemorer'],
};

const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission',
  title: 'Ta réponse à Thérèse Gingras', frSub: 'Mission écrite',
  brief: `Le Courrier de Sainte-Ondine a publié cette lettre d’une lectrice, Thérèse Gingras, au sujet du nouveau monument des sauveteurs et de la cérémonie du 13 avril. La Société d’histoire te demande d’y répondre, en la vouvoyant, avec courtoisie et précision. Voici sa lettre : ${MESSAGE_THERESE}`,
  briefEn: 'The Courrier de Sainte-Ondine has published this letter from a reader, Thérèse Gingras, about the new rescuers’ monument and the 13 April ceremony. The Société d’histoire asks you to reply, addressing her as vous, courteously and precisely. Her letter says that the monument is ugly and that spending public money on it is therefore immoral; that those who find it sublime have no taste because it is at most pretty; that the town had historians correct the witnesses’ dates although « our memories are our memory »; and that holding a ceremony on 13 April means celebrating a tragedy.',
  produce: 'Écris une réponse de 250 à 350 mots, en vouvoyant Mme Gingras. Nomme au moins trois confusions de sa lettre ; pour chacune, dis ce que chaque mot pèse et ce que cela change ; termine par sa critique reformulée avec les mots justes. Emploie au moins cinq paires de la leçon (par exemple : goût et morale, joli et sublime, souvenir et histoire, commémorer et fêter, sincère et véridique).',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 380 },
  rubric: {
    criteria: [
      {
        key: 'tache', label: 'Réalisation de la tâche', maxPoints: 3,
        descriptors: [
          '3 : Au moins trois confusions sont nommées ; pour chacune, la distinction est donnée et son effet est montré ; la critique est reformulée à la fin. Entre 250 et 350 mots.',
          '2 : Deux confusions seulement sont vraiment traitées, ou la critique reformulée manque, ou la longueur sort un peu des limites.',
          '1 : La réponse dit que Mme Gingras a tort sans montrer ce que ses mots pèsent, ou le texte est beaucoup trop court.',
        ],
      },
      {
        key: 'precision', label: 'Précision du vocabulaire moral, esthétique et mémoriel', maxPoints: 3,
        descriptors: [
          '3 : Au moins cinq paires de la leçon sont employées avec justesse (goût et morale, immoral et discutable, joli, beau et sublime, souvenir, mémoire et histoire, commémorer, fêter et célébrer), chacune au bon endroit.',
          '2 : Les paires sont là, mais l’une est employée de travers, ou la réponse reprend une confusion qu’elle dénonce.',
          '1 : Le vocabulaire reste vague (« c’est faux », « ce n’est pas grave ») ou plusieurs paires sont confondues.',
        ],
      },
      {
        key: 'structure', label: 'Structure de la réponse', maxPoints: 2,
        descriptors: [
          '2 : La réponse avance dans l’ordre : une ouverture courtoise, une confusion par paragraphe (nommer, peser, dire ce que cela change), puis la critique reformulée, avec des liens clairs.',
          '1 : Les confusions se mêlent, ou les définitions s’alignent sans dire ce qu’elles changent.',
        ],
      },
      {
        key: 'correction', label: 'Correction', maxPoints: 2,
        descriptors: [
          '2 : Les constructions sont justes : se souvenir de, à la mémoire de, manquer à, avoir beau + infinitif, une cérémonie commémorative, le moral et la morale.',
          '1 : Des erreurs de construction (se souvenir quelque chose, manquer la déontologie, avoir beau de) gênent parfois la lecture.',
        ],
      },
      {
        key: 'registre', label: 'Registre et ton', maxPoints: 2,
        descriptors: [
          '2 : Un registre soutenu sans pédanterie, le vouvoiement, une formule d’appel et de politesse, un ton courtois : la réponse corrige les mots, jamais la personne.',
          '1 : La réponse se moque, fait la morale, ou passe au tu.',
        ],
      },
    ],
  },
  scaffold: [
    'Madame,',
    'merci pour votre lettre :',
    'Vous passez ici',
    'Ce mot pèse',
    'Cela ne veut pas dire que',
    'Avec les mots justes,',
    'Votre critique deviendrait alors :',
    'Veuillez agréer, Madame,',
  ],
  modelAnswer: 'Madame,\n\nmerci pour votre lettre : elle touche un sujet qui compte, et beaucoup d’habitants partagent votre attachement aux témoins. Plusieurs de vos mots pèsent pourtant autre chose que ce que vous voulez dire.\n\nD’abord, vous passez du goût à la morale. Trouver le monument laid est un jugement esthétique : il se discute, avec des raisons, mais il ne rend pas la dépense immorale. Une dépense peut être discutable, mal choisie ou trop lourde ; elle ne serait immorale que si elle allait contre le bien, par exemple si l’argent était détourné. Vous pouvez donc critiquer l’œuvre sans accuser ceux qui l’ont commandée.\n\nEnsuite, entre joli et sublime, il y a de la place. Si ce monument ne vous saisit pas, dites qu’il vous paraît seulement joli, ou même sans grâce ; ceux qu’il émeut ne manquent pas de goût pour autant. Un jugement de goût n’est pas une preuve.\n\nTroisième confusion : vous prenez la mémoire pour l’histoire. Vos souvenirs sont précieux, et personne ne les efface : ils seront présentés à part, sous le titre Nos souvenirs. Mais une plaque doit porter des faits établis, et c’est le rôle des historiens de les vérifier. Se souvenir ne dispense pas de vérifier.\n\nEnfin, le 13 avril, la Ville ne fête rien : elle commémore. On commémore un drame pour honorer ceux qui l’ont vécu ; c’est le concert du lendemain, pour la digue, qui célèbre une réussite.\n\nAvec les mots justes, votre critique deviendrait plus forte : « Je trouve ce monument peu réussi, et je souhaite que les souvenirs des témoins gardent une vraie place à côté des dates. » Voilà une demande que la Ville peut entendre, et que la Société d’histoire soutient.\n\nVeuillez agréer, Madame, mes salutations distinguées.\nSimon Dufresne, pour la Société d’histoire\n\nLes repères du correcteur (hors décompte) :\n1. Tâche : quatre confusions nommées (goût et morale, joli et sublime, mémoire et histoire, commémorer et fêter), chacune avec ce qu’elle change, puis la critique reformulée.\n2. Précision : esthétique, immoral, discutable, joli, sublime, goût, mémoire, histoire, souvenirs, commémorer, fêter, célébrer.\n3. Structure : une ouverture, une confusion par paragraphe, une critique reformulée.\n4. Correction : passer de… à, aller contre, dispenser de, à côté de.\n5. Registre : vous, courtois, aucune moquerie.',
  modelAnswerEn: 'Madam, thank you for your letter: it touches on a subject that matters, and many residents share your attachment to the witnesses. Several of your words, however, weigh something other than what you mean. First, you slide from taste to morality. Finding the monument ugly is an aesthetic judgement: it can be argued, with reasons, but it does not make the expense immoral. An expense can be debatable, ill-chosen or too heavy; it would only be immoral if it went against the good, for instance if the money had been embezzled. So you can criticise the work without accusing those who commissioned it. Next, between pretty and sublime there is room. If this monument does not move you, say that it seems merely pretty to you, or even graceless; those whom it moves are not lacking in taste for all that. A judgement of taste is not proof. Third confusion: you take memory for history. Your memories are precious, and nobody is erasing them: they will be shown separately, under the title Nos souvenirs. But a plaque must carry established facts, and it is the historians’ role to check them. Remembering does not excuse us from checking. Finally, on 13 April the town is celebrating nothing: it is commemorating. You commemorate a tragedy to honour those who lived through it; it is the concert the next day, for the dyke, that celebrates a success. With the right words, your criticism would be stronger: « I find this monument unsuccessful, and I would like the witnesses’ memories to keep a real place beside the dates. » That is a request the town can hear, and one the Société d’histoire supports. Yours faithfully, Simon Dufresne, for the Société d’histoire. The marker’s notes (not counted): four confusions named, each with what it changes, then the restated criticism.',
  watchFor: [
    { pattern: 'Says Mme Gingras is wrong without naming which two words she mixes up or what each one weighs.', criterion: 'tache', feedback: 'Nomme la confusion : « Vous passez ici de… à… ». Puis dis ce que chaque mot pèse.', ref: 'a12-plan' },
    { pattern: 'Accepts « immoral » for an expense the writer simply dislikes, or never separates the aesthetic judgement from the moral one.', criterion: 'precision', feedback: 'Laid est un jugement de goût ; immoral, un jugement sur le bien. Une dépense peut être discutable sans être immorale.', ref: 'a5-table' },
    { pattern: 'Treats joli and sublime as synonyms, or claims a judgement of taste can be proved.', criterion: 'precision', feedback: 'Le joli plaît, le sublime saisit ; un jugement de goût se discute, il ne se démontre pas.', ref: 'a8-table' },
    { pattern: 'Confuses souvenir, mémoire and histoire, or says the historians erased the witnesses’ memories.', criterion: 'precision', feedback: 'La mémoire garde, l’histoire vérifie : les souvenirs sont présentés à part, la plaque porte les faits établis.', ref: 'a11-table' },
    { pattern: 'Keeps « fêter » or « fête » for the 13 April ceremony, or uses célébrer for the tragedy without care.', criterion: 'precision', feedback: 'On commémore un drame ; on fête une réussite. Le 14, la Ville célèbre la digue.', ref: 'a11-piege' },
    { pattern: 'Calls the writer a liar or her letter an infox, or confuses sincère and véridique.', criterion: 'precision', feedback: 'Mme Gingras est sincère ; c’est son raisonnement qui glisse. Une erreur de mots n’est pas un mensonge.', ref: 'a3-table' },
    { pattern: 'Se souvenir without de, à la mémoire with the wrong preposition, manquer la (without à), avoir beau de, une cérémonie commémorante.', criterion: 'correction', feedback: 'Se souvenir de, à la mémoire de, manquer à, avoir beau + infinitif, une cérémonie commémorative.', ref: 'a10-erreurs' },
    { pattern: 'La morale used for le moral (team spirits), or immoral for amoral.', criterion: 'correction', feedback: 'Le moral, c’est l’état d’esprit ; immoral va contre la morale, amoral l’ignore.', ref: 'a5-erreurs' },
    { pattern: 'Lists definitions without saying what each distinction changes in the writer’s criticism.', criterion: 'structure', feedback: 'Pour chaque distinction, dis ce qu’elle change : l’accusation tombe, ou la critique devient plus juste.', ref: 'a10-focus' },
    { pattern: 'No restated criticism at the end, or one that keeps one of the confusions.', criterion: 'tache', feedback: 'Termine par sa critique reformulée avec les mots justes : « Je trouve ce monument peu réussi… ».', ref: 'a12-usages' },
    { pattern: 'Mocking or moralising tone, or tu to a reader one does not know.', criterion: 'registre', feedback: 'Corrige les mots, jamais la personne : remercie, vouvoie, reste précis et ne fais pas la morale.', ref: 'a12-lecture' },
  ],
  graderNotes: [
    'Count the words of the body only: the salutation, the closing formula and the signature do not count. 250 to 350 with 10% tolerance (225 to 385) before criterion « tache » loses a point. responseSpec allows 380.',
    'The letter carries four confusions: taste and morality (laid, donc immoral), the degrees of beauty and the status of a judgement of taste (sublime, joli, aucun goût), memory and history (nos souvenirs sont notre mémoire, the historians), and commemorating and celebrating (fêter un drame). Any three, well treated, satisfy « tache ». A learner who also notes that « célébrer » can apply to a memory (célébrer la mémoire de) is right: reward it.',
    'Do not judge whether the monument is beautiful, whether the expense was wise, or whether the plaque should carry the witnesses’ memories. Judge the distinctions and the writing only. Never add a personal opinion on the monument to the feedback.',
    'Accept « discutable », « contestable », « mal choisie », « malvenue » for the expense; « un jugement esthétique », « une question de goût » for the taste point; « la mémoire et l’histoire », « les souvenirs et les faits établis », « les témoignages et les archives » for the memory point.',
    'Accept « se rappeler de » in the learner’s text without penalty: the lesson teaches it as a register question (OQLF: attested, grammarians reluctant), not as an error. Prefer « se rappeler quelque chose » in feedback only if the reply is otherwise at a careful register.',
    'The learner need not quote Boileau, Ricœur or anyone; a quotation is neither required nor rewarded, and a misattributed one costs a point in « precision ». No real politician or real memorial law needs to appear; do not reward one.',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 34 du B1 »), never by id.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['balance', 'commemorer'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core',
  title: 'Dis les mots justes à voix haute', frSub: 'Ce que chaque mot pèse',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['balance'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-reponse',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'sincère, véridique', v: 'la personne, le récit', say: fr(E(1223)),
      detail: { title: 'Le vrai', body: 'Sincère pèse la personne, véridique le récit, vraisemblable l’apparence. Mentir, c’est savoir ; se tromper, c’est croire. EN: speaker, account, appearance.', say: fr(E(1236)) } },
    { k: 'infox, erreur', v: 'tromper exprès, ou non', say: fr(E(1250)),
      detail: { title: 'L’information', body: 'Infox et information fallacieuse en France ; fausse nouvelle au Québec. Une erreur de bonne foi n’en est pas une. EN: intent to deceive.', say: fr(E(1252)) } },
    { k: 'morale, déontologie', v: 'pour tous, pour un métier', say: fr(E(1262)),
      detail: { title: 'Le bien', body: 'La morale pour tous, l’éthique pour un cas, la déontologie pour un métier. Le moral, au masculin : l’état d’esprit. EN: right for all, ethics, a trade’s duties.', say: fr(E(1263)) } },
    { k: 'remords, intègre', v: 'une faute, une personne', say: fr(E(1278)),
      detail: { title: 'La conscience', body: 'Le remords pèse une faute, le regret une perte. Intègre pèse une personne ; intégral, un tout. EN: remorse, regret, integrity.', say: fr(E(1292)) } },
    { k: 'joli, sublime', v: 'plaire, saisir', say: fr(E(1304)),
      detail: { title: 'Le beau', body: 'Le joli plaît, le beau s’admire, le sublime saisit. Un jugement de goût se discute ; avoir beau, c’est en vain. EN: pretty, beautiful, sublime.', say: fr(E(1319)) } },
    { k: 'souvenir, histoire', v: 'une personne, des sources', say: fr(E(1348)),
      detail: { title: 'La mémoire', body: 'Le souvenir est d’abord à une personne, la mémoire peut être à un groupe, l’histoire vérifie. On commémore un drame, on fête une réussite. EN: memory, history, commemoration.', say: fr(E(1344)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['balance'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu sais dire ce que pèsent les mots du vrai, du bien, du beau et de la mémoire : la sincérité d’une personne et la véracité d’un récit, le mensonge et l’erreur, l’infox et la simple faute de date, la morale, l’éthique et la déontologie, le remords et le regret, l’intégrité et l’intégralité, le joli, le beau et le sublime, le souvenir, la mémoire et l’histoire. Le piège qui reste, c’est le mot qui accuse au lieu de décrire : « il ment » pour « il se trompe », « immoral » pour « laid », « fêter » pour « commémorer ». Avant d’envoyer une réponse, relis chaque mot qui juge et demande-toi ce qu’il pose sur la balance. EN: Before sending a reply, reread every judging word and ask what it puts on the scales.',
  stats: [
    { k: 'Le vrai', v: 'sincère, véridique, infox' },
    { k: 'Le bien', v: 'morale, déontologie, remords' },
    { k: 'Le beau', v: 'joli, beau, sublime, goût' },
    { k: 'La mémoire', v: 'souvenir, histoire, commémorer' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 2 to 11, a round that
 *  recycles b1.34, b2.28, b2.29 and c1.12 (named in each question), and a
 *  « comme à l'examen » round. `fold()` strips accents, commas, apostrophes,
 *  hyphens and SPACES, so every typed answer turns on a word or a
 *  preposition, and every equally correct answer is listed in `accept`. No
 *  item turns on « se rappeler de ». */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: ES_Q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const MOT = 'Écris le mot qui manque.';

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'L’examen',
  passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r2-sincere', label: 'Sincère, véridique, vraisemblable', targets: ['sincere-confondu'],
      questions: [
        mc('« Elle est sincère » veut dire…', ['elle pense ce qu’elle dit', 'ce qu’elle dit est vrai', 'ce qu’elle dit a l’air vrai'], 0, 'Sincère pèse la personne. EN: she means what she says.', 'a2-cartes'),
        mc('« La véracité d’un témoignage » désigne…', ['son accord avec les faits', 'la bonne foi du témoin'], 0, 'La véracité pèse le récit. EN: its truthfulness.', 'a2-cartes'),
        mc('Une histoire qui a l’air vraie, mais qui est fausse, est…', ['vraisemblable', 'véridique', 'sincère'], 0, 'Vraisemblable ne pèse que l’apparence. EN: plausible.', 'a2-construire'),
        mc('« En toute sincérité » engage la personne sur…', ['ce qu’elle pense', 'des faits vérifiés'], 0, 'La sincérité, pas la véracité. EN: what she thinks.', 'a2-cartes'),
        tI(MOT, 'Un témoin peut être ___ et se tromper. (il pense ce qu’il dit)', 'sincère', 'Sincère, et dans l’erreur. EN: sincere.', 'a2-piege', ['de bonne foi']),
        tI(MOT, 'C’est ___ , et pourtant c’est vrai. (qui semble faux)', 'invraisemblable', 'Ce qui semble faux et qui est vrai. EN: implausible.', 'a2-piege', ['incroyable', 'inimaginable']),
        eS('Le journaliste a vérifié la sincérité des faits.', fr(E(1222)), 'Des faits ne sont pas sincères : on vérifie leur véracité. EN: véracité.', 'a2-piege', ['Le journaliste a vérifié l’exactitude des faits.', 'Le journaliste a vérifié la vérité des faits.']),
        lC('Écoute. De quoi doute-t-on ?', fr(E(1219)), ['du récit', 'de la personne'], 0, 'La véracité du récit, pas la sincérité. EN: the account.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-mentir', label: 'Mentir ou se tromper', targets: ['mentir-confondu'],
      questions: [
        mc('Dire faux en le sachant, c’est…', ['mentir', 'se tromper', 'induire en erreur sans le vouloir'], 0, 'Le menteur sait. EN: lying.', 'a3-table'),
        mc('Un site recopie un ancien kilométrage, faux, sans le savoir. Il…', ['s’est trompé', 'a menti'], 0, 'Sans le savoir : se tromper. EN: it made a mistake.', 'a3-texte'),
        mc('« Un pieux mensonge » est…', ['un mensonge dit pour épargner quelqu’un', 'une erreur de bonne foi', 'une prière'], 0, 'C’est bien un mensonge, bienveillant. EN: a white lie.', 'a3-construire'),
        mc('Taire un défaut qu’on connaît, c’est mentir…', ['par omission', 'de bonne foi'], 0, 'On sait, et l’on se tait. EN: by omission.', 'a3-table'),
        tI(MOT, 'Il ne ment pas : il se ___ de date.', 'trompe', 'Se tromper : dire faux sans le savoir. EN: trompe.', 'a3-erreurs'),
        tI(MOT, 'Je l’ai dit de ___ foi ; je ne savais pas que c’était faux.', 'bonne', 'De bonne foi : on croit dire vrai. EN: bonne.', 'a3-erreurs'),
        eS('Ce panneau a induit les visiteurs à erreur.', fr(E(1234)), 'L’expression figée : induire en erreur. EN: en erreur.', 'a3-erreurs', ['Ce panneau a trompé les visiteurs.']),
        lC('Écoute. Le vendeur savait-il ?', fr(E(1233)), ['oui, il a tu le défaut', 'non, il se trompait'], 0, 'Mentir par omission : il savait. EN: yes.', 'a3-histoire'),
      ],
    },
    {
      id: 'r4-infox', label: 'Infox ou erreur', targets: ['infox-confondue'],
      questions: [
        mc('Au Québec, l’OQLF privilégie…', ['fausse nouvelle', 'infox', 'fake news'], 0, 'L’OQLF privilégie fausse nouvelle et marque infox comme un mot de France. EN: fausse nouvelle.', 'a4-cartes'),
        mc('En France, le Journal officiel de 2018 recommande…', ['infox et information fallacieuse', 'fake news et intox'], 0, 'La recommandation du 4 octobre 2018. EN: infox and information fallacieuse.', 'a4-cartes'),
        mc('Une date fausse donnée par erreur, puis corrigée, est…', ['une erreur', 'une infox', 'une information fallacieuse'], 0, 'Sans intention de tromper. EN: a mistake.', 'a4-construire'),
        mc('Une nouvelle exagérée pour faire rire, sans intention de tromper, est…', ['une nouvelle satirique', 'une fausse nouvelle', 'une rumeur'], 0, 'La satire veut faire rire. EN: a satirical story.', 'a4-cartes'),
        tI(MOT, 'Une information ___ : le terme soutenu recommandé. (f…)', 'fallacieuse', 'Information fallacieuse : le terme officiel avec infox. EN: fallacieuse.', 'a4-piege'),
        tI(MOT, 'Ma voisine a ___ l’infox de bonne foi. (transmis plus loin)', 'relayé', 'Relayer : transmettre plus loin. EN: passed on.', 'a4-construire', ['partagé', 'transmis', 'diffusé', 'propagé', 'fait circuler']),
        eS('Ce n’était pas une erreur, juste une infox de date.', fr(E(1252)), 'Une date fausse sans intention : une erreur. EN: une erreur.', 'a4-piege'),
        lC('Écoute. Qu’est-ce qu’une infox ?', fr(E(1245)), ['une information mensongère ou délibérément biaisée', 'une erreur sans intention', 'une blague'], 0, 'La définition officielle. EN: untrue or deliberately slanted.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-morale', label: 'Morale, éthique, déontologie', targets: ['morale-confondue'],
      questions: [
        mc('Les devoirs écrits d’une profession forment sa…', ['déontologie', 'morale', 'moralité'], 0, 'La déontologie pèse un métier. EN: professional ethics.', 'a5-table'),
        mc('« Arrête de me faire la morale » reproche…', ['des leçons de bien et de mal non demandées', 'une faute professionnelle'], 0, 'Faire la morale : donner des leçons. EN: unwanted lectures.', 'a5-table'),
        mc('Après la défaite, l’équipe n’a plus…', ['le moral', 'la morale', 'la moralité'], 0, 'Le moral : l’état d’esprit. EN: le moral.', 'a5-erreurs'),
        mc('Un être qui ignore tout du bien et du mal est…', ['amoral', 'immoral'], 0, 'Amoral : étranger à la morale. EN: amoral.', 'a5-erreurs'),
        tI(MOT, 'Ce médecin a manqué ___ la déontologie.', 'à', 'Manquer à un devoir. EN: à.', 'a5-erreurs'),
        tI(MOT, 'Le comité d’___ a examiné le projet de recherche.', 'éthique', 'Une réflexion sur un cas : l’éthique. EN: ethics.', 'a5-construire'),
        eS('Arrête de me donner la morale : je connais les règles.', fr(E(1265)), 'L’expression figée : faire la morale. EN: faire la morale.', 'a5-erreurs'),
        lC('Écoute. Que fait l’éthique, selon cette phrase ?', fr(E(1261)), ['elle se demande comment agir ici', 'elle dit ce qui est bien pour tous'], 0, 'L’éthique réfléchit à un cas. EN: it asks how to act here.', 'a5-table'),
      ],
    },
    {
      id: 'r6-remords', label: 'Remords, regret, honte', targets: ['remords-confondu'],
      questions: [
        mc('Une faute commise, qui ronge, donne…', ['des remords', 'de la nostalgie'], 0, 'Le remords pèse une faute. EN: remorse.', 'a6-cartes'),
        mc('Ne pas avoir appris le piano, sans faute de personne, c’est…', ['un regret', 'un remords'], 0, 'Une perte, sans faute. EN: a regret.', 'a6-texte'),
        mc('« Il a conscience du danger » veut dire…', ['il le connaît', 'il se sent coupable'], 0, 'Avoir conscience de : savoir. EN: he is aware of it.', 'a6-cartes'),
        mc('La honte vient surtout…', ['du regard des autres', 'd’un code écrit'], 0, 'La culpabilité, elle, vient de son propre jugement. EN: from other people’s eyes.', 'a6-cartes'),
        tI(MOT, 'Il ne ressent ni honte ni ___ . (une faute qui ronge)', 'remords', 'Le remords, avec un s. EN: remorse.', 'a6-piege', ['culpabilité', 'regret', 'regrets']),
        tI(MOT, 'Avoir ___ conscience : se sentir coupable.', 'mauvaise', 'Avoir mauvaise conscience. EN: a guilty conscience.', 'a6-piege'),
        eS('Il ne ressent ni honte ni remord.', fr(E(1279)), 'Remords prend un s, même au singulier. EN: remords.', 'a6-piege', ['Il ne ressent ni honte ni regret.']),
        lC('Écoute. Pourquoi a-t-il des remords ?', fr(E(1273)), ['il a menti', 'il a manqué un voyage'], 0, 'Une faute : le mensonge. EN: he lied.', 'a6-construire'),
      ],
    },
    {
      id: 'r7-integrite', label: 'Intègre, pas intégral', targets: ['integre-confondu'],
      questions: [
        mc('Une personne qu’on ne peut pas corrompre est…', ['intègre', 'intégrale', 'intégrée'], 0, 'Intègre pèse une personne. EN: of integrity.', 'a7-cartes'),
        mc('« Le texte intégral » est…', ['complet', 'incorruptible'], 0, 'Intégral : complet. EN: complete.', 'a7-cartes'),
        mc('Avant un vote où son beau-frère est candidat, un élu…', ['déclare un conflit d’intérêts', 'cautionne le vote'], 0, 'Il déclare, puis se retire. EN: declares a conflict of interest.', 'a7-cartes'),
        mc('« Se taire, c’est parfois cautionner. » Cautionner veut dire ici…', ['approuver', 'payer une caution'], 0, 'Approuver, parfois par son silence. EN: to endorse.', 'a7-construire'),
        tI(MOT, 'Il a des ___ à accepter ce cadeau. (hésitations morales)', 'scrupules', 'Avoir des scrupules à faire. EN: qualms.', 'a7-erreurs', ['réticences', 'hésitations']),
        tI(MOT, 'Elle a été promue pour sa ___ , pas pour ses relations. (qualité morale, p…)', 'probité', 'La probité : le respect rigoureux de ses devoirs. EN: probity.', 'a7-erreurs'),
        eS('Un juge intégral ne se laisse pas acheter.', fr(E(1288)), 'Une personne est intègre. EN: intègre.', 'a7-erreurs', ['Un juge incorruptible ne se laisse pas acheter.']),
        lC('Écoute. Pourquoi s’est-elle retirée ?', fr(E(1287)), ['pour éviter un conflit d’intérêts', 'par fatigue'], 0, 'Un intérêt personnel aurait pu peser. EN: to avoid a conflict of interest.', 'a7-histoire'),
      ],
    },
    {
      id: 'r8-beau', label: 'Le joli, le beau, le sublime', targets: ['beau-confondu'],
      questions: [
        mc('Un petit café fleuri, plaisant, vite oublié, est…', ['joli', 'sublime'], 0, 'Un plaisir léger : joli. EN: pretty.', 'a8-table'),
        mc('Ce qui saisit et laisse sans voix est…', ['sublime', 'joli', 'gracieux'], 0, 'Le sublime saisit. EN: sublime.', 'a8-table'),
        mc('« Un beau geste » parle…', ['du bien', 'de l’apparence'], 0, 'Beau dit aussi le bien. EN: of the good.', 'a8-table'),
        mc('« Rien n’est beau que le vrai » est un vers…', ['de Boileau', 'd’une chanson récente'], 0, 'Boileau, Épître IX, au XVIIe siècle. EN: Boileau.', 'a8-exemples'),
        tI(MOT, 'C’est ___ , sans plus. (plaisant, léger)', 'joli', 'Joli, sans plus : un plaisir léger. EN: pretty.', 'a8-piege', ['mignon', 'gentil', 'sympathique', 'sympa', 'agréable', 'plaisant']),
        tI(MOT, 'Avec les années, il a ___ ses souvenirs. (rendu plus beaux)', 'embelli', 'Embellir un souvenir. EN: prettied up.', 'a8-piege', ['enjolivé', 'idéalisé', 'magnifié']),
        eS('Il a eu la belle geste de rendre l’argent.', fr(E(1303)), 'Geste est masculin : le beau geste (on dit aussi le joli geste). EN: masculine.', 'a8-piege', ['Il a eu le joli geste de rendre l’argent.', 'Il a eu la générosité de rendre l’argent.', 'Il a eu l’élégance de rendre l’argent.']),
        lC('Écoute. Qu’ont-ils ressenti devant la chute ?', fr(E(1301)), ['un saisissement', 'un plaisir léger'], 0, 'Sans voix : le sublime. EN: awe.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-gout', label: 'Le goût et l’esthétique', targets: ['gout-confondu'],
      questions: [
        mc('« Elle a eu beau chercher » veut dire…', ['elle a cherché en vain', 'elle a cherché avec élégance'], 0, 'Avoir beau : en vain. EN: in vain.', 'a9-cartes'),
        mc('Une plaisanterie qui blesse est…', ['de mauvais goût', 'kitsch', 'sobre'], 0, 'De mauvais goût : déplacé. EN: in poor taste.', 'a9-cartes'),
        mc('Un jugement de goût…', ['se discute avec des raisons', 'se démontre comme un fait'], 0, 'On le discute, on ne le prouve pas. EN: is argued.', 'a9-histoire'),
        mc('Le contraire de criard est…', ['sobre', 'kitsch', 'pailleté'], 0, 'Criard : trop d’éclat ; sobre : sans excès. EN: understated.', 'a9-construire'),
        tI(MOT, 'Le pont est solide, mais il n’est pas très ___ . (agréable à voir)', 'esthétique', 'Esthétique : agréable à voir. EN: attractive.', 'a9-erreurs', ['beau', 'élégant', 'joli', 'harmonieux', 'gracieux']),
        tI(MOT, 'J’ai ___ essayer, je n’aime pas ce tableau. (en vain)', 'beau', 'Avoir beau + infinitif. EN: beau.', 'a9-erreurs'),
        eS('Le pont est solide, mais il n’est pas très éthique.', fr(E(1317)), 'Pour l’apparence : esthétique. EN: esthétique.', 'a9-erreurs', ['Le pont est solide, mais il n’est pas très beau.', 'Le pont est solide, mais il n’est pas très élégant.']),
        lC('Écoute. Comment le couple vit-il son salon kitsch ?', fr(E(1314)), ['avec humour', 'avec honte'], 0, 'Ils l’assument avec humour. EN: with humour.', 'a9-histoire'),
      ],
    },
    {
      id: 'r10-memoire', label: 'Mémoire et souvenir', targets: ['memoire-confondue'],
      questions: [
        mc('Ce que tout un village garde de son passé, c’est sa…', ['mémoire', 'mémoriale'], 0, 'La mémoire peut être collective. EN: its memory.', 'a10-cartes'),
        mc('« De mémoire d’homme » veut dire…', ['aussi loin qu’on se souvienne', 'd’après un seul homme'], 0, 'Selon tout ce dont on se souvient. EN: in living memory.', 'a10-construire'),
        mc('À l’écrit soigné, on écrit plutôt…', ['je me rappelle cette journée', 'je me rappelle de cette journée'], 0, 'Les deux se disent ; à l’écrit soigné, sans de. EN: careful writing drops de.', 'a10-cartes'),
        mc('Le mémoire, au masculin, c’est…', ['un travail de recherche', 'un souvenir'], 0, 'Deux genres, deux sens. EN: a dissertation.', 'a10-construire'),
        tI(MOT, 'Je me souviens ___ cette crue comme si c’était hier.', 'de', 'Se souvenir de. EN: de.', 'a10-erreurs'),
        tI(MOT, 'Ce fut une soirée ___ . (dont on se souviendra)', 'mémorable', 'Mémorable. EN: memorable.', 'a10-erreurs', ['inoubliable']),
        eS('Cette plaque a été posée en mémoire aux sinistrés.', fr(E(1332)), 'Mémoire se construit avec de. EN: à la mémoire des.', 'a10-erreurs', ['Cette plaque a été posée en mémoire des sinistrés.']),
        lC('Écoute. Que s’est-il passé au milieu du discours ?', fr(E(1337)), ['un oubli passager', 'une longue maladie'], 0, 'Un trou de mémoire. EN: a brief blank.', 'a10-construire'),
      ],
    },
    {
      id: 'r11-commemorer', label: 'Commémorer, se souvenir', targets: ['commemoration-confondue'],
      questions: [
        mc('Pour une crue meurtrière, la ville…', ['commémore', 'fête'], 0, 'Un drame se commémore. EN: commemorates.', 'a11-table'),
        mc('Au Canada, le 11 novembre est…', ['le jour du Souvenir', 'la fête nationale'], 0, 'Date de l’armistice de 1918, il honore ceux qui sont morts au service du pays. EN: Remembrance Day.', 'a11-construire'),
        mc('Établir les faits par des sources, c’est le rôle…', ['de l’histoire', 'de la mémoire', 'de la commémoration'], 0, 'L’histoire établit. EN: of history.', 'a11-histoire'),
        mc('Une loi qui qualifie officiellement un fait du passé s’appelle…', ['une loi mémorielle', 'une loi mémorable'], 0, 'Mémoriel : qui concerne la mémoire collective. EN: a memory law.', 'a11-table'),
        tI(MOT, 'Une cérémonie ___ aura lieu le 13 avril. (qui commémore)', 'commémorative', 'L’adjectif : commémorative. EN: commemorative.', 'a11-piege', ['du souvenir']),
        tI(MOT, 'Le monument ___ morts se dresse au centre du village.', 'aux', 'Le monument aux morts. EN: aux.', 'a11-piege'),
        eS('On ne commémore pas un drame : on le fête.', fr(E(1344)), 'C’est l’inverse : un drame se commémore. EN: reversed.', 'a11-piege'),
        lC('Écoute. Que fait la mémoire, selon cette phrase ?', fr(E(1347)), ['elle dit ce qu’un groupe retient', 'elle cherche ce qui s’est passé'], 0, 'L’histoire cherche ; la mémoire retient. EN: what a group keeps.', 'a11-histoire'),
      ],
    },
    {
      id: 'r12-recyclage', label: 'Le B1, le B2 et le C1 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(MEDIAS_REF)} : devant une info, tu te demandes…`, ['qui la dit, et comment', 'combien de fois elle a été partagée'], 0, `« ${B134_REFRAME} » EN: ${B134_REFRAME_EN}`, 'a4-cartes'),
        mc(`${Cap(MEDIAS_REF)} t’a donné « une fausse nouvelle, une infox ». Ce qui sépare une infox d’une erreur, c’est…`, ['l’intention de tromper', 'la longueur du message'], 0, 'L’intention, vue à l’acte 4. EN: intent to deceive.', 'a4-construire'),
        mc(`${Cap(SOINS_REF)} : un consentement éclairé est donné…`, ['après avoir compris', 'sans poser de question'], 0, `« ${B228_REFRAME} » EN: ${B228_REFRAME_EN}`, 'a1-rappel'),
        mc(`${Cap(SOINS_REF)} : demander les risques avant d’accepter une intervention relève…`, ['de l’éthique du soin', 'de l’esthétique'], 0, 'Une réflexion sur la bonne conduite dans un cas. EN: the ethics of care.', 'a5-table'),
        mc(`${Cap(SCIENCE_REF)} : une revue qui retire un article après des erreurs graves…`, ['corrige la recherche', 'ment par omission'], 0, `« ${B229_REFRAME} » EN: ${B229_REFRAME_EN}`, 'a1-rappel'),
        mc(`${Cap(IDEES_REF)} : « ${C112_REFRAME} » Appliquée ici, cette méthode demande…`, ['ce que chaque mot pèse', 'quel mot est le plus rare'], 0, `La même méthode, une question précise. EN: ${C112_REFRAME_EN}`, 'a1-rappel'),
        mc(`${Cap(IDEES_REF)} t’a appris croire et savoir. Un témoin sincère qui se trompe…`, ['croyait dire vrai', 'savait qu’il disait faux'], 0, 'Il croyait : il se trompe, il ne ment pas. EN: believed he was telling the truth.', 'a3-construire'),
        lC(`Écoute. ${Cap(SOINS_REF)} : que veut la personne ?`, fr(SOINS_DECISION), ['prendre une décision éclairée', 'refuser tout traitement'], 0, 'Une décision prise après avoir compris. EN: an informed decision.', 'a1-rappel'),
      ],
    },
    {
      id: 'r13-examen', label: 'Comme à l’examen', targets: ['reponse-confuse'],
      questions: [
        mc('Compréhension écrite. D’après sa réponse, que reproche d’abord Hélène à Raymond ?', ['de dire que M. Lavoie a menti', 'de ne pas lire le journal', 'de critiquer la plaque', 'de vivre loin du lac'], 0, 'Sa première distinction : mentir et se tromper. EN: saying Mr Lavoie lied.', 'a12-lecture'),
        mc('Compréhension écrite. Pourquoi le témoignage n’est-il pas une infox, selon Hélène ?', ['il ne cherche pas à tromper', 'il est trop court', 'il est entièrement exact', 'il vient du Québec'], 0, 'Une erreur de bonne foi n’est pas une infox. EN: it does not seek to deceive.', 'a12-lecture'),
        mc('Compréhension écrite. Selon Hélène, le journal a-t-il manqué à sa déontologie ?', ['non : l’article précisait ce que disent les archives', 'oui, gravement', 'elle refuse de répondre', 'oui, mais par erreur'], 0, 'L’article citait les archives. EN: no.', 'a12-lecture'),
        mc('Choisis le mot juste : « Une plaque … la mémoire des sauveteurs. »', ['à', 'pour', 'avec', 'sur'], 0, 'À la mémoire de. EN: à.', 'a10-erreurs'),
        mc('Choisis le mot juste : « Il ne ressent ni honte ni … . »', ['remords', 'moral', 'goût', 'intégral'], 0, 'Une faute qui ronge : le remords. EN: remorse.', 'a6-piege'),
        tI('Écris le mot qui manque.', 'Avec le mot juste, votre critique devient plus ___ .', 'forte', 'La précision renforce la critique. EN: stronger.', 'a12-usages', ['juste', 'claire', 'solide', 'précise', 'convaincante', 'efficace', 'crédible', 'utile', 'percutante']),
        eS('Ce n’est pas une question de morale, mais d’esthétique professionnelle.', fr(E(1358)), 'Les devoirs d’un métier : la déontologie. EN: déontologie.', 'a12-usages', ['Ce n’est pas une question de morale, mais d’éthique professionnelle.']),
        lC('Compréhension orale. Écoute. Que fait la personne ?', fr(E(1353)), ['elle nomme une confusion', 'elle approuve tout', 'elle change de sujet'], 0, 'Elle nomme ce que le mot pèse. EN: she names a confusion.', 'a12-plan'),
      ],
    },
  ],
  audio: AUDIO, say: REFRAME,
};

/** As c1.12: each closed question's options are ROTATED, `correct` moved in
 *  step, onto the least-used slot so far. The option set and the right answer
 *  are unchanged. */
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
  type: 'reviewDeck', id: 'a12-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'truthfulness (of an account)', back: 'la véracité', say: fr(E(1219)) },
    { front: 'to lie by omission', back: 'mentir par omission', say: fr(E(1233)) },
    { front: 'fake news (France / Québec)', back: 'une infox / une fausse nouvelle', say: fr(E(1250)) },
    { front: 'professional ethics', back: 'la déontologie', say: fr(E(1263)) },
    { front: 'team spirits', back: 'le moral', say: fr(E(1266)) },
    { front: 'remorse, not regret', back: 'des remords', say: fr(E(1273)) },
    { front: 'of integrity / complete', back: 'intègre / intégral', say: fr(E(1292)) },
    { front: 'however hard she tried', back: 'elle a eu beau essayer', say: fr(E(1316)) },
    { front: 'to commemorate, not to celebrate', back: 'commémorer, pas fêter', say: fr(E(1344)) },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Chaque mot pèse autre chose',
  body: `${REFRAME} Tu es parti des fausses nouvelles de ${MEDIAS_REF}, de l’éthique du soin de ${SOINS_REF}, de la recherche qui se corrige dans ${SCIENCE_REF} et de la méthode de ${IDEES_REF}, pour peser les mots du vrai, du bien, du beau et de la mémoire : sincère et véridique, mentir et se tromper, morale et déontologie, remords et regret, joli et sublime, souvenir et histoire. La suite, c’est ${NEXT_REF_PLANNED} : les synonymes et leurs nuances, de l’intensité à la connotation. EN: Next comes lesson 17 in C1, synonyms and their nuances.`,
  points: [
    'Sincère pèse la personne ; véridique, le récit.',
    'Mentir, c’est savoir ; se tromper, c’est croire.',
    'Le joli plaît, le beau s’admire, le sublime saisit.',
    'La mémoire garde ; l’histoire vérifie ; on commémore un drame.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['balance', 'commemorer'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ta réponse',
    opener: {
      line: 'Une lettre de lectrice en colère contre un monument : ici tu lui réponds en disant ce que ses mots pèsent, puis tu passes l’examen. EN: A reader’s angry letter about a monument: here you reply by saying what her words weigh, then sit the exam.',
      imageRef: 'lessons/notions-morales/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit ta réponse et passé l’examen : quatre-vingt-seize questions, douze manches. EN: You wrote your reply and sat the exam: ninety-six questions, twelve rounds.',
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r5-morale', 'a12-quiz/r9-gout', 'a12-review'],
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
  { id: 'd-sincere', title: 'La personne ou le récit', format: 'sort' as const, coach: 'Deux piles : la phrase pèse la personne qui parle, ou le récit lui-même. EN: the speaker or the account?', buckets: ['la personne', 'le récit'], items: [E(1212), E(1218), E(1215), E(1213), E(1222), E(1224)], audio: AUDIO },
  { id: 'd-mentir', title: 'Savoir ou croire', format: 'mcq' as const, coach: 'Le menteur sait ; celui qui se trompe croit. EN: the liar knows; the mistaken person believes.', q: 'Il croit dire vrai, mais c’est faux. Il…', opts: ['se trompe', 'ment'], correct: 0, why: 'Sans le savoir : se tromper. EN: he is mistaken.', items: [E(1230), E(1232), E(1235), E(1239), E(1229), E(1233)], audio: AUDIO },
  { id: 'd-infox', title: 'Tromper exprès, ou non', format: 'sort' as const, coach: 'Deux piles : la phrase parle de tromper exprès, ou d’une erreur, d’une satire, d’une rumeur. EN: deliberate or not?', buckets: ['tromper exprès', 'sans intention'], items: [E(1245), E(1240), E(1244), E(1252), E(1248), E(1249)], audio: AUDIO },
  { id: 'd-morale', title: 'Pour tous, ou pour un métier', format: 'sort' as const, coach: 'Deux piles : la morale pour tous, ou la déontologie d’un métier. EN: morality or professional ethics?', buckets: ['la morale', 'la déontologie'], items: [E(1254), E(1265), E(1258), E(1255), E(1257), E(1263)], audio: AUDIO },
  { id: 'd-remords', title: 'Une faute, ou une perte', format: 'mcq' as const, coach: 'Le test de la faute : y a-t-il un acte qu’on se reproche ? EN: the fault test.', q: 'Elle n’a pas pu partir en voyage à cause d’une grève. Elle a…', opts: ['des regrets', 'des remords'], correct: 0, why: 'Aucune faute : un regret. EN: regrets.', items: [E(1268), E(1269), E(1273), E(1274), E(1279), E(1270)], audio: AUDIO },
  { id: 'd-integrite', title: 'Une personne, ou un tout', format: 'mcq' as const, coach: 'Intègre pèse une personne ; intégral, un texte ou un tout. EN: a person or a whole.', q: 'Le texte … du rapport est en ligne.', opts: ['intégral', 'intègre'], correct: 0, why: 'Complet : intégral. EN: intégral.', items: [E(1281), E(1288), E(1291), E(1287), E(1289), E(1293)], audio: AUDIO },
  { id: 'd-beau', title: 'Plaire, admirer, saisir', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute et dis ce qu’elle pèse : un plaisir, une harmonie, un saisissement, ou le bien. EN: say what each one weighs.', items: [E(1295), E(1300), E(1302), E(1301), E(1297), E(1303)], audio: AUDIO },
  { id: 'd-gout', title: 'Juger avec des raisons', format: 'flashcard' as const, coach: 'Lis chaque phrase et donne une raison qui l’appuie, ou dis pourquoi avoir beau n’a rien de beau. EN: give a reason for each judgement.', items: [E(1309), E(1311), E(1312), E(1317), E(1316), E(1322)], audio: AUDIO },
  { id: 'd-memoire', title: 'Une personne, ou un groupe', format: 'sort' as const, coach: 'Deux piles : le souvenir d’une personne, ou la mémoire d’un groupe et l’hommage. EN: one person or a group?', buckets: ['un souvenir', 'une mémoire'], items: [E(1323), E(1333), E(1324), E(1331), E(1326), E(1205)], audio: AUDIO },
  { id: 'd-commemorer', title: 'Commémorer, fêter, vérifier', format: 'mcq' as const, coach: 'On commémore un drame, on fête une réussite ; l’histoire vérifie ce que la mémoire garde. EN: commemorate, celebrate, verify.', q: 'Pour les cinquante ans d’une crue meurtrière, la ville…', opts: ['commémore', 'fête'], correct: 0, why: 'Un drame se commémore. EN: commemorates.', items: [E(1338), E(1343), E(1344), E(1346), E(1347), E(1345)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1, le B2 et le C1 en renfort', format: 'flashcard' as const, coach: 'Six phrases des leçons précédentes : dis ce que chacune t’apprend pour peser tes mots. EN: what each earlier sentence teaches here.', items: [MEDIAS_ROW, MEDIAS_CIRCULE, SOINS_ROW, SOINS_DECISION, SCIENCE_ROW, E(1203)], audio: AUDIO },
  { id: 'd-reponse', title: 'Nommer, peser, reformuler', format: 'flashcard' as const, coach: 'Lis chaque phrase, puis écris la tienne sur le même modèle pour ta réponse à Mme Gingras. EN: read each one, then write your own.', items: [E(1352), E(1353), E(1354), E(1355), E(1356), E(1359)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'sincere-confondu', description: 'Uses sincère for an account or véracité for a person, or treats a plausible story as a true one.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a12-mission'], drill: 'd-sincere', retest: 'd-sincere' },
  { id: 'mentir-confondu', description: 'Says someone lied when they were only mistaken, says a thing lied, or misbuilds se tromper, de bonne foi or induire en erreur.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check', 'a12-mission'], drill: 'd-mentir', retest: 'd-mentir' },
  { id: 'infox-confondue', description: 'Calls a good-faith error, a satire or a rumour « une infox », or does not know which word France and Québec recommend.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a12-mission'], drill: 'd-infox', retest: 'd-infox' },
  { id: 'morale-confondue', description: 'Uses morale for a profession’s written duties, la morale for le moral, immoral for amoral, or misbuilds faire la morale or manquer à.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a12-mission'], drill: 'd-morale', retest: 'd-morale' },
  { id: 'remords-confondu', description: 'Says remords for a loss with no fault, confuses avoir conscience de with avoir mauvaise conscience, or drops the s of remords.', detectOn: ['a6-construire', 'a6-piege', 'a6-check'], drill: 'd-remords', retest: 'd-remords' },
  { id: 'integre-confondu', description: 'Says intègre for a complete text or intégral for a person, or misuses cautionner, scrupules à or conflit d’intérêts.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check'], drill: 'd-integrite', retest: 'd-integrite' },
  { id: 'beau-confondu', description: 'Uses joli, beau and sublime as if they weighed the same thing, or misses the moral sense of un beau geste.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a12-mission'], drill: 'd-beau', retest: 'd-beau' },
  { id: 'gout-confondu', description: 'Treats a judgement of taste as proof, confuses éthique and esthétique, or reads avoir beau as being about beauty.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a12-mission'], drill: 'd-gout', retest: 'd-gout' },
  { id: 'memoire-confondue', description: 'Uses souvenir for a group’s memory, drops the de of se souvenir de or à la mémoire de, or confuses mémorable and mémorial.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check', 'a12-mission'], drill: 'd-memoire', retest: 'd-memoire' },
  { id: 'commemoration-confondue', description: 'Says fêter for a tragedy, takes memory for history, or misbuilds une cérémonie commémorative or le monument aux morts.', detectOn: ['a11-construire', 'a11-piege', 'a11-check', 'a12-mission'], drill: 'd-commemorer', retest: 'd-commemorer' },
  { id: 'recyclage', description: 'Loses a tool this lesson sits on: who says a piece of news and how, informed consent, research that corrects itself, the method of naming what separates two neighbouring words.', detectOn: ['a1-rappel', 'a4-cartes', 'a5-table'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'reponse-confuse', description: 'In a reply, says the other person is wrong without naming the confusion, saying what each word weighs or restating the criticism.', detectOn: ['a12-plan', 'a12-scenario', 'a12-mission'], drill: 'd-reponse', retest: 'd-reponse' },
];

/** As c1.12: missions do not shuffle (MissionRich renders authored order), so
 *  every closed mission item and drill is ROTATED here, `correct` moved in
 *  step, so that each option-count class spreads evenly and no slot repeats
 *  more than twice in a row. Same walk order as `b1-answer-slots.test.ts`. */
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
  sheet('sheet-vrai', 'Le vrai, le faux, l’intention', ['sincère, véridique, vraisemblable', 'mentir ou se tromper', 'infox et fausse nouvelle'], [
    teach('sheet-vrai-teach', 'La personne, le récit, l’intention',
      `${REFRAME} Sincère pèse la personne : elle dit ce qu’elle pense. Véridique pèse le récit : il dit ce qui s’est passé. Vraisemblable ne pèse que l’apparence. Mentir, c’est dire faux en le sachant ; se tromper, c’est dire faux en croyant dire vrai. Une infox veut tromper ; une erreur de bonne foi, non. EN: ${REFRAME_EN}`),
    table('sheet-vrai-adjectifs', 'Sincère, véridique, vraisemblable', ['Mot', 'Il pèse', 'Exemple'], [
      ['sincère, la sincérité', 'la personne qui parle', 'Elle a parlé avec une grande sincérité.'],
      ['véridique, la véracité', 'le récit, le témoignage (soutenu)', 'Le journaliste a vérifié la véracité des faits.'],
      ['vrai, exact', 'les faits (courant)', 'Son souvenir n’est pas exact.'],
      ['vraisemblable', 'l’apparence du vrai', 'Son histoire est vraisemblable, mais elle est fausse.'],
      ['invraisemblable', 'ce qui semble faux', 'C’est invraisemblable, et pourtant c’est vrai.'],
      ['en toute sincérité', 'ce que pense la personne', 'En toute sincérité, je ne me souviens plus de la date.'],
    ]),
    table('sheet-vrai-mentir', 'Dire faux', ['Expression', 'Intention ?', 'Exemple'], [
      ['mentir', 'oui : on sait', 'Il a menti effrontément.'],
      ['se tromper', 'non : on croit dire vrai', 'Il ne ment pas : il se trompe de date.'],
      ['tromper quelqu’un', 'souvent', 'Elle nous a trompés sur le prix.'],
      ['induire en erreur', 'pas forcément', 'Ce panneau a induit les visiteurs en erreur.'],
      ['mentir par omission', 'oui : on tait', 'En taisant le défaut, le vendeur a menti par omission.'],
      ['de bonne foi, de mauvaise foi', 'non, ou oui', 'Je l’ai dit de bonne foi.'],
    ]),
    table('sheet-vrai-infox', 'Infox, fausse nouvelle, erreur', ['Terme', 'Qui le recommande', 'Ce qu’il pèse'], [
      ['infox', 'France : Journal officiel, 4 octobre 2018', 'une information mensongère ou délibérément biaisée'],
      ['information fallacieuse', 'France et OQLF', 'la même chose, en registre soutenu'],
      ['fausse nouvelle', 'OQLF (2018), terme privilégié au Québec ; aussi dans la loi française de 1881', 'une publication qui veut tromper'],
      ['fake news', 'déconseillé par l’OQLF', 'l’emprunt anglais'],
      ['nouvelle satirique', 'à ne pas confondre (OQLF)', 'veut faire rire, pas tromper'],
      ['une erreur', 'aucun', 'dire faux sans le vouloir'],
      ['l’intox', 'familier', 'une manœuvre pour tromper l’opinion'],
    ]),
  ]),
  sheet('sheet-morale', 'Le bien, la faute, l’intégrité', ['morale, éthique, déontologie', 'remords, regret, honte', 'intègre et intégral'], [
    teach('sheet-morale-teach', 'Pour tous, pour un cas, pour un métier',
      'Dans l’usage courant, la morale dit le bien et le mal pour tous ; l’éthique réfléchit à la bonne façon d’agir dans un domaine ou un cas ; la déontologie fixe les devoirs écrits d’une profession. Les deux premiers mots s’échangent souvent, et les philosophes ne tracent pas tous la frontière au même endroit. Au Québec, chaque ordre professionnel adopte un code de déontologie (Code des professions, article 87), et une loi s’intitule Code d’éthique et de déontologie des membres de l’Assemblée nationale : les deux mots y voisinent. EN: morality for all, ethics for a case, professional ethics for a trade.'),
    table('sheet-morale-mots', 'Les mots du bien', ['Mot', 'Il pèse', 'Exemple'], [
      ['la morale', 'le bien et le mal, pour tous', 'Arrête de me faire la morale.'],
      ['l’éthique', 'la bonne conduite dans un cas', 'Le comité d’éthique a examiné le projet.'],
      ['la déontologie', 'les devoirs d’une profession', 'Il a manqué à la déontologie.'],
      ['le moral', 'l’état d’esprit', 'L’équipe n’a plus le moral.'],
      ['immoral', 'contraire à la morale', 'un acte immoral'],
      ['amoral', 'étranger à la morale', 'un être amoral'],
    ]),
    table('sheet-morale-sentiments', 'Remords, regret, honte', ['Mot', 'Il pèse', 'Exemple'], [
      ['le remords', 'une faute commise', 'Il a des remords : il n’aurait jamais dû mentir.'],
      ['le regret', 'une perte, une occasion manquée', 'Je regrette de ne pas être allée à son mariage.'],
      ['la honte', 'le regard des autres', 'J’ai honte d’avoir oublié son anniversaire.'],
      ['la culpabilité', 'son propre jugement', 'La culpabilité l’empêche de dormir.'],
      ['avoir mauvaise conscience', 'se sentir coupable', 'Il a mauvaise conscience.'],
      ['avoir conscience de', 'savoir, percevoir', 'Il a conscience du risque.'],
      ['la conscience professionnelle', 'le soin au travail', 'Elle travaille avec conscience.'],
    ]),
    table('sheet-morale-integrite', 'Intègre et ses voisins', ['Mot', 'Il pèse', 'Exemple'], [
      ['intègre, l’intégrité', 'une personne incorruptible', 'Un juge intègre ne se laisse pas acheter.'],
      ['intégral, l’intégralité', 'un tout complet', 'Le texte intégral du rapport est en ligne.'],
      ['la probité', 'le respect rigoureux des devoirs (soutenu)', 'Elle a été promue pour sa probité.'],
      ['avoir des scrupules à', 'hésiter par souci moral', 'Il a des scrupules à accepter ce cadeau.'],
      ['sans scrupules', 'prêt à tout', 'un homme d’affaires sans scrupules'],
      ['un conflit d’intérêts', 'un intérêt personnel qui pèse sur une décision', 'Elle s’est retirée pour éviter un conflit d’intérêts.'],
      ['cautionner', 'approuver, parfois par son silence', 'Se taire, c’est parfois cautionner.'],
    ]),
  ]),
  sheet('sheet-beau', 'Le beau et le goût', ['joli, beau, sublime', 'le goût et l’esthétique', 'avoir beau'], [
    teach('sheet-beau-teach', 'Plaire, admirer, saisir',
      'Le joli plaît, le beau s’admire, le sublime saisit. Beau est le mot le plus large et peut couvrir les trois ; il dit aussi le bien (un beau geste). Un jugement de goût se discute avec des raisons, il ne se démontre pas. Boileau, au XVIIe siècle, liait le beau au vrai : « Rien n’est beau que le vrai : le vrai seul est aimable » (Épître IX). Et avoir beau + infinitif n’a rien de beau : c’est faire en vain. EN: pretty pleases, beautiful is admired, sublime overwhelms.'),
    table('sheet-beau-degres', 'Les degrés du beau', ['Mot', 'Il pèse', 'Exemple'], [
      ['joli', 'un plaisir léger', 'C’est joli, sans plus.'],
      ['beau, la beauté', 'une harmonie qu’on admire', 'Cette chapelle est d’une beauté austère.'],
      ['sublime', 'une grandeur qui dépasse', 'Nous sommes restés sans voix : c’était sublime.'],
      ['le sentiment du sublime', 'admiration et effroi (soutenu)', 'devant l’océan en tempête'],
      ['un beau geste', 'le bien', 'Il a eu le beau geste de rendre l’argent.'],
      ['embellir', 'rendre plus beau, ou mieux que nature', 'Il a embelli ses souvenirs.'],
    ]),
    table('sheet-beau-gout', 'Le goût et l’esthétique', ['Expression', 'Sens', 'Exemple'], [
      ['avoir du goût', 'savoir juger du beau', 'Le goût se forme : on apprend à voir.'],
      ['de mauvais goût', 'déplacé, choquant', 'une plaisanterie de mauvais goût'],
      ['kitsch', 'chargé, sentimental, parfois revendiqué', 'Leur salon est kitsch, et ils l’assument.'],
      ['criard / sobre', 'trop d’éclat / sans excès', 'des couleurs criardes'],
      ['l’esthétique, esthétique', 'la réflexion sur le beau ; agréable à voir', 'Le pont n’est pas très esthétique.'],
      ['un esthète', 'qui place le beau avant tout', 'Un esthète trouvera ce salon trop chargé.'],
      ['avoir beau + infinitif', 'faire en vain', 'Elle a eu beau chercher, elle n’a rien trouvé.'],
    ]),
  ]),
  sheet('sheet-memoire', 'Le souvenir, la mémoire, l’histoire', ['souvenir et mémoire', 'commémorer et fêter', 'histoire et mémoire'], [
    teach('sheet-memoire-teach', 'Garder, rappeler, vérifier',
      'Un souvenir est d’abord celui d’une personne (le souvenir collectif vit dans quelques formules : le jour du Souvenir) ; la mémoire est la faculté de se souvenir, et ce qu’un groupe garde. On se souvient de quelque chose ; à l’écrit soigné, on se rappelle quelque chose (se rappeler de est attesté depuis le XVIIIe siècle et courant à l’oral, mais les grammairiens restent réticents, selon l’OQLF). On commémore un drame, on fête une réussite ; célébrer peut dire les deux. L’histoire établit les faits par des sources ; la mémoire dit ce qu’un groupe en retient. Le philosophe Paul Ricœur a consacré à ces questions La Mémoire, l’histoire, l’oubli (Seuil, 2000), où il cherche un équilibre entre trop et trop peu de mémoire. EN: a recollection is first one person’s, memory can be a group’s; history establishes, memory retains.'),
    table('sheet-memoire-mots', 'Souvenir et mémoire', ['Expression', 'Sens', 'Exemple'], [
      ['le souvenir', 'ce qui revient à une personne', 'Mes souvenirs de la crue sont flous.'],
      ['la mémoire', 'la faculté ; ce que garde un groupe', 'la mémoire du village'],
      ['se souvenir de', 'toujours avec de', 'Je me souviens de cette crue.'],
      ['se rappeler', 'sans de à l’écrit soigné', 'Je me rappelle très bien cette journée.'],
      ['à la mémoire de', 'pour honorer un disparu', 'une plaque à la mémoire des sinistrés'],
      ['de mémoire d’homme', 'aussi loin qu’on se souvienne', 'De mémoire d’homme, l’eau n’était jamais montée si haut.'],
      ['un trou de mémoire', 'un oubli passager', 'J’ai eu un trou de mémoire.'],
      ['mémorable / un mémorial', 'dont on se souviendra / un monument', 'une soirée mémorable'],
    ]),
    table('sheet-memoire-publique', 'La mémoire publique', ['Expression', 'Sens', 'Remarque'], [
      ['commémorer', 'rappeler solennellement', 'un drame, une victoire'],
      ['fêter / célébrer', 'se réjouir / se réjouir ou honorer', 'on ne fête pas un drame'],
      ['le devoir de mémoire', 'l’obligation de se souvenir', 'très employé ; certains préfèrent travail de mémoire'],
      ['le travail de mémoire', 'comprendre un passé difficile', 'soutenu'],
      ['un lieu de mémoire', 'où un groupe reconnaît son passé', 'monument, date, objet'],
      ['une loi mémorielle', 'une loi qui qualifie un fait du passé', 'en France, par exemple la loi du 21 mai 2001 sur la traite et l’esclavage ; le terme décrit, et le sujet a fait débat'],
      ['le jour du Souvenir', 'le 11 novembre au Canada', 'date de l’armistice de 1918 ; honore ceux qui sont morts au service du pays'],
    ]),
    teach('sheet-memoire-debat', 'Un mot de prudence',
      'En 2008, une mission d’information de l’Assemblée nationale française a réfléchi aux questions mémorielles et à la distinction entre histoire et mémoire. Cette leçon t’apprend les mots de ce débat, pas une position : quand tu lis loi mémorielle ou devoir de mémoire, demande-toi qui parle, et ce que le mot pèse. EN: this lesson teaches the words of the debate, not a position.'),
  ]),
  sheet('sheet-reponse', 'Répondre à une confusion', ['le plan', 'la liste de contrôle', 'toutes les balances'], [
    teach('sheet-reponse-teach', 'Nommer, peser, reformuler',
      `${REFRAME} Une bonne réponse remercie, nomme chaque confusion, dit ce que chaque mot pèse, montre ce que la distinction change, puis reformule la critique avec le mot juste. Elle corrige les mots, jamais la personne. EN: ${REFRAME_EN}`),
    table('sheet-reponse-plan', 'Le plan', ['Partie', 'Tournure', 'Exemple'], [
      ['l’ouverture', 'merci, un sujet qui compte', 'Merci pour votre lettre : elle touche un sujet qui compte.'],
      ['la confusion', 'vous prenez ici… pour…', 'Vous prenez ici la sincérité pour la vérité.'],
      ['ce que le mot pèse', 'ce mot pèse…', 'Ce mot juge la personne ; c’est le récit que vous vouliez juger.'],
      ['la colère reconnue', 'je comprends…, je ne partage pas…', 'Je comprends votre colère ; je ne partage pas votre mot.'],
      ['la critique reformulée', 'avec le mot juste', 'Avec le mot juste, votre critique devient plus forte.'],
    ]),
    table('sheet-reponse-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Trois confusions au moins', 'une par paragraphe'],
      ['Chaque mot pesé', 'la personne ou le récit, la faute ou la perte'],
      ['Chaque distinction change quelque chose', 'l’accusation tombe, la critique s’affine'],
      ['La critique est reformulée', 'à la fin, avec le mot juste'],
      ['Les constructions', 'se souvenir de, à la mémoire de, manquer à'],
      ['Le ton', 'vous, courtois, sans morale ni moquerie'],
    ]),
    table('sheet-reponse-balances', 'Toutes les balances de la leçon', ['Paire', 'Ce que chaque mot pèse'], [
      ['sincère / véridique', 'la personne / le récit'],
      ['mentir / se tromper', 'on sait / on croit'],
      ['infox / erreur', 'tromper exprès / sans le vouloir'],
      ['morale / déontologie', 'pour tous / pour un métier'],
      ['remords / regret', 'une faute / une perte'],
      ['intègre / intégral', 'une personne / un tout'],
      ['joli / sublime', 'plaire / saisir'],
      ['goût / preuve', 'se discute / se démontre'],
      ['souvenir / mémoire', 'une personne / la faculté, un groupe'],
      ['commémorer / fêter', 'un drame / une réussite'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-16-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, lines in authored order, at natural C1 speed; the lines are hidden, so the take must be continuous.';
const TRAP = 'The audio step plays each card’s CORRECT sentence. Six lines, one voice, plainly and at the same pace. The wrong versions in promptSound are NEVER spoken.';
const TEXTE = 'One voice, read as written, at a natural reading pace: the instruction sentence first, then the text itself after a short pause.';
const CARDS = 'Four cards, one coach voice, neutral and clear; each card’s French line read once, unhurried.';
const REC_DESC: Record<string, string> = {
  'rec-c1-16-soiree': 'Hélène Rioux’s write-up of the evening of testimonies (act 1), ONE female Québécoise voice, one take, warm and measured like a newsletter read aloud. The quoted « Alors, il ment ! » sharper, then back to calm.',
  'rec-c1-16-club': 'Fatoumata and Hélène at the reading club (act 2), two voices, one take: Fatoumata (Senegalese accent) precise and friendly, Hélène (Québec) enthusiastic.',
  'rec-c1-16-vrai-cartes': `The four sincère / véridique / vraisemblable cards (act 2). ${CARDS}`,
  'rec-c1-16-piege-vrai': TRAP,
  'rec-c1-16-vrai-ecoute': `${ONE_TAKE} Eight lines, ONE VOICE: Hélène Rioux, as named in the questions, commenting on testimonies at the Société d’histoire: even, thoughtful.`,
  'rec-c1-16-texte-a2': `The book review (act 2). ${TEXTE} A female voice, literary and calm.`,
  'rec-c1-16-voiture': 'Samira and her brother Karim on the phone (act 3), two voices, one take: Samira annoyed, Karim calm and precise. Light street noise on her side. Gatineau accents welcome.',
  'rec-c1-16-texte-a3': `The consumer column (act 3). ${TEXTE} Read like a local radio columnist: lively, clear.`,
  'rec-c1-16-infox-ecoute': `${ONE_TAKE} Eight lines, ONE VOICE: the journalist Inès Morin, as named in the questions, presenting a fact-check segment: brisk and neutral, a Québec accent.`,
  'rec-c1-16-infox-cartes': `The four infox / fausse nouvelle cards (act 4). ${CARDS} Card one quotes a phrase of lesson 34 in B1: read it at the same pace.`,
  'rec-c1-16-piege-infox': TRAP,
  'rec-c1-16-texte-a4': `The fact-check post (act 4). ${TEXTE} A neutral newsreader voice.`,
  'rec-c1-16-charte': 'The newspaper’s code of conduct (act 5), ONE voice, one take, read like an official text: neutral, each article announced by its number.',
  'rec-c1-16-texte-a5': `The vet clinic email (act 5). ${TEXTE} A Belgian female voice, businesslike and kind.`,
  'rec-c1-16-lettre': 'Mireille and Bertrand preparing the letters page (act 6), two voices, one take: Mireille reading, moved; Bertrand calm. Swiss accents welcome.',
  'rec-c1-16-remords-cartes': `The four remords / regret / honte cards (act 6). ${CARDS}`,
  'rec-c1-16-piege-remords': TRAP,
  'rec-c1-16-texte-a6': `Jacques’s letter and the magazine’s answer (act 6). ${TEXTE} A male voice for the letter, a female voice for the answer.`,
  'rec-c1-16-digue': 'Fatoumata and Hélène outside the town hall (act 7), two voices, one take: matter-of-fact, a little wry. Light evening street ambience.',
  'rec-c1-16-integrite-cartes': `The four integrity cards (act 7). ${CARDS}`,
  'rec-c1-16-texte-a7': `The municipal news brief (act 7). ${TEXTE} A local newsreader voice.`,
  'rec-c1-16-beau-ecoute': `${ONE_TAKE} Eight lines, ONE VOICE: Margot, as named in the questions, telling her trip into a microphone: line 1 light, line 4 still moved, line 7 amused at herself.`,
  'rec-c1-16-piege-beau': TRAP,
  'rec-c1-16-texte-a8': `Margot’s travel notes (act 8). ${TEXTE} A young female voice, lively, slower and quieter for the last sentences.`,
  'rec-c1-16-dakar': 'Ousmane and his cousin Awa leaving the exhibition (act 9), two voices, one take: Ousmane critical but fair, Awa teasing. Senegalese accents. Light Dakar street ambience.',
  'rec-c1-16-gout-cartes': `The four taste cards (act 9). ${CARDS} Card four (avoir beau) with a slight smile.`,
  'rec-c1-16-texte-a9': `Ousmane’s visitor review (act 9). ${TEXTE} A Senegalese male voice.`,
  'rec-c1-16-ecole': 'The article on the pupils’ project (act 10), ONE voice, one take, a measured female journalist; the quoted teacher and Léa slightly set apart in tone.',
  'rec-c1-16-memoire-cartes': `The four memory cards (act 10). ${CARDS}`,
  'rec-c1-16-texte-a10': `The library notice (act 10). ${TEXTE} A friendly librarian’s voice, Québec accent.`,
  'rec-c1-16-comite': 'Fatoumata and Bruno at the committee table (act 11), two voices, one take: Bruno practical, Fatoumata careful and precise. Quiet office ambience.',
  'rec-c1-16-piege-commemorer': TRAP,
  'rec-c1-16-texte-a11': `The town’s press release (act 11). ${TEXTE} An official, neutral voice.`,
  'rec-c1-16-modele': 'Hélène Rioux’s reply to Raymond Tessier (act 12), ONE female Québécoise voice, one take, courteous and precise; Raymond’s quoted letter in a slightly sharper tone.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 16',
  intro: 'At B1 you met fake news, and at B2 the ethics of care and of research. At C1 you need the words that judge: what is true, what is right, what is beautiful, and what a community remembers. Each comes with a neighbour that weighs something else. This lesson separates a sincere speaker from a truthful account, lying from being wrong, fake news from a good-faith error, morality from ethics and professional ethics, remorse from regret, integrity from completeness, the pretty from the beautiful and the sublime, taste from proof, a personal memory from a group’s memory, and commemorating from celebrating. It ends with a 250 to 350 word reply to a reader who confuses several of these words.',
  skill: 'CE',
  grammarAssumed: [MEDIAS_UNIT, SOINS_UNIT, SCIENCE_UNIT, 'c1.12'],
  grammarIntroduced: [
    'Sincère against véridique (la véracité) and vraisemblable; en toute sincérité; invraisemblable',
    'Mentir against se tromper and tromper; induire en erreur, mentir par omission, un pieux mensonge, de bonne ou de mauvaise foi',
    'Infox and information fallacieuse (France, Journal officiel 2018) against fausse nouvelle (OQLF, privileged in Québec); nouvelle satirique, rumeur, relayer, l’intox; the intent that separates fake news from an error',
    'Morale against éthique and déontologie; faire la morale, le moral, immoral against amoral, un manquement à la déontologie',
    'Remords against regret, honte and culpabilité; avoir mauvaise conscience against avoir conscience de; la conscience professionnelle',
    'Intègre against intégral; la probité, avoir des scrupules à, sans scrupules, un conflit d’intérêts, cautionner',
    'Le joli, le beau and le sublime; un beau geste; embellir; one verified line of Boileau',
    'Le goût and l’esthétique: de mauvais goût, kitsch, criard and sobre, un esthète; avoir beau + infinitive',
    'Souvenir against mémoire; se souvenir de, se rappeler quelque chose (register), à la mémoire de, de mémoire d’homme, un trou de mémoire, mémorable',
    'Commémorer against fêter and célébrer; histoire against mémoire; le devoir et le travail de mémoire, un lieu de mémoire, une loi mémorielle (literacy only), le jour du Souvenir',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B1, tu as rencontré les fausses nouvelles ; au B2, l’éthique du soin et de la recherche. Au C1, il te faut les mots qui jugent : le vrai, le bien, le beau, et ce dont une communauté se souvient. Chacun a un voisin qui pèse autre chose. Cette leçon sépare la sincérité d’une personne et la véracité d’un récit, mentir et se tromper, l’infox et l’erreur, la morale, l’éthique et la déontologie, le remords et le regret, intègre et intégral, le joli, le beau et le sublime, le goût et la preuve, le souvenir et la mémoire, commémorer et fêter. À la fin, tu réponds en 250 à 350 mots à une lectrice qui confond plusieurs de ces mots.',
    minutes: 170,
    difficulty: 4,
    glyph: 'V≠S',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: NOTIONS_MORALES_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (B1 build log, 2026-09-25). Kept, as every lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, LECTURE_MODELE, MESSAGE_THERESE, dicteeFor };
export const lessonWithoutTask = (): Lesson => LESSON;
