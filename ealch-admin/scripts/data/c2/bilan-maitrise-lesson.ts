// c2.14.l1 « Bilan de maîtrise » — the lesson. DRAFT, the FOURTEENTH AND LAST
// lesson of the C2 band, wave 4, written LAST on purpose. To RICH-LESSON-
// STANDARD.md (the workshop shape, text and task) on top of
// B1-BUILD-PLAYBOOK.md, with the C2 rules of C2-BUILD-PLAN.md and the c2.14
// brief in C2-RESEARCH-PLAN.md (around line 276). Structural model:
// `c2/correction-revision-lesson.ts` (c2.13): same helpers, same assembly,
// same validation shape, the sibling right before this one.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is real (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]` and the validators run on `LESSON` itself.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Odile Rochas, who coordinates the Institut Delorme's Programme de
//   maîtrise, reads candidate portfolios for a living and has seen hundreds
//   fail the same way: thirteen separate, competent paragraphs that never
//   answer each other. Act 1 names that problem and maps the whole C2 band,
//   lesson by lesson, by the band's own four units. Acts 2-6 recap those
//   thirteen lessons two or three at a time, grouped by unit, each recap
//   reusing REAL content from the cited lesson's own corpus file (a REFRAME,
//   an anchor passage, or a specific row by id) rather than inventing a
//   placeholder citation. Act 7 raises c2.13's own trap one level: a
//   portfolio that nails three skills and silently skips a fourth. Act 8 is
//   the graded capstone: read a dense passage already met in lesson 12 of
//   C2, extract and take a position on its argument, name the device that
//   carries its central claim, sustain a soutenu written response, then
//   self-edit it against lesson 13 of C2's own four questions.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · predecessors recapped)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le dossier de maîtrise      6  the problem; the band mapped, lesson
//                                      by lesson, unit by unit
//    2  Lire et entendre, sous      5  la leçon 11 et la leçon 12 du C2
//       contrainte
//    3  Les mots, le registre,      4  la leçon 3, la leçon 4 et la leçon 5
//       l’origine                      du C2
//    4  La nuance et la lecture     4  la leçon 1 et la leçon 2 du C2
//       intégrale
//    5  Médier, traduire,           4  la leçon 6, la leçon 7 et la leçon 8
//       improviser à l’oral             du C2
//    6  Tenir un discours,          4  la leçon 9 et la leçon 10 du C2
//       trancher par écrit
//    7  Le piège du bilan           3  la leçon 13 du C2, raised one level
//    8  Ton bilan de maîtrise      10  model, plan, scenario, TASK, practice,
//                                      cheat sheet, progress, quiz, review,
//                                      roundup
//
//   TOTAL 40 missions, 8 acts (6,5,4,4,4,4,3,10). Corpus: 114 authored rows
//   (.2400-.2513, inside the claimed .2400-.2599 block), plus 15 REAL rows
//   reused by id from five siblings (c2.01, c2.05, c2.06, c2.11, c2.13) and
//   thirteen REFRAMEs imported from all thirteen predecessors. Quiz: 8 rounds
//   of 5-6 (one per act). Eight error triggers, eight remediation drills, one
//   reference sheet, eight terms. Chapter artwork:
//   `c2-bilan-maitrise-image-prompts.md`, 8 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Treize instruments accordés séparément ; le bilan est la pièce où ils
//   jouent enfin ensemble. » EN: Thirteen instruments tuned separately; the
//   capstone is the piece where they finally play together.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    nothing new: the single graded task that fuses dense reading
//           (c2.12), argument synthesis and position (c2.10), naming a
//           precise rhetorical or idiomatic device (c2.02/c2.03), a
//           sustained soutenu response (c2.09/c2.08/c2.01), and self-editing
//           against a coherence checklist (c2.13); the capstone's own named
//           trap, a whole skill hidden inside an otherwise successful answer.
//   QUOTES  all thirteen predecessors' REFRAMEs, imported from their own
//           corpus files, never retyped; MESSAGE_CAMILLE (c2.01), EXTRACT_A
//           (c2.02), PORTRAIT_BERTHIER (c2.03), PASTICHE_IRONIQUE (c2.04),
//           MESSAGE_GIRARD (c2.05), MEDIATION_SOURCE (c2.06), POEM1 (c2.07),
//           CALLER_PRICES_FR (c2.08), HIKER_QUESTION_FR (c2.09), DOC2_TEXT
//           (c2.10), EXTRACT_DEMO and EXTRACT_PARAGRAPH (c2.12), all reused
//           verbatim; fifteen real rows reused by id from c2.01, c2.05,
//           c2.06, c2.11 and c2.13.
//   LEAVES  every rule and every method to its own lesson, cited by trail
//           position, never re-taught: this lesson teaches no new content at
//           all, by brief.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; Odile uses vous with the candidates. French only on
//   the learner surface; English authored on every `en` field and every
//   trailing « EN: », never shown by default. No em dash, no U+203F tie,
//   never "honnête"/"honnêtement"/"honest", in any field including a
//   groupDrill `note`. Typographic ’ throughout. No spaced « ? » or « ! » in
//   a scene or story bubble. Citations by trail position in French words
//   (« la leçon 9 du C2 »), never a raw id. No `listening` section anywhere
//   (c2.11 is cited by reused rows and REFRAME, never by a new audio
//   passage), so no `hideLines` risk exists in this file. Mission answer
//   slots are spread by `balanceSlots()`; the quiz is scattered by hand, as
//   c2.13 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 40 missions across 8 acts, at the lean end of the C2 range (c2.08/09
//      shipped 40 too), because every recap act is deliberately short: the
//      brief asks this lesson to RECOMBINE, never re-teach, so each pair or
//      trio of predecessors gets one tight pass rather than a full act each.
//      Extend any single act before the phone review, or ship at this size?
//   2. The task's dense source (act 8) reuses c2.12's own EXTRACT_PARAGRAPH
//      verbatim, so a candidate who took c2.12 recently meets the same
//      sentence twice. That repetition is deliberate (the brief: "recombines
//      existing C2 rows... does not write all-new content") and is named to
//      the learner directly in the task's own source note. Confirm this
//      reuse is wanted, or swap in a fresh, never-seen dense passage instead?
//   3. The task's rubric holds four criteria (lecture-synthèse, procédé,
//      registre, révision), mirroring c2.13's own four-criterion, 20-point
//      shape rather than inventing a fifth. Keep four, or split lecture and
//      synthèse into two criteria for five?
//   4. Fifteen real rows are reused by id from five siblings (c2.01, c2.05,
//      c2.06, c2.11, c2.13); the other eight predecessors (c2.02, c2.03,
//      c2.04, c2.07, c2.08, c2.09, c2.10, c2.12) are cited by REFRAME import
//      and by a reused NAMED PASSAGE constant (never a bare row id) because
//      their own files export a passage constant rather than a short,
//      quiz-sized sentence row convenient to reuse as a groupDrill item.
//      Confirm this mixed approach, or push for at least one row-id reuse
//      per predecessor at the pre-review pass?
//   5. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap, ALL_ROWS, ROWS_BY_ACT,
  IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor, FOREIGN,
  UNIT1_TITLE, UNIT2_TITLE, UNIT3_TITLE, UNIT4_TITLE,
  C201_REF, C202_REF, C203_REF, C204_REF, C205_REF, C206_REF, C207_REF,
  C208_REF, C209_REF, C210_REF, C211_REF, C212_REF, C213_REF,
  C201_REFRAME, C201_REFRAME_EN, C202_REFRAME, C202_REFRAME_EN,
  C203_REFRAME, C203_REFRAME_EN, C204_REFRAME, C204_REFRAME_EN,
  C205_REFRAME, C205_REFRAME_EN, C206_REFRAME, C206_REFRAME_EN,
  C207_REFRAME, C207_REFRAME_EN, C208_REFRAME, C208_REFRAME_EN,
  C209_REFRAME, C209_REFRAME_EN, C210_REFRAME, C210_REFRAME_EN,
  C211_REFRAME, C211_REFRAME_EN, C212_REFRAME, C212_REFRAME_EN,
  C213_REFRAME, C213_REFRAME_EN,
  MESSAGE_CAMILLE, MESSAGE_CAMILLE_EN,
  C202_EXTRACT_A, C202_EXTRACT_A_EN,
  PORTRAIT_BERTHIER, PORTRAIT_BERTHIER_EN,
  PASTICHE_IRONIQUE, PASTICHE_IRONIQUE_EN,
  MESSAGE_GIRARD, MESSAGE_GIRARD_EN,
  MEDIATION_SOURCE, MEDIATION_SOURCE_EN,
  POEM1, POEM1_EN, POEM1_SOURCE,
  CALLER_PRICES_FR, CALLER_PRICES_EN,
  HIKER_QUESTION_FR, HIKER_QUESTION_EN,
  DOC2_TEXT, DOC2_TEXT_EN, C210_DOSSIER_TITLE,
  C212_EXTRACT_DEMO, C212_EXTRACT_DEMO_EN,
  C212_EXTRACT_PARAGRAPH, C212_EXTRACT_PARAGRAPH_EN,
  F201, F205, F206, F211, F213,
  TASK_SOURCE_NOTE, TASK_SOURCE_NOTE_EN,
} from './bilan-maitrise-corpus.ts';
import { BILAN_MAITRISE_TERMS } from './bilan-maitrise-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as unknown as SrcItem]));

/** An item's fr/en, from this lesson's own corpus OR one of the five
 *  siblings' reused rows (§H of the corpus file). Throws on a typo, so no
 *  section can name an id that resolves nowhere. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? (FOREIGN.get(id) as SrcItem | undefined);
  if (!r) throw new Error(`c2.14: no item ${id}`);
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
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE DOSSIER DE MAÎTRISE
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Le dossier de maîtrise', frSub: 'L’Institut Delorme',
  setting: { place: 'Une salle de l’Institut Delorme', city: '', time: '14 h', ambience: 'treize chemises de carton empilées sur une table' },
  beats: [
    { kind: 'narration', text: 'Odile Rochas coordonne le Programme de maîtrise de l’Institut Delorme depuis six ans. Elle relit ton dossier de candidature : treize chemises, une par leçon du C2.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Odile', fr: src(E(2400)).fr, en: src(E(2400)).en, respell: '[trez feesh | ün par luh-SOHⁿ | ay oh-KÜN nuh suh ray-POHⁿ]', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'Chaque chemise est excellente, prise seule : une analyse fine, un registre tenu, une synthèse précise. Mais rien, dans aucune des treize, ne répond à une autre.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Que proposes-tu à Odile pour ton bilan final ?', size: 'lg',
      options: [
        { fr: src(E(2413)).fr, en: src(E(2413)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(2414)).fr, en: src(E(2414)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Odile sourit : « Voilà exactement ce que ce bilan demande. »',
        breaks: 'Odile repose le dossier : « Treize fiches de plus ne répondront pas à ce qui manque. »',
      },
    },
    {
      kind: 'break', heading: 'Une seule pièce, jamais treize',
      body: `${src(E(2403)).fr} EN: ${src(E(2403)).en}`,
      wrong: { fr: src(E(2413)).fr, ipa: '/ʒə vɛ ʁəpʁɑ̃dʁ ʃak lə.sɔ̃ sepaʁemɑ̃ dɑ̃ lɔʁdʁ dy debys a la fɛ̃/', respell: '[zhuh veh ruh-prahⁿdr shak luh-SOHⁿ | say-pa-ray-MAHⁿ dahⁿ lordr dü day-BÜ a la FEHⁿ]', en: src(E(2413)).en },
      right: { fr: src(E(2414)).fr, ipa: '/ʒə vɛ ʁəliʁ le katʁ ynite pɥi ekʁiʁ yn sœl ʁepɔ̃s u ɛl sə ʁepɔ̃d/', respell: '[zhuh veh ruh-LEER lay katr ü-nee-TAY | pwee ay-KREER ün seul ray-POHⁿS | oo el suh ray-POHⁿD]', en: src(E(2414)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Odile referme le dossier. Cette leçon reprend les treize compétences du C2, unité par unité, puis te demande une seule réponse, écrite, qui les tient toutes ensemble.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['dossier'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Situer les treize leçons du C2', s: 'Acte 1 : les quatre unités, lesson par leçon' },
    { t: 'Relier lecture et écoute', s: 'Acte 2 : la leçon 11 et la leçon 12 du C2, les deux leçons de reconnaissance' },
    { t: 'Relier les mots, le registre et l’origine', s: 'Acte 3 : la leçon 3, la leçon 4 et la leçon 5 du C2' },
    { t: 'Relier la nuance et la lecture intégrale', s: 'Acte 4 : la leçon 1 et la leçon 2 du C2' },
    { t: 'Relier médiation, traduction et improvisation', s: 'Acte 5 : la leçon 6, la leçon 7 et la leçon 8 du C2' },
    { t: 'Relier discours tenu et synthèse tranchée', s: 'Actes 6 à 8 : la leçon 9, la leçon 10, le piège central, puis ton bilan' },
  ],
  audio: AUDIO, say: REFRAME,
};

/** NOTICE: all thirteen predecessors, cited by trail position, each with its
 *  REAL reframe surfaced on tap. Points at `sheet-bilan`. */
const A1_MAP: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a1-map', layer: 'core', sheetId: 'sheet-bilan', previewCount: 4,
  title: 'Treize leçons, treize signatures',
  cols: ['Leçon', 'Son métaphore'],
  rows: [
    { cells: [Cap(C201_REF), 'le curseur'], say: C201_REFRAME,
      detail: { title: 'Précision, nuance et l’implicite', body: `${C201_REFRAME} EN: ${C201_REFRAME_EN}`, say: C201_REFRAME } },
    { cells: [Cap(C202_REF), 'les quatre fils'], say: C202_REFRAME,
      detail: { title: 'L’analyse littéraire intégrale', body: `${C202_REFRAME} EN: ${C202_REFRAME_EN}`, say: C202_REFRAME } },
    { cells: [Cap(C203_REF), 'le registre d’une image'], say: C203_REFRAME,
      detail: { title: 'Cent expressions idiomatiques avancées', body: `${C203_REFRAME} EN: ${C203_REFRAME_EN}`, say: C203_REFRAME } },
    { cells: [Cap(C204_REF), 'le costume cité'], say: C204_REFRAME,
      detail: { title: 'Verlan, argot et registres', body: `${C204_REFRAME} EN: ${C204_REFRAME_EN}`, say: C204_REFRAME } },
    { cells: [Cap(C205_REF), 'la pierre ancienne'], say: C205_REFRAME,
      detail: { title: 'Étymologie et formation des mots', body: `${C205_REFRAME} EN: ${C205_REFRAME_EN}`, say: C205_REFRAME } },
    { cells: [Cap(C206_REF), 'la porte qui change de taille'], say: C206_REFRAME,
      detail: { title: 'La médiation linguistique', body: `${C206_REFRAME} EN: ${C206_REFRAME_EN}`, say: C206_REFRAME } },
    { cells: [Cap(C207_REF), 'la traversée'], say: C207_REFRAME,
      detail: { title: 'Traduire la poésie', body: `${C207_REFRAME} EN: ${C207_REFRAME_EN}`, say: C207_REFRAME } },
    { cells: [Cap(C208_REF), 'le direct, sans filet'], say: C208_REFRAME,
      detail: { title: 'La production orale spontanée', body: `${C208_REFRAME} EN: ${C208_REFRAME_EN}`, say: C208_REFRAME } },
    { cells: [Cap(C209_REF), 'le sentier qui ne raccourcit pas'], say: C209_REFRAME,
      detail: { title: 'Soutenir un discours long', body: C209_REFRAME, say: C209_REFRAME } },
    { cells: [Cap(C210_REF), 'peser puis trancher'], say: C210_REFRAME,
      detail: { title: 'La synthèse experte et la dissertation avancée', body: `${C210_REFRAME} EN: ${C210_REFRAME_EN}`, say: C210_REFRAME } },
    { cells: [Cap(C211_REF), 'le signal dans le bruit'], say: C211_REFRAME,
      detail: { title: 'Compréhension orale experte', body: `${C211_REFRAME} EN: ${C211_REFRAME_EN}`, say: C211_REFRAME } },
    { cells: [Cap(C212_REF), 'déplier la phrase'], say: C212_REFRAME,
      detail: { title: 'Lire des textes académiques denses', body: `${C212_REFRAME} EN: ${C212_REFRAME_EN}`, say: C212_REFRAME } },
    { cells: [Cap(C213_REF), 'le fil repris'], say: C213_REFRAME,
      detail: { title: 'Correction et révision', body: `${C213_REFRAME} EN: ${C213_REFRAME_EN}`, say: C213_REFRAME } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['dossier', 'unites'],
};

/** NOTICE: the band's own four units, one card each. */
const A1_UNITS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a1-units', render: 'deck', layer: 'core', size: 'lg',
  title: 'Les quatre unités du C2', frSub: 'Un coup d’œil sur tout le programme',
  hint: 'Quatre cartes, quatre unités. Chaque leçon que tu as suivie appartient à l’une d’elles.',
  audio: AUDIO, say: REFRAME, terms: ['unites'],
  cards: [
    { head: UNIT1_TITLE, label: `${C201_REF}, ${C202_REF}, ${C203_REF}, ${C204_REF}`,
      fr: src(E(2405)).fr, sub: '[pray-see-ZYOHⁿ ay steel]',
      body: 'Le curseur du mot exact, les quatre fils d’une œuvre entière, le registre d’une expression, le costume de l’argot cité. EN: a word’s exact dial, a whole work’s four threads, an idiom’s register, slang’s quoted costume.' },
    { head: UNIT2_TITLE, label: `${C205_REF}, ${C206_REF}, ${C207_REF}, ${C208_REF}`,
      fr: src(E(2406)).fr, sub: '[moh ay may-dya-SYOHⁿ]',
      body: 'La pierre ancienne d’un mot savant, la porte de la médiation, la traversée d’un poème traduit, le direct d’une réponse improvisée. EN: a learned word’s ancient stone, mediation’s door, a translated poem’s crossing, a live, improvised reply.' },
    { head: UNIT3_TITLE, label: `${C209_REF}, ${C210_REF}, ${C211_REF}, ${C212_REF}`,
      fr: src(E(2407)).fr, sub: '[dees-KOOR ay a-na-LEEZ]',
      body: 'Un sentier sans raccourci, peser une source puis trancher, un signal dans le bruit, une phrase dense dépliée contre l’horloge. EN: a trail with no shortcut, weighing then deciding, a signal in noise, a dense sentence unfolded against the clock.' },
    { head: UNIT4_TITLE, label: C213_REF,
      fr: src(E(2408)).fr, sub: '[ray-vee-ZYOHⁿ ay meh-TREEZ]',
      body: 'Le fil d’un texte repris jusqu’à ce qu’il tienne, et ce bilan lui-même, qui referme la quatrième unité. EN: a text’s thread picked back up until it holds, and this capstone itself, closing the fourth unit.' },
  ],
};

/** PRACTISE: sort a fresh lesson-name into its unit. */
const A1_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-groupe', layer: 'core', size: 'lg',
  title: 'Range chaque leçon dans son unité', frSub: 'Quatre unités, treize leçons',
  groups: [
    grp('Précision et style', [
      it(E(2405), UNIT1_TITLE),
    ], chk('La leçon 3 du C2, « cent expressions idiomatiques », appartient à...',
      [UNIT1_TITLE, UNIT3_TITLE], 0,
      'Les expressions imagées sont dans la première unité, avec la précision du mot et la lecture intégrale. EN: idioms sit in the first unit, with word precision and integral reading.')),
    grp('Mots et médiation', [
      it(E(2406), UNIT2_TITLE),
    ], chk('La leçon 7 du C2, « traduire la poésie », appartient à...',
      [UNIT2_TITLE, UNIT4_TITLE], 0,
      'La traduction poétique est dans la deuxième unité, avec l’étymologie, la médiation et l’oral spontané. EN: poetry translation sits in the second unit, with etymology, mediation and spontaneous speech.')),
    grp('Discours et analyse', [
      it(E(2407), UNIT3_TITLE),
    ], chk('La leçon 11 du C2, « compréhension orale experte », appartient à...',
      [UNIT3_TITLE, UNIT1_TITLE], 0,
      'L’écoute experte est dans la troisième unité, avec le discours long, la synthèse et la lecture académique. EN: expert listening sits in the third unit, with long discourse, synthesis and academic reading.')),
    ctl('La quatrième unité', 'La leçon 13 du C2, « correction et révision », est seule dans...',
      [UNIT4_TITLE, UNIT1_TITLE], 0,
      'Révision et maîtrise ne compte qu’une seule leçon avant ce bilan. EN: revision and mastery holds only one lesson before this capstone.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['unites'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Ce que ce bilan teste', 'Ce bilan teste...', ['une quatorzième compétence, plus difficile que les treize autres', 'si les treize compétences déjà acquises savent jouer ensemble'], 1,
    'Le C2 n’ajoute rien de nouveau ; il recombine. EN: C2 adds nothing new; it recombines.'),
  ctl('Le dossier d’Odile', 'Le problème que repère Odile dans un dossier fragmenté est...', ['chaque fiche est fausse ou incomplète', 'chaque fiche est bonne, mais aucune ne répond à une autre'], 1,
    'Treize réussites séparées ne prouvent pas treize réussites ensemble. EN: thirteen separate successes do not prove thirteen successes together.'),
  ctl('Les quatre unités', 'Les quatre unités du C2 sont...', ['précision et style, mots et médiation, discours et analyse, révision et maîtrise', 'grammaire, vocabulaire, oral, écrit'], 0,
    'Le C2 n’a pas d’unité de grammaire : aucune n’est nouvelle à ce niveau. EN: C2 has no grammar unit: none is new at this level.'),
], ['dossier', 'unites']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le dossier de maîtrise',
    opener: {
      line: 'Treize chemises excellentes, et aucune qui répond à une autre : ici tu vois ce que ce bilan va corriger. EN: Thirteen excellent files, and none that answers another: here you see what this capstone is going to fix.',
      imageRef: 'lessons/c2-14-bilan-maitrise/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais situer chacune des treize leçons du C2 dans l’une des quatre unités, et tu sais ce que ce bilan va te demander de prouver. EN: You can place each of C2’s thirteen lessons inside one of the four units, and you know what this capstone will ask you to prove.',
    estScreens: 22, restPoints: ['a1-map'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_MAP, A1_UNITS, A1_GROUPE, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LIRE ET ENTENDRE, SOUS CONTRAINTE
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a2-lecture', layer: 'core', questionsInModal: true,
  title: 'Une phrase, revue', frSub: 'La leçon 12 du C2, en une phrase',
  text: `${C212_EXTRACT_DEMO}\n\nTu as déjà lu cette phrase à la leçon 12 du C2. Relis-la en cherchant seulement son armature : qui fait quoi.`,
  questions: [
    { q: 'Quel est le sujet et le verbe principal de cette phrase, une fois les réserves écartées.', a: '« L’hypothèse... mérite d’être prise au sérieux » : le sujet est l’hypothèse, le verbe principal est « mérite ». Tout le reste qualifie ou retarde cette affirmation.' },
    { q: 'Que fait la seconde moitié de la phrase, après « toutefois ».', a: 'Elle retire une partie de ce que la première moitié semblait accorder : l’hypothèse mérite d’être prise au sérieux, mais elle ne peut pas être validée sans qu’une question préalable soit réglée.' },
  ],
  audio: REC('rec-c2-14-phrase-dense'), say: REFRAME, terms: ['armatureSignal'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a2-exemples', layer: 'core', title: 'Ce que deux leçons de reconnaissance t’ont donné',
  examples: [
    { fr: C212_REFRAME, en: C212_REFRAME_EN, note: `${Cap(C212_REF)} : trouver l’armature d’une phrase dense avant de résoudre une seule subordonnée` },
    { fr: C211_REFRAME, en: C211_REFRAME_EN, note: `${Cap(C211_REF)} : chercher le signal, même dans le bruit` },
    { fr: src(F211.triage).fr, en: src(F211.triage).en, note: `${Cap(C211_REF)} : nommer le bruit avant de le réparer` },
  ],
  audio: AUDIO, say: REFRAME, terms: ['armatureSignal'],
};

const A2_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-groupe', layer: 'core', size: 'lg',
  title: 'Trier avant de comprendre', frSub: 'Une phrase dense, un appel bruité',
  groups: [
    grp('Ce que les deux leçons partagent', [
      it(E(2420)), it(E(2421)),
    ], chk('Ces deux leçons demandent-elles de produire un mot de français.',
      ['oui, les deux', 'non, aucune des deux'], 1,
      'Les deux sont des leçons de reconnaissance : spot, map, understand. EN: both are recognition-only lessons.')),
    grp('Le signal, dans le bruit', [
      it(F211.signal, 'le signal'),
    ], chk('« Cherche le signal, même dans le bruit » vient de...',
      [C211_REF, C212_REF], 0,
      `${Cap(C211_REF)} : ce qu’on sait déjà entendre (le plan, la position) reste le signal, même déformé. EN: what you already know how to hear stays the signal, even distorted.`)),
    ctl('L’armature avant tout', 'Dans une phrase dense, tu cherches en premier...',
      ['chaque mot inconnu, un par un', 'le sujet et le verbe principal, avant toute subordonnée'], 1,
      `${Cap(C212_REF)} : l’armature se trouve avant qu’on résolve une seule subordonnée. EN: the backbone is found before resolving a single subordinate clause.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['armatureSignal'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Comprendre chaque mot', 'Comprendre chaque mot d’une phrase dense suffit-il à l’avoir comprise.', ['oui', 'non, tant que l’armature n’est pas trouvée'], 1,
    'La leçon 12 du C2 l’a montré : l’armature, pas le vocabulaire seul. EN: lesson 12 of C2 showed it: the backbone, not vocabulary alone.'),
  ctl('Les deux leçons de reconnaissance', 'Dans ce bilan, la leçon 11 et la leçon 12 du C2 forment...', ['la moitié « lecture et écoute » du dossier', 'une seule et même leçon, répétée deux fois'], 0,
    'Deux moitiés d’une même compétence : extraire vite, sans tout comprendre d’un coup. EN: two halves of one skill: extracting fast, without understanding everything at once.'),
], ['armatureSignal']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Lire et entendre, sous contrainte',
    opener: {
      line: 'Une phrase dense et un appel bruité : deux manières de trier, avant de comprendre. EN: A dense sentence and a noisy call: two ways of sorting, before understanding.',
      imageRef: 'lessons/c2-14-bilan-maitrise/act02.jpg',
    },
    sections: [],
    milestone: 'Tu relies la leçon 11 et la leçon 12 du C2 comme les deux moitiés d’une seule compétence de reconnaissance. EN: You can connect lesson 11 and lesson 12 of C2 as the two halves of one single recognition skill.',
    estScreens: 14, restPoints: ['a2-lecture'],
  },
  sections: [A2_LECTURE, A2_EXEMPLES, A2_GROUPE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LES MOTS, LE REGISTRE, L’ORIGINE
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a3-deck', render: 'deck', layer: 'core', size: 'lg',
  title: 'Trois leçons, trois jugements sur un mot', frSub: 'Registre, usage littéraire, histoire',
  hint: 'Trois cartes, trois leçons déjà vues. Chacune juge un mot différemment.',
  audio: AUDIO, say: REFRAME, terms: ['motRegistre'],
  cards: [
    { head: Cap(C203_REF), label: 'le portrait de Berthier', fr: PORTRAIT_BERTHIER.split('\n\n')[0],
      sub: '[zhüzh ahⁿ-TWAN behr-TYAY]',
      body: `Cinq familles d’expressions imagées, jamais deux dans la même phrase : le registre est tenu du début à la fin. EN: five idiom families, never two in the same sentence: the register holds from start to finish.` },
    { head: Cap(C204_REF), label: 'un conseil municipal, cité', fr: PASTICHE_IRONIQUE.split('. ')[1] ?? PASTICHE_IRONIQUE,
      sub: '[eel ee a ply uhⁿ PEZ dahⁿ lay KES]',
      body: 'Un élu cite son propre argot, et le compte rendu officiel s’en garde bien : citer n’est jamais adopter. EN: an official quotes his own slang, and the minutes carefully decline to repeat it: quoting is never adopting.' },
    { head: Cap(C205_REF), label: 'la lettre de Madame Girard', fr: src(F205.decompose).fr,
      sub: '[foh-toh-FOB suh LEE foht ay FOH-beu]',
      body: 'Décomposer un mot savant en ses racines permet de deviner son sens avant même de le connaître. EN: breaking a learned word into its roots lets you guess its meaning before you even know it.' },
  ],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-table', layer: 'core',
  title: 'Trois leçons, trois terrains qui ne se recoupent jamais',
  cols: ['Leçon', 'Ce qu’elle juge'],
  rows: [
    { cells: [Cap(C203_REF), 'le registre d’une expression imagée'], say: C203_REFRAME,
      detail: { title: 'Cent expressions idiomatiques', body: 'Une expression porte un registre autant qu’une image : choisis celle qui tient dans ta phrase. EN: an idiom carries a register as much as a picture.', say: C203_REFRAME } },
    { cells: [Cap(C204_REF), 'l’usage littéraire d’un mot d’argot cité'], say: C204_REFRAME,
      detail: { title: 'Verlan, argot et registres', body: 'Un mot d’argot cité est un costume choisi pour un personnage, jamais un vêtement que le texte te tend. EN: a quoted slang word is a costume chosen for a character.', say: C204_REFRAME } },
    { cells: [Cap(C205_REF), 'l’histoire d’un mot savant'], say: C205_REFRAME,
      detail: { title: 'Étymologie et formation des mots', body: 'Derrière chaque mot savant dort une pierre ancienne. EN: behind every learned word sleeps an ancient stone.', say: C205_REFRAME } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['motRegistre'],
};

const A3_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-groupe', layer: 'core', size: 'lg',
  title: 'Quelle leçon juge ce mot ?', frSub: 'Registre, littérature ou histoire',
  groups: [
    grp('L’histoire d’un mot', [
      it(F205.photophobe, 'photophobe'), it(F205.insupportable, 'insupportable'),
    ], chk('Expliquer « photophobe » par ses racines grecques relève de...',
      [C205_REF, C203_REF], 0,
      `${Cap(C205_REF)} : décomposer, puis déduire le sens. EN: decompose, then deduce the meaning.`)),
    grp('Un mot d’argot cité', [
      it(E(2432)),
    ], chk('Citer un mot d’argot dans ta propre analyse t’autorise-t-il à l’employer toi-même.',
      ['oui', 'non, jamais'], 1,
      `${Cap(C204_REF)} : citer n’est jamais adopter. EN: quoting is never adopting.`)),
    ctl('Une seule expression par phrase', 'Un portrait soutenu qui mêle plusieurs expressions imagées doit...',
      ['en citer deux ou trois par phrase, pour faire riche', 'n’en citer jamais plus d’une par phrase'], 1,
      `${Cap(C203_REF)} : une seule expression par idée tient le registre. EN: one idiom per idea keeps the register.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['motRegistre'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Trois jugements', 'Un mot savant, une expression imagée et un mot d’argot cité se jugent...', ['tous de la même façon', 'chacun différemment : registre, usage littéraire, histoire'], 1,
    'Trois terrains qui ne se recoupent jamais. EN: three grounds that never overlap.'),
  ctl('Citer un mot d’argot', 'Analyser un mot d’argot cité dans un texte littéraire t’autorise à...', ['l’employer toi-même dans ton analyse', 'le nommer, sans jamais l’employer toi-même'], 1,
    'Le piège exact de la leçon 4 du C2. EN: lesson 4 of C2’s exact trap.'),
], ['motRegistre']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Les mots, le registre, l’origine',
    opener: {
      line: 'Un mot savant, une expression imagée, un mot d’argot cité : trois costumes, jamais le même tissu. EN: A learned word, a vivid idiom, a quoted slang word: three costumes, never the same fabric.',
      imageRef: 'lessons/c2-14-bilan-maitrise/act03.jpg',
    },
    sections: [],
    milestone: 'Tu juges un mot par le bon critère : son registre, son usage littéraire, ou son histoire, sans jamais confondre les trois. EN: You judge a word by the right criterion: its register, its literary use, or its history, never confusing the three.',
    estScreens: 13, restPoints: ['a3-deck'],
  },
  sections: [A3_DECK, A3_TABLE, A3_GROUPE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA NUANCE ET LA LECTURE INTÉGRALE
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a4-lecture', layer: 'core', questionsInModal: true,
  title: 'Le courriel de Camille', frSub: 'La leçon 1 du C2, relu',
  text: `${MESSAGE_CAMILLE}\n\nTu as déjà lu ce courriel à la leçon 1 du C2. Cette fois, dis non pas CE qu’il laisse entendre, mais quel registre une réponse devrait reprendre.`,
  questions: [
    { q: 'Quel est le ton réel de ce courriel, sous sa politesse professionnelle.', a: 'Un agacement réel, jamais nommé : « tout le loisir d’apprécier » est ironique, et « comme d’habitude » présuppose que ce retard s’est déjà produit plusieurs fois.' },
    { q: 'Une réponse qui ignorerait ce ton et ne traiterait que les faits serait-elle une bonne réponse, au sens de la leçon 1 du C2.', a: 'Non : elle sous-lirait le message. La leçon 1 du C2 demande une réponse qui reconnaît le registre implicite, sans l’aggraver ni le nier.' },
  ],
  audio: REC('rec-c2-14-courriel-camille'), say: REFRAME, terms: ['curseurFils'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a4-exemples', layer: 'core', title: 'Un mot, puis tout un texte',
  examples: [
    { fr: C201_REFRAME, en: C201_REFRAME_EN, note: `${Cap(C201_REF)} : chaque mot a un curseur, où tu le places dit autant que ce qu’il signifie` },
    { fr: C202_REFRAME, en: C202_REFRAME_EN, note: `${Cap(C202_REF)} : lire une œuvre, c’est tenir quatre fils ensemble` },
    { fr: 'Elle fut simple ne pouvant être parée, mais malheureuse comme une déclassée.', en: C202_EXTRACT_A_EN.split('.')[1] ?? C202_EXTRACT_A_EN, note: `${Cap(C202_REF)} : une phrase de l’extrait de Maupassant, où le registre narratif et l’ironie se tiennent ensemble` },
  ],
  audio: AUDIO, say: REFRAME, terms: ['curseurFils'],
};

const A4_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-groupe', layer: 'core', size: 'lg',
  title: 'Un mot ou tout un texte ?', frSub: 'Le curseur, puis les quatre fils',
  groups: [
    grp('Le modèle de la leçon 1', [
      it(F201.modele1, 'un ton professionnel, un agacement implicite'), it(F201.modele2, 'la présupposition'),
    ], chk('« Comme d’habitude » présuppose que ce retard...',
      ['est une première fois', 's’est déjà produit plusieurs fois'], 1,
      `${Cap(C201_REF)} : la présupposition porte l’histoire que la phrase ne raconte pas. EN: the presupposition carries the history the sentence does not tell.`)),
    grp('L’ironie du modèle', [
      it(F201.modele3, 'l’ironie de « tout le loisir d’apprécier »'),
    ], chk('« Tout le loisir d’apprécier » un retard est...',
      ['une phrase sincère', 'ironique : personne n’a apprécié ce délai'], 1,
      `${Cap(C201_REF)} : l’ironie dit l’inverse de ce qu’elle affirme. EN: irony says the opposite of what it states.`)),
    ctl('Lire une œuvre entière', 'Lire un texte littéraire intégralement veut dire tenir...',
      ['un seul procédé à la fois, jusqu’au bout', 'le registre, la voix, la structure et la figure ensemble, sur les mêmes lignes'], 1,
      `${Cap(C202_REF)} : les quatre fils, tenus ensemble. EN: the four threads, held together.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['curseurFils'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Lire l’implicite et lire intégralement', 'Lire l’implicite et lire une œuvre intégralement demandent...', ['deux réflexes différents, sans rapport', 'le même réflexe, à une échelle différente'], 1,
    'Un seul curseur, ou plusieurs curseurs sur les mêmes lignes. EN: one dial, or several dials on the same lines.'),
  ctl('S’arrêter après un seul procédé', 'Nommer un seul procédé dans un texte et s’arrêter là est...', ['suffisant, si le procédé est bien nommé', 'le piège exact que la leçon 2 du C2 t’a appris à éviter'], 1,
    'La leçon 2 du C2 va plus loin : plusieurs fils, tenus ensemble. EN: lesson 2 of C2 goes further: several threads, held together.'),
], ['curseurFils']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La nuance et la lecture intégrale',
    opener: {
      line: 'Un courriel qui laisse entendre un agacement, un roman qui tient quatre fils à la fois : deux lectures, un seul réflexe. EN: An email implying irritation, a novel holding four threads at once: two readings, one single reflex.',
      imageRef: 'lessons/c2-14-bilan-maitrise/act04.jpg',
    },
    sections: [],
    milestone: 'Tu relies la précision d’un seul mot à la lecture intégrale d’un texte entier, comme deux échelles du même geste. EN: You connect a single word’s precision to a whole text’s integral reading, as two scales of the same gesture.',
    estScreens: 13, restPoints: ['a4-lecture'],
  },
  sections: [A4_LECTURE, A4_EXEMPLES, A4_GROUPE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — MÉDIER, TRADUIRE, IMPROVISER À L’ORAL
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-deck', render: 'deck', layer: 'core', size: 'lg',
  title: 'Trois portes, un même sens à faire passer', frSub: 'Médier, traduire, improviser',
  hint: 'Trois cartes, trois leçons déjà vues. Chacune change le contenant, jamais le fait.',
  audio: AUDIO, say: REFRAME, terms: ['porteTraversee'],
  cards: [
    { head: Cap(C206_REF), label: 'le programme de verdissement', fr: C206_REFRAME,
      sub: '[kah-noh-PAY ar-boh-RAY]',
      body: 'Un texte technique dense, reformulé pour un public non spécialiste, sans perdre un seul fait. EN: a dense technical text, reformulated for a non-specialist audience, without losing a single fact.' },
    { head: Cap(C207_REF), label: 'Chanson d’automne, de Verlaine', fr: POEM1.split('\n')[0],
      sub: '[lay sahⁿ-GLOH lohⁿ]',
      body: 'Un vers français ne porte jamais exactement le même sanglot en anglais ; le traducteur choisit ce qu’il garde. EN: a line of French verse never carries exactly the same sob in English.' },
    { head: Cap(C208_REF), label: 'un auditeur en direct', fr: CALLER_PRICES_FR,
      sub: '[voh pree sohⁿ troh oh]',
      body: 'Une objection en direct, sans préparation, demande une réponse qui tient, même improvisée. EN: a live, unprepared objection demands a reply that holds together, even improvised.' },
  ],
};

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a5-lecture', layer: 'core', questionsInModal: true,
  title: 'Le texte technique, relu', frSub: 'La leçon 6 du C2, en une phrase',
  text: `${MEDIATION_SOURCE}\n\nTu as déjà lu ce passage à la leçon 6 du C2. Dis seulement si un lecteur non spécialiste pourrait, à partir de cette seule phrase, agir sur ce que le programme change vraiment.`,
  questions: [
    { q: 'Quel fait actionnable ce passage porte-t-il, sous son vocabulaire technique.', a: 'Des arbres seront plantés dans les quartiers les plus chauds, sur cinq ans, une fois les autorisations municipales obtenues.' },
    { q: 'Pourquoi un lecteur non spécialiste risque-t-il de perdre ce fait en lisant la phrase telle qu’elle est écrite.', a: 'Parce que la phrase empile plusieurs groupes nominaux techniques avant d’arriver au fait concret, exactement ce que la leçon 6 du C2 demande de reformuler sans le perdre.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['porteTraversee'],
};

const A5_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a5-usages', layer: 'core', title: 'Changer la porte, jamais le fait',
  cases: [
    { situation: 'Un rapport technique, pour un lecteur non spécialiste', fr: src(F206.bilan).fr, en: src(F206.bilan).en },
    { situation: 'Un poème français, traduit en anglais', fr: POEM1_SOURCE, en: 'Paul Verlaine, "Chanson d’automne", public domain, the first poem this lesson’s trail ever translated.' },
    { situation: 'Une question en direct, sans préparation', fr: HIKER_QUESTION_FR, en: HIKER_QUESTION_EN },
  ],
  audio: AUDIO, say: REFRAME, terms: ['porteTraversee'],
};

const A5_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-groupe', layer: 'core', size: 'lg',
  title: 'Une porte, un bagage, une réponse tenue', frSub: 'Trois leçons, une même exigence',
  groups: [
    grp('Une médiation réussie', [
      it(F206.bilan),
    ], chk('Une médiation réussie se lit comme...',
      ['un texte simplifié à l’excès', 'si elle avait toujours été écrite pour ce public'], 1,
      `${Cap(C206_REF)} : le sens ne rétrécit jamais, seule la porte change de taille. EN: the meaning never shrinks, only the door changes size.`)),
    grp('La fausse simplification', [
      it(E(2464)), it(E(2465)),
    ], chk('Simplifier le vocabulaire d’un rapport technique en gardant sa phrase complexe intacte est...',
      ['une bonne médiation', 'une fausse simplification, le piège central de la leçon 6 du C2'], 1,
      `${Cap(C206_REF)} : il faut simplifier le vocabulaire ET la structure, ensemble. EN: both vocabulary and structure must be simplified together.`)),
    ctl('Une réponse improvisée', 'Une réponse en direct qui s’arrête net, sans conclure, vaut...',
      ['autant qu’une réponse qui arrive quelque part', 'moins qu’une réponse qui arrive quelque part'], 1,
      `${Cap(C208_REF)} : avance, répare en marchant, et arrive quelque part. EN: move forward, repair as you go, and arrive somewhere.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['porteTraversee'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Ce que ces trois leçons partagent', 'Médier, traduire un poème et improviser à l’oral partagent...', ['aucune exigence commune', 'ne jamais perdre ce que le texte ou l’échange porte, même en changeant tout le reste'], 1,
    'Trois portes, un même sens à faire passer. EN: three doors, one meaning to carry through.'),
  ctl('La traduction poétique', 'Traduire un poème accepte de...', ['garder tout, comme en prose', 'perdre un peu de sens pour garder le ton'], 1,
    'La leçon 7 du C2 contraste avec la leçon 22 du C1 exactement sur ce point. EN: lesson 7 of C2 contrasts with lesson 22 of C1 on exactly this point.'),
], ['porteTraversee']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Médier, traduire, improviser à l’oral',
    opener: {
      line: 'Reformuler un rapport technique, traduire un poème, répondre à un appel en direct : trois portes, un même sens à faire passer. EN: Reformulating a technical report, translating a poem, answering a live call: three doors, the same meaning to carry through.',
      imageRef: 'lessons/c2-14-bilan-maitrise/act05.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais la même exigence de fidélité derrière trois leçons qui changent, chacune, un contenant différent. EN: You recognise the same demand for fidelity behind three lessons that each change a different container.',
    estScreens: 13, restPoints: ['a5-deck'],
  },
  sections: [A5_DECK, A5_LECTURE, A5_USAGES, A5_GROUPE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — TENIR UN DISCOURS, TRANCHER PAR ÉCRIT
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a6-lecture', layer: 'core', questionsInModal: true,
  title: 'Document 2, relu', frSub: `${C210_DOSSIER_TITLE}`,
  text: `${DOC2_TEXT}\n\nTu as déjà lu ce document à la leçon 10 du C2. Cette fois, dis seulement ce qu’il affirme ET ce qu’aucun chiffre ne mesure.`,
  questions: [
    { q: 'Que déplace, selon ce document, un bureau resté vide.', a: 'Son coût : la fréquentation de midi qui faisait vivre les commerces du centre-ville, et la transmission informelle des gestes du métier aux plus jeunes salariés.' },
    { q: 'Pourquoi ce coût est-il difficile à défendre dans une synthèse chiffrée.', a: 'Parce qu’il ne se mesure dans aucun tableau de productivité, ce qui ne l’empêche pas, selon le document, de coûter bien plus cher à terme.' },
  ],
  audio: REC('rec-c2-14-document-sociologue'), say: REFRAME, terms: ['pesertrancher'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a6-exemples', layer: 'core', title: 'Tenir un plan, trancher une source',
  examples: [
    { fr: C209_REFRAME, en: C209_REFRAME_EN, note: `${Cap(C209_REF)} : chaque balise tient tout le chemin, de la première minute à la dernière` },
    { fr: C210_REFRAME, en: C210_REFRAME_EN, note: `${Cap(C210_REF)} : peser les sources, puis trancher, dans la même phrase` },
    { fr: HIKER_QUESTION_FR, en: HIKER_QUESTION_EN, note: `${Cap(C209_REF)} : une interruption logistique, absorbée en une phrase, avant de reprendre le plan` },
  ],
  audio: AUDIO, say: REFRAME, terms: ['pesertrancher'],
};

const A6_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-groupe', layer: 'core', size: 'lg',
  title: 'Reprendre le plan, ou trancher la source ?', frSub: 'Deux endurances, un seul fil',
  groups: [
    grp('La reprise du plan', [
      it(E(2479)), it(E(2480)),
    ], chk('Après une question qui interrompt ton discours, tu...',
      ['redémarres ton explication depuis le début', 'réponds en une phrase, puis reprends le plan exactement où il en était'], 1,
      `${Cap(C209_REF)} : la reprise, jamais un redémarrage. EN: the resumption, never a restart.`)),
    grp('Trancher dans la même phrase', [
      it(E(2481)), it(E(2482)),
    ], chk('Résumer trois sources côte à côte, puis donner son avis à part, est...',
      ['la bonne méthode', 'le piège des deux moitiés séparées, que la leçon 10 du C2 corrige'], 1,
      `${Cap(C210_REF)} : peser et trancher, dans la même phrase. EN: weigh and decide, in the same sentence.`)),
    ctl('Trois sources qui ne s’opposent pas sur le principe', 'Quand trois documents s’opposent sur ce qui compte, pas sur le principe, ton plan doit...',
      ['être un simple pour-contre', 'refuser le pour-contre et nommer ce que chaque source mesure'], 1,
      `${Cap(C210_REF)} : un plan que le simple pour-contre ne peut pas tenir. EN: a plan a simple for-against split cannot hold.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['pesertrancher'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Deux endurances', 'Tenir un discours long et trancher une synthèse par écrit partagent...', ['rien en commun', 'ne jamais lâcher le fil, du premier mot au dernier'], 1,
    'Une seule endurance, deux formes. EN: one endurance, two forms.'),
  ctl('La fausse économie', 'Peser trois sources puis donner son avis dans une phrase séparée, à la fin, est...', ['la bonne méthode de la leçon 10 du C2', 'le défaut que cette leçon corrige : citer et trancher dans la même phrase'], 1,
    'La fusion se fait phrase par phrase, jamais en deux blocs séparés. EN: the fusion happens sentence by sentence, never in two separate blocks.'),
], ['pesertrancher']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Tenir un discours, trancher par écrit',
    opener: {
      line: 'Un randonneur qui veut déjà rentrer, trois sources qui se contredisent sans s’opposer : deux fils à tenir jusqu’au bout. EN: A hiker already wanting to turn back, three sources that disagree without opposing each other: two threads to hold to the end.',
      imageRef: 'lessons/c2-14-bilan-maitrise/act06.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais, derrière un discours tenu et une synthèse tranchée, la même endurance : ne jamais lâcher le fil. EN: You recognise, behind a sustained discourse and a decided synthesis, the same endurance: never dropping the thread.',
    estScreens: 13, restPoints: ['a6-lecture'],
  },
  sections: [A6_LECTURE, A6_EXEMPLES, A6_GROUPE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LE PIÈGE DU BILAN
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a7-lecture', layer: 'core', questionsInModal: true,
  title: 'Le dossier de Noor', frSub: 'Trois réussites, une absence',
  text: `${src(E(2484)).fr}\n\nOdile relit le dossier de Noor une seconde fois, en cherchant ce qu’elle n’a pas encore vérifié.`,
  questions: [
    { q: 'Quelle unité du C2 Noor a-t-elle, à première vue, pleinement réussie.', a: 'Trois sur quatre : la lecture fine (unité 3), la synthèse tranchée (unité 3) et le registre tenu (unité 1). Aucun procédé n’est jamais nommé : l’unité 1, à moitié, et l’unité 2 restent silencieuses.' },
    { q: 'Pourquoi trois réussites ne suffisent-elles pas.', a: 'Parce qu’un bilan de maîtrise se juge comme un texte à la leçon 13 du C2 : une seule compétence manquante suffit à rendre le dossier incomplet, même si tout le reste est excellent.' },
  ],
  audio: REC('rec-c2-14-dossier-noor'), say: REFRAME, terms: ['competenceCachee'],
};

const A7_TRAP_CARDS: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a7-trap', layer: 'core', sheetId: 'sheet-bilan',
  title: 'Une compétence peut en cacher une autre',
  rule: {
    title: 'Le piège, raised one level',
    body: `${Cap(C213_REF)} : une correction peut en cacher une autre. Ici, une compétence entière peut en cacher une autre. EN: lesson 13 of C2: one correction can hide another. Here, a whole skill can hide another.`,
  },
  cards: [
    { promptLabel: 'Dossier A', promptSound: 'lecture, synthèse et registre réussis, aucun procédé nommé',
      fr: src(E(2489)).fr, ipa: '/œ̃ dɔsje ki ʁeysi a tʁwa katʁ ɛ ɛ̃kɔ̃plɛ/', tip: `${Cap(C213_REF)} : relis contre les quatre unités, même ce qui semble déjà réussi.` },
    { promptLabel: 'Dossier B', promptSound: 'un procédé nommé, un plan jamais annoncé à voix haute',
      fr: src(E(2503)).fr, ipa: '/ʒə kɔmɑ̃s a ekʁiʁ sɑ̃ zavwaʁ nɔme mɔ̃ plɑ̃/', tip: 'Un plan non nommé se perd souvent en cours de route, même quand chaque brique est bonne.' },
    { promptLabel: 'Dossier C', promptSound: 'une réserve citée, sans jamais dire ce qu’on en pense',
      fr: src(E(2507)).fr, ipa: '/ʒə site la ʁezɛʁv sɑ̃ ʒamɛ diʁ sə kɑ̃ pɑ̃s/', tip: 'Citer une réserve sans trancher dessus est la moitié du geste de la leçon 10 du C2, jamais le geste entier.' },
  ],
  drill: [
    { promptSay: src(F213.piege).fr, opts: ['une correction qui en cache une autre, la leçon 13 du C2', 'une compétence qui en cache une autre, ce bilan'], correct: 1 },
    { promptSay: src(E(2490)).fr, opts: ['ce dossier est complet', 'ce dossier n’est complet qu’à trois quarts'], correct: 1 },
  ],
  audio: AUDIO, say: REFRAME, terms: ['competenceCachee'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Trois réussites sur quatre', 'Réussir trois compétences sur quatre dans un même dossier...', ['garantit la quatrième', 'ne garantit jamais la quatrième'], 1,
    `${Cap(C213_REF)}, raised one level : une compétence peut en cacher une autre. EN: lesson 13 of C2, raised one level: a skill can hide another.`),
  ctl('Comment vérifier un bilan', 'La seule façon de savoir qu’un bilan est complet est de...', ['se relire une fois, globalement', 'le relire contre les quatre unités, une par une, même ce qui semble déjà réussi'], 1,
    'Même méthode que la leçon 13 du C2, à l’échelle du dossier entier. EN: the same method as lesson 13 of C2, at the scale of the whole portfolio.'),
], ['competenceCachee']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Le piège du bilan',
    opener: {
      line: 'Noor a rendu un dossier presque parfait : à toi de trouver ce qu’il ne dit jamais. EN: Noor submitted a nearly perfect portfolio: find what it never says.',
      imageRef: 'lessons/c2-14-bilan-maitrise/act07.jpg',
    },
    sections: [],
    milestone: 'Tu sais qu’une réponse peut réussir trois compétences sur quatre, et tu sais comment vérifier la quatrième avant de rendre la tienne. EN: You know an answer can succeed at three skills out of four, and you know how to check the fourth before submitting your own.',
    estScreens: 12, restPoints: ['a7-trap'],
  },
  sections: [A7_LECTURE, A7_TRAP_CARDS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — TON BILAN DE MAÎTRISE
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_MODELE: Sec<'reading'> = {
  type: 'reading', id: 'a8-modele', layer: 'core', questionsInModal: true,
  title: 'Le passage de ton bilan', frSub: TASK_SOURCE_NOTE,
  text: `${C212_EXTRACT_PARAGRAPH}\n\n${TASK_SOURCE_NOTE}`,
  glossary: [
    { word: 'redistribution', en: 'redistribution', note: 'Le fait de répartir autrement une même quantité, sans qu’elle change de taille. EN: sharing the same quantity out differently, without it changing size.' },
  ],
  questions: [
    { q: 'Quelle affirmation ce passage avance-t-il, une fois sa réserve initiale écartée.', a: 'Que la fragmentation des supports de lecture ne devrait pas être lue automatiquement comme un appauvrissement, mais pourrait être une simple redistribution de l’attention disponible.' },
    { q: 'Quelle hypothèse ce passage cite-t-il, et de qui.', a: 'L’hypothèse d’une « attention polymorphe », attribuée à Delmas (2020), capable de se répartir entre plusieurs tâches sans que chacune en soit amoindrie.' },
    { q: 'Ce passage tranche-t-il la question qu’il pose.', a: 'Non : il reconnaît que l’hypothèse laisse entière la question plus étroite de l’endurance attentionnelle sur la durée propre à la lecture longue.' },
  ],
  audio: REC('rec-c2-14-passage-bilan'), say: REFRAME, terms: ['armatureSignal', 'competenceCachee'],
};

const A8_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a8-plan', layer: 'core', sheetId: 'sheet-bilan',
  title: 'Cinq passes pour ton bilan',
  steps: [
    '1. Trouve l’armature de la phrase centrale, puis pèse ce que sa réserve empilée change à l’affirmation. EN: find the central sentence’s backbone, then weigh what its stacked hedge changes about the claim.',
    '2. Nomme la relation que le passage affirme, puis ta propre position face à elle, dans la même phrase qui tranche. EN: name the relation the passage asserts, then your own position against it, in the same sentence that decides.',
    '3. Nomme un procédé précis (une métaphore, une citation, une reformulation), jamais un mot vague. EN: name a precise device (a metaphor, a citation, a reframing), never a vague word.',
    '4. Tiens un registre soutenu du début à la fin de ta réponse, sans une seule aparté familière. EN: hold a soutenu register from start to end of your response, without a single familiar aside.',
    '5. Relis ta réponse contre les quatre questions de la leçon 13 du C2, même sur ce que tu crois déjà réussi. EN: reread your response against lesson 13 of C2’s four questions, even on what you already believe succeeds.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['competenceCachee'],
};

const A8_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a8-scenario', layer: 'core', title: 'Odile demande ton plan, à voix haute',
  setting: 'Avant d’écrire ta version officielle, Odile te demande de nommer ton plan en cinq phrases, à voix haute.',
  turns: [
    {
      ai: src(E(2500)).fr, en: src(E(2500)).en,
      user: src(E(2501)).fr, userEn: 'First the sentence’s backbone, then the relation it asserts and my position, then the device I name, then the register I hold, then the reread against the four questions.',
      alts: [
        { fr: 'Je commence par l’armature, puis je pèse la réserve, puis je nomme ma position, le procédé, le registre, et je relis.', en: 'I start with the backbone, then I weigh the hedge, then I name my position, the device, the register, and I reread.' },
        { fr: 'Armature d’abord, puis position face à l’hypothèse citée, puis un procédé nommé, un registre tenu, et une dernière relecture.', en: 'Backbone first, then a position against the cited hypothesis, then a named device, a held register, and one last reread.' },
      ],
    },
    {
      ai: src(E(2502)).fr, en: src(E(2502)).en,
      user: 'Oui : les quatre unités, jamais une seule, même si l’ordre dans lequel je les nomme ne compte pas.', userEn: 'Yes: all four units, never just one, even though the order I name them in does not matter.',
      alts: [
        { fr: 'Oui, et si j’en oublie une à l’oral, je la rajoute avant d’écrire, jamais après.', en: 'Yes, and if I forget one out loud, I add it before writing, never after.' },
        { fr: 'Oui, les quatre comptent également ; aucune n’est un bonus facultatif.', en: 'Yes, all four count equally; none is an optional bonus.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['competenceCachee'],
};

/** THE GRADED CAPSTONE TASK. Fuses all thirteen C2 skills into one response:
 *  c2.12 (dense reading), c2.10 (synthesis and position), c2.02/c2.03
 *  (naming a precise device), c2.09/c2.08/c2.01 (a sustained, precise,
 *  soutenu response), c2.13 (self-edited before submission). The source
 *  text is c2.12's own EXTRACT_PARAGRAPH, reused verbatim (corpus §B). */
const A8_MISSION: Sec<'task'> = {
  type: 'task', id: 'a8-mission', title: 'Ton bilan de maîtrise', frSub: 'Mission écrite', sheetId: 'sheet-bilan',
  brief: `Odile te remet le passage que tu as déjà lu à la leçon 12 du C2, et te demande ta réponse pour ton dossier final. ${C212_EXTRACT_PARAGRAPH} ${TASK_SOURCE_NOTE}`,
  briefEn: 'Odile hands you the passage you already read in lesson 12 of C2, and asks for your response for your final portfolio. The passage is printed above so you can write with it in front of you.',
  produce: 'Écris une réponse soutenue de ce passage : trouve son armature et pèse sa réserve empilée (la leçon 12 du C2), nomme la relation qu’il affirme et prends position face à elle dans la même phrase qui tranche (la leçon 10 du C2), nomme un procédé précis qu’il emploie, jamais un mot vague (la leçon 2 ou la leçon 3 du C2), tiens un registre soutenu constant du début à la fin (la leçon 1 du C2), puis relis-toi contre les quatre questions de la leçon 13 du C2 avant de rendre ta réponse.',
  responseSpec: { kind: 'text', minWords: 180, maxWords: 320 },
  rubric: {
    criteria: [
      { key: 'lecture-synthese', label: 'L’armature trouvée, la réserve pesée, une position tranchée', maxPoints: 5, descriptors: [
        '5 : L’armature de la phrase centrale est identifiée, la réserve empilée est pesée avec exactitude, et une position personnelle tranche clairement face à l’hypothèse citée.',
        '4 : L’armature et la réserve sont correctement identifiées, mais la position reste un peu timide ou tardive.',
        '3 : L’armature est trouvée, mais la réserve est ignorée ou la position manque.',
        '2 : La réponse résume le passage sans jamais en isoler l’armature.',
        '1 : La réponse ne distingue pas ce que le passage affirme de ce qu’il nuance.',
      ] },
      { key: 'procede', label: 'Un procédé précis, nommé', maxPoints: 5, descriptors: [
        '5 : Un procédé précis (par exemple la métaphore de « l’attention polymorphe », ou la citation nommée de Delmas) est nommé et son effet est expliqué en une phrase.',
        '4 : Un procédé est nommé, mais son effet n’est pas expliqué.',
        '3 : Un mot vague (« une figure », « un effet de style ») remplace un nom précis.',
        '2 : Aucun procédé n’est nommé, bien que la réponse en mentionne un sans le nommer.',
        '1 : La réponse ne mentionne aucun procédé, nommé ou non.',
      ] },
      { key: 'registre', label: 'Un registre soutenu, constant', maxPoints: 5, descriptors: [
        '5 : Le registre reste soutenu et constant, du début à la fin, sans une seule aparté familière.',
        '4 : Une seule expression un peu trop décontractée apparaît, sans rompre le ton d’ensemble.',
        '3 : Le registre glisse une fois, de façon visible, vers le familier ou vers un jargon excessif.',
        '2 : Le registre glisse à plusieurs reprises.',
        '1 : Le registre ne s’ajuste jamais au sujet traité.',
      ] },
      { key: 'revision', label: 'Une réponse relue, sans redondance ni référence dérivée', maxPoints: 5, descriptors: [
        '5 : Aucune idée n’est redite, chaque pronom renvoie à un nom clair, chaque connecteur tient sa promesse logique.',
        '4 : Un connecteur reste un peu imprécis, sans fausse promesse flagrante.',
        '3 : Une idée est redite une fois, sans que le fait qu’elle porte ne soit perdu.',
        '2 : Une référence reste ambiguë, ou une redondance claire n’est pas corrigée.',
        '1 : La réponse n’a visiblement reçu aucune relecture.',
      ] },
    ],
  },
  scaffold: [
    'L’armature de la phrase centrale est…',
    'La réserve qu’elle empile avant d’affirmer…',
    'L’hypothèse citée, attribuée à Delmas (2020), avance que…',
    'Je ne partage pas entièrement cette hypothèse, car…',
    'Ce passage emploie, pour cela, un procédé précis : …',
  ],
  modelAnswer: 'Le passage avance une affirmation nuancée par une réserve empilée : il admet, non sans quelque réserve, que la fragmentation des supports modifie la nature de l’attention, avant de refuser l’interprétation la plus répandue de ce fait, celle d’un appauvrissement. L’armature de la première phrase porte cette réserve avant son verbe principal, ce qui oblige à la lire deux fois pour en isoler l’affirmation réelle.\n\nLe passage cite ensuite, par son nom, une hypothèse attribuée à Delmas (2020), celle d’une « attention polymorphe » capable de se répartir entre plusieurs tâches sans qu’aucune en soit amoindrie. Ce syntagme fonctionne comme une métaphore qui reformule une fragilité en richesse : nommer l’attention « polymorphe » plutôt que « dispersée » déplace déjà le jugement porté sur elle, avant toute preuve.\n\nJe ne partage pas entièrement cette hypothèse. Qu’aucune tâche ne soit mesurablement amoindrie ne prouve pas qu’aucune ne le soit réellement : le passage lui-même reconnaît que la question de l’endurance attentionnelle, sur la durée propre à la lecture longue, reste entière. Une métaphore séduisante ne remplace jamais une mesure.\n\nCe passage illustre donc, en une seule phrase, les quatre unités de ce bilan : une armature qu’il faut d’abord trouver, un argument qu’il faut peser avant de trancher, une métaphore qu’il faut nommer, un registre qu’il faut tenir du début à la fin de cette réponse.',
  modelAnswerEn: 'The passage advances a claim qualified by a stacked hedge: it admits, not without some reservation, that the fragmentation of reading media changes the nature of attention, before rejecting the most common reading of that fact, that of an impoverishment. The first sentence’s backbone carries this hedge ahead of its main verb, which forces a second reading to isolate the real claim.\n\nThe passage then names, by citation, a hypothesis attributed to Delmas (2020), that of a "polymorphous attention" able to spread across several tasks without any one being diminished. This phrase works as a metaphor that reframes a fragility as a richness: naming attention "polymorphous" rather than "scattered" already shifts the judgment made of it, before any proof.\n\nI do not fully share this hypothesis. That no task is measurably diminished does not prove that none really is: the passage itself admits that the narrower question of attentional endurance, over the span proper to long reading, remains open. An appealing metaphor never replaces a measurement.\n\nThis passage therefore illustrates, in a single sentence, this capstone’s four units: a backbone that must first be found, an argument that must be weighed before being decided, a metaphor that must be named, a register that must be held from the start to the end of this very response.',
  watchFor: [
    { pattern: 'The reply paraphrases the whole passage without first isolating its backbone and its stacked hedge.', criterion: 'lecture-synthese', feedback: 'Trouve d’abord le sujet et le verbe principal, avant de résoudre la réserve qui les retarde, comme la leçon 12 du C2 l’a enseigné.', ref: 'a2-lecture' },
    { pattern: 'The reply only summarises the passage and never takes a personal position of its own.', criterion: 'lecture-synthese', feedback: 'Une synthèse qui ne tranche jamais n’est que la moitié du geste de la leçon 10 du C2.', ref: 'a6-exemples' },
    { pattern: 'The reply names the device only as "a figure of style" or "an effect" without a precise term.', criterion: 'procede', feedback: 'Nomme le procédé précisément : une métaphore, une reformulation, une citation nommée, jamais un mot vague.', ref: 'a3-table' },
    { pattern: 'The reply drops into a familiar aside or an unexplained anglicism partway through.', criterion: 'registre', feedback: 'Le registre doit rester soutenu et constant, du début à la fin, comme la leçon 13 du C2 l’exige sur un texte entier.', ref: 'a8-plan' },
    { pattern: 'The reply contains an unrepaired redundancy, a dangling reference, or a connector that does not deliver its promised relation.', criterion: 'revision', feedback: 'Relis ta réponse contre les quatre questions de la leçon 13 du C2, même sur les phrases que tu crois déjà réussies.', ref: 'a7-check' },
    { pattern: 'The reply misattributes the "attention polymorphe" hypothesis to the passage’s own settled conclusion rather than to a cited, still-open hypothesis.', criterion: 'lecture-synthese', feedback: 'Le passage cite cette hypothèse sans la trancher lui-même ; c’est à ta réponse de le faire.', ref: 'a8-modele' },
  ],
  graderNotes: [
    'Word count: 180 to 320, with 10% tolerance (162 to 352) before length costs points.',
    'The task marks the fusion of all four units together, never a single predecessor skill in isolation.',
    'Accept any precise device name for the central metaphor (métaphore, euphémisme, reformulation, antiphrase), not only "métaphore" itself.',
    'A candidate may defend EITHER side of the hypothesis (agree or disagree with "attention polymorphe"); only the presence and clarity of a real decision is graded, never its direction.',
    'Feedback language: unsimplified C2 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['armatureSignal', 'competenceCachee'],
};

const A8_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a8-parler', layer: 'core', title: 'Nomme ton plan à voix haute, une dernière fois', skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash') && ROWS_BY_ACT[7].includes(r)).map((r) => r.id),
  audio: AUDIO, say: REFRAME, terms: ['competenceCachee'],
};

const A8_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a8-cheat', layer: 'core', sheetId: 'sheet-bilan',
  title: 'Les quatre unités, un geste chacune',
  rows: [
    { k: UNIT1_TITLE, v: 'le curseur du mot exact, les quatre fils d’une œuvre entière', say: C201_REFRAME,
      detail: { title: `${C201_REF} et ${C202_REF}`, body: `${C201_REFRAME} ${C202_REFRAME} EN: a word’s dial, a work’s four threads.`, say: C202_REFRAME } },
    { k: UNIT2_TITLE, v: 'une pierre ancienne, une porte, une traversée, le direct', say: C206_REFRAME,
      detail: { title: `${C205_REF}, ${C206_REF}, ${C207_REF}, ${C208_REF}`, body: `${C206_REFRAME} ${C207_REFRAME} EN: a door, a crossing.`, say: C207_REFRAME } },
    { k: UNIT3_TITLE, v: 'un sentier, peser puis trancher, un signal, une phrase dépliée', say: C210_REFRAME,
      detail: { title: `${C209_REF}, ${C210_REF}, ${C211_REF}, ${C212_REF}`, body: `${C210_REFRAME} ${C212_REFRAME} EN: weigh then decide, unfold a sentence.`, say: C212_REFRAME } },
    { k: UNIT4_TITLE, v: 'le fil repris, jusqu’à ce qu’il tienne', say: C213_REFRAME,
      detail: { title: C213_REF, body: `${C213_REFRAME} EN: the thread picked back up.`, say: C213_REFRAME } },
    { k: 'le piège de ce bilan', v: 'une compétence peut en cacher une autre', say: src(E(2486)).fr,
      detail: { title: 'Trois réussites ne garantissent pas la quatrième', body: 'Relis contre les quatre unités, une par une, même ce qui semble déjà réussi. EN: reread against all four units, one by one, even what already seems to succeed.', say: src(E(2488)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['unites', 'competenceCachee'],
};

const A8_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a8-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu tiens maintenant les treize compétences du C2 dans une seule main : lire sous contrainte, choisir le mot exact, médier, traduire, improviser, discourir, trancher, et te relire. Le seul piège qui reste est celui de l’acte 7 : réussir trois unités sur quatre et croire le dossier complet. EN: You now hold C2’s thirteen skills in one hand: reading under constraint, choosing the exact word, mediating, translating, improvising, sustaining discourse, deciding, and rereading yourself. The only trap left is act 7’s: succeeding at three units out of four and believing the portfolio complete.',
  stats: [
    { k: 'Les quatre unités', v: `${UNIT1_TITLE}, ${UNIT2_TITLE}, ${UNIT3_TITLE}, ${UNIT4_TITLE}` },
    { k: 'Les treize leçons', v: 'aucune nouvelle ; toutes recombinées' },
    { k: 'Le piège évité', v: 'une compétence réussie peut en cacher une autre' },
    { k: 'Ce qui ne change jamais', v: 'le sens du passage que tu lis' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ────────────────────────────────────────────────────────────── */

type QQ = QuizQuestion;
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Cette réponse de candidate oublie une unité. Nomme-la. EN: this candidate’s answer forgets one unit; name it.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A8_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a8-quiz', layer: 'core', title: 'Le bilan', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-dossier', label: 'Le dossier de maîtrise', targets: ['dossier-fragmente'],
      questions: [
        mc('Ce bilan teste...', ['une quatorzième compétence', 'si les treize compétences déjà acquises savent jouer ensemble', 'uniquement la grammaire du C2'], 1, 'Le C2 n’ajoute rien de nouveau. EN: C2 adds nothing new.', 'a1-check'),
        mc('Les quatre unités du C2 sont...', ['précision et style, mots et médiation, discours et analyse, révision et maîtrise', 'lecture, écriture, oral, grammaire', 'vocabulaire, phonétique, culture, examen'], 0, 'Aucune unité de grammaire : rien de nouveau au C2. EN: no grammar unit: nothing new at C2.', 'a1-units'),
        mc('Un dossier fragmenté est un dossier où...', ['chaque fiche est fausse', 'chaque fiche est bonne, mais aucune ne répond à une autre', 'chaque fiche répète la même leçon deux fois'], 1, 'Le problème exact d’Odile. EN: Odile’s exact problem.', 'a1-scene'),
        tI('Complète. Un mot.', 'Treize instruments accordés séparément ; le bilan est la ... où ils jouent enfin ensemble.', 'pièce', 'C’est la métaphore de la leçon. EN: the lesson’s metaphor.', 'a1-scene'),
        mc('La leçon 3 du C2 appartient à quelle unité.', [UNIT1_TITLE, UNIT3_TITLE, UNIT2_TITLE], 0, 'Les expressions imagées sont dans la première unité. EN: idioms sit in the first unit.', 'a1-map'),
      ],
    },
    {
      id: 'r2-lire-entendre', label: 'Lire et entendre, sous contrainte', targets: ['densite-ignoree'],
      questions: [
        mc('Comprendre chaque mot d’une phrase dense suffit-il à l’avoir comprise.', ['oui', 'non, tant que l’armature n’est pas trouvée', 'seulement si la phrase est courte'], 1, 'La leçon 12 du C2 : l’armature avant tout. EN: lesson 12 of C2: the backbone first.', 'a2-lecture'),
        mc('La leçon 11 et la leçon 12 du C2 sont toutes les deux des leçons de...', ['production', 'reconnaissance', 'traduction'], 1, 'Spot, map, understand : jamais produire. EN: spot, map, understand: never produce.', 'a2-exemples'),
        mc('« Cherche le signal, même dans le bruit » cite...', [C211_REF, C212_REF, C213_REF], 0, 'La leçon 11 du C2, exactement. EN: lesson 11 of C2, exactly.', 'a2-groupe'),
        tI('Complète. Un mot.', 'Dans une phrase dense, tu cherches en premier le sujet et le verbe ... .', 'principal', 'L’armature de la phrase. EN: the sentence’s backbone.', 'a2-lecture'),
        eS('Je comprends chaque mot, donc j’ai compris la phrase entière.', 'Je repère d’abord l’armature de la phrase, avant de juger si elle est comprise.', 'Comprendre chaque mot ne suffit pas sans l’armature. EN: understanding every word is not enough without the backbone.', 'a2-groupe'),
      ],
    },
    {
      id: 'r3-mots', label: 'Les mots, le registre, l’origine', targets: ['mot-mal-juge'],
      questions: [
        mc('Un mot savant, une expression imagée et un mot d’argot cité se jugent...', ['tous pareil', 'chacun différemment : registre, usage littéraire, histoire', 'seulement par leur longueur'], 1, 'Trois terrains qui ne se recoupent jamais. EN: three grounds that never overlap.', 'a3-table'),
        mc('Citer un mot d’argot dans ton analyse t’autorise à...', ['l’employer toi-même', 'le nommer, sans jamais l’employer', 'le traduire en anglais'], 1, 'Citer n’est jamais adopter. EN: quoting is never adopting.', 'a3-groupe'),
        mc('Décomposer « photophobe » en ses racines relève de...', [C205_REF, C204_REF, C203_REF], 0, 'L’étymologie, la leçon 5 du C2. EN: etymology, lesson 5 of C2.', 'a3-deck'),
        tI('Complète. Un mot.', 'Un portrait soutenu ne cite jamais deux expressions imagées dans la même ... .', 'phrase', 'Une seule expression par idée. EN: one idiom per idea.', 'a3-deck'),
        eS('J’emploie ce mot d’argot moi-même, puisque le texte que j’analyse l’emploie déjà.', 'Je nomme ce mot d’argot, sans jamais l’employer moi-même.', 'Le piège exact de la leçon 4 du C2. EN: lesson 4 of C2’s exact trap.', 'a3-groupe'),
      ],
    },
    {
      id: 'r4-nuance', label: 'La nuance et la lecture intégrale', targets: ['lecture-partielle'],
      questions: [
        mc('Lire l’implicite et lire une œuvre intégralement demandent...', ['deux réflexes sans rapport', 'le même réflexe, à une échelle différente', 'uniquement un réflexe grammatical'], 1, 'Un curseur, ou plusieurs curseurs ensemble. EN: one dial, or several dials together.', 'a4-check'),
        mc('« Comme d’habitude », dans le courriel de Camille, présuppose que ce retard...', ['est une première fois', 's’est déjà produit plusieurs fois', 'n’a jamais eu lieu'], 1, 'La leçon 1 du C2 : la présupposition. EN: lesson 1 of C2: presupposition.', 'a4-lecture'),
        mc('Nommer un seul procédé dans un texte et s’arrêter là est...', ['suffisant', 'le piège que la leçon 2 du C2 corrige', 'interdit par la leçon 1 du C2'], 1, 'Les quatre fils, tenus ensemble. EN: the four threads, held together.', 'a4-groupe'),
        tI('Complète. Un mot.', 'Chaque mot a un ... : où tu le places dit autant que ce qu’il signifie.', 'curseur', 'La métaphore de la leçon 1 du C2. EN: lesson 1 of C2’s metaphor.', 'a4-exemples'),
        eS('Ce texte emploie un mot ironique ; je réponds avec un mot encore plus fort.', 'Ce texte emploie un mot ironique ; je réponds avec un mot du même registre.', 'Ni plus fort, ni plus faible : le même registre. EN: neither stronger nor weaker: the same register.', 'a4-groupe'),
      ],
    },
    {
      id: 'r5-mediation', label: 'Médier, traduire, improviser', targets: ['fausse-simplification-ou-abandon'],
      questions: [
        mc('Médier, traduire un poème et improviser à l’oral partagent...', ['rien', 'ne jamais perdre ce que le texte ou l’échange porte', 'le même vocabulaire technique'], 1, 'Trois portes, un même sens. EN: three doors, one meaning.', 'a5-check'),
        mc('Traduire un poème accepte de...', ['garder tout, comme en prose', 'perdre un peu de sens pour garder le ton', 'ignorer le ton d’origine'], 1, 'La traversée, jamais tout le bagage. EN: the crossing, never all the luggage.', 'a5-deck'),
        mc('Simplifier le vocabulaire d’un rapport en gardant sa phrase complexe intacte est...', ['une bonne médiation', 'une fausse simplification', 'une traduction poétique'], 1, 'Le piège central de la leçon 6 du C2. EN: lesson 6 of C2’s central trap.', 'a5-groupe'),
        tI('Complète. Un mot.', 'Le sens ne rétrécit jamais ; seule la ... par laquelle il passe change de taille.', 'porte', 'La métaphore de la leçon 6 du C2. EN: lesson 6 of C2’s metaphor.', 'a5-usages'),
        eS('Je réponds à la question en direct sans jamais revenir à mon idée de départ.', 'Je réponds à la question et je reviens, en une phrase, à l’idée dont j’étais parti.', 'Avance, répare, et arrive quelque part. EN: move forward, repair, and arrive somewhere.', 'a5-groupe'),
      ],
    },
    {
      id: 'r6-discours', label: 'Tenir un discours, trancher par écrit', targets: ['redemarrage-ou-deux-moities'],
      questions: [
        mc('Après une interruption, tu...', ['redémarres depuis le début', 'réponds en une phrase, puis reprends le plan exactement où il en était', 'abandonnes ton plan initial'], 1, 'La reprise, jamais un redémarrage. EN: the resumption, never a restart.', 'a6-groupe'),
        mc('Peser trois sources puis donner son avis à part, à la fin, est...', ['la bonne méthode', 'le défaut que la leçon 10 du C2 corrige', 'une méthode réservée à l’oral'], 1, 'Peser et trancher, dans la même phrase. EN: weigh and decide, in the same sentence.', 'a6-groupe'),
        mc('Trois documents qui s’opposent sur ce qui compte, pas sur le principe, demandent...', ['un simple pour-contre', 'un plan que le pour-contre ne peut pas tenir', 'de n’en choisir qu’un seul'], 1, 'La leçon 10 du C2, au-delà du pour-contre. EN: lesson 10 of C2, past for-against.', 'a6-lecture'),
        tI('Complète. Un mot.', 'Peser les sources, puis ... , dans la même phrase.', 'trancher', 'La métaphore de la leçon 10 du C2. EN: lesson 10 of C2’s metaphor.', 'a6-exemples'),
        eS('Je résume les trois sources côte à côte, puis je donne mon avis dans une phrase séparée.', 'Je pèse et je tranche dans la même phrase, source après source.', 'Le piège des deux moitiés séparées. EN: the two-separate-halves trap.', 'a6-groupe'),
      ],
    },
    {
      id: 'r7-piege', label: 'Le piège du bilan', targets: ['trois-sur-quatre'],
      questions: [
        mc('Réussir trois compétences sur quatre dans un dossier...', ['garantit la quatrième', 'ne garantit jamais la quatrième', 'rend la quatrième inutile'], 1, 'Une compétence peut en cacher une autre. EN: a skill can hide another.', 'a7-check'),
        mc('Le dossier de Noor réussit la lecture, la synthèse et le registre ; que lui manque-t-il.', ['nommer un procédé précis', 'rien, il est complet', 'tenir un registre soutenu'], 0, 'Un procédé jamais nommé, l’unité silencieuse. EN: a device never named, the silent unit.', 'a7-lecture'),
        mc('La seule façon de savoir qu’un bilan est complet est de...', ['se relire une fois, globalement', 'le relire contre les quatre unités, une par une', 'le faire relire par quelqu’un d’autre'], 1, 'Même méthode que la leçon 13 du C2, à l’échelle du dossier. EN: the same method as lesson 13 of C2, at portfolio scale.', 'a7-check'),
        tI('Complète. Un mot.', 'Une correction peut en cacher une autre ; une ... peut en cacher une autre.', 'compétence', 'Le piège de ce bilan, raised one level. EN: this capstone’s trap, raised one level.', 'a7-trap'),
        eS('Puisque ma lecture et ma synthèse sont solides, mon dossier est complet.', 'Ma lecture et ma synthèse sont solides, mais je vérifie encore si j’ai nommé un procédé et tenu mon registre.', 'Trois réussites ne garantissent jamais la quatrième. EN: three successes never guarantee the fourth.', 'a7-trap'),
      ],
    },
    {
      id: 'r8-mission', label: 'Ton bilan de maîtrise', targets: ['unite-oubliee'],
      questions: [
        mc('Le passage de ta mission cite une hypothèse attribuée à...', ['Delmas (2020)', 'Noguès (2021)', 'Verrier (2023)'], 0, 'Delmas, 2020 : l’attention polymorphe. EN: Delmas, 2020: polymorphous attention.', 'a8-modele'),
        mc('Ce passage tranche-t-il la question qu’il pose.', ['oui, entièrement', 'non, il laisse la question de l’endurance attentionnelle ouverte', 'il la tranche à moitié seulement'], 1, 'La réserve finale du passage. EN: the passage’s closing hedge.', 'a8-modele'),
        mc('La mission écrite demande de...', ['résumer le passage en une phrase', 'fusionner lecture, position, procédé nommé et registre tenu, puis se relire', 'traduire le passage en anglais'], 1, 'Les quatre unités, jamais une seule. EN: all four units, never just one.', 'a8-mission'),
        tI('Complète. Un mot.', 'Avant de rendre ta réponse, relis-la contre les quatre ... de la leçon 13 du C2.', 'questions', 'Registre, redondance, référence, transition. EN: register, redundancy, reference, transition.', 'a8-plan'),
        eS('Une bonne réponse peut nommer « une figure de style » sans autre précision.', 'Une bonne réponse nomme un procédé précis, par exemple une métaphore ou une citation nommée.', 'Le critère « procédé » juge la précision du nom, jamais seulement sa présence. EN: the "device" criterion judges how precise the name is, never just its presence.', 'a8-mission'),
        lC('Écoute. Cette phrase vient-elle du passage dense, ou décrit-elle une bonne méthode de bilan.', src(E(2502)).fr, ['elle décrit une bonne méthode', 'elle vient du passage dense', 'elle cite Delmas (2020)'], 0, 'Elle parle du plan d’un bilan, pas de l’attention polymorphe. EN: it talks about a capstone’s plan, not polymorphous attention.', 'a8-scenario'),
      ],
    },
  ],
};

/** Rotate each quiz question's options together with its `correct` index so
 *  no slot takes more than its share. Changes no text, as every C2 lesson's
 *  own `spreadSlots` does. */
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
  type: 'reviewDeck', id: 'a8-review', layer: 'core', title: 'Treize leçons, une dernière fois',
  cards: [
    { front: 'a word’s dial', back: Cap(C201_REF), say: C201_REFRAME },
    { front: 'a work’s four threads', back: Cap(C202_REF), say: C202_REFRAME },
    { front: 'an idiom’s register', back: Cap(C203_REF), say: C203_REFRAME },
    { front: 'slang’s quoted costume', back: Cap(C204_REF), say: C204_REFRAME },
    { front: 'a word’s ancient stone', back: Cap(C205_REF), say: C205_REFRAME },
    { front: 'the door that changes size', back: Cap(C206_REF), say: C206_REFRAME },
    { front: 'the crossing', back: Cap(C207_REF), say: C207_REFRAME },
    { front: 'live, without a net', back: Cap(C208_REF), say: C208_REFRAME },
    { front: 'the trail that never shortens', back: Cap(C209_REF), say: C209_REFRAME },
    { front: 'weigh, then decide', back: Cap(C210_REF), say: C210_REFRAME },
    { front: 'the signal in the noise', back: Cap(C211_REF), say: C211_REFRAME },
    { front: 'unfolding a sentence', back: Cap(C212_REF), say: C212_REFRAME },
    { front: 'the thread picked back up', back: Cap(C213_REF), say: C213_REFRAME },
  ],
  audio: AUDIO, say: REFRAME,
};

const A8_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a8-roundup', layer: 'core', title: 'Bilan de maîtrise, en résumé',
  body: `${REFRAME} Tu as tenu, dans une seule réponse, les treize leçons du C2 : lire sous contrainte (${C211_REF}, ${C212_REF}), choisir le mot exact et lire intégralement (${C201_REF}, ${C202_REF}), juger un mot par son registre, son usage littéraire et son histoire (${C203_REF}, ${C204_REF}, ${C205_REF}), médier, traduire et improviser (${C206_REF}, ${C207_REF}, ${C208_REF}), tenir un discours et trancher une synthèse (${C209_REF}, ${C210_REF}), puis te relire contre les quatre questions (${C213_REF}). EN: You have held, in a single response, C2’s thirteen lessons: reading under constraint, choosing the exact word and reading whole texts, judging a word by register, literary use and history, mediating, translating and improvising, sustaining discourse and deciding a synthesis, then rereading yourself against four questions.`,
  points: [
    'Un bilan de maîtrise ne teste aucune compétence nouvelle : il recombine les treize déjà acquises.',
    'Lire sous contrainte de temps et écouter sous contrainte de bruit sont deux moitiés de la même compétence de reconnaissance.',
    'Un mot se juge par trois critères qui ne se recoupent jamais : son registre, son usage littéraire, son histoire.',
    'La précision d’un seul mot et la lecture intégrale d’un texte entier demandent le même réflexe, à une échelle différente.',
    'Médier, traduire et improviser partagent une seule exigence : ne jamais perdre ce que le texte ou l’échange porte.',
    'Tenir un discours long et trancher une synthèse par écrit sont deux formes d’une seule endurance : ne jamais lâcher le fil.',
    'Trois compétences réussies sur quatre, dans un même dossier, ne garantissent jamais la quatrième.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['dossier', 'unites'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-dossier', title: 'Une seule voix, jamais treize', format: 'mcq' as const, coach: 'Rappelle-toi : le bilan demande une seule réponse, pas treize fiches séparées. EN: the capstone asks for one answer, not thirteen separate sheets.', q: 'Le dossier de maîtrise doit se lire comme...', opts: ['treize fiches séparées', 'une seule voix'], correct: 1, why: 'Treize instruments, une seule pièce. EN: thirteen instruments, one piece.', items: [E(2403), E(2409)], audio: AUDIO },
  { id: 'd-densite', title: 'L’armature avant tout', format: 'mcq' as const, coach: 'Vérifie le sujet et le verbe principal avant de résoudre une seule subordonnée. EN: check the subject and main verb before resolving a single subordinate clause.', q: 'Comprendre chaque mot d’une phrase dense suffit-il.', opts: ['oui', 'non, sans l’armature'], correct: 1, why: 'La leçon 12 du C2. EN: lesson 12 of C2.', items: [E(2420), E(2421), E(2425)], audio: AUDIO },
  { id: 'd-mot', title: 'Registre, littérature, ou histoire', format: 'sort' as const, coach: 'Classe ce mot selon le bon critère. EN: sort this word by the right criterion.', buckets: ['son registre', 'son usage littéraire cité', 'son histoire'], items: [E(2431), E(2432), E(2434)], audio: AUDIO },
  { id: 'd-nuance', title: 'Un mot, puis tout un texte', format: 'mcq' as const, coach: 'Vérifie si tu lis un seul curseur ou plusieurs fils tenus ensemble. EN: check whether you are reading one dial or several threads held together.', q: 'Nommer un seul procédé et s’arrêter là est...', opts: ['suffisant', 'le piège de la leçon 2 du C2'], correct: 1, why: 'Les quatre fils, ensemble. EN: the four threads, together.', items: [E(2453), E(2451)], audio: AUDIO },
  { id: 'd-mediation', title: 'La porte, jamais le fait', format: 'mcq' as const, coach: 'Vérifie que le fait reste intact, même si la porte change de taille. EN: check the fact stays intact, even if the door changes size.', q: 'Simplifier le vocabulaire en gardant la phrase complexe intacte est...', opts: ['une bonne médiation', 'une fausse simplification'], correct: 1, why: 'Le piège central de la leçon 6 du C2. EN: lesson 6 of C2’s central trap.', items: [E(2464), E(2465)], audio: AUDIO },
  { id: 'd-discours', title: 'Peser puis trancher, jamais deux moitiés', format: 'mcq' as const, coach: 'Vérifie que la décision est dans la même phrase que la source pesée. EN: check the decision sits in the same sentence as the weighed source.', q: 'Résumer trois sources puis trancher à part est...', opts: ['la bonne méthode', 'le piège des deux moitiés'], correct: 1, why: 'La leçon 10 du C2. EN: lesson 10 of C2.', items: [E(2481), E(2482)], audio: AUDIO },
  { id: 'd-piege', title: 'Trois sur quatre ne suffit jamais', format: 'mcq' as const, coach: 'Relis contre les quatre unités, même ce qui semble déjà réussi. EN: reread against the four units, even what already seems to succeed.', q: 'Réussir trois compétences sur quatre garantit-il la quatrième.', opts: ['oui', 'non, jamais'], correct: 1, why: 'Une compétence peut en cacher une autre. EN: a skill can hide another.', items: [E(2485), E(2489)], audio: AUDIO },
  { id: 'd-bilan', title: 'Les quatre unités, à la fois', format: 'flashcard' as const, coach: 'Nomme les quatre unités à voix haute, dans l’ordre. EN: name the four units aloud, in order.', items: [E(2502), E(2510)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'dossier-fragmente', description: 'Treats the capstone as thirteen separate proofs rather than one fused response.', detectOn: ['a1-check', 'a1-groupe', 'a8-mission'], drill: 'd-dossier', retest: 'd-dossier' },
  { id: 'densite-ignoree', description: 'Claims to understand a dense sentence from its vocabulary alone, without finding its backbone or weighing its hedge.', detectOn: ['a2-check', 'a2-groupe', 'a8-mission'], drill: 'd-densite', retest: 'd-densite' },
  { id: 'mot-mal-juge', description: 'Judges a word by the wrong criterion: register where history was needed, or vice versa, or quotes a slang word then uses it unprompted.', detectOn: ['a3-check', 'a3-groupe', 'a8-mission'], drill: 'd-mot', retest: 'd-mot' },
  { id: 'lecture-partielle', description: 'Names a single device or reads a single implicit cue and stops there, instead of holding several threads together.', detectOn: ['a4-check', 'a4-groupe', 'a8-mission'], drill: 'd-nuance', retest: 'd-nuance' },
  { id: 'fausse-simplification-ou-abandon', description: 'Simplifies only vocabulary while keeping a complex sentence intact, or abandons a sustained reply without a real conclusion.', detectOn: ['a5-check', 'a5-groupe', 'a8-mission'], drill: 'd-mediation', retest: 'd-mediation' },
  { id: 'redemarrage-ou-deux-moities', description: 'Restarts a long reply from zero after an interruption, or splits a synthesis into a summary half and an opinion half instead of fusing them sentence by sentence.', detectOn: ['a6-check', 'a6-groupe', 'a8-mission'], drill: 'd-discours', retest: 'd-discours' },
  { id: 'trois-sur-quatre', description: 'Treats three successful C2 skills in one response as proof the fourth also succeeded, without rereading against all four units.', detectOn: ['a7-check', 'a7-lecture', 'a8-mission'], drill: 'd-piege', retest: 'd-piege' },
  { id: 'unite-oubliee', description: 'Submits the capstone task missing one of the four units entirely (no device named, no position taken, a register slip, or no final reread).', detectOn: ['a8-mission'], drill: 'd-bilan', retest: 'd-bilan' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEET
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-bilan', 'Bilan de maîtrise : les treize leçons', ['les quatre unités', 'le piège du bilan', 'le plan en cinq passes'], [
    teach('sheet-bilan-teach', 'Treize instruments, une seule pièce',
      'Chaque leçon du C2 a réglé un seul instrument : un curseur, quatre fils, une image, un costume, une pierre, une porte, une traversée, un direct, un sentier, une balance, un signal, un dépliage, un fil repris. Ce bilan ne règle aucun nouvel instrument : il demande qu’ils jouent enfin ensemble, dans une seule réponse. EN: this capstone tunes no new instrument; it asks the thirteen already tuned to finally play together, in one single response.'),
    table('sheet-bilan-unites', 'Les quatre unités', ['Unité', 'Leçons'], [
      [UNIT1_TITLE, `${C201_REF}, ${C202_REF}, ${C203_REF}, ${C204_REF}`],
      [UNIT2_TITLE, `${C205_REF}, ${C206_REF}, ${C207_REF}, ${C208_REF}`],
      [UNIT3_TITLE, `${C209_REF}, ${C210_REF}, ${C211_REF}, ${C212_REF}`],
      [UNIT4_TITLE, C213_REF],
    ]),
    teach('sheet-bilan-piege', 'Le piège du bilan',
      `${Cap(C213_REF)} t’a appris qu’une correction peut en cacher une autre, dans le même texte. Ici, une compétence entière peut en cacher une autre, dans la même réponse : relis toujours contre les quatre unités, une par une, même ce qui semble déjà réussi. EN: lesson 13 of C2 taught that one correction can hide another in the same text; here a whole skill can hide another in the same answer.`),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Ton bilan de maîtrise',
    opener: {
      line: 'Odile te remet le dernier passage : à toi de montrer, une seule fois, que les treize leçons du C2 jouent ensemble. EN: Odile hands you the last passage: show, once, that C2’s thirteen lessons play together.',
      imageRef: 'lessons/c2-14-bilan-maitrise/act08.jpg',
    },
    sections: [],
    milestone: 'Tu produis une réponse soutenue qui lit un passage dense, tranche sur son argument, nomme un procédé précis et se relit contre les quatre questions de la leçon 13 du C2. EN: You produce a soutenu response that reads a dense passage, decides on its argument, names a precise device and rereads itself against lesson 13 of C2’s four questions.',
    estScreens: 42, restPoints: ['a8-scenario', 'a8-mission', 'a8-cheat', 'a8-quiz'],
  },
  sections: [A8_MODELE, A8_PLAN, A8_SCENARIO, A8_MISSION, A8_PARLER, A8_CHEAT, A8_PROGRESS, A8_QUIZ, A8_REVIEW, A8_ROUNDUP],
  imports: IMPORTED.act8,
};

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** MissionRich renders options in authored order, so every closed MISSION
 *  item is rotated here, options and `correct` together, so each
 *  option-count class spreads evenly. No text is changed and no `why` names
 *  a position. The quiz keeps its authored slots, scattered by hand, exactly
 *  as c2.06 and c2.13 do. */
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c2-14-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c2-14-phrase-dense': 'The single dense demo sentence (act 2, already recorded for c2.12), ONE VOICE, one take, read evenly, no vocal hint at its backbone.',
  'rec-c2-14-courriel-camille': 'Camille’s email (act 4, already recorded for c2.01), ONE VOICE, one take, a level, professional tone that never tips into audible irritation.',
  'rec-c2-14-document-sociologue': 'The sociologist’s op-ed excerpt (act 6, already recorded for c2.10), ONE VOICE, one take, a measured, written-register tone.',
  'rec-c2-14-dossier-noor': 'The narrator’s description of Noor’s portfolio (act 7), ONE VOICE, one take, read plainly, with no tone that gives away the missing unit.',
  'rec-c2-14-passage-bilan': 'The task’s own dense source paragraph (act 8, already recorded for c2.12), ONE VOICE, one take, identical delivery to its c2.12 recording so the two lessons share one asset.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 14,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C2 · LEÇON 14',
  intro: "Across thirteen separate lessons, the C2 band gave you one instrument at a time: precise word choice, integral literary reading, idiom register, quoted slang, word history, mediation, poetry translation, spontaneous speech, sustained discourse, fused synthesis and argument, expert listening, dense academic reading, and self-editing. This capstone adds nothing new. It asks you to play all thirteen at once, in a single response: read a dense passage, take and defend a position on its argument, name the precise device that carries its central claim, sustain that response in consistent soutenu register, then reread it against lesson 13 of C2's own four coherence questions before calling it finished.",
  skill: 'PE',
  grammarAssumed: ['c2.01', 'c2.02', 'c2.03', 'c2.04', 'c2.05', 'c2.06', 'c2.07', 'c2.08', 'c2.09', 'c2.10', 'c2.11', 'c2.12', 'c2.13'],
  grammarIntroduced: [
    'No new skill: this capstone recombines all thirteen C2 lessons into a single fused response, by brief',
    'Reading the band by its own four units (précision et style, mots et médiation, discours et analyse, révision et maîtrise) rather than as thirteen isolated lessons',
    'The capstone’s own named trap, raised one level past lesson 13 of C2: a response that succeeds at three of the four units and silently skips the fourth',
    'A single graded task that fuses dense reading, argument synthesis and position, precise device-naming, sustained soutenu register, and self-editing, in one response, under one rubric',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Treize leçons du C2 t’ont donné, chacune, un seul instrument : le mot exact, la lecture intégrale, le registre d’une image, l’argot cité, l’histoire d’un mot, la médiation, la traduction poétique, l’oral spontané, le discours soutenu, la synthèse tranchée, l’écoute experte, la lecture dense, la relecture. Ce bilan n’ajoute rien de nouveau : il te demande de jouer les treize à la fois, dans une seule réponse, puis de la relire contre les quatre questions de la leçon 13 du C2 avant de la rendre.',
    minutes: 130,
    difficulty: 5,
    glyph: 'pièce',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: BILAN_MAITRISE_TERMS,
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

/** Named so a batch, a merge and a test agree on what is named, not
 *  released: every row whose `drills` carries no `flashcard`. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, dicteeFor };
