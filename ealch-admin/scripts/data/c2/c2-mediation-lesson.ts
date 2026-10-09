// c2.06.l1 « La médiation linguistique » — the lesson. DRAFT, second lesson
// of C2 wave 2. To RICH-LESSON-STANDARD.md (the workshop shape, text and
// task) on top of B1-BUILD-PLAYBOOK.md, with the C2 rules of
// C2-BUILD-PLAN.md and the c2.06 brief in C2-BUILD-LOG.md.
//
// Not imported, not merged into seed.json, not published. No Postgres
// session was opened while authoring this file beyond the single read-only
// probe recorded in the corpus file's header (§A): the predecessor is cited
// by REFRAME import and by trail position read from the local `seed.json`'s
// units array, never by reusing another lesson's item id.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Eight acts, one throughline: Léna Brasseur, a community legal clinic
//   volunteer, mediates a legal clause for an elderly tenant, a medical
//   discharge notice for a patient, and a municipal report for a new
//   colleague, always without a language change (that is c1.22's territory)
//   and always for one NAMED audience. Acts 1-2 name the problem and the
//   method (three levers); acts 3-4 build and test it with meaning kept past
//   plausible but flawed options; act 5 is the central C2 trap, false
//   simplification; act 6 holds fidelity as a hard line; act 7 rehearses all
//   three named audiences; act 8 is the graded reformulation of a new
//   technical passage.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le même texte, deux lecteurs   6  a legal clause nobody but a
//                                         specialist can read; the problem
//                                         named, past c1.22's own territory
//    2  Trois leviers pour médier      5  register, sentence length, the
//                                         technical term, across legal,
//                                         medical, scientific examples
//    3  Construire la reformulation    5  controlled practice, one lever at
//                                         a time, domain by domain
//    4  Garder le sens, pas la forme   5  the meaning-preserving choice,
//                                         among plausible but flawed options
//    5  Le piège de la fausse          4  the stepped trap: vocabulary
//       simplification                   simplified with the sentence kept
//                                         whole, or the reverse
//    6  Ce qu’on ne touche jamais      4  fidelity: no omission, no
//                                         invention, no condescension
//    7  Avant ta médiation             4  rehearsing all three named
//                                         audiences before the task
//    8  Ta médiation                  11  the model text, the plan, the
//                                         rehearsal, TASK, quiz, review,
//                                         roundup
//
//   TOTAL 44 missions, 8 acts (6,5,5,5,4,4,4,11). Corpus: 67 authored rows
//   (.2400-.2466, inside the claimed .2400-.2599 block). Quiz: 8 rounds of
//   8 (mcq, typeIn, errorSpot, listenChoose mixed). Eight error triggers,
//   eight remediation drills, four reference sheets, five terms, one
//   tapTable. Chapter artwork: `c2-mediation-image-prompts.md`, 8 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le sens ne rétrécit jamais ; seule la porte par laquelle il passe
//   change de taille. » EN: The meaning never shrinks; only the door it
//   passes through changes size.
//
//   ONE METAPHOR, THE DOOR. The object (the meaning, the actionable fact)
//   never changes size. Choosing a door (acts 1-2) means choosing a
//   register, a sentence length, a treatment for the technical term; a false
//   simplification (act 5) widens the door but cuts a piece off the object
//   to force it through; real mediation (acts 3-4, 6-8) resizes the door
//   without ever touching the object.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    reformulating a specialist French text for a named different
//           audience within French; the three levers (register, sentence
//           length, technical-term treatment) as a named method; false
//           simplification as a stepped, named trap; fidelity (no omission,
//           no invention, no condescension) as a hard line; producing a full
//           reformulation for a named audience, graded.
//   QUOTES  c1.22's reframe (act 1), imported from its own corpus file,
//           never retyped.
//   LEAVES  translating complex ideas language to language (English to
//           French) to c1.22; this lesson never leaves French. c1.22's own
//           act 10 ("changer de public", one sentence, three audiences) is
//           gone past into a full paragraph, a named trap and a graded task.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use vous where the situation calls for
//   it. French only on the learner surface; English authored on every `en`
//   field and every trailing « EN: », never shown by default. No em dash, no
//   U+203F tie, never "honnête"/"honnêtement"/"honest". Typographic ’
//   throughout. No spaced « ? » or « ! » in a scene or story bubble.
//   Citations by trail position in French words (« la leçon 22 du C1 »),
//   never a raw id. Mission answer slots are spread by `balanceSlots()`; the
//   quiz is left with its authored slots scattered by hand, as c2.01 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 44 missions, close to c2.01's 45. Every sub-topic in the brief is
//      covered once, fully. Extend any single act before the phone review,
//      or ship at this size?
//   2. The task (act 8) marks fidelity, register, sentence length and term
//      treatment together, a five-criterion rubric (20 points) mirroring
//      c2.01's six-criterion one. Split into two shorter tasks instead?
//   3. The task's named audience is "les familles abonnées au bulletin
//      municipal du quartier" (a general public, distinct from the acts'
//      three named audiences, to test transfer). Name a narrower audience
//      instead (e.g. explicitly a child) for a cleaner grading target?
//   4. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.
//   5. All three specialist/plain-language text pairs are ORIGINAL, written
//      for this lesson (brief's preferred route, to sidestep any copyright
//      question). Confirm this is the wanted route, or substitute a
//      verified-reusable public-sector source at pre-review?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap, ALL_ROWS, ROWS_BY_ACT,
  IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor, MEDIATION_SOURCE, MEDIATION_SOURCE_EN,
  C122_REF, C122_REFRAME, C122_REFRAME_EN,
} from './c2-mediation-corpus.ts';
import { MEDIATION_TERMS } from './c2-mediation-terms.ts';

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

/** An item’s fr/en. Throws on a typo, so no section can name an id that
 *  does not exist in this lesson’s own corpus. */
function src(id: string): SrcItem {
  const r = ROW.get(id);
  if (!r) throw new Error(`c2.06: no item ${id}`);
  return r;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
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

/** THE "USE IT" BEAT for acts 4 and 7: applying the method to a fresh case. */
function pourTaMediation(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ta médiation', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

const STEPS_STD = (cards: string, audio: string, drill: string) => ([
  { label: 'La règle', kind: 'rule' as const, title: 'La règle' },
  { label: 'Six cartes', kind: 'cards' as const, title: cards },
  { label: 'Écoute', kind: 'audio' as const, title: audio },
  { label: 'À toi', kind: 'drill' as const, title: drill, gate: true },
]);

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE MÊME TEXTE, DEUX LECTEURS
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Une lettre, deux lecteurs', frSub: 'La clinique juridique communautaire',
  setting: { place: 'La clinique juridique communautaire', city: '', time: '14 h', ambience: 'un petit bureau, une lettre sur la table, M. Castonguay qui attend' },
  beats: [
    { kind: 'narration', text: "Léna Brasseur est bénévole à la clinique juridique communautaire. M. Castonguay, un locataire de soixante-quatorze ans, vient de recevoir une lettre de son propriétaire.", size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'M. Castonguay', fr: src(E(2401)).fr, en: src(E(2401)).en, respell: '[zhuh nuh kohⁿ-prahⁿ pa ühⁿ moh duh seht leh-TR lay-NA]', size: 'md', audio: AUDIO },
    { kind: 'narration', text: "La lettre dit ceci.", size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'coach', fr: src(E(2400)).fr, en: src(E(2400)).en, size: 'lg', audio: AUDIO },
    {
      kind: 'choice', prompt: "M. Castonguay demande à Léna ce que ça veut dire. Par quoi commence-t-elle.", size: 'lg',
      options: [
        { fr: "D’abord, laissez-moi vous expliquer la notion de clause résolutoire dans le droit du bail.", en: 'First, let me explain to you the notion of a termination clause in lease law.', outcome: 'breaks', audio: AUDIO },
        { fr: src(E(2402)).fr, en: src(E(2402)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "M. Castonguay hoche la tête : « Ah, voilà. Ça, je comprends. »",
        breaks: "M. Castonguay fronce les sourcils : « Vous me parlez encore comme la lettre. »",
      },
    },
    {
      kind: 'break', heading: 'Deux lecteurs, un seul sens',
      body: `La lettre et la réponse de Léna disent la même chose : le délai, le risque, la cause. Seule la porte change de taille. EN: The letter and Léna’s reply say the same thing: the deadline, the risk, the cause. Only the door changes size.`,
      wrong: { fr: 'D’abord, laissez-moi vous expliquer la notion de clause résolutoire.', ipa: '/dabɔʁ lɛse mwa vu zɛksplike la nɔsjɔ̃ də kloz ʁezɔlytwaʁ/', respell: '[dah-bor leh-SAY mwa vu zex-plee-KAY la noh-SYOHⁿ duh klohz ray-zoh-lü-TWAR]', en: 'First, let me explain to you the notion of a termination clause.' },
      right: { fr: 'Le propriétaire peut mettre fin au bail si vous ne respectez pas une règle, après trente jours.', ipa: '/lə pʁɔpʁijetɛʁ pø mɛtʁ fɛ̃ o baj si vu nə ʁɛspɛkte pa yn ʁɛgl apʁɛ tʁɑ̃t ʒuʁ/', respell: '[luh proh-pree-ay-TEHR puh MEHTR fehⁿ oh BAH see vu nuh reh-spek-TAY pa ün REHGL a-PREH trahⁿt ZHOOR]', en: 'The landlord can end the lease if you do not follow a rule, after thirty days.' },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: "M. Castonguay comprend enfin sa lettre. Cette leçon t’apprend à faire ce que Léna vient de faire : reformuler un texte de spécialiste pour un public nommé, sans jamais en changer le sens.", size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['mediation', 'publicNomme'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Nommer les trois leviers de la médiation', s: 'Acte 2 : le registre, la longueur de phrase, le terme technique' },
    { t: 'Construire une reformulation contrôlée', s: 'Acte 3 : un levier à la fois, dans trois domaines' },
    { t: 'Garder le sens, jamais la forme la plus facile', s: 'Acte 4 : choisir parmi des options plausibles mais fausses' },
    { t: 'Repérer la fausse simplification', s: 'Acte 5 : le piège central, un seul levier ne suffit jamais' },
    { t: 'Rester fidèle, puis le prouver', s: 'Actes 6 à 8 : aucune perte, aucune invention, puis ta mission' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'La lettre du propriétaire', frSub: 'Ce que dit la lettre, et ce qu’elle veut dire',
  text: "« En cas de manquement persistant du locataire à ses obligations, le bailleur peut se prévaloir de la clause résolutoire après signification d’une mise en demeure, à défaut de régularisation dans le délai imparti de trente jours. »\n\nM. Castonguay a lu cette phrase trois fois sans en saisir le sens. Léna, elle, y trouve trois informations : qui peut agir, à quelle condition, et avec quel délai. Son travail n’est pas de traduire une langue vers une autre, puisque la lettre est déjà en français ; son travail est de faire passer ces trois informations par une porte que M. Castonguay peut ouvrir.",
  glossary: [
    { word: 'bailleur', en: 'landlord', note: 'Celui qui loue le logement. EN: the one who rents out the housing.' },
  ],
  questions: [
    { q: "Devine le sens, sans dictionnaire : « se prévaloir de la clause résolutoire ». Qui agit, et pour faire quoi.", a: 'Le propriétaire, pour mettre fin au bail.' },
    { q: 'Quelles sont les trois informations que Léna doit garder, peu importe les mots qu’elle choisit.', a: 'Qui peut agir (le propriétaire), à quelle condition (des manquements répétés, non corrigés), et avec quel délai (trente jours).' },
    { q: 'Pourquoi ce travail n’est-il pas une traduction, au sens de la leçon 22 du C1.', a: "Parce que la lettre est déjà en français ; Léna change seulement le registre et la longueur de la phrase, jamais la langue." },
  ],
  audio: REC('rec-c2-06-lettre'), say: REFRAME, terms: ['mediation'],
};

const A1_ACQUIS: Sec<'examples'> = {
  type: 'examples', id: 'a1-acquis', layer: 'core', sheetId: 'sheet-mediation',
  title: 'Ce que tu sais déjà',
  examples: [
    { fr: C122_REFRAME, en: C122_REFRAME_EN, note: `${Cap(C122_REF)} : garder l’idée, la force et le fil en changeant de LANGUE` },
    { fr: "Cette leçon ne change jamais de langue : elle change de PUBLIC, dans la même langue.", en: 'This lesson never changes language: it changes AUDIENCE, within the same language.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['mediation'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Un médecin parle à un jeune patient', fr: src(E(2408)).fr, en: src(E(2408)).en },
    { situation: 'Un rapport municipal atteint le grand public', fr: src(E(2409)).fr, en: src(E(2409)).en },
    { situation: 'Une clinique juridique reçoit une cliente âgée', fr: src(E(2411)).fr, en: src(E(2411)).en },
    { situation: 'Un terme technique face à un public non spécialiste', fr: src(E(2412)).fr, en: src(E(2412)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['mediation', 'publicNomme'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le même sens', 'La lettre de l’avis et la reformulation de Léna disent...', ['deux choses différentes', 'exactement la même chose, autrement'], 1,
    'Le délai, le risque et la cause restent identiques ; seule la porte change. EN: the deadline, the risk and the cause stay identical; only the door changes.'),
  ctl('Ce que Léna ne fait jamais', 'En reformulant pour M. Castonguay, Léna...', ['change la langue du texte', 'change le registre et la longueur, jamais la langue'], 1,
    'La lettre reste en français du début à la fin ; seul le public change. EN: the letter stays French throughout; only the audience changes.'),
  ctl('La mission de cette leçon', 'Cette leçon t’apprend à...', ['reformuler un texte de spécialiste pour un public nommé, sans en changer le sens', 'traduire un texte vers l’anglais', 'simplifier en coupant des informations'], 0,
    'Reformuler, pas traduire ni couper. EN: reformulate, never translate nor cut.'),
], ['mediation']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le même texte, deux lecteurs',
    opener: {
      line: "M. Castonguay relit trois fois la même phrase sans en comprendre un mot : ici tu apprends pourquoi reformuler n’est pas traduire. EN: Mr. Castonguay rereads the same sentence three times without understanding a word: here you learn why reformulating is not translating.",
      imageRef: 'lessons/c2-06-mediation/act01.jpg',
    },
    sections: [],
    milestone: "Tu nommes la différence entre traduire une langue et médier pour un public, dans la même langue. EN: You can name the difference between translating a language and mediating for an audience, within the same language.",
    estScreens: 24, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_ACQUIS, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — TROIS LEVIERS POUR MÉDIER
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-mediation-domaines',
  title: 'Trois leviers, trois domaines', frSub: 'Le registre, la longueur, le terme technique',
  hint: 'Trois cartes. Chaque fois, le fait ne change pas ; la porte, oui.',
  audio: REC('rec-c2-06-trois-leviers'), say: REFRAME, terms: ['leviers'],
  cards: [
    { head: 'Le registre', label: 'les mots eux-mêmes', fr: src(E(2414)).fr, sub: '[a-pray lo-pay-ra-SYOHⁿ eel eh nor-MAL]',
      body: "« Algie résiduelle » devient « un peu de douleur » : le fait (une douleur attendue, normale) ne change pas, seul le mot change. EN: \"algie résiduelle\" becomes \"a little pain\": the fact does not change, only the word does." },
    { head: 'La longueur de phrase', label: 'la forme de la phrase', fr: src(E(2417)).fr, sub: '[eel ya plü duh bay-TOHⁿ ay da-sfalt oh sahⁿ-truh-VEEL]',
      body: "Une seule phrase à deux idées imbriquées devient deux phrases simples, l’une après l’autre, sans rien perdre. EN: one sentence nesting two ideas becomes two simple sentences, one after the other, losing nothing." },
    { head: 'Le terme technique', label: 'ce qu’il devient', fr: src(E(2422)).fr, sub: '[suh fay-noh-MEN port ühⁿ nohⁿ pray-SEE]',
      body: "« Îlot de chaleur urbain » reste le terme exact pour Karim, un collègue déjà compétent en français : on le garde, et on l’explique. EN: for Karim, a colleague already fluent in French, the exact term is kept and explained, never erased." },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a2-table', layer: 'core', sheetId: 'sheet-mediation',
  title: 'Le même fait, trois publics',
  cols: ['Le texte de spécialiste', 'Pour un profane', 'Pour un enfant', 'Pour un collègue'],
  rows: [
    { cells: [src(E(2413)).fr, src(E(2414)).fr, src(E(2437)).fr, src(E(2413)).fr], say: src(E(2414)).fr,
      detail: { title: 'La même douleur attendue, trois portes', body: "Le fait médical ne change jamais ; les mots et la longueur de la phrase s’ajustent au lecteur. EN: the medical fact never changes; the words and the sentence length adjust to the reader.", say: src(E(2437)).fr } },
    { cells: [src(E(2420)).fr, src(E(2423)).fr, src(E(2421)).fr, src(E(2420)).fr], say: src(E(2423)).fr,
      detail: { title: 'La même clause, trois portes', body: "« Clause résolutoire » devient une idée simple pour un adulte, et une image concrète pour un enfant. EN: \"clause résolutoire\" becomes a simple idea for an adult, and a concrete image for a child.", say: src(E(2421)).fr } },
    { cells: [src(E(2416)).fr, src(E(2417)).fr, src(E(2417)).fr, src(E(2422)).fr], say: src(E(2422)).fr,
      detail: { title: 'Le même phénomène, le terme gardé ou non', body: "Pour un collègue compétent, le terme exact reste et s’explique ; pour le grand public, l’image suffit sans le nom savant. EN: for a competent colleague, the exact term stays and is explained; for the general public, the image is enough without the technical name.", say: src(E(2417)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['leviers'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a2-exemples', layer: 'core', title: 'Trois façons de traiter un terme',
  examples: [
    ex(E(2426), 'garder et expliquer : pour un public déjà compétent'),
    ex(E(2427), 'remplacer par une image : pour un public qui n’a pas besoin du mot savant'),
    ex(E(2428), 'généraliser le terme : quand le mot exact n’ajoute rien d’utile'),
    ex(E(2425), 'ce qui ne bouge jamais, peu importe le levier'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['leviers'],
};

const A2_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-groupe', layer: 'core', size: 'lg',
  title: 'Associe le levier à son exemple', frSub: 'Trois leviers, un geste chacun',
  groups: [
    grp('Le registre', [
      it(E(2413), 'le mot savant'),
      it(E(2414), 'le mot courant'),
    ], chk('Entre ces deux phrases, ce qui change est...', ['le fait médical', 'seulement le mot'], 1,
      'Le fait (une douleur attendue, normale) reste identique. EN: the fact stays identical.')),
    grp('La longueur de phrase', [
      it(E(2416), 'une seule phrase à deux idées imbriquées'),
      it(E(2417), 'deux phrases simples'),
    ], chk('La version en deux phrases simples a...', ['perdu une information', 'gardé les deux mêmes informations, dans un ordre plus clair'], 1,
      'Rien n’est perdu ; seule la forme change. EN: nothing is lost; only the form changes.')),
    ctl('Le terme technique', 'Face à un collègue déjà compétent en français, le terme exact...', ['s’efface toujours', 'se garde, et s’explique'], 1,
      'Un collègue compétent n’a pas besoin qu’on lui cache le mot exact. EN: a competent colleague does not need the exact word hidden from them.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['leviers'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Les trois leviers', 'Médier, c’est toucher...', ['un seul levier, celui qui est le plus facile', 'le registre, la longueur de phrase et le terme technique ensemble'], 1,
    'Les trois leviers bougent ensemble, jamais un seul (l’acte 5 le prouve). EN: the three levers move together, never just one.'),
  ctl('Ce qui ne bouge jamais', 'D’une version à l’autre, ce qui reste identique est...', ['le vocabulaire', 'l’information elle-même : le délai, le risque, la cause'], 1,
    'Le fond ne change jamais, seule la forme s’ajuste. EN: the substance never changes, only the form adjusts.'),
  ctl('Trois façons de traiter un terme', 'Un terme technique peut être...', ['gardé et expliqué, remplacé par une image, ou généralisé', 'toujours effacé sans exception'], 0,
    'Trois traitements possibles, choisis selon le public. EN: three possible treatments, chosen according to the audience.'),
], ['leviers']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Trois leviers pour médier',
    opener: {
      line: "Un même fait médical, légal ou scientifique passe par trois leviers avant d’atteindre un nouveau lecteur : ici tu les nommes. EN: The same medical, legal or scientific fact passes through three levers before reaching a new reader: here you name them.",
      imageRef: 'lessons/c2-06-mediation/act02.jpg',
    },
    sections: [],
    milestone: 'Tu nommes les trois leviers de la médiation et ce qui ne bouge jamais entre les versions. EN: You can name the three levers of mediation and what never moves between versions.',
    estScreens: 26, restPoints: ['a2-table', 'a2-groupe'],
  },
  sections: [A2_DECK, A2_TABLE, A2_EXEMPLES, A2_GROUPE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — CONSTRUIRE LA REFORMULATION
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a3-histoire', layer: 'core',
  title: 'Trois textes, un seul geste', frSub: 'Léna reformule, domaine par domaine',
  setting: 'Dans le même après-midi, Léna reformule un extrait médical, un extrait juridique et un extrait scientifique.',
  bubbles: [
    { from: 'narrator', fr: 'Le texte médical de la Dr Pelletier, pour une patiente.', en: 'Dr Pelletier’s medical text, for a patient.' },
    { from: 'coach', fr: src(E(2429)).fr, en: src(E(2429)).en },
    { from: 'user', fr: src(E(2430)).fr, en: src(E(2430)).en },
    { from: 'narrator', fr: 'Le texte juridique du bail, pour M. Castonguay.', en: 'The lease’s legal text, for Mr. Castonguay.' },
    { from: 'coach', fr: src(E(2432)).fr, en: src(E(2432)).en },
    { from: 'user', fr: src(E(2433)).fr, en: src(E(2433)).en },
  ],
  closing: { fr: 'Même geste, trois fois : repérer le levier, l’ajuster, garder le fait.', en: 'The same move, three times: spot the lever, adjust it, keep the fact.' },
  audio: REC('rec-c2-06-trois-textes'), say: REFRAME, terms: ['leviers'],
};

const A3_MEDICAL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-medical', layer: 'core', size: 'lg',
  title: 'Le domaine médical', frSub: 'Un levier, puis l’autre',
  groups: [
    grp('Le bon registre', [
      it(E(2429), 'le texte de spécialiste'),
      it(E(2430), 'la bonne reformulation'),
      free(src(E(2431)).fr, src(E(2431)).en, 'les mots simples, la phrase intacte'),
    ], chk('Laquelle des deux reformulations touche vraiment les deux leviers ensemble.', ['celle aux mots simples et à la phrase longue', 'celle aux mots simples et aux phrases courtes'], 1,
      'Les mots simples ne suffisent pas si la phrase garde sa structure imbriquée (l’acte 5 y revient). EN: simple words are not enough if the sentence keeps its nested structure.')),
    ctl('Le seuil de fièvre', 'Le chiffre « 38,5 degrés » dans la consigne de la Dr Pelletier...', ['peut être remplacé par « si ça va mal »', 'doit rester précis, c’est le fait qui sert à agir'], 1,
      'Un chiffre actionnable ne devient jamais une impression vague. EN: an actionable number never becomes a vague impression.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['leviers'],
};

const A3_JURIDIQUE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-juridique', layer: 'core', size: 'lg',
  title: 'Le domaine juridique', frSub: 'La même règle, reformulée',
  groups: [
    grp('La bonne reformulation', [
      it(E(2432), 'le texte de spécialiste'),
      it(E(2433), 'la bonne reformulation'),
    ], chk('« Le bail prend fin de plein droit » devient, pour M. Castonguay...', ['« le bail se termine automatiquement »', '« le bail pourrait peut-être se terminer »'], 0,
      'Le fait (une fin automatique, sans autre démarche) reste exact. EN: the fact (an automatic end, no further step) stays exact.')),
    ctl('La longueur de la phrase', 'La phrase de spécialiste contient deux idées (la condition, la conséquence) ; la reformulation...', ['les fusionne en une seule idée confuse', 'les garde toutes les deux, dans l’ordre'], 1,
      'Deux idées, deux phrases simples, dans le même ordre que l’original. EN: two ideas, two simple sentences, in the same order as the original.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['leviers'],
};

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a3-ecoute', layer: 'core', hideLines: true,
  title: 'Spécialiste ou reformulé', frSub: 'Huit phrases, trois domaines',
  lines: [ln(E(2400)), ln(E(2402)), ln(E(2413)), ln(E(2414)), ln(E(2416)), ln(E(2417)), ln(E(2432)), ln(E(2433))],
  questions: [
    { q: 'Première et deuxième phrases : laquelle vise un public non spécialiste.', opts: ['la première', 'la deuxième'], correct: 1,
      why: 'La deuxième utilise des phrases courtes et des mots courants. EN: the second uses short sentences and everyday words.' },
    { q: 'Troisième et quatrième phrases : laquelle garde le mot savant « algie ».', opts: ['la troisième', 'la quatrième'], correct: 0,
      why: '« Algie résiduelle » n’apparaît que dans le texte de spécialiste. EN: "algie résiduelle" only appears in the specialist text.' },
    { q: 'Cinquième et sixième phrases : laquelle est coupée en deux phrases simples.', opts: ['la cinquième', 'la sixième'], correct: 1,
      why: 'La sixième sépare la cause et la conséquence en deux phrases. EN: the sixth separates cause and consequence into two sentences.' },
    { q: 'Septième et huitième phrases : laquelle un enfant pourrait comprendre sans aide.', opts: ['la septième', 'la huitième'], correct: 1,
      why: '« Si rien n’est réglé, le bail se termine automatiquement » reste simple et concret. EN: it stays simple and concrete.' },
  ],
  audio: REC('rec-c2-06-trois-domaines-ecoute'), say: REFRAME, terms: ['leviers'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le chiffre actionnable', 'Un chiffre comme un délai ou un seuil de fièvre...', ['peut devenir une impression vague', 'reste précis, dans toutes les versions'], 1,
    'Un chiffre qui sert à agir ne devient jamais vague. EN: a number needed to act never becomes vague.'),
  ctl('L’ordre des idées', 'La condition et la conséquence d’une règle...', ['peuvent être fusionnées sans perte', 'restent dans le même ordre, séparées si besoin'], 1,
    'L’ordre logique de l’original guide la reformulation. EN: the original’s logical order guides the reformulation.'),
  ctl('Trois domaines, un même geste', 'Le médical, le juridique et le scientifique demandent...', ['trois méthodes différentes', 'le même geste : repérer le levier, l’ajuster, garder le fait'], 1,
    'La méthode ne change pas avec le domaine. EN: the method does not change with the domain.'),
], ['leviers']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Construire la reformulation',
    opener: {
      line: "Léna applique le même geste à un texte médical, un texte juridique, un texte scientifique : ici tu t’entraînes, domaine par domaine. EN: Léna applies the same move to a medical text, a legal text, a scientific text: here you practise, domain by domain.",
      imageRef: 'lessons/c2-06-mediation/act03.jpg',
    },
    sections: [],
    milestone: 'Tu construis une reformulation contrôlée en ajustant un levier à la fois, dans trois domaines. EN: You can build a controlled reformulation by adjusting one lever at a time, across three domains.',
    estScreens: 28, restPoints: ['a3-medical', 'a3-juridique'],
  },
  sections: [A3_HISTOIRE, A3_MEDICAL, A3_JURIDIQUE, A3_ECOUTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — GARDER LE SENS, PAS LA FORME
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a4-lecture', layer: 'core', questionsInModal: true,
  title: 'Quatre reformulations, une seule juste', frSub: 'Le fait scientifique, quatre fois',
  text: "Karim, le nouveau collègue de Léna à la ville, lui montre un paragraphe sur l’îlot de chaleur urbain et lui demande une version plus accessible pour son propre rapport. Léna lui propose quatre versions possibles, et une seule garde à la fois le fait exact et le respect du lecteur.",
  glossary: [
    { word: 'accessible', en: 'accessible', note: 'Facile à comprendre sans perdre le sens. EN: easy to understand without losing the meaning.' },
  ],
  questions: [
    { q: "« Il fait plus chaud en ville, c’est tout. » Que perd cette version.", a: 'La cause exacte (le béton, l’albédo réduit) : elle reste trop vague pour être vraiment utile.' },
    { q: "« La rétention calorifique nocturne est plus élevée en zone urbanisée en raison de l’albédo réduit. » Quel levier n’a pas bougé.", a: 'Le registre : le jargon reste intact, rien n’a été reformulé.' },
    { q: "« Cette chaleur emprisonnée cause des dégâts irréversibles aux habitants chaque été. » Quelle est la faute.", a: 'Une invention : la source ne dit rien de ce genre de dégâts.' },
  ],
  audio: REC('rec-c2-06-quatre-versions'), say: REFRAME, terms: ['fidelite'],
};

const A4_SCIENTIFIQUE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-scientifique', layer: 'core', size: 'lg',
  title: 'Le bon choix, pour Karim', frSub: 'Une bonne version, trois fausses',
  groups: [
    grp('Les quatre versions', [
      it(E(2417), 'la bonne version'),
      it(E(2439), 'trop vague : l’omission'),
      it(E(2440), 'trop technique : le jargon'),
      it(E(2441), 'une invention : l’ajout'),
    ], chk('Laquelle des quatre garde la cause exacte sans jargon ni invention.', ['la bonne version', 'les trois autres'], 0,
      'Seule la bonne version touche les deux leviers sans perdre ni ajouter de fait. EN: only the right version moves both levers without losing or adding a fact.')),
    ctl('La faute de l’omission', '« Il fait plus chaud en ville, c’est tout » rate la mission parce qu’elle...', ['est trop longue', 'efface la cause, qui sert pourtant à comprendre le phénomène'], 1,
      'Une version vraiment utile garde la cause, même simplifiée. EN: a genuinely useful version keeps the cause, even simplified.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['fidelite'],
};

const A4_JURIDIQUE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-juridique', layer: 'core', size: 'lg',
  title: 'Le bon choix, pour M. Castonguay', frSub: 'Une bonne version, trois fausses',
  groups: [
    grp('Les quatre versions', [
      it(E(2402), 'la bonne version'),
      it(E(2443), 'trop vague : l’omission du délai'),
      it(E(2442), 'condescendante : la méfiance'),
      it(E(2444), 'une invention : une menace que la lettre ne fait pas'),
    ], chk('Laquelle des quatre garde le délai exact sans condescendance ni menace inventée.', ['la bonne version', 'les trois autres'], 0,
      'La bonne version nomme le délai de trente jours, sans minimiser ni dramatiser. EN: the right version names the thirty-day deadline, without minimising or overstating.')),
    ctl('La faute de la condescendance', '« Laissez-moi m’en occuper, c’est trop compliqué pour vous » est une faute parce qu’elle...', ['explique trop en détail', 'retire à M. Castonguay le droit de comprendre sa propre lettre'], 1,
      'Expliquer simplement n’est jamais décider à la place du lecteur. EN: explaining simply is never deciding on the reader’s behalf.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['fidelite'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le fait qui sert à agir', 'Parmi plusieurs reformulations plausibles, la bonne...', ['garde le fait qui sert vraiment à agir', 'choisit la version la plus courte, peu importe le reste'], 0,
    'Le délai, la cause et le risque restent la priorité. EN: the deadline, the cause and the risk remain the priority.'),
  ctl('L’invention', 'Ajouter une certitude ou un risque que la source ne fait pas est...', ['une bonne clarification', 'une faute de fidélité'], 1,
    'La médiation ne prête jamais au texte ce qu’il n’a pas dit. EN: mediation never lends the text what it never said.'),
  ctl('La condescendance', 'Parler à un adulte comme à un enfant pour simplifier est...', ['nécessaire pour être clair', 'une faute distincte de la simplification réussie'], 1,
    'La clarté n’exige jamais de perdre le respect du lecteur. EN: clarity never requires losing respect for the reader.'),
], ['fidelite']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Garder le sens, pas la forme',
    opener: {
      line: "Quatre reformulations possibles pour le même fait, et une seule garde vraiment le sens : ici tu apprends à repérer les trois autres. EN: Four possible reformulations of the same fact, and only one truly keeps the meaning: here you learn to spot the other three.",
      imageRef: 'lessons/c2-06-mediation/act04.jpg',
    },
    sections: [],
    milestone: 'Tu choisis, parmi plusieurs reformulations plausibles, celle qui garde le sens sans l’appauvrir, l’inventer ni le dramatiser. EN: You can choose, among several plausible reformulations, the one that keeps the meaning without impoverishing, inventing or overstating it.',
    estScreens: 28, restPoints: ['a4-scientifique', 'a4-juridique'],
  },
  sections: [A4_LECTURE, A4_SCIENTIFIQUE, A4_JURIDIQUE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LE PIÈGE DE LA FAUSSE SIMPLIFICATION
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-piege',
  title: 'Un seul levier ne suffit jamais', frSub: 'Deux fausses simplifications',
  hint: 'Deux cartes. Chacune bouge un seul levier, et rate la mission.',
  audio: REC('rec-c2-06-deux-pieges'), say: REFRAME, terms: ['fausseSimplification'],
  cards: [
    { head: 'Les mots simples, la phrase intacte', label: 'le registre seul', fr: src(E(2450)).fr,
      body: "Remplacer chaque mot savant sans toucher à la structure de la phrase laisse un texte toujours difficile à suivre d’un souffle. EN: replacing each fancy word without touching the sentence structure still leaves a text hard to follow in one breath." },
    { head: 'Les phrases courtes, le jargon intact', label: 'la longueur seule', fr: src(E(2451)).fr,
      body: "Couper une phrase longue en plusieurs phrases courtes, sans jamais expliquer le terme technique qu’elle contient, n’est que l’original, en morceaux. EN: cutting a long sentence into several short ones, without ever explaining the technical term it contains, is only the original, in pieces." },
  ],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a5-piege', layer: 'core', swipe: true,
  title: 'Six fausses simplifications',
  rule: {
    title: 'Les deux leviers bougent ensemble, ou aucun n’a vraiment bougé',
    body: "Chacune de ces six versions a bougé un seul levier. Chacune ressemble à une simplification réussie, et rate quand même la mission. EN: each of these six versions moved only one lever; each looks like a successful simplification, and still misses the mission.",
  },
  cards: [
    { promptLabel: 'juridique, mots simples, phrase intacte', promptSound: "Si la personne qui loue ne fait pas ce qui est écrit plusieurs fois malgré les avertissements donnés avant, celle qui possède le logement peut dire que l’entente est finie, si rien n’a changé dans le temps donné.",
      fr: src(E(2402)).fr, ipa: '/si vu nə ʁɛspɛkte pa yn ʁɛgl dy baj də fasɔ̃ ʁepete lə pʁɔpʁijetɛʁ pø mɛtʁ fɛ̃ o baj/',
      tip: 'Les mots sont simples, mais la phrase garde ses cinq étages ; personne ne la lit d’un souffle. EN: the words are simple, but the sentence keeps its five storeys; nobody reads it in one breath.' },
    { promptLabel: 'médical, phrases courtes, jargon intact', promptSound: 'Une algie résiduelle est attendue. Elle dure quarante-huit heures. Une compresse froide intermittente est recommandée.',
      fr: src(E(2414)).fr, ipa: '/apʁɛ lɔpeʁasjɔ̃ il ɛ nɔʁmal davwaʁ œ̃ pø də dulœʁ/',
      tip: 'Les phrases sont courtes, mais « algie résiduelle » et « intermittente » restent du jargon non expliqué. EN: the sentences are short, but "algie résiduelle" and "intermittente" stay unexplained jargon.' },
    { promptLabel: 'scientifique, mots simples, phrase intacte', promptSound: "Le fait qu’il y ait plus de ciment et moins de plantes en ville, combiné au fait que ces surfaces dures gardent la chaleur plus longtemps que les surfaces vertes des alentours, explique pourquoi il fait plus chaud la nuit en ville.",
      fr: src(E(2417)).fr, ipa: '/il i a plys də betɔ̃ e dasfalt o sɑ̃tʁəvil e se syʁfas ʁefleʃis mwɛ̃ bjɛ̃/',
      tip: 'Les mots sont courants, mais la phrase imbrique encore deux idées en une seule. EN: the words are everyday, but the sentence still nests two ideas into one.' },
    { promptLabel: 'médical, phrases courtes, jargon intact', promptSound: 'Il faut consulter sans délai. Le seuil est de 38,5 degrés. C’est une élévation thermique.',
      fr: src(E(2438)).fr, ipa: '/si vu fɛte də la fjɛvʁ oʒɛsy də tʁɑ̃tyi.sɛ̃k dəgʁe apəle la klinik tu də sɥit/',
      tip: '« Seuil » et « élévation thermique » restent des mots de spécialiste, même dans des phrases courtes. EN: "seuil" and "élévation thermique" stay specialist words, even in short sentences.' },
    { promptLabel: 'juridique, phrases courtes, jargon intact', promptSound: 'Il y a une clause résolutoire. Elle peut s’appliquer. Il faut une mise en demeure d’abord.',
      fr: src(E(2402)).fr, ipa: '/si vu nə ʁɛspɛkte pa yn ʁɛgl dy baj də fasɔ̃ ʁepete lə pʁɔpʁijetɛʁ pø mɛtʁ fɛ̃ o baj/',
      tip: '« Clause résolutoire » et « mise en demeure » restent intacts, malgré les phrases courtes. EN: "clause résolutoire" and "mise en demeure" stay intact, despite the short sentences.' },
    { promptLabel: 'médical, mots simples, phrase intacte', promptSound: "Comme après l’opération il est tout à fait normal que la personne ressente, à l’endroit précis où la peau a été coupée, une douleur qui ne dure généralement pas plus de deux jours environ, il n’y a pas lieu de s’inquiéter.",
      fr: src(E(2414)).fr, ipa: '/apʁɛ lɔpeʁasjɔ̃ il ɛ nɔʁmal davwaʁ œ̃ pø də dulœʁ/',
      tip: 'Les mots sont simples, mais une seule phrase porte encore toute l’idée, sans respirer. EN: the words are simple, but one single sentence still carries the whole idea, with no breath.' },
  ],
  drill: [
    { promptSay: 'Simplifier les mots sans raccourcir une phrase à cinq étages est...', opts: ['une vraie médiation', 'une fausse simplification'], correct: 1 },
    { promptSay: 'Couper une phrase en trois sans jamais expliquer le terme technique est...', opts: ['une vraie médiation', 'une fausse simplification'], correct: 1 },
    { promptSay: 'La vraie médiation touche...', opts: ['un seul levier, le plus visible', 'les deux leviers à la fois'], correct: 1 },
    { promptSay: 'Pour « algie résiduelle », une fausse simplification garde souvent...', opts: ['le mot savant, même en phrase courte', 'un mot courant, dans une phrase claire'], correct: 0 },
    { promptSay: 'Pour la clause résolutoire, une fausse simplification garde souvent...', opts: ['le fait, dans une phrase trop longue', 'rien du fait original'], correct: 0 },
    { promptSay: 'Une vraie simplification se reconnaît parce qu’elle...', opts: ['se lit d’un souffle, mots et phrase ajustés ensemble', 'utilise seulement des mots difficiles'], correct: 0 },
    { promptSay: 'Le piège central de cette leçon s’appelle...', opts: ['la sur-lecture', 'la fausse simplification'], correct: 1 },
    { promptSay: 'Avant de dire qu’un texte est simplifié, il faut vérifier...', opts: ['les deux leviers, pas un seul', 'seulement la longueur du texte'], correct: 0 },
  ],
  steps: STEPS_STD('Six fausses simplifications', 'Écoute les six versions bien ajustées', 'Huit phrases'),
  audio: REC('rec-c2-06-piege-simplification'), say: REFRAME, terms: ['fausseSimplification'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le piège central', 'Une version aux mots simples mais à la phrase intacte, ou aux phrases courtes mais au jargon intact, est...', ['une bonne médiation', 'une fausse simplification'], 1,
    'Un seul levier déplacé ne suffit jamais. EN: moving only one lever is never enough.'),
  ctl('Le test', 'Pour savoir si une reformulation est réussie, demande-toi...', ['si elle est plus courte que l’originale', 'si elle se lit d’un souffle ET si chaque terme est traité'], 1,
    'Les deux conditions ensemble, jamais une seule. EN: both conditions together, never just one.'),
  ctl('Couper sans expliquer', 'Couper une phrase en trois sans jamais expliquer son terme technique revient à...', ['simplifier vraiment', 'garder l’original, en morceaux'], 1,
    'La forme a changé, pas le fond du problème. EN: the form changed, not the core problem.'),
], ['fausseSimplification']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le piège de la fausse simplification',
    opener: {
      line: "Six versions qui ressemblent à des simplifications réussies, et qui ratent toutes la même chose : ici tu apprends à t’en méfier. EN: Six versions that look like successful simplifications, all missing the same thing: here you learn to be wary of them.",
      imageRef: 'lessons/c2-06-mediation/act05.jpg',
    },
    sections: [],
    milestone: 'Tu repères la fausse simplification, qui ne touche qu’un seul levier, et tu la corriges en touchant les deux. EN: You can spot false simplification, which moves only one lever, and correct it by moving both.',
    estScreens: 26, restPoints: ['a5-piege'],
  },
  sections: [A5_DECK, A5_PIEGE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — CE QU’ON NE TOUCHE JAMAIS
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a6-lecture', layer: 'core', questionsInModal: true,
  title: 'La ligne qui ne bouge jamais', frSub: 'Trois fautes, une seule ligne à ne jamais franchir',
  text: "Léna relit toujours sa reformulation en se posant une seule question : qu’est-ce que j’ai perdu, et qu’est-ce que j’ai ajouté. Une reformulation qui oublie le délai de trente jours, qui invente un risque que la lettre ne mentionne pas, ou qui traite M. Castonguay comme un enfant incapable de comprendre, a franchi la ligne, même si elle reste courte et facile à lire.",
  glossary: [
    { word: 'franchir la ligne', en: 'to cross the line', note: 'Dépasser une limite qu’on ne doit jamais dépasser. EN: to go beyond a limit that must never be crossed.' },
  ],
  questions: [
    { q: 'Quelle est la seule question que Léna se pose en relisant.', a: 'Qu’est-ce que j’ai perdu, et qu’est-ce que j’ai ajouté.' },
    { q: 'Une reformulation facile à lire peut-elle quand même échouer.', a: 'Oui, si elle omet un fait qui sert à agir, invente un risque, ou traite le lecteur avec condescendance.' },
  ],
  audio: REC('rec-c2-06-ligne'), say: REFRAME, terms: ['fidelite'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a6-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre fautes de fidélité',
  errors: [
    { wrong: src(E(2454)).fr, right: src(E(2402)).fr,
      why: "Normal de vouloir rassurer vite : mais effacer le délai de trente jours retire à M. Castonguay le moyen d’agir à temps. EN: wanting to reassure quickly is natural, but erasing the thirty-day deadline removes M. Castonguay’s means to act in time." },
    { wrong: src(E(2441)).fr, right: src(E(2417)).fr,
      why: "Normal de vouloir convaincre Karim : mais inventer un dégât absent de la source dépasse le fait réel. EN: wanting to convince Karim is natural, but inventing damage the source never mentions far exceeds the real fact." },
    { wrong: src(E(2442)).fr, right: src(E(2402)).fr,
      why: "Normal de vouloir protéger M. Castonguay : mais décider qu’il ne peut pas comprendre lui retire un droit. EN: wanting to protect M. Castonguay is natural, but deciding he cannot understand removes a right from him." },
    { wrong: src(E(2443)).fr, right: src(E(2402)).fr,
      why: "Normal de vouloir adoucir une mauvaise nouvelle : mais remplacer « trente jours » par « un jour » rend le fait inutile pour agir. EN: wanting to soften bad news is natural, but replacing \"thirty days\" with \"someday\" makes the fact useless for acting on." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['fidelite'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a6-ecoute', layer: 'core', hideLines: true,
  title: 'Fidèle ou pas', frSub: 'Six phrases, trois fidèles, trois non',
  lines: [ln(E(2402)), ln(E(2454)), ln(E(2417)), ln(E(2441)), ln(E(2433)), ln(E(2442))],
  questions: [
    { q: 'Première et deuxième phrases : laquelle garde le délai exact.', opts: ['la première', 'la deuxième'], correct: 0,
      why: 'La première nomme trente jours ; la deuxième reste vague. EN: the first names thirty days; the second stays vague.' },
    { q: 'Troisième et quatrième phrases : laquelle invente un fait absent de la source.', opts: ['la troisième', 'la quatrième'], correct: 1,
      why: 'La quatrième ajoute un dégât que la source ne mentionne jamais. EN: the fourth adds damage the source never mentions.' },
    { q: 'Cinquième et sixième phrases : laquelle traite le lecteur avec condescendance.', opts: ['la cinquième', 'la sixième'], correct: 1,
      why: 'La sixième décide à la place du lecteur qu’il ne peut pas comprendre. EN: the sixth decides on the reader’s behalf that they cannot understand.' },
  ],
  audio: REC('rec-c2-06-fidele-ecoute'), say: REFRAME, terms: ['fidelite'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La seule question', 'Avant de livrer une reformulation, Léna se demande toujours...', ['si elle est assez courte', 'ce qu’elle a perdu, et ce qu’elle a ajouté'], 1,
    'La fidélité se vérifie par cette seule question. EN: fidelity is checked with this one question.'),
  ctl('Le fait actionnable', 'Un délai ou un chiffre qui sert à agir...', ['peut devenir vague pour simplifier', 'reste précis, toujours'], 1,
    'Vague n’est pas simple : c’est une perte. EN: vague is not simple: it is a loss.'),
  ctl('La condescendance', 'Décider à la place du lecteur qu’il ne peut pas comprendre est...', ['une forme de respect', 'une faute de fidélité, même si le texte reste court'], 1,
    'La brièveté ne rachète jamais la condescendance. EN: brevity never redeems condescension.'),
], ['fidelite']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Ce qu’on ne touche jamais',
    opener: {
      line: "Une reformulation facile à lire peut quand même échouer, si elle a franchi une ligne précise : ici tu apprends où elle se trouve. EN: An easy-to-read reformulation can still fail, if it has crossed a precise line: here you learn where that line is.",
      imageRef: 'lessons/c2-06-mediation/act06.jpg',
    },
    sections: [],
    milestone: 'Tu distingues une reformulation fidèle, qui ne perd ni n’invente rien, d’une reformulation facile mais fautive. EN: You can tell a faithful reformulation, which neither loses nor invents anything, from an easy but faulty one.',
    estScreens: 27, restPoints: ['a6-erreurs'],
  },
  sections: [A6_LECTURE, A6_ERREURS, A6_ECOUTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — AVANT TA MÉDIATION
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a7-scenario', layer: 'core', title: 'Deux publics, deux demandes',
  setting: "Karim et Mina demandent chacun à Léna une explication, le même après-midi.",
  turns: [
    {
      ai: src(E(2458)).fr, en: src(E(2458)).en,
      user: src(E(2459)).fr, userEn: 'First I spot the technical term, then I check each sentence’s length, finally I choose the words you already use. (Naming the plan, for a competent colleague.)',
      alts: [
        { fr: 'Je garde le terme exact et je l’explique, sans tout réécrire.', en: 'I keep the exact term and explain it, without rewriting everything.' },
        { fr: 'Je remplace chaque terme technique par son équivalent courant, sans toucher à la structure de la phrase.', en: 'I replace each technical term with its everyday equivalent, without touching the sentence structure.' },
      ],
    },
    {
      ai: src(E(2460)).fr, en: src(E(2460)).en,
      user: src(E(2461)).fr, userEn: 'It is a letter about grandma’s apartment; I will tell it to you with simple words. (Naming the plan, for a child.)',
      alts: [
        { fr: src(E(2421)).fr, en: src(E(2421)).en },
        { fr: 'C’est un papier qui explique pourquoi mamie doit faire attention à une règle de son appartement.', en: 'It is a paper that explains why grandma needs to pay attention to a rule about her apartment.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['publicNomme'],
};

const A7_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a7-usages', layer: 'core', title: 'Trois publics, trois ajustements',
  cases: [
    { situation: 'Un collègue compétent en français', fr: src(E(2462)).fr, en: src(E(2462)).en },
    { situation: 'Un public âgé, adulte', fr: src(E(2463)).fr, en: src(E(2463)).en },
    { situation: 'Un enfant', fr: src(E(2464)).fr, en: src(E(2464)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['publicNomme'],
};

const A7_PLAN = pourTaMediation('a7-plan', 'Le plan en trois questions', [
  grp('Le plan', [
    it(E(2465), 'nommer, repérer, mesurer'),
  ], chk('Avant d’écrire pour un public nommé, la première question est...', ['combien de mots fait le texte original', 'qui est ce public, précisément'], 1,
    'Le public décide de tout le reste. EN: the audience decides everything else.')),
  grp('Pour Karim, pour M. Castonguay, pour Mina', [
    it(E(2462), 'un collègue compétent'),
    it(E(2463), 'un public âgé'),
    it(E(2464), 'un enfant'),
  ], chk('Ces trois publics demandent-ils le même ajustement.', ['oui, toujours le même', 'non, chacun demande un ajustement différent'], 1,
    'Même méthode, trois résultats différents selon le public. EN: same method, three different results depending on the audience.')),
], ['publicNomme']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La première question', 'Avant d’écrire pour un public nommé, tu nommes d’abord...', ['le public lui-même', 'le nombre de mots du texte original'], 0,
    'Le public décide du registre, de la longueur, du traitement du terme. EN: the audience decides register, length, term treatment.'),
  ctl('Un collègue compétent', 'Karim, compétent en français mais non spécialiste, a besoin...', ['qu’on lui parle comme à un enfant', 'que le terme exact soit gardé et expliqué'], 1,
    'La compétence en français n’est pas la compétence dans le domaine. EN: fluency in French is not expertise in the field.'),
  ctl('Un public âgé', 'M. Castonguay a besoin...', ['d’un ton condescendant pour simplifier', 'd’une explication claire, sans condescendance'], 1,
    'Clarté et respect vont toujours ensemble. EN: clarity and respect always go together.'),
], ['publicNomme']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Avant ta médiation',
    opener: {
      line: "Karim et Mina posent la même question, pour deux publics très différents : ici tu t’entraînes à ajuster ta réponse à chacun. EN: Karim and Mina ask the same question, for two very different audiences: here you practise adjusting your answer to each.",
      imageRef: 'lessons/c2-06-mediation/act07.jpg',
    },
    sections: [],
    milestone: 'Tu nommes le public avant d’écrire, et tu ajustes ta méthode à chacun des trois publics nommés. EN: You name the audience before writing, and adjust your method to each of the three named audiences.',
    estScreens: 25, restPoints: ['a7-scenario'],
  },
  sections: [A7_SCENARIO, A7_USAGES, A7_PLAN, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — TA MÉDIATION
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_MODELE: Sec<'reading'> = {
  type: 'reading', id: 'a8-modele', layer: 'core', questionsInModal: true,
  title: 'Le rapport de Karim', frSub: 'Lis-le comme tu liras le tien',
  text: MEDIATION_SOURCE,
  glossary: [
    { word: 'évapotranspiration', en: 'evapotranspiration', note: 'Le processus par lequel une plante relâche de l’eau et rafraîchit l’air autour d’elle. EN: the process by which a plant releases water and cools the air around it.' },
  ],
  questions: [
    { q: "Quel est le fait principal de ce paragraphe, dit avec tes propres mots.", a: "La ville va planter plus d’arbres dans les quartiers les plus chauds, pour faire baisser la température." },
    { q: "Quels chiffres ou délais ce paragraphe donne-t-il, qu’une bonne reformulation doit garder.", a: "Le diagnostic de 2025 et la période de cinq ans pour réaliser le programme." },
    { q: "Quel terme technique ce paragraphe utilise-t-il, que tu devras traiter d’une façon ou d’une autre.", a: "« Indice de vulnérabilité thermique », « essences indigènes », « évapotranspiration », entre autres." },
  ],
  audio: REC('rec-c2-06-rapport-karim'), say: REFRAME, terms: ['mediation'],
};

const A8_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a8-plan', layer: 'core', sheetId: 'sheet-ton',
  title: 'Quatre étapes pour ta médiation',
  steps: [
    '1. Nomme le public : les familles abonnées au bulletin municipal du quartier, un public non spécialiste, pas des enfants seuls. EN: name the audience: families subscribed to the neighbourhood municipal newsletter, a non-specialist public, not children alone.',
    '2. Repère chaque terme technique et choisis son traitement : garder et expliquer, remplacer par une image, ou généraliser. EN: spot each technical term and choose its treatment: keep and explain, replace with an image, or generalise.',
    '3. Mesure chaque phrase longue et sépare les idées imbriquées, dans le même ordre que l’original. EN: measure each long sentence and separate its nested ideas, in the same order as the original.',
    '4. Relis en te demandant : qu’est-ce que j’ai perdu, qu’est-ce que j’ai ajouté. EN: reread while asking: what did I lose, what did I add.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['leviers', 'fidelite'],
};

const A8_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a8-scenario', layer: 'core', title: 'Tu reformules à voix haute, avec Karim',
  setting: "Avant d’écrire ta version officielle, tu t’entraînes à voix haute avec Karim sur la première phrase du rapport.",
  turns: [
    {
      ai: "La mise en œuvre est subordonnée à l’obtention des autorisations municipales requises et s’échelonnera sur une période de cinq ans.", en: 'Implementation is subject to obtaining the required municipal authorisations and will be phased over a five-year period.',
      user: 'Le programme pourra commencer une fois que la ville aura donné son accord, et il durera cinq ans.', userEn: 'The programme can start once the city has given its approval, and it will last five years. (The same two facts, shorter sentence.)',
      alts: [
        { fr: 'Dès que la ville aura dit oui, les plantations commenceront, et le tout durera cinq ans.', en: 'As soon as the city says yes, the plantings will start, and the whole thing will last five years.' },
        { fr: 'La ville doit d’abord donner son accord, puis le programme se déroulera sur cinq ans.', en: 'The city must first give its approval, then the programme will run over five years.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['leviers'],
};

/** THE GRADED TASK. A full reformulation of a new technical passage for a
 *  named audience, graded on fidelity AND on both levers moved together
 *  (C2-BUILD-LOG). */
const A8_MISSION: Sec<'task'> = {
  type: 'task', id: 'a8-mission', title: 'Ta médiation', frSub: 'Mission écrite',
  brief: `Karim te transmet ce paragraphe d’un rapport municipal et te demande d’en écrire une version pour le bulletin municipal du quartier, lu par des familles, pas par des urbanistes. Voici le paragraphe. ${MEDIATION_SOURCE}`,
  briefEn: "Karim sends you this paragraph from a municipal report and asks you to write a version for the neighbourhood municipal newsletter, read by families, not by urban planners. The paragraph is printed above so you can write with it in front of you.",
  produce: "Écris une reformulation de 100 à 200 mots : garde les deux faits qui servent à agir (le diagnostic de 2025, la période de cinq ans), traite chaque terme technique (garde-le et explique-le, remplace-le par une image, ou généralise-le), raccourcis toute phrase qui imbrique plus d’une idée, et n’ajoute aucune certitude que le paragraphe ne donne pas lui-même.",
  responseSpec: { kind: 'text', minWords: 100, maxWords: 200 },
  rubric: {
    criteria: [
      { key: 'fidelite', label: 'Le sens exact, rien perdu, rien ajouté', maxPoints: 5, descriptors: [
        "5 : Les deux faits actionnables (le diagnostic de 2025, la période de cinq ans) sont tous deux présents, et rien n’est inventé ni dramatisé.",
        "4 : Les deux faits sont présents, mais l’un est un peu vague.",
        '3 : Un seul des deux faits est présent.',
        "2 : Aucun des deux faits actionnables n’est présent, ou une certitude est inventée.",
        "1 : Le texte contredit ou invente largement ce que dit l’original.",
      ] },
      { key: 'registre', label: 'Un registre adapté aux familles, sans condescendance', maxPoints: 4, descriptors: [
        "4 : Le vocabulaire est courant, clair, et respecte le lecteur adulte, sans aucun ton d’enfant ni de spécialiste.",
        "3 : Le vocabulaire est globalement courant, avec un mot technique oublié en route.",
        '2 : Le vocabulaire reste globalement technique, ou devient nettement condescendant.',
        "1 : Le registre ne s’ajuste pas du tout au public nommé.",
      ] },
      { key: 'syntaxe', label: 'Des phrases courtes, les idées imbriquées séparées', maxPoints: 4, descriptors: [
        "4 : Chaque phrase porte une seule idée claire, dans le même ordre que l’original.",
        "3 : La plupart des phrases sont courtes, une seule reste longue.",
        '2 : Les mots sont simples mais la structure de phrase de l’original reste largement intacte (la fausse simplification de l’acte 5).',
        "1 : Les phrases restent aussi longues et imbriquées que l’original.",
      ] },
      { key: 'termes', label: 'Chaque terme technique traité', maxPoints: 4, descriptors: [
        "4 : Chaque terme technique du paragraphe (indice de vulnérabilité thermique, essences indigènes, évapotranspiration) est gardé et expliqué, remplacé par une image, ou généralisé ; aucun n’est laissé bare.",
        "3 : La plupart des termes sont traités, un seul reste bare.",
        '2 : La moitié des termes restent bare, sans traitement.',
        "1 : Les termes techniques sont copiés sans aucun traitement.",
      ] },
      { key: 'lecture', label: 'Un texte qui se lit comme écrit pour ce public', maxPoints: 3, descriptors: [
        "3 : Le texte se lit d’un souffle, naturel, comme s’il avait toujours été écrit pour le bulletin municipal.",
        '2 : Le texte se lit correctement mais garde un arrière-goût de rapport officiel.',
        "1 : Le texte reste difficile à lire pour le public nommé.",
      ] },
    ],
  },
  scaffold: [
    'La ville va…',
    'Dans les quartiers où il fait le plus chaud…',
    'Ça veut dire que…',
    'Ce changement prendra environ…',
    'D’ici [délai], les familles pourront…',
  ],
  modelAnswer: "La ville lance un programme pour planter plus d’arbres dans les quartiers où il fait particulièrement chaud en été. Un diagnostic réalisé en 2025 a permis de repérer ces quartiers, qu’on appelle des îlots de chaleur urbains : des zones où le béton et l’asphalte gardent la chaleur plus longtemps que les quartiers verts. Les arbres choisis seront des espèces d’ici, qui rafraîchissent l’air en relâchant de l’eau par leurs feuilles. Le programme ne pourra commencer qu’une fois les autorisations de la ville obtenues, et il s’échelonnera sur cinq ans.",
  modelAnswerEn: "The city is launching a programme to plant more trees in the neighbourhoods that get especially hot in summer. A 2025 assessment identified these neighbourhoods, known as urban heat islands: areas where concrete and asphalt hold heat longer than green neighbourhoods. The chosen trees will be native species, which cool the air by releasing water through their leaves. The programme can only start once the city's approvals are obtained, and it will be phased over five years.",
  watchFor: [
    { pattern: 'The reply drops the 2025 diagnostic or the five-year timeline entirely.', criterion: 'fidelite', feedback: "Le diagnostic de 2025 et la période de cinq ans sont des faits actionnables ; garde-les, même reformulés.", ref: 'a8-modele' },
    { pattern: 'The reply invents a claim the source never made (a guaranteed result, an exact temperature drop).', criterion: 'fidelite', feedback: "Le paragraphe ne promet aucun chiffre de refroidissement précis ; n’en invente pas un.", ref: 'a4-lecture' },
    { pattern: 'The reply keeps bureaucratic nominalisations ("la mise en œuvre", "l’obtention des autorisations") largely unchanged.', criterion: 'registre', feedback: "Remplace les noms abstraits par des verbes simples : « la ville pourra commencer » plutôt que « la mise en œuvre est subordonnée ».", ref: 'a2-deck' },
    { pattern: 'The reply talks down to the reader, adding reassurance or simplicity the audience (adult families) does not need.', criterion: 'registre', feedback: "Les familles du quartier sont un public adulte non spécialiste, pas des enfants ; reste clair, jamais condescendant.", ref: 'a4-juridique' },
    { pattern: 'Vocabulary is simplified but the sentence keeps its original nested structure (the false-simplification trap).', criterion: 'syntaxe', feedback: "Vérifie chaque phrase longue : sépare-la si elle porte plus d’une idée, même si les mots sont déjà simples.", ref: 'a5-piege' },
    { pattern: 'A technical term (indice de vulnérabilité thermique, essences indigènes, évapotranspiration) is copied with no explanation, no image and no generalisation.', criterion: 'termes', feedback: "Chaque terme technique doit être gardé et expliqué, remplacé par une image, ou généralisé : jamais laissé seul.", ref: 'a2-table' },
  ],
  graderNotes: [
    'Word count: 100 to 200, with 10% tolerance (90 to 220) before length costs points.',
    "The task marks FIDELITY to the source and the MOVEMENT OF BOTH LEVERS together, not literary style.",
    'Accept any correct, non-invented naming of the two actionable facts (the 2025 diagnostic, the five-year period), even if the wording differs from the model.',
    "Accept any reasonable treatment of each technical term (kept and explained, replaced with an image, or generalised); do not require the exact treatment the model answer chose.",
    "Do not mark grammar beyond what interferes with comprehension; this task marks fidelity, register and sentence length, not a grammar point (C2 has none, per C2-BUILD-PLAN.md).",
    'Feedback language: unsimplified C2 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['mediation', 'fausseSimplification'],
};

const A8_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a8-parler', layer: 'core', title: 'Dis ta médiation à voix haute', skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO, say: REFRAME, terms: ['mediation'],
};

const A8_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a8-cheat', layer: 'core', sheetId: 'sheet-mediation',
  title: 'Toute la méthode sur un écran',
  rows: [
    { k: 'la médiation', v: 'le même sens, une porte d’une autre taille', say: src(E(2404)).fr,
      detail: { title: 'Deux lecteurs, deux portes', body: 'L’objet ne rétrécit jamais. EN: the object never shrinks.', say: src(E(2402)).fr } },
    { k: 'les trois leviers', v: 'registre, longueur de phrase, terme technique', say: src(E(2424)).fr,
      detail: { title: 'Jamais un seul', body: 'Les trois bougent ensemble. EN: all three move together.', say: src(E(2452)).fr } },
    { k: 'le terme technique', v: 'gardé et expliqué, remplacé, ou généralisé', say: src(E(2426)).fr,
      detail: { title: 'Trois traitements', body: 'Jamais laissé seul, sans aucun traitement. EN: never left alone, untreated.', say: src(E(2422)).fr } },
    { k: 'la fausse simplification', v: 'un seul levier déplacé, l’autre oublié', say: src(E(2450)).fr,
      detail: { title: 'Le piège central', body: 'Les deux leviers, ou aucun n’a vraiment bougé. EN: both levers, or neither really moved.', say: src(E(2451)).fr } },
    { k: 'la fidélité', v: 'rien perdu, rien ajouté, jamais condescendant', say: src(E(2445)).fr,
      detail: { title: 'La seule question', body: 'Qu’est-ce que j’ai perdu, qu’est-ce que j’ai ajouté. EN: what did I lose, what did I add.', say: src(E(2457)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['mediation', 'leviers', 'fausseSimplification', 'fidelite'],
};

const A8_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a8-progress', layer: 'core', title: 'Où tu en es',
  body: "Tu nommes maintenant un public précis avant d’écrire, tu touches les trois leviers ensemble plutôt qu’un seul, et tu relis chaque reformulation en te demandant ce que tu as perdu et ce que tu as ajouté. Le piège qui reste est le même que partout ailleurs dans cette leçon : simplifier un seul levier en croyant avoir médié. Avant l’examen, prends un texte de spécialiste que tu as reçu cette semaine (une facture, une notice, un avis) et reformule-le pour quelqu’un de ton entourage qui ne le comprendrait pas tel quel. EN: Before any exam, take a specialist text you received this week (a bill, a notice, an advisory) and reformulate it for someone around you who would not understand it as written.",
  stats: [
    { k: 'Le public nommé', v: 'un enfant, un profane, un collègue' },
    { k: 'Les trois leviers', v: 'registre, longueur, terme technique' },
    { k: 'Le piège évité', v: 'un seul levier ne suffit jamais' },
    { k: 'Ce qui ne bouge jamais', v: 'le délai, le risque, la cause' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ────────────────────────────────────────────────────────────── */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Un levier n’a pas bougé. Écris la phrase corrigée. EN: One lever did not move; write the corrected sentence.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A8_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a8-quiz', layer: 'core', title: 'Le bilan', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-probleme', label: 'Le problème de la médiation', targets: ['confond-mediation-traduction'],
      questions: [
        mc('La lettre que reçoit M. Castonguay et la reformulation de Léna disent...', ['deux choses différentes', 'exactement la même chose, autrement', 'presque la même chose, à un détail près'], 1, 'Le délai, le risque et la cause restent identiques. EN: the deadline, the risk and the cause stay identical.', 'a1-check'),
        mc('En reformulant pour M. Castonguay, Léna change...', ['la langue du texte', 'le registre et la longueur, jamais la langue'], 1, 'La lettre reste en français du début à la fin. EN: the letter stays French throughout.', 'a1-check'),
        mc('La leçon 22 du C1 porte sur...', ['changer de langue en gardant l’idée', 'changer de public dans la même langue'], 0, 'Cette leçon ne change jamais de langue ; elle change de public. EN: this lesson never changes language; it changes audience.', 'a1-acquis'),
        mc('Cette leçon t’apprend à...', ['reformuler pour un public nommé, sans changer le sens', 'traduire un texte vers l’anglais', 'couper des informations pour faire plus court'], 0, 'Reformuler, pas traduire ni couper. EN: reformulate, never translate nor cut.', 'a1-check'),
        tI('Complète. Un mot.', 'Médier, c’est faire passer le même sens par une ... d’une autre taille.', 'porte', 'C’est la métaphore de la leçon. EN: the lesson’s metaphor.', 'a1-scene'),
        tI('Complète. Un mot.', '« Clause résolutoire » est un mot de ... que M. Castonguay ne connaît pas.', 'spécialiste', 'C’est le registre d’origine du texte. EN: the text’s original register.', 'a1-lecture'),
        eS('Pour M. Castonguay, Léna explique d’abord la notion de clause résolutoire dans le droit du bail.', 'Pour M. Castonguay, Léna dit directement ce que la lettre veut dire, en mots simples.', 'Expliquer le mot savant d’abord répète la faute de la lettre. EN: explaining the fancy word first repeats the letter’s own fault.', 'a1-scene', []),
        lC('Écoute. Cette phrase est-elle le texte de spécialiste, ou la reformulation.', src(E(2402)).fr, ['le texte de spécialiste', 'la reformulation'], 1, 'Les phrases courtes et les mots courants signalent la reformulation. EN: short sentences and everyday words signal the reformulation.', 'a1-lecture'),
      ],
    },
    {
      id: 'r2-leviers', label: 'Les trois leviers', targets: ['un-seul-levier'],
      questions: [
        mc('Les trois leviers de la médiation sont...', ['le registre, la longueur de phrase, le terme technique', 'la grammaire, l’orthographe, la ponctuation', 'le vocabulaire, et rien d’autre'], 0, 'Ce sont les trois leviers nommés dans l’acte 2. EN: these are the three levers named in act 2.', 'a2-check'),
        mc('Ce qui ne bouge jamais entre les versions, c’est...', ['le vocabulaire', 'l’information elle-même : le délai, le risque, la cause'], 1, 'Le fond ne change jamais. EN: the substance never changes.', 'a2-check'),
        mc('Un terme technique peut être traité de...', ['une seule façon, toujours effacé', 'trois façons : gardé-expliqué, remplacé, ou généralisé', 'deux façons seulement, jamais trois'], 1, 'Trois traitements possibles. EN: three possible treatments.', 'a2-exemples'),
        mc('Face à un collègue déjà compétent en français, le terme exact...', ['s’efface toujours', 'se garde, et s’explique'], 1, 'Un collègue compétent n’a pas besoin qu’on lui cache le mot exact. EN: a competent colleague does not need the exact word hidden.', 'a2-groupe'),
        tI('Complète. Un mot.', 'Le premier levier, ce sont les mots eux-mêmes : c’est le ... .', 'registre', 'C’est le nom du premier levier. EN: the first lever’s name.', 'a2-deck'),
        tI('Complète. Trois mots.', 'Le deuxième levier, c’est la ... ... ... .', 'longueur de phrase', 'C’est le nom du deuxième levier. EN: the second lever’s name.', 'a2-deck', ['longueur de la phrase']),
        eS('Pour simplifier, on efface toujours le terme technique, sans exception.', 'Pour simplifier, on garde et on explique le terme technique, ou on le remplace par une image.', 'Trois traitements existent, jamais un seul réflexe. EN: three treatments exist, never a single reflex.', 'a2-exemples', []),
        lC('Écoute. Ce mot appartient-il au registre technique ou courant.', src(E(2413)).fr, ['technique', 'courant'], 0, '« Algie résiduelle » est un registre technique. EN: "algie résiduelle" is technical register.', 'a2-deck'),
      ],
    },
    {
      id: 'r3-construire', label: 'Construire une reformulation', targets: ['perd-chiffre-actionnable'],
      questions: [
        mc('Un chiffre comme un délai ou un seuil de fièvre...', ['peut devenir une impression vague', 'reste précis, dans toutes les versions', 'peut être arrondi légèrement, sans problème'], 1, 'Un chiffre actionnable ne devient jamais vague. EN: an actionable number never becomes vague.', 'a3-check'),
        mc('La condition et la conséquence d’une règle doivent rester...', ['fusionnées en une seule idée confuse', 'dans le même ordre, séparées si besoin'], 1, 'L’ordre logique guide la reformulation. EN: logical order guides the reformulation.', 'a3-check'),
        mc('Le médical, le juridique et le scientifique demandent...', ['trois méthodes différentes', 'le même geste : repérer, ajuster, garder le fait', 'aucune méthode commune, un cas par cas'], 1, 'La méthode ne change pas avec le domaine. EN: the method does not change with the domain.', 'a3-check'),
        mc('« Le bail prend fin de plein droit » devient, pour M. Castonguay...', ['« le bail se termine automatiquement »', '« le bail pourrait peut-être se terminer un jour »'], 0, 'Le fait (une fin automatique) reste exact. EN: the fact (an automatic end) stays exact.', 'a3-juridique'),
        tI('Complète. Un mot.', 'Pour un public non spécialiste, « algie résiduelle » devient « un peu de ... ».', 'douleur', 'C’est le mot courant pour ce fait. EN: the everyday word for this fact.', 'a3-medical'),
        tI('Complète. Un mot.', 'Appeler la clinique sans délai si la température dépasse 38,5 ... .', 'degrés', 'C’est l’unité du seuil donné. EN: the unit of the given threshold.', 'a3-medical'),
        eS('Si quelque chose ne va pas, appelez la clinique quand vous pourrez.', 'Si vous faites de la fièvre au-dessus de 38,5 degrés, appelez la clinique tout de suite.', 'Le seuil précis et l’urgence doivent rester, pas une vague impression. EN: the precise threshold and urgency must stay, not a vague impression.', 'a3-medical', []),
        lC('Écoute. Cette phrase sépare-t-elle deux idées en deux phrases, ou les garde-t-elle en une seule.', src(E(2417)).fr, ['elle les sépare en deux phrases', 'elle les garde en une seule'], 0, 'La reformulation sépare la cause (le béton) de la conséquence (la chaleur retenue). EN: the reformulation separates the cause from the consequence.', 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-sens', label: 'Garder le sens, pas la forme', targets: ['invente-un-fait'],
      questions: [
        mc('Parmi plusieurs reformulations plausibles, la bonne...', ['garde le fait qui sert vraiment à agir', 'choisit la version la plus courte, peu importe le reste', 'choisit toujours le ton le plus rassurant'], 0, 'Le délai, la cause et le risque restent la priorité. EN: the deadline, cause and risk remain the priority.', 'a4-check'),
        mc('Ajouter une certitude ou un risque que la source ne fait pas est...', ['une bonne clarification', 'une faute de fidélité'], 1, 'La médiation ne prête jamais au texte ce qu’il n’a pas dit. EN: mediation never lends the text what it never said.', 'a4-check'),
        mc('« Il fait plus chaud en ville, c’est tout » rate la mission parce qu’elle...', ['est trop longue', 'efface la cause, qui sert à comprendre le phénomène', 'utilise un mot technique non expliqué'], 1, 'Une version utile garde la cause, même simplifiée. EN: a useful version keeps the cause, even simplified.', 'a4-scientifique'),
        mc('Parler à un adulte comme à un enfant pour simplifier est...', ['nécessaire pour être clair', 'une faute distincte de la simplification réussie'], 1, 'La clarté n’exige jamais de perdre le respect du lecteur. EN: clarity never requires losing respect for the reader.', 'a4-juridique'),
        tI('Complète. Un mot.', 'Garder le sens, pas la ... .', 'forme', 'C’est le titre de l’acte 4. EN: act 4’s title.', 'a4-check'),
        tI('Complète. Un mot.', 'La faute qui ajoute un fait absent de la source s’appelle une ... .', 'invention', 'C’est le nom de cette faute. EN: this fault’s name.', 'a4-scientifique'),
        eS('Le propriétaire va sûrement vous expulser avant la fin du mois.', 'Le propriétaire peut mettre fin au bail si vous ne corrigez pas la situation dans les trente jours.', 'La lettre ne promet aucune expulsion certaine ; ne pas inventer ce risque. EN: the letter promises no certain eviction; do not invent this risk.', 'a4-juridique', []),
        lC('Écoute. Cette version est-elle fidèle, ou invente-t-elle un fait.', src(E(2441)).fr, ['elle invente un fait', 'elle est fidèle'], 0, 'Rien dans la source ne parle de dégâts irréversibles chaque été. EN: nothing in the source speaks of irreversible damage every summer.', 'a4-scientifique'),
      ],
    },
    {
      id: 'r5-piege', label: 'La fausse simplification', targets: ['un-seul-levier-deplace'],
      questions: [
        mc('Une version aux mots simples mais à la phrase intacte est...', ['une bonne médiation', 'une fausse simplification', 'une traduction, pas une médiation'], 1, 'Un seul levier déplacé ne suffit jamais. EN: moving only one lever is never enough.', 'a5-check'),
        mc('Pour savoir si une reformulation est réussie, demande-toi...', ['si elle est plus courte que l’originale', 'si elle se lit d’un souffle ET si chaque terme est traité'], 1, 'Les deux conditions ensemble. EN: both conditions together.', 'a5-check'),
        mc('Couper une phrase en trois sans jamais expliquer son terme technique revient à...', ['simplifier vraiment', 'garder l’original, en morceaux', 'inventer un fait nouveau'], 1, 'La forme a changé, pas le fond du problème. EN: the form changed, not the core problem.', 'a5-check'),
        mc('Le piège central de cette leçon s’appelle...', ['la sur-lecture', 'la fausse simplification'], 1, 'C’est le nom du piège de l’acte 5. EN: act 5’s trap, by name.', 'a5-deck'),
        tI('Complète. Un mot.', 'Les deux leviers bougent ensemble, ou aucun n’a vraiment ... .', 'bougé', 'C’est la règle de l’acte 5. EN: act 5’s rule.', 'a5-piege'),
        tI('Complète. Deux mots.', 'Une version aux mots simples et à la phrase intacte est une fausse ... ... .', 'simplification', 'C’est le nom du piège. EN: the trap’s name.', 'a5-deck', ['simplification']),
        eS('Une algie résiduelle est attendue. Elle dure quarante-huit heures. Une compresse froide intermittente est recommandée.', 'Il est normal d’avoir un peu de douleur pendant deux jours. Mettez de la glace de temps en temps.', 'Les phrases sont courtes, mais le jargon reste intact ; il faut aussi changer le registre. EN: the sentences are short, but the jargon stays intact; the register must change too.', 'a5-piege', []),
        lC('Écoute. Cette version a-t-elle bougé les deux leviers, ou un seul.', src(E(2414)).fr, ['les deux leviers', 'un seul levier'], 0, 'Les mots sont simples ET la phrase est courte. EN: the words are simple AND the sentence is short.', 'a5-deck'),
      ],
    },
    {
      id: 'r6-fidelite', label: 'Ce qu’on ne touche jamais', targets: ['perd-delai-actionnable'],
      questions: [
        mc('Avant de livrer une reformulation, la seule question à se poser est...', ['est-elle assez courte', 'qu’est-ce que j’ai perdu, et qu’est-ce que j’ai ajouté', 'est-elle plus polie que l’original'], 1, 'C’est la question qui vérifie la fidélité. EN: the question that checks fidelity.', 'a6-check'),
        mc('Un délai ou un chiffre qui sert à agir...', ['peut devenir vague pour simplifier', 'reste précis, toujours'], 1, 'Vague n’est pas simple : c’est une perte. EN: vague is not simple: it is a loss.', 'a6-check'),
        mc('Décider à la place du lecteur qu’il ne peut pas comprendre est...', ['une forme de respect', 'une faute de fidélité, même si le texte reste court', 'un bon moyen de gagner du temps'], 1, 'La brièveté ne rachète jamais la condescendance. EN: brevity never redeems condescension.', 'a6-check'),
        mc('« Le propriétaire pourrait un jour agir si rien ne change » rate la mission parce que...', ['elle est trop longue', 'elle efface le délai exact de trente jours'], 1, 'Un délai précis devenu vague perd son utilité. EN: a precise deadline turned vague loses its usefulness.', 'a6-erreurs'),
        tI('Complète. Un mot.', 'Une reformulation facile à lire peut quand même échouer si elle a franchi une ... .', 'ligne', 'C’est l’image de l’acte 6. EN: act 6’s image.', 'a6-lecture'),
        tI('Complète. Un mot.', 'Décider à la place du lecteur est une faute de ... .', 'condescendance', 'C’est le nom de cette faute. EN: this fault’s name.', 'a6-erreurs'),
        eS('Le propriétaire pourrait un jour agir si rien ne change.', 'Le propriétaire peut mettre fin au bail si vous ne respectez pas une règle du bail, après une lettre officielle et trente jours.', 'Le délai exact de trente jours doit rester, pas une vague éventualité. EN: the exact thirty-day deadline must stay, not a vague possibility.', 'a6-erreurs', []),
        lC('Écoute. Cette phrase est-elle fidèle, ou condescendante.', src(E(2442)).fr, ['elle est condescendante', 'elle est fidèle'], 0, 'Elle décide à la place de M. Castonguay qu’il ne peut pas comprendre. EN: it decides on M. Castonguay’s behalf that he cannot understand.', 'a6-erreurs'),
      ],
    },
    {
      id: 'r7-public', label: 'Avant ta médiation', targets: ['oublie-nommer-public'],
      questions: [
        mc('Avant d’écrire pour un public nommé, tu nommes d’abord...', ['le public lui-même', 'le nombre de mots du texte original', 'le domaine, juridique ou médical'], 0, 'Le public décide du registre, de la longueur, du traitement du terme. EN: the audience decides register, length, term treatment.', 'a7-check'),
        mc('Karim, compétent en français mais non spécialiste, a besoin...', ['qu’on lui parle comme à un enfant', 'que le terme exact soit gardé et expliqué'], 1, 'La compétence en français n’est pas la compétence dans le domaine. EN: fluency in French is not expertise in the field.', 'a7-check'),
        mc('M. Castonguay a besoin...', ['d’un ton condescendant pour simplifier', 'd’une explication claire, sans condescendance', 'd’une traduction vers une autre langue'], 1, 'Clarté et respect vont toujours ensemble. EN: clarity and respect always go together.', 'a7-check'),
        mc('Ces trois publics (un collègue, un public âgé, un enfant) demandent-ils le même ajustement.', ['oui, toujours le même', 'non, chacun demande un ajustement différent'], 1, 'Même méthode, trois résultats différents. EN: same method, three different results.', 'a7-plan'),
        tI('Complète. Trois mots.', 'Le plan en trois étapes : ... , repérer, mesurer.', 'nommer', 'C’est la première étape du plan. EN: the plan’s first step.', 'a7-plan'),
        tI('Complète. Un mot.', 'Pour un enfant, Léna raconte la lettre avec des mots ... .', 'simples', 'C’est l’ajustement pour ce public. EN: the adjustment for this audience.', 'a7-scenario'),
        eS('Pour Mina, Léna explique la clause résolutoire avec les mêmes mots que pour M. Castonguay.', 'Pour Mina, Léna raconte la lettre avec des mots simples, adaptés à son âge.', 'Le même texte demande un ajustement différent selon le public. EN: the same text needs a different adjustment depending on the audience.', 'a7-scenario', []),
        lC('Écoute. Cette phrase vise-t-elle un enfant ou un collègue.', src(E(2459)).fr, ['un collègue', 'un enfant'], 0, 'Elle nomme un plan en trois étapes, pour un collègue compétent. EN: it names a three-step plan, for a competent colleague.', 'a7-scenario'),
      ],
    },
    {
      id: 'r8-bilan', label: 'Le bilan de la mission', targets: ['mission-incomplete'],
      questions: [
        mc('Le rapport de Karim combine...', ['seulement un chiffre à garder', 'un diagnostic daté et une période de cinq ans, deux faits actionnables', 'aucun fait chiffré, seulement des opinions'], 1, 'Les deux faits sont présents, ensemble. EN: both facts are present, together.', 'a8-modele'),
        mc('La mission écrite demande de...', ['résumer le rapport en une phrase', 'garder les faits actionnables et traiter chaque terme technique'], 1, 'Résumer ne suffit pas ; il faut traiter chaque levier. EN: summarising is not enough; every lever must be handled.', 'a8-mission'),
        mc('Pour réussir la partie « syntaxe » de la mission, il faut...', ['utiliser le moins de mots possible', 'séparer chaque idée imbriquée en sa propre phrase', 'garder une seule longue phrase par souci de style'], 1, 'Une phrase, une idée, dans l’ordre de l’original. EN: one sentence, one idea, in the original’s order.', 'a8-mission'),
        mc('Un terme technique du rapport laissé sans aucun traitement échoue le critère...', ['registre', 'termes'], 1, 'Le critère « termes » juge le traitement de chaque mot technique. EN: the "termes" criterion judges each technical word’s treatment.', 'a8-mission'),
        tI('Complète. Un mot.', 'Avant de livrer, relis en te demandant ce que tu as perdu et ce que tu as ... .', 'ajouté', 'C’est la seconde moitié de la question de fidélité. EN: the second half of the fidelity question.', 'a8-plan'),
        tI('Complète. Un mot.', 'Le sens ne rétrécit jamais ; seule la ... change de taille.', 'porte', 'C’est le reframe de la leçon. EN: the lesson’s reframe.', 'a8-progress'),
        eS('Une bonne reformulation du rapport de Karim peut laisser un terme technique sans aucune explication s’il paraît clair.', 'Une bonne reformulation du rapport de Karim traite chaque terme technique, même ceux qui paraissent clairs.', 'Le traitement des termes fait partie du critère « termes », jamais laissé au hasard. EN: term treatment is part of the "termes" criterion, never left to chance.', 'a8-mission', []),
        lC('Écoute. Cette phrase vient-elle du rapport de spécialiste, ou d’une reformulation possible.', src(E(2466)).fr, ['d’une reformulation possible', 'du rapport de spécialiste'], 0, 'Elle décrit à quoi ressemble une médiation réussie, pas un fait du rapport. EN: it describes what successful mediation looks like, not a fact from the report.', 'a8-progress'),
      ],
    },
  ],
};

/** Rotate each quiz question's options together with its `correct` index so
 *  no slot takes more than its share. Changes no text. */
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
  type: 'reviewDeck', id: 'a8-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'the same meaning, a differently sized door', back: 'la médiation', say: src(E(2404)).fr },
    { front: 'register, sentence length, technical term', back: 'les trois leviers', say: src(E(2424)).fr },
    { front: 'keep and explain, replace, or generalise', back: 'le terme technique', say: src(E(2426)).fr },
    { front: 'one lever moved, the other forgotten', back: 'la fausse simplification', say: src(E(2450)).fr },
    { front: 'nothing lost, nothing added', back: 'la fidélité', say: src(E(2445)).fr },
    { front: 'a child, a layperson, a colleague', back: 'un public nommé', say: src(E(2406)).fr },
    { front: 'never talk down, even when simplifying', back: 'pas de condescendance', say: src(E(2446)).fr },
    { front: 'the deadline, the risk, the cause', back: 'ce qui ne bouge jamais', say: src(E(2425)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A8_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a8-roundup', layer: 'core', title: 'La médiation linguistique, en résumé',
  body: `${REFRAME} Tu nommes maintenant un public précis, tu touches les trois leviers ensemble, et tu relis chaque reformulation pour vérifier qu’elle n’a rien perdu ni rien ajouté. EN: You can now name a precise audience, move all three levers together, and reread every reformulation to check it has lost nothing and added nothing.`,
  points: [
    'Médier n’est pas traduire : la langue reste la même, seul le public change.',
    'Trois leviers, jamais un seul : le registre, la longueur de phrase, le terme technique.',
    'Un terme technique se garde et s’explique, se remplace par une image, ou se généralise, jamais ne s’efface sans traitement.',
    'La fausse simplification ne touche qu’un seul levier ; la vraie médiation touche les deux.',
    'Rien ne se perd, rien ne s’invente, personne n’est traité avec condescendance.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['mediation', 'fausseSimplification'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-probleme', title: 'Médier, pas traduire', format: 'mcq' as const, coach: 'Rappelle-toi : la langue reste la même, seul le public change. EN: the language stays the same, only the audience changes.', q: 'En reformulant pour M. Castonguay, Léna change...', opts: ['la langue du texte', 'le registre et la longueur'], correct: 1, why: 'La lettre reste en français du début à la fin. EN: the letter stays French throughout.', items: [E(2403), E(2404), E(2405)], audio: AUDIO },
  { id: 'd-leviers', title: 'Les trois leviers', format: 'sort' as const, coach: 'Classe chaque exemple par le levier qu’il illustre. EN: sort each example by the lever it illustrates.', buckets: ['le registre', 'la longueur de phrase', 'le terme technique'], items: [E(2413), E(2414), E(2416), E(2417), E(2422), E(2423)], audio: AUDIO },
  { id: 'd-sens', title: 'Garder le sens, pas la forme', format: 'mcq' as const, coach: 'Compare les quatre versions : laquelle garde le fait sans jargon ni invention. EN: compare the four versions: which one keeps the fact with no jargon and no invention.', q: 'Laquelle de ces versions garde la cause exacte sans jargon ni invention.', opts: ['la bonne version', 'les trois autres'], correct: 0, why: 'Seule la bonne version touche les deux leviers sans perdre ni ajouter de fait. EN: only the right version moves both levers without losing or adding a fact.', items: [E(2417), E(2439), E(2440), E(2441)], audio: AUDIO },
  { id: 'd-piege', title: 'La fausse simplification', format: 'mcq' as const, coach: 'Vérifie les deux leviers, jamais un seul. EN: check both levers, never just one.', q: 'Une version aux mots simples mais à la phrase intacte est...', opts: ['une bonne médiation', 'une fausse simplification'], correct: 1, why: 'Un seul levier déplacé ne suffit jamais. EN: moving only one lever is never enough.', items: [E(2450), E(2451), E(2452)], audio: AUDIO },
  { id: 'd-fidelite', title: 'Rien perdu, rien ajouté', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute, en te demandant ce qu’elle garde. EN: say each line aloud, asking what it keeps.', items: [E(2445), E(2446), E(2447)], audio: AUDIO },
  { id: 'd-condescendance', title: 'Clair, jamais condescendant', format: 'mcq' as const, coach: 'Compare les deux tons. EN: compare the two tones.', q: 'Décider à la place du lecteur qu’il ne peut pas comprendre est...', opts: ['une forme de respect', 'une faute de fidélité'], correct: 1, why: 'La brièveté ne rachète jamais la condescendance. EN: brevity never redeems condescension.', items: [E(2442), E(2446)], audio: AUDIO },
  { id: 'd-public', title: 'Nommer le public d’abord', format: 'sort' as const, coach: 'Classe chaque exemple par le public qu’il vise. EN: sort each example by the audience it targets.', buckets: ['un collègue compétent', 'un public âgé', 'un enfant'], items: [E(2462), E(2463), E(2464), E(2421), E(2437)], audio: AUDIO },
  { id: 'd-mission', title: 'Les quatre étapes', format: 'flashcard' as const, coach: 'Dis le plan en quatre étapes à voix haute. EN: say the four-step plan aloud.', items: [E(2459), E(2465)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'confond-mediation-traduction', description: 'Treats audience-mediation within French as if it required changing language, or vice versa confuses it with translation.', detectOn: ['a1-check', 'a1-acquis', 'a8-mission'], drill: 'd-probleme', retest: 'd-probleme' },
  { id: 'un-seul-levier', description: 'Moves only one of the three levers (register, sentence length, technical-term treatment) rather than all three together.', detectOn: ['a2-groupe', 'a2-check', 'a8-mission'], drill: 'd-leviers', retest: 'd-leviers' },
  { id: 'perd-chiffre-actionnable', description: 'Turns a precise, actionable number (a deadline, a threshold) into a vague impression while reformulating.', detectOn: ['a3-medical', 'a3-check', 'a8-mission'], drill: 'd-leviers', retest: 'd-leviers' },
  { id: 'invente-un-fait', description: 'Adds a certainty, a risk or a result the source text never made, while reformulating for a new audience.', detectOn: ['a4-scientifique', 'a4-check', 'a8-mission'], drill: 'd-sens', retest: 'd-sens' },
  { id: 'un-seul-levier-deplace', description: 'Produces a false simplification: vocabulary simplified with the original sentence structure kept whole, or the sentence shortened with the jargon left bare.', detectOn: ['a5-piege', 'a5-check', 'a8-mission'], drill: 'd-piege', retest: 'd-piege' },
  { id: 'perd-delai-actionnable', description: 'Loses an actionable fact (a deadline, a cause) while reformulating, leaving the reader unable to act on it.', detectOn: ['a6-erreurs', 'a6-check', 'a8-mission'], drill: 'd-fidelite', retest: 'd-fidelite' },
  { id: 'condescendance', description: 'Adopts a condescending tone toward an adult reader while simplifying, deciding on their behalf that they cannot understand.', detectOn: ['a4-juridique', 'a6-erreurs', 'a8-mission'], drill: 'd-condescendance', retest: 'd-condescendance' },
  { id: 'oublie-nommer-public', description: 'Begins reformulating without first naming a precise audience, applying a generic adjustment instead.', detectOn: ['a7-plan', 'a7-check', 'a8-mission'], drill: 'd-public', retest: 'd-public' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-mediation', 'La médiation linguistique', ['les trois leviers', 'le terme technique'], [
    teach('sheet-mediation-teach', 'Le même sens, une porte d’une autre taille',
      `${C122_REF} t’a appris à garder l’idée, la force et le fil d’un texte en changeant de langue. Cette leçon garde la même langue et change de PUBLIC : un enfant, un profane, un collègue non spécialiste. Trois leviers font ce travail : le registre, la longueur de phrase, et ce que devient chaque terme technique. EN: This lesson keeps the same language and changes the AUDIENCE; three levers do this work: register, sentence length, and what happens to each technical term.`),
    table('sheet-mediation-leviers', 'Les trois leviers', ['Levier', 'Ce qu’il ajuste'], [
      ['le registre', 'les mots eux-mêmes : savant ou courant'],
      ['la longueur de phrase', 'la forme : une idée imbriquée ou une phrase simple'],
      ['le terme technique', 'gardé et expliqué, remplacé par une image, ou généralisé'],
    ]),
  ]),
  sheet('sheet-piege', 'La fausse simplification', ['vocabulaire seul', 'syntaxe seule'], [
    teach('sheet-piege-teach', 'Un seul levier ne suffit jamais',
      "Simplifier les mots sans raccourcir une phrase à cinq étages laisse un texte toujours difficile à suivre. Raccourcir les phrases sans jamais expliquer le terme technique laisse l’original, en morceaux. La vraie médiation touche les deux leviers à la fois. EN: simplifying words without shortening a nested sentence still leaves a hard text; shortening sentences without explaining the term leaves the original, in pieces. Real mediation moves both levers at once."),
    table('sheet-piege-deux', 'Les deux fausses simplifications', ['Fausse simplification', 'Ce qu’elle rate'], [
      ['mots simples, phrase intacte', 'la structure de phrase reste à plusieurs étages'],
      ['phrases courtes, jargon intact', 'le terme technique reste non expliqué'],
    ]),
  ]),
  sheet('sheet-ton', 'Avant ta médiation', ['le plan en quatre étapes', 'trois publics nommés'], [
    teach('sheet-ton-teach', 'Nommer, repérer, mesurer, relire',
      'Une médiation réussie nomme le public avant d’écrire, repère chaque terme technique, mesure chaque phrase longue, puis relit en se demandant ce qui a été perdu ou ajouté. EN: Successful mediation names the audience before writing, spots each technical term, measures each long sentence, then rereads while asking what was lost or added.'),
    table('sheet-ton-plan', 'Le plan en quatre étapes', ['Étape', 'Formule'], [
      ['nommer le public', 'un enfant, un profane, un collègue'],
      ['repérer le terme technique', 'le garder-expliquer, le remplacer, ou le généraliser'],
      ['mesurer la phrase', 'séparer chaque idée imbriquée, dans l’ordre'],
      ['relire', 'qu’est-ce que j’ai perdu, qu’est-ce que j’ai ajouté'],
    ]),
  ]),
  sheet('sheet-mediation-domaines', 'Trois domaines, un même geste', ['juridique', 'médical', 'scientifique'], [
    teach('sheet-mediation-domaines-teach', 'Légal, médical, scientifique',
      "Le médical, le juridique et le scientifique demandent le même geste : repérer le levier, l’ajuster, garder le fait. Le domaine change le vocabulaire de départ, jamais la méthode. EN: medical, legal and scientific texts all call for the same move: spot the lever, adjust it, keep the fact. The domain changes the starting vocabulary, never the method."),
    table('sheet-mediation-domaines-exemples', 'Un exemple par domaine', ['Domaine', 'Terme technique', 'Traitement choisi'], [
      ['juridique', 'clause résolutoire', 'remplacé par une idée simple'],
      ['médical', 'algie résiduelle', 'remplacé par un mot courant'],
      ['scientifique', 'îlot de chaleur urbain', 'gardé et expliqué'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Ta médiation',
    opener: {
      line: "Karim te transmet un rapport de spécialiste, et un public t’attend de l’autre côté : ici tu écris la reformulation qui ne lui fait rien perdre. EN: Karim sends you a specialist report, and an audience is waiting on the other side: here you write the reformulation that loses them nothing.",
      imageRef: 'lessons/c2-06-mediation/act08.jpg',
    },
    sections: [],
    milestone: 'Tu reformules un texte de spécialiste pour un public nommé, en touchant les trois leviers ensemble, sans rien perdre ni rien ajouter. EN: You can reformulate a specialist text for a named audience, moving all three levers together, losing nothing and adding nothing.',
    estScreens: 42, restPoints: ['a8-scenario', 'a8-mission', 'a8-cheat', 'a8-quiz'],
  },
  sections: [A8_MODELE, A8_PLAN, A8_SCENARIO, A8_MISSION, A8_PARLER, A8_CHEAT, A8_PROGRESS, A8_QUIZ, A8_REVIEW, A8_ROUNDUP],
  imports: IMPORTED.act8,
};

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** MissionRich renders options in authored order, so every closed MISSION
 *  item is rotated here, options and `correct` together, so each
 *  option-count class spreads evenly and no slot repeats more than twice in
 *  a row. No text is changed and no `why` names a position. The quiz keeps
 *  its authored slots, scattered by hand (6.11), exactly as c2.01 does. */
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c2-06-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c2-06-lettre': "The landlord's letter (act 1), ONE VOICE, one take, read in a flat, formal register, even pace, no drama, exactly as a specialist text should sound before mediation.",
  'rec-c2-06-trois-leviers': 'The three lever cards (act 2), ONE VOICE, one take, read plainly, each at its own natural register (the specialist line more formal, the plain one more conversational).',
  'rec-c2-06-trois-textes': "Léna's three-domain story (act 3), ONE VOICE for the specialist lines (flat, formal), a second, warmer VOICE for Léna's reformulations, one take each.",
  'rec-c2-06-trois-domaines-ecoute': 'REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, in authored order, read plainly with no extra emphasis that would give away which is which.',
  'rec-c2-06-quatre-versions': 'The four-version reading (act 4), ONE VOICE, one take, a narrator reading each version in a neutral, even tone, with no vocal hint at which is correct.',
  'rec-c2-06-deux-pieges': 'The two trap cards (act 5), ONE VOICE, one take, read plainly, with no corrective or ironic tone that would give the trap away.',
  'rec-c2-06-piege-simplification': "The audio step plays each card's CORRECT (well-mediated) sentence, not the trap `promptSound`. Read the six plainly, identical pace, no stress on the fixed word.",
  'rec-c2-06-ligne': 'The fidelity reading (act 6), ONE VOICE, one take, a measured, reflective tone, as if thinking the rule through out loud.',
  'rec-c2-06-fidele-ecoute': 'REQUIRED FOR THE EAR MISSION (act 6): six lines, ONE TAKE, ONE VOICE, in authored order, read at even conversational pace with no vocal cue beyond the words themselves.',
  'rec-c2-06-rapport-karim': "Karim's municipal report paragraph (act 8), ONE VOICE, one take, read in a flat, formal, bureaucratic register, even pace throughout, exactly the register the task asks the learner to move away from.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C2 · LEÇON 06',
  intro: "At C1 you learned to translate complex ideas by reformulation, from English into French. At C2, the reformulation stays inside French and changes AUDIENCE instead: a specialist legal, medical or scientific text, reformulated for a named reader (a child, a layperson, a competent non-specialist colleague), without losing a single actionable fact, inventing a claim the source never made, or talking down to the reader. This lesson builds the method through eight acts, from a tenant's unreadable letter to a full report you reformulate yourself.",
  skill: 'PE',
  grammarAssumed: ['c1.22'],
  grammarIntroduced: [
    'Linguistic mediation as a distinct CEFR C2 skill: reformulating a specialist text for a named audience WITHIN French, never a language change',
    'The three levers of mediation: register (the words), sentence length (the form), and the treatment of each technical term (kept and explained, replaced with an image, or generalised), always moved together',
    'False simplification, named and trapped: vocabulary simplified with the original sentence structure kept whole, or sentences shortened with the jargon left unexplained, neither one real mediation',
    'Fidelity as a hard line: no omission of an actionable fact (a deadline, a threshold, a cause), no invented certainty or risk, no condescension toward the reader',
    'Producing a full reformulation of a new technical passage for a named audience, graded on fidelity and on both levers moved together',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Au C1, tu as appris à traduire des idées complexes par reformulation, de l’anglais vers le français. Au C2, la reformulation reste à l’intérieur du français et change de PUBLIC : un texte de spécialiste, juridique, médical ou scientifique, reformulé pour un lecteur nommé, sans jamais perdre un fait qui sert à agir, inventer une certitude, ou traiter ce lecteur avec condescendance. Cette leçon construit la méthode en huit actes, d’une lettre illisible à un rapport complet que tu reformules toi-même.",
    minutes: 150,
    difficulty: 5,
    glyph: 'porte',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: MEDIATION_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, MEDIATION_SOURCE, MEDIATION_SOURCE_EN, dicteeFor };
export const lessonWithoutTask = (): Lesson => LESSON;
