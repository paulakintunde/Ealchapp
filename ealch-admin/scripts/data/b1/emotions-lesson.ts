// b1.35.l1 « Les émotions » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md, in the
// VOCAB SHAPE, TOPIC VARIANT, of B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 and §2.3.
// No new section types.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]` and the validators run on `LESSON` itself, as b1.33 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   The vocab loop per act (shapes doc §2.1, topic variant §2.3): meet the
//   words in context (reading / listening / story / scene), learn them as
//   families, scales and suites (cardDeck), tell them apart (groupDrill), a
//   lookup or consolidation mission (tapTable / examples / dictation /
//   flashcards / focus), use them in situations (groupDrill), trap the
//   English calque (trapDrill or commonErrors), check (gated control pages).
//
//    1  Dire ce que tu ressens        7   se sentir / ressentir, avoir hâte, content pour; « excité »
//    2  La joie                       7   content < heureux < ravi < aux anges; la joie; faire plaisir (tapTable)
//    3  La tristesse et la déception  7   triste, décevoir / déçu / décevant, avoir de la peine (Québec)
//    4  La colère                     7   agacé < énervé < en colère < furieux; colère contre; fâché; tanné
//    5  La peur et le stress          7   inquiet < angoissé < paniqué; s'inquiéter pour / de; le stress
//    6  La honte, la fierté, la gêne  7   honte de, fier de, gêné / gênant; qui ressent (-é) vs ce qui cause (-ant)
//    7  La surprise, le soulagement   7   surprendre, étonner, soulager, rassurer; relevé / soulagé
//    8  La suite : de ou que          7   de + infinitif vs que + subjonctif; pour / de; ça me rend (tapTable)
//    9  Quand un sentiment change     7   imparfait (l'état) vs passé composé (le déclic); peu à peu, tout à coup
//   10  Réagir aux émotions des autres 7  empathy formulas by register (tapTable)
//   11  À toi d'écrire               11   model message, plan, role play, TASK, practice, cheat, quiz
//
//   TOTAL 81 missions, 11 acts (7 x 10 + 11). 16 family rows, 3 scales and
//   33 collocation rows, plus 126 sentences. Seven readings of 125 to 140
//   words (a message, a diary, an article on stress at work, a forum post,
//   a blog, a letter to an advice column with its answer, the model
//   message), three hideLines listenings, two stories, one scene. Corpus:
//   178 authored rows (.1000-.1177) plus 36 reused seed rows, 214 item ids,
//   213 released act by act through `deckTranche` (one seed row is
//   dictation-only: NOT_DECK_ABLE). Quiz: 11 rounds of 8 (44 mcq, 22 typeIn,
//   11 errorSpot, 11 listenChoose). 550 estimated screens. Eleven error triggers, eleven drills, five reference sheets
//   reached from 15 missions by `sheetId`, nine terms. Three tapTables (acts 2, 8, 10).
//   Chapter artwork: `emotions-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un sentiment se dit à la bonne force, avec la bonne suite. »
//   EN: A feeling is said at the right strength, with the right words after it.
//
//   ONE METAPHOR, A DIAL AND WHAT COMES AFTER IT. Each feeling sits on a dial
//   (agacé, énervé, en colère, furieux), and the word chosen pulls a
//   construction behind it (en colère contre, content de partir, content que
//   tu sois là, content pour toi). It is NOT « learn the emotion words »: a
//   noun list is what this lesson refuses (corpus REFRAME_REJECTED).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the B1 feelings vocabulary as families, scales and suites; the
//           -é (who feels) against -ant (what causes it) contrast for
//           feelings; the feelings false friends (excité, décevoir, relevé,
//           embarrassant, fou for mad, s'inquiéter de for a person); the
//           empathy formulas by register; the Québec forms (tanné, avoir de
//           la peine, capoter); the personal message about an emotional week.
//   QUOTES  the feelings idioms of lessons 27 to 29 in B1 as imported seed
//           rows (cœur gros, mauvais sang, cafard, taper sur les nerfs, voir
//           rouge, colère noire, rouge de honte, peur bleue, papillons dans
//           le ventre), never re-taught; the subjunctive after a feeling
//           (lessons 14 to 16) and the de / que pairs of lesson 16 as rows;
//           the peur pairs of lesson 4 in act 9.
//   LEAVES  the business vocabulary to lesson 36 (named in the roundup);
//           register as a system to lesson 25; tu or vous to lesson 26.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (vous in the advice column). Every learner surface that
//   explains something carries English (`en`, or a final « EN: »), and NO
//   ANSWER ever does. Every `say` is French. Theme `emotions`, block
//   1000-1199 (corpus §A). b1.* citations are French from the plan, never a
//   raw unit id. Setting leans Canadian (Montréal, Québec, Sherbrooke) with
//   Bruxelles, Genève, Dakar and Abidjan; characters recur only inside this
//   lesson. No bubble carries a « ? » or a « ! ». One apostrophe style (')
//   in the scenario. Answer slots are spread by permuting options WITH their
//   correct index (spreadMissionSlots, spreadQuizSlots), never by editing.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 81 missions in 11 acts, inside the vocab shape's 75-90. Keep?
//   2. `Lesson.skill` is 'PE': the lesson remediates written expression of
//      feelings (the shapes doc §1.4 rule) and the task is a written
//      message. Confirm, or 'PO' if the role play should carry the grade.
//   3. The theme `emotions` has EMPTY sub_themes. The brief's three (dire ce
//      qu'on ressent, les nuances des sentiments, réagir aux émotions des
//      autres) need a Postgres edit at import. Apply?
//   4. Postgres holds 292 emotions rows the seed does not carry, many on
//      topic (ravi, la colère, le soulagement, être aux anges, se faire du
//      souci). None is twinned: every authored phrase row is a multi-member
//      family or scale, so the hub never deals the same card twice. Should
//      the import pull the single-word DB rows into the seed alongside?
//   5. « excité » is taught as a false friend for good news. Some Québec
//      speakers do say « je suis excité » for looking forward to something;
//      the lesson says « évite-le » rather than « c'est faux ». Keep?
//   6. « avoir de la peine » is marked Québec-leaning for « être triste »
//      (it is also said in France) and « avoir de la peine à + infinitif »
//      is taught as « avoir du mal ». Keep the nuance at that level?
//   7. Three tapTables (acts 2, 8, 10), one per act. Confirm three.
//   8. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.
//   9. The b1 house tests and `_preview-b1.ts` do not list « emotions »
//      yet; I was not allowed to edit them. Add it when the wave lands.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  MAUDE_TEXT, JOURNAL_TEXT, STRESS_TEXT, FORUM_TEXT, BLOGUE_TEXT, COURRIER_TEXT, REPONSE_TEXT,
  PC_IMP_UNIT, PAIRES_UNIT, SUBJ_FORM_UNIT, SUBJ_DECL_UNIT, SUBJ_INF_UNIT, REGISTRES_UNIT, TU_VOUS_UNIT,
  CORPS_UNIT, ANIMAUX_UNIT, COULEURS_UNIT,
  PC_IMP_REF, PAIRES_REF, SUBJ_DECL_REF, SUBJ_INF_REF, REGISTRES_REF,
  CORPS_REF, ANIMAUX_REF, COULEURS_REF, AFFAIRES_REF,
} from './emotions-corpus.ts';
import { EMOTIONS_TERMS } from './emotions-terms.ts';

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
  if (!r) throw new Error(`b1.35: no item ${id}`);
  return r;
}

/** NOT_SPEAKABLE is typed by hand in the corpus; hold it to the seed. */
for (const id of IMPORT_IDS) {
  const d = SEED.get(id)?.drills ?? [];
  if (!SEED.has(id)) throw new Error(`b1.35: import ${id} is not in the seed`);
  if (!NOT_SPEAKABLE.includes(id) && !d.includes('voiceflash')) throw new Error(`b1.35: ${id} has no voiceflash but is not in NOT_SPEAKABLE`);
  if (!NOT_DECK_ABLE.includes(id) && !d.includes('flashcard')) throw new Error(`b1.35: ${id} has no flashcard but is not in NOT_DECK_ABLE`);
}

/** The corpus row's IPA, so a break or a trap card never retypes one. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.35: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section. Authored rows only. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`b1.35: no authored respell on ${id}`);
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

type Card = NonNullable<Sec<'cardDeck'>['cards']>[number];
const card = (id: string, head: string, label: string, body: string): Card =>
  ({ head, label, fr: fr(id), sub: rsOf(id), body });

type TrapCard = NonNullable<Sec<'trapDrill'>['cards']>[number];
const trap = (promptLabel: string, promptSound: string, id: string, tip: string): TrapCard =>
  ({ promptLabel, promptSound, fr: fr(id), ipa: ipaOf(id), tip });

const TRAP_STEPS = (rule: string, cards: string): NonNullable<Sec<'trapDrill'>['steps']> => [
  { label: 'La règle', kind: 'rule', title: rule },
  { label: 'Six cartes', kind: 'cards', title: cards },
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

/** A deterministic hash, so the slot spreading below is stable run to run. */
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

const OPT_KEYS = ['opts', 'options', 'choices', 'answers'];

/** THE ANSWER-SLOT RULE (playbook 6.11, b1-answer-slots.test.ts), as b1.33
 *  does it. Missions render the authored order, so answers are spread BY
 *  PERMUTING each item's options WITH its correct index: the option set and
 *  the correct string are unchanged, only their order moves. Within each
 *  option-count class it picks a slot at most one above the least used,
 *  never a third identical answer in a row. No `why` in this lesson names a
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
 *  ACT 1 — DIRE CE QUE TU RESSENS
 *
 *  The method: se sentir + adjective, ressentir + noun, avoir hâte de,
 *  content pour. The failure is the English word: « je suis excité ».
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Un appel de Québec',
  frSub: 'La grande nouvelle de Maude',
  setting: { place: 'Ton appartement, le soir', city: 'Montréal', time: 'mardi, 20 h', ambience: 'le téléphone qui vibre, la neige à la fenêtre, une tasse de thé' },
  beats: [
    {
      kind: 'narration',
      text: "Mardi soir, à Montréal. Ton amie Maude t'appelle de Québec. Elle a passé une entrevue pour un poste ici, il y a deux semaines.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Maude',
      fr: "J'ai une grande nouvelle. J'ai eu le poste à Montréal.",
      en: 'I have big news. I got the job in Montréal.',
      respell: '[zhay ün grahⁿd noo-VEHL | zhay Ü luh POST a mohⁿ-ray-AL]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Je suis très excité de te voir à Montréal.',
      en: 'I am very excited to see you in Montréal (word for word).',
      respell: '[zhuh swee treh-zehk-see-TAY | duh tuh VWAR a mohⁿ-ray-AL]',
      stage: "Chaque mot est français. Mais excité vient de l'anglais : excited.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Maude',
      fr: 'Excité. Bon, calme-toi quand même.',
      en: 'Excited. Well, calm down all the same.',
      respell: '[ehk-see-TAY | BOHⁿ | kal-muh-TWA kahⁿ MEM]',
      stage: 'Elle rit. Pour elle, excité, c’est agité, presque trop.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase une Montréalaise dit-elle vraiment ?',
      size: 'lg',
      options: [
        { fr: 'Je suis très excité de te voir à Montréal.', respell: '[zhuh swee treh-zehk-see-TAY | duh tuh VWAR a mohⁿ-ray-AL]', en: 'I am very excited to see you in Montréal (word for word).', outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1006)), respell: rsOf(E(1006)), en: src(E(1006)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Maude sourit au téléphone. Elle te parle déjà du quartier où elle veut habiter.',
        breaks: 'Maude rit encore. Elle a compris, mais elle se moque un peu de toi toute la soirée.',
      },
    },
    {
      kind: 'break',
      heading: "Excité n'est pas excited",
      body: "En français, excité veut dire agité, nerveux, et parfois bien plus gênant. Pour une chose que tu attends avec joie : j'ai hâte. Pour la joie d'une amie : je suis content pour toi. EN: For good news, say j'ai hâte, not excité.",
      wrong: {
        fr: 'Je suis très excité de te voir à Montréal.',
        ipa: '/ʒə sɥi tʁɛ.zɛk.si.te də tə vwaʁ a mɔ̃.ʁe.al/',
        respell: '[zhuh swee treh-zehk-see-TAY | duh tuh VWAR a mohⁿ-ray-AL]',
        en: 'I am very excited to see you in Montréal (word for word).',
      },
      right: { fr: fr(E(1006)), ipa: ipaOf(E(1006)), respell: rsOf(E(1006)), en: src(E(1006)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Cette leçon te donne les mots des émotions à la bonne force, avec leur suite : la joie, la tristesse, la colère, la peur, la honte, la surprise. À la fin, tu écris à un ami pour raconter ta semaine et réagir à sa nouvelle.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxami', 'suite'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Dire ce que tu ressens, sans calque', s: 'Acte 1 : se sentir, ressentir, avoir hâte' },
    { t: 'Choisir le mot à la bonne force', s: 'Actes 2 à 7 : la joie, la tristesse, la colère, la peur, la honte, la surprise' },
    { t: 'Mettre la bonne suite, et raconter un changement', s: 'Actes 8 et 9 : de ou que, l’imparfait ou le passé composé' },
    { t: 'Réagir aux émotions des autres', s: 'Actes 10 et 11 : les bonnes formules, et ton message' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: Maude's message the next morning. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Maude',
  frSub: 'Lis, et cherche comment elle se sent',
  text: MAUDE_TEXT,
  glossary: [
    { word: 'annoncé', en: 'announced', note: 'Dire une nouvelle pour la première fois.' },
    { word: 'les larmes aux yeux', en: 'tears in her eyes', note: 'Elle allait presque pleurer.' },
    { word: 'bizarre', en: 'strange, odd', note: 'Pas normal, difficile à expliquer.' },
    { word: 'change de vie', en: 'change your life', note: 'Une nouvelle ville, un nouveau travail.' },
  ],
  questions: [
    { q: 'Que ressent Maude, surtout ?', a: 'De la joie, et un peu de peur : « Je ressens surtout de la joie, et un peu de peur. »' },
    { q: 'Comment sa mère a-t-elle réagi ?', a: 'Elle était contente pour elle, mais elle avait les larmes aux yeux.' },
    { q: 'Quel verbe va avec un adjectif, et lequel avec un nom ?', a: '« Je me sens un peu bizarre » : se sentir + adjectif. « Je ressens de la joie » : ressentir + nom.' },
    { q: 'Comment Maude dit-elle qu’elle attend avec joie ?', a: "« J'ai hâte de partir », « J'ai hâte de te voir ». Jamais « je suis excitée »." },
  ],
  audio: REC('rec-b1-35-maude'),
  say: REFRAME,
  terms: ['suite', 'fauxami'],
};

const A1_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-suite',
  title: 'Dire ce que tu ressens',
  frSub: 'Cinq blocs pour commencer',
  hint: 'Cinq cartes. Regarde le petit mot qui suit.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'suite', 'fauxami'],
  cards: [
    card(E(1000), 'Sentir, et toute sa famille', 'la famille',
      "Se sentir prend un adjectif : je me sens seul. Ressentir prend un nom : je ressens de la joie. Un sentiment, c'est le nom. EN: se sentir + adjective, ressentir + noun."),
    card(E(1001), 'Quand tu attends avec joie', 'la suite',
      "J'ai hâte de partir, j'ai hâte de te voir. C'est le mot pour excited. EN: to look forward to, with de."),
    card(E(1002), 'La joie de quelqu’un d’autre', 'la suite',
      "Content pour toi : ta bonne nouvelle me fait plaisir. EN: happy for someone, with pour."),
    card(E(1003), 'Quand ça va mieux', 'la suite',
      "Après une grippe, une mauvaise nuit, une dispute : je me sens mieux. EN: to feel better."),
    card(E(1010), 'Le faux ami', 'le faux ami',
      "Excité veut dire agité, et parfois gênant. Pour une bonne nouvelle, garde j'ai hâte. EN: avoid je suis excité for good news."),
  ],
};

/** TELL THEM APART: se sentir or ressentir; content de or content pour. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Se sentir, ressentir, avoir hâte',
  groups: [
    grp('Se sentir et ressentir', [
      it(E(1004), 'se sentir + adjectif'),
      it(E(1007), 'ressentir + un nom'),
      it(E(1012), 'se sentir mieux'),
      it(E(1011), 'la question entre amis'),
    ], chk(
      'Après « je me sens », tu mets...',
      ['un adjectif : perdu, mieux, seul', 'un nom : de la joie, de la peur'], 0,
      "Je me sens perdue ; je ressens de la joie. EN: se sentir + adjective, ressentir + noun.")),
    grp('La joie d’un autre', [
      it(E(1005), 'content pour toi'),
      it(E(1013), 'contente pour sa sœur'),
      it(E(1006), 'hâte de te voir'),
      it('fr.b1.recits-au-passe.172', 'content de te voir'),
    ], chk(
      '« Je suis content pour toi » veut dire...',
      ['ta bonne nouvelle me fait plaisir', 'je suis content à ta place, sans toi'], 0,
      "Pour : tu partages sa joie. EN: happy for you.")),
    ctl('Le bon mot', 'Ton ami part au Japon demain. Il dit :',
      ["J'ai hâte de partir.", 'Je suis excité de partir.', 'Je me sens hâte.'], 0,
      "J'ai hâte : une chose qu'on attend avec joie. EN: j'ai hâte."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite', 'fauxami'],
};

/** USE: where the blocks do a real job. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où tu vas les dire',
  cases: [
    uc('Une amie arrive bientôt dans ta ville', E(1006)),
    uc('Un collègue demande des nouvelles après ta grippe', E(1012)),
    uc('Tu racontes des retrouvailles à un ami', 'fr.b1.recits-au-passe.172'),
    uc('Ta voisine demande comment se passe ton installation', E(1004)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Excité', 'Pour une bonne nouvelle, « je suis excité » est...',
    ["un faux ami : dis plutôt j'ai hâte", 'le mot le plus naturel'], 0,
    "Excité veut dire agité. Pour une bonne nouvelle : j'ai hâte. EN: j'ai hâte."),
  ctl('Se sentir', 'Complète : « Je me sens ... »',
    ['de la joie', 'un peu perdu', 'un sentiment'], 1,
    "Se sentir prend un adjectif. EN: an adjective."),
  ctl('Pour', '« Je suis content pour toi » : qui a la bonne nouvelle ?',
    ['toi', 'moi'], 0,
    "Pour toi : c'est ta nouvelle, et elle me fait plaisir. EN: you do."),
], ['suite', 'fauxami']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Dire ce que tu ressens',
    opener: {
      line: "Une amie t'appelle avec une grande nouvelle : ici tu apprends à dire ce que tu ressens, sans traduire l'anglais. EN: A friend calls with big news: here you learn to say what you feel without translating from English.",
      imageRef: 'lessons/emotions/act01.jpg',
    },
    sections: [],
    milestone: "Tu dis je me sens, je ressens, j'ai hâte et je suis content pour toi, sans le faux ami excité. EN: You say how you feel, and look forward to things, without the false friend excité.",
    estScreens: 36, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_CARTES, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LA JOIE
 *
 *  The first dial: content < heureux < ravi < aux anges. The family (la
 *  joie, joyeux, se réjouir de) and the suites (faire plaisir à, content de).
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: six voicemails of good news. `hideLines`. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Des messages de bonnes nouvelles',
  frSub: 'Écoute, et dis qui est content, et à quelle force',
  lines: [
    ln(E(1020)), ln(E(1021)), ln(E(1022)), ln(E(1023)), ln(E(1024)),
    ln(E(1025)), ln(E(1026)), ln(E(1027)), ln(E(1030)), ln('fr.b1.pronoms-essentiels.1252'),
  ],
  questions: [
    { q: 'Premier message : de quoi la personne est-elle contente ?', opts: ['de son nouveau travail', 'de ses vacances'], correct: 0, why: "Content de son nouveau travail. EN: pleased with the new job." },
    { q: 'Qui est ravie, et pourquoi ?', opts: ['une femme, pour sa promotion', 'une voisine, pour son jardin'], correct: 0, why: "Ravie de sa promotion. EN: delighted with her promotion." },
    { q: 'Depuis quand les parents sont-ils au maximum de la joie ?', opts: ['depuis leur mariage', 'depuis la naissance du bébé', 'depuis leur déménagement'], correct: 1, why: "Aux anges depuis la naissance. EN: since the baby was born." },
    { q: 'Que faisaient les enfants dans le salon ?', opts: ['ils dormaient', 'ils sautaient de joie'], correct: 1, why: "Ils sautaient de joie. EN: jumping for joy." },
    { q: 'Quand la personne va-t-elle revoir son amie ?', opts: ['à Noël', 'demain', 'cet été'], correct: 2, why: "Cet été : je me réjouis de te revoir. EN: this summer." },
  ],
  audio: REC('rec-b1-35-messages-ecoute'),
  say: REFRAME,
  terms: ['force'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-force',
  title: 'La joie, du plus faible au plus fort',
  frSub: 'Une échelle, une famille, deux suites',
  hint: 'Six cartes. Regarde la force de chaque mot.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['force', 'famille', 'suite'],
  cards: [
    card(E(1015), 'Quatre degrés de joie', 'la force',
      "Content pour tous les jours, heureux pour une vie, ravi pour une belle nouvelle, aux anges pour un grand bonheur. EN: four strengths of joy."),
    card(E(1016), 'La joie et sa famille', 'la famille',
      "Le nom, l'adjectif, le verbe. Se réjouir de est un peu plus soutenu que être content de. EN: joy, joyful, to be glad about."),
    card(E(1017), 'Quand on te fait plaisir', 'la suite',
      "Pour remercier : ça me fait plaisir. Avec une suite : ça me fait plaisir de t'aider. EN: I am glad, that is nice."),
    card(E(1018), 'Rendre quelqu’un content', 'la suite',
      "Faire plaisir à quelqu'un : ton cadeau m'a fait plaisir. Jamais donner plaisir. EN: to make someone happy."),
    card(E(1019), 'Quand la joie se voit', 'la force',
      "Sauter de joie : une joie très forte, qu'on voit dans le corps. EN: to jump for joy."),
    card(E(1028), 'Au Québec', 'la variante',
      "Je capote : je perds la tête, de joie ou de peur. Familier, entre amis. EN: Québec slang, to freak out."),
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte l’échelle de la joie',
  groups: [
    grp('Du content aux anges', [
      it(E(1020), 'content de : un peu'),
      it(E(1021), 'heureux : un état'),
      it(E(1022), 'ravie : plus fort'),
      it(E(1023), 'aux anges : au maximum'),
    ], chk(
      'Ces quatre phrases vont...',
      ['du plus faible au plus fort', 'du plus fort au plus faible'], 0,
      "Content, heureux, ravi, aux anges. EN: from weak to strong.")),
    grp('Faire plaisir, se réjouir', [
      it(E(1024), 'faire plaisir à'),
      it(E(1025), 'ça me fait plaisir de'),
      it(E(1026), 'se réjouir de'),
      it('fr.b1.pronoms-essentiels.1252', 'ravis de'),
    ], chk(
      "« Ta visite m'a fait plaisir » : qui est content ?",
      ['moi', 'toi'], 0,
      "Ta visite me fait plaisir : c'est moi qui suis content. EN: I am."),
    ),
    grp('Tu connais déjà', [
      it('fr.b1.expressions-imagees.1508', `${Cap(COULEURS_REF)} : l'optimiste`),
      it('fr.b1.opinions-et-avis.1274', `${Cap(SUBJ_DECL_REF)} : ravi que + subjonctif`),
    ], chk(
      'Voir la vie en rose, c’est...',
      ['voir tout du bon côté', 'être en colère'], 0,
      "Tout paraît beau. EN: seeing everything on the bright side.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['force', 'suite'],
};

/** LOOKUP: six words of joy with their strength. */
const A2_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-tableau',
  layer: 'core',
  sheetId: 'sheet-force',
  title: 'Six façons de dire ta joie',
  cols: ['Le mot', 'La force', 'Pour...'],
  rows: [
    { cells: ['content', 'un peu', 'un bon repas'], say: fr(E(1020)),
      detail: { title: 'Content', body: "Le mot de tous les jours : content de ton repas, de ta journée. EN: pleased, everyday.", say: fr('fr.b1.recits-au-passe.172') } },
    { cells: ['heureux', 'un état', 'une vie, un lieu'], say: fr(E(1021)),
      detail: { title: 'Heureux', body: "Plus profond, plus long : heureux dans sa vie, heureux ici. EN: happy, a lasting state.", say: fr(E(1141)) } },
    { cells: ['ravi', 'fort', 'une belle nouvelle'], say: fr(E(1022)),
      detail: { title: 'Ravi', body: "Une joie forte et polie : ravi de vous rencontrer, ravi de la nouvelle. EN: delighted.", say: fr('fr.b1.pronoms-essentiels.1252') } },
    { cells: ['aux anges', 'très fort', 'un grand bonheur'], say: fr(E(1023)),
      detail: { title: 'Aux anges', body: "Au maximum : un bébé, un rêve qui arrive. Trop fort pour un sandwich. EN: over the moon.", say: fr(E(1029)) } },
    { cells: ['sauter de joie', 'très fort, visible', 'une victoire'], say: fr(E(1027)),
      detail: { title: 'Sauter de joie', body: "La joie se voit dans le corps. EN: jumping for joy.", say: fr(E(1030)) } },
    { cells: ['je capote', 'fort, familier', 'entre amis, au Québec'], say: fr(E(1028)),
      detail: { title: 'Capoter', body: "Au Québec : perdre la tête, de joie ou de peur. Entre amis seulement. EN: Québec slang.", say: fr(E(1028)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['force', 'variante'],
};

const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La bonne force pour ta joie',
  groups: [
    ctl('Le sandwich', 'Ton sandwich est bon. Tu dis :',
      ['Je suis content, il est bon.', 'Je suis aux anges, il est bon.'], 0,
      "Aux anges, c'est trop fort pour un sandwich. EN: match the strength."),
    ctl('Le bébé', 'Tes amis ont enfin un bébé, après dix ans. Ils sont...',
      ['un peu contents', 'aux anges'], 1,
      "Un grand bonheur : aux anges. EN: over the moon."),
    ctl('Le cadeau', "Ton ami t'offre un livre. Tu dis :",
      ['Ça me fait plaisir.', 'Je me fais plaisir.', 'Ça me donne plaisir.'], 0,
      "Ça me fait plaisir. EN: faire plaisir."),
    ctl('La visite', 'Ta tante vient samedi. Tu écris : « Je me réjouis ... ta visite. »',
      ['de', 'pour', 'à'], 0,
      "Se réjouir de. EN: de."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['force', 'suite'],
};

/** TRAP, stepped: excité, the wrong preposition, the wrong verb. */
const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges de la joie',
  rule: {
    title: 'La joie a sa force et sa suite',
    body: "Pour une bonne nouvelle, j'ai hâte, pas excité. Content de quelque chose, content pour quelqu'un. On fait plaisir, on ne le donne pas. EN: the right word, then the right little word after it.",
  },
  cards: [
    trap('excité', 'Je suis très excité de te voir à Montréal.', E(1006), "Excité veut dire agité. J'ai hâte : tu attends avec joie. EN: j'ai hâte."),
    trap('content avec', 'Je suis content avec mon nouveau travail.', E(1020), "Content de quelque chose. Avec, c'est l'anglais with. EN: content de."),
    trap('donner plaisir', "Ta visite m'a donné très plaisir.", E(1024), "On fait plaisir. EN: faire plaisir."),
    trap('sans de', 'Je me réjouis te revoir cet été.', E(1026), "Se réjouir de : garde le de. EN: se réjouir de."),
    trap('ravi pour', 'Elle est ravie pour sa promotion.', E(1022), "C'est sa joie à elle : ravie de. Pour, c'est la joie d'un autre. EN: ravi de."),
    trap('l’adjectif', 'Les enfants sautaient de joyeux dans le salon.', E(1027), "Sauter de joie : le nom. EN: de joie."),
  ],
  drill: [
    { promptSay: "J'... de te voir à Montréal.", opts: ['ai hâte', 'suis excité'], correct: 0 },
    { promptSay: 'Je suis content ... mon nouveau travail.', opts: ['avec', 'de'], correct: 1 },
    { promptSay: "Ta visite m'a ... très plaisir.", opts: ['fait', 'donné'], correct: 0 },
    { promptSay: 'Je me réjouis ... te revoir.', opts: ['à', 'de'], correct: 1 },
    { promptSay: 'Elle est ravie ... sa promotion.', opts: ['pour', 'de'], correct: 1 },
    { promptSay: 'Les enfants sautaient de ... .', opts: ['joyeux', 'joie'], correct: 1 },
    { promptSay: 'Un bébé après dix ans : ils sont ... .', opts: ['un peu contents', 'aux anges', 'agacés'], correct: 1 },
    { promptSay: "Ça me fait plaisir ... t'aider.", opts: ['de', 'à', 'pour'], correct: 0 },
  ],
  steps: TRAP_STEPS('La joie a sa force et sa suite', 'Ce que la phrase fausse raconte'),
  audio: REC('rec-b1-35-piege-joie'),
  say: REFRAME,
  terms: ['fauxami', 'suite'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La force', 'Du plus faible au plus fort :',
    ['content, ravi, aux anges', 'aux anges, content, ravi'], 0,
    "Content, puis ravi, puis aux anges. EN: weak to strong."),
  ctl('La suite', 'Content ... ton travail.',
    ['avec', 'de'], 1,
    "Content de. EN: de."),
  ctl('Plaisir', 'Ton amie t’aide à déménager. Tu dis :',
    ['Ça me fait vraiment plaisir.', 'Tu me donnes plaisir.'], 0,
    "Faire plaisir. EN: ça me fait plaisir."),
], ['force', 'suite']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La joie',
    opener: {
      line: "Une promotion, un bébé, une visite : ici tu dis ta joie à la bonne force, de content à aux anges. EN: A promotion, a baby, a visit: here you say your joy at the right strength.",
      imageRef: 'lessons/emotions/act02.jpg',
    },
    sections: [],
    milestone: "Tu montes l'échelle de la joie et tu dis faire plaisir, se réjouir de, content de, sans calque. EN: You climb the scale of joy and use its constructions.",
    estScreens: 42, restPoints: ['a2-construire', 'a2-choisir'],
  },
  sections: [A2_ECOUTE, A2_CARTES, A2_CONSTRUIRE, A2_TABLEAU, A2_CHOISIR, A2_PIEGE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LA TRISTESSE ET LA DÉCEPTION
 *
 *  triste and décevoir families; avoir de la peine (Québec nuance) and
 *  faire de la peine; décevoir is not to deceive.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le journal de Samuel',
  frSub: 'Lis, et suis sa tristesse jour après jour',
  text: JOURNAL_TEXT,
  glossary: [
    { word: 'refusée', en: 'turned down', note: 'La réponse est non.' },
    { word: 'dossier', en: 'application file', note: 'Les papiers qu’on envoie pour une demande.' },
    { word: 'la fin du monde', en: 'the end of the world', note: 'Une catastrophe. Ici : ce n’est pas si grave.' },
    { word: 'lourde', en: 'heavy', note: 'Difficile à porter. Ici, la tristesse pèse moins.' },
  ],
  questions: [
    { q: 'Pourquoi Samuel est-il déçu ?', a: "Sa demande à l'université est refusée, et il est surtout déçu de lui-même." },
    { q: 'Que veut dire « j’avais le moral à zéro » ?', a: "Il était très triste, au plus bas." },
    { q: 'Qu’est-ce qui lui a fait de la peine ?', a: "La remarque d'Inès : « Tu fais la tête depuis deux jours. »" },
    { q: 'Sa grand-mère « avait eu beaucoup de peine » : elle était...', a: "Triste pour lui. À Montréal, avoir de la peine veut dire être triste." },
  ],
  audio: REC('rec-b1-35-journal'),
  say: REFRAME,
  terms: ['famille', 'variante'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-familles',
  title: 'Triste, déçu, et la peine',
  frSub: 'Deux familles, deux suites',
  hint: 'Six cartes. La deuxième est un faux ami.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'variante', 'fauxami'],
  cards: [
    card(E(1031), 'Triste et sa famille', 'la famille',
      "Triste, la tristesse, et attristé, un peu soutenu : attristé par la nouvelle. EN: sad, sadness, saddened."),
    card(E(1032), 'Décevoir, pas tromper', 'la famille',
      "Déçu : toi. Décevant : ce qui déçoit. Décevoir, c'est to disappoint, jamais to deceive. EN: a whole family, and a false friend."),
    card(E(1033), 'Avoir de la peine', 'la variante',
      "Très courant au Québec pour dire être triste. Avec à + infinitif, c'est avoir du mal : j'ai de la peine à dormir. EN: to be sad; with à, to struggle."),
    card(E(1034), 'Blesser sans le vouloir', 'la suite',
      "Faire de la peine à quelqu'un : ta remarque m'a fait de la peine. EN: to hurt someone's feelings."),
    card(E(1035), 'Au plus bas', 'la force',
      "Avoir le moral à zéro : très triste, sans énergie. Familier. Le contraire : avoir le moral. EN: to feel really low."),
    card(E(1036), 'Déçu de, déçu par', 'la suite',
      "Déçu de mes résultats, déçu par ce film. Les deux se disent. EN: disappointed with, by."),
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'La tristesse et la déception',
  groups: [
    grp('La tristesse', [
      it(E(1037), 'triste depuis'),
      it(E(1042), 'avoir de la peine : triste'),
      it(E(1043), 'le moral à zéro'),
      it('fr.b1.recits-au-passe.173', "triste, à l'imparfait"),
    ], chk(
      'Le grand-père « a eu beaucoup de peine ». Il était...',
      ['très triste', 'très occupé'], 0,
      "Avoir de la peine : être triste. EN: very sad.")),
    grp('La déception', [
      it(E(1038), 'déçu : moi'),
      it(E(1039), 'décevant : le film'),
      it(E(1040), 'la déception : le nom'),
      it(E(1044), 'décevoir : le verbe'),
    ], chk(
      'Déçu, décevant, la déception, décevoir :',
      ['une seule famille', 'quatre mots sans lien'], 0,
      "Une racine : qui ressent, ce qui déçoit, le nom, le verbe. EN: one family.")),
    ctl('La peine', "« Ta remarque m'a fait de la peine » veut dire...",
      ["ta remarque m'a blessé", "ta remarque m'a fait rire", "ta remarque m'a aidé"], 0,
      "Faire de la peine : blesser. EN: it hurt my feelings."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'variante'],
};

/** What lessons 27 and 28 already gave, beside this act's own blocks. */
const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Tu connais déjà, et tu ajoutes',
  examples: [
    ex('fr.b1.expressions-imagees.1158', `${Cap(CORPS_REF)} : le cœur gros, c'est triste.`),
    ex('fr.b1.expressions-imagees.1263', `${Cap(ANIMAUX_REF)} : une tristesse sans raison, souvent l'hiver.`),
    ex('fr.b1.expressions-imagees.1142', `${Cap(CORPS_REF)} : bouder, ne plus parler.`),
    ex(E(1041), 'faire de la peine : blesser sans le vouloir.'),
    ex(E(1045), 'avec à et un infinitif, la peine devient une difficulté.'),
    ex(E(1046), 'décevoir, jamais tromper.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['variante', 'fauxami'],
};

const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon mot pour ta déception',
  groups: [
    ctl('Le concert', 'Le concert est annulé. Tu dis :',
      ['Quelle déception.', 'Quelle décevante.'], 0,
      "Le nom : quelle déception. EN: what a disappointment."),
    ctl('Le film', 'Le film était nul. Il était...',
      ['déçu', 'décevant'], 1,
      "Le film déçoit : décevant. Toi, tu es déçu. EN: disappointing."),
    ctl('Montréal', "Ta grand-mère à Montréal dit : « J'ai eu de la peine. » Elle veut dire...",
      ["qu'elle était triste", "qu'elle a eu du mal à faire une chose"], 0,
      "Au Québec, avoir de la peine : être triste. EN: she was sad."),
    ctl('Lyon', "À Lyon, ton ami dit : « J'ai de la peine à dormir. » Il veut dire...",
      ["qu'il est triste de dormir", "qu'il dort mal", "qu'il dort trop"], 1,
      "Avec à + infinitif : avoir du mal. EN: he struggles to sleep."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['variante', 'famille'],
};

/** TRAP: the false friend, the rare word, the wrong member, the wrong verb. */
const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de déception',
  errors: [
    { wrong: 'Le vendeur m’a déçu avec un faux prix.', right: 'Le vendeur m’a trompé avec un faux prix.',
      why: "Normal : décevoir ressemble à to deceive. Mais décevoir, c'est to disappoint. Pour mentir : tromper. EN: deceive is tromper." },
    { wrong: 'Je suis désappointé de mes résultats.', right: fr(E(1038)),
      why: "Désappointé existe, mais il est rare et vieux. Tout le monde dit déçu. EN: say déçu." },
    { wrong: 'Ce film était vraiment déçu.', right: fr(E(1039)),
      why: "Normal : l'anglais a disappointed et disappointing. Le film déçoit : il est décevant. EN: the film is décevant." },
    { wrong: "Ta remarque m'a donné de la peine.", right: fr(E(1041)),
      why: "Le bloc, c'est faire de la peine à quelqu'un. EN: faire de la peine." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxami', 'famille'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Décevoir', 'To deceive, en français :',
    ['décevoir', 'tromper'], 1,
    "Tromper. Décevoir, c'est to disappoint. EN: tromper."),
  ctl('Le film', 'Un film qui déçoit est...',
    ['décevant', 'déçu', 'déception'], 0,
    "Ce qui déçoit : décevant. EN: disappointing."),
  ctl('La peine', 'Au Québec, « il a de la peine » veut dire...',
    ['il est triste', 'il est puni'], 0,
    "Avoir de la peine : être triste. EN: he is sad."),
], ['famille', 'variante']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La tristesse et la déception',
    opener: {
      line: "Une lettre de refus, une semaine au plus bas : ici tu dis ta tristesse et ta déception avec les mots justes. EN: A rejection letter, a week at rock bottom: here you name sadness and disappointment precisely.",
      imageRef: 'lessons/emotions/act03.jpg',
    },
    sections: [],
    milestone: "Tu passes de déçu à décevant et à la déception, et tu sais ce que veut dire avoir de la peine au Québec. EN: You move through the décevoir family and read avoir de la peine the Québec way.",
    estScreens: 38, restPoints: ['a3-construire', 'a3-choisir'],
  },
  sections: [A3_LECTURE, A3_CARTES, A3_CONSTRUIRE, A3_EXEMPLES, A3_CHOISIR, A3_ERREURS, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA COLÈRE
 *
 *  The second dial: agacé < énervé < en colère < furieux. La colère is a
 *  noun (en colère contre); fâché contre / avec; être tanné (Québec).
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a noisy night, three degrees of anger. Story bubbles avoid « ? » and « ! ». */
const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Minuit, rue Rachel',
  frSub: 'Une soirée, trois degrés de colère',
  setting: "Un appartement à Montréal. Il est minuit. La musique du voisin traverse le mur. Ta colocataire, Léa, ne dort pas non plus.",
  bubbles: [
    { from: 'narrator', fr: 'Minuit. La basse du voisin fait trembler les verres.', en: "Midnight. The neighbour's bass makes the glasses shake." },
    { from: 'coach', fr: fr(E(1053)), en: src(E(1053)).en, warn: 'agacée : un peu' },
    { from: 'user', fr: 'Moi, ça commence à vraiment m’énerver.', en: 'It is starting to really get on my nerves.' },
    { from: 'coach', fr: fr(E(1057)), en: src(E(1057)).en, warn: "s'énerver : ne t'énerve pas" },
    { from: 'narrator', fr: 'Une heure du matin. La musique continue, plus fort.', en: 'One in the morning. The music goes on, louder.' },
    { from: 'coach', fr: 'Là, je suis en colère. Je vais lui parler, poliment.', en: 'Now I am angry. I am going to talk to him, politely.', warn: 'en colère : plus fort' },
    { from: 'coach', fr: 'Au Québec, on dirait : je suis tannée de ce bruit.', en: 'In Québec you would say: I am fed up with this noise.', warn: 'tanné : Québec, familier' },
  ],
  closing: { fr: 'Agacée, énervée, en colère : la même soirée, trois degrés.', en: 'Annoyed, irritated, angry: the same night, three degrees.' },
  audio: REC('rec-b1-35-coloc'),
  say: REFRAME,
  terms: ['force', 'variante'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-force',
  title: 'La colère, du plus faible au plus fort',
  frSub: 'Une échelle, deux familles, une variante',
  hint: 'Six cartes. Regarde la suite de chaque mot.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['force', 'suite', 'variante'],
  cards: [
    card(E(1047), 'Quatre degrés de colère', 'la force',
      "Agacé : un petit bruit. Énervé : ça dure. En colère : ça explose. Furieux : au maximum. EN: four strengths of anger."),
    card(E(1048), 'La colère et sa suite', 'la suite',
      "La colère est un nom : on est en colère, on se met en colère, contre quelqu'un. EN: anger, with en and contre."),
    card(E(1049), 'Énerver et sa famille', 'la famille',
      "Ça m'énerve ; je m'énerve ; il est énervant. Énervé, c'est toi. EN: to annoy, to get worked up, annoying."),
    card(E(1050), 'Ce qui t’énerve', 'la suite',
      "Ça m'énerve, quand le bus est en retard. Ça m'énerve que + subjonctif. EN: it annoys me."),
    card(E(1051), 'Fâché contre, fâché avec', 'la suite',
      "Fâché contre Marc : en colère. Fâché avec Marc : vous ne vous parlez plus. EN: cross with, not speaking to."),
    card(E(1052), 'Au Québec', 'la variante',
      "Être tanné : en avoir assez. Familier, au Québec. En France : en avoir marre. EN: fed up, Québec."),
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte l’échelle de la colère',
  groups: [
    grp('Du plus faible au plus fort', [
      it(E(1053), 'agacée : un peu'),
      it('fr.b1.pronoms-essentiels.1506', "ce qui m'énerve"),
      it(E(1055), 'en colère contre'),
      it(E(1059), 'furieux : au maximum'),
    ], chk(
      'Quelle phrase dit la colère la plus forte ?',
      ['la voiture et le mot furieux', 'le bruit et le mot agacée'], 0,
      "Furieux est tout en haut. EN: furious."),
    ),
    grp('La colère et ses verbes', [
      it(E(1054), 'se mettre en colère contre'),
      it(E(1057), "s'énerver"),
      it(E(1062), 'fâché contre'),
      it(E(1061), 'fâchées : on ne se parle plus'),
    ], chk(
      '« Mes deux sœurs sont fâchées » : elles...',
      ['ne se parlent plus', 'sont furieuses contre moi'], 0,
      "Fâchées, entre elles : la relation est coupée. EN: not on speaking terms.")),
    ctl('Tanné', "Au Québec, « je suis tanné de l'hiver » veut dire...",
      ["j'en ai assez de l'hiver", "j'ai la peau bronzée", "j'adore l'hiver"], 0,
      "Tanné : fatigué d'une chose qui dure. EN: fed up."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['force', 'suite'],
};

const A4_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a4-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  itemIds: dicteeFor(4),
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite'],
};

const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La bonne force pour ta colère',
  groups: [
    ctl('Le bus', 'Le bus a cinq minutes de retard. Tu es...',
      ['un peu agacé', 'furieux'], 0,
      "Cinq minutes : agacé suffit. Furieux, c'est trop. EN: match the strength."),
    ctl('La voiture', "Quelqu'un a rayé ta voiture neuve. Tu es...",
      ['un peu agacé', 'furieux'], 1,
      "Une voiture neuve abîmée : furieux. EN: furious."),
    ctl('Contre qui', 'Ton frère a pris ton vélo sans demander. Tu es en colère...',
      ['à lui', 'contre lui', 'avec lui'], 1,
      "En colère contre. EN: contre."),
    grp('Tu connais déjà', [
      it('fr.b1.expressions-imagees.1030', `${Cap(CORPS_REF)} : ce qui t'énerve`),
      it('fr.b1.expressions-imagees.1402', `${Cap(COULEURS_REF)} : la colère qui monte d'un coup`),
      it('fr.b1.expressions-imagees.1429', `${Cap(COULEURS_REF)} : une très grande colère`),
    ], chk(
      'Une colère noire, c’est...',
      ['une colère très forte', 'une petite colère'], 0,
      "Noire : au plus fort. EN: a towering rage.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['force', 'suite'],
};

/** TRAP, stepped: the noun as an adjective, the wrong preposition, fou. */
const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges de la colère',
  rule: {
    title: 'En colère contre, fâché contre',
    body: "La colère est un nom : en colère. La personne vient après contre. Mad se dit furieux, pas fou. Et s'énerver garde son pronom. EN: en colère contre, furieux for mad.",
  },
  cards: [
    trap('colère sans en', 'Elle est colère contre moi.', E(1055), "La colère est un nom : en colère. EN: en colère."),
    trap('à au lieu de contre', "Il s'est mis en colère à son fils.", E(1054), "En colère contre quelqu'un. EN: contre."),
    trap('fou pour mad', 'Quand il a vu sa voiture, il était fou.', E(1059), "Fou veut dire crazy. Mad, en colère : furieux. EN: furieux."),
    trap('énervé pour la chose', 'Mon voisin est vraiment énervé.', E(1058), "Il t'énerve : il est énervant. Énervé, c'est ce qu'il ressent, lui. EN: énervant."),
    trap('fâché à', 'Il est fâché à son patron.', E(1062), "Fâché contre. EN: contre."),
    trap('sans pronom', "N'énerve pas, on va trouver une solution.", E(1057), "S'énerver : ne t'énerve pas. EN: keep the pronoun."),
  ],
  drill: [
    { promptSay: 'Elle est ... colère contre moi.', opts: ['en', 'la', 'de'], correct: 0 },
    { promptSay: "Il s'est mis en colère ... son fils.", opts: ['à', 'contre'], correct: 1 },
    { promptSay: 'Quand il a vu sa voiture, il était ... .', opts: ['fou', 'furieux'], correct: 1 },
    { promptSay: 'Mon voisin est vraiment ... .', opts: ['énervant', 'énervé'], correct: 0 },
    { promptSay: 'Il est fâché ... son patron.', opts: ['à', 'contre'], correct: 1 },
    { promptSay: 'Ne ... pas, on va trouver une solution.', opts: ['énerve', "t'énerve"], correct: 1 },
    { promptSay: 'Mes deux sœurs sont fâchées ... Noël.', opts: ['depuis', 'pendant'], correct: 0 },
    { promptSay: "Au Québec : je suis ... de l'hiver.", opts: ['tanné', 'fâché avec', 'colère'], correct: 0 },
  ],
  steps: TRAP_STEPS('En colère contre, fâché contre', 'Ce que la phrase fausse raconte'),
  audio: REC('rec-b1-35-piege-colere'),
  say: REFRAME,
  terms: ['suite', 'fauxami'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La force', 'Du plus faible au plus fort :',
    ['furieux, agacé, énervé', 'agacé, énervé, furieux'], 1,
    "Agacé, énervé, en colère, furieux. EN: weak to strong."),
  ctl('La suite', 'En colère ... quelqu’un.',
    ['contre', 'à'], 0,
    "Contre. EN: contre."),
  ctl('Avec', '« Je suis fâché avec Paul » veut dire...',
    ['nous ne nous parlons plus', 'je suis content avec Paul', 'je suis furieux ce matin'], 0,
    "Fâché avec : la relation est coupée. EN: not on speaking terms."),
], ['force', 'suite']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La colère',
    opener: {
      line: "Une musique à minuit, un bus en retard, une voiture rayée : ici tu dis ta colère à la bonne force, et contre qui. EN: Midnight music, a late bus, a scratched car: here you pitch your anger and say who it is against.",
      imageRef: 'lessons/emotions/act04.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre agacé, énervé, en colère et furieux, et tu dis en colère contre, fâché avec, ça m'énerve. EN: You pitch anger on its scale and use its constructions.",
    estScreens: 40, restPoints: ['a4-construire', 'a4-choisir'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_DICTEE, A4_CHOISIR, A4_PIEGE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LA PEUR, L'INQUIÉTUDE, LE STRESS
 *
 *  The third dial: inquiet < angoissé < paniqué. s'inquiéter POUR a person,
 *  DE a thing; the stress family; faire peur à.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le stress au travail',
  frSub: 'Lis, et cherche les mots de la peur',
  text: STRESS_TEXT,
  glossary: [
    { word: 'salariés', en: 'employees', note: 'Les personnes payées par une entreprise.' },
    { word: 'délais', en: 'deadlines', note: 'Le temps qu’on a pour finir un travail.' },
    { word: 'gestionnaire', en: 'manager (Québec)', note: 'Au Québec, la personne qui dirige une équipe.' },
    { word: 'faiblesse', en: 'weakness', note: 'Le contraire de la force.' },
    { word: 'date de remise', en: 'due date', note: 'Le jour où il faut rendre le travail.' },
  ],
  questions: [
    { q: 'Le stress est-il toujours mauvais, selon l’article ?', a: 'Non : un peu de stress avant une présentation est normal, et peut aider.' },
    { q: 'Quand le stress devient-il un problème ?', a: "Quand l'inquiétude ne part plus : on devient angoissé, on dort mal, on s'énerve." },
    { q: 'Quels sont les trois conseils ?', a: 'En parler, nommer la cause, faire de vraies pauses.' },
    { q: 'Trouve deux mots de la famille de s’inquiéter.', a: "« l'inquiétude » (le nom) et « m'inquiète » (le verbe)." },
  ],
  audio: REC('rec-b1-35-stress'),
  say: REFRAME,
  terms: ['force', 'famille'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-force',
  title: 'La peur, du plus faible au plus fort',
  frSub: 'Une échelle, deux familles, deux suites',
  hint: 'Six cartes. Regarde pour et de.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['force', 'famille', 'suite'],
  cards: [
    card(E(1064), 'Trois degrés de peur', 'la force',
      "Inquiet : tu penses au problème. Angoissé : ça serre. Paniqué : tu ne penses plus. EN: worried, anxious, panicking."),
    card(E(1065), 'S’inquiéter et sa famille', 'la famille',
      "Je m'inquiète ; l'inquiétude ; une nouvelle inquiétante. Inquiet, c'est toi. EN: to worry, worry, worrying."),
    card(E(1066), 'Pour une personne', 'la suite',
      "On s'inquiète pour quelqu'un, et de quelque chose. EN: pour a person, de a thing."),
    card(E(1067), 'Ce qui t’inquiète', 'la suite',
      "Ça m'inquiète. Avec une suite : ça m'inquiète qu'il ne réponde pas, au subjonctif. EN: it worries me."),
    card(E(1068), 'Le stress', 'la famille',
      "Stressé : toi. Stressant : ce qui te stresse. EN: stressed, stressful."),
    card(E(1069), 'Faire peur', 'la suite',
      "Les orages me font peur ; le chien fait peur aux enfants. EN: to frighten someone."),
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'L’inquiétude, le stress, la peur',
  groups: [
    grp('Inquiet, angoissé, paniqué', [
      it(E(1070), "s'inquiéter pour"),
      it(E(1072), 'angoissée'),
      it(E(1073), 'paniquer'),
      it('fr.b1.pronoms-essentiels.1167', "ce qui m'inquiète"),
    ], chk(
      'Qui a le sentiment le plus fort ?',
      ["la personne qui a paniqué", "la personne qui s'inquiète pour sa mère"], 0,
      "Paniquer est tout en haut de l'échelle. EN: panicking."),
    ),
    grp('Le stress et la peur', [
      it(E(1074), 'stressant : le travail'),
      it(E(1075), 'stressé : la personne'),
      it(E(1076), 'faire peur'),
      it(E(1079), "l'inquiétude"),
    ], chk(
      '« Mon travail est stressant » : qui stresse qui ?',
      ['le travail me stresse', 'je stresse mon travail'], 0,
      "Stressant : ce qui cause le stress. EN: the job causes it.")),
    grp('Tu connais déjà', [
      it('fr.b1.expressions-imagees.1162', `${Cap(CORPS_REF)} : s'inquiéter beaucoup`),
      it('fr.b1.expressions-imagees.1401', `${Cap(COULEURS_REF)} : une très grande peur`),
      it('fr.b1.emotions.054', `${Cap(ANIMAUX_REF)} : la peur douce avant un rendez-vous`),
    ], chk(
      'Se faire du mauvais sang, c’est...',
      ["s'inquiéter beaucoup", 'être en colère'], 0,
      "Une grande inquiétude. EN: to worry yourself sick.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['force', 'suite'],
};

/** By ear: colleagues before a presentation. `hideLines`. */
const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Avant la réunion',
  frSub: 'Écoute : qui a peur de quoi',
  lines: [
    ln(E(1070)), ln(E(1071)), ln(E(1072)), ln(E(1073)), ln(E(1074)),
    ln(E(1075)), ln(E(1076)), ln(E(1077)), ln(E(1078)), ln(E(1079)),
  ],
  questions: [
    { q: 'Pour qui la première personne s’inquiète-t-elle ?', opts: ['pour son fils', 'pour sa mère'], correct: 1, why: "Pour sa mère, qui vit seule. EN: her mother." },
    { q: 'Qu’est-ce qui inquiète la deuxième personne ?', opts: ['un homme ne répond pas', 'un homme parle trop'], correct: 0, why: "Il ne répond pas. EN: he is not answering." },
    { q: 'Quand l’homme a-t-il paniqué ?', opts: ['quand il a raté son avion', 'quand il a perdu son passeport'], correct: 1, why: "Il a perdu son passeport. EN: when he lost his passport." },
    { q: 'Pourquoi une personne est-elle stressée ?', opts: ['à cause de ses voisins', 'à cause de la neige', 'à cause des délais'], correct: 2, why: "À cause des délais. EN: the deadlines." },
    { q: 'Qu’est-ce qui fait peur à quelqu’un ?', opts: ['les orages', 'les chiens'], correct: 0, why: "Les orages. EN: storms." },
  ],
  audio: REC('rec-b1-35-reunion-ecoute'),
  say: REFRAME,
  terms: ['force'],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Pour, de, et la bonne force',
  groups: [
    ctl('Ta mère', "Ta mère est à l'hôpital. Tu dis :",
      ["Je m'inquiète pour elle.", "Je m'inquiète d'elle."], 0,
      "Pour une personne. EN: pour."),
    ctl('La réunion', 'Une réunion difficile demain. Elle est...',
      ['stressée', 'stressante'], 1,
      "La réunion cause le stress : stressante. EN: stressful."),
    ctl('Le train', 'Ton train part dans dix minutes, et tu es presque à la gare. Tu dis :',
      ['Pas de panique.', 'Je suis paniqué.', 'Je me fais peur.'], 0,
      "Il reste du temps : pas de panique. EN: do not panic."),
    ctl('Le prix', "Tu hésites à acheter cette maison. Tu dis : « Ce qui m'...",
      ["inquiète, c'est le prix. »", "inquiet, c'est le prix. »"], 0,
      "Le verbe : ça m'inquiète. Inquiet est l'adjectif. EN: the verb."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite', 'force'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs d’inquiétude',
  errors: [
    { wrong: "Je m'inquiète de ma mère, elle vit seule.", right: fr(E(1070)),
      why: "Normal : l'anglais dit worried about pour tout. En français : pour une personne, de une chose. EN: pour a person." },
    { wrong: 'Mon travail est stressé en ce moment.', right: fr(E(1074)),
      why: "Normal : stressed et stressful se ressemblent. Le travail cause le stress : stressant. EN: stressant." },
    { wrong: 'Les orages me donnent peur.', right: fr(E(1076)),
      why: "Normal : en anglais, give me a fright. En français, ça fait peur. EN: faire peur." },
    { wrong: "Ça m'inquiète qu'il ne répond pas.", right: fr(E(1071)),
      why: `Normal : c'est un fait. Mais ça m'inquiète que est un sentiment : subjonctif, comme dans ${SUBJ_DECL_REF}. EN: subjunctive after a feeling.` },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite', 'fauxami'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Pour', 'Worried about you :',
    ["je m'inquiète pour toi", "je m'inquiète de toi"], 0,
    "Pour une personne. EN: pour."),
  ctl('La force', 'Le plus fort :',
    ['inquiet', 'paniqué', 'angoissé'], 1,
    "Paniqué, en haut de l'échelle. EN: panicking."),
  ctl('Stressant', 'Un travail qui stresse est...',
    ['stressé', 'stressant'], 1,
    "Ce qui cause : stressant. EN: stressful."),
], ['force', 'suite']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'La peur, l’inquiétude, le stress',
    opener: {
      line: "Une réunion demain, une mère qui vit seule, un passeport perdu : ici tu dis ta peur à la bonne force, et pour qui. EN: A meeting tomorrow, a mother living alone, a lost passport: here you pitch fear and say who it is for.",
      imageRef: 'lessons/emotions/act05.jpg',
    },
    sections: [],
    milestone: "Tu dis inquiet, angoissé ou paniqué selon la force, et tu t'inquiètes pour une personne, de une chose. EN: You pitch fear and worry, with pour and de.",
    estScreens: 42, restPoints: ['a5-construire', 'a5-ecoute'],
  },
  sections: [A5_LECTURE, A5_CARTES, A5_CONSTRUIRE, A5_ECOUTE, A5_CHOISIR, A5_ERREURS, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LA HONTE, LA FIERTÉ, LA GÊNE
 *
 *  honte de, fier de, gêné / gênant. The act that names the -é (who feels)
 *  against -ant (what causes it) rule already met in acts 3 to 5.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Le pot de départ de Martine',
  frSub: 'Une soirée, trois sentiments',
  setting: "Un bureau à Genève, un vendredi soir. Martine prend sa retraite. Ton collègue Paul fait un petit discours pour elle.",
  bubbles: [
    { from: 'narrator', fr: 'Paul lève son verre, puis il oublie le prénom de Martine. Silence.', en: "Paul raises his glass, then forgets Martine's first name. Silence." },
    { from: 'coach', fr: fr(E(1092)), en: src(E(1092)).en, warn: 'gênant : la situation' },
    { from: 'user', fr: fr(E(1094)), en: src(E(1094)).en, warn: 'honte pour lui' },
    { from: 'narrator', fr: 'Martine rit, puis elle prend le micro.', en: 'Martine laughs, then takes the microphone.' },
    { from: 'coach', fr: 'Merci à tous. Je suis fière de ce que nous avons fait ensemble.', en: 'Thank you all. I am proud of what we have done together.', warn: 'fière de' },
    { from: 'user', fr: fr(E(1093)), en: src(E(1093)).en, warn: "mal à l'aise" },
  ],
  closing: { fr: 'Gênant, honte pour lui, fière de : une soirée, trois sentiments.', en: 'Awkward, embarrassed for him, proud of: one evening, three feelings.' },
  audio: REC('rec-b1-35-pot'),
  say: REFRAME,
  terms: ['ressent', 'suite'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-familles',
  title: 'La honte, la fierté, la gêne',
  frSub: 'Trois familles et leurs suites',
  hint: 'Cinq cartes. Regarde de et pour.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'suite', 'ressent'],
  cards: [
    card(E(1081), 'La honte', 'la famille',
      "Avoir honte de : de ton retard, de ne pas savoir. Familier, « la honte » veut dire quelle situation gênante. EN: shame, ashamed of."),
    card(E(1082), 'La fierté', 'la famille',
      "Fier de toi, fier d'avoir fini. Jamais fier pour. EN: pride, proud of."),
    card(E(1083), 'La gêne', 'la famille',
      "Gêné : la personne. Gênant : la situation. La gêne : le nom. EN: embarrassed, awkward, embarrassment."),
    card(E(1084), 'Mal à l’aise', 'la suite',
      "Se sentir mal à l'aise : pas confortable avec les gens. Confortable, c'est pour un fauteuil. EN: to feel uncomfortable."),
    card(E(1085), 'Honte pour quelqu’un', 'la suite',
      "Avoir honte pour lui : tu ressens sa gêne à sa place. Honte de lui : tu le juges. EN: embarrassed for someone."),
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Honte de, fier de',
  groups: [
    grp('La honte', [
      it(E(1086), 'honte de + nom'),
      it(E(1087), 'honte de + infinitif'),
      it(E(1094), 'honte pour lui'),
      it('fr.a1.emotions.037', 'le bloc de base'),
    ], chk(
      'Après avoir honte, on met...',
      ['de', 'à'], 0,
      "Avoir honte de. EN: de.")),
    grp('La fierté', [
      it(E(1088), 'fière de toi'),
      it(E(1089), "fière d'avoir fini"),
      it(E(1090), 'avec fierté'),
      it('fr.b1.pronoms-essentiels.1244', 'fier de ce travail'),
    ], chk(
      'Fier ... toi.',
      ['pour', 'de'], 1,
      "Fier de. EN: de.")),
    grp('Tu connais déjà', [
      it('fr.b1.expressions-imagees.1446', `${Cap(COULEURS_REF)} : la honte se voit`),
      it('fr.b1.projets-et-futur.355', 'fier de toi, au futur'),
    ], chk(
      'Rouge de honte : la honte est...',
      ['visible sur le visage', 'cachée'], 0,
      "Elle se voit. EN: visible.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite', 'famille'],
};

/** LOOKUP: the -é / -ant rule, in four points. */
const A6_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a6-focus',
  layer: 'core',
  sheetId: 'sheet-familles',
  title: 'Qui ressent, ce qui fait ressentir',
  points: [
    "La personne qui ressent : gêné, énervé, stressé, déçu. EN: the person who feels.",
    "Ce qui fait ressentir : gênant, énervant, stressant, décevant. EN: what causes the feeling, -ant.",
    "Un voisin bruyant est énervant ; toi, tu es énervé. EN: he annoys, you are annoyed.",
    "Embarrassed, embarrassing : gêné, gênant. Deux fins, comme en anglais. EN: two endings in both languages.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ressent', 'famille'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Gêné ou gênant, de ou pour',
  groups: [
    ctl('Le silence', 'Personne ne parle pendant une minute. Ce silence est...',
      ['gêné', 'gênant'], 1,
      "La situation : gênant. EN: awkward."),
    ctl('Le service', "Tu demandes de l'argent à ton frère. Tu es...",
      ['gêné', 'gênant'], 0,
      "La personne : gêné. EN: embarrassed."),
    ctl('Le diplôme', 'Ta fille a eu son diplôme. Tu es fier...',
      ["d'elle", 'pour elle', 'à elle'], 0,
      "Fier de. EN: de."),
    ctl('Le discours', 'Ton collègue rate son discours. Toi, tu as honte...',
      ['de lui', 'pour lui'], 1,
      "Pour lui : tu ressens sa gêne à sa place. De lui : tu le juges. EN: for him."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ressent', 'suite'],
};

/** TRAP, stepped: embarrassant, the wrong ending, fier pour, confortable. */
const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges de la gêne',
  rule: {
    title: 'Gêné, gênant, fier de',
    body: "La personne est gênée ; la situation est gênante. On est fier de, on a honte de. Et confortable, c'est pour un fauteuil. EN: -é for the person, -ant for the cause, de after fier and honte.",
  },
  cards: [
    trap('embarrassant', 'Je suis un peu embarrassant de te demander ça.', E(1091), "Embarrassant, c'est la situation. Toi, tu es gêné. EN: gêné."),
    trap('gêné pour la chose', 'Ce silence était vraiment gêné.', E(1092), "Le silence cause la gêne : gênant. EN: gênant."),
    trap('fier pour', 'Je suis fière pour toi.', E(1088), "Content pour toi existe ; fier pour toi, non. Fier de toi. EN: fier de."),
    trap('honte sans de', "J'ai honte mon retard.", E(1086), "Avoir honte de. EN: de."),
    trap('pour et l’infinitif', 'Il avait honte pour ne pas savoir répondre.', E(1087), "Honte de ne pas savoir. EN: de + infinitive."),
    trap('confortable', 'Je ne me sens pas confortable dans les grandes fêtes.', E(1093), "Confortable, c'est pour un objet. Pour toi : mal à l'aise. EN: mal à l'aise."),
  ],
  drill: [
    { promptSay: 'Je suis un peu ... de te demander ça.', opts: ['gêné', 'gênant'], correct: 0 },
    { promptSay: 'Ce silence était vraiment ... .', opts: ['gêné', 'gênant'], correct: 1 },
    { promptSay: 'Je suis fière ... toi.', opts: ['pour', 'de'], correct: 1 },
    { promptSay: "J'ai honte ... mon retard.", opts: ['de', 'pour', 'à'], correct: 0 },
    { promptSay: 'Il avait honte ... ne pas savoir répondre.', opts: ['pour', 'de'], correct: 1 },
    { promptSay: 'Je me sens ... dans les grandes fêtes.', opts: ["mal à l'aise", 'pas confortable'], correct: 0 },
    { promptSay: 'Ton voisin met la musique à minuit. Il est ... .', opts: ['énervé', 'énervant'], correct: 1 },
    { promptSay: 'Tes parents parlent de toi avec ... .', opts: ['fierté', 'fier', 'fière'], correct: 0 },
  ],
  steps: TRAP_STEPS('Gêné, gênant, fier de', 'Ce que la phrase fausse raconte'),
  audio: REC('rec-b1-35-piege-gene'),
  say: REFRAME,
  terms: ['ressent', 'fauxami'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La personne', 'Tu dois parler devant cent personnes. Tu es...',
    ['gênant', 'gêné'], 1,
    "La personne : gêné. EN: embarrassed."),
  ctl('La fierté', 'Fier ... ton travail.',
    ['de', 'pour'], 0,
    "Fier de. EN: de."),
  ctl('La règle', 'Énervant, gênant, stressant : ces mots disent...',
    ['ce qui fait ressentir', 'la personne qui ressent'], 0,
    "La fin -ant : la cause. EN: the cause."),
], ['ressent', 'suite']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'La honte, la fierté, la gêne',
    opener: {
      line: "Un discours raté, un diplôme, un silence : ici tu dis la honte, la fierté et la gêne, et tu sépares qui ressent de ce qui fait ressentir. EN: A botched speech, a diploma, a silence: here you name shame, pride and embarrassment.",
      imageRef: 'lessons/emotions/act06.jpg',
    },
    sections: [],
    milestone: "Tu dis honte de, fier de, gêné ou gênant sans hésiter, et la fin du mot te dit qui ressent. EN: You use honte de and fier de, and tell -é from -ant.",
    estScreens: 40, restPoints: ['a6-construire', 'a6-choisir'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_FOCUS, A6_CHOISIR, A6_PIEGE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LA SURPRISE ET LE SOULAGEMENT
 *
 *  surprendre, étonner, soulager, rassurer: four families, each with its
 *  -é and its -ant. The calque: relevé for relieved.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Une frayeur à Dakar',
  frSub: 'Lis, et suis la peur, le soulagement, la surprise',
  text: FORUM_TEXT,
  glossary: [
    { word: 'frayeur', en: 'fright, scare', note: 'Une peur forte et soudaine.' },
    { word: 'objets trouvés', en: 'lost property', note: 'Le bureau où on rapporte les objets perdus.' },
    { word: 'siège', en: 'seat', note: 'La place où on est assis dans l’avion.' },
    { word: 'agent', en: 'officer, agent', note: 'Une personne qui travaille à l’aéroport.' },
  ],
  questions: [
    { q: 'Qu’a ressenti Claire quand son sac était vide ?', a: "Elle a paniqué : le déclic de la peur." },
    { q: 'Qui l’a rassurée, et comment ?', a: "Une employée très calme : « Ne vous inquiétez pas, madame, ça arrive tous les jours. »" },
    { q: 'Comment dit-elle son soulagement ?', a: "« Quel soulagement ! » et « J'étais tellement soulagée que je l'ai remercié trois fois. »" },
    { q: 'Quelle a été la vraie surprise ?', a: "L'agent était le cousin de son amie Awa : « Je n'en reviens toujours pas. »" },
  ],
  audio: REC('rec-b1-35-forum'),
  say: REFRAME,
  terms: ['famille', 'force'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-familles',
  title: 'La surprise et le soulagement',
  frSub: 'Quatre familles, et ouf',
  hint: 'Six cartes. Chaque famille a son -é et son -ant.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'ressent', 'fauxami'],
  cards: [
    card(E(1098), 'Surprendre et sa famille', 'la famille',
      "Surpris : toi. Surprenant : ce qui te surprend. La surprise : le nom. EN: surprised, surprising, surprise."),
    card(E(1099), 'Étonner, un peu plus fort', 'la famille',
      "Étonné : très surpris. Ça m'étonne qu'il soit parti, au subjonctif. EN: astonished, astonishing."),
    card(E(1100), 'Soulager et sa famille', 'la famille',
      "Soulagé : le poids part. Le soulagement : le nom. Jamais relevé. EN: relieved, relief."),
    card(E(1101), 'Rassurer', 'la famille',
      "Le médecin te rassure : tu es rassuré, sa voix est rassurante. EN: to reassure, reassured, reassuring."),
    card(E(1102), 'Quand la peur part', 'la suite',
      "Quel soulagement : ton vol est arrivé, tes clés sont là. EN: what a relief."),
    card(E(1103), 'Quand tu n’y crois pas', 'la force',
      "Je n'en reviens pas : une surprise très forte. Familier. EN: I cannot get over it."),
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Surpris, soulagé, rassuré',
  groups: [
    grp('La surprise', [
      it(E(1104), 'surprise par'),
      it(E(1105), "ça m'étonne que"),
      it(E(1106), "je n'en reviens pas"),
      it(E(1112), 'étonnant : la chose'),
      it('fr.b1.recits-au-passe.1237', 'surpris, au passé composé'),
    ], chk(
      "« Ça m'étonne qu'il soit déjà parti » : après ça m'étonne que...",
      ['le subjonctif', "l'indicatif"], 0,
      "Un sentiment, puis que : subjonctif. EN: subjunctive.")),
    grp('Le soulagement', [
      it(E(1107), 'quel soulagement'),
      it(E(1108), "soulagé d'avoir"),
      it(E(1109), 'rassurer'),
      it(E(1110), 'rassurante : la voix'),
      it(E(1111), 'ouf'),
    ], chk(
      'Dans ces phrases, la peur...',
      ['part', 'commence'], 0,
      "Soulagé, rassuré, ouf : la peur s'en va. EN: the fear leaves.")),
    ctl('Relieved', 'I am relieved, en français :',
      ['Je suis relevé.', 'Je suis soulagé.', 'Je suis relâché.'], 1,
      "Soulagé. EN: soulagé."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'ressent'],
};

const A7_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a7-flash',
  layer: 'core',
  title: 'Huit cartes de surprise',
  cards: [
    { front: 'surprised', back: 'surpris', say: fr(E(1104)) },
    { front: 'surprising', back: 'surprenant', say: 'Sa réponse était vraiment surprenante.' },
    { front: 'astonished', back: 'étonné', say: fr(E(1105)) },
    { front: 'relieved', back: 'soulagé', say: fr(E(1108)) },
    { front: 'what a relief', back: 'quel soulagement', say: fr(E(1107)) },
    { front: 'reassuring', back: 'rassurant', say: fr(E(1110)) },
    { front: 'I cannot get over it', back: "je n'en reviens pas", say: fr(E(1106)) },
    { front: 'phew', back: 'ouf', say: fr(E(1111)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Surprise ou soulagement',
  groups: [
    ctl('Les clés', 'Tu retrouves tes clés dans ta poche. Tu dis :',
      ['Quel soulagement.', 'Quelle surprise.'], 0,
      "La peur part : le soulagement. EN: relief."),
    ctl('Le médecin', "Le médecin dit : « Ce n'est rien. » Tu es...",
      ['rassurant', 'rassuré'], 1,
      "La personne : rassuré. EN: reassured."),
    ctl('Le timide', 'Ton ami timide chante devant cent personnes. C’est...',
      ['étonné', 'étonnant', 'étonnement'], 1,
      "La chose qui étonne : étonnant. EN: surprising."),
    ctl('Le départ', "Il est déjà parti. Tu dis : « Ça m'étonne qu'il ... déjà parti. »",
      ['soit', 'est'], 0,
      "Un sentiment, puis que : subjonctif. EN: soit."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ressent', 'suite'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de surprise',
  errors: [
    { wrong: "Je suis relevé d'avoir retrouvé mes clés.", right: fr(E(1108)),
      why: "Normal : relieved ressemble à relevé. Mais relevé veut dire remonté, ou noté. Le mot est soulagé. EN: soulagé." },
    { wrong: 'Sa voix était très rassurée.', right: fr(E(1110)),
      why: "Normal : en anglais, reassured et reassuring se ressemblent aussi. La voix rassure : rassurante. EN: rassurante." },
    { wrong: "Ça m'étonne qu'il est déjà parti.", right: fr(E(1105)),
      why: `Normal : il est parti, c'est un fait. Mais après un sentiment et que, le subjonctif, comme dans ${SUBJ_DECL_REF}. EN: subjunctive.` },
    { wrong: "C'est étonné, il ne fait pas froid.", right: fr(E(1112)),
      why: "Ce qui étonne prend -ant : étonnant. Étonné, c'est toi. EN: étonnant." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxami', 'ressent'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Relieved', 'Relieved :',
    ['soulagé', 'relevé'], 0,
    "Soulagé. EN: soulagé."),
  ctl('Le soulagement', 'Ton avion atterrit enfin, après la tempête. Tu dis :',
    ['Quelle surprise.', 'Quel soulagement.'], 1,
    "La peur part : quel soulagement. EN: what a relief."),
  ctl('Étonnant', 'Une nouvelle qui étonne est...',
    ['étonnée', 'étonnante'], 1,
    "La chose : -ant. EN: surprising."),
], ['famille', 'ressent']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'La surprise et le soulagement',
    opener: {
      line: "Un passeport perdu, puis retrouvé : ici tu dis la surprise et le soulagement, et tu laisses relevé à l'anglais. EN: A passport lost, then found: here you name surprise and relief.",
      imageRef: 'lessons/emotions/act07.jpg',
    },
    sections: [],
    milestone: "Tu dis surpris, étonnant, soulagé, rassurant et quel soulagement, sans le calque relevé. EN: You name surprise and relief, without the calque relevé.",
    estScreens: 40, restPoints: ['a7-construire', 'a7-choisir'],
  },
  sections: [A7_LECTURE, A7_CARTES, A7_CONSTRUIRE, A7_FLASH, A7_CHOISIR, A7_ERREURS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LA SUITE : DE OU QUE
 *
 *  The grammar feelings pull in. Same subject: de + infinitive. Two
 *  subjects: que + subjunctive (lessons 15 and 16 in B1). Pour or de; ça me
 *  fait plaisir, ça m'énerve, ça me rend.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: ten short lines, the question is WHO does the action. */
const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui fait quoi',
  frSub: 'Écoute : la même personne, ou une autre',
  lines: [
    ln(E(1114)), ln(E(1115)), ln(E(1116)), ln(E(1117)), ln(E(1118)),
    ln(E(1119)), ln(E(1120)), ln(E(1121)), ln(E(1122)), ln(E(1123)),
  ],
  questions: [
    { q: 'Première phrase : qui part en vacances ?', opts: ['une autre personne', 'la personne qui parle'], correct: 1, why: "De partir : la même personne. EN: the speaker." },
    { q: 'Deuxième phrase : qui part ?', opts: ['la personne qui parle', 'une autre personne, tu'], correct: 1, why: "Que tu partes : deux personnes. EN: someone else." },
    { q: 'Qu’est-ce qui énerve quelqu’un ?', opts: ['un homme toujours en retard', 'le bruit des voisins', 'la pluie'], correct: 0, why: "Qu'il arrive toujours en retard. EN: someone always late." },
    { q: 'Qui a attendu ?', opts: ['les personnes qui parlent', 'les personnes à qui on parle'], correct: 1, why: "Que vous ayez attendu : vous. EN: the people addressed." },
    { q: 'Pourquoi un homme est-il furieux ?', opts: ['on ne le prévient jamais', 'il a raté son train'], correct: 0, why: "Qu'on ne le prévienne jamais. EN: nobody warns him." },
  ],
  audio: REC('rec-b1-35-suite-ecoute'),
  say: REFRAME,
  terms: ['suite'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-suite',
  title: 'Ce qui vient après le sentiment',
  frSub: 'De, que, pour, et ça me',
  hint: 'Six cartes. Compte les personnes.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite'],
  cards: [
    card(E(1129), 'De ou que', 'la suite',
      `Une personne : de et l'infinitif. Deux personnes : que et le subjonctif, vu dans ${SUBJ_INF_REF}. EN: count the subjects.`),
    card(E(1130), 'Pour, de, que', 'la suite',
      "Pour toi : ta nouvelle me fait plaisir. De toi : ce que tu fais me plaît. Que tu sois là : ta présence. EN: three meanings."),
    card(E(1116), 'Ça me fait plaisir que', 'la suite',
      "Ça me fait plaisir de venir ; ça me fait plaisir que tu sois venu. EN: same rule after ça me fait plaisir."),
    card(E(1117), 'Ça m’énerve que', 'la suite',
      "Ça m'énerve d'attendre ; ça m'énerve qu'il arrive en retard. EN: same rule after ça m'énerve."),
    card(E(1126), 'Ça me touche', 'la suite',
      "Un geste gentil, un message : ça me touche. EN: it moves me."),
    card(E(1127), 'Ça me rend...', 'la suite',
      "Rendre + adjectif : ça me rend triste, nerveux, heureux. Pas ça me fait triste. EN: it makes me + adjective."),
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Une personne ou deux',
  groups: [
    grp('Une personne : de', [
      it(E(1114), 'heureuse de partir'),
      it(E(1118), "ça m'énerve d'attendre"),
      it(E(1121), 'triste de quitter'),
      it('fr.b1.opinions-et-avis.1440', `${Cap(SUBJ_INF_REF)} : content de`),
      it('fr.b1.opinions-et-avis.1442', 'peur de rater'),
    ], chk(
      'Dans ces phrases, qui fait l’action ?',
      ['la même personne qui ressent', 'une autre personne'], 0,
      "Une seule personne : de et l'infinitif. EN: one subject, de."),
    ),
    grp('Deux personnes : que', [
      it(E(1115), 'heureuse que tu partes'),
      it(E(1117), "ça m'énerve qu'il arrive"),
      it(E(1119), 'peur que tu sois'),
      it('fr.b1.opinions-et-avis.1441', 'content que tu travailles'),
      it('fr.b1.opinions-et-avis.1443', 'peur que son fils rate'),
    ], chk(
      'Après « content que », le verbe est...',
      ['au subjonctif', "à l'indicatif", "à l'infinitif"], 0,
      "Un sentiment et que : subjonctif. EN: subjunctive.")),
    ctl('Content que', '« Je suis content que tu sois là » : combien de personnes ?',
      ['une', 'deux'], 1,
      "Je et tu : deux personnes, donc que. EN: two subjects."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite'],
};

/** LOOKUP: six suites, each a cut of sheet-suite. */
const A8_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-tableau',
  layer: 'core',
  sheetId: 'sheet-suite',
  title: 'Six suites à connaître',
  cols: ['Le mot', 'La suite', 'Quand'],
  rows: [
    { cells: ['content, triste, fier', 'de + infinitif', 'une seule personne'], say: fr(E(1114)),
      detail: { title: 'De + infinitif', body: "Celui qui ressent fait aussi l'action : content de partir. EN: one subject.", say: fr(E(1121)) } },
    { cells: ['content, triste, fier', 'que + subjonctif', 'deux personnes'], say: fr(E(1115)),
      detail: { title: 'Que + subjonctif', body: "Une autre personne fait l'action : content que tu partes. EN: two subjects.", say: fr('fr.b1.opinions-et-avis.1003') } },
    { cells: ['content', 'pour quelqu’un', 'la joie d’un autre'], say: fr(E(1124)),
      detail: { title: 'Content pour', body: "Sa bonne nouvelle te fait plaisir. EN: happy for someone.", say: fr(E(1013)) } },
    { cells: ['en colère, fâché', 'contre quelqu’un', 'la personne visée'], say: fr(E(1055)),
      detail: { title: 'Contre', body: "La colère va contre une personne. EN: angry with.", say: fr(E(1062)) } },
    { cells: ["s'inquiéter", 'pour, de', 'une personne, une chose'], say: fr(E(1070)),
      detail: { title: 'Pour ou de', body: "Pour une personne, de une chose. EN: pour a person, de a thing.", say: fr(E(1066)) } },
    { cells: ['ça me rend', '+ adjectif', 'la cause'], say: fr(E(1128)),
      detail: { title: 'Rendre', body: "Ça me rend triste, pas ça me fait triste. EN: it makes me + adjective.", say: fr(E(1127)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La bonne suite, ici',
  groups: [
    ctl('Les vacances', 'Tu pars demain. Tu dis :',
      ['Je suis heureux de partir.', 'Je suis heureux que je parte.'], 0,
      "Une seule personne : de. EN: de partir."),
    ctl('La visite', 'Ton ami est venu. Tu dis : « Ça me fait plaisir que tu ... venu. »',
      ['es', 'sois'], 1,
      "Ça me fait plaisir que : subjonctif. EN: sois."),
    ctl('La chanson', 'Cette chanson ... triste.',
      ['me fait', 'me rend', 'me met'], 1,
      "Rendre + adjectif. EN: me rend."),
    ctl('Ton amie', "Ton amie a trouvé un logement. Tu es content...",
      ['pour elle', 'contre elle'], 0,
      "Sa joie : content pour elle. EN: pour."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges de la suite',
  rule: {
    title: 'Compte les personnes',
    body: "Une personne : de et l'infinitif. Deux personnes : que et le subjonctif. Et ça me rend + adjectif. EN: count the subjects before you choose de or que.",
  },
  cards: [
    trap('que + indicatif', 'Je suis heureuse que tu pars en vacances.', E(1115), "Un sentiment et que : subjonctif. EN: tu partes."),
    trap('que, une seule personne', 'Je suis heureuse que je parte en vacances.', E(1114), "Une seule personne : de partir. EN: de + infinitive."),
    trap('faire + adjectif', 'Cette chanson me fait triste.', E(1128), "Rendre + adjectif : me rend triste. EN: rendre."),
    trap('de oublié', "Ça m'énerve attendre.", E(1118), "Ça m'énerve d'attendre. EN: keep de."),
    trap('fier + indicatif', 'Je suis fier que tu fais ce métier.', E(1123), "Fier que : subjonctif. EN: tu fasses."),
    trap('peur + indicatif', "J'ai peur que tu es déçu.", E(1119), "Avoir peur que : subjonctif. EN: tu sois."),
  ],
  drill: [
    { promptSay: 'Je suis heureuse que tu ... en vacances.', opts: ['pars', 'partes'], correct: 1 },
    { promptSay: 'Je suis heureuse ... partir en vacances.', opts: ['que je', 'de'], correct: 1 },
    { promptSay: 'Cette chanson me ... triste.', opts: ['rend', 'fait'], correct: 0 },
    { promptSay: "Ça m'énerve ... attendre.", opts: ["d'", 'que', 'à'], correct: 0 },
    { promptSay: 'Je suis fier que tu ... ce métier.', opts: ['fais', 'fasses'], correct: 1 },
    { promptSay: "J'ai peur que tu ... déçu.", opts: ['sois', 'es'], correct: 0 },
    { promptSay: 'Je suis content ... toi : tu as eu le poste.', opts: ['pour', 'contre', 'que'], correct: 0 },
    { promptSay: 'Nous sommes désolés que vous ... attendu.', opts: ['avez', 'ayez'], correct: 1 },
  ],
  steps: TRAP_STEPS('Compte les personnes', 'Ce que la phrase fausse raconte'),
  audio: REC('rec-b1-35-piege-suite'),
  say: REFRAME,
  terms: ['suite'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('De ou que', 'Tu pars, et tu es triste. Tu dis :',
    ['Je suis triste de partir.', 'Je suis triste que je parte.'], 0,
    "Une personne : de. EN: de."),
  ctl('Le mode', 'Content que tu ... là.',
    ['es', 'sois', 'être'], 1,
    "Subjonctif. EN: sois."),
  ctl('Rendre', 'It makes me nervous :',
    ['ça me rend nerveux', 'ça me fait nerveux'], 0,
    "Rendre + adjectif. EN: rendre."),
], ['suite']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'La suite : de ou que',
    opener: {
      line: "Content de partir, content que tu partes : ici tu comptes les personnes et tu choisis la bonne suite. EN: Happy to leave, happy that you are leaving: here you count the people and choose the construction.",
      imageRef: 'lessons/emotions/act08.jpg',
    },
    sections: [],
    milestone: "Tu mets de ou que après un sentiment sans hésiter, et tu dis ça me rend, ça me touche, content pour toi. EN: You choose de or que after a feeling, and use its other suites.",
    estScreens: 42, restPoints: ['a8-construire', 'a8-choisir'],
  },
  sections: [A8_ECOUTE, A8_CARTES, A8_CONSTRUIRE, A8_TABLEAU, A8_CHOISIR, A8_PIEGE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — QUAND UN SENTIMENT CHANGE
 *
 *  The imparfait gives the state that lasts; the passé composé the moment a
 *  feeling starts or ends (lessons 3 and 4 in B1). Peu à peu, tout à coup.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Mon premier mois à Sherbrooke',
  frSub: 'Lis, et suis ses sentiments dans le temps',
  text: BLOGUE_TEXT,
  glossary: [
    { word: 'à la fois', en: 'at the same time', note: 'Deux choses en même temps.' },
    { word: 'permis de travail', en: 'work permit', note: 'Le papier qui te donne le droit de travailler.' },
    { word: 'en ordre', en: 'in order', note: 'Rien ne manque.' },
    { word: 'partie de hockey', en: 'hockey game', note: 'Au Québec, une partie, c’est un match.' },
    { word: 'blagues', en: 'jokes', note: 'Des petites histoires pour rire.' },
  ],
  questions: [
    { q: 'Quels verbes donnent un état qui dure ?', a: "j'étais content et inquiet, je me sentais seul, j'appelais, j'avais le cœur gros : l'imparfait." },
    { q: 'Quel est le premier déclic ?', a: "« tout à coup, j'ai eu peur » : son permis n'était plus dans le dossier." },
    { q: 'Comment la peur est-elle partie ?', a: "« j'ai été soulagé » : l'employeur a dit que tout était en ordre." },
    { q: 'Comment Koffi se sent-il aujourd’hui ?', a: "Il adore parler, il fait des blagues, et il est fier du chemin qu'il a fait." },
  ],
  audio: REC('rec-b1-35-blogue'),
  say: REFRAME,
  terms: ['declic'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-temps',
  title: 'L’état et le déclic',
  frSub: 'Raconter un sentiment qui change',
  hint: 'Six cartes. La dernière est la règle.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['declic'],
  cards: [
    card(E(1134), 'L’état qui dure', 'le déclic',
      `L'imparfait : le sentiment est déjà là, sans début ni fin, comme dans ${PC_IMP_REF}. EN: the imparfait, a lasting state.`),
    card(E(1135), 'Le déclic', 'le déclic',
      "Le passé composé : le moment où le sentiment arrive. Tout à coup, j'ai eu peur. EN: the passé composé, the moment it starts."),
    card(E(1131), 'Le temps qui passe', 'le déclic',
      "Au début, l'état ; puis, le changement ; peu à peu, lentement. EN: at first, then, little by little."),
    card(E(1132), 'D’un seul coup', 'le déclic',
      "Tout à coup, d'un coup : ils annoncent un déclic, donc le passé composé. EN: suddenly, with the passé composé."),
    card(E(1133), 'Finir par', 'le déclic',
      "Finir par + infinitif : le sentiment change à la fin. J'ai fini par me calmer. EN: to end up."),
    card(E(1146), 'La règle', 'le déclic',
      "L'imparfait dit l'état ; le passé composé dit le déclic. EN: the state, then the moment."),
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'L’état ou le déclic',
  groups: [
    grp("L'état qui dure", [
      it(E(1134), 'au début : inquiet'),
      it(E(1141), 'heureuse, sans limite'),
      it(E(1145), 'sous le choc'),
      it('fr.b1.recits-au-passe.1222', "j'avais peur du chien"),
    ], chk(
      'Ces verbes à l’imparfait disent...',
      ['un état qui dure', 'un moment précis'], 0,
      "Le sentiment est là, sans début ni fin. EN: a lasting state.")),
    grp('Le déclic', [
      it(E(1135), "tout à coup, j'ai eu peur"),
      it(E(1136), "j'ai été soulagé"),
      it(E(1144), "je me suis énervé, puis excusé"),
      it('fr.b1.recits-au-passe.1223', 'quand le chien a aboyé'),
    ], chk(
      'Ces verbes au passé composé disent...',
      ['un état sans fin', 'le moment où le sentiment arrive'], 1,
      "Le déclic. EN: the moment it starts.")),
    ctl('Le temps', 'Pour un changement lent, tu dis...',
      ['tout à coup', 'peu à peu'], 1,
      "Peu à peu : lentement. EN: little by little."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['declic'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Une peur, deux temps',
  examples: [
    ex('fr.b1.recits-au-passe.1220', `${Cap(PAIRES_REF)} : l'état, la peur qui dure.`),
    ex('fr.b1.recits-au-passe.1221', `${Cap(PAIRES_REF)} : le déclic, la peur qui arrive.`),
    ex(E(1141), 'un état, sans limite : le décor.'),
    ex(E(1142), 'pendant dix ans : une période fermée, passé composé.'),
    ex(E(1140), 'un match, une émotion finie.'),
    ex(E(1143), 'depuis : le changement dure encore, au présent.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['declic'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Raconte le bon moment',
  groups: [
    ctl('Le chien', "Le chien a aboyé d'un coup. Tu racontes :",
      ["J'avais peur.", "J'ai eu peur."], 1,
      "Un déclic : passé composé. EN: j'ai eu peur."),
    ctl("L'enfance", 'Toute ton enfance, le noir te faisait peur. Tu racontes :',
      ["J'avais peur du noir.", "J'ai eu peur du noir."], 0,
      "Un état qui dure : imparfait. EN: j'avais peur."),
    ctl('Le message', 'Tu lis son message, et ta peur part. Tu dis :',
      ["J'étais soulagé depuis longtemps.", "J'ai été soulagé.", 'Je serai soulagé.'], 1,
      "Le moment où le sentiment change : passé composé. EN: j'ai été soulagé."),
    ctl('Lentement', 'Ta colère est partie lentement. Tu dis :',
      ['Tout à coup, je me suis calmé.', 'Peu à peu, je me suis calmé.'], 1,
      "Lentement : peu à peu. EN: little by little."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['declic'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de temps',
  errors: [
    { wrong: "Tout à coup, j'avais peur.", right: fr(E(1135)),
      why: "Normal : en anglais, I was scared va partout. Mais tout à coup annonce un déclic : passé composé. EN: j'ai eu peur." },
    { wrong: "Au début, j'ai été inquiet, et ça a duré des semaines.", right: "Au début, j'étais inquiet, et ça a duré des semaines.",
      why: "Au début, et ça dure : un état, donc l'imparfait. EN: a lasting state." },
    { wrong: 'Elle était heureuse à Québec pendant dix ans.', right: fr(E(1142)),
      why: `Pendant dix ans ferme la période : passé composé, comme dans ${PC_IMP_REF}. EN: a closed period.` },
    { wrong: "Depuis ce jour-là, j'ai eu moins peur.", right: fr(E(1143)),
      why: "Depuis : le changement dure encore aujourd'hui, donc le présent. EN: depuis + present." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['declic'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le déclic', 'Tout à coup, j’... peur.',
    ['avais', 'ai eu'], 1,
    "Tout à coup : passé composé. EN: ai eu."),
  ctl("L'état", 'Au début, j’... inquiet.',
    ['étais', 'ai été', 'suis'], 0,
    "Au début, un état : imparfait. EN: étais."),
  ctl('Depuis', "Depuis ce jour-là, j'... moins peur.",
    ['ai', 'ai eu'], 0,
    "Depuis : présent. EN: ai."),
], ['declic']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Quand un sentiment change',
    opener: {
      line: "Un premier mois dans une nouvelle ville, de l'inquiétude à la fierté : ici tu racontes comment un sentiment a changé. EN: A first month in a new town, from worry to pride: here you tell how a feeling changed.",
      imageRef: 'lessons/emotions/act09.jpg',
    },
    sections: [],
    milestone: "Tu mets l'état à l'imparfait et le déclic au passé composé, avec au début, tout à coup, peu à peu. EN: You put the state in the imparfait and the trigger in the passé composé.",
    estScreens: 38, restPoints: ['a9-construire', 'a9-choisir'],
  },
  sections: [A9_LECTURE, A9_CARTES, A9_CONSTRUIRE, A9_EXEMPLES, A9_CHOISIR, A9_ERREURS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — RÉAGIR AUX ÉMOTIONS DES AUTRES
 *
 *  The empathy formulas by register (familier / courant / soutenu, lesson
 *  25 in B1); listen before advising; the right formula for the right news.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courrier de Sophie',
  frSub: 'Lis la lettre, puis la réponse',
  text: COURRIER_TEXT,
  glossary: [
    { word: 'perdu son emploi', en: 'lost her job', note: 'Elle n’a plus de travail.' },
    { word: 'une bêtise', en: 'something stupid', note: 'Une chose maladroite, sans le vouloir.' },
    { word: 'discours', en: 'speech', note: 'Ici : beaucoup de mots, trop.' },
    { word: 'concret', en: 'concrete, practical', note: 'Une chose réelle, qu’on peut faire.' },
  ],
  questions: [
    { q: 'De quoi Léa a-t-elle peur ?', a: 'De dire une bêtise à son amie, qui a perdu son emploi.' },
    { q: 'Quelle phrase simple Sophie conseille-t-elle ?', a: "« Je suis là si tu as besoin. »" },
    { q: 'Pourquoi éviter « Ce n’est pas grave » ?', a: "Parce que pour l'amie, c'est grave. Mieux : « Ça doit être dur. »" },
    { q: 'Dans quel ordre faut-il faire les choses ?', a: "Écouter d'abord, conseiller après, puis proposer quelque chose de concret." },
  ],
  audio: REC('rec-b1-35-courrier'),
  say: REFRAME,
  terms: ['empathie', 'registre'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-reagir',
  title: 'Les mots pour réagir',
  frSub: 'Six formules, trois registres',
  hint: 'Six cartes. Regarde pour qui chaque formule marche.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['empathie', 'registre'],
  cards: [
    card(E(1148), 'Je te comprends', "l'empathie",
      "Plus naturel que je comprends ton sentiment. EN: I get it."),
    card(E(1149), 'Pour une mauvaise nouvelle', "l'empathie",
      "Ça doit être dur : tu montres que tu imagines. Mieux que ce n'est pas grave. EN: that must be hard."),
    card(E(1150), 'De tout cœur', "l'empathie",
      "Je suis de tout cœur avec toi : je partage ta peine. Avec vous, c'est soutenu. EN: my heart goes out to you."),
    card(E(1151), 'Je suis là', "l'empathie",
      "Une offre simple : je suis là si tu as besoin. EN: I am here if you need me."),
    card(E(1156), 'Bon courage', 'le registre',
      "Pour une chose difficile : un examen, un déménagement, une maladie. EN: hang in there."),
    card(E(1154), 'Pour un deuil', 'le registre',
      "Toutes mes condoléances : soutenu, pour une mort seulement. EN: my deepest sympathy."),
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Une nouvelle, une réaction',
  groups: [
    grp('Une mauvaise nouvelle', [
      it(E(1157), 'je te comprends'),
      it(E(1158), 'ça doit être dur'),
      it(E(1160), 'je suis là'),
      it(E(1164), 'désolée d’apprendre'),
      it('fr.b1.recits-au-passe.1209', 'tu as dû avoir peur'),
    ], chk(
      'Ces phrases montrent d’abord...',
      ['que tu comprends ce qu’il ressent', 'que tu as une solution'], 0,
      "On écoute d'abord. EN: you listen first.")),
    grp('Rassurer', [
      it(E(1161), "t'inquiète : familier"),
      it('fr.b1.negation-et-restriction.1179', 'ne t’inquiète pas : courant'),
      it('fr.b1.projets-et-futur.386', 'ça ira'),
      it(E(1165), 'prends soin de toi'),
    ], chk(
      "« T'inquiète » est...",
      ['familier : entre amis', 'soutenu : pour une lettre'], 0,
      "T'inquiète, sans ne pas : entre amis. EN: casual."),
    ),
    grp('Une bonne nouvelle', [
      it(E(1162), 'félicitations'),
      it(E(1124), 'content pour toi'),
      it(E(1176), 'tu dois être fière'),
    ], chk(
      'Pour une bonne nouvelle, tu dis...',
      ['je suis content pour toi', 'je suis désolé pour toi'], 0,
      "Content pour toi. EN: happy for you.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['empathie', 'registre'],
};

/** LOOKUP: the same reaction in two registers. */
const A10_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a10-tableau',
  layer: 'core',
  sheetId: 'sheet-reagir',
  title: 'Six réactions, deux registres',
  cols: ['Situation', 'Entre amis', 'Avec respect'],
  rows: [
    { cells: ['une inquiétude', "t'inquiète", 'ne vous inquiétez pas'], say: fr(E(1161)),
      detail: { title: 'Rassurer', body: "Entre amis, t'inquiète. Avec quelqu'un que tu vouvoies : ne vous inquiétez pas. EN: casual, then polite.", say: fr('fr.b1.negation-et-restriction.1179') } },
    { cells: ['une mauvaise nouvelle', 'ça doit être dur', 'ça doit être difficile pour vous'], say: fr(E(1158)),
      detail: { title: 'Imaginer', body: "Tu montres que tu imagines ce qu'il vit. EN: that must be hard.", say: fr(E(1149)) } },
    { cells: ['un deuil', "je t'embrasse fort", 'toutes mes condoléances'], say: fr(E(1164)),
      detail: { title: 'Un deuil', body: "Pour une mort. Condoléances, c'est soutenu ; entre amis, dis ta peine plus simplement. EN: for a death.", say: fr(E(1159)) } },
    { cells: ['une bonne nouvelle', 'trop contente pour toi', 'félicitations'], say: fr(E(1162)),
      detail: { title: 'Féliciter', body: "Félicitations va partout. Trop content, c'est familier. EN: congratulations.", say: fr(E(1124)) } },
    { cells: ['une épreuve', 'courage', 'je suis de tout cœur avec vous'], say: fr(E(1163)),
      detail: { title: 'Soutenir', body: "Bon courage pour une chose difficile ; de tout cœur pour partager. EN: support.", say: fr(E(1159)) } },
    { cells: ['une offre d’aide', 'je suis là', "n'hésitez pas à m'appeler"], say: fr(E(1160)),
      detail: { title: 'Offrir', body: "Une offre simple et sincère. EN: I am here.", say: fr(E(1151)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'empathie'],
};

const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La bonne réaction',
  groups: [
    ctl('Le deuil', 'Le père de ta collègue est mort. Tu lui écris :',
      ['Toutes mes condoléances.', 'Félicitations.', "Ça va aller, t'inquiète."], 0,
      "Pour un deuil : condoléances. EN: condolences."),
    ctl('Le chômage', 'Ton ami a perdu son emploi. Tu dis d’abord :',
      ["Ce n'est pas grave.", 'Ça doit être dur.'], 1,
      "Pour lui, c'est grave : montre que tu comprends. EN: that must be hard."),
    ctl("L'examen", 'Ta sœur passe un examen difficile demain. Tu dis :',
      ['Bon courage.', 'Toutes mes condoléances.'], 0,
      "Une chose difficile : bon courage. EN: good luck, hang in there."),
    ctl('Le poste', 'Ton amie a eu le poste. Tu dis :',
      ['Je suis désolé pour toi.', 'Je suis tellement content pour toi.'], 1,
      "Une bonne nouvelle : content pour toi. EN: happy for you."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['empathie', 'registre'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges de l’empathie',
  rule: {
    title: 'Écouter avant de conseiller',
    body: "Ne dis pas que ce n'est pas grave : dis que tu comprends. Garde les blocs entiers : de tout cœur avec toi, désolé pour toi. EN: acknowledge first, and keep the fixed phrases whole.",
  },
  cards: [
    trap('pas grave', "Ce n'est pas grave, tu vas trouver.", E(1158), "Pour lui, c'est grave. Montre d'abord que tu comprends. EN: that must be hard."),
    trap('le sentiment', 'Je comprends ton sentiment.', E(1148), "Correct, mais froid. Entre amis : je te comprends. EN: je te comprends."),
    trap('désolé de toi', 'Je suis désolé de toi.', E(1153), "Désolé pour toi. EN: pour."),
    trap('ici, pas là', 'Si tu veux en parler, je suis ici.', E(1160), "Je suis là : je suis disponible pour toi. Ici, c'est un endroit. EN: je suis là."),
    trap('familier au deuil', "Désolé pour ton père, t'inquiète.", E(1164), "Pour un deuil, pas de t'inquiète : une phrase simple et respectueuse. EN: no casual reassurance for a death."),
    trap('le bloc coupé', 'Je suis avec toi de tout mon cœur.', E(1150), "Le bloc : je suis de tout cœur avec toi. EN: the fixed phrase."),
  ],
  drill: [
    { promptSay: 'Ton ami a perdu son emploi : ça doit être ... .', opts: ['dur', 'grave', 'pas grave'], correct: 0 },
    { promptSay: 'Je ... comprends.', opts: ['te', 'ton sentiment'], correct: 0 },
    { promptSay: 'Je suis désolé ... toi.', opts: ['de', 'pour'], correct: 1 },
    { promptSay: 'Si tu veux en parler, je suis ... .', opts: ['là', 'ici'], correct: 0 },
    { promptSay: 'Pour un deuil : toutes mes ... .', opts: ['condoléances', 'félicitations'], correct: 0 },
    { promptSay: 'Je suis de tout ... avec toi.', opts: ['cœur', 'mon cœur'], correct: 0 },
    { promptSay: "Un examen demain : bon ... .", opts: ['courage', 'condoléances'], correct: 0 },
    { promptSay: 'Entre amis, pour rassurer : ... .', opts: ["t'inquiète", 'veuillez vous calmer'], correct: 0 },
  ],
  steps: TRAP_STEPS('Écouter avant de conseiller', 'Ce que la phrase maladroite raconte'),
  audio: REC('rec-b1-35-piege-reagir'),
  say: REFRAME,
  terms: ['empathie', 'registre'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl("D'abord", 'Ton amie pleure. Tu dis d’abord :',
    ['Je te comprends.', 'Voilà ce que tu dois faire.'], 0,
    "Écouter avant de conseiller. EN: listen first."),
  ctl('Le registre', '« Toutes mes condoléances » est...',
    ['familier', 'soutenu'], 1,
    "Soutenu, pour un deuil. EN: formal."),
  ctl('La bonne nouvelle', 'Pour une bonne nouvelle :',
    ['bon courage', 'félicitations', 'je suis désolé'], 1,
    "Félicitations. EN: congratulations."),
], ['empathie', 'registre']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Réagir aux émotions des autres',
    opener: {
      line: "Une amie qui perd son emploi, une collègue en deuil, un ami qui réussit : ici tu trouves les mots justes pour l'autre. EN: A friend who loses her job, a colleague in mourning, a friend who succeeds: here you find the right words for someone else.",
      imageRef: 'lessons/emotions/act10.jpg',
    },
    sections: [],
    milestone: "Tu réagis à une bonne ou une mauvaise nouvelle avec la bonne formule et le bon registre, et tu écoutes avant de conseiller. EN: You react to news with the right formula and register.",
    estScreens: 42, restPoints: ['a10-construire', 'a10-choisir'],
  },
  sections: [A10_LECTURE, A10_CARTES, A10_CONSTRUIRE, A10_TABLEAU, A10_CHOISIR, A10_PIEGE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — À TOI D'ÉCRIRE
 *
 *  The model message, the plan, the role play, THE TASK, then the closing
 *  sections the playbook requires, with the one quiz.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La réponse de Julien',
  frSub: 'La forme que tu vas écrire',
  text: REPONSE_TEXT,
  glossary: [
    { word: 'drôle de semaine', en: 'strange week', note: 'Une semaine bizarre, pas forcément amusante.' },
    { word: 'service', en: 'department', note: 'L’équipe, au travail.' },
    { word: 'le sien', en: 'hers', note: 'Son ordinateur à elle.' },
    { word: 'Tiens-moi au courant', en: 'Keep me posted', note: 'Donne-moi des nouvelles.' },
  ],
  questions: [
    { q: 'Comment Julien réagit-il à la nouvelle de Maude ?', a: "Félicitations, je suis tellement content pour toi, tu dois être fière." },
    { q: 'Comment montre-t-il qu’il comprend sa tristesse ?', a: "« je comprends que tu sois un peu triste », « ça doit être dur »." },
    { q: 'Quels sentiments de Julien changent, et quand ?', a: "Au début, il était stressé ; tout à coup, il a paniqué ; à la fin, il a été soulagé et fier." },
    { q: 'Trouve la phrase avec que et le subjonctif.', a: "« Ça me fait plaisir que tu viennes à Montréal. » Aussi : « je comprends que tu sois triste »." },
  ],
  audio: REC('rec-b1-35-reponse'),
  say: REFRAME,
  terms: ['empathie', 'declic', 'suite'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour ton message',
  steps: [
    "1. Réagis à sa nouvelle : félicitations, ou ça doit être dur. EN: react to their news first.",
    "2. Montre que tu comprends : je comprends que tu sois..., je suis là. EN: show you understand.",
    "3. Raconte ton moment fort : au début, l'état, à l'imparfait. EN: your story, the state first.",
    "4. Le déclic et la fin : tout à coup, puis j'ai été soulagé, déçu, fier. EN: the trigger and how it ended.",
    "5. Termine : j'ai hâte de te voir, tiens-moi au courant. EN: close warmly.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['empathie', 'declic'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Une phrase par étape',
  cases: [
    uc('Tu réagis à sa bonne nouvelle', E(1169)),
    uc('Tu montres que tu comprends sa peine', E(1171)),
    uc('Tu racontes comment ta semaine a changé', E(1168)),
    uc('Tu termines ton message', E(1172)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['empathie', 'suite'],
};

/** Say it out loud: six turns on the phone with Maude. ONE APOSTROPHE
 *  STYLE (') in every line: the corpus rows it quotes are straight. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Maude rappelle',
  setting: "Dimanche soir. Maude te rappelle de Québec, deux semaines avant son déménagement. Elle veut aussi des nouvelles de toi.",
  turns: [
    {
      ai: 'Alors, tu as lu mon message ?',
      en: 'So, did you read my message?',
      user: fr(E(1169)),
      userEn: 'When I read your message, I was so happy for you. (the moment: passé composé; content pour.)',
      alts: [
        { fr: fr(E(1162)), en: 'Congratulations on your new job, I am so happy for you. (félicitations.)' },
        { fr: "Oui, et j'ai tellement hâte de te voir.", en: 'Yes, and I cannot wait to see you. (avoir hâte de.)' },
      ],
    },
    {
      ai: 'Mais je suis un peu triste de quitter ma famille.',
      en: 'But I am a bit sad to leave my family.',
      user: "Je te comprends, ça doit être dur de partir.",
      userEn: 'I get it, it must be hard to leave. (empathy first.)',
      alts: [
        { fr: fr(E(1157)), en: 'I get it, I have been through that too.' },
        { fr: fr(E(1160)), en: 'If you want to talk about it, I am here.' },
      ],
    },
    {
      ai: 'Et toi, ta semaine, ça a été ?',
      en: 'And you, how was your week?',
      user: fr(E(1177)),
      userEn: 'I have had a strange week. (the story begins.)',
      alts: [
        { fr: fr(E(1167)), en: 'I have to tell you about my week. (il faut que + subjunctive.)' },
        { fr: 'Une semaine un peu stressante, en fait.', en: 'A slightly stressful week, actually. (stressant: what causes stress.)' },
      ],
    },
    {
      ai: "Raconte. Qu'est-ce qui s'est passé ?",
      en: 'Tell me. What happened?',
      user: "Au début, j'étais très stressé. Puis, tout à coup, mon ordinateur s'est éteint.",
      userEn: 'At first I was very stressed. Then, suddenly, my computer switched off. (the state, then the trigger.)',
      alts: [
        { fr: "J'avais une présentation, et j'avais peur d'oublier mes idées.", en: 'I had a presentation, and I was afraid of forgetting my ideas. (avoir peur de.)' },
        { fr: "Tout à coup, j'ai paniqué : plus d'ordinateur.", en: 'Suddenly I panicked: no more computer. (the trigger: passé composé.)' },
      ],
    },
    {
      ai: "Et à la fin, tu te sentais comment ?",
      en: 'And at the end, how did you feel?',
      user: "Quel soulagement. Et même un peu de fierté.",
      userEn: 'What a relief. And even a little pride. (the nouns, no agreement to worry about.)',
      alts: [
        { fr: "Tout s'est bien passé, finalement.", en: 'Everything went well in the end.' },
        { fr: "Ma collègue m'a rassuré, et j'ai fini par me calmer.", en: 'My colleague reassured me, and I ended up calming down. (finir par.)' },
      ],
    },
    {
      ai: 'Bon, je te laisse. On se voit en mars.',
      en: 'Right, I will let you go. See you in March.',
      user: fr(E(1172)),
      userEn: 'Keep me posted. (a warm close.)',
      alts: [
        { fr: fr(E(1174)), en: 'I cannot wait to see you.' },
        { fr: fr(E(1173)), en: 'Big hugs. (familier.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['empathie', 'declic'],
};

/** THE GRADED TASK. The unit outcome is tested here. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Écris à ton ami',
  frSub: 'Mission écrite',
  brief: "Ton ami ou ton amie t'écrit : il ou elle a une nouvelle, bonne ou mauvaise (un nouveau poste, un examen raté, un déménagement, une rupture). Réponds-lui. Réagis d'abord à sa nouvelle, puis raconte un moment fort de ta semaine : ce que tu as ressenti, et comment ça a changé.",
  briefEn: 'A friend writes to you with news, good or bad (a new job, a failed exam, a move, a break-up). Reply. React to their news first, then tell them about a strong moment in your week: what you felt, and how it changed.',
  produce: "Écris un message de 100 à 140 mots. D'abord ta réaction à sa nouvelle, avec une formule d'empathie. Puis ton histoire, avec au moins trois mots de sentiment à la bonne force, un changement (l'état, puis le déclic) et une phrase avec que et le subjonctif.",
  responseSpec: { kind: 'text', minWords: 100, maxWords: 140 },
  rubric: {
    criteria: [
      {
        key: 'nuance',
        label: 'Le mot juste, à la bonne force',
        maxPoints: 4,
        descriptors: [
          "4 : Au moins trois mots de sentiment différents, chacun à la bonne force pour ce qui arrive : agacé pour un bus en retard, furieux pour une voiture rayée, soulagé, fier. Aucun faux ami.",
          "3 : Trois mots de sentiment, mais un est trop fort ou trop faible, ou un faux ami (excité, relevé, décevoir pour tromper).",
          "2 : Seulement content, triste, fâché, ou plusieurs mots à la mauvaise force.",
          "1 : Presque aucun mot de sentiment : on ne sait pas ce que tu as ressenti.",
        ],
      },
      {
        key: 'suite',
        label: 'La bonne suite après le sentiment',
        maxPoints: 3,
        descriptors: [
          "3 : Chaque sentiment a sa suite juste : de + infinitif, que + subjonctif, content pour, en colère contre, fier de, s'inquiéter pour.",
          "2 : Une ou deux suites fausses (content que je parte, fier pour toi, je m'inquiète de toi).",
          "1 : Pas de phrase avec que et le subjonctif, ou des suites souvent fausses.",
        ],
      },
      {
        key: 'recit',
        label: 'Un sentiment qui change, une vraie réaction',
        maxPoints: 3,
        descriptors: [
          "3 : Ta réaction répond vraiment à sa nouvelle, avec une formule qui va avec. Ton histoire montre l'état à l'imparfait, puis le déclic au passé composé.",
          "2 : La réaction ou le changement manque, ou l'état et le déclic sont au même temps.",
          "1 : Pas de réaction à sa nouvelle, ou une liste de sentiments sans histoire.",
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          "2 : Un vrai message à un ami, entre 100 et 140 mots, avec une formule de début et de fin amicale.",
          "1 : Il manque un élément : moins de 100 mots, pas de formule, ou la réaction et l'histoire mélangées.",
        ],
      },
    ],
  },
  scaffold: [
    'Salut...,',
    'Je viens de lire ton message.',
    'Ça doit être...',
    'Je suis tellement content pour toi...',
    'Moi, cette semaine,',
    "Au début, j'étais...",
    'Tout à coup,',
    'Tiens-moi au courant.',
  ],
  modelAnswer: "Salut Karim ! Je viens de lire ton message. Je suis vraiment désolée pour ton examen : ça doit être dur, surtout après tout ce travail. Je comprends que tu sois déçu, mais je suis sûre que tu vas réussir la prochaine fois. Si tu veux en parler, je suis là. Moi, j'ai eu une drôle de semaine. Jeudi, ma fille avait de la fièvre, et la nuit, elle respirait mal. Au début, j'étais juste inquiète. Puis, tout à coup, j'ai vraiment eu peur, et je l'ai amenée à l'urgence. Le médecin nous a rassurés : ce n'était qu'une grosse grippe. Quel soulagement ! Aujourd'hui, elle va mieux, et moi aussi. Bon courage, et tiens-moi au courant. Je t'embrasse, Inès",
  modelAnswerEn: "Hi Karim! I have just read your message. I am really sorry about your exam: that must be hard, especially after all that work. I understand that you are disappointed, but I am sure you will pass next time. If you want to talk about it, I am here. I have had a strange week. On Thursday my daughter had a fever, and at night she was breathing badly. At first I was just worried. Then, suddenly, I got really scared, and I took her to the emergency room. The doctor reassured us: it was only a bad flu. What a relief! Today she is better, and so am I. Hang in there, and keep me posted. Big hugs, Inès",
  watchFor: [
    {
      pattern: 'The English false friend for good news or relief (je suis excité, je suis relevé) or décevoir for to deceive.',
      criterion: 'nuance',
      feedback: "Pour une bonne nouvelle : j'ai hâte. Relieved : soulagé. Décevoir, c'est to disappoint.",
      ref: 'a1-scene',
    },
    {
      pattern: 'A feeling at the wrong strength for the event (aux anges for a sandwich, furieux for five minutes of delay), or only content / triste / fâché throughout.',
      criterion: 'nuance',
      feedback: "Choisis la force : agacé, énervé, en colère, furieux ; content, ravi, aux anges.",
      ref: 'a2-choisir',
    },
    {
      pattern: 'The wrong member of a family: the -é word for the cause or the -ant word for the person (un film déçu, je suis gênant, sa voix était rassurée).',
      criterion: 'nuance',
      feedback: "La personne prend -é (gêné, déçu) ; ce qui fait ressentir prend -ant (gênant, décevant).",
      ref: 'a6-focus',
    },
    {
      pattern: 'Anger or worry with the wrong preposition (en colère à, fâché à, je m’inquiète de toi) or la colère used as an adjective (elle est colère).',
      criterion: 'suite',
      feedback: "En colère contre quelqu'un ; je m'inquiète pour toi.",
      ref: 'a4-piege',
    },
    {
      pattern: 'que + indicative after a feeling (content que tu es là, ça me fait de la peine que tu es triste) or que with the same subject (content que je parte).',
      criterion: 'suite',
      feedback: "Deux personnes : que + subjonctif. Une personne : de + infinitif.",
      ref: 'a8-piege',
    },
    {
      pattern: 'fier pour, honte pour when honte de is meant, or content avec (instead of fier de, content de).',
      criterion: 'suite',
      feedback: "Fier de, avoir honte de, content de quelque chose, content pour quelqu'un.",
      ref: 'a6-piege',
    },
    {
      pattern: 'faire + adjective for a cause (ça me fait triste) or a missing de (ça m’énerve attendre).',
      criterion: 'suite',
      feedback: "Ça me rend triste ; ça m'énerve d'attendre.",
      ref: 'a8-cartes',
    },
    {
      pattern: 'The lasting state in the passé composé or the sudden trigger in the imparfait (tout à coup, j’avais peur; au début, j’ai été inquiet et ça a duré).',
      criterion: 'recit',
      feedback: "L'état à l'imparfait : j'étais inquiet. Le déclic au passé composé : tout à coup, j'ai eu peur.",
      ref: 'a9-erreurs',
    },
    {
      pattern: 'A reaction that brushes the news aside (ce n’est pas grave), jumps to advice, or does not fit the news (bon courage for a promotion).',
      criterion: 'recit',
      feedback: "Réagis d'abord : ça doit être dur, ou félicitations. Les conseils viennent après.",
      ref: 'a10-piege',
    },
    {
      pattern: 'A register that jumps: t’inquiète next to toutes mes condoléances, or a formal letter to a close friend.',
      criterion: 'tache',
      feedback: "Un message à un ami : un registre courant ou familier, du début à la fin.",
      ref: 'a10-tableau',
    },
    {
      pattern: 'Only one part of the message: the story with no reaction to the friend’s news, or the reaction with no story.',
      criterion: 'tache',
      feedback: "D'abord sa nouvelle et ta réaction, puis ton histoire et ce que tu as ressenti.",
      ref: 'a11-plan',
    },
  ],
  graderNotes: [
    'Grade feeling words for FIT to the event the learner describes, not for rarity: « agacé » for a late bus is better than « furieux ». Count a word once however often it appears.',
    'Word count EXCLUDES the greeting and the sign-off, as in the other B1 writing tasks. 10% tolerance (90 to 154) before criterion « tache » loses its point.',
    'Writer and friend gender are unknown: judge agreement (déçu / déçue, fier / fière) for internal consistency only.',
    'Accept Québec and other regional forms without comment: être tanné, avoir de la peine (être triste), capoter, l’urgence (France: les urgences), fâché meaning en colère, la partie for le match.',
    'The subjunctive after a feeling is lessons 14 to 16 in B1 and is required once (criterion « suite »). Accept any correct subjunctive; do not mark a correct indicative after « je comprends que » when it means « je me rends compte que ».',
    'Idioms from lessons 27 to 29 in B1 (avoir le cœur gros, se faire du mauvais sang, voir rouge, avoir une peur bleue) count as feeling words under « nuance » when they fit.',
    'Do not mark facts or the kind of news: a learner may invent any event.',
    '« Je suis excité » for looking forward to something is heard in Québec: mark it under « nuance » as a word to avoid, once, never twice.',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['force', 'suite', 'declic'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes sentiments à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['force', 'suite'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-temps',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la force', v: 'agacé, énervé, en colère, furieux', say: fr(E(1059)),
      detail: { title: 'La force', body: "Choisis le mot qui a la force de ce qui arrive. EN: match the strength.", say: fr(E(1053)) } },
    { k: 'la suite', v: 'de + infinitif, que + subjonctif', say: fr(E(1115)),
      detail: { title: 'La suite', body: "Une personne : de. Deux personnes : que et le subjonctif. EN: count the subjects.", say: fr(E(1114)) } },
    { k: 'pour, contre', v: 'content pour, en colère contre', say: fr(E(1124)),
      detail: { title: 'Pour, contre', body: "Content pour quelqu'un, en colère contre quelqu'un, s'inquiéter pour quelqu'un. EN: the prepositions.", say: fr(E(1055)) } },
    { k: '-é ou -ant', v: 'gêné, gênant', say: fr(E(1095)),
      detail: { title: 'Qui ressent', body: "La personne : gêné. La cause : gênant. EN: -é feels, -ant causes.", say: fr(E(1092)) } },
    { k: "l'état, le déclic", v: "j'étais, j'ai eu", say: fr(E(1135)),
      detail: { title: 'Le temps', body: "L'imparfait pour l'état, le passé composé pour le moment où ça change. EN: state and trigger.", say: fr(E(1134)) } },
    { k: 'réagir', v: 'ça doit être dur, félicitations', say: fr(E(1158)),
      detail: { title: 'Réagir', body: "Écoute d'abord, puis la formule qui va avec la nouvelle et la personne. EN: listen, then react.", say: fr(E(1162)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['force', 'suite', 'declic'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu dis la joie, la tristesse, la colère, la peur, la honte, la fierté, la surprise et le soulagement, chacun à la bonne force et avec sa suite. Tu racontes comment un sentiment a changé, et tu réagis à la nouvelle d'un ami dans le bon registre. Le piège qui reste est discret : que et l'indicatif après un sentiment, quand tu écris vite. Avant l'examen, écris cinq phrases avec que sur ta semaine, et relis chaque verbe. EN: Write five que sentences about your week and check every verb.",
  stats: [
    { k: 'Les échelles', v: 'la joie, la colère, la peur' },
    { k: 'Les familles', v: 'seize, de décevoir à rassurer' },
    { k: 'Les suites', v: 'de, que, pour, contre, ça me rend' },
    { k: 'Les textes', v: 'sept lectures, trois écoutes' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight, one per act from act 1 to act 10 plus
 *  the message round. Each round's target is a distinct errorTrigger.
 *  `fold()` strips accents, commas and apostrophes but does NOT decompose
 *  « œ », so every typed answer carrying œ also accepts « oe ». Every typed
 *  answer differs from its prompt by a WORD that survives folding. */

type QQ = QuizQuestion;
const OE = (s: string) => [...new Set([s, s.replace(/œ/g, 'oe').replace(/Œ/g, 'Oe')])];
const TI_Q = 'Complète et écris toute la phrase. EN: Complete it and write the whole sentence.';
const tI = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q: TI_Q, prompt, answer, accept: OE(answer), why, ref });
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
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-ressentir', label: 'Dire ce que tu ressens', targets: ['excite-calque'],
      questions: [
        mc('Pour une bonne nouvelle, tu dis :', ["J'ai hâte de te voir.", 'Je suis excité de te voir.', 'Je me sens hâte de te voir.'], 0, "J'ai hâte. EN: j'ai hâte.", 'a1-scene'),
        mc('Je me sens ...', ['un peu perdu', 'de la joie', 'de la peur'], 0, "Se sentir + adjectif. EN: an adjective.", 'a1-cartes'),
        mc('Je ressens ...', ['de la joie', 'content', 'mieux'], 0, "Ressentir + nom. EN: a noun.", 'a1-reperer'),
        mc('« Content pour toi » veut dire :', ['ta nouvelle me fait plaisir', 'je suis content à ta place'], 0, "Pour : la joie d'un autre. EN: happy for you.", 'a1-cartes'),
        tI("J'ai ___ de te voir à Montréal.", fr(E(1006)), "Avoir hâte de. EN: hâte.", 'a1-cartes'),
        tI('Je me sens ___ depuis hier. (better)', fr(E(1012)), "Se sentir mieux. EN: mieux.", 'a1-usages'),
        { ...eS('Je suis très excité de te voir à Montréal.', 'Je suis très content de te voir à Montréal.', "Excité veut dire agité. Content, ou j'ai hâte. EN: content.", 'a1-scene'),
          accept: ['Je suis très content de te voir à Montréal.', 'Je suis très contente de te voir à Montréal.'] },
        lC('Écoute. Que ressent cette personne, surtout ?', fr(E(1007)), ['de la joie', 'de la colère', 'de la honte'], 0, "Surtout de la joie. EN: joy.", 'a1-lecture'),
      ],
    },
    {
      id: 'r2-joie', label: 'La joie', targets: ['force-joie'],
      questions: [
        mc('Le plus fort :', ['aux anges', 'content', 'heureux'], 0, "Aux anges, au maximum. EN: over the moon.", 'a2-cartes'),
        mc('Un bon sandwich. Tu es...', ['content', 'aux anges', 'furieux'], 0, "Content suffit. EN: pleased.", 'a2-choisir'),
        mc("Ton ami t'aide. Tu dis :", ['Ça me fait plaisir.', 'Ça me donne plaisir.', 'Je me fais plaisir.'], 0, "Faire plaisir. EN: faire plaisir.", 'a2-piege'),
        mc('Se réjouir ... quelque chose.', ['de', 'à', 'pour'], 0, "Se réjouir de. EN: de.", 'a2-cartes'),
        tI('Elle est ravie ___ sa promotion.', fr(E(1022)), "Ravie de. EN: de.", 'a2-piege'),
        tI("Ta visite m'a ___ très plaisir.", fr(E(1024)), "Faire plaisir. EN: fait.", 'a2-construire'),
        eS('Je suis content avec mon nouveau travail.', fr(E(1020)), "Content de. EN: de.", 'a2-piege'),
        lC('Écoute. À quelle force est cette joie ?', fr(E(1023)), ['au maximum', 'un peu'], 0, "Aux anges : au maximum. EN: the top.", 'a2-tableau'),
      ],
    },
    {
      id: 'r3-tristesse', label: 'La tristesse et la déception', targets: ['decevoir-calque'],
      questions: [
        mc('To disappoint :', ['décevoir', 'tromper', 'déranger'], 0, "Décevoir. Tromper, c'est to deceive. EN: décevoir.", 'a3-cartes'),
        mc("Au Québec, « j'ai de la peine » :", ['je suis triste', 'je suis puni', 'je suis fatigué'], 0, "Être triste. EN: I am sad.", 'a3-cartes'),
        mc("« J'ai de la peine à dormir » :", ['je dors mal', 'je suis triste de dormir'], 0, "Avec à : avoir du mal. EN: I struggle.", 'a3-exemples'),
        mc('Au plus bas :', ['avoir le moral à zéro', 'avoir le moral'], 0, "Le moral à zéro. EN: feeling low.", 'a3-construire'),
        tI("Ta remarque m'a ___ de la peine.", fr(E(1041)), "Faire de la peine. EN: fait.", 'a3-construire'),
        tI("Il ne veut pas te ___ . (to disappoint)", fr(E(1044)), "Décevoir. EN: décevoir.", 'a3-cartes'),
        eS('Ce film était vraiment déçu.', fr(E(1039)), "Le film déçoit : décevant. EN: décevant.", 'a3-erreurs'),
        lC('Écoute. Qu’est-ce qui est annulé ?', fr(E(1040)), ['le concert', 'le train', 'le film'], 0, "Le concert. EN: the concert.", 'a3-choisir'),
      ],
    },
    {
      id: 'r4-colere', label: 'La colère', targets: ['colere-suite'],
      questions: [
        mc('Du plus faible au plus fort :', ['agacé, énervé, furieux', 'furieux, énervé, agacé'], 0, "Agacé, énervé, furieux. EN: weak to strong.", 'a4-cartes'),
        mc('En colère ... ton frère.', ['contre', 'à', 'avec'], 0, "Contre. EN: contre.", 'a4-piege'),
        mc('« Fâché avec Paul » :', ['on ne se parle plus', 'on est un peu agacés'], 0, "La relation est coupée. EN: not speaking.", 'a4-cartes'),
        mc('Mad, angry :', ['furieux', 'fou', 'fâché avec'], 0, "Fou, c'est crazy. EN: furieux.", 'a4-piege'),
        tI("Il s'est mis en ___ contre son fils.", fr(E(1054)), "Se mettre en colère. EN: colère.", 'a4-construire'),
        tI('Mon voisin est vraiment ___ . (annoying)', fr(E(1058)), "Il t'énerve : énervant. EN: énervant.", 'a4-piege'),
        eS('Elle est colère contre moi.', fr(E(1055)), "En colère. EN: en colère.", 'a4-piege'),
        lC('Écoute. D’où vient cette phrase ?', fr(E(1060)), ['du Québec', 'de France'], 0, "Tanné : Québec. EN: Québec.", 'a4-histoire'),
      ],
    },
    {
      id: 'r5-peur', label: 'La peur et le stress', targets: ['inquiet-pour'],
      questions: [
        mc('Worried about my mother :', ["je m'inquiète pour ma mère", "je m'inquiète de ma mère"], 0, "Pour une personne. EN: pour.", 'a5-cartes'),
        mc('Le plus fort :', ['paniqué', 'inquiet', 'angoissé'], 0, "Paniqué. EN: panicking.", 'a5-cartes'),
        mc('Une réunion qui stresse est...', ['stressante', 'stressée', 'le stress'], 0, "La cause : -ant. EN: stressful.", 'a5-choisir'),
        mc("Ça m'inquiète qu'il ne ... pas.", ['réponde', 'répond'], 0, "Subjonctif. EN: réponde.", 'a5-erreurs'),
        tI('Les orages me ___ peur.', fr(E(1076)), "Faire peur. EN: font.", 'a5-erreurs'),
        tI('Je suis stressé à ___ des délais. (because of)', fr(E(1075)), "À cause de. EN: cause.", 'a5-construire'),
        eS('Mon travail est stressé en ce moment.', fr(E(1074)), "Stressant. EN: stressant.", 'a5-erreurs'),
        lC('Écoute. Pourquoi ne pas paniquer ?', fr(E(1077)), ['on a encore le temps', 'on est déjà en retard'], 0, "On a encore le temps. EN: there is still time.", 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-gene', label: 'La honte, la fierté, la gêne', targets: ['ressent-cause'],
      questions: [
        mc('Un silence qui gêne est...', ['gênant', 'gêné'], 0, "La cause : gênant. EN: awkward.", 'a6-choisir'),
        mc("Tu dois demander de l'argent. Tu es...", ['gêné', 'gênant'], 0, "La personne : gêné. EN: embarrassed.", 'a6-focus'),
        mc('Fier ... toi.', ['de', 'pour', 'à'], 0, "Fier de. EN: de.", 'a6-piege'),
        mc('Ton collègue rate son discours. Tu as honte...', ['pour lui', 'de ton discours'], 0, "Pour lui. EN: for him.", 'a6-choisir'),
        tI("J'ai ___ de mon retard.", fr(E(1086)), "Avoir honte de. EN: honte.", 'a6-construire'),
        tI('Ses parents parlent de lui avec ___ . (pride)', fr(E(1090)), "La fierté. EN: fierté.", 'a6-cartes'),
        eS('Je suis un peu embarrassant de te demander ça.', fr(E(1091)), "La personne : gêné. EN: gêné.", 'a6-piege'),
        lC('Écoute. Qui est gêné ?', fr(E(1095)), ['la personne', 'la situation'], 0, "La personne est gênée. EN: the person.", 'a6-focus'),
      ],
    },
    {
      id: 'r7-surprise', label: 'La surprise et le soulagement', targets: ['soulage-calque'],
      questions: [
        mc('Relieved :', ['soulagé', 'relevé', 'relâché'], 0, "Soulagé. EN: soulagé.", 'a7-erreurs'),
        mc('What a relief :', ['Quel soulagement', 'Quelle surprise'], 0, "Quel soulagement. EN: relief.", 'a7-flash'),
        mc('Une voix qui rassure est...', ['rassurante', 'rassurée'], 0, "La cause : -ant. EN: reassuring.", 'a7-choisir'),
        mc("Ça m'étonne qu'il ... déjà parti.", ['soit', 'est'], 0, "Subjonctif. EN: soit.", 'a7-erreurs'),
        tI("Je suis ___ d'avoir retrouvé mes clés. (relieved)", fr(E(1108)), "Soulagé. EN: soulagé.", 'a7-construire'),
        tI("Je n'en ___ pas, tu as gagné.", fr(E(1106)), "Ne pas en revenir. EN: reviens.", 'a7-cartes'),
        eS('Sa voix était très rassurée.', fr(E(1110)), "Rassurante. EN: rassurante.", 'a7-erreurs'),
        lC('Écoute. Pourquoi « ouf » ?', fr(E(1111)), ['il a eu son train', 'il a raté son train'], 0, "De justesse, mais il l'a eu. EN: he just made it.", 'a7-lecture'),
      ],
    },
    {
      id: 'r8-suite', label: 'De ou que', targets: ['de-ou-que'],
      questions: [
        mc('Tu pars en vacances. Tu dis :', ['Je suis heureux de partir.', 'Je suis heureux que je parte.'], 0, "Une personne : de. EN: de.", 'a8-cartes'),
        mc('Content que tu ... là.', ['sois', 'es'], 0, "Subjonctif. EN: sois.", 'a8-construire'),
        mc('Cette chanson me ... triste.', ['rend', 'fait', 'met'], 0, "Rendre + adjectif. EN: rend.", 'a8-cartes'),
        mc('« Content de toi » veut dire :', ['ce que tu fais me plaît', 'ta nouvelle me fait plaisir'], 0, "De toi : ce que tu fais. EN: pleased with you.", 'a8-tableau'),
        tI("Ça m'énerve ___ attendre.", fr(E(1118)), "D'attendre. EN: de.", 'a8-piege'),
        tI('Je suis fier que tu ___ ce métier. (faire)', fr(E(1123)), "Subjonctif : fasses. EN: fasses.", 'a8-piege'),
        eS('Je suis heureuse que tu pars en vacances.', fr(E(1115)), "Subjonctif : partes. EN: partes.", 'a8-piege'),
        lC('Écoute. Qui part en vacances ?', fr(E(1114)), ['la personne qui parle', 'une autre personne'], 0, "De partir : la même personne. EN: the speaker.", 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-temps', label: 'Quand un sentiment change', targets: ['etat-declic'],
      questions: [
        mc("Le chien aboie d'un coup. Tu racontes :", ["J'ai eu peur.", "J'avais peur."], 0, "Le déclic. EN: passé composé.", 'a9-choisir'),
        mc('Toute ton enfance, le noir te faisait peur :', ["J'avais peur du noir.", "J'ai eu peur du noir."], 0, "L'état. EN: imparfait.", 'a9-cartes'),
        mc('Tout à coup annonce...', ['un déclic, au passé composé', "un état, à l'imparfait", 'une habitude, au présent'], 0, "Un déclic. EN: a trigger.", 'a9-cartes'),
        mc('Pendant dix ans, elle ... heureuse à Québec.', ['a été', 'était'], 0, "Une période fermée. EN: a été.", 'a9-exemples'),
        tI("Au début, j'___ inquiet. (être, l'état)", fr(E(1134)), "L'imparfait. EN: étais.", 'a9-construire'),
        tI("Depuis ce jour-là, j'___ moins peur. (avoir)", fr(E(1143)), "Depuis : présent. EN: ai.", 'a9-erreurs'),
        eS("Tout à coup, j'avais peur.", fr(E(1135)), "Tout à coup : passé composé. EN: j'ai eu.", 'a9-erreurs'),
        lC('Écoute. Quand la personne a-t-elle été soulagée ?', fr(E(1136)), ['quand elle a vu le message', 'pendant des mois'], 0, "Le déclic : le message. EN: when she saw the message.", 'a9-lecture'),
      ],
    },
    {
      id: 'r10-reagir', label: 'Réagir', targets: ['reaction-deplacee'],
      questions: [
        mc('Ton ami a perdu son emploi. Tu dis d’abord :', ['Ça doit être dur.', "Ce n'est pas grave."], 0, "Tu comprends d'abord. EN: that must be hard.", 'a10-lecture'),
        mc('Pour un deuil, à une collègue :', ['Toutes mes condoléances.', 'Félicitations.', "T'inquiète."], 0, "Condoléances. EN: condolences.", 'a10-tableau'),
        mc("« T'inquiète » est...", ['familier', 'soutenu', 'réservé aux lettres'], 0, "Entre amis. EN: casual.", 'a10-tableau'),
        mc('Examen difficile demain :', ['Bon courage.', 'Toutes mes condoléances.', 'Félicitations.'], 0, "Bon courage. EN: hang in there.", 'a10-choisir'),
        tI('Si tu veux en parler, je suis ___ .', fr(E(1160)), "Je suis là. EN: là.", 'a10-construire'),
        tI('Ça doit être ___ de chercher du travail en ce moment. (hard)', fr(E(1158)), "Dur. EN: dur.", 'a10-cartes'),
        eS('Je suis désolé de toi.', 'Je suis désolé pour toi.', "Désolé pour toi. EN: pour.", 'a10-piege'),
        lC('Écoute. Cette phrase est...', fr(E(1161)), ['familière', 'soutenue'], 0, "T'inquiète : familier. EN: casual.", 'a10-tableau'),
      ],
    },
    {
      id: 'r11-message', label: 'Ton message', targets: ['message-plat'],
      questions: [
        mc('Ton message commence par...', ['sa nouvelle et ta réaction', 'une liste de tes sentiments'], 0, "D'abord l'autre. EN: their news first.", 'a11-plan'),
        mc('Ton amie a eu le poste :', ['Félicitations, tu dois être fière.', 'Toutes mes condoléances.'], 0, "Une bonne nouvelle. EN: congratulations.", 'a11-lecture'),
        mc('Pour le début de ta semaine, qui a duré :', ["Au début, j'étais stressé.", "Au début, j'ai été stressé tout le temps."], 0, "L'état : imparfait. EN: the state.", 'a11-lecture'),
        mc('Pour finir ton message à un ami :', ['Tiens-moi au courant. Je t’embrasse.', 'Veuillez agréer mes salutations.', 'Toutes mes condoléances.'], 0, "Amical. EN: friendly.", 'a11-usages'),
        tI("Quand j'ai lu ton message, j'ai été tellement content ___ toi.", fr(E(1169)), "Content pour toi. EN: pour.", 'a11-usages'),
        tI('Tu dois être tellement ___ . (proud, à une amie)', fr(E(1176)), "Fière. EN: fière.", 'a11-lecture'),
        eS('Ça me fait de la peine que tu es triste.', fr(E(1171)), "Subjonctif : sois. EN: sois.", 'a11-usages'),
        lC('Écoute. Comment la semaine a-t-elle fini ?', fr(E(1168)), ['bien', 'mal'], 0, "Tout s'est bien passé. EN: well.", 'a11-lecture'),
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
    { front: 'to look forward to', back: 'avoir hâte de', say: fr(E(1006)) },
    { front: 'over the moon', back: 'aux anges', say: fr(E(1023)) },
    { front: 'disappointing', back: 'décevant', say: fr(E(1039)) },
    { front: 'angry with someone', back: "en colère contre quelqu'un", say: fr(E(1055)) },
    { front: 'worried about you', back: "je m'inquiète pour toi", say: fr(E(1070)) },
    { front: 'awkward', back: 'gênant', say: fr(E(1092)) },
    { front: 'relieved', back: 'soulagé', say: fr(E(1108)) },
    { front: 'glad you are here', back: 'content que tu sois là', say: fr('fr.b1.opinions-et-avis.1003') },
    { front: 'that must be hard', back: 'ça doit être dur', say: fr(E(1158)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Les émotions, en résumé',
  body: `${REFRAME} Tu choisis maintenant le mot à la bonne force, tu mets la bonne suite, tu racontes comment un sentiment a changé, et tu réagis à la nouvelle d'un ami avec les mots justes. La prochaine leçon, ${AFFAIRES_REF}, parle du monde du travail et des affaires : tu y garderas le bon registre. EN: Next lesson is about work and business, where register comes back.`,
  points: [
    'La force : agacé, énervé, en colère, furieux.',
    'La suite : content de partir, content que tu partes, content pour toi.',
    "Le temps : j'étais inquiet, puis j'ai eu peur.",
    "L'autre : ça doit être dur, je suis là, félicitations.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['force', 'suite', 'empathie'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'À toi d’écrire',
    opener: {
      line: "Un message d'ami, une nouvelle à fêter ou à consoler, une semaine à raconter : à toi de trouver tes mots. EN: A friend's message, news to celebrate or soften, a week to tell: your turn to find your words.",
      imageRef: 'lessons/emotions/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit à un ami pour réagir à sa nouvelle et raconter ta semaine, et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote to a friend and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-tristesse', 'a11-quiz/r6-gene', 'a11-quiz/r9-temps'],
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
  sheet('sheet-force', 'La force des sentiments', ['la joie', 'la colère', 'la peur', 'la tristesse', 'la surprise'], [
    teach('sheet-force-teach', 'Choisir la force',
      `${REFRAME} Un mot trop fort sonne faux, ou impoli ; un mot trop faible cache ce que tu ressens. Regarde ce qui arrive, puis choisis sur l'échelle. EN: a word too strong sounds odd; too weak hides the feeling.`),
    table('sheet-force-table', 'Cinq échelles', ['Sentiment', 'Faible', 'Moyen', 'Fort', 'Très fort'], [
      ['la joie', 'content', 'heureux', 'ravi', 'aux anges, sauter de joie'],
      ['la colère', 'agacé', 'énervé', 'en colère', 'furieux, voir rouge'],
      ['la peur', 'inquiet', 'angoissé', 'paniqué', 'avoir une peur bleue'],
      ['la tristesse', 'un peu triste', 'triste, avoir de la peine', 'avoir le cœur gros', 'avoir le moral à zéro'],
      ['la surprise', 'surpris', 'étonné', 'sous le choc', "je n'en reviens pas"],
    ]),
    table('sheet-force-registre', 'Le registre', ['Familier', 'Courant', 'Où'], [
      ['je capote', 'je suis très content, ou très inquiet', 'Québec, entre amis'],
      ['je suis tanné', "j'en ai assez", 'Québec'],
      ['ça m’énerve', 'ça me dérange', 'partout'],
      ['le moral à zéro', 'très triste', 'partout'],
    ]),
  ]),
  sheet('sheet-familles', 'Les familles de sentiments', ['verbe, nom, adjectifs', 'qui ressent, ce qui fait ressentir', 'la honte, la fierté'], [
    teach('sheet-familles-teach', 'Qui ressent, ce qui fait ressentir',
      "La personne qui ressent prend souvent -é ou -u : déçu, gêné, énervé, stressé, surpris. Ce qui fait ressentir prend -ant : décevant, gênant, énervant, stressant, surprenant. EN: -é or -u for the person, -ant for the cause."),
    table('sheet-familles-table', 'Dix familles', ['Verbe', 'Nom', 'Qui ressent', 'Ce qui fait ressentir'], [
      ['décevoir', 'la déception', 'déçu', 'décevant'],
      ['énerver', "l'énervement", 'énervé', 'énervant'],
      ["s'inquiéter", "l'inquiétude", 'inquiet', 'inquiétant'],
      ['stresser', 'le stress', 'stressé', 'stressant'],
      ['gêner', 'la gêne', 'gêné', 'gênant'],
      ['surprendre', 'la surprise', 'surpris', 'surprenant'],
      ['étonner', "l'étonnement", 'étonné', 'étonnant'],
      ['soulager', 'le soulagement', 'soulagé', ''],
      ['rassurer', '', 'rassuré', 'rassurant'],
      ['attrister', 'la tristesse', 'triste, attristé', ''],
    ]),
    table('sheet-familles-honte', 'La honte et la fierté', ['Nom', 'Le bloc', 'Adjectif'], [
      ['la honte', 'avoir honte de, avoir honte pour', 'honteux'],
      ['la fierté', 'être fier de, être fier de soi', 'fier, fière'],
      ['la colère', 'être en colère contre, se mettre en colère', 'en colère'],
      ['la joie', 'se réjouir de, sauter de joie', 'joyeux'],
    ]),
  ]),
  sheet('sheet-suite', 'La suite des sentiments', ['de ou que', 'pour, contre, de', 'ça me'], [
    teach('sheet-suite-teach', 'Compte les personnes',
      `Une seule personne : de et l'infinitif, je suis content de partir. Deux personnes : que et le subjonctif, je suis content que tu partes. Les formes du subjonctif sont dans ${SUBJ_DECL_REF}, le choix de ou que dans ${SUBJ_INF_REF}. EN: one subject de, two subjects que.`),
    table('sheet-suite-table', 'Les suites', ['Le mot', 'La suite', 'Exemple'], [
      ['content, heureux, triste, fier', 'de + infinitif', 'Elle est triste de quitter ses collègues.'],
      ['content, heureux, triste, fier', 'que + subjonctif', 'Je suis fier que tu fasses ce métier.'],
      ['content, désolé', 'pour quelqu’un', 'Je suis content pour toi.'],
      ['en colère, fâché', 'contre quelqu’un', 'Il est fâché contre son patron.'],
      ['fâché', 'avec quelqu’un : on ne se parle plus', 'Mes deux sœurs sont fâchées.'],
      ["s'inquiéter", 'pour quelqu’un, de quelque chose', "Je m'inquiète pour ma mère."],
      ['avoir honte, être fier', 'de', "Il avait honte de ne pas savoir répondre."],
      ['avoir hâte', 'de + infinitif', "J'ai hâte de te voir."],
      ['ça me fait plaisir, ça m’énerve', 'de + infinitif, ou que + subjonctif', "Ça m'énerve qu'il arrive en retard."],
      ['ça me rend', '+ adjectif', 'Cette chanson me rend triste.'],
      ['se sentir / ressentir', '+ adjectif / + nom', 'Je me sens mieux. Je ressens de la joie.'],
    ]),
  ]),
  sheet('sheet-temps', 'Raconter un sentiment', ["l'état ou le déclic", 'les marqueurs'], [
    teach('sheet-temps-teach', "L'état et le déclic",
      `L'imparfait dit l'état qui dure : j'étais inquiet. Le passé composé dit le moment où le sentiment arrive, change ou finit : tout à coup, j'ai eu peur ; j'ai été soulagé. C'est le choix de ${PC_IMP_REF} et ${PAIRES_REF}, appliqué aux sentiments. EN: state in the imparfait, trigger in the passé composé.`),
    table('sheet-temps-table', 'Six façons de raconter', ['Tu veux dire...', 'Temps', 'Exemple'], [
      ['un état qui dure', 'imparfait', "Au début, j'étais inquiet."],
      ['une habitude', 'imparfait', "Le soir, j'appelais ma famille."],
      ['le moment où ça arrive', 'passé composé', "Tout à coup, j'ai eu peur."],
      ['la fin du sentiment', 'passé composé', "J'ai été soulagé."],
      ['une période fermée', 'passé composé', 'Elle a été heureuse à Québec pendant dix ans.'],
      ["jusqu'à aujourd'hui", 'depuis + présent', "Depuis ce jour-là, j'ai moins peur."],
    ]),
    table('sheet-temps-marqueurs', 'Les marqueurs', ['Marqueur', 'Il annonce...'], [
      ['au début', "l'état, souvent à l'imparfait"],
      ['tout à coup, d’un coup', 'un déclic, au passé composé'],
      ['puis, ensuite', 'le changement suivant'],
      ['peu à peu', 'un changement lent'],
      ['finir par + infinitif', 'le changement à la fin'],
      ['depuis', 'un changement qui dure encore'],
    ]),
  ]),
  sheet('sheet-reagir', 'Réagir aux émotions des autres', ['les formules', 'le registre', 'écouter d’abord'], [
    teach('sheet-reagir-teach', "Écouter d'abord",
      `Quand quelqu'un te dit une mauvaise nouvelle, montre d'abord que tu comprends : je te comprends, ça doit être dur. Les conseils viennent après. Choisis le registre selon la personne, comme dans ${REGISTRES_REF}. EN: acknowledge first, advise later, in the right register.`),
    table('sheet-reagir-table', 'Les formules', ['Situation', 'Familier', 'Courant', 'Soutenu'], [
      ['rassurer', "t'inquiète", "ne t'inquiète pas, ça va aller", 'ne vous inquiétez pas'],
      ['une mauvaise nouvelle', 'ça craint', 'ça doit être dur', 'ça doit être très difficile pour vous'],
      ['un deuil', "je t'embrasse fort", 'je suis vraiment désolé', 'toutes mes condoléances'],
      ['une épreuve', 'courage', 'bon courage, je suis là', 'je suis de tout cœur avec vous'],
      ['une bonne nouvelle', 'trop bien', 'je suis content pour toi', 'félicitations'],
      ['offrir ton aide', 'je suis là', 'si tu veux en parler, je suis là', "n'hésitez pas à m'appeler"],
    ]),
    table('sheet-reagir-eviter', 'À éviter', ['Pas', 'Mais'], [
      ["ce n'est pas grave", 'ça doit être dur'],
      ['je comprends ton sentiment', 'je te comprends'],
      ['je suis désolé de toi', 'je suis désolé pour toi'],
      ['je suis ici pour toi', 'je suis là pour toi'],
      ['bonne chance, pour une maladie', 'bon courage'],
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
  { id: 'd-hate', title: "J'ai hâte", format: 'mcq' as const, coach: "Pour une bonne nouvelle : j'ai hâte, pas excité. Se sentir + adjectif, ressentir + nom. EN: j'ai hâte, not excité.", q: "Tu attends ton ami avec joie : j'... de te voir.", opts: ['ai hâte', 'suis excité'], correct: 0, why: "Avoir hâte de. EN: j'ai hâte.", items: [E(1001), E(1005), E(1006), E(1007), E(1010), E(1012)], audio: AUDIO },
  { id: 'd-joie', title: 'La bonne force', format: 'mcq' as const, coach: "Content, heureux, ravi, aux anges : choisis selon ce qui arrive. EN: pick the strength that matches.", q: 'Un bébé après dix ans. Ils sont ... .', opts: ['aux anges', 'un peu contents'], correct: 0, why: "Un grand bonheur. EN: over the moon.", items: [E(1015), E(1020), E(1022), E(1023), E(1024), E(1025)], audio: AUDIO },
  { id: 'd-deception', title: 'Déçu, décevant', format: 'mcq' as const, coach: "Toi, tu es déçu ; le film est décevant. Et décevoir, c'est to disappoint. EN: déçu, décevant, not deceive.", q: 'Un film qui déçoit est ... .', opts: ['décevant', 'déçu'], correct: 0, why: "Ce qui déçoit : décevant. EN: disappointing.", items: [E(1032), E(1038), E(1039), E(1040), E(1041), E(1046)], audio: AUDIO },
  { id: 'd-colere', title: 'En colère contre', format: 'mcq' as const, coach: "La colère est un nom : en colère, contre quelqu'un. Mad : furieux. EN: en colère contre.", q: 'Elle est en colère ... moi.', opts: ['contre', 'à'], correct: 0, why: "Contre. EN: contre.", items: [E(1047), E(1048), E(1054), E(1055), E(1059), E(1062)], audio: AUDIO },
  { id: 'd-inquiet', title: 'Pour ou de', format: 'mcq' as const, coach: "On s'inquiète pour une personne, de une chose. Le travail est stressant, toi, tu es stressé. EN: pour a person.", q: "Je m'inquiète ... ma mère.", opts: ['pour', 'de'], correct: 0, why: "Pour une personne. EN: pour.", items: [E(1064), E(1066), E(1070), E(1074), E(1076), E(1080)], audio: AUDIO },
  { id: 'd-gene', title: 'Qui ressent', format: 'sort' as const, coach: "Deux piles : la personne qui ressent, et ce qui fait ressentir. EN: sort -é from -ant.", buckets: ['la personne qui ressent', 'ce qui fait ressentir'], items: [E(1091), E(1092), E(1053), E(1058), E(1075), E(1074)], audio: AUDIO },
  { id: 'd-soulagement', title: 'Soulagé, pas relevé', format: 'mcq' as const, coach: "Relieved : soulagé. Quel soulagement. Et ce qui rassure est rassurant. EN: soulagé.", q: "Tu retrouves tes clés. Tu es ... .", opts: ['soulagé', 'relevé'], correct: 0, why: "Soulagé. EN: relieved.", items: [E(1100), E(1102), E(1107), E(1108), E(1109), E(1113)], audio: AUDIO },
  { id: 'd-suite', title: 'De ou que', format: 'sort' as const, coach: "Deux piles : une personne, de et l'infinitif ; deux personnes, que et le subjonctif. EN: count the subjects.", buckets: ['de + infinitif', 'que + subjonctif'], items: [E(1114), E(1115), E(1118), E(1117), E(1121), E(1123)], audio: AUDIO },
  { id: 'd-declic', title: "L'état ou le déclic", format: 'sort' as const, coach: "Deux piles : l'état qui dure, à l'imparfait ; le déclic, au passé composé. EN: state or trigger.", buckets: ["l'état qui dure", 'le déclic'], items: [E(1134), E(1141), E(1145), E(1135), E(1136), E(1144)], audio: AUDIO },
  { id: 'd-reagir', title: "D'abord comprendre", format: 'mcq' as const, coach: "Pour une mauvaise nouvelle, montre d'abord que tu comprends. Les conseils viennent après. EN: acknowledge first.", q: 'Ton amie a perdu son emploi. Tu dis :', opts: ['Ça doit être dur.', "Ce n'est pas grave."], correct: 0, why: "Tu comprends. EN: that must be hard.", items: [E(1148), E(1149), E(1150), E(1151), E(1158), E(1160)], audio: AUDIO },
  { id: 'd-message', title: 'Un message qui se suit', format: 'flashcard' as const, coach: "Lis le message, une phrase à la fois : sa nouvelle, ta réaction, ton histoire, la fin. EN: one move per sentence.", items: [E(1169), E(1171), E(1177), E(1168), E(1172), E(1174)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'excite-calque', description: 'Carries the English into the first sentence about a feeling (je suis excité for looking forward, je ressens content, je me sens de la joie).', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-hate', retest: 'd-hate' },
  { id: 'force-joie', description: 'Pitches joy at the wrong strength (aux anges for a sandwich) or gives it the wrong construction (content avec, donner plaisir, ravi pour for one’s own news).', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a11-mission'], drill: 'd-joie', retest: 'd-joie' },
  { id: 'decevoir-calque', description: 'Uses décevoir for to deceive, the -u word for a disappointing thing (un film déçu), or reads avoir de la peine the wrong way.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check', 'a11-mission'], drill: 'd-deception', retest: 'd-deception' },
  { id: 'colere-suite', description: 'Uses la colère as an adjective (elle est colère), gives anger the wrong preposition (en colère à, fâché à), or says fou for mad.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-colere', retest: 'd-colere' },
  { id: 'inquiet-pour', description: 'Worries de a person instead of pour, calls the cause stressé instead of stressant, or says donner peur for faire peur.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a11-mission'], drill: 'd-inquiet', retest: 'd-inquiet' },
  { id: 'ressent-cause', description: 'Swaps the person who feels and the thing that causes it (je suis gênant, un silence gêné), says fier pour, or uses confortable for a person.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-gene', retest: 'd-gene' },
  { id: 'soulage-calque', description: 'Says relevé for relieved, calls a reassuring thing rassuré, or puts the indicative after ça m’étonne que.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-soulagement', retest: 'd-soulagement' },
  { id: 'de-ou-que', description: 'Puts the indicative after a feeling and que (content que tu es), uses que with one subject (content que je parte), or says ça me fait triste.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-suite', retest: 'd-suite' },
  { id: 'etat-declic', description: 'Tells a sudden trigger in the imparfait (tout à coup, j’avais peur) or a lasting state in the passé composé, so the change in the feeling disappears.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-declic', retest: 'd-declic' },
  { id: 'reaction-deplacee', description: 'Answers someone’s feelings with a brush-off or advice first (ce n’est pas grave), the wrong formula for the news, or a register that does not fit the person.', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a11-mission'], drill: 'd-reagir', retest: 'd-reagir' },
  { id: 'message-plat', description: 'Writes the message without reacting to the friend’s news, or lists feelings with no change over time and no construction after them.', detectOn: ['a11-lecture', 'a11-plan', 'a11-mission'], drill: 'd-message', retest: 'd-message' },
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-35-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-35-maude': "Maude's message (act 1), ONE VOICE, one take, a Québec City woman in her late twenties reading her own message aloud: warm, a little breathless with the news, then quieter on « elle avait les larmes aux yeux ». Québec French. « J'ai hâte » is bright and natural.",
  'rec-b1-35-messages-ecoute': "REQUIRED FOR THE EAR MISSION (act 2): ten lines, ONE TAKE, in authored order, as a string of voicemails with good news. FOUR VOICES alternating (two women, two men, twenties to sixties), mixed francophone accents. Each line at the strength of its word: « content » is calm, « aux anges » glows, « sautaient de joie » is lively. A short beep-free pause between lines.",
  'rec-b1-35-piege-joie': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « J'ai hâte » keeps the aspirated h silent with no liaison: [ʒe ɑt].",
  'rec-b1-35-journal': "Samuel's diary (act 3), ONE VOICE, one take, a Brussels student of about twenty reading his diary at night: low, sincere, a little flat on « le moral à zéro », lifting slightly at the end. Belgian French welcome. The quoted line from Inès is read in his own voice, not acted.",
  'rec-b1-35-coloc': "The noisy night (act 4), THREE VOICES: a narrator, Léa (a Montréal woman in her twenties, whose annoyance climbs across the story from mild to angry, never shouting) and the learner. Québec French. A faint muffled bass under the narrator lines only.",
  'rec-b1-35-piege-colere': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « en colère contre » is one group, no pause before contre.",
  'rec-b1-35-stress': "The article on stress at work (act 5), ONE VOICE, one take, a Montréal radio health reporter: calm, clear, reassuring. Québec French. The quoted psychologist is read in the same voice with a small change of pace, not acted.",
  'rec-b1-35-reunion-ecoute': "REQUIRED FOR THE EAR MISSION (act 5): ten lines, ONE TAKE, in authored order, as colleagues talking in an office kitchen before a meeting. THREE VOICES taking turns, France and Québec French. Worry is audible but never dramatic; « Pas de panique » is light.",
  'rec-b1-35-pot': "The leaving party (act 6), FOUR VOICES: a narrator, Anne (a Geneva colleague, whispering « gênant »), Martine (in her sixties, warm, amused, not hurt) and the learner. Swiss French welcome. A short real silence after « Silence » in the first line.",
  'rec-b1-35-piege-gene': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « gêné » and « gênant » must be clearly different: [ʒɛ.ne] against [ʒɛ.nɑ̃].",
  'rec-b1-35-forum': "Claire's forum post (act 7), ONE VOICE, one take, a France woman in her thirties telling the story to friends: fast and tight through the panic, a real exhale on « Quel soulagement », laughing a little on the cousin. The employee's quoted line is read calmly.",
  'rec-b1-35-suite-ecoute': "REQUIRED FOR THE EAR MISSION (act 8): ten lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The subjunctive endings (partes, sois, ayez, prévienne, fasses) must be fully audible, and « de partir » against « que tu partes » must be clean: the questions depend on hearing who acts.",
  'rec-b1-35-piege-suite': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. Stress nothing: the learner must hear the subjunctive as ordinary French.",
  'rec-b1-35-blogue': "Koffi's blog (act 9), ONE VOICE, one take, an Ivorian man of about thirty living in Sherbrooke: warm, reflective, with a smile on « je fais même des blagues ». Ivorian French welcome. The imparfait passages are unhurried; « tout à coup, j'ai eu peur » quickens.",
  'rec-b1-35-courrier': "The advice column (act 10), TWO VOICES: Léa (a Geneva woman in her thirties, worried and a little lost) reads the letter; Sophie (a columnist in her fifties, kind and practical, never preachy) reads the answer. Swiss French welcome for Léa.",
  'rec-b1-35-piege-reagir': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. The formulas are said warmly, as to a friend, except the condolence line, which is quiet and respectful.",
  'rec-b1-35-reponse': "Julien's answer to Maude (act 11), ONE VOICE, one take, a Montréal man in his late twenties reading his message before sending it: warm on the congratulations, lively on the computer story, a real breath on « J'ai été tellement soulagé ». Québec French.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 35',
  intro: "Having « content » and « fâché » is not enough to say how you feel at B1: you need the word at the right strength (annoyed, irritated, angry, furious) and the construction it pulls after it (angry WITH someone, happy TO leave, happy THAT you are here, happy FOR you). This lesson teaches the vocabulary of joy, sadness, anger, fear, shame, pride, surprise and relief as word families and scales, the grammar feelings bring with them (de + infinitive or que + subjunctive), how to tell a feeling that changed over time with the imparfait and the passé composé, and how to react to someone else's news in the right register, with Québec forms marked as such. It ends with a message to a friend that reacts to their news and tells them about your week.",
  skill: 'PE',
  grammarAssumed: [PC_IMP_UNIT, PAIRES_UNIT, SUBJ_FORM_UNIT, SUBJ_DECL_UNIT, SUBJ_INF_UNIT, REGISTRES_UNIT, TU_VOUS_UNIT, CORPS_UNIT, ANIMAUX_UNIT, COULEURS_UNIT],
  grammarIntroduced: [
    'Feelings vocabulary taught as word families (verb, noun, the adjective of the person who feels, the adjective of what causes the feeling) and intensity scales for joy, anger and fear',
    'The -é / -u adjective of the person who feels against the -ant adjective of what causes the feeling: déçu / décevant, gêné / gênant, stressé / stressant, rassuré / rassurant',
    'The constructions feelings govern: de + infinitive with one subject against que + subjunctive with two; content pour, en colère contre, fâché contre / avec, s’inquiéter pour / de, avoir honte de, fier de, avoir hâte de, ça me rend + adjective',
    'Telling a feeling that changed: the imparfait for the lasting state, the passé composé for the moment it starts or ends, with au début, tout à coup, peu à peu, finir par, depuis + present',
    'Feelings false friends: excité, décevoir (not to deceive), relevé (not relieved), embarrassant for a person, fou for mad, confortable for a person',
    'Empathy formulas by register (familier, courant, soutenu) and the order acknowledge, then advise',
    'Québec forms presented as right in place: être tanné, avoir de la peine for être triste, capoter, fâché for en colère',
    'A 100 to 140 word personal message that reacts to a friend’s news and tells how a feeling changed over a week',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Avec content et fâché, tu ne dis pas vraiment ce que tu ressens. Cette leçon t'apprend les mots des émotions à la bonne force, avec leur suite : la joie, la tristesse, la colère, la peur, la honte, la surprise. Tu apprends aussi à raconter comment un sentiment a changé, et à réagir à la nouvelle d'un ami. À la fin, tu lui écris.",
    minutes: 140,
    difficulty: 3,
    glyph: 'cœur',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: EMOTIONS_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, MAUDE_TEXT, JOURNAL_TEXT, STRESS_TEXT, FORUM_TEXT, BLOGUE_TEXT, COURRIER_TEXT, REPONSE_TEXT, dicteeFor };

