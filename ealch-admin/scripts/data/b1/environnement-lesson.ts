// b1.33.l1 « L'environnement et la société » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md, in the
// VOCAB SHAPE, TOPIC VARIANT, of B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 and §2.3.
// No new section types.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]` and the validators run on `LESSON` itself, as b1.27 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (family / collocations · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   The vocab loop per act (shapes doc §2.1, topic variant §2.3): meet the
//   words in context (reading / listening / story), learn them as families
//   and collocations (cardDeck: the block, its neighbour, the English, the
//   variant), tell them apart (groupDrill), a lookup or consolidation
//   mission (examples / tapTable / dictation / flashcards / focus / hacks),
//   use them (groupDrill of real situations), trap the English calque
//   (trapDrill or commonErrors), check (gated control pages).
//
//    1  Un mot n'arrive jamais seul   7   the method; 4 collocations, 1 family (sauver vs économiser)
//    2  Le climat change              7   chaud / sec / inonder families; il fait vs il y a; temps vs climat
//    3  Polluer, la pollution         7   the polluer and émettre families; word-class endings (tapTable)
//    4  Trier et recycler             7   trier, recycler, compost, consigne; four countries, four bins
//    5  Consommer autrement           7   consommer, gaspiller, réparer, réutiliser; local, saison, vrac, seconde main
//    6  L'énergie                     7   six sources and their neighbours (tapTable); save / plant / power
//    7  Se déplacer en ville          7   transports en commun / publics, covoiturage, bornes, ZFE, rouler à vélo
//    8  Protéger la nature            7   protéger, menacer, déforestation, désertification; -é vs -ant
//    9  Qui paie, qui décide          7   taxe, manifester, pétition, décision, inégalités (tapTable)
//   10  Donner ton avis               7   pour / contre, à mon avis, il faudrait, je propose de, il faut que
//   11  À toi de proposer            11   model message, plan, role play, TASK, practice, cheat, quiz
//
//   TOTAL 81 missions, 11 acts (7 x 10 + 11). 26 word families and 48
//   collocation rows (74 blocks) plus the opinion formulas. Seven readings
//   of 123 to 141 words (a notice, a news brief, a forum post, a school
//   newsletter, a news brief, readers' letters, the model message), three
//   hideLines listenings, two stories, one scene. Corpus: 200 authored rows
//   (.1000-.1199, the whole block) plus 28 reused seed rows, 228 item ids,
//   225 released act by act through `deckTranche` (three seed rows carry no
//   flashcard drill: NOT_DECK_ABLE). Quiz: 11 rounds of 8 (39 mcq, 22
//   typeIn, 16 errorSpot, 11 listenChoose). Eleven error triggers, eleven
//   drills, five reference sheets reached from 15 missions by `sheetId`, ten
//   terms. Three tapTables (acts 3, 6, 9). 556 estimated screens.
//   Chapter artwork: `environnement-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un mot n'arrive jamais seul : il vient avec sa famille et ses voisins. »
//   EN: A word never arrives alone: it comes with its family and its neighbours.
//
//   ONE METAPHOR, ONE SMALL THING AND ITS RIPPLE. A gesture at home ripples
//   out to the street, the city and the planet; a word ripples out to its
//   family (polluer, la pollution, polluant, un pollueur) and to its
//   neighbours (faire le tri, économiser l'énergie, signer une pétition). The
//   learner who knows « l'énergie » alone says « sauver l'énergie » (act 1);
//   the one who knows its neighbour says « économiser ». It is NOT « learn
//   the ecology words »: a noun list is exactly what this lesson refuses
//   (corpus REFRAME_REJECTED).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the environment and society topic vocabulary of B1 as families
//           and collocations; the word-class endings as a decoding tool;
//           -é (undergoes) against -ant (acts); il fait against il y a for
//           weather events; the environment false friends (sauver,
//           plante, pouvoir, panel, fixer, en gros, démonstration, faire
//           une décision); the bin and transport variants of Québec,
//           Belgium, Switzerland and France; the opinion formulas as
//           collocations; the message to a town council.
//   QUOTES  weather words (a1.10), transport words (a2.27) and shopping
//           words (a2.26) as imported seed rows, never retyped; b1.08's
//           conditional, b1.09's polite formulas, b1.14 to b1.16's
//           subjunctive and b1.30 to b1.32's connectors BY NUMBER only (no
//           reframe imported: b1.32 does not exist yet and the coordination
//           and subordination reframes are about links, not this lesson).
//   LEAVES  the media vocabulary of the brief and the forum to b1.34 (named
//           in the roundup); register as a system to b1.25; the formal
//           letter as a genre to b1.39. The subjunctive appears ONLY after
//           il faut que / je voudrais que (rows 1182, 1183, the seed row
//           fr.b1.ecologie.004 and the task model).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (vous to the landlady and the councillor). Every learner
//   surface that explains something carries English (`en`, or a final
//   « EN: »), and NO ANSWER ever does. Every `say` is French. Theme
//   `ecologie`, block 1000-1199 (corpus §A). A1 and A2 citations use the
//   English trail label; b1.* ones are French from the plan. Setting leans
//   Canadian (Montréal, Québec, the Saint-Laurent, Sherbrooke by the task
//   model) with Liège, Lausanne, Genève, Lyon, Thiès and the Sahel;
//   characters recur only inside this lesson. No bubble carries a « ? » or
//   a « ! ». Tone: factual, several viewpoints per text, never a lecture.
//   Answer slots are spread by permuting options WITH their correct index
//   (spreadMissionSlots, spreadQuizSlots), never by editing content.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 81 missions in 11 acts, inside the vocab shape's 75-90. The topic
//      list (climate, pollution, waste, consumption, energy, transport,
//      nature, society, opinion) fits one act each; consumption and repair
//      share act 5. Keep, or split repair into its own act (12 acts, ~88)?
//   2. 29 groupDrills (ten of them act checks), as in b1.27: the vocab loop
//      asks for a « tell apart » and a « use » drill per act. Accept?
//   3. The task is PE (written, 110-150 words), graded on blocks, nuance,
//      links and completeness, and the grader notes say a learner AGAINST
//      the measure scores the same as one for it. Confirm.
//   4. « fermer la lumière » (Québec) is taught as a right variant, not an
//      error, and trapped only in the other direction (ouvre). Keep?
//   5. Facts used: Canada's 2023 record wildfire season and the smoke over
//      Montréal; the 2021 Belgian floods; Québec hydro (« presque toute »);
//      France nuclear (« environ deux tiers »); the Taiba Ndiaye wind farm
//      in the Thiès region; the Vaud bag tax since 2013; the 2018 fuel-tax
//      rise and the gilets jaunes; the 2019 Montréal climate march; the
//      Saint-Laurent belugas (< 2,000, endangered); the Great Green Wall.
//      All phrased without exact figures where they could date. Lyon's ZFE
//      is said to « fait débat »: Parliament voted to abolish ZFEs on
//      2026-04-14, the Conseil constitutionnel struck that out on
//      2026-05-21, and Lyon's zone is in force and still contested.
//      FACT PASS DONE 2026-09-26: Thiès row reworded to « dans la région
//      de Thiès » (Taïba Ndiaye is in the Tivaouane department, past
//      Tivaouane, which is itself 28 km from Thiès city); gilets jaunes
//      row says « la taxe sur les carburants » (the 2018 rise hit diesel
//      hardest, not only « l'essence »); the two EV rows say « ne rejette
//      pas de gaz » (no exhaust) instead of « ne pollue pas » (tyre and
//      brake particles remain).
//   6. Nineteen published Postgres rows are twinned (corpus DB_ONLY_TWINS);
//      the DB holds 145 fr.b1 ecologie rows the seed does not. Dedupe at
//      import or keep both?
//   7. Three tapTables (acts 3, 6, 9), one per act. Confirm three.
//   8. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.
//   9. The b1 house tests (answer slots, EN tails, integrity) and
//      `_preview-b1.ts` do not list b1.33 yet; I was not allowed to edit
//      them. Their checks were replicated in the scratch validation and
//      pass. Add « environnement » to their lists when the wave lands.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  AVIS_TEXT, FUMEE_TEXT, FORUM_TEXT, JOURNAL_TEXT, BELUGAS_TEXT, COURRIER_TEXT, MESSAGE_TEXT,
  METEO_UNIT, COURSES_UNIT, TRANSPORTS_UNIT, CONDITIONNEL_UNIT, POLITESSE_UNIT,
  SUBJ_FORM_UNIT, SUBJ_DECL_UNIT, SUBJ_INF_UNIT, PASSIF_UNIT,
  COORDINATION_UNIT, SUBORDINATION_UNIT, CONCESSION_UNIT,
  METEO_REF, COURSES_REF, TRANSPORTS_REF, CONDITIONNEL_REF, POLITESSE_REF,
  SUBJ_FORM_REF, SUBJ_INF_REF, PASSIF_REF, COORDINATION_REF, SUBORDINATION_REF, CONCESSION_REF, MEDIAS_REF,
} from './environnement-corpus.ts';
import { ENVIRONNEMENT_TERMS } from './environnement-terms.ts';

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
  if (!r) throw new Error(`b1.33: no item ${id}`);
  return r;
}

/** NOT_SPEAKABLE is typed by hand in the corpus; hold it to the seed. */
for (const id of IMPORT_IDS) {
  const d = SEED.get(id)?.drills ?? [];
  if (!NOT_SPEAKABLE.includes(id) && !d.includes('voiceflash')) throw new Error(`b1.33: ${id} has no voiceflash but is not in NOT_SPEAKABLE`);
  if (!NOT_DECK_ABLE.includes(id) && !d.includes('flashcard')) throw new Error(`b1.33: ${id} has no flashcard but is not in NOT_DECK_ABLE`);
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.33: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section. Authored rows only:
 *  some seed respellings close a nasal with a plain n. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`b1.33: no authored respell on ${id}`);
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
 *  question, so the order is balanced without being a simple alternation.
 *  No `why` in this lesson names a position. */
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
 *  ACT 1 — UN MOT N'ARRIVE JAMAIS SEUL
 *
 *  The method on four collocations and one family. The failure is the
 *  English neighbour: correct French words, « sauver l'énergie ».
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Un appartement à Montréal',
  frSub: 'La visite avec madame Bouchard',
  setting: { place: 'Un appartement, rue Saint-Hubert', city: 'Montréal', time: 'samedi, 10 h', ambience: 'des radiateurs électriques, la neige dehors, un escalier en colimaçon' },
  beats: [
    {
      kind: 'narration',
      text: "Un samedi de novembre, à Montréal. Tu visites un appartement rue Saint-Hubert. La propriétaire, madame Bouchard, te montre les radiateurs.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Madame Bouchard',
      fr: "Ici, le chauffage est électrique, et l'hiver est long.",
      en: 'Here the heating is electric, and winter is long.',
      respell: '[ee-SEE | luh shoh-FAZH eh-tay-lehk-TREEK | ay lee-VEHR eh LOHⁿ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Madame Bouchard',
      fr: 'La facture monte vite en janvier.',
      en: 'The bill goes up fast in January.',
      respell: '[la fak-TÜR mohⁿt VEET ahⁿ zhahⁿ-VYAY]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Ne vous inquiétez pas, je sauve toujours de l'énergie.",
      en: 'Do not worry, I always rescue energy (word for word).',
      respell: '[nuh voo-zehⁿ-kyay-TAY PA | zhuh SOHV too-ZHOOR duh lay-nehr-ZHEE]',
      stage: "Chaque mot est français. Le verbe, lui, vient de l'anglais : to save.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Madame Bouchard',
      fr: "Vous la sauvez. Elle est donc en danger, l'énergie.",
      en: 'You rescue it. So energy is in danger, then.',
      respell: '[voo la soh-VAY | ehl eh DOHⁿK ahⁿ dahⁿ-ZHAY lay-nehr-ZHEE]',
      stage: 'Elle sourit. Elle a compris, mais personne ne dit ça ici.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase une Montréalaise dit-elle vraiment ?',
      size: 'lg',
      options: [
        { fr: "Je sauve toujours de l'énergie.", respell: '[zhuh SOHV too-ZHOOR duh lay-nehr-ZHEE]', en: 'I always rescue energy (word for word).', outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1005)), respell: rsOf(E(1005)), en: src(E(1005)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Madame Bouchard hoche la tête. Elle te parle des bacs de recyclage : elle a trouvé une locataire qui fait attention.",
        breaks: "Madame Bouchard rit encore. Elle te comprend, mais elle t'explique le chauffage comme à un touriste.",
      },
    },
    {
      kind: 'break',
      heading: "On ne sauve pas l'énergie",
      body: "Tous tes mots étaient justes. Mais l'énergie a son voisin : économiser. Sauver, c'est pour une personne, un animal ou la planète. Un mot vient avec ses voisins. EN: Every word was French; the neighbour was English.",
      wrong: {
        fr: "Je sauve toujours de l'énergie.",
        ipa: '/ʒə sov tu.ʒuʁ də le.nɛʁ.ʒi/',
        respell: '[zhuh SOHV too-ZHOOR duh lay-nehr-ZHEE]',
        en: 'I always rescue energy (word for word).',
      },
      right: { fr: fr(E(1005)), ipa: ipaOf(E(1005)), respell: rsOf(E(1005)), en: src(E(1005)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Cette leçon te donne les familles et les voisins des mots de l'environnement : le climat, les déchets, l'énergie, la ville, la nature et la société. À la fin, tu écris à ta ville pour donner ton avis sur une mesure.",
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
    { t: 'Apprendre un mot avec ses voisins', s: 'Acte 1 : la famille et les mots qui vont ensemble' },
    { t: 'Parler du climat et de la pollution', s: 'Actes 2 et 3 : canicule, sécheresse, polluer, les émissions' },
    { t: 'Parler des gestes et des choix', s: 'Actes 4 à 8 : trier, consommer, l’énergie, la ville, la nature' },
    { t: 'Donner ton avis à ta ville', s: 'Actes 9 à 11 : qui paie, qui décide, et ton message' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: a building's welcome notice. `questionsInModal` so the
 *  text comes first. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "L'avis de l'immeuble",
  frSub: 'Lis, et cherche les mots qui vont ensemble',
  text: AVIS_TEXT,
  glossary: [
    { word: 'le bac brun', en: 'the brown bin (food waste, Québec)', note: 'Le bac pour les restes de repas, qui deviennent du compost.' },
    { word: 'ramassés', en: 'collected', note: 'Le camion passe et prend les bacs.' },
    { word: 'stationnement', en: 'parking (Québec)', note: 'Un endroit pour garer une voiture ou un vélo.' },
    { word: 'gestion', en: 'management', note: "Les personnes qui s'occupent de l'immeuble." },
  ],
  questions: [
    { q: 'Où va une boîte de conserve vide ?', a: 'Dans le bac bleu, avec le métal, le verre, le papier et le plastique.' },
    { q: 'Et les restes de repas ?', a: 'Dans le bac brun, pour le compost.' },
    { q: "Quel verbe l'avis met-il avec l'énergie ?", a: "Économiser : « Pour économiser l'énergie, baissez le chauffage. »" },
    { q: 'Quels sont les deux moyens de transport près de l’immeuble ?', a: "L'autobus au coin de la rue et le métro à cinq minutes. Et la piste cyclable pour le vélo." },
  ],
  audio: REC('rec-b1-33-avis'),
  say: REFRAME,
  terms: ['voisins', 'variante'],
};

/** LEARN: four collocations and one family. */
const A1_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-familles',
  title: 'Un mot et ses voisins',
  frSub: 'Quatre gestes, une famille',
  hint: 'Cinq cartes. Pour chaque mot, regarde le mot qui va avec.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'famille', 'geste'],
  cards: [
    card(E(1000), "Le voisin de l'énergie", 'les voisins',
      "L'énergie va avec économiser. Sauver, c'est pour une vie. EN: save energy is économiser, never sauver."),
    card(E(1001), 'Le voisin du tri', 'les voisins',
      "On fait le tri : on met chaque déchet dans le bon bac. EN: to sort your waste, with faire."),
    card(E(1002), 'Le voisin des déchets', 'les voisins',
      "On réduit ses déchets : on en produit moins. EN: to cut down on your waste."),
    card(E(1003), 'Le voisin des transports', 'les voisins',
      "On prend les transports en commun, au pluriel : le bus, le métro, le tram. EN: to take public transport, always plural."),
    card(E(1004), 'Toute une famille', 'la famille',
      "Un verbe, un nom, un adjectif : économe veut dire qui dépense peu. Quand tu en as un, cherche les autres. EN: one root, three words."),
  ],
};

/** TELL THEM APART: the word and its neighbour, the word and its family. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Le mot, son voisin, sa famille',
  groups: [
    grp('Chaque nom a son verbe', [
      it(E(1006), 'le tri : faire'),
      it(E(1007), 'les déchets : réduire'),
      it(E(1008), 'les transports : prendre'),
      it('fr.b1.ecologie.037', 'le nom seul, sans voisin'),
    ], chk(
      'Que retiens-tu de ces phrases ?',
      ['le nom avec le verbe qui va avec', 'seulement le nom', 'seulement le verbe'], 0,
      "Faire le tri, réduire ses déchets, prendre les transports : on apprend le bloc. EN: learn the noun with its verb.")),
    grp('Un mot, toute sa famille', [
      it(E(1011), 'le nom : des économies'),
      it(E(1010), 'le verbe : économiser'),
      it(E(1005), "le verbe à l'infinitif"),
      it('fr.b1.ecologie.001', 'un mot de la même racine qu’environnemental'),
    ], chk(
      'Économiser, les économies, économe, c’est...',
      ['trois mots sans lien', 'une famille : un verbe, un nom, un adjectif'], 1,
      "Une racine, trois classes de mots. EN: one root, three word classes.")),
    ctl('Le bon voisin', 'Pour dire to save energy, tu dis...',
      ["sauver l'énergie", "économiser l'énergie", "garder l'énergie"], 1,
      "L'énergie va avec économiser. EN: économiser."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'famille'],
};

/** USE: where the four blocks do a real job. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où tu vas les dire',
  cases: [
    uc('Ta propriétaire parle de la facture de chauffage', E(1005)),
    uc('Un nouveau voisin demande comment marchent les bacs', E(1006)),
    uc('Une collègue demande comment tu viens au travail', E(1008)),
    uc('Ton colocataire demande quoi faire dimanche soir', 'fr.a2.maison.022'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['geste', 'voisins'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le voisin', "« L'énergie » : quel verbe va avec pour dire to save ?",
    ['économiser', 'sauver'], 0,
    "On économise l'énergie. Sauver, c'est pour une vie. EN: économiser."),
  ctl('Le tri', 'To sort your waste, en français :',
    ['trier le tri', 'faire le tri', 'sortir le tri'], 1,
    "On fait le tri. EN: faire le tri."),
  ctl('La famille', 'Quel mot est de la même famille que « économiser » ?',
    ['économe', 'écologie', 'éteindre'], 0,
    "Économe : qui dépense peu. Écologie a une autre racine. EN: économe, same root."),
], ['voisins', 'famille']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: "Un mot n'arrive jamais seul",
    opener: {
      line: "Trier, le tri, faire le tri : ici tu apprends chaque mot avec sa famille et ses voisins. EN: To sort, sorting, doing the sorting: here you learn every word with its family and its neighbours.",
      imageRef: 'lessons/environnement/act01.jpg',
    },
    sections: [],
    milestone: "Tu dis économiser l'énergie, faire le tri, réduire tes déchets et prendre les transports en commun, sans traduire l'anglais. EN: You say the four blocks without translating from English.",
    estScreens: 34, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_CARTES, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LE CLIMAT CHANGE
 *
 *  Three families (chaud, sec, inonder) and the verb each phenomenon takes:
 *  il fait chaud, il y a une canicule. The weather is not the climate.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: a summer news bulletin. `hideLines`: the questions are
 *  about what the ear caught. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: "Le bulletin de l'été",
  frSub: 'Écoute, et dis ce qui se passe où',
  lines: [
    ln(E(1022)), ln(E(1023)), ln(E(1024)), ln(E(1033)), ln(E(1026)),
    ln(E(1030)), ln(E(1025)), ln(E(1031)), ln(E(1027)), ln(E(1032)),
  ],
  questions: [
    { q: 'À Montréal, cet été...', opts: ['il y a eu une canicule', 'il a beaucoup neigé'], correct: 0, why: "« Il y a eu une canicule à Montréal. » EN: a heatwave." },
    { q: "D'où venait la fumée ?", opts: ['des usines', 'des feux de forêt', 'des voitures'], correct: 1, why: "La fumée des feux est arrivée jusqu'à Montréal. EN: from the wildfires." },
    { q: 'Dans le sud de la France, qui est inquiet ?', opts: ['les agriculteurs', 'les pompiers'], correct: 0, why: "La sécheresse inquiète les agriculteurs. EN: the farmers." },
    { q: 'En Belgique, en 2021, le problème, c’était...', opts: ['la sécheresse', "trop d'eau : des inondations", 'la fumée'], correct: 1, why: "Les inondations ont détruit des maisons. EN: floods." },
    { q: 'Avec le réchauffement, les canicules seront...', opts: ['plus rares', 'plus fréquentes'], correct: 1, why: "« rend les canicules plus fréquentes ». EN: more frequent." },
  ],
  audio: REC('rec-b1-33-bulletin-ecoute'),
  say: REFRAME,
  terms: ['voisins'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-climat',
  title: 'Trop chaud, trop sec, trop d’eau',
  frSub: 'Trois familles et trois blocs',
  hint: 'Six cartes. Regarde le verbe qui va avec chaque mot.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'voisins'],
  cards: [
    card(E(1015), 'Chaud, et ce qui chauffe', 'la famille',
      "Il fait chaud ; la chaleur ; réchauffer, c'est rendre plus chaud ; le réchauffement, c'est le changement. EN: hot, heat, to warm, warming."),
    card(E(1017), 'Ce qui chauffe la planète', 'les voisins',
      "Le bloc entier : gaz à effet de serre. Une serre garde la chaleur, comme la planète. EN: greenhouse gases, the whole block."),
    card(E(1018), 'Trop chaud, longtemps', 'les voisins',
      "Il y a une canicule, pas il fait une canicule. Une vague de chaleur, c'est pareil. EN: a heatwave, with il y a."),
    card(E(1019), "Pas assez d'eau", 'la famille',
      "Il fait sec aujourd'hui. Il y a une sécheresse quand il ne pleut pas pendant des mois. EN: dry, drought."),
    card(E(1020), "Trop d'eau", 'la famille',
      "La rivière inonde la rue ; il y a des inondations. EN: to flood, a flood."),
    card(E(1021), 'Quand la forêt brûle', 'les voisins',
      "Un feu de forêt, pas un feu de bois, qui brûle dans la cheminée. Au Canada, l'été, c'est une vraie saison. EN: a wildfire."),
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: "Trop de chaleur, trop d'eau",
  groups: [
    grp('Trop chaud, trop sec', [
      it(E(1022), 'une canicule à Montréal'),
      it(E(1029), 'il y a, puis il fait'),
      it(E(1026), 'la sécheresse, dans le sud'),
      it(E(1030), 'sec, avec il fait'),
    ], chk(
      'Ces quatre phrases parlent de...',
      ["la chaleur et du manque d'eau", "trop d'eau", 'la neige'], 0,
      "Canicule, sécheresse, sec : trop chaud, pas assez d'eau. EN: heat and drought.")),
    grp("Trop d'eau, trop de feu", [
      it(E(1025), 'les inondations en Belgique'),
      it(E(1031), 'le verbe inonder'),
      it(E(1024), 'la fumée des feux'),
      it(E(1033), 'un feu de forêt au Québec'),
    ], chk(
      'Et ces quatre-là ?',
      ['une belle journée', 'des inondations et des feux'], 1,
      "L'eau qui entre dans les maisons, la forêt qui brûle. EN: floods and fires.")),
    ctl('La famille', 'Dans la famille de « sec », le nom qui veut dire drought :',
      ['la sèche', 'la sécheresse', 'le séchage'], 1,
      "La sécheresse : des mois sans pluie. Le séchage, c'est sécher le linge. EN: drought."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  title: 'Le temps, le climat, la famille',
  examples: [
    ex('fr.a1.meteo.029', `${Cap(METEO_REF)} : le temps d'aujourd'hui.`),
    ex('fr.a2.meteo.001', "de plus en plus chaud : là, on parle d'années, pas d'un jour."),
    ex(E(1028), 'la différence en une phrase : un jour ou trente ans.'),
    ex('fr.b1.ecologie.003', 'le nom du changement, avec son adjectif.'),
    ex(E(1027), 'le verbe de la même famille : réchauffer.'),
    ex(E(1032), 'le nom et son verbe dans la même phrase.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'voisins'],
};

/** USE: real situations, the word and its verb. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon mot, le bon verbe',
  groups: [
    ctl('Le bulletin', 'Trente-huit degrés pendant cinq jours. La radio dit :',
      ['Il y a une canicule.', 'Il fait une canicule.', 'Il y a chaud.'], 0,
      "Une canicule arrive : il y a. La chaleur : il fait chaud. EN: il y a une canicule."),
    ctl('Le jardin', 'Pas de pluie depuis juin, la pelouse est jaune. Ton voisin dit :',
      ['Il y a très sec.', 'Il fait très sec.'], 1,
      "Sec est un adjectif, comme chaud : il fait sec. EN: il fait sec."),
    ctl('La rivière', "Après trois jours de pluie, l'eau entre dans les maisons. C'est...",
      ['une sécheresse', 'une canicule', 'une inondation'], 2,
      "Trop d'eau : une inondation. EN: a flood."),
    ctl('Le froid', "Il fait froid aujourd'hui. Ton ami dit : « Donc le climat ne change pas. » Tu réponds :",
      [fr(E(1028)), 'Oui, il fait froid, donc le climat ne change pas.'], 0,
      "Un jour froid, c'est le temps. Le climat se mesure sur trente ans. EN: weather is not climate."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins'],
};

/** TRAP, stepped: the wrong verb, the half block, the look-alike. */
const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: 'Chaque mot a son verbe',
  rule: {
    title: 'Il fait chaud, il y a une canicule',
    body: "Un adjectif prend il fait : chaud, sec. Un nom qui arrive prend il y a : une canicule, une sécheresse, des inondations. Et un bloc reste entier : gaz à effet de serre, feu de forêt. EN: adjectives take il fait, events take il y a.",
  },
  cards: [
    { promptLabel: 'il fait + un nom', promptSound: 'Cet été, il a fait une canicule à Montréal.', fr: fr(E(1022)), ipa: ipaOf(E(1022)), tip: "Une canicule arrive : il y a eu. EN: il y a eu une canicule." },
    { promptLabel: 'il y a + un adjectif', promptSound: 'Il y a très sec depuis deux mois.', fr: fr(E(1030)), ipa: ipaOf(E(1030)), tip: "Sec, comme chaud : il fait. EN: il fait sec." },
    { promptLabel: 'la température', promptSound: 'Il y a une canicule, et il y a trente-cinq degrés.', fr: fr(E(1029)), ipa: ipaOf(E(1029)), tip: "La température : il fait trente-cinq degrés. EN: il fait for degrees." },
    { promptLabel: 'un bloc coupé', promptSound: 'Les gaz de serre réchauffent la planète.', fr: fr(E(1027)), ipa: ipaOf(E(1027)), tip: "Le bloc entier : à effet de serre. EN: the whole block." },
    { promptLabel: 'le feu de la cheminée', promptSound: 'Les pompiers luttent contre un feu de bois au nord du Québec.', fr: fr(E(1033)), ipa: ipaOf(E(1033)), tip: "Un feu de bois brûle dans la cheminée. Dehors, c'est un feu de forêt. EN: a wildfire." },
    { promptLabel: 'un mot qui ressemble', promptSound: 'Le réchauffement climatique rend les canicules plus fréquentées.', fr: fr(E(1032)), ipa: ipaOf(E(1032)), tip: "Fréquentée : où il y a du monde. Fréquente : qui arrive souvent. EN: frequent." },
  ],
  drill: [
    { promptSay: 'Cet été, il y a eu une ... à Montréal.', opts: ['canicule', 'chaleur'], correct: 0 },
    { promptSay: 'Il ... très sec depuis deux mois.', opts: ['fait', 'y a'], correct: 0 },
    { promptSay: 'Les gaz à effet de ... réchauffent la planète.', opts: ['verre', 'serre'], correct: 1 },
    { promptSay: 'Les pompiers luttent contre un feu de ... .', opts: ['bois', 'forêt'], correct: 1 },
    { promptSay: 'Il y a une canicule, et il ... trente-cinq degrés.', opts: ['y a', 'fait', 'est'], correct: 1 },
    { promptSay: 'La rivière a ... les rues du village.', opts: ['inondé', 'inondation'], correct: 0 },
    { promptSay: 'Le réchauffement rend les canicules plus ... .', opts: ['fréquentées', 'fréquentes'], correct: 1 },
    { promptSay: 'Dans le sud, la ... inquiète les agriculteurs.', opts: ['sèche', 'séchage', 'sécheresse'], correct: 2 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Il fait chaud, il y a une canicule' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la phrase fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-33-piege-climat'),
  say: REFRAME,
  terms: ['voisins', 'fauxami'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le verbe', 'Une canicule : quel début ?',
    ['il fait', 'il y a'], 1,
    "Un nom qui arrive : il y a une canicule. EN: il y a."),
  ctl('Le climat', "Le climat, c'est...",
    ['la moyenne sur trente ans', 'la météo du jour'], 0,
    "Le temps change chaque jour, le climat sur trente ans. EN: a thirty-year average."),
  ctl('Le feu', 'A wildfire, en français :',
    ['un feu de bois', 'un feu sauvage', 'un feu de forêt'], 2,
    "Un feu de forêt. EN: un feu de forêt."),
], ['voisins', 'famille']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Le climat change',
    opener: {
      line: "Une canicule à Montréal, une inondation en Belgique, la fumée des forêts : ici tu dis ce qui arrive au climat. EN: A heatwave, a flood, wildfire smoke: here you say what is happening to the climate.",
      imageRef: 'lessons/environnement/act02.jpg',
    },
    sections: [],
    milestone: "Tu parles de canicule, de sécheresse, d'inondations et de feux de forêt, chacun avec son verbe. EN: You talk about heatwaves, droughts, floods and wildfires, each with its verb.",
    estScreens: 44, restPoints: ['a2-construire', 'a2-choisir'],
  },
  sections: [A2_ECOUTE, A2_CARTES, A2_CONSTRUIRE, A2_EXEMPLES, A2_CHOISIR, A2_PIEGE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — POLLUER, LA POLLUTION
 *
 *  The family act: polluer, la pollution, polluant, pollué, un pollueur;
 *  émettre, les émissions. The END of the word tells its class.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a news brief on the June 2023 smoke over Montréal. Four views in
 *  the last sentence, on purpose. */
const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Montréal sous la fumée',
  frSub: 'Lis, et cherche la famille de polluer',
  text: FUMEE_TEXT,
  glossary: [
    { word: 'autorités de santé', en: 'health authorities', note: 'Les services publics qui s’occupent de la santé.' },
    { word: "à l'intérieur", en: 'indoors', note: 'Dans la maison, pas dehors.' },
    { word: 'bois brûlé', en: 'burnt wood', note: 'L’odeur d’un feu.' },
    { word: 'épisodes', en: 'episodes, spells', note: 'Des moments courts qui reviennent.' },
  ],
  questions: [
    { q: "D'où venait la pollution, cette fois ?", a: 'Des feux de forêt du nord du Québec, pas des voitures ni des usines.' },
    { q: "Qui devait rester à l'intérieur ?", a: 'Les personnes âgées et les enfants.' },
    { q: 'Trouve deux mots de la famille de polluer.', a: '« polluent » (le verbe) et « la pollution » (le nom).' },
    { q: 'Les lecteurs sont-ils tous d’accord ?', a: "Non : plus d'arbres, moins d'émissions des transports, ou rien à faire contre la fumée. Trois avis." },
  ],
  audio: REC('rec-b1-33-fumee'),
  say: REFRAME,
  terms: ['famille', 'voisins'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-familles',
  title: 'Polluer, et toute sa famille',
  frSub: "L'air, les émissions, le pollueur",
  hint: 'Six cartes. Regarde la fin de chaque mot.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'suffixe'],
  cards: [
    card(E(1034), 'Quatre mots, une racine', 'la famille',
      "Le verbe polluer, le nom pollution, l'adjectif polluant, la personne pollueur. Et pollué : ce qui a été sali. EN: one root, four classes."),
    card(E(1035), "L'air qu'on respire", 'les voisins',
      "La pollution de l'air, avec de l'air : l'air précis de la ville. EN: air pollution."),
    card(E(1036), "Bonne ou mauvaise", 'les voisins',
      "La qualité de l'air est bonne ou mauvaise. Les radios la donnent l'été. EN: air quality."),
    card(E(1037), 'Ce qui sort', 'la famille',
      "Les usines et les moteurs émettent des gaz. Le nom : les émissions. On les réduit. EN: to emit, emissions."),
    card(E(1038), 'Qui paie', 'les voisins',
      "Celui qui pollue paie pour réparer. Tu vas revoir ce principe dans l'acte 9. EN: the polluter pays."),
    card(E(1039), "L'adjectif qui agit", 'la famille',
      "Polluante, parce que l'usine salit. L'adjectif s'accorde : un produit polluant, une usine polluante. EN: polluting."),
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le verbe, le nom, l’adjectif, la personne',
  groups: [
    grp('Le verbe et le nom', [
      it(E(1040), 'le verbe : polluent'),
      it(E(1041), 'le nom : la pollution'),
      it(E(1045), 'le verbe : émettent'),
      it(E(1046), 'le nom : les émissions'),
      it('fr.a2.la-ville.001', 'la circulation, ce qui pollue'),
    ], chk(
      'Polluer et la pollution, émettre et les émissions, ce sont...',
      ['des mots sans lien', 'des verbes et des noms de la même famille'], 1,
      "Deux familles, chacune avec son verbe et son nom. EN: two families.")),
    grp("L'adjectif et la personne", [
      it(E(1042), 'polluants : ce qui salit'),
      it(E(1047), 'polluée : ce qui est sali'),
      it(E(1049), 'le pollueur : qui pollue'),
      it(E(1043), 'le pollueur doit payer'),
      it('fr.b1.ecologie.036', 'le nom seul'),
    ], chk(
      'Lequel est une personne ?',
      ['polluant', 'pollué', 'pollueur'], 2,
      "La fin -eur fait une personne. EN: -eur is the person.")),
    ctl('La fin', "Un mot en -eur, c'est souvent...",
      ['une personne', 'une chose', 'un adjectif'], 0,
      "Un pollueur, un consommateur, un manifestant aussi. EN: a person."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'suffixe'],
};

/** NAME, as a lookup: six endings. A cut of the sheet's table. */
const A3_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-tableau',
  layer: 'core',
  sheetId: 'sheet-familles',
  title: 'Six fins de mots',
  cols: ['La fin', 'Ce que ça fait', 'Exemple'],
  rows: [
    { cells: ['-tion', 'un nom', 'la pollution'], say: fr(E(1041)),
      detail: { title: 'La fin -tion', body: "Une chose ou une action : la pollution, la protection, la consommation. EN: a noun.", say: fr(E(1088)) } },
    { cells: ['-ment', 'un nom', 'le réchauffement'], say: fr(E(1032)),
      detail: { title: 'La fin -ment', body: "Souvent un changement : le réchauffement, le changement climatique. EN: a noun, often a change.", say: fr(E(1027)) } },
    { cells: ['-age', 'un nom', 'le recyclage'], say: fr(E(1082)),
      detail: { title: 'La fin -age', body: "Une action : le recyclage, le gaspillage, le covoiturage. Le nom est masculin. EN: an action noun, masculine.", say: fr(E(1122)) } },
    { cells: ['-eur', 'une personne', 'un pollueur'], say: fr(E(1049)),
      detail: { title: 'La fin -eur', body: "Celui qui fait l'action : un pollueur, un consommateur. EN: the person.", say: fr(E(1043)) } },
    { cells: ['-ant', 'un adjectif qui agit', 'polluant'], say: fr(E(1042)),
      detail: { title: 'La fin -ant', body: "Ce qui fait l'action : une usine polluante. EN: an adjective that acts.", say: fr(E(1124)) } },
    { cells: ['-able', 'un adjectif qui peut', 'recyclable'], say: fr(E(1066)),
      detail: { title: 'La fin -able', body: "Ce qu'on peut faire : recyclable, réparable, renouvelable. EN: an adjective of possibility.", say: fr(E(1087)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suffixe', 'famille'],
};

const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon membre de la famille',
  groups: [
    ctl("L'eau", "L'eau de ce lac est...",
      ['pollution', 'polluée', 'polluante'], 1,
      "Le lac a été sali : il est pollué. EN: polluted."),
    ctl('Le camion', 'Ce vieux camion est très...',
      ['polluant', 'pollué'], 0,
      "Il salit l'air : il agit, donc polluant. EN: polluting."),
    ctl('Qui paie', "Une entreprise qui pollue et qui doit payer, c'est...",
      ['un polluant', 'une pollution', 'un pollueur'], 2,
      "La fin -eur : celui qui pollue. EN: a polluter."),
    ctl('La radio', "La radio parle de l'air de la ville. Elle dit :",
      ["La qualité d'air est mauvaise.", "La qualité de l'air est mauvaise."], 1,
      "L'air précis de la ville : de l'air. EN: de l'air."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'suffixe'],
};

/** TRAP: the English verb, the wrong class, the dropped article. */
const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs dans la famille',
  errors: [
    { wrong: "Les voitures pollutent l'air des villes.", right: fr(E(1040)),
      why: "Normal : pollution fait penser à un verbe en -uter. Mais le verbe est polluer : ils polluent. EN: the verb is polluer." },
    { wrong: "L'eau de ce lac est polluante.", right: fr(E(1047)),
      why: "Le lac ne salit rien : il a été sali. Polluante, c'est pour l'usine. EN: the lake undergoes it: polluée." },
    { wrong: "Un polluant, c'est une personne ou une entreprise qui pollue.", right: fr(E(1049)),
      why: "Un polluant existe : c'est un produit qui salit. La personne, c'est le pollueur. EN: polluant is a substance, pollueur a person." },
    { wrong: "La pollution d'air est un problème en ville.", right: fr(E(1041)),
      why: "Normal : l'anglais dit air pollution, sans article. En français, l'air précis de la ville : de l'air. EN: keep the article." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'fauxami'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le verbe', "Les voitures ... l'air.",
    ['pollutent', 'polluent'], 1,
    "Polluer : ils polluent. EN: polluent."),
  ctl('Le principe', 'Selon le principe, qui doit payer ?',
    ['le pollueur', 'le polluant'], 0,
    "Le pollueur, la personne. EN: the polluter."),
  ctl("L'adjectif", 'Une usine qui pollue est une usine...',
    ['polluée', 'pollution', 'polluante'], 2,
    "Elle agit : polluante. EN: polluting."),
], ['famille', 'suffixe']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Polluer, la pollution',
    opener: {
      line: "Un ciel orange au-dessus de Montréal, une odeur de bois brûlé : ici tu apprends un mot et toute sa famille. EN: An orange sky over Montréal: here you learn a word and its whole family.",
      imageRef: 'lessons/environnement/act03.jpg',
    },
    sections: [],
    milestone: "Tu passes du verbe au nom, à l'adjectif et à la personne, et la fin du mot te dit lequel choisir. EN: You move from verb to noun, adjective and person, and the ending tells you which.",
    estScreens: 36, restPoints: ['a3-construire', 'a3-choisir'],
  },
  sections: [A3_LECTURE, A3_CARTES, A3_CONSTRUIRE, A3_TABLEAU, A3_CHOISIR, A3_ERREURS, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — TRIER ET RECYCLER
 *
 *  trier, recycler, composter, la consigne; one gesture, four countries,
 *  four words (the variants); déchets against gaspillage.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a flatshare in Liège. Story bubbles avoid « ? » and « ! ». */
const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Trois poubelles à Liège',
  frSub: 'Un geste, quatre pays',
  setting: "Ton premier soir dans une colocation à Liège. Tu arrives de Montréal. Arnaud, ton colocataire, t'explique les poubelles.",
  bubbles: [
    { from: 'narrator', fr: 'Tu tiens une bouteille vide, et trois poubelles te regardent.', en: 'You are holding an empty bottle, and three bins are looking at you.' },
    { from: 'coach', fr: fr(E(1062)), en: src(E(1062)).en, warn: 'le sac PMC : plastiques, métaux, cartons à boissons' },
    { from: 'user', fr: 'À Montréal, je mettais tout dans le bac bleu.', en: 'In Montréal, I put everything in the blue bin.' },
    { from: 'coach', fr: fr(E(1065)), en: src(E(1065)).en, warn: 'le compost : les restes deviennent de la terre' },
    { from: 'user', fr: 'Mon amie de Lausanne, elle, paie chaque sac de déchets.', en: 'My friend in Lausanne pays for every rubbish bag.' },
    { from: 'coach', fr: 'Et en France, ma sœur met les emballages dans la poubelle jaune.', en: 'And in France, my sister puts packaging in the yellow bin.', warn: 'la poubelle jaune : en France' },
    { from: 'coach', fr: fr(E(1068)), en: src(E(1068)).en, warn: 'faire le tri : le même geste partout' },
  ],
  closing: { fr: 'Bac bleu, sac PMC, poubelle jaune, sac taxé : quatre noms, et le même geste.', en: 'Blue bin, PMC bag, yellow bin, taxed bag: four names, one gesture.' },
  audio: REC('rec-b1-33-coloc'),
  say: REFRAME,
  terms: ['variante', 'geste'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-dechets',
  title: 'Trier, recycler, composter',
  frSub: 'Trois familles et quatre pays',
  hint: 'Cinq cartes. La dernière te donne les quatre poubelles.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'variante'],
  cards: [
    card(E(1052), 'Mettre à la bonne place', 'la famille',
      "Tu tries tes déchets ; tu fais le tri. Pas faire la sorte. EN: to sort, sorting."),
    card(E(1053), 'Une deuxième vie', 'la famille',
      "Recyclable : on peut le recycler. Recyclé : c'est déjà fait. EN: to recycle, recycling, recyclable."),
    card(E(1054), 'Les restes deviennent de la terre', 'la famille',
      "Au compost, les épluchures deviennent de la terre. En France, composter veut aussi dire valider un billet. EN: compost, to compost."),
    card(E(1060), "L'argent de la bouteille", 'les voisins',
      "Tu rapportes la bouteille et tu récupères la consigne. EN: the bottle deposit."),
    {
      head: 'Quatre pays, quatre mots', label: 'la variante',
      fr: 'le bac bleu · le sac PMC · la poubelle jaune · le sac taxé',
      sub: '[luh bak BLUH] · [luh SAK pay-emm-SAY] · [la poo-behl ZHOHNN] · [luh SAK tak-SAY]',
      body: "Québec, Belgique, France, Suisse. Aucun n'est faux : chacun est juste chez lui. EN: four countries, four right words.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Où va quoi, et où',
  groups: [
    grp('Quatre pays, quatre poubelles', [
      it(E(1061), 'Québec : le bac bleu'),
      it(E(1062), 'Belgique : le sac PMC'),
      it(E(1063), 'France : la poubelle jaune'),
      it(E(1064), 'Suisse : la taxe au sac'),
      it('fr.b1.ecologie.002', 'le nom de la famille'),
    ], chk(
      'Ces phrases disent...',
      ['quatre gestes différents', 'le même geste, avec des mots différents'], 1,
      "Partout, on trie. Seul le nom de la poubelle change. EN: the same gesture.")),
    grp('Trier, composter, rapporter', [
      it(E(1065), 'le compost'),
      it(E(1066), 'recyclable ou pas'),
      it(E(1067), 'la consigne'),
      it(E(1068), 'le tri en famille'),
      it('fr.b1.ecologie.005', 'recycler plus, jeter moins'),
      it('fr.a1.objets.098', 'le geste sans tri'),
    ], chk(
      'Dans ces phrases, que fait-on de ses déchets ?',
      ['on les trie, on les composte, on les rapporte', 'on les jette tous ensemble'], 0,
      "Chaque déchet a sa place. EN: each kind of waste has its place.")),
    ctl('Recyclable', '« Recyclable », ça veut dire...',
      ['déjà recyclé', "qu'on peut recycler", "qu'on doit jeter"], 1,
      "La fin -able : qu'on peut. EN: can be recycled."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['variante', 'voisins'],
};

const A4_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a4-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  itemIds: dicteeFor(4),
  audio: AUDIO,
  say: REFRAME,
  terms: ['geste'],
};

const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La bonne poubelle, dans le bon pays',
  groups: [
    ctl('Montréal', 'À Montréal, où vont les vieux journaux ?',
      ['dans le bac bleu', 'dans le bac brun', 'dans le sac PMC'], 0,
      "Le papier va dans le bac bleu. Le bac brun, c'est pour les restes de repas. EN: the blue bin."),
    ctl('Liège', 'À Liège, une canette vide va dans...',
      ['la poubelle jaune', 'le sac PMC'], 1,
      "En Belgique : le sac PMC, M pour métaux. La poubelle jaune, c'est en France. EN: the PMC bag."),
    ctl('Lausanne', 'À Lausanne, chaque sac de déchets...',
      ['est payant', 'est gratuit'], 0,
      "C'est la taxe au sac. EN: every bag is paid for."),
    grp('Deux fois composter', [
      it(E(1070), 'le billet, en France'),
      it('fr.a2.transports-quotidiens.014', 'la machine du quai'),
      it(E(1065), 'les restes, à la maison'),
    ], chk(
      "En France, un contrôleur te dit : « Il faut composter ton billet. » Il veut dire...",
      ['mets-le au compost', 'valide-le dans la machine'], 1,
      "Composter un billet : le valider dans le composteur. EN: validate the ticket.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['variante', 'fauxami'],
};

/** TRAP, stepped: the wrong bin, the wrong word, the English one. */
const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Le bon mot pour le bon déchet',
  rule: {
    title: 'Faire le tri, pas la sorte',
    body: "Le geste a son verbe : faire le tri. L'objet a son adjectif : recyclable, s'il peut l'être. Et chaque pays a son mot pour la poubelle. EN: faire le tri; recyclable means it can be.",
  },
  cards: [
    { promptLabel: 'la boîte bleue', promptSound: 'À Montréal, le papier et le plastique vont dans la boîte bleue.', fr: fr(E(1061)), ipa: ipaOf(E(1061)), tip: "Au Québec, c'est le bac bleu. EN: the blue bin." },
    { promptLabel: 'la mauvaise poubelle', promptSound: 'Les épluchures de légumes vont dans la poubelle jaune.', fr: fr(E(1065)), ipa: ipaOf(E(1065)), tip: "La poubelle jaune prend les emballages. Les épluchures vont au compost. EN: peelings go to compost." },
    { promptLabel: 'le mauvais mot', promptSound: 'Je rapporte mes bouteilles vides pour récupérer la caution.', fr: fr(E(1067)), ipa: ipaOf(E(1067)), tip: "Pour une bouteille : la consigne. La caution, c'est pour une location. EN: the deposit." },
    { promptLabel: 'sort, mot à mot', promptSound: 'Chez nous, on a appris à faire la sorte en famille.', fr: fr(E(1068)), ipa: ipaOf(E(1068)), tip: "Faire le tri. La sorte n'existe pas ici. EN: faire le tri." },
    { promptLabel: 'recyclé ou recyclable', promptSound: 'Est-ce que ce pot de yaourt est recyclé ?', fr: fr(E(1066)), ipa: ipaOf(E(1066)), tip: "Tu veux savoir s'il peut l'être : recyclable. EN: recyclable." },
    { promptLabel: 'packaging, mot à mot', promptSound: 'En France, on met les paquetages dans la poubelle jaune.', fr: fr(E(1063)), ipa: ipaOf(E(1063)), tip: "Les emballages. Un paquetage, c'est le sac d'un soldat. EN: packaging." },
  ],
  drill: [
    { promptSay: 'À Montréal, on sort le bac ... le lundi.', opts: ['bleu', 'jaune'], correct: 0 },
    { promptSay: 'Chez nous, on fait le ... en famille.', opts: ['sorte', 'tri', 'triage'], correct: 1 },
    { promptSay: 'Ce pot de yaourt est-il ... ?', opts: ['recyclé', 'recyclable'], correct: 1 },
    { promptSay: 'Je rapporte mes bouteilles pour la ... .', opts: ['consigne', 'caution'], correct: 0 },
    { promptSay: 'En Belgique, les bouteilles vont dans le sac ... .', opts: ['taxé', 'PMC'], correct: 1 },
    { promptSay: 'Les épluchures vont au ... .', opts: ['composteur', 'recyclage', 'compost'], correct: 2 },
    { promptSay: 'En France, les ... vont dans la poubelle jaune.', opts: ['emballages', 'paquetages'], correct: 0 },
    { promptSay: 'À Lausanne, chaque sac de déchets est ... .', opts: ['trié', 'taxé'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Faire le tri, pas la sorte' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la phrase fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-33-piege-tri'),
  say: REFRAME,
  terms: ['voisins', 'fauxami'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le tri', 'To sort your waste :',
    ['faire la sorte', 'faire le tri'], 1,
    "Faire le tri. EN: faire le tri."),
  ctl('Le pays', "Le sac PMC, c'est...",
    ['en Suisse', 'au Québec', 'en Belgique'], 2,
    "En Belgique. EN: Belgium."),
  ctl('Déchets ou gaspillage', "La nourriture qu'on jette encore bonne, c'est...",
    ['du gaspillage', 'du tri'], 0,
    "Perdue pour rien : du gaspillage. Les déchets, c'est ce qu'on jette. EN: wasting."),
], ['voisins', 'variante']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Trier et recycler',
    opener: {
      line: "Une bouteille vide et trois poubelles inconnues : ici tu apprends le même geste dans quatre pays. EN: An empty bottle and three strange bins: here you learn one gesture in four countries.",
      imageRef: 'lessons/environnement/act04.jpg',
    },
    sections: [],
    milestone: "Tu fais le tri à Montréal, à Liège, à Lausanne et en France, et tu dis recyclable, compost et consigne sans hésiter. EN: You sort your waste in four countries with the right words.",
    estScreens: 45, restPoints: ['a4-construire', 'a4-choisir'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_DICTEE, A4_CHOISIR, A4_PIEGE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — CONSOMMER AUTREMENT
 *
 *  consommer, gaspiller, réparer, réutiliser; acheter local, de saison, en
 *  vrac, de seconde main. The look-alikes: en gros, fixer, réusable.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a Genève forum post. Nadia asks; she does not preach. */
const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Réparer plutôt que jeter',
  frSub: 'Un message sur un forum de Genève',
  text: FORUM_TEXT,
  glossary: [
    { word: 'tombé en panne', en: 'broke down', note: 'Il ne marche plus.' },
    { word: 'un bénévole', en: 'a volunteer', note: "Quelqu'un qui aide sans être payé." },
    { word: 'une friperie', en: 'a second-hand clothes shop', note: 'Un magasin de vêtements déjà portés.' },
    { word: 'faire la morale', en: 'to lecture, to preach', note: 'Dire aux autres ce qui est bien et mal.' },
  ],
  questions: [
    { q: 'Qu’a fait Nadia avec son grille-pain ?', a: 'Elle l’a fait réparer au café-réparation, gratuitement, au lieu de le jeter.' },
    { q: "D'où vient son manteau d'hiver ?", a: "D'une friperie : il est de seconde main." },
    { q: 'Est-ce que Nadia dit aux lecteurs quoi faire ?', a: 'Non. Elle ne veut faire la morale à personne : elle pose une question.' },
    { q: 'Trouve trois blocs de la leçon.', a: "Réparer plutôt que jeter, de seconde main, acheter d'occasion. Et jetables." },
  ],
  audio: REC('rec-b1-33-forum'),
  say: REFRAME,
  terms: ['voisins', 'geste'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-dechets',
  title: 'Acheter, garder, réparer',
  frSub: 'Consommer autrement',
  hint: 'Six cartes. Trois familles, trois façons d’acheter.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'voisins'],
  cards: [
    card(E(1071), 'Ce qu’on achète et ce qu’on use', 'la famille',
      "Consommer de l'eau, de l'énergie ; la consommation ; le consommateur. Au café, une consommation, c'est une boisson. EN: to consume, consumption, a consumer."),
    card(E(1072), 'Près de chez toi', 'les voisins',
      "Acheter local : chez un producteur de la région. Acheter de saison : les fruits du moment. EN: to buy local."),
    card(E(1073), 'Sans emballage', 'les voisins',
      "En vrac : tu remplis ton propre pot. Attention, en gros veut dire en grande quantité. EN: loose, unpackaged."),
    card(E(1074), 'Perdre pour rien', 'la famille',
      "On gaspille ce qui était encore bon. Le gaspillage alimentaire, c'est la nourriture jetée. EN: to waste, food waste."),
    card(E(1075), 'Une deuxième vie', 'les voisins',
      "De seconde main, ou d'occasion : déjà utilisé, encore bon. EN: second-hand."),
    card(E(1076), 'Plutôt que jeter', 'la famille',
      "Réparer, la réparation, réparable. To fix, c'est réparer, pas fixer. EN: to repair, repairable."),
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Acheter autrement, jeter moins',
  groups: [
    grp('Acheter autrement', [
      it(E(1080), 'de saison'),
      it(E(1081), 'en vrac'),
      it(E(1083), 'de seconde main'),
      it(E(1090), 'local'),
      it('fr.a2.marche.065', `${Cap(COURSES_REF)} : le bloc de base`),
      it('fr.a2.marche.130', 'la ferme locale, au passé'),
    ], chk(
      'Ces personnes...',
      ['achètent autrement : local, de saison, en vrac, de seconde main', 'achètent plus, et plus vite'], 0,
      "Quatre façons d'acheter, chacune avec son voisin. EN: four ways to buy.")),
    grp('Jeter moins', [
      it(E(1082), 'le gaspillage alimentaire'),
      it(E(1084), 'réparer au café-réparation'),
      it(E(1086), 'le suremballage'),
      it(E(1087), 'réparable'),
      it('fr.a2.rp-technologie.004', 'le faire faire par un autre'),
      it('fr.b1.ecologie.039', 'le verbe seul'),
    ], chk(
      'Et ici ?',
      ['on jette plus vite', 'on répare, on évite le gaspillage et le suremballage'], 1,
      "Garder, réparer, moins d'emballage. EN: keep, repair, less packaging.")),
    ctl('Le vrac', "« Acheter en vrac », c'est acheter...",
      ['en grande quantité', 'sans emballage', 'moins cher'], 1,
      "Sans emballage, dans ton propre pot. EN: loose."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'geste'],
};

/** USE, by ear: a vox pop at the Jean-Talon market. `hideLines`. */
const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Au marché Jean-Talon',
  frSub: 'Écoute : comment ils consomment',
  lines: [
    ln(E(1080)), ln(E(1090)), ln(E(1091)), ln(E(1081)), ln(E(1085)),
    ln(E(1088)), ln(E(1082)), ln('fr.b1.cuisine.084'), ln('fr.b1.cuisine.076'), ln(E(1089)),
  ],
  questions: [
    { q: 'Au marché, la première personne achète...', opts: ['des fruits de saison', 'des fruits importés'], correct: 0, why: "« des fruits de saison ». EN: seasonal fruit." },
    { q: "D'où viennent ses œufs ?", opts: ["d'un supermarché", "d'une ferme à côté", "d'un autre pays"], correct: 1, why: "J'achète local : d'une ferme à côté. EN: a nearby farm." },
    { q: 'Qu’apporte-t-elle toujours au marché ?', opts: ['des sacs en plastique', 'un sac réutilisable'], correct: 1, why: "Un sac réutilisable. EN: a reusable bag." },
    { q: 'Les consommateurs veulent...', opts: ["moins d'emballages", "plus d'emballages"], correct: 0, why: "Moins d'emballages. EN: less packaging." },
    { q: 'Pour une personne, où commence le gaspillage ?', opts: ['au marché', 'au restaurant', 'dans le frigo'], correct: 2, why: "« commence dans le frigo ». EN: in the fridge." },
  ],
  audio: REC('rec-b1-33-marche-ecoute'),
  say: REFRAME,
  terms: ['voisins'],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon bloc pour ton geste',
  groups: [
    ctl('Le frigo', "Tu jettes une salade encore bonne. C'est...",
      ['du suremballage', 'du gaspillage', 'du recyclage'], 1,
      "Perdue pour rien : du gaspillage. EN: waste."),
    ctl('Les biscuits', 'Trois couches de plastique pour quatre biscuits :',
      ['du vrac', 'du suremballage'], 1,
      "Trop d'emballage. EN: overpackaging."),
    ctl('Le téléphone', 'Ton téléphone ne marche plus, mais on peut le réparer. Il est...',
      ['réparable', 'jetable'], 0,
      "La fin -able : qu'on peut réparer. EN: repairable."),
    ctl('La friperie', 'Tu achètes une veste déjà portée. Tu l’achètes...',
      ['en vrac', 'de saison', 'de seconde main'], 2,
      "Déjà portée : de seconde main, ou d'occasion. EN: second-hand."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'suffixe'],
};

/** TRAP: the two wastes, the wrong bulk, the English verb, the calque. */
const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs au marché',
  errors: [
    { wrong: 'Je gaspille beaucoup de déchets.', right: 'Je produis beaucoup de déchets.',
      why: "Normal : waste veut dire les deux. Mais on gaspille ce qui était encore utile ; les déchets, on les produit ou on les réduit. EN: you produce rubbish and waste food." },
    { wrong: 'Dans cette épicerie, on achète le riz et les pâtes en gros.', right: fr(E(1081)),
      why: "En gros existe : en grande quantité, comme un restaurant. Sans emballage, c'est en vrac. EN: loose is en vrac." },
    { wrong: 'Au café-réparation, un bénévole a fixé mon grille-pain.', right: fr(E(1084)),
      why: "Normal : to fix. Mais fixer, c'est attacher, ou regarder longtemps. Le mot est réparer. EN: to fix is réparer." },
    { wrong: "J'apporte toujours un sac réusable au marché.", right: fr(E(1091)),
      why: "L'anglais dit reusable. Le français part du verbe réutiliser : réutilisable. EN: réutilisable." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxami', 'famille'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le vrac', 'Sans emballage :',
    ['en vrac', 'en gros'], 0,
    "En vrac. En gros : en grande quantité. EN: en vrac."),
  ctl('Le gaspillage', "Jeter de la nourriture encore bonne, c'est...",
    ['du compost', 'du gaspillage'], 1,
    "Du gaspillage alimentaire. EN: food waste."),
  ctl('Réparer', 'To fix a toaster :',
    ['régler un grille-pain', 'fixer un grille-pain', 'réparer un grille-pain'], 2,
    "Réparer. EN: réparer."),
], ['voisins', 'fauxami']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Consommer autrement',
    opener: {
      line: "Un grille-pain en panne, un manteau d'occasion, un marché le samedi : ici tu dis comment tu achètes et ce que tu gardes. EN: A broken toaster, a second-hand coat, a Saturday market: here you say how you buy and what you keep.",
      imageRef: 'lessons/environnement/act05.jpg',
    },
    sections: [],
    milestone: "Tu dis acheter local, de saison, en vrac, de seconde main, et réparer plutôt que jeter, sans les faux amis anglais. EN: You name the ways of buying and keeping, without the English look-alikes.",
    estScreens: 36, restPoints: ['a5-construire', 'a5-choisir'],
  },
  sections: [A5_LECTURE, A5_CARTES, A5_CONSTRUIRE, A5_ECOUTE, A5_CHOISIR, A5_ERREURS, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — L'ÉNERGIE
 *
 *  The sources and their neighbours (un barrage, une éolienne, une
 *  centrale), the everyday gestures, and three English words that do not
 *  cross: save, plant, power. Québec's « fermer la lumière » is a variant.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a Québec school newsletter. Two sides of hydro, on purpose. */
const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "L'énergie qui vient de l'eau",
  frSub: "Le journal de l'école",
  text: JOURNAL_TEXT,
  glossary: [
    { word: 'troisième secondaire', en: 'Grade 9 (Québec)', note: 'Au Québec, la troisième année de l’école secondaire.' },
    { word: 'une centrale hydroélectrique', en: 'a hydroelectric power station', note: "L'usine qui fait de l'électricité avec l'eau." },
    { word: 'communautés autochtones', en: 'Indigenous communities', note: 'Les premiers peuples du pays.' },
    { word: 'kilowattheures', en: 'kilowatt-hours', note: "L'unité qui compte l'électricité consommée." },
  ],
  questions: [
    { q: "Qu'ont appris les élèves sur l'électricité au Québec ?", a: "Presque toute l'électricité vient de l'eau : c'est l'hydroélectricité." },
    { q: 'Quelle autre histoire ont-ils entendue ?', a: 'Pour construire certains barrages, on a inondé des terres de communautés autochtones.' },
    { q: 'Que dit la classe de l’hydroélectricité ?', a: 'Une énergie renouvelable, mais pas sans conséquences : les deux côtés.' },
    { q: 'Quels gestes pour le concours ?', a: 'Baisser le chauffage et fermer la lumière, au Québec. En France, on dit éteindre.' },
  ],
  audio: REC('rec-b1-33-journal'),
  say: REFRAME,
  terms: ['voisins', 'variante'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-climat',
  title: "D'où vient l'énergie",
  frSub: 'Chaque source et son voisin',
  hint: "Six cartes. Pour chaque source, retiens l'objet qui va avec.",
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'voisins', 'geste'],
  cards: [
    card(E(1093), 'Qui revient toujours', 'les voisins',
      "Le vent, le soleil, l'eau : ils se renouvellent. Le pétrole, non. EN: renewable energy."),
    card(E(1094), 'Le vent', 'la famille',
      "L'éolien, c'est l'énergie du vent ; une éolienne, la machine. Pas un moulin à vent. EN: wind power, a wind turbine."),
    card(E(1095), 'Le soleil', 'la famille',
      "Le solaire, l'énergie ; un panneau solaire, sur le toit. Pas un panel. EN: solar power, a solar panel."),
    card(E(1096), "L'eau", 'la famille',
      "Au Québec, presque toute l'électricité vient des barrages. EN: water, a dam, hydroelectricity."),
    card(E(1097), "L'atome", 'les voisins',
      "En France, environ deux tiers de l'électricité. Power plant : une centrale, jamais une plante. EN: a nuclear power plant."),
    card(E(1099), 'Chez toi', 'le geste',
      "Baisser le chauffage, éteindre la lumière : au Québec, on la ferme. EN: turn the heating down, turn the light off."),
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Produire, et consommer moins',
  groups: [
    grp("Produire l'électricité", [
      it(E(1101), "l'eau, au Québec"),
      it(E(1102), 'le nucléaire, en France'),
      it(E(1103), 'le vent, au Sénégal'),
      it(E(1104), 'le soleil, sur un toit'),
      it(E(1108), 'les énergies fossiles'),
    ], chk(
      'Ces phrases parlent...',
      ['des gestes à la maison', "de la façon de produire l'électricité"], 1,
      "L'eau, l'atome, le vent, le soleil, le pétrole : des sources. EN: energy sources.")),
    grp('Consommer moins', [
      it(E(1105), 'le chauffage'),
      it(E(1107), 'éteindre, en France'),
      it(E(1106), 'fermer, au Québec'),
      it(E(1112), "la meilleure énergie"),
      it(E(1110), 'quand il n’y en a plus'),
    ], chk(
      'Et ici ?',
      ['des gestes pour consommer moins', 'des centrales'], 0,
      "Baisser, éteindre, fermer : des gestes. EN: everyday gestures.")),
    ctl('Le Québec', "Au Québec, presque toute l'électricité vient...",
      ['du nucléaire', 'du charbon', "de l'eau"], 2,
      "Des barrages : l'hydroélectricité. EN: from water."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['geste', 'variante'],
};

/** NAME, as a lookup: six sources. A cut of the sheet's table. */
const A6_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-tableau',
  layer: 'core',
  sheetId: 'sheet-climat',
  title: 'Six sources, six voisins',
  cols: ['Énergie', 'Où', 'Le mot qui va avec'],
  rows: [
    { cells: ["l'hydroélectricité", 'le Québec', 'un barrage'], say: fr(E(1101)),
      detail: { title: "L'eau", body: "Renouvelable, mais les grands barrages ont inondé des terres. EN: renewable, with a cost.", say: fr(E(1111)) } },
    { cells: ['le nucléaire', 'la France', 'une centrale'], say: fr(E(1102)),
      detail: { title: "L'atome", body: "Peu de gaz à effet de serre, mais des déchets à garder très longtemps. EN: low-carbon, long-lived waste.", say: fr(E(1111)) } },
    { cells: ["l'éolien", 'le Sénégal, région de Thiès', 'une éolienne'], say: fr(E(1103)),
      detail: { title: 'Le vent', body: "Le vent fait tourner les éoliennes. Il ne souffle pas toujours. EN: wind power, not constant.", say: fr(E(1109)) } },
    { cells: ['le solaire', 'partout, sur les toits', 'un panneau'], say: fr(E(1104)),
      detail: { title: 'Le soleil', body: "Des panneaux à l'école, à la maison. La nuit, rien. EN: solar, daytime only.", say: fr(E(1109)) } },
    { cells: ['les énergies fossiles', 'le pétrole, le gaz', 'une centrale thermique'], say: fr(E(1108)),
      detail: { title: 'Le pétrole', body: "Elles émettent le plus de gaz à effet de serre. EN: fossil fuels emit the most.", say: fr(E(1045)) } },
    { cells: ["les économies d'énergie", 'chez toi', 'baisser, éteindre'], say: fr(E(1105)),
      detail: { title: 'Le geste', body: "L'énergie la moins chère est celle qu'on ne consomme pas. EN: the cheapest energy.", say: fr(E(1112)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: "Le bon mot pour l'énergie",
  groups: [
    ctl('Le toit', "L'école met des panneaux sur son toit. C'est l'énergie...",
      ['éolienne', 'solaire', 'nucléaire'], 1,
      "Des panneaux : le soleil. EN: solar."),
    ctl('Le soir', 'Tu sors de la cuisine. Ta colocataire de Québec te dit :',
      ['Ferme la lumière en sortant.', 'Ouvre la lumière en sortant.'], 0,
      "Au Québec, fermer la lumière ; en France, éteindre. Les deux sont justes. EN: turn it off, either way."),
    ctl('La panne', "Plus d'électricité dans tout le quartier :",
      ['une panne de pouvoir', 'une panne de courant'], 1,
      "Le courant, c'est l'électricité. Le pouvoir, c'est la politique. EN: a power cut."),
    ctl('Renouvelable', "Laquelle n'est pas renouvelable ?",
      ['le pétrole', 'le vent', 'le soleil'], 0,
      "Le pétrole ne revient pas : une énergie fossile. EN: oil is fossil."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['variante', 'fauxami'],
};

/** TRAP, stepped: save, plant, power, windmill, panel, renouvelé. */
const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: "Les faux amis de l'énergie",
  rule: {
    title: 'Trois mots anglais qui ne passent pas',
    body: "On économise l'énergie, on ne la sauve pas. Une centrale produit l'électricité, pas une plante. Une panne de courant, pas de pouvoir. EN: save, plant and power do not cross into French.",
  },
  cards: [
    { promptLabel: 'save, mot à mot', promptSound: "Chez moi, je sauve toujours de l'énergie.", fr: fr(E(1005)), ipa: ipaOf(E(1005)), tip: "On économise l'énergie. EN: économiser." },
    { promptLabel: 'power plant', promptSound: "Une plante, c'est une usine qui produit de l'électricité.", fr: fr(E(1111)), ipa: ipaOf(E(1111)), tip: "Une plante pousse dans un jardin. Power plant : une centrale. EN: une centrale." },
    { promptLabel: 'power cut', promptSound: 'Hier soir, il y a eu une panne de pouvoir dans tout le quartier.', fr: fr(E(1110)), ipa: ipaOf(E(1110)), tip: "Le courant. Le pouvoir, c'est la politique. EN: une panne de courant." },
    { promptLabel: 'windmill', promptSound: "Dans la région de Thiès, au Sénégal, des moulins à vent produisent de l'électricité.", fr: fr(E(1103)), ipa: ipaOf(E(1103)), tip: "Un moulin fait de la farine. Une éolienne fait de l'électricité. EN: a wind turbine." },
    { promptLabel: 'panel', promptSound: "L'école a installé des panels solaires sur son toit.", fr: fr(E(1104)), ipa: ipaOf(E(1104)), tip: "Un panneau solaire. Un panel, c'est un groupe de personnes. EN: a solar panel." },
    { promptLabel: 'renouvelé', promptSound: 'Le vent et le soleil sont des énergies renouvelées.', fr: fr(E(1109)), ipa: ipaOf(E(1109)), tip: "Renouvelable : qui peut se renouveler. EN: renewable." },
  ],
  drill: [
    { promptSay: "Je fais attention : j'... l'énergie.", opts: ['économise', 'sauve'], correct: 0 },
    { promptSay: "Une ... nucléaire produit de l'électricité.", opts: ['plante', 'centrale'], correct: 1 },
    { promptSay: 'Il y a eu une panne de ... .', opts: ['courant', 'pouvoir'], correct: 0 },
    { promptSay: 'Dans la région de Thiès, les ... tournent avec le vent.', opts: ['moulins', 'éoliennes'], correct: 1 },
    { promptSay: 'Des ... solaires sur le toit.', opts: ['panneaux', 'panels'], correct: 0 },
    { promptSay: 'Le soleil est une énergie ... .', opts: ['renouvelée', 'renouvelante', 'renouvelable'], correct: 2 },
    { promptSay: 'Le soir, on ... le chauffage.', opts: ['descend', 'baisse'], correct: 1 },
    { promptSay: 'Au Québec, on ... la lumière en sortant.', opts: ['ferme', 'ouvre'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Trois mots anglais' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la phrase fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-33-piege-energie'),
  say: REFRAME,
  terms: ['fauxami', 'voisins'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Économiser', 'To save energy :',
    ["sauver l'énergie", "économiser l'énergie"], 1,
    "Économiser. EN: économiser."),
  ctl('La centrale', 'A power plant :',
    ['une centrale', 'une plante', 'une usine à pouvoir'], 0,
    "Une centrale. EN: une centrale."),
  ctl('Le Québec', "« Fermer la lumière », au Québec, c'est...",
    ['une erreur', 'la façon de dire éteindre'], 1,
    "Une variante juste : au Québec, on ferme la lumière. EN: a Québec variant."),
], ['fauxami', 'variante']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: "L'énergie",
    opener: {
      line: "Un barrage au Québec, une centrale en France, des éoliennes au Sénégal : ici tu dis d'où vient l'énergie et comment en consommer moins. EN: A dam, a power plant, wind turbines: here you say where energy comes from and how to use less.",
      imageRef: 'lessons/environnement/act06.jpg',
    },
    sections: [],
    milestone: "Tu nommes six sources d'énergie avec leur voisin, et tu ne dis plus plante, pouvoir ou sauver. EN: You name six sources with their neighbours, without plant, power or save.",
    estScreens: 48, restPoints: ['a6-construire', 'a6-choisir'],
  },
  sections: [A6_LECTURE, A6_CARTES, A6_CONSTRUIRE, A6_TABLEAU, A6_CHOISIR, A6_PIEGE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — SE DÉPLACER EN VILLE
 *
 *  les transports en commun (publics in Switzerland), le covoiturage, la
 *  piste cyclable, la borne de recharge, la zone à faibles émissions,
 *  circuler; rouler à vélo, never conduire un vélo. Two viewpoints.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: two colleagues in Lyon, one by bike, one by car. Both are right
 *  about their own lives. No « ? » or « ! » in a bubble. */
const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'À vélo ou en voiture',
  frSub: 'La pause de midi à Lyon',
  setting: "Midi, à Lyon. Ta collègue Samia arrive à vélo. Toi, tu as passé quarante minutes dans ta voiture.",
  bubbles: [
    { from: 'narrator', fr: 'Samia enlève son casque. Toi, tu cherches encore une place pour te garer.', en: 'Samia takes off her helmet. You are still looking for a parking space.' },
    { from: 'user', fr: fr(E(1128)), en: src(E(1128)).en, warn: 'les bouchons : trop de voitures' },
    { from: 'coach', fr: fr(E(1121)), en: src(E(1121)).en, warn: 'la piste cyclable : une voie pour les vélos' },
    { from: 'user', fr: fr(E(1130)), en: src(E(1130)).en },
    { from: 'coach', fr: 'Je comprends. Tu pourrais faire du covoiturage avec Marc, il habite à côté de chez toi.', en: 'I understand. You could carpool with Marc, he lives near you.', warn: 'faire du covoiturage : partager une voiture' },
    { from: 'user', fr: fr(E(1123)), en: src(E(1123)).en, warn: 'la zone à faibles émissions : les voitures trop polluantes n’y entrent pas' },
    { from: 'coach', fr: fr(E(1125)), en: src(E(1125)).en },
  ],
  closing: { fr: 'Vélo, voiture, covoiturage : chacun a ses raisons, et chaque façon de bouger a ses mots.', en: 'Bike, car, carpooling: everyone has their reasons, and every way of getting around has its words.' },
  audio: REC('rec-b1-33-lyon'),
  say: REFRAME,
  terms: ['voisins', 'mesure'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ville',
  title: 'Bouger en ville',
  frSub: 'Six blocs pour se déplacer',
  hint: 'Six cartes. Regarde les petits mots : à, du, les.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'variante'],
  cards: [
    card(E(1113), 'Le bus, le métro, le tram', 'la variante',
      "En Suisse, les transports publics ; en France et au Québec, les transports en commun. Toujours au pluriel. EN: public transport, plural."),
    card(E(1114), 'À plusieurs dans une voiture', 'la famille',
      "Covoiturer, le verbe ; on fait du covoiturage. EN: to carpool, carpooling."),
    card(E(1115), 'La voie des vélos', 'les voisins',
      "On roule sur la piste cyclable. EN: a bike lane."),
    card(E(1118), 'Une mesure de ville', 'les voisins',
      "Les voitures trop polluantes n'y entrent pas. À Lyon, elle fait débat. EN: a low-emission zone."),
    card(E(1119), 'Trop de voitures', 'la famille',
      "Circuler, la circulation, et quand ça bloque, les bouchons. EN: to drive around, traffic, traffic jams."),
    card(E(1120), 'Le verbe du vélo', 'les voisins',
      "On roule à vélo, ou on fait du vélo. Conduire, c'est pour une voiture. EN: to ride a bike."),
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Sans voiture, avec la voiture',
  groups: [
    grp('À vélo, en transports, à plusieurs', [
      it(E(1121), 'à vélo, par la piste'),
      it(E(1122), 'le covoiturage'),
      it(E(1127), 'les transports publics, en Suisse'),
      it('fr.a2.transports-quotidiens.003', `${Cap(TRANSPORTS_REF)} : le vélo partagé`),
      it('fr.a2.transports-quotidiens.002', 'le nom seul'),
      it('fr.a1.deplacements.072', 'le lieu'),
    ], chk(
      'Ces personnes se déplacent...',
      ['seules en voiture', 'à vélo, en transports ou à plusieurs'], 1,
      "Le vélo, le bus, le covoiturage. EN: bike, transit, carpooling.")),
    grp('La voiture en question', [
      it(E(1124), 'la zone à faibles émissions'),
      it(E(1125), 'la voiture électrique'),
      it(E(1126), 'les bornes de recharge'),
      it(E(1128), 'les bouchons'),
      it('fr.a2.la-ville.004', 'le métro plein, lui aussi'),
      it('fr.a2.transports-quotidiens.006', 'une voiture partagée'),
    ], chk(
      'Ces phrases parlent...',
      ['de la voiture en ville : ses limites et ses solutions', 'du vélo'], 0,
      "Les bouchons, les zones, les bornes, le partage. EN: the car in the city."),
    ),
    ctl('Le verbe', 'To ride a bike :',
      ['conduire un vélo', 'rouler à vélo', 'monter un vélo'], 1,
      "On roule à vélo. EN: rouler à vélo."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins'],
};

/** Consolidation, as answers: English front, French back. No « EN: » on a
 *  back. */
const A7_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a7-flash',
  layer: 'core',
  title: 'Huit cartes pour bouger',
  cards: [
    { front: 'public transport', back: 'les transports en commun', say: fr(E(1008)) },
    { front: 'public transport (Switzerland)', back: 'les transports publics', say: fr(E(1127)) },
    { front: 'carpooling', back: 'le covoiturage', say: fr(E(1122)) },
    { front: 'a bike lane', back: 'une piste cyclable', say: fr(E(1121)) },
    { front: 'to ride a bike', back: 'rouler à vélo', say: fr(E(1131)) },
    { front: 'a charging station', back: 'une borne de recharge', say: fr(E(1126)) },
    { front: 'a low-emission zone', back: 'une zone à faibles émissions', say: fr(E(1123)) },
    { front: 'traffic jams', back: 'les bouchons', say: fr(E(1128)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'variante'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon bloc pour ton trajet',
  groups: [
    ctl('Genève', 'À Genève, tu dis :',
      ['Je prends le transport public.', 'Je prends les transports publics.'], 1,
      "En Suisse : les transports publics, au pluriel. EN: plural."),
    ctl('Le vélo', 'Tu vas au travail à vélo. Tu dis :',
      ['Je roule à vélo.', 'Je conduis mon vélo.'], 0,
      "Rouler à vélo. Conduire, c'est une voiture. EN: rouler."),
    ctl('La batterie', "Ta voiture électrique n'a plus de batterie. Tu cherches...",
      ['une station de charge', 'une pompe à essence', 'une borne de recharge'], 2,
      "Une borne de recharge. EN: a charging station."),
    ctl('Le pont', 'Trop de voitures sur le pont, tout est bloqué :',
      ['une zone à faibles émissions', 'des bouchons'], 1,
      "Des bouchons, ou des embouteillages. EN: traffic jams."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'variante'],
};

/** TRAP: the verb of the bike, the singular, the English charge and pool. */
const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs en ville',
  errors: [
    { wrong: 'Je conduis mon vélo au travail.', right: fr(E(1121)),
      why: "Normal : to ride ne se traduit pas toujours. Mais conduire, c'est pour une voiture. À vélo, on roule. EN: you ride, you do not drive, a bike." },
    { wrong: 'À Genève, je prends le transport public tous les jours.', right: fr(E(1127)),
      why: "L'anglais dit public transport au singulier. En français, c'est un pluriel : les transports publics, les transports en commun. EN: plural in French." },
    { wrong: "Il n'y a pas assez de stations de charge dans mon quartier.", right: fr(E(1126)),
      why: "Charging station se calque facilement. Le mot est une borne de recharge. EN: une borne de recharge." },
    { wrong: 'On fait du carpool avec deux collègues.', right: fr(E(1122)),
      why: "Normal si tu vis en anglais. Mais au Québec comme en France, on dit le covoiturage. EN: le covoiturage everywhere." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxami', 'voisins'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le pluriel', 'Public transport :',
    ['les transports en commun', 'le transport public'], 0,
    "Au pluriel. EN: plural."),
  ctl('Le vélo', 'To ride a bike :',
    ['conduire un vélo', 'rouler à vélo'], 1,
    "Rouler à vélo. EN: rouler."),
  ctl('La recharge', 'Pour une voiture électrique :',
    ['une station de charge', 'une borne de recharge', 'une pompe'], 1,
    "Une borne de recharge. EN: a charging station."),
], ['voisins', 'fauxami']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Se déplacer en ville',
    opener: {
      line: "Un pont bloqué le matin, une piste cyclable qui roule : ici tu dis comment tu bouges, et tu écoutes l'autre côté. EN: A jammed bridge, a flowing bike lane: here you say how you get around, and hear the other side.",
      imageRef: 'lessons/environnement/act07.jpg',
    },
    sections: [],
    milestone: "Tu parles de covoiturage, de pistes cyclables, de bornes et de zones, et tu dis pourquoi toi, tu prends ton vélo ou ta voiture. EN: You talk about getting around, and say why you choose your own way.",
    estScreens: 39, restPoints: ['a7-construire', 'a7-choisir'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_CONSTRUIRE, A7_FLASH, A7_CHOISIR, A7_ERREURS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — PROTÉGER LA NATURE
 *
 *  protéger, menacer, la déforestation, la désertification; the Saint-
 *  Laurent belugas and the Sahel. The -é / -ant contrast: what undergoes
 *  against what acts.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a news brief on the St. Lawrence belugas. The fishers' view and
 *  the scientists' view, side by side. */
const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Les bélugas du Saint-Laurent',
  frSub: 'Lis, et cherche ce qui menace',
  text: BELUGAS_TEXT,
  glossary: [
    { word: 'le fleuve', en: 'the river (flowing to the sea)', note: 'Une grande rivière qui va jusqu’à la mer.' },
    { word: 'un parc marin', en: 'a marine park', note: 'Une zone protégée dans l’eau.' },
    { word: 'ralentir', en: 'to slow down', note: 'Aller moins vite.' },
    { word: 'se rétablir', en: 'to recover', note: 'Revenir à un bon état.' },
  ],
  questions: [
    { q: "Combien de bélugas vivent aujourd'hui dans le fleuve ?", a: "Moins de deux mille. Il y a cent ans, des milliers." },
    { q: 'Quelles sont les trois menaces ?', a: "La pollution de l'eau, le bruit des bateaux et le manque de nourriture." },
    { q: "Qui n'est pas d'accord avec les règles, et pourquoi ?", a: 'Les pêcheurs et les compagnies de croisières : les règles coûtent cher.' },
    { q: "L'espèce est-elle menacée ou menaçante ?", a: 'Menacée : elle est en danger. Elle ne fait peur à personne.' },
  ],
  audio: REC('rec-b1-33-belugas'),
  say: REFRAME,
  terms: ['famille', 'subiagit'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ville',
  title: 'Menacer, protéger',
  frSub: 'La nature et ses familles',
  hint: 'Six cartes. Pour chaque famille, cherche ce qui subit.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'subiagit'],
  cards: [
    card(E(1132), 'Mettre à l’abri', 'la famille',
      "Protéger, pas protecter. Une zone protégée, c'est une zone qu'on protège. EN: to protect, protection, protected."),
    card(E(1133), 'Le danger', 'la famille',
      "Menacer, une menace, menacé. Menacé subit ; menaçant fait peur. EN: to threaten, a threat, threatened."),
    card(E(1134), 'Une espèce en danger', 'les voisins',
      "Une espèce menacée : des animaux ou des plantes qui peuvent disparaître. EN: a threatened species."),
    card(E(1135), 'Le mot des listes officielles', 'les voisins',
      "En voie de disparition : sur le chemin de disparaître. Les bélugas sont sur cette liste. EN: endangered."),
    card(E(1137), 'Moins de forêt', 'la famille',
      "Déboiser, c'est couper les arbres ; la déforestation, c'est le résultat. Le contraire : reboiser. EN: to clear, deforestation."),
    card(E(1138), 'Le désert avance', 'la famille',
      "Au Sahel, le désert gagne des terres. Pas la désertion, qui veut dire abandonner. EN: desertification."),
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce qui menace, ce qui protège',
  groups: [
    grp('Ce qui menace', [
      it(E(1140), 'une espèce menacée'),
      it(E(1141), 'une menace, le nom'),
      it(E(1145), 'menace, le verbe'),
      it(E(1143), 'la désertification'),
    ], chk(
      'Dans ces phrases, on parle...',
      ['de ce qui va bien', 'de ce qui est en danger, et de ce qui menace'], 1,
      "Les bélugas, les espèces, les terres du Sahel sont en danger. EN: what is in danger, and what threatens it.")),
    grp("Ce qu'on protège, ce qu'on plante", [
      it(E(1142), 'une zone protégée'),
      it(E(1144), 'planter contre le désert'),
      it(E(1146), 'protéger, le verbe'),
      it(E(1149), 'nettoyer les berges'),
      it('fr.b1.ecologie.006', 'le verbe au présent'),
      it('fr.b1.communaute.006', 'un nettoyage de quartier'),
    ], chk(
      'Et ici ?',
      ['on protège, on plante, on nettoie', 'on détruit la nature'], 0,
      "Des gestes et des mesures pour protéger. EN: protecting, planting, cleaning.")),
    ctl('La biodiversité', "La biodiversité, c'est...",
      ['un parc', "toute la vie d'un lieu", 'une seule espèce'], 1,
      "Les plantes, les animaux, les insectes d'un lieu. EN: all the life of a place."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'geste'],
};

const A8_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a8-focus',
  layer: 'core',
  sheetId: 'sheet-familles',
  title: 'Une famille en quatre étapes',
  points: [
    "Pars du verbe : protéger, menacer, polluer. EN: start from the verb.",
    "Cherche le nom : la protection, une menace, la pollution. EN: then the noun.",
    "Ce qui subit prend -é : protégé, menacé, pollué. EN: -é undergoes.",
    "Ce qui agit prend -ant : menaçant, polluant. EN: -ant acts.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'subiagit'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon mot pour la nature',
  groups: [
    ctl('Les bélugas', 'Les bélugas du Saint-Laurent sont une espèce...',
      ['menaçante', 'menacée'], 1,
      "Ils sont en danger : menacée. EN: threatened."),
    ctl('Le Sahel', "Au Sahel, le désert avance. C'est...",
      ['la désertification', 'la déforestation', 'la désertion'], 0,
      "Le désert qui gagne : la désertification. EN: desertification."),
    ctl('La forêt', "On coupe les arbres d'une forêt pour faire des champs :",
      ['le reboisement', 'la déforestation'], 1,
      "On déboise : la déforestation. EN: deforestation."),
    ctl('Les arbres', "Ton ami dit : « On plante des arbres au Sahel, donc c'est réglé. » Tu nuances :",
      ["Ça règle tout, tout de suite.", fr(E(1150))], 1,
      "Planter aide, mais il faut aussi arroser et attendre. EN: planting is a start, not an end."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['subiagit', 'avis'],
};

/** TRAP, stepped: -é against -ant, the noun against the participle, the
 *  English protect, desertion. */
const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Subi ou agit',
  rule: {
    title: 'Menacé subit, menaçant agit',
    body: "Le participe en -é dit ce qui subit : une espèce menacée, une zone protégée, un lac pollué. L'adjectif en -ant dit ce qui agit : un chien menaçant, une usine polluante. EN: -é undergoes, -ant acts.",
  },
  cards: [
    { promptLabel: 'menaçante', promptSound: 'Les bélugas du Saint-Laurent sont une espèce menaçante.', fr: fr(E(1140)), ipa: ipaOf(E(1140)), tip: "Ils sont en danger : menacée. Menaçante, c'est qui fait peur. EN: threatened." },
    { promptLabel: 'protectrice', promptSound: 'Cette partie du fleuve est une zone protectrice.', fr: fr(E(1142)), ipa: ipaOf(E(1142)), tip: "La zone subit la protection : protégée. EN: protected." },
    { promptLabel: 'polluante', promptSound: "L'eau de ce lac est polluante.", fr: fr(E(1047)), ipa: ipaOf(E(1047)), tip: "Le lac a été sali : polluée. EN: polluted." },
    { promptLabel: 'protect, mot à mot', promptSound: 'Il faut protecter les zones humides.', fr: fr(E(1146)), ipa: ipaOf(E(1146)), tip: "Le verbe est protéger. EN: protéger." },
    { promptLabel: 'la désertion', promptSound: 'Au Sahel, la Grande Muraille verte veut arrêter la désertion.', fr: fr(E(1143)), ipa: ipaOf(E(1143)), tip: "La désertion, c'est abandonner son poste. Le désert qui avance : la désertification. EN: desertification." },
    { promptLabel: 'le nom ou le participe', promptSound: 'Le bruit des bateaux est une menacée pour les bélugas.', fr: fr(E(1141)), ipa: ipaOf(E(1141)), tip: "Le nom, c'est une menace. EN: a threat, the noun." },
  ],
  drill: [
    { promptSay: 'Les bélugas sont une espèce ... .', opts: ['menacée', 'menaçante'], correct: 0 },
    { promptSay: 'Cette partie du fleuve est une zone ... .', opts: ['protectrice', 'protégée'], correct: 1 },
    { promptSay: 'Le bruit des bateaux est une ... .', opts: ['menace', 'menacée'], correct: 0 },
    { promptSay: 'Il faut ... les zones humides.', opts: ['protecter', 'protéger'], correct: 1 },
    { promptSay: 'Au Sahel, la ... avance.', opts: ['désertion', 'désertification'], correct: 1 },
    { promptSay: 'La ... menace de nombreuses espèces.', opts: ['déforestation', 'déboisé', 'forêt'], correct: 0 },
    { promptSay: 'Un chien qui grogne est ... .', opts: ['menacé', 'menaçant'], correct: 1 },
    { promptSay: 'Au Sénégal, des villages ... des arbres.', opts: ['plantent', 'poussent'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Menacé subit, menaçant agit' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la phrase fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-33-piege-nature'),
  say: REFRAME,
  terms: ['subiagit', 'fauxami'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Subi', 'Une espèce en danger est...',
    ['menaçante', 'menacée'], 1,
    "Elle subit : menacée. EN: threatened."),
  ctl('Le désert', 'Le désert qui avance :',
    ['la désertification', 'la désertion'], 0,
    "La désertification. EN: desertification."),
  ctl('Le verbe', 'To protect :',
    ['protecter', 'protectionner', 'protéger'], 2,
    "Protéger. EN: protéger."),
], ['subiagit', 'famille']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Protéger la nature',
    opener: {
      line: "Des bélugas blancs dans le Saint-Laurent, des arbres plantés au Sahel : ici tu dis ce qui est menacé et ce qu'on protège. EN: White belugas, trees planted in the Sahel: here you say what is threatened and what is protected.",
      imageRef: 'lessons/environnement/act08.jpg',
    },
    sections: [],
    milestone: "Tu dis une espèce menacée, une zone protégée, la déforestation et la désertification, et tu sais qui subit et qui agit. EN: You name what is threatened and protected, and you know who undergoes and who acts.",
    estScreens: 42, restPoints: ['a8-construire', 'a8-choisir'],
  },
  sections: [A8_LECTURE, A8_CARTES, A8_CONSTRUIRE, A8_FOCUS, A8_CHOISIR, A8_PIEGE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — QUI PAIE, QUI DÉCIDE
 *
 *  Society through the environment: une taxe, manifester, signer une
 *  pétition, prendre une décision, les inégalités, l'écoanxiété. Three
 *  readers, three views, none of them the lesson's.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: readers' letters on the Vaud bag tax. */
const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courrier des lecteurs',
  frSub: 'Trois avis sur la taxe au sac',
  text: COURRIER_TEXT,
  glossary: [
    { word: 'canton de Vaud', en: 'the canton of Vaud (Switzerland)', note: 'Une région de Suisse, avec Lausanne.' },
    { word: 'payant', en: 'not free, charged for', note: "Il faut payer. Le contraire : gratuit." },
    { word: 'juste', en: 'fair', note: 'Bien pour tout le monde.' },
    { word: 'gymnase', en: 'upper secondary school (Switzerland)', note: 'En Suisse romande, le lycée.' },
  ],
  questions: [
    { q: 'Depuis quand la taxe au sac existe-t-elle ?', a: 'Depuis 2013, dans le canton de Vaud.' },
    { q: "Qu'est-ce qui a changé pour Martine ?", a: "Elle fait le tri, elle sort un sac toutes les deux semaines, et elle paie moins qu'avant." },
    { q: 'Pourquoi Yannick trouve-t-il la taxe injuste ?', a: "Une grande famille paie plus qu'une personne seule." },
    { q: "Pour Aïcha, qui devrait payer ?", a: 'Les entreprises qui produisent les emballages. Elle a signé une pétition.' },
  ],
  audio: REC('rec-b1-33-courrier'),
  say: REFRAME,
  terms: ['mesure', 'avis'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-avis',
  title: 'Payer, manifester, décider',
  frSub: 'La société et ses mots',
  hint: 'Six cartes. Chaque nom a son verbe.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'mesure'],
  cards: [
    card(E(1151), 'Faire payer le carbone', 'les voisins',
      "Une taxe sur l'essence ou le gaz. On paie une taxe, sans pour. EN: a carbon tax."),
    card(E(1153), 'Dans la rue', 'la famille',
      "Manifester, une manifestation, un manifestant. Demonstration : une manifestation, pas une démonstration. EN: to demonstrate, a protest, a protester."),
    card(E(1154), 'Avec ton nom', 'les voisins',
      "On signe une pétition ; on peut aussi la lancer. EN: to sign a petition."),
    card(E(1155), 'Choisir pour tous', 'la famille',
      "On prend une décision, on ne la fait pas. EN: to decide, to make a decision."),
    card(E(1156), 'Pas pareil pour tous', 'la famille',
      "Égal, inégal, les inégalités, au pluriel. On réduit les inégalités. EN: equal, unequal, inequalities."),
    card(E(1157), "La peur pour l'avenir", 'les voisins',
      "Un mot récent : l'inquiétude pour la planète. Beaucoup de jeunes en parlent. EN: eco-anxiety."),
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Qui paie, qui agit',
  groups: [
    grp('Qui paie', [
      it(E(1162), 'la taxe carbone'),
      it(E(1163), 'les familles qui habitent loin'),
      it(E(1164), 'les gilets jaunes, en 2018'),
      it(E(1165), 'qui pollue le plus'),
      it(E(1166), 'qui souffre le plus'),
      it('fr.b1.questions-sociales.002', 'les inégalités'),
    ], chk(
      'Ces phrases posent la question...',
      ["du temps qu'il fait", 'de qui paie, et de qui souffre'], 1,
      "Une taxe coûte plus cher à certains. EN: who pays, who suffers.")),
    grp('Qui agit, qui décide', [
      it(E(1159), 'manifester, en 2019'),
      it(E(1160), 'les manifestants'),
      it(E(1161), 'signer une pétition'),
      it(E(1167), "l'écoanxiété"),
      it(E(1168), 'une décision du conseil'),
      it('fr.b1.questions-sociales.001', "l'inquiétude pour la planète"),
    ], chk(
      'Et ici ?',
      ['des gens qui manifestent, signent et décident', 'des gens qui ne font rien'], 0,
      "Manifester, signer, décider : agir ensemble. EN: acting together.")),
    ctl('Les deux côtés', '« Ce ne sont pas les plus pauvres qui polluent le plus. Pourtant... » Pourtant annonce...',
      ['une idée qui va dans le même sens', 'une idée qui surprend, en face'], 1,
      `Pourtant oppose deux idées, comme dans ${CONCESSION_REF}. EN: pourtant introduces a contrast.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'connecteur'],
};

/** NAME, as a lookup: six society nouns and their verbs. */
const A9_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-tableau',
  layer: 'core',
  sheetId: 'sheet-avis',
  title: 'Six noms, six voisins',
  cols: ['Le nom', 'Son voisin', 'Le piège'],
  rows: [
    { cells: ['une taxe', 'payer une taxe', 'sans pour'], say: fr(E(1162)),
      detail: { title: 'Payer', body: "On paie une taxe, une facture, un billet : sans pour. EN: no pour after payer.", say: fr(E(1163)) } },
    { cells: ['une pétition', 'signer une pétition', 'lancer ou signer'], say: fr(E(1161)),
      detail: { title: 'Signer', body: "On lance une pétition, puis les gens la signent. EN: start or sign a petition.", say: fr(E(1161)) } },
    { cells: ['une manifestation', 'manifester', 'pas démonstration'], say: fr(E(1159)),
      detail: { title: 'Manifester', body: "Une démonstration montre comment une chose marche. Dans la rue, c'est une manifestation. EN: a protest.", say: fr(E(1160)) } },
    { cells: ['une décision', 'prendre une décision', 'pas faire'], say: fr(E(1168)),
      detail: { title: 'Prendre', body: "On prend une décision, on prend une mesure. EN: to make a decision is prendre.", say: fr(E(1169)) } },
    { cells: ['les inégalités', 'réduire les inégalités', 'au pluriel'], say: fr('fr.b1.questions-sociales.002'),
      detail: { title: 'Réduire', body: "Les inégalités se creusent, ou on les réduit. EN: inequalities widen or are reduced.", say: fr(E(1165)) } },
    { cells: ['le conseil municipal', 'au Québec : de ville', 'une variante'], say: fr(E(1170)),
      detail: { title: 'La ville', body: "En France, la mairie et le conseil municipal ; au Québec, l'hôtel de ville et le conseil de ville. EN: two right names.", say: fr(E(1168)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'variante'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon verbe pour agir',
  groups: [
    ctl('La rue', "Dix mille personnes marchent pour le climat. C'est...",
      ['une manifestation', 'une démonstration'], 0,
      "Dans la rue, pour une cause : une manifestation. EN: a protest."),
    ctl('Le conseil', 'Le conseil municipal ... une décision.',
      ['a fait', 'a pris'], 1,
      "On prend une décision. EN: prendre."),
    ctl('La taxe', 'Les familles ... la taxe au sac.',
      ['paient pour', 'paient à', 'paient'], 2,
      "Payer quelque chose, sans pour. EN: pay the tax."),
    ctl("L'inquiétude", "Une jeune dit qu'elle a peur pour l'avenir de la planète. Elle parle d'...",
      ['écoanxiété', 'écologie', 'économie'], 0,
      "L'écoanxiété : l'inquiétude pour la planète. EN: eco-anxiety."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'fauxami'],
};

/** TRAP: demonstration, make a decision, pay for, and sauver again. */
const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de citoyen',
  errors: [
    { wrong: 'Beaucoup de jeunes ont fait une démonstration pour le climat.', right: 'Beaucoup de jeunes ont manifesté pour le climat.',
      why: "Normal : demonstration. Mais une démonstration montre comment une chose marche. Dans la rue : manifester. EN: to protest is manifester." },
    { wrong: 'Le conseil municipal a fait une décision.', right: 'Le conseil municipal a pris une décision.',
      why: "L'anglais dit make a decision. En français, on la prend. EN: prendre une décision." },
    { wrong: 'Les familles paient pour la taxe.', right: 'Les familles paient la taxe.',
      why: "Normal : to pay for. Mais payer prend son objet directement. EN: payer la taxe, no pour." },
    { wrong: 'Ma sœur a signé une pétition pour économiser le parc du quartier.', right: fr(E(1161)),
      why: "Ici, c'est sauver qui va : le parc est en danger. Économiser, c'est consommer moins. EN: here sauver is right." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fauxami', 'voisins'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Manifester', 'A climate demonstration :',
    ['une démonstration pour le climat', 'une manifestation pour le climat'], 1,
    "Une manifestation. EN: une manifestation."),
  ctl('La décision', 'To make a decision :',
    ['prendre une décision', 'faire une décision'], 0,
    "Prendre. EN: prendre."),
  ctl('Payer', 'To pay the tax :',
    ['payer pour la taxe', 'payer à la taxe', 'payer la taxe'], 2,
    "Sans pour. EN: payer la taxe."),
], ['voisins', 'mesure']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Qui paie, qui décide',
    opener: {
      line: "Une taxe sur chaque sac, une rue pleine de jeunes, un conseil qui vote : ici tu parles de qui paie et de qui décide. EN: A tax on every bag, a street full of young people, a council that votes: here you talk about who pays and who decides.",
      imageRef: 'lessons/environnement/act09.jpg',
    },
    sections: [],
    milestone: "Tu dis payer une taxe, manifester, signer une pétition et prendre une décision, et tu rapportes trois avis différents. EN: You talk about taxes, protests, petitions and decisions, and report three different views.",
    estScreens: 36, restPoints: ['a9-construire', 'a9-choisir'],
  },
  sections: [A9_LECTURE, A9_CARTES, A9_CONSTRUIRE, A9_TABLEAU, A9_CHOISIR, A9_ERREURS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — DONNER TON AVIS
 *
 *  The opinion formulas as collocations: être pour / contre, à mon avis,
 *  il faudrait, on devrait (b1.08), je propose de, d'un côté / de l'autre,
 *  il faut que + subjunctive (b1.14 to b1.16, the ONLY subjunctive in the
 *  lesson's authored French), même si, de plus (b1.30 to b1.32).
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: a local radio phone-in on closing the school street.
 *  Several views; the lesson takes none. `hideLines`. */
const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: "La rue de l'école, à la radio",
  frSub: 'Écoute : qui est pour, qui est contre',
  lines: [
    ln(E(1176)), ln(E(1178)), ln(E(1177)), ln(E(1181)), ln(E(1182)), ln(E(1183)),
    ln(E(1184)), ln(E(1185)), ln(E(1186)), ln(E(1187)), ln(E(1189)),
  ],
  questions: [
    { q: 'La première personne trouve la rue piétonne...', opts: ['une mauvaise idée', 'une bonne idée'], correct: 1, why: "« À mon avis, la rue piétonne est une bonne idée. » EN: a good idea." },
    { q: 'Pourquoi une personne est-elle contre ?', opts: ['à cause du bruit', 'parce que ça coûte cher', 'parce que les commerçants vont perdre des clients'], correct: 2, why: "« les commerçants vont perdre des clients ». EN: shopkeepers." },
    { q: 'Quelle proposition entend-on ?', opts: ["fermer la rue seulement aux heures d'école", 'fermer la rue toute la semaine'], correct: 0, why: "« seulement aux heures d'école ». EN: only during school hours." },
    { q: "« D'un côté..., de l'autre... » : cette personne...", opts: ['voit les deux côtés', 'est contre'], correct: 0, why: "Elle donne un pour et un contre. EN: she sees both sides." },
    { q: 'La dernière personne propose...', opts: ['de tout annuler', "d'essayer pendant un an", 'de voter demain'], correct: 1, why: "« on pourrait essayer pendant un an ». EN: a one-year trial." },
  ],
  audio: REC('rec-b1-33-radio-ecoute'),
  say: REFRAME,
  terms: ['avis', 'mesure'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-avis',
  title: 'Les mots pour donner ton avis',
  frSub: 'Se situer, nuancer, proposer',
  hint: 'Six cartes. Chaque formule a sa forme exacte.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['avis', 'connecteur'],
  cards: [
    card(E(1171), 'Te situer', 'ton avis',
      "Je suis pour cette mesure ; je suis contre. Pas pour de. EN: to be for, to be against."),
    card(E(1172), 'Commencer ton avis', 'ton avis',
      "À mon avis, ou selon moi. Pas dans mon opinion. EN: in my opinion."),
    card(E(1173), 'Proposer doucement', Cap(CONDITIONNEL_REF),
      "Le conditionnel adoucit : il faudrait planter, on devrait installer. Sans de. EN: we should, with the conditional."),
    card(E(1174), 'Proposer', 'ton avis',
      "Je propose de, puis l'infinitif : je propose de fermer la rue. EN: I suggest, with de."),
    card(E(1175), 'Les deux côtés', 'le connecteur',
      "D'un côté le pour, de l'autre le contre. Les leçons 30 à 32 du B1 t'en donnent d'autres. EN: on the one hand, on the other."),
    card(E(1182), 'Ce qui est nécessaire', 'le subjonctif',
      "Après il faut que, le verbe est au subjonctif : que la ville écoute. Tu l'as appris dans les leçons 14 à 16 du B1. EN: il faut que plus the subjunctive."),
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Se situer, puis proposer',
  groups: [
    grp('Pour, contre, ou les deux', [
      it(E(1176), 'à mon avis'),
      it(E(1177), 'pour, mais'),
      it(E(1178), 'contre, parce que'),
      it(E(1184), "d'un côté, de l'autre"),
      it(E(1187), 'les deux points de vue'),
    ], chk(
      'Ces personnes...',
      ['donnent des ordres', 'donnent leur avis, parfois des deux côtés'], 1,
      "Pour, contre, et souvent un peu des deux. EN: opinions, often nuanced.")),
    grp('Proposer', [
      it(E(1179), 'il faudrait'),
      it(E(1180), 'on devrait'),
      it(E(1181), 'je propose de'),
      it(E(1189), 'on pourrait'),
      it(E(1183), 'je voudrais que'),
      it('fr.b1.ecologie.004', 'il faut que, avec nous'),
    ], chk(
      'Ces phrases...',
      ['proposent quelque chose, poliment', 'racontent le passé'], 0,
      "Le conditionnel, je propose de, il faut que : des propositions. EN: proposals.")),
    ctl('Le conditionnel', '« Il faudrait », « on devrait » : pourquoi le conditionnel ?',
      ['pour parler du passé', 'pour proposer poliment'], 1,
      `Plus doux qu'un ordre, comme dans ${CONDITIONNEL_REF} et ${POLITESSE_REF}. EN: softer than an order.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avis', 'mesure'],
};

const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-hacks',
  layer: 'core',
  title: 'Trois astuces pour un avis',
  hacks: [
    { hack: "Nomme la mesure avant de la juger : la rue de l'école, la taxe au sac.",
      why: "Le lecteur doit savoir de quoi tu parles, et où. EN: name the measure first." },
    { hack: 'Un pour, un contre, puis ta proposition.',
      why: "D'un côté, de l'autre, c'est pourquoi : un avis qui voit les deux côtés convainc mieux. EN: both sides, then your idea." },
    { hack: 'Adoucis avec le conditionnel : il faudrait, on pourrait.',
      why: `Une proposition, pas un ordre. Tu l'as appris dans ${CONDITIONNEL_REF}. EN: soften with the conditional.` },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avis', 'connecteur'],
};

const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La bonne formule',
  groups: [
    ctl('Ton avis', 'In my opinion, en français :',
      ['Dans mon opinion,', 'À mon avis,', 'Pour mon avis,'], 1,
      "À mon avis, ou selon moi. EN: à mon avis."),
    ctl('Proposer', 'Tu veux proposer une idée au conseil :',
      ['Je propose planter des arbres.', 'Je propose de planter des arbres.'], 1,
      "Je propose de, puis l'infinitif. EN: with de."),
    ctl('Nuancer', 'Tu es pour, mais tu vois le problème des livraisons :',
      ['Je suis pour, même si les livraisons seront plus difficiles.', 'Je suis pour, donc tout va bien.'], 0,
      `Même si garde les deux côtés : ${CONCESSION_REF}. EN: même si keeps the other side.`),
    ctl('Le subjonctif', 'Il faut que la ville ... les commerçants.',
      ['écouter', 'écoute', 'écoutera'], 1,
      "Après il faut que : le subjonctif, que la ville écoute. EN: the subjunctive."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avis', 'connecteur'],
};

/** TRAP, stepped: the English opinion, the extra de, the missing de, the
 *  infinitive after il faut que. */
const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: "Les formules d'avis",
  rule: {
    title: 'Chaque formule a sa forme',
    body: "À mon avis, jamais dans mon opinion. On devrait installer, sans de. Je propose de fermer, avec de. Il faut que la ville écoute, au subjonctif. EN: each formula has one exact shape.",
  },
  cards: [
    { promptLabel: 'in my opinion', promptSound: 'Dans mon opinion, la rue piétonne est une bonne idée.', fr: fr(E(1176)), ipa: ipaOf(E(1176)), tip: "À mon avis. EN: à mon avis." },
    { promptLabel: 'devrait de', promptSound: "On devrait d'installer des bacs à compost dans le parc.", fr: fr(E(1180)), ipa: ipaOf(E(1180)), tip: "Devoir, puis l'infinitif, sans de. EN: no de after devrait." },
    { promptLabel: 'propose sans de', promptSound: "Je propose fermer la rue seulement aux heures d'école.", fr: fr(E(1181)), ipa: ipaOf(E(1181)), tip: "Je propose de fermer. EN: proposer de." },
    { promptLabel: 'il faut que + infinitif', promptSound: 'Il faut que la ville écouter aussi les commerçants.', fr: fr(E(1182)), ipa: ipaOf(E(1182)), tip: "Après il faut que, un verbe conjugué au subjonctif. EN: a conjugated subjunctive." },
    { promptLabel: 'pour de', promptSound: 'Je suis pour de cette mesure, mais pas le samedi.', fr: fr(E(1177)), ipa: ipaOf(E(1177)), tip: "Pour, directement. EN: pour, nothing else." },
    { promptLabel: 'les deux vues', promptSound: 'Je comprends les deux vues.', fr: fr(E(1187)), ipa: ipaOf(E(1187)), tip: "Une vue, c'est ce que tu vois par la fenêtre. Un avis : un point de vue. EN: points of view." },
  ],
  drill: [
    { promptSay: '... avis, la rue piétonne est une bonne idée.', opts: ['À mon', 'Dans mon'], correct: 0 },
    { promptSay: 'On devrait ... des bacs à compost.', opts: ["d'installer", 'installer'], correct: 1 },
    { promptSay: 'Je propose ... fermer la rue.', opts: ['à', 'pour', 'de'], correct: 2 },
    { promptSay: 'Il faut que la ville ... les commerçants.', opts: ['écoute', 'écouter'], correct: 0 },
    { promptSay: 'Je suis ... cette mesure.', opts: ['pour de', 'pour'], correct: 1 },
    { promptSay: 'Je comprends les deux ... .', opts: ['points de vue', 'vues'], correct: 0 },
    { promptSay: "Il ... plus d'arbres dans la cour.", opts: ['faut que', 'faudrait'], correct: 1 },
    { promptSay: "D'un côté, l'air sera plus propre ; de ..., les livraisons seront difficiles.", opts: ["l'autre", 'un autre'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Chaque formule a sa forme' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la phrase fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-33-piege-avis'),
  say: REFRAME,
  terms: ['avis', 'fauxami'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Ton avis', 'Pour commencer ton avis :',
    ['À mon avis,', 'Dans mon opinion,'], 0,
    "À mon avis. EN: à mon avis."),
  ctl('Proposer', 'Je propose ... fermer la rue.',
    ['à', 'de'], 1,
    "Proposer de. EN: de."),
  ctl('Il faut que', 'Il faut que la ville ... .',
    ['écoutes', 'écouter', 'écoute'], 2,
    "Le subjonctif, avec la ville : écoute. EN: écoute."),
], ['avis', 'connecteur']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Donner ton avis',
    opener: {
      line: "Une rue d'école fermée aux voitures, des voix pour et contre à la radio : ici tu apprends à donner ton avis et à proposer. EN: A school street closed to cars, voices for and against: here you learn to give your view and propose.",
      imageRef: 'lessons/environnement/act10.jpg',
    },
    sections: [],
    milestone: "Tu dis à mon avis, tu te dis pour ou contre, tu vois l'autre côté et tu proposes avec il faudrait, je propose de et il faut que. EN: You give a nuanced opinion and make a proposal.",
    estScreens: 46, restPoints: ['a10-construire', 'a10-choisir'],
  },
  sections: [A10_ECOUTE, A10_CARTES, A10_CONSTRUIRE, A10_HACKS, A10_CHOISIR, A10_PIEGE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — À TOI DE PROPOSER
 *
 *  The model message, the plan, the role play, THE TASK, then the closing
 *  sections the playbook requires, with the one quiz.
 * ══════════════════════════════════════════════════════════════════════════ */

/** The model the learner imitates: one measure, both sides, a proposal,
 *  eight collocations, five connectors. */
const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Camille',
  frSub: 'La forme que tu vas écrire',
  text: MESSAGE_TEXT,
  glossary: [
    { word: 'Madame la conseillère', en: 'Councillor (to a woman)', note: 'La formule pour écrire à une élue de la ville.' },
    { word: 'les moteurs tournent', en: 'the engines are running', note: 'Les voitures attendent, moteur allumé.' },
    { word: 'du coin', en: 'local, on the corner', note: 'Du quartier, tout près.' },
    { word: "parent d'élève", en: 'parent of a pupil', note: "La mère ou le père d'un enfant de l'école." },
  ],
  questions: [
    { q: 'De quelle mesure parle Camille ?', a: "La rue de l'école Saint-Jean, que la ville veut fermer aux voitures." },
    { q: 'Est-elle pour ou contre ?', a: 'Pour, avec trois raisons : un air moins pollué, plus de familles à pied ou à vélo, une rue plus calme.' },
    { q: "Quel est l'autre côté ?", a: 'Les livraisons du matin et les commerçants du coin : « Par contre ».' },
    { q: 'Que propose-t-elle ?', a: 'Une exception pour les livraisons avant huit heures, des bacs à compost et des arbres.' },
  ],
  audio: REC('rec-b1-33-message'),
  say: REFRAME,
  terms: ['avis', 'connecteur', 'mesure'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour ton message',
  steps: [
    "1. Nomme la mesure et le lieu : la rue de l'école, la taxe au sac, la piste cyclable. EN: name the measure and the place.",
    "2. Donne ton avis : à mon avis, je suis pour, je suis contre. EN: give your view.",
    "3. Donne deux raisons, avec d'abord, ensuite, de plus. EN: two reasons, with connectors.",
    "4. Montre l'autre côté : par contre, même si. EN: show the other side.",
    "5. Propose : c'est pourquoi je propose de, il faudrait, il faut que. EN: end with a proposal.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['mesure', 'avis', 'connecteur'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Une phrase par étape',
  cases: [
    uc('Tu nommes la mesure, poliment', E(1190)),
    uc('Tu donnes ton avis et annonces tes raisons', E(1191)),
    uc("Tu montres l'autre côté", E(1194)),
    uc('Tu conclus avec ta proposition', E(1195)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avis', 'connecteur'],
};

/** Say it out loud: six turns at a neighbourhood council meeting. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au conseil de quartier',
  setting: "Un mardi soir, à la salle communautaire. La conseillère municipale écoute les habitants sur la rue de l'école. C'est ton tour.",
  turns: [
    {
      ai: "Bonsoir. Vous voulez parler de la rue de l'école ?",
      en: 'Good evening. You want to talk about the school street?',
      user: fr(E(1191)),
      userEn: 'I am for this project, for three reasons. (être pour, and a plan announced.)',
      alts: [
        { fr: fr(E(1176)), en: 'In my opinion, the pedestrian street is a good idea. (à mon avis.)' },
        { fr: "Oui. Je suis plutôt pour, mais j'ai une question.", en: 'Yes. I am rather for it, but I have a question. (a nuanced start: also right.)' },
      ],
    },
    {
      ai: 'Pourquoi êtes-vous pour ?',
      en: 'Why are you for it?',
      user: fr(E(1192)),
      userEn: 'First, the children will breathe less polluted air. (d’abord, and the pollution family.)',
      alts: [
        { fr: fr(E(1193)), en: 'Next, more families will come on foot or by bike. (ensuite.)' },
        { fr: 'Parce que le matin, il y a des bouchons devant la porte.', en: 'Because in the morning there are traffic jams in front of the door. (parce que.)' },
      ],
    },
    {
      ai: 'Et les commerçants, eux, ne sont pas contents.',
      en: 'And the shopkeepers are not happy.',
      user: fr(E(1194)),
      userEn: 'On the other hand, we have to think about the morning deliveries. (par contre: the other side.)',
      alts: [
        { fr: fr(E(1187)), en: 'I understand both points of view. (points de vue.)' },
        { fr: "Je comprends leur inquiétude : ils vont peut-être perdre des clients.", en: 'I understand their worry: they may lose customers.' },
      ],
    },
    {
      ai: 'Vous avez une proposition ?',
      en: 'Do you have a proposal?',
      user: fr(E(1195)),
      userEn: 'That is why I suggest an exception for the shopkeepers. (c’est pourquoi, je propose.)',
      alts: [
        { fr: fr(E(1181)), en: 'I suggest closing the street only during school hours. (je propose de + infinitive.)' },
        { fr: fr(E(1199)), en: 'I also suggest a compost bin in front of the school. (a second proposal.)' },
      ],
    },
    {
      ai: "Et la ville, qu'est-ce qu'elle devrait faire d'autre ?",
      en: 'And what else should the town do?',
      user: fr(E(1182)),
      userEn: 'The town needs to listen to the shopkeepers too. (il faut que + subjunctive, lessons 14 to 16 in B1.)',
      alts: [
        { fr: fr(E(1179)), en: 'There should be more trees in the schoolyard. (il faudrait.)' },
        { fr: fr(E(1180)), en: 'We should put compost bins in the park. (on devrait.)' },
      ],
    },
    {
      ai: 'Merci. Autre chose ?',
      en: 'Thank you. Anything else?',
      user: fr(E(1196)),
      userEn: 'Thank you for your attention. (the polite close, lesson 9 in B1.)',
      alts: [
        { fr: fr(E(1198)), en: 'Every small action counts, but so do the big decisions. (a closing thought.)' },
        { fr: "Non, merci de m'avoir écouté.", en: 'No, thank you for listening to me.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avis', 'mesure'],
};

/** THE GRADED TASK. The unit outcome is tested here (shapes doc §2.3). */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Écris à ta ville',
  frSub: 'Mission écrite',
  brief: "Ta ville propose une mesure pour l'environnement dans ton quartier : une rue piétonne, une piste cyclable, la taxe au sac, des bacs à compost. Écris au conseil municipal, ou réponds sur le forum du quartier. Donne ton avis, montre l'autre côté, et fais une proposition.",
  briefEn: 'Your town is proposing an environmental measure for your neighbourhood: a pedestrian street, a bike lane, the bag tax, compost bins. Write to the town council, or reply on the neighbourhood forum. Give your opinion, show the other side, and make a proposal.',
  produce: "Écris un message de 110 à 150 mots sur une seule mesure : ton avis avec des raisons, l'autre côté, et une proposition. Utilise au moins huit blocs de la leçon et au moins deux connecteurs.",
  responseSpec: { kind: 'text', minWords: 110, maxWords: 150 },
  rubric: {
    criteria: [
      {
        key: 'voisins',
        label: 'Les mots avec leurs voisins',
        maxPoints: 4,
        descriptors: [
          "4 : Au moins huit blocs de la leçon, chacun complet et à sa place : faire le tri, économiser l'énergie, une piste cyclable, prendre une décision.",
          '3 : Huit blocs, mais un voisin est faux (sauver l’énergie, faire une décision), ou un bloc est coupé.',
          '2 : Moins de huit blocs, ou plusieurs voisins traduits de l’anglais.',
          "1 : Des mots seuls, sans leurs voisins : la pollution, le recyclage, l'énergie, et aucune phrase complète autour.",
        ],
      },
      {
        key: 'avis',
        label: 'Un avis nuancé et une proposition',
        maxPoints: 3,
        descriptors: [
          "3 : On sait de quelle mesure tu parles. Ton avis a des raisons, tu montres l'autre côté, et tu fais une vraie proposition.",
          "2 : L'avis est clair, mais il manque l'autre côté ou la proposition.",
          '1 : On ne sait pas ce que tu penses, ou tu fais une liste de problèmes sans avis.',
        ],
      },
      {
        key: 'liens',
        label: 'Des idées reliées',
        maxPoints: 3,
        descriptors: [
          "3 : Au moins deux connecteurs bien choisis (d'abord, de plus, par contre, même si, c'est pourquoi) : le lecteur suit ton raisonnement.",
          '2 : Un seul connecteur, ou un connecteur qui dit le mauvais lien.',
          '1 : Des phrases juxtaposées, sans lien entre elles.',
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Un vrai message, entre 110 et 150 mots, avec une formule de début et de fin qui va avec le lecteur.',
          '1 : Il manque un élément : moins de 110 mots, pas de formule, ou plusieurs mesures mélangées.',
        ],
      },
    ],
  },
  scaffold: [
    'Madame, Monsieur,',
    'Je vous écris au sujet de...',
    'À mon avis,',
    "D'abord,",
    'De plus,',
    'Par contre,',
    "C'est pourquoi je propose de...",
    'Je vous remercie de votre attention.',
  ],
  modelAnswer: "Bonjour à tous, je réponds au sujet de la nouvelle piste cyclable sur la rue King. À mon avis, c'est une bonne idée. D'abord, beaucoup d'étudiants roulent à vélo, et la rue est dangereuse aux heures de pointe. De plus, moins de voitures, c'est moins de bruit et un air plus propre. Par contre, la ville va enlever quarante places de stationnement, et les commerçants ont peur de perdre des clients. Je les comprends. C'est pourquoi je propose de garder quelques places pour les livraisons et de prolonger la ligne d'autobus jusqu'au centre-ville. On devrait aussi installer des supports à vélos devant les magasins. Il faut que la ville écoute tout le monde, mais je suis pour ce projet. Au plaisir, Julien",
  modelAnswerEn: "Hello everyone, I am replying about the new bike lane on King Street. In my opinion, it is a good idea. First, many students ride bikes, and the street is dangerous at rush hour. Moreover, fewer cars means less noise and cleaner air. On the other hand, the town is going to remove forty parking spaces, and the shopkeepers are afraid of losing customers. I understand them. That is why I suggest keeping a few spaces for deliveries and extending the bus line to downtown. We should also install bike racks in front of the shops. The town needs to listen to everyone, but I am for this project. Talk soon, Julien",
  watchFor: [
    {
      pattern: "A noun with the verb its English equivalent takes (sauver l'énergie, faire une décision, trier le tri).",
      criterion: 'voisins',
      feedback: "Ce mot a son voisin : économiser l'énergie, prendre une décision, faire le tri.",
      ref: 'a1-cartes',
    },
    {
      pattern: 'A weather event with the wrong verb (il fait une canicule, il y a sec) or a cut block (les gaz de serre).',
      criterion: 'voisins',
      feedback: "Il y a une canicule, il fait sec ; les gaz à effet de serre, en entier.",
      ref: 'a2-piege',
    },
    {
      pattern: 'The wrong member of a family (un lac polluant, un polluant for a person, pollutent).',
      criterion: 'voisins',
      feedback: "Pollué subit, polluant agit, le pollueur est une personne.",
      ref: 'a3-erreurs',
    },
    {
      pattern: 'Sorting and recycling calques (faire la sorte, les paquetages, recyclé for recyclable).',
      criterion: 'voisins',
      feedback: "Faire le tri, les emballages, recyclable.",
      ref: 'a4-piege',
    },
    {
      pattern: 'Consumption look-alikes (gaspiller des déchets, en gros for loose, fixer for repair, réusable).',
      criterion: 'voisins',
      feedback: "On réduit ses déchets, on achète en vrac, on répare, un sac réutilisable.",
      ref: 'a5-erreurs',
    },
    {
      pattern: 'Energy calques (une plante, une panne de pouvoir, des panels solaires).',
      criterion: 'voisins',
      feedback: "Une centrale, une panne de courant, des panneaux solaires.",
      ref: 'a6-piege',
    },
    {
      pattern: 'Transport calques (conduire un vélo, le transport public in the singular, une station de charge).',
      criterion: 'voisins',
      feedback: "Rouler à vélo, les transports en commun, une borne de recharge.",
      ref: 'a7-erreurs',
    },
    {
      pattern: 'Society verbs from English (une démonstration for a protest, payer pour la taxe).',
      criterion: 'voisins',
      feedback: "Une manifestation ; on paie la taxe, sans pour.",
      ref: 'a9-erreurs',
    },
    {
      pattern: "Opinion formulas built from English or with the wrong de (dans mon opinion, on devrait de, je propose fermer), or an infinitive after il faut que.",
      criterion: 'avis',
      feedback: "À mon avis ; on devrait installer ; je propose de fermer ; il faut que la ville écoute.",
      ref: 'a10-piege',
    },
    {
      pattern: 'Only one side: an opinion with no other side, or a complaint with no proposal.',
      criterion: 'avis',
      feedback: "Ajoute l'autre côté avec par contre ou même si, puis une proposition avec je propose de.",
      ref: 'a11-plan',
    },
    {
      pattern: 'Ideas side by side with no connector, or a connector that says the wrong link (donc for a contrast).',
      criterion: 'liens',
      feedback: "Relie tes idées : d'abord, de plus, par contre, c'est pourquoi.",
      ref: 'a11-lecture',
    },
    {
      pattern: 'A lecture to the reader instead of an opinion (vous devez arrêter de polluer), or several measures at once.',
      criterion: 'tache',
      feedback: "Parle d'une seule mesure, et propose : il faudrait, on pourrait. Tu écris à ta ville, pas à un élève.",
      ref: 'a10-hacks',
    },
  ],
  graderNotes: [
    'Grade the collocations as BLOCKS: a correct block in the wrong place counts under « voisins » only if it is also used with the right meaning. Count a reused block once. Count family members (polluer / la pollution) as one block each only when each sits with its neighbour.',
    'Word count EXCLUDES the greeting and the sign-off, as in the other B1 writing tasks. 10% tolerance (99 to 165) before criterion « tache » loses its point.',
    'Accept either viewpoint. A learner AGAINST the measure scores the same as one for it: grade the reasons, the other side and the proposal, never the position.',
    'Accept regional variants without comment (le bac bleu, fermer la lumière, l’autobus, le stationnement, le conseil de ville, les transports publics, le gymnase).',
    'The subjunctive is expected only after il faut que or je voudrais que (lessons 14 to 16 in B1). Accept a correct one; mark an infinitive after il faut que under « avis » once; ignore other subjunctive slips under this lesson.',
    'Connectors (lessons 30 to 32 in B1) are graded for the link they say, not for rarity: two well-chosen simple ones beat four forced ones.',
    'Do not mark facts: a learner may invent a local measure, a street or a number.',
    'Formal register (vous, Madame la conseillère) is expected for the council; a forum reply may use a friendly courant register. Either is fine if it stays the same from start to end.',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['voisins', 'avis'],
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
  sheetId: 'sheet-avis',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la famille', v: 'le verbe, le nom, l’adjectif, la personne', say: fr(E(1049)),
      detail: { title: 'La famille', body: "Polluer, la pollution, polluant, un pollueur. EN: one root, four words.", say: fr(E(1041)) } },
    { k: 'les voisins', v: 'le mot qui va toujours avec', say: fr(E(1005)),
      detail: { title: 'Les voisins', body: "Économiser l'énergie, faire le tri, prendre une décision. EN: collocations.", say: fr(E(1006)) } },
    { k: 'les faux amis', v: 'save, plant, power, fix', say: fr(E(1111)),
      detail: { title: 'Les faux amis', body: "Économiser, une centrale, le courant, réparer. EN: four English words that do not cross.", say: fr(E(1110)) } },
    { k: 'les variantes', v: 'bac bleu, sac PMC, poubelle jaune', say: fr(E(1061)),
      detail: { title: 'Les variantes', body: "Québec, Belgique, France, Suisse : chacun a raison chez lui. EN: every variant is right.", say: fr(E(1106)) } },
    { k: 'ton avis', v: 'à mon avis, je suis pour, par contre', say: fr(E(1176)),
      detail: { title: 'Ton avis', body: "Un pour, un contre, sans oublier l'autre côté. EN: a nuanced view.", say: fr(E(1184)) } },
    { k: 'ta proposition', v: 'il faudrait, je propose de, il faut que', say: fr(E(1181)),
      detail: { title: 'Ta proposition', body: "Le conditionnel pour adoucir, le subjonctif après il faut que. EN: soften, then propose.", say: fr(E(1182)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'voisins', 'avis'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu parles du climat, de la pollution, des déchets, de ta consommation, de l'énergie, de la ville, de la nature et de la société, avec des familles de mots et leurs voisins. Tu connais les variantes du Québec, de Belgique, de Suisse et de France, et tu donnes un avis nuancé avec une proposition. Le piège qui reste est discret : le voisin anglais qui revient quand tu écris vite, sauver l'énergie, faire une décision. Avant l'examen, choisis dix blocs et écris pour chacun une phrase sur ton quartier. EN: Pick ten blocks and write one sentence about your own neighbourhood for each.",
  stats: [
    { k: 'Les familles', v: 'vingt-six, du verbe à la personne' },
    { k: 'Les voisins', v: "une cinquantaine de blocs" },
    { k: 'Les variantes', v: 'Québec, Belgique, Suisse, France' },
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
      id: 'r1-voisin', label: 'Le mot et son voisin', targets: ['voisin-anglais'],
      questions: [
        mc('To save energy, en français :', ["économiser l'énergie", "sauver l'énergie", "garder l'énergie"], 0, "L'énergie va avec économiser. EN: économiser.", 'a1-scene'),
        mc('To sort your waste :', ['faire le tri', 'faire la sorte', 'trier le tri'], 0, "Faire le tri. EN: faire le tri.", 'a1-cartes'),
        mc('To take public transport :', ['prendre les transports en commun', 'prendre le transport public', 'monter les transports'], 0, "Prendre, au pluriel. EN: plural.", 'a1-cartes'),
        mc('Économiser, les économies, économe :', ['une famille de mots', 'trois mots sans lien'], 0, "Une racine, trois classes. EN: a word family.", 'a1-reperer'),
        tI('On essaie de ___ nos déchets. (to cut down on)', fr(E(1007)), "Réduire ses déchets. EN: réduire.", 'a1-cartes'),
        tI('Dans cet immeuble, tout le monde ___ le tri.', fr(E(1006)), "On fait le tri. EN: fait.", 'a1-reperer'),
        eS("J'essaie toujours de sauver l'énergie.", fr(E(1005)), "On économise l'énergie. EN: économiser.", 'a1-scene'),
        lC('Écoute. Comment la personne va-t-elle au travail ?', fr(E(1008)), ['en transports en commun', 'à pied'], 0, "Je prends les transports en commun. EN: by public transport.", 'a1-usages'),
      ],
    },
    {
      id: 'r2-climat', label: 'Le climat', targets: ['meteo-verbe'],
      questions: [
        mc('Une canicule : quel début ?', ['Il y a une canicule.', 'Il fait une canicule.', 'Il est une canicule.'], 0, "Un nom qui arrive : il y a. EN: il y a.", 'a2-cartes'),
        mc('Pas de pluie depuis des mois :', ['une sécheresse', 'une inondation', 'une canicule'], 0, "Une sécheresse. EN: a drought.", 'a2-construire'),
        mc("Le climat, c'est...", ['la moyenne sur trente ans', 'le temps du jour'], 0, "Le temps change chaque jour ; le climat, sur trente ans. EN: a thirty-year average.", 'a2-choisir'),
        tI('Il ___ très sec depuis deux mois.', fr(E(1030)), "Sec, un adjectif : il fait. EN: il fait.", 'a2-piege'),
        tI('La rivière a ___ les rues du village. (to flood)', fr(E(1031)), "Inonder, au passé composé. EN: inondé.", 'a2-cartes'),
        eS('Les gaz de serre réchauffent la planète.', fr(E(1027)), "Le bloc entier : gaz à effet de serre. EN: the whole block.", 'a2-piege'),
        eS('Les pompiers luttent contre un feu de bois au nord du Québec.', fr(E(1033)), "Dehors, un feu de forêt. EN: a wildfire.", 'a2-piege'),
        lC('Écoute. De quoi parle-t-on ?', fr(E(1025)), ['des inondations', 'de la sécheresse', 'des feux'], 0, "Les inondations de 2021. EN: floods.", 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-pollution', label: 'La famille de polluer', targets: ['famille-confondue'],
      questions: [
        mc("L'eau de ce lac est...", ['polluée', 'polluante', 'pollution'], 0, "Elle a été salie : polluée. EN: polluted.", 'a3-choisir'),
        mc('Une entreprise qui pollue :', ['un pollueur', 'un polluant'], 0, "La personne : -eur. EN: a polluter.", 'a3-construire'),
        mc('La fin -able fait...', ['un adjectif : qui peut', 'une personne', 'un nom'], 0, "Recyclable, réparable. EN: can be.", 'a3-tableau'),
        mc('Les usines ... des gaz.', ['émettent', 'émissionnent', 'polluent de'], 0, "Émettre, les émissions. EN: emit.", 'a3-cartes'),
        tI("Les voitures ___ l'air des villes. (polluer)", fr(E(1040)), "Ils polluent. EN: polluent.", 'a3-erreurs'),
        tI("Hier, la ___ de l'air était mauvaise à Montréal. (quality)", fr(E(1044)), "La qualité de l'air. EN: air quality.", 'a3-cartes'),
        eS("La pollution d'air est un problème en ville.", fr(E(1041)), "De l'air, avec l'article. EN: de l'air.", 'a3-erreurs'),
        lC('Écoute. Qui doit payer ?', fr(E(1043)), ['le pollueur', 'le polluant', 'la ville'], 0, "Le principe pollueur-payeur. EN: the polluter.", 'a3-cartes'),
      ],
    },
    {
      id: 'r4-tri', label: 'Trier et recycler', targets: ['tri-calque'],
      questions: [
        mc("Le sac PMC, c'est...", ['en Belgique', 'en Suisse', 'en France'], 0, "En Belgique. EN: Belgium.", 'a4-cartes'),
        mc('En France, les emballages vont dans...', ['la poubelle jaune', 'le bac bleu', 'le sac taxé'], 0, "La poubelle jaune. EN: the yellow bin.", 'a4-construire'),
        mc('« Recyclable » veut dire...', ["qu'on peut le recycler", "qu'il est déjà recyclé"], 0, "La fin -able. EN: can be recycled.", 'a4-piege'),
        tI('Chez nous, on a appris à faire le ___ en famille.', fr(E(1068)), "Le tri. EN: sorting.", 'a4-piege'),
        tI('Je rapporte mes bouteilles vides pour récupérer la ___ . (deposit)', fr(E(1067)), "La consigne. EN: the deposit.", 'a4-cartes'),
        eS('En France, on met les paquetages dans la poubelle jaune.', fr(E(1063)), "Les emballages. EN: packaging.", 'a4-piege'),
        eS('Est-ce que ce pot de yaourt est recyclé ?', fr(E(1066)), "Tu demandes s'il peut l'être : recyclable. EN: recyclable.", 'a4-piege'),
        lC('Écoute. Où est-on ?', fr(E(1064)), ['en Suisse', 'en Belgique', 'au Québec'], 0, "Lausanne, la taxe au sac. EN: Switzerland.", 'a4-histoire'),
      ],
    },
    {
      id: 'r5-conso', label: 'Consommer autrement', targets: ['conso-calque'],
      questions: [
        mc('Sans emballage :', ['en vrac', 'en gros', 'en paquet'], 0, "En vrac. EN: loose.", 'a5-cartes'),
        mc('Une veste déjà portée, achetée...', ['de seconde main', 'de saison', 'en vrac'], 0, "De seconde main. EN: second-hand.", 'a5-choisir'),
        mc('To fix a toaster :', ['réparer', 'fixer'], 0, "Réparer. EN: réparer.", 'a5-erreurs'),
        mc("Jeter une salade encore bonne, c'est...", ['du gaspillage', 'du suremballage', 'du compost'], 0, "Du gaspillage. EN: waste.", 'a5-choisir'),
        tI("J'apporte toujours un sac ___ au marché. (reusable)", fr(E(1091)), "Réutilisable. EN: reusable.", 'a5-erreurs'),
        tI("Au marché, j'achète des fruits de ___ .", fr(E(1080)), "De saison. EN: seasonal.", 'a5-construire'),
        eS('Au café-réparation, un bénévole a fixé mon grille-pain.', fr(E(1084)), "Réparer. EN: to repair.", 'a5-erreurs'),
        lC('Écoute. Où commence le gaspillage ?', fr(E(1082)), ['dans le frigo', 'au marché'], 0, "Dans le frigo. EN: in the fridge.", 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-energie', label: "L'énergie", targets: ['energie-calque'],
      questions: [
        mc('A power plant :', ['une centrale', 'une plante', 'une usine à pouvoir'], 0, "Une centrale. EN: une centrale.", 'a6-piege'),
        mc('A power cut :', ['une panne de courant', 'une panne de pouvoir'], 0, "Le courant. EN: courant.", 'a6-choisir'),
        mc("Au Québec, presque toute l'électricité vient...", ["de l'eau", 'du nucléaire', 'du charbon'], 0, "Des barrages. EN: water.", 'a6-lecture'),
        tI("L'école a installé des ___ solaires sur son toit.", fr(E(1104)), "Des panneaux. EN: panels.", 'a6-piege'),
        tI("Le soir, on ___ le chauffage d'un degré. (to turn down)", fr(E(1105)), "Baisser le chauffage. EN: baisser.", 'a6-cartes'),
        eS('Le vent et le soleil sont des énergies renouvelées.', fr(E(1109)), "Renouvelables. EN: renewable.", 'a6-piege'),
        eS("Dans la région de Thiès, au Sénégal, des moulins produisent de l'électricité.", fr(E(1103)), "Des éoliennes. EN: wind turbines.", 'a6-piege'),
        lC('Écoute. De quel pays parle-t-on ?', fr(E(1102)), ['de la France', 'du Québec', 'du Sénégal'], 0, "Le nucléaire en France. EN: France.", 'a6-tableau'),
      ],
    },
    {
      id: 'r7-ville', label: 'Se déplacer', targets: ['transport-calque'],
      questions: [
        mc('To ride a bike :', ['rouler à vélo', 'conduire un vélo'], 0, "Rouler. EN: rouler.", 'a7-cartes'),
        mc('Public transport, en Suisse :', ['les transports publics', 'le transport public', 'les transports communs'], 0, "Au pluriel. EN: plural.", 'a7-choisir'),
        mc('Pour une voiture électrique :', ['une borne de recharge', 'une station de charge', 'une pompe'], 0, "Une borne de recharge. EN: a charging station.", 'a7-erreurs'),
        mc('Trop de voitures sur le pont :', ['des bouchons', 'une piste cyclable'], 0, "Des bouchons. EN: traffic jams.", 'a7-flash'),
        tI('On fait du ___ avec deux collègues. (carpooling)', fr(E(1122)), "Le covoiturage. EN: carpooling.", 'a7-erreurs'),
        tI('À Lyon, la zone à faibles ___ fait débat.', fr(E(1123)), "Émissions. EN: emissions.", 'a7-cartes'),
        eS("Il n'y a pas assez de stations de charge dans mon quartier.", fr(E(1126)), "Des bornes de recharge. EN: charging stations.", 'a7-erreurs'),
        lC('Écoute. Pourquoi garde-t-il sa voiture ?', fr(E(1130)), ['il habite loin du métro', 'il aime conduire', "il n'a pas de vélo"], 0, "J'habite loin du métro. EN: far from the metro.", 'a7-histoire'),
      ],
    },
    {
      id: 'r8-nature', label: 'La nature', targets: ['subi-agit'],
      questions: [
        mc('Une espèce en danger :', ['une espèce menacée', 'une espèce menaçante'], 0, "Elle subit : menacée. EN: threatened.", 'a8-piege'),
        mc('Le désert qui avance :', ['la désertification', 'la désertion', 'la déforestation'], 0, "La désertification. EN: desertification.", 'a8-cartes'),
        mc('To protect :', ['protéger', 'protecter'], 0, "Protéger. EN: protéger.", 'a8-piege'),
        tI('Cette partie du fleuve est une zone ___ . (protected)', fr(E(1142)), "Protégée. EN: protected.", 'a8-piege'),
        tI('Le bruit des bateaux est une ___ pour les bélugas. (threat)', fr(E(1141)), "Le nom : une menace. EN: a threat.", 'a8-cartes'),
        eS('Les bélugas du Saint-Laurent sont une espèce menaçante.', fr(E(1140)), "Menacée. EN: threatened.", 'a8-piege'),
        eS('Il faut protecter les zones humides.', fr(E(1146)), "Protéger. EN: protect.", 'a8-piege'),
        lC('Écoute. Que faut-il faire aussi ?', fr(E(1150)), ['arroser les arbres', 'couper les arbres'], 0, "Il faut aussi les arroser. EN: water them.", 'a8-choisir'),
      ],
    },
    {
      id: 'r9-societe', label: 'Qui paie, qui décide', targets: ['societe-verbe'],
      questions: [
        mc('A climate demonstration :', ['une manifestation', 'une démonstration'], 0, "Une manifestation. EN: a protest.", 'a9-cartes'),
        mc('To make a decision :', ['prendre une décision', 'faire une décision', 'donner une décision'], 0, "Prendre. EN: prendre.", 'a9-tableau'),
        mc('Pour Yannick, la taxe au sac...', ["n'est pas égale pour tous", 'est parfaite', 'devrait disparaître'], 0, "Une grande famille paie plus. EN: not equal.", 'a9-lecture'),
        mc("L'écoanxiété, c'est...", ["l'inquiétude pour la planète", "l'économie verte", 'une taxe'], 0, "L'inquiétude pour l'avenir. EN: eco-anxiety.", 'a9-cartes'),
        tI('Ma sœur a ___ une pétition pour sauver le parc du quartier.', fr(E(1161)), "Signer une pétition. EN: signed.", 'a9-tableau'),
        tI("Le conseil municipal a ___ une décision : la rue devant l'école sera piétonne.", fr(E(1168)), "Prendre une décision. EN: made.", 'a9-choisir'),
        eS('Les familles paient pour la taxe.', 'Les familles paient la taxe.', "Payer quelque chose, sans pour. EN: no pour.", 'a9-erreurs'),
        lC('Écoute. Que dit la phrase ?', fr(E(1165)), ['les plus pauvres ne polluent pas le plus', 'les plus pauvres polluent le plus'], 0, "Ce ne sont pas les plus pauvres. EN: not the poorest.", 'a9-construire'),
      ],
    },
    {
      id: 'r10-avis', label: 'Ton avis', targets: ['avis-calque'],
      questions: [
        mc('In my opinion :', ['À mon avis', 'Dans mon opinion', 'Pour mon avis'], 0, "À mon avis. EN: à mon avis.", 'a10-piege'),
        mc('Je propose ... fermer la rue.', ['de', 'à', 'pour'], 0, "Proposer de. EN: de.", 'a10-cartes'),
        mc('« Il faudrait » sert à...', ['proposer poliment', 'raconter le passé', 'donner un ordre'], 0, "Le conditionnel adoucit. EN: softening.", 'a10-hacks'),
        tI('On ___ installer des bacs à compost dans le parc. (should)', fr(E(1180)), "On devrait, sans de. EN: devrait.", 'a10-cartes'),
        tI('Il faut que la ville ___ aussi les commerçants. (écouter)', fr(E(1182)), "Le subjonctif : écoute. EN: subjunctive.", 'a10-choisir'),
        eS("Je propose fermer la rue seulement aux heures d'école.", fr(E(1181)), "Je propose de fermer. EN: de.", 'a10-piege'),
        eS('Je suis pour de cette mesure, mais pas le samedi.', fr(E(1177)), "Pour, sans de. EN: pour.", 'a10-piege'),
        lC('Écoute. Cette personne est...', fr(E(1184)), ['entre les deux', 'contre', 'pour'], 0, "D'un côté, de l'autre : les deux. EN: both sides.", 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-message', label: 'Ton message', targets: ['message-sans-plan'],
      questions: [
        mc('Pour écrire à une conseillère, tu commences par...', ['Madame la conseillère,', 'Salut la ville,'], 0, "La formule polie. EN: the polite opening.", 'a11-lecture'),
        mc("Pour montrer l'autre côté :", ['Par contre,', "D'abord,", 'Ensuite,'], 0, "Par contre oppose. EN: on the other hand.", 'a11-plan'),
        mc('Pour conclure avec ta proposition :', ["C'est pourquoi je propose...", 'Pourtant je propose...'], 0, "C'est pourquoi : la conséquence. EN: that is why.", 'a11-plan'),
        mc('Combien de blocs de la leçon, au moins, dans ton message ?', ['huit', 'deux', 'un seul'], 0, "Au moins huit. EN: at least eight.", 'a11-mission'),
        tI('Je vous ___ de votre attention. (to thank)', fr(E(1196)), "Remercier. EN: thank.", 'a11-lecture'),
        tI("C'est ___ je propose une exception pour les commerçants. (that is why)", fr(E(1195)), "C'est pourquoi. EN: that is why.", 'a11-usages'),
        eS("Madame la conseillère, je suis pour de ce projet.", 'Madame la conseillère, je suis pour ce projet.', "Pour, sans de. EN: pour.", 'a11-usages'),
        lC('Écoute. Quelle est la première raison ?', fr(E(1192)), ['un air moins pollué', 'des voitures plus rapides'], 0, "Les enfants respireront un air moins pollué. EN: cleaner air.", 'a11-lecture'),
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
    { front: 'save energy', back: "économiser l'énergie", say: fr(E(1005)) },
    { front: 'sort your waste', back: 'faire le tri', say: fr(E(1006)) },
    { front: 'a heatwave', back: 'il y a une canicule', say: fr(E(1022)) },
    { front: 'polluted, polluting', back: 'pollué, polluant', say: fr(E(1047)) },
    { front: 'buy loose', back: 'acheter en vrac', say: fr(E(1081)) },
    { front: 'a power plant', back: 'une centrale', say: fr(E(1111)) },
    { front: 'ride a bike', back: 'rouler à vélo', say: fr(E(1121)) },
    { front: 'make a decision', back: 'prendre une décision', say: fr(E(1168)) },
    { front: 'in my opinion', back: 'à mon avis', say: fr(E(1176)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: "L'environnement, en résumé",
  body: `${REFRAME} Tu sais maintenant parler du climat, des déchets, de l'énergie, de la ville, de la nature et de la société, chaque mot avec sa famille et ses voisins. Tu reconnais les variantes, tu évites les faux amis, et tu écris à ta ville un avis nuancé avec une proposition. La prochaine leçon, ${MEDIAS_REF}, parle des médias : tu y retrouveras les brèves et les forums. EN: Next lesson is about the media, where news briefs and forums come back.`,
  points: [
    'Un mot vient avec sa famille : polluer, la pollution, polluant, un pollueur.',
    "Et avec ses voisins : économiser l'énergie, faire le tri, prendre une décision.",
    'Les variantes sont justes chez elles : bac bleu, sac PMC, poubelle jaune.',
    "Un avis montre l'autre côté, puis propose.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'voisins', 'avis'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'À toi de proposer',
    opener: {
      line: "Une rue d'école, un conseil de quartier, une feuille blanche : à toi d'écrire à ta ville ce que tu penses et ce que tu proposes. EN: A school street, a council meeting, a blank page: your turn to tell your town what you think and propose.",
      imageRef: 'lessons/environnement/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit à ta ville un avis nuancé avec une proposition, et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote your town a nuanced opinion with a proposal, and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-pollution', 'a11-quiz/r6-energie', 'a11-quiz/r9-societe'],
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
  sheet('sheet-familles', 'Les familles de mots', ['la méthode', 'quinze familles', 'la fin du mot', 'subi ou agit'], [
    teach('sheet-familles-teach', 'La méthode',
      `${REFRAME} Pour chaque mot, apprends sa famille (le verbe, le nom, l'adjectif, la personne) et ses voisins (le verbe ou le mot qui va toujours avec). EN: learn each word with its family and its collocations.`),
    table('sheet-familles-table', 'Quinze familles', ['Verbe', 'Nom', 'Adjectif', 'Personne'], [
      ['polluer', 'la pollution', 'polluant, pollué', 'un pollueur'],
      ['consommer', 'la consommation', '', 'un consommateur'],
      ['économiser', 'les économies', 'économe', ''],
      ['réchauffer', 'le réchauffement', 'chaud', ''],
      ['sécher', 'la sécheresse', 'sec', ''],
      ['inonder', 'une inondation', 'inondé', ''],
      ['recycler', 'le recyclage', 'recyclable, recyclé', ''],
      ['trier', 'le tri', 'trié', ''],
      ['réparer', 'la réparation', 'réparable', ''],
      ['réutiliser', '', 'réutilisable', ''],
      ['gaspiller', 'le gaspillage', '', ''],
      ['protéger', 'la protection', 'protégé', ''],
      ['menacer', 'une menace', 'menacé, menaçant', ''],
      ['manifester', 'une manifestation', '', 'un manifestant'],
      ['décider', 'une décision', '', ''],
    ]),
    table('sheet-familles-fins', 'La fin du mot', ['Fin', 'Ce que ça fait', 'Exemples'], [
      ['-tion', 'un nom (une chose, une action)', 'la pollution, la protection, la consommation'],
      ['-ment', 'un nom (un changement)', 'le réchauffement, le changement'],
      ['-age', 'un nom (une action)', 'le recyclage, le gaspillage, le covoiturage'],
      ['-eur', 'une personne', 'un pollueur, un consommateur'],
      ['-ant', 'un adjectif : qui agit', 'polluant, menaçant'],
      ['-able', 'un adjectif : qui peut', 'recyclable, réparable, renouvelable'],
    ]),
    teach('sheet-familles-subi', 'Subi ou agit',
      "Le participe en -é dit ce qui subit : un lac pollué, une espèce menacée, une zone protégée. L'adjectif en -ant dit ce qui agit : une usine polluante, un chien menaçant. EN: -é undergoes the action, -ant does it."),
  ]),
  sheet('sheet-climat', "Le climat et l'énergie", ['le climat', 'il fait ou il y a', "les sources d'énergie", 'les faux amis'], [
    table('sheet-climat-table', 'Le climat', ['Mot', 'Son voisin', 'Anglais'], [
      ['la canicule', 'il y a une canicule', 'a heatwave'],
      ['chaud', 'il fait chaud', 'it is hot'],
      ['la sécheresse', 'il y a une sécheresse', 'a drought'],
      ['sec', 'il fait sec', 'it is dry'],
      ['une inondation', 'il y a des inondations ; la rivière inonde', 'a flood'],
      ['un feu de forêt', 'les feux de forêt brûlent', 'a wildfire'],
      ['les gaz à effet de serre', 'les émissions de gaz à effet de serre', 'greenhouse gases'],
      ['le réchauffement climatique', 'lutter contre le réchauffement', 'global warming'],
    ]),
    teach('sheet-climat-temps', 'Le temps ou le climat',
      "Le temps (la météo) change chaque jour : il fait chaud, il pleut. Le climat, c'est la moyenne sur trente ans : le climat change. Une journée chaude ne prouve rien ; dix étés chauds, si. EN: weather is today, climate is thirty years."),
    table('sheet-climat-energie', "Les sources d'énergie", ['Énergie', 'Où', 'Le mot qui va avec'], [
      ["l'hydroélectricité", 'au Québec, presque toute l’électricité', 'un barrage, une centrale'],
      ['le nucléaire', 'en France, environ deux tiers', 'une centrale nucléaire'],
      ["l'éolien", 'au Sénégal, région de Thiès', 'une éolienne'],
      ['le solaire', 'sur les toits, partout', 'un panneau solaire'],
      ['les énergies fossiles', 'le pétrole, le gaz, le charbon', 'une centrale thermique'],
      ["les économies d'énergie", 'chez toi', 'baisser le chauffage, éteindre la lumière'],
    ]),
    table('sheet-climat-faux', 'Les faux amis de l’énergie', ['Anglais', 'Pas', 'Mais'], [
      ['save energy', "sauver l'énergie", "économiser l'énergie"],
      ['a power plant', 'une plante', 'une centrale'],
      ['a power cut', 'une panne de pouvoir', 'une panne de courant'],
      ['a solar panel', 'un panel solaire', 'un panneau solaire'],
      ['a wind turbine', 'un moulin à vent', 'une éolienne'],
      ['renewable', 'renouvelé', 'renouvelable'],
    ]),
  ]),
  sheet('sheet-dechets', 'Trier, consommer, réparer', ['quatre pays, quatre poubelles', 'consommer autrement', 'déchets ou gaspillage'], [
    table('sheet-dechets-pays', 'Quatre pays, quatre poubelles', ['Pays', 'Le mot', 'Ce qui va dedans'], [
      ['Québec', 'le bac bleu', 'papier, carton, verre, plastique, métal'],
      ['Québec', 'le bac brun', 'les restes de repas, pour le compost'],
      ['Belgique', 'le sac PMC', 'plastiques, métaux, cartons à boissons'],
      ['France', 'la poubelle jaune', 'les emballages'],
      ['Suisse', 'le sac taxé', 'les ordures : chaque sac est payant'],
      ['partout', 'la consigne', 'on rapporte la bouteille, on récupère l’argent'],
    ]),
    table('sheet-dechets-conso', 'Consommer autrement', ['Le bloc', 'Sens', 'Anglais'], [
      ['acheter local', 'acheter près de chez soi', 'buy local'],
      ['acheter de saison', 'des fruits et légumes du moment', 'buy seasonal'],
      ['acheter en vrac', 'sans emballage', 'buy loose'],
      ['acheter de seconde main, d’occasion', 'déjà utilisé', 'buy second-hand'],
      ['réparer plutôt que jeter', 'faire réparer, au café-réparation', 'repair rather than throw away'],
      ['un objet jetable, réutilisable', 'pour une fois, pour longtemps', 'disposable, reusable'],
      ['le suremballage', 'trop d’emballage', 'overpackaging'],
      ['le gaspillage alimentaire', 'la nourriture perdue', 'food waste'],
    ]),
    teach('sheet-dechets-waste', 'Waste : deux mots',
      "Les déchets : ce que tu jettes (la poubelle, les emballages). Le gaspillage : ce que tu perds pour rien (la nourriture, l'eau, l'énergie). On réduit ses déchets ; on évite le gaspillage. Et en vrac veut dire sans emballage, pas en gros. EN: les déchets is rubbish, le gaspillage is wasting."),
  ]),
  sheet('sheet-ville', 'La ville et la nature', ['se déplacer', 'protéger la nature', 'Québec, Suisse, France'], [
    table('sheet-ville-transports', 'Se déplacer', ['Le bloc', 'Sens', 'Le piège'], [
      ['prendre les transports en commun', 'le bus, le métro, le tram', 'au pluriel'],
      ['faire du covoiturage', 'partager une voiture', 'pas carpool'],
      ['rouler à vélo, faire du vélo', 'aller à vélo', 'pas conduire un vélo'],
      ['une piste cyclable', 'une voie pour les vélos', ''],
      ['une borne de recharge', 'pour une voiture électrique', 'pas une station de charge'],
      ['une zone à faibles émissions', 'les voitures trop polluantes n’y entrent pas', ''],
      ['les bouchons, les embouteillages', 'trop de circulation', ''],
    ]),
    table('sheet-ville-nature', 'Protéger la nature', ['Le bloc', 'Sens', 'Anglais'], [
      ['une espèce menacée', 'en danger', 'a threatened species'],
      ['en voie de disparition', 'qui peut disparaître', 'endangered'],
      ['la biodiversité', 'toute la vie d’un lieu', 'biodiversity'],
      ['la déforestation', 'on coupe la forêt', 'deforestation'],
      ['la désertification', 'le désert avance', 'desertification'],
      ['une zone protégée', 'la nature y est protégée', 'a protected area'],
      ['planter des arbres, reboiser', 'le contraire de déboiser', 'plant trees'],
    ]),
    teach('sheet-ville-variantes', 'Québec, Suisse, France',
      "Au Québec : le bac bleu, fermer la lumière, l'autobus, le stationnement, le conseil de ville. En Suisse : les transports publics, le sac taxé, le gymnase (le lycée). En France : la poubelle jaune, éteindre la lumière, les transports en commun, le conseil municipal. Aucune n'est fausse. EN: every variant is right where it is used."),
  ]),
  sheet('sheet-avis', 'Donner ton avis', ['qui paie, qui décide', 'les formules', 'les connecteurs', 'relire ton message'], [
    table('sheet-avis-societe', 'Qui paie, qui décide', ['Le nom', 'Son voisin', 'Le piège'], [
      ['une taxe', 'payer une taxe', 'pas payer pour une taxe'],
      ['une pétition', 'signer une pétition', ''],
      ['une manifestation', 'manifester, participer à une manifestation', 'pas une démonstration'],
      ['une décision', 'prendre une décision', 'pas faire une décision'],
      ['les inégalités', 'réduire les inégalités', ''],
      ['une mesure', 'être pour, être contre une mesure', ''],
    ]),
    table('sheet-avis-formules', 'Les formules', ['Pour...', 'Tu dis', 'Leçon'], [
      ['donner ton avis', 'à mon avis, selon moi, je trouve que', ''],
      ['te situer', 'je suis pour, je suis contre', ''],
      ['proposer doucement', 'il faudrait, on devrait, on pourrait + infinitif', `${CONDITIONNEL_REF}`],
      ['proposer', 'je propose de + infinitif', ''],
      ['dire ce qui est nécessaire', 'il faut que la ville écoute (subjonctif)', `${SUBJ_FORM_REF} à ${SUBJ_INF_REF}`],
      ['écrire poliment', 'Madame la conseillère, je vous remercie de votre attention', `${POLITESSE_REF}`],
    ]),
    table('sheet-avis-connecteurs', 'Les connecteurs', ['Pour...', 'Connecteurs', 'Leçon'], [
      ['ordonner', "d'abord, ensuite, enfin", `${COORDINATION_REF}`],
      ['ajouter', 'de plus, en plus', `${COORDINATION_REF}`],
      ['expliquer', 'parce que, car', `${SUBORDINATION_REF}`],
      ['opposer', "par contre, d'un côté, de l'autre", `${CONCESSION_REF}`],
      ['concéder', 'même si, pourtant', `${CONCESSION_REF}`],
      ['conclure', "c'est pourquoi, donc", `${COORDINATION_REF}`],
    ]),
    table('sheet-avis-relire', 'Relire ton message', ['À vérifier', 'Comment'], [
      ['La mesure', 'on sait de quelle mesure tu parles, et où'],
      ['Ton avis', 'pour, contre, ou les deux, avec des raisons'],
      ["L'autre côté", 'au moins une phrase avec par contre ou même si'],
      ['Ta proposition', 'je propose de, il faudrait, on pourrait'],
      ['Les voisins', 'au moins huit blocs de la leçon, chacun complet'],
      ['Le registre', 'vous, une formule de début et de fin'],
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
  { id: 'd-voisin', title: 'Le bon voisin', format: 'mcq' as const, coach: "Chaque nom a son verbe : l'énergie, on l'économise. EN: every noun has its verb.", q: "Pour dire to save energy : ... l'énergie.", opts: ['économiser', 'sauver'], correct: 0, why: "Économiser l'énergie. EN: économiser.", items: [E(1000), E(1005), E(1010), E(1011), E(1006), E(1008)], audio: AUDIO },
  { id: 'd-climat', title: 'Il fait ou il y a', format: 'mcq' as const, coach: "Un adjectif prend il fait, un nom qui arrive prend il y a. EN: il fait sec, il y a une canicule.", q: 'Trente-cinq degrés pendant une semaine : il y a une ... .', opts: ['canicule', 'chaleur'], correct: 0, why: "Il y a une canicule. EN: a heatwave.", items: [E(1022), E(1029), E(1030), E(1026), E(1031), E(1032)], audio: AUDIO },
  { id: 'd-famille', title: 'Subi ou agit', format: 'mcq' as const, coach: "Le lac a été sali : pollué. L'usine salit : polluante. La personne : le pollueur. EN: -é undergoes, -ant acts, -eur is the person.", q: 'Un lac sali par une usine est un lac ... .', opts: ['polluant', 'pollué'], correct: 1, why: "Il a été sali : pollué. EN: polluted.", items: [E(1040), E(1041), E(1042), E(1047), E(1049), E(1051)], audio: AUDIO },
  { id: 'd-tri', title: 'Quatre pays, quatre poubelles', format: 'sort' as const, coach: "Deux piles : ce qu'on dit au Québec ou en France, ce qu'on dit en Belgique ou en Suisse. EN: sort by country.", buckets: ['au Québec ou en France', 'en Belgique ou en Suisse'], items: [E(1061), E(1063), E(1012), E(1062), E(1064), E(1057)], audio: AUDIO },
  { id: 'd-conso', title: 'Acheter ou garder', format: 'sort' as const, coach: "Deux piles : les façons d'acheter, les façons de jeter moins. EN: buying differently, throwing away less.", buckets: ['acheter autrement', 'jeter moins'], items: [E(1080), E(1081), E(1083), E(1084), E(1086), E(1087)], audio: AUDIO },
  { id: 'd-energie', title: 'Centrale, courant, économiser', format: 'mcq' as const, coach: "Power plant : une centrale. Power cut : une panne de courant. Save : économiser. EN: three words that do not cross.", q: 'Une ... nucléaire produit de l’électricité.', opts: ['centrale', 'plante'], correct: 0, why: "Une centrale. EN: a power plant.", items: [E(1101), E(1102), E(1103), E(1104), E(1110), E(1111)], audio: AUDIO },
  { id: 'd-transport', title: 'Rouler, prendre, faire', format: 'mcq' as const, coach: "On roule à vélo, on prend les transports en commun, on fait du covoiturage. EN: each way of moving has its verb.", q: "On ne conduit pas un vélo : on ... à vélo.", opts: ['roule', 'conduit'], correct: 0, why: "Rouler à vélo. EN: to ride.", items: [E(1121), E(1122), E(1126), E(1127), E(1128), E(1131)], audio: AUDIO },
  { id: 'd-nature', title: 'Subi ou agit', format: 'sort' as const, coach: "Deux piles : ce qui subit (-é), ce qui agit. EN: what undergoes, what acts.", buckets: ['ce qui subit', 'ce qui agit'], items: [E(1140), E(1047), E(1142), E(1141), E(1145), E(1042)], audio: AUDIO },
  { id: 'd-societe', title: 'Prendre, signer, payer', format: 'mcq' as const, coach: "On prend une décision, on signe une pétition, on paie une taxe. EN: each noun has its verb.", q: 'Le conseil a ... une décision.', opts: ['pris', 'fait'], correct: 0, why: "Prendre une décision. EN: prendre.", items: [E(1159), E(1161), E(1162), E(1163), E(1168), E(1169)], audio: AUDIO },
  { id: 'd-avis', title: 'La forme exacte', format: 'mcq' as const, coach: "À mon avis ; on devrait, sans de ; je propose de ; il faut que et le subjonctif. EN: one exact shape per formula.", q: "... mon avis, c'est une bonne idée.", opts: ['À', 'Dans'], correct: 0, why: "À mon avis. EN: in my opinion.", items: [E(1176), E(1177), E(1179), E(1180), E(1181), E(1182)], audio: AUDIO },
  { id: 'd-message', title: 'Un message qui se suit', format: 'flashcard' as const, coach: "Lis le message de Camille, une phrase à la fois : la mesure, l'avis, les raisons, l'autre côté, la proposition. EN: one move per sentence.", items: [E(1190), E(1191), E(1192), E(1194), E(1195), E(1196)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'voisin-anglais', description: 'Pairs a French noun with the verb its English equivalent takes (sauver l’énergie, trier le tri), so every word is French and the block is not.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-voisin', retest: 'd-voisin' },
  { id: 'meteo-verbe', description: 'Gives a weather event the wrong verb (il fait une canicule, il y a sec), cuts a fixed block (les gaz de serre) or takes one hot day as proof about the climate.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a11-mission'], drill: 'd-climat', retest: 'd-climat' },
  { id: 'famille-confondue', description: 'Picks the wrong member of a word family (polluante for a polluted lake, un polluant for a person) or builds an English-looking verb (pollutent).', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check', 'a11-mission'], drill: 'd-famille', retest: 'd-famille' },
  { id: 'tri-calque', description: 'Builds the sorting vocabulary from English (faire la sorte, les paquetages, la caution for a bottle), says recyclé for recyclable, or puts a regional bin in the wrong country.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-tri', retest: 'd-tri' },
  { id: 'conso-calque', description: 'Uses the English look-alikes for consumption (gaspiller des déchets, en gros for loose, fixer for repair, réusable) or confuses the two kinds of waste.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a11-mission'], drill: 'd-conso', retest: 'd-conso' },
  { id: 'energie-calque', description: 'Carries English energy words into French (une plante for a power plant, une panne de pouvoir, des panels, des moulins à vent, sauver l’énergie).', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-energie', retest: 'd-energie' },
  { id: 'transport-calque', description: 'Drives a bike (conduire un vélo), puts public transport in the singular, or calques charging station and carpool.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-transport', retest: 'd-transport' },
  { id: 'subi-agit', description: 'Swaps what undergoes and what acts (une espèce menaçante, une zone protectrice), uses the participle for the noun (une menacée), or calques protect and desertion.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-nature', retest: 'd-nature' },
  { id: 'societe-verbe', description: 'Gives the society nouns their English verbs (faire une décision, payer pour la taxe) or says une démonstration for a protest.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-societe', retest: 'd-societe' },
  { id: 'avis-calque', description: 'Builds the opinion formulas from English (dans mon opinion, pour de, les deux vues), adds or drops de (on devrait de, je propose fermer), or puts an infinitive after il faut que.', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a11-mission'], drill: 'd-avis', retest: 'd-avis' },
  { id: 'message-sans-plan', description: 'Writes an opinion with no other side and no proposal, strings ideas together without connectors, or lectures the reader instead of addressing the town.', detectOn: ['a11-lecture', 'a11-plan', 'a11-mission'], drill: 'd-message', retest: 'd-message' },
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-33-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-33-avis': "The building's welcome notice (act 1), ONE VOICE, one take, a Montréal woman in her fifties reading it as a friendly building manager would: clear, practical, unhurried. Québec French. « le bac bleu », « le bac brun » and « l'autobus » said as ordinary everyday words. The passive « Les bacs sont ramassés » is plain, not stressed.",
  'rec-b1-33-bulletin-ecoute': "REQUIRED FOR THE EAR MISSION (act 2): ten lines, ONE TAKE, ONE VOICE, in authored order, as a radio news reader summing up the summer: even, serious, never dramatic. Québec French for the Montréal and Québec lines is welcome in the same voice. The years are read in full (deux mille vingt-trois). A short pause between lines, no music, no sound effects.",
  'rec-b1-33-piege-climat': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « il y a eu » is three clear syllables [il.ja.y]; « gaz à effet de serre » is one group.",
  'rec-b1-33-fumee': "The news brief (act 3), ONE VOICE, one take, a Montréal radio journalist: calm, factual, a little grave on « le ciel était orange ». No alarm in the voice. The last sentence gives three readers' views at the same even pace, so none sounds like the right one.",
  'rec-b1-33-coloc': "The Liège flatshare (act 4), THREE VOICES: a narrator, Arnaud (a Liège man in his twenties, patient and amused; Belgian French welcome, « PMC » said as three Belgian letters) and the learner (a Montréaler, Québec French). Kitchen feel, relaxed. Nobody lectures: Arnaud explains as he would to any new flatmate.",
  'rec-b1-33-piege-tri': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « le sac PMC » is [pe.ɛm.se]; « la consigne » ends in a clear [ɲ].",
  'rec-b1-33-forum': "Nadia's forum post (act 5), ONE VOICE, one take, a Genève woman in her forties reading her own post aloud: friendly, curious, a little self-mocking on « sans réfléchir ». Swiss French welcome. « Je ne veux faire la morale à personne » is sincere, not defensive. The final questions rise naturally.",
  'rec-b1-33-marche-ecoute': "REQUIRED FOR THE EAR MISSION (act 5): ten lines, ONE TAKE, in authored order, as a radio vox pop at the Jean-Talon market in Montréal. FOUR VOICES alternating (two women, two men, twenties to seventies), Québec French, a light market ambience under them but never over the words. Each speaker sounds like an ordinary shopper, not an activist.",
  'rec-b1-33-journal': "The school newsletter (act 6), ONE VOICE, one take, a Québec teenager of about fifteen reading the class article on the school radio: bright, a little formal, proud of the trip. Québec French. The paragraph on the flooded Indigenous lands is read at the same even pace, with no change of tone to signal a verdict. « on ferme la lumière » is ordinary Québec speech.",
  'rec-b1-33-piege-energie': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « une éolienne » is [y.ne.ɔ.ljɛn], « Thiès » is [tjɛs].",
  'rec-b1-33-lyon': "The Lyon lunch break (act 7), THREE VOICES: a narrator, Samia (a Lyon woman in her thirties, relaxed, never smug) and the learner (tired from the traffic, reasonable, not defensive). France French. The two views get the same warmth: neither voice wins the exchange.",
  'rec-b1-33-belugas': "The beluga news brief (act 8), ONE VOICE, one take, a Québec science journalist: warm, precise, unsentimental. « Ils sont blancs, ils chantent » is light, the numbers are plain. The fishers' view and the scientists' view are read with equal weight.",
  'rec-b1-33-piege-nature': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. The final -ée of « menacée », « protégée » is not lengthened: learners must hear that the participle sounds the same as the masculine.",
  'rec-b1-33-courrier': "The readers' letters (act 9), FOUR VOICES: a presenter reads the heading and the introduction; then Martine (a Lausanne woman in her late sixties, practical), Yannick (a Renens man in his thirties, reasonable, slightly annoyed) and Aïcha (a Morges student of nineteen, lively, sure of herself). Swiss French welcome, « gymnase » said as a Swiss would. Each view gets the same warmth: none is the right answer.",
  'rec-b1-33-radio-ecoute': "REQUIRED FOR THE EAR MISSION (act 10): eleven lines, ONE TAKE, in authored order, as a local radio phone-in. FIVE VOICES taking turns (a young parent, a shopkeeper, a retired neighbour, a teacher, a cyclist), mixed francophone accents. Every caller is calm and reasonable; the shopkeeper against the measure is as sympathetic as the parent for it. A short pause between callers.",
  'rec-b1-33-piege-avis': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « à mon avis » links as [a.mɔ̃.na.vi].",
  'rec-b1-33-message': "Camille's message to the councillor (act 11), ONE VOICE, one take, a Montréal parent in her forties reading her letter before sending it: clear, polite, firm without being aggressive. Québec French. The connectors (D'abord, Ensuite, Enfin, Par contre, C'est pourquoi) each get a short breath after them, so the learner hears the plan.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 33',
  intro: "Knowing the word « l'énergie » is not enough to talk about it: you also need its neighbour, économiser, or you end up saying you rescue energy. This lesson teaches the vocabulary of the environment and society the way French speakers actually use it, as word families (polluer, la pollution, polluant, un pollueur) and collocations (faire le tri, prendre une décision, signer une pétition). It covers climate, pollution, waste and recycling, consumption, energy, transport, nature and who pays and who decides, with real francophone variants from Québec, Belgium, Switzerland, France and Senegal. Every text shows more than one point of view. It ends with a message to your town council giving a nuanced opinion on a local measure, with a proposal.",
  skill: 'PE',
  grammarAssumed: [METEO_UNIT, COURSES_UNIT, TRANSPORTS_UNIT, CONDITIONNEL_UNIT, POLITESSE_UNIT, SUBJ_FORM_UNIT, SUBJ_DECL_UNIT, SUBJ_INF_UNIT, PASSIF_UNIT, COORDINATION_UNIT, SUBORDINATION_UNIT, CONCESSION_UNIT],
  grammarIntroduced: [
    'Topic vocabulary taught as word families (verb, noun, adjective, agent noun) and collocations rather than isolated nouns, for climate, pollution, waste, consumption, energy, transport, nature and society',
    'Word-class suffixes as a decoding tool: -tion, -ment and -age nouns, -eur agent nouns, -ant and -able adjectives',
    'The -é participle (what undergoes: menacé, pollué, protégé) against the -ant adjective (what acts: menaçant, polluant)',
    'Weather and climate events with their verbs: il fait (chaud, sec) against il y a (une canicule, une sécheresse, des inondations); le temps against le climat',
    'Environment false friends and calques: économiser (not sauver) l’énergie, une centrale, une panne de courant, un panneau solaire, réparer, en vrac, une manifestation, prendre une décision',
    'Regional variants presented as correct in place: le bac bleu, le sac PMC, la poubelle jaune, le sac taxé, fermer la lumière, les transports publics, le conseil de ville',
    'Opinion and proposal formulas as collocations: être pour / contre, à mon avis, selon moi, il faudrait, on devrait, je propose de, d’un côté / de l’autre, with il faut que + subjunctive',
    'A 110 to 150 word message to a town council or a forum giving a nuanced opinion on one local measure, with a proposal and connectors',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Connaître le mot « l'énergie » ne suffit pas : il faut aussi son voisin, économiser, sinon tu dis que tu sauves l'énergie. Cette leçon t'apprend les mots de l'environnement et de la société par familles et par voisins : le climat, la pollution, le tri, la consommation, l'énergie, la ville, la nature, et qui paie, qui décide. À la fin, tu écris à ta ville pour donner ton avis sur une mesure et faire une proposition.",
    minutes: 140,
    difficulty: 3,
    glyph: 'tri',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: ENVIRONNEMENT_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, AVIS_TEXT, FUMEE_TEXT, FORUM_TEXT, JOURNAL_TEXT, BELUGAS_TEXT, COURRIER_TEXT, MESSAGE_TEXT, dicteeFor };
