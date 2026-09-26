// b1.37.l1 « Lire sans tout comprendre » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE, strategy
// variant) on top of B1-BUILD-PLAYBOOK.md. One of the two pilot lessons that
// set the workshop shape; b1.38 (listening strategy) copies this one.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is real (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]` and the validators run on `LESSON` itself, as b1.18 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE (read this before the act plan)
// ══════════════════════════════════════════════════════════════════════════
//
//   A grammar act is built around a FORM. Every act from 2 to 10 here is
//   built around a TEXT and a MOVE, in the same four beats, in this order:
//
//     1. MEET THE TEXT     a `reading` (or, once, a `listening`) that opens
//                          the act. It is a little ABOVE B1 and comes FIRST,
//                          before any explanation. Its questions sit behind
//                          `questionsInModal` and ask what the move got
//                          from the text before any word is glossed.
//     2. NOTICE THE MOVE   one `tapTable`, `cardDeck`, `focus`, `examples` or
//                          `hacks` that names what the reader did.
//     3. PRACTISE          two to four checks on NEW material, never on the
//                          anchor text: `groupDrill`, `trapDrill`,
//                          `commonErrors`, `listening`, `flashcards`,
//                          `dictation`.
//     4. USE IT            « Pour ton résumé », always the same mission
//                          shape: a `groupDrill` whose groups set a summary
//                          line built with THIS act's move against the
//                          line a reader without the move would write. It
//                          is the act's one tool for the graded task, and a
//                          reviewer can find it in every act by its title.
//
//   then the act check (control pages, gated), as in every B1 lesson.
//   Act 1 is the problem scene; act 11 is the production act (the full task
//   and the closing sections). No new section type is used anywhere.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le mur de mots           6   an article read word by word (scene)
//    2  Quel texte ?             6   four fragments on a phone · the genre
//    3  Le titre annonce         7   an article skeleton, then the article
//                                    · title, standfirst, subheadings
//    4  Survoler, puis chercher  7   a library summer page · skim vs scan
//    5  Les chiffres             6   a survey brief · numbers, dates, %
//    6  Un mot inconnu           8   a Liège student forum · context,
//                                    word parts, false friends
//    7  Les panneaux             7   an opinion column · connectors as
//                                    signposts
//    8  Qui est « ce dernier »   6   a Dakar press dispatch · reprises
//    9  Un fait ou une opinion   6   a Brussels local page · sources
//   10  La question d'abord      7   a job advert as an exam document,
//                                    then a three-line « document blanc »
//   11  Résumer pour un ami     11   the task article · plan, role play,
//                                    TASK, quiz, review
//
//   TOTAL 77 missions, 11 acts (6,6,7,7,6,8,7,6,6,7,11), 437 estimated
//   screens. Corpus: 191 authored rows (.1000-.1199) in eleven blocks plus
//   12 reused seed rows, 203 item ids in all, 201 of them released act by act
//   through `deckTranche` (the other 2 are the seed rows with no flashcard
//   drill, listed as NOT_DECK_ABLE). 12 readings and 3 listenings. Quiz: 11
//   rounds of 8 (36 mcq, 26 typeIn, 15 errorSpot, 11 listenChoose). Eleven
//   error triggers, eleven drills, five reference sheets reached from 13
//   missions, eleven terms, 22 studio briefs. Chapter artwork:
//   `strategies-lecture-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le sens d'abord, les mots ensuite. »
//   EN: Meaning first, words after.
//
//   ONE METAPHOR, THE LAMP. A good reader lights first what carries the
//   meaning (source, title, standfirst, numbers, signposts, names) and only
//   then, if it is still needed, the hard word. It is NOT « skip the hard
//   words »: acts 6 and 8 exist because one word can turn the meaning, and
//   the lesson finds the meaning of THAT word from the sense around it.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    reading strategy at B1: genre before reading; prediction from
//           title, standfirst and subheadings; skim versus scan; reading
//           numbers, dates and percentages in a text; guessing a word from
//           context, word parts and cognates; false friends as a READING
//           trap; connectors as signposts; reference chains (il, celui-ci,
//           ce dernier, le premier / le second); fact, claim, rumour and
//           opinion; question-first exam reading; the written summary.
//   QUOTES  b1.08's reframe (the journalistic conditional after selon /
//           d'après); b1.15's classing of « il paraît que » with the
//           indicative (cited, not quoted as a reframe); b1.18's reframe for
//           the passive on notices; b1.19's reframe for « a déclaré que »;
//           a2.17's -ment reframe and a2.33's demonstrative reframe, each
//           shown with a French rendering; a1.27 (septante, nonante) and
//           a1.28 (milliard, the decimal comma) by lesson label.
//   LEAVES  connectors as GRAMMAR to b1.30 to b1.32 (being written in
//           parallel: cited by number only, never quoted, and nothing here
//           teaches how to build a clause with them); listening strategy to
//           b1.38; the subjunctive to b1.14 to b1.16 (no authored French
//           string here uses one).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (Karine says « tu », the advert uses Québec « tu »,
//   notices use « vous »). Every learner surface that explains something
//   carries English (`en`, or a final « EN: »), and NO ANSWER ever does.
//   Every `say` is French, spoken fr-FR. Theme `strategies-de-comprehension`,
//   POSTGRES ONLY (corpus §A.1). A1 and A2 citations use the English trail
//   label; b1.* ones are French from the plan.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. `Lesson.skill` is 'CE', not 'PE', although the task is written. The
//      lesson remediates READING (TCF / TEF compréhension écrite), b1.39 is
//      the planned B1 PE target, and every grammar lesson so far is 'PE', so
//      a 'PE' here would compete for that routing. Keep 'CE'?
//   2. The summary task needs its source text ON the task screen, and
//      TaskView has no field for one. The article is printed twice: as act
//      11's reading, and inside the task `brief` (a passage section, so no
//      density cap). Accept the repetition, or give `task` a source field?
//   3. The shapes doc says 6 to 9 readings or listenings. A READING lesson
//      has 12 readings and 3 listenings, one anchor text per act plus the
//      article in act 3 read twice (skeleton, then whole). Accept for the
//      strategy variant?
//   4. The « use it » beat. The shapes doc offers a scenario, a practice or
//      a rewrite. With no free-writing section short of `task`, every act
//      uses the same groupDrill « Pour ton résumé » (pick the summary line
//      built with the move). Is a CHOSEN line enough, or should one act mid-
//      lesson carry a second, short `scenario`?
//   5. Act 6 authors its false friends because the 433 published `faux-amis`
//      rows are DB-only and dictation-only (corpus §A.3). Dedupe at import?
//   6. « kot » (Belgian student room) is taught as a CONTEXT word, marked
//      Belgian, and used in two rows. Keep a regional word as the showcase,
//      or swap for a pan-francophone one?
//   7. b1.30 to b1.32 are written in parallel. If their reframes land, act 7
//      should quote one on its cardDeck the way act 6 quotes a2.17. Which?
//   8. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  TELETRAVAIL_TEXT, ECRAN_TEXT, SQUELETTE_TEXT, VELO_TEXT, BIBLIO_TEXT, LECTURE_TEXT,
  FORUM_TEXT, CHRONIQUE_TEXT, DEPECHE_TEXT, TROTTINETTES_TEXT, EMPLOI_TEXT, FRIGOS_TEXT,
  A217_REFRAME, A217_REFRAME_FR, A233_REFRAME, A233_REFRAME_FR,
  B108_REFRAME, B118_REFRAME, B119_REFRAME,
  NOMBRES21_UNIT, GRANDS_NOMBRES_UNIT, ADVERBES_UNIT, DEMONSTRATIFS_UNIT,
  CONDITIONNEL_UNIT, SUBJ_DECLENCHEURS_UNIT, PASSIF_UNIT, DISCOURS_UNIT,
  NOMBRES21_REF, GRANDS_NOMBRES_REF, ADVERBES_REF, DEMONSTRATIFS_REF,
  CONDITIONNEL_REF, SUBJ_DECLENCHEURS_REF, PASSIF_REF, DISCOURS_REF,
  CONNECTEURS_REF, LISTENING_NEXT_REF,
} from './strategies-lecture-corpus.ts';
import { STRATEGIES_LECTURE_TERMS } from './strategies-lecture-terms.ts';

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
  if (!r) throw new Error(`b1.37: no item ${id}`);
  return r;
}

/** The corpus row's IPA, so a scene break or a trap card never retypes one. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.37: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.37: no respell on ${id}`);
  return `[${r.respell}]`;
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

/** THE « USE IT » BEAT of the workshop shape: the act's one tool for the
 *  graded task. Same title in every act so a reviewer can find the beat. */
function pourTonResume(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ton résumé', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE MUR DE MOTS
 *
 *  The problem, shown before any strategy is named: a learner who reads an
 *  article word by word, dictionary in hand, and reaches the meeting with
 *  twelve new words and no idea what the article said.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Nobody is wrong about French here: the learner reads carefully and
 *  loses anyway, which is the only failure a reading lesson can open on.
 *  NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Trois stations avant la réunion',
  frSub: "L'article de Karine",
  setting: { place: 'La ligne orange du métro', city: 'Montréal', time: '8 h 40', ambience: 'un wagon plein, des écouteurs, un téléphone ouvert sur un article' },
  beats: [
    {
      kind: 'narration',
      text: "Lundi, 8 h 40, dans le métro de Montréal. Karine, ta collègue, t'envoie le lien d'un article. La réunion commence à dix heures.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Karine',
      fr: 'Lis ça avant la réunion. On en parle à dix heures.',
      en: 'Read this before the meeting. We will talk about it at ten.',
      respell: '[lee SA a-vahⁿ la ray-ü-NYOHⁿ ohⁿ-nahⁿ PARL a dee-ZUHR]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Tu ouvres l'article. Deuxième ligne, un mot inconnu : tu ouvres le dictionnaire. Puis un autre, puis un autre. À la station Berri-UQAM, tu es encore au premier paragraphe.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Il y a trop de mots que je ne connais pas.',
      en: 'There are too many words I do not know.',
      respell: '[ee-lya troh duh MOH kuh zhuh nuh ko-neh PA]',
      stage: "Tu as cherché douze mots. Tu ne sais toujours pas de quoi parle l'article.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Karine',
      fr: "Moi, je l'ai lu en deux minutes, dans l'ascenseur.",
      en: 'I read it in two minutes, in the lift.',
      respell: '[MWA zhuh lay LÜ ahⁿ deu mee-NÜT dahⁿ la-sahⁿ-SUHR]',
      stage: 'Karine ne connaît pas tous ces mots non plus. Elle lit autrement.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: "Il te reste trois stations. Qu'est-ce que tu fais maintenant ?",
      size: 'lg',
      options: [
        { fr: src(E(1007)).fr, respell: rsOf(E(1007)), en: src(E(1007)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(1006)).fr, respell: rsOf(E(1006)), en: src(E(1006)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Deux minutes plus tard, tu as l'essentiel : la Ville ramène ses employés au bureau trois jours par semaine, et le syndicat n'est pas d'accord. À dix heures, tu as une question à poser.",
        breaks: "À la station Jean-Talon, tu connais trois mots de plus. Tu ne sais toujours pas ce que la Ville a décidé, et la réunion commence dans vingt minutes.",
      },
    },
    {
      kind: 'break',
      heading: 'Tu lisais des mots, pas un texte',
      body: "Un texte n'est pas une liste de mots. Le titre, le début, les chiffres et les petits mots comme « en revanche » portent le sens. Les mots difficiles attendent. EN: Headline, opening, numbers and signposts carry the meaning; hard words can wait.",
      wrong: { fr: src(E(1007)).fr, ipa: ipaOf(E(1007)), respell: rsOf(E(1007)), en: src(E(1007)).en },
      right: { fr: src(E(1006)).fr, ipa: ipaOf(E(1006)), respell: rsOf(E(1006)), en: src(E(1006)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Cette leçon te donne dix façons d'attraper le sens avant les mots. À la fin, tu vas lire un article de deux cents mots et écrire à un ami ce qu'il dit, en cinquante à quatre-vingts mots.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['chapeau', 'resume'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Savoir ce que tu lis', s: 'Actes 2 et 3 : le genre, le titre et le chapeau' },
    { t: 'Trouver le sens ou le détail', s: 'Actes 4 et 5 : survoler, repérer, lire les chiffres' },
    { t: 'Passer les mots inconnus', s: 'Actes 6 à 8 : deviner, suivre les panneaux et les reprises' },
    { t: 'Résumer pour un ami', s: "Actes 9 à 11 : fait ou opinion, l'examen, puis ta mission écrite" },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the article itself, a little above B1. The questions ask
 *  for the meaning first and for the unknown words LAST, so the learner sees
 *  that the gist came without them. The glossary is there for after. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "L'article de Karine",
  frSub: 'Lis le titre et la première phrase, puis le reste',
  text: TELETRAVAIL_TEXT,
  glossary: [
    { word: 'fonctionnaires', en: 'civil servants', note: "Les personnes qui travaillent pour la Ville ou pour l'État." },
    { word: 'dénonce', en: 'condemns', note: 'Dit publiquement que c’est mal. EN: speaks out against.' },
    { word: 'à leurs frais', en: 'at their own expense', note: 'Avec leur propre argent.' },
    { word: 'se réjouissent', en: 'are glad', note: 'Sont contents.' },
    { word: 'Dorénavant', en: 'from now on', note: 'À partir de maintenant.' },
  ],
  questions: [
    { q: 'Sans dictionnaire : de quoi parle cet article, en une phrase ?', a: 'La Ville demande à ses employés de revenir au bureau trois jours par semaine, dès janvier. Le titre et la première phrase suffisent.' },
    { q: 'Qui est pour, et qui est contre ?', a: "La direction est pour. Le syndicat est contre : « en revanche » annonce l'autre camp." },
    { q: 'Combien de personnes sont touchées ?', a: 'Près de 6 000. Un chiffre se lit sans aucun mot difficile.' },
    { q: "Quels mots ne connaissais-tu pas ? Ont-ils changé l'idée générale ?", a: "Peut-être dorénavant, aménagé ou se réjouissent. Ils ajoutent des détails ; l'idée reste la même sans eux." },
  ],
  audio: REC('rec-b1-37-teletravail'),
  say: REFRAME,
  terms: ['chapeau', 'resume'],
};

/** PRACTISE: what the learner got without the dictionary, line by line. */
const A1_SANS: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-sans',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu as sans dictionnaire',
  groups: [
    grp('Le sujet, en deux lignes', [
      it(E(1000), 'le titre'),
      it(E(1001), 'la première phrase'),
      it(E(1009), 'la règle derrière'),
    ], chk(
      'Pour comprendre ces deux lignes, de combien de mots difficiles as-tu besoin ?',
      ['aucun', 'trois ou quatre'], 0,
      'Le titre et la première phrase sont écrits pour être compris vite. EN: headlines and first sentences are written to be understood fast.')),
    grp('Les deux camps', [
      it(E(1002), 'selon : la version de la direction'),
      it(E(1003), "en revanche : l'autre camp"),
      it(E(1004), 'dorénavant : un détail pratique'),
    ], chk(
      'Quel petit mot te dit que le syndicat ne pense pas comme la direction ?',
      ['dénonce', 'en revanche', 'consultation'], 1,
      '« En revanche » tourne le texte avant même le verbe. EN: en revanche turns the text before the verb does.')),
    ctl('Et le mot inconnu', '« Dorénavant, chaque service affichera son horaire. » Sans « dorénavant », que perd la phrase ?',
      ['un détail de temps, pas son sens', 'tout son sens'], 0,
      "Dorénavant veut dire à partir de maintenant : utile, pas nécessaire. EN: it means from now on; useful, not essential."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chapeau', 'contexte'],
};

/** Where reading for the meaning first costs something real. Each case is
 *  the QUESTION a reader puts to that text. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Un avis de la Ville dans ta boîte aux lettres', fr: "Qu'est-ce qui change pour moi, et quand ?", en: 'What changes for me, and when?' },
    { situation: "Un article que ta collègue t'envoie avant une réunion", fr: 'De quoi parle ce texte, et qui est contre ?', en: 'What is this text about, and who is against it?' },
    { situation: 'Un long courriel très poli de ton propriétaire', fr: "Qu'est-ce qu'il me demande, et pour quand ?", en: 'What is he asking me for, and by when?' },
    { situation: "Un document à l'examen, avec quatre questions", fr: 'Quelle information la question me demande-t-elle ?', en: 'What information is the question asking me for?' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['genre', 'reperage'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl("L'ordre", 'Devant un texte difficile, tu commences par...',
    ['le premier mot inconnu', 'le titre et la première phrase'], 1,
    "Le titre et le début donnent souvent tout le sens. EN: the headline and the opening often give the whole meaning."),
  ctl('Le mot inconnu', 'Un mot inconnu bloque-t-il toujours le sens ?',
    ['Non, souvent il ajoute un détail.', 'Oui, il faut le chercher tout de suite.', "Seulement dans un article."], 0,
    "La plupart des mots difficiles précisent ; ils ne changent pas l'idée. EN: most hard words add detail rather than the main idea."),
  ctl('La mission', 'À la fin de la leçon, tu vas écrire...',
    ['un article de deux cents mots', 'un résumé pour un ami', 'une lettre au syndicat'], 1,
    "Un résumé de cinquante à quatre-vingts mots, pour quelqu'un qui n'a pas lu le texte. EN: a 50 to 80 word summary for someone who has not read the text."),
], ['resume', 'chapeau']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le mur de mots',
    opener: {
      line: "Ta collègue t'envoie un article trop difficile : ici tu apprends à le lire quand même. EN: Your colleague sends you an article that is too hard: here you learn to read it anyway.",
      imageRef: 'lessons/strategies-lecture/act01.jpg',
    },
    sections: [],
    milestone: "Tu tires l'idée d'un texte difficile de son titre et de sa première phrase. EN: You can take the main idea of a hard text from its headline and first sentence.",
    estScreens: 24, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_SANS, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — QUEL TEXTE AS-TU SOUS LES YEUX
 *
 *  TEXT: four fragments on a phone screen. MOVE: name the genre from its
 *  source, layout and audience before reading a sentence, because the genre
 *  says what the text wants and how far to trust it.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Four texts, and each gives its genre away in its first five words. */
const A2_ECRAN: Sec<'reading'> = {
  type: 'reading',
  id: 'a2-ecran',
  layer: 'core',
  questionsInModal: true,
  title: 'Ce matin, sur ton téléphone',
  frSub: 'Quatre textes, quatre genres',
  text: ECRAN_TEXT,
  glossary: [
    { word: 'aqueduc', en: 'water mains', note: "Au Québec, les tuyaux qui amènent l'eau dans les maisons." },
    { word: 'Franchement', en: 'frankly', note: 'Je dis ce que je pense, sans filtre.' },
    { word: 'forfaits', en: 'phone plans', note: 'Un prix fixe par mois pour le téléphone.' },
    { word: 'Conditions en magasin', en: 'terms in store', note: 'Les limites de l’offre sont expliquées au magasin.' },
  ],
  questions: [
    { q: 'Avant de lire les phrases : quels indices te donnent le genre de chaque texte ?', a: "1 : AVIS et la Ville. 2 : « Publié aujourd'hui à 8 h 10 ». 3 : Forum et « Re : ». 4 : OFFRE, -30 % et le point d'exclamation." },
    { q: 'Lequel te demande de faire quelque chose, et quoi ?', a: "L'avis : prévoir de l'eau mardi entre 9 h et 16 h, si tu habites rue Saint-Jean, entre les numéros 200 et 350." },
    { q: 'Texte 2 : la panne dure-t-elle encore ?', a: 'Non. Le service a repris vers 7 h 30. Une brève dit un fait daté, et ce fait est parfois déjà fini.' },
    { q: 'Texte 3 : les repas sont-ils trop chers ?', a: 'On ne le sait pas : un parent le trouve. « Je trouve que » annonce une opinion, pas un fait.' },
    { q: 'Texte 4 : -30 % sur quoi, exactement ?', a: 'Sur les forfaits mobiles, avant dimanche, avec des conditions. La publicité promet ; les conditions disent le reste.' },
  ],
  audio: REC('rec-b1-37-ecran'),
  say: REFRAME,
  terms: ['genre'],
};

/** NOTICE THE MOVE: six genres, their clues, and what each wants. */
const A2_GENRES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-genres',
  layer: 'core',
  sheetId: 'sheet-genres',
  title: 'Six genres, six indices',
  cols: ['Genre', 'Indice', 'Ce qu’il veut'],
  rows: [
    { cells: ['un avis', 'AVIS, la Ville, une date', 'te dire ce qui change'], say: src(E(1024)).fr,
      detail: { title: "L'avis", body: "Une règle officielle, souvent au passif, avec une date et un lieu. Cherche ce qui change pour toi. EN: an official rule with a date and a place.", say: src(E(1025)).fr } },
    { cells: ['une brève', 'publié à, un lieu, un fait', "t'informer vite"], say: src(E(1026)).fr,
      detail: { title: 'La brève', body: "Quelques lignes sur un fait récent : quoi, où, quand. Regarde l'heure, c'est peut-être déjà fini. EN: a few lines on a recent fact; check the time.", say: src(E(1027)).fr } },
    { cells: ['un message de forum', 'Re :, je, un prénom', 'donner un avis'], say: src(E(1023)).fr,
      detail: { title: 'Le forum', body: "Une personne parle d'elle, avec je. Tu lis une opinion ou une question, pas une vérité. EN: one person speaking as I: an opinion, not a fact.", say: src(E(1022)).fr } },
    { cells: ['un courriel', 'Objet, Bonjour, une signature', 'te demander quelque chose'], say: src(E(1021)).fr,
      detail: { title: 'Le courriel', body: "Cherche la demande et la date limite, souvent dans la dernière phrase. EN: find the request and the deadline, often at the end.", say: src(E(1020)).fr } },
    { cells: ['une publicité', '%, profitez, offre', 'te vendre'], say: src(E(1028)).fr,
      detail: { title: 'La publicité', body: "Elle promet en grand. Les conditions, souvent en petit, disent le vrai prix. EN: it promises big; the conditions tell the real price.", say: src(E(1029)).fr } },
    { cells: ['un article', 'un titre, un chapeau, une source', 'expliquer'], say: src(E(1030)).fr,
      detail: { title: "L'article", body: "Un titre, un chapeau, des paragraphes et des sources. C'est le genre de ta mission finale. EN: headline, standfirst, paragraphs and sources: the genre of your final task.", say: src(E(1037)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['genre'],
};

/** PRACTISE, on new lines: the genre from one line alone. */
const A2_INDICES: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-indices',
  layer: 'core',
  size: 'lg',
  title: 'Le genre en une ligne',
  frSub: 'Une seule ligne te suffit',
  groups: [
    grp('Des lignes pour tout le monde', [
      it(E(1024), 'une rue, un jour, une règle'),
      it(E(1025), 'sont priés de : une formule officielle'),
      it(E(1026), 'un fait, un lieu, un moment'),
      it(E(1027), 'selon les pompiers : une source'),
    ], chk(
      'Ces quatre lignes viennent de quels genres ?',
      ['deux avis et deux brèves', 'deux publicités et deux courriels'], 0,
      'Des formules officielles, puis des faits avec une source. EN: official formulas, then facts with a source.')),
    grp('Des lignes pour toi', [
      it(E(1021), 'Madame, je vous écris'),
      it(E(1023), 'perso, je trouve'),
      it(E(1028), 'profitez, notre offre'),
      it(E(1029), 'un prix qui attire'),
    ], chk(
      'Laquelle cherche à te vendre quelque chose ?',
      [src(E(1023)).fr, src(E(1028)).fr, src(E(1021)).fr], 1,
      'Profitez, offre, avant dimanche : une publicité pousse à agir vite. EN: an advert pushes you to act fast.')),
    ctl('Un titre', '« Pourquoi les jeunes quittent-ils les régions ? » Quel genre ?',
      ['un message de forum', 'un avis de la Ville', "le titre d'un article"], 2,
      "Une question sur la société, sans je : un titre qui annonce une enquête. EN: a question about society with no I: a headline announcing an investigation."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['genre'],
};

/** PRACTISE: four misreadings a learner makes when the genre is ignored.
 *  Each `wrong` is a reasonable first reading, and the `why` says so. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre lectures sans le genre',
  errors: [
    { wrong: 'Le forum le dit : les repas de la cantine sont trop chers.',
      right: 'Un parent trouve que les repas de la cantine sont trop chers.',
      why: "Normal : c'est écrit, et on croit ce qu'on lit. Mais un forum, c'est une personne qui parle. EN: a forum is one person talking; report it as an opinion." },
    { wrong: 'Tous les forfaits coûtent 30 % de moins.',
      right: 'Les forfaits mobiles coûtent 30 % de moins avant dimanche, avec des conditions.',
      why: "Le -30 % est gros, et c'est voulu. Une publicité met la promesse en grand et les limites en petit. EN: adverts print the promise big and the limits small." },
    { wrong: "L'eau sera coupée toute la journée dans le quartier.",
      right: "L'eau sera coupée mardi, de 9 h à 16 h, sur une partie de la rue Saint-Jean.",
      why: "Tu as le sujet, c'est déjà bien. Mais dans un avis, les détails sont le message : le jour, l'heure, les numéros. EN: in a notice the details are the message." },
    { wrong: 'La ligne verte est en panne.',
      right: 'La ligne verte a été en panne ce matin, et le service a repris.',
      why: "Le mot panne saute aux yeux. Une brève raconte un fait daté : regarde l'heure et le temps du verbe. EN: a brief reports a dated fact; check the time and the tense." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['genre', 'source'],
};

/** USE IT: the summary opens by naming the genre. */
const A2_RESUME = pourTonResume('a2-resume', 'Ta première phrase dit le genre', [
  grp('Une première phrase qui situe', [
    it(E(1038), "le genre, puis l'essentiel"),
    it(E(1039), "le genre dit que c'est un avis personnel"),
    it(E(1040), "le genre dit que c'est un fait daté"),
  ], chk(
    "Pourquoi commencer par « C'est un message de forum » ?",
    ["Pour que ton ami sache que c'est l'avis d'une personne.", 'Pour écrire plus de mots.'], 0,
    'Le genre dit à ton ami quelle confiance donner au texte. EN: the genre tells your friend how far to trust the text.')),
  grp('Deux façons de commencer', [
    free('Un parent trouve la cantine trop chère.', 'A parent finds the canteen too expensive.', 'sans le genre'),
    it(E(1039), 'avec le genre'),
  ], chk(
    "Laquelle ton ami comprend-il le mieux, sans avoir lu le forum ?",
    ['la première', 'la seconde'], 1,
    "Avec « message de forum », ton ami sait d'où vient l'avis. EN: naming the genre tells your friend where the opinion comes from.")),
], ['genre', 'resume']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Avant la première ligne', 'Que regardes-tu avant de lire la première phrase ?',
    ['la source, la forme et le destinataire', 'le mot le plus long'], 0,
    'Trois indices, et tu sais déjà ce que le texte veut. EN: three clues, and you already know what the text wants.'),
  ctl('Le forum', '« Je trouve que... » dans un forum, c’est...',
    ['un fait vérifié', "l'avis d'une personne", 'une règle'], 1,
    "Je trouve que annonce une opinion. EN: je trouve que announces an opinion."),
  ctl('La publicité', 'Une publicité promet -30 %. Où est le vrai prix ?',
    ['dans le gros chiffre', 'dans les conditions', 'dans le titre'], 1,
    'Les conditions disent pour qui, sur quoi et jusqu’à quand. EN: the conditions say for whom, on what and until when.'),
], ['genre', 'source']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Quel texte ?',
    opener: {
      line: "Un avis, un forum, une publicité : ici tu apprends à savoir ce que tu lis avant la première ligne. EN: A notice, a forum post, an advert: here you learn what you are reading before the first line.",
      imageRef: 'lessons/strategies-lecture/act02.jpg',
    },
    sections: [],
    milestone: "Tu reconnais six genres de textes à leur source et à leur forme, et tu sais ce que chacun veut. EN: You can tell six kinds of text by source and layout, and what each one wants from you.",
    estScreens: 26, restPoints: ['a2-genres'],
  },
  sections: [A2_ECRAN, A2_GENRES, A2_INDICES, A2_ERREURS, A2_RESUME, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LE TITRE ANNONCE LA SUITE
 *
 *  TEXT: the top of an article only (title, standfirst, subheadings), then
 *  the whole article. MOVE: predict the article from its skeleton, then
 *  read to check. The act is the one place a text is read twice, because
 *  the second reading IS the proof that the strategy worked.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the skeleton. Every question is answerable without the body. */
const A3_SQUELETTE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-squelette',
  layer: 'core',
  questionsInModal: true,
  title: 'Seulement le haut de la page',
  frSub: 'Le titre, le chapeau, les intertitres',
  text: SQUELETTE_TEXT,
  glossary: [
    { word: 'mise sur', en: 'is betting on', note: 'Compte sur, fait confiance à.' },
    { word: 'sceptiques', en: 'doubtful', note: 'Ils ne sont pas sûrs que ce soit une bonne idée.' },
    { word: 'Un réseau continu', en: 'an unbroken network', note: 'Des pistes qui se suivent, sans trou.' },
  ],
  questions: [
    { q: "Sans lire l'article : de quoi va-t-il parler ?", a: "D'un plan pour le vélo à Lausanne : des pistes séparées des voitures, pour doubler les trajets d'ici 2030." },
    { q: "Qui risque de ne pas être d'accord ?", a: 'Les commerçants : le chapeau dit qu’ils restent sceptiques, et le dernier intertitre parle de leur crainte.' },
    { q: 'Que va dire la partie « Moins de places de stationnement » ?', a: 'Que la ville va enlever des places de parking pour faire de la place aux pistes.' },
    { q: "L'auteur est-il pour ou contre le plan ?", a: 'On ne le sait pas encore. Le chapeau donne les deux côtés : le plan et les doutes.' },
  ],
  audio: REC('rec-b1-37-squelette'),
  say: REFRAME,
  terms: ['chapeau'],
};

/** NOTICE THE MOVE: the four places to read before the rest. */
const A3_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a3-focus',
  layer: 'core',
  sheetId: 'sheet-avant',
  title: 'Quatre endroits à lire avant le reste',
  points: [
    'Le titre : le sujet, en quelques mots. EN: the headline gives the subject.',
    "Le chapeau : l'essentiel, en deux ou trois phrases. EN: the standfirst gives the gist.",
    "Les intertitres : le plan de l'article. EN: the subheadings give the plan.",
    "La première phrase de chaque paragraphe : son idée. EN: each first sentence gives that paragraph's idea.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chapeau', 'survoler'],
};

/** PRACTISE, on new headlines: what will the article do? */
const A3_PREDIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-predire',
  layer: 'core',
  size: 'lg',
  title: 'Devine la suite',
  frSub: 'Un titre, trois articles possibles',
  groups: [
    grp('Un titre avec un chiffre ou un fait', [
      it(E(1052), 'grimpent encore : ça monte'),
      it(E(1058), 'un sur trois : une enquête'),
      it(E(1055), '22 h : une information pratique'),
    ], chk(
      '« Logement : les loyers grimpent encore à Montréal. » L’article va surtout donner...',
      ['des chiffres sur la hausse des loyers', 'des conseils de décoration', 'une recette'], 0,
      'Grimpent et encore : une hausse, donc des chiffres et des comparaisons. EN: rising again, so expect figures.')),
    grp('Un titre avec une question', [
      it(E(1053), 'faut-il : un débat'),
      it(E(1054), 'rouvre : un événement'),
    ], chk(
      "« Faut-il interdire le téléphone à l'école ? » L’article va...",
      ['donner une seule réponse, tout de suite', 'présenter les deux côtés du débat', "raconter l'histoire du téléphone"], 1,
      'Un titre en question annonce un débat : des pour et des contre. EN: a question headline announces a debate.')),
    ctl('Un titre avec une image', '« Lausanne passe à la vitesse supérieure. » La ville va...',
      ['rouler plus vite en voiture', 'changer de maire', 'accélérer son projet'], 2,
      "Passer à la vitesse supérieure, c'est aller plus loin, plus vite. L'image ne parle pas de voitures. EN: moving up a gear means stepping things up."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chapeau'],
};

/** NOTICE, second screen: four headlines that do not simply state. */
const A3_TITRES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-titres',
  layer: 'core',
  title: 'Des titres qui jouent',
  examples: [
    ex(E(1053), "Une question : l'article va peser le pour et le contre."),
    ex(E(1056), "Une citation : tu entends un camp, pas encore l'auteur."),
    ex(E(1057), "Une image : le sens est dans l'expression, pas dans les mots."),
    ex(E(1058), "Un chiffre : l'article va l'expliquer et le comparer."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chapeau', 'source'],
};

/** MEET again: the whole article. The questions check the prediction. */
const A3_ARTICLE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-article',
  layer: 'core',
  questionsInModal: true,
  title: "L'article entier",
  frSub: 'Vérifie ta prédiction',
  text: VELO_TEXT,
  glossary: [
    { word: 'relie', en: 'connects', note: 'Met en lien, attache ensemble.' },
    { word: 'supprimera', en: 'will remove', note: 'Enlèvera, fera disparaître.' },
    { word: 'piétonnes', en: 'pedestrian-only', note: 'Pour les gens à pied, sans voitures.' },
    { word: 'craignent', en: 'fear', note: 'Ont peur de. Le verbe craindre.' },
  ],
  questions: [
    { q: 'Ta prédiction sur le stationnement était-elle juste ?', a: 'Oui : la ville supprimera environ 600 places de parking dans le centre.' },
    { q: "Quelle phrase de chaque partie t'a suffi ?", a: 'La première : les cyclistes roulent au milieu des voitures ; la ville supprimera des places ; les commerçants craignent de perdre des clients.' },
    { q: "Qu'as-tu appris que le chapeau ne disait pas ?", a: "Les détails : 600 places, des rues piétonnes le samedi, la peur de perdre les clients âgés, et l'étude promise." },
    { q: "Le chapeau t'avait-il trompé ?", a: "Non. Il donnait l'essentiel ; l'article ajoute les chiffres et les voix." },
  ],
  audio: REC('rec-b1-37-velo'),
  say: REFRAME,
  terms: ['chapeau', 'survoler'],
};

/** USE IT: the main idea of a summary comes from the standfirst. */
const A3_RESUME = pourTonResume('a3-resume', 'Ton idée principale vient du chapeau', [
  grp("L'idée, prise dans le chapeau", [
    it(E(1059), 'la source, le sujet, le chiffre'),
    it(E(1046), "la phrase du chapeau d'où elle vient"),
    it(E(1047), 'et la limite, pour plus tard'),
  ], chk(
    "Ta phrase d'idée principale reprend surtout...",
    ['le dernier paragraphe', 'le chapeau'], 1,
    "Le chapeau est déjà un résumé : tu le redis avec tes mots. EN: the standfirst is already a summary; say it again in your words.")),
  grp('Trop, ou juste assez', [
    free('Lausanne supprimera environ 600 places de parking et certaines rues deviendront piétonnes le samedi.', 'Lausanne will remove about 600 parking spaces and some streets will go pedestrian on Saturdays.', 'des détails'),
    it(E(1059), "l'idée"),
  ], chk(
    'Laquelle est une idée principale, et pas un détail ?',
    ['la première', 'la seconde'], 1,
    "Le parking est un moyen ; l'idée, c'est doubler les trajets à vélo. EN: parking is a means; the idea is doubling bike trips.")),
], ['chapeau', 'resume']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le chapeau', "Où est le chapeau d'un article ?",
    ['sous le titre', 'à la fin', 'dans la marge'], 0,
    'Juste sous le titre, souvent en gras. EN: right under the headline, often in bold.'),
  ctl('Un titre en question', 'Un titre est une question. Tu attends...',
    ['une seule réponse', 'un débat, avec deux côtés'], 1,
    'Une question annonce des pour et des contre. EN: a question announces arguments on both sides.'),
  ctl('Les intertitres', 'Les intertitres te donnent...',
    ["la conclusion de l'auteur", 'les chiffres', "le plan de l'article"], 2,
    "Un intertitre par partie : c'est la table des matières. EN: one subheading per part, like a table of contents."),
], ['chapeau', 'survoler']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Le titre annonce la suite',
    opener: {
      line: "Un titre, deux phrases, trois intertitres : ici tu devines l'article avant de le lire. EN: A headline, two sentences, three subheadings: here you guess the article before you read it.",
      imageRef: 'lessons/strategies-lecture/act03.jpg',
    },
    sections: [],
    milestone: "Tu prédis un article avec son titre, son chapeau et ses intertitres, puis tu vérifies. EN: You can predict an article from its headline, standfirst and subheadings, then check.",
    estScreens: 25, restPoints: ['a3-predire'],
  },
  sections: [A3_SQUELETTE, A3_FOCUS, A3_PREDIRE, A3_TITRES, A3_ARTICLE, A3_RESUME, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — SURVOLER, PUIS CHERCHER
 *
 *  TEXT: a municipal summer page dense with hours, days and prices, then a
 *  station tannoy. MOVE: the question picks the speed. Skim for the gist,
 *  scan for one detail, and never stop at the first figure found.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. One question skims, four scan, and the last asks how they did it. */
const A4_PAGE: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-page',
  layer: 'core',
  questionsInModal: true,
  title: 'Les bibliothèques en été',
  frSub: "Survole d'abord, cherche ensuite",
  text: BIBLIO_TEXT,
  glossary: [
    { word: 'frais de retard', en: 'late fees', note: 'Ce que tu paies quand tu rapportes un livre en retard.' },
    { word: 'amende', en: 'fine', note: "L'argent qu'on paie comme punition." },
    { word: 'usagers', en: 'users', note: 'Les personnes qui utilisent la bibliothèque.' },
    { word: 'au comptoir', en: 'at the desk', note: "Au bureau d'accueil, en personne." },
  ],
  questions: [
    { q: "Survole : en une phrase, qu'est-ce qui change cet été ?", a: "L'horaire d'été, et surtout la fin des frais de retard. Le mot « Nouveauté » te l'a montré." },
    { q: 'Repère : tu veux y aller jeudi à 19 h. C’est ouvert ?', a: 'Oui. Elles ferment à 18 h, sauf le jeudi : ce jour-là, à 20 h. Le mot « sauf » change tout.' },
    { q: "Repère : tu n'habites pas Gatineau. Combien coûte l'abonnement ?", a: '45 $ par année. Pour les résidents, il est gratuit.' },
    { q: 'Repère : ta fille a dix ans. Quand a lieu le club de lecture ?', a: 'Le mercredi à 14 h, à partir du 2 juillet, à la bibliothèque des Érables.' },
    { q: 'Pour la question du jeudi, as-tu lu tout le texte ?', a: "Non. Tu as cherché « jeudi », puis tu as lu la phrase autour. C'est ça, repérer." },
  ],
  audio: REC('rec-b1-37-biblio'),
  say: REFRAME,
  terms: ['survoler', 'reperage'],
};

/** NOTICE THE MOVE: two speeds, and the question that picks one. */
const A4_DEUX: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-deux',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-avant',
  title: 'Deux vitesses de lecture',
  frSub: 'Survoler, repérer',
  hint: 'Quatre cartes. Regarde ce que tes yeux cherchent.',
  audio: REC('rec-b1-37-vitesses'),
  say: REFRAME,
  terms: ['survoler', 'reperage'],
  cards: [
    {
      head: 'Survoler', label: 'pour le sens',
      fr: src(E(1067)).fr,
      sub: rsOf(E(1067)),
      body: "Tu passes vite sur tout le texte, sans t'arrêter : titre, début des paragraphes, mots qui reviennent. EN: a fast pass over everything, for the gist.",
    },
    {
      head: 'Repérer', label: 'pour un détail',
      fr: src(E(1068)).fr,
      sub: rsOf(E(1068)),
      body: 'Tu cherches une seule chose : une heure, un prix, un nom. Tes yeux sautent le reste. EN: you hunt for one thing and skip the rest.',
    },
    {
      head: 'La question choisit', label: 'avant de lire',
      fr: 'De quoi ça parle ? · À quelle heure ?',
      sub: '[duh kwa sa PARL · a keh-LUHR]',
      body: 'Une question générale : tu survoles. Une question précise : tu repères. EN: a general question means skim; a precise one means scan.',
    },
    {
      head: 'La phrase autour', label: 'le piège',
      fr: 'sauf le jeudi',
      sub: '[sohf luh zheu-DEE]',
      body: 'Le chiffre trouvé ne suffit pas. Lis la phrase entière : un sauf ou un seulement change la réponse. EN: read the whole sentence; sauf or seulement can change the answer.',
    },
  ],
};

/** PRACTISE, on new questions: which speed does each one need? */
const A4_QUEL: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-quel',
  layer: 'core',
  size: 'lg',
  title: 'Survoler ou repérer ?',
  frSub: 'Ta question décide',
  groups: [
    grp('Des questions générales', [
      it(E(1060), 'mon quartier : tout le texte'),
      it(E(1062), 'ce qui change : tout le texte'),
    ], chk(
      'Pour ces deux questions, tu...',
      ['survoles tout le texte', 'cherches un seul chiffre'], 0,
      "Tu ne sais pas où est la réponse : un survol te la montre. EN: you do not know where the answer is, so you skim.")),
    grp('Des questions précises', [
      it(E(1061), 'une heure'),
      it(E(1063), 'un prix'),
    ], chk(
      "Pour « Combien coûte l'abonnement ? », tes yeux cherchent...",
      ['un signe $ ou le mot gratuit', 'le titre', 'le premier paragraphe'], 0,
      "Un prix s'écrit avec un chiffre et un $, ou avec gratuit. EN: a price has a figure and a $, or the word gratuit.")),
    ctl('Et après', 'Tu as trouvé « 18 h » dans le texte. Tu t’arrêtes ?',
      ["Oui, c'est la réponse.", 'Non, je lis toute la phrase.'], 1,
      '« Elles ferment à 18 h, sauf le jeudi » : la fin de la phrase change tout. EN: the end of the sentence changes the answer.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['survoler', 'reperage'],
};

/** PRACTISE by ear: scanning a tannoy for the line that concerns you.
 *  `hideLines` because the questions are about what the ear caught. */
const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Au haut-parleur de la gare',
  frSub: 'Écoute seulement ce qui te concerne',
  lines: [
    ln(E(1072)), ln(E(1073)), ln(E(1074)), ln(E(1075)),
    ln(E(1076)), ln(E(1077)), ln(E(1078)), ln(E(1079)),
  ],
  questions: [
    { q: 'Tu vas à Québec. Quelle voie ?', opts: ['la voie 4', 'la voie 9', 'la voie 2'], correct: 0, why: '« Le train de 17 h 12 à destination de Québec partira de la voie 4. » EN: track 4.' },
    { q: "Ton ami va à Ottawa. Son train est-il à l'heure ?", opts: ['Oui', 'Non, vingt minutes de retard'], correct: 1, why: 'Un seul mot, retard, et tu as la réponse. EN: twenty minutes late.' },
    { q: 'Tu veux manger dans le train. Où vas-tu ?', opts: ['au guichet 2', 'à la porte 9', 'en voiture 6'], correct: 2, why: '« Le wagon-restaurant se trouve en voiture 6. » EN: the dining car is in coach 6.' },
    { q: 'Ton billet acheté en ligne ce matin est-il encore bon ce soir ?', opts: ['Non', 'Oui, toute la journée'], correct: 1, why: '« valables toute la journée ». EN: valid all day.' },
    { q: 'Quel quai demande de faire attention ?', opts: ['le quai 3', 'le quai 4', 'le quai 6'], correct: 0, why: '« Attention : le quai 3 est glissant. » EN: platform 3 is slippery.' },
  ],
  audio: REC('rec-b1-37-gare'),
  say: REFRAME,
  terms: ['reperage'],
};

/** PRACTISE, the trap, stepped. Each card's `promptSound` is the WRONG
 *  reading a hasty scanner reports; `fr` is what the text really says. */
const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges du repérage',
  rule: {
    title: 'Trouve le mot, puis lis toute la phrase',
    body: "Le premier chiffre trouvé n'est pas toujours la réponse. Un sauf, un seulement, un autre lieu peuvent la changer. Lis la phrase entière avant de répondre. EN: the first figure you find is not always the answer; read the whole sentence.",
  },
  cards: [
    { promptLabel: 'le premier chiffre', promptSound: 'Le jeudi, les bibliothèques ferment à 18 h.', fr: src(E(1064)).fr, ipa: ipaOf(E(1064)), tip: '18 h vient en premier, mais la phrase dit « sauf le jeudi ». EN: 18 h comes first, but the sentence says except Thursday.' },
    { promptLabel: 'le prix pour qui', promptSound: "L'abonnement coûte 45 $ pour tout le monde.", fr: src(E(1066)).fr, ipa: ipaOf(E(1066)), tip: '45 $, c’est pour les non-résidents. Repère aussi pour qui. EN: 45 dollars is for non-residents.' },
    { promptLabel: 'la mauvaise ligne', promptSound: 'Le train pour Ottawa part de la voie 4.', fr: src(E(1072)).fr, ipa: ipaOf(E(1072)), tip: 'La voie 4 est dans la phrase de Québec. Repère aussi la ville. EN: track 4 belongs to the Québec train.' },
    { promptLabel: 'la nouveauté oubliée', promptSound: 'Il faut payer une amende pour un livre en retard.', fr: src(E(1065)).fr, ipa: ipaOf(E(1065)), tip: "Nouveauté cette année : plus d'amende. Le mot nouveauté te le signalait. EN: nouveauté flagged the change." },
    { promptLabel: 'le mot seul', promptSound: "Le train pour Ottawa est à l'heure.", fr: src(E(1073)).fr, ipa: ipaOf(E(1073)), tip: "Tu as entendu Ottawa et tu as arrêté d'écouter. Retard venait juste après. EN: you stopped at Ottawa; retard came right after." },
    { promptLabel: 'le verbe oublié', promptSound: 'Le guichet 2 est ouvert ce soir.', fr: src(E(1076)).fr, ipa: ipaOf(E(1076)), tip: 'Le chiffre était juste, le verbe non. EN: the number was right, the verb was not.' },
  ],
  drill: [
    { promptSay: 'Le jeudi, les bibliothèques ferment à ... .', opts: ['18 h', '20 h'], correct: 1 },
    { promptSay: "Pour un résident, l'abonnement est ... .", opts: ['gratuit', 'à 45 $'], correct: 0 },
    { promptSay: 'Le train pour Québec part de la voie ... .', opts: ['4', '9', '6'], correct: 0 },
    { promptSay: 'Un livre rapporté en retard coûte ... .', opts: ['rien', 'une amende'], correct: 0 },
    { promptSay: 'Le train pour Ottawa a ... minutes de retard.', opts: ['dix', 'trente', 'vingt'], correct: 2 },
    { promptSay: 'Ce soir, le guichet 2 est ... .', opts: ['ouvert', 'fermé'], correct: 1 },
    { promptSay: 'Le club de lecture a lieu le ... .', opts: ['jeudi', 'samedi', 'mercredi'], correct: 2 },
    { promptSay: "La bibliothèque du Plateau est fermée jusqu'au ... juillet.", opts: ['28', '15'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le mot, puis la phrase' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le lecteur pressé a cru lire' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit détails', gate: true },
  ],
  audio: REC('rec-b1-37-piege-reperage'),
  say: REFRAME,
  terms: ['reperage'],
};

/** USE IT: a summary keeps the skim, not the scan. */
const A4_RESUME = pourTonResume('a4-resume', 'Le survol pour le résumé, pas les détails', [
  grp("Ce qu'un ami veut savoir", [
    it(E(1065), "la nouveauté : l'essentiel"),
    it(E(1066), 'un détail : utile à certains seulement'),
  ], chk(
    "Dans un résumé de l'avis des bibliothèques, que gardes-tu ?",
    ["toutes les heures d'ouverture", 'le nom de la bibliothèque des Érables', "l'horaire d'été et la fin des amendes"], 2,
    'Un résumé garde ce qui vaut pour tout le monde. Les heures, ton ami les repère lui-même. EN: a summary keeps what matters to everyone.')),
  grp('Deux résumés', [
    free("Cet été, les bibliothèques de Gatineau changent d'horaire et n'ont plus de frais de retard.", 'This summer the Gatineau libraries change their hours and no longer charge late fees.', "l'essentiel"),
    free('Les bibliothèques ouvrent à 10 h du mardi au samedi, ferment à 18 h sauf le jeudi à 20 h, et coûtent 45 $ aux non-résidents.', 'The libraries open at 10 from Tuesday to Saturday, close at 6 except Thursday at 8, and cost 45 dollars for non-residents.', 'une liste de détails'),
  ], chk(
    'Lequel est un résumé, et pas une copie des détails ?',
    ['le premier', 'le second'], 0,
    "Le premier dit ce qui change en une phrase. Le second recopie l'horaire. EN: the first says what changes in one sentence.")),
], ['survoler', 'resume']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La question', "Tu cherches le prix d'un billet. Tu...",
    ['repères le chiffre', 'survoles tout le texte'], 0,
    'Une question précise : tes yeux cherchent une seule chose. EN: a precise question means scan.'),
  ctl('Le piège', 'Tu as trouvé le chiffre. Et ensuite ?',
    ['Je réponds tout de suite.', 'Je cherche un autre texte.', 'Je lis toute la phrase.'], 2,
    'Un sauf, un seulement ou un autre lieu peuvent changer la réponse. EN: sauf or seulement can change the answer.'),
  ctl('Le survol', 'Survoler, ça sert à...',
    ["avoir l'idée générale", "trouver l'heure exacte"], 0,
    "Vite, sur tout le texte, pour le sens. EN: fast, over the whole text, for the gist."),
], ['survoler', 'reperage']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Survoler, puis chercher',
    opener: {
      line: "Une page pleine d'heures et de prix : ici tu apprends à lire vite, puis à chercher juste. EN: A page full of times and prices: here you learn to read fast, then to search precisely.",
      imageRef: 'lessons/strategies-lecture/act04.jpg',
    },
    sections: [],
    milestone: "Tu survoles pour le sens et tu repères un détail, en lisant toute la phrase autour. EN: You can skim for meaning and scan for a detail, reading the whole sentence around it.",
    estScreens: 37, restPoints: ['a4-quel', 'a4-piege'],
  },
  sections: [A4_PAGE, A4_DEUX, A4_QUEL, A4_ECOUTE, A4_PIEGE, A4_RESUME, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LES CHIFFRES QUI COMPTENT
 *
 *  TEXT: a survey brief where every sentence carries a number. MOVE: read
 *  the number WITH the words around it (en hausse, en baisse, près de, sur
 *  trois, soit, d'ici). a1.27 gave septante and nonante, a1.28 gave
 *  milliard and the decimal comma: both are cited, and the new layer here
 *  is what a text DOES with a number.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Five questions, all answered by a number and its neighbours. */
const A5_BREVE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-breve',
  layer: 'core',
  questionsInModal: true,
  title: 'Les Québécois et la lecture',
  frSub: 'Une enquête en chiffres',
  text: LECTURE_TEXT,
  glossary: [
    { word: 'AUTREMENT', en: 'differently', note: "D'une autre façon." },
    { word: 'soit', en: 'that is, in other words', note: 'Annonce la même information, dite autrement.' },
    { word: 'menée auprès de', en: 'carried out among', note: 'Les personnes à qui on a posé les questions.' },
    { word: 'vise', en: 'is aiming for', note: 'A pour objectif.' },
  ],
  questions: [
    { q: "Les Québécois lisent-ils plus ou moins de livres qu'il y a dix ans ?", a: 'Moins : 41 % contre 52 %. La baisse est de onze points.' },
    { q: 'Et sur écran ?', a: 'Plus : la lecture sur écran est en hausse. « En revanche » annonçait le contraire de la baisse.' },
    { q: "« Près d'un lecteur sur trois » : c'est environ combien ?", a: "Un peu moins d'un tiers, autour de 30 %. Près de veut dire presque." },
    { q: "« 27 %, soit deux fois plus qu'en 2019 » : combien en 2019 ?", a: 'Environ 13 ou 14 %. Soit annonce la même chose, dite autrement.' },
    { q: 'Que veut le gouvernement, et pour quand ?', a: "Un taux de lecture de 50 %, d'ici 2030 : avant 2030." },
  ],
  audio: REC('rec-b1-37-enquete'),
  say: REFRAME,
  terms: ['reperage', 'source'],
};

/** NOTICE THE MOVE: four things the words around a number do. */
const A5_CHIFFRES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-chiffres',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-preuves',
  title: 'Ce que disent les chiffres',
  frSub: 'Monter, descendre, une part, une date',
  hint: 'Quatre cartes. Regarde les petits mots autour du chiffre.',
  audio: REC('rec-b1-37-chiffres'),
  say: REFRAME,
  terms: ['reperage', 'source'],
  cards: [
    {
      head: 'Monter ou descendre', label: 'le sens du chiffre',
      fr: 'en hausse de 8 % · en baisse de 2 %',
      sub: '[ahⁿ OSS duh WEET poor SAHⁿ · ahⁿ BESS duh DEU poor SAHⁿ]',
      body: 'Le chiffre seul ne dit rien. En hausse, en baisse, grimper, doubler : ces mots disent dans quel sens il va. EN: the words around the number say which way it moves.',
    },
    {
      head: 'Une part du groupe', label: 'un sur trois',
      fr: 'un sur trois · près de la moitié',
      sub: '[uhⁿ sür TRWA · preh duh la mwa-TYAY]',
      body: "Un sur trois, c'est un tiers. Près de la moitié, c'est un peu moins de 50 %. EN: one in three is a third; près de means just under.",
    },
    {
      head: 'La virgule et l’espace', label: Cap(GRANDS_NOMBRES_REF),
      fr: '1,5 % · 2 500 · un milliard',
      sub: '[uhⁿ veer-gül SEHⁿK poor SAHⁿ · deu meel sehⁿ SAHⁿ · uhⁿ mee-LYAR]',
      body: "La virgule remplace le point anglais, et l'espace sépare les milliers. Un billion français, c'est mille milliards. EN: decimal comma, a space for thousands, and un billion is a thousand milliards.",
    },
    {
      head: 'Avant ou depuis', label: 'les dates',
      fr: "d'ici 2030 · depuis 2014",
      sub: '[dee-see deu meel TRAHⁿT · duh-pwee deu meel ka-TORZ]',
      body: "D'ici regarde vers l'avenir : avant cette date. Depuis part du passé et arrive à aujourd'hui. EN: d'ici looks ahead (by); depuis runs from the past to now (since).",
    },
  ],
};

/** PRACTISE by ear: a francophone radio, septante and nonante included.
 *  `hideLines` because the questions are about what the ear caught. */
const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Les chiffres à la radio',
  frSub: 'De Bruxelles à Genève',
  lines: [
    ln(E(1085)), ln(E(1086)), ln(E(1087)), ln(E(1088)),
    ln(E(1089)), ln(E(1090)), ln(E(1091)), ln(E(1092)),
  ],
  questions: [
    { q: 'Le chômage monte ou descend ?', opts: ['il descend', 'il monte'], correct: 0, why: 'De 7,2 % à 6,8 % : il descend. Écoute le mot virgule. EN: from 7.2 to 6.8, so down.' },
    { q: 'Combien des habitants lisent un journal en ligne ?', opts: ['17 %', '70 %', '7 %'], correct: 1, why: `Septante, c'est soixante-dix en Belgique et en Suisse, comme dans ${NOMBRES21_REF}. EN: septante is seventy.` },
    { q: 'Combien coûtera le billet ?', opts: ['19 euros', '99 euros', '90 euros'], correct: 2, why: "Nonante, c'est quatre-vingt-dix. EN: nonante is ninety." },
    { q: 'Les inscriptions ferment quand ?', opts: ['le 1er mai', 'le 1er mars'], correct: 1, why: '« Le premier mars. » EN: the first of March.' },
    { q: 'Deux milliards de dollars, en anglais, c’est...', opts: ['two billion', 'two million', 'two trillion'], correct: 0, why: "Un milliard, c'est mille millions : un billion anglais. EN: a milliard is an English billion." },
  ],
  audio: REC('rec-b1-37-radio-chiffres'),
  say: REFRAME,
  terms: ['reperage'],
};

/** PRACTISE: four numbers an English reader gets wrong, each for a reason. */
const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre chiffres mal lus',
  errors: [
    { wrong: 'Le budget est de deux billions de dollars.',
      right: src(E(1092)).fr,
      why: "Normal : billion ressemble à l'anglais. Mais un billion français vaut mille milliards. EN: an English billion is un milliard in French." },
    { wrong: 'Le taux de chômage est passé de 7.2 % à 6.8 %.',
      right: src(E(1085)).fr,
      why: "En anglais, le point est normal. En français, c'est une virgule : 7,2 %. EN: French writes a decimal comma." },
    { wrong: 'Depuis 2030, le taux de lecture est de 50 %.',
      right: src(E(1084)).fr,
      why: "D'ici et depuis parlent tous les deux du temps. D'ici regarde devant : c'est un objectif, pas un fait. EN: d'ici looks ahead: a target, not a fact." },
    { wrong: 'La lecture de livres a baissé de onze pour cent.',
      right: src(E(1080)).fr,
      why: "De 52 % à 41 %, c'est onze points, pas onze pour cent. Un journaliste fait la différence. EN: 52 to 41 is eleven points, not eleven per cent." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reperage', 'source'],
};

/** USE IT: one number in a summary, the one that carries the idea. */
const A5_RESUME = pourTonResume('a5-resume', 'Un seul chiffre, celui qui compte', [
  grp("Le chiffre qui porte l'idée", [
    it(E(1098), "l'idée, sans chiffre"),
    it(E(1099), 'le chiffre qui la prouve'),
    it(E(1080), 'la baisse, dite en points'),
  ], chk(
    'Combien de chiffres mets-tu dans un résumé de cinquante mots ?',
    ['un ou deux, ceux qui comptent', 'tous ceux du texte'], 0,
    "Un chiffre prouve l'idée ; dix chiffres la cachent. EN: one number proves the idea; ten numbers hide it.")),
  grp('Deux façons de le dire', [
    free("41 % des adultes lisent un livre par mois contre 52 % il y a dix ans, 27 % des 18 à 34 ans écoutent des livres audio, et l'enquête a interrogé 2 500 personnes.", '41% of adults read a book a month against 52% ten years ago, 27% of 18 to 34 year olds listen to audiobooks, and the survey asked 2,500 people.', 'tous les chiffres'),
    it(E(1098), "le sens, et un chiffre si ton ami le demande"),
  ], chk(
    'Laquelle ton ami retient-il ?',
    ['la première', 'la seconde'], 1,
    "La seconde donne le sens des chiffres : moins de livres, plus d'écrans. EN: the second gives what the numbers mean.")),
], ['reperage', 'resume']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le milliard', '« Un milliard », en anglais, c’est...',
    ['a billion', 'a million', 'a trillion'], 0,
    'Mille millions. Le billion français est mille fois plus grand. EN: a thousand million.'),
  ctl('La virgule', '« 1,5 % », c’est...',
    ['quinze pour cent', 'un et demi pour cent'], 1,
    'La virgule française est le point anglais. EN: the French comma is the English decimal point.'),
  ctl("D'ici", "« D'ici 2030 » veut dire...",
    ['depuis 2030', 'avant 2030', 'en 2030 exactement'], 1,
    "Un objectif, à atteindre avant cette date. EN: a target to reach by that date."),
], ['reperage', 'source']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Les chiffres qui comptent',
    opener: {
      line: "Un sur trois, en baisse de onze points, d'ici 2030 : ici les chiffres te racontent l'histoire. EN: One in three, down eleven points, by 2030: here the numbers tell you the story.",
      imageRef: 'lessons/strategies-lecture/act05.jpg',
    },
    sections: [],
    milestone: "Tu lis un chiffre avec les mots autour : dans quel sens il va, pour qui, et jusqu'à quand. EN: You can read a number with the words around it: which way it moves, for whom, and by when.",
    estScreens: 26, restPoints: ['a5-chiffres'],
  },
  sections: [A5_BREVE, A5_CHIFFRES, A5_ECOUTE, A5_ERREURS, A5_RESUME, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — UN MOT INCONNU
 *
 *  TEXT: a Liège student forum post with seven words above B1. MOVE: four
 *  doors before the dictionary (the sentence around, a nearby clue, a known
 *  part, an English cousin) and the one door that lies (the false friend).
 *  The longest act, because it is three moves on one kind of problem.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Every question is a word, and every answer names the door used. */
const A6_FORUM: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-forum',
  layer: 'core',
  questionsInModal: true,
  title: 'Un kot pour la rentrée',
  frSub: 'Des mots à deviner, sans dictionnaire',
  text: FORUM_TEXT,
  glossary: [
    { word: 'garantie', en: 'deposit', note: 'Une somme laissée au propriétaire, rendue à la fin.' },
    { word: 'colocation', en: 'flatshare', note: 'Un appartement partagé entre plusieurs personnes.' },
    { word: 'réaménagement', en: 'redevelopment', note: 'Les travaux qui transforment un quartier.' },
    { word: 'Outremeuse', en: 'Outremeuse', note: 'Un quartier de Liège, de l’autre côté de la Meuse.' },
  ],
  questions: [
    { q: "Qu'est-ce qu'un kot ? Tu n'as jamais vu ce mot.", a: "Une chambre d'étudiant : « près de l'université », « 450 euros par mois pour neuf mètres carrés ». Le mot est belge, et la phrase suffit." },
    { q: "« C'est épuisant » : bien, ou pas bien ?", a: 'Pas bien : deux heures de trajet par jour. Épuisant veut dire très fatigant.' },
    { q: '« Inabordables » : quels morceaux reconnais-tu ?', a: "in- (pas), abord, -able (qu'on peut) : pas abordable, trop cher. Le prix juste après le confirme." },
    { q: '« Actuellement, je loge chez mes parents » : Julie veut-elle dire actually ?', a: "Non : actuellement veut dire en ce moment. C'est un faux ami." },
    { q: '« Éventuellement, je pourrais partager » : est-ce sûr ?', a: 'Non : éventuellement veut dire peut-être. Je pourrais le confirme.' },
  ],
  audio: REC('rec-b1-37-forum'),
  say: REFRAME,
  terms: ['contexte', 'famille'],
};

/** NOTICE THE MOVE: four doors, in the order to try them. */
const A6_PORTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-portes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-mots',
  title: 'Quatre portes avant le dictionnaire',
  frSub: 'Un mot inconnu a des voisins',
  hint: 'Quatre cartes, quatre portes. Essaie-les dans cet ordre.',
  audio: REC('rec-b1-37-portes'),
  say: REFRAME,
  terms: ['contexte', 'famille', 'fauxami'],
  cards: [
    {
      head: 'La phrase autour', label: 'le contexte',
      fr: src(E(1103)).fr,
      sub: rsOf(E(1103)),
      body: '« Plus une seule place » : la salle était pleine. La suite de la phrase explique souvent le mot. EN: the rest of the sentence often explains the word.',
    },
    {
      head: 'Un indice tout près', label: 'un chiffre, un mais',
      fr: src(E(1101)).fr,
      sub: rsOf(E(1101)),
      body: 'Deux heures par jour : épuisant ne peut pas être agréable. Un chiffre, un mais, un exemple aident. EN: a number, a but or an example nearby helps.',
    },
    {
      head: 'Le morceau connu', label: Cap(ADVERBES_REF),
      fr: 'ré · aménage · ment',
      sub: '[ray · a-may-NAZH · MAHⁿ]',
      body: `« ${A217_REFRAME} » En français : « ${A217_REFRAME_FR} » Enlève ré- et -ment : il reste aménager. EN: strip ré- and -ment and aménager is left.`,
    },
    {
      head: 'Le cousin anglais', label: 'et le faux ami',
      fr: 'la garantie · actuellement',
      sub: '[la ga-rahⁿ-TEE · ak-twel-MAHⁿ]',
      body: "Garantie ressemble à guarantee, et c'est presque ça. Actuellement ressemble à actually, et c'est faux. Vérifie avec la phrase. EN: a cousin helps, a false friend lies.",
    },
  ],
};

/** PRACTISE, on new sentences: guess, then check with the sentence. */
const A6_DEVINER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-deviner',
  layer: 'core',
  size: 'lg',
  title: 'Devine, puis vérifie',
  frSub: 'La phrase et le mot',
  groups: [
    grp('Par la phrase autour', [
      it(E(1103), 'bondée'),
      it(E(1104), 'trempés'),
      it(E(1105), 'déniché'),
    ], chk(
      '« Nous sommes rentrés trempés » après la pluie. Trempés veut dire...',
      ['très mouillés', 'très fatigués', 'très en retard'], 0,
      "Il pleuvait fort : la phrase ne laisse qu'un sens. EN: it was pouring, so soaked.")),
    grp('Par le morceau connu', [
      it(E(1106), 'ré + aménage + ment'),
      it(E(1108), 're + logées'),
      it(E(1109), 'dés + activé'),
      it(E(1110), 'im + payés'),
    ], chk(
      '« Les loyers impayés » : ce sont des loyers...',
      ['payés en avance', 'pas payés'], 1,
      'im- veut dire pas : impayé, pas payé. EN: im- means not.')),
    ctl('Par le cousin anglais', '« Le propriétaire exige trois mois de garantie. » La garantie, c’est...',
      ["de l'argent laissé au propriétaire", 'la clé de la porte'], 0,
      'Comme guarantee : une somme qui garantit que tu paieras. EN: a deposit, close to guarantee.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contexte', 'famille'],
};

/** NOTICE, as a lookup: six parts that open long words. */
const A6_MORCEAUX: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-morceaux',
  layer: 'core',
  sheetId: 'sheet-mots',
  title: 'Six morceaux de mots',
  cols: ['Morceau', 'Il veut dire', 'Exemple'],
  rows: [
    { cells: ['ré-, re-', 'encore', 'réaménager'], say: src(E(1107)).fr,
      detail: { title: 'ré-', body: "Refaire, c'est faire encore. Réaménager, c'est aménager de nouveau. EN: re- means again.", say: src(E(1108)).fr } },
    { cells: ['dé-, dés-', 'défaire', 'désactiver'], say: src(E(1109)).fr,
      detail: { title: 'dé-', body: 'Le contraire du verbe : activer, désactiver ; faire, défaire. EN: dé- undoes the verb.', say: "Il faut désactiver l'alarme en entrant." } },
    { cells: ['in-, im-', 'pas', 'impayé'], say: src(E(1110)).fr,
      detail: { title: 'in-', body: 'Devant un adjectif, in- dit le contraire : abordable, inabordable. Devant p ou b, il devient im-. EN: in- negates; im- before p and b.', say: src(E(1102)).fr } },
    { cells: ['-able', "qu'on peut", 'abordable'], say: 'Ce loyer est abordable pour un étudiant.',
      detail: { title: '-able', body: "Un mot en -able dit ce qu'on peut faire : valable, lavable, abordable. EN: -able means it can be done.", say: src(E(1078)).fr } },
    { cells: ['-ment', 'une action, ou une manière', 'le réaménagement'], say: src(E(1106)).fr,
      detail: { title: '-ment', body: `Un nom en -ment dit l'action : le réaménagement. Un adverbe en -ment dit la manière, comme dans ${ADVERBES_REF}. EN: a -ment noun names the action; a -ment adverb names the manner.`, say: src(E(1116)).fr } },
    { cells: ['-tion', 'souvent le mot anglais', 'la colocation'], say: src(E(1112)).fr,
      detail: { title: '-tion', body: 'Beaucoup de mots en -tion existent en anglais : consultation, collaboration. Vérifie le sens avec la phrase. EN: many -tion words exist in English; check the meaning anyway.', say: src(E(1003)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille'],
};

/** PRACTISE, the trap, stepped. `promptSound` is the WRONG use a reader who
 *  trusts the English makes; `fr` is the sentence that says what they meant. */
const A6_FAUXAMIS: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-fauxamis',
  layer: 'core',
  swipe: true,
  sheetId: 'sheet-mots',
  title: 'Six faux amis',
  rule: {
    title: "Il ressemble à l'anglais, et il ment",
    body: "Si le sens anglais rend la phrase bizarre, c'est un faux ami. Actuellement veut dire en ce moment. Éventuellement veut dire peut-être. EN: if the English meaning makes the sentence odd, it is a false friend.",
  },
  cards: [
    { promptLabel: 'actuellement, pas actually', promptSound: "Actuellement, je ne suis pas d'accord avec toi.", fr: src(E(1117)).fr, ipa: ipaOf(E(1117)), tip: 'Actually se dit en fait. Actuellement veut dire en ce moment. EN: actually is en fait.' },
    { promptLabel: 'éventuellement, pas eventually', promptSound: "J'ai éventuellement trouvé un kot.", fr: src(E(1119)).fr, ipa: ipaOf(E(1119)), tip: 'Eventually se dit finalement. Éventuellement veut dire peut-être. EN: eventually is finalement.' },
    { promptLabel: 'la librairie, pas library', promptSound: "J'ai emprunté ce livre à la librairie.", fr: src(E(1120)).fr, ipa: ipaOf(E(1120)), tip: 'On emprunte à la bibliothèque. À la librairie, on achète. EN: a librairie is a bookshop.' },
    { promptLabel: 'assister, pas assist', promptSound: "Je peux t'assister avec tes valises.", fr: src(E(1123)).fr, ipa: ipaOf(E(1123)), tip: "Assister à, c'est être présent. Pour to assist, dis aider. EN: to assist is aider." },
    { promptLabel: 'sensible, pas sensible', promptSound: "C'est une décision sensible, tout le monde est d'accord.", fr: src(E(1125)).fr, ipa: ipaOf(E(1125)), tip: "Sensible veut dire sensitive. L'anglais sensible se dit raisonnable. EN: English sensible is raisonnable." },
    { promptLabel: 'la monnaie, pas money', promptSound: "Je n'ai plus de monnaie sur mon compte.", fr: src(E(1127)).fr, ipa: ipaOf(E(1127)), tip: "La monnaie, ce sont les pièces. Sur un compte, c'est de l'argent. EN: money is l'argent; la monnaie is change." },
  ],
  drill: [
    { promptSay: 'Actuellement veut dire ... .', opts: ['en fait', 'en ce moment'], correct: 1 },
    { promptSay: 'Éventuellement veut dire ... .', opts: ['peut-être', 'finalement'], correct: 0 },
    { promptSay: 'On emprunte un livre à la ... .', opts: ['librairie', 'bibliothèque'], correct: 1 },
    { promptSay: "J'ai ... à la réunion de ce matin.", opts: ['assisté', 'aidé'], correct: 0 },
    { promptSay: 'Il est très ... au bruit.', opts: ['raisonnable', 'sensible', 'actuel'], correct: 1 },
    { promptSay: 'Je paie le parcomètre avec de la ... .', opts: ['location', 'monnaie'], correct: 1 },
    { promptSay: 'Pour dire actually, tu dis ... .', opts: ['en fait', 'actuellement', 'éventuellement'], correct: 0 },
    { promptSay: 'Pour dire eventually, tu dis ... .', opts: ['éventuellement', 'finalement'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: "Il ressemble à l'anglais" },
    { label: 'Six cartes', kind: 'cards', title: "Ce que l'anglais a fait dire" },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit mots', gate: true },
  ],
  audio: REC('rec-b1-37-faux-amis'),
  say: REFRAME,
  terms: ['fauxami'],
};

/** Consolidation, as answers: English front, French back, no EN tail. */
const A6_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a6-cartes',
  layer: 'core',
  title: 'Huit faux amis à retourner',
  cards: [
    { front: 'currently, at the moment', back: 'actuellement', say: src(E(1116)).fr },
    { front: 'actually, in fact', back: 'en fait', say: src(E(1117)).fr },
    { front: 'possibly, maybe', back: 'éventuellement', say: src(E(1118)).fr },
    { front: 'eventually, in the end', back: 'finalement', say: src(E(1119)).fr },
    { front: 'bookshop', back: 'la librairie', say: src(E(1121)).fr },
    { front: 'library', back: 'la bibliothèque', say: src(E(1120)).fr },
    { front: 'to attend', back: 'assister à', say: src(E(1122)).fr },
    { front: 'sensitive', back: 'sensible', say: src(E(1124)).fr },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxami'],
};

/** USE IT: in a summary, the plain word wins, and a false friend betrays. */
const A6_RESUME = pourTonResume('a6-resume', 'Un mot simple pour ton ami', [
  grp('Le mot rare, ou le mot de tous les jours', [
    it(E(1128), 'le mot belge, expliqué'),
    it(E(1129), 'inabordables, dit simplement'),
  ], chk(
    'Ton ami ne connaît pas « inabordables ». Tu écris...',
    ['« inabordables »', '« trop chers »'], 1,
    "Tu as deviné le mot ; ton ami, lui, n'a pas lu le texte. Donne-lui le mot simple. EN: give your friend the plain word.")),
  grp('Le faux ami, dans ton résumé', [
    free('Julie cherche actuellement un kot.', 'Julie is currently looking for a kot.', 'en ce moment'),
    free('Julie cherche en fait un kot.', 'Julie is actually looking for a kot.', 'en réalité'),
  ], chk(
    'Julie cherche un kot en ce moment. Quelle phrase le dit ?',
    ['la première', 'la seconde'], 0,
    'Actuellement, en ce moment. En fait dit autre chose : en réalité. EN: actuellement means right now.')),
], ['contexte', 'resume']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La première porte', "Devant un mot inconnu, tu regardes d'abord...",
    ['le dictionnaire', 'la phrase autour', 'le titre'], 1,
    'La phrase autour explique souvent le mot. EN: the sentence around it often explains the word.'),
  ctl('Le morceau', '« Désactivé » : que fait dés- ?',
    ['il dit le contraire', 'il dit encore'], 0,
    'Désactiver, c’est le contraire d’activer. EN: dés- undoes the verb.'),
  ctl('Le faux ami', '« Éventuellement, je viendrai. » C’est...',
    ['sûr', 'possible', 'fini'], 1,
    'Éventuellement veut dire peut-être. EN: éventuellement means possibly.'),
], ['contexte', 'fauxami']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Un mot inconnu',
    opener: {
      line: "Kot, épuisant, inabordable, actuellement : ici tu devines un mot avant d'ouvrir le dictionnaire. EN: Kot, épuisant, inabordable, actuellement: here you guess a word before you open the dictionary.",
      imageRef: 'lessons/strategies-lecture/act06.jpg',
    },
    sections: [],
    milestone: "Tu devines un mot par sa phrase, ses morceaux et son cousin anglais, et tu repères le faux ami. EN: You can guess a word from its sentence, its parts and its English cousin, and spot the false friend.",
    estScreens: 46, restPoints: ['a6-portes', 'a6-morceaux', 'a6-cartes'],
  },
  sections: [A6_FORUM, A6_PORTES, A6_DEVINER, A6_MORCEAUX, A6_FAUXAMIS, A6_CARTES, A6_RESUME, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LES PANNEAUX DU TEXTE
 *
 *  TEXT: an opinion column whose argument can be read off its signposts.
 *  MOVE: connectors as SIGNPOSTS (the text adds, turns or concludes). b1.30
 *  to b1.32 own them as grammar and are being written in parallel: they are
 *  cited by number, and no mission here asks the learner to build a clause.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The first question is answered from the signposts alone. */
const A7_CHRONIQUE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-chronique',
  layer: 'core',
  questionsInModal: true,
  title: 'La semaine de quatre jours',
  frSub: 'Lis les panneaux, puis le reste',
  text: CHRONIQUE_TEXT,
  glossary: [
    { word: 'efficaces', en: 'efficient', note: 'Qui font bien leur travail, sans perdre de temps.' },
    { word: 'urgence', en: 'emergency department', note: "Le service de l'hôpital ouvert jour et nuit." },
    { word: 'contraintes', en: 'constraints', note: 'Des choses qui limitent ce que tu peux faire.' },
    { word: 'convient', en: 'suits', note: 'Est bon pour quelqu’un.' },
  ],
  questions: [
    { q: "Lis seulement les phrases après d'abord, pourtant et bref. L'auteur est pour ou contre ?", a: "Pour, avec des limites. D'abord des résultats encourageants, pourtant de la prudence, bref : oui, mais pas partout. Le titre le disait déjà." },
    { q: 'Quel mot fait tourner le texte ?', a: 'Pourtant. Avant lui, les arguments pour ; après lui, les limites.' },
    { q: '« De plus » et « par ailleurs » ajoutent dans quel camp ?', a: "De plus ajoute un argument pour : moins d'absences. Par ailleurs ajoute une limite : les parents." },
    { q: 'Que prépare « bref » ?', a: "La conclusion de l'auteur : la semaine de quatre jours peut marcher, à condition de l'adapter à chaque métier." },
  ],
  audio: REC('rec-b1-37-chronique'),
  say: REFRAME,
  terms: ['connecteur'],
};

/** NOTICE THE MOVE: three kinds of signpost, and the reader's reason. */
const A7_PANNEAUX: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-panneaux',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-fil',
  title: 'Trois sortes de panneaux',
  frSub: 'Ajouter, tourner, conclure',
  hint: 'Quatre cartes. Regarde ce que chaque panneau annonce.',
  audio: REC('rec-b1-37-panneaux'),
  say: REFRAME,
  terms: ['connecteur'],
  cards: [
    {
      head: 'Ajouter', label: "d'abord, de plus, par ailleurs",
      fr: src(E(1131)).fr,
      sub: rsOf(E(1131)),
      body: 'Le texte continue dans le même sens. Tu peux lire plus vite : pas de surprise. EN: the text goes on the same way; no surprise ahead.',
    },
    {
      head: 'Tourner', label: 'pourtant, en revanche, mais',
      fr: src(E(1132)).fr,
      sub: rsOf(E(1132)),
      body: "Le texte change de direction. Ralentis : la phrase qui suit porte souvent l'idée de l'auteur. EN: the text turns; slow down, the next sentence often carries the point.",
    },
    {
      head: 'Conclure', label: 'donc, bref, ainsi',
      fr: src(E(1135)).fr,
      sub: rsOf(E(1135)),
      body: "Voilà l'avis de l'auteur, en une phrase. Si tu es pressé, lis au moins celle-ci. EN: this is the author's view in one sentence.",
    },
    {
      head: 'Lire, pas écrire', label: Cap(CONNECTEURS_REF),
      fr: 'pourtant · en revanche · donc',
      sub: '[poor-TAHⁿ · ahⁿ ruh-VAHⁿSH · DOHⁿK]',
      body: `${Cap(CONNECTEURS_REF)} t'apprennent à construire ces phrases. Ici, tu t'en sers comme panneaux, pour lire plus vite. EN: lessons 30 to 32 teach you to write with them; here you read by them.`,
    },
  ],
};

/** PRACTISE, on new sentences: what does the signpost promise next? */
const A7_SUITE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-suite',
  layer: 'core',
  size: 'lg',
  title: "Qu'est-ce qui vient après ?",
  frSub: 'Le panneau annonce la suite',
  groups: [
    grp('Après un panneau qui tourne', [
      it(E(1137), 'pourtant : une surprise'),
      it(E(1138), "en revanche : l'autre côté"),
      it(E(1133), "en revanche : là où c'est plus dur"),
    ], chk(
      '« Le loyer est cher. Pourtant, ... » Que peut-il suivre ?',
      ['personne ne veut partir', 'beaucoup de gens partent'], 0,
      "Pourtant annonce le contraire de ce qu'on attend : c'est cher, et on reste quand même. EN: pourtant announces the unexpected.")),
    grp('Après un panneau qui ajoute ou conclut', [
      it(E(1139), 'de plus : encore un avantage'),
      it(E(1140), 'donc : la conséquence'),
      it(E(1136), "donc : l'avis de l'auteur"),
      it('fr.a2.cafe.060', "donc, à l'oral aussi"),
    ], chk(
      '« Les essais sont encourageants. Il faut donc... » La suite va...',
      ['arrêter', 'changer de sujet', 'continuer'], 2,
      'Donc tire la conséquence : des essais encourageants, on continue. EN: donc draws the consequence.')),
    ctl('Sans le panneau', '« Le quartier est bruyant. ... il est très bien situé. » Quel panneau manque ?',
      ['de plus', 'en revanche'], 1,
      'Bruyant, puis bien situé : un défaut, puis une qualité. Le texte tourne. EN: a drawback, then an advantage: the text turns.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur'],
};

/** PRACTISE: four signposts misread, each for a reason an English reader
 *  would have. Two of them are false friends in disguise. */
const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre panneaux mal lus',
  errors: [
    { wrong: '« Pourtant » annonce une raison, comme « pour ».',
      right: "« Pourtant » annonce une surprise : le contraire de ce qu'on attend.",
      why: 'Normal : pourtant commence par pour. Mais le mot entier veut dire yet, however. EN: pourtant starts like pour and means however.' },
    { wrong: "« En revanche » : l'auteur se venge.",
      right: "« En revanche » : l'auteur passe à l'autre côté.",
      why: 'Revanche fait penser à revenge : un faux ami de plus. En revanche veut dire on the other hand. EN: en revanche means on the other hand.' },
    { wrong: '« Bref » annonce un petit détail.',
      right: '« Bref » annonce la conclusion, en peu de mots.',
      why: 'Bref veut dire court, alors on attend un détail. En fait, il résume tout. EN: bref means in short: the conclusion.' },
    { wrong: '« Par ailleurs » parle d’un autre endroit.',
      right: '« Par ailleurs » ajoute un autre argument.',
      why: 'Ailleurs veut dire dans un autre lieu, donc l’erreur est logique. Par ailleurs veut dire besides. EN: par ailleurs means besides.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur', 'fauxami'],
};

/** PRACTISE by ear and hand: the signpost heard, then written. */
const A7_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a7-dictee',
  layer: 'core',
  title: 'Écris les panneaux que tu entends',
  itemIds: [E(1131), E(1132), E(1133), E(1135), E(1137), 'fr.b1.connecteurs-logiques.008'],
  audio: AUDIO,
  say: REFRAME,
  terms: ['connecteur'],
};

/** USE IT: a summary keeps the author's turn. */
const A7_RESUME = pourTonResume('a7-resume', "Le panneau garde le camp de l'auteur", [
  grp("L'avis de l'auteur, en une phrase", [
    it(E(1144), 'pour, mais : le tournant gardé'),
    it(E(1135), 'la phrase après bref'),
  ], chk(
    "Où as-tu trouvé l'avis de l'auteur ?",
    ['dans la phrase après « bref »', 'dans le premier exemple'], 0,
    "Bref annonce la conclusion : c'est l'avis de l'auteur. EN: bref announces the author's conclusion.")),
  grp('Avec ou sans le tournant', [
    free("L'auteur pense que la semaine de quatre jours est une bonne idée.", 'The author thinks the four-day week is a good idea.', 'le tournant oublié'),
    it(E(1144), 'le tournant gardé'),
  ], chk(
    'Quel résumé est fidèle à la chronique ?',
    ['le premier', 'le second'], 1,
    'Le premier oublie « pourtant » et tout ce qui suit. EN: the first drops pourtant and everything after it.')),
], ['connecteur', 'resume']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Tourner', "Quel panneau annonce le contraire de ce qu'on attend ?",
    ['de plus', 'pourtant', "d'abord"], 1,
    'Pourtant : le texte change de direction. EN: pourtant turns the text.'),
  ctl('Conclure', '« Bref » annonce...',
    ['la conclusion', 'un exemple'], 0,
    "L'avis de l'auteur, en peu de mots. EN: the author's view, in a few words."),
  ctl('Pressé', 'Tu as dix secondes. Tu lis surtout la phrase qui suit...',
    ['« de plus »', "« d'abord »", '« bref » ou « donc »'], 2,
    'La conclusion donne l’avis ; le reste le prépare. EN: the conclusion gives the view; the rest prepares it.'),
], ['connecteur']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Les panneaux du texte',
    opener: {
      line: "D'abord, pourtant, bref : ici les petits mots te montrent la route du texte. EN: D'abord, pourtant, bref: here the little words show you the road through the text.",
      imageRef: 'lessons/strategies-lecture/act07.jpg',
    },
    sections: [],
    milestone: 'Tu suis un argument par ses panneaux : ce qui ajoute, ce qui tourne, ce qui conclut. EN: You can follow an argument by its signposts: what adds, what turns, what concludes.',
    estScreens: 31, restPoints: ['a7-panneaux', 'a7-erreurs'],
  },
  sections: [A7_CHRONIQUE, A7_PANNEAUX, A7_SUITE, A7_ERREURS, A7_DICTEE, A7_RESUME, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — QUI EST « CE DERNIER » ?
 *
 *  TEXT: a Dakar press dispatch with a minister, a mayor and a president
 *  picked up by pronouns and nouns. MOVE: trace each reprise back to its
 *  name, and never assume the most important person is the one meant.
 *  a2.33 taught celui-ci as a POINTING pronoun; here it points back in text.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Five questions, five reprises, all answered by going back. */
const A8_DEPECHE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-depeche',
  layer: 'core',
  questionsInModal: true,
  title: 'Un nouveau marché à Dakar',
  frSub: 'Qui est qui ?',
  text: DEPECHE_TEXT,
  glossary: [
    { word: 'étals', en: 'market stalls', note: 'Les tables où les vendeuses posent le poisson.' },
    { word: 'chambre froide', en: 'cold store', note: 'Une grande pièce réfrigérée.' },
    { word: 'mareyeuses', en: 'fish traders', note: 'Au Sénégal, les femmes qui achètent le poisson aux pêcheurs et le revendent.' },
    { word: 'toutefois', en: 'however', note: 'Un panneau qui tourne, comme pourtant.' },
  ],
  questions: [
    { q: '« Ce dernier a salué un outil moderne. » Qui a parlé ?', a: "Le maire de Dakar : ce dernier, c'est le dernier nommé. Le ministre était nommé avant lui." },
    { q: '« Le ministre, lui, a rappelé... » Pourquoi ce « lui » ?', a: "Pour opposer le ministre au maire : le maire parle du quartier ; le ministre, lui, parle de l'argent." },
    { q: '« Cette somme » : laquelle ?', a: "Deux milliards de francs CFA, le chiffre de la phrase d'avant." },
    { q: 'Qui trouve les étals trop chers ?', a: 'Aïssatou Ndiaye : celle-ci reprend le dernier nom féminin, et elle aussi.' },
    { q: "« Il n'a pas donné de date. » Qui ?", a: "Le ministre, le sujet de la phrase d'avant. Il reprend souvent le sujet précédent." },
  ],
  audio: REC('rec-b1-37-depeche'),
  say: REFRAME,
  terms: ['reprise'],
};

/** NOTICE THE MOVE: six ways a text picks a person up again. */
const A8_REPRISES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-reprises',
  layer: 'core',
  sheetId: 'sheet-fil',
  title: "Six façons de reprendre quelqu'un",
  examples: [
    ex(E(1146), 'Ce dernier : le dernier nommé, ici le maire.'),
    ex(E(1147), 'Celle-ci : le dernier nom féminin, la présidente.'),
    ex(E(1148), "Le premier, le second : dans l'ordre où on les a nommés."),
    ex(E(1149), 'La commerçante : un autre nom pour la même personne.'),
    ex(E(1150), 'Cette somme : un nom qui reprend un chiffre.'),
    ex('fr.a2.pronoms-essentiels.338', `À l'oral, celui-ci montre une chose, comme dans ${DEMONSTRATIFS_REF}. Dans un article, il reprend un nom.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reprise'],
};

/** PRACTISE, on new pairs of sentences: go back to the right name. */
const A8_QUI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-qui',
  layer: 'core',
  size: 'lg',
  title: 'Qui est-ce ?',
  frSub: "Remonte jusqu'au bon nom",
  groups: [
    grp('Ce dernier', [
      it(E(1145), 'deux hommes nommés'),
      it(E(1146), 'ce dernier arrive'),
    ], chk(
      'Dans ces deux phrases, « ce dernier », c’est...',
      ['le ministre', 'le maire'], 1,
      "Le maire est nommé en dernier. Ce dernier ne veut pas dire le plus important. EN: ce dernier is the last named, not the most important.")),
    grp('Le premier, le second, elle', [
      it(E(1148), "deux noms, dans l'ordre"),
      it(E(1151), 'un homme, une femme'),
    ], chk(
      '« Le maire et la ministre sont arrivés ensemble. Elle a parlé la première. » Qui a parlé ?',
      ['la ministre', 'le maire', 'les deux'], 0,
      'Elle est féminin, et une seule femme est nommée. EN: elle is feminine and only one woman was named.')),
    ctl('Un nom qui reprend un nom', '« Mme Ndiaye vend du poisson. La commerçante connaît tout le monde. » La commerçante, c’est...',
      ['une autre personne', 'Mme Ndiaye'], 1,
      'Un article évite de répéter un nom : il en trouve un autre. EN: articles avoid repeating a name by finding another noun.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reprise'],
};

/** PRACTISE, the trap, stepped. `promptSound` is the WRONG reading of the
 *  dispatch; `fr` is what the text really says. */
const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Six reprises mal suivies',
  rule: {
    title: 'Remonte au bon nom',
    body: "Ce dernier renvoie au dernier nom cité. Celle-ci cherche le dernier nom féminin. Il reprend souvent le sujet d'avant. Remonte, ne devine pas. EN: ce dernier is the last name mentioned; go back, do not guess.",
  },
  cards: [
    { promptLabel: 'ce dernier', promptSound: 'Le ministre a salué le nouveau marché.', fr: src(E(1156)).fr, ipa: ipaOf(E(1156)), tip: 'Ce dernier : le maire, nommé après le ministre. EN: the mayor was named last.' },
    { promptLabel: 'celle-ci', promptSound: 'Le ministre trouve les étals trop chers.', fr: src(E(1157)).fr, ipa: ipaOf(E(1157)), tip: 'Celle-ci est féminin : la présidente. EN: celle-ci is feminine.' },
    { promptLabel: 'il', promptSound: 'Le maire promet une aide aux petites vendeuses.', fr: src(E(1159)).fr, ipa: ipaOf(E(1159)), tip: "C'est le ministre qui a répondu : il reprend le sujet de la phrase. EN: il picks up the minister, the subject." },
    { promptLabel: 'cette somme', promptSound: 'Le nouveau marché a surpris les habitants.', fr: src(E(1150)).fr, ipa: ipaOf(E(1150)), tip: "Cette somme reprend deux milliards : c'est le prix qui surprend. EN: cette somme picks up the price." },
    { promptLabel: 'le premier', promptSound: 'Marc était fatigué, Paul avait faim.', fr: src(E(1148)).fr, ipa: ipaOf(E(1148)), tip: 'Le premier : Paul, nommé en premier. EN: le premier is Paul, named first.' },
    { promptLabel: 'la commerçante', promptSound: 'Une autre femme connaît tout le monde au marché.', fr: src(E(1149)).fr, ipa: ipaOf(E(1149)), tip: 'La commerçante, c’est Mme Ndiaye, dite autrement. EN: la commerçante is Mme Ndiaye again.' },
  ],
  drill: [
    { promptSay: 'Le ministre est venu avec le maire. Ce dernier, c’est ... .', opts: ['le ministre', 'le maire'], correct: 1 },
    { promptSay: 'La présidente et le maire ont parlé. Celle-ci, c’est ... .', opts: ['la présidente', 'le maire'], correct: 0 },
    { promptSay: 'Paul et Marc sont arrivés. Le second, c’est ... .', opts: ['Paul', 'Marc'], correct: 1 },
    { promptSay: 'Le projet a coûté deux milliards. Cette somme, c’est ... .', opts: ['deux milliards', 'le projet', 'le marché'], correct: 0 },
    { promptSay: 'Le ministre a répondu. Il n’a pas donné de date. Il, c’est ... .', opts: ['le maire', 'la présidente', 'le ministre'], correct: 2 },
    { promptSay: 'Mme Ndiaye vend du poisson. La commerçante, c’est ... .', opts: ['Mme Ndiaye', 'une cliente'], correct: 0 },
    { promptSay: 'Le maire et la ministre sont venus. Elle, c’est ... .', opts: ['le maire', 'la ministre'], correct: 1 },
    { promptSay: 'Ce dernier renvoie au nom ... .', opts: ['le plus important', 'cité en dernier'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Remonte au bon nom' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le lecteur pressé a compris' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit reprises', gate: true },
  ],
  audio: REC('rec-b1-37-piege-reprises'),
  say: REFRAME,
  terms: ['reprise'],
};

/** USE IT: a summary names people; it never says « ce dernier ». */
const A8_RESUME = pourTonResume('a8-resume', 'Des noms, pas des « ce dernier »', [
  grp('Pour ton ami, des noms clairs', [
    it(E(1158), 'le maire, nommé'),
    it(E(1159), 'le ministre, nommé'),
  ], chk(
    "Ton ami n'a pas lu l'article. Tu écris...",
    ['« Ce dernier a salué le marché. »', '« Le maire de Dakar a salué le marché. »'], 1,
    'Ton ami ne sait pas qui est « ce dernier ». Donne le nom. EN: your friend cannot know who ce dernier is; give the name.')),
  grp('Qui dit quoi', [
    it(E(1157), 'la présidente, et son avis'),
    free('Selon Aïssatou Ndiaye, les pertes de poisson pourraient baisser de moitié.', 'According to Aïssatou Ndiaye, fish losses could be halved.', 'une source, avec son nom'),
  ], chk(
    'Dans ton résumé, qui trouve les étals trop chers ?',
    ['la présidente des mareyeuses', 'le ministre'], 0,
    "Celle-ci, dans l'article : Aïssatou Ndiaye. Dans ton résumé, son nom ou sa fonction. EN: in your summary, her name or her role.")),
], ['reprise', 'resume']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Ce dernier', '« Ce dernier » renvoie au nom...',
    ['le plus important', 'cité en dernier', 'cité en premier'], 1,
    'Le dernier nommé, toujours. EN: always the last one named.'),
  ctl('Celle-ci', 'Celle-ci cherche un nom...',
    ['féminin', 'masculin'], 0,
    'Celle-ci, cette dernière : féminin. Celui-ci, ce dernier : masculin. EN: celle-ci looks for a feminine noun.'),
  ctl('Dans ton résumé', 'Tu écris « ce dernier » à ton ami ?',
    ["Oui, c'est plus court.", 'Non, je donne le nom.'], 1,
    "Ton ami n'a pas le texte pour remonter. EN: your friend has no text to go back to."),
], ['reprise', 'resume']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Qui est « ce dernier » ?',
    opener: {
      line: "Un ministre, un maire, une présidente et un « ce dernier » : ici tu sais toujours qui parle. EN: A minister, a mayor, a president and a ce dernier: here you always know who is speaking.",
      imageRef: 'lessons/strategies-lecture/act08.jpg',
    },
    sections: [],
    milestone: "Tu remontes chaque il, celle-ci et ce dernier jusqu'au bon nom. EN: You can trace every il, celle-ci and ce dernier back to the right name.",
    estScreens: 34, restPoints: ['a8-reprises', 'a8-piege'],
  },
  sections: [A8_DEPECHE, A8_REPRISES, A8_QUI, A8_PIEGE, A8_RESUME, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — UN FAIT OU UNE OPINION
 *
 *  TEXT: a Brussels local page with facts, a sourced figure, a doubted
 *  figure, two opinions and a rumour the last line refutes. MOVE: read the
 *  source marker before the claim. b1.08 owns « selon » / « d'après » with
 *  the press conditional, b1.15 files « il paraît que » with the indicative,
 *  b1.19 owns reported speech: each is cited on the row that needs it.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Five questions, one per kind of claim. */
const A9_TROTTINETTES: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-trottinettes',
  layer: 'core',
  questionsInModal: true,
  title: 'Trottinettes à Bruxelles',
  frSub: 'Qui dit quoi, et est-ce vérifié ?',
  text: TROTTINETTES_TEXT,
  glossary: [
    { word: 'appareils', en: 'devices', note: 'Ici, les trottinettes elles-mêmes.' },
    { word: 'en location', en: 'for hire', note: 'Qu’on loue. Un faux ami : pas location au sens anglais.' },
    { word: 'déclarés', en: 'reported', note: 'Signalés à la police ou à une assurance.' },
    { word: 'partagés', en: 'divided', note: 'Certains sont pour, d’autres contre.' },
  ],
  questions: [
    { q: 'Quelles informations sont des faits, sans source ?', a: 'La vitesse limitée à 20 km/h depuis le 1er mars, et environ 4 000 appareils. Le journaliste les donne comme sûrs.' },
    { q: 'Qui dit que les accidents ont baissé de 15 % ?', a: "La Région : « selon la Région ». C'est sa version." },
    { q: '« Ce chiffre serait plus faible » : pourquoi le conditionnel ?', a: `Une association le dit, sans preuve. ${Cap(CONDITIONNEL_REF)} l'a montré : après d'après, le conditionnel dit que ce n'est pas vérifié.` },
    { q: 'Marc et Inès : faits ou opinions ?', a: 'Des opinions : « je trouve que », « ce serait une erreur ». Des personnes, pas des faits.' },
    { q: 'Les trottinettes vont-elles être interdites ?', a: "Non : c'est une rumeur (« il paraît que »), et la dernière phrase dit que la Région n'a rien annoncé." },
  ],
  audio: REC('rec-b1-37-trottinettes'),
  say: REFRAME,
  terms: ['source'],
};

/** NOTICE THE MOVE: six source markers, and how far to trust each. */
const A9_SOURCES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-sources',
  layer: 'core',
  sheetId: 'sheet-preuves',
  title: "Six façons de dire d'où ça vient",
  cols: ['Marqueur', 'Qui parle', 'Tu peux le croire ?'],
  rows: [
    { cells: ['un fait, sans source', 'le journaliste', 'oui, à vérifier'], say: src(E(1160)).fr,
      detail: { title: 'Le fait', body: 'Une date, un chiffre, sans selon : le journaliste le donne comme sûr. Tu peux le résumer comme un fait. EN: a date or figure with no source is given as fact.', say: src(E(1165)).fr } },
    { cells: ['selon la Région', 'la Région', 'sa version'], say: src(E(1161)).fr,
      detail: { title: 'selon', body: "Selon donne la source. C'est vrai pour elle ; un autre camp peut dire autre chose. EN: selon names the source; it is that source's version.", say: src(E(1170)).fr } },
    { cells: ["d'après + conditionnel", 'une source', 'pas vérifié'], say: src(E(1162)).fr,
      detail: { title: "d'après + conditionnel", body: `${Cap(CONDITIONNEL_REF)} : « ${B108_REFRAME} » Dans la presse, serait veut dire : on le dit, sans le garantir. EN: the press conditional means reported, not confirmed.`, say: "D'après le syndicat, la grève durerait une semaine." } },
    { cells: ['a déclaré que', 'une personne', "ce qu'elle a dit"], say: src(E(1167)).fr,
      detail: { title: 'a déclaré que', body: `Des paroles rapportées, comme dans ${DISCOURS_REF} : « ${B119_REFRAME} » Tu sais ce qu'elle a dit, pas si c'est vrai. EN: reported words: what was said, not whether it is true.`, say: src(E(1168)).fr } },
    { cells: ['il paraît que', 'personne', 'une rumeur'], say: src(E(1164)).fr,
      detail: { title: 'il paraît que', body: `Personne ne signe : c'est ce qu'on dit. ${Cap(SUBJ_DECLENCHEURS_REF)} l'a rangé avec l'indicatif. EN: nobody signs it: a rumour.`, say: src(E(1169)).fr } },
    { cells: ['je trouve que, à mon avis', 'une personne', 'une opinion'], say: src(E(1163)).fr,
      detail: { title: "L'opinion", body: "Une personne dit ce qu'elle pense. Dans ton résumé, garde son nom : selon Marc, il trouve que. EN: an opinion; keep the person's name in your summary.", say: src(E(1166)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['source'],
};

/** PRACTISE, on new sentences from four other lessons' worlds. */
const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-trier',
  layer: 'core',
  size: 'lg',
  title: 'Fait, source, rumeur ou opinion',
  frSub: "Chaque phrase dit d'où elle vient",
  groups: [
    grp('Des faits et des sources', [
      it(E(1160), 'une date, un chiffre'),
      it(E(1161), 'selon la Région'),
      it(E(1170), 'selon la police'),
      it('fr.b1.journalisme.005', 'la règle du journaliste'),
    ], chk(
      '« Selon la Région, les accidents ont baissé de 15 %. » C’est...',
      ['la version de la Région', 'un fait que tout le monde accepte'], 0,
      "Selon donne la source ; l'association, elle, dit autre chose. EN: selon gives one side's figure.")),
    grp('Des opinions et une rumeur', [
      it(E(1163), 'je trouve que'),
      it('fr.b1.cafe.084', 'je trouve que, au café'),
      it('fr.b1.sports-et-loisirs.091', 'à mon avis'),
      it(E(1169), 'il paraît que'),
    ], chk(
      '« Il paraît que la piscine va fermer. » Qui l’a dit ?',
      ['la mairie', 'le journaliste', 'on ne sait pas'], 2,
      "Il paraît que : personne ne signe. C'est une rumeur. EN: nobody signs it: a rumour.")),
    ctl('Le conditionnel', "« D'après le syndicat, la grève durerait une semaine. » C’est...",
      ['dit, mais pas vérifié', 'sûr'], 0,
      "D'après, puis durerait : une information rapportée, sans garantie. EN: reported, not confirmed."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['source'],
};

/** PRACTISE by ear: the same page as a street interview on the radio.
 *  `hideLines` because the questions are about what the ear caught. */
const A9_RADIO: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-radio',
  layer: 'core',
  hideLines: true,
  title: 'Place Flagey, au micro',
  frSub: 'Qui parle, et est-ce sûr ?',
  lines: [
    ln(E(1161)), ln(E(1162)), ln(E(1163)), ln(E(1164)),
    ln(E(1165)), ln(E(1166)), ln(E(1167)), ln(E(1168)),
  ],
  questions: [
    { q: 'Première phrase : qui donne le chiffre de 15 % ?', opts: ['la Région', 'une association'], correct: 0, why: '« Selon la Région. » EN: according to the Region.' },
    { q: 'Deuxième phrase : ce chiffre plus faible est-il sûr ?', opts: ['Oui', 'Non, il est au conditionnel'], correct: 1, why: '« serait plus faible » : on le rapporte, sans garantie. EN: serait means not confirmed.' },
    { q: 'Troisième phrase : fait ou opinion ?', opts: ['un fait', 'une opinion', 'une rumeur'], correct: 1, why: '« Je trouve que » : une personne pense. EN: je trouve que marks an opinion.' },
    { q: 'Quatrième phrase : qui va interdire les trottinettes ?', opts: ['la Région', 'la police', 'personne ne le dit vraiment'], correct: 2, why: '« Il paraît que » : une rumeur sans source. EN: a rumour with no source.' },
    { q: 'Cinquième phrase : la rumeur est-elle vraie ?', opts: ["Non, rien n'est annoncé", "Oui, c'est décidé"], correct: 0, why: "« La Région n'a annoncé aucune interdiction. » EN: no ban has been announced." },
  ],
  audio: REC('rec-b1-37-flagey'),
  say: REFRAME,
  terms: ['source'],
};

/** USE IT: the opinion in a summary keeps its owner, and the rumour stays
 *  a rumour. This is the rubric's « opinion » criterion, rehearsed. */
const A9_RESUME = pourTonResume('a9-resume', 'Une opinion, présentée comme une opinion', [
  grp("L'opinion, avec son nom", [
    it(E(1174), 'selon une étudiante'),
    it(E(1199), 'la phrase qui le dit'),
  ], chk(
    "Inès trouve que l'interdiction serait une erreur. Dans ton résumé, tu écris...",
    ['« Selon une étudiante, ce serait une erreur. »', '« Interdire les trottinettes est une erreur. »'], 0,
    "La seconde fait parler l'article à la place d'Inès. EN: the second makes the article say what Inès thinks.")),
  grp('La rumeur, dans un résumé', [
    free('Les trottinettes vont être interdites.', 'The scooters are going to be banned.', 'la rumeur, donnée comme un fait'),
    free("Une étudiante a entendu dire qu'on allait les interdire, mais rien n'est annoncé.", 'A student heard they would be banned, but nothing has been announced.', 'la rumeur, signalée'),
  ], chk(
    'Quelle phrase est fidèle au texte ?',
    ['la première', 'la seconde'], 1,
    "La première fait d'une rumeur un fait. EN: the first turns a rumour into a fact.")),
], ['source', 'resume']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Selon', '« Selon la Région » te dit...',
    ['qui parle', "que c'est faux"], 0,
    'Selon donne la source, sans juger. EN: selon names the source without judging it.'),
  ctl('Il paraît que', '« Il paraît que » annonce...',
    ['un fait', 'une rumeur', 'une date'], 1,
    'Personne ne signe : une rumeur. EN: nobody signs it.'),
  ctl('Dans ton résumé', 'Tu gardes « selon » dans ton résumé ?',
    ["Non, c'est inutile.", 'Oui, pour dire qui parle.'], 1,
    "Sans la source, une opinion devient un fait. EN: without the source, an opinion turns into a fact."),
], ['source', 'resume']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Un fait ou une opinion',
    opener: {
      line: "Un chiffre, une source, une rumeur, un avis : ici tu apprends ce que tu peux croire. EN: A figure, a source, a rumour, an opinion: here you learn what you can believe.",
      imageRef: 'lessons/strategies-lecture/act09.jpg',
    },
    sections: [],
    milestone: "Tu sépares le fait, la source, la rumeur et l'opinion, et tu gardes la source dans ton résumé. EN: You can separate fact, source, rumour and opinion, and keep the source in your summary.",
    estScreens: 30, restPoints: ['a9-sources', 'a9-trier'],
  },
  sections: [A9_TROTTINETTES, A9_SOURCES, A9_TRIER, A9_RADIO, A9_RESUME, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — À L'EXAMEN, LA QUESTION D'ABORD
 *
 *  TEXT: a job advert set as a TCF / TEF compréhension écrite document.
 *  MOVE: read the question first, look for its MEANING (the document
 *  rephrases it), and distrust the option that copies the document's words.
 *  The « use it » beat turns the same habit on the task's own brief.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Each question says which word to hunt before the answer. */
const A10_EPREUVE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-epreuve',
  layer: 'core',
  questionsInModal: true,
  title: 'Compréhension écrite, document 1',
  frSub: "Lis d'abord les questions",
  text: EMPLOI_TEXT,
  glossary: [
    { word: 'libraire', en: 'bookseller', note: 'La personne qui travaille dans une librairie.' },
    { word: 'animer', en: 'to run, to host', note: 'Faire vivre une activité de groupe.' },
    { word: 'pourboires', en: 'tips', note: "L'argent que les clients laissent en plus." },
    { word: 'coup de cœur', en: 'favourite find', note: 'Un livre que tu as beaucoup aimé.' },
  ],
  questions: [
    { q: 'Question 1 : le poste est-il à temps plein ? Quel mot cherches-tu ?', a: '« Temps » ou « heures ». Tu trouves « à temps partiel, vingt-quatre heures par semaine ». Réponse : non.' },
    { q: 'Question 2 : faut-il avoir travaillé en librairie ?', a: "Non : « Une expérience en librairie est un atout, mais elle n'est pas obligatoire. » Un atout, c'est un plus." },
    { q: 'Question 3 : que dois-tu envoyer ?', a: 'Ton CV et quelques lignes sur ton dernier coup de cœur, avant le 15 septembre.' },
    { q: 'Question 4 : est-ce qu’on te répondra forcément ?', a: 'Non : « Seules les personnes retenues seront contactées. »' },
    { q: "Pour ces questions, as-tu lu tout le document d'abord ?", a: "Pas besoin : la question t'a dit quoi chercher, et tu as lu autour du mot trouvé." },
  ],
  audio: REC('rec-b1-37-emploi'),
  say: REFRAME,
  terms: ['reperage'],
};

/** NOTICE THE MOVE: three habits for the paper, each with its reason. */
const A10_ASTUCES: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-astuces',
  layer: 'core',
  sheetId: 'sheet-avant',
  title: "Trois astuces pour l'épreuve",
  hacks: [
    { hack: 'Lis la question avant le document.', why: 'Elle te dit quoi chercher : un chiffre, un nom, une condition. Sans elle, tu lis tout pour rien. EN: the question tells you what to look for.' },
    { hack: 'Cherche le sens de la question, pas son mot exact.', why: 'Le document dit souvent la même chose autrement : temps plein devient vingt-quatre heures. EN: the text rephrases the question.' },
    { hack: 'Méfie-toi de la réponse qui recopie le texte.', why: 'Les mauvaises réponses reprennent souvent des mots du document, dans un autre sens. EN: wrong options often reuse the text’s words.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reperage', 'survoler'],
};

/** PRACTISE, on new questions: what the question sends you to find. */
const A10_QUESTION: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-question',
  layer: 'core',
  size: 'lg',
  title: 'La question te dit quoi chercher',
  frSub: 'Avant de lire le document',
  groups: [
    grp('La question, puis le mot', [
      it(E(1175), "l'ordre"),
      it(E(1176), 'le mot à chercher'),
      it(E(1177), 'le texte le dit autrement'),
    ], chk(
      '« Quel est le salaire proposé ? » Tes yeux cherchent...',
      ['un chiffre avec $', 'le nom du café', 'une date'], 0,
      "Un salaire, c'est un chiffre et une monnaie. EN: a salary is a figure and a currency.")),
    grp('Le texte le dit autrement', [
      it(E(1184), 'temps partiel : les heures'),
      it(E(1178), 'un atout : un plus'),
      it(E(1179), 'pas obligatoire'),
    ], chk(
      "Question : « L'expérience est-elle exigée ? » Quelle phrase répond ?",
      [src(E(1178)).fr, src(E(1179)).fr], 1,
      '« Pas obligatoire » répond à « exigée ? » : non. Atout seul ne suffisait pas. EN: pas obligatoire answers the question.')),
    ctl('Un mot de nuance', 'Dans une annonce, « un atout », c’est...',
      ['un plus, pas obligatoire', 'une condition obligatoire'], 0,
      "Un atout t'aide, mais on peut être choisi sans lui. EN: an asset helps but is not required."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reperage'],
};

/** PRACTISE: four trap options from the paper, each built from real words
 *  of the document. The `why` says why the trap looked right. */
const A10_PIEGES: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-pieges',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre réponses piégées',
  errors: [
    { wrong: 'Le poste est à temps plein : le texte parle de « temps ».',
      right: 'Le poste est à temps partiel : vingt-quatre heures par semaine.',
      why: 'Normal : tu as trouvé le mot temps. Mais la réponse piège reprend un mot du texte dans un autre sens. EN: a trap option reuses a word from the text.' },
    { wrong: 'Il faut une expérience en librairie.',
      right: 'Une expérience en librairie est un atout, pas une obligation.',
      why: 'Le mot expérience est bien dans le texte. Atout et pas obligatoire changent tout. EN: atout and pas obligatoire change the answer.' },
    { wrong: 'Tout le monde sera contacté.',
      right: 'Seules les personnes retenues seront contactées.',
      why: "Contactées est dans le texte. Seules limite la phrase : lis-la jusqu'au bout. EN: seules limits the sentence." },
    { wrong: "Le café paie 19 $ de l'heure, pourboires compris.",
      right: "Le café paie 19 $ de l'heure, plus les pourboires.",
      why: 'Le chiffre est juste ; le petit mot plus change le total. EN: the figure is right; plus changes the total.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reperage'],
};

/** PRACTISE under exam conditions: a new three-line document from Valais,
 *  quoted, and three questions to answer question-first. */
const A10_BLANC: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-blanc',
  layer: 'core',
  size: 'lg',
  title: 'Un document blanc',
  frSub: "Trois questions, la question d'abord",
  groups: [
    grp('Le document', [
      free('Piscine municipale de Sion : fermeture annuelle du 1er au 21 septembre.', 'Sion municipal pool: annual closure from 1 to 21 September.', 'la première ligne'),
      free('Les abonnements en cours seront prolongés de trois semaines.', 'Current passes will be extended by three weeks.', 'la deuxième ligne'),
      free('Pendant la fermeture, les nageurs sont accueillis à la piscine de Martigny, sur présentation de leur carte.', 'During the closure, swimmers are welcome at the Martigny pool on showing their card.', 'la troisième ligne'),
    ], chk(
      'Question 1 : la piscine ferme combien de temps ?',
      ['trois semaines', 'un mois', "toute l'année"], 0,
      'Du 1er au 21 septembre : trois semaines. EN: three weeks.')),
    ctl('Question 2', 'Ton abonnement finit le 30 septembre. Que se passe-t-il ?',
      ['Il est perdu.', 'Il est remboursé.', 'Il est prolongé de trois semaines.'], 2,
      '« Seront prolongés de trois semaines » : les jours fermés te sont rendus. EN: the closed weeks are added back.'),
    ctl('Question 3', 'Où nager pendant la fermeture ?',
      ['à Martigny, avec ta carte', 'nulle part'], 0,
      '« Sur présentation de leur carte » : la condition est dans la fin de la phrase. EN: the condition sits at the end of the sentence.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reperage'],
};

/** USE IT: the task brief is a question too. Read it first. */
const A10_RESUME = pourTonResume('a10-resume', 'Ta mission est une question aussi', [
  grp("Lis ta consigne comme une question d'examen", [
    free("l'idée principale", 'the main idea', 'un'),
    free('deux points qui la soutiennent', 'two supporting points', 'deux'),
    free('une opinion, présentée comme une opinion', 'one opinion, flagged as an opinion', 'trois'),
    free('de 50 à 80 mots, pour un ami', '50 to 80 words, for a friend', 'quatre'),
  ], chk(
    "Ta mission te demande combien d'opinions ?",
    ['une seule, avec son auteur', 'toutes celles du texte'], 0,
    "Une opinion, avec la personne qui la donne. Pas une liste d'avis. EN: one opinion, with its owner.")),
  ctl('Le mot important de ta consigne', "Dans « pour un ami qui n'a pas lu l'article », quel mot change ta façon d'écrire ?",
    ['article', 'ami'], 1,
    "Un ami : des mots simples, tu, et rien de ce qu'il n'a pas lu. EN: a friend: plain words, tu, and nothing assumed."),
], ['resume', 'reperage']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl("L'ordre", "À l'épreuve, tu lis d'abord...",
    ['le document', 'la question'], 1,
    'La question te dit quoi chercher. EN: the question tells you what to look for.'),
  ctl('Le piège', 'Une réponse reprend trois mots du texte. Elle est...',
    ['forcément juste', 'peut-être un piège', 'forcément fausse'], 1,
    'Les pièges recopient le texte dans un autre sens. EN: traps copy the text with another meaning.'),
  ctl('Atout', '« Un atout », dans une annonce, c’est...',
    ['un plus', 'une obligation'], 0,
    'Utile, pas obligatoire. EN: useful, not required.'),
], ['reperage', 'survoler']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: "La question d'abord",
    opener: {
      line: "À l'examen, la question arrive avant le texte : ici tu apprends à t'en servir. EN: In the exam the question comes before the text: here you learn to use it.",
      imageRef: 'lessons/strategies-lecture/act10.jpg',
    },
    sections: [],
    milestone: "Tu lis la question d'abord, tu cherches son sens dans le document, et tu évites la réponse qui recopie. EN: You read the question first, find its meaning in the document, and avoid the option that copies.",
    estScreens: 28, restPoints: ['a10-question'],
  },
  sections: [A10_EPREUVE, A10_ASTUCES, A10_QUESTION, A10_PIEGES, A10_BLANC, A10_RESUME, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — RÉSUMER POUR UN AMI
 *
 *  The production act. The task article is read with every strategy of the
 *  lesson, planned, rehearsed out loud with Samir, then written. The task
 *  brief prints the article again, because TaskView has no source field and
 *  a summary cannot be written from memory (open question 2).
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the task text. Its six questions are the ten strategies in order. */
const A11_ARTICLE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-article',
  layer: 'core',
  questionsInModal: true,
  title: "L'article de ta mission",
  frSub: 'Toutes tes stratégies, sur un seul texte',
  text: FRIGOS_TEXT,
  glossary: [
    { word: 'ménage', en: 'household', note: 'Les personnes qui vivent dans le même logement.' },
    { word: 'invendus', en: 'unsold food', note: 'Ce que le magasin n’a pas vendu : in + vendu.' },
    { word: 'faute de personnel', en: 'for lack of staff', note: 'Parce qu’il n’y avait pas assez de monde.' },
    { word: 'étagères', en: 'shelves', note: 'Les planches où on pose les aliments.' },
    { word: 'banque alimentaire', en: 'food bank', note: 'Une association qui donne de la nourriture.' },
  ],
  questions: [
    { q: "Le genre et la source : qu'est-ce que c'est ?", a: 'Un article de presse sur Montréal, avec un titre, des chiffres et deux personnes citées.' },
    { q: "L'idée principale, en une phrase ?", a: 'Les frigos communautaires se multiplient à Montréal : plus de quarante, contre trois il y a cinq ans.' },
    { q: 'Quels deux points la soutiennent ? Quels panneaux te les montrent ?', a: "D'abord, ils réduisent le gaspillage ; ensuite, ils créent des liens. D'abord et ensuite les annoncent." },
    { q: 'Où le texte tourne-t-il ?', a: 'À « Pourtant » : les frigos dépendent des bénévoles, et la Ville ne les finance pas.' },
    { q: '« Celle-ci passe deux fois par jour » : qui ?', a: 'Mélanie Tremblay, la bénévole nommée juste avant.' },
    { q: 'La dernière phrase : fait ou opinion ? Qui la donne ?', a: "Une opinion : « À mon avis ». C'est Jean-François Côté, directeur d'une banque alimentaire." },
  ],
  audio: REC('rec-b1-37-frigos'),
  say: REFRAME,
  terms: ['resume', 'source'],
};

/** NOTICE: how to plan fifty to eighty words for a friend. */
const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-avant',
  title: 'Cinq étapes pour ton résumé',
  steps: [
    "1. Dis le genre et le sujet : j'ai lu un article sur... EN: say what you read and what it is about.",
    "2. Donne l'idée principale en une phrase, avec un chiffre si ça aide. EN: the main idea, in one sentence.",
    "3. Ajoute deux points, avec d'abord et ensuite. EN: two supporting points, signposted.",
    "4. Donne la limite ou l'autre camp, avec mais. EN: the limit or the other side.",
    '5. Finis par une opinion et son auteur : selon..., il trouve que... EN: end with one opinion and whose it is.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resume', 'connecteur'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas résumer',
  cases: [
    { situation: "Un ami te demande de quoi parle l'article que tu as partagé", fr: src(E(1191)).fr, en: src(E(1191)).en },
    { situation: 'Ta collègue a raté la réunion de dix heures', fr: 'En gros, la Ville nous ramène au bureau trois jours par semaine.', en: 'Basically, the City is bringing us back to the office three days a week.' },
    { situation: "À l'examen, on te demande l'idée principale d'un document", fr: "L'idée principale, c'est que les frigos communautaires se multiplient.", en: 'The main idea is that community fridges are multiplying.' },
    { situation: 'Tu écris à ton propriétaire après un avis de la Ville', fr: "Selon l'avis de la Ville, l'eau sera coupée mardi.", en: 'According to the City notice, the water will be cut off on Tuesday.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resume'],
};

/** USE IT, out loud: the summary as a phone call, turn by turn. Each turn
 *  is one step of the plan, so the call IS the rehearsal for the task. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Samir au téléphone',
  setting: "Le soir, au téléphone. Samir, ton ami de Québec, a vu que tu as partagé l'article sur les frigos. Il ne l'a pas lu, et il te pose des questions.",
  turns: [
    {
      ai: "Salut ! C'est quoi, cet article que tu as partagé ?",
      en: 'Hi! What is this article you shared?',
      user: src(E(1191)).fr,
      userEn: 'I read an article about community fridges. (The genre and the subject first.)',
      alts: [
        { fr: "C'est un article sur les frigos communautaires à Montréal.", en: 'It is an article about community fridges in Montreal.' },
        { fr: 'Un article de journal, sur des frigos où tout le monde peut prendre à manger.', en: 'A newspaper article, about fridges where anyone can take food. (It explains the idea for a friend who does not know the term.)' },
      ],
    },
    {
      ai: 'Des frigos communautaires ? Il y en a beaucoup ?',
      en: 'Community fridges? Are there many?',
      user: src(E(1197)).fr,
      userEn: 'There are now more than forty. (One number, the one that carries the idea.)',
      alts: [
        { fr: src(E(1198)).fr, en: 'Five years ago there were three. (The same idea, told through the growth.)' },
        { fr: 'Plus de quarante, contre trois il y a cinq ans.', en: 'More than forty, against three five years ago.' },
      ],
    },
    {
      ai: 'Et ça sert à quoi, exactement ?',
      en: 'And what are they for, exactly?',
      user: "D'abord, à réduire le gaspillage : des épiceries y déposent leurs invendus.",
      userEn: 'First, to cut waste: grocers leave their unsold food there. (The first supporting point, signposted.)',
      alts: [
        { fr: src(E(1187)).fr, en: src(E(1187)).en },
        { fr: 'À ne pas jeter la nourriture encore bonne.', en: 'To avoid throwing away food that is still good.' },
      ],
    },
    {
      ai: "C'est tout ?",
      en: 'Is that all?',
      user: 'Ensuite, ça crée des liens entre voisins.',
      userEn: 'Then, it creates ties between neighbours. (The second point.)',
      alts: [
        { fr: src(E(1188)).fr, en: src(E(1188)).en },
        { fr: 'Non, les voisins se parlent et échangent des recettes.', en: 'No, neighbours talk and swap recipes.' },
      ],
    },
    {
      ai: 'Donc tout le monde est content ?',
      en: 'So everybody is happy?',
      user: "Pas tout à fait. Selon le directeur d'une banque alimentaire, ce n'est pas aux bénévoles de régler la faim.",
      userEn: 'Not quite. According to the director of a food bank, it is not up to volunteers to solve hunger. (An opinion, with its owner.)',
      alts: [
        { fr: src(E(1189)).fr, en: 'But they depend entirely on volunteers. (The limit, which the article states as a fact.)' },
        { fr: 'Non : pour un directeur de banque alimentaire, les bénévoles ne peuvent pas tout régler.', en: 'No: for a food bank director, volunteers cannot fix everything. (His opinion, reported as his.)' },
      ],
    },
    {
      ai: 'Et toi, tu en penses quoi ?',
      en: 'And what do you think?',
      user: src(E(1195)).fr,
      userEn: "Personally, I think it is a good idea. (Your opinion, marked as yours and kept apart from the article's.)",
      alts: [
        { fr: "Je trouve que c'est une bonne idée, mais la Ville devrait aider.", en: 'I think it is a good idea, but the City should help.' },
        { fr: 'À mon avis, ça peut marcher, avec plus de bénévoles.', en: 'In my opinion, it can work, with more volunteers.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resume', 'source', 'connecteur'],
};

/** THE GRADED TASK. The unit outcome is tested here: a text above level,
 *  read with the lesson's strategies, told to someone who has not read it. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Résume un article pour un ami',
  frSub: 'Mission écrite',
  brief: `Samir, ton ami, n'a pas lu cet article. Il te demande ce qu'il dit. Voici l'article. ${FRIGOS_TEXT}`,
  briefEn: 'Your friend Samir has not read this article and asks you what it says. The article is printed here, so you can write with it in front of you.',
  produce: "Écris-lui un message de 50 à 80 mots, avec tes mots : l'idée principale, deux points qui la soutiennent, et une opinion présentée comme une opinion, avec la personne qui la donne.",
  responseSpec: { kind: 'text', minWords: 50, maxWords: 80 },
  rubric: {
    criteria: [
      {
        key: 'essentiel',
        label: "L'idée et deux points",
        maxPoints: 4,
        descriptors: [
          "4 : L'idée principale est là, en une phrase, et deux points la soutiennent (le gaspillage, les liens entre voisins, ou la limite des bénévoles). Rien d'important ne manque.",
          "3 : L'idée principale est là, avec un seul point clair, ou deux points dont un est flou.",
          "2 : Des informations justes, mais pas d'idée principale : on lit une liste de détails.",
          "1 : On ne sait pas de quoi parle l'article, ou le résumé dit le contraire du texte.",
        ],
      },
      {
        key: 'opinion',
        label: 'Une opinion signalée',
        maxPoints: 3,
        descriptors: [
          '3 : Une opinion du texte, présentée comme une opinion, avec la personne qui la donne (selon..., il trouve que...). Les faits restent des faits.',
          "2 : L'opinion est là, mais sans son auteur, ou mélangée à un fait.",
          '1 : Pas d’opinion, ou une opinion donnée comme un fait.',
        ],
      },
      {
        key: 'mots',
        label: 'Tes mots, clairs pour ton ami',
        maxPoints: 3,
        descriptors: [
          '3 : Tes mots, pas de phrase recopiée ; des noms à la place de celle-ci ou de ce dernier ; des chiffres justes.',
          '2 : Une ou deux phrases recopiées, ou un pronom que ton ami ne peut pas suivre, ou un chiffre faux.',
          "1 : Le résumé recopie le texte, ou il ne se comprend pas sans l'article.",
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          "2 : Un message à un ami, entre 50 et 80 mots, qui commence par dire de quoi parle l'article.",
          '1 : Moins de 50 ou plus de 80 mots, ou un texte qui ne s’adresse à personne.',
        ],
      },
    ],
  },
  scaffold: [
    'Salut Samir,',
    "J'ai lu un article sur...",
    'En gros, ...',
    "D'abord, ...",
    'Ensuite, ...',
    'Mais...',
    'Selon...,',
    'il trouve que...',
  ],
  modelAnswer: "Salut Samir ! J'ai lu un article sur les frigos communautaires à Montréal. En gros, il y en a de plus en plus : plus de quarante, contre trois il y a cinq ans. Chacun peut y laisser ou y prendre à manger. D'abord, ça réduit le gaspillage : des épiceries y laissent leurs invendus. Ensuite, ça crée des liens entre voisins. Selon le directeur d'une banque alimentaire, c'est une belle idée, mais les bénévoles ne peuvent pas régler la faim. À plus !",
  modelAnswerEn: 'Hi Samir! I read an article about community fridges in Montreal. Basically, there are more and more of them: over forty, against three five years ago. Anyone can leave food there or take some. First, they cut waste: grocers leave their unsold food in them. Then, they create ties between neighbours. According to the director of a food bank, it is a nice idea, but volunteers cannot solve hunger. Bye!',
  watchFor: [
    {
      pattern: 'A list of details (numbers, places, names) with no sentence that says what the article is about.',
      criterion: 'essentiel',
      feedback: "Ton ami a des détails, pas l'idée. Commence par une phrase : en gros, l'article dit que...",
      ref: 'a3-resume',
    },
    {
      pattern: 'Only one supporting point, or two points that say the same thing.',
      criterion: 'essentiel',
      feedback: "Il manque un point. Cherche d'abord et ensuite dans l'article : ils t'en donnent deux.",
      ref: 'a7-suite',
    },
    {
      pattern: 'The turn at « pourtant » missed: the summary says everyone agrees, and the limit disappears.',
      criterion: 'essentiel',
      feedback: 'Le texte tourne à pourtant. Garde au moins un mais dans ton résumé.',
      ref: 'a7-resume',
    },
    {
      pattern: "Jean-François Côté's opinion reported as a fact (les bénévoles ne peuvent pas régler la faim), with no source.",
      criterion: 'opinion',
      feedback: "C'est l'avis d'une personne. Ajoute qui le dit : selon le directeur d'une banque alimentaire...",
      ref: 'a9-resume',
    },
    {
      pattern: "The learner's own opinion mixed into the article's content, so Samir cannot tell who thinks what.",
      criterion: 'opinion',
      feedback: "Ton avis est le bienvenu, mais sépare-le : moi, je trouve que... Le reste, c'est l'article.",
      ref: 'a9-sources',
    },
    {
      pattern: 'Whole sentences copied from the article (the definition of the fridges, the quotation of the volunteer).',
      criterion: 'mots',
      feedback: 'Tu as recopié une phrase. Dis-la avec tes mots, comme si tu parlais à Samir.',
      ref: 'a11-plan',
    },
    {
      pattern: 'A reprise copied without its name (celle-ci, ce dernier), which Samir cannot trace.',
      criterion: 'mots',
      feedback: "Ton ami n'a pas l'article pour remonter. Écris le nom ou la fonction : une bénévole, Mélanie Tremblay.",
      ref: 'a8-resume',
    },
    {
      pattern: 'A number wrong or changed (quatre cents frigos, 140 grammes, 40 %).',
      criterion: 'mots',
      feedback: "Vérifie le chiffre dans l'article, et ce qu'il compte : plus de quarante frigos.",
      ref: 'a5-erreurs',
    },
    {
      pattern: 'A false friend used with its English meaning (actuellement for actually, éventuellement for eventually).',
      criterion: 'mots',
      feedback: 'Actuellement veut dire en ce moment. Pour actually, écris en fait.',
      ref: 'a6-fauxamis',
    },
    {
      pattern: 'Rare words kept from the article where a plain one would do (faute de personnel, sans justification), so the friend needs the dictionary the learner avoided.',
      criterion: 'mots',
      feedback: "Ton ami n'a pas lu le texte. Écris le mot simple : il n'y a pas assez de bénévoles.",
      ref: 'a6-resume',
    },
    {
      pattern: 'Under 50 or over 80 words in the body, or a text that does not address the friend.',
      criterion: 'tache',
      feedback: "Relis la mission : un message à Samir, de 50 à 80 mots, qui dit d'abord de quoi parle l'article.",
      ref: 'a10-resume',
    },
    {
      pattern: 'No opening that says what was read, so the friend does not know it is an article.',
      criterion: 'tache',
      feedback: "Commence par le genre et le sujet : j'ai lu un article sur...",
      ref: 'a2-resume',
    },
  ],
  graderNotes: [
    'The greeting and the sign-off (Salut Samir, À plus, Bises) do NOT count toward the word budget. Count the body only, with 10% tolerance (45 to 88) before criterion « tache » loses its point.',
    'Accept any two of the three supporting ideas as the two points: less waste (the unsold food), ties between neighbours, and the limit (dependence on volunteers, no City funding). The limit counts as a point.',
    "The opinion to flag is Jean-François Côté's. Mélanie Tremblay's quotation supports a point; reporting it is fine, but it counts as the flagged opinion only if it is framed as her view.",
    'The learner may add their own opinion. Reward it only when it is clearly separated from the article (moi, je trouve que), and never let it replace the article’s opinion.',
    "A role instead of a name (le directeur d'une banque alimentaire, une bénévole) is CORRECT and must not be marked down under criterion « mots ».",
    'The 140 kg figure comes from a study. Reporting it with « selon une étude » is correct; dropping the source costs nothing under « opinion », because it is a factual claim.',
    'Register: this is a message to a friend. Tu, informal openers and « en gros » are expected; do not ask for formal connectors, which belong to b1.30 to b1.32.',
    'The subjunctive belongs to b1.14 to b1.16 and is not taught here. Do not mark its absence, and do not mark a correct one as an error.',
    'Accept Québec and European vocabulary alike (frigo and réfrigérateur, épicerie and supérette, bénévole and volontaire).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resume', 'source', 'connecteur'],
};

/** Say the lesson's lines out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis ton résumé à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resume'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-avant',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le genre', v: 'qui écrit, et pour qui', say: src(E(1031)).fr,
      detail: { title: 'Avant la première ligne', body: 'Source, forme, destinataire : le genre dit ce que le texte veut. EN: the genre says what the text wants.', say: src(E(1038)).fr } },
    { k: 'le chapeau', v: "l'article en deux phrases", say: src(E(1051)).fr,
      detail: { title: 'Le haut de la page', body: 'Titre, chapeau, intertitres : devine, puis vérifie. EN: predict from the top, then check.', say: src(E(1006)).fr } },
    { k: 'survoler, repérer', v: 'le sens, ou un détail', say: src(E(1069)).fr,
      detail: { title: 'Deux vitesses', body: 'La question choisit. Un détail trouvé : lis toute la phrase. EN: the question picks the speed.', say: src(E(1068)).fr } },
    { k: 'le mot inconnu', v: 'ses voisins, ses morceaux, son cousin', say: src(E(1113)).fr,
      detail: { title: 'Quatre portes', body: 'La phrase, un indice, un morceau, un cousin. Et gare au faux ami. EN: sentence, clue, part, cousin; beware false friends.', say: src(E(1116)).fr } },
    { k: 'les panneaux, les reprises', v: 'où va le texte, et de qui il parle', say: src(E(1141)).fr,
      detail: { title: 'Le fil', body: "Pourtant tourne, bref conclut. Ce dernier, c'est le dernier nommé. EN: pourtant turns, bref concludes; ce dernier is the last named.", say: src(E(1152)).fr } },
    { k: 'la source', v: 'un fait, ou un avis', say: src(E(1171)).fr,
      detail: { title: 'Qui le dit', body: "Selon, d'après, il paraît que, je trouve que. Dans ton résumé, garde qui parle. EN: keep who is speaking.", say: src(E(1190)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resume', 'source', 'genre'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu lis maintenant un texte au-dessus de ton niveau dans le bon ordre : le genre, le haut de la page, les chiffres, les panneaux, les noms, les sources, et le mot difficile en dernier. Le piège qui reste est le plus naturel : recopier. Un résumé qui reprend les phrases de l'article montre que tu l'as lu, pas que tu l'as compris. Avant l'examen, prends un article court, cache-le, et dis à voix haute l'idée principale et deux points en trente secondes. Si tu ne peux pas, relis seulement le chapeau et les phrases après les panneaux. EN: Hide a short article and say its main idea and two points aloud in thirty seconds; if you cannot, reread only the standfirst and the sentences after the signposts.",
  stats: [
    { k: 'Avant de lire', v: 'le genre, le titre, le chapeau' },
    { k: 'Pendant', v: 'survoler, repérer, deviner' },
    { k: 'Le fil', v: 'les panneaux et les reprises' },
    { k: 'Après', v: "l'idée, deux points, un avis" },
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
    { front: 'avant la première ligne', back: 'qui écrit, et pour qui', say: src(E(1031)).fr },
    { front: "l'essentiel d'un article", back: 'le titre et le chapeau', say: src(E(1051)).fr },
    { front: 'pour le sens', back: 'survoler', say: src(E(1067)).fr },
    { front: 'pour un détail', back: 'repérer, puis lire la phrase', say: src(E(1068)).fr },
    { front: 'an English billion', back: 'un milliard', say: src(E(1093)).fr },
    { front: 'actually', back: 'en fait', say: src(E(1117)).fr },
    { front: 'le texte tourne', back: 'pourtant, en revanche', say: src(E(1141)).fr },
    { front: 'ce dernier', back: 'le dernier nommé', say: src(E(1152)).fr },
    { front: 'une opinion dans ton résumé', back: 'selon..., il trouve que...', say: src(E(1190)).fr },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Lire sans tout comprendre, en résumé',
  body: `${REFRAME} Tu ne lis plus un texte difficile mot par mot : tu cherches d'abord ce qui porte le sens, et le mot inconnu vient à la fin, s'il manque encore. La prochaine leçon de stratégie fait la même chose avec l'oreille : ${LISTENING_NEXT_REF} t'apprend à comprendre un document audio sans tout entendre. EN: Next: the same strategies, for listening.`,
  points: [
    'Le genre, le titre et le chapeau avant la première phrase.',
    'Survoler pour le sens, repérer pour un détail, et lire la phrase entière.',
    'Le mot inconnu : ses voisins, ses morceaux, son cousin, et gare au faux ami.',
    "Dans ton résumé : l'idée, deux points, et une opinion avec son auteur.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resume', 'survoler', 'contexte'],
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), ELEVEN rounds of eight: one per
 *  act from act 1 to act 10, plus an integration round on the summary. Each
 *  round's target is a distinct errorTrigger, so a failed round fires that
 *  round's own drill.
 *
 *  THE QUIZ TESTS JUDGEMENT (shapes doc §1.2): most questions give a line or
 *  a situation and ask what the text is doing. `typeIn` asks for ONE word or
 *  a short rewrite. `errorSpot` gives a SUMMARY sentence where one part
 *  betrays the text. `fold()` strips accents, commas, full stops and spaces,
 *  so nothing turns on them: the decimal comma is tested by choice, never by
 *  typing (7,2 and 7.2 fold to the same string). */

type QQ = QuizQuestion;
/** typeIn with extra accepted spellings: the answer is always accepted. */
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Une partie de la phrase trahit le texte. Écris la phrase juste. EN: Part of the sentence betrays the text; write the right sentence.', prompt, answer, accept: [answer], why, ref });
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
      id: 'r1-sens', label: 'Le sens avant les mots', targets: ['mot-a-mot'],
      questions: [
        mc('Devant un article trop difficile, par quoi commences-tu ?', ['par le premier mot inconnu', 'par la fin', 'par le titre et la première phrase'], 2, 'Le titre et le début portent souvent tout le sens. EN: headline and opening often carry the whole meaning.', 'a1-scene'),
        mc('« Dorénavant, chaque service affichera son horaire. » Sans « dorénavant », la phrase perd...', ['un détail de temps', 'tout son sens'], 0, 'Dorénavant veut dire à partir de maintenant : un détail. EN: a detail of time.', 'a1-sans'),
        mc("Dans l'article de Karine, quel petit mot annonce l'autre camp ?", ['selon', 'dorénavant', 'en revanche'], 2, 'En revanche tourne le texte vers le syndicat. EN: en revanche turns to the union.', 'a1-lecture'),
        tI('Complète la phrase du bon lecteur. Un mot.', "Je lis d'abord le titre et le ...", 'chapeau', 'Le titre et le chapeau donnent l’essentiel. EN: headline and standfirst give the gist.', 'a1-scene', ['le chapeau']),
        tI("Complète la question que tu poses à un avis de la Ville. Un mot.", "Qu'est-ce qui ... pour moi ?", 'change', 'Un avis te dit ce qui change pour toi. EN: a notice tells you what changes for you.', 'a1-usages', ['changera', 'va changer']),
        eS("Selon l'article, le syndicat est pour le retour au bureau.", "Selon l'article, le syndicat est contre le retour au bureau.", 'Le syndicat dénonce la décision : il est contre. EN: the union is against it.', 'a1-lecture'),
        lC("Écoute. Cette phrase donne-t-elle le sujet de l'article ?", src(E(1000)).fr, ["oui, c'est le titre", "non, c'est un détail"], 0, 'Le titre dit le sujet en sept mots. EN: the headline gives the subject.', 'a1-sans'),
        tI('Combien de personnes la mesure touche-t-elle ? En chiffres.', 'La mesure touche près de ... personnes.', '6 000', 'Un chiffre se lit sans aucun mot difficile. EN: a number needs no hard word.', 'a1-lecture', ['6000', 'six mille']),
      ],
    },
    {
      id: 'r2-genre', label: 'Le genre du texte', targets: ['genre-ignore'],
      questions: [
        mc('« Profitez de notre offre avant dimanche. » C’est...', ['un avis', 'une brève', 'une publicité'], 2, 'Profitez, offre : on veut te vendre. EN: someone wants to sell.', 'a2-genres'),
        mc("« Re : du bruit dans l'immeuble la nuit » : où lis-tu ça ?", ['dans un avis de la Ville', 'sur un forum'], 1, 'Re : et un sujet de voisin : un forum. EN: Re: marks a forum reply.', 'a2-indices'),
        mc('Un message de forum dit que la cantine est trop chère. C’est...', ['un fait', "l'avis d'une personne"], 1, "Un forum, c'est une personne qui parle. EN: a forum is one person talking.", 'a2-erreurs'),
        tI('Quel genre de texte commence ainsi ? Un mot.', 'Objet : votre demande de remboursement', 'courriel', "Objet : la ligne d'un courriel. EN: Objet is an email subject line.", 'a2-genres', ['un courriel', 'email', 'un email', 'mail', 'un mail', 'e-mail', 'un e-mail']),
        tI('Quel genre ? Un mot.', "Un incendie s'est déclaré hier soir dans un entrepôt de Laval.", 'brève', 'Un fait, un lieu, un moment : une brève. EN: a news brief.', 'a2-indices', ['une brève']),
        eS("C'est une publicité : l'eau sera coupée mardi.", "C'est un avis : l'eau sera coupée mardi.", 'Une coupure annoncée par la Ville : un avis. EN: a notice from the City.', 'a2-resume'),
        lC('Écoute. Quel genre de texte ?', src(E(1025)).fr, ['un avis', 'un forum', 'une publicité'], 0, 'Sont priés de : une formule officielle. EN: an official formula.', 'a2-genres'),
        tI('Complète la question à poser avant la première ligne. Un mot.', 'Qui écrit, et pour ... ?', 'qui', 'Qui écrit, pour qui : la réponse te donne le genre. EN: who writes, for whom.', 'a2-check'),
      ],
    },
    {
      id: 'r3-chapeau', label: 'Le haut de la page', targets: ['titre-saute'],
      questions: [
        mc("Où est le chapeau d'un article ?", ['sous le titre', 'à la fin', 'dans la marge'], 0, 'Juste sous le titre, souvent en gras. EN: right under the headline.', 'a3-focus'),
        mc("« Faut-il interdire le téléphone à l'école ? » L'article va...", ['donner une seule réponse', 'présenter les deux côtés'], 1, 'Un titre en question annonce un débat. EN: a question headline announces a debate.', 'a3-predire'),
        mc('Les intertitres te donnent...', ['le plan', 'la conclusion', 'les chiffres'], 0, 'Un intertitre par partie. EN: one subheading per part.', 'a3-focus'),
        tI('Comment s’appellent les phrases en gras sous le titre ? Un mot.', 'le ... (sous le titre, en gras)', 'chapeau', "Le chapeau résume l'article. EN: the standfirst.", 'a3-focus', ['le chapeau']),
        tI('« Les loyers grimpent encore. » Les loyers montent ou descendent ? Un verbe.', 'Les loyers ...', 'montent', 'Grimper, c’est monter. EN: grimper means to climb.', 'a3-predire', ['augmentent']),
        eS('Selon le chapeau, les commerçants sont enthousiastes.', 'Selon le chapeau, les commerçants sont sceptiques.', 'Le chapeau dit qu’ils restent sceptiques. EN: they remain sceptical.', 'a3-squelette'),
        lC("Écoute ce titre. L'article parlera surtout de...", src(E(1058)).fr, ['un nouveau livre', 'une bibliothèque', 'une enquête sur la lecture'], 2, 'Un chiffre dans un titre annonce une enquête. EN: a figure in a headline announces a survey.', 'a3-titres'),
        tI('« Lausanne passe à la vitesse supérieure. » Complète avec un verbe.', 'La ville va ... son projet.', 'accélérer', 'L’image dit aller plus vite, plus loin. EN: step things up.', 'a3-titres', ['accelerer']),
      ],
    },
    {
      id: 'r4-reperage', label: 'Survoler, repérer', targets: ['premier-chiffre'],
      questions: [
        mc("Tu cherches le prix d'un billet. Tu...", ['survoles tout le texte', 'repères le chiffre'], 1, 'Une question précise : tu repères. EN: a precise question means scan.', 'a4-deux'),
        mc('« Elles ferment à 18 h, sauf le jeudi : ce jour-là, à 20 h. » Le jeudi, elles ferment à...', ['20 h', '18 h'], 0, 'Sauf le jeudi : ce jour-là, 20 h. EN: except Thursday.', 'a4-piege'),
        mc('Survoler sert à...', ["trouver l'heure exacte", "avoir l'idée générale"], 1, 'Vite, sur tout le texte, pour le sens. EN: fast, for the gist.', 'a4-deux'),
        tI("Tu n'habites pas Gatineau. L'abonnement coûte combien ? Le chiffre.", "L'abonnement coûte ... $ par année.", '45', 'Gratuit pour les résidents, 45 $ pour les autres. EN: 45 dollars for non-residents.', 'a4-page', ['quarante-cinq']),
        tI('Quel petit mot change la réponse ? Un mot.', 'Elles ferment à 18 h, ... le jeudi.', 'sauf', 'Sauf : une exception. Lis toujours la phrase entière. EN: sauf marks an exception.', 'a4-piege'),
        eS('Le club de lecture a lieu le jeudi à 14 h.', 'Le club de lecture a lieu le mercredi à 14 h.', 'Tous les mercredis à 14 h. EN: every Wednesday.', 'a4-page'),
        lC('Écoute. Ton train va à Québec. Quelle voie ?', src(E(1072)).fr, ['la voie 9', 'la voie 2', 'la voie 4'], 2, 'Québec, puis la voie 4. EN: track 4.', 'a4-ecoute'),
        tI("Le train pour Ottawa a combien de minutes de retard ? En lettres.", 'Le train pour Ottawa a un retard de ... minutes.', 'vingt', 'Vingt minutes de retard. EN: twenty minutes late.', 'a4-ecoute', ['20']),
      ],
    },
    {
      id: 'r5-chiffres', label: 'Les chiffres', targets: ['chiffre-mal-lu'],
      questions: [
        mc('« Un milliard », en anglais, c’est...', ['a million', 'a trillion', 'a billion'], 2, 'Mille millions : un billion anglais. EN: a thousand million.', 'a5-chiffres'),
        mc("« D'ici 2030 » veut dire...", ['avant 2030', 'depuis 2030'], 0, "D'ici regarde devant : un objectif. EN: by 2030.", 'a5-erreurs'),
        mc("« Près d'un lecteur sur trois » : c’est...", ['un peu plus de la moitié', 'exactement trois lecteurs', "un peu moins d'un tiers"], 2, 'Près de veut dire presque. EN: just under a third.', 'a5-chiffres'),
        tI('Septante, en France, c’est... Écris le nombre en lettres.', 'septante = ...', 'soixante-dix', 'Septante en Belgique et en Suisse, soixante-dix en France. EN: seventy.', 'a5-ecoute', ['soixante dix', '70']),
        tI('Nonante, en France ? En lettres.', 'nonante = ...', 'quatre-vingt-dix', 'Nonante, c’est quatre-vingt-dix. EN: ninety.', 'a5-ecoute', ['quatre vingt dix', '90']),
        eS('Le budget atteint deux billions de dollars.', 'Le budget atteint deux milliards de dollars.', 'Le billion anglais se dit milliard. EN: an English billion is un milliard.', 'a5-erreurs'),
        lC('Écoute. Le chômage monte ou descend ?', src(E(1085)).fr, ['il monte', 'il descend'], 1, 'De 7,2 % à 6,8 % : il descend. EN: it goes down.', 'a5-ecoute'),
        eS('La lecture sur écran est en baisse.', 'La lecture sur écran est en hausse.', 'En revanche, la lecture sur écran est en hausse. EN: screen reading is up.', 'a5-breve'),
      ],
    },
    {
      id: 'r6-mots', label: 'Le mot inconnu', targets: ['mot-bloquant'],
      questions: [
        mc('« Actuellement, je loge chez mes parents. » Actuellement veut dire...', ['en fait', 'en ce moment'], 1, 'Un faux ami : actuellement, c’est en ce moment. EN: currently.', 'a6-fauxamis'),
        mc("« La salle était bondée : il n'y avait plus une seule place. » Bondée veut dire...", ['vide', 'fermée', 'pleine'], 2, 'La suite de la phrase explique le mot. EN: the sentence explains it: full.', 'a6-deviner'),
        mc('« Impayés » : que fait im- ?', ['il dit pas', 'il dit encore'], 0, 'im-, in- : pas. EN: im- means not.', 'a6-morceaux'),
        tI('Comment dit-on « actually » en français ? Deux mots.', 'actually = ...', 'en fait', 'Actually : en fait. Jamais actuellement. EN: actually is en fait.', 'a6-fauxamis'),
        tI('Quel verbe se cache dans « réaménagement » ?', 'ré + ... + ment', 'aménager', 'Enlève ré- et -ment : il reste aménager. EN: strip the parts.', 'a6-portes', ['amenager', 'aménage']),
        eS("J'ai emprunté ce livre à la librairie.", "J'ai emprunté ce livre à la bibliothèque.", 'On emprunte à la bibliothèque ; à la librairie, on achète. EN: a librairie is a bookshop.', 'a6-fauxamis'),
        lC('Écoute. Julie a-t-elle déjà un appartement ?', src(E(1118)).fr, ['oui', "non, c'est une possibilité"], 1, 'Éventuellement et je pourrais : peut-être. EN: possibly.', 'a6-forum'),
        eS('Il est très raisonnable au bruit.', 'Il est très sensible au bruit.', 'Sensible veut dire sensitive. EN: sensitive to noise.', 'a6-cartes'),
      ],
    },
    {
      id: 'r7-panneaux', label: 'Les panneaux', targets: ['panneau-ignore'],
      questions: [
        mc("Quel panneau annonce le contraire de ce qu'on attend ?", ['de plus', "d'abord", 'pourtant'], 2, 'Pourtant : le texte tourne. EN: pourtant turns the text.', 'a7-panneaux'),
        mc('« Bref » annonce...', ['la conclusion', 'un exemple'], 0, "L'avis de l'auteur, en peu de mots. EN: the conclusion.", 'a7-erreurs'),
        mc('« Le quartier est bruyant. ... il est très bien situé. » Quel panneau ?', ['en revanche', 'de plus', 'donc'], 0, 'Un défaut, puis une qualité : le texte tourne. EN: the text turns.', 'a7-suite'),
        tI('Complète avec un panneau qui ajoute. Un mot.', 'Le bus est gratuit le dimanche. De ..., il passe toutes les dix minutes.', 'plus', 'De plus ajoute un avantage. EN: de plus adds.', 'a7-suite'),
        tI('Complète avec un panneau qui conclut. Un mot.', 'Les essais sont encourageants. Il faut ... continuer.', 'donc', 'Donc tire la conséquence. EN: donc concludes.', 'a7-suite'),
        eS("L'auteur est contre la semaine de quatre jours.", "L'auteur est pour la semaine de quatre jours.", "Pour, avec des limites : bref, elle peut marcher. EN: in favour, with limits.", 'a7-chronique'),
        lC('Écoute. Après ce mot, le texte...', src(E(1132)).fr, ['continue', 'tourne'], 1, 'Pourtant : une surprise arrive. EN: pourtant turns.', 'a7-panneaux'),
        eS('De plus, les absences ont augmenté.', 'De plus, les absences ont diminué.', 'De plus ajoute un argument pour : moins d’absences. EN: absences went down.', 'a7-chronique'),
      ],
    },
    {
      id: 'r8-reprises', label: 'Qui est qui', targets: ['reprise-perdue'],
      questions: [
        mc('« Le ministre est venu avec le maire. Ce dernier a parlé. » Qui a parlé ?', ['le ministre', 'le maire'], 1, 'Ce dernier : le dernier nommé. EN: the last named.', 'a8-qui'),
        mc('« Celle-ci » cherche un nom...', ['féminin', 'masculin'], 0, 'Celle-ci est féminin. EN: feminine.', 'a8-reprises'),
        mc('« Paul et Marc sont arrivés. Le premier avait faim. » Qui avait faim ?', ['Marc', 'les deux', 'Paul'], 2, 'Le premier nommé : Paul. EN: the first named.', 'a8-reprises'),
        tI('Remplace « ce dernier » par le nom.', 'Le ministre a inauguré le marché en présence du maire. Ce dernier a salué le projet.', 'le maire', 'Le maire est nommé en dernier. EN: the mayor.', 'a8-depeche', ['maire', 'le maire de Dakar']),
        tI('« Cette somme » reprend quoi ?', 'Le projet a coûté deux milliards. Cette somme a surpris les habitants.', 'deux milliards', 'Un nom qui reprend un chiffre. EN: a noun picking up a number.', 'a8-reprises', ['2 milliards', 'deux milliards de francs']),
        eS('Selon le ministre, les pertes de poisson pourraient baisser de moitié.', 'Selon la présidente, les pertes de poisson pourraient baisser de moitié.', "C'est Aïssatou Ndiaye, la présidente, qui le dit. EN: the president says it.", 'a8-depeche'),
        lC('Écoute. « Elle », c’est qui ?', src(E(1151)).fr, ['le maire', 'la ministre'], 1, 'Elle est féminin : la ministre. EN: the minister.', 'a8-qui'),
        eS('Le maire promet une aide aux petites vendeuses.', 'Le ministre promet une aide aux petites vendeuses.', "Il reprend le sujet d'avant : le ministre. EN: the minister.", 'a8-piege'),
      ],
    },
    {
      id: 'r9-sources', label: 'Fait ou opinion', targets: ['opinion-comme-fait'],
      questions: [
        mc('« Selon la Région » te dit...', ['qui parle', "que c'est faux"], 0, 'Selon donne la source. EN: selon names the source.', 'a9-sources'),
        mc('« Il paraît que » annonce...', ['un fait', 'une date', 'une rumeur'], 2, 'Personne ne signe : une rumeur. EN: a rumour.', 'a9-sources'),
        mc("« D'après une association, ce chiffre serait plus faible. » C'est...", ['vérifié', 'rapporté, sans garantie'], 1, "D'après et le conditionnel : pas vérifié. EN: reported, not confirmed.", 'a9-trottinettes'),
        mc("« Je trouve que c'est une bonne chose. » C'est...", ['une opinion', 'un fait', 'une rumeur'], 0, 'Je trouve que : une personne pense. EN: an opinion.', 'a9-trier'),
        tI('Complète avec un mot qui donne la source.', '... la Région, les accidents ont baissé de 15 %.', 'selon', 'Selon, ou d’après : la source. EN: according to.', 'a9-sources', ["d'après", 'daprès']),
        tI('Complète avec les mots de la rumeur.', "... qu'on va bientôt les interdire.", 'il paraît', 'Il paraît que : une rumeur, sans source. EN: apparently.', 'a9-sources', ['il parait']),
        eS('Selon Inès, la limite de vitesse est une bonne chose.', 'Selon Marc, la limite de vitesse est une bonne chose.', "C'est Marc qui trouve que c'est une bonne chose. EN: Marc said it.", 'a9-trottinettes'),
        lC('Écoute. Fait ou opinion ?', src(E(1166)).fr, ['un fait', 'une opinion'], 1, 'À mon avis : une opinion. EN: an opinion.', 'a9-radio'),
      ],
    },
    {
      id: 'r10-examen', label: "L'épreuve", targets: ['reponse-recopiee'],
      questions: [
        mc("À l'épreuve, tu lis d'abord...", ['le document', 'la question'], 1, 'La question te dit quoi chercher. EN: the question comes first.', 'a10-astuces'),
        mc("« Une expérience est un atout, mais elle n'est pas obligatoire. » L'expérience est...", ['exigée', 'interdite', 'utile, pas exigée'], 2, 'Un atout, pas une condition. EN: useful, not required.', 'a10-question'),
        mc('Une réponse reprend trois mots du texte, dans un autre sens. Elle est...', ['un piège', 'forcément juste'], 0, 'Les pièges recopient le texte. EN: traps copy the text.', 'a10-pieges'),
        mc('Question : « Quel est le salaire ? » Tu cherches...', ['un chiffre avec $', 'une date', 'un nom'], 0, 'Un salaire : un chiffre et une monnaie. EN: a figure and a currency.', 'a10-question'),
        tI('Le poste est à temps plein ? Corrige. Un mot.', 'Le poste est à temps ...', 'partiel', 'Vingt-quatre heures par semaine : temps partiel. EN: part-time.', 'a10-epreuve'),
        tI('Qui sera contacté ? Un mot.', 'Seules les personnes ... seront contactées.', 'retenues', 'Seules limite la phrase. EN: only the shortlisted.', 'a10-pieges', ['retenus']),
        eS("Le café paie 19 $ de l'heure, pourboires compris.", "Le café paie 19 $ de l'heure, plus les pourboires.", 'Plus : les pourboires s’ajoutent. EN: tips come on top.', 'a10-pieges'),
        lC("Écoute. Faut-il de l'expérience en librairie ?", src(E(1179)).fr, ['oui', 'non'], 1, 'Pas obligatoire : non. EN: not required.', 'a10-epreuve'),
      ],
    },
    {
      id: 'r11-resume', label: 'Le résumé', targets: ['resume-copie'],
      questions: [
        mc('Un résumé pour un ami commence par...', ['la dernière phrase du texte', 'le genre et le sujet', 'ton opinion'], 1, "J'ai lu un article sur... EN: say what you read first.", 'a11-plan'),
        mc("Combien de points soutiennent l'idée principale, dans ta mission ?", ['deux', 'dix'], 0, "Deux points, pas une liste. EN: two points.", 'a10-resume'),
        mc("« Selon le directeur d'une banque alimentaire, ce n'est pas aux bénévoles de régler la faim. » C'est...", ['un fait', 'une opinion, avec son auteur'], 1, 'Selon et un avis : une opinion signalée. EN: a flagged opinion.', 'a11-article'),
        mc('Dans ton résumé, tu écris « celle-ci passe deux fois par jour » ?', ["non, j'écris le nom", 'oui'], 0, "Ton ami n'a pas le texte pour remonter. EN: give the name.", 'a8-resume'),
        tI("Complète avec l'expression qui ouvre un résumé à l'oral. Deux mots.", "..., l'article dit que ces frigos marchent bien.", 'en gros', 'En gros : l’essentiel, en une phrase. EN: basically.', 'a11-scenario'),
        tI("Combien de frigos communautaires aujourd'hui ? En lettres ou en chiffres.", 'Il y en a maintenant plus de ...', 'quarante', 'Plus de quarante, contre trois il y a cinq ans. EN: over forty.', 'a11-article', ['40']),
        eS('Les frigos communautaires disparaissent à Montréal.', 'Les frigos communautaires se multiplient à Montréal.', "L'idée principale : ils se multiplient. EN: they are multiplying.", 'a11-article'),
        lC('Écoute. Cette phrase peut-elle ouvrir ton résumé ?', src(E(1191)).fr, ['oui', 'non'], 0, 'Le genre et le sujet, dès la première phrase. EN: genre and subject first.', 'a11-plan'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Résumer pour un ami',
    opener: {
      line: "Samir n'a pas lu l'article : à toi de lui dire l'essentiel, avec tes mots. EN: Samir has not read the article: your turn to tell him the gist, in your own words.",
      imageRef: 'lessons/strategies-lecture/act11.jpg',
    },
    sections: [],
    milestone: "Tu as résumé un vrai article pour un ami et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You summarised a real article for a friend and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 130,
    restPoints: ['a11-article', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-chapeau', 'a11-quiz/r6-mots', 'a11-quiz/r9-sources'],
  },
  sections: [
    A11_ARTICLE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-sens', title: 'Les réflexes du bon lecteur', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute : ce sont les réflexes d'un bon lecteur. EN: read each line aloud: a good reader's habits.", items: [E(1006), E(1008), E(1009), E(1010), E(1011), E(1013)], audio: AUDIO },
  { id: 'd-genre', title: 'Pour tous, ou pour toi', format: 'sort' as const, coach: "Deux piles : un texte public (avis, brève) ou un texte qui te parle à toi (forum, courriel, publicité). EN: sort public texts from texts addressed to you.", buckets: ['pour tout le monde', 'pour toi'], items: [E(1024), E(1021), E(1026), E(1023), E(1025), E(1028)], audio: AUDIO },
  { id: 'd-chapeau', title: "L'essentiel en dix secondes", format: 'mcq' as const, coach: 'Lis le titre et le chapeau, puis devine le contenu avant de lire. EN: read the headline and standfirst, then predict.', q: "Où trouves-tu l'essentiel d'un article en dix secondes ?", opts: ['dans le dernier paragraphe', 'dans le chapeau'], correct: 1, why: "Le chapeau résume l'article. EN: the standfirst sums it up.", items: [E(1045), E(1046), E(1047), E(1051), E(1052), E(1053)], audio: AUDIO },
  { id: 'd-reperage', title: 'Le mot, puis la phrase', format: 'mcq' as const, coach: 'Cherche le mot de la question, puis lis toute la phrase autour. EN: find the word, then read the whole sentence.', q: 'Elles ferment à 18 h, sauf le jeudi. Le jeudi, elles ferment à...', opts: ['20 h', '18 h'], correct: 0, why: 'Sauf le jeudi : ce jour-là, 20 h. EN: except Thursday.', items: [E(1064), E(1065), E(1066), E(1068), E(1072), E(1073)], audio: AUDIO },
  { id: 'd-chiffres', title: 'Ça monte ou ça descend', format: 'sort' as const, coach: 'Deux piles : le chiffre monte ou descend ? Regarde les mots autour. EN: sort by which way the number moves.', buckets: ['ça monte', 'ça descend'], items: [E(1081), E(1080), E(1089), 'fr.b1.economie.004', E(1052), E(1085)], audio: AUDIO },
  { id: 'd-mots', title: 'Le cousin ou le faux ami', format: 'mcq' as const, coach: "Si le sens anglais rend la phrase bizarre, c'est un faux ami. EN: if the English sense is odd, it is a false friend.", q: '« Actuellement, je loge chez mes parents. » Actuellement veut dire...', opts: ['en fait', 'en ce moment'], correct: 1, why: 'Actuellement : en ce moment. EN: currently.', items: [E(1116), E(1118), E(1121), E(1122), E(1124), E(1103)], audio: AUDIO },
  { id: 'd-panneaux', title: 'Ajouter ou tourner', format: 'sort' as const, coach: 'Deux piles : le panneau ajoute, ou il tourne ? EN: sort signposts that add from those that turn.', buckets: ['le texte continue', 'le texte tourne'], items: [E(1131), E(1132), E(1130), E(1133), E(1139), E(1137)], audio: AUDIO },
  { id: 'd-reprises', title: 'Le dernier nommé', format: 'mcq' as const, coach: "Remonte au dernier nom cité : ce dernier, c'est lui. EN: go back to the last name mentioned.", q: 'Le ministre est venu avec le maire. Ce dernier a parlé. Qui a parlé ?', opts: ['le maire', 'le ministre'], correct: 0, why: 'Le dernier nommé : le maire. EN: the last named.', items: [E(1145), E(1146), E(1147), E(1148), E(1150), E(1151)], audio: AUDIO },
  { id: 'd-sources', title: 'Ça se vérifie, ou ça se discute', format: 'sort' as const, coach: 'Deux piles : un fait qu’on peut vérifier, ou une opinion, une rumeur ? EN: checkable fact, or opinion and rumour?', buckets: ['un fait', 'une opinion ou une rumeur'], items: [E(1160), E(1163), E(1165), E(1164), 'fr.b1.gouvernement.004', E(1166)], audio: AUDIO },
  { id: 'd-examen', title: 'La question d’abord', format: 'mcq' as const, coach: 'Lis la question, souligne son mot, cherche son sens dans le document. EN: question, key word, then its meaning in the text.', q: "« Une expérience est un atout, mais elle n'est pas obligatoire. » L'expérience est-elle exigée ?", opts: ['oui', 'non'], correct: 1, why: 'Pas obligatoire : non. EN: not required.', items: [E(1175), E(1176), E(1177), E(1178), E(1180), E(1184)], audio: AUDIO },
  { id: 'd-resume', title: 'La charpente du résumé', format: 'flashcard' as const, coach: "Dis chaque phrase à voix haute : c'est la charpente de ton résumé. EN: say each line aloud: the frame of your summary.", items: [E(1191), E(1192), E(1187), E(1188), E(1189), E(1190)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'mot-a-mot', description: 'Reads a hard text word by word from the first line, stops at the first unknown word, and never reaches the meaning the headline already gave.', detectOn: ['a1-scene', 'a1-sans', 'a1-check', 'a11-mission'], drill: 'd-sens', retest: 'd-sens' },
  { id: 'genre-ignore', description: 'Reads every text the same way, taking an advert, a forum post or an old brief as neutral current fact.', detectOn: ['a2-indices', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-genre', retest: 'd-genre' },
  { id: 'titre-saute', description: 'Skips the headline, standfirst and subheadings and starts on the body, so has no prediction to read against.', detectOn: ['a3-predire', 'a3-resume', 'a3-check', 'a11-mission'], drill: 'd-chapeau', retest: 'd-chapeau' },
  { id: 'premier-chiffre', description: 'Reads the whole text to find one detail, or stops at the first figure found and misses the sauf or the other place that changes it.', detectOn: ['a4-quel', 'a4-piege', 'a4-check'], drill: 'd-reperage', retest: 'd-reperage' },
  { id: 'chiffre-mal-lu', description: 'Misreads numbers the English way: billion for milliard, a decimal point, d’ici as since, points as per cent.', detectOn: ['a5-ecoute', 'a5-erreurs', 'a5-check', 'a11-mission'], drill: 'd-chiffres', retest: 'd-chiffres' },
  { id: 'mot-bloquant', description: 'Stops at an unknown word instead of reading its neighbours and parts, or trusts an English look-alike that is a false friend.', detectOn: ['a6-deviner', 'a6-fauxamis', 'a6-check', 'a11-mission'], drill: 'd-mots', retest: 'd-mots' },
  { id: 'panneau-ignore', description: 'Reads past pourtant, en revanche or bref as filler, so misses where the argument turns and reports the author as simply for or against.', detectOn: ['a7-suite', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-panneaux', retest: 'd-panneaux' },
  { id: 'reprise-perdue', description: 'Attaches ce dernier, celle-ci or il to the most important or the first-named person instead of tracing it back.', detectOn: ['a8-qui', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-reprises', retest: 'd-reprises' },
  { id: 'opinion-comme-fait', description: 'Reports an opinion, a sourced claim or a rumour as plain fact, dropping selon, d’après, il paraît que or je trouve que.', detectOn: ['a9-trier', 'a9-radio', 'a9-check', 'a11-mission'], drill: 'd-sources', retest: 'd-sources' },
  { id: 'reponse-recopiee', description: 'In the exam, reads the document before the question and picks the option that copies the document’s words in another sense.', detectOn: ['a10-question', 'a10-pieges', 'a10-check'], drill: 'd-examen', retest: 'd-examen' },
  { id: 'resume-copie', description: 'Writes a summary that copies the article’s sentences or lists its details, with no main idea and no flagged opinion.', detectOn: ['a11-article', 'a11-cheat', 'a11-mission'], drill: 'd-resume', retest: 'd-resume' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here. Every sheet is reached
 *  from a mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-genres', 'Les genres de textes', ['six genres', 'les indices', 'ce que tu peux croire'], [
    teach('sheet-genres-teach', 'Qui écrit, et pour qui',
      `Avant la première ligne, regarde trois choses : la source (la Ville, un journal, une personne), la forme (des majuscules, une date, un « Re : », un pourcentage) et le destinataire (tous les résidents, toi seul, un forum). Ces trois indices te donnent le genre, et le genre te dit ce que le texte veut de toi. Un avis parle souvent au passif, comme ${PASSIF_REF} te l'a montré : « ${B118_REFRAME} » EN: Source, layout and audience give the genre, and the genre tells you what the text wants from you.`),
    table('sheet-genres-table', 'Six genres', ['Genre', 'Indices', 'Ce qu’il veut', 'Exemple'], [
      ['l’avis', 'AVIS, la Ville, une date, merci de', 'te dire ce qui change', 'Le stationnement sera interdit des deux côtés de la rue jeudi.'],
      ['la brève', 'publié à, un lieu, un fait', 't’informer vite', "Un incendie s'est déclaré hier soir dans un entrepôt de Laval."],
      ['le forum', 'Re :, je, un prénom, une question', 'donner un avis, demander de l’aide', 'Perso, je trouve que le nouveau parc est super.'],
      ['le courriel', 'Objet, Bonjour Madame, une signature', 'te demander quelque chose', 'Bonjour Madame, je vous écris au sujet de la facture de mars.'],
      ['la publicité', '%, un point d’exclamation, profitez', 'te vendre', 'Deux cafés achetés, le troisième offert.'],
      ['l’article', 'un titre, un chapeau, des intertitres', 'expliquer, avec des sources', 'Pourquoi les jeunes quittent-ils les régions ?'],
    ]),
    table('sheet-genres-confiance', 'Ce que tu peux croire', ['Genre', 'Tu lis', 'Attention'], [
      ['l’avis', 'une règle officielle', 'la date, l’heure et le lieu exacts'],
      ['la brève', 'un fait récent', 'l’heure de publication : c’est peut-être fini'],
      ['le forum', 'une opinion', 'une personne, pas une vérité'],
      ['la publicité', 'une promesse', 'les conditions, souvent en petit'],
      ['l’article', 'des faits et des avis', 'qui parle : selon, d’après'],
      ['le courriel', 'une demande', 'ce qu’on attend de toi, et pour quand'],
    ]),
  ]),
  sheet('sheet-avant', 'Lire en trois temps', ['avant : titre, chapeau, intertitres', 'pendant : survoler, repérer', "à l'examen", 'après : le résumé'], [
    teach('sheet-avant-teach', 'Avant, pendant, après',
      "Avant de lire, regarde le titre, le chapeau et les intertitres, et devine ce que le texte va dire. Pendant, survole pour le sens ou repère un détail, selon ta question. Après, dis l'idée en une phrase : si tu ne peux pas, relis le chapeau. EN: Before, predict from the headline and standfirst; during, skim or scan; after, say the idea in one sentence."),
    table('sheet-avant-table', 'Avant de lire', ['Partie', 'Où', 'Ce qu’elle te donne'], [
      ['le titre', 'en haut, en gros', 'le sujet'],
      ['le chapeau', 'sous le titre, en gras', 'l’essentiel en deux ou trois phrases'],
      ['les intertitres', 'entre les paragraphes', 'le plan'],
      ['la première phrase', 'au début de chaque paragraphe', 'l’idée du paragraphe'],
      ['la source et la date', 'en haut ou en bas', 'qui parle, et quand'],
      ['les chiffres', 'partout', 'ce qui a changé, et de combien'],
    ]),
    table('sheet-avant-survol', 'Survoler ou repérer', ['Ta question', 'Tu fais', 'Comment'], [
      ['De quoi ça parle ?', 'tu survoles', 'titre, début des paragraphes, mots qui reviennent'],
      ['Qu’est-ce qui change ?', 'tu survoles', 'cherche nouveauté, dorénavant, désormais'],
      ['À quelle heure ?', 'tu repères', 'cherche un chiffre avec h, puis lis la phrase'],
      ['Combien ça coûte ?', 'tu repères', 'cherche $, euros, francs, gratuit'],
      ['Quel jour ?', 'tu repères', 'cherche le jour, puis sauf, seulement, fermé'],
      ['Pour qui ?', 'tu repères', 'cherche résidents, enfants, étudiants'],
    ]),
    table('sheet-avant-examen', "À l'examen de compréhension écrite", ['Étape', 'Ce que tu fais'], [
      ['1', 'Lis la question avant le document.'],
      ['2', 'Souligne le mot important de la question.'],
      ['3', 'Cherche ce mot, ou un mot de la même idée, dans le document.'],
      ['4', 'Lis toute la phrase autour.'],
      ['5', 'Méfie-toi d’une réponse qui répète juste des mots du texte.'],
      ['6', 'Pas sûr ? Élimine les réponses fausses, puis choisis.'],
    ]),
    table('sheet-avant-resume', 'Le résumé pour un ami', ['À faire', 'Comment'], [
      ['Dire le genre et le sujet', 'J’ai lu un article sur...'],
      ['L’idée principale', 'En gros, ...'],
      ['Deux points', 'D’abord... Ensuite...'],
      ['Une limite ou l’autre camp', 'Mais... / Par contre...'],
      ['Une opinion signalée', 'Selon..., il trouve que...'],
      ['Tes mots, des noms clairs', 'pas de ce dernier, pas de phrase recopiée'],
    ]),
  ]),
  sheet('sheet-mots', 'Les mots inconnus', ['quatre portes', 'les morceaux de mots', 'les faux amis'], [
    teach('sheet-mots-teach', 'Quatre portes avant le dictionnaire',
      `Devant un mot inconnu, essaie quatre portes. Un : la phrase autour. Deux : un contraire ou un exemple tout près. Trois : un morceau connu dans le mot. Quatre : un cousin anglais, en vérifiant que la phrase garde un sens. Pour -ment, ${ADVERBES_REF} a donné la règle : « ${A217_REFRAME} » En français : « ${A217_REFRAME_FR} » EN: Try the sentence, a nearby opposite or example, a known part, then an English cousin, before the dictionary.`),
    table('sheet-mots-morceaux', 'Six morceaux de mots', ['Morceau', 'Ce qu’il fait', 'Exemple'], [
      ['ré-, re-', 'encore, de nouveau', 'réaménager, reloger'],
      ['dé-, dés-', 'le contraire, défaire', 'désactiver, déménager'],
      ['in-, im-', 'pas', 'inabordable, impayé'],
      ['-able', 'qu’on peut', 'abordable, valable'],
      ['-ment', 'une action (nom) ou une manière (adverbe)', 'le réaménagement, actuellement'],
      ['-tion', 'souvent le même mot en anglais', 'la colocation, la consultation'],
    ]),
    table('sheet-mots-fauxamis', 'Huit faux amis', ['Le mot', 'Il veut dire', 'Pas'], [
      ['actuellement', 'en ce moment', 'actually (en fait)'],
      ['éventuellement', 'peut-être', 'eventually (finalement)'],
      ['la librairie', 'le magasin de livres', 'library (la bibliothèque)'],
      ['assister à', 'être présent à', 'to assist (aider)'],
      ['sensible', 'qui réagit vite, fragile', 'sensible (raisonnable)'],
      ['la monnaie', 'les pièces, le change', 'money (l’argent)'],
      ['la location', 'le fait de louer', 'location (l’endroit)'],
      ['la déception', 'le fait d’être déçu', 'deception (la tromperie)'],
    ]),
  ]),
  sheet('sheet-fil', 'Le fil du texte', ['les panneaux', 'les reprises', 'ce dernier'], [
    teach('sheet-fil-teach', 'Les panneaux et les reprises',
      `Deux sortes de petits mots tiennent un texte ensemble. Les connecteurs sont des panneaux : ils disent si le texte ajoute, tourne ou conclut. ${Cap(CONNECTEURS_REF)} t'apprennent à les écrire ; ici, tu les lis. Les reprises reprennent quelqu'un : il, celle-ci, ce dernier, la commerçante. ${Cap(DEMONSTRATIFS_REF)} a dit : « ${A233_REFRAME} » En français : « ${A233_REFRAME_FR} » Dans un article, celui-ci remplace le dernier nom cité. EN: Connectors say where the text goes; reprises say who it is still talking about.`),
    table('sheet-fil-connecteurs', 'Les panneaux', ['Le texte...', 'Connecteurs', 'Ce qui suit'], [
      ['commence', "d'abord, premièrement", 'le premier argument'],
      ['ajoute', 'de plus, par ailleurs, aussi', 'un argument dans le même sens'],
      ['tourne', 'pourtant, en revanche, mais, cependant', 'le contraire de ce qu’on attend'],
      ['explique', 'car, parce que', 'la raison'],
      ['conclut', 'donc, bref, ainsi', 'l’idée de l’auteur'],
      ['donne un exemple', 'par exemple, comme', 'un cas précis'],
    ]),
    table('sheet-fil-reprises', 'Les reprises', ['Reprise', 'Elle renvoie à', 'Exemple'], [
      ['il, elle', 'souvent le sujet de la phrase d’avant', 'Le ministre a répondu. Il n’a pas donné de date.'],
      ['ce dernier, cette dernière', 'le dernier nom cité', 'Le ministre est venu avec le maire. Ce dernier a parlé.'],
      ['celui-ci, celle-ci', 'le dernier nom de ce genre', 'La présidente a parlé. Celle-ci regrette le prix.'],
      ['le premier, le second', 'le premier et le deuxième nommés', 'Paul et Marc : le premier était fatigué.'],
      ['un autre nom', 'la même personne, dite autrement', 'Mme Ndiaye... La commerçante...'],
      ['cette somme, ce chiffre', 'un nombre cité juste avant', 'Deux milliards. Cette somme a surpris.'],
    ]),
  ]),
  sheet('sheet-preuves', 'Chiffres, sources et opinions', ['lire un chiffre', 'selon, d’après, il paraît que', 'fait ou opinion'], [
    teach('sheet-preuves-teach', 'Combien, et qui le dit',
      `Un chiffre et une source sont les deux preuves d'un texte. Pour le chiffre, regarde ce qu'il compte et s'il monte ou descend. Pour la source, regarde qui parle. ${Cap(CONDITIONNEL_REF)} t'a montré le conditionnel de la presse : « ${B108_REFRAME} » Après selon ou d'après, il signale une information non vérifiée. ${Cap(SUBJ_DECLENCHEURS_REF)} a rangé il paraît que avec les expressions qui gardent l'indicatif : tu rapportes ce qu'on dit. EN: Check what a number counts and which way it moves, then who is speaking.`),
    table('sheet-preuves-chiffres', 'Lire un chiffre', ['Tu lis', 'Ça veut dire', 'Attention'], [
      ['en hausse de 8 %', 'ça monte', 'de combien, et depuis quand'],
      ['en baisse de onze points', 'ça descend', 'des points, pas des pour cent'],
      ['un sur trois, près de la moitié', 'une partie du groupe', 'près de = un peu moins'],
      ['1,5 %', 'un et demi pour cent', 'la virgule française'],
      ['2 500, un milliard', 'deux mille cinq cents, mille millions', 'un billion = mille milliards'],
      ["d'ici 2030, depuis 2014", 'avant 2030, à partir de 2014', 'd’ici regarde vers l’avenir'],
    ]),
    table('sheet-preuves-sources', "D'où vient l'information", ['Marqueur', 'Qui parle', 'Tu peux le croire ?'], [
      ['un chiffre, une date, sans source', 'le journaliste', 'un fait, à vérifier ailleurs'],
      ['selon la Région', 'la Région', 'sa version des faits'],
      ["d'après + conditionnel", 'une source, sans garantie', 'pas encore vérifié'],
      ['a déclaré que', 'une personne, rapportée', 'ce qu’elle a dit, pas forcément vrai'],
      ['il paraît que', 'on ne sait pas qui', 'une rumeur'],
      ['je trouve que, à mon avis', 'une personne', 'une opinion'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-37-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-37-teletravail': "Karine's article (act 1), ONE VOICE, one take, Québécois French, read at a newsreader's pace and NOT slowed down: the learner must hear that the article is above their level. A clear beat after the headline and after the first sentence, because those two are the whole lesson of the act.",
  'rec-b1-37-ecran': "The phone screen (act 2), ONE VOICE, one take, read as four separate items with a two-second pause between them. Each fragment keeps its genre's voice: the notice flat and official, the brief brisk, the forum post casual and a little annoyed, the advert upbeat. Read the numbers « 1. » to « 4. » aloud so the learner can find each text again.",
  'rec-b1-37-squelette': "The article skeleton (act 3), ONE VOICE, one take, Swiss French welcome. Say « Titre », « Chapeau » and « Intertitres » as labels in a slightly lower voice, then read each part. A long pause before the subheadings: the learner predicts in that silence.",
  'rec-b1-37-velo': "The full Lausanne article (act 3), ONE VOICE, one take, the same voice as the skeleton so the second reading sounds like the same page. Each subheading read as a heading, with a beat before and after. The shopkeeper's quotation in a second, older female voice if available; otherwise the same voice, slightly slower.",
  'rec-b1-37-biblio': "The Gatineau library page (act 4), ONE VOICE, one take, Québécois French, read at the pace of a municipal recorded message. Every time and price is said in full (« dix heures », « quarante-cinq dollars »). NO extra stress on « sauf le jeudi »: the trap only works if the learner has to catch it.",
  'rec-b1-37-vitesses': 'The four skim and scan cards. Cards one and two at the same pace. On card three, a clear beat at the middot between the two questions.',
  'rec-b1-37-gare': "REQUIRED FOR THE EAR MISSION (act 4): eight station announcements, ONE TAKE, ONE VOICE, in authored order, in the flat rhythm of a Montréal station tannoy, with a short chime-length pause between lines. Times said as a tannoy says them (« dix-sept heures douze »). The learner listens for ONE line among eight, so no line may be louder or slower than the others.",
  'rec-b1-37-piege-reperage': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-37-enquete': "The reading survey brief (act 5), ONE VOICE, one take, Québécois radio-news pace. Every figure said in full and at the SAME speed as the words around it (« quarante et un pour cent », « deux mille cinq cents personnes »): the act is about the words around the number, so the number gets no special treatment.",
  'rec-b1-37-chiffres': 'The four number cards. On each card a clear beat at the middot. Card three: « un virgule cinq pour cent » with the word virgule clearly audible.',
  'rec-b1-37-radio-chiffres': "REQUIRED FOR THE EAR MISSION (act 5): eight lines, ONE TAKE, in authored order. Lines two and three are BELGIAN or SWISS (septante, nonante) and should be read by a Belgian or Swiss voice; the others by a France or Québec voice. Decimals said with « virgule ». Ordinary news pace: the learner must catch the number at speed.",
  'rec-b1-37-forum': "Julie's forum post (act 6), ONE VOICE, one take, a young Belgian woman, reading her own post aloud, informal and a little tired. « Kot » pronounced [kɔt]. Do NOT slow down on the hard words: the act is that the sentence around them carries the meaning.",
  'rec-b1-37-portes': 'The four doors cards. Card three is three word parts separated by middots: read them as three separate chunks with a beat between each, then nothing more.',
  'rec-b1-37-faux-amis': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-37-chronique': "The opinion column (act 7), ONE VOICE, one take, the measured voice of a columnist reading their own piece. Give each signpost (d'abord, de plus, pourtant, en revanche, par ailleurs, bref, donc) its normal sentence weight, NOT extra stress: the learner has to find them, not be handed them.",
  'rec-b1-37-panneaux': "The three signpost cards and the citation card. On card four, the three connectors separated by middots each get a clear beat.",
  'rec-b1-37-depeche': "The Dakar dispatch (act 8), ONE VOICE, one take, Senegalese French welcome, read at radio-news pace. Names said in full every time (Aïssatou Ndiaye, Soumbédioune). « Ce dernier », « lui », « celle-ci » and « il » get NO extra stress: the learner traces them back, the voice does not.",
  'rec-b1-37-piege-reprises': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-37-trottinettes': "The Brussels page (act 9), a Belgian newsreader for the article, ONE take. The two quotations in two other voices: Marc, a relaxed retired man; Inès, a student, quick and sure of herself. « Il paraît que » said lightly, the way people say it, never as a headline.",
  'rec-b1-37-flagey': "REQUIRED FOR THE EAR MISSION (act 9): eight lines, ONE TAKE, in authored order, as a street report: a newsreader for the factual and sourced lines, two passers-by for the opinion lines (3 and 6) and the rumour (4). The learner must tell fact from opinion by the WORDS, so no line may be signalled by a sarcastic or doubtful tone.",
  'rec-b1-37-emploi': "The job advert (act 10), ONE VOICE, one take, read like an exam audio script: even, clear, neutral Québécois French, no performance. « Un atout, mais elle n'est pas obligatoire » and « Seules les personnes retenues » read at exactly the same pace as the rest, because those are the words the exam questions turn on.",
  'rec-b1-37-frigos': "THE TASK ARTICLE (act 11), ONE VOICE, one take, Québécois French, radio-magazine pace, not slowed. The volunteer's quotation in a second female voice, warm; the food-bank director's in a male voice, firm and calm. A clear beat before « Pourtant », because the summary has to keep that turn.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 37',
  intro: 'You will meet French texts that are above your level for years, and a dictionary will not save you on a train or in an exam. This lesson teaches the order a good reader works in: the kind of text first, then the headline and standfirst, the numbers, the signposts, the names and the sources, and only then the hard word. It ends with a summary of a real article for a friend who has not read it.',
  skill: 'CE',
  grammarAssumed: [
    NOMBRES21_UNIT, GRANDS_NOMBRES_UNIT, ADVERBES_UNIT, DEMONSTRATIFS_UNIT,
    CONDITIONNEL_UNIT, SUBJ_DECLENCHEURS_UNIT, PASSIF_UNIT, DISCOURS_UNIT,
  ],
  grammarIntroduced: [
    'Reading strategy: identifying genre from source, layout and audience before reading',
    'Prediction from headline, standfirst and subheadings; skimming for gist versus scanning for a detail',
    'Inferring an unknown word from context, word parts (re-, dé-, in-, -able, -ment, -tion) and cognates, and recognising false friends',
    'Connectors read as signposts of an argument, and reference chains (il, celui-ci, ce dernier, le premier, le second)',
    'Distinguishing fact, sourced claim, rumour and opinion; question-first reading for the TCF and TEF; the written summary',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Pendant des années, tu vas lire des textes un peu trop difficiles pour toi. Cette leçon t'apprend l'ordre d'un bon lecteur : le genre du texte d'abord, puis le titre et le chapeau, les chiffres, les panneaux, les noms et les sources, et seulement ensuite le mot difficile. À la fin, tu résumes un vrai article pour un ami qui ne l'a pas lu.",
    minutes: 140,
    difficulty: 3,
    glyph: 'lire',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: STRATEGIES_LECTURE_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, FRIGOS_TEXT, dicteeFor };
