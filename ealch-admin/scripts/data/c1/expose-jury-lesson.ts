// c1.09.l1 « L’exposé et le jury » · the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE, amended
// §1.4) on top of B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md
// (decisions 13, 16, 19) and this lesson's section of C1-RESEARCH-PLAN.md.
// Structural model: b2.26 « Réunions et négociations »
// (../b2/reunions-negociation-*), copied for its SPOKEN task shape: same file
// layout, helpers, act loop and closing act.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is real (in SECTION_TYPES and the LessonSection union), so the validators
// run on `LESSON` itself; `lessonWithoutTask()` returns it with the task
// removed for the house tests that still call it.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around a TEXT (a recorded opening, a
//   dossier, a synthesis, three problématiques, an exposé, a jury exchange)
//   and a MOVE, in the same beats:
//
//     1 MEET      one anchor text FIRST (`reading`, `listening` with
//                 hideLines, or `story`)
//     2 NOTICE    one section naming the move (cardDeck, tapTable,
//                 examples, focus), linked to a sheet where it has one
//     3 PRACTISE  checks on NEW material (groupDrill, trapDrill,
//                 commonErrors, dictation, hacks): which line fits HERE,
//                 and why
//     4 USE       « À toi »: the act’s one tool for the spoken task (a
//                 pick-the-line groupDrill, or a short jury scenario in
//                 acts 7 and 9)
//     + CHECK     the gated control-page groupDrill every act ends on
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  L’exposé qui résume         7  scene (a faithful summary, no
//                                      question), the jury’s report; ONE
//                                      recap card of B2 lessons 22, 23, 25,
//                                      26; the task announced
//    2  Un genre qui se parle       6  Nora’s recorded opening · announce,
//                                      repeat, address, refer back aloud
//    3  Lire le dossier             6  the gardens dossier (3 documents) ·
//                                      genre and voice; where they meet,
//                                      where they part
//    4  Synthétiser à voix haute    6  Théo’s synthesis, recorded · stance
//                                      verbs, attribution (tapTable, trap)
//    5  La question, à voix haute   6  three problématiques heard · dès
//                                      lors, toute la question, pas tant…
//                                      que; the indirect question (tapTable)
//    6  Tenir le plan               6  your exposé, transcribed · signposts,
//                                      time, the oral conclusion, the hand-over
//    7  Devant le jury              6  the first question (story) ·
//                                      reformulate, ask, answer first (role play)
//    8  Gagner du temps             6  three answers to one hard question ·
//                                      think aloud, do not invent (tapTable, trap)
//    9  Concéder sans lâcher        6  the objection, transcribed · grant,
//                                      narrow, maintain (tapTable, role play)
//   10  Quand le jury pousse        6  three pushes, recorded · outside the
//                                      dossier, the personal view, the
//                                      hypothesis; moods under load (trap)
//   11  Clore l’entretien           6  the last two minutes, recorded
//   12  À toi, devant le jury      12  model exposé (another dossier),
//                                      annotation, plan, jury role play,
//                                      TASK (spoken, 180 to 300 s), quiz
//
//   TOTAL 79 missions, 12 acts (7,6,6,6,6,6,6,6,6,6,6,12). Texts: 5
//   readings of 200 to 320 words (a jury report, a dossier, an exposé, a
//   jury exchange, a model exposé), 6 hideLines listenings, one story, one
//   scene, three role plays. Corpus: 162 authored rows (.1200-.1361, no
//   gaps) plus 44 reused rows (13 B2 recap rows in act 1; 21 legacy
//   discours-dexamen rows, 18 of them Postgres-only in PG_ROWS; 6 c1.21
//   rows; 4 b2.23 headwords). Quiz: 11 rounds of 8 (acts 2 to 11, one
//   integration round). Eleven error triggers, eleven drills, five reference
//   sheets, twelve terms, four tapTables (acts 4, 5, 8, 9).
//   Chapter artwork: `expose-jury-image-prompts.md`, 12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Pose une vraie question, puis tiens ton fil : chaque réponse au jury y
//   ramène. »
//   EN: Ask a real question, then hold your thread: every answer to the jury
//   leads back to it.
//
//   ONE METAPHOR, THE THREAD (every chapter image carries one ochre thread).
//   Acts 3 to 6 draw the thread out of the dossier and lay it through the
//   exposé; acts 7 to 11 are the jury pulling on it; act 12 ties it off.
//   Rejected candidates: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    formal oral production at C1: the exposé as a spoken genre;
//           synthesis aloud from a dossier (stance verbs, attribution);
//           the spoken problématique and its indirect question; holding a
//           plan aloud (signposts, time, oral conclusion, hand-over); the
//           formal floor toward a jury; buying time; conceding in public
//           without losing the thesis; questions outside the dossier;
//           closing the entretien; the app’s spoken exposé task.
//   QUOTES  b2.23’s reframe (act 1); B2 lessons 22, 23, 25, 26 rows by id
//           (act 1 only); c1.21’s production-ready rows by id (acts 3, 8,
//           9, 10); the legacy discours-dexamen stock by id.
//   LEAVES  written argumentation and plans (lesson 23 in B2), the written
//           plan (lesson 22 in B2), hearing a plan (lesson 25 in B2), the
//           meeting floor (lesson 26 in B2), debate listening (lesson 21 in
//           C1), closure and reframing markers, hedges and rhetoric (the
//           wave-mates c1.07, c1.06, c1.08: never cited), meetings (c1.23).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner in every instruction; the jury says « vous » to the
//   candidate and the candidate says « vous » to the jury, inside scenes,
//   readings and role plays. Unsimplified C1 French; English authored on
//   every learner string (`en`, or a final « EN: »), and NO answer carries
//   one. Every `say` is French. Theme `discours-dexamen`, block
//   .1200-.1399. Lessons cited by trail position in words. Every person,
//   town, institute and figure is invented. No bubble carries « ? » or
//   « ! ». Answer slots spread by permuting options WITH their correct index
//   (spreadMissionSlots, spreadQuizSlots); no `why` names a position. One
//   apostrophe style (’) in every authored string and every role play.
//   Version 1 (a new lesson). Tag « C1 · LEÇON 9 », unpadded.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE FORMAT IS THE APP’S OWN (decision 19): an exposé of 180 to 300 s
//      from a printed dossier, then the jury rehearsed in a scenario. No
//      real exam is named on any learner surface (france-education-
//      international.fr refused the fetcher, 403, so no DALF C1 fact could
//      be verified at the source; the secondary-source facts sit in corpus
//      §A.7a, unused). Name the DALF C1 once it is checked at FEI?
//   2. No live speech grading: the task is self-checked against the model
//      and six criteria (20 points), as b2.26. Keep six criteria?
//   3. 18 legacy rows are Postgres-only (PG_ROWS); 12 carry straight
//      apostrophes and need decision 13’s typography edit at the import.
//      All are named, never released, never in a scenario. Accept?
//   4. Four tapTables (acts 4, 5, 8, 9), the C1 maximum (decision 16).
//   5. `Lesson.skill` 'PO'. PO@c1 has no exam task and no EXAM_PREP_TARGETS
//      route; this lesson is the natural target once one exists.
//   6. Act 10 recycles B2 moods (doute que, il n’est pas certain que, bien
//      que, à moins que… ne) under load and cites « la leçon 6 du B2 ».
//   7. Act 10 names b2.23’s « faux dilemme » (reused row) as a jury move,
//      citing « la leçon 23 du B2 ». Fine as recycling, or out of scope?
//   8. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every
//      other lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, LEG, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, PG_ROWS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  RAPPORT_TEXT, DOSSIER_TEXT, EXPOSE_TEXT, ENTRETIEN_TEXT, MODELE_TEXT, TASK_DOC, TASK_MODEL,
  REUNION_UNIT, ARGUMENTATION_UNIT, ACADEMIQUE_UNIT, ECOUTE_UNIT, MODES_UNIT, DEBATS_UNIT,
  REUNION_REF, ARGUMENTATION_REF, ACADEMIQUE_REF, ECOUTE_REF, MODES_REF, DEBATS_REF,
  ARGUMENTATION_REF_EN, REUNION_REF_EN, DEBATS_REF_EN,
} from './expose-jury-corpus.ts';
import { EXPOSE_JURY_TERMS } from './expose-jury-terms.ts';

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
const PG = new Map<string, SrcItem>(Object.values(PG_ROWS).map((r) => [r.id, r]));

/** An item's fr/en, from this corpus, the seed, or PG_ROWS (Postgres-only
 *  legacy rows). Throws on a typo, so no section can name an id that does
 *  not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id) ?? PG.get(id);
  if (!r) throw new Error(`c1.09: no item ${id}`);
  return r;
}

/** The imports are typed by hand in the corpus; hold them to the seed or to
 *  PG_ROWS, and their drills to NOT_DECK_ABLE / NOT_SPEAKABLE. */
for (const id of IMPORT_IDS) {
  const r = SEED.get(id) ?? PG.get(id);
  if (!r) throw new Error(`c1.09: import ${id} is neither in the seed nor in PG_ROWS`);
  const d = r.drills ?? [];
  if (!NOT_SPEAKABLE.includes(id) && !d.includes('voiceflash')) throw new Error(`c1.09: ${id} has no voiceflash but is not in NOT_SPEAKABLE`);
  if (!NOT_DECK_ABLE.includes(id) && !d.includes('flashcard')) throw new Error(`c1.09: ${id} has no flashcard but is not in NOT_DECK_ABLE`);
}

/** The row's IPA, so a scene break or a trap card never retypes one. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.09: no ipa on ${id}`);
  return r.ipa;
}

/** The authored row's respelling, BRACKETED for a section. Authored rows
 *  only: seed respellings are never printed. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.09: no authored respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A quotation with no corpus row (a weak or misplaced line shown as such). */
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const F = (fr: string, en: string) => ({ fr, en });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const uc = (situation: string, id: string) => ({ situation, fr: src(id).fr, en: src(id).en });
const fr = (id: string) => src(id).fr;
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

type Card = NonNullable<Sec<'cardDeck'>['cards']>[number];
const card = (id: string, head: string, label: string, body: string): Card =>
  ({ head, label, fr: fr(id), sub: rsOf(id), body });

/** A trap card: the wrong line (never spoken) and the right row. */
const trap = (promptLabel: string, promptSound: string, id: string, tip: string) =>
  ({ promptLabel, promptSound, fr: fr(id), ipa: ipaOf(id), tip });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** The stepped trapDrill's four steps, the same in every act. */
const TRAP_STEPS = [
  { label: 'La règle', kind: 'rule' as const, title: 'Ce que le français fait' },
  { label: 'Six cartes', kind: 'cards' as const, title: 'Ce que la phrase fautive raconte' },
  { label: 'Écoute', kind: 'audio' as const, title: 'Écoute les six phrases justes' },
  { label: 'À toi', kind: 'drill' as const, title: 'Huit phrases', gate: true },
];

/** A deterministic hash, so the slot spreading below is stable run to run. */
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

const OPT_KEYS = ['opts', 'options', 'choices', 'answers'];

/** THE ANSWER-SLOT RULE (playbook 6.11, b1-answer-slots.test.ts), as b2.26
 *  does it: missions render the authored order, so answers are spread BY
 *  PERMUTING each item's options WITH its correct index. The option set and
 *  the correct string are unchanged. No `why` in this lesson names a
 *  position. */
function spreadMissionSlots(sections: LessonSection[], drills: LessonDrill[]): void {
  const counts: Record<number, number[]> = {};
  const last: number[] = [];
  const place = (n: Record<string, unknown>) => {
    const key = OPT_KEYS.find((k) => Array.isArray(n[k]))!;
    const opts = n[key] as unknown[];
    const k = opts.length;
    counts[k] ??= new Array(k).fill(0);
    const c = counts[k];
    const banned = last.length >= 2 && last[last.length - 1] === last[last.length - 2] ? last[last.length - 1] : -1;
    const slots = [...Array(k).keys()].filter((i) => i !== banned);
    const min = Math.min(...slots.map((i) => c[i]));
    const pool = slots.filter((i) => c[i] <= min + (k === 2 ? 1 : 0));
    const target = pool[hash(JSON.stringify(opts) + String(n.q ?? n.promptSay ?? n.prompt ?? '')) % pool.length];
    const cur = n.correct as number;
    [opts[cur], opts[target]] = [opts[target], opts[cur]];
    n.correct = target;
    c[target]++;
    last.push(target);
  };
  const walk = (n: unknown): void => {
    if (!n || typeof n !== 'object') return;
    if (Array.isArray(n)) { n.forEach(walk); return; }
    const o = n as Record<string, unknown>;
    if (typeof o.correct === 'number' && OPT_KEYS.some((k) => Array.isArray(o[k]))) place(o);
    Object.values(o).forEach(walk);
  };
  for (const s of sections) if (s.type !== 'quiz') walk(s);
  for (const d of drills) walk(d);
}

/** The quiz: `validateDensity` quiz-spread counts every numeric correct in
 *  the quiz together. LessonRich reshuffles at runtime anyway. */
function spreadQuizSlots(quiz: Sec<'quiz'>): void {
  const c = [0, 0, 0, 0];
  let prev = -1;
  for (const r of quiz.rounds ?? []) {
    for (const q of r.questions as unknown as Record<string, unknown>[]) {
      if (!Array.isArray(q.opts) || typeof q.correct !== 'number') continue;
      const opts = q.opts as string[];
      const slots = [...Array(opts.length).keys()].filter((i) => i !== prev);
      const min = Math.min(...slots.map((i) => c[i]));
      const pool = slots.filter((i) => c[i] === min);
      const target = pool[hash(String(q.q) + opts.join('|')) % pool.length];
      const cur = q.correct;
      [opts[cur], opts[target]] = [opts[target], opts[cur]];
      q.correct = target;
      c[target]++;
      prev = target;
    }
  }
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 · L’EXPOSÉ QUI RÉSUME
 *
 *  The problem: three faithful summaries and no question. The recap of B2
 *  lessons 22, 23, 25 and 26 in ONE card. The task announced.
 * ══════════════════════════════════════════════════════════════════════════ */

const RECAP_LINE = 'Le premier document est un extrait du bilan de la ville. Il dit que les jardins sont pleins.';
const RECAP_EN = 'The first document is an extract from the city’s report. It says the gardens are full.';
const RECAP_RS = '[luh pruh-MYAY do-kü-MAHⁿ | eh-tuhⁿ-nehks-TREH dü bee-LAHⁿ duh la VEEL | eel DEE | kuh lay zhar-DEHⁿ sohⁿ PLEHⁿ]';
const RECAP_IPA = '/lə pʁə.mje dɔ.ky.mɑ̃ ɛ.tœ̃.nɛks.tʁɛ dy bi.lɑ̃ də la vil il di kə le ʒaʁ.dɛ̃ sɔ̃ plɛ̃/';
const NEXT_LINE = 'Le deuxième document est un témoignage. Il dit que les jardiniers aiment leur jardin.';
const NEXT_RS = '[luh deu-ZYEMM do-kü-MAHⁿ | eh-tuhⁿ tay-mwa-NYAZH | eel DEE | kuh lay zhar-dee-NYAY | EHMM luhr zhar-DEHⁿ]';

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Trois résumés et pas de question',
  frSub: 'L’oral blanc',
  setting: { place: 'Institut Verlune, salle 204', city: 'Montréal', time: 'mardi, 14 h 10', ambience: 'une longue table, deux membres du jury, un minuteur posé à côté d’une carafe d’eau' },
  beats: [
    {
      kind: 'narration',
      text: 'L’oral blanc de l’Institut Verlune. Tu as eu une heure pour préparer un dossier de trois documents sur les jardins partagés. En face de toi, Hélène Rocheval, qui préside le jury, et Yannick Aubertin.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: RECAP_LINE, en: RECAP_EN, respell: RECAP_RS,
      stage: 'Tout est exact. Tu enchaînes sur le deuxième document, puis sur le troisième.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mme Rocheval',
      fr: 'Je vous arrête un instant. Vous résumez très bien, mais je n’entends pas encore votre question.',
      en: 'Let me stop you for a moment. You summarise very well, but I do not hear your question yet.',
      respell: '[zhuh voo-za-REHT uhⁿ-nehⁿs-TAHⁿ | voo ray-zü-may treh BYEHⁿ | meh zhuh nahⁿ-TAHⁿ pa-zahⁿ-KOR | votr kehs-TYOHⁿ]',
      stage: 'Elle ne te reproche aucune faute de français.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu reprends. Quelle phrase donne au jury ce qu’il attend ?',
      size: 'lg',
      options: [
        { fr: NEXT_LINE, respell: NEXT_RS, en: 'The second document is a testimony. It says the gardeners love their garden.', outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1200)), respell: rsOf(E(1200)), en: src(E(1200)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Mme Rocheval pose son stylo et hoche la tête. M. Aubertin prend une note : il sait maintenant ce que tu vas défendre.',
        breaks: 'M. Aubertin regarde le minuteur. Le troisième résumé arrive, exact lui aussi, et la question ne vient toujours pas.',
      },
    },
    {
      kind: 'break',
      heading: 'Un résumé n’est pas un exposé',
      body: 'Tout était exact, mais le jury entendait trois résumés sans savoir où ils menaient. Un exposé tire du dossier une question, et chaque document sert à y répondre. EN: Summaries with no question lead nowhere; an exposé draws one question from the dossier.',
      wrong: { fr: RECAP_LINE, ipa: RECAP_IPA, respell: RECAP_RS, en: RECAP_EN },
      right: { fr: fr(E(1200)), ipa: ipaOf(E(1200)), respell: rsOf(E(1200)), en: src(E(1200)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: 'Cette leçon t’apprend à tirer une question d’un dossier, à la dire et à tenir ton plan, puis à défendre ton exposé devant un jury qui te contredit. À la fin, tu enregistres un exposé de trois à cinq minutes sur un dossier nouveau.',
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['expose', 'fil'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Faire parler un dossier', s: 'Actes 2 à 4 : le genre oral, la lecture du dossier, la synthèse à voix haute' },
    { t: 'Poser ta question et la tenir', s: 'Actes 5 et 6 : la problématique dite, le plan tenu, la conclusion' },
    { t: 'Répondre au jury sans lâcher ton fil', s: 'Actes 7 à 11 : reformuler, gagner du temps, concéder, sortir du dossier, conclure' },
    { t: 'Passer l’oral', s: 'Acte 12 : un exposé enregistré sur un dossier nouveau, au format de l’application' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the jury’s report, which previews every act. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le rapport du jury',
  frSub: 'Lis ce que le jury a vu',
  text: RAPPORT_TEXT,
  glossary: [
    { word: 'diction', en: 'diction, delivery', note: 'La manière de prononcer et d’articuler.' },
    { word: 'fidèlement', en: 'faithfully', note: 'Sans rien changer ni ajouter au document.' },
    { word: 'objecté', en: 'objected', note: 'Objecter que : opposer un argument à quelqu’un.' },
  ],
  questions: [
    { q: 'Global : sur quoi portent les remarques du jury ?', a: 'Sur la méthode : le français est jugé précis et clair, mais l’exposé n’avait pas de question et l’entretien a mal tourné.' },
    { q: 'Détail : qu’a fait le candidat quand M. Aubertin lui a objecté quelque chose ?', a: 'Il a renoncé à sa position en une phrase : « Vous avez raison, je n’y avais pas pensé. »' },
    { q: 'Inférence : pourquoi le jury écrit-il que l’objection appelait « une précision, pas un abandon » ?', a: 'Parce qu’elle portait sur une partie de la position seulement : il fallait la reconnaître et préciser, pas tout lâcher.' },
    { q: 'Point de vue : lequel des trois conseils te paraît le plus difficile, et pourquoi ?', a: 'Réponse libre. Le jury insiste sur le fil : une question tenue de l’exposé jusqu’à la fin de l’entretien.' },
  ],
  audio: REC('rec-c1-09-rapport'),
  say: REFRAME,
  terms: ['jury', 'fil'],
};

/** THE ONE RECAP CARD: four B2 lessons, their published rows, one check
 *  each. Never re-taught after this section. */
const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-rappel',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà',
  frSub: 'Quatre leçons du B2, en un seul rappel',
  groups: [
    grp(`${Cap(ARGUMENTATION_REF)} : la question et le plan, à l’écrit`, [
      it('fr.b2.opinions-et-avis.1723', 'le mot'),
      it('fr.b2.opinions-et-avis.1726', 'l’introduction écrite'),
      it('fr.b2.opinions-et-avis.1742', 'deux plans'),
      it('fr.b2.opinions-et-avis.1612', 'sa règle'),
    ], chk(
      'Ce que tu sais de cette leçon vaut-il à l’oral ?',
      ['Oui, mais à l’oral la question naît d’un dossier et se dit devant un jury.', 'Non, l’oral n’a ni question ni plan.'], 0,
      'La problématique et les plans restent ; ce qui change, c’est le dossier imposé et le jury en face. EN: same tools, new setting.')),
    grp(`${Cap(ACADEMIQUE_REF)} : annoncer un plan écrit`, [
      it('fr.b2.universite.1040', 'le mot'),
      it('fr.b2.universite.1032', 'une annonce écrite'),
      it('fr.b2.universite.1043', 'sa règle'),
    ], chk(
      'À l’écrit, le lecteur peut relire ton plan. Et le jury, à l’oral ?',
      ['Il ne peut pas : tu dois rappeler où tu en es.', 'Il peut, s’il prend des notes.'], 0,
      'Le jury n’a pas la page sous les yeux : les balises remplacent les titres. EN: signposts replace headings.')),
    grp(`${Cap(ECOUTE_REF)} : entendre un plan`, [
      it('fr.b2.strategies-de-comprehension.1614', 'une annonce entendue'),
      it('fr.b2.strategies-de-comprehension.1618', 'une transition entendue'),
    ], chk(
      'Ici, tu ne les entends plus : tu les dis. Qu’est-ce qui change ?',
      ['C’est toi qui guides l’oreille du jury.', 'Rien : il suffit de les répéter.'], 0,
      'Tu étais l’auditeur ; tu deviens celui qui parle. EN: from listener to speaker.')),
    grp(`${Cap(REUNION_REF)} : la parole en réunion`, [
      it('fr.b2.affaires.1237', 'entrer dans la discussion'),
      it('fr.b2.affaires.1263', 'reformuler'),
      it('fr.b2.affaires.1273', 'un désaccord nuancé'),
      it('fr.b2.affaires.1371', 'conclure'),
    ], chk(
      'Une réunion et un jury : quelle est la grande différence ?',
      ['Le jury évalue ce que tu dis, il ne négocie pas.', 'Il n’y en a aucune.'], 0,
      'En réunion, tu cherches un accord ; devant un jury, tu défends une pensée. EN: a jury assesses, it does not negotiate.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expose', 'jury'],
};

const A1_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-expose',
  title: 'Quatre idées avant l’oral',
  frSub: 'Ce que le C1 ajoute',
  hint: 'Quatre cartes. Chacune répond à un reproche du rapport.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['expose', 'synthese', 'fil'],
  cards: [
    card(E(1204), 'Le genre', 'l’exposé',
      'Un exposé répond à une question ; un résumé n’en pose aucune. C’est le premier reproche du jury. EN: an exposé answers a question.'),
    card(E(1205), 'La méthode', 'la synthèse',
      'Les documents se répondent : l’un chiffre, l’autre raconte, le troisième conteste. Tu les mets face à face. EN: put the documents face to face.'),
    card(E(1202), 'Ce qui relie tout', 'le fil',
      'La question tirée du dossier, tenue de la première phrase à la dernière réponse au jury. EN: the question that runs through everything.'),
    card(E(1208), 'Le jury', 'l’objection',
      'Une objection demande une précision. Le candidat du rapport y a vu une attaque, et il a tout lâché. EN: an objection asks for precision.'),
  ],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où ces phrases changent tout',
  cases: [
    uc('Le jury t’arrête au bout de quatre minutes de résumé', E(1200)),
    uc('Tu expliques au jury ce que tu as fait du dossier', E(1206)),
    uc('Ta coach te prépare la veille de l’oral', E(1207)),
    uc('M. Aubertin vient de t’objecter quelque chose', E(1208)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expose', 'fil'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le résumé', 'Trois résumés exacts, l’un après l’autre, sans question : pour le jury, c’est…',
    ['un exposé qui ne mène nulle part', 'un exposé réussi, puisque tout est exact'], 0,
    'L’exactitude ne suffit pas : sans question, le jury ne sait pas où tu vas. EN: accuracy is not enough.'),
  ctl('Le fil', 'Qu’est-ce qui relie l’exposé et l’entretien ?',
    ['la même question, tenue jusqu’au bout', 'le nombre de documents cités', 'la longueur de l’exposé'], 0,
    'Le fil, c’est la question : chaque réponse au jury y ramène. EN: the question is the thread.'),
  ctl('L’objection', 'Le jury t’objecte que ta thèse a une faille. Le rapport conseille de…',
    ['tout abandonner poliment', 'préciser ta pensée'], 1,
    '« L’objection appelait une précision, pas un abandon. » EN: precision, not surrender.'),
], ['fil', 'jury']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'L’exposé qui résume',
    opener: {
      line: 'Trois documents fidèlement résumés, et le jury attend toujours ta question : ici tu découvres ce qu’un exposé demande de plus. EN: Three documents faithfully summarised, and the jury is still waiting for your question: here you see what an exposé asks for.',
      imageRef: 'lessons/expose-jury/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais ce que le jury attend : une question tirée du dossier, et un fil tenu jusqu’au bout. EN: You know what the jury expects: a question drawn from the dossier, and a thread held to the end.',
    estScreens: 40, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_CARTES, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 · UN GENRE QUI SE PARLE
 *
 *  Nora’s recorded opening (night markets). The exposé is spoken: announce,
 *  repeat the key line, address the jury, refer back by time, not by page.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the opening, heard once lines hidden. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'L’ouverture de Nora',
  frSub: 'Écoute comment elle parle au jury',
  lines: [ln(E(1211)), ln(E(1212)), ln(E(1213)), ln(E(1214)), ln(E(1215)), ln(E(1216)), ln(E(1217)), ln(E(1218)), ln(E(1219)), ln(E(1220))],
  questions: [
    { q: 'Quel est le sujet du dossier de Nora ?', opts: ['les marchés de nuit', 'le bruit des bars', 'les horaires des commerces'], correct: 0, why: 'Elle le dit dans sa première phrase, avec « porter sur ». EN: night markets.' },
    { q: 'Avant sa question, que dit-elle des trois documents ?', opts: ['ce qu’ils ont en commun', 'le résumé de chacun', 'son avis sur chacun'], correct: 0, why: 'Elle annonce une phrase sur le point commun : la nuit comme un temps à partager. EN: their common ground.' },
    { q: 'Sur quoi porte sa question ?', opts: ['qui décide de ce qui se passe la nuit dans une rue', 'le nombre de marchés de nuit', 'le prix des emplacements'], correct: 0, why: 'C’est le point de désaccord entre les documents, et elle le répète : « Ce sera ma question. » EN: who decides about the street at night.' },
    { q: 'En combien de parties traitera-t-elle cette question ?', opts: ['deux', 'trois', 'quatre'], correct: 0, why: '« En deux temps » : ce que la ville gagne, puis ce qu’elle doit à ceux qui dorment. EN: two stages.' },
    { q: 'Que promet-elle pour la fin ?', opts: ['une proposition précise', 'un résumé des documents', 'une citation'], correct: 0, why: 'Elle annonce sa fin dès le début : le jury sait où elle va. EN: a specific proposal.' },
  ],
  audio: REC('rec-c1-09-nora-ecoute'),
  say: REFRAME,
  terms: ['expose', 'question'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-expose',
  title: 'Quatre gestes de l’oral',
  frSub: 'Ce que Nora fait qu’un texte écrit ne fait pas',
  hint: 'Quatre cartes, quatre phrases de Nora.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['expose', 'balise'],
  cards: [
    card(E(1213), 'Annoncer', 'l’annonce',
      'Le jury entend une seule fois. Dis-lui ce qui vient avant de le dire. EN: say what is coming before you say it.'),
    card(E(1217), 'Répéter l’essentiel', 'la redite',
      'À l’écrit, une redite alourdit ; à l’oral, elle fixe la question dans la mémoire du jury. EN: repetition fixes the key line.'),
    card(E(1218), 'S’adresser au jury', 'le vous',
      'Je vous propose : le jury est là, en face de toi. Parle-lui, ne récite pas. EN: talk to the jury.'),
    card(E(1223), 'Renvoyer en arrière', 'le rappel',
      'À l’oral, on renvoie au temps (il y a un instant), pas à la page. EN: refer back in time, not on the page.'),
  ],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-trier',
  layer: 'core',
  size: 'lg',
  title: 'Écrit lu ou exposé parlé',
  groups: [
    grp('Une copie lue à voix haute', [
      free('Ainsi qu’il a été exposé ci-dessus, les marchés de nuit présentent des avantages.', 'As set out above, night markets have advantages.', 'ci-dessus : un mot de la page'),
      free('Le présent exposé se propose d’examiner successivement trois aspects de la question.', 'This exposé proposes to examine three aspects of the question in turn.', 'une phrase de copie, impersonnelle'),
      free('Il convient de noter, en outre, que cette pratique, déjà ancienne, suscite des réserves.', 'It should further be noted that this practice, already long-standing, raises reservations.', 'deux incises : l’oreille décroche'),
    ], chk(
      'Ces trois phrases sont correctes. Pourquoi passent-elles mal à l’oral ?',
      ['Elles sont faites pour être lues : le jury n’a pas la page.', 'Elles contiennent des fautes de grammaire.'], 0,
      'Rien n’y est faux : elles supposent un lecteur qui peut revenir en arrière. EN: correct, but built for a reader.')),
    grp('Un exposé qui se parle', [
      it(E(1213), 'une annonce'),
      it(E(1215), 'un suspense court'),
      it(E(1224), 'une pause adressée'),
      it(LEG(64), 'une ouverture du stock d’examen'),
    ], chk(
      'Que font ces phrases que l’écrit ne fait pas ?',
      ['Elles disent au jury ce qui vient, ici et maintenant.', 'Elles évitent tout vocabulaire soutenu.', 'Elles résument les documents.'], 0,
      'Elles sont adressées et situées dans le temps de l’exposé. EN: addressed, and placed in time.')),
    ctl('Le renvoi', 'À l’oral, pour revenir sur une idée déjà dite, tu dis plutôt…',
      ['comme je le disais il y a un instant', 'comme indiqué ci-dessus'], 0,
      'Le jury n’a pas de « dessus » : il a seulement ce qu’il vient d’entendre. EN: refer to time, not to the page.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expose'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre maladresses devant un jury',
  errors: [
    {
      wrong: 'Bon, alors, euh, le sujet, c’est les marchés de nuit.',
      right: fr(E(1211)),
      why: 'Normal : c’est ainsi qu’on commence entre amis. Devant un jury, la première phrase installe le registre de tout l’exposé. EN: fine among friends; before a jury, the first line sets the register.',
    },
    {
      wrong: 'Je vais maintenant vous lire mon introduction.',
      right: fr(E(1213)),
      why: 'Tu l’as écrite pendant la préparation, c’est vrai. Mais annoncer une lecture coupe le lien avec le jury : dis-la, en le regardant. EN: say it, do not announce a reading.',
    },
    {
      wrong: 'Comme indiqué plus haut, la nuit appartient à tout le monde.',
      right: fr(E(1223)),
      why: '« Plus haut » vient de la page, que le jury n’a pas. À l’oral, renvoie au temps de l’exposé. EN: the jury has no page to look up.',
    },
    {
      wrong: 'Le dossier porte les marchés de nuit.',
      right: fr(E(1211)),
      why: 'Porter, au sens de « traiter de », se construit avec sur. Sans lui, le dossier transporte des marchés. EN: porter sur, to be about.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expose'],
};

/** USE: your first line for the gardens dossier. */
const A2_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-atoi',
  layer: 'core',
  size: 'lg',
  title: 'À toi : ta première phrase',
  frSub: 'Pour l’exposé de la fin',
  groups: [
    grp('Le dossier des jardins : comment ouvres-tu ?', [
      it(E(1200), 'une question annoncée'),
      free('Le premier document dit que les jardins sont pleins.', 'The first document says the gardens are full.', 'un résumé qui commence'),
      free('Bon, alors, les jardins, c’est un sujet intéressant.', 'Right, so, gardens, that is an interesting topic.', 'un registre de conversation'),
    ], chk(
      'Laquelle annonce d’emblée que tu vas traiter une question ?',
      [fr(E(1200)), 'Le premier document dit que les jardins sont pleins.', 'Bon, alors, les jardins, c’est un sujet intéressant.'], 0,
      'Elle relie les trois documents à une seule question, et le jury sait où tu vas. EN: it links the documents to one question.')),
    ctl('La suite', 'Juste après cette première phrase, que dis-tu ?',
      ['ta question, puis ton plan en deux temps', 'le résumé du premier document', 'une excuse pour ton accent'], 0,
      'Question, puis plan : comme Nora. EN: question, then plan.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['question', 'fil'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('L’annonce', 'Pourquoi annoncer à l’oral ce que tu vas dire ?',
    ['Le jury ne peut pas relire.', 'Pour gagner du temps.'], 0,
    'L’auditeur a besoin de savoir où tu vas. EN: listeners cannot reread.'),
  ctl('La redite', 'Nora dit : « Ce sera ma question. » Cette répétition est…',
    ['utile : elle fixe la question', 'une maladresse à éviter', 'une faute de registre'], 0,
    'À l’oral, la redite volontaire sert la mémoire du jury. EN: deliberate repetition helps.'),
  ctl('Le registre', 'La première phrase devant un jury…',
    ['peut être familière, pour détendre', 'installe le registre soutenu de l’exposé'], 1,
    'Le jury entend d’abord ton registre. EN: the first line sets the tone.'),
], ['expose', 'balise']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Un genre qui se parle',
    opener: {
      line: 'Un jury n’a pas la page sous les yeux, il n’a que ta voix : ici tu apprends ce qui fait d’un exposé un texte parlé. EN: A jury has no page in front of it, only your voice: here you learn what makes an exposé a spoken text.',
      imageRef: 'lessons/expose-jury/act02.jpg',
    },
    sections: [],
    milestone: 'Tu annonces, tu répètes l’essentiel, tu parles au jury et tu renvoies au temps de l’exposé, pas à la page. EN: You announce, repeat the key line, talk to the jury and refer back in time, not to the page.',
    estScreens: 34, restPoints: ['a2-cartes'],
  },
  sections: [A2_ECOUTE, A2_CARTES, A2_TRIER, A2_ERREURS, A2_ATOI, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 · LIRE LE DOSSIER
 *
 *  The gardens dossier, three documents of three genres. Who speaks, from
 *  where, to say what; where the documents meet and where they part.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le dossier des jardins',
  frSub: 'Trois documents, une heure de préparation',
  text: DOSSIER_TEXT,
  glossary: [
    { word: 'parcelles', en: 'plots', note: 'Les petits morceaux de terrain attribués à chaque jardinier.' },
    { word: 'circuits', en: 'supply chains', note: 'Raccourcir les circuits : moins d’intermédiaires entre celui qui produit et celui qui mange.' },
    { word: 'greffer', en: 'to graft', note: 'Fixer une branche d’un arbre sur un autre arbre.' },
    { word: 'agronome', en: 'agronomist', note: 'Un spécialiste de l’agriculture et des sols.' },
  ],
  questions: [
    { q: 'Global : quel est le genre de chaque document ?', a: 'Un extrait de bilan municipal (des chiffres et un projet), un témoignage (une expérience racontée), une tribune (une prise de position).' },
    { q: 'Détail : que veut faire la ville dans les trois prochaines années ?', a: 'Ouvrir dix jardins de plus, parce qu’elle y voit un outil de politique alimentaire.' },
    { q: 'Inférence : sur quel point le témoignage donne-t-il raison à l’agronome ?', a: 'Sur les récoltes : « pas de quoi remplir un frigo ». Ce qui la fait revenir, ce sont les gens, comme le dit l’agronome.' },
    { q: 'Position : l’agronome est-il contre les jardins partagés ?', a: 'Non : il veut qu’on les défende et qu’on les finance, mais pour ce qu’ils rassemblent, pas pour ce qu’ils produisent.' },
  ],
  audio: REC('rec-c1-09-dossier'),
  say: REFRAME,
  terms: ['dossier', 'synthese'],
};

const A3_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a3-focus',
  layer: 'core',
  sheetId: 'sheet-synthese',
  title: 'Quatre questions à chaque document',
  points: [
    'Qui parle, et d’où ? Une mairie, une jardinière et un agronome ne voient pas la même chose. EN: who speaks, and from where?',
    'Quel genre ? Un bilan chiffre, un témoignage raconte, une tribune prend position. EN: what kind of document?',
    'Quelle thèse, en une phrase ? Écris-la dans la marge. EN: its thesis in one line.',
    'Où rejoint-il les autres, où les contredit-il ? C’est là que naît ta question. EN: where it meets and contradicts the others.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['dossier', 'synthese'],
};

const A3_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-trier',
  layer: 'core',
  size: 'lg',
  title: 'Où ils se rejoignent, où ils se séparent',
  groups: [
    grp('Ils se rejoignent', [
      it(E(1228), 'un constat commun'),
      it(E(1229), 'deux documents d’accord'),
      it(E(1225), 'la formule'),
    ], chk(
      'Le témoignage et le bilan vont dans le même sens. Sur quoi ?',
      ['Les jardins sont recherchés : pas une parcelle libre.', 'Les jardins nourrissent la ville.'], 0,
      'Sur la demande, oui ; sur les récoltes, la jardinière dit le contraire du bilan. EN: on demand, not on food.')),
    grp('Ils se séparent', [
      it(E(1230), 'un document contre un autre'),
      it(E(1231), 'déplacer, pas nier'),
      it(E(1409), 'la formule de la leçon 21 du C1'),
      it(E(1226), 'la formule'),
    ], chk(
      'L’agronome nie-t-il l’intérêt des jardins ?',
      ['Non : il en déplace la valeur, des récoltes vers le voisinage.', 'Oui : il demande qu’on les ferme.', 'Il n’en parle pas.'], 0,
      'Il les défend, mais pour une autre raison que la ville. EN: he moves their value elsewhere.')),
    ctl('La question', 'D’où vient la question de ton exposé ?',
      ['du point où les documents se séparent', 'du document le plus long'], 0,
      'Là où ils divergent, il y a quelque chose à trancher. EN: from where they part.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['synthese', 'question'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Les mots pour relier des documents',
  examples: [
    ex(E(1233), 'Le genre d’abord : ce que chaque document fait.'),
    ex(E(1227), 'Le point commun : se rejoindre sur.'),
    ex(E(1226), 'L’opposition : prendre le contre-pied de.'),
    ex(E(1235), 'Où passe vraiment la différence.'),
    ex(LEG(98), 'Distinguer : une ouverture du stock d’examen.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['synthese'],
};

const A3_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-atoi',
  layer: 'core',
  size: 'lg',
  title: 'À toi : le dossier en une phrase',
  frSub: 'La phrase que tu écris en préparation',
  groups: [
    grp('Laquelle résume le dossier ?', [
      it(E(1235), 'la synthèse'),
      free('Le premier document parle de chiffres, le deuxième d’une jardinière, le troisième d’un agronome.', 'The first document is about figures, the second about a gardener, the third about an agronomist.', 'trois résumés à la suite'),
      free('Les trois documents prouvent que les jardins ne servent à rien.', 'The three documents prove that the gardens are useless.', 'plus fort que le dossier'),
    ], chk(
      'Quelle phrase dit le dossier en une seule idée, sans le trahir ?',
      [fr(E(1235)), 'Le premier document parle de chiffres, le deuxième d’une jardinière, le troisième d’un agronome.', 'Les trois documents prouvent que les jardins ne servent à rien.'], 0,
      'Elle dit à la fois le point commun et la vraie différence ; les autres listent ou exagèrent. EN: common ground plus the real difference.')),
    ctl('Le piège', '« Les jardins partagés sont pleins. » Pour résumer le dossier, cette phrase est…',
      ['vraie, mais elle ne dit que le point commun', 'fausse'], 0,
      'Exacte, mais elle laisse de côté ce qui sépare les documents. EN: true but incomplete.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['synthese', 'dossier'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le genre', 'Un témoignage, dans un dossier, sert surtout à…',
    ['raconter une expérience', 'donner des chiffres'], 0,
    'Un bilan chiffre ; un témoignage raconte. EN: a testimony tells.'),
  ctl('Contre-pied', 'Prendre le contre-pied d’un document, c’est…',
    ['soutenir l’inverse', 'le résumer', 'le citer'], 0,
    'Le contre-pied : la position opposée. EN: to take the opposite line.'),
  ctl('La valeur', 'Selon l’agronome, la valeur des jardins est…',
    ['dans leurs récoltes', 'dans le voisinage qu’ils créent'], 1,
    '« Leur valeur est ailleurs : ils créent du voisinage. » EN: in the neighbourliness.'),
], ['dossier', 'synthese']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Lire le dossier',
    opener: {
      line: 'Une heure, trois documents qui ne disent pas la même chose : ici tu apprends à voir où ils se rejoignent et où ils se séparent. EN: One hour, three documents that do not say the same thing: here you learn to see where they meet and where they part.',
      imageRef: 'lessons/expose-jury/act03.jpg',
    },
    sections: [],
    milestone: 'Tu lis un dossier par genre et par voix, et tu sais en dire le point commun et la vraie différence en une phrase. EN: You read a dossier by genre and voice, and can state its common ground and real difference in one sentence.',
    estScreens: 34, restPoints: ['a3-focus'],
  },
  sections: [A3_LECTURE, A3_FOCUS, A3_TRIER, A3_EXEMPLES, A3_ATOI, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 · SYNTHÉTISER À VOIX HAUTE
 *
 *  Théo presents the same dossier in synthesis. Stance verbs, attribution
 *  without redundancy, two calques (insister que, souligner comment).
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La synthèse de Théo',
  frSub: 'Le même dossier, présenté autrement',
  lines: [ln(E(1237)), ln(E(1238)), ln(E(1239)), ln(E(1240)), ln(E(1241)), ln(E(1242)), ln(E(1243)), ln(E(1235))],
  questions: [
    { q: 'Par quoi Théo commence-t-il ?', opts: ['par ce que les trois documents ont en commun', 'par le résumé du premier document', 'par son avis personnel'], correct: 0, why: 'Il part du constat partagé, puis il montre les écarts. EN: common ground first.' },
    { q: 'Quel verbe choisit-il pour l’agronome qui avertit d’un risque ?', opts: ['mettre en garde', 'dire', 'prouver'], correct: 0, why: 'Mettre en garde contre : le verbe dit la position. EN: to warn against.' },
    { q: 'Que fait remarquer Théo, en passant, au sujet du bilan ?', opts: ['qu’il ne chiffre pas son idée', 'qu’il contient une erreur', 'qu’il est trop ancien'], correct: 0, why: '« Sans la chiffrer » : une remarque précise, sans attaque. EN: it gives no figure.' },
    { q: 'Selon Théo, sur quoi les documents divergent-ils ?', opts: ['sur ce qu’on attend d’un jardin', 'sur le nombre de parcelles', 'sur le prix des légumes'], correct: 0, why: 'Les faits sont partagés ; les attentes, non. EN: on expectations, not facts.' },
  ],
  audio: REC('rec-c1-09-theo-ecoute'),
  say: REFRAME,
  terms: ['synthese'],
};

const A4_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a4-tableau',
  layer: 'core',
  sheetId: 'sheet-synthese',
  title: 'Six verbes qui disent une position',
  cols: ['Verbe', 'Ce qu’il dit', 'Construction'],
  rows: [
    { cells: ['souligner', 'un point mis en relief', 'souligner que, souligner à quel point'], say: fr(E(1240)),
      detail: { title: 'souligner', body: 'L’auteur insiste sur un point qu’il juge important. Jamais « souligner comment » pour « à quel point ». EN: to stress.', say: fr(E(1251)) } },
    { cells: ['rappeler', 'un fait déjà connu', 'rappeler que + indicatif'], say: 'Le bilan rappelle que la ville compte quarante jardins.',
      detail: { title: 'rappeler', body: 'Pour un fait que personne ne conteste. EN: to recall a known fact.', say: 'La jardinière rappelle que les récoltes restent modestes.' } },
    { cells: ['avancer', 'une idée non prouvée', 'avancer que, avancer une idée'], say: fr(E(1243)),
      detail: { title: 'avancer', body: 'Le document propose une idée sans la démontrer ; tu marques la distance. EN: to put forward, unproven.', say: 'Le bilan avance une idée sans la chiffrer.' } },
    { cells: ['soutenir', 'une thèse défendue', 'soutenir que + indicatif'], say: fr(E(1248)),
      detail: { title: 'soutenir', body: 'L’auteur défend une position et argumente. EN: to maintain a thesis.', say: 'L’agronome soutient que leur valeur est ailleurs.' } },
    { cells: ['nuancer', 'une réserve', 'nuancer + nom'], say: 'Le témoignage nuance le bilan.',
      detail: { title: 'nuancer', body: 'Le document ne contredit pas : il limite la portée d’une idée. EN: to qualify.', say: 'La jardinière nuance l’idée d’une politique alimentaire.' } },
    { cells: ['mettre en garde', 'un risque signalé', 'mettre en garde contre + nom'], say: fr(E(1242)),
      detail: { title: 'mettre en garde', body: 'L’auteur avertit d’un danger. Suivi de contre et d’un nom. EN: to warn against.', say: 'Il met en garde contre une politique jugée sur ses récoltes.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['synthese'],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le bon verbe, la bonne attribution',
  groups: [
    grp('Quel verbe pour quelle position ?', [
      it(E(1240), 'le même point, autre conclusion'),
      it(E(1243), 'une idée sans chiffre'),
      it(E(1242), 'un avertissement'),
      it(E(1248), 'une thèse défendue'),
    ], chk(
      'Le bilan propose une idée qu’il ne démontre pas. Quel verbe le dit avec exactitude ?',
      ['Il avance que…', 'Il démontre que…', 'Il prouve que…'], 0,
      'Démontrer et prouver supposent une preuve que le bilan ne donne pas. EN: avancer keeps the distance.')),
    grp('Attribuer sans répéter', [
      it(E(1241), 'selon lui, puis l’idée'),
      it(E(1247), 'selon l’auteur, puis l’idée'),
      it(E(1249), 'le document comme sujet'),
    ], chk(
      'Après « Selon l’auteur, », que vient-il ?',
      ['l’idée elle-même : une parcelle ne nourrira jamais une famille', 'un deuxième verbe de parole : il dit que…'], 0,
      '« Selon » attribue déjà : un second « il dit » répète l’attribution. EN: selon already attributes.')),
    ctl('Rappeler', 'Pour un fait que personne ne conteste, tu choisis…',
      ['rappeler', 'avancer'], 0,
      'Avancer marquerait une distance inutile. EN: rappeler for a known fact.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['synthese'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges de la synthèse',
  rule: {
    title: 'Un verbe qui dit la position, une construction française',
    body: 'Un document ne « dit » pas seulement : il chiffre, raconte, soutient, met en garde. Attribue une fois, sans doublon, et garde les constructions françaises : insister sur, souligner à quel point. EN: a stance verb, one attribution, French constructions.',
  },
  cards: [
    trap('il dit, il dit', 'Le document 1 dit que… Le document 2 dit que…', E(1246), 'Un verbe par position, et les documents mis en relation. EN: relate them, with stance verbs.'),
    trap('selon… il dit', 'Selon l’auteur, il dit qu’une parcelle ne nourrira jamais une famille.', E(1247), '« Selon » attribue déjà. EN: one attribution is enough.'),
    trap('prouver', 'L’agronome prouve que les jardins ne servent à rien.', E(1248), 'Une tribune soutient ; et elle ne dit pas « à rien ». EN: an opinion piece maintains.'),
    trap('le doublon', 'Le témoignage, il est d’accord avec le bilan.', E(1249), 'Pas de sujet répété devant un jury. EN: no doubled subject.'),
    trap('insister que', 'Le bilan insiste que les jardins sont pleins.', E(1250), 'Insister sur le fait que ; « insister que » vient de l’anglais. EN: insister sur.'),
    trap('souligner comment', 'Elle souligne comment le jardin est important pour le quartier.', E(1251), 'Pour un degré (how important), on dit à quel point ; « comment » dit la manière. EN: à quel point for degree.'),
  ],
  drill: [
    { promptSay: 'Le bilan insiste ... le fait que les listes sont longues.', opts: ['sur', 'que'], correct: 0 },
    { promptSay: 'Selon l’agronome, ... jardin nourrit peu la ville.', opts: ['un', 'il dit qu’un'], correct: 0 },
    { promptSay: 'Elle souligne ... le jardin compte pour elle.', opts: ['à quel point', 'comment'], correct: 0 },
    { promptSay: 'L’agronome ... que les jardins nourrissent peu la ville.', opts: ['soutient', 'prouve'], correct: 0 },
    { promptSay: 'Le témoignage ... le bilan sur ce point.', opts: ['rejoint', 'il rejoint'], correct: 0 },
    { promptSay: 'Il met en garde ... un discours trop optimiste.', opts: ['contre', 'que'], correct: 0 },
    { promptSay: 'Le bilan ... une idée sans la chiffrer.', opts: ['avance', 'démontre'], correct: 0 },
    { promptSay: 'Elle insiste ... l’importance des voisins.', opts: ['sur', 'que'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-c1-09-piege-synthese'),
  say: REFRAME,
  terms: ['synthese'],
};

const A4_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a4-dictee',
  layer: 'core',
  title: 'À toi : écris les phrases de ta synthèse',
  itemIds: dicteeFor(4),
  audio: AUDIO,
  say: REFRAME,
  terms: ['synthese'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('L’ordre', 'Une synthèse orale commence par…',
    ['le point commun aux documents', 'le premier document en entier'], 0,
    'Le point commun d’abord, les écarts ensuite. EN: common ground first.'),
  ctl('Le verbe', 'Une tribune qui défend une position : l’auteur…',
    ['soutient que', 'prouve que', 'rappelle que'], 0,
    'Soutenir : défendre une thèse. Prouver irait trop loin. EN: soutenir.'),
  ctl('Le calque', 'Laquelle est correcte ?',
    ['Le bilan insiste que les jardins sont pleins.', 'Le bilan insiste sur le fait que les jardins sont pleins.'], 1,
    'Insister sur. EN: insister sur.'),
], ['synthese']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Synthétiser à voix haute',
    opener: {
      line: 'Le même dossier, présenté comme une conversation entre documents : ici tu apprends les verbes qui disent qui soutient quoi. EN: The same dossier, presented as a conversation between documents: here you learn the verbs that say who maintains what.',
      imageRef: 'lessons/expose-jury/act04.jpg',
    },
    sections: [],
    milestone: 'Tu présentes un dossier en synthèse, avec un verbe juste pour chaque position et une seule attribution. EN: You present a dossier in synthesis, with the right verb for each stance and one attribution.',
    estScreens: 38, restPoints: ['a4-tableau', 'a4-piege'],
  },
  sections: [A4_ECOUTE, A4_TABLEAU, A4_CONSTRUIRE, A4_PIEGE, A4_DICTEE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 · LA QUESTION, DITE À VOIX HAUTE
 *
 *  Three problématiques heard by a jury. Past « la leçon 23 du B2 » (the
 *  written problématique): the spoken formulas and the indirect question
 *  they need (si, ce que, ce qui, no resumptive pronoun).
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Trois questions devant le jury',
  frSub: 'Trois candidats, un même dossier',
  lines: [
    ln(E(1261)),
    F('Une question à laquelle tout le monde répond oui. Je ne vois pas ce que les documents y ajoutent.', 'A question everyone answers yes to. I do not see what the documents add to it.'),
    ln(E(1262)),
    ln(E(1263)),
    ln(E(1253)),
    F('Voilà une question que le dossier pose sans la trancher. Nous vous écoutons.', 'Now that is a question the dossier raises without settling it. We are listening.'),
  ],
  questions: [
    { q: 'Que reproche le jury à la première question ?', opts: ['tout le monde y répond oui', 'elle est trop longue', 'elle sort du sujet'], correct: 0, why: 'Une question sans débat ne laisse rien à démontrer. EN: no one disagrees, so nothing to argue.' },
    { q: 'Et à la deuxième ?', opts: ['le dossier y répond dès sa première ligne', 'elle est impolie', 'elle est trop vague'], correct: 0, why: 'Un chiffre se lit ; il ne se discute pas. EN: the dossier already answers it.' },
    { q: 'Pourquoi le jury accepte-t-il la troisième ?', opts: ['elle oppose deux réponses que le dossier ne tranche pas', 'elle cite un chiffre précis', 'elle est la plus courte'], correct: 0, why: 'Nourrir ou rassembler : la ville et l’agronome ne répondent pas pareil. EN: it sets two answers against each other.' },
    { q: 'Comment s’ouvre la troisième question ?', opts: ['par « dès lors, on peut se demander si »', 'par « ma question est la suivante »', 'par « je me demanderai »'], correct: 0, why: 'Dès lors : la question naît de ce qui précède. EN: dès lors ties the question to the dossier.' },
  ],
  audio: REC('rec-c1-09-questions-ecoute'),
  say: REFRAME,
  terms: ['question', 'jury'],
};

const A5_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-tableau',
  layer: 'core',
  sheetId: 'sheet-question',
  title: 'Six façons de dire ta question',
  cols: ['Formule', 'Ce qu’elle fait', 'Suite'],
  rows: [
    { cells: ['dès lors, on peut se demander si', 'tire la question du constat', 'si, puis sujet et verbe'], say: fr(E(1253)),
      detail: { title: 'dès lors', body: 'À partir de ce qui vient d’être dit. La question découle du dossier, le jury le sent. EN: from this, one may ask.', say: fr(E(1266)) } },
    { cells: ['toute la question est de savoir', 'resserre le débat sur un point', 'si, ce que, qui'], say: fr(E(1254)),
      detail: { title: 'toute la question', body: 'Tu dis au jury que tout tient à ce point-là. EN: everything hinges on this.', say: 'Toute la question est de savoir qui paie l’eau.' } },
    { cells: ['la question n’est pas tant de… que de…', 'écarte une fausse question', 'deux infinitifs'], say: fr(E(1255)),
      detail: { title: 'pas tant… que', body: 'Tu montres que tu as vu la question facile, et que tu la dépasses. EN: not so much this as that.', say: 'La question n’est pas tant de compter les parcelles que de savoir qui les cultive.' } },
    { cells: ['il s’agira de se demander dans quelle mesure', 'annonce une réponse nuancée', 'dans quelle mesure + indicatif'], say: fr(E(1256)),
      detail: { title: 'dans quelle mesure', body: 'La réponse sera « en partie » : ni oui ni non. EN: to what extent, a graded answer.', say: 'Il s’agira de se demander dans quelle mesure la ville doit s’en mêler.' } },
    { cells: ['reste à savoir', 'garde une question pour plus tard', 'si, dans quelle mesure'], say: fr(E(1268)),
      detail: { title: 'reste à savoir', body: 'Utile aussi en conclusion, pour l’ouverture. EN: it remains to be seen.', say: 'Reste à savoir qui entretiendra les jardins l’hiver.' } },
    { cells: ['on peut se demander ce que', 'question ouverte sur un objet', 'ce que, ce qui ; jamais qu’est-ce que'], say: fr(E(1265)),
      detail: { title: 'ce que, ce qui', body: 'Dans une question indirecte, qu’est-ce que devient ce que, et qu’est-ce qui devient ce qui. EN: indirect forms.', say: fr(E(1267)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['question'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Une vraie question, ou pas',
  groups: [
    grp('Pour ce dossier', [
      it(E(1261), 'trop large'),
      it(E(1262), 'le dossier y répond'),
      it(E(1253), 'le dossier la pose sans la trancher'),
      it(E(1264), 'la règle'),
    ], chk(
      'Laquelle est une problématique pour le dossier des jardins ?',
      [fr(E(1253)), fr(E(1261)), fr(E(1262))], 0,
      'Elle met face à face la réponse de la ville et celle de l’agronome. Les deux autres sont une question sans débat et une question de chiffre. EN: it sets two answers against each other.')),
    grp('Du sujet à la question', [
      it(E(1255), 'écarter la fausse question'),
      it(E(1256), 'annoncer une réponse nuancée'),
      it(LEG(122), 'partir des termes du sujet'),
      it(LEG(75), 'délimiter le champ'),
    ], chk(
      '« Les jardins partagés », c’est…',
      ['un sujet, pas encore une question', 'déjà une problématique'], 0,
      'Un thème ne se discute pas ; une question, oui. EN: a topic is not yet a question.')),
    ctl('Dès lors', '« Dès lors » signale que la question…',
      ['découle de ce qu’on vient de dire', 'n’a pas de rapport avec le dossier'], 0,
      'Elle naît du constat que tu viens de poser. EN: it follows from what precedes.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['question', 'dossier'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre questions indirectes mal construites',
  errors: [
    {
      wrong: 'On peut se demander est-ce que la ville doit financer ces jardins.',
      right: fr(E(1266)),
      why: 'À l’oral courant, « est-ce que » s’entend partout. Dans une question indirecte soutenue, c’est si. EN: an indirect yes-no question takes si.',
    },
    {
      wrong: 'On peut se demander qu’est-ce que les habitants attendent vraiment de ces jardins.',
      right: fr(E(1265)),
      why: 'Qu’est-ce que appartient à la question directe. Dès qu’elle dépend d’un verbe, elle devient ce que. EN: qu’est-ce que becomes ce que.',
    },
    {
      wrong: 'Je me demande qu’est-ce qui pousse les habitants vers ces jardins.',
      right: fr(E(1267)),
      why: 'Même logique pour le sujet : qu’est-ce qui devient ce qui. EN: qu’est-ce qui becomes ce qui.',
    },
    {
      wrong: 'Reste à savoir dans quelle mesure la ville doit-elle s’en mêler.',
      right: fr(E(1268)),
      why: 'Doit-elle est naturel dans une vraie question. Dans une question indirecte, on ne reprend pas le sujet par un pronom après le verbe. EN: no resumptive pronoun in an indirect question.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['question'],
};

const A5_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-atoi',
  layer: 'core',
  size: 'lg',
  title: 'À toi : ta problématique',
  frSub: 'Pour l’exposé des jardins',
  groups: [
    grp('Laquelle tires-tu de CE dossier ?', [
      it(E(1253), 'nourrir ou rassembler'),
      it(E(1255), 'utiles à quoi'),
      free('Les jardins partagés, c’est bien ou pas ?', 'Shared gardens, good or not?', 'trop large, et familier'),
    ], chk(
      'Tu dois choisir une phrase pour ton exposé. Laquelle ?',
      [fr(E(1253)), 'Les jardins partagés, c’est bien ou pas ?', fr(E(1262))], 0,
      'La seule qui oppose les réponses des documents ; les autres sont trop larges ou se règlent avec un chiffre. EN: the only one that sets the documents’ answers against each other.')),
    ctl('Après la question', 'Juste après ta problématique, tu annonces…',
      ['ton plan', 'ta conclusion', 'tes excuses pour le temps'], 0,
      'Question, puis plan : le jury sait comment tu vas répondre. EN: question, then plan.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['question', 'fil'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La question', 'Une problématique est une question que le dossier…',
    ['pose sans y répondre', 'règle dès la première ligne'], 0,
    'Sinon, il n’y a rien à démontrer. EN: one the dossier does not settle.'),
  ctl('La forme', 'Laquelle est correcte ?',
    ['On peut se demander si la ville doit financer ces jardins.', 'On peut se demander est-ce que la ville doit financer ces jardins.', 'On peut se demander si la ville doit-elle financer ces jardins.'], 0,
    'Si, puis l’ordre sujet-verbe. EN: si, then subject-verb order.'),
  ctl('Pas tant… que', '« La question n’est pas tant de savoir si… que de savoir… » sert à…',
    ['écarter une question facile pour une question plus juste', 'poser deux questions sans lien'], 0,
    'Tu montres la fausse question, puis la vraie. EN: dismiss the easy question.'),
], ['question']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'La question, à voix haute',
    opener: {
      line: 'Trois candidats, trois questions, et le jury n’en garde qu’une : ici tu apprends à dire une question que le dossier ne tranche pas. EN: Three candidates, three questions, and the jury keeps only one: here you learn to say a question the dossier does not settle.',
      imageRef: 'lessons/expose-jury/act05.jpg',
    },
    sections: [],
    milestone: 'Tu tires du dossier une vraie question et tu la dis avec la bonne formule, en question indirecte. EN: You draw a real question from the dossier and say it with the right formula, as an indirect question.',
    estScreens: 36, restPoints: ['a5-tableau'],
  },
  sections: [A5_ECOUTE, A5_TABLEAU, A5_CONSTRUIRE, A5_ERREURS, A5_ATOI, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 · TENIR LE PLAN
 *
 *  Your exposé on the gardens, as delivered. Past « la leçon 22 du B2 »
 *  (the written plan): spoken signposts, time, the oral conclusion that
 *  restates the question, the ouverture, handing over to the jury.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Ton exposé, tel que tu l’as dit',
  frSub: 'Les jardins, en quatre minutes',
  text: EXPOSE_TEXT,
  glossary: [
    { word: 'pèse', en: 'weighs, counts for', note: 'Peser peu : compter peu, avoir peu d’importance.' },
    { word: 'à ce titre', en: 'on that basis, in that capacity', note: 'Pour cette raison précise.' },
    { word: 'disposition', en: 'disposal', note: 'Je me tiens à votre disposition : je suis prêt ou prête à vous répondre.' },
  ],
  questions: [
    { q: 'Global : quels sont les deux temps de l’exposé ?', a: 'Ce que les jardins produisent, puis ce qu’ils font vraiment.' },
    { q: 'Détail : sur quel point passes-tu vite, et pourquoi ?', a: 'Sur les récoltes, parce que les documents se rejoignent et que le temps est compté.' },
    { q: 'Inférence : pourquoi redire la question avant de répondre ?', a: 'Parce qu’après plusieurs minutes, le jury l’a peut-être perdue de vue : la réponse n’a de sens qu’avec elle.' },
    { q: 'Position : la dernière question (qui ne demande même pas de parcelle) est-elle un nouvel argument ?', a: 'Non : c’est une ouverture, une question que le dossier laisse ouverte. Elle prépare aussi l’entretien.' },
  ],
  audio: REC('rec-c1-09-expose'),
  say: REFRAME,
  terms: ['balise', 'fil'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  sheetId: 'sheet-expose',
  title: 'Le plan, dit à voix haute',
  examples: [
    ex(LEG(65), 'Annoncer : trois axes.'),
    ex(LEG(87), 'Annoncer deux parties et une ouverture.'),
    ex(LEG(66), 'Entrer dans le vif du sujet.'),
    ex(LEG(72), 'Passer au deuxième axe.'),
    ex(LEG(14), 'Récapituler avant de conclure.'),
    ex(LEG(25), 'Abréger quand le temps presse.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['balise'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Une balise pour chaque moment',
  groups: [
    grp('Passer d’une partie à l’autre', [
      it(E(1269), 'ouvrir une partie'),
      it(E(1278), 'une transition'),
      it(E(1271), 'le second temps'),
      it('fr.b2.opinions-et-avis.1739', 'le mot'),
    ], chk(
      'Tu as fini ta première partie. Que dis-tu ?',
      [fr(E(1278)), fr(E(1269)), fr(E(1275))], 0,
      'Elle ferme ce que tu viens de montrer et ouvre la suite ; les autres ouvrent ou terminent l’exposé. EN: close one part, open the next.')),
    grp('Tenir son temps', [
      it(E(1270), 'abréger, en le disant'),
      it(E(1279), 'aller à l’essentiel'),
      it(E(1280), 'clore une partie'),
    ], chk(
      'Il te reste deux minutes et une partie entière. Tu dis…',
      [fr(E(1279)), 'Excusez-moi, je n’ai pas eu le temps de tout préparer.'], 0,
      'Tu montres que tu gères ton temps ; l’excuse attire l’attention sur ce qui manque. EN: manage time, do not apologise.')),
    grp('Conclure à l’oral', [
      it(E(1272), 'rappeler la question'),
      it(E(1273), 'répondre en une phrase'),
      it(E(1274), 'l’ouverture'),
      it('fr.b2.opinions-et-avis.1725', 'le mot'),
    ], chk(
      'Ta conclusion orale commence par…',
      ['rappeler ta question', 'un nouvel argument', 'le résumé des trois documents'], 0,
      'La réponse n’a de sens qu’avec la question. EN: restate the question first.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['balise', 'fil'],
};

const A6_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a6-hacks',
  layer: 'core',
  title: 'Trois astuces pour la préparation',
  hacks: [
    { hack: 'Écris ta question en haut de ta feuille, en gros, et relis-la avant chaque partie.', why: 'Le fil se perd en parlant, pas en écrivant : un regard suffit à le retrouver. EN: one glance brings the thread back.' },
    { hack: 'Ne rédige que trois phrases : la première, ta question et la dernière.', why: 'Le reste se dit à partir de mots-clés ; rédigé puis lu, il sonne comme une copie. EN: write out only three sentences.' },
    { hack: 'Prévois un point que tu peux couper.', why: 'Si le temps manque, « je passerai vite sur ce point » te sauve sans casser le plan. EN: plan a point you can cut.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['balise', 'fil'],
};

const A6_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-atoi',
  layer: 'core',
  size: 'lg',
  title: 'À toi : ta dernière phrase',
  frSub: 'Avant que le jury prenne la parole',
  groups: [
    grp('Comment passes-tu la parole ?', [
      it(E(1275), 'remercier, s’offrir aux questions'),
      free('Voilà, c’est tout.', 'There, that is all.', 'le « voilà » du rapport'),
      free('Bon, je crois que j’ai fini.', 'Well, I think I have finished.', 'une fin qui s’excuse'),
    ], chk(
      'Laquelle passe la parole au jury avec netteté ?',
      [fr(E(1275)), 'Voilà, c’est tout.', 'Bon, je crois que j’ai fini.'], 0,
      'Elle remercie et ouvre l’entretien ; les deux autres laissent le jury sans conclusion. EN: thank and hand over.')),
    ctl('L’ouverture', 'L’ouverture qui précède ta dernière phrase…',
      ['pose une question que le dossier laisse ouverte', 'ajoute un troisième argument'], 0,
      'Elle élargit sans rouvrir la démonstration. EN: it widens, it does not add an argument.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['balise'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La balise', 'À l’oral, une balise remplace…',
    ['les titres que le lecteur verrait', 'les exemples'], 0,
    'Le jury n’a pas de titres sous les yeux. EN: signposts replace headings.'),
  ctl('Le temps', '« Pour ne pas dépasser mon temps, je passerai vite sur ce point » montre que tu…',
    ['gères ton exposé', 'as mal préparé'], 0,
    'Abréger en le disant, c’est garder la main. EN: cutting openly shows control.'),
  ctl('La conclusion', 'Dans ta conclusion orale, l’ordre est…',
    ['la question, la réponse, l’ouverture', 'l’ouverture, la réponse, la question', 'un nouvel argument, puis merci'], 0,
    'Rappeler, répondre, ouvrir, puis passer la parole. EN: restate, answer, open.'),
], ['balise', 'fil']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Tenir le plan',
    opener: {
      line: 'Quatre minutes sans notes à relire, et un jury qui doit savoir à chaque instant où tu en es : ici tu apprends les balises de l’oral. EN: Four minutes with no notes to read and a jury that must know where you are at every moment: here you learn the signposts of a talk.',
      imageRef: 'lessons/expose-jury/act06.jpg',
    },
    sections: [],
    milestone: 'Tu tiens ton plan à voix haute, tu gères ton temps et tu conclus en revenant à ta question. EN: You hold your plan aloud, manage your time and conclude by returning to your question.',
    estScreens: 36, restPoints: ['a6-exemples'],
  },
  sections: [A6_LECTURE, A6_EXEMPLES, A6_CONSTRUIRE, A6_HACKS, A6_ATOI, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 · DEVANT LE JURY
 *
 *  The first question. Past « la leçon 26 du B2 » (the meeting floor): the
 *  formal floor toward a jury, vous throughout; reformulate, ask for a
 *  precision, answer first, then check.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'La première question',
  frSub: 'M. Aubertin prend la parole',
  setting: 'L’exposé est fini. Tu viens de remercier le jury. M. Aubertin consulte ses notes, puis lève les yeux.',
  bubbles: [
    { from: 'coach', fr: 'Merci. Vous parlez de lien social. J’aimerais savoir comment on le mesure.', en: 'Thank you. You talk about social ties. I would like to know how one measures them.' },
    { from: 'user', fr: 'C’est une question qui touche au cœur du sujet.', en: 'That is a question that goes to the heart of the subject.', warn: 'Un temps pour réfléchir' },
    { from: 'user', fr: 'Si je comprends bien, vous me demandez comment une ville pourrait vérifier ce lien.', en: 'If I understand correctly, you are asking how a city could check that tie.', warn: 'Reformuler' },
    { from: 'coach', fr: 'C’est cela. Une ville a besoin d’indicateurs.', en: 'That is it. A city needs indicators.' },
    { from: 'user', fr: 'Pas en kilos, en tout cas : plutôt en voisins qui se connaissent.', en: 'Not in kilos, at any rate: rather in neighbours who know each other.', warn: 'La réponse d’abord' },
    { from: 'user', fr: 'On pourrait compter les ateliers ouverts au quartier, et les jardiniers qui reviennent d’une année sur l’autre.', en: 'One could count the workshops open to the neighbourhood, and the gardeners who come back from one year to the next.', warn: 'Puis la précision' },
    { from: 'coach', fr: 'Merci, c’est précis.', en: 'Thank you, that is precise.' },
  ],
  closing: { fr: 'Reformuler, répondre, préciser : trois temps, et le vous du début à la fin.', en: 'Rephrase, answer, specify: three steps, and vous from start to finish.' },
  audio: REC('rec-c1-09-question'),
  say: REFRAME,
  terms: ['jury'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-jury',
  title: 'Quatre gestes devant le jury',
  frSub: 'Plus formel qu’en réunion',
  hint: 'Quatre cartes, dans l’ordre où tu les fais.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['jury'],
  cards: [
    card(E(1281), 'Reformuler', 'la reformulation',
      `Tu vérifies que tu as compris, et tu gagnes un instant. En réunion, ${REUNION_REF} t’a donné « si je vous suis bien » ; devant un jury, tu redis la question entière. EN: restate the whole question.`),
    card(E(1282), 'Demander une précision', 'la précision',
      'Un mot de la question est flou : demande ce qu’il veut dire avant de répondre. EN: ask what a word means.'),
    card(E(1283), 'Répondre d’abord', 'la réponse',
      'La réponse vient en premier, la nuance ensuite. Un jury qui attend trois phrases sa réponse décroche. EN: answer first, qualify after.'),
    card(E(1284), 'Vérifier', 'la vérification',
      'Une question courte à la fin, et le jury te dit s’il veut aller plus loin. EN: check you have answered.'),
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Reformuler, préciser, répondre',
  groups: [
    grp('Reformuler la question du jury', [
      it(E(1285), 'aller au fond de la question'),
      it(E(1281), 'redire toute la question'),
      it(E(1287), 'reprendre un mot'),
      it(E(1288), 'le geste'),
    ], chk(
      'M. Aubertin : « Un jardin doit-il être rentable ? » Tu commences par…',
      [fr(E(1285)), 'Oui.', 'Je préférerais parler d’autre chose.'], 0,
      'Tu montres que tu as compris l’enjeu, puis tu réponds ; un oui sec ferme l’échange. EN: show the stakes, then answer.')),
    grp('Quand tu ne comprends pas', [
      it(E(1292), 'demander une reformulation'),
      it(E(1282), 'demander le sens d’un mot'),
      it(E(1293), 'confirmer, puis préciser'),
    ], chk(
      'Tu n’es pas sûr du sens de « rentable » dans la question. Tu dis…',
      [fr(E(1282)), 'Quoi ?', 'Je ne réponds pas à cette question.'], 0,
      'Une demande de précision est un geste attendu, pas un aveu de faiblesse. EN: asking is expected.')),
    ctl('Le vous', 'Avec le jury, pendant tout l’entretien, tu dis…',
      ['vous', 'tu, dès que l’échange se détend'], 0,
      'Le jury reste vous jusqu’au dernier mot. EN: vous to the end.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jury'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre réponses qui coûtent des points',
  errors: [
    {
      wrong: 'Tu veux dire que les jardins coûtent trop cher ?',
      right: 'Vous voulez dire que les jardins coûtent trop cher ?',
      why: 'Le jury sourit, l’échange s’anime, et le tu échappe. Avec un jury, c’est vous jusqu’au bout. EN: the jury stays vous.',
    },
    {
      wrong: 'Ouais, c’est ça.',
      right: fr(E(1293)),
      why: 'Naturel entre amis, ce oui sonne désinvolte devant un jury. EN: too casual for a jury.',
    },
    {
      wrong: 'Votre question, je la comprends pas.',
      right: fr(E(1292)),
      why: 'Ne pas comprendre n’est pas une faute. Le dire sans ne, sans demande et sans formule, oui, devant un jury. EN: ask for a rephrase, formally.',
    },
    {
      wrong: 'Ça dépend.',
      right: fr(E(1294)),
      why: 'Souvent vrai, mais seul, cela ferme la réponse. Dis de quoi cela dépend et ce que tu en penses. EN: say what it depends on.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jury'],
};

/** USE: the first questions, rehearsed. ONE APOSTROPHE STYLE (’); no reused
 *  row in any turn. */
const A7_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a7-scenario',
  layer: 'core',
  title: 'À toi : les premières questions',
  setting: 'L’entretien commence. M. Aubertin et Mme Rocheval te posent leurs premières questions sur ton exposé des jardins. Ils te vouvoient ; tu les vouvoies.',
  turns: [
    {
      ai: 'Vous parlez de lien social. Comment le mesure-t-on ?',
      en: 'You talk about social ties. How does one measure them?',
      user: 'Si je comprends bien, vous me demandez comment une ville pourrait le vérifier. Pas en kilos, en tout cas : plutôt en voisins qui se connaissent.',
      userEn: 'If I understand correctly, you are asking how a city could check it. Not in kilos, at any rate: rather in neighbours who know each other. (Rephrase, then answer first.)',
      alts: [
        { fr: 'Vous me demandez, au fond, comment prouver ce lien. Je dirais : par ce que les gens font ensemble.', en: 'At bottom you are asking how to prove that tie. I would say: by what people do together.' },
        { fr: 'C’est une question qui touche au cœur du sujet. On peut compter les jardiniers qui reviennent d’une année sur l’autre.', en: 'That question goes to the heart of the subject. One can count the gardeners who come back from one year to the next.' },
      ],
    },
    {
      ai: 'Concrètement, que compteriez-vous ?',
      en: 'In concrete terms, what would you count?',
      user: 'Les ateliers ouverts au quartier, et les jardiniers qui reviennent d’une année sur l’autre.',
      userEn: 'The workshops open to the neighbourhood, and the gardeners who come back from one year to the next. (A direct, concrete answer.)',
      alts: [
        { fr: 'Par exemple, le nombre de voisins qui viennent aux journées portes ouvertes.', en: 'For example, the number of neighbours who come to the open days.' },
        { fr: 'Je partirais des parcelles collectives : combien de personnes les cultivent ensemble.', en: 'I would start from the shared plots: how many people grow them together.' },
      ],
    },
    {
      ai: 'Et si un jardin était rentable, ce serait mieux ?',
      en: 'And if a garden were profitable, would that be better?',
      user: 'Pourriez-vous préciser ce que vous entendez par « rentable » ? En légumes, j’en doute ; en liens, il l’est déjà.',
      userEn: 'Could you say what you mean by « profitable »? In vegetables, I doubt it; in ties, it already is. (Ask for a precision, then answer both ways.)',
      alts: [
        { fr: 'Tout dépend du sens que vous donnez à « rentable ». S’il s’agit de récoltes, je ne le crois pas.', en: 'It all depends on the meaning you give to « profitable ». If it is about harvests, I do not think so.' },
        { fr: 'Rentable en quel sens, si je puis me permettre ? En argent, non ; pour le quartier, oui.', en: 'Profitable in what sense, if I may ask? In money, no; for the neighbourhood, yes.' },
      ],
    },
    {
      ai: 'En légumes, disons.',
      en: 'In vegetables, let us say.',
      user: 'Alors je réponds non : le dossier montre qu’un jardin nourrit peu la ville. Ai-je répondu à votre question ?',
      userEn: 'Then my answer is no: the dossier shows that a garden feeds the city little. Have I answered your question? (Answer, source, check.)',
      alts: [
        { fr: 'Dans ce cas, non : même l’agronome le dit, une parcelle ne nourrira jamais une famille.', en: 'In that case, no: even the agronomist says so, a plot will never feed a family.' },
        { fr: 'Non, et c’est justement ma thèse : leur valeur est ailleurs. Souhaitez-vous que je précise ?', en: 'No, and that is precisely my thesis: their value lies elsewhere. Would you like me to say more?' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jury', 'fil'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('L’ordre', 'Devant une question du jury, l’ordre est…',
    ['reformuler, répondre, nuancer, vérifier', 'nuancer, nuancer, puis répondre si on a le temps'], 0,
    'La réponse vient tôt ; la nuance la suit. EN: answer early.'),
  ctl('La précision', 'Un mot de la question est flou. Tu…',
    ['demandes ce qu’il veut dire', 'réponds au hasard', 'changes de sujet'], 0,
    'Pourriez-vous préciser ce que vous entendez par… EN: ask.'),
  ctl('Le registre', 'Lequel est juste devant un jury ?',
    ['Oui, c’est bien cela.', 'Ouais, c’est ça.'], 0,
    'Le registre soutenu tient jusqu’au bout. EN: formal throughout.'),
], ['jury']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Devant le jury',
    opener: {
      line: 'L’exposé est fini et le jury lève les yeux de ses notes : ici tu apprends à prendre la parole devant lui, en vous, question après question. EN: The exposé is over and the jury looks up from its notes: here you learn to take the floor before it, in vous, question after question.',
      imageRef: 'lessons/expose-jury/act07.jpg',
    },
    sections: [],
    milestone: 'Devant le jury, tu reformules, tu demandes une précision quand il le faut, tu réponds d’abord et tu vérifies. EN: Before the jury, you rephrase, ask for a precision when needed, answer first and check.',
    estScreens: 38, restPoints: ['a7-cartes', 'a7-erreurs'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_CONSTRUIRE, A7_ERREURS, A7_SCENARIO, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 · GAGNER DU TEMPS
 *
 *  One hard question, three answers: the filler, the invented figure, the
 *  candidate who thinks aloud. Then the meeting-room anglicisms that creep
 *  in when the candidate is under pressure.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Une question, trois réponses',
  frSub: 'Mme Rocheval demande un chiffre',
  lines: [
    ln(E(1310)),
    F('Euh… alors… c’est une bonne question… je dirais… pas mal d’argent, quoi.', 'Er… well… that is a good question… I would say… quite a lot of money, you know.'),
    F('Exactement quatre-vingt-sept mille euros par an.', 'Exactly eighty-seven thousand euros a year.'),
    ln(E(1296)),
    ln(E(1297)),
    F('D’un côté, ce que la ville paie au départ ; de l’autre, ce qu’elle paie chaque année.', 'On the one hand, what the city pays at the start; on the other, what it pays every year.'),
    ln(E(1298)),
    ln(E(1299)),
  ],
  questions: [
    { q: 'Que fait le premier candidat ?', opts: ['il remplit le silence sans rien dire', 'il invente un chiffre', 'il distingue deux coûts'], correct: 0, why: 'Des mots de remplissage et une réponse vague : il meuble. EN: he fills the silence.' },
    { q: 'Quel est le problème de la deuxième réponse ?', opts: ['un chiffre que le dossier ne donne pas', 'un registre familier', 'une réponse trop longue'], correct: 0, why: 'Le dossier ne contient aucun coût : ce chiffre est inventé, et le jury le sait. EN: an invented figure.' },
    { q: 'Comment la troisième candidate gagne-t-elle du temps ?', opts: ['elle reconnaît la difficulté, puis distingue deux coûts', 'elle demande à changer de question', 'elle se tait longuement'], correct: 0, why: 'Elle pense à voix haute, et chaque phrase avance. EN: she thinks aloud.' },
    { q: 'Que fait-elle quand le chiffre exact lui manque ?', opts: ['elle donne un ordre de grandeur, sans inventer', 'elle invente un chiffre rond', 'elle refuse de répondre'], correct: 0, why: 'Elle dit ce qu’elle sait, et ce qu’elle ne sait pas. EN: what she knows, and what she does not.' },
  ],
  audio: REC('rec-c1-09-temps-ecoute'),
  say: REFRAME,
  terms: ['temps'],
};

const A8_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-tableau',
  layer: 'core',
  sheetId: 'sheet-jury',
  title: 'Six phrases pour gagner du temps',
  cols: ['Formule', 'Ce qu’elle fait', 'Attention'],
  rows: [
    { cells: ['Permettez-moi d’y réfléchir un instant.', 'demande un temps, poliment', 'un instant, pas une minute'], say: fr(E(1295)),
      detail: { title: 'demander un instant', body: 'Trois ou quatre secondes de silence assumé valent mieux que dix secondes de « euh ». EN: a short, owned pause.', say: fr(E(1295)) } },
    { cells: ['C’est une question qui mérite qu’on s’y arrête.', 'reconnaît la difficulté', 'puis réponds vraiment'], say: fr(E(1296)),
      detail: { title: 'reconnaître la difficulté', body: 'Une fois, pas à chaque question : répétée, la formule devient un tic. EN: once, not every time.', say: fr(E(1296)) } },
    { cells: ['Je distinguerais deux choses.', 'structure la réponse', 'nomme bien les deux'], say: fr(E(1297)),
      detail: { title: 'distinguer', body: 'Distinguer, c’est déjà répondre : tu montres où passe la difficulté. EN: distinguishing is answering.', say: 'Je distinguerais ce que la ville paie au départ et ce qu’elle paie chaque année.' } },
    { cells: ['En première analyse, je dirais que…', 'une première réponse, révisable', 'tu peux l’affiner ensuite'], say: fr(E(1299)),
      detail: { title: 'en première analyse', body: 'Tu réponds tout de suite et tu te gardes le droit de préciser. EN: answer now, refine later.', say: fr(E(1299)) } },
    { cells: ['Je n’ai pas le chiffre exact en tête…', 'avoue une lacune', 'donne un ordre de grandeur'], say: fr(E(1298)),
      detail: { title: 'ne pas savoir', body: 'Un jury pardonne une lacune avouée, pas un chiffre inventé. EN: an admitted gap is forgiven.', say: fr(E(1298)) } },
    { cells: ['Le dossier ne donne pas ce chiffre.', 'refuse d’inventer', 'jamais de chiffre inventé'], say: fr(E(1300)),
      detail: { title: 'ne pas inventer', body: 'Tu rappelles la source, et ta rigueur devient un argument. EN: rigour becomes an argument.', say: fr(E(1300)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Gagner du temps ou meubler',
  groups: [
    grp('Réfléchir à voix haute', [
      it(E(1295), 'un instant'),
      it(E(1296), 'la difficulté'),
      it(E(1452), 'distinguer, de la leçon 21 du C1'),
      it(E(1301), 'ce qu’il faut éviter'),
    ], chk(
      'Laquelle te donne du temps ET fait avancer la réponse ?',
      [fr(E(1297)), 'Euh… alors… voilà…', 'C’est une bonne question, une très bonne question.'], 0,
      'Distinguer structure déjà la réponse ; les deux autres remplissent le silence. EN: it buys time and moves on.')),
    grp('Ne pas savoir, sans inventer', [
      it(E(1298), 'un ordre de grandeur'),
      it(E(1300), 'refuser d’inventer'),
      it(E(1303), 'la formule'),
    ], chk(
      'Le jury te demande un chiffre absent du dossier. Tu…',
      ['dis que le dossier ne le donne pas et proposes un ordre de grandeur', 'donnes un chiffre précis pour paraître sûr de toi'], 0,
      'Un chiffre inventé ruine la confiance du jury dans tout le reste. EN: an invented figure undermines everything.')),
    ctl('En première analyse', '« En première analyse » annonce…',
      ['une réponse que tu pourras affiner', 'ta conclusion définitive'], 0,
      'Une première réponse, tout de suite, et la place pour préciser. EN: a first answer.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Six anglicismes sous pression',
  rule: {
    title: 'Gagner du temps en français, pas en anglais',
    body: 'Sous pression, l’anglais remonte mot à mot : make sense, basically, definitely, address, as a matter of fact. Chacun a sa forme française, aussi courte. EN: under pressure, translate the move, not the words.',
  },
  cards: [
    trap('make sense', 'Votre objection fait du sens.', E(1304), 'Faire du sens calque to make sense ; on dit avoir du sens. EN: avoir du sens.'),
    trap('basically', 'Basiquement, la question est celle du coût.', E(1305), 'Basiquement veut dire « de façon basique ». Pour basically : au fond, en gros. EN: au fond.'),
    trap('definitely', 'C’est définitivement un point important.', E(1306), 'Définitivement veut dire « pour toujours ». Pour definitely : assurément. EN: assurément.'),
    trap('get back to you', 'Je vais revenir à vous sur ce point.', E(1307), 'Pour get back to you, « revenir à vous » calque l’anglais : dis j’y reviens, ou je reviendrai vers vous. EN: j’y reviens.'),
    trap('address', 'Je vais adresser cette question en deux temps.', E(1308), 'On adresse une lettre ; une question, on la traite. EN: traiter une question.'),
    trap('as a matter of fact', 'Comme une question de fait, la ville paie surtout l’eau et les clôtures.', E(1309), 'Mot à mot, la phrase ne veut rien dire. As a matter of fact : en fait. EN: en fait.'),
  ],
  drill: [
    { promptSay: 'Votre objection ... du sens.', opts: ['a', 'fait'], correct: 0 },
    { promptSay: '... , la question est celle du coût.', opts: ['Au fond', 'Basiquement'], correct: 0 },
    { promptSay: 'C’est ... un point important.', opts: ['assurément', 'définitivement'], correct: 0 },
    { promptSay: 'Je vais ... cette question en deux temps.', opts: ['traiter', 'adresser'], correct: 0 },
    { promptSay: '... , la ville paie surtout l’eau.', opts: ['En fait', 'Comme une question de fait'], correct: 0 },
    { promptSay: 'Cette distinction ... du sens.', opts: ['a', 'fait'], correct: 0 },
    { promptSay: 'Je n’ai pas le chiffre exact en ... .', opts: ['tête', 'esprit'], correct: 0 },
    { promptSay: 'J’y ... dans un instant.', opts: ['reviens', 'reviens à vous'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-c1-09-piege-temps'),
  say: REFRAME,
  terms: ['temps'],
};

const A8_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-atoi',
  layer: 'core',
  size: 'lg',
  title: 'À toi : la question qui te prend de court',
  groups: [
    grp('Ta première phrase', [
      it(E(1296), 'reconnaître la difficulté'),
      it(E(1297), 'distinguer'),
      it(E(1300), 'ne pas inventer'),
    ], chk(
      'Mme Rocheval : « Combien coûte un jardin à la ville ? » Tu commences par…',
      [fr(E(1296)), 'Euh… je ne sais pas trop, pas mal d’argent.', 'Exactement quatre-vingt-sept mille euros.'], 0,
      'Tu prends un instant sans meubler et sans inventer, puis tu distingues. EN: a pause that leads somewhere.')),
    ctl('La suite', 'Juste après, tu…',
      ['distingues deux coûts et donnes un ordre de grandeur', 'changes de sujet'], 0,
      'Le temps gagné sert à répondre. EN: use the time to answer.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps', 'fil'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Meubler', 'Meubler le silence, c’est…',
    ['parler pour ne rien dire', 'demander un instant pour réfléchir'], 0,
    'Le contraire de gagner du temps. EN: filling, not thinking.'),
  ctl('Le chiffre', 'Un chiffre absent du dossier, tu…',
    ['ne l’inventes jamais', 'l’inventes s’il est plausible', 'le demandes au jury'], 0,
    'Le dossier ne le donne pas, et tu le dis. EN: never invent.'),
  ctl('L’anglicisme', 'Laquelle est juste ?',
    ['C’est assurément un point important.', 'C’est définitivement un point important.'], 0,
    'Définitivement veut dire pour toujours. EN: assurément.'),
], ['temps']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Gagner du temps',
    opener: {
      line: 'Une question à laquelle tu ne sais pas répondre tout de suite : ici tu apprends à réfléchir à voix haute sans meubler, et à ne rien inventer. EN: A question you cannot answer straight away: here you learn to think aloud without filling the silence, and to invent nothing.',
      imageRef: 'lessons/expose-jury/act08.jpg',
    },
    sections: [],
    milestone: 'Devant une question difficile, tu prends un instant, tu distingues, tu dis ce que tu sais et tu n’inventes rien. EN: Faced with a hard question, you take a moment, distinguish, say what you know and invent nothing.',
    estScreens: 38, restPoints: ['a8-tableau', 'a8-piege'],
  },
  sections: [A8_ECOUTE, A8_TABLEAU, A8_CONSTRUIRE, A8_PIEGE, A8_ATOI, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 · CONCÉDER SANS LÂCHER SON FIL
 *
 *  The objection about the waiting list, transcribed. Past « la leçon 23 du
 *  B2 » (written concession then rebuttal): conceding IN PUBLIC, under
 *  questioning: grant the point, name its scope, narrow, maintain.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'L’objection de M. Aubertin',
  frSub: 'Un extrait de l’entretien',
  text: ENTRETIEN_TEXT,
  glossary: [
    { word: 'étendre', en: 'to extend, to widen', note: 'Faire profiter plus de monde de quelque chose.' },
    { word: 'changent de mains', en: 'change hands', note: 'Passent d’une personne à une autre.' },
    { word: 'renverser', en: 'to overturn', note: 'Renverser une position : la faire tomber entièrement.' },
  ],
  questions: [
    { q: 'Global : que reproche M. Aubertin à la thèse du candidat ?', a: 'Que les jardins rassemblent surtout ceux qui ont déjà une parcelle : trois cents personnes attendent.' },
    { q: 'Détail : que concède le candidat, exactement ?', a: 'Que trois cents noms en attente, c’est beaucoup, et que le dossier ne dit pas qui sont ces personnes.' },
    { q: 'Inférence : pourquoi dit-il « je ne dis pas que…, je dis que… » ?', a: 'Pour resserrer sa thèse : il ne soutient pas que les jardins sont ouverts à tous, mais qu’ils créent du lien là où ils existent.' },
    { q: 'Position : le candidat change-t-il d’avis à la fin ?', a: 'Non : il nuance sa proposition, garde sa thèse (une valeur d’abord sociale) et ajoute qu’il faut en partager l’accès.' },
  ],
  audio: REC('rec-c1-09-entretien'),
  say: REFRAME,
  terms: ['conceder', 'portee', 'fil'],
};

const A9_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-tableau',
  layer: 'core',
  sheetId: 'sheet-jury',
  title: 'Six temps pour concéder',
  cols: ['Formule', 'Ce qu’elle fait', 'Ce qu’elle garde'],
  rows: [
    { cells: ['Vous avez raison de le souligner', 'reconnaît le point', 'ta question'], say: fr(E(1312)),
      detail: { title: 'reconnaître', body: 'Tu commences par ce qui est juste dans l’objection : le jury voit que tu écoutes. EN: start with what is right.', say: fr(E(1312)) } },
    { cells: ['Je vous accorde que…', 'concède une part', 'le reste de ta thèse'], say: fr(E(1313)),
      detail: { title: 'accorder', body: 'Accorder que, le plus souvent à l’indicatif : tu admets un fait, pas toute la conclusion. EN: grant a fact, not the conclusion.', say: fr(E(1326)) } },
    { cells: ['Votre remarque m’oblige à préciser', 'annonce une précision', 'ta position, plus nette'], say: fr(E(1314)),
      detail: { title: 'préciser', body: 'L’objection devient une chance de mieux dire ce que tu pensais déjà. EN: the objection sharpens your point.', say: fr(E(1324)) } },
    { cells: ['Je ne dis pas que…, je dis que…', 'resserre la thèse', 'ce que tu soutiens vraiment'], say: fr(E(1315)),
      detail: { title: 'resserrer', body: `Tu l’as entendue dans ${DEBATS_REF} ; ici, c’est toi qui la dis. Une thèse resserrée se défend mieux. EN: narrow the claim.`, say: fr(E(1315)) } },
    { cells: ['Cela nuance ma position sans la renverser', 'mesure l’effet de l’objection', 'le cœur de ta position'], say: fr(E(1316)),
      detail: { title: 'mesurer', body: 'Tu dis toi-même jusqu’où l’objection porte, avant que le jury ne le fasse. EN: say how far the objection reaches.', say: fr(E(1316)) } },
    { cells: ['Je maintiens néanmoins que…', 'revient au fil', 'ta thèse'], say: fr(E(1317)),
      detail: { title: 'maintenir', body: 'Maintenir que + indicatif. La dernière phrase de la réponse ramène à ta question. EN: end on your thread.', say: fr(E(1317)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conceder', 'portee'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Concéder, resserrer, maintenir',
  groups: [
    grp('Nommer ce que l’objection touche', [
      it(E(1325), 'la portée'),
      it(E(1326), 'accorder, maintenir'),
      it(E(1461), 'entendu dans la leçon 21 du C1'),
      it('fr.b2.opinions-et-avis.1712', 'le mot'),
    ], chk(
      'M. Aubertin : « Trois cents personnes attendent. » Quelle réponse concède sans abandonner ?',
      [fr(E(1324)), 'Vous avez raison, je n’y avais pas pensé.', 'Non, ce n’est pas un problème.'], 0,
      'Elle reconnaît le point et annonce une précision ; les autres abandonnent ou nient. EN: grant, then refine.')),
    grp('Le stock d’examen', [
      it(LEG(161), 'concéder une limite'),
      it(LEG(142), 'certes… mais'),
      it(LEG(128), 'nuancer un constat'),
      it(LEG(149), 'préciser une condition'),
      it(E(1462), 'resserrer, de la leçon 21 du C1'),
    ], chk(
      'Ces phrases concèdent quelque chose. Que gardent-elles ?',
      ['une position, nuancée mais maintenue', 'rien : elles abandonnent la thèse'], 0,
      'Une concession limite une thèse ; elle ne la supprime pas. EN: a concession limits, it does not erase.')),
    ctl('La portée', 'Avant de répondre à une objection, tu te demandes…',
      ['sur quelle partie de ta thèse elle porte', 'comment la contredire au plus vite'], 0,
      'Tu concèdes cette partie, et seulement elle. EN: concede that part only.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conceder', 'portee'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre réponses qui lâchent le fil',
  errors: [
    {
      wrong: 'Vous avez raison, je n’y avais pas pensé.',
      right: fr(E(1324)),
      why: 'La phrase du rapport. Reconnaître est juste ; s’arrêter là, c’est abandonner une thèse dont une partie tient toujours. EN: grant, then say what still holds.',
    },
    {
      wrong: 'Non, ce n’est pas vrai.',
      right: fr(E(1312)),
      why: 'Défendre sa thèse est un bon réflexe, mais nier une objection juste te fait paraître sourd. Reconnais, puis précise. EN: denying a fair point sounds deaf.',
    },
    {
      wrong: 'Vous avez raison, les jardins ne servent donc à rien.',
      right: fr(E(1326)),
      why: 'Tu concèdes plus que l’objection : elle portait sur l’accès, pas sur la valeur. EN: do not concede more than was claimed.',
    },
    {
      wrong: 'Pardon, pardon, je me suis complètement trompé.',
      right: fr(E(1318)),
      why: 'Par politesse, on s’excuse ; mais l’excuse répétée transforme une précision en échec. Dis que tu t’es mal fait comprendre, puis précise. EN: reframe, do not apologise.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conceder', 'fil'],
};

/** USE: the objections, rehearsed. ONE APOSTROPHE STYLE (’); no reused row
 *  in any turn. */
const A9_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a9-scenario',
  layer: 'core',
  title: 'À toi : l’objection',
  setting: 'M. Aubertin et Mme Rocheval contestent ta thèse sur les jardins. Tu concèdes ce qui est juste, sans lâcher ta question. Tout se passe en vous.',
  turns: [
    {
      ai: 'Trois cents personnes attendent une parcelle. Vos jardins rassemblent surtout ceux qui en ont déjà une, non ?',
      en: 'Three hundred people are waiting for a plot. Your gardens mainly bring together those who already have one, don’t they?',
      user: 'Vous avez raison de le souligner : la liste d’attente pose un problème d’accès. Cela nuance ma position sans la renverser.',
      userEn: 'You are right to point it out: the waiting list raises a problem of access. That qualifies my position without overturning it. (Grant, then measure.)',
      alts: [
        { fr: 'Je vous accorde que trois cents noms, c’est beaucoup. Mais votre objection porte sur l’accès, pas sur la valeur des jardins.', en: 'I grant you that three hundred names is a lot. But your objection is about access, not about the value of the gardens.' },
        { fr: 'C’est une objection sérieuse, et c’est d’ailleurs la question que j’ai laissée ouverte.', en: 'It is a serious objection, and it is in fact the question I left open.' },
      ],
    },
    {
      ai: 'Mais alors, que reste-t-il de votre thèse ?',
      en: 'But then, what is left of your thesis?',
      user: 'Je ne dis pas que les jardins sont ouverts à tous ; je dis qu’ils créent du lien là où ils existent, et qu’il faut étendre ce lien.',
      userEn: 'I am not saying the gardens are open to all; I am saying they create ties where they exist, and that those ties should be extended. (Narrow the claim.)',
      alts: [
        { fr: 'L’essentiel : leur valeur est sociale. Votre remarque m’oblige seulement à préciser à qui elle profite.', en: 'The essential point: their value is social. Your remark only obliges me to specify who benefits.' },
        { fr: 'Une thèse plus étroite, mais plus solide : là où il existe, le jardin rassemble.', en: 'A narrower but sturdier thesis: where it exists, the garden brings people together.' },
      ],
    },
    {
      ai: 'Limiter les parcelles à deux ans, ce serait chasser votre jardinière.',
      en: 'Limiting plots to two years would drive your gardener out.',
      user: 'C’est une objection sérieuse, et je la prends au sérieux. On pourrait garder des parcelles collectives, ouvertes à tous, à côté des parcelles individuelles.',
      userEn: 'It is a serious objection, and I take it seriously. One could keep shared plots, open to all, alongside individual plots. (Take it seriously, then adjust the proposal.)',
      alts: [
        { fr: 'Vous avez raison, et cela m’amène à préciser : la limite vaudrait pour les parcelles individuelles seulement.', en: 'You are right, and that leads me to specify: the limit would apply to individual plots only.' },
        { fr: 'Sur ce point, je me suis sans doute mal fait comprendre : je pensais aux nouvelles parcelles, pas aux anciennes.', en: 'On this point, I probably did not make myself clear: I meant new plots, not existing ones.' },
      ],
    },
    {
      ai: 'Donc vous changez d’avis ?',
      en: 'So you are changing your mind?',
      user: 'Non : l’accès, je vous l’accorde ; la valeur, je la maintiens. Votre question m’a simplement permis de préciser.',
      userEn: 'No: access, I grant you; the value, I maintain. Your question simply allowed me to be more precise. (Back to the thread.)',
      alts: [
        { fr: 'Je maintiens néanmoins que leur valeur est d’abord sociale ; il faut aussi en partager l’accès.', en: 'I nonetheless maintain that their value is first and foremost social; access must be shared too.' },
        { fr: 'J’ai nuancé ma proposition, pas ma question : un jardin partagé se juge d’abord à ce qu’il rassemble.', en: 'I qualified my proposal, not my question: a shared garden is judged first by what it brings together.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conceder', 'portee', 'fil'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Concéder', 'Concéder un point, c’est…',
    ['reconnaître qu’il est juste sans abandonner le reste', 'changer de thèse', 'faire semblant d’être d’accord'], 0,
    'Un point, pas toute la position. EN: one point, not the whole position.'),
  ctl('La portée', '« Votre objection porte sur l’accès, pas sur la valeur. » Cette phrase…',
    ['délimite ce que tu concèdes', 'refuse l’objection en bloc'], 0,
    'Tu dis jusqu’où l’objection va. EN: you map its reach.'),
  ctl('Le fil', 'Ta réponse à une objection se termine par…',
    ['ta thèse, précisée', 'des excuses', 'une nouvelle question au jury'], 0,
    'La dernière phrase ramène au fil. EN: end on your thread.'),
], ['conceder', 'fil']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Concéder sans lâcher son fil',
    opener: {
      line: 'Le jury a raison sur un point, et toute ta thèse semble vaciller : ici tu apprends à concéder ce point sans lâcher ta question. EN: The jury is right on one point and your whole thesis seems to wobble: here you learn to concede that point without letting go of your question.',
      imageRef: 'lessons/expose-jury/act09.jpg',
    },
    sections: [],
    milestone: 'Tu concèdes ce qui est juste, tu dis jusqu’où l’objection porte, et tu maintiens ta thèse, resserrée. EN: You concede what is right, say how far the objection reaches, and maintain your thesis, narrowed.',
    estScreens: 38, restPoints: ['a9-tableau', 'a9-erreurs'],
  },
  sections: [A9_LECTURE, A9_TABLEAU, A9_CONSTRUIRE, A9_ERREURS, A9_SCENARIO, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 · QUAND LE JURY POUSSE
 *
 *  Three pushes: the personal view, a question outside the dossier, a
 *  hypothesis, then a false choice. The B2 moods recycled under load (la
 *  leçon 6 du B2).
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le jury pousse plus loin',
  frSub: 'Quatre questions hors du chemin',
  lines: [
    ln(E(1334)),
    ln(E(1328)),
    F('J’aime l’idée d’apprendre quelque chose de mes voisins.', 'I like the idea of learning something from my neighbours.'),
    F('Et les jardins sur les toits d’entreprises, qu’en pensez-vous ?', 'And gardens on company roofs, what do you think of them?'),
    ln(E(1327)),
    F('Ils rassemblent des collègues, pas des voisins : ce n’est pas tout à fait le même lien.', 'They bring colleagues together, not neighbours: it is not quite the same tie.'),
    ln(E(1332)),
    ln(E(1333)),
    F('Au fond, il faudrait choisir : nourrir la ville, ou la rassembler.', 'At bottom, one would have to choose: feed the city, or bring it together.'),
    ln(E(1329)),
  ],
  questions: [
    { q: 'Que fait la candidate quand on lui demande son avis personnel ?', opts: ['elle le donne en le signalant, avec une raison', 'elle refuse de répondre', 'elle cite le dossier'], correct: 0, why: '« À titre personnel » : elle sort du dossier en le disant, puis donne une raison. EN: she flags it and gives a reason.' },
    { q: 'Que dit-elle avant de parler des toits d’entreprises ?', opts: ['que le dossier n’en parle pas', 'qu’elle ne sait rien du sujet', 'que la question est hors sujet'], correct: 0, why: 'Elle situe sa réponse hors du dossier, puis répond quand même. EN: she says the dossier does not cover it.' },
    { q: 'Dans l’hypothèse d’une ville sans budget, que garderait-elle ?', opts: ['les parcelles collectives', 'les parcelles individuelles', 'rien du tout'], correct: 0, why: 'Celles qui rassemblent le plus : sa réponse suit son fil. EN: the shared plots.' },
    { q: 'Comment répond-elle au choix imposé à la fin ?', opts: ['elle refuse de choisir entre les deux', 'elle choisit de nourrir', 'elle choisit de rassembler'], correct: 0, why: 'Elle montre que le choix est faux, au subjonctif : « qu’il faille ». EN: she refuses the false choice.' },
  ],
  audio: REC('rec-c1-09-pousser-ecoute'),
  say: REFRAME,
  terms: ['jury', 'fil'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-jury',
  title: 'Quatre réponses quand le jury pousse',
  frSub: 'Hors du dossier, sans perdre le fil',
  hint: 'Quatre cartes, quatre façons de pousser.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['jury', 'fil'],
  cards: [
    card(E(1327), 'Sortir du dossier', 'hors dossier',
      'Dis que le dossier n’en parle pas, puis réponds : le jury veut voir ta pensée, pas seulement ta lecture. EN: flag it, then answer.'),
    card(E(1330), 'L’avis personnel', 'à titre personnel',
      'Tu signales que tu parles en ton nom, tu donnes un avis et une raison. EN: say it is your own view, with a reason.'),
    card(E(1329), 'Le faux choix', 'le dilemme',
      `Le faux dilemme, ${ARGUMENTATION_REF} t’a appris à le repérer dans un texte ; devant un jury, tu le refuses poliment, au subjonctif. EN: refuse a false choice, politely.`),
    card(E(1333), 'L’hypothèse', 'si…',
      'Tu entres dans l’hypothèse sans la discuter, au conditionnel, et ta réponse reste fidèle à ton fil. EN: accept the hypothesis, answer in the conditional.'),
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Répondre sans se laisser déplacer',
  groups: [
    grp('Quand le jury déforme ta thèse', [
      it(E(1437), 'définir le mot, de la leçon 21 du C1'),
      it(E(1465), 'refuser une déformation, de la leçon 21 du C1'),
      it('fr.b2.opinions-et-avis.1773', 'le mot, de la leçon 23 du B2'),
      it(E(1331), 'le geste'),
    ], chk(
      'M. Aubertin : « Donc, selon vous, les jardins ne nourrissent personne. » Tu réponds…',
      ['Pas personne : très peu. C’est différent, et c’est ce que dit le dossier.', 'Oui, exactement.', 'Je ne sais pas.'], 0,
      'Il élargit ta thèse ; tu la ramènes à sa vraie portée, calmement. EN: bring it back to its real scope.')),
    grp('Nuancer sans fuir', [
      it(LEG(132), 'refuser la réduction'),
      it(LEG(134), 'refuser la généralisation'),
      it(LEG(155), 'reconnaître un obstacle'),
    ], chk(
      'Ces trois phrases du stock d’examen servent à…',
      ['nuancer une idée trop simple', 'changer de sujet', 'éviter de répondre'], 0,
      'Elles complètent ou limitent une idée, sans quitter la question. EN: they qualify, they do not dodge.')),
    ctl('L’avis', 'Le jury demande ton avis personnel. Tu…',
      ['le donnes, en disant que tu sors du dossier', 'réponds que le dossier n’en dit rien, et t’arrêtes'], 0,
      'Le jury attend une pensée, signalée comme telle. EN: give it, flagged.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jury', 'portee'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Six modes qui lâchent sous pression',
  rule: {
    title: 'Sous pression, garde le bon mode',
    body: `Doute, nécessité, faible probabilité, concession : le subjonctif (douter que, il faut que, il est peu probable que, bien que, à moins que). Opinion affirmée : l’indicatif (je pense que). C’est ${MODES_REF}, sous la pression du jury. EN: B2 moods, under load.`,
  },
  cards: [
    trap('douter que', 'Je doute que les jardins font baisser le prix des légumes.', E(1335), 'Douter que appelle le subjonctif : fassent. EN: fassent.'),
    trap('il faut que', 'Il faut que la ville paiera l’eau et les clôtures.', E(1336), 'Il faut que : toujours le subjonctif, jamais le futur. EN: paie.'),
    trap('penser que', 'À titre personnel, je pense que ce soit une bonne idée.', E(1337), 'Penser que, à la forme affirmative : l’indicatif. EN: indicative after an affirmative penser.'),
    trap('bien que', 'Bien que le dossier ne dit rien des toits, la question se pose.', E(1338), 'Bien que : subjonctif, dise. EN: dise.'),
    trap('à moins que', 'À moins que la ville peut payer l’eau, le projet restera fragile.', E(1339), 'À moins que + subjonctif, souvent avec un ne explétif. EN: puisse.'),
    trap('peu probable que', 'Il est peu probable que les toits sont plus faciles à cultiver.', E(1340), 'Il est peu probable que : subjonctif, soient. EN: soient.'),
  ],
  drill: [
    { promptSay: 'Je doute que les jardins ... baisser les prix.', opts: ['fassent', 'font'], correct: 0 },
    { promptSay: 'Il faut que la ville ... l’eau.', opts: ['paie', 'paiera'], correct: 0 },
    { promptSay: 'Je pense que c’... une bonne idée.', opts: ['est', 'soit'], correct: 0 },
    { promptSay: 'Bien que le dossier ne ... rien des toits, la question se pose.', opts: ['dise', 'dit'], correct: 0 },
    { promptSay: 'À moins que la ville ne ... payer l’eau, le projet restera fragile.', opts: ['puisse', 'peut'], correct: 0 },
    { promptSay: 'Je crains que le budget ne ... pas.', opts: ['suffise', 'suffit'], correct: 0 },
    { promptSay: 'Il est possible que la ville ... d’autres jardins.', opts: ['ouvre', 'ouvrira'], correct: 0 },
    { promptSay: 'Il est clair que ces chiffres ... justes.', opts: ['sont', 'soient'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-c1-09-piege-modes'),
  say: REFRAME,
  terms: ['jury'],
};

const A10_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-atoi',
  layer: 'core',
  size: 'lg',
  title: 'À toi : « Et vous, personnellement ? »',
  groups: [
    grp('Ton avis, signalé', [
      it(E(1328), 'un avis, en ton nom'),
      it(E(1337), 'une opinion, à l’indicatif'),
      free('Je n’ai pas d’avis, le dossier ne le dit pas.', 'I have no view; the dossier does not say.', 'une esquive'),
    ], chk(
      'Mme Rocheval veut ton avis personnel. Tu dis…',
      [fr(E(1328)), 'Je n’ai pas d’avis, le dossier ne le dit pas.', 'Ça dépend des gens.'], 0,
      'Un avis signalé, puis une raison ; les deux autres esquivent. EN: a flagged view, then a reason.')),
    ctl('Ensuite', 'Après ton avis, tu…',
      ['donnes une raison et reviens à ta question', 't’arrêtes là'], 0,
      'Même hors du dossier, le fil tient. EN: back to the thread.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jury', 'fil'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Hors dossier', 'Une question sur un sujet absent du dossier, tu…',
    ['le dis, puis réponds', 'refuses d’y répondre'], 0,
    'Le jury teste ta pensée, pas ta mémoire du dossier. EN: flag it, then answer.'),
  ctl('Le faux choix', '« Il faudrait choisir : nourrir ou rassembler. » La meilleure réponse…',
    ['montre qu’on n’est pas obligé de choisir', 'choisit au hasard', 'change de sujet'], 0,
    'Je ne crois pas qu’il faille choisir entre… EN: refuse the false choice.'),
  ctl('Le mode', 'Laquelle est correcte ?',
    ['Bien que le dossier ne dise rien des toits, la question se pose.', 'Bien que le dossier ne dit rien des toits, la question se pose.'], 0,
    'Bien que + subjonctif. EN: subjunctive.'),
], ['jury', 'fil']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Quand le jury pousse',
    opener: {
      line: 'Le jury sort du dossier, te demande ton avis, invente une hypothèse : ici tu apprends à répondre sans te laisser déplacer. EN: The jury leaves the dossier, asks your opinion, invents a hypothesis: here you learn to answer without being pushed off course.',
      imageRef: 'lessons/expose-jury/act10.jpg',
    },
    sections: [],
    milestone: 'Hors du dossier, devant une hypothèse ou un faux choix, tu réponds en le signalant, au bon mode, et tu reviens à ton fil. EN: Outside the dossier, faced with a hypothesis or a false choice, you answer, flag it, use the right mood and return to your thread.',
    estScreens: 38, restPoints: ['a10-cartes', 'a10-piege'],
  },
  sections: [A10_ECOUTE, A10_CARTES, A10_CONSTRUIRE, A10_PIEGE, A10_ATOI, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 · CLORE L’ENTRETIEN
 *
 *  The last two minutes, recorded. One sentence that ties the thread off,
 *  what the exchange made clearer, thanks; no « voilà », no apology.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a11-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Les deux dernières minutes',
  frSub: 'Le jury referme ses notes',
  lines: [
    F('Une toute dernière question : votre ouverture, sur ceux qui ne demandent pas de parcelle, que proposeriez-vous ?', 'One very last question: your closing point, about those who do not ask for a plot, what would you suggest?'),
    F('Je commencerais par aller les chercher : une journée portes ouvertes par saison, annoncée dans les écoles du quartier.', 'I would start by going to find them: an open day each season, announced in the local schools.'),
    ln(E(1347)),
    ln(E(1345)),
    ln(E(1343)),
    ln(E(1344)),
    F('Merci à vous.', 'Thank you.'),
  ],
  questions: [
    { q: 'Que propose la candidate pour ceux qui ne demandent pas de parcelle ?', opts: ['aller les chercher, avec des journées portes ouvertes', 'leur réserver des parcelles', 'fermer la liste d’attente'], correct: 0, why: 'Une proposition concrète, qui répond à son ouverture. EN: open days, announced in schools.' },
    { q: 'Quand le jury n’a plus de questions, que fait-elle d’abord ?', opts: ['elle redit son fil en une phrase', 'elle s’excuse pour son français', 'elle résume le dossier'], correct: 0, why: '« Mon fil n’a pas changé » : la question et sa réponse. EN: she restates her thread.' },
    { q: 'Que dit-elle que l’entretien lui a apporté ?', opts: ['une précision sur l’accès', 'un changement de position', 'un nouvel argument'], correct: 0, why: 'Elle nomme ce que les questions ont précisé, sans changer de thèse. EN: a point made clearer.' },
    { q: 'Comment finit-elle ?', opts: ['par un remerciement pour l’échange', 'par « voilà »', 'par une question au jury'], correct: 0, why: 'Un merci, et c’est tout. EN: thanks, nothing more.' },
  ],
  audio: REC('rec-c1-09-cloture-ecoute'),
  say: REFRAME,
  terms: ['cloture', 'fil'],
};

const A11_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a11-focus',
  layer: 'core',
  sheetId: 'sheet-jury',
  title: 'Ce que contient une bonne fin',
  points: [
    'Une phrase pour ton fil : ta question et ta réponse, telles que l’échange les a précisées. EN: your thread in one sentence.',
    'Ce que les questions t’ont fait préciser, nommé simplement. EN: what the questions made clearer.',
    'Un remerciement pour l’échange, sans formule de plus. EN: thanks for the exchange.',
    'Rien de nouveau : ni argument, ni excuse, ni « voilà ». EN: nothing new, no apology.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cloture', 'fil'],
};

const A11_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-construire',
  layer: 'core',
  size: 'lg',
  title: 'Les phrases de la fin',
  groups: [
    grp('Annoncer et nouer la fin', [
      it(E(1342), 'annoncer la phrase finale'),
      it(E(1346), 'nuancer sans changer de question'),
      it(LEG(49), 'remercier, du stock d’examen'),
      it(LEG(50), 'laisser une question en suspens'),
    ], chk(
      'Le jury se tait et referme ses notes. Tu dis…',
      [fr(E(1342)), 'Bon, ben, voilà.', 'C’est déjà fini ?'], 0,
      'Tu annonces la fin et tu la donnes ; les deux autres laissent le jury sans conclusion. EN: announce and deliver the end.')),
    grp('Le stock d’examen', [
      it(LEG(20), 'une position redite'),
      it(LEG(45), 'une fin qui ouvre'),
    ], chk(
      'Ces deux phrases sont correctes. Laquelle redit une position ?',
      [fr(LEG(20)), fr(LEG(45))], 0,
      'Favorable, mais prudente : une position nuancée. L’autre clôt l’exposé sans rien dire de la thèse. EN: one restates a position.')),
    ctl('L’apport', 'Ce que l’entretien t’a fait préciser, tu le…',
      ['nommes en une phrase', 'caches pour ne pas paraître faible'], 0,
      'Nommer ce qui a été précisé montre que tu as écouté. EN: name it.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cloture'],
};

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a11-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre fins qui gâchent l’entretien',
  errors: [
    {
      wrong: 'Voilà, c’est tout.',
      right: fr(E(1345)),
      why: 'Le « voilà » du rapport : il laisse le jury sans conclusion. Redis ton fil en une phrase. EN: restate your thread.',
    },
    {
      wrong: 'J’espère que c’était bien.',
      right: fr(E(1344)),
      why: 'Tu demandes un avis que le jury ne donnera pas. Un remerciement suffit. EN: just thank them.',
    },
    {
      wrong: 'Je m’excuse pour mon français.',
      right: fr(E(1343)),
      why: 'La modestie part d’un bon sentiment, mais l’excuse finale attire l’attention sur ce qui manquait. Termine sur ce que l’échange a apporté. EN: end on what the exchange brought.',
    },
    {
      wrong: 'Finalement, je ne sais plus trop ce que je pense.',
      right: fr(E(1346)),
      why: 'Tu as nuancé, tu n’as pas changé de question : dis-le. Un doute lancé à la dernière phrase efface tout l’entretien. EN: you refined, you did not change.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cloture', 'fil'],
};

const A11_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-atoi',
  layer: 'core',
  size: 'lg',
  title: 'À toi : ta toute dernière phrase',
  groups: [
    grp('Laquelle ramène au fil ?', [
      it(E(1345), 'le fil, noué'),
      it(E(1348), 'une limite, dite avant de finir'),
      free('Voilà, j’ai fini.', 'There, I have finished.', 'une fin sans conclusion'),
    ], chk(
      'Laquelle termine l’entretien sur ta question ?',
      [fr(E(1345)), 'Voilà, j’ai fini.', 'J’espère que c’était bien.'], 0,
      'Elle redit la question et sa réponse, telles que l’échange les a précisées. EN: it ties the thread off.')),
    ctl('La règle', 'On finit l’entretien comme…',
      ['l’exposé : la question et sa réponse', 'une conversation : au revoir et à bientôt'], 0,
      'La fin de l’entretien répond au début de l’exposé. EN: the end answers the beginning.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cloture', 'fil'],
};

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('La fin', 'La dernière phrase de l’entretien…',
    ['redit ta question et ta réponse', 'apporte un nouvel argument'], 0,
    'Rien de nouveau à la fin. EN: nothing new at the end.'),
  ctl('L’excuse', 'S’excuser pour son français en partant…',
    ['attire l’attention sur ce qui manquait', 'rassure toujours le jury'], 0,
    'Termine sur ce que l’échange a apporté. EN: end on what the exchange brought.'),
  ctl('Le merci', 'Pour remercier le jury, tu dis…',
    ['Je vous remercie pour cet échange.', 'Merci, bonne journée, à plus.', 'J’espère que c’était bien.'], 0,
    'Simple et soutenu. EN: simple and formal.'),
], ['cloture']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Clore l’entretien',
    opener: {
      line: 'Le jury n’a plus de questions et te laisse le dernier mot : ici tu apprends à le dire en une phrase, sans « voilà » et sans excuse. EN: The jury has no more questions and leaves you the last word: here you learn to say it in one sentence, with no « voilà » and no apology.',
      imageRef: 'lessons/expose-jury/act11.jpg',
    },
    sections: [],
    milestone: 'Tu clos l’entretien en redisant ton fil, en nommant ce qu’il a précisé, et en remerciant le jury. EN: You close the interview by restating your thread, naming what it made clearer and thanking the jury.',
    estScreens: 34, restPoints: ['a11-focus'],
  },
  sections: [A11_ECOUTE, A11_FOCUS, A11_CONSTRUIRE, A11_ERREURS, A11_ATOI, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 · À TOI, DEVANT LE JURY
 *
 *  An annotated model exposé on a DIFFERENT dossier (silence on trains),
 *  the plan, the scripted jury turns on the task’s dossier (decision 19),
 *  THE TASK (spoken exposé, 180 to 300 s, the app’s own format), then the
 *  closing sections and the one quiz.
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_MODELE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-modele',
  layer: 'core',
  questionsInModal: true,
  title: 'Un exposé modèle',
  frSub: 'Le silence dans les trains',
  text: MODELE_TEXT,
  glossary: [
    { word: 'communiqué', en: 'press release, official statement', note: 'Un texte qu’une institution diffuse pour annoncer quelque chose.' },
    { word: 'banlieue', en: 'suburbs', note: 'Les lignes de banlieue relient la ville à ses communes voisines.' },
    { word: 'faire la police', en: 'to police, to enforce order', note: 'Ici : faire respecter la règle soi-même.' },
    { word: 'courtoisie', en: 'courtesy', note: 'Une politesse qu’on choisit, sans obligation.' },
  ],
  questions: [
    { q: 'Global : que fait l’oratrice, du début à la fin ?', a: 'Elle présente le dossier, en fait la synthèse, pose sa problématique, annonce deux temps, les développe, revient à sa question, ouvre, puis passe la parole.' },
    { q: 'Détail : sur quoi les documents se rejoignent-ils, et sur quoi divergent-ils ?', a: 'Ils se rejoignent sur la fatigue que cause le bruit ; ils divergent sur la manière d’obtenir le calme.' },
    { q: 'Inférence : pourquoi sa réponse est-elle nuancée ?', a: 'Parce qu’elle ne choisit ni la règle ni la courtoisie seule : une règle dans quelques voitures, une courtoisie partout ailleurs.' },
    { q: 'Grille : quelle phrase porte la problématique ?', a: '« Dès lors, on peut se demander si le silence doit être une règle ou une courtoisie. »' },
  ],
  audio: REC('rec-c1-09-modele'),
  say: REFRAME,
  terms: ['format', 'question'],
};

/** The annotation: which line meets which criterion of the grid. */
const A12_ANNOTE: Sec<'examples'> = {
  type: 'examples',
  id: 'a12-annote',
  layer: 'core',
  title: 'Le modèle, annoté',
  examples: [
    ex(E(1352), 'Synthèse : le point commun d’abord.'),
    ex(E(1353), 'Synthèse : puis la vraie divergence.'),
    ex(E(1354), 'Question : la problématique, avec dès lors.'),
    ex(E(1355), 'Plan : deux temps, annoncés.'),
    ex(E(1356), 'Position : une réponse nuancée, qui revient à la question.'),
    ex(E(1357), 'Ouverture : une question que le dossier laisse ouverte.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['format', 'synthese'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  sheetId: 'sheet-format',
  title: 'Cinq temps pour ton oral',
  steps: [
    '1. Lis le dossier par genre et par voix ; note le point commun et la vraie divergence. EN: read for genre and voice.',
    '2. Tire une question que le dossier ne tranche pas, et écris-la en haut de ta feuille. EN: draw out a question and write it at the top.',
    '3. Annonce : le dossier, sa synthèse, ta question, ton plan en deux temps. EN: announce dossier, synthesis, question, plan.',
    '4. Développe chaque temps avec une balise et des verbes qui disent la position des documents. EN: develop each stage with signposts and stance verbs.',
    '5. Conclus : ta question, ta réponse en une phrase, une ouverture, puis passe la parole au jury. EN: conclude, open, hand over.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['format', 'fil'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  title: 'Les règles à garder en tête',
  cases: [
    uc('Tu ouvres le dossier, une heure avant l’oral', E(1236)),
    uc('Tu cherches la question de ton exposé', E(1260)),
    uc('Il te reste une minute pour conclure', E(1277)),
    uc('Le jury prend la parole', E(1291)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['format', 'jury'],
};

/** Say it out loud: the scripted jury turns on the TASK’s dossier
 *  (decision 19). ONE APOSTROPHE STYLE (’); no reused row in any turn. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'Le jury, après ton exposé',
  setting: 'Tu viens de présenter le dossier « Réparer plutôt que racheter ». Mme Rocheval et M. Aubertin te questionnent, en vous. Réponds en vous, et tiens ton fil.',
  turns: [
    {
      ai: 'Merci. Vous dites que la réparation commence chez les habitants. Mais deux soirs par semaine, est-ce suffisant ?',
      en: 'Thank you. You say repair starts with residents. But two evenings a week, is that enough?',
      user: 'Si je comprends bien, vous me demandez si l’atelier peut répondre à toute la demande. En première analyse, je dirais que non, et le dossier ne prétend pas le contraire.',
      userEn: 'If I understand correctly, you are asking whether the workshop can meet all the demand. As a first answer, I would say no, and the dossier does not claim otherwise. (Rephrase, answer first.)',
      alts: [
        { fr: 'C’est une question qui mérite qu’on s’y arrête. Deux soirs, c’est un début ; le communiqué parle d’un premier atelier.', en: 'It is a question worth stopping on. Two evenings is a start; the release speaks of a first workshop.' },
        { fr: 'Vous me demandez, au fond, si l’atelier suffit. Je ne le crois pas, et c’est justement ma thèse.', en: 'At bottom you are asking whether the workshop is enough. I do not think so, and that is precisely my thesis.' },
      ],
    },
    {
      ai: 'Combien d’objets un tel atelier répare-t-il par an ?',
      en: 'How many objects does a workshop like that repair a year?',
      user: 'Le dossier ne donne pas ce chiffre, et je préfère ne pas l’inventer. Ce qu’il dit, en revanche, c’est que certaines pièces sont introuvables.',
      userEn: 'The dossier does not give that figure, and I would rather not invent it. What it does say is that some parts cannot be found. (Do not invent; return to the dossier.)',
      alts: [
        { fr: 'Je n’ai pas ce chiffre en tête, et le dossier ne le donne pas ; je retiens surtout la limite que signale la couturière.', en: 'I do not have that figure in mind, and the dossier does not give it; what I retain is the limit the seamstress points out.' },
        { fr: 'Permettez-moi une précaution : aucun document ne chiffre l’activité de l’atelier.', en: 'Allow me one note of caution: no document puts a figure on the workshop’s activity.' },
      ],
    },
    {
      ai: 'Votre économiste exagère : les gens réparent depuis toujours, sans attendre les fabricants.',
      en: 'Your economist exaggerates: people have always repaired things, without waiting for manufacturers.',
      user: 'Vous avez raison de le souligner : on réparait bien avant les ateliers. Cela nuance son propos sans le renverser : sans pièces, même un bon bricoleur s’arrête.',
      userEn: 'You are right to point it out: people repaired long before workshops. That qualifies his point without overturning it: without parts, even a good handyman stops. (Grant, measure, maintain.)',
      alts: [
        { fr: 'Je vous accorde que la réparation est ancienne. Votre remarque porte sur l’habitude ; la sienne, sur les pièces.', en: 'I grant you that repair is old. Your remark is about habit; his is about parts.' },
        { fr: 'C’est une objection sérieuse. Je maintiens néanmoins qu’un objet sans pièce de rechange ne se répare pas.', en: 'It is a serious objection. I nonetheless maintain that an object without spare parts cannot be repaired.' },
      ],
    },
    {
      ai: 'Donc, selon vous, l’atelier ne sert à rien.',
      en: 'So, in your view, the workshop is useless.',
      user: 'Je ne dis pas que l’atelier ne sert à rien ; je dis qu’il ne suffit pas. Il rend aux habitants un savoir-faire, et c’est déjà beaucoup.',
      userEn: 'I am not saying the workshop is useless; I am saying it is not enough. It gives residents back a skill, and that is already a great deal. (Refuse the distortion, narrow the claim.)',
      alts: [
        { fr: 'Pas à rien : à beaucoup, mais pas à tout. C’est toute la différence.', en: 'Not useless: very useful, but not enough on its own. That is the whole difference.' },
        { fr: 'Ce serait aller plus loin que moi. L’atelier est utile, à condition de ne pas servir d’alibi.', en: 'That would go further than I do. The workshop is useful, provided it is not used as an alibi.' },
      ],
    },
    {
      ai: 'Et vous, personnellement, faites-vous réparer vos objets ?',
      en: 'And you, personally, do you have your things repaired?',
      user: 'À titre personnel, oui, quand je trouve la pièce. C’est d’ailleurs ce qui m’a fait choisir ce dossier.',
      userEn: 'Speaking personally, yes, when I can find the part. That is in fact what made me choose this dossier. (A flagged personal view.)',
      alts: [
        { fr: 'Le dossier ne l’aborde pas, mais je peux vous répondre : j’ai déjà fait réparer un vélo, jamais un grille-pain.', en: 'The dossier does not deal with it, but I can answer: I have had a bike repaired, never a toaster.' },
        { fr: 'Personnellement, j’essaie, et je bute souvent sur la même chose que la couturière : les pièces.', en: 'Personally, I try, and I often run into the same thing as the seamstress: the parts.' },
      ],
    },
    {
      ai: 'Nous n’avons plus de questions. Voulez-vous ajouter quelque chose ?',
      en: 'We have no more questions. Would you like to add anything?',
      user: 'Une seule phrase : la réparation commence chez les habitants, mais elle ne durera que si les fabricants la rendent possible. Je vous remercie pour cet échange.',
      userEn: 'Just one sentence: repair starts with residents, but it will only last if manufacturers make it possible. Thank you for this exchange. (Tie off the thread, then thanks.)',
      alts: [
        { fr: 'Vos questions m’ont permis de préciser un point : l’atelier est utile, pas suffisant. Merci pour cet échange.', en: 'Your questions allowed me to clarify one point: the workshop is useful, not sufficient. Thank you for this exchange.' },
        { fr: 'Mon fil n’a pas changé : la réparation relève des deux, mais elle dépend d’abord des pièces. Je vous remercie.', en: 'My thread has not changed: repair is a matter for both, but it depends first on parts. Thank you.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['jury', 'conceder', 'fil'],
};

/** THE GRADED TASK, spoken, in the app’s own format (decision 19). No live
 *  speech grading exists: the learner records, then self-checks against the
 *  annotated model and the six criteria. */
const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Ton exposé devant le jury',
  frSub: 'Oral · format de l’application',
  brief: `Tu passes l’oral blanc de l’Institut Verlune. Voici ton dossier :\n\n${TASK_DOC}\n\nPrépare-toi d’abord : lis les trois documents, trouve ce qui les rassemble et ce qui les sépare, tire une question que le dossier ne tranche pas, et rédige seulement ta première phrase, ta question et ta dernière phrase. Puis présente ton exposé comme si le jury était en face de toi. Ce format, un exposé de trois à cinq minutes suivi des questions du jury, est celui de l’application.`,
  briefEn: 'You are taking the Institut Verlune mock oral. Your dossier is above. Prepare first: read the three documents, find what unites and what separates them, draw out a question the dossier does not settle, and write out only your first sentence, your question and your last sentence. Then give your exposé as if the jury were in front of you. This format, a three-to-five-minute exposé followed by the jury’s questions, is the app’s own.',
  produce: 'Enregistre un exposé de trois à cinq minutes adressé au jury : présente le dossier en synthèse, pose ta problématique, annonce et suis un plan en deux temps, conclus en revenant à ta question avec une ouverture, puis passe la parole au jury.',
  responseSpec: { kind: 'audio', minDurationS: 180, maxDurationS: 300 },
  rubric: {
    criteria: [
      {
        key: 'synthese',
        label: 'Le dossier en synthèse',
        maxPoints: 4,
        descriptors: [
          '4 : Les trois documents sont présentés fidèlement et mis en relation : leur point commun, puis leur vraie divergence, avec un verbe qui dit la position de chacun. Rien n’est inventé.',
          '3 : Les documents sont mis en relation, mais un verbe trahit une position (prouver pour soutenir), ou un détail du dossier est déformé.',
          '2 : Les documents sont résumés l’un après l’autre, sans être reliés.',
          '1 : Un document manque, ou l’exposé avance des faits que le dossier ne donne pas.',
        ],
      },
      {
        key: 'question',
        label: 'Une vraie question, un plan tenu',
        maxPoints: 4,
        descriptors: [
          '4 : Une problématique que le dossier ne tranche pas, dite clairement ; un plan annoncé, suivi, signalé par des balises ; la conclusion revient à la question.',
          '3 : La question et le plan sont là, mais une balise manque, ou la conclusion ne reprend pas la question.',
          '2 : La question est trop large, ou le dossier y répond déjà ; le plan est annoncé mais pas suivi.',
          '1 : Pas de question : l’exposé résume.',
        ],
      },
      {
        key: 'position',
        label: 'Une réponse nuancée et argumentée',
        maxPoints: 3,
        descriptors: [
          '3 : Ta réponse est claire et nuancée, appuyée sur les documents, et ton ouverture pose une question que le dossier laisse ouverte.',
          '2 : Une réponse, mais tranchée sans nuance, ou appuyée sur un seul document.',
          '1 : Pas de réponse à la question posée, ou une ouverture qui ajoute un argument nouveau.',
        ],
      },
      {
        key: 'oral',
        label: 'Un exposé qui se parle',
        maxPoints: 3,
        descriptors: [
          '3 : En te réécoutant : tu t’adresses au jury, tu annonces, tu renvoies au temps de l’exposé, ton débit est régulier, tu restes entre trois et cinq minutes et tu passes la parole à la fin.',
          '2 : On entend une copie lue par moments, ou la durée déborde, ou la fin s’arrête sur un « voilà ».',
          '1 : Un texte lu d’un bout à l’autre, sans adresse au jury.',
        ],
      },
      {
        key: 'precision',
        label: 'Précision et nuance du vocabulaire',
        maxPoints: 3,
        descriptors: [
          '3 : Les formules de la leçon sont là et variées : se rejoindre sur, prendre le contre-pied de, soutenir, mettre en garde contre, dès lors, la question n’est pas tant… que.',
          '2 : Quelques formules, souvent les mêmes (dit, parle de).',
          '1 : Un vocabulaire trop général pour distinguer les positions des documents.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 3,
        descriptors: [
          '3 : Les structures difficiles sont justes : question indirecte sans pronom repris, constructions des verbes (insister sur, porter sur), subjonctif après les tournures qui l’exigent.',
          '2 : Quelques erreurs sur ces structures, sans gêner la compréhension.',
          '1 : Des erreurs fréquentes qui gênent l’écoute.',
        ],
      },
    ],
  },
  scaffold: [
    'Le dossier que j’ai choisi réunit…',
    'Les trois documents se rejoignent sur un point :',
    'Là où ils divergent, c’est…',
    'Dès lors, on peut se demander si…',
    'Je vous propose de traiter cette question en deux temps :',
    'Premier temps, donc,',
    'J’en viens à mon second temps.',
    'Je reviens à ma question de départ.',
    'Reste une question que le dossier laisse ouverte :',
  ],
  modelAnswer: TASK_MODEL,
  modelAnswerEn: 'Thank you. The dossier I chose brings together three documents on repairing objects: the release from the City of Sainte-Albine announcing its first repair workshop, the testimony of Lucie Fortier, a volunteer seamstress, and the column by the economist Bertrand Ollivier.\nThe three documents agree on one point: repairing is better than buying again. Where they part ways is on who has to act. The city relies on residents and volunteers; the economist maintains that nothing will change without manufacturers; the seamstress, between the two, describes both what the workshop brings and what it lacks. That being so, one may ask whether repair is first a matter for residents or for manufacturers. I suggest dealing with this question in two stages: what a neighbourhood workshop can do, then what it cannot do alone.\nFirst stage, then: what the workshop can do. The release announces it: two evenings a week, volunteers will help residents repair their appliances, bikes and clothes. Lucie Fortier stresses the real benefit: you arrive with a toaster and leave having learned something. So the workshop does not just repair objects; it gives residents back a skill. One can also see it as a meeting place: neighbours who would never have spoken spend an evening around a bike. For the city, the workshop is a simple, inexpensive and visible gesture.\nI now come to my second stage. The same testimony warns against too much optimism: some parts cannot be found, and sometimes nothing can be done. That is precisely Bertrand Ollivier’s point: a neighbourhood workshop repairs objects, it does not change the way they are made. Without available parts and reasonable prices, the best will in the world runs out. In other words, volunteers can repair a toaster; they cannot make anyone manufacture the missing part. The problem therefore lies upstream, where objects are designed and sold.\nI come back to my starting question. My answer fits in one sentence: repair starts with residents, but it will only last if manufacturers make it possible. The city workshop is therefore useful, provided it does not serve as an alibi: a city should not think, because it has opened a workshop, that it is done with the question. One question the dossier leaves open: who, the city or the state, can oblige a manufacturer to sell its parts? Thank you; I am at your disposal for your questions.',
  watchFor: [
    {
      pattern: 'The documents summarised one after another (le premier document dit…, le deuxième document dit…), never related.',
      criterion: 'synthese',
      feedback: 'Fais-les dialoguer : d’abord ce qui les rassemble, puis ce qui les sépare.',
      ref: 'a3-trier',
    },
    {
      pattern: 'A stance verb that misstates a document (l’économiste prouve, la ville démontre) or the same verb dire for every document.',
      criterion: 'precision',
      feedback: 'Une chronique soutient ; un communiqué annonce ; un témoignage raconte. Choisis le verbe qui dit la position.',
      ref: 'a4-tableau',
    },
    {
      pattern: 'Facts invented beyond the dossier: a number of repairs, a budget, a law, a manufacturer’s name.',
      criterion: 'synthese',
      feedback: 'Le dossier ne le dit pas. Ce que tu présentes doit venir du dossier ; ton avis, lui, est libre.',
      ref: 'a8-construire',
    },
    {
      pattern: 'No problématique, or a question the dossier already answers (combien de soirs l’atelier ouvre-t-il), or a question everyone answers yes to (faut-il réparer ?).',
      criterion: 'question',
      feedback: 'Tire une question que les documents ne tranchent pas : habitants ou fabricants ?',
      ref: 'a5-construire',
    },
    {
      pattern: 'An indirect question with inversion or est-ce que (on peut se demander si la réparation relève-t-elle…, on peut se demander est-ce que…).',
      criterion: 'correction',
      feedback: 'Question indirecte : si, puis le sujet et le verbe, sans pronom repris.',
      ref: 'a5-erreurs',
    },
    {
      pattern: 'A plan announced but not followed, or no signpost between the two parts.',
      criterion: 'question',
      feedback: 'Signale chaque passage : premier temps, donc… ; j’en viens à mon second temps.',
      ref: 'a6-construire',
    },
    {
      pattern: 'A conclusion that adds a new argument, or does not return to the question.',
      criterion: 'position',
      feedback: 'Reviens à ta question, réponds en une phrase, puis ouvre.',
      ref: 'a6-lecture',
    },
    {
      pattern: 'A written text read aloud: long sentences with several incises, ci-dessus, plus haut, ladite, no address to the jury.',
      criterion: 'oral',
      feedback: 'Parle au jury : annonce, renvoie au temps de l’exposé (il y a un instant), pas à la page.',
      ref: 'a2-trier',
    },
    {
      pattern: 'The exposé ends on voilà, an apology or no hand-over to the jury.',
      criterion: 'oral',
      feedback: 'Termine en remerciant et en te tenant à la disposition du jury.',
      ref: 'a6-atoi',
    },
    {
      pattern: 'Calques under pressure: insister que, souligner comment, adresser une question, basiquement, définitivement for certainly.',
      criterion: 'correction',
      feedback: 'Insister sur, souligner à quel point, traiter une question, au fond, assurément.',
      ref: 'a8-piege',
    },
    {
      pattern: 'A one-sided answer with no nuance (l’atelier ne sert à rien; tout dépend des habitants).',
      criterion: 'position',
      feedback: 'Nuance ta réponse : ce que l’atelier fait, et ce qu’il ne peut pas faire seul.',
      ref: 'a12-annote',
    },
    {
      pattern: 'Duration under 3 minutes or over 5, or long hesitations filled with euh, alors, voilà.',
      criterion: 'oral',
      feedback: 'Prévois un point à couper, et remplace les silences meublés par une balise : premier temps, donc.',
      ref: 'a6-hacks',
    },
  ],
  graderNotes: [
    'NO LIVE SPEECH GRADING EXISTS: the shipped path is the learner’s self-check against the model answer and the six descriptors. These notes are for a future grader that receives a transcript.',
    'THE FORMAT IS THE APP’S OWN (decision 19): a 3 to 5 minute exposé from a printed dossier, the jury rehearsed separately in the scenario. Never describe it to the learner as any real exam (DALF C1 included), and do not mark against any exam’s timings.',
    'Duration 180 to 300 seconds; allow 10% either way before « oral » loses a point. Preparation time is not graded.',
    'Everything presented as coming from the dossier must be in it: the city’s first repair workshop opening in September, two evenings a week, volunteers, small appliances, bikes and clothes; Lucie Fortier, the toaster, parts that cannot be found; Bertrand Ollivier, available parts and prices that make repair cheaper than buying. The problématique, the position and the ouverture are free.',
    'Accept any problématique the dossier raises without settling (habitants ou fabricants; geste citoyen ou politique industrielle; symbole ou solution). Accept a two-part or a three-part plan if it is announced and followed.',
    `Vous to the jury is expected throughout. The B2 written tools (${ARGUMENTATION_REF_EN}) and the meeting moves (${REUNION_REF_EN}) are assumed; debate listening belongs to ${DEBATS_REF_EN}.`,
    'Do not mark closure or reframing markers (somme toute, tout bien considéré, ou plutôt) as missing or wrong: they belong to another C1 lesson.',
    'Speaker gender is unknown: judge agreement (prêt, prête; convaincu, convaincue) for internal consistency only.',
    'Accept regional usage without comment (Québec and France alike).',
    'Feedback language: natural French at C1, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['format', 'question', 'fil'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Dis tes formules à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expose', 'jury'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-expose',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le dossier', v: 'genre, voix, point commun, divergence', say: fr(E(1235)),
      detail: { title: 'Lire le dossier', body: 'Qui parle, d’où, pour dire quoi ; puis où les documents se rejoignent et se séparent. EN: genre, voice, common ground, divergence.', say: fr(E(1233)) } },
    { k: 'la synthèse', v: 'souligner, avancer, soutenir, mettre en garde', say: fr(E(1240)),
      detail: { title: 'Synthétiser', body: 'Le point commun, puis les écarts, avec un verbe de position et une seule attribution. EN: stance verbs, one attribution.', say: fr(E(1242)) } },
    { k: 'la question', v: 'dès lors, on peut se demander si', say: fr(E(1253)),
      detail: { title: 'La problématique', body: 'Une question que le dossier ne tranche pas, en question indirecte. EN: an unsettled question, indirect form.', say: fr(E(1254)) } },
    { k: 'le plan', v: 'premier temps, donc ; j’en viens à', say: fr(E(1271)),
      detail: { title: 'Tenir le plan', body: 'Des balises, du temps géré, une conclusion qui revient à la question. EN: signposts, time, return to the question.', say: fr(E(1272)) } },
    { k: 'le jury', v: 'reformuler, préciser, gagner du temps', say: fr(E(1281)),
      detail: { title: 'Devant le jury', body: 'Vous, reformuler, répondre d’abord, réfléchir à voix haute, ne rien inventer. EN: rephrase, answer first, think aloud.', say: fr(E(1295)) } },
    { k: 'concéder', v: 'je vous accorde que ; je maintiens que', say: fr(E(1326)),
      detail: { title: 'Concéder et clore', body: 'Accorder un point, resserrer, maintenir ; finir sur le fil et un merci. EN: grant, narrow, maintain, close.', say: fr(E(1345)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['synthese', 'question', 'jury'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: 'Tu lis un dossier par genre et par voix, tu en fais une synthèse à voix haute avec des verbes qui disent qui soutient quoi, tu en tires une question que le dossier ne tranche pas, et tu tiens ton plan jusqu’à une conclusion qui y revient. Devant le jury, tu reformules, tu gagnes du temps sans meubler, tu concèdes sans lâcher ton fil, tu réponds hors du dossier et tu clos l’entretien. Le piège qui reste est discret : sous pression, la phrase écrite revient, avec ses incises, et l’excuse remplace la précision. Avant l’oral, enregistre-toi trois minutes sur un dossier inventé, puis réécoute seulement tes transitions et ta dernière phrase. EN: Record three minutes on an invented dossier, then listen back only to your transitions and your last sentence.',
  stats: [
    { k: 'Les gestes', v: 'onze, du dossier à la dernière phrase' },
    { k: 'Les formules', v: 'une centaine, en situation' },
    { k: 'Les textes', v: 'cinq lectures, six écoutes' },
    { k: 'Le jury', v: 'trois jeux de rôle' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 2 to 11, one
 *  integration round. Each round's target is a distinct errorTrigger.
 *  `fold()` strips accents, case, commas, apostrophes, hyphens and spacing,
 *  so every typed answer turns on letters that survive; every typeIn and
 *  errorSpot carries the variants a C1 speaker would type. */

type QQ = QuizQuestion;
const TI_Q = 'Complète et écris toute la phrase. EN: Complete it and write the whole sentence.';
const ES_Q = 'Quelque chose ne va pas. Écris la phrase correcte. EN: Something is wrong; write the sentence correctly.';
const tI = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q: TI_Q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: ES_Q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a12-quiz',
  layer: 'core',
  title: 'L’examen',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-genre', label: 'Un genre qui se parle', targets: ['expose-ecrit'],
      questions: [
        mc('Devant un jury, pour revenir sur une idée déjà dite, tu dis…', ['comme je le disais il y a un instant', 'comme indiqué ci-dessus', 'comme mentionné dans le paragraphe précédent'], 0, 'Le jury n’a pas de page : on renvoie au temps de l’exposé. EN: refer to time, not to the page.', 'a2-cartes'),
        mc('Nora dit : « Ce sera ma question. » À quoi sert cette phrase ?', ['à fixer la question dans la mémoire du jury', 'à remplir un silence', 'à conclure l’exposé'], 0, 'À l’oral, la redite volontaire sert l’auditeur. EN: deliberate repetition.', 'a2-ecoute'),
        mc('Laquelle installe le bon registre dès la première phrase ?', [fr(E(1211)), 'Bon, alors, le sujet, c’est les marchés de nuit.', 'Alors voilà, moi, j’ai pris les marchés.'], 0, 'Le registre soutenu s’installe dès le premier mot. EN: formal from the first word.', 'a2-erreurs'),
        mc('Une copie lue à voix haute passe mal parce que…', ['le jury ne peut pas revenir en arrière', 'elle contient forcément des fautes', 'elle est trop courte'], 0, 'Elle suppose un lecteur qui relit. EN: it assumes a reader.', 'a2-trier'),
        tI('Le dossier que j’ai choisi ___ les marchés de nuit. (porter, au présent, avec sa préposition)', fr(E(1211)), 'Porter sur : être au sujet de. EN: porter sur.', 'a2-erreurs'),
        tI('Je vais d’abord vous dire en une phrase ce qu’ils ont en ___ . (in common)', fr(E(1213)), 'Avoir en commun. EN: en commun.', 'a2-cartes'),
        eS('Le dossier porte les marchés de nuit.', 'Le dossier porte sur les marchés de nuit.', 'Porter sur : sans la préposition, le dossier transporte des marchés. EN: porter sur.', 'a2-erreurs', ['Le dossier traite des marchés de nuit.', 'Le dossier parle des marchés de nuit.', 'Le dossier concerne les marchés de nuit.']),
        lC('Écoute. Que fait la candidate ?', fr(E(1218)), ['elle annonce son plan', 'elle conclut', 'elle cite un document'], 0, 'Deux temps annoncés : le jury sait où elle va. EN: she announces her plan.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r2-dossier', label: 'Lire le dossier', targets: ['dossier-a-plat'],
      questions: [
        mc('Dans le dossier, le témoignage de Mireille Kassab sert surtout à…', ['raconter une expérience', 'donner des chiffres', 'prendre position contre la ville'], 0, 'Un témoignage raconte. EN: a testimony tells.', 'a3-lecture'),
        mc('Par rapport au bilan de la ville, l’agronome…', ['prend le contre-pied de son idée de politique alimentaire', 'le résume', 'le cite sans le discuter'], 0, 'Il soutient l’inverse : la valeur des jardins est ailleurs. EN: the opposite line.', 'a3-trier'),
        mc('Sur quoi les trois documents se rejoignent-ils ?', ['les jardins sont pleins', 'les jardins nourrissent la ville', 'les jardins coûtent trop cher'], 0, 'Le constat partagé : la demande. EN: the shared finding.', 'a3-trier'),
        mc('Quelle phrase résume le dossier sans le trahir ?', [fr(E(1235)), 'Les trois documents prouvent que les jardins ne servent à rien.', 'Le premier document parle de chiffres, le deuxième d’une jardinière, le troisième d’un agronome.'], 0, 'Le point commun et la vraie divergence ; l’une exagère, l’autre liste. EN: common ground and real difference.', 'a3-atoi'),
        tI('Le témoignage et le bilan de la ville vont dans le même ___ . (direction)', fr(E(1229)), 'Aller dans le même sens. EN: to point the same way.', 'a3-exemples'),
        tI('L’agronome prend le contre-___ du bilan municipal.', fr(E(1230)), 'Prendre le contre-pied de. EN: the opposite line.', 'a3-exemples'),
        eS('Les trois documents se rejoignent à un constat : les jardins sont pleins.', fr(E(1228)), 'Se rejoindre sur un point. EN: se rejoindre sur.', 'a3-exemples', ['Les trois documents se rejoignent sur un point : les jardins sont pleins.', 'Les trois documents partent du même constat : les jardins sont pleins.', 'Les trois documents se rejoignent dans un constat : les jardins sont pleins.', 'Les trois documents s’accordent sur un constat : les jardins sont pleins.']),
        lC('Écoute. Cette phrase dit-elle un point commun ou une divergence ?', fr(E(1231)), ['une divergence : il déplace la valeur', 'un point commun : ils disent la même chose'], 0, 'Il ne nie pas, il déplace : c’est là que les documents se séparent. EN: a divergence.', 'a3-trier'),
      ],
    },
    {
      id: 'r3-synthese', label: 'Synthétiser', targets: ['synthese-plate'],
      questions: [
        mc('Le bilan propose une idée qu’il ne démontre pas. Le bilan…', ['avance que', 'prouve que', 'démontre que'], 0, 'Avancer garde la distance. EN: avancer.', 'a4-tableau'),
        mc('Pour un fait que personne ne conteste, tu choisis…', ['rappeler', 'avancer', 'prétendre'], 0, 'Rappeler un fait connu. EN: rappeler.', 'a4-tableau'),
        mc('Laquelle est correcte ?', [fr(E(1251)), 'Elle souligne comment le jardin compte pour le quartier.', 'Elle souligne combien que le jardin compte pour le quartier.'], 0, 'Souligner à quel point. EN: à quel point.', 'a4-piege'),
        tI('L’agronome ___ que les jardins nourrissent peu la ville. (to maintain, au présent)', fr(E(1248)), 'Soutenir que + indicatif. EN: soutenir.', 'a4-tableau', ['L’agronome maintient que les jardins nourrissent peu la ville.']),
        tI('Il met en garde ___ un discours qui en ferait une politique alimentaire.', fr(E(1242)), 'Mettre en garde contre + nom. EN: contre.', 'a4-tableau'),
        eS('Selon l’auteur, il dit qu’une parcelle ne nourrira jamais une famille.', fr(E(1247)), '« Selon » attribue déjà. EN: one attribution.', 'a4-piege', ['L’auteur dit qu’une parcelle ne nourrira jamais une famille.', 'L’auteur affirme qu’une parcelle ne nourrira jamais une famille.', 'Selon lui, une parcelle ne nourrira jamais une famille.', 'D’après l’auteur, une parcelle ne nourrira jamais une famille.', 'L’auteur estime qu’une parcelle ne nourrira jamais une famille.', 'L’auteur soutient qu’une parcelle ne nourrira jamais une famille.']),
        eS('Le bilan insiste que les jardins sont pleins.', fr(E(1250)), 'Insister sur le fait que. EN: insister sur.', 'a4-piege', ['Le bilan souligne que les jardins sont pleins.', 'Le bilan affirme que les jardins sont pleins.']),
        lC('Écoute. Quel verbe dit la position du document ?', fr(E(1243)), ['avance : une idée non prouvée', 'rappelle : un fait connu', 'prouve : une démonstration'], 0, 'Avancer, sans chiffre. EN: avancer.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r4-question', label: 'La problématique', targets: ['question-absente'],
      questions: [
        mc('Laquelle est une problématique pour le dossier des jardins ?', [fr(E(1253)), fr(E(1261)), fr(E(1262))], 0, 'Elle oppose deux réponses que le dossier ne tranche pas. EN: an unsettled question.', 'a5-construire'),
        mc('« La question n’est pas tant de savoir si… que de savoir… » sert à…', ['écarter une question facile pour une plus juste', 'poser deux questions sans lien', 'conclure l’exposé'], 0, 'La fausse question, puis la vraie. EN: dismiss the easy question.', 'a5-tableau'),
        mc('« Dans quelle mesure » annonce une réponse…', ['de degré, nuancée', 'par oui ou par non', 'chiffrée'], 0, 'En partie, jusqu’à un certain point. EN: to what extent.', 'a5-tableau'),
        tI('On peut se demander ___ la ville doit financer ces jardins. (whether)', fr(E(1266)), 'Si, dans une question indirecte. EN: si.', 'a5-erreurs'),
        tI('On peut se demander ___ les habitants attendent vraiment de ces jardins. (what)', fr(E(1265)), 'Ce que, pas qu’est-ce que. EN: ce que.', 'a5-erreurs'),
        eS('Je me demande qu’est-ce qui pousse les habitants vers ces jardins.', fr(E(1267)), 'Qu’est-ce qui devient ce qui. EN: ce qui.', 'a5-erreurs'),
        eS('Reste à savoir dans quelle mesure la ville doit-elle s’en mêler.', fr(E(1268)), 'Pas de pronom repris après le verbe dans une question indirecte. EN: no resumptive pronoun.', 'a5-erreurs'),
        lC('Écoute. Ce candidat pose-t-il une vraie problématique ?', fr(E(1262)), ['non : le dossier y répond déjà', 'oui : le dossier ne la tranche pas'], 0, 'Un chiffre se lit dans le dossier. EN: the dossier answers it.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r5-plan', label: 'Tenir le plan', targets: ['plan-perdu'],
      questions: [
        mc('Tu as fini ta première partie. Quelle balise ?', [fr(E(1278)), fr(E(1275)), fr(E(1274))], 0, 'Elle ferme une partie et ouvre la suivante. EN: a transition.', 'a6-construire'),
        mc('Ta conclusion orale commence par…', ['rappeler ta question', 'un nouvel argument', 'le résumé des trois documents'], 0, 'La réponse n’a de sens qu’avec la question. EN: restate it.', 'a6-construire'),
        mc('L’ouverture finale…', ['pose une question que le dossier laisse ouverte', 'ajoute un troisième argument', 'répète le plan'], 0, 'Elle élargit, sans démontrer de nouveau. EN: it widens.', 'a6-atoi'),
        mc('Il te reste deux minutes et une partie entière. Tu dis…', [fr(E(1279)), 'Excusez-moi, je n’ai pas eu le temps de tout préparer.', 'Je m’arrête là, tant pis.'], 0, 'Tu gères ton temps à voix haute. EN: manage time openly.', 'a6-construire'),
        tI('J’en viens à mon ___ temps, qui répond à ma question. (second)', fr(E(1271)), 'Second temps, ou deuxième. EN: second.', 'a6-construire', ['J’en viens à mon deuxième temps, qui répond à ma question.']),
        tI('Je reviens à ma question de ___ . (starting point)', fr(E(1272)), 'La question de départ. EN: starting question.', 'a6-lecture'),
        eS('Je vous remercie ; je me tiens à votre disposition de vos questions.', fr(E(1275)), 'À votre disposition pour vos questions. EN: pour.', 'a6-lecture', ['Je vous remercie ; je me tiens à votre disposition pour répondre à vos questions.', 'Je vous remercie ; je me tiens à votre disposition pour toute question.']),
        lC('Écoute. Où en est l’orateur ?', fr(E(1278)), ['entre ses deux parties', 'au début de son exposé', 'dans sa conclusion'], 0, 'Il vient de montrer, il annonce la suite. EN: between parts.', 'a6-lecture'),
      ],
    },
    {
      id: 'r6-parole', label: 'Devant le jury', targets: ['jury-familier'],
      questions: [
        mc('M. Aubertin : « Un jardin doit-il être rentable ? » Tu commences par…', [fr(E(1285)), 'Oui.', 'Je préférerais parler d’autre chose.'], 0, 'Reformuler l’enjeu, puis répondre. EN: rephrase, then answer.', 'a7-construire'),
        mc('Tu ne comprends pas un mot de la question. Tu dis…', [fr(E(1282)), 'Quoi ?', 'Je ne réponds pas à cette question.'], 0, 'Demander une précision est attendu. EN: ask.', 'a7-cartes'),
        mc('Devant le jury, l’ordre est…', ['reformuler, répondre, nuancer, vérifier', 'nuancer longuement, puis répondre', 'répondre par oui ou non, puis attendre'], 0, 'La réponse tôt, la nuance ensuite. EN: answer early.', 'a7-cartes'),
        tI('Si je comprends bien, vous me ___ si les jardins méritent un budget municipal. (demander)', fr(E(1281)), 'Vous me demandez si… EN: demandez.', 'a7-cartes'),
        tI('___ -je répondu à votre question ? (avoir, avec inversion)', fr(E(1284)), 'Ai-je répondu… EN: ai-je.', 'a7-cartes'),
        eS('Tu veux dire que les jardins coûtent trop cher ?', 'Vous voulez dire que les jardins coûtent trop cher ?', 'Le jury reste vous. EN: vous.', 'a7-erreurs', ['Voulez-vous dire que les jardins coûtent trop cher ?']),
        eS('Votre question, je la comprends pas.', 'Votre question, je ne la comprends pas.', 'La négation complète devant un jury, puis une demande. EN: ne… pas.', 'a7-erreurs', [fr(E(1292)), 'Je ne comprends pas votre question.', 'Je ne comprends pas votre question : pourriez-vous la reformuler ?']),
        lC('Écoute. Que fait la candidate ?', fr(E(1287)), ['elle reprend le mot du jury pour le préciser', 'elle refuse la question', 'elle conclut'], 0, 'Reprendre un mot, c’est vérifier son sens. EN: take up the word.', 'a7-construire'),
      ],
    },
    {
      id: 'r7-temps', label: 'Gagner du temps', targets: ['temps-meuble'],
      questions: [
        mc('Laquelle donne du temps ET fait avancer la réponse ?', [fr(E(1297)), 'Euh… alors… voilà…', 'C’est une bonne question, une très bonne question.'], 0, 'Distinguer, c’est déjà répondre. EN: distinguishing answers.', 'a8-construire'),
        mc('Le jury demande un chiffre absent du dossier. Tu…', ['le dis, et proposes un ordre de grandeur', 'inventes un chiffre précis', 'changes de sujet'], 0, 'Jamais de chiffre inventé. EN: never invent.', 'a8-tableau'),
        mc('« C’est définitivement un point important. » En bon français :', ['C’est assurément un point important.', 'C’est finalement un point important.', 'C’est longuement un point important.'], 0, 'Définitivement veut dire pour toujours. EN: assurément.', 'a8-piege'),
        tI('Permettez-moi d’y ___ un instant. (to think it over)', fr(E(1295)), 'Réfléchir. EN: réfléchir.', 'a8-tableau', ['Permettez-moi d’y penser un instant.']),
        tI('Je n’ai pas le chiffre exact en ___ , mais l’ordre de grandeur est clair.', fr(E(1298)), 'Avoir en tête. EN: en tête.', 'a8-tableau'),
        eS('Je vais adresser cette question en deux temps.', fr(E(1308)), 'On traite une question. EN: traiter.', 'a8-piege', ['Je vais aborder cette question en deux temps.', 'Je vais répondre à cette question en deux temps.', 'Je vais examiner cette question en deux temps.', 'Je vais étudier cette question en deux temps.']),
        eS('Basiquement, la question est celle du coût.', fr(E(1305)), 'Au fond, en gros. EN: au fond.', 'a8-piege', ['En gros, la question est celle du coût.', 'Fondamentalement, la question est celle du coût.', 'En fait, la question est celle du coût.', 'Essentiellement, la question est celle du coût.', 'En somme, la question est celle du coût.']),
        lC('Écoute. Cette réponse invente-t-elle quelque chose ?', fr(E(1300)), ['non : elle refuse d’inventer', 'oui : elle donne un chiffre précis'], 0, 'Le dossier ne donne pas ce chiffre, et elle le dit. EN: no invention.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r8-conceder', label: 'Concéder', targets: ['these-abandonnee'],
      questions: [
        mc('M. Aubertin : « Trois cents personnes attendent. » Quelle réponse concède sans abandonner ?', [fr(E(1324)), 'Vous avez raison, je n’y avais pas pensé.', 'Non, ce n’est pas un problème.'], 0, 'Reconnaître, puis préciser. EN: grant, then refine.', 'a9-construire'),
        mc('« Cela nuance ma position sans la renverser » veut dire que…', ['l’objection limite la thèse sans la détruire', 'tu changes d’avis', 'tu refuses l’objection'], 0, 'Une limite, pas une chute. EN: a limit, not a collapse.', 'a9-tableau'),
        mc('Avant de répondre à une objection, tu te demandes…', ['sur quelle partie de ta thèse elle porte', 'comment la contredire au plus vite', 'si le jury a raison sur tout'], 0, 'La portée de l’objection. EN: its scope.', 'a9-construire'),
        tI('Je vous ___ que trois cents noms en attente, c’est beaucoup. (to grant)', fr(E(1313)), 'Accorder que. EN: accorder.', 'a9-tableau', ['Je vous concède que trois cents noms en attente, c’est beaucoup.']),
        tI('Votre remarque m’___ à préciser ma pensée. (obliger)', fr(E(1314)), 'Obliger à. EN: oblige.', 'a9-tableau'),
        eS('Je maintiens néanmoins que leur valeur soit d’abord sociale.', fr(E(1317)), 'Maintenir que + indicatif. EN: est.', 'a9-tableau'),
        eS('C’est une objection sérieuse, et je la prends au sérieuse.', fr(E(1319)), 'Prendre au sérieux : invariable. EN: au sérieux.', 'a9-lecture'),
        lC('Écoute. Que fait la candidate ?', fr(E(1315)), ['elle resserre sa thèse', 'elle abandonne sa thèse', 'elle nie l’objection'], 0, 'Je ne dis pas que…, je dis que… EN: she narrows it.', 'a9-lecture'),
      ],
    },
    {
      id: 'r9-pousser', label: 'Quand le jury pousse', targets: ['hors-dossier'],
      questions: [
        mc('Le jury te demande ton avis personnel. Tu…', ['le donnes en disant que tu sors du dossier', 'refuses : le dossier n’en dit rien', 'réponds par une question'], 0, 'À titre personnel… EN: give it, flagged.', 'a10-cartes'),
        mc('M. Aubertin : « Il faudrait choisir : nourrir ou rassembler. » Tu réponds…', [fr(E(1329)), 'Alors je choisis nourrir.', 'Je ne sais pas.'], 0, 'Refuser le faux choix, au subjonctif. EN: refuse the false choice.', 'a10-ecoute'),
        mc('Face à une question sur un sujet que le dossier n’aborde pas, tu commences par…', [fr(E(1327)), 'Ce n’est pas dans le dossier, donc je ne peux rien dire.', 'Le dossier dit exactement cela.'], 0, 'Signaler, puis répondre. EN: flag, then answer.', 'a10-cartes'),
        tI('Je doute que les jardins ___ baisser le prix des légumes. (faire)', fr(E(1335)), 'Douter que + subjonctif. EN: fassent.', 'a10-piege'),
        tI('Bien que le dossier ne ___ rien des toits, la question se pose. (dire)', fr(E(1338)), 'Bien que + subjonctif. EN: dise.', 'a10-piege'),
        eS('À titre personnel, je pense que ce soit une bonne idée.', fr(E(1337)), 'Penser que, à l’affirmatif : indicatif. EN: c’est.', 'a10-piege'),
        eS('Il faut que la ville paiera l’eau et les clôtures.', fr(E(1336)), 'Il faut que + subjonctif. EN: paie.', 'a10-piege', ['Il faut que la ville paye l’eau et les clôtures.']),
        lC('Écoute. Dans quel cas la candidate se place-t-elle ?', fr(E(1333)), ['dans l’hypothèse d’une ville sans budget', 'dans la situation actuelle de la ville', 'dans le dossier'], 0, 'Le conditionnel répond à l’hypothèse. EN: the hypothesis.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r10-clore', label: 'Clore l’entretien', targets: ['fin-sans-fil'],
      questions: [
        mc('Le jury n’a plus de questions. Tu dis d’abord…', [fr(E(1345)), 'Voilà, c’est tout.', 'J’espère que c’était bien.'], 0, 'Le fil, en une phrase. EN: your thread.', 'a11-construire'),
        mc('Ce que l’entretien t’a fait préciser, tu le…', ['nommes en une phrase', 'caches', 'présentes comme une erreur'], 0, 'Le nommer montre que tu as écouté. EN: name it.', 'a11-focus'),
        mc('Laquelle redit une position ?', [fr(LEG(20)), fr(LEG(45)), fr(E(1344))], 0, 'Favorable, mais prudente. EN: a nuanced position.', 'a11-construire'),
        tI('Vos questions m’ont ___ de préciser un point : l’accès. (permettre)', fr(E(1343)), 'Permettre de. EN: permis.', 'a11-ecoute'),
        tI('J’ai nuancé ma réponse ; je n’ai pas changé de ___ .', fr(E(1346)), 'Changer de question. EN: question.', 'a11-focus'),
        eS('Si vous n’avez pas d’autres questions, je résumerais ma position en une phrase.', fr(E(1342)), 'Si + présent, puis futur. EN: résumerai.', 'a11-construire', ['Si vous n’avez pas d’autres questions, je résume ma position en une phrase.', 'Si vous n’avez pas d’autres questions, je vais résumer ma position en une phrase.']),
        eS('Mon fil n’a pas changé : un jardin partagé se juge d’abord à ce qu’il rassemblent.', fr(E(1345)), 'Il rassemble : accord avec le sujet. EN: rassemble.', 'a11-ecoute'),
        lC('Écoute. Que fait la candidate ?', fr(E(1342)), ['elle annonce sa phrase de clôture', 'elle pose une question au jury', 'elle commence son exposé'], 0, 'Elle annonce la fin, puis la donne. EN: she announces the close.', 'a11-construire'),
      ],
    },
    {
      id: 'r11-format', label: 'L’oral, de bout en bout', targets: ['consigne-orale'],
      questions: [
        mc('Dans le format de l’application, la tâche finale est…', ['un exposé enregistré de trois à cinq minutes à partir d’un dossier', 'un essai écrit de quatre cents mots', 'une conversation libre sans dossier'], 0, 'Un exposé sur dossier ; le jury se répète dans le jeu de rôle. EN: the app’s own format.', 'a12-plan'),
        mc('Dans le modèle sur les trains, quelle phrase porte la problématique ?', [fr(E(1354)), fr(E(1352)), fr(E(1351))], 0, 'Dès lors, on peut se demander si… EN: the problématique.', 'a12-modele'),
        mc('Pendant la préparation, que rédiges-tu en entier ?', ['ta première phrase, ta question et ta dernière phrase', 'tout l’exposé, pour le lire', 'rien du tout'], 0, 'Le reste se dit à partir de mots-clés. EN: three sentences.', 'a6-hacks'),
        mc('Le jury : « Donc, l’atelier ne sert à rien ? » Tu réponds…', ['Je ne dis pas qu’il ne sert à rien ; je dis qu’il ne suffit pas.', 'Oui, vous avez raison.', 'Non, c’est faux.'], 0, 'Refuser la déformation, resserrer la thèse. EN: narrow the claim.', 'a12-scenario'),
        tI('Là où ils ___ , c’est sur la manière d’obtenir le calme. (diverger)', fr(E(1353)), 'Diverger : se séparer sur un point. EN: divergent.', 'a12-annote'),
        tI('Mon exposé ___ deux temps : ce qu’une règle peut obtenir, puis ce qu’elle ne peut pas obtenir. (suivre, au futur)', fr(E(1355)), 'Suivra : futur de suivre. EN: suivra.', 'a12-annote'),
        eS('Dès lors, on peut se demander si le silence doit-il être une règle ou une courtoisie.', fr(E(1354)), 'Pas d’inversion après si. EN: no inversion.', 'a12-annote'),
        lC('Écoute. Que fait l’oratrice ?', fr(E(1357)), ['elle ouvre sur une question que le dossier laisse ouverte', 'elle annonce son plan', 'elle résume le premier document'], 0, 'L’ouverture, juste avant de passer la parole. EN: the ouverture.', 'a12-modele'),
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
    { front: 'to make the documents speak to each other', back: 'faire dialoguer les documents', say: fr(E(1206)) },
    { front: 'to agree on (of documents)', back: 'se rejoindre sur', say: fr(E(1228)) },
    { front: 'to warn against', back: 'mettre en garde contre', say: fr(E(1242)) },
    { front: 'that being so, one may ask whether', back: 'dès lors, on peut se demander si', say: fr(E(1253)) },
    { front: 'I now come to my second stage', back: 'j’en viens à mon second temps', say: fr(E(1271)) },
    { front: 'if I understand correctly, you are asking me whether', back: 'si je comprends bien, vous me demandez si', say: fr(E(1281)) },
    { front: 'allow me to think about it for a moment', back: 'permettez-moi d’y réfléchir un instant', say: fr(E(1295)) },
    { front: 'that qualifies my position without overturning it', back: 'cela nuance ma position sans la renverser', say: fr(E(1316)) },
    { front: 'speaking personally', back: 'à titre personnel', say: fr(E(1328)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'L’exposé et le jury, en résumé',
  body: `${REFRAME} Tu sais maintenant faire parler un dossier, en tirer une question que les documents ne tranchent pas, la dire à voix haute et tenir ton plan jusqu’à une conclusion qui y revient. Devant le jury, tu reformules, tu gagnes du temps sans meubler, tu concèdes sans lâcher ton fil, tu réponds hors du dossier et tu clos l’entretien en une phrase. ${Cap(DEBATS_REF)} t’avait appris à entendre un débat ; ici, c’est toi qui parles. La suite du parcours C1 passe à l’écrit long. EN: Next, the C1 path moves on to long-form writing.`,
  points: [
    'Un exposé répond à une question ; un résumé n’en pose aucune.',
    'Le point commun d’abord, la divergence ensuite, avec un verbe de position.',
    'Reformuler, répondre, nuancer, vérifier : en vous.',
    'Concéder un point, ce n’est pas changer de question.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fil', 'conceder'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'À toi, devant le jury',
    opener: {
      line: 'Un dossier nouveau, une heure, puis le jury : à toi de tirer ta question, de la tenir pendant l’exposé, et de la défendre jusqu’au bout. EN: A new dossier, one hour, then the jury: your turn to draw out your question, hold it through the exposé and defend it to the end.',
      imageRef: 'lessons/expose-jury/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as présenté un exposé sur dossier, répété l’entretien avec le jury, et passé le quiz : quatre-vingt-huit questions, onze rounds. EN: You gave an exposé from a dossier, rehearsed the jury interview, and sat the quiz: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a12-annote', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-synthese', 'a12-quiz/r6-parole', 'a12-quiz/r9-pousser'],
  },
  sections: [
    A12_MODELE, A12_ANNOTE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST_FULL: ReferenceSheet[] = [
  sheet('sheet-expose', 'L’exposé : un genre qui se parle', ['le genre', 'les moments de l’exposé', 'les balises'], [
    teach('sheet-expose-teach', 'Ce qu’un exposé fait',
      'Un exposé tire d’un dossier une question que les documents ne tranchent pas, et y répond devant un jury. Il se parle : le jury ne peut pas relire, donc tu annonces où tu vas, tu répètes l’essentiel, tu renvoies au temps de l’exposé (il y a un instant) et non à la page, et tu t’adresses au jury en vous. Seules trois phrases se rédigent en préparation : la première, la question et la dernière. EN: An exposé answers a question drawn from a dossier, and it is spoken, announced and addressed.'),
    table('sheet-expose-table', 'Les moments et leurs formules', ['Moment', 'Formule', 'Remarque'], [
      ['ouvrir', 'Le dossier que j’ai choisi porte sur…', 'porter sur, jamais porter seul'],
      ['présenter le dossier', 'Il réunit trois documents : …', 'genre et voix de chacun'],
      ['la synthèse', 'Les trois documents se rejoignent sur un point : …', 'puis : là où ils divergent, c’est…'],
      ['la question', 'Dès lors, on peut se demander si…', 'après si, ni inversion ni est-ce que'],
      ['le plan', 'Je vous propose de traiter cette question en deux temps.', 'deux ou trois temps, annoncés'],
      ['ouvrir une partie', 'Premier temps, donc, …', 'une balise courte'],
      ['passer à la suite', 'J’en viens à mon second temps.', 'ou : je viens de montrer… ; voyons…'],
      ['tenir son temps', 'Pour ne pas dépasser mon temps, je passerai vite sur ce point.', 'abréger en le disant'],
      ['conclure', 'Je reviens à ma question de départ.', 'la question, puis la réponse en une phrase'],
      ['ouvrir', 'Reste une question que le dossier laisse ouverte : …', 'pas d’argument nouveau'],
      ['passer la parole', 'Je vous remercie ; je me tiens à votre disposition pour vos questions.', 'jamais « voilà »'],
    ]),
  ]),
  sheet('sheet-synthese', 'Lire et synthétiser un dossier', ['les quatre questions', 'les verbes de position', 'les pièges'], [
    teach('sheet-synthese-teach', 'Faire dialoguer les documents',
      'Pour chaque document : qui parle, et d’où ; quel genre (un bilan chiffre, un témoignage raconte, une tribune prend position) ; quelle thèse, en une phrase ; où il rejoint les autres, où il les contredit. La synthèse part du point commun, puis montre la vraie divergence. Chaque document reçoit un verbe qui dit sa position, et une seule attribution : « selon l’auteur, » suffit, sans « il dit que ». Constructions : insister sur le fait que, souligner à quel point, mettre en garde contre. EN: Common ground first, then divergence; one stance verb and one attribution per document.'),
    table('sheet-synthese-table', 'Les verbes de position', ['Verbe', 'Ce qu’il dit', 'Construction'], [
      ['souligner', 'un point mis en relief', 'souligner que ; souligner à quel point'],
      ['insister', 'un point sur lequel l’auteur revient', 'insister sur ; insister sur le fait que'],
      ['rappeler', 'un fait déjà connu', 'rappeler que + indicatif'],
      ['avancer', 'une idée non prouvée', 'avancer que ; avancer une idée'],
      ['soutenir', 'une thèse défendue', 'soutenir que + indicatif'],
      ['nuancer', 'une réserve, une limite', 'nuancer + nom'],
      ['mettre en garde', 'un risque signalé', 'mettre en garde contre + nom'],
      ['prendre le contre-pied', 'la position inverse', 'prendre le contre-pied de + nom'],
      ['se rejoindre', 'un accord entre documents', 'se rejoindre sur + nom'],
      ['diverger', 'un désaccord entre documents', 'diverger sur + nom'],
    ]),
  ]),
  sheet('sheet-question', 'La problématique à l’oral', ['les formules', 'la question indirecte', 'les fausses questions'], [
    teach('sheet-question-teach', 'Une question que le dossier ne tranche pas',
      `${Cap(ARGUMENTATION_REF)} t’a donné la problématique écrite. À l’oral, elle naît du dossier : une question que les documents posent sans la trancher, souvent là où ils divergent. Trois fausses questions à écarter : celle à laquelle tout le monde répond oui, celle que le dossier règle par un chiffre, et le simple thème (« les jardins partagés »). On la dit en question indirecte : si, ce que, ce qui, dans quelle mesure, sans est-ce que et sans pronom repris après le verbe (doit-elle). EN: An unsettled question from the dossier, said as an indirect question.`),
    table('sheet-question-table', 'De la question directe à la question indirecte', ['Question directe', 'Question indirecte', 'Règle'], [
      ['La ville doit-elle financer ces jardins ?', 'On peut se demander si la ville doit financer ces jardins.', 'si, sans pronom repris'],
      ['Est-ce que la ville doit financer ces jardins ?', 'On peut se demander si la ville doit financer ces jardins.', 'est-ce que devient si'],
      ['Qu’est-ce que les habitants attendent ?', 'On peut se demander ce que les habitants attendent.', 'qu’est-ce que devient ce que'],
      ['Qu’est-ce qui pousse les habitants ?', 'Je me demande ce qui pousse les habitants.', 'qu’est-ce qui devient ce qui'],
      ['Dans quelle mesure la ville doit-elle s’en mêler ?', 'Reste à savoir dans quelle mesure la ville doit s’en mêler.', 'jamais doit-elle'],
      ['Faut-il nourrir ou rassembler ?', 'Toute la question est de savoir s’il faut nourrir ou rassembler.', 'si devient s’ devant il'],
    ]),
  ]),
  sheet('sheet-jury', 'Devant le jury', ['prendre la parole', 'gagner du temps', 'concéder', 'sortir du dossier', 'clore'], [
    teach('sheet-jury-teach', 'Le fil, sous les questions',
      `Plus formel qu’en réunion (${REUNION_REF}) : vous du début à la fin. Devant chaque question : reformuler, répondre d’abord, nuancer, vérifier. Si la question te prend de court, réfléchis à voix haute (distinguer, en première analyse) sans meubler, et n’invente jamais un chiffre. Devant une objection juste, accorde le point, dis jusqu’où il porte, resserre ta thèse et maintiens-la. Hors du dossier, signale-le, puis réponds. À la fin, une phrase pour ton fil, ce que l’échange a précisé, un merci. EN: Rephrase, answer, qualify, check; think aloud; grant, narrow, maintain; close on your thread.`),
    table('sheet-jury-table', 'Les gestes et leurs formules', ['Geste', 'Formule', 'À éviter'], [
      ['reformuler', 'Si je comprends bien, vous me demandez si…', 'Tu veux dire que… ?'],
      ['demander une précision', 'Pourriez-vous préciser ce que vous entendez par… ?', 'Quoi ?'],
      ['vérifier', 'Ai-je répondu à votre question ?', 'Voilà.'],
      ['gagner du temps', 'Permettez-moi d’y réfléchir un instant.', 'Euh… alors… voilà…'],
      ['structurer', 'Je distinguerais deux choses.', 'Basiquement, …'],
      ['ne pas savoir', 'Je n’ai pas le chiffre exact en tête, mais…', 'un chiffre inventé'],
      ['reconnaître', 'Vous avez raison de le souligner : …', 'Vous avez raison, je n’y avais pas pensé.'],
      ['accorder', 'Je vous accorde que…', 'Non, ce n’est pas vrai.'],
      ['resserrer', 'Je ne dis pas que…, je dis que…', 'concéder plus que l’objection'],
      ['maintenir', 'Je maintiens néanmoins que…', 'Pardon, je me suis complètement trompé.'],
      ['sortir du dossier', 'Le dossier ne l’aborde pas, mais…', 'refuser de répondre'],
      ['l’avis personnel', 'À titre personnel, je…', 'Je n’ai pas d’avis.'],
      ['le faux choix', 'Je ne crois pas qu’il faille choisir entre… et…', 'choisir au hasard'],
      ['clore', 'Si vous n’avez pas d’autres questions, je résumerai ma position en une phrase.', 'J’espère que c’était bien.'],
    ]),
  ]),
  sheet('sheet-format', 'Le format de l’application', ['la tâche', 'le plan en cinq temps', 'la grille'], [
    teach('sheet-format-teach', 'Ce que la tâche demande',
      'Dans l’application, la tâche finale est un exposé enregistré de trois à cinq minutes, à partir d’un dossier de trois documents imprimé dans la consigne ; les questions du jury se répètent dans un jeu de rôle. Ce format est celui de l’application, conçu pour s’entraîner : il ne reproduit les règles d’aucun examen. Si tu prépares un examen réel, lis ses consignes officielles. EN: The app’s own practice format; for a real exam, read its official instructions.'),
    table('sheet-format-table', 'Le plan en cinq temps et la grille', ['Temps', 'Ce que tu fais', 'Critère'], [
      ['1', 'lire le dossier par genre et par voix', 'le dossier en synthèse'],
      ['2', 'tirer une question que le dossier ne tranche pas', 'une vraie question, un plan tenu'],
      ['3', 'annoncer le dossier, la synthèse, la question, le plan', 'un exposé qui se parle'],
      ['4', 'développer chaque temps avec balises et verbes de position', 'précision et nuance du vocabulaire'],
      ['5', 'conclure, ouvrir, passer la parole', 'une réponse nuancée et argumentée'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST_FULL: LessonDrill[] = [
  { id: 'd-oral', title: 'Un exposé qui se parle', format: 'mcq' as const, coach: 'Le jury n’a pas la page : annonce, répète, renvoie au temps. EN: spoken, not read.', q: 'Pour revenir sur une idée, à l’oral : comme je le disais…', opts: ['il y a un instant', 'ci-dessus'], correct: 0, why: 'Le temps de l’exposé, pas la page. EN: il y a un instant.', items: [E(1211), E(1213), E(1217), E(1218), E(1223), E(1224)], audio: AUDIO },
  { id: 'd-dossier', title: 'Ensemble ou séparés', format: 'sort' as const, coach: 'Deux piles : ce qui rassemble les documents, ce qui les sépare. EN: common ground, or divergence.', buckets: ['ils se rejoignent', 'ils se séparent'], items: [E(1228), E(1229), E(1225), E(1230), E(1231), E(1226)], audio: AUDIO },
  { id: 'd-synthese', title: 'Le verbe qui dit la position', format: 'mcq' as const, coach: 'Une tribune soutient, un bilan chiffre, un auteur met en garde. EN: the stance verb.', q: 'Le bilan insiste ... le fait que les jardins sont pleins.', opts: ['sur', 'que'], correct: 0, why: 'Insister sur. EN: sur.', items: [E(1240), E(1242), E(1243), E(1246), E(1248), E(1250)], audio: AUDIO },
  { id: 'd-question', title: 'La question indirecte', format: 'mcq' as const, coach: 'Si, ce que, ce qui ; jamais est-ce que, jamais de pronom repris. EN: indirect question.', q: 'On peut se demander ... les habitants attendent de ces jardins.', opts: ['ce que', 'qu’est-ce que'], correct: 0, why: 'Ce que. EN: ce que.', items: [E(1253), E(1254), E(1265), E(1266), E(1267), E(1268)], audio: AUDIO },
  { id: 'd-plan', title: 'Les balises dans l’ordre', format: 'flashcard' as const, coach: 'Dis chaque balise à voix haute, dans l’ordre de l’exposé. EN: say each signpost in order.', items: [E(1269), E(1270), E(1278), E(1271), E(1272), E(1273)], audio: AUDIO },
  { id: 'd-jury', title: 'En vous, devant le jury', format: 'flashcard' as const, coach: 'Lis chaque phrase comme devant le jury : reformuler, préciser, répondre, vérifier. EN: read each one aloud, formally.', items: [E(1281), E(1282), E(1283), E(1284), E(1285), E(1292)], audio: AUDIO },
  { id: 'd-temps', title: 'Gagner du temps en français', format: 'mcq' as const, coach: 'Réfléchir à voix haute, sans anglicisme et sans meubler. EN: think aloud, in French.', q: 'Je vais ... cette question en deux temps.', opts: ['traiter', 'adresser'], correct: 0, why: 'On traite une question. EN: traiter.', items: [E(1295), E(1296), E(1298), E(1300), E(1305), E(1308)], audio: AUDIO },
  { id: 'd-conceder', title: 'Concéder ou maintenir', format: 'sort' as const, coach: 'Deux piles : ce que tu accordes, ce que tu maintiens. EN: what you grant, what you keep.', buckets: ['j’accorde', 'je maintiens'], items: [E(1312), E(1313), E(1324), E(1316), E(1317), E(1326)], audio: AUDIO },
  { id: 'd-pousser', title: 'Le bon mode sous pression', format: 'mcq' as const, coach: 'Doute, nécessité, concession : subjonctif. Opinion affirmée : indicatif. EN: moods under load.', q: 'Bien que le dossier ne ... rien des toits…', opts: ['dise', 'dit'], correct: 0, why: 'Bien que + subjonctif. EN: dise.', items: [E(1329), E(1335), E(1337), E(1338), E(1339), E(1340)], audio: AUDIO },
  { id: 'd-clore', title: 'La dernière phrase', format: 'flashcard' as const, coach: 'Dis chaque phrase comme la fin de l’entretien : le fil, l’apport, le merci. EN: say each closing line.', items: [E(1342), E(1343), E(1344), E(1345), E(1346), E(1348)], audio: AUDIO },
  { id: 'd-format', title: 'Le modèle, phrase par phrase', format: 'flashcard' as const, coach: 'Dis chaque phrase du modèle comme à l’oral : synthèse, question, plan, réponse, ouverture. EN: say each model line.', items: [E(1352), E(1353), E(1354), E(1355), E(1356), E(1357)], audio: AUDIO },
];

const TRIGGER_LIST_FULL: ErrorTrigger[] = [
  { id: 'expose-ecrit', description: 'Reads a written text aloud (long incises, ci-dessus, plus haut) or opens in a conversational register, instead of announcing and addressing the jury.', detectOn: ['a2-trier', 'a2-erreurs', 'a2-check', 'a12-mission'], drill: 'd-oral', retest: 'd-oral' },
  { id: 'dossier-a-plat', description: 'Summarises the documents one after another without saying where they meet and where they part, or overstates what they say.', detectOn: ['a3-trier', 'a3-atoi', 'a3-check', 'a12-mission'], drill: 'd-dossier', retest: 'd-dossier' },
  { id: 'synthese-plate', description: 'Reports every document with dire, misstates a stance (prouver for soutenir), doubles the attribution, or uses insister que / souligner comment.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a12-mission'], drill: 'd-synthese', retest: 'd-synthese' },
  { id: 'question-absente', description: 'States no problématique, or one the dossier already answers or everyone answers yes to, or builds the indirect question with inversion or est-ce que.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a12-mission'], drill: 'd-question', retest: 'd-question' },
  { id: 'plan-perdu', description: 'Announces a plan and does not follow it, gives no spoken signposts, runs out of time, or concludes without returning to the question.', detectOn: ['a6-construire', 'a6-atoi', 'a6-check', 'a12-mission'], drill: 'd-plan', retest: 'd-plan' },
  { id: 'jury-familier', description: 'Slips into tu or casual register with the jury, answers without reformulating or checking, or replies with a bare oui or ça dépend.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a12-scenario'], drill: 'd-jury', retest: 'd-jury' },
  { id: 'temps-meuble', description: 'Fills the silence with fillers, invents a figure the dossier does not give, or buys time with anglicisms (basiquement, définitivement, adresser).', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a12-scenario'], drill: 'd-temps', retest: 'd-temps' },
  { id: 'these-abandonnee', description: 'Abandons the thesis at the first fair objection, denies it flatly, concedes more than it claims, or apologises instead of refining.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a12-scenario'], drill: 'd-conceder', retest: 'd-conceder' },
  { id: 'hors-dossier', description: 'Refuses questions outside the dossier or the personal view, accepts a false choice, or loses the mood under pressure (bien que + indicatif, je pense que + subjonctif).', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a12-scenario'], drill: 'd-pousser', retest: 'd-pousser' },
  { id: 'fin-sans-fil', description: 'Ends the interview on voilà, an apology or a new doubt instead of one sentence restating the thread.', detectOn: ['a11-construire', 'a11-erreurs', 'a11-check', 'a12-scenario'], drill: 'd-clore', retest: 'd-clore' },
  { id: 'consigne-orale', description: 'Misses what the spoken task demands: no synthesis, no problématique, no plan held, no return to the question, or a duration outside three to five minutes.', detectOn: ['a12-modele', 'a12-plan', 'a12-mission'], drill: 'd-format', retest: 'd-format' },
];

const REC_DESC_FULL: Record<string, string> = {
  'rec-c1-09-rapport': 'The jury’s written report (act 1), ONE VOICE, one take, Hélène Rocheval (a Montréal woman in her fifties, Québec French) reading her own report aloud: measured, precise, benevolent. The quoted candidate line « Vous avez raison, je n’y avais pas pensé. » is read as a quotation, not acted.',
  'rec-c1-09-nora-ecoute': 'REQUIRED FOR THE EAR MISSION (act 2): ten lines, ONE TAKE, ONE VOICE, in authored order. Nora (a woman in her twenties, France French) opening her exposé before a jury: calm, addressed, natural C1 pace, with a short breath before « Ce sera ma question. » and a clear stress on « deux temps ». Spoken, not read.',
  'rec-c1-09-dossier': 'The dossier (act 3), ONE VOICE, one take, a neutral narrator (Québec French) reading the three documents; each « Document 1, 2, 3 » heading gets a short pause, and the testimony and the column are read in a slightly warmer tone than the report.',
  'rec-c1-09-theo-ecoute': 'REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, ONE VOICE, in authored order. Théo (a man in his thirties, Québec French) presenting the dossier in synthesis: confident, natural C1 pace; the stance verbs (souligne, met en garde, avance) carry a light stress.',
  'rec-c1-09-piege-synthese': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-09-questions-ecoute': 'REQUIRED FOR THE EAR MISSION (act 5): six lines, ONE TAKE, in authored order. THREE VOICES: candidate 1 (line 1, a young man, France French), Mme Rocheval (lines 2, 4, 6, Québec French, courteous and dry), candidate 2 (line 3, a young woman, Belgian French); line 5 is candidate 3 (a woman, Québec French), steady. Until the studio delivers, one TTS voice reads all six; the questions do not depend on telling the voices apart.',
  'rec-c1-09-expose': 'Your exposé (act 6), ONE VOICE, one take, a candidate of about thirty (Québec French), about four minutes: spoken, addressed, natural pace, a clear breath at each signpost (Premier temps, donc ; Je viens de montrer… ; Je reviens à ma question de départ).',
  'rec-c1-09-question': 'The story (act 7), THREE VOICES: a narrator; M. Aubertin (a man in his sixties, France French, courteous, a little dry); the candidate (Québec French, calm). The candidate’s pause after « C’est une question qui touche au cœur du sujet. » is about one second.',
  'rec-c1-09-temps-ecoute': 'REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, in authored order. FOUR VOICES: Mme Rocheval (line 1); candidate A (line 2, hesitant, audible fillers, trailing off); candidate B (line 3, crisp, over-confident); candidate C (lines 4 to 8, a woman, Québec French, calm, a one-second pause after line 4). Until the studio delivers, one TTS voice reads all; the content alone separates the three answers.',
  'rec-c1-09-piege-temps': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-09-entretien': 'The jury exchange (act 9), THREE VOICES, one take: M. Aubertin (France French, probing, never hostile), Mme Rocheval (Québec French), the candidate (Québec French, calm, unhurried). The speaker labels are read as short captions or replaced by the change of voice.',
  'rec-c1-09-pousser-ecoute': 'REQUIRED FOR THE EAR MISSION (act 10): ten lines, ONE TAKE, in authored order. THREE VOICES: Mme Rocheval (lines 1 and 7), M. Aubertin (lines 4 and 9), the candidate (lines 2, 3, 5, 6, 8, 10, a woman, Québec French). « qu’il faille » in the last line is clearly articulated.',
  'rec-c1-09-piege-modes': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « fassent », « paie », « dise », « puisse », « soient » are clearly articulated.',
  'rec-c1-09-cloture-ecoute': 'REQUIRED FOR THE EAR MISSION (act 11): seven lines, ONE TAKE, in authored order. THREE VOICES: Mme Rocheval (line 1), the candidate (lines 2, 4, 5, 6, a woman, Québec French), M. Aubertin (lines 3 and 7). The candidate’s closing lines are slower, one breath each.',
  'rec-c1-09-modele': 'The model exposé (act 12), ONE VOICE, one take, a woman in her thirties (France French), about three minutes: natural C1 exam pace, addressed to a jury, a short breath at each signpost. Spoken, not read.',
};




/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];

const DRILL_LIST: LessonDrill[] = DRILL_LIST_FULL;
const TRIGGER_LIST: ErrorTrigger[] = TRIGGER_LIST_FULL;
const SHEET_LIST: ReferenceSheet[] = SHEET_LIST_FULL;

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

spreadMissionSlots(SECTIONS, DRILL_LIST);
for (const s of SECTIONS) if (s.type === 'quiz') spreadQuizSlots(s);

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-09-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = REC_DESC_FULL;

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 9',
  intro: 'A faithful summary of three documents is not an exposé: a jury waits for a question. This C1 lesson teaches formal oral production from a dossier and its defence before a jury: reading a dossier by genre and voice, presenting it in synthesis with verbs that carry each stance, stating a spoken problématique as an indirect question, holding a plan aloud and concluding on the question; then, before the jury, reformulating, buying time without filling the silence or inventing figures, conceding a point without abandoning the thesis, answering outside the dossier and closing the exchange. It goes past B2 lessons 22, 23, 25 and 26 (recapped once in act 1) and ends on a recorded three-to-five-minute exposé in the app’s own format, with the jury rehearsed in a role play.',
  skill: 'PO',
  grammarAssumed: [ARGUMENTATION_UNIT, ACADEMIQUE_UNIT, ECOUTE_UNIT, REUNION_UNIT, MODES_UNIT, DEBATS_UNIT],
  grammarIntroduced: [
    'The exposé as a spoken genre: announcing, deliberate repetition, addressing the jury, referring back in time (il y a un instant) rather than on the page',
    'Reading a dossier by genre and voice, and stating its common ground and real divergence in one sentence (se rejoindre sur, aller dans le même sens, prendre le contre-pied de)',
    'Synthesis aloud with stance verbs (souligner, rappeler, avancer, soutenir, nuancer, mettre en garde contre), one attribution per document, and the calques insister que and souligner comment',
    'The spoken problématique (dès lors, on peut se demander si; toute la question est de savoir; la question n’est pas tant de… que de…; dans quelle mesure) and the indirect question without est-ce que or a resumptive pronoun',
    'Holding a plan aloud: spoken signposts, managing time openly, the oral conclusion that restates the question, the ouverture and the hand-over to the jury',
    'The formal floor toward a jury: reformulating the whole question, asking for a precision, answering first, checking (ai-je répondu à votre question ?)',
    'Buying time without filling the silence (permettez-moi d’y réfléchir un instant, je distinguerais deux choses, en première analyse), admitting a gap without inventing, and the anglicisms that surface under pressure',
    'Conceding in public without losing the thesis: granting the point, naming its scope, narrowing (je ne dis pas que…, je dis que…), maintaining (je maintiens néanmoins que)',
    'Questions outside the dossier, the personal view (à titre personnel), the hypothesis and the false choice, with the B2 moods kept under load',
    'Closing the interview on one sentence that restates the thread, what the exchange clarified and thanks',
    'A three-to-five-minute spoken exposé from a printed dossier in the app’s own format, self-checked against an annotated model and a six-criterion grid',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Trois documents fidèlement résumés ne font pas un exposé : le jury attend une question. Cette leçon t’apprend à faire parler un dossier, à en tirer une question que les documents ne tranchent pas, à la dire à voix haute et à tenir ton plan, puis à défendre ton exposé devant un jury : reformuler, gagner du temps sans meubler, concéder sans lâcher ton fil, répondre hors du dossier et conclure. À la fin, tu enregistres un exposé de trois à cinq minutes sur un dossier nouveau, au format de l’application.',
    minutes: 160,
    difficulty: 5,
    glyph: 'oral',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: EXPOSE_JURY_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (build log, 2026-09-25). Kept, as every other lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** The lesson with the `task` removed, for the house tests that still call
 *  it (the task is real in the schema; the validators run on LESSON). */
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
export { IMPORTED, NOT_SPEAKABLE, dicteeFor };
