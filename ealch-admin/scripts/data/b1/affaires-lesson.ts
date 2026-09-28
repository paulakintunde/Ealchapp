// b1.36.l1 « Le monde des affaires » · the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md, in the
// VOCAB SHAPE, TOPIC VARIANT, of B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 and §2.3.
// No new section types.
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
//   words in context (reading / listening / story / scene), learn them as
//   families and collocations (cardDeck: the noun, what you do with it, the
//   English, the variant), tell them apart (groupDrill), a lookup or
//   consolidation mission (examples / tapTable / dictation / flashcards /
//   focus / hacks), use them (groupDrill of real situations), trap the
//   English calque (trapDrill or commonErrors), check (gated control pages).
//
//    1  Un nom et ce qu'on en fait    7   the method; assister, fixer, respecter, passer; gérer / la gestion
//    2  L'entreprise et ses métiers   7   PME, siège, service, chiffre d'affaires, poste; diriger, vendre, produire, embaucher (tapTable)
//    3  La réunion                    7   ordre du jour, prendre la parole, faire le point, compte rendu; réunir
//    4  Le projet et le calendrier    7   retard, dans les temps, échéancier / planning, livrer, reporter; délai vs retard
//    5  Clients et prix               7   devis / soumission, facture, remise, négocier, HT / TTC (tapTable)
//    6  Commandes et contrats         7   passer, livrer, annuler une commande; conclure un contrat, un accord; lancer
//    7  Demander poliment             7   pourriez-vous, je me permets de, je vous serais reconnaissant, merci de
//    8  Ne pas être d'accord          7   pas tout à fait d'accord, votre point de vue, il me semble, un compromis
//    9  Tu ou vous au travail         7   passer au tu, garder le vous, never mix them in one message
//   10  Le courriel professionnel     7   objet, pièce jointe, copie, transférer; courriel / mail; sign-offs (tapTable)
//   11  À toi d'écrire au client     11   model message, plan, role play, TASK, practice, cheat, quiz
//
//   TOTAL 81 missions, 11 acts (7 x 10 + 11). 13 word-family rows, 54
//   collocation rows and 115 sentence rows, plus the imported polite and
//   email formulas. Six readings of 123 to 137 words (a welcome email,
//   meeting minutes, a client's request, a company newsletter, the reply
//   with the quote, the model message), three hideLines listenings, two
//   stories, one scene. Corpus: 182 authored rows (.1000-.1181) plus 34
//   reused seed rows, 216 item ids, released act by act through
//   `deckTranche` (three seed rows carry no flashcard drill: NOT_DECK_ABLE).
//   Quiz: 11 rounds of 8 (33 mcq, 22 typeIn, 22 errorSpot, 11
//   listenChoose). Eleven error triggers, eleven drills, five reference
//   sheets reached from 15 missions by `sheetId`, eleven terms. Three
//   tapTables (acts 2, 5, 10). 550 estimated screens.
//   Chapter artwork: `affaires-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Au travail, on n'apprend pas un nom : on apprend ce qu'on en fait. »
//   EN: At work you do not learn a noun: you learn what you do with it.
//
//   ONE METAPHOR, THE DESK AND ITS GESTURES. Every document on a desk waits
//   for a gesture: the quote is drawn up, the invoice settled, the order
//   placed, the deadline met, the meeting attended. The learner who knows
//   « une réunion » alone says « attendre la réunion » (act 1); the one who
//   knows what you do with it says « assister à la réunion ». A polite
//   request is the same idea one level up: a demand is something you
//   soften. It is NOT « learn the business words » (corpus REFRAME_REJECTED).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the business topic vocabulary of B1 as families and
//           collocations (the company, the meeting, the project, clients and
//           prices, orders and contracts); the business false friends
//           (assister / attendre, délai / retard, devis / citation, poste /
//           position, siège / quartiers généraux, livrer / délivrer, passer /
//           placer une commande, conditions / termes, objet / sujet, pièce
//           jointe / attachement, avoir raison sur un point); the Québec and
//           France business variants (soumission, échéancier, courriel,
//           planning, mail, HT / TTC, service à la clientèle, mise en
//           marché); the first professional email beat; the client message.
//   QUOTES  the conditional of politeness (lesson 9 in B1), tu and vous
//           (lesson 26 in B1) and register (lesson 25 in B1) BY NUMBER, with
//           their published rows imported, never retyped: « je me permets
//           de », « Seriez-vous disponible jeudi ? », « Devant un client, on
//           revient au vous. », « Bien cordialement », « l'objet ».
//   LEAVES  the formal letter and the full email genre to lesson 39 in B1
//           (named in acts 10 and 11 and in the roundup): no « Je vous prie
//           d'agréer », no letter layout, no email structure beyond greeting,
//           message, sign-off. The job search and the interview stay with
//           `recherche-emploi` (not taught here).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (Josée tutoie the learner, as Solane does; the client
//   and the supplier get vous). Every learner surface that explains
//   something carries English (`en`, or a final « EN: »), and NO ANSWER ever
//   does. Every `say` is French. Theme `affaires`, block 1000-1199 (corpus
//   §A). B1 citations are French from the plan (« la leçon 9 du B1 ») on
//   French surfaces and English (« lesson 9 in B1 ») on English ones, never
//   a raw unit id. Setting leans Canadian (Montréal, Laval, Québec usage)
//   with Lyon, Genève, Dakar and one Paris voice; every company is invented.
//   No bubble carries a « ? » or a « ! ». Answer slots are spread by
//   permuting options WITH their correct index (spreadMissionSlots,
//   spreadQuizSlots), never by editing content. One apostrophe style (the
//   straight one) in every scenario and every reading.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 81 missions in 11 acts, inside the vocab shape's 75-90. Keep, or
//      split acts 7 and 8 (requests, disagreement) into three acts?
//   2. `Lesson.skill` is 'PE': the task is a written message and the lesson
//      remediates written business French. Confirm.
//   3. Québec forms taught as right in place: une soumission, un
//      échéancier, un courriel, le service à la clientèle, la mise en
//      marché, Au plaisir, Salutations. Familier Québec anglicisms are
//      TRAPPED, never taught (placer une commande, canceller, la cédule,
//      forwarder, un bill, faire du sens, entendre de vous). Keep that line?
//   4. « le planning » (France) is taught as a courant variant, not as an
//      anglicism. Keep, or mark it familier?
//   5. The DB holds the bare nouns (une facture, un devis, un délai, un
//      courriel, une pièce jointe) as published b1 rows the seed does not
//      carry. This lesson authors no bare headword the DB has and lists 13
//      near twins in DB_ONLY_TWINS. Pull those DB rows into the seed at
//      import (so the lesson could name them), or keep as is?
//   6. Three tapTables (acts 2, 5, 10), one per act. Confirm three.
//   7. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.
//   8. The b1 house tests (answer slots, EN tails, integrity), the preview
//      generator and the import scripts do not list b1.36 yet; I was not
//      allowed to edit them. Their checks were replicated in the scratch
//      validation. Add « affaires » to their lists when the wave lands.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, refFr,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  BIENVENUE_TEXT, COMPTE_RENDU_TEXT, DEMANDE_TEXT, NOUVELLES_TEXT, REPONSE_TEXT, MESSAGE_TEXT,
  CONDITIONNEL_UNIT, POLITESSE_UNIT, INVERSION_UNIT, REGISTRES_UNIT, TUVOUS_UNIT, CONCESSION_UNIT,
  CONDITIONNEL_REF, POLITESSE_REF, INVERSION_REF, REGISTRES_REF, TUVOUS_REF, COURRIELS_REF,
  POLITESSE_REF_EN, TUVOUS_REF_EN, COURRIELS_REF_EN,
} from './affaires-corpus.ts';
import { AFFAIRES_TERMS } from './affaires-terms.ts';

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
  if (!r) throw new Error(`b1.36: no item ${id}`);
  return r;
}

/** NOT_SPEAKABLE is typed by hand in the corpus; hold it to the seed. */
for (const id of IMPORT_IDS) {
  const d = SEED.get(id)?.drills ?? [];
  if (!SEED.has(id)) throw new Error(`b1.36: import ${id} is not in the seed`);
  if (!NOT_SPEAKABLE.includes(id) && !d.includes('voiceflash')) throw new Error(`b1.36: ${id} has no voiceflash but is not in NOT_SPEAKABLE`);
  if (!NOT_DECK_ABLE.includes(id) && !d.includes('flashcard')) throw new Error(`b1.36: ${id} has no flashcard but is not in NOT_DECK_ABLE`);
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.36: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section. Authored rows only:
 *  some seed respellings close a nasal with a plain n. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`b1.36: no authored respell on ${id}`);
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

/** One card: the collocation or family, a label as the eyebrow, its
 *  respelling, and a body that goes meaning, gesture, English. */
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

/** The stepped trapDrill's four steps, the same in every act. */
const TRAP_STEPS = [
  { label: 'La règle', kind: 'rule' as const, title: 'Ce que le français fait' },
  { label: 'Six cartes', kind: 'cards' as const, title: 'Ce que la phrase fausse raconte' },
  { label: 'Écoute', kind: 'audio' as const, title: 'Écoute les six phrases correctes' },
  { label: 'À toi', kind: 'drill' as const, title: 'Huit phrases', gate: true },
];

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
 *  question. No `why` in this lesson names a position. */
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
 *  ACT 1 · UN NOM ET CE QU'ON EN FAIT
 *
 *  The method on four collocations and one family. The failure is the
 *  English verb: correct French words, « attendre la réunion ».
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Premier jour chez Solane',
  frSub: 'La réunion de dix heures',
  setting: { place: 'Les bureaux de Solane, boulevard Saint-Laurent', city: 'Montréal', time: 'lundi, 9 h 40', ambience: 'des lampes partout, un café qui coule, une salle de réunion vitrée' },
  beats: [
    {
      kind: 'narration',
      text: "Lundi matin, ton premier jour chez Solane, une PME de Montréal qui fabrique des lampes. Josée Paquette, la directrice des ventes, vient te chercher à l'accueil.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Josée',
      fr: "Bienvenue. À dix heures, on a la réunion d'équipe.",
      en: 'Welcome. At ten, we have the team meeting.',
      respell: '[byehⁿ-vuh-NÜ | a dee-ZUHR | ohⁿ-na la ray-ü-nyohⁿ day-KEEP]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Parfait. Je vais attendre la réunion de dix heures.',
      en: 'Great. I am going to wait for the ten o’clock meeting (word for word).',
      respell: '[par-FEH | zhuh veh a-tahⁿdr la ray-ü-NYOHⁿ duh dee-ZUHR]',
      stage: "Chaque mot est français. Le verbe, lui, vient de l'anglais : to attend.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Josée',
      fr: 'Attendre. Tu vas donc rester devant la porte pendant la réunion.',
      en: 'Wait. So you are going to stay outside the door during the meeting.',
      respell: '[a-TAHⁿDR | tü va dohⁿk rehs-TAY duh-vahⁿ la PORT | pahⁿ-dahⁿ la ray-ü-NYOHⁿ]',
      stage: 'Elle sourit. Elle a compris, mais elle te taquine un peu.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase dit que tu seras dans la salle ?',
      size: 'lg',
      options: [
        { fr: 'Je vais attendre la réunion de dix heures.', respell: '[zhuh veh a-tahⁿdr la ray-ü-NYOHⁿ duh dee-ZUHR]', en: 'I am going to wait for the ten o’clock meeting (word for word).', outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1005)), respell: rsOf(E(1005)), en: src(E(1005)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Josée hoche la tête et t'ouvre la porte de la salle. Tu t'assois à la table avec l'équipe.",
        breaks: "Josée rit encore. Elle t'explique : attendre, c'est rester dehors, sans rien faire.",
      },
    },
    {
      kind: 'break',
      heading: "On n'attend pas une réunion",
      body: "Tous tes mots étaient justes. Mais la réunion a son verbe : on y assiste. Attendre, c'est rester sans rien faire. Au travail, un nom s'apprend avec ce qu'on en fait. EN: Every word was French; the verb was English.",
      wrong: {
        fr: 'Je vais attendre la réunion de dix heures.',
        ipa: '/ʒə vɛ a.tɑ̃dʁ la ʁe.y.njɔ̃ də di.zœʁ/',
        respell: '[zhuh veh a-tahⁿdr la ray-ü-NYOHⁿ duh dee-ZUHR]',
        en: 'I am going to wait for the ten o’clock meeting (word for word).',
      },
      right: { fr: fr(E(1005)), ipa: ipaOf(E(1005)), respell: rsOf(E(1005)), en: src(E(1005)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Cette leçon te donne les mots du travail avec leurs gestes : l'entreprise, la réunion, le projet, les clients, les commandes, les demandes polies et le courriel. À la fin, tu écris à une cliente pour proposer une nouvelle date.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbe', 'fauxami'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Apprendre un nom avec son verbe', s: 'Acte 1 : assister, fixer, respecter, passer' },
    { t: "Parler de l'entreprise et de ses projets", s: 'Actes 2 à 4 : les métiers, la réunion, le calendrier' },
    { t: 'Parler aux clients', s: 'Actes 5 à 9 : les prix, les commandes, demander, nuancer, tu ou vous' },
    { t: 'Écrire à une cliente', s: 'Actes 10 et 11 : le courriel et ton message' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the welcome email. `questionsInModal` so the text comes
 *  first. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courriel de bienvenue',
  frSub: 'Lis, et cherche les verbes de chaque nom',
  text: BIENVENUE_TEXT,
  glossary: [
    { word: 'fournisseurs', en: 'suppliers', note: 'Les entreprises qui vendent à Solane ce qu’il faut pour fabriquer les lampes.' },
    { word: 'par vidéo', en: 'by video call', note: 'Chacun devant son écran, à distance.' },
    { word: 'la formation', en: 'the training', note: 'Un cours pour apprendre ton travail.' },
    { word: 'se tutoie', en: 'say tu to each other', note: 'Ici, les collègues se disent tu.' },
  ],
  questions: [
    { q: 'Que fais-tu lundi à dix heures ?', a: "Tu assistes à la réunion d'équipe, animée par Josée." },
    { q: 'Qui va t’expliquer comment on passe une commande ?', a: 'Marc-André Gagnon, le gestionnaire de projet.' },
    { q: 'Quel verbe le courriel met-il avec « les délais » ?', a: "Respecter : « chez Solane, on respecte les délais »." },
    { q: 'Avec qui garde-t-on le vous ?', a: 'Avec les clients. Entre collègues, on se tutoie.' },
  ],
  audio: REC('rec-b1-36-bienvenue'),
  say: REFRAME,
  terms: ['verbe', 'tuvous'],
};

/** LEARN: four collocations and one family. */
const A1_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-mots',
  title: 'Un nom et son verbe',
  frSub: 'Quatre gestes, une famille',
  hint: 'Cinq cartes. Pour chaque nom, regarde le verbe qui va avec.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbe', 'famille', 'fauxami'],
  cards: [
    card(E(1000), 'La réunion', 'son verbe',
      "Tu es dans la salle : tu assistes à la réunion. Attendre, c'est rester dehors. EN: to attend is assister à, never attendre."),
    card(E(1001), 'Le rendez-vous', 'son verbe',
      "On fixe un rendez-vous : on choisit le jour et l'heure. On dit aussi prendre rendez-vous. EN: to set up an appointment."),
    card(E(1002), 'Le délai', 'son verbe',
      "Le délai, c'est le temps qu'on te donne. On le respecte : on finit à temps. EN: to meet a deadline."),
    card(E(1003), 'La commande', 'son verbe',
      "On passe une commande, pas on la place. EN: to place an order is passer une commande."),
    card(E(1004), 'Toute une famille', 'la famille',
      "Le verbe gérer, l'action la gestion, la personne un gestionnaire. Quand tu en as un, cherche les autres. EN: one root, three words."),
  ],
};

/** TELL THEM APART: the noun and its verb, the word and its family. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Le nom, son verbe, sa famille',
  groups: [
    grp('Chaque nom a son verbe', [
      it(E(1005), 'la réunion : assister à'),
      it(E(1006), 'le rendez-vous : fixer'),
      it(E(1007), 'le délai : respecter'),
      it(E(1008), 'la commande : passer'),
    ], chk(
      'Que retiens-tu de ces phrases ?',
      ['le nom avec le verbe qui va avec', 'seulement le nom', 'seulement le verbe'], 0,
      "Assister à une réunion, respecter un délai : on apprend le bloc. EN: learn the noun with its verb.")),
    grp('Un mot, toute sa famille', [
      it(E(1011), 'le verbe : gérer'),
      it(E(1012), "l'action : la gestion"),
      it(E(1013), 'la personne : un gestionnaire'),
      it('fr.b1.bureau.005', "le verbe à l'infinitif"),
      it('fr.b1.affaires.001', 'le nom de la maison'),
    ], chk(
      'Gérer, la gestion, un gestionnaire, c’est...',
      ['trois mots sans lien', 'une famille : un verbe, une action, une personne'], 1,
      "Une racine, trois mots. EN: one root, three words.")),
    ctl('Le bon verbe', 'Pour dire to attend a meeting, tu dis...',
      ['attendre une réunion', 'assister à une réunion', 'aider une réunion'], 1,
      "Assister à : être présent. EN: assister à."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbe', 'famille'],
};

/** USE: where the four blocks do a real job. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où tu vas les dire',
  cases: [
    uc('Ta directrice te parle de la réunion de lundi', E(1005)),
    uc('Une cliente veut te voir cette semaine', E(1006)),
    uc("Ton équipe a fini en retard la dernière fois", E(1007)),
    uc('Un hôtel veut acheter quarante lampes', E(1008)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbe'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La réunion', 'To attend a meeting, en français :',
    ['assister à une réunion', 'attendre une réunion'], 0,
    "On assiste à la réunion. Attendre, c'est to wait. EN: assister à."),
  ctl('Le délai', 'Un délai : qu’est-ce qu’on en fait ?',
    ['on le fait', 'on le respecte', 'on le passe'], 1,
    "On respecte un délai. EN: respecter."),
  ctl('La famille', 'Quel mot est de la même famille que « gérer » ?',
    ['la gestion', 'la gare', 'le geste'], 0,
    "Gérer, la gestion, un gestionnaire. EN: la gestion, same root."),
], ['verbe', 'famille']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: "Un nom et ce qu'on en fait",
    opener: {
      line: "Une réunion, un délai, une commande : ici tu apprends chaque nom avec ce qu'on en fait. EN: A meeting, a deadline, an order: here you learn every noun with what you do with it.",
      imageRef: 'lessons/affaires/act01.jpg',
    },
    sections: [],
    milestone: "Tu dis assister à une réunion, fixer un rendez-vous, respecter un délai et passer une commande, sans traduire l'anglais. EN: You say the four blocks without translating from English.",
    estScreens: 34, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_CARTES, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 · L'ENTREPRISE ET SES MÉTIERS
 *
 *  The company and its roles: une PME, le siège, un service, le chiffre
 *  d'affaires, un poste; four families (diriger, vendre, produire,
 *  embaucher). The traps are English nouns carried over.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: Josée presents the company. `hideLines`: the questions are
 *  about what the ear caught. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Josée présente Solane',
  frSub: "Écoute, et retiens qui fait quoi, et où",
  lines: [
    ln(E(1023)), ln(E(1024)), ln(E(1025)), ln(E(1026)), ln(E(1030)),
    ln(E(1028)), ln(E(1027)), ln(E(1032)), ln(E(1029)), ln(E(1031)),
  ],
  questions: [
    { q: 'Solane, c’est...', opts: ['une PME', 'une multinationale'], correct: 0, why: "Trente-cinq employés : une petite ou moyenne entreprise. EN: a small business." },
    { q: 'Où est le siège ?', opts: ['à Lyon', 'à Montréal', 'à Laval'], correct: 1, why: "Le siège est à Montréal ; Lyon, c'est un bureau. EN: in Montréal." },
    { q: 'Où fabrique-t-on les lampes ?', opts: ['à Laval', 'à Lyon'], correct: 0, why: "La production se fait dans l'atelier de Laval. EN: in Laval." },
    { q: 'Combien de vendeurs Solane va-t-elle embaucher ?', opts: ['deux', 'quatre', 'trente-cinq'], correct: 0, why: "Deux vendeurs, cet automne. EN: two." },
    { q: 'Où le produit se vend-il bien ?', opts: ['en Europe', 'en Asie'], correct: 0, why: "Il se vend bien en Europe. EN: in Europe." },
  ],
  audio: REC('rec-b1-36-presentation-ecoute'),
  say: REFRAME,
  terms: ['verbe'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-mots',
  title: "L'entreprise et ses métiers",
  frSub: 'Quatre familles et deux blocs',
  hint: 'Six cartes. Regarde qui fait quoi.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'verbe'],
  cards: [
    card(E(1019), 'La taille', "l'entreprise",
      "Une PME, c'est une petite ou moyenne entreprise, comme Solane. EN: a small or medium-sized business."),
    card(E(1015), 'Qui dirige', 'la famille',
      "Diriger, la direction, un directeur, une directrice. La direction, c'est aussi l'équipe qui dirige. EN: to run, management, a director."),
    card(E(1016), 'Qui vend', 'la famille',
      "Vendre, la vente, un vendeur, une vendeuse. Le service des ventes, au pluriel. EN: to sell, a sale, a salesperson."),
    card(E(1018), 'Qui entre', 'la famille',
      "On embauche une personne : on lui donne un travail. On loue une voiture. EN: to hire, hiring."),
    card(E(1021), "L'argent des ventes", 'son verbe',
      "On réalise un chiffre d'affaires : tout l'argent des ventes, avant les dépenses. Ce n'est pas le bénéfice. EN: to generate revenue."),
    card(E(1022), 'Ta place', 'son verbe',
      "On occupe un poste. Une position, c'est une place ou une opinion. EN: to hold a position is occuper un poste."),
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Qui fait quoi chez Solane',
  groups: [
    grp('Les métiers et leurs verbes', [
      it(E(1026), 'diriger un service'),
      it(E(1029), 'embaucher des vendeurs'),
      it(E(1031), 'occuper un poste'),
      it(E(1034), "l'embauche, le nom"),
      it('fr.b1.affaires.002', "un entretien pour être embauché"),
    ], chk(
      'Diriger, embaucher, occuper : ce sont...',
      ['les verbes des métiers', 'des noms de métiers'], 0,
      "Chaque métier a son geste : diriger un service, occuper un poste. EN: the verbs of the jobs.")),
    grp("L'entreprise et ses chiffres", [
      it(E(1023), 'la taille : une PME'),
      it(E(1024), 'le siège'),
      it(E(1027), "le chiffre d'affaires"),
      it(E(1028), 'la production'),
    ], chk(
      "Le chiffre d'affaires, c'est...",
      ["l'argent de toutes les ventes", 'le bénéfice', 'le salaire du directeur'], 0,
      "Tout l'argent des ventes, avant les dépenses. EN: revenue.")),
    ctl('La famille', 'Dans la famille de « vendre », la personne :',
      ['la vente', 'un vendeur', 'le vendu'], 1,
      "Un vendeur, une vendeuse. La vente, c'est l'action. EN: a salesperson."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'verbe'],
};

/** NAME, as a lookup: six departments and their verb. A cut of the sheet. */
const A2_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-tableau',
  layer: 'core',
  sheetId: 'sheet-mots',
  title: 'Six services, six verbes',
  cols: ['Le service', 'Ce qu’il fait', 'Son verbe'],
  rows: [
    { cells: ['les ventes', 'trouver des clients', 'vendre'], say: fr(E(1026)),
      detail: { title: 'Le service des ventes', body: "Il vend les produits et suit les clients. EN: sales.", say: fr(E(1020)) } },
    { cells: ['la comptabilité', 'les factures, les chiffres', 'facturer'], say: fr(E(1030)),
      detail: { title: 'La comptabilité', body: "Elle facture les clients et règle les factures. EN: accounting.", say: 'La comptabilité règle les factures à la fin du mois.' } },
    { cells: ['les ressources humaines', 'les employés', 'embaucher'], say: fr(E(1034)),
      detail: { title: 'Les ressources humaines', body: "On dit souvent les RH. Elles embauchent et organisent la formation. EN: human resources, HR.", say: fr(E(1029)) } },
    { cells: ['la production', 'fabriquer', 'produire'], say: fr(E(1028)),
      detail: { title: 'La production', body: "L'atelier ou l'usine, où l'on fabrique les produits. EN: production.", say: fr(E(1032)) } },
    { cells: ['le marketing', 'faire connaître', 'lancer un produit'], say: fr(E(1104)),
      detail: { title: 'Le marketing', body: "Au Québec, on dit aussi la mise en marché. EN: marketing.", say: fr(E(1105)) } },
    { cells: ['le service à la clientèle', 'répondre aux clients', 'répondre'], say: 'Le service à la clientèle répond aux questions des clients.',
      detail: { title: 'Le service à la clientèle', body: "C'est le mot du Québec. En France : le service client. EN: customer service.", say: 'Le service client répond en moins de deux heures.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbe', 'variante'],
};

/** USE: real situations, the right word for the company. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon mot pour l’entreprise',
  groups: [
    ctl('Le siège', "Les bureaux principaux de Solane sont à Montréal. C'est...",
      ['le siège', 'la branche', 'le quartier général'], 0,
      "Le siège. Le quartier général, c'est pour l'armée. EN: the head office."),
    ctl('Le poste', 'Léa est gestionnaire depuis mars. Elle...',
      ['occupe une position de gestionnaire', 'occupe un poste de gestionnaire'], 1,
      "Un poste. EN: a job is un poste."),
    ctl('Embaucher', 'Solane cherche deux vendeurs. Elle va...',
      ['louer deux vendeurs', 'embaucher deux vendeurs'], 1,
      "On embauche une personne. EN: to hire someone."),
    ctl('Le résultat', "Quatre millions de ventes en un an : c'est...",
      ["le chiffre d'affaires", 'le salaire', 'le budget'], 0,
      "L'argent de toutes les ventes. EN: revenue."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbe', 'fauxami'],
};

/** TRAP, stepped: English nouns and verbs carried over. */
const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: "Les faux amis de l'entreprise",
  rule: {
    title: 'Un service, un poste, un siège',
    body: "L'anglais donne department, position, headquarters, branch, hire. Le français dit un service, un poste, le siège, un bureau, embaucher. EN: five English words that do not cross.",
  },
  cards: [
    { promptLabel: 'department', promptSound: 'Josée dirige le département des ventes.', fr: fr(E(1026)), ipa: ipaOf(E(1026)), tip: "Dans une entreprise, on dit un service. EN: a department is un service." },
    { promptLabel: 'sells well', promptSound: 'Ce produit vend bien en Europe.', fr: fr(E(1032)), ipa: ipaOf(E(1032)), tip: "Le produit se vend : il est vendu. EN: sells well is se vend bien." },
    { promptLabel: 'position', promptSound: 'Elle occupe une position de gestionnaire depuis mars.', fr: fr(E(1031)), ipa: ipaOf(E(1031)), tip: "Un poste. Une position, c'est une place ou une opinion. EN: a job is un poste." },
    { promptLabel: 'hire', promptSound: 'Nous allons louer deux vendeurs cet automne.', fr: fr(E(1029)), ipa: ipaOf(E(1029)), tip: "On loue une voiture ; on embauche une personne. EN: hire a person is embaucher." },
    { promptLabel: 'headquarters', promptSound: "Les quartiers généraux de l'entreprise sont à Montréal.", fr: fr(E(1024)), ipa: ipaOf(E(1024)), tip: "Pour une entreprise, le siège. EN: head office is le siège." },
    { promptLabel: 'branch', promptSound: 'Nous avons ouvert une branche à Lyon il y a deux ans.', fr: fr(E(1025)), ipa: ipaOf(E(1025)), tip: "Un bureau, ou une succursale. Une branche, c'est un secteur. EN: a branch office is un bureau." },
  ],
  drill: [
    { promptSay: 'Josée dirige le ... des ventes.', opts: ['service', 'département'], correct: 0 },
    { promptSay: 'Ce produit ... bien en Europe.', opts: ['vend', 'se vend'], correct: 1 },
    { promptSay: 'Elle occupe un ... de gestionnaire.', opts: ['poste', 'position'], correct: 0 },
    { promptSay: 'Nous allons ... deux vendeurs.', opts: ['louer', 'embaucher'], correct: 1 },
    { promptSay: "Le ... de l'entreprise est à Montréal.", opts: ['siège', 'quartier général'], correct: 0 },
    { promptSay: 'Nous avons ouvert ... à Lyon.', opts: ['une branche', 'un bureau'], correct: 1 },
    { promptSay: "Nous avons ... un chiffre d'affaires de quatre millions.", opts: ['réalisé', 'gagné'], correct: 0 },
    { promptSay: 'La ... se fait dans notre atelier de Laval.', opts: ['production', 'produit', 'producteur'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-b1-36-piege-entreprise'),
  say: REFRAME,
  terms: ['fauxami', 'verbe'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le service', 'The sales department :',
    ['le département des ventes', 'le service des ventes'], 1,
    "Un service. EN: le service des ventes."),
  ctl('Le chiffre', "Le chiffre d'affaires, c'est...",
    ["l'argent des ventes", 'le bénéfice'], 0,
    "Le bénéfice, c'est ce qui reste après les dépenses. EN: revenue, not profit."),
  ctl('La famille', 'Diriger, la direction, ... :',
    ['un directeur', 'un dirigeable', 'une directive'], 0,
    "La personne : un directeur, une directrice. EN: a director."),
], ['famille', 'fauxami']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: "L'entreprise et ses métiers",
    opener: {
      line: "Un siège à Montréal, un atelier à Laval, un bureau à Lyon : ici tu dis qui fait quoi dans une entreprise. EN: A head office, a workshop, a branch office: here you say who does what in a company.",
      imageRef: 'lessons/affaires/act02.jpg',
    },
    sections: [],
    milestone: "Tu présentes une entreprise, ses services et ses métiers, chacun avec son verbe. EN: You present a company, its departments and its jobs, each with its verb.",
    estScreens: 42, restPoints: ['a2-construire', 'a2-choisir'],
  },
  sections: [A2_ECOUTE, A2_CARTES, A2_CONSTRUIRE, A2_TABLEAU, A2_CHOISIR, A2_PIEGE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 · LA RÉUNION
 *
 *  The meeting and its gestures: l'ordre du jour, prendre la parole, faire
 *  le point, animer, prendre des notes, rédiger le compte rendu; réunir /
 *  se réunir / une réunion. Traps: minutes, agenda, item.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the minutes of Monday's meeting. */
const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le compte rendu du lundi',
  frSub: 'Lis, et cherche ce que chacun a fait',
  text: COMPTE_RENDU_TEXT,
  glossary: [
    { word: 'Présents', en: 'Attendees', note: 'Les personnes qui ont assisté à la réunion.' },
    { word: 'en hausse', en: 'up, rising', note: 'Plus haut que le mois dernier.' },
    { word: 'le salon', en: 'the trade show', note: 'Une grande exposition où les entreprises montrent leurs produits.' },
    { word: 'aura lieu', en: 'will take place', note: 'Le futur de avoir lieu : se passer.' },
  ],
  questions: [
    { q: 'Qui a animé la réunion, et qui a pris des notes ?', a: 'Josée a animé la réunion ; Léa a pris des notes et a rédigé le compte rendu.' },
    { q: "Combien de points à l'ordre du jour ?", a: 'Trois : les ventes du mois, le projet Rivière, le salon de Toronto.' },
    { q: 'Quel est le problème du projet Rivière ?', a: 'Le fournisseur de Dakar a pris du retard sur les pieds en métal.' },
    { q: 'Trouve trois gestes de la réunion dans le texte.', a: "Animer la réunion, prendre des notes, faire le point, prendre la parole, rédiger le compte rendu." },
  ],
  audio: REC('rec-b1-36-compte-rendu'),
  say: REFRAME,
  terms: ['reunion', 'verbe'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-reunion',
  title: 'Les gestes de la réunion',
  frSub: 'Avant, pendant, après',
  hint: 'Six cartes, dans l’ordre de la réunion.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['reunion', 'fauxami'],
  cards: [
    card(E(1035), 'Avant : le programme', 'la réunion',
      "L'ordre du jour, c'est la liste des points. Un agenda, c'est ton carnet de rendez-vous. EN: the agenda of a meeting."),
    card(E(1039), 'Qui mène', 'la réunion',
      "Animer une réunion : donner la parole, suivre l'ordre du jour, finir à l'heure. EN: to lead a meeting."),
    card(E(1036), 'Parler', 'la réunion',
      "Tu prends la parole quand tu veux dire quelque chose. EN: to take the floor."),
    card(E(1037), 'Où on en est', 'la réunion',
      "On fait le point sur un projet : ce qui est fait, ce qui reste. EN: to review where things stand."),
    card(E(1041), 'Occupé', 'la réunion',
      "Tu es en réunion : on ne te dérange pas, tu rappelles plus tard. EN: to be in a meeting."),
    card(E(1038), 'Après', 'la réunion',
      "On rédige le compte rendu. Les minutes, en français, ce sont des minutes de temps. EN: to write up the minutes."),
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Avant, pendant, après',
  groups: [
    grp('Pendant la réunion', [
      it(E(1042), "l'ordre du jour"),
      it(E(1043), 'animer'),
      it(E(1044), 'prendre la parole'),
      it(E(1048), 'prendre des notes'),
      it('fr.a1.ecole.105', 'le bloc seul'),
      it('fr.a2.collegues.005', 'le mot de base'),
    ], chk(
      'Ces phrases disent ce qu’on fait...',
      ['pendant la réunion', 'après la réunion'], 0,
      "Suivre l'ordre du jour, animer, parler, noter. EN: during the meeting.")),
    grp('Après la réunion', [
      it(E(1046), 'rédiger le compte rendu'),
      it(E(1051), 'envoyer le compte rendu'),
      it(E(1049), 'reporter la réunion'),
      it('fr.b1.opinions-et-avis.1552', 'repousser : reporter'),
    ], chk(
      'Le compte rendu, on le...',
      ['rédige, puis on l’envoie', 'anime, puis on l’écoute'], 0,
      "On rédige le compte rendu, puis on l'envoie. EN: you write up the minutes, then send them.")),
    ctl('La famille', "Toute l'équipe ... le lundi.",
      ['se réunit', 'réunit', 'réunion'], 0,
      "L'équipe se réunit ; Josée réunit l'équipe. EN: meets."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reunion', 'famille'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'La réunion en six phrases',
  examples: [
    ex(E(1040), "la famille : réunir quelqu'un, se réunir, une réunion"),
    ex(E(1047), 'le verbe pronominal : l’équipe se réunit'),
    ex(E(1050), 'être en réunion : on ne peut pas la déranger'),
    ex(E(1052), 'passer au point suivant : on avance'),
    ex('fr.b1.pronoms-essentiels.1144', 'les notes, après la réunion'),
    ex(E(1053), 'faire le point en une phrase'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reunion', 'famille'],
};

/** USE: real situations. */
const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon geste au bon moment',
  groups: [
    ctl('Parler', 'Tu as une idée pendant la réunion. Tu dis :',
      ['Est-ce que je peux prendre la parole ?', 'Est-ce que je peux avoir le plancher ?'], 0,
      "Prendre la parole. EN: to take the floor."),
    ctl('Le programme', 'Josée envoie la liste des points avant la réunion. C’est...',
      ["l'agenda", "l'ordre du jour", 'le compte rendu'], 1,
      "L'ordre du jour : les points de la réunion. EN: the agenda."),
    ctl('Où on en est', 'Marc-André explique ce qui est fait et ce qui reste. Il...',
      ['fait le point', 'fait la réunion'], 0,
      "Faire le point. EN: to review where things stand."),
    ctl('Après', "Léa écrit ce qu'on a décidé et l'envoie à tous. Elle...",
      ['rédige les minutes', 'prend la parole', 'rédige le compte rendu'], 2,
      "Le compte rendu. EN: the minutes."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reunion'],
};

/** TRAP: the English meeting words. */
const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de réunion',
  errors: [
    { wrong: 'Je vais attendre la réunion de dix heures.', right: fr(E(1005)),
      why: "Normal : to attend ressemble à attendre. Mais attendre, c'est to wait. EN: to attend is assister à." },
    { wrong: "Qui rédige les minutes aujourd'hui ?", right: fr(E(1046)),
      why: "Normal : en anglais, the minutes. En français, les minutes sont du temps. EN: the minutes are le compte rendu." },
    { wrong: "Le premier point sur l'agenda, c'est le budget.", right: fr(E(1042)),
      why: "Un agenda existe : c'est ton carnet de rendez-vous. La liste des points, c'est l'ordre du jour. EN: a meeting's agenda is l'ordre du jour." },
    { wrong: 'Passons au prochain item.', right: fr(E(1052)),
      why: "On l'entend au Québec, en réunion, mais c'est de l'anglais. Dis le point suivant. EN: the next item is le point suivant." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reunion', 'fauxami'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le programme', 'The agenda of a meeting :',
    ["l'ordre du jour", "l'agenda"], 0,
    "L'ordre du jour. EN: l'ordre du jour."),
  ctl('Après', 'The minutes :',
    ['les minutes', 'le compte rendu'], 1,
    "Le compte rendu. EN: le compte rendu."),
  ctl('La famille', 'Le lundi, l’équipe...',
    ['se réunit', 'réunion', 'se réunion'], 0,
    "Se réunir : elle se réunit. EN: meets."),
], ['reunion', 'famille']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La réunion',
    opener: {
      line: "Un ordre du jour, une main levée, un compte rendu : ici tu fais tous les gestes d'une réunion. EN: An agenda, a raised hand, the minutes: here you make every move of a meeting.",
      imageRef: 'lessons/affaires/act03.jpg',
    },
    sections: [],
    milestone: "Tu assistes à une réunion, tu prends la parole, tu fais le point et tu rédiges le compte rendu. EN: You attend a meeting, speak up, review progress and write up the minutes.",
    estScreens: 38, restPoints: ['a3-construire', 'a3-choisir'],
  },
  sections: [A3_LECTURE, A3_CARTES, A3_CONSTRUIRE, A3_EXEMPLES, A3_CHOISIR, A3_ERREURS, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 · LE PROJET ET LE CALENDRIER
 *
 *  prendre du retard, être dans les temps, un échéancier (Québec) / le
 *  planning (France), livrer / la livraison, avancer, reporter. The big
 *  false friend: un délai is the time allowed; a delay is un retard.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: five voicemails about the Rivière project. `hideLines`. */
const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La boîte vocale du projet',
  frSub: 'Écoute, et dis si le projet est en retard',
  lines: [
    ln(E(1067)), ln(E(1063)), ln(E(1064)), ln(E(1065)), ln(E(1062)),
    ln(E(1071)), ln(E(1069)), ln(E(1066)), ln(E(1068)), ln(E(1070)),
  ],
  questions: [
    { q: 'Au début, le projet...', opts: ['avance bien', 'est annulé'], correct: 0, why: "Il avance bien, et l'équipe est dans les temps. EN: it is going well." },
    { q: 'Qui a pris du retard ?', opts: ['la cliente', 'le fournisseur', 'Marc-André'], correct: 1, why: "Le fournisseur a pris du retard. EN: the supplier." },
    { q: 'Combien de semaines de retard sur le calendrier du projet ?', opts: ['deux', 'six'], correct: 0, why: "Deux semaines de retard. Six semaines, c'est autre chose. EN: two weeks." },
    { q: 'Six semaines, c’est...', opts: ['le retard', 'le délai de livraison'], correct: 1, why: "Le délai : le temps normal pour livrer. EN: the lead time." },
    { q: 'La cliente veut être livrée...', opts: ['après Noël', 'avant Noël'], correct: 1, why: "Avant Noël. EN: before Christmas." },
  ],
  audio: REC('rec-b1-36-boite-vocale-ecoute'),
  say: REFRAME,
  terms: ['delai'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-reunion',
  title: 'Le projet et son calendrier',
  frSub: 'À temps, en retard, livré',
  hint: 'Six cartes. Regarde le verbe qui va avec le temps.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['delai', 'variante', 'famille'],
  cards: [
    card(E(1054), 'Trop lent', 'le délai',
      "On prend du retard : on dépasse le temps prévu. EN: to fall behind."),
    card(E(1055), 'À l’heure', 'le délai',
      "On est dans les temps : tout va comme prévu. EN: to be on schedule."),
    card(E(1056), 'Le calendrier, au Québec', 'la variante',
      "L'échéancier : les étapes et leurs dates. En France, on dit souvent le planning. EN: a project timeline."),
    card(E(1057), 'Le calendrier, en France', 'la variante',
      "Le planning, courant en France. Au Québec, on dit plutôt l'échéancier ou l'horaire. EN: the schedule."),
    card(E(1058), 'Apporter la commande', 'la famille',
      "Livrer, la livraison, un livreur. Pas délivrer : on délivre un permis. EN: to deliver, delivery."),
    card(E(1059), 'Aller en avant', 'la famille',
      "Le projet avance ; on fait le point sur l'avancement. EN: to progress, progress."),
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Dans les temps ou en retard',
  groups: [
    grp('Dans les temps', [
      it(E(1067), 'avancer'),
      it(E(1063), 'être dans les temps'),
      it(E(1065), 'la livraison prévue'),
      it(E(1073), "l'étape suivante"),
    ], chk(
      'Ces phrases disent que le projet...',
      ['va comme prévu', 'est en retard'], 0,
      "Il avance, on est dans les temps. EN: on track.")),
    grp('En retard', [
      it(E(1062), 'prendre du retard'),
      it(E(1069), 'deux semaines de retard'),
      it(E(1068), 'reporter la date'),
      it(E(1071), 'un retard de trois jours'),
      it('fr.b1.heure-et-date.028', 'reporter, au quotidien'),
    ], chk(
      'Pour dire a delay, ces phrases disent...',
      ['un délai', 'un retard'], 1,
      "Un retard, c'est le temps de trop. EN: a delay is un retard.")),
    ctl('Le délai', 'Le délai de livraison est de six semaines. Six semaines, c’est...',
      ['le temps normal pour livrer', 'le retard'], 0,
      "Le délai : le temps accordé. EN: the lead time."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['delai'],
};

const A4_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a4-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  itemIds: dicteeFor(4),
  audio: AUDIO,
  say: REFRAME,
  terms: ['delai'],
};

const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon mot pour le temps',
  groups: [
    ctl('Le fournisseur', 'Les pieds en métal arrivent trois jours après la date. Tu écris :',
      ['Il y a un délai de trois jours.', 'Il y a un retard de trois jours.'], 1,
      "Un retard : le temps de trop. EN: a delay."),
    ctl('Le devis', 'La cliente demande combien de temps il faut pour livrer. Tu parles...',
      ['du délai de livraison', 'du retard de livraison'], 0,
      "Le délai : le temps normal. EN: the lead time."),
    ctl('La livraison', 'Les lampes arrivent à l’hôtel. On les...',
      ['délivre', 'livre', 'déliver'], 1,
      "On livre une commande. EN: deliver is livrer."),
    ctl('Le calendrier', 'À Montréal, Marc-André envoie les étapes et leurs dates. Il envoie...',
      ["l'échéancier", 'la cédule'], 0,
      "L'échéancier. La cédule, on l'entend, mais c'est un anglicisme. EN: the timeline."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['delai', 'variante'],
};

/** TRAP, stepped: délai against retard, livrer against délivrer. */
const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Délai ou retard',
  rule: {
    title: 'Le délai, on le respecte ; le retard, on le prend',
    body: "Un délai, c'est le temps qu'on te donne. Un retard, c'est quand tu le dépasses. Et on livre une commande : délivrer, c'est pour un permis. EN: délai is the time allowed, a delay is un retard.",
  },
  cards: [
    { promptLabel: 'a delay', promptSound: 'Désolé, il y a un délai de trois jours.', fr: fr(E(1071)), ipa: ipaOf(E(1071)), tip: "Trois jours de trop : un retard. EN: a delay is un retard." },
    { promptLabel: 'fell behind', promptSound: 'Le fournisseur a pris du délai.', fr: fr(E(1062)), ipa: ipaOf(E(1062)), tip: "On prend du retard. EN: to fall behind." },
    { promptLabel: 'behind schedule', promptSound: "On a deux semaines de délai sur l'échéancier.", fr: fr(E(1069)), ipa: ipaOf(E(1069)), tip: "Deux semaines de trop : du retard. EN: two weeks behind." },
    { promptLabel: 'lead time', promptSound: 'Le retard de livraison est de six semaines.', fr: fr(E(1070)), ipa: ipaOf(E(1070)), tip: "Six semaines, c'est le temps normal : le délai. EN: the lead time is le délai." },
    { promptLabel: 'delivered', promptSound: 'La cliente veut être délivrée avant Noël.', fr: fr(E(1066)), ipa: ipaOf(E(1066)), tip: "On livre un client. Délivrer, c'est donner un papier officiel. EN: delivered is livré." },
    { promptLabel: 'schedule', promptSound: 'Pour le moment, nous sommes sur la cédule.', fr: fr(E(1063)), ipa: ipaOf(E(1063)), tip: "La cédule, on l'entend au Québec, mais c'est de l'anglais. Dis : dans les temps. EN: on schedule." },
  ],
  drill: [
    { promptSay: 'Désolé, il y a un ... de trois jours.', opts: ['délai', 'retard'], correct: 1 },
    { promptSay: 'Le fournisseur a pris du ... .', opts: ['retard', 'délai'], correct: 0 },
    { promptSay: 'Le ... de livraison est de six semaines.', opts: ['délai', 'retard'], correct: 0 },
    { promptSay: 'La cliente veut être ... avant Noël.', opts: ['délivrée', 'livrée'], correct: 1 },
    { promptSay: 'Pour le moment, nous sommes dans les ... .', opts: ['temps', 'délais', 'horaires'], correct: 0 },
    { promptSay: 'Cette fois, nous allons ... le délai.', opts: ['respecter', 'prendre'], correct: 0 },
    { promptSay: 'Nous devons ... la date de livraison.', opts: ['reporter', 'retarder de'], correct: 0 },
    { promptSay: 'Marc-André a envoyé l’... à toute l’équipe.', opts: ['échéancier', 'agenda'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-b1-36-piege-delai'),
  say: REFRAME,
  terms: ['delai', 'fauxami'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le mot', 'A delay, en français :',
    ['un délai', 'un retard'], 1,
    "Un retard. Le délai, c'est le temps accordé. EN: un retard."),
  ctl('Le verbe', 'Le fournisseur a ... du retard.',
    ['pris', 'fait', 'eu de'], 0,
    "Prendre du retard. EN: pris."),
  ctl('La variante', 'Au Québec, le calendrier des étapes d’un projet :',
    ['la cédule', "l'échéancier"], 1,
    "L'échéancier. EN: the timeline."),
], ['delai', 'variante']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Le projet et le calendrier',
    opener: {
      line: "Une date sur le calendrier, un fournisseur en retard, une cliente qui attend : ici tu parles du temps d'un projet. EN: A date on the calendar, a late supplier, a client waiting: here you talk about a project's time.",
      imageRef: 'lessons/affaires/act04.jpg',
    },
    sections: [],
    milestone: "Tu dis si un projet est dans les temps ou en retard, et tu ne confonds plus délai et retard. EN: You say whether a project is on schedule or behind, and délai no longer fools you.",
    estScreens: 40, restPoints: ['a4-construire', 'a4-choisir'],
  },
  sections: [A4_ECOUTE, A4_CARTES, A4_CONSTRUIRE, A4_DICTEE, A4_CHOISIR, A4_PIEGE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 · CLIENTS ET PRIX
 *
 *  faire un devis / une soumission (Québec), régler une facture, accorder
 *  une remise, négocier, facturer, hors taxes / toutes taxes comprises,
 *  revoir un prix à la baisse.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the hotel's request for a quote. */
const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "La demande de l'hôtel",
  frSub: 'Lis, et cherche ce que la cliente demande',
  text: DEMANDE_TEXT,
  glossary: [
    { word: 'gérante', en: 'manager (of a hotel, a shop)', note: 'La personne qui dirige l’hôtel.' },
    { word: 'lampes de chevet', en: 'bedside lamps', note: 'Les petites lampes à côté du lit.' },
    { word: 'rouvre', en: 'reopens', note: 'Du verbe rouvrir : ouvrir de nouveau.' },
    { word: 'conditions de paiement', en: 'payment terms', note: 'Quand et comment on paie.' },
  ],
  questions: [
    { q: 'Que demande la cliente ?', a: 'Un devis pour quarante lampes Aurore, livraison comprise.' },
    { q: 'Pour quand veut-elle les lampes ?', a: "Avant le quinze décembre, parce que l'hôtel rouvre le vingt." },
    { q: 'Quelle question pose-t-elle sur le prix ?', a: 'Si Solane accorde une remise pour une commande de cette taille.' },
    { q: 'Comment règle-t-elle ses factures, en général ?', a: 'À trente jours.' },
  ],
  audio: REC('rec-b1-36-demande'),
  say: REFRAME,
  terms: ['devis', 'demande'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-clients',
  title: 'Le prix, avant et après',
  frSub: 'Devis, facture, remise',
  hint: 'Six cartes. Le devis vient avant, la facture après.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['devis', 'variante', 'famille'],
  cards: [
    card(E(1074), 'Avant le travail', 'le devis',
      "On fait un devis : on annonce le prix avant de travailler. Pas une citation. EN: to draw up a quote."),
    card(E(1075), 'Le devis, au Québec', 'la variante',
      "Au Québec, on demande aussi une soumission, surtout pour des travaux. EN: a quote or bid in Québec."),
    card(E(1076), 'Après le travail', 'le devis',
      "On règle une facture : on la paie. Pas payer pour. EN: to settle an invoice."),
    card(E(1077), 'Moins cher', 'le devis',
      "On accorde une remise. Au Québec, on parle souvent d'un rabais. EN: to give a discount."),
    card(E(1078), 'Discuter le prix', 'la famille',
      "Négocier, la négociation, un négociateur : on discute pour trouver un prix. EN: to negotiate."),
    card(E(1080), 'Avec ou sans taxes', 'la variante',
      "En France, HT et TTC. Au Québec, avant taxes et taxes incluses. EN: before tax, all taxes included."),
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Avant et après le travail',
  groups: [
    grp('Avant : le devis', [
      it(E(1081), 'demander un devis'),
      it('fr.b1.conseils-et-suggestions.1059', 'demander poliment'),
      it(E(1083), 'la durée du devis'),
      it(E(1090), 'trop élevé'),
      it(E(1091), 'revoir à la baisse'),
    ], chk(
      'Toutes ces phrases parlent du prix...',
      ['avant le travail', 'après le travail'], 0,
      "Le devis annonce le prix. EN: before the work.")),
    grp('Après : la facture', [
      it(E(1088), 'envoyer la facture'),
      it(E(1084), 'régler la facture'),
      it(E(1085), 'accorder une remise'),
      it(E(1086), 'hors taxes'),
    ], chk(
      'La cliente a réglé la facture : elle l’a...',
      ['payée', 'refusée', 'écrite'], 0,
      "Régler, c'est payer. EN: settled means paid.")),
    ctl('La famille', 'Dans la famille de « négocier », la personne :',
      ['la négociation', 'un négociateur'], 1,
      "Un négociateur, une négociatrice. EN: a negotiator."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['devis', 'famille'],
};

/** NAME, as a lookup: six documents. A cut of the sheet's table. */
const A5_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-tableau',
  layer: 'core',
  sheetId: 'sheet-clients',
  title: 'Six papiers, six verbes',
  cols: ['Le papier', 'Quand', 'Son verbe'],
  rows: [
    { cells: ['le devis', 'avant : le prix proposé', 'faire, envoyer'], say: fr(E(1083)),
      detail: { title: 'Le devis', body: "Il annonce le prix avant le travail, pour un certain temps. EN: a quote.", say: fr(E(1081)) } },
    { cells: ['la soumission', 'avant, au Québec', 'présenter'], say: fr(E(1082)),
      detail: { title: 'La soumission', body: "Au Québec, surtout pour des travaux ou un appel d'offres. EN: a bid, in Québec.", say: 'Trois entreprises ont présenté une soumission.' } },
    { cells: ['le bon de commande', 'le client dit oui', 'signer'], say: fr(E(1109)),
      detail: { title: 'Le bon de commande', body: "Le papier signé qui dit oui à la commande. EN: a purchase order.", say: fr(E(1101)) } },
    { cells: ['le contrat', 'les conditions des deux', 'conclure'], say: fr(E(1103)),
      detail: { title: 'Le contrat', body: "Il dit ce que chacun doit faire. On le lit avant de signer. EN: a contract.", say: fr(E(1110)) } },
    { cells: ['la facture', 'après : le prix à payer', 'régler'], say: fr(E(1088)),
      detail: { title: 'La facture', body: "Elle demande l'argent après le travail. On la règle. EN: an invoice.", say: fr(E(1084)) } },
    { cells: ['le reçu', 'la preuve du paiement', 'garder'], say: 'Voici votre reçu, merci.',
      detail: { title: 'Le reçu', body: "Tu as payé : le reçu le prouve. EN: a receipt.", say: 'Garde bien le reçu pour la comptabilité.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['devis', 'verbe'],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon mot pour le prix',
  groups: [
    ctl('La demande', "L'hôtel veut connaître le prix avant de commander. Il demande...",
      ['une facture', 'un devis', 'un reçu'], 1,
      "Le devis vient avant. EN: a quote."),
    ctl('Moins cher', 'Tu baisses le prix pour une grosse commande. Tu...',
      ['accordes une remise', 'fais un discount'], 0,
      "On accorde une remise. EN: to give a discount."),
    ctl('Payer', 'La cliente a payé ce que Solane lui demandait. Elle a...',
      ['réglé la facture', 'payé pour la facture'], 0,
      "Régler la facture, sans pour. EN: settled the invoice."),
    ctl('Le prix', 'En France, un prix sans les taxes, c’est un prix...',
      ['toutes taxes comprises', 'hors taxes'], 1,
      "HT : hors taxes. EN: before tax."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['devis'],
};

/** TRAP: the English money words. */
const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: "Quatre erreurs d'argent",
  errors: [
    { wrong: 'Pourriez-vous nous faire une citation pour quarante lampes ?', right: fr(E(1081)),
      why: "Normal : a quote, une citation. Mais une citation, ce sont les mots de quelqu'un. EN: a price quote is un devis." },
    { wrong: 'La cliente a payé pour la facture avec un mois de retard.', right: fr(E(1084)),
      why: "Normal : en anglais, pay for. En français, on paie ou on règle une facture, sans pour. EN: no pour." },
    { wrong: 'Nous vous enverrons le bill à la livraison.', right: fr(E(1088)),
      why: "Le bill, on l'entend au Québec, entre amis. Dans le travail, c'est la facture. EN: the invoice is la facture." },
    { wrong: 'Nous pouvons vous accorder un discount de dix pour cent.', right: fr(E(1085)),
      why: "Un discount, en français, c'est un magasin pas cher. Pour baisser un prix : une remise. EN: a discount is une remise." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['devis', 'fauxami'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Avant', 'A quote, en France :',
    ['une citation', 'un devis'], 1,
    "Un devis. EN: un devis."),
  ctl('La remise', 'On ... une remise.',
    ['accorde', 'paie', 'règle'], 0,
    "Accorder une remise. EN: to give."),
  ctl('La facture', 'On ... une facture.',
    ['règle', 'paie pour'], 0,
    "On règle une facture, sans pour. EN: to settle."),
], ['devis', 'fauxami']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Clients et prix',
    opener: {
      line: "Un hôtel de Lyon demande un prix pour quarante lampes : ici tu parles de devis, de factures et de remises. EN: A Lyon hotel asks for a price for forty lamps: here you talk about quotes, invoices and discounts.",
      imageRef: 'lessons/affaires/act05.jpg',
    },
    sections: [],
    milestone: "Tu fais un devis, tu accordes une remise et tu parles de facture sans calque anglais. EN: You draw up a quote, give a discount and talk invoices with no English calque.",
    estScreens: 42, restPoints: ['a5-construire', 'a5-choisir'],
  },
  sections: [A5_LECTURE, A5_CARTES, A5_CONSTRUIRE, A5_TABLEAU, A5_CHOISIR, A5_ERREURS, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 · COMMANDES ET CONTRATS
 *
 *  passer, livrer, annuler une commande; conclure un contrat, un accord;
 *  lancer un produit / le lancement. Traps: placer, canceller, agrément,
 *  termes.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a call to the supplier in Dakar. Story bubbles avoid « ? » and « ! ». */
const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Un appel à Dakar',
  frSub: 'La commande des pieds en métal',
  setting: "Mardi matin. Tu appelles Ousmane Ndiaye, de l'Atelier Ndiaye, le fournisseur de Solane à Dakar. Il fabrique les pieds en métal des lampes.",
  bubbles: [
    { from: 'narrator', fr: "Tu as le bon de commande devant toi. La cliente de Lyon attend ses lampes.", en: 'You have the purchase order in front of you. The Lyon client is waiting for her lamps.' },
    { from: 'coach', fr: "Bonjour. J'ai bien reçu votre bon de commande pour les quarante pieds.", en: 'Hello. I have received your purchase order for the forty bases.', warn: 'le bon de commande : le papier de la commande' },
    { from: 'user', fr: "Merci. Je voudrais savoir quand la commande sera livrée.", en: 'Thank you. I would like to know when the order will be delivered.' },
    { from: 'coach', fr: "Il y a un petit souci : notre machine est en panne depuis lundi.", en: 'There is a small problem: our machine has been broken since Monday.' },
    { from: 'coach', fr: fr(E(1106)), en: src(E(1106)).en, warn: 'livrer : le verbe de la livraison' },
    { from: 'user', fr: "Je comprends. Nous avons un contrat, et la cliente compte sur nous.", en: 'I understand. We have a contract, and the client is counting on us.' },
    { from: 'coach', fr: "Je sais. Je ne veux pas que vous annuliez la commande, alors je vous fais une remise.", en: 'I know. I do not want you to cancel the order, so I am giving you a discount.', warn: 'annuler une commande' },
  ],
  closing: { fr: 'Une commande, un contrat, une livraison : chaque nom arrive avec son verbe.', en: 'An order, a contract, a delivery: every noun comes with its verb.' },
  audio: REC('rec-b1-36-dakar'),
  say: REFRAME,
  terms: ['verbe', 'delai'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-clients',
  title: 'La commande et le contrat',
  frSub: 'Passer, livrer, annuler, conclure',
  hint: 'Six cartes. Chaque papier a son verbe.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbe', 'famille'],
  cards: [
    card(E(1096), 'Toute une famille', 'la famille',
      "Commander, une commande, un bon de commande : le papier signé qui dit oui. EN: to order, an order, a purchase order."),
    card(E(1097), 'Apporter', 'son verbe',
      "On livre une commande au client. EN: to deliver an order."),
    card(E(1098), 'Dire non, après', 'son verbe',
      "On annule une commande. Au Québec, on entend canceller, mais à l'écrit, c'est annuler. EN: to cancel an order."),
    card(E(1094), 'Le papier des deux', 'son verbe',
      "On conclut un contrat, ou on le signe. EN: to conclude a contract."),
    card(E(1099), "D'accord sur le prix", 'son verbe',
      "On conclut un accord. Un agrément, c'est une autorisation. EN: to reach an agreement."),
    card(E(1095), 'Le nouveau produit', 'son verbe',
      "On lance un produit ; le lancement, c'est le moment où il sort. EN: to launch a product."),
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'De la commande au lancement',
  groups: [
    grp('La commande, du début à la fin', [
      it(E(1101), 'passer'),
      it(E(1109), 'le bon de commande'),
      it(E(1106), 'livrer'),
      it(E(1107), 'annuler'),
      it('fr.a2.metiers.072', 'gérer les commandes'),
    ], chk(
      'Passer, livrer, annuler : ce sont les verbes...',
      ['de la commande', 'du contrat'], 0,
      "Une commande, on la passe, on la livre, on l'annule. EN: the order's verbs.")),
    grp('Le contrat et le lancement', [
      it(E(1103), 'conclure un contrat'),
      it(E(1108), 'conclure un accord'),
      it('fr.b1.faits-et-procedures.1048', 'signer, au passif'),
      it(E(1104), 'lancer'),
      it(E(1105), 'le lancement'),
    ], chk(
      'Un contrat, on le...',
      ['conclut ou on le signe', 'passe ou on le livre'], 0,
      "Conclure ou signer un contrat. EN: conclude or sign.")),
    ctl('La famille', "Lancer, ... : le moment où le produit sort.",
      ['la lance', 'le lancement', 'le lanceur'], 1,
      "Le lancement. EN: the launch."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbe', 'famille'],
};

const A6_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a6-flash',
  layer: 'core',
  title: 'Huit cartes pour les commandes',
  cards: [
    { front: 'to place an order', back: 'passer une commande', say: fr(E(1101)) },
    { front: 'a purchase order', back: 'un bon de commande', say: fr(E(1109)) },
    { front: 'to deliver an order', back: 'livrer une commande', say: fr(E(1106)) },
    { front: 'to cancel an order', back: 'annuler une commande', say: fr(E(1107)) },
    { front: 'to conclude a contract', back: 'conclure un contrat', say: fr(E(1103)) },
    { front: 'to reach an agreement', back: 'conclure un accord', say: fr(E(1108)) },
    { front: 'to launch a product', back: 'lancer un produit', say: fr(E(1104)) },
    { front: 'the terms', back: 'les conditions', say: fr(E(1110)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbe'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon verbe pour la commande',
  groups: [
    ctl('Commander', 'Solane demande quarante pieds à Dakar. Elle...',
      ['place une commande', 'passe une commande'], 1,
      "On passe une commande. EN: to place an order."),
    ctl('Non merci', "Le client ne veut plus les lampes. Il...",
      ['annule sa commande', 'cancelle sa commande', 'livre sa commande'], 0,
      "Il annule. EN: he cancels."),
    ctl("L'accord", 'Après une heure, tout le monde est d’accord sur le prix. On a...',
      ['conclu un agrément', 'conclu un accord'], 1,
      "Un accord. EN: an agreement."),
    ctl('Lire', 'Avant de signer, tu lis...',
      ['les conditions', 'les termes'], 0,
      "Les conditions du contrat. EN: the terms."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbe', 'fauxami'],
};

/** TRAP, stepped: order and contract calques. */
const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Commandes et contrats sans calque',
  rule: {
    title: 'Passer, annuler, conclure',
    body: "On passe une commande, on l'annule, on conclut un accord et on lit les conditions. Placer, canceller, un agrément et les termes viennent de l'anglais. EN: four English shapes, four French verbs.",
  },
  cards: [
    { promptLabel: 'place an order', promptSound: 'Nous avons placé une commande à notre fournisseur de Dakar.', fr: fr(E(1101)), ipa: ipaOf(E(1101)), tip: "On passe une commande. EN: to place an order is passer." },
    { promptLabel: 'agreement', promptSound: 'Nous avons enfin conclu un agrément sur le prix.', fr: fr(E(1108)), ipa: ipaOf(E(1108)), tip: "Un agrément, c'est une autorisation. EN: an agreement is un accord." },
    { promptLabel: 'cancel', promptSound: 'Le client a cancellé sa commande.', fr: fr(E(1107)), ipa: ipaOf(E(1107)), tip: "Canceller est familier, au Québec. À l'écrit : annuler. EN: to cancel is annuler." },
    { promptLabel: 'the terms', promptSound: 'Il faut lire les termes avant de signer.', fr: fr(E(1110)), ipa: ipaOf(E(1110)), tip: "Les termes, ce sont des mots. Pour un contrat : les conditions. EN: terms and conditions." },
    { promptLabel: 'purchase order', promptSound: "Je vous envoie l'ordre d'achat signé.", fr: fr(E(1109)), ipa: ipaOf(E(1109)), tip: "Le papier de la commande : le bon de commande. EN: a purchase order." },
    { promptLabel: 'launches', promptSound: 'Solane lanche un nouveau produit au printemps.', fr: fr(E(1104)), ipa: ipaOf(E(1104)), tip: "Le verbe est lancer : elle lance. EN: launches is lance." },
  ],
  drill: [
    { promptSay: 'Nous avons ... une commande à Dakar.', opts: ['placé', 'passé'], correct: 1 },
    { promptSay: 'Nous avons conclu un ... sur le prix.', opts: ['accord', 'agrément'], correct: 0 },
    { promptSay: 'Le client a ... sa commande.', opts: ['cancellé', 'annulé'], correct: 1 },
    { promptSay: 'Il faut lire les ... avant de signer.', opts: ['conditions', 'termes'], correct: 0 },
    { promptSay: 'Je vous envoie le bon de ... signé.', opts: ['commande', 'achat'], correct: 0 },
    { promptSay: 'Solane ... un nouveau produit au printemps.', opts: ['lance', 'lanche'], correct: 0 },
    { promptSay: 'La commande sera ... dans trois semaines.', opts: ['délivrée', 'livrée'], correct: 1 },
    { promptSay: 'Le ... est prévu pour le mois de mars.', opts: ['lancement', 'lancer', 'lance'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-b1-36-piege-commande'),
  say: REFRAME,
  terms: ['fauxami', 'verbe'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La commande', 'To place an order :',
    ['placer une commande', 'passer une commande'], 1,
    "Passer une commande. EN: passer."),
  ctl("L'accord", 'An agreement :',
    ['un accord', 'un agrément'], 0,
    "Un accord. EN: un accord."),
  ctl('Le lancement', 'Le produit sort en mars : c’est...',
    ['le lancement', 'la livraison', 'la facture'], 0,
    "Le lancement. EN: the launch."),
], ['verbe', 'fauxami']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Commandes et contrats',
    opener: {
      line: "Un bon de commande, un contrat signé, un appel à Dakar : ici tu fais tout le chemin d'une commande. EN: A purchase order, a signed contract, a call to Dakar: here you follow an order all the way.",
      imageRef: 'lessons/affaires/act06.jpg',
    },
    sections: [],
    milestone: "Tu passes, livres et annules une commande, tu conclus un contrat et tu lances un produit. EN: You place, deliver and cancel an order, conclude a contract and launch a product.",
    estScreens: 44, restPoints: ['a6-construire', 'a6-choisir'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_FLASH, A6_CHOISIR, A6_PIEGE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 · DEMANDER POLIMENT
 *
 *  The conditional of politeness (lesson 9 in B1) put to work: pourriez-
 *  vous, je me permets de, je vous serais reconnaissant de, serait-il
 *  possible de, faire parvenir, merci de + infinitive. The trap is the
 *  bare order.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: ten requests heard in one morning. `hideLines`. */
const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Dix demandes en une matinée',
  frSub: 'Écoute, et dis qui parle à qui',
  lines: [
    ln(E(1114)), ln(E(1120)), ln(E(1116)), ln(E(1122)), ln('fr.b1.conseils-et-suggestions.1084'),
    ln(E(1118)), ln(E(1121)), ln(E(1119)), ln(E(1117)), ln(E(1124)),
  ],
  questions: [
    { q: 'La première personne veut le devis...', opts: ['avant vendredi', 'avant lundi'], correct: 0, why: "Avant vendredi, et elle dit pourriez-vous. EN: before Friday." },
    { q: 'Une seule demande tutoie. Elle demande...', opts: ['le devis', 'le fichier', 'le rapport'], correct: 1, why: "Tu peux m'envoyer le fichier : entre collègues. EN: the file." },
    { q: 'Le rendez-vous qu’on rappelle, c’est quel jour ?', opts: ['mardi', 'jeudi'], correct: 1, why: "Notre rendez-vous de jeudi. EN: Thursday." },
    { q: 'La personne qui relance, elle relance au sujet...', opts: ['du devis', 'de la facture'], correct: 0, why: "Au sujet du devis. EN: the quote." },
    { q: 'Avant quelle heure veut-on une réponse ?', opts: ['avant midi', 'avant le soir', 'avant dix heures'], correct: 0, why: "Avant midi, avec je vous serais reconnaissante. EN: before noon." },
  ],
  audio: REC('rec-b1-36-demandes-ecoute'),
  say: REFRAME,
  terms: ['demande', 'tuvous'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-politesse',
  title: 'Six façons de demander',
  frSub: 'Du plus simple au plus soigné',
  hint: 'Six cartes. Regarde comment la demande devient plus douce.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['demande', 'fauxami'],
  cards: [
    card(E(1112), 'Le mot', 'la demande',
      "On fait une demande. Demander, c'est to ask ; exiger, c'est to demand. EN: to make a request."),
    card(E(1125), 'Court et poli', 'la demande',
      "Merci de + infinitif : très fréquent à l'écrit, au travail. EN: please confirm."),
    card(E(1114), 'Le conditionnel', 'la demande',
      `Pourriez-vous : la demande polie de ${POLITESSE_REF}. EN: could you.`),
    card(E(1115), 'Plus soigné', 'la demande',
      "Faire parvenir, c'est envoyer, en plus soigné, surtout à l'écrit. EN: to send, formally."),
    card(E(1119), 'Encore plus doux', 'la demande',
      `Serait-il possible de : le conditionnel et l'inversion de ${INVERSION_REF}. EN: would it be possible to.`),
    card(E(1113), 'Très soutenu', 'la demande',
      "Je vous serais reconnaissant de : pour un client important ou une lettre. Au féminin, reconnaissante. EN: I would be grateful if."),
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'À qui tu demandes',
  groups: [
    grp('À un client : vous et le conditionnel', [
      it(E(1114), 'pourriez-vous'),
      it('fr.b1.langue-soignee.1129', 'seriez-vous'),
      it(E(1119), 'serait-il possible de'),
      it(E(1117), 'je vous serais reconnaissante'),
      it('fr.b1.conseils-et-suggestions.1084', 'je me permets de'),
    ], chk(
      'Ces demandes vont surtout...',
      ['à un client ou à un supérieur', 'à un ami'], 0,
      "Vous, le conditionnel, une formule : c'est la distance polie. EN: to a client or a boss.")),
    grp('À un collègue : plus simple, toujours poli', [
      it(E(1120), 'tu peux'),
      it(E(1121), "j'aurais besoin de"),
      it(E(1122), 'vous voulez bien'),
      it(E(1118), 'est-ce que ce serait possible'),
    ], chk(
      'Ces demandes sont...',
      ['impolies', 'polies, mais plus simples'], 1,
      "Au travail, entre collègues, c'est normal et poli. EN: polite, just simpler.")),
    ctl('La formule', 'Je me permets de vous rappeler notre rendez-vous. Ça veut dire...',
      ['je te donne un ordre', 'je vous rappelle, poliment'], 1,
      "Je me permets de : une façon douce de rappeler. EN: may I remind you."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['demande', 'tuvous'],
};

const A7_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a7-hacks',
  layer: 'core',
  title: 'Trois astuces pour demander',
  hacks: [
    { hack: 'Mets le verbe au conditionnel : je voudrais, pourriez-vous, j’aurais besoin.',
      why: `Le conditionnel adoucit, comme dans ${POLITESSE_REF}. EN: the conditional softens.` },
    { hack: 'À l’écrit, merci de + infinitif est court et poli.',
      why: "Merci de me confirmer la date : une demande, pas un remerciement. EN: merci de is a polite request." },
    { hack: 'Plus la personne est loin de toi, plus tu adoucis.',
      why: `Un collègue : tu peux. Un client : pourriez-vous. Le registre, c'est ${REGISTRES_REF}. EN: more distance, softer form.` },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['demande'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La bonne demande pour la bonne personne',
  groups: [
    ctl('La cliente', 'Tu veux la réponse de Madame Rivière avant vendredi. Tu écris :',
      ['Répondez-moi avant vendredi.', 'Pourriez-vous me répondre avant vendredi ?'], 1,
      "Pourriez-vous : une cliente, le conditionnel. EN: could you."),
    ctl('Le collègue', 'Tu as besoin du fichier de Samuel, que tu tutoies. Tu dis :',
      ["Tu peux m'envoyer le fichier ?", 'Je vous serais reconnaissant de me faire parvenir le fichier.'], 0,
      "Entre collègues, simple et poli. La formule soutenue sonnerait bizarre. EN: simple is right here."),
    ctl('Le rappel', 'Le client a oublié le rendez-vous de jeudi, peut-être. Tu écris :',
      ['Je me permets de vous rappeler notre rendez-vous de jeudi.', "N'oubliez pas notre rendez-vous de jeudi."], 0,
      "Je me permets de : tu rappelles sans reprocher. EN: a gentle reminder."),
    ctl('Confirmer', "Pour demander une date, à l'écrit, court et poli :",
      ['Merci de me confirmer la date.', 'Confirmez la date.', 'Je veux la date.'], 0,
      "Merci de + infinitif. EN: please confirm."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['demande'],
};

/** TRAP, stepped: the bare order where a request was needed. */
const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Un ordre ou une demande',
  rule: {
    title: 'Je voudrais, pas je veux',
    body: "Avec un client ou un supérieur, un ordre ou je veux sonne dur. Le conditionnel et les formules en font une demande. EN: soften orders into requests with the conditional.",
  },
  cards: [
    { promptLabel: 'je veux', promptSound: 'Je veux le devis avant vendredi.', fr: fr(E(1114)), ipa: ipaOf(E(1114)), tip: "Pourriez-vous me faire parvenir : une demande. EN: a request, not a want." },
    { promptLabel: 'vous devez', promptSound: 'Vous devez me répondre avant midi.', fr: fr(E(1117)), ipa: ipaOf(E(1117)), tip: "Je vous serais reconnaissante : la même idée, sans ordre. EN: I would be grateful." },
    { promptLabel: 'un ordre', promptSound: 'Donnez-moi le rapport pour demain.', fr: fr(E(1121)), ipa: ipaOf(E(1121)), tip: "J'aurais besoin de : le conditionnel adoucit. EN: I would need." },
    { promptLabel: 'trop direct', promptSound: 'Confirmez la date.', fr: fr(E(1124)), ipa: ipaOf(E(1124)), tip: "Merci de me confirmer : court et poli. EN: please confirm." },
    { promptLabel: 'le futur', promptSound: 'Est-ce que ce sera possible de livrer lundi ?', fr: fr(E(1118)), ipa: ipaOf(E(1118)), tip: "Ce serait, au conditionnel : c'est une demande, pas une question sur le futur. EN: would, not will." },
    { promptLabel: 'un ordre', promptSound: 'Vérifiez ces chiffres.', fr: fr(E(1122)), ipa: ipaOf(E(1122)), tip: "Vous voulez bien : une demande douce, courante. EN: would you mind." },
  ],
  drill: [
    { promptSay: '... me faire parvenir le devis avant vendredi ?', opts: ['Pourriez-vous', 'Vous devez'], correct: 0 },
    { promptSay: "J'... besoin du rapport pour demain.", opts: ['aurai', 'aurais'], correct: 1 },
    { promptSay: 'Je vous ... reconnaissante de me répondre.', opts: ['serais', 'suis'], correct: 0 },
    { promptSay: '... de me confirmer la date.', opts: ['Merci', 'Confirmez'], correct: 0 },
    { promptSay: 'Est-ce que ce ... possible de livrer lundi ?', opts: ['sera', 'serait'], correct: 1 },
    { promptSay: 'Je me ... de vous rappeler notre rendez-vous.', opts: ['permets', 'permis', 'permettrai'], correct: 0 },
    { promptSay: '... possible de reporter la réunion ?', opts: ['Serait-il', 'Il sera'], correct: 0 },
    { promptSay: 'Vous voulez ... vérifier ces chiffres ?', opts: ['bien', 'bon'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-b1-36-piege-demande'),
  say: REFRAME,
  terms: ['demande', 'fauxami'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le client', 'Pour un client, le plus poli :',
    ['Envoyez-moi le devis.', 'Pourriez-vous m’envoyer le devis ?'], 1,
    "Pourriez-vous : le conditionnel. EN: could you."),
  ctl('La formule', '« Merci de me confirmer la date » est...',
    ['une demande', 'un merci pour une date confirmée'], 0,
    "Merci de + infinitif demande quelque chose. EN: a request."),
  ctl('Le collègue', 'À une collègue que tu tutoies :',
    ["Tu peux m'envoyer le fichier ?", 'Pourriez-vous m’envoyer le fichier ?', 'Envoie le fichier, vite.'], 0,
    "Tu, et une question simple. EN: tu, simple and polite."),
], ['demande', 'tuvous']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Demander poliment',
    opener: {
      line: "Un devis à recevoir, un rendez-vous à rappeler, un client à ménager : ici tu fais une demande sans donner d'ordre. EN: A quote to get, a meeting to remind, a client to handle with care: here you ask without giving orders.",
      imageRef: 'lessons/affaires/act07.jpg',
    },
    sections: [],
    milestone: "Tu demandes au client, au patron et au collègue, chacun avec la bonne forme. EN: You make requests to a client, a boss and a colleague, each in the right form.",
    estScreens: 40, restPoints: ['a7-construire', 'a7-choisir'],
  },
  sections: [A7_ECOUTE, A7_CARTES, A7_CONSTRUIRE, A7_HACKS, A7_CHOISIR, A7_PIEGE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 · NE PAS ÊTRE D'ACCORD
 *
 *  je ne suis pas tout à fait d'accord, je comprends votre point de vue,
 *  il me semble que, avoir raison sur un point, trouver un compromis,
 *  proposer une autre solution. Traps: avoir un point, faire du sens.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the company newsletter, three colleagues on saying no. */
const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Les Nouvelles de Solane',
  frSub: 'Lis, et cherche comment chacun dit non',
  text: NOUVELLES_TEXT,
  glossary: [
    { word: 'fermer la porte', en: 'to close the door (on further talk)', note: 'Dire non de façon à arrêter la discussion.' },
    { word: 'Au lieu de', en: 'Instead of', note: 'À la place de.' },
    { word: 'débattait', en: 'debated, argued', note: 'Du verbe débattre : discuter en donnant des avis contraires.' },
    { word: 'nuancer', en: 'to qualify, to tone down', note: 'Dire les choses avec des degrés, pas tout blanc ou tout noir.' },
  ],
  questions: [
    { q: 'Par quoi Josée commence-t-elle un désaccord ?', a: '« Vous avez raison sur un point » : par ce qui est juste.' },
    { q: 'Que fait Marc-André au lieu de dire que c’est impossible ?', a: 'Il pose une question : « et si on essayait autrement ? », et on trouve souvent un compromis.' },
    { q: 'Qu’est-ce que Léa a appris ici ?', a: "À nuancer : « je ne suis pas tout à fait d'accord », puis elle explique pourquoi." },
    { q: 'Les trois collègues disent-ils non de la même façon ?', a: 'Non : ce qui est juste d’abord, une question, ou une phrase nuancée. Trois façons.' },
  ],
  audio: REC('rec-b1-36-nouvelles'),
  say: REFRAME,
  terms: ['desaccord'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-politesse',
  title: 'Dire non, poliment',
  frSub: 'Six phrases pour nuancer',
  hint: 'Six cartes, dans l’ordre d’un bon désaccord.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['desaccord', 'fauxami', 'famille'],
  cards: [
    card(E(1128), "D'abord, ce qui est juste", 'le désaccord',
      "Tu reconnais ce qui est vrai. Pas vous avez un point : c'est de l'anglais. EN: you have a point."),
    card(E(1127), 'Tu écoutes', 'le désaccord',
      "Je comprends votre point de vue, mais... Le mais arrive après. EN: I understand your point of view."),
    card(E(1126), 'Tu nuances', 'le désaccord',
      "Pas tout à fait : tu n'es pas d'accord, mais pas à cent pour cent. EN: I do not entirely agree."),
    card(E(1129), 'Tu proposes', 'le désaccord',
      "Tu ne dis pas seulement non : tu proposes une autre solution. EN: to suggest another solution."),
    card(E(1130), 'Au milieu', 'le désaccord',
      "Chacun fait un pas : on trouve un compromis. EN: to find a compromise."),
    card(E(1131), 'Oui ou non', 'la famille',
      "Accepter, refuser, et le nom du non : un refus. EN: to accept, to refuse, a refusal."),
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Un désaccord en trois temps',
  groups: [
    grp("D'abord, ce qui est juste", [
      it(E(1138), 'avoir raison sur un point'),
      it(E(1133), 'votre point de vue, mais'),
      it(E(1139), "a du sens, mais"),
      it('fr.b1.opinions-et-avis.107', 'le bloc pour nuancer'),
      it(E(1134), 'il me semble que'),
    ], chk(
      'Ces phrases commencent par...',
      ["ce qui est juste chez l'autre", 'un non direct'], 0,
      "Tu reconnais d'abord, tu nuances ensuite. EN: start with what is right.")),
    grp('Ensuite, une autre solution', [
      it(E(1135), 'proposer plutôt'),
      it(E(1136), 'un compromis'),
      it(E(1137), 'refuser, poliment'),
      it('fr.b2.collegues.002', 'trouver un compromis, au subjonctif'),
    ], chk(
      'Après le désaccord, tu...',
      ['proposes autre chose', 'arrêtes de parler'], 0,
      "Un non utile propose une solution. EN: you propose something else.")),
    ctl('La famille', 'Accepter, refuser, ... :',
      ['un refus', 'une refusion', 'un refusé'], 0,
      "Le nom du non : un refus. EN: a refusal."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['desaccord', 'famille'],
};

const A8_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a8-focus',
  layer: 'core',
  sheetId: 'sheet-politesse',
  title: 'Un désaccord en quatre étapes',
  points: [
    "Reconnais ce qui est juste : vous avez raison sur un point. EN: acknowledge first.",
    "Nuance : je ne suis pas tout à fait d'accord, il me semble que. EN: then qualify.",
    "Explique : le délai est trop court, le budget ne suffit pas. EN: give the reason.",
    "Propose : je propose plutôt, on pourrait trouver un compromis. EN: end with a proposal.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['desaccord'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Dire non en réunion',
  groups: [
    ctl('Le prix', 'Le client trouve le prix élevé. Toi aussi, un peu. Tu dis :',
      ['Il me semble que le prix est un peu élevé.', 'Votre prix est trop cher, c’est tout.'], 0,
      "Il me semble que : tu nuances. EN: it seems to me."),
    ctl('Le délai', 'Josée veut livrer en une semaine. C’est trop court. Tu dis :',
      ['Non, impossible.', 'Je comprends votre point de vue, mais le délai est trop court.'], 1,
      "D'abord son point de vue, puis ton mais. EN: acknowledge, then disagree."),
    ctl('La solution', 'Tu proposes de livrer la moitié en novembre. Tu dis :',
      ['On pourrait trouver un compromis.', 'On pourrait trouver une compromise.'], 0,
      "Un compromis, masculin. EN: a compromise."),
    ctl('Refuser', "Solane ne peut pas accepter l'offre. Dans le courriel :",
      ['Malheureusement, nous devons refuser cette offre.', 'Non merci, on ne veut pas.', 'Votre offre est mauvaise.'], 0,
      "Malheureusement adoucit le refus. EN: unfortunately softens it."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['desaccord'],
};

/** TRAP: disagreement calques. */
const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de désaccord',
  errors: [
    { wrong: 'Vous avez un point.', right: fr(E(1138)),
      why: "Normal : you have a point. Mais en français, on a raison sur un point. EN: you have a point is vous avez raison sur un point." },
    { wrong: 'Votre idée fait du sens, mais le budget ne suffit pas.', right: fr(E(1139)),
      why: "On l'entend beaucoup au Québec. À l'écrit, au travail : une idée a du sens. EN: makes sense is a du sens." },
    { wrong: 'Il me semble que le prix est un peu cher.', right: fr(E(1134)),
      why: "On le dit souvent. Mais c'est le produit qui est cher ; un prix est élevé. EN: a price is élevé." },
    { wrong: 'Permettez-moi de vous interrompre pour une seconde.', right: fr(E(1141)),
      why: "Normal : for a second. En français, une seconde, sans pour. EN: no pour." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['desaccord', 'fauxami'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le point', 'You have a point :',
    ['Vous avez un point.', 'Vous avez raison sur un point.'], 1,
    "Avoir raison sur un point. EN: avoir raison."),
  ctl("L'ordre", 'Un désaccord poli commence par...',
    ['ce qui est juste', 'le non'], 0,
    "Ce qui est juste d'abord. EN: what is right, first."),
  ctl('Le sens', 'That makes sense :',
    ['Ça a du sens.', 'Ça fait du sens.'], 0,
    "Ça a du sens. EN: ça a du sens."),
], ['desaccord', 'fauxami']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: "Ne pas être d'accord",
    opener: {
      line: "Un prix trop élevé, un délai trop court, une réunion tendue : ici tu dis non sans fermer la porte. EN: A price too high, a deadline too short, a tense meeting: here you say no without closing the door.",
      imageRef: 'lessons/affaires/act08.jpg',
    },
    sections: [],
    milestone: "Tu dis ton désaccord en reconnaissant ce qui est juste, et tu proposes une autre solution. EN: You disagree by acknowledging what is right, and you propose another way.",
    estScreens: 40, restPoints: ['a8-construire', 'a8-choisir'],
  },
  sections: [A8_LECTURE, A8_CARTES, A8_CONSTRUIRE, A8_FOCUS, A8_CHOISIR, A8_ERREURS, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 · TU OU VOUS AU TRAVAIL
 *
 *  Lesson 26 in B1 owns tu and vous as a system; this act puts it at work:
 *  passer au tu, garder le vous, se tutoyer entre collègues, the client
 *  decides, and never mix the two in one message.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a video call between Montréal and Lyon. No « ? » or « ! ». */
const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Montréal appelle Lyon',
  frSub: 'Thomas, le nouveau collègue',
  setting: "Une visioconférence entre Montréal et Lyon. Josée te présente Thomas, du bureau de Lyon. Il va suivre avec toi le projet de l'Hôtel des Tilleuls.",
  bubbles: [
    { from: 'narrator', fr: "Josée tutoie tout le monde. Thomas, lui, attend de voir.", en: 'Josée says tu to everyone. Thomas waits to see.' },
    { from: 'coach', fr: "Bonjour, enchanté. Bienvenue dans l'équipe.", en: 'Hello, pleased to meet you. Welcome to the team.' },
    { from: 'user', fr: "Merci. À Montréal, on se tutoie vite. Je vous propose de passer au tu.", en: 'Thank you. In Montréal, people say tu quickly. I suggest we switch to tu.', warn: 'passer au tu : on le propose' },
    { from: 'coach', fr: "Avec plaisir. Mais devant Madame Rivière, on garde le vous.", en: 'Gladly. But in front of Madame Rivière, we keep using vous.', warn: 'garder le vous : avec la cliente' },
    { from: 'user', fr: fr(E(1148)), en: src(E(1148)).en },
    { from: 'coach', fr: fr('fr.b1.rp-etiquette.1070'), en: src('fr.b1.rp-etiquette.1070').en, warn: 'revenir au vous devant un client' },
    { from: 'narrator', fr: "Josée sourit : à Lyon aussi, on passe parfois au tu.", en: 'Josée smiles: in Lyon too, people sometimes switch to tu.' },
  ],
  closing: { fr: 'Entre collègues, on passe souvent au tu ; avec un client, on garde le vous.', en: 'Between colleagues, people often switch to tu; with a client, you keep vous.' },
  audio: REC('rec-b1-36-lyon'),
  say: REFRAME,
  terms: ['tuvous'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-politesse',
  title: 'Tu ou vous, au bureau',
  frSub: `Ce que ${TUVOUS_REF} t'a appris, au travail`,
  hint: 'Cinq cartes. Qui propose, qui garde, qui change.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['tuvous', 'variante'],
  cards: [
    card(E(1145), 'Entre collègues', 'tu ou vous',
      "Au Québec, on se tutoie vite entre collègues. En France, souvent aussi, mais pas partout. EN: colleagues often say tu."),
    card(E(1143), 'Qui propose', 'tu ou vous',
      "Le plus âgé, le chef ou le client propose le tu. Avec un client, attends qu'il le propose. EN: to suggest using tu."),
    card(E(1149), 'On passe au tu', 'tu ou vous',
      "Josée a proposé ; maintenant, vous vous dites tu. EN: to switch to tu."),
    card(E(1144), 'Avec un client', 'tu ou vous',
      "Avec un nouveau client, on garde le vous, même au Québec. EN: to keep using vous."),
    card(E(1153), 'Une seule règle', 'tu ou vous',
      "Dans un message, tu choisis tu ou vous, et tu ne changes plus. EN: never mix them in one message."),
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Qui dit tu, qui dit vous',
  groups: [
    grp('Entre collègues', [
      it(E(1146), 'le tu, vite'),
      it('fr.b1.rp-etiquette.1054', 'le bloc'),
      it(E(1151), 'une demande en tu'),
      it('fr.b1.rp-etiquette.1075', 'la pause et la réunion'),
      it('fr.b1.rp-etiquette.1134', 'le Québec et la France'),
    ], chk(
      'Entre collègues, au Québec, on...',
      ['passe souvent vite au tu', 'garde toujours le vous'], 0,
      "Le tu arrive vite, surtout au Québec. EN: tu comes quickly."),
    ),
    grp('Avec les clients', [
      it(E(1148), 'un nouveau client'),
      it(E(1152), 'une demande en vous'),
      it(E(1150), 'le courriel officiel'),
      it('fr.b1.rp-etiquette.1070', 'revenir au vous'),
      it('fr.b1.rp-etiquette.1061', 'qui décide'),
    ], chk(
      'Avec un client, qui propose le tu ?',
      ['toi', 'le client'], 1,
      "Le client décide. EN: the client decides.")),
    ctl('Le message', 'Tu commences un courriel avec vous. À la fin, tu écris...',
      ['Merci, vous êtes gentille.', 'Merci, tu es gentille.'], 0,
      "Tu gardes le vous jusqu'à la fin. EN: keep vous to the end."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tuvous'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Tu ou vous en cinq phrases',
  examples: [
    ex('fr.a2.rp-etiquette.008', 'dire tu à quelqu’un'),
    ex('fr.a2.rp-etiquette.009', 'dire vous à quelqu’un'),
    ex(E(1147), 'à Lyon, le vous dure plus longtemps avec une responsable'),
    ex(E(1146), 'à Montréal, le tu arrive dès la première semaine'),
    ex(E(1150), 'à l’écrit officiel, le vous revient'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tuvous', 'variante'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Tu ou vous, ici',
  groups: [
    ctl('La cliente', 'Madame Rivière, première réunion. Tu dis :',
      ['Tu veux un café ?', 'Vous voulez un café ?'], 1,
      "Une nouvelle cliente : vous. EN: vous."),
    ctl('Samuel', 'Samuel, ton collègue de Montréal, te tutoie depuis lundi. Tu lui écris :',
      ['Tu peux relire mon devis avant midi ?', 'Pourriez-vous relire mon devis avant midi ?'], 0,
      "Il te tutoie : tu le tutoies aussi. EN: tu back."),
    ctl('La proposition', 'La cliente dit : « On peut se tutoyer, si vous voulez. » Tu...',
      ['refuses, par politesse', 'acceptes et tu passes au tu'], 1,
      "Le client décide : s'il propose, tu acceptes. EN: accept."),
    ctl('Le courriel', 'Tu écris un courriel officiel à Josée, que tu tutoies, avec la cliente en copie. Tu écris...',
      ['vous', 'tu', 'tu et vous'], 0,
      "Un courriel officiel, avec une cliente en copie : vous. EN: vous in an official email."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tuvous'],
};

/** TRAP: mixing tu and vous. */
const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre mélanges de tu et de vous',
  errors: [
    { wrong: 'Pourriez-vous relire ton contrat avant midi ?', right: 'Pourriez-vous relire votre contrat avant midi ?',
      why: "Normal : en anglais, your ne change pas. En français, vous va avec votre. EN: vous takes votre." },
    { wrong: 'Salut Madame Rivière, voici le devis.', right: 'Bonjour Madame Rivière, voici le devis.',
      why: "Salut est amical, il va avec tu. Avec Madame, on dit bonjour. EN: salut goes with tu." },
    { wrong: 'Josée, vous pourriez relire mon devis ? Tu es la meilleure.', right: 'Josée, tu pourrais relire mon devis ? Tu es la meilleure.',
      why: "Tu tutoies Josée : garde le tu dans toute la phrase. EN: once tu, stay tu." },
    { wrong: 'Madame, tu pourrais me rappeler demain ?', right: 'Madame, vous pourriez me rappeler demain ?',
      why: "Madame va avec vous, même au Québec. EN: Madame takes vous." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tuvous'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le client', 'Avec un nouveau client, tu...',
    ['gardes le vous', 'passes au tu'], 0,
    "Tu gardes le vous. EN: keep vous."),
  ctl('Qui propose', 'Avec un client, qui propose le tu ?',
    ['toi', 'le client'], 1,
    "Le client. EN: the client."),
  ctl('Le message', 'Dans un seul message, tu peux mélanger tu et vous ?',
    ['non', 'oui, si tu es poli'], 0,
    "Jamais : tu choisis, et tu gardes. EN: never mix them."),
], ['tuvous']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Tu ou vous au travail',
    opener: {
      line: "Une collègue qui tutoie, un client qui vouvoie, une visio entre Montréal et Lyon : ici tu choisis tu ou vous, et tu t'y tiens. EN: A colleague who says tu, a client who says vous: here you choose, and you stick to it.",
      imageRef: 'lessons/affaires/act09.jpg',
    },
    sections: [],
    milestone: "Tu sais quand passer au tu, quand garder le vous, et tu ne les mélanges plus dans un message. EN: You know when to switch to tu, when to keep vous, and you no longer mix them.",
    estScreens: 38, restPoints: ['a9-construire', 'a9-choisir'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_CONSTRUIRE, A9_EXEMPLES, A9_CHOISIR, A9_ERREURS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 · LE COURRIEL PROFESSIONNEL
 *
 *  KEPT LIGHT: lesson 39 in B1 is the full emails-and-letters capstone. Here
 *  only the moves a first work email needs: l'objet, la pièce jointe,
 *  mettre en copie, répondre à tous, transférer; courriel / mail; one
 *  opening, one closing, by country.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: Josée's reply to the hotel, with the quote attached. */
const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La réponse de Josée',
  frSub: 'Lis, et cherche le début, le message et la fin',
  text: REPONSE_TEXT,
  glossary: [
    { word: 'votre intérêt', en: 'your interest', note: 'Le fait que nos lampes vous plaisent.' },
    { word: 'livraison comprise', en: 'delivery included', note: 'Le prix contient déjà la livraison.' },
    { word: 'suivra', en: 'will follow up, will handle', note: 'Du verbe suivre : il s’occupera de la commande.' },
    { word: 'heureuse', en: 'happy, glad', note: 'Josée écrit au féminin.' },
  ],
  questions: [
    { q: "Qu'y a-t-il en pièce jointe ?", a: 'Le devis pour quarante lampes Aurore, livraison comprise.' },
    { q: 'Qui est en copie, et pourquoi ?', a: 'Marc-André Gagnon : c’est lui qui suivra la commande.' },
    { q: 'Quelle remise Josée propose-t-elle ?', a: 'Dix pour cent, pour une commande de cette taille.' },
    { q: 'Comment Josée commence-t-elle et finit-elle ?', a: '« Bonjour Madame Rivière » et « Bien cordialement ».' },
  ],
  audio: REC('rec-b1-36-reponse'),
  say: REFRAME,
  terms: ['courriel', 'devis'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-courriel',
  title: 'Les gestes du courriel',
  frSub: 'Envoyer, copier, transférer, finir',
  hint: 'Six cartes. Chaque bouton a son verbe.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['courriel', 'variante', 'fauxami'],
  cards: [
    card(E(1154), 'Le mot', 'le courriel',
      "Au Québec, on dit un courriel. En France, on dit souvent un mail, plus familier. EN: to send an email."),
    card(E(1156), 'En copie', 'le courriel',
      "Tu mets quelqu'un en copie : il reçoit le message aussi. EN: to copy someone in."),
    card(E(1155), 'Tout le monde', 'le courriel',
      "Répondre à tous : ta réponse va à toutes les personnes du message. EN: to reply all."),
    card(E(1157), 'Plus loin', 'le courriel',
      "On transfère un message à quelqu'un d'autre. Pas forwarder, à l'écrit. EN: to forward a message."),
    card(E(1159), 'Presque la fin', 'le courriel',
      "Je reste à votre disposition : tu proposes ton aide pour la suite. EN: I remain at your disposal."),
    card(E(1160), 'La réponse', 'le courriel',
      "Dans l'attente de votre réponse : poli, un peu soutenu. EN: looking forward to your reply."),
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Envoyer, copier, finir',
  groups: [
    grp('Les boutons du courriel', [
      it(E(1162), 'la pièce jointe'),
      it(E(1163), 'en copie'),
      it(E(1164), 'transférer'),
      it('fr.a2.bureau.006', 'la pièce jointe, au quotidien'),
      it('fr.a2.internet.002', 'le mot du Québec'),
      it('fr.a2.internet.182', 'le mot de France, familier'),
    ], chk(
      'Joindre, copier, transférer : ce sont...',
      ['les gestes du courriel', 'des formules de fin'], 0,
      "Chaque bouton a son verbe. EN: the email's verbs.")),
    grp('Les formules de fin', [
      it(E(1166), 'rester à disposition'),
      it(E(1167), "dans l'attente de"),
      it(E(1170), 'merci de votre retour'),
      it('fr.b1.langue-soignee.1327', 'partout'),
      it('fr.b1.langue-soignee.1326', 'amical, au Québec'),
      it('fr.a1.salutations.119', 'sobre, en Belgique et en France'),
    ], chk(
      'Ces phrases vont...',
      ['au début du courriel', 'à la fin du courriel'], 1,
      "Elles ferment le message. EN: they close the email.")),
    ctl('Le mot', 'Au Québec, surtout à l’écrit, on dit...',
      ['un courriel', 'un mail'], 0,
      "Un courriel. Un mail, c'est courant en France. EN: un courriel."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['courriel', 'variante'],
};

/** NAME, as a lookup: six ways to sign off, by country. */
const A10_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a10-tableau',
  layer: 'core',
  sheetId: 'sheet-courriel',
  title: 'Six fins de courriel',
  cols: ['La formule', 'Où', 'Le ton'],
  rows: [
    { cells: ['Cordialement', 'partout', 'neutre, très fréquent'], say: 'Cordialement, Josée Paquette.',
      detail: { title: 'Cordialement', body: "La fin la plus neutre, pour presque tous les courriels. EN: regards.", say: 'Merci de votre retour. Cordialement, Léa.' } },
    { cells: ['Bien cordialement', 'partout', 'un peu plus chaleureux'], say: 'Bien cordialement, Marc-André.',
      detail: { title: 'Bien cordialement', body: "Un peu plus chaleureux que cordialement. EN: kind regards.", say: fr(E(1167)) } },
    { cells: ['Bien à vous', 'Belgique, France', 'poli, sobre'], say: 'Bien à vous, Thomas.',
      detail: { title: 'Bien à vous', body: "Très courant en Belgique. EN: yours, kind regards.", say: 'Je reste à votre disposition. Bien à vous, Thomas.' } },
    { cells: ['Meilleures salutations', 'Suisse', 'poli, courant'], say: fr(E(1161)),
      detail: { title: 'Meilleures salutations', body: "La fin la plus courante en Suisse. EN: best regards.", say: 'Meilleures salutations, Marc-André Gagnon.' } },
    { cells: ['Salutations', 'Québec', 'neutre, courant'], say: 'Salutations, Josée.',
      detail: { title: 'Salutations', body: "Au Québec, une fin neutre et courte. EN: regards.", say: 'Merci et salutations, Josée.' } },
    { cells: ['Au plaisir', 'Québec', 'amical'], say: 'Au plaisir, Samuel.',
      detail: { title: 'Au plaisir', body: "Amical : pour un collègue ou un client que tu connais bien. EN: talk soon.", say: 'Merci pour tout. Au plaisir, Samuel.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['courriel', 'variante'],
};

const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon geste pour le courriel',
  groups: [
    ctl("L'objet", 'Dans la petite ligne du haut, tu écris le sujet du courriel. En français, c’est...',
      ["l'objet", 'le sujet', 'le titre'], 0,
      "L'objet du courriel. EN: the subject line."),
    ctl('Le devis', 'Tu envoies le devis avec le courriel. Tu écris :',
      ['Vous trouverez le devis en pièce jointe.', 'Vous trouverez le devis en attachement.'], 0,
      "En pièce jointe. EN: attached."),
    ctl('Genève', 'Tu écris à un client de Genève. Pour finir, le plus courant là-bas :',
      ['Au plaisir', 'Meilleures salutations'], 1,
      "En Suisse : meilleures salutations. EN: best regards."),
    ctl('Marc-André', 'Tu veux que Marc-André reçoive aussi ton courriel. Tu le...',
      ['mets en copie', 'transfères avant', 'réponds à tous'], 0,
      "Tu le mets en copie. EN: copy him in."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['courriel'],
};

/** TRAP, stepped: email calques. */
const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Le courriel sans anglais',
  rule: {
    title: "L'objet, la pièce jointe, transférer",
    body: "Subject, attachment, forward, feedback, hear from you : l'anglais est partout dans les courriels. Le français dit l'objet, en pièce jointe, transférer, votre retour, votre réponse. EN: five English shapes, five French ones.",
  },
  cards: [
    { promptLabel: 'attachment', promptSound: 'Vous trouverez le devis en attachement.', fr: fr(E(1162)), ipa: ipaOf(E(1162)), tip: "En pièce jointe. EN: attached." },
    { promptLabel: 'forward', promptSound: "J'ai forwardé votre message au service des ventes.", fr: fr(E(1164)), ipa: ipaOf(E(1164)), tip: "On l'entend au bureau, mais à l'écrit : transférer. EN: forwarded." },
    { promptLabel: 'subject', promptSound: 'Le sujet du courriel dit tout en quelques mots.', fr: fr(E(1168)), ipa: ipaOf(E(1168)), tip: "La ligne du haut, c'est l'objet. EN: the subject line." },
    { promptLabel: 'hear from you', promptSound: "En espérant entendre de vous, je vous souhaite une bonne journée.", fr: fr(E(1167)), ipa: ipaOf(E(1167)), tip: "Entendre de vous, c'est de l'anglais. Dans l'attente de votre réponse. EN: looking forward to your reply." },
    { promptLabel: 'feedback', promptSound: 'Merci de votre feedback rapide.', fr: fr(E(1170)), ipa: ipaOf(E(1170)), tip: "Votre retour, ou votre réponse. EN: your feedback, your reply." },
    { promptLabel: 'cc', promptSound: 'Je mets Marc-André en carbone.', fr: fr(E(1163)), ipa: ipaOf(E(1163)), tip: "Le papier carbone, c'est fini : en copie. EN: I am copying him in." },
  ],
  drill: [
    { promptSay: 'Vous trouverez le devis en ... .', opts: ['attachement', 'pièce jointe'], correct: 1 },
    { promptSay: "J'ai ... votre message au service des ventes.", opts: ['transféré', 'forwardé'], correct: 0 },
    { promptSay: "L'... du courriel dit tout en quelques mots.", opts: ['objet', 'sujet'], correct: 0 },
    { promptSay: "Dans l'... de votre réponse.", opts: ['attente', 'espoir'], correct: 0 },
    { promptSay: 'Merci de votre ... rapide.', opts: ['feedback', 'retour'], correct: 1 },
    { promptSay: 'Je mets Marc-André en ... .', opts: ['copie', 'carbone'], correct: 0 },
    { promptSay: 'Je reste à votre ... pour toute question.', opts: ['disposition', 'service total', 'dispo'], correct: 0 },
    { promptSay: 'Au Québec, on écrit un ... .', opts: ['courriel', 'mail'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-b1-36-piege-courriel'),
  say: REFRAME,
  terms: ['courriel', 'fauxami'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl("L'objet", 'The subject line :',
    ["l'objet", 'le sujet'], 0,
    "L'objet. EN: l'objet."),
  ctl('La pièce jointe', 'Attached :',
    ['en attachement', 'en pièce jointe'], 1,
    "En pièce jointe. EN: en pièce jointe."),
  ctl('Le plan', 'Un courriel de travail, c’est...',
    ['une formule, le message, une formule', 'le message seul'], 0,
    "Une formule pour commencer, une pour finir. EN: greeting, message, sign-off."),
], ['courriel', 'fauxami']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Le courriel professionnel',
    opener: {
      line: `Un objet, une pièce jointe, une formule pour finir : ici tu écris ton premier courriel de travail, avant la leçon qui en fera le tour. EN: A subject line, an attachment, a sign-off: here you write your first work email.`,
      imageRef: 'lessons/affaires/act10.jpg',
    },
    sections: [],
    milestone: "Tu écris un courriel de travail court : un objet clair, une formule, le message, une formule. EN: You write a short work email: a clear subject, a greeting, the message, a sign-off.",
    estScreens: 42, restPoints: ['a10-construire', 'a10-choisir'],
  },
  sections: [A10_LECTURE, A10_CARTES, A10_CONSTRUIRE, A10_TABLEAU, A10_CHOISIR, A10_PIEGE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 · À TOI D'ÉCRIRE AU CLIENT
 *
 *  The model message, the plan, the role play, THE TASK, then the closing
 *  sections the playbook requires, with the one quiz.
 * ══════════════════════════════════════════════════════════════════════════ */

/** The model the learner imitates: a delay, a new date, a revised quote. */
const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Marc-André',
  frSub: 'La forme que tu vas écrire',
  text: MESSAGE_TEXT,
  glossary: [
    { word: 'suspensions', en: 'pendant lights', note: 'Des lampes qui pendent du plafond.' },
    { word: 'prêtes', en: 'ready', note: 'Finies, qu’on peut livrer.' },
    { word: 'contretemps', en: 'setback, hitch', note: 'Un petit problème qui change le calendrier.' },
    { word: 'qui vous convient', en: 'that suits you', note: 'Du verbe convenir : aller bien pour quelqu’un.' },
  ],
  questions: [
    { q: 'Pourquoi Marc-André écrit-il ?', a: 'Le fournisseur a pris du retard : les suspensions ne seront pas prêtes pour la rencontre du trois décembre.' },
    { q: 'Quelle nouvelle date propose-t-il ?', a: 'Le jeudi dix décembre, à quinze heures, par vidéo.' },
    { q: 'Que donne-t-il au client pour le retard ?', a: 'Une remise de cinq pour cent, dans un devis révisé en pièce jointe.' },
    { q: 'Comment finit-il, et pourquoi cette formule ?', a: '« Meilleures salutations » : le client est à Genève, c’est la fin courante en Suisse.' },
  ],
  audio: REC('rec-b1-36-message'),
  say: REFRAME,
  terms: ['courriel', 'demande', 'devis'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour ton message',
  steps: [
    "1. Un objet clair, puis Bonjour Madame, avec son nom. EN: a clear subject, then a greeting with her name.",
    "2. Le sujet et le problème : je vous écris au sujet de, malheureusement. EN: the topic and the problem.",
    "3. Tes excuses, courtes : je vous prie de nous excuser pour ce contretemps. EN: a short apology.",
    "4. Ta proposition : une nouvelle date au conditionnel, le devis révisé en pièce jointe. EN: your proposal: a date and a revised quote.",
    "5. Une demande et une fin : merci de me confirmer, puis une formule. EN: a request, then a sign-off.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['courriel', 'demande'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Une phrase par étape',
  cases: [
    uc('Tu dis de quoi tu parles', E(1171)),
    uc('Tu annonces le problème', E(1172)),
    uc('Tu proposes une nouvelle date', E(1173)),
    uc('Tu envoies le nouveau prix', E(1174)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['courriel', 'devis'],
};

/** Say it out loud: six turns on the phone with the client. ONE APOSTROPHE
 *  STYLE, the straight one, in every turn and alt. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au téléphone avec Madame Rivière',
  setting: "Madame Rivière, la gérante de l'Hôtel des Tilleuls, t'appelle de Lyon. Elle a vu que la livraison change. Tu lui expliques, et tu proposes.",
  turns: [
    {
      ai: "Bonjour, Hélène Rivière, de l'Hôtel des Tilleuls. Il y a un problème avec ma commande ?",
      en: 'Hello, Hélène Rivière, from the Hôtel des Tilleuls. Is there a problem with my order?',
      user: fr(E(1172)),
      userEn: 'Unfortunately, the delivery will be a week late. (malheureusement: the bad news, softened.)',
      alts: [
        { fr: fr(E(1062)), en: 'The supplier has fallen behind. (prendre du retard.)' },
        { fr: "Oui, je voulais justement vous appeler : notre fournisseur a pris du retard.", en: 'Yes, I was just about to call you: our supplier has fallen behind.' },
      ],
    },
    {
      ai: 'Et notre rendez-vous du douze, alors ?',
      en: 'And our meeting on the twelfth, then?',
      user: fr(E(1180)),
      userEn: 'I would like to suggest a new date for our meeting. (proposer une nouvelle date; une rencontre, the Québec word for a meeting.)',
      alts: [
        { fr: fr(E(1173)), en: 'Would you be available on Tuesday the 19th at ten? (the conditional of politeness.)' },
        { fr: fr('fr.b1.langue-soignee.1129'), en: 'Would you be available on Thursday? (the same formula, another day.)' },
      ],
    },
    {
      ai: 'Mardi dix-neuf, ça me va. Et pour le prix ?',
      en: 'Tuesday the nineteenth suits me. And the price?',
      user: fr(E(1175)),
      userEn: 'For this delay, we are giving you a five per cent discount. (accorder une remise.)',
      alts: [
        { fr: 'Je vais revoir le devis à la baisse pour ce retard.', en: 'I am going to revise the quote downward for this delay. (revoir à la baisse.)' },
        { fr: "Nous vous accordons une remise, et je vous envoie un devis révisé aujourd'hui.", en: 'We are giving you a discount, and I am sending you a revised quote today.' },
      ],
    },
    {
      ai: "C'est gentil. Vous pouvez m'envoyer le nouveau devis ?",
      en: 'That is kind. Can you send me the new quote?',
      user: "Bien sûr, je vous l'envoie par courriel cet après-midi.",
      userEn: 'Of course, I will send it to you by email this afternoon. (vous, and un courriel.)',
      alts: [
        { fr: 'Oui, et je mets Marc-André en copie.', en: 'Yes, and I am copying Marc-André in. (mettre en copie.)' },
        { fr: "Oui, le devis révisé sera en pièce jointe.", en: 'Yes, the revised quote will be attached. (en pièce jointe.)' },
      ],
    },
    {
      ai: 'Et si le retard continue ?',
      en: 'And if the delay continues?',
      user: fr(E(1176)),
      userEn: 'Delivery could be made in two batches. (the conditional proposes.)',
      alts: [
        { fr: fr(E(1136)), en: 'We could find a compromise: half in November, the rest in December.' },
        { fr: "Dans ce cas, je vous appelle tout de suite, c'est promis.", en: 'In that case, I will call you straight away, I promise.' },
      ],
    },
    {
      ai: 'Très bien. Merci de votre appel.',
      en: 'Very good. Thank you for your call.',
      user: fr(E(1177)),
      userEn: 'Please accept our apologies for this setback. (a short, formal apology.)',
      alts: [
        { fr: fr(E(1166)), en: 'I remain at your disposal for any questions.' },
        { fr: 'Merci à vous, et bonne journée.', en: 'Thank you, and have a good day.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['demande', 'devis'],
};

/** THE GRADED TASK. The unit outcome is tested here (shapes doc §2.3). */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Écris à la cliente',
  frSub: 'Mission écrite',
  brief: "Tu travailles chez Solane. La livraison des quarante lampes de l'Hôtel des Tilleuls aura une semaine de retard. Écris un courriel à Madame Rivière, la gérante : explique le problème, excuse-toi, propose une nouvelle date pour votre rendez-vous et envoie un devis révisé.",
  briefEn: 'You work at Solane. Delivery of the forty lamps for the Hôtel des Tilleuls will be a week late. Write an email to Madame Rivière, the manager: explain the problem, apologise, suggest a new date for your meeting and send a revised quote.',
  produce: "Écris un courriel de 80 à 120 mots, sans compter les formules du début et de la fin. Donne une nouvelle date, parle du devis révisé, fais au moins une demande polie et utilise au moins six blocs de la leçon.",
  responseSpec: { kind: 'text', minWords: 80, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'blocs',
        label: 'Les noms avec leurs verbes',
        maxPoints: 4,
        descriptors: [
          "4 : Au moins six blocs de la leçon, chacun complet et juste : prendre du retard, proposer une nouvelle date, accorder une remise, un devis révisé.",
          "3 : Six blocs, mais un verbe vient de l'anglais (un délai de trois jours, placer une commande) ou un bloc est coupé.",
          "2 : Moins de six blocs, ou plusieurs verbes traduits de l'anglais.",
          "1 : Des noms seuls, sans leurs verbes : le retard, le devis, la date, et presque aucune phrase complète.",
        ],
      },
      {
        key: 'registre',
        label: 'Un ton poli et constant',
        maxPoints: 3,
        descriptors: [
          "3 : Vous du début à la fin, une demande au conditionnel ou avec merci de, une formule de début et de fin qui vont avec une cliente.",
          "2 : Le ton est poli, mais une phrase est trop directe (je veux, confirmez), ou il manque une formule.",
          "1 : Tu et vous sont mélangés, ou le message donne des ordres à la cliente.",
        ],
      },
      {
        key: 'contenu',
        label: 'La date et le devis',
        maxPoints: 3,
        descriptors: [
          "3 : La cliente sait tout : le problème, une nouvelle date précise, le devis révisé et ce qui change dans le prix.",
          "2 : Il manque un élément : la date n'est pas précise, ou le devis n'est pas expliqué.",
          "1 : La cliente ne sait pas quoi faire après avoir lu le message.",
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          "2 : Un vrai courriel, entre 80 et 120 mots, avec un objet ou une première phrase qui dit le sujet.",
          "1 : Il manque quelque chose : moins de 80 mots, pas d'excuse, ou pas de demande à la fin.",
        ],
      },
    ],
  },
  scaffold: [
    'Bonjour Madame Rivière,',
    'Je vous écris au sujet de...',
    'Malheureusement,',
    'Je vous prie de nous excuser...',
    'Seriez-vous disponible...',
    'Vous trouverez en pièce jointe...',
    'Merci de me confirmer...',
    'Bien cordialement,',
  ],
  modelAnswer: "Bonjour Madame Rivière,\nJe vous écris au sujet de votre commande de quarante lampes et de notre rendez-vous du jeudi douze novembre. Malheureusement, notre fournisseur a pris du retard, et la livraison aura une semaine de retard. Je vous prie de nous excuser pour ce contretemps. Je vous propose donc une nouvelle date pour notre rencontre : seriez-vous disponible le mardi dix-sept novembre, à dix heures, par vidéo ? Vous trouverez en pièce jointe un devis révisé : pour ce retard, nous vous accordons une remise de cinq pour cent. Les lampes arriveront quand même avant le quinze décembre. Merci de me confirmer la date qui vous convient. Je reste à votre disposition pour toute question.\nBien cordialement,\nCamille Roy, Solane",
  modelAnswerEn: "Hello Madame Rivière,\nI am writing to you about your order of forty lamps and our meeting on Thursday 12 November. Unfortunately, our supplier has fallen behind, and the delivery will be a week late. Please accept our apologies for this setback. I would therefore like to suggest a new date for our meeting: would you be available on Tuesday 17 November at ten, by video? Please find attached a revised quote: for this delay, we are giving you a five per cent discount. The lamps will still arrive before 15 December. Please confirm the date that suits you. I remain at your disposal for any questions.\nKind regards,\nCamille Roy, Solane",
  watchFor: [
    {
      pattern: 'The English verb carried over with a work noun (attendre la réunion for attend, placer une commande, délivrer for deliver).',
      criterion: 'blocs',
      feedback: "Ce nom a son verbe : assister à la réunion, passer une commande, livrer les lampes.",
      ref: 'a1-cartes',
    },
    {
      pattern: 'Délai used for a delay (un délai de trois jours, nous avons du délai) instead of un retard.',
      criterion: 'blocs',
      feedback: "Le temps de trop, c'est un retard : la livraison aura une semaine de retard.",
      ref: 'a4-piege',
    },
    {
      pattern: 'Money calques (une citation for a quote, payer pour la facture, un discount, le bill).',
      criterion: 'blocs',
      feedback: "Un devis, régler la facture, une remise.",
      ref: 'a5-erreurs',
    },
    {
      pattern: 'Order and contract calques (placer, canceller, un agrément, les termes).',
      criterion: 'blocs',
      feedback: "Passer ou annuler une commande, conclure un accord, les conditions.",
      ref: 'a6-piege',
    },
    {
      pattern: 'Company words from English (le département, une position, les quartiers généraux, une branche).',
      criterion: 'blocs',
      feedback: "Un service, un poste, le siège, un bureau.",
      ref: 'a2-piege',
    },
    {
      pattern: 'A bare order or a want instead of a request (je veux, confirmez, envoyez-moi).',
      criterion: 'registre',
      feedback: "Adoucis : pourriez-vous, merci de me confirmer, seriez-vous disponible.",
      ref: 'a7-piege',
    },
    {
      pattern: 'Tu and vous mixed in the same message (Pourriez-vous... ton devis; Salut Madame).',
      criterion: 'registre',
      feedback: "Avec la cliente, vous et votre du début à la fin, et Bonjour Madame.",
      ref: 'a9-erreurs',
    },
    {
      pattern: 'Email calques (en attachement, le sujet for the subject line, forwarder, entendre de vous).',
      criterion: 'blocs',
      feedback: "En pièce jointe, l'objet, transférer, dans l'attente de votre réponse.",
      ref: 'a10-piege',
    },
    {
      pattern: 'No precise new date, or a date given as an order (venez mardi).',
      criterion: 'contenu',
      feedback: "Propose une date précise, au conditionnel : seriez-vous disponible le mardi dix-sept, à dix heures ?",
      ref: 'a11-usages',
    },
    {
      pattern: 'The revised quote is mentioned without saying what changes (no discount, no new price).',
      criterion: 'contenu',
      feedback: "Dis ce qui change : une remise de cinq pour cent, ou le nouveau prix.",
      ref: 'a11-lecture',
    },
    {
      pattern: 'A disagreement or refusal with no softening (non, c’est impossible) when the client asks for something.',
      criterion: 'registre',
      feedback: "Reconnais d'abord, puis propose : je comprends, mais nous pourrions livrer en deux fois.",
      ref: 'a8-focus',
    },
    {
      pattern: 'No apology, no request at the end, or the letter structure of a formal letter pasted in (je vous prie d’agréer...).',
      criterion: 'tache',
      feedback: "Une excuse courte, une demande, puis une formule simple : bien cordialement.",
      ref: 'a11-plan',
    },
  ],
  graderNotes: [
    'Grade the collocations as BLOCKS: a noun counts only with the verb French uses with it (prendre du retard, accorder une remise, proposer une nouvelle date, régler une facture). Count a reused block once.',
    'Word count EXCLUDES the greeting, the subject line and the sign-off, as in the other B1 writing tasks. 10% tolerance (72 to 132) before criterion « tache » loses its point.',
    `Accept regional forms without comment: une soumission for the quote, une rencontre for the meeting, un courriel or un mail, Au plaisir, Salutations, Meilleures salutations, Bien à vous. Familier Québec anglicisms (canceller, forwarder, le bill, la cédule) lose a point under « blocs » only once.`,
    'Accept any invented date, time, price or discount. Do not mark arithmetic or facts.',
    `The conditional of politeness is the tool of ${POLITESSE_REF_EN}: accept any correct polite form (pourriez-vous, seriez-vous, merci de, je vous serais reconnaissant). Do not require inversion.`,
    `Tu and vous follow ${TUVOUS_REF_EN}: vous is expected throughout; a learner who writes that the client already proposed tu and then keeps tu consistently scores the same under « registre ».`,
    `Do NOT grade letter structure: the formal letter and the full email genre are ${COURRIELS_REF_EN}. A greeting, the message and a simple sign-off are enough for full marks.`,
    'Narrator gender is unknown: judge agreement (reconnaissant / reconnaissante) for internal consistency only.',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbe', 'demande'],
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
  terms: ['verbe', 'famille'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-courriel',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'son verbe', v: 'assister, respecter, passer, régler', say: fr(E(1005)),
      detail: { title: 'Le nom et son verbe', body: "Assister à une réunion, respecter un délai, passer une commande, régler une facture. EN: every noun has its verb.", say: fr(E(1007)) } },
    { k: 'la famille', v: 'gérer, la gestion, un gestionnaire', say: fr(E(1011)),
      detail: { title: 'La famille', body: "Le verbe, l'action, la personne. EN: one root, three words.", say: fr(E(1013)) } },
    { k: 'les faux amis', v: 'délai, position, citation, agenda', say: fr(E(1071)),
      detail: { title: 'Les faux amis', body: "Un retard, un poste, un devis, l'ordre du jour. EN: four English words that do not cross.", say: fr(E(1042)) } },
    { k: 'les variantes', v: 'soumission, échéancier, courriel', say: fr(E(1082)),
      detail: { title: 'Les variantes', body: "Au Québec : soumission, échéancier, courriel. En France : devis, planning, mail. EN: both are right where they are used.", say: fr(E(1165)) } },
    { k: 'la demande', v: 'pourriez-vous, merci de, je me permets de', say: fr(E(1114)),
      detail: { title: 'La demande polie', body: "Le conditionnel ou une formule, jamais un ordre au client. EN: soften every request.", say: fr(E(1124)) } },
    { k: 'tu ou vous', v: 'vous au client, du début à la fin', say: fr(E(1148)),
      detail: { title: 'Tu ou vous', body: "Le client propose le tu ; dans un message, tu ne mélanges jamais. EN: the client decides; never mix.", say: fr(E(1150)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbe', 'fauxami', 'tuvous'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu parles de l'entreprise, des réunions, des projets, des clients, des prix, des commandes et des contrats, chaque nom avec son verbe. Tu demandes poliment, tu dis non sans fermer la porte, tu choisis tu ou vous, et tu écris un courriel de travail court. Le piège qui reste est discret : le verbe anglais qui revient quand tu écris vite, attendre la réunion, un délai de trois jours. Avant l'examen, prends dix noms de la leçon et écris pour chacun une phrase avec son verbe. EN: Take ten nouns from the lesson and write one sentence for each with its verb.",
  stats: [
    { k: 'Les blocs', v: 'une soixantaine, du nom au verbe' },
    { k: 'Les familles', v: 'une quinzaine, du verbe à la personne' },
    { k: 'Les variantes', v: 'Québec, France, Belgique, Suisse' },
    { k: 'Les textes', v: 'six lectures, trois écoutes' },
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
/** An errorSpot with a second accepted correction, where two fixes are right. */
const eS2 = (prompt: string, answer: string, alt: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Un mot ne va pas. Écris la phrase correcte. EN: One word is wrong; write the sentence correctly.', prompt, answer, accept: [...OE(answer), ...OE(alt)], why, ref });
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
      id: 'r1-verbe', label: 'Le nom et son verbe', targets: ['verbe-anglais'],
      questions: [
        mc('To attend a meeting :', ['assister à une réunion', 'attendre une réunion', 'aider une réunion'], 0, "Assister à. Attendre, c'est to wait. EN: assister à.", 'a1-scene'),
        mc('To place an order :', ['passer une commande', 'placer une commande', 'mettre une commande'], 0, "On passe une commande. EN: passer.", 'a1-cartes'),
        mc('Gérer, la gestion, un gestionnaire :', ['une famille de mots', 'trois mots sans lien', 'trois verbes'], 0, "Une racine, trois mots. EN: a word family.", 'a1-reperer'),
        tI('Cette fois, nous allons ___ le délai. (to meet)', fr(E(1007)), "On respecte un délai. EN: respecter.", 'a1-cartes'),
        tI('On a ___ un rendez-vous avec la cliente jeudi. (to set up)', fr(E(1006)), "Fixer un rendez-vous. EN: fixé.", 'a1-cartes'),
        eS('Je vais attendre la réunion de dix heures.', fr(E(1005)), "Tu seras dans la salle : tu assistes. EN: assister à.", 'a1-scene'),
        eS('Josée gestionne une équipe de huit personnes.', fr(E(1011)), "Le verbe est gérer : elle gère. EN: gère.", 'a1-reperer'),
        lC('Écoute. Qui passe une commande ?', fr(E(1008)), ["l'hôtel", 'le fournisseur', 'Solane'], 0, "L'hôtel passe une commande. EN: the hotel.", 'a1-usages'),
      ],
    },
    {
      id: 'r2-entreprise', label: "L'entreprise", targets: ['entreprise-calque'],
      questions: [
        mc('Une petite ou moyenne entreprise :', ['une PME', 'une branche', 'un siège'], 0, "Une PME. EN: a small business.", 'a2-cartes'),
        mc("Le bureau principal d'une entreprise :", ['le siège', 'les quartiers généraux', 'la branche'], 0, "Le siège. EN: the head office.", 'a2-piege'),
        mc("Le chiffre d'affaires, c'est...", ["l'argent de toutes les ventes", 'le bénéfice'], 0, "Avant les dépenses. EN: revenue.", 'a2-construire'),
        tI('Nous allons ___ deux vendeurs cet automne. (to hire)', fr(E(1029)), "Embaucher. EN: embaucher.", 'a2-cartes'),
        tI('Josée ___ le service des ventes. (to run)', fr(E(1026)), "Diriger : elle dirige. EN: dirige.", 'a2-cartes'),
        eS('Elle occupe une position de gestionnaire depuis mars.', fr(E(1031)), "Un poste. EN: poste.", 'a2-piege'),
        eS('Ce produit vend bien en Europe.', fr(E(1032)), "Il se vend. EN: se vend.", 'a2-piege'),
        lC('Écoute. Où se fait la production ?', fr(E(1028)), ['à Laval', 'à Lyon', 'à Montréal'], 0, "Dans l'atelier de Laval. EN: in Laval.", 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-reunion', label: 'La réunion', targets: ['reunion-calque'],
      questions: [
        mc('The agenda of a meeting :', ["l'ordre du jour", "l'agenda", 'le calendrier'], 0, "L'ordre du jour. EN: the agenda.", 'a3-cartes'),
        mc('The minutes :', ['le compte rendu', 'les minutes', 'le résumé du temps'], 0, "Le compte rendu. EN: the minutes.", 'a3-erreurs'),
        mc('Tu veux parler pendant la réunion. Tu demandes à...', ['prendre la parole', 'prendre le plancher', 'donner la parole'], 0, "Prendre la parole. EN: to take the floor.", 'a3-choisir'),
        tI('On ___ le point sur le projet Rivière.', fr(E(1045)), "Faire le point. EN: fait.", 'a3-cartes'),
        tI("Toute l'équipe se ___ le lundi à neuf heures. (to meet)", fr(E(1047)), "Se réunir : elle se réunit. EN: réunit.", 'a3-construire'),
        eS("Le premier point à l'agenda, c'est le budget.", fr(E(1042)), "La liste des points : l'ordre du jour. EN: the agenda.", 'a3-erreurs'),
        eS('Passons au prochain item.', 'Passons au prochain point.', "Un point, pas un item. EN: the next item is le point.", 'a3-erreurs'),
        lC('Écoute. Où est-elle ?', fr(E(1050)), ['en réunion', 'en vacances', 'au téléphone'], 0, "Elle est en réunion jusqu'à midi. EN: in a meeting.", 'a3-exemples'),
      ],
    },
    {
      id: 'r4-delai', label: 'Délai ou retard', targets: ['delai-retard'],
      questions: [
        mc('A delay of three days :', ['un retard de trois jours', 'un délai de trois jours', 'une échéance de trois jours'], 0, "Un retard. EN: un retard.", 'a4-piege'),
        mc('Le temps normal pour livrer :', ['le délai de livraison', 'le retard de livraison'], 0, "Le délai. EN: the lead time.", 'a4-cartes'),
        mc("Au Québec, le calendrier d'un projet :", ["l'échéancier", 'la cédule', 'le délai'], 0, "L'échéancier. La cédule vient de l'anglais. EN: the timeline.", 'a4-choisir'),
        tI('Le fournisseur a ___ du retard. (to fall behind)', fr(E(1062)), "Prendre du retard. EN: pris.", 'a4-construire'),
        tI('Pour le moment, nous sommes ___ les temps.', fr(E(1063)), "Être dans les temps. EN: dans.", 'a4-cartes'),
        eS('La cliente veut être délivrée avant Noël.', fr(E(1066)), "Livrer. EN: delivered is livrée.", 'a4-piege'),
        eS("On a deux semaines de délai sur l'échéancier.", fr(E(1069)), "Du retard : le temps de trop. EN: behind.", 'a4-piege'),
        lC('Écoute. Quand est prévue la livraison ?', fr(E(1065)), ['le quinze novembre', 'le quinze décembre'], 0, "Le quinze novembre. EN: 15 November.", 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-prix', label: 'Clients et prix', targets: ['devis-calque'],
      questions: [
        mc('A quote, en France :', ['un devis', 'une citation', 'une cote'], 0, "Un devis. EN: un devis.", 'a5-cartes'),
        mc('Au Québec, le même papier se dit aussi...', ['une soumission', 'une facture', 'un reçu'], 0, "Une soumission. EN: a bid.", 'a5-tableau'),
        mc('La facture arrive...', ['après le travail', 'avant le travail'], 0, "Après : elle demande le prix. EN: after.", 'a5-tableau'),
        tI('Nous pouvons vous ___ une remise de dix pour cent. (to give)', fr(E(1085)), "Accorder une remise. EN: accorder.", 'a5-cartes'),
        tI('Je vais revoir le devis à la ___. (downward)', fr(E(1091)), "À la baisse. EN: baisse.", 'a5-construire'),
        eS('La cliente a réglé pour la facture avec un mois de retard.', fr(E(1084)), "On règle une facture, sans pour. EN: no pour.", 'a5-erreurs'),
        eS2('Pourriez-vous nous faire une citation pour quarante lampes ?', fr(E(1081)), 'Pourriez-vous nous faire une soumission pour quarante lampes ?', "Un devis, ou une soumission au Québec. Une citation, ce sont des mots. EN: a quote.", 'a5-erreurs'),
        lC('Écoute. Le devis est valable combien de temps ?', fr(E(1083)), ['trente jours', 'trois jours'], 0, "Trente jours. EN: thirty days.", 'a5-cartes'),
      ],
    },
    {
      id: 'r6-commande', label: 'Commandes et contrats', targets: ['commande-calque'],
      questions: [
        mc('To cancel an order :', ['annuler une commande', 'canceller une commande'], 0, "Annuler. EN: annuler.", 'a6-piege'),
        mc('To reach an agreement :', ['conclure un accord', 'conclure un agrément', 'faire un agrément'], 0, "Un accord. EN: un accord.", 'a6-piege'),
        mc('Le papier signé qui dit oui à la commande :', ['le bon de commande', 'la facture', 'le devis'], 0, "Le bon de commande. EN: a purchase order.", 'a6-cartes'),
        tI('Solane ___ un nouveau produit au printemps. (to launch)', fr(E(1104)), "Lancer : elle lance. EN: lance.", 'a6-cartes'),
        tI('Nous avons ___ une commande à notre fournisseur de Dakar. (to place)', fr(E(1101)), "Passer une commande. EN: passé.", 'a6-construire'),
        eS('Il faut lire les termes avant de signer.', fr(E(1110)), "Les conditions. EN: the terms.", 'a6-piege'),
        eS('Le client a cancellé sa commande.', fr(E(1107)), "Annuler. EN: cancelled.", 'a6-piege'),
        lC('Écoute. Dans combien de temps arrive la commande ?', fr(E(1106)), ['trois semaines', 'trois jours', 'trois mois'], 0, "Trois semaines. EN: three weeks.", 'a6-histoire'),
      ],
    },
    {
      id: 'r7-demande', label: 'Demander poliment', targets: ['demande-directe'],
      questions: [
        mc('Pour une cliente, le plus poli :', ['Pourriez-vous me faire parvenir le devis ?', 'Envoyez-moi le devis.', 'Je veux le devis.'], 0, "Le conditionnel. EN: could you.", 'a7-cartes'),
        mc('« Merci de me confirmer la date » est...', ['une demande polie', 'un merci pour une date confirmée'], 0, "Merci de + infinitif demande. EN: a request.", 'a7-hacks'),
        mc('À une collègue que tu tutoies :', ["Tu peux m'envoyer le fichier ?", "Pourriez-vous m'envoyer le fichier ?"], 0, "Tu, simple et poli. EN: tu.", 'a7-construire'),
        tI("J'___ besoin du rapport pour demain. (would)", fr(E(1121)), "J'aurais : le conditionnel. EN: aurais.", 'a7-hacks'),
        tI('Je me ___ de vous rappeler notre rendez-vous de jeudi.', fr(E(1116)), "Je me permets de. EN: permets.", 'a7-cartes'),
        eS('Est-ce que ce sera possible de livrer lundi ?', fr(E(1118)), "Ce serait : le conditionnel. EN: serait.", 'a7-piege'),
        eS('Je vous suis reconnaissante de me répondre avant midi.', fr(E(1117)), "Je vous serais. EN: serais.", 'a7-piege'),
        lC('Écoute. Cette phrase est...', fr(E(1119)), ['soutenue, pour un client', 'familière, pour un ami'], 0, "Serait-il possible : soutenu. EN: formal.", 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-desaccord', label: "Ne pas être d'accord", targets: ['desaccord-brut'],
      questions: [
        mc('You have a point :', ['Vous avez raison sur un point.', 'Vous avez un point.', 'Vous tenez un point.'], 0, "Avoir raison sur un point. EN: avoir raison.", 'a8-erreurs'),
        mc('That makes sense :', ['Ça a du sens.', 'Ça fait du sens.'], 0, "Ça a du sens. EN: a du sens.", 'a8-erreurs'),
        mc('Un désaccord poli commence par...', ['ce qui est juste', 'ce qui est faux'], 0, "Ce qui est juste. EN: what is right.", 'a8-focus'),
        tI("Je ne suis pas tout à fait ___ avec ce chiffre.", fr(E(1132)), "D'accord. EN: d'accord.", 'a8-cartes'),
        tI('On pourrait ___ un compromis : la moitié en novembre, le reste en décembre. (to find)', fr(E(1136)), "Trouver un compromis. EN: trouver.", 'a8-cartes'),
        eS('Il me semble que le prix est un peu cher.', fr(E(1134)), "Un prix élevé. EN: a high price.", 'a8-erreurs'),
        eS('Votre idée fait du sens, mais le budget ne suffit pas.', fr(E(1139)), "Une idée a du sens. EN: makes sense.", 'a8-erreurs'),
        lC('Écoute. Que propose la personne ?', fr(E(1135)), ['une livraison en deux fois', 'une remise'], 0, "Une livraison en deux fois. EN: two batches.", 'a8-construire'),
      ],
    },
    {
      id: 'r9-tuvous', label: 'Tu ou vous', targets: ['tu-vous-melange'],
      questions: [
        mc('Avec un nouveau client, tu...', ['gardes le vous', 'passes au tu tout de suite', 'mélanges tu et vous'], 0, "Le vous. EN: keep vous.", 'a9-construire'),
        mc('Avec un client, qui propose le tu ?', ['le client', 'toi'], 0, "Le client décide. EN: the client.", 'a9-cartes'),
        mc('Un message commence par vous. À la fin, tu écris...', ['Merci, vous êtes gentille.', 'Merci, tu es gentille.'], 0, "Tu gardes le vous. EN: keep vous.", 'a9-erreurs'),
        tI("Josée m'a proposé de ___ au tu.", fr(E(1149)), "Passer au tu. EN: passer.", 'a9-cartes'),
        tI('À Lyon, Thomas ___ le vous avec sa responsable. (to keep)', fr(E(1147)), "Garder le vous. EN: garde.", 'a9-exemples'),
        eS('Pourriez-vous relire ton contrat avant midi ?', 'Pourriez-vous relire votre contrat avant midi ?', "Vous, donc votre. EN: votre.", 'a9-erreurs'),
        eS('Salut Madame Rivière, voici le devis.', 'Bonjour Madame Rivière, voici le devis.', "Salut va avec tu. EN: bonjour.", 'a9-erreurs'),
        lC('Écoute. Cette personne parle...', fr(E(1151)), ['à un collègue', 'à une cliente'], 0, "Tu peux : un collègue. EN: a colleague.", 'a9-construire'),
      ],
    },
    {
      id: 'r10-courriel', label: 'Le courriel', targets: ['courriel-calque'],
      questions: [
        mc('The subject line :', ["l'objet", 'le sujet', 'le titre'], 0, "L'objet. EN: l'objet.", 'a10-piege'),
        mc('Attached :', ['en pièce jointe', 'en attachement'], 0, "En pièce jointe. EN: en pièce jointe.", 'a10-piege'),
        mc('En Suisse, la fin la plus courante :', ['Meilleures salutations', 'Au plaisir'], 0, "Meilleures salutations. EN: best regards.", 'a10-tableau'),
        tI('Je ___ Marc-André en copie. (to put)', fr(E(1163)), "Mettre en copie. EN: mets.", 'a10-cartes'),
        tI('Je reste à votre ___ pour toute question.', fr(E(1166)), "À votre disposition. EN: disposition.", 'a10-cartes'),
        eS2('Vous trouverez le devis en attachement.', fr(E(1162)), 'Vous trouverez le devis en annexe.', "En pièce jointe, ou en annexe. EN: attached.", 'a10-piege'),
        eS("J'ai forwardé votre message au service des ventes.", fr(E(1164)), "Transférer. EN: forwarded.", 'a10-piege'),
        lC('Écoute. Où dit-on plutôt un courriel ?', fr(E(1165)), ['au Québec', 'en France'], 0, "Au Québec. EN: in Québec.", 'a10-lecture'),
      ],
    },
    {
      id: 'r11-message', label: 'Ton message', targets: ['message-sans-plan'],
      questions: [
        mc('Pour annoncer le sujet de ton message :', ['Je vous écris au sujet de...', 'Je vous écris à propos que...'], 0, "Au sujet de. EN: about.", 'a11-plan'),
        mc('Pour proposer une date poliment :', ['Seriez-vous disponible mardi ?', 'Venez mardi.'], 0, "Le conditionnel propose. EN: would you be available.", 'a11-plan'),
        mc("Pour t'excuser d'un retard :", ['Je vous prie de nous excuser pour ce contretemps.', 'Excusez le délai.'], 0, "Une excuse courte et polie. EN: please accept our apologies.", 'a11-lecture'),
        tI('Vous trouverez en pièce jointe un devis ___. (revised)', fr(E(1174)), "Révisé. EN: revised.", 'a11-lecture'),
        tI('La livraison ___ se faire en deux fois. (could)', fr(E(1176)), "Pourrait : le conditionnel propose. EN: pourrait.", 'a11-scenario'),
        eS('Pour ce délai, nous vous accordons une remise de cinq pour cent.', fr(E(1175)), "Le temps de trop : un retard. EN: delay.", 'a11-lecture'),
        eS('Merci de me confirmer la date qui vous convainc.', 'Merci de me confirmer la date qui vous convient.', "Convenir : aller bien pour quelqu'un. Convaincre, c'est autre chose. EN: suits you.", 'a11-lecture'),
        lC('Écoute. Quel rendez-vous est proposé ?', fr(E(1173)), ['mardi dix-neuf à dix heures', 'jeudi douze à midi'], 0, "Le mardi dix-neuf, à dix heures. EN: Tuesday the 19th.", 'a11-scenario'),
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
    { front: 'attend a meeting', back: 'assister à une réunion', say: fr(E(1005)) },
    { front: 'meet a deadline', back: 'respecter un délai', say: fr(E(1007)) },
    { front: 'a delay', back: 'un retard', say: fr(E(1071)) },
    { front: 'the minutes', back: 'le compte rendu', say: fr(E(1051)) },
    { front: 'draw up a quote', back: 'faire un devis', say: fr(E(1081)) },
    { front: 'place an order', back: 'passer une commande', say: fr(E(1101)) },
    { front: 'could you send me', back: 'pourriez-vous me faire parvenir', say: fr(E(1114)) },
    { front: 'you have a point', back: 'vous avez raison sur un point', say: fr(E(1138)) },
    { front: 'attached', back: 'en pièce jointe', say: fr(E(1162)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Les affaires, en résumé',
  body: `${REFRAME} Tu sais maintenant parler de l'entreprise, des réunions, des projets, des clients, des prix, des commandes et des contrats, chaque nom avec son verbe. Tu demandes poliment, tu dis non sans fermer la porte, tu choisis tu ou vous, et tu écris un courriel court à une cliente. La prochaine leçon, ${refFr('b1.37')}, t'apprend à lire un texte difficile sans tout comprendre. Et ${COURRIELS_REF} fera le tour complet des courriels et des lettres. EN: Next comes reading a hard text; lesson 39 in B1 covers emails and letters in full.`,
  points: [
    'Un nom vient avec son verbe : assister à une réunion, respecter un délai.',
    'Un délai, on le respecte ; un retard, on le prend.',
    'Au client : vous, le conditionnel, merci de.',
    'Un courriel de travail : une formule, le message, une formule.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbe', 'delai', 'courriel'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: "À toi d'écrire au client",
    opener: {
      line: "Une livraison en retard, une cliente à Lyon, un devis à refaire : à toi d'écrire le message qui garde la cliente. EN: A late delivery, a client in Lyon, a quote to redo: your turn to write the message that keeps the client.",
      imageRef: 'lessons/affaires/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit à une cliente pour proposer une nouvelle date et un devis révisé, et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote to a client proposing a new date and a revised quote, and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-reunion', 'a11-quiz/r6-commande', 'a11-quiz/r9-tuvous'],
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
  sheet('sheet-mots', "Les mots de l'entreprise", ['la méthode', 'douze familles', 'le nom et son verbe', 'six services'], [
    teach('sheet-mots-teach', 'La méthode',
      `${REFRAME} Pour chaque nom, apprends le verbe qui va avec (on respecte un délai) et sa famille (gérer, la gestion, un gestionnaire). EN: learn each noun with its verb and its family.`),
    table('sheet-mots-familles', 'Douze familles', ['Verbe', 'Action', 'Personne'], [
      ['gérer', 'la gestion', 'un gestionnaire'],
      ['diriger', 'la direction', 'un directeur, une directrice'],
      ['vendre', 'la vente', 'un vendeur, une vendeuse'],
      ['produire', 'la production', 'un producteur (le résultat : un produit)'],
      ['embaucher', "l'embauche", ''],
      ['négocier', 'la négociation', 'un négociateur'],
      ['facturer', 'la facturation (le papier : une facture)', ''],
      ['commander', 'une commande', ''],
      ['livrer', 'la livraison', 'un livreur'],
      ['lancer', 'le lancement', ''],
      ['réunir, se réunir', 'une réunion', ''],
      ['avancer', "l'avancement", ''],
    ]),
    table('sheet-mots-verbes', 'Le nom et son verbe', ['Le nom', 'Son verbe', 'Pas'], [
      ['une réunion', 'assister à, animer, fixer', 'attendre'],
      ['un rendez-vous', 'fixer, prendre, reporter', 'faire'],
      ['un délai', 'respecter', 'faire'],
      ['une commande', 'passer, livrer, annuler', 'placer, canceller'],
      ['un devis', 'faire, envoyer, revoir à la baisse', 'une citation'],
      ['une facture', 'envoyer, régler', 'payer pour'],
      ['une remise', 'accorder', 'donner un discount'],
      ['un contrat, un accord', 'conclure, signer', 'un agrément'],
      ['un poste', 'occuper', 'une position'],
      ["un chiffre d'affaires", 'réaliser', 'gagner'],
    ]),
    table('sheet-mots-services', 'Six services', ['Le service', 'Son verbe', 'Variante'], [
      ['les ventes', 'vendre', 'le service des ventes'],
      ['la comptabilité', 'facturer, régler', ''],
      ['les ressources humaines', 'embaucher', 'les RH'],
      ['la production', 'produire, fabriquer', "l'atelier, l'usine"],
      ['le marketing', 'lancer un produit', 'Québec : la mise en marché'],
      ['le service à la clientèle', 'répondre aux clients', 'France : le service client'],
    ]),
  ]),
  sheet('sheet-reunion', 'La réunion et le projet', ['les gestes de la réunion', 'délai ou retard', 'le calendrier du projet'], [
    table('sheet-reunion-gestes', 'Les gestes de la réunion', ['Quand', 'Le bloc', 'Anglais'], [
      ['avant', "fixer une réunion, envoyer l'ordre du jour", 'set up a meeting, send the agenda'],
      ['pendant', 'assister à, animer une réunion', 'attend, lead a meeting'],
      ['pendant', 'prendre la parole, prendre des notes', 'speak up, take notes'],
      ['pendant', 'faire le point, passer au point suivant', 'review progress, move on'],
      ['après', 'rédiger, envoyer le compte rendu', 'write up, send the minutes'],
      ['autrement', 'reporter, annuler une réunion ; être en réunion', 'postpone, cancel; be in a meeting'],
    ]),
    teach('sheet-reunion-delai', 'Délai ou retard',
      "Un délai, c'est le temps accordé pour faire quelque chose : le délai de livraison est de six semaines, on respecte un délai. Un retard, c'est le temps de trop : il y a un retard de trois jours, on prend du retard. EN: délai is the time allowed; a delay is un retard."),
    table('sheet-reunion-projet', 'Le calendrier du projet', ['Le bloc', 'Sens', 'Variante'], [
      ['être dans les temps', 'tout va comme prévu', ''],
      ['prendre du retard', 'dépasser le temps prévu', ''],
      ["un échéancier", 'les étapes et leurs dates', 'Québec ; France : le planning, le calendrier'],
      ['livrer, la livraison', 'apporter la commande', 'pas délivrer'],
      ['reporter une date', 'la mettre plus tard', ''],
      ["passer à l'étape suivante", 'avancer dans le projet', ''],
      ['la cédule', 'anglicisme familier au Québec', "à l'écrit : l'échéancier, l'horaire"],
    ]),
  ]),
  sheet('sheet-clients', 'Clients, prix et contrats', ['six papiers', 'le prix', 'la commande et le contrat', 'les faux amis'], [
    table('sheet-clients-papiers', 'Six papiers', ['Le papier', 'Quand', 'Son verbe'], [
      ['le devis', 'avant : le prix proposé', 'faire, envoyer'],
      ['la soumission', 'avant, au Québec', 'présenter, demander'],
      ['le bon de commande', 'le client dit oui', 'signer, envoyer'],
      ['le contrat', 'les conditions des deux', 'conclure, signer'],
      ['la facture', 'après : le prix à payer', 'envoyer, régler'],
      ['le reçu', 'la preuve du paiement', 'remettre, garder'],
    ]),
    table('sheet-clients-prix', 'Le prix', ['Le bloc', 'Sens', 'Variante'], [
      ['accorder une remise', 'baisser le prix', 'Québec : un rabais'],
      ['négocier le prix', 'discuter pour trouver un prix', ''],
      ['revoir un prix à la baisse', 'le rendre plus bas', ''],
      ['hors taxes (HT)', 'sans les taxes', 'Québec : avant taxes'],
      ['toutes taxes comprises (TTC)', 'avec les taxes', 'Québec : taxes incluses'],
      ["réaliser un chiffre d'affaires", "l'argent de toutes les ventes", 'pas le bénéfice'],
    ]),
    table('sheet-clients-faux', 'Les faux amis du client', ['Anglais', 'Pas', 'Mais'], [
      ['a quote', 'une citation', 'un devis, une soumission'],
      ['pay for the invoice', 'payer pour la facture', 'régler la facture'],
      ['a discount', 'un discount', 'une remise, un rabais'],
      ['place an order', 'placer une commande', 'passer une commande'],
      ['cancel', 'canceller', 'annuler'],
      ['an agreement', 'un agrément', 'un accord'],
      ['the terms', 'les termes', 'les conditions'],
      ['the bill (Québec, familier)', 'le bill', 'la facture'],
    ]),
  ]),
  sheet('sheet-politesse', 'Demander et nuancer', ['la demande polie', 'le désaccord', 'tu ou vous au travail'], [
    table('sheet-politesse-demande', 'Demander, du simple au soigné', ['Pour qui', 'Tu dis', 'Leçon'], [
      ['un collègue', "tu peux m'envoyer, j'aurais besoin de", ''],
      ['un collègue, un client', 'vous voulez bien, est-ce que ce serait possible de', `${POLITESSE_REF}`],
      ['un client', 'pourriez-vous, seriez-vous disponible', `${CONDITIONNEL_REF}`],
      ["à l'écrit", 'merci de + infinitif, je me permets de', ''],
      ['un client, soigné', 'serait-il possible de, faire parvenir', `${INVERSION_REF}`],
      ['très soutenu', 'je vous serais reconnaissant(e) de', `${REGISTRES_REF}`],
    ]),
    table('sheet-politesse-desaccord', 'Dire non sans fermer la porte', ['Étape', 'Tu dis', 'Pas'], [
      ['reconnaître', 'vous avez raison sur un point', 'vous avez un point'],
      ['écouter', 'je comprends votre point de vue, mais', ''],
      ['nuancer', "je ne suis pas tout à fait d'accord ; il me semble que", ''],
      ['expliquer', 'votre idée a du sens, mais le budget ne suffit pas', 'fait du sens'],
      ['proposer', 'je propose plutôt ; on pourrait trouver un compromis', ''],
      ['refuser', 'malheureusement, nous devons refuser', 'non, impossible'],
    ]),
    table('sheet-politesse-tuvous', 'Tu ou vous au travail', ['Avec qui', 'Le plus souvent', 'À retenir'], [
      ['un collègue, au Québec', 'tu, très vite', 'on passe au tu dès la première semaine'],
      ['un collègue, en France', 'tu ou vous, selon le bureau', 'regarde comment les autres se parlent'],
      ['un supérieur', 'vous, sauf s’il propose le tu', 'le chef propose'],
      ['un client', 'vous', 'le client propose le tu'],
      ['un courriel officiel', 'vous', 'même à une collègue que tu tutoies'],
      ['un seul message', 'tu OU vous', 'jamais les deux'],
    ]),
  ]),
  sheet('sheet-courriel', 'Le courriel professionnel', ['les gestes', 'commencer et finir', 'relire ton message'], [
    table('sheet-courriel-gestes', 'Les gestes du courriel', ['Le bloc', 'Sens', 'Pas'], [
      ["l'objet", 'la ligne du sujet', 'le sujet'],
      ['en pièce jointe, en annexe', 'avec le courriel', 'en attachement'],
      ['mettre en copie', 'envoyer aussi à quelqu’un', 'en carbone'],
      ['répondre à tous', 'à toutes les personnes du message', ''],
      ['transférer un message', 'l’envoyer plus loin', 'forwarder'],
      ['un courriel de relance', 'on écrit encore, poliment', ''],
      ['un courriel, un mail', 'Québec ; France, plus familier', ''],
    ]),
    table('sheet-courriel-formules', 'Commencer et finir', ['Moment', 'Formule', 'Où, quel ton'], [
      ['commencer', 'Bonjour Madame Rivière,', 'partout, avec le nom'],
      ['commencer', 'Madame, Monsieur,', 'si tu ne connais pas le nom'],
      ['avant la fin', 'Je reste à votre disposition.', 'poli, soutenu'],
      ['avant la fin', "Dans l'attente de votre réponse,", 'poli, soutenu'],
      ['finir', 'Cordialement, Bien cordialement', 'partout'],
      ['finir', 'Bien à vous', 'Belgique, France'],
      ['finir', 'Meilleures salutations', 'Suisse'],
      ['finir', 'Salutations, Au plaisir', 'Québec ; Au plaisir est amical'],
    ]),
    table('sheet-courriel-relire', 'Relire ton message', ['À vérifier', 'Comment'], [
      ["L'objet", 'on sait de quoi tu parles avant d’ouvrir'],
      ['Le problème', 'dit simplement, avec malheureusement'],
      ['La proposition', 'une date précise, au conditionnel'],
      ['Le devis', 'ce qui change : la remise ou le nouveau prix'],
      ['Tu ou vous', 'vous du début à la fin'],
      ['Les blocs', 'au moins six, chaque nom avec son verbe'],
    ]),
    teach('sheet-courriel-plus', 'Et la lettre ?',
      `Ici, un courriel court suffit : une formule, le message, une formule. La lettre formelle et toutes ses formules, c'est ${COURRIELS_REF}. EN: the full formal letter comes later.`),
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
  { id: 'd-verbe', title: 'Le bon verbe', format: 'mcq' as const, coach: "Chaque nom a son verbe : une réunion, on y assiste. EN: every noun has its verb.", q: 'To attend the meeting : ... à la réunion.', opts: ['assister', 'attendre'], correct: 0, why: "Assister à. EN: assister à.", items: [E(1000), E(1005), E(1010), E(1006), E(1007), E(1008)], audio: AUDIO },
  { id: 'd-entreprise', title: 'Service, poste, siège', format: 'mcq' as const, coach: "Un service, un poste, le siège, un bureau, embaucher. EN: five words that do not cross.", q: 'Elle occupe un ... de gestionnaire.', opts: ['poste', 'position'], correct: 0, why: "Un poste. EN: a job.", items: [E(1024), E(1025), E(1026), E(1029), E(1031), E(1032)], audio: AUDIO },
  { id: 'd-reunion', title: 'Avant, pendant, après', format: 'sort' as const, coach: "Deux piles : ce qu'on fait pendant la réunion, ce qu'on fait après. EN: during or after.", buckets: ['pendant la réunion', 'après la réunion'], items: [E(1043), E(1044), E(1048), E(1046), E(1051), E(1049)], audio: AUDIO },
  { id: 'd-delai', title: 'Délai ou retard', format: 'sort' as const, coach: "Deux piles : le temps accordé, le temps de trop. EN: the time allowed, the time too many.", buckets: ['le temps accordé', 'le temps de trop'], items: [E(1070), E(1007), E(1063), E(1062), E(1069), E(1071)], audio: AUDIO },
  { id: 'd-devis', title: 'Avant ou après', format: 'sort' as const, coach: "Deux piles : le prix avant le travail, le prix après. EN: quote or invoice.", buckets: ['avant : le devis', 'après : la facture'], items: [E(1081), E(1083), E(1091), E(1084), E(1088), E(1086)], audio: AUDIO },
  { id: 'd-commande', title: 'Passer, annuler, conclure', format: 'mcq' as const, coach: "On passe une commande, on l'annule, on conclut un accord. EN: each paper has its verb.", q: 'Nous avons ... une commande à Dakar.', opts: ['passé', 'placé'], correct: 0, why: "Passer une commande. EN: passer.", items: [E(1101), E(1107), E(1108), E(1103), E(1109), E(1110)], audio: AUDIO },
  { id: 'd-demande', title: 'Une demande, pas un ordre', format: 'flashcard' as const, coach: "Lis chaque demande à voix haute, doucement : le conditionnel fait le travail. EN: read each request aloud.", items: [E(1114), E(1116), E(1117), E(1119), E(1121), E(1124)], audio: AUDIO },
  { id: 'd-desaccord', title: 'Dire non, doucement', format: 'mcq' as const, coach: "Ce qui est juste d'abord, puis le mais, puis une solution. EN: acknowledge, qualify, propose.", q: 'You have a point : vous avez ... sur un point.', opts: ['raison', 'un point'], correct: 0, why: "Avoir raison sur un point. EN: avoir raison.", items: [E(1138), E(1133), E(1134), E(1135), E(1136), E(1139)], audio: AUDIO },
  { id: 'd-tuvous', title: 'Tu ou vous', format: 'sort' as const, coach: "Deux piles : ce qu'on dit à un collègue, ce qu'on dit à un client. EN: colleague or client.", buckets: ['à un collègue', 'à un client'], items: [E(1146), E(1151), E(1149), E(1148), E(1152), E(1150)], audio: AUDIO },
  { id: 'd-courriel', title: 'Le courriel sans anglais', format: 'mcq' as const, coach: "L'objet, en pièce jointe, transférer, votre retour. EN: the French email words.", q: 'Vous trouverez le devis en ... .', opts: ['pièce jointe', 'attachement'], correct: 0, why: "En pièce jointe. EN: attached.", items: [E(1162), E(1163), E(1164), E(1166), E(1167), E(1168)], audio: AUDIO },
  { id: 'd-message', title: 'Un message qui se suit', format: 'flashcard' as const, coach: "Lis le message, une phrase à la fois : le sujet, le problème, l'excuse, la date, le devis. EN: one move per sentence.", items: [E(1171), E(1172), E(1177), E(1173), E(1174), E(1175)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'verbe-anglais', description: 'Pairs a work noun with the verb its English equivalent takes (attendre la réunion, placer une commande), so every word is French and the block is not.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-verbe', retest: 'd-verbe' },
  { id: 'entreprise-calque', description: 'Builds company words from English (le département, une position, les quartiers généraux, une branche, louer for hire) or says a product vend instead of se vend.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a11-mission'], drill: 'd-entreprise', retest: 'd-entreprise' },
  { id: 'reunion-calque', description: 'Carries English meeting words into French (attendre for attend, les minutes, l’agenda for the agenda, un item) or confuses réunir and se réunir.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check', 'a11-mission'], drill: 'd-reunion', retest: 'd-reunion' },
  { id: 'delai-retard', description: 'Says délai for a delay, délivrer for deliver, or la cédule for the schedule, so the time allowed and the time lost become the same word.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-delai', retest: 'd-delai' },
  { id: 'devis-calque', description: 'Uses English money words (une citation for a quote, payer pour la facture, un discount, le bill) or mixes up the quote and the invoice.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a11-mission'], drill: 'd-devis', retest: 'd-devis' },
  { id: 'commande-calque', description: 'Places, cancels and agrees in English (placer une commande, canceller, un agrément, les termes) instead of passer, annuler, un accord, les conditions.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-commande', retest: 'd-commande' },
  { id: 'demande-directe', description: 'Gives a client or a boss a bare order or a want (je veux, confirmez, envoyez-moi), or uses the future where the conditional softens (ce sera possible).', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-demande', retest: 'd-demande' },
  { id: 'desaccord-brut', description: 'Disagrees with a flat no, or with calques (vous avez un point, ça fait du sens, un prix cher), and proposes nothing.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-desaccord', retest: 'd-desaccord' },
  { id: 'tu-vous-melange', description: 'Mixes tu and vous in one message (vous with ton, Salut Madame), or switches to tu with a client who has not proposed it.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-tuvous', retest: 'd-tuvous' },
  { id: 'courriel-calque', description: 'Writes the email in English shapes (en attachement, le sujet for the subject line, forwarder, entendre de vous, votre feedback).', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a11-mission'], drill: 'd-courriel', retest: 'd-courriel' },
  { id: 'message-sans-plan', description: 'Writes to the client with no clear problem, no precise new date or no word on the revised quote, or ends with no request.', detectOn: ['a11-lecture', 'a11-plan', 'a11-mission'], drill: 'd-message', retest: 'd-message' },
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-36-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-36-bienvenue': "The welcome email from human resources (act 1), ONE VOICE, one take, a Montréal woman in her thirties reading it as she would say it to a new colleague: warm, practical, unhurried. Québec French. « on t'attend à la formation » and « assister à la réunion » are ordinary words, not stressed.",
  'rec-b1-36-presentation-ecoute': "REQUIRED FOR THE EAR MISSION (act 2): ten lines, ONE TAKE, ONE VOICE, in authored order, as Josée presenting her company to a new employee: proud, friendly, clear. Québec French. Numbers read in full (trente-cinq, quatre millions). A short pause between lines, no music.",
  'rec-b1-36-piege-entreprise': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « se vend » is two clear words; « le siège » ends in a clear [ʒ].",
  'rec-b1-36-compte-rendu': "The meeting minutes (act 3), ONE VOICE, one take, Léa reading her own minutes at the next meeting: neutral, efficient, a little formal. France French (she arrived from Paris). The three agenda items are separated by a clear breath.",
  'rec-b1-36-boite-vocale-ecoute': "REQUIRED FOR THE EAR MISSION (act 4): ten lines, ONE TAKE, in authored order, as five voicemails left on the project line. THREE VOICES taking turns (Marc-André, Québec French; the supplier, Dakar French; the client, Lyon French), each with a short phone beep between messages. Calm, factual; the delay news is not dramatic.",
  'rec-b1-36-piege-delai': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « retard » and « délai » must be clearly different words to the ear: [ʁə.taʁ], [de.lɛ].",
  'rec-b1-36-demande': "The client's request for a quote (act 5), ONE VOICE, one take, a Lyon woman in her fifties reading her own email: courteous, precise, businesslike. France French. The questions rise naturally; « est-ce que vous accordez une remise » is a real question, not a demand.",
  'rec-b1-36-dakar': "The call to Dakar (act 6), THREE VOICES: a narrator, Ousmane (a Dakar man in his forties, calm, apologetic without being servile; Senegalese French welcome) and the learner (Québec French, polite and firm). Phone-line feel on Ousmane's voice only. Nobody raises their voice.",
  'rec-b1-36-piege-commande': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « passé une commande » links with no pause; « bon de commande » is one group.",
  'rec-b1-36-demandes-ecoute': "REQUIRED FOR THE EAR MISSION (act 7): ten lines, ONE TAKE, in authored order, as ten requests heard in one office morning. FOUR VOICES (two women, two men, mixed francophone accents). The one tu line is relaxed and quick; the soutenu lines (serait-il possible, je vous serais reconnaissante) are slower and more careful. A short pause between lines.",
  'rec-b1-36-piege-demande': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. The conditional endings are clear: « aurais » [ʒo.ʁɛ], « serait » [sə.ʁɛ], never the future [e].",
  'rec-b1-36-nouvelles': "The company newsletter (act 8), FOUR VOICES: a presenter reads the heading and the introduction; then Josée (Québec French, warm, direct), Marc-André (Québec French, thoughtful) and Léa (Paris French, lively, a little self-mocking about « parfois fort »). Each view gets the same warmth: none is the right answer.",
  'rec-b1-36-lyon': "The video call (act 9), THREE VOICES: a narrator, Thomas (a Lyon man in his thirties, friendly but careful at first; France French) and the learner (Québec French, open). Light video-call feel. The switch to tu is relaxed, with a smile in both voices.",
  'rec-b1-36-reponse': "Josée's reply to the client (act 10), ONE VOICE, one take, Josée reading her email before sending it: professional, warm, never pushy. Québec French. « Bonjour Madame Rivière » and « Bien cordialement » each get a short breath after them, so the learner hears the frame.",
  'rec-b1-36-piege-courriel': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « en pièce jointe » is one group; « l'objet » is [lɔb.ʒɛ].",
  'rec-b1-36-message': "Marc-André's message to the Genève client (act 11), ONE VOICE, one take, a Montréal project manager in his thirties reading his email aloud before sending it: clear, apologetic without grovelling, confident about the new date. Québec French. The five moves (sujet, problème, excuse, proposition, demande) each end with a short breath.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 36',
  intro: "Knowing the word « une réunion » is not enough to use it at work: you also need its verb, assister à, or you end up telling your new boss you will wait outside the meeting. This lesson teaches business French the way people actually use it, as nouns with what you do with them (respecter un délai, passer une commande, faire un devis, accorder une remise) and as word families (gérer, la gestion, un gestionnaire). It covers the company and its jobs, meetings, projects and deadlines, clients and prices, orders and contracts, polite requests, polite disagreement, tu or vous at work and a first professional email, with real variants from Québec, France, Belgium and Switzerland. It ends with an email to a client proposing a new meeting date and a revised quote.",
  skill: 'PE',
  grammarAssumed: [CONDITIONNEL_UNIT, POLITESSE_UNIT, INVERSION_UNIT, REGISTRES_UNIT, TUVOUS_UNIT, CONCESSION_UNIT],
  grammarIntroduced: [
    'Business topic vocabulary taught as nouns with their verbs (collocations) and word families rather than isolated nouns: the company, the meeting, the project, clients and prices, orders and contracts',
    'Business false friends and calques: assister à (not attendre), un retard (not un délai) for a delay, un devis (not une citation), un poste (not une position), le siège, passer (not placer) une commande, les conditions (not les termes), l’objet and en pièce jointe',
    'Délai against retard: the time allowed against the time lost, with respecter un délai and prendre du retard',
    'Regional business variants presented as correct in place: une soumission, un échéancier, un courriel, le service à la clientèle, la mise en marché (Québec); le planning, un mail, HT / TTC (France); Bien à vous (Belgium); Meilleures salutations (Switzerland)',
    'The conditional of politeness applied to work requests (pourriez-vous, seriez-vous disponible, serait-il possible de, j’aurais besoin de) and the written formulas merci de + infinitive, je me permets de, je vous serais reconnaissant de',
    'Polite disagreement as a sequence: acknowledge (vous avez raison sur un point), qualify (je ne suis pas tout à fait d’accord, il me semble que), propose (trouver un compromis)',
    'Tu or vous at work: who proposes tu, keeping vous with clients, and never mixing the two in one message',
    'A short professional email (greeting, message, sign-off) to a client proposing a new meeting date and a revised quote, 80 to 120 words',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Connaître le mot « une réunion » ne suffit pas : il faut aussi son verbe, assister à, sinon tu dis à ta directrice que tu vas attendre dehors. Cette leçon t'apprend le français des affaires par noms et par gestes : l'entreprise, la réunion, le projet, les clients, les prix, les commandes, les demandes polies, le désaccord, tu ou vous, et le courriel. À la fin, tu écris à une cliente pour proposer une nouvelle date et un devis révisé.",
    minutes: 140,
    difficulty: 3,
    glyph: 'pro',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: AFFAIRES_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, BIENVENUE_TEXT, COMPTE_RENDU_TEXT, DEMANDE_TEXT, NOUVELLES_TEXT, REPONSE_TEXT, MESSAGE_TEXT, dicteeFor };
