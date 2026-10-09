// c2.01.l1 « Précision, nuance et l’implicite » — the lesson. DRAFT, the
// first lesson of the C2 band. To RICH-LESSON-STANDARD.md (the workshop
// shape, text and task) on top of B1-BUILD-PLAYBOOK.md, with the C2 rules of
// C2-BUILD-PLAN.md and the c2.01 brief in C2-BUILD-LOG.md.
//
// Not imported, not merged into seed.json, not published. No Postgres
// session was opened while authoring this file (see the corpus header, §B):
// every reused predecessor is cited by REFRAME import and by trail position
// read from the local `seed.json`'s units array, never by reusing another
// lesson’s item id.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Two halves, one lesson. Acts 1 to 4 are PRECISION: choosing the one
//   near-synonym a context calls for, and catching the English-cognate
//   reflex that reaches for the wrong one. Acts 5 to 8 are THE IMPLICIT:
//   reading irony, understatement and presupposition PAST c1.20 (which only
//   ever asked "what does this mean"), into producing a reply that matches
//   the register the implicit carries. The task in act 8 asks for both at
//   once: read the register, then write the reply in it, using at least two
//   precisely chosen words.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le mot qui blesse            6  a donor’s calm understatement, and
//                                       the cognate word that would have
//                                       inflamed it; the problem, named
//    2  Les nuances de sens          5  four near-synonym families as
//                                       ladders: register, intensity, moral
//                                       colour, force
//    3  Choisir le mot exact         5  the same family, four real contexts,
//                                       one word each time
//    4  Le réflexe du mot anglais    4  six cognate traps: frustré,
//                                       intéressant, demander, réaliser,
//                                       ignorer, charmant
//    5  Ce que le texte laisse       5  irony, litote, presupposition,
//       entendre                        recapped past c1.20, read for the
//                                       REGISTER they carry
//    6  Lire sans trop lire          5  three replies to one implicit line,
//                                       exactly one register-matched; the
//                                       sur-lecture / sous-lecture pair
//    7  Répondre dans le ton juste   4  producing the matching reply; the
//                                       commonErrors that give the mismatch
//                                       away
//    8  Ta réponse                  11  the model exchange, the plan, the
//                                       scenario, TASK, quiz, review, roundup
//
//   TOTAL 45 missions, 8 acts (6,5,5,4,5,5,4,11). Corpus: 147 authored rows
//   (.1400-.1570, inside the claimed .1400-.1599 block). Quiz: 8 rounds of 8
//   (mcq, typeIn, errorSpot, listenChoose mixed). Eight error triggers,
//   eight remediation drills, four reference sheets, ten terms, two
//   tapTables. Chapter artwork: `c2-langue-use-image-prompts.md`, 8 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Chaque mot a un curseur : où tu le places dit autant que ce qu’il
//   signifie. » EN: Every word has a dial: where you set it says as much as
//   what it means.
//
//   ONE METAPHOR, THE DIAL. Choosing a near-synonym is turning the dial
//   yourself (acts 1-4); reading the implicit is reading the dial someone
//   else has set (acts 5-6); replying in register is matching it (acts 7-8).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    near-synonym families read as ladders of register, intensity
//           and moral colour; the English-cognate reflex as its own named
//           fault, with six worked traps; irony, litote and presupposition
//           read for the REGISTER they carry; distinguishing a
//           register-matched reply from one that minimises, dramatises or
//           over-reads; producing that reply, graded.
//   QUOTES  c1.06's reframe (act 1), c1.17's (acts 1 and 2), c1.19's (act 1),
//           c1.20's (acts 1 and 5), each imported from its own corpus file,
//           never retyped.
//   LEAVES  hedging and softening in speech to c1.06; connotation and
//           register as a general topic to c1.17 (this lesson builds a
//           dedicated method past it); naming a figure’s effect to c1.19;
//           reading irony, presupposition and omission as RECOGNITION to
//           c1.20 (never re-taught, never re-used by example).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use vous where the situation calls for
//   it. French only on the learner surface; English authored on every `en`
//   field and every trailing « EN: », never shown by default. No em dash, no
//   U+203F tie, never "honnête"/"honest". Typographic ’ throughout. No
//   spaced « ? » or « ! » in a scene or story bubble. Citations by trail
//   position in French words (« la leçon 20 du C1 »), never a raw id.
//   Mission answer slots are spread by `balanceSlots()`; the quiz is left
//   with its authored slots scattered by hand (6.11).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 45 missions sits inside "up to 100" but well below the 76-91 the four B1
//      pilots shipped. Every sub-topic in the brief is covered once, fully,
//      with no repeated material (richness as "no padding" reads this as a
//      feature, not a shortfall) — extend any single act before the phone
//      review, or ship at this size?
//   2. The task (act 8) marks BOTH halves at once: reading the register AND
//      choosing precise words in the reply. A single six-criterion rubric
//      follows c1.20's shape. Split into two shorter tasks instead?
//   3. Two contested usage calls in act 4 (réaliser, ignorer) are stated
//      "selon l’Académie française" against "selon Le Robert", per the
//      c1.18 convention. Keep both verdicts, or pick one for a cleaner card?
//   4. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.
//   5. No row is reused from c1.06/c1.17/c1.19/c1.20 by id (corpus §B): this
//      draft opened no Postgres session, so a cross-file id could not be
//      verified against the real published rows. Reuse specific rows by id
//      once the pre-review pass has Postgres access, or keep every example
//      freshly authored as this draft does?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap, ALL_ROWS, ROWS_BY_ACT,
  IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor, MESSAGE_CAMILLE, MESSAGE_CAMILLE_EN,
  C120_REF, C106_REF, C117_REF, C119_REF,
  C120_REFRAME, C120_REFRAME_EN, C106_REFRAME, C106_REFRAME_EN, C117_REFRAME, C117_REFRAME_EN, C119_REFRAME, C119_REFRAME_EN,
} from './precision-nuance-corpus.ts';
import { PRECISION_NUANCE_TERMS } from './precision-nuance-terms.ts';

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
  if (!r) throw new Error(`c2.01: no item ${id}`);
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

/** THE "USE IT" BEAT for acts 6 and 7: calibrating a reply’s register. */
function pourTaReponse(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ta réponse', frSub,
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
 *  ACT 1 — LE MOT QUI BLESSE
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Un mot, deux messages', frSub: "Le bureau de l’association Trame",
  setting: { place: "Le bureau de l’association Trame", city: 'Montréal', time: '9 h 10', ambience: "deux bureaux voisins, une tasse de café, un courriel à moitié écrit" },
  beats: [
    { kind: 'narration', text: "Montréal, mardi matin, au bureau de l’association Trame. Léa revient d’une réunion avec un donateur, M. Fortin, qui vient d’apprendre un changement de programme.", size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Marc', fr: "Comment a réagi M. Fortin, à la réunion.", en: 'How did Mr. Fortin react, at the meeting.', respell: '[koh-mahⁿ a ray-ZHEE muh-syuh for-TEHⁿ a la ray-nyohⁿ]', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Léa', fr: "Il a dit : « C’est dommage, mais on fera avec. »", en: 'He said: "That is a shame, but we will manage."', respell: '[eel a DEE seh doh-MAZH meh ohⁿ fuh-RA a-VEK]', stage: 'Le ton était calme, presque détaché.', size: 'md', audio: AUDIO },
    { kind: 'narration', text: "Léa doit résumer la réaction de M. Fortin dans un courriel à toute l’équipe, avant midi.", size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Léa hésite entre deux mots. Lequel choisis-tu pour le courriel.', size: 'lg',
      options: [
        { fr: src(E(1402)).fr, respell: '[zhuh swee fryü-STRAY kuh la ray-nyohⁿ...]', en: src(E(1402)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(1401)).fr, respell: '[luh doh-na-TUHR ay-teh day-SÜ...]', en: src(E(1401)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Marc relit le courriel : « Déçu, ça colle à ce qu’il a dit : c’est dommage, pas plus. »",
        breaks: "Marc relève la tête : « Frustré. Il n’a pourtant pas eu l’air en colère, et tu risques d’alarmer toute l’équipe pour rien. »",
      },
    },
    {
      kind: 'break', heading: 'Un mot, deux messages',
      body: `« Déçu » dit une attente non comblée, sans accuser personne. « Frustré » vient d’un vocabulaire clinique et ajoute un froid que la réunion n’avait pas. EN: Déçu names an unmet expectation; frustré adds an unwanted chill.`,
      wrong: { fr: src(E(1402)).fr, ipa: '/ʒə sɥi fʁys.tʁe kə la ʁe.ynjɔ̃ swa a.ny.le/', respell: '[zhuh swee fryüs-TRAY kuh la ray-nyohⁿ swa a-nü-LAY]', en: src(E(1402)).en },
      right: { fr: src(E(1401)).fr, ipa: '/lə dɔ.na.tœʁ e.tɛ de.sy paʁ lə ʃɑ̃ʒ.mɑ̃ də pʁɔ.ɡʁam/', respell: '[luh doh-na-TUHR ay-teh day-SÜ par luh shahⁿzh-MAHⁿ duh proh-GRAM]', en: src(E(1401)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: "Le courriel part avec « déçu ». Cette leçon t’apprend à choisir ce mot à chaque fois, puis à lire le mot que les autres choisissent pour toi, et à y répondre dans le même registre.", size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['connotation', 'reflexe'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Peser un mot avant de le choisir', s: 'Actes 2 et 3 : les familles de synonymes, en registre, en force, en couleur' },
    { t: 'Éviter le réflexe du mot anglais', s: 'Acte 4 : six mots qui ressemblent à l’anglais, et ce qu’ils ratent' },
    { t: 'Lire ce qu’un texte laisse entendre', s: 'Actes 5 et 6 : l’ironie, la litote, le présupposé, pour leur registre' },
    { t: 'Répondre dans le ton juste, puis le prouver', s: 'Actes 7 et 8 : la réponse qui colle, puis ta mission' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'Le courriel de Léa', frSub: 'Le mot choisi, et pourquoi',
  text: "Bonjour à toute l’équipe,\n\nJ’ai rencontré M. Fortin ce matin pour discuter du changement de programme. Comme prévu, il a été déçu par la nouvelle, mais il reste un partenaire engagé. Il a dit : « C’est dommage, mais on fera avec. » Je ne pense pas qu’il faille s’inquiéter plus que ça : son ton restait calme, et il n’a exprimé aucune colère.\n\nJe propose qu’on lui envoie, cette semaine, un résumé des prochaines étapes pour qu’il reste rassuré.\n\nLéa",
  glossary: [
    { word: 'rassuré', en: 'reassured', note: 'Rendu moins inquiet. EN: made less worried.' },
  ],
  questions: [
    { q: "Devine le sens, sans dictionnaire : « il reste un partenaire engagé ». Que dit ce mot sur la relation.", a: "Que le changement n’a pas rompu le lien : M. Fortin continue, malgré sa déception." },
    { q: "Pourquoi Léa écrit-elle « déçu » plutôt qu’un mot plus fort.", a: 'Parce que « déçu » correspond exactement à ce que M. Fortin a dit et à son ton calme ; un mot plus fort alarmerait l’équipe sans raison.' },
    { q: "Qu’est-ce qui, dans le courriel, justifie ce choix de mot.", a: "Le ton calme de M. Fortin et l’absence de colère exprimée : le mot doit correspondre à ce qui s’est vraiment passé, ni plus ni moins." },
  ],
  audio: REC('rec-c2-01-courriel'), say: REFRAME, terms: ['connotation'],
};

const A1_ACQUIS: Sec<'examples'> = {
  type: 'examples', id: 'a1-acquis', layer: 'core', sheetId: 'sheet-nuances',
  title: 'Ce que tu sais déjà',
  examples: [
    { fr: C106_REFRAME, en: C106_REFRAME_EN, note: `${Cap(C106_REF)} : nuancer à l’oral, par la politesse et la distance` },
    { fr: C117_REFRAME, en: C117_REFRAME_EN, note: `${Cap(C117_REF)} : la force, la couleur et les voisins d’un synonyme` },
    { fr: C119_REFRAME, en: C119_REFRAME_EN, note: `${Cap(C119_REF)} : nommer l’effet d’une figure` },
    { fr: C120_REFRAME, en: C120_REFRAME_EN, note: `${Cap(C120_REF)} : lire ce qu’un texte dit sans le dire` },
  ],
  audio: AUDIO, say: REFRAME, terms: ['connotation', 'ironie'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Un rapport médical décrit une douleur', fr: src(E(1407)).fr, en: src(E(1407)).en },
    { situation: 'Un courriel annonce un retard à un client', fr: src(E(1408)).fr, en: src(E(1408)).en },
    { situation: 'Tu racontes un incident à voix haute', fr: src(E(1409)).fr, en: src(E(1409)).en },
    { situation: 'Une équipe choisit son mot avant d’écrire', fr: src(E(1406)).fr, en: src(E(1406)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['connotation'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le mot choisi', '« Déçu » et « frustré » parlent tous les deux d’une attente non comblée. Ce qui les distingue...', ['rien, ils sont interchangeables', 'la connotation : l’un accuse, l’autre non', 'la grammaire'], 1,
    'La connotation est ce que le mot suggère au-delà de sa définition. EN: connotation is what the word suggests beyond its definition.'),
  ctl('Le ton de M. Fortin', 'Léa choisit « déçu » parce que...', ['le dictionnaire le préfère', 'ce mot correspond à ce qu’il a dit et à son ton calme'], 1,
    'Le mot doit correspondre à ce qui s’est vraiment passé. EN: the word must match what actually happened.'),
  ctl('La mission de cette leçon', 'Cette leçon t’apprend à...', ['choisir le mot exact et lire le registre qu’on te donne', 'traduire mot à mot', 'éviter tous les mots forts'], 0,
    'Choisir, lire, répondre : les trois mêmes gestes partout dans la leçon. EN: choose, read, reply.'),
], ['connotation']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le mot qui blesse',
    opener: {
      line: "Léa hésite entre deux mots pour un même fait : ici tu apprends pourquoi le choix compte autant que le fait lui-même. EN: Léa hesitates between two words for the same fact: here you learn why the choice matters as much as the fact.",
      imageRef: 'lessons/c2-01-precision-nuance/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sépares deux mots voisins par ce qu’ils suggèrent, pas seulement par ce qu’ils signifient. EN: You can tell two neighbouring words apart by what they suggest, not only what they mean.',
    estScreens: 24, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_ACQUIS, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LES NUANCES DE SENS
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-nuances',
  title: 'Une famille, cinq hauteurs', frSub: 'Content, heureux, ravi, comblé, aux anges',
  hint: 'Cinq cartes. Le fait ne change pas ; le registre et la force, oui.',
  audio: REC('rec-c2-01-famille-content'), say: REFRAME, terms: ['registre', 'intensite'],
  cards: [
    { head: 'Le socle, neutre', label: 'courant', fr: src(E(1410)).fr, sub: '[zhuh swee kohⁿ-TAHⁿ dü ray-zül-TA]',
      body: "« Content » dit la satisfaction la plus simple, sans intensité particulière. EN: content names the plainest satisfaction, with no particular intensity." },
    { head: 'Un peu plus net', label: 'courant, légèrement plus fort', fr: src(E(1411)).fr, sub: '[zhuh swee uh-RUH duh suh ray-zül-TA]',
      body: "« Heureux » est à peine plus fort, et reste à l’aise dans presque tous les contextes. EN: heureux is only slightly stronger and still fits almost any context." },
    { head: 'Le registre monte', label: 'soigné', fr: src(E(1412)).fr, sub: '[zhuh swee ra-VEE duh suh ray-zül-TA]',
      body: "« Ravi » marque un registre plus soigné, à l’écrit comme dans une remarque polie. EN: ravi marks a more careful register, in writing or a polite remark." },
    { head: 'La force maximale', label: 'soutenu', fr: src(E(1413)).fr, sub: '[zhuh swee kohⁿ-BLAY par suh ray-zül-TA]',
      body: "« Comblé » dit un accomplissement complet, à réserver aux moments qui le méritent vraiment. EN: comblé names a complete fulfilment, kept for moments that really earn it." },
    { head: 'Le registre familier', label: 'familier', fr: src(E(1414)).fr, sub: '[zhuh swee oh-zahⁿzh duh-PWEE suh ray-zül-TA]',
      body: "« Aux anges » est une expression imagée, pour parler à un proche, jamais dans un rapport. EN: aux anges is an idiom for talking to someone close, never in a formal report." },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a2-table', layer: 'core', sheetId: 'sheet-nuances',
  title: 'Le même fait, quatre hauteurs',
  cols: ['Familier', 'Courant', 'Soigné', 'Exemple soigné'],
  rows: [
    { cells: ['laisser tomber', 'abandonner', 'renoncer à', 'Elle a renoncé au projet.'], say: src(E(1432)).fr,
      detail: { title: 'Le même abandon, trois mots', body: "Le fait est identique ; seul le registre change selon qui écoute. EN: the fact is the same; only the register changes with the listener.", say: src(E(1430)).fr } },
    { cells: ['c’est pas mal', 'c’est bon', 'c’est remarquable', 'Votre rapport est remarquable.'], say: src(E(1435)).fr,
      detail: { title: 'Un jugement, trois hauteurs', body: 'Le même jugement positif, de la conversation entre amis au compliment professionnel. EN: the same positive judgement, from casual talk to a professional compliment.', say: src(E(1433)).fr } },
    { cells: ['taper sur', 'critiquer', 'blâmer', 'Elle blâme le conseil pour cet échec.'], say: src(E(1417)).fr,
      detail: { title: 'Critiquer, puis blâmer', body: "Blâmer ajoute une faute morale que critiquer n’affirme pas forcément. EN: blâmer adds a moral fault that critiquer does not necessarily claim.", say: src(E(1415)).fr } },
    { cells: ['stressée', 'inquiète', 'angoissée', 'Elle est angoissée par la réunion de vendredi.'], say: src(E(1423)).fr,
      detail: { title: 'La même famille, trois forces', body: 'Stressée est familier et léger, angoissée dit une vraie détresse. EN: stressée is casual and light, angoissée names real distress.', say: src(E(1424)).fr } },
    { cells: ['demander', 'réclamer', 'exiger', 'Le comité exige une réunion avant vendredi.'], say: src(E(1428)).fr,
      detail: { title: 'La force d’une demande', body: 'Demander reste neutre ; exiger affirme un droit et ne laisse pas de place au refus. EN: demander stays neutral; exiger claims a right and leaves no room for refusal.', say: src(E(1426)).fr } },
    { cells: ['bah, incriminer ça fait sérieux', 'reprocher', 'incriminer', 'Le rapport incrimine le conseil d’administration.'], say: src(E(1418)).fr,
      detail: { title: 'Reprocher, puis incriminer', body: 'Incriminer appartient à un registre quasi juridique, trop lourd pour une remarque ordinaire. EN: incriminer belongs to an almost legal register, too heavy for an ordinary remark.', say: src(E(1416)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre', 'intensite'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a2-exemples', layer: 'core', title: 'Deux familles de plus',
  examples: [
    ex(E(1425), 'suggérer : la force la plus douce'),
    ex(E(1427), 'réclamer : un droit, pas une faveur'),
    ex(E(1429), 'revendiquer : une revendication collective, un droit affirmé'),
    ex(E(1420), 'préoccupée : discret, presque administratif'),
    ex(E(1421), 'inquiète : la force neutre, la plus courante'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['intensite'],
};

const A2_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-groupe', layer: 'core', size: 'lg',
  title: 'Classe-les par force', frSub: 'Même famille, même direction',
  groups: [
    grp('La famille du contentement', [
      it(E(1410), 'content : le socle'),
      it(E(1412), 'ravi : plus soigné'),
      it(E(1413), 'comblé : la force maximale'),
    ], chk('Dans cette famille, le mot le plus fort est...', ['content', 'ravi', 'comblé'], 2,
      'Comblé dit un accomplissement complet, réservé aux moments qui le méritent. EN: comblé names a complete fulfilment.')),
    grp('La famille du reproche', [
      it(E(1415), 'critiquer : neutre'),
      it(E(1417), 'blâmer : une faute morale'),
      it(E(1418), 'incriminer : quasi juridique'),
    ], chk('Lequel de ces trois mots ajoute une idée de faute morale, sans aller jusqu’au juridique.', ['critiquer', 'blâmer', 'incriminer'], 1,
      'Blâmer juge moralement ; incriminer va plus loin, vers la responsabilité formelle. EN: blâmer passes moral judgement; incriminer goes further, toward formal responsibility.')),
    ctl('La famille de la demande', 'Entre « demander » et « exiger », lequel affirme un droit et ne laisse pas de place au refus.', ['demander', 'exiger'], 1,
      'Exiger affirme un droit ; demander reste ouvert à une réponse négative. EN: exiger claims a right; demander stays open to a negative answer.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre', 'intensite'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le registre', '« Laisser tomber », « abandonner », « renoncer à » disent...', ['trois faits différents', 'le même fait, à trois hauteurs de registre'], 1,
    'Le fait est identique ; seul le registre change. EN: the fact is identical; only the register changes.'),
  ctl('La force', 'Entre « inquiète » et « angoissée », le mot qui dit la détresse la plus forte est...', ['inquiète', 'angoissée'], 1,
    'Angoissée pousse beaucoup plus loin que inquiète. EN: angoissée goes much further than inquiète.'),
  ctl('La couleur morale', 'Blâmer, par rapport à critiquer, ajoute...', ['rien de plus', 'une faute morale'], 1,
    'Blâmer juge moralement ce que critiquer se contente de contester. EN: blâmer passes moral judgement where critiquer merely contests.'),
], ['registre', 'intensite']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Les nuances de sens',
    opener: {
      line: "Un même fait monte et descend un registre comme une note de musique : ici tu apprends à l’entendre dans quatre familles de mots. EN: The same fact rises and falls through a register like a musical note: here you learn to hear it across four word families.",
      imageRef: 'lessons/c2-01-precision-nuance/act02.jpg',
    },
    sections: [],
    milestone: 'Tu places un mot sur l’échelle du registre, de l’intensité et de la couleur morale, pour quatre familles. EN: You can place a word on the scale of register, intensity and moral colour, across four families.',
    estScreens: 28, restPoints: ['a2-table', 'a2-groupe'],
  },
  sections: [A2_DECK, A2_TABLE, A2_EXEMPLES, A2_GROUPE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — CHOISIR LE MOT EXACT
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a3-histoire', layer: 'core',
  title: 'Le même message, deux destinataires', frSub: 'Léa écrit à son amie, puis au donateur',
  setting: 'Le même soir, Léa écrit deux messages sur le même sujet : un à son amie Nadia, un à M. Fortin.',
  bubbles: [
    { from: 'narrator', fr: 'À Nadia, Léa écrit librement.', en: 'To Nadia, Léa writes freely.' },
    { from: 'user', fr: src(E(1440)).fr, en: src(E(1440)).en },
    { from: 'narrator', fr: 'À M. Fortin, elle choisit chaque mot.', en: 'To Mr. Fortin, she chooses every word.' },
    { from: 'user', fr: src(E(1444)).fr, en: src(E(1444)).en, warn: 'Un registre soutenu, pour une relation à protéger.' },
  ],
  closing: { fr: 'Le même sujet, deux curseurs réglés différemment.', en: 'The same topic, two dials set differently.' },
  audio: REC('rec-c2-01-deux-messages'), say: REFRAME, terms: ['registre'],
};

const A3_CONTEXTE1: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-contexte1', layer: 'core', size: 'lg',
  title: 'Quatre contextes, un mot chaque fois', frSub: 'La famille du contentement',
  groups: [
    grp('À un ami, par texto', [
      it(E(1443), 'franchement, ça me fait vraiment plaisir'),
    ], chk('Dans un texto à un ami, le mot le plus naturel est...', ['content', 'comblé'], 0,
      'Comblé est trop fort et trop soigné pour un texto entre amis. EN: comblé is too strong and too careful for a text to a friend.')),
    grp('Dans une lettre officielle', [
      it(E(1441), 'nous sommes ravis de vous informer'),
    ], chk('Dans une lettre officielle d’acceptation, le mot attendu est plutôt...', ['content', 'ravi'], 1,
      'Ravi marque le registre soigné qu’une lettre officielle demande. EN: ravi marks the careful register a formal letter calls for.')),
    ctl('Dans un texte littéraire', '« Le narrateur se dit comblé par cette existence frugale » : ce choix de mot...', ['convient au registre littéraire visé', 'serait trop fort dans n’importe quel contexte'], 0,
      'Un texte littéraire peut porter un mot que la conversation courante évite. EN: a literary text can carry a word everyday speech avoids.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre'],
};

const A3_CONTEXTE2: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-contexte2', layer: 'core', size: 'lg',
  title: 'La force exacte, selon qui écoute', frSub: 'Demander, exiger, préoccupée, angoissée',
  groups: [
    grp('La propriétaire et les travaux', [
      it(E(1445), 'la propriétaire exige, selon le règlement'),
      it(E(1446), 'la propriétaire suggère, plus faible'),
    ], chk('Pour faire respecter un règlement, le mot qui protège vraiment le droit du locataire est...', ['exige', 'suggère'], 0,
      'Exiger s’appuie sur le règlement ; suggérer laisse toute la décision à l’autre partie. EN: exiger rests on the by-law; suggérer leaves the whole decision to the other party.')),
    grp('Sana avant son entrevue', [
      it(E(1452), 'Sana, stressée, à une amie'),
      it(E(1453), 'Sana, anxieuse, dans un contexte formel'),
    ], chk('Pour un message formel à l’intention du jury, le mot attendu est...', ['stressée', 'anxieuse'], 1,
      'Anxieuse porte le registre soutenu que le mot stressée, familier, n’a pas. EN: anxieuse carries the formal register that the casual stressée lacks.')),
    ctl('Le comité de lecture', '« Le comité de lecture juge le roman inégal, mais ambitieux » : ce jugement, nuancé, est...', ['au registre soigné attendu d’un comité', 'trop familier pour un comité'], 0,
      'Soigné, et nuancé en deux temps : un défaut reconnu, une qualité saluée. EN: careful, and nuanced in two moves: a flaw named, a quality praised.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre', 'intensite'],
};

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a3-ecoute', layer: 'core', hideLines: true,
  title: 'Quel registre entends-tu', frSub: 'Huit phrases, quatre familles',
  lines: [ln(E(1447)), ln(E(1448)), ln(E(1450)), ln(E(1451)), ln(E(1454)), ln(E(1455)), ln(E(1456)), ln(E(1457))],
  questions: [
    { q: 'Première phrase : registre familier ou soigné.', opts: ['familier', 'soigné'], correct: 0,
      why: '« Taper sur son idée » est une expression familière. EN: "taper sur" is a casual idiom.' },
    { q: 'Deuxième phrase : registre familier ou soigné.', opts: ['familier', 'soigné'], correct: 1,
      why: '« Je vous invite à reconsidérer » marque un net registre soigné. EN: "je vous invite à reconsidérer" clearly marks a careful register.' },
    { q: 'Cinquième et sixième phrases : laquelle est la plus soutenue.', opts: ['la cinquième', 'la sixième'], correct: 1,
      why: '« A formellement renoncé » est plus soutenu que « on va juste laisser tomber ». EN: "a formellement renoncé" is more formal than "on va juste laisser tomber".' },
    { q: 'Septième et huitième phrases : laquelle revendique un droit, pas une simple demande.', opts: ['la septième', 'la huitième'], correct: 0,
      why: '« Revendiquent un droit de regard » affirme un droit ; « demandent » reste une requête. EN: "revendiquent un droit" claims a right; "demandent" stays a request.' },
  ],
  audio: REC('rec-c2-01-registres-ecoute'), say: REFRAME, terms: ['registre'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le contexte décide', 'Le bon mot, dans cette leçon, est toujours...', ['le plus poli', 'celui que le contexte précis demande'], 1,
    'Le curseur se règle sur la situation, pas sur une règle fixe de politesse. EN: the dial is set by the situation, not a fixed rule of politeness.'),
  ctl('Protéger un droit', 'Pour faire respecter un règlement, le mot le plus sûr est...', ['suggérer', 'exiger'], 1,
    'Exiger s’appuie sur un droit reconnu. EN: exiger rests on a recognised right.'),
  ctl('Un jury formel', 'Devant un jury, le registre attendu est plutôt...', ['familier', 'soutenu'], 1,
    'Le registre soutenu convient à un contexte formel. EN: the formal register suits a formal context.'),
], ['registre']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Choisir le mot exact',
    opener: {
      line: "Léa écrit deux messages sur le même sujet et ne choisit jamais les mêmes mots : ici tu apprends à régler le curseur sur le bon destinataire. EN: Léa writes two messages on the same topic and never picks the same words: here you learn to set the dial for the right reader.",
      imageRef: 'lessons/c2-01-precision-nuance/act03.jpg',
    },
    sections: [],
    milestone: 'Tu choisis, parmi plusieurs vrais synonymes, celui qu’un contexte précis demande. EN: You can choose, among several real synonyms, the one a precise context calls for.',
    estScreens: 30, restPoints: ['a3-contexte1', 'a3-contexte2'],
  },
  sections: [A3_HISTOIRE, A3_CONTEXTE1, A3_CONTEXTE2, A3_ECOUTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LE RÉFLEXE DU MOT ANGLAIS
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-reflexe',
  title: 'Le mot qui ressemble à l’anglais', frSub: 'Pas faux, juste mal réglé',
  hint: 'Trois cartes. Le mot existe, et il rate quand même le registre.',
  audio: REC('rec-c2-01-reflexe'), say: REFRAME, terms: ['reflexe'],
  cards: [
    { head: 'Frustré', label: 'trop clinique', fr: src(E(1465)).fr, sub: '[zhuh swee fryüs-TRAY kuh la ray-nyohⁿ...]',
      body: "Frustré vient d’un vocabulaire de psychologie, un besoin bloqué. Pour une déception ordinaire, déçu colle mieux. EN: frustré comes from a psychology vocabulary, a blocked need; for an ordinary disappointment, déçu fits better." },
    { head: 'Intéressant', label: 'souvent un refus poli', fr: src(E(1469)).fr, sub: '[seh ehⁿ-tay-reh-SAHⁿ tohⁿ proh-ZHEH]',
      body: "« C’est intéressant » dit parfois poliment : je ne sais pas trop quoi en penser. Pour un vrai enthousiasme, passionnant porte mieux le message. EN: \"intéressant\" sometimes politely means I’m not sure what to make of it; for real enthusiasm, passionnant carries the message better." },
    { head: 'Demander', label: 'trop faible pour exiger', fr: src(E(1472)).fr, sub: '[zhuh tuh duh-MAHⁿD duh koh-ree-ZHAY luh ra-POR]',
      body: "Demander reste une requête ordinaire ; pour affirmer un droit et ne pas laisser de place au refus, le mot est exiger. EN: demander stays an ordinary request; to claim a right and leave no room for refusal, the word is exiger." },
  ],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a4-piege', layer: 'core', swipe: true,
  title: 'Six mots, un seul réflexe',
  rule: {
    title: 'Le mot n’est pas faux ; il rate le registre',
    body: "Ces six mots existent en français et ne sont pas des erreurs. Chacun ressemble à son équivalent anglais, et rate parfois le registre voulu. EN: each word exists and is not wrong; each looks English, and sometimes misses the wanted register.",
  },
  cards: [
    { promptLabel: 'frustré, trop clinique', promptSound: 'Je suis frustré que la réunion soit annulée.', fr: src(E(1466)).fr, ipa: '/ʒə sɥi de.sy kə la ʁe.ynjɔ̃ swa a.ny.le/', tip: 'Déçu correspond à une déception ordinaire, sans le froid clinique de frustré. EN: déçu fits an ordinary disappointment, without frustré’s clinical chill.' },
    { promptLabel: 'intéressant, trop plat', promptSound: 'C’est intéressant, ton projet.', fr: src(E(1470)).fr, ipa: '/sɛ pa.sjɔ.nɑ̃ tɔ̃ pʁɔ.ʒɛ/', tip: 'Passionnant porte le vrai enthousiasme que intéressant, seul, ne porte pas toujours. EN: passionnant carries the real enthusiasm that intéressant alone does not always carry.' },
    { promptLabel: 'demander, trop faible', promptSound: 'Je te demande de corriger le rapport avant demain.', fr: src(E(1473)).fr, ipa: '/ʒɛ.ʒij kə lə ʁa.pɔʁ swa kɔ.ʁi.ʒe a.vɑ̃ də.mɛ̃/', tip: 'Exiger affirme un droit ; demander reste une requête qu’on peut refuser. EN: exiger claims a right; demander stays a request that can be refused.' },
    { promptLabel: 'réaliser, contesté', promptSound: 'J’ai réalisé mon erreur trop tard.', fr: src(E(1475)).fr, ipa: '/ʒə mə sɥi ʁɑ̃.dy kɔ̃t də mɔ.ne.ʁœʁ tʁo taʁ/', tip: 'Se rendre compte de évite le débat ; réaliser pour comprendre reste discuté selon l’Académie française. EN: se rendre compte de avoids the debate; réaliser for "to understand" is still contested per the Académie française.' },
    { promptLabel: 'ignorer, contesté', promptSound: 'Elle a ignoré ma remarque pendant toute la réunion.', fr: src(E(1478)).fr, ipa: '/ɛl na pa tə.ny kɔ̃t də ma ʁə.maʁk/', tip: 'Ne pas tenir compte de reste le tour le plus sûr à l’écrit, selon l’Académie française. EN: ne pas tenir compte de remains the safest phrasing in writing, per the Académie française.' },
    { promptLabel: 'charmant, à froid', promptSound: 'Charmant, ce commentaire, vraiment.', fr: src(E(1480)).fr, ipa: '/ʃaʁ.mɑ̃ sə kɔ.mɑ̃.tɛʁ vʁɛ.mɑ̃/', tip: 'Dit froidement, charmant signale souvent le contraire d’un compliment. EN: said coldly, charmant often signals the opposite of a compliment.' },
  ],
  drill: [
    { promptSay: 'Pour une déception ordinaire, le mot qui colle est ... .', opts: ['frustré', 'déçu'], correct: 1 },
    { promptSay: 'Pour un vrai enthousiasme, mieux vaut dire ... .', opts: ['intéressant', 'passionnant'], correct: 1 },
    { promptSay: 'Pour affirmer un droit, sans place pour le refus, le mot est ... .', opts: ['demander', 'exiger'], correct: 1 },
    { promptSay: '« J’ai réalisé mon erreur » pour « comprendre » reste ... selon l’Académie.', opts: ['contesté', 'parfaitement correct'], correct: 0 },
    { promptSay: 'À l’écrit soigné, le tour le plus sûr pour « ignorer un avis » est ... .', opts: ['ignorer un avis', 'ne pas tenir compte d’un avis'], correct: 1 },
    { promptSay: '« Charmant » dit froidement signale souvent ... .', opts: ['un vrai compliment', 'le contraire d’un compliment'], correct: 1 },
    { promptSay: 'Ces six mots existent en français et sont ... .', opts: ['tous des erreurs', 'pas faux, juste mal réglés'], correct: 1 },
    { promptSay: 'Le réflexe se corrige en cherchant ... avant d’écrire.', opts: ['un dictionnaire bilingue', 'la famille entière du mot'], correct: 1 },
  ],
  steps: STEPS_STD('Six mots, un seul réflexe', 'Écoute les six phrases bien réglées', 'Huit phrases'),
  audio: REC('rec-c2-01-piege-reflexe'), say: REFRAME, terms: ['reflexe'],
};

const A4_USAGE = pourTaReponse('a4-usage', 'Tu corriges le réflexe', [
  grp('Le bon réglage', [
    it(E(1467), 'vexé : une autre vraie nuance'),
    it(E(1468), 'exaspéré : la force maximale'),
    free('Je suis frustré, encore une fois.', 'I am frustrated, yet again.', 'le réflexe, sans nuance'),
  ], chk('Pour dire une vraie blessure d’orgueil, le mot le plus exact est...', ['frustré', 'vexé'], 1,
    'Vexé nomme précisément la blessure d’orgueil ; frustré reste trop général. EN: vexé precisely names a hurt pride; frustré stays too general.')),
  grp('Les deux cas contestés', [
    it(E(1476), 'réaliser : selon l’Académie et selon Le Robert'),
    it(E(1479), 'ignorer : les deux verdicts'),
  ], chk('Pour ces deux mots contestés, la bonne règle à retenir est...', ['un seul verdict, toujours valable', 'deux verdicts, selon la source, à citer tous les deux'], 1,
    'Un appel contesté se cite « selon » chaque source, jamais comme un verdict unique. EN: a contested call is cited "selon" each source, never as a single verdict.')),
], ['reflexe']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le réflexe', 'Frustré, intéressant, demander existent et...', ['sont toujours corrects, dans n’importe quel contexte', 'ratent souvent le registre voulu'], 1,
    'Chacun existe et chacun rate le registre au moins une fois sur deux. EN: each exists and each misses the register at least half the time.'),
  ctl('Le cas contesté', 'Pour « réaliser » au sens de « comprendre », la règle à citer est...', ['un seul avis, celui de l’Académie', 'les deux avis, selon chaque source'], 1,
    'La connotation contestée se cite « selon », jamais comme un verdict unique. EN: a contested connotation is cited "selon", never as a single verdict.'),
  ctl('Se corriger', 'Pour éviter le réflexe, la bonne méthode est de...', ['chercher la famille entière avant d’écrire', 'écrire vite et corriger plus tard'], 0,
    'La famille entière révèle le mot que le réflexe aurait raté. EN: the whole family reveals the word the reflex would have missed.'),
], ['reflexe']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Le réflexe du mot anglais',
    opener: {
      line: "Six mots qui ressemblent à l’anglais, et qui ratent presque chaque fois le registre voulu : ici tu apprends à t’en méfier. EN: Six words that look English, and almost every time miss the wanted register: here you learn to be wary of them.",
      imageRef: 'lessons/c2-01-precision-nuance/act04.jpg',
    },
    sections: [],
    milestone: 'Tu repères le réflexe du mot anglais et tu le corriges par la famille entière du mot. EN: You can spot the English-cognate reflex and correct it with the word’s whole family.',
    estScreens: 26, restPoints: ['a4-piege'],
  },
  sections: [A4_DECK, A4_PIEGE, A4_USAGE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — CE QUE LE TEXTE LAISSE ENTENDRE
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a5-lecture', layer: 'core', questionsInModal: true,
  title: 'Trois messages, trois procédés', frSub: 'Ce qui est dit, et ce qui est visé',
  text: "« On a eu tout le loisir d’apprécier le nouveau délai. » Un collègue répond ainsi à un retard de livraison : il ne loue pas le délai, il s’en plaint froidement. Le même jour, un voisin affiche : « Les travaux seront, nous l’espérons, à peine perceptibles. » Personne n’y croit tout à fait, mais la formule reste poliment vague. Enfin, un client écrit : « Le service était... particulier. » Les points de suspension disent, sans l’écrire, qu’il n’a pas aimé.",
  glossary: [
    { word: 'à peine perceptibles', en: 'barely noticeable', note: 'Une litote : dire moins pour laisser entendre plus. EN: an understatement, saying less to suggest more.' },
  ],
  questions: [
    { q: "Devine le sens : « on a eu tout le loisir d’apprécier ». Que vise vraiment cette phrase.", a: "Le contraire de ce qu’elle affirme : le retard n’a pas du tout été apprécié." },
    { q: 'Quel procédé reconnais-tu dans la phrase du collègue.', a: "L’ironie : la phrase affirme quelque chose que le contexte contredit." },
    { q: 'Quel procédé reconnais-tu dans l’annonce du voisin.', a: "La litote : dire « à peine perceptibles » pour laisser entendre que ce sera plus gênant que ça." },
    { q: 'Que dit, sans l’écrire, le client qui laisse sa phrase en suspens.', a: 'Que le service était mauvais : « particulier » poli couvre un jugement négatif.' },
  ],
  audio: REC('rec-c2-01-trois-procedes'), say: REFRAME, terms: ['ironie', 'litote'],
};

const A5_ACQUIS: Sec<'examples'> = {
  type: 'examples', id: 'a5-acquis', layer: 'core', sheetId: 'sheet-implicite',
  title: 'Ce que tu sais déjà, en une phrase',
  examples: [
    { fr: C120_REFRAME, en: C120_REFRAME_EN, note: `${Cap(C120_REF)} : repérer l’ironie, le présupposé, l’omission, RECONNAÎTRE seulement` },
    { fr: "Cette leçon ne repère plus : elle lit le registre que le procédé porte, pour y répondre.", en: 'This lesson no longer only spots the device: it reads the register it carries, in order to reply.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['ironie'],
};

const A5_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-implicite',
  title: 'Trois procédés, un seul test', frSub: 'L’indice, jamais l’invention',
  hint: 'Trois cartes. Chaque procédé se prouve par un mot du texte.',
  audio: REC('rec-c2-01-trois-cartes'), say: REFRAME, terms: ['ironie', 'litote'],
  cards: [
    { head: "L’ironie", label: 'un indice qui contredit', fr: src(E(1496)).fr, sub: '[ohⁿ a ü lo-kah-ZYOHⁿ duh ruh-VWAR luh plah-NEENG]',
      body: "La phrase affirme une chance ; le contexte (un retard répété) dit l’inverse. Pas d’indice, pas d’ironie. EN: the line claims good luck; the context (a repeated delay) says the opposite. No cue, no irony." },
    { head: 'La litote', label: 'dire moins pour plus', fr: src(E(1498)).fr, sub: '[luh sehr-VEESS ay-teh par-tee-kü-LYEH]',
      body: "« Particulier », laissé en suspens, couvre un jugement négatif qu’il ne formule jamais. EN: \"particulier\", left hanging, covers a negative judgement it never states." },
    { head: 'Le présupposé', label: 'cité, jamais retesté', fr: src(E(1494)).fr, sub: '[ohⁿ a ahⁿ-KOR ü luh tahⁿ duh ruh-fehr luh plah-NEENG]',
      body: `« Encore » présuppose une répétition déjà survenue, comme ${C120_REF} te l’a montré. Ici, ce qui compte est le ton qu’il porte : l’agacement, pas la neutralité. EN: "encore" presupposes a repetition; here, what matters is the tone it carries.` },
  ],
};

const A5_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-groupe', layer: 'core', size: 'lg',
  title: 'Nomme le procédé, puis le registre', frSub: 'Quatre nouveaux messages',
  groups: [
    grp('L’ironie froide', [
      it(E(1500), 'a eu la bonté de nous écouter'),
    ], chk('« A eu la bonté de » sur un ton froid dit un vrai compliment, ou le signale comme un effort qui n’allait pas de soi.', ['un vrai compliment', 'un effort qui n’allait pas de soi'], 1,
      'Le ton froid retire le compliment pour ne garder que le constat d’un effort. EN: the cold tone removes the compliment, keeping only the note of an effort.')),
    grp('La litote qui isole un mérite', [
      it(E(1502), 'au moins le mérite d’être rapide'),
    ], chk('« Au moins le mérite d’être rapide » dit, sans l’écrire, que le reste...', ['a aussi été excellent', 'a déçu'], 1,
      '« Au moins » isole le seul point positif trouvé, ce qui laisse entendre que le reste n’a pas convaincu. EN: "au moins" isolates the one positive point found, implying the rest did not convince.')),
    ctl('Le présupposé qui agace', '« On a encore eu le temps de refaire le planning » : le ton dit...', ['la neutralité', 'l’agacement devant une répétition'], 1,
      '« Encore » présuppose une répétition, et le ton confirme l’agacement, pas l’indifférence. EN: "encore" presupposes a repetition, and the tone confirms irritation, not indifference.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['ironie', 'litote'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La règle commune', 'L’ironie, la litote et le présupposé se prouvent toujours par...', ['une intuition', 'un indice précis dans le texte'], 1,
    `Pas d’indice, pas de procédé : la règle que ${C120_REF} a déjà posée pour les textes. EN: no cue, no device.`),
  ctl('Ce qui est nouveau', 'Dans cette leçon, le but est de...', ['seulement repérer le procédé', 'lire le registre que le procédé porte, pour répondre'], 1,
    'Repérer suffisait avant ; ici, le registre porté guide la réponse qui vient après. EN: spotting was enough before; here the carried register guides the reply that follows.'),
  ctl('La litote du client', '« Le service était... particulier » laisse entendre un jugement...', ['positif', 'négatif, poliment couvert'], 1,
    'Les points de suspension et le mot vague couvrent un jugement négatif. EN: the ellipsis and the vague word cover a negative judgement.'),
], ['ironie', 'litote']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Ce que le texte laisse entendre',
    opener: {
      line: "Trois messages disent le contraire de ce qu’ils affirment, en disent moins qu’ils ne pensent, ou tiennent pour acquis ce qu’ils ne disent pas : ici tu réapprends à les lire, pour leur registre. EN: Three messages say the opposite of what they state, say less than they mean, or take for granted what they never say: here you read them again, this time for their register.",
      imageRef: 'lessons/c2-01-precision-nuance/act05.jpg',
    },
    sections: [],
    milestone: `Tu nommes l’ironie, la litote et le présupposé, et tu lis le registre que chacun porte, au-delà de ${C120_REF}. EN: You can name irony, understatement and presupposition, and read the register each carries, beyond what the lesson in C1 asked.`,
    estScreens: 27, restPoints: ['a5-deck'],
  },
  sections: [A5_LECTURE, A5_ACQUIS, A5_DECK, A5_GROUPE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LIRE SANS TROP LIRE
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a6-histoire', layer: 'core',
  title: 'Trois réponses à un même message', frSub: 'Une seule colle au registre',
  setting: "Un collègue écrit, après un retard répété : « On a eu tout le loisir d’apprécier le nouveau délai. »",
  bubbles: [
    { from: 'coach', fr: src(E(1490)).fr, en: src(E(1490)).en },
    { from: 'user', fr: src(E(1510)).fr, en: src(E(1510)).en, warn: 'Trop faible : esquive le problème sans le dire.' },
    { from: 'coach', fr: 'Cette réponse ne reconnaît rien.', en: 'This reply acknowledges nothing.' },
    { from: 'user', fr: src(E(1511)).fr, en: src(E(1511)).en, warn: 'Exacte : reconnaît l’agacement, propose une suite.' },
  ],
  closing: { fr: 'Trois réponses possibles, une seule qui règle le curseur au bon endroit.', en: 'Three possible replies, only one sets the dial in the right place.' },
  audio: REC('rec-c2-01-trois-reponses'), say: REFRAME, terms: ['tonjuste'],
};

const A6_TROP: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-trop', layer: 'core', size: 'lg',
  title: 'Trop faible, trop fort, exact', frSub: 'Trois messages, trois réponses chacun',
  groups: [
    grp('Le message de Camille', [
      free(src(E(1490)).fr, src(E(1490)).en, 'le message ironique'),
      it(E(1512), 'trop faible : esquive'),
      it(E(1513), 'trop forte : accuse'),
      it(E(1511), 'exacte : reconnaît et propose'),
    ], chk('Laquelle des trois réponses reconnaît le problème sans dramatiser ni minimiser.', ['la réponse qui esquive', 'la réponse qui accuse', 'la réponse qui reconnaît et propose'], 2,
      'La réponse exacte nomme le problème et propose une suite, sans gaieté forcée ni colère. EN: the exact reply names the problem and proposes next steps, with no forced cheer or anger.')),
    grp('Le message de la propriétaire', [
      free(src(E(1539)).fr, src(E(1539)).en, 'la litote de la propriétaire'),
      it(E(1541), 'trop faible'),
      it(E(1542), 'trop forte'),
      it(E(1540), 'exacte'),
    ], chk('La litote « à peine perceptibles » appelle une réponse qui...', ['l’accepte sans vérifier', 'demande des précisions concrètes'], 1,
      'La bonne réponse ne prend pas la litote au mot ni ne s’emporte : elle demande du concret. EN: the right reply neither takes the understatement at face value nor flares up: it asks for specifics.')),
    ctl('La règle', 'Une ironie froide appelle une réponse...', ['qui l’ignore poliment', 'qui reconnaît le problème calmement'], 1,
      'Une reconnaissance calme répond au ton réel du message, pas à sa surface. EN: a calm acknowledgement answers the message’s real tone, not its surface.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['tonjuste'],
};

const A6_SURSOUS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a6-sursous', layer: 'core', swipe: true, size: 'lg',
  title: 'Deux fautes inverses',
  errors: [
    { wrong: '« Service impeccable, comme toujours » après une plainte précédente : lu au premier degré, sans voir l’indice.', right: 'Le même message, lu avec l’indice (la plainte précédente) : une ironie probable, qui demande d’être vérifiée avant de répondre.',
      why: "Normal d’abord : sans connaître l’historique, la phrase semble neutre. Avec lui, l’indice change tout. EN: without the history, the line looks neutral; with it, the cue changes everything." },
    { wrong: '« Service impeccable » dans un courriel neutre, sans historique, lu comme une ironie cachée.', right: 'Le même message, sans aucun indice contraire, lu au premier degré, comme il se présente.',
      why: "Normal de chercher un double sens après la leçon : mais sans indice, c’est une invention, pas une lecture. EN: it is natural to look for a double meaning after this lesson, but without a cue, that is invention, not reading." },
    { wrong: 'Répondre à toute phrase polie par de la méfiance, au cas où elle cacherait une ironie.', right: 'Répondre à une phrase polie, sans indice contraire, par une réponse elle aussi simplement polie.',
      why: 'Normal de vouloir ne plus se faire piéger : mais la méfiance systématique est la sur-lecture, pas la prudence. EN: wanting to avoid being caught out again is natural, but constant suspicion is over-reading, not caution.' },
    { wrong: 'Répondre à une ironie évidente (« tout le loisir d’apprécier ») par une gratitude sincère.', right: 'Répondre à la même ironie par une reconnaissance calme du vrai problème.',
      why: "Normal de prendre une phrase positive pour un compliment : mais l’indice (le retard répété) la dément. EN: it is natural to take a positive-sounding line as a compliment, but the cue (the repeated delay) contradicts it." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['surlecture', 'souslecture'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a6-ecoute', layer: 'core', hideLines: true,
  title: 'Indice ou pas d’indice', frSub: 'Huit messages, un seul à lire au premier degré',
  lines: [ln(E(1490)), ln(E(1492)), ln(E(1494)), ln(E(1496)), ln(E(1498)), ln(E(1500)), ln(E(1502)), ln(E(1523))],
  questions: [
    { q: 'Les six premières phrases portent toutes un indice. Lequel.', opts: ['un mot ou un ton qui contredit le sens littéral', 'aucun indice particulier'], correct: 0,
      why: 'Chacune contient un mot ou un ton (encore, au moins, tout le loisir) qui contredit la lecture littérale. EN: each carries a word or tone that contradicts a literal reading.' },
    { q: 'La huitième phrase, « service impeccable », sans contexte donné ici, se lit...', opts: ['au premier degré, faute d’indice', 'comme une ironie certaine'], correct: 0,
      why: 'Sans indice fourni, il n’y a pas de base pour lire une ironie. EN: with no cue given, there is no basis to read irony.' },
  ],
  audio: REC('rec-c2-01-indices-ecoute'), say: REFRAME, terms: ['surlecture', 'souslecture'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La sur-lecture', 'Trouver une ironie dans chaque phrase neutre, sans indice, est...', ['de la prudence', 'une sur-lecture, le défaut inverse de ne rien voir'], 1,
    'Sans indice précis, une ironie trouvée est inventée, pas lue. EN: without a precise cue, a found irony is invented, not read.'),
  ctl('La sous-lecture', 'Répondre au premier degré à un message clairement chargé est...', ['prudent', 'une sous-lecture : l’indice est passé inaperçu'], 1,
    'L’indice était là ; la réponse l’a laissé passer. EN: the cue was there; the reply let it go by.'),
  ctl('Le bon réglage', 'Face à une litote comme « à peine perceptibles », la bonne réponse...', ['l’accepte sans vérifier', 'demande des précisions concrètes'], 1,
    'Demander du concret évite à la fois la sur-lecture et la sous-lecture. EN: asking for specifics avoids both over-reading and under-reading.'),
], ['surlecture', 'souslecture']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Lire sans trop lire',
    opener: {
      line: "Trois réponses à un même message chargé, et une seule règle le curseur au bon endroit : ici tu apprends à ne pas en inventer, ni à en manquer. EN: Three replies to one loaded message, and only one sets the dial in the right place: here you learn neither to invent one nor to miss it.",
      imageRef: 'lessons/c2-01-precision-nuance/act06.jpg',
    },
    sections: [],
    milestone: 'Tu distingues une ironie ou une litote réelle, prouvée par un indice, d’une ironie inventée ou manquée. EN: You can tell a real, cue-proven irony or understatement from one invented or missed.',
    estScreens: 28, restPoints: ['a6-trop', 'a6-sursous'],
  },
  sections: [A6_HISTOIRE, A6_TROP, A6_SURSOUS, A6_ECOUTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — RÉPONDRE DANS LE TON JUSTE
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a7-scenario', layer: 'core', title: 'Nadia et le restaurant',
  setting: "Nadia t’envoie un message après un repas au restaurant qu’elle avait choisi.",
  turns: [
    {
      ai: src(E(1535)).fr, en: src(E(1535)).en,
      user: src(E(1536)).fr, userEn: 'Oh no, really sorry, shall we pick somewhere else next time? (A calm acknowledgement, matching her irony.)',
      alts: [
        { fr: 'Ça devait pas être si grave, non.', en: 'It probably wasn’t that bad, right.' },
        { fr: 'Je comprends, on changera d’endroit la prochaine fois.', en: 'I understand, we’ll change venue next time.' },
      ],
    },
    {
      ai: 'Madame Oliveri a affiché : « Les travaux seront, nous l’espérons, à peine perceptibles. »', en: 'Mrs. Oliveri posted: "The work will, we hope, be barely noticeable."',
      user: src(E(1540)).fr, userEn: 'Thank you for letting us know; could you specify the exact hours? (Asking for the concrete detail the litote omits.)',
      alts: [
        { fr: 'Merci, j’ai bien pris note de l’information.', en: 'Thank you, I have duly noted the information.' },
        { fr: 'Pourriez-vous préciser les heures exactes du chantier.', en: 'Could you specify the exact hours of the work.' },
      ],
    },
    {
      ai: 'Hugo a écrit dans sa chronique : « Le service, disons, prenait son temps. »', en: "Hugo wrote in his column: \"The service, let’s say, was taking its time.\"",
      user: src(E(1544)).fr, userEn: 'A muted reproach calls for a reply that names the problem without dramatising or minimising.',
      alts: [
        { fr: 'Nommer le problème sans dramatiser ni minimiser, voilà ce que sa litote appelle.', en: 'Naming the problem without dramatising or minimising is what his understatement calls for.' },
        { fr: 'Sa litote dit un vrai retard de service, poliment couvert.', en: 'His understatement names a real service delay, politely covered.' },
      ],
    },
    {
      ai: 'Le club de lecture a décidé, « comme toujours », de reporter le roman de Thibault.', en: 'The book club decided, "as always", to postpone Thibault’s novel.',
      user: src(E(1546)).fr, userEn: "I note this is the third time; let’s propose a fixed rotation. (The presupposed repetition, answered concretely.)",
      alts: [
        { fr: 'Puisque ça se reproduit, proposons un tour fixe pour chaque roman.', en: 'Since this keeps happening, let’s propose a fixed turn for each novel.' },
        { fr: 'Je remarque que c’est la troisième fois ; réglons ça ensemble.', en: 'I notice this is the third time; let’s sort it out together.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['tonjuste'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a7-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre réponses mal réglées',
  errors: [
    { wrong: src(E(1537)).fr, right: src(E(1536)).fr,
      why: "Normal de vouloir rassurer vite : mais minimiser laisse croire que le problème n’existait pas. EN: wanting to reassure quickly is natural, but minimising suggests the problem never existed." },
    { wrong: src(E(1538)).fr, right: src(E(1536)).fr,
      why: "Normal de prendre parti pour une amie : mais dramatiser un repas raté en dénonciation publique dépasse largement le problème réel. EN: taking a friend’s side is natural, but turning a bad meal into a public callout far exceeds the real problem." },
    { wrong: src(E(1541)).fr, right: src(E(1540)).fr,
      why: "Normal de ne pas vouloir déranger la propriétaire : mais accepter une litote sans précision laisse le vrai problème (les horaires) sans réponse. EN: not wanting to bother the landlady is natural, but accepting an understatement without detail leaves the real problem (the hours) unanswered." },
    { wrong: src(E(1542)).fr, right: src(E(1540)).fr,
      why: "Normal d’être agacé par le bruit annoncé : mais exiger un geste commercial avant même le début des travaux dramatise une annonce encore polie. EN: being annoyed by the announced noise is natural, but demanding compensation before the work even starts overreacts to a still-polite notice." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['tonjuste'],
};

const A7_ANALYSE = pourTaReponse('a7-analyse', 'Deux messages de plus, une réponse chacun', [
  grp('Le club de lecture', [
    it(E(1545), 'comme toujours, la présupposition'),
    it(E(1547), 'trop faible'),
    it(E(1548), 'trop forte'),
    it(E(1546), 'exacte'),
  ], chk('La réponse exacte au message du club de lecture...', ['ignore la répétition', 'nomme la répétition et propose une solution concrète'], 1,
    'Nommer « la troisième fois » et proposer un tour fixe règle le problème sans dramatiser. EN: naming "the third time" and proposing a fixed rotation solves the problem without drama.')),
  grp('La chronique de Hugo', [
    it(E(1543), 'disons, la litote'),
    it(E(1544), 'la règle du reproche feutré'),
  ], chk('Face à un reproche feutré comme celui de Hugo, la bonne réponse...', ['nie qu’il y ait eu un problème', 'nomme le problème sans dramatiser ni minimiser'], 1,
    'Un reproche feutré appelle une réponse qui le reconnaît exactement à sa mesure. EN: a muted reproach calls for a reply that acknowledges it at exactly its own scale.')),
], ['tonjuste']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La réponse exacte', 'Une réponse qui colle au ton d’un message ironique ou en litote...', ['minimise toujours le problème', 'le reconnaît sans dramatiser ni minimiser'], 1,
    'Ni gaieté forcée, ni colère : une reconnaissance calme et une suite concrète. EN: no forced cheer, no anger: a calm acknowledgement and a concrete next step.'),
  ctl('Le présupposé répété', '« Comme toujours » dans un message appelle une réponse qui...', ['ignore la répétition', 'la nomme et propose une solution'], 1,
    'Nommer la répétition règle ce que l’ironie ou la litote s’étaient contentées de signaler. EN: naming the repetition addresses what the irony or understatement only signalled.'),
  ctl('La litote de la propriétaire', 'Face à « à peine perceptibles », demander les heures exactes est...', ['une méfiance excessive', 'la bonne manière de combler ce que la litote omet'], 1,
    'La litote omet le détail concret ; le demander n’est pas de la méfiance. EN: the understatement omits the concrete detail; asking for it is not suspicion.'),
], ['tonjuste']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Répondre dans le ton juste',
    opener: {
      line: "Quatre messages chargés, et pour chacun une réponse qui colle exactement, ni trop froide ni trop vive : ici tu t’entraînes à les écrire. EN: Four loaded messages, and for each a reply that fits exactly, neither too cold nor too sharp: here you practise writing them.",
      imageRef: 'lessons/c2-01-precision-nuance/act07.jpg',
    },
    sections: [],
    milestone: 'Tu rédiges une réponse qui reconnaît un message ironique ou en litote, sans le minimiser ni le dramatiser. EN: You can write a reply that acknowledges an ironic or understated message, without minimising or dramatising it.',
    estScreens: 27, restPoints: ['a7-scenario'],
  },
  sections: [A7_SCENARIO, A7_ERREURS, A7_ANALYSE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — TA RÉPONSE
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_MODELE: Sec<'reading'> = {
  type: 'reading', id: 'a8-modele', layer: 'core', questionsInModal: true,
  title: 'Le message de Camille', frSub: 'Lis-le comme tu liras le tien',
  text: MESSAGE_CAMILLE,
  glossary: [
    { word: "ses raisons", en: 'its reasons', note: 'Les motifs du retard, jamais expliqués dans le message. EN: the reasons for the delay, never explained in the message.' },
  ],
  questions: [
    { q: "Devine le sens : « ça va nous donner l’occasion de revoir le planning ». Une vraie chance, ou autre chose.", a: "Autre chose : une ironie. Refaire le planning n’est pas une occasion, c’est un contretemps de plus." },
    { q: 'Quel mot présuppose que ce genre de retard s’est déjà produit.', a: '« Comme d’habitude » présuppose une répétition.' },
    { q: 'Que révèle la dernière phrase du message.', a: 'Un espoir prudent, pas une colère ouverte : Camille garde un ton professionnel malgré l’agacement.' },
  ],
  audio: REC('rec-c2-01-message-camille'), say: REFRAME, terms: ['ironie', 'tonjuste'],
};

const A8_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a8-plan', layer: 'core', sheetId: 'sheet-ton',
  title: 'Quatre étapes pour ta réponse',
  steps: [
    '1. Nomme ce que le message implique : l’ironie, la litote ou le présupposé, avec le mot qui le porte. EN: name what the message implies, with the word that carries it.',
    '2. Dis le registre que ce message appelle : une reconnaissance calme, ni minimisée ni dramatisée. EN: state the register this message calls for.',
    '3. Choisis au moins deux mots précis, jamais le premier réflexe anglais venu. EN: choose at least two precise words, never the first English-cognate reflex.',
    '4. Termine par une suite concrète : ce que tu proposes, pas seulement ce que tu reconnais. EN: end with a concrete next step, not only an acknowledgement.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['tonjuste'],
};

const A8_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a8-usages', layer: 'core', title: 'Où tu répondras dans le ton juste',
  cases: [
    { situation: 'Un collègue répond avec une ironie froide', fr: src(E(1560)).fr, en: src(E(1560)).en },
    { situation: 'Un avis demande une litote vérifiée', fr: src(E(1511)).fr, en: src(E(1511)).en },
    { situation: 'Tu nommes une répétition présupposée', fr: src(E(1562)).fr, en: src(E(1562)).en },
    { situation: 'Tu conclus une réponse par une suite concrète', fr: src(E(1561)).fr, en: src(E(1561)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['tonjuste'],
};

const A8_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a8-scenario', layer: 'core', title: 'Tu réponds à Camille, à voix haute',
  setting: "Avant d’écrire ta réponse officielle, tu t’entraînes à voix haute avec Marc, qui joue Camille.",
  turns: [
    {
      ai: "On a eu tout le loisir d’apprécier le nouveau délai. Ça va nous donner l’occasion de revoir le planning, comme d’habitude.", en: "We had all the time in the world to enjoy the new deadline. It’ll give us the chance to redo the schedule, as usual.",
      user: src(E(1562)).fr, userEn: 'I acknowledge the schedule has been disrupted more than once this quarter. (The repetition, named without drama.)',
      alts: [
        { fr: src(E(1561)).fr, en: 'I take note of the delay and suggest a weekly check-in so this does not happen again.' },
        { fr: src(E(1560)).fr, en: 'We understand your irritation, and we commit to giving earlier notice next time.' },
      ],
    },
    {
      ai: "J’imagine que l’équipe technique a ses raisons, même si elle ne les a pas vraiment partagées cette fois.", en: "I imagine the technical team has its reasons, even if it did not really share them this time.",
      user: 'Je vais leur demander un résumé clair des causes, pour qu’on les ait tous les deux.', userEn: 'I will ask them for a clear summary of the causes, so we both have it. (A concrete next step, closing the loop.)',
      alts: [
        { fr: 'Je propose qu’on exige, ensemble, une explication écrite cette fois.', en: 'I suggest we jointly require a written explanation this time.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['tonjuste', 'ironie'],
};

/** THE GRADED TASK. A written reply to an original message, graded on
 *  reading the implicit register AND choosing precise near-synonyms in the
 *  reply (both halves of the lesson’s scope, C2-BUILD-LOG). */
const A8_MISSION: Sec<'task'> = {
  type: 'task', id: 'a8-mission', title: 'Réponds à Camille', frSub: 'Mission écrite',
  brief: `Camille, ta cheffe d’équipe à l’Atelier Verdier, t’a écrit après un retard de livraison répété. Lis son message et réponds-lui par courriel, dans le registre qu’il appelle, sans le minimiser ni le dramatiser. Voici son message. ${MESSAGE_CAMILLE}`,
  briefEn: "Camille, your team lead at the Atelier Verdier design studio, wrote to you after a repeated delivery delay. Read her message and reply by email, in the register it calls for, without minimising or dramatising it. Her message is printed above so you can write with it in front of you.",
  produce: "Écris une réponse de 150 à 250 mots : nomme ce que le message implique (l’ironie, le présupposé), reconnais le problème dans le registre exact, sans minimiser ni dramatiser, propose une suite concrète, et choisis au moins deux mots précis plutôt que leur premier réflexe anglais.",
  responseSpec: { kind: 'text', minWords: 150, maxWords: 250 },
  rubric: {
    criteria: [
      { key: 'implicite', label: "Ce que le message implique, nommé", maxPoints: 4, descriptors: [
        "4 : L’ironie (« tout le loisir d’apprécier ») et le présupposé (« comme d’habitude », une répétition) sont tous deux nommés, chacun avec le mot qui le porte.",
        "3 : Les deux sont là, mais l’un est vague ou donné sans le mot qui le porte.",
        "2 : Un seul des deux est nommé, ou le message est lu au premier degré.",
        "1 : Rien n’est nommé ; la réponse traite le message comme un énoncé neutre.",
      ] },
      { key: 'registre', label: 'Le registre de la reconnaissance', maxPoints: 4, descriptors: [
        "4 : La réponse reconnaît le problème calmement, sans minimiser (« ce n’est pas grave ») ni dramatiser (l’accusation, la colère ouverte) : le curseur est au bon endroit.",
        "3 : La reconnaissance est là, mais légèrement trop froide ou trop chaleureuse pour le contexte professionnel.",
        '2 : La réponse minimise clairement, ou hausse le ton plus que la situation ne le demande.',
        "1 : La réponse ignore le problème, ou devient hostile.",
      ] },
      { key: 'precision', label: 'Deux mots précis, pas le réflexe', maxPoints: 4, descriptors: [
        "4 : Au moins deux mots choisis pour leur registre exact (par exemple « je prends acte », « un point hebdomadaire », « je reconnais que »), aucun réflexe anglais mal réglé (frustré pour déçu, intéressant à plat, demander pour exiger).",
        "3 : Deux mots précis sont là, mais un réflexe non corrigé apparaît ailleurs dans le texte.",
        '2 : Un seul mot vraiment précis, le reste du vocabulaire reste plat ou générique.',
        "1 : Le texte s’appuie sur des réflexes anglais mal réglés sans aucun mot précisément choisi.",
      ] },
      { key: 'suite', label: 'Une suite concrète', maxPoints: 3, descriptors: [
        "3 : La réponse propose une suite précise et réalisable (un point hebdomadaire, un résumé des causes, un calendrier révisé).",
        '2 : Une suite est proposée, mais reste vague (« on va faire mieux »).',
        "1 : Aucune suite n’est proposée ; la réponse s’arrête à la reconnaissance du problème.",
      ] },
      { key: 'ton', label: 'Un ton professionnel, de bout en bout', maxPoints: 3, descriptors: [
        "3 : Le registre reste professionnel partout dans le texte, de la première à la dernière phrase, sans retomber dans le familier ni basculer dans l’excès formel.",
        '2 : Le registre varie une fois, sans casser le sens général.',
        "1 : Le registre change nettement en cours de texte (trop familier, ou soudainement très formel).",
      ] },
      { key: 'langue', label: 'Une langue soignée', maxPoints: 2, descriptors: [
        '2 : Peu ou pas d’erreurs, des phrases qui s’enchaînent.',
        "1 : Des erreurs fréquentes qui gênent la lecture, ou des phrases juxtaposées sans lien.",
      ] },
    ],
  },
  scaffold: [
    'Je comprends que…',
    'Je reconnais que…',
    'Je prends acte de…',
    'Je propose…',
    'D’ici [délai], je…',
    'Merci de ta franchise à ce sujet,',
  ],
  modelAnswer: "Bonjour Camille,\n\nJe comprends que ce nouveau délai arrive après plusieurs retards déjà, et je prends acte de l’agacement que cela représente pour toute l’équipe. Je reconnais que le planning du trimestre a été bousculé plus d’une fois, et je ne veux pas en faire porter le poids uniquement sur l’équipe technique sans qu’on en comprenne mieux les causes.\n\nJe propose deux choses : d’abord, que l’équipe technique nous envoie un résumé clair des raisons de ce retard, pour qu’on les ait toutes les deux ; ensuite, qu’on mette en place un point hebdomadaire jusqu’à la fin du trimestre, pour éviter que ce genre de surprise se reproduise sans qu’on l’ait vue venir.\n\nJe reste disponible dès cette semaine pour en discuter avec toi et avec l’équipe technique si c’est utile.\n\nÀ bientôt,",
  modelAnswerEn: "Hello Camille,\n\nI understand that this new delay comes after several delays already, and I take note of the irritation this represents for the whole team. I acknowledge that this quarter’s schedule has been disrupted more than once, and I do not want the technical team alone to carry the weight of it without us better understanding the causes.\n\nI propose two things: first, that the technical team send us a clear summary of the reasons for this delay, so we both have it; second, that we set up a weekly check-in until the end of the quarter, to avoid this kind of surprise happening again without us seeing it coming.\n\nI remain available this week to discuss it with you and with the technical team if that would help.\n\nTalk soon,",
  watchFor: [
    { pattern: "The message read at face value, as a neutral update with no irony or presupposition noticed.", criterion: 'implicite', feedback: "« Tout le loisir d’apprécier » n’est pas un compliment. Relis le ton, pas seulement le sens des mots.", ref: 'a8-modele' },
    { pattern: "Irony named, but no mention of what « comme d’habitude » presupposes.", criterion: 'implicite', feedback: "« Comme d’habitude » dit que ça s’est déjà produit. Nomme cette répétition.", ref: 'a5-deck' },
    { pattern: "The reply minimises the problem (« ce n’est pas grave », « pas de souci »).", criterion: 'registre', feedback: "Minimiser laisse croire que rien ne s’est passé. Reconnais le problème calmement.", ref: 'a6-trop' },
    { pattern: "The reply turns hostile or accusatory toward Camille or the technical team.", criterion: 'registre', feedback: "Le message de Camille reste professionnel malgré l’agacement ; ta réponse doit garder ce même registre.", ref: 'a7-erreurs' },
    { pattern: "Register-flattening reflex words used unexamined (frustré for a simple disappointment, intéressant with no real force, demander where the situation calls for exiger).", criterion: 'precision', feedback: 'Relis la famille du mot avant de l’utiliser : cherche-t-il vraiment le mot le plus précis, ou le premier qui ressemble à l’anglais.', ref: 'a4-piege' },
    { pattern: 'No concrete next step proposed, the reply stopping at acknowledgement alone.', criterion: 'suite', feedback: "Reconnaître ne suffit pas : propose une suite précise, un point, un résumé, un calendrier.", ref: 'a8-plan' },
    { pattern: 'The register shifts noticeably partway through (starts formal, drifts casual, or the reverse).', criterion: 'ton', feedback: 'Garde le même registre professionnel du début à la fin de ta réponse.', ref: 'a3-contexte1' },
  ],
  graderNotes: [
    'Word count: 150 to 250, with 10% tolerance (135 to 275) before length costs points. A greeting line does not count.',
    "The task marks the READING of Camille’s register and the PRECISION of the reply’s vocabulary, not whether the learner agrees that the delay was serious.",
    'Accept any correct naming of the irony with its cue ("tout le loisir d’apprécier", read against the repeated delay) and the presupposition with its trigger ("comme d’habitude").',
    "Accept any two precisely chosen near-synonyms that fit their context, even if they differ from the model (e.g. \"je constate\" instead of \"je prends acte\", as long as the register fits).",
    "Do not mark grammar beyond what interferes with comprehension; this task marks register and precision, not a grammar point (C2 has none, per C2-BUILD-PLAN.md).",
    'Feedback language: unsimplified C2 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['ironie', 'tonjuste'],
};

const A8_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a8-parler', layer: 'core', title: 'Dis ta réponse à voix haute', skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO, say: REFRAME, terms: ['tonjuste'],
};

const A8_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a8-cheat', layer: 'core', sheetId: 'sheet-ton',
  title: 'Tout le curseur sur un écran',
  rows: [
    { k: 'connotation', v: 'ce qu’un mot suggère, au-delà du sens', say: src(E(1401)).fr,
      detail: { title: 'Déçu, pas frustré', body: 'Le même fait, deux couleurs très différentes. EN: the same fact, two very different colours.', say: src(E(1466)).fr } },
    { k: 'registre', v: 'familier, courant, soigné, littéraire', say: src(E(1432)).fr,
      detail: { title: 'Le même fait, quatre hauteurs', body: 'Le bon registre est celui que la situation demande. EN: the right register is the one the situation calls for.', say: src(E(1435)).fr } },
    { k: 'le réflexe', v: 'frustré, intéressant, demander, réaliser, ignorer, charmant', say: src(E(1470)).fr,
      detail: { title: 'Pas faux, mal réglé', body: 'Chercher la famille entière avant d’écrire. EN: check the whole family before writing.', say: src(E(1473)).fr } },
    { k: 'ironie et litote', v: 'un indice, jamais une invention', say: src(E(1496)).fr,
      detail: { title: 'Pas d’indice, pas de procédé', body: `La règle de ${C120_REF}, lue ici pour le registre qu’elle porte. EN: the rule from the C1 lesson, read here for the register it carries.`, say: src(E(1502)).fr } },
    { k: 'le ton juste', v: 'ni minimiser, ni dramatiser', say: src(E(1511)).fr,
      detail: { title: 'Reconnaître, puis proposer', body: 'Une reconnaissance calme, suivie d’une suite concrète. EN: a calm acknowledgement, followed by a concrete next step.', say: src(E(1518)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['connotation', 'reflexe', 'tonjuste'],
};

const A8_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a8-progress', layer: 'core', title: 'Où tu en es',
  body: "Tu choisis maintenant, parmi plusieurs vrais synonymes, celui que la situation demande, et tu repères le réflexe du mot qui ressemble à l’anglais avant qu’il ne te trompe. Tu lis une ironie, une litote ou un présupposé pour le registre qu’il porte, sans en inventer ni en manquer, et tu réponds dans ce registre, en évitant à la fois la froideur et l’excès. Le piège qui reste est le même que partout ailleurs dans cette leçon : chercher l’indice avant de régler le ton, jamais l’inverse. Avant l’examen, prends un message réel que tu as reçu cette semaine, nomme ce qu’il implique, puis écris la réponse que tu n’as peut-être pas encore envoyée. EN: Before any exam, take a real message you received this week, name what it implies, then write the reply you may not have sent yet.",
  stats: [
    { k: 'Le mot choisi', v: 'registre, intensité, couleur morale' },
    { k: 'Le réflexe évité', v: 'la famille entière, pas le premier mot' },
    { k: 'Ce que le texte implique', v: 'un indice, jamais une invention' },
    { k: 'Ta réponse', v: 'reconnaître, régler le ton, proposer' },
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
  ({ format: 'errorSpot', q: 'Un mot trahit le registre voulu. Écris la phrase avec le bon mot. EN: One word betrays the wanted register; write the sentence with the right word.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A8_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a8-quiz', layer: 'core', title: 'Le bilan', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-connotation', label: 'Connotation et registre', targets: ['connotation-ignoree'],
      questions: [
        mc('« Déçu » et « frustré » parlent tous deux d’une attente non comblée. Ce qui les distingue...', ['rien, ils sont interchangeables', 'la connotation : l’un accuse, l’autre non', 'une simple erreur de frappe'], 1, 'La connotation est ce que le mot suggère au-delà de sa définition. EN: connotation is what the word suggests beyond its definition.', 'a1-check'),
        mc('« Laisser tomber », « abandonner », « renoncer à » disent...', ['trois faits différents', 'le même fait, à trois hauteurs de registre', 'une erreur de traduction'], 1, 'Le fait est identique ; seul le registre change. EN: the fact is identical; only the register changes.', 'a2-table'),
        mc('Entre « inquiète » et « angoissée », le mot qui dit la détresse la plus forte est...', ['inquiète', 'angoissée'], 1, 'Angoissée pousse beaucoup plus loin que inquiète. EN: angoissée goes much further than inquiète.', 'a2-groupe'),
        mc('Blâmer, par rapport à critiquer, ajoute...', ['rien de plus', 'une faute morale'], 1, 'Blâmer juge moralement ce que critiquer se contente de contester. EN: blâmer passes moral judgement.', 'a2-groupe'),
        tI('Complète. Un mot.', 'Entre demander et exiger, le mot qui affirme un droit sans place pour le refus est ... .', 'exiger', 'Exiger s’appuie sur un droit reconnu. EN: exiger claims a right.', 'a2-table'),
        tI('Complète. Un mot.', 'Pour une attente non comblée, sans accuser personne, le mot le plus exact est ... .', 'déçu', 'Déçu ne blâme personne ; il nomme une attente. EN: déçu does not blame; it names an expectation.', 'a1-check', ['decu']),
        eS('Pour un comité officiel, il écrit : « c’est pas mal, votre travail. »', 'Pour un comité officiel, il écrit : « votre travail est remarquable. »', 'Le registre soigné convient à un comité officiel. EN: the careful register suits a formal committee.', 'a2-table', ['Pour un comité officiel, il écrit : « votre travail est bon. »']),
        lC('Écoute. Ce mot appartient-il au registre familier ou soigné.', src(E(1432)).fr, ['familier', 'soigné'], 1, 'Renoncer à marque un net registre soigné. EN: renoncer à clearly marks a careful register.', 'a2-table'),
      ],
    },
    {
      id: 'r2-contexte', label: 'Le mot exact selon le contexte', targets: ['registre-mal-adapte'],
      questions: [
        mc('Dans un texto à un ami, le mot le plus naturel pour dire qu’on est content est...', ['content', 'comblé', 'blâmé'], 0, 'Comblé est trop fort et trop soigné pour un texto entre amis. EN: comblé is too strong for a text to a friend.', 'a3-contexte1'),
        mc('Dans une lettre officielle d’acceptation, le mot attendu est plutôt...', ['content', 'ravi', 'aux anges'], 1, 'Ravi marque le registre soigné qu’une lettre officielle demande. EN: ravi marks the careful register a formal letter calls for.', 'a3-contexte1'),
        mc('Pour faire respecter un règlement, le mot qui protège vraiment un droit est...', ['suggère', 'exige'], 1, 'Exiger s’appuie sur le règlement. EN: exiger rests on the by-law.', 'a3-contexte2'),
        mc('Pour un message formel à l’intention d’un jury, le mot attendu est...', ['stressée', 'anxieuse'], 1, 'Anxieuse porte le registre soutenu que stressée, familier, n’a pas. EN: anxieuse carries the formal register stressée lacks.', 'a3-contexte2'),
        tI('Complète. Un mot.', 'Dans un texte littéraire, un narrateur peut se dire ... par une existence frugale, un mot trop fort pour la conversation.', 'comblé', 'Un texte littéraire peut porter un mot que la conversation évite. EN: a literary text can carry a word everyday speech avoids.', 'a3-contexte1'),
        tI('Complète. Un mot.', 'Entre critiquer et blâmer, le mot qui ajoute une faute morale est ... .', 'blâmer', 'Blâmer juge moralement. EN: blâmer passes moral judgement.', 'a2-groupe'),
        eS('Au jury, Sana écrit qu’elle est un peu stressée pour l’entrevue.', 'Au jury, Sana écrit qu’elle est légitimement anxieuse à l’approche de l’entrevue.', 'Anxieuse porte le registre soutenu attendu devant un jury. EN: anxieuse carries the formal register a jury expects.', 'a3-contexte2', ['Au jury, Sana écrit qu’elle est inquiète pour l’entrevue.']),
        lC('Écoute. Cette phrase est-elle au registre familier ou soigné.', src(E(1448)).fr, ['familier', 'soigné'], 1, '« Je vous invite à reconsidérer » marque un net registre soigné. EN: it clearly marks a careful register.', 'a3-ecoute'),
      ],
    },
    {
      id: 'r3-reflexe', label: 'Le réflexe du mot anglais', targets: ['mot-par-reflexe'],
      questions: [
        mc('Pour une déception ordinaire, le mot qui colle, sans le froid clinique, est...', ['frustré', 'déçu', 'intéressant'], 1, 'Déçu correspond à une déception ordinaire. EN: déçu fits an ordinary disappointment.', 'a4-deck'),
        mc('« C’est intéressant » dit parfois poliment...', ['un vrai enthousiasme', 'je ne sais pas trop quoi en penser', 'une vraie colère'], 1, 'C’est un refus poli déguisé en neutralité. EN: it is a polite brush-off disguised as neutrality.', 'a4-deck'),
        mc('Pour affirmer un droit, sans place pour le refus, le mot est...', ['demander', 'exiger'], 1, 'Exiger affirme un droit ; demander reste une requête. EN: exiger claims a right; demander stays a request.', 'a4-piege'),
        mc('« Réaliser » pour « comprendre » est, selon l’Académie française...', ['parfaitement correct, sans débat', 'contesté, bien que Le Robert l’enregistre dans l’usage'], 1, 'Un appel contesté se cite selon chaque source, jamais comme un verdict unique. EN: a contested call is cited per each source, never as a single verdict.', 'a4-usage'),
        tI('Complète. Un mot.', 'Pour un vrai enthousiasme, mieux vaut dire ... que « intéressant », trop plat.', 'passionnant', 'Passionnant porte le vrai enthousiasme. EN: passionnant carries the real enthusiasm.', 'a4-deck'),
        tI('Complète. Deux mots.', 'À l’écrit soigné, le tour le plus sûr pour « ignorer un avis » est « ... ... » de cet avis.', 'ne pas tenir compte', 'C’est le tour que l’Académie recommande. EN: this is the phrasing the Académie recommends.', 'a4-usage', ['ne tenir pas compte', 'ne pas tenir-compte']),
        eS('Elle a écrit qu’elle était très frustrée que la réunion soit annulée, sans raison donnée.', 'Elle a écrit qu’elle était très déçue que la réunion soit annulée, sans raison donnée.', 'Déçue correspond à une déception ordinaire, pas au vocabulaire clinique de frustrée. EN: déçue fits an ordinary disappointment, not frustrée’s clinical vocabulary.', 'a4-piege', ['Elle a écrit qu’elle était très vexée que la réunion soit annulée, sans raison donnée.']),
        lC('Écoute. Ce mot ressemble-t-il à l’anglais, ou est-il le mot bien réglé.', src(E(1475)).fr, ['il ressemble à l’anglais', 'c’est le mot bien réglé'], 1, 'Se rendre compte de évite le débat autour de réaliser. EN: se rendre compte de avoids the debate around réaliser.', 'a4-piege'),
      ],
    },
    {
      id: 'r4-ironie', label: 'L’ironie et le présupposé', targets: ['ironie-manquee'],
      questions: [
        mc('« On a eu tout le loisir d’apprécier le nouveau délai » dit...', ['une vraie chance', 'le contraire, froidement', 'une simple litote'], 1, 'L’ironie affirme quelque chose que le contexte contredit. EN: irony states something the context contradicts.', 'a5-lecture'),
        mc('« On a encore eu le temps de refaire le planning » présuppose...', ['que c’est la première fois', 'qu’une répétition s’est déjà produite'], 1, '« Encore » présuppose une répétition déjà survenue. EN: "encore" presupposes a repetition that already happened.', 'a5-deck'),
        mc('« A eu la bonté de nous écouter », sur un ton froid, signale...', ['un vrai compliment', 'un effort qui n’allait pas de soi', 'une insulte directe'], 1, 'Le ton froid retire le compliment. EN: the cold tone removes the compliment.', 'a5-groupe'),
        mc(`Repérer l’ironie, le présupposé et l’omission dans un texte est la compétence de...`, [`${C120_REF}, recognition seulement`, 'cette leçon uniquement'], 0, `${Cap(C120_REF)} enseigne la reconnaissance ; cette leçon construit sur elle, sans la répéter. EN: the C1 lesson teaches recognition; this one builds on it.`, 'a5-acquis'),
        tI('Complète. Un mot.', 'Une phrase ironique affirme quelque chose que le ... contredit.', 'contexte', 'Sans contexte contradictoire, pas d’ironie. EN: without a contradicting context, there is no irony.', 'a5-lecture'),
        tI('Complète. Un mot.', '« On a ... eu le temps de refaire le planning » présuppose une répétition.', 'encore', '« Encore » est le déclencheur du présupposé ici. EN: "encore" is the presupposition trigger here.', 'a5-deck'),
        eS('« Au moins le mérite d’être rapide » dit, sans l’écrire, que le reste a été excellent.', '« Au moins le mérite d’être rapide » dit, sans l’écrire, que le reste a déçu.', '« Au moins » isole le seul point positif trouvé. EN: "au moins" isolates the one positive point found.', 'a5-groupe', []),
        lC('Écoute. Cette phrase est-elle ironique ou neutre, selon l’indice donné.', src(E(1500)).fr, ['ironique', 'neutre'], 0, 'Le ton froid sur « a eu la bonté de » signale l’ironie. EN: the cold tone on "a eu la bonté de" signals irony.', 'a5-groupe'),
      ],
    },
    {
      id: 'r5-litote', label: 'La litote', targets: ['litote-prise-au-mot'],
      questions: [
        mc('« Le service était... particulier » laisse entendre un jugement...', ['positif', 'négatif, poliment couvert', 'neutre, sans jugement'], 1, 'Les points de suspension couvrent un jugement négatif. EN: the ellipsis covers a negative judgement.', 'a5-lecture'),
        mc('Une litote dit...', ['plus que ce qui est pensé', 'moins, pour faire entendre plus', 'exactement ce qui est pensé'], 1, 'La litote dit moins pour faire entendre plus. EN: understatement says less to suggest more.', 'a5-deck'),
        mc('« Les travaux seront, nous l’espérons, à peine perceptibles » est...', ['une promesse ferme', 'une litote, poliment vague'], 1, 'La formule reste vague à dessein. EN: the phrasing stays deliberately vague.', 'a6-trop'),
        mc('Face à une litote comme celle-ci, la bonne réponse...', ['l’accepte sans vérifier', 'demande des précisions concrètes'], 1, 'Demander du concret comble ce que la litote omet. EN: asking for specifics fills what the understatement omits.', 'a6-trop'),
        tI('Complète. Un mot.', 'Dire moins pour faire entendre plus, c’est la ... .', 'litote', 'C’est le nom du procédé. EN: that is the device’s name.', 'a5-deck'),
        tI('Complète. Un mot.', '« ... le mérite d’être rapide » isole le seul point positif trouvé.', 'Au moins', 'C’est l’expression qui isole le mérite. EN: this is the phrase that isolates the merit.', 'a5-groupe', ['au moins']),
        eS('Face à « à peine perceptibles », la bonne réponse accepte l’annonce telle quelle, sans autre question.', 'Face à « à peine perceptibles », la bonne réponse demande les heures exactes du chantier.', 'La litote omet le détail concret ; le demander n’est pas de la méfiance. EN: the understatement omits the concrete detail; asking is not suspicion.', 'a7-erreurs', []),
        lC('Écoute. Cette phrase couvre-t-elle un jugement négatif, ou est-elle un simple constat.', src(E(1502)).fr, ['elle couvre un jugement négatif', 'simple constat'], 0, '« Au moins » signale que le reste a déçu. EN: "au moins" signals that the rest disappointed.', 'a5-groupe'),
      ],
    },
    {
      id: 'r6-lecture', label: 'Sur-lecture et sous-lecture', targets: ['sur-lecture'],
      questions: [
        mc('Trouver une ironie dans chaque phrase neutre, sans indice, est...', ['de la prudence', 'une sur-lecture', 'une simple litote'], 1, 'Sans indice précis, une ironie trouvée est inventée. EN: without a precise cue, a found irony is invented.', 'a6-sursous'),
        mc('Répondre au premier degré à un message clairement chargé est...', ['prudent', 'une sous-lecture', 'une forme d’ironie'], 1, 'L’indice était là ; la réponse l’a laissé passer. EN: the cue was there; the reply missed it.', 'a6-sursous'),
        mc('« Service impeccable, comme toujours » après une plainte précédente mérite...', ['d’être ignoré', 'd’être vérifié avant d’être lu au premier degré'], 1, 'L’historique change la lecture de la phrase. EN: the history changes how the line reads.', 'a6-sursous'),
        mc('« Service impeccable » dans un courriel neutre, sans historique, se lit...', ['comme une ironie cachée', 'au premier degré'], 1, 'Sans indice, il n’y a pas de base pour une ironie. EN: without a cue, there is no basis for irony.', 'a6-ecoute'),
        tI('Complète. Un mot.', 'Trouver une ironie partout, sans indice, est de la sur-... .', 'lecture', 'C’est le nom du défaut. EN: that is the name of the fault.', 'a6-sursous'),
        tI('Complète. Un mot.', 'Ne pas voir un indice pourtant présent est de la sous-... .', 'lecture', 'C’est le défaut inverse. EN: that is the opposite fault.', 'a6-sursous'),
        eS('Face à un message neutre, sans aucun indice contraire, il vaut mieux chercher un double sens caché.', 'Face à un message neutre, sans aucun indice contraire, il vaut mieux le lire au premier degré.', 'Sans indice, inventer un double sens est une sur-lecture. EN: without a cue, inventing a double meaning is over-reading.', 'a6-sursous', []),
        lC('Écoute. Cette phrase porte-t-elle un indice d’ironie, ou aucun.', src(E(1523)).fr, ['aucun indice', 'un indice clair'], 0, 'Sans historique donné, rien ne contredit le sens littéral. EN: with no history given, nothing contradicts the literal sense.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-reponse', label: 'Le ton juste de la réponse', targets: ['ton-mal-regle'],
      questions: [
        mc('Une réponse qui colle au ton d’un message ironique...', ['minimise toujours le problème', 'le reconnaît sans dramatiser ni minimiser', 'ignore complètement le message'], 1, 'Ni gaieté forcée, ni colère. EN: no forced cheer, no anger.', 'a6-trop'),
        mc('« Comme toujours » dans un message appelle une réponse qui...', ['ignore la répétition', 'la nomme et propose une solution'], 1, 'Nommer la répétition règle ce que l’ironie signalait. EN: naming the repetition addresses what the irony signalled.', 'a7-analyse'),
        mc('Face à un reproche feutré, la bonne réponse...', ['nie qu’il y ait eu un problème', 'le nomme sans dramatiser ni minimiser', 'exige des excuses immédiates'], 1, 'Un reproche feutré appelle une réponse à sa mesure exacte. EN: a muted reproach calls for a reply at exactly its own scale.', 'a7-erreurs'),
        mc('Pour Nadia et son restaurant, dénoncer l’établissement en ligne serait...', ['une réponse exacte', 'trop forte pour un repas simplement raté'], 1, 'Dramatiser un repas raté en dénonciation publique dépasse le problème réel. EN: turning a bad meal into a public callout overreacts.', 'a7-scenario'),
        tI('Complète. Un mot.', 'Pour prendre acte d’un problème sans l’accuser, on écrit « je ... que » suivi du fait.', 'reconnais', 'Reconnaître nomme le fait sans accuser. EN: reconnaître names the fact without blaming.', 'a7-analyse'),
        tI('Complète. Un mot.', 'Ta réponse doit se terminer par une suite ... , pas seulement une reconnaissance.', 'concrète', 'Reconnaître ne suffit pas sans une suite précise. EN: acknowledging alone is not enough without a concrete next step.', 'a8-plan'),
        eS('Pour répondre au message de Camille, il suffit d’écrire que tout va bien et qu’il ne faut pas s’inquiéter.', 'Pour répondre au message de Camille, il faut reconnaître le retard répété et proposer une suite concrète.', 'Minimiser laisse croire que rien ne s’est passé. EN: minimising suggests nothing happened.', 'a8-plan', []),
        lC('Écoute. Cette réponse est-elle trop faible, trop forte, ou exacte.', src(E(1518)).fr, ['trop faible', 'exacte', 'trop forte'], 1, 'Elle reconnaît l’agacement et informe, sans dramatiser. EN: it acknowledges the irritation and informs, without drama.', 'a6-trop'),
      ],
    },
    {
      id: 'r8-bilan', label: 'Le bilan de la mission', targets: ['analyse-incomplete'],
      questions: [
        mc('Le message de Camille combine...', ['seulement de la litote', 'une ironie et un présupposé', 'rien d’implicite du tout'], 1, 'Les deux procédés sont présents, ensemble. EN: both devices are present, together.', 'a8-modele'),
        mc('La mission écrite demande de...', ['résumer le message de Camille', 'nommer l’implicite et répondre dans le registre exact'], 1, 'Résumer ne suffit pas ; il faut nommer et répondre. EN: summarising is not enough; the task asks to name and reply.', 'a8-mission'),
        mc('Pour réussir la partie « précision » de la mission, il faut...', ['utiliser le plus de mots soutenus possible', 'choisir au moins deux mots précis, jamais le premier réflexe', 'traduire directement de l’anglais'], 1, 'Deux mots précis valent mieux qu’un vocabulaire soutenu mal choisi. EN: two precise words beat an overdressed vocabulary chosen at random.', 'a8-mission'),
        mc('Une réponse qui reste professionnelle du début à la fin, sans retomber dans le familier, réussit le critère...', ['suite', 'ton'], 1, 'Le critère « ton » juge la constance du registre sur tout le texte. EN: the "ton" criterion judges register consistency across the whole text.', 'a8-mission'),
        tI('Complète. Un mot.', 'Avant de répondre à un message chargé, nomme le procédé, puis le ... qu’il porte.', 'registre', 'C’est l’étape 2 du plan. EN: that is step two of the plan.', 'a8-plan'),
        tI('Complète. Un mot.', 'Le curseur de chaque mot dit autant que ce qu’il ... .', 'signifie', 'C’est le reframe de la leçon. EN: that is the lesson’s reframe.', 'a8-progress'),
        eS('Une bonne réponse à Camille s’arrête après avoir reconnu le problème, sans rien proposer de plus.', 'Une bonne réponse à Camille propose, après l’avoir reconnu, une suite concrète au problème.', 'La suite concrète fait partie du critère « suite ». EN: the concrete next step is part of the "suite" criterion.', 'a8-plan', []),
        lC('Écoute. Cette phrase vient-elle du message de Camille, ou d’une réponse possible.', src(E(1556)).fr, ['du message de Camille', 'd’une réponse possible'], 0, 'Elle décrit ce que le message présuppose. EN: it describes what the message presupposes.', 'a8-modele'),
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
    { front: 'an unmet expectation, no blame', back: 'déçu', say: src(E(1401)).fr },
    { front: 'too clinical here', back: 'frustré', say: src(E(1466)).fr },
    { front: 'from familiar to littéraire', back: 'le registre', say: src(E(1432)).fr },
    { front: 'claims a right, no refusal', back: 'exiger', say: src(E(1428)).fr },
    { front: 'says the opposite, coldly', back: "l’ironie", say: src(E(1490)).fr },
    { front: 'says less to suggest more', back: 'la litote', say: src(E(1502)).fr },
    { front: 'a repetition already happened', back: 'le présupposé (encore)', say: src(E(1494)).fr },
    { front: 'neither minimised nor dramatised', back: 'le ton juste', say: src(E(1511)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A8_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a8-roundup', layer: 'core', title: "Précision, nuance et l’implicite, en résumé",
  body: `${REFRAME} Tu règles maintenant le curseur dans les deux sens : tu choisis le mot qu’une situation demande, et tu lis celui que quelqu’un d’autre a déjà réglé pour toi, afin d’y répondre dans le même registre, sans minimiser ni dramatiser. EN: You can now set the dial both ways: choosing the word a situation calls for, and reading the one someone else already set, in order to reply in that same register.`,
  points: [
    'La connotation sépare deux mots voisins ; le registre les classe de familier à littéraire.',
    'Le réflexe du mot anglais existe en français et rate quand même le registre voulu.',
    'Une ironie, une litote ou un présupposé se prouvent par un indice, jamais par une intuition.',
    'Une réponse exacte reconnaît le problème, règle son ton, choisit ses mots, puis propose une suite.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['connotation', 'tonjuste'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-connotation', title: 'Connotation, pas juste le sens', format: 'mcq' as const, coach: 'Pèse ce que le mot suggère, pas seulement ce qu’il signifie. EN: weigh what the word suggests, not only what it means.', q: '« Déçu » et « frustré » parlent d’une attente non comblée. Ce qui les distingue...', opts: ['rien', 'la connotation'], correct: 1, why: 'La connotation est ce supplément de sens. EN: connotation is that extra layer of meaning.', items: [E(1401), E(1402), E(1403), E(1404)], audio: AUDIO },
  { id: 'd-registre', title: 'Quatre hauteurs', format: 'sort' as const, coach: 'Classe chaque mot par registre : familier, courant, soigné. EN: sort each word by register.', buckets: ['familier', 'courant', 'soigné'], items: [E(1430), E(1431), E(1432), E(1433), E(1434), E(1435)], audio: AUDIO },
  { id: 'd-reflexe', title: 'Le mot bien réglé', format: 'mcq' as const, coach: 'Avant d’écrire, cherche si ce mot est un réflexe anglais mal réglé. EN: before writing, check whether this word is a mis-tuned English-cognate reflex.', q: 'Pour une déception ordinaire, le mot qui colle, sans le froid clinique, est...', opts: ['frustré', 'déçu'], correct: 1, why: 'Déçu colle à une déception ordinaire. EN: déçu fits an ordinary disappointment.', items: [E(1465), E(1466), E(1469), E(1470), E(1472), E(1473)], audio: AUDIO },
  { id: 'd-contestes', title: 'Selon l’Académie, selon Le Robert', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute, avec les deux verdicts. EN: say each line aloud, with both verdicts.', items: [E(1474), E(1475), E(1476), E(1477), E(1478), E(1479)], audio: AUDIO },
  { id: 'd-ironie', title: 'Un indice, jamais une invention', format: 'mcq' as const, coach: 'Cherche le mot qui contredit le sens littéral. EN: find the word that contradicts the literal sense.', q: '« On a eu tout le loisir d’apprécier le nouveau délai » dit...', opts: ['une vraie chance', 'le contraire, froidement'], correct: 1, why: 'L’ironie affirme ce que le contexte contredit. EN: irony states what the context contradicts.', items: [E(1490), E(1494), E(1496), E(1500)], audio: AUDIO },
  { id: 'd-litote', title: 'Dire moins pour plus', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : ce qu’elle dit, et ce qu’elle laisse entendre. EN: say each line aloud: what it states, and what it implies.', items: [E(1492), E(1498), E(1502)], audio: AUDIO },
  { id: 'd-lecture', title: 'Ni trop, ni trop peu', format: 'sort' as const, coach: 'Classe : un indice réel, ou pas d’indice. EN: sort: a real cue, or no cue.', buckets: ['un indice réel', 'pas d’indice'], items: [E(1522), E(1523), E(1490), E(1498)], audio: AUDIO },
  { id: 'd-ton', title: 'La réponse qui colle', format: 'mcq' as const, coach: 'Compare les trois réponses : laquelle reconnaît sans dramatiser ni minimiser. EN: compare the three replies: which one acknowledges without dramatising or minimising.', q: 'La bonne réponse à un message ironique...', opts: ['minimise toujours', 'reconnaît sans dramatiser ni minimiser'], correct: 1, why: 'Ni gaieté forcée, ni colère. EN: no forced cheer, no anger.', items: [E(1510), E(1511), E(1512), E(1513)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'connotation-ignoree', description: 'Treats near-synonyms sharing a dictionary sense as interchangeable, missing the connotation that separates them.', detectOn: ['a1-check', 'a2-table', 'a2-groupe', 'a8-mission'], drill: 'd-connotation', retest: 'd-connotation' },
  { id: 'registre-mal-adapte', description: 'Picks a word at the wrong register for its context (too familiar in a formal setting, or the reverse), rather than the one the context calls for.', detectOn: ['a3-contexte1', 'a3-contexte2', 'a3-check', 'a8-mission'], drill: 'd-registre', retest: 'd-registre' },
  { id: 'mot-par-reflexe', description: 'Reaches for the English-cognate word (frustré, intéressant, demander) by reflex, missing the register it actually carries in French.', detectOn: ['a4-deck', 'a4-piege', 'a4-check', 'a8-mission'], drill: 'd-reflexe', retest: 'd-reflexe' },
  { id: 'verdict-unique', description: 'States a contested usage call (réaliser, ignorer) as a single flat rule instead of citing each source.', detectOn: ['a4-usage', 'a4-check'], drill: 'd-contestes', retest: 'd-contestes' },
  { id: 'ironie-manquee', description: 'Reads an ironic or presupposing line at face value, missing the textual cue that contradicts it.', detectOn: ['a5-lecture', 'a5-groupe', 'a5-check', 'a8-mission'], drill: 'd-ironie', retest: 'd-ironie' },
  { id: 'litote-prise-au-mot', description: 'Takes an understatement at face value, missing what it leaves out.', detectOn: ['a5-deck', 'a5-groupe', 'a6-trop'], drill: 'd-litote', retest: 'd-litote' },
  { id: 'sur-lecture', description: 'Finds an ironic or loaded reading in a neutral line with no textual cue, or conversely misses a real cue (sous-lecture).', detectOn: ['a6-sursous', 'a6-ecoute', 'a6-check'], drill: 'd-lecture', retest: 'd-lecture' },
  { id: 'ton-mal-regle', description: 'Replies to an implicit line either minimising the problem or overreacting to it, instead of a calm, matched acknowledgement.', detectOn: ['a6-trop', 'a7-erreurs', 'a7-check', 'a8-mission'], drill: 'd-ton', retest: 'd-ton' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-nuances', 'Les familles de nuances', ['le registre', 'la force', 'cinq familles'], [
    teach('sheet-nuances-teach', 'Connotation, registre, intensité',
      `${C117_REF} t’a appris à peser la force et la couleur d’un synonyme. Cette leçon range cinq familles en échelles : familier, courant, soigné, littéraire pour le registre ; discret à intense pour la force. Le bon mot est celui que la situation demande, jamais le plus poli par défaut. EN: Register runs from familiar to literary, intensity from mild to strong; the right word is the one the situation calls for.`),
    table('sheet-nuances-registre', 'Le registre, une échelle', ['Familier', 'Courant', 'Soigné', 'Littéraire'], [
      ['laisser tomber', 'abandonner', 'renoncer à', '(contexte littéraire : une tournure encore plus marquée)'],
      ['c’est pas mal', 'c’est bon', 'c’est remarquable', 'non attesté dans cette famille'],
      ['taper sur', 'critiquer', 'blâmer / incriminer', 'non attesté dans cette famille'],
      ['stressée', 'inquiète', 'anxieuse / angoissée', 'non attesté dans cette famille'],
      ['aux anges', 'content / heureux', 'ravi', 'comblé'],
    ]),
    table('sheet-nuances-familles', 'Cinq familles complètes', ['Famille', 'Du plus faible au plus fort'], [
      ['le contentement', 'content · heureux · ravi · comblé · (aux anges, familier)'],
      ['le reproche', 'taper sur (familier) · critiquer · reprocher · blâmer · incriminer'],
      ['l’inquiétude', 'stressée (familier) · préoccupée · inquiète · anxieuse · angoissée'],
      ['la demande', 'suggérer · demander · réclamer · exiger · revendiquer'],
    ]),
  ]),
  sheet('sheet-reflexe', 'Le réflexe du mot anglais', ['six mots', 'les deux cas contestés'], [
    teach('sheet-reflexe-teach', 'Pas faux, juste mal réglé',
      "Frustré, intéressant, demander, réaliser, ignorer, charmant existent tous en français et ne sont pas des erreurs. Chacun est le premier mot qu’un anglophone atteint parce qu’il ressemble à son équivalent anglais, et chacun rate le registre voulu au moins une fois sur deux. Deux cas (réaliser, ignorer) sont contestés : cite toujours les deux verdicts, « selon l’Académie » et « selon Le Robert ». EN: Each word exists and is not wrong; each is the first reflex of an English speaker, and each misses the wanted register at least half the time.",
    ),
    table('sheet-reflexe-six', 'Les six traps', ['Réflexe', 'Ce qu’il rate', 'Mieux réglé'], [
      ['frustré', 'trop clinique pour une déception ordinaire', 'déçu, vexé, exaspéré selon la force'],
      ['intéressant', 'souvent un refus poli déguisé', 'passionnant, captivant pour un vrai enthousiasme'],
      ['demander', 'trop faible pour affirmer un droit', 'exiger, réclamer'],
      ['réaliser (comprendre)', 'contesté selon l’Académie ; Le Robert l’enregistre', 'se rendre compte de'],
      ['ignorer (ne pas tenir compte)', 'contesté de la même façon', 'ne pas tenir compte de'],
      ['charmant, à froid', 'signale souvent le contraire d’un compliment', 'nommer directement le problème'],
    ]),
  ]),
  sheet('sheet-implicite', 'Ce que le texte laisse entendre', ['l’ironie', 'la litote', 'le présupposé', 'ce que c1.20 possède déjà'], [
    teach('sheet-implicite-teach', 'Trois procédés, un seul test',
      `L’ironie, la litote et le présupposé se prouvent toujours par un indice précis dans le texte, jamais par une intuition. ${Cap(C120_REF)} t’a appris à les reconnaître ; cette leçon les lit pour le registre qu’ils portent, afin de préparer une réponse. EN: Irony, understatement and presupposition are always proved by a precise textual cue; this lesson reads them for the register they carry, to prepare a reply.`),
    table('sheet-implicite-procedes', 'Trois procédés', ['Procédé', 'Ce qu’il fait', 'Exemple'], [
      ['l’ironie', 'affirme le contraire de ce que le contexte montre', 'on a eu tout le loisir d’apprécier le délai'],
      ['la litote', 'dit moins pour faire entendre plus', 'à peine perceptibles / particulier...'],
      ['le présupposé', 'tient une répétition ou un fait pour acquis', 'comme d’habitude / encore'],
    ]),
  ]),
  sheet('sheet-ton', 'Répondre dans le ton juste', ['le plan de la réponse', 'trois réponses, laquelle'], [
    teach('sheet-ton-teach', 'Reconnaître, régler, proposer',
      'Une réponse exacte nomme ce que le message implique, règle son propre registre sur celui du message (ni minimiser, ni dramatiser), choisit des mots précis plutôt que le premier réflexe anglais, et propose une suite concrète. EN: An exact reply names what the message implies, sets its own register to match (neither minimising nor dramatising), chooses precise words over the first English-cognate reflex, and proposes a concrete next step.'),
    table('sheet-ton-plan', 'Le plan en quatre étapes', ['Étape', 'Formule'], [
      ['nommer l’implicite', 'Ce message laisse entendre que…'],
      ['régler le registre', 'Je comprends que… ; je reconnais que…'],
      ['choisir deux mots précis', 'je prends acte de… ; un point hebdomadaire'],
      ['proposer une suite', 'D’ici [délai], je…'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Ta réponse',
    opener: {
      line: "Le message de Camille combine l’ironie et le présupposé : ici tu lis les deux, puis tu écris la réponse qui les règle enfin. EN: Camille’s message combines irony and presupposition: here you read both, then write the reply that finally settles them.",
      imageRef: 'lessons/c2-01-precision-nuance/act08.jpg',
    },
    sections: [],
    milestone: 'Tu lis le registre qu’un message implique et tu y réponds avec des mots précis, un ton juste et une suite concrète. EN: You can read the register a message implies and reply with precise words, the right tone and a concrete next step.',
    estScreens: 44, restPoints: ['a8-scenario', 'a8-mission', 'a8-cheat', 'a8-quiz'],
  },
  sections: [A8_MODELE, A8_PLAN, A8_USAGES, A8_SCENARIO, A8_MISSION, A8_PARLER, A8_CHEAT, A8_PROGRESS, A8_QUIZ, A8_REVIEW, A8_ROUNDUP],
  imports: IMPORTED.act8,
};

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** MissionRich renders options in authored order, so every closed MISSION
 *  item is rotated here, options and `correct` together, so each
 *  option-count class spreads evenly and no slot repeats more than twice in
 *  a row. No text is changed and no `why` names a position. The quiz keeps
 *  its authored slots, scattered by hand (6.11). */
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c2-01-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c2-01-courriel': "Léa’s email (act 1), ONE VOICE, one take, a woman reading it the way she would reread her own writing: even, professional, no drama. « Déçu » and « frustré » at ordinary weight, no stress on either.",
  'rec-c2-01-famille-content': 'The five content-ladder cards (act 2), ONE VOICE, one take, read in strict ascending order, each at its own natural register (the familiar one lighter, the soutenu one more measured).',
  'rec-c2-01-deux-messages': "Léa’s two messages (act 3), ONE VOICE, one take: the text to Nadia casual and quick, the letter to Mr. Fortin slower and more careful, same reader, two clearly different registers.",
  'rec-c2-01-registres-ecoute': 'REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, in authored order, read plainly with no extra emphasis that would give the register away before the words do.',
  'rec-c2-01-reflexe': 'The three trap cards (act 4), ONE VOICE, one take, read plainly, with no ironic or corrective tone on the reflex word.',
  'rec-c2-01-piege-reflexe': 'The audio step plays each card’s CORRECT (well-tuned) sentence, not the reflex `promptSound`. Read the six plainly, identical pace, no stress on the fixed word.',
  'rec-c2-01-trois-procedes': 'The three-device reading (act 5), ONE VOICE, one take, a narrator explaining the devices in a measured, teacherly tone, with each quoted line read exactly as its speaker would have said it (flat for the ironic one, trailing off for the litote one).',
  'rec-c2-01-trois-cartes': 'The three device cards (act 5), ONE VOICE, one take, each quoted line read in character (cold for the irony, hesitant for the litote, plain for the presupposition).',
  'rec-c2-01-trois-reponses': 'The three-reply story (act 6), TWO VOICES: Camille’s line cold and even; the two user lines read neutrally, with no hint of which one is "right".',
  'rec-c2-01-indices-ecoute': 'REQUIRED FOR THE EAR MISSION (act 6): eight lines, ONE TAKE, ONE VOICE, in authored order, read at even conversational pace with no vocal cue beyond the words themselves.',
  'rec-c2-01-message-camille': "Camille’s full message (act 8), ONE VOICE, one take, a woman team lead writing a slightly weary but still professional email: even pace throughout, the faintest cool edge on « comme d’habitude », never a sigh or a laugh.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C2 · LEÇON 01',
  intro: "At C1 you learned to judge a text and to weigh a synonym’s force and colour. At C2 the two skills meet: choosing, among several real near-synonyms, the one word a context exactly calls for, and reading what a short message implies without stating it, so your reply can match the register it carries rather than flattening it or overreacting to it. This lesson builds both through eight acts, from a donor’s calm understatement to a colleague’s cold irony, and ends with a reply you write yourself.",
  skill: 'PE',
  grammarAssumed: ['c1.20', 'c1.06', 'c1.17', 'c1.19'],
  grammarIntroduced: [
    'Near-synonym families read as ladders of register (familier/courant/soigné/littéraire), intensity and moral colour, and chosen by context rather than by politeness alone',
    'The English-cognate reflex as a named fault: frustré, intéressant, demander, réaliser, ignorer, charmant, each real and each wrong for a specific, documented reason, two of them (réaliser, ignorer) contested between the Académie française and Le Robert and cited as such',
    "Irony, understatement (litote) and presupposition recapped past pure recognition, read for the register they carry rather than only their literal content",
    'Distinguishing a register-matched reply from one that minimises, dramatises, over-reads (finding a cue that is not there) or under-reads (missing one that is)',
    'Producing a reply that names what a message implies and answers it in the matching register, using precisely chosen vocabulary',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Au C1, tu as appris à juger un texte et à peser la force d’un synonyme. Au C2, les deux compétences se rejoignent : choisir, parmi plusieurs vrais synonymes, le mot qu’un contexte demande exactement, et lire ce qu’un message laisse entendre sans le dire, pour y répondre dans ce même registre. Cette leçon construit les deux en huit actes, d’une litote calme à une ironie froide, et se termine par une réponse que tu écris toi-même.",
    minutes: 150,
    difficulty: 5,
    glyph: 'curseur',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: PRECISION_NUANCE_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, MESSAGE_CAMILLE, MESSAGE_CAMILLE_EN, dicteeFor };
export const lessonWithoutTask = (): Lesson => LESSON;
