// a2.12.l1 "Irréguliers 2 : faire, dire, lire": the assertions that keep this
// lesson true.
//
// Modelled on a2-02-aller-venir.test.ts. Everything here runs the REAL app
// function rather than a copy: an earlier a1.01 test inlined its own glossary
// lookup, copied the version that was already broken, and passed while the
// feature was dead.
//
// ── What this file is actually guarding ────────────────────────────────────
//
// This lesson authors 25 rows and IMPORTS TWENTY-SIX OUT OF FIFTEEN THEMES,
// which is five times wider than any other lesson in batch 1. So the failure
// mode is not "the word is missing". It is:
//
//   THE THIRTY BEING QUIETLY THINNED. They are asserted INDIVIDUALLY BY NAME,
//   because a count alone survives one expression being swapped for another and
//   the brief asks for exactly this.
//   AN EXPRESSION BEING RE-AUTHORED INSTEAD OF IMPORTED. Twenty-three of the
//   thirty are somebody else's rows. Every one is asserted to live OUTSIDE this
//   lesson's id range, so a build that quietly authored its own copy fails here
//   rather than serving every expression twice in the flashcard hub.
//   THE THREE vous CELLS BEING SEPARATED. `vous faites`, `vous dites` and
//   `vous lisez` are the three items of ONE group of ONE section, in that order.
//   The brief names this as the layout the test must assert. Checked by item
//   INDEX and by group COUNT, not by "the three strings appear somewhere".
//   lire LOSING ITS ARGUMENT. It is in this lesson as the CONTROL: the verb that
//   takes the endings the learner already has. That is DERIVED from the paradigm
//   rather than asserted, so a cell that stops behaving empties the constant.
//   THE tapTable GROWING. Corrections §8 measures the ceiling at SIX ROWS on a
//   Pixel 6 because tapTable is not in ownsLayout(). The brief asks for thirty.
//   A WEATHER OR SHOPPING WORD BEING TAUGHT. Scoped to PRODUCTION SURFACES,
//   because s16-notmine has to be able to name a1.10 and a2.26 in order to hand
//   them back, and a guard that fires on that is a guard the next author deletes.
//   THE RESPELLINGS BEING "TIDIED". Two imported rows are repaired and ONE OF
//   THE TWO IS DELIBERATELY NOT A SUPERSCRIPT: `promenade` has a real /m/ and no
//   nasal vowel, so `prom-NAHD` is right and `prohmⁿ-NAHD` would teach a sound
//   that is not in the word. Invariants §3, the `jaune` case.
//   A NASAL GOING BLIND. This is the first lesson in the band with none, and the
//   emptiness is re-measured here rather than trusted to a comment.
//   THE QUIZ DRIFTING BACK TO THE FORMS. The Owns is the reach; at least half
//   the questions have to touch one of the thirty and at least six have to make
//   the learner CHOOSE between them.
//
// Every one of those is asserted below, and every one was mutation-tested: the
// assertion was broken on purpose and confirmed to go red before it was kept.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson } from './schema.ts';
import { quizQuestions, validateLesson, formatIssues } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation } from './gender.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { MAX_GLOSS_WORDS, glossKeys, segmentSentence } from './gloss.logic.ts';
import { matchesAccept } from './answer.logic.ts';
import { normalizeFr } from '../utils/score.ts';
import { namesUnitLabel } from './unit-label.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.12.l1');
const noLesson = !L;
const byId = new Map(seed.items.map((i) => [i.id, i] as const));

/* ─── The shape of the lesson ──────────────────────────────────────────── */

const SPINE = [
  's01-scene', 's02-goals', 's03-reach',
  's04-verbs', 's05-grid', 's06-vousrow', 's07-ils',
  's08-english', 's09-tap', 's10-chores', 's11-active', 's12-ownverb', 's13-weather',
  's14-trap', 's15-errors', 's16-notmine',
  's17-speak', 's18-dictation', 's19-scenario', 's20-reading',
  's21-review', 's22-progress', 's23-quiz', 's24-roundup',
];

/** THE OWNS ACT IS THE HEAVIEST. Six missions against the paradigm act's four.
 *  If that ever inverts, the forms have taken the lesson over, which is the
 *  failure doctrine §B.5 exists to prevent and which this lesson is the first in
 *  batch 1 to be genuinely at risk of. */
const ACTS = [
  { id: 'act1', n: 3 },
  { id: 'act2', n: 4 },
  { id: 'act3', n: 6 },
  { id: 'act4', n: 3 },
  { id: 'act5', n: 4 },
  { id: 'act6', n: 4 },
];
const PARADIGM_ACT = 'act2';
const OWNS_ACT = 'act3';

const REFRAME = 'French keeps faire where English reaches for a different verb every time.';
/** TEN sections, plus the sheet, the terms and the `reframe` field itself when
 *  the whole object is walked. Asserted against an explicit constant, never a
 *  figure derived from the lesson: a derived count compares the content to
 *  itself and survives any rewording. */
const REFRAME_SECTIONS = 10;
const REFRAME_APPEARANCES = 15;

/** a2.02's name for one form doing two jobs, quoted rather than reinvented. This
 *  lesson is NOT one of doctrine §B.7's four instances and it holds another one
 *  (`il fait beau` against `il fait le lit`), so it borrows the name. */
const WHAT_FOLLOWS = 'what comes next decides';
const WHAT_FOLLOWS_UNIT = 'a2.02';

/** The five claims this lesson carries verbatim. Every one is derived from data
 *  in the source, so a count that changes breaks the sentence rather than
 *  leaving it quietly false. */
const REACH_CLAIM = 'One verb, and 30 everyday things you could not say before.';
const TES_CLAIM = '3 verbs in the language end vous on -tes. Every other verb you will ever meet ends it on -ez.';
const ONT_CLAIM = '4 verbs end ils on -ont, and you already had 3 of them.';
const CONTROL_CLAIM = 'lire keeps the endings you already have, and that is the whole reason it is here.';
// TRIMMED BY THE UNIT-LABEL PASS. The card it sits on gained three words when
// « a1.10 » became « lesson 14 in A1 » and ran over the 45-word core cap, so the
// closing clause lost « of it ». The quotation follows the content.
const NOT_THE_NOUNS = "The word after faire belongs to somebody else's lesson. What you are learning is the verb in front.";
/** a2.01's constant, quoted verbatim. On this verb it lands on the same three
 *  letters as the weather's `il fait`. */
const NOUS_ON = 'nous parlons is what you write. on parle is what you say.';

const VOUS_ROW_SECTION = 's06-vousrow';
const REACH_SECTION = 's09-tap';
const WEATHER_SECTION = 's13-weather';
const BOUNDARY_SECTION = 's16-notmine';
const NOUS_ON_SECTION = 's19-scenario';
const EXPRESSION_SECTIONS = ['s10-chores', 's11-active', 's12-ownverb', 's13-weather'];
/** ONE sheet, and its centre is the thirty rather than a fifth ending table. */
const SHEET_ID = 'sheet.a2.12.faire';
const EXPECTED_SHEETS = 1;

/** THE THREE PARADIGMS, cell by cell, in the ledger's canonical pronoun order.
 *  Written out here rather than imported, so the seed is compared against an
 *  independent statement of what it should hold. */
const PARADIGM: { person: string; faire: string; dire: string; lire: string }[] = [
  { person: 'je', faire: 'fais', dire: 'dis', lire: 'lis' },
  { person: 'tu', faire: 'fais', dire: 'dis', lire: 'lis' },
  { person: 'il · elle · on', faire: 'fait', dire: 'dit', lire: 'lit' },
  { person: 'nous', faire: 'faisons', dire: 'disons', lire: 'lisons' },
  { person: 'vous', faire: 'faites', dire: 'dites', lire: 'lisez' },
  { person: 'ils · elles', faire: 'font', dire: 'disent', lire: 'lisent' },
];
const THE_THREE = ['faire', 'dire', 'lire'];
const THE_VERB = 'faire';
const THE_CONTROL = 'lire';

/** The three verbs and the frame each one runs on. `le lit` is not decoration:
 *  `faire le lit` is one of the thirty, so act 2 conjugates the Owns rather than
 *  stepping away from it. */
const FRAMES: Record<string, string> = { faire: 'le lit.', dire: 'bonjour.', lire: 'le menu.' };
/** The id range each paradigm occupies, in the ledger's pronoun order. */
const PARADIGM_RANGES: Record<string, [string, string]> = {
  faire: ['fr.a2.verbes.301', 'fr.a2.verbes.306'],
  dire: ['fr.a2.verbes.307', 'fr.a2.verbes.312'],
  lire: ['fr.a2.verbes.313', 'fr.a2.verbes.318'],
};

/** The two endings every regular verb the learner has met takes at vous and ils.
 *  a2.01 taught them on -ER, a2.10 on -IR and a2.11 on -RE. */
const LEARNED_ENDINGS: { person: string; ending: string }[] = [
  { person: 'vous', ending: 'ez' },
  { person: 'ils · elles', ending: 'ent' },
];

/** THE TWO CLOSED CLUBS, and this lesson is where each one is COMPLETED. Every
 *  member carries the unit id where the learner met it. */
const TES_CLUB = [
  { form: 'vous êtes', verb: 'être', unit: 'a1.06' },
  { form: 'vous faites', verb: 'faire', unit: 'a2.12' },
  { form: 'vous dites', verb: 'dire', unit: 'a2.12' },
];
const ONT_CLUB = [
  { form: 'ils sont', verb: 'être', unit: 'a1.06' },
  { form: 'ils ont', verb: 'avoir', unit: 'a1.07' },
  { form: 'ils vont', verb: 'aller', unit: 'a2.02' },
  { form: 'ils font', verb: 'faire', unit: 'a2.12' },
];

/** ═══ THE THIRTY, INDIVIDUALLY BY NAME ═══════════════════════════════════
 *
 *  The brief asks for this explicitly and it is the reason a count is not
 *  enough: a count survives one expression being swapped for another, and the
 *  set is the lesson.
 *
 *  Grouped by the ENGLISH verb French refuses to use, which is the Owns as data.
 *  `id` is the row it lives on, and whether that row is inside this lesson's
 *  range is what separates an import from an author. Twenty-three of the thirty
 *  are somebody else's, out of fifteen themes. */
const THIRTY: { reach: string; fr: string; id: string; mine: boolean }[] = [
  { reach: 'do', fr: 'faire les courses', id: 'fr.a2.courses.018', mine: false },
  { reach: 'do', fr: 'faire le ménage', id: 'fr.a1.routines.030', mine: false },
  { reach: 'do', fr: 'faire la vaisselle', id: 'fr.a1.routines.031', mine: false },
  { reach: 'do', fr: 'faire la lessive', id: 'fr.a1.routines.032', mine: false },
  { reach: 'do', fr: 'faire ses devoirs', id: 'fr.a1.ecole.106', mine: false },
  { reach: 'make', fr: 'faire le lit', id: 'fr.a1.maison.122', mine: false },
  { reach: 'make', fr: 'faire du bruit', id: 'fr.b1.voisinage.062', mine: false },
  { reach: 'make', fr: 'faire un effort', id: 'fr.b2.rp-achats.004', mine: false },
  { reach: 'make', fr: 'faire des progrès', id: 'fr.a2.verbes.319', mine: true },
  { reach: 'make', fr: 'faire une erreur', id: 'fr.a2.verbes.320', mine: true },
  { reach: 'go', fr: 'faire du sport', id: 'fr.b1.bien-etre.035', mine: false },
  { reach: 'go', fr: 'faire du vélo', id: 'fr.a1.sports-et-loisirs.109', mine: false },
  { reach: 'go', fr: 'faire du ski', id: 'fr.a1.sports-et-loisirs.074', mine: false },
  { reach: 'go', fr: 'faire de la natation', id: 'fr.a1.sports-et-loisirs.073', mine: false },
  { reach: 'go', fr: 'faire de la musique', id: 'fr.a2.verbes.321', mine: true },
  { reach: 'take', fr: 'faire une promenade', id: 'fr.a1.animaux-domestiques.123', mine: false },
  { reach: 'take', fr: 'faire un voyage', id: 'fr.a2.verbes.322', mine: true },
  { reach: 'take', fr: 'faire les valises', id: 'fr.a2.verbes.323', mine: true },
  { reach: 'be', fr: 'il fait beau', id: 'fr.a1.meteo.027', mine: false },
  { reach: 'be', fr: 'il fait chaud', id: 'fr.a1.meteo.029', mine: false },
  { reach: 'be', fr: 'il fait froid', id: 'fr.a1.meteo.028', mine: false },
  { reach: 'be', fr: 'il fait frais', id: 'fr.a1.meteo.039', mine: false },
  { reach: 'be', fr: 'il fait mauvais', id: 'fr.a1.meteo.037', mine: false },
  { reach: 'own', fr: 'faire la cuisine', id: 'fr.a1.famille.136', mine: false },
  { reach: 'own', fr: 'faire la queue', id: 'fr.b1.tourisme.039', mine: false },
  { reach: 'own', fr: 'faire la fête', id: 'fr.a1.amis.026', mine: false },
  { reach: 'own', fr: 'faire la sieste', id: 'fr.a1.routines.043', mine: false },
  { reach: 'own', fr: 'faire attention', id: 'fr.a1.dictee.122', mine: false },
  { reach: 'own', fr: 'faire semblant', id: 'fr.a2.verbes.324', mine: true },
  { reach: 'own', fr: 'faire plaisir', id: 'fr.a2.verbes.325', mine: true },
];
const REACH_ORDER = ['do', 'make', 'go', 'take', 'be', 'own'];
const EXPRESSION_TARGET = 30;
/** THE FIVE WEATHER PHRASES ARE a1.10's AND ARE IMPORTED WHOLE. Its own
 *  grammarIntroduced says it taught them "as one frozen form and never
 *  conjugated"; this is where they stop being frozen. */
const WEATHER_IDS = THIRTY.filter((e) => e.reach === 'be').map((e) => e.id);

/** THE THREE NAMING FORMS, and not one of them is authored.
 *
 *  The brief says all four headwords are in `fr.sons.verbes-essentiels.*`. TWO
 *  are. `lire` is not in that theme, and nor is `écrire`: measured 2026-08-12,
 *  not one of the five `lire` rows lives in a verb theme at all. */
const NAMING_FORMS: [string, string][] = [
  ['faire', 'fr.sons.verbes-essentiels.004'],
  ['dire', 'fr.sons.verbes-essentiels.005'],
  ['lire', 'fr.a1.dictee.091'],
];
/** The gendered `lire` row the brief warns about and this build does not take. */
const GENDERED_LIRE = 'fr.a1.ecole.048';

/** THE PAIRS THE EAR CAN SETTLE, one per verb. `il` and `ils` are one sound, so
 *  the verb is the whole evidence.
 *
 *  NOTE THE DIRECTION, WHICH IS THE OPPOSITE OF a2.02's. There the singular was
 *  the nasal one; here the plural is (`FEH` against `FOHⁿ`), and on the other
 *  two verbs neither side is nasal at all. A guard copied from a2.02 that
 *  required a nasal singular would reject all three of these. */
const NUMBER_PAIRS: [string, string][] = [
  ['fr.a2.verbes.303', 'fr.a2.verbes.306'],
  ['fr.a2.verbes.309', 'fr.a2.verbes.312'],
  ['fr.a2.verbes.315', 'fr.a2.verbes.318'],
];

/** THE SINGULAR TRIPLES: three spellings whose respellings are one string once
 *  the pronoun token comes off. Three of them, one per verb, which is one more
 *  than a2.02 managed. */
const SINGULAR_TRIPLES: string[][] = [
  ['fr.a2.verbes.301', 'fr.a2.verbes.302', 'fr.a2.verbes.303'],
  ['fr.a2.verbes.307', 'fr.a2.verbes.308', 'fr.a2.verbes.309'],
  ['fr.a2.verbes.313', 'fr.a2.verbes.314', 'fr.a2.verbes.315'],
];

/** THE SPELLINGS AN EAR QUESTION MAY NEVER ASK BETWEEN. */
const HOMOPHONE_FORMS: string[][] = [['fais', 'fait'], ['dis', 'dit'], ['lis', 'lit']];

/** THE STRUCTURAL GUARDS. Regexes rather than word lists, because a word list
 *  misses the verb nobody thought of. None uses `\b` next to an accented
 *  character: `\b` in JavaScript is ASCII-only and a2.02 shipped a passé composé
 *  guard that never fired for exactly that reason. Invariants §0. */
const FUTUR_PROCHE_SHAPE = /(^|[^a-zà-ÿ])(vais|vas|va|allons|allez|vont)\s+(?:ne\s+|n['’]\s*)?[a-zà-ÿ]{3,}(?:er|ir|re|oir)(?![a-zà-ÿ])/i;
const MODAL_SHAPE = /(^|[^a-zà-ÿ])(peux|peut|pouvons|pouvez|peuvent|veux|veut|voulons|voulez|veulent|dois|doit|devons|devez|doivent|faut)\s+(?:ne\s+|n['’]\s*)?[a-zà-ÿ]{3,}(?:er|ir|re|oir)(?![a-zà-ÿ])/i;
const REPORTED_SPEECH_SHAPE = /(^|[^a-zà-ÿ])(dis|dit|disons|dites|disent)\s+(que|qu['’])/i;
const PASSE_COMPOSE_SHAPE = /(^|[^a-zà-ÿ])(ai|as|a|avons|avez|ont|suis|est|sommes|sont)\s+[a-zà-ÿ]{2,}(é|és|ée|ées)(?![a-zà-ÿ])/i;
/** `fait` is this verb's past participle as well as its il form, so the phrase
 *  list leads with the three these verbs would produce. */
const PASSE_COMPOSE_PHRASES = [
  'ai fait', 'a fait', 'ont fait', 'avons fait',
  'ai dit', 'a dit', 'ont dit', 'ai lu', 'a lu',
  'est allé', 'est venu', 'a fini', 'a vendu',
];

/** a1.10's weather vocabulary and a2.26's shopping vocabulary. NOT the
 *  adjectives inside the five imported phrases: `beau` and `chaud` are in this
 *  lesson's own content and listing them would fire the guard on itself. */
const WEATHER_VOCAB = [
  'la pluie', 'le soleil', 'le vent', 'la neige', 'un nuage', 'le ciel', "l'orage",
  'le brouillard', 'la tempête', 'la saison', 'la météo', 'le printemps', "l'été",
  "l'automne", "l'hiver", 'la chaleur', 'la température', 'il pleut', 'il neige',
  'nuageux', 'ensoleillé', 'pluvieux',
];
const SHOPPING_VOCAB = [
  'le prix', 'la caisse', 'le panier', 'la monnaie', 'le rayon',
  'le supermarché', "l'épicerie", 'le marché', 'combien', 'cher',
];

/** THE TWO REPAIRS, and one of them is deliberately NOT a superscript.
 *  `promenade` is /pʁɔm.nad/ with a real m and no nasal vowel, so a superscript
 *  would teach a sound that is not in the word. Invariants §3's `jaune` case. */
const REPAIRS = [
  { id: 'fr.a1.sports-et-loisirs.073', fr: 'faire de la natation', from: 'FEHR DUH LAH na-ta-SYOHN', to: 'FEHR DUH LAH na-ta-SYOHⁿ', superscript: true },
  { id: 'fr.a1.animaux-domestiques.123', fr: 'faire une promenade', from: 'fair ün prohm-NAHD', to: 'fair ün prom-NAHD', superscript: false },
];
/** Three imported rows carry NO respelling and this build does not invent one:
 *  adding a transcription to somebody else's row is authoring, not importing. */
const NO_RESPELL_IDS = ['fr.a1.famille.136', 'fr.a1.dictee.122', 'fr.b2.rp-achats.004'];
/** Three rows gain a `flashcard` drill, because every released row is served as
 *  a hub card and these three carried {voiceflash, review} only. */
const DRILL_ADDITIONS = ['fr.a1.dictee.091', 'fr.a1.famille.136', 'fr.a1.dictee.122'];

const EXPECTED_AUTHORED = 25;
const EXPECTED_ITEMS = 51;
const EXPECTED_DICTATION = 10;
const EXPECTED_QUESTIONS = 30;
const EXPECTED_ROUNDS = 5;
const EXPECTED_TRIGGERS = 5;
const EXPECTED_TAPTABLE_ROWS = 6;
const OWNED_FROM = 'fr.a2.verbes.301';
const OWNED_TO = 'fr.a2.verbes.340';

const UNIT_ID = 'a2.12';
const UNIT_TITLE = 'Irregular Verbs 2: Faire, Dire, Lire';
const UNIT_SUB = 'Irréguliers 2 : faire, dire, lire';
const UNIT_CANDO = 'Can use faire, dire and lire and the common expressions built on faire';

const JARGON = ['conjugation', 'conjugate', 'conjugated', 'indicative', 'morpheme', 'inflection', 'paradigm', 'orthography', 'phoneme', 'first person', 'second person', 'third person'];

/* ─── Helpers, none of which reimplements app logic ─────────────────────── */

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment']);
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}
/** Accent-aware word-boundary search. `\b` is ASCII-only in JavaScript and
 *  returns zero on a trailing accent, which looks exactly like an absence.
 *
 *  NOTE that `'` counts as a word character here, which is why the lesson writes
 *  "belong to a2.26" rather than "are a2.26's": a search for the unit id does
 *  not match the possessive, and the build went to v2 over exactly that. */
function hasPhrase(hay: string, needle: string): boolean {
  const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = h[i + n.length] ?? '';
    if (!isWord(before) && !isWord(after)) return true;
    i += 1;
  }
  return false;
}
const sec = (id: string) => L?.sections.find((s) => (s as { id?: string }).id === id);
const afterPronoun = (r: string) => r.split(' ').slice(1).join(' ');
const isMine = (id: string) => id >= OWNED_FROM && id <= OWNED_TO;

/** EVERY SURFACE A LEARNER READS, and `intro` and `overview` are two of them.
 *  a2.11 shipped "third person" in `intro` at v1 because every guard in the band
 *  walked sections + sheets + terms and nothing looked at it. Ledger §0. */
const learnerText = L
  ? [
    ...strings(L.sections), ...strings(L.sheets ?? []), ...strings(L.terms ?? {}),
    L.intro ?? '', ...strings(L.overview ?? {}),
  ].join('\n')
  : '';
const learnerProse = L
  ? [
    ...prose(L.sections), ...prose(L.sheets ?? []), ...prose(L.terms ?? {}),
    L.intro ?? '', ...prose(L.overview ?? {}),
  ]
  : [];

/** WHAT THE LEARNER IS ASKED TO PRODUCE OR CHOOSE, plus the vocabulary decks.
 *  Narrower than "a section", and the only scope on which the neighbour guards
 *  are honest: s16-notmine NAMES a1.10 and a2.26 in order to hand them back. */
function productionSurfaces(): string[] {
  if (!L) return [];
  const out: string[] = [];
  const quiz = L.sections.find((s) => s.type === 'quiz');
  if (quiz && quiz.type === 'quiz') {
    for (const q of quizQuestions(quiz)) {
      if (q.answer) out.push(q.answer);
      if (q.target) out.push(q.target);
      for (const a of q.accept ?? []) out.push(a);
      for (const o of q.opts ?? []) out.push(o);
    }
  }
  for (const s of L.sections) {
    if (s.type === 'scenario') for (const t of s.turns) out.push(t.user, ...(t.alts ?? []).map((a) => a.fr));
    if (s.type === 'groupDrill') for (const g of s.groups) { if (g.check) out.push(...g.check.opts); out.push(...strings(g.items ?? [])); }
    if (s.type === 'listening') for (const q of s.questions) out.push(...q.opts);
    if (s.type === 'trapDrill') for (const d of s.drill) out.push(...d.opts);
    if (s.type === 'tapTable') for (const r of s.rows) out.push(...strings(r));
    if (['vocabThemes', 'flashcards', 'reviewDeck', 'dictation', 'practice'].includes(s.type)) out.push(...strings(s));
  }
  for (const d of L.drills ?? []) {
    for (const p of (d as { pairs?: [string, string][] }).pairs ?? []) out.push(p[1]);
    const o = d as { opts?: string[]; correct?: number };
    if (typeof o.correct === 'number' && o.opts) out.push(o.opts[o.correct]);
  }
  return out;
}
const PRODUCTION = productionSurfaces();

/* ─── The authored source, for the seed-against-source half ─────────────── */

let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_REACH_CLAIM = '';
let SRC_CONTROL_CLAIM = '';
let SRC_TES_CLAIM = '';
let SRC_ONT_CLAIM = '';
let SRC_NOUS_ON = '';
let SRC_WHAT_FOLLOWS = '';
let SRC_AUTHORED: Item[] = [];
let SRC_IMPORTED: Item[] = [];
let SRC_READ_ONLY_IDS: string[] = [];
let SRC_PARADIGM: typeof PARADIGM = [];
let SRC_BREAKS: { verb: string; person: string; form: string }[] = [];
let SRC_CONTROL_BREAKS: unknown[] = [];
let SRC_EXPRESSION_IDS: string[] = [];
let SRC_THEMES: string[] = [];
let SRC_DICTATION: string[] = [];
let SRC_SPEAK: string[] = [];
let SRC_ITEM_IDS: string[] = [];
let SRC_NEAR_MISS: { id: string; wrong: string; scorable: boolean }[] = [];
let SRC_REPAIRS: { id: string; from: string; to: string }[] = [];
let SRC_BLIND: unknown[] = [];
let SRC_VISIBLE: { id: string; must: string }[] = [];
let SRC_ERROR: unknown = null;

try {
  const corpus = await import('../../../ealch-admin/scripts/data/faire-dire-lire-corpus.ts');
  const lesson = await import('../../../ealch-admin/scripts/data/faire-dire-lire-lesson.ts');
  const imported = await import('../../../ealch-admin/scripts/data/faire-dire-lire-imported.ts');
  const terms = await import('../../../ealch-admin/scripts/data/faire-dire-lire-terms.ts');
  SRC = lesson.FAIRE_DIRE_LIRE_LESSON as Lesson;
  SRC_REFRAME = terms.REFRAME as string;
  SRC_REACH_CLAIM = terms.REACH_CLAIM as string;
  SRC_CONTROL_CLAIM = terms.CONTROL_CLAIM as string;
  SRC_TES_CLAIM = terms.TES_CLAIM as string;
  SRC_ONT_CLAIM = terms.ONT_CLAIM as string;
  SRC_NOUS_ON = terms.NOUS_ON as string;
  SRC_WHAT_FOLLOWS = terms.WHAT_FOLLOWS as string;
  SRC_AUTHORED = (corpus.FAIRE_DIRE_LIRE as unknown[]).map((s) => corpus.toItem(s as never)) as Item[];
  SRC_IMPORTED = imported.IMPORTED_ROWS as unknown as Item[];
  SRC_READ_ONLY_IDS = (imported.READ_ONLY_VERBS as { id: string }[]).map((b) => b.id);
  SRC_THEMES = imported.SOURCE_THEMES as string[];
  SRC_PARADIGM = corpus.PARADIGM as unknown as typeof PARADIGM;
  SRC_BREAKS = corpus.BREAKS as unknown as typeof SRC_BREAKS;
  SRC_CONTROL_BREAKS = corpus.CONTROL_BREAKS as unknown[];
  SRC_EXPRESSION_IDS = lesson.FAIRE_DIRE_LIRE_EXPRESSION_IDS as string[];
  SRC_DICTATION = lesson.FAIRE_DIRE_LIRE_DICTATION_IDS as string[];
  SRC_SPEAK = lesson.FAIRE_DIRE_LIRE_SPEAK_IDS as string[];
  SRC_ITEM_IDS = lesson.FAIRE_DIRE_LIRE_ITEM_IDS as string[];
  SRC_NEAR_MISS = corpus.DICTEE_NEAR_MISS as unknown as typeof SRC_NEAR_MISS;
  SRC_REPAIRS = corpus.RESPELL_REPAIRS as unknown as typeof SRC_REPAIRS;
  SRC_BLIND = corpus.BLIND_NASALS as unknown[];
  SRC_VISIBLE = corpus.VISIBLE_NASALS as unknown as typeof SRC_VISIBLE;
} catch (e) {
  SRC_ERROR = e;
}
const noSrc = !SRC;
/** Absent is fine. Present and throwing is not. */
const MISSING_CODES = new Set(['ERR_MODULE_NOT_FOUND', 'MODULE_NOT_FOUND', 'ENOENT']);
const srcMerelyAbsent = !!SRC_ERROR && MISSING_CODES.has((SRC_ERROR as { code?: string }).code ?? '');

/* ═══ 1. The lesson exists, in the shape it claims ═══════════════════════ */

test('a2.12.l1 is in the seed', () => {
  ok(L, 'a2.12.l1 is not in seed.json');
});

test('THE AUTHORED SOURCE EITHER IMPORTS OR IS GENUINELY ABSENT', () => {
  // Half of this file compares the seed against the authored source, and all of
  // that half is `{ skip: noSrc }`. A source that is missing is a checkout
  // without ealch-admin and the skips are correct. A source that THROWS is a
  // broken build, and swallowing it turns forty assertions into silence while
  // the file still reports green.
  ok(
    SRC || srcMerelyAbsent,
    `the authored source threw on import, so every source-derived test in this file silently skipped: ${String(SRC_ERROR)}`,
  );
});

test('the lesson validates and its density is legal', { skip: noLesson }, () => {
  const issues = validateLesson(L!, L!.id);
  strictEqual(issues.length, 0, formatIssues(issues));
  const d = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(d.length, 0, formatDensity(d));
});

test('the spine is in order', { skip: noLesson }, () => {
  strictEqual(L!.sections.map((s) => (s as { id?: string }).id).join(','), SPINE.join(','));
});

test('the acts hold the sections they claim, and the Owns act is the heaviest', { skip: noLesson }, () => {
  const acts = L!.acts ?? [];
  strictEqual(acts.length, ACTS.length);
  acts.forEach((a, i) => {
    strictEqual(a.id, ACTS[i].id);
    strictEqual(a.sections.length, ACTS[i].n, `${a.id} holds ${a.sections.length} sections, expected ${ACTS[i].n}`);
    for (const s of a.sections) ok(SPINE.includes(s), `${a.id} names ${s}, which is not in the spine`);
  });
  const owns = acts.find((a) => a.id === OWNS_ACT)!;
  const para = acts.find((a) => a.id === PARADIGM_ACT)!;
  ok(
    owns.sections.length > para.sections.length,
    `the Owns act holds ${owns.sections.length} missions and the paradigm act holds ${para.sections.length}.\n`
    + `  Doctrine §B.5 is explicit: if the act structure gives the paradigm more missions than the Owns, the wrong\n`
    + `  lesson was built. This is the first lesson in batch 1 where the paradigm is genuinely not the point.`,
  );
  const claimed = acts.flatMap((a) => a.sections);
  strictEqual(new Set(claimed).size, claimed.length, 'a section is claimed by two acts');
  strictEqual(claimed.length, SPINE.length, 'a section belongs to no act');
});

test('the unit carries the lesson, byte for byte from the database', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === UNIT_ID);
  ok(u, `unit ${UNIT_ID} is not in the seed`);
  strictEqual(u!.title, UNIT_TITLE);
  strictEqual(u!.sub, UNIT_SUB);
  strictEqual(u!.canDo, UNIT_CANDO);
  ok((u!.lessonIds ?? []).includes('a2.12.l1'), `unit ${UNIT_ID} does not list its lesson`);
  ok((u!.prereqUnitIds ?? []).includes('a2.02'), `unit ${UNIT_ID} does not rest on a2.02`);
  // The eyebrow missions.ts computes at render time, against the stored fallback.
  strictEqual(L!.tag, `A2 · LEÇON ${String(u!.seq).padStart(2, '0')}`);
  // AND THE SUB CARRIES NO COUNT. The brief says the sub "says thirty and the Den
  // advertises it". It does not: measured 2026-08-12 it is the verb list and
  // holds no number, so nothing had to be padded to meet one. The `2` in
  // "Irréguliers 2" is this unit's place in the series.
  ok(!/(^|[^a-zà-ÿ0-9])(\d{2,}|thirty|trente)(?![a-zà-ÿ0-9])/i.test(String(u!.sub)), `the unit sub now carries a count: ${JSON.stringify(u!.sub)}`);
});

/* ═══ 2. THE OWNS: the thirty, individually by name ══════════════════════ */

test('ALL THIRTY EXPRESSIONS ARE IN THE SEED, ASSERTED ONE BY ONE', { skip: noLesson }, () => {
  strictEqual(THIRTY.length, EXPRESSION_TARGET);
  strictEqual(new Set(THIRTY.map((e) => e.fr)).size, EXPRESSION_TARGET, 'an expression is listed twice');
  strictEqual(new Set(THIRTY.map((e) => e.id)).size, EXPRESSION_TARGET, 'two expressions claim one row');
  for (const e of THIRTY) {
    const row = byId.get(e.id);
    ok(row, `${e.fr} (${e.id}) is not in the seed, so its card would draw empty`);
    strictEqual(row!.fr, e.fr, `${e.id} holds ${JSON.stringify(row!.fr)} and the lesson expects ${JSON.stringify(e.fr)}`);
    ok(L!.itemIds.includes(e.id), `${e.fr} is not in itemIds`);
    // EVERY ONE IS BUILT ON faire. An expression that is not is a vocabulary
    // item, and this lesson teaches no vocabulary.
    ok(/^(faire |il fait )/.test(row!.fr), `${e.id} ${JSON.stringify(row!.fr)} is not built on ${THE_VERB}`);
    // AND EVERY ONE IS SERVED BY THE HUB. A released row with no flashcard drill
    // is released to nothing.
    ok((row!.drills ?? []).includes('flashcard'), `${e.id} has no flashcard drill and is released by a tranche`);
  }
  strictEqual(REACH_ORDER.map((k) => THIRTY.filter((e) => e.reach === k).length).reduce((a, b) => a + b, 0), EXPRESSION_TARGET);
  for (const k of REACH_ORDER) ok(THIRTY.some((e) => e.reach === k), `the ${k} group is empty, so a tapTable row plays nothing`);
});

test('TWENTY-THREE OF THE THIRTY ARE IMPORTED, NOT RE-AUTHORED', { skip: noLesson }, () => {
  // The brief asks for this: "assert that the ids you reference in meteo are the
  // pre-existing ones". It is asserted for all twenty-three rather than for the
  // five, because a build that authored its own copy of any expression would
  // serve it twice in the flashcard hub.
  const imported = THIRTY.filter((e) => !e.mine);
  strictEqual(imported.length, 23, 'the imported/authored split has moved');
  for (const e of imported) {
    ok(
      !isMine(e.id),
      `${e.fr} is marked imported and its id ${e.id} is inside this lesson's own range ${OWNED_FROM}..${OWNED_TO}.\n`
      + `  That means a copy was authored rather than the existing row referenced, and the hub will serve the\n`
      + `  expression twice.`,
    );
  }
  for (const e of THIRTY.filter((x) => x.mine)) {
    ok(isMine(e.id), `${e.fr} is marked authored and ${e.id} is outside this lesson's range`);
  }
  // AND THE FIVE WEATHER PHRASES ARE a1.10's OWN ROWS, by id.
  strictEqual(WEATHER_IDS.length, 5);
  for (const id of WEATHER_IDS) {
    ok(id.startsWith('fr.a1.meteo.'), `${id} is in the weather group and is not a meteo row`);
    ok(!isMine(id), `${id} is a weather phrase inside this lesson's own range, which means it was authored`);
    strictEqual(byId.get(id)?.theme, 'meteo', `${id} is not in the meteo theme`);
  }
  // FIFTEEN SOURCE THEMES. The reach of faire IS the list of themes; a build that
  // narrowed to three has stopped importing and started authoring.
  const themes = new Set(imported.map((e) => byId.get(e.id)!.theme));
  ok(themes.size >= 14, `the imported rows come from ${themes.size} themes, expected about fifteen: ${[...themes].sort().join(', ')}`);
});

test('THE tapTable IS SIX ROWS, ONE PER ENGLISH VERB', { skip: noLesson }, () => {
  const s = sec(REACH_SECTION);
  ok(s, `${REACH_SECTION} is gone, and it is the screen the Owns lives on`);
  strictEqual(s!.type, 'tapTable', `${REACH_SECTION} must be a tapTable: only a tapTable gives each row its own audio and its own detail`);
  const t = s as unknown as { cols: string[]; rows: { cells: string[]; say?: string; detail?: unknown }[] };
  strictEqual(
    t.rows.length, EXPECTED_TAPTABLE_ROWS,
    `${REACH_SECTION} has ${t.rows.length} rows.\n`
    + `  A2-BRIEF-CORRECTIONS §8 measures the ceiling at ${EXPECTED_TAPTABLE_ROWS} on a Pixel 6, because tapTable is NOT in\n`
    + `  ownsLayout() (LessonPager.tsx:162) and renders inside a scrolling page. The brief asks for a row per\n`
    + `  expression; thirty rows is five screens of scroll with no checkpoint in it.`,
  );
  strictEqual(t.cols.length, 2);
  t.rows.forEach((row, i) => {
    ok(row.say, `tapTable row ${i + 1} carries no \`say\`, so it cannot be played with one tap`);
    ok(row.detail, `tapTable row ${i + 1} carries no detail, so the group behind it is unreachable`);
    // THE DETAIL LISTS ITS OWN GROUP. A row whose detail listed somebody else's
    // expressions would be worse than no detail at all.
    const listed = strings(row.detail).join(' ');
    const k = REACH_ORDER[i];
    for (const e of THIRTY.filter((x) => x.reach === k)) {
      ok(hasPhrase(listed, e.fr), `tapTable row ${i + 1} (${k}) does not list its own expression ${JSON.stringify(e.fr)}`);
    }
  });
  strictEqual(L!.sections.filter((s2) => s2.type === 'tapTable').length, 1, 'one tapTable in the flow');
  strictEqual(L!.sections.filter((s2) => s2.type === 'table').length, 0, 'a table at layer core is a table-in-core density failure');
});

test('the thirty reach a screen across the four groupDrills', { skip: noLesson }, () => {
  // a1.08 declared 43 itemIds that resolved perfectly and were drawn by nothing.
  const shown = new Map<string, string>();
  for (const sid of EXPRESSION_SECTIONS) {
    const s = sec(sid);
    ok(s, `${sid} is gone, and it is one of the four sections that put the thirty on a screen`);
    strictEqual(s!.type, 'groupDrill', `${sid} is a ${s!.type}: only a groupDrill both owns its layout and carries itemIds`);
    for (const g of (s as unknown as { groups: { items?: { itemId?: string }[] }[] }).groups) {
      for (const it of g.items ?? []) {
        if (!it.itemId) continue;
        ok(!shown.has(it.itemId), `${it.itemId} is shown twice, on ${shown.get(it.itemId)} and ${sid}`);
        shown.set(it.itemId, sid);
      }
    }
  }
  for (const e of THIRTY) ok(shown.has(e.id), `${e.fr} (${e.id}) is in the thirty and no groupDrill shows it`);
});

/* ═══ 3. THE THREE CELLS THAT CATCH PEOPLE ══════════════════════════════ */

test('THE THREE vous CELLS ARE ONE GROUP OF ONE SECTION, ADJACENT, IN ORDER', { skip: noLesson }, () => {
  const s = sec(VOUS_ROW_SECTION);
  ok(s, `${VOUS_ROW_SECTION} is gone, and it is the screen the trap is visible on`);
  strictEqual(s!.type, 'groupDrill');
  const g = (s as unknown as { groups: { items?: { itemId?: string }[] }[] }).groups;
  strictEqual(
    g.length, 1,
    `${VOUS_ROW_SECTION} has ${g.length} groups.\n`
    + `  THE THREE CELLS BELONG ON ONE SCREEN, ADJACENT. The brief is explicit that this is the layout the test must\n`
    + `  assert, and a second group puts a heading between them so the learner compares across it.`,
  );
  const items = (g[0].items ?? []).map((it) => it.itemId);
  strictEqual(items.length, 3);
  const want = ['fr.a2.verbes.305', 'fr.a2.verbes.311', 'fr.a2.verbes.317'];
  strictEqual(items.join(), want.join(), `${VOUS_ROW_SECTION} holds ${JSON.stringify(items)}, expected ${JSON.stringify(want)}`);
  // AND THE THREE ROWS REALLY ARE THE vous CELL OF EACH VERB, in the lesson's
  // own verb order, so lire IS present as the control in the same section.
  want.forEach((id, i) => {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    ok(hasPhrase(row!.fr, PARADIGM[4][THE_THREE[i] as 'faire' | 'dire' | 'lire']), `${id} does not hold the vous form of ${THE_THREE[i]}`);
    ok(row!.fr.startsWith('Vous '), `${id} is not a vous sentence`);
  });
});

test('THE TRAP IS EXACTLY THREE CELLS, AND lire BREAKS NONE OF THEM', { skip: noLesson }, () => {
  // Derived from the paradigm rather than asserted: every cell at vous or ils
  // whose form does not end in the ending a2.01 taught.
  const breaks = LEARNED_ENDINGS.flatMap(({ person, ending }) => {
    const row = PARADIGM.find((r) => r.person.startsWith(person))!;
    return (['faire', 'dire', 'lire'] as const)
      .filter((v) => !row[v].endsWith(ending))
      .map((v) => ({ verb: v, person: row.person, form: row[v] }));
  });
  strictEqual(
    breaks.length, 3,
    `${breaks.length} cells break the endings a2.01 taught, expected 3: ${breaks.map((b) => b.form).join(', ')}`,
  );
  strictEqual(breaks.map((b) => b.form).sort().join(','), 'dites,faites,font');
  // faire BREAKS BOTH CELLS AND dire BREAKS ONE. The brief lists three shapes and
  // implies dire is irregular throughout; `ils disent` ends in -ent like every
  // regular plural in the language.
  strictEqual(breaks.filter((b) => b.verb === 'faire').length, 2);
  strictEqual(breaks.filter((b) => b.verb === 'dire').length, 1);
  strictEqual(
    breaks.filter((b) => b.verb === THE_CONTROL).length, 0,
    `${THE_CONTROL} breaks an ending, so it has stopped being the control case and the third verb has no argument for it`,
  );
  ok(learnerText.includes(CONTROL_CLAIM), `"${CONTROL_CLAIM}" appears on no screen, and without it the third verb is arbitrary`);
  const carrying = L!.sections.filter((s) => strings(s).some((x) => x.includes(CONTROL_CLAIM)));
  ok(carrying.length >= 2, `the control claim reaches ${carrying.length} sections, expected at least 2`);
});

test('EACH OF THE THREE BREAKING CELLS IS DRILLED, BY ITEM', { skip: noLesson }, () => {
  // The brief asks for `vous faites`, `vous dites` and `ils font` each to be
  // drilled and asserted BY ITEM. All three are dictée targets, all three appear
  // in the trapDrill, and all three are produced by a typed quiz question.
  const cells: [string, string][] = [
    ['fr.a2.verbes.305', 'faites'],
    ['fr.a2.verbes.311', 'dites'],
    ['fr.a2.verbes.306', 'font'],
  ];
  const d = L!.sections.find((s) => s.type === 'dictation') as unknown as { itemIds: string[] };
  const trap = L!.sections.find((s) => s.type === 'trapDrill') as unknown as { drill: { opts: string[] }[]; cards: { fr?: string }[] };
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const typed = quizQuestions(quiz as never).filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? ''));
  for (const [id, form] of cells) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    ok(hasPhrase(row!.fr, form), `${id} does not hold the form ${form}`);
    ok(d.itemIds.includes(id), `${id} (${form}) is not a dictée target, and the dictée is the only surface that can test a spelling`);
    const inTrap = trap.drill.some((x) => x.opts.includes(row!.respell ?? '')) || trap.cards.some((c) => c.fr === row!.fr);
    ok(inTrap, `${id} (${form}) is not in the trapDrill`);
    ok(
      typed.some((q) => hasPhrase(`${q.answer ?? ''} ${(q.accept ?? []).join(' ')}`, form)),
      `no typed quiz question makes the learner produce ${form}. No ear question can catch faisez, and an mcq shows the answer.`,
    );
  }
});

test('the two closed clubs are complete, and this lesson closes both', { skip: noLesson }, () => {
  strictEqual(TES_CLUB.length, 3);
  strictEqual(ONT_CLUB.length, 4);
  for (const m of TES_CLUB) ok(m.form.endsWith('tes'), `${m.form} is in the -tes club and does not end in -tes`);
  for (const m of ONT_CLUB) ok(m.form.endsWith('ont'), `${m.form} is in the -ont club and does not end in -ont`);
  strictEqual(TES_CLUB.filter((m) => m.unit === UNIT_ID).length, 2, 'two of the three -tes forms are new here');
  strictEqual(ONT_CLUB.filter((m) => m.unit === UNIT_ID).length, 1, 'one of the four -ont forms is new here');
  ok(learnerText.includes(TES_CLAIM), `"${TES_CLAIM}" appears on no screen`);
  ok(learnerText.includes(ONT_CLAIM), `"${ONT_CLAIM}" appears on no screen`);
  // The three prior units are cited by id, so the claim is a payoff rather than
  // an assertion.
  for (const u of ['a1.06', 'a1.07', 'a2.02']) {
    ok(namesUnitLabel(learnerText, u), `unit ${u} is cited on no screen, and it is where the learner met a member of one of the clubs`);
  }
});

/* ═══ 4. THE THREE PARADIGMS, CELL BY CELL ══════════════════════════════ */

test('ALL THREE PARADIGMS ARE IN THE SEED, EVERY CELL', { skip: noLesson }, () => {
  for (const verb of THE_THREE) {
    const frame = FRAMES[verb];
    const [from, to] = PARADIGM_RANGES[verb];
    const rows = seed.items.filter((i) => i.id >= from && i.id <= to).sort((a, b) => a.id.localeCompare(b.id));
    strictEqual(rows.length, PARADIGM.length, `${verb} has ${rows.length} rows in ${from}..${to}, expected ${PARADIGM.length}`);
    for (const r of rows) ok(r.fr.endsWith(frame), `${r.id} "${r.fr}" is not on ${verb}'s frame "${frame}"`);
    PARADIGM.forEach((p, i) => {
      const want = p[verb as 'faire' | 'dire' | 'lire'];
      ok(hasPhrase(rows[i].fr, want), `${rows[i].id} "${rows[i].fr}" does not contain the ${verb} form "${want}" for ${p.person}`);
    });
    // AND THE SIX RUN ON ONE FRAME. If they do not, the screen compares six
    // objects as well as six forms.
    strictEqual(new Set(rows.map((r) => r.fr.replace(/^\S+\s+\S+\s*/, ''))).size, 1, `${verb} runs on more than one frame`);
  }
});

test('THE faire PARADIGM RUNS ON ONE OF THE THIRTY', { skip: noLesson }, () => {
  // That is what stops act 2 being a detour from act 3: `faire le lit` is
  // fr.a1.maison.122, one of the thirty, and the six faire cells conjugate it.
  const frame = FRAMES.faire.replace(/\.$/, '');
  const asExpression = `${THE_VERB} ${frame}`;
  ok(
    THIRTY.some((e) => e.fr === asExpression),
    `the ${THE_VERB} paradigm runs on "${frame}", and "${asExpression}" is not one of the thirty.\n`
    + `  The frame was chosen so that the paradigm act conjugates the Owns rather than stepping away from it.`,
  );
});

test('the singular triples are one sound after the pronoun', { skip: noLesson }, () => {
  strictEqual(SINGULAR_TRIPLES.length, 3, 'one triple per verb');
  for (const triple of SINGULAR_TRIPLES) {
    const rows = triple.map((id) => byId.get(id));
    for (const [i, r] of rows.entries()) ok(r, `${triple[i]} is not in the seed`);
    const tails = rows.map((r) => afterPronoun(r!.respell ?? ''));
    strictEqual(
      new Set(tails).size, 1,
      `the singular triple ${triple.join(' / ')} does not sound the same: ${tails.join(' | ')}\n`
      + `  Three spellings and one sound is what makes the dictée the only surface that can test the singular, and\n`
      + `  what makes every ear question in this lesson about NUMBER rather than about person.`,
    );
    strictEqual(new Set(rows.map((r) => r!.fr)).size, 3, 'the triple does not hold three different sentences');
  }
});

test('THE NUMBER PAIRS ARE AUDIBLE, AND ONLY THE VERB MOVES', { skip: noLesson }, () => {
  // DELIBERATELY NOT a2.02's assertion. That one required the singular to be
  // nasal and the plural oral, which is true of `venir` and false of all three
  // verbs here: faire is the other way round and dire and lire have no nasal on
  // either side.
  strictEqual(NUMBER_PAIRS.length, 3, 'one pair per verb');
  for (const [sing, plur] of NUMBER_PAIRS) {
    const a = byId.get(sing);
    const b = byId.get(plur);
    ok(a && b, `${sing} / ${plur} does not resolve against the seed`);
    const pa = (a!.respell ?? '').split(' ');
    const pb = (b!.respell ?? '').split(' ');
    strictEqual(pa[0], pb[0], `${sing} and ${plur} respell their pronoun differently, so the learner can answer from the pronoun`);
    ok(pa[1] !== pb[1], `${sing} and ${plur} respell the verb identically, so there is nothing for the ear to catch`);
    strictEqual(pa.slice(2).join(' '), pb.slice(2).join(' '), `${sing} and ${plur} differ after the verb; only the verb may move`);
  }
  // AND ON faire IT IS THE PLURAL THAT GOES NASAL, which is the opposite of what
  // a2.02 taught on venir and is worth pinning so nobody "corrects" it.
  strictEqual(byId.get('fr.a2.verbes.303')?.respell?.includes('ⁿ'), false, 'il fait is not nasal');
  strictEqual(byId.get('fr.a2.verbes.306')?.respell?.includes('ⁿ'), true, 'ils font is the nasal half of the pair');
});

/* ═══ 5. THE a1.10 LOOP, AND THE NEIGHBOURS' MATERIAL ═══════════════════ */

test('THE WEATHER PHRASES ARE UNFROZEN, NOT RE-TAUGHT', { skip: noLesson }, () => {
  ok(
    namesUnitLabel(learnerText, 'a1.10'),
    'a1.10 is named by no section.\n'
    + '  Its own grammarIntroduced says it taught il fait plus an adjective "as one frozen form and never\n'
    + '  conjugated", and this lesson is where those phrases stop being frozen. That has to be said to the learner.',
  );
  const s = sec(WEATHER_SECTION);
  ok(s, `${WEATHER_SECTION} is gone, and with it the screen that unfreezes a1.10's phrases`);
  strictEqual(s!.type, 'groupDrill');
  const items = ((s as unknown as { groups: { items?: { itemId?: string }[] }[] }).groups[0].items ?? []).map((it) => it.itemId);
  strictEqual(items.join(), WEATHER_IDS.join(), `${WEATHER_SECTION} shows ${JSON.stringify(items)}, expected the five meteo rows`);
});

test('NO WEATHER OR SHOPPING VOCABULARY IS TAUGHT', { skip: noLesson }, () => {
  // Scoped to PRODUCTION SURFACES, not to every string: s16-notmine has to name
  // a1.10 and a2.26 in order to hand them back, and a guard over every string
  // fires on that and gets deleted. Invariants §1 records four ways that has
  // already happened here.
  ok(PRODUCTION.length > 300, 'the production-surface scope collapsed, so this check passed vacuously');
  const weather = WEATHER_VOCAB.filter((w) => PRODUCTION.some((s) => hasPhrase(s, w)));
  strictEqual(
    weather.length, 0,
    `a1.10's weather vocabulary reached a production surface: ${weather.join(', ')}\n`
    + `  This lesson borrows five il fait phrases and teaches NOT ONE weather word.`,
  );
  const shopping = SHOPPING_VOCAB.filter((w) => PRODUCTION.some((s) => hasPhrase(s, w)));
  strictEqual(shopping.length, 0, `a2.26's shopping vocabulary reached a production surface: ${shopping.join(', ')}`);
  // AND BOTH BOUNDARIES ARE HANDED OVER BY ITS LESSON LABEL, on the card that exists to
  // do it. `hasPhrase` treats `'` as a word character, so a possessive would not
  // match: the lesson writes "belong to a2.26" for that reason and went to v2
  // over it.
  const b = sec(BOUNDARY_SECTION);
  ok(b, `${BOUNDARY_SECTION} is gone, and with it the card that hands the neighbours their subjects back`);
  const t = strings(b).join('\n');
  for (const u of ['a1.10', 'a2.26', 'a2.13']) ok(namesUnitLabel(t, u), `${BOUNDARY_SECTION} does not name ${u}, so that boundary is left as a rumour`);
  ok(learnerText.includes(NOT_THE_NOUNS), `"${NOT_THE_NOUNS}" appears on no screen, and it is the general principle the brief asks to be stated`);
});

test('no futur proche, modal, reported speech or passé composé leaks', { skip: noLesson }, () => {
  const futur = PRODUCTION.filter((s) => FUTUR_PROCHE_SHAPE.test(s));
  strictEqual(futur.length, 0, `the futur proche reached a production surface: ${[...new Set(futur)].slice(0, 3).map((s) => JSON.stringify(s)).join(', ')}. That is a2.19.`);
  const modal = PRODUCTION.filter((s) => MODAL_SHAPE.test(s));
  strictEqual(modal.length, 0, `a modal plus a naming form reached a production surface: ${[...new Set(modal)].slice(0, 3).map((s) => JSON.stringify(s)).join(', ')}. That is a2.13, the very next lesson.`);
  const reported = PRODUCTION.filter((s) => REPORTED_SPEECH_SHAPE.test(s));
  strictEqual(reported.length, 0, `reported speech reached a production surface: ${[...new Set(reported)].slice(0, 3).map((s) => JSON.stringify(s)).join(', ')}`);
  const shaped = learnerProse.filter((s) => PASSE_COMPOSE_SHAPE.test(s));
  const phrased = PASSE_COMPOSE_PHRASES.filter((p) => learnerProse.some((s) => hasPhrase(s, p)));
  strictEqual(
    shaped.length + phrased.length, 0,
    `a passé composé is on a learner surface: ${[...shaped.slice(0, 2).map((s) => JSON.stringify(s)), ...phrased].join(', ')}\n`
    + `  \`fait\` is this verb's past participle as well as its il form, so j'ai fait le lit is one word away from a\n`
    + `  screen this lesson already holds.`,
  );
});

test('BOTH STRUCTURAL GUARDS ACTUALLY FIRE', () => {
  // A regex that matches nothing passes every scan silently. a2.02's passé
  // composé guard SHIPPED BROKEN and was found by mutation-testing: it ended
  // with `\b` after `é`, and `\b` in JavaScript is ASCII-only, so it never fired
  // on a real participle. Both directions are pinned, because the negatives are
  // what stop the next author deleting a guard that shouts at ordinary English.
  for (const x of ['Il a mangé.', 'Elle a parlé au voisin', 'ils ont regardé']) {
    ok(PASSE_COMPOSE_SHAPE.test(x), `PASSE_COMPOSE_SHAPE does not match ${JSON.stringify(x)}`);
  }
  for (const x of ['as a bit of it', 'a visit to the shop', 'Nous faisons le lit.']) {
    ok(!PASSE_COMPOSE_SHAPE.test(x), `PASSE_COMPOSE_SHAPE fires on ${JSON.stringify(x)}, which is ordinary English or this lesson's own content`);
  }
  for (const x of ['Je vais manger.', 'Je vais faire les courses.']) ok(FUTUR_PROCHE_SHAPE.test(x), `FUTUR_PROCHE_SHAPE does not match ${JSON.stringify(x)}`);
  for (const x of ['Je vais au parc.', 'Ils font le lit.']) ok(!FUTUR_PROCHE_SHAPE.test(x), `FUTUR_PROCHE_SHAPE fires on ${JSON.stringify(x)}`);
  for (const x of ['Il faut faire la queue.', 'je peux faire le ménage']) ok(MODAL_SHAPE.test(x), `MODAL_SHAPE does not match ${JSON.stringify(x)}`);
  for (const x of ['Ils font le lit.', 'Il fait la queue.', 'a fault in the wall']) ok(!MODAL_SHAPE.test(x), `MODAL_SHAPE fires on ${JSON.stringify(x)}`);
  for (const x of ['Il dit que oui.', "elle dit qu'elle vient"]) ok(REPORTED_SPEECH_SHAPE.test(x), `REPORTED_SPEECH_SHAPE does not match ${JSON.stringify(x)}`);
  for (const x of ['Il dit bonjour.', 'Ils disent bonjour.']) ok(!REPORTED_SPEECH_SHAPE.test(x), `REPORTED_SPEECH_SHAPE fires on ${JSON.stringify(x)}, which is this lesson's own content`);
});

/* ═══ 6. The respellings ════════════════════════════════════════════════ */

test('every authored respelling passes the shared nasal checker', { skip: noLesson }, () => {
  for (const i of seed.items) {
    if (!isMine(i.id) || !i.respell) continue;
    ok(!hasPlainNasalFor(i.fr, i.respell), `${i.id} "${i.fr}" closes a nasal with a plain n or m: ${i.respell}`);
  }
});

test('NO NASAL IN THIS LESSON IS BLIND, AND THAT IS MEASURED', { skip: noSrc || noLesson }, () => {
  // The first lesson in the band with none, and the reason is structural rather
  // than lucky: corrections §6's blind shape is a nasal followed by a consonant
  // INSIDE the token, and every superscript here ends a space- or
  // hyphen-delimited token. Re-measured by breaking each one back in turn.
  strictEqual(SRC_BLIND.length, 0, 'BLIND_NASALS has gained entries; re-read corrections §6 and split the guard');
  ok(SRC_VISIBLE.length > 0, 'no superscripts found at all, so this check would pass vacuously');
  const unseen: string[] = [];
  for (const v of SRC_VISIBLE) {
    const row = byId.get(v.id);
    ok(row, `${v.id} is not in the seed`);
    strictEqual(row!.respell, v.must, `${v.id} respells as ${JSON.stringify(row!.respell)} and the source expects ${JSON.stringify(v.must)}`);
    // Each superscript broken ONE AT A TIME: a row with two of them
    // (sahⁿ-BLAHⁿ) can have one seen and one blind, and breaking both would hide
    // that behind the one the checker catches.
    const positions = [...v.must].reduce<number[]>((acc, c, i) => (c === 'ⁿ' ? [...acc, i] : acc), []);
    for (const p of positions) {
      const broken = `${v.must.slice(0, p)}n${v.must.slice(p + 1)}`;
      if (!hasPlainNasalFor(row!.fr, broken)) unseen.push(`${v.id}: ${broken}`);
    }
  }
  strictEqual(
    unseen.length, 0,
    `the shared checker cannot see ${unseen.length} of this lesson's nasals:\n    ${unseen.join('\n    ')}\n`
    + `  That is corrections §6's blind shape and this lesson claims to have none of it.`,
  );
});

test('the nasal checker has not gone quiet altogether', () => {
  // A POSITIVE CONTROL. Every "seen" result above is worthless in the other
  // direction if the checker no longer flags anything.
  ok(hasPlainNasalFor('bon', 'BOHN'), 'hasPlainNasalFor no longer flags a plain-n nasal, so every result in this file is meaningless');
});

test('THE TWO REPAIRS LANDED, AND ONE OF THEM IS NOT A SUPERSCRIPT', { skip: noLesson }, () => {
  for (const r of REPAIRS) {
    const row = byId.get(r.id);
    ok(row, `${r.id} is repaired and is not in the seed`);
    strictEqual(row!.fr, r.fr);
    strictEqual(row!.respell, r.to, `${r.id} carries ${JSON.stringify(row!.respell)}, expected the repaired ${JSON.stringify(r.to)}`);
    ok(hasPlainNasalFor(r.fr, r.from), `${r.id}'s stored value ${JSON.stringify(r.from)} is not flagged, so it was not a repair`);
    ok(!hasPlainNasalFor(r.fr, r.to), `${r.id}'s repaired value ${JSON.stringify(r.to)} is still flagged`);
    strictEqual(r.to.includes('ⁿ'), r.superscript, `${r.id} disagrees with itself about whether the repair uses a superscript`);
  }
  // ONE OF THE TWO IS DELIBERATELY NOT A SUPERSCRIPT. `promenade` is /pʁɔm.nad/
  // with a REAL m and no nasal vowel; invariants §3 records the same case for
  // `jaune` and `automne`, where a superscript teaches a sound that is not there.
  strictEqual(REPAIRS.filter((r) => !r.superscript).length, 1);
});

test('three imported rows display with no respelling, and that is named', { skip: noLesson }, () => {
  // Adding a transcription to somebody else's row is authoring, not importing,
  // and the difference is the whole of doctrine §2. The gap is named rather than
  // left to be found on a device.
  for (const id of NO_RESPELL_IDS) {
    const row = byId.get(id);
    ok(row, `${id} is not in the seed`);
    ok(!row!.respell, `${id} now HAS a respelling (${row!.respell}); trim NO_RESPELL_IDS and the cards will show it`);
  }
  const surprise = THIRTY.filter((e) => !e.mine && !byId.get(e.id)!.respell && !NO_RESPELL_IDS.includes(e.id));
  strictEqual(surprise.length, 0, `imported row(s) with no respelling that are not named: ${surprise.map((e) => e.id).join(', ')}`);
});

/* ═══ 7. a1.03 does not move ════════════════════════════════════════════ */

test('NOTHING THIS LESSON WRITES OR CARRIES JOINS a1.03 ENDING POPULATION', { skip: noLesson }, () => {
  const mine = seed.items.filter((i) => isMine(i.id));
  strictEqual(endingPopulation(mine).length, 0, 'an authored row joins a1.03 ending population');
  // AND THE CARRIED ROWS TOO. fr.a1.meteo.037 and .039 are kind=word with
  // gender=m, which invariants §5 calls radioactive; they are safe because they
  // are three words long and the population wants a single-word noun. Measured
  // through the REAL endingPopulation rather than argued.
  const carried = [...THIRTY.filter((e) => !e.mine).map((e) => e.id), ...NAMING_FORMS.map(([, id]) => id)]
    .map((id) => byId.get(id)).filter(Boolean) as Item[];
  strictEqual(carried.length, 26, 'a carried row is not in the seed, so its card would draw empty');
  strictEqual(endingPopulation(carried).length, 0, 'a carried row joins a1.03 ending population');
  for (const [verb, id] of NAMING_FORMS) ok(!byId.get(id)!.gender, `${id} "${verb}" carries a gender. A naming form is not a noun.`);
  // AND THE GENDERED lire ROW IS NOT THE ONE IMPORTED.
  ok(!L!.itemIds.includes(GENDERED_LIRE), `${GENDERED_LIRE} carries gender=m on an infinitive and must not be the row imported`);
});

test('the three naming forms are imported, and lire is not where the brief says', { skip: noLesson }, () => {
  for (const [verb, id] of NAMING_FORMS) {
    const row = byId.get(id);
    ok(row, `${verb} (${id}) is not in the seed, so its card would draw empty`);
    strictEqual(row!.fr, verb);
    ok(!isMine(id), `${verb} is at ${id}, inside this lesson's own range, which means it was authored`);
    ok((row!.drills ?? []).includes('flashcard'), `${verb} (${id}) is released by a tranche and has no flashcard drill`);
  }
  // THE BRIEF SAYS ALL FOUR HEADWORDS LIVE IN fr.sons.verbes-essentiels.*.
  // Two do. `lire` does not, and nor does `écrire`.
  strictEqual(NAMING_FORMS.filter(([, id]) => id.startsWith('fr.sons.verbes-essentiels.')).length, 2);
  strictEqual(NAMING_FORMS.find(([v]) => v === 'lire')![1], 'fr.a1.dictee.091');
  // AND THE THREE ROWS THAT GAINED A DRILL REALLY HAVE IT.
  for (const id of DRILL_ADDITIONS) {
    ok((byId.get(id)?.drills ?? []).includes('flashcard'), `${id} did not gain its flashcard drill`);
  }
});

/* ═══ 8. The dictée ═════════════════════════════════════════════════════ */

test('every dictée target spells from LETTERS, through the real dicteeMode', { skip: noLesson }, () => {
  const d = L!.sections.find((s) => s.type === 'dictation');
  ok(d, 'no dictation section');
  const ids = (d as unknown as { itemIds: string[] }).itemIds;
  strictEqual(ids.length, EXPECTED_DICTATION);
  for (const id of ids) {
    const it = byId.get(id);
    ok(it, `dictée target ${id} is not in the seed`);
    strictEqual(
      dicteeMode(it!.fr), 'letters',
      `${id} "${it!.fr}" is in word mode, which hands every real word over pre-spelled and so cannot test a spelling`,
    );
    ok((it!.drills ?? []).includes('dictation'), `${id} carries no dictation drill`);
  }
  // AND `Nous disons bonjour.` IS DELIBERATELY NOT ONE. It is 17 letters, so word
  // mode would hand `disons` over on a tile. It is spoken instead.
  const disons = seed.items.find((i) => i.fr === 'Nous disons bonjour.');
  ok(disons, 'Nous disons bonjour. is not in the seed');
  strictEqual(dicteeMode(disons!.fr), 'words', 'Nous disons bonjour. is no longer over the limit, so it could now be a dictée target');
  ok(!ids.includes(disons!.id), 'Nous disons bonjour. is a dictée target and word mode cannot test a spelling');
});

test('THE DICTÉE GRADES faisez, AND NAMES WHAT IT CANNOT GRADE', { skip: noSrc || noLesson }, () => {
  // Run through the REAL normalizeFr in both directions, so that if fold is ever
  // fixed this fails instead of quietly going stale. a2.09's shape, copied.
  const d = L!.sections.find((s) => s.type === 'dictation');
  const ids = (d as unknown as { itemIds: string[] }).itemIds;
  strictEqual(SRC_NEAR_MISS.length, ids.length, 'every target needs the error a learner would actually make against it');
  for (const n of SRC_NEAR_MISS) {
    const it = byId.get(n.id);
    ok(it, `DICTEE_NEAR_MISS names ${n.id}, which is not in the seed`);
    strictEqual(
      normalizeFr(it!.fr) !== normalizeFr(n.wrong), n.scorable,
      `${n.id} is marked scorable: ${n.scorable} and normalizeFr says otherwise ("${it!.fr}" vs "${n.wrong}")`,
    );
  }
  const theOne = SRC_NEAR_MISS.find((n) => n.wrong === 'Vous faisez le lit.');
  ok(theOne?.scorable, 'the dictée no longer grades faisez, and that is the error the lesson exists to stop');
  // AND THE LIMIT IS NAMED. normalizeFr strips case, so no typed surface can test
  // a capital. Both a1.08 and a1.09 recommended one before it was measured.
  const unscorable = SRC_NEAR_MISS.filter((n) => !n.scorable);
  strictEqual(unscorable.length, 1, 'expected exactly one unscorable target, the sentence-initial capital');
  strictEqual(normalizeFr('Il lit le menu.'), normalizeFr('il lit le menu.'), 'fold no longer strips case, so the capital could now be tested');
});

/* ═══ 9. The quiz ═══════════════════════════════════════════════════════ */

test('the quiz is one section, five rounds, thirty questions, every one with a why', { skip: noLesson }, () => {
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1, 'the pager renders exactly one quiz');
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  strictEqual((quiz as unknown as { rounds: unknown[] }).rounds.length, EXPECTED_ROUNDS);
  const qs = quizQuestions(quiz as never);
  strictEqual(qs.length, EXPECTED_QUESTIONS);
  const ids = new Set(SPINE);
  for (const q of qs) {
    ok(q.why, `question has no why: ${q.q}`);
    ok(q.ref && ids.has(q.ref), `question ref "${q.ref}" names no section: ${q.q}`);
    if (q.opts) strictEqual(new Set(q.opts).size, q.opts.length, `duplicate option in: ${q.q}`);
  }
  ok(qs.filter((q) => q.format === 'mcq').length * 2 <= qs.length, 'over half the questions are mcq');
});

test('every free-text question accepts the answer it displays', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  for (const q of quizQuestions(quiz as never)) {
    if (!['typeIn', 'errorSpot'].includes(q.format ?? '')) continue;
    ok(matchesAccept(q.answer ?? '', q.accept ?? []), `free-text question does not accept its own answer: ${q.answer}`);
  }
});

test('THE QUIZ WEIGHT IS ON THE REACH, NOT ON THE FORMS', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const qs = quizQuestions(quiz as never);
  // AN EXPRESSION IS IDENTIFIED BY ITS OBJECT. The best questions in the quiz put
  // a FORM and an expression together — « Ils ___ les courses le samedi. » — and
  // neither of those contains the naming form. The `why` is out of scope: it is
  // read after the answer.
  const objects = THIRTY.map((e) => e.fr.replace(/^(faire |il fait )/, ''));
  const visible = (q: (typeof qs)[number]) => `${q.q} ${q.answer ?? ''} ${q.target ?? ''} ${(q.accept ?? []).join(' ')} ${(q.opts ?? []).join(' ')}`;
  const owns = qs.filter((q) => objects.some((o) => hasPhrase(visible(q), o)));
  ok(
    owns.length * 2 >= qs.length,
    `only ${owns.length} of ${qs.length} quiz questions touch one of the ${EXPRESSION_TARGET}.\n`
    + `  The Owns is the reach and the paradigms are the scaffolding.`,
  );
  // AND THE SHARPER HALF: how many make the learner CHOOSE between expressions,
  // which is what the canDo asks for. Touching one is cheap, because the faire
  // paradigm runs on `faire le lit` by design.
  const choosing = qs.filter((q) => (q.opts ?? []).filter((o) => objects.some((ob) => hasPhrase(o, ob))).length >= 2);
  ok(choosing.length >= 6, `only ${choosing.length} questions make the learner choose between expressions, expected at least 6`);
  // EVERY SITUATION QUESTION CARRIES THE SITUATION. The brief is explicit: a stem
  // that only names the meaning is a translation test.
  const thin = qs.filter((q) => (q.opts ?? []).filter((o) => THIRTY.some((e) => e.fr === o)).length >= 3 && q.q.trim().split(/\s+/).length < 8);
  strictEqual(thin.length, 0, `question(s) choosing between expressions with no situation in the stem: ${thin.map((q) => q.q).join(' | ')}`);
  const typed = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? ''));
  const listen = qs.filter((q) => q.format === 'listenChoose').length;
  ok(listen >= 2 && listen <= 5, `${listen} listenChoose questions; the number contrast is audible on all three verbs`);
  ok(typed.length > listen * 2, `${typed.length} typed against ${listen} listenChoose; the written half has to carry this quiz`);
});

test('NO EAR QUESTION ASKS BETWEEN TWO FORMS THAT ARE ONE SOUND', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const bad: string[] = [];
  for (const q of quizQuestions(quiz as never)) {
    if (q.format !== 'listenChoose') continue;
    ok(q.say, `listenChoose without a say, so ListenChooseCard speaks opts[correct]: ${q.q}`);
    const opts = q.opts ?? [];
    for (let i = 0; i < opts.length; i++) {
      for (let j = i + 1; j < opts.length; j++) {
        for (const group of HOMOPHONE_FORMS) {
          for (const x of group) for (const y of group) {
            if (x !== y && opts[i].replace(x, y) === opts[j]) bad.push(`"${q.q}" offers ${JSON.stringify(opts[i])} against ${JSON.stringify(opts[j])}`);
          }
        }
      }
    }
  }
  strictEqual(bad.length, 0, `ear question(s) whose options are the same sound:\n    ${[...new Set(bad)].join('\n    ')}\n  No recording separates fais from fait, dis from dit, or lis from lit.`);
});

test('every gap question fixes the person', { skip: noLesson }, () => {
  const SUBJECTS = ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'le', 'la', 'les'];
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const gap = quizQuestions(quiz as never).filter((q) => q.q.includes('___'));
  ok(gap.length >= 6, `only ${gap.length} gap questions`);
  for (const q of gap) {
    ok(/\([a-zà-ÿ]+(er|ir|re|oir)\)/i.test(q.q), `no naming form in the stem, so the question has no single answer: ${q.q}`);
    ok(SUBJECTS.includes(q.q.trim().split(/\s+/)[0].toLowerCase()), `no subject at the head of the stem: ${q.q}`);
  }
});

test('the in-mission answer slots are spread, and nothing shuffles them', { skip: noLesson }, () => {
  // MissionRich renders q.opts.map in AUTHORED order.
  const inMission: { section: string; correct: number }[] = [];
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) inMission.push({ section: sid, correct: g.check.correct });
    if (s.type === 'listening') for (const q of s.questions) inMission.push({ section: sid, correct: q.correct });
    if (s.type === 'trapDrill') for (const d of s.drill) inMission.push({ section: sid, correct: d.correct });
  }
  ok(inMission.length > 15, 'the in-mission scope collapsed, so the spread check passed vacuously');
  const slots = new Map<number, number>();
  for (const q of inMission) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) ok((c / inMission.length) * 100 <= 40, `in-mission slot ${s} holds ${Math.round((c / inMission.length) * 100)}%, over 40`);
  let prev: { section: string; correct: number } | null = null;
  for (const q of inMission) {
    ok(!(prev && prev.section === q.section && prev.correct === q.correct), `${q.section}: consecutive in-mission questions share slot ${q.correct}`);
    prev = q;
  }
});

test('every drill is reachable: drillForRound stops at the first resolving target', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const rounds = (quiz as unknown as { rounds: { targets?: string[] }[] }).rounds;
  const triggers = L!.errorTriggers ?? [];
  strictEqual(triggers.length, EXPECTED_TRIGGERS);
  const fired = new Set<string>();
  for (const r of rounds) {
    const t = (r.targets ?? []).find((x) => triggers.some((e) => e.id === x && e.drill));
    if (t) fired.add(t);
  }
  const orphans = triggers.filter((e) => e.drill && !fired.has(e.id)).map((e) => e.id);
  strictEqual(orphans.length, 0, `trigger(s) whose drill no round can fire: ${orphans.join(', ')}`);
  const drillIds = new Set((L!.drills ?? []).map((d) => d.id));
  for (const t of triggers) {
    if (t.drill) ok(drillIds.has(t.drill), `${t.id} names drill ${t.drill}, which does not exist`);
    if (t.retest) ok(drillIds.has(t.retest), `${t.id} names retest ${t.retest}, which does not exist`);
  }
});

test('EVERY trapDrill promptSound AND OPTION IS A REAL ROW RESPELLING', { skip: noLesson }, () => {
  // a2.02 found by mutation-testing that a promptSound is hand-typed and that
  // nothing checked it, so a drifted value taught a respelling the corpus does
  // not hold while every other gate stayed green.
  const respells = new Set(seed.items.filter((i) => isMine(i.id)).map((i) => i.respell).filter(Boolean) as string[]);
  let n = 0;
  for (const s of L!.sections) {
    if (s.type !== 'trapDrill') continue;
    for (const [i, card] of (s.cards ?? []).entries()) {
      const c = card as { promptSound?: string; fr?: string };
      if (!c.promptSound) continue;
      n += 1;
      ok(respells.has(c.promptSound), `trapDrill card ${i + 1} carries promptSound ${JSON.stringify(c.promptSound)}, which is not any authored row respelling`);
      const own = seed.items.find((x) => x.fr === c.fr);
      ok(!own || own.respell !== c.promptSound, `trapDrill card ${i + 1} plays its own sound as the prompt, so there is nothing to choose between`);
    }
    for (const [i, d] of (s.drill ?? []).entries()) {
      for (const o of d.opts) ok(respells.has(o), `trapDrill drill ${i + 1} offers ${JSON.stringify(o)}, which is not any authored row respelling`);
      strictEqual(new Set(d.opts).size, d.opts.length, `trapDrill drill ${i + 1} repeats an option`);
    }
  }
  ok(n > 0, 'no promptSound found, so the check above passed vacuously');
});

/* ═══ 10. Items, tranches and screens ═══════════════════════════════════ */

test('every itemId resolves, and 25 of them are this lesson own', { skip: noLesson }, () => {
  strictEqual(L!.itemIds.length, EXPECTED_ITEMS);
  for (const id of L!.itemIds) ok(byId.get(id), `itemId ${id} does not resolve against the seed, so its card draws empty`);
  strictEqual(L!.itemIds.filter((id) => isMine(id)).length, EXPECTED_AUTHORED);
});

test('tranches release every item exactly once, and nothing untaught', { skip: noLesson }, () => {
  const tranche = L!.deckTranche ?? [];
  strictEqual(tranche.length, (L!.acts ?? []).length, 'tranches and acts are index-aligned');
  const seen = new Set<string>();
  for (const [i, slice] of tranche.entries()) {
    for (const id of slice) {
      ok(!seen.has(id), `${id} is released twice, in tranche ${i}`);
      seen.add(id);
      ok(L!.itemIds.includes(id), `tranche ${i} releases ${id}, which is not in itemIds`);
    }
  }
  const never = L!.itemIds.filter((id) => !seen.has(id));
  strictEqual(never.length, 0, `item(s) no tranche releases: ${never.join(', ')}`);
  // The thirty are released by the act that TEACHES them, act 3.
  strictEqual(tranche[2].length, EXPRESSION_TARGET, `act 3 releases ${tranche[2].length} items and the thirty are ${EXPRESSION_TARGET}`);
  for (const e of THIRTY) ok(tranche[2].includes(e.id), `${e.fr} is not released by act 3`);
});

test('EVERY ITEM IS ON A SCREEN, not merely resolvable', { skip: noLesson }, () => {
  const shown = new Set<string>();
  for (const s of L!.sections) {
    if (s.type === 'groupDrill') for (const g of s.groups) for (const it of g.items ?? []) if (it.itemId) shown.add(it.itemId);
    if (s.type === 'practice') for (const id of s.itemIds ?? []) shown.add(id);
    if (s.type === 'dictation') for (const id of s.itemIds ?? []) shown.add(id);
  }
  for (const d of L!.drills ?? []) for (const it of (d as { items?: string[] }).items ?? []) shown.add(it);
  const orphan = L!.itemIds.filter((id) => !shown.has(id));
  strictEqual(orphan.length, 0, `item(s) declared, resolvable and drawn by nothing: ${orphan.join(', ')}`);
});

test('every speak target carries voiceflash, and they are the eighteen sentences', { skip: noLesson }, () => {
  const p = L!.sections.find((s) => s.type === 'practice');
  ok(p, 'no practice section');
  const ids = (p as unknown as { itemIds: string[] }).itemIds;
  strictEqual(ids.length, 18, 'the speak mission takes the eighteen paradigm sentences');
  for (const id of ids) {
    const it = byId.get(id);
    ok(it, `speak target ${id} is not in the seed`);
    ok((it!.drills ?? []).includes('voiceflash'), `speak target ${id} carries no voiceflash, so the mic-scored deck cannot score it`);
    // A BARE EXPRESSION IS NOT SPOKEN. a2.01 settled that a naming form on its own
    // is not a thing anybody says, and every one of the thirty is that shape.
    strictEqual(it!.kind, 'sentence', `${id} is a ${it!.kind} and the speak mission takes full sentences only`);
  }
});

test('no duplicate fr among non-sentence rows in the themes this lesson carries', { skip: noLesson }, () => {
  // flashhub-coverage treats two rows sharing an `fr` in one theme as one card
  // served twice. SEVEN authored rows here are non-sentences, which is new in
  // this band, so this is a real check rather than a formality.
  const themes = new Set(['verbes', ...THIRTY.map((e) => byId.get(e.id)!.theme), ...NAMING_FORMS.map(([, id]) => byId.get(id)!.theme)]);
  const seen = new Map<string, string>();
  for (const i of seed.items) {
    if (i.kind === 'sentence' || !themes.has(i.theme)) continue;
    const key = JSON.stringify([i.theme, i.fr]);
    const prev = seen.get(key);
    ok(!prev, `${i.theme} "${i.fr}": ${prev} and ${i.id}`);
    seen.set(key, i.id);
  }
});

/* ═══ 11. The layout traps and the house rules ══════════════════════════ */

test('ONE reference sheet, and its centre is the thirty', { skip: noLesson }, () => {
  const sheets = L!.sheets ?? [];
  strictEqual(sheets.length, EXPECTED_SHEETS);
  const sh = sheets.find((s) => s.id === SHEET_ID);
  ok(sh, `${SHEET_ID} is gone`);
  // ReferenceSheet.tsx draws teach, letterGrid and table and NOTHING else. A
  // cheatSheet in here would draw its title and no rows, which a1.13 ships today.
  const RENDERS = new Set(['teach', 'letterGrid', 'table']);
  for (const s of sh!.sections ?? []) ok(RENDERS.has(s.type), `${SHEET_ID} holds a ${s.type} section, which the sheet renderer does not draw`);
  // THE TABLE THIS SHEET EXISTS FOR. Thirty rows at layer deep, which is exactly
  // the shape the brief wanted from the tapTable and which the tapTable could not
  // carry: a reference sheet is a scrolling page a learner OPENED on purpose.
  const thirty = (sh!.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-thirty');
  ok(thirty && thirty.type === 'table', `${SHEET_ID} no longer holds the table of the thirty`);
  const t = thirty as unknown as { rows: string[][] };
  strictEqual(t.rows.length, EXPRESSION_TARGET);
  for (const e of THIRTY) ok(t.rows.some((r) => r[1] === e.fr), `the sheet's table does not list ${JSON.stringify(e.fr)}`);
  // AND THE PARADIGM GRID, all three verbs side by side, which is what makes the
  // control case visible.
  const grid = (sh!.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-three-verbs');
  ok(grid && grid.type === 'table', `${SHEET_ID} no longer holds the three-verb grid`);
  const g = grid as unknown as { cols: string[]; rows: string[][] };
  strictEqual(g.cols.length, THE_THREE.length + 1, 'a pronoun column and one per verb');
  strictEqual(g.rows.length, PARADIGM.length);
  PARADIGM.forEach((r, i) => {
    strictEqual(g.rows[i].join('|'), [r.person, r.faire, r.dire, r.lire].join('|'), `grid row ${i + 1} has drifted from the paradigm`);
  });
  ok(L!.sections.some((s) => (s as { sheetId?: string }).sheetId === SHEET_ID), 'no section links to the sheet');
});

test('commonErrors carries swipe, or it draws a blank screen', { skip: noLesson }, () => {
  const e = L!.sections.find((s) => s.type === 'commonErrors');
  ok(e, 'no commonErrors section');
  strictEqual((e as unknown as { swipe?: boolean }).swipe, true, 'a1.01 mission 5 drew a blank screen for exactly this reason');
});

test('the reading glossary keys really match, through the real segmenter', { skip: noLesson }, () => {
  const r = L!.sections.find((s) => s.type === 'reading');
  ok(r, 'no reading section');
  const rr = r as unknown as { text: string; glossary?: { word: string }[]; questionsInModal?: boolean; questions?: unknown[] };
  strictEqual(rr.questionsInModal, true, 'reading without questionsInModal never reaches the glossary renderer');
  ok((rr.questions ?? []).length > 0, 'reading with questionsInModal and no questions renders nothing');
  // PassagePage splits on sentence boundaries, so an authored newline is
  // swallowed. One block.
  ok(!rr.text.includes('\n'), 'the passage carries a newline, which PassagePage discards');
  // The REAL matcher, comparing matched KEYS rather than matched text.
  const keySet = new Set((rr.glossary ?? []).flatMap((g) => glossKeys(g.word)));
  const matched = new Set<string>();
  for (const s of segmentSentence(rr.text, keySet)) if (s.key) matched.add(s.key);
  for (const g of rr.glossary ?? []) {
    ok(g.word.trim().split(/\s+/).length <= MAX_GLOSS_WORDS, `glossary key "${g.word}" is longer than MAX_GLOSS_WORDS`);
    ok(glossKeys(g.word).some((k) => matched.has(k)), `glossary key "${g.word}" underlines nothing in the passage`);
  }
});

test('no grammar vocabulary on any learner surface, INCLUDING intro and overview', { skip: noLesson }, () => {
  // a2.11 shipped "third person" in `intro` at v1, drawn on the lesson overview
  // card AND the lesson cover, because every guard in the band walked
  // sections + sheets + terms and nothing looked at it. Ledger §0.
  const hits = JARGON.filter((j) => hasPhrase(learnerText, j));
  strictEqual(hits.length, 0, `grammar vocabulary reached a learner surface: ${hits.join(', ')}`);
  ok(L!.intro, 'the lesson has no intro, and it is drawn on two learner surfaces');
  const inIntro = JARGON.filter((j) => hasPhrase(L!.intro ?? '', j));
  strictEqual(inIntro.length, 0, `grammar vocabulary in Lesson.intro: ${inIntro.join(', ')}`);
  ok(
    (L!.intro ?? '').includes(String(EXPRESSION_TARGET)),
    'Lesson.intro no longer says how many expressions there are, and the reach is the reason to start the lesson',
  );
});

test('the house copy rules hold', { skip: noLesson }, () => {
  for (const s of strings(L!)) {
    ok(!s.includes('—'), `em dash in ${JSON.stringify(s.slice(0, 60))}`);
    ok(!/\bhonest(y|ly)?\b/i.test(s), `"honest" in ${JSON.stringify(s.slice(0, 60))}`);
    ok(!s.includes('‿'), 'U+203F renders as a low underscore on a Pixel 6');
  }
  ok(!JSON.stringify(L!).includes('"autoplay"'), 'autoplay is declared in schema.ts and implemented in no component');
  ok(!JSON.stringify(L!).includes('"imageRef"'), 'lesson-contract.test.ts does not check imageRef and an unregistered ref draws a blank box');
});

test('at most three term chips per section', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    const t = (s as { terms?: string[] }).terms ?? [];
    ok(t.length <= 3, `${(s as { id?: string }).id} declares ${t.length} term chips and the renderer shows three`);
    for (const k of t) ok(L!.terms?.[k], `${(s as { id?: string }).id} names term "${k}", which is not declared`);
  }
});

test('the reframe is carried verbatim and is about the reach', { skip: noLesson }, () => {
  const carrying = L!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME)));
  strictEqual(carrying.length, REFRAME_SECTIONS, `the reframe reaches ${carrying.length} sections, expected ${REFRAME_SECTIONS}`);
  strictEqual(strings(L!).filter((s) => s.includes(REFRAME)).length, REFRAME_APPEARANCES);
  strictEqual(L!.reframe, REFRAME);
  // A reframe naming a verb FORM would make this the fifth consecutive table
  // lesson doctrine §B.5 exists to prevent.
  ok(
    !/(^|[^a-zà-ÿ])(fais|fait|faisons|faites|font|dis|dit|disons|dites|disent|lis|lit|lisons|lisez|lisent)(?![a-zà-ÿ])/i.test(REFRAME),
    'the reframe names a verb form, which makes this a memorisation lesson with a slogan on it',
  );
  ok(REFRAME.trim().split(/\s+/).length <= 12, 'a reframe has to survive recall mid-sentence');
  ok(hasPhrase(REFRAME, THE_VERB), 'the reframe does not name faire, and the rule it states is about keeping that verb');
  ok(learnerText.includes(REACH_CLAIM), `"${REACH_CLAIM}" appears on no screen, and it is where the lesson says what the Owns is worth`);
});

test('THE PATTERN NAME IS a2.02 OWN, QUOTED VERBATIM', { skip: noLesson }, () => {
  ok(
    hasPhrase(learnerText, WHAT_FOLLOWS),
    `"${WHAT_FOLLOWS}" appears on no screen. It is a2.02's name for one form doing two jobs, and inventing a second\n`
    + `  phrase for the same idea is the drift it exists to prevent.`,
  );
  const carrying = L!.sections.filter((s) => strings(s).some((x) => hasPhrase(x, WHAT_FOLLOWS)));
  ok(carrying.length >= 2, `the pattern name reaches ${carrying.length} sections, expected at least 2`);
  ok(namesUnitLabel(learnerText, WHAT_FOLLOWS_UNIT), `${WHAT_FOLLOWS_UNIT} is cited nowhere, so the name is quoted without saying where it came from`);
});

test('the nous/on statement is a2.01 constant and has exactly one home', { skip: noLesson }, () => {
  ok(learnerText.includes(NOUS_ON), 'the nous/on statement no longer appears verbatim; the ledger binds all twenty A2 lessons to a2.01 wording');
  const holders = L!.sections.filter((s) => strings(s).some((x) => x.includes(NOUS_ON))).map((s) => (s as { id?: string }).id);
  strictEqual(holders.join(','), NOUS_ON_SECTION, `the nous/on statement is in ${JSON.stringify(holders)}, expected exactly [${NOUS_ON_SECTION}]`);
});

test('the scene break card fits a Pixel 6', { skip: noLesson }, () => {
  // BUDGETED, not chosen. `scene` is absent from ownsLayout(), so the card cannot
  // size itself, and a2.01 took three device passes to establish what fits.
  // Ledger §7.
  const s = L!.sections.find((x) => x.type === 'scene');
  ok(s, 'no scene section');
  const beats = (s as unknown as { beats: Record<string, unknown>[] }).beats;
  const brk = beats.find((b) => b.kind === 'break') as {
    heading?: string; body?: string; coach?: string;
    wrong?: { en?: string; fr?: string }; right?: { en?: string; fr?: string };
  } | undefined;
  ok(brk, 'the scene has no break card');
  ok((brk!.heading ?? '').length <= 16, `the break heading is ${(brk!.heading ?? '').length} characters; it wraps at about twelve`);
  const words = (brk!.body ?? '').trim().split(/\s+/).length;
  ok(words <= 26, `the break body is ${words} words; the measured budget is about 26 and Continue drops below the fold past it`);
  ok((brk!.coach ?? '').trim().split(/\s+/).length <= 9, 'the coach line is over nine words');
  ok((brk!.wrong?.en ?? '').length <= 26, `the wrong gloss is ${(brk!.wrong?.en ?? '').length} characters; over about 24 it takes two lines`);
  ok((brk!.right?.en ?? '').length <= 26, `the right gloss is ${(brk!.right?.en ?? '').length} characters`);
  for (const side of ['wrong', 'right'] as const) {
    const n = (brk![side]?.fr ?? '').length;
    ok(n > 0 && n <= 22, `the ${side} reading row is ${n} characters and wraps past about 22, which costs a line the card does not have`);
  }
  // AND THE RIGHT ROW IS DERIVED FROM TWO CORPUS ROWS rather than typed: the
  // front of `Je fais le lit.` and the back of the imported `faire le ménage`.
  const je = byId.get('fr.a2.verbes.301');
  const menage = byId.get('fr.a1.routines.030');
  ok(je && menage, 'the scene builds its contrast row from two rows that are not in the seed');
  strictEqual(brk!.right?.fr, `Je fais ${menage!.fr.replace(/^faire /, '')}.`);
});

test('no question stem quotes a sentence and doubles its full stop', { skip: noLesson }, () => {
  // Found by mutation-testing on a2.02 rather than by any guard: `${fr(id)}. And
  // this one?` renders as "Il fait le lit.. And this one?" and shipped to the
  // seed that way before it was noticed.
  //
  // EXACTLY TWO DOTS, with a lookbehind as well as a lookahead. The obvious
  // version fires on a deliberate trailing-off, which is the register of an A2
  // scene.
  for (const x of strings(L!.sections)) {
    ok(!/(?<!\.)\.\.(?!\.)/.test(x), `a doubled full stop on a learner surface: ${JSON.stringify(x.slice(0, 70))}`);
  }
});

/* ═══ 12. Seed against authored source ══════════════════════════════════ */

test('the seed lesson matches the authored source', { skip: noSrc || noLesson }, () => {
  strictEqual(L!.version, SRC!.version);
  strictEqual(L!.sections.length, SRC!.sections.length);
  strictEqual(L!.itemIds.length, SRC!.itemIds.length);
  strictEqual(L!.reframe, SRC_REFRAME);
  strictEqual(REFRAME, SRC_REFRAME, 'this test file and the source disagree about the reframe');
  strictEqual(REACH_CLAIM, SRC_REACH_CLAIM, 'this test file and the source disagree about what the reach is worth');
  strictEqual(CONTROL_CLAIM, SRC_CONTROL_CLAIM, 'this test file and the source disagree about the control claim');
  strictEqual(TES_CLAIM, SRC_TES_CLAIM, 'this test file and the source disagree about the -tes club');
  strictEqual(ONT_CLAIM, SRC_ONT_CLAIM, 'this test file and the source disagree about the -ont club');
  strictEqual(NOUS_ON, SRC_NOUS_ON, "this test file and a2.01's constant disagree");
  strictEqual(WHAT_FOLLOWS, SRC_WHAT_FOLLOWS, "this test file and a2.02's pattern name disagree");
});

test('every authored row reached the seed unchanged', { skip: noSrc }, () => {
  strictEqual(SRC_AUTHORED.length, EXPECTED_AUTHORED);
  for (const a of SRC_AUTHORED) {
    const s = byId.get(a.id);
    ok(s, `${a.id} was authored and is not in the seed`);
    strictEqual(s!.fr, a.fr, `${a.id} fr differs between source and seed`);
    strictEqual(s!.respell ?? null, a.respell ?? null, `${a.id} respell differs between source and seed`);
    strictEqual(s!.en, a.en, `${a.id} en differs between source and seed`);
    strictEqual((s!.drills ?? []).slice().sort().join(), (a.drills ?? []).slice().sort().join(), `${a.id} drills differ`);
    strictEqual(s!.theme, 'verbes');
    strictEqual(s!.level, 'a2', 'doctrine §C: everything authored here is a2');
    ok(['sentence', 'phrase'].includes(s!.kind), `${a.id} is kind ${s!.kind}; this lesson authors sentences and phrases`);
    ok(!s!.gender, `${a.id} carries a gender`);
    ok(a.fr.trim().split(/\s+/).length <= 14, `${a.id} runs over the A2 sentence budget: "${a.fr}"`);
  }
  // EIGHTEEN SENTENCES AND SEVEN PHRASES. The seven are the expressions the
  // corpus does not have anywhere, and the split is the whole of what this build
  // authored beyond its paradigm.
  strictEqual(SRC_AUTHORED.filter((a) => a.kind === 'sentence').length, 18);
  strictEqual(SRC_AUTHORED.filter((a) => a.kind === 'phrase').length, 7);
});

test('every imported row was carried into the seed', { skip: noSrc }, () => {
  // The seed is a CUT and this lesson imports out of FIFTEEN themes, eleven of
  // them outside SEED_CUT.themes. a2.11 found that neither of the two rows its
  // lesson leaned on hardest was in it.
  strictEqual(SRC_IMPORTED.length, 26, 'three naming forms and twenty-three expressions');
  for (const r of SRC_IMPORTED) {
    const s = byId.get(r.id);
    ok(s, `${r.id} is imported and was not carried into the seed`);
    strictEqual(s!.fr, r.fr, `${r.id} fr differs between the manifest and the seed`);
  }
  ok(SRC_THEMES.length >= 14, `the manifest records ${SRC_THEMES.length} source themes, expected about fifteen`);
  // AND THE READ-ONLY ROWS WERE NOT CARRIED BY THIS BUILD.
  strictEqual(SRC_READ_ONLY_IDS.length, 3);
  for (const id of SRC_READ_ONLY_IDS) ok(!L!.itemIds.includes(id), `${id} is read-only and is in itemIds`);
});

test('the source lists agree with the seed', { skip: noSrc || noLesson }, () => {
  strictEqual(
    SRC_PARADIGM.map((r) => [r.person, r.faire, r.dire, r.lire].join('|')).join(','),
    PARADIGM.map((r) => [r.person, r.faire, r.dire, r.lire].join('|')).join(','),
    'this test file and the source disagree about the paradigm',
  );
  strictEqual(SRC_BREAKS.length, 3, 'the source no longer derives three breaking cells');
  strictEqual(SRC_CONTROL_BREAKS.length, 0, 'the source says lire breaks an ending');
  strictEqual(SRC_EXPRESSION_IDS.length, EXPRESSION_TARGET);
  strictEqual(SRC_EXPRESSION_IDS.join(), THIRTY.map((e) => e.id).join(), 'this test file and the source disagree about the thirty, or about their order');
  strictEqual(SRC_REPAIRS.length, REPAIRS.length);
  strictEqual(SRC_REPAIRS.map((r) => `${r.id}:${r.to}`).join(), REPAIRS.map((r) => `${r.id}:${r.to}`).join());
  strictEqual(SRC_ITEM_IDS.length, L!.itemIds.length);
  strictEqual(SRC_DICTATION.length, EXPECTED_DICTATION);
  strictEqual(SRC_SPEAK.length, 18);
});

/* ═══ 13. The audio decisions that cannot be recovered later ════════════ */

test('the recording instructions that pull in opposite directions are pinned', { skip: noLesson }, () => {
  // A constraint on how something is recorded becomes invisible the moment the
  // clip is delivered. These two are the most important instructions in the
  // lesson and they say OPPOSITE things, which is why they are separate clips.
  const recorded = L!.audio?.recorded ?? [];
  const vous = recorded.find((r) => r.id === 'rec-a2-12-vous');
  ok(vous, 'the vous clip is gone');
  ok(
    /equally ordinary/i.test(vous!.desc ?? ''),
    'the vous clip no longer says the three must sound equally ordinary, which is the whole screen: the learner has to notice the odd one out from the SPELLING',
  );
  const number = recorded.find((r) => r.id === 'rec-a2-12-number');
  ok(number, 'the number clip is gone');
  ok(/audible/i.test(number!.desc ?? ''), 'the number clip no longer says the difference must be audible, which is the opposite instruction and the reason the two are separate');
  const weather = recorded.find((r) => r.id === 'rec-a2-12-weather');
  ok(weather, 'the weather clip is gone');
  ok(
    namesUnitLabel(weather!.desc ?? '', 'a1.10'),
    'the weather clip no longer says it must be read exactly as a1.10 reads it. If the five sound different here, the learner concludes the two lessons are about two different things.',
  );
  // Every recordingId a section names really exists.
  const ids = new Set(recorded.map((r) => r.id));
  const used = new Set<string>();
  const walk = (v: unknown): void => {
    if (Array.isArray(v)) { for (const x of v) walk(x); return; }
    if (v && typeof v === 'object') {
      for (const [k, x] of Object.entries(v)) {
        if (k === 'recordingId' && typeof x === 'string') used.add(x);
        else walk(x);
      }
    }
  };
  walk(L!.sections);
  for (const u of used) ok(ids.has(u), `a section names recordingId "${u}", which is not declared`);
});
