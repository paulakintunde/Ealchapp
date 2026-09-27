// b1.32.l1 « La concession et l'opposition » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union, enforced by
// validateSection, drawn by TaskView), so `sections` is `LessonSection[]` and
// the validators run on `LESSON` itself, as b1.20 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading / listening), name
//   (cardDeck, examples, tapTable), build (groupDrill, gated), choose (a
//   drill where the MEANING or the REGISTER picks the tool), trap (trapDrill
//   stepped or commonErrors), check (gated control pages before the
//   checkpoint).
//
//    1  La balance                  7   mais as the base, the whole family in one letter, au contraire is not par contre
//    2  Même si                     8   indicative, even if and even though, no future right after si
//    3  Bien que, quoique           8   the same scales, the subjunctive (b1.15 cited), forms as recognition
//    4  Malgré                      7   malgré + noun against bien que + clause, en dépit de, malgré tout
//    5  Pourtant et ses cousins     8   pourtant, cependant, néanmoins, toutefois: register and position
//    6  Quand même                  7   at the end or after the verb, tout de même, the « anyway » trap
//    7  Avoir beau                  8   avoir beau + infinitive, in every tense, with its result
//    8  Alors que, tandis que       7   two facts side by side, indicative, and not pendant que
//    9  Garder ou effacer           8   par contre / en revanche, au contraire, au lieu de
//   10  La carte des outils         8   what each tool carries, by register, and the English traps
//   11  Un avis équilibré          11   model, plan, role play, TASK, quiz
//
//   TOTAL 87 missions, 11 acts. Corpus: 187 authored rows in eleven blocks
//   (.1400-.1586) plus 12 reused seed rows, 199 item ids in all, 194 of them
//   released act by act through `deckTranche` (the other 5 are seed rows
//   with no flashcard drill, listed as NOT_DECK_ABLE). Quiz: 11 rounds of 8
//   (34 mcq, 22 typeIn, 21 errorSpot, 11 listenChoose), 462 estimated screens.
//   Eleven error triggers, eleven drills, five reference sheets reached from
//   16 missions by `sheetId`, eleven terms. Three tapTables (acts 3, 5, 9).
//   Chapter artwork: `concession-image-prompts.md`, 11 prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Deux faits sur la balance : le mot qui les relie dit comment ils pèsent. »
//   EN: Two facts on the scales: the word that links them says how they weigh.
//
//   ONE METAPHOR, THE SCALES. Concession puts the obstacle on the light pan
//   (même si, bien que, malgré, avoir beau) or says the heavy pan lost
//   against expectation (pourtant, quand même); opposition sets two equal
//   pans side by side (alors que, tandis que, par contre, en revanche); au
//   contraire empties the first pan; au lieu de swaps one weight for another.
//   The GRAMMAR rides on a second line, CARTE_RULE (« Choisis le mot, puis
//   regarde ce qu'il porte »), which act 10 turns into the map. It is NOT
//   « the subjunctive for concession »: nine acts in eleven contradict that.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    concession and opposition as a system; même si with the
//           indicative (b1.24 gave it one forward pointer, fr.b1.maison.079,
//           reused here); bien que and quoique as a CONCESSION CHOICE among
//           others; malgré + noun and en dépit de; pourtant, cependant,
//           néanmoins, toutefois by register and position; avoir beau;
//           alors que and tandis que for opposition; au lieu de; par contre
//           against en revanche; au contraire; the register and form map;
//           the English traps; the balanced opinion (pour et contre).
//   QUOTES  b1.10's reframe (the si pair) for the tense rule after même si;
//           b1.15's (the expression before que decides) for bien que; b1.24's
//           (même says nothing changes) for quand même; b1.25's (no register
//           is wrong) for par contre / en revanche. b1.16's malgré as the way
//           out, b1.23's malgré tout and b1.24's tout de même are cited, not
//           re-taught.
//   LEAVES  mais and the coordinators to b1.30, cited as the base and never
//           built here; cause, consequence and purpose to b1.31; the
//           subjunctive (forms and triggers) to b1.14 to b1.16, and the past
//           subjunctive after bien que (ait changé, se soit blessé) is
//           recognition only; the si pairs to b1.10. The subjunctive appears
//           in authored correct French ONLY after bien que and quoique, and
//           in two wrong forms (a3-erreurs, a8-piege) marked as errors.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (Nadia, madame Favre and monsieur Bélanger say « vous »
//   to the learner). Every learner surface that explains something carries
//   English (`en`, or a final « EN: »), and NO ANSWER ever does. Every `say`
//   is French, spoken fr-FR. Theme `connecteurs-logiques`, existing (corpus
//   §A.1). b1.* citations are French from the plan; a2 ones use the English
//   trail label. Setting: Sherbrooke (a street consultation), with Liège,
//   Lausanne and Dakar in the texts and stories; characters recur only
//   inside this lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. b1.30 (coordination, written in parallel) owns mais and shows
//      pourtant, cependant and en revanche for RECOGNITION with a pointer
//      here; b1.31 gives bien que one mood-contrast row pointing here. This
//      lesson cites b1.30 on a1-mais, a5-adverbes and a9-tableau and builds
//      the tools. Both neighbours agree b1.32 owns concession. Confirm the
//      split once the three are reviewed together.
//   2. Two WRONG forms carry a subjunctive outside bien que / quoique: the
//      a3-erreurs card « Même s'il fasse froid » and the a8-piege card
//      « alors qu'elle n'ait pas ». Both are exactly the over-extension the
//      acts exist to stop. Keep them, or keep the subjunctive out of wrong
//      forms too?
//   3. THREE tapTables (acts 3, 5 and 9), one per act, six rows each. Confirm
//      three, as for every B1 lesson so far.
//   4. The past subjunctive after bien que (ait changé, se soit blessé) is in
//      two reused seed rows and on sheet-memesi as recognition only. No B1
//      lesson builds it. Keep it at recognition?
//   5. About 40 published `fr.b1.connecteurs-logiques` rows and ~40 a1
//      `mots-de-liaison` rows are DB-only and on topic, so this corpus twins
//      some of them (corpus DB_ONLY_TWINS). Dedupe at import or keep both?
//   6. The article in act 5 is set in Liège and names « la ville de Liège »
//      running a participatory budget. It is a teaching text, not a news
//      claim. Keep the real city, or make it a fictional commune?
//   7. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, CARTE_RULE, CARTE_RULE_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  COURRIER_TEXT, ARTICLE_TEXT, MODELE_TEXT, TYPES,
  B110_REFRAME, B115_REFRAME, B124_REFRAME, B125_REFRAME,
  SI_UNIT, SUBJ_FORM_UNIT, SUBJ_DECL_UNIT, SUBJ_INF_UNIT, TOUT_UNIT, MEME_UNIT, REGISTRE_UNIT, COORD_UNIT,
  SI_REF, SUBJ_FORM_REF, SUBJ_DECL_REF, SUBJ_INF_REF, TOUT_REF, MEME_REF, REGISTRE_REF, COORD_REF, ECOLOGIE_REF,
} from './concession-corpus.ts';
import { CONCESSION_TERMS } from './concession-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.32: no item ${id}`);
  return r;
}

/** The corpus row's IPA, so a scene break or trap card never retypes one. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.32: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section (the density
 *  validator requires brackets in a section and refuses them in a row). */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.32: no respell on ${id}`);
  return `[${r.respell}]`;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A listening line copied from its row. */
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
/** An examples row copied from its row. */
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
/** A useCases row copied from its row. */
const uc = (situation: string, id: string) => ({ situation, fr: src(id).fr, en: src(id).en });
const fr = (id: string) => src(id).fr;
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** The four trapDrill steps, identical in every trap of the lesson. */
const STEPS = (ruleTitle: string): Sec<'trapDrill'>['steps'] => ([
  { label: 'La règle', kind: 'rule', title: ruleTitle },
  { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
  { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
  { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
]);

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LA BALANCE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The learner means « on the other hand » and says « au contraire »,
 *  which cancels the first fact: the chair hears « against ». Grammatical,
 *  and it says the wrong thing. NO « ? » OR « ! » IN ANY BUBBLE. */
const WRONG_CONTRAIRE = 'La rue piétonne est bonne pour les familles. Au contraire, elle complique les livraisons.';
const WRONG_CONTRAIRE_IPA = '/la ʁy pje.tɔn ɛ bɔn puʁ le fa.mij o kɔ̃.tʁɛʁ ɛl kɔ̃.plik le li.vʁɛ.zɔ̃/';
const WRONG_CONTRAIRE_RS = '[la rü pyay-TONN eh bonn poor lay fa-MEEY | oh kohⁿ-TREHR | ehl kohⁿ-pleek lay lee-vreh-ZOHⁿ]';
const WRONG_CONTRAIRE_EN = 'The pedestrian street is good for families. On the contrary, it makes deliveries harder.';

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La rue des Érables',
  frSub: 'Un jeudi soir, à la consultation',
  setting: { place: 'La salle communautaire, rue des Érables', city: 'Sherbrooke', time: '19 h 30', ambience: 'des chaises pliantes, une grande photo de la rue, la pluie sur les fenêtres' },
  beats: [
    {
      kind: 'narration',
      text: "Sherbrooke, un jeudi soir de mai. La ville veut rendre la rue des Érables piétonne l'été. Dans la salle communautaire, chaque habitant donne son avis. C'est ton tour.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nadia',
      fr: "Merci d'être là. Dites-nous simplement ce que vous pensez du projet.",
      en: 'Thank you for coming. Just tell us what you think of the project.',
      respell: '[mehr-SEE dehtr LA | deet-noo sahⁿ-pluh-mahⁿ suh kuh voo pahⁿ-say dü pro-ZHEH]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: WRONG_CONTRAIRE,
      en: WRONG_CONTRAIRE_EN,
      respell: WRONG_CONTRAIRE_RS,
      stage: 'Tu penses : on the other hand. Tu as traduit par au contraire.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nadia',
      fr: "Au contraire. Donc, pour vous, le projet n'est pas bon pour les familles.",
      en: 'On the contrary. So, for you, the project is not good for families.',
      respell: '[oh kohⁿ-TREHR | dohⁿk poor VOO | luh pro-zheh neh pa bohⁿ poor lay fa-MEEY]',
      stage: 'Elle a entendu : le premier fait est faux.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Monsieur Bélanger, le boulanger, hoche la tête : il croit que tu es contre, comme lui. Léa, la cycliste, te regarde sans comprendre. Tu voulais dire les deux choses à la fois.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase garde les deux faits sur la balance ?',
      size: 'lg',
      options: [
        { fr: WRONG_CONTRAIRE, respell: WRONG_CONTRAIRE_RS, en: WRONG_CONTRAIRE_EN, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1400)), respell: rsOf(E(1400)), en: src(E(1400)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Nadia écrit : pour, avec une réserve sur les livraisons. Monsieur Bélanger lève la main : lui aussi veut parler des livraisons.",
        breaks: "Nadia écrit : contre. Léa lève la main pour te contredire, et la discussion part dans le mauvais sens.",
      },
    },
    {
      kind: 'break',
      heading: 'Au contraire efface le premier fait',
      body: "Au contraire dit que ce qui précède est faux. Pour garder deux faits vrais, côte à côte, le français dit par contre, ou en revanche à l'écrit. EN: au contraire cancels the first fact; par contre keeps both.",
      wrong: { fr: WRONG_CONTRAIRE, ipa: WRONG_CONTRAIRE_IPA, respell: WRONG_CONTRAIRE_RS, en: WRONG_CONTRAIRE_EN },
      right: { fr: fr(E(1400)), ipa: ipaOf(E(1400)), respell: rsOf(E(1400)), en: src(E(1400)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Nadia note ta réserve. Ce soir, chacun va peser le pour et le contre, et chaque petit mot qui relie deux faits va compter.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['balance', 'opposition'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Relier deux faits qui tirent en sens contraire', s: 'Actes 1 à 4 : mais, même si, bien que, malgré' },
    { t: 'Choisir le mot pour le moment', s: "Actes 5 et 6 : pourtant, cependant, quand même, à l'oral ou à l'écrit" },
    { t: "Dire l'effort, et l'autre côté", s: 'Actes 7 à 9 : avoir beau, alors que, par contre, au lieu de' },
    { t: 'Écrire un avis équilibré', s: 'Actes 10 et 11 : la carte des outils, puis ton texte' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: a real letter where nine tools are already doing their
 *  job. `questionsInModal` so the learner reads before the questions. */
const A1_COURRIER: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-courrier',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courrier du quartier',
  frSub: 'Lis, et cherche de quel côté penche la balance',
  text: COURRIER_TEXT,
  glossary: [
    { word: 'piétonne', en: 'pedestrian', note: 'Une rue sans voitures, pour marcher.' },
    { word: 'coûteux', en: 'costly', note: 'Qui coûte cher.' },
    { word: 'farine', en: 'flour', note: 'La poudre blanche du pain.' },
    { word: 'terrasses', en: 'café terraces', note: "Les tables dehors, devant les cafés, l'été." },
    { word: 'ombre', en: 'shade', note: "L'endroit où le soleil n'arrive pas." },
  ],
  questions: [
    { q: 'Madame Pirotte est-elle pour ou contre le projet ?', a: "Pour : « je vote pour », « je le soutiens quand même ». Le coût et le bruit sont sur le plateau léger." },
    { q: 'Quels obstacles reconnaît-elle ?', a: "Le coût (bien que), les clients perdus (même si), les livraisons de monsieur Bélanger (pourtant), le bruit des terrasses (malgré)." },
    { q: 'Que propose-t-elle au lieu de fermer la rue toute la journée ?', a: "De la fermer de onze heures à vingt heures. Au lieu de, puis un infinitif : fermer." },
    { q: 'Le samedi, qu’est-ce qui oppose sa rue aux autres ?', a: "Les autres sont pleines, alors que la sienne est vide. Alors que met deux faits côte à côte." },
    { q: 'Combien de mots différents relient deux faits contraires ?', a: "Neuf : pourtant (deux fois), bien que, alors que, même si, au lieu de, malgré, avoir beau, par contre, quand même." },
  ],
  audio: REC('rec-b1-32-courrier'),
  say: REFRAME,
  terms: ['balance', 'concession'],
};

/** BUILD, on the text just read: which fact wins, and which sit side by side. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'De quel côté penche la balance',
  groups: [
    grp('Un fait gagne', [
      it(E(1401), 'je suis pour : ce fait gagne'),
      it(E(1404), 'bien que : la même idée, plus soignée'),
      it(E(1414), 'une bonne idée, malgré le prix'),
      it(E(1415), 'je vote pour, après pourtant'),
    ], chk(
      'Dans ces quatre phrases, la personne est-elle pour le projet ?',
      ['Non, elle hésite.', 'Oui, chaque fois.'], 1,
      "L'obstacle est sur le plateau léger : le prix, les clients. Le fait qui gagne, c'est « je suis pour ». EN: the obstacle is the lighter pan.")),
    grp('Deux faits côte à côte', [
      it(E(1406), 'alors que : deux rues, deux faits'),
      it(E(1400), 'par contre : les deux restent vrais'),
      it(E(1402), 'mais : la base'),
      it(E(1413), 'mais, avec deux futurs'),
    ], chk(
      "« Les autres rues sont pleines, alors que la nôtre est vide. » Un fait empêche-t-il l'autre ?",
      ['Non, ils sont côte à côte.', 'Oui, le premier empêche le second.'], 0,
      "Alors que compare deux faits de même poids. EN: alors que compares; neither blocks the other.")),
    ctl('Le mot qui efface', "« Elle n'est pas contre le projet, au contraire. » Elle est...",
      ['contre', 'pour', 'sans avis'], 1,
      "Au contraire efface « contre » : elle est pour, et même beaucoup. EN: au contraire cancels contre."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['balance', 'opposition'],
};

/** NAME, gently: mais as the everyday base, then the same scales in other
 *  words. mais is b1.30's; it is cited here, never built. */
const A1_MAIS: Sec<'examples'> = {
  type: 'examples',
  id: 'a1-mais',
  layer: 'core',
  sheetId: 'sheet-carte',
  title: 'Mais, la base de tous les jours',
  examples: [
    ex(E(1402), `mais : la base, à l'oral comme à l'écrit. ${Cap(COORD_REF)} le construit ; ici, tu pars de lui.`),
    ex(E(1403), 'après mais, le fait qui pèse le plus'),
    ex(E(1412), 'deux faits, et le second gagne'),
    ex(E(1405), 'malgré : la même balance, avec un nom'),
    ex(E(1408), 'et pourtant : la même balance, avec une surprise'),
    ex(E(1407), "avoir beau : l'effort, sur le plateau léger"),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['balance'],
};

/** CHOOSE: where the wrong linking word costs something real. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où le bon mot compte',
  cases: [
    uc('À la consultation : tu es pour, avec une réserve', E(1401)),
    uc('Tu réponds à un sondage de la ville', E(1414)),
    uc('Tu compares deux rues avec un ami', E(1406)),
    uc("Tu dis que tu n'es pas contre, bien au contraire", E(1410)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['balance', 'opposition'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('On the other hand', 'Tu veux dire « on the other hand ». Que dis-tu ?',
    ['au contraire', 'par contre'], 1,
    "Par contre garde les deux faits. Au contraire efface le premier. EN: par contre for on the other hand."),
  ctl('Le fait qui gagne', "« C'est une bonne idée, même si elle coûte cher. » La personne est...",
    ['pour', 'contre', 'sans avis'], 0,
    "Le prix est sur le plateau léger : elle est pour. EN: the price is the lighter pan."),
  ctl('Mais', "Quel mot relie deux faits contraires, à l'oral comme à l'écrit ?",
    ['mais', 'néanmoins'], 0,
    "Mais va partout. Néanmoins est surtout écrit. EN: mais works everywhere."),
], ['balance']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'La balance',
    opener: {
      line: "Tu es pour, avec une réserve, et ta phrase dit le contraire : ici tu apprends à peser deux faits. EN: You are for it, with one reservation, and your sentence says the opposite: here you learn to weigh two facts.",
      imageRef: 'lessons/concession/act01.jpg',
    },
    sections: [],
    milestone: "Tu repères le fait qui gagne, et tu sais qu'au contraire n'est pas par contre. EN: You can spot which fact wins, and you know au contraire is not par contre.",
    estScreens: 28, restPoints: ['a1-courrier'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_COURRIER, A1_REPERER, A1_MAIS, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — MÊME SI
 *
 *  b1.24 named même si once, as recognition (fr.b1.maison.079); here it is
 *  built. The tense rule after si is b1.10's, quoted, never re-taught.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a video call, Sherbrooke to Dakar. Three même si, three weights.
 *  Story bubbles avoid « ? » and « ! », like scene bubbles. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Moins vingt à Sherbrooke',
  frSub: 'Fatou veut le faire revenir',
  setting: "Ousmane parle en vidéo avec sa sœur Fatou, à Dakar. Il fait moins vingt à Sherbrooke, et elle trouve qu'il devrait rentrer.",
  bubbles: [
    { from: 'narrator', fr: 'Fatou regarde la neige derrière Ousmane et secoue la tête.', en: 'Fatou looks at the snow behind Ousmane and shakes her head.' },
    { from: 'coach', fr: 'Il fait moins vingt chez toi. Reviens à Dakar, voyons.', en: 'It is minus twenty where you are. Come back to Dakar, come on.' },
    { from: 'user', fr: fr(E(1433)), en: src(E(1433)).en, warn: 'même si + présent : un fait vrai' },
    { from: 'coach', fr: "Il va encore neiger demain, je l'ai vu à la télé.", en: 'It is going to snow again tomorrow, I saw it on TV.' },
    { from: 'user', fr: fr(E(1430)), en: src(E(1430)).en, warn: 'le présent après si, même pour demain' },
    { from: 'coach', fr: 'Imagine que tu gagnes au loto. Tu reviens tout de suite, je te connais.', en: 'Imagine you win the lottery. You come straight back, I know you.' },
    { from: 'user', fr: fr(E(1422)), en: src(E(1422)).en, warn: 'même si + imparfait : une hypothèse' },
    { from: 'narrator', fr: "Fatou rit. Trois fois même si, et chaque fois, l'obstacle pèse moins que Sherbrooke.", en: 'Fatou laughs. Three times même si, and each time the obstacle weighs less than Sherbrooke.' },
  ],
  closing: { fr: "Même si pose l'obstacle. L'autre moitié dit ce qui gagne.", en: 'Même si sets down the obstacle. The other half says what wins.' },
  audio: REC('rec-b1-32-fatou'),
  say: REFRAME,
  terms: ['concession', 'indicatif'],
};

const A2_MEMESI: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-memesi',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-memesi',
  title: 'Même si, trois situations',
  frSub: "même si + l'indicatif",
  hint: 'Quatre cartes. Regarde le verbe juste après si.',
  audio: REC('rec-b1-32-memesi'),
  say: REFRAME,
  terms: ['indicatif'],
  cards: [
    {
      head: 'Un fait vrai, qui ne gagne pas', label: 'même si + présent',
      fr: fr(E(1417)), sub: rsOf(E(1417)),
      body: 'Le loyer est vraiment cher, et tu restes. Ici, même si veut dire even though. EN: a real fact that does not win: even though.',
    },
    {
      head: 'Un fait possible, demain', label: Cap(SI_REF),
      fr: fr(E(1418)), sub: rsOf(E(1418)),
      body: `« ${B110_REFRAME} » Juste après si, le présent, même pour demain. Le futur va dans l'autre moitié. EN: after si, the present, even about tomorrow.`,
    },
    {
      head: 'Une situation imaginée', label: 'même si + imparfait',
      fr: fr(E(1422)), sub: rsOf(E(1422)),
      body: "Tu n'es pas riche : tu imagines. Même si + imparfait, et le conditionnel dans l'autre moitié, comme avec si. EN: an imagined case: imparfait after si, conditional in the other half.",
    },
    {
      head: 'Déjà croisé', label: Cap(MEME_REF),
      fr: fr('fr.b1.maison.079'),
      sub: '[ehl pray-FEHR uhⁿ-na-par-tuh-MAHⁿ KALM | mem see luh lwa-YAY eh plü-zay-luh-VAY]',
      body: 'Tu as vu même si une fois, pour le reconnaître. Ici, tu le construis : un obstacle, et le calme gagne. EN: you met it once; here you build it.',
    },
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Même si, puis la phrase qui gagne',
  groups: [
    grp('Un fait vrai', [
      it(E(1417), 'le loyer est cher, vraiment'),
      it(E(1425), 'elle est fatiguée'),
      it(E(1428), "je ne suis pas d'accord"),
      it(E(1433), "l'hiver est long"),
    ], chk(
      'Dans ces phrases, le fait après même si est-il vrai ?',
      ['Non, on imagine.', 'Oui, il est vrai.'], 1,
      "Même si avec un fait vrai : even though. L'obstacle existe, et il ne gagne pas. EN: a real obstacle that does not win.")),
    grp('Un fait possible, demain', [
      it(E(1418), 'il pleut demain'),
      it(E(1424), 'la réunion finit tard'),
      it(E(1427), 'on ferme la rue'),
      it(E(1432), 'tu insistes'),
    ], chk(
      "« Même s'il pleut demain » : pourquoi le présent ?",
      ['Parce que juste après si, jamais de futur.', 'Parce que la pluie tombe déjà.'], 0,
      "Après si, le présent. Le futur va dans l'autre moitié : aura lieu, viendrai. EN: the future goes in the other half.")),
    ctl('Le passé', "« Même si c'était difficile, nous avons fini à temps. » C'était...",
      ['facile', "difficile, et c'est fini", 'une hypothèse'], 1,
      "Même si marche au passé aussi, avec l'imparfait. EN: même si works in the past too."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['indicatif'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  title: 'Même si, partout',
  examples: [
    ex(E(1419), "avec une négation : tu n'es pas d'accord"),
    ex(E(1420), "au passé : c'était difficile"),
    ex(E(1426), "même si peut venir en second : je vais à pied d'abord"),
    ex(E(1429), 'imparfait après si, passé composé ensuite'),
    ex('fr.b1.sports-et-loisirs.004', 'elle déteste perdre, et elle rejoue'),
    ex(E(1421), "une hypothèse : il n'a pas le temps"),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concession'],
};

const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Vrai, possible ou imaginé',
  groups: [
    grp('Vrai ou imaginé', [
      it(E(1433), 'vrai : l’hiver est long'),
      it(E(1422), 'imaginé : tu n’es pas riche'),
      it(E(1420), 'vrai, au passé'),
      it(E(1421), 'imaginé : il n’a pas le temps'),
    ], chk(
      "« Même si j'étais riche » : es-tu riche ?",
      ['Oui.', 'Non, tu imagines.'], 1,
      "Même si + imparfait : une hypothèse. EN: an imagined case.")),
    grp("Le temps dans l'autre moitié", [
      it(E(1418), 'aura lieu : futur'),
      it(E(1424), 'viendrai : futur'),
      it(E(1421), 'viendrait : conditionnel'),
      it(E(1417), 'reste : présent'),
    ], chk(
      "« Même s'il avait le temps, il ne ... pas. »",
      ['viendrait', 'viendra', 'vient'], 0,
      "Imparfait après si, conditionnel dans l'autre moitié. EN: imparfait, then conditional.")),
    ctl('Deux ordres', "« Je vais à pied, même s'il fait froid. » Peut-on inverser les deux moitiés ?",
      ["Oui : même s'il fait froid, je vais à pied.", 'Non, même si va toujours au début.'], 0,
      "Même si ouvre ou ferme la phrase ; le sens ne change pas. EN: either order."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['indicatif'],
};

/** TRAP, stepped: the future, the conditional or the subjunctive after si. */
const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: 'Juste après si',
  rule: {
    title: 'Après si : présent ou imparfait',
    body: "Juste après même si : le présent ou un passé, comme après si. Jamais de futur, jamais de conditionnel, jamais de subjonctif. Le futur et le conditionnel vont dans l'autre moitié. EN: never a future, conditional or subjunctive right after si.",
  },
  cards: [
    { promptLabel: 'futur après si', promptSound: "Même s'il pleuvra demain, le marché aura lieu.", fr: fr(E(1418)), ipa: ipaOf(E(1418)), tip: "Le futur va dans l'autre moitié : aura lieu. EN: the future goes in the other half." },
    { promptLabel: 'conditionnel après si', promptSound: "Même s'il aurait le temps, il ne viendrait pas.", fr: fr(E(1421)), ipa: ipaOf(E(1421)), tip: "Après si, l'imparfait. Le conditionnel reste de l'autre côté. EN: imparfait after si." },
    { promptLabel: 'subjonctif après même si', promptSound: 'Même si le loyer soit cher, je reste dans ce quartier.', fr: fr(E(1417)), ipa: ipaOf(E(1417)), tip: "Même si garde l'indicatif. Le subjonctif, c'est pour bien que. EN: même si takes the indicative." },
    { promptLabel: 'futur après si', promptSound: 'Même si la réunion finira tard, je viendrai.', fr: fr(E(1424)), ipa: ipaOf(E(1424)), tip: 'Finit : le présent suffit, le futur est dans je viendrai. EN: the present is enough.' },
    { promptLabel: 'conditionnel après si', promptSound: 'Même si je serais riche, je resterais à Sherbrooke.', fr: fr(E(1422)), ipa: ipaOf(E(1422)), tip: "J'étais : imparfait après si, conditionnel après la virgule. EN: imparfait, then conditional." },
    { promptLabel: 'même sans si', promptSound: "Même le bus était en retard, je suis arrivé à l'heure.", fr: fr(E(1429)), ipa: ipaOf(E(1429)), tip: 'Sans si, même ne relie rien. Il faut les deux mots. EN: même alone links nothing.' },
  ],
  drill: [
    { promptSay: "Même s'il ... demain, on sort. (neiger)", opts: ['neigera', 'neige'], correct: 1 },
    { promptSay: "Même si tu ..., je ne changerai pas d'avis. (insister)", opts: ['insistes', 'insisteras'], correct: 0 },
    { promptSay: "Même s'il ... le temps, il ne viendrait pas. (avoir)", opts: ['aurait', 'avait', 'aura'], correct: 1 },
    { promptSay: 'Même si le loyer ... cher, je reste. (être)', opts: ['est', 'serait'], correct: 0 },
    { promptSay: "Même s'il pleut demain, le marché ... lieu. (avoir)", opts: ['a eu', 'avait', 'aura'], correct: 2 },
    { promptSay: "Même si j'étais riche, je ... ici. (rester)", opts: ['resterais', 'reste'], correct: 0 },
    { promptSay: 'Même si la réunion ... tard, je viendrai. (finir)', opts: ['finira', 'finit'], correct: 1 },
    { promptSay: 'Même si elle ... fatiguée, elle vient. (être)', opts: ['sera', 'serait', 'est'], correct: 2 },
  ],
  steps: STEPS('Après si : présent ou imparfait'),
  audio: REC('rec-b1-32-piege-si'),
  say: REFRAME,
  terms: ['indicatif'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris la balance que tu entends',
  frSub: 'même si',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['indicatif'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le temps', "« Même s'il ... demain. » (pleuvoir)",
    ['pleuvra', 'pleut'], 1,
    'Juste après si, le présent. EN: present after si.'),
  ctl('Le mode', 'Après même si, quel mode ?',
    ["l'indicatif", 'le subjonctif'], 0,
    "L'indicatif, toujours. EN: always the indicative."),
  ctl("L'hypothèse", "« Même si j'étais riche, je ... ici. »",
    ['resterai', 'resterais', 'reste'], 1,
    "Imparfait après si, conditionnel ensuite. EN: imparfait, then conditional."),
], ['indicatif']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Même si',
    opener: {
      line: "Il fait moins vingt, et Ousmane reste : ici tu apprends même si, pour un fait vrai comme pour demain. EN: It is minus twenty and Ousmane stays: here you learn même si, for a real fact and for tomorrow.",
      imageRef: 'lessons/concession/act02.jpg',
    },
    sections: [],
    milestone: "Tu dis même si avec l'indicatif, et jamais de futur juste après si. EN: You use même si with the indicative, and never a future right after si.",
    estScreens: 36, restPoints: ['a2-exemples'],
  },
  sections: [A2_HISTOIRE, A2_MEMESI, A2_CONSTRUIRE, A2_EXEMPLES, A2_CHOISIR, A2_PIEGE, A2_DICTEE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — BIEN QUE, QUOIQUE
 *
 *  b1.15 owns the mood and is cited. Here bien que is a CHOICE among the
 *  concession tools: the same scales as même si, a more careful form.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear. `hideLines` because the questions are about what the ear
 *  caught: fait or fasse, est or soit. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Fait ou fasse',
  frSub: 'Écoute le verbe après le mot qui relie',
  lines: [
    ln(E(1441)), ln(E(1434)), ln(E(1450)), ln(E(1449)),
    ln(E(1443)), ln(E(1445)), ln(E(1437)), ln('fr.b1.famille.002'),
  ],
  questions: [
    { q: 'Les deux premières phrases disent-elles la même chose ?', opts: ['Oui, avec deux outils.', 'Non, le sens change.'], correct: 0, why: 'Même si et bien que : même balance. Seule la forme change. EN: same meaning, two tools.' },
    { q: "Deuxième phrase : qu'entends-tu après bien qu'il ?", opts: ['fait', 'fasse'], correct: 1, why: 'Fasse : le subjonctif, après bien que. EN: the subjunctive.' },
    { q: 'Troisième et quatrième phrases : elle est malade, et...', opts: ['elle reste chez elle', 'elle travaille', 'on ne sait pas'], correct: 1, why: "La maladie est sur le plateau léger : elle travaille. EN: she works anyway." },
    { q: 'Sixième phrase : quel mot, plus écrit, ouvre la phrase ?', opts: ['quoique', 'même si', 'malgré'], correct: 0, why: 'Quoique : comme bien que, en plus écrit. EN: quoique, more written.' },
    { q: 'Septième phrase : a-t-elle beaucoup de temps ?', opts: ['Oui.', 'Non, peu.'], correct: 1, why: "« Bien qu'elle ait peu de temps » : peu, et elle aide quand même. EN: little time." },
  ],
  audio: REC('rec-b1-32-bienque-ecoute'),
  say: REFRAME,
  terms: ['subjonctif'],
};

const A3_BIENQUE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-bienque',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-memesi',
  title: 'Bien que, la même balance',
  frSub: 'bien que + le subjonctif',
  hint: 'Quatre cartes. Compare avec même si.',
  audio: REC('rec-b1-32-bienque'),
  say: REFRAME,
  terms: ['subjonctif', 'concession'],
  cards: [
    {
      head: "C'est l'expression qui décide", label: Cap(SUBJ_DECL_REF),
      fr: fr(E(1434)), sub: rsOf(E(1434)),
      body: `« ${B115_REFRAME} » Bien que est une de ces expressions : elle demande le subjonctif. EN: bien que calls for the subjunctive.`,
    },
    {
      head: 'La même idée que même si', label: 'bien que · même si',
      fr: "bien qu'il fasse froid · même s'il fait froid",
      sub: '[byehⁿ keel fass FRWA] · [MEM seel feh FRWA]',
      body: "Même sens, même balance. Bien que est plus soigné et change la forme du verbe. À l'oral, on dit souvent même si. EN: same meaning; bien que is more careful.",
    },
    {
      head: 'Plus écrit encore', label: 'quoique',
      fr: fr(E(1445)), sub: rsOf(E(1445)),
      body: 'Quoique fait comme bien que, avec le subjonctif. Tu le liras surtout. EN: quoique works like bien que, mostly in writing.',
    },
    {
      head: 'Que reste, toujours', label: Cap(SUBJ_INF_REF),
      fr: fr(E(1436)), sub: rsOf(E(1436)),
      body: "Bien que n'a pas de forme courte. Même avec un seul sujet, que reste : bien que je sois d'accord. EN: bien que keeps que even with one subject.",
    },
  ],
};

const A3_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-tableau',
  layer: 'core',
  sheetId: 'sheet-memesi',
  title: 'Même si, bien que : le verbe change',
  cols: ['Même si', 'Bien que', 'Le verbe'],
  rows: [
    { cells: ["même s'il fait froid", "bien qu'il fasse froid", 'fait, fasse'], say: fr(E(1441)),
      detail: { title: 'faire', body: 'Il fait devient il fasse. EN: fait becomes fasse.', say: fr(E(1434)) } },
    { cells: ['même si elle est malade', "bien qu'elle soit malade", 'est, soit'], say: fr(E(1450)),
      detail: { title: 'être', body: 'Il est devient il soit. EN: est becomes soit.', say: fr(E(1449)) } },
    { cells: ["même s'il pleut", "bien qu'il pleuve", 'pleut, pleuve'], say: "Même s'il pleut, la fête continue.",
      detail: { title: 'pleuvoir', body: 'Il pleut devient il pleuve. EN: pleut becomes pleuve.', say: fr(E(1443)) } },
    { cells: ["même s'il a raison", "bien qu'il ait raison", 'a, ait'], say: "Même s'il a raison, il parle trop fort.",
      detail: { title: 'avoir', body: 'Il a devient il ait. EN: a becomes ait.', say: fr(E(1451)) } },
    { cells: ['même si nous pouvons payer', 'bien que nous puissions payer', 'pouvons, puissions'], say: 'Même si nous pouvons payer, nous préférons attendre.',
      detail: { title: 'pouvoir', body: `Une forme de ${SUBJ_FORM_REF}. Ici, reconnais-la. EN: a form you met in lesson 14.`, say: fr(E(1439)) } },
    { cells: ['même si je connais le chemin', 'bien que je connaisse le chemin', 'connais, connaisse'], say: 'Même si je connais le chemin, je prends le GPS.',
      detail: { title: 'connaître', body: 'Je connais devient je connaisse. EN: connais becomes connaisse.', say: fr(E(1446)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['subjonctif'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Bien que, puis le subjonctif',
  groups: [
    grp('Le subjonctif, chaque fois', [
      it(E(1435), 'soit'),
      it(E(1437), 'ait'),
      it(E(1439), 'puissions'),
      it(E(1446), 'connaisse'),
    ], chk(
      'Quelle forme suit bien que dans ces quatre phrases ?',
      ["l'indicatif", 'le subjonctif'], 1,
      "Le subjonctif, toujours après bien que. EN: always the subjunctive.")),
    grp('La même idée, deux outils', [
      it(E(1441), 'même si : fait'),
      it(E(1434), 'bien que : fasse'),
      it(E(1450), 'même si : est'),
      it(E(1449), 'bien que : soit'),
    ], chk(
      "« Même si elle est malade » et « bien qu'elle soit malade » :",
      ['le même sens, deux formes', 'deux sens différents'], 0,
      "Même balance, deux formes. EN: same scales, two forms.")),
    ctl('Déjà publié', `« ${fr('fr.b1.matieres.004')} » Aime-t-il les maths ?`,
      ['Oui.', 'Non.'], 1,
      "Il les déteste, et ses notes sont bonnes quand même. EN: he hates maths and still does well."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['subjonctif'],
};

/** Consolidation, as answers. No « EN: » tail anywhere on a back. */
const A3_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a3-cartes',
  layer: 'core',
  title: 'Huit cartes pour although',
  cards: [
    { front: 'although it is cold', back: "bien qu'il fasse froid", say: fr(E(1434)) },
    { front: 'even though it is cold', back: "même s'il fait froid", say: fr(E(1441)) },
    { front: 'although she is ill', back: "bien qu'elle soit malade", say: fr(E(1449)) },
    { front: 'although I agree', back: "bien que je sois d'accord", say: fr(E(1436)) },
    { front: 'although it is raining', back: "bien qu'il pleuve", say: fr(E(1443)) },
    { front: 'although it is late (written)', back: "quoiqu'il soit tard", say: fr(E(1445)) },
    { front: 'although he is right', back: "bien qu'il ait raison", say: fr(E(1451)) },
    { front: 'although they live far away', back: "bien qu'ils habitent loin", say: fr('fr.b1.famille.002') },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['subjonctif'],
};

const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quelle forme après ?',
  groups: [
    grp('Parfois, les deux formes se ressemblent', [
      it(E(1442), 'change : présent et subjonctif pareils'),
      it(E(1444), 'soit : bien différent de est'),
      it('fr.b1.communaute.003', 'ait changé : un passé, à reconnaître'),
      it('fr.b1.sports-et-loisirs.090', 'se soit blessé : à reconnaître'),
    ], chk(
      "« ... le quartier change, les voisins se connaissent encore. » Bien que ou même si ?",
      ['Seulement bien que.', 'Les deux, avec la même forme ici.'], 1,
      "Pour un verbe en -er, change sert aux deux. EN: for -er verbs, the two forms often look the same.")),
    grp('Écoute la forme', [
      it(E(1443), 'pleuve'),
      it(E(1445), 'soit, après quoique'),
      it(E(1438), 'soit, dans un texte écrit'),
      it('fr.b1.famille.002', 'habitent : pareil au présent'),
    ], chk(
      "« Bien qu'il ... , la fête continue. » (pleuvoir)",
      ['pleut', 'pleuvra', 'pleuve'], 2,
      "Pleuve : le subjonctif de pleuvoir. EN: pleuve.")),
    ctl('Le registre', 'Tu parles avec un ami. Laquelle est la plus naturelle ?',
      ["Même s'il fait froid, on sort.", "Quoiqu'il fasse froid, on sort."], 0,
      "Entre amis, même si. Quoique est surtout écrit. EN: même si in casual speech."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['subjonctif', 'registre'],
};

/** TRAP: the two moods crossed, and bien que without a clause. */
const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre formes croisées',
  errors: [
    {
      wrong: "Bien qu'il fait froid, les enfants jouent dehors.",
      right: fr(E(1434)),
      why: "Normal : même s'il fait froid est juste, et bien que a le même sens. Mais bien que demande le subjonctif : fasse. EN: same meaning as même si, but bien que needs the subjunctive.",
    },
    {
      wrong: "Même s'il fasse froid, les enfants jouent dehors.",
      right: fr(E(1441)),
      why: "Tu as appris bien que avec le subjonctif et tu l'as étendu à même si. Même si garde l'indicatif. EN: même si keeps the indicative.",
    },
    {
      wrong: 'Bien que être malade, elle travaille.',
      right: fr(E(1449)),
      why: "En anglais, although being ill existe. Bien que n'a pas de forme avec l'infinitif : un sujet et un verbe. EN: bien que needs a subject and a verb.",
    },
    {
      wrong: "Bien que je suis d'accord, j'ai une question.",
      right: fr(E(1436)),
      why: "Avec je, tu pensais garder l'indicatif. Bien que demande le subjonctif, même avec un seul sujet : je sois. EN: the subjunctive, even with one subject.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['subjonctif', 'indicatif'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La forme', "« Bien qu'il ... froid. » (faire)",
    ['fasse', 'fait'], 0,
    'Bien que, puis le subjonctif. EN: subjunctive after bien que.'),
  ctl('Le sens', 'Bien que et même si ont-ils le même sens ?',
    ['Non.', 'Oui, avec deux formes.'], 1,
    'Même balance, forme différente. EN: same meaning, different form.'),
  ctl('Le registre', 'Quel outil est le plus écrit ?',
    ['même si', 'bien que', 'quoique'], 2,
    'Quoique, surtout dans les textes. EN: quoique, mostly written.'),
], ['subjonctif']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Bien que, quoique',
    opener: {
      line: "Même balance, autre forme : ici tu apprends bien que et quoique, et le verbe qui change après eux. EN: Same scales, different form: here you learn bien que and quoique, and the verb that changes after them.",
      imageRef: 'lessons/concession/act03.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre même si et bien que, et tu mets le verbe à la bonne forme. EN: You can choose between même si and bien que, and give the verb the right form.",
    estScreens: 38, restPoints: ['a3-tableau', 'a3-cartes'],
  },
  sections: [A3_ECOUTE, A3_BIENQUE, A3_TABLEAU, A3_CONSTRUIRE, A3_CARTES, A3_CHOISIR, A3_ERREURS, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — MALGRÉ
 *
 *  b1.16 named malgré + noun as the way out of the subjunctive; b1.23 owns
 *  malgré tout. Here malgré is built as a tool of its own.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'La boulangerie et les travaux',
  frSub: 'Monsieur Bélanger tient bon',
  setting: 'Rue des Érables, les travaux durent depuis un mois. Tu passes à la boulangerie de monsieur Bélanger, un matin de neige.',
  bubbles: [
    { from: 'narrator', fr: 'La rue est ouverte en deux. Il faut marcher sur des planches pour arriver à la porte.', en: 'The street is dug up. You have to walk on planks to reach the door.' },
    { from: 'coach', fr: 'Malgré les travaux, vous êtes là. Merci, vraiment.', en: 'Despite the roadworks, you are here. Thank you, really.' },
    { from: 'user', fr: 'Malgré le bruit, votre pain reste le meilleur du quartier.', en: 'Despite the noise, your bread is still the best in the neighbourhood.', warn: 'malgré + un nom : le bruit' },
    { from: 'coach', fr: 'Bien que la rue soit fermée, les clients fidèles viennent encore.', en: 'Although the street is closed, loyal customers still come.', warn: 'bien que + une phrase au subjonctif' },
    { from: 'user', fr: 'Malgré la neige, je viens tous les matins.', en: 'Despite the snow, I come every morning.', warn: 'malgré + un nom, puis la phrase entière' },
    { from: 'coach', fr: fr(E(1464)), en: src(E(1464)).en, warn: 'malgré tout : un bloc déjà connu' },
    { from: 'narrator', fr: 'Deux façons de dire la même chose : malgré avec un nom, bien que avec une phrase.', en: 'Two ways of saying the same thing: malgré with a noun, bien que with a clause.' },
  ],
  closing: { fr: "Malgré le bruit, bien qu'il y ait du bruit : même balance, autre forme.", en: 'Despite the noise, although there is noise: same scales, different form.' },
  audio: REC('rec-b1-32-boulangerie'),
  say: REFRAME,
  terms: ['malgre'],
};

const A4_MALGRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-malgre',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-malgre',
  title: 'Malgré, un nom et rien d’autre',
  frSub: 'malgré + nom',
  hint: 'Quatre cartes. Regarde ce qui suit malgré.',
  audio: REC('rec-b1-32-malgre'),
  say: REFRAME,
  terms: ['malgre'],
  cards: [
    {
      head: 'Un nom, avec son article', label: 'malgré + nom',
      fr: fr(E(1452)), sub: rsOf(E(1452)),
      body: "Malgré est suivi d'un nom : le froid. Pas de de, pas de verbe. EN: malgré plus a noun, nothing else.",
    },
    {
      head: 'La sortie de secours', label: Cap(SUBJ_INF_REF),
      fr: "bien qu'il fasse froid · malgré le froid",
      sub: '[byehⁿ keel fass FRWA] · [mal-gray luh FRWA]',
      body: `${Cap(SUBJ_INF_REF)} t'a donné malgré comme sortie : pas de subjonctif, juste un nom. EN: the way out: no subjunctive, just a noun.`,
    },
    {
      head: 'Plus soigné', label: 'en dépit de',
      fr: fr(E(1461)), sub: rsOf(E(1461)),
      body: 'En dépit de dit la même chose, dans un texte soigné. Lui, il garde de : en dépit des critiques. EN: same meaning, written, and it keeps de.',
    },
    {
      head: 'Un bloc déjà connu', label: Cap(TOUT_REF),
      fr: fr(E(1464)), sub: rsOf(E(1464)),
      body: "Malgré tout : même avec tout ça. C'est un bloc, il ne change pas. EN: malgré tout, all the same: a fixed block.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Une phrase devient un nom',
  groups: [
    grp('De la phrase au nom', [
      it(E(1434), 'il fait froid'),
      it(E(1452), 'le froid'),
      it(E(1443), 'il pleut'),
      it(E(1453), 'la pluie'),
    ], chk(
      "« Bien qu'il fasse froid » devient...",
      ['malgré il fait froid', 'malgré le froid'], 1,
      "Le verbe disparaît, le nom arrive : le froid. EN: the verb goes, the noun comes.")),
    grp('Un nom, avec son article', [
      it(E(1456), 'mes efforts'),
      it(E(1458), 'le prix'),
      it(E(1460), 'la fatigue'),
      it(E(1467), 'ce problème'),
    ], chk(
      'Que met-on juste après malgré ?',
      ['de', 'un nom avec son article', 'un verbe'], 1,
      'Le, la, les, mes, ce : le nom garde son petit mot. EN: the noun keeps its determiner.')),
    ctl('La place', "« Il est venu malgré la neige. » Malgré peut-il aller à la fin ?",
      ['Oui.', 'Non, toujours au début.'], 0,
      'Au début ou à la fin, comme même si. EN: start or end.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['malgre'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Malgré, dans la vie',
  examples: [
    ex(E(1454), 'son âge : un nom avec son'),
    ex(E(1455), 'les travaux : un pluriel'),
    ex(E(1459), 'à la fin de la phrase'),
    ex(E(1466), 'un nom avec un complément'),
    ex(E(1468), 'à Dakar : les difficultés'),
    ex(E(1405), 'au début, avec une virgule'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['malgre'],
};

const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Un nom ou une phrase',
  groups: [
    grp('Malgré ou bien que', [
      it(E(1453), 'un nom : malgré'),
      it(E(1443), 'une phrase : bien que'),
      it(E(1405), 'un nom : malgré'),
      it(E(1404), 'une phrase : bien que'),
    ], chk(
      '« ... la pluie, la fête continue. »',
      ['Bien que', 'Malgré'], 1,
      'La pluie est un nom : malgré. EN: a noun, so malgré.')),
    grp('Même sens, trois outils', [
      it(E(1441), 'même si + indicatif'),
      it(E(1434), 'bien que + subjonctif'),
      it(E(1452), 'malgré + nom'),
      it(E(1460), 'malgré + nom'),
    ], chk(
      'Laquelle ne demande ni indicatif ni subjonctif ?',
      ["même s'il fait froid", "bien qu'il fasse froid", 'malgré le froid'], 2,
      "Malgré n'a pas de verbe du tout. EN: malgré has no verb at all.")),
    ctl('Le texte soigné', 'Tu écris un rapport. « ... critiques, la ville garde son projet. »',
      ['Malgré de', 'En dépit des'], 1,
      'En dépit de garde de ; malgré ne le prend jamais. EN: en dépit de keeps de; malgré never does.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['malgre', 'registre'],
};

/** TRAP, stepped: despite of, and malgré with a clause. */
const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Malgré, sans de',
  rule: {
    title: 'Malgré, sans de, sans verbe',
    body: "Malgré prend un nom, jamais de, jamais une phrase. Pour une phrase entière, reviens à bien que ou à même si. EN: no de after malgré, and no clause.",
  },
  cards: [
    { promptLabel: 'malgré de', promptSound: 'Malgré de la pluie, la fête continue.', fr: fr(E(1453)), ipa: ipaOf(E(1453)), tip: 'Malgré, puis le nom avec son article : la pluie. EN: malgré + article + noun.' },
    { promptLabel: 'malgré + phrase', promptSound: 'Malgré il fait froid, les enfants jouent dehors.', fr: fr(E(1452)), ipa: ipaOf(E(1452)), tip: 'Pas de phrase après malgré. Le froid, un nom, oui. EN: a noun, not a clause.' },
    { promptLabel: 'malgré + infinitif', promptSound: 'Malgré être fatiguée, elle a fini son rapport.', fr: fr(E(1460)), ipa: ipaOf(E(1460)), tip: 'In spite of being tired : en français, un nom, la fatigue. EN: the noun, not the -ing form.' },
    { promptLabel: 'bien que + nom', promptSound: 'Bien que le bruit, je dors bien.', fr: fr(E(1465)), ipa: ipaOf(E(1465)), tip: 'Bien que attend une phrase. Avec un nom, c’est malgré. EN: bien que needs a clause.' },
    { promptLabel: 'en dépit sans de', promptSound: 'En dépit les critiques, la ville garde son projet.', fr: fr(E(1461)), ipa: ipaOf(E(1461)), tip: 'En dépit de garde toujours de : en dépit des critiques. EN: en dépit de keeps de.' },
    { promptLabel: 'malgré de + nom', promptSound: "Malgré de mes efforts, je n'ai pas trouvé de place.", fr: fr(E(1456)), ipa: ipaOf(E(1456)), tip: 'Malgré mes efforts, directement. EN: straight into the noun.' },
  ],
  drill: [
    { promptSay: '... la pluie, la fête continue.', opts: ['Malgré', 'Malgré de'], correct: 0 },
    { promptSay: '... il pleuve, la fête continue.', opts: ['Malgré', "Bien qu'"], correct: 1 },
    { promptSay: 'Il est venu malgré ... neige.', opts: ['la', 'de la'], correct: 0 },
    { promptSay: 'En dépit ... critiques, la ville garde son projet.', opts: ['les', 'des', 'de les'], correct: 1 },
    { promptSay: '... ses efforts, il a échoué.', opts: ['Bien que', 'Même si', 'Malgré'], correct: 2 },
    { promptSay: '... il fait froid, on sort.', opts: ["Même s'", 'Malgré'], correct: 0 },
    { promptSay: 'Malgré ..., elle a fini son rapport.', opts: ['être fatiguée', 'la fatigue'], correct: 1 },
    { promptSay: '... tout, je garde confiance.', opts: ['Malgré', 'Bien que', 'Même si'], correct: 0 },
  ],
  steps: STEPS('Malgré, sans de, sans verbe'),
  audio: REC('rec-b1-32-piege-malgre'),
  say: REFRAME,
  terms: ['malgre'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le nom', '« ... le froid, ils jouent dehors. »',
    ['Bien que', 'Malgré'], 1,
    'Le froid est un nom : malgré. EN: a noun, so malgré.'),
  ctl('Despite of', 'Faut-il de après malgré ?',
    ['Non, jamais.', 'Oui, devant un nom.'], 0,
    'Jamais : malgré le froid. EN: never.'),
  ctl('La phrase', 'Although it is raining, avec une phrase entière :',
    ['malgré il pleut', 'malgré la pluie', "bien qu'il pleuve"], 2,
    'Une phrase : bien que, et le subjonctif. EN: a clause needs bien que.'),
], ['malgre']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Malgré',
    opener: {
      line: "Pas de verbe, pas de subjonctif, juste un nom : ici tu apprends malgré, la forme la plus courte. EN: No verb, no subjunctive, just a noun: here you learn malgré, the shortest form.",
      imageRef: 'lessons/concession/act04.jpg',
    },
    sections: [],
    milestone: "Tu passes d'une phrase avec bien que à un nom avec malgré, sans jamais ajouter de. EN: You can turn a bien que clause into malgré plus a noun, never adding de.",
    estScreens: 32, restPoints: ['a4-exemples'],
  },
  sections: [A4_HISTOIRE, A4_MALGRE, A4_CONSTRUIRE, A4_EXEMPLES, A4_CHOISIR, A4_PIEGE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — POURTANT ET SES COUSINS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a written article where the written adverbs do their job. */
const A5_ARTICLE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-article',
  layer: 'core',
  questionsInModal: true,
  title: 'Le budget participatif',
  frSub: 'Un article, à Liège',
  text: ARTICLE_TEXT,
  glossary: [
    { word: 'Budget participatif', en: 'participatory budget', note: 'Les habitants choisissent comment dépenser une partie de l’argent de la ville.' },
    { word: 'en tête', en: 'in the lead', note: 'À la première place.' },
    { word: 'piste cyclable', en: 'cycle lane', note: 'Une voie réservée aux vélos.' },
    { word: 'Meuse', en: 'the Meuse', note: 'Le fleuve qui traverse Liège.' },
    { word: 'local', en: 'room, premises', note: 'Une salle, un espace pour une activité.' },
  ],
  questions: [
    { q: 'Le jardin sera-t-il prêt cet hiver ?', a: "Non : « il ne sera cependant pas prêt avant le printemps ». Cependant, après le verbe, apporte l'obstacle." },
    { q: 'Quel est le problème de la piste cyclable ?', a: "Son coût : « son coût reste néanmoins élevé »." },
    { q: 'Qu’est-ce qui surprend dans le vote des jeunes ?', a: 'Ils ont peu voté. Pourtant, deux projets les concernent directement.' },
    { q: 'Où sont placés cependant, néanmoins et toutefois ?', a: "Juste après le verbe : sera cependant, reste néanmoins, restent toutefois. C'est la place soignée, écrite." },
    { q: 'Ce texte est-il oral ou écrit ?', a: 'Écrit : un article. Cependant, néanmoins et toutefois le disent.' },
  ],
  audio: REC('rec-b1-32-article'),
  say: REFRAME,
  terms: ['adverbes', 'registre'],
};

const A5_ADVERBES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-adverbes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-adverbes',
  title: 'Quatre mots entre deux phrases',
  frSub: 'pourtant, cependant, néanmoins, toutefois',
  hint: 'Quatre cartes. Demande-toi : oral ou écrit ?',
  audio: REC('rec-b1-32-adverbes'),
  say: REFRAME,
  terms: ['adverbes'],
  cards: [
    {
      head: 'Partout, à l’oral aussi', label: 'pourtant',
      fr: fr(E(1469)), sub: rsOf(E(1469)),
      body: `${Cap(COORD_REF)} te l'a fait lire. Pourtant dit : on attendait le contraire. Il va à l'oral comme à l'écrit, souvent au début. EN: against expectation; spoken and written.`,
    },
    {
      head: 'Soigné', label: 'cependant',
      fr: fr(E(1472)), sub: rsOf(E(1472)),
      body: "Cependant veut dire however. Tu le trouves surtout à l'écrit : un article, un courriel, une lettre. EN: however, mostly written.",
    },
    {
      head: 'Écrit, et un peu plus fort', label: 'néanmoins',
      fr: fr(E(1473)), sub: rsOf(E(1473)),
      body: 'Néanmoins insiste : malgré ce qui précède. On ne le dit presque jamais entre amis. EN: nevertheless; hardly ever said among friends.',
    },
    {
      head: 'Écrit, avec une réserve', label: 'toutefois',
      fr: fr(E(1474)), sub: rsOf(E(1474)),
      body: 'Toutefois ajoute souvent une petite réserve, une condition. Très courant dans les avis et les annonces. EN: often adds a small proviso.',
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Au début, ou après le verbe',
  groups: [
    grp('Au début, avec une virgule', [
      it(E(1469), 'pourtant'),
      it(E(1472), 'cependant'),
      it(E(1473), 'néanmoins'),
      it(E(1486), 'pourtant'),
    ], chk(
      'Où se trouve le mot dans ces quatre phrases ?',
      ['à la toute fin', 'au début de la deuxième phrase'], 1,
      'Au début, avec une virgule après. EN: at the start, with a comma.')),
    grp('Juste après le verbe', [
      it(E(1475), 'il est cependant'),
      it(E(1477), 'il a pourtant'),
      it(E(1478), 'restent néanmoins'),
      it(E(1485), 'acceptent cependant'),
    ], chk(
      '« Il a pourtant oublié » : où est pourtant ?',
      ["entre l'auxiliaire et le participe", 'après le participe'], 0,
      'Comme beaucoup d’adverbes, entre a et oublié. EN: between the auxiliary and the participle.')),
    ctl('Et pourtant', "« Elle travaille beaucoup, et pourtant elle trouve du temps. » Et pourtant, c'est...",
      ['une erreur, un mot de trop', "très courant, à l'oral comme à l'écrit"], 1,
      'Et pourtant est une formule normale. EN: et pourtant is perfectly normal.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adverbes'],
};

const A5_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-tableau',
  layer: 'core',
  sheetId: 'sheet-adverbes',
  title: 'Six mots, deux registres',
  cols: ['Mot', "À l'oral", 'Place'],
  rows: [
    { cells: ['pourtant', 'oui', 'début ou après le verbe'], say: fr(E(1469)),
      detail: { title: 'pourtant', body: "Contre ce qu'on attendait. EN: against expectation.", say: fr(E(1477)) } },
    { cells: ['cependant', 'rarement', 'début ou après le verbe'], say: fr(E(1472)),
      detail: { title: 'cependant', body: 'Soigné, pour un texte. EN: careful, for a text.', say: fr(E(1475)) } },
    { cells: ['néanmoins', 'presque jamais', 'début ou après le verbe'], say: fr(E(1473)),
      detail: { title: 'néanmoins', body: 'Écrit, et il insiste. EN: written, emphatic.', say: fr(E(1478)) } },
    { cells: ['toutefois', 'rarement', 'début ou après le verbe'], say: fr(E(1474)),
      detail: { title: 'toutefois', body: 'Une réserve, souvent. EN: often a proviso.', say: fr(E(1479)) } },
    { cells: ['quand même', 'oui', 'fin ou après le verbe'], say: fr(E(1488)),
      detail: { title: 'quand même', body: "Il ferme la balance. Tu le verras à l'acte 6. EN: it closes the scales; act 6.", say: fr(E(1492)) } },
    { cells: ['par contre', 'oui', 'début'], say: fr(E(1542)),
      detail: { title: 'par contre', body: "Deux faits côte à côte. Tu le verras à l'acte 9. EN: two facts side by side; act 9.", say: fr(E(1547)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adverbes', 'registre'],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon registre',
  groups: [
    grp('Un message à un ami', [
      it(E(1484), 'pourtant : naturel'),
      it(E(1470), 'et pourtant'),
      it(E(1486), 'pourtant, au début'),
      it(E(1471), 'pourtant, après le verbe'),
    ], chk(
      "Un texto à ton ami : « Tu as raison. ..., je ne suis pas convaincu. »",
      ['Néanmoins', 'Pourtant'], 1,
      "Pourtant va partout. Néanmoins sonnerait comme un rapport. EN: pourtant for a friend.")),
    grp('Un article ou une lettre', [
      it(E(1472), 'cependant'),
      it(E(1473), 'néanmoins'),
      it(E(1474), 'toutefois'),
      it(E(1479), 'toutefois, après un point-virgule'),
    ], chk(
      "Un article : « Le loyer a augmenté. ..., les locataires restent. »",
      ['Cependant', 'Quand même', 'Par contre'], 0,
      "Cependant, au début : la forme écrite. EN: cependant for a written text.")),
    ctl('Le lien', 'Pourtant relie...',
      ['un nom et une phrase', 'deux phrases entières'], 1,
      'Deux phrases complètes : le verbe ne change pas. EN: two whole sentences.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'adverbes'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre pièges du registre',
  errors: [
    {
      wrong: 'Tu as raison. Néanmoins, je ne suis pas convaincu. (texto à un ami)',
      right: fr(E(1484)),
      why: "Rien de faux dans la grammaire. Mais dans un texto à un ami, néanmoins sonne comme un rapport. EN: correct, but far too formal for a friend.",
    },
    {
      wrong: "Pourtant il habite loin, il n'est jamais en retard.",
      right: fr(E(1469)),
      why: "En anglais, although peut ouvrir la phrase avec l'obstacle. Pourtant vient APRÈS l'obstacle, devant ce qui surprend. EN: pourtant comes after the obstacle.",
    },
    {
      wrong: 'Le loyer a augmenté. Cependant que les locataires restent.',
      right: fr(E(1472)),
      why: "Tu as pensé à bien que. Cependant relie deux phrases et ne prend pas que. EN: cependant takes no que.",
    },
    {
      wrong: 'Le loyer a augmenté, mais cependant les locataires restent.',
      right: fr(E(1472)),
      why: "Mais cependant dit deux fois la même chose. À l'oral, mais pourtant passe ; à l'écrit, un seul mot suffit. EN: one linking word is enough in writing.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adverbes', 'registre'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris les deux phrases et le mot entre elles',
  frSub: 'pourtant, cependant, toutefois',
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['adverbes'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le registre', 'Lequel se dit entre amis ?',
    ['néanmoins', 'pourtant'], 1,
    'Pourtant va partout. EN: pourtant, everywhere.'),
  ctl('La place', '« Le projet est ambitieux ; il est ... réaliste. »',
    ['cependant', 'cependant que', 'malgré'], 0,
    'Cependant, juste après le verbe. EN: right after the verb.'),
  ctl("L'ordre", 'Pourtant vient...',
    ["après l'obstacle, devant la surprise", "devant l'obstacle"], 0,
    "D'abord l'obstacle, puis pourtant et la surprise. EN: obstacle first, then pourtant."),
], ['adverbes']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Pourtant et ses cousins',
    opener: {
      line: "Un article, une lettre, un texto : ici tu apprends pourtant et ses cousins écrits, et où les mettre. EN: An article, a letter, a text message: here you learn pourtant and its written cousins, and where to put them.",
      imageRef: 'lessons/concession/act05.jpg',
    },
    sections: [],
    milestone: "Tu dis pourtant à l'oral, cependant ou toutefois à l'écrit, et tu les places bien. EN: You use pourtant in speech, cependant or toutefois in writing, and place them well.",
    estScreens: 36, restPoints: ['a5-tableau'],
  },
  sections: [A5_ARTICLE, A5_ADVERBES, A5_CONSTRUIRE, A5_TABLEAU, A5_CHOISIR, A5_ERREURS, A5_DICTEE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — QUAND MÊME
 *
 *  b1.24 owns quand même and tout de même as emplois of même; b1.23 met tout
 *  de même as a fixed expression. Cited, then placed on the scales: the
 *  word that CLOSES the sentence where pourtant opens it.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La fin de la phrase',
  frSub: 'Écoute où tombe quand même',
  lines: [
    ln(E(1487)), ln(E(1488)), ln(E(1494)), ln(E(1495)),
    ln(E(1490)), ln(E(1497)), ln(E(1492)), ln(E(1501)),
  ],
  questions: [
    { q: 'Première phrase : sont-ils venus ?', opts: ['Oui, malgré le froid.', 'Non, il faisait trop froid.'], correct: 0, why: 'Quand même : le froid ne gagne pas. EN: the cold did not win.' },
    { q: 'Troisième et quatrième phrases : même sens ?', opts: ['Non.', 'Oui : pourtant au début, quand même à la fin.'], correct: 1, why: 'La même balance, fermée à deux endroits. EN: same scales, two places.' },
    { q: 'Cinquième phrase : quel registre ?', opts: ['très familier', 'plus soigné : tout de même', 'une erreur'], correct: 1, why: 'Tout de même : un ton plus haut. EN: a notch more careful.' },
    { q: 'Sixième phrase : de toute façon veut dire...', opts: ['peu importe, dans tous les cas', "malgré l'obstacle"], correct: 0, why: 'De toute façon : pas de balance, pas d’obstacle. EN: in any case.' },
    { q: 'Septième phrase : où est quand même ?', opts: ['à la fin', 'juste après le verbe', 'au début'], correct: 1, why: 'Je suis quand même content : après le verbe. EN: after the verb.' },
  ],
  audio: REC('rec-b1-32-quandmeme-ecoute'),
  say: REFRAME,
  terms: ['concession'],
};

const A6_QUANDMEME: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-quandmeme',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-adverbes',
  title: 'Quand même ferme la balance',
  frSub: 'quand même, tout de même',
  hint: 'Quatre cartes. Regarde la fin de la phrase.',
  audio: REC('rec-b1-32-quandmeme'),
  say: REFRAME,
  terms: ['concession', 'registre'],
  cards: [
    {
      head: 'À la fin', label: Cap(MEME_REF),
      fr: fr(E(1495)), sub: rsOf(E(1495)),
      body: `« ${B124_REFRAME} » Mais ouvre la balance, quand même la ferme. EN: mais opens the scales, quand même closes them.`,
    },
    {
      head: 'Après le verbe', label: 'quand même',
      fr: fr(E(1492)), sub: rsOf(E(1492)),
      body: "Quand même peut aussi suivre le verbe conjugué ou l'auxiliaire : j'ai quand même trouvé. EN: after the conjugated verb or the auxiliary.",
    },
    {
      head: 'Un peu plus soigné', label: 'tout de même',
      fr: fr(E(1490)), sub: rsOf(E(1490)),
      body: `Tout de même dit la même chose, un ton plus haut. ${Cap(TOUT_REF)} te l'a montré comme un bloc. EN: the same, a notch more careful.`,
    },
    {
      head: 'Anyway, deux sens', label: 'de toute façon',
      fr: fr(E(1497)), sub: rsOf(E(1497)),
      body: "Anyway veut parfois dire peu importe : de toute façon. Quand même, lui, a toujours un obstacle avant. EN: anyway meaning in any case is de toute façon.",
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Pourtant au début, quand même à la fin',
  groups: [
    grp('Deux façons de fermer', [
      it(E(1494), 'pourtant, au début'),
      it(E(1495), 'quand même, à la fin'),
      it(E(1415), 'pourtant, devant la décision'),
      it(E(1488), 'quand même, après la décision'),
    ], chk(
      'Pourtant et quand même disent-ils la même chose ici ?',
      ['Oui, à deux places différentes.', 'Non.'], 0,
      'Même balance : pourtant ouvre, quand même ferme. EN: same scales, two positions.')),
    grp('Au passé composé', [
      it(E(1498), "entre j'ai et trouvé"),
      it(E(1501), 'à la toute fin'),
      it(E(1491), 'tout de même, entre a et fini'),
      it(E(1487), 'à la fin, après venus'),
    ], chk(
      "« J'ai ... trouvé du pain. » Où va quand même ?",
      ['entre ai et trouvé', 'après pain seulement'], 0,
      'Entre l’auxiliaire et le participe, ou à la fin. EN: between auxiliary and participle, or at the end.')),
    ctl('Mais et quand même', "« Il pleut, mais on sort quand même. » Mais et quand même ensemble, c'est...",
      ['trop, un des deux suffit', 'très naturel'], 1,
      'Mais ouvre, quand même ferme : c’est la phrase la plus courante. EN: the most common pattern.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concession'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  title: 'Quand même, dans la vie',
  examples: [
    ex(E(1489), 'loin, et tu y vas'),
    ex(E(1492), 'content, malgré tout'),
    ex(E(1491), 'tout de même : malade, et le travail fini'),
    ex(E(1496), `un reproche doux, vu dans ${MEME_REF}`),
    ex('fr.a2.famille.012', 'malade, et venue au mariage'),
    ex(E(1502), 'long, et tu le lis'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concession'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quand même ou de toute façon',
  groups: [
    grp('Un obstacle avant', [
      it(E(1487), 'le froid'),
      it(E(1489), 'la distance'),
      it(E(1498), 'le magasin fermé'),
      it(E(1501), 'le retard'),
    ], chk(
      "« C'est loin, mais j'y vais ... . »",
      ['quand même', 'de toute façon'], 0,
      'Un obstacle, puis le résultat : quand même. EN: an obstacle, so quand même.')),
    grp('Quel registre', [
      it(E(1490), 'tout de même : soigné'),
      it(E(1491), 'tout de même, après le verbe'),
      it(E(1495), 'quand même : partout'),
      it(E(1492), 'quand même, après le verbe'),
    ], chk(
      'Un courriel poli au propriétaire : « Il pleut. Nous sortons ... . »',
      ['de toute façon', 'tout de même', 'quand même pas'], 1,
      'Tout de même, pour un ton soigné. EN: tout de même for a careful tone.')),
    ctl('Anyway', "« Je ne sais pas si j'ai le temps. Anyway, je ne peux pas venir. »",
      ['De toute façon', 'Quand même'], 0,
      'Ici, anyway veut dire peu importe : de toute façon. EN: anyway here means in any case.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concession', 'registre'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre pièges de la fin',
  errors: [
    {
      wrong: 'Quand même, il pleut, on sort.',
      right: fr(E(1495)),
      why: "Pourtant ouvre la phrase ; tu as mis quand même à sa place. Au début, « Quand même ! » devient un reproche. EN: at the start, quand même turns into a reproach.",
    },
    {
      wrong: "Je ne sais pas si j'ai le temps. Quand même, je ne peux pas venir.",
      right: "Je ne sais pas si j'ai le temps. De toute façon, je ne peux pas venir.",
      why: 'Anyway a deux sens en anglais. Sans obstacle avant, c’est de toute façon. EN: with no obstacle before it, anyway is de toute façon.',
    },
    {
      wrong: 'Il pleut, mais on sort même.',
      right: fr(E(1495)),
      why: 'Même seul veut dire even. Il faut les deux mots : quand même. EN: même alone means even.',
    },
    {
      wrong: "C'est loin, mais j'y vais tout même.",
      right: "C'est loin, mais j'y vais tout de même.",
      why: 'Tout de même garde de : trois mots. EN: tout de même keeps de.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concession'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La place', 'Quand même se met souvent...',
    ['à la fin', 'au début'], 0,
    'À la fin, ou après le verbe. EN: at the end, or after the verb.'),
  ctl('Anyway', 'Sans obstacle avant, anyway se dit...',
    ['de toute façon', 'quand même'], 0,
    'De toute façon : peu importe. EN: in any case.'),
  ctl('Le registre', 'Le plus soigné des trois :',
    ['quand même', 'tout de même', 'mais'], 1,
    'Tout de même, un ton plus haut. EN: tout de même.'),
], ['concession']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Quand même',
    opener: {
      line: "Il fait froid, et vous venez quand même : ici tu apprends à fermer la balance à la fin de la phrase. EN: It is cold and you come anyway: here you learn to close the scales at the end of the sentence.",
      imageRef: 'lessons/concession/act06.jpg',
    },
    sections: [],
    milestone: "Tu fermes une phrase avec quand même ou tout de même, et tu ne le confonds plus avec de toute façon. EN: You can close a sentence with quand même or tout de même, and no longer confuse it with de toute façon.",
    estScreens: 30, restPoints: ['a6-exemples'],
  },
  sections: [A6_ECOUTE, A6_QUANDMEME, A6_CONSTRUIRE, A6_EXEMPLES, A6_CHOISIR, A6_ERREURS, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — AVOIR BEAU
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Les clés introuvables',
  frSub: 'Sept heures quarante, un lundi',
  setting: 'Léa doit partir au travail, et ses clés ont disparu. Sa colocataire, Chloé, l’aide à chercher dans tout l’appartement.',
  bubbles: [
    { from: 'narrator', fr: 'Le manteau, le sac, le canapé : Léa a déjà tout retourné.', en: 'The coat, the bag, the sofa: Léa has already turned everything over.' },
    { from: 'coach', fr: 'Regarde encore dans ton manteau, sous le canapé, dans la cuisine.', en: 'Look again in your coat, under the sofa, in the kitchen.' },
    { from: 'user', fr: fr(E(1506)), en: src(E(1506)).en, warn: 'avoir beau : tout l’effort, aucun résultat' },
    { from: 'coach', fr: 'Appelle le propriétaire. Il a un double.', en: 'Call the landlord. He has a spare.' },
    { from: 'user', fr: "J'ai beau l'appeler, il ne répond pas.", en: 'However often I call him, he does not answer.', warn: 'avoir se conjugue, appeler reste à l’infinitif' },
    { from: 'coach', fr: 'Tu as beau t’énerver, ça ne les fera pas revenir.', en: 'Getting worked up will not bring them back.', warn: 'tu as beau + infinitif' },
    { from: 'narrator', fr: 'Les clés étaient dans la porte, dehors, depuis la veille.', en: 'The keys were in the door, outside, since the day before.' },
  ],
  closing: { fr: "Avoir beau : tout l'effort est sur un plateau, et il ne pèse rien.", en: 'Avoir beau: all the effort is on one pan, and it weighs nothing.' },
  audio: REC('rec-b1-32-cles'),
  say: REFRAME,
  terms: ['avoirbeau'],
};

const A7_BEAU: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-beau',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-malgre',
  title: 'Avoir beau, puis le résultat',
  frSub: 'avoir beau + infinitif',
  hint: 'Quatre cartes. Cherche ce qui change et ce qui ne bouge pas.',
  audio: REC('rec-b1-32-beau'),
  say: REFRAME,
  terms: ['avoirbeau'],
  cards: [
    {
      head: "L'effort, puis le résultat", label: 'avoir beau',
      fr: fr(E(1503)), sub: rsOf(E(1503)),
      body: "D'abord l'effort, avec avoir beau. Ensuite le résultat, qui ne change pas. EN: first the effort, then the result that does not change.",
    },
    {
      head: 'Seul avoir bouge', label: 'la conjugaison',
      fr: "j'ai beau · tu as beau · elle avait beau",
      sub: '[zhay BOH] · [tü a BOH] · [eh-la-veh BOH]',
      body: 'Avoir se conjugue à tous les temps. Beau ne change jamais, même avec elle ou nous. EN: only avoir changes; beau never agrees.',
    },
    {
      head: "L'infinitif reste", label: '+ infinitif',
      fr: fr(E(1513)), sub: rsOf(E(1513)),
      body: "Le verbe après beau reste à l'infinitif, même être : elle a beau être petite. EN: the next verb stays in the infinitive.",
    },
    {
      head: 'Rien à voir avec la beauté', label: 'un jeu de mots',
      fr: fr(E(1518)), sub: rsOf(E(1518)),
      body: "Il a beau faire beau : le premier beau ne parle pas du temps. C'est l'effort qui ne sert à rien. EN: the first beau has nothing to do with beauty.",
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Avoir à tous les temps',
  groups: [
    grp('Le temps change', [
      it(E(1503), 'présent'),
      it(E(1507), 'imparfait'),
      it(E(1512), 'imparfait'),
      it(E(1519), 'futur'),
    ], chk(
      "Dans ces quatre phrases, qu'est-ce qui change ?",
      ["le temps d'avoir", 'le mot beau'], 0,
      'Avoir se conjugue ; beau ne bouge pas. EN: avoir changes, beau does not.')),
    grp('Puis le résultat', [
      it(E(1504), 'je ne change pas d’avis'),
      it(E(1505), 'il rate le bus'),
      it(E(1514), 'je ne comprends rien'),
      it(E(1510), 'les gens se garent là'),
    ], chk(
      '« Il a beau courir, il rate toujours le bus. » Attrape-t-il le bus ?',
      ['Oui, grâce à sa course.', 'Non, jamais.'], 1,
      "L'effort ne pèse rien : le bus part. EN: the effort weighs nothing."),
    ),
    ctl('Le sujet', "« Ils ont beau dire, ce quartier est agréable. » Les gens disent...",
      ["que le quartier n'est pas agréable", 'que le quartier est agréable', 'rien du tout'], 0,
      'Ils critiquent, et le quartier reste agréable : leurs paroles ne pèsent rien. EN: they criticise; it changes nothing.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avoirbeau'],
};

const A7_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a7-cartes',
  layer: 'core',
  title: 'Huit cartes pour however much',
  cards: [
    { front: 'however hard I try', back: "j'ai beau essayer", say: fr(E(1503)) },
    { front: 'however much you insist', back: 'tu as beau insister', say: fr(E(1504)) },
    { front: 'no matter how fast he runs', back: 'il a beau courir', say: fr(E(1505)) },
    { front: 'however hard we look', back: 'nous avons beau chercher', say: fr(E(1506)) },
    { front: 'no matter how much she explained', back: 'elle avait beau expliquer', say: fr(E(1507)) },
    { front: 'whatever they say', back: 'ils ont beau dire', say: fr(E(1508)) },
    { front: 'small as she is', back: 'elle a beau être petite', say: fr(E(1513)) },
    { front: 'however much you protest', back: 'tu auras beau protester', say: fr(E(1519)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avoirbeau'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Avoir beau ou même si',
  groups: [
    grp("L'effort ou le fait", [
      it(E(1503), 'avoir beau : un effort'),
      it(E(1517), 'même si : un fait'),
      it(E(1520), "avoir beau : dix ans d'hiver"),
      it(E(1433), "même si : l'hiver"),
    ], chk(
      "« J'ai beau essayer » et « même si j'essaie » :",
      ['presque le même sens, avoir beau insiste sur l’effort', 'deux sens opposés'], 0,
      "Même balance ; avoir beau met tout le poids sur l'effort inutile. EN: avoir beau stresses the wasted effort.")),
    grp('Quel verbe se conjugue', [
      it(E(1511), 'vous avez'),
      it(E(1516), 'elle a'),
      it(E(1506), 'nous avons'),
      it(E(1512), "j'avais"),
    ], chk(
      '« Nous ... beau chercher. »',
      ['cherchons', 'sommes', 'avons'], 2,
      'Avoir, conjugué avec nous : avons. EN: avons.')),
    ctl('Le résultat', '« Tu auras beau protester, ... »',
      ['tu as raison', 'la décision est prise'], 1,
      "Le résultat ne change pas : la décision reste. EN: the result stands."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avoirbeau', 'concession'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Avoir, beau, infinitif',
  rule: {
    title: 'Avoir, beau, infinitif',
    body: "Avoir se conjugue, beau ne bouge pas, le verbe suivant reste à l'infinitif. Jamais être beau, jamais belle. Et toujours un résultat après. EN: conjugate avoir; beau and the infinitive never change.",
  },
  cards: [
    { promptLabel: 'être au lieu d’avoir', promptSound: 'Je suis beau essayer, ça ne marche pas.', fr: fr(E(1503)), ipa: ipaOf(E(1503)), tip: "C'est avoir : j'ai beau. EN: avoir, not être." },
    { promptLabel: 'beau accordé', promptSound: "Elle a belle crier, personne ne l'entend.", fr: fr(E(1516)), ipa: ipaOf(E(1516)), tip: "Beau ne s'accorde jamais. EN: beau never agrees." },
    { promptLabel: 'verbe conjugué', promptSound: "Tu as beau insistes, je ne changerai pas d'avis.", fr: fr(E(1504)), ipa: ipaOf(E(1504)), tip: "Après beau, l'infinitif : insister. EN: infinitive after beau." },
    { promptLabel: 'beaux au pluriel', promptSound: 'Nous avons beaux chercher, nous ne trouvons pas les clés.', fr: fr(E(1506)), ipa: ipaOf(E(1506)), tip: 'Même avec nous, beau reste beau. EN: no plural.' },
    { promptLabel: 'pas de résultat', promptSound: "J'avais beau me dépêcher.", fr: fr(E(1512)), ipa: ipaOf(E(1512)), tip: "Avoir beau attend un résultat : j'étais toujours en retard. EN: avoir beau needs its result." },
    { promptLabel: 'infinitif oublié', promptSound: 'Elle a beau petite, elle court très vite.', fr: fr(E(1513)), ipa: ipaOf(E(1513)), tip: 'Avec un adjectif, garde être : elle a beau être petite. EN: keep être before the adjective.' },
  ],
  drill: [
    { promptSay: "J'... beau essayer, ça ne marche pas.", opts: ['ai', 'suis'], correct: 0 },
    { promptSay: 'Elle a ... crier.', opts: ['belle', 'beau'], correct: 1 },
    { promptSay: "Tu as beau ..., je ne change pas d'avis.", opts: ['insister', 'insistes', 'insisté'], correct: 0 },
    { promptSay: 'Nous avons ... chercher.', opts: ['beaux', 'beau'], correct: 1 },
    { promptSay: "Elle avait beau expliquer, personne ne l'... .", opts: ['écouter', 'écoute', 'écoutait'], correct: 2 },
    { promptSay: 'Elle a beau ... petite.', opts: ['être', 'est'], correct: 0 },
    { promptSay: 'Ils ... beau dire, ce quartier est agréable.', opts: ['sont', 'disent', 'ont'], correct: 2 },
    { promptSay: 'Tu ... beau protester, la décision est prise.', opts: ['auras', 'seras'], correct: 0 },
  ],
  steps: STEPS('Avoir, beau, infinitif'),
  audio: REC('rec-b1-32-piege-beau'),
  say: REFRAME,
  terms: ['avoirbeau'],
};

const A7_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a7-dictee',
  layer: 'core',
  title: "Écris l'effort et le résultat",
  frSub: 'avoir beau',
  itemIds: dicteeFor(7),
  audio: AUDIO,
  say: REFRAME,
  terms: ['avoirbeau'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le verbe', "Dans « elle a beau crier », qu'est-ce qui se conjugue ?",
    ['avoir', 'crier', 'beau'], 0,
    'Avoir, et lui seul. EN: only avoir.'),
  ctl("L'accord", '« Elles ont ... chercher. »',
    ['belles', 'beau'], 1,
    'Beau ne change jamais. EN: beau never changes.'),
  ctl('Le sens', "« J'ai beau essayer, ça ne marche pas. » L'effort a-t-il servi ?",
    ['Non.', 'Oui.'], 0,
    "Non : c'est tout le sens d'avoir beau. EN: no, that is the point."),
], ['avoirbeau']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Avoir beau',
    opener: {
      line: "Tu cherches, tu cherches, et rien : ici tu apprends avoir beau, l'effort qui ne pèse rien. EN: You search and search, and nothing: here you learn avoir beau, the effort that weighs nothing.",
      imageRef: 'lessons/concession/act07.jpg',
    },
    sections: [],
    milestone: "Tu dis avoir beau à tous les temps, avec un infinitif et un résultat. EN: You can use avoir beau in any tense, with an infinitive and a result.",
    estScreens: 36, restPoints: ['a7-cartes'],
  },
  sections: [A7_HISTOIRE, A7_BEAU, A7_CONSTRUIRE, A7_CARTES, A7_CHOISIR, A7_PIEGE, A7_DICTEE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — ALORS QUE, TANDIS QUE
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Comparer, ou dire le moment',
  frSub: 'Écoute ce que fait le mot du milieu',
  lines: [
    ln(E(1521)), ln(E(1527)), ln(E(1522)), ln(E(1530)),
    ln(E(1524)), ln(E(1529)), ln(E(1535)), ln(E(1526)),
  ],
  questions: [
    { q: 'Première phrase : Dakar et Sherbrooke ont-elles le même temps en janvier ?', opts: ['Oui.', 'Non, deux faits opposés.'], correct: 1, why: 'Alors que compare : chaud d’un côté, moins vingt de l’autre. EN: a contrast.' },
    { q: 'Deuxième phrase : une différence, ou deux choses en même temps ?', opts: ['en même temps', 'une différence'], correct: 0, why: 'Pendant que : le moment, pas la différence. EN: time, not contrast.' },
    { q: 'Cinquième phrase : il neigeait. Est-il sorti avec un manteau ?', opts: ['Non, et c’est surprenant.', 'Oui.'], correct: 0, why: 'Alors que peut dire even though : la surprise. EN: even though.' },
    { q: 'Quatrième phrase : tandis que veut dire ici...', opts: ['malgré', 'alors que, pour comparer', 'pendant que'], correct: 2, why: 'Tu travailles, je fais les courses : en même temps. EN: while, as time.' },
    { q: 'Sixième phrase : monsieur Bélanger vient-il à vélo ?', opts: ['Non, en voiture.', 'Oui.'], correct: 0, why: 'Léa à vélo, lui en voiture : deux faits côte à côte. EN: two facts side by side.' },
  ],
  audio: REC('rec-b1-32-alorsque-ecoute'),
  say: REFRAME,
  terms: ['opposition'],
};

const A8_ALORSQUE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-alorsque',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-carte',
  title: 'Deux faits, deux plateaux égaux',
  frSub: 'alors que, tandis que',
  hint: 'Quatre cartes. Aucun fait ne gagne.',
  audio: REC('rec-b1-32-alorsque'),
  say: REFRAME,
  terms: ['opposition', 'indicatif'],
  cards: [
    {
      head: 'Deux faits côte à côte', label: 'alors que',
      fr: fr(E(1522)), sub: rsOf(E(1522)),
      body: "Alors que compare deux faits de même poids : mon frère d'un côté, moi de l'autre. Aucun n'empêche l'autre. EN: two facts of equal weight.",
    },
    {
      head: 'Plus soigné', label: 'tandis que',
      fr: fr(E(1526)), sub: rsOf(E(1526)),
      body: "Tandis que fait la même chose, surtout à l'écrit. Il peut aussi dire pendant que. EN: same job, more written; it can also mean while.",
    },
    {
      head: 'Et parfois une surprise', label: 'alors que = even though',
      fr: fr(E(1524)), sub: rsOf(E(1524)),
      body: 'Alors que peut aussi dire even though : il neigeait, et il est sorti sans manteau. EN: alors que can also mean even though.',
    },
    {
      head: "L'indicatif, toujours", label: 'le mode',
      fr: fr(E(1535)), sub: rsOf(E(1535)),
      body: "Après alors que et tandis que, l'indicatif, à tous les temps. Jamais de subjonctif. EN: always the indicative.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Comparer ou surprendre',
  groups: [
    grp('Comparer', [
      it(E(1521), 'deux villes'),
      it(E(1529), 'deux habitudes'),
      it(E(1531), 'deux avis'),
      it(E(1534), 'deux façons de dire'),
    ], chk(
      'Dans ces phrases, alors que dit...',
      ['la différence', 'le moment'], 0,
      'La différence entre deux faits. EN: the difference.')),
    grp('Surprendre', [
      it(E(1524), 'il neigeait'),
      it(E(1535), "elle n'avait pas le temps"),
      it(E(1525), 'un reproche'),
    ], chk(
      "« Elle a accepté alors qu'elle n'avait pas le temps. » Alors que dit ici...",
      ['while, au même moment', 'even though'], 1,
      "Elle n'avait pas le temps, et elle a accepté : la surprise. EN: even though.")),
    ctl('Le mode', "« Alors qu'il ... , il est sorti sans manteau. » (neiger)",
      ['neigerait', 'neigeait', 'neige demain'], 1,
      "L'indicatif : neigeait. EN: indicative."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Alors que, tandis que, dans la vie',
  examples: [
    ex(E(1523), 'tandis que, dans un texte'),
    ex(E(1526), 'tandis que : deux courbes'),
    ex(E(1530), 'tandis que : ici, le temps'),
    ex(E(1534), 'alors que : deux pays, deux mots'),
    ex(E(1536), 'alors que moi : le contraste avec toi'),
    ex(E(1537), 'tandis que : deux groupes à la consultation'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Alors que ou pendant que',
  groups: [
    grp('La différence ou le moment', [
      it(E(1527), 'pendant que : le moment'),
      it(E(1529), 'alors que : la différence'),
      it(E(1530), 'tandis que : le moment'),
      it(E(1522), 'alors que : la différence'),
    ], chk(
      '« ... tu cuisines, je mets la table. »',
      ['Pendant que', 'Alors que'], 0,
      'Deux choses au même moment : pendant que. EN: at the same time.')),
    grp('Deux côtés', [
      it(E(1531), 'deux avis'),
      it(E(1537), 'deux groupes'),
      it(E(1406), 'deux rues'),
      it(E(1521), 'deux villes'),
    ], chk(
      'Tu compares deux villes, par écrit :',
      ['pendant que', 'malgré', 'tandis que'], 2,
      'Tandis que compare, en style soigné. EN: tandis que compares.')),
    ctl('While', "« While Léa cycles, Mr Bélanger drives. » Tu compares. Tu dis...",
      ['alors que', 'pendant que'], 0,
      'While, pour comparer : alors que. EN: while as contrast.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'While a deux sens',
  rule: {
    title: 'While a deux sens',
    body: "While veut dire pendant que (le temps) ou alors que (la différence). Si tu compares, prends alors que ou tandis que. Après les deux, l'indicatif. EN: while as time is pendant que; while as contrast is alors que.",
  },
  cards: [
    { promptLabel: 'pendant que pour comparer', promptSound: 'Léa vient à vélo, pendant que monsieur Bélanger prend sa voiture.', fr: fr(E(1529)), ipa: ipaOf(E(1529)), tip: 'Tu compares deux habitudes, pas deux moments. EN: a contrast, not a time.' },
    { promptLabel: 'subjonctif après alors que', promptSound: "Elle a accepté alors qu'elle n'ait pas le temps.", fr: fr(E(1535)), ipa: ipaOf(E(1535)), tip: "Alors que n'est pas bien que : il garde l'indicatif. EN: alors que keeps the indicative." },
    { promptLabel: 'tandis sans que', promptSound: 'Les loyers montent, tandis les salaires restent les mêmes.', fr: fr(E(1526)), ipa: ipaOf(E(1526)), tip: 'Tandis que garde que. EN: tandis que keeps que.' },
    { promptLabel: 'pendant que pour comparer', promptSound: "À Dakar, il fait chaud en janvier, pendant qu'à Sherbrooke, il fait moins vingt.", fr: fr(E(1521)), ipa: ipaOf(E(1521)), tip: 'Deux villes comparées : alors que. EN: a contrast.' },
    { promptLabel: 'alors, tout seul', promptSound: "Mon frère adore l'hiver, alors moi, je le déteste.", fr: fr(E(1522)), ipa: ipaOf(E(1522)), tip: 'Alors seul veut dire so, donc. Pour comparer, alors que. EN: alors alone means so.' },
    { promptLabel: 'malgré pour une phrase', promptSound: 'Il est sorti sans manteau malgré il neigeait.', fr: fr(E(1524)), ipa: ipaOf(E(1524)), tip: 'Avec une phrase entière, alors que ; malgré veut un nom. EN: a clause needs alors que.' },
  ],
  drill: [
    { promptSay: 'Léa vient à vélo, ... monsieur Bélanger prend sa voiture.', opts: ['alors que', 'pendant que'], correct: 0 },
    { promptSay: '... tu cuisines, je mets la table.', opts: ['Alors que', 'Pendant que'], correct: 1 },
    { promptSay: "Elle a accepté alors qu'elle n'... pas le temps.", opts: ['aurait', 'avait'], correct: 1 },
    { promptSay: 'Les loyers montent, ... les salaires restent les mêmes.', opts: ['tandis que', 'tandis', 'malgré'], correct: 0 },
    { promptSay: "Mon frère adore l'hiver, ... moi, je le déteste.", opts: ['alors', 'donc', 'alors que'], correct: 2 },
    { promptSay: 'Il est sorti sans manteau ... il neigeait.', opts: ['malgré', "alors qu'"], correct: 1 },
    { promptSay: 'À Dakar, il fait chaud, ... à Sherbrooke, il fait froid.', opts: ["alors qu'", "pendant qu'"], correct: 0 },
    { promptSay: 'Tandis que la ville ..., les villages se vident.', opts: ['grandir', 'grandirait', 'grandit'], correct: 2 },
  ],
  steps: STEPS('While a deux sens'),
  audio: REC('rec-b1-32-piege-alorsque'),
  say: REFRAME,
  terms: ['opposition'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('While', 'Tu compares deux villes. While se dit...',
    ['pendant que', 'alors que'], 1,
    'Pour comparer, alors que. EN: alors que for contrast.'),
  ctl('Le mode', 'Après alors que :',
    ["l'indicatif", 'le subjonctif'], 0,
    "L'indicatif, toujours. EN: always the indicative."),
  ctl('Alors', '« Alors », tout seul, veut dire...',
    ['whereas', 'malgré', 'donc'], 2,
    'Alors seul : donc, so. EN: so.'),
], ['opposition']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Alors que, tandis que',
    opener: {
      line: "Janvier à Dakar, janvier à Sherbrooke : ici tu apprends à poser deux faits côte à côte. EN: January in Dakar, January in Sherbrooke: here you learn to set two facts side by side.",
      imageRef: 'lessons/concession/act08.jpg',
    },
    sections: [],
    milestone: "Tu compares avec alors que ou tandis que, et tu ne dis plus pendant que pour une différence. EN: You compare with alors que or tandis que, and no longer use pendant que for a contrast.",
    estScreens: 32, restPoints: ['a8-exemples'],
  },
  sections: [A8_ECOUTE, A8_ALORSQUE, A8_CONSTRUIRE, A8_EXEMPLES, A8_CHOISIR, A8_PIEGE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — GARDER OU EFFACER
 *
 *  par contre and en revanche keep both pans; au contraire empties the
 *  first; au lieu de swaps one weight for another. a2.08 met en revanche
 *  in a reading, as recognition; here it is chosen.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Deux appartements à Lausanne',
  frSub: 'Madame Favre fait visiter',
  setting: "Lausanne, un samedi matin. Tu cherches un appartement. Madame Favre, l'agente, t'en montre deux.",
  bubbles: [
    { from: 'narrator', fr: 'Premier appartement : au centre, trois pièces, une seule fenêtre sur cour.', en: 'First flat: in the centre, three rooms, a single window onto the courtyard.' },
    { from: 'coach', fr: 'Le premier est au centre, à deux pas de la gare.', en: 'The first one is in the centre, a stone’s throw from the station.' },
    { from: 'user', fr: 'Il est bien placé. Par contre, il est sombre.', en: 'It is well located. On the other hand, it is dark.', warn: 'par contre : les deux faits restent vrais' },
    { from: 'coach', fr: "Le deuxième, à Renens, n'est pas sombre, au contraire.", en: 'The second, in Renens, is not dark, quite the opposite.', warn: 'au contraire : après une négation' },
    { from: 'user', fr: fr(E(1543)), en: src(E(1543)).en, warn: 'en revanche : comme par contre, en plus soigné' },
    { from: 'coach', fr: 'Au lieu de choisir tout de suite, prenez le week-end pour y penser.', en: 'Instead of choosing right away, take the weekend to think about it.', warn: 'au lieu de + infinitif' },
    { from: 'narrator', fr: 'Tu notes tout. Par contre a gardé deux faits. Au contraire en a effacé un.', en: 'You note everything down. Par contre kept two facts. Au contraire wiped one out.' },
  ],
  closing: { fr: fr(E(1546)), en: src(E(1546)).en },
  audio: REC('rec-b1-32-lausanne'),
  say: REFRAME,
  terms: ['opposition', 'aulieu'],
};

const A9_OUTILS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-outils',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-adverbes',
  title: 'Garder, effacer, remplacer',
  frSub: 'par contre, en revanche, au contraire, au lieu de',
  hint: 'Quatre cartes. Que devient le premier fait ?',
  audio: REC('rec-b1-32-outils'),
  say: REFRAME,
  terms: ['opposition', 'aulieu'],
  cards: [
    {
      head: "À l'oral", label: 'par contre',
      fr: fr(E(1542)), sub: rsOf(E(1542)),
      body: "Par contre ajoute un fait de l'autre côté. Très courant à l'oral, et accepté à l'écrit de tous les jours. EN: adds a fact on the other side; everyday.",
    },
    {
      head: "À l'écrit", label: 'en revanche',
      fr: fr(E(1543)), sub: rsOf(E(1543)),
      body: `Même travail, plus soigné. ${Cap(REGISTRE_REF)} l'a dit : « ${B125_REFRAME} » EN: same job, more careful; neither is wrong.`,
    },
    {
      head: 'Le premier fait disparaît', label: 'au contraire',
      fr: fr(E(1545)), sub: rsOf(E(1545)),
      body: "Au contraire dit : ce qui précède est faux, c'est même l'inverse. Il suit presque toujours une phrase négative. EN: the first statement is false; the opposite is true.",
    },
    {
      head: "L'un à la place de l'autre", label: 'au lieu de',
      fr: fr(E(1538)), sub: rsOf(E(1538)),
      body: 'Au lieu de enlève une chose et met l’autre à sa place, avec un infinitif ou un nom. EN: one thing replaced by another.',
    },
  ],
};

const A9_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-tableau',
  layer: 'core',
  sheetId: 'sheet-adverbes',
  title: 'Que devient le premier fait',
  cols: ['Mot', 'Les deux faits', 'Registre'],
  rows: [
    { cells: ['par contre', 'restent vrais', "l'oral, le courant"], say: fr(E(1542)),
      detail: { title: 'par contre', body: 'Un autre fait, de l’autre côté. EN: another fact, other side.', say: fr(E(1547)) } },
    { cells: ['en revanche', 'restent vrais', "l'écrit"], say: fr(E(1543)),
      detail: { title: 'en revanche', body: 'Le même, en plus soigné. EN: the same, more careful.', say: fr(E(1548)) } },
    { cells: ['au contraire', 'le premier est faux', 'partout'], say: fr(E(1544)),
      detail: { title: 'au contraire', body: "Après une négation : c'est l'inverse. EN: after a negative, the opposite.", say: fr(E(1550)) } },
    { cells: ['au lieu de', "l'un remplace l'autre", 'partout'], say: fr(E(1538)),
      detail: { title: 'au lieu de', body: 'Puis un infinitif ou un nom. EN: then an infinitive or a noun.', say: fr(E(1540)) } },
    { cells: ['alors que', 'restent vrais', 'partout'], say: fr(E(1522)),
      detail: { title: 'alors que', body: "Deux faits dans une seule phrase, à l'indicatif. EN: two facts in one sentence.", say: fr(E(1529)) } },
    { cells: ['mais', 'restent vrais', 'partout'], say: fr(E(1402)),
      detail: { title: 'mais', body: `La base. ${Cap(COORD_REF)} le construit. EN: the base, built in lesson 30.`, say: fr(E(1412)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition', 'registre'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Au lieu de, par contre, en revanche',
  groups: [
    grp('Au lieu de, puis un infinitif', [
      it(E(1538), 'prendre'),
      it(E(1539), 'se plaindre'),
      it(E(1540), 'faire'),
      it(E(1549), 'attendre'),
    ], chk(
      'Après au lieu de, dans ces phrases :',
      ['un verbe conjugué', 'un infinitif'], 1,
      'Au lieu de finit par de : le verbe reste à l’infinitif. EN: infinitive after de.')),
    grp('Par contre, en revanche', [
      it(E(1542), 'par contre, à l’oral'),
      it(E(1547), 'par contre, dans une seule phrase'),
      it(E(1543), 'en revanche, à l’écrit'),
      it(E(1548), 'en revanche, dans un rapport'),
    ], chk(
      'Dans ces quatre phrases, le premier fait reste-t-il vrai ?',
      ['Non, il disparaît.', 'Oui, toujours.'], 1,
      'Les deux faits restent sur la balance. EN: both facts stay.')),
    ctl('Un nom', `« ${fr('fr.a1.jours-et-mois.123')} » Après au lieu de, il y a...`,
      ['un nom', 'un infinitif'], 0,
      'Jeudi : un nom. Au lieu de prend aussi un nom. EN: a noun works too.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aulieu', 'opposition'],
};

const A9_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a9-hacks',
  layer: 'core',
  title: 'Trois astuces pour ne plus hésiter',
  hacks: [
    { hack: 'Avant au contraire, cherche un ne ... pas.', why: "Au contraire suit presque toujours une négation : ce n'est pas cher, au contraire. Sans négation avant, c'est sans doute par contre. EN: no negative before it? You probably want par contre." },
    { hack: "À l'oral, par contre. Dans un texte, en revanche.", why: 'Les deux sont justes. En revanche fait plus soigné dans un courriel ou un avis. EN: both correct; en revanche reads more careful.' },
    { hack: 'Après au lieu de, un infinitif, comme après pour ou sans.', why: "Au lieu de finit par de : le verbe après reste à l'infinitif. EN: after de, the infinitive." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition', 'aulieu'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Garder ou effacer',
  groups: [
    grp('Deux faits vrais', [
      it(E(1400), 'par contre'),
      it(E(1547), 'par contre'),
      it(E(1548), 'en revanche'),
      it(E(1543), 'en revanche'),
    ], chk(
      "« Le quartier est calme. ... il n'y a pas de commerces. »",
      ['Au contraire,', 'Par contre,'], 1,
      'Le quartier reste calme : par contre. EN: both stay true.')),
    grp('Le contraire', [
      it(E(1544), 'pas fatigué'),
      it(E(1545), 'pas trop cher'),
      it(E(1550), "pas perdu d'argent"),
      it('fr.a1.mots-de-liaison.025', 'pas triste'),
    ], chk(
      '« Je ne suis pas fatigué, au contraire. » Je suis...',
      ['en pleine forme', 'très fatigué', 'un peu fatigué'], 0,
      'Au contraire : l’inverse de fatigué. EN: the opposite of tired.')),
    ctl('Le registre', 'Tu écris un avis soigné :',
      ['Par contre,', 'En revanche,'], 1,
      'Les deux sont justes ; en revanche fait plus soigné. EN: both correct; en revanche is more careful.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['opposition', 'registre'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre pièges du milieu',
  errors: [
    {
      wrong: 'Le centre est cher. Au contraire, la banlieue est abordable.',
      right: fr(E(1547)),
      why: "On the other hand, on the contrary : l'anglais a deux formules proches. Ici, le centre reste cher : c'est par contre. EN: the first fact stays true, so par contre.",
    },
    {
      wrong: 'Au lieu que prendre la voiture, prends le bus.',
      right: fr(E(1538)),
      why: 'Tu as pensé à bien que ou alors que. Au lieu de prend de, puis un infinitif. EN: au lieu de + infinitive.',
    },
    {
      wrong: 'Au lieu de prends la voiture, prends le bus.',
      right: fr(E(1538)),
      why: "Après de, l'infinitif : prendre. EN: infinitive after de.",
    },
    {
      wrong: 'Je ne prends pas de café. Je prends un thé au lieu.',
      right: 'Je ne prends pas de café. Je prends un thé à la place.',
      why: 'Instead, seul à la fin, se dit à la place. Au lieu de a toujours besoin de sa suite. EN: instead on its own is à la place.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aulieu', 'opposition'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('On the other hand', 'Le premier fait reste vrai. Tu dis...',
    ['au contraire', 'par contre'], 1,
    'Par contre garde les deux faits. EN: par contre.'),
  ctl('Au lieu de', '« Au lieu de ... , aide-moi. »',
    ['râler', 'râles', 'que râler'], 0,
    'Au lieu de + infinitif. EN: infinitive.'),
  ctl('Instead', '« Instead », seul, à la fin :',
    ['au lieu', 'à la place'], 1,
    'À la place. EN: à la place.'),
], ['opposition', 'aulieu']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Garder ou effacer',
    opener: {
      line: "Deux appartements, deux mots qui se ressemblent : ici tu apprends par contre, en revanche, au contraire et au lieu de. EN: Two flats, two words that look alike: here you learn par contre, en revanche, au contraire and au lieu de.",
      imageRef: 'lessons/concession/act09.jpg',
    },
    sections: [],
    milestone: "Tu gardes deux faits avec par contre ou en revanche, tu en effaces un avec au contraire, et tu remplaces avec au lieu de. EN: You keep both facts with par contre or en revanche, cancel one with au contraire, and swap with au lieu de.",
    estScreens: 36, restPoints: ['a9-tableau'],
  },
  sections: [A9_HISTOIRE, A9_OUTILS, A9_TABLEAU, A9_CONSTRUIRE, A9_HACKS, A9_CHOISIR, A9_ERREURS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — LA CARTE DES OUTILS
 *
 *  CARTE_RULE made visible: the same fact said five ways, sorted by what
 *  each tool carries, by register, then the English traps.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Une idée, cinq formes',
  frSub: 'Écoute ce qui suit chaque outil',
  lines: [
    ln(E(1557)), ln(E(1558)), ln(E(1559)), ln(E(1560)),
    ln(E(1495)), ln(E(1494)), ln(E(1570)), ln(E(1563)),
  ],
  questions: [
    { q: 'Les six premières phrases racontent-elles la même chose ?', opts: ['Oui : il pleut, et on sort.', 'Non, six situations.'], correct: 0, why: 'Même balance, six outils. EN: same scales, six tools.' },
    { q: "Troisième phrase : qu'entends-tu après bien qu'il ?", opts: ['pleut', 'pleuve'], correct: 1, why: 'Pleuve : le subjonctif après bien que. EN: subjunctive.' },
    { q: 'Quatrième phrase : que suit malgré ?', opts: ['un nom', 'une phrase', 'un infinitif'], correct: 0, why: 'La pluie : un nom. EN: a noun.' },
    { q: 'Septième phrase : fait-il beau ?', opts: ['Oui.', 'Non, on imagine.'], correct: 1, why: 'Imparfait après si, conditionnel ensuite : on imagine. EN: an imagined case.' },
    { q: 'Dernière phrase : although, à l’oral, devient...', opts: ['bien que', 'même si', 'quoique'], correct: 1, why: "Entre collègues, même si. EN: même si in speech." },
  ],
  audio: REC('rec-b1-32-carte-ecoute'),
  say: REFRAME,
  terms: ['balance'],
};

const A10_CARTE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-carte',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-carte',
  title: 'Ce que chaque outil porte',
  frSub: CARTE_RULE,
  hint: 'Quatre cartes. Regarde ce qui vient juste après le mot.',
  audio: REC('rec-b1-32-carte'),
  say: REFRAME,
  terms: ['indicatif', 'subjonctif'],
  cards: [
    {
      head: "Une phrase à l'indicatif", label: 'même si · alors que',
      fr: fr(E(1558)), sub: rsOf(E(1558)),
      body: "Même si, alors que, tandis que : sujet et verbe, comme d'habitude. EN: a normal clause.",
    },
    {
      head: 'Une phrase au subjonctif', label: 'bien que · quoique',
      fr: fr(E(1559)), sub: rsOf(E(1559)),
      body: `${Cap(SUBJ_DECL_REF)} te l'a appris : c'est l'expression qui décide. Ici, seuls bien que et quoique. EN: only bien que and quoique.`,
    },
    {
      head: 'Un nom ou un infinitif', label: 'malgré · au lieu de',
      fr: fr(E(1560)), sub: rsOf(E(1560)),
      body: 'Malgré prend un nom. Avoir beau et au lieu de prennent un infinitif. EN: malgré + noun; avoir beau and au lieu de + infinitive.',
    },
    {
      head: 'Une phrase entière', label: 'pourtant · quand même',
      fr: fr(E(1557)), sub: rsOf(E(1557)),
      body: `« ${CARTE_RULE} » Mais, pourtant, cependant, quand même, par contre : deux phrases complètes, le verbe ne change pas. EN: whole sentences; the verb does not change.`,
    },
  ],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-trier',
  layer: 'core',
  size: 'lg',
  title: 'Ce que chaque mot porte',
  groups: [
    grp('Un sujet et un verbe', [
      it(E(1558), 'même si : indicatif'),
      it(E(1559), 'bien que : subjonctif'),
      it(E(1564), 'alors que : indicatif'),
      it(E(1566), 'bien que : subjonctif'),
    ], chk(
      'Ces quatre outils sont suivis de...',
      ['un nom', 'un sujet et un verbe'], 1,
      'Une phrase : sujet et verbe. Seul le mode change. EN: a clause; only the mood changes.')),
    grp('Un nom ou un infinitif', [
      it(E(1560), 'malgré + nom'),
      it(E(1561), 'malgré + nom'),
      it(E(1569), 'au lieu de + infinitif'),
      it(E(1541), 'au lieu de + nom'),
    ], chk(
      '« Malgré ses conseils », « au lieu de choisir » :',
      ['un nom, puis un infinitif', 'deux phrases'], 0,
      'Pas de verbe conjugué après ces outils. EN: no conjugated verb.')),
    ctl('La carte', 'Quel outil demande le subjonctif ?',
      ['bien que', 'alors que', 'même si'], 0,
      'Bien que, et quoique. Les autres, non. EN: bien que and quoique only.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['indicatif', 'malgre'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-carte',
  title: 'La carte, en quatre points',
  points: [
    "Même si, alors que, tandis que : l'indicatif. EN: the indicative.",
    'Bien que, quoique : le subjonctif, et eux seuls. EN: the subjunctive, only these two.',
    'Malgré : un nom. Avoir beau, au lieu de : un infinitif. EN: a noun; an infinitive.',
    'Pourtant, cependant, quand même, par contre : deux phrases entières. EN: two whole sentences.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['balance', 'registre'],
};

const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bon outil pour le bon moment',
  groups: [
    grp("À l'oral", [
      it(E(1563), 'même si'),
      it(E(1567), 'par contre'),
      it(E(1557), 'mais'),
      it(E(1565), 'pourtant'),
    ], chk(
      "Tu parles à un collègue : « J'aime bien mon travail, ... le salaire est bas. »",
      ['quoique', 'même si'], 1,
      "À l'oral, même si. Quoique ferait très écrit. EN: même si in speech.")),
    grp("À l'écrit", [
      it(E(1566), 'bien que'),
      it(E(1568), 'en revanche'),
      it('fr.b1.tourisme.005', 'bien que, dans un avis'),
      it(E(1438), 'quoique'),
    ], chk(
      'Tu écris un avis soigné. Laquelle ?',
      ['Le coût est élevé ; en revanche, la qualité est remarquable.', "Ça coûte cher, par contre c'est solide."], 0,
      "En revanche et un vocabulaire soigné pour l'écrit. EN: the careful version for writing.")),
    ctl('Le sens', "« Même s'il faisait beau, je resterais ici. » Il fait...",
      ['beau', 'mauvais, ou on ne sait pas', 'chaud'], 1,
      'On imagine le beau temps : il ne fait pas beau. EN: an imagined case.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

/** TRAP, stepped: the three English calques, plus two mood slips. */
const A10_ANGLAIS: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-anglais',
  layer: 'core',
  swipe: true,
  title: "Trois pièges venus de l'anglais",
  rule: {
    title: 'Traduire, puis vérifier',
    body: "Despite n'a pas de of, et malgré n'a pas de de. Although n'est pas toujours bien que : à l'oral, c'est souvent même si. Even if devient même si, avec l'indicatif. EN: despite = malgré; although is often même si; even if + indicative.",
  },
  cards: [
    { promptLabel: 'despite of', promptSound: "Malgré de ses conseils, j'ai signé le bail.", fr: fr(E(1561)), ipa: ipaOf(E(1561)), tip: 'Despite, pas despite of : malgré, pas malgré de. EN: no of, no de.' },
    { promptLabel: 'despite + phrase', promptSound: 'Malgré il pleut, on sort.', fr: fr(E(1560)), ipa: ipaOf(E(1560)), tip: 'Avec une phrase : même si ou bien que. Avec un nom : malgré. EN: clause or noun.' },
    { promptLabel: 'even if + futur', promptSound: "Même si ce sera vrai, ce n'est pas une raison.", fr: fr(E(1562)), ipa: ipaOf(E(1562)), tip: "Even if, puis le présent, comme en anglais : même si c'est vrai. EN: present after even if." },
    { promptLabel: 'even if + subjonctif', promptSound: "Même s'il pleuve, on sort.", fr: fr(E(1558)), ipa: ipaOf(E(1558)), tip: "Même si ne demande pas de subjonctif : même s'il pleut. EN: no subjunctive." },
    { promptLabel: 'although, trop écrit', promptSound: "Quoique le salaire soit bas, j'aime bien mon travail. (à un collègue)", fr: fr(E(1563)), ipa: ipaOf(E(1563)), tip: 'Juste, mais très écrit. À l’oral, although se dit même si. EN: correct but bookish in speech.' },
    { promptLabel: 'bien que + indicatif', promptSound: "Bien qu'il est nouveau, il connaît bien le dossier.", fr: fr(E(1566)), ipa: ipaOf(E(1566)), tip: 'Si tu choisis bien que, le verbe suit : soit. EN: bien que, then the subjunctive.' },
  ],
  drill: [
    { promptSay: "... ses conseils, j'ai signé le bail.", opts: ['Malgré', 'Malgré de'], correct: 0 },
    { promptSay: "Even if it is true : même si c'... vrai.", opts: ['sera', 'est'], correct: 1 },
    { promptSay: "Although he is new : bien qu'il ... nouveau.", opts: ['est', 'soit', 'serait'], correct: 1 },
    { promptSay: 'À un collègue, although the pay is low : ... le salaire est bas.', opts: ['même si', 'quoique'], correct: 0 },
    { promptSay: 'Despite the rain : ... la pluie.', opts: ['bien que', 'malgré', 'même si'], correct: 1 },
    { promptSay: 'Although rain was forecast : ... on annonçait de la pluie.', opts: ["alors qu'", 'malgré'], correct: 0 },
    { promptSay: 'Instead of choosing : ... choisir.', opts: ['à la place', 'au lieu de'], correct: 1 },
    { promptSay: "Even if it were fine : même s'il ... beau.", opts: ['faisait', 'ferait', 'fera'], correct: 0 },
  ],
  steps: STEPS('Traduire, puis vérifier'),
  audio: REC('rec-b1-32-piege-anglais'),
  say: REFRAME,
  terms: ['malgre', 'indicatif'],
};

const A10_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-exemples',
  layer: 'core',
  title: 'Although, quatre maisons',
  examples: [
    ex(E(1563), "à l'oral : même si"),
    ex(E(1564), 'une surprise : alors que'),
    ex(E(1565), 'deux phrases : pourtant'),
    ex(E(1566), "à l'écrit : bien que"),
    ex('fr.b1.tourisme.005', 'bien que, dans un avis publié'),
    ex(E(1562), 'even if : même si + présent'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'concession'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Despite', 'Despite the noise :',
    ['malgré de bruit', 'malgré le bruit'], 1,
    'Malgré, puis le nom. EN: malgré + noun.'),
  ctl('Although', "À l'oral, although se dit le plus souvent...",
    ['même si', 'bien que', 'quoique'], 0,
    'Même si, avec l’indicatif. EN: même si.'),
  ctl('Even if', 'Même si + ...',
    ["l'indicatif", 'le subjonctif'], 0,
    "L'indicatif. EN: the indicative."),
], ['malgre', 'indicatif']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'La carte des outils',
    opener: {
      line: "Une idée, cinq formes : ici tu fais la carte de tous les outils, et tu déjoues les pièges de l'anglais. EN: One idea, five forms: here you map every tool and beat the English traps.",
      imageRef: 'lessons/concession/act10.jpg',
    },
    sections: [],
    milestone: "Tu sais ce que chaque outil porte, à l'oral et à l'écrit, et tu ne traduis plus mot à mot. EN: You know what each tool carries, in speech and in writing, and you no longer translate word for word.",
    estScreens: 34, restPoints: ['a10-focus'],
  },
  sections: [A10_ECOUTE, A10_CARTE, A10_TRIER, A10_FOCUS, A10_CHOISIR, A10_ANGLAIS, A10_EXEMPLES, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — UN AVIS ÉQUILIBRÉ
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET the shape one last time, as the model the learner will imitate. */
const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "Des voitures devant l'école",
  frSub: 'La forme que tu vas écrire',
  text: MODELE_TEXT,
  glossary: [
    { word: 'cinquantaine', en: 'about fifty', note: 'À peu près cinquante.' },
    { word: 'Certes', en: 'admittedly', note: "Tu reconnais l'argument de l'autre, avant de répondre." },
    { word: 'trottoir', en: 'pavement, sidewalk', note: 'Le côté de la rue où marchent les piétons.' },
    { word: 'panneaux', en: 'signs', note: 'Les plaques au bord de la route.' },
    { word: "parent d'élève", en: 'school parent', note: "Le père ou la mère d'un enfant de l'école." },
  ],
  questions: [
    { q: 'Ousmane est-il pour ou contre la fermeture ?', a: "Pour, de huit heures à huit heures et demie : « je suis pour la fermeture »." },
    { q: "Quel argument de l'autre côté reconnaît-il ?", a: "Les parents qui viennent de loin : d'un côté, certes, bien que je comprenne les parents pressés." },
    { q: 'Où dit-il sa position ?', a: 'Dans la phrase principale, après bien que : « je suis pour la fermeture ».' },
    { q: 'Combien de formes différentes utilise-t-il ?', a: "Quatre : l'indicatif (alors que, même si), le subjonctif (bien que), un nom (malgré), un infinitif (au lieu de, avoir beau)." },
    { q: 'Comment le texte avance-t-il ?', a: "La situation, un côté, l'autre côté, sa position, une solution, puis une réserve." },
  ],
  audio: REC('rec-b1-32-modele'),
  say: REFRAME,
  terms: ['equilibre'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-avis',
  title: 'Cinq étapes pour ton avis',
  steps: [
    '1. Pose la question et la situation : quoi, où. EN: state the question.',
    "2. Donne un côté, puis l'autre : d'un côté, de l'autre. EN: one side, then the other.",
    "3. Reconnais l'argument contraire avec certes, bien que ou même si. EN: grant the other side.",
    '4. Dis où tu te places, dans la phrase principale. EN: say where you stand, in the main clause.',
    '5. Propose une solution ou une réserve, puis relis : quatre outils, trois formes. EN: a solution, then check four tools and three forms.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equilibre', 'balance'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    uc('Tu écris au journal du quartier', E(1583)),
    uc('Tu réponds à une consultation de la ville', E(1577)),
    uc('Tu donnes ton avis en réunion', E(1574)),
    uc("Tu écris un avis sur un projet d'école", E(1585)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equilibre'],
};

/** CHOOSE, out loud: six turns at the consultation. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'À la consultation',
  setting: "Le jeudi suivant, rue des Érables. Nadia pose les questions de la ville. Tu réponds à l'oral, et tu gardes ta position claire.",
  turns: [
    {
      ai: 'Bonsoir. Vous êtes pour ou contre la rue piétonne ?',
      en: 'Good evening. Are you for or against the pedestrian street?',
      user: fr(E(1411)),
      userEn: 'I am for it, with one reservation. (Your position first, in the main clause.)',
      alts: [
        { fr: "Je suis pour, même si j'ai une réserve.", en: 'I am for it, even if I have one reservation. (même si + indicative: also right.)' },
        { fr: 'Plutôt pour.', en: 'Rather for it.' },
      ],
    },
    {
      ai: "Les commerçants disent qu'ils vont perdre des clients.",
      en: 'The shopkeepers say they are going to lose customers.',
      user: fr(E(1401)),
      userEn: 'I am for the pedestrian street, even if the shops lose customers. (même si + present: the obstacle is the light pan.)',
      alts: [
        { fr: fr(E(1575)), en: 'Although I understand the shopkeepers, I am voting for it. (bien que + subjunctive: more careful.)' },
        { fr: fr(E(1415)), en: 'I understand the shopkeepers. And yet I am voting for it. (pourtant between two sentences.)' },
      ],
    },
    {
      ai: 'Et les livraisons du matin ?',
      en: 'And the morning deliveries?',
      user: fr(E(1427)),
      userEn: 'Even if the street is closed, delivery drivers will be able to get through in the morning. (même si + present, future in the other half.)',
      alts: [
        { fr: 'Malgré la fermeture, les livreurs pourront passer le matin.', en: 'Despite the closure, delivery drivers will be able to get through in the morning. (malgré + noun.)' },
        { fr: 'Au lieu de fermer toute la journée, on peut fermer à partir de onze heures.', en: 'Instead of closing all day, we can close from eleven. (au lieu de + infinitive.)' },
      ],
    },
    {
      ai: 'Vous ne trouvez pas le projet trop cher ?',
      en: 'Do you not find the project too expensive?',
      user: 'Il coûte cher, mais je le soutiens quand même.',
      userEn: 'It is expensive, but I support it anyway. (mais ... quand même.)',
      alts: [
        { fr: fr(E(1573)), en: 'Admittedly, the project is expensive, but it benefits everyone. (certes ... mais.)' },
        { fr: "Non, il n'est pas trop cher, au contraire : il aidera les commerces.", en: 'No, it is not too expensive, on the contrary: it will help the shops. (au contraire after a negative.)' },
      ],
    },
    {
      ai: 'Et les autres rues, elles vont avoir plus de voitures ?',
      en: 'And the other streets, are they going to get more cars?',
      user: 'Peut-être. Par contre, notre rue sera enfin calme.',
      userEn: 'Maybe. On the other hand, our street will finally be quiet. (par contre: both facts stay true.)',
      alts: [
        { fr: 'Oui, alors que la nôtre sera calme.', en: 'Yes, whereas ours will be quiet. (alors que: two facts side by side.)' },
        { fr: 'Peut-être. En revanche, la nôtre sera calme.', en: 'Maybe. On the other hand, ours will be quiet. (en revanche: more careful, also right.)' },
      ],
    },
    {
      ai: 'Merci. Un dernier mot ?',
      en: 'Thank you. One last word?',
      user: "J'ai beau chercher, je ne vois pas de meilleure solution.",
      userEn: 'However hard I look, I cannot see a better solution. (avoir beau + infinitive.)',
      alts: [
        { fr: fr(E(1585)), en: 'Even if the project is not perfect, it deserves a try. (même si + indicative.)' },
        { fr: fr(E(1583)), en: 'In my view, the advantages outweigh the drawbacks.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equilibre', 'balance'],
};

/** THE GRADED TASK. The unit outcome is tested here: a balanced opinion
 *  with at least four tools across at least three grammatical forms. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Écris ton avis équilibré',
  frSub: 'Mission écrite',
  brief: "Ta ville ou ton quartier se pose une question : une rue piétonne, une piste cyclable, des vélos en libre-service, un parc, l'école. Écris ton avis pour le journal du quartier. Montre les deux côtés, puis dis clairement où tu te places.",
  briefEn: 'Your town or neighbourhood is asking a question: a pedestrian street, a cycle lane, bike sharing, a park, the school. Write your opinion for the neighbourhood newsletter. Show both sides, then say clearly where you stand.',
  produce: "Écris un texte de 110 à 150 mots, avec au moins quatre outils différents de concession ou d'opposition, de trois formes différentes au moins : une phrase à l'indicatif, le subjonctif après bien que, un nom après malgré, un infinitif, ou une phrase entière.",
  responseSpec: { kind: 'text', minWords: 110, maxWords: 150 },
  rubric: {
    criteria: [
      {
        key: 'outils',
        label: 'Des outils variés et justes',
        maxPoints: 4,
        descriptors: [
          "4 : Au moins quatre outils différents, de trois formes au moins, et chacun dit bien comment les faits pèsent (au contraire seulement après une négation).",
          "3 : Quatre outils, mais seulement deux formes, ou un outil au mauvais sens.",
          '2 : Deux ou trois outils, ou mais presque partout.',
          "1 : Un seul outil, ou des outils qui disent le contraire de ce que tu penses.",
        ],
      },
      {
        key: 'formes',
        label: 'La bonne forme après chaque outil',
        maxPoints: 3,
        descriptors: [
          "3 : L'indicatif après même si et alors que, le subjonctif après bien que, un nom après malgré, un infinitif après avoir beau et au lieu de.",
          '2 : Une ou deux erreurs de forme (bien que + indicatif, malgré de), mais on comprend tout.',
          '1 : Plusieurs erreurs de forme, ou un futur juste après si.',
        ],
      },
      {
        key: 'equilibre',
        label: 'Un avis équilibré',
        maxPoints: 3,
        descriptors: [
          "3 : Les deux côtés sont là, l'argument contraire est reconnu, et ta position est claire, dans une phrase principale.",
          "2 : Les deux côtés sont là, mais ta position reste floue, ou un côté n'a qu'un mot.",
          "1 : Un seul côté, ou on ne sait pas si tu es pour ou contre.",
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Une vraie question de quartier, entre 110 et 150 mots, un ton soigné.',
          '1 : Il manque un élément : pas de question précise, moins de 110 mots, ou un ton de texto.',
        ],
      },
    ],
  },
  scaffold: [
    "D'un côté,",
    "De l'autre,",
    'Certes,',
    'Bien que...',
    'Même si...',
    'Malgré...',
    'Au lieu de...',
    'À mon avis,',
  ],
  modelAnswer: "Des vélos en libre-service dans notre quartier ? Depuis deux ans, notre quartier de Sherbrooke parle de vélos en libre-service. D'un côté, ce serait pratique pour les étudiants et les touristes. De l'autre, l'hiver dure cinq mois, et les vélos resteraient au garage. Certes, le système coûte cher. Pourtant, il pourrait réduire le nombre de voitures au centre-ville. Même si peu de gens roulent en janvier, les vélos serviront d'avril à novembre. Bien que je sois moi-même un peu sceptique, je vote pour un essai de deux saisons. Au lieu d'acheter trois cents vélos, la ville pourrait commencer avec cinquante. Malgré le prix, l'idée mérite sa chance. Par contre, il faudra des pistes cyclables sûres, sinon personne ne prendra ces vélos. Je suis donc plutôt pour, avec prudence.",
  modelAnswerEn: "Bike sharing in our neighbourhood? For two years our Sherbrooke neighbourhood has been talking about bike sharing. On the one hand, it would be handy for students and tourists. On the other, winter lasts five months, and the bikes would stay in the garage. Admittedly, the system is expensive. And yet it could cut the number of cars downtown. Even if few people ride in January, the bikes will be used from April to November. Although I am a little sceptical myself, I am voting for a two-season trial. Instead of buying three hundred bikes, the city could start with fifty. Despite the price, the idea deserves its chance. On the other hand, we will need safe cycle lanes, or nobody will use these bikes. So I am rather in favour, with caution.",
  watchFor: [
    {
      pattern: "au contraire used for « on the other hand », so the text cancels its own first argument (c'est pratique. Au contraire, c'est cher).",
      criterion: 'outils',
      feedback: "Au contraire efface ce qui précède. Pour garder les deux faits, écris par contre ou en revanche.",
      ref: 'a1-scene',
    },
    {
      pattern: "A future or conditional right after même si (même si peu de gens rouleront, même si ce serait cher).",
      criterion: 'formes',
      feedback: "Juste après si, le présent ou l'imparfait : même si peu de gens roulent.",
      ref: 'a2-piege',
    },
    {
      pattern: "The indicative after bien que, or the subjunctive after même si (bien que c'est cher, même si ce soit cher).",
      criterion: 'formes',
      feedback: "Bien que + subjonctif (bien que ce soit cher) ; même si + indicatif (même si c'est cher).",
      ref: 'a3-erreurs',
    },
    {
      pattern: 'malgré followed by de or by a clause (malgré de ce prix, malgré il coûte cher).',
      criterion: 'formes',
      feedback: "Malgré, puis un nom : malgré le prix. Pour une phrase, prends bien que ou même si.",
      ref: 'a4-piege',
    },
    {
      pattern: "A register mix: néanmoins or quoique next to text-message style, or par contre repeated four times in a careful text.",
      criterion: 'tache',
      feedback: "Pour le journal du quartier, varie : en revanche, cependant, toutefois vont bien à l'écrit.",
      ref: 'a5-choisir',
    },
    {
      pattern: "quand même opening the sentence, or used for « anyway » with no obstacle before it.",
      criterion: 'outils',
      feedback: "Quand même se met à la fin ou après le verbe, après un obstacle. Sinon, de toute façon.",
      ref: 'a6-erreurs',
    },
    {
      pattern: "avoir beau with être, with beau agreed, or with a conjugated verb (je suis beau essayer, elles ont belles dire, on a beau parle).",
      criterion: 'formes',
      feedback: "Avoir se conjugue, beau ne bouge pas, le verbe suivant reste à l'infinitif : on a beau parler.",
      ref: 'a7-piege',
    },
    {
      pattern: "pendant que used to contrast two facts (les familles y gagnent, pendant que les livreurs y perdent).",
      criterion: 'outils',
      feedback: "Pour comparer deux faits, alors que ou tandis que. Pendant que dit seulement le moment.",
      ref: 'a8-piege',
    },
    {
      pattern: "au lieu de followed by que or by a conjugated verb (au lieu que fermer, au lieu de ferme).",
      criterion: 'formes',
      feedback: 'Au lieu de, puis un infinitif ou un nom : au lieu de fermer.',
      ref: 'a9-erreurs',
    },
    {
      pattern: "A one-sided text, or a position hidden in the concessive clause (bien que je sois pour, les commerçants perdent...).",
      criterion: 'equilibre',
      feedback: "Mets ta position dans la phrase principale, et l'autre côté après bien que ou même si.",
      ref: 'a11-plan',
    },
    {
      pattern: 'Under 110 words, no clear local question, or only one grammatical form (four tools all followed by a clause).',
      criterion: 'tache',
      feedback: "Relis la mission : une question précise, entre 110 et 150 mots, et trois formes au moins (phrase, nom, infinitif).",
      ref: 'a10-carte',
    },
  ],
  graderNotes: [
    'A title line (the question) does not count toward the word budget. Count the body only, with 10% tolerance (99 to 165) before criterion « tache » loses its point.',
    "« Different tools » means different linking words from this lesson: mais, même si, bien que, quoique, malgré, en dépit de, pourtant, cependant, néanmoins, toutefois, quand même, tout de même, avoir beau, alors que, tandis que, au lieu de, par contre, en revanche, au contraire, certes. mais counts, but a text whose four tools are all mais-like adverbs has one form only.",
    "The three FORMS are: a clause (indicative after même si, alors que, tandis que; subjunctive after bien que, quoique), a noun (malgré, en dépit de), an infinitive (avoir beau, au lieu de), a whole sentence (the adverbs). Indicative clause and subjunctive clause count as two forms.",
    "Past subjunctive after bien que (bien qu'il ait changé) is recognition only in this lesson: accept a correct one, do not require it, and do not mark a correct present subjunctive as weaker.",
    "« malgré que » is heard in speech; in this WRITTEN task mark it under « formes » only if it is followed by the indicative, and suggest bien que.",
    "Do not mark cause and consequence connectors (parce que, donc, si bien que) as errors: they belong to other lessons and are welcome.",
    'Accept regional vocabulary (courriel, stationnement, souper, dépanneur in Québec; septante and nonante in Belgium and Switzerland).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['equilibre', 'balance'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis toute la balance à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['balance'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-avis',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'même si', v: "l'indicatif, jamais de futur après si", say: fr(E(1417)),
      detail: { title: 'Même si', body: 'Un fait vrai, ou demain, au présent. EN: present after si.', say: fr(E(1418)) } },
    { k: 'bien que, quoique', v: 'le subjonctif', say: fr(E(1434)),
      detail: { title: 'Bien que', body: 'La même balance, plus soignée. EN: same meaning, more careful.', say: fr(E(1445)) } },
    { k: 'malgré', v: 'un nom, jamais de', say: fr(E(1452)),
      detail: { title: 'Malgré', body: 'Le froid, la pluie, le prix. EN: a noun.', say: fr(E(1461)) } },
    { k: 'pourtant, cependant', v: 'deux phrases ; cependant écrit', say: fr(E(1469)),
      detail: { title: 'Les adverbes', body: "Au début, ou après le verbe. EN: at the start or after the verb.", say: fr(E(1472)) } },
    { k: 'avoir beau, au lieu de', v: 'un infinitif', say: fr(E(1503)),
      detail: { title: "L'infinitif", body: 'Avoir se conjugue, le reste ne bouge pas. EN: only avoir changes.', say: fr(E(1538)) } },
    { k: 'alors que, par contre', v: 'deux faits côte à côte', say: fr(E(1522)),
      detail: { title: 'Côte à côte', body: 'Au contraire, lui, efface le premier fait. EN: au contraire cancels.', say: fr(E(1542)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['balance', 'equilibre'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu pèses deux faits et tu choisis le mot qui dit comment ils pèsent : l'obstacle perd, les deux faits restent côte à côte, ou le premier disparaît. Tu sais ce que chaque outil porte : l'indicatif, le subjonctif, un nom, un infinitif. Le piège qui reste est le plus discret : un subjonctif après même si, ou l'indicatif après bien que, quand tu écris vite. Avant l'examen, relis ton avis et souligne chaque outil. À côté, écris sa forme. Si tu trouves bien que suivi de l'indicatif, corrige. EN: Underline each tool in your text and write its form beside it; fix any bien que followed by the indicative.",
  stats: [
    { k: 'Les outils', v: 'même si, bien que, malgré, pourtant, avoir beau, alors que' },
    { k: 'Les formes', v: 'indicatif, subjonctif, nom, infinitif' },
    { k: 'Le registre', v: 'par contre, en revanche' },
    { k: "L'équilibre", v: 'les deux côtés, puis ta place' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight, one per act from act 1 to act 10 plus
 *  an integration round. Each round's target is a distinct errorTrigger.
 *  `fold()` strips accents, commas and apostrophes, so every typed answer
 *  differs from its prompt by a WORD (malgré against bien que, soit against
 *  est, par contre against au contraire). Options are spread over the slots
 *  by `spreadSlots()` after authoring; LessonRich reshuffles them anyway. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
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
      id: 'r1-balance', label: 'La balance', targets: ['lien-plat'],
      questions: [
        mc('Tu veux dire « on the other hand ». Tu dis...', ['au contraire', 'par contre'], 1, 'Par contre garde les deux faits. EN: par contre keeps both facts.', 'a1-scene'),
        mc("« C'est une bonne idée, même si elle coûte cher. » La personne est...", ['contre', 'pour', 'sans avis'], 1, 'Le prix est sur le plateau léger. EN: the price is the lighter pan.', 'a1-reperer'),
        mc("« Elle n'est pas contre le projet, au contraire. » Elle est...", ['pour', 'contre'], 0, 'Au contraire efface contre. EN: she is for it.', 'a1-reperer'),
        tI('Garde les deux faits : remplace au contraire.', WRONG_CONTRAIRE, fr(E(1400)), 'Par contre : les deux faits restent vrais. EN: par contre.', 'a1-scene'),
        tI('Relie les deux faits avec mais.', "C'est cher. C'est pratique.", fr(E(1402)), 'Mais, la base de tous les jours. EN: mais.', 'a1-mais'),
        eS('Les autres rues sont pleines, pendant que la nôtre est vide.', fr(E(1406)), 'Tu compares deux rues : alors que. EN: a contrast.', 'a1-courrier'),
        eS('Il pleuvait, et au contraire la salle était pleine.', fr(E(1408)), 'Et pourtant : la surprise. Au contraire effacerait la pluie. EN: et pourtant.', 'a1-courrier'),
        lC('Écoute. La personne est-elle pour le projet ?', fr(E(1415)), ['oui', 'non'], 0, '« Pourtant, je vote pour. » EN: yes.', 'a1-usages'),
      ],
    },
    {
      id: 'r2-memesi', label: 'Même si', targets: ['si-futur'],
      questions: [
        mc("Même s'il ... demain, le marché aura lieu. (pleuvoir)", ['pleuvra', 'pleut', 'pleuvrait'], 1, 'Juste après si, le présent. EN: present after si.', 'a2-memesi'),
        mc('Après même si, quel mode ?', ["l'indicatif", 'le subjonctif'], 0, "L'indicatif. EN: the indicative.", 'a2-memesi'),
        mc("« Même si j'étais riche, je resterais à Sherbrooke. » Es-tu riche ?", ['oui', 'non'], 1, 'Imparfait après si : on imagine. EN: an imagined case.', 'a2-choisir'),
        tI('Mets le verbe au bon temps.', 'Même si la réunion (finir) tard, je viendrai.', fr(E(1424)), 'Finit : le présent après si. EN: present.', 'a2-piege'),
        tI('Mets le verbe au bon temps.', "Même s'il (avoir) le temps, il ne viendrait pas.", fr(E(1421)), 'Avait : imparfait, puis conditionnel. EN: imparfait.', 'a2-choisir'),
        eS("Même si tu insisteras, je ne changerai pas d'avis.", fr(E(1432)), 'Juste après si, le présent. EN: present after si.', 'a2-piege'),
        eS('Même si le loyer soit cher, je reste dans ce quartier.', fr(E(1417)), "Même si garde l'indicatif. EN: indicative.", 'a2-construire'),
        lC("Écoute. Le marché aura-t-il lieu s'il pleut ?", fr(E(1418)), ['oui', 'non'], 0, 'La pluie ne gagne pas. EN: yes.', 'a2-histoire'),
      ],
    },
    {
      id: 'r3-bienque', label: 'Bien que, quoique', targets: ['mode-croise'],
      questions: [
        mc("Bien qu'il ... froid. (faire)", ['fait', 'fasse', 'fera'], 1, 'Bien que + subjonctif : fasse. EN: fasse.', 'a3-bienque'),
        mc("Même s'il ... froid. (faire)", ['fait', 'fasse'], 0, "Même si + indicatif : fait. EN: fait.", 'a3-tableau'),
        mc('Le plus écrit :', ['même si', 'quoique', 'bien que'], 1, 'Quoique, surtout dans les textes. EN: quoique.', 'a3-bienque'),
        tI('Dis-le avec bien que.', 'Même si elle est malade, elle travaille.', fr(E(1449)), 'Est devient soit. EN: soit.', 'a3-tableau'),
        tI('Dis-le avec même si.', "Bien qu'il fasse froid, les enfants jouent dehors.", fr(E(1441)), 'Fasse devient fait. EN: fait.', 'a3-construire'),
        eS("Bien qu'il pleut, la fête continue.", fr(E(1443)), 'Bien que + subjonctif : pleuve. EN: pleuve.', 'a3-erreurs'),
        eS("Bien que je suis d'accord, j'ai une question.", fr(E(1436)), 'Même avec un seul sujet : je sois. EN: je sois.', 'a3-erreurs'),
        lC("Écoute. Quelle forme entends-tu après bien qu'il ?", fr(E(1443)), ['pleut', 'pleuve'], 1, 'Pleuve, le subjonctif. EN: pleuve.', 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-malgre', label: 'Malgré', targets: ['malgre-phrase'],
      questions: [
        mc('... la pluie, la fête continue.', ['Bien que', 'Malgré', 'Même si'], 1, 'La pluie, un nom : malgré. EN: malgré + noun.', 'a4-malgre'),
        mc('Après malgré :', ['un nom', 'une phrase', 'de + un nom'], 0, 'Un nom, directement. EN: a noun.', 'a4-construire'),
        mc('Dans un rapport : « ... des critiques, la ville garde son projet. »', ['En dépit', 'Malgré de'], 0, 'En dépit des critiques. EN: en dépit de.', 'a4-malgre'),
        tI('Dis-le avec malgré.', "Bien qu'il fasse froid, les enfants jouent dehors.", fr(E(1452)), 'Il fait froid devient le froid. EN: le froid.', 'a4-construire'),
        tI('Dis-le avec malgré.', "Bien qu'il pleuve, la fête continue.", fr(E(1453)), 'Il pleut devient la pluie. EN: la pluie.', 'a4-choisir'),
        eS("Malgré de mes efforts, je n'ai pas trouvé de place.", fr(E(1456)), 'Jamais de après malgré. EN: no de.', 'a4-piege'),
        eS('Il est venu malgré il neige.', fr(E(1459)), 'Malgré, puis un nom : la neige. EN: a noun.', 'a4-piege'),
        lC('Écoute. Après malgré, entends-tu un nom ou une phrase ?', fr(E(1466)), ['un nom', 'une phrase'], 0, 'Le retard du train : un nom. EN: a noun.', 'a4-histoire'),
      ],
    },
    {
      id: 'r5-adverbes', label: 'Pourtant et ses cousins', targets: ['registre-ecrit'],
      questions: [
        mc('Entre amis :', ['néanmoins', 'pourtant', 'toutefois'], 1, 'Pourtant va partout. EN: pourtant.', 'a5-adverbes'),
        mc('Dans un article : « Le loyer a augmenté. ..., les locataires restent. »', ['Cependant', 'Par contre'], 0, 'Cependant, pour un texte. EN: cependant.', 'a5-tableau'),
        mc('Pourtant se place...', ["après l'obstacle", "avant l'obstacle"], 0, "D'abord l'obstacle, puis pourtant. EN: after the obstacle.", 'a5-erreurs'),
        tI('Place pourtant après le verbe.', "Je l'ai prévenu. Pourtant, il a oublié.", fr(E(1477)), 'Entre a et oublié. EN: between auxiliary and participle.', 'a5-construire'),
        tI('Écris-le avec cependant après le verbe.', 'Le projet est ambitieux. Cependant, il est réaliste.', fr(E(1475)), 'Il est cependant réaliste. EN: after the verb.', 'a5-construire'),
        eS('Le loyer a augmenté, mais cependant les locataires restent.', fr(E(1472)), "Un seul mot suffit à l'écrit. EN: one linking word.", 'a5-erreurs'),
        eS("Pourtant il habite loin, il n'est jamais en retard.", fr(E(1469)), "Pourtant vient après l'obstacle. EN: after the obstacle.", 'a5-erreurs'),
        lC('Écoute. Ce texte est-il plutôt oral ou écrit ?', fr(E(1473)), ['plutôt écrit', 'très oral'], 0, 'Néanmoins : écrit. EN: written.', 'a5-article'),
      ],
    },
    {
      id: 'r6-quandmeme', label: 'Quand même', targets: ['quandmeme-place'],
      questions: [
        mc('Il pleut, mais on sort ... .', ['quand même', 'de toute façon'], 0, 'Un obstacle avant : quand même. EN: quand même.', 'a6-quandmeme'),
        mc('Sans obstacle avant, anyway se dit :', ['quand même', 'de toute façon'], 1, 'De toute façon : peu importe. EN: in any case.', 'a6-choisir'),
        mc('Le plus soigné :', ['quand même', 'tout de même'], 1, 'Tout de même. EN: tout de même.', 'a6-quandmeme'),
        tI('Remplace pourtant par quand même, à la fin.', 'Il pleut. Pourtant, on sort.', 'Il pleut. On sort quand même.', 'Quand même ferme la phrase. EN: at the end.', 'a6-construire', ['Il pleut, mais on sort quand même.']),
        tI('Ajoute quand même après le verbe.', 'Je suis content du résultat.', fr(E(1492)), 'Je suis quand même content. EN: after the verb.', 'a6-construire'),
        eS('Quand même, il pleut, on sort.', fr(E(1495)), 'Quand même à la fin. EN: at the end.', 'a6-erreurs', ['Il pleut, on sort quand même.', 'Il pleut. On sort quand même.']),
        eS("C'est loin, mais j'y vais tout même.", "C'est loin, mais j'y vais tout de même.", 'Tout de même garde de. EN: keeps de.', 'a6-erreurs'),
        lC('Écoute. Vont-ils sortir ?', fr(E(1490)), ['oui', 'non'], 0, 'Tout de même : oui. EN: yes.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-beau', label: 'Avoir beau', targets: ['beau-conjugue'],
      questions: [
        mc('Elle ... beau crier.', ['est', 'a'], 1, 'Avoir beau. EN: avoir.', 'a7-beau'),
        mc('Nous avons ... chercher.', ['beau', 'beaux'], 0, 'Beau ne change jamais. EN: invariable.', 'a7-piege'),
        mc("« J'ai beau essayer, ça ne marche pas. » L'effort a...", ['réussi', 'un peu servi', 'servi à rien'], 2, "Tout l'effort, aucun résultat. EN: no result.", 'a7-beau'),
        tI("Mets avoir à l'imparfait.", "J'ai beau me dépêcher, je suis toujours en retard.", fr(E(1512)), "J'avais beau, j'étais. EN: imparfait.", 'a7-construire'),
        tI('Dis-le avec avoir beau.', "Même si tu insistes, je ne changerai pas d'avis.", fr(E(1504)), 'Tu as beau insister. EN: tu as beau.', 'a7-choisir'),
        eS("Elle a belle crier, personne ne l'entend.", fr(E(1516)), 'Beau ne s’accorde pas. EN: no agreement.', 'a7-piege'),
        eS("Tu as beau insistes, je ne changerai pas d'avis.", fr(E(1504)), "L'infinitif après beau. EN: infinitive.", 'a7-piege'),
        lC("Écoute. Ousmane s'est-il habitué à l'hiver ?", fr(E(1520)), ['oui', 'non'], 1, "L'hiver le surprend toujours. EN: no.", 'a7-histoire'),
      ],
    },
    {
      id: 'r8-alorsque', label: 'Alors que, tandis que', targets: ['pendant-contraste'],
      questions: [
        mc('Léa vient à vélo, ... monsieur Bélanger prend sa voiture.', ['pendant que', 'alors que'], 1, 'Tu compares : alors que. EN: contrast.', 'a8-alorsque'),
        mc('... tu cuisines, je mets la table.', ['Pendant que', 'Alors que'], 0, 'Le même moment : pendant que. EN: time.', 'a8-choisir'),
        mc('Après alors que :', ["l'indicatif", 'le subjonctif', "l'infinitif"], 0, "L'indicatif. EN: indicative.", 'a8-alorsque'),
        tI('Compare les deux faits avec alors que.', "Mon frère adore l'hiver. Moi, je le déteste.", fr(E(1522)), 'Deux faits côte à côte. EN: alors que.', 'a8-construire'),
        tI('Dis-le avec tandis que.', 'Les loyers montent, alors que les salaires restent les mêmes.', fr(E(1526)), 'Tandis que, plus soigné. EN: tandis que.', 'a8-exemples'),
        eS("Mon frère adore l'hiver, alors moi, je le déteste.", fr(E(1522)), 'Alors seul veut dire donc. EN: alors que.', 'a8-piege'),
        eS("Elle a accepté alors qu'elle n'ait pas le temps.", fr(E(1535)), "Alors que garde l'indicatif. EN: avait.", 'a8-piege'),
        lC('Écoute. Cette phrase compare-t-elle, ou dit-elle le moment ?', fr(E(1527)), ['elle compare', 'elle dit le moment'], 1, 'Pendant que : le moment. EN: time.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-contraire', label: 'Garder ou effacer', targets: ['contraire-autre'],
      questions: [
        mc("Le quartier est calme. ... il n'y a pas de commerces.", ['Au contraire,', 'Par contre,'], 1, 'Les deux faits restent vrais. EN: par contre.', 'a9-outils'),
        mc("« Je ne suis pas fatigué, au contraire. » Je suis...", ['en forme', 'fatigué'], 0, "L'inverse de fatigué. EN: the opposite.", 'a9-choisir'),
        mc('Instead, seul, à la fin :', ['au lieu', 'à la place', 'au contraire'], 1, 'À la place. EN: à la place.', 'a9-erreurs'),
        tI('Dis-le avec en revanche.', "L'appartement est petit. Par contre, il est très lumineux.", fr(E(1543)), 'En revanche, pour un texte soigné. EN: en revanche.', 'a9-tableau'),
        tI('Dis-le avec au lieu de.', 'Ne prends pas la voiture. Prends le bus.', fr(E(1538)), 'Au lieu de prendre. EN: infinitive.', 'a9-construire'),
        eS('Au lieu que prendre la voiture, prends le bus.', fr(E(1538)), 'Au lieu de, jamais que. EN: au lieu de.', 'a9-erreurs'),
        eS('Le centre est cher. Au contraire, la banlieue est abordable.', fr(E(1547)), 'Le centre reste cher : par contre. EN: par contre.', 'a9-erreurs'),
        lC("Écoute. A-t-il perdu de l'argent ?", fr(E(1550)), ['oui', 'non, il en a gagné'], 1, "Au contraire : l'inverse. EN: he made money.", 'a9-histoire'),
      ],
    },
    {
      id: 'r10-carte', label: 'La carte des outils', targets: ['traduction-mot'],
      questions: [
        mc('Despite the noise :', ['malgré de bruit', 'malgré le bruit'], 1, 'Malgré, puis le nom. EN: no de.', 'a10-anglais'),
        mc("À l'oral, although se dit le plus souvent :", ['quoique', 'même si', 'néanmoins'], 1, "Même si, à l'oral. EN: même si.", 'a10-exemples'),
        mc('Quel outil demande le subjonctif ?', ['bien que', 'même si', 'alors que'], 0, 'Bien que. EN: bien que.', 'a10-carte'),
        mc('Au lieu de est suivi...', ["d'un infinitif ou d'un nom", "d'un subjonctif"], 0, 'Un infinitif ou un nom. EN: infinitive or noun.', 'a10-focus'),
        tI('Dis-le avec malgré.', "Même s'il pleut, on sort.", fr(E(1560)), 'Malgré la pluie. EN: a noun.', 'a10-trier'),
        tI('Dis-le avec bien que.', "Même s'il pleut, on sort.", fr(E(1559)), "Bien qu'il pleuve. EN: subjunctive.", 'a10-carte'),
        eS("Malgré de ses conseils, j'ai signé le bail.", fr(E(1561)), 'Despite of : malgré de. Les deux n’existent pas. EN: no de.', 'a10-anglais'),
        lC("Écoute. Quelle forme suit l'outil ?", fr(E(1560)), ['un nom', 'un infinitif', 'un subjonctif'], 0, 'La pluie : un nom. EN: a noun.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-avis', label: 'Un avis équilibré', targets: ['avis-plat'],
      questions: [
        mc('Un avis équilibré...', ['ne montre que ton côté', 'montre les deux côtés, puis tranche'], 1, 'Les deux plateaux, puis ta place. EN: both sides, then decide.', 'a11-plan'),
        mc('Avec bien que, où dis-tu ta position ?', ['après bien que', 'dans la phrase principale'], 1, "La phrase principale porte ta position. EN: the main clause.", 'a11-lecture'),
        mc("Pour reconnaître l'argument de l'autre :", ['certes', 'donc', 'car'], 0, "Certes. EN: admittedly.", 'a11-plan'),
        tI('Dis-le avec au lieu de.', "On ne ferme pas la rue toute l'année. On pourrait essayer un été.", fr(E(1577)), 'Au lieu de fermer. EN: au lieu de.', 'a11-usages'),
        tI('Dis-le avec malgré.', "Bien qu'il y ait ces inquiétudes, l'essai d'un été me semble raisonnable.", fr(E(1576)), 'Malgré ces inquiétudes. EN: a noun.', 'a11-cheat'),
        eS('Bien que je comprends les commerçants, je vote pour.', fr(E(1575)), 'Je comprenne, après bien que. EN: subjunctive.', 'a11-scenario'),
        eS("Même si le projet ne sera pas parfait, il mérite un essai.", fr(E(1585)), "Le présent après si : n'est pas. EN: present.", 'a11-cheat'),
        lC('Écoute. La personne tranche-t-elle ?', fr(E(1583)), ['oui', 'non'], 0, 'Les avantages l’emportent. EN: yes.', 'a11-lecture'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule (no slot above 40%) is checked on AUTHORED order,
 *  although LessonRich reshuffles options on every attempt. So each closed
 *  question's options are ROTATED, with `correct` moved in step, onto the
 *  least-used slot so far (b1.25's helper). The option set and the right
 *  answer are unchanged. No `why` in this quiz names a position. */
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
spreadSlots(A11_QUIZ);

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'even if, even though', back: "même si + l'indicatif", say: fr(E(1417)) },
    { front: 'although, soigné', back: 'bien que + le subjonctif', say: fr(E(1434)) },
    { front: 'despite + un nom', back: 'malgré, sans de', say: fr(E(1452)) },
    { front: 'and yet', back: 'pourtant', say: fr(E(1469)) },
    { front: 'however, écrit', back: 'cependant, toutefois', say: fr(E(1472)) },
    { front: 'anyway, après un obstacle', back: 'quand même', say: fr(E(1495)) },
    { front: 'however hard I try', back: "j'ai beau essayer", say: fr(E(1503)) },
    { front: 'whereas', back: 'alors que, tandis que', say: fr(E(1522)) },
    { front: 'on the other hand', back: 'par contre, en revanche', say: fr(E(1542)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'La concession, en résumé',
  body: `${REFRAME} Tu ne dis plus seulement mais : tu choisis le mot qui dit comment les faits pèsent, puis la forme qu'il porte. La prochaine leçon, ${ECOLOGIE_REF}, parle de l'environnement et de la société : tu y pèseras le pour et le contre avec ces outils. EN: Next lesson: the environment and society, where you will weigh pros and cons with these tools.`,
  points: [
    "Même si + indicatif ; bien que + subjonctif.",
    'Malgré + nom ; avoir beau et au lieu de + infinitif.',
    "Pourtant à l'oral, cependant à l'écrit ; quand même à la fin.",
    'Par contre garde les deux faits ; au contraire efface le premier.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['balance', 'equilibre'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Un avis équilibré',
    opener: {
      line: "À toi de peser le pour et le contre pour ton quartier, puis de dire où tu te places. EN: Your turn to weigh the pros and cons for your neighbourhood, then say where you stand.",
      imageRef: 'lessons/concession/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton propre avis équilibré et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote your own balanced opinion and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 124,
    restPoints: ['a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-bienque', 'a11-quiz/r6-quandmeme', 'a11-quiz/r9-contraire'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here (a `table` at layer core
 *  is refused by validateDensity). Every sheet is reachable from a mission
 *  through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-carte', 'La carte des outils', ['les cinq formes', 'le registre', "les pièges de l'anglais"], [
    teach('sheet-carte-teach', 'Choisis le mot, puis regarde ce qu’il porte',
      `${REFRAME} ${CARTE_RULE} Mais reste la base de tous les jours : ${COORD_REF} le construit. Les autres outils disent plus précisément comment les deux faits pèsent, et chacun porte une forme : ${TYPES.join(' ; ')}. EN: ${CARTE_RULE_EN} Each tool carries one form.`),
    table('sheet-carte-table', 'Chaque outil, ce qu’il porte', ['Outil', 'Suivi de', 'Registre', 'Exemple'], [
      ['mais', 'une phrase entière', 'partout', "C'est cher, mais c'est pratique."],
      ['même si', "une phrase à l'indicatif", 'partout', "Même s'il pleut, on sort."],
      ['bien que', 'une phrase au subjonctif', 'soigné', "Bien qu'il pleuve, on sort."],
      ['quoique', 'une phrase au subjonctif', 'écrit', "Quoiqu'il soit tard, la boulangerie est encore ouverte."],
      ['malgré', 'un nom', 'partout', 'Malgré la pluie, on sort.'],
      ['en dépit de', 'un nom', 'écrit', 'En dépit des critiques, la ville garde son projet.'],
      ['avoir beau', 'un infinitif', 'partout', "J'ai beau essayer, ça ne marche pas."],
      ['au lieu de', 'un infinitif ou un nom', 'partout', 'Au lieu de râler, aide-moi.'],
      ['alors que', "une phrase à l'indicatif", 'partout', "Mon frère adore l'hiver, alors que moi, je le déteste."],
      ['tandis que', "une phrase à l'indicatif", 'soigné', 'Les loyers montent, tandis que les salaires restent les mêmes.'],
      ['pourtant', 'une phrase entière', 'partout', "Il habite loin. Pourtant, il n'est jamais en retard."],
      ['cependant, néanmoins, toutefois', 'une phrase entière', 'écrit', 'Le loyer a augmenté. Cependant, les locataires restent.'],
      ['quand même, tout de même', 'à la fin, ou après le verbe', 'partout ; tout de même plus soigné', 'Il pleut, mais on sort quand même.'],
      ['par contre, en revanche', 'une phrase entière', "l'oral, l'écrit", "Le quartier est calme. Par contre, il n'y a pas de commerces."],
      ['au contraire', 'après une phrase négative', 'partout', 'Je ne suis pas fatigué, au contraire.'],
    ]),
    table('sheet-carte-anglais', "Les pièges de l'anglais", ['En anglais', 'Pas', 'Mais'], [
      ['despite the rain', 'malgré de la pluie', 'malgré la pluie'],
      ['despite it raining', 'malgré il pleut', "même s'il pleut, bien qu'il pleuve"],
      ['although, entre amis', 'quoique', 'même si'],
      ['even if it rains tomorrow', "même s'il pleuvra", "même s'il pleut"],
      ['on the other hand', 'au contraire', 'par contre, en revanche'],
      ['while, pour comparer', 'pendant que', 'alors que, tandis que'],
      ['instead, à la fin', 'au lieu', 'à la place'],
      ['anyway, peu importe', 'quand même', 'de toute façon'],
    ]),
  ]),
  sheet('sheet-memesi', 'Même si et bien que', ['la même balance', 'le temps après si', 'les formes à reconnaître'], [
    teach('sheet-memesi-teach', 'Même sens, deux formes',
      `Même si et bien que disent la même chose : un obstacle qui ne gagne pas. Même si garde l'indicatif ; bien que et quoique prennent le subjonctif. ${Cap(SI_REF)} te l'a dit : « ${B110_REFRAME} » Juste après si, jamais de futur ni de conditionnel. EN: same meaning; même si keeps the indicative, and never a future or conditional right after si.`),
    table('sheet-memesi-temps', 'Le temps après même si', ['Situation', 'Après même si', "Dans l'autre moitié", 'Exemple'], [
      ['un fait vrai', 'présent', 'présent', 'Même si le loyer est cher, je reste dans ce quartier.'],
      ['demain, possible', 'présent', 'futur', "Même s'il pleut demain, le marché aura lieu."],
      ['au passé', 'imparfait', 'passé composé', "Même si le bus était en retard, je suis arrivé à l'heure."],
      ['imaginé', 'imparfait', 'conditionnel', "Même si j'étais riche, je resterais à Sherbrooke."],
    ]),
    table('sheet-memesi-formes', 'Après même si, après bien que', ['Verbe', 'Même si ...', 'Bien que ...'], [
      ['être', 'il est', 'il soit'],
      ['avoir', 'il a', 'il ait'],
      ['faire', 'il fait', 'il fasse'],
      ['pouvoir', 'nous pouvons', 'nous puissions'],
      ['pleuvoir', 'il pleut', 'il pleuve'],
      ['connaître', 'je connais', 'je connaisse'],
      ['comprendre', 'je comprends', 'je comprenne'],
    ]),
    teach('sheet-memesi-reconnaitre', 'Reconnaître, sans produire',
      `Ces formes viennent de ${SUBJ_FORM_REF}. Tu liras aussi des passés : bien qu'il ait changé, bien qu'il se soit blessé. Reconnais-les ; tu n'as pas à les écrire ici. Tu entendras aussi malgré que : à l'écrit, préfère bien que. EN: recognise the past forms; prefer bien que to malgré que in writing.`),
  ]),
  sheet('sheet-malgre', 'Malgré, avoir beau, au lieu de', ['malgré + nom', 'avoir beau + infinitif', 'au lieu de et à la place'], [
    teach('sheet-malgre-teach', 'Un nom ou un infinitif, pas une phrase',
      `Malgré est suivi d'un nom, jamais de de, jamais d'une phrase. ${Cap(SUBJ_INF_REF)} en a fait ta sortie de secours : pas de subjonctif, juste un nom. En dépit de dit la même chose à l'écrit, et lui garde de. Malgré tout est un bloc (${TOUT_REF}). EN: malgré + noun; en dépit de + noun, written.`),
    table('sheet-malgre-table', 'De la phrase au nom', ['Avec une phrase', 'Avec un nom'], [
      ["bien qu'il fasse froid", 'malgré le froid'],
      ["bien qu'il pleuve", 'malgré la pluie'],
      ['même si le prix est élevé', 'malgré le prix'],
      ['bien que je sois fatiguée', 'malgré la fatigue'],
      ['même si le train avait du retard', 'malgré le retard du train'],
    ]),
    table('sheet-malgre-beau', 'Avoir beau à tous les temps', ['Temps', 'Exemple'], [
      ['présent', "J'ai beau essayer, ça ne marche pas."],
      ['imparfait', "Elle avait beau expliquer, personne ne l'écoutait."],
      ['futur', 'Tu auras beau protester, la décision est prise.'],
      ['passé composé', 'Il a eu beau courir, il a raté le bus.'],
      ['avec être', 'Elle a beau être petite, elle court très vite.'],
    ]),
    teach('sheet-malgre-aulieu', 'Au lieu de, à la place',
      "Au lieu de enlève une chose et en met une autre : au lieu de prendre la voiture, au lieu d'un café. Jamais au lieu que. Seul, à la fin de la phrase, instead se dit à la place : je prends un thé à la place. EN: au lieu de + infinitive or noun; instead on its own is à la place."),
  ]),
  sheet('sheet-adverbes', 'Pourtant, quand même, par contre', ['pourtant et ses cousins', 'la place dans la phrase', 'garder ou effacer'], [
    teach('sheet-adverbes-teach', 'Deux phrases entières',
      `Pourtant, cependant, néanmoins, toutefois, quand même, par contre, en revanche : ils relient deux phrases complètes, et le verbe ne change pas. Pourtant et par contre se disent partout ; les autres sont plus soignés. ${Cap(REGISTRE_REF)} : « ${B125_REFRAME} » EN: whole sentences, no change to the verb; choose by register.`),
    table('sheet-adverbes-place', 'Où les mettre', ['Place', 'Exemple'], [
      ['au début, avec une virgule', "Il habite loin. Pourtant, il n'est jamais en retard."],
      ['juste après le verbe', 'Le projet est ambitieux ; il est cependant réaliste.'],
      ["entre l'auxiliaire et le participe", "Je l'ai prévenu. Il a pourtant oublié."],
      ['et pourtant, très courant', 'Elle travaille beaucoup, et pourtant elle trouve du temps pour ses amis.'],
      ['quand même, à la fin', 'Il pleut, mais on sort quand même.'],
      ['quand même, après le verbe', 'Je suis quand même content du résultat.'],
    ]),
    table('sheet-adverbes-trois', 'Garder ou effacer', ['Mot', 'Les deux faits', 'Exemple'], [
      ['par contre', 'restent vrais', "Le quartier est calme. Par contre, il n'y a pas de commerces."],
      ['en revanche', 'restent vrais', "L'appartement est petit ; en revanche, il est très lumineux."],
      ['au contraire', 'le premier est faux', "Ce n'est pas trop cher. Au contraire, c'est une bonne affaire."],
      ['au lieu de', "l'un remplace l'autre", 'Au lieu de prendre la voiture, prends le bus.'],
      ['de toute façon', 'peu importe, pas de balance', 'De toute façon, je ne peux pas venir.'],
    ]),
  ]),
  sheet('sheet-avis', 'Écrire un avis équilibré', ['le plan', 'la liste de contrôle', 'les formules'], [
    teach('sheet-avis-teach', 'Peser, puis trancher',
      "Un avis équilibré montre les deux plateaux, reconnaît l'argument de l'autre, puis dit clairement où tu te places. Ta position va dans la phrase principale : bien que je comprenne les commerçants, je vote pour. EN: show both sides, grant the other, then put your position in the main clause."),
    table('sheet-avis-plan', 'Le plan en cinq temps', ['Étape', 'Avec quoi'], [
      ['la question, la situation', 'quoi, où, depuis quand'],
      ["un côté, puis l'autre", "d'un côté, de l'autre"],
      ["tu reconnais l'autre côté", 'certes, bien que, même si'],
      ['tu dis où tu te places', 'à mon avis, je suis pour, je suis plutôt contre'],
      ['une solution ou une réserve', 'au lieu de, malgré, par contre, toutefois'],
    ]),
    table('sheet-avis-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['quatre outils différents', 'compte-les : même si, bien que, malgré, pourtant...'],
      ['trois formes au moins', "une phrase à l'indicatif, un subjonctif, un nom, un infinitif"],
      ['le bon verbe après chaque outil', 'même si + indicatif, bien que + subjonctif'],
      ['pas de de après malgré', 'malgré le bruit'],
      ['ta position est claire', 'dans la phrase principale'],
      ['un ton soigné', "pas d'insulte, des faits"],
    ]),
    table('sheet-avis-formules', 'Les formules', ['Formule', 'Exemple'], [
      ["d'un côté, de l'autre", "D'un côté, la rue piétonne rend le quartier plus agréable."],
      ['certes ..., mais', 'Certes, le projet coûte cher, mais il profite à tout le monde.'],
      ["à mon avis, l'emporter sur", "À mon avis, les avantages l'emportent sur les inconvénients."],
      ['je suis plutôt pour', 'Je suis donc plutôt pour, avec une condition.'],
      ['je reste toutefois', 'Je reste toutefois prudent.'],
      ['il mérite un essai', "Même si le projet n'est pas parfait, il mérite un essai."],
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
  { id: 'd-balance', title: 'Un fait gagne, ou côte à côte', format: 'sort' as const, coach: "Deux piles. Un fait gagne-t-il, ou les deux restent-ils côte à côte ? EN: sort by how the facts weigh.", buckets: ['un fait gagne', 'deux faits côte à côte'], items: [E(1401), E(1404), E(1414), E(1406), E(1400), E(1522)], audio: AUDIO },
  { id: 'd-memesi', title: 'Le présent après si', format: 'mcq' as const, coach: "Juste après même si, le présent ou l'imparfait. Le futur va dans l'autre moitié. EN: present after si.", q: "Même s'il ... demain, le marché aura lieu.", opts: ['pleut', 'pleuvra'], correct: 0, why: 'Juste après si, le présent. EN: present.', items: [E(1418), E(1424), E(1427), E(1430), E(1432), E(1417)], audio: AUDIO },
  { id: 'd-mode', title: 'Même si ou bien que', format: 'sort' as const, coach: "Deux piles : l'indicatif avec même si, le subjonctif avec bien que. EN: sort by mood.", buckets: ["même si : l'indicatif", 'bien que : le subjonctif'], items: [E(1441), E(1450), E(1426), E(1434), E(1449), E(1443)], audio: AUDIO },
  { id: 'd-malgre', title: 'Malgré, un nom', format: 'mcq' as const, coach: 'Un nom : malgré. Une phrase : bien que ou même si. EN: noun or clause.', q: '... la pluie, la fête continue.', opts: ['Bien que', 'Malgré'], correct: 1, why: 'La pluie, un nom. EN: a noun.', items: [E(1452), E(1453), E(1456), E(1458), E(1460), E(1465)], audio: AUDIO },
  { id: 'd-adverbe', title: "L'oral ou l'écrit", format: 'sort' as const, coach: "Deux piles : ce qui se dit entre amis, et ce qui s'écrit. EN: spoken or written.", buckets: ["à l'oral aussi", "surtout à l'écrit"], items: [E(1469), E(1484), E(1486), E(1472), E(1473), E(1474)], audio: AUDIO },
  { id: 'd-quandmeme', title: 'Quand même, à la fin', format: 'mcq' as const, coach: 'Un obstacle, puis quand même à la fin. Pas d’obstacle : de toute façon. EN: quand même after an obstacle.', q: 'Il pleut, mais on sort ... .', opts: ['quand même', 'de toute façon'], correct: 0, why: 'Il y a un obstacle : la pluie. EN: an obstacle.', items: [E(1487), E(1488), E(1489), E(1495), E(1498), E(1501)], audio: AUDIO },
  { id: 'd-beau', title: 'Avoir, beau, infinitif', format: 'mcq' as const, coach: "Avoir se conjugue, beau ne bouge pas, le verbe reste à l'infinitif. EN: only avoir changes.", q: "Elle ... beau crier, personne ne l'entend.", opts: ['a', 'est'], correct: 0, why: 'Avoir beau. EN: avoir.', items: [E(1503), E(1504), E(1507), E(1512), E(1516), E(1520)], audio: AUDIO },
  { id: 'd-alorsque', title: 'Comparer, pas le moment', format: 'mcq' as const, coach: 'Pour comparer deux faits, alors que ou tandis que. Pendant que dit le moment. EN: contrast or time.', q: 'Léa vient à vélo, ... monsieur Bélanger prend sa voiture.', opts: ['pendant que', 'alors que'], correct: 1, why: 'Tu compares. EN: a contrast.', items: [E(1521), E(1522), E(1524), E(1526), E(1529), E(1531)], audio: AUDIO },
  { id: 'd-contraire', title: 'Garder ou effacer', format: 'mcq' as const, coach: 'Par contre garde les deux faits ; au contraire efface le premier. EN: keep or cancel.', q: "Le quartier est calme. ... il n'y a pas de commerces.", opts: ['Par contre,', 'Au contraire,'], correct: 0, why: 'Le quartier reste calme. EN: both stay true.', items: [E(1542), E(1543), E(1544), E(1547), E(1538), E(1539)], audio: AUDIO },
  { id: 'd-carte', title: 'Une phrase, ou autre chose', format: 'sort' as const, coach: "Deux piles : l'outil est-il suivi d'une phrase, ou d'un nom ou d'un infinitif ? EN: sort by what follows.", buckets: ['+ une phrase', '+ un nom ou un infinitif'], items: [E(1558), E(1559), E(1564), E(1560), E(1561), E(1569)], audio: AUDIO },
  { id: 'd-avis', title: 'Les deux côtés', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute et dis de quel côté elle est. EN: read each aloud and say which side it is on.', items: [E(1571), E(1572), E(1573), E(1575), E(1576), E(1577)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'lien-plat', description: 'Uses au contraire for on the other hand, or puts the linking word on the wrong fact, so the listener hears the opposite position.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-balance', retest: 'd-balance' },
  { id: 'si-futur', description: 'Puts a future, a conditional or a subjunctive straight after même si, as English allows will after even if in some registers.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a11-mission'], drill: 'd-memesi', retest: 'd-memesi' },
  { id: 'mode-croise', description: 'Keeps the indicative after bien que, or spreads the subjunctive to même si, because both mean although.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check', 'a11-mission'], drill: 'd-mode', retest: 'd-mode' },
  { id: 'malgre-phrase', description: 'Writes malgré de, or puts a clause or an infinitive after malgré, calquing despite of or in spite of being.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-malgre', retest: 'd-malgre' },
  { id: 'registre-ecrit', description: 'Uses néanmoins or cependant in casual speech, doubles mais cependant in writing, or puts pourtant before the obstacle.', detectOn: ['a5-choisir', 'a5-erreurs', 'a5-check', 'a11-mission'], drill: 'd-adverbe', retest: 'd-adverbe' },
  { id: 'quandmeme-place', description: 'Opens the sentence with quand même, or uses it for anyway meaning in any case, where there is no obstacle.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-quandmeme', retest: 'd-quandmeme' },
  { id: 'beau-conjugue', description: 'Builds avoir beau with être, agrees beau, or conjugates the verb after it, and sometimes forgets the result clause.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-beau', retest: 'd-beau' },
  { id: 'pendant-contraste', description: 'Translates contrastive while as pendant que, uses alors alone for whereas, or puts a subjunctive after alors que.', detectOn: ['a8-choisir', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-alorsque', retest: 'd-alorsque' },
  { id: 'contraire-autre', description: 'Uses au contraire where both facts stay true, writes au lieu que or a conjugated verb after au lieu de, or ends a sentence with au lieu for instead.', detectOn: ['a9-choisir', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-contraire', retest: 'd-contraire' },
  { id: 'traduction-mot', description: 'Translates word for word from English: despite of, although always as bien que (or quoique in speech), even if with a future.', detectOn: ['a10-trier', 'a10-anglais', 'a10-check', 'a11-mission'], drill: 'd-carte', retest: 'd-carte' },
  { id: 'avis-plat', description: 'Writes a one-sided opinion, or hides the position inside the concessive clause, so the reader cannot tell which pan wins.', detectOn: ['a11-lecture', 'a11-cheat', 'a11-mission'], drill: 'd-avis', retest: 'd-avis' },
];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-32-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-32-fatou': "The video call (act 2), two voices: Fatou, a warm Dakar voice in her thirties, Senegalese French welcome, teasing and quick, and Ousmane, calm and amused, a Senegalese voice settled in Québec. The narrator is a third, neutral voice. Each même si opens its sentence with ordinary weight; the main clause after it carries the final stress.",
  'rec-b1-32-memesi': 'The four même si cards, one voice, plain delivery. Card three is imagined: read it with the slight lift of a hypothesis, no drama. Card four is a published row read at the same pace as the others.',
  'rec-b1-32-piege-si': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-32-bienque-ecoute': 'REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Lines one and two, three and four are pairs: read each pair with the SAME melody so the only audible difference is fait/fasse, est/soit. « fasse » has a clear /s/, « pleuve » a clear /v/.',
  'rec-b1-32-bienque': 'The four bien que cards, one voice. Card two holds two clauses across a middot; leave a clear beat and keep the same melody on both halves.',
  'rec-b1-32-boulangerie': 'The bakery (act 4), two voices: monsieur Bélanger, a Québécois baker in his sixties, warm and a little tired, and the learner, friendly. The roadworks are carried by the narrator only; no sound effects under the dialogue. « Malgré tout » is said with a small, stubborn smile.',
  'rec-b1-32-malgre': "The four malgré cards, one voice. On card two the two halves (bien qu'il fasse froid, malgré le froid) are read with the same rhythm so the learner hears the clause shrink to a noun.",
  'rec-b1-32-piege-malgre': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-32-article': "The news article (act 5), ONE VOICE, one take, a Belgian newsreader's delivery: clear, neutral, unhurried. cependant, néanmoins and toutefois sit inside their sentences with no pause beyond the commas. The quoted official at the end is the same voice, slightly warmer.",
  'rec-b1-32-adverbes': 'The four adverb cards, one voice. Card one (pourtant) is read like speech; cards two to four a notch more formal, like a text read aloud. The comma after each adverb is a short, real pause.',
  'rec-b1-32-quandmeme-ecoute': 'REQUIRED FOR THE EAR MISSION (act 6): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. quand même is NEVER stressed for teaching: the learner must find it by position. Line five (tout de même) is read in a slightly more careful register than the others.',
  'rec-b1-32-quandmeme': 'The four quand même cards, one voice. Card four (de toute façon) is read with a shrug in the voice: no obstacle, just in any case.',
  'rec-b1-32-cles': "The lost keys (act 7), two voices: Léa, rushed and exasperated, and Chloé, her flatmate, calm and practical. The narrator's last line is a third, neutral voice, with a small comic beat before « dehors ».",
  'rec-b1-32-beau': 'The four avoir beau cards, one voice. Card two lists three forms across middots with a clear beat between them. Card four (il a beau faire beau) is read straight, never as a joke: the learner hears two different beau.',
  'rec-b1-32-piege-beau': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-32-alorsque-ecoute': 'REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Contrast lines (alors que, tandis que) and time lines (pendant que) are read with the SAME neutral melody: the learner must decide from the words, not from the intonation.',
  'rec-b1-32-alorsque': "The four alors que cards, one voice. Card three (il est sorti sans manteau alors qu'il neigeait) carries a faint note of surprise on « neigeait », no more.",
  'rec-b1-32-piege-alorsque': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-32-lausanne': 'The flat visit (act 9), two voices: madame Favre, a Vaudoise estate agent, polite and brisk (Swiss French welcome), and the learner. Narrator lines are a third, neutral voice. « au contraire » is said lightly, as a correction, not a rebuke.',
  'rec-b1-32-outils': 'The four cards of act 9, one voice. Card one relaxed and spoken; card two a notch more formal, so par contre and en revanche sound like the same job in two registers.',
  'rec-b1-32-carte-ecoute': 'REQUIRED FOR THE EAR MISSION (act 10): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Lines one to six say the same thing six ways: read them with one identical melody so only the linking word and the verb change. « pleuve » has a clear /v/.',
  'rec-b1-32-carte': 'The four map cards, one voice, plain delivery. Every card ends « on sort » with the same final stress.',
  'rec-b1-32-piege-anglais': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-32-modele': 'The model opinion (act 11), ONE VOICE, one take: a Senegalese-Québécois father in his forties reading his own text aloud before sending it, calm, reasonable, firm. The moves (situation, one side, the other, his position, a solution) are audible as blocks. « je suis pour la fermeture » carries the weight of the text.',
  'rec-b1-32-courrier': "The resident's letter (act 1), ONE VOICE, one take: a woman in her seventies, Belgian French from Liège, reading her own letter aloud to a neighbour, calm and a little dry. Each linking word (pourtant, bien que, alors que, même si, malgré, par contre, quand même) is audible and never stressed for teaching. « quand même » at the very end lands with ordinary final stress.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 32',
  intro: 'You can already say mais. French has a dozen other ways to set two facts against each other, and each one says something different about how they weigh: whether the obstacle loses, whether the two facts simply sit side by side, or whether the first one is cancelled. Each also carries its own grammar: a clause in the indicative, a subjunctive, a noun or an infinitive. This lesson gives you the whole toolbox, by register, and ends with a balanced opinion on a local question.',
  skill: 'PE',
  grammarAssumed: [
    COORD_UNIT, SI_UNIT, SUBJ_FORM_UNIT, SUBJ_DECL_UNIT, SUBJ_INF_UNIT, TOUT_UNIT, MEME_UNIT, REGISTRE_UNIT,
  ],
  grammarIntroduced: [
    'même si with the indicative for concession, covering both even if and even though, with the si tense rule (no future or conditional immediately after si) and the imparfait / conditional pair for an imagined case',
    'bien que and quoique as concessive conjunctions chosen against même si, with the subjunctive, and the past subjunctive for recognition only',
    'malgré + noun as the nominal equivalent of a concessive clause, en dépit de in written French, and malgré tout',
    'pourtant, cependant, néanmoins and toutefois as sentence connectors, by register and position (initial with a comma, after the conjugated verb, between auxiliary and participle)',
    'quand même and tout de même in final or post-verbal position, contrasted with de toute façon for anyway meaning in any case',
    'avoir beau + infinitive, with avoir conjugated in any tense and beau invariable, followed by the unchanged result',
    'alors que and tandis que for opposition between two facts, with the indicative, contrasted with pendant que; alors que for surprise',
    'au lieu de + infinitive or noun; par contre (spoken) and en revanche (written) keeping both facts; au contraire after a negative, cancelling the first',
    'The register and form map of concession and opposition tools, and the English calques despite of, although always as bien que, and even if with a future',
    'Writing a balanced opinion: both sides, a concession to the other side, a clear position in the main clause',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais déjà dire mais. Le français a une dizaine d'autres façons d'opposer deux faits, et chacune dit comment ils pèsent : l'obstacle perd, les deux faits restent côte à côte, ou le premier disparaît. Chacune a aussi sa grammaire : l'indicatif, le subjonctif, un nom ou un infinitif. Cette leçon te donne toute la boîte à outils, par registre, et finit par un avis équilibré sur une question de ton quartier.",
    minutes: 135,
    difficulty: 3,
    glyph: 'bien que',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: CONCESSION_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, COURRIER_TEXT, ARTICLE_TEXT, MODELE_TEXT, dicteeFor };
