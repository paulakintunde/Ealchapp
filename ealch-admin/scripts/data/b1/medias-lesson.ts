// b1.34.l1 « Les médias » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md, in the
// VOCAB SHAPE, TOPIC VARIANT, of B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 and §2.3,
// built on the model of b1.33 (environnement-*). No new section types.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]` and the validators run on `LESSON` itself, as b1.33 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (family / collocations · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   The vocab loop per act (shapes doc §2.1, topic variant §2.3): meet the
//   words in a real text (reading / listening / story), learn them as
//   families and collocations (cardDeck: the block, its neighbour, the
//   English, the variant), tell them apart (groupDrill), a lookup or
//   consolidation mission (examples / tapTable / dictation / flashcards /
//   focus / hacks), use them (groupDrill of real situations), trap the
//   English calque (trapDrill or commonErrors), check (gated control pages).
//
//    1  Le paysage des médias    7   informer / s’informer family; les nouvelles; AUX nouvelles
//    2  La presse écrite         7   quotidien / hebdo / mensuel; rédaction family; rédacteur en chef vs éditeur
//    3  Lire un titre            7   headline nouns (démission, hausse), the cut passive (élue, arrêtés), faire la une (tapTable)
//    4  La radio et la télé      7   diffuser, émission, chaîne, en direct, animer; auditeur / téléspectateur; balado, entrevue
//    5  Qui dit quoi             7   selon, d’après, de source sûre; déclarer, annoncer, témoigner, citer; porte-parole
//    6  Pas encore confirmé      7   the hearsay conditional; confirmer, démentir, une rumeur court (tapTable)
//    7  Les réseaux sociaux      7   s’abonner, partager, suivre, relayer, commenter, devenir viral, le fil d’actualité
//    8  Vrai ou faux             7   fausse nouvelle / infox, désinformation, photo truquée, canular, tomber dans le panneau
//    9  Vérifier une source      7   vérifier, fiable, remonter à la source, croiser les sources, douteux (tapTable)
//   10  Juger une info           7   crédible, ça m’étonnerait, je doute que, à première vue, avec des pincettes
//   11  À toi de réagir         11   model reply, plan, role play, TASK, practice, cheat, quiz
//
//   TOTAL 81 missions, 11 acts (7 x 10 + 11). 27 word families and 49
//   collocation rows plus the opinion formulas. Seven readings of 121 to
//   141 words from real B1 text kinds (a magazine survey, a front page with
//   its brief, a radio bulletin transcript, a news brief, a forum thread, a
//   fact-check post, the model forum reply), two hideLines listenings (a
//   news flash, a radio phone-in), two stories, one scene. Corpus: 186
//   authored rows (.1000-.1185) plus 35 reused seed rows, 221 item ids, 220
//   released act by act through `deckTranche` (one seed row carries no
//   flashcard drill: NOT_DECK_ABLE). Quiz: 11 rounds of 8 (39 mcq, 22
//   typeIn, 16 errorSpot, 11 listenChoose). Eleven error triggers, eleven
//   drills, five reference sheets reached from 15 missions by `sheetId`,
//   eleven terms. Three tapTables (acts 3, 6, 9). 554 estimated screens.
//   Chapter artwork: `medias-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Devant une info, demande-toi qui la dit, et comment. »
//   EN: Faced with a piece of news, ask who is saying it, and how.
//
//   ONE METAPHOR, EVERY PIECE OF NEWS HAS A RETURN ADDRESS. « Qui » is the
//   daily, the radio host, the witness, the police, the aunt on the family
//   chat, the page created last week (acts 1, 2, 4, 5, 7, 9). « Comment »
//   is the headline noun, the cut passive, the conditional of hearsay, the
//   doctored photo, « selon nos sources » with no source named (acts 3, 6,
//   8, 10). It is NOT « do not trust the media »: the press is taught as
//   the place to check a story against (corpus REFRAME_REJECTED).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the media topic vocabulary of B1 as families and collocations;
//           headline grammar as a reading skill; naming a source (selon,
//           d’après, the verbs of speech); the hearsay conditional FOR
//           RECOGNITION; social media and fake-news collocations; checking a
//           source (who, when, where from); the media false friends
//           (éditeur, programme, vivant, publiciser, actuellement,
//           reliable, sur les nouvelles); the forum reply judging a story.
//   QUOTES  the reframes of lesson 8 in B1 (conditional), lesson 18 in B1
//           (passive), lesson 19 in B1 (reported speech: re-exported, cited
//           in the sheet and the drills) and lesson 33 in B1 (families and
//           neighbours), re-exported from their corpora, never retyped; the
//           hearsay rows of b1.08, the reported-speech row of b1.19, the
//           passive row of b1.18, the headline rows of b1.37, and opinion
//           rows from opinions-et-avis and b1.33, as imported seed rows.
//   LEAVES  producing the conditionnel passé (« aurait fait » is recognised
//           only, tapTable detail says so); the emotions the news causes to
//           lesson 35 in B1 (named in the roundup); formal letters as a
//           genre to b1.39; register as a system to b1.25. The subjunctive
//           appears ONLY after je doute que, il faut que and je propose que.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (vous from Geneviève, tu between flatmates). Every
//   learner surface that explains something carries English (`en`, or a
//   final « EN: »), and NO ANSWER ever does. Every `say` is French. Theme
//   `journalisme`, block 1000-1199 (corpus §A). B1 citations are French
//   words from the plan (« la leçon 18 du B1 »), never a raw unit id. Setting
//   leans Canadian (Montréal, Sherbrooke, Drummondville, Le Devoir, the
//   Québec variants) with Dakar and Thiès, Abidjan, Liège, Lausanne and
//   Genève; every story, person and small town is invented, and no real
//   journalist is named. No bubble carries a « ? » or a « ! ». Every
//   authored French string uses ’, so the scenario never mixes apostrophes.
//   Answer slots are spread by permuting options WITH their correct index
//   (spreadMissionSlots, spreadQuizSlots), never by editing content.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. `Lesson.skill` is 'CE', not 'PE'. The shapes doc says skill follows
//      what the lesson remediates, and this lesson's distinctive work is
//      reading the news (headlines, sources, the conditional, fakes), the
//      core of B1 compréhension écrite; b1.37 set the precedent with a
//      written task. b1.33, the other topic lesson, is 'PE'. Keep 'CE'?
//   2. The task is 100-140 words (b1.33 asked 110-150) because a forum reply
//      is shorter than a letter to a council. Keep?
//   3. The conditionnel passé (« l’incendie aurait fait deux blessés ») is
//      in two rows and one tapTable row, for RECOGNITION only; no lesson
//      has built it yet. Keep it in, or cut to the présent only?
//   4. Three tapTables (acts 3, 6, 9), one per act, as in b1.33. Confirm.
//   5. 29 groupDrills (ten of them act checks), as in b1.27 and b1.33.
//   6. DB_ONLY_TWINS is EMPTY: this author did not probe Postgres. The
//      journalisme theme holds published rows below 1000 that the seed does
//      not carry, and some are likely twins (e.g. la rédaction, vérifier
//      ses sources). Three seed duplicates were caught and replaced by
//      imports (il paraît que le loyer..., je doute que, il me semble que).
//      Run the dedupe at import.
//   7. The theme's sub-themes (« la presse et l’information », « les
//      réseaux et la radio-télé », « vrai ou faux : lire les médias ») are
//      not set; that is a Postgres edit for the import step.
//   8. `_preview-b1.ts`, the b1 house tests and `_app-checks-b1.mts` ALL do
//      not list « medias » (the app check has it in ALL_MORE only); I was
//      not allowed to edit them. `--only medias` works and reports 0; add
//      the slug to the lists when the wave lands.
//   9. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  PAYSAGE_TEXT, UNE_TEXT, BULLETIN_TEXT, BREVE_TEXT, FORUM_TEXT, VERIF_TEXT, REPONSE_TEXT,
  CONDITIONNEL_UNIT, SUBJ_FORM_UNIT, SUBJ_DECL_UNIT, SUBJ_INF_UNIT, PASSIF_UNIT, DISCOURS_UNIT,
  COORDINATION_UNIT, SUBORDINATION_UNIT, CONCESSION_UNIT, ENVIRONNEMENT_UNIT,
  CONDITIONNEL_REF, SUBJ_FORM_REF, SUBJ_INF_REF, PASSIF_REF, DISCOURS_REF,
  COORDINATION_REF, SUBORDINATION_REF, CONCESSION_REF, ENVIRONNEMENT_REF, EMOTIONS_REF,
  B108_REFRAME, B108_REFRAME_EN, B118_REFRAME, B118_REFRAME_EN, B119_REFRAME, B119_REFRAME_EN,
  B133_REFRAME, B133_REFRAME_EN,
} from './medias-corpus.ts';
import { MEDIAS_TERMS } from './medias-terms.ts';

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
const SEED_DATA = seed as unknown as { items: SrcItem[] };
const SEED = new Map(SEED_DATA.items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.34: no item ${id}`);
  return r;
}

/** NOT_SPEAKABLE is typed by hand in the corpus; hold it to the seed. */
for (const id of IMPORT_IDS) {
  const d = SEED.get(id)?.drills ?? [];
  if (!SEED.has(id)) throw new Error(`b1.34: import ${id} is not in the seed`);
  if (!NOT_SPEAKABLE.includes(id) && !d.includes('voiceflash')) throw new Error(`b1.34: ${id} has no voiceflash but is not in NOT_SPEAKABLE`);
  if (!NOT_DECK_ABLE.includes(id) && !d.includes('flashcard')) throw new Error(`b1.34: ${id} has no flashcard but is not in NOT_DECK_ABLE`);
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.34: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section. Authored rows only:
 *  some seed respellings close a nasal with a plain n. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`b1.34: no authored respell on ${id}`);
  return `[${r.respell}]`;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const uc = (situation: string, id: string) => ({ situation, fr: src(id).fr, en: src(id).en });
const fr = (id: string) => src(id).fr;
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** One card: the family or collocation, a label as the eyebrow, its
 *  respelling, and a body that goes meaning, neighbour, English. */
type Card = NonNullable<Sec<'cardDeck'>['cards']>[number];
const card = (id: string, head: string, label: string, body: string): Card =>
  ({ head, label, fr: fr(id), sub: rsOf(id), body });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** A deterministic hash, so the slot spreading below is stable run to run. */
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

const OPT_KEYS = ['opts', 'options', 'choices', 'answers'];

/** THE ANSWER-SLOT RULE (playbook 6.11, b1-answer-slots.test.ts). Missions
 *  render the authored order, so answers are spread BY PERMUTING each item's
 *  options WITH its correct index: the option set and the correct string are
 *  unchanged, only their order moves. Walks exactly as the test walks
 *  (sections in order, quiz excluded, then drills). Within each option-count
 *  class it picks a slot that is at most one above the least used, never a
 *  third identical answer in a row, and breaks ties by a hash of the
 *  question. Copied from b1.33. No `why` in this lesson names a position. */
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
    const target = pool[hash(JSON.stringify(opts) + String(n.q ?? n.promptSay ?? '')) % pool.length];
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
 *  the quiz together, 40% per slot at most. LessonRich reshuffles at runtime
 *  anyway; this keeps the authored file inside the rule. */
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
 *  ACT 1 — LE PAYSAGE DES MÉDIAS
 *
 *  How people get their news, and the one block English breaks first: « on
 *  the news » is AUX nouvelles, never « sur les nouvelles ».
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Lundi matin au bureau',
  frSub: 'Nathalie et la grève des autobus',
  setting: { place: 'Un bureau du Vieux-Montréal', city: 'Montréal', time: 'lundi, 8 h 45', ambience: 'la machine à café, des écrans allumés, la neige sur les fenêtres' },
  beats: [
    {
      kind: 'narration',
      text: 'Lundi matin, dans un bureau du Vieux-Montréal. Ta collègue Nathalie arrive avec son café. Elle a entendu parler d’une grève des autobus.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nathalie',
      fr: 'Il paraît qu’il y aura une grève des autobus jeudi.',
      en: 'Apparently there will be a bus strike on Thursday.',
      respell: '[eel pa-REH keel ee oh-RA ün GREHV | day-zoh-toh-BÜS zhuh-DEE]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Oui, je l’ai vu sur les nouvelles hier soir.',
      en: 'Yes, I saw it on the news last night (word for word: sur).',
      respell: '[WEE | zhuh lay VÜ sür lay noo-VEHL | yehr SWAR]',
      stage: 'Chaque mot est français. La préposition, elle, vient de l’anglais : on the news.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nathalie',
      fr: 'Sur les nouvelles. Tu étais assis sur la télé, alors.',
      en: 'On top of the news. So you were sitting on the TV, then.',
      respell: '[sür lay noo-VEHL | tü ay-teh a-SEE sür la tay-LAY | a-LOR]',
      stage: 'Elle rit. Elle a compris, mais personne ne dit ça ici.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase une Montréalaise dit-elle vraiment ?',
      size: 'lg',
      options: [
        { fr: 'Je l’ai vu sur les nouvelles hier soir.', respell: '[zhuh lay VÜ sür lay noo-VEHL | yehr SWAR]', en: 'I saw it on the news last night (word for word: sur).', outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1009)), respell: rsOf(E(1009)), en: src(E(1009)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Nathalie hoche la tête et te demande quelle chaîne tu regardes. La conversation continue sur la grève.',
        breaks: 'Nathalie sourit encore. Elle te comprend, mais elle corrige ta phrase avant de parler de la grève.',
      },
    },
    {
      kind: 'break',
      heading: 'On entend une info aux nouvelles',
      body: 'Tous tes mots étaient français, mais le bloc venait de l’anglais. En français, on entend une info aux nouvelles, aux infos, au journal. Sur, c’est pour un écran ou un site. EN: Every word was French; the block was English.',
      wrong: {
        fr: 'Je l’ai vu sur les nouvelles hier soir.',
        ipa: '/ʒə le vy syʁ le nu.vɛl jɛʁ swaʁ/',
        respell: '[zhuh lay VÜ sür lay noo-VEHL | yehr SWAR]',
        en: 'I saw it on the news last night (word for word: sur).',
      },
      right: { fr: fr(E(1009)), ipa: ipaOf(E(1009)), respell: rsOf(E(1009)), en: src(E(1009)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: 'Cette leçon te donne les mots des médias par familles et par voisins : la presse, la radio, la télé, les réseaux. Elle t’apprend aussi à juger une info : qui la dit, et comment. À la fin, tu réponds sur un forum à une info douteuse.',
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'fauxami'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Parler de la presse, de la radio et de la télé', s: 'Actes 1, 2 et 4 : un quotidien, une émission, aux nouvelles' },
    { t: 'Lire un titre et trouver la source', s: 'Actes 3, 5 et 6 : la une, selon, le conditionnel du on-dit' },
    { t: 'Reconnaître une infox sur les réseaux', s: 'Actes 7 à 9 : partager, relayer, vérifier une source' },
    { t: 'Dire si une info est fiable, et pourquoi', s: 'Actes 10 et 11 : ton avis, et ta réponse sur un forum' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: a magazine survey. `questionsInModal` so the text comes
 *  first. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Quatre façons de s’informer',
  frSub: 'Lis, et cherche qui s’informe comment',
  text: PAYSAGE_TEXT,
  glossary: [
    { word: 'abonnée', en: 'a subscriber (woman)', note: 'Elle paie le journal à l’année, et il arrive chez elle.' },
    { word: 'téléjournal', en: 'the TV news (Québec, Switzerland)', note: 'Le journal télévisé du soir. En France : le JT.' },
    { word: 'une radio locale', en: 'a local radio station', note: 'Une radio qui parle de la ville et du quartier.' },
    { word: 'un hebdomadaire', en: 'a weekly', note: 'Un journal ou un magazine qui sort chaque semaine.' },
  ],
  questions: [
    { q: 'Qui lit le journal papier ?', a: 'Louise, à Montréal : elle est abonnée au Devoir depuis quarante ans.' },
    { q: 'Où Moussa écoute-t-il les nouvelles ?', a: 'Dans le bus, à la radio : RFI le matin, puis une radio locale en wolof.' },
    { q: 'Comment Chloé s’informe-t-elle ?', a: 'En ligne, sur son téléphone : des médias sur les réseaux, et des podcasts.' },
    { q: 'Pourquoi Marc lit-il un hebdomadaire ?', a: 'Il aime prendre le temps de lire des articles longs, le week-end.' },
  ],
  audio: REC('rec-b1-34-paysage'),
  say: REFRAME,
  terms: ['voisins', 'variante'],
};

/** LEARN: the landscape as families and blocks. */
const A1_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-medias',
  title: 'S’informer, et avec quoi',
  frSub: 'Une famille, cinq blocs',
  hint: 'Six cartes. Pour chaque mot, regarde le mot qui va avec.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'voisins', 'variante'],
  cards: [
    card(E(1000), 'Toute une famille', 'la famille',
      `Informer, c’est donner l’info ; s’informer, c’est la chercher. ${Cap(ENVIRONNEMENT_REF)} le disait déjà : « ${B133_REFRAME} » EN: ${B133_REFRAME_EN}`),
    card(E(1001), 'The news, au pluriel', 'les voisins',
      'Les nouvelles, les infos : toujours au pluriel pour dire the news. EN: always plural.'),
    card(E(1002), 'On the news', 'la variante',
      'Aux nouvelles au Québec, aux infos en France. Jamais sur les nouvelles. EN: aux, never sur.'),
    card(E(1005), 'Le journal du soir', 'la variante',
      'En France, le JT. Au Québec et en Suisse, le téléjournal. EN: the TV news.'),
    card(E(1006), 'Sur ton téléphone', 'les voisins',
      'S’informer en ligne : les sites, les applications, les réseaux. EN: to get your news online.'),
    card(E(1016), 'Le mot qui les réunit', 'la famille',
      'Un média : un journal, une radio, une chaîne, un site. Médiatique : dont on parle partout. EN: a media outlet.'),
  ],
};

/** TELL THEM APART: each medium with its verb; the two informer. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Chaque média a son verbe',
  groups: [
    grp('Lire, écouter, regarder', [
      it(E(1008), 'la radio : écouter'),
      it(E(1010), 'le journal : lire'),
      it(E(1011), 'le téléphone : s’informer en ligne'),
      it('fr.b1.cafe.005', 'le journal, avec le café'),
    ], chk(
      'Que retiens-tu de ces phrases ?',
      ['chaque média avec son verbe', 'seulement le nom du média', 'seulement le verbe'], 0,
      'On lit le journal, on écoute la radio, on regarde la télé : on apprend le bloc. EN: learn each medium with its verb.')),
    grp('Informer ou s’informer', [
      it(E(1012), 'les journalistes donnent l’info'),
      it(E(1015), 'toi, tu la cherches'),
      it(E(1009), 'aux nouvelles, au Québec'),
      it('fr.a2.routines.003', 'les informations : le journal du soir'),
    ], chk(
      'Informer et s’informer : quelle différence ?',
      ['informer, c’est donner l’info ; s’informer, c’est la chercher', 'aucune, les deux veulent dire la même chose'], 0,
      'Le journaliste informe le public. Toi, tu t’informes. EN: to inform someone, to keep yourself informed.')),
    ctl('La préposition', 'On the news, en français :',
      ['sur les nouvelles', 'aux nouvelles', 'dans les nouvelles'], 1,
      'Aux nouvelles, aux infos, au journal. EN: aux nouvelles.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'famille'],
};

/** USE: where the blocks do a real job. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où tu vas les dire',
  cases: [
    uc('Une collègue te demande où tu as appris la grève', E(1009)),
    uc('Un ami te demande ce que tu fais le matin', E(1008)),
    uc('Tu parles des habitudes de ta grand-mère', E(1010)),
    uc('Tu demandes à un nouveau collègue comment il s’informe', E(1015)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'source'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La préposition', 'Je l’ai vu ... hier soir.',
    ['aux nouvelles', 'sur les nouvelles'], 0,
    'On voit une info aux nouvelles. Sur, c’est pour un écran ou un site. EN: aux nouvelles.'),
  ctl('Le verbe', 'To keep up with the news, en français :',
    ['informer', 's’informer', 'nouveller'], 1,
    'S’informer : tu cherches l’info pour toi. EN: s’informer.'),
  ctl('Le pluriel', 'The news, en français, c’est...',
    ['les nouvelles', 'la nouvelle'], 0,
    'Au pluriel : les nouvelles, les infos. Une nouvelle, c’est une seule info. EN: plural.'),
], ['voisins', 'famille']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le paysage des médias',
    opener: {
      line: 'Un journal au café, une radio dans le bus, un écran le soir : ici tu dis comment tu t’informes, avec les bons mots. EN: A paper at the café, a radio on the bus, a screen at night: here you say how you get your news, with the right words.',
      imageRef: 'lessons/medias/act01.jpg',
    },
    sections: [],
    milestone: 'Tu dis où et comment tu t’informes, et tu entends les infos aux nouvelles, plus jamais sur les nouvelles. EN: You say where and how you get your news, and you hear it aux nouvelles, never sur.',
    estScreens: 38, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_CARTES, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LA PRESSE ÉCRITE
 *
 *  The rhythm (quotidien, hebdomadaire, mensuel), the newsroom family
 *  (rédiger, la rédaction, un rédacteur) and the paper's parts. The false
 *  friends: l’éditeur, publiciser, libre, letters to the editor.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a first day in a newsroom. Story bubbles avoid « ? » and « ! ». */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Premier jour à la rédaction',
  frSub: 'Un stage à Sherbrooke',
  setting: 'Ton premier jour de stage à L’Écho de l’Estrie, un quotidien de Sherbrooke. Geneviève, la rédactrice en chef, te fait visiter.',
  bubbles: [
    { from: 'narrator', fr: 'Une grande salle, des écrans, des piles de journaux : c’est la rédaction.', en: 'A big room, screens, piles of newspapers: this is the newsroom.' },
    { from: 'coach', fr: fr(E(1025)), en: src(E(1025)).en, warn: 'un quotidien : chaque jour' },
    { from: 'user', fr: 'Donc vous êtes l’éditrice du journal.', en: 'So you are the editor of the paper (a false friend).' },
    { from: 'coach', fr: 'Non, je suis la rédactrice en chef. L’éditeur, lui, publie des livres.', en: 'No, I am the editor-in-chief. A publisher publishes books.', warn: 'la rédactrice en chef, pas l’éditrice' },
    { from: 'coach', fr: 'Chaque journaliste a sa rubrique : la politique, la culture, les sports.', en: 'Every journalist has a section: politics, culture, sport.', warn: 'une rubrique' },
    { from: 'user', fr: 'Moi, je lis toujours le courrier des lecteurs en premier.', en: 'I always read the readers’ letters first.' },
    { from: 'coach', fr: fr(E(1033)), en: src(E(1033)).en, warn: 'la publicité : advertising' },
  ],
  closing: { fr: 'Un quotidien, une rédaction, une rédactrice en chef : chaque mot a sa place dans le journal.', en: 'A daily, a newsroom, an editor-in-chief: every word has its place in the paper.' },
  audio: REC('rec-b1-34-redaction'),
  say: REFRAME,
  terms: ['famille', 'fauxami'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-medias',
  title: 'Le journal, de la une à la dernière page',
  frSub: 'Le rythme, l’équipe, les pages',
  hint: 'Six cartes. Regarde qui écrit, et quand le journal sort.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'voisins', 'fauxami'],
  cards: [
    card(E(1017), 'Le rythme du journal', 'la famille',
      'Chaque jour, un quotidien. Chaque semaine, un hebdomadaire, ou un hebdo. Chaque mois, un mensuel. EN: a daily, a weekly, a monthly.'),
    card(E(1018), 'Ceux qui écrivent', 'la famille',
      'Rédiger, c’est écrire un texte. La rédaction, c’est l’équipe et aussi la salle. EN: to write up, the newsroom, a staff writer.'),
    card(E(1019), 'Celle qui dirige', 'le faux ami',
      'Le rédacteur en chef dirige la rédaction. L’éditeur, lui, publie des livres. EN: the editor-in-chief, not l’éditeur.'),
    card(E(1021), 'Ce que fait le journal', 'les voisins',
      'On publie un article. Le verbe publier donne aussi une publication. EN: to publish an article.'),
    card(E(1022), 'Les pages par sujet', 'les voisins',
      'La rubrique sports, la rubrique culture : chaque sujet a sa partie du journal. EN: a section.'),
    card(E(1023), 'Les pages d’avis', 'les voisins',
      'L’éditorial donne l’avis du journal. La chronique, l’avis d’une personne, souvent chaque semaine. EN: an editorial, a column.'),
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le rythme et l’équipe',
  groups: [
    grp('Chaque jour, chaque semaine', [
      it(E(1025), 'un quotidien'),
      it(E(1026), 'un hebdo'),
      it(E(1028), 'une chronique dans un hebdo'),
      it('fr.b1.journalisme.001', 'l’équipe du journal'),
    ], chk(
      'Un hebdo sort...',
      ['chaque semaine', 'chaque jour', 'chaque mois'], 0,
      'Hebdo, pour hebdomadaire : chaque semaine. EN: weekly.')),
    grp('Qui écrit quoi', [
      it(E(1027), 'la rédaction publie'),
      it(E(1030), 'le rédacteur en chef et l’éditorial'),
      it(E(1031), 'toi, au courrier des lecteurs'),
      it('fr.b1.journalisme.004', 'mener une enquête'),
    ], chk(
      'L’éditorial donne...',
      ['l’avis du journal', 'les résultats sportifs'], 0,
      'L’éditorial, c’est le texte d’avis du journal. EN: the paper’s own view.')),
    ctl('La rubrique', 'Tu cherches le résultat du match. Tu ouvres la rubrique...',
      ['sports', 'culture', 'économie'], 0,
      'La rubrique sports. EN: the sports section.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'voisins'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  title: 'Le journal en six phrases',
  examples: [
    ex('fr.a1.cafe.073', 'le mot de départ, sans ses voisins.'),
    ex('fr.b1.strategies-de-comprehension.1037', 'un texte signé par un journaliste.'),
    ex(E(1029), 'la rubrique : une partie du journal.'),
    ex(E(1030), 'le rédacteur en chef, pas l’éditeur.'),
    ex(E(1032), 'la différence en une phrase.'),
    ex(E(1033), 'la publicité : advertising, pas publicity.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxami', 'voisins'],
};

/** USE: real situations. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon mot au kiosque',
  groups: [
    ctl('Le kiosque', 'Tu veux les nouvelles de chaque jour. Tu achètes...',
      ['un mensuel', 'un quotidien'], 1,
      'Chaque jour : un quotidien. EN: a daily.'),
    ctl('Le chef', 'La personne qui dirige la rédaction d’un journal :',
      ['l’éditeur', 'le rédacteur en chef', 'le publicateur'], 1,
      'Le rédacteur en chef. L’éditeur publie des livres. EN: the editor-in-chief.'),
    ctl('La lettre', 'Tu veux répondre à un article. Tu écris...',
      ['au courrier des lecteurs', 'à la rubrique sports'], 0,
      'Le courrier des lecteurs publie les lettres du public. EN: readers’ letters.'),
    ctl('L’avis', 'Chaque semaine, la même journaliste donne son avis. C’est...',
      ['une brève', 'une rubrique', 'une chronique'], 2,
      'Une chronique : l’avis d’une personne, chaque semaine. EN: a column.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'fauxami'],
};

/** TRAP: four English look-alikes in the press. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre faux amis du journal',
  errors: [
    { wrong: 'L’éditeur du journal a écrit l’éditorial du jour.', right: 'Le rédacteur en chef a écrit l’éditorial du jour.',
      why: 'Normal : en anglais, l’editor dirige un journal. En français, l’éditeur publie des livres. EN: the editor-in-chief is le rédacteur en chef.' },
    { wrong: 'La rédaction a publicisé un article sur les loyers.', right: fr(E(1027)),
      why: 'Normal : publicize ressemble à publier. Mais publiciser, c’est faire de la pub. Un article, on le publie. EN: to publish is publier.' },
    { wrong: 'J’ai envoyé une lettre à l’éditeur.', right: fr(E(1031)),
      why: 'Normal : l’anglais dit letters to the editor. En français, c’est le courrier des lecteurs. EN: readers’ letters.' },
    { wrong: 'Ce journal est libre, mais il vit de la publicité.', right: fr(E(1033)),
      why: 'Normal : free se dit libre ou gratuit. Pour le prix, c’est gratuit ; un journal libre, c’est un journal indépendant. EN: free of charge is gratuit.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxami', 'voisins'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le rythme', 'Un journal qui sort chaque mois :',
    ['un mensuel', 'un hebdomadaire', 'un quotidien'], 0,
    'Chaque mois : un mensuel. EN: a monthly.'),
  ctl('Le chef', 'The editor-in-chief :',
    ['l’éditeur', 'le rédacteur en chef'], 1,
    'Le rédacteur en chef. EN: le rédacteur en chef.'),
  ctl('Le verbe', 'To publish an article :',
    ['publier un article', 'publiciser un article'], 0,
    'Publier. Publiciser, c’est faire de la pub. EN: publier.'),
], ['famille', 'fauxami']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La presse écrite',
    opener: {
      line: 'Une salle de rédaction, une pile de quotidiens, une rubrique par sujet : ici tu entres dans le journal. EN: A newsroom, a pile of dailies, a section per subject: here you step inside the paper.',
      imageRef: 'lessons/medias/act02.jpg',
    },
    sections: [],
    milestone: 'Tu nommes les journaux par leur rythme, les gens qui les font et leurs pages, sans l’éditeur de l’anglais. EN: You name papers by their rhythm, the people who make them and their pages, without the English editor.',
    estScreens: 40, restPoints: ['a2-construire', 'a2-choisir'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_CONSTRUIRE, A2_EXEMPLES, A2_CHOISIR, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LIRE UN TITRE
 *
 *  Headline grammar: the noun for the verb (démission, fermeture, hausse),
 *  the dropped article, the passive cut to its participle (lesson 18 in
 *  B1). Faire la une.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a front page and its brief. */
const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La une de L’Écho de l’Estrie',
  frSub: 'Lis les titres, puis la brève',
  text: UNE_TEXT,
  glossary: [
    { word: 'mairesse', en: 'mayor (a woman, Québec)', note: 'Au Québec, on dit la mairesse. En France, on dit souvent la maire.' },
    { word: 'le maire sortant', en: 'the outgoing mayor', note: 'Le maire qui finit son mandat.' },
    { word: 'La brève', en: 'the news brief', note: 'Un article très court, qui donne les faits.' },
    { word: 'à domicile', en: 'at home (sport)', note: 'Dans sa ville, devant son public.' },
  ],
  questions: [
    { q: 'Quelle histoire fait la une ?', a: '« Une nouvelle mairesse élue à Sherbrooke ».' },
    { q: 'Dans le titre sur les loyers, quel nom remplace le verbe augmenter ?', a: '« Hausse » : « Hausse des loyers ».' },
    { q: '« Deux suspects arrêtés » : écris la phrase complète.', a: 'Deux suspects ont été arrêtés.' },
    { q: 'Selon qui la hausse des loyers sera-t-elle le premier défi ?', a: 'Selon plusieurs commerçants du centre-ville.' },
  ],
  audio: REC('rec-b1-34-une'),
  say: REFRAME,
  terms: ['titre', 'source'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-titres',
  title: 'Le verbe devient un nom',
  frSub: 'Cinq familles et la une',
  hint: 'Six cartes. Cherche le nom que le titre garde.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['titre', 'famille'],
  cards: [
    card(E(1034), 'Il part', 'la famille',
      'Le ministre démissionne ; le titre dit « Démission du ministre ». EN: the headline keeps the noun.'),
    card(E(1035), 'Elle ferme', 'la famille',
      'L’usine ferme ; le titre dit « Fermeture de l’usine ». EN: closure.'),
    card(E(1036), 'Ça monte, ça descend', 'la famille',
      'Les loyers augmentent : hausse des loyers. Le chômage baisse : baisse du chômage. On dit la hausse, sans élision. EN: a rise, a fall.'),
    card(E(1037), 'Le vote', 'la famille',
      `Le titre garde le participe du passif : « mairesse élue » veut dire elle a été élue. ${Cap(PASSIF_REF)} : « ${B118_REFRAME} » EN: ${B118_REFRAME_EN}`),
    card(E(1038), 'La police', 'la famille',
      'Arrêter, l’arrestation. Le titre dit « Deux suspects arrêtés ». EN: to arrest, the arrest.'),
    card(E(1039), 'La première page', 'les voisins',
      'Une histoire fait la une : tout le monde en parle. On dit la une, sans élision. EN: to make the front page.'),
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Du titre à la phrase',
  groups: [
    grp('Le nom à la place du verbe', [
      it(E(1041), 'le titre'),
      it(E(1042), 'la phrase complète'),
      it(E(1044), 'hausse : augmenter'),
      it('fr.b1.journalisme.002', 'la première page'),
    ], chk(
      'Dans « Démission du ministre », qu’est-ce qui manque ?',
      ['le verbe conjugué et l’article', 'le nom'], 0,
      'Le titre enlève le verbe et l’article, et garde le nom. EN: the headline drops the verb and the article.')),
    grp('Le passif coupé', [
      it(E(1045), 'le titre : élue'),
      it(E(1046), 'la phrase : a été élue'),
      it(E(1047), 'le titre : arrêtés'),
      it(E(1048), 'la phrase : ont été arrêtés'),
    ], chk(
      '« Deux suspects arrêtés » veut dire...',
      ['deux suspects ont arrêté quelqu’un', 'deux suspects ont été arrêtés'], 1,
      `Le titre garde le participe et enlève ont été. ${Cap(PASSIF_REF)} t’a montré ce passif. EN: a cut passive.`)),
    ctl('La une', 'To make the front page :',
      ['faire la une', 'être la première'], 0,
      'Une histoire fait la une. EN: faire la une.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['titre', 'famille'],
};

/** NAME, as a lookup: six headline nouns. A cut of the sheet's table. */
const A3_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-tableau',
  layer: 'core',
  sheetId: 'sheet-titres',
  title: 'Six verbes, six titres',
  cols: ['Le verbe', 'Dans le titre', 'Exemple'],
  rows: [
    { cells: ['démissionner', 'la démission', 'Démission du ministre'], say: fr(E(1041)),
      detail: { title: 'Démissionner', body: 'Quitter son poste. Le titre garde le nom, sans article. EN: to resign, resignation.', say: fr(E(1042)) } },
    { cells: ['fermer', 'la fermeture', 'Fermeture de l’usine'], say: fr(E(1043)),
      detail: { title: 'Fermer', body: 'Le nom en -ure : la fermeture, l’ouverture. EN: closure, opening.', say: fr(E(1079)) } },
    { cells: ['augmenter', 'la hausse', 'Hausse des loyers'], say: fr(E(1044)),
      detail: { title: 'Augmenter', body: 'Le titre préfère la hausse à l’augmentation : c’est plus court. EN: a rise.', say: fr(E(1044)) } },
    { cells: ['baisser', 'la baisse', 'Baisse du chômage'], say: 'Baisse du chômage en juin',
      detail: { title: 'Baisser', body: 'Le contraire de la hausse. EN: a fall.', say: 'Le chômage a baissé en juin.' } },
    { cells: ['élire', 'élu, élue', 'Une mairesse élue'], say: fr(E(1045)),
      detail: { title: 'Élire', body: 'Le participe du passif, sans a été. Il s’accorde : élue, élus. EN: the participle.', say: fr(E(1046)) } },
    { cells: ['arrêter', 'arrêtés', 'Deux suspects arrêtés'], say: fr(E(1047)),
      detail: { title: 'Arrêter', body: 'Le participe au pluriel : arrêtés, avec un s qu’on n’entend pas. EN: plural participle.', say: fr(E(1048)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['titre'],
};

const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Écris le titre, lis le titre',
  groups: [
    ctl('La piscine', 'La ville ferme la piscine. Le titre dit :',
      ['Fermeture de la piscine', 'La piscine fermer', 'Fermé la piscine'], 0,
      'Le nom, sans article au début : Fermeture de la piscine. EN: the noun.'),
    ctl('Les loyers', 'Les loyers augmentent. Le titre dit :',
      ['Haussement des loyers', 'Hausse des loyers'], 1,
      'Le nom d’augmenter, dans un titre : la hausse. EN: hausse.'),
    ctl('La police', '« Deux suspects arrêtés » : qui a arrêté qui ?',
      ['la police a arrêté deux suspects', 'deux suspects ont arrêté la police'], 0,
      'Le participe du passif : les suspects ont été arrêtés. EN: they were arrested.'),
    ctl('La une', 'Tout le monde en parle, l’histoire est en première page. Elle...',
      ['fait le titre', 'fait la première', 'fait la une'], 2,
      'Elle fait la une. EN: it makes the front page.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['titre'],
};

/** TRAP, stepped: the verb in the headline, the invented noun, the missing
 *  agreement, l’une. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges du titre',
  rule: {
    title: 'Un nom, un participe, pas de petits mots',
    body: 'Le titre prend le nom (la démission, la hausse) ou le participe (élue, arrêtés), qui s’accorde. Dans une phrase, tu remets le verbe. Et c’est la une, sans élision. EN: headlines take the noun or an agreeing participle.',
  },
  cards: [
    { promptLabel: 'le verbe dans le titre', promptSound: 'Démissionner du ministre des Transports', fr: fr(E(1041)), ipa: ipaOf(E(1041)), tip: 'Le titre prend le nom : la démission. EN: the noun, not the verb.' },
    { promptLabel: 'un nom inventé', promptSound: 'Haussement des loyers à Montréal', fr: fr(E(1044)), ipa: ipaOf(E(1044)), tip: 'Le nom d’augmenter, dans un titre : la hausse. EN: hausse.' },
    { promptLabel: 'l’accord oublié', promptSound: 'Une nouvelle mairesse élu à Sherbrooke', fr: fr(E(1045)), ipa: ipaOf(E(1045)), tip: 'Une mairesse : élue, au féminin. EN: agreement.' },
    { promptLabel: 'le pluriel oublié', promptSound: 'Deux suspects arrêté après le vol d’un tableau', fr: fr(E(1047)), ipa: ipaOf(E(1047)), tip: 'Deux suspects : arrêtés, avec un s. Il ne s’entend pas, il s’écrit. EN: plural -s.' },
    { promptLabel: 'le titre dans la phrase', promptSound: 'Le ministre des Transports a démission.', fr: fr(E(1042)), ipa: ipaOf(E(1042)), tip: 'Dans une phrase, on remet le verbe : a démissionné. EN: back to the verb.' },
    { promptLabel: 'l’élision', promptSound: 'Cette histoire a fait l’une de tous les journaux.', fr: fr(E(1049)), ipa: ipaOf(E(1049)), tip: 'La une, sans élision, comme la hausse. EN: la une.' },
  ],
  drill: [
    { promptSay: 'Titre : ... du ministre des Transports.', opts: ['Démission', 'Démissionner'], correct: 0 },
    { promptSay: 'Titre : ... des loyers à Montréal.', opts: ['Haussement', 'Hausse'], correct: 1 },
    { promptSay: 'Titre : Une nouvelle mairesse ... à Sherbrooke.', opts: ['élu', 'élue', 'élus'], correct: 1 },
    { promptSay: 'Titre : Deux suspects ... après le vol.', opts: ['arrêtés', 'arrêté'], correct: 0 },
    { promptSay: 'Phrase : Le ministre a ... .', opts: ['démission', 'démissionné'], correct: 1 },
    { promptSay: 'Cette histoire a fait ... de tous les journaux.', opts: ['la une', 'l’une'], correct: 0 },
    { promptSay: 'Titre : ... de l’usine de meubles.', opts: ['Fermer', 'Fermage', 'Fermeture'], correct: 2 },
    { promptSay: 'Titre : ... du chômage en juin.', opts: ['Baisse', 'Baissement'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un nom, un participe, pas de petits mots' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le titre faux raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six titres corrects' },
    { label: 'À toi', kind: 'drill', title: 'Huit titres', gate: true },
  ],
  audio: REC('rec-b1-34-piege-titres'),
  say: REFRAME,
  terms: ['titre', 'famille'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le nom', 'Le ministre démissionne. Le titre dit :',
    ['Démission du ministre', 'Démissionner du ministre'], 0,
    'Le titre garde le nom. EN: the noun.'),
  ctl('Le participe', '« Une mairesse élue » veut dire...',
    ['elle a élu quelqu’un', 'elle a été élue'], 1,
    'Le participe du passif, sans a été. EN: she was elected.'),
  ctl('La une', 'Faire ... : être en première page.',
    ['l’une', 'la une', 'le une'], 1,
    'La une, sans élision. EN: la une.'),
], ['titre', 'famille']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Lire un titre',
    opener: {
      line: 'Démission, hausse, fermeture : ici tu lis les titres qui parlent avec des noms, et tu les remets en phrases. EN: Resignation, rise, closure: here you read headlines that speak in nouns, and turn them back into sentences.',
      imageRef: 'lessons/medias/act03.jpg',
    },
    sections: [],
    milestone: 'Tu lis un titre fait de noms et de participes, et tu dis la phrase qui est derrière. EN: You read a headline made of nouns and participles, and say the sentence behind it.',
    estScreens: 42, restPoints: ['a3-construire', 'a3-choisir'],
  },
  sections: [A3_LECTURE, A3_CARTES, A3_CONSTRUIRE, A3_TABLEAU, A3_CHOISIR, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA RADIO ET LA TÉLÉ
 *
 *  diffuser, une émission, une chaîne, en direct, animer, the three publics
 *  (auditeur, téléspectateur, lecteur), and the Québec variants (le
 *  bulletin de nouvelles, une entrevue, un balado).
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the transcript of a morning bulletin, Dakar. */
const A4_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le journal de sept heures',
  frSub: 'Lis le bulletin de Radio Baobab',
  text: BULLETIN_TEXT,
  glossary: [
    { word: 'la corniche', en: 'the coast road (Dakar)', note: 'La grande route au bord de la mer, à Dakar.' },
    { word: 'recueilli', en: 'gathered', note: 'Elle a écouté les gens et noté ce qu’ils disent.' },
    { word: 'le standard', en: 'the switchboard', note: 'Le numéro de la radio pour les appels.' },
    { word: 'notre antenne', en: 'our airwaves', note: 'À l’antenne : à la radio, en ce moment.' },
  ],
  questions: [
    { q: 'Quelle est la première nouvelle du bulletin ?', a: 'La météo : forte chaleur à Dakar, jusqu’à trente-huit degrés.' },
    { q: 'Où est l’envoyée spéciale ?', a: 'À Thiès, avec les élèves et les parents.' },
    { q: 'Qu’est-ce qui se passe à neuf heures ?', a: 'Une émission en direct avec les auditeurs, sur le prix des produits au marché.' },
    { q: 'Le match sera-t-il enregistré ou en direct ?', a: 'En direct : « le match sera diffusé en direct sur notre antenne ».' },
  ],
  audio: REC('rec-b1-34-bulletin'),
  say: REFRAME,
  terms: ['voisins', 'source'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-medias',
  title: 'À l’antenne',
  frSub: 'Diffuser, animer, écouter',
  hint: 'Six cartes. Regarde le mot qui va avec chaque média.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'voisins', 'variante'],
  cards: [
    card(E(1052), 'Envoyer à tout le monde', 'la famille',
      'La radio diffuse une émission ; la diffusion, c’est le moment où elle passe. EN: to broadcast.'),
    card(E(1053), 'Ce qui passe, et où', 'les voisins',
      'Une émission passe sur une chaîne de télé. Une émission, c’est a programme. EN: a programme, a channel.'),
    card(E(1054), 'Maintenant ou plus tard', 'les voisins',
      'En direct : on le voit pendant que ça se passe. En différé : c’est enregistré. EN: live, pre-recorded.'),
    card(E(1057), 'Celle qui parle au micro', 'la famille',
      'L’animatrice anime l’émission : elle pose les questions et reçoit les invités. EN: the host.'),
    card(E(1058), 'Qui écoute, qui regarde', 'la famille',
      'À la radio, des auditeurs. À la télé, des téléspectateurs. Au journal, des lecteurs. EN: listeners, viewers, readers.'),
    card(E(1060), 'À écouter quand tu veux', 'la variante',
      'Au Québec, un balado ; en France et en Belgique, un podcast. Les deux sont justes. EN: a podcast.'),
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce qui passe, et qui écoute',
  groups: [
    grp('À l’antenne', [
      it(E(1061), 'en direct'),
      it(E(1062), 'le téléjournal, au Québec'),
      it(E(1063), 'l’animatrice et son invitée'),
      it('fr.a1.routines.183', 'la radio à la maison'),
    ], chk(
      'Une émission diffusée en direct, c’est...',
      ['une émission enregistrée la veille', 'une émission qu’on voit pendant qu’elle se passe'], 1,
      'En direct : maintenant. En différé : enregistré. EN: live.')),
    grp('Sur le terrain et au téléphone', [
      it(E(1064), 'l’envoyée spéciale'),
      it(E(1068), 'le reportage'),
      it(E(1065), 'les auditeurs appellent'),
      it(E(1066), 'un balado, au Québec'),
    ], chk(
      'Les personnes qui écoutent la radio, ce sont...',
      ['les écouteurs', 'les auditeurs', 'les spectateurs'], 1,
      'Les auditeurs. Les écouteurs, ce sont de petits haut-parleurs. EN: listeners.')),
    ctl('La variante', 'Au Québec, pour an interview, on dit souvent...',
      ['une entrevue', 'une entrée'], 0,
      'Une entrevue. En France, une interview. Les deux sont justes. EN: une entrevue.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'variante'],
};

const A4_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a4-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  itemIds: dicteeFor(4),
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins'],
};

const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon mot à la radio',
  groups: [
    ctl('Le soir', 'Tu veux savoir ce qui passe à la télé ce soir. Tu regardes...',
      ['l’émission', 'le programme'], 1,
      'Le programme : la liste des émissions de la soirée. EN: the listings.'),
    ctl('Le match', 'Tu vois le match pendant qu’il se joue. Il est...',
      ['en différé', 'en direct', 'en retard'], 1,
      'En direct. EN: live.'),
    ctl('Le micro', 'La personne qui présente l’émission et reçoit les invités :',
      ['l’animateur', 'l’auditeur', 'le lecteur'], 0,
      'L’animateur, l’animatrice. EN: the host.'),
    ctl('Le bulletin', 'Au Québec, les nouvelles de sept heures à la radio, c’est...',
      ['le bulletin de nouvelles', 'la brève de nouvelles'], 0,
      'Le bulletin de nouvelles. En France, le journal ou le flash info. EN: the news bulletin.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'variante'],
};

/** TRAP: four English look-alikes on air. */
const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs à l’antenne',
  errors: [
    { wrong: 'L’animatrice a reçu une ministre dans son programme.', right: fr(E(1063)),
      why: 'Normal : l’anglais dit a programme. En français, c’est une émission ; le programme, c’est la liste de la soirée. EN: a programme is une émission.' },
    { wrong: 'L’émission est diffusée vivante tous les soirs.', right: fr(E(1061)),
      why: 'Normal : live se traduit souvent par vivant. À la radio et à la télé, c’est en direct. EN: live is en direct.' },
    { wrong: 'Les écouteurs peuvent appeler pendant l’émission.', right: fr(E(1065)),
      why: 'Normal : écouter donne l’idée. Mais des écouteurs, ce sont de petits haut-parleurs pour les oreilles. La personne, c’est l’auditeur. EN: listeners are auditeurs.' },
    { wrong: 'Le matin, je regarde les nouvelles à la radio.', right: fr(E(1008)),
      why: 'Normal : en anglais, on peut get the news partout. À la radio, on écoute ; à la télé, on regarde. EN: écouter la radio.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxami', 'voisins'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('L’émission', 'A TV programme, en français :',
    ['un programme', 'une émission'], 1,
    'Une émission. EN: une émission.'),
  ctl('Le public', 'À la radio, le public, ce sont...',
    ['les auditeurs', 'les téléspectateurs', 'les lecteurs'], 0,
    'Les auditeurs écoutent la radio. EN: listeners.'),
  ctl('Le direct', 'Live, à la télé :',
    ['en vivant', 'en direct'], 1,
    'En direct. EN: en direct.'),
], ['voisins', 'fauxami']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La radio et la télé',
    opener: {
      line: 'Sept heures à Dakar, le micro s’allume : ici tu dis ce qui passe à l’antenne, et qui écoute. EN: Seven o’clock in Dakar, the microphone goes on: here you say what is on air, and who is listening.',
      imageRef: 'lessons/medias/act04.jpg',
    },
    sections: [],
    milestone: 'Tu parles d’une émission en direct, de son animatrice et de ses auditeurs, avec les mots du Québec et ceux de France. EN: You talk about a live programme, its host and its listeners, in Québec and France words.',
    estScreens: 40, restPoints: ['a4-construire', 'a4-choisir'],
  },
  sections: [A4_LECTURE, A4_CARTES, A4_CONSTRUIRE, A4_DICTEE, A4_CHOISIR, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — QUI DIT QUOI
 *
 *  selon, d’après, de source sûre; déclarer, annoncer, témoigner, citer;
 *  un porte-parole; reported speech in the news (lesson 19 in B1).
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a news brief built on sources. */
const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Accident sur l’autoroute',
  frSub: 'Lis, et cherche qui dit quoi',
  text: BREVE_TEXT,
  glossary: [
    { word: 'en collision', en: 'collided', note: 'Deux véhicules qui se tapent l’un contre l’autre.' },
    { word: 'gravement', en: 'seriously', note: 'Très blessé.' },
    { word: 'se manifester', en: 'to come forward', note: 'Appeler la police pour dire ce qu’on a vu.' },
    { word: 'hors de danger', en: 'out of danger', note: 'Leur vie n’est plus menacée.' },
  ],
  questions: [
    { q: 'Selon qui y a-t-il trois blessés ?', a: 'Selon la police.' },
    { q: 'Qui dit que le camion roulait très vite ?', a: 'Les témoins : « D’après les témoins ».' },
    { q: 'Qui a fait une déclaration ce matin ?', a: 'La porte-parole de la police.' },
    { q: 'Les blessés sont-ils hors de danger, c’est sûr ?', a: 'Non, pas encore : « les blessés seraient hors de danger », selon une source à l’hôpital.' },
  ],
  audio: REC('rec-b1-34-breve'),
  say: REFRAME,
  terms: ['source', 'voisins'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sources',
  title: 'Qui le dit',
  frSub: 'Selon, d’après, et les verbes de la parole',
  hint: 'Six cartes. Cherche qui parle dans chaque bloc.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['source', 'famille', 'voisins'],
  cards: [
    card(E(1069), 'Le nom de la source', 'les voisins',
      'Selon et d’après, puis la personne ou l’organisme qui parle, sans préposition. EN: according to.'),
    card(E(1070), 'Une source qu’on ne nomme pas', 'les voisins',
      'De source sûre : le journaliste a confiance, mais il ne dit pas qui. EN: from a reliable source.'),
    card(E(1071), 'Parler en public', 'la famille',
      'On fait une déclaration. Le ministre a déclaré que... EN: to state, a statement.'),
    card(E(1072), 'Dire une nouvelle', 'la famille',
      'La mairie annonce une décision ; on lit l’annonce. EN: to announce.'),
    card(E(1073), 'Ceux qui ont vu', 'la famille',
      'Le témoin a vu. Il témoigne. Ce qu’il raconte, c’est son témoignage. EN: witness, to testify, an account.'),
    card(E(1074), 'Les mots exacts', 'la famille',
      'Citer quelqu’un, c’est répéter ses mots, entre guillemets. EN: to quote.'),
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'La source dans la phrase',
  groups: [
    grp('Selon, d’après', [
      it(E(1076), 'selon le ministère'),
      it(E(1077), 'd’après les témoins'),
      it('fr.b1.projets-et-futur.760', 'selon la police'),
      it('fr.b1.strategies-de-comprehension.1027', 'la source à la fin'),
    ], chk(
      'Dans ces phrases, qui donne l’info ?',
      ['la personne après selon ou d’après', 'le journaliste lui-même'], 0,
      'Selon et d’après nomment la source. Le journaliste rapporte. EN: the source is named.')),
    grp('Déclarer, annoncer, témoigner', [
      it(E(1078), 'faire une déclaration'),
      it(E(1079), 'annoncer'),
      it(E(1080), 'témoigner'),
      it(E(1082), 'a déclaré que'),
    ], chk(
      '« Le ministre a déclaré qu’il ne démissionnerait pas. » Ses mots étaient...',
      ['« Je ne démissionnerai pas. »', '« Je ne démissionnerais pas. »'], 0,
      `Après a déclaré que, le futur devient conditionnel, comme dans ${DISCOURS_REF}. EN: reported speech.`)),
    ctl('Le porte-parole', 'La personne qui parle au nom de la police :',
      ['le porte-parole', 'le porte-voix', 'le parleur'], 0,
      'Un porte-parole, une porte-parole. EN: a spokesperson.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['source', 'famille'],
};

const A5_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a5-flash',
  layer: 'core',
  title: 'Huit cartes pour dire qui parle',
  cards: [
    { front: 'according to witnesses', back: 'd’après les témoins', say: fr(E(1077)) },
    { front: 'from a reliable source', back: 'de source sûre', say: fr(E(1083)) },
    { front: 'to make a statement', back: 'faire une déclaration', say: fr(E(1078)) },
    { front: 'to announce', back: 'annoncer', say: fr(E(1079)) },
    { front: 'to give an account', back: 'témoigner', say: fr(E(1080)) },
    { front: 'accounts, testimonies', back: 'des témoignages', say: fr(E(1085)) },
    { front: 'to cite your sources', back: 'citer ses sources', say: fr(E(1081)) },
    { front: 'a spokesperson', back: 'un porte-parole', say: fr(E(1078)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['source', 'voisins'],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Nomme la source',
  groups: [
    ctl('L’accident', 'La police dit qu’il y a trois blessés. Le journal écrit :',
      ['Selon la police, trois blessés.', 'Selon à la police, trois blessés.'], 0,
      'Selon, sans préposition. EN: selon la police.'),
    ctl('Le secret', 'Le journaliste sait qui parle, mais il ne veut pas le dire. Il écrit :',
      ['de source sûre', 'd’après personne', 'selon un secret'], 0,
      'De source sûre. EN: from a reliable source.'),
    ctl('La voisine', 'Une voisine raconte à la caméra ce qu’elle a vu. Elle...',
      ['témoigne', 'déclare la guerre', 'cite'], 0,
      'Elle témoigne : c’est son témoignage. EN: she gives her account.'),
    ctl('Les guillemets', 'Le journaliste répète les mots exacts du maire, entre guillemets. Il...',
      ['cite le maire', 'quote le maire'], 0,
      'Il cite le maire : c’est une citation. EN: he quotes the mayor.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['source'],
};

/** TRAP, stepped: prepositions after selon, the verb of statement, the
 *  witness noun, the English verb, the reported future. */
const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges de la source',
  rule: {
    title: 'Selon le ministère, sans rien entre',
    body: 'Selon et d’après prennent le nom directement. On fait une déclaration, on témoigne, on cite. Et après a déclaré que, le futur devient conditionnel. EN: no preposition after selon; each act of speech has its verb.',
  },
  cards: [
    { promptLabel: 'selon à', promptSound: 'Selon au ministère, les examens auront lieu en juin.', fr: fr(E(1076)), ipa: ipaOf(E(1076)), tip: 'Selon, directement : selon le ministère. EN: no à.' },
    { promptLabel: 'd’après à', promptSound: 'D’après aux témoins, le camion roulait très vite.', fr: fr(E(1077)), ipa: ipaOf(E(1077)), tip: 'D’après, puis le nom : d’après les témoins. EN: no à.' },
    { promptLabel: 'donner une déclaration', promptSound: 'La porte-parole de la police a donné une déclaration ce matin.', fr: fr(E(1078)), ipa: ipaOf(E(1078)), tip: 'On fait une déclaration. EN: to make a statement.' },
    { promptLabel: 'la personne pour le verbe', promptSound: 'Une voisine a témoin devant la caméra.', fr: fr(E(1080)), ipa: ipaOf(E(1080)), tip: 'Le verbe, c’est témoigner. Le témoin, c’est la personne. EN: the verb is témoigner.' },
    { promptLabel: 'le verbe anglais', promptSound: 'Le journaliste quote ses sources à la fin de l’article.', fr: fr(E(1081)), ipa: ipaOf(E(1081)), tip: 'To quote, en français : citer. EN: citer.' },
    { promptLabel: 'le futur rapporté', promptSound: 'Le ministre a déclaré qu’il ne démissionnera pas.', fr: fr(E(1082)), ipa: ipaOf(E(1082)), tip: `Après a déclaré que, le futur devient conditionnel, comme dans ${DISCOURS_REF}. EN: reported speech.` },
  ],
  drill: [
    { promptSay: '... le ministère, les examens auront lieu en juin.', opts: ['Selon', 'Selon au'], correct: 0 },
    { promptSay: 'D’après ... témoins, le camion roulait vite.', opts: ['aux', 'les'], correct: 1 },
    { promptSay: 'La porte-parole a ... une déclaration.', opts: ['fait', 'donné', 'dit'], correct: 0 },
    { promptSay: 'Une voisine a ... devant la caméra.', opts: ['témoin', 'témoigné'], correct: 1 },
    { promptSay: 'Le journaliste ... ses sources.', opts: ['cite', 'quote'], correct: 0 },
    { promptSay: 'Le ministre a déclaré qu’il ne ... pas.', opts: ['démissionnera', 'démissionnerait'], correct: 1 },
    { promptSay: 'Je le sais de source ... .', opts: ['sûre', 'sécure', 'sérieuse'], correct: 0 },
    { promptSay: 'La mairie a ... la fermeture du pont.', opts: ['annoncé', 'annoncée'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Selon le ministère, sans rien entre' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la phrase fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-34-piege-sources'),
  say: REFRAME,
  terms: ['source', 'voisins'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Selon', '« Selon la police, trois blessés. » Qui dit qu’il y a trois blessés ?',
    ['le journal', 'la police'], 1,
    'La police. Le journal rapporte ce qu’elle dit. EN: the police.'),
  ctl('La déclaration', 'To make a statement :',
    ['faire une déclaration', 'donner une déclaration', 'dire une déclaration'], 0,
    'Faire une déclaration. EN: faire.'),
  ctl('Le témoin', 'Ce que raconte un témoin, c’est...',
    ['un témoignage', 'une témoinerie'], 0,
    'Un témoignage. EN: an account.'),
], ['source', 'famille']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Qui dit quoi',
    opener: {
      line: 'Selon la police, d’après les témoins, de source sûre : ici tu trouves, dans chaque phrase, qui donne l’info. EN: According to the police, according to witnesses, from a reliable source: here you find who is giving the news in every sentence.',
      imageRef: 'lessons/medias/act05.jpg',
    },
    sections: [],
    milestone: 'Tu nommes la source d’une info avec selon et d’après, et tu dis qui déclare, qui annonce et qui témoigne. EN: You name the source of a story and say who states, announces and testifies.',
    estScreens: 42, restPoints: ['a5-construire', 'a5-choisir'],
  },
  sections: [A5_LECTURE, A5_CARTES, A5_CONSTRUIRE, A5_FLASH, A5_CHOISIR, A5_PIEGE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — L’INFO PAS ENCORE CONFIRMÉE
 *
 *  The conditional of hearsay (lesson 8 in B1): « le ministre
 *  démissionnerait » is reported, « il démissionnera » is confirmed.
 *  confirmer, démentir, une rumeur court, sous réserve, il paraît que.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: a news flash that mixes confirmed and unconfirmed items.
 *  `hideLines`: the questions are about what the ear caught. */
const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le flash de midi',
  frSub: 'Écoute, et dis ce qui est sûr',
  lines: [
    ln(E(1091)), ln(E(1097)), ln(E(1092)), ln(E(1096)), ln(E(1093)),
    ln(E(1094)), ln(E(1095)), ln(E(1098)), ln('fr.b1.projets-et-futur.766'), ln('fr.b1.projets-et-futur.762'),
  ],
  questions: [
    { q: 'Le ministre : dans la première phrase, sa démission est-elle confirmée ?', opts: ['non, pas encore', 'oui, c’est sûr'], correct: 0, why: '« démissionnerait » : au conditionnel, ce n’est pas encore confirmé. EN: not yet.' },
    { q: 'Et dans la deuxième phrase ?', opts: ['oui, c’est confirmé', 'non, c’est une rumeur'], correct: 0, why: '« démissionnera », et « c’est confirmé » : le futur dit ce qui est sûr. EN: confirmed.' },
    { q: 'Qui a confirmé l’arrestation des deux suspects ?', opts: ['un témoin', 'la police', 'le ministère'], correct: 1, why: 'La police a confirmé l’arrestation. EN: the police.' },
    { q: 'La chanteuse : qu’est-ce qu’on sait vraiment ?', opts: ['elle est à l’hôpital', 'rien n’est confirmé'], correct: 1, why: '« serait malade, mais rien n’est confirmé ». EN: nothing is confirmed.' },
    { q: 'Qui a répondu à la rumeur, et comment ?', opts: ['le ministère, qui l’a démentie', 'la police, qui l’a confirmée'], correct: 0, why: 'Le ministère a démenti la rumeur : il a dit qu’elle était fausse. EN: the ministry denied it.' },
  ],
  audio: REC('rec-b1-34-flash-ecoute'),
  say: REFRAME,
  terms: ['ondit', 'source'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sources',
  title: 'Sûr, ou pas encore',
  frSub: 'Le conditionnel du on-dit',
  hint: 'Six cartes. Demande-toi à chaque fois : est-ce confirmé ?',
  audio: AUDIO,
  say: REFRAME,
  terms: ['ondit', 'famille'],
  cards: [
    card(E(1091), 'On me l’a dit', 'le on-dit',
      `Au conditionnel, le journaliste rapporte, mais il n’a pas encore la confirmation. ${Cap(CONDITIONNEL_REF)} : « ${B108_REFRAME} » EN: ${B108_REFRAME_EN}`),
    card(E(1086), 'C’est sûr', 'la famille',
      'Confirmer, c’est dire officiellement que c’est vrai. Une info confirmée passe au futur ou au passé composé. EN: to confirm.'),
    card(E(1087), 'C’est faux', 'la famille',
      'Démentir, c’est dire publiquement qu’une info est fausse. Le ministère dément ; c’est un démenti. EN: to deny a report.'),
    card(E(1088), 'Ce qui court', 'les voisins',
      'Une rumeur court, ou circule. À l’oral, on dit souvent : il paraît que... EN: a rumour is going round.'),
    card(E(1089), 'La prudence du journal', 'les voisins',
      'Sous réserve de confirmation : le journal publie, mais il prévient. EN: subject to confirmation.'),
    card(E(1090), 'Le nom de la chose', 'les voisins',
      'Une information non confirmée : on la lit, on attend avant de la répéter. EN: an unconfirmed report.'),
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Rapporté ou confirmé',
  groups: [
    grp('Pas encore confirmé', [
      it(E(1092), 'selon nos informations'),
      it(E(1094), 'rien n’est confirmé'),
      it('fr.b1.projets-et-futur.762', 'selon la police'),
      it('fr.b1.projets-et-futur.763', 'd’après le journal'),
    ], chk(
      'Ces quatre infos sont...',
      ['rapportées, pas encore confirmées', 'confirmées par une source officielle'], 0,
      'Le conditionnel dit : on me l’a dit. EN: reported, not confirmed.')),
    grp('Confirmé, ou démenti', [
      it(E(1096), 'la police a confirmé'),
      it(E(1097), 'le futur : c’est sûr'),
      it(E(1095), 'le ministère a démenti'),
      it(E(1101), 'attendre la confirmation'),
    ], chk(
      'Démentir une info, c’est dire...',
      ['qu’elle est vraie', 'qu’elle est fausse'], 1,
      'Démentir : dire publiquement que c’est faux. EN: to deny.')),
    ctl('Le temps', 'Laquelle est sûre ?',
      ['L’usine fermerait en décembre.', 'L’usine fermera en décembre.'], 1,
      'Le futur : c’est confirmé. Le conditionnel : c’est rapporté. EN: the future is sure.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ondit'],
};

/** NAME, as a lookup: six ways a story tells you how sure it is. */
const A6_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-tableau',
  layer: 'core',
  sheetId: 'sheet-sources',
  title: 'Six façons de dire : sûr ou pas',
  cols: ['On lit', 'C’est...', 'Exemple'],
  rows: [
    { cells: ['démissionnerait', 'pas confirmé', 'le conditionnel'], say: fr(E(1091)),
      detail: { title: 'Le conditionnel', body: 'Le journaliste rapporte ce qu’on lui a dit. EN: reported, not confirmed.', say: fr('fr.b1.projets-et-futur.766') } },
    { cells: ['démissionnera', 'confirmé', 'le futur'], say: fr(E(1097)),
      detail: { title: 'Le futur', body: 'La décision est prise et annoncée. EN: confirmed.', say: fr(E(1096)) } },
    { cells: ['aurait fait', 'pas confirmé, au passé', 'aurait + participe'], say: fr(E(1093)),
      detail: { title: 'Aurait fait', body: 'Le conditionnel passé : tu le reconnais dans le journal, tu n’as pas besoin de l’écrire. EN: past conditional, to recognise.', say: fr(E(1093)) } },
    { cells: ['il paraît que', 'une rumeur, à l’oral', 'entre amis'], say: fr(E(1100)),
      detail: { title: 'Il paraît que', body: 'On répète ce qu’on a entendu, sans source. EN: apparently.', say: fr('fr.b1.opinions-et-avis.1364') } },
    { cells: ['selon nos informations', 'le journal a une source', 'souvent au conditionnel'], say: fr(E(1092)),
      detail: { title: 'Selon nos informations', body: 'Le journal a une source, mais ne la nomme pas. EN: according to our information.', say: fr(E(1092)) } },
    { cells: ['a confirmé, a démenti', 'la réponse officielle', 'la fin du on-dit'], say: fr(E(1095)),
      detail: { title: 'Confirmer, démentir', body: 'Une source officielle dit oui ou non. EN: the official answer.', say: fr(E(1096)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ondit', 'source'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Dis-le au bon temps',
  groups: [
    ctl('La radio', 'La radio n’a pas encore de confirmation. Elle dit :',
      ['Le festival serait annulé.', 'Le festival sera annulé.'], 0,
      'Pas de confirmation : le conditionnel. EN: the conditional.'),
    ctl('Le démenti', 'Le ministère dit publiquement que la rumeur est fausse. Il...',
      ['la confirme', 'la relaie', 'la dément'], 2,
      'Il la dément : c’est un démenti. EN: he denies it.'),
    ctl('La police', 'La police donne le nom des deux suspects arrêtés. L’arrestation est...',
      ['sous réserve', 'confirmée'], 1,
      'Une source officielle l’a dit : c’est confirmé. EN: confirmed.'),
    ctl('Au café', 'Ta collègue a entendu une rumeur au café. Elle dit :',
      ['Il paraît que le bureau va fermer.', 'Le bureau a fermé, c’est officiel.'], 0,
      'Il paraît que : on répète une rumeur. EN: apparently.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ondit'],
};

/** TRAP: the sure tense on a rumour, deny, the confirmed conditional,
 *  the English verb for a rumour. */
const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs du on-dit',
  errors: [
    { wrong: 'Selon une rumeur, le ministre démissionnera dans les prochains jours.', right: 'Selon une rumeur, le ministre démissionnerait dans les prochains jours.',
      why: 'Normal : en anglais, will marche partout. Mais une rumeur n’est pas sûre : le français met le conditionnel. EN: unconfirmed news takes the conditional.' },
    { wrong: 'Le ministère a dénié la rumeur ce matin.', right: fr(E(1095)),
      why: 'Normal : deny fait penser à dénier. Pour une info, on dit démentir : il a démenti. EN: to deny a report is démentir.' },
    { wrong: 'L’incendie aurait fait deux blessés : c’est confirmé.', right: 'L’incendie a fait deux blessés : c’est confirmé.',
      why: 'Normal : le conditionnel sonne prudent. Mais si c’est confirmé, le fait est sûr : le passé composé. EN: confirmed facts drop the conditional.' },
    { wrong: 'Une rumeur marche sur les réseaux : le festival serait annulé.', right: fr(E(1098)),
      why: 'Normal : en anglais, a rumour goes around. En français, une rumeur court, ou circule. EN: une rumeur court.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ondit', 'fauxami'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le conditionnel', '« Le ministre démissionnerait. » C’est...',
    ['confirmé', 'rapporté, pas encore confirmé'], 1,
    'Le conditionnel du on-dit. EN: reported.'),
  ctl('Le démenti', 'To deny a report :',
    ['démentir', 'dénier', 'refuser'], 0,
    'Démentir, un démenti. EN: démentir.'),
  ctl('La rumeur', 'A rumour is going round :',
    ['une rumeur marche', 'une rumeur court'], 1,
    'Une rumeur court. EN: court.'),
], ['ondit', 'source']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Pas encore confirmé',
    opener: {
      line: 'Le ministre démissionnerait : ici tu entends, dans un seul verbe, qu’une info n’est pas encore sûre. EN: The minister would reportedly resign: here you hear, in one verb, that a story is not yet sure.',
      imageRef: 'lessons/medias/act06.jpg',
    },
    sections: [],
    milestone: 'Tu sépares ce qui est confirmé de ce qui est rapporté, et tu entends le conditionnel du on-dit. EN: You tell confirmed news from reported news, and hear the conditional of hearsay.',
    estScreens: 42, restPoints: ['a6-construire', 'a6-choisir'],
  },
  sections: [A6_ECOUTE, A6_CARTES, A6_CONSTRUIRE, A6_TABLEAU, A6_CHOISIR, A6_ERREURS, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LES RÉSEAUX SOCIAUX
 *
 *  s’abonner, partager, suivre, relayer, commenter, devenir viral, le fil
 *  d’actualité. Every share moves a story further from its source.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a family group chat in Abidjan. Story bubbles avoid « ? » and « ! ». */
const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Le groupe de la famille',
  frSub: 'Une vidéo, des milliers de partages',
  setting: 'Dimanche soir, à Abidjan. Ta cousine Aïcha regarde son téléphone : sur le groupe de la famille, votre tante a encore partagé une vidéo.',
  bubbles: [
    { from: 'narrator', fr: 'Le téléphone vibre. Trois messages, une vidéo, beaucoup de commentaires.', en: 'The phone buzzes. Three messages, a video, lots of comments.' },
    { from: 'coach', fr: fr(E(1112)), en: src(E(1112)).en, warn: 'partager, sans vérifier' },
    { from: 'user', fr: 'Sa vidéo a déjà beaucoup de commentaires.', en: 'Her video already has lots of comments.' },
    { from: 'coach', fr: fr(E(1113)), en: src(E(1113)).en, warn: 'relayer : faire passer plus loin' },
    { from: 'user', fr: 'Je connais ce compte. Il a dix mille abonnés.', en: 'I know this account. It has ten thousand followers.' },
    { from: 'coach', fr: fr(E(1114)), en: src(E(1114)).en, warn: 'devenir viral, au féminin : virale' },
    { from: 'coach', fr: 'Avant de relayer, regarde d’abord qui l’a publiée.', en: 'Before passing it on, first look at who posted it.', warn: 'le relais commence à la source' },
  ],
  closing: { fr: 'Partager, relayer, commenter : chaque clic fait voyager l’info un peu plus loin de sa source.', en: 'Share, pass on, comment: every click carries the story a little further from its source.' },
  audio: REC('rec-b1-34-famille'),
  say: REFRAME,
  terms: ['relais', 'voisins'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-reseaux',
  title: 'Sur les réseaux',
  frSub: 'S’abonner, partager, relayer',
  hint: 'Six cartes. Regarde la préposition et le mot qui va avec.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'relais', 'voisins'],
  cards: [
    card(E(1102), 'Ceux qui suivent', 'la famille',
      'On s’abonne à un compte ; on s’en désabonne. La personne qui suit, c’est un abonné. EN: to follow, a follower.'),
    card(E(1103), 'Envoyer plus loin', 'la famille',
      'On partage une publication avec ses contacts. Un partage, c’est un clic de plus. EN: to share.'),
    card(E(1104), 'Voir ce qu’il publie', 'les voisins',
      'Suivre un compte, c’est voir ses publications dans ton fil. EN: to follow an account.'),
    card(E(1105), 'La course de relais', 'le relais',
      'Relayer une info, c’est la faire passer au suivant. Chaque relais l’éloigne de sa source. EN: to pass a story on.'),
    card(E(1106), 'Répondre en dessous', 'la famille',
      'On commente une publication, sans sur. Ce qu’on écrit, c’est un commentaire. EN: to comment on.'),
    card(E(1108), 'Partout, très vite', 'les voisins',
      'Une vidéo devient virale : des milliers de personnes la partagent. L’adjectif s’accorde. EN: to go viral.'),
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Suivre, partager, relayer',
  groups: [
    grp('Suivre et partager', [
      it(E(1111), 'dix mille abonnés'),
      it(E(1119), 'se désabonner de'),
      it('fr.b1.reseaux-sociaux.005', 's’abonner au compte'),
      it(E(1112), 'partager sans vérifier'),
    ], chk(
      'On s’abonne ... un compte, on se désabonne ... un compte.',
      ['à, de', 'de, à', 'sur, sur'], 0,
      'S’abonner à, se désabonner de. EN: the preposition stays.')),
    grp('Relayer, devenir viral', [
      it(E(1113), 'des milliers de relais'),
      it(E(1114), 'virale en une nuit'),
      it(E(1118), 'une influenceuse relaie'),
      it(E(1115), 'les commentaires'),
    ], chk(
      'Relayer une rumeur, c’est...',
      ['la faire circuler plus loin', 'la démentir'], 0,
      'Relayer : faire passer au suivant. EN: to pass it on.')),
    ctl('Le fil', 'The news feed, sur ton téléphone :',
      ['le fil d’actualité', 'le fil d’actuellement', 'la ligne des nouvelles'], 0,
      'Le fil d’actualité. L’actualité : ce qui se passe maintenant. EN: the news feed.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['relais', 'voisins'],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  title: 'Les réseaux en six phrases',
  examples: [
    ex('fr.b1.reseaux-sociaux.002', 'le lieu : un réseau social.'),
    ex('fr.b1.reseaux-sociaux.003', 'le bloc de base.'),
    ex(E(1116), 'le fil d’actualité : ce que tu vois en ouvrant l’application.'),
    ex(E(1110), 'liker : familier ; aimer une publication : courant.'),
    ex(E(1117), 'la différence entre partager et relayer.'),
    ex(E(1109), 'l’actualité, pas actuellement : un faux ami.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['relais', 'fauxami'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon verbe en ligne',
  groups: [
    ctl('Le compte', 'Tu veux voir toutes les publications d’une journaliste. Tu...',
      ['t’abonnes à son compte', 't’abonnes son compte'], 0,
      'S’abonner à un compte. EN: to follow.'),
    ctl('La vidéo', 'Une vidéo passe de téléphone en téléphone, partout, très vite. Elle...',
      ['devient virale', 'devient viral', 'devient virus'], 0,
      'Une vidéo : virale, au féminin. EN: it goes viral.'),
    ctl('Ton avis', 'Tu écris ce que tu penses sous une publication. Tu la...',
      ['commentes', 'commentes sur'], 0,
      'On commente une publication, sans sur. EN: to comment on.'),
    ctl('Ta tante', 'Ta tante envoie la rumeur à tous ses contacts. Elle la...',
      ['dément', 'vérifie', 'relaie'], 2,
      'Elle la relaie : elle la fait passer plus loin. EN: she passes it on.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['relais'],
};

/** TRAP, stepped: agreement, prepositions, the English verbs, relater. */
const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges des réseaux',
  rule: {
    title: 'Partager, relayer, s’abonner à',
    body: 'Les verbes des réseaux sont français : partager, suivre, relayer. Ils gardent leur préposition (s’abonner à, se désabonner de), et viral s’accorde. EN: French verbs, their prepositions, and agreement.',
  },
  cards: [
    { promptLabel: 'l’accord oublié', promptSound: 'Sa publication est devenue viral en une nuit.', fr: fr(E(1114)), ipa: ipaOf(E(1114)), tip: 'Une publication : virale, au féminin. EN: agreement.' },
    { promptLabel: 'la préposition oubliée', promptSound: 'Je me suis désabonné ce compte.', fr: fr(E(1119)), ipa: ipaOf(E(1119)), tip: 'Se désabonner de, s’abonner à. EN: the preposition stays.' },
    { promptLabel: 'le verbe anglais', promptSound: 'Ma tante share tout ce qu’elle lit, sans vérifier.', fr: fr(E(1112)), ipa: ipaOf(E(1112)), tip: 'To share : partager. EN: partager.' },
    { promptLabel: 'follower', promptSound: 'Ce compte a dix mille suiveurs.', fr: fr(E(1111)), ipa: ipaOf(E(1111)), tip: 'Les personnes qui suivent un compte sont des abonnés. EN: followers.' },
    { promptLabel: 'relater', promptSound: 'Des milliers de personnes ont relaté la vidéo.', fr: fr(E(1113)), ipa: ipaOf(E(1113)), tip: 'Relater, c’est raconter. Faire passer, c’est relayer. EN: relayer.' },
    { promptLabel: 'actually', promptSound: 'Dans mon fil d’actuellement, je vois surtout des vidéos.', fr: fr(E(1116)), ipa: ipaOf(E(1116)), tip: 'L’actualité : ce qui se passe maintenant. Actuellement veut dire now. EN: the news feed.' },
  ],
  drill: [
    { promptSay: 'Sa publication est devenue ... en une nuit.', opts: ['viral', 'virale'], correct: 1 },
    { promptSay: 'Je me suis désabonné ... ce compte.', opts: ['de', 'à'], correct: 0 },
    { promptSay: 'Ma tante ... tout ce qu’elle lit.', opts: ['share', 'partage'], correct: 1 },
    { promptSay: 'Ce compte a dix mille ... .', opts: ['suiveurs', 'abonnés'], correct: 1 },
    { promptSay: 'Des milliers de personnes ont ... la vidéo.', opts: ['relayé', 'relaté'], correct: 0 },
    { promptSay: 'Dans mon fil d’... , je vois des vidéos.', opts: ['actualité', 'actuellement'], correct: 0 },
    { promptSay: 'Il s’est abonné ... compte d’une journaliste.', opts: ['du', 'au', 'le'], correct: 1 },
    { promptSay: 'Je ... cette publication, sans sur.', opts: ['commente', 'commente sur'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Partager, relayer, s’abonner à' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la phrase fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-34-piege-reseaux'),
  say: REFRAME,
  terms: ['relais', 'fauxami'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Relayer', 'To pass a story on :',
    ['relater une info', 'relayer une info'], 1,
    'Relayer. Relater, c’est raconter. EN: relayer.'),
  ctl('L’abonné', 'The followers of an account :',
    ['les abonnés', 'les suiveurs', 'les amis'], 0,
    'Les abonnés. EN: followers.'),
  ctl('Viral', 'Une vidéo qui devient...',
    ['virale', 'viral'], 0,
    'Une vidéo : virale. EN: agreement.'),
], ['relais', 'voisins']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Les réseaux sociaux',
    opener: {
      line: 'Une vidéo sur le groupe de la famille, des milliers de partages : ici tu suis le chemin d’une info de téléphone en téléphone. EN: A video on the family chat, thousands of shares: here you follow a story from phone to phone.',
      imageRef: 'lessons/medias/act07.jpg',
    },
    sections: [],
    milestone: 'Tu dis qui partage, qui relaie et qui s’abonne, avec les verbes français et leurs prépositions. EN: You say who shares, who passes it on and who follows, with French verbs and their prepositions.',
    estScreens: 40, restPoints: ['a7-construire', 'a7-choisir'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_CONSTRUIRE, A7_EXEMPLES, A7_CHOISIR, A7_PIEGE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — VRAI OU FAUX
 *
 *  une fausse nouvelle, une infox, la désinformation, une photo truquée, un
 *  canular, se méfier de, tomber dans le panneau; the four signs of a fake.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a neighbourhood forum thread about a doctored photo. */
const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le pont sous l’eau',
  frSub: 'Lis le fil du forum',
  text: FORUM_TEXT,
  glossary: [
    { word: 'truquée', en: 'doctored', note: 'Une photo changée avec un logiciel.' },
    { word: 'un canular', en: 'a hoax', note: 'Une fausse histoire, pour rire ou pour tromper.' },
    { word: 'tombés dans le panneau', en: 'fell for it', note: 'Ils ont cru la fausse histoire.' },
    { word: 'retirer', en: 'to take down', note: 'Enlever la publication de sa page.' },
  ],
  questions: [
    { q: 'Que dit la publication partagée par l’amie de Mélanie ?', a: 'Que le pont sera fermé pendant un an, avec une photo du pont sous l’eau.' },
    { q: 'Quel détail montre que la photo est truquée ?', a: 'Les arbres ont des feuilles, alors qu’on est en février.' },
    { q: 'Pourquoi Julien parle-t-il de canular ?', a: 'La page ne cite aucune source, et le site de la ville ne dit rien.' },
    { q: 'Que va faire Mélanie ?', a: 'Dire à son amie de retirer sa publication avant qu’elle devienne virale.' },
  ],
  audio: REC('rec-b1-34-forum'),
  say: REFRAME,
  terms: ['infox', 'source'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-reseaux',
  title: 'Le vrai et le faux',
  frSub: 'Infox, canular, photo truquée',
  hint: 'Six cartes. Regarde qui veut tromper, et comment.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['infox', 'famille', 'variante'],
  cards: [
    card(E(1120), 'Deux mots, un sens', 'la variante',
      'Au Québec, une fausse nouvelle. En France, une infox. Fake news s’entend partout. EN: fake news.'),
    card(E(1121), 'Le contraire d’informer', 'la famille',
      'Informer, désinformer : même famille, avec dé-. La désinformation veut tromper. EN: disinformation.'),
    card(E(1123), 'L’image changée', 'les voisins',
      'Une photo truquée : on a changé l’image. Regarde les détails : la saison, le lieu. EN: a doctored photo.'),
    card(E(1124), 'La fausse histoire', 'les voisins',
      'Un canular : une histoire inventée, pour rire ou pour tromper. EN: a hoax.'),
    card(E(1126), 'Ne pas croire tout de suite', 'les voisins',
      'Se méfier de : attendre avant de faire confiance. Méfie-toi des titres qui font peur. EN: to be wary of.'),
    card(E(1127), 'Croire la fausse histoire', 'les voisins',
      'Tomber dans le panneau : comme tomber dans un piège. L’anglais dit to fall for it. EN: to fall for it.'),
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Faux, et fait pour tromper',
  groups: [
    grp('Ce qui est faux', [
      it(E(1128), 'une photo truquée'),
      it(E(1129), 'une fausse nouvelle circule'),
      it(E(1131), 'un canular, un faux site'),
      it('fr.b1.journalisme.003', 'le nom seul'),
    ], chk(
      'Ces quatre phrases parlent de...',
      ['vraies nouvelles confirmées', 'infos fausses ou inventées'], 1,
      'Truquée, fausse, canular : l’info est fausse. EN: false or invented news.')),
    grp('Comment ne pas tomber dedans', [
      it(E(1130), 'tomber dans le panneau'),
      it(E(1132), 'se méfier des titres'),
      it(E(1133), 'l’infox va plus vite'),
      it('fr.b1.internet.004', 'les liens douteux'),
    ], chk(
      'Méfie-toi des titres qui...',
      ['font peur', 'citent leurs sources'], 0,
      'Un titre qui fait peur veut te faire partager vite. EN: headlines that scare you.')),
    ctl('La famille', 'Le contraire d’informer, pour tromper :',
      ['désinformer', 'déformer', 'informatiser'], 0,
      'Désinformer, la désinformation. EN: to spread disinformation.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infox', 'famille'],
};

/** A summary of the sheet: four signs. */
const A8_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a8-focus',
  layer: 'core',
  sheetId: 'sheet-reseaux',
  title: 'Quatre signes d’une infox',
  points: [
    'Pas de source, ou « selon nos sources » sans nom. EN: no named source.',
    'Pas de date, ou une vieille histoire. EN: no date.',
    'Un titre qui fait peur ou trop plaisir. EN: an emotional headline.',
    'Aucun média sérieux n’en parle. EN: no serious outlet reports it.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infox', 'source'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Vrai ou faux, en situation',
  groups: [
    ctl('La photo', 'Sur la photo, il neige en juillet à Dakar. La photo est...',
      ['truquée', 'truquante', 'trompée'], 0,
      'Truquée : on l’a changée. EN: doctored.'),
    ctl('Le poisson d’avril', 'Le premier avril, un site annonce que la tour Eiffel déménage à Lyon. C’est...',
      ['un canular', 'un démenti'], 0,
      'Un canular : une fausse histoire, ici pour rire. EN: a hoax.'),
    ctl('Ton oncle', 'Ton oncle a cru la fausse nouvelle et l’a partagée. Il...',
      ['est tombé pour', 'est tombé dans le panneau'], 1,
      'Tomber dans le panneau. EN: he fell for it.'),
    ctl('Le titre', '« Ce que les médias ne vous disent pas » : devant ce titre, tu...',
      ['te méfies', 'partages tout de suite', 'y crois'], 0,
      'Un titre qui promet un secret : méfie-toi. EN: be wary.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infox'],
};

/** TRAP: fall for, actually, fake, wary of. */
const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre calques du faux',
  errors: [
    { wrong: 'Beaucoup de gens sont tombés pour cette histoire.', right: fr(E(1130)),
      why: 'Normal : l’anglais dit to fall for it. En français, on tombe dans le panneau. EN: tomber dans le panneau.' },
    { wrong: 'Actuellement, c’était un canular : l’article venait d’un faux site.', right: 'En fait, c’était un canular : l’article venait d’un faux site.',
      why: 'Normal : actually ressemble à actuellement. Mais actuellement veut dire maintenant. Pour actually : en fait. EN: actually is en fait.' },
    { wrong: 'Une fake nouvelle circule sur les réseaux depuis hier.', right: fr(E(1129)),
      why: 'Normal : fake news s’entend partout. Mais on ne mélange pas les deux langues : une fausse nouvelle, ou une infox. EN: une fausse nouvelle.' },
    { wrong: 'Méfie-toi sur les titres qui font peur.', right: fr(E(1132)),
      why: 'Normal : l’anglais dit wary of, et sur semble logique. Mais le français dit se méfier de : méfie-toi des titres. EN: se méfier de.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infox', 'fauxami'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le panneau', 'To fall for it :',
    ['tomber pour', 'tomber dans le panneau'], 1,
    'Tomber dans le panneau. EN: to fall for it.'),
  ctl('Le faux ami', 'Actually, en français :',
    ['en fait', 'actuellement'], 0,
    'En fait. Actuellement veut dire maintenant. EN: en fait.'),
  ctl('La photo', 'Une photo changée pour tromper :',
    ['une photo truquée', 'une photo tricheuse', 'une photo fausse nouvelle'], 0,
    'Une photo truquée. EN: doctored.'),
], ['infox', 'fauxami']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Vrai ou faux',
    opener: {
      line: 'Un pont sous l’eau, des arbres pleins de feuilles en février : ici tu repères ce qui cloche dans une fausse nouvelle. EN: A bridge under water, trees in full leaf in February: here you spot what is wrong in a piece of fake news.',
      imageRef: 'lessons/medias/act08.jpg',
    },
    sections: [],
    milestone: 'Tu nommes une infox, un canular et une photo truquée, et tu dis les signes qui te font douter. EN: You name fake news, a hoax and a doctored photo, and say the signs that make you doubt.',
    estScreens: 38, restPoints: ['a8-construire', 'a8-choisir'],
  },
  sections: [A8_LECTURE, A8_CARTES, A8_CONSTRUIRE, A8_FOCUS, A8_CHOISIR, A8_ERREURS, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — VÉRIFIER UNE SOURCE
 *
 *  vérifier / la vérification / vérifiable; fiable / la fiabilité;
 *  remonter à la source, croiser les sources, un site douteux, la
 *  vérification des faits.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a fact-check post. */
const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Vrai ou faux : le bourgmestre et les chiens',
  frSub: 'Lis comment on vérifie',
  text: VERIF_TEXT,
  glossary: [
    { word: 'L’affirmation', en: 'the claim', note: 'La phrase qu’on va vérifier.' },
    { word: 'bourgmestre', en: 'mayor (Belgium)', note: 'En Belgique, le maire s’appelle le bourgmestre.' },
    { word: 'nulle part', en: 'nowhere', note: 'Dans aucun endroit.' },
    { word: 'en laisse', en: 'on a lead', note: 'Le chien est attaché, et son maître tient la laisse.' },
  ],
  questions: [
    { q: 'Quel est le verdict ?', a: 'Faux : le bourgmestre n’a jamais dit ça.' },
    { q: 'D’où vient la publication ?', a: 'D’une page créée il y a une semaine, sans nom d’auteur.' },
    { q: 'Quelles sont les trois étapes de la vérification ?', a: 'Remonter à la source, chercher la citation dans la presse et sur les comptes de la commune, appeler la porte-parole.' },
    { q: 'Qu’est-ce que la commune a vraiment proposé ?', a: 'Tenir les chiens en laisse près des jeux pour enfants.' },
  ],
  audio: REC('rec-b1-34-verif'),
  say: REFRAME,
  terms: ['fiable', 'source'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-verifier',
  title: 'Vérifier, pas à pas',
  frSub: 'Fiable, douteux, remonter, croiser',
  hint: 'Six cartes. Chaque bloc est une étape de la vérification.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['fiable', 'famille', 'voisins'],
  cards: [
    card(E(1136), 'Le travail', 'la famille',
      'Vérifier, la vérification. Vérifiable : on peut le vérifier. Vérifié : c’est déjà fait. EN: to check, checking, verifiable.'),
    card(E(1137), 'La confiance', 'la famille',
      'Fiable : on peut lui faire confiance. La fiabilité d’une source se vérifie. EN: reliable, reliability.'),
    card(E(1138), 'Le bon point de départ', 'la fiabilité',
      'Une source fiable dit qui elle est et d’où vient l’info. EN: a reliable source.'),
    card(E(1140), 'Comme une rivière', 'les voisins',
      'Remonter à la source : chercher la première publication, là où l’info est née. EN: to go back to the source.'),
    card(E(1141), 'Deux routes qui se croisent', 'les voisins',
      'Croiser les sources : lire deux ou trois médias sérieux. On dit aussi recouper. EN: to cross-check.'),
    card(E(1142), 'Le doute', 'les voisins',
      'Un site douteux : pas de date, pas d’auteur, pas d’adresse. On doute de lui. EN: a dubious site.'),
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Avant de partager',
  groups: [
    grp('Vérifier d’abord', [
      it(E(1144), 'qui a publié'),
      it(E(1146), 'croiser trois sources'),
      it('fr.b1.journalisme.005', 'vérifier ses sources'),
      it('fr.b1.internet.001', 'il vaut mieux vérifier'),
    ], chk(
      'Avant de partager, tu...',
      ['vérifies la source', 'comptes les partages'], 0,
      'Beaucoup de partages ne prouvent rien. EN: check the source, not the shares.')),
    grp('Fiable ou douteux', [
      it(E(1145), 'une agence de presse'),
      it(E(1147), 'ni date ni auteur'),
      it(E(1149), 'un article de trois ans'),
      it(E(1148), 'la citation était fausse'),
    ], chk(
      'Un site sans date et sans auteur est...',
      ['fiable', 'douteux'], 1,
      'Douteux : on doute de lui. EN: dubious.')),
    ctl('La règle', 'Trois questions pour vérifier une source :',
      ['Qui ? Quand ? D’où ?', 'Combien ? Pourquoi ? Où ?'], 0,
      'Qui l’a écrit, quand, et d’où vient l’info. EN: who, when, where from.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fiable', 'source'],
};

/** NAME, as a lookup: six checks. A cut of the sheet's table. */
const A9_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-tableau',
  layer: 'core',
  sheetId: 'sheet-verifier',
  title: 'Six questions avant de partager',
  cols: ['La question', 'Tu cherches', 'Si ça manque'],
  rows: [
    { cells: ['Qui ?', 'un nom, un média connu', 'méfie-toi'], say: fr(E(1144)),
      detail: { title: 'Qui l’a écrit', body: 'Un journaliste, un média, une agence de presse : un nom que tu peux vérifier. EN: who wrote it.', say: fr(E(1145)) } },
    { cells: ['Quand ?', 'la date', 'une vieille histoire'], say: fr(E(1149)),
      detail: { title: 'Quand', body: 'Un article de trois ans ne parle pas d’aujourd’hui. EN: when.', say: fr(E(1149)) } },
    { cells: ['D’où ?', 'la première publication', 'remonte à la source'], say: fr(E(1148)),
      detail: { title: 'D’où vient l’info', body: 'Cherche la première publication, pas le dixième partage. EN: where it started.', say: fr(E(1148)) } },
    { cells: ['D’autres ?', 'deux ou trois médias', 'croise les sources'], say: fr(E(1146)),
      detail: { title: 'D’autres médias', body: 'Si aucun média sérieux n’en parle, attends. EN: do others report it.', say: fr(E(1146)) } },
    { cells: ['La photo ?', 'les détails, la saison', 'une recherche inversée'], say: fr(E(1150)),
      detail: { title: 'La photo', body: 'Une recherche inversée montre où la photo est apparue la première fois. EN: a reverse image search.', say: fr(E(1128)) } },
    { cells: ['Le ton ?', 'des faits, pas des cris', 'des pincettes'], say: fr(E(1132)),
      detail: { title: 'Le ton', body: 'Un titre qui fait peur veut te faire partager vite. EN: the tone.', say: fr(E(1167)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fiable', 'source'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Enquête en ligne',
  groups: [
    ctl('La citation', 'Une citation circule. Tu cherches où elle a été dite la première fois. Tu...',
      ['remontes à la source', 'montes la source'], 0,
      'Remonter à la source. EN: go back to the source.'),
    ctl('Trois journaux', 'Tu lis la même info dans trois journaux sérieux. Tu as...',
      ['traversé les sources', 'croisé les sources', 'mélangé les sources'], 1,
      'Croiser les sources. EN: cross-checked.'),
    ctl('Le site', 'Un site sans auteur, sans date, avec des fautes partout, est...',
      ['douteux', 'doutable'], 0,
      'Douteux. Doutable n’existe pas. EN: dubious.'),
    ctl('L’agence', 'Une agence de presse connue, qui cite ses sources, est...',
      ['une source fiable', 'une source relayable'], 0,
      'Fiable : on peut lui faire confiance. EN: reliable.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fiable'],
};

/** TRAP, stepped: reliable, monter, doutable, traverser, être for age, que
 *  for qui. */
const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges de la vérification',
  rule: {
    title: 'Fiable, douteux, remonter, croiser',
    body: 'Une source est fiable ou douteuse, jamais reliable ou doutable. On remonte à la source et on croise les sources. Un article a trois ans. EN: the checking blocks, word for word.',
  },
  cards: [
    { promptLabel: 'reliable', promptSound: 'Cette source est reliable : c’est une agence de presse.', fr: fr(E(1145)), ipa: ipaOf(E(1145)), tip: 'Reliable, en français : fiable. EN: fiable.' },
    { promptLabel: 'monter', promptSound: 'Je suis montée à la source : la citation était fausse.', fr: fr(E(1148)), ipa: ipaOf(E(1148)), tip: 'On remonte à la source, comme on remonte une rivière. EN: remonter.' },
    { promptLabel: 'doutable', promptSound: 'Ce site est doutable : il n’y a ni date ni auteur.', fr: fr(E(1147)), ipa: ipaOf(E(1147)), tip: 'Doutable n’existe pas. Un site dont on doute est douteux. EN: dubious.' },
    { promptLabel: 'traverser', promptSound: 'J’ai traversé trois sources avant d’y croire.', fr: fr(E(1146)), ipa: ipaOf(E(1146)), tip: 'On croise les sources, comme deux routes qui se croisent. EN: to cross-check.' },
    { promptLabel: 'l’âge', promptSound: 'L’article est trois ans : il ne parle pas d’aujourd’hui.', fr: fr(E(1149)), ipa: ipaOf(E(1149)), tip: 'L’âge se dit avec avoir : l’article a trois ans. EN: avoir for age.' },
    { promptLabel: 'qui ou que', promptSound: 'Avant de partager, je vérifie que a publié l’info.', fr: fr(E(1144)), ipa: ipaOf(E(1144)), tip: 'Pour une personne, la question est qui : je vérifie qui a publié. EN: qui.' },
  ],
  drill: [
    { promptSay: 'Cette source est ... : c’est une agence de presse.', opts: ['reliable', 'fiable'], correct: 1 },
    { promptSay: 'Je suis ... à la source.', opts: ['remontée', 'montée'], correct: 0 },
    { promptSay: 'Ce site est ... : il n’y a pas de date.', opts: ['doutable', 'douteux'], correct: 1 },
    { promptSay: 'J’ai ... trois sources avant d’y croire.', opts: ['croisé', 'traversé'], correct: 0 },
    { promptSay: 'L’article ... trois ans.', opts: ['a', 'est'], correct: 0 },
    { promptSay: 'Je vérifie ... a publié l’info.', opts: ['que', 'qui', 'quoi'], correct: 1 },
    { promptSay: 'La ... des faits, c’est le travail de ce site.', opts: ['vérification', 'vérifiance'], correct: 0 },
    { promptSay: 'Une info qu’on peut vérifier est ... .', opts: ['vérifiable', 'vérifiée'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Fiable, douteux, remonter, croiser' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la phrase fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-34-piege-verifier'),
  say: REFRAME,
  terms: ['fiable', 'fauxami'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Fiable', 'A reliable source :',
    ['une source fiable', 'une source reliable'], 0,
    'Fiable. EN: fiable.'),
  ctl('Croiser', 'To cross-check sources :',
    ['croiser les sources', 'traverser les sources', 'passer les sources'], 0,
    'Croiser, ou recouper. EN: croiser.'),
  ctl('Remonter', 'Chercher la première publication, c’est...',
    ['monter la source', 'remonter à la source'], 1,
    'Remonter à la source. EN: remonter.'),
], ['fiable', 'source']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Vérifier une source',
    opener: {
      line: 'Une citation partagée dix mille fois, une page sans auteur : ici tu remontes le fil jusqu’à la source. EN: A quote shared ten thousand times, a page with no author: here you follow the thread back to the source.',
      imageRef: 'lessons/medias/act09.jpg',
    },
    sections: [],
    milestone: 'Tu vérifies une info en trois questions, qui, quand, d’où, et tu dis si la source est fiable ou douteuse. EN: You check a story with three questions and say whether its source is reliable or dubious.',
    estScreens: 42, restPoints: ['a9-construire', 'a9-choisir'],
  },
  sections: [A9_LECTURE, A9_CARTES, A9_CONSTRUIRE, A9_TABLEAU, A9_CHOISIR, A9_PIEGE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — JUGER UNE INFO
 *
 *  c’est crédible, ça m’étonnerait, je doute que (+ subjonctif), il me
 *  semble que, à première vue, avec des pincettes, avoir l’air vrai; the
 *  connectors of lessons 30 to 32 in B1.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: a radio phone-in. `hideLines`. */
const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Les auditeurs ont la parole',
  frSub: 'Écoute, et dis qui y croit',
  lines: [
    ln(E(1159)), ln(E(1160)), ln(E(1161)), ln(E(1162)), ln(E(1163)), ln(E(1164)),
    ln(E(1165)), ln(E(1166)), ln(E(1167)), ln(E(1168)), ln(E(1170)),
  ],
  questions: [
    { q: 'Le premier auditeur trouve l’info...', opts: ['crédible', 'pas crédible'], correct: 1, why: '« cette info n’est pas crédible ». EN: not believable.' },
    { q: 'Et la photo, pour la deuxième auditrice ?', opts: ['elle doute qu’elle soit vraie', 'elle est sûre qu’elle est vraie'], correct: 0, why: '« Je doute que cette photo soit vraie. » EN: she doubts it.' },
    { q: 'Pourquoi le troisième auditeur est-il étonné ?', opts: ['la photo est floue', 'aucun journal n’en parle', 'l’article est vieux'], correct: 1, why: '« Ça m’étonnerait : aucun journal n’en parle. » EN: no paper reports it.' },
    { q: 'Un auditeur pèse les deux côtés. Qu’est-ce qui manque, selon lui ?', opts: ['une preuve', 'une source connue'], correct: 0, why: 'La source est connue, mais il n’y a aucune preuve. EN: proof.' },
    { q: 'Et quand l’info vient d’un ami ?', opts: ['on la partage tout de suite', 'on la vérifie quand même'], correct: 1, why: 'Même si elle vient d’un ami, il faut la vérifier. EN: check it anyway.' },
  ],
  audio: REC('rec-b1-34-auditeurs-ecoute'),
  say: REFRAME,
  terms: ['avis'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-verifier',
  title: 'Dire ce que tu en penses',
  frSub: 'Croire, douter, nuancer',
  hint: 'Six cartes. Du plus sûr au plus prudent.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['avis', 'famille'],
  cards: [
    card(E(1153), 'On peut y croire', 'ton avis',
      'Crédible : on peut le croire. Pas crédible : difficile à croire. EN: believable.'),
    card(E(1154), 'La surprise polie', 'ton avis',
      `Ça m’étonnerait : un doute poli, au conditionnel, comme dans ${CONDITIONNEL_REF}. EN: I would be surprised.`),
    card(E(1155), 'Le doute', 'la famille',
      `Douter, le doute, douteux. Après je doute que, le subjonctif : je doute que ce soit vrai (${SUBJ_FORM_REF} à ${SUBJ_INF_REF}). EN: to doubt, doubt, dubious.`),
    card(E(1156), 'Le premier regard', 'ton avis',
      'À première vue, l’info a l’air vraie. Après vérification, tu sais. EN: at first sight.'),
    card(E(1157), 'Sans la toucher', 'ton avis',
      'Avec des pincettes : sans y croire tout de suite. L’anglais met du sel, le français des pincettes. EN: with a pinch of salt.'),
    card(E(1158), 'L’apparence', 'ton avis',
      'Avoir l’air vrai : sembler vrai. L’adjectif s’accorde souvent : elle a l’air vraie. EN: to look true.'),
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Douter, avec des raisons',
  groups: [
    grp('Douter, poliment', [
      it(E(1160), 'je doute que + subjonctif'),
      it(E(1161), 'ça m’étonnerait'),
      it('fr.b1.opinions-et-avis.114', 'le bloc seul'),
      it('fr.b1.opinions-et-avis.107', 'une impression'),
    ], chk(
      'Après « je doute que », le verbe est...',
      ['au subjonctif : soit', 'à l’indicatif : est'], 0,
      `Le doute appelle le subjonctif, comme dans ${SUBJ_FORM_REF} à ${SUBJ_INF_REF}. EN: subjunctive.`)),
    grp('Nuancer, avec un connecteur', [
      it(E(1163), 'd’un côté, de l’autre'),
      it(E(1164), 'même si'),
      it(E(1165), 'pourtant'),
      it(E(1166), 'donc'),
    ], chk(
      '« L’article cite deux sources ; pourtant, je reste prudent. » Pourtant dit...',
      ['une conséquence', 'une opposition'], 1,
      `Pourtant oppose deux faits : c’est ${CONCESSION_REF}. EN: even so.`)),
    ctl('Le connecteur', 'Il n’y a pas de source, ... je ne le partage pas.',
      ['donc', 'pourtant', 'même si'], 0,
      'Donc : la conséquence. EN: so.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avis'],
};

const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-hacks',
  layer: 'core',
  title: 'Trois astuces pour juger une info',
  hacks: [
    { hack: 'Donne toujours une raison après ton avis : la source, la date, les preuves.',
      why: 'Un avis sans raison ne convainc personne, même s’il est juste. EN: an opinion needs a reason.' },
    { hack: 'Dis aussi ce qui fait hésiter, avec pourtant ou même si.',
      why: 'Montrer l’autre côté rend ton avis plus solide. EN: show what makes you hesitate.' },
    { hack: 'Termine par ce que tu fais : attendre, vérifier, ne pas relayer.',
      why: 'Le lecteur sait quoi faire après t’avoir lu. EN: end with an action.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avis'],
};

const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Ton avis, en situation',
  groups: [
    ctl('La photo', 'Ton ami te montre une photo étrange. Tu n’y crois pas trop. Tu dis :',
      ['Je doute que cette photo soit vraie.', 'Je doute que cette photo est vraie.'], 0,
      'Je doute que + subjonctif : soit. EN: soit.'),
    ctl('Le journal', 'Aucun journal ne parle de l’histoire. Tu dis :',
      ['Ça m’étonnerait.', 'Ça m’étonne pas.', 'Ça me surprendra.'], 0,
      'Ça m’étonnerait : un doute poli. EN: I would be surprised.'),
    ctl('La prudence', 'Tu vas attendre avant de croire l’info. Tu la prends...',
      ['avec un grain de sel', 'avec des pincettes'], 1,
      'Avec des pincettes. EN: with a pinch of salt.'),
    ctl('Les deux côtés', 'La source est connue, mais il n’y a aucune preuve. Tu commences par :',
      ['D’un côté,', 'Donc,', 'Parce que'], 0,
      'D’un côté, de l’autre : tu pèses les deux. EN: on the one hand.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avis'],
};

/** TRAP, stepped: the indicative after je doute que, the English salt, dans
 *  mon opinion, the elision, donc for pourtant, regarder for avoir l’air. */
const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges de l’avis',
  rule: {
    title: 'À mon avis, je doute que ce soit vrai',
    body: 'À mon avis, pas dans mon opinion. Je doute que + subjonctif. Avec des pincettes, pas avec du sel. Et le connecteur dit le vrai lien : pourtant pour s’opposer, donc pour conclure. EN: the exact shape of each formula.',
  },
  cards: [
    { promptLabel: 'l’indicatif', promptSound: 'Je doute que cette photo est vraie.', fr: fr(E(1160)), ipa: ipaOf(E(1160)), tip: `Après je doute que : le subjonctif, soit. ${Cap(SUBJ_FORM_REF)} t’a donné cette forme. EN: subjunctive.` },
    { promptLabel: 'le sel anglais', promptSound: 'Je prends cette info avec un grain de sel.', fr: fr(E(1167)), ipa: ipaOf(E(1167)), tip: 'Mettre son grain de sel, c’est donner son avis sans qu’on le demande. Pour douter : des pincettes. EN: pincettes.' },
    { promptLabel: 'in my opinion', promptSound: 'Dans mon opinion, cette info n’est pas crédible.', fr: fr(E(1159)), ipa: ipaOf(E(1159)), tip: 'À mon avis. EN: à mon avis.' },
    { promptLabel: 'l’élision', promptSound: 'Ça me étonnerait : aucun journal n’en parle.', fr: fr(E(1161)), ipa: ipaOf(E(1161)), tip: 'Devant une voyelle, me devient m’ : ça m’étonnerait. EN: elision.' },
    { promptLabel: 'le mauvais lien', promptSound: 'L’article cite deux sources ; donc, je reste prudent.', fr: fr(E(1165)), ipa: ipaOf(E(1165)), tip: 'Deux sources, et tu restes prudent : c’est une opposition. Pourtant. EN: pourtant, not donc.' },
    { promptLabel: 'to look', promptSound: 'Cette histoire regarde vraie, mais elle ne cite personne.', fr: fr(E(1168)), ipa: ipaOf(E(1168)), tip: 'To look true : avoir l’air vrai. EN: avoir l’air.' },
  ],
  drill: [
    { promptSay: 'Je doute que cette photo ... vraie.', opts: ['est', 'soit'], correct: 1 },
    { promptSay: 'Je prends cette info avec des ... .', opts: ['pincettes', 'grains de sel'], correct: 0 },
    { promptSay: '... mon avis, ce n’est pas crédible.', opts: ['Dans', 'À'], correct: 1 },
    { promptSay: 'Ça ... : aucun journal n’en parle.', opts: ['m’étonnerait', 'me étonnerait'], correct: 0 },
    { promptSay: 'Deux sources ; ... , je reste prudent.', opts: ['donc', 'pourtant'], correct: 1 },
    { promptSay: 'Cette histoire ... vraie.', opts: ['a l’air', 'regarde', 'semble de'], correct: 0 },
    { promptSay: 'Pas de source, ... je ne partage pas.', opts: ['donc', 'pourtant'], correct: 0 },
    { promptSay: '... si l’info vient d’un ami, il faut la vérifier.', opts: ['Même', 'Donc'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'À mon avis, je doute que ce soit vrai' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la phrase fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-34-piege-avis'),
  say: REFRAME,
  terms: ['avis', 'fauxami'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le doute', 'Je doute que ce ... vrai.',
    ['est', 'soit'], 1,
    'Je doute que + subjonctif. EN: soit.'),
  ctl('L’avis', 'In my opinion :',
    ['à mon avis', 'dans mon opinion', 'selon mon avis'], 0,
    'À mon avis. EN: à mon avis.'),
  ctl('La prudence', 'With a pinch of salt :',
    ['avec des pincettes', 'avec un grain de sel'], 0,
    'Avec des pincettes. EN: pincettes.'),
], ['avis', 'fauxami']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Juger une info',
    opener: {
      line: 'Onze auditeurs, onze avis sur la même histoire : ici tu dis si tu y crois, et pourquoi. EN: Eleven callers, eleven views on the same story: here you say whether you believe it, and why.',
      imageRef: 'lessons/medias/act10.jpg',
    },
    sections: [],
    milestone: 'Tu dis si une info est crédible, tu doutes poliment avec le bon mode, et tu relies tes raisons avec pourtant, même si et donc. EN: You judge a story, doubt politely in the right mood, and link your reasons.',
    estScreens: 40, restPoints: ['a10-construire', 'a10-choisir'],
  },
  sections: [A10_ECOUTE, A10_CARTES, A10_CONSTRUIRE, A10_HACKS, A10_CHOISIR, A10_PIEGE, A10_CHECK],
  imports: IMPORTED.act10,
};


/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — À TOI DE RÉAGIR
 *
 *  The model forum reply, the plan, the role play, THE TASK, then the
 *  closing sections the playbook requires, with the one quiz.
 * ══════════════════════════════════════════════════════════════════════════ */

/** The model the learner imitates: one story, a verdict, three reasons, a
 *  nuance and a proposal. */
const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La réponse de Sophie',
  frSub: 'La forme que tu vas écrire',
  text: REPONSE_TEXT,
  glossary: [
    { word: 'presque', en: 'almost', note: 'Elle a failli la partager, mais elle ne l’a pas fait.' },
    { word: 'la société de transport', en: 'the transit authority', note: 'L’entreprise qui gère le métro et les autobus.' },
    { word: 'sérieux', en: 'serious, reputable', note: 'Un média sérieux vérifie avant de publier.' },
    { word: 'officielle', en: 'official', note: 'Qui vient de la ville ou de la société de transport.' },
  ],
  questions: [
    { q: 'De quelle info parle Sophie ?', a: 'Une publication qui dit que le métro sera gratuit dès lundi.' },
    { q: 'Quel est son avis ?', a: 'L’info n’est pas fiable, pour trois raisons.' },
    { q: 'Quelles sont ses raisons ?', a: 'Aucune source, une page créée la semaine dernière, et aucun média sérieux n’en parle.' },
    { q: 'Que propose-t-elle ?', a: 'D’attendre une confirmation officielle avant de relayer.' },
  ],
  audio: REC('rec-b1-34-reponse'),
  say: REFRAME,
  terms: ['avis', 'fiable', 'source'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour ta réponse',
  steps: [
    '1. Nomme l’info : moi aussi, j’ai vu cette publication sur... EN: name the story.',
    '2. Donne ton avis : à mon avis, cette info est fiable, n’est pas fiable, n’est pas encore sûre. EN: give your verdict.',
    '3. Donne au moins deux raisons, avec d’abord, ensuite, de plus : la source, la date, les autres médias. EN: two reasons, with connectors.',
    '4. Montre ce qui fait hésiter : pourtant, même si, d’un côté. EN: show the other side.',
    '5. Propose : il faut attendre, je propose qu’on vérifie avant de relayer. EN: end with a proposal.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avis', 'fiable'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Une phrase par étape',
  cases: [
    uc('Tu nommes l’info dont tu parles', E(1171)),
    uc('Tu donnes ton avis et annonces tes raisons', E(1172)),
    uc('Tu montres ce qui fait hésiter', E(1175)),
    uc('Tu conclus avec ta proposition', E(1177)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avis', 'relais'],
};

/** Say it out loud: six turns with a flatmate about to share a rumour.
 *  ONE apostrophe style (’) in every turn and alt (app check). */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Théo veut tout partager',
  setting: 'Un soir, à l’appartement. Ton colocataire Théo lit une publication sur son téléphone : le métro serait gratuit dès lundi. Il veut l’envoyer à tout le monde.',
  turns: [
    {
      ai: 'Regarde ça : le métro sera gratuit dès lundi, c’est génial !',
      en: 'Look at this: the metro will be free from Monday, it’s great!',
      user: fr(E(1171)),
      userEn: 'I saw this post too. (the start of your reply)',
      alts: [
        { fr: fr(E(1182)), en: 'This news makes us happy, but it is not confirmed. (a nuance at once: also right)' },
        { fr: 'Oui, je l’ai vue ce matin.', en: 'Yes, I saw it this morning.' },
      ],
    },
    {
      ai: 'Alors je la partage avec tout le monde ?',
      en: 'So shall I share it with everyone?',
      user: fr(E(1172)),
      userEn: 'In my opinion this story is not reliable, for three reasons. (à mon avis, and a plan announced)',
      alts: [
        { fr: fr(E(1159)), en: 'In my opinion, this story is not believable. (crédible)' },
        { fr: fr(E(1167)), en: 'I am taking this story with a pinch of salt. (avec des pincettes)' },
      ],
    },
    {
      ai: 'Pourquoi ? Il y a une photo du métro, et un texte.',
      en: 'Why? There is a photo of the metro, and some text.',
      user: fr(E(1173)),
      userEn: 'First, it does not cite any source. (d’abord, and the source)',
      alts: [
        { fr: fr(E(1183)), en: 'The text says according to our sources, but it names none. (the source again)' },
        { fr: fr(E(1175)), en: 'Even so, the photo looks real. (the other side: also right)' },
      ],
    },
    {
      ai: 'Mais tout le monde en parle sur les réseaux.',
      en: 'But everyone is talking about it on social media.',
      user: fr(E(1174)),
      userEn: 'Next, no serious outlet is reporting it. (ensuite, and the other media)',
      alts: [
        { fr: fr(E(1161)), en: 'I would be surprised: no paper is reporting it. (ça m’étonnerait)' },
        { fr: fr(E(1180)), en: 'If it is true, the papers will report it tomorrow. (a test you can wait for)' },
      ],
    },
    {
      ai: 'Bon. Qu’est-ce qu’on fait, alors ?',
      en: 'OK. So what do we do?',
      user: fr(E(1177)),
      userEn: 'I suggest we wait before passing it on. (je propose que + subjunctive, lessons 14 to 16 in B1)',
      alts: [
        { fr: fr(E(1176)), en: 'We need to wait for official confirmation. (il faut + infinitive)' },
        { fr: fr(E(1181)), en: 'I am going to look for the original article. (remonter à la source)' },
      ],
    },
    {
      ai: 'D’accord, je ne l’envoie à personne. Tu as raison.',
      en: 'All right, I will not send it to anyone. You are right.',
      user: fr(E(1184)),
      userEn: 'I share nothing without knowing who wrote it. (the rule of the lesson, in your own words)',
      alts: [
        { fr: fr(E(1179)), en: 'Thanks for checking before sharing.' },
        { fr: fr(E(1185)), en: 'Thanks for your reply, I will wait.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avis', 'relais'],
};

/** THE GRADED TASK. The unit outcome is tested here (shapes doc §2.3). */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Réponds sur le forum',
  frSub: 'Mission écrite',
  brief: 'Sur le forum de ton quartier, quelqu’un a partagé cette info : « La bibliothèque municipale fermerait ses portes à la fin du mois, selon une source à la mairie. » Beaucoup de voisins la relaient déjà. Réponds sur le forum : dis si l’info te paraît fiable ou non, et pourquoi, puis ce que tu proposes.',
  briefEn: 'On your neighbourhood forum, someone has shared this story: « The municipal library is reportedly closing at the end of the month, according to a source at the town hall. » Many neighbours are already passing it on. Reply on the forum: say whether the story seems reliable to you or not, and why, then what you suggest.',
  produce: 'Écris une réponse de 100 à 140 mots sur cette info : ton avis sur sa fiabilité, au moins deux raisons, une nuance, et une proposition. Utilise au moins six blocs de la leçon et au moins deux connecteurs.',
  responseSpec: { kind: 'text', minWords: 100, maxWords: 140 },
  rubric: {
    criteria: [
      {
        key: 'voisins',
        label: 'Les mots avec leurs voisins',
        maxPoints: 4,
        descriptors: [
          '4 : Au moins six blocs de la leçon, chacun complet et à sa place : une source fiable, remonter à la source, aucun média n’en parle, prendre une info avec des pincettes.',
          '3 : Six blocs, mais un voisin est faux (une source reliable, tomber pour), ou un bloc est coupé.',
          '2 : Moins de six blocs, ou plusieurs blocs traduits de l’anglais.',
          '1 : Des mots seuls, sans leurs voisins : la source, l’info, la rumeur, et aucune phrase complète autour.',
        ],
      },
      {
        key: 'jugement',
        label: 'Un jugement avec des raisons',
        maxPoints: 3,
        descriptors: [
          '3 : On sait ce que tu penses de l’info, avec au moins deux raisons (la source, la date, le conditionnel, les autres médias), et tu dis ce qui fait hésiter.',
          '2 : L’avis est clair, mais il n’a qu’une raison, ou il manque la nuance.',
          '1 : On ne sait pas si tu crois l’info, ou tu donnes un avis sans aucune raison.',
        ],
      },
      {
        key: 'liens',
        label: 'Des idées reliées',
        maxPoints: 3,
        descriptors: [
          '3 : Au moins deux connecteurs bien choisis (d’abord, ensuite, de plus, pourtant, même si, c’est pourquoi) : le lecteur suit ton raisonnement.',
          '2 : Un seul connecteur, ou un connecteur qui dit le mauvais lien.',
          '1 : Des phrases les unes à côté des autres, sans lien.',
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Une vraie réponse de forum, entre 100 et 140 mots, qui parle de cette info et finit par une proposition.',
          '1 : Il manque un élément : moins de 100 mots, pas de proposition, ou une autre histoire.',
        ],
      },
    ],
  },
  scaffold: [
    'Bonjour à tous,',
    'Moi aussi, j’ai vu...',
    'À mon avis,',
    'D’abord,',
    'Ensuite,',
    'Pourtant,',
    'Je propose qu’on...',
    'Bonne soirée,',
  ],
  modelAnswer: 'Bonjour à tous, j’ai vu cette publication sur la bibliothèque, et je comprends qu’elle vous inquiète. Mais à mon avis, cette info n’est pas encore fiable. D’abord, le texte dit « selon une source à la mairie », mais il ne nomme personne. Ensuite, le verbe est au conditionnel : la bibliothèque fermerait, donc ce n’est pas confirmé. De plus, aucun média sérieux n’en parle, ni le journal du quartier ni la radio locale. Pourtant, il y a peut-être une part de vrai, car la mairie cherche à faire des économies. C’est pourquoi je propose qu’on écrive à la mairie pour demander une confirmation officielle, et qu’on attende sa réponse avant de relayer. Je vous tiens au courant. Bonne soirée, Inès',
  modelAnswerEn: 'Hello everyone, I saw this post about the library, and I understand it worries you. But in my opinion this story is not reliable yet. First, the text says « according to a source at the town hall », but it names nobody. Next, the verb is in the conditional: the library would close, so it is not confirmed. Moreover, no serious outlet is reporting it, neither the local paper nor the local radio. Even so, there may be some truth in it, because the town hall is trying to save money. That is why I suggest we write to the town hall to ask for official confirmation, and wait for its answer before passing it on. I will keep you posted. Have a good evening, Inès',
  watchFor: [
    {
      pattern: 'A media block with its English preposition or verb (sur les nouvelles, publiciser, l’éditeur for the editor-in-chief).',
      criterion: 'voisins',
      feedback: 'Ce bloc a son voisin français : aux nouvelles, publier un article, le rédacteur en chef.',
      ref: 'a1-scene',
    },
    {
      pattern: 'A headline read wrongly, or a headline noun used as a verb (le ministre a démission, deux suspects arrêté).',
      criterion: 'voisins',
      feedback: 'Dans une phrase, remets le verbe : il a démissionné. Et le participe s’accorde : arrêtés.',
      ref: 'a3-piege',
    },
    {
      pattern: 'Broadcast calques (un programme for a programme, vivant for live, les écouteurs for listeners).',
      criterion: 'voisins',
      feedback: 'Une émission, en direct, les auditeurs.',
      ref: 'a4-erreurs',
    },
    {
      pattern: 'A source named with a preposition or an English verb (selon à la mairie, donner une déclaration, quoter).',
      criterion: 'voisins',
      feedback: 'Selon la mairie ; faire une déclaration ; citer.',
      ref: 'a5-piege',
    },
    {
      pattern: 'An unconfirmed story reported as fact (la bibliothèque fermera, c’est sûr), or the reply ignores the conditional of the original post.',
      criterion: 'jugement',
      feedback: 'Le texte dit « fermerait » : au conditionnel, ce n’est pas confirmé. Dis-le.',
      ref: 'a6-cartes',
    },
    {
      pattern: 'Social media calques (sharer, des suiveurs, relater for relayer, une publication viral).',
      criterion: 'voisins',
      feedback: 'Partager, des abonnés, relayer, une publication virale.',
      ref: 'a7-piege',
    },
    {
      pattern: 'Fake-news calques (tomber pour, actuellement for actually, une fake nouvelle, se méfier sur).',
      criterion: 'voisins',
      feedback: 'Tomber dans le panneau, en fait, une fausse nouvelle, se méfier de.',
      ref: 'a8-erreurs',
    },
    {
      pattern: 'Checking calques (une source reliable, un site doutable, monter à la source).',
      criterion: 'voisins',
      feedback: 'Une source fiable, un site douteux, remonter à la source.',
      ref: 'a9-piege',
    },
    {
      pattern: 'A verdict with no reason: nothing about the source, the date, the conditional or the other media.',
      criterion: 'jugement',
      feedback: 'Donne au moins deux raisons : qui a publié, quand, et si d’autres médias en parlent.',
      ref: 'a9-tableau',
    },
    {
      pattern: 'Opinion formulas built from English or in the wrong mood (dans mon opinion, je doute que c’est vrai, avec un grain de sel).',
      criterion: 'jugement',
      feedback: 'À mon avis ; je doute que ce soit vrai ; avec des pincettes.',
      ref: 'a10-piege',
    },
    {
      pattern: 'Reasons side by side with no connector, or a connector that says the wrong link (donc for an opposition).',
      criterion: 'liens',
      feedback: 'Relie tes raisons : d’abord, ensuite, pourtant, c’est pourquoi.',
      ref: 'a10-construire',
    },
    {
      pattern: 'A reply that lectures the neighbours, or stops at the verdict with no proposal.',
      criterion: 'tache',
      feedback: 'Termine par ce que tu proposes : attendre, vérifier, écrire à la mairie.',
      ref: 'a10-hacks',
    },
  ],
  graderNotes: [
    'Grade the collocations as BLOCKS: count a block once, and only when it sits with its right neighbour and its right meaning. Family members (vérifier, la vérification) count as separate blocks only when each has its neighbour.',
    'Word count EXCLUDES the greeting and the sign-off, as in the other B1 writing tasks. 10% tolerance (90 to 154) before criterion « tache » loses its point.',
    'Accept any verdict: reliable, not reliable, or not yet sure. A learner who believes the story scores the same as one who doubts it: grade the reasons and the nuance, never the verdict.',
    'The post is built to be doubtful (a nameless source, the conditional « fermerait », no other outlet). A reply that notices any two of these has met the reasoning bar of « jugement ».',
    'Accept regional variants without comment (aux nouvelles, le bulletin de nouvelles, une entrevue, un balado, une fausse nouvelle or une infox, la mairesse, le bourgmestre).',
    'The subjunctive is expected only after je doute que, il faut que or je propose que (lessons 14 to 16 in B1). Accept a correct one; mark an indicative after je doute que under « jugement » once; ignore other subjunctive slips under this lesson.',
    'The hearsay conditional (lesson 8 in B1) is to be recognised, not produced: do not require it, but credit a reply that quotes or explains it.',
    'Connectors (lessons 30 to 32 in B1) are graded for the link they say, not for rarity: two well-chosen simple ones beat four forced ones.',
    'Do not mark facts: a learner may invent a local paper, a date or a detail. Do not mark the register either: tu or vous, courant or familier, are both fine on a neighbourhood forum if they stay the same.',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avis', 'fiable'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes blocs à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'famille'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-verifier',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'les voisins', v: 'aux nouvelles, faire la une, relayer une info', say: fr(E(1009)),
      detail: { title: 'Les voisins', body: 'Chaque mot des médias a son voisin. EN: collocations.', say: fr(E(1049)) } },
    { k: 'le titre', v: 'le nom, le participe, pas de petits mots', say: fr(E(1041)),
      detail: { title: 'Le titre', body: 'Démission du ministre : le ministre a démissionné. EN: rebuild the sentence.', say: fr(E(1042)) } },
    { k: 'la source', v: 'selon, d’après, de source sûre', say: fr(E(1077)),
      detail: { title: 'La source', body: 'Qui donne l’info ? Selon et d’après la nomment. EN: who is speaking.', say: fr(E(1081)) } },
    { k: 'le on-dit', v: 'démissionnerait : pas encore confirmé', say: fr(E(1091)),
      detail: { title: 'Le on-dit', body: 'Le conditionnel rapporte, le futur confirme. EN: reported or confirmed.', say: fr(E(1097)) } },
    { k: 'vérifier', v: 'qui, quand, d’où, et d’autres médias', say: fr(E(1144)),
      detail: { title: 'Vérifier', body: 'Remonter à la source, croiser les sources. EN: check before sharing.', say: fr(E(1146)) } },
    { k: 'ton avis', v: 'à mon avis, je doute que, pourtant', say: fr(E(1172)),
      detail: { title: 'Ton avis', body: 'Un verdict, deux raisons, une nuance, une proposition. EN: judge with reasons.', say: fr(E(1177)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'source', 'avis'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: 'Tu parles de la presse, de la radio, de la télé et des réseaux avec des familles de mots et leurs voisins. Tu lis un titre fait de noms, tu trouves la source d’une info, tu entends quand elle n’est pas confirmée, et tu dis si elle est fiable, avec des raisons. Le piège qui reste est discret : le voisin anglais qui revient quand tu écris vite, sur les nouvelles, une source reliable. Avant l’examen, prends trois titres d’un vrai journal et remets chacun en phrase complète. EN: Take three headlines from a real paper and turn each back into a full sentence.',
  stats: [
    { k: 'Les familles', v: 'vingt-sept, du verbe à la personne' },
    { k: 'Les voisins', v: 'une cinquantaine de blocs' },
    { k: 'Les variantes', v: 'Québec, France, Belgique, Suisse' },
    { k: 'Les textes', v: 'sept lectures, deux écoutes' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight, one per act from act 1 to act 10 plus
 *  the reply round. Each round's target is a distinct errorTrigger.
 *  `fold()` strips accents, commas and apostrophes but does NOT decompose
 *  « œ », so every typed answer carrying œ also accepts « oe ». Every typed
 *  answer differs from its prompt by a WORD that survives folding. */

type QQ = QuizQuestion;
const OE = (s: string) => [...new Set([s, s.replace(/œ/g, 'oe').replace(/Œ/g, 'Oe')])];
const TI_Q = 'Complète et écris toute la phrase. EN: Complete it and write the whole sentence.';
const tI = (prompt: string, answer: string, why: string, ref: string, also: string[] = []): QQ =>
  ({ format: 'typeIn', q: TI_Q, prompt, answer, accept: [...new Set([...OE(answer), ...also.flatMap(OE)])], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Un mot ne va pas. Écris la phrase correcte. EN: One word is wrong; write the sentence correctly.', prompt, answer, accept: OE(answer), why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: 'L’examen',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-nouvelles', label: 'S’informer', targets: ['nouvelles-calque'],
      questions: [
        mc('On the news, en français :', ['aux nouvelles', 'sur les nouvelles', 'dans les nouvelles'], 0, 'Aux nouvelles, aux infos. EN: aux nouvelles.', 'a1-scene'),
        mc('To keep up with the news :', ['s’informer', 'informer', 'se nouveller'], 0, 'S’informer : chercher l’info pour soi. EN: s’informer.', 'a1-cartes'),
        mc('The news, c’est...', ['les nouvelles', 'la nouvelle'], 0, 'Au pluriel. Une nouvelle, c’est une seule info. EN: plural.', 'a1-cartes'),
        eS('Ma grand-mère regarde Le Devoir tous les matins.', fr(E(1010)), 'Un journal, on le lit. EN: lit.', 'a1-reperer'),
        tI('Mon frère ___ surtout en ligne, sur son téléphone. (gets his news)', fr(E(1011)), 'S’informer : il s’informe. EN: s’informe.', 'a1-cartes'),
        tI('Les journalistes ___ le public. (inform)', fr(E(1012)), 'Informer : ils informent. EN: informent.', 'a1-reperer'),
        eS('Je l’ai vu sur les nouvelles hier soir.', fr(E(1009)), 'Aux nouvelles. EN: aux.', 'a1-scene'),
        lC('Écoute. Où cette personne écoute-t-elle les nouvelles ?', fr(E(1008)), ['à la radio', 'à la télé', 'dans le journal'], 0, 'J’écoute les nouvelles à la radio. EN: on the radio.', 'a1-reperer'),
      ],
    },
    {
      id: 'r2-presse', label: 'La presse écrite', targets: ['presse-faux-ami'],
      questions: [
        mc('The editor-in-chief :', ['le rédacteur en chef', 'l’éditeur', 'le publicateur'], 0, 'Le rédacteur en chef. L’éditeur publie des livres. EN: editor-in-chief.', 'a2-cartes'),
        mc('Un journal qui sort chaque semaine :', ['un hebdomadaire', 'un quotidien', 'un mensuel'], 0, 'Un hebdo. EN: a weekly.', 'a2-construire'),
        mc('Les lettres du public, dans le journal :', ['le courrier des lecteurs', 'les lettres à l’éditeur'], 0, 'Le courrier des lecteurs. EN: readers’ letters.', 'a2-erreurs'),
        mc('Advertising, en français :', ['la publicité', 'la publication', 'la réclame publique'], 0, 'La publicité. EN: advertising.', 'a2-exemples'),
        tI('La rédaction a ___ un article sur les loyers. (published)', fr(E(1027)), 'Publier : a publié. EN: publié.', 'a2-cartes'),
        tI('Je commence toujours par la ___ sports. (section)', fr(E(1029)), 'La rubrique. EN: rubrique.', 'a2-cartes'),
        eS('L’éditeur du journal a écrit l’éditorial du jour.', fr(E(1030)), 'Le rédacteur en chef dirige le journal. EN: editor-in-chief.', 'a2-erreurs'),
        lC('Écoute. Quand ce journal sort-il ?', fr(E(1025)), ['tous les matins, sauf le dimanche', 'une fois par semaine'], 0, 'Un quotidien, sauf le dimanche. EN: every morning.', 'a2-histoire'),
      ],
    },
    {
      id: 'r3-titres', label: 'Lire un titre', targets: ['titre-mal-lu'],
      questions: [
        mc('Le ministre démissionne. Le titre :', ['Démission du ministre', 'Démissionner du ministre', 'Le ministre démission'], 0, 'Le nom, sans article. EN: the noun.', 'a3-cartes'),
        mc('Les loyers augmentent. Le titre :', ['Hausse des loyers', 'Haussement des loyers'], 0, 'La hausse. EN: a rise.', 'a3-tableau'),
        mc('« Deux suspects arrêtés » veut dire...', ['deux suspects ont été arrêtés', 'deux suspects ont arrêté quelqu’un'], 0, 'Le passif coupé. EN: they were arrested.', 'a3-construire'),
        eS('Cette histoire a fait l’une de tous les journaux.', fr(E(1049)), 'La une, sans élision. EN: la une.', 'a3-piege'),
        tI('Titre : Une nouvelle mairesse ___ à Sherbrooke. (elected)', fr(E(1045)), 'Le participe, accordé : élue. EN: élue.', 'a3-piege'),
        tI('Phrase : Le ministre des Transports a ___ . (resigned)', fr(E(1042)), 'Dans une phrase, le verbe : a démissionné. EN: démissionné.', 'a3-construire'),
        eS('Deux suspects arrêté après le vol d’un tableau', fr(E(1047)), 'Deux suspects : arrêtés, avec un s. EN: plural.', 'a3-piege'),
        lC('Écoute ce titre. Que se passe-t-il ?', fr(E(1043)), ['une usine ferme', 'une usine ouvre', 'une usine recrute'], 0, 'Fermeture de l’usine. EN: a factory is closing.', 'a3-lecture'),
      ],
    },
    {
      id: 'r4-antenne', label: 'La radio et la télé', targets: ['antenne-calque'],
      questions: [
        mc('A TV programme :', ['une émission', 'un programme', 'une diffusion'], 0, 'Une émission. EN: une émission.', 'a4-cartes'),
        mc('Live, à la télé :', ['en direct', 'en vivant', 'en différé'], 0, 'En direct. EN: en direct.', 'a4-erreurs'),
        mc('Les personnes qui écoutent la radio :', ['les auditeurs', 'les écouteurs', 'les téléspectateurs'], 0, 'Les auditeurs. EN: listeners.', 'a4-construire'),
        mc('Au Québec, a podcast :', ['un balado', 'un baladeur'], 0, 'Un balado. Un baladeur, c’est un appareil. EN: a podcast.', 'a4-cartes'),
        tI('L’émission est ___ en direct tous les soirs. (broadcast)', fr(E(1061)), 'Diffuser : diffusée. EN: diffusée.', 'a4-cartes'),
        tI('L’___ a reçu une ministre dans son émission. (the host, a woman)', fr(E(1063)), 'L’animatrice. EN: animatrice.', 'a4-cartes'),
        eS('Les écouteurs peuvent appeler pendant l’émission.', fr(E(1065)), 'Les auditeurs. EN: listeners.', 'a4-erreurs'),
        lC('Écoute. Où est l’envoyée spéciale ?', fr(E(1064)), ['à Dakar', 'à Montréal', 'à Genève'], 0, 'Notre envoyée spéciale est à Dakar. EN: in Dakar.', 'a4-construire'),
      ],
    },
    {
      id: 'r5-sources', label: 'Qui dit quoi', targets: ['source-oubliee'],
      questions: [
        mc('According to the police :', ['selon la police', 'selon à la police', 'd’après de la police'], 0, 'Selon, sans préposition. EN: selon.', 'a5-cartes'),
        mc('To make a statement :', ['faire une déclaration', 'donner une déclaration'], 0, 'Faire. EN: faire.', 'a5-piege'),
        mc('Ce que raconte un témoin :', ['un témoignage', 'une témoinerie', 'un témoin'], 0, 'Un témoignage. EN: an account.', 'a5-cartes'),
        eS('Selon au ministère, les examens auront lieu en juin.', fr(E(1076)), 'Selon le ministère. EN: no à.', 'a5-piege'),
        tI('Le journaliste ___ ses sources à la fin de l’article. (cites)', fr(E(1081)), 'Citer : il cite. EN: cite.', 'a5-piege'),
        tI('Une voisine a ___ devant la caméra. (given her account)', fr(E(1080)), 'Témoigner : a témoigné. EN: témoigné.', 'a5-construire'),
        eS('Le ministre a déclaré qu’il ne démissionnera pas.', fr(E(1082)), `Après a déclaré que, le conditionnel : démissionnerait (${DISCOURS_REF}). EN: reported speech.`, 'a5-piege'),
        lC('Écoute. Qui donne cette info ?', fr(E(1077)), ['les témoins', 'la police', 'le journaliste'], 0, 'D’après les témoins. EN: the witnesses.', 'a5-lecture'),
      ],
    },
    {
      id: 'r6-ondit', label: 'Pas encore confirmé', targets: ['ondit-comme-fait'],
      questions: [
        mc('« Le ministre démissionnerait. » C’est...', ['pas encore confirmé', 'confirmé'], 0, 'Le conditionnel du on-dit. EN: reported.', 'a6-cartes'),
        mc('To deny a report :', ['démentir', 'dénier', 'refuser'], 0, 'Démentir. EN: démentir.', 'a6-erreurs'),
        mc('Laquelle est confirmée ?', ['L’usine fermera en décembre.', 'L’usine fermerait en décembre.'], 0, 'Le futur : c’est sûr. EN: the future.', 'a6-construire'),
        mc('A rumour is going round :', ['une rumeur court', 'une rumeur marche', 'une rumeur roule'], 0, 'Une rumeur court. EN: court.', 'a6-cartes'),
        tI('Selon nos informations, l’usine ___ en décembre. (would close)', fr(E(1092)), 'Pas confirmé : fermerait. EN: fermerait.', 'a6-tableau'),
        tI('La police a ___ l’arrestation de deux suspects. (confirmed)', fr(E(1096)), 'Confirmer : a confirmé. EN: confirmé.', 'a6-construire'),
        eS('Le ministère a dénié la rumeur ce matin.', fr(E(1095)), 'Démentir : a démenti. EN: démenti.', 'a6-erreurs'),
        lC('Écoute. Est-ce confirmé ?', fr(E(1094)), ['non, rien n’est confirmé', 'oui, c’est sûr'], 0, 'Serait, et rien n’est confirmé. EN: not confirmed.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-reseaux', label: 'Les réseaux sociaux', targets: ['reseaux-calque'],
      questions: [
        mc('Followers :', ['des abonnés', 'des suiveurs', 'des suivants'], 0, 'Des abonnés. EN: followers.', 'a7-cartes'),
        mc('To pass a story on :', ['relayer', 'relater'], 0, 'Relayer. Relater, c’est raconter. EN: relayer.', 'a7-piege'),
        mc('Se désabonner ... un compte :', ['de', 'à', 'sur'], 0, 'Se désabonner de. EN: de.', 'a7-construire'),
        eS('Sa publication est devenue viral en une nuit.', fr(E(1114)), 'Une publication : virale. EN: agreement.', 'a7-piege'),
        tI('Ma tante ___ tout ce qu’elle lit, sans vérifier. (shares)', fr(E(1112)), 'Partager : elle partage. EN: partage.', 'a7-histoire'),
        tI('Dans mon fil d’___ , je vois surtout des vidéos. (news feed)', fr(E(1116)), 'Le fil d’actualité. EN: actualité.', 'a7-exemples'),
        eS('Ce compte a dix mille suiveurs.', fr(E(1111)), 'Des abonnés. EN: followers.', 'a7-piege'),
        lC('Écoute. Qu’ont fait des milliers de personnes ?', fr(E(1113)), ['elles ont relayé la vidéo', 'elles ont démenti la vidéo', 'elles ont supprimé la vidéo'], 0, 'Elles l’ont relayée. EN: they passed it on.', 'a7-histoire'),
      ],
    },
    {
      id: 'r8-infox', label: 'Vrai ou faux', targets: ['infox-calque'],
      questions: [
        mc('To fall for it :', ['tomber dans le panneau', 'tomber pour'], 0, 'Tomber dans le panneau. EN: to fall for it.', 'a8-erreurs'),
        mc('Actually :', ['en fait', 'actuellement'], 0, 'En fait. Actuellement veut dire maintenant. EN: en fait.', 'a8-erreurs'),
        mc('Une photo changée pour tromper :', ['une photo truquée', 'une photo trichée', 'une photo menteuse'], 0, 'Truquée. EN: doctored.', 'a8-cartes'),
        mc('Une histoire inventée, pour rire ou pour tromper :', ['un canular', 'un démenti', 'un reportage'], 0, 'Un canular. EN: a hoax.', 'a8-cartes'),
        tI('Beaucoup de gens sont tombés dans le ___ . (fell for it)', fr(E(1130)), 'Tomber dans le panneau. EN: panneau.', 'a8-cartes'),
        tI('Une fausse nouvelle ___ sur les réseaux depuis hier. (is going round)', fr(E(1129)), 'Circuler : elle circule. EN: circule.', 'a8-construire'),
        eS('Méfie-toi sur les titres qui font peur.', fr(E(1132)), 'Se méfier de : des titres. EN: de.', 'a8-erreurs'),
        lC('Écoute. Que dit-on de cette photo ?', fr(E(1128)), ['elle est truquée', 'elle est vraie'], 0, 'Truquée : le pont n’a jamais été inondé. EN: doctored.', 'a8-lecture'),
      ],
    },
    {
      id: 'r9-verifier', label: 'Vérifier une source', targets: ['source-non-verifiee'],
      questions: [
        mc('A reliable source :', ['une source fiable', 'une source reliable'], 0, 'Fiable. EN: fiable.', 'a9-cartes'),
        mc('To cross-check sources :', ['croiser les sources', 'traverser les sources'], 0, 'Croiser. EN: croiser.', 'a9-cartes'),
        mc('Trois questions pour vérifier une source :', ['Qui ? Quand ? D’où ?', 'Combien ? Pourquoi ? Où ?'], 0, 'Qui, quand, d’où. EN: who, when, where from.', 'a9-tableau'),
        eS('Ce site est doutable : il n’y a ni date ni auteur.', fr(E(1147)), 'Douteux. EN: dubious.', 'a9-piege'),
        tI('Je suis ___ à la source : la citation était fausse. (went back)', fr(E(1148)), 'Remonter à la source. EN: remontée.', 'a9-cartes', ['Je suis remonté à la source : la citation était fausse.']),
        tI('L’article ___ trois ans : il ne parle pas d’aujourd’hui. (is ... old)', fr(E(1149)), 'L’âge avec avoir : a. EN: a.', 'a9-piege'),
        eS('Cette source est reliable : c’est une agence de presse.', fr(E(1145)), 'Fiable. EN: fiable.', 'a9-piege'),
        lC('Écoute. Que fait cette personne avant de partager ?', fr(E(1144)), ['elle vérifie qui a publié', 'elle compte les partages'], 0, 'Elle vérifie qui a publié l’info. EN: she checks who posted it.', 'a9-construire'),
      ],
    },
    {
      id: 'r10-avis', label: 'Juger une info', targets: ['avis-calque'],
      questions: [
        mc('In my opinion :', ['à mon avis', 'dans mon opinion', 'selon mon avis'], 0, 'À mon avis. EN: à mon avis.', 'a10-piege'),
        mc('Je doute que cette photo ... vraie.', ['soit', 'est'], 0, 'Le subjonctif après je doute que. EN: soit.', 'a10-construire'),
        mc('With a pinch of salt :', ['avec des pincettes', 'avec un grain de sel'], 0, 'Avec des pincettes. EN: pincettes.', 'a10-cartes'),
        mc('« Deux sources ; ..., je reste prudent. »', ['pourtant', 'donc'], 0, 'Une opposition : pourtant. EN: even so.', 'a10-construire'),
        tI('Ça ___ : aucun journal n’en parle. (I would be surprised)', fr(E(1161)), 'Ça m’étonnerait. EN: m’étonnerait.', 'a10-cartes'),
        tI('Cette histoire a l’___ vraie, mais elle ne cite personne. (looks)', fr(E(1168)), 'Avoir l’air. EN: air.', 'a10-cartes'),
        eS('Dans mon opinion, cette info n’est pas crédible.', fr(E(1159)), 'À mon avis. EN: à mon avis.', 'a10-piege'),
        lC('Écoute. Que fait cette personne avec l’info ?', fr(E(1167)), ['elle attend avant d’y croire', 'elle la partage', 'elle la dément'], 0, 'Avec des pincettes : elle ne la croit pas tout de suite. EN: she is wary.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-reponse', label: 'Ta réponse', targets: ['reponse-sans-raison'],
      questions: [
        mc('Pour ouvrir ta réponse sur le forum :', ['Bonjour à tous,', 'Madame la ministre,'], 0, 'Un forum de quartier : bonjour à tous. EN: hello everyone.', 'a11-lecture'),
        mc('Pour montrer ce qui fait hésiter :', ['Pourtant,', 'D’abord,', 'Ensuite,'], 0, 'Pourtant oppose. EN: even so.', 'a11-plan'),
        mc('Pour conclure avec ta proposition :', ['Je propose qu’on attende.', 'Je propose qu’on attend.'], 0, 'Je propose que + subjonctif : attende. EN: subjunctive.', 'a11-plan'),
        mc('Combien de raisons, au moins, dans ta réponse ?', ['deux', 'aucune', 'une seule'], 0, 'Au moins deux : la source, la date, les autres médias. EN: at least two.', 'a11-mission'),
        tI('D’abord, elle ne ___ aucune source. (cites)', fr(E(1173)), 'Citer : elle cite. EN: cite.', 'a11-lecture'),
        tI('Il faut attendre une ___ officielle. (the noun of confirmer)', fr(E(1176)), 'La confirmation. EN: confirmation.', 'a11-usages'),
        eS('À mon avis, cette info n’est pas reliable, pour trois raisons.', fr(E(1172)), 'Fiable. EN: fiable.', 'a11-usages'),
        lC('Écoute. Quelle raison donne cette personne ?', fr(E(1174)), ['aucun média sérieux n’en parle', 'la photo est floue', 'le texte est trop long'], 0, 'Aucun média sérieux n’en parle. EN: no serious outlet reports it.', 'a11-lecture'),
      ],
    },
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
    { front: 'on the news', back: 'aux nouvelles', say: fr(E(1009)) },
    { front: 'the editor-in-chief', back: 'le rédacteur en chef', say: fr(E(1030)) },
    { front: 'to make the front page', back: 'faire la une', say: fr(E(1049)) },
    { front: 'a programme, live', back: 'une émission, en direct', say: fr(E(1061)) },
    { front: 'according to witnesses', back: 'd’après les témoins', say: fr(E(1077)) },
    { front: 'reportedly, not confirmed', back: 'le conditionnel : démissionnerait', say: fr(E(1091)) },
    { front: 'to pass a story on', back: 'relayer une info', say: fr(E(1113)) },
    { front: 'to fall for it', back: 'tomber dans le panneau', say: fr(E(1130)) },
    { front: 'a reliable source', back: 'une source fiable', say: fr(E(1145)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Les médias, en résumé',
  body: `${REFRAME} Tu sais maintenant parler de la presse, de la radio, de la télé et des réseaux, chaque mot avec sa famille et ses voisins. Tu lis un titre, tu trouves la source, tu entends le conditionnel du on-dit, et tu dis si une info est fiable, avec des raisons. La prochaine leçon, ${EMOTIONS_REF}, parle des émotions : tu y diras aussi ce que les nouvelles te font. EN: Next lesson is about emotions, including what the news makes you feel.`,
  points: [
    'Un titre garde le nom : Démission du ministre.',
    'Selon, d’après : cherche qui donne l’info.',
    'Au conditionnel, ce n’est pas encore confirmé.',
    'Avant de relayer : qui, quand, d’où.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['titre', 'source', 'ondit'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'À toi de réagir',
    opener: {
      line: 'Une info qui circule dans ton quartier, un forum, une page blanche : à toi de dire si tu y crois, et pourquoi. EN: A story going round your neighbourhood, a forum, a blank page: your turn to say whether you believe it, and why.',
      imageRef: 'lessons/medias/act11.jpg',
    },
    sections: [],
    milestone: 'Tu as jugé une info sur un forum, avec des raisons, une nuance et une proposition, et passé l’examen : quatre-vingt-huit questions, onze rounds. EN: You judged a story on a forum, with reasons, a nuance and a proposal, and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-titres', 'a11-quiz/r6-ondit', 'a11-quiz/r9-verifier'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};


/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-medias', 'Le paysage des médias', ['s’informer', 'la presse écrite', 'la radio et la télé', 'Québec, France, Suisse'], [
    teach('sheet-medias-teach', 'La méthode',
      `${REFRAME} Pour chaque mot, apprends sa famille (informer, l’information, un informateur) et ses voisins (lire le journal, écouter la radio, faire la une). EN: learn each word with its family and its collocations, and ask who is speaking.`),
    table('sheet-medias-sinformer', 'S’informer', ['Le média', 'Le verbe', 'Le public'], [
      ['le journal', 'lire le journal', 'les lecteurs'],
      ['la radio', 'écouter la radio', 'les auditeurs'],
      ['la télé', 'regarder le journal télévisé, le téléjournal', 'les téléspectateurs'],
      ['en ligne', 's’informer en ligne', 'les internautes'],
      ['un balado, un podcast', 'écouter un balado', 'les auditeurs'],
      ['les nouvelles, les infos', 'entendre une info aux nouvelles', 'tout le monde'],
    ]),
    table('sheet-medias-presse', 'La presse écrite', ['Le mot', 'Sens', 'Anglais'], [
      ['un quotidien', 'sort chaque jour', 'a daily'],
      ['un hebdomadaire, un hebdo', 'sort chaque semaine', 'a weekly'],
      ['un mensuel', 'sort chaque mois', 'a monthly'],
      ['la rédaction', 'l’équipe et la salle du journal', 'the newsroom'],
      ['le rédacteur en chef', 'dirige la rédaction (pas l’éditeur)', 'the editor-in-chief'],
      ['une rubrique', 'une partie du journal par sujet', 'a section'],
      ['un éditorial, une chronique', 'l’avis du journal, l’avis d’une personne', 'an editorial, a column'],
      ['le courrier des lecteurs', 'les lettres du public', 'readers’ letters'],
      ['la publicité', 'les annonces payées', 'advertising'],
    ]),
    table('sheet-medias-antenne', 'La radio et la télé', ['Le mot', 'Sens', 'Anglais'], [
      ['diffuser, la diffusion', 'faire passer à l’antenne', 'to broadcast'],
      ['une émission', 'ce qui passe à la radio ou à la télé', 'a programme'],
      ['une chaîne, une station', 'la télé, la radio', 'a channel, a station'],
      ['en direct, en différé', 'maintenant, enregistré', 'live, pre-recorded'],
      ['un reportage', 'une histoire racontée sur place', 'a report'],
      ['un animateur, une animatrice', 'présente l’émission', 'a host'],
      ['un envoyé spécial', 'le journaliste sur place', 'a special correspondent'],
    ]),
    teach('sheet-medias-variantes', 'Québec, France, Suisse',
      'Au Québec : aux nouvelles, le téléjournal, le bulletin de nouvelles, une entrevue, un balado, la mairesse. En France : aux infos, le JT, le flash info, une interview, un podcast. En Suisse : le téléjournal aussi. Aucun n’est faux. EN: every variant is right where it is used.'),
  ]),
  sheet('sheet-titres', 'Lire un titre', ['la grammaire du titre', 'verbe et nom', 'le passif coupé', 'les parties de la page'], [
    teach('sheet-titres-teach', 'La grammaire du titre',
      'Un titre enlève les petits mots : les articles, le verbe être, l’auxiliaire. Il garde le nom à la place du verbe (Démission du ministre) ou le participe à la place du passif (Deux suspects arrêtés). Pour comprendre, remets la phrase complète. EN: a headline drops the small words; rebuild the full sentence.'),
    table('sheet-titres-noms', 'Le verbe et le nom du titre', ['Verbe', 'Nom du titre', 'Titre'], [
      ['démissionner', 'la démission', 'Démission du ministre'],
      ['fermer', 'la fermeture', 'Fermeture de l’usine'],
      ['ouvrir', 'l’ouverture', 'Ouverture du nouveau pont'],
      ['augmenter', 'la hausse', 'Hausse des loyers'],
      ['baisser', 'la baisse', 'Baisse du chômage'],
      ['élire', 'l’élection', 'Élection de la mairesse'],
      ['arrêter', 'l’arrestation', 'Arrestation de deux suspects'],
      ['publier', 'la publication', 'Publication des résultats'],
    ]),
    teach('sheet-titres-passif', 'Le passif coupé',
      `« Une mairesse élue » veut dire : une mairesse a été élue. Le titre garde le participe, qui s’accorde (élue, arrêtés), et enlève a été. ${Cap(PASSIF_REF)} : « ${B118_REFRAME} » EN: ${B118_REFRAME_EN}`),
    table('sheet-titres-page', 'Les parties de la page', ['Partie', 'Ce que c’est'], [
      ['la une', 'la première page (on dit la une, sans élision)'],
      ['faire la une', 'être en première page, être l’histoire du jour'],
      ['le titre', 'les mots en gros, en haut de l’article'],
      ['le chapeau', 'deux ou trois lignes sous le titre, qui résument'],
      ['la brève', 'un article très court, avec les faits'],
    ]),
  ]),
  sheet('sheet-sources', 'Qui dit quoi', ['nommer la source', 'les verbes de la parole', 'le conditionnel du on-dit', 'sûr ou pas sûr'], [
    table('sheet-sources-nommer', 'Nommer la source', ['Le bloc', 'Exemple', 'Le piège'], [
      ['selon + nom', 'selon la police', 'pas selon à'],
      ['d’après + nom', 'd’après les témoins', 'pas d’après à'],
      ['de source sûre', 'je le sais de source sûre', 'la source n’est pas nommée'],
      ['selon nos informations', 'le journal a son info, pas encore confirmée', 'souvent suivi du conditionnel'],
      ['selon moi, d’après moi', 'ton avis, pas une source', ''],
    ]),
    table('sheet-sources-verbes', 'Les verbes de la parole', ['Verbe', 'Nom', 'Exemple'], [
      ['déclarer', 'une déclaration', 'faire une déclaration'],
      ['annoncer', 'une annonce', 'la mairie a annoncé la fermeture'],
      ['témoigner', 'un témoignage (et un témoin)', 'une voisine a témoigné'],
      ['citer', 'une citation', 'citer ses sources'],
      ['confirmer', 'la confirmation', 'la police a confirmé'],
      ['démentir', 'un démenti', 'le ministère a démenti la rumeur'],
    ]),
    teach('sheet-sources-ondit', 'Le conditionnel du on-dit',
      `Au conditionnel, le journaliste rapporte une info qu’il n’a pas encore confirmée : « Le ministre démissionnerait. » Au futur, c’est sûr : « Le ministre démissionnera. » ${Cap(CONDITIONNEL_REF)} : « ${B108_REFRAME} » Et après a déclaré que, le futur devient aussi conditionnel. ${Cap(DISCOURS_REF)} : « ${B119_REFRAME} » EN: the conditional reports what is not yet confirmed.`),
    table('sheet-sources-sur', 'Sûr ou pas sûr', ['Pas encore confirmé', 'Confirmé'], [
      ['le ministre démissionnerait', 'le ministre démissionnera'],
      ['l’incendie aurait fait deux blessés', 'l’incendie a fait deux blessés'],
      ['une rumeur court', 'la police a confirmé'],
      ['il paraît que', 'c’est officiel'],
      ['sous réserve de confirmation', 'la confirmation est arrivée'],
    ]),
  ]),
  sheet('sheet-reseaux', 'Réseaux, vrai et faux', ['les réseaux', 'vrai ou faux', 'les faux amis', 'les signes d’une infox'], [
    table('sheet-reseaux-blocs', 'Les réseaux', ['Le bloc', 'Sens', 'Anglais'], [
      ['s’abonner à, un abonné', 'suivre un compte, la personne qui suit', 'to follow, a follower'],
      ['suivre un compte', 'voir ses publications', 'to follow an account'],
      ['partager une publication', 'l’envoyer à tes contacts', 'to share a post'],
      ['relayer une info', 'la faire circuler plus loin', 'to pass a story on'],
      ['commenter, un commentaire', 'répondre sous la publication (sans sur)', 'to comment'],
      ['devenir viral, une publication virale', 'partagée partout, très vite', 'to go viral'],
      ['le fil d’actualité', 'ce que tu vois en ouvrant l’application', 'the news feed'],
      ['liker, un like', 'familier ; aimer une publication', 'to like'],
    ]),
    table('sheet-reseaux-infox', 'Vrai ou faux', ['Le mot', 'Sens', 'Anglais'], [
      ['une fausse nouvelle, une infox', 'une info fausse', 'fake news'],
      ['la désinformation', 'des infos fausses pour tromper', 'disinformation'],
      ['une rumeur', 'une info non vérifiée qui court', 'a rumour'],
      ['un canular', 'une fausse histoire, pour rire ou pour tromper', 'a hoax'],
      ['une photo truquée', 'une photo changée', 'a doctored photo'],
      ['se méfier de', 'ne pas faire confiance tout de suite', 'to be wary of'],
      ['tomber dans le panneau', 'croire une fausse histoire', 'to fall for it'],
    ]),
    table('sheet-reseaux-faux', 'Les faux amis des médias', ['Anglais', 'Pas', 'Mais'], [
      ['the editor', 'l’éditeur', 'le rédacteur en chef'],
      ['a programme', 'un programme', 'une émission'],
      ['live', 'vivant', 'en direct'],
      ['on the news', 'sur les nouvelles', 'aux nouvelles'],
      ['to publicize an article', 'publiciser', 'publier'],
      ['to quote', 'quoter', 'citer'],
      ['actually', 'actuellement', 'en fait'],
      ['to fall for it', 'tomber pour', 'tomber dans le panneau'],
    ]),
    teach('sheet-reseaux-signes', 'Quatre signes d’une infox',
      'Pas de source, ou « selon nos sources » sans nom. Pas de date. Un titre qui fait peur ou trop plaisir. Aucun média sérieux n’en parle. Un seul signe ne prouve rien ; trois, c’est une bonne raison de vérifier. EN: no source, no date, an emotional headline, no serious outlet.'),
  ]),
  sheet('sheet-verifier', 'Vérifier et juger une info', ['vérifier une source', 'juger une info', 'les connecteurs', 'relire ta réponse'], [
    table('sheet-verifier-questions', 'Vérifier une source', ['Question', 'Comment'], [
      ['Qui l’a écrit ?', 'un nom, un média connu, une agence de presse'],
      ['Quand ?', 'la date : un vieil article ne parle pas d’aujourd’hui'],
      ['D’où vient l’info ?', 'remonter à la source, à la première publication'],
      ['D’autres en parlent ?', 'croiser les sources : deux ou trois médias sérieux'],
      ['La photo est vraie ?', 'une recherche inversée, les détails (saison, lieu)'],
      ['Le titre fait peur ?', 'se méfier, prendre l’info avec des pincettes'],
    ]),
    table('sheet-verifier-juger', 'Juger une info', ['Pour...', 'Tu dis', 'Leçon'], [
      ['donner ton avis', 'à mon avis, selon moi', ''],
      ['nuancer', 'il me semble que, à première vue', ''],
      ['douter', 'je doute que ce soit vrai (subjonctif)', `${SUBJ_FORM_REF} à ${SUBJ_INF_REF}`],
      ['être surpris', 'ça m’étonnerait', `${CONDITIONNEL_REF}`],
      ['rester prudent', 'je prends cette info avec des pincettes', ''],
      ['proposer', 'il faut attendre, je propose qu’on attende', ''],
    ]),
    table('sheet-verifier-connecteurs', 'Les connecteurs', ['Pour...', 'Connecteurs', 'Leçon'], [
      ['ordonner', 'd’abord, ensuite, enfin', `${COORDINATION_REF}`],
      ['ajouter', 'de plus', `${COORDINATION_REF}`],
      ['expliquer', 'parce que, car', `${SUBORDINATION_REF}`],
      ['opposer', 'pourtant, d’un côté, de l’autre', `${CONCESSION_REF}`],
      ['concéder', 'même si', `${CONCESSION_REF}`],
      ['conclure', 'c’est pourquoi, donc', `${COORDINATION_REF}`],
    ]),
    table('sheet-verifier-relire', 'Relire ta réponse', ['À vérifier', 'Comment'], [
      ['L’info', 'on sait de quelle info tu parles'],
      ['Ton avis', 'fiable, pas fiable, ou pas encore sûr'],
      ['Tes raisons', 'au moins deux : la source, la date, les preuves, les autres médias'],
      ['La nuance', 'une phrase avec pourtant, même si ou d’un côté'],
      ['Ta proposition', 'attendre, vérifier, ne pas relayer'],
      ['Les voisins', 'au moins six blocs de la leçon, chacun complet'],
    ]),
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
  { id: 'd-nouvelles', title: 'Aux nouvelles', format: 'mcq' as const, coach: 'On entend une info aux nouvelles, aux infos, au journal. Sur, c’est pour un écran. EN: aux nouvelles, never sur.', q: 'Je l’ai vu ... hier soir.', opts: ['aux nouvelles', 'sur les nouvelles'], correct: 0, why: 'Aux nouvelles. EN: aux nouvelles.', items: [E(1008), E(1009), E(1010), E(1011), E(1012), E(1015)], audio: AUDIO },
  { id: 'd-presse', title: 'Le rythme et les gens', format: 'sort' as const, coach: 'Deux piles : ce qui dit quand le journal sort, ce qui dit qui le fait. EN: when it comes out, who makes it.', buckets: ['le rythme du journal', 'les gens du journal'], items: [E(1025), E(1026), E(1017), E(1019), E(1030), E(1032)], audio: AUDIO },
  { id: 'd-titres', title: 'Le nom du titre', format: 'mcq' as const, coach: 'Le titre garde le nom ou le participe, sans petits mots. EN: the noun or the participle.', q: 'Titre : ... des loyers à Montréal.', opts: ['Hausse', 'Haussement'], correct: 0, why: 'La hausse. EN: a rise.', items: [E(1041), E(1042), E(1044), E(1045), E(1047), E(1049)], audio: AUDIO },
  { id: 'd-antenne', title: 'Une émission en direct', format: 'mcq' as const, coach: 'Une émission, en direct, des auditeurs : trois mots qui ne suivent pas l’anglais. EN: three words that do not cross.', q: 'A TV programme : une ... .', opts: ['émission', 'programme'], correct: 0, why: 'Une émission. EN: une émission.', items: [E(1061), E(1062), E(1063), E(1065), E(1066), E(1068)], audio: AUDIO },
  { id: 'd-sources', title: 'Qui le dit', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute, et dis qui donne l’info. EN: read each sentence aloud and name the source.', items: [E(1076), E(1077), E(1078), E(1080), E(1081), E(1082)], audio: AUDIO },
  { id: 'd-ondit', title: 'Sûr ou pas encore', format: 'sort' as const, coach: 'Deux piles : ce qui est rapporté, ce qui est confirmé. EN: reported or confirmed.', buckets: ['pas encore confirmé', 'confirmé'], items: [E(1091), E(1092), E(1094), E(1096), E(1097), E(1095)], audio: AUDIO },
  { id: 'd-reseaux', title: 'Partager, relayer', format: 'mcq' as const, coach: 'Partager, relayer, s’abonner à : les verbes français et leurs prépositions. EN: French verbs, French prepositions.', q: 'Des milliers de personnes ont ... la vidéo.', opts: ['relayé', 'relaté'], correct: 0, why: 'Relayer : faire passer. EN: relayer.', items: [E(1111), E(1112), E(1113), E(1114), E(1116), E(1119)], audio: AUDIO },
  { id: 'd-infox', title: 'Le vrai et le faux', format: 'mcq' as const, coach: 'Une infox, un canular, une photo truquée ; et on tombe dans le panneau. EN: the words of fake news.', q: 'To fall for it : tomber ... .', opts: ['dans le panneau', 'pour ça'], correct: 0, why: 'Tomber dans le panneau. EN: to fall for it.', items: [E(1128), E(1129), E(1130), E(1131), E(1132), E(1133)], audio: AUDIO },
  { id: 'd-verifier', title: 'Fiable ou douteux', format: 'sort' as const, coach: 'Deux piles : ce qui rend une source fiable, ce qui la rend douteuse. EN: reliable or dubious.', buckets: ['une source fiable', 'une source douteuse'], items: [E(1145), E(1146), E(1151), E(1147), E(1149), E(1131)], audio: AUDIO },
  { id: 'd-avis', title: 'La forme exacte', format: 'mcq' as const, coach: 'À mon avis ; je doute que + subjonctif ; avec des pincettes. EN: one exact shape per formula.', q: 'Je doute que cette photo ... vraie.', opts: ['soit', 'est'], correct: 0, why: 'Le subjonctif : soit. EN: soit.', items: [E(1159), E(1160), E(1161), E(1165), E(1167), E(1168)], audio: AUDIO },
  { id: 'd-reponse', title: 'Une réponse qui se suit', format: 'flashcard' as const, coach: 'Lis la réponse de Sophie, une phrase à la fois : l’info, l’avis, les raisons, la nuance, la proposition. EN: one move per sentence.', items: [E(1171), E(1172), E(1173), E(1174), E(1175), E(1177)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'nouvelles-calque', description: 'Builds the everyday media blocks from English (sur les nouvelles, regarder la radio) or confuses informer with s’informer.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-nouvelles', retest: 'd-nouvelles' },
  { id: 'presse-faux-ami', description: 'Carries English press words into French (l’éditeur for the editor-in-chief, publiciser for publish, letters to the editor, libre for free of charge).', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-presse', retest: 'd-presse' },
  { id: 'titre-mal-lu', description: 'Reads a headline as if it were a sentence, puts a verb where the headline needs a noun, or drops the agreement of the headline participle.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-titres', retest: 'd-titres' },
  { id: 'antenne-calque', description: 'Uses the English broadcast words (un programme for a programme, vivant for live, les écouteurs for listeners).', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-antenne', retest: 'd-antenne' },
  { id: 'source-oubliee', description: 'Loses track of who is speaking: adds a preposition after selon or d’après, gives the wrong verb to a statement or a witness, or keeps the future in reported speech.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-sources', retest: 'd-sources' },
  { id: 'ondit-comme-fait', description: 'Reads the hearsay conditional as a fact, reports a rumour in the future, or uses dénier for démentir.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-ondit', retest: 'd-ondit' },
  { id: 'reseaux-calque', description: 'Uses English social media verbs (sharer, des suiveurs), confuses relayer with relater, or drops the preposition or agreement (se désabonner un compte, une vidéo viral).', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-reseaux', retest: 'd-reseaux' },
  { id: 'infox-calque', description: 'Carries fake-news English into French (tomber pour, actuellement for actually, une fake nouvelle, se méfier sur).', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-infox', retest: 'd-infox' },
  { id: 'source-non-verifiee', description: 'Judges a source by how often it is shared rather than by who, when and where from, or uses the checking calques (reliable, doutable, monter à la source).', detectOn: ['a9-construire', 'a9-piege', 'a9-check', 'a11-mission'], drill: 'd-verifier', retest: 'd-verifier' },
  { id: 'avis-calque', description: 'Builds the opinion formulas from English (dans mon opinion, avec un grain de sel), puts the indicative after je doute que, or picks a connector that says the wrong link.', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a11-mission'], drill: 'd-avis', retest: 'd-avis' },
  { id: 'reponse-sans-raison', description: 'Gives a verdict on a story with no reasons, no nuance and no proposal, or strings the reasons together without connectors.', detectOn: ['a11-lecture', 'a11-plan', 'a11-mission'], drill: 'd-reponse', retest: 'd-reponse' },
];

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-34-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-34-paysage': 'The magazine survey (act 1), FIVE VOICES: a presenter reads the heading, the introduction and the closing question; then Louise (a Montréal woman in her seventies, calm, Québec French), Moussa (a Dakar man in his thirties, warm, Senegalese French), Chloé (a Liège student of twenty-two, quick, Belgian French) and Marc (a Genève man in his late forties, unhurried, Swiss French). Each voice answers as in a street interview, never as an advert for a medium.',
  'rec-b1-34-redaction': 'The first day in the newsroom (act 2), THREE VOICES: a narrator, Geneviève (a Sherbrooke editor-in-chief in her fifties, busy but kind, Québec French) and the learner (an intern, a little nervous). Newsroom feel: keyboards and a phone far behind, never over the words. « l’éditrice » in the learner’s line is said naturally; Geneviève corrects it without mockery.',
  'rec-b1-34-une': 'The front page and its brief (act 3), ONE VOICE, one take, a Québec radio presenter reading the day’s front page: each headline read as a headline, clipped, with a short pause after it; then the brief at an even news pace. « la hausse » with no liaison and no elision; « mairesse » clearly with its final -esse.',
  'rec-b1-34-piege-titres': 'The audio step plays each card’s CORRECT headline or sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. Headlines are read as headlines (no article added), and « la une » is two clear words [la yn].',
  'rec-b1-34-bulletin': 'The morning bulletin (act 4), ONE VOICE, one take, a Dakar radio presenter in her forties: bright, warm, a real seven o’clock voice, Senegalese French welcome. A short station jingle is NOT wanted: the words only. « Restez avec nous » is friendly, not salesy.',
  'rec-b1-34-breve': 'The accident brief (act 5), TWO VOICES: a Québec news reader for the brief, calm and factual, and a male driver for the quoted witness line, a little shaken. The conditional « seraient » at the end is read at the same even pace, not stressed: learners must hear it without help.',
  'rec-b1-34-piege-sources': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « démissionnerait » is five clear syllables with the final [ʁɛ] audible.',
  'rec-b1-34-flash-ecoute': 'REQUIRED FOR THE EAR MISSION (act 6): ten lines, ONE TAKE, ONE VOICE, in authored order, as a midday news flash: even, neutral, the same tone for confirmed and unconfirmed items. The difference between « démissionnerait » and « démissionnera » must be carried by the verb alone, never by the voice. A short pause between lines.',
  'rec-b1-34-famille': 'The family group chat (act 7), THREE VOICES: a narrator, Aïcha (an Abidjan woman in her twenties, amused and a little tired of her aunt’s videos, Ivorian French welcome) and the learner. Relaxed Sunday-evening feel. Nobody mocks the aunt: Aïcha is fond of her.',
  'rec-b1-34-piege-reseaux': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « virale » ends in a clear [l]; « relayé » is [ʁə.le.je].',
  'rec-b1-34-forum': 'The forum thread (act 8), THREE VOICES: Mélanie (worried, then relieved), Karim (calm, observant) and Julien (brisk, sure of himself), Québec French. Read as people reading their own posts aloud, with the poster’s name said before each message by the same voice as the message.',
  'rec-b1-34-verif': 'The fact-check post (act 9), ONE VOICE, one take, a Belgian journalist in her thirties: precise, calm, never triumphant about the verdict. « bourgmestre » said as a Belgian would. « D’abord », « Ensuite », « Enfin » each get a short breath after them.',
  'rec-b1-34-piege-verifier': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « fiable » is two syllables [fjabl], not three.',
  'rec-b1-34-auditeurs-ecoute': 'REQUIRED FOR THE EAR MISSION (act 10): eleven lines, ONE TAKE, in authored order, as a radio phone-in. SIX VOICES taking turns (young and old, women and men, mixed francophone accents), every caller calm and reasonable. The subjunctive « soit » and the conditional « m’étonnerait » are read naturally, never stressed. A short pause between callers.',
  'rec-b1-34-piege-avis': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « à mon avis » links as [a.mɔ̃.na.vi]; « pourtant » gets a short pause after it.',
  'rec-b1-34-reponse': 'Sophie’s forum reply (act 11), ONE VOICE, one take, a Montréal woman in her thirties reading her post before sending it: friendly, clear, firm without lecturing. Québec French. The connectors (D’abord, Ensuite, De plus, Pourtant) each get a short breath after them, so the learner hears the plan.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 34',
  intro: 'Knowing the word « les nouvelles » is not enough: you also need its neighbour, or you end up saying you saw something « sur les nouvelles » while sitting on the TV. This lesson teaches the vocabulary of the media the way French speakers actually use it, as word families (informer, l’information, un informateur) and collocations (faire la une, relayer une info, vérifier une source), across the press, radio and TV, and social media. It also teaches you to read the news: headlines built from nouns and cut passives, sources named with selon and d’après, the conditional that means « not yet confirmed », fake news and how to check it. Texts come from Montréal, Sherbrooke, Dakar, Abidjan, Liège and Genève. It ends with a forum reply judging whether a story is reliable, and why.',
  skill: 'CE',
  grammarAssumed: [CONDITIONNEL_UNIT, SUBJ_FORM_UNIT, SUBJ_DECL_UNIT, SUBJ_INF_UNIT, PASSIF_UNIT, DISCOURS_UNIT, COORDINATION_UNIT, SUBORDINATION_UNIT, CONCESSION_UNIT, ENVIRONNEMENT_UNIT],
  grammarIntroduced: [
    'Media topic vocabulary taught as word families (verb, noun, adjective, agent noun) and collocations rather than isolated nouns, for the press, radio and TV, social media, sources, fake news and checking',
    'Headline grammar as a reading skill: the nominalised verb (la démission, la fermeture, la hausse), the dropped article, and the passive reduced to its agreeing participle (élue, arrêtés)',
    'Naming a source: selon and d’après + noun with no preposition, de source sûre, selon nos informations; the verbs of speech with their nouns (déclarer, annoncer, témoigner, citer, confirmer, démentir)',
    'The hearsay conditional of the news (le ministre démissionnerait, l’incendie aurait fait) against the future and passé composé of confirmed facts, for recognition',
    'Social media and fake-news collocations: s’abonner à, partager, relayer, devenir viral, une fausse nouvelle or une infox, une photo truquée, un canular, tomber dans le panneau',
    'Checking a source: fiable, douteux, remonter à la source, croiser les sources, and the three questions who, when, where from',
    'Media false friends: l’éditeur, un programme, vivant, publiciser, actuellement, reliable, and « sur les nouvelles »',
    'A 100 to 140 word forum reply judging whether a story is reliable, with at least two reasons, a nuance and a proposal',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Connaître le mot « les nouvelles » ne suffit pas : il faut aussi son voisin, sinon tu dis que tu as vu une info « sur les nouvelles ». Cette leçon t’apprend les mots des médias par familles et par voisins : la presse, la radio, la télé, les réseaux. Elle t’apprend aussi à lire l’info : un titre, une source, un conditionnel qui dit « pas encore confirmé », une fausse nouvelle. À la fin, tu réponds sur un forum pour dire si une info est fiable, et pourquoi.',
    minutes: 140,
    difficulty: 3,
    glyph: 'une',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: MEDIAS_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, PAYSAGE_TEXT, UNE_TEXT, BULLETIN_TEXT, BREVE_TEXT, FORUM_TEXT, VERIF_TEXT, REPONSE_TEXT, dicteeFor };


