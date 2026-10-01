// c1.06.l1 « Nuancer à l’oral » · the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 and §1.4 (THE WORKSHOP SHAPE)
// on top of B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md.
// Structural model: b2.26 « Réunions et négociations »
// (`../b2/reunions-negociation-*`), including its spoken task shape. No new
// section types.
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around ONE ANCHOR TEXT (a reading of
//   about 270 to 300 words, or a hideLines listening of seven to ten
//   lines, always speech: a voice message, a meeting, a call, a rehearsal)
//   and ONE MOVE, in the same beats:
//
//     1. MEET THE TEXT     a `reading` (questions behind questionsInModal)
//                          or a `listening` (hideLines, one take).
//     2. NOTICE THE MOVE   a `cardDeck`, `tapTable`, `examples` or `focus`,
//                          linked to a sheet.
//     3. PRACTISE          one or two checks on NEW material (groupDrill,
//                          trapDrill, commonErrors, dictation).
//     4. USE IT            « À toi », a pick-the-line groupDrill or a
//                          scenario said out loud, always with the act’s
//                          move as the tool for the final voice message.
//
//   then the gated act check. Act 1 is the problem and the recap; act 12 is
//   the production act (the task and the closing sections).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  La remarque de trop          6  the blunt remark and the wrapped one
//                                       (scene, Karim’s voice message);
//                                       recap of b1.09, b1.08, b1.25,
//                                       b1.26, b2.20, b2.22, b2.24, b2.26
//                                       by trail position, in ONE mission
//    2  L’incise qui adoucit         6  a meeting (listening) · me
//                                       semble-t-il, si je ne m’abuse, si
//                                       je ne me trompe, à ma connaissance
//    3  Parier sans jurer            7  Karim’s forecast (reading) · fort à
//                                       parier, permis de penser, rien
//                                       n’indique, main au feu (tapTable)
//    4  Le devoir qui suppose        6  a delivery call (listening) ·
//                                       epistemic devoir, the misunderstanding
//    5  Le mot à peu près juste      6  Sophie’s rehearsal (reading) · en
//                                       quelque sorte, à proprement parler,
//                                       pour ainsi dire, un tant soit peu
//    6  Demander de loin             6  Hélène’s voice message (reading) ·
//                                       je vous saurais gré, être amené à
//                                       (tapTable)
//    7  Contredire avec égards       7  a meeting (listening) · avec tout le
//                                       respect, sauf votre respect, loin de
//                                       moi l’idée, sans vouloir (scenario)
//    8  La critique enveloppée       7  Hélène’s feedback (reading) · the
//                                       four steps, the firm point
//                                       (scenario)
//    9  Dire moins pour dire plus    6  after the opening night (listening) ·
//                                       litote, understatement, Québec
//   10  La bonne dose                7  two voice messages (reading) · hedge
//                                       stacking, what is never hedged
//                                       (tapTable)
//   11  Entendre la nuance           6  a call from Lyon (listening) · the
//                                       polite non-answer (scenario)
//   12  À toi de nuancer            11  model message, plan, scenario, TASK
//                                       (spoken), quiz, review
//
//   TOTAL 81 missions, 12 acts (6,6,7,6,6,6,7,7,6,7,6,11). Corpus: 154
//   authored rows (.1000-.1156, three ids unused) plus 38 reused rows (18
//   from the seed, 20 Postgres-only in PG_ROWS). Texts: 6 readings of about
//   270 to 300 words plus the act 12 model, 5 hideLines listenings, one
//   scene, four scenarios. Quiz: 11 rounds of 8 (acts 2 to 11, one round on the
//   whole message). Eleven error triggers, eleven drills, five reference
//   sheets, twelve terms. Three tapTables (acts 3, 6, 10).
//   Chapter artwork: `nuancer-oral-image-prompts.md`, 12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Nuancer, c’est doser : assez pour ménager l’autre, jamais au point
//   d’éteindre ce que tu dis. »
//   EN: Hedging is a matter of dosage: enough to spare the other person,
//   never so much that you switch off what you are saying.
//
//   ONE METAPHOR, THE DIMMER (every chapter image). Full light dazzles (the
//   blunt remark); too low and the room goes dark (the over-hedged one).
//   Some points stay at full light: a fact, a date, a safety limit. Rejected
//   candidates: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    politeness and distance in SPEECH at C1: the softening aside;
//           the spoken certainty scale with its moods; epistemic devoir as
//           a hedge and as tact; flagged approximation; formal requests and
//           softened constraints; contradicting and criticising with
//           regard; litote and understatement in speech, with Québec tags;
//           hedge dosage; decoding the polite non-answer; a spoken message
//           graded on dosage and register.
//   QUOTES  b1.09’s, b1.26’s, b2.20’s and b2.26’s reframes, imported from
//           their corpora, never retyped; their rows reused by id.
//   LEAVES  the request ladder (b1.09), the conditional (b1.08), register
//           (b1.25), tu / vous (b1.26), impersonal families (b2.20), hedging
//           in writing (b2.22), the writer’s distance (b2.24), meeting
//           disagreement (b2.26); euphemism as connotation to c1.17; litote
//           as a literary figure to c1.19; meetings and tact in writing to
//           c1.23; formal oral production before a jury to c1.09
//           (research plan, ownership).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use what the situation needs (the
//   director and the Lyon partner get vous, colleagues say tu). Natural,
//   unsimplified C1 French; English authored on every learner string (`en`,
//   or a final « EN: »), never on an answer. Every `say` is French. Lessons
//   cited by trail position in words. Typographic ’ in every authored
//   string. No bubble carries a « ? » or a « ! ». Mission answer slots are
//   spread by permuting options WITH their correct index
//   (spreadMissionSlots), the quiz by spreadQuizSlots; no `why` names a
//   position. Invented people, institute, museum, printer and street only.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. The task is SPOKEN (responseSpec audio, 120 to 240 s), as the model
//      b2.26 and the brief (« per the model's task shape »). The brief also
//      says « short »: 120 to 240 s instead of b2.26’s 180 to 300. Keep, or
//      align on 180 to 300? There is no live speech grading; the learner
//      self-checks against the model and the grid (six criteria, 20
//      points, decision 14).
//   2. Twenty reused rows are Postgres-only (PG_ROWS: sixteen legacy c1
//      Speak rows, four b1/b2 phrase rows that are twins). They are named,
//      never released; the merge must carry them, and the gate preview needs
//      them. Legacy straight apostrophes: decision 13’s text edit applies.
//   3. Québec tags: « c’est pas pire » taught as a Québec compliment (legacy
//      row .105 agrees), « pas terrible » as mediocre in both France and
//      Québec. No claim that one region is more polite. Keep that line?
//   4. « rien n’indique que » is taught as « le plus souvent le subjonctif »
//      with the indicative accepted; every typed answer accepts both. Keep?
//   5. fr.c1.francais-professionnel-avance.160 (published, legacy) reads
//      « Il y a fort à parier que la réponse officielle se fasse encore
//      attendre »: a subjunctive where the indicative is expected (« se
//      fera »). Not reused here; a text edit like decision 13?
//   6. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.
//   7. The roundup names the next lesson, « la leçon 7 du C1 » (c1.07
//      « Reformuler et conclure », a wave 3 mate), by what it owns (markers
//      that reframe and conclude). If c1.07 slips out of the wave, the
//      sentence goes.
//   8. Several commonErrors cards show CORRECT French at the wrong dose (a
//      blunt verdict, an over-wrapped criticism, a hedged fact), as b2.26
//      does; each why says « correct, mais ». Quiz errorSpots never do this:
//      every errorSpot prompt carries a real form error. Keep the cards?
//
//   PRE-REVIEW 2026-10-01 (reviewer's calls): 3 kept, wording aligned on
//   Usito (« pas pire », fam., Q: « plus ou moins bien », syn. pas mal).
//   4 kept (OQLF: subjunctive after a negated declarative verb). 8 kept:
//   every such card says « correct, mais » in its why; trapDrill cards are
//   now form errors only, except act 10's, whose rule says they are correct.
//   Hélène and Karim say vous to each other in acts 7 and 8.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, PG_ROWS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  KARIM_TEXT, PREVISION_TEXT, AFFICHE_TEXT, APPEL_TEXT, RETOUR_TEXT, DOSE_TEXT, MODELE_TEXT,
  TASK_DOC, TASK_FACTS, TASK_MODEL,
  B109_REFRAME, B126_REFRAME, B220_REFRAME, B226_REFRAME,
  POLITESSE_UNIT, COND_UNIT, REGISTRES_UNIT, TUVOUS_UNIT, IMPERSONNEL_UNIT, ACADEMIQUE_UNIT, CRITIQUE_UNIT, REUNIONS_UNIT,
  DEVOIR_REF, COND_REF, POLITESSE_REF, REGISTRES_REF, TUVOUS_REF, CAUSE_REF, RESTRICTION_REF,
  IMPERSONNEL_REF, NEGATION_REF, ACADEMIQUE_REF, CRITIQUE_REF, REUNIONS_REF, BILAN_C1_REF, LIGNES_C1_REF,
  POLITESSE_REF_EN, TUVOUS_REF_EN, REUNIONS_REF_EN, IMPERSONNEL_REF_EN,
} from './nuancer-oral-corpus.ts';
import { NUANCER_ORAL_TERMS } from './nuancer-oral-terms.ts';

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

/** An item's fr/en, from this corpus, the seed, or the Postgres-only rows.
 *  Throws on a typo, so no section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id) ?? PG_ROWS[id];
  if (!r) throw new Error(`c1.06: no item ${id}`);
  return r;
}

/** The imports are typed by hand in the corpus; hold them to their source. */
for (const id of IMPORT_IDS) {
  if (PG_ROWS[id]) { if (!NOT_DECK_ABLE.includes(id) || !NOT_SPEAKABLE.includes(id)) throw new Error(`c1.06: Postgres-only ${id} must be named only`); continue; }
  const d = SEED.get(id)?.drills ?? [];
  if (!SEED.has(id)) throw new Error(`c1.06: import ${id} is in neither the seed nor PG_ROWS`);
  if (!NOT_SPEAKABLE.includes(id) && !d.includes('voiceflash')) throw new Error(`c1.06: ${id} has no voiceflash but is not in NOT_SPEAKABLE`);
  if (!NOT_DECK_ABLE.includes(id) && !d.includes('flashcard')) throw new Error(`c1.06: ${id} has no flashcard but is not in NOT_DECK_ABLE`);
}

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.06: no ipa on ${id}`);
  return r.ipa;
}
/** The authored row's respelling, BRACKETED for a section. Authored rows only. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.06: no authored respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A quotation with no corpus row (a wrong or badly dosed line shown as such). */
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
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
/** A card from an AUTHORED row (its respelling is printed). */
const card = (id: string, head: string, label: string, body: string): Card =>
  ({ head, label, fr: fr(id), sub: rsOf(id), body });

/** A trap card: the wrong line (never spoken) and the right authored row. */
const trap = (promptLabel: string, promptSound: string, id: string, tip: string) =>
  ({ promptLabel, promptSound, fr: fr(id), ipa: ipaOf(id), tip });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** THE « USE IT » BEAT: the act's one tool for the final voice message. */
function aToi(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'À toi : pour ton message', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/** The stepped trapDrill's four steps, the same in every act. */
const TRAP_STEPS = [
  { label: 'La règle', kind: 'rule' as const, title: 'Ce que le français fait' },
  { label: 'Six cartes', kind: 'cards' as const, title: 'Ce que la phrase fausse raconte' },
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

/** THE ANSWER-SLOT RULE (playbook 6.11, b1-answer-slots.test.ts): missions
 *  render the authored order, so answers are spread BY PERMUTING each item's
 *  options WITH its correct index. No `why` in this lesson names a position. */
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
 *  ACT 1 · LA REMARQUE DE TROP
 *
 *  The problem: at a rehearsal, the learner's remark on Karim's
 *  presentation is right on substance and blunt in form; the opposite
 *  excess (Sophie's) says nothing. Then the recap, in one mission.
 * ══════════════════════════════════════════════════════════════════════════ */

const BLUNT = 'C’est trop long, et les chiffres sont faux.';
const BLUNT_EN = 'It is too long, and the figures are wrong.';
const BLUNT_RS = '[seh troh LOHⁿ | ay lay SHEEFR sohⁿ FOH]';
const BLUNT_IPA = '/sɛ tʁo lɔ̃ e le ʃifʁ sɔ̃ fo/';

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'La répétition de Karim', frSub: 'Une remarque devant toute l’équipe',
  setting: { place: 'La salle de réunion de l’Institut Verlune', city: 'Montréal', time: 'mardi, 10 h', ambience: 'un écran, des maquettes de rivières sur la table, l’équipe en demi-cercle' },
  beats: [
    { kind: 'narration', text: 'Mardi, 10 h, à l’Institut Verlune. Karim répète la présentation de l’exposition « Rivières sous la ville » qu’il fera vendredi devant les partenaires. Hélène Marchand, la directrice, écoute. Karim se tourne vers toi.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Karim', fr: 'Alors, franchement, tu en penses quoi.', en: 'So, frankly, what do you think of it.', respell: '[a-LOR | frahⁿsh-MAHⁿ | tü ahⁿ pahⁿs KWA]', stage: 'Il sourit, un peu tendu.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: BLUNT, en: BLUNT_EN, respell: BLUNT_RS, stage: 'Sur le fond, tu as raison : la troisième partie traîne et un chiffre date de l’ancien rapport.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Karim', fr: 'Ah. D’accord. Je vais revoir tout ça, alors.', en: 'Oh. Right. I will go over all that again, then.', respell: '[A | da-KOR | zhuh veh ruh-VWAR too SA | a-LOR]', stage: 'Il ne pose plus de questions. Hélène note quelque chose.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Tu recommences. Quelle phrase lui donne les deux problèmes sans le fermer ?', size: 'lg',
      options: [
        { fr: BLUNT, respell: BLUNT_RS, en: BLUNT_EN, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1000)), respell: rsOf(E(1000)), en: src(E(1000)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Karim hoche la tête : « La troisième, oui, je la sentais longue. » Il te demande lequel des chiffres est ancien. La répétition continue.',
        breaks: 'Karim passe le reste de la réunion à se justifier. Le soir, il t’envoie un message vocal.',
      },
    },
    {
      kind: 'break', heading: 'Juste sur le fond, trop fort dans la forme',
      body: 'Ta remarque était exacte, mais elle tombait comme un verdict devant tout le monde : Karim s’est défendu au lieu d’écouter. Garde les deux problèmes, et règle la force. EN: Right on substance, too strong in form; keep the content, turn the dial down.',
      wrong: { fr: BLUNT, ipa: BLUNT_IPA, respell: BLUNT_RS, en: BLUNT_EN },
      right: { fr: fr(E(1000)), ipa: ipaOf(E(1000)), respell: rsOf(E(1000)), en: src(E(1000)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Cette leçon t’apprend à régler la nuance à l’oral : l’incise, le pari, la supposition, le mot approximatif, la demande de loin, le désaccord et la critique avec égards, la litote. À la fin, tu laisses à ta directrice un message vocal bien dosé.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['dosage'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Nuancer une affirmation à l’oral', s: 'Actes 2 à 5 : l’incise, le pari, devoir qui suppose, le mot approximatif' },
    { t: 'Demander, contredire et critiquer avec égards', s: 'Actes 6 à 8 : la distance, les formules d’égards, la critique enveloppée' },
    { t: 'Doser, et entendre la nuance des autres', s: 'Actes 9 à 11 : la litote, la bonne dose, le non-dit' },
    { t: 'Laisser un message vocal bien dosé', s: 'Acte 12 : un message de deux à quatre minutes' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'Le message de Karim', frSub: 'Les deux excès, le même jour',
  text: KARIM_TEXT,
  glossary: [
    { word: 'traîne', en: 'drags on', note: 'Du verbe traîner : la partie est trop lente.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « recevoir une douche froide ». Que ressent Karim ?', a: 'Un choc désagréable et soudain, qui coupe son élan.' },
    { q: 'Karim conteste-t-il le fond de ta remarque ?', a: 'Non : il reconnaît que la troisième partie traîne et que le chiffre était ancien. C’est la manière qui l’a blessé.' },
    { q: 'Qu’est-ce qui ne va pas dans la remarque de Sophie ?', a: 'Elle est tellement enrobée qu’au bout de deux minutes, Karim ne sait toujours pas ce qu’elle lui reproche.' },
    { q: 'Que contient la phrase « idéale » que Karim imagine ?', a: 'Une reconnaissance (tient la route), une critique présentée comme une impression (il me semble), une suggestion (gagnerait à) et un fait nuancé comme un souvenir (si je ne m’abuse).' },
    { q: 'Que veut dire « mets un peu de gants, mais juste ce qu’il faut » ?', a: 'Sois plus délicat, sans tomber dans l’excès de Sophie : c’est une question de dose.' },
  ],
  audio: REC('rec-c1-06-karim'), say: REFRAME, terms: ['dosage'],
};

/** The recap: ONE mission, one group per lesson family it builds on, rows
 *  reused by id, each lesson named by trail position. */
const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: 'Huit leçons, un rappel',
  groups: [
    grp(`${Cap(POLITESSE_REF)} et ${COND_REF}`, [
      it('fr.b1.conseils-et-suggestions.1003', 'un service ordinaire, au conditionnel'),
      it('fr.b1.conseils-et-suggestions.1060', 'le haut de l’échelle'),
    ], chk('Au B1, qu’est-ce qui décidait du barreau de l’échelle ?', ['le service demandé, et à qui', 'ta gentillesse'], 0,
      `« ${B109_REFRAME} » Cette leçon ajoute l’oral soutenu et la critique. EN: the cost of the favour and the distance.`)),
    grp(`${Cap(REGISTRES_REF)} et ${TUVOUS_REF}`, [
      it('fr.b1.rp-etiquette.1003', 'tu ou vous'),
    ], chk('Tu ou vous change-t-il la personne à qui tu parles ?', ['Non, il règle la distance.', 'Oui, il change la personne.'], 0,
      `« ${B126_REFRAME} » Ici, tu règles aussi la force de chaque phrase. EN: tu or vous sets the distance.`)),
    grp(`${Cap(IMPERSONNEL_REF)} et ${ACADEMIQUE_REF}`, [
      it('fr.b2.opinions-et-avis.2069', 'une possibilité, au subjonctif'),
      it('fr.b2.universite.1073', 'une prudence écrite'),
      it('fr.b2.universite.1076', 'la règle de l’écrit'),
    ], chk('Au B2, ces nuances servaient surtout...', ['à l’écrit, à mesurer ta preuve', 'à couper la parole'], 0,
      `« ${B220_REFRAME} » À l’oral, la nuance ménage aussi l’autre. EN: in writing, hedges measured evidence.`)),
    grp(`${Cap(CRITIQUE_REF)} et ${REUNIONS_REF}`, [
      it('fr.b2.strategies-de-comprehension.1476', 'la distance de l’auteur'),
      it('fr.b2.affaires.1285', 'un désaccord soutenu'),
      it('fr.b2.affaires.1283', 'reconnaître, puis nuancer'),
    ], chk('En réunion, au B2, un désaccord commençait par...', ['ce qui est juste chez l’autre', 'ton objection la plus forte'], 0,
      `« ${B226_REFRAME} » Au C1, tu doses chaque formule. EN: acknowledge first; now, dose it.`)),
    ctl('Ce qui est nouveau', 'Que t’apporte cette leçon, au-delà de ces huit leçons ?',
      ['les mêmes formules, répétées', 'la nuance à l’oral, et surtout sa dose'], 1,
      'Les incises, le pari, la critique enveloppée, la litote, et le réglage : ni trop, ni trop peu. EN: speech, and dosage.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['dosage'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où la dose change tout',
  cases: [
    uc('Un collègue te demande ton avis devant toute l’équipe', E(1000)),
    uc('Un fournisseur se trompe d’adresse au téléphone', E(1050)),
    uc('Tu écris à un partenaire que tu connais à peine', E(1073)),
    uc('Une date ou une limite de sécurité n’est pas négociable', E(1154)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['dosage', 'fermete'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le fond', 'Ta remarque à Karim était-elle fausse ?', ['Non, elle était juste sur le fond.', 'Oui, entièrement.'], 0,
    'Le fond était juste ; la forme a fermé l’écoute. EN: right on substance, wrong in form.'),
  ctl('L’autre excès', 'La remarque de Sophie...', ['était parfaite', 'était si enrobée qu’elle ne disait rien', 'était trop brutale'], 1,
    'Trop de précautions éteignent le message. EN: too much wrapping switches the message off.'),
  ctl('La mission', 'À la fin de la leçon, tu vas...', ['écrire un rapport', 'laisser un message vocal bien dosé à ta directrice'], 1,
    'Deux à quatre minutes, jugées sur le dosage et le registre. EN: a two to four minute voice message.'),
], ['dosage']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'La remarque de trop',
    opener: {
      line: 'Ta remarque était juste et elle a fermé Karim : ici tu découvres que la nuance est une question de dose. EN: Your remark was right and it shut Karim down: here you find that nuance is a matter of dosage.',
      imageRef: 'lessons/nuancer-oral/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais qu’une remarque peut être juste et mal dosée, dans les deux sens. EN: You know a remark can be right and badly dosed, either way.',
    estScreens: 34, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 · L’INCISE QUI ADOUCIT
 *
 *  TEXT: the calendar meeting (listening). MOVE: the softening aside, placed
 *  next to the doubt: me semble-t-il (an opinion), si je ne m'abuse / si je
 *  ne me trompe (a memory), à ma connaissance (the limit of what you know).
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a2-ecoute', layer: 'core', hideLines: true,
  title: 'La réunion du calendrier', frSub: 'Écoute où se glissent les incises',
  lines: [
    ln(E(1016)), ln(E(1017)), ln(E(1018)), ln(E(1019)), ln(E(1020)),
    ln(E(1021)), ln(E(1022)), ln(E(1023)), ln(E(1024)), ln(E(1025)),
  ],
  questions: [
    { q: 'En annonçant l’ouverture, de quoi la personne doute-t-elle ?', opts: ['de la date', 'du lieu', 'du thème'], correct: 0, why: 'La personne ajoute « si je ne m’abuse » juste après la date : c’est un souvenir à vérifier. EN: the date.' },
    { q: 'L’incise sur le vendredi exprime...', opts: ['un avis', 'un fait certain'], correct: 0, why: '« Me semble-t-il » présente une opinion comme une impression. EN: an opinion.' },
    { q: 'Les écoles ont-elles déjà réservé ?', opts: ['Pas à la connaissance de la personne qui parle.', 'Oui, toutes.'], correct: 0, why: '« À ma connaissance, aucune » : la personne limite son affirmation à ce qu’elle sait. EN: not as far as the speaker knows.' },
    { q: 'Que propose-t-on pour le vendredi ?', opts: ['de le garder pour le vernissage', 'de fermer ce jour-là', 'de l’ouvrir aux écoles'], correct: 0, why: 'Le vernissage le vendredi, les classes dès le lundi suivant. EN: the opening night.' },
    { q: 'Combien d’incises par phrase, en général ?', opts: ['une, là où est le doute', 'deux ou trois'], correct: 0, why: 'Chaque incise porte sur un seul point. EN: one, where the doubt is.' },
  ],
  audio: REC('rec-c1-06-calendrier-ecoute'), say: REFRAME, terms: ['incise'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-incises',
  title: 'Quatre incises', frSub: 'Une parenthèse, un ton plus bas',
  hint: 'Quatre cartes. Demande-toi chaque fois : avis, souvenir, ou limite de ce que tu sais.',
  audio: AUDIO, say: REFRAME, terms: ['incise'],
  cards: [
    card(E(1012), 'Un avis, adouci', 'me semble-t-il',
      `Après le sujet, après le verbe ou en fin de phrase, jamais en tête. ${Cap(CRITIQUE_REF)} t’a montré « semble-t-il » à l’écrit ; ici, c’est ton propre avis. EN: your opinion as an impression.`),
    card(E(1013), 'Un souvenir, soutenu', 'si je ne m’abuse',
      'Pour une date, un nom, un chiffre dont tu crois te souvenir. Le ne seul, sans pas : c’est la tournure figée. EN: a fact you believe you remember.'),
    card(E(1014), 'Le même, en courant', 'si je ne me trompe',
      `Plus courant que si je ne m’abuse. ${Cap(RESTRICTION_REF)} t’a donné sauf erreur de ma part, plus administratif. EN: the everyday version.`),
    card(E(1015), 'La limite de ton savoir', 'à ma connaissance',
      'Tu ne dis pas que c’est vrai partout : tu dis ce que tu sais. Pour un fait, pas pour un goût. EN: to my knowledge.'),
  ],
};

const A2_PLACER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-placer', layer: 'core', size: 'lg',
  title: 'Avis ou souvenir, et où', frSub: 'L’incise suit le doute',
  groups: [
    grp('Un avis, présenté comme une impression', [
      it(E(1019), 'sur le jour'),
      it(E(1029), 'sur l’option'),
      it('fr.c1.francais-professionnel-avance.163', 'une critique adoucie'),
    ], chk('Dans ces trois phrases, l’incise porte sur...', ['une opinion de la personne qui parle', 'une date à vérifier'], 0,
      'Me semble-t-il nuance un jugement : meilleur jour, meilleure option, plus de tact. EN: an opinion.')),
    grp('Un fait dont on croit se souvenir', [
      it(E(1017), 'la date'),
      it(E(1028), 'le vote du budget'),
      it('fr.c1.francais-professionnel-avance.156', 'qui a proposé'),
      it('fr.b2.negation-et-restriction.1212', 'au guichet, plus administratif'),
    ], chk('Le budget, si je ne m’abuse, n’a pas encore été voté. Que vérifies-tu après la réunion ?', ['si le budget a été voté', 'si l’idée est bonne', 'qui a parlé'], 0,
      'Si je ne m’abuse signale un fait incertain : c’est lui qu’on vérifie. EN: the fact under the aside.')),
    ctl('La place', 'Tu doutes de la date, pas de la salle. Quelle phrase est la mieux réglée ?',
      ['L’ouverture est le douze, si je ne m’abuse, dans la grande salle.', 'Si je ne m’abuse, l’ouverture, si je ne m’abuse, est le douze.', 'L’ouverture est le douze dans la grande salle.'], 0,
      'L’incise se pose près de ce qui est incertain, une seule fois. EN: next to the doubt, once.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['incise'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a2-erreurs', layer: 'core', swipe: true, size: 'lg', sheetId: 'sheet-incises',
  title: 'Quatre incises qui accrochent',
  errors: [
    { wrong: 'Le vendredi, me semble-il, n’est pas idéal.', right: 'Le vendredi, me semble-t-il, n’est pas idéal.',
      why: 'À l’oral, on entend bien le t entre semble et il ; l’oublier à l’écrit est fréquent. Il fait le lien entre deux voyelles. EN: the linking t is required.' },
    { wrong: 'Il me semble-t-il que le vendredi n’est pas idéal.', right: 'Il me semble que le vendredi n’est pas idéal.',
      why: 'Deux tournures mélangées : il me semble que ouvre la phrase, me semble-t-il se glisse dedans. Choisis l’une. EN: two structures blended.' },
    { wrong: 'Me semble-t-il, le vendredi n’est pas idéal.', right: 'Le vendredi, me semble-t-il, n’est pas idéal.',
      why: 'Logique en anglais, où it seems to me ouvre la phrase. En français, l’incise inversée ne se met pas en tête. EN: an inverted aside does not open the sentence.' },
    { wrong: 'Si je ne m’abuse, l’ouverture, me semble-t-il, est peut-être le douze.', right: fr(E(1017)),
      why: 'Chaque précaution est correcte, mais trois sur un seul doute sonnent comme de l’embarras. Une suffit. EN: one aside per doubt.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['incise', 'dosage'],
};

const A2_ATOI = aToi('a2-atoi', 'Une incise, au bon endroit', [
  ctl('Une date incertaine', 'Tu crois que la réunion est jeudi, sans en être sûr. Tu dis :',
    ['La réunion est jeudi, si je ne me trompe.', 'Me semble-t-il, la réunion est jeudi.', 'La réunion est jeudi, pour ainsi dire.'], 0,
    'Un souvenir à vérifier : si je ne me trompe, après le fait. EN: a fact you think you remember.'),
  ctl('Un avis', 'Tu trouves le titre trop long, sans vouloir imposer ton goût :',
    ['Le titre est trop long, à ma connaissance.', 'Le titre, me semble-t-il, est un peu long.'], 1,
    'Un goût n’est pas une connaissance : me semble-t-il. EN: an opinion, softened.'),
  ctl('Ce que tu sais', 'Personne ne t’a parlé d’un retard. Tu dis au client :',
    ['À ma connaissance, rien n’a changé.', 'Rien n’a changé, si je ne m’abuse, me semble-t-il.'], 0,
    'Tu limites ton affirmation à ce que tu sais, une fois. EN: to my knowledge, once.'),
], ['incise']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le souvenir', 'Pour une date dont tu crois te souvenir, en soutenu :', ['si je ne m’abuse', 'me semble-t-il'], 0,
    'Si je ne m’abuse : un fait que tu crois connaître. EN: a remembered fact.'),
  ctl('La place', 'Me semble-t-il se place...', ['en tête de phrase', 'dans la phrase ou à la fin'], 1,
    'Une incise inversée ne commence pas la phrase. EN: never first.'),
  ctl('La dose', 'Combien d’incises pour un seul doute ?', ['une', 'trois', 'autant que possible'], 0,
    'Une incise par doute. EN: one.'),
], ['incise']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'L’incise qui adoucit',
    opener: {
      line: 'Une date incertaine, un avis que tu ne veux pas imposer : ici tu glisses la petite parenthèse qui adoucit, juste là où est le doute. EN: An uncertain date, an opinion you do not want to impose: here you slip in the small aside that softens, right where the doubt is.',
      imageRef: 'lessons/nuancer-oral/act02.jpg',
    },
    sections: [],
    milestone: 'Tu nuances un avis ou un souvenir d’une seule incise, bien placée. EN: You soften an opinion or a memory with one well-placed aside.',
    estScreens: 30, restPoints: ['a2-placer'],
  },
  sections: [A2_ECOUTE, A2_CARTES, A2_PLACER, A2_ERREURS, A2_ATOI, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 · PARIER SANS JURER
 *
 *  TEXT: Karim's forecast at the Monday meeting (reading). MOVE: say out
 *  loud how sure you are, from j'en mettrais ma main au feu to rien
 *  n'indique que, with the mood each formula takes.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a3-lecture', layer: 'core', questionsInModal: true,
  title: 'Le point de Karim', frSub: 'Une prévision, dite avec prudence',
  text: PREVISION_TEXT,
  glossary: [
    { word: 'enfouies', en: 'buried', note: 'Cachées sous terre : les rivières passent sous la ville.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « les deux publics se recoupent peut-être ». Que veut dire « se recoupent » ?', a: 'Ils ont une partie en commun : certaines personnes iraient aux deux événements.' },
    { q: 'De quoi Karim est-il le plus sûr ?', a: 'De dépasser le chiffre de l’an dernier : il y a fort à parier, et il donne une preuve, les réservations doublées.' },
    { q: 'Sur quoi refuse-t-il de s’engager ?', a: 'Sur le chiffre exact (je ne mettrais pas ma main au feu) et sur l’effet du festival (je ne parierais pas dans un sens ou dans l’autre).' },
    { q: 'Que dit-il des travaux, et sur quoi s’appuie-t-il ?', a: 'Rien n’indique qu’ils bloquent l’entrée : le chantier est au nord, l’entrée au sud.' },
    { q: 'Pourquoi son intervention inspire-t-elle confiance ?', a: 'Chaque affirmation a son degré de certitude, et chaque degré s’appuie sur un indice : il n’est ni trop sûr, ni flou.' },
  ],
  audio: REC('rec-c1-06-prevision'), say: REFRAME, terms: ['certitude'],
};

const A3_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-tableau', layer: 'core', sheetId: 'sheet-certitude',
  title: 'L’échelle du pari', frSub: 'Du presque sûr à l’aucun indice',
  cols: ['Formule', 'Degré', 'Mode'],
  rows: [
    { cells: ['j’en mettrais ma main au feu', 'presque sûr', 'familier'], say: fr(E(1033)),
      detail: { title: 'La main au feu', body: 'Familier : tu es presque certain. À la négative, tu refuses de jurer. EN: near certainty; negated, you will not swear to it.', say: fr(E(1038)) } },
    { cells: ['il y a fort à parier que', 'très probable', 'indicatif'], say: fr(E(1035)),
      detail: { title: 'Le pari solide', body: 'Une probabilité, pas un doute : l’indicatif, souvent le futur. EN: a strong probability, indicative.', say: fr(E(1035)) } },
    { cells: ['tout porte à croire que', 'très probable', 'indicatif'], say: fr('fr.b2.connecteurs-logiques.1967'),
      detail: { title: 'Les indices convergent', body: `Déjà vu dans ${CAUSE_REF}. À l’oral, c’est un peu plus soutenu que le pari. EN: every sign points one way.`, say: fr(E(1042)) } },
    { cells: ['il est permis de penser que', 'raisonnable', 'indicatif'], say: fr(E(1036)),
      detail: { title: 'L’opinion raisonnable', body: 'Soutenu : tu présentes ton idée comme défendable, sans preuve définitive. EN: a reasonable opinion.', say: fr(E(1036)) } },
    { cells: ['je ne parierais pas là-dessus', 'douteux', '(seul)'], say: fr(E(1034)),
      detail: { title: 'Le doute poli', body: 'Tu doutes sans contredire : le conditionnel garde la porte ouverte. EN: polite doubt.', say: fr(E(1040)) } },
    { cells: ['rien n’indique que', 'aucun indice', 'subjonctif, le plus souvent'], say: fr(E(1039)),
      detail: { title: 'Aucun indice', body: 'Le subjonctif est le plus courant ; l’indicatif se rencontre quand le fait est présenté comme réel. EN: usually subjunctive.', say: fr(E(1037)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['certitude'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-construire', layer: 'core', size: 'lg',
  title: 'Le pari et son mode', frSub: 'Indicatif pour parier, subjonctif pour l’absence d’indice',
  groups: [
    grp('Parier : l’indicatif', [
      it(E(1035), 'fort à parier, au futur'),
      it(E(1036), 'permis de penser, au futur'),
      it(E(1042), 'tout porte à croire'),
      it('fr.b2.connecteurs-logiques.1967', 'au B2, la même logique'),
    ], chk('Il y a fort à parier qu’ils ... là avant midi.', ['seront', 'soient'], 0,
      'Le pari est une probabilité : indicatif, ici le futur. EN: indicative after a bet.')),
    grp('Aucun indice', [
      it(E(1039), 'au subjonctif'),
      it(E(1037), 'pour l’instant'),
    ], chk('Après rien n’indique que, quel mode est le plus courant ?', ['le subjonctif', 'le conditionnel'], 0,
      'Une négation qui écarte un fait appelle le plus souvent le subjonctif. EN: usually the subjunctive.')),
    ctl('Classer', 'Laquelle est la plus sûre ?',
      ['Il est permis de penser que le public viendra.', 'Il y a fort à parier que le public viendra.', 'Je ne parierais pas que le public vienne.'], 1,
      'Fort à parier : très probable. Permis de penser : raisonnable. Ne parierais pas : douteux. EN: strongest bet.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['certitude'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a3-piege', layer: 'core', swipe: true, sheetId: 'sheet-certitude',
  title: 'Six paris mal construits',
  rule: {
    title: 'Le pari garde l’indicatif',
    body: 'Fort à parier, permis de penser : une probabilité ou une opinion, donc l’indicatif. Ces tournures sont figées, comme ma main au feu. Et rien n’indique se suffit : jamais de pas. EN: probability takes the indicative; the formulas are fixed.',
  },
  cards: [
    trap('le subjonctif', 'Il y a fort à parier que nous dépassions ce chiffre.', E(1035), 'Un pari n’est pas un doute : nous dépasserons. EN: indicative, not subjunctive.'),
    trap('fort de', 'Il y a fort de parier que nous dépasserons ce chiffre.', E(1035), 'La tournure est fort à parier. EN: fort à parier.'),
    trap('permis à', 'Il est permis à penser que le thème attirera des familles.', E(1036), 'Il est permis de + infinitif. EN: permis de.'),
    trap('dans le feu', 'Je ne mettrais pas ma main dans le feu sur le chiffre exact.', E(1038), 'L’expression est figée : mettre sa main au feu. EN: au feu.'),
    trap('rien... pas', 'Pour l’instant, rien n’indique pas que les travaux bloquent l’entrée du public.', E(1037), 'Rien porte déjà la négation : rien n’indique, sans pas. EN: no pas with rien.'),
    trap('permis que', 'Il est permis que le thème attirera des familles.', E(1036), 'Il est permis que parle d’une autorisation. Pour une opinion raisonnable : il est permis de penser que. EN: de penser que.'),
  ],
  drill: [
    { promptSay: 'Il y a fort à parier qu’il ... demain.', opts: ['pleuvra', 'pleuve'], correct: 0 },
    { promptSay: 'Il est ... de penser que le projet plaira.', opts: ['permis', 'possible à'], correct: 0 },
    { promptSay: 'Il est permis de penser que le thème ... des familles.', opts: ['attirera', 'attire-t-il'], correct: 0 },
    { promptSay: 'Je n’en mettrais pas ma main ... .', opts: ['au feu', 'dans le feu'], correct: 0 },
    { promptSay: 'Il est permis de penser que nous ... à temps.', opts: ['finirons', 'finissions'], correct: 0 },
    { promptSay: 'Il y a fort ... parier que les écoles réserveront.', opts: ['à', 'de'], correct: 0 },
    { promptSay: 'Rien ... que les travaux bloquent l’entrée.', opts: ['n’indique', 'n’indique pas'], correct: 0 },
    { promptSay: 'Le festival ? Je ne ... pas là-dessus.', opts: ['parierais', 'parierait'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-c1-06-piege-pari'), say: REFRAME, terms: ['certitude'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a3-dictee', layer: 'core',
  title: 'Écris le pari que tu entends',
  itemIds: dicteeFor(3),
  audio: AUDIO, say: REFRAME, terms: ['certitude'],
};

const A3_ATOI = aToi('a3-atoi', 'Le bon degré de certitude', [
  ctl('Une preuve solide', 'Les réservations ont doublé. Tu annonces la suite à ta directrice :',
    ['Il y a fort à parier que nous dépasserons l’an dernier.', 'Rien n’indique que nous dépassions l’an dernier.', 'Je ne parierais pas là-dessus.'], 0,
    'Un indice fort, un pari fort, à l’indicatif. EN: strong evidence, strong bet.'),
  ctl('Aucune donnée', 'On te demande si le festival va vous prendre du public. Tu n’as aucun chiffre :',
    ['J’en mettrais ma main au feu.', 'Là, je ne parierais pas dans un sens ou dans l’autre.'], 1,
    'Sans donnée, tu refuses de parier, poliment. EN: no data, no bet.'),
  ctl('Une crainte', 'Un collègue craint que les travaux bloquent l’entrée. Rien ne le montre :',
    ['Pour l’instant, rien n’indique que les travaux bloquent l’entrée.', 'Les travaux ne bloquent rien du tout, c’est sûr.'], 0,
    'Tu dis ce que tu sais, pour l’instant, sans promettre. EN: what the evidence shows, for now.'),
], ['certitude']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le mode', 'Il y a fort à parier que + ...', ['indicatif', 'subjonctif'], 0,
    'Une probabilité : l’indicatif. EN: indicative.'),
  ctl('L’absence', 'Pour dire qu’aucun indice ne montre un fait :', ['rien n’indique que', 'il est permis de penser que', 'il y a fort à parier que'], 0,
    'Rien n’indique que : aucun indice. EN: no evidence.'),
  ctl('Le registre', 'J’en mettrais ma main au feu est...', ['familier', 'administratif'], 0,
    'Familier : entre collègues, pas dans un rapport. EN: informal.'),
], ['certitude']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Parier sans jurer',
    opener: {
      line: 'Une prévision n’est ni une promesse ni un aveu d’ignorance : ici tu dis à voix haute à quel point tu es sûr. EN: A forecast is neither a promise nor an admission of ignorance: here you say out loud how sure you are.',
      imageRef: 'lessons/nuancer-oral/act03.jpg',
    },
    sections: [],
    milestone: 'Tu gradues une prévision du pari solide à l’absence d’indice, avec le bon mode. EN: You grade a forecast from a safe bet to no evidence, in the right mood.',
    estScreens: 40, restPoints: ['a3-tableau', 'a3-piege'],
  },
  sections: [A3_LECTURE, A3_TABLEAU, A3_CONSTRUIRE, A3_PIEGE, A3_DICTEE, A3_ATOI, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 · LE DEVOIR QUI SUPPOSE
 *
 *  TEXT: a call about a missing delivery (listening). MOVE: devoir as a
 *  confident guess (il doit être, ça doit être, il devait être) and as tact
 *  (il doit y avoir un malentendu, vous devez faire erreur). « Il a dû »
 *  and « devrait » are cited from lessons 4 and 8 in B1.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'La livraison introuvable', frSub: 'Écoute qui suppose quoi',
  lines: [
    ln(E(1044)), ln(E(1045)), ln(E(1046)), ln(E(1047)), ln(E(1048)),
    ln(E(1049)), ln(E(1050)), ln(E(1051)), ln(E(1052)), ln(E(1053)),
  ],
  questions: [
    { q: 'Que pense l’employée du livreur, au début ?', opts: ['Il s’est sans doute trompé d’entrée.', 'Il a refusé de livrer.', 'Il est en vacances.'], correct: 0, why: '« Il a dû se tromper d’entrée » : une supposition sur le passé. EN: a guess.' },
    { q: '« Il doit être devant l’entrée nord » : c’est...', opts: ['une supposition', 'un ordre'], correct: 0, why: 'Elle ne lui ordonne rien : elle suppose où il se trouve. EN: a guess, not an order.' },
    { q: 'Comment l’Institut répond-il à l’histoire de l’adresse de Lyon ?', opts: ['Il accuse un malentendu, pas une personne.', 'Il dit que l’employée a menti.'], correct: 0, why: '« Il doit y avoir un malentendu » : personne n’est accusé. EN: a misunderstanding, not a culprit.' },
    { q: 'Qui avait tort sur le paiement du transport ?', opts: ['l’employée', 'l’Institut'], correct: 0, why: 'Elle disait le transport impayé, puis reconnaît qu’elle devait avoir l’ancien dossier sous les yeux. EN: she did.' },
    { q: 'Quand le camion est-il arrivé ?', opts: ['après midi', 'à neuf heures', 'le lendemain'], correct: 0, why: '« Il était midi passé » : plus tard que prévu. EN: after noon.' },
  ],
  audio: REC('rec-c1-06-livraison-ecoute'), say: REFRAME, terms: ['hypothese'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-certitude',
  title: 'Devoir qui suppose', frSub: 'Un indice, une supposition',
  hint: 'Quatre cartes. Personne n’oblige personne : on suppose.',
  audio: AUDIO, say: REFRAME, terms: ['hypothese'],
  cards: [
    card(E(1047), 'Au présent', 'il doit être',
      `Une supposition sur maintenant, tirée d’un indice. ${Cap(DEVOIR_REF)} t’a donné « il a dû oublier », pour le passé ; ${COND_REF}, « ils devraient arriver ». EN: a guess about now.`),
    card(E(1055), 'À l’imparfait', 'il devait être',
      'Une supposition sur un moment passé : l’heure, l’âge, l’état. EN: a guess about a past moment.'),
    card(E(1050), 'Le malentendu', 'contredire sans accuser',
      'Tu mets l’erreur sur le compte d’un malentendu : l’autre peut corriger sans perdre la face. EN: blame a misunderstanding, not a person.'),
    card(E(1051), 'Vous devez faire erreur', 'contredire poliment',
      'Plus doux que vous vous trompez : devoir présente l’erreur comme probable, pas comme une faute. EN: softer than you are wrong.'),
  ],
};

const A4_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-trier', layer: 'core', size: 'lg',
  title: 'Supposer ou obliger', frSub: 'Le contexte tranche',
  groups: [
    grp('Une supposition', [
      it(E(1054), 'un indice : il ne répond jamais avant onze heures'),
      it(E(1048), 'un indice : le camion blanc'),
      it('fr.b1.recits-au-passe.1207', 'au passé, la leçon 4 du B1'),
      it('fr.b1.projets-et-futur.740', 'au conditionnel, une attente'),
    ], chk('Dans ces phrases, devoir exprime...', ['une supposition', 'une obligation'], 0,
      'Chaque phrase s’appuie sur un indice ; personne n’est obligé. EN: a supposition.')),
    grp('Une obligation', [
      free('Il doit rendre le rapport vendredi.', 'He has to hand in the report on Friday.', 'une échéance'),
      free('Vous devez signer ici.', 'You have to sign here.', 'une consigne'),
    ], chk('« Vous devez signer ici » et « vous devez faire erreur » : même devoir ?', ['Non : une consigne, puis une supposition.', 'Oui, deux ordres.'], 0,
      'Le premier oblige, le second suppose. EN: an instruction, then a guess.')),
    ctl('L’ambiguïté', 'Sa veste n’est plus sur la chaise. « Il doit être parti. » C’est...',
      ['une supposition', 'une obligation', 'un reproche'], 0,
      'L’indice (la veste) fait pencher vers la supposition. EN: the clue makes it a guess.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['hypothese'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a4-erreurs', layer: 'core', swipe: true, size: 'lg', sheetId: 'sheet-certitude',
  title: 'Quatre suppositions qui coincent',
  errors: [
    { wrong: 'Vous vous trompez : nous avons payé le transport hier.', right: fr(E(1051)),
      why: 'La phrase est correcte, et on la dit souvent sans y penser. Mais elle accuse : devoir laisse l’autre vérifier sans perdre la face. EN: correct, but it accuses.' },
    { wrong: 'C’est votre erreur, l’adresse est fausse.', right: fr(E(1050)),
      why: 'Correct, peut-être vrai, mais tu cherches une solution, pas un coupable. Accuse le malentendu. EN: correct, but it accuses.' },
    { wrong: 'En ce moment, il a dû être en réunion : il ne répond jamais avant onze heures.', right: 'En ce moment, il doit être en réunion : il ne répond jamais avant onze heures.',
      why: 'En ce moment : une supposition sur maintenant, donc le présent, il doit être. Il a dû porte sur le passé. EN: present guess, present devoir.' },
    { wrong: 'Ça doit lui, le camion blanc sur le trottoir.', right: fr(E(1048)),
      why: 'En anglais, that must be him se dit sans verbe être apparent. En français, devoir veut un infinitif : ça doit être lui. EN: devoir needs être.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['hypothese'],
};

const A4_ATOI = aToi('a4-atoi', 'Supposer, et contredire en douceur', [
  ctl('Un retard', 'Ta collègue n’est pas arrivée ; son train arrive d’habitude à huit heures. Tu dis :',
    ['Elle doit être dans le train de neuf heures.', 'Elle doit venir à huit heures, c’est obligatoire.'], 0,
    'Une supposition tirée d’une habitude. EN: a guess from a habit.'),
  ctl('Une facture', 'Un fournisseur te réclame une facture déjà payée. Au téléphone :',
    ['Vous devez faire erreur : elle a été réglée le trois.', 'Vous mentez : elle a été réglée le trois.', 'Vous avez tort, c’est tout.'], 0,
    'Devoir présente l’erreur comme probable et laisse vérifier. EN: tactful contradiction.'),
  ctl('Deux dossiers', 'Tu reçois un chiffre qui ne correspond pas au tien. Tu écris dans le fil de discussion :',
    ['Il doit y avoir un malentendu sur la version du dossier.', 'Ton chiffre est faux.'], 0,
    'Le malentendu, pas la personne. EN: the misunderstanding, not the person.'),
], ['hypothese']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le sens', '« Il doit être en réunion. » Devoir exprime...', ['une supposition', 'une obligation'], 0,
    'Une supposition : il ne répond pas, donc il est sans doute en réunion. EN: a guess.'),
  ctl('Le temps', 'Pour une supposition sur maintenant :', ['il doit être', 'il a dû être', 'il devra être'], 0,
    'Le présent pour maintenant ; il a dû pour une action passée. EN: present.'),
  ctl('Le tact', 'Pour contredire un fournisseur sans l’accuser :', ['Il doit y avoir un malentendu.', 'Vous avez tort.'], 0,
    'Le malentendu laisse une porte de sortie. EN: leave a way out.'),
], ['hypothese']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Le devoir qui suppose',
    opener: {
      line: 'Une livraison introuvable et un fournisseur qui se trompe : ici devoir ne t’oblige à rien, il suppose, et il t’aide à contredire en douceur. EN: A missing delivery and a supplier who is wrong: here devoir obliges no one, it supposes, and it helps you contradict gently.',
      imageRef: 'lessons/nuancer-oral/act04.jpg',
    },
    sections: [],
    milestone: 'Tu fais une supposition avec devoir et tu contredis sans accuser. EN: You make a guess with devoir and contradict without accusing.',
    estScreens: 32, restPoints: ['a4-trier'],
  },
  sections: [A4_ECOUTE, A4_CARTES, A4_TRIER, A4_ERREURS, A4_ATOI, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 · LE MOT À PEU PRÈS JUSTE
 *
 *  TEXT: Sophie rehearses her poster presentation (reading). MOVE: flag an
 *  approximate word (en quelque sorte, pour ainsi dire), restrict to the
 *  strict sense (à proprement parler), and ask for or allow the minimum
 *  (un tant soit peu).
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a5-lecture', layer: 'core', questionsInModal: true,
  title: 'L’affiche de Sophie', frSub: 'Des mots choisis, et leurs limites',
  text: AFFICHE_TEXT,
  glossary: [
    { word: 'serpente', en: 'winds, meanders', note: 'Du verbe serpenter : avancer en faisant des courbes.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « je n’ai pas d’avis tranché ». Que veut dire « tranché » ?', a: 'Net, décidé : Sophie hésite entre les deux solutions.' },
    { q: 'Pourquoi Sophie dit-elle que l’affiche est « en quelque sorte » une coupe de la ville ?', a: 'Parce que le mot coupe est une image : ce n’est pas un vrai dessin technique, mais l’idée y est.' },
    { q: 'Que veut-elle éviter en disant « ce n’est pas, à proprement parler, une carte » ?', a: 'Qu’on prenne l’affiche pour une carte exacte : les rivières ne sont pas à l’échelle.' },
    { q: 'Quelle est la question qu’elle pose à l’équipe ?', a: 'Faut-il laisser la bande bleue en bas, où l’œil arrive en dernier, ou la remonter ?' },
    { q: 'Ces précautions rendent-elles Sophie floue ?', a: 'Non : chacune dit exactement jusqu’où prendre un mot, et elle pose une question nette.' },
  ],
  audio: REC('rec-c1-06-affiche'), say: REFRAME, terms: ['apeupres'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a5-exemples', layer: 'core', sheetId: 'sheet-incises',
  title: 'L’à-peu-près, avoué', frSub: 'Quatre formules, six phrases',
  examples: [
    ex('fr.b1.expressions-frequentes.073', 'La formule de base : le mot qui suit est approximatif.'),
    ex(E(1061), 'Coupe est une image ; en quelque sorte le dit.'),
    ex(E(1063), 'Pour ainsi dire : personnage est pris au figuré.'),
    ex(E(1062), 'À proprement parler : au sens strict, ce n’est pas une carte.'),
    ex(E(1064), 'Un tant soit peu : il suffit d’un tout petit intérêt.'),
    ex(E(1066), 'Une question : même un petit moment suffirait.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['apeupres'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-construire', layer: 'core', size: 'lg',
  title: 'Approcher, ou restreindre', frSub: 'Deux gestes opposés',
  groups: [
    grp('Le mot est une image', [
      it(E(1061), 'coupe'),
      it(E(1063), 'personnage'),
      it('fr.b1.expressions-frequentes.073', 'la formule'),
    ], chk('En quelque sorte et pour ainsi dire disent que le mot...', ['est approximatif, ou pris au figuré', 'est faux'], 0,
      'Le mot est le bon, à peu près : l’auditeur sait comment le prendre. EN: approximate, not wrong.')),
    grp('Le sens strict', [
      it(E(1062), 'pas une carte'),
      it(E(1065), 'pas une vidéo'),
    ], chk('« Ce n’est pas une vidéo à proprement parler. » Que dit Sophie ?', ['Au sens strict, ce n’en est pas une, mais ça y ressemble.', 'C’est une très bonne vidéo.', 'Elle n’aime pas la vidéo.'], 0,
      'À proprement parler restreint au sens exact, souvent dans une négation. EN: strictly speaking, it is not.')),
    ctl('Un tant soit peu', '« S’il s’intéresse un tant soit peu à son quartier » : combien d’intérêt faut-il ?',
      ['très peu', 'beaucoup'], 0,
      'Si peu que ce soit : même un petit intérêt suffit. EN: even the slightest.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['apeupres'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a5-piege', layer: 'core', swipe: true, sheetId: 'sheet-incises',
  title: 'Six à-peu-près ratés',
  rule: {
    title: 'Approcher ou restreindre, sans se tromper de formule',
    body: 'En quelque sorte et pour ainsi dire approchent : le mot est une image. À proprement parler restreint : au sens strict. Un tant soit peu veut dire très peu. Les formes sont figées : parler, dire, tant, soit, quelque. EN: approximate or restrict; fixed forms.',
  },
  cards: [
    trap('proprement dit', 'Ce n’est pas, à proprement dit, une carte : les rivières ne sont pas à l’échelle.', E(1062), 'La formule est à proprement parler. EN: parler, not dit.'),
    trap('parlé', 'Ce n’est pas une vidéo à proprement parlé, plutôt une respiration.', E(1065), 'Un infinitif : parler. Le participe parlé n’a rien à faire ici. EN: infinitive.'),
    trap('ainsi parler', 'La bande bleue est, pour ainsi parler, le personnage principal.', E(1063), 'La formule est pour ainsi dire. EN: dire, not parler.'),
    trap('soi', 'Si le passant s’intéresse un tant soi peu à son quartier, il cherchera sa rue.', E(1064), 'Soit, du verbe être au subjonctif : un tant soit peu. EN: soit.'),
    trap('un temps', 'Est-ce qu’il te reste un temps soit peu de temps cette semaine ?', E(1066), 'Tant, pas temps : un tant soit peu. Les deux mots se prononcent pareil. EN: tant, not temps.'),
    trap('quelle sorte', 'L’affiche est, en quelle sorte, une coupe de la ville.', E(1061), 'La formule est figée : en quelque sorte, avec quelque. EN: quelque, not quelle.'),
  ],
  drill: [
    { promptSay: 'Ce n’est pas, à proprement ..., un musée.', opts: ['parler', 'dit'], correct: 0 },
    { promptSay: 'C’est, pour ainsi ..., notre carte de visite.', opts: ['dire', 'parler'], correct: 0 },
    { promptSay: 'S’il était un tant ... peu prudent, il vérifierait.', opts: ['soit', 'toi'], correct: 0 },
    { promptSay: 'L’affiche est, ..., une coupe de la ville.', opts: ['en quelque sorte', 'à proprement parler'], correct: 0 },
    { promptSay: 'Ce n’est pas une carte ... : rien n’est à l’échelle.', opts: ['à proprement parler', 'en quelque sorte'], correct: 0 },
    { promptSay: 'Tu as un tant soit peu de temps ? Il me faut ... .', opts: ['cinq minutes', 'trois mois'], correct: 0 },
    { promptSay: 'C’est, ..., le cœur du projet.', opts: ['pour ainsi dire', 'à proprement dire'], correct: 0 },
    { promptSay: 'Ce n’est pas, à proprement ..., une erreur.', opts: ['parler', 'parlé'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-c1-06-piege-apeupres'), say: REFRAME, terms: ['apeupres'],
};

const A5_ATOI = aToi('a5-atoi', 'Le mot juste, à peu près', [
  ctl('Une image', 'Tu présentes la maquette : elle n’est pas un vrai plan, mais elle en a le rôle.',
    ['C’est, en quelque sorte, notre plan de la ville.', 'C’est, à proprement parler, notre plan de la ville.'], 0,
    'Une image : en quelque sorte. EN: an approximation.'),
  ctl('Le sens strict', 'On appelle la salle « le musée ». Tu précises que ce n’en est pas un :',
    ['Ce n’est pas, à proprement parler, un musée.', 'C’est un musée, pour ainsi dire.', 'C’est un tant soit peu un musée.'], 0,
    'À proprement parler restreint au sens exact. EN: strictly speaking, it is not.'),
  ctl('Un petit service', 'Tu demandes deux minutes à ta directrice, très poliment :',
    ['Auriez-vous un tant soit peu de temps après la réunion ?', 'Vous avez du temps, à proprement parler ?'], 0,
    'Un tant soit peu : tu demandes le minimum. EN: the slightest bit of time.'),
], ['apeupres']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Approcher', 'Pour dire qu’un mot est une image :', ['en quelque sorte', 'à proprement parler'], 0,
    'En quelque sorte approche. EN: approximation.'),
  ctl('Restreindre', 'À proprement parler veut dire...', ['au sens strict', 'à peu près', 'franchement'], 0,
    'Au sens strict du mot. EN: strictly speaking.'),
  ctl('La forme', 'Lequel est juste ?', ['un tant soit peu', 'un tant soi peu'], 0,
    'Soit, du verbe être. EN: soit.'),
], ['apeupres']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le mot à peu près juste',
    opener: {
      line: 'Une affiche qui n’est pas tout à fait une carte, une bande bleue qui est presque un personnage : ici tu dis exactement jusqu’où prendre un mot. EN: A poster that is not quite a map, a blue band that is almost a character: here you say exactly how far to take a word.',
      imageRef: 'lessons/nuancer-oral/act05.jpg',
    },
    sections: [],
    milestone: 'Tu avoues un mot approximatif ou tu le restreins au sens strict, sans flou. EN: You flag an approximate word or restrict it to its strict sense, with no vagueness.',
    estScreens: 32, restPoints: ['a5-construire'],
  },
  sections: [A5_LECTURE, A5_EXEMPLES, A5_CONSTRUIRE, A5_PIEGE, A5_ATOI, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 · DEMANDER DE LOIN
 *
 *  TEXT: Hélène's voice message to the partner museum in Lyon (reading).
 *  MOVE: the formal request in speech (je vous saurais gré de, seriez-vous
 *  en mesure de) and the softened constraint (être amené à), above the top
 *  rung of lesson 9 in B1's ladder.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a6-lecture', layer: 'core', questionsInModal: true,
  title: 'Le message d’Hélène à Lyon', frSub: 'Trois demandes, une contrainte',
  text: APPEL_TEXT,
  glossary: [
    { word: 'pris de court', en: 'caught off guard', note: 'Surpris, sans avoir eu le temps de se préparer.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « votre accord de principe ». Qu’a dit Théo Brunet ?', a: 'Oui sur l’idée, sans encore régler les détails.' },
    { q: 'Combien de demandes Hélène fait-elle, et lesquelles ?', a: 'Trois : confirmer la date du vingt avril, transmettre les valeurs d’assurance, accepter les vitrines.' },
    { q: 'Comment annonce-t-elle la contrainte des vitrines ?', a: 'Avec nous serons amenés à : la contrainte vient de la sécurité, pas d’un choix contre lui.' },
    { q: 'Pourquoi parle-t-elle d’une prolongation qui n’est pas décidée ?', a: 'Pour qu’il ne soit pas pris de court : elle prévient sans promettre (il se pourrait que).' },
    { q: 'Ses demandes sont-elles floues ?', a: 'Non : chaque demande a un objet et une date ; la politesse porte sur la forme, pas sur le contenu.' },
  ],
  audio: REC('rec-c1-06-appel'), say: REFRAME, terms: ['distance'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a6-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-distance',
  title: 'Plus haut que l’échelle', frSub: 'Trois formules, et une mise en garde',
  hint: 'Quatre cartes. Demande-toi à qui tu parles avant de monter si haut.',
  audio: AUDIO, say: REFRAME, terms: ['distance'],
  cards: [
    card(E(1070), 'La demande la plus haute', 'savoir gré',
      `${Cap(POLITESSE_REF)} s’arrêtait à « auriez-vous la gentillesse de ». Je vous saurais gré de monte encore : un partenaire, une administration. EN: above the top rung.`),
    card(E(1072), 'Demander si l’autre peut', 'en mesure de',
      'Tu ne supposes pas qu’il veut : tu demandes s’il peut. Il peut refuser sans perdre la face. EN: ask whether they can.'),
    card(E(1071), 'Annoncer une contrainte', 'être amené à',
      'La décision paraît venir des circonstances : nous serons amenés à fermer plus tôt. Elle adoucit, elle ne supprime rien. EN: a constraint, softened.'),
    card(E(1081), 'Trop haut', 'l’ironie',
      'Entre amis, ces formules sonnent comme une moquerie. La hauteur suit la personne. EN: among friends, it sounds ironic.'),
  ],
};

const A6_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a6-tableau', layer: 'core', sheetId: 'sheet-distance',
  title: 'Six hauteurs de demande', frSub: 'Du collègue au partenaire',
  cols: ['Formule', 'À qui', 'Registre'],
  rows: [
    { cells: ['Tu pourrais...', 'un collègue proche', 'courant'], say: fr('fr.b1.conseils-et-suggestions.1003'),
      detail: { title: 'Entre collègues', body: `Le barreau ordinaire de ${POLITESSE_REF}. EN: the everyday rung.`, say: 'Tu pourrais m’envoyer le fichier avant midi ?' } },
    { cells: ['Auriez-vous la gentillesse de...', 'un inconnu, un service réel', 'soutenu'], say: fr('fr.b1.conseils-et-suggestions.1005'),
      detail: { title: 'Le haut de l’échelle du B1', body: 'Un vrai service, demandé avec distance. EN: the top rung at B1.', say: fr('fr.b1.conseils-et-suggestions.1060') } },
    { cells: ['Seriez-vous en mesure de...', 'un partenaire', 'soutenu'], say: fr(E(1074)),
      detail: { title: 'Demander s’il peut', body: 'L’autre peut dire non sans se justifier : il n’est pas en mesure. EN: asks about ability.', say: fr(E(1074)) } },
    { cells: ['Je vous saurais gré de...', 'un partenaire, une administration', 'très soutenu'], say: fr(E(1073)),
      detail: { title: 'Savoir gré', body: 'Être reconnaissant d’avance. Jamais je vous serais gré. EN: savoir gré, never être gré.', say: fr(E(1079)) } },
    { cells: ['Nous serons amenés à...', 'un partenaire, un public', 'soutenu'], say: fr(E(1075)),
      detail: { title: 'La contrainte adoucie', body: 'La décision paraît venir des circonstances. EN: a constraint softened.', say: fr(E(1076)) } },
    { cells: ['Je ne saurais...', 'un refus poli', 'soutenu'], say: fr('fr.b2.negation-et-restriction.1537'),
      detail: { title: 'Le refus soutenu', body: `Vu dans ${NEGATION_REF} : un refus net, en forme polie. EN: a polite, firm refusal.`, say: fr('fr.b2.negation-et-restriction.1537') } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['distance'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a6-piege', layer: 'core', swipe: true, sheetId: 'sheet-distance',
  title: 'Six demandes qui déraillent',
  rule: {
    title: 'Savoir gré, être amené à, être en mesure de',
    body: 'On sait gré à quelqu’un de quelque chose : je vous saurais gré de. Saurais et serais sonnent presque pareil. On est amené à faire, en mesure de faire (jamais à mesure de). EN: savoir gré de; amené à; en mesure de.',
  },
  cards: [
    trap('serais gré', 'Je vous serais gré de bien vouloir me confirmer cette date.', E(1073), 'Savoir gré : je vous saurais gré. Être gré n’existe pas. EN: saurais.'),
    trap('serais gré, encore', 'Je vous serais gré de me rappeler avant vendredi.', E(1079), 'L’oreille entend presque la même chose ; la grammaire, non. EN: saurais.'),
    trap('gré à', 'Je vous saurais gré à me confirmer cette date.', E(1073), 'Savoir gré de + infinitif. EN: de.'),
    trap('amenés de', 'Pour des raisons de sécurité, nous serons amenés d’exposer les maquettes sous vitrine.', E(1075), 'Être amené à + infinitif. EN: à.'),
    trap('en mesure à', 'Seriez-vous en mesure à nous transmettre ces chiffres d’ici la fin du mois ?', E(1074), 'Être en mesure de + infinitif. EN: de.'),
    trap('à mesure', 'Seriez-vous à mesure de nous transmettre ces chiffres d’ici la fin du mois ?', E(1074), 'En mesure de : capable de. À mesure que dit une progression. EN: en mesure de.'),
  ],
  drill: [
    { promptSay: 'Je vous ... gré de me répondre avant lundi.', opts: ['saurais', 'serais'], correct: 0 },
    { promptSay: 'Nous serons amenés ... fermer la salle à dix-sept heures.', opts: ['à', 'de'], correct: 0 },
    { promptSay: 'Seriez-vous en mesure ... nous rappeler ?', opts: ['de', 'à'], correct: 0 },
    { promptSay: 'Nous ne sommes pas ... mesure de livrer avant lundi.', opts: ['en', 'à'], correct: 0 },
    { promptSay: 'Je vous saurais gré ... bien vouloir signer ce formulaire.', opts: ['de', 'à', 'pour'], correct: 0 },
    { promptSay: 'À ta colocataire : ... ranger ta vaisselle ?', opts: ['Tu pourrais', 'Je vous saurais gré de'], correct: 0 },
    { promptSay: 'Au partenaire : ... me confirmer la date ?', opts: ['Seriez-vous en mesure de', 'Tu peux'], correct: 0 },
    { promptSay: 'Pour des raisons de sécurité, nous serons ... à fermer plus tôt.', opts: ['amenés', 'amenant'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-c1-06-piege-distance'), say: REFRAME, terms: ['distance'],
};

const A6_ATOI = aToi('a6-atoi', 'La bonne hauteur', [
  ctl('Le partenaire', 'Tu demandes au musée de Lyon d’envoyer des photos avant vendredi :',
    ['Je vous saurais gré de nous envoyer quelques photos avant vendredi.', 'Envoyez-nous des photos avant vendredi.'], 0,
    'Un partenaire que tu connais peu : la demande soutenue. EN: formal request.'),
  ctl('La collègue', 'Tu demandes la même chose à Sophie, que tu tutoies :',
    ['Je vous saurais gré de m’envoyer les photos.', 'Tu pourrais m’envoyer les photos avant vendredi ?'], 1,
    'Entre collègues proches, la formule soutenue sonnerait ironique. EN: everyday request.'),
  ctl('La contrainte', 'Tu dois annoncer au public que la salle fermera plus tôt :',
    ['Nous serons amenés à fermer la salle à dix-sept heures.', 'On ferme à dix-sept heures, tant pis.', 'Je vous saurais gré de partir.'], 0,
    'Être amené à annonce la contrainte sans brutalité. EN: a softened constraint.'),
], ['distance']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La forme', 'La formule juste :', ['je vous saurais gré de', 'je vous serais gré de'], 0,
    'Savoir gré. EN: saurais.'),
  ctl('La préposition', 'Nous serons amenés ... fermer.', ['à', 'de'], 0,
    'Être amené à. EN: à.'),
  ctl('La personne', 'Je vous saurais gré de... à un ami proche, ça sonne...', ['ironique', 'parfaitement naturel'], 0,
    'Trop haut pour la relation. EN: ironic.'),
], ['distance']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Demander de loin',
    opener: {
      line: 'Un partenaire que tu connais à peine, trois demandes et une contrainte : ici tu montes plus haut que l’échelle du B1, sans perdre la clarté. EN: A partner you barely know, three requests and a constraint: here you go above the B1 ladder without losing clarity.',
      imageRef: 'lessons/nuancer-oral/act06.jpg',
    },
    sections: [],
    milestone: 'Tu fais une demande très soutenue et tu annonces une contrainte avec douceur, à la bonne personne. EN: You make a very formal request and announce a constraint gently, to the right person.',
    estScreens: 36, restPoints: ['a6-tableau', 'a6-piege'],
  },
  sections: [A6_LECTURE, A6_CARTES, A6_TABLEAU, A6_PIEGE, A6_ATOI, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 · CONTREDIRE AVEC ÉGARDS
 *
 *  TEXT: Karim disagrees with Hélène on the Friday (listening). MOVE: the
 *  formulas of regard (avec tout le respect que je vous dois, sauf votre
 *  respect, loin de moi l'idée de, sans vouloir + infinitif), heard as
 *  ANNOUNCEMENTS of a disagreement, one at a time. Builds on b2.26 act 5.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a7-ecoute', layer: 'core', hideLines: true,
  title: 'Le vendredi en question', frSub: 'Écoute ce que chaque formule annonce',
  lines: [
    ln(E(1085)), ln(E(1086)), ln(E(1087)), ln(E(1088)), ln(E(1089)),
    ln(E(1090)), ln(E(1091)), ln(E(1092)), ln(E(1093)),
  ],
  questions: [
    { q: 'Karim remet-il en cause tout le calendrier ?', opts: ['Non, seulement le choix du vendredi.', 'Oui, tout.'], correct: 0, why: '« Loin de moi l’idée de remettre en cause tout le calendrier » écarte cette intention, puis vient le vrai point. EN: only the Friday.' },
    { q: 'Sur quoi Hélène s’appuie-t-elle pour défendre le vendredi ?', opts: ['les chiffres de l’an dernier', 'son goût personnel', 'l’avis de Sophie'], correct: 0, why: 'Sans vouloir vous contredire, elle avance des chiffres. EN: last year’s figures.' },
    { q: 'Quand Karim répond « avec tout le respect que je vous dois », que fait-il ?', opts: ['Il annonce un désaccord ferme.', 'Il lui donne raison.'], correct: 0, why: 'La formule prépare une objection : ces chiffres concernaient une autre exposition. EN: a firm disagreement.' },
    { q: 'Sur quoi les deux finissent-ils par s’accorder ?', opts: ['le public des familles', 'la date', 'le budget'], correct: 0, why: 'Je vous rejoins sur le public ; je ne vous suis pas sur la date. EN: the audience.' },
    { q: 'Comment la discussion se termine-t-elle ?', opts: ['par une proposition qui partage les deux soirs', 'par un vote', 'sans solution'], correct: 0, why: 'Le vendredi pour les partenaires, le samedi pour le public. EN: a shared proposal.' },
  ],
  audio: REC('rec-c1-06-vendredi-ecoute'), say: REFRAME, terms: ['egards'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a7-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-distance',
  title: 'Quatre formules d’égards', frSub: 'Elles annoncent, elles n’effacent pas',
  hint: 'Quatre cartes. Écoute ce qui vient juste après chaque formule.',
  audio: AUDIO, say: REFRAME, terms: ['egards'],
  cards: [
    card(E(1082), 'Le désaccord ferme', 'avec tout le respect',
      'Souvent face à un supérieur, avant une objection nette. Dite d’un ton appuyé, elle peut sonner ironique. EN: before a firm objection.'),
    card(E(1083), 'Écarter une intention', 'loin de moi l’idée de',
      `Suivi d’un infinitif, puis souvent de mais. ${Cap(LIGNES_C1_REF)} t’a montré son usage ironique ; ici, il est sincère. EN: far be it from me to.`),
    card(E(1084), 'Annoncer la contradiction', 'sans vouloir',
      `Sans vouloir + infinitif annonce le geste même qu’on dit éviter. ${Cap(BILAN_C1_REF)} t’en a donné un exemple en négociation. EN: announces what it denies.`),
    card(E(1094), 'Ce que l’autre entend', 'l’annonce',
      'La formule prévient : un désaccord arrive. Elle ne remplace ni l’argument ni la proposition. EN: it announces, it does not replace.'),
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-construire', layer: 'core', size: 'lg',
  title: 'La formule, puis l’argument', frSub: 'Ce qui suit compte plus que la formule',
  groups: [
    grp('Écarter une intention, puis nuancer', [
      it(E(1086), 'pas tout le calendrier'),
      it('fr.c1.culture-profonde.145', 'pas freiner le projet, mais'),
      it('fr.c1.strategies-de-comprehension.1948', 'à l’écrit, ironique'),
    ], chk('« Loin de moi l’idée de freiner le projet, mais certains chiffres m’inquiètent. » Qu’est-ce qui compte ?', ['ce qui suit mais', 'la formule du début'], 0,
      'La formule écarte un malentendu ; le message est après mais. EN: what comes after mais.')),
    grp('Annoncer une contradiction', [
      it(E(1088), 'avec des chiffres'),
      it('fr.c1.culture-profonde.135', 'en ne visant personne'),
      it('fr.c1.discours-dexamen.1014', 'en négociation'),
      it('fr.c1.nuances-et-registres.070', 'sauf votre respect, soutenu'),
    ], chk('Ces formules, à qui les dit-on le plus souvent ?', ['à quelqu’un qu’on vouvoie, un supérieur, un partenaire', 'à un ami très proche', 'à un enfant'], 0,
      'Elles marquent la distance : entre amis, elles sonnent faux. EN: to people you keep at a distance.')),
    ctl('La dose', 'Combien de formules d’égards avant ton argument ?',
      ['une', 'trois, pour être sûr'], 0,
      'Une formule, puis l’argument ; trois sonnent ironiques. EN: one.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['egards'],
};

const A7_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a7-focus', layer: 'core', sheetId: 'sheet-distance',
  title: 'Contredire avec égards, en quatre règles',
  points: [
    'Une formule d’égards par désaccord, pas plus. EN: one formula per disagreement.',
    'Après la formule, un argument précis : un chiffre, un fait, une expérience. EN: then a precise argument.',
    'Dis sur quoi tu es d’accord avant ce qui te sépare. EN: say where you agree first.',
    'Finis par une proposition, pas par un verdict. EN: end on a proposal.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['egards'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a7-erreurs', layer: 'core', swipe: true, size: 'lg', sheetId: 'sheet-distance',
  title: 'Quatre désaccords mal engagés',
  errors: [
    { wrong: 'Loin de moi l’idée à remettre en cause tout le calendrier.', right: fr(E(1086)),
      why: 'On pense à l’anglais far be it from me to, et le to devient à. En français : loin de moi l’idée de + infinitif. EN: de + infinitive.' },
    { wrong: 'Sans vouloir de vous contredire, les chiffres de l’an dernier vont plutôt dans l’autre sens.', right: fr(E(1088)),
      why: 'On veut faire quelque chose, sans de : sans vouloir vous contredire. EN: no de after vouloir.' },
    { wrong: 'Sauf votre respect, avec tout le respect que je vous dois, sans vouloir vous contredire, ces chiffres concernaient une autre exposition.', right: fr(E(1089)),
      why: 'Chaque formule est correcte ; empilées, elles sonnent moqueuses. Une seule, puis l’argument. EN: one formula, then the point.' },
    { wrong: 'Avec tout le respect que je te dois, ton idée ne tient pas.', right: 'Là, je ne te suis pas : regarde les chiffres de l’an dernier.',
      why: 'Correct, mais avec un collègue que tu tutoies, la formule soutenue sonne froide ou ironique. Dis ton doute, puis ton argument. EN: correct, but too formal among colleagues.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['egards'],
};

/** USE, out loud: Hélène wants to drop the school visit; you disagree with
 *  regard, in vous. ONE APOSTROPHE STYLE (’) in every turn and alt. */
const A7_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a7-scenario', layer: 'core',
  title: 'À toi : Hélène veut supprimer la visite des écoles',
  setting: 'Bureau d’Hélène, mercredi. Elle pense supprimer la visite des écoles du samedi pour alléger le week-end d’ouverture. Tu n’es pas d’accord. Tu la vouvoies, et tu tiens à garder une bonne relation.',
  turns: [
    {
      ai: 'J’ai envie de supprimer la visite des écoles du samedi. Ça allégerait tout le monde.',
      en: 'I feel like cancelling the school visit on Saturday. It would lighten the load for everyone.',
      user: 'Je comprends l’idée. Loin de moi l’idée de compliquer le week-end, mais trois classes ont déjà réservé.',
      userEn: 'I understand the idea. Far be it from me to complicate the weekend, but three classes have already booked. (Rule out an intention, then the fact.)',
      alts: [
        { fr: 'C’est vrai que le week-end est chargé ; cela dit, trois classes ont déjà réservé.', en: 'It is true the weekend is busy; that said, three classes have already booked.' },
        { fr: 'Je vous rejoins sur la charge du week-end ; en revanche, les écoles ont déjà réservé.', en: 'I agree with you on the weekend workload; on the other hand, the schools have already booked.' },
      ],
    },
    {
      ai: 'Trois classes, ce n’est pas énorme. On peut les rappeler.',
      en: 'Three classes is not huge. We can call them back.',
      user: 'Avec tout le respect que je vous dois, ces enseignants viennent chaque année ; annuler maintenant risquerait de les fâcher.',
      userEn: 'With all due respect, these teachers come every year; cancelling now might upset them. (One formula of regard, then the argument.)',
      alts: [
        { fr: 'Sans vouloir vous contredire, ces enseignants viennent chaque année, et ils risquent de mal le prendre.', en: 'Without wishing to contradict you, these teachers come every year, and they might take it badly.' },
        { fr: 'Je me permets d’insister : ces classes viennent chaque année.', en: 'Allow me to insist: these classes come every year. (Firm, still polite.)' },
      ],
    },
    {
      ai: 'Mais l’équipe sera épuisée après le vernissage.',
      en: 'But the team will be exhausted after the opening night.',
      user: 'Là-dessus, vous avez raison. Et si nous gardions la visite, mais plus courte, à onze heures ?',
      userEn: 'On that, you are right. And what if we kept the visit, but shorter, at eleven? (Grant a point, then propose.)',
      alts: [
        { fr: 'C’est juste. Pourrait-on garder la visite en la raccourcissant ?', en: 'That is fair. Could we keep the visit and shorten it?' },
        { fr: 'Vous n’avez pas tort ; une visite d’une heure, à onze heures, ménagerait tout le monde.', en: 'You are not wrong; a one-hour visit at eleven would spare everyone.' },
      ],
    },
    {
      ai: 'Une heure, à onze heures… Qui s’en chargerait ?',
      en: 'One hour, at eleven… Who would take care of it?',
      user: 'Je peux m’en charger, avec Karim. Nous serions rentrés pour l’après-midi.',
      userEn: 'I can take care of it, with Karim. We would be back by the afternoon. (A concrete offer.)',
      alts: [
        { fr: 'Moi, si vous le permettez. Karim m’a déjà proposé son aide.', en: 'Me, if you will allow me. Karim has already offered to help.' },
        { fr: 'Je m’en occupe ; il me faudrait seulement votre accord avant vendredi.', en: 'I will deal with it; I would only need your approval before Friday.' },
      ],
    },
    {
      ai: 'D’accord, essayons comme ça.',
      en: 'All right, let us try it that way.',
      user: 'Merci. J’écris aux enseignants dès cet après-midi.',
      userEn: 'Thank you. I will write to the teachers this afternoon.',
      alts: [
        { fr: 'Merci beaucoup. Je préviens les écoles aujourd’hui.', en: 'Thank you very much. I will let the schools know today.' },
        { fr: 'Parfait, je m’en occupe tout de suite.', en: 'Perfect, I will see to it right away.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['egards'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('L’annonce', '« Avec tout le respect que je vous dois » annonce...', ['un désaccord', 'un compliment'], 0,
    'Un désaccord, souvent ferme. EN: a disagreement.'),
  ctl('La construction', 'Loin de moi l’idée ... remettre en cause le projet.', ['de', 'que', 'à'], 0,
    'Loin de moi l’idée de + infinitif. EN: de.'),
  ctl('La dose', 'Trois formules d’égards d’affilée sonnent...', ['ironiques', 'plus polies'], 0,
    'Une formule, puis l’argument. EN: ironic.'),
], ['egards']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Contredire avec égards',
    opener: {
      line: 'Ta directrice a choisi le vendredi, et Karim n’est pas d’accord : ici tu contredis avec égards, une formule, puis l’argument. EN: Your director chose the Friday and Karim disagrees: here you contradict with regard, one formula, then the argument.',
      imageRef: 'lessons/nuancer-oral/act07.jpg',
    },
    sections: [],
    milestone: 'Tu contredis un supérieur avec une seule formule d’égards, un argument et une proposition. EN: You contradict a superior with one formula of regard, an argument and a proposal.',
    estScreens: 40, restPoints: ['a7-construire', 'a7-erreurs'],
  },
  sections: [A7_ECOUTE, A7_CARTES, A7_CONSTRUIRE, A7_FOCUS, A7_ERREURS, A7_SCENARIO, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 · LA CRITIQUE ENVELOPPÉE
 *
 *  TEXT: Hélène's feedback to Karim on the first panel (reading). MOVE: the
 *  hedged criticism in four steps, and the firm point left firm.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a8-lecture', layer: 'core', questionsInModal: true,
  title: 'Les commentaires d’Hélène', frSub: 'Une critique qui se fait entendre',
  text: RETOUR_TEXT,
  glossary: [
    { word: 'ralentit', en: 'slows down', note: 'Du verbe ralentir : le paragraphe freine l’entrée dans le sujet.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « choisissez la question qui vous ressemble ». Que veut dire Hélène ?', a: 'Celle qui correspond à la façon de penser et d’écrire de Karim : c’est à lui de décider.' },
    { q: 'Par quoi Hélène commence-t-elle ?', a: 'Par ce qui marche : l’ouverture sur le ruisseau de l’enfance de Karim.' },
    { q: 'Combien de critiques fait-elle, et comment les présente-t-elle ?', a: 'Deux : la longueur (ce qui me gêne un peu, je me demande si) et la fin (me semble-t-il, gagnerait à).' },
    { q: 'Quel point n’est pas nuancé, et pourquoi ?', a: 'La date fausse : c’est un fait, pas une opinion. « Celui-là n’est pas négociable. »' },
    { q: 'Comment Karim réagit-il, comparé à l’acte 1 ?', a: 'Il pose des questions et accepte de corriger : il ne se défend pas.' },
  ],
  audio: REC('rec-c1-06-retour'), say: REFRAME, terms: ['critique'],
};

const A8_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a8-focus', layer: 'core', sheetId: 'sheet-critique',
  title: 'La critique enveloppée, en quatre temps',
  points: [
    'Ce qui marche, d’abord, sincère et précis. EN: what works, first, sincerely and precisely.',
    'Un point précis, pris à ton compte : ce qui me gêne un peu, c’est... EN: one precise point, owned.',
    'Une suggestion au conditionnel : je me demande si on ne gagnerait pas à... EN: a suggestion in the conditional.',
    'Une porte laissée à l’autre ; et l’erreur de fait, dite sans détour. EN: room for the other; factual errors said plainly.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['critique', 'fermete'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-construire', layer: 'core', size: 'lg',
  title: 'Envelopper sans étouffer', frSub: 'La critique doit rester lisible',
  groups: [
    grp('Une critique qui se fait entendre', [
      it(E(1100), 'un point précis'),
      it(E(1101), 'une suggestion'),
      it('fr.b1.opinions-et-avis.106', 'la formule'),
      it(E(1102), 'cadrer la critique'),
      it('fr.c1.nuances-et-registres.085', 'le même geste'),
    ], chk('Je ne dis pas qu’il est inutile, je dis qu’il serait mieux ailleurs. Que fait cette phrase ?', ['Elle limite la critique à un point précis.', 'Elle retire la critique.'], 0,
      'Pas tout, seulement ça : la critique devient acceptable. EN: it narrows the criticism.')),
    grp('Les formules à surveiller', [
      it(E(1108), 'ce qu’on entend'),
      it('fr.c1.nuances-et-registres.081', 'la remarque qui suit'),
      it('fr.c1.nuances-et-registres.101', 'ne le prends pas mal'),
      it(E(1109), 'un reproche mordant'),
    ], chk('« Si tu avais été un tant soit peu attentif... » sonne...', ['comme un reproche mordant', 'comme une suggestion douce', 'comme un compliment'], 0,
      'À la place d’un reproche direct, un tant soit peu le rend plus piquant. EN: a biting reproach.')),
    ctl('Le point ferme', 'La date du panneau est fausse. Tu dis :',
      ['La date est fausse : c’est 1898.', 'Il me semble que la date est peut-être un petit peu fausse.'], 0,
      'Un fait ne se nuance pas : tu le dis nettement. EN: state facts plainly.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['critique'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a8-erreurs', layer: 'core', swipe: true, size: 'lg', sheetId: 'sheet-critique',
  title: 'Quatre critiques mal dosées',
  errors: [
    { wrong: 'Le deuxième paragraphe est inutile.', right: fr(E(1102)),
      why: 'La phrase est correcte, peut-être même vraie. Mais c’est un verdict : dis ce qui te gêne et propose mieux. EN: correct French, but a verdict.' },
    { wrong: 'C’est bien, vraiment bien, mais bon, c’est peut-être un peu long, enfin je ne sais pas.', right: fr(E(1100)),
      why: 'Rien de faux dans la langue : tu voulais ménager Karim. Résultat, il ne sait pas ce qui ne va pas. Un point précis, assumé. EN: correct, but it says nothing.' },
    { wrong: 'La date est peut-être un petit peu fausse, il me semble.', right: fr(E(1105)),
      why: 'La phrase est correcte, mais nuancer un fait le rend douteux, et l’erreur reste. Une date fausse se dit nettement. EN: correct, but do not hedge a fact.' },
    { wrong: 'Si tu avais été un tant soit peu attentif, tu aurais vu l’erreur de date.', right: fr(E(1105)),
      why: 'La phrase est correcte, et elle soulage. Mais elle vise la personne : elle blesse plus qu’elle ne corrige. EN: it targets the person.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['critique', 'fermete'],
};

const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a8-dictee', layer: 'core',
  title: 'Écris la critique que tu entends',
  itemIds: dicteeFor(8),
  audio: AUDIO, say: REFRAME, terms: ['critique'],
};

/** USE, out loud: your feedback on Sophie's poster, in tu. ONE APOSTROPHE
 *  STYLE (’) in every turn and alt. */
const A8_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a8-scenario', layer: 'core',
  title: 'À toi : ton avis sur l’affiche de Sophie',
  setting: 'Sophie te montre la deuxième version de l’affiche. La bande bleue est très belle ; le titre est trop petit pour être lu de loin, et la date de l’exposition est fausse. Vous vous tutoyez.',
  turns: [
    {
      ai: 'Voilà la nouvelle version. Dis-moi ce que tu en penses, franchement.',
      en: 'Here is the new version. Tell me what you think of it, frankly.',
      user: 'La bande bleue est magnifique : on la suit tout de suite des yeux.',
      userEn: 'The blue band is magnificent: your eye follows it straight away. (What works, precisely.)',
      alts: [
        { fr: 'J’aime beaucoup la bande bleue ; c’est elle qu’on voit en premier.', en: 'I really like the blue band; it is what you see first.' },
        { fr: 'Le bleu fonctionne très bien, et la ville en ocre aussi.', en: 'The blue works very well, and so does the city in ochre.' },
      ],
    },
    {
      ai: 'Merci. Et le reste ?',
      en: 'Thanks. And the rest?',
      user: 'Ce qui me gêne un peu, c’est le titre : de loin, on a du mal à le lire.',
      userEn: 'What bothers me a little is the title: from a distance, it is hard to read. (One precise point, owned.)',
      alts: [
        { fr: 'Le titre, me semble-t-il, est un peu petit pour une affiche de rue.', en: 'The title, it seems to me, is a little small for a street poster.' },
        { fr: 'Je me demande si le titre ne gagnerait pas à être plus grand.', en: 'I wonder whether the title would not be better bigger.' },
      ],
    },
    {
      ai: 'Plus grand, il écraserait la bande bleue.',
      en: 'Bigger, it would crush the blue band.',
      user: 'Je ne dis pas qu’il faut le doubler, je dis qu’il faut pouvoir le lire depuis le trottoir d’en face.',
      userEn: 'I am not saying it should be doubled, I am saying it should be readable from the opposite pavement. (Narrow the criticism.)',
      alts: [
        { fr: 'Pas forcément beaucoup plus grand : peut-être juste plus foncé.', en: 'Not necessarily much bigger: maybe just darker.' },
        { fr: 'C’est ton affiche ; tu trouveras sûrement un équilibre.', en: 'It is your poster; you will surely find a balance. (Leave room.)' },
      ],
    },
    {
      ai: 'D’accord, je vais essayer. Autre chose ?',
      en: 'All right, I will try. Anything else?',
      user: 'Oui, un point qui ne se discute pas : la date est fausse, l’ouverture est le douze, pas le treize.',
      userEn: 'Yes, one point that is not up for discussion: the date is wrong, the opening is on the twelfth, not the thirteenth. (The fact, said plainly.)',
      alts: [
        { fr: 'Un détail, mais important : c’est le douze, pas le treize.', en: 'A detail, but an important one: it is the twelfth, not the thirteenth.' },
        { fr: 'Attention, la date : l’ouverture est le douze.', en: 'Careful, the date: the opening is on the twelfth.' },
      ],
    },
    {
      ai: 'Aïe. Bien vu, je corrige.',
      en: 'Ouch. Well spotted, I will correct it.',
      user: 'Pour le reste, elle est vraiment réussie. Tu me montres la suivante demain ?',
      userEn: 'For the rest, it is really successful. Will you show me the next one tomorrow?',
      alts: [
        { fr: 'Franchement, tu as fait le plus dur.', en: 'Frankly, you have done the hardest part.' },
        { fr: 'Elle va faire de l’effet dans la rue, ça, c’est certain.', en: 'It is going to make an impression in the street, that is certain.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['critique'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le début', 'Une critique bien dosée commence par...', ['ce qui marche', 'le problème le plus grave'], 0,
    'Ce qui marche, sincèrement. EN: what works.'),
  ctl('La suggestion', 'Je me demande si on ne gagnerait pas à couper... C’est...', ['une suggestion', 'un ordre', 'un compliment'], 0,
    'Une suggestion au conditionnel. EN: a suggestion.'),
  ctl('Le fait', 'Une erreur de date se dit...', ['nettement', 'avec trois précautions'], 0,
    'Un fait ne se nuance pas. EN: plainly.'),
], ['critique', 'fermete']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'La critique enveloppée',
    opener: {
      line: 'Un texte long, une fin floue, une date fausse : ici tu critiques de façon à être entendu, et tu laisses le fait à pleine lumière. EN: A long text, a vague ending, a wrong date: here you criticise so as to be heard, and leave the fact in full light.',
      imageRef: 'lessons/nuancer-oral/act08.jpg',
    },
    sections: [],
    milestone: 'Tu fais une critique en quatre temps et tu dis l’erreur de fait sans détour. EN: You give a four-step criticism and state the factual error plainly.',
    estScreens: 42, restPoints: ['a8-construire', 'a8-dictee'],
  },
  sections: [A8_LECTURE, A8_FOCUS, A8_CONSTRUIRE, A8_ERREURS, A8_DICTEE, A8_SCENARIO, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 · DIRE MOINS POUR DIRE PLUS
 *
 *  TEXT: colleagues after the opening night (listening). MOVE: litote and
 *  understatement in SPEECH, used and heard, with the Québec code (c'est
 *  pas pire). c1.17 owns connotation and c1.19 litote as a literary figure.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a9-ecoute', layer: 'core', hideLines: true,
  title: 'Après le vernissage', frSub: 'Écoute ce qui est dit à moitié',
  lines: [
    ln(E(1114)), ln(E(1115)), ln(E(1116)), ln(E(1117)),
    ln(E(1118)), ln(E(1119)), ln(E(1120)), ln(E(1121)),
  ],
  questions: [
    { q: '« Ce n’était pas mauvais du tout » : la soirée était...', opts: ['réussie', 'ratée', 'ennuyeuse'], correct: 0, why: 'La litote nie le contraire : c’était bien. La preuve, les gens sont restés. EN: it went well.' },
    { q: 'Le discours d’Hélène était-il un peu long, ou beaucoup trop ?', opts: ['beaucoup trop : des gens regardaient leur montre', 'à peine trop'], correct: 0, why: '« Un peu long, c’est gentil » : le collègue corrige la retenue. EN: far too long.' },
    { q: '« C’est pas pire », sur l’affiche de Sophie, c’est...', opts: ['un compliment, à la québécoise', 'une critique'], correct: 0, why: 'Au Québec, c’est pas pire veut dire c’est bien. EN: a compliment.' },
    { q: 'Le buffet était...', opts: ['médiocre', 'excellent'], correct: 0, why: '« Ce n’était pas terrible » : une litote vers le bas. EN: mediocre.' },
    { q: 'Une nouvelle soirée le mois prochain ?', opts: ['plutôt oui', 'non'], correct: 0, why: '« Je ne dis pas non » : un oui prudent. EN: probably yes.' },
  ],
  audio: REC('rec-c1-06-vernissage-ecoute'), say: REFRAME, terms: ['litote'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a9-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-critique',
  title: 'Quatre litotes de tous les jours', frSub: 'Nier le contraire',
  hint: 'Quatre cartes. Pour chacune, demande-toi : ça vaut plus, ou moins, que ce que ça dit ?',
  audio: AUDIO, say: REFRAME, terms: ['litote'],
  cards: [
    card(E(1110), 'Plus que ça n’en a l’air', 'c’est bon',
      'On nie le contraire par retenue : ce n’est pas mauvais du tout, c’est bon, parfois très bon. EN: it is good.'),
    card(E(1111), 'Un oui prudent', 'plutôt oui',
      'Tu acceptes sans t’engager tout à fait. EN: a cautious yes.'),
    card(E(1112), 'Québec', 'un compliment',
      'Familier, au Québec : c’est assez bien, souvent un vrai compliment. Ailleurs, on pourrait l’entendre comme une réserve. EN: Québec praise.'),
    card(E(1113), 'Vers le bas', 'c’est médiocre',
      'En France comme au Québec, pas terrible veut dire assez mauvais. EN: not great, in both.'),
  ],
};

const A9_DECODER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-decoder', layer: 'core', size: 'lg',
  title: 'Combien ça vaut vraiment', frSub: 'La retenue, dans les deux sens',
  groups: [
    grp('Dire moins pour adoucir un reproche', [
      it(E(1116), 'un peu long'),
      it('fr.c1.nuances-et-registres.065', 'laisse un peu à désirer'),
      it('fr.c1.nuances-et-registres.067', 'pas sa plus grande réussite'),
      it('fr.c1.nuances-et-registres.089', 'le moins qu’on puisse dire'),
    ], chk('« Disons que sa ponctualité laisse un peu à désirer. » Que comprends-tu ?', ['Il est souvent en retard.', 'Il est toujours à l’heure.'], 0,
      'La retenue minimise un défaut réel. EN: he is often late.')),
    grp('Dire moins pour faire un compliment', [
      it(E(1119), 'pas bête'),
      it(E(1115), 'pas mauvais du tout'),
      it('fr.c1.nuances-et-registres.105', 'au Québec'),
    ], chk('« Elle n’est pas bête, cette idée. » Que veut-on dire ?', ['Elle est bonne.', 'Elle est stupide.', 'Elle est banale.'], 0,
      'Nier le contraire : pas bête, donc intelligente. EN: it is a good idea.')),
    ctl('Le ton', '« Un peu long, c’est gentil. » Que fait le collègue ?',
      ['Il dit que la retenue cachait un vrai problème.', 'Il trouve le discours court.'], 0,
      'Il démonte la litote : c’était beaucoup trop long. EN: he exposes the understatement.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['litote'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a9-erreurs', layer: 'core', swipe: true, size: 'lg', sheetId: 'sheet-critique',
  title: 'Quatre litotes qui ratent',
  errors: [
    { wrong: 'Ce n’est pas mauvais de tout.', right: fr(E(1110)),
      why: 'On entend presque pareil, mais c’est pas du tout qui renforce la négation. EN: du tout.' },
    { wrong: 'Il n’est pas bête, cette idée de bande bleue.', right: fr(E(1119)),
      why: 'À l’oral, on pense « c’est pas bête » et on oublie l’accord. Le pronom reprend idée, féminin : elle. EN: agreement with idée.' },
    { wrong: 'Votre plan n’est pas complètement idiot.', right: 'Votre plan a de vraies qualités.',
      why: 'Grammaticalement juste ; mais une litote avec un mot négatif fort, adressée à un supérieur, sonne condescendante. Dis la qualité. EN: correct, but condescending.' },
    { wrong: 'C’est pas pire ? Tu n’aimes pas mon affiche, alors.', right: 'Merci, ça me fait plaisir.',
      why: 'Lu à la française, pas pire semble tiède. Au Québec, c’est un compliment : remercie. EN: in Québec it is praise.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['litote'],
};

const A9_ATOI = aToi('a9-atoi', 'Dire moins, au bon moment', [
  ctl('Un compliment retenu', 'Le texte de Karim est bon ; tu veux le dire avec retenue, entre collègues :',
    ['Ce n’est pas mauvais du tout, ton texte.', 'Ton texte n’est pas terrible.'], 0,
    'Pas mauvais du tout, c’est bon ; pas terrible, c’est médiocre. EN: positive litote.'),
  ctl('Un reproche adouci', 'La réunion a duré trois heures ; tu le dis à un collègue, sans t’emporter :',
    ['La réunion était, disons, un peu longue.', 'La réunion était un tant soit peu longue.', 'La réunion était interminable, franchement.'], 0,
    'La retenue : disons, un peu. EN: understatement.'),
  ctl('Une invitation', 'On te propose de refaire une soirée ; tu es plutôt partant, sans t’engager :',
    ['Je ne dis pas non.', 'Je dis non.'], 0,
    'Un oui prudent. EN: a cautious yes.'),
], ['litote']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('La litote', '« Ce n’est pas mauvais du tout » veut dire...', ['c’est bon', 'c’est mauvais'], 0,
    'Nier le contraire. EN: it is good.'),
  ctl('Québec', 'Au Québec, « c’est pas pire » est...', ['un compliment', 'une insulte', 'une question'], 0,
    'C’est assez bien. EN: praise.'),
  ctl('Vers le bas', '« Ce n’était pas terrible » veut dire...', ['c’était médiocre', 'c’était excellent'], 0,
    'Une litote vers le bas. EN: mediocre.'),
], ['litote']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Dire moins pour dire plus',
    opener: {
      line: 'Après le vernissage, personne ne dit « c’était bien » ni « c’était long » : ici tu dis moins pour faire entendre plus, et tu entends ce que disent les autres. EN: After the opening, nobody says « it was good » or « it was long »: here you say less to make more heard, and hear what others mean.',
      imageRef: 'lessons/nuancer-oral/act09.jpg',
    },
    sections: [],
    milestone: 'Tu utilises et tu décodes la litote et la retenue, codes du Québec compris. EN: You use and decode litote and understatement, Québec codes included.',
    estScreens: 32, restPoints: ['a9-decoder'],
  },
  sections: [A9_ECOUTE, A9_CARTES, A9_DECODER, A9_ERREURS, A9_ATOI, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 · LA BONNE DOSE
 *
 *  TEXT: two versions of one voice message to the printer (reading). MOVE:
 *  dosage. One hedge per doubt; facts, dates, safety limits and the request
 *  itself said plainly. Goes past b2.22's over-hedged WRITTEN sentence.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a10-lecture', layer: 'core', questionsInModal: true,
  title: 'Deux messages à l’imprimerie', frSub: 'Le même problème, deux doses',
  text: DOSE_TEXT,
  glossary: [
    { word: 'noyé', en: 'drowned', note: 'Du verbe noyer : l’information disparaît sous les précautions.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « se confond presque avec le noir ». Que se passe-t-il ?', a: 'On ne distingue presque plus le bleu du noir : la bande de la rivière ne se voit plus.' },
    { q: 'Combien de précautions compte la version A avant le problème ?', a: 'Quatre : je ne voudrais pas déranger, c’est peut-être moi, il me semble que, peut-être.' },
    { q: 'Quelle nuance la version B garde-t-elle, et où ?', a: 'Une seule supposition : il doit y avoir eu un souci de réglage, pour ne pas accuser l’imprimeur.' },
    { q: 'Qu’est-ce que la version B ne nuance pas ?', a: 'Le fait (le bleu est plus foncé que l’épreuve), la date (avant le huit) et la demande (rappelez-moi aujourd’hui).' },
    { q: 'Pourquoi la version A n’a-t-elle reçu aucune réponse ?', a: 'Elle ne disait ni quoi faire ni pour quand : la demande était noyée.' },
  ],
  audio: REC('rec-c1-06-dose'), say: REFRAME, terms: ['dosage', 'fermete'],
};

const A10_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a10-tableau', layer: 'core', sheetId: 'sheet-dose',
  title: 'Nuancer, ou pas', frSub: 'Six choses à dire au téléphone',
  cols: ['Ce que tu dis', 'Nuancer ?', 'Comment'],
  rows: [
    { cells: ['un avis', 'oui', 'une incise'], say: fr(E(1103)),
      detail: { title: 'Ton avis', body: 'C’est ton jugement : me semble-t-il, gagnerait à. EN: your opinion, softened once.', say: fr(E(1103)) } },
    { cells: ['une suggestion', 'oui', 'au conditionnel'], say: fr(E(1101)),
      detail: { title: 'Ta suggestion', body: 'L’autre décide : je me demande si on ne gagnerait pas à. EN: they decide.', say: fr(E(1101)) } },
    { cells: ['un souvenir incertain', 'oui, une fois', 'si je ne m’abuse'], say: fr(E(1017)),
      detail: { title: 'Un souvenir', body: 'Une seule incise, près du fait incertain. EN: one aside.', say: fr(E(1028)) } },
    { cells: ['un fait vérifié', 'non', 'nettement'], say: fr(E(1124)),
      detail: { title: 'Le fait', body: 'Ce qui se voit et se vérifie se dit tel quel. EN: plain facts.', say: fr(E(1124)) } },
    { cells: ['une limite de sécurité', 'non', 'la norme, telle quelle'], say: fr(E(1154)),
      detail: { title: 'La limite', body: 'Une norme ne se négocie pas : tu la dis, puis tu proposes. EN: a norm, then a proposal.', say: fr(E(1154)) } },
    { cells: ['ta demande', 'la forme, pas le fond', 'quoi, pour quand'], say: fr(E(1127)),
      detail: { title: 'La demande', body: 'La formule peut être soutenue ; l’objet et la date restent nets. EN: polite form, clear content.', say: fr(E(1126)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['dosage', 'fermete'],
};

const A10_REECRIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-reecrire', layer: 'core', size: 'lg',
  title: 'Une nuance par doute', frSub: 'Compter les doutes, pas les mots',
  groups: [
    grp('Ce qui est dit nettement', [
      it(E(1124), 'le fait'),
      it(E(1126), 'la date'),
      it(E(1127), 'la demande'),
    ], chk('Dans la version B, combien de précautions entourent le fait ?', ['aucune', 'quatre'], 0,
      'Le fait se dit tel quel ; la seule nuance porte sur la cause. EN: none.')),
    grp('L’excès, à l’écrit et à l’oral', [
      it('fr.b2.universite.1095', `l’excès écrit, ${ACADEMIQUE_REF}`),
      free('Je ne voudrais surtout pas vous déranger, et c’est peut-être moi qui me trompe, mais il me semble que, peut-être...', 'I would not want to bother you at all, and maybe I am wrong, but it seems to me that, maybe...', 'l’excès oral, version A'),
      it(E(1131), 'l’effet'),
    ], chk('Que risque un message trop précautionneux ?', ['On n’entend plus la demande, ou on croit à de l’ironie.', 'On le trouve plus clair.', 'On rappelle plus vite.'], 0,
      'Trop de précautions noient l’information. EN: the request disappears.')),
    ctl('Compter', '« Il me semble que, peut-être, c’est un petit peu foncé. » Combien de doutes réels ?',
      ['un, sur la couleur', 'trois'], 0,
      'Un doute, donc une nuance : le bleu me semble plus foncé que prévu. EN: one doubt, one hedge.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['dosage'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a10-piege', layer: 'core', swipe: true, sheetId: 'sheet-dose',
  title: 'Six phrases trop enrobées',
  rule: {
    title: 'Une nuance par doute, et le fait à pleine lumière',
    body: 'Chaque précaution est correcte. Empilées, elles noient l’information et peuvent sonner ironiques. Garde une nuance là où tu doutes vraiment, et dis nettement le fait, la date et la demande. EN: stacked hedges drown the message.',
  },
  cards: [
    trap('le fait noyé', 'Il me semble que, peut-être, le bleu serait un petit peu plus foncé que prévu.', E(1124), 'Tu l’as vu : dis-le nettement. EN: say the fact.'),
    trap('la cause accusée', 'C’est votre machine qui a mal fait le travail, évidemment.', E(1125), 'Une supposition avec devoir ménage l’imprimeur. EN: suppose, do not accuse.'),
    trap('la date floue', 'Si jamais, éventuellement, un nouveau tirage était possible un jour…', E(1126), 'Sans date, personne n’agit. EN: give the date.'),
    trap('la demande enrobée', 'Si vous aviez peut-être un moment, à l’occasion, pour me rappeler, enfin, si ça ne vous dérange pas…', E(1127), 'Une formule soutenue suffit, avec un moment précis. EN: one formula, one time.'),
    trap('l’objet caché', 'Oui, bonjour, euh, je voulais juste, enfin, c’est à propos de, comment dire…', E(1132), 'L’objet d’abord : je vous appelle au sujet de. EN: state the purpose.'),
    trap('la fin qui s’excuse', 'Voilà, désolée encore, vraiment, pardon pour le dérangement…', E(1133), 'Finis sur ce qui aide l’autre : quand te joindre. EN: end on what helps.'),
  ],
  drill: [
    { promptSay: 'Le bleu est ... plus foncé que sur l’épreuve.', opts: ['nettement', 'peut-être un petit peu, il me semble,'], correct: 0 },
    { promptSay: 'Il ... y avoir eu un souci de réglage.', opts: ['doit', 'aurait peut-être pu éventuellement'], correct: 0 },
    { promptSay: 'Nous aurions besoin d’un nouveau tirage ... .', opts: ['avant le huit', 'un de ces jours, si jamais'], correct: 0 },
    { promptSay: 'Je vous saurais gré de me rappeler ... .', opts: ['aujourd’hui, si possible', 'à l’occasion, éventuellement, peut-être'], correct: 0 },
    { promptSay: 'Je vous appelle ... des affiches livrées ce matin.', opts: ['au sujet', 'enfin, euh, c’est à propos'], correct: 0 },
    { promptSay: 'Je reste ... tout l’après-midi.', opts: ['disponible', 'peut-être un peu disponible'], correct: 0 },
    { promptSay: 'La salle accueille ... cent quatre-vingts personnes.', opts: ['au maximum', 'il me semble, peut-être,'], correct: 0 },
    { promptSay: 'Le titre, ..., est un peu petit.', opts: ['me semble-t-il', 'me semble-t-il, si je ne m’abuse, peut-être'], correct: 0 },
  ],
  steps: TRAP_STEPS,
  audio: REC('rec-c1-06-piege-dose'), say: REFRAME, terms: ['dosage', 'fermete'],
};

const A10_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a10-dictee', layer: 'core',
  title: 'Écris le fait, sans enrobage',
  itemIds: dicteeFor(10),
  audio: AUDIO, say: REFRAME, terms: ['fermete'],
};

const A10_ATOI = aToi('a10-atoi', 'La dose de ton message', [
  ctl('Le début', 'Ton message vocal commence. La meilleure première phrase :',
    ['Je vous appelle au sujet de la soirée d’ouverture.', 'Je ne voudrais surtout pas vous déranger, c’est peut-être moi, mais…'], 0,
    'L’objet d’abord. EN: the purpose first.'),
  ctl('La limite', 'La salle accueille cent quatre-vingts personnes au maximum. Tu dis :',
    ['La salle accueille au maximum cent quatre-vingts personnes.', 'Il me semble que la salle accueillerait peut-être cent quatre-vingts personnes.'], 0,
    'Une norme se dit nettement. EN: say the norm plainly.'),
  ctl('La critique', 'Tu trouves le discours trop long :',
    ['Le discours, me semble-t-il, gagnerait à être plus court.', 'Le discours, me semble-t-il, si je ne m’abuse, gagnerait peut-être éventuellement à être plus court.', 'Le discours est trop long, point.'], 0,
    'Une nuance pour un avis, pas quatre, pas zéro. EN: one hedge for an opinion.'),
], ['dosage', 'fermete']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La règle', 'Combien de nuances par doute ?', ['une', 'le plus possible'], 0,
    'Une nuance par doute. EN: one.'),
  ctl('Le fait', 'Une limite de sécurité, tu la...', ['dis nettement', 'nuances trois fois'], 0,
    'Ce qui est établi se dit tel quel. EN: plainly.'),
  ctl('L’effet', 'Trop de précautions peuvent sonner...', ['ironiques ou embarrassées', 'plus claires', 'plus courtes'], 0,
    'Elles noient le message. EN: ironic or awkward.'),
], ['dosage', 'fermete']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'La bonne dose',
    opener: {
      line: 'Deux messages, le même problème, une seule réponse : ici tu apprends ce qui se nuance, et ce qui se dit en pleine lumière. EN: Two messages, the same problem, a single reply: here you learn what to hedge and what to say in full light.',
      imageRef: 'lessons/nuancer-oral/act10.jpg',
    },
    sections: [],
    milestone: 'Tu mets une nuance par doute et tu dis nettement le fait, la date et la demande. EN: You put one hedge per doubt and state the fact, the date and the request plainly.',
    estScreens: 40, restPoints: ['a10-tableau', 'a10-piege'],
  },
  sections: [A10_LECTURE, A10_TABLEAU, A10_REECRIRE, A10_PIEGE, A10_DICTEE, A10_ATOI, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 · ENTENDRE LA NUANCE DES AUTRES
 *
 *  TEXT: Théo Brunet calls back from Lyon (listening). MOVE: decode the
 *  polite non-answer (c'est intéressant, il faudrait voir, je vais y
 *  réfléchir, ce n'est pas exclu, nous en reparlerons), then reformulate
 *  and ask for a date.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a11-ecoute', layer: 'core', hideLines: true,
  title: 'Le rappel de Lyon', frSub: 'Écoute ce qui est oui, et ce qui ne l’est pas',
  lines: [
    ln(E(1136)), ln(E(1137)), ln(E(1138)), ln(E(1139)),
    ln(E(1140)), ln(E(1141)), ln(E(1142)),
  ],
  questions: [
    { q: 'Sur quel point Théo Brunet dit-il clairement oui ?', opts: ['la date du vingt avril', 'les vitrines', 'l’assurance'], correct: 0, why: '« C’est entendu, aucun problème » : le seul oui net. EN: the date.' },
    { q: '« C’est intéressant comme idée », à propos des vitrines, c’est...', opts: ['plutôt une réserve', 'un accord enthousiaste'], correct: 0, why: 'Suivi de « il faudrait voir » et « je vais y réfléchir » : une réserve. EN: a reservation.' },
    { q: 'La prolongation est-elle acceptée ?', opts: ['Non : elle n’est pas exclue, mais pas avant l’été.', 'Oui, sans condition.'], correct: 0, why: '« Ce n’est pas exclu » ouvre une porte, la condition la referme presque. EN: barely possible.' },
    { q: 'Que faut-il faire après cet appel ?', opts: ['reformuler et demander une date', 'considérer que tout est accepté', 'abandonner les vitrines'], correct: 0, why: 'Les réponses floues se clarifient en reformulant et en demandant quand. EN: rephrase and ask for a date.' },
  ],
  audio: REC('rec-c1-06-lyon-ecoute'), say: REFRAME, terms: ['nondit'],
};

const A11_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a11-exemples', layer: 'core', sheetId: 'sheet-dose',
  title: 'Ce que veulent dire les réponses floues', frSub: 'Six réponses, et ce qu’on y entend',
  examples: [
    ex('fr.c1.nuances-et-registres.096', 'C’est intéressant : souvent, l’autre n’y croit pas.'),
    ex('fr.c1.nuances-et-registres.124', 'On en reparlera : souvent un non différé.'),
    ex(E(1134), 'Il faudrait voir : rien n’est promis.'),
    ex(E(1135), 'Ce n’est pas exclu : une possibilité faible.'),
    ex('fr.c1.francais-professionnel-avance.140', 'Ce n’est pas faux : l’accord est partiel.'),
    ex(E(1144), 'Je vais y réfléchir : oui plus tard, ou non maintenant.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['nondit'],
};

const A11_DECODER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-decoder', layer: 'core', size: 'lg',
  title: 'Oui, non, ou pas encore', frSub: 'Trier les réponses de Lyon',
  groups: [
    grp('Un oui net', [
      it(E(1137), 'la date'),
      it(E(1136), 'le message reçu'),
    ], chk('Qu’est-ce qui rend ce oui net ?', ['Une réponse précise, sans réserve : c’est entendu.', 'Le ton aimable.'], 0,
      'Un oui net nomme ce qu’il accepte. EN: it names what it accepts.')),
    grp('Ni oui ni non', [
      it(E(1138), 'c’est intéressant'),
      it(E(1139), 'il faudrait voir'),
      it(E(1140), 'pas exclu, mais'),
      it(E(1141), 'nous en reparlerons'),
    ], chk('Ces réponses, prises ensemble, ressemblent plutôt à...', ['un non poli, à vérifier', 'un oui enthousiaste'], 0,
      'Accumulées, elles préparent souvent un refus. EN: a polite no, to be checked.')),
    ctl('La réponse', 'Que dis-tu après « je vais y réfléchir » ?',
      ['Je vous rappelle jeudi, cela vous laisse le temps ?', 'Parfait, c’est donc d’accord.', 'Tant pis, n’en parlons plus.'], 0,
      'Une date transforme le flou en rendez-vous. EN: turn vagueness into a date.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['nondit'],
};

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a11-erreurs', layer: 'core', swipe: true, size: 'lg', sheetId: 'sheet-dose',
  title: 'Quatre réponses prises au mot',
  errors: [
    { wrong: 'Il trouve l’idée intéressante, donc les vitrines sont acceptées.', right: 'Il trouve l’idée intéressante, mais il n’a rien accepté : je dois lui redemander.',
      why: 'En anglais aussi, interesting peut être poli. Ici, il est suivi de « il faudrait voir » : une réserve. EN: polite, not a yes.' },
    { wrong: 'Ce n’est pas exclu : la prolongation est donc acquise.', right: 'Ce n’est pas exclu, mais pas avant l’été : la prolongation reste incertaine.',
      why: 'Pas exclu veut dire possible, pas promis. EN: possible, not promised.' },
    { wrong: 'Il va y réfléchir : j’attends qu’il rappelle.', right: fr(E(1145)),
      why: 'Attendre est naturel, mais sans date, la réflexion peut durer toujours. Propose un moment. EN: ask for a date.' },
    { wrong: 'Nous en reparlerons : il a dit oui pour l’assurance.', right: 'Nous en reparlerons : l’assurance n’est pas réglée.',
      why: 'Remettre à plus tard n’est pas accepter. EN: postponing is not agreeing.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['nondit'],
};

/** USE, out loud: you call Théo Brunet back to clarify. Vous. ONE
 *  APOSTROPHE STYLE (’) in every turn and alt. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a11-scenario', layer: 'core',
  title: 'À toi : tu rappelles Lyon',
  setting: 'Jeudi, tu rappelles Théo Brunet pour clarifier sa réponse sur les vitrines et l’assurance. Tu le vouvoies. Tu veux des réponses nettes, sans le brusquer.',
  turns: [
    {
      ai: 'Bonjour. Je n’ai pas encore beaucoup avancé, je l’avoue.',
      en: 'Hello. I have not made much progress yet, I admit.',
      user: 'Je comprends. Si je vous comprends bien, les vitrines posent un problème à votre conservatrice ?',
      userEn: 'I understand. If I understand you correctly, the glass cases are a problem for your curator? (Reformulate the vague answer.)',
      alts: [
        { fr: 'Aucun souci. Pour les vitrines, est-ce plutôt une question de principe, ou de conservation ?', en: 'No problem. For the glass cases, is it more a question of principle, or of conservation?' },
        { fr: 'Je vous en prie. Si j’ai bien compris, les vitrines vous inquiètent un peu ?', en: 'Not at all. If I understood correctly, the glass cases worry you a little?' },
      ],
    },
    {
      ai: 'Disons qu’elle préfère que le public voie les maquettes de près.',
      en: 'Let us say she prefers the public to see the models up close.',
      user: 'C’est tout à fait compréhensible. Des vitrines basses, à hauteur des yeux, pourraient-elles lui convenir ?',
      userEn: 'That is entirely understandable. Could low cases, at eye level, suit her? (Propose a way through.)',
      alts: [
        { fr: 'Je comprends. Et si nous lui envoyions les plans des vitrines ?', en: 'I understand. And what if we sent her the plans of the cases?' },
        { fr: 'Ce serait peut-être plus simple qu’elle voie un modèle : je peux envoyer des photos.', en: 'It might be simpler for her to see an example: I can send photos.' },
      ],
    },
    {
      ai: 'Ce n’est pas exclu. Il faudrait voir.',
      en: 'It is not ruled out. We would have to see.',
      user: 'Je vous envoie les plans aujourd’hui. Seriez-vous en mesure de me donner sa réponse d’ici mardi ?',
      userEn: 'I will send you the plans today. Would you be in a position to give me her answer by Tuesday? (Turn « il faudrait voir » into a date.)',
      alts: [
        { fr: 'Très bien : je vous transmets les plans ce soir, et je vous rappelle mardi, si cela vous convient.', en: 'Very well: I will send the plans tonight and call you back on Tuesday, if that suits you.' },
        { fr: 'Pourrions-nous fixer une date pour sa réponse ? Mardi, par exemple ?', en: 'Could we set a date for her answer? Tuesday, for example?' },
      ],
    },
    {
      ai: 'Mardi, c’est possible. Et pour l’assurance, nous en reparlerons.',
      en: 'Tuesday is possible. And as for the insurance, we will talk about it again.',
      user: 'Volontiers ; il me faudrait toutefois les valeurs avant la fin du mois, pour notre assureur.',
      userEn: 'Gladly; I would, however, need the values before the end of the month, for our insurer. (The deadline stays firm.)',
      alts: [
        { fr: 'Bien sûr. Je me permets simplement de rappeler que notre assureur attend les valeurs à la fin du mois.', en: 'Of course. I would just point out that our insurer expects the values at the end of the month.' },
        { fr: 'D’accord ; la fin du mois reste notre limite pour les valeurs.', en: 'All right; the end of the month remains our deadline for the values.' },
      ],
    },
    {
      ai: 'Entendu, vous les aurez.',
      en: 'Understood, you will have them.',
      user: 'Merci beaucoup. Je récapitule par courriel : les plans aujourd’hui, votre réponse mardi, les valeurs avant la fin du mois.',
      userEn: 'Thank you very much. I will sum up by email: the plans today, your answer on Tuesday, the values before the end of the month. (Who, what, when.)',
      alts: [
        { fr: 'Parfait. Je vous envoie un petit récapitulatif tout à l’heure.', en: 'Perfect. I will send you a short summary shortly.' },
        { fr: 'Merci. Donc : mardi pour les vitrines, fin du mois pour l’assurance.', en: 'Thank you. So: Tuesday for the glass cases, end of the month for the insurance.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['nondit'],
};

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Intéressant', '« C’est intéressant », sans suite, c’est souvent...', ['une réserve polie', 'un accord ferme'], 0,
    'À vérifier avant de compter dessus. EN: a polite reservation.'),
  ctl('Pas exclu', '« Ce n’est pas exclu » veut dire...', ['possible, pas promis', 'certain', 'interdit'], 0,
    'Une possibilité ouverte. EN: possible.'),
  ctl('Que faire', 'Devant une réponse floue, tu...', ['reformules et demandes une date', 'attends sans rien dire'], 0,
    'Une date transforme le flou en rendez-vous. EN: rephrase, ask for a date.'),
], ['nondit']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Entendre la nuance',
    opener: {
      line: 'Lyon rappelle avec un oui et beaucoup de peut-être : ici tu entends ce que les nuances des autres veulent dire, et tu leur demandes une date. EN: Lyon calls back: one yes and many maybes: here you hear what other people’s hedges mean, and ask them for a date.',
      imageRef: 'lessons/nuancer-oral/act11.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais un non poli et tu transformes une réponse floue en rendez-vous. EN: You recognise a polite no and turn a vague answer into a date.',
    estScreens: 34, restPoints: ['a11-decoder'],
  },
  sections: [A11_ECOUTE, A11_EXEMPLES, A11_DECODER, A11_ERREURS, A11_SCENARIO, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 · À TOI DE NUANCER
 *
 *  An annotated model on a DIFFERENT case (a catalogue note from Lyon), the
 *  plan, a rehearsal by phone, THE TASK (a spoken voice message to Hélène,
 *  graded on dosage and register), then the closing sections and the quiz.
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_MODELE: Sec<'reading'> = {
  type: 'reading', id: 'a12-modele', layer: 'core', questionsInModal: true,
  title: 'Un message modèle', frSub: 'La notice du catalogue',
  text: MODELE_TEXT,
  glossary: [
    { word: 'resserrée', en: 'tightened, shortened', note: 'Plus courte et plus dense, sans perdre l’essentiel.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « quitte à garder la version longue pour notre site ». Que propose la personne ?', a: 'Couper dans le catalogue, même si cela veut dire mettre la version longue ailleurs, sur le site.' },
    { q: 'Quelles critiques sont nuancées, et comment ?', a: 'La longueur (il me semble que, gagnerait à) et le vocabulaire (me semble-t-il), chacune avec une suggestion.' },
    { q: 'Quel point n’est pas nuancé, et pourquoi ?', a: 'La date du transport : elle ne dépend pas de l’Institut, c’est une contrainte, pas un avis.' },
    { q: 'Comment la personne explique-t-elle l’erreur de date sans accuser ?', a: 'Avec devoir et un pari : la date doit venir d’un ancien calendrier ; il y a fort à parier que le courriel n’est pas arrivé.' },
    { q: 'Comment le message se termine-t-il ?', a: 'Par une demande précise avec une date (je vous saurais gré de... d’ici la fin de la semaine), une porte ouverte et un remerciement.' },
  ],
  audio: REC('rec-c1-06-modele'), say: REFRAME, terms: ['grille', 'dosage'],
};

/** The annotation: which line meets which criterion of the grid. */
const A12_ANNOTE: Sec<'examples'> = {
  type: 'examples', id: 'a12-annote', layer: 'core',
  title: 'Le modèle, annoté', frSub: 'Six phrases, six critères',
  examples: [
    ex(E(1147), 'Tâche : ce qui marche, d’abord, et précisément.'),
    ex(E(1148), 'Dosage : une critique, une nuance, une suggestion.'),
    ex(E(1149), 'Précision : la critique est cadrée, pas étendue.'),
    ex(E(1150), 'Dosage : le point ferme, sans aucune précaution.'),
    ex(E(1151), 'Registre : une supposition qui n’accuse personne.'),
    ex(E(1152), 'Registre : la demande soutenue, avec une date.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['grille'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-dose',
  title: 'Sept temps pour ton message',
  steps: [
    '1. Présente-toi et dis l’objet : je vous appelle au sujet de... EN: say who you are and why you call.',
    '2. Reconnais ce qui marche, précisément. EN: acknowledge what works.',
    '3. Dis le point ferme, nettement : celui-là ne se discute pas. EN: state the firm point plainly.',
    '4. Fais deux critiques dosées, chacune avec une suggestion. EN: two dosed criticisms with suggestions.',
    '5. Explique une erreur par une supposition, sans accuser : ce chiffre doit venir de... EN: explain an error without blame.',
    '6. Fais une demande précise et datée : je vous saurais gré de... avant jeudi. EN: a precise, dated request.',
    '7. Laisse une porte ouverte et termine. EN: leave the door open and close.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['grille', 'fermete'],
};

/** Say it out loud: Hélène calls back after your message. Vous. ONE
 *  APOSTROPHE STYLE (’) in every turn and alt; no imported row. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core',
  title: 'Hélène te rappelle',
  setting: 'Hélène a écouté ton message sur la soirée d’ouverture. Elle te rappelle. Elle tient à ses deux cent cinquante invités et à son discours. Tu la vouvoies ; tu restes ferme sur la sécurité, souple sur le reste.',
  turns: [
    {
      ai: 'J’ai bien eu votre message. Deux cent cinquante invités, c’est vraiment impossible ?',
      en: 'I got your message. Two hundred and fifty guests, is it really impossible?',
      user: 'Dans la grande salle, oui : la norme est de cent quatre-vingts personnes au maximum.',
      userEn: 'In the main hall, yes: the limit is one hundred and eighty people at most. (The firm point, unhedged.)',
      alts: [
        { fr: 'Malheureusement, oui : la salle est limitée à cent quatre-vingts personnes.', en: 'Unfortunately, yes: the hall is limited to one hundred and eighty people.' },
        { fr: 'Là-dessus, nous n’avons pas de marge : cent quatre-vingts, c’est la norme de sécurité.', en: 'On that, we have no leeway: one hundred and eighty is the safety limit.' },
      ],
    },
    {
      ai: 'C’est ennuyeux. J’ai déjà promis des invitations.',
      en: 'That is awkward. I have already promised invitations.',
      user: 'Je comprends. Et si nous ouvrions aussi la petite salle, avec un écran pour le discours ?',
      userEn: 'I understand. And what if we also opened the small hall, with a screen for the speech? (Acknowledge, then propose.)',
      alts: [
        { fr: 'Il y a peut-être une solution : la petite salle, en même temps, avec le discours retransmis.', en: 'There may be a solution: the small hall at the same time, with the speech relayed.' },
        { fr: 'Je me demande si une deuxième séance, à vingt heures, ne réglerait pas la question.', en: 'I wonder whether a second session at eight would not settle the question.' },
      ],
    },
    {
      ai: 'Pourquoi pas. Et mon discours, vous le trouvez trop long ?',
      en: 'Why not. And my speech, do you find it too long?',
      user: 'Vingt minutes debout, c’est un peu long, disons ; dix minutes garderaient l’attention de tout le monde.',
      userEn: 'Twenty minutes standing is a little long, let us say; ten minutes would keep everyone’s attention. (Understatement, then a suggestion.)',
      alts: [
        { fr: 'Le contenu est très bien ; c’est la durée, me semble-t-il, qui risque de lasser.', en: 'The content is very good; it is the length, it seems to me, that may tire people.' },
        { fr: 'Je ne dis pas qu’il faut le couper en deux ; je dis que les invités seront debout.', en: 'I am not saying it should be cut in half; I am saying the guests will be standing.' },
      ],
    },
    {
      ai: 'Bon, je vais y réfléchir.',
      en: 'Well, I will think about it.',
      user: 'Bien sûr. Je vous en reparle lundi, si cela vous convient, pour fixer le programme.',
      userEn: 'Of course. I will raise it again with you on Monday, if that suits you, to fix the programme. (Turn the vague answer into a date.)',
      alts: [
        { fr: 'Volontiers. Pourrions-nous en reparler lundi matin ?', en: 'Gladly. Could we talk about it again on Monday morning?' },
        { fr: 'Très bien ; je vous propose qu’on en reparle lundi.', en: 'Very well; I suggest we talk about it again on Monday.' },
      ],
    },
    {
      ai: 'Lundi, d’accord. Et le formulaire d’assurance ?',
      en: 'Monday, fine. And the insurance form?',
      user: 'Il est sur votre bureau ; je vous saurais gré de le signer avant jeudi.',
      userEn: 'It is on your desk; I would be grateful if you could sign it before Thursday. (The formal request, with its date.)',
      alts: [
        { fr: 'Je l’ai déposé ce matin. Il faudrait votre signature avant jeudi.', en: 'I dropped it off this morning. Your signature would be needed before Thursday.' },
        { fr: 'Sur votre bureau, dans la pochette bleue ; avant jeudi, si possible.', en: 'On your desk, in the blue folder; before Thursday, if possible.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['dosage', 'fermete'],
};

/** THE GRADED TASK, spoken. No live speech grading exists: the learner
 *  records, then self-checks against the annotated model and the grid. */
const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Un message vocal bien dosé',
  frSub: 'Oral · message vocal à ta directrice',
  brief: `Tu travailles à l’Institut Verlune. Hélène Marchand, ta directrice, a envoyé ce message à l’équipe :\n\n${TASK_DOC}\n\n${TASK_FACTS}\n\nLaisse-lui un message vocal. Tu la vouvoies. Remercie-la et reconnais ce qui marche, dis nettement ce qui ne se discute pas, fais deux critiques dosées avec une suggestion chacune, explique une erreur sans accuser personne, fais une demande précise et datée, puis termine. Prépare d’abord quelques phrases clés, puis parle.`,
  briefEn: 'You work at the Institut Verlune. Your director, Hélène Marchand, has sent the team the message above, and you know three facts it does not take into account. Leave her a voice message, using vous: thank her and acknowledge what works, state plainly what is not negotiable, make two dosed criticisms with a suggestion each, explain an error without blaming anyone, make a precise, dated request, then close. Prepare a few key lines first, then speak.',
  produce: 'Enregistre un message de deux à quatre minutes : un point ferme dit sans nuance, deux critiques dosées avec leur suggestion, une supposition avec devoir, une demande avec je vous saurais gré de et une date, et une fin.',
  responseSpec: { kind: 'audio', minDurationS: 120, maxDurationS: 240 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réaliser la tâche',
        maxPoints: 4,
        descriptors: [
          '4 : Tout y est : l’objet, ce qui marche, la capacité de la salle, deux critiques avec suggestion (la visite des écoles, le discours ou le buffet), la signature avant jeudi, une fin. Rien d’inventé.',
          '3 : Tout y est, mais une suggestion manque, ou la demande n’a pas de date.',
          '2 : Il manque un élément important : la capacité, les écoles ou la signature.',
          '1 : Le message ne répond pas au projet d’Hélène, ou il invente des faits.',
        ],
      },
      {
        key: 'dosage',
        label: 'Le dosage',
        maxPoints: 4,
        descriptors: [
          '4 : Une nuance par doute ; la capacité, la date et la demande sont dites nettement ; aucune précaution empilée.',
          '3 : Le dosage est bon, mais une phrase empile deux ou trois précautions, ou un fait est légèrement adouci.',
          '2 : Le message est trop direct (des verdicts) ou trop enrobé (on cherche ce que tu demandes).',
          '1 : Aucune nuance, ou tant de précautions que le message ne dit plus rien.',
        ],
      },
      {
        key: 'registre',
        label: 'Le registre et les égards',
        maxPoints: 3,
        descriptors: [
          '3 : Vous du début à la fin, une demande soutenue (je vous saurais gré de), une erreur expliquée sans accuser (devoir, un malentendu), aucune ironie involontaire.',
          '2 : Le registre est juste, mais une formule est trop familière ou trop haute pour la situation.',
          '1 : Tu passes au tu, tu accuses Hélène, ou le ton devient sec.',
        ],
      },
      {
        key: 'precision',
        label: 'Précision et nuance des formules',
        maxPoints: 3,
        descriptors: [
          '3 : Les formules de la leçon sont là, variées et justes : une incise, un pari, devoir qui suppose, gagner à, je me demande si, une litote ou une retenue.',
          '2 : Quelques formules, souvent les mêmes.',
          '1 : Un vocabulaire de base qui ne permet pas de nuancer.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 3,
        descriptors: [
          '3 : Les structures difficiles sont justes : je vous saurais gré (jamais serais), il y a fort à parier + indicatif, il doit y avoir, le conditionnel des suggestions.',
          '2 : Quelques erreurs sur ces structures, sans gêner la compréhension.',
          '1 : Des erreurs fréquentes qui gênent la compréhension.',
        ],
      },
      {
        key: 'prononciation',
        label: 'Prononciation et intonation (vérifie toi-même)',
        maxPoints: 3,
        descriptors: [
          '3 : En te réécoutant : les incises sur un ton plus bas, le point ferme posé calmement, saurais bien distinct de serais, un débit régulier.',
          '2 : Quelques hésitations, mais on te comprend sans effort.',
          '1 : Il faut faire un effort pour te suivre.',
        ],
      },
    ],
  },
  scaffold: [
    'Bonjour Hélène, je vous appelle au sujet de...',
    'Merci de nous consulter :',
    'J’ai un point ferme, et deux suggestions.',
    'La capacité de la salle, elle,',
    'Le chiffre de... doit venir de...',
    'Je me demande si nous ne gagnerions pas à...',
    '..., me semble-t-il,',
    'Je vous saurais gré de... avant jeudi.',
    'Si vous le souhaitez, nous pouvons en parler...',
  ],
  modelAnswer: TASK_MODEL,
  modelAnswerEn: 'Hello Hélène, it is me, about your message on the opening night. Thank you for consulting us. I really like the programme, and the idea of a free visit after the speech is excellent: the guests will see the exhibition at their own pace.\nI have one firm point and two suggestions. The firm point first. The capacity of the hall is not up for discussion: one hundred and eighty people, under the safety rules. The figure of two hundred and fifty must come from the old hall. So we would need to shorten the list, or open the small hall at the same time, with a screen for the speech; a second session at eight would also be possible. I can prepare both options for you for Monday.\nFirst suggestion, about the schools. Three classes have already booked the Saturday morning. I wonder whether we would not be better off keeping the school visit, even if we shorten it. Cancelling now might, it seems to me, upset teachers who come every year. A one-hour visit at eleven would leave the afternoon free for the team, and I can take care of it.\nSecond suggestion, a more modest one: the speech. Twenty minutes standing is a little long, let us say. Ten minutes would probably be enough, and the visit would start earlier. As for the buffet, the odds are that with fewer guests the current budget will be enough; so I would not double the amount just yet.\nFinally, a request: I would be grateful if you could sign the insurance form for the models before Thursday; I will leave it on your desk this evening.\nIf you like, we can talk about it tomorrow morning. Have a good evening, Hélène.',
  watchFor: [
    {
      pattern: 'The capacity limit hedged (il me semble que la salle serait peut-être limitée...), or presented as an opinion.',
      criterion: 'dosage',
      feedback: 'Une norme de sécurité ne se nuance pas : dis-la nettement, puis propose une solution.',
      ref: 'a10-tableau',
    },
    {
      pattern: 'Several hedges stacked on one point (peut-être, un petit peu, il me semble, si jamais, éventuellement).',
      criterion: 'dosage',
      feedback: 'Une nuance par doute. Garde la meilleure, enlève les autres.',
      ref: 'a10-piege',
    },
    {
      pattern: 'A criticism stated as a verdict (le discours est trop long, c’est une mauvaise idée) with no suggestion.',
      criterion: 'dosage',
      feedback: 'Dis ce qui te gêne, puis propose : dix minutes suffiraient sans doute.',
      ref: 'a8-focus',
    },
    {
      pattern: 'The 250 figure blamed on Hélène (vous vous êtes trompée, c’est faux) instead of explained.',
      criterion: 'registre',
      feedback: 'Explique sans accuser : le chiffre doit venir de l’ancienne salle.',
      ref: 'a4-cartes',
    },
    {
      pattern: 'The request with no date, or wrapped until it disappears (si jamais vous aviez un moment...).',
      criterion: 'tache',
      feedback: 'Une demande précise et datée : je vous saurais gré de signer le formulaire avant jeudi.',
      ref: 'a6-cartes',
    },
    {
      pattern: '« Je vous serais gré » instead of « je vous saurais gré ».',
      criterion: 'correction',
      feedback: 'Savoir gré : je vous saurais gré. Être gré n’existe pas.',
      ref: 'a6-piege',
    },
    {
      pattern: 'Il y a fort à parier que or tout porte à croire que followed by a subjunctive (que le budget suffise).',
      criterion: 'correction',
      feedback: 'Un pari garde l’indicatif : il y a fort à parier que le budget suffira.',
      ref: 'a3-piege',
    },
    {
      pattern: 'Formulas of regard stacked or used ironically (avec tout le respect que je vous dois, sauf votre respect, sans vouloir vous contredire, in one breath).',
      criterion: 'registre',
      feedback: 'Une seule formule d’égards suffit, puis l’argument.',
      ref: 'a7-erreurs',
    },
    {
      pattern: 'Switching to tu, or a familiar register (c’est pas possible, ça marche pas) with the director.',
      criterion: 'registre',
      feedback: 'Avec ta directrice, garde le vous et un registre courant ou soutenu.',
      ref: 'a6-atoi',
    },
    {
      pattern: 'Facts invented beyond the brief (a fire inspection, a new budget, other guests).',
      criterion: 'tache',
      feedback: 'Reste sur ce que tu sais : 180 personnes, trois écoles inscrites, la signature avant jeudi.',
      ref: 'a12-plan',
    },
    {
      pattern: 'No acknowledgement of what works before the criticisms, or no closing.',
      criterion: 'tache',
      feedback: 'Commence par ce qui marche, finis par une porte ouverte.',
      ref: 'a12-annote',
    },
    {
      pattern: 'Asides said at full volume and speed, or « saurais » pronounced like « serais » on the recording.',
      criterion: 'prononciation',
      feedback: 'Réécoute : les incises un ton plus bas, et saurais bien distinct de serais.',
      ref: 'a2-ecoute',
    },
  ],
  graderNotes: [
    'NO LIVE SPEECH GRADING EXISTS: the shipped path is the learner’s self-check against the model answer and the six descriptors. These notes are for a future grader that receives a transcript.',
    'Six criteria, 20 points (decision 14). Dosage weighs as much as task completion: the lesson’s point is the dose, not the number of formulas.',
    'Duration 120 to 240 seconds; allow 10% either way before « tache » loses a point. Preparation time is not graded.',
    'Facts from the brief only: 250 invited, 20-minute speech, school visit cut, buffet 2 000 to 4 000 dollars; the learner knows 180 maximum, three schools booked, signature before Thursday. Opinions and suggestions are free; facts are not.',
    'The firm point (capacity) must NOT be hedged; an aside on a suggestion is expected. Do not reward hedging for its own sake.',
    `Vous with Hélène throughout (${TUVOUS_REF_EN}). Opening with « Bonjour Hélène » plus vous is normal in a Québec or French workplace; « Madame Marchand » is also accepted.`,
    `Accept any reasonable suggestion (a second session, the small hall, a shorter school visit, a ten-minute speech). The request ladder of ${POLITESSE_REF_EN}, the impersonal families of ${IMPERSONNEL_REF_EN} and the meeting moves of ${REUNIONS_REF_EN} are assumed and may be used.`,
    'Accept regional usage without comment (Québec or France). Speaker gender is unknown: judge agreement for internal consistency only.',
    'Feedback language: natural French at C1, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['grille', 'dosage', 'fermete'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core',
  title: 'Dis tes formules à voix haute', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['dosage'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-dose',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'l’incise', v: 'me semble-t-il, si je ne m’abuse', say: fr(E(1019)),
      detail: { title: 'L’incise', body: 'Un avis ou un souvenir, adouci une fois, là où est le doute. EN: one aside, at the doubt.', say: fr(E(1017)) } },
    { k: 'le pari', v: 'fort à parier, permis de penser, rien n’indique', say: fr(E(1035)),
      detail: { title: 'Le pari', body: 'Indicatif pour parier, subjonctif le plus souvent après rien n’indique. EN: indicative to bet.', say: fr(E(1039)) } },
    { k: 'devoir', v: 'il doit être, il doit y avoir un malentendu', say: fr(E(1047)),
      detail: { title: 'Devoir qui suppose', body: 'Une supposition solide, et une façon de contredire sans accuser. EN: a guess, and tact.', say: fr(E(1050)) } },
    { k: 'la distance', v: 'je vous saurais gré de, être amené à', say: fr(E(1073)),
      detail: { title: 'Demander de loin', body: 'Savoir gré, jamais être gré ; la contrainte annoncée avec douceur. EN: formal request, softened constraint.', say: fr(E(1075)) } },
    { k: 'la critique', v: 'ce qui me gêne un peu, je me demande si, gagnerait à', say: fr(E(1100)),
      detail: { title: 'La critique enveloppée', body: 'Ce qui marche, un point, une suggestion, une porte ; le fait dit nettement. EN: four steps, firm facts.', say: fr(E(1105)) } },
    { k: 'la dose', v: 'une nuance par doute', say: fr(E(1128)),
      detail: { title: 'La bonne dose', body: 'Nuance les avis ; dis nettement les faits, les dates, les limites, la demande. EN: hedge opinions, not facts.', say: fr(E(1129)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['dosage', 'fermete'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu nuances un avis ou un souvenir d’une seule incise, tu dis à quel point tu es sûr avec le bon mode, tu supposes avec devoir et tu contredis sans accuser. Tu avoues un mot approximatif, tu demandes de loin à la bonne personne, tu contredis et tu critiques avec égards, tu manies la litote et tu entends les réponses floues des autres. Le piège qui reste est discret : empiler les précautions quand tu es mal à l’aise, et nuancer un fait parce que tu as peur de déplaire. Avant ta prochaine réunion, relis un de tes messages et compte les nuances : une par doute, aucune sur les faits. EN: Before your next meeting, reread one of your messages and count the hedges: one per doubt, none on facts.',
  stats: [
    { k: 'Les gestes', v: 'neuf, de l’incise au non-dit' },
    { k: 'Les formules', v: 'une soixantaine, en contexte' },
    { k: 'Les codes', v: 'France et Québec' },
    { k: 'Les textes', v: 'sept lectures, cinq écoutes' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 2 to 11, one round on
 *  the whole message. Each round's target is a distinct errorTrigger.
 *  `fold()` strips accents, case, commas, apostrophes, hyphens and spaces,
 *  so every typed answer differs from its prompt by letters that survive.
 *  Fill-ins accept the short part alone; errorSpots accept every minimal
 *  correct repair. No errorSpot prompt is correct French: dosage is tested
 *  by mcq and listenChoose only. */

type QQ = QuizQuestion;
const TI_Q = 'Complète et écris toute la phrase (ou seulement le mot qui manque). EN: Complete it and write the whole sentence, or just the missing word.';
const ES_Q = 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.';
const tI = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q: TI_Q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: ES_Q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'L’examen',
  passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-incise', label: 'L’incise', targets: ['incise-mal-placee'],
      questions: [
        mc('Tu crois te souvenir de la date de la réunion. En soutenu :', ['La réunion est mardi, si je ne m’abuse.', 'La réunion est mardi, me semble-t-il, si je ne m’abuse.', 'La réunion est mardi, à mon goût.'], 0, 'Un souvenir à vérifier, une seule incise. EN: one aside for a remembered fact.', 'a2-cartes'),
        mc('Pour un avis, adouci par une incise :', ['Le titre, me semble-t-il, est trop long.', 'Le titre, à ma connaissance, est trop long.'], 0, 'À ma connaissance porte sur un fait ; un avis prend me semble-t-il. EN: an opinion.', 'a2-placer'),
        mc('Laquelle place bien l’incise ?', ['Me semble-t-il, le vendredi est mal choisi.', 'Le vendredi, me semble-t-il, est mal choisi.', 'Il me semble-t-il que le vendredi est mal choisi.'], 1, 'L’incise inversée ne commence pas la phrase et ne se mélange pas avec il me semble que. EN: after the subject.', 'a2-erreurs'),
        tI('Ajoute « me semble-t-il » après « Le vendredi » : Le vendredi n’est pas le meilleur jour pour les écoles.', fr(E(1019)), 'L’incise se glisse après le sujet, entre virgules. EN: after the subject.', 'a2-cartes',
          ['Le vendredi n’est pas, me semble-t-il, le meilleur jour pour les écoles.', 'Le vendredi n’est pas le meilleur jour pour les écoles, me semble-t-il.']),
        tI('Ajoute « si je ne m’abuse » à la fin : L’ouverture est prévue le douze mai.', fr(E(1017)), 'L’incise suit le fait incertain, la date. EN: after the uncertain fact.', 'a2-placer'),
        eS('Le budget, me semble-il, n’a pas encore été voté.', 'Le budget, me semble-t-il, n’a pas encore été voté.', 'Le t de liaison est obligatoire : semble-t-il. EN: the linking t.', 'a2-erreurs',
          ['Le budget, si je ne m’abuse, n’a pas encore été voté.', 'Le budget, il me semble, n’a pas encore été voté.']),
        eS('Il me semble-t-il que la salle est trop petite.', 'Il me semble que la salle est trop petite.', 'Deux tournures mélangées : choisis il me semble que, ou l’incise. EN: two structures blended.', 'a2-erreurs',
          ['La salle, me semble-t-il, est trop petite.', 'La salle est trop petite, me semble-t-il.', 'La salle me semble trop petite.', 'La salle, il me semble, est trop petite.']),
        lC('Écoute. L’incise porte sur...', fr(E(1017)), ['un fait dont on croit se souvenir', 'un avis personnel'], 0, 'Si je ne m’abuse, après une date : un souvenir. EN: a remembered fact.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r2-certitude', label: 'Le pari', targets: ['pari-mal-construit'],
      questions: [
        mc('Il y a fort à parier que les écoles ... en avril.', ['réserveront', 'aient réservé', 'réserver'], 0, 'Un pari garde l’indicatif. EN: indicative.', 'a3-tableau'),
        mc('Le plus sûr des trois :', ['J’en mettrais ma main au feu.', 'Il est permis de penser que oui.', 'Rien n’indique que ce soit le cas.'], 0, 'La main au feu : presque certain, en familier. EN: near certainty.', 'a3-tableau'),
        mc('Aucun indice ne montre que la salle sera trop petite. Tu dis :', ['Rien n’indique que la salle soit trop petite.', 'Il y a fort à parier que la salle est trop petite.'], 0, 'Rien n’indique : aucun indice. EN: no evidence.', 'a3-construire'),
        tI('Complète au futur : Il y a fort à parier que nous (dépasser) ce chiffre.', fr(E(1035)), 'Fort à parier + indicatif, ici le futur. EN: future indicative.', 'a3-piege',
          ['Il y a fort à parier que nous allons dépasser ce chiffre.', 'dépasserons', 'nous dépasserons', 'allons dépasser']),
        tI('Complète au futur : Il est permis de penser que le thème (attirer) des familles.', fr(E(1036)), 'Il est permis de penser que + indicatif. EN: indicative.', 'a3-tableau',
          ['Il est permis de penser que le thème va attirer des familles.', 'attirera', 'va attirer']),
        eS('Il y a fort à parier qu’il pleuve le jour de l’ouverture.', 'Il y a fort à parier qu’il pleuvra le jour de l’ouverture.', 'Le pari est une probabilité : indicatif. EN: pleuvra.', 'a3-piege',
          ['Il y a fort à parier qu’il va pleuvoir le jour de l’ouverture.']),
        eS('Pour l’instant, rien n’indique pas que les travaux bloquent l’entrée du public.', fr(E(1037)), 'Rien porte déjà la négation : pas de pas. EN: no pas.', 'a3-piege'),
        lC('Écoute. Quel degré de certitude ?', fr(E(1038)), ['La personne refuse de jurer sur le chiffre.', 'La personne est certaine du chiffre.'], 0, 'Je ne mettrais pas ma main au feu : pas de serment. EN: not sure.', 'a3-lecture'),
      ],
    },
    {
      id: 'r3-devoir', label: 'Devoir qui suppose', targets: ['contradiction-frontale'],
      questions: [
        mc('« Il doit être en réunion. » Devoir exprime...', ['une supposition', 'une obligation'], 0, 'Un indice, une supposition. EN: a guess.', 'a4-cartes'),
        mc('Pour contredire un fournisseur sans l’accuser :', ['Il doit y avoir un malentendu sur l’adresse.', 'Vous vous trompez d’adresse.', 'C’est votre faute.'], 0, 'Le malentendu laisse une porte de sortie. EN: blame the misunderstanding.', 'a4-erreurs'),
        mc('Sa veste n’est plus sur la chaise. Une supposition sur une action passée :', ['Il a dû partir.', 'Il devra partir.', 'Il partira.'], 0, 'Il a dû : une supposition sur le passé, déjà vue au B1. EN: he must have left.', 'a4-trier'),
        tI('Avec devoir, au présent : Il est sans doute devant l’entrée nord, celle des bureaux.', fr(E(1047)), 'Devoir au présent pour une supposition sur maintenant. EN: present devoir.', 'a4-cartes',
          ['Il doit se trouver devant l’entrée nord, celle des bureaux.', 'doit être', 'il doit être']),
        tI('Avec devoir : C’est sans doute lui, le camion blanc sur le trottoir.', fr(E(1048)), 'Ça doit être lui. EN: that must be him.', 'a4-trier',
          ['Ce doit être lui, le camion blanc sur le trottoir.', 'doit être', 'ça doit être lui', 'ce doit être lui']),
        eS('En ce moment, il a dû être en réunion : il ne répond jamais avant onze heures.', 'En ce moment, il doit être en réunion : il ne répond jamais avant onze heures.', 'En ce moment : une supposition sur maintenant, donc le présent. EN: present.', 'a4-erreurs',
          [fr(E(1054)), 'En ce moment, il doit se trouver en réunion : il ne répond jamais avant onze heures.']),
        eS('Ça doit lui, le camion blanc sur le trottoir.', fr(E(1048)), 'Devoir veut un infinitif : être. EN: être.', 'a4-erreurs',
          ['Ce doit être lui, le camion blanc sur le trottoir.']),
        lC('Écoute. Que fait la personne ?', fr(E(1051)), ['Elle contredit poliment.', 'Elle donne un ordre.'], 0, 'Vous devez faire erreur : une contradiction douce. EN: polite contradiction.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r4-apeupres', label: 'Le mot à peu près juste', targets: ['approximation-fautive'],
      questions: [
        mc('Pour dire que « coupe » est une image :', ['L’affiche est, en quelque sorte, une coupe de la ville.', 'L’affiche est, à proprement parler, une coupe de la ville.'], 0, 'En quelque sorte approche ; à proprement parler restreint. EN: approximation.', 'a5-exemples'),
        mc('« Ce n’est pas, à proprement parler, une carte. » Cela veut dire...', ['Au sens strict, ce n’est pas une carte.', 'La carte est mal dessinée.', 'C’est une excellente carte.'], 0, 'À proprement parler : au sens strict. EN: strictly speaking.', 'a5-construire'),
        mc('« S’il s’intéresse un tant soit peu à son quartier » : il faut...', ['très peu d’intérêt', 'beaucoup d’intérêt'], 0, 'Si peu que ce soit. EN: the slightest.', 'a5-construire'),
        tI('Complète : Ce n’est pas, à proprement ___, une carte : les rivières ne sont pas à l’échelle.', fr(E(1062)), 'À proprement parler, avec un infinitif. EN: parler.', 'a5-piege', ['parler']),
        tI('Complète : La bande bleue est, pour ainsi ___, le personnage principal.', fr(E(1063)), 'Pour ainsi dire. EN: dire.', 'a5-piege', ['dire']),
        eS('Si le passant s’intéresse un tant soi peu à son quartier, il cherchera sa rue.', fr(E(1064)), 'Un tant soit peu : soit, du verbe être. EN: soit.', 'a5-piege'),
        eS('Ce n’est pas une vidéo à proprement parler, plutôt une respirations.', fr(E(1065)), 'Une seule respiration : le singulier. EN: singular.', 'a5-lecture'),
        lC('Écoute. La formule...', fr(E(1061)), ['signale un mot approximatif', 'restreint au sens strict'], 0, 'En quelque sorte : le mot est une image. EN: approximation.', 'a5-exemples'),
      ],
    },
    {
      id: 'r5-distance', label: 'Demander de loin', targets: ['demande-mal-reglee'],
      questions: [
        mc('Au partenaire de Lyon, que tu connais peu :', ['Je vous saurais gré de me confirmer cette date.', 'Tu peux me confirmer la date ?', 'Confirmez la date.'], 0, 'Un partenaire lointain : la demande soutenue. EN: formal.', 'a6-cartes'),
        mc('À un ami : « Je vous saurais gré de ranger tes affaires. » Effet ?', ['ironique', 'naturel et poli'], 0, 'Trop haut pour la relation : on entend l’ironie. EN: ironic.', 'a6-atoi'),
        mc('Pour annoncer une contrainte avec douceur :', ['Nous serons amenés à fermer la salle plus tôt.', 'Nous fermons plus tôt, c’est comme ça.', 'Nous serons amenés de fermer plus tôt.'], 0, 'Être amené à + infinitif. EN: amené à.', 'a6-tableau'),
        tI('Complète (savoir, au conditionnel) : Je vous ___ gré de me rappeler avant vendredi.', fr(E(1079)), 'Savoir gré : saurais. EN: saurais.', 'a6-piege', ['saurais']),
        tI('Complète : Pour des raisons de sécurité, nous serons ___ à exposer les maquettes sous vitrine.', fr(E(1075)), 'Être amené à. EN: amenés.', 'a6-cartes',
          ['amenés', 'amenées', 'Pour des raisons de sécurité, nous serons amenées à exposer les maquettes sous vitrine.']),
        eS('Je vous serais gré de bien vouloir me confirmer cette date.', fr(E(1073)), 'Savoir gré, pas être gré. EN: saurais.', 'a6-piege',
          ['Je vous serais reconnaissant de bien vouloir me confirmer cette date.', 'Je vous serais reconnaissante de bien vouloir me confirmer cette date.', 'Je vous saurai gré de bien vouloir me confirmer cette date.']),
        eS('Seriez-vous en mesure à nous transmettre ces chiffres d’ici la fin du mois ?', fr(E(1074)), 'En mesure de + infinitif. EN: de.', 'a6-piege'),
        lC('Écoute. À qui parle-t-on, sans doute ?', fr(E(1073)), ['à un partenaire, avec distance', 'à un ami proche'], 0, 'Je vous saurais gré de : très soutenu. EN: formal distance.', 'a6-lecture'),
      ],
    },
    {
      id: 'r6-egards', label: 'Contredire avec égards', targets: ['desaccord-sans-egards'],
      questions: [
        mc('« Avec tout le respect que je vous dois » annonce...', ['un désaccord ferme', 'un remerciement', 'une excuse'], 0, 'La formule prépare une objection. EN: a firm disagreement.', 'a7-cartes'),
        mc('Laquelle est bien construite ?', ['Loin de moi l’idée de remettre en cause le calendrier.', 'Loin de moi l’idée à remettre en cause le calendrier.'], 0, 'Loin de moi l’idée de + infinitif. EN: de.', 'a7-erreurs'),
        mc('Combien de formules d’égards avant ton argument ?', ['une', 'trois'], 0, 'Une formule, puis l’argument. EN: one.', 'a7-focus'),
        tI('Complète : Sans vouloir vous ___, les chiffres de l’an dernier vont plutôt dans l’autre sens. (to contradict)', fr(E(1088)), 'Sans vouloir vous contredire. EN: contredire.', 'a7-cartes', ['contredire']),
        tI('Complète : Loin de moi l’idée ___ remettre en cause tout le calendrier.', fr(E(1086)), 'De + infinitif. EN: de.', 'a7-construire', ['de']),
        eS('Sans vouloir de vous contredire, les chiffres de l’an dernier vont plutôt dans l’autre sens.', fr(E(1088)), 'Vouloir + infinitif, sans de. EN: no de.', 'a7-erreurs'),
        eS('Loin de moi l’idée à freiner le projet, mais certains chiffres m’inquiètent.', 'Loin de moi l’idée de freiner le projet, mais certains chiffres m’inquiètent.', 'De + infinitif. EN: de.', 'a7-erreurs'),
        lC('Écoute. Sur quoi la personne est-elle d’accord ?', fr(E(1091)), ['sur le public', 'sur la date'], 0, 'Je vous rejoins sur le public ; je ne vous suis pas sur la date. EN: the audience.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r7-critique', label: 'La critique enveloppée', targets: ['critique-mal-dosee'],
      questions: [
        mc('Une critique bien dosée commence par...', ['ce qui marche', 'l’erreur la plus grave', 'une excuse'], 0, 'Ce qui marche, sincèrement. EN: what works.', 'a8-focus'),
        mc('Pour suggérer sans imposer :', ['Je me demande si on ne gagnerait pas à couper ce paragraphe.', 'Coupe ce paragraphe.'], 0, 'Une suggestion au conditionnel. EN: a suggestion.', 'a8-construire'),
        mc('« Sans vouloir te vexer » annonce souvent...', ['une critique', 'un compliment'], 0, 'La formule prévient : une critique arrive. EN: a criticism.', 'a8-construire'),
        tI('Complète (gagner, au conditionnel) : La fin, me semble-t-il, ___ à être plus nette.', fr(E(1103)), 'Gagner à, au conditionnel : gagnerait. EN: gagnerait.', 'a8-focus', ['gagnerait']),
        tI('Complète (gêner, au présent) : Ce qui me ___ un peu, c’est la longueur.', 'Ce qui me gêne un peu, c’est la longueur.', 'Ce qui me gêne un peu, c’est... EN: gêne.', 'a8-lecture', ['gêne']),
        eS('Je me demande si on ne gagnerais pas à couper le deuxième paragraphe.', fr(E(1101)), 'On : la troisième personne, gagnerait. EN: gagnerait.', 'a8-construire'),
        eS('Ce qui me gênent un peu, c’est la longueur : les visiteurs lisent debout.', fr(E(1100)), 'Ce qui : le verbe au singulier. EN: gêne.', 'a8-erreurs'),
        lC('Écoute. Cette phrase est...', fr(E(1105)), ['un point ferme, sans nuance', 'une suggestion'], 0, 'Celui-là n’est pas négociable : un fait. EN: a firm point.', 'a8-lecture'),
      ],
    },
    {
      id: 'r8-litote', label: 'Dire moins pour dire plus', targets: ['litote-mal-lue'],
      questions: [
        mc('« Ce n’est pas mauvais du tout » veut dire...', ['c’est bon', 'c’est mauvais', 'c’est passable, sans plus'], 0, 'Nier le contraire, avec du tout : c’est bon. EN: it is good.', 'a9-cartes'),
        mc('Au Québec, « c’est pas pire » est...', ['un compliment', 'un reproche'], 0, 'C’est assez bien. EN: praise.', 'a9-cartes'),
        mc('« Ce n’était pas terrible » veut dire...', ['c’était médiocre', 'c’était excellent'], 0, 'Une litote vers le bas. EN: mediocre.', 'a9-ecoute'),
        tI('Complète : Ce n’est pas mauvais du ___.', 'Ce n’est pas mauvais du tout.', 'Du tout renforce la négation. EN: du tout.', 'a9-cartes', ['tout']),
        tI('Complète (le pronom reprend « idée ») : ___ n’est pas bête, cette idée de bande bleue.', fr(E(1119)), 'Idée est féminin : elle. Ce n’est pas bête, avec le neutre ce, est juste aussi. EN: elle.', 'a9-erreurs', ['elle', 'ce', 'Ce n’est pas bête, cette idée de bande bleue.']),
        eS('Ce n’est pas mauvais de tout.', 'Ce n’est pas mauvais du tout.', 'Du tout, pas de tout. EN: du tout.', 'a9-erreurs'),
        eS('Il n’est pas bête, cette idée de bande bleue.', fr(E(1119)), 'Le pronom s’accorde avec idée : elle. EN: elle.', 'a9-erreurs', ['Ce n’est pas bête, cette idée de bande bleue.']),
        lC('Écoute. Que veut dire la personne ?', fr(E(1121)), ['plutôt oui', 'non'], 0, 'Je ne dis pas non : un oui prudent. EN: probably yes.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r9-dose', label: 'La bonne dose', targets: ['nuances-empilees'],
      questions: [
        mc('Combien de nuances pour un seul doute ?', ['une', 'quatre', 'jamais aucune'], 0, 'Une nuance par doute. EN: one.', 'a10-reecrire'),
        mc('Ce qui ne se nuance pas :', ['une limite de sécurité', 'un avis sur un titre'], 0, 'Une norme se dit nettement. EN: a safety limit.', 'a10-tableau'),
        mc('La meilleure première phrase d’un message vocal :', ['Je vous appelle au sujet des affiches livrées ce matin.', 'Je ne voudrais pas vous déranger, c’est peut-être moi, mais…'], 0, 'L’objet d’abord. EN: the purpose first.', 'a10-piege'),
        mc('Que risque un message trop enrobé ?', ['qu’on n’entende plus la demande', 'qu’on le trouve trop direct'], 0, 'Les précautions noient l’information. EN: the request disappears.', 'a10-lecture'),
        tI('Complète (au passé) : Il doit y avoir ___ un souci de réglage, et ce sont des choses qui arrivent.', fr(E(1125)), 'Il doit y avoir eu : une supposition sur le passé. EN: eu.', 'a10-lecture', ['eu']),
        tI('Complète avec une date nette : En revanche, l’exposition ouvre le douze : nous aurions besoin d’un nouveau tirage ___ le huit.', fr(E(1126)), 'Avant le huit : une date, pas un si jamais. Pour le huit et d’ici le huit disent aussi une date nette. EN: avant.', 'a10-tableau', ['avant', 'pour', 'd’ici', 'En revanche, l’exposition ouvre le douze : nous aurions besoin d’un nouveau tirage pour le huit.', 'En revanche, l’exposition ouvre le douze : nous aurions besoin d’un nouveau tirage d’ici le huit.']),
        eS('Le bleu est nettement plus foncé que sur l’épreuve que nous avions validé.', fr(E(1124)), 'Le participe s’accorde avec épreuve, placé avant : validée. EN: agreement.', 'a10-lecture'),
        lC('Écoute. Cette phrase est...', fr(E(1129)), ['une règle : les faits ne se nuancent pas', 'une excuse'], 0, 'Un fait, une date, une limite se disent nettement. EN: facts are not hedged.', 'a10-tableau'),
      ],
    },
    {
      id: 'r10-nondit', label: 'Entendre la nuance', targets: ['reponse-floue-prise-au-mot'],
      questions: [
        mc('« C’est intéressant comme idée », sans suite, c’est souvent...', ['une réserve polie', 'un oui ferme'], 0, 'À vérifier avant de compter dessus. EN: a reservation.', 'a11-exemples'),
        mc('« Ce n’est pas exclu » veut dire...', ['possible, pas promis', 'certain', 'impossible'], 0, 'Une porte entrouverte. EN: possible.', 'a11-decoder'),
        mc('Après « je vais y réfléchir », tu dis :', ['Je vous rappelle jeudi, cela vous laisse le temps ?', 'Parfait, c’est donc d’accord.'], 0, 'Une date transforme le flou en rendez-vous. EN: ask for a date.', 'a11-decoder'),
        mc('« Nous en reparlerons » veut dire...', ['rien n’est réglé', 'c’est accepté'], 0, 'Remettre à plus tard n’est pas accepter. EN: not settled.', 'a11-erreurs'),
        tI('Complète (falloir, au conditionnel) : Il ___ voir avec notre conservatrice ; je vais y réfléchir.', fr(E(1139)), 'Il faudrait voir : rien n’est promis. EN: faudrait.', 'a11-exemples', ['faudrait']),
        tI('Complète : Si je vous ___ bien, les vitrines posent un problème à votre conservatrice ?', fr(E(1146)), 'Reformuler pour vérifier. Si je vous suis bien est aussi juste. EN: comprends.', 'a11-scenario',
          ['comprends', 'suis', 'entends', 'Si je vous suis bien, les vitrines posent un problème à votre conservatrice ?', 'Si je vous entends bien, les vitrines posent un problème à votre conservatrice ?']),
        eS('Une prolongation de deux semaines, ce n’est pas exclue, mais pas avant l’été.', fr(E(1140)), 'Ce est neutre : exclu, sans e. EN: exclu.', 'a11-decoder'),
        lC('Écoute. Cette réponse est...', fr(E(1137)), ['un oui net', 'un refus poli'], 0, 'C’est entendu, aucun problème. EN: a clear yes.', 'a11-ecoute'),
      ],
    },
    {
      id: 'r11-message', label: 'Ton message', targets: ['message-mal-dose'],
      questions: [
        mc('Dans ton message à Hélène, la capacité de la salle se dit...', ['nettement : c’est une norme', 'avec trois précautions'], 0, 'Le point ferme, sans nuance. EN: plainly.', 'a12-plan'),
        mc('Pour ta demande de signature :', ['Je vous saurais gré de signer le formulaire avant jeudi.', 'Si jamais vous aviez un moment, éventuellement…'], 0, 'Une demande soutenue et datée. EN: formal and dated.', 'a12-annote'),
        mc('Le chiffre de 250 vient sans doute de l’ancienne salle. Tu dis :', ['Le chiffre de deux cent cinquante doit venir de l’ancienne salle.', 'Vous vous êtes trompée de chiffre.'], 0, 'Une supposition qui n’accuse personne. EN: no blame.', 'a12-modele'),
        mc('Le bon ordre du message :', ['objet, merci, point ferme, suggestions, demande, fin', 'excuses, suggestions, objet, fin'], 0, 'Le plan en sept temps. EN: the seven-step plan.', 'a12-plan'),
        tI('Complète (gagner, au conditionnel) : Je me demande si nous ne ___ pas à garder la visite des écoles.', fr(E(1156)), 'Nous gagnerions : une suggestion. EN: gagnerions.', 'a12-annote', ['gagnerions']),
        tI('Complète (gagner, au conditionnel) : Il me semble que la partie historique ___ à être resserrée.', fr(E(1148)), 'Gagnerait à : une critique dite comme une amélioration. EN: gagnerait.', 'a12-annote', ['gagnerait']),
        eS('La date du quinze doit venir d’une ancien calendrier.', fr(E(1151)), 'Calendrier est masculin : d’un ancien calendrier. EN: un.', 'a12-modele'),
        lC('Écoute. Cette phrase...', fr(E(1150)), ['pose un point ferme', 'fait une suggestion'], 0, 'Nous ne pouvons pas déplacer cette date : un fait. EN: a firm point.', 'a12-modele'),
      ],
    },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck', id: 'a12-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'it seems to me (an aside)', back: 'me semble-t-il', say: fr(E(1019)) },
    { front: 'if I am not mistaken', back: 'si je ne m’abuse', say: fr(E(1017)) },
    { front: 'the odds are that', back: 'il y a fort à parier que + indicatif', say: fr(E(1035)) },
    { front: 'there must be a misunderstanding', back: 'il doit y avoir un malentendu', say: fr(E(1050)) },
    { front: 'strictly speaking', back: 'à proprement parler', say: fr(E(1062)) },
    { front: 'I would be grateful if you would', back: 'je vous saurais gré de', say: fr(E(1073)) },
    { front: 'far be it from me to', back: 'loin de moi l’idée de', say: fr(E(1086)) },
    { front: 'what bothers me a little is', back: 'ce qui me gêne un peu, c’est', say: fr(E(1100)) },
    { front: 'it is not bad at all (= good)', back: 'ce n’est pas mauvais du tout', say: fr(E(1115)) },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Nuancer à l’oral, en résumé',
  body: `${REFRAME} Tu sais maintenant adoucir un avis d’une incise, parier sans jurer, supposer avec devoir, avouer un mot approximatif, demander de loin, contredire et critiquer avec égards, dire moins pour faire entendre plus, et entendre ce que les autres ne disent pas. La prochaine leçon, ${refFrNext()}, passe aux marqueurs qui reformulent et concluent. EN: Next come the markers that reframe and conclude.`,
  points: [
    'Une nuance par doute, jamais une par mot.',
    'Les faits, les dates, les limites et la demande se disent nettement.',
    'Une formule d’égards annonce un désaccord ; une suffit.',
    'Devant une réponse floue, reformule et demande une date.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['dosage', 'fermete'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'À toi de nuancer',
    opener: {
      line: 'Le projet de ta directrice a un chiffre impossible et deux idées discutables : à toi de lui laisser un message juste, ferme et bien dosé. EN: Your director’s plan has one impossible figure and two debatable ideas: your turn to leave her a fair, firm, well-dosed message.',
      imageRef: 'lessons/nuancer-oral/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as laissé un message vocal dosé, tenu ferme au téléphone et passé le quiz : quatre-vingt-huit questions, onze rounds. EN: You left a well-dosed voice message, held firm on the phone and sat the quiz: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a12-annote', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-devoir', 'a12-quiz/r6-egards', 'a12-quiz/r9-dose'],
  },
  sections: [
    A12_MODELE, A12_ANNOTE, A12_PLAN, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/** The next lesson on the trail, c1.07 « Reformuler et conclure », written
 *  in the same wave (wave 3): cited by position only, by what it owns. */
function refFrNext(): string { return 'la leçon 7 du C1'; }


/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-incises', 'Incises et mots approximatifs', ['les incises', 'leur place', 'l’à-peu-près'], [
    teach('sheet-incises-teach', 'Une parenthèse, au bon endroit',
      'Une incise adoucit le mot qu’elle touche. Me semble-t-il présente un avis comme une impression ; si je ne m’abuse (soutenu) et si je ne me trompe (courant) signalent un fait dont tu crois te souvenir ; à ma connaissance limite ton affirmation à ce que tu sais. L’incise inversée se place dans la phrase (après le sujet ou le verbe) ou à la fin, jamais en tête, et une seule suffit par doute. Les formules d’approximation (en quelque sorte, pour ainsi dire, à proprement parler) préviennent que le mot est une image ou ne convient pas tout à fait : elles rendent la phrase plus précise. EN: One aside, next to the doubt; approximation formulas make you more precise.'),
    table('sheet-incises-table', 'Les formules', ['Formule', 'Porte sur', 'Registre, place'], [
      ['me semble-t-il', 'un avis', 'soutenu ; dans la phrase ou à la fin'],
      ['si je ne m’abuse', 'un fait dont tu te souviens', 'soutenu ; ne seul, sans pas'],
      ['si je ne me trompe', 'un fait dont tu te souviens', 'courant'],
      ['à ma connaissance', 'ce que tu sais', 'courant ; pour un fait, pas un goût'],
      ['sauf erreur de ma part', 'un fait, administratif', 'courant (leçon 19 du B2)'],
      ['en quelque sorte', 'un mot approximatif', 'courant'],
      ['pour ainsi dire', 'un mot pris comme image', 'courant'],
      ['à proprement parler', 'le sens strict du mot', 'courant ; souvent dans une négation'],
      ['un tant soit peu', 'une quantité minimale', 'soutenu ; surtout après si, en question, en négation'],
    ]),
  ]),
  sheet('sheet-certitude', 'Le degré de certitude à l’oral', ['l’échelle', 'les modes', 'devoir qui suppose'], [
    teach('sheet-certitude-teach', 'Dire à quel point tu es sûr',
      'Du plus sûr au moins sûr : j’en mettrais ma main au feu (familier), il y a fort à parier que + indicatif, tout porte à croire que + indicatif (leçon 15 du B2), il est permis de penser que + indicatif, je ne parierais pas là-dessus, rien n’indique que (le plus souvent + subjonctif, l’indicatif se rencontre). Devoir peut aussi supposer : il doit être en réunion, ça doit être lui, il devait être midi, il a dû oublier (leçon 4 du B1). Il doit y avoir un malentendu et vous devez faire erreur contredisent sans accuser. EN: A spoken scale from near certainty to no evidence; devoir as a confident guess.'),
    table('sheet-certitude-table', 'L’échelle et ses modes', ['Formule', 'Degré', 'Mode, exemple'], [
      ['j’en mettrais ma main au feu', 'presque certain', 'familier'],
      ['il y a fort à parier que', 'très probable', 'indicatif : qu’ils viendront'],
      ['tout porte à croire que', 'très probable', 'indicatif'],
      ['il est permis de penser que', 'raisonnable', 'indicatif : que le thème attirera'],
      ['je ne parierais pas là-dessus', 'douteux', '(seul)'],
      ['rien n’indique que', 'aucun indice', 'subjonctif le plus souvent : que le public soit'],
      ['il doit être...', 'supposition au présent', 'il doit être en réunion'],
      ['il devait être...', 'supposition au passé', 'il devait être midi'],
      ['il a dû...', 'supposition, action passée', 'il a dû oublier'],
      ['il doit y avoir un malentendu', 'contredire sans accuser', 'au lieu de vous vous trompez'],
    ]),
  ]),
  sheet('sheet-distance', 'Demander de loin, contredire avec égards', ['la demande soutenue', 'la contrainte', 'les formules d’égards'], [
    teach('sheet-distance-teach', 'La hauteur juste',
      'Au sommet de l’échelle de la leçon 9 du B1, l’oral soutenu ajoute je vous saurais gré de + infinitif (savoir gré, jamais être gré) et seriez-vous en mesure de. Être amené à annonce une contrainte sans brutalité. Pour contredire : avec tout le respect que je vous dois, sauf votre respect, loin de moi l’idée de + infinitif, sans vouloir + infinitif. Ces formules annoncent un désaccord ou une critique ; elles ne l’effacent pas. Une seule par désaccord ; entre amis, elles sonnent ironiques. EN: Formal requests, softened constraints, formulas of regard: one at a time, for the right person.'),
    table('sheet-distance-table', 'Les formules', ['Formule', 'Usage', 'Attention'], [
      ['je vous saurais gré de + infinitif', 'demande très soutenue', 'jamais je vous serais gré'],
      ['seriez-vous en mesure de', 'demande si l’autre peut', 'soutenu'],
      ['nous serons amenés à', 'annoncer une contrainte', 'adoucit, ne supprime pas'],
      ['avec tout le respect que je vous dois', 'désaccord ferme', 'appuyé, sonne ironique'],
      ['sauf votre respect', 'remarque qui peut choquer', 'soutenu, un peu daté'],
      ['loin de moi l’idée de + infinitif', 'écarter une intention', 'souvent suivi de mais'],
      ['sans vouloir + infinitif', 'annoncer une critique', 'annonce souvent ce qu’elle nie'],
    ]),
  ]),
  sheet('sheet-critique', 'Critiquer, et dire moins', ['la critique en quatre temps', 'la litote', 'Québec et France'], [
    teach('sheet-critique-teach', 'Une critique qui se fait entendre',
      'Ce qui marche d’abord, sincèrement. Puis un point précis, pris à ton compte : ce qui me gêne un peu, c’est... Puis une suggestion au conditionnel : je me demande si on ne gagnerait pas à... Enfin, une porte laissée à l’autre : c’est ton texte. L’erreur de fait se dit sans détour. La litote nie le contraire (ce n’est pas mauvais du tout = c’est bon) ; la retenue minimise (un peu long = parfois beaucoup trop long). Au Québec, c’est pas pire veut dire pas mal, assez bien : le plus souvent un compliment ; pas terrible veut dire médiocre en France comme au Québec. EN: Four steps for a criticism; litote and understatement, with their regional codes.'),
    table('sheet-critique-table', 'Formules et sens', ['Formule', 'Ce qu’elle fait', 'Ce qu’on entend'], [
      ['ce qui me gêne un peu, c’est', 'un point précis', 'une critique assumée'],
      ['je me demande si', 'une suggestion', 'je te conseille de'],
      ['X gagnerait à...', 'une amélioration', 'X n’est pas encore assez...'],
      ['je ne dis pas que..., je dis que', 'cadrer la critique', 'pas tout, seulement ça'],
      ['ce n’est pas mauvais du tout', 'litote', 'c’est bon'],
      ['il n’est pas bête', 'litote', 'il est intelligent'],
      ['je ne dis pas non', 'litote', 'oui, probablement'],
      ['c’est pas pire (Québec)', 'litote', 'c’est assez bien, un compliment'],
      ['ce n’est pas terrible', 'litote vers le bas', 'c’est médiocre'],
      ['un peu long, disons', 'retenue', 'trop long'],
    ]),
  ]),
  sheet('sheet-dose', 'La dose, le non-dit, le message', ['la bonne dose', 'le non-dit', 'le plan du message'], [
    teach('sheet-dose-teach', 'Une nuance par doute',
      'Nuance tes avis, tes suggestions, tes souvenirs incertains ; dis nettement les faits, les dates, les limites de sécurité et ta demande. Une nuance par doute, une formule d’égards par désaccord. Empiler les précautions noie l’information et peut sonner ironique. Chez les autres, c’est intéressant, il faudrait voir, je vais y réfléchir, ce n’est pas exclu ou nous en reparlerons ne promettent rien : reformule et demande une date. EN: Hedge opinions, not facts; decode non-answers by asking for a date.'),
    table('sheet-dose-table', 'Le plan d’un message vocal dosé', ['Temps', 'Ce que tu fais', 'Formule'], [
      ['1', 'te présenter, dire l’objet', 'je vous appelle au sujet de...'],
      ['2', 'reconnaître ce qui marche', 'merci d’abord : ...'],
      ['3', 'dire le point ferme, nettement', 'celle-là ne dépend pas de nous'],
      ['4', 'deux critiques dosées, avec une suggestion', 'il me semble que... gagnerait à...'],
      ['5', 'une supposition, sans accuser', 'ce chiffre doit venir de...'],
      ['6', 'une demande précise, avec une date', 'je vous saurais gré de... avant jeudi'],
      ['7', 'une porte ouverte, une fin', 'si cela vous pose un problème...'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
    { id: 'd-incise', title: 'Avis ou souvenir', format: 'mcq' as const, coach: 'Un avis : me semble-t-il. Un souvenir : si je ne m’abuse. Une incise par doute. EN: opinion or memory.', q: 'Pour une date dont tu crois te souvenir :', opts: ['si je ne m’abuse', 'me semble-t-il'], correct: 0, why: 'Si je ne m’abuse porte sur un fait. EN: a remembered fact.', items: [E(1017), E(1019), E(1021), E(1022), E(1024), E(1028)], audio: AUDIO },
  { id: 'd-pari', title: 'Probable ou incertain', format: 'sort' as const, coach: 'Deux piles : ce qu’on parie, et ce dont on doute. EN: what you bet on, and what you doubt.', buckets: ['probable', 'incertain ou sans indice'], items: [E(1035), E(1036), E(1042), E(1037), E(1039), E(1040)], audio: AUDIO },
  { id: 'd-devoir', title: 'Supposer, contredire', format: 'sort' as const, coach: 'Deux piles : la supposition, et la contradiction sans accusation. EN: guessing, and tactful contradiction.', buckets: ['une supposition', 'contredire sans accuser'], items: [E(1046), E(1047), E(1048), E(1054), E(1050), E(1051)], audio: AUDIO },
  { id: 'd-apeupres', title: 'Approcher ou restreindre', format: 'mcq' as const, coach: 'En quelque sorte approche ; à proprement parler restreint. EN: approximate or restrict.', q: 'Pour dire qu’un mot est une image :', opts: ['en quelque sorte', 'à proprement parler'], correct: 0, why: 'En quelque sorte : le mot est approximatif. EN: approximation.', items: [E(1061), E(1062), E(1063), E(1064), E(1065), E(1066)], audio: AUDIO },
  { id: 'd-distance', title: 'Demander de loin', format: 'flashcard' as const, coach: 'Lis chaque demande à voix haute, en articulant saurais. EN: read each request aloud.', items: [E(1073), E(1074), E(1075), E(1076), E(1077), E(1079)], audio: AUDIO },
  { id: 'd-egards', title: 'Une formule, puis l’argument', format: 'mcq' as const, coach: 'Loin de moi l’idée de, sans vouloir : un infinitif, puis l’argument. EN: then the argument.', q: 'Loin de moi l’idée ... remettre en cause le calendrier.', opts: ['de', 'à'], correct: 0, why: 'De + infinitif. EN: de.', items: [E(1085), E(1086), E(1087), E(1088), E(1089), E(1091)], audio: AUDIO },
  { id: 'd-critique', title: 'La critique en quatre temps', format: 'flashcard' as const, coach: 'Lis dans l’ordre : ce qui marche, un point, une suggestion, le fait. EN: read the four steps aloud.', items: [E(1099), E(1100), E(1101), E(1102), E(1103), E(1105)], audio: AUDIO },
  { id: 'd-litote', title: 'Plus ou moins', format: 'sort' as const, coach: 'Deux piles : ce qui vaut plus que ça n’en a l’air, et ce qui vaut moins. EN: worth more, or worth less.', buckets: ['ça vaut plus', 'ça vaut moins'], items: [E(1115), E(1119), E(1121), E(1116), E(1120), E(1113)], audio: AUDIO },
  { id: 'd-dose', title: 'Le fait, nettement', format: 'mcq' as const, coach: 'Une nuance par doute ; le fait, la date et la demande en pleine lumière. EN: facts plainly.', q: 'Le bleu est ... plus foncé que l’épreuve.', opts: ['nettement', 'peut-être un petit peu, il me semble,'], correct: 0, why: 'Un fait vérifié se dit nettement. EN: plainly.', items: [E(1124), E(1125), E(1126), E(1127), E(1132), E(1133)], audio: AUDIO },
  { id: 'd-nondit', title: 'Ce que vaut la réponse', format: 'mcq' as const, coach: 'Un oui net nomme ce qu’il accepte ; le reste se vérifie. EN: a clear yes names what it accepts.', q: '« Il faudrait voir » veut dire...', opts: ['rien n’est promis', 'c’est accepté'], correct: 0, why: 'Une réserve, pas un accord. EN: nothing promised.', items: [E(1137), E(1138), E(1139), E(1140), E(1141), E(1142)], audio: AUDIO },
  { id: 'd-message', title: 'Le modèle, phrase par phrase', format: 'flashcard' as const, coach: 'Dis chaque phrase comme dans ton message : merci, critique, point ferme, supposition, demande. EN: say each line as in your message.', items: [E(1147), E(1148), E(1150), E(1151), E(1152), E(1154)], audio: AUDIO },

];

const TRIGGER_LIST: ErrorTrigger[] = [
    { id: 'incise-mal-placee', description: 'Hedges a claim with a misplaced, malformed or stacked aside (Me semble-t-il at the start, me semble-il, il me semble-t-il que, three asides on one doubt), or uses à ma connaissance for an opinion.', detectOn: ['a2-placer', 'a2-erreurs', 'a2-check', 'a12-mission'], drill: 'd-incise', retest: 'd-incise' },
  { id: 'pari-mal-construit', description: 'Grades certainty wrongly in speech: a subjunctive after il y a fort à parier or tout porte à croire, broken fixed forms (fort de parier, main dans le feu), or rien n’indique pas.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-pari', retest: 'd-pari' },
  { id: 'contradiction-frontale', description: 'Contradicts or corrects by accusing (vous vous trompez, c’est votre erreur) instead of using devoir or a misunderstanding, or misuses tense with epistemic devoir.', detectOn: ['a4-trier', 'a4-erreurs', 'a4-check', 'a12-mission'], drill: 'd-devoir', retest: 'd-devoir' },
  { id: 'approximation-fautive', description: 'Confuses approximating and restricting (à proprement parler for an image), or breaks the fixed forms (à proprement dit, pour ainsi parler, un tant soi peu).', detectOn: ['a5-construire', 'a5-piege', 'a5-check'], drill: 'd-apeupres', retest: 'd-apeupres' },
  { id: 'demande-mal-reglee', description: 'Pitches a request at the wrong height (formal formulas with a friend, a bare order with a partner) or misforms it (je vous serais gré, amené de, en mesure à).', detectOn: ['a6-tableau', 'a6-piege', 'a6-check', 'a12-mission'], drill: 'd-distance', retest: 'd-distance' },
  { id: 'desaccord-sans-egards', description: 'Disagrees with a superior with no regard, or stacks formulas of regard until they sound ironic, or misforms them (loin de moi l’idée à, sans vouloir de).', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a12-mission'], drill: 'd-egards', retest: 'd-egards' },
  { id: 'critique-mal-dosee', description: 'Criticises with a verdict and no suggestion, wraps the criticism until it says nothing, or hedges a factual error.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a12-mission'], drill: 'd-critique', retest: 'd-critique' },
  { id: 'litote-mal-lue', description: 'Misreads or misforms litote and understatement (pas mauvais de tout, il n’est pas bête, cette idée), or takes a Québec compliment (c’est pas pire) as a criticism.', detectOn: ['a9-decoder', 'a9-erreurs', 'a9-check'], drill: 'd-litote', retest: 'd-litote' },
  { id: 'nuances-empilees', description: 'Stacks hedges on one point so that the fact, the date or the request disappears, or hedges what is never hedged.', detectOn: ['a10-reecrire', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-dose', retest: 'd-dose' },
  { id: 'reponse-floue-prise-au-mot', description: 'Takes a polite non-answer (c’est intéressant, il faudrait voir, ce n’est pas exclu, nous en reparlerons) as a yes, and does not ask for a date.', detectOn: ['a11-decoder', 'a11-erreurs', 'a11-check', 'a11-scenario'], drill: 'd-nondit', retest: 'd-nondit' },
  { id: 'message-mal-dose', description: 'Leaves a voice message without the firm point stated plainly, without a dated request, or with blame where a supposition was needed.', detectOn: ['a12-modele', 'a12-plan', 'a12-mission'], drill: 'd-message', retest: 'd-message' },

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-06-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c1-06-karim': 'Karim’s voice message (act 1), ONE VOICE, one take, a Montréal man in his thirties (Québec French) leaving a message in the evening: hurt but warm, never angry. The two quotations (the blunt remark, Sophie’s hesitations) are said in his voice, lightly mimicked, not acted. The imagined ideal sentence is said calmly, as a model.',
  'rec-c1-06-calendrier-ecoute': 'REQUIRED FOR THE EAR MISSION (act 2): ten lines, ONE TAKE, in authored order, a small team meeting. TWO VOICES alternating: Hélène (a Montréal woman in her fifties, Québec French, measured) and Karim (Québec French). Every aside (si je ne m’abuse, me semble-t-il, si je ne me trompe, à ma connaissance) is said on a slightly lower, quicker pitch, as asides are in speech. Natural C1 speed.',
    'rec-c1-06-prevision': 'Karim’s forecast (act 3), ONE VOICE, one take, Karim (Québec French) speaking at a team meeting, not reading: careful, confident on the bet, openly unsure on the festival. The title line is read neutrally as a caption.',
  'rec-c1-06-piege-pari': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « dépasserons », « suffira » are clearly future.',
  'rec-c1-06-livraison-ecoute': 'REQUIRED FOR THE EAR MISSION (act 4): ten lines, ONE TAKE, in authored order, a phone call. TWO VOICES: the Institute speaker (Québec French, calm, firm) and the logistics employee (France French, friendly, a little flustered), phone-line feel on the employee. Lines 1, 2, 5, 7, 8 and 10 are the Institute speaker (line 5 looking out of the window; line 10 a short closing remark); 3, 4, 6 and 9 the employee. « Il doit y avoir un malentendu » and « vous devez faire erreur » are said without irritation.',

  'rec-c1-06-affiche': 'Sophie’s rehearsal (act 5), ONE VOICE, one take, a Montréal woman in her late twenties (Québec French), rehearsing aloud: engaged, thinking as she speaks. Each approximation formula (en quelque sorte, à proprement parler, pour ainsi dire) is said lightly, as a speaker qualifies a word, never stressed.',
  'rec-c1-06-piege-apeupres': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-06-appel': 'Hélène’s voice message to Lyon (act 6), ONE VOICE, one take, Hélène (Québec French, fifties), leaving a formal message on a partner’s answering machine: warm, precise, unhurried. Each request has a short breath before it. The caption line is read neutrally.',
  'rec-c1-06-piege-distance': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. « saurais » [so.ʁɛ] is articulated clearly, never like « serais ».',

  'rec-c1-06-vendredi-ecoute': 'REQUIRED FOR THE EAR MISSION (act 7): nine lines, ONE TAKE, in authored order, a team meeting. TWO VOICES, who say vous to each other: Karim (Québec French) speaks lines 1, 2, 3, 5, 7 and 8; Hélène (Québec French, his director) speaks 4, 6 and 9. Neither raises their voice. « Avec tout le respect que je vous dois » is said evenly, NOT with an ironic stress; « loin de moi l’idée de » is sincere.',
  'rec-c1-06-retour': 'Hélène’s feedback (act 8), TWO VOICES, one take, a dialogue in an office: Hélène (Québec French, warm, direct) and Karim (Québec French, relieved, curious). The caption line is read neutrally by a narrator or by Hélène’s voice. « Celui-là n’est pas négociable » is said kindly but firmly.',

  'rec-c1-06-vernissage-ecoute': 'REQUIRED FOR THE EAR MISSION (act 9): eight lines, ONE TAKE, in authored order, two colleagues chatting after an opening night. TWO VOICES: lines 1, 3, 5 and 7 a Montréal woman (Québec French, relaxed, a little teasing); lines 2, 4, 6 and 8 a Montréal man (Québec French). « C’est pas pire, hein » is said as warm praise, in a natural Québec familiar register. The litotes are said with a light smile in the voice, never sarcastic.',
  'rec-c1-06-dose': 'The two voice messages (act 10), ONE VOICE, one take, Sophie (Québec French). Version A is said hesitantly, with real hesitations, trailing off; version B is calm, clear and friendly. The caption and the final paragraph are read neutrally by the same voice.',
  'rec-c1-06-piege-dose': 'The audio step plays each card’s CORRECT sentence. Read the six plainly, calmly and identically in pace; the over-hedged versions in promptSound are never spoken.',
  'rec-c1-06-lyon-ecoute': 'REQUIRED FOR THE EAR MISSION (act 11): seven lines, ONE TAKE, in authored order, a phone call. ONE VOICE: Théo Brunet (a Lyon man in his forties, France French, courteous, a little evasive), phone-line feel. The clear yes (line 2) is brisk; the non-answers (lines 3 to 6) slow down slightly, with a short pause after « en revanche ».',

  'rec-c1-06-modele': 'The model voice message (act 12), ONE VOICE, one take, a Montréal speaker in their thirties (Québec French) leaving a message for a partner in Lyon: warm, clear, unhurried, about two minutes. The firm point (the transport date) is said calmly and slightly slower; the hedged criticisms lightly. The caption line is read neutrally.',

};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 6',
  intro: 'A remark can be right and still close the other person’s ears, and a remark wrapped in too many precautions says nothing at all. This lesson teaches politeness and distance in speech at C1 as a matter of dosage: the softening aside placed where the doubt lies (me semble-t-il, si je ne m’abuse), the spoken certainty scale with its moods (il y a fort à parier que, il est permis de penser que, rien n’indique que), devoir as a confident guess and as tact, flagged approximation (en quelque sorte, à proprement parler, un tant soit peu), formal requests and softened constraints (je vous saurais gré de, être amené à), contradicting and criticising with regard, litote and understatement with their Québec and France codes, hedge stacking and what is never hedged, and decoding the polite non-answers of others. It ends with a spoken voice message to a director, graded on dosage and register.',
  skill: 'PO',
  grammarAssumed: [POLITESSE_UNIT, COND_UNIT, REGISTRES_UNIT, TUVOUS_UNIT, IMPERSONNEL_UNIT, ACADEMIQUE_UNIT, CRITIQUE_UNIT, REUNIONS_UNIT],
  grammarIntroduced: [
    'The softening aside in speech and its position: me semble-t-il (an opinion), si je ne m’abuse and si je ne me trompe (a remembered fact), à ma connaissance (the limit of what one knows); one aside per doubt, never sentence-initial inversion',
    'The spoken certainty scale: j’en mettrais ma main au feu, il y a fort à parier que and il est permis de penser que with the indicative, je ne parierais pas là-dessus, rien n’indique que (usually with the subjunctive)',
    'Epistemic devoir in the present and imparfait (il doit être, ça doit être, il devait être) and its ambiguity with obligation; il doit y avoir un malentendu and vous devez faire erreur as tactful contradiction',
    'Flagged approximation: en quelque sorte, pour ainsi dire, à proprement parler; un tant soit peu in hypothetical, interrogative and negative contexts, and as a biting reproach',
    'Formal requests and softened constraints in speech: je vous saurais gré de (savoir gré, never être gré), seriez-vous en mesure de, être amené à',
    'Contradicting with regard: avec tout le respect que je vous dois, sauf votre respect, loin de moi l’idée de, sans vouloir + infinitive, and what each one announces',
    'The hedged criticism: acknowledge, one precise point, a conditional suggestion, room left to the other; gagner à, je me demande si, ce qui me gêne un peu, c’est, je ne dis pas que..., je dis que; the factual error said plainly',
    'Litote and understatement in speech (ce n’est pas mauvais du tout, il n’est pas bête, je ne dis pas non, disons que), with Québec c’est pas pire and pas terrible',
    'Hedge dosage: one hedge per doubt, one formula of regard per disagreement, and what is never hedged (facts, dates, safety limits, the request itself)',
    'Decoding polite non-answers (c’est intéressant, il faudrait voir, je vais y réfléchir, ce n’est pas exclu, nous en reparlerons) and answering them by rephrasing and asking for a date',
    'A two to four minute spoken voice message to a superior, self-checked against an annotated model and a six-criterion grid weighted on dosage and register',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Une remarque peut être juste et fermer l’autre ; enrobée de trop de précautions, elle ne dit plus rien. Cette leçon t’apprend à régler la nuance à l’oral : l’incise placée là où est le doute, le pari et ses modes, devoir qui suppose, le mot approximatif, la demande de loin, le désaccord et la critique avec égards, la litote, la bonne dose, et le non-dit des autres. À la fin, tu laisses à ta directrice un message vocal bien dosé.',
    minutes: 150,
    difficulty: 4,
    glyph: 'nu',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: NUANCER_ORAL_TERMS,
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

/** The lesson as the validators take it: `task` is a real section type, so
 *  this is LESSON unchanged (kept for the house scripts that call it). */
export function lessonWithoutTask(): Lesson { return LESSON; }

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, dicteeFor };

