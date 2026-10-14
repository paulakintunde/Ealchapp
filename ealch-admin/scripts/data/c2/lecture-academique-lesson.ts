// c2.12.l1 « Lire des textes académiques denses » — the lesson. DRAFT, wave 3
// of the C2 band. To RICH-LESSON-STANDARD.md (the workshop shape, text and
// grid) on top of B1-BUILD-PLAYBOOK.md, with the C2 rules of
// C2-BUILD-PLAN.md and the c2.12 brief in C2-RESEARCH-PLAN.md. Structural
// model: `c2/analyse-litteraire-lesson.ts` (c2.02): same helpers, same
// assembly, same validation shape, the reading/glossary/comprehension-check
// pattern reused; its production TASK, its spoken SCENARIO and its oral
// `practice` section are all dropped (see below).
//
// Not imported, not merged into seed.json, not published.
//
// ══════════════════════════════════════════════════════════════════════════
//  R SHAPE: RECOGNITION ONLY, BY BRIEF
// ══════════════════════════════════════════════════════════════════════════
//
//   This lesson's brief is explicit: c2.12 is a reading-comprehension lesson
//   that extracts argument structure from dense text, and the learner is
//   NEVER asked to produce written French as a graded task. No `task`
//   section exists anywhere below, no `scenario` section exists either (nor
//   any spoken-production `practice` section): there is nothing here for the
//   five-bug self-check's scenario-turn item to apply to, which is noted
//   explicitly rather than silently skipped. `skill: 'CE'` reflects this: the
//   future exam link is CE@c2 (informational only, per the brief; nothing is
//   wired to it here).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Acts 2 to 5 each hand the learner ONE move for working a dense sentence
//   (backbone, stacked hedge, citation attribution, nominal chain), always on
//   NEW practice material, never recycling the same sentence across two
//   moves. Act 6 holds all four moves on one new paragraph at once. Act 7
//   names the realistic time constraint as its own skill, against the three
//   reflexes that burn it. Act 8 is the closing act: one complete four-
//   paragraph original text, read once, under the lesson's own stated
//   budget, then the quiz, review and roundup. No task, no scenario.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le problème : une phrase,   5  Nadia loses the clock inside one
//       une horloge                   52-word sentence; the explicit line
//                                      between c1.20 and this lesson
//    2  L’armature de la phrase    5  the main subject+verb, found first,
//                                      before any subordinate clause
//    3  Les réserves empilées      5  two or three academic hedges stacked
//                                      before the one claim they surround
//    4  Attribuer la citation      5  whose claim a sentence reports: the
//                                      author's own, or a named source's
//    5  La chaîne nominale         5  a chain of abstract nouns, unpacked
//                                      back into the plain clauses it compresses
//    6  L’architecture de          4  one new paragraph, all four moves held
//       l’argument                    together at once
//    7  Lire contre le             4  the time constraint itself, named, and
//       chronomètre                   the three reflexes that burn it
//    8  Ta lecture dense           7  the closing anchor text, the method
//                                      recap, the cheat sheet, progress, the
//                                      quiz, the review, the roundup
//
//   TOTAL 39 missions, 8 acts (5,5,4,5,5,4,4,7). Corpus: 108 authored rows
//   (.2400-.2507, inside the claimed .2400-.2599 block; the three anchor
//   texts themselves live as EXTRACT_DEMO/EXTRACT_PARAGRAPH/EXTRACT_FULL
//   constants rather than corpus rows, per the reading-text convention
//   c1.14/c1.19/c2.02 already use). Quiz: 8 rounds of 4 (16 mcq, 8 typeIn,
//   4 errorSpot, 4 listenChoose). Five error triggers, five remediation
//   drills, one reference sheet, six terms, four tapTables, one trapDrill.
//   Chapter artwork: `c2-lecture-academique-image-prompts.md`, 8 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un texte dense se déplie, phrase par phrase, avant que l’horloge ne
//   s’arrête. » EN: A dense text unfolds, sentence by sentence, before the
//   clock runs out.
//
//   ONE METAPHOR, DÉPLIER (unfolding). c1.20's image was the filigrane, a
//   sheet held up to the light for what shows through it. This lesson's
//   problem comes BEFORE that: a sentence folded shut, clause inside clause,
//   that must be unfolded before any light can be held up to it, and
//   unfolded before the clock runs out.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    finding a dense sentence's own backbone before its subordinates;
//           counting and weighing stacked academic hedges; attributing a
//           reported claim to its real speaker, author or cited source; the
//           length of an abstract-nominalisation chain and unpacking it into
//           plain clauses; holding all four on one new paragraph; the
//           realistic time constraint as a named skill, and its three
//           clock-burning reflexes.
//   QUOTES  c1.20's reframe (act 1), imported from its own corpus file,
//           never retyped.
//   LEAVES  interpretation itself (stance, irony, presupposition, the scope
//           of a conclusion, the agent hidden behind a passive or a single
//           nominalisation) to c1.20, never re-taught; discipline-specific
//           jargon (legal, medical, philosophical) to langage-juridique,
//           francais-soins, notions-morales/notions-politiques, never
//           touched here: every text below stays general-academic register.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner. French only on the learner surface; English authored
//   on every `en` field and every trailing « EN: ». No em dash, no U+203F
//   tie, never "honnête"/"honest". Typographic ’ throughout. Citations by
//   trail position in French words (« la leçon 20 du C1 »), never a raw id.
//   Mission answer slots are spread by `balanceSlots()`; the quiz by
//   `spreadSlots()`.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 39 missions, below c2.02's 50, because this lesson drops the
//      scenario/task/practice closing trio the brief rules out for an R-shape
//      lesson. Extend any single act before the phone review, or ship at
//      this size?
//   2. No row is reused from c1.20 by id (same reasoning as c2.02 §D: no
//      Postgres session was opened while drafting). Reuse specific rows by
//      id once the pre-review pass has Postgres access, or keep every
//      example freshly authored as this draft does?
//   3. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.
//   4. No `listening`/`hideLines` section anywhere in this lesson (it is a
//      reading lesson, not a listening one); the quiz's `listenChoose`
//      questions read an already-visible corpus row aloud by TTS, which is
//      why no `rec-*` recording id or REC_DESC catalog appears in this file.
//      Confirm that is the right call for a CE-only lesson, or add a short
//      listening act later?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion, TrapCard, TrapStep,
} from '../../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, Cap, ALL_ROWS, ROWS_BY_ACT,
  IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  EXTRACT_DEMO, EXTRACT_DEMO_EN, EXTRACT_PARAGRAPH, EXTRACT_PARAGRAPH_EN,
  EXTRACT_FULL, EXTRACT_FULL_EN, SOURCE_NOTE,
  C120_REF, C120_REFRAME, C120_REFRAME_EN, REFRAME, REFRAME_EN,
} from './lecture-academique-corpus.ts';
import { LECTURE_ACADEMIQUE_TERMS } from './lecture-academique-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };

type SrcItem = { id: string; fr: string; en: string };
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as unknown as SrcItem]));

/** An item's fr/en. Throws on a typo, so no section can name an id that does
 *  not exist in this lesson's own corpus. */
function src(id: string): SrcItem {
  const r = ROW.get(id);
  if (!r) throw new Error(`c2.12: no item ${id}`);
  return r;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/** THE "MEET THE PROBLEM" BEAT: a short frame story about Nadia timing her
 *  own reading practice. Type 'story', not the heavier 'scene', since no
 *  pronunciation contrast needs an IPA pair here. */
function nadiaStory(id: string, title: string, bubbles: { from: 'coach' | 'user' | 'narrator'; fr: string; en: string }[]): Sec<'story'> {
  return {
    type: 'story', id, layer: 'core', title, setting: "Nadia révise seule, chronomètre posé sur la table, pour l’épreuve de compréhension écrite.",
    bubbles, closing: { fr: REFRAME, en: REFRAME_EN },
    audio: AUDIO, say: REFRAME,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE PROBLÈME : UNE PHRASE, UNE HORLOGE
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_STORY: Sec<'story'> = nadiaStory('a1-story', 'Une phrase, trois fois, et le temps est déjà passé', [
  { from: 'narrator', fr: src(E(2400)).fr, en: src(E(2400)).en },
  { from: 'narrator', fr: src(E(2401)).fr, en: src(E(2401)).en },
  { from: 'coach', fr: src(E(2402)).fr, en: src(E(2402)).en },
  { from: 'coach', fr: src(E(2403)).fr, en: src(E(2403)).en },
  { from: 'user', fr: src(E(2406)).fr, en: src(E(2406)).en },
]);
A1_STORY.terms = ['armature'];

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Trouver l’armature d’une phrase dense, avant tout le reste', s: 'Acte 2 : le sujet et le verbe principaux, en premier' },
    { t: 'Compter les réserves qu’une phrase empile', s: 'Acte 3 : il semble, dans une certaine mesure, sous réserve de' },
    { t: 'Attribuer chaque citation à qui parle vraiment', s: 'Acte 4 : l’auteur, ou la source qu’il convoque' },
    { t: 'Déplier une chaîne nominale en phrases simples', s: 'Acte 5 : deux ou trois phrases, compressées en un seul groupe' },
    { t: 'Tenir les quatre à la fois, contre le chronomètre', s: 'Actes 6 à 8 : un paragraphe, puis un texte entier, sous un temps réaliste' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'Une seule phrase, 52 mots', frSub: 'Essai académique, texte original pour cette leçon',
  text: EXTRACT_DEMO,
  glossary: [
    { word: 'affaiblissement', en: 'weakening', note: "Une perte progressive de force ou de capacité. EN: a progressive loss of strength or capacity." },
    { word: 'rattachent', en: 'link, connect', note: "Relient une chose à une cause qu’on lui attribue. EN: connect a thing to a cause it is attributed to." },
    { word: 'sollicitations', en: 'stimuli, demands on attention', note: "Des appels répétés à l’attention, ici ceux des écrans. EN: repeated calls on one’s attention, here those of screens." },
    { word: 'saurait', en: 'could (ne saurait = cannot)', note: "« Ne saurait » est une façon soutenue de dire « ne peut pas ». EN: \"ne saurait\" is a formal way of saying \"cannot\"." },
  ],
  questions: [
    { q: 'Trouve d’abord le verbe principal de cette phrase, avant de comprendre chaque mot : quel est-il, et quel est son sujet.', a: 'Le verbe principal est « ne saurait toutefois être validée », et son sujet est « elle », qui reprend « l’hypothèse ». Tout le reste (si l’hypothèse..., que certains chercheurs rattachent..., sans que soit interrogée...) prépare seulement ce noyau.' },
    { q: 'Cette phrase affirme-t-elle que l’hypothèse est fausse, ou seulement qu’elle ne peut pas être validée en l’état.', a: 'Seulement qu’elle ne peut pas être validée en l’état, avant qu’on ait défini ce que l’on entend par « lecture longue » ; la phrase ne dit jamais que l’hypothèse est fausse.' },
    { q: 'Combien de fois cette phrase repousse-t-elle sa propre conclusion avant de l’énoncer.', a: 'Deux fois : d’abord par « si... mérite d’être prise au sérieux », puis par « elle ne saurait toutefois être validée sans que... » ; l’exigence réelle n’arrive qu’à la toute fin de la phrase.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['armature'],
};

const A1_DISTINCTION: Sec<'examples'> = {
  type: 'examples', id: 'a1-distinction', layer: 'core', title: 'Ce que la leçon 20 du C1 t’a déjà appris',
  examples: [
    { fr: C120_REFRAME, en: C120_REFRAME_EN, note: `${Cap(C120_REF)} : interpréter ce qu’un texte laisse entendre.` },
    { fr: src(E(2402)).fr, en: src(E(2402)).en, note: 'Cette leçon ne reprend aucune de ces interprétations : elle attaque un problème antérieur.' },
    { fr: src(E(2408)).fr, en: src(E(2408)).en, note: 'Une phrase dense n’a presque toujours qu’un seul verbe principal, quel que soit son nombre total de verbes.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['armature'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La différence avec le C1', 'Cette leçon, par rapport à la leçon 20 du C1, porte sur...', ['les mêmes sous-entendus, à un niveau plus difficile', 'une phrase que le lecteur n’arrive pas encore à suivre, avant toute interprétation'], 1,
    'La leçon 20 du C1 supposait la phrase déjà lisible ; ici, le problème est antérieur. EN: the C1 lesson assumed the sentence was already readable; here the problem comes before that.'),
  ctl('Le verbe principal', 'Une phrase dense qui compte huit verbes au total a, le plus souvent...', ['huit affirmations séparées', 'un seul verbe principal, et sept subordonnées autour de lui'], 1,
    'Chercher ce seul verbe principal est le premier geste, avant tout le reste. EN: looking for that one main verb is the first move, before anything else.'),
  ctl('Le vrai sujet de la leçon', 'Cette leçon enseigne avant tout à...', ['mémoriser du vocabulaire académique', 'déplier une phrase dense avant que le temps ne manque'], 1,
    'Le vocabulaire sert la méthode ; il n’est jamais la méthode elle-même. EN: vocabulary serves the method; it is never the method itself.'),
], ['armature']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le problème : une phrase, une horloge',
    opener: {
      line: "Nadia relit la même phrase une troisième fois et comprend chaque mot, sans trouver ce qu’elle affirme vraiment : ici tu apprends exactement le geste qui lui manque. EN: Nadia rereads the same sentence a third time and understands every word, without finding what it actually asserts: here you learn exactly the move she is missing.",
      imageRef: 'lessons/c2-12-lecture-academique/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais que cette leçon porte sur la densité d’une phrase et sur le temps, pas sur l’interprétation déjà enseignée par la leçon 20 du C1. EN: You know this lesson is about a sentence’s density and about time, not about the interpretation C1’s lesson 20 already taught.',
    estScreens: 20, restPoints: ['a1-lecture'],
  },
  sections: [A1_STORY, A1_GOALS, A1_LECTURE, A1_DISTINCTION, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — L’ARMATURE DE LA PHRASE
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a2-exemples', layer: 'core', sheetId: 'sheet-densite', title: 'Trouver l’armature, d’abord',
  examples: [
    ex(E(2411), 'Quatre groupes de mots précèdent l’armature ; elle, elle tient en six mots.'),
    ex(E(2412), 'L’armature isolée de cette même phrase : « la prudence méthodologique impose de ne pas trancher trop vite ».'),
    ex(E(2417), 'Une virgule après une longue subordonnée annonce presque toujours le sujet réel, juste après elle.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['armature'],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a2-table', layer: 'core', sheetId: 'sheet-densite',
  title: 'Quel groupe porte l’armature', cols: ['Phrase', 'Armature'],
  rows: [
    { cells: ['Bien que la plupart des études convergent, du moins en apparence, vers une explication unique, la prudence méthodologique impose de ne pas trancher trop vite.', 'la prudence méthodologique impose de ne pas trancher trop vite'], say: src(E(2411)).fr,
      detail: { title: 'Une seule armature', body: 'Tout ce qui précède la virgule n’est qu’une subordonnée d’appui. EN: everything before the comma is only a scaffolding clause.', say: src(E(2412)).fr } },
    { cells: ['Ce que plusieurs chercheurs, sans toujours s’accorder sur les termes exacts, ont fini par admettre, c’est que la question reste largement ouverte.', 'c’est que la question reste largement ouverte'], say: src(E(2413)).fr,
      detail: { title: 'L’armature après « c’est que »', body: 'La structure « ce que... c’est que » annonce toujours l’armature juste après « c’est que ». EN: the structure "ce que... c’est que" always announces the backbone right after "c’est que".', say: src(E(2414)).fr } },
    { cells: ['Alors même que le phénomène décrit demeure, selon plusieurs sources, difficile à mesurer précisément, son existence même n’est contestée par personne.', 'son existence même n’est contestée par personne'], say: src(E(2418)).fr,
      detail: { title: 'Quatre mots suffisent', body: 'Le reste de la phrase prépare cette seule affirmation, sans la changer. EN: the rest of the sentence only sets up this one claim, without changing it.', say: src(E(2419)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['armature'],
};

const A2_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-groupe', layer: 'core', sheetId: 'sheet-densite', title: 'À toi : isole l’armature',
  groups: [
    grp('Nouvelle phrase', [it(E(2421))],
      chk('L’armature de cette phrase tient en...', ['« quelle que soit la méthode retenue »', '« le constat de départ ne varie guère d’une étude à l’autre »'], 1,
        'Le début de la phrase (« quelle que soit... », « et malgré... ») n’est qu’une double subordonnée d’appui. EN: the start of the sentence is only a double scaffolding clause.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['armature'],
};

const A2_COMMONERRORS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a2-erreurs', layer: 'core', title: 'L’erreur la plus fréquente',
  errors: [
    { wrong: 'Traduire ou comprendre chaque subordonnée dans l’ordre où elle arrive, avant de savoir où mène la phrase.', right: 'Chercher d’abord le verbe principal, même s’il arrive en douzième position ; revenir ensuite déplier chaque subordonnée, dans l’ordre que l’on choisit.', why: "La première méthode perd le fil avant d’arriver au verbe ; la seconde sait, dès le départ, ce qu’elle cherche. EN: the first method loses the thread before reaching the verb; the second knows, from the start, what it is looking for." },
    { wrong: 'Croire qu’une phrase de neuf verbes affirme neuf choses différentes.', right: 'Chercher le seul verbe qui n’est subordonné à aucun autre : c’est lui, et lui seul, qui porte l’affirmation de la phrase.', why: 'Huit des neuf verbes appartiennent presque toujours à des subordonnées d’appui. EN: eight of the nine verbs almost always belong to scaffolding clauses.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['armature'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La méthode', 'Face à une phrase dense, le premier geste est de...', ['traduire chaque subordonnée dans l’ordre', 'chercher d’abord le sujet et le verbe principaux'], 1,
    'Le reste se déplie ensuite, dans l’ordre que l’on choisit. EN: the rest unfolds afterward, in whatever order one chooses.'),
  ctl('Le signal', 'Une virgule après une longue subordonnée annonce, le plus souvent...', ['la fin de la phrase', 'le sujet réel, juste après elle'], 1,
    'Ce signal fait gagner un temps précieux en lecture dense. EN: this signal saves precious time in dense reading.'),
  ctl('Le test', 'L’armature d’une phrase est le groupe de mots qui...', ['reste vrai si l’on supprime tout le reste', 'contient le plus de mots difficiles'], 0,
    'La difficulté du vocabulaire ne dit rien de l’armature. EN: the difficulty of the vocabulary says nothing about the backbone.'),
], ['armature']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'L’armature de la phrase',
    opener: {
      line: "Une phrase dense cache son sujet et son verbe principaux derrière deux, trois, parfois quatre groupes de mots : ici tu apprends à les trouver en premier, avant tout le reste. EN: A dense sentence hides its main subject and verb behind two, three, sometimes four word groups: here you learn to find them first, before anything else.",
      imageRef: 'lessons/c2-12-lecture-academique/act02.jpg',
    },
    sections: [],
    milestone: 'Tu trouves l’armature d’une phrase dense avant de résoudre ses subordonnées. EN: You find a dense sentence’s backbone before resolving its subordinate clauses.',
    estScreens: 18, restPoints: [],
  },
  sections: [A2_EXEMPLES, A2_TABLE, A2_GROUPE, A2_COMMONERRORS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LES RÉSERVES EMPILÉES
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a3-exemples', layer: 'core', sheetId: 'sheet-densite', title: 'Compter les réserves, avant l’affirmation',
  examples: [
    ex(E(2425), 'Trois réserves empilées (« il semble », « dans une certaine mesure », « sous réserve de ») avant la seule affirmation.'),
    ex(E(2426), 'La même phrase, analysée : trois réserves, une affirmation, « que cette tendance se confirme ».'),
    ex(E(2435), '« On ne saurait exclure que » laisse la porte ouverte ; elle ne la ferme jamais.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['reserveempilee'],
};

const A3_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a3-focus', layer: 'core', title: 'Ce qu’une réserve fait, et ne fait pas',
  points: [
    'Une réserve ne nie jamais l’affirmation qu’elle entoure : elle en limite seulement la force, la portée ou la certitude.',
    'Plus les réserves s’empilent, plus l’affirmation protégée mérite d’être prise au sérieux : un auteur prudent ne hasarde pas une idée faible sous tant de précautions.',
    'Une phrase sans aucune réserve, dans ce registre, affirme en général un fait vérifié plutôt qu’une interprétation.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['reserveempilee'],
};

const A3_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-groupe', layer: 'core', sheetId: 'sheet-densite', title: 'À toi : compte les réserves',
  groups: [
    grp('Nouvelle phrase', [it(E(2432))],
      chk('Combien de réserves précèdent l’affirmation « l’auteur avance une explication ».', ['une seule', 'deux : « non sans quelque hésitation » et « conscient des limites de l’échantillon »'], 1,
        'Deux réserves, et l’affirmation finit tout de même par arriver. EN: two hedges, and the claim still arrives in the end.')),
    grp('Nouvelle phrase', [it(E(2437))],
      chk('« Pour ainsi dire acquis dans certains milieux » est une réserve qui limite...', ['la portée du constat, pas sa force', 'rien du tout : c’est un fait certain'], 0,
        'Le constat reste, ailleurs, loin de faire consensus : sa portée est limitée, pas niée. EN: the finding remains, elsewhere, far from consensus: its scope is limited, not denied.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['reserveempilee'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Ce qu’une réserve fait', 'Une réserve empilée...', ['nie l’affirmation qu’elle entoure', 'limite sa force, sa portée ou sa certitude'], 1,
    'Jamais une négation : toujours une limite. EN: never a denial: always a limit.'),
  ctl('Le signal de sérieux', 'Plus les réserves s’empilent, plus l’affirmation protégée...', ['perd en crédibilité', 'mérite d’être prise au sérieux'], 1,
    'Un auteur prudent ne hasarde pas une idée faible sous tant de précautions. EN: a cautious author does not risk a weak idea under so many precautions.'),
  ctl('Une phrase sans réserve', 'Une phrase académique sans aucune réserve affirme en général...', ['une interprétation personnelle', 'un fait vérifié'], 1,
    'L’absence de réserve signale, le plus souvent, un fait établi. EN: the absence of a hedge usually signals an established fact.'),
], ['reserveempilee']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Les réserves empilées',
    opener: {
      line: "Un texte académique empile souvent deux ou trois précautions avant d’arriver à sa seule affirmation : ici tu apprends à les compter, pour trouver ce qui est vraiment affirmé dessous. EN: An academic text often stacks two or three precautions before reaching its one claim: here you learn to count them, to find what is really being asserted underneath.",
      imageRef: 'lessons/c2-12-lecture-academique/act03.jpg',
    },
    sections: [],
    milestone: 'Tu comptes les réserves empilées d’une phrase et tu sépares ce qui est affirmé de ce qui en limite seulement la force. EN: You count a sentence’s stacked hedges and separate what is claimed from what only limits its force.',
    estScreens: 18, restPoints: [],
  },
  sections: [A3_EXEMPLES, A3_FOCUS, A3_GROUPE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — ATTRIBUER LA CITATION
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a4-exemples', layer: 'core', sheetId: 'sheet-densite', title: 'Qui parle, à chaque phrase',
  examples: [
    ex(E(2441), '« Rappelle » signale un fait déjà admis, repris pour s’appuyer sur lui.'),
    ex(E(2443), '« Selon X » attribue toute la phrase qui suit à X, jamais à l’auteur du texte.'),
    ex(E(2450), '« Objecte », « conteste », « réfute » annoncent un désaccord ; « confirme », « rappelle », « rejoint » annoncent un appui.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['attributioncitation'],
};

const A4_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a4-table', layer: 'core', sheetId: 'sheet-densite',
  title: 'Qui parle : l’auteur, ou la source citée', cols: ['Phrase', 'Qui parle'],
  rows: [
    { cells: ['Selon un second chercheur, le phénomène observé s’expliquerait davantage par un changement de disposition que par un simple déplacement de l’attention.', 'le second chercheur cité'], say: src(E(2443)).fr,
      detail: { title: 'Toute la phrase lui appartient', body: '« Selon X » attribue tout ce qui suit à X, pas à l’auteur du texte. EN: "selon X" attributes everything that follows to X, not to the text’s author.', say: src(E(2444)).fr } },
    { cells: ['Si un troisième chercheur avance qu’une capacité se redistribue sans perte globale, cette lecture laisse, on l’a vu, une question plus étroite entière.', 'le troisième chercheur, puis l’auteur du texte'], say: src(E(2447)).fr,
      detail: { title: 'Deux voix dans une seule phrase', body: 'La première moitié cite le chercheur ; la seconde moitié (« cette lecture laisse... ») redevient la voix de l’auteur. EN: the first half cites the researcher; the second half becomes the text’s own voice again.', say: src(E(2448)).fr } },
    { cells: ['« La lecture longue n’est pas un simple exercice d’endurance », rappelle un chercheur, qui y voit plutôt une discipline de l’attention.', 'le chercheur cité, pour un fait déjà admis'], say: src(E(2441)).fr,
      detail: { title: 'Rappelle, pas avance', body: '« Rappelle » reprend un fait déjà établi ; « avance » proposerait une idée neuve, encore à prouver. EN: "rappelle" takes up an already established fact; "avance" would propose a new idea, still to be proven.', say: src(E(2442)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['attributioncitation'],
};

const A4_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-groupe', layer: 'core', sheetId: 'sheet-densite', title: 'À toi : attribue la citation',
  groups: [
    grp('Nouvelle phrase', [it(E(2451))],
      chk('Deux chercheurs cités dans le même paragraphe défendent-ils forcément deux positions opposées.', ['oui, toujours', 'non, l’un répond parfois à une question que l’autre n’a jamais posée'], 1,
        'Vérifier d’abord la question posée par chacun, avant de conclure à un désaccord. EN: check first the question each one asks, before concluding there is disagreement.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['attributioncitation'],
};

const A4_COMMONERRORS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a4-erreurs', layer: 'core', title: 'L’erreur la plus fréquente',
  errors: [
    { wrong: 'Lire « selon X, le phénomène s’explique par Y » comme la position de l’auteur du texte lui-même.', right: 'Lire cette phrase comme la position de X, puis chercher la phrase suivante pour savoir si l’auteur la reprend, la nuance ou la réfute.', why: "« Selon X » attribue toute la phrase à X, jamais à l’auteur : confondre les deux voix fait écrire un résumé qui n’est pas celui du texte. EN: \"selon X\" attributes the whole sentence to X, never to the author; confusing the two voices produces a summary that is not the text’s own." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['attributioncitation'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Selon X', '« Selon X » attribue la phrase qui suit à...', ['l’auteur du texte', 'X, la source citée'], 1,
    'Jamais à l’auteur du texte lui-même. EN: never to the text’s own author.'),
  ctl('Le verbe qui attribue', '« Objecte », « conteste », « réfute » annoncent...', ['un appui', 'un désaccord'], 1,
    '« Confirme », « rappelle », « rejoint » annoncent, eux, un appui. EN: "confirme", "rappelle", "rejoint" instead announce support.'),
  ctl('Deux sources citées', 'Deux chercheurs cités dans le même paragraphe...', ['défendent toujours deux positions opposées', 'répondent parfois à deux questions différentes'], 1,
    'Vérifier la question posée par chacun avant de conclure à un désaccord. EN: check the question each one asks before concluding there is disagreement.'),
], ['attributioncitation']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Attribuer la citation',
    opener: {
      line: "Un texte académique cite rarement une source pour la seule répéter : il s’appuie sur elle, la nuance, ou la réfute ; ici tu apprends à savoir, à chaque phrase, qui parle vraiment. EN: An academic text rarely cites a source only to repeat it: it leans on it, qualifies it, or refutes it; here you learn to know, at every sentence, who is really speaking.",
      imageRef: 'lessons/c2-12-lecture-academique/act04.jpg',
    },
    sections: [],
    milestone: 'Tu attribues chaque phrase citée à qui parle vraiment, l’auteur ou la source qu’il convoque. EN: You attribute every cited sentence to who is really speaking, the author or the source they call on.',
    estScreens: 18, restPoints: [],
  },
  sections: [A4_EXEMPLES, A4_TABLE, A4_GROUPE, A4_COMMONERRORS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LA CHAÎNE NOMINALE
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a5-exemples', layer: 'core', sheetId: 'sheet-densite', title: 'Une chaîne, dépliée',
  examples: [
    ex(E(2456), 'Chaîne : « la prise en compte insuffisante... de la diversité des pratiques de lecture numérique ».'),
    ex(E(2457), 'Dépliée : « la plupart des enquêtes ne prennent pas suffisamment en compte le fait que les pratiques sont diverses ».'),
    ex(E(2463), 'Trois noms abstraits à la suite signalent presque toujours une chaîne à déplier.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['chainenominale'],
};

const A5_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a5-table', layer: 'core', sheetId: 'sheet-densite',
  title: 'La chaîne, puis sa phrase simple', cols: ['Chaîne nominale', 'Dépliée'],
  rows: [
    { cells: ["L’érosion progressive de la disposition à soutenir un effort attentionnel prolongé touche un nombre croissant de lecteurs.", "un nombre croissant de lecteurs sont de moins en moins disposés à soutenir un effort attentionnel prolongé"], say: src(E(2459)).fr,
      detail: { title: 'Trois noms, une seule idée dépliée', body: '« érosion », « disposition » et « effort » appartenaient tous à la même chaîne. EN: "érosion", "disposition" and "effort" all belonged to the same chain.', say: src(E(2460)).fr } },
    { cells: ["La généralisation rapide d’un déclin de l’attention, sans mesure rigoureuse des pratiques effectives, inquiète certains chercheurs.", "certains chercheurs généralisent rapidement un déclin de l’attention, sans mesurer rigoureusement les pratiques effectives, et cela les inquiète"], say: src(E(2464)).fr,
      detail: { title: 'Une cause retrouvée', body: 'Dépliée, la chaîne révèle même un lien de cause que la version compressée ne montrait pas clairement. EN: unfolded, the chain even reveals a causal link the compressed version did not show clearly.', say: src(E(2465)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['chainenominale'],
};

const A5_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-groupe', layer: 'core', sheetId: 'sheet-densite', title: 'À toi : déplie la chaîne',
  groups: [
    grp('Nouvelle chaîne', [it(E(2456))],
      chk('Dépliée, cette chaîne revient à dire que...', ['les pratiques de lecture numérique sont diverses, et la plupart des enquêtes ne le prennent pas assez en compte', 'la lecture numérique n’existe pas vraiment'], 0,
        'Chaque nom abstrait retrouve son verbe et son sujet. EN: each abstract noun recovers its verb and its subject.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['chainenominale'],
};

const A5_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a5-focus', layer: 'core', title: 'Ce n’est pas la leçon 20 du C1',
  points: [
    "La leçon 20 du C1 demandait qui agit derrière un passif ou un nom : un agent caché, une seule question.",
    "Cette leçon demande autre chose : combien de phrases tiennent dans un seul groupe de noms abstraits, et comment les déplier.",
    'Compter trois noms abstraits à la suite dans le même groupe signale presque toujours une chaîne, pas une idée simple.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['chainenominale'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le signal', 'Trois noms abstraits à la suite, dans le même groupe, signalent le plus souvent...', ['une idée simple, juste écrite de façon soutenue', 'une chaîne de deux ou trois phrases, compressées'], 1,
    'Chaque nom abstrait retrouve son verbe et son sujet une fois dépliée. EN: each abstract noun recovers its verb and subject once unfolded.'),
  ctl('La différence avec le C1', 'Une chaîne nominale déplie...', ['qui agit derrière le nom', 'combien de phrases le nom compresse'], 1,
    'Qui agit est la question de la leçon 20 du C1 ; combien de phrases est celle de cette leçon. EN: who acts is C1’s lesson 20 question; how many sentences is this lesson’s own.'),
  ctl('Le remède', 'Le remède à une chaîne nominale est de...', ['la traduire mot à mot', 'se demander, pour chaque nom, qui fait quoi'], 1,
    'La traduction mot à mot garde la densité ; la question « qui fait quoi » la déplie. EN: word-for-word translation keeps the density; asking "who does what" unfolds it.'),
], ['chainenominale']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'La chaîne nominale',
    opener: {
      line: "Un groupe de trois ou quatre noms abstraits peut compresser deux ou trois phrases entières : ici tu apprends à le déplier, sans perdre une seule idée qu’il contient. EN: A group of three or four abstract nouns can compress two or three whole sentences: here you learn to unfold it without losing a single idea it contains.",
      imageRef: 'lessons/c2-12-lecture-academique/act05.jpg',
    },
    sections: [],
    milestone: 'Tu déplies une chaîne d’abstractions nominales en les phrases simples qu’elle compresse. EN: You unfold a chain of abstract nouns into the plain sentences it compresses.',
    estScreens: 18, restPoints: [],
  },
  sections: [A5_EXEMPLES, A5_TABLE, A5_GROUPE, A5_FOCUS, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — L’ARCHITECTURE DE L’ARGUMENT
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a6-lecture', layer: 'core', sheetId: 'sheet-densite', questionsInModal: true,
  title: 'Un paragraphe, les quatre mouvements à la fois', frSub: 'Essai académique, texte original pour cette leçon',
  text: EXTRACT_PARAGRAPH,
  glossary: [
    { word: 'fragmentation', en: 'fragmentation', note: "La division d’un ensemble en parties plus petites et séparées. EN: the division of a whole into smaller, separate parts." },
    { word: 'appauvrissement', en: 'impoverishment', note: "Une perte de richesse ou de qualité. EN: a loss of richness or quality." },
    { word: 'amoindrie', en: 'diminished', note: "Rendue plus faible, réduite en valeur. EN: made weaker, reduced in value." },
    { word: 'séduisante', en: 'appealing', note: "Qui attire par sa qualité, ici une hypothèse qui convainc facilement. EN: attractive by its quality, here a hypothesis that persuades easily." },
    { word: 'persistance', en: 'persistence', note: "Le fait de continuer, de durer, sans s’arrêter. EN: the fact of continuing, lasting, without stopping." },
  ],
  questions: [
    { q: 'Quelle est la thèse de ce paragraphe, dégagée de ses réserves.', a: 'Que la fragmentation des supports de lecture redistribue l’attention sans nécessairement l’appauvrir.' },
    { q: 'Qui est cité, et pour quelle hypothèse exactement.', a: 'Delmas (2020), pour l’hypothèse d’une « attention polymorphe », capable de se répartir entre plusieurs tâches sans que chacune soit amoindrie.' },
    { q: 'Cette hypothèse règle-t-elle la question de l’endurance en lecture longue, ou seulement celle de la performance cognitive globale.', a: 'Seulement celle de la performance cognitive globale ; la question plus étroite de l’endurance attentionnelle propre à la lecture longue reste entière, dit le paragraphe lui-même.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['architecturedelargument'],
};

const A6_STEPS: Sec<'steps'> = {
  type: 'steps', id: 'a6-steps', layer: 'core', sheetId: 'sheet-densite',
  title: 'Quatre colonnes, un seul paragraphe',
  steps: [
    '1. L’armature : quelle est la seule question ou affirmation qui reste si l’on retire tout le reste. EN: the backbone: what single question or claim remains once everything else is removed.',
    '2. La réserve : quelle précaution le paragraphe pose-t-il sur sa propre généralité. EN: the hedge: what precaution does the paragraph place on its own generality.',
    '3. La citation : qui est cité, et pour quelle idée précise, pas pour l’idée entière du paragraphe. EN: the citation: who is cited, and for exactly which idea, not the whole paragraph’s idea.',
    '4. La chaîne : quel groupe de noms abstraits compresse, lui aussi, une phrase entière. EN: the chain: which group of abstract nouns also compresses a whole sentence.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['architecturedelargument'],
};

const A6_GRILLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a6-grille', layer: 'core', sheetId: 'sheet-densite',
  title: 'La grille, appliquée à ce paragraphe', cols: ['Colonne', 'Ce qu’elle tient, ici'],
  rows: [
    { cells: ['l’armature', 'pourquoi lirait-on la fragmentation comme une perte plutôt que comme une redistribution'], say: src(E(2475)).fr },
    { cells: ['la réserve', '« non sans quelque réserve »'], say: src(E(2470)).fr },
    { cells: ['la citation', 'Delmas (2020), pour l’hypothèse d’une « attention polymorphe »'], say: src(E(2473)).fr },
    { cells: ['la chaîne', '« la persistance de l’effort attentionnel sur la durée propre à la lecture longue »'], say: src(E(2474)).fr },
  ],
  audio: AUDIO, say: REFRAME, terms: ['architecturedelargument'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La grille', 'Une grille à quatre colonnes (armature, réserve, citation, chaîne)...', ['remplace la lecture du paragraphe', 'vérifie qu’aucun des quatre n’a été oublié'], 1,
    'Elle vérifie, elle ne remplace rien. EN: it checks, it replaces nothing.'),
  ctl('Delmas, cité', 'Dans ce paragraphe, Delmas (2020) règle...', ['la question de l’endurance en lecture longue', 'seulement l’absence de déclin cognitif global'], 1,
    'La question de l’endurance reste explicitement entière, dit le paragraphe lui-même. EN: the endurance question stays explicitly open, the paragraph itself says so.'),
  ctl('Un paragraphe académique dense', 'Un tel paragraphe tient le plus souvent...', ['une seule idée simple', 'une question, une réserve sur sa généralité, et une limite reconnue'], 1,
    'Rarement une seule idée simple, presque toujours ces trois éléments au moins. EN: rarely a single simple idea, almost always at least these three elements.'),
], ['architecturedelargument']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'L’architecture de l’argument',
    opener: {
      line: "Un seul paragraphe tient en général une armature, une réserve, une citation et une chaîne nominale à la fois : ici tu apprends à tenir les quatre ensemble, sur un texte neuf. EN: A single paragraph usually holds a backbone, a hedge, a citation and a nominal chain all at once: here you learn to hold the four together, on new material.",
      imageRef: 'lessons/c2-12-lecture-academique/act06.jpg',
    },
    sections: [],
    milestone: 'Tu lis un paragraphe dense neuf pour son armature, sa réserve, sa citation et sa chaîne nominale, tenus ensemble. EN: You read a new dense paragraph for its backbone, hedge, citation and nominal chain, held together.',
    estScreens: 18, restPoints: ['a6-lecture'],
  },
  sections: [A6_LECTURE, A6_STEPS, A6_GRILLE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LIRE CONTRE LE CHRONOMÈTRE
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a7-focus', layer: 'core', title: 'Lire sous un temps limité',
  points: [
    'Sous un temps limité, un lecteur de C2 ne lit pas plus vite : il choisit ce qu’il résout en entier, et ce qu’il laisse de côté au premier passage.',
    'Un budget réaliste pour un paragraphe dense tient en deux passages : un premier pour chaque armature, un second pour ce que la question exige vraiment.',
    'Lire contre le chronomètre n’est pas lire moins bien : c’est résoudre dans un ordre qui protège d’abord ce qui répond à la question posée.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['lirecontrelechrono'],
};

const A7_TRAP_CARDS: TrapCard[] = [
  { promptLabel: 'relire sans changer de méthode', promptSound: src(E(2481)).fr, fr: 'Chercher l’armature une seule fois, puis ne revenir sur une réserve ou une chaîne que si la question l’exige.', ipa: '/ʃɛʁ.ʃe laʁ.ma.tyʁ yn sœl fwa pɥi nə ʁə.vnɪʁ syʁ yn ʁe.zɛʁv kə si la kɛs.tjɔ̃ lɛ.ɡʒi/', tip: src(E(2482)).fr },
  { promptLabel: 'vérifier chaque source au complet', promptSound: src(E(2483)).fr, fr: 'Noter en une ligne qui est cité et pour quelle idée, sans juger si la source a raison dans l’absolu.', ipa: '/no.te ɑ̃n ynʲ liɲ ki ɛ si.te e puʁ kɛl i.de/', tip: src(E(2484)).fr },
  { promptLabel: 'résoudre chaque réserve d’avance', promptSound: src(E(2485)).fr, fr: 'Repérer qu’une réserve existe, sans la développer, et n’y revenir que si une question le demande.', ipa: '/ʁə.pe.ʁe kyn ʁe.zɛʁv ɛɡ.zist sɑ̃ la de.vlɔ.pe/', tip: src(E(2486)).fr },
];

const A7_TRAP_STEPS: TrapStep[] = [
  { label: 'La règle', kind: 'rule', title: 'Les trois réflexes qui brûlent le chronomètre' },
  { label: 'Trois cartes', kind: 'cards', title: 'Trois pièges, un seul remède' },
  { label: 'Écoute', kind: 'audio', title: 'Écoute les trois pièges' },
  { label: 'À toi', kind: 'drill', title: 'Trois pièges, trois remèdes', gate: true },
];

const A7_TRAP: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a7-piege', layer: 'core', swipe: true, sheetId: 'sheet-densite',
  title: 'Trois pièges, un seul remède',
  rule: {
    title: 'Décider d’abord ce que la question exige réellement',
    body: `${src(E(2494)).fr} EN: ${src(E(2494)).en}`,
  },
  cards: A7_TRAP_CARDS,
  drill: [
    { promptSay: 'Relire une phrase dense plusieurs fois dans l’ordre, sans changer de méthode, est un piège parce qu’il manque...', opts: ['la recherche de l’armature, faite une seule fois', 'une traduction mot à mot'], correct: 0 },
    { promptSay: 'Vérifier chaque citation jusqu’à sa source complète est un piège parce qu’il manque...', opts: ['le simple fait de noter qui dit quoi', 'une bibliographie complète'], correct: 0 },
    { promptSay: 'Résoudre toutes les réserves empilées avant de lire la question est un piège parce qu’il manque...', opts: ['la question elle-même, lue en premier', 'une liste de tous les hedges possibles'], correct: 0 },
    { promptSay: 'Le remède commun aux trois pièges est de...', opts: ['décider d’abord ce que la question exige vraiment', 'lire deux fois plus vite'], correct: 0 },
    { promptSay: 'Un budget réaliste pour un paragraphe dense tient en...', opts: ['deux passages, l’armature puis le détail nécessaire', 'une seule lecture mot à mot'], correct: 0 },
    { promptSay: 'Lire contre le chronomètre, c’est lire...', opts: ['moins bien, mais plus vite', 'dans un ordre qui protège d’abord la réponse à la question'], correct: 1 },
  ],
  steps: A7_TRAP_STEPS,
  audio: AUDIO, say: REFRAME, terms: ['lirecontrelechrono'],
};

const A7_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-groupe', layer: 'core', sheetId: 'sheet-densite', title: 'À toi : choisis l’ordre',
  groups: [
    grp('Sous un temps limité', [it(E(2491))],
      chk('Avant l’épreuve, le meilleur entraînement est de...', ['lire le plus de pages possible, sans chronomètre', 'se chronométrer sur un seul paragraphe dense, puis vérifier quel réflexe a coûté le plus de temps'], 1,
        'Le volume de lecture ne dit rien sur l’ordre de résolution. EN: reading volume says nothing about the order of resolution.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['lirecontrelechrono'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Lire plus vite', 'Sous un temps limité, un lecteur de C2...', ['lit chaque mot plus vite', 'choisit ce qu’il résout en entier et ce qu’il laisse de côté'], 1,
    'La vitesse de lecture mot à mot ne change pas ; l’ordre de résolution, lui, change tout. EN: word-by-word reading speed does not change; the order of resolution changes everything.'),
  ctl('Le budget réaliste', 'Un budget réaliste pour un paragraphe dense tient en...', ['une seule lecture complète, lente', 'deux passages : l’armature, puis le détail nécessaire'], 1,
    'Le second passage ne traite que ce que la question exige. EN: the second pass handles only what the question requires.'),
  ctl('Les trois pièges', 'Les trois réflexes qui brûlent le chronomètre partagent...', ['trois remèdes différents', 'un seul remède : décider d’abord ce que la question exige'], 1,
    'Un seul remède, appliqué aux trois réflexes. EN: a single remedy, applied to all three reflexes.'),
], ['lirecontrelechrono']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Lire contre le chronomètre',
    opener: {
      line: "Trois réflexes brûlent le chronomètre : relire sans méthode, vérifier chaque source au complet, résoudre chaque réserve d’avance ; ici tu apprends le seul remède qui règle les trois à la fois. EN: Three reflexes burn the clock: rereading without method, verifying every source in full, resolving every hedge in advance; here you learn the single remedy that fixes all three at once.",
      imageRef: 'lessons/c2-12-lecture-academique/act07.jpg',
    },
    sections: [],
    milestone: 'Tu lis une phrase ou un paragraphe dense dans un ordre qui protège, sous un temps limité, ce qui répond à la question posée. EN: You read a dense sentence or paragraph in an order that protects, under limited time, whatever answers the question asked.',
    estScreens: 16, restPoints: ['a7-piege'],
  },
  sections: [A7_FOCUS, A7_TRAP, A7_GROUPE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — TA LECTURE DENSE
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a8-lecture', layer: 'core', sheetId: 'sheet-densite', questionsInModal: true,
  title: 'Ta lecture dense', frSub: 'Essai académique complet, texte original pour cette leçon, quatre paragraphes',
  text: EXTRACT_FULL,
  glossary: [
    { word: 'généralisation', en: 'generalisation', note: "Une affirmation étendue à un ensemble plus large que ce qui a été vérifié. EN: a claim extended to a wider set than what has actually been checked." },
    { word: 'corroborer', en: 'to corroborate', note: "Confirmer par des faits ou des preuves supplémentaires. EN: to confirm through additional facts or evidence." },
    { word: 'échapperait', en: 'would escape', note: "Resterait hors de portée, ici des instruments de mesure. EN: would remain out of reach, here of measurement instruments." },
    { word: 'imputée', en: 'attributed (to a cause)', note: "Rattachée à une cause, comme responsable d’un effet. EN: linked to a cause, as if responsible for an effect." },
    { word: 'endurance', en: 'endurance', note: "La capacité à soutenir un effort sur une longue durée. EN: the capacity to sustain an effort over a long span." },
    { word: 'concurrentes', en: 'competing', note: "Qui s’opposent entre elles pour la même place, ici deux lectures d’un même phénomène. EN: that compete against each other for the same place, here two readings of the same phenomenon." },
  ],
  questions: [
    { q: 'Quelle est la thèse initiale que ce texte examine, et quelle réserve lui applique-t-il dès la première phrase.', a: 'La thèse examinée est qu’un déclin généralisé de l’attention et de la lecture longue serait causé par la multiplication des écrans ; la réserve immédiate est qu’elle repose sur une impression partagée plutôt que sur une mesure rigoureuse, qu’aucune enquête n’a pleinement corroborée.' },
    { q: 'Que soutient Noguès, et à quoi cela s’oppose-t-il directement.', a: 'Noguès soutient que la baisse apparente du temps de lecture s’explique par une redistribution des pratiques de lecture, non par une perte de capacité ; cela s’oppose à l’idée d’un déclin réel de l’attention elle-même.' },
    { q: 'Sur quel point précis Verrier conteste-t-il Noguès, et sur quel point ne le conteste-t-il pas.', a: 'Verrier conteste l’idée que la baisse du nombre d’ouvrages achevés s’explique seulement par un déplacement vers d’autres supports ; il ne conteste pas que les pratiques de lecture se soient redistribuées, mais ajoute une question distincte, celle de l’endurance attentionnelle.' },
    { q: 'La dernière phrase du texte tranche-t-elle entre Noguès et Verrier, ou élargit-elle la question.', a: 'Elle élargit la question, refuse de trancher, et la reformule au niveau d’une société entière plutôt qu’au niveau d’un lecteur individuel.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['architecturedelargument'],
};

const A8_STEPS: Sec<'steps'> = {
  type: 'steps', id: 'a8-steps', layer: 'core', sheetId: 'sheet-densite',
  title: 'La méthode, sur un texte entier',
  steps: [
    '1. Lis chaque paragraphe une fois pour son armature seule, sans résoudre une réserve ou une chaîne encore. EN: read each paragraph once for its backbone alone, without resolving a hedge or a chain yet.',
    '2. Attribue chaque citation à qui parle : Noguès, Verrier, ou l’auteur du texte lui-même. EN: attribute every citation to who is speaking: Noguès, Verrier, or the text’s own author.',
    '3. Repère la réserve que chaque paragraphe pose sur sa propre généralité, sans la développer encore. EN: notice the hedge each paragraph places on its own generality, without unpacking it yet.',
    '4. Reviens déplier une réserve ou une chaîne nominale seulement si une question posée l’exige. EN: come back to unfold a hedge or a nominal chain only if a question asked requires it.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['lirecontrelechrono'],
};

const A8_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a8-cheat', layer: 'core', sheetId: 'sheet-densite',
  title: 'Lire dense, sur un seul écran',
  rows: [
    { k: 'l’armature', v: 'le sujet et le verbe principaux, trouvés en premier', say: src(E(2410)).fr,
      detail: { title: 'Avant tout le reste', body: 'Tout le reste n’est qu’une subordonnée d’appui. EN: everything else is only a scaffolding clause.', say: src(E(2423)).fr } },
    { k: 'la réserve empilée', v: 'il semble, dans une certaine mesure, sous réserve de', say: src(E(2427)).fr,
      detail: { title: 'Limiter, jamais nier', body: 'Plus les réserves s’empilent, plus l’affirmation mérite d’être prise au sérieux. EN: the more hedges stack up, the more the claim deserves to be taken seriously.', say: src(E(2434)).fr } },
    { k: 'l’attribution', v: 'rappelle, confirme, rejoint = appui ; objecte, conteste, réfute = désaccord', say: src(E(2450)).fr,
      detail: { title: 'Selon X, pas selon l’auteur', body: 'Toute la phrase appartient à X, jamais à l’auteur du texte. EN: the whole sentence belongs to X, never to the text’s own author.', say: src(E(2444)).fr } },
    { k: 'la chaîne nominale', v: 'trois noms abstraits à la suite, une chaîne à déplier', say: src(E(2458)).fr,
      detail: { title: 'Qui fait quoi', body: 'Chaque nom abstrait retrouve son verbe et son sujet une fois dépliée. EN: each abstract noun recovers its verb and subject once unfolded.', say: src(E(2467)).fr } },
    { k: 'le chronomètre', v: 'l’armature d’abord, le détail ensuite, seulement s’il le faut', say: src(E(2490)).fr,
      detail: { title: 'Le seul remède', body: 'Décider d’abord ce que la question exige réellement. EN: decide first what the question actually requires.', say: src(E(2493)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['architecturedelargument'],
};

const A8_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a8-progress', layer: 'core', title: 'Où tu en es',
  body: "Tu lis maintenant un texte académique dense, général et unsimplifié, sans attendre qu’il te soit facilité : tu trouves son armature avant ses subordonnées, tu comptes ses réserves empilées sans les prendre pour des négations, tu attribues chaque citation à qui parle vraiment, et tu déplies une chaîne nominale en les phrases simples qu’elle compresse. Le tout sous un temps limité, en décidant d’abord ce que la question posée exige réellement. Avant l’examen, reprends un article académique général que tu n’as jamais lu et chronomètre-toi sur un seul paragraphe. EN: Before any exam, take a general academic article you have never read and time yourself on a single paragraph.",
  stats: [
    { k: 'L’armature', v: 'le sujet et le verbe principaux, trouvés en premier' },
    { k: 'La réserve', v: 'comptée, jamais prise pour une négation' },
    { k: 'La citation', v: 'attribuée à qui parle vraiment' },
    { k: 'La chaîne', v: 'dépliée en phrases simples, seulement si besoin' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ────────────────────────────────────────────────────────────── */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Cette phrase traite une réserve comme une négation. Récris-la pour dire ce qu’elle affirme vraiment. EN: This sentence treats a hedge as a denial; rewrite it to say what it actually claims.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A8_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a8-quiz', layer: 'core', title: 'Le bilan', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-probleme', label: 'Une phrase, une horloge', targets: ['armature-jamais-cherchee'],
      questions: [
        mc('Cette leçon, par rapport à la leçon 20 du C1, porte sur...', ['les mêmes sous-entendus, en plus difficile', 'une phrase que le lecteur n’arrive pas encore à suivre'], 1, 'Le problème est antérieur à l’interprétation. EN: the problem comes before interpretation.', 'a1-check'),
        mc('Une phrase de neuf verbes a, le plus souvent...', ['neuf affirmations séparées', 'un seul verbe principal'], 1, 'Huit des neuf verbes appartiennent à des subordonnées d’appui. EN: eight of the nine verbs belong to scaffolding clauses.', 'a1-check'),
        tI('Complète. Un mot.', "Le verbe principal de « elle ne saurait toutefois être validée » reprend le sujet d’une ... .", 'hypothèse', 'Le sujet « elle » reprend « l’hypothèse ». EN: the subject "elle" refers back to "l’hypothèse".', 'a1-lecture'),
        lC('Écoute. Cette phrase vient-elle du texte académique, ou du cadre de Nadia.', src(E(2401)).fr, ['du texte académique', 'du cadre de Nadia'], 1, 'Nadia relit la même phrase une troisième fois. EN: Nadia rereads the same sentence a third time.', 'a1-story'),
      ],
    },
    {
      id: 'r2-armature', label: 'L’armature de la phrase', targets: ['armature-jamais-cherchee'],
      questions: [
        mc('Face à une phrase dense, le premier geste est de...', ['traduire chaque subordonnée dans l’ordre', 'chercher le sujet et le verbe principaux'], 1, 'Le reste se déplie ensuite. EN: the rest unfolds afterward.', 'a2-check'),
        mc('Une virgule après une longue subordonnée annonce, le plus souvent...', ['la fin de la phrase', 'le sujet réel, juste après'], 1, 'Un signal précieux en lecture dense. EN: a valuable signal in dense reading.', 'a2-table'),
        tI('Complète. Un mot.', "L’armature d’une phrase est ce qui reste ... si l’on supprime tout le reste.", 'vrai', 'Le test exact de l’armature. EN: the exact test for the backbone.', 'a2-exemples'),
        eS('Cette phrase suit chaque subordonnée dans l’ordre, avant de savoir où mène la phrase.', 'Cette phrase cherche d’abord le verbe principal, même en douzième position, puis revient déplier chaque subordonnée.', 'Chercher d’abord ce que l’on cherche. EN: look first for what you are looking for.', 'a2-erreurs'),
      ],
    },
    {
      id: 'r3-reserves', label: 'Les réserves empilées', targets: ['reserve-prise-pour-negation'],
      questions: [
        mc('Une réserve empilée...', ['nie l’affirmation qu’elle entoure', 'limite sa force, sa portée ou sa certitude'], 1, 'Jamais une négation. EN: never a denial.', 'a3-check'),
        mc('Plus les réserves s’empilent, plus l’affirmation protégée...', ['perd en crédibilité', 'mérite d’être prise au sérieux'], 1, 'Un auteur prudent ne hasarde pas une idée faible. EN: a cautious author does not risk a weak idea.', 'a3-check'),
        tI('Complète. Un mot.', "« On ne saurait exclure que » laisse la porte ... .", 'ouverte', 'Elle ne la ferme jamais. EN: it never closes it.', 'a3-exemples'),
        eS('Il semble, dans une certaine mesure, que cette tendance se confirme : donc, rien n’est confirmé.', 'Il semble, dans une certaine mesure, que cette tendance se confirme : la tendance est bien affirmée, sous réserve de degré.', 'Les réserves limitent la force, elles ne l’annulent pas. EN: hedges limit force, they do not cancel it.', 'a3-focus'),
      ],
    },
    {
      id: 'r4-citation', label: 'Attribuer la citation', targets: ['citation-mal-attribuee'],
      questions: [
        mc('« Selon X » attribue la phrase qui suit à...', ['l’auteur du texte', 'X, la source citée'], 1, 'Jamais à l’auteur lui-même. EN: never to the author.', 'a4-check'),
        mc('« Objecte », « conteste », « réfute » annoncent...', ['un appui', 'un désaccord'], 1, '« Confirme », « rappelle », « rejoint » annoncent un appui. EN: "confirme", "rappelle", "rejoint" announce support.', 'a4-check'),
        tI('Complète. Un mot.', "Deux chercheurs cités dans le même paragraphe répondent parfois à deux ... différentes.", 'questions', 'Vérifier la question de chacun avant de conclure à un désaccord. EN: check each one’s question before concluding there is disagreement.', 'a4-groupe'),
        lC('Écoute. Cette phrase annonce-t-elle un appui, ou un désaccord.', src(E(2443)).fr, ['un appui', 'un désaccord'], 0, '« S’expliquerait » reprend une explication proposée, sans la contester encore. EN: "s’expliquerait" takes up a proposed explanation, without yet contesting it.', 'a4-table'),
      ],
    },
    {
      id: 'r5-chaine', label: 'La chaîne nominale', targets: ['chaine-non-depliee'],
      questions: [
        mc('Trois noms abstraits à la suite, dans le même groupe, signalent le plus souvent...', ['une idée simple', 'une chaîne de deux ou trois phrases, compressées'], 1, 'Chaque nom retrouve son verbe une fois dépliée. EN: each noun recovers its verb once unfolded.', 'a5-check'),
        mc('Une chaîne nominale déplie...', ['qui agit derrière le nom (la leçon 20 du C1)', 'combien de phrases le nom compresse (cette leçon)'], 1, 'Deux questions différentes, deux leçons différentes. EN: two different questions, two different lessons.', 'a5-focus'),
        tI('Complète. Un mot.', "Le remède à une chaîne nominale est de se demander, pour chaque nom, qui fait ... .", 'quoi', 'Qui fait quoi, jamais une traduction mot à mot. EN: who does what, never a word-for-word translation.', 'a5-focus'),
        eS('L’érosion progressive de la disposition à soutenir un effort attentionnel prolongé reste une seule idée, indivisible.', 'L’érosion progressive de la disposition à soutenir un effort attentionnel prolongé déplie en : un nombre croissant de lecteurs sont de moins en moins disposés à soutenir un tel effort.', 'Une chaîne nominale se déplie toujours en une ou deux phrases simples. EN: a nominal chain always unfolds into one or two plain sentences.', 'a5-table'),
      ],
    },
    {
      id: 'r6-architecture', label: 'L’architecture de l’argument', targets: ['grille-incomplete'],
      questions: [
        mc('Une grille à quatre colonnes (armature, réserve, citation, chaîne)...', ['remplace la lecture du paragraphe', 'vérifie qu’aucun des quatre n’a été oublié'], 1, 'Elle vérifie, elle ne remplace rien. EN: it checks, it replaces nothing.', 'a6-check'),
        mc('Dans le paragraphe de l’acte 6, Delmas (2020) règle...', ['la question de l’endurance en lecture longue', 'seulement l’absence de déclin cognitif global'], 1, 'La question de l’endurance reste explicitement entière. EN: the endurance question stays explicitly open.', 'a6-grille'),
        tI('Complète. Un mot.', "Un paragraphe académique dense tient le plus souvent une question, une réserve, et une limite ... .", 'reconnue', 'Rarement une seule idée simple. EN: rarely a single simple idea.', 'a6-steps'),
        lC('Écoute. Cette phrase porte-t-elle une réserve, ou une chaîne nominale.', src(E(2474)).fr, ['une réserve', 'une chaîne nominale'], 1, 'Trois noms abstraits compressent une phrase sur la durée de l’effort. EN: three abstract nouns compress a sentence about the span of the effort.', 'a6-grille'),
      ],
    },
    {
      id: 'r7-chrono', label: 'Lire contre le chronomètre', targets: ['chrono-brule'],
      questions: [
        mc('Sous un temps limité, un lecteur de C2...', ['lit chaque mot plus vite', 'choisit ce qu’il résout en entier'], 1, 'L’ordre de résolution change tout. EN: the order of resolution changes everything.', 'a7-check'),
        mc('Un budget réaliste pour un paragraphe dense tient en...', ['une seule lecture lente', 'deux passages : l’armature, puis le détail nécessaire'], 1, 'Le second passage ne traite que ce que la question exige. EN: the second pass handles only what the question requires.', 'a7-check'),
        tI('Complète. Un mot.', "Les trois réflexes qui brûlent le chronomètre partagent un seul ... .", 'remède', 'Décider d’abord ce que la question exige réellement. EN: decide first what the question actually requires.', 'a7-piege'),
        eS('Pour gagner du temps, il faut lire deux fois plus vite, mot à mot.', 'Pour gagner du temps, il faut résoudre l’armature d’abord, puis seulement le détail que la question exige.', 'La vitesse mot à mot ne change rien ; l’ordre, lui, change tout. EN: word-by-word speed changes nothing; order changes everything.', 'a7-focus'),
      ],
    },
    {
      id: 'r8-dense', label: 'Ta lecture dense', targets: ['armature-jamais-cherchee', 'citation-mal-attribuee'],
      questions: [
        mc('Que soutient Noguès, dans le texte de l’acte 8.', ['un déclin réel de l’attention elle-même', 'une redistribution des pratiques de lecture, non une perte de capacité'], 1, 'Noguès explique la baisse apparente par une redistribution. EN: Noguès explains the apparent drop by a redistribution.', 'a8-lecture'),
        mc('Verrier conteste Noguès sur quel point exactement.', ['l’idée qu’une redistribution des pratiques existe', 'l’idée que la baisse du nombre d’ouvrages s’explique seulement par un déplacement de l’attention'], 1, 'Verrier ajoute une question distincte, celle de l’endurance. EN: Verrier adds a distinct question, that of endurance.', 'a8-lecture'),
        tI('Complète. Un mot.', "La dernière phrase du texte élargit la question au niveau d’une ... entière, pas d’un lecteur seul.", 'société', 'Le texte refuse de trancher entre Noguès et Verrier. EN: the text refuses to decide between Noguès and Verrier.', 'a8-lecture'),
        lC('Écoute. Cette phrase appartient-elle au premier paragraphe, ou au dernier.', src(E(2500)).fr, ['au premier paragraphe', 'au dernier paragraphe'], 1, '« On se gardera, pour conclure » annonce la clôture du texte. EN: "on se gardera, pour conclure" announces the text’s own close.', 'a8-lecture'),
      ],
    },
  ],
};

/** Rotate each quiz question's options together with its `correct` index so
 *  no slot takes more than its share. Changes no text. */
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
spreadSlots(A8_QUIZ);

const A8_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck', id: 'a8-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'the sentence\'s own backbone', back: 'l’armature de la phrase', say: src(E(2410)).fr },
    { front: 'two or three hedges, stacked', back: 'la réserve empilée', say: src(E(2425)).fr },
    { front: 'who a cited sentence really belongs to', back: 'l’attribution de la citation', say: src(E(2440)).fr },
    { front: 'two sentences compressed into one noun group', back: 'la chaîne nominale', say: src(E(2455)).fr },
    { front: 'the backbone, the hedge, the citation, the chain, together', back: 'l’architecture de l’argument', say: src(E(2477)).fr },
    { front: 'resolving in the right order, under limited time', back: 'lire contre le chronomètre', say: src(E(2490)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A8_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a8-roundup', layer: 'core', title: 'Lire des textes académiques denses, en résumé',
  body: `${REFRAME} Tu lis maintenant un texte académique général, dense et non simplifié, en trouvant son armature avant ses subordonnées, en comptant ses réserves sans les prendre pour des négations, en attribuant chaque citation à qui parle vraiment, et en dépliant une chaîne nominale en phrases simples, le tout sous un temps réaliste. EN: You can now read a dense, unsimplified general-academic text, finding its backbone before its subordinate clauses, counting its hedges without mistaking them for denials, attributing every citation to its real speaker, and unfolding a nominal chain into plain sentences, all under a realistic time budget.`,
  points: [
    'Une phrase dense n’a presque toujours qu’un seul verbe principal, même quand elle en compte huit ou neuf.',
    'Une réserve empilée limite la force d’une affirmation ; elle ne la nie jamais.',
    'Attribuer une citation, c’est savoir, à chaque phrase, qui parle : l’auteur, ou la source qu’il convoque.',
    'Une chaîne nominale compresse deux ou trois phrases simples ; la déplier retrouve, pour chaque nom, qui fait quoi.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['architecturedelargument', 'lirecontrelechrono'],
};

/** Vocab-only Voice Flash pass, one item per glossary term, each already
 *  carrying `voiceflash`. Scoped deliberately to the six glossary words,
 *  never to the lesson's comprehension content: every other section stays
 *  recognition-only, matching the lesson's R shape, but the house-wide
 *  publish gate requires every non-assessment lesson to carry a `practice`
 *  section, and the only implemented practice surface is the speaking
 *  pass. Paul's call: pronunciation practice on the lesson's own vocabulary
 *  is a defensible exception; a graded writing task would not be. */
const A8_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a8-parler',
  layer: 'core',
  title: 'Dis le vocabulaire de la densité à voix haute',
  skill: 'speak',
  itemIds: [E(2411), E(2425), E(2442), E(2456), E(2475), E(2481)],
  audio: AUDIO,
  say: REFRAME,
  terms: ['armature', 'reserveempilee'],
};

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Ta lecture dense',
    opener: {
      line: "Un texte académique complet, quatre paragraphes, une thèse, deux chercheurs qui ne sont pas d’accord sur la même question : ici tu le lis une seule fois, sous le budget de temps de cette leçon. EN: One complete academic text, four paragraphs, a thesis, two researchers who disagree on the same question: here you read it once, within this lesson’s own time budget.",
      imageRef: 'lessons/c2-12-lecture-academique/act08.jpg',
    },
    sections: [],
    milestone: 'Tu lis un texte académique dense complet, une seule fois, et tu en extrais l’armature, les réserves, l’attribution des citations et les chaînes nominales de chaque paragraphe, sous un temps réaliste. EN: You read a complete dense academic text, once, and extract each paragraph’s backbone, hedges, citation attribution and nominal chains, under a realistic time budget.',
    estScreens: 32, restPoints: ['a8-lecture', 'a8-cheat', 'a8-quiz'],
  },
  sections: [A8_LECTURE, A8_STEPS, A8_CHEAT, A8_PROGRESS, A8_QUIZ, A8_REVIEW, A8_PARLER, A8_ROUNDUP],
  imports: IMPORTED.act8,
};

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** MissionRich renders options in authored order, so every closed MISSION
 *  item is rotated here, options and `correct` together, so each
 *  option-count class spreads evenly and no slot repeats more than twice in
 *  a row. No text is changed and no `why` names a position. The quiz keeps
 *  its authored slots, scattered by hand (precision-nuance-lesson.ts 6.11). */
function balanceSlots(sections: LessonSection[], drills: LessonDrill[]): void {
  const used: Record<number, number[]> = {};
  const recent: number[] = [];
  const visit = (node: unknown): void => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(visit); return; }
    const o = node as { opts?: unknown; correct?: unknown };
    if (Array.isArray(o.opts) && typeof o.correct === 'number') {
      const opts = o.opts as string[];
      const n = opts.length;
      const u = (used[n] ??= new Array(n).fill(0));
      const order = [...Array(n).keys()].sort((a, b) => u[a] - u[b] || a - b);
      const blocked = recent.length >= 2 && recent[recent.length - 1] === recent[recent.length - 2] ? recent[recent.length - 1] : -1;
      const target = order.find((k) => k !== blocked) ?? order[0];
      const shift = (target - (o.correct as number) + n) % n;
      o.opts = opts.map((_, i) => opts[(i - shift + n) % n]);
      o.correct = target;
      u[target]++;
      recent.push(target);
    }
    for (const v of Object.values(node as Record<string, unknown>)) visit(v);
  };
  for (const s of sections) if (s.type !== 'quiz' && s.type !== 'task') visit(s);
  for (const d of drills) visit(d);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-armature', title: 'Le sujet et le verbe, en premier', format: 'mcq' as const, coach: 'Cherche d’abord ce qui reste vrai si l’on supprime tout le reste. EN: look first for what stays true once everything else is removed.', q: 'Une phrase de huit verbes a le plus souvent...', opts: ['huit affirmations séparées', 'un seul verbe principal'], correct: 1, why: 'Sept des huit verbes appartiennent à des subordonnées. EN: seven of the eight verbs belong to subordinate clauses.', items: [E(2408), E(2411), E(2423)], audio: AUDIO },
  { id: 'd-reserve', title: 'Limiter, jamais nier', format: 'mcq' as const, coach: 'Compte les réserves avant de décider ce qui est vraiment affirmé. EN: count the hedges before deciding what is really being claimed.', q: 'Une réserve empilée...', opts: ['nie l’affirmation', 'limite sa force ou sa portée'], correct: 1, why: 'Jamais une négation. EN: never a denial.', items: [E(2425), E(2427), E(2434)], audio: AUDIO },
  { id: 'd-citation', title: 'Qui parle, à chaque phrase', format: 'sort' as const, coach: 'Classe chaque phrase : la voix de l’auteur, ou la voix de la source citée. EN: sort each sentence: the author’s own voice, or the cited source’s.', buckets: ['l’auteur du texte', 'la source citée'], items: [E(2441), E(2443), E(2447)], audio: AUDIO },
  { id: 'd-chaine', title: 'Qui fait quoi', format: 'mcq' as const, coach: 'Pour chaque nom abstrait d’une chaîne, cherche le verbe et le sujet qu’il remplace. EN: for each abstract noun in a chain, look for the verb and subject it stands in for.', q: 'Trois noms abstraits à la suite signalent le plus souvent...', opts: ['une idée simple', 'une chaîne à déplier'], correct: 1, why: 'Chaque nom retrouve son verbe une fois dépliée. EN: each noun recovers its verb once unfolded.', items: [E(2456), E(2459), E(2464)], audio: AUDIO },
  { id: 'd-chrono', title: 'Décider d’abord', format: 'mcq' as const, coach: 'Avant de résoudre un détail, demande si la question posée l’exige vraiment. EN: before resolving a detail, ask whether the question asked actually requires it.', q: 'Sous un temps limité, le bon ordre est...', opts: ['résoudre chaque réserve d’avance', 'l’armature, puis seulement ce que la question exige'], correct: 1, why: 'Décider d’abord ce que la question exige réellement. EN: decide first what the question actually requires.', items: [E(2482), E(2489), E(2493)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'armature-jamais-cherchee', description: 'Resolves a dense sentence clause by clause, in the order they arrive, without first locating the sentence’s own main subject and verb.', detectOn: ['a2-groupe', 'a2-check', 'a8-lecture'], drill: 'd-armature', retest: 'd-armature' },
  { id: 'reserve-prise-pour-negation', description: 'Treats an academic hedge (il semble, dans une certaine mesure) as a denial of the claim it surrounds, rather than a limit on its force.', detectOn: ['a3-groupe', 'a3-check', 'a8-lecture'], drill: 'd-reserve', retest: 'd-reserve' },
  { id: 'citation-mal-attribuee', description: 'Reads a cited scholar’s claim as the text author’s own position, or vice versa, losing track of who is speaking at a given sentence.', detectOn: ['a4-groupe', 'a4-check', 'a8-lecture'], drill: 'd-citation', retest: 'd-citation' },
  { id: 'chaine-non-depliee', description: 'Reads a chain of abstract nominalisations as one simple idea, missing the two or three distinct claims it compresses.', detectOn: ['a5-groupe', 'a5-check'], drill: 'd-chaine', retest: 'd-chaine' },
  { id: 'chrono-brule', description: 'Burns the reading time budget on one of three reflexes: rereading without method, verifying a citation to its full source, or resolving every hedge before checking what the question needs.', detectOn: ['a7-groupe', 'a7-check'], drill: 'd-chrono', retest: 'd-chrono' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEET
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-densite', 'Lire dense, méthode', ['l’armature de la phrase', 'la réserve empilée', 'l’attribution de la citation', 'la chaîne nominale', 'lire contre le chronomètre'], [
    teach('sheet-densite-teach', 'Quatre mouvements, un budget de temps',
      "Un texte académique dense se déplie en quatre mouvements : l’armature (le sujet et le verbe principaux, trouvés en premier), la réserve empilée (une ou plusieurs précautions qui limitent une affirmation, sans la nier), l’attribution de la citation (qui parle vraiment, l’auteur ou la source qu’il convoque) et la chaîne nominale (deux ou trois phrases compressées en un seul groupe de noms abstraits). Les quatre se résolvent dans cet ordre, et seulement si une question posée l’exige, sous un temps réaliste. EN: A dense academic text unfolds in four moves: the backbone, the stacked hedge, the citation's attribution and the nominal chain, resolved in that order, and only as far as a question asked requires, under a realistic time budget."),
    table('sheet-densite-table', 'Les quatre mouvements, en un coup d’œil', ['Mouvement', 'Ce qu’il cherche'], [
      ['l’armature', 'le sujet et le verbe principaux'],
      ['la réserve empilée', 'ce qui limite une affirmation, sans la nier'],
      ['l’attribution', 'qui parle : l’auteur, ou la source citée'],
      ['la chaîne nominale', 'combien de phrases un groupe de noms compresse'],
      ['le chronomètre', 'ce que la question exige vraiment, et rien de plus'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

balanceSlots(SECTIONS, DRILL_LIST);

export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id)),
]);

export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C2 · LEÇON 12',
  intro: "La leçon 20 du C1 t’a appris à interpréter ce qu’une phrase laisse entendre : stance, ironie, présupposé. Cette leçon va plus loin, dans une direction différente : elle attaque la densité brute d’une phrase académique non simplifiée, avant toute interprétation, et le temps réaliste dans lequel un lecteur de C2 doit l’affronter. Tu trouves l’armature d’une phrase, tu comptes ses réserves empilées, tu attribues chaque citation à qui parle vraiment, et tu déplies une chaîne nominale en phrases simples, sur un texte académique général, jamais spécialisé dans une seule discipline.",
  skill: 'CE',
  grammarAssumed: ['c1.20'],
  grammarIntroduced: [
    'Finding a dense sentence’s own main subject and verb FIRST, before resolving any subordinate clause, as a distinct skill from interpreting what an already-readable sentence implies',
    'Counting and weighing academic hedges STACKED two or three deep in one sentence (il semble que... dans une certaine mesure... sous réserve de...), separating what is claimed from what only limits its force',
    'Attributing a reported claim to its real speaker, the text’s own author or a named cited source, from the reporting verb and the parenthetical reference, never from tone alone',
    'Unpacking a CHAIN of abstract nominalisations into the two or three plain clauses it compresses, distinguished explicitly from "who acts behind a passive or a single nominalisation" (c1.20’s own ground)',
    'Holding the backbone, the hedge, the citation and the nominal chain together on one new paragraph, then on a complete four-paragraph text, under a realistic, named time constraint against its three clock-burning reflexes',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Au C1, tu as appris à interpréter ce qu’une phrase laisse entendre. Cette leçon attaque un problème antérieur : la densité brute d’une phrase académique non simplifiée, et le temps réaliste dans lequel il faut la lire. Tu apprends à trouver l’armature d’une phrase, à compter ses réserves, à attribuer chaque citation et à déplier une chaîne nominale, sur un texte académique général.",
    minutes: 140,
    difficulty: 5,
    glyph: 'horloge',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: LECTURE_ACADEMIQUE_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (B1 build log, 2026-09-25). Kept, as every lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: [],
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not
 *  released: every row whose `drills` carries no `flashcard`. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, dicteeFor };
export const lessonWithoutTask = (): Lesson => LESSON;
