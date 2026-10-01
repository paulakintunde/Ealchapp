// c1.02.l1 « Le passé antérieur »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape) with the C1 rules of
// C1-BUILD-LOG.md, RECOGNITION variant, on the structural model of b2.08
// (`../b2/passe-simple-*`): every act runs SPOT (find the form in a page) →
// MAP (to today's French) → UNDERSTAND (what it does to order and pace).
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema, so the lesson validates with it in place (as b2.08 does).
//
// RECOGNITION ONLY. NOTHING asks the learner to produce a passé antérieur
// or a passé surcomposé: no conjugation card, no gap or option set whose
// job is to supply one, no error-spot or typeIn whose answer holds one, no
// flashcard or reviewDeck BACK that is one, no scenario `user` line in it,
// no speak practice on it. Typed answers are infinitives or today's French.
// The corpus enforces it in the drills (corpus §A.3).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene, story, reading, examples), name (cardDeck,
//   tapTable, hacks), spot and map (groupDrill, gated), trap (trapDrill
//   stepped or commonErrors), then from act 2 on the form INSIDE A PAGE
//   (« Dans un texte »: five of them are public-domain extracts verified
//   word for word on Wikisource), then the gated act check.
//
//    1  Un cran avant              6   the problem; the ONE recap of lessons
//                                       8, 9, 18 of B2, 21 of B1, 1 of B2
//    2  Eut fini, fut parti        7   avoir and être, every person; eut +
//                                       a noun is a passé simple (Flaubert)
//    3  Il se fut assis            7   pronominal verbs and the agreements
//                                       (Hémon)
//    4  Fut + participe            7   passé antérieur or passive; eut été
//                                       + participle (Flaubert, Mérimée)
//    5  La charnière               7   quand, lorsque, dès que, aussitôt
//                                       que, après que, une fois que (Hémon)
//    6  À peine eut-il… que        7   inversion, nominal subject, « ne…
//                                       pas plus tôt… que »
//    7  Il eut bientôt fini        6   the main clause with bientôt, vite,
//                                       en un instant
//    8  Avait fini, eut fini       8   against the plus-que-parfait on one
//                                       page (Hémon)
//    9  Le rythme du récit         7   the effect on pace (Flaubert)
//   10  Aujourd’hui, tu dirais     7   quand il a fini, après avoir fini,
//                                       une fois que, venir de
//   11  Le surcomposé, à l’oreille 6   quand j’ai eu fini: spoken, regional
//                                       uses; recognise, never prescribe
//   12  Raconte-le au club         11  model, plan, role play, TASK, quiz
//
//   TOTAL 86 missions, 12 acts (6,7,7,7,7,7,6,8,7,7,6,11). Corpus: 159
//   authored rows (.1600-.1783) in twelve sixteen-id blocks plus 14 reused
//   rows (11 in the seed cut, 3 Postgres-only in PG_ROWS), released act by
//   act through `deckTranche` (map, rule and plain rows only).
//   Quiz: 11 rounds of 8 (acts 1-2, then one per act 3 to 11, then a
//   recycling and exam-style round). Chapter artwork:
//   `passe-anterieur-image-prompts.md`, twelve prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (c1.03 may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le passé antérieur passe le relais : l’action est bouclée, le récit
//   repart. »
//   EN: The passé antérieur hands over the baton: the action is wrapped up,
//   and the story moves on.
//
//   ONE METAPHOR, LE RELAIS: the hand that lets go of the baton as the next
//   runner sets off. It is NOT the plus-que-parfait of books (act 8), NOT
//   « eut + any word » (act 2), NOT « fut + any participle » (act 4), and
//   NOT something to say aloud (act 11). Rejected candidates: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    recognising the passé antérieur in full: the paradigm with avoir
//           and être, pronominals and agreements, the passive look-alike,
//           the hinges, « à peine… que », the main-clause use, the contrast
//           with the plus-que-parfait, the effect on pace, today's
//           equivalents, and the surcomposé as its spoken counterpart.
//   QUOTES  the reframes of lessons 1, 8, 9 and 18 in B2 and lesson 21 in
//           B1, re-exported from their corpus files; their rows reused BY
//           ID in act 1 (two more in act 2, one in act 8).
//   LEAVES  producing either tense (never, by decision); the concordance of
//           tenses in literary texts to another C1 lesson (named in words,
//           never by position, since it is not built); the literary
//           subjunctive beyond the eut / eût line already owned by lesson 9
//           in B2.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   C1: unsimplified French, English authored on every learner string (an
//   `en` field or a final `EN: `), never on an answer. tu in every
//   instruction. Every `say` is French. No spaced « ? » or « ! » in any
//   scene or story bubble; ’ throughout; the scenario embeds no corpus row.
//   Other lessons cited by trail position in words, only positions that
//   exist. Mission answer slots spread by `spreadMissions()`, the quiz by
//   `spreadSlots()`, as b2.08 does (no `why` names a position). Tag
//   « C1 · LEÇON 2 ». Up to 4 tapTables (C1 decision 16): four used.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE `sentence` DRILL ON LITERARY LINES, as b2.08's open question 1:
//      every passé antérieur and surcomposé row carries only the word-tile
//      `sentence` drill, so the lines are visible in the sentence hub under
//      « La littérature ». Acceptable?
//   2. THREE POSTGRES-ONLY B2 ROWS reused by id (corpus §A.5) carry
//      `review`, which can show the English and ask for the French of a
//      passé antérieur line. They were published that way. Keep them, or
//      drop `review` from them in a text edit at the import?
//   3. FIVE PUBLIC-DOMAIN EXTRACTS (Flaubert ×2 tales, Hémon ×3, one
//      Mérimée line) are quoted word for word from Wikisource; one cut is
//      marked « […] » where Flaubert has an em dash the house forbids. OK?
//   4. THE SURCOMPOSÉ (act 11): taught as spoken in time clauses everywhere
//      and regional without one (south of France, Suisse romande), never
//      prescribed; every answer maps it to the passé composé. The regional
//      claim needs the pre-review's fact check (corpus §A.7b).
//   5. THE ROUNDUP names « la concordance des temps dans les textes
//      littéraires » as what comes next in C1 without a position, since that
//      lesson is not built. Cite it by position once it publishes?
//   6. TWELVE TERMS (shipped range 8 to 11). The twelfth is `relais`, the
//      reframe's own chip. Keep, or fold it into the reframe?
//   7. `Lesson.skill` is 'CE', as b2.08; the task is a written retelling
//      graded on a 4-criterion rubric (220 to 320 words). `version: 1`.
//      'coach-fr-FR' kept (inert).

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, PG_ROWS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  LECTURE_LETTRE, EXTRAIT_JULIEN, PHRASE_SEPT_ANS, EXTRAIT_TOILETTE, EXTRAIT_HERBAGE, PHRASE_MATEO,
  LECTURE_TRAVERSEE, EXTRAIT_PATE, TEXTE_A6, TEXTE_A7, LECTURE_DEUX_SOIRS, EXTRAIT_AUNES,
  LECTURE_ATELIER, EXTRAIT_CHASSE, LECTURE_BALADO, TEXTE_A10, TEXTE_A11, LECTURE_MODELE, EXTRAIT_TACHE,
  B201_REFRAME, B201_REFRAME_EN, B208_REFRAME, B208_REFRAME_EN, B209_REFRAME, B209_REFRAME_EN,
  B218_REFRAME, B218_REFRAME_EN, B121_REFRAME, B121_REFRAME_EN,
  PQP_UNIT, PS_UNIT, SUBJ_UNIT, TEMPS_UNIT, INVERSION_UNIT,
  PQP_REF, PS_REF, SUBJ_REF, TEMPS_REF, INVERSION_REF,
} from './passe-anterieur-corpus.ts';
import { PA_TERMS } from './passe-anterieur-terms.ts';

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
const OWN = new Set(ALL_ROWS.map((r) => r.id));

/** An item's fr/en, from this corpus, the seed, or PG_ROWS. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id) ?? PG_ROWS[id];
  if (!r) throw new Error(`c1.02: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.02: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`c1.02: no respell on ${id}`);
  return `[${r.respell}]`;
}

const LIT = (n: number) => `fr.b2.litterature.${n}`;
const CL = (n: number) => `fr.b2.connecteurs-logiques.${n}`;
const LS = (n: number) => `fr.b1.langue-soignee.${n}`;
const SOINS = 'fr.b2.soins.122';
const ETIQ = 'fr.b2.rp-etiquette.066';
const COMM = 'fr.b2.communaute.108';

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
/** A quotation of a page, with no corpus row (public domain or original). */
const free = (f: string, e: string, note?: string): GItem => ({ fr: f, en: e, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
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

/** THE « IN A PAGE » BEAT that closes acts 2 to 11: one paragraph with the
 *  passé antérieur inside it. The questions always SPOT, MAP and
 *  UNDERSTAND; the answers sit behind the modal. Same title every time. */
function dansUnTexte(
  id: string, frSub: string, text: string, questions: { q: string; a: string }[], rec: string, terms: string[],
): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true,
    title: 'Dans un texte', frSub, text, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: UN CRAN AVANT
 *
 *  Meet the problem. The club reads « À peine eut-elle refermé la porte que
 *  le téléphone sonna » and you retell it. The failing instinct reads the
 *  passé antérieur as a plus-que-parfait, far back. ONE recap of B2 and B1.
 *  NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le club du jeudi',
  frSub: 'Une phrase de trop près',
  setting: { place: 'Une bibliothèque de quartier', city: 'Québec', time: '19 h', ambience: 'six chaises en cercle, du thé, la neige qui tombe derrière les vitres' },
  beats: [
    {
      kind: 'narration',
      text: 'Québec, un jeudi soir. Ton club de lecture a choisi une nouvelle. Hélène lit à voix haute la première page ; Marc arrive en retard, le bonnet couvert de neige.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Hélène',
      fr: fr(E(1600)), en: en(E(1600)), respell: rsOf(E(1600)),
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Hélène',
      fr: 'Marc a manqué le début. Dis-lui ce qui se passe dans cette phrase.',
      en: 'Marc missed the beginning. Tell him what happens in this sentence.',
      respell: '[MARK a mahⁿ-KAY luh day-BÜ | dee-LWEE | suh kee suh PASS | dahⁿ set FRAZ]',
      stage: 'Eut refermé : tu reconnais l’auxiliaire, mais tu n’as jamais dit ce temps.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: 'Marc s’assoit à côté de toi. Il veut savoir combien de temps sépare la porte et le téléphone.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Quelle phrase dit ce qui se passe.',
      size: 'lg',
      options: [
        { fr: fr(E(1601)), respell: rsOf(E(1601)), en: en(E(1601)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1602)), respell: rsOf(E(1602)), en: en(E(1602)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Marc sourit : la porte à peine fermée, le téléphone sonne. Il comprend tout de suite pourquoi Clémence sursaute.',
        breaks: 'Marc imagine Clémence chez elle depuis un bon moment. Pour lui, le téléphone n’a plus rien de soudain, et la scène perd sa tension.',
      },
    },
    {
      kind: 'break',
      heading: 'Pas loin en arrière : juste avant',
      body: 'Eut refermé n’est pas un plus-que-parfait. C’est le passé antérieur : l’action bouclée à l’instant où la suivante arrive. Aujourd’hui, tu dirais : elle venait de refermer la porte. EN: Not far back: just before, and done.',
      wrong: { fr: fr(E(1601)), ipa: ipaOf(E(1601)), respell: rsOf(E(1601)), en: en(E(1601)) },
      right: { fr: fr(E(1602)), ipa: ipaOf(E(1602)), respell: rsOf(E(1602)), en: en(E(1602)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: 'Au B2, tu as croisé ce temps une ou deux fois. Ici, tu le lis partout où il vit, et tu dis ce qu’il fait au récit, sans jamais le produire.',
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['relais', 'auxiliaire'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Reconnaître le passé antérieur sous toutes ses formes', s: 'Actes 2 à 4 : avoir et être, les pronominaux, le faux ami passif' },
    { t: 'Suivre l’enchaînement qu’il marque', s: 'Actes 5 à 7 : la charnière, à peine… que, la phrase seule avec bientôt' },
    { t: 'Le distinguer du plus-que-parfait et en sentir le rythme', s: 'Actes 8 et 9 : une seule page, deux temps, deux vitesses' },
    { t: 'Le dire aujourd’hui, et reconnaître le surcomposé', s: 'Actes 10 à 12 : les équivalents, l’oral, puis ta mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La lettre',
  frSub: 'Une nouvelle, texte original écrit pour la leçon',
  text: LECTURE_LETTRE,
  glossary: [
    { word: 'penchée', en: 'slanting', note: 'Une écriture inclinée vers la droite.' },
    { word: 'décrocha', en: 'picked up (the phone)', note: 'Décrocher : prendre le combiné pour répondre.' },
  ],
  questions: [
    { q: 'Globale : que se passe-t-il ce soir-là, en une phrase ?', a: 'Clémence trouve chez elle une lettre de son frère, qui annonce son retour, puis il l’appelle depuis la gare : il n’a pas attendu dimanche.' },
    { q: 'Repère trois passés antérieurs et dis, pour chacun, quelle action vient aussitôt après.', a: 'eut refermé, puis le téléphone sonna ; eut retiré et allumé, puis elle aperçut ; eut lu, puis elle reconnut ; fut parvenue, puis elle se leva ; eut raccroché, puis elle mit de l’eau à chauffer.' },
    { q: 'Détail : « Elle eut bientôt compris. » Que veut dire la phrase, et pourquoi n’y a-t-il pas de quand ?', a: 'Elle a compris très vite que c’était lui. Avec bientôt, le passé antérieur peut vivre seul : il dit que le résultat est atteint, et vite.' },
    { q: 'Pourquoi « une enveloppe qu’elle n’avait jamais vue » est-il au plus-que-parfait, et non au passé antérieur ?', a: 'Ce n’est pas une étape juste avant la suivante : c’est un fait vu de loin, qui vaut pour tout le passé. Le plus-que-parfait garde la distance.' },
    { q: 'Inférence : que dit le dernier geste, les deux tasses « comme autrefois » ?', a: 'Qu’elle lui pardonne sans le dire : elle reprend l’habitude d’avant son départ.' },
  ],
  audio: REC('rec-c1-02-lettre'),
  say: REFRAME,
  terms: ['relais', 'charniere'],
};

const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-rappel',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà',
  frSub: 'Cinq leçons, un rappel',
  groups: [
    grp(`${Cap(PS_REF)} et ${TEMPS_REF}`, [
      it(LIT(1126), 'eut fini : la carte de reconnaissance'),
      it(LIT(1127), 'ce que tu dirais aujourd’hui'),
      it(CL(2575), 'dès que, avec un passé simple'),
      it(CL(2581), 'la règle : le lire, pas l’écrire'),
    ], chk('« Quand il eut fini, il se leva. » Aujourd’hui, tu dis…',
      ['quand il a fini, il s’est levé', 'quand il avait fini, il se levait'], 0,
      `« ${B208_REFRAME} » Et dès que suit le temps de l’autre verbe. EN: ${B208_REFRAME_EN}`)),
    grp(Cap(SUBJ_REF), [
      it(LIT(1286), 'eût fini, avec l’accent : un subjonctif'),
      it(LIT(1243), 'fut et fût : l’oreille ne suffit pas'),
    ], chk('Eut fini sans accent, eût fini avec : lequel est un passé antérieur ?',
      ['eut fini', 'eût fini'], 0,
      `Sans accent, l’indicatif. « ${B209_REFRAME} » EN: ${B209_REFRAME_EN}`)),
    grp(Cap(INVERSION_REF), [
      it(LS(1167), 'à peine en tête, le sujet inversé'),
      it(LS(1168), 'la même tournure, au présent'),
    ], chk('« À peine est-il arrivé que le téléphone a sonné. » L’inversion change…',
      ['la tenue de la phrase', 'son sens'], 0,
      `« ${B121_REFRAME} » EN: ${B121_REFRAME_EN}`)),
    ctl(Cap(PQP_REF), `${Cap(PQP_REF)} t’a donné le plus-que-parfait. Qu’ajoute cette leçon ?`,
      ['Le passé antérieur en entier : ses formes, ses tournures, son rythme, et sa différence avec le plus-que-parfait.', 'Rien : c’est le même temps.'], 0,
      `« ${B201_REFRAME} » Le passé antérieur, lui, colle l’action à la suivante. EN: ${B201_REFRAME_EN}`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['relais', 'pqp'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où ça compte',
  cases: [
    { situation: 'Tu résumes un chapitre à ton club', fr: fr(E(1610)), en: en(E(1610)) },
    { situation: 'Tu traduis une nouvelle vers l’anglais', fr: fr(E(1611)), en: en(E(1611)) },
    { situation: 'Tu réponds à une question de lecture d’examen', fr: fr(E(1612)), en: en(E(1612)) },
    { situation: 'Tu écoutes un livre audio dans le métro', fr: fr(E(1613)), en: en(E(1613)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['relais'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('L’écart', '« À peine eut-elle refermé la porte que le téléphone sonna. » Entre les deux…',
    ['presque rien', 'un long moment'], 0,
    'À peine et le passé antérieur collent les deux actions. EN: almost no time.'),
  ctl('La forme', 'Le passé antérieur, c’est…',
    ['eut ou fut et un participe', 'avait ou était et un participe', 'aura ou sera et un participe'], 0,
    'Un auxiliaire au passé simple. Avait : le plus-que-parfait ; aura : le futur antérieur. EN: a simple-past auxiliary.'),
  ctl('Ta tâche', 'Dans cette leçon, le passé antérieur, tu dois…',
    ['le reconnaître et le dire autrement', 'l’employer dans tes messages'], 0,
    'Tu le lis et tu le transposes ; tu ne le produis jamais. EN: read it, never produce it.'),
], ['relais']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Un cran avant',
    opener: {
      line: 'Une porte se referme, et le téléphone sonne déjà : ici tu découvres le temps qui colle une action à la suivante. EN: A door closes and the phone is already ringing: here you meet the tense that sticks one action to the next.',
      imageRef: 'lessons/passe-anterieur/act01.jpg',
    },
    sections: [],
    milestone: 'Tu repères un passé antérieur dans une page et tu ne le confonds plus avec un plus-que-parfait lointain. EN: You can spot a passé antérieur on a page and no longer read it as a distant plus-que-parfait.',
    estScreens: 32, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: EUT FINI, FUT PARTI
 *
 *  The whole paradigm, with avoir and with être, every person. The trap:
 *  « quand il eut sept ans » is a passé simple of avoir, not a passé
 *  antérieur. Page: Flaubert, Saint Julien (public domain).
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Au studio du livre audio',
  frSub: 'Montréal, une séance d’enregistrement',
  setting: 'Montréal, un studio d’enregistrement. Inès lit un roman pour un livre audio ; Samuel, le réalisateur, l’arrête quand le sens se perd.',
  bubbles: [
    { from: 'narrator', fr: 'Inès en est au chapitre trois. Samuel suit le texte sur son écran.', en: 'Inès is on chapter three. Samuel follows the text on his screen.' },
    { from: 'user', fr: fr(E(1616)), en: en(E(1616)) },
    { from: 'coach', fr: 'Eûmes posé : nous, avec avoir. Laisse sentir que l’orage tombe sur les valises à peine posées.', en: 'Eûmes posé: nous, with avoir. Let us feel the storm land on suitcases just put down.', warn: 'nous eûmes + participe' },
    { from: 'user', fr: fr(E(1624)), en: en(E(1624)) },
    { from: 'coach', fr: 'Fûmes arrivés : arriver prend être, et le participe est au pluriel. On entend le z de la liaison.', en: 'Fûmes arrivés: arriver takes être, and the participle is plural. We hear the z of the liaison.', warn: 'nous fûmes + participe accordé' },
    { from: 'user', fr: fr(E(1628)), en: en(E(1628)) },
    { from: 'coach', fr: 'Attention, ici eut est suivi d’un nombre, pas d’un participe. C’est avoir tout seul, au passé simple.', en: 'Careful, here eut is followed by a number, not a participle. It is plain avoir, in the passé simple.', warn: 'eut + nom : passé simple' },
  ],
  closing: { fr: 'Un auxiliaire au passé simple, puis un participe : c’est le passé antérieur.', en: 'A simple-past auxiliary, then a participle: that is the passé antérieur.' },
  audio: REC('rec-c1-02-studio'),
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-formes',
  title: 'Avoir, être, et un faux ami',
  frSub: 'Le paradigme entier',
  hint: 'Quatre cartes. La dernière n’est pas un passé antérieur.',
  audio: REC('rec-c1-02-formes'),
  say: REFRAME,
  terms: ['auxiliaire'],
  cards: [
    {
      head: 'Avec avoir', label: 'eus, eut, eûmes, eurent',
      fr: fr(E(1620)), sub: rsOf(E(1620)),
      body: 'La plupart des verbes : eut traversé, eurent compris. Eûmes et eûtes ont un accent circonflexe ; eurent dit ils ou elles. EN: Most verbs take avoir.',
    },
    {
      head: 'Avec être', label: 'fus, fut, fûmes, furent',
      fr: fr(E(1622)), sub: rsOf(E(1622)),
      body: 'Les verbes qui prennent être au passé composé : sortir, partir, arriver, tomber. Le participe s’accorde avec le sujet : elle fut sortie. EN: Être verbs; the participle agrees.',
    },
    {
      head: 'Les personnes', label: 'je, nous, ils',
      fr: fr(E(1624)), sub: rsOf(E(1624)),
      body: 'J’eus compris, nous fûmes arrivés : le je et le nous vivent dans les récits à la première personne. Tu et vous sont rarissimes. EN: First person in memoirs; tu and vous are very rare.',
    },
    {
      head: 'Eut, suivi d’un nom', label: 'Flaubert, 1877',
      fr: PHRASE_SEPT_ANS, sub: '[kahⁿ-tee-LÜ seh-TAHⁿ | sa MEHR lwee a-PREE a shahⁿ-TAY]',
      body: 'Eut sept ans : avoir au passé simple, sans participe. Ce n’est pas un passé antérieur, mais le jour de ses sept ans. Regarde toujours ce qui suit l’auxiliaire. EN: Eut plus a noun is a simple past of avoir.',
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-formes',
  title: 'Six formes, six versions d’aujourd’hui',
  cols: ['Tu lis', 'L’auxiliaire', 'Aujourd’hui'],
  rows: [
    { cells: ['j’eus compris', 'avoir, je', 'j’ai compris'], say: fr(E(1618)),
      detail: { title: 'j’eus', body: 'Je et avoir : un narrateur qui raconte sa propre histoire. EN: first-person narrative.', say: fr(E(1619)) } },
    { cells: ['nous eûmes posé', 'avoir, nous', 'nous avons posé'], say: fr(E(1616)),
      detail: { title: 'nous eûmes', body: 'L’accent circonflexe de eûmes ne s’entend pas : [ym]. EN: the circumflex is silent.', say: fr(E(1617)) } },
    { cells: ['ils eurent traversé', 'avoir, ils', 'ils ont traversé'], say: fr(E(1620)),
      detail: { title: 'ils eurent', body: 'Eurent : la liaison en z après ils, [il.zyʁ]. EN: liaison in z.', say: fr(E(1621)) } },
    { cells: ['elle fut sortie', 'être, elle', 'elle est sortie'], say: fr(E(1622)),
      detail: { title: 'elle fut', body: 'Sortir sans complément prend être ; le participe prend le e du féminin. EN: être and agreement.', say: fr(E(1623)) } },
    { cells: ['nous fûmes arrivés', 'être, nous', 'nous sommes arrivés'], say: fr(E(1624)),
      detail: { title: 'nous fûmes', body: 'Fûmes, avec l’accent, et un participe au pluriel. EN: plural agreement.', say: fr(E(1625)) } },
    { cells: ['ils furent partis', 'être, ils', 'ils sont partis'], say: fr(E(1626)),
      detail: { title: 'ils furent', body: 'Furent : ils ou elles, être. Le r final s’entend. EN: the final r is heard.', say: fr(E(1627)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-reperer',
  layer: 'core',
  size: 'lg',
  title: 'L’auxiliaire, puis ce qui suit',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Avoir ou être', [
      it(E(1616), 'eûmes : avoir'),
      it(E(1618), 'eus : avoir'),
      it(E(1622), 'fut : être'),
      it(E(1626), 'furent : être'),
    ], chk('Pourquoi fut sortie, et non eut sorti ?',
      ['sortir, sans complément, prend être', 'parce que le sujet est féminin', 'parce que la phrase commence par dès que'], 0,
      'L’auxiliaire suit le verbe, comme au passé composé : elle est sortie. EN: same auxiliary as in the passé composé.')),
    grp('Passé antérieur ou pas', [
      it(E(1628), 'eut sept ans : un nom suit'),
      it(E(1620), 'eurent traversé : un participe suit'),
      it(CL(2584), 'fut partie : un participe suit'),
      it(E(1624), 'fûmes arrivés : un participe suit'),
    ], chk('Laquelle de ces quatre phrases ne contient pas de passé antérieur ?',
      ['Quand il eut sept ans, on l’envoya chez son oncle.', 'Lorsqu’ils eurent traversé le pont, la nuit tomba.', 'Aussitôt qu’elle fut partie, la maison sembla vide.'], 0,
      'Eut sept ans : avoir tout seul, au passé simple. EN: no participle, no passé antérieur.')),
    ctl('La personne', '« Quand j’eus compris mon erreur, je revins sur mes pas. » Qui a compris ?',
      ['le narrateur', 'un personnage dont on parle', 'les lecteurs'], 0,
      'J’eus : je, le narrateur raconte son histoire. EN: the narrator.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Huit phrases, une seule question',
  frSub: 'Qu’est-ce qui vient d’abord ?',
  lines: [
    ln(E(1616)), ln(E(1618)), ln(E(1620)), ln(E(1622)),
    ln(E(1624)), ln(E(1626)), ln(E(1628)), ln(CL(2584)),
  ],
  questions: [
    { q: 'Première phrase : qu’est-ce qui arrive juste après ?', opts: ['l’orage éclate', 'on défait les valises'], correct: 0, why: 'Les valises à peine posées, l’orage. EN: the storm.' },
    { q: 'Troisième phrase : quand la nuit tombe-t-elle ?', opts: ['juste après le pont', 'avant le pont'], correct: 0, why: 'Eurent traversé, puis tomba. EN: right after the bridge.' },
    { q: 'Quatrième phrase : qui ouvre la lettre ?', opts: ['un homme, une fois qu’elle est sortie', 'la femme qui sort'], correct: 0, why: 'Elle sort, il ouvre. EN: he does, once she has gone.' },
    { q: 'Sixième phrase : que fait-elle après le départ des invités ?', opts: ['elle éteint les lampes', 'elle les raccompagne'], correct: 0, why: 'Furent partis, puis éteignit. EN: she turns off the lamps.' },
    { q: 'Septième phrase : y a-t-il un passé antérieur ?', opts: ['non, eut est suivi d’un nombre', 'oui, eut sept ans'], correct: 0, why: 'Eut sept ans : le passé simple d’avoir. EN: no participle.' },
  ],
  audio: REC('rec-c1-02-formes-ecoute'),
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_TEXTE = dansUnTexte('a2-texte', 'Flaubert, « La Légende de saint Julien l’Hospitalier » (1877)', EXTRAIT_JULIEN, [
  { q: 'Repère le passé antérieur. Quel auxiliaire, quel verbe, quelle personne ?', a: 'furent arrivés : être, arriver, ils (Julien et le Lépreux qu’il vient de faire traverser). Arriver prend être, d’où fut et l’accord au pluriel.' },
  { q: 'Qu’est-ce qui se passe aussitôt après ?', a: 'Julien ferma la porte : l’arrivée à peine bouclée, le geste suivant. Puis il le vit siégeant sur l’escabeau.' },
  { q: 'Dis la deuxième phrase en français d’aujourd’hui.', a: 'Quand ils sont arrivés dans la cahute, Julien a fermé la porte, et il l’a vu assis sur l’escabeau.' },
  { q: '« Le linceul… était tombé jusqu’à ses hanches. » Pourquoi un plus-que-parfait ici ?', a: 'Ce n’est pas une étape du récit, c’est l’état que Julien découvre : le tissu avait glissé avant, on ne sait quand. Le plus-que-parfait décrit, le passé antérieur enchaîne.' },
  { q: 'Que fait la phrase très courte du début, « Et cela dura longtemps, très longtemps » ?', a: 'Elle étire la traversée ; puis le passé antérieur referme cette longueur d’un coup, et la scène repart.' },
], 'rec-c1-02-texte-a2', ['auxiliaire', 'relais']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Avec être', 'Fut tombée : quel verbe, quel auxiliaire ?',
    ['tomber, être', 'tomber, avoir', 'être, comme verbe principal'], 0,
    'Tomber prend être, comme au passé composé. EN: tomber, être.'),
  ctl('Eurent', 'Eurent : quelle personne ?',
    ['ils ou elles', 'nous', 'il ou elle'], 0,
    'Le -rent du pluriel. EN: third person plural.'),
  ctl('Le faux ami', '« Quand il eut sept ans… » : passé antérieur ?',
    ['non : eut est suivi d’un nombre', 'oui : eut est un auxiliaire'], 0,
    'Pas de participe, pas de passé antérieur. EN: no participle.'),
], ['auxiliaire']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Eut fini, fut parti',
    opener: {
      line: 'Avoir ou être, je ou nous, et un faux ami : ici tu reconnais le passé antérieur à toutes les personnes. EN: Avoir or être, je or nous, and one false friend: here you recognise the passé antérieur in every person.',
      imageRef: 'lessons/passe-anterieur/act02.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais le passé antérieur avec avoir et avec être, à toutes les personnes, et tu sais qu’eut suivi d’un nom n’en est pas un. EN: You can recognise the passé antérieur with either auxiliary, and you know eut plus a noun is not one.',
    estScreens: 36, restPoints: ['a2-table', 'a2-ecoute'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_TABLE, A2_REPERER, A2_ECOUTE, A2_TEXTE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: IL SE FUT ASSIS
 *
 *  Pronominal verbs take être; the participle usually agrees with the
 *  subject (not after « se dire adieu »); with avoir, agreement with an
 *  object placed before. Page: Hémon, Maria Chapdelaine (public domain).
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Six phrases à pronom',
  frSub: 'Se fut, se furent, les eut',
  examples: [
    ex(E(1632), 'se fut assis : s’asseoir prend être'),
    ex(E(1634), 'se furent installées : accord avec elles'),
    ex(E(1636), 'se furent dit adieu : l’un à l’autre, pas d’accord'),
    ex(E(1638), 'les eut relues : avoir, et les placé avant'),
    ex(E(1640), 'se fut levée : un pronominal au féminin'),
    ex(E(1642), 'nous nous fûmes reposés : nous, deux fois'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronominal'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-formes',
  title: 'Le pronom, l’auxiliaire, l’accord',
  frSub: 'Ce que tu sais du passé composé',
  hint: 'Quatre cartes. Les règles d’accord sont celles du passé composé.',
  audio: REC('rec-c1-02-pronominal'),
  say: REFRAME,
  terms: ['pronominal'],
  cards: [
    {
      head: 'Le pronominal prend être', label: 'se fut, se furent',
      fr: fr(E(1632)), sub: rsOf(E(1632)),
      body: 'Se fut assis : le pronom, fut, le participe. Aujourd’hui : il s’est assis. Rien de nouveau, seulement l’auxiliaire au passé simple. EN: Pronominals take être.',
    },
    {
      head: 'L’accord avec le sujet', label: 'le cas courant',
      fr: fr(E(1634)), sub: rsOf(E(1634)),
      body: 'Installées : elles, féminin pluriel. Le participe d’un pronominal s’accorde le plus souvent avec le sujet. EN: Usually agrees with the subject.',
    },
    {
      head: 'Pas d’accord', label: 'se dire, se parler',
      fr: fr(E(1636)), sub: rsOf(E(1636)),
      body: 'Ils se dirent adieu l’un à l’autre : se vaut à l’autre, et le complément direct est adieu. Le participe reste dit. EN: No agreement when se means to each other.',
    },
    {
      head: 'Avec avoir', label: 'le complément placé avant',
      fr: fr(E(1638)), sub: rsOf(E(1638)),
      body: 'Les eut relues : les reprend les lettres et vient avant, d’où relues. La même règle qu’au passé composé : il les a relues. EN: Agreement with a preceding object.',
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Du livre à aujourd’hui',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Le pronominal, aujourd’hui', [
      it(E(1633), 'se fut assis : s’est assis'),
      it(E(1635), 'se furent installées : se sont installées'),
      it(E(1641), 'se fut levée : s’est levée'),
      it(E(1643), 'nous fûmes reposés : nous sommes reposés'),
    ], chk('« Après qu’elle se fut levée, la salle se tut. » Aujourd’hui, la salle…',
      ['s’est tue', 'a tu', 's’est tu'], 0,
      'Se taire est pronominal : être, et l’accord avec la salle. EN: s’est tue.')),
    grp('L’accord, sans surprise', [
      it(E(1638), 'les eut relues : les lettres'),
      it(E(1634), 'installées : elles'),
      it(E(1636), 'dit : l’un à l’autre'),
      it(E(1640), 'levée : elle'),
    ], chk('Pourquoi dit reste invariable dans « ils se furent dit adieu » ?',
      ['se veut dire l’un à l’autre, et adieu est le complément direct', 'parce que le verbe est au passé antérieur'], 0,
      'Le temps ne change rien à l’accord : on se dit quelque chose à quelqu’un. EN: se is indirect here.')),
    ctl('Le réflexe', 'Tu lis « se furent installées ». Pour vérifier l’accord, tu penses à…',
      ['elles se sont installées', 'elles ont installé', 'elles s’installaient'], 0,
      'Transpose au passé composé : l’accord est le même. EN: transpose to check.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronominal'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre transpositions ratées',
  errors: [
    {
      wrong: 'Quand il s’a assis, le notaire a ouvert le dossier.',
      right: fr(E(1633)),
      why: 'Normal : beaucoup de verbes prennent avoir, et fut se fait oublier. Mais un pronominal garde être : il s’est assis. EN: pronominals keep être.',
    },
    {
      wrong: 'Dès qu’elles se sont installés, la conférence a commencé.',
      right: fr(E(1635)),
      why: 'Normal : à l’oral, installés et installées sonnent pareil. À l’écrit, le participe prend le féminin pluriel de elles. EN: the written agreement.',
    },
    {
      wrong: 'Lorsqu’ils se sont dits adieu, chacun est parti de son côté.',
      right: fr(E(1637)),
      why: 'Normal : on accorde par réflexe tout pronominal. Mais se veut dire l’un à l’autre ici : pas d’accord. EN: se is indirect, so no agreement.',
    },
    {
      wrong: 'Quand il les a relu, il a signé les deux lettres.',
      right: fr(E(1639)),
      why: 'Normal : avec avoir, on n’accorde pas d’habitude. Sauf quand le complément vient avant : les lettres, donc relues. EN: preceding object, agreement.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronominal'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris la version d’aujourd’hui',
  frSub: 'Accords compris',
  itemIds: dicteeFor(3),
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronominal'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Louis Hémon, « Maria Chapdelaine » (1914)', EXTRAIT_TOILETTE, [
  { q: 'Repère les deux passés antérieurs. Lequel est pronominal ?', a: 'eut fait (sa toilette) et se fut rasé. Se raser est pronominal : être, d’où fut.' },
  { q: 'Pourquoi un seul « quand » pour les deux ?', a: 'Les deux gestes forment une seule étape, la toilette du matin, bouclée avant le compliment de la mère.' },
  { q: 'Dis la phrase en français d’aujourd’hui, à partir de « quand ».', a: 'Quand il a fait sa toilette et qu’il s’est rasé, la mère Chapdelaine l’a complimenté sur sa bonne mine.' },
  { q: '« Une fois le déjeuner du matin pris » : est-ce un passé antérieur ?', a: 'Non : une fois et un participe, sans auxiliaire. Mais le sens est voisin, l’étape franchie, puis la suite. (Au Québec, le déjeuner est le repas du matin.)' },
  { q: 'Inférence : pourquoi la mère complimente-t-elle François ?', a: 'Il arrive des chantiers, changé par des vêtements propres et la toilette : elle voit un autre homme, celui que Maria admire.' },
], 'rec-c1-02-texte-a3', ['pronominal', 'relais']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('L’auxiliaire', 'Se fut assis : pourquoi fut ?',
    ['les pronominaux prennent être', 'asseoir prend toujours être', 'pour marquer le passé lointain'], 0,
    'Le pronom impose être. EN: the pronoun calls for être.'),
  ctl('L’accord', '« Elles se furent installées » : l’accord se fait avec…',
    ['elles, le sujet', 'la conférence', 'rien'], 0,
    'Le cas courant du pronominal. EN: with the subject.'),
  ctl('Avec avoir', '« Quand il les eut relues » : pourquoi -ues ?',
    ['les, féminin pluriel, est placé avant', 'le sujet est féminin'], 0,
    'Le complément direct placé avant. EN: the preceding object.'),
], ['pronominal']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Il se fut assis',
    opener: {
      line: 'Il se fut rasé, elles se furent installées : ici tu lis le passé antérieur des verbes à pronom, accords compris. EN: Il se fut rasé, elles se furent installées: here you read the passé antérieur of pronominal verbs, agreements included.',
      imageRef: 'lessons/passe-anterieur/act03.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais un pronominal au passé antérieur et tu en vérifies l’accord en passant par le passé composé. EN: You can recognise a pronominal passé antérieur and check its agreement through the passé composé.',
    estScreens: 34, restPoints: ['a3-cartes', 'a3-erreurs'],
  },
  sections: [A3_EXEMPLES, A3_CARTES, A3_CONSTRUIRE, A3_ERREURS, A3_DICTEE, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: FUT + PARTICIPE, DEUX LECTURES
 *
 *  Fut parti (être verb) is a passé antérieur; fut envoyée (transitive) is
 *  a passive in the passé simple; eut été + participle is the passive
 *  passé antérieur. The test: transpose. Page: Flaubert, Un cœur simple.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'La traductrice et l’éditeur',
  frSub: 'Lyon, une relecture',
  setting: 'Lyon, une maison d’édition. Noémie traduit un roman vers l’anglais ; Bertrand, son éditeur, relit avec elle les phrases qui l’arrêtent.',
  bubbles: [
    { from: 'narrator', fr: 'Noémie a souligné trois phrases en rouge.', en: 'Noémie has underlined three sentences in red.' },
    { from: 'user', fr: fr(E(1648)), en: en(E(1648)) },
    { from: 'coach', fr: 'Partir prend être : fut parti, c’est un passé antérieur. Traduis par had gone.', en: 'Partir takes être: fut parti is a passé antérieur. Translate it as had gone.', warn: 'verbe avec être : passé antérieur' },
    { from: 'user', fr: fr(E(1650)), en: en(E(1650)) },
    { from: 'coach', fr: 'Même forme, autre chose. On envoie une lettre : fut envoyée, c’est un passif au passé simple.', en: 'Same shape, something else. One sends a letter: fut envoyée is a passive in the passé simple.', warn: 'verbe transitif : passif' },
    { from: 'user', fr: fr(E(1654)), en: en(E(1654)) },
    { from: 'coach', fr: 'Eurent été terminés : le passif, au passé antérieur. Les travaux sont finis, juste avant la réouverture.', en: 'Eurent été terminés: the passive, in the passé antérieur. The work is done, just before the reopening.', warn: 'eut été + participe' },
  ],
  closing: { fr: 'Fut et un participe : regarde le verbe avant de traduire.', en: 'Fut plus a participle: look at the verb before you translate.' },
  audio: REC('rec-c1-02-edition'),
  say: REFRAME,
  terms: ['passif'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-formes',
  title: 'Une forme, deux lectures',
  frSub: 'Passé antérieur ou passif',
  hint: 'Quatre cartes. Tout dépend du verbe.',
  audio: REC('rec-c1-02-passif'),
  say: REFRAME,
  terms: ['passif'],
  cards: [
    {
      head: 'Un verbe qui prend être', label: 'passé antérieur',
      fr: fr(E(1648)), sub: rsOf(E(1648)),
      body: 'Partir, tomber, arriver, sortir : au passé composé, ils prennent être. Fut parti est donc un passé antérieur : le courrier est parti, juste avant. EN: An être verb: a passé antérieur.',
    },
    {
      head: 'Un verbe transitif', label: 'passif au passé simple',
      fr: fr(E(1650)), sub: rsOf(E(1650)),
      body: 'On envoie une lettre : envoyer a un complément direct. Fut envoyée est un passif au passé simple, quelqu’un l’envoya. Aujourd’hui : a été envoyée. EN: A transitive verb: a passive.',
    },
    {
      head: 'L’agent', label: 'par',
      fr: fr(E(1652)), sub: rsOf(E(1652)),
      body: 'Par la police : celui qui fait l’action. Un complément en par signale presque toujours un passif. EN: Par introduces the agent of a passive.',
    },
    {
      head: 'Eut été et un participe', label: 'passif au passé antérieur',
      fr: fr(E(1654)), sub: rsOf(E(1654)),
      body: 'Eurent été terminés : avoir au passé simple, été, le participe. C’est le passif bouclé juste avant : les travaux finis, puis la réouverture. EN: The passive passé antérieur.',
    },
  ],
};

const A4_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a4-hacks',
  layer: 'core',
  sheetId: 'sheet-formes',
  title: 'Trois façons de trancher',
  hacks: [
    { hack: 'Transpose au passé composé. Est parti : passé antérieur. A été envoyée : passif.', why: 'Le passé composé garde le même auxiliaire que le passé antérieur ; le passif, lui, garde été. EN: the passé composé reveals which one it is.' },
    { hack: 'Cherche un complément en par.', why: 'Par la police, par l’explosion : un agent annonce un passif. EN: an agent means a passive.' },
    { hack: 'Demande-toi si le verbe peut avoir un complément direct.', why: 'Envoyer quelque chose, fermer quelque chose : transitif, donc passif avec fut. Partir, tomber : non, donc passé antérieur. EN: transitive or not.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passif'],
};

const A4_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-trier',
  layer: 'core',
  size: 'lg',
  title: 'Deux piles',
  frSub: 'Passé antérieur ou passif',
  groups: [
    grp('Passé antérieur', [
      it(E(1648), 'partir : être'),
      it(E(1656), 'tomber : être'),
      it(CL(2584), 'partir : être'),
      it(E(1622), 'sortir : être'),
    ], chk('Ces quatre verbes ont un point commun. Lequel ?',
      ['ils prennent être au passé composé', 'ils sont tous transitifs', 'ils sont tous au passif'], 0,
      'Partir, tomber, sortir : est parti, est tombée, est sortie. EN: être verbs.')),
    grp('Passif au passé simple', [
      it(E(1650), 'envoyer : transitif'),
      it(E(1652), 'fermer, et l’agent par'),
      it(E(1658), 'terminer : un état atteint'),
      it(SOINS, 'annoncer : transitif'),
    ], chk('« À peine le diagnostic fut-il annoncé… » Fut annoncé est…',
      ['un passif : on annonça le diagnostic', 'un passé antérieur d’annoncer'], 0,
      'On annonce quelque chose : transitif. Un passé antérieur d’annoncer serait eut annoncé. EN: a passive.')),
    ctl('Mérimée, 1829', `« ${PHRASE_MATEO} » Fut interrompu est…`,
      ['un passif au passé simple', 'un passé antérieur'], 0,
      'Par l’explosion : l’agent. On l’interrompit, il ne s’interrompit pas. EN: a passive with its agent.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passif'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Mal transposé',
  frSub: 'Six cartes, huit questions',
  rule: {
    title: 'L’auxiliaire suit le verbe',
    body: 'Un verbe qui prend être donne est parti aujourd’hui ; un verbe transitif au passif donne a été envoyée. Ne mélange pas les deux, et ne perds pas le été du passif. EN: An être verb gives est parti; a passive gives a été envoyée.',
  },
  cards: [
    { promptLabel: 'lu comme un passif', promptSound: 'Quand le courrier a été parti, elle a fermé le bureau.', fr: fr(E(1649)), ipa: ipaOf(E(1649)), tip: 'Partir n’a pas de passif : est parti. EN: partir has no passive.' },
    { promptLabel: 'lu comme un passé antérieur', promptSound: 'Quand la lettre est envoyée, elle a fermé le bureau.', fr: fr(E(1651)), ipa: ipaOf(E(1651)), tip: 'Fut envoyée est un passif : a été envoyée. EN: keep été.' },
    { promptLabel: 'agent perdu', promptSound: 'Le pont s’est fermé dès le matin.', fr: fr(E(1653)), ipa: ipaOf(E(1653)), tip: 'Par la police : quelqu’un l’a fermé. EN: keep the agent.' },
    { promptLabel: 'été oublié', promptSound: 'Quand les travaux ont terminé, on a rouvert le pont.', fr: fr(E(1655)), ipa: ipaOf(E(1655)), tip: 'Les travaux ne terminent rien : ils sont terminés. EN: the work was finished.' },
    { promptLabel: 'tomber avec avoir', promptSound: 'Lorsque la nuit a tombé, on a allumé les feux.', fr: fr(E(1657)), ipa: ipaOf(E(1657)), tip: 'Tomber prend être : est tombée. EN: est tombée.' },
    { promptLabel: 'un état lu comme une action', promptSound: 'Quand la séance avait terminé, chacun est rentré chez soi.', fr: fr(E(1659)), ipa: ipaOf(E(1659)), tip: 'Fut terminée : un état atteint, la séance s’est terminée. EN: a state reached.' },
  ],
  drill: [
    { promptSay: '« Quand le courrier fut parti… » Fut parti est…', opts: ['un passé antérieur', 'un passif'], correct: 0 },
    { promptSay: '« Quand la lettre fut envoyée… » Fut envoyée est…', opts: ['un passif au passé simple', 'un passé antérieur'], correct: 0 },
    { promptSay: '« Fut parti », aujourd’hui :', opts: ['est parti', 'a été parti'], correct: 0 },
    { promptSay: '« Fut envoyée », aujourd’hui :', opts: ['a été envoyée', 'est envoyée'], correct: 0 },
    { promptSay: '« Le pont fut fermé par la police. » Par annonce…', opts: ['l’agent du passif', 'le lieu de l’action'], correct: 0 },
    { promptSay: '« Quand les travaux eurent été terminés… » La voix est…', opts: ['passive', 'active'], correct: 0 },
    { promptSay: '« Lorsque la nuit fut tombée… » Tomber prend…', opts: ['être', 'avoir'], correct: 0 },
    { promptSay: '« Quand la séance fut terminée… » La forme décrit surtout…', opts: ['un état atteint', 'l’action de quelqu’un'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'L’auxiliaire suit le verbe' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la main transpose trop vite' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six bonnes versions' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-02-piege-passif'),
  say: REFRAME,
  terms: ['passif'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Flaubert, « Un cœur simple » (1877)', EXTRAIT_HERBAGE, [
  { q: 'Repère « fut traversé ». Passé antérieur ou passif ?', a: 'Un passif au passé simple : on traverse un herbage, le verbe est transitif. Un passé antérieur de traverser serait eut traversé.' },
  { q: 'Pourtant, le sens est proche d’un passé antérieur. Pourquoi ?', a: 'Après quand, le passif dit une étape finie, l’herbage franchi, juste avant le beuglement. L’enchaînement vient de quand, pas du temps.' },
  { q: 'Dis la phrase en français d’aujourd’hui.', a: 'Mais quand elles ont traversé l’herbage suivant, un beuglement formidable s’est élevé. Ou : une fois l’herbage suivant traversé.' },
  { q: 'Relève les passés simples qui font avancer la scène.', a: 'flatta, fit (volte-face), imitèrent, s’éleva, avança. Cachait, à l’imparfait, garde le décor : le brouillard.' },
  { q: 'Que produit le passif ici, plutôt que « quand elles eurent traversé » ?', a: 'Il efface les personnages et met l’herbage au premier plan : un passage franchi, puis le danger surgit. Le regard reste sur le paysage.' },
], 'rec-c1-02-texte-a4', ['passif', 'relais']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le verbe', '« Quand la nuit fut tombée » : passé antérieur ?',
    ['oui : tomber prend être', 'non : c’est un passif'], 0,
    'Tomber n’a pas de passif. EN: an être verb.'),
  ctl('Le test', 'Pour trancher entre passé antérieur et passif, tu…',
    ['transposes au passé composé', 'regardes la longueur de la phrase', 'cherches un adverbe'], 0,
    'Est parti, ou a été envoyée. EN: transpose.'),
  ctl('Le passif antérieur', 'Eurent été terminés, aujourd’hui :',
    ['ont été terminés', 'ont terminé', 'sont terminés'], 0,
    'Le passif garde été. EN: keep été.'),
], ['passif']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Fut + participe',
    opener: {
      line: 'Fut parti, fut envoyée : la même forme cache deux temps, et ici tu apprends à les séparer. EN: Fut parti, fut envoyée: one shape hides two tenses, and here you learn to tell them apart.',
      imageRef: 'lessons/passe-anterieur/act04.jpg',
    },
    sections: [],
    milestone: 'Devant fut et un participe, tu sais dire s’il s’agit d’un passé antérieur ou d’un passif, et tu le vérifies en transposant. EN: Faced with fut plus a participle, you can tell a passé antérieur from a passive, and check it.',
    estScreens: 36, restPoints: ['a4-hacks', 'a4-piege'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_HACKS, A4_TRIER, A4_PIEGE, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: LA CHARNIÈRE
 *
 *  The time hinges with a passé simple main clause. Après que keeps the
 *  indicative (après qu'il eut fini); the subjunctive eût is met and
 *  criticised. Page: Hémon, Maria Chapdelaine (public domain).
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La traversée',
  frSub: 'Une nouvelle, texte original écrit pour la leçon',
  text: LECTURE_TRAVERSEE,
  glossary: [
    { word: 'traversier', en: 'ferry', note: 'Au Québec, le bateau qui fait traverser le fleuve ; en France, on dit le bac ou le ferry.' },
    { word: 'passerelle', en: 'gangway', note: 'La petite rampe qui relie le bateau au quai.' },
  ],
  questions: [
    { q: 'Globale : de quoi parle ce texte, en une phrase ?', a: 'D’une traversée du fleuve, du quai de départ jusqu’à la rive nord, où la tante d’Aline l’attend.' },
    { q: 'Relève les conjonctions qui introduisent un passé antérieur.', a: 'une fois que (eut payé), après que (eut donné), quand (l’eut repliée), lorsque (se fut levé), dès que (eut accosté), aussitôt que (eut posé).' },
    { q: 'Après chacune, quel temps prend la principale ?', a: 'Le passé simple : monta, quitta, garda, aperçut, se pressèrent, reconnut. La charnière ferme une étape, la principale lance la suivante.' },
    { q: 'Pourquoi « qu’elle avait déjà lue dix fois » n’est-il pas au passé antérieur ?', a: 'Ce n’est pas l’étape d’avant : ce sont des lectures répétées, bien avant la traversée. Le plus-que-parfait garde la distance.' },
    { q: 'Inférence : pourquoi Aline attend-elle, quand tout le monde se presse ?', a: 'Elle redoute et désire à la fois la rencontre ; elle garde la lettre à la main sans savoir pourquoi. Le texte le montre par les gestes.' },
  ],
  audio: REC('rec-c1-02-traversee'),
  say: REFRAME,
  terms: ['charniere'],
};

const A5_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-table',
  layer: 'core',
  sheetId: 'sheet-enchainement',
  title: 'Six charnières',
  cols: ['La charnière', 'Ce qu’elle dit', 'Aujourd’hui'],
  rows: [
    { cells: ['quand', 'le moment', 'quand il a fini'], say: fr(E(1674)),
      detail: { title: 'quand', body: 'Le plus courant : la fin d’une étape, puis la suivante. EN: the most common hinge.', say: fr(E(1675)) } },
    { cells: ['lorsque', 'le moment, plus écrit', 'lorsque le brouillard s’est levé'], say: fr(E(1670)),
      detail: { title: 'lorsque', body: 'Le jumeau écrit de quand. EN: the written twin of quand.', say: fr(E(1671)) } },
    { cells: ['dès que', 'aussitôt après', 'dès que nous avons accosté'], say: fr(E(1672)),
      detail: { title: 'dès que', body: 'Pas d’écart entre les deux actions. EN: no gap at all.', say: fr(E(1673)) } },
    { cells: ['aussitôt que', 'aussitôt après, plus soutenu', 'aussitôt qu’il a reçu'], say: fr(E(1664)),
      detail: { title: 'aussitôt que', body: 'Le même sens que dès que, un cran plus soutenu. EN: like dès que, more formal.', say: fr(E(1665)) } },
    { cells: ['après que', 'l’ordre, à l’indicatif', 'après que le capitaine a donné'], say: fr(E(1668)),
      detail: { title: 'après que', body: 'Un fait accompli : l’indicatif, eut donné. EN: an accomplished fact, indicative.', say: fr(E(1669)) } },
    { cells: ['une fois que', 'l’étape franchie', 'une fois qu’elle a payé'], say: fr(E(1666)),
      detail: { title: 'une fois que', body: 'L’étape est derrière nous, la suite peut commencer. EN: the step is behind us.', say: fr(E(1667)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'La charnière, puis la principale',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Ce qui vient d’abord', [
      it(E(1664), 'la réponse, puis la réservation'),
      it(E(1668), 'le signal, puis le départ'),
      it(E(1672), 'l’accostage, puis les sauts'),
      it(ETIQ, 'tous arrivés, puis le toast'),
    ], chk('« Après que le capitaine eut donné le signal, le bateau quitta le quai. » Qu’est-ce qui vient d’abord ?',
      ['le signal', 'le départ', 'les deux en même temps'], 0,
      'Le passé antérieur porte l’étape d’abord bouclée. EN: the signal first.')),
    grp('Aujourd’hui', [
      it(E(1665), 'aussitôt qu’il a reçu'),
      it(E(1669), 'après que… a donné'),
      it(E(1673), 'dès que nous avons accosté'),
      it(E(1675), 'quand il a fini'),
    ], chk('« Dès que nous eûmes accosté, les enfants sautèrent sur le quai. » Aujourd’hui…',
      ['dès que nous avons accosté, les enfants ont sauté', 'dès que nous accostions, les enfants sautaient'], 0,
      'Deux passés composés : l’ordre reste dans dès que. EN: two passés composés.')),
    ctl('La principale', '« Dès qu’il eut fini, … » La principale est d’ordinaire…',
      ['au passé simple', 'au plus-que-parfait', 'au présent'], 0,
      `La charnière ferme une étape, le passé simple lance la suivante. ${Cap(TEMPS_REF)} : « ${B218_REFRAME} » EN: the passé simple.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  sheetId: 'sheet-enchainement',
  title: 'Après que, sans accent',
  frSub: 'L’indicatif, et ce que tu liras aussi',
  examples: [
    ex(E(1668), 'après que + eut donné : l’indicatif'),
    ex(E(1677), 'la règle, et l’usage critiqué'),
    ex(LIT(1286), 'eût fini, avec l’accent : un subjonctif'),
    ex(E(1676), 'les six charnières'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Huit charnières à l’oreille',
  frSub: 'Écoute, puis réponds sur l’ordre',
  lines: [
    ln(E(1664)), ln(E(1666)), ln(E(1668)), ln(E(1670)),
    ln(E(1672)), ln(E(1674)), ln(CL(2575)), ln(ETIQ),
  ],
  questions: [
    { q: 'Première phrase : que fait-il dès la réponse reçue ?', opts: ['il réserve sa place', 'il annule son voyage'], correct: 0, why: 'Réserva sa place. EN: he books his seat.' },
    { q: 'Deuxième phrase : où monte-t-elle ?', opts: ['sur le pont du traversier', 'dans un train'], correct: 0, why: 'Le pont du traversier. EN: the ferry deck.' },
    { q: 'Quatrième phrase : qu’aperçoit-on, le brouillard levé ?', opts: ['l’île', 'le port de départ'], correct: 0, why: 'On aperçut l’île. EN: the island.' },
    { q: 'Sixième phrase : que se passe-t-il quand il a fini de parler ?', opts: ['personne ne répond', 'tout le monde applaudit'], correct: 0, why: 'Personne ne répondit. EN: silence.' },
    { q: 'Dernière phrase : quand le toast est-il proposé ?', opts: ['une fois tous les invités arrivés', 'avant leur arrivée'], correct: 0, why: 'Furent tous arrivés, puis le toast. EN: once all had arrived.' },
  ],
  audio: REC('rec-c1-02-charnieres-ecoute'),
  say: REFRAME,
  terms: ['charniere'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Louis Hémon, « Maria Chapdelaine » (1914)', EXTRAIT_PATE, [
  { q: 'Repère le passé antérieur et sa charnière.', a: 'quand elle eut préparé (la pâte) : quand, avoir au passé simple, le participe de préparer.' },
  { q: 'Qu’est-ce qui arrive aussitôt après ?', a: 'La peine la terrassa : la douleur l’abat juste après le premier travail du matin.' },
  { q: 'Dis la phrase en français d’aujourd’hui, à partir de « mais ».', a: 'Mais quand elle a préparé la pâte pour les crêpes, la douleur l’a terrassée et elle a dû se recoucher.' },
  { q: 'Que veut dire « la peine » ici ?', a: 'La douleur physique, la fatigue qui fait mal, dans le français du Québec de l’époque. La mère est malade.' },
  { q: 'Que laisse entendre « s’assura que la besogne du jour serait faite » ?', a: 'Même malade, elle pense d’abord au travail de la ferme : le texte montre son courage sans le nommer.' },
], 'rec-c1-02-texte-a5', ['charniere', 'relais']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Après que', 'Après qu’il eut fini : quel mode ?',
    ['l’indicatif', 'le subjonctif'], 0,
    'Eut, sans accent : l’indicatif d’un fait accompli. EN: indicative.'),
  ctl('Dès que', 'Dès que, aussitôt que disent…',
    ['aucun écart entre les deux actions', 'un long intervalle', 'une condition'], 0,
    'Aussitôt après. EN: straight after.'),
  ctl('Une fois que', '« Une fois qu’elle eut payé la traversée » veut dire…',
    ['l’étape du paiement franchie', 'chaque fois qu’elle payait'], 0,
    'Une seule fois, une étape. EN: once the step was done.'),
], ['charniere']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'La charnière',
    opener: {
      line: 'Quand, dès que, aussitôt que, une fois que : ici tu suis le passé antérieur à chaque charnière du récit. EN: Quand, dès que, aussitôt que, une fois que: here you follow the passé antérieur at every hinge of the story.',
      imageRef: 'lessons/passe-anterieur/act05.jpg',
    },
    sections: [],
    milestone: 'Tu suis l’ordre exact qu’une charnière et un passé antérieur imposent, et tu le redis au passé composé. EN: You can follow the exact order a hinge and a passé antérieur set, and retell it.',
    estScreens: 36, restPoints: ['a5-lecture', 'a5-exemples'],
  },
  sections: [A5_LECTURE, A5_TABLE, A5_CONSTRUIRE, A5_EXEMPLES, A5_ECOUTE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: À PEINE EUT-IL… QUE
 *
 *  À peine in front, the subject inverted, the passé antérieur, then que and
 *  a passé simple. A nominal subject is taken up by il / elle. Without
 *  inversion, à peine after the auxiliary. « Ne… pas plus tôt… que ».
 *  Builds on lesson 21 in B1 (à peine + inversion in the present).
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Le cours du soir',
  frSub: 'Genève, une salle de classe',
  setting: 'Genève, un cours du soir de littérature. Malik lit des phrases au tableau ; la professeure, Mme Verdier, lui demande ce qu’elles disent du temps qui passe.',
  bubbles: [
    { from: 'narrator', fr: 'Trois phrases sont écrites au tableau.', en: 'Three sentences are written on the board.' },
    { from: 'user', fr: fr(E(1680)), en: en(E(1680)) },
    { from: 'coach', fr: 'À peine en tête, eut-il inversé, puis que : le chien bondit pendant que la porte s’ouvre encore.', en: 'À peine first, eut-il inverted, then que: the dog leaps while the door is still opening.', warn: 'à peine… que' },
    { from: 'user', fr: fr(E(1682)), en: en(E(1682)) },
    { from: 'coach', fr: 'Le sujet est un nom : le train, puis fut-il. Le il reprend le train.', en: 'The subject is a noun: le train, then fut-il. The il takes up the train.', warn: 'nom sujet repris par il' },
    { from: 'user', fr: fr(E(1688)), en: en(E(1688)) },
    { from: 'coach', fr: 'Pas plus tôt signé que : même idée, sans inversion. Elle regrette dans la seconde.', en: 'Pas plus tôt signé que: same idea, no inversion. She regrets it the next second.', warn: 'ne… pas plus tôt… que' },
  ],
  closing: { fr: 'À peine… que : la seconde action tombe sur la première.', en: 'À peine… que: the second action lands on the first.' },
  audio: REC('rec-c1-02-cours'),
  say: REFRAME,
  terms: ['apeine'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-enchainement',
  title: 'Quatre façons d’à peine',
  frSub: 'L’inversion et ses variantes',
  hint: 'Quatre cartes. La dernière n’a pas d’à peine.',
  audio: REC('rec-c1-02-apeine'),
  say: REFRAME,
  terms: ['apeine'],
  cards: [
    {
      head: 'À peine, inversion, que', label: Cap(INVERSION_REF),
      fr: fr(E(1680)), sub: rsOf(E(1680)),
      body: `Tu connais à peine est-il arrivé que. Au passé antérieur : à peine eut-il ouvert que. « ${B121_REFRAME} » EN: the same inversion, in the passé antérieur.`,
    },
    {
      head: 'Un nom sujet', label: 'la reprise par il',
      fr: fr(E(1682)), sub: rsOf(E(1682)),
      body: 'À peine le train fut-il parti : le nom reste devant, et il, inversé, le reprend. Comme dans une question soutenue. EN: The noun stays; il takes it up.',
    },
    {
      head: 'Sans inversion', label: 'à peine après l’auxiliaire',
      fr: fr(E(1686)), sub: rsOf(E(1686)),
      body: 'Il eut à peine fini que : à peine se place entre l’auxiliaire et le participe. Même sens, sans inversion. EN: À peine between auxiliary and participle.',
    },
    {
      head: 'Ne… pas plus tôt… que', label: 'la variante très écrite',
      fr: fr(E(1688)), sub: rsOf(E(1688)),
      body: 'Elle n’eut pas plus tôt signé qu’elle regretta : à peine eut-elle signé qu’elle regretta. Plus tôt, en deux mots : le temps. EN: No sooner… than.',
    },
  ],
};

const A6_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-reperer',
  layer: 'core',
  size: 'lg',
  title: 'La première action, la seconde',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Ce qui à peine a eu lieu', [
      it(E(1680), 'la porte ouverte'),
      it(E(1684), 'le discours commencé'),
      it(E(1690), 'la sortie'),
      it(COMM, 'le centre ouvert'),
    ], chk('Dans ces phrases, que introduit…',
      ['la deuxième action, qui suit aussitôt', 'une proposition relative', 'une comparaison'], 0,
      'Que n’a pas d’antécédent ici : il ouvre la seconde action. EN: que opens the second action.')),
    grp('Aujourd’hui', [
      it(E(1681), 'il venait à peine d’ouvrir'),
      it(E(1683), 'le train venait à peine de partir'),
      it(E(1687), 'il venait à peine de finir'),
      it(E(1691), 'nous venions à peine de sortir'),
    ], chk('Venir à peine de… quand : quel temps prend venir ?',
      ['l’imparfait', 'le passé composé', 'le futur'], 0,
      'Venait de : le passé tout proche, à l’imparfait. EN: imparfait.')),
    ctl('Le nom sujet', '« À peine l’oratrice eut-elle commencé… » Elle reprend…',
      ['l’oratrice', 'la salle', 'personne'], 0,
      'Le nom reste en tête, le pronom inversé le reprend. EN: elle takes up l’oratrice.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['apeine'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  sheetId: 'sheet-enchainement',
  title: 'Cinq phrases, une tournure',
  frSub: 'À peine… que, ne… pas plus tôt… que',
  examples: [
    ex(E(1682), 'un nom sujet, repris par il'),
    ex(E(1684), 'un nom sujet, repris par elle'),
    ex(E(1686), 'à peine après l’auxiliaire'),
    ex(E(1688), 'ne… pas plus tôt… que'),
    ex(E(1690), 'nous, avec être'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['apeine'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'À peine, mal compris',
  frSub: 'Six cartes, huit questions',
  rule: {
    title: 'À peine… que, c’est le temps',
    body: 'Ici, à peine ne veut pas dire un peu : il mesure le temps entre deux actions, et que ouvre la seconde. Aujourd’hui : il venait à peine de… quand. EN: À peine measures time here, not quantity.',
  },
  cards: [
    { promptLabel: 'lu comme un peu', promptSound: 'Il a un peu ouvert la porte, et le chien s’est jeté sur lui.', fr: fr(E(1681)), ipa: ipaOf(E(1681)), tip: 'À peine… que : juste après, pas à moitié. EN: just after.' },
    { promptLabel: 'ordre inversé', promptSound: 'La pluie s’est mise à tomber, puis le train est parti.', fr: fr(E(1683)), ipa: ipaOf(E(1683)), tip: 'Le train d’abord, la pluie juste après. EN: the train first.' },
    { promptLabel: 'que lu comme un relatif', promptSound: 'L’oratrice a commencé la salle qui murmurait.', fr: fr(E(1685)), ipa: ipaOf(E(1685)), tip: 'Que ouvre la seconde action. EN: que opens the second action.' },
    { promptLabel: 'écart trop long', promptSound: 'Il avait fini sa phrase depuis longtemps quand on l’a interrompu.', fr: fr(E(1687)), ipa: ipaOf(E(1687)), tip: 'À peine : presque pas d’écart. EN: almost no gap.' },
    { promptLabel: 'plus tôt lu comme plutôt', promptSound: 'Elle a préféré signer plutôt que réfléchir.', fr: fr(E(1689)), ipa: ipaOf(E(1689)), tip: 'Pas plus tôt : le temps, pas la préférence. EN: time, not preference.' },
    { promptLabel: 'nous oublié', promptSound: 'Ils venaient à peine de sortir quand l’alarme a retenti.', fr: fr(E(1691)), ipa: ipaOf(E(1691)), tip: 'Fûmes-nous : nous. EN: we.' },
  ],
  drill: [
    { promptSay: '« À peine eut-il ouvert la porte que le chien se jeta sur lui. » La porte est…', opts: ['tout juste ouverte', 'à moitié ouverte'], correct: 0 },
    { promptSay: '« À peine le train fut-il parti que la pluie tomba. » D’abord…', opts: ['le train part', 'la pluie tombe'], correct: 0 },
    { promptSay: 'Dans « à peine… que », que introduit…', opts: ['la seconde action', 'un complément du nom'], correct: 0 },
    { promptSay: '« Il eut à peine fini qu’on l’interrompit. » Aujourd’hui, il…', opts: ['venait à peine de finir', 'avait fini depuis longtemps'], correct: 0 },
    { promptSay: '« Elle n’eut pas plus tôt signé qu’elle regretta. » Pas plus tôt veut dire…', opts: ['à peine', 'plutôt'], correct: 0 },
    { promptSay: '« À peine fûmes-nous sortis… » Qui sort ?', opts: ['nous', 'ils'], correct: 0 },
    { promptSay: '« À peine l’oratrice eut-elle commencé… » Elle reprend…', opts: ['l’oratrice', 'la salle'], correct: 0 },
    { promptSay: '« À peine eut-il ouvert la porte… » Le registre est…', opts: ['écrit et soutenu', 'familier'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'À peine… que, c’est le temps' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que l’œil lit de travers' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six bonnes versions' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-02-piege-apeine'),
  say: REFRAME,
  terms: ['apeine'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Le concert dans le noir, texte original écrit pour la leçon', TEXTE_A6, [
  { q: 'Relève les tournures en à peine… que et ne… pas plus tôt… que.', a: 'À peine le chef fut-il monté… que ; à peine les techniciens eurent-ils rétabli… que ; le chef n’eut pas plus tôt levé… que ; il eut à peine donné… que.' },
  { q: 'Laquelle n’a pas d’inversion, avec à peine ? Pourquoi ?', a: 'Il eut à peine donné le premier signe : à peine est placé après l’auxiliaire, donc le sujet reste devant.' },
  { q: 'Raconte la deuxième phrase en français d’aujourd’hui.', a: 'Le chef venait à peine de monter sur l’estrade quand la lumière s’est éteinte.' },
  { q: '« Il y eut un murmure » : est-ce un passé antérieur ?', a: 'Non : il y eut est le passé simple d’il y a, suivi d’un nom. Aucun participe.' },
  { q: 'Que produit l’accumulation des « à peine… que » ?', a: 'Une suite de contretemps qui se bousculent : chaque incident tombe sur le précédent, et la chute (on jouera dans le noir) arrive plus vite.' },
], 'rec-c1-02-texte-a6', ['apeine', 'rythme']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Que', '« À peine eut-il ouvert la porte que le chien bondit. » Que est…',
    ['l’ouverture de la seconde action', 'un pronom relatif'], 0,
    'Pas d’antécédent : que lance la suite. EN: it opens the second action.'),
  ctl('Le nom sujet', '« À peine le train fut-il parti… » Il reprend…',
    ['le train', 'le voyageur', 'la pluie'], 0,
    'Le nom, puis le pronom inversé. EN: le train.'),
  ctl('Aujourd’hui', 'À peine eut-il fini que…, aujourd’hui :',
    ['il venait à peine de finir quand…', 'il finissait à peine que…', 'il a fini à peine…'], 0,
    'Venir à peine de, puis quand. EN: il venait à peine de.'),
], ['apeine']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'À peine eut-il… que',
    opener: {
      line: 'La porte à peine ouverte, le chien bondit déjà : ici tu lis la tournure qui colle deux actions l’une sur l’autre. EN: The door barely open, the dog is already leaping: here you read the turn of phrase that presses two actions together.',
      imageRef: 'lessons/passe-anterieur/act06.jpg',
    },
    sections: [],
    milestone: 'Tu comprends à peine… que et ne… pas plus tôt… que au passé antérieur, avec un nom ou un pronom sujet, et tu les redis aujourd’hui. EN: You can understand à peine… que and its variant, and retell them.',
    estScreens: 36, restPoints: ['a6-cartes', 'a6-piege'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_REPERER, A6_EXEMPLES, A6_PIEGE, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: IL EUT BIENTÔT FINI
 *
 *  The main-clause passé antérieur, with no hinge: bientôt, vite, en un
 *  instant, en quelques minutes, en moins de. It says the result was
 *  reached quickly. « Il eut bientôt fini » against « il finit bientôt ».
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  sheetId: 'sheet-enchainement',
  title: 'Cinq phrases sans charnière',
  frSub: 'Bientôt, vite, en un instant',
  examples: [
    ex(E(1696), 'bientôt : le rangement vite bouclé'),
    ex(E(1698), 'en un instant : le résultat d’un coup'),
    ex(E(1700), 'vite : compris très tôt'),
    ex(E(1702), 'en quelques minutes : les traces disparues'),
    ex(E(1704), 'bientôt, avec être : la maison vidée'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bientot'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-enchainement',
  title: 'Le passé antérieur tout seul',
  frSub: 'Le résultat, et vite',
  hint: 'Quatre cartes. La dernière compare deux phrases presque pareilles.',
  audio: REC('rec-c1-02-bientot'),
  say: REFRAME,
  terms: ['bientot'],
  cards: [
    {
      head: 'Avec bientôt', label: 'la phrase seule',
      fr: fr(E(1696)), sub: rsOf(E(1696)),
      body: 'Pas de quand, pas de que : le passé antérieur suit bientôt et dit que l’action est menée à son terme, rapidement. EN: With bientôt, a result reached soon.',
    },
    {
      head: 'Avec en un instant', label: 'la durée très courte',
      fr: fr(E(1698)), sub: rsOf(E(1698)),
      body: 'En un instant, en quelques minutes, en moins d’une heure : le délai est court, le résultat est atteint. EN: A short span, a result reached.',
    },
    {
      head: 'Avec être', label: 'furent bientôt partis',
      fr: fr(E(1704)), sub: rsOf(E(1704)),
      body: 'Les invités furent bientôt partis : être, l’accord, et la maison vide en une ligne. EN: The same use with être.',
    },
    {
      head: 'Eut fini ou finit', label: 'le résultat ou l’action',
      fr: 'il eut bientôt fini · il finit bientôt',
      sub: '[ee-LÜ byehⁿ-TOH fee-NEE] · [eel fee-NEE byehⁿ-TOH]',
      body: 'Il eut bientôt fini : c’est fait, et vite. Il finit bientôt : l’action elle-même, au passé simple. Le premier saute à l’arrivée. EN: The result versus the action.',
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le résultat atteint',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Ce qui est fait, et vite', [
      it(E(1696), 'la cuisine rangée'),
      it(E(1698), 'le feu maîtrisé'),
      it(E(1702), 'les traces recouvertes'),
      it(E(1706), 'la grange vide'),
    ], chk('Dans ces phrases, le passé antérieur dit…',
      ['un résultat atteint rapidement', 'une habitude', 'une action en cours'], 0,
      'Sans charnière, il garde son idée d’action bouclée, et le délai la rend rapide. EN: a result reached quickly.')),
    grp('Aujourd’hui', [
      it(E(1697), 'il a vite rangé'),
      it(E(1699), 'les pompiers ont maîtrisé'),
      it(E(1703), 'la neige a recouvert'),
      it(E(1707), 'ils ont vidé'),
    ], chk('« Elle eut vite compris qu’on lui mentait. » Aujourd’hui…',
      ['elle a vite compris qu’on lui mentait', 'elle comprenait vite qu’on lui mentait'], 0,
      'Un passé composé, et le même vite. EN: a passé composé.')),
    ctl('Le résultat ou l’action', '« Il eut bientôt fini. » Que dit la phrase ?',
      ['que c’est déjà fait, et vite', 'qu’il commence à finir', 'qu’il finira demain'], 0,
      'Eut fini : le résultat. EN: done, and quickly.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bientot'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Six phrases rapides',
  frSub: 'Écoute, puis dis ce qui est fait',
  lines: [ln(E(1696)), ln(E(1698)), ln(E(1700)), ln(E(1702)), ln(E(1704)), ln(E(1706))],
  questions: [
    { q: 'Première phrase : la cuisine est-elle rangée à la fin ?', opts: ['oui, et vite', 'non, il commence'], correct: 0, why: 'Eut bientôt rangé : c’est fait. EN: yes, quickly.' },
    { q: 'Deuxième phrase : qui maîtrise le feu ?', opts: ['les pompiers', 'les voisins'], correct: 0, why: 'Les pompiers. EN: the firefighters.' },
    { q: 'Quatrième phrase : que devient la piste ?', opts: ['la neige l’a recouverte', 'elle reste visible'], correct: 0, why: 'La neige eut recouvert les traces. EN: covered by snow.' },
    { q: 'Cinquième phrase : la maison est-elle encore pleine ?', opts: ['non, les invités sont partis', 'oui, la fête continue'], correct: 0, why: 'Furent bientôt partis. EN: they are gone.' },
    { q: 'Dernière phrase : combien de temps pour vider la grange ?', opts: ['moins d’une heure', 'toute une journée'], correct: 0, why: 'En moins d’une heure. EN: under an hour.' },
  ],
  audio: REC('rec-c1-02-bientot-ecoute'),
  say: REFRAME,
  terms: ['bientot'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'La tempête, texte original écrit pour la leçon', TEXTE_A7, [
  { q: 'Relève les deux passés antérieurs en phrase seule et ce qui les accompagne.', a: 'En un instant, le vent eut arraché ; ils eurent bientôt couvert. Un délai court (en un instant, bientôt), un résultat atteint.' },
  { q: '« La maison fut de nouveau au sec » : est-ce un passé antérieur ?', a: 'Non : fut et un adjectif (au sec), pas un participe. C’est le passé simple d’être.' },
  { q: 'Dis la phrase « Ils eurent bientôt couvert le trou » en français d’aujourd’hui.', a: 'Ils ont vite couvert le trou. Ou : ils ont eu tôt fait de couvrir le trou.' },
  { q: 'Pourquoi « accoururent » est-il un passé simple, et non un passé antérieur ?', a: 'C’est l’action elle-même, l’arrivée des voisins, pas un résultat bouclé avant une autre. Courir, accourir : accoururent.' },
  { q: 'Quel effet produisent ces deux passés antérieurs sur la nuit racontée ?', a: 'La tempête et la réparation passent en deux lignes : le danger dure peu, et le matin arrive vite.' },
], 'rec-c1-02-texte-a7', ['bientot', 'rythme']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Sans charnière', 'Le passé antérieur peut-il vivre dans une phrase seule ?',
    ['oui, surtout avec bientôt ou en un instant', 'non, jamais sans quand'], 0,
    'Bientôt, vite, en un instant. EN: yes, with a short span.'),
  ctl('Le sens', '« En un instant, les pompiers eurent maîtrisé le feu » insiste sur…',
    ['la rapidité du résultat', 'la difficulté du travail'], 0,
    'Un délai très court, un feu maîtrisé. EN: speed of the result.'),
  ctl('Le faux ami', '« La maison fut de nouveau au sec » : passé antérieur ?',
    ['non : fut et un adjectif', 'oui : fut et un participe'], 0,
    'Au sec n’est pas un participe. EN: no participle.'),
], ['bientot']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Il eut bientôt fini',
    opener: {
      line: 'En un instant, le feu fut maîtrisé, et le récit saute à la fin : ici tu lis le passé antérieur sans charnière. EN: In an instant the fire was out and the story jumps to the end: here you read the passé antérieur with no hinge.',
      imageRef: 'lessons/passe-anterieur/act07.jpg',
    },
    sections: [],
    milestone: 'Tu comprends le passé antérieur seul dans sa phrase, avec bientôt ou en un instant, comme un résultat vite atteint. EN: You can read a main-clause passé antérieur as a result reached quickly.',
    estScreens: 30, restPoints: ['a7-cartes'],
  },
  sections: [A7_EXEMPLES, A7_CARTES, A7_CONSTRUIRE, A7_ECOUTE, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: AVAIT FINI, EUT FINI
 *
 *  On one page: the plus-que-parfait keeps a fact at a distance (a habit, a
 *  background, a far-back act); the passé antérieur closes one step just
 *  before the next. A passé antérieur followed by an imparfait leaves a
 *  situation. Page: Hémon, Maria Chapdelaine (public domain).
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Les deux soirs',
  frSub: 'Une nouvelle, texte original écrit pour la leçon',
  text: LECTURE_DEUX_SOIRS,
  glossary: [
    { word: 'galerie', en: 'porch', note: 'Au Québec, le balcon couvert devant la maison.' },
    { word: 'soupé', en: 'had supper', note: 'Souper : le repas du soir, au Québec, en Belgique et en Suisse.' },
  ],
  questions: [
    { q: 'Globale : quelle différence y a-t-il entre les deux soirs ?', a: 'Pendant trente ans, le même rituel ; le soir des quatre-vingts ans, une rupture : le grand-père part chercher la bague de mariage.' },
    { q: 'Relève les plus-que-parfaits du premier paragraphe. Que disent-ils ?', a: 'avait suivi, avait soupé, avait fini : une habitude répétée, avec l’imparfait (sortait, rentrait).' },
    { q: 'Relève les passés antérieurs du soir de l’anniversaire.', a: 'eut soupé, eut disparu, l’eut posé : chaque étape bouclée, puis la suivante au passé simple.' },
    { q: '« Il avait commandé la bague trente ans plus tôt » : pourquoi pas un passé antérieur ?', a: 'C’est un fait lointain, sans lien immédiat avec l’action suivante : le plus-que-parfait recule loin en arrière.' },
    { q: 'Inférence : pourquoi la grand-mère reste-t-elle la bouche ouverte ?', a: 'Le rituel est cassé pour la première fois en trente ans : elle ne comprend pas, et l’inquiétude commence.' },
  ],
  audio: REC('rec-c1-02-deux-soirs'),
  say: REFRAME,
  terms: ['pqp', 'relais'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-plans',
  title: 'Deux temps, deux distances',
  frSub: 'Loin en arrière, ou juste avant',
  hint: 'Quatre cartes. La troisième finit sur un imparfait.',
  audio: REC('rec-c1-02-pqp'),
  say: REFRAME,
  terms: ['pqp'],
  cards: [
    {
      head: 'Une habitude', label: 'plus-que-parfait et imparfait',
      fr: fr(E(1712)), sub: rsOf(E(1712)),
      body: `Dès qu’il avait soupé, il sortait : tous les soirs. « ${B201_REFRAME} » EN: A habit: plus-que-parfait plus imparfait.`,
    },
    {
      head: 'Une seule fois', label: 'passé antérieur et passé simple',
      fr: fr(E(1713)), sub: rsOf(E(1713)),
      body: 'Ce soir-là, dès qu’il eut soupé, il sortit : un soir précis, une étape bouclée, puis la suivante. EN: Once: passé antérieur plus passé simple.',
    },
    {
      head: 'Une étape, puis une situation', label: 'passé antérieur et imparfait',
      fr: fr(E(1722)), sub: rsOf(E(1722)),
      body: 'Eurent abattu, puis restait : l’étape bouclée laisse une situation, qui dure. Plus rare, et très parlant. EN: A step closed, then a situation left.',
    },
    {
      head: 'Loin en arrière', label: 'le plus-que-parfait seul',
      fr: fr(E(1718)), sub: rsOf(E(1718)),
      body: 'Elle avait quitté la ville depuis un mois : pas d’enchaînement, une distance. Le passé antérieur, lui, collerait le départ à l’arrivée de la lettre. EN: Far back: the plus-que-parfait.',
    },
  ],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-table',
  layer: 'core',
  sheetId: 'sheet-plans',
  title: 'Six paires sur une page',
  cols: ['Tu lis', 'Le temps', 'Ce que ça dit'],
  rows: [
    { cells: ['dès qu’il avait soupé, il sortait', 'plus-que-parfait', 'chaque soir'], say: fr(E(1712)),
      detail: { title: 'avait soupé', body: 'Avec l’imparfait, une habitude. EN: a habit.', say: fr(E(1712)) } },
    { cells: ['dès qu’il eut soupé, il sortit', 'passé antérieur', 'ce soir-là'], say: fr(E(1713)),
      detail: { title: 'eut soupé', body: 'Avec le passé simple, une seule fois. EN: once.', say: fr(E(1714)) } },
    { cells: ['quand il avait fini, il passait', 'plus-que-parfait', 'tous les jours'], say: fr(E(1716)),
      detail: { title: 'avait fini', body: 'La journée finie, chaque jour, le café. EN: every day.', say: fr(E(1716)) } },
    { cells: ['quand il eut fini, il passa', 'passé antérieur', 'un jour précis'], say: fr(E(1715)),
      detail: { title: 'eut fini', body: 'Un jour, une étape, puis le café. EN: one day.', say: fr(E(1717)) } },
    { cells: ['elle avait quitté la ville depuis un mois', 'plus-que-parfait', 'loin en arrière'], say: fr(E(1718)),
      detail: { title: 'avait quitté', body: 'Un mois d’écart : la distance. EN: far back.', say: fr(E(1719)) } },
    { cells: ['elle eut à peine quitté la ville que', 'passé antérieur', 'juste avant'], say: fr(E(1720)),
      detail: { title: 'eut à peine quitté', body: 'Pas d’écart : le départ, puis la lettre. EN: just before.', say: fr(E(1721)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pqp'],
};

const A8_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-trier',
  layer: 'core',
  size: 'lg',
  title: 'Une habitude, ou une fois',
  frSub: 'Deux piles',
  groups: [
    grp('Une fois, juste avant', [
      it(E(1713), 'ce soir-là'),
      it(E(1715), 'un jour précis'),
      it(E(1720), 'le départ collé à la lettre'),
      it(CL(2575), 'le repas, puis la terrasse'),
    ], chk('Qu’ont en commun ces quatre phrases ?',
      ['un passé antérieur suivi d’un passé simple', 'un plus-que-parfait suivi d’un imparfait'], 0,
      'Une étape, puis la suivante, une seule fois. EN: once.')),
    grp('Loin, ou souvent', [
      it(E(1712), 'chaque soir'),
      it(E(1716), 'tous les jours'),
      it(E(1718), 'un mois avant'),
      it(CL(2573), 'une habitude d’enfance'),
    ], chk('« Dès que j’avais fini mes devoirs, je descendais jouer sur la plage. » Combien de fois ?',
      ['souvent, par habitude', 'une seule fois'], 0,
      'Plus-que-parfait et imparfait : la scène se répète. EN: repeatedly.')),
    ctl('Le résultat', '« Quand les ouvriers eurent abattu les arbres, il restait les branches à brûler. » Restait dit…',
      ['la situation laissée par l’étape finie', 'une action qui commence'], 0,
      'Un passé antérieur, puis un imparfait : ce qui reste. EN: the situation left.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pqp'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Souvent, ou ce soir-là',
  frSub: 'Huit phrases, deux temps',
  lines: [
    ln(E(1712)), ln(E(1713)), ln(E(1716)), ln(E(1715)),
    ln(E(1718)), ln(E(1720)), ln(E(1722)), ln(CL(2573)),
  ],
  questions: [
    { q: 'Première phrase : combien de fois sort-il fumer ?', opts: ['chaque soir', 'une seule fois'], correct: 0, why: 'Chaque soir, avait soupé, sortait. EN: every evening.' },
    { q: 'Deuxième phrase : combien de fois ?', opts: ['une seule fois, ce soir-là', 'chaque soir'], correct: 0, why: 'Ce soir-là, eut soupé, sortit. EN: once.' },
    { q: 'Cinquième phrase : quand est-elle partie ?', opts: ['un mois avant la lettre', 'juste avant la lettre'], correct: 0, why: 'Avait quitté… depuis un mois. EN: a month before.' },
    { q: 'Sixième phrase : quand est-elle partie ?', opts: ['juste avant la lettre', 'un mois avant'], correct: 0, why: 'Eut à peine quitté. EN: just before.' },
    { q: 'Septième phrase : que reste-t-il à faire ?', opts: ['brûler les branches', 'abattre les arbres'], correct: 0, why: 'Les arbres abattus, il restait les branches. EN: burn the branches.' },
  ],
  audio: REC('rec-c1-02-pqp-ecoute'),
  say: REFRAME,
  terms: ['pqp'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre lectures qui brouillent le temps',
  errors: [
    {
      wrong: 'Ce soir-là, dès qu’il avait soupé, il sortait sur la galerie.',
      right: fr(E(1714)),
      why: 'Normal : avait soupé et eut soupé se traduisent tous deux par had had supper. Mais ce soir-là n’arrive qu’une fois : il a soupé, il est sorti. EN: once, not a habit.',
    },
    {
      wrong: 'Quand la lettre est arrivée, elle a quitté la ville depuis un mois.',
      right: fr(E(1719)),
      why: 'Normal : on transpose tout au passé composé. Mais le plus-que-parfait reste : elle avait quitté la ville bien avant. EN: the pluperfect stays.',
    },
    {
      wrong: 'Elle avait quitté la ville depuis longtemps quand la lettre est arrivée.',
      right: fr(E(1721)),
      why: 'Normal : on lit eut quitté comme un plus-que-parfait. Mais à peine… que colle les deux faits : elle venait à peine de partir. EN: just before, not long before.',
    },
    {
      wrong: 'Quand les ouvriers abattaient les arbres, il restait les branches à brûler.',
      right: fr(E(1723)),
      why: 'Normal : restait, à l’imparfait, attire l’autre verbe. Mais l’abattage est fini avant : une fois les arbres abattus. EN: the felling is over first.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pqp'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Louis Hémon, « Maria Chapdelaine » (1914)', EXTRAIT_AUNES, [
  { q: 'Repère le plus-que-parfait et le passé antérieur de l’extrait.', a: 'Plus-que-parfait : avaient travaillé (le matin). Passé antérieur : eurent disparu (les aunes).' },
  { q: 'Que dit chacun ?', a: 'Avaient travaillé : un travail fait plus tôt, vu de loin, qui explique l’état du terrain. Eurent disparu : l’étape du jour bouclée, juste avant la suivante.' },
  { q: 'Après eurent disparu, pourquoi un imparfait, restait ?', a: 'L’étape finie laisse une situation : les souches sont là, et le travail continue. Ce n’est pas un événement, c’est ce qui reste.' },
  { q: 'Dis la dernière phrase en français d’aujourd’hui.', a: 'Une fois les aunes arrachés, il restait les souches. Ou : quand les aunes ont disparu, il restait les souches.' },
  { q: 'Que fait la phrase très courte de la fin, après la longue phrase des gestes ?', a: 'Elle tombe comme un constat : tout ce travail, et il reste le plus dur. Le passé antérieur boucle l’effort en trois mots.' },
], 'rec-c1-02-texte-a8', ['pqp', 'relais']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('L’habitude', '« Quand il avait fini, il sortait » dit…',
    ['une habitude', 'une seule fois'], 0,
    'Plus-que-parfait et imparfait. EN: a habit.'),
  ctl('La distance', 'Pour un fait loin en arrière, sans enchaînement, l’auteur choisit…',
    ['le plus-que-parfait', 'le passé antérieur'], 0,
    'Le plus-que-parfait garde la distance. EN: the plus-que-parfait.'),
  ctl('Le résultat', 'Un passé antérieur suivi d’un imparfait dit…',
    ['une étape finie, puis une situation', 'deux habitudes', 'deux événements'], 0,
    'Quand les aunes eurent disparu, il restait les souches. EN: a step, then a situation.'),
], ['pqp']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Avait fini, eut fini',
    opener: {
      line: 'Chaque soir le même rituel, puis un soir pas comme les autres : ici tu sépares le plus-que-parfait du passé antérieur sur une même page. EN: The same ritual every evening, then one evening unlike the rest: here you tell the two tenses apart on one page.',
      imageRef: 'lessons/passe-anterieur/act08.jpg',
    },
    sections: [],
    milestone: 'Sur une même page, tu sais pourquoi l’auteur choisit le plus-que-parfait ici et le passé antérieur là. EN: On one page, you can say why the author chose the plus-que-parfait here and the passé antérieur there.',
    estScreens: 40, restPoints: ['a8-cartes', 'a8-ecoute'],
  },
  sections: [A8_LECTURE, A8_CARTES, A8_TABLE, A8_TRIER, A8_ECOUTE, A8_ERREURS, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: LE RYTHME DU RÉCIT
 *
 *  What the passé antérieur does to pace: it stages, links, accelerates.
 *  Two versions of one scene (original), then Flaubert's hunt (public
 *  domain, one cut marked « […] »).
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Deux versions d’une scène',
  frSub: 'Un atelier d’écriture, texte original écrit pour la leçon',
  text: LECTURE_ATELIER,
  glossary: [
    { word: 'trempé', en: 'soaked', note: 'Mouillé jusqu’aux os.' },
    { word: 'animatrice', en: 'workshop leader', note: 'La personne qui anime l’atelier.' },
  ],
  questions: [
    { q: 'Globale : que racontent les deux versions ?', a: 'La même scène : Marthe ferme les volets, sert la soupe, ouvre à un homme trempé qui mange sans un mot puis la regarde.' },
    { q: 'Combien de passés antérieurs chez Lucie ? Et chez Nadia ?', a: 'Chez Lucie : eut fermé, eut posé, eut ouvert, eut vidé, l’eut reposé, cinq. Chez Nadia : aucun, seulement des passés simples.' },
    { q: 'Quelle version marque le mieux l’ordre et le lien entre les gestes ?', a: 'Celle de Lucie : chaque geste est bouclé avant le suivant, comme une condition. Chez Nadia, les gestes sont posés côte à côte.' },
    { q: 'Quelle version est la plus abrupte ?', a: 'Celle de Nadia : des passés simples courts, juxtaposés, sans charnière. Le choc de la porte est plus sec.' },
    { q: 'Pourquoi le groupe ne répond-il pas la même chose sur la vitesse ?', a: 'Parce que les deux vont vite autrement : Lucie enchaîne par paliers serrés, Nadia coupe en phrases sèches. Le rythme dépend de l’effet cherché.' },
  ],
  audio: REC('rec-c1-02-atelier'),
  say: REFRAME,
  terms: ['rythme'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-plans',
  title: 'Quatre effets sur la page',
  frSub: 'Ce que le temps fait au rythme',
  hint: 'Quatre cartes. La deuxième n’a pas de passé antérieur.',
  audio: REC('rec-c1-02-rythme'),
  say: REFRAME,
  terms: ['rythme'],
  cards: [
    {
      head: 'Un palier', label: 'l’étape posée',
      fr: fr(E(1728)), sub: rsOf(E(1728)),
      body: 'Quand elle eut fermé les volets : la première étape est posée comme la condition de la seconde. Le récit monte une marche. EN: A step set as the condition of the next.',
    },
    {
      head: 'La juxtaposition', label: 'deux passés simples',
      fr: fr(E(1729)), sub: rsOf(E(1729)),
      body: 'Elle ferma, alluma : deux gestes côte à côte, sans lien marqué. Plus sec, plus abrupt. EN: Two simple pasts side by side: more abrupt.',
    },
    {
      head: 'La compression', label: 'plusieurs participes',
      fr: fr(E(1733)), sub: rsOf(E(1733)),
      body: 'Eurent mangé, bu et chanté : toute une soirée sous un seul auxiliaire, bouclée en une subordonnée. EN: A whole evening compressed.',
    },
    {
      head: 'L’accélération', label: 'la phrase seule',
      fr: fr(E(1731)), sub: rsOf(E(1731)),
      body: 'Il eut bientôt vidé son bol : le repas passe en une ligne, l’auteure saute au regard qui suit. EN: The meal passes in one line.',
    },
  ],
};

const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-trier',
  layer: 'core',
  size: 'lg',
  title: 'Paliers ou coupures',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Un enchaînement serré', [
      it(E(1728), 'un palier'),
      it(E(1735), 'pas un temps mort'),
      it(E(1733), 'une soirée compressée'),
      it(E(1731), 'un repas en une ligne'),
    ], chk('Que font ces phrases au rythme ?',
      ['elles bouclent chaque étape et enchaînent sans pause', 'elles ralentissent pour décrire le décor'], 0,
      'Le passé antérieur ferme, le passé simple relance. EN: close, then relaunch.')),
    grp('Ce qu’en dit l’analyse', [
      it(E(1739), 'la narratrice accélère'),
      it(E(1740), 'l’auteur ralentit'),
      it(E(1729), 'deux gestes juxtaposés'),
      it(E(1730), 'la même scène, aujourd’hui'),
    ], chk('« Elle ferma les volets et alluma la lampe. » Par rapport à « quand elle eut fermé les volets, elle alluma la lampe », c’est…',
      ['plus abrupt, sans lien marqué', 'plus lent et plus lié'], 0,
      'Deux passés simples côte à côte. EN: more abrupt.')),
    ctl('Le décor', 'Quand l’auteur veut ralentir et décrire, il choisit plutôt…',
      ['l’imparfait', 'le passé antérieur', 'le passé simple'], 0,
      'Le décor dure : l’imparfait. EN: the imparfait.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['rythme'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Six phrases, six vitesses',
  frSub: 'Écoute le rythme, puis réponds',
  lines: [ln(E(1728)), ln(E(1729)), ln(E(1731)), ln(E(1733)), ln(E(1735)), ln(E(1740))],
  questions: [
    { q: 'Première phrase : qu’est-ce qui vient d’abord ?', opts: ['les volets', 'la lampe'], correct: 0, why: 'Eut fermé les volets, puis alluma. EN: the shutters.' },
    { q: 'Deuxième phrase : y a-t-il un lien marqué entre les deux gestes ?', opts: ['non, ils sont juxtaposés', 'oui, une charnière'], correct: 0, why: 'Ferma et alluma, sans quand. EN: no.' },
    { q: 'Quatrième phrase : que font-ils avant de s’endormir ?', opts: ['ils mangent, boivent et chantent', 'ils dansent'], correct: 0, why: 'Eurent mangé, bu et chanté. EN: eat, drink, sing.' },
    { q: 'Cinquième phrase : que cherche-t-il des yeux ?', opts: ['sa sœur', 'son bagage'], correct: 0, why: 'Il chercha sa sœur des yeux. EN: his sister.' },
    { q: 'Dernière phrase : l’auteur accélère-t-il ?', opts: ['non, il ralentit sur le décor', 'oui'], correct: 0, why: 'Il ralentit et s’attarde. EN: he slows down.' },
  ],
  audio: REC('rec-c1-02-rythme-ecoute'),
  say: REFRAME,
  terms: ['rythme'],
};

const A9_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a9-focus',
  layer: 'core',
  sheetId: 'sheet-plans',
  title: 'Ce qu’il faut regarder dans une page',
  points: [
    'Combien de passés antérieurs, et où : en série, le récit avance par paliers. EN: count them, and where.',
    'Ce qui suit : un passé simple relance, un imparfait laisse une situation. EN: what follows each one.',
    'Une phrase seule avec bientôt : l’auteur saute une durée. EN: bientôt skips time.',
    'Leur absence : des passés simples juxtaposés, un effet plus sec. EN: their absence is a choice too.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['rythme'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Flaubert, « La Légende de saint Julien l’Hospitalier » (1877)', EXTRAIT_CHASSE, [
  { q: 'Repère le passé antérieur. Que boucle-t-il ?', a: 'il les eut tous occis : la chasse aux quatre premières bêtes, d’un seul coup, juste avant l’arrivée des autres.' },
  { q: 'Que se passe-t-il avant lui, et après lui ?', a: 'Avant : quatre passés simples en rafale (bondit, parut, sortit, déploya). Après : d’autres bêtes se présentèrent, une liste qui enfle.' },
  { q: 'Quel effet produit ce passé antérieur au milieu de la phrase ?', a: 'Un pivot : la tuerie tient en trois mots, et la phrase repart aussitôt vers une liste sans fin. Le massacre devient mécanique.' },
  { q: 'Dis la partie centrale en français d’aujourd’hui.', a: 'Et quand il les a tous tués, d’autres chevreuils sont apparus. (Occire : tuer, verbe ancien ; occis est son participe.)' },
  { q: 'Que signale « […] » dans l’extrait ?', a: 'Une coupe de la leçon : Flaubert a un tiret à cet endroit. Aucun mot n’est changé.' },
], 'rec-c1-02-texte-a9', ['rythme', 'relais']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le palier', 'Une série de passés antérieurs fait avancer le récit…',
    ['par paliers, sans temps mort', 'lentement, en décrivant'], 0,
    'Chaque étape bouclée avant la suivante. EN: in stages.'),
  ctl('L’absence', 'Deux passés simples juxtaposés, sans passé antérieur, donnent…',
    ['un effet plus abrupt', 'un effet plus lié', 'une habitude'], 0,
    'Côte à côte, sans lien marqué. EN: more abrupt.'),
  ctl('La compression', '« Quand ils eurent mangé, bu et chanté » compresse…',
    ['toute une soirée', 'une seule seconde'], 0,
    'Trois participes sous un seul eurent. EN: a whole evening.'),
], ['rythme']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Le rythme du récit',
    opener: {
      line: 'Deux écrivaines, une même scène, deux vitesses : ici tu entends ce que le passé antérieur fait au rythme d’une page. EN: Two writers, one scene, two speeds: here you hear what the passé antérieur does to the pace of a page.',
      imageRef: 'lessons/passe-anterieur/act09.jpg',
    },
    sections: [],
    milestone: 'Tu sais dire ce que le passé antérieur fait au rythme d’une page, et ce que son absence produit. EN: You can say what the passé antérieur does to a page’s pace, and what its absence does.',
    estScreens: 34, restPoints: ['a9-lecture', 'a9-ecoute'],
  },
  sections: [A9_LECTURE, A9_CARTES, A9_TRIER, A9_ECOUTE, A9_FOCUS, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: AUJOURD’HUI, TU DIRAIS
 *
 *  The modern routes: quand il a fini, après avoir fini, une fois qu'il a
 *  fini, il venait de finir quand. In a passé composé story the
 *  conjunction carries the order. What never moves: the plus-que-parfait.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le balado du club',
  frSub: 'La nouvelle de l’acte 1, racontée aujourd’hui',
  text: LECTURE_BALADO,
  glossary: [
    { word: 'y est pour beaucoup', en: 'has a lot to do with it', note: 'Être pour beaucoup dans quelque chose : en être une cause importante.' },
    { word: 'décroché', en: 'picked up', note: 'Décrocher le téléphone : répondre.' },
  ],
  questions: [
    { q: 'Relève les équivalents d’aujourd’hui des passés antérieurs de la nouvelle.', a: 'venait à peine de refermer… quand ; après avoir retiré ; dès qu’elle a lu ; une fois la lettre terminée ; a vite compris ; quand il a raccroché.' },
    { q: 'Pour « Elle eut bientôt compris », qu’a choisi l’animatrice ?', a: 'Elle a vite compris : un passé composé, et vite à la place de bientôt.' },
    { q: 'Pourquoi « parti depuis trois ans » ne change-t-il pas ?', a: 'C’est un participe qui décrit un état ancien : rien à transposer.' },
    { q: 'Quel temps l’animatrice n’emploie-t-elle jamais ?', a: 'Ni le passé simple ni le passé antérieur : elle parle, elle raconte au passé composé.' },
    { q: 'Que dit sa dernière phrase du passé antérieur ?', a: 'Qu’il fait le rythme du livre : tout s’enchaîne. En le racontant, elle garde l’ordre, mais pas cette vitesse.' },
  ],
  audio: REC('rec-c1-02-balado'),
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A10_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a10-table',
  layer: 'core',
  sheetId: 'sheet-aujourdhui',
  title: 'Du livre à aujourd’hui',
  cols: ['Dans le livre', 'Aujourd’hui', 'Quand l’employer'],
  rows: [
    { cells: ['quand elle eut terminé', 'quand elle a terminé', 'le plus simple'], say: fr(E(1744)),
      detail: { title: 'quand + passé composé', body: 'Deux passés composés : quand porte l’ordre. EN: the conjunction carries the order.', say: fr(E(1745)) } },
    { cells: ['quand elle eut terminé', 'après avoir terminé', 'un seul sujet'], say: fr(E(1744)),
      detail: { title: 'après avoir', body: 'Le même sujet pour les deux verbes : après avoir et le participe. EN: same subject.', say: fr(E(1746)) } },
    { cells: ['à peine fut-il arrivé que', 'il venait à peine d’arriver quand', 'l’écart presque nul'], say: fr(E(1747)),
      detail: { title: 'venir à peine de', body: 'Venait de, à l’imparfait, puis quand et un passé composé. EN: imparfait of venir de, then quand.', say: fr(E(1748)) } },
    { cells: ['ils eurent vite oublié', 'ils ont vite oublié', 'la phrase seule'], say: fr(E(1749)),
      detail: { title: 'vite', body: 'Un passé composé, et l’adverbe reste. EN: keep the adverb.', say: fr(E(1750)) } },
    { cells: ['une fois que le jury eut délibéré', 'une fois que le jury a délibéré', 'l’étape franchie'], say: fr(E(1751)),
      detail: { title: 'une fois que', body: 'La charnière reste, le temps change. EN: keep the hinge.', say: fr(E(1752)) } },
    { cells: ['quand les travaux eurent été terminés', 'une fois les travaux terminés', 'le passif'], say: fr(E(1654)),
      detail: { title: 'une fois + participe', body: 'Le passif antérieur se dit en trois mots. EN: three words.', say: fr(E(1655)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Quatre routes, et ce qui ne bouge pas',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Quatre routes', [
      it(E(1745), 'quand + passé composé'),
      it(E(1746), 'après avoir'),
      it(E(1748), 'venir à peine de… quand'),
      it(E(1655), 'une fois + participe'),
    ], chk('« Quand elle eut terminé son rapport, elle l’envoya. » Laquelle de ces versions demande le même sujet pour les deux verbes ?',
      ['après avoir terminé son rapport, elle l’a envoyé', 'quand elle a terminé son rapport, elle l’a envoyé'], 0,
      'Après avoir : un seul sujet, elle. EN: après avoir needs one subject.')),
    grp('Ce qui ne bouge pas', [
      it(E(1719), 'le plus-que-parfait reste'),
      it(E(1712), 'l’habitude reste'),
      it(E(1723), 'l’imparfait du résultat reste'),
      it(E(1701), 'mentait reste'),
    ], chk('En racontant aujourd’hui, que fais-tu du plus-que-parfait et de l’imparfait ?',
      ['tu les gardes', 'tu les mets au passé composé'], 0,
      'Seuls le passé simple et le passé antérieur changent. EN: keep them.')),
    ctl('La conjonction', 'Dans un récit au passé composé, l’ordre se lit…',
      ['dans quand, dès que, une fois que', 'dans un temps spécial'], 0,
      'La charnière porte déjà l’antériorité. EN: in the conjunction.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Raconté de travers',
  frSub: 'Six cartes, huit questions',
  rule: {
    title: 'Seuls deux temps changent',
    body: 'Le passé simple et le passé antérieur passent au passé composé, ou à venir de, après avoir, une fois que. Le reste ne bouge pas : imparfait, plus-que-parfait, accords. EN: Only the two literary tenses change.',
  },
  cards: [
    { promptLabel: 'le livre resté dans la phrase', promptSound: 'Quand elle eut terminé son rapport, elle l’a envoyé à la direction.', fr: fr(E(1745)), ipa: ipaOf(E(1745)), tip: 'Dans un récit au passé composé, eut terminé détonne : a terminé. EN: register clash.' },
    { promptLabel: 'accord inventé', promptSound: 'Après avoir terminé son rapport, elle l’a envoyée à la direction.', fr: fr(E(1746)), ipa: ipaOf(E(1746)), tip: 'Le rapport est masculin : envoyé. EN: envoyé.' },
    { promptLabel: 'à peine sans venir de', promptSound: 'Il est à peine arrivé quand on l’a appelé au téléphone.', fr: fr(E(1748)), ipa: ipaOf(E(1748)), tip: 'Il venait à peine d’arriver quand. EN: venait à peine de.' },
    { promptLabel: 'le résultat perdu', promptSound: 'Ils oubliaient vite l’incident.', fr: fr(E(1750)), ipa: ipaOf(E(1750)), tip: 'Un résultat, et vite : ils ont vite oublié. EN: a result.' },
    { promptLabel: 'la forme du livre gardée', promptSound: 'Une fois que le jury a délibéré, la présidente a lut les résultats.', fr: fr(E(1752)), ipa: ipaOf(E(1752)), tip: 'Lut est le passé simple ; le participe est lu. EN: lu.' },
    { promptLabel: 'le plus-que-parfait changé', promptSound: 'Quand la lettre est arrivée, elle a quitté la ville depuis un mois.', fr: fr(E(1719)), ipa: ipaOf(E(1719)), tip: 'Avait quitté reste : un mois avant. EN: keep the pluperfect.' },
  ],
  drill: [
    { promptSay: '« Quand elle eut terminé son rapport, elle l’envoya. » Aujourd’hui, le plus simple :', opts: ['quand elle a terminé, elle l’a envoyé', 'quand elle terminait, elle l’envoyait'], correct: 0 },
    { promptSay: 'Après avoir terminé son rapport, elle l’a…', opts: ['envoyé', 'envoyée'], correct: 0 },
    { promptSay: '« À peine fut-il arrivé qu’on l’appela. » Aujourd’hui, il…', opts: ['venait à peine d’arriver', 'est à peine arrivé'], correct: 0 },
    { promptSay: '« Ils eurent vite oublié l’incident. » Aujourd’hui, ils…', opts: ['ont vite oublié', 'oubliaient vite'], correct: 0 },
    { promptSay: '« La présidente lut les résultats. » Aujourd’hui, elle a…', opts: ['lu', 'lut'], correct: 0 },
    { promptSay: '« Elle avait quitté la ville depuis un mois. » Aujourd’hui :', opts: ['elle avait quitté la ville depuis un mois', 'elle a quitté la ville depuis un mois'], correct: 0 },
    { promptSay: '« Une fois que le jury eut délibéré… » Aujourd’hui :', opts: ['une fois que le jury a délibéré', 'une fois que le jury délibérait'], correct: 0 },
    { promptSay: '« Quand les travaux eurent été terminés… » En trois mots :', opts: ['une fois les travaux terminés', 'les travaux terminant'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Seuls deux temps changent' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la main change de trop' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six bonnes versions' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-02-piege-aujourdhui'),
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A10_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a10-dictee',
  layer: 'core',
  title: 'Écris ce que tu dirais',
  frSub: 'Deux phrases d’aujourd’hui',
  itemIds: dicteeFor(10),
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'La remise des prix, texte original écrit pour la leçon', TEXTE_A10, [
  { q: 'Relève les passés antérieurs.', a: 'eut délibéré, eut vite fait (de lire), eut prononcé, fut revenu, furent redescendus.' },
  { q: '« Elle eut vite fait de lire les trois noms » : que veut dire avoir vite fait de ?', a: 'Faire quelque chose très rapidement : elle a lu les trois noms en un instant.' },
  { q: 'Raconte la troisième phrase en français d’aujourd’hui.', a: 'Elle venait à peine de prononcer le dernier nom quand un cri est parti du fond de la salle.' },
  { q: 'Raconte la dernière phrase en français d’aujourd’hui.', a: 'Une fois que tous les lauréats sont redescendus de l’estrade, on a ouvert les portes du buffet.' },
  { q: 'Pourquoi tant de passés antérieurs dans un texte si court ?', a: 'Une cérémonie est une suite d’étapes : chacune bouclée, puis la suivante. Le texte avance comme un programme.' },
], 'rec-c1-02-texte-a10', ['aujourdhui', 'relais']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La route simple', 'Quand il eut fini, il sortit : la version la plus simple d’aujourd’hui ?',
    ['quand il a fini, il est sorti', 'quand il finissait, il sortait'], 0,
    'Deux passés composés. EN: two passés composés.'),
  ctl('Après avoir', 'Après avoir + participe demande…',
    ['le même sujet pour les deux verbes', 'deux sujets différents'], 0,
    'Un seul sujet. EN: one subject.'),
  ctl('Ce qui reste', 'En racontant aujourd’hui, le plus-que-parfait…',
    ['reste', 'devient un passé composé', 'devient un imparfait'], 0,
    'Il ne bouge pas. EN: it stays.'),
], ['aujourdhui']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Aujourd’hui, tu dirais',
    opener: {
      line: 'Le livre dit eut terminé, ton amie dit a terminé : ici tu choisis la bonne route pour le raconter aujourd’hui. EN: The book says eut terminé, your friend says a terminé: here you pick the right route to retell it today.',
      imageRef: 'lessons/passe-anterieur/act10.jpg',
    },
    sections: [],
    milestone: 'Tu redis n’importe quel passé antérieur en français d’aujourd’hui, sans toucher au reste de la phrase. EN: You can retell any passé antérieur in today’s French without touching the rest of the sentence.',
    estScreens: 36, restPoints: ['a10-table', 'a10-piege'],
  },
  sections: [A10_LECTURE, A10_TABLE, A10_CONSTRUIRE, A10_PIEGE, A10_DICTEE, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: LE SURCOMPOSÉ, À L’OREILLE
 *
 *  « Quand j’ai eu fini »: the spoken counterpart of the passé antérieur,
 *  heard after a time hinge; « j’en ai eu vu »: regional, chiefly the south
 *  of France and French-speaking Switzerland. RECOGNISE, NEVER PRESCRIBE:
 *  every answer maps it to the passé composé.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a11-histoire',
  layer: 'core',
  title: 'La mémoire de la ferme',
  frSub: 'Fribourg, une après-midi d’entretien',
  setting: 'Fribourg, en Suisse. Pour un projet de mémoire orale, Zoé enregistre sa grand-tante Odile, qui raconte sa jeunesse. Zoé note les tournures qu’elle n’a jamais lues.',
  bubbles: [
    { from: 'narrator', fr: 'Odile parle depuis une heure. Zoé écoute, le casque sur les oreilles.', en: 'Odile has been talking for an hour. Zoé listens, headphones on.' },
    { from: 'user', fr: fr(E(1760)), en: en(E(1760)) },
    { from: 'coach', fr: 'J’ai eu fini : deux auxiliaires. C’est le surcomposé, l’équivalent parlé du passé antérieur.', en: 'J’ai eu fini: two auxiliaries. It is the surcomposé, the spoken equivalent of the passé antérieur.', warn: 'passé surcomposé' },
    { from: 'user', fr: fr(E(1766)), en: en(E(1766)) },
    { from: 'coach', fr: 'Sans quand ni dès que, ce surcomposé est régional : il dit ce qu’on a vécu autrefois.', en: 'With no quand or dès que, this surcomposé is regional: it says what one lived through in the past.', warn: 'usage régional' },
    { from: 'user', fr: fr(E(1771)), en: en(E(1771)) },
    { from: 'coach', fr: 'Exactement. Tu le reconnais, tu le comprends, et dans ton projet écrit, tu mets quand j’ai fini.', en: 'Exactly. You recognise it, you understand it, and in your written project you put quand j’ai fini.', warn: 'reconnaître, pas prescrire' },
  ],
  closing: { fr: 'Le surcomposé s’entend ; à l’écrit soigné, le passé composé suffit.', en: 'The surcomposé is heard; in careful writing, the passé composé is enough.' },
  audio: REC('rec-c1-02-grand-tante'),
  say: REFRAME,
  terms: ['surcompose'],
};

const A11_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a11-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-surcompose',
  title: 'Le surcomposé en quatre cartes',
  frSub: 'Le reconnaître, jamais le prescrire',
  hint: 'Quatre cartes. La dernière est ce que tu écris.',
  audio: REC('rec-c1-02-surcompose'),
  say: REFRAME,
  terms: ['surcompose'],
  cards: [
    {
      head: 'Deux auxiliaires', label: 'la forme',
      fr: fr(E(1760)), sub: rsOf(E(1760)),
      body: 'J’ai eu fini : avoir au passé composé, puis eu, puis le participe. Un auxiliaire de plus que le passé composé. EN: One auxiliary more than the passé composé.',
    },
    {
      head: 'Après une charnière', label: 'à l’oral, un peu partout',
      fr: fr(E(1762)), sub: rsOf(E(1762)),
      body: 'Après quand, dès que, une fois que, il dit l’action bouclée juste avant, comme le passé antérieur à l’écrit. On l’entend dans la conversation. EN: After a hinge, in speech.',
    },
    {
      head: 'Sans charnière', label: 'régional',
      fr: fr(E(1766)), sub: rsOf(E(1766)),
      body: 'J’en ai eu vu : une expérience passée, sans subordonnée. Surtout dans le sud de la France et en Suisse romande. EN: Regional, with no time clause.',
    },
    {
      head: 'À l’écrit soigné', label: 'ce que tu écris',
      fr: fr(E(1761)), sub: rsOf(E(1761)),
      body: 'Quand j’ai fini : le passé composé suffit, la conjonction porte l’ordre. Tu reconnais le surcomposé ; tu ne l’emploies pas dans un texte soigné. EN: In careful writing, the passé composé.',
    },
  ],
};

const A11_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a11-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Six phrases entendues',
  frSub: 'Écoute, puis dis ce qui est fait d’abord',
  lines: [ln(E(1760)), ln(E(1762)), ln(E(1764)), ln(E(1766)), ln(E(1771)), ln(E(1761))],
  questions: [
    { q: 'Première phrase : que fait-il, son service fini ?', opts: ['il rentre se coucher', 'il reprend un service'], correct: 0, why: 'Je suis rentré me coucher. EN: he goes home to bed.' },
    { q: 'Deuxième phrase : qu’est-ce qui vient d’abord ?', opts: ['payer', 'partir'], correct: 0, why: 'A eu payé, puis est partie. EN: paying first.' },
    { q: 'Troisième phrase : où vont-ils marcher ?', opts: ['au bord du lac', 'en montagne'], correct: 0, why: 'Au bord du lac. EN: by the lake.' },
    { q: 'Quatrième phrase : que veut dire la personne ?', opts: ['qu’elle a déjà vécu de tels hivers', 'qu’elle verra de tels hivers'], correct: 0, why: 'J’en ai eu vu : l’expérience passée. EN: she has lived through them.' },
    { q: 'Dernière phrase : en quoi diffère-t-elle de la première ?', opts: ['elle n’a qu’un auxiliaire', 'elle raconte autre chose'], correct: 0, why: 'J’ai fini : le passé composé, à l’écrit soigné. EN: one auxiliary.' },
  ],
  audio: REC('rec-c1-02-surcompose-ecoute'),
  say: REFRAME,
  terms: ['surcompose'],
};

const A11_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-trier',
  layer: 'core',
  size: 'lg',
  title: 'Entendu, puis écrit',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Entendu à l’oral', [
      it(E(1760), 'après quand'),
      it(E(1762), 'après dès que'),
      it(E(1764), 'après une fois que'),
      it(E(1766), 'sans charnière : régional'),
    ], chk('Laquelle de ces quatre phrases est un usage régional ?',
      ['Moi, des hivers comme celui-là, j’en ai eu vu.', 'Dès qu’elle a eu payé, elle est partie.', 'Une fois qu’on a eu mangé, on est allés marcher au bord du lac.'], 0,
      'Pas de charnière, une expérience passée : le surcomposé régional. EN: no time clause.')),
    grp('À l’écrit soigné', [
      it(E(1761), 'quand j’ai fini'),
      it(E(1763), 'dès qu’elle a payé'),
      it(E(1765), 'après le repas'),
      it(E(1767), 'j’en ai déjà vu'),
    ], chk('« Quand j’ai eu fini mon service » s’écrit, dans un texte soigné…',
      ['quand j’ai fini mon service', 'quand j’aurai fini mon service', 'quand je finis mon service'], 0,
      'Le passé composé suffit, quand porte l’ordre. EN: the passé composé.')),
    ctl('Ta position', 'Face au surcomposé, tu…',
      ['le reconnais et le comprends', 'le corriges chez les gens qui parlent', 'l’emploies dans tes textes'], 0,
      'Il appartient à l’oral et à certaines régions : on le reconnaît sans le prescrire. EN: recognise it.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['surcompose'],
};

const A11_TEXTE = dansUnTexte('a11-texte', 'Un témoignage oral, texte original écrit pour la leçon', TEXTE_A11, [
  { q: 'Relève les surcomposés.', a: 'a eu fini (la messe), ai eu fini (l’école), en ai eu vu, a eu pris (sa retraite).' },
  { q: 'Lequel n’a pas de charnière ? Comment le comprendre ?', a: 'J’en ai eu vu : une expérience vécue autrefois, sans subordonnée. C’est l’usage régional, ici en Suisse romande.' },
  { q: 'Écris « Quand j’ai eu fini l’école, je suis partie travailler à Lausanne » comme à l’écrit soigné.', a: 'Quand j’ai fini l’école, je suis partie travailler à Lausanne. Ou : après l’école, je suis partie travailler à Lausanne.' },
  { q: 'Dans un roman, comment un narrateur écrirait-il la même chose ?', a: 'Quand j’eus fini l’école, je partis travailler à Lausanne : le passé antérieur et le passé simple. Tu le lis, tu ne l’écris pas.' },
  { q: 'Que révèlent ces tournures sur la personne qui parle ?', a: 'Une langue parlée, régionale, vivante : une voix de Suisse romande. Les corriger effacerait ce qu’on veut garder.' },
], 'rec-c1-02-texte-a11', ['surcompose', 'relais']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('La forme', 'Le surcomposé, c’est…',
    ['un passé composé avec un auxiliaire de plus', 'un passé simple avec un participe', 'un futur avec eu'], 0,
    'J’ai eu fini. EN: one more auxiliary.'),
  ctl('Où', '« Quand j’ai eu fini » s’entend surtout…',
    ['à l’oral', 'dans les romans', 'dans les lois'], 0,
    'Dans la conversation. EN: in speech.'),
  ctl('Régional', '« J’en ai eu vu », sans charnière, vient surtout…',
    ['du sud de la France et de Suisse romande', 'de la presse écrite'], 0,
    'Un usage régional. EN: regional.'),
], ['surcompose']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Le surcomposé, à l’oreille',
    opener: {
      line: 'Une grand-tante dit quand j’ai eu fini, et tu comprends tout : ici tu reconnais le pendant parlé du passé antérieur. EN: A great-aunt says quand j’ai eu fini and you understand it all: here you recognise the spoken counterpart of the passé antérieur.',
      imageRef: 'lessons/passe-anterieur/act11.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais le surcomposé, tu sais d’où viennent ses usages, et tu écris le passé composé à sa place. EN: You can recognise the surcomposé, place its uses, and write the passé composé instead.',
    estScreens: 30, restPoints: ['a11-cartes'],
  },
  sections: [A11_HISTOIRE, A11_CARTES, A11_ECOUTE, A11_TRIER, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12: RACONTE-LE AU CLUB
 *
 *  Model (a club member retells act 8), plan, role play, the TASK (retell an
 *  original page in today's French and say what the passé antérieur does to
 *  its pace), speak practice on today's French, cheat sheet, progress,
 *  quiz, review, roundup.
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le compte rendu de Julien',
  frSub: 'Une nouvelle, racontée au club',
  text: LECTURE_MODELE,
  questions: [
    { q: 'Quel temps Julien emploie-t-il pour les événements ?', a: 'Le passé composé : a bouleversé, s’est levé, a pris, est parti, a reconnu. Aucun passé simple, aucun passé antérieur : il parle au club.' },
    { q: 'Qu’a-t-il gardé tel quel ?', a: 'Les plus-que-parfaits et les imparfaits de l’habitude : avait suivi, avait soupé, sortait, rentrait ; et la bague qu’il avait commandée.' },
    { q: 'Comment a-t-il rendu « dès qu’il eut soupé, il se leva » ?', a: 'Juste après le souper, il s’est levé : une locution de temps et un passé composé.' },
    { q: 'Que dit sa deuxième partie, et sur quoi s’appuie-t-elle ?', a: 'Le choix des temps : plus-que-parfait pour l’habitude, passé antérieur pour la rupture. Il cite une phrase du livre comme preuve.' },
  ],
  audio: REC('rec-c1-02-modele'),
  say: REFRAME,
  terms: ['aujourdhui', 'rythme'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  sheetId: 'sheet-aujourdhui',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'De la page au club',
  steps: [
    'Lis la page une fois pour le sens : qui, où, que se passe-t-il. EN: read once for meaning.',
    'Souligne chaque passé antérieur et note l’action qui suit aussitôt. EN: underline each one and what follows.',
    'Choisis la route d’aujourd’hui : quand + passé composé, après avoir, une fois que, venir à peine de. EN: pick the modern route.',
    'Laisse l’imparfait et le plus-que-parfait ; garde l’ordre des faits. EN: keep the other tenses and the order.',
    'Ajoute deux ou trois phrases sur le rythme, avec une citation du texte. EN: add a few lines on pace, with a quotation.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'rythme'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  sheetId: 'sheet-aujourdhui',
  title: 'Quatre moments où tu racontes une page',
  cases: [
    { situation: 'Tu résumes un chapitre au club', fr: fr(E(1779)), en: en(E(1779)) },
    { situation: 'Tu donnes ton avis sur la fin', fr: fr(E(1778)), en: en(E(1778)) },
    { situation: 'Tu commentes le style d’une autrice', fr: fr(E(1777)), en: en(E(1777)) },
    { situation: 'Tu décris le rythme d’un roman', fr: fr(E(1780)), en: en(E(1780)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'Raconte la traversée à Karim',
  frSub: 'Six tours, à voix haute',
  setting: 'Karim n’a pas eu le temps de lire « La traversée » pour le club de ce soir. Il t’appelle ; tu la lui racontes, sans jamais employer le passé simple ni le passé antérieur.',
  turns: [
    {
      ai: 'Alors, ça commence comment ?', en: 'So, how does it start?',
      user: 'Une jeune femme, Aline, prend le traversier du matin pour aller voir sa tante.',
      userEn: 'A young woman, Aline, takes the morning ferry to visit her aunt. (The present of storytelling for the setting.)',
      alts: [
        { fr: 'Au début, Aline attend le traversier de six heures sur le quai.', en: 'At the start, Aline waits for the six o’clock ferry on the quay.' },
        { fr: 'Ça commence au quai, à six heures du matin.', en: 'It starts at the quay, at six in the morning.' },
      ],
    },
    {
      ai: 'Et une fois à bord ?', en: 'And once on board?',
      user: 'Une fois qu’elle a payé la traversée, elle est montée sur le pont supérieur.',
      userEn: 'Once she had paid for the crossing, she went up to the upper deck. (The book’s passé antérieur, told with une fois que and the passé composé.)',
      alts: [
        { fr: 'Après avoir payé, elle est montée sur le pont.', en: 'After paying, she went up on deck. (Après avoir: one subject.)' },
        { fr: 'Elle a payé, puis elle est montée sur le pont.', en: 'She paid, then went up on deck.' },
      ],
    },
    {
      ai: 'Il se passe quelque chose pendant la traversée ?', en: 'Does anything happen during the crossing?',
      user: 'Un brouillard épais a enveloppé le bateau, et on n’entendait plus que la corne de brume.',
      userEn: 'A thick fog wrapped the boat, and all you could hear was the foghorn. (An event in the passé composé, the background in the imparfait.)',
      alts: [
        { fr: 'Oui, au milieu du fleuve, le brouillard est tombé.', en: 'Yes, in the middle of the river the fog came down.' },
        { fr: 'Le brouillard a tout caché pendant un moment.', en: 'The fog hid everything for a while.' },
      ],
    },
    {
      ai: 'Et quand le brouillard s’est levé ?', en: 'And when the fog lifted?',
      user: 'Dès que le brouillard s’est levé, on a vu la rive nord, les clochers, les toits rouges.',
      userEn: 'As soon as the fog lifted, they saw the north shore, the steeples, the red roofs. (Dès que and two passés composés: the order is in the conjunction.)',
      alts: [
        { fr: 'Le brouillard levé, on a aperçu la rive nord.', en: 'Once the fog had lifted, the north shore came into view.' },
        { fr: 'Quand il s’est levé, on a vu l’autre rive.', en: 'When it lifted, they saw the other shore.' },
      ],
    },
    {
      ai: 'Elle retrouve sa tante tout de suite ?', en: 'Does she find her aunt straight away?',
      user: 'Oui : elle venait à peine de poser le pied sur le quai quand elle l’a reconnue au bout de la jetée.',
      userEn: 'Yes: she had barely set foot on the quay when she recognised her at the end of the jetty. (Venir à peine de… quand for the book’s aussitôt que.)',
      alts: [
        { fr: 'Oui, dès qu’elle est descendue, elle l’a vue qui agitait un foulard bleu.', en: 'Yes, as soon as she got off, she saw her waving a blue scarf.' },
        { fr: 'Presque tout de suite : sa tante l’attendait au bout de la jetée.', en: 'Almost at once: her aunt was waiting at the end of the jetty.' },
      ],
    },
    {
      ai: 'Et le style, ça vaut la peine ?', en: 'And the style, is it worth it?',
      user: 'Oui, tout s’enchaîne : chaque étape est bouclée avant la suivante, comme une traversée minutée.',
      userEn: 'Yes, everything follows on: each step is wrapped up before the next, like a timed crossing. (Your view of the pace, in the present.)',
      alts: [
        { fr: 'Oui, le rythme est très serré, on ne respire pas.', en: 'Yes, the pace is very tight, you hardly breathe.' },
        { fr: 'Oui, surtout la fin, qui arrive d’un coup.', en: 'Yes, especially the ending, which comes all at once.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'rythme'],
};

const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Raconte ce chapitre au club',
  frSub: 'Mission écrite, format C1',
  brief: `Ton club de lecture a choisi une nouvelle, « Le retour ». Tu as lu le chapitre de la semaine ; les autres non. Écris le compte rendu que tu liras à voix haute jeudi : raconte la page dans l’ordre, en français d’aujourd’hui, puis dis en quelques phrases ce que le passé antérieur fait au rythme, avec au moins deux citations du texte. Voici la page (texte original écrit pour la leçon) : « ${EXTRAIT_TACHE} »`,
  briefEn: 'Your book club has chosen a short story, « Le retour ». You have read this week’s chapter; the others have not. Write the report you will read aloud on Thursday: retell the page in order, in today’s French, then say in a few sentences what the passé antérieur does to the pace, quoting the text at least twice. The page is printed in the brief.',
  produce: 'Écris un compte rendu de 220 à 320 mots : la page racontée dans l’ordre au passé composé (avec l’imparfait et le plus-que-parfait là où le texte les met), sans aucun passé simple ni passé antérieur hors des citations, puis un paragraphe sur le rythme qui cite au moins deux passés antérieurs du texte.',
  responseSpec: { kind: 'text', minWords: 220, maxWords: 340 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          '3 : Toute la page est racontée, de l’arrivée du car à l’enveloppe, sans rien inventer d’important ; un paragraphe sur le rythme cite au moins deux passés antérieurs ; entre 220 et 320 mots.',
          '2 : La page est là, mais il manque un moment clé (le mot de la sœur, son arrivée, l’enveloppe), ou une seule citation, ou la longueur sort un peu des limites.',
          '1 : Un résumé de quelques phrases, sans paragraphe sur le rythme, ou un texte qui recopie la page.',
        ],
      },
      {
        key: 'ordre',
        label: 'L’ordre et l’antériorité',
        maxPoints: 3,
        descriptors: [
          '3 : Chaque étape bouclée avant la suivante l’est aussi chez toi (quand, dès que, une fois que, après avoir, venir à peine de) ; les pommiers avaient été taillés avant son arrivée ; rien n’avait changé reste un état.',
          '2 : L’ordre est presque toujours clair, mais une étape devient simultanée, ou un plus-que-parfait est changé.',
          '1 : On ne sait plus dans quel ordre les choses se sont passées.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction de la transposition',
        maxPoints: 4,
        descriptors: [
          '4 : Chaque passé antérieur et chaque passé simple est devenu une forme juste d’aujourd’hui : le bon auxiliaire (il est sorti, elle est arrivée), les accords (il l’a lu, le mot), la place de vite. L’imparfait et le plus-que-parfait sont restés. Hors des citations, aucun temps littéraire.',
          '3 : Une ou deux erreurs d’auxiliaire ou d’accord, mais toutes les étapes ont la bonne valeur.',
          '2 : Plusieurs erreurs : la forme du livre gardée avec un auxiliaire (il a eut posé), un décor changé, un plus-que-parfait changé.',
          '1 : Des passés antérieurs ou des passés simples restent hors des citations, ou presque tout est au même temps.',
        ],
      },
      {
        key: 'rythme',
        label: 'L’analyse du rythme',
        maxPoints: 2,
        descriptors: [
          '2 : Tu dis ce que fait le passé antérieur (des étapes bouclées, un enchaînement serré, une phrase seule qui accélère avec bientôt), en t’appuyant sur deux citations exactes.',
          '1 : Une remarque générale sur le rythme, sans citation ou sans lien avec le temps.',
        ],
      },
    ],
  },
  scaffold: [
    'Bonsoir à tous,',
    'Voici le chapitre de cette semaine.',
    'Il venait à peine de',
    'Après avoir',
    'Une fois que',
    'Rien n’avait changé :',
    'Ce qui m’a frappé, c’est',
    'L’auteure enchaîne',
  ],
  modelAnswer: "Bonsoir à tous. Voici le chapitre de cette semaine, « Le retour ». Vers quatre heures, le car a déposé le personnage à l’entrée du village. Il venait à peine de franchir le seuil de la maison quand il a reconnu l’odeur de cire et de pommes. Après avoir posé sa valise dans l’entrée, il a fait lentement le tour des pièces. Rien n’avait changé : la nappe à carreaux, l’horloge arrêtée, le fauteuil de son père tourné vers la fenêtre. Dès qu’il a ouvert les volets, la lumière a envahi la cuisine. Sur la table, il a trouvé un mot de sa sœur ; une fois le mot lu, il est sorti dans le jardin. Les pommiers avaient été taillés, et il a vite compris qu’on l’attendait. Quand sa sœur est arrivée, ils sont restés un long moment sans parler. Puis elle a mis la table, comme si de rien n’était. Une fois la lampe allumée, ils ont dîné face au jardin qui s’assombrissait, et quand ils ont fini, elle lui a tendu une enveloppe. Ce qui m’a frappé, c’est le rythme. L’auteure enchaîne les gestes au passé antérieur, « quand il eut posé sa valise », « dès qu’il eut ouvert les volets » : chaque étape est bouclée avant la suivante, et le retour avance par paliers, presque sans respirer. À l’inverse, « il eut bientôt compris » fait passer toute une réflexion en une ligne. Et le chapitre s’arrête net sur l’enveloppe. Qui veut deviner ce qu’elle contient ?\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : toute la page, dans l’ordre, un paragraphe sur le rythme, deux citations exactes.\n2. Ordre : venir à peine de… quand, après avoir, dès que, une fois + participe, quand + passé composé ; avaient été taillés et n’avait changé restent.\n3. Correction : est sorti, est arrivée, sont restés ; a vite compris ; aucun temps littéraire hors des guillemets.\n4. Rythme : les paliers et la phrase seule avec bientôt, appuyés sur le texte.",
  modelAnswerEn: "Good evening, everyone. Here is this week’s chapter, « Le retour ». Around four o’clock, the bus dropped the character off at the edge of the village. He had barely crossed the threshold of the house when he recognised the smell of wax and apples. After putting his suitcase down in the hall, he slowly went round the rooms. Nothing had changed: the checked tablecloth, the stopped clock, his father’s armchair turned towards the window. As soon as he opened the shutters, light flooded the kitchen. On the table he found a note from his sister; once he had read it, he went out into the garden. The apple trees had been pruned, and he quickly understood that he was expected. When his sister arrived, they stayed a long while without speaking. Then she set the table as if nothing had happened. Once the lamp was lit, they had dinner facing the darkening garden, and when they had finished, she handed him an envelope. What struck me is the pace. The author links the actions in the passé antérieur, « quand il eut posé sa valise », « dès qu’il eut ouvert les volets »: each step is wrapped up before the next, and the homecoming moves on in stages, almost without a breath. By contrast, « il eut bientôt compris » passes a whole realisation in one line. And the chapter stops dead on the envelope. Who wants to guess what is inside? The marker’s notes (not counted): 1. Task: the whole page, in order, a paragraph on pace, two exact quotations. 2. Order: modern routes for every passé antérieur; the pluperfects stay. 3. Accuracy: être verbs, no literary tense outside quotation marks. 4. Pace: stages and the one-line bientôt, backed by the text.",
  watchFor: [
    { pattern: 'A passé antérieur or passé simple copied into the retelling outside quotation marks (il eut posé, il fit le tour, elle mit la table).', criterion: 'correction', feedback: 'Tu racontes au club : chaque passé antérieur devient une forme d’aujourd’hui. Quand il eut posé : après avoir posé, ou quand il a posé.', ref: 'a10-table' },
    { pattern: 'The book form kept with an extra auxiliary: il a eut posé, il a fit, il est sortit.', criterion: 'correction', feedback: 'Remonte à l’infinitif, puis prends le participe : poser, posé ; sortir, sorti.', ref: 'a10-piege' },
    { pattern: 'Avoir with an être verb in the retelling: il a sorti dans le jardin, elle a arrivé, ils ont resté.', criterion: 'correction', feedback: 'Sortir, arriver, rester sans complément prennent être : il est sorti, elle est arrivée.', ref: 'a2-table' },
    { pattern: 'The passé antérieur read as a passive or the passive misread: les pommiers ont taillé, the pruning given to the character.', criterion: 'ordre', feedback: 'Avaient été taillés : un passif, quelqu’un les avait taillés avant son arrivée.', ref: 'a4-cartes' },
    { pattern: 'A plus-que-parfait changed, which loses the anteriority: rien n’a changé, les pommiers ont été taillés.', criterion: 'ordre', feedback: 'N’avait changé et avaient été taillés restent : ces faits sont antérieurs à son arrivée.', ref: 'a10-construire' },
    { pattern: 'À peine eut-il franchi… que turned into a long gap (il avait franchi le seuil depuis un moment) or into a degree (il a un peu franchi).', criterion: 'ordre', feedback: 'À peine… que colle les deux actions : il venait à peine de franchir le seuil quand…', ref: 'a6-piege' },
    { pattern: 'Il eut bientôt compris rendered as a beginning or a habit (il commençait à comprendre, il comprenait).', criterion: 'ordre', feedback: 'Eut bientôt compris : c’est fait, et vite. Il a vite compris.', ref: 'a7-cartes' },
    { pattern: 'The surcomposé used throughout the written report (quand il a eu posé, dès qu’il a eu ouvert).', criterion: 'correction', feedback: 'À l’écrit soigné, le passé composé suffit : quand il a posé, dès qu’il a ouvert. Le surcomposé appartient à l’oral.', ref: 'a11-cartes' },
    { pattern: 'Agreement errors after avoir with an object placed before: le mot, il l’a lue ; la valise, il l’a posé.', criterion: 'correction', feedback: 'Le mot, masculin : il l’a lu. La valise, féminin : il l’a posée.', ref: 'a3-erreurs' },
    { pattern: 'The pace paragraph quotes no passé antérieur, or quotes it inexactly, or says only that the text is beautiful.', criterion: 'rythme', feedback: 'Cite deux passés antérieurs exacts et dis ce qu’ils font : des étapes bouclées, un enchaînement serré.', ref: 'a9-focus' },
    { pattern: 'The pace analysis confuses the passé antérieur with the plus-que-parfait (calls avaient été taillés a passé antérieur).', criterion: 'rythme', feedback: 'Avaient été taillés est un plus-que-parfait passif : un fait loin en arrière, pas une étape qui s’enchaîne.', ref: 'a8-cartes' },
    { pattern: 'Events skipped, invented or reordered (the envelope before dinner), or a body outside 220 to 320 words.', criterion: 'tache', feedback: 'Suis la page pas à pas : le car, le seuil, la valise, les volets, le mot, le jardin, la sœur, la lampe, l’enveloppe.', ref: 'a12-plan' },
  ],
  graderNotes: [
    'Count the words of the report body only: the greeting line does not count. 220 to 320 with 10% tolerance (198 to 352) before criterion « tache » loses a point. responseSpec allows 340.',
    'THIS IS A RECOGNITION LESSON: the learner is never asked to produce the passé antérieur or the passé surcomposé. A passé antérieur or passé simple OUTSIDE quotation marks is an error under « correction »; inside quotation marks it is a quotation and is required by the pace paragraph. Never suggest a passé antérieur or a surcomposé form in feedback.',
    'Accept every modern route for a passé antérieur: quand / dès que / une fois que + passé composé, après avoir + participe, une fois + participe, venir à peine de… quand, à peine était-il… que. Do not prefer one.',
    'Accept the present of narration for the opening situation provided the events are then told in the passé composé. Do not accept the present for the whole retelling.',
    'A surcomposé in the written report (quand il a eu posé) loses at most one point under « correction » in total, with the feedback in watchFor; it is not wrong French in speech and must never be called incorrect, only unsuited to careful writing.',
    'The character has no name in the page: accept il, le personnage, le narrateur, le fils, or an invented name.',
    'Writer gender is unknown: judge agreements referring to the writer for internal consistency only.',
    'Accept regional vocabulary (dîner and souper in their regional senses, déjeuner for the midday or morning meal).',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 8 du B2 »), never by id, and never a C1 lesson that is not published.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'rythme'],
};

/** Say today's French out loud. Every id carries `voiceflash`, so no row
 *  holding a passé antérieur or a surcomposé can reach it (corpus §A.3). */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Raconte à voix haute',
  frSub: 'Le livre, dit aujourd’hui',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-aujourdhui',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la forme', v: 'eut ou fut, et un participe', say: fr(E(1609)),
      detail: { title: 'La forme', body: 'Avoir ou être au passé simple, le participe, les accords habituels. EN: simple-past auxiliary plus participle.', say: fr(E(1622)) } },
    { k: 'les faux amis', v: 'eut + nom ; fut + passif', say: fr(E(1628)),
      detail: { title: 'Les faux amis', body: 'Eut sept ans : passé simple d’avoir. Fut envoyée : passif. EN: not every eut or fut is one.', say: fr(E(1650)) } },
    { k: 'les tournures', v: 'quand, dès que, à peine… que, bientôt', say: fr(E(1680)),
      detail: { title: 'Les tournures', body: 'Une charnière, à peine… que, ou une phrase seule avec bientôt. EN: hinges, à peine… que, bientôt.', say: fr(E(1696)) } },
    { k: 'à côté', v: 'avait fini : loin ou souvent', say: fr(E(1712)),
      detail: { title: 'Le plus-que-parfait', body: 'Une habitude, un décor, un fait lointain. EN: a habit, a background, a far-back fact.', say: fr(E(1718)) } },
    { k: 'le rythme', v: 'des paliers, sans temps mort', say: fr(E(1728)),
      detail: { title: 'Le rythme', body: 'Chaque étape bouclée avant la suivante. EN: each step closed before the next.', say: fr(E(1733)) } },
    { k: 'aujourd’hui', v: 'quand il a fini ; après avoir fini', say: fr(E(1745)),
      detail: { title: 'Le dire aujourd’hui', body: 'Passé composé, après avoir, une fois que, venir de ; le surcomposé s’entend, ne s’écrit pas. EN: modern routes.', say: fr(E(1746)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'auxiliaire'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu reconnais le passé antérieur avec avoir et avec être, dans les pronominaux, et tu ne le confonds plus avec un passif ou avec le passé simple d’avoir. Tu suis l’enchaînement qu’il marque après une charnière, après à peine… que et dans une phrase seule avec bientôt ; tu le sépares du plus-que-parfait et tu dis ce qu’il fait au rythme d’une page. Tu le racontes aujourd’hui, et tu reconnais le surcomposé à l’oreille. Le piège qui reste : la main pressée qui change aussi le plus-que-parfait, ou qui garde la forme du livre avec un auxiliaire. Avant de lire ton prochain roman, prends une page, entoure chaque eut et chaque fut, regarde ce qui les suit, et écris au-dessus la version d’aujourd’hui. EN: Circle every eut and fut on a novel page, check what follows, and write today’s version above it.",
  stats: [
    { k: 'La forme', v: 'eut ou fut et un participe' },
    { k: 'Les tournures', v: 'charnière, à peine… que, bientôt' },
    { k: 'À côté', v: 'le plus-que-parfait, loin ou souvent' },
    { k: 'Aujourd’hui', v: 'passé composé, après avoir, venir de' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight. Every question tests RECOGNITION:
 *  which form, which order, which effect, what you would say today. No
 *  option set supplies a passé antérieur to complete a gap, and no typed
 *  answer contains one or a surcomposé. `fold()` strips accents, commas,
 *  apostrophes and hyphens, so every typed answer turns on the auxiliary,
 *  the participle or the words, never on an accent. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas dans cette version d’aujourd’hui. Écris la phrase correcte. EN: One form is wrong in this modern retelling; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const RETELL = 'Dis-la en français d’aujourd’hui.';
const ECRIT = 'Écris-la comme dans un texte soigné.';

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a12-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-reperer', label: 'Repérer', targets: ['lu-comme-pqp'],
      questions: [
        mc('« À peine eut-elle refermé la porte que le téléphone sonna. » Entre les deux actions…', ['presque rien', 'un long moment', 'toute une nuit'], 0, 'À peine… que : la seconde tombe sur la première. EN: almost no time.', 'a1-scene'),
        mc('Le passé antérieur se forme avec…', ['eut ou fut et un participe', 'avait ou était et un participe', 'aura ou sera et un participe'], 0, 'Un auxiliaire au passé simple. EN: a simple-past auxiliary.', 'a2-cartes'),
        mc('« Quand il eut sept ans, on l’envoya chez son oncle. » Eut sept ans est…', ['le passé simple d’avoir', 'un passé antérieur'], 0, 'Un nombre suit, pas un participe. EN: no participle.', 'a2-cartes'),
        mc('« Lorsqu’ils eurent traversé le pont » : quelle personne ?', ['ils ou elles', 'il ou elle', 'nous'], 0, 'Eurent : le pluriel. EN: plural.', 'a2-table'),
        tI(`Une phrase de nouvelle. ${RETELL}`, fr(E(1605)), fr(E(1606)), 'Eut lu, reconnut : deux passés composés aujourd’hui. EN: a lu, a reconnu.', 'a1-lecture'),
        tI('Donne l’infinitif du verbe au participe.', fr(E(1622)), 'sortir', 'Fut sortie : sortir, avec être. EN: sortir.', 'a2-reperer'),
        eS('Quand nous avons arrivé au village, on nous a conduits chez le maire.', fr(E(1625)), 'Arriver prend être : nous sommes arrivés. EN: être.', 'a2-table', ['Quand nous sommes arrivées au village, on nous a conduites chez le maire.']),
        lC('Écoute. Qu’est-ce qui arrive juste après ?', fr(E(1616)), ['l’orage éclate', 'on défait les valises', 'on repart'], 0, 'Les valises à peine posées, l’orage. EN: the storm.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r2-pronominal', label: 'Le pronominal', targets: ['accord-pronominal'],
      questions: [
        mc('« Il se fut assis » : pourquoi fut ?', ['les pronominaux prennent être', 'fut marque un passif', 'pour un passé lointain'], 0, 'Le pronom impose être. EN: pronominals take être.', 'a3-cartes'),
        mc('« Lorsqu’ils se furent dit adieu » : pourquoi dit reste-t-il invariable ?', ['se veut dire l’un à l’autre', 'le passé antérieur ne s’accorde jamais'], 0, 'On se dit adieu l’un à l’autre : pas d’accord. EN: se is indirect.', 'a3-cartes'),
        mc('« Quand il les eut relues » : relues s’accorde avec…', ['les, c’est-à-dire les lettres', 'il', 'rien'], 0, 'Le complément placé avant. EN: the preceding object.', 'a3-erreurs'),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1632)), fr(E(1633)), 'Se fut assis : il s’est assis. EN: s’est assis.', 'a3-construire'),
        tI(`Une phrase de récit. ${RETELL}`, fr(E(1642)), fr(E(1643)), 'Nous nous fûmes reposés : nous nous sommes reposés. EN: sommes reposés.', 'a3-construire', ['Quand nous nous sommes reposées, nous avons repris la route.']),
        eS('Dès qu’elles se sont installé, la conférence a commencé.', fr(E(1635)), 'Accord avec elles : installées. EN: installées.', 'a3-erreurs'),
        eS('Quand il s’a assis, le notaire a ouvert le dossier.', fr(E(1633)), 'Un pronominal garde être. EN: s’est assis.', 'a3-erreurs'),
        lC('Écoute. Que fait la salle quand elle s’est levée ?', fr(E(1640)), ['elle se tait', 'elle applaudit', 'elle sort'], 0, 'Se tut : se taire. EN: it falls silent.', 'a3-exemples'),
      ],
    },
    {
      id: 'r3-passif', label: 'Fut + participe', targets: ['passif-confondu'],
      questions: [
        mc('« Quand la lettre fut envoyée » : c’est…', ['un passif au passé simple', 'un passé antérieur'], 0, 'Envoyer est transitif. EN: a passive.', 'a4-cartes'),
        mc('« Quand le courrier fut parti » : c’est…', ['un passé antérieur', 'un passif'], 0, 'Partir prend être. EN: a passé antérieur.', 'a4-cartes'),
        mc('Pour trancher entre les deux, le plus sûr est de…', ['transposer au passé composé', 'compter les syllabes', 'chercher un adjectif'], 0, 'Est parti, ou a été envoyée. EN: transpose.', 'a4-hacks'),
        mc('« Quand les travaux eurent été terminés » : quelle voix ?', ['passive', 'active'], 0, 'Eut été et un participe : le passif. EN: passive.', 'a4-cartes'),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1650)), fr(E(1651)), 'Fut envoyée : a été envoyée. EN: keep été.', 'a4-piege'),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1656)), fr(E(1657)), 'Tomber prend être : est tombée. EN: est tombée.', 'a4-piege'),
        eS('Quand le courrier a été parti, elle a fermé le bureau.', fr(E(1649)), 'Partir n’a pas de passif : est parti. EN: est parti.', 'a4-piege'),
        lC('Écoute. Qui a fermé le pont ?', fr(E(1652)), ['la police', 'les ouvriers', 'personne'], 0, 'Par la police : l’agent. EN: the police.', 'a4-trier'),
      ],
    },
    {
      id: 'r4-charniere', label: 'La charnière', targets: ['charniere-perdue'],
      questions: [
        mc('Après une charnière au passé antérieur, la principale est d’ordinaire au…', ['passé simple', 'plus-que-parfait', 'présent'], 0, 'La charnière ferme, le passé simple relance. EN: the passé simple.', 'a5-construire'),
        mc('« Après qu’il eut fini » : quel mode ?', ['l’indicatif', 'le subjonctif'], 0, 'Eut, sans accent : l’indicatif. EN: indicative.', 'a5-exemples'),
        mc('Lorsque, à côté de quand, est…', ['plus écrit', 'plus familier', 'd’un autre sens'], 0, 'Le jumeau écrit de quand. EN: more written.', 'a5-table'),
        mc('« Après que le capitaine eut donné le signal, le bateau quitta le quai. » D’abord…', ['le signal', 'le départ'], 0, 'Le passé antérieur porte l’étape bouclée. EN: the signal.', 'a5-lecture'),
        tI(`Une phrase de récit. ${RETELL}`, fr(E(1664)), fr(E(1665)), 'Aussitôt qu’il a reçu, il a réservé. EN: two passés composés.', 'a5-construire', ['Dès qu’il a reçu la réponse, il a réservé sa place.']),
        tI(`Une phrase de récit. ${RETELL}`, fr(E(1672)), fr(E(1673)), 'Dès que nous avons accosté, les enfants ont sauté. EN: avons accosté.', 'a5-construire'),
        eS('Une fois qu’elle a payé la traversée, elle a monté sur le pont du traversier.', fr(E(1667)), 'Monter sans complément prend être : elle est montée. EN: être.', 'a5-table'),
        lC('Écoute. Que fait-elle, la traversée payée ?', fr(E(1666)), ['elle monte sur le pont', 'elle descend du bateau', 'elle attend sur le quai'], 0, 'Monta sur le pont. EN: she goes up on deck.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r5-apeine', label: 'À peine… que', targets: ['apeine-mal-lu'],
      questions: [
        mc('Dans « à peine… que », que introduit…', ['la seconde action', 'une proposition relative', 'une comparaison'], 0, 'Pas d’antécédent : que lance la suite. EN: the second action.', 'a6-cartes'),
        mc('« À peine le train fut-il parti » : il reprend…', ['le train', 'le voyageur'], 0, 'Le nom, puis le pronom inversé. EN: le train.', 'a6-cartes'),
        mc('« Elle n’eut pas plus tôt signé qu’elle regretta. » Le sens est…', ['elle regrette juste après avoir signé', 'elle préfère signer plutôt que réfléchir'], 0, 'Pas plus tôt : le temps. EN: right after signing.', 'a6-cartes'),
        mc('« Il eut à peine fini sa phrase qu’on l’interrompit. » Ici, à peine…', ['suit l’auxiliaire, sans inversion', 'ouvre une question'], 0, 'Même sens, autre place. EN: after the auxiliary.', 'a6-cartes'),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1680)), fr(E(1681)), 'Venir à peine de, puis quand. EN: il venait à peine de.', 'a6-piege', ['Il venait d’ouvrir la porte quand le chien s’est jeté sur lui.']),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1690)), fr(E(1691)), 'Nous venions à peine de sortir. EN: venions à peine de.', 'a6-reperer', ['Nous venions de sortir quand l’alarme a retenti.']),
        eS('Il venait à peine de finir sa phrase quand on l’a interrompit.', fr(E(1687)), 'Interrompit est le passé simple du livre ; avec avoir, le participe : interrompu. EN: interrompu.', 'a6-piege'),
        lC('Écoute. Qu’est-ce qui vient d’abord ?', fr(E(1682)), ['le départ du train', 'la pluie'], 0, 'Le train part, la pluie suit. EN: the train.', 'a6-reperer'),
      ],
    },
    {
      id: 'r6-bientot', label: 'La phrase seule', targets: ['bientot-mal-lu'],
      questions: [
        mc('« Il eut bientôt rangé la cuisine. » La phrase dit…', ['que c’est fait, et vite', 'qu’il commence à ranger', 'qu’il range chaque jour'], 0, 'Le résultat, atteint vite. EN: done, quickly.', 'a7-cartes'),
        mc('Sans charnière, le passé antérieur suit souvent…', ['bientôt, vite, en un instant', 'toujours, souvent, parfois'], 0, 'Un délai court. EN: a short span.', 'a7-exemples'),
        mc('« La maison fut de nouveau au sec. » C’est…', ['le passé simple d’être', 'un passé antérieur'], 0, 'Fut et un adjectif. EN: no participle.', 'a7-texte'),
        mc('Il eut bientôt fini, il finit bientôt : lequel dit que c’est déjà fait ?', ['il eut bientôt fini', 'il finit bientôt'], 0, 'Eut fini : le résultat. EN: the result.', 'a7-cartes'),
        tI(`Une phrase de récit. ${RETELL}`, fr(E(1698)), fr(E(1699)), 'En un instant, ont maîtrisé. EN: ont maîtrisé.', 'a7-construire'),
        tI(`Une phrase de récit. ${RETELL}`, fr(E(1706)), fr(E(1707)), 'Ils ont vidé la grange. EN: ont vidé.', 'a7-construire'),
        eS('Les invités sont parti peu après.', fr(E(1705)), 'Partir prend être, accord au pluriel : partis. EN: partis.', 'a7-cartes', ['Les invitées sont parties peu après.']),
        lC('Écoute. En combien de temps vident-ils la grange ?', fr(E(1706)), ['moins d’une heure', 'une journée', 'une semaine'], 0, 'En moins d’une heure. EN: under an hour.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r7-pqp', label: 'Deux temps', targets: ['pqp-confondu'],
      questions: [
        mc('« Chaque soir, dès qu’il avait soupé, il sortait fumer. » Combien de fois ?', ['tous les soirs', 'une seule fois'], 0, 'Plus-que-parfait et imparfait : l’habitude. EN: every evening.', 'a8-cartes'),
        mc('« Ce soir-là, dès qu’il eut soupé, il sortit. » Combien de fois ?', ['une seule fois', 'tous les soirs'], 0, 'Passé antérieur et passé simple : une fois. EN: once.', 'a8-cartes'),
        mc('Pour un fait loin en arrière, sans enchaînement, l’auteur choisit…', ['le plus-que-parfait', 'le passé antérieur'], 0, 'Le plus-que-parfait garde la distance. EN: the plus-que-parfait.', 'a8-table'),
        mc('« Quand les aunes eurent disparu, il restait les souches. » Restait dit…', ['la situation laissée', 'une action nouvelle', 'une habitude'], 0, 'L’étape bouclée laisse une situation. EN: the situation left.', 'a8-texte'),
        tI(`Une phrase de nouvelle. ${RETELL}`, fr(E(1713)), fr(E(1714)), 'Dès qu’il a soupé, il est sorti. EN: est sorti.', 'a8-trier', ['Ce soir-là, juste après le souper, il est sorti sur la galerie.']),
        tI(`Une phrase de nouvelle. ${RETELL}`, fr(E(1720)), fr(E(1721)), 'Elle venait à peine de quitter la ville. EN: venait à peine de.', 'a8-erreurs', ['Elle venait de quitter la ville quand la lettre est arrivée.']),
        eS('Quand la lettre est arrivée, elle a quitté la ville depuis un mois.', fr(E(1719)), 'Le plus-que-parfait reste : avait quitté. EN: keep the pluperfect.', 'a8-erreurs'),
        lC('Écoute. Est-ce une habitude ?', fr(E(1716)), ['oui', 'non, une seule fois'], 0, 'Avait fini, passait : chaque jour. EN: yes.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r8-rythme', label: 'Le rythme', targets: ['rythme-ignore'],
      questions: [
        mc('Une série de passés antérieurs fait avancer le récit…', ['par paliers, sans temps mort', 'lentement, par descriptions'], 0, 'Chaque étape bouclée avant la suivante. EN: in stages.', 'a9-cartes'),
        mc('« Elle ferma les volets et alluma la lampe. » Sans passé antérieur, l’effet est…', ['plus abrupt', 'plus lié', 'plus lent'], 0, 'Deux gestes juxtaposés. EN: more abrupt.', 'a9-trier'),
        mc('« Quand ils eurent mangé, bu et chanté » : le passé antérieur…', ['compresse toute une soirée', 'décrit un décor'], 0, 'Trois participes sous un seul eurent. EN: a whole evening.', 'a9-cartes'),
        mc('Chez Flaubert, « quand il les eut tous occis » sert de…', ['pivot entre deux rafales', 'pause descriptive'], 0, 'Trois mots pour la tuerie, puis la liste repart. EN: a pivot.', 'a9-texte'),
        mc('Pour ralentir et décrire, un auteur préfère…', ['l’imparfait', 'le passé antérieur'], 0, 'Le décor dure. EN: the imparfait.', 'a9-trier'),
        tI('Donne l’infinitif d’occis.', 'quand il les eut tous occis', 'occire', 'Occire : tuer, verbe ancien. EN: occire.', 'a9-texte'),
        tI(`Une phrase de récit. ${RETELL}`, fr(E(1735)), fr(E(1736)), 'Dès qu’il a posé le pied, il a cherché. EN: a posé, a cherché.', 'a9-trier'),
        lC('Écoute. Les deux gestes sont-ils liés par une charnière ?', fr(E(1729)), ['non, ils sont juxtaposés', 'oui, par quand'], 0, 'Ferma, alluma, sans quand. EN: no.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r9-aujourdhui', label: 'Aujourd’hui', targets: ['transposition-fausse'],
      questions: [
        tI(`Une phrase de récit. ${RETELL}`, fr(E(1744)), fr(E(1745)), 'Quand elle a terminé, elle l’a envoyé. EN: a terminé.', 'a10-table', [fr(E(1746))]),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1747)), fr(E(1748)), 'Il venait à peine d’arriver quand… EN: venait à peine de.', 'a10-table', ['Il venait d’arriver quand on l’a appelé au téléphone.', 'À peine était-il arrivé qu’on l’a appelé au téléphone.']),
        tI(`Une phrase de récit. ${RETELL}`, fr(E(1749)), fr(E(1750)), 'Ils ont vite oublié. EN: ont vite oublié.', 'a10-construire'),
        tI(`Une phrase de récit. ${RETELL}`, fr(E(1751)), fr(E(1752)), 'Lut : lire, a lu. EN: a lu.', 'a10-construire', ['Après la délibération du jury, la présidente a lu les résultats.']),
        mc('« Quand il eut fini, il sortit. » Quelle version d’aujourd’hui garde l’ordre ?', ['après avoir fini, il est sorti', 'il finissait quand il est sorti'], 0, 'Après avoir : fini d’abord. EN: après avoir.', 'a10-table'),
        eS('Après avoir terminé son rapport, elle l’a envoyée à la direction.', fr(E(1746)), 'Le rapport, masculin : envoyé. EN: envoyé.', 'a10-piege'),
        eS('Une fois que le jury a délibéré, la présidente a lut les résultats.', fr(E(1752)), 'Le participe de lire est lu. EN: lu.', 'a10-piege'),
        lC('Écoute. Que fait-elle, son rapport terminé ?', fr(E(1744)), ['elle l’envoie à la direction', 'elle le relit', 'elle le jette'], 0, 'L’envoya à la direction. EN: she sends it.', 'a10-lecture'),
      ],
    },
    {
      id: 'r10-surcompose', label: 'Le surcomposé', targets: ['surcompose-prescrit'],
      questions: [
        mc('« Quand j’ai eu fini mon service » : ce temps s’entend surtout…', ['à l’oral', 'dans les romans', 'dans les textes de loi'], 0, 'Dans la conversation. EN: in speech.', 'a11-cartes'),
        mc('« J’en ai eu vu », sans charnière, est…', ['un usage régional', 'la norme écrite'], 0, 'Surtout dans le sud de la France et en Suisse romande. EN: regional.', 'a11-cartes'),
        mc('À l’oral, le surcomposé correspond au…', ['passé antérieur', 'futur antérieur', 'subjonctif passé'], 0, 'La même action bouclée juste avant. EN: the passé antérieur.', 'a11-cartes'),
        mc('« Quand j’ai eu fini » s’écrit, dans un texte soigné…', ['quand j’ai fini', 'quand j’aurai fini', 'quand je finis'], 0, 'Le passé composé suffit. EN: quand j’ai fini.', 'a11-trier'),
        tI(`Une phrase entendue. ${ECRIT}`, fr(E(1762)), fr(E(1763)), 'Dès qu’elle a payé : un seul auxiliaire. EN: a payé.', 'a11-trier'),
        tI(`Une phrase entendue. ${ECRIT}`, fr(E(1760)), fr(E(1761)), 'Quand j’ai fini : un seul auxiliaire. EN: ai fini.', 'a11-trier', ['Quand j’ai fini mon service, je suis rentrée me coucher.']),
        eS('Dès qu’elle a payée, elle est partie.', fr(E(1763)), 'Avec avoir et sans complément placé avant : payé. EN: payé.', 'a11-cartes'),
        lC('Écoute. D’où vient sans doute cette façon de parler ?', fr(E(1766)), ['du sud de la France ou de Suisse romande', 'de la langue des romans'], 0, 'Sans charnière : régional. EN: regional.', 'a11-ecoute'),
      ],
    },
    {
      id: 'r11-renfort', label: 'Le B2 en renfort', targets: ['recyclage-b2'],
      questions: [
        mc(`${Cap(PS_REF)} : « Il entra et s’assit. » Ces verbes sont au…`, ['passé simple', 'passé antérieur'], 0, `« ${B208_REFRAME} » EN: ${B208_REFRAME_EN}`, 'a1-rappel'),
        mc(`${Cap(TEMPS_REF)} : « Dès qu’il eut fini son repas, il sortit. » Aujourd’hui…`, ['dès qu’il a fini son repas, il est sorti', 'dès qu’il finissait son repas, il sortait'], 0, 'Une seule fois : deux passés composés, l’ordre reste dans dès que. EN: once, two passés composés.', 'a1-rappel'),
        mc(`${Cap(SUBJ_REF)} : eût fini, avec l’accent, est…`, ['un subjonctif', 'un passé antérieur'], 0, `« ${B209_REFRAME} » EN: ${B209_REFRAME_EN}`, 'a1-rappel'),
        mc(`${Cap(INVERSION_REF)} : « À peine est-il arrivé que le téléphone a sonné. » L’inversion change…`, ['la tenue de la phrase', 'son sens'], 0, `« ${B121_REFRAME} » EN: ${B121_REFRAME_EN}`, 'a1-rappel'),
        mc(`${Cap(PQP_REF)} : « elle avait quitté la ville depuis un mois » dit…`, ['un fait accompli, loin en arrière', 'une étape juste avant la suivante'], 0, `« ${B201_REFRAME} » EN: ${B201_REFRAME_EN}`, 'a8-cartes'),
        mc('Lecture, comme à l’examen. Dans « Les deux soirs », pourquoi la grand-mère reste-t-elle la bouche ouverte ?', ['le rituel de trente ans est rompu', 'son mari est tombé malade', 'elle a perdu la bague'], 0, 'Le soir des quatre-vingts ans, rien ne se passe comme d’habitude. EN: the ritual breaks.', 'a8-lecture'),
        mc('Lecture, comme à l’examen. Dans « La traversée », que signale le foulard bleu ?', ['la tante qui attend Aline', 'un signal du capitaine', 'une passagère perdue'], 0, 'La silhouette de sa tante, qui agitait un foulard bleu. EN: her aunt.', 'a5-lecture'),
        lC('Écoute cette phrase de Flaubert. Que fait Julien juste après l’arrivée ?', 'Quand ils furent arrivés dans la cahute, Julien ferma la porte ; et il le vit siégeant sur l’escabeau.', ['il ferme la porte', 'il allume un feu', 'il repart'], 0, 'Furent arrivés, puis ferma. EN: he closes the door.', 'a2-texte'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.08 does. */
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
spreadSlots(A12_QUIZ);

const A12_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a12-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'la forme du passé antérieur', back: 'un auxiliaire au passé simple et un participe', say: fr(E(1609)) },
    { front: 'eut suivi d’un nom', back: 'le passé simple d’avoir, pas un passé antérieur', say: fr(E(1629)) },
    { front: 'fut et un verbe transitif', back: 'un passif au passé simple', say: fr(E(1651)) },
    { front: 'le pronominal', back: 'être, et l’accord le plus souvent avec le sujet', say: fr(E(1633)) },
    { front: 'à peine… que', back: 'la seconde action tombe sur la première', say: fr(E(1681)) },
    { front: 'la phrase seule avec bientôt', back: 'un résultat atteint vite', say: fr(E(1697)) },
    { front: 'le plus-que-parfait à côté', back: 'une habitude, un décor, un fait lointain', say: fr(E(1712)) },
    { front: 'le dire aujourd’hui', back: 'quand il a fini, après avoir fini, il venait de finir', say: fr(E(1746)) },
    { front: 'le surcomposé', back: 'le pendant parlé, à reconnaître et à ne pas écrire', say: fr(E(1761)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Le relais',
  body: `${REFRAME} Tu as repris le passé simple de ${PS_REF}, l’antériorité de ${PQP_REF} et de ${TEMPS_REF}, le eut et le eût de ${SUBJ_REF} et l’inversion de ${INVERSION_REF}, et tu lis maintenant le passé antérieur partout où il vit : ses formes, ses tournures, son rythme, sa traduction d’aujourd’hui, et le surcomposé qui lui répond à l’oral. La suite, au C1 : la concordance des temps dans les textes littéraires, à reconnaître elle aussi. EN: Next in C1: the sequence of tenses in literary texts, again for recognition.`,
  points: [
    'Eut ou fut et un participe, mais pas tout eut ni tout fut.',
    'Une charnière, à peine… que, ou bientôt dans une phrase seule.',
    'Le plus-que-parfait recule ; le passé antérieur enchaîne.',
    'Aujourd’hui : quand il a fini, après avoir fini, il venait de finir.',
  ],
  audio: AUDIO,
  say: REFRAME,
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Raconte-le au club',
    opener: {
      line: 'Une page te reste en tête, et le club veut savoir : ici tu la racontes avec tes mots, puis tu passes l’examen. EN: A page stays with you and the club wants to know: here you retell it in your own words, then sit the exam.',
      imageRef: 'lessons/passe-anterieur/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as raconté une page au passé composé, dit ce que le passé antérieur fait à son rythme, et passé l’examen : quatre-vingt-huit questions, onze rounds. EN: You retold a page, said what the passé antérieur does to its pace, and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r4-charniere', 'a12-quiz/r8-rythme', 'a12-review'],
  },
  sections: [
    A12_LECTURE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`. Recognition only:
 *  a coach asks for the form, the order or today's version, never for a
 *  passé antérieur.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-reperer', title: 'Passé antérieur ou pas', format: 'sort' as const, coach: 'Deux piles : un auxiliaire au passé simple suivi d’un participe, ou autre chose. EN: sort by what follows eut or fut.', buckets: ['un passé antérieur', 'autre chose'], items: [E(1600), E(1616), E(1622), E(1628), E(1704), E(1652)], audio: AUDIO },
  { id: 'd-pronominal', title: 'Le pronominal, aujourd’hui', format: 'mcq' as const, coach: 'Transpose au passé composé pour vérifier l’auxiliaire et l’accord. EN: transpose to check.', q: '« Quand il se fut assis… » Aujourd’hui, il…', opts: ['s’est assis', 's’a assis'], correct: 0, why: 'Un pronominal garde être. EN: être.', items: [E(1633), E(1635), E(1637), E(1639), E(1641), E(1643)], audio: AUDIO },
  { id: 'd-passif', title: 'Passé antérieur ou passif', format: 'sort' as const, coach: 'Deux piles : un verbe qui prend être, ou un verbe transitif au passif. EN: être verb or passive.', buckets: ['passé antérieur', 'passif'], items: [E(1648), E(1656), E(1622), E(1650), E(1652), E(1658)], audio: AUDIO },
  { id: 'd-charniere', title: 'La charnière, aujourd’hui', format: 'flashcard' as const, coach: 'Lis chaque version d’aujourd’hui à voix haute : la conjonction garde l’ordre. EN: read each modern version aloud.', items: [E(1665), E(1667), E(1669), E(1671), E(1673), E(1675)], audio: AUDIO },
  { id: 'd-apeine', title: 'À peine… que', format: 'mcq' as const, coach: 'À peine mesure le temps : la seconde action suit aussitôt. EN: à peine measures time.', q: '« À peine eut-il ouvert la porte que le chien bondit. » Entre les deux…', opts: ['presque rien', 'un long moment'], correct: 0, why: 'La seconde action tombe sur la première. EN: almost no time.', items: [E(1681), E(1683), E(1685), E(1687), E(1689), E(1691)], audio: AUDIO },
  { id: 'd-bientot', title: 'Le résultat, et vite', format: 'flashcard' as const, coach: 'Lis chaque phrase d’aujourd’hui : le résultat est atteint, et vite. EN: read each one aloud.', items: [E(1697), E(1699), E(1701), E(1703), E(1705), E(1707)], audio: AUDIO },
  { id: 'd-pqp', title: 'Souvent, ou une fois', format: 'sort' as const, coach: 'Deux piles : une habitude ou un fait lointain, ou une étape juste avant la suivante. EN: habit or once.', buckets: ['loin ou souvent', 'une fois, juste avant'], items: [E(1712), E(1716), CL(2573), E(1713), E(1715), E(1720)], audio: AUDIO },
  { id: 'd-rythme', title: 'Paliers ou coupures', format: 'mcq' as const, coach: 'Le passé antérieur boucle et enchaîne ; deux passés simples juxtaposés coupent plus sec. EN: staged or abrupt.', q: '« Elle ferma les volets et alluma la lampe. » Sans passé antérieur, l’effet est…', opts: ['plus abrupt', 'plus lié'], correct: 0, why: 'Deux gestes côte à côte. EN: more abrupt.', items: [E(1728), E(1729), E(1731), E(1733), E(1735), E(1739)], audio: AUDIO },
  { id: 'd-aujourdhui', title: 'Le dire aujourd’hui', format: 'flashcard' as const, coach: 'Lis chaque phrase d’aujourd’hui : un seul temps a changé, le reste est resté. EN: only one tense changed.', items: [E(1745), E(1746), E(1748), E(1750), E(1752), E(1782)], audio: AUDIO },
  { id: 'd-surcompose', title: 'Entendu, puis écrit', format: 'mcq' as const, coach: 'Le surcomposé s’entend ; à l’écrit soigné, le passé composé suffit. EN: heard, not written.', q: '« Quand j’ai eu fini » s’entend surtout…', opts: ['à l’oral', 'dans les romans'], correct: 0, why: 'Dans la conversation. EN: in speech.', items: [E(1761), E(1763), E(1765), E(1767), E(1771), E(1768)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B2 en renfort', format: 'flashcard' as const, coach: 'Six cartes du B2 et du B1 : dis pour chacune ce que fait le temps ou la tournure. EN: say what each one does.', items: [LIT(1127), CL(2575), CL(2581), LIT(1286), LS(1167), LS(1168)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'lu-comme-pqp', description: 'Reads the passé antérieur as a distant plus-que-parfait, or takes eut + a noun for one, or loses the person of eûmes and furent.', detectOn: ['a1-scene', 'a2-reperer', 'a2-check', 'a12-mission'], drill: 'd-reperer', retest: 'd-reperer' },
  { id: 'accord-pronominal', description: 'Retells a pronominal passé antérieur with avoir, or misses the agreement with the subject or with an object placed before.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check', 'a12-mission'], drill: 'd-pronominal', retest: 'd-pronominal' },
  { id: 'passif-confondu', description: 'Takes a passive in the passé simple (fut envoyée) for a passé antérieur, or the reverse, or drops été when retelling a passive.', detectOn: ['a4-trier', 'a4-piege', 'a4-check', 'a12-mission'], drill: 'd-passif', retest: 'd-passif' },
  { id: 'charniere-perdue', description: 'Loses the order a time hinge sets, or retells it with an imparfait, or reads après qu’il eut as a subjunctive.', detectOn: ['a5-construire', 'a5-ecoute', 'a5-check'], drill: 'd-charniere', retest: 'd-charniere' },
  { id: 'apeine-mal-lu', description: 'Reads à peine… que as a degree (a little) or a relative clause, puts a long gap between the actions, or loses a nominal subject.', detectOn: ['a6-reperer', 'a6-piege', 'a6-check', 'a12-mission'], drill: 'd-apeine', retest: 'd-apeine' },
  { id: 'bientot-mal-lu', description: 'Reads a main-clause passé antérieur with bientôt as a beginning or a habit instead of a result reached quickly.', detectOn: ['a7-construire', 'a7-ecoute', 'a7-check', 'a12-mission'], drill: 'd-bientot', retest: 'd-bientot' },
  { id: 'pqp-confondu', description: 'Confuses the plus-que-parfait of habit or distance with the passé antérieur of a single step, or changes the plus-que-parfait when retelling.', detectOn: ['a8-trier', 'a8-erreurs', 'a8-check', 'a12-mission'], drill: 'd-pqp', retest: 'd-pqp' },
  { id: 'rythme-ignore', description: 'Reads the passé antérieur for its facts only and cannot say what it does to the pace, or what its absence does.', detectOn: ['a9-trier', 'a9-ecoute', 'a9-check', 'a12-mission'], drill: 'd-rythme', retest: 'd-rythme' },
  { id: 'transposition-fausse', description: 'Retells with the book form kept, an invented agreement, a wrong modern route, or a changed plus-que-parfait.', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-aujourdhui', retest: 'd-aujourdhui' },
  { id: 'surcompose-prescrit', description: 'Does not recognise the surcomposé, writes it in careful prose, or calls its spoken and regional uses wrong.', detectOn: ['a11-trier', 'a11-ecoute', 'a11-check', 'a12-mission'], drill: 'd-surcompose', retest: 'd-surcompose' },
  { id: 'recyclage-b2', description: 'Loses a B1 or B2 point the lesson sits on: the passé simple, dès que with a compound tense, eut against eût, the à peine inversion, the plus-que-parfait.', detectOn: ['a1-rappel', 'a8-cartes', 'a12-mission'], drill: 'd-recyclage', retest: 'd-recyclage' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names a position. As b2.08 does. */
function spreadMissions(sections: LessonSection[], drills: LessonDrill[]): void {
  const OPT_KEYS = ['opts', 'options', 'choices', 'answers'];
  const used: Record<number, number[]> = {};
  let last = -1, run = 0;
  const walk = (n: any): void => {
    if (!n || typeof n !== 'object') return;
    if (Array.isArray(n)) { n.forEach(walk); return; }
    if (typeof n.correct === 'number') {
      const key = OPT_KEYS.find((k) => Array.isArray(n[k]));
      if (key) {
        const opts: unknown[] = n[key];
        const k = opts.length;
        const u = (used[k] ??= new Array(k).fill(0));
        const order = [...Array(k).keys()].sort((a, b) => u[a] - u[b] || a - b);
        const target = order.find((t) => !(t === last && run >= 2)) ?? order[0];
        const shift = (target - n.correct + k) % k;
        n[key] = opts.map((_, i) => opts[(i - shift + k) % k]);
        n.correct = target;
        u[target]++;
        run = target === last ? run + 1 : 1;
        last = target;
      }
    }
    Object.values(n).forEach(walk);
  };
  for (const s of sections) if (s.type !== 'quiz') walk(s);
  for (const d of drills) walk(d);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS (layer deep: teach and table only). Every sheet is
 *  reached from at least one mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-formes', 'Les formes', ['avoir et être', 'les personnes', 'les pronominaux', 'fut et un participe'], [
    teach('sheet-formes-teach', 'Un auxiliaire au passé simple, un participe',
      `${REFRAME} Le passé antérieur se forme avec avoir ou être au passé simple (eus, eut, eûmes, eûtes, eurent ; fus, fut, fûmes, fûtes, furent) et le participe passé. L’auxiliaire est celui du passé composé : être pour partir, arriver, tomber, sortir, venir et les pronominaux. Les accords sont ceux du passé composé. Deux faux amis : eut suivi d’un nom (quand il eut sept ans) est le passé simple d’avoir ; fut suivi du participe d’un verbe transitif (la lettre fut envoyée) est un passif au passé simple. EN: ${REFRAME_EN}`),
    table('sheet-formes-table', 'Les personnes, à reconnaître', ['Personne', 'Avec avoir', 'Avec être'], [
      ['je', 'j’eus compris', 'je fus parti, partie'],
      ['tu (très rare)', 'tu eus compris', 'tu fus parti, partie'],
      ['il, elle', 'il eut compris', 'elle fut partie'],
      ['nous', 'nous eûmes compris', 'nous fûmes partis, parties'],
      ['vous (très rare)', 'vous eûtes compris', 'vous fûtes partis, parties'],
      ['ils, elles', 'ils eurent compris', 'elles furent parties'],
    ]),
    table('sheet-formes-lectures', 'Eut, fut : quatre lectures', ['Tu lis', 'C’est', 'Aujourd’hui'], [
      ['quand il eut fini', 'passé antérieur, avoir', 'quand il a fini'],
      ['quand il fut parti', 'passé antérieur, être', 'quand il est parti'],
      ['quand il se fut assis', 'passé antérieur, pronominal', 'quand il s’est assis'],
      ['quand la lettre fut envoyée', 'passif au passé simple', 'quand la lettre a été envoyée'],
      ['quand les travaux eurent été terminés', 'passif au passé antérieur', 'une fois les travaux terminés'],
      ['quand il eut sept ans', 'passé simple d’avoir', 'quand il a eu sept ans'],
    ]),
  ]),
  sheet('sheet-enchainement', 'Les tournures', ['les charnières', 'à peine… que', 'la phrase seule'], [
    teach('sheet-enchainement-teach', 'Trois façons d’enchaîner',
      'Après une charnière (quand, lorsque, dès que, aussitôt que, après que, une fois que), la subordonnée au passé antérieur ferme une étape et la principale, au passé simple, lance la suivante ; après que garde l’indicatif (eut, sans accent), même si l’on lit souvent eût, un usage critiqué. À peine en tête entraîne l’inversion et un que qui ouvre la seconde action ; ne… pas plus tôt… que dit la même chose. Dans une phrase seule, le passé antérieur suit bientôt, vite ou en un instant et dit un résultat vite atteint. EN: hinges, à peine… que, and the main clause with bientôt.'),
    table('sheet-enchainement-charnieres', 'Les charnières', ['Charnière', 'Nuance', 'Exemple'], [
      ['quand', 'le moment', 'Quand il eut fini de parler, personne ne répondit.'],
      ['lorsque', 'le moment, plus écrit', 'Lorsque le brouillard se fut levé, on aperçut l’île.'],
      ['dès que', 'aussitôt après', 'Dès que nous eûmes accosté, les enfants sautèrent sur le quai.'],
      ['aussitôt que', 'aussitôt après, plus soutenu', 'Aussitôt qu’il eut reçu la réponse, il réserva sa place.'],
      ['après que', 'l’ordre, à l’indicatif', 'Après que le capitaine eut donné le signal, le bateau quitta le quai.'],
      ['une fois que', 'l’étape franchie', 'Une fois qu’elle eut payé la traversée, elle monta sur le pont.'],
    ]),
    table('sheet-enchainement-tournures', 'À peine et bientôt', ['Tournure', 'Ce qu’elle dit', 'Exemple'], [
      ['à peine + inversion… que', 'la seconde action tombe sur la première', 'À peine eut-il ouvert la porte que le chien se jeta sur lui.'],
      ['nom sujet repris par il', 'la même tournure', 'À peine le train fut-il parti que la pluie se mit à tomber.'],
      ['à peine après l’auxiliaire', 'sans inversion', 'Il eut à peine fini sa phrase qu’on l’interrompit.'],
      ['ne… pas plus tôt… que', 'à peine, très écrit', 'Elle n’eut pas plus tôt signé qu’elle regretta sa décision.'],
      ['bientôt, vite, en un instant', 'un résultat vite atteint', 'Il eut bientôt rangé la cuisine.'],
    ]),
  ]),
  sheet('sheet-plans', 'Deux temps, un rythme', ['plus-que-parfait ou passé antérieur', 'les effets sur le rythme'], [
    teach('sheet-plans-teach', 'Reculer ou enchaîner',
      `Le plus-que-parfait garde un fait accompli à distance : une habitude (avec l’imparfait), un décor, un fait lointain. ${Cap(PQP_REF)} disait : « ${B201_REFRAME} » Le passé antérieur boucle une seule étape juste avant la suivante. Suivi d’un passé simple, il enchaîne ; suivi d’un imparfait, il laisse une situation. Sur le rythme : une série de passés antérieurs fait avancer le récit par paliers serrés ; deux passés simples juxtaposés donnent un effet plus abrupt ; une phrase seule avec bientôt fait passer une action en une ligne. EN: ${B201_REFRAME_EN}`),
    table('sheet-plans-table', 'Sur une même page', ['Tu lis', 'Le temps', 'Ce que ça dit'], [
      ['dès qu’il avait soupé, il sortait', 'plus-que-parfait + imparfait', 'une habitude'],
      ['dès qu’il eut soupé, il sortit', 'passé antérieur + passé simple', 'une seule fois'],
      ['elle avait quitté la ville depuis un mois', 'plus-que-parfait', 'loin en arrière'],
      ['elle eut à peine quitté la ville que', 'passé antérieur', 'juste avant'],
      ['quand les aunes eurent disparu, il restait', 'passé antérieur + imparfait', 'une étape, puis une situation'],
    ]),
    table('sheet-plans-rythme', 'Les effets', ['Ce que tu vois', 'L’effet'], [
      ['une série de passés antérieurs', 'des paliers, sans temps mort'],
      ['deux passés simples juxtaposés', 'un effet plus abrupt'],
      ['plusieurs participes sous un seul auxiliaire', 'une durée compressée'],
      ['une phrase seule avec bientôt', 'une action passée en une ligne'],
      ['des imparfaits', 'le décor, le récit ralentit'],
    ]),
  ]),
  sheet('sheet-aujourdhui', 'Le dire aujourd’hui', ['les routes d’aujourd’hui', 'ce qui ne bouge pas', 'la liste de contrôle'], [
    teach('sheet-aujourdhui-teach', 'Seuls deux temps changent',
      'Pour raconter une page aujourd’hui, le passé simple et le passé antérieur passent au passé composé, ou à une tournure qui garde l’ordre : après avoir et le participe (un seul sujet), une fois et le participe, venir à peine de… quand. Dans un récit au passé composé, la conjonction porte déjà l’antériorité. L’imparfait et le plus-que-parfait ne bougent pas ; les accords restent ceux du passé composé. EN: only the two literary tenses change.'),
    table('sheet-aujourdhui-table', 'Du livre à aujourd’hui', ['Dans le livre', 'Aujourd’hui'], [
      ['quand elle eut terminé, elle l’envoya', 'quand elle a terminé, elle l’a envoyé'],
      ['quand elle eut terminé, elle l’envoya', 'après avoir terminé, elle l’a envoyé'],
      ['à peine fut-il arrivé qu’on l’appela', 'il venait à peine d’arriver quand on l’a appelé'],
      ['ils eurent vite oublié', 'ils ont vite oublié'],
      ['quand les travaux eurent été terminés', 'une fois les travaux terminés'],
      ['elle avait quitté la ville', 'elle avait quitté la ville'],
    ]),
    table('sheet-aujourdhui-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Aucun temps littéraire hors des citations', 'Relis chaque eut, fut et passé simple'],
      ['L’auxiliaire est le bon', 'Être pour partir, arriver, tomber, sortir, les pronominaux'],
      ['L’accord est le bon', 'Sujet avec être ; complément placé avant avec avoir'],
      ['Le passif garde été', 'fut envoyée : a été envoyée'],
      ['Le plus-que-parfait est resté', 'avait quitté, avaient été taillés'],
    ]),
  ]),
  sheet('sheet-surcompose', 'Le surcomposé', ['à l’oral', 'les usages régionaux', 'à l’écrit'], [
    teach('sheet-surcompose-teach', 'Le pendant parlé',
      'Le passé surcomposé ajoute un auxiliaire au passé composé : j’ai eu fini, elle a eu payé. Après quand, dès que ou une fois que, il dit l’action bouclée juste avant, comme le passé antérieur à l’écrit ; on l’entend dans la conversation, et on l’évite à l’écrit soigné. Employé sans subordonnée (j’en ai eu vu), il exprime une expérience passée : c’est un usage régional, surtout dans le sud de la France et en Suisse romande. Tu le reconnais ; tu ne le corriges pas chez ceux qui parlent, et tu écris le passé composé. EN: recognise it; write the passé composé.'),
    table('sheet-surcompose-table', 'Entendu, écrit', ['Entendu', 'Où', 'À l’écrit soigné'], [
      ['quand j’ai eu fini mon service', 'à l’oral, après une charnière', 'quand j’ai fini mon service'],
      ['dès qu’elle a eu payé', 'à l’oral, après une charnière', 'dès qu’elle a payé'],
      ['une fois qu’on a eu mangé', 'à l’oral, après une charnière', 'après le repas'],
      ['j’en ai eu vu', 'régional, sans charnière', 'j’en ai déjà vu'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

spreadMissions(SECTIONS, DRILL_LIST);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !OWN.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a flashcard drill can reach. A literary or
 *  surcomposé line has no flashcard drill, so it is never released. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-02-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural C1 speed.';
const TEXTE = (what: string) => `${what}, one voice, read as a page of a book at an unhurried literary pace. Every passé antérieur and passé simple is read exactly as written, never modernised and never stressed; the liaisons of eurent, eûmes and fûmes are made in z.`;
const REC_DESC: Record<string, string> = {
  'rec-c1-02-lettre': 'The short story « La lettre » (act 1), one female voice, one take, the pace of a reading at a book club. The passés antérieurs are read with no emphasis; the two phone rings and the final gesture (two cups) are given a breath before them.',
  'rec-c1-02-studio': 'Inès and Samuel in the audiobook studio (act 2), two voices: Inès reads her lines as an audiobook narrator; Samuel, the director, interrupts warmly and precisely. One take, studio acoustics.',
  'rec-c1-02-formes': 'The four paradigm cards (act 2). One voice. Card four (Flaubert, « Quand il eut sept ans ») is read exactly like the others, so nothing marks it as the odd one out.',
  'rec-c1-02-formes-ecoute': `${ONE_TAKE} Eight lines. Line seven (« Quand il eut sept ans ») is read with the same rhythm as the passés antérieurs around it.`,
  'rec-c1-02-pronominal': 'The four pronominal cards (act 3). One voice. Card three (« se furent dit adieu ») and card two (« se furent installées ») sound alike: read them identically, the difference is in the spelling.',
  'rec-c1-02-edition': 'Noémie and Bertrand at the publisher in Lyon (act 4), two voices: a translator reading the novel’s lines carefully, an editor explaining calmly. One take.',
  'rec-c1-02-passif': 'The four « fut + participe » cards (act 4). One voice. Cards one and two (fut parti, fut envoyée) are read with IDENTICAL rhythm so only the verb differs.',
  'rec-c1-02-piege-passif': "The audio step plays each card's CORRECT modern version. Six lines, one voice. The wrong readings in promptSound are NEVER spoken.",
  'rec-c1-02-traversee': 'The short story « La traversée » (act 5), one voice, one take, a calm reading with the sounds of a crossing implied by the pace (no sound effects). The foghorn sentence is read a little slower.',
  'rec-c1-02-charnieres-ecoute': `${ONE_TAKE} Eight lines, each with a hinge; the questions are about order and content, so no hinge is stressed.`,
  'rec-c1-02-cours': 'Malik and Mme Verdier in an evening class in Geneva (act 6), two voices: a student reading from the board, a teacher with a light Swiss accent. One take.',
  'rec-c1-02-apeine': 'The four à peine cards (act 6). One voice. Each « que » is read lightly, without a pause before it, so the second action lands on the first.',
  'rec-c1-02-piege-apeine': "The audio step plays each card's CORRECT modern version. Six lines, one voice. The wrong readings (un peu ouvert, plutôt que) are NEVER spoken.",
  'rec-c1-02-bientot': 'The four main-clause cards (act 7). One voice. Card four reads « il eut bientôt fini » and « il finit bientôt » with the same rhythm.',
  'rec-c1-02-bientot-ecoute': `${ONE_TAKE} Six short lines; read briskly, as a summary of quick results.`,
  'rec-c1-02-deux-soirs': 'The short story « Les deux soirs » (act 8), one male voice, one take, the grandson remembering. The habitual first paragraph is even and slow; from « Le soir de ses quatre-vingts ans » the pace tightens slightly.',
  'rec-c1-02-pqp': 'The four plus-que-parfait / passé antérieur cards (act 8). One voice. Cards one and two (avait soupé, eut soupé) are read with the same rhythm so only the auxiliary differs.',
  'rec-c1-02-pqp-ecoute': `${ONE_TAKE} Eight lines; habits and single occasions alternate, and no line is read more slowly than another.`,
  'rec-c1-02-atelier': 'The writing workshop text (act 9), two voices for the two versions (Lucie’s and Nadia’s), one neutral narrator for the frame. Each version is read at the pace its prose implies: Lucie’s in linked stages, Nadia’s in short, dry beats. One take each.',
  'rec-c1-02-rythme': 'The four pace cards (act 9). One voice. Card two (two passés simples) is read with a slightly harder stop between the verbs.',
  'rec-c1-02-rythme-ecoute': `${ONE_TAKE} Six lines; the questions are about linking and pace, so read each line naturally, never acting out the effect.`,
  'rec-c1-02-balado': 'The book-club podcast (act 10), one female Québécoise voice, one take, warm and conversational. It must sound like speech: it contains no literary tense.',
  'rec-c1-02-piege-aujourdhui': "The audio step plays each card's CORRECT modern version. Six lines, one voice. The wrong retellings in promptSound are NEVER spoken.",
  'rec-c1-02-grand-tante': 'Zoé and her great-aunt Odile in Fribourg (act 11), two voices: an elderly woman from French-speaking Switzerland, natural and unhurried, saying her surcomposés as ordinary speech; Zoé young and attentive. One take.',
  'rec-c1-02-surcompose': 'The four surcomposé cards (act 11). One voice. Cards one to three are read as natural speech, card four as careful written French.',
  'rec-c1-02-surcompose-ecoute': `${ONE_TAKE} Six lines of spoken French; the surcomposés are said as everyday speech, never underlined.`,
  'rec-c1-02-modele': 'Julien’s book-club report (act 12), one young male voice, one take, read aloud to a small group: clear, natural, a little animated on the quotation from the book.',
  'rec-c1-02-texte-a2': TEXTE('Flaubert, Saint Julien, the arrival in the hut (act 2)'),
  'rec-c1-02-texte-a3': TEXTE('Hémon, Maria Chapdelaine, François Paradis’s morning (act 3)'),
  'rec-c1-02-texte-a4': TEXTE('Flaubert, Un cœur simple, the field and the bull (act 4)'),
  'rec-c1-02-texte-a5': TEXTE('Hémon, Maria Chapdelaine, the mother falls ill (act 5)'),
  'rec-c1-02-texte-a6': TEXTE('The concert in the dark (act 6)'),
  'rec-c1-02-texte-a7': TEXTE('The storm and the roof (act 7)'),
  'rec-c1-02-texte-a8': TEXTE('Hémon, Maria Chapdelaine, clearing the alders (act 8)'),
  'rec-c1-02-texte-a9': TEXTE('Flaubert, Saint Julien, the hunt; the cut marked « […] » is read as a short pause'),
  'rec-c1-02-texte-a10': TEXTE('The prize-giving (act 10)'),
  'rec-c1-02-texte-a11': 'The spoken testimony of a grandmother in Fribourg (act 11), one elderly female voice from French-speaking Switzerland, one take, read as speech, NOT as a book: the surcomposés are ordinary and unstressed.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 2',
  intro: 'The passé antérieur is the literary tense of an action wrapped up just before the next one: « dès qu’il eut fini, il sortit ». You met it once or twice in B2; here you learn to read it everywhere it lives, without ever producing it. You recognise its full paradigm with avoir and être and in pronominal verbs, and you learn its two false friends: eut followed by a noun, and fut followed by the participle of a transitive verb, which is a passive. You follow the order it sets after a time hinge, after « à peine… que », and in a main clause with bientôt; you tell it from the plus-que-parfait on one page and say what it does to the pace of a story. Then you retell it in today’s French and learn to recognise the passé surcomposé, its spoken counterpart. Five extracts are public-domain pages by Flaubert, Hémon and Mérimée. The task: retell a page for your book club in 220 to 320 words and say what the passé antérieur does to its rhythm.',
  skill: 'CE',
  grammarAssumed: [PQP_UNIT, PS_UNIT, SUBJ_UNIT, TEMPS_UNIT, INVERSION_UNIT],
  grammarIntroduced: [
    'Recognition of the full passé antérieur paradigm with avoir and être, in every person, with the participle agreements of the passé composé',
    'The passé antérieur of pronominal verbs (il se fut assis, ils se furent dit adieu) and agreement with a preceding object (il les eut relues)',
    'The look-alikes: eut + noun as a passé simple of avoir; fut + participle of a transitive verb as a passive in the passé simple; eut été + participle as the passive passé antérieur',
    'The time hinges quand, lorsque, dès que, aussitôt que, après que (with the indicative), une fois que, followed by a passé simple main clause',
    'À peine + inversion + passé antérieur… que + passé simple, with a nominal subject, without inversion, and ne… pas plus tôt… que',
    'The main-clause passé antérieur with bientôt, vite, en un instant, en quelques minutes, as a result reached quickly',
    'The passé antérieur against the plus-que-parfait (habit, background, distance), and the passé antérieur followed by an imparfait',
    'The effect of the passé antérieur on narrative pace: staging, tight sequencing, compression, acceleration',
    'Today’s equivalents: quand + passé composé, après avoir + participle, une fois (que), venir à peine de… quand',
    'The passé surcomposé as the spoken counterpart, after a time hinge, and its regional use without one, for recognition only',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Le passé antérieur, c’est le temps des livres pour une action bouclée juste avant la suivante. Tu ne l’écriras jamais ; tu apprends à le lire partout : avec avoir et avec être, dans les pronominaux, après une charnière, après à peine… que, seul avec bientôt. Tu le sépares du plus-que-parfait et du passif, tu dis ce qu’il fait au rythme d’une page, tu le racontes aujourd’hui et tu reconnais le surcomposé à l’oreille. À la fin, tu racontes une page à ton club de lecture, en 220 à 320 mots.',
    minutes: 160,
    difficulty: 4,
    glyph: 'eut',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: PA_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (build log, 2026-09-25). Kept, as every B1, B2 and C1 lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE, ...ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id)];
export { IMPORTED, NOT_SPEAKABLE, LECTURE_MODELE, EXTRAIT_TACHE, dicteeFor };
