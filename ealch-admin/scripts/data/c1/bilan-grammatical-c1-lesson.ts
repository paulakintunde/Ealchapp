// c1.01.l1 « Faire le point sur sa grammaire »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md with the WORKSHOP SHAPE of
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 and §1.4, under C1-BUILD-LOG.md. The
// first C1 lesson and the C1 diagnostic: it teaches nothing new. It audits
// the B2 grammar family by family, sorts every structure into three piles
// (à produire, à reconnaître, mon point faible) and routes every gap back to
// its B1 or B2 lesson by trail position in words.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is real (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]`; `lessonWithoutTask()` is still exported because the C1
// brief runs the validators on it, and they are run on `LESSON` as well.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around a TEXT at C1 length (an
//   unsimplified chronicle, column, open letter, pastiche, report summary,
//   radio slot, opinion piece, review, minutes, essay paragraph) and an
//   AUDIT of one family, in the same beats:
//
//     1 MEET      one anchor text FIRST (a `reading`, or the act 7
//                 `listening`), its questions labelled global, détail,
//                 inférence, position, and one « bilan » question
//     2 NOTICE    one section that names the structures the text used and
//                 the B1 or B2 lesson that owns each (tapTable, examples or
//                 a cardDeck of four self-test questions). It names; it
//                 never re-teaches.
//     3 PRACTISE  two diagnostic checks on NEW material (groupDrill, then a
//                 trapDrill, commonErrors or dictation); every `why` routes
//                 a miss to its lesson by trail position in words
//     4 USE       « Pour ton bilan »: the learner sorts the act's structures
//                 into the three piles (a groupDrill; a scenario in acts 5,
//                 6 and 11), always under that title
//     + CHECK     the gated control-page groupDrill every act ends on
//
//   Act 1 is the C1 voice set-piece (what C1 is for: precision, nuance,
//   implicit meaning) with the one recap of the B2 families (one card per
//   family, no more). Act 12 is the production act: Lina's plan (the
//   model), the steps, a role play, the TASK, and the closing sections.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · family audited · lessons routed to · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  À quoi sert le C1               scene + the tutor's handout · the
//                                       frame, the three piles, one recap
//                                       card per family                    7
//    2  Situer dans le temps            a chronicle, Sherbrooke · lessons
//                                       1, 7, 14, 18 in B2, 4 in B1        6
//    3  L'irréel et l'hypothèse         a weekly column on a lost tram
//                                       · lessons 2 to 4 in B2, 10 and 34
//                                       in B1                              6
//    4  Le choix du mode                an open letter, a library
//                                       · lessons 5, 6, 16 in B2, 31 in B1 6
//    5  La langue des livres            a pastiche of a 19th-century novel
//                                       · lessons 8, 9, 18, 21 in B2
//                                       (recognition only)                 6
//    6  Nommer pour condenser           a report summary, bike share
//                                       · lessons 10, 14 in B2             6
//    7  Participes et gérondifs         a radio slot, by ear · lessons 12,
//                                       13 in B2                           6
//    8  Cause, conséquence, but         an opinion piece, street lighting
//                                       · lessons 15, 17 in B2, 30, 31 B1  6
//    9  Concéder, restreindre, nier     a theatre review · lessons 16, 19,
//                                       21 in B2, 20 in B1                 6
//   10  Mettre en relief, effacer       two accounts of one meeting
//                                       · lessons 11, 20 in B2             6
//   11  Le registre de l'écrit          an essay paragraph, before and
//                                       after · lessons 22, 23 in B2       6
//   12  Ton plan de travail             Lina's plan · steps, role play,
//                                       TASK, quiz                        11
//
//   TOTAL 78 missions, 12 acts. Texts: 10 readings (acts 1 to 6, 8 to 11)
//   plus Lina's plan in act 12, and 1 listening (act 7), plus the act 1
//   scene. cardDeck 4 (acts 1, 4, 7, 11), tapTable 3 (acts 2, 5, 9),
//   examples 4 (acts 3, 6, 8, 10), trapDrill 4 (acts 3, 5, 8, 10),
//   commonErrors 5 (acts 2, 4, 6, 9, 11), scenario 4 (acts 5, 6, 11, 12),
//   one dictation (act 7). Corpus: 100 authored rows (.1000-.1099) plus 86
//   reused B1 and B2 rows (80 B2, 6 B1). Quiz: 12 rounds of 8, one per
//   act (36 mcq, 36 typeIn, 12 errorSpot, 12 listenChoose). Twelve error
//   triggers, twelve drills, five reference sheets, eleven terms. Readings
//   299 to 311 words, the listening about 294 words (two minutes). Chapter
//   artwork: `bilan-grammatical-c1-image-prompts.md`, 12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Au C1, la grammaire ne sert plus à te faire comprendre : elle sert à
//     dire exactement ce que tu veux dire. »
//   EN: At C1, grammar no longer serves to get you understood: it serves to
//   say exactly what you mean.
//
//   ONE METAPHOR, FAIRE LE POINT. A navigator fixes the ship's position on
//   the chart before choosing a heading; the audit pins each structure the
//   learner already has, in three colours (sage: à produire, slate: à
//   reconnaître, terracotta: point faible). It is NOT « learn more rules »:
//   act 1 says nothing is new, act 11 shows the C1 paragraph using fewer
//   structures than its draft, and act 5 says what NOT to produce.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the C1 frame (précision, nuance, implicite), the three-pile
//           audit, and the learning plan as a written genre (the task).
//   QUOTES  the reframes of lessons 1, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16,
//           17, 19, 20, 21, 22 and 23 in B2, reused BY ID as rows (never
//           retyped); 63 more B2 rows and 6 B1 rows reused by id.
//   LEAVES  every rule. Each family is owned by its B2 lessons (cited by
//           position, rows reused); the B1 recognition-only forms are
//           owned by lessons 4, 20, 30, 31 and 34 in B1. Nothing in C1 is
//           cited: no C1 lesson is published yet. The roundup says only
//           that the next C1 lessons start from this audit.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   C1: unsimplified French; English authored on every learner string (an
//   `en` field or a final `EN: `), never on an answer. tu in every
//   instruction; Hélène says tu to the learner (a tutor, informal by house
//   choice at C1 as at B2). Every `say` is French. No spaced « ? » or « ! »
//   in any scene bubble. Every scenario uses ’ only and embeds no corpus
//   row. Other lessons cited by trail position in words, never by raw id.
//   Mission answer slots are spread by `spreadMissions()`, the quiz by
//   `spreadSlots()` (no text changes, no `why` names a position).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. TAG. RESOLVED by the wave runner: 'C1 · LEÇON 1', unpadded as B2
//      shipped ('B2 · LEÇON 1').
//   2. PILE VERDICTS at C1. The audit moves five B1 recognition-only forms
//      to « à produire » at C1 (depuis + imparfait, the hearsay
//      conditional, ne… guère in formal writing, or) and keeps « après
//      qu'il soit parti » as « à reconnaître » (the written norm is the
//      indicative). « Ayant fini » and the ne explétif are « à produire à
//      l'écrit » and « à reconnaître, facultatif » respectively. Agree?
//   3. THE TASK is a self-diagnosis, so the grader cannot know the
//      learner's real weak spots. The rubric grades accuracy of the
//      diagnosis (right lesson for the structure named, a correct example
//      sentence) and precision, not which weak spots are chosen. OK?
//   4. MALGRÉ QUE. Act 9 says the Académie advises against it in the sense
//      of « bien que » and asks for « bien que » in C1 writing (fact check
//      §A.7 e). The grader notes accept it in speech-like registers only.
//   5. FOUR SCENARIOS (acts 5, 6, 11, 12) vary the « use it » beat; the
//      other seven « Pour ton bilan » beats are sorting groupDrills.
//   6. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap, R, B1, B2,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  CADRE_TEXT, MAISON_TEXT, TRAMWAY_TEXT, LETTRE_TEXT, NOTAIRE_TEXT, SYNTHESE_TEXT,
  ECLAIRAGE_TEXT, CRITIQUE_TEXT, REUNION_TEXT, TELETRAVAIL_TEXT, PLAN_TEXT,
} from './bilan-grammatical-c1-corpus.ts';
import { BILAN_GRAMMATICAL_TERMS } from './bilan-grammatical-c1-terms.ts';

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
  if (!r) throw new Error(`c1.01: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.01: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`c1.01: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** The three piles, as options. Order is rotated by spreadMissions(). */
const PROD = 'à produire, à l’écrit comme à l’oral';
const RECO = 'à reconnaître, sans la produire';

function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** THE « USE IT » BEAT: the act's structures sorted into the three piles,
 *  always under the same title so a reviewer and a learner see the loop. */
function pourTonBilan(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ton bilan', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: À QUOI SERT LE C1
 *
 *  The C1 voice set-piece: Hélène, a tutor, shows that two correct
 *  sentences are not equally exact. Then her handout (the audit method),
 *  ONE recap card per B2 family, the three piles, where precision costs
 *  something real, and the check. The task is announced in the resolve.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Correct ne suffit plus',
  frSub: 'Le premier cours de C1',
  setting: { place: "L'Institut Verlune, une petite salle au troisième étage", city: 'Montréal', time: '9 h 10', ambience: 'un tableau blanc, deux tasses de thé, la neige derrière la fenêtre' },
  beats: [
    {
      kind: 'narration',
      text: "Un lundi matin, à l'Institut Verlune, à Montréal. Tu commences le cours de niveau C1. Hélène Brassard, ta conseillère pédagogique, a posé deux tasses de thé sur la table et ouvre ton dossier de B2.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Hélène',
      fr: 'Tu as fini le B2. Dis-moi ce que tu attends du C1.',
      en: 'You have finished B2. Tell me what you expect from C1.',
      respell: '[tü a fee-NEE luh bay-DEU | dee-MWA suh kuh tü a-TAHⁿ dü say-UHⁿ]',
      stage: 'Elle ne te teste pas. Elle veut savoir ce que tu crois.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'De nouvelles règles, je crois. Des temps que je ne connais pas encore.',
      en: 'New rules, I think. Tenses I do not know yet.',
      respell: '[duh noo-vel REHGL zhuh KRWA | day tahⁿ kuh zhuh nuh ko-neh pa-zahⁿ-KOR]',
      stage: 'Pour toi, avancer, c’est apprendre plus de grammaire.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Hélène',
      fr: fr(E(1002)),
      en: en(E(1002)),
      respell: rsOf(E(1002)),
      stage: 'Elle tourne ton ordinateur vers toi : un courriel resté en brouillon.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Le courriel doit expliquer à ta directrice pourquoi le projet a pris du retard. Il manque une seule phrase, la plus délicate.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Quelle phrase envoies-tu à ta directrice ?',
      size: 'lg',
      options: [
        { fr: fr(E(1000)), respell: rsOf(E(1000)), en: en(E(1000)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1001)), respell: rsOf(E(1001)), en: en(E(1001)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Hélène hoche la tête : la cause est dite, le retard est expliqué, et personne n'est accusé. Ta directrice comprendra le reste toute seule.",
        breaks: "Hélène lève un sourcil : ta phrase est correcte, mais elle accuse une équipe entière. Ta directrice va d'abord défendre Lyon.",
      },
    },
    {
      kind: 'break',
      heading: 'Correct ne suffit plus',
      body: "Les deux phrases sont correctes. La seconde est exacte : « n'a pas abouti » dit moins qu'« a échoué », et « faute d'avoir reçu » nomme la cause sans désigner de coupable. EN: Both sentences are correct; the second is exact: it names the cause without blaming anyone.",
      wrong: { fr: fr(E(1000)), ipa: ipaOf(E(1000)), respell: rsOf(E(1000)), en: en(E(1000)) },
      right: { fr: fr(E(1001)), ipa: ipaOf(E(1001)), respell: rsOf(E(1001)), en: en(E(1001)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Hélène',
      fr: fr(E(1003)),
      en: en(E(1003)),
      respell: rsOf(E(1003)),
      stage: 'Elle referme ton dossier de B2. Tout est déjà dedans.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Rien de nouveau à apprendre, donc : tu vas faire le point sur ce que tu sais déjà, famille par famille. À la fin de la leçon, tu écriras ton plan de travail, de 250 à 400 mots.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['precision', 'implicite'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Savoir ce que le C1 attend', s: 'Acte 1 : la précision, la nuance, l’implicite, et trois piles' },
    { t: 'Faire le point sur le temps et les modes', s: 'Actes 2 à 5 : situer, supposer, choisir le mode, lire la langue des livres' },
    { t: 'Faire le point sur condenser et relier', s: 'Actes 6 à 9 : noms, infinitifs, participes, liens logiques' },
    { t: 'Écrire ton plan de travail', s: 'Actes 10 à 12 : la voix, l’écrit soutenu, puis ton plan de 250 à 400 mots' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET: the tutor's handout, the method of the audit. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Faire le point avant d’avancer',
  frSub: 'La fiche d’Hélène',
  text: CADRE_TEXT,
  glossary: [
    { word: 'sûreté', en: 'sureness', note: 'Le fait d’être sûr de ce qu’on fait, sans hésiter.' },
    { word: 'cède', en: 'gives way', note: 'Céder : ne plus tenir, comme une branche trop chargée.' },
    { word: 'repérer', en: 'to spot', note: 'Trouver en cherchant : une erreur difficile à repérer se voit mal.' },
  ],
  questions: [
    { q: 'Global : selon la fiche, qu’est-ce qui manque le plus souvent à un apprenant qui arrive au C1 ?', a: 'Pas des règles, mais la sûreté : une règle qui tient dans un exercice cède quand on écrit vite ou sous l’émotion.' },
    { q: 'Détail : quelles sont les quatre familles du bilan ?', a: 'Le temps et les modes, l’art de condenser, les relations logiques, le registre.' },
    { q: 'Inférence : pourquoi Hélène écrit-elle qu’un texte C1 « n’emploie pas plus de structures » qu’un texte B2 ?', a: 'Parce que le niveau se mesure à l’exactitude du choix, pas à la quantité de tournures.' },
    { q: 'Position : comment ton plan de travail sera-t-il jugé ?', a: 'Sur sa précision, pas sur sa longueur : un point faible bien nommé vaut mieux que dix inquiétudes vagues.' },
    { q: 'Bilan : quelle question vas-tu te poser pour chaque structure ?', a: 'Dois-je la produire, à l’écrit comme à l’oral, ou me suffit-il de la reconnaître quand je la lis ?' },
  ],
  audio: REC('rec-c1-01-fiche'),
  say: REFRAME,
  terms: ['precision', 'pointFaible'],
};

/** NOTICE: the ONE recap of B2, one card per family. The sheet holds the map. */
const A1_RECAP: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-recap',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-bilan',
  title: 'Ce que le B2 t’a donné',
  frSub: 'Quatre familles, une carte chacune',
  hint: 'Quatre cartes, quatre familles. Rien de nouveau : tu reconnais.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps', 'condenser', 'registre'],
  cards: [
    {
      head: 'Le temps et les modes', label: 'les leçons 1 à 9 et 18 du B2',
      fr: fr('fr.b2.recits-au-passe.1609'), sub: rsOf('fr.b2.recits-au-passe.1609'),
      body: "Les leçons 1 à 7 et 18 du B2 situent les faits et choisissent le mode ; les leçons 8 et 9 se lisent seulement. EN: Lessons 1 to 7 and 18 place events and choose moods; 8 and 9 are for reading.",
    },
    {
      head: 'Condenser', label: 'les leçons 10, 12, 13 et 14 du B2',
      fr: fr('fr.b2.langue-soignee.1410'), sub: rsOf('fr.b2.langue-soignee.1410'),
      body: "Le nom à la place de la phrase, l'infinitif, le participe et le gérondif : quatre façons de dire plus en moins de mots, à doser selon le lecteur. EN: Noun, infinitive, participle, gérondif: four ways to say more in fewer words.",
    },
    {
      head: 'Les relations logiques', label: 'les leçons 15 à 17, 19 et 21 du B2',
      fr: fr('fr.b2.connecteurs-logiques.1807'), sub: rsOf('fr.b2.connecteurs-logiques.1807'),
      body: "Cause, conséquence, but, concession, restriction, négation : chaque relation a ses mots, et chaque mot impose sa forme. EN: Cause, consequence, purpose, concession, restriction, negation: each word sets its form.",
    },
    {
      head: 'Le registre', label: 'les leçons 11, 20, 22 et 23 du B2',
      fr: fr('fr.b2.universite.1008'), sub: rsOf('fr.b2.universite.1008'),
      body: "La personne mise en relief ou effacée, l'écrit soutenu, la thèse défendue : la même idée, dite pour un lecteur précis. EN: Stressing or hiding the actor, formal writing, a defended thesis: one idea, said for a given reader.",
    },
  ],
};

/** PRACTISE: the three piles, on B2 rows. */
const A1_PILES: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-piles',
  layer: 'core',
  size: 'lg',
  title: 'Trois piles',
  frSub: 'Produire, reconnaître, point faible',
  groups: [
    grp('Deux structures du cœur du B2', [
      it('fr.b2.recits-au-passe.1600', 'le plus-que-parfait'),
      it('fr.b2.emotions.1200', 'le subjonctif passé'),
    ], chk(
      'Au C1, ces deux structures sont...',
      [PROD, RECO], 0,
      `Elles sont au cœur du B2 : à produire. Si l'une te résiste encore, c'est un point faible, à reprendre dans ${R(B2.pqp)} ou ${R(B2.subjPasse)}. EN: core B2, to produce; if one resists, it is a weak spot.`)),
    grp('Deux structures des livres', [
      it('fr.b2.litterature.1126', 'le passé antérieur'),
      it('fr.b2.litterature.1206', 'le subjonctif imparfait'),
    ], chk(
      'Et ces deux-là ?',
      [PROD, RECO], 1,
      `Elles vivent dans les livres : à reconnaître, et à redire en français d'aujourd'hui, comme ${R(B2.passeSimple)} et ${R(B2.subjLitt)} l'ont montré. EN: they live in books: recognise them.`)),
    ctl('Le point faible', 'Dans ce bilan, un point faible, c’est...',
      ['une règle que tu n’as jamais apprise', 'une règle que tu connais mais que tu rates encore quand tu vas vite'], 1,
      "Ce n'est pas une ignorance : c'est une règle connue qui cède sous la vitesse. EN: a known rule that gives way under speed."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['produire', 'reconnaitre', 'pointFaible'],
};

/** NOTICE: where precision costs something real. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où l’exactitude se paie',
  cases: [
    { situation: 'Un courriel délicat à ta direction', fr: fr(E(1012)), en: en(E(1012)) },
    { situation: 'Un essai d’examen de niveau C1', fr: fr(E(1013)), en: en(E(1013)) },
    { situation: 'Un roman lu dans le texte', fr: fr('fr.b2.litterature.1208'), en: en('fr.b2.litterature.1208') },
    { situation: 'Une négociation où chaque mot compte', fr: fr(E(1014)), en: en(E(1014)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['precision', 'nuance'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Ce que le C1 demande', 'Selon Hélène, le C1 te demande surtout...',
    ['de nouvelles règles', 'la précision, la nuance et l’implicite'], 1,
    "Tu as presque toute la grammaire ; le C1 te demande de choisir la structure exacte. EN: you have the grammar; C1 asks for the exact choice."),
  ctl('Les deux phrases', `« ${fr(E(1001))} » Pourquoi cette phrase est-elle la meilleure ?`,
    ['Elle nomme la cause sans accuser personne.', 'Elle est plus longue.', 'Elle emploie un temps rare.'], 0,
    "Faute d'avoir reçu : la cause est là, le coupable n'est pas nommé. EN: the cause without a culprit."),
  ctl('Ta mission', 'À la fin de la leçon, tu vas écrire...',
    ['un essai argumenté', 'ton plan de travail, de 250 à 400 mots', 'le résumé d’un texte'], 1,
    "Trois points forts, trois points faibles, une leçon et un exemple pour chacun. EN: three strengths, three weak spots, a lesson and an example each."),
], ['precision', 'pointFaible']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'À quoi sert le C1',
    opener: {
      line: "Deux phrases correctes, et une seule qui dit exactement ce que tu veux : ici tu vois ce que le C1 te demande. EN: Two correct sentences, and only one says exactly what you mean: here you see what C1 asks of you.",
      imageRef: 'lessons/bilan-grammatical-c1/act01.jpg',
    },
    sections: [],
    milestone: "Tu sais ce que le C1 attend de ta grammaire et tu sais trier une structure : à produire, à reconnaître, ou point faible. EN: You know what C1 expects of your grammar and can sort a structure into the three piles.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RECAP, A1_PILES, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: SITUER DANS LE TEMPS
 *
 *  MEET: a chronicle on a family house (Sherbrooke), three clocks. NOTICE:
 *  six structures of the text and their lessons. PRACTISE: which clock, on
 *  new sentences; four clocks that slip. USE: the time pile. Routes to
 *  lessons 1, 7, 14 and 18 in B2 and 4 in B1.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a2-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La maison de la rue des Tanneurs',
  frSub: 'Une chronique, trois horloges',
  text: MAISON_TEXT,
  glossary: [
    { word: 'acte de vente', en: 'deed of sale', note: 'Le document signé chez le notaire quand on vend un bien.' },
    { word: 'érable', en: 'maple', note: 'L’arbre dont la feuille est sur le drapeau du Canada.' },
    { word: 'grenier', en: 'attic', note: 'La pièce sous le toit, où l’on range ce qu’on garde.' },
  ],
  questions: [
    { q: 'Global : pourquoi l’auteur raconte-t-il tout « dans l’ordre » à sa fille ?', a: 'Pour que chaque souvenir garde sa place sur la ligne du temps : ce qui était déjà fait, ce qui s’est passé, ce qui sera accompli.' },
    { q: 'Détail : qu’est-ce que la mère avait fait avant que les banques acceptent de lui prêter de l’argent ?', a: 'Elle avait refait la toiture. Le plus-que-parfait place ce fait avant tous les autres.' },
    { q: 'Inférence : « ils auront probablement repeint la façade » : l’auteur l’a-t-il vu ?', a: 'Non. Le futur antérieur, avec probablement, dit une supposition sur un fait sans doute déjà accompli.' },
    { q: 'Position : « ils avaient sans doute leurs raisons » : que pense l’auteur de l’érable abattu ?', a: 'Il le regrette sans le dire : la phrase concède poliment et laisse entendre une désapprobation.' },
    { q: 'Bilan : trouve deux verbes au plus-que-parfait et deux au futur antérieur.', a: 'Avait achetée, était parti, avait refait, avait planté ; aura changé, auront disparu, auront repeint.' },
  ],
  audio: REC('rec-c1-01-maison'),
  say: REFRAME,
  terms: ['temps', 'implicite'],
};

/** NOTICE: six structures of the text, each with its lesson. The sheet holds them all. */
const A2_HORLOGES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-horloges',
  layer: 'core',
  sheetId: 'sheet-temps',
  title: 'Six structures du texte, six leçons',
  cols: ['Structure', 'Au C1', 'Leçon'],
  rows: [
    { cells: ['plus-que-parfait', 'à produire', 'la leçon 1 du B2'], say: fr('fr.b2.recits-au-passe.1643'),
      detail: { title: 'Le plus-que-parfait', body: "Déjà fait au moment du récit : ma mère l'avait achetée seule. Remplacé par un passé composé, l'ordre des faits se perd. EN: already done at the time of the story.", say: fr(E(1015)) } },
    { cells: ['futur antérieur', 'à produire', 'la leçon 7 du B2'], say: fr('fr.b2.projets-et-futur.1800'),
      detail: { title: 'Le futur antérieur', body: "Accompli avant un moment futur : quand elle aura mon âge, la rue aura changé. EN: completed before a future point.", say: fr(E(1016)) } },
    { cells: ['futur antérieur de probabilité', 'à produire', 'la leçon 7 du B2'], say: fr('fr.b2.projets-et-futur.1933'),
      detail: { title: 'La supposition', body: "Ils auront repeint la façade : une supposition sur un fait passé, que le contexte présente comme probable. EN: a guess about the past.", say: fr(E(1020)) } },
    { cells: ['tant que + futur antérieur', 'à produire', 'la leçon 7 du B2'], say: fr('fr.b2.projets-et-futur.1884'),
      detail: { title: 'Tant que', body: "Tant que je n'aurai pas tout écrit : la condition doit être accomplie avant que la suite arrive. EN: the condition must be completed first.", say: fr(E(1022)) } },
    { cells: ['avant que, après + infinitif passé', 'à produire', 'les leçons 14 et 18 du B2'], say: fr('fr.b2.connecteurs-logiques.2400'),
      detail: { title: 'Avant que, après avoir', body: "Avant que regarde ce qui n'a pas encore eu lieu : le subjonctif. Après avoir signé : un seul sujet, l'infinitif passé. EN: avant que + subjunctive; après + past infinitive.", say: fr(E(1021)) } },
    { cells: ['depuis + imparfait', 'à produire au C1', 'la leçon 4 du B1'], say: fr('fr.b1.recits-au-passe.1269'),
      detail: { title: 'Depuis et l’imparfait', body: "Nous y habitions depuis vingt-deux ans : une durée encore en cours au moment du récit. Au B1, tu la reconnaissais ; au C1, tu la produis. EN: recognised at B1, produced at C1.", say: fr(E(1018)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps', 'produire'],
};

/** PRACTISE, on new sentences: which clock? */
const A2_DIAG: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-diag',
  layer: 'core',
  size: 'lg',
  title: 'Diagnostic : quelle horloge ?',
  frSub: 'Des phrases nouvelles',
  groups: [
    grp('Ce qui était déjà fait', [it(E(1015)), it(E(1019))], chk(
      'Complète : « Quand je suis arrivée, la réunion ... »',
      ['avait déjà commencé', 'a déjà commencé', 'commençait déjà'], 0,
      `Déjà fait avant mon arrivée : le plus-que-parfait. Si tu as hésité, note-le et reprends ${R(B2.pqp)}. EN: done before my arrival.`)),
    grp('Ce qui sera accompli', [it(E(1016)), it(E(1017))], chk(
      'Complète : « Je t’écrirai dès que j’... le dossier. »',
      ['aurai lu', 'ai lu', 'lirai'], 0,
      `Accompli avant le moment où j'écrirai : le futur antérieur. Un doute ici renvoie à ${R(B2.futAnt)}. EN: completed before the future moment.`)),
    grp('Une durée en cours', [it(E(1018))], chk(
      'Complète : « Elle ... là depuis trois ans quand on lui a proposé ce poste. »',
      ['travaillait', 'a travaillé', 'avait travaillé'], 0,
      `Une durée encore en cours au moment du récit : depuis et l'imparfait, comme dans ${R(B1.depuis)}. EN: an ongoing duration takes the imparfait.`)),
    ctl('Une supposition', `« ${fr(E(1020))} » Que dit « elle aura oublié » ?`,
      ['une supposition sur un fait passé', 'un fait futur et certain'], 0,
      `Le futur antérieur de probabilité, ${R(B2.futAnt)}. EN: a guess about the past.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps', 'pointFaible'],
};

/** PRACTISE: four clocks that slip, the errors that survive B2. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre horloges qui se dérèglent',
  errors: [
    {
      wrong: 'Quand j’ai fini le rapport, je te l’enverrai.',
      right: 'Quand j’aurai fini le rapport, je te l’enverrai.',
      why: `L'anglais dit « when I've finished », et le passé composé semble le calquer. Mais le rapport sera fini plus tard : futur antérieur, ${R(B2.futAnt)}. EN: the English present perfect pulls you; French needs the futur antérieur.`,
    },
    {
      wrong: 'Elle m’a dit qu’elle a déjà lu le dossier.',
      right: 'Elle m’a dit qu’elle avait déjà lu le dossier.',
      why: `À l'oral, le passé composé passe souvent. À l'écrit, le discours rapporté recule d'un cran : la lecture précédait sa parole. ${Cap(R(B2.pqp))}. EN: reported speech shifts back.`,
    },
    {
      wrong: 'Je travaillais là pendant dix ans quand l’usine a fermé.',
      right: 'Je travaillais là depuis dix ans quand l’usine a fermé.',
      why: `« For ten years » se traduit souvent par pendant. Mais la durée était encore en cours : depuis et l'imparfait, ${R(B1.depuis)}. EN: an ongoing duration takes depuis.`,
    },
    {
      wrong: 'Après avoir arrivé, elle a appelé sa mère.',
      right: 'Après être arrivée, elle a appelé sa mère.',
      why: `L'infinitif passé garde l'auxiliaire du passé composé : elle est arrivée, donc après être arrivée. ${Cap(R(B2.infinitif))}. EN: the past infinitive keeps the auxiliary.`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps', 'pointFaible'],
};

/** USE: the time pile. */
const A2_BILAN = pourTonBilan('a2-bilan', 'Le temps : tes trois piles', [
  grp('Le plus-que-parfait', [it('fr.b2.recits-au-passe.1643')], chk(
    'Au C1, le plus-que-parfait est...',
    [PROD, RECO], 0,
    `À produire. Si tu l'as manqué dans les quatre erreurs, note-le comme point faible : ${R(B2.pqp)}. EN: to produce; a miss makes it a weak spot.`)),
  grp('Le futur antérieur de probabilité', [it('fr.b2.projets-et-futur.1933')], chk(
    'Et le futur antérieur de probabilité ?',
    [PROD, RECO], 0,
    `À produire : une seule forme dit la supposition. En cas de doute, ${R(B2.futAnt)}. EN: to produce.`)),
  grp('Depuis et l’imparfait', [it('fr.b1.recits-au-passe.1269')], chk(
    'Au B1, tu la reconnaissais. Au C1, elle est...',
    [PROD, RECO], 0,
    `Elle passe dans la pile à produire. ${Cap(R(B1.depuis))} la donne. EN: it moves to the produce pile.`)),
], ['temps', 'produire', 'pointFaible']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Trois horloges', 'La chronique de Sherbrooke tient trois horloges. Lesquelles ?',
    ['le passé d’avant, le passé raconté, un futur qui regarde en arrière', 'le présent, le futur et le conditionnel'], 0,
    "Plus-que-parfait, passé composé, futur antérieur : chaque fait à sa place. EN: each event on its own clock."),
  ctl('Avant que', 'Complète : « avant que les banques ... de lui prêter un sou »',
    ['acceptent', 'ont accepté', 'acceptaient'], 0,
    "Avant que regarde ce qui n'a pas encore eu lieu : le subjonctif. EN: subjunctive after avant que."),
  ctl('Le point faible', 'Tu écris encore « quand j’ai fini, je t’appellerai ». Que notes-tu ?',
    [`un point faible, à reprendre dans ${R(B2.futAnt)}`, 'une structure à reconnaître seulement'], 0,
    "Le futur antérieur est à produire ; une erreur qui revient en fait un point faible. EN: a recurring error makes a weak spot."),
], ['temps', 'pointFaible']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Situer dans le temps',
    opener: {
      line: "Une maison vendue, trois horloges : ici tu vérifies que chaque verbe est sur la bonne. EN: A house sold, three clocks: here you check that every verb is on the right one.",
      imageRef: 'lessons/bilan-grammatical-c1/act02.jpg',
    },
    sections: [],
    milestone: "Tu places un fait avant, pendant ou après un autre sans hésiter, et tu sais quelle leçon reprendre si l'une de ces formes te résiste. EN: You place one event before, during or after another, and know which lesson to revisit if a form resists.",
    estScreens: 31, restPoints: ['a2-horloges'],
  },
  sections: [A2_LECTURE, A2_HORLOGES, A2_DIAG, A2_ERREURS, A2_BILAN, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: L'IRRÉEL ET L'HYPOTHÈSE
 *
 *  MEET: a weekly column on a tram dismantled in 1962. NOTICE: six
 *  hypotheses and their lessons. PRACTISE: which hypothesis, on new
 *  sentences; six hypotheses that derail (stepped trap). USE: the
 *  hypothesis pile. Routes to lessons 2, 3 and 4 in B2, 10 and 34 in B1.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Et si l’on avait gardé le tramway ?',
  frSub: 'Un billet, beaucoup de si',
  text: TRAMWAY_TEXT,
  glossary: [
    { word: 'démonté', en: 'dismantled', note: 'Défait pièce par pièce : on a enlevé les rails.' },
    { word: 'exode', en: 'exodus', note: 'Le départ massif de gens ou de commerces vers un autre lieu.' },
    { word: 'mettaient en garde', en: 'were warning', note: 'Mettre en garde : avertir d’un danger.' },
  ],
  questions: [
    { q: 'Global : l’auteur du billet regrette-t-il simplement le tramway ?', a: 'Non. Il admet la nostalgie, refuse de s’y arrêter et demande à la ville de chiffrer le projet et de consulter les habitants.' },
    { q: 'Détail : combien coûterait une seule ligne, selon le rapport ?', a: 'Près de deux cents millions de dollars, avec cinq ans de travaux. « Coûterait » rapporte le chiffre sans le garantir.' },
    { q: 'Inférence : « le chiffre aurait été revu à la hausse » : l’auteur en est-il sûr ?', a: 'Non. Le conditionnel passé rapporte une information non vérifiée ; la suite le dit : personne ne l’a confirmé.' },
    { q: 'Position : que reproche l’auteur aux élus de 1962 ?', a: 'De ne pas avoir écouté les commerçants : « ils auraient dû », un conditionnel passé de reproche.' },
    { q: 'Bilan : trouve un irréel du passé, puis une conséquence au présent.', a: '« Si les élus avaient patienté…, ils auraient vu revenir le tramway » ; « nous aurions aujourd’hui un réseau ».' },
  ],
  audio: REC('rec-c1-01-tramway'),
  say: REFRAME,
  terms: ['temps', 'nuance'],
};

/** NOTICE: six hypotheses, each with its lesson. */
const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  sheetId: 'sheet-temps',
  title: 'Six hypothèses, six leçons',
  examples: [
    ex('fr.b2.projets-et-futur.1400', 'si + plus-que-parfait, conditionnel passé : la leçon 3 du B2, à produire'),
    ex('fr.b2.projets-et-futur.1600', 'un si mixte, la conséquence au présent : la leçon 4 du B2, à produire'),
    ex('fr.b2.projets-et-futur.1696', 'si + imparfait, conditionnel présent : la leçon 10 du B1, reprise dans la leçon 4 du B2'),
    ex('fr.b2.conseils-et-suggestions.1209', 'le reproche au passé : la leçon 2 du B2, à produire'),
    ex('fr.b2.conseils-et-suggestions.1331', 'le conditionnel de l’information : la leçon 2 du B2, à produire'),
    ex('fr.b1.journalisme.1093', 'le même conditionnel dans la presse : reconnu dans la leçon 34 du B1, à produire au C1'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps', 'produire'],
};

/** PRACTISE, on new sentences: which hypothesis? */
const A3_DIAG: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-diag',
  layer: 'core',
  size: 'lg',
  title: 'Diagnostic : quelle hypothèse ?',
  frSub: 'Des phrases nouvelles',
  groups: [
    grp('L’irréel du passé', [it(E(1029)), it(E(1023))], chk(
      'Complète : « Si tu m’... prévenue, je serais venue. »',
      ['avais', 'aurais', 'as'], 0,
      `Jamais de conditionnel après si : si + plus-que-parfait. Une hésitation renvoie à ${R(B2.siIrreel)}. EN: no conditional after si.`)),
    grp('Le passé, puis le présent', [it(E(1030)), it(E(1024))], chk(
      'Complète : « Si j’avais pris ce train, je ... à Lyon en ce moment. »',
      ['serais', 'aurais été', 'étais'], 0,
      `La condition est passée, la conséquence est présente : le conditionnel présent. ${Cap(R(B2.siMixtes))}. EN: past condition, present result.`)),
    grp('Le reproche et la rumeur', [it(E(1032)), it(E(1031))], chk(
      'Dans la seconde phrase, le conditionnel dit...',
      ['que le chiffre est rapporté, sans garantie', 'que la ligne ne sera jamais construite'], 0,
      `Le conditionnel de l'information, ${R(B1.medias)}, repris dans ${R(B2.condPasse)}. EN: reported, not guaranteed.`)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps', 'nuance'],
};

/** PRACTISE: six hypotheses that derail. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Six hypothèses qui déraillent',
  rule: {
    title: 'Si ne prend jamais le conditionnel',
    body: "Après si, l'imparfait ou le plus-que-parfait ; le conditionnel va dans l'autre moitié. Le reproche passé se dit avec auraient dû, la rumeur avec un conditionnel. EN: after si, imparfait or pluperfect; the conditional goes in the other half.",
  },
  cards: [
    { promptLabel: 'si + conditionnel', promptSound: "Si j'aurais su, je serais venu plus tôt.", fr: fr('fr.b2.recits-au-passe.1760'), ipa: ipaOf('fr.b2.recits-au-passe.1760'), tip: `Si, puis le plus-que-parfait : ${R(B2.siIrreel)}. EN: si + pluperfect.` },
    { promptLabel: 'deux passés', promptSound: "Si j'avais accepté ce poste, j'aurais habité à Genève aujourd'hui.", fr: fr(E(1024)), ipa: ipaOf(E(1024)), tip: `Aujourd'hui : la conséquence est présente. ${Cap(R(B2.siMixtes))}. EN: a present result.` },
    { promptLabel: 'devaient', promptSound: 'Les élus devaient écouter les commerçants.', fr: fr(E(1025)), ipa: ipaOf(E(1025)), tip: `Le reproche passé : auraient dû. ${Cap(R(B2.condPasse))}. EN: should have.` },
    { promptLabel: 'même si + conditionnel', promptSound: "Même si le tramway n'aurait pas tout sauvé, il aurait freiné l'exode.", fr: fr(E(1026)), ipa: ipaOf(E(1026)), tip: `Même si suit la règle de si : le plus-que-parfait. ${Cap(R(B2.siIrreel))}. EN: même si follows si.` },
    { promptLabel: 'la rumeur affirmée', promptSound: "Le chiffre a été revu à la hausse, mais personne ne l'a confirmé.", fr: fr(E(1027)), ipa: ipaOf(E(1027)), tip: `Rien n'est confirmé : le conditionnel le dit. ${Cap(R(B1.medias))}. EN: unconfirmed takes the conditional.` },
    { promptLabel: 'si + conditionnel présent', promptSound: 'Si tu viendrais demain, on pourrait en parler.', fr: fr(E(1028)), ipa: ipaOf(E(1028)), tip: `Si + imparfait, comme dans ${R(B1.si)}. EN: si + imparfait.` },
  ],
  drill: [
    { promptSay: 'Si j’... su, je serais venu.', opts: ['avais', 'aurais'], correct: 0 },
    { promptSay: 'Si nous avions gardé les rails, nous ... aujourd’hui un réseau envié.', opts: ['aurions', 'aurions eu'], correct: 0 },
    { promptSay: 'Les élus ... écouter les commerçants.', opts: ['auraient dû', 'devaient'], correct: 0 },
    { promptSay: 'Le chiffre ... revu à la hausse, mais rien n’est confirmé.', opts: ['aurait été', 'a été'], correct: 0 },
    { promptSay: 'Même si le tramway n’... pas tout sauvé, il aurait freiné l’exode.', opts: ['avait', 'aurait'], correct: 0 },
    { promptSay: 'Si tu ... demain, on pourrait en parler.', opts: ['venais', 'viendrais'], correct: 0 },
    { promptSay: 'Si j’avais accepté ce poste, j’... à Genève aujourd’hui.', opts: ['habiterais', 'aurais habité'], correct: 0 },
    { promptSay: 'Sans ton appel, j’... raté le train.', opts: ['aurais', 'avais'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Si ne prend jamais le conditionnel' },
    { label: 'Six cartes', kind: 'cards', title: 'L’hypothèse qui déraille' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-01-piege-hypothese'),
  say: REFRAME,
  terms: ['temps', 'pointFaible'],
};

/** USE: the hypothesis pile. */
const A3_BILAN = pourTonBilan('a3-bilan', 'L’hypothèse : tes trois piles', [
  grp('Si + plus-que-parfait', [it('fr.b2.projets-et-futur.1400')], chk(
    'Au C1, l’irréel du passé est...',
    [PROD, RECO], 0,
    `À produire. Si le piège « si j'aurais » t'a arrêté, note-le : ${R(B2.siIrreel)}. EN: to produce.`)),
  grp('Le si mixte', [it('fr.b2.projets-et-futur.1600')], chk(
    'Et le si mixte ?',
    [PROD, RECO], 0,
    `À produire, et souvent un point faible : la conséquence au présent glisse vers le passé. ${Cap(R(B2.siMixtes))}. EN: to produce, often a weak spot.`)),
  grp('Le conditionnel de l’information', [it('fr.b1.journalisme.1093')], chk(
    'Reconnu au B1 dans la presse. Au C1, il est...',
    [PROD, RECO], 0,
    `À produire : tu rapportes un fait sans le garantir. ${Cap(R(B1.medias))}. EN: to produce at C1.`)),
], ['temps', 'nuance', 'pointFaible']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Après si', 'Après si, on ne met jamais...',
    ['le conditionnel', 'l’imparfait', 'le plus-que-parfait'], 0,
    "Le conditionnel va dans l'autre moitié de la phrase. EN: the conditional goes in the other half."),
  ctl('La rumeur', '« Le chiffre aurait été revu à la hausse. » Le journaliste...',
    ['rapporte une information non confirmée', 'exprime un regret'], 0,
    "Le conditionnel de l'information garde ses distances avec le fait. EN: it keeps its distance from the fact."),
  ctl('Le billet', 'Que demande l’auteur du billet à la ville ?',
    ['de reconstruire le tramway tout de suite', 'de dire ce qu’elle veut, de chiffrer le coût et de consulter'], 1,
    "Les regrets ne construisent pas de lignes : il demande une décision réfléchie. EN: a considered decision."),
], ['temps', 'nuance']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'L’irréel et l’hypothèse',
    opener: {
      line: "Un tramway démonté il y a soixante ans, et tous les si qu'il fait naître : ici tu vérifies tes hypothèses. EN: A tram dismantled sixty years ago and all the ifs it raises: here you check your hypotheses.",
      imageRef: 'lessons/bilan-grammatical-c1/act03.jpg',
    },
    sections: [],
    milestone: "Tu construis l'irréel du passé, le si mixte, le reproche et la rumeur, et tu sais où reprendre chacun. EN: You build the past unreal, the mixed si, the reproach and the reported claim, and know where to revisit each.",
    estScreens: 38, restPoints: ['a3-exemples', 'a3-piege'],
  },
  sections: [A3_LECTURE, A3_EXEMPLES, A3_DIAG, A3_PIEGE, A3_BILAN, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: LE CHOIX DU MODE
 *
 *  MEET: an open letter from a library's users. NOTICE: four self-test
 *  questions, each on a B2 row. PRACTISE: which mood, on new sentences;
 *  four moods chosen by ear. USE: the mood pile, with « après qu'il soit
 *  parti » kept as recognition. Routes to lessons 5, 6 and 16 in B2 and 31
 *  in B1.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Lettre ouverte sur le dimanche',
  frSub: 'Chaque que pèse',
  text: LETTRE_TEXT,
  glossary: [
    { word: 'usagers', en: 'users', note: 'Les personnes qui utilisent un service public.' },
    { word: 'en vigueur', en: 'in force', note: 'Entrer en vigueur : commencer à s’appliquer.' },
    { word: 'salutations distinguées', en: 'yours faithfully', note: 'La formule de politesse d’une lettre formelle.' },
  ],
  questions: [
    { q: 'Global : que demande le comité des usagers ?', a: 'Pas l’annulation pure et simple, mais une discussion avant l’entrée en vigueur, et une formule qui garde l’accueil du dimanche.' },
    { q: 'Détail : quel argument chiffré le comité avance-t-il ?', a: 'Le dimanche attire près d’un tiers des visiteurs, selon les chiffres de la médiathèque elle-même.' },
    { q: 'Inférence : pourquoi citer la fermeture de la bibliothèque centrale ?', a: 'Pour montrer que les visiteurs du dimanche ne reviennent pas un autre jour : l’économie se paie en fréquentation.' },
    { q: 'Position : « nous souhaitons qu’elle soit au moins expliquée » : que laisse entendre ce « au moins » ?', a: 'Que le comité n’attend plus vraiment l’annulation, mais refuse une décision sans justification.' },
    { q: 'Bilan : trouve deux subjonctifs et deux indicatifs après que, et dis pourquoi.', a: '« Ait été prise », « permette » : un regret, un doute. « Sera serré » : probable. « A fermé » : après que, un fait accompli.' },
  ],
  audio: REC('rec-c1-01-lettre'),
  say: REFRAME,
  terms: ['modes', 'nuance'],
};

/** NOTICE: four self-test questions, each on a B2 row. The sheet holds the table. */
const A4_QUESTIONS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-questions',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-temps',
  title: 'Quatre questions à te poser',
  frSub: 'Avant chaque que',
  hint: 'Quatre cartes : une question, une phrase du B2, sa leçon.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['modes', 'reconnaitre'],
  cards: [
    {
      head: 'Affirmer ou regarder ?', label: Cap(R(B2.subjInd)),
      fr: fr('fr.b2.opinions-et-avis.1808'), sub: rsOf('fr.b2.opinions-et-avis.1808'),
      body: "Devant chaque que, demande-toi si la phrase affirme un fait ou le regarde : doute, regret, souhait. Si tu hésites encore souvent, c'est un point faible. EN: before each que, ask whether the sentence asserts or looks; frequent doubt is a weak spot.",
    },
    {
      head: 'Déjà fait ?', label: Cap(R(B2.subjPasse)),
      fr: fr('fr.b2.emotions.1207'), sub: rsOf('fr.b2.emotions.1207'),
      body: "Nous regrettons que la décision ait été prise : le regret est présent, la décision est déjà prise. Le subjonctif passé garde cet ordre. EN: a present regret about a finished decision: the subjonctif passé.",
    },
    {
      head: 'Probable ou possible ?', label: Cap(R(B2.subjInd)),
      fr: fr('fr.b2.opinions-et-avis.1848'), sub: rsOf('fr.b2.opinions-et-avis.1848'),
      body: "Il est probable que penche vers le vrai : l'indicatif. Il est possible que, il se peut que : le subjonctif. Une erreur ici trahit un choix fait à l'oreille. EN: probable takes the indicative, possible the subjunctive.",
    },
    {
      head: 'Après que ?', label: Cap(R(B1.subord)),
      fr: fr('fr.b1.connecteurs-logiques.1339'), sub: rsOf('fr.b1.connecteurs-logiques.1339'),
      body: "La norme écrite garde l'indicatif après après que : un fait accompli. Le subjonctif s'entend à l'oral ; tu le reconnais sans le reprendre. EN: the written norm keeps the indicative; recognise the spoken subjunctive, do not copy it.",
    },
  ],
};

/** PRACTISE, on new sentences: which mood? */
const A4_DIAG: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-diag',
  layer: 'core',
  size: 'lg',
  title: 'Diagnostic : quel mode ?',
  frSub: 'Des phrases nouvelles',
  groups: [
    grp('Regret et doute', [it(E(1033)), it(E(1034))], chk(
      'Complète : « Je regrette que tu ne ... pas venu hier. »',
      ['sois', 'es', 'serais'], 0,
      `Un regret sur un fait passé : le subjonctif passé. Si tu as hésité, ${R(B2.subjPasse)}. EN: a regret about a past fact.`)),
    grp('Probable, espéré, accompli', [it(E(1035)), it(E(1039)), it(E(1038))], chk(
      'Complète : « Nous espérons que vous ... notre lettre avec attention. »',
      ['lirez', 'lisiez'], 0,
      `Espérer affirme une attente : l'indicatif. ${Cap(R(B2.subjInd))}. EN: espérer takes the indicative.`)),
    grp('Le superlatif et la chose cherchée', [it(E(1036)), it(E(1037))], chk(
      'Pourquoi « ait prise » et « puisse » sont-ils au subjonctif ?',
      ['Le superlatif et la formule cherchée ne sont pas des faits affirmés.', 'Parce que les deux phrases sont au passé.'], 0,
      `Un superlatif, une chose cherchée : on regarde, on n'affirme pas. ${Cap(R(B2.subjInd))}. EN: looked at, not asserted.`)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['modes', 'pointFaible'],
};

/** PRACTISE: four moods chosen by ear. */
const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre modes choisis à l’oreille',
  errors: [
    {
      wrong: 'J’espère que tu viennes ce soir.',
      right: 'J’espère que tu viendras ce soir.',
      why: `Espérer ressemble à souhaiter, qui prend le subjonctif. Mais espérer affirme une attente : l'indicatif. ${Cap(R(B2.subjInd))}. EN: espérer takes the indicative.`,
    },
    {
      wrong: 'Je ne pense pas qu’il a raison.',
      right: 'Je ne pense pas qu’il ait raison.',
      why: `À l'affirmatif, je pense qu'il a raison. La négation fait passer du fait au doute : le subjonctif. ${Cap(R(B2.subjInd))}. EN: a negated opinion verb takes the subjunctive.`,
    },
    {
      wrong: 'Je suis vraiment content que tu es venu.',
      right: fr('fr.b2.emotions.1200'),
      why: `Le sentiment porte sur un fait passé, et un sentiment veut le subjonctif : au passé, ici. ${Cap(R(B2.subjPasse))}. EN: feelings take the subjunctive, past here.`,
    },
    {
      wrong: 'Bien qu’il a plu toute la journée, le festival a attiré dix mille personnes.',
      right: fr('fr.b2.emotions.1350'),
      why: `Bien que concède sans affirmer : le subjonctif, même pour un fait bien réel. ${Cap(R(B2.concession))}. EN: bien que always takes the subjunctive.`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['modes', 'pointFaible'],
};

/** USE: the mood pile. */
const A4_BILAN = pourTonBilan('a4-bilan', 'Le mode : tes trois piles', [
  grp('Le subjonctif passé', [it('fr.b2.emotions.1200')], chk(
    'Au C1, le subjonctif passé est...',
    [PROD, RECO], 0,
    `À produire, à l'écrit comme à l'oral. En cas d'erreur, ${R(B2.subjPasse)}. EN: to produce.`)),
  grp('Le subjonctif après une chose cherchée ou un superlatif', [it('fr.b2.opinions-et-avis.1800'), it('fr.b2.opinions-et-avis.1885')], chk(
    'Et ce subjonctif-là ?',
    [PROD, RECO], 0,
    `À produire, à l'écrit d'abord. Son oubli est un point faible fréquent : ${R(B2.subjInd)}. EN: to produce; often forgotten.`)),
  grp('Après qu’il soit parti', [it('fr.b1.connecteurs-logiques.1339')], chk(
    'Tu entends « après qu’il soit parti ». Ce subjonctif est...',
    ['à reconnaître : à l’écrit, tu gardes l’indicatif', 'à produire dans un texte soutenu'], 0,
    `La norme écrite garde « après qu'il est parti », ${R(B1.subord)}. EN: recognise it; write the indicative.`)),
], ['modes', 'produire', 'reconnaitre']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La lettre', 'Le comité des usagers demande surtout...',
    ['l’annulation immédiate de la mesure', 'une discussion, et une formule qui garde le dimanche'], 1,
    "Il propose des solutions : l'après-midi seulement, des bénévoles. EN: it proposes solutions."),
  ctl('Il est probable que', 'Complète : « Il est probable que le budget ... serré. »',
    ['sera', 'soit'], 0,
    "Probable penche vers le vrai : l'indicatif. EN: probable takes the indicative."),
  ctl('Le point faible', 'Tu écris encore « j’espère qu’il vienne ». Que notes-tu ?',
    [`un point faible, à reprendre dans ${R(B2.subjInd)}`, 'une forme à reconnaître seulement'], 0,
    "Le choix du mode est à produire ; une erreur qui revient en fait un point faible. EN: a recurring error is a weak spot."),
], ['modes', 'pointFaible']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Le choix du mode',
    opener: {
      line: "Une lettre ouverte où chaque que pèse : ici tu vérifies que tu choisis le mode par le sens, jamais par habitude. EN: An open letter where every que matters: here you check you choose the mood by meaning, never by habit.",
      imageRef: 'lessons/bilan-grammatical-c1/act04.jpg',
    },
    sections: [],
    milestone: "Tu choisis le mode par le sens : regret, doute et souhait d'un côté, fait, probable et espéré de l'autre. EN: You choose the mood by meaning: regret, doubt and wish on one side, fact, likelihood and hope on the other.",
    estScreens: 27, restPoints: ['a4-questions'],
  },
  sections: [A4_LECTURE, A4_QUESTIONS, A4_DIAG, A4_ERREURS, A4_BILAN, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: LA LANGUE DES LIVRES
 *
 *  RECOGNITION ONLY. MEET: a pastiche of a nineteenth-century novel (not an
 *  extract). NOTICE: six book forms and their lessons. PRACTISE: say it in
 *  today's French; six book forms that slip into an email (stepped trap).
 *  USE: retell the scene to Hélène (scenario). Routes to lessons 8, 9, 18
 *  and 21 in B2.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le notaire',
  frSub: 'À la manière d’un roman ancien',
  text: NOTAIRE_TEXT,
  glossary: [
    { word: 'créanciers', en: 'creditors', note: 'Les personnes à qui l’on doit de l’argent.' },
    { word: 'volets', en: 'shutters', note: 'Les panneaux de bois qui ferment une fenêtre de l’extérieur.' },
    { word: 'sais gré', en: 'am grateful', note: 'Savoir gré à quelqu’un : lui être reconnaissant. Une formule ancienne et soutenue.' },
  ],
  questions: [
    { q: 'Global : que vient annoncer le notaire, et comment la veuve réagit-elle ?', a: 'Les dettes du mari, qui obligent à vendre la maison. Elle reste digne : elle remercie le notaire d’être venu et ne pleure pas.' },
    { q: 'Détail : que fait le notaire dès qu’il a refermé la porte ?', a: '« Dès qu’il eut refermé la porte » : il ôte son chapeau, salue la veuve et demande une lampe.' },
    { q: 'Inférence : « elle craignait qu’il ne fût venu lui annoncer la vente » : ce ne est-il une négation ?', a: 'Non. C’est un ne explétif : elle craignait qu’il soit venu pour cela.' },
    { q: 'Position : « Vous eussiez pu m’écrire » : que dit la veuve, en français d’aujourd’hui, et pourquoi ?', a: '« Vous auriez pu m’écrire. » Elle reconnaît la délicatesse du notaire, qui a préféré venir en personne.' },
    { q: 'Bilan : redis « Lorsqu’il eut fini, un long silence tomba sur la pièce » en français d’aujourd’hui.', a: '« Quand il a fini, un long silence est tombé sur la pièce. »' },
  ],
  audio: REC('rec-c1-01-notaire'),
  say: REFRAME,
  terms: ['reconnaitre', 'implicite'],
};

/** NOTICE: six book forms, each with its lesson. The sheet holds the table. */
const A5_FORMES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-formes',
  layer: 'core',
  sheetId: 'sheet-temps',
  title: 'Six formes des livres',
  cols: ['Forme', 'Au C1', 'Leçon'],
  rows: [
    { cells: ['passé simple', 'à reconnaître', 'la leçon 8 du B2'], say: fr('fr.b2.litterature.1107'),
      detail: { title: 'Le passé simple', body: "Le notaire arriva, la veuve se leva : le passé composé des livres. Tu le lis, tu le redis au passé composé. EN: the book form of the passé composé.", say: fr('fr.b2.litterature.1009') } },
    { cells: ['passé antérieur', 'à reconnaître', 'les leçons 8 et 18 du B2'], say: fr('fr.b2.connecteurs-logiques.2575'),
      detail: { title: 'Le passé antérieur', body: "Dès qu'il eut refermé, lorsqu'il eut fini : une action finie juste avant une autre, au passé simple. Aujourd'hui : dès qu'il a refermé. EN: finished just before another action.", say: fr('fr.b2.litterature.1126') } },
    { cells: ['subjonctif imparfait', 'à reconnaître', 'la leçon 9 du B2'], say: fr('fr.b2.litterature.1206'),
      detail: { title: 'Le subjonctif imparfait', body: "Bien qu'il fût tard, qu'on lui apportât une lampe : le subjonctif d'un récit au passé simple. Aujourd'hui : bien qu'il soit tard. EN: the subjunctive of a passé simple story.", say: fr('fr.b2.litterature.1212') } },
    { cells: ['il eût fallu, vous eussiez pu', 'à reconnaître', 'la leçon 9 du B2'], say: fr('fr.b2.litterature.1208'),
      detail: { title: 'Le conditionnel des livres', body: "Eût ou eussiez, puis un participe : un conditionnel passé. Il eût fallu veut dire il aurait fallu. EN: a literary past conditional.", say: fr('fr.b2.litterature.1301') } },
    { cells: ['ne explétif', 'à reconnaître, facultatif à l’écrit', 'les leçons 9 et 18 du B2'], say: 'Elle craignait qu’il ne fût venu.',
      detail: { title: 'Le ne explétif', body: "Après craindre que, avant que ou un comparatif, un ne qui ne nie rien. Tu le comprends ; à l'écrit soutenu, tu peux l'employer, jamais pour une négation. EN: a ne that negates nothing.", say: fr('fr.b2.connecteurs-logiques.2477') } },
    { cells: ['ne… point', 'à reconnaître', 'la leçon 21 du B2'], say: fr('fr.b2.negation-et-restriction.1536'),
      detail: { title: 'Ne… point', body: "La pluie n'eût point cessé : ne… pas, en plus ancien et en plus fort. Aujourd'hui, tu dis ne… pas. EN: an old, stronger ne… pas.", say: fr(E(1044)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reconnaitre', 'temps'],
};

/** PRACTISE, on B2 recognition rows: say it today. */
const A5_DIAG: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-diag',
  layer: 'core',
  size: 'lg',
  title: 'Diagnostic : dis-le aujourd’hui',
  frSub: 'Lire une forme, dire la forme actuelle',
  groups: [
    grp('Le passé des livres', [it('fr.b2.litterature.1107'), it('fr.b2.litterature.1126')], chk(
      '« Quand il eut fini, il se leva. » Aujourd’hui, tu dis...',
      ['Quand il a fini, il s’est levé.', 'Quand il avait fini, il se levait.', 'Quand il finit, il se lève.'], 0,
      `Le passé antérieur et le passé simple se redisent au passé composé. ${Cap(R(B2.passeSimple))}. EN: both become the passé composé.`)),
    grp('Le subjonctif des livres', [it('fr.b2.litterature.1206'), it('fr.b2.litterature.1208')], chk(
      '« Il eût fallu partir plus tôt. » Aujourd’hui, tu dis...',
      ['Il aurait fallu partir plus tôt.', 'Il a fallu partir plus tôt.'], 0,
      `Eût fallu veut dire aurait fallu : un conditionnel passé. ${Cap(R(B2.subjLitt))}. EN: a past conditional.`)),
    grp('Un si des livres', [it('fr.b2.litterature.1301')], chk(
      'Quel est le sens de cette phrase ?',
      ['S’il l’avait su, il serait venu.', 'Il le savait, et il est venu.'], 0,
      `Les deux moitiés d'un irréel du passé, dans leur forme littéraire. ${Cap(R(B2.subjLitt))}. EN: a literary past unreal.`)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reconnaitre', 'temps'],
};

/** PRACTISE: six book forms that slip into an email. */
const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Six formes des livres dans un courriel',
  rule: {
    title: 'Tu les lis, tu ne les écris pas',
    body: "Dans un courriel, un rapport ou une conversation, ces formes sonnent faux. Tu les comprends, puis tu dis la forme d'aujourd'hui : passé composé, subjonctif présent ou passé, conditionnel passé, ne… pas. EN: read them, then use today's form.",
  },
  cards: [
    { promptLabel: 'subjonctif imparfait', promptSound: 'Il fallait que je le susse avant la réunion.', fr: fr(E(1040)), ipa: ipaOf(E(1040)), tip: `Le subjonctif présent suffit aujourd'hui : que je le sache. ${Cap(R(B2.subjLitt))}. EN: today's present subjunctive.` },
    { promptLabel: 'passé simple', promptSound: 'Hier, nous allâmes au cinéma avec les enfants.', fr: fr(E(1041)), ipa: ipaOf(E(1041)), tip: `À l'oral et dans un courriel : le passé composé. ${Cap(R(B2.passeSimple))}. EN: the passé composé.` },
    { promptLabel: 'passé antérieur', promptSound: "Dès que j'eus fini le rapport, je te l'ai envoyé.", fr: fr(E(1042)), ipa: ipaOf(E(1042)), tip: `Le passé antérieur ne vit qu'à côté d'un passé simple. ${Cap(R(B2.temps))}. EN: it only lives beside a passé simple.` },
    { promptLabel: 'il eût été', promptSound: 'Il eût été préférable de m’appeler.', fr: fr(E(1043)), ipa: ipaOf(E(1043)), tip: `Il aurait été : le conditionnel passé d'aujourd'hui. ${Cap(R(B2.subjLitt))}. EN: today's past conditional.` },
    { promptLabel: 'ne… point', promptSound: 'Je ne veux point de ce contrat.', fr: fr(E(1044)), ipa: ipaOf(E(1044)), tip: `Point est littéraire ; ne… pas dit la même chose. ${Cap(R(B2.negation))}. EN: point is literary.` },
    { promptLabel: 'qu’il fût', promptSound: "Je regrette qu'il fût absent hier.", fr: fr(E(1045)), ipa: ipaOf(E(1045)), tip: `Le regret porte sur un fait passé : qu'il ait été. ${Cap(R(B2.subjPasse))}. EN: the subjonctif passé.` },
  ],
  drill: [
    { promptSay: 'Il fallait que je le ... avant la réunion.', opts: ['sache', 'susse'], correct: 0 },
    { promptSay: 'Hier, nous ... au cinéma.', opts: ['sommes allés', 'allâmes'], correct: 0 },
    { promptSay: 'Dès que j’... le rapport, je te l’ai envoyé.', opts: ['ai fini', 'eus fini'], correct: 0 },
    { promptSay: 'Il ... préférable de m’appeler.', opts: ['aurait été', 'eût été'], correct: 0 },
    { promptSay: 'Je ne veux ... de ce contrat.', opts: ['pas', 'point'], correct: 0 },
    { promptSay: 'Je regrette qu’il ... absent hier.', opts: ['ait été', 'fût'], correct: 0 },
    { promptSay: 'Dans un roman : « Le notaire ... un peu avant minuit. »', opts: ['arriva', 'arrivât'], correct: 0 },
    { promptSay: 'Dans un roman : « Bien qu’il ... tard, il vint. »', opts: ['fût', 'fut'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Tu les lis, tu ne les écris pas' },
    { label: 'Six cartes', kind: 'cards', title: 'Du livre au courriel' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases d’aujourd’hui' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-01-piege-livres'),
  say: REFRAME,
  terms: ['reconnaitre', 'pointFaible'],
};

/** USE: retell the scene in today's French. ’ only, no corpus row. */
const A5_BILAN: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a5-bilan',
  layer: 'core',
  title: 'Pour ton bilan',
  setting: 'Hélène te demande de raconter la scène du notaire comme tu la raconterais ce soir à un ami. Redis chaque forme des livres en français d’aujourd’hui.',
  turns: [
    {
      ai: '« Le notaire arriva un peu avant minuit. » Tu le dirais comment, ce soir ?',
      en: 'How would you say it tonight?',
      user: 'Le notaire est arrivé un peu avant minuit.',
      userEn: 'The notary arrived a little before midnight. (A passé simple read, a passé composé said.)',
      alts: [
        { fr: 'Le notaire est venu juste avant minuit.', en: 'The notary came just before midnight.' },
        { fr: 'Un peu avant minuit, le notaire est arrivé.', en: 'A little before midnight, the notary arrived.' },
      ],
    },
    {
      ai: 'Et « bien qu’il fût tard » ?',
      en: 'And « bien qu’il fût tard »?',
      user: 'Bien qu’il soit tard, il avait tenu à venir lui-même.',
      userEn: 'Although it was late, he had insisted on coming himself. (Today’s present subjunctive.)',
      alts: [
        { fr: 'Même s’il était tard, il avait tenu à venir.', en: 'Even though it was late, he had insisted on coming. (Même si and the indicative: also right.)' },
        { fr: 'Il était tard, mais il avait tenu à venir lui-même.', en: 'It was late, but he had insisted on coming himself.' },
      ],
    },
    {
      ai: '« Dès qu’il eut refermé la porte, il ôta son chapeau. »',
      en: '« As soon as he had shut the door, he took off his hat. »',
      user: 'Dès qu’il a refermé la porte, il a enlevé son chapeau.',
      userEn: 'As soon as he shut the door, he took off his hat. (Passé antérieur and passé simple become the passé composé.)',
      alts: [
        { fr: 'Il a refermé la porte, puis il a enlevé son chapeau.', en: 'He shut the door, then took off his hat.' },
        { fr: 'À peine la porte refermée, il a ôté son chapeau.', en: 'The door barely shut, he took off his hat. (A participle: also right, more written.)' },
      ],
    },
    {
      ai: 'Et la phrase de la veuve : « Vous eussiez pu m’écrire » ?',
      en: 'And the widow’s line: « Vous eussiez pu m’écrire »?',
      user: 'Vous auriez pu m’écrire.',
      userEn: 'You could have written to me. (Eussiez pu means auriez pu.)',
      alts: [
        { fr: 'Vous auriez pu m’écrire, monsieur.', en: 'You could have written to me, sir.' },
        { fr: 'Une lettre aurait suffi, vous savez.', en: 'A letter would have been enough, you know. (The same meaning, said more freely.)' },
      ],
    },
    {
      ai: 'Dans ton bilan, où ranges-tu ces formes ?',
      en: 'In your audit, where do you put these forms?',
      user: 'À reconnaître : je les comprends en lisant, mais je ne les écris pas.',
      userEn: 'To recognise: I understand them when I read, but I do not write them. (The recognition pile.)',
      alts: [
        { fr: 'Dans la pile à reconnaître, comme le passé simple.', en: 'In the recognition pile, like the passé simple.' },
        { fr: 'Je les lis sans difficulté ; je n’ai pas à les produire.', en: 'I read them easily; I do not have to produce them.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reconnaitre', 'temps'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Les formes des livres', 'Au C1, le passé simple et le subjonctif imparfait sont...',
    ['à reconnaître : tu les lis, tu ne les écris pas', 'à produire dans tes courriels'], 0,
    "Tu les comprends et tu les redis en français d'aujourd'hui. EN: understand them, restate them in today's French."),
  ctl('Le ne explétif', '« Elle craignait qu’il ne fût venu. » Ce ne...',
    ['ne nie rien : elle craignait qu’il soit venu', 'dit qu’il n’était pas venu'], 0,
    "Après craindre que, le ne explétif ne nie rien. EN: the expletive ne negates nothing."),
  ctl('La veuve', 'Pourquoi la veuve remercie-t-elle le notaire ?',
    ['Il a annulé les dettes.', 'Il a préféré venir plutôt qu’écrire.'], 1,
    "Je vous en sais gré : elle salue sa délicatesse, pas une bonne nouvelle. EN: she thanks him for his tact."),
], ['reconnaitre', 'implicite']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'La langue des livres',
    opener: {
      line: "Un notaire, une veuve, une nuit de pluie au dix-neuvième siècle : ici tu vérifies ce que tu lis sans l'écrire. EN: A notary, a widow, a rainy night in the nineteenth century: here you check what you read without writing it.",
      imageRef: 'lessons/bilan-grammatical-c1/act05.jpg',
    },
    sections: [],
    milestone: "Tu lis le passé simple, le passé antérieur, le subjonctif imparfait et ne… point, et tu les redis en français d'aujourd'hui. EN: You read the book tenses and ne… point, and restate them in today's French.",
    estScreens: 41, restPoints: ['a5-formes', 'a5-piege'],
  },
  sections: [A5_LECTURE, A5_FORMES, A5_DIAG, A5_PIEGE, A5_BILAN, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: NOMMER POUR CONDENSER
 *
 *  MEET: the summary of an evaluation report on a bike-share scheme.
 *  NOTICE: five ways to condense and their lessons. PRACTISE: condense
 *  without losing the meaning; four failed condensations. USE: condense a
 *  spoken report with Hélène (scenario). Routes to lessons 10, 14 and 19
 *  in B2.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Un an de vélos en libre-service',
  frSub: 'La synthèse d’un rapport',
  text: SYNTHESE_TEXT,
  glossary: [
    { word: 'prestataire', en: 'contractor', note: 'L’entreprise payée pour fournir un service.' },
    { word: 'réapprovisionnées', en: 'restocked', note: 'De nouveau remplies : ici, on y remet des vélos.' },
    { word: 'pérennité', en: 'long-term survival', note: 'Le fait de durer dans le temps.' },
  ],
  questions: [
    { q: 'Global : quel est le bilan de la première année, en une phrase ?', a: 'Le service a trouvé son public, mais sa fiabilité doit progresser : l’entretien et la répartition des vélos.' },
    { q: 'Détail : pourquoi un vélo sur cinq a-t-il été immobilisé ?', a: 'Faute de pièces de rechange, chez un prestataire qui accumulait les retards.' },
    { q: 'Inférence : « la Ville a fait chiffrer ces mesures » : qui a fait le calcul ?', a: 'Les services techniques, à la demande de la Ville : faire + infinitif dit qu’elle l’a fait faire.' },
    { q: 'Position : le cabinet est-il favorable au service ?', a: 'Oui, avec une réserve : le service a trouvé son public, à condition d’en améliorer la fiabilité.' },
    { q: 'Bilan : trouve quatre noms qui remplacent une phrase entière.', a: 'La mise en service, la progression, l’entretien, la répartition, le recrutement, la constitution, le recours.' },
  ],
  audio: REC('rec-c1-01-synthese'),
  say: REFRAME,
  terms: ['condenser', 'precision'],
};

/** NOTICE: five ways to condense, each with its lesson. */
const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  sheetId: 'sheet-condenser',
  title: 'Cinq façons de condenser, deux leçons',
  examples: [
    ex('fr.b2.langue-soignee.1425', 'un nom au lieu de « les salaires augmenteront » : la leçon 10 du B2, à produire à l’écrit'),
    ex('fr.b2.langue-soignee.1465', 'un nom en sujet, qui résume tout un événement : la leçon 10 du B2'),
    ex('fr.b2.faits-et-procedures.1200', 'faire + infinitif, quand quelqu’un d’autre agit : la leçon 14 du B2, à produire'),
    ex('fr.b2.faits-et-procedures.1245', 'après + infinitif passé, avec un seul sujet : la leçon 14 du B2'),
    ex('fr.b2.faits-et-procedures.1275', 'sans que + subjonctif, avec deux sujets : la leçon 14 du B2'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condenser', 'produire'],
};

/** PRACTISE, on new sentences: condense without losing the meaning. */
const A6_DIAG: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-diag',
  layer: 'core',
  size: 'lg',
  title: 'Diagnostic : condenser sans perdre le sens',
  frSub: 'Des phrases nouvelles',
  groups: [
    grp('Un nom pour une phrase', [it(E(1046)), it(E(1047)), it(E(1051))], chk(
      '« Les loyers ont beaucoup augmenté, et les étudiants s’inquiètent. » La meilleure version condensée ?',
      ['La forte hausse des loyers inquiète les étudiants.', 'La hausse de l’augmentation des loyers inquiète les étudiants.', 'Les loyers en hausse, ça inquiète les étudiants.'], 0,
      `Un nom, un verbe : précis et lisible. L'autre version empile deux noms qui disent la même chose. ${Cap(R(B2.nominal))}. EN: one noun, one verb.`)),
    grp('Faire faire, et le bon sujet', [it(E(1048)), it(E(1050))], chk(
      'Dans la seconde phrase, qui a connu un démarrage lent ?',
      ['la fréquentation, le sujet du verbe principal', 'la Ville'], 0,
      `L'infinitif prend le sujet du verbe principal. ${Cap(R(B2.infinitif))}. EN: the infinitive takes the main subject.`)),
    ctl('Faute de', `« ${fr(E(1049))} » Ici, faute de veut dire...`,
      ['parce qu’il manquait', 'malgré'], 0,
      `Faute de + nom : une cause par manque, en deux mots. ${Cap(R(B2.restriction))}. EN: for lack of.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condenser', 'pointFaible'],
};

/** PRACTISE: four failed condensations. */
const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre condensations ratées',
  errors: [
    {
      wrong: 'Après avoir fini le rapport, le directeur l’a lu.',
      right: 'Après avoir fini le rapport, je l’ai envoyé au directeur.',
      why: `Tu voulais dire « après que j'ai fini ». Mais l'infinitif prend le sujet du verbe principal : ici, le directeur. ${Cap(R(B2.infinitif))}. EN: the infinitive takes the main verb's subject.`,
    },
    {
      wrong: 'La mise en œuvre de l’amélioration de la réduction des coûts a été décidée.',
      right: 'La Ville a décidé de réduire les coûts.',
      why: `Condenser semble savant, et les noms s'empilent. Au-delà de deux, le lecteur perd le fil : rends un verbe à la phrase. ${Cap(R(B2.nominal))}. EN: past two nouns, give the sentence a verb back.`,
    },
    {
      wrong: 'Je suis parti sans que je dise au revoir.',
      right: 'Je suis parti sans dire au revoir.',
      why: `Sans que paraît plus soutenu. Mais avec un seul sujet, l'infinitif s'impose : sans dire. ${Cap(R(B2.infinitif))}. EN: one subject, the infinitive.`,
    },
    {
      wrong: 'La Ville a fait chiffré ces mesures par ses services techniques.',
      right: fr(E(1048)),
      why: `À l'oreille, chiffré et chiffrer sonnent pareil. Après faire, c'est toujours l'infinitif. ${Cap(R(B2.infinitif))}. EN: after faire, always the infinitive.`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condenser', 'pointFaible'],
};

/** USE: condense a spoken report. ’ only, no corpus row. */
const A6_BILAN: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a6-bilan',
  layer: 'core',
  title: 'Pour ton bilan',
  setting: 'Hélène te lit des phrases d’un rapport écrit comme on parle. Condense chacune pour le rapport final, puis range ces outils dans ta pile.',
  turns: [
    {
      ai: 'On a ouvert les stations en avril, et ça s’est bien passé.',
      en: 'We opened the stations in April, and it went well.',
      user: 'L’ouverture des stations, en avril, s’est faite sans difficulté.',
      userEn: 'The opening of the stations, in April, went without difficulty. (A noun for a clause.)',
      alts: [
        { fr: 'La mise en service des stations s’est bien déroulée en avril.', en: 'Bringing the stations into service went well in April.' },
        { fr: 'En avril, les stations ont ouvert sans difficulté.', en: 'In April, the stations opened without difficulty. (No noun, but already more precise.)' },
      ],
    },
    {
      ai: 'Les vélos étaient en panne parce qu’il manquait des pièces.',
      en: 'The bikes were out of order because parts were missing.',
      user: 'Faute de pièces, de nombreux vélos sont restés en panne.',
      userEn: 'For lack of parts, many bikes stayed out of order. (Faute de and a noun.)',
      alts: [
        { fr: 'Le manque de pièces a immobilisé de nombreux vélos.', en: 'The lack of parts kept many bikes off the road. (A noun as subject.)' },
        { fr: 'De nombreux vélos sont restés en panne, faute de pièces.', en: 'Many bikes stayed out of order, for lack of parts.' },
      ],
    },
    {
      ai: 'La Ville a demandé à ses services de calculer le coût.',
      en: 'The City asked its departments to calculate the cost.',
      user: 'La Ville a fait chiffrer le coût par ses services.',
      userEn: 'The City had the cost calculated by its departments. (Faire and an infinitive.)',
      alts: [
        { fr: 'La Ville a fait évaluer le coût par ses services techniques.', en: 'The City had the cost assessed by its technical departments.' },
        { fr: 'Le coût a été chiffré par les services de la Ville.', en: 'The cost was calculated by the City’s departments. (A passive: also right.)' },
      ],
    },
    {
      ai: 'Quand ils ont fini l’enquête, les consultants ont rendu leur rapport.',
      en: 'When they had finished the survey, the consultants handed in their report.',
      user: 'Après avoir fini l’enquête, les consultants ont rendu leur rapport.',
      userEn: 'After finishing the survey, the consultants handed in their report. (Après and a past infinitive, one subject.)',
      alts: [
        { fr: 'Une fois l’enquête terminée, les consultants ont rendu leur rapport.', en: 'Once the survey was done, the consultants handed in their report. (A participle: also right.)' },
        { fr: 'Au terme de l’enquête, les consultants ont rendu leur rapport.', en: 'At the end of the survey, the consultants handed in their report.' },
      ],
    },
    {
      ai: 'Et dans ton bilan, ces outils pour condenser ?',
      en: 'And in your audit, these tools for condensing?',
      user: 'À produire à l’écrit, sans jamais empiler les noms.',
      userEn: 'To produce in writing, without ever piling up nouns. (The produce pile, with a limit.)',
      alts: [
        { fr: 'Je dois les produire dans un rapport, avec mesure.', en: 'I must produce them in a report, in moderation.' },
        { fr: 'À produire ; si les noms m’échappent, c’est un point faible.', en: 'To produce; if the nouns escape me, that is a weak spot.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condenser', 'produire'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le rapport', 'Selon le cabinet, la pérennité du service dépend...',
    ['de sa fiabilité, sans hausse des tarifs', 'de la construction de nouvelles stations'], 0,
    "La dernière phrase pose la condition : fiabilité, tarifs stables. EN: reliability, stable fares."),
  ctl('Le sujet', 'Dans « après avoir connu un démarrage lent, la fréquentation a progressé », l’infinitif...',
    ['prend le sujet du verbe principal', 'a son propre sujet'], 0,
    "La fréquentation a connu le démarrage et a progressé : un seul sujet. EN: one subject for both."),
  ctl('La mesure', 'Une phrase faite de quatre noms abstraits enchaînés est...',
    ['un signe de niveau C1', 'difficile à lire : un verbe la rendrait claire'], 1,
    "Condenser n'est pas empiler. EN: condensing is not piling up."),
], ['condenser', 'precision']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Nommer pour condenser',
    opener: {
      line: "Un rapport qui dit beaucoup en peu de mots : ici tu vérifies que tu sais condenser sans perdre ton lecteur. EN: A report that says a lot in few words: here you check you can condense without losing your reader.",
      imageRef: 'lessons/bilan-grammatical-c1/act06.jpg',
    },
    sections: [],
    milestone: "Tu remplaces une proposition par un nom ou un infinitif, avec le bon sujet et sans empiler. EN: You replace a clause with a noun or an infinitive, with the right subject and without piling up.",
    estScreens: 27, restPoints: ['a6-exemples'],
  },
  sections: [A6_LECTURE, A6_EXEMPLES, A6_DIAG, A6_ERREURS, A6_BILAN, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: PARTICIPES ET GÉRONDIFS
 *
 *  MEET by ear: a morning radio slot on a bike repair workshop (hidden
 *  lines, one take). NOTICE: four self-test questions on B2 rows.
 *  PRACTISE: who does the action, on the radio lines; a dictation. USE:
 *  the participle pile. Routes to lessons 12 and 13 in B2.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La chronique du matin',
  frSub: 'Écoute, puis réponds',
  lines: [
    ln(E(1052)), ln(E(1053)), ln(E(1054)), ln(E(1055)), ln(E(1056)), ln(E(1057)),
    ln(E(1058)), ln(E(1059)), ln(E(1060)), ln(E(1061)), ln(E(1062)), ln(E(1063)),
  ],
  questions: [
    { q: 'Global : de quoi parle la chronique ?', opts: ['d’un atelier où l’on apprend à réparer des vélos', 'd’un nouveau marché couvert', 'd’une course cycliste'], correct: 0, why: "Nadia tient un atelier de réparation, et les jeunes y apprennent une méthode. EN: a bike repair workshop." },
    { q: 'Détail : qu’a fait Nadia pendant trente ans ?', opts: ['elle a travaillé dans un garage', 'elle a enseigné la mécanique', 'elle a vendu des vélos'], correct: 0, why: "« Ayant travaillé » : une action finie avant tout le reste. EN: a completed action, before the rest." },
    { q: 'Détail : comment évite-t-on la file d’attente ?', opts: ['en arrivant tôt le samedi', 'en réservant par téléphone'], correct: 0, why: "Le gérondif dit le moyen : en arrivant tôt. EN: the gérondif gives the means." },
    { q: 'Inférence : Nadia est-elle simplement ravie ?', opts: ['non : elle se dit ravie, mais le prix des pièces l’inquiète', 'oui, tout va bien pour l’atelier'], correct: 0, why: "« Tout en se disant ravie » : tout en marque ici une opposition. EN: tout en marks a contrast here." },
    { q: 'Position : que reproche la chronique à la mairie, sans le dire ?', opts: ['de ne pas avoir répondu depuis mars', 'd’avoir fermé l’atelier'], correct: 0, why: "« N'a toujours pas répondu » : le reproche passe par toujours pas. EN: the reproach is implicit." },
  ],
  audio: REC('rec-c1-01-chronique'),
  say: REFRAME,
  terms: ['condenser', 'implicite'],
};

/** NOTICE: four self-test questions, each on a B2 row. The sheet holds the table. */
const A7_QUESTIONS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-questions',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-condenser',
  title: 'Quatre questions à te poser',
  frSub: 'Devant un participe ou un gérondif',
  hint: 'Quatre cartes : une question, une phrase du B2, sa leçon.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['condenser', 'produire'],
  cards: [
    {
      head: 'Quel sujet ?', label: Cap(R(B2.gerondif)),
      fr: fr('fr.b2.connecteurs-logiques.1608'), sub: rsOf('fr.b2.connecteurs-logiques.1608'),
      body: "En arrivant tôt, on évite la file : celui qui arrive est celui qui évite. Si ton gérondif a un autre sujet, la phrase dit autre chose. EN: the gérondif shares the main subject.",
    },
    {
      head: 'Verbe ou qualité ?', label: Cap(R(B2.participe)),
      fr: fr('fr.b2.langue-soignee.1608'), sub: rsOf('fr.b2.langue-soignee.1608'),
      body: "Une retraitée tenant un atelier : un verbe, invariable. Un travail fatigant : une qualité, qui s'accorde, parfois avec une autre orthographe. EN: a verb stays invariable; a quality agrees.",
    },
    {
      head: 'Ensemble ou malgré ?', label: Cap(R(B2.gerondif)),
      fr: fr('fr.b2.connecteurs-logiques.1732'), sub: rsOf('fr.b2.connecteurs-logiques.1732'),
      body: "Tout en peut dire en même temps, ou malgré : tout en se disant ravie, elle s'inquiète. Le contexte tranche. EN: tout en means at the same time, or despite.",
    },
    {
      head: 'Déjà fini ?', label: 'les leçons 12 et 13 du B2',
      fr: fr('fr.b2.langue-soignee.1671'), sub: rsOf('fr.b2.langue-soignee.1671'),
      body: "Ayant travaillé, étant arrivée : une action finie avant l'autre. À l'écrit soutenu, tu la produis ; à l'oral, tu dis plutôt « comme elle était arrivée ». EN: produce it in formal writing.",
    },
  ],
};

/** PRACTISE, on the radio lines: who does the action? */
const A7_DIAG: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-diag',
  layer: 'core',
  size: 'lg',
  title: 'Diagnostic : qui fait l’action ?',
  frSub: 'Les phrases de la chronique',
  groups: [
    grp('Le gérondif', [it(E(1059)), it(E(1057))], chk(
      '« En arrivant tôt, la file d’attente est courte. » Que dit cette phrase, à la lettre ?',
      ['que la file arrive tôt : le sujet est mal choisi', 'que tu arrives tôt, comme prévu'], 0,
      `Le gérondif prend le sujet du verbe principal : ici, la file. Dis plutôt : en arrivant tôt, on évite la file. ${Cap(R(B2.gerondif))}. EN: a dangling gérondif.`)),
    grp('Participe ou adjectif', [it(E(1053)), it(E(1058))], chk(
      'Complète : « Les résultats sont ... »',
      ['convaincants', 'convainquants'], 0,
      `L'adjectif verbal s'écrit convaincant ; le participe présent, convainquant. ${Cap(R(B2.participe))}. EN: adjective convaincant, participle convainquant.`)),
    grp('L’action finie avant', [it(E(1054)), it(E(1061))], chk(
      'Dans la seconde phrase, « ayant reçu » veut dire...',
      ['qui a reçu, avant le reste', 'qui reçoit en ce moment'], 0,
      `Ayant + participe passé : une action accomplie avant la principale. ${Cap(R(B2.participe))}. EN: completed before the main verb.`)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condenser', 'pointFaible'],
};

/** PRACTISE: write what you hear. */
const A7_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a7-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  itemIds: dicteeFor(7),
  audio: AUDIO,
  say: REFRAME,
  terms: ['condenser'],
};

/** USE: the participle pile. */
const A7_BILAN = pourTonBilan('a7-bilan', 'Participes et gérondifs : tes trois piles', [
  grp('Le gérondif', [it('fr.b2.connecteurs-logiques.1684')], chk(
    'Au C1, le gérondif est...',
    [PROD, RECO], 0,
    `À produire, à l'oral comme à l'écrit. Si le sujet t'échappe, ${R(B2.gerondif)}. EN: to produce.`)),
  grp('L’adjectif verbal', [it('fr.b2.langue-soignee.1610')], chk(
    'Et l’adjectif verbal, avec son accord ?',
    [PROD, RECO], 0,
    `À produire, avec son orthographe : fatigant, convaincant. Un point faible courant : ${R(B2.participe)}. EN: to produce, spelling included.`)),
  grp('Ayant ou étant + participe', [it('fr.b2.langue-soignee.1671')], chk(
    'Reconnu au B2. Au C1, ce participe est...',
    ['à produire à l’écrit soutenu', RECO], 0,
    `À produire à l'écrit ; à l'oral, une subordonnée suffit. ${Cap(R(B2.participe))}. EN: produce it in formal writing.`)),
], ['condenser', 'produire', 'pointFaible']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La chronique', 'Que montre la chronique ?',
    ['qu’un atelier de quartier transmet une méthode', 'que les vélos coûtent trop cher'], 0,
    "On démonte, on observe, on comprend : une méthode plus qu'un vélo. EN: a method more than a bike."),
  ctl('Le sujet', 'Un gérondif prend le sujet...',
    ['du verbe principal', 'du dernier nom de la phrase'], 0,
    "En arrivant tôt, on évite la file : un seul sujet. EN: the main verb's subject."),
  ctl('L’orthographe', 'Complète : « un travail ... »',
    ['fatigant', 'fatiguant'], 0,
    "L'adjectif verbal perd le u : fatigant ; le participe le garde : fatiguant. EN: the adjective drops the u."),
], ['condenser', 'pointFaible']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Participes et gérondifs',
    opener: {
      line: "Une chronique de radio, entendue une seule fois : ici tu vérifies tes participes et tes gérondifs à l'oreille. EN: A radio slot, heard once: here you check your participles and gérondifs by ear.",
      imageRef: 'lessons/bilan-grammatical-c1/act07.jpg',
    },
    sections: [],
    milestone: "Tu rattaches chaque gérondif et chaque participe au bon sujet, et tu distingues le verbe de la qualité. EN: You attach every gérondif and participle to the right subject, and tell the verb from the quality.",
    estScreens: 29, restPoints: ['a7-questions'],
  },
  sections: [A7_ECOUTE, A7_QUESTIONS, A7_DIAG, A7_DICTEE, A7_BILAN, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: CAUSE, CONSÉQUENCE, BUT
 *
 *  MEET: an opinion piece on switching off street lights at night. NOTICE:
 *  six links and their lessons. PRACTISE: which relation, on new sentences;
 *  six links that say something else (stepped trap). USE: the link pile.
 *  Routes to lessons 15 and 17 in B2, 30 and 31 in B1.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Éteindre la nuit',
  frSub: 'Une tribune, des liens logiques',
  text: ECLAIRAGE_TEXT,
  glossary: [
    { word: 'faune nocturne', en: 'night wildlife', note: 'Les animaux qui vivent la nuit : chauves-souris, insectes, hiboux.' },
    { word: 'lampadaires', en: 'street lamps', note: 'Les poteaux qui éclairent la rue.' },
    { word: 'cambrioleurs', en: 'burglars', note: 'Les voleurs qui entrent dans un bâtiment fermé.' },
  ],
  questions: [
    { q: 'Global : l’auteur est-il pour ou contre l’extinction de l’éclairage ?', a: 'Pour, dans les quartiers résidentiels ; il propose d’adapter la règle aux rues commerçantes, quartier par quartier.' },
    { q: 'Détail : qu’a permis la baisse de la facture ?', a: 'La rénovation de deux aires de jeux dès le printemps : « tellement… que » en donne la conséquence.' },
    { q: 'Inférence : « Or, d’après les chiffres… » : que fait ce or dans le raisonnement ?', a: 'Il introduit le fait qui renverse l’argument des opposants : les accidents nocturnes n’ont pas augmenté.' },
    { q: 'Position : que pense l’auteur de l’inquiétude des commerçants ?', a: 'Qu’elle mérite d’être entendue, « dans la mesure où » les deux vols signalés ont eu lieu dans l’obscurité.' },
    { q: 'Bilan : trouve un but avec deux sujets et une conséquence.', a: '« Afin que la commune réduise » : un but, au subjonctif. « La facture a tellement baissé que la commune a pu » : une conséquence, à l’indicatif.' },
  ],
  audio: REC('rec-c1-01-eclairage'),
  say: REFRAME,
  terms: ['liens', 'nuance'],
};

/** NOTICE: six links, each with its lesson. */
const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  sheetId: 'sheet-relations',
  title: 'Six liens, trois leçons',
  examples: [
    ex('fr.b2.connecteurs-logiques.1824', 'du fait que + indicatif, une cause : la leçon 15 du B2'),
    ex('fr.b2.connecteurs-logiques.1929', 'tant… que, une conséquence : la leçon 15 du B2'),
    ex('fr.b2.connecteurs-logiques.1902', 'aussi en tête, puis l’inversion : la leçon 15 du B2, à l’écrit soutenu'),
    ex('fr.b2.connecteurs-logiques.2210', 'afin de + infinitif, un seul sujet : la leçon 17 du B2'),
    ex('fr.b2.connecteurs-logiques.2311', 'de peur que + subjonctif, le ne explétif facultatif : la leçon 17 du B2'),
    ex('fr.b1.connecteurs-logiques.1102', 'or, le fait qui change la donne : reconnu dans la leçon 30 du B1, à produire au C1'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['liens', 'produire'],
};

/** PRACTISE, on new sentences: which relation? */
const A8_DIAG: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-diag',
  layer: 'core',
  size: 'lg',
  title: 'Diagnostic : quelle relation ?',
  frSub: 'Des phrases nouvelles',
  groups: [
    grp('La cause et la conséquence', [it(E(1065)), it(E(1066)), it(E(1069))], chk(
      'Complète : « Il y avait tellement de monde ... nous sommes repartis. »',
      ['que', 'pour que', 'afin que'], 0,
      `Tellement… que : une conséquence, à l'indicatif. ${Cap(R(B2.cause))}. EN: a consequence, indicative.`)),
    grp('Le but', [it(E(1064)), it(E(1067)), it(E(1068))], chk(
      'Complète : « La règle sera adaptée de sorte que chaque quartier ... choisir. »',
      ['puisse', 'peut'], 0,
      `De sorte que + subjonctif : un but, pas encore atteint. Avec l'indicatif, ce serait un résultat. ${Cap(R(B2.but))}. EN: a purpose takes the subjunctive.`)),
    ctl('Or', `« ${fr(E(1073))} » Que fait or ?`,
      ['il introduit un fait qui va contre ce qui précède', 'il annonce une conséquence'], 0,
      `Or apporte le fait qui renverse la situation : ${R(B1.or)}. EN: or brings the fact that turns things round.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['liens', 'pointFaible'],
};

/** PRACTISE: six links that say something else. */
const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Six liens qui disent autre chose',
  rule: {
    title: 'Le mot impose sa relation, et sa forme',
    body: "De sorte que avec l'indicatif dit un résultat ; avec le subjonctif, un but. Pour que exige deux sujets. Or n'est pas donc. Grâce à ne se dit que d'une cause heureuse. EN: each linking word sets a relation and a form.",
  },
  cards: [
    { promptLabel: 'un résultat au subjonctif', promptSound: 'La route était fermée, de sorte que nous ayons pris le train.', fr: fr(E(1070)), ipa: ipaOf(E(1070)), tip: `C'est arrivé : un résultat, à l'indicatif. ${Cap(R(B2.cause))}. EN: a result takes the indicative.` },
    { promptLabel: 'pour que, un seul sujet', promptSound: "J'ai éteint la lumière pour que je dorme mieux.", fr: fr(E(1071)), ipa: ipaOf(E(1071)), tip: `Un seul sujet : pour + infinitif. ${Cap(R(B2.but))}. EN: one subject, the infinitive.` },
    { promptLabel: 'grâce à, une cause malheureuse', promptSound: "Grâce au verglas, l'école a fermé ses portes.", fr: fr(E(1072)), ipa: ipaOf(E(1072)), tip: `Grâce à salue une cause heureuse ; à cause de reste neutre ou négatif. ${Cap(R(B1.subord))}. EN: grâce à is for welcome causes.` },
    { promptLabel: 'aussi sans inversion', promptSound: 'Le dossier était incomplet. Aussi il a été renvoyé à son auteur.', fr: fr('fr.b2.connecteurs-logiques.1902'), ipa: ipaOf('fr.b2.connecteurs-logiques.1902'), tip: `Aussi en tête, au sens de donc, appelle l'inversion à l'écrit soutenu. ${Cap(R(B2.cause))}. EN: aussi at the head takes inversion.` },
    { promptLabel: 'par peur que', promptSound: "Il a menti par peur qu'il déçoive ses parents.", fr: fr('fr.b2.connecteurs-logiques.1864'), ipa: ipaOf('fr.b2.connecteurs-logiques.1864'), tip: `Un seul sujet : par peur de + infinitif. ${Cap(R(B2.cause))}. EN: one subject, de + infinitive.` },
    { promptLabel: 'donc pour or', promptSound: "Beaucoup d'élèves révisent la nuit. Donc, c'est en dormant que la mémoire se consolide.", fr: fr(E(1073)), ipa: ipaOf(E(1073)), tip: `Le sommeil ne découle pas des révisions nocturnes : il va contre elles. C'est or. ${Cap(R(B1.or))}. EN: or, not donc.` },
  ],
  drill: [
    { promptSay: 'La route était fermée, de sorte que nous ... le train.', opts: ['avons pris', 'ayons pris'], correct: 0 },
    { promptSay: 'Je t’écris ... tu saches la vérité.', opts: ['pour que', 'pour'], correct: 0 },
    { promptSay: '... la pluie, le match a été annulé.', opts: ['À cause de', 'Grâce à'], correct: 0 },
    { promptSay: 'Le dossier était incomplet. Aussi ... renvoyé.', opts: ['a-t-il été', 'il a été'], correct: 0 },
    { promptSay: 'Il a menti par peur de ... ses parents.', opts: ['décevoir', 'qu’il déçoive'], correct: 0 },
    { promptSay: 'Beaucoup d’élèves révisent la nuit. ..., c’est en dormant que la mémoire se consolide.', opts: ['Or', 'Donc'], correct: 0 },
    { promptSay: 'La règle sera adaptée de sorte que chaque quartier ... choisir.', opts: ['puisse', 'peut'], correct: 0 },
    { promptSay: 'Les commerçants craignent que les vitrines n’... les cambrioleurs.', opts: ['attirent', 'attireront'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le mot impose sa relation' },
    { label: 'Six cartes', kind: 'cards', title: 'Le lien qui dit autre chose' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-01-piege-liens'),
  say: REFRAME,
  terms: ['liens', 'pointFaible'],
};

/** USE: the link pile. */
const A8_BILAN = pourTonBilan('a8-bilan', 'Les liens : tes trois piles', [
  grp('De sorte que, deux sens', [it('fr.b2.connecteurs-logiques.1915')], chk(
    'Au C1, de sorte que, avec ses deux modes, est...',
    [PROD, RECO], 0,
    `À produire : le mode dit si c'est un but ou un résultat. Point faible fréquent : ${R(B2.cause)}. EN: to produce; the mood decides.`)),
  grp('Aussi et l’inversion', [it('fr.b2.connecteurs-logiques.1902')], chk(
    'Et aussi en tête de phrase, avec l’inversion ?',
    ['à produire à l’écrit soutenu', RECO], 0,
    `À l'écrit soutenu, tu la produis ; à l'oral, donc suffit. ${Cap(R(B2.cause))}. EN: produce it in formal writing.`)),
  grp('Or', [it('fr.b1.connecteurs-logiques.1102')], chk(
    'Reconnu au B1. Au C1, or est...',
    [PROD, RECO], 0,
    `À produire, dans un raisonnement écrit ou oral. ${Cap(R(B1.or))}. EN: to produce at C1.`)),
], ['liens', 'produire', 'pointFaible']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La tribune', 'Que propose l’auteur, à la fin ?',
    ['d’éteindre toutes les rues, sans exception', 'de laisser chaque quartier choisir ses horaires'], 1,
    "La question n'est pas de savoir s'il faut éteindre, mais où, et pour qui. EN: not whether, but where and for whom."),
  ctl('De sorte que', '« de sorte que chaque quartier puisse choisir » : ce de sorte que dit...',
    ['un but', 'un résultat déjà obtenu'], 0,
    "Le subjonctif puisse vise ce qui n'est pas encore arrivé. EN: the subjunctive aims at what has not happened."),
  ctl('Dans la mesure où', '« dans la mesure où les deux vols ont eu lieu dans l’obscurité » : ce lien dit...',
    ['une cause qui vaut jusqu’à un certain point', 'une condition impossible'], 0,
    "Dans la mesure où : une cause, avec sa limite. EN: a cause, with its limit."),
], ['liens', 'nuance']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Cause, conséquence, but',
    opener: {
      line: "Une ville qui éteint ses lampadaires la nuit : ici tu vérifies que chaque lien dit la bonne relation. EN: A town that switches off its street lights at night: here you check that every link names the right relation.",
      imageRef: 'lessons/bilan-grammatical-c1/act08.jpg',
    },
    sections: [],
    milestone: "Tu choisis le lien qui dit la cause, la conséquence ou le but, avec la forme qu'il impose. EN: You choose the link that names the cause, the consequence or the purpose, with the form it requires.",
    estScreens: 38, restPoints: ['a8-exemples', 'a8-piege'],
  },
  sections: [A8_LECTURE, A8_EXEMPLES, A8_DIAG, A8_PIEGE, A8_BILAN, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: CONCÉDER, RESTREINDRE, NIER
 *
 *  MEET: a theatre review. NOTICE: six turns of the review and their
 *  lessons. PRACTISE: concede and restrict, on new sentences; four lame
 *  concessions. USE: the concession pile, with nonobstant and quelque… que
 *  kept as recognition. Routes to lessons 16, 19 and 21 in B2, 20 in B1.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Trois heures au Théâtre de la Rive',
  frSub: 'Une critique qui accorde et retient',
  text: CRITIQUE_TEXT,
  glossary: [
    { word: 'piétine', en: 'goes nowhere', note: 'Piétiner : ne pas avancer, rester sur place.' },
    { word: 'tirade', en: 'long speech', note: 'Une longue réplique d’un seul personnage, au théâtre.' },
    { word: 'longueurs', en: 'overlong passages', note: 'Des passages qui traînent, dans un livre ou un spectacle.' },
  ],
  questions: [
    { q: 'Global : le critique recommande-t-il le spectacle ?', a: 'Oui, avec des réserves : il faut supporter les longueurs et rester jusqu’au deuxième acte.' },
    { q: 'Détail : qui sauve le premier acte ?', a: 'Seule la comédienne principale, Inès Morvan, fait exister son personnage dès la première scène.' },
    { q: 'Inférence : « quelque talent qu’aient les comédiens, et ils en ont » : que reproche vraiment le critique ?', a: 'Pas le jeu, mais le texte : les comédiens ne peuvent rien contre un texte qui piétine.' },
    { q: 'Position : « sauf peut-être le metteur en scène » : quel est le ton de cette fin de phrase ?', a: 'Ironique : le critique laisse entendre que la fin ne s’explique que dans la tête du metteur en scène.' },
    { q: 'Bilan : trouve une concession, une restriction et une négation combinée.', a: '« Bien que la mise en scène soit précise » ; « ne décolle qu’au deuxième acte » ; « on n’avait plus rien vu ».' },
  ],
  audio: REC('rec-c1-01-critique'),
  say: REFRAME,
  terms: ['liens', 'implicite'],
};

/** NOTICE: six turns of the review, each with its lesson. The sheet holds them. */
const A9_FORMES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-formes',
  layer: 'core',
  sheetId: 'sheet-relations',
  title: 'Six tournures de la critique',
  cols: ['Tournure', 'Au C1', 'Leçon'],
  rows: [
    { cells: ['certes… néanmoins', 'à produire', 'la leçon 16 du B2'], say: fr('fr.b2.connecteurs-logiques.2153'),
      detail: { title: 'Certes… néanmoins', body: "Tu accordes un point, puis tu reprends la main : certes, le théâtre a de l'audace ; néanmoins, la pièce lasse. EN: grant a point, then take back control.", say: fr('fr.b2.connecteurs-logiques.2007') } },
    { cells: ['bien que, quoique', 'à produire', 'la leçon 16 du B2'], say: fr('fr.b2.connecteurs-logiques.2000'),
      detail: { title: 'Bien que, quoique', body: "Bien que la mise en scène soit précise : le subjonctif, même pour un fait réel. Quoique s'écrit en un mot. EN: the subjunctive, even for a real fact.", say: fr(E(1074)) } },
    { cells: ['quand bien même', 'à produire à l’écrit', 'la leçon 16 du B2'], say: fr('fr.b2.connecteurs-logiques.2113'),
      detail: { title: 'Quand bien même', body: "Une concession sur une hypothèse : quand bien même on serait sensible. Soutenu, précis, au conditionnel. EN: a concession on a hypothesis, conditional.", say: fr(E(1080)) } },
    { cells: ['tout… que, quelque… que', 'tout… que à produire, quelque… que à reconnaître', 'la leçon 16 du B2'], say: fr(E(1076)),
      detail: { title: 'Tout… que, quelque… que', body: "Tout imparfait qu'il est : à produire à l'écrit. Quelque talent qu'aient les comédiens : à reconnaître, très littéraire. EN: tout… que to produce; quelque… que to recognise.", say: fr(E(1075)) } },
    { cells: ['ne… que, seul, sauf', 'à produire', 'la leçon 19 du B2'], say: fr('fr.b2.negation-et-restriction.1200'),
      detail: { title: 'La restriction', body: "Ne décolle qu'au deuxième acte, seule la comédienne : la restriction trace une limite. EN: restriction draws a limit.", say: fr(E(1078)) } },
    { cells: ['ne… plus rien, ne… guère', 'à produire, guère à l’écrit soutenu', 'la leçon 21 du B2, la leçon 20 du B1'], say: fr('fr.b2.negation-et-restriction.1451'),
      detail: { title: 'Les négations combinées', body: "Un seul ne, et les mots négatifs s'additionnent, sans pas. Guère, reconnu au B1, se produit à l'écrit soutenu. EN: one ne, negative words add up, no pas.", say: fr(E(1079)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['liens', 'nuance'],
};

/** PRACTISE, on new sentences: concede and restrict. */
const A9_DIAG: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-diag',
  layer: 'core',
  size: 'lg',
  title: 'Diagnostic : concéder et restreindre',
  frSub: 'Des phrases nouvelles',
  groups: [
    grp('Concéder', [it(E(1074)), it(E(1076)), it(E(1080))], chk(
      'Complète : « Quoique la salle ... pleine, on trouvera une place. »',
      ['soit', 'est', 'serait'], 0,
      `Quoique, en un mot, prend le subjonctif. ${Cap(R(B2.concession))}. EN: quoique takes the subjunctive.`)),
    grp('Restreindre et nier', [it(E(1078)), it(E(1077)), it(E(1079))], chk(
      'Complète : « Je n’ai ... vu ... dans la salle. »',
      ['jamais… personne', 'pas jamais… personne'], 0,
      `Un seul ne, et jamais pas avec un autre mot négatif. ${Cap(R(B2.negation))}. EN: one ne, no pas.`)),
    ctl('À reconnaître', `« ${fr(E(1075))} » Ce quelque… que veut dire...`,
      ['si talentueux que soient les comédiens', 'quelques comédiens ont du talent'], 0,
      `Une concession littéraire, à reconnaître. ${Cap(R(B2.concession))}. EN: however talented.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['liens', 'pointFaible'],
};

/** PRACTISE: four lame concessions. */
const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre concessions bancales',
  errors: [
    {
      wrong: 'Malgré qu’il pleuve, nous sortirons.',
      right: 'Bien qu’il pleuve, nous sortirons.',
      why: `On l'entend partout, et il ressemble à malgré. Mais l'Académie le déconseille : à l'écrit soutenu, préfère bien que. ${Cap(R(B2.concession))}. EN: widely heard, but advised against in writing.`,
    },
    {
      wrong: 'Quoi que la salle soit pleine, on trouvera une place.',
      right: fr('fr.b2.opinions-et-avis.1934'),
      why: `À l'oreille, quoique et quoi que se confondent. Quoique veut dire bien que ; quoi que veut dire quelle que soit la chose. ${Cap(R(B2.concession))}. EN: quoique means although; quoi que, whatever.`,
    },
    {
      wrong: 'Je n’ai pas vu personne au guichet.',
      right: 'Je n’ai vu personne au guichet.',
      why: `L'anglais garde not… anybody. En français, personne prend la place de pas. ${Cap(R(B2.negation))}. EN: personne replaces pas.`,
    },
    {
      wrong: 'Il ne travaille seulement le lundi.',
      right: 'Il ne travaille que le lundi.',
      why: `Seulement et ne… que veulent dire la même chose, mais ne se combinent pas ainsi. ${Cap(R(B2.restriction))}. EN: ne… que, or seulement without ne.`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['liens', 'pointFaible'],
};

/** USE: the concession pile. */
const A9_BILAN = pourTonBilan('a9-bilan', 'Concéder et restreindre : tes trois piles', [
  grp('Quand bien même', [it('fr.b2.connecteurs-logiques.2113')], chk(
    'Au C1, quand bien même + conditionnel est...',
    ['à produire à l’écrit soutenu', RECO], 0,
    `À produire dans un essai ou une lettre formelle. En cas de doute, ${R(B2.concession)}. EN: produce it in formal writing.`)),
  grp('Nonobstant', [it('fr.b2.universite.1149')], chk(
    'Et nonobstant ?',
    [PROD, RECO], 1,
    `À reconnaître : la langue juridique ou très soutenue. Dans un essai, malgré suffit, comme ${R(B2.academique)} le disait. EN: recognise it.`)),
  grp('Ne… guère', [it('fr.b1.negation-et-restriction.1066')], chk(
    'Reconnu au B1. Au C1, ne… guère est...',
    ['à produire à l’écrit soutenu', RECO], 0,
    `À produire à l'écrit soutenu. ${Cap(R(B1.guere))}. EN: produce it in formal writing.`)),
], ['liens', 'produire', 'reconnaitre']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('La critique', 'Que reproche le critique au spectacle ?',
    ['un texte qui piétine et une fin inexpliquée', 'des comédiens sans talent'], 0,
    "Les comédiens ont du talent ; le texte et la fin posent problème. EN: the script and the ending are the problem."),
  ctl('Tout… que', '« Tout imparfait qu’il est » veut dire...',
    ['bien qu’il soit imparfait', 'parce qu’il est imparfait'], 0,
    "Tout… que concède, avec l'indicatif. EN: tout… que concedes, with the indicative."),
  ctl('Le point faible', 'Tu écris encore « malgré qu’il pleuve ». Que notes-tu ?',
    [`un point faible, à reprendre dans ${R(B2.concession)}`, 'rien : c’est la forme soutenue'], 0,
    "À l'écrit soutenu, bien que. Une habitude qui revient est un point faible. EN: a recurring habit is a weak spot."),
], ['liens', 'pointFaible']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Concéder, restreindre, nier',
    opener: {
      line: "Une critique de théâtre qui accorde, limite et nie dans la même phrase : ici tu vérifies tes concessions. EN: A theatre review that grants, limits and denies in a single sentence: here you check your concessions.",
      imageRef: 'lessons/bilan-grammatical-c1/act09.jpg',
    },
    sections: [],
    milestone: "Tu concèdes, tu restreins et tu nies avec la forme exacte, et tu reconnais les tournures les plus littéraires. EN: You concede, restrict and deny with the exact form, and recognise the most literary turns.",
    estScreens: 28, restPoints: ['a9-formes'],
  },
  sections: [A9_LECTURE, A9_FORMES, A9_DIAG, A9_ERREURS, A9_BILAN, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: METTRE EN RELIEF, EFFACER L'ACTEUR
 *
 *  MEET: one school board meeting told by a parent and by the minutes.
 *  NOTICE: six turns and their lessons. PRACTISE: who is in front, on new
 *  sentences; six voices in the wrong register (stepped trap). USE: the
 *  voice pile. Routes to lessons 11 and 20 in B2.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Une réunion, deux récits',
  frSub: 'Les personnes en avant, ou effacées',
  text: REUNION_TEXT,
  glossary: [
    { word: 'compte rendu', en: 'minutes', note: 'Le texte officiel qui résume une réunion.' },
    { word: 'trancher', en: 'to decide', note: 'Prendre une décision nette entre deux choix.' },
    { word: 'levée', en: 'closed', note: 'Lever la séance : déclarer la réunion terminée.' },
  ],
  questions: [
    { q: 'Global : pourquoi les deux récits sont-ils si différents ?', a: 'Ils racontent la même réunion pour deux lecteurs : une voisine, puis l’ensemble des parents. L’un met les personnes en avant, l’autre les efface.' },
    { q: 'Détail : de combien le budget des sorties a-t-il été réduit ?', a: 'De vingt pour cent, selon le compte rendu.' },
    { q: 'Inférence : « il a été proposé de solliciter le soutien de l’association » : qui l’a proposé ?', a: 'Le texte ne le dit pas : la tournure impersonnelle efface l’auteur de la proposition.' },
    { q: 'Position : que reproche Samuel à la directrice, et le compte rendu le confirme-t-il ?', a: 'D’avoir tout bloqué au nom du budget. Le compte rendu ne le confirme ni ne le dément : il ne nomme personne.' },
    { q: 'Bilan : trouve deux mises en relief et deux tournures impersonnelles.', a: '« C’est la directrice qui a tout bloqué », « les professeurs, eux » ; « il a été rappelé », « il reste à déterminer ».' },
  ],
  audio: REC('rec-c1-01-reunion'),
  say: REFRAME,
  terms: ['registre', 'implicite'],
};

/** NOTICE: six turns, each with its lesson. */
const A10_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-exemples',
  layer: 'core',
  sheetId: 'sheet-registre',
  title: 'Six tournures, deux leçons',
  examples: [
    ex('fr.b2.pronoms-essentiels.1800', 'deux pronoms toniques pour opposer deux personnes : la leçon 11 du B2'),
    ex('fr.b2.pronoms-essentiels.1888', 'c’est… que, pour mettre une personne en relief : la leçon 11 du B2'),
    ex('fr.b2.pronoms-essentiels.1863', 'seul et un pronom tonique : la leçon 11 du B2'),
    ex('fr.b2.opinions-et-avis.2000', 'il a été décidé que : l’acteur disparaît, la leçon 20 du B2'),
    ex('fr.b2.opinions-et-avis.2070', 'il n’est pas exclu que + subjonctif : la leçon 20 du B2'),
    ex('fr.b2.opinions-et-avis.2169', 'il convient de : une recommandation sans sujet, la leçon 20 du B2'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'produire'],
};

/** PRACTISE, on new sentences: who is in front? */
const A10_DIAG: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-diag',
  layer: 'core',
  size: 'lg',
  title: 'Diagnostic : qui est au premier plan ?',
  frSub: 'Des phrases nouvelles',
  groups: [
    grp('Mettre en relief', [it(E(1081)), it(E(1082))], chk(
      'Complète : « C’est nous qui ... proposé la sortie. »',
      ['avons', 'ont', 'a'], 0,
      `Après c'est… qui, le verbe s'accorde avec le pronom : nous avons. ${Cap(R(B2.tonique))}. EN: the verb agrees with the pronoun.`)),
    grp('Effacer l’acteur', [it(E(1083)), it(E(1084)), it(E(1085))], chk(
      'Complète : « Il n’est pas exclu que la région ... une partie des frais. »',
      ['paie', 'paiera'], 0,
      `Il n'est pas exclu que dit une possibilité : le subjonctif. ${Cap(R(B2.impersonnel))}. EN: a possibility, subjunctive.`)),
    ctl('Le même fait', 'Laquelle convient à un compte rendu officiel ?',
      ['Il a été décidé de réduire le budget des sorties.', 'C’est la directrice qui a coupé le budget, voilà.'], 0,
      `Le compte rendu efface les personnes ; le récit oral les met en avant. ${Cap(R(B2.impersonnel))}. EN: minutes hide the actors.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'pointFaible'],
};

/** PRACTISE: six voices in the wrong register. */
const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Six voix qui se trompent',
  rule: {
    title: 'Mettre en avant, ou effacer, sans fausse note',
    body: "À l'oral, le pronom tonique et c'est… qui mettent une personne en avant ; le verbe s'accorde avec elle. À l'écrit officiel, le il impersonnel efface l'acteur, jamais ça. EN: stress a person in speech; hide the actor with impersonal il in writing.",
  },
  cards: [
    { promptLabel: 'moi qui a', promptSound: "C'est moi qui a proposé la sortie.", fr: fr(E(1086)), ipa: ipaOf(E(1086)), tip: `Moi qui ai : le verbe s'accorde avec le pronom. ${Cap(R(B2.tonique))}. EN: moi qui ai.` },
    { promptLabel: 'décidé… soit', promptSound: 'Il est décidé que la sortie soit annulée.', fr: fr(E(1087)), ipa: ipaOf(E(1087)), tip: `Une décision prise est un fait : il a été décidé que, puis l'indicatif ou le conditionnel. ${Cap(R(B2.impersonnel))}. EN: a decision is a fact.` },
    { promptLabel: 'pas exclu… va', promptSound: "Il n'est pas exclu que la région va payer une partie des frais.", fr: fr(E(1088)), ipa: ipaOf(E(1088)), tip: `Une possibilité : le subjonctif. ${Cap(R(B2.impersonnel))}. EN: a possibility takes the subjunctive.` },
    { promptLabel: 'il me semble… soit', promptSound: 'Il me semble que la nouvelle ligne soit en avance.', fr: fr('fr.b2.opinions-et-avis.2099'), ipa: ipaOf('fr.b2.opinions-et-avis.2099'), tip: `Il me semble que donne un avis, à l'indicatif ; il semble que prend le subjonctif. ${Cap(R(B2.impersonnel))}. EN: il me semble que takes the indicative.` },
    { promptLabel: 'moi et mon mari', promptSound: 'Moi et mon mari vous remercions de votre accueil.', fr: fr('fr.b2.pronoms-essentiels.1877'), ipa: ipaOf('fr.b2.pronoms-essentiels.1877'), tip: `La politesse place moi en dernier : mon mari et moi. ${Cap(R(B2.tonique))}. EN: put moi last.` },
    { promptLabel: 'ça a été décidé', promptSound: 'Ça a été décidé de réduire le budget des sorties.', fr: fr(E(1089)), ipa: ipaOf(E(1089)), tip: `À l'écrit, le sujet impersonnel est il, jamais ça. ${Cap(R(B2.impersonnel))}. EN: impersonal il, not ça, in writing.` },
  ],
  drill: [
    { promptSay: 'C’est moi qui ... proposé la sortie.', opts: ['ai', 'a'], correct: 0 },
    { promptSay: 'Il a été décidé que la sortie ... annulée.', opts: ['serait', 'soit'], correct: 0 },
    { promptSay: 'Il n’est pas exclu que la région ... une partie des frais.', opts: ['paie', 'va payer'], correct: 0 },
    { promptSay: 'Il me semble que la ligne ... en avance.', opts: ['est', 'soit'], correct: 0 },
    { promptSay: '... vous remercions de votre accueil.', opts: ['Mon mari et moi', 'Moi et mon mari'], correct: 0 },
    { promptSay: '... a été décidé de réduire le budget.', opts: ['Il', 'Ça'], correct: 0 },
    { promptSay: 'Les professeurs, ..., étaient d’accord avec nous.', opts: ['eux', 'ils'], correct: 0 },
    { promptSay: 'Il ... à déterminer le montant demandé aux familles.', opts: ['reste', 'manque'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Mettre en avant, ou effacer' },
    { label: 'Six cartes', kind: 'cards', title: 'La voix qui se trompe' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-01-piege-voix'),
  say: REFRAME,
  terms: ['registre', 'pointFaible'],
};

/** USE: the voice pile. */
const A10_BILAN = pourTonBilan('a10-bilan', 'La voix : tes trois piles', [
  grp('C’est… qui, avec l’accord', [it('fr.b2.pronoms-essentiels.1888')], chk(
    'Au C1, la mise en relief est...',
    [PROD, RECO], 0,
    `À produire, surtout à l'oral. Si l'accord après moi qui t'échappe, ${R(B2.tonique)}. EN: to produce.`)),
  grp('L’impersonnel du compte rendu', [it('fr.b2.opinions-et-avis.2000'), it('fr.b2.opinions-et-avis.2169')], chk(
    'Et les tournures impersonnelles ?',
    [PROD, RECO], 0,
    `À produire à l'écrit officiel, avec le bon mode derrière. ${Cap(R(B2.impersonnel))}. EN: to produce in official writing.`)),
  ctl('Le choix', 'Tu rédiges le compte rendu d’une réunion. Tu écris...',
    ['Il a été proposé de solliciter les parents.', 'Moi, je dis que c’est elle qui a tout bloqué.'], 0,
    `Le registre suit le lecteur : un compte rendu efface les personnes. ${Cap(R(B2.impersonnel))}. EN: the register follows the reader.`),
], ['registre', 'produire', 'pointFaible']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Les deux récits', 'Lequel des deux récits est faux ?',
    ['aucun : chacun sert un lecteur différent', 'celui de Samuel'], 0,
    "Aucun n'est faux : l'un met en avant, l'autre efface. EN: neither is wrong."),
  ctl('L’accord', 'Complète : « C’est vous qui ... raison. »',
    ['avez', 'a', 'ont'], 0,
    "Le verbe s'accorde avec le pronom repris par qui. EN: the verb agrees with the pronoun."),
  ctl('L’implicite', 'Quelle question le compte rendu laisse-t-il dans l’ombre ?',
    ['qui a décidé', 'la date de la sortie'], 0,
    "L'impersonnel efface l'auteur de la décision : Samuel, lui, pose la question. EN: the impersonal hides who decided."),
], ['registre', 'implicite']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Mettre en relief, effacer',
    opener: {
      line: "Une même réunion, racontée par un parent et par le compte rendu : ici tu vérifies que tu sais mettre en avant ou effacer. EN: One meeting, told by a parent and by the minutes: here you check you can put people forward or hide them.",
      imageRef: 'lessons/bilan-grammatical-c1/act10.jpg',
    },
    sections: [],
    milestone: "Tu mets une personne en relief à l'oral et tu effaces l'acteur à l'écrit officiel, sans fausse note. EN: You stress a person in speech and hide the actor in official writing, without a false note.",
    estScreens: 38, restPoints: ['a10-exemples', 'a10-piege'],
  },
  sections: [A10_LECTURE, A10_EXEMPLES, A10_DIAG, A10_PIEGE, A10_BILAN, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: LE REGISTRE DE L'ÉCRIT
 *
 *  MEET: one essay paragraph, before and after revision. NOTICE: four
 *  self-test questions on B2 rows. PRACTISE: the version that says it
 *  exactly; four first drafts. USE: sort your own strengths and weak spots
 *  aloud with Hélène (scenario), the rehearsal of the task. Routes to
 *  lessons 16, 21, 22 and 23 in B2.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Avant et après relecture',
  frSub: 'Un paragraphe sur le télétravail',
  text: TELETRAVAIL_TEXT,
  glossary: [
    { word: 'se double', en: 'comes with', note: 'Se doubler de : s’accompagner d’une seconde chose.' },
    { word: 'partisans', en: 'supporters', note: 'Les personnes qui défendent une idée.' },
    { word: 'alternance', en: 'alternation', note: 'Le fait de passer régulièrement d’une chose à l’autre : bureau, maison, bureau.' },
  ],
  questions: [
    { q: 'Global : qu’est-ce qui sépare le premier jet de la version revue ?', a: 'La version revue dit la même chose avec précision : des reprises au lieu des répétitions, des affirmations dosées, une position nette sans « je pense que ».' },
    { q: 'Détail : pourquoi le bénéfice environnemental est-il « moins net qu’on ne le dit » ?', a: 'Parce que le chauffage des logements compense en partie la baisse des déplacements.' },
    { q: 'Inférence : « le télétravail ne saurait devenir la norme qu’à condition… » : que pense l’auteur du télétravail à temps plein ?', a: 'Qu’il serait une erreur : la phrase le laisse conclure sans le dire.' },
    { q: 'Position : l’auteur de la version revue est-il pour ou contre le télétravail ?', a: 'Pour, avec une limite : en alternance, pas comme une rupture.' },
    { q: 'Bilan : trouve trois structures du B2 dans la version revue.', a: '« Encore qu’il soit » (une concession), « qu’on ne le dit » (un ne explétif après un comparatif), « ne saurait » (une négation soutenue), « cet avantage » (une reprise).' },
  ],
  audio: REC('rec-c1-01-teletravail'),
  say: REFRAME,
  terms: ['registre', 'implicite'],
};

/** NOTICE: four self-test questions before handing in a text. The sheet holds the table. */
const A11_QUESTIONS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a11-questions',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-registre',
  title: 'Quatre questions à te poser',
  frSub: 'Avant de rendre un texte',
  hint: 'Quatre cartes : une question, une phrase du B2, sa leçon.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'precision'],
  cards: [
    {
      head: 'Un fil ?', label: Cap(R(B2.academique)),
      fr: fr('fr.b2.universite.1046'), sub: rsOf('fr.b2.universite.1046'),
      body: "Chaque phrase reprend-elle la précédente, par un nom-résumé ou une transition, au lieu de répéter le même mot ? EN: does each sentence pick up the last one instead of repeating it?",
    },
    {
      head: 'Jamais plus sûr ?', label: Cap(R(B2.academique)),
      fr: fr('fr.b2.universite.1004'), sub: rsOf('fr.b2.universite.1004'),
      body: "Chaque affirmation est-elle à la mesure de ta preuve ? Ni tous ni toujours, mais pas non plus une précaution à chaque mot. EN: is each claim sized to the evidence, without over-hedging?",
    },
    {
      head: 'Une thèse ?', label: Cap(R(B2.argument)),
      fr: fr('fr.b2.opinions-et-avis.1612'), sub: rsOf('fr.b2.opinions-et-avis.1612'),
      body: "Ta position se lit-elle sans « je pense que » ? Réponds-tu à ceux qui pensent le contraire ? EN: can your position be read without « je pense que », and do you answer the other side?",
    },
    {
      head: 'Le mot juste ?', label: Cap(R(B2.academique)),
      fr: fr('fr.b2.universite.1131'), sub: rsOf('fr.b2.universite.1131'),
      body: "Soutenu, mais clair : il convient de plutôt que il faut, et jamais nonobstant pour faire savant. EN: formal but clear; never showing off.",
    },
  ],
};

/** PRACTISE, on new sentences: the version that says it exactly. */
const A11_DIAG: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-diag',
  layer: 'core',
  size: 'lg',
  title: 'Diagnostic : la version exacte',
  frSub: 'Précision, nuance, implicite',
  groups: [
    grp('Précis ou vague', [it(E(1090)), it(E(1093))], chk(
      'Laquelle est la plus précise ?',
      ['Le télétravail supprime les trajets quotidiens.', 'Le télétravail, c’est pratique pour plein de choses.'], 0,
      `Un fait nommé, un verbe exact : la précision. ${Cap(R(B2.academique))}. EN: a named fact, an exact verb.`)),
    grp('Nuancer sans se noyer', [it(E(1091)), it('fr.b2.negation-et-restriction.1573')], chk(
      '« Encore qu’il soit moins net qu’on ne le dit » : que fait cette fin de phrase ?',
      ['elle limite l’avantage, sans le nier', 'elle annule l’avantage'], 0,
      `Encore que concède, au subjonctif ; après le comparatif, le ne est explétif. ${Cap(R(B2.concession))} et ${R(B2.negation)}. EN: it limits, it does not cancel.`)),
    grp('Dire sans dire', [it(E(1092)), it('fr.b2.negation-et-restriction.1411')], chk(
      '« Ne saurait… qu’à condition » : que laisse entendre l’auteur ?',
      ['que le télétravail à temps plein serait une erreur', 'que le télétravail est impossible'], 0,
      `Ne saurait refuse poliment, et la condition dit le reste. ${Cap(R(B2.negation))}. EN: a polite refusal, the rest implied.`)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['precision', 'implicite', 'nuance'],
};

/** PRACTISE: four first drafts. */
const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a11-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre premiers jets',
  errors: [
    {
      wrong: 'Le télétravail fait gagner du temps. Le télétravail est aussi bon pour la planète.',
      right: 'Le télétravail fait gagner du temps, et cet avantage se double d’un bénéfice pour la planète.',
      why: `Répéter le sujet semble clair. Mais une reprise tient le fil sans alourdir. ${Cap(R(B2.academique))}. EN: a reprise keeps the thread.`,
    },
    {
      wrong: 'Il est prouvé que le télétravail rend tout le monde plus heureux.',
      right: 'Le télétravail semble améliorer la satisfaction de nombreux salariés.',
      why: `L'affirmation absolue paraît forte ; elle est surtout fragile. Dose-la à ta preuve. ${Cap(R(B2.academique))}. EN: size the claim to the evidence.`,
    },
    {
      wrong: 'Bref, le télétravail, c’est super.',
      right: 'Le télétravail présente donc des avantages réels.',
      why: `Bref et super viennent de la conversation. À l'écrit, la conclusion garde le registre du texte. ${Cap(R(B2.academique))}. EN: keep the register to the end.`,
    },
    {
      wrong: 'Certains disent que c’est mauvais, mais ils ont tort.',
      right: 'Certains y voient une menace ; cette crainte mérite d’être examinée avant d’être écartée.',
      why: `Balayer l'objection semble ferme. Une thèse convainc mieux quand elle y répond. ${Cap(R(B2.argument))}. EN: answer the objection, do not dismiss it.`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'pointFaible'],
};

/** USE: sort your own grammar aloud, the rehearsal of the task. ’ only, no corpus row. */
const A11_BILAN: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-bilan',
  layer: 'core',
  title: 'Pour ton bilan',
  setting: 'Avant d’écrire ton plan, Hélène te demande de faire le tri à voix haute. Réponds avec précision : une structure, une leçon, un exemple.',
  turns: [
    {
      ai: 'Commence par un point fort. Lequel, exactement ?',
      en: 'Start with a strength. Which one, exactly?',
      user: 'Le plus-que-parfait : je l’emploie sans hésiter, même dans un discours rapporté.',
      userEn: 'The pluperfect: I use it without hesitating, even in reported speech. (A precise strength.)',
      alts: [
        { fr: 'Le choix entre le subjonctif et l’indicatif après les verbes d’opinion.', en: 'Choosing between the subjunctive and the indicative after opinion verbs.' },
        { fr: 'Je reconnais le passé simple et le subjonctif imparfait en lisant.', en: 'I recognise the passé simple and the imperfect subjunctive when I read. (A recognition strength: also right.)' },
      ],
    },
    {
      ai: 'Et ton premier point faible ?',
      en: 'And your first weak spot?',
      user: 'Les si mixtes : je mets la conséquence au passé alors qu’elle porte sur le présent.',
      userEn: 'Mixed si clauses: I put the result in the past when it concerns the present. (A weak structure, with the error named.)',
      alts: [
        { fr: 'Le futur antérieur : j’écris encore « quand j’ai fini, je t’appellerai ».', en: 'The futur antérieur: I still write « quand j’ai fini, je t’appellerai ». (The error quoted: very precise.)' },
        { fr: 'Le gérondif : il m’arrive de lui donner un autre sujet que le verbe principal.', en: 'The gérondif: I sometimes give it a different subject from the main verb.' },
      ],
    },
    {
      ai: 'Quelle leçon le corrige ?',
      en: 'Which lesson fixes it?',
      user: 'La leçon 4 du B2, sur les si mixtes.',
      userEn: 'Lesson 4 in B2, on mixed si clauses. (The lesson, by its place on the trail.)',
      alts: [
        { fr: 'Je reprendrai la leçon 4 du B2.', en: 'I will go back over lesson 4 in B2.' },
        { fr: 'La leçon 4 du B2, puis la leçon 3 pour l’irréel du passé.', en: 'Lesson 4 in B2, then lesson 3 for the past unreal.' },
      ],
    },
    {
      ai: 'Donne-moi une phrase juste qui emploie cette structure.',
      en: 'Give me a correct sentence that uses this structure.',
      user: 'Si j’avais pris ce train, je serais à Lyon en ce moment.',
      userEn: 'If I had taken that train, I would be in Lyon right now. (A correct example sentence.)',
      alts: [
        { fr: 'Si j’avais dormi cette nuit, je serais moins fatigué.', en: 'If I had slept last night, I would be less tired.' },
        { fr: 'Si nous avions gardé les rails, nous aurions un tramway aujourd’hui.', en: 'If we had kept the rails, we would have a tram today.' },
      ],
    },
    {
      ai: 'Et une structure que tu peux laisser de côté ?',
      en: 'And a structure you can leave aside?',
      user: 'Le subjonctif imparfait : je dois le reconnaître, pas le produire.',
      userEn: 'The imperfect subjunctive: I must recognise it, not produce it. (The recognition pile.)',
      alts: [
        { fr: 'Le passé antérieur : à reconnaître dans les romans.', en: 'The passé antérieur: to recognise in novels.' },
        { fr: 'Ne… point : je le comprends, mais je dis ne… pas.', en: 'Ne… point: I understand it, but I say ne… pas.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pointFaible', 'precision'],
};

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('La version revue', 'Pourquoi la version revue est-elle meilleure ?',
    ['elle emploie plus de structures', 'elle dit la même chose avec exactitude'], 1,
    "Ce n'est pas la quantité : c'est l'exactitude du choix. EN: not quantity, but the exact choice."),
  ctl('L’implicite', 'La dernière phrase de la version revue...',
    ['laisse le lecteur conclure lui-même', 'cache la position de l’auteur'], 0,
    "La position est nette ; c'est la conclusion qui reste au lecteur. EN: the position is clear; the reader draws the conclusion."),
  ctl('Le registre', 'Dans un essai, « je pense que » est...',
    ['à remplacer par une position qui se lit dans le texte', 'la seule façon de donner son avis'], 0,
    "La thèse se lit dans les phrases elles-mêmes. EN: the thesis lives in the sentences themselves."),
], ['registre', 'implicite']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Le registre de l’écrit',
    opener: {
      line: "Un paragraphe d'essai, avant et après relecture : ici tu vérifies que ton écrit dit exactement ce que tu penses. EN: An essay paragraph, before and after revision: here you check your writing says exactly what you think.",
      imageRef: 'lessons/bilan-grammatical-c1/act11.jpg',
    },
    sections: [],
    milestone: "Tu reconnais ce qui fait un écrit de niveau C1 : un fil, des affirmations dosées, une position nette, et ce que le texte laisse conclure. EN: You know what makes C1 writing: a thread, sized claims, a clear position and what the text lets the reader conclude.",
    estScreens: 27, restPoints: ['a11-questions'],
  },
  sections: [A11_LECTURE, A11_QUESTIONS, A11_DIAG, A11_ERREURS, A11_BILAN, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12: TON PLAN DE TRAVAIL
 *
 *  The production act: Lina's plan (the model), six steps, where the plan
 *  serves, a one-minute oral rehearsal, the TASK, then the closing
 *  sections in playbook order.
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le plan de Lina',
  frSub: 'Le modèle de ta mission',
  text: PLAN_TEXT,
  glossary: [
    { word: 'maîtrise', en: 'have mastered', note: 'Maîtriser : savoir faire sans erreur, avec aisance.' },
    { word: 'propositions', en: 'clauses', note: 'Une proposition : un groupe de mots autour d’un verbe conjugué.' },
    { word: 'discret', en: 'subtle', note: 'Qui se remarque peu : une erreur discrète passe souvent inaperçue.' },
  ],
  questions: [
    { q: 'Global : comment le plan de Lina est-il organisé ?', a: 'Trois points forts, puis trois points faibles avec, pour chacun, l’erreur, la leçon et un exemple, puis un objectif daté.' },
    { q: 'Détail : quelle erreur Lina fait-elle avec les si mixtes ?', a: 'Elle met la conséquence au passé (« j’aurais habité ») alors qu’elle porte sur le présent (« j’habiterais »).' },
    { q: 'Inférence : pourquoi Lina range-t-elle le passé simple parmi ses points forts, alors qu’elle ne l’écrit pas ?', a: 'Parce qu’au C1, il suffit de le reconnaître : savoir le lire est déjà la compétence attendue.' },
    { q: 'Position : « Je saurai alors si ces points faibles en sont encore » : quelle attitude cette phrase montre-t-elle ?', a: 'Une attitude lucide et active : le plan se vérifie ; il ne se contente pas d’une liste.' },
    { q: 'Bilan : qu’est-ce qui rend ce plan précis ?', a: 'Chaque point faible est nommé, illustré par l’erreur réelle, relié à une leçon par sa place sur le parcours et suivi d’une phrase juste.' },
  ],
  audio: REC('rec-c1-01-plan'),
  say: REFRAME,
  terms: ['pointFaible', 'precision'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  sheetId: 'sheet-registre',
  title: 'Six étapes pour ton plan',
  steps: [
    '1. Relis tes « Pour ton bilan » des actes 2 à 11 : qu’as-tu rangé dans la pile des points faibles ? EN: reread your three piles.',
    '2. Choisis trois points forts précis : une structure, pas un domaine vague. EN: three precise strengths.',
    '3. Choisis trois points faibles parmi les structures à produire, et nomme l’erreur que tu fais vraiment. EN: three weak structures, with the real error.',
    '4. Pour chacun, cite la leçon qui le corrige par sa place sur le parcours, comme « la leçon 4 du B2 ». EN: name the lesson by its trail position.',
    '5. Écris une phrase juste pour chaque point faible, puis fixe un objectif daté et vérifiable. EN: one correct example each, then a dated goal.',
    '6. Relis : aucune leçon inventée, aucune phrase d’exemple fautive, entre 250 et 400 mots. EN: reread and count.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pointFaible', 'precision'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  title: 'Où ce plan te servira',
  cases: [
    { situation: 'Avant une épreuve écrite de niveau C1', fr: fr(E(1099)), en: en(E(1099)) },
    { situation: 'Avec un tuteur ou une tutrice', fr: fr(E(1096)), en: en(E(1096)) },
    { situation: 'Dans ton travail personnel, chaque semaine', fr: fr(E(1098)), en: en(E(1098)) },
    { situation: 'Pour mesurer tes progrès dans un mois', fr: fr(E(1097)), en: en(E(1097)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pointFaible'],
};

/** Say the plan out loud before writing it. ’ only, no corpus row. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'À l’oral, avant d’écrire',
  setting: 'Hélène te demande de présenter ton plan en une minute, avant de le rédiger. Réponds comme tu écriras : précis et nuancé.',
  turns: [
    {
      ai: 'Comment vas-tu commencer ton plan ?',
      en: 'How will you begin your plan?',
      user: 'Par mes points forts, en nommant chaque structure exactement.',
      userEn: 'With my strengths, naming each structure exactly. (A precise opening.)',
      alts: [
        { fr: 'Par ce que je maîtrise déjà, structure par structure.', en: 'With what I have already mastered, structure by structure.' },
        { fr: 'Par trois structures que je produis sans hésiter.', en: 'With three structures I produce without hesitating.' },
      ],
    },
    {
      ai: 'Nommer un point faible ne suffit pas. Que faut-il encore ?',
      en: 'Naming a weak spot is not enough. What else is needed?',
      user: 'L’erreur que je fais vraiment, la leçon qui la corrige et une phrase juste.',
      userEn: 'The error I really make, the lesson that fixes it and a correct sentence. (The three parts of a weak spot.)',
      alts: [
        { fr: 'Un exemple de mon erreur, puis la leçon et la bonne phrase.', en: 'An example of my error, then the lesson and the right sentence.' },
        { fr: 'La leçon, par sa place sur le parcours, et un exemple correct.', en: 'The lesson, by its trail position, and a correct example.' },
      ],
    },
    {
      ai: 'Et si tu hésites sur la leçon ?',
      en: 'And if you are unsure about the lesson?',
      user: 'Je la vérifie dans les fiches plutôt que d’en citer une au hasard.',
      userEn: 'I check it in the reference sheets rather than citing one at random. (Accuracy first.)',
      alts: [
        { fr: 'Je relis la carte du bilan avant de l’écrire.', en: 'I reread the audit map before writing it.' },
        { fr: 'Je ne cite que les leçons que je retrouve dans mes notes.', en: 'I only cite lessons I can find in my notes.' },
      ],
    },
    {
      ai: 'Quel objectif te fixes-tu ?',
      en: 'What goal do you set yourself?',
      user: 'D’ici la fin du mois, j’aurai repris ces trois leçons et réécrit un de mes anciens textes.',
      userEn: 'By the end of the month, I will have gone back over these three lessons and rewritten one of my old texts. (A dated goal, in the futur antérieur.)',
      alts: [
        { fr: 'Dans trois semaines, j’aurai refait les exercices de ces leçons.', en: 'In three weeks I will have redone the exercises of these lessons.' },
        { fr: 'Avant l’examen, j’aurai corrigé mes trois points faibles dans deux textes.', en: 'Before the exam I will have fixed my three weak spots in two texts.' },
      ],
    },
    {
      ai: 'En une phrase, qu’est-ce que le C1 change pour toi ?',
      en: 'In one sentence, what does C1 change for you?',
      user: 'Je ne cherche plus seulement à être compris : je cherche à être exact.',
      userEn: 'I am no longer just trying to be understood: I am trying to be exact. (The reframe, in your own words.)',
      alts: [
        { fr: 'Je choisis désormais la structure qui dit exactement ce que je veux.', en: 'I now choose the structure that says exactly what I mean.' },
        { fr: 'La grammaire me sert à dire juste, pas seulement à me faire comprendre.', en: 'Grammar helps me say things exactly, not just make myself understood.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['precision', 'pointFaible'],
};

/** THE GRADED TASK. Announced in act 1; every « Pour ton bilan » fed it. */
const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Ton plan de travail',
  frSub: 'Mission écrite, niveau C1',
  brief: "Tu as fait le point sur ta grammaire, famille par famille. Écris maintenant ton plan de travail pour les semaines qui viennent, comme Lina l'a fait : il doit pouvoir guider ton travail, et une tutrice doit pouvoir le vérifier.",
  briefEn: 'You have taken stock of your grammar, family by family. Now write your learning plan for the coming weeks, as Lina did: it must be able to guide your work, and a tutor must be able to check it.',
  produce: "Écris un plan de 250 à 400 mots : trois points forts précis ; trois points faibles choisis parmi les structures à produire, chacun avec l'erreur que tu fais, la leçon du B1 ou du B2 qui la corrige (par sa place sur le parcours) et une phrase d'exemple correcte ; puis un objectif daté.",
  responseSpec: { kind: 'text', minWords: 250, maxWords: 440 },
  rubric: {
    criteria: [
      {
        key: 'diagnostic',
        label: 'Un diagnostic exact',
        maxPoints: 4,
        descriptors: [
          "4 : Chaque structure nommée correspond à l'erreur décrite, et chaque leçon citée est bien celle qui la traite. Tes points faibles sont des structures à produire ; les formes des livres restent à reconnaître.",
          '3 : Le diagnostic est juste, sauf une leçon approximative ou une erreur décrite un peu vaguement.',
          '2 : Plusieurs leçons ne correspondent pas à la structure, ou une forme des livres est présentée comme un point faible à produire.',
          '1 : Les points faibles ne correspondent à aucune structure précise, ou les leçons sont inventées.',
        ],
      },
      {
        key: 'exemples',
        label: 'Des exemples justes',
        maxPoints: 3,
        descriptors: [
          '3 : Chaque point faible a sa phrase d’exemple, correcte, qui emploie vraiment la structure.',
          '2 : Un exemple manque, ou une phrase d’exemple contient une erreur.',
          '1 : Les exemples manquent, ou ils reproduisent l’erreur qu’ils devaient corriger.',
        ],
      },
      {
        key: 'precision',
        label: 'La précision du plan',
        maxPoints: 3,
        descriptors: [
          '3 : Trois points forts et trois points faibles nommés exactement, l’erreur réelle citée, un objectif daté et vérifiable. Entre 250 et 400 mots.',
          '2 : Le plan est complet, mais un point reste vague (« les temps », « le subjonctif »), ou l’objectif n’a pas d’échéance.',
          '1 : Des généralités (« j’ai des problèmes de grammaire »), ou il manque une partie entière du plan.',
        ],
      },
      {
        key: 'langue',
        label: 'Une langue de niveau C1',
        maxPoints: 2,
        descriptors: [
          '2 : Le plan lui-même est correct, dans un registre soutenu mais clair, et emploie juste les structures que tu dis maîtriser.',
          '1 : Des erreurs dans le plan, surtout sur les structures présentées comme des points forts, ou des mots de conversation.',
        ],
      },
    ],
  },
  scaffold: [
    'Mes points forts.',
    'Je maîtrise',
    'Mon premier point faible concerne',
    'Quand j’écris vite,',
    'Je reprendrai donc la leçon',
    'et je retiendrai :',
    'Ce que je laisse de côté.',
    'D’ici la fin du mois, j’aurai',
  ],
  modelAnswer: "Mes points forts. Je maîtrise la concession et la restriction : bien que, quand bien même et ne… que me viennent naturellement, à l'écrit comme à l'oral. Je rattache correctement le gérondif au sujet du verbe principal, et je distingue l'adjectif verbal du participe présent, orthographe comprise. Enfin, je passe sans difficulté d'un récit oral à un compte rendu impersonnel : il a été décidé que, il reste à, il convient de.\n\nMes points faibles. Le premier concerne le futur antérieur. Quand j'écris vite, je calque l'anglais et j'écris « quand j'ai fini, je t'appellerai ». Je reprendrai donc la leçon 7 du B2, et je retiendrai : « Quand j'aurai fini le rapport, je te l'enverrai. »\n\nLe deuxième touche au subjonctif après un superlatif. J'écris encore « c'est le meilleur film que j'ai vu », sans voir que le superlatif ne pose pas un fait. La leçon 6 du B2 m'aidera à l'entendre : « C'est la décision la plus lourde que le conseil ait prise depuis l'ouverture. »\n\nLe troisième est plus discret : de sorte que. Je l'emploie toujours avec le subjonctif, même quand il exprime un résultat déjà obtenu. Je retravaillerai la leçon 15 du B2, avec cette paire : « La route était fermée, de sorte que nous avons pris le train » ; « La règle sera adaptée de sorte que chaque quartier puisse choisir. »\n\nCe que je laisse de côté. Le passé simple, le passé antérieur et le subjonctif imparfait restent dans ma pile à reconnaître : je les lis sans peine, et je n'ai pas à les écrire.\n\nMon objectif. D'ici le 31 octobre, j'aurai repris ces trois leçons, refait leurs exercices et réécrit deux de mes anciens rapports en corrigeant ces trois points. Je demanderai ensuite à ma tutrice de vérifier si ces erreurs ont disparu.",
  modelAnswerEn: "My strengths. I have mastered concession and restriction: bien que, quand bien même and ne… que come naturally to me, in writing and in speech. I attach the gérondif correctly to the subject of the main verb, and I tell the verbal adjective from the present participle, spelling included. Finally, I move easily from a spoken account to impersonal minutes: il a été décidé que, il reste à, il convient de. My weak spots. The first concerns the futur antérieur. When I write fast, I copy English and write « quand j'ai fini, je t'appellerai ». So I will go back over lesson 7 in B2, and I will remember: « Quand j'aurai fini le rapport, je te l'enverrai. » The second concerns the subjunctive after a superlative. I still write « c'est le meilleur film que j'ai vu », without seeing that a superlative does not state a fact. Lesson 6 in B2 will help me hear it: « C'est la décision la plus lourde que le conseil ait prise depuis l'ouverture. » The third is subtler: de sorte que. I always use it with the subjunctive, even when it expresses a result already achieved. I will work on lesson 15 in B2 again, with this pair: « La route était fermée, de sorte que nous avons pris le train »; « La règle sera adaptée de sorte que chaque quartier puisse choisir. » What I leave aside. The passé simple, the passé antérieur and the imperfect subjunctive stay in my recognition pile: I read them easily, and I do not have to write them. My goal. By 31 October, I will have gone back over these three lessons, redone their exercises and rewritten two of my old reports correcting these three points. I will then ask my tutor to check whether these errors have gone.",
  watchFor: [
    { pattern: 'A weak spot named only as a domain (les temps, la grammaire, le subjonctif) with no structure and no error.', criterion: 'precision', feedback: "Nomme la structure exacte et l'erreur que tu fais : « quand j'ai fini » au lieu de « quand j'aurai fini ».", ref: 'a12-plan' },
    { pattern: 'A lesson cited by raw id, or a lesson that does not own the structure (e.g. lesson 3 in B2 for the subjunctive).', criterion: 'diagnostic', feedback: 'Vérifie la leçon dans la carte du bilan et cite-la par sa place : « la leçon 6 du B2 ».', ref: 'a12-cheat' },
    { pattern: 'A recognition-only structure (passé simple, subjonctif imparfait, passé antérieur, ne… point, quelque… que, nonobstant) listed as a weak spot to produce.', criterion: 'diagnostic', feedback: "Ces formes sont à reconnaître : tu n'as pas à les produire. Choisis tes points faibles parmi les structures à produire.", ref: 'a5-formes' },
    { pattern: 'An example sentence that itself contains the error it is meant to fix.', criterion: 'exemples', feedback: "Ta phrase d'exemple doit être juste : relis-la avec la règle de la leçon que tu cites.", ref: 'a12-plan' },
    { pattern: 'Fewer than three strengths or three weak spots, or a weak spot with no example sentence.', criterion: 'precision', feedback: 'Trois points forts, trois points faibles, et une phrase d’exemple pour chaque point faible.', ref: 'a12-lecture' },
    { pattern: 'Vague strengths (je parle bien, je connais les temps).', criterion: 'precision', feedback: 'Un point fort se nomme aussi : quelle structure produis-tu sans hésiter ?', ref: 'a12-scenario' },
    { pattern: 'No dated, checkable objective.', criterion: 'precision', feedback: "Fixe une échéance et une action qu'on peut vérifier : « d'ici le…, j'aurai… ».", ref: 'a12-plan' },
    { pattern: 'Grammar errors in the plan itself, above all in the structures it claims to master.', criterion: 'langue', feedback: 'Ton plan doit employer juste les structures que tu présentes comme des points forts.', ref: 'a11-erreurs' },
    { pattern: 'Conversational register (j’ai des soucis avec, bref, c’est galère) in the plan.', criterion: 'langue', feedback: 'Un plan se rédige dans un registre soutenu mais clair : « mon premier point faible concerne… ».', ref: 'a11-questions' },
    { pattern: 'An absolute claim about oneself (je ne fais jamais d’erreur, je maîtrise tout le subjonctif).', criterion: 'precision', feedback: 'Dose ton diagnostic : « je choisis presque toujours le bon mode après les verbes d’opinion ».', ref: 'a11-diag' },
    { pattern: 'A C1 lesson, or a lesson that does not exist, cited as the fix.', criterion: 'diagnostic', feedback: 'Cite les leçons du B1 ou du B2 qui existent déjà ; les leçons du C1 viendront ensuite.', ref: 'a1-recap' },
  ],
  graderNotes: [
    'Count the words of the plan body only; headings such as « Mes points forts » count, a title does not. 250 to 400 with 10% tolerance (225 to 440) before criterion « precision » loses a point. responseSpec allows 440.',
    "The grader cannot know the learner's real weak spots. Grade the ACCURACY of the diagnosis (the structure named matches the error described, the lesson cited owns it, the example is correct) and its PRECISION, never which structures were chosen.",
    "Lesson map for checking citations, by trail position. B2: 1 plus-que-parfait; 2 conditionnel passé; 3 si + plus-que-parfait; 4 si mixtes; 5 subjonctif passé; 6 subjonctif ou indicatif; 7 futur antérieur; 8 passé simple (recognition); 9 subjonctif littéraire (recognition); 10 nominalisation; 11 pronoms d'insistance; 12 gérondif; 13 participe présent et adjectif verbal; 14 constructions infinitives; 15 cause et conséquence; 16 concession; 17 but; 18 rapports de temps; 19 restriction; 20 tournures impersonnelles; 21 négations combinées; 22 style académique; 23 argumentation. B1: 4 depuis + imparfait; 10 si + imparfait; 20 négation avancée (ne… guère); 30 coordination (or); 31 subordination (après que, grâce à / à cause de); 34 médias (conditionnel de l'information).",
    'Accept a neighbouring lesson when it also covers the structure: 14 or 18 for après + infinitif passé; 6 or 16 for quoique and bien que; 2 or 3 for the past conditional; 22 or 23 for register and thesis.',
    'Quoted wrong forms are expected (the learner quotes the error they make): never mark a wrong form inside quotation marks as an error under « langue ».',
    'A recognition-only structure listed as a weak spot costs under « diagnostic », unless the learner says the weak spot is in READING it (a reading weak spot is legitimate).',
    'Accept « malgré que » only when quoted as an error; in the learner’s own prose it costs under « langue ». Accept the present subjunctive in a past context (bien qu’il soit tard) as modern usage.',
    'A lesson cited by its exact title instead of its position is accurate; prefer positions in feedback.',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite lessons by trail position, never by id, and never cite a C1 lesson.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pointFaible', 'precision'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Dis tes phrases à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['precision', 'nuance'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-bilan',
  title: 'Tout le bilan sur un écran',
  rows: [
    { k: 'les trois piles', v: 'produire, reconnaître, point faible', say: fr(E(1009)),
      detail: { title: 'Les trois piles', body: "À produire : tu l'écris et tu la dis. À reconnaître : tu la lis. Point faible : tu la connais et tu la rates encore. EN: the three piles.", say: fr(E(1011)) } },
    { k: 'le temps', v: 'plus-que-parfait, futur antérieur, si', say: fr(E(1015)),
      detail: { title: 'Le temps', body: "Les leçons 1 à 4, 7 et 18 du B2 : chaque verbe sur la bonne horloge. EN: each verb on the right clock.", say: fr(E(1024)) } },
    { k: 'les modes', v: 'affirmer, ou regarder', say: fr(E(1033)),
      detail: { title: 'Les modes', body: "Les leçons 5 et 6 du B2 : l'indicatif affirme, le subjonctif regarde. EN: the indicative asserts, the subjunctive looks.", say: fr(E(1035)) } },
    { k: 'les livres', v: 'à reconnaître', say: fr('fr.b2.litterature.1009'),
      detail: { title: 'La langue des livres', body: "Les leçons 8 et 9 du B2 : passé simple, passé antérieur, subjonctif imparfait, ne… point. EN: read them, do not write them.", say: fr(E(1043)) } },
    { k: 'condenser, relier', v: 'nom, infinitif, gérondif ; cause, but, concession', say: fr(E(1046)),
      detail: { title: 'Condenser et relier', body: "Les leçons 10, 12 à 17, 19 et 21 du B2 : le bon sujet, et le mot qui dit la relation. EN: the right subject, the right link.", say: fr(E(1064)) } },
    { k: 'le registre', v: 'mettre en avant, effacer, nuancer', say: fr(E(1083)),
      detail: { title: 'Le registre', body: "Les leçons 11, 20, 22 et 23 du B2 : la voix qui convient au lecteur. EN: the voice that suits the reader.", say: fr(E(1091)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['produire', 'reconnaitre', 'pointFaible'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu as fait le point sur toute la grammaire du B2, famille par famille, et tu sais ranger chaque structure : à produire, à reconnaître, ou point faible. Tu sais aussi ce que le C1 attend : non pas plus de règles, mais la structure exacte, la nuance juste, et ce qu'une phrase laisse conclure. Le piège qui reste est double : vouloir tout produire, jusqu'aux formes des livres, et laisser filer une règle connue quand tu écris vite. Garde ton plan sous les yeux, et relis chaque texte avec une seule question : ai-je dit exactement ce que je voulais dire ? EN: Keep your plan in sight and reread every text asking: did I say exactly what I meant?",
  stats: [
    { k: 'Les familles', v: 'quatre, en dix actes' },
    { k: 'Les piles', v: 'produire, reconnaître, point faible' },
    { k: 'Les leçons citées', v: 'vingt-trois du B2, six du B1' },
    { k: 'Ta mission', v: 'un plan de 250 à 400 mots' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act. `fold()` strips accents,
 *  commas, apostrophes, hyphens and spaces, so every typeIn and errorSpot
 *  turns on WORDS or LETTERS (aurai / ai, venant / venants, fatigant /
 *  fatiguant), never on an accent. Every why routes to its lesson. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas dans cette phrase. Écris la phrase correcte. EN: One form is wrong in this sentence; write it correctly.', prompt, answer, accept: [answer, ...more], why, ref });
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
      id: 'r1-piles', label: 'Le C1 et les trois piles', targets: ['c1-sans-tri'],
      questions: [
        mc('Selon la fiche d’Hélène, que manque-t-il le plus souvent à un apprenant qui arrive au C1 ?', ['la sûreté : une règle connue cède quand il écrit vite', 'des règles nouvelles', 'du vocabulaire'], 0, "Il a presque toute la grammaire ; c'est la sûreté qui manque. EN: sureness, not rules.", 'a1-lecture'),
        mc('Au C1, le passé antérieur est...', ['à reconnaître', 'à produire'], 0, `Il vit dans les livres : ${R(B2.passeSimple)}. EN: recognition only.`, 'a1-piles'),
        mc('Au C1, le subjonctif passé est...', ['à produire', 'à reconnaître'], 0, `Il est au cœur du B2 : ${R(B2.subjPasse)}. EN: to produce.`, 'a1-piles'),
        lC('Écoute. Pourquoi cette phrase est-elle la bonne pour ta directrice ?', fr(E(1001)), ['Elle nomme la cause sans accuser personne.', 'Elle emploie un temps rare.'], 0, "Faute d'avoir reçu : la cause, sans coupable. EN: the cause, no culprit.", 'a1-scene'),
        tI('Complète la définition.', '« Un point ..., c’est une règle que tu connais mais que tu rates encore quand tu écris vite. »', 'faible', "Le point faible : une règle connue qui cède. EN: a weak spot.", 'a1-piles', ['point faible']),
        tI('Écris le verbe de la pile.', 'Une structure que tu comprends en lisant, sans devoir l’écrire, est à ...', 'reconnaître', "À reconnaître. EN: to recognise.", 'a1-piles', ['à reconnaître']),
        tI('Complète la phrase d’Hélène.', '« Le C1 te demande autre chose : la précision, la nuance et l’... »', 'implicite', "La précision, la nuance, l'implicite. EN: what is left unsaid.", 'a1-scene', ['l’implicite', "l'implicite"]),
        eS('Si la commission aurait disposé de ces chiffres, elle n’aurait sans doute pas tranché ainsi.', 'Si la commission avait disposé de ces chiffres, elle n’aurait sans doute pas tranché ainsi.', `Jamais de conditionnel après si : ${R(B2.siIrreel)}. EN: no conditional after si.`, 'a1-usages', [fr(E(1013))]),
      ],
    },
    {
      id: 'r2-temps', label: 'Situer dans le temps', targets: ['horloge-plate'],
      questions: [
        mc('Complète : « Lorsque la commission s’est réunie, le rapport ... déjà circulé. »', ['avait', 'a', 'aura'], 0, `Déjà fait au moment du récit : ${R(B2.pqp)}. EN: the pluperfect.`, 'a2-diag'),
        mc('« Elle n’est pas venue ; elle aura oublié la date. » Ce futur antérieur dit...', ['une supposition sur le passé', 'un fait futur', 'un ordre poli'], 0, `Le futur antérieur de probabilité : ${R(B2.futAnt)}. EN: a guess about the past.`, 'a2-horloges'),
        mc('« Nous y habitions depuis vingt-deux ans » : pourquoi l’imparfait ?', ['la durée était encore en cours au moment du récit', 'l’action était terminée', 'c’est une habitude répétée'], 0, `Depuis et l'imparfait : ${R(B1.depuis)}. EN: an ongoing duration.`, 'a2-horloges'),
        lC('Écoute. Quel fait est le plus ancien ?', fr(E(1021)), ['la toiture refaite', 'l’accord des banques'], 0, "Avait refait : le plus-que-parfait recule avant le reste. EN: the pluperfect steps back.", 'a2-lecture'),
        tI('Mets le verbe au bon temps et écris la phrase.', '« Quand j’(finir) le rapport, je te l’enverrai. »', 'Quand j’aurai fini le rapport, je te l’enverrai.', `Fini avant l'envoi : le futur antérieur, ${R(B2.futAnt)}. EN: the futur antérieur.`, 'a2-erreurs', ["Quand j'aurai fini le rapport, je te l'enverrai.", 'aurai fini']),
        tI('Mets le verbe au bon temps et écris la phrase.', '« Elle m’a dit qu’elle (lire) déjà le dossier. »', 'Elle m’a dit qu’elle avait déjà lu le dossier.', `Le discours rapporté recule d'un cran : ${R(B2.pqp)}. EN: reported speech shifts back.`, 'a2-erreurs', ["Elle m'a dit qu'elle avait déjà lu le dossier.", 'avait déjà lu', 'avait lu']),
        tI('Écris le mot qui manque.', '« Je travaillais là ... dix ans quand l’usine a fermé. »', 'depuis', `Une durée en cours : depuis, ${R(B1.depuis)}. EN: depuis.`, 'a2-erreurs'),
        eS('Après avoir arrivé, elle a appelé sa mère.', 'Après être arrivée, elle a appelé sa mère.', `L'infinitif passé garde l'auxiliaire être : ${R(B2.infinitif)}. EN: the past infinitive keeps être.`, 'a2-erreurs', ['Après être arrivé, elle a appelé sa mère.']),
      ],
    },
    {
      id: 'r3-hypothese', label: 'L’hypothèse', targets: ['si-conditionnel'],
      questions: [
        mc('Complète : « Si j’... su, je serais venu plus tôt. »', ['avais', 'aurais', 'ai'], 0, `Si + plus-que-parfait : ${R(B2.siIrreel)}. EN: si + pluperfect.`, 'a3-piege'),
        mc('Complète : « Si j’avais accepté ce poste, j’... à Genève aujourd’hui. »', ['habiterais', 'aurais habité', 'habitais'], 0, `Aujourd'hui : la conséquence est présente, ${R(B2.siMixtes)}. EN: a present result.`, 'a3-piege'),
        mc('« Le chiffre aurait été revu à la hausse » : le journaliste...', ['rapporte une information sans la garantir', 'exprime un regret', 'annonce un fait futur'], 0, `Le conditionnel de l'information : ${R(B1.medias)}. EN: reported, not guaranteed.`, 'a3-exemples'),
        lC('Écoute. Que fait cette phrase ?', fr(E(1025)), ['elle formule un reproche', 'elle rapporte une rumeur'], 0, `Auraient dû : le reproche au passé, ${R(B2.condPasse)}. EN: a reproach.`, 'a3-diag'),
        tI('Corrige le verbe après si et écris la phrase.', '« Si tu viendrais demain, on pourrait en parler. »', 'Si tu venais demain, on pourrait en parler.', `Si + imparfait : ${R(B1.si)}. EN: si + imparfait.`, 'a3-piege', ['venais']),
        tI('Exprime le reproche au passé et écris la phrase.', '« Ils (devoir) répondre à la lettre des commerçants. »', 'Ils auraient dû répondre à la lettre des commerçants.', `Le reproche passé : auraient dû, ${R(B2.condPasse)}. EN: should have.`, 'a3-piege', ['auraient dû']),
        tI('Écris le verbe qui manque.', '« Même si le tramway n’... pas tout sauvé, il aurait freiné l’exode. »', 'avait', `Même si suit la règle de si : ${R(B2.siIrreel)}. EN: même si follows si.`, 'a3-piege'),
        eS('Si nous aurions gardé les rails, nous aurions aujourd’hui un réseau envié.', 'Si nous avions gardé les rails, nous aurions aujourd’hui un réseau envié.', `Jamais de conditionnel après si : ${R(B2.siMixtes)}. EN: no conditional after si.`, 'a3-diag', [fr(E(1030))]),
      ],
    },
    {
      id: 'r4-modes', label: 'Le choix du mode', targets: ['mode-automatique'],
      questions: [
        mc('Complète : « J’espère que tu ... ce soir. »', ['viendras', 'viennes'], 0, `Espérer affirme une attente : ${R(B2.subjInd)}. EN: espérer takes the indicative.`, 'a4-erreurs'),
        mc('Complète : « Il est probable que le budget ... serré. »', ['sera', 'soit'], 0, `Probable penche vers le vrai : ${R(B2.subjInd)}. EN: probable takes the indicative.`, 'a4-questions'),
        mc('Complète : « C’est la décision la plus lourde que le conseil ... prise. »', ['ait', 'a', 'aurait'], 0, `Après un superlatif, le subjonctif : ${R(B2.subjInd)}. EN: subjunctive after a superlative.`, 'a4-diag'),
        lC('Écoute. Pourquoi l’indicatif après « après que » ?', fr(E(1038)), ['l’action est accomplie : la norme écrite garde l’indicatif', 'c’est une faute de registre', 'après que prend toujours le conditionnel'], 0, `La norme écrite garde l'indicatif : ${R(B1.subord)}. EN: the written norm keeps the indicative.`, 'a4-questions'),
        tI('Mets le verbe au bon mode et écris la phrase.', '« Je ne pense pas qu’il (avoir) raison. »', 'Je ne pense pas qu’il ait raison.', `La négation fait passer au doute : ${R(B2.subjInd)}. EN: a negated opinion verb takes the subjunctive.`, 'a4-erreurs', ["Je ne pense pas qu'il ait raison.", 'ait']),
        tI('Mets au subjonctif passé et écris la phrase.', '« Nous regrettons que cette décision (être prise) sans consultation. »', fr(E(1033)), `Un regret sur un fait accompli : ${R(B2.subjPasse)}. EN: the subjonctif passé.`, 'a4-diag', ['ait été prise']),
        tI('Écris le verbe pouvoir à la bonne forme.', '« Nous cherchons une formule qui ... préserver l’accueil du dimanche. »', 'puisse', `Une chose cherchée, pas encore trouvée : ${R(B2.subjInd)}. EN: the subjunctive.`, 'a4-diag'),
        eS("Bien qu'il a plu toute la journée, le festival a attiré dix mille personnes.", fr('fr.b2.emotions.1350'), `Bien que prend toujours le subjonctif : ${R(B2.concession)}. EN: bien que takes the subjunctive.`, 'a4-erreurs', ['Bien qu’il ait plu toute la journée, le festival a attiré dix mille personnes.']),
      ],
    },
    {
      id: 'r5-livres', label: 'La langue des livres', targets: ['forme-des-livres'],
      questions: [
        mc('« Le notaire arriva un peu avant minuit. » Ce verbe est au...', ['passé simple', 'imparfait', 'subjonctif imparfait'], 0, `Arriva : le passé simple, ${R(B2.passeSimple)}. EN: the passé simple.`, 'a5-formes'),
        mc('« Il eût fallu partir plus tôt » veut dire...', ['il aurait fallu partir plus tôt', 'il a fallu partir plus tôt'], 0, `Eût fallu veut dire aurait fallu : ${R(B2.subjLitt)}. EN: a literary past conditional.`, 'a5-diag'),
        mc('Au C1, le subjonctif imparfait est...', ['à reconnaître', 'à produire dans un courriel', 'à éviter, même en lecture'], 0, `Tu le lis, tu dis la forme d'aujourd'hui : ${R(B2.subjLitt)}. EN: recognition only.`, 'a5-piege'),
        lC('Écoute. Comment le dis-tu aujourd’hui ?', fr('fr.b2.litterature.1126'), ['Quand il a fini, il s’est levé.', 'Quand il finissait, il se levait.'], 0, `Le passé antérieur et le passé simple deviennent le passé composé : ${R(B2.passeSimple)}. EN: both become the passé composé.`, 'a5-diag'),
        tI('Dis-le en français d’aujourd’hui.', '« Vous eussiez pu m’écrire. »', 'Vous auriez pu m’écrire.', `Eussiez pu veut dire auriez pu : ${R(B2.subjLitt)}. EN: auriez pu.`, 'a5-bilan', ["Vous auriez pu m'écrire.", 'auriez pu']),
        tI('Dis-le en français d’aujourd’hui.', '« Je ne veux point de ce contrat. »', fr(E(1044)), `Point est littéraire : ${R(B2.negation)}. EN: ne… pas.`, 'a5-piege', ['pas']),
        tI('Dis-le en français d’aujourd’hui.', '« Il fallait que je le susse avant la réunion. »', fr(E(1040)), `Le subjonctif présent suffit : ${R(B2.subjLitt)}. EN: que je le sache.`, 'a5-piege', ['sache']),
        eS('Hier, nous allâmes au cinéma avec les enfants.', fr(E(1041)), `À l'oral et dans un courriel, le passé composé : ${R(B2.passeSimple)}. EN: the passé composé.`, 'a5-piege'),
      ],
    },
    {
      id: 'r6-condenser', label: 'Condenser', targets: ['condensation-ratee'],
      questions: [
        mc('Laquelle condense le mieux « les loyers ont beaucoup augmenté, et les étudiants s’inquiètent » ?', ['La forte hausse des loyers inquiète les étudiants.', 'La hausse de l’augmentation des loyers inquiète les étudiants.'], 0, `Un nom, un verbe : ${R(B2.nominal)}. EN: one noun, one verb.`, 'a6-diag'),
        mc('« La Ville a fait chiffrer ces mesures » : qui a fait le calcul ?', ['ses services techniques', 'la Ville elle-même', 'les usagers'], 0, `Faire + infinitif : quelqu'un d'autre agit, ${R(B2.infinitif)}. EN: someone else did it.`, 'a6-lecture'),
        mc('« Faute de pièces de rechange » veut dire...', ['parce qu’il manquait des pièces', 'malgré les pièces', 'grâce aux pièces'], 0, `Une cause par manque : ${R(B2.restriction)}. EN: for lack of.`, 'a6-diag'),
        lC('Écoute. Qui a connu un démarrage lent ?', fr(E(1050)), ['la fréquentation', 'la Ville'], 0, `L'infinitif prend le sujet du verbe principal : ${R(B2.infinitif)}. EN: the main subject.`, 'a6-diag'),
        tI('Un seul sujet : réécris avec un infinitif.', '« Je suis parti sans que je dise au revoir. »', 'Je suis parti sans dire au revoir.', `Un seul sujet, l'infinitif : ${R(B2.infinitif)}. EN: sans + infinitive.`, 'a6-erreurs', ['sans dire au revoir']),
        tI('Écris le verbe après faire.', '« La Ville a fait ... ces mesures. » (chiffrer)', 'chiffrer', `Après faire, toujours l'infinitif : ${R(B2.infinitif)}. EN: the infinitive after faire.`, 'a6-erreurs'),
        tI('Remplace la proposition par un nom.', '« Quand on a mis les stations en service, tout s’est bien passé. » → « La ... des stations s’est faite sans difficulté. »', 'mise en service', `Un nom pour une phrase : ${R(B2.nominal)}. EN: a noun for a clause.`, 'a6-exemples', ['La mise en service']),
        eS('Après avoir fini le rapport, le directeur l’a lu.', 'Après avoir fini le rapport, je l’ai envoyé au directeur.', `L'infinitif prend le sujet du verbe principal : ${R(B2.infinitif)}. EN: the infinitive takes the main subject.`, 'a6-erreurs', ["Après avoir fini le rapport, je l'ai envoyé au directeur.", 'Après que j’ai fini le rapport, le directeur l’a lu.', "Après que j'ai fini le rapport, le directeur l'a lu."]),
      ],
    },
    {
      id: 'r7-participes', label: 'Participes et gérondifs', targets: ['participe-mal-rattache'],
      questions: [
        mc('« En arrivant tôt, la file d’attente est courte. » Le problème ?', ['le gérondif n’a pas le même sujet que le verbe principal', 'il manque un article'], 0, `Le gérondif prend le sujet du verbe principal : ${R(B2.gerondif)}. EN: a dangling gérondif.`, 'a7-diag'),
        mc('Complète : « Les résultats sont ... »', ['convaincants', 'convainquants'], 0, `L'adjectif verbal : convaincant, ${R(B2.participe)}. EN: the verbal adjective.`, 'a7-diag'),
        mc('« Ayant travaillé trente ans dans un garage » dit une action...', ['finie avant l’autre', 'en cours', 'future'], 0, `Ayant + participe passé : ${R(B2.participe)}. EN: completed before.`, 'a7-questions'),
        lC('Écoute. Que marque « tout en » dans cette phrase ?', fr(E(1060)), ['une opposition', 'un but'], 0, `Ravie, et pourtant inquiète : ${R(B2.gerondif)}. EN: a contrast.`, 'a7-ecoute'),
        tI('Écris l’adjectif.', '« Un travail ... » (fatiguer)', 'fatigant', `L'adjectif verbal perd le u : ${R(B2.participe)}. EN: fatigant.`, 'a7-check'),
        tI('Corrige le gérondif et écris la phrase.', '« En arrivant tôt, la file d’attente est courte. »', 'En arrivant tôt, on évite la file d’attente.', `Donne au verbe principal le sujet du gérondif : ${R(B2.gerondif)}. EN: same subject.`, 'a7-diag', ["En arrivant tôt, on évite la file d'attente.", 'En arrivant tôt, on évite la file.', 'Quand on arrive tôt, la file d’attente est courte.', "Quand on arrive tôt, la file d'attente est courte."]),
        tI('Complète avec le gérondif.', '« On évite la file ... tôt. » (arriver)', 'en arrivant', `En + participe présent : ${R(B2.gerondif)}. EN: en arrivant.`, 'a7-diag'),
        eS('Les jeunes venants à l’atelier repartent avec un vélo.', 'Les jeunes venant à l’atelier repartent avec un vélo.', `Le participe présent est invariable : ${R(B2.participe)}. EN: the present participle does not agree.`, 'a7-questions', ["Les jeunes venant à l'atelier repartent avec un vélo."]),
      ],
    },
    {
      id: 'r8-liens', label: 'Cause, conséquence, but', targets: ['lien-mal-choisi'],
      questions: [
        mc('Complète : « La route était fermée, de sorte que nous ... le train. »', ['avons pris', 'ayons pris'], 0, `Un résultat obtenu : l'indicatif, ${R(B2.cause)}. EN: a result.`, 'a8-piege'),
        mc('Complète : « ... la pluie, le match a été annulé. »', ['À cause de', 'Grâce à'], 0, `Grâce à se dit d'une cause heureuse : ${R(B1.subord)}. EN: à cause de.`, 'a8-piege'),
        mc('« Or, d’après les chiffres… » : ce or introduit...', ['un fait qui va contre l’argument précédent', 'une conséquence', 'un exemple'], 0, `Or renverse : ${R(B1.or)}. EN: or turns things round.`, 'a8-diag'),
        lC('Écoute. Cette phrase exprime...', fr(E(1064)), ['un but', 'une cause'], 0, `Afin que + subjonctif : ${R(B2.but)}. EN: a purpose.`, 'a8-exemples'),
        tI('Écris le verbe pouvoir au bon mode.', '« La règle sera adaptée de sorte que chaque quartier ... choisir. »', 'puisse', `De sorte que + subjonctif : un but, ${R(B2.but)}. EN: a purpose.`, 'a8-diag'),
        tI('Un seul sujet : réécris avec un infinitif.', '« J’ai éteint la lumière pour que je dorme mieux. »', fr(E(1071)), `Un seul sujet, pour + infinitif : ${R(B2.but)}. EN: pour + infinitive.`, 'a8-piege', ['J’ai éteint la lumière pour mieux dormir.', 'J’ai éteint la lumière pour dormir mieux.', "J'ai éteint la lumière pour dormir mieux."]),
        tI('Complète avec l’inversion.', '« Le dossier était incomplet. Aussi ... renvoyé à son auteur. »', 'a-t-il été', `Aussi en tête appelle l'inversion : ${R(B2.cause)}. EN: aussi + inversion.`, 'a8-piege'),
        eS('Il a menti par peur qu’il déçoive ses parents.', fr('fr.b2.connecteurs-logiques.1864'), `Un seul sujet : par peur de + infinitif, ${R(B2.cause)}. EN: de + infinitive.`, 'a8-piege'),
      ],
    },
    {
      id: 'r9-concession', label: 'Concéder, restreindre, nier', targets: ['concession-bancale'],
      questions: [
        mc('Complète : « Quoique la salle ... pleine, on trouvera une place. »', ['soit', 'est'], 0, `Quoique prend le subjonctif : ${R(B2.concession)}. EN: quoique + subjunctive.`, 'a9-diag'),
        mc('Dans un essai, « malgré qu’il pleuve » est...', ['déconseillé : écris « bien qu’il pleuve »', 'la forme la plus soutenue'], 0, `L'Académie le déconseille : ${R(B2.concession)}. EN: advised against.`, 'a9-erreurs'),
        mc('« Quelque talent qu’aient les comédiens » est...', ['à reconnaître', 'à produire dans un courriel', 'une faute à corriger'], 0, `Une concession très littéraire : ${R(B2.concession)}. EN: recognition only.`, 'a9-formes'),
        lC('Écoute. Que dit cette phrase ?', fr(E(1078)), ['personne d’autre que la comédienne principale n’y parvient', 'la comédienne joue seule sur scène'], 0, `Seule : la restriction, ${R(B2.restriction)}. EN: only she.`, 'a9-formes'),
        tI('Corrige la négation et écris la phrase.', '« Je n’ai pas vu personne au guichet. »', 'Je n’ai vu personne au guichet.', `Personne prend la place de pas : ${R(B2.negation)}. EN: no pas with personne.`, 'a9-erreurs', ["Je n'ai vu personne au guichet."]),
        tI('Restreins avec ne… que.', '« Il travaille seulement le lundi. » → « Il ... le lundi. »', 'ne travaille que', `Ne… que : ${R(B2.restriction)}. EN: ne… que.`, 'a9-erreurs', ['Il ne travaille que le lundi.']),
        tI('Écris le verbe être au conditionnel.', '« Quand bien même on ... sensible à ce lyrisme, on regrettera la fin. »', 'serait', `Quand bien même + conditionnel : ${R(B2.concession)}. EN: the conditional.`, 'a9-formes'),
        eS('Bien que la mise en scène est précise, le spectacle ne décolle qu’au deuxième acte.', 'Bien que la mise en scène soit précise, le spectacle ne décolle qu’au deuxième acte.', `Bien que prend le subjonctif : ${R(B2.concession)}. EN: bien que + subjunctive.`, 'a9-diag', [fr(E(1074))]),
      ],
    },
    {
      id: 'r10-voix', label: 'Mettre en relief, effacer', targets: ['voix-mal-placee'],
      questions: [
        mc('Complète : « C’est moi qui ... proposé la sortie. »', ['ai', 'a'], 0, `Le verbe s'accorde avec moi : ${R(B2.tonique)}. EN: moi qui ai.`, 'a10-piege'),
        mc('Laquelle convient à un compte rendu ?', ['Il a été décidé de réduire le budget des sorties.', 'Ça a été décidé de réduire le budget des sorties.'], 0, `Le sujet impersonnel est il : ${R(B2.impersonnel)}. EN: impersonal il.`, 'a10-piege'),
        mc('Complète : « Il me semble que la ligne ... en avance. »', ['est', 'soit'], 0, `Il me semble que : l'indicatif, ${R(B2.impersonnel)}. EN: the indicative.`, 'a10-piege'),
        lC('Écoute. Qui est mis en relief ?', fr(E(1081)), ['la directrice', 'les parents'], 0, `C'est… qui : ${R(B2.tonique)}. EN: the head teacher.`, 'a10-diag'),
        tI('Écris le verbe payer au bon mode.', '« Il n’est pas exclu que la région ... une partie des frais. »', 'paie', `Une possibilité : le subjonctif, ${R(B2.impersonnel)}. EN: the subjunctive.`, 'a10-diag', ['paye']),
        tI('Remets la politesse en ordre et écris la phrase.', '« Moi et mon mari vous remercions de votre accueil. »', fr('fr.b2.pronoms-essentiels.1877'), `Moi en dernier : ${R(B2.tonique)}. EN: mon mari et moi.`, 'a10-piege'),
        tI('Efface l’acteur.', '« La directrice a décidé de réduire le budget des sorties. » → « Il ... de réduire le budget des sorties. »', 'a été décidé', `L'impersonnel efface l'acteur : ${R(B2.impersonnel)}. EN: il a été décidé.`, 'a10-exemples', [fr(E(1089))]),
        eS('Il a été décidé que la sortie soit annulée.', fr(E(1087)), `Une décision prise est un fait : ${R(B2.impersonnel)}. EN: the conditional, not the subjunctive.`, 'a10-piege'),
      ],
    },
    {
      id: 'r11-registre', label: 'Le registre de l’écrit', targets: ['registre-plat'],
      questions: [
        mc('Pourquoi la version revue du paragraphe est-elle meilleure ?', ['elle dit la même chose avec exactitude', 'elle emploie plus de structures'], 0, "L'exactitude, pas la quantité. EN: exactness, not quantity.", 'a11-lecture'),
        mc('« Encore qu’il soit moins net qu’on ne le dit » : ce ne est...', ['explétif', 'une négation', 'une faute de frappe'], 0, `Après un comparatif, un ne qui ne nie rien : ${R(B2.negation)}. EN: expletive.`, 'a11-diag'),
        mc('Dans un essai, laquelle convient ?', ['Certains y voient une menace ; cette crainte mérite d’être examinée.', 'Certains disent que c’est mauvais, mais ils ont tort.'], 0, `Répondre à l'objection : ${R(B2.argument)}. EN: answer the objection.`, 'a11-erreurs'),
        lC('Écoute. Que laisse entendre l’auteur ?', fr(E(1092)), ['que le télétravail à temps plein serait une erreur', 'que le télétravail est interdit'], 0, "L'implicite : le lecteur conclut. EN: the reader concludes.", 'a11-diag'),
        tI('Remplace la répétition par une reprise.', '« Le télétravail fait gagner du temps, et cet ... se double d’un bénéfice pour la planète. »', 'avantage', `Une reprise tient le fil : ${R(B2.academique)}. EN: a reprise.`, 'a11-erreurs'),
        tI('Écris la forme soutenue de pouvoir.', '« Le télétravail ne peut pas devenir la norme. » → « Le télétravail ne ... devenir la norme. »', 'saurait', `Ne saurait, au conditionnel : ${R(B2.negation)}. EN: ne saurait.`, 'a11-diag'),
        tI('Réécris sans les mots de conversation.', '« Bref, le télétravail, c’est super. »', 'Le télétravail présente donc des avantages réels.', `Le registre jusqu'au bout : ${R(B2.academique)}. EN: keep the register.`, 'a11-erreurs', ['Le télétravail présente des avantages réels.', 'Le télétravail présente donc de réels avantages.', 'Le télétravail offre donc des avantages réels.']),
        eS('Il est prouvé que le télétravail rend tout le monde plus heureux.', 'Le télétravail semble améliorer la satisfaction de nombreux salariés.', `Jamais plus sûr que ta preuve : ${R(B2.academique)}. EN: size the claim.`, 'a11-erreurs', ['Le télétravail semble rendre de nombreux salariés plus heureux.', 'Le télétravail semble rendre de nombreux salariés plus satisfaits.']),
      ],
    },
    {
      id: 'r12-plan', label: 'Ton plan de travail', targets: ['plan-flou'],
      questions: [
        mc('Un point faible bien noté contient...', ['la structure, l’erreur réelle, la leçon et une phrase juste', 'le nom d’un domaine, comme « les temps »'], 0, "Un nom, une erreur, une leçon, un exemple. EN: four parts.", 'a12-plan'),
        mc('Lina range le passé simple parmi ses points forts parce que...', ['au C1, il suffit de le reconnaître', 'elle l’écrit dans ses courriels', 'elle ne le rencontre jamais'], 0, "Le lire, c'est déjà la compétence attendue. EN: reading it is enough.", 'a12-lecture'),
        mc('Pour corriger les si mixtes, Lina reprend...', ['la leçon 4 du B2', 'la leçon 10 du B2', 'la leçon 16 du B2'], 0, "Les si mixtes : la leçon 4 du B2. EN: lesson 4 in B2.", 'a12-lecture'),
        lC('Écoute. Cette phrase fixe...', fr(E(1098)), ['un objectif daté', 'un point fort', 'un point faible'], 0, "Une échéance et une action : un objectif. EN: a dated goal.", 'a12-plan'),
        tI('Complète l’objectif au futur antérieur.', '« D’ici la fin du mois, j’... ces trois leçons. » (relire)', 'aurai relu', `Accompli avant une date future : ${R(B2.futAnt)}. EN: the futur antérieur.`, 'a12-plan', [fr(E(1098)), 'D’ici la fin du mois, j’aurai relu ces trois leçons.']),
        tI('Écris le numéro de la leçon du B2 qui traite le choix entre subjonctif et indicatif.', '« la leçon ... du B2 »', '6', 'La leçon 6 du B2. EN: lesson 6 in B2.', 'a12-cheat', ['six', 'la leçon 6 du B2']),
        tI('Complète la phrase de ton bilan.', '« Au C1, je ne cherche plus seulement à être compris, mais à être ... »', 'exact', "Exact : c'est tout le C1. EN: exact.", 'a12-scenario', [fr(E(1099))]),
        eS('D’ici la fin du mois, j’ai relu ces trois leçons.', fr(E(1098)), `Accompli avant une date future : ${R(B2.futAnt)}. EN: the futur antérieur.`, 'a12-plan', ['D’ici la fin du mois, j’aurai relu ces trois leçons.']),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b1.39 does. */
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
    { front: 'déjà fait au moment du récit', back: 'le plus-que-parfait', say: fr(E(1015)) },
    { front: 'accompli avant un moment futur', back: 'le futur antérieur', say: fr(E(1016)) },
    { front: 'une condition passée, un résultat présent', back: 'si + plus-que-parfait, puis le conditionnel présent', say: fr(E(1024)) },
    { front: 'un regret sur un fait passé', back: 'le subjonctif passé', say: fr(E(1033)) },
    { front: 'le passé composé des livres', back: 'le passé simple, à reconnaître', say: fr(E(1041)) },
    { front: 'une phrase dite en un nom', back: 'la nominalisation', say: fr(E(1046)) },
    { front: 'un but, avec deux sujets', back: 'afin que, de sorte que + subjonctif', say: fr(E(1064)) },
    { front: 'effacer l’acteur', back: 'il a été décidé que', say: fr(E(1087)) },
    { front: 'dire sans dire', back: 'l’implicite', say: fr(E(1092)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Faire le point, puis avancer',
  body: `${REFRAME} Tu as passé en revue toute la grammaire du B2, des leçons 1 à 23, et ce que le B1 te faisait seulement reconnaître. Tu sais ce que tu dois produire, ce qu'il te suffit de reconnaître, et où se trouvent tes points faibles. Les leçons suivantes du C1 partent de ce bilan : elles ne t'apprendront pas à dire plus, mais à dire plus juste. EN: The next C1 lessons start from this audit: not saying more, but saying it more exactly.`,
  points: [
    'À produire : presque toute la grammaire du B2, sans hésiter.',
    'À reconnaître : la langue des livres, redite en français d’aujourd’hui.',
    'Un point faible : une structure, une erreur, une leçon, un exemple.',
    'Au C1, la structure exacte compte plus que la structure rare.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['produire', 'reconnaitre', 'pointFaible'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ton plan de travail',
    opener: {
      line: "Tu as fait le point, famille par famille : ici tu écris le plan qui guidera la suite. EN: You have taken stock, family by family: here you write the plan that will guide what comes next.",
      imageRef: 'lessons/bilan-grammatical-c1/act12.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton plan de travail et passé l'examen : quatre-vingt-seize questions, douze rounds. EN: You wrote your learning plan and sat the exam: 96 questions, 12 rounds.",
    estScreens: 160,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-hypothese', 'a12-quiz/r6-condenser', 'a12-quiz/r9-concession', 'a12-review'],
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

const DRILLS: LessonDrill[] = [
  { id: 'd-piles', title: 'Produire ou reconnaître', format: 'sort' as const, coach: "Deux piles : la structure, tu l'écris et tu la dis, ou tu la lis seulement. EN: sort into produce and recognise.", buckets: ['à produire', 'à reconnaître'], items: ['fr.b2.recits-au-passe.1600', 'fr.b2.emotions.1200', E(1024), 'fr.b2.litterature.1126', 'fr.b2.litterature.1206', 'fr.b2.negation-et-restriction.1536'], audio: AUDIO },
  { id: 'd-horloges', title: 'La bonne horloge', format: 'mcq' as const, coach: "Demande-toi quand l'action est accomplie : avant le récit, avant un moment futur, ou encore en cours. EN: ask when the action is complete.", q: 'Quand j’... le rapport, je te l’enverrai.', opts: ['aurai fini', 'ai fini'], correct: 0, why: "Fini avant l'envoi : le futur antérieur. EN: the futur antérieur.", items: [E(1015), E(1016), E(1017), E(1018), E(1020), 'fr.b2.projets-et-futur.1800'], audio: AUDIO },
  { id: 'd-hypothese', title: 'Si, sans conditionnel', format: 'mcq' as const, coach: "Après si, l'imparfait ou le plus-que-parfait ; le conditionnel va dans l'autre moitié. EN: no conditional after si.", q: 'Si j’... su, je serais venu.', opts: ['avais', 'aurais'], correct: 0, why: "Si + plus-que-parfait. EN: si + pluperfect.", items: [E(1023), E(1024), E(1025), E(1026), E(1027), E(1028)], audio: AUDIO },
  { id: 'd-modes', title: 'Affirmer ou regarder', format: 'sort' as const, coach: "Deux piles : la phrase affirme un fait, ou elle le regarde (regret, doute, superlatif). EN: sort by mood.", buckets: ['indicatif', 'subjonctif'], items: [E(1035), E(1038), E(1039), E(1033), E(1034), E(1036)], audio: AUDIO },
  { id: 'd-aujourdhui', title: 'La forme d’aujourd’hui', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute : c'est la forme d'aujourd'hui de ce que disent les livres. EN: read today's form aloud.", items: [E(1040), E(1041), E(1042), E(1043), E(1044), E(1045)], audio: AUDIO },
  { id: 'd-condenser', title: 'Dire en un nom', format: 'flashcard' as const, coach: "Lis chaque phrase et retrouve la proposition cachée derrière le nom ou l'infinitif. EN: find the clause behind the noun.", items: [E(1046), E(1047), E(1048), E(1049), E(1050), E(1051)], audio: AUDIO },
  { id: 'd-participes', title: 'Verbe ou qualité', format: 'mcq' as const, coach: "Un participe présent reste un verbe et ne s'accorde pas ; un adjectif verbal dit une qualité et s'accorde. EN: verb or quality.", q: 'Les résultats sont ...', opts: ['convaincants', 'convainquants'], correct: 0, why: "L'adjectif verbal : convaincant. EN: the verbal adjective.", items: [E(1053), E(1054), E(1056), E(1058), E(1059), E(1061)], audio: AUDIO },
  { id: 'd-liens', title: 'Le lien juste', format: 'mcq' as const, coach: "Le mot impose la relation et la forme : résultat à l'indicatif, but au subjonctif, un seul sujet à l'infinitif. EN: the link sets the form.", q: 'La route était fermée, de sorte que nous ... le train.', opts: ['avons pris', 'ayons pris'], correct: 0, why: "Un résultat obtenu : l'indicatif. EN: a result.", items: [E(1064), E(1065), E(1066), E(1068), E(1070), E(1071)], audio: AUDIO },
  { id: 'd-concession', title: 'Concéder ou restreindre', format: 'sort' as const, coach: "Deux piles : la phrase accorde un point, ou elle trace une limite. EN: concede or restrict.", buckets: ['concéder', 'restreindre ou nier'], items: [E(1076), E(1080), 'fr.b2.connecteurs-logiques.2153', E(1078), E(1077), E(1079)], audio: AUDIO },
  { id: 'd-voix', title: 'En avant ou effacé', format: 'sort' as const, coach: "Deux piles : une personne mise en relief, ou un acteur effacé. EN: stressed or hidden.", buckets: ['une personne en relief', 'l’acteur effacé'], items: [E(1081), E(1082), E(1086), E(1083), E(1085), E(1087)], audio: AUDIO },
  { id: 'd-registre', title: 'La version revue', format: 'mcq' as const, coach: "Choisis la phrase qui dit exactement, sans « je pense que » et sans répétition. EN: choose the exact sentence.", q: 'Dans un essai, laquelle ?', opts: [fr(E(1094)), fr(E(1090))], correct: 1, why: "Un avantage nommé avec exactitude, sans « je pense que ». EN: exact, no « je pense que ».", items: [E(1090), E(1091), E(1092), E(1093), 'fr.b2.universite.1046', 'fr.b2.universite.1004'], audio: AUDIO },
  { id: 'd-plan', title: 'Les phrases du plan', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute : ce sont les briques de ton plan. EN: read the building blocks of your plan.", items: [E(1095), E(1096), E(1097), E(1098), E(1099), E(1011)], audio: AUDIO },
];

const TRIGGERS: ErrorTrigger[] = [
  { id: 'c1-sans-tri', description: 'Treats every structure alike: tries to produce literary forms in everyday writing, or files a core B2 structure as recognition only.', detectOn: ['a1-piles', 'a1-check', 'a5-piege', 'a12-mission'], drill: 'd-piles', retest: 'd-piles' },
  { id: 'horloge-plate', description: 'Tells a sequence on one clock: passé composé for what had already happened or for what will be finished, pendant for a duration still under way.', detectOn: ['a2-diag', 'a2-erreurs', 'a2-check', 'a12-mission'], drill: 'd-horloges', retest: 'd-horloges' },
  { id: 'si-conditionnel', description: 'Puts the conditional after si or même si, puts a present result in the past conditional, or states an unconfirmed report as fact.', detectOn: ['a3-diag', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-hypothese', retest: 'd-hypothese' },
  { id: 'mode-automatique', description: 'Chooses the mood by habit: subjunctive after espérer, indicative after a negated opinion verb or bien que, no subjunctive after a superlative.', detectOn: ['a4-diag', 'a4-erreurs', 'a4-check', 'a12-mission'], drill: 'd-modes', retest: 'd-modes' },
  { id: 'forme-des-livres', description: 'Misreads the passé simple, passé antérieur, literary subjunctive or ne… point, or produces them in modern writing.', detectOn: ['a5-diag', 'a5-piege', 'a5-check', 'a12-mission'], drill: 'd-aujourdhui', retest: 'd-aujourdhui' },
  { id: 'condensation-ratee', description: 'Gives an infinitive a subject other than the main verb’s, uses sans que with one subject, or stacks abstract nouns.', detectOn: ['a6-diag', 'a6-erreurs', 'a6-check', 'a12-mission'], drill: 'd-condenser', retest: 'd-condenser' },
  { id: 'participe-mal-rattache', description: 'Attaches a gérondif or participle to the wrong subject, makes a present participle agree, or confuses fatigant and fatiguant.', detectOn: ['a7-diag', 'a7-dictee', 'a7-check', 'a12-mission'], drill: 'd-participes', retest: 'd-participes' },
  { id: 'lien-mal-choisi', description: 'Uses a linking word with the wrong relation or form: de sorte que in the wrong mood, pour que with one subject, grâce à for a bad cause, donc for or.', detectOn: ['a8-diag', 'a8-piege', 'a8-check', 'a12-mission'], drill: 'd-liens', retest: 'd-liens' },
  { id: 'concession-bancale', description: 'Writes malgré que, confuses quoique and quoi que, adds pas to another negative word, or combines ne with seulement.', detectOn: ['a9-diag', 'a9-erreurs', 'a9-check', 'a12-mission'], drill: 'd-concession', retest: 'd-concession' },
  { id: 'voix-mal-placee', description: 'Breaks agreement after c’est moi qui, uses ça as an impersonal subject in writing, or takes the wrong mood after il n’est pas exclu que or il me semble que.', detectOn: ['a10-diag', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-voix', retest: 'd-voix' },
  { id: 'registre-plat', description: 'Writes with repetitions, je pense que, absolute claims and conversational words, or dismisses objections instead of answering them.', detectOn: ['a11-diag', 'a11-erreurs', 'a11-check', 'a12-mission'], drill: 'd-registre', retest: 'd-registre' },
  { id: 'plan-flou', description: 'Writes a learning plan with vague weak spots, no lesson or a wrong one, no example sentence, or no dated objective.', detectOn: ['a12-plan', 'a12-scenario', 'a12-mission'], drill: 'd-plan', retest: 'd-plan' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS (layer deep: teach and table only)
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-bilan', 'La carte du bilan', ['les trois piles', 'les quatre familles', 'le B1, revu au C1'], [
    teach('sheet-bilan-teach', 'Trois piles, quatre familles',
      `${REFRAME} Pour chaque structure, une seule question : dois-je la produire, à l'écrit comme à l'oral, ou me suffit-il de la reconnaître ? Une structure à produire qui te résiste encore devient un point faible, noté avec sa leçon et un exemple. EN: ${REFRAME_EN}`),
    table('sheet-bilan-familles', 'Les quatre familles', ['Famille', 'Leçons du B2', 'Ce que le bilan vérifie'], [
      ['le temps et les modes', '1 à 7 et 18 ; 8 et 9 à reconnaître', 'chaque verbe sur la bonne horloge, chaque que avec le bon mode'],
      ['condenser', '10, 12, 13 et 14', 'le nom, l’infinitif, le participe, le gérondif, avec le bon sujet'],
      ['les relations logiques', '15 à 17, 19 et 21', 'le mot qui dit la bonne relation, et la forme qu’il impose'],
      ['le registre', '11, 20, 22 et 23', 'la personne mise en relief ou effacée, l’écrit soutenu, la thèse'],
    ]),
    table('sheet-bilan-b1', 'Le B1, revu au C1', ['Structure', 'Au B1', 'Au C1'], [
      ['depuis + imparfait (il travaillait là depuis dix ans quand…)', 'à reconnaître, la leçon 4 du B1', 'à produire'],
      ['si + imparfait, puis conditionnel présent', 'à produire, la leçon 10 du B1', 'à produire, sans conditionnel après si'],
      ['ne… guère', 'à reconnaître, la leçon 20 du B1', 'à produire à l’écrit soutenu'],
      ['or (le fait qui change la donne)', 'à reconnaître, la leçon 30 du B1', 'à produire'],
      ['après qu’il soit parti', 'entendu à l’oral, la leçon 31 du B1', 'à reconnaître ; à l’écrit, après qu’il est parti'],
      ['le conditionnel de l’information (l’incendie aurait fait deux blessés)', 'à reconnaître, la leçon 34 du B1', 'à produire'],
    ]),
  ]),
  sheet('sheet-temps', 'Le temps et les modes', ['situer dans le temps', 'l’irréel et l’hypothèse', 'le choix du mode', 'la langue des livres'], [
    teach('sheet-temps-teach', 'La bonne horloge, le bon mode',
      "Chaque verbe se place par rapport à un autre : déjà fait (plus-que-parfait), accompli avant un moment futur (futur antérieur), irréel dans le passé (si + plus-que-parfait, conditionnel passé). Chaque que demande le bon mode : l'indicatif affirme, le subjonctif regarde. Les formes des livres se lisent et se redisent en français d'aujourd'hui. EN: each verb on the right clock, each que with the right mood; book forms are read, not written."),
    table('sheet-temps-produire', 'À produire au C1', ['Structure', 'Exemple', 'Leçon'], [
      ['plus-que-parfait', 'Lorsque la commission s’est réunie, le rapport avait déjà circulé.', 'la leçon 1 du B2'],
      ['futur antérieur, y compris de probabilité', 'Elle n’est pas venue ; elle aura oublié la date.', 'la leçon 7 du B2'],
      ['avant que + subjonctif, après + infinitif passé', 'Après avoir quitté Dakar, elle n’y était jamais retournée.', 'les leçons 14 et 18 du B2'],
      ['conditionnel passé (regret, reproche)', 'Les élus auraient dû écouter les commerçants.', 'la leçon 2 du B2'],
      ['si + plus-que-parfait, conditionnel passé', 'Si j’avais su, je serais venu plus tôt.', 'la leçon 3 du B2'],
      ['si mixtes (passé, puis présent)', 'Si j’avais accepté ce poste, j’habiterais à Genève aujourd’hui.', 'la leçon 4 du B2'],
      ['subjonctif passé', 'Nous regrettons que cette décision ait été prise sans consultation.', 'la leçon 5 du B2'],
      ['subjonctif ou indicatif', 'Il est probable que le budget sera serré ; nous doutons qu’il permette des économies.', 'la leçon 6 du B2'],
    ]),
    table('sheet-temps-reconnaitre', 'À reconnaître au C1', ['Forme des livres', 'En français d’aujourd’hui', 'Leçon'], [
      ['il arriva, ils sortirent (passé simple)', 'il est arrivé, ils sont sortis', 'la leçon 8 du B2'],
      ['dès qu’il eut refermé (passé antérieur)', 'dès qu’il a refermé', 'les leçons 8 et 18 du B2'],
      ['bien qu’il fût tard (subjonctif imparfait)', 'bien qu’il soit tard', 'la leçon 9 du B2'],
      ['il eût fallu, vous eussiez pu', 'il aurait fallu, vous auriez pu', 'la leçon 9 du B2'],
      ['elle craignait qu’il ne fût venu (ne explétif)', 'elle craignait qu’il soit venu', 'les leçons 9 et 18 du B2'],
      ['la pluie n’avait point cessé', 'la pluie n’avait pas cessé', 'la leçon 21 du B2'],
    ]),
  ]),
  sheet('sheet-condenser', 'Condenser', ['le nom', 'l’infinitif', 'le participe', 'le gérondif'], [
    teach('sheet-condenser-teach', 'Dire plus en moins de mots',
      "Un nom peut remplacer une proposition (la baisse des inscriptions), un infinitif peut remplacer une subordonnée quand le sujet est le même (après avoir connu, pour finir), un participe ou un gérondif peut porter une circonstance. La règle commune : l'infinitif, le participe et le gérondif prennent le sujet du verbe principal. EN: noun, infinitive, participle, gérondif; the last three take the main verb's subject."),
    table('sheet-condenser-table', 'Les quatre outils', ['Outil', 'Exemple', 'Leçon'], [
      ['la nominalisation', 'La mise en service des stations s’est faite sans difficulté majeure.', 'la leçon 10 du B2'],
      ['faire + infinitif', 'La Ville a fait chiffrer ces mesures.', 'la leçon 14 du B2'],
      ['après + infinitif passé, sans que + subjonctif', 'Après avoir connu un démarrage lent, la fréquentation a progressé.', 'la leçon 14 du B2'],
      ['le gérondif, tout en', 'En arrivant tôt, on évite la file ; tout en se disant ravie, elle s’inquiète.', 'la leçon 12 du B2'],
      ['participe présent ou adjectif verbal', 'une retraitée tenant un atelier ; un travail fatigant', 'la leçon 13 du B2'],
      ['ayant ou étant + participe passé', 'Ayant travaillé trente ans dans un garage, elle connaît chaque pièce.', 'les leçons 12 et 13 du B2'],
    ]),
    table('sheet-condenser-pieges', 'Les erreurs qui résistent', ['Erreur', 'Correction'], [
      ['Après avoir fini le rapport, le directeur l’a lu. (deux sujets)', 'Après avoir fini le rapport, je l’ai envoyé au directeur.'],
      ['une suite de noms abstraits (la mise en œuvre de la réduction de…)', 'un verbe pour faire avancer la phrase'],
      ['un travail fatiguant', 'un travail fatigant (adjectif) ; en se fatiguant (verbe)'],
      ['Je suis parti sans que je dise au revoir.', 'Je suis parti sans dire au revoir.'],
    ]),
  ]),
  sheet('sheet-relations', 'Les relations logiques', ['cause et conséquence', 'le but', 'la concession', 'la restriction et la négation'], [
    teach('sheet-relations-teach', 'Le mot qui relie impose sa forme',
      "La cause et la conséquence prennent en général l'indicatif ; le but, qui vise ce qui n'est pas encore arrivé, prend le subjonctif avec deux sujets et l'infinitif avec un seul. Bien que et quoique prennent le subjonctif, quand bien même le conditionnel. Un seul ne, et les mots négatifs s'additionnent sans pas. EN: cause and consequence: indicative; purpose: subjunctive or infinitive; concession has its own forms."),
    table('sheet-relations-table', 'À produire au C1', ['Relation', 'Exemple', 'Leçon'], [
      ['la cause (étant donné que, du fait que)', 'Étant donné que peu de gens circulent la nuit, l’argument paraît fragile.', 'la leçon 15 du B2'],
      ['la conséquence (tellement… que, de sorte que + indicatif)', 'La route était fermée, de sorte que nous avons pris le train.', 'la leçon 15 du B2'],
      ['le but (afin que, de sorte que + subjonctif, de peur que)', 'La mesure a été prise afin que la commune réduise sa facture.', 'la leçon 17 du B2'],
      ['la concession (certes… néanmoins, bien que, quand bien même)', 'Quand bien même on serait sensible à ce lyrisme, on regrettera la fin.', 'la leçon 16 du B2'],
      ['la restriction (ne… que, seul, sauf, à moins de)', 'Seule la comédienne principale parvient à faire exister son personnage.', 'la leçon 19 du B2'],
      ['la négation combinée (ne… plus rien, ne… guère)', 'On n’avait plus rien vu d’aussi juste sur cette scène.', 'la leçon 21 du B2, la leçon 20 du B1'],
    ]),
    table('sheet-relations-reconnaitre', 'À reconnaître au C1', ['Forme', 'Sens', 'Leçon'], [
      ['quelque talent qu’aient les comédiens', 'si talentueux que soient les comédiens', 'la leçon 16 du B2'],
      ['nonobstant', 'malgré (langue juridique ou très soutenue)', 'les leçons 16 et 22 du B2'],
      ['je ne le connais point', 'je ne le connais pas du tout (littéraire)', 'la leçon 21 du B2'],
    ]),
  ]),
  sheet('sheet-registre', 'Le registre', ['la mise en relief', 'l’acteur effacé', 'l’écrit soutenu', 'le plan de travail'], [
    teach('sheet-registre-teach', 'Le même fait, pour un autre lecteur',
      "À l'oral, on met les personnes en avant : moi, je ; c'est elle qui. Dans un compte rendu, on les efface : il a été décidé que, il reste à. Dans un essai, la position se dit sans « je pense que », par des reprises, des affirmations dosées et une conclusion qui laisse le lecteur conclure. EN: speech puts people forward, minutes hide them, an essay states a position without « je pense que »."),
    table('sheet-registre-table', 'À produire au C1', ['Geste', 'Exemple', 'Leçon'], [
      ['mettre une personne en relief', 'C’est la directrice qui a tout bloqué. Les professeurs, eux, étaient d’accord.', 'la leçon 11 du B2'],
      ['effacer l’acteur', 'Il a été proposé de solliciter le soutien de l’association des parents.', 'la leçon 20 du B2'],
      ['doser une possibilité', 'Il n’est pas exclu que la région paie une partie des frais.', 'la leçon 20 du B2'],
      ['tenir un fil sans répéter', 'Cet avantage se double d’un bénéfice environnemental.', 'la leçon 22 du B2'],
      ['défendre une thèse et répondre', 'Le télétravail ne saurait devenir la norme qu’à condition d’être une alternance.', 'la leçon 23 du B2'],
    ]),
    table('sheet-registre-plan', 'Le plan de travail', ['Partie', 'Ce qu’elle contient'], [
      ['trois points forts', 'des structures précises que tu produis sans hésiter'],
      ['trois points faibles', 'pour chacun : la structure, l’erreur que tu fais, la leçon qui la corrige'],
      ['un exemple par point faible', 'une phrase correcte qui emploie la structure'],
      ['un objectif', 'une échéance et une action vérifiable'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];
const DRILL_LIST: LessonDrill[] = DRILLS;
const TRIGGER_LIST: ErrorTrigger[] = TRIGGERS;

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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-01-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c1-01-fiche': "Act 1 reading: Hélène's handout, ONE VOICE, one take, a Québécoise teacher in her fifties, warm and precise, at natural reading pace. A short pause after « Faire le point avant d'avancer » (the handout's title) and before each of the four families.",
  'rec-c1-01-maison': "Act 2 reading: a magazine chronicle, ONE VOICE, one take, a Québécois writer in his forties (Estrie), unhurried and reflective. No stress on the verb forms: the three clocks must be heard in ordinary reading, not underlined.",
  'rec-c1-01-tramway': "Act 3 reading: a weekly column, ONE VOICE, one take, a Québécoise columnist, lively and a little ironic. The two figures (1962, two hundred million dollars) read clearly; the final question with a real rising question intonation.",
  'rec-c1-01-piege-hypothese': "The audio step plays each card's CORRECT sentence (the six hypotheses). Read the six evenly, at natural speed; the wrong versions in promptSound are never spoken.",
  'rec-c1-01-lettre': "Act 4 reading: an open letter, ONE VOICE, one take, a calm, formal voice (France or Québec), read as a letter read aloud at a public meeting. The salutation and the closing formula slightly slower.",
  'rec-c1-01-notaire': "Act 5 reading: a pastiche of a nineteenth-century novel, ONE VOICE, one take, an older narrator with a classic, measured diction. Every passé simple, passé antérieur and imperfect subjunctive pronounced in full (apportât, eût, eussiez); the widow's line in a quieter, steady second register by the SAME voice.",
  'rec-c1-01-piege-livres': "The audio step plays each card's CORRECT, TODAY'S sentence. Read the six in plain conversational French; the literary versions in promptSound are never spoken.",
  'rec-c1-01-synthese': "Act 6 reading: a report summary, ONE VOICE, one take, a neutral professional voice. Figures (quarante stations, mille deux cents trajets, un vélo sur cinq, trois cent mille dollars) read distinctly; a short pause before « Le cabinet recommande donc trois mesures ».",
  'rec-c1-01-chronique': "REQUIRED FOR THE EAR MISSION (act 7): twelve lines, ONE TAKE, ONE VOICE (a female radio host, Québec), in authored order, at natural radio speed (about two minutes), as a live morning slot. No pause between lines beyond the punctuation. The questions are about what the ear caught, so the lines are hidden: the take must be continuous.",
  'rec-c1-01-eclairage': "Act 8 reading: an opinion piece, ONE VOICE, one take, a confident voice (France), clear on the linking words (or, étant donné que, tellement… que, de peur que, dans la mesure où, de sorte que) with the comma pause they carry in writing.",
  'rec-c1-01-piege-liens': "The audio step plays each card's CORRECT sentence (six links). Read the six evenly; the wrong versions in promptSound are never spoken.",
  'rec-c1-01-critique': "Act 9 reading: a theatre review, ONE VOICE, one take, an arts critic with a dry wit (France). « sauf peut-être le metteur en scène » read with a light ironic lift; the rest even.",
  'rec-c1-01-reunion': "Act 10 reading: TWO VOICES. Samuel's account by a male parent, fast, oral, emphatic on moi, nous, elle, eux; the minutes and the commentary by a neutral female voice, flat and administrative. A clear beat between the two accounts.",
  'rec-c1-01-piege-voix': "The audio step plays each card's CORRECT sentence (six voices). Read the six evenly; the wrong versions in promptSound are never spoken.",
  'rec-c1-01-teletravail': "Act 11 reading: ONE VOICE, one take, a writing tutor. The first draft read flatly, with its repetitions audible; a clear beat; the revised version read fluently; then the commentary in a warm, explanatory tone.",
  'rec-c1-01-plan': "Act 12 reading: Lina's plan, ONE VOICE, one take, a young adult learner (a light non-native accent is welcome), read as she reads her plan to her tutor. The quoted sentences given a slight quotation lift; a pause before each heading (Mes points forts, Mes points faibles, Mon objectif).",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 1',
  intro: 'The first C1 lesson, and the C1 diagnostic. It teaches nothing new: you already have almost all of French grammar. What C1 asks is precision, nuance and control of what is left unsaid, and a structure you know but still get wrong when you write fast. Family by family (time and moods, condensing, logical relations, register), you read a C1-length text, find the structures it uses, test yourself on new material and sort each structure into three piles: to produce, to recognise, or your weak spot. Every miss points you to the B1 or B2 lesson that fixes it. At the end you write your own learning plan, 250 to 400 words, graded on accuracy and precision.',
  skill: 'PE',
  grammarAssumed: [
    B2.pqp, B2.condPasse, B2.siIrreel, B2.siMixtes, B2.subjPasse, B2.subjInd, B2.futAnt, B2.passeSimple,
    B2.subjLitt, B2.nominal, B2.tonique, B2.gerondif, B2.participe, B2.infinitif, B2.cause, B2.concession,
    B2.but, B2.temps, B2.restriction, B2.impersonnel, B2.negation, B2.academique, B2.argument,
    B1.depuis, B1.si, B1.guere, B1.or, B1.subord, B1.medias,
  ],
  grammarIntroduced: [
    'No new grammar: a guided audit of the B1 and B2 grammar against the C1 accuracy descriptor (consistent accuracy, rare errors that are hard to spot)',
    'The three-pile self-assessment: structures to produce in writing and speech, structures to recognise only (passé simple, subjonctif imparfait, passé antérieur, ne… point, quelque… que, nonobstant), and personal weak spots, each routed to the lesson that owns it',
    'The C1 frame for grammar choices: precision (the exact structure), nuance (how far a sentence commits) and implicit meaning (what a sentence lets the reader conclude)',
    'The learning plan as a written genre: three strengths, three weak structures each with its lesson and an example sentence, and a dated objective',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu as presque toute la grammaire du français. Le C1 te demande autre chose : la précision, la nuance et l'implicite. Famille par famille, tu lis un texte de niveau C1, tu repères ses structures, tu te testes, et tu ranges chaque structure dans une pile : à produire, à reconnaître, ou point faible. À la fin, tu écris ton plan de travail, de 250 à 400 mots.",
    minutes: 160,
    difficulty: 4,
    glyph: '⌖',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: BILAN_GRAMMATICAL_TERMS,
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

/** The lesson with the `task` section removed from `sections` and from every
 *  act, as the C1 brief asks the validators to see it. */
export function lessonWithoutTask(): Lesson {
  const taskIds = new Set(LESSON.sections.filter((s) => s.type === 'task').map((s) => s.id));
  return {
    ...LESSON,
    sections: LESSON.sections.filter((s) => s.type !== 'task'),
    acts: LESSON.acts?.map((a) => ({
      ...a,
      sections: a.sections.filter((id) => !taskIds.has(id)),
      restPoints: a.restPoints?.filter((rp) => !taskIds.has(rp.split('/')[0])),
    })),
  };
}

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, PLAN_TEXT, dicteeFor };
