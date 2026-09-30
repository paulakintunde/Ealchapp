// b2.30.l1 « Lire un texte littéraire »: the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE: a TEXT
// and a MOVE per act) on top of B1-BUILD-PLAYBOOK.md, with the B2 rules of
// B2-BUILD-LOG.md. The first lesson of Unit 6 (culture, variation, nuance).
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around ONE ANCHOR TEXT (200 to 350
//   words, a literary page, labelled « texte original écrit pour la leçon »)
//   and ONE MOVE of literary reading, in the same beats:
//
//     1. MEET THE TEXT     a `reading`, questions behind `questionsInModal`,
//                          each LABELLED: « Devine le sens » first (as lesson
//                          37 in B1 taught), then « Question globale »,
//                          « Détail », « Inférence » and « Ton et position »,
//                          weighted to inference and stance. Glossary 0 to 2.
//     2. NOTICE THE MOVE   a `cardDeck`, `tapTable`, `examples` or `hacks`,
//                          linked to a sheet. Real quotations live here.
//     3. PRACTISE          one or two checks on NEW material (groupDrill,
//                          trapDrill, commonErrors, listening).
//     4. USE IT            « Pour ton commentaire », always the same
//                          groupDrill shape: a line of commentary built with
//                          this act's move against the line a reader without
//                          it would write.
//     5. IN A TEXT         from act 3 on, « Dans un texte »: a NEW paragraph
//                          of 60 to 120 words to analyse, answers behind the
//                          modal.
//
//   then the act check (control pages, gated). Act 1 is the problem scene;
//   act 12 is the production act (the task and the closing sections).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Qui raconte ?              6  a novel opening, an unreliable je
//                                     (scene) · narrator, not author
//    2  Le narrateur et l’auteur   6  a memoir near Namur · first and third
//                                     person, hero, witness, outside;
//                                     Flaubert's « nous »; autobiography
//    3  Par quels yeux             7  Aminata arrives in Dakar · internal,
//                                     external, zero focalisation (+ a
//                                     listening: one scene, three gazes)
//    4  Le temps du récit          7  Jeanne comes home to Gaspésie ·
//                                     foreground, background, analepse,
//                                     sommaire, ellipse, présent de narration
//    5  Les paroles et les pensées 7  Lise waits on Christmas Eve · direct,
//                                     indirect, style indirect libre
//    6  La tonalité                8  three missed trains · comique,
//                                     pathétique, dramatique, lyrique (+ the
//                                     required tone listening), ironique
//    7  Les images                 7  a storm at Ouchy · comparaison,
//                                     métaphore, personnification + effect;
//                                     Nelligan's ship
//    8  Décrire, faire un portrait 7  the ferryman · order, detail, function;
//                                     Zola's first sentence
//    9  Le début et la fin         7  Mme Kaboré and the baker · incipit (four
//                                     real ones), chute (two real ones)
//   10  Roman, nouvelle, théâtre   7  two sisters in Brussels, a scene ·
//                                     genres; réplique and didascalie
//   11  Écrire sur un texte        8  a trainee in Abidjan (DELF B2 style) ·
//                                     formulas, quoting briefly, the présent
//   12  Ton commentaire           11  Armand's last day · plan, role play,
//                                     TASK, practice, quiz, review
//
//   TOTAL 88 missions, 12 acts (6,6,7,7,7,8,7,7,7,7,8,11). Corpus: 177
//   authored rows (.1400-.1576) plus 24 reused seed rows. 12 anchor
//   readings, 9 « Dans un texte » paragraphs, 2 listenings. Quiz: 12 rounds
//   of 8 (one per act 2 to 11, a recycling round, a DELF B2 CE round).
//   Twelve error triggers, twelve drills, five sheets, eleven terms. Chapter
//   artwork: `lire-litterature-image-prompts.md`, twelve prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Qui parle, par quels yeux, avec quels mots : c’est ainsi qu’on lit un
//   texte littéraire. »
//   EN: Who speaks, through whose eyes, with which words: that is how you
//   read a literary text.
//
//   ONE METAPHOR, LA VOIX, LE REGARD, LA PLUME: every act answers one of the
//   three questions. It is NOT « what did the author feel » (acts 1 and 2),
//   and NOT « find the figures » (act 7 refuses a device without its
//   effect). Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    literary reading at B2: author vs narrator, narrateur personnage /
//           témoin / extérieur, focalisation interne / externe / zéro, the
//           plans applied to a page, analepse, ellipse, sommaire and scène,
//           the présent de narration, direct / indirect / indirect libre
//           (recognition), the tonalités and their means, comparaison,
//           métaphore, personnification with effect, description and
//           portrait, incipit and chute, the genres at recognition level
//           (réplique, didascalie), the language of commentary and brief
//           quotation, the written commentary.
//   QUOTES  the reframes of lessons 3, 19, 22 (row), 25 and 37 in B1 and 1,
//           8, 9, 12, 13 and 24 in B2, re-exported from their corpus files.
//   LEAVES  the passé simple and the literary subjunctive as FORMS (lessons
//           8 and 9 in B2: read here, never produced); stance and irony in
//           non-fiction (lesson 24 in B2); translation nuance to a later
//           lesson of this unit (named without a number in the roundup).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use what the situation needs. Natural B2
//   French; English on every learner string (`en`, or a final « EN: »),
//   never on an answer. Every `say` is French. Citations by trail position
//   in French, never a raw id (A1, A2 1-36, B1 1-39, B2 1-30 only). No
//   spaced « ? » or « ! » in a scene bubble. Typographic ’ everywhere
//   authored. Mission answer slots spread by `spreadMissions()` (options and
//   index rotated together, no text changed, no `why` names a position); the
//   quiz by `spreadSlots()`. Gate B2-2 spoken-variant decision: the spoken
//   « j’ai plus de batterie » in Mathieu's line is a character's direct
//   speech, named as familier, never offered as a model.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. REAL QUOTATIONS. Thirteen short public-domain lines (Flaubert x2,
//      Proust, Maupassant x2, Daudet x2, Zola, Nelligan x2, Hugo, Baudelaire,
//      Voltaire) are quoted word for word from memory, one sentence each:
//      all listed with sources in the corpus header §A.7. They need a check
//      against an edition before publish. Everything longer is original
//      and labelled so on screen.
//   2. `Lesson.skill` is 'CE' (the lesson remediates literary reading; b2.08
//      set 'CE' too), although the task is written. b2.24 stays the CE@b2
//      target in EXAM_PREP_TARGETS; nothing routes here. Agree?
//   3. The task text is printed twice (reading and brief): no `source` field
//      on `task`, as in b2.24 and b1.37.
//   4. Rubric: five criteria, 12 points (tâche 3, cohérence 3, étendue 2,
//      correction 2, registre 2), the B2 grid of lessons 16 and 19 in B2.
//   5. The DELF B2 CE round (r13) reuses the act 11 extract rather than
//      printing a new one in a question (the 45-word cap on a question).
//   6. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' is inert; kept.
//      The twelve openers need art (ART_PENDING until Paul's images land).

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap, type Quote,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE,
  RP, PR, PR_RULE, PORTRAIT_RULE, LECTURE_RULE, GER, ADJ,
  TEXTE_VOISIN, TEXTE_LAMBERT, TEXTE_AMINATA, TEXTE_JEANNE, TEXTE_LISE, TEXTE_TRAINS,
  TEXTE_ELISE, TEXTE_FORTIN, TEXTE_KABORE, TEXTE_SOEURS, TEXTE_STAGIAIRE, TEXTE_ARMAND,
  DANS_A3, DANS_A4, DANS_A5, DANS_A6, DANS_A7, DANS_A8, DANS_A9, DANS_A10, DANS_A11,
  Q_BOVARY, Q_COEUR, Q_PROUST, Q_PARURE_1, Q_PARURE_FIN, Q_SEGUIN_1, Q_SEGUIN_FIN,
  Q_GERMINAL, Q_NELLIGAN_1, Q_NELLIGAN_2, Q_HUGO, Q_BAUDELAIRE, Q_CANDIDE,
  B103_REFRAME, B103_REFRAME_EN, B119_REFRAME, B119_REFRAME_EN, B125_REFRAME, B125_REFRAME_EN,
  B137_REFRAME, B137_REFRAME_EN, B201_REFRAME, B201_REFRAME_EN, B208_REFRAME, B208_REFRAME_EN,
  B209_REFRAME, B209_REFRAME_EN, B212_REFRAME, B212_REFRAME_EN, B213_REFRAME, B213_REFRAME_EN,
  B224_REFRAME, B224_REFRAME_EN,
  PC_IMP_UNIT, DISCOURS_UNIT, LECTURE_B1_UNIT, PASSE_SIMPLE_UNIT, CRITIQUE_UNIT, PQP_UNIT,
  PC_IMP_REF, DISCOURS_REF, PORTRAIT_REF, REGISTRES_REF, LECTURE_B1_REF, PQP_REF,
  PASSE_SIMPLE_REF, SUBJ_LITT_REF, GERONDIF_REF, PARTICIPE_REF, CRITIQUE_REF,
} from './lire-litterature-corpus.ts';
import { LIRE_LITTERATURE_TERMS } from './lire-litterature-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };
type TrapCard = NonNullable<Sec<'trapDrill'>['cards']>[number];
type TrapStep = NonNullable<Sec<'trapDrill'>['steps']>[number];
type RQ = { q: string; a: string };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string; drills?: string[] };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));
const LIT = (n: number) => `fr.b2.litterature.${n}`;
const SC2 = (n: number) => `fr.b2.strategies-de-comprehension.${n}`;

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.30: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.30: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.30: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const free = (f: string, e: string, note?: string): GItem => ({ fr: f, en: e, ...(note ? { note } : {}) });
/** A real quotation as a groupDrill item: the source is the note. */
const qt = (q: Quote): GItem => ({ fr: q.fr, en: q.en, note: q.source });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** A trap card: the WRONG commentary in promptSound (never spoken), the
 *  row's correct French in fr. */
const trap = (id: string, promptLabel: string, promptSound: string, tip: string): TrapCard =>
  ({ promptLabel, promptSound, fr: fr(id), ipa: ipaOf(id), tip });

const STEPS = (ruleTitle: string, cardsTitle: string): TrapStep[] => [
  { label: 'La règle', kind: 'rule', title: ruleTitle },
  { label: 'Six cartes', kind: 'cards', title: cardsTitle },
  { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
  { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
];

/** MEET THE TEXT: the act's anchor reading. */
function lecture(
  id: string, title: string, frSub: string, text: string,
  glossary: { word: string; en: string; note?: string }[], questions: RQ[], rec: string, terms: string[],
): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true, title, frSub, text,
    ...(glossary.length ? { glossary } : {}), questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

/** USE IT: the act's one tool for the commentary. Always the same title. */
function pourTonCommentaire(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ton commentaire', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/** IN A TEXT: the 60 to 120 word paragraph that closes acts 3 to 11,
 *  answers behind the modal. Always the same title. */
function dansUnTexte(id: string, frSub: string, text: string, questions: RQ[], rec: string, terms: string[]): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true,
    title: 'Dans un texte', frSub, text, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: QUI RACONTE ?
 *
 *  The problem: at a book club, a learner who reads well (lesson 37 in B1)
 *  and judges articles (lesson 24 in B2) takes a first-person narrator's
 *  opinion for the author's. NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Le club de lecture', frSub: 'La voisine du troisième',
  setting: { place: 'Une bibliothèque de quartier, sur le Plateau', city: 'Montréal', time: 'jeudi, 19 h', ambience: 'un cercle de chaises, des tasses de thé, huit exemplaires du même roman' },
  beats: [
    { kind: 'narration', text: 'Jeudi soir, dans une bibliothèque du Plateau, à Montréal. Le club de lecture parle du roman du mois : un vieil homme raconte l’arrivée d’une nouvelle voisine. Tu l’as lu d’une traite.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Marie-Ève, l’animatrice', fr: 'Alors, parlons de la voisine du troisième.', en: 'So, let us talk about the neighbour on the third floor.', respell: '[a-LOR | par-lohⁿ duh la vwa-ZEEN | dü trwa-ZYEM]', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Rachid', fr: 'Franchement, le vieux monsieur a raison de se méfier d’elle.', en: 'Frankly, the old man is right not to trust her.', respell: '[frahⁿsh-MAHⁿ | luh vyeu muh-SYEU a ray-ZOHⁿ | duh suh may-fyay DEL]', stage: 'Il tient le livre ouvert à la première page, comme une preuve.', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'Marie-Ève se tourne vers toi. Tu dois dire qui porte ce jugement sur la voisine : le livre, ou la voix qui raconte.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Que réponds-tu à Rachid ?', size: 'lg',
      options: [
        { fr: fr(E(1400)), respell: rsOf(E(1400)), en: en(E(1400)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1401)), respell: rsOf(E(1401)), en: en(E(1401)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Marie-Ève sourit : « Exactement. Il dit que les autres ne l’intéressent pas, et il note l’heure des biscuits. » Rachid relit la première page, et il éclate de rire.',
        breaks: 'Marie-Ève lit à voix haute : « J’ai noté l’heure de sa visite dans le carnet : 16 h 05. » Puis elle demande : « Et c’est l’auteure qui fait ça ? » Tout le monde rit.',
      },
    },
    {
      kind: 'break', heading: 'Le je n’est pas l’auteure',
      body: `${Cap(LECTURE_B1_REF)} t’a appris le sens, ${CRITIQUE_REF} le jugement. Un roman ajoute un piège : la voix qui dit je est inventée, et elle peut se tromper. EN: The I of a novel is invented, and can be wrong.`,
      wrong: { fr: fr(E(1400)), ipa: ipaOf(E(1400)), respell: rsOf(E(1400)), en: en(E(1400)) },
      right: { fr: fr(E(1401)), ipa: ipaOf(E(1401)), respell: rsOf(E(1401)), en: en(E(1401)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Cette leçon t’apprend à lire une page littéraire : qui raconte, par quels yeux, avec quels mots, et quel effet cela produit. À la fin, tu écriras un commentaire de 200 à 250 mots sur un extrait.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['narrateur'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Dire qui parle et qui voit', s: 'Actes 2, 3 et 5 : le narrateur, la focalisation, les paroles' },
    { t: 'Lire comment le texte agit', s: 'Actes 4, 6 et 7 : le temps, la tonalité, les images' },
    { t: 'Reconnaître une page et un genre', s: 'Actes 8 à 10 : le portrait, le début et la fin, les genres' },
    { t: 'Écrire un commentaire', s: 'Actes 11 et 12 : les formules, les citations, ta mission' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE = lecture('a1-lecture', 'La première page du roman', 'Qui dit je, ici ?', TEXTE_VOISIN,
  [{ word: 'livreur', en: 'delivery man', note: 'La personne qui apporte les colis.' }],
  [
    { q: 'Devine le sens. « J’ai d’abord regardé par le judas. » Qu’est-ce qu’un judas, dans une porte ?', a: 'Le petit trou dans la porte, qui permet de voir qui est sur le palier sans ouvrir.' },
    { q: 'Question globale. Qui raconte, et de quoi parle cette première page ?', a: 'Un homme âgé qui vit seul raconte, à la première personne, l’arrivée d’une nouvelle voisine, qu’il surveille.' },
    { q: 'Détail. Où range-t-il son carnet, et qu’y note-t-il ?', a: 'Dans le tiroir de la cuisine. Il y note les visites, les heures, la musique, les poubelles.' },
    { q: 'Inférence. Il dit que les autres ne l’ont « jamais intéressé ». Le texte le confirme-t-il ?', a: 'Non : il note chaque visite à la minute près. Ses actes contredisent ses mots.' },
    { q: 'Inférence. « Au mien, on a des voisins. » Que révèle cette phrase ?', a: 'Sa solitude : personne ne vient le voir, et sa fille n’appelle que le dimanche, « quand elle y pense ».' },
    { q: 'Ton et position. Le texte veut-il qu’on partage son avis sur la voisine ? Comment le sais-tu ?', a: 'Non : la voisine apporte des biscuits pour le remercier. Le texte nous montre ce que le narrateur ne voit pas : un homme seul et soupçonneux.' },
  ], 'rec-b2-30-voisin', ['narrateur']);

const A1_VOIX: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-voix', layer: 'core', size: 'lg',
  title: 'Ce qu’il dit, ce qu’on voit', frSub: 'La voix du narrateur et le regard du lecteur',
  groups: [
    grp('Ce que dit le narrateur', [
      it(E(1403), 'ce qu’il affirme'),
      it(E(1402), 'ce qu’il fait'),
      it(E(1404), 'ce qu’il se raconte'),
    ], chk('Il affirme que les autres ne l’intéressent pas. Ses propres phrases…', ['le contredisent', 'le confirment'], 0,
      'Il tient un carnet des visites de sa voisine : ses actes démentent ses mots. EN: his actions contradict his words.')),
    grp('Ce que le lecteur comprend', [
      it(E(1405), 'le décalage'),
      it(E(1406), 'la place du lecteur'),
      it(E(1411), 'le nom de ce narrateur'),
    ], chk('Dans cette page, le jugement sévère sur la voisine : de qui est-il ?',['du narrateur, un personnage', 'de l’auteure du roman'], 0,
      'C’est l’avis d’un personnage qui raconte ; le texte nous invite à nous en méfier. EN: a character’s view, not the author’s.')),
    ctl('Le réflexe', `${Cap(LECTURE_B1_REF)} disait : « ${B137_REFRAME} » Qu’ajoute une page de roman ?`,
      ['Une question : qui raconte, et peut-on le croire ?', 'Rien : le sens suffit.'], 0,
      'Comprendre ne suffit plus : il faut savoir quelle voix te parle. EN: understanding is not enough; ask whose voice it is.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['narrateur'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Au club de lecture de ta bibliothèque', fr: fr(E(1407)), en: en(E(1407)) },
    { situation: 'Au DELF B2, une question sur une page de roman', fr: fr(E(1408)), en: en(E(1408)) },
    { situation: 'Tu conseilles un roman à une amie', fr: fr(E(1412)), en: en(E(1412)) },
    { situation: 'En cours, tu commentes un extrait', fr: fr(E(1409)), en: en(E(1409)) },
  ],
  audio: AUDIO, say: REFRAME, terms: ['narrateur'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La voix', 'Un roman dit « je ». Ce je est…', ['forcément l’auteur', 'une voix inventée, le narrateur'], 1,
    'L’auteur écrit ; le narrateur raconte, et il peut se tromper. EN: the author writes, the narrator tells.'),
  ctl('Les trois questions', 'Devant une page littéraire, tu demandes d’abord…', ['qui parle, par quels yeux, avec quels mots', 'combien de pages il reste', 'si l’auteur est connu'], 0,
    'Trois questions qui ouvrent tout commentaire. EN: who speaks, whose eyes, which words.'),
  ctl('La mission', 'À la fin de la leçon, tu écris…', ['un résumé du roman', 'un commentaire de 200 à 250 mots sur un extrait', 'une lettre à l’auteure'], 1,
    'Qui raconte, par quels yeux, quelle tonalité, par quels moyens, avec deux citations. EN: a short commentary with two quotations.'),
], ['narrateur']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Qui raconte ?',
    opener: {
      line: 'Un vieil homme dit « je », et tout le club le croit : ici tu apprends à te demander quelle voix te parle. EN: An old man says “I” and the whole book club believes him: here you learn to ask whose voice is speaking.',
      imageRef: 'lessons/lire-litterature/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sépares la voix qui raconte de l’auteur, et tu sais qu’un narrateur peut se tromper. EN: You can tell the narrating voice from the author, and you know a narrator can be wrong.',
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_VOIX, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: LE NARRATEUR ET L’AUTEUR
 *
 *  TEXT: a memoir told by a former pupil about her teacher. MOVE: say who
 *  the narrator is (hero, witness, outside the story), at which person, and
 *  never « l’auteur raconte sa vie » unless the text is an autobiography.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE = lecture('a2-lecture', 'Monsieur Lambert', 'Un souvenir, près de Namur', TEXTE_LAMBERT,
  [{ word: 'pétition', en: 'petition', note: 'Un texte que beaucoup de gens signent pour demander quelque chose.' }],
  [
    { q: 'Devine le sens. « Ma mère disait qu’il était un drôle de numéro. » Qu’est-ce qu’un drôle de numéro ?', a: 'Une personne étrange, originale, qui ne fait pas comme les autres.' },
    { q: 'Question globale. Qui raconte, et qui est le personnage principal ?', a: 'Une ancienne élève raconte ; le personnage principal est son instituteur, M. Lambert. Elle est narratrice et témoin.' },
    { q: 'Détail. Comment la narratrice a-t-elle reconnu la signature de son père ?', a: 'À la grande boucle qu’il faisait toujours en signant.' },
    { q: 'Inférence. Pourquoi le silence du père est-il « pire » que les mots de la mère ?', a: 'Il cache une désapprobation plus forte : on apprend ensuite qu’il a signé la pétition.' },
    { q: 'Inférence. Que suggère la dernière phrase ?', a: 'Que M. Lambert a changé la vie de la narratrice : devenue institutrice, elle fait comme lui.' },
    { q: 'Ton et position. La narratrice juge-t-elle les adultes du village ? Par quels mots ?', a: 'Oui, sans les accuser : « ce qui, au village, ne se faisait pas », « ce qui était pire ». Elle laisse parler les faits.' },
  ], 'rec-b2-30-lambert', ['narrateur']);

const A2_VOIX: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-voix', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-voix',
  title: 'Qui raconte ?', frSub: 'L’auteur, et trois sortes de narrateur',
  hint: 'Quatre cartes. Demande-toi chaque fois si le narrateur fait partie de l’histoire.',
  audio: REC('rec-b2-30-voix'), say: REFRAME, terms: ['narrateur'],
  cards: [
    { head: 'L’auteur et le narrateur', label: 'deux personnes', fr: fr(E(1413)), sub: rsOf(E(1413)),
      body: 'L’auteur existe hors du livre ; le narrateur est la voix qu’il a créée. Dis « le narrateur » tant que rien ne prouve que c’est l’auteur. EN: say the narrator unless the text proves otherwise.' },
    { head: 'Le je qui vit l’histoire', label: 'narrateur personnage', fr: fr(E(1414)), sub: rsOf(E(1414)),
      body: 'Il raconte ce qu’il a vécu, à la première personne. Il ne sait que ce qu’il a vu, et il peut se tromper. EN: a first-person narrator who lives the story.' },
    { head: 'Le nous témoin', label: Q_BOVARY.source, fr: Q_BOVARY.fr,
      body: 'Au début du roman, un ancien camarade de Charles dit « nous », puis sa voix s’efface. Il regarde plus qu’il n’agit : c’est un narrateur témoin. EN: a witness narrator, who watches more than he acts.' },
    { head: 'Le narrateur hors de l’histoire', label: 'il ou elle', fr: fr(E(1415)), sub: rsOf(E(1415)),
      body: `Il ne fait pas partie de l’histoire. ${Cap(PASSE_SIMPLE_REF)} t’a montré ce récit à la troisième personne ; ici, tu te demandes ce qu’il sait. EN: a narrator outside the story.` },
  ],
};

const A2_QUI: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-qui', layer: 'core', size: 'lg',
  title: 'Dans l’histoire, ou dehors', frSub: 'Trois sortes de voix',
  groups: [
    grp('Un je dans l’histoire', [
      it(E(1417), 'la mère, vue par l’enfant'),
      it(E(1418), 'le père, vu par l’enfant'),
      it(E(1419), 'l’adulte qui se souvient'),
      it(LIT(1180), 'la leçon 8 du B2'),
    ], chk('Dans le souvenir de M. Lambert, la narratrice est…', ['un personnage, et surtout un témoin', 'un narrateur extérieur à l’histoire', 'l’auteure elle-même'], 0,
      'Elle était dans la classe, mais le héros, c’est l’instituteur : elle raconte l’histoire d’un autre. EN: she was there, but the story is his.')),
    grp('Une voix hors de l’histoire', [
      it(E(1423), 'le nom de cette voix'),
      it(LIT(1181), 'la leçon 8 du B2'),
      it(E(1416), 'une phrase qui pourrait venir des deux'),
    ], chk('« Monsieur Lambert est arrivé un lundi de septembre. » Seule, cette phrase te dit-elle qui raconte ?', ['non : il faut regarder le reste du texte', 'oui : c’est un narrateur extérieur'], 0,
      'Il ou elle dans une phrase ne suffit pas : un je témoin parle aussi des autres à la troisième personne. EN: one sentence is not enough.')),
    ctl('L’autobiographie', 'Dans quel cas peux-tu écrire « l’auteur raconte sa vie » ?', ['dans une autobiographie déclarée', 'dans tout roman écrit au je'], 0,
      'Seule l’autobiographie promet que l’auteur, le narrateur et le personnage ne font qu’un. EN: only a declared autobiography.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['narrateur'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a2-piege', layer: 'core', swipe: true,
  title: 'Six phrases de commentaire à corriger',
  rule: {
    title: 'L’auteur écrit, le narrateur raconte',
    body: 'Dans un commentaire, le je d’un roman se dit « le narrateur » ou « la narratrice ». Précise sa place : héros, témoin, ou voix hors de l’histoire. EN: in a commentary, name the narrator and say where they stand.',
  },
  cards: [
    trap(E(1414), 'l’auteure pour la narratrice', 'L’auteure raconte sa propre enfance.', 'Rien ne dit que c’est la vie de l’auteure : dis la narratrice. EN: nothing proves it is the author’s life.'),
    trap(E(1421), 'le je confondu', 'Dans ce texte, le je est celui de l’auteure.', 'Le je appartient à un personnage, une ancienne élève. EN: the I belongs to a character.'),
    trap(E(1420), 'le témoin pris pour le héros', 'La narratrice est l’héroïne de l’histoire.', 'Elle raconte surtout l’histoire de M. Lambert : elle est témoin. EN: she mostly tells his story.'),
    trap(E(1415), 'le narrateur oublié', 'À la troisième personne, il n’y a pas de narrateur.', 'Il y a toujours une voix qui raconte, même quand elle ne dit pas je. EN: there is always a narrating voice.'),
    trap(E(1425), 'Flaubert au collège', 'Au début de Madame Bovary, Flaubert raconte ses souvenirs.', 'Le nous est celui d’un camarade inventé de Charles. EN: an invented classmate says we.'),
    trap(E(1426), 'l’autobiographie oubliée', 'Dans une autobiographie, le narrateur est un personnage inventé.', 'Dans une autobiographie, les trois ne font qu’un. EN: in an autobiography, the three are one.'),
  ],
  drill: [
    { promptSay: 'Le narrateur est une voix ... par l’auteur.', opts: ['créée', 'imitée'], correct: 0 },
    { promptSay: 'Une narratrice qui raconte l’histoire d’un autre est un ... .', opts: ['témoin', 'auteur'], correct: 0 },
    { promptSay: 'Le je d’un roman n’est pas ... l’auteur.', opts: ['forcément', 'jamais', 'encore'], correct: 0 },
    { promptSay: 'Au début de Madame Bovary, le nous est celui d’un ancien ... de Charles.', opts: ['camarade', 'professeur'], correct: 0 },
    { promptSay: 'Dans une ... , l’auteur, le narrateur et le personnage ne font qu’un.', opts: ['nouvelle', 'autobiographie', 'fable'], correct: 1 },
    { promptSay: 'Un narrateur ... à l’histoire dit il ou elle.', opts: ['extérieur', 'intérieur'], correct: 0 },
    { promptSay: 'Dans ton commentaire, tu écris : « La ... raconte l’arrivée de son instituteur. »', opts: ['narratrice', 'romancière'], correct: 0 },
    { promptSay: 'M. Lambert est le personnage ... du souvenir.', opts: ['principal', 'secondaire'], correct: 0 },
  ],
  steps: STEPS('L’auteur écrit, le narrateur raconte', 'Ce qu’un lecteur pressé a écrit'),
  audio: REC('rec-b2-30-piege-narrateur'), say: REFRAME, terms: ['narrateur'],
};

const A2_COMMENTAIRE = pourTonCommentaire('a2-commentaire', 'Ta première phrase dit qui raconte', [
  grp('Présenter la voix', [
    it(E(1427), 'la voix, sa place, son sujet'),
    free('L’auteure raconte son enfance dans un village.', 'The author tells about her childhood in a village.', 'une supposition'),
  ], chk('Laquelle ouvre bien un commentaire ?', ['« La narratrice, une ancienne élève, raconte l’arrivée de son instituteur. »', '« L’auteure raconte son enfance dans un village. »'], 0,
    'La première nomme la voix et sa place ; la seconde suppose ce que le texte ne dit pas. EN: the first names the voice.')),
  grp('Nommer le témoin', [
    it(E(1420), 'le rôle de la narratrice'),
    it(E(1422), 'le mot juste'),
  ], chk('Que gagne ton lecteur quand tu écris « narratrice témoin » ?', ['il sait que le héros est un autre', 'il sait que tout est vrai'], 0,
    'Le mot dit qui regarde et qui agit. EN: it says who watches and who acts.')),
], ['narrateur', 'citation']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('L’auteur', 'L’auteur d’un roman, c’est…', ['la personne réelle qui l’a écrit', 'la voix qui raconte'], 0,
    'La voix qui raconte, c’est le narrateur. EN: the narrating voice is the narrator.'),
  ctl('Le témoin', 'Un narrateur témoin…', ['raconte l’histoire d’un autre, qu’il a vue', 'invente tout', 'ne dit jamais je'], 0,
    'Il était là, mais le héros est un autre. EN: present, but not the hero.'),
  ctl('La prudence', 'Tu n’es pas sûr que le je soit l’auteur. Tu écris…', ['« l’auteur »', '« le narrateur »'], 1,
    'Le mot juste ne suppose rien. EN: the right word assumes nothing.'),
], ['narrateur']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Le narrateur et l’auteur',
    opener: {
      line: 'Une ancienne élève raconte l’année où tout a changé, mais le héros, c’est un autre : ici tu nommes chaque voix. EN: A former pupil tells of the year everything changed, but the hero is someone else: here you name each voice.',
      imageRef: 'lessons/lire-litterature/act02.jpg',
    },
    sections: [],
    milestone: 'Tu dis si le narrateur est le héros, un témoin ou une voix hors de l’histoire. EN: You can say whether the narrator is the hero, a witness or a voice outside the story.',
    estScreens: 40, restPoints: ['a2-voix', 'a2-piege'],
  },
  sections: [A2_LECTURE, A2_VOIX, A2_QUI, A2_PIEGE, A2_COMMENTAIRE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: PAR QUELS YEUX
 *
 *  TEXT: Aminata arrives in Dakar, seen from inside her. MOVE: say through
 *  whose eyes a scene is seen (internal, external, zero) and what that does
 *  to the reader. The listening tells one moment three ways.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE = lecture('a3-lecture', 'Aminata à Dakar', 'Un roman, une arrivée', TEXTE_AMINATA,
  [{ word: 'boubou', en: 'boubou, a long flowing robe', note: 'Un grand vêtement ample, porté en Afrique de l’Ouest.' }],
  [
    { q: 'Devine le sens. « Elle recula d’un pas, le cœur battant. » Que veut dire « le cœur battant » ?', a: 'Avec le cœur qui bat très vite : elle a peur.' },
    { q: 'Question globale. Que raconte ce passage, et par les yeux de qui le voit-on ?', a: 'L’arrivée d’Aminata à Dakar ; on voit tout par ses yeux, avec ses peurs.' },
    { q: 'Détail. Pourquoi Aminata ne reconnaît-elle pas sa tante ?', a: 'Elle cherchait un boubou vert ; celui de sa tante est bleu.' },
    { q: 'Inférence. L’homme qui tend la main voulait-il voler le sac ?', a: 'On ne le sait pas : on ne voit que ce qu’Aminata voit et craint. Ses pensées à lui restent cachées.' },
    { q: 'Inférence. Pourquoi l’odeur de poisson grillé compte-t-elle ?', a: 'Elle lui rappelle sa grand-mère et son village : elle a déjà le mal du pays.' },
    { q: 'Ton et position. Le narrateur se moque-t-il d’Aminata ?', a: 'Non : il reste tout près d’elle ; ses peurs sont montrées de l’intérieur, avec tendresse et sans jugement.' },
  ], 'rec-b2-30-aminata', ['focalisation']);

const A3_INDICES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-indices', layer: 'core', sheetId: 'sheet-voix',
  title: 'Six indices du regard',
  cols: ['Indice', 'Exemple', 'Focalisation'],
  rows: [
    { cells: ['un verbe de perception', 'Dakar lui parut immense', 'interne'], say: fr(E(1428)),
      detail: { title: 'Voir, sembler, paraître', body: 'Le monde est décrit tel qu’un personnage le perçoit, avec ses erreurs. EN: the world as one character perceives it.', say: fr(E(1429)) } },
    { cells: ['une question sans guillemets', 'Voulait-il l’aider, ou la voler ?', 'interne'], say: fr(E(1430)),
      detail: { title: 'Les pensées du personnage', body: 'Le récit laisse entendre ce que le personnage se demande. Tu es dans sa tête. EN: you are inside the character’s head.', say: fr(E(1444)) } },
    { cells: ['ce que le personnage ignore', 'des intentions cachées', 'interne'], say: fr(E(1445)),
      detail: { title: 'Un savoir limité', body: 'Le lecteur en sait aussi peu que le personnage : c’est ce qui crée l’inquiétude. EN: the reader knows as little as the character.', say: fr(E(1440)) } },
    { cells: ['des gestes seulement', 'Il hausse les épaules et s’éloigne', 'externe'], say: fr(E(1443)),
      detail: { title: 'Comme une caméra', body: 'Aucune pensée, aucun sentiment dit : des gestes, des paroles. À toi de deviner. EN: like a camera; you infer the rest.', say: fr(E(1442)) } },
    { cells: ['les pensées de plusieurs', 'l’un veut aider, l’autre a peur', 'zéro'], say: fr(E(1447)),
      detail: { title: 'Le narrateur omniscient', body: 'Il entre dans toutes les têtes et connaît ce que les personnages ignorent. EN: he enters every head.', say: fr(E(1437)) } },
    { cells: ['l’avenir connu', 'elle ne savait pas encore…', 'zéro'], say: fr(E(1432)),
      detail: { title: 'Le narrateur qui sait la suite', body: 'Annoncer ce que le personnage ne sait pas encore, c’est se placer au-dessus de lui. EN: only an all-knowing narrator knows the future.', say: fr(E(1448)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['focalisation'],
};

const A3_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-trier', layer: 'core', size: 'lg',
  title: 'Dans une tête, ou au-dessus', frSub: 'Trois regards sur une même scène',
  groups: [
    grp('Par les yeux d’un personnage', [
      it(E(1433), 'le regard d’Aminata'),
      it(E(1429), 'ce qu’elle croit voir'),
      it(LIT(1186), 'la leçon 8 du B2'),
    ], chk('« Tous les boubous lui semblaient verts. » Pourquoi cette phrase est-elle en focalisation interne ?', ['« lui semblaient » donne l’impression d’Aminata', 'le narrateur connaît la couleur exacte de chaque boubou'], 0,
      'Ce n’est pas la réalité, c’est ce qu’elle perçoit, tant elle est inquiète. EN: her perception, not the facts.')),
    grp('De dehors, ou de partout', [
      it(E(1438), 'la caméra'),
      it(E(1437), 'le narrateur qui sait tout'),
      it(E(1436), 'son nom'),
    ], chk('« L’homme haussa les épaules et s’éloigna. » Que sais-tu de ce qu’il pense ?', ['rien : on ne voit que son geste', 'qu’il est vexé'], 0,
      'Un geste, aucune pensée : Aminata ne voit l’homme que de l’extérieur. Vexé, c’est ton hypothèse. EN: a gesture, no thought.')),
    ctl('L’effet', 'Pourquoi raconter l’arrivée par les yeux d’Aminata ?', ['pour que le lecteur partage sa peur et ses erreurs', 'pour tout expliquer au lecteur'], 0,
      'On en sait aussi peu qu’elle : on a peur avec elle. EN: we fear with her.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['focalisation'],
};

/** `hideLines`: the questions are about what the ear caught. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a3-ecoute', layer: 'core', hideLines: true,
  title: 'Une scène, trois regards', frSub: 'Écoute sans lire',
  lines: [ln(E(1442)), ln(E(1443)), ln(E(1444)), ln(E(1445)), ln(E(1446)), ln(E(1447)), ln(E(1432)), ln(E(1448))],
  questions: [
    { q: 'Les deux premières phrases : que sait-on des pensées des personnages ?', opts: ['rien : on voit seulement leurs gestes', 'tout ce qu’ils pensent', 'seulement ce que pense la jeune fille'], correct: 0, why: 'Des gestes, aucune pensée : c’est une focalisation externe. EN: external focalisation.' },
    { q: 'Les deux phrases suivantes : par les yeux de qui voit-on la scène ?', opts: ['d’Aminata', 'de l’homme', 'de personne'], correct: 0, why: 'On entend sa peur et on ne perçoit plus que son cœur. EN: through Aminata.' },
    { q: 'Puis le regard change de personnage. Que veut vraiment l’homme ?', opts: ['l’aider', 'la voler'], correct: 0, why: 'Dans sa tête à lui, il veut seulement porter le sac. EN: he only wants to help.' },
    { q: 'Qui, à la fin, connaît les pensées des deux personnages et même l’avenir ?', opts: ['le narrateur, omniscient', 'Aminata', 'l’homme'], correct: 0, why: 'Seul un narrateur qui sait tout peut annoncer vingt ans à Dakar. EN: an all-knowing narrator.' },
    { q: 'Quelle version crée le plus d’inquiétude chez le lecteur ?', opts: ['celle qui reste dans la tête d’Aminata', 'celle où le narrateur sait tout'], correct: 0, why: 'On ignore les intentions de l’homme, comme elle. EN: we share her ignorance.' },
  ],
  audio: REC('rec-b2-30-ecoute-regards'), say: REFRAME, terms: ['focalisation'],
};

const A3_COMMENTAIRE = pourTonCommentaire('a3-commentaire', 'Tu nommes le regard, puis son effet', [
  grp('Deux phrases de commentaire', [
    it(E(1439), 'le regard, nommé'),
    free('Le narrateur décrit Dakar.', 'The narrator describes Dakar.', 'un constat sans analyse'),
  ], chk('Laquelle apprend quelque chose à ton lecteur ?', ['« Le passage est écrit en focalisation interne : on voit Dakar par les yeux d’Aminata. »', '« Le narrateur décrit Dakar. »'], 0,
    'La première dit par quels yeux on voit ; la seconde répète le texte. EN: the first names the gaze.')),
  grp('Le regard et son effet', [
    it(E(1440), 'l’effet sur le lecteur'),
    it(E(1433), 'le regard seul'),
  ], chk('Que dois-tu ajouter après avoir nommé la focalisation ?', ['son effet sur le lecteur', 'le nombre de personnages'], 0,
    'Nommer ne suffit pas : dis ce que le regard fait ressentir. EN: say what the gaze makes you feel.')),
], ['focalisation']);

const A3_TEXTE = dansUnTexte('a3-texte', 'Un homme au café', DANS_A3, [
  { q: 'Par quels yeux voit-on cette scène ?', a: 'Par aucun personnage : on ne voit que des gestes, comme avec une caméra. C’est une focalisation externe.' },
  { q: 'Que peut-on deviner, sans que le texte le dise ?', a: 'Que l’homme attendait la femme en rouge, et qu’elle ne s’est pas arrêtée : il est déçu, ou le rendez-vous a échoué.' },
  { q: 'Relève deux indices de son attente.', a: '« Toutes les deux minutes, il regardait sa montre » ; il ne touche ni au journal ni au café.' },
  { q: 'Quel effet produit ce choix de regard ?', a: 'Un effet de mystère : le lecteur doit reconstruire lui-même l’histoire et les sentiments.' },
  { q: 'Que dit la dernière phrase, et du point de vue de qui ?', a: 'La tasse encore pleine, vue par la serveuse : un détail qui dit l’émotion de l’homme sans la nommer.' },
], 'rec-b2-30-texte-a3', ['focalisation']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Interne', 'En focalisation interne, on voit…', ['par les yeux d’un seul personnage', 'tout, partout', 'seulement des gestes'], 0,
    'On partage ses perceptions, ses pensées et ses erreurs. EN: through one character.'),
  ctl('Externe', 'Un texte qui ne montre que des gestes et des paroles est en focalisation…', ['interne', 'externe'], 1,
    'Comme une caméra : le lecteur devine le reste. EN: external, like a camera.'),
  ctl('Omniscient', '« Elle ne savait pas encore qu’elle resterait vingt ans. » Qui parle ainsi ?', ['un narrateur qui sait tout', 'le personnage'], 0,
    'Seul un narrateur au-dessus de l’histoire connaît la suite. EN: an all-knowing narrator.'),
], ['focalisation']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Par quels yeux',
    opener: {
      line: 'Une jeune fille arrive à Dakar et chaque inconnu lui fait peur : ici tu dis par quels yeux le lecteur voit la scène. EN: A girl arrives in Dakar and every stranger frightens her: here you say through whose eyes the reader sees.',
      imageRef: 'lessons/lire-litterature/act03.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais une focalisation interne, externe ou omnisciente, et tu dis son effet. EN: You can recognise internal, external and omniscient focalisation and say what each does.',
    estScreens: 38, restPoints: ['a3-indices', 'a3-ecoute'],
  },
  sections: [A3_LECTURE, A3_INDICES, A3_TRIER, A3_ECOUTE, A3_COMMENTAIRE, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: LE TEMPS DU RÉCIT
 *
 *  TEXT: Jeanne comes back to the lighthouse village. MOVE: read the tenses
 *  as plans (lessons 8 in B2 and 3 in B1, applied), find the flashback
 *  (lesson 1 in B2), the summary, the ellipsis and the switch to the
 *  présent de narration, and say what each does.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE = lecture('a4-lecture', 'Le phare de l’Anse-aux-Brumes', 'Trente ans, une porte', TEXTE_JEANNE,
  [{ word: 'notaire', en: 'notary', note: 'Le juriste qui règle les héritages.' }],
  [
    { q: 'Devine le sens. « la brume qui mangeait les bateaux ». Que fait la brume ?', a: 'Elle cachait les bateaux, comme si elle les avalait : c’est une image.' },
    { q: 'Question globale. Que raconte ce passage ?', a: 'Le retour de Jeanne dans son village natal, après la mort de son père, trente ans après son départ.' },
    { q: 'Détail. À quel temps sont les verbes du départ de Jeanne, et pourquoi ?', a: 'Au plus-que-parfait (avait quitté, s’était juré) : c’est un retour en arrière dans le récit.' },
    { q: 'Inférence. Pourquoi le texte passe-t-il au présent à « Enfin, elle entre » ?', a: 'Pour rapprocher le lecteur : c’est le moment le plus fort, on le vit avec elle.' },
    { q: 'Inférence. Combien d’années tiennent en deux phrases ? Pourquoi si vite ?', a: 'Presque trente : c’est un sommaire. Ce qui compte, c’est le retour, pas ces années.' },
    { q: 'Ton et position. Que comprend-on à la fin, et quel petit mot le fait comprendre ?', a: '« donc » : son père l’aimait et l’a regardée partir sans jamais le dire. L’émotion est forte, mais retenue.' },
  ], 'rec-b2-30-jeanne', ['plans', 'rythme']);

const A4_TEMPS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-temps', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-temps',
  title: 'Le temps du récit', frSub: 'Quatre façons de jouer avec le temps',
  hint: 'Quatre cartes. Pour chacune, demande-toi ce que le lecteur ressent.',
  audio: REC('rec-b2-30-temps'), say: REFRAME, terms: ['plans', 'rythme'],
  cards: [
    { head: 'Premier plan, arrière-plan', label: Cap(PASSE_SIMPLE_REF), fr: fr(E(1449)), sub: rsOf(E(1449)),
      body: `« ${B208_REFRAME} » Revint fait avancer l’histoire ; était éteint pose le décor. EN: ${B208_REFRAME_EN}` },
    { head: 'Le retour en arrière', label: Cap(PQP_REF), fr: fr(E(1450)), sub: rsOf(E(1450)),
      body: `« ${B201_REFRAME} » Dans un récit, il ouvre une analepse : un souvenir. EN: ${B201_REFRAME_EN}` },
    { head: 'Sommaire, scène, ellipse', label: 'le rythme', fr: fr(E(1451)), sub: rsOf(E(1451)),
      body: 'Des années en trois mots : le récit accélère. Une minute sur le seuil, en plusieurs phrases : il ralentit. Ce qui est long compte. EN: speed shows what matters.' },
    { head: 'Le présent de narration', label: 'un récit au passé, puis', fr: fr(E(1454)), sub: rsOf(E(1454)),
      body: 'Le récit passe au présent au moment fort : la scène se rapproche, comme en gros plan. EN: the narrative present brings the scene close.' },
  ],
};

const A4_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-trier', layer: 'core', size: 'lg',
  title: 'Vite, lentement, en arrière', frSub: 'Le rythme et les temps',
  groups: [
    grp('Le rythme', [
      it(E(1451), 'trois mots, trente ans'),
      it(E(1452), 'une vie en une phrase'),
      it(E(1453), 'une minute qui dure'),
    ], chk('« Elle vécut à Montréal, puis à Lyon, se maria, divorça, éleva deux filles. » C’est…', ['un sommaire : des années en une phrase', 'une scène', 'une pause descriptive'], 0,
      'Une vie entière résumée : le texte passe vite sur ce qui compte moins. EN: a summary.')),
    grp('Les temps et leur rôle', [
      it(E(1456), 'le décor'),
      it(E(1450), 'avant le récit'),
      it(E(1454), 'le moment fort'),
    ], chk('« Son père l’avait donc regardée partir. » Pourquoi le plus-que-parfait ?', ['il remonte au jour du départ de Jeanne, trente ans plus tôt', 'il annonce la suite'], 0,
      'Un regard du passé, découvert aujourd’hui : l’analepse change le sens du départ. EN: a flashback that changes the past.')),
    ctl('L’ellipse', '« Trois ans plus tard, ils ne se parlaient plus. » Qu’a fait le texte ?', ['il a sauté trois ans', 'il a raconté trois ans en détail'], 0,
      'L’ellipse saute une période ; au lecteur d’imaginer ce qui s’est passé. EN: an ellipsis skips time.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['rythme', 'plans'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a4-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre remarques sur le temps à reprendre',
  errors: [
    { wrong: 'Le texte passe au présent parce que l’action se passe aujourd’hui.', right: 'Le passage au présent rend la scène plus vive.',
      why: 'Normal : d’habitude, le présent dit maintenant. Dans un récit au passé, c’est un effet de gros plan. EN: a narrative present, not today.' },
    { wrong: 'Le plus-que-parfait est une erreur : le récit est au passé simple.', right: 'Le plus-que-parfait marque un retour en arrière.',
      why: 'Un changement de temps paraît fautif, mais il remonte avant le récit. EN: it marks a flashback.' },
    { wrong: 'Le texte oublie trente ans de la vie de Jeanne.', right: 'Trente ans tiennent en deux phrases : c’est un sommaire.',
      why: 'Il ne les oublie pas, il les résume : le cœur de l’histoire est ailleurs. EN: summarised, not forgotten.' },
    { wrong: 'L’imparfait fait avancer l’histoire.', right: 'L’imparfait pose le décor ; le passé simple fait avancer l’histoire.',
      why: `« ${B103_REFRAME} » ${Cap(PC_IMP_REF)} le disait déjà. EN: ${B103_REFRAME_EN}` },
  ],
  audio: AUDIO, say: REFRAME, terms: ['plans', 'rythme'],
};

const A4_COMMENTAIRE = pourTonCommentaire('a4-commentaire', 'Un temps, un effet', [
  grp('Le présent au milieu du passé', [
    it(E(1457), 'l’effet'),
    free('Il y a des verbes au présent dans le texte.', 'There are verbs in the present in the text.', 'un simple constat'),
  ], chk('Laquelle vaut des points dans un commentaire ?', ['« Le passage au présent rend la scène plus vive. »', '« Il y a des verbes au présent dans le texte. »'], 0,
    'Un constat sans effet ne commente rien. EN: a fact with no effect is not commentary.')),
  grp('Le rythme', [
    it(E(1459), 'le sommaire, nommé'),
    it(E(1464), 'scène et sommaire'),
  ], chk('Pourquoi dire qu’un texte ralentit sur une minute ?', ['parce que ce qui dure longtemps dans le texte compte beaucoup', 'parce que l’auteur écrit lentement'], 0,
    'Le rythme montre l’important. EN: rhythm shows what matters.')),
], ['rythme']);

const A4_TEXTE = dansUnTexte('a4-texte', 'Paul et Nadia', DANS_A4, [
  { q: 'Trouve l’ellipse, et dis ce qu’elle saute.', a: '« Trois ans plus tard » : le texte saute trois années de mariage, et le lecteur imagine comment l’amour s’est usé.' },
  { q: 'Où le récit passe-t-il au présent, et pourquoi ?', a: 'À « Un soir de décembre, Nadia fait sa valise » : le moment du départ est vécu comme en direct.' },
  { q: 'Trouve le retour en arrière et son temps.', a: '« elle lui avait dit » : au plus-que-parfait, un souvenir plus ancien que la scène.' },
  { q: 'Quel effet produit la dernière phrase ?', a: '« Il ne rit plus » répond à « Il avait ri » : le contraste, très court, dit la douleur sans la nommer.' },
], 'rec-b2-30-texte-a4', ['rythme', 'plans']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Les plans', 'Dans un récit au passé, le décor est surtout…', ['à l’imparfait', 'au passé simple'], 0,
    'Le passé simple fait avancer, l’imparfait fait durer. EN: the imparfait holds the background.'),
  ctl('L’analepse', 'Un retour en arrière s’écrit souvent…', ['au plus-que-parfait', 'au futur', 'au présent'], 0,
    'Ce qui était déjà fait avant le récit. EN: the plus-que-parfait.'),
  ctl('Le rythme', 'Des années en une phrase, c’est…', ['une scène', 'un sommaire'], 1,
    'La scène ralentit, le sommaire accélère. EN: a summary speeds up.'),
], ['plans', 'rythme']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Le temps du récit',
    opener: {
      line: 'Trente ans passent en deux phrases, puis une porte s’ouvre au présent : ici tu lis comment un récit joue avec le temps. EN: Thirty years pass in two sentences, then a door opens in the present: here you read how a story plays with time.',
      imageRef: 'lessons/lire-litterature/act04.jpg',
    },
    sections: [],
    milestone: 'Tu repères les plans, le retour en arrière, l’ellipse, le sommaire et le présent de narration, et tu dis leur effet. EN: You can spot foreground and background, flashback, ellipsis, summary and the narrative present, and say what they do.',
    estScreens: 36, restPoints: ['a4-temps', 'a4-erreurs'],
  },
  sections: [A4_LECTURE, A4_TEMPS, A4_TRIER, A4_ERREURS, A4_COMMENTAIRE, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: LES PAROLES ET LES PENSÉES
 *
 *  TEXT: Lise waits for her son on Christmas Eve, in Montréal. MOVE: tell
 *  direct from indirect speech (lesson 19 in B1, applied) and RECOGNISE the
 *  style indirect libre: a sentence with the narrative's tense and person
 *  and the character's voice. Recognition only: never asked to write one.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE = lecture('a5-lecture', 'Le réveillon de Lise', 'Une nouvelle, à Montréal', TEXTE_LISE,
  [
    { word: 'tourtière', en: 'meat pie', note: 'Au Québec, le pâté de viande des fêtes.' },
    { word: 'dépanneur', en: 'corner shop', note: 'Au Québec, la petite épicerie du quartier, ouverte tard.' },
  ],
  [
    { q: 'Devine le sens. « une neige fine et obstinée ». Que veut dire « obstinée », ici ?', a: 'Une neige qui ne s’arrête pas, comme si elle s’entêtait.' },
    { q: 'Question globale. Que se passe-t-il dans ce passage ?', a: 'Lise attend son fils pour le réveillon ; il ne vient pas, elle se fâche, puis elle le trouve en panne dans la neige.' },
    { q: 'Détail. Quelles paroles de Mathieu sont citées au discours direct ?', a: '« Je t’appelle si j’ai un empêchement » et « Maman ! J’ai plus de batterie, j’ai pas pu t’appeler. », du français parlé et familier (sans ne), naturel dans sa bouche, pas un modèle pour l’écrit.' },
    { q: 'Inférence. « Évidemment, il avait oublié. » Qui pense cela : le narrateur, ou Lise ?', a: 'Lise : c’est sa colère, glissée dans le récit sans guillemets ni que. C’est du style indirect libre.' },
    { q: 'Inférence. Que révèle « avec cette fille » ?', a: 'Lise n’aime pas l’amie de son fils : elle lui reproche de l’éloigner. Le narrateur, lui, ne juge personne.' },
    { q: 'Ton et position. Comment finit la scène, et quel geste le montre ?', a: 'Sans un mot, Lise prend la pelle : la colère se change en tendresse. Le geste remplace les excuses.' },
  ], 'rec-b2-30-lise', ['indirect']);

const A5_TROIS: Sec<'examples'> = {
  type: 'examples', id: 'a5-trois', layer: 'core', sheetId: 'sheet-voix',
  title: 'Trois façons de rapporter une pensée',
  examples: [
    ex(E(1469), 'discours direct : les mots exacts, entre guillemets'),
    ex(E(1470), 'discours indirect : que, et les temps qui reculent'),
    ex(E(1471), 'style indirect libre : ni guillemets ni que, mais sa voix'),
    ex(PR, `${Cap(DISCOURS_REF)} : le discours indirect, au passé`),
    ex(E(1479), 'la marque du discours indirect'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['indirect'],
};

const A5_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-reperer', layer: 'core', size: 'lg',
  title: 'Qui parle, et comment', frSub: 'Direct, indirect ou libre',
  groups: [
    grp('Dans la nouvelle', [
      it(E(1465), 'ses mots exacts'),
      it(E(1466), 'rapportés avec que'),
      it(E(1467), 'ni guillemets ni que'),
      it(E(1468), 'la même voix'),
    ], chk('« Non, elle n’allait pas l’appeler. » C’est…', ['du style indirect libre : la décision de Lise', 'du discours direct', 'un jugement du narrateur'], 0,
      'Le non et l’allait pas sont la voix de Lise, au temps du récit. EN: Lise’s voice in the narrative’s tense.')),
    grp('La même pensée, trois fois', [
      it(E(1469), 'citée'),
      it(E(1470), 'rapportée'),
      it(E(1471), 'glissée dans le récit'),
    ], chk('Laquelle fait entendre la voix de Lise sans la citer ?', ['« Il avait encore oublié, évidemment. »', '« Elle se dit qu’il avait encore oublié. »'], 0,
      'Évidemment : c’est son mot, sa colère, sans verbe de parole. EN: her word, with no verb of saying.')),
    ctl('Ce qui reste', `${Cap(DISCOURS_REF)} disait : « ${B119_REFRAME} » En style indirect libre, qu’est-ce qui reste du personnage ?`,
      ['sa voix : ses mots, ses exclamations, ses questions', 'ses guillemets'], 0,
      'Le temps et la personne sont ceux du récit ; la voix est la sienne. EN: the narrative’s tense, the character’s voice.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['indirect'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a5-piege', layer: 'core', swipe: true,
  title: 'Qui pense cette phrase ?',
  rule: {
    title: 'Sans guillemets, ce n’est pas forcément le narrateur',
    body: 'Une phrase sans guillemets ni que peut porter la voix d’un personnage. Si elle a ses exclamations, ses questions et ses mots, c’est son style indirect libre, pas l’avis du narrateur. EN: an unmarked sentence can carry a character’s voice.',
  },
  cards: [
    trap(E(1472), 'le narrateur accusé', 'Le narrateur pense que Mathieu a oublié.', 'C’est la pensée de Lise, dans sa colère. EN: it is Lise’s thought.'),
    trap(E(1475), 'le jugement mal attribué', 'Le narrateur n’aime pas l’amie de Mathieu.', 'Cette fille est le mot de Lise, pas du narrateur. EN: Lise’s word.'),
    trap(E(1473), 'la voix perdue', 'Le texte ne donne jamais la voix de Lise.', 'Il la donne, sans guillemets. EN: without quotation marks.'),
    trap(E(1474), 'l’exclamation ignorée', 'Les exclamations sont des fautes de style.', 'Elles signalent la voix du personnage. EN: they signal the voice.'),
    trap(E(1478), 'le verbe cherché', 'Sans verbe de parole, personne ne parle.', 'Cherche les marques de la voix, pas le verbe. EN: look for the voice.'),
    trap(E(1479), 'les guillemets gardés', 'Au discours indirect, on garde les guillemets.', 'Au discours indirect, que remplace les guillemets. EN: que replaces the quotes.'),
  ],
  drill: [
    { promptSay: '« Il a encore oublié », se dit-elle. C’est du discours ... .', opts: ['direct', 'indirect'], correct: 0 },
    { promptSay: 'Elle se dit qu’il avait encore oublié. C’est du discours ... .', opts: ['direct', 'indirect'], correct: 1 },
    { promptSay: 'Il avait encore oublié, évidemment ! C’est du style indirect ... .', opts: ['libre', 'direct'], correct: 0 },
    { promptSay: 'Au style indirect libre, on entend la voix du ... .', opts: ['personnage', 'lecteur'], correct: 0 },
    { promptSay: 'Au discours indirect, la parole passe par ... .', opts: ['que', 'des guillemets', 'un tiret'], correct: 0 },
    { promptSay: '« Qu’il se débrouille. » Ces mots viennent de ... .', opts: ['Lise', 'Mathieu', 'l’auteur'], correct: 0 },
    { promptSay: 'Le narrateur ne ... pas l’amie de Mathieu.', opts: ['juge', 'connaît'], correct: 0 },
    { promptSay: 'Sans verbe de parole, cherche les exclamations et les ... .', opts: ['questions', 'dates'], correct: 0 },
  ],
  steps: STEPS('Sans guillemets, ce n’est pas forcément le narrateur', 'Six phrases mal attribuées'),
  audio: REC('rec-b2-30-piege-libre'), say: REFRAME, terms: ['indirect'],
};

const A5_COMMENTAIRE = pourTonCommentaire('a5-commentaire', 'Tu rends la pensée à son personnage', [
  grp('À qui est cette colère ?', [
    it(E(1472), 'la bonne attribution'),
    free('Le narrateur trouve que Mathieu est égoïste.', 'The narrator thinks Mathieu is selfish.', 'une erreur d’attribution'),
  ], chk('Laquelle peut entrer dans ton commentaire ?', ['« C’est Lise qui pense que son fils a oublié, pas le narrateur. »', '« Le narrateur trouve que Mathieu est égoïste. »'], 0,
    'Rends la pensée à celui qui la porte. EN: give the thought back to its owner.')),
  grp('Le procédé et son effet', [
    it(E(1473), 'le procédé'),
    it(E(1476), 'son nom'),
  ], chk('Qu’apporte le style indirect libre à ce passage ?', ['on entend la colère de Lise de l’intérieur', 'le texte devient plus neutre'], 0,
    'Le lecteur vit la colère avec elle, puis la voit fondre. EN: we feel her anger from inside.')),
], ['indirect', 'narrateur']);

const A5_TEXTE = dansUnTexte('a5-texte', 'La lettre de la banque', DANS_A5, [
  { q: 'Relève deux phrases au style indirect libre.', a: '« Encore un refus ! », « Trente ans qu’il payait ses factures à l’heure… », « qu’est-ce qu’ils connaissaient de la vie ? » : la colère de M. Bélanger, sans guillemets.' },
  { q: 'Quelle phrase rapporte une parole au discours indirect ?', a: '« Sa femme [...] lui demanda ce que c’était » : pas de guillemets, et le temps du récit.' },
  { q: 'Et au discours direct ?', a: '« Rien, dit-il. De la publicité. » : les mots exacts, entre guillemets, avec une incise.' },
  { q: 'Quel effet produit la dernière réplique ?', a: 'Un contraste triste et presque comique : il ment pour cacher son humiliation, et le lecteur, lui, sait tout.' },
], 'rec-b2-30-texte-a5', ['indirect']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Direct', 'Le discours direct se reconnaît…', ['aux guillemets et aux mots exacts', 'au mot que'], 0,
    'On cite, on ne rapporte pas. EN: quoted, not reported.'),
  ctl('Indirect libre', 'Une phrase au temps du récit, sans guillemets ni que, avec les exclamations d’un personnage, c’est…', ['du discours indirect', 'du style indirect libre'], 1,
    'La voix du personnage, glissée dans le récit. EN: the character’s voice inside the narrative.'),
  ctl('Le piège', '« Évidemment, il avait oublié. » Dans ton commentaire, tu attribues cette pensée…', ['à Lise', 'au narrateur', 'à l’auteure'], 0,
    'Le mot évidemment est le sien. EN: it is her word.'),
], ['indirect']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Les paroles et les pensées',
    opener: {
      line: 'Une mère attend son fils un soir de réveillon, et sa colère glisse dans le récit sans guillemets : ici tu reconnais la voix des personnages. EN: A mother waits for her son on Christmas Eve and her anger slips into the narrative with no quotation marks: here you recognise the characters’ voices.',
      imageRef: 'lessons/lire-litterature/act05.jpg',
    },
    sections: [],
    milestone: 'Tu distingues le discours direct, l’indirect et le style indirect libre, et tu rends chaque pensée à son personnage. EN: You can tell direct, indirect and free indirect speech apart and give each thought back to its character.',
    estScreens: 40, restPoints: ['a5-trois', 'a5-piege'],
  },
  sections: [A5_LECTURE, A5_TROIS, A5_REPERER, A5_PIEGE, A5_COMMENTAIRE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: LA TONALITÉ
 *
 *  TEXT: one missed train, three pages, three tonalités. MOVE: name the
 *  tonalité AND the means that produce it (words, sentence length,
 *  repetition, the gap between style and situation). Goes past lesson 24 in
 *  B2 (irony in non-fiction). THE REQUIRED LISTENING: a lyrical passage read
 *  aloud, with questions on its tone.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE = lecture('a6-lecture', 'Trois pages, un même train', 'Le même quai, trois émotions', TEXTE_TRAINS,
  [],
  [
    { q: 'Devine le sens. « Gérard, beau joueur, lui rendit son salut. » Qu’est-ce qu’un beau joueur ?', a: 'Quelqu’un qui accepte de perdre avec le sourire, sans se fâcher.' },
    { q: 'Question globale. Qu’ont en commun les trois textes, et qu’est-ce qui change ?', a: 'Le même événement, un train sur un quai ; ce qui change, c’est la tonalité : comique, pathétique, dramatique.' },
    { q: 'Détail. Dans le texte C, à quel temps est le récit, et quelle est la longueur des phrases ?', a: 'Au présent, avec des phrases très courtes, parfois d’un ou deux mots : « Deux hommes. », « Quai 4. », « Il saute. »' },
    { q: 'Inférence. Dans le texte B, pourquoi la femme ne court-elle pas ?', a: 'Elle a perdu espoir (« À quoi bon ? ») : on comprend que sa mère est mourante, et qu’elle ne la reverra peut-être pas.' },
    { q: 'Inférence. Dans le texte C, que laisse entendre la dernière phrase ?', a: 'Que les deux hommes vont prévenir quelqu’un à l’arrivée : Karim n’est pas sauvé.' },
    { q: 'Ton et position. Qu’est-ce qui rend le texte A comique ?', a: 'Le décalage : l’exagération (« depuis 1987 »), le chapeau perdu, les portes polies comme un maître d’hôtel, le salut avec le sandwich.' },
  ], 'rec-b2-30-trains', ['tonalite']);

const A6_TONALITES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a6-tonalites', layer: 'core', sheetId: 'sheet-style',
  title: 'Six tonalités et leurs moyens',
  cols: ['Tonalité', 'Ce qu’elle fait ressentir', 'Quelques moyens'],
  rows: [
    { cells: ['comique', 'le rire', 'exagération, décalage'], say: fr(E(1481)),
      detail: { title: 'Le comique', body: 'Il naît d’un décalage : une course désespérée, et un salut avec un sandwich. EN: comedy comes from a gap.', say: fr(E(1486)) } },
    { cells: ['ironique', 'un sourire critique', 'dire autre chose que ce qu’on pense'], say: fr(LIT(1373)),
      detail: { title: 'L’ironie', body: `${Cap(CRITIQUE_REF)} te l’a montrée dans une tribune. Dans un récit, c’est souvent le narrateur qui sourit de ses personnages. EN: in fiction, the narrator often smiles at the characters.`, say: fr(LIT(1182)) } },
    { cells: ['lyrique', 'les émotions d’un je', 'je, images, rythme musical'], say: fr(E(1496)),
      detail: { title: 'Le lyrique', body: 'Un je dit ses sentiments, souvent devant la nature ou le souvenir, avec des images et un rythme qui chante. EN: an I voices its feelings.', say: fr(E(1488)) } },
    { cells: ['pathétique', 'la pitié', 'douleur, solitude, silence'], say: fr(E(1480)),
      detail: { title: 'Le pathétique', body: 'Le texte montre une souffrance pour émouvoir : une femme seule, qui pleure sans bruit. EN: suffering shown to stir pity.', say: fr(E(1484)) } },
    { cells: ['dramatique', 'la tension', 'phrases courtes, présent, danger'], say: fr(E(1487)),
      detail: { title: 'Le dramatique', body: 'Le danger approche, le temps presse : les phrases raccourcissent et le présent accélère. EN: danger, speed, tension.', say: fr(E(1482)) } },
    { cells: ['neutre', 'aucune émotion affichée', 'faits, gestes, verbes simples'], say: fr(E(1443)),
      detail: { title: 'Le neutre', body: 'Le narrateur s’efface : des faits et des gestes. L’émotion, s’il y en a, vient du lecteur. EN: the narrator steps back.', say: fr(E(1438)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['tonalite'],
};

const A6_MOYENS: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-moyens', layer: 'core', size: 'lg',
  title: 'D’où vient l’émotion', frSub: 'Les moyens de la tonalité',
  groups: [
    grp('La longueur des phrases', [
      it(E(1487), 'deux phrases très courtes'),
      it(E(1482), 'le moyen'),
      it(E(1483), 'le contraire'),
    ], chk('« Deux hommes. Quai 4. Il saute. » Ces phrases très courtes créent…', ['de la tension, comme un cœur qui s’accélère', 'une atmosphère calme', 'un effet comique'], 0,
      'Des phrases coupées vont à la vitesse du danger. EN: short sentences move at the speed of danger.')),
    grp('Le décalage', [
      it(E(1486), 'une exagération précise'),
      it(E(1481), 'le moyen'),
      it(LIT(1372), 'la leçon 9 du B2'),
    ], chk('Qu’est-ce qui rend Gérard comique ?', ['le décalage entre sa course désespérée et des détails ridicules', 'le simple fait qu’il rate son train'], 0,
      'Rater un train n’est pas drôle ; le décalage, si. EN: the gap is what is funny.')),
    ctl('La pitié', '« Elle ne courut pas. À quoi bon ? » Ces mots font naître…', ['la pitié : elle a perdu espoir', 'le rire', 'la peur'], 0,
      'Une question sans réponse, un geste qu’elle ne fait pas : la douleur se tait. EN: silent pain stirs pity.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['tonalite'],
};

/** The REQUIRED tone listening. `hideLines`: the questions are about what
 *  the ear caught, and one is about the tone itself. */
const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a6-ecoute', layer: 'core', hideLines: true,
  title: 'Un passage lu à voix haute', frSub: 'Écoute le ton, sans lire',
  lines: [ln(E(1488)), ln(E(1489)), ln(E(1490)), ln(E(1491)), ln(E(1492)), ln(E(1493)), ln(E(1494)), ln(E(1495))],
  questions: [
    { q: 'Quelle est la tonalité de ce passage ?', opts: ['lyrique', 'comique', 'dramatique'], correct: 0, why: 'Un je, ses souvenirs, ses émotions, des images, un rythme lent : c’est lyrique. EN: lyrical.' },
    { q: 'Qui exprime ses sentiments ?', opts: ['une femme qui dit je et se souvient', 'un narrateur extérieur'], correct: 0, why: 'Je suis revenue : une voix au féminin, qui parle de son passé. EN: a woman speaking as I.' },
    { q: 'À qui la voix s’adresse-t-elle quand elle dit « ta voix » ?', opts: ['à une personne aimée, absente', 'au lecteur', 'à la mer'], correct: 0, why: 'Nous marchions autrefois : quelqu’un qui n’est plus là. EN: someone who is gone.' },
    { q: 'À quoi les mouettes sont-elles comparées ?', opts: ['à des pensées', 'à des vagues', 'à des enfants'], correct: 0, why: 'Des pensées qui ne se posent pas : l’esprit ne trouve pas le repos. EN: restless thoughts.' },
    { q: 'Quel rythme la lecture donne-t-elle au texte ?', opts: ['lent et régulier, comme des vagues', 'rapide et haché, comme une poursuite'], correct: 0, why: 'Des phrases amples et calmes accompagnent le souvenir. EN: slow and even.' },
  ],
  audio: REC('rec-b2-30-ecoute-plage'), say: REFRAME, terms: ['tonalite'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a6-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre remarques sur le ton à compléter',
  errors: [
    { wrong: 'Le ton est triste.', right: fr(E(1480)),
      why: 'Normal : triste est le premier mot qui vient. Nomme la tonalité, puis montre ce qui la crée. EN: name the tone, then its means.' },
    { wrong: 'Le texte A est comique parce qu’il est drôle.', right: fr(E(1481)),
      why: 'Le raisonnement tourne en rond. Dis d’où vient le rire : le décalage. EN: say where the laughter comes from.' },
    { wrong: 'Il y a beaucoup de phrases courtes.', right: fr(E(1482)),
      why: 'Un procédé sans effet ne commente rien. Ajoute ce qu’il produit. EN: add the effect.' },
    { wrong: 'L’auteur est triste quand il écrit.', right: fr(E(1485)),
      why: 'Le texte ne dit rien de l’auteur : commente l’émotion qu’il fait naître chez le lecteur. EN: comment on the effect, not the author.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['tonalite'],
};

const A6_COMMENTAIRE = pourTonCommentaire('a6-commentaire', 'La tonalité, avec ses moyens', [
  grp('Le texte C', [
    it(E(1482), 'le moyen et l’effet'),
    free('Le texte C est dramatique.', 'Text C is dramatic.', 'la tonalité seule'),
  ], chk('Laquelle est une phrase de commentaire complète ?', ['« Les phrases courtes accélèrent le rythme et créent la tension. »', '« Le texte C est dramatique. »'], 0,
    'Le moyen et l’effet prouvent la tonalité. EN: means and effect prove the tone.')),
  grp('La voix de la plage', [
    it(E(1496), 'la tonalité, expliquée'),
    free('Le texte parle de la mer.', 'The text is about the sea.', 'le sujet, pas la tonalité'),
  ], chk('Laquelle nomme la tonalité, et non le sujet ?', ['« La tonalité est lyrique : le je exprime ses émotions. »', '« Le texte parle de la mer. »'], 0,
    'La mer est le sujet ; le lyrisme est la façon d’en parler. EN: the sea is the topic; lyricism is the tone.')),
], ['tonalite']);

const A6_TEXTE = dansUnTexte('a6-texte', 'Le discours du directeur', DANS_A6, [
  { q: 'Quelle est la tonalité de ce texte ?', a: 'Ironique : le narrateur rapporte les mots du directeur pour mieux les critiquer.' },
  { q: 'Relève deux moyens de cette ironie.', a: 'Les guillemets autour des mots du directeur (« efforts exceptionnels », « la grande famille ») et le contraste entre « avec émotion » et « la suppression de trois postes ».' },
  { q: '« C’était plus prudent. » Que laisse entendre cette phrase ?', a: 'Que les salariés applaudissent par peur, et non par conviction.' },
  { q: 'Qui sourit, dans ce texte, et de qui ?', a: 'Le narrateur, du directeur : il ne dit jamais son avis, il le fait entendre par le choix des mots.' },
], 'rec-b2-30-texte-a6', ['tonalite']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Nommer', 'Une tonalité se prouve…', ['par ses moyens : mots, rythme, images', 'par l’humeur de l’auteur'], 0,
    'Le texte seul fait preuve. EN: the text is the only evidence.'),
  ctl('Le pathétique', 'Un texte qui montre une souffrance pour faire naître la pitié est…', ['comique', 'pathétique', 'neutre'], 1,
    'Pathétique, au sens littéraire : qui émeut. EN: pathetic, in the literary sense.'),
  ctl('Le rythme', 'Des phrases très courtes, au présent, dans une poursuite, créent…', ['de la tension', 'du calme'], 0,
    'Le rythme suit le danger. EN: rhythm follows danger.'),
], ['tonalite']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'La tonalité',
    opener: {
      line: 'Le même train part trois fois, et tu ris, puis tu as pitié, puis tu as peur : ici tu dis comment un texte fabrique une émotion. EN: The same train leaves three times, and you laugh, then pity, then fear: here you say how a text makes a feeling.',
      imageRef: 'lessons/lire-litterature/act06.jpg',
    },
    sections: [],
    milestone: 'Tu nommes une tonalité et tu montres les mots, le rythme et les images qui la créent. EN: You can name a tone and show the words, rhythm and images that create it.',
    estScreens: 42, restPoints: ['a6-tonalites', 'a6-ecoute'],
  },
  sections: [A6_LECTURE, A6_TONALITES, A6_MOYENS, A6_ECOUTE, A6_ERREURS, A6_COMMENTAIRE, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: LES IMAGES
 *
 *  TEXT: a storm on Lake Geneva at Ouchy. MOVE: comparaison (with a linking
 *  word), métaphore (without), personnification, the extended metaphor
 *  (Nelligan), and ALWAYS the effect. Trap: the causal « comme ».
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE = lecture('a7-lecture', 'L’orage sur le Léman', 'Un roman, à Lausanne', TEXTE_ELISE,
  [{ word: 'ardoise', en: 'slate', note: 'Une pierre gris-bleu, dont on couvre les toits.' }],
  [
    { q: 'Devine le sens. « un vieux lion endormi, qu’on ne réveillait jamais impunément ». Que veut dire « impunément » ?', a: 'Sans en payer le prix, sans être puni.' },
    { q: 'Question globale. Que décrit ce passage, et que ressent Élise à la fin ?', a: 'Un orage sur le lac Léman ; loin d’avoir peur, Élise se sent vivante pour la première fois depuis des mois.' },
    { q: 'Détail. Relève deux comparaisons et leur outil.', a: '« comme un chat sur un coussin bleu », « comme des chiens impatients », « pareilles à des pièces de monnaie » : comme, pareilles à.' },
    { q: 'Inférence. Pourquoi le père voit-il dans le Léman un vieux lion endormi ?', a: 'Pour dire qu’il paraît calme mais reste dangereux : il ne faut pas s’y fier.' },
    { q: 'Inférence. Quel lien y a-t-il entre l’orage et Élise ?', a: 'L’orage réveille le lac comme il la réveille, elle qui vivait « derrière une vitre » depuis l’hiver.' },
    { q: 'Ton et position. Quelle impression donne le vent qui « courut dans les rues » ?', a: 'Le vent devient un être vivant, presque un enfant turbulent : la scène est menaçante et joyeuse à la fois.' },
  ], 'rec-b2-30-elise', ['images']);

const A7_IMAGES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a7-images', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-style',
  title: 'Trois images, et leur effet', frSub: 'Comparaison, métaphore, personnification',
  hint: 'Quatre cartes. Cherche d’abord s’il y a un outil comme comme.',
  audio: REC('rec-b2-30-images'), say: REFRAME, terms: ['images'],
  cards: [
    { head: 'La comparaison', label: 'avec un outil', fr: fr(E(1500)), sub: rsOf(E(1500)),
      body: 'Deux choses et un outil : comme, tel, pareil à, semblable à, on aurait dit. Effet : rendre la scène concrète, visible. EN: two things and a linking word; it makes the scene visible.' },
    { head: 'La métaphore', label: 'sans outil', fr: fr(E(1501)), sub: rsOf(E(1501)),
      body: 'Le texte dit que l’un est l’autre. L’image est plus forte : le ciel devient une mer menaçante, suspendue au-dessus d’Élise. EN: one thing is the other; the image is stronger.' },
    { head: 'La personnification', label: Cap(PASSE_SIMPLE_REF), fr: fr(LIT(1147)),
      body: 'Une chose reçoit une vie humaine : la maison dort, le vent court. Effet : le décor devient vivant, parfois menaçant. EN: a thing given human life.' },
    { head: 'La métaphore filée', label: Q_NELLIGAN_1.source, fr: Q_NELLIGAN_1.fr,
      body: `Tout le sonnet file une seule image : le vaisseau est le cœur du poète, qui finit par le dire : « ${Q_NELLIGAN_2.fr} » EN: one image carried through a whole poem.` },
  ],
};

const A7_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-trier', layer: 'core', size: 'lg',
  title: 'Avec un outil, ou sans', frSub: 'Repère, nomme, puis dis l’effet',
  groups: [
    grp('Comparaison ou métaphore', [
      it(E(1499), 'le lac, le matin'),
      it(E(1503), 'le lac, selon le père'),
      it(E(1513), 'le ciel, autrement'),
      it(LIT(1300), 'la leçon 9 du B2'),
    ], chk('« Le Léman était un vieux lion endormi. » C’est…', ['une métaphore : il n’y a pas d’outil', 'une comparaison'], 0,
      'Pas de comme, pas de pareil à : le lac EST un lion. EN: no linking word.')),
    grp('Des choses qui vivent', [
      it(E(1502), 'le vent'),
      it(E(1506), 'le nom de l’image'),
      it(LIT(1147), 'la maison'),
    ], chk('Dans ces phrases, le vent et la maison…', ['agissent comme des personnes : ce sont des personnifications', 'sont comparés à des animaux'], 0,
      'Courir, renverser, dormir : des gestes humains donnés aux choses. EN: human gestures given to things.')),
    ctl('L’effet', 'Le lac dort « comme un chat » le matin ; pour le père, c’est « un vieux lion endormi ». Quel effet ?', ['sous le calme, une menace qui peut se réveiller', 'rien ne change'], 0,
      'Un chat, puis un lion qui dort : le calme cache une force, et l’orage la réveille. EN: calm hiding a threat.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['images'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a7-piege', layer: 'core', swipe: true,
  title: 'Six images mal nommées',
  rule: {
    title: 'Un outil, pas d’outil, et toujours un effet',
    body: 'Avec comme, tel ou on aurait dit : une comparaison. Sans outil : une métaphore. Une chose qui agit en personne : une personnification. Mais comme peut aussi dire la cause. EN: check for a linking word, and check that comme really compares.',
  },
  cards: [
    trap(E(1500), 'la comparaison appelée métaphore', 'Les voiliers sont une métaphore de chiens.', 'Il y a comme : c’est une comparaison. EN: comme makes it a comparison.'),
    trap(E(1501), 'la métaphore appelée comparaison', 'Le ciel est comparé à une mer grâce à comme.', 'Il n’y a pas de comme : le ciel est une mer. EN: no comme here.'),
    trap(E(1513), 'on aurait dit, oublié', 'Sans comme, ce n’est pas une comparaison.', 'On aurait dit est aussi un outil. EN: on aurait dit compares too.'),
    trap(E(1509), 'le comme de la cause', 'Comme il pleuvait est une comparaison.', 'Ici, comme veut dire parce que : aucune image. EN: here comme means because.'),
    trap(E(1506), 'la personnification oubliée', 'Le vent est décrit de façon réaliste.', 'Le vent court et renverse : il agit en personne. EN: the wind acts like a person.'),
    trap(E(1507), 'l’image sans effet', 'Il y a une comparaison dans le texte.', 'Dis ce qu’elle fait voir ou sentir. EN: say what it shows.'),
  ],
  drill: [
    { promptSay: 'Le ciel était une mer à l’envers : c’est une ... .', opts: ['métaphore', 'comparaison'], correct: 0 },
    { promptSay: 'Pareil à est un outil de ... .', opts: ['comparaison', 'métaphore'], correct: 0 },
    { promptSay: '« Comme il pleuvait, elle est rentrée. » Ici, comme dit la ... .', opts: ['cause', 'comparaison'], correct: 0 },
    { promptSay: 'Le vent courut dans les rues : c’est une ... .', opts: ['personnification', 'ellipse'], correct: 0 },
    { promptSay: '« On aurait dit une mer à l’envers » : c’est une ... .', opts: ['comparaison', 'métaphore'], correct: 0 },
    { promptSay: 'Un poème entier bâti sur une seule image : une métaphore ... .', opts: ['filée', 'courte', 'simple'], correct: 0 },
    { promptSay: 'Nommer l’image ne suffit pas : dis son ... .', opts: ['effet', 'auteur'], correct: 0 },
    { promptSay: 'Dans le sonnet de Nelligan, le vaisseau est le ... du poète.', opts: ['cœur', 'bateau'], correct: 0 },
  ],
  steps: STEPS('Un outil, pas d’outil, et toujours un effet', 'Ce qu’un lecteur pressé a noté'),
  audio: REC('rec-b2-30-piege-images'), say: REFRAME, terms: ['images'],
};

const A7_COMMENTAIRE = pourTonCommentaire('a7-commentaire', 'L’image, puis ce qu’elle fait', [
  grp('Repérer ou commenter', [
    it(E(1507), 'l’image et son effet'),
    free('Il y a une comparaison dans la deuxième phrase.', 'There is a comparison in the second sentence.', 'un repérage sans effet'),
  ], chk('Laquelle vaut des points dans un commentaire ?', ['« Cette comparaison rend l’orage concret et presque vivant. »', '« Il y a une comparaison dans la deuxième phrase. »'], 0,
    'Repérer est un début ; commenter, c’est dire l’effet. EN: spotting is a start; commenting names the effect.')),
  grp('Relier l’image au personnage', [
    it(E(1508), 'le décor et Élise'),
    it(E(1511), 'l’image qui continue'),
  ], chk('« L’orage réveille le lac comme il réveille Élise. » Ce commentaire…', ['relie les images du décor à ce que vit le personnage', 'décrit seulement la météo'], 0,
    'Le décor parle du personnage : c’est une lecture. EN: the setting speaks of the character.')),
], ['images']);

const A7_TEXTE = dansUnTexte('a7-texte', 'La ville se réveille', DANS_A7, [
  { q: 'Relève deux personnifications.', a: 'Les réverbères « fatigués d’avoir veillé » et le marronnier qui « étirait ses branches » : la ville se réveille comme une personne.' },
  { q: 'Relève une comparaison et son outil.', a: '« comme une rumeur heureuse » : l’odeur du pain se répand comme une bonne nouvelle.' },
  { q: '« Son cœur était un tambour. » Quelle image, et quel effet ?', a: 'Une métaphore : son cœur bat fort et fait du bruit. Elle a couru, ou elle est émue.' },
  { q: 'Dans « en retard, comme toujours », y a-t-il une comparaison ?', a: 'Non : comme toujours veut dire « une fois de plus ». Il n’y a pas d’image.' },
  { q: 'Que prépare la dernière phrase ?', a: '« Il était là » : quelqu’un d’attendu, ou de redouté. Le cœur-tambour prend alors tout son sens.' },
], 'rec-b2-30-texte-a7', ['images']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('L’outil', 'Une comparaison se reconnaît…', ['à un outil : comme, tel, pareil à, on aurait dit', 'à l’absence d’outil'], 0,
    'Sans outil, c’est une métaphore. EN: without one, it is a metaphor.'),
  ctl('La personnification', '« Les réverbères, fatigués d’avoir veillé » : c’est…', ['une comparaison', 'une personnification', 'une ellipse'], 1,
    'Des objets fatigués comme des personnes. EN: objects tired like people.'),
  ctl('L’effet', 'Dans un commentaire, après avoir nommé une image, tu…', ['dis ce qu’elle fait voir ou sentir', 'passes à l’image suivante'], 0,
    'Une image sans effet ne rapporte rien. EN: an image without its effect earns nothing.'),
], ['images']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Les images',
    opener: {
      line: 'Le lac dort comme un chat, puis devient un vieux lion : ici tu nommes les images, et tu dis ce qu’elles font voir. EN: The lake sleeps like a cat, then turns into an old lion: here you name the images and say what they make you see.',
      imageRef: 'lessons/lire-litterature/act07.jpg',
    },
    sections: [],
    milestone: 'Tu distingues la comparaison, la métaphore et la personnification, et tu dis toujours leur effet. EN: You can tell comparison, metaphor and personification apart, and always say what they do.',
    estScreens: 40, restPoints: ['a7-images', 'a7-piege'],
  },
  sections: [A7_LECTURE, A7_IMAGES, A7_TRIER, A7_PIEGE, A7_COMMENTAIRE, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: DÉCRIRE, FAIRE UN PORTRAIT
 *
 *  TEXT: the ferryman of an invented island. MOVE: read the order of a
 *  portrait, the detail that reveals, the gestures that tell a character,
 *  the narrator's gaze in the adjectives; the gérondif and the adjectif
 *  verbal (lessons 12 and 13 in B2) read inside a portrait. IN A TEXT:
 *  Zola's first sentence, the one real quotation long enough to analyse.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE = lecture('a8-lecture', 'Le passeur de l’île aux Hérons', 'Un portrait, sur le fleuve', TEXTE_FORTIN,
  [{ word: 'ciré', en: 'oilskin coat', note: 'Un manteau imperméable de marin.' }],
  [
    { q: 'Devine le sens. « On le disait bourru. » Qu’est-ce qu’un homme bourru ?', a: 'Un homme qui a l’air rude et peu aimable, sans être méchant.' },
    { q: 'Question globale. Qui est le père Fortin, et dans quel ordre le texte le présente-t-il ?', a: 'Le passeur de l’île. D’abord son corps (silhouette, mains, yeux), puis sa parole, son caractère, ses gestes, enfin son passé.' },
    { q: 'Détail. Que garde-t-il dans la poche de son ciré ?', a: 'Des bonbons à la menthe, pour les enfants de l’île.' },
    { q: 'Inférence. Pourquoi reste-t-il au quai les jours de grand vent ?', a: 'À cause de son frère, mort dans une tempête : sa prudence vient de ce deuil, dont il ne parle pas.' },
    { q: 'Inférence. Que révèle la pipe qu’il n’allume jamais ?', a: 'Une habitude qui compte plus que le tabac, peut-être un souvenir. Le détail rend le personnage mystérieux.' },
    { q: 'Ton et position. Le narrateur aime-t-il son personnage ? Justifie.', a: 'Oui : il corrige l’image de l’homme bourru par les bonbons et parle de son deuil avec pudeur.' },
  ], 'rec-b2-30-fortin', ['portrait']);

const A8_FONCTIONS: Sec<'examples'> = {
  type: 'examples', id: 'a8-fonctions', layer: 'core', sheetId: 'sheet-style',
  title: 'Ce que fait un portrait',
  examples: [
    ex(E(1519), 'le corps dit le caractère'),
    ex(E(1520), 'un détail, un secret'),
    ex(E(1521), 'les gestes plutôt que les adjectifs'),
    ex(E(1522), 'la pause dans le récit'),
    ex(E(1524), 'le regard du narrateur'),
    ex(PORTRAIT_RULE, `${Cap(PORTRAIT_REF)} : la méthode pour écrire un portrait, reprise ici pour le lire`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['portrait'],
};

const A8_LIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-lire', layer: 'core', size: 'lg',
  title: 'Lire un portrait', frSub: 'Le corps, les gestes, les mots',
  groups: [
    grp('Le corps et le caractère', [
      it(E(1514), 'la silhouette'),
      it(E(1515), 'le regard'),
      it(E(1516), 'la réputation, et la vérité'),
    ], chk('« taillé comme une souche » fait du passeur…', ['un homme solide, enraciné, difficile à faire bouger', 'un homme fragile'], 0,
      'La comparaison annonce l’homme qui ne cède pas, même au maire. EN: a man who will not budge.')),
    grp('Les gestes', [
      it(E(1527), 'un geste répété'),
      it(E(1517), 'un détail étrange'),
      it(GER, 'la leçon 12 du B2'),
    ], chk(`« Il s’asseyait à l’arrière du bateau en fumant sa pipe. » ${Cap(GERONDIF_REF)} : qui fume ?`, ['il, le sujet de s’asseyait', 'le bateau'], 0,
      `« ${B212_REFRAME} » EN: ${B212_REFRAME_EN}`)),
    ctl('L’adjectif verbal', `${Cap(PARTICIPE_REF)} : dans « une histoire émouvante », émouvante est…`, ['un adjectif : il s’accorde et dit une qualité', 'un participe présent'], 0,
      `« ${B213_REFRAME} » EN: ${B213_REFRAME_EN}`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['portrait'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a8-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre remarques sur le portrait à reprendre',
  errors: [
    { wrong: 'Le texte décrit un homme petit et large.', right: fr(E(1519)),
      why: 'Normal : on commence par voir. Mais un commentaire dit ce que le physique annonce. EN: say what the body announces.' },
    { wrong: 'La description arrête l’histoire : elle ne sert à rien.', right: fr(E(1522)),
      why: 'Elle ralentit le récit pour que le lecteur connaisse le personnage avant d’agir avec lui. EN: it slows the story on purpose.' },
    { wrong: 'Le père Fortin est méchant.', right: fr(E(1523)),
      why: 'On le dit bourru ; le texte le montre généreux. Attention à qui porte le jugement. EN: watch who is judging.' },
    { wrong: 'Il y a beaucoup d’adjectifs dans le portrait.', right: fr(E(1524)),
      why: 'Compter les adjectifs ne dit rien. Dis ce qu’ils montrent du regard du narrateur. EN: say what they show.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['portrait'],
};

const A8_COMMENTAIRE = pourTonCommentaire('a8-commentaire', 'Ce que le portrait révèle', [
  grp('Le détail qui compte', [
    it(E(1520), 'le détail, et son sens'),
    free('Il fume la pipe.', 'He smokes a pipe.', 'un détail recopié'),
  ], chk('Laquelle est une phrase de commentaire ?', ['« Un détail révèle un secret : la pipe qu’il n’allume jamais. »', '« Il fume la pipe. »'], 0,
    'Recopier un détail ne dit pas ce qu’il révèle. EN: copying a detail is not commenting.')),
  grp('Le regard du narrateur', [
    it(E(1524), 'les adjectifs'),
    it(E(1521), 'les gestes'),
  ], chk('Qu’est-ce qui montre la tendresse du narrateur pour le passeur ?', ['les bonbons pour les enfants, et le deuil dit avec pudeur', 'la liste de ses défauts'], 0,
    'Le narrateur corrige la rumeur par des faits. EN: he corrects the rumour with facts.')),
], ['portrait']);

const A8_TEXTE = dansUnTexte('a8-texte', 'La première phrase de Germinal', DANS_A8, [
  { q: 'Quelle atmosphère cette phrase crée-t-elle ?', a: 'Sombre et vide : la nuit « sans étoiles », la plaine « rase », l’encre. On sent la solitude et la dureté du monde.' },
  { q: 'Relève une image et dis son effet.', a: '« d’une épaisseur d’encre » : la nuit devient presque matière, noire et épaisse ; on ne voit rien.' },
  { q: 'Que sait-on de l’homme ?', a: 'Dans la phrase elle-même, presque rien, sinon qu’il marche « seul ». Le paysage parle pour lui : un homme perdu dans un monde immense.' },
  { q: 'Quel effet produit la route qui va « tout droit » sur dix kilomètres ?', a: 'Une impression de longueur et d’effort : le chemin semble sans fin. Coupant est un participe présent, comme dans la leçon 13 du B2.' },
], 'rec-b2-30-texte-a8', ['portrait']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La fonction', 'Une description dans un roman…', ['fait connaître un personnage ou installe une atmosphère', 'ne sert qu’à décorer'], 0,
    'Elle ralentit le récit pour dire quelque chose. EN: it slows the story to say something.'),
  ctl('Le détail', 'Dans un portrait, un détail inattendu sert souvent à…', ['révéler un secret ou un caractère', 'remplir la page', 'finir le chapitre'], 0,
    'La pipe jamais allumée, les bonbons cachés. EN: an unexpected detail reveals.'),
  ctl('Le jugement', '« On le disait bourru. » Qui porte ce jugement ?', ['les gens de l’île', 'le narrateur'], 0,
    'On, la rumeur ; le narrateur la corrige. EN: the rumour, not the narrator.'),
], ['portrait']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Décrire, faire un portrait',
    opener: {
      line: 'Un passeur au regard bleu garde des bonbons dans son ciré : ici tu lis ce qu’un portrait révèle, au-delà de ce qu’il montre. EN: A blue-eyed ferryman keeps sweets in his oilskin: here you read what a portrait reveals beyond what it shows.',
      imageRef: 'lessons/lire-litterature/act08.jpg',
    },
    sections: [],
    milestone: 'Tu commentes un portrait ou une description par ce qu’ils révèlent : le caractère, le détail, le regard du narrateur. EN: You can comment on a portrait or description by what it reveals.',
    estScreens: 36, restPoints: ['a8-fonctions', 'a8-erreurs'],
  },
  sections: [A8_LECTURE, A8_FONCTIONS, A8_LIRE, A8_ERREURS, A8_COMMENTAIRE, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: LE DÉBUT ET LA FIN
 *
 *  TEXT: a complete short story that opens in medias res and ends on a
 *  double twist. MOVE: what an incipit does (four real ones), what a chute
 *  does (two real ones), and how the end makes you reread the start.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE = lecture('a9-lecture', 'La voisine la plus attentive', 'Une nouvelle, du début à la fin', TEXTE_KABORE,
  [{ word: 'cambriolages', en: 'burglaries', note: 'Des vols commis en entrant de force chez quelqu’un.' }],
  [
    { q: 'Devine le sens. « Mme Kaboré retint son souffle. » Que fait-elle ?', a: 'Elle arrête de respirer un instant, parce qu’elle a peur ou qu’elle attend quelque chose.' },
    { q: 'Question globale. Quel est le genre de ce texte, et comment finit-il ?', a: 'Une nouvelle à chute : le suspect est le nouveau boulanger, qui livre les hôtels la nuit.' },
    { q: 'Détail. Qu’y avait-il dans le grand sac noir ?', a: 'Des baguettes, des croissants et une trentaine de pains au chocolat.' },
    { q: 'Inférence. Pourquoi la nouvelle commence-t-elle par une question de la policière ?', a: 'C’est un début in medias res : on entre dans l’action sans explication, et on veut savoir qui est « lui ».' },
    { q: 'Inférence. Que montre le mot du boulanger ?', a: 'Qu’il a compris et ne lui en veut pas : il répond au soupçon par la gentillesse, avec un peu d’humour.' },
    { q: 'Ton et position. Quelle est la tonalité de la dernière phrase ?', a: 'Ironique : les coupables sont ceux qu’on ne soupçonnait pas, et Mme Kaboré s’était trompée de cible.' },
  ], 'rec-b2-30-kabore', ['incipit']);

const A9_INCIPITS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a9-incipits', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-genres',
  title: 'Quatre premières phrases célèbres', frSub: 'Ce que fait un incipit',
  hint: 'Quatre cartes. Pour chacune : qu’apprend-on, et qu’a-t-on envie de savoir ?',
  audio: REC('rec-b2-30-incipits'), say: REFRAME, terms: ['incipit'],
  cards: [
    { head: 'Un demi-siècle en une phrase', label: Q_COEUR.source, fr: Q_COEUR.fr,
      body: 'Un lieu, deux personnages, cinquante ans résumés : un sommaire. Et une question : pourquoi envier une servante ? EN: a summary opening that raises a question.' },
    { head: 'Une voix qui se souvient', label: Q_PROUST.source, fr: Q_PROUST.fr,
      body: 'Un je, une habitude, un passé composé : pas d’action, mais la voix de la mémoire qui portera tout le roman. EN: the voice of memory, not an action.' },
    { head: 'Un portrait et un destin', label: Q_PARURE_1.source, fr: Q_PARURE_1.fr,
      body: '« comme par une erreur du destin » : le narrateur annonce le rêve de l’héroïne, et le malheur qui vient. EN: the opening hints at the heroine’s fate.' },
    { head: 'Un conte qui annonce sa fin', label: Q_SEGUIN_1.source, fr: Q_SEGUIN_1.fr,
      body: 'La première phrase du conte, après la lettre au poète Gringoire : une série de malheurs, et le lecteur devine déjà ce qui attend la chèvre. EN: the tale’s first sentence foreshadows the end.' },
  ],
};

const A9_FONCTIONS: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-fonctions', layer: 'core', size: 'lg',
  title: 'Commencer, finir', frSub: 'Ce que font l’incipit et la chute',
  groups: [
    grp('L’incipit', [
      it(E(1528), 'la première phrase de la nouvelle'),
      it(E(1535), 'ses trois rôles'),
      it(E(1536), 'ce qu’on sait, ce qu’on ignore'),
      it(LIT(1191), 'la leçon 8 du B2'),
    ], chk('« Vous êtes sûre que c’est lui ? » Comme première phrase, elle…', ['jette le lecteur au milieu de l’action', 'présente le décor', 'résume toute l’histoire'], 0,
      'Qui parle, à qui, de qui ? On l’apprend en lisant : c’est un début in medias res. EN: we start in the middle of things.')),
    grp('La chute', [
      it(E(1530), 'ce que contenait le sac'),
      it(E(1534), 'son effet'),
      it(E(1538), 'l’erreur du personnage'),
    ], chk('Pourquoi relit-on la nouvelle autrement après la chute ?', ['chaque indice contre le voisin prend un autre sens', 'on a oublié le début'], 0,
      'Les sorties de nuit et le sac noir étaient ceux d’un boulanger. EN: every clue changes meaning.')),
    ctl('Le pacte', 'L’incipit et la chute se répondent. Dans la nouvelle, le début promet…', ['un coupable, et la fin en désigne un autre', 'une histoire d’amour'], 0,
      'Le début pose une question ; la chute y répond par surprise. EN: the end answers the opening, by surprise.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['incipit'],
};

const A9_CHUTES: Sec<'examples'> = {
  type: 'examples', id: 'a9-chutes', layer: 'core', sheetId: 'sheet-genres',
  title: 'Des fins qui changent tout',
  examples: [
    { fr: Q_PARURE_FIN.fr, en: Q_PARURE_FIN.en, note: `${Q_PARURE_FIN.source} : le collier perdu, remplacé à grand prix, était faux` },
    { fr: Q_SEGUIN_FIN.fr, en: Q_SEGUIN_FIN.en, note: `${Q_SEGUIN_FIN.source} : la fin annoncée dès la première phrase` },
    ex(E(1538), 'la chute de la nouvelle de l’acte'),
    ex(E(1537), 'l’effet d’une chute'),
    ex(LIT(1198), 'la leçon 8 du B2 : le mot du lecteur'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['incipit'],
};

const A9_COMMENTAIRE = pourTonCommentaire('a9-commentaire', 'Le début, la fin, et leur effet', [
  grp('Commenter un début', [
    it(E(1531), 'le type de début, et son effet'),
    free('Le texte commence par une question.', 'The text begins with a question.', 'un constat'),
  ], chk('Laquelle commente vraiment l’incipit ?', ['« L’incipit nous jette au milieu de l’action. »', '« Le texte commence par une question. »'], 0,
    'Dis ce que fait le début au lecteur. EN: say what the opening does to the reader.')),
  grp('Commenter une fin', [
    it(E(1534), 'la chute'),
    it(E(1537), 'la relecture'),
  ], chk('Que dit ton commentaire d’une chute ?', ['ce qu’elle renverse et comment elle change la lecture', 'qu’elle arrive à la fin'], 0,
    'Une chute se commente par son effet sur tout le texte. EN: comment on its effect on the whole text.')),
], ['incipit']);

const A9_TEXTE = dansUnTexte('a9-texte', 'Un aller simple pour Tunis', DANS_A9, [
  { q: 'Qu’apprend-on dans cet incipit : qui, quand, où ?', a: 'Hélène Morin, la veille de ses quarante ans, part de chez elle pour Tunis.' },
  { q: 'Que cache-t-il, et pourquoi ?', a: 'Qui est Salah, et pourquoi la mère a dit « Ne cherche jamais à savoir » : le texte crée une énigme pour donner envie de lire.' },
  { q: 'Quel est l’effet des trois phrases courtes au milieu ?', a: '« Elle n’avait jamais pris l’avion. Elle ne parlait pas l’arabe. [...] » : elles montrent tout ce qui rend ce départ fou, et le courage d’Hélène.' },
  { q: 'Que dit la dernière phrase ?', a: '« Hélène avait attendu vingt ans » : une analepse qui révèle une longue patience ; ce départ est une décision mûrie, pas un caprice.' },
], 'rec-b2-30-texte-a9', ['incipit']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('L’incipit', 'Un incipit sert surtout à…', ['informer, intriguer et donner le ton', 'résumer toute l’histoire'], 0,
    'Il donne envie de lire la suite. EN: it makes you read on.'),
  ctl('In medias res', 'Un début qui entre directement dans l’action est…', ['in medias res', 'un sommaire', 'une chute'], 0,
    'Au milieu des choses, sans présentation. EN: in the middle of things.'),
  ctl('La chute', 'La chute d’une nouvelle…', ['surprend et fait relire le texte autrement', 'répète le début'], 0,
    'Elle renverse ce que le lecteur croyait. EN: it overturns what the reader believed.'),
], ['incipit']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Le début et la fin',
    opener: {
      line: 'Une voisine accuse l’homme du quatrième, et la dernière page lui donne tort : ici tu lis ce que promettent un début et une fin. EN: A neighbour accuses the man on the fourth floor and the last page proves her wrong: here you read what an opening promises and an ending delivers.',
      imageRef: 'lessons/lire-litterature/act09.jpg',
    },
    sections: [],
    milestone: 'Tu dis ce que fait un incipit et comment une chute change la lecture de tout le texte. EN: You can say what an opening does and how a twist ending changes the whole text.',
    estScreens: 36, restPoints: ['a9-incipits', 'a9-chutes'],
  },
  sections: [A9_LECTURE, A9_INCIPITS, A9_FONCTIONS, A9_CHUTES, A9_COMMENTAIRE, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: ROMAN, NOUVELLE, CONTE, POÈME, THÉÂTRE
 *
 *  TEXT: a theatre scene in Brussels. MOVE: recognise the genres, and in a
 *  play tell the réplique (spoken) from the didascalie (read, never said).
 *  Recognition level only.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE = lecture('a10-lecture', 'Les assiettes bleues', 'Une scène de théâtre, à Bruxelles', TEXTE_SOEURS,
  [],
  [
    { q: 'Devine le sens. « (Un temps.) » Dans une pièce de théâtre, qu’est-ce que c’est ?', a: 'Une courte pause, un silence que les actrices doivent marquer.' },
    { q: 'Question globale. Qui sont les personnages, et que font-ils ?', a: 'Deux sœurs, Rose et Claire, vident l’appartement de leur mère, sans doute après sa mort.' },
    { q: 'Détail. Pourquoi Claire est-elle en retard ?', a: '« Le train » : elle vient d’une autre ville.' },
    { q: 'Inférence. « Je n’ai jamais eu de place ici. » Que veut dire Claire ?', a: 'Pas seulement qu’elle manque d’espace chez elle : elle ne s’est jamais sentie à sa place dans cette famille.' },
    { q: 'Inférence. Sans narrateur, comment sait-on ce que ressentent les personnages ?', a: 'Par les répliques et les didascalies : « brusquement », « doucement », le silence, la main sous la pluie.' },
    { q: 'Ton et position. Comment la scène se termine-t-elle ?', a: 'Par un rire partagé : la tension retombe, et les deux sœurs se retrouvent un instant.' },
  ], 'rec-b2-30-soeurs', ['genre']);

const A10_GENRES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a10-genres', layer: 'core', sheetId: 'sheet-genres',
  title: 'Six genres, et qui parle',
  cols: ['Genre', 'Forme', 'Qui parle'],
  rows: [
    { cells: ['le roman', 'long, plusieurs personnages', 'un narrateur'], say: Q_BOVARY.fr,
      detail: { title: 'Le roman', body: 'Un long récit, souvent en chapitres, qui suit des personnages dans la durée. EN: a long narrative over time.', say: Q_PROUST.fr } },
    { cells: ['la nouvelle', 'court, souvent à chute', 'un narrateur'], say: fr(E(1546)),
      detail: { title: 'La nouvelle', body: 'Peu de personnages, un seul événement, et souvent une fin qui surprend. EN: a short story, often with a twist.', say: Q_PARURE_FIN.fr } },
    { cells: ['le conte', 'un autre monde, une leçon', 'un narrateur'], say: fr(LIT(1024)),
      detail: { title: 'Le conte', body: 'Il ouvre un monde merveilleux ou philosophique, et porte souvent une morale. Candide est un conte philosophique. EN: a tale, often with a lesson.', say: Q_CANDIDE.fr } },
    { cells: ['le poème en vers', 'vers, rythme, souvent rimes', 'un je lyrique, souvent'], say: Q_HUGO.fr,
      detail: { title: 'Le poème en vers', body: 'Des lignes mesurées, un rythme, souvent des rimes. Le je dit ses émotions. EN: lines with a measure, often rhymed.', say: Q_NELLIGAN_1.fr } },
    { cells: ['le poème en prose', 'des phrases, sans vers', 'un je lyrique, souvent'], say: Q_BAUDELAIRE.fr,
      detail: { title: 'Le poème en prose', body: 'Pas de vers ni de rimes, mais des images, des répétitions et un rythme qui chante. EN: prose that sings.', say: fr(E(1547)) } },
    { cells: ['le théâtre', 'répliques et didascalies', 'les personnages'], say: fr(E(1545)),
      detail: { title: 'Le théâtre', body: 'Personne ne raconte : les répliques se disent, les didascalies se lisent et guident le jeu. EN: nobody narrates in a play.', say: fr(E(1544)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre'],
};

const A10_RECONNAITRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-reconnaitre', layer: 'core', size: 'lg',
  title: 'Reconnaître un genre', frSub: 'La forme, puis la voix',
  groups: [
    grp('Dans la scène', [
      it(E(1540), 'Rose'),
      it(E(1541), 'Rose, encore'),
      it(E(1542), 'Claire'),
      it(E(1549), 'le mot pour les indications de jeu'),
    ], chk('« (Elle se relève brusquement) » : c’est…', ['une didascalie : on ne la dit pas, on la joue', 'une réplique'], 0,
      'Entre parenthèses, en indication : un geste pour l’actrice. EN: a stage direction, acted not spoken.')),
    grp('Quel genre ?', [
      qt(Q_HUGO),
      qt(Q_BAUDELAIRE),
      qt(Q_CANDIDE),
      it(LIT(1024), 'la leçon 8 du B2'),
    ], chk('« Il faut être toujours ivre. Tout est là : c’est l’unique question. » Ni vers ni rimes, mais un rythme et une image : c’est…', ['un poème en prose', 'un roman', 'une scène de théâtre'], 0,
      'Baudelaire écrit en prose, mais en poète. EN: prose, written as poetry.')),
    ctl('Sans narrateur', 'Au théâtre, qui raconte l’histoire ?', ['personne : les personnages parlent, les didascalies guident', 'un narrateur caché'], 0,
      'Tout passe par le dialogue et par le jeu. EN: everything goes through dialogue and acting.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a10-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre confusions sur les genres',
  errors: [
    { wrong: 'La didascalie est dite par l’actrice.', right: fr(E(1544)),
      why: 'Normal : elle est écrite dans le texte. Mais elle est lue par les comédiens, jamais dite. EN: written, never spoken.' },
    { wrong: 'Une nouvelle, c’est une information récente.', right: fr(E(1546)),
      why: 'Aux informations, oui. En littérature, c’est un genre : un récit court. EN: in literature, a nouvelle is a genre.' },
    { wrong: 'Un poème doit toujours rimer.', right: fr(E(1547)),
      why: 'Beaucoup de poèmes riment, mais le poème en prose n’a ni vers ni rimes. EN: prose poems do not rhyme.' },
    { wrong: 'Le narrateur de la pièce dit que Claire est triste.', right: fr(E(1545)),
      why: 'Au théâtre, on déduit les émotions des répliques et des didascalies. EN: in a play, there is no narrator.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre'],
};

const A10_COMMENTAIRE = pourTonCommentaire('a10-commentaire', 'Ce que disent les didascalies', [
  grp('Les indications de jeu', [
    it(E(1552), 'le silence et les gestes'),
    free('Rose dit qu’elle garde les assiettes.', 'Rose says she is keeping the plates.', 'un résumé'),
  ], chk('Laquelle est une phrase de commentaire ?', ['« Les didascalies disent ce que les personnages taisent. »', '« Rose dit qu’elle garde les assiettes. »'], 0,
    'Résumer une réplique ne commente pas la scène. EN: summarising a line is not commenting.')),
  grp('Nommer le genre', [
    it(E(1545), 'le genre et sa voix'),
    it(E(1551), 'la règle'),
  ], chk('Dans un commentaire de théâtre, tu parles…', ['des personnages, des répliques et des didascalies', 'du narrateur'], 0,
    'Pas de narrateur, donc pas de focalisation : ce sont les voix des personnages. EN: no narrator in a play.')),
], ['genre']);

const A10_TEXTE = dansUnTexte('a10-texte', 'Un arbre qui ne sait pas l’heure', DANS_A10, [
  { q: 'Quel est le genre de ce texte, et comment le sais-tu ?', a: 'Un poème en prose : pas de vers ni de rimes, mais des images, des répétitions (« Je voudrais ») et un rythme qui chante.' },
  { q: 'Relève une personnification.', a: 'L’arbre « ne sait pas l’heure », fleurit « quand il en a envie », perd ses feuilles « pour rire » : il a des désirs d’homme.' },
  { q: 'Qui parle, et que désire-t-il ?', a: 'Un je lyrique, qui envie l’arbre : il voudrait lui aussi échapper aux règles et aux attentes des autres.' },
  { q: 'Quel est l’effet de la dernière phrase ?', a: 'L’image « être printemps » transforme une saison en ordre : on comprend que le je refuse ce qu’on exige de lui.' },
], 'rec-b2-30-texte-a10', ['genre']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Réplique', 'Ce qu’un personnage de théâtre dit s’appelle…', ['une didascalie', 'une réplique'], 1,
    'La didascalie, elle, indique un geste ou un ton. EN: a line of dialogue.'),
  ctl('La nouvelle', 'Un récit court, avec peu de personnages et souvent une chute, c’est…', ['une nouvelle', 'un roman', 'un poème'], 0,
    'Court, un seul événement, une fin forte. EN: a short story.'),
  ctl('Le poème en prose', 'Un poème en prose…', ['n’a pas de vers', 'doit rimer'], 0,
    'Des phrases, mais un rythme et des images. EN: sentences, not lines.'),
], ['genre']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Roman, nouvelle, théâtre',
    opener: {
      line: 'Deux sœurs vident un appartement, et personne ne raconte : ici tu reconnais un genre à sa forme et à sa voix. EN: Two sisters empty a flat and nobody narrates: here you recognise a genre by its form and its voice.',
      imageRef: 'lessons/lire-litterature/act10.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais un roman, une nouvelle, un conte, un poème et une scène de théâtre, et tu distingues réplique et didascalie. EN: You can recognise the main genres and tell a line from a stage direction.',
    estScreens: 38, restPoints: ['a10-genres', 'a10-erreurs'],
  },
  sections: [A10_LECTURE, A10_GENRES, A10_RECONNAITRE, A10_ERREURS, A10_COMMENTAIRE, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: ÉCRIRE SUR UN TEXTE
 *
 *  TEXT: a trainee's first day at a paper in Abidjan, read the DELF B2 way
 *  (labelled questions, « justifie »). MOVE: the language of commentary
 *  (« le narrateur suggère que », « on peut y voir », « l’auteure met en
 *  relief »), quoting a few exact words inside your own sentence, and the
 *  présent of analysis.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE = lecture('a11-lecture', 'Le premier jour', 'Comme au DELF B2, compréhension écrite', TEXTE_STAGIAIRE,
  [{ word: 'rédaction', en: 'newsroom', note: 'L’équipe des journalistes, et la salle où elle travaille.' }],
  [
    { q: 'Devine le sens. « Ah, c’est vous, la stagiaire ? » Qu’est-ce qu’une stagiaire ?', a: 'Une personne qui fait un stage : elle apprend le métier en travaillant, pour un temps.' },
    { q: 'Question globale. Qui raconte, et à quel moment de sa vie ?', a: 'Une femme, directrice du journal trente ans plus tard, raconte son premier jour de stagiaire, à la première personne.' },
    { q: 'Vrai ou faux ? Justifie. « À son arrivée, quelqu’un attendait la narratrice. »', a: 'Faux : « il n’y a personne avant dix heures », et l’homme qui entre enfin « ne me vit pas ».' },
    { q: 'Inférence. Pourquoi l’homme garde-t-il seulement la dernière phrase ?', a: 'Le texte ne le dit pas ; on peut y voir un premier test, réussi à moitié : une seule phrase était bonne.' },
    { q: 'Ton et position. Quelle est la tonalité du passage ? Cite deux expressions.', a: 'Comique, avec de l’autodérision : « comme on regarde un colis livré à la mauvaise adresse », « Je n’ai toujours rien compris au football ».' },
    { q: 'Inférence. Quel effet produit la dernière phrase ?', a: 'Une chute amusante : devenue directrice, elle garde le même point faible, et elle en rit.' },
  ], 'rec-b2-30-stagiaire', ['citation']);

const A11_ASTUCES: Sec<'hacks'> = {
  type: 'hacks', id: 'a11-astuces', layer: 'core', sheetId: 'sheet-commentaire',
  title: 'Trois astuces pour écrire sur un texte',
  hacks: [
    { hack: 'Analyse, ne raconte pas.', why: 'Ton lecteur connaît l’histoire. Dis comment le texte agit : qui parle, par quels yeux, avec quels mots. EN: your reader knows the story; show how it works.' },
    { hack: 'Une idée, une citation courte, un effet.', why: 'Chaque paragraphe avance une idée, la prouve par quelques mots du texte et dit ce qu’ils produisent. EN: idea, short quote, effect.' },
    { hack: 'Écris au présent, même si le texte est au passé simple.', why: 'Le commentaire décrit ce que le texte fait maintenant, sous tes yeux. EN: the commentary is in the present.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['citation'],
};

const A11_FORMULES: Sec<'examples'> = {
  type: 'examples', id: 'a11-formules', layer: 'core', sheetId: 'sheet-commentaire',
  title: 'Les formules du commentaire',
  examples: [
    ex(E(1553), 'suggérer : ce que le texte dit sans le dire'),
    ex(E(1554), 'on peut y voir : une interprétation prudente'),
    ex(E(1555), 'mettre en relief : ce que le texte souligne'),
    ex(E(1556), 'produire un effet : ce que ressent le lecteur'),
    ex(E(1561), 'grâce à : le procédé, puis l’effet'),
    ex(LIT(1183), 'la leçon 8 du B2 : laisser entendre'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['citation'],
};

const A11_CITER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-citer', layer: 'core', size: 'lg',
  title: 'Citer en quelques mots', frSub: 'La citation dans ta phrase',
  groups: [
    grp('Une citation courte', [
      it(E(1557), 'quelques mots, dans la phrase'),
      it(E(1560), 'la règle'),
      it(E(1559), 'la méthode'),
    ], chk('Une bonne citation, c’est…', ['quelques mots exacts, glissés dans ta phrase', 'une phrase entière du texte, recopiée à part'], 0,
      'Courte et exacte, elle prouve sans remplacer ton analyse. EN: short and exact.')),
    grp('Le présent de l’analyse', [
      it(E(1558), 'la règle'),
      it(E(1563), 'un regard, au présent'),
      it(LIT(1370), 'la leçon 9 du B2'),
    ], chk('Dans ton commentaire, tu écris : « La narratrice … son premier jour. »', ['raconte', 'raconta'], 0,
      'Le texte est au passé simple ; ton commentaire, au présent. EN: the commentary stays in the present.')),
    ctl('La coupure', 'Tu enlèves des mots au milieu d’une citation. Tu marques la coupure par…', ['des crochets et trois points', 'rien du tout'], 0,
      'Le lecteur doit voir que tu as coupé. EN: mark the cut with [...].'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['citation'],
};

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a11-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre phrases de commentaire qui perdent des points',
  errors: [
    { wrong: 'La narratrice arrive au journal, puis elle attend, puis un homme entre.', right: fr(E(1563)),
      why: 'Normal : raconter semble prouver qu’on a compris. Mais le commentaire analyse le regard, pas les faits. EN: analyse, do not retell.' },
    { wrong: 'Dans cet extrait, la narratrice raconta son premier jour.', right: fr(E(1558)),
      why: 'Le passé simple vient du texte ; ton commentaire, lui, reste au présent. EN: keep the commentary in the present.' },
    { wrong: 'On voit l’autodérision : « Je ne connaissais rien au football. À midi moins cinq, je rendis mon texte. Il le lut sans un mot. »', right: fr(E(1560)),
      why: 'Une citation longue remplace l’analyse. Garde quelques mots et dis ce qu’ils montrent. EN: keep a few words.' },
    { wrong: 'Je pense que la narratrice est sympathique.', right: fr(E(1561)),
      why: 'Ton goût n’est pas une preuve. Montre par quels moyens le texte te rend la narratrice sympathique. EN: show the means, not your taste.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['citation'],
};

const A11_COMMENTAIRE = pourTonCommentaire('a11-commentaire', 'Une idée, une citation, un effet', [
  grp('Une phrase complète', [
    it(E(1555), 'une formule d’analyse'),
    it(E(1564), 'l’expression'),
    free('La narratrice est seule dans la salle.', 'The narrator is alone in the room.', 'un fait du texte'),
  ], chk('Laquelle est une phrase d’analyse ?', ['« L’auteure met en relief la solitude du personnage. »', '« La narratrice est seule dans la salle. »'], 0,
    'Le fait vient du texte ; l’analyse dit ce qu’il signifie. EN: analysis says what a fact means.')),
  grp('Analyser, pas raconter', [
    it(E(1562), 'la règle'),
    it(E(1565), 'la définition'),
  ], chk('Ton lecteur connaît déjà l’extrait. Tu lui apportes…', ['comment le texte produit son effet', 'le résumé de l’histoire'], 0,
    'Le commentaire montre le travail du texte. EN: show how the text works.')),
], ['citation']);

const A11_TEXTE = dansUnTexte('a11-texte', 'Un paragraphe de commentaire à décortiquer', DANS_A11, [
  { q: 'Quelle phrase présente l’extrait ?', a: 'La première : « Dans cet extrait, la narratrice [...] raconte son premier jour de stagiaire. » Elle situe la voix et le sujet.' },
  { q: 'Où le paragraphe parle-t-il du narrateur et du regard ?', a: '« Le récit est à la première personne, et l’adulte porte sur la jeune femme d’autrefois un regard amusé. »' },
  { q: 'Relève une citation, et dis comment elle est utilisée.', a: '« un colis livré à la mauvaise adresse » : quelques mots, glissés dans la phrase, puis l’effet (« souligne qu’elle n’était pas attendue »).' },
  { q: 'Quelle formule propose une interprétation prudente ?', a: '« On peut y voir de l’autodérision » : le commentaire interprète, sans affirmer que c’est la seule lecture.' },
  { q: 'À quel temps le paragraphe est-il écrit, et pourquoi ?', a: 'Au présent (raconte, souligne, confirme), même si l’extrait est au passé simple : c’est le présent de l’analyse.' },
], 'rec-b2-30-texte-a11', ['citation']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le temps', 'Un commentaire s’écrit…', ['au présent', 'au passé simple', 'au futur'], 0,
    'Le présent de l’analyse. EN: in the present.'),
  ctl('La citation', 'Une citation utile, c’est…', ['quelques mots exacts, suivis de leur effet', 'un long passage recopié'], 0,
    'Courte, exacte, commentée. EN: short, exact, explained.'),
  ctl('Interpréter', 'Pour proposer une lecture sans l’imposer, tu écris…', ['« on peut y voir »', '« il est certain que »'], 0,
    'Une formule prudente, appuyée sur le texte. EN: a careful formula.'),
], ['citation']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Écrire sur un texte',
    opener: {
      line: 'Une stagiaire attend dans une salle vide, stylo neuf à la main : ici tu apprends à écrire sur un texte, citations à l’appui. EN: A trainee waits in an empty newsroom with a new pen: here you learn to write about a text, with quotations.',
      imageRef: 'lessons/lire-litterature/act11.jpg',
    },
    sections: [],
    milestone: 'Tu écris une phrase d’analyse au présent, avec une courte citation et son effet. EN: You can write a sentence of analysis in the present, with a short quotation and its effect.',
    estScreens: 40, restPoints: ['a11-formules', 'a11-erreurs'],
  },
  sections: [A11_LECTURE, A11_ASTUCES, A11_FORMULES, A11_CITER, A11_ERREURS, A11_COMMENTAIRE, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12: TON COMMENTAIRE
 *
 *  The production act. The task extract is read with every question of the
 *  lesson, planned, rehearsed out loud at the book club, then commented in
 *  writing. The brief prints the extract again (no `source` field on task).
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE = lecture('a12-lecture', 'Le dernier jour de l’épicerie', 'L’extrait de ta mission', TEXTE_ARMAND,
  [{ word: 'Liquidation totale', en: 'closing-down sale', note: 'On vend tout le stock, avant de fermer.' }],
  [
    { q: 'Devine le sens. « le bruit lui parut plus fort que d’habitude, presque indécent ». Que veut dire « indécent », ici ?', a: 'Choquant, déplacé : un bruit trop joyeux ou trop fort pour un jour aussi triste.' },
    { q: 'Question globale. Qui raconte, et par les yeux de qui voit-on ?', a: 'Un narrateur extérieur, à la troisième personne, mais on voit tout par les yeux d’Armand : une focalisation interne.' },
    { q: 'Détail. Qu’est-ce qui reste dans le magasin à la fin ?', a: 'La vieille balance que son père avait achetée le jour de l’ouverture : personne n’en a voulu.' },
    { q: 'Inférence. « Totale, vraiment. » Qui pense cela, et sur quel ton ?', a: 'Armand, en style indirect libre, avec amertume : une ironie triste sur le mot de l’affiche.' },
    { q: 'Inférence. Que reproche la question « Où étaient-ils donc, tous ces gens » ?', a: 'Aux clients d’avoir préféré le supermarché : ils regrettent ce qu’ils ont eux-mêmes abandonné.' },
    { q: 'Ton et position. Quelle est la tonalité du texte, et quels moyens la créent ?', a: 'Mélancolique, avec une pointe d’ironie : les comparaisons (« comme on quitte un enterrement »), le style indirect libre, le dernier geste et la phrase finale très courte.' },
  ], 'rec-b2-30-armand', ['focalisation', 'tonalite']);

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-commentaire',
  title: 'Cinq étapes pour ton commentaire',
  steps: [
    '1. Présente l’extrait : le genre, le sujet, et qui raconte. EN: introduce the extract, its genre and its narrator.',
    '2. Dis par quels yeux on voit, et ce que cela fait au lecteur. EN: say through whose eyes we see, and its effect.',
    '3. Nomme la tonalité, puis deux moyens qui la créent, chacun avec une courte citation. EN: name the tone and two means, each with a short quotation.',
    '4. Commente la fin : le dernier geste, la dernière phrase. EN: comment on the ending.',
    '5. Conclus en une phrase, au présent, et relis tes citations. EN: conclude in one sentence and check your quotations.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['citation'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', title: 'Où tu écriras sur un texte',
  cases: [
    { situation: 'Au DELF B2, une question sur un extrait de roman', fr: fr(E(1567)), en: en(E(1567)) },
    { situation: 'Au club de lecture, tu défends ton avis', fr: fr(E(1572)), en: en(E(1572)) },
    { situation: 'Dans un cours de littérature, tu analyses le ton', fr: fr(E(1570)), en: en(E(1570)) },
    { situation: 'Tu conclus un commentaire écrit', fr: fr(E(1573)), en: en(E(1573)) },
  ],
  audio: AUDIO, say: REFRAME, terms: ['citation'],
};

/** USE IT, out loud. Every French string here uses the typographic ’ only. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core', title: 'Au club de lecture, l’épicerie d’Armand',
  setting: 'Le club de lecture du Plateau, à Montréal, un mois plus tard. Marie-Ève a choisi l’extrait sur l’épicerie d’Armand. Elle te demande de lancer la discussion.',
  turns: [
    {
      ai: 'Alors, qui nous raconte cette histoire ?', en: 'So, who is telling us this story?',
      user: 'Un narrateur extérieur, mais on voit tout par les yeux d’Armand.', userEn: 'An outside narrator, but we see everything through Armand’s eyes. (The voice, then the gaze.)',
      alts: [
        { fr: 'C’est raconté à la troisième personne, en focalisation interne sur Armand.', en: 'It is told in the third person, with internal focalisation on Armand.' },
        { fr: 'Le narrateur ne dit pas je, mais il reste dans la tête d’Armand.', en: 'The narrator does not say I, but stays inside Armand’s head.' },
      ],
    },
    {
      ai: 'Et « Totale, vraiment », c’est l’avis du narrateur ?', en: 'And “Total, really”: is that the narrator’s view?',
      user: 'Non, c’est Armand qui le pense : c’est du style indirect libre.', userEn: 'No, Armand thinks it: it is free indirect style. (The thought given back to its character.)',
      alts: [
        { fr: 'C’est la voix d’Armand, amère, glissée dans le récit.', en: 'It is Armand’s bitter voice, slipped into the narrative.' },
        { fr: 'On entend Armand, sans guillemets : il trouve l’affiche cruelle.', en: 'We hear Armand, without quotation marks: he finds the sign cruel.' },
      ],
    },
    {
      ai: 'Quel est le ton, pour toi ?', en: 'What is the tone, for you?',
      user: 'Mélancolique, avec une pointe d’ironie.', userEn: 'Melancholy, with a touch of irony. (The tone, named precisely.)',
      alts: [
        { fr: 'Plutôt triste, pathétique même, mais sans plainte.', en: 'Rather sad, even moving, but without complaint.' },
        { fr: 'Nostalgique, avec un sourire amer.', en: 'Nostalgic, with a bitter smile.' },
      ],
    },
    {
      ai: 'Qu’est-ce qui te le fait dire ?', en: 'What makes you say so?',
      user: 'Les clients partent « comme on quitte un enterrement » : la fermeture devient un deuil.', userEn: 'The customers leave “the way people leave a funeral”: the closing becomes a death. (A short quotation, then its effect.)',
      alts: [
        { fr: 'La comparaison avec un enterrement : c’est la fin d’un petit monde.', en: 'The comparison with a funeral: it is the end of a small world.' },
        { fr: 'Il pose la main sur la balance « comme sur l’épaule d’un vieil ami ».', en: 'He puts his hand on the scales “as on the shoulder of an old friend”.' },
      ],
    },
    {
      ai: 'Et la fin ? Il éteint la lumière, c’est tout.', en: 'And the ending? He turns off the light, that is all.',
      user: 'Justement : ce dernier geste dit l’adieu qu’il ne prononce jamais.', userEn: 'Exactly: that last gesture says the farewell he never speaks. (The ending, read for its effect.)',
      alts: [
        { fr: 'La phrase est très courte : elle ferme le magasin et le texte en même temps.', en: 'The sentence is very short: it closes the shop and the text at once.' },
        { fr: 'C’est une fin sobre, qui laisse le lecteur ressentir le reste.', en: 'It is a restrained ending that lets the reader feel the rest.' },
      ],
    },
    {
      ai: 'Tu pourrais l’écrire, tout ça, pour la prochaine fois ?', en: 'Could you write all that down for next time?',
      user: 'Oui : la voix, le regard, la tonalité, et deux ou trois citations courtes.', userEn: 'Yes: the voice, the gaze, the tone, and two or three short quotations. (Your plan.)',
      alts: [
        { fr: 'D’accord, un commentaire de deux cents mots, au présent.', en: 'All right, a two-hundred-word commentary, in the present.' },
        { fr: 'Avec plaisir, et je citerai le texte au lieu de le raconter.', en: 'Gladly, and I will quote the text instead of retelling it.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['narrateur', 'tonalite'],
};

/** THE GRADED TASK: a short commentary, DELF B2 PE register, graded on the
 *  B2 grid (task, coherence, range, accuracy, register). */
const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission', title: 'Ton commentaire', frSub: 'Mission écrite, registre du DELF B2',
  brief: `Ton club de lecture prépare un petit recueil de commentaires. Marie-Ève te confie cet extrait : écris un commentaire qui montre qui raconte, par quels yeux on voit, quelle est la tonalité, par quels moyens elle est créée et quel effet elle produit. Voici l’extrait. ${TEXTE_ARMAND}`,
  briefEn: 'Your book club is putting together a small collection of commentaries. Marie-Ève gives you this extract: write a commentary that shows who narrates, through whose eyes we see, what the tone is, how it is created and what effect it has. The extract is printed here so you can write with it in front of you.',
  produce: 'Écris un commentaire de 200 à 250 mots, au présent, dans un registre soutenu : présente l’extrait, dis qui raconte et par quels yeux on voit, nomme la tonalité et deux moyens qui la créent, commente la fin, et appuie-toi sur au moins deux courtes citations entre guillemets.',
  responseSpec: { kind: 'text', minWords: 200, maxWords: 275 },
  rubric: {
    criteria: [
      { key: 'tache', label: 'Réalisation de la tâche', maxPoints: 3, descriptors: [
        '3 : Le narrateur, le regard, la tonalité, deux moyens avec leur effet et la fin sont commentés, avec au moins deux courtes citations. Entre 200 et 250 mots.',
        '2 : Un de ces éléments manque, une seule citation, ou la longueur sort un peu des limites.',
        '1 : Le texte raconte l’histoire au lieu de la commenter, ou il est beaucoup trop court.',
      ] },
      { key: 'coherence', label: 'Cohérence et cohésion', maxPoints: 3, descriptors: [
        '3 : Un ordre clair (présentation, voix et regard, tonalité et moyens, fin, conclusion) et des liens variés (d’abord, de plus, pourtant, enfin, en somme).',
        '2 : L’ordre se suit, mais les liens sont pauvres (et, aussi, et puis) ou une idée arrive hors de sa place.',
        '1 : Des remarques juxtaposées, sans fil.',
      ] },
      { key: 'etendue', label: 'Étendue du lexique d’analyse', maxPoints: 2, descriptors: [
        '2 : Les mots de la leçon, justes et variés : narrateur, focalisation, style indirect libre, tonalité, comparaison, suggérer, mettre en relief, on peut y voir.',
        '1 : Un vocabulaire vague ou répété (le texte dit, le ton est triste, il y a).',
      ] },
      { key: 'correction', label: 'Correction', maxPoints: 2, descriptors: [
        '2 : Le commentaire reste au présent, les citations sont exactes et glissées dans des phrases correctes ; peu d’erreurs, qui ne gênent pas.',
        '1 : Des erreurs qui gênent parfois, un commentaire au passé simple, ou des citations inexactes ou qui cassent la phrase.',
      ] },
      { key: 'registre', label: 'Registre', maxPoints: 2, descriptors: [
        '2 : Le registre d’un commentaire écrit : impersonnel, prudent (on peut y voir), sans avis personnel non justifié.',
        '1 : Le texte sonne comme une conversation, ou il remplace l’analyse par des goûts (j’ai aimé, c’est beau).',
      ] },
    ],
  },
  scaffold: [
    'Dans cet extrait de nouvelle,',
    'Le narrateur raconte à la troisième personne, mais',
    'Cette focalisation interne',
    'La tonalité est',
    'Grâce à la comparaison',
    'On peut y voir',
    'La dernière phrase',
    'En somme,',
  ],
  modelAnswer: 'Dans cet extrait de nouvelle, un narrateur extérieur raconte le dernier jour de l’épicerie d’Armand Leduc, mais il nous fait voir la scène par les yeux du vieil épicier : le bruit du rideau de fer lui paraît « presque indécent ». Cette focalisation interne nous place au plus près d’une tristesse qu’Armand ne dit jamais. La tonalité est mélancolique, avec une pointe d’ironie. D’abord, le style indirect libre fait entendre son amertume : « Totale, vraiment. » répond au mot de l’affiche. De même, la question « Où étaient-ils donc, tous ces gens » laisse entendre un reproche aux clients, qui ont préféré le supermarché. Pourtant, le narrateur précise qu’Armand « ne leur en voulait pas » : le personnage reste digne. Ensuite, les comparaisons renforcent l’émotion. Les clients partent « comme on quitte un enterrement » : on peut y voir la mort d’un petit monde de quartier. À la fin, Armand pose la main sur la balance « comme sur l’épaule d’un vieil ami » ; cet objet hérité de son père devient presque une personne. Enfin, la dernière phrase, très courte, sonne comme un adieu : il éteint la lumière du magasin et celle d’une vie. En somme, ce passage fait d’une simple fermeture de commerce un moment émouvant, sans jamais tomber dans la plainte.\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : la voix (narrateur extérieur), le regard (focalisation interne), la tonalité (mélancolique, ironique), deux moyens avec leur effet (style indirect libre, comparaisons), la fin ; six courtes citations.\n2. Cohérence : présentation, voix et regard, tonalité, moyens, fin, conclusion ; d’abord, de même, pourtant, ensuite, enfin, en somme.\n3. Étendue : focalisation interne, style indirect libre, tonalité, comparaisons, laisse entendre, on peut y voir.\n4. Correction : tout au présent, même quand l’extrait est au passé simple ; les citations entrent dans la phrase.\n5. Registre : impersonnel et prudent, aucun « j’ai aimé ».',
  modelAnswerEn: 'In this extract from a short story, an outside narrator tells the last day of Armand Leduc’s grocery, but makes us see the scene through the old grocer’s eyes: the noise of the metal shutter seems to him “almost indecent”. This internal focalisation puts us as close as possible to a sadness Armand never speaks of. The tone is melancholy, with a touch of irony. First, free indirect style lets us hear his bitterness: “Total, really.” answers the word on the sign. Likewise, the question “Where had they been, all these people” implies a reproach to the customers who preferred the supermarket. Yet the narrator points out that Armand “did not hold it against them”: the character keeps his dignity. Next, the comparisons strengthen the emotion. The customers leave “the way people leave a funeral”: one can see in it the death of a small neighbourhood world. At the end, Armand puts his hand on the scales “as on the shoulder of an old friend”; this object inherited from his father almost becomes a person. Finally, the very short last sentence sounds like a farewell: he switches off the light of the shop and of a life. In short, this passage turns a simple shop closure into a moving moment, without ever sliding into self-pity. The marker’s notes (not counted): 1. Task: voice, gaze, tone, two means with their effect, the ending; six short quotations. 2. Coherence: introduction, voice and gaze, tone, means, ending, conclusion, with varied connectors. 3. Range: the vocabulary of analysis. 4. Accuracy: all in the present; quotations fitted into the sentences. 5. Register: impersonal and careful.',
  watchFor: [
    { pattern: 'The story retold (« Armand ouvre son magasin, puis les clients viennent… ») instead of analysed.', criterion: 'tache', feedback: 'Ton lecteur connaît l’histoire : dis comment le texte produit son émotion.', ref: 'a11-erreurs' },
    { pattern: 'The author named as the one who thinks or feels (« l’auteur est triste »), or the narrator confused with Armand.', criterion: 'tache', feedback: 'Un narrateur extérieur raconte ; Armand est le personnage par les yeux duquel on voit.', ref: 'a2-piege' },
    { pattern: 'No focalisation named, or « focalisation externe » for a text full of Armand’s perceptions (« lui parut »).', criterion: 'tache', feedback: 'Qui perçoit le bruit du rideau ? Armand : c’est une focalisation interne.', ref: 'a3-indices' },
    { pattern: '« Totale, vraiment » or the question about the customers attributed to the narrator.', criterion: 'tache', feedback: 'Rends cette pensée à Armand : c’est du style indirect libre.', ref: 'a5-piege' },
    { pattern: 'The tone named without its means (« le ton est triste »), or a device named without its effect.', criterion: 'etendue', feedback: 'Nomme la tonalité, puis montre le moyen et son effet, citation à l’appui.', ref: 'a6-erreurs' },
    { pattern: 'The comparisons called metaphors, or « comme » read as a comparison where it is not one.', criterion: 'correction', feedback: 'Avec comme, c’est une comparaison ; sans outil, une métaphore.', ref: 'a7-piege' },
    { pattern: 'The ending left out, or described without its effect.', criterion: 'tache', feedback: 'Commente le dernier geste et la dernière phrase : que disent-ils sans le dire ?', ref: 'a9-commentaire' },
    { pattern: 'Fewer than two quotations, or long quoted sentences with no comment.', criterion: 'tache', feedback: 'Garde quelques mots exacts, glisse-les dans ta phrase et dis ce qu’ils montrent.', ref: 'a11-citer' },
    { pattern: 'The commentary written in the passé simple or the imparfait (« le narrateur raconta »).', criterion: 'correction', feedback: 'Le commentaire reste au présent : le narrateur raconte, la phrase suggère.', ref: 'a11-erreurs' },
    { pattern: 'Personal taste replacing analysis (« j’ai aimé », « c’est beau », « je trouve que »).', criterion: 'registre', feedback: 'Remplace ton goût par une formule d’analyse : on peut y voir, le texte met en relief.', ref: 'a11-formules' },
    { pattern: 'A list of remarks with no order and connectors limited to et, aussi, et puis.', criterion: 'coherence', feedback: 'Suis le plan : présentation, voix et regard, tonalité, fin, conclusion.', ref: 'a12-plan' },
  ],
  graderNotes: [
    'Word count: the commentary only, a title excluded. 200 to 250 with 10% tolerance (180 to 275) before criterion « tache » loses a point; responseSpec allows 275.',
    'Accept any justified tonalité: mélancolique, pathétique, nostalgique, triste with irony. Refuse only a label the text cannot support (comique as the dominant tone, dramatique as suspense). The means and the quotations decide the mark.',
    'Accept « narrateur extérieur », « narrateur omniscient » or « récit à la troisième personne » for the voice, provided the gaze is identified as Armand’s. Omniscient alone, with no mention of Armand’s point of view, earns the voice but not the gaze.',
    'Quotations: a few exact words in guillemets, straight or French marks. A quotation over twenty words counts as copying. Small slips in a quotation (an article) cost nothing; an invented quotation costs the « tache » point it seems to earn.',
    'The passé simple may appear INSIDE a quotation; the learner is never asked to produce it (lesson 8 in B2 is recognition only). A passé simple in the learner’s own sentences is a « correction » error only because the commentary must be in the present.',
    'Do not mark the absence of an introduction naming a real author: the extract is original, by no named author. « L’auteur » used for the narrator is the error named in watchFor; « l’auteur » used for the writer of the text (l’auteur choisit une focalisation interne) is correct.',
    'Accept regional vocabulary (dépanneur, épicerie, commerce de quartier, magasin général).',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Cite other lessons by trail position (« la leçon 24 du B2 »), never by id.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['citation', 'tonalite'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core', title: 'Dis ton commentaire à voix haute', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['citation'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-commentaire',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'qui parle', v: 'narrateur : héros, témoin, extérieur', say: fr(E(1413)),
      detail: { title: 'La voix', body: 'Le narrateur n’est pas l’auteur ; au théâtre, personne ne raconte. EN: the narrator is not the author.', say: fr(E(1420)) } },
    { k: 'par quels yeux', v: 'interne, externe, omnisciente', say: fr(E(1439)),
      detail: { title: 'Le regard', body: 'Dans une tête, dehors comme une caméra, ou partout. Dis l’effet sur le lecteur. EN: one head, outside, or everywhere.', say: fr(E(1440)) } },
    { k: 'le temps', v: 'plans, retour en arrière, rythme', say: fr(E(1457)),
      detail: { title: 'Le temps du récit', body: 'Le passé simple avance, l’imparfait dure ; sommaire, scène, ellipse, présent de narration. EN: tense and speed.', say: fr(E(1459)) } },
    { k: 'les paroles', v: 'direct, indirect, indirect libre', say: fr(E(1473)),
      detail: { title: 'La voix des personnages', body: 'Sans guillemets ni que, une phrase peut porter la voix d’un personnage. EN: free indirect style.', say: fr(E(1472)) } },
    { k: 'les mots', v: 'tonalité, images, portrait', say: fr(E(1482)),
      detail: { title: 'Avec quels mots', body: 'Nomme la tonalité, puis le moyen (phrase, image, détail) et son effet. EN: the tone, its means, its effect.', say: fr(E(1507)) } },
    { k: 'ton commentaire', v: 'au présent, citations courtes', say: fr(E(1559)),
      detail: { title: 'Écrire sur un texte', body: 'Une idée, une citation de quelques mots, un effet ; on peut y voir, le narrateur suggère. EN: idea, quote, effect.', say: fr(E(1553)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['narrateur', 'citation'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu lis maintenant une page littéraire avec trois questions : qui parle, par quels yeux, avec quels mots. Tu distingues l’auteur du narrateur, tu reconnais une focalisation, un retour en arrière, un sommaire, un style indirect libre, une tonalité et ses moyens, une image et son effet, un incipit et une chute, un genre. Le piège qui reste : nommer un procédé sans dire ce qu’il fait. Avant l’examen, prends une page de roman, écris qui raconte et par quels yeux on voit, puis une phrase sur la tonalité avec une citation de moins de dix mots et son effet. EN: Before the exam, take a novel page, say who narrates and through whose eyes, then write one sentence on the tone with a short quotation and its effect.',
  stats: [
    { k: 'Qui parle', v: 'narrateur, personnages' },
    { k: 'Par quels yeux', v: 'la focalisation' },
    { k: 'Avec quels mots', v: 'tonalité, images, rythme' },
    { k: 'Ton commentaire', v: 'une idée, une citation, un effet' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 2 to 11, a round that
 *  recycles lessons 3 and 19 in B1 and 1, 8, 9, 12, 13 and 24 in B2 (named
 *  in each question), and a DELF B2 CE round on the act 11 extract. `fold()`
 *  strips accents, punctuation and spacing, so every typed answer is ONE
 *  analysis word the prompt determines, and every errorSpot turns on one
 *  term. No question asks for a passé simple. Authored slots are spread by
 *  `spreadSlots()`; no `why` names a position. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Un mot de ce commentaire ne va pas. Écris la phrase correcte. EN: One word of this commentary is wrong; write the sentence correctly.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_Q): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });
const UN_MOT = 'Complète. Un mot.';

const PATHETIQUE_SAY = 'Elle attendit toute la nuit près du téléphone. Il ne sonna pas. Au matin, elle rangea les deux tasses qu’elle avait sorties la veille, lentement, une à une.';

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'L’examen', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r2-narrateur', label: 'Le narrateur et l’auteur', targets: ['auteur-narrateur'],
      questions: [
        mc('Un roman dit « je ». Dans ton commentaire, tu écris d’abord…', ['le narrateur', 'l’auteur'], 0, 'Le je est une voix inventée, sauf dans une autobiographie. EN: the narrator.', 'a2-piege'),
        mc('Dans le souvenir de M. Lambert, la narratrice est surtout…', ['un témoin', 'l’héroïne', 'une voix hors de l’histoire'], 0, 'Elle raconte l’histoire de son instituteur. EN: a witness.', 'a2-lecture'),
        mc('Au début de Madame Bovary, le « nous » est celui…', ['d’un ancien camarade de Charles', 'de Flaubert enfant', 'des parents de Charles'], 0, 'Un narrateur témoin, qui s’efface ensuite. EN: a classmate.', 'a2-voix'),
        mc('Dans quel texte l’auteur, le narrateur et le personnage ne font-ils qu’un ?', ['une autobiographie', 'une nouvelle au je', 'un conte'], 0, 'C’est la promesse de l’autobiographie. EN: an autobiography.', 'a2-qui'),
        tI(UN_MOT, 'Celui qui raconte l’histoire s’appelle le ... .', 'narrateur', 'L’auteur écrit ; le narrateur raconte. EN: the narrator.', 'a2-voix'),
        tI(UN_MOT, 'Une narratrice qui raconte l’histoire d’un autre est un ... .', 'témoin', 'Elle a vu, mais le héros est un autre. EN: a witness.', 'a2-piege'),
        eS('L’auteure raconte l’arrivée de son instituteur, M. Lambert.', 'La narratrice raconte l’arrivée de son instituteur, M. Lambert.', 'Rien ne prouve que ce soit la vie de l’auteure. EN: the narrator.', 'a2-commentaire'),
        lC('Écoute. Qui parle dans cette phrase ?', fr(E(1419)), ['la narratrice, devenue adulte', 'M. Lambert', 'la mère'], 0, 'L’adulte qui se souvient. EN: the grown-up narrator.', 'a2-lecture'),
      ],
    },
    {
      id: 'r3-focalisation', label: 'Par quels yeux', targets: ['focalisation-confondue'],
      questions: [
        mc('« Tous les boubous lui semblaient verts. » La focalisation est…', ['interne', 'externe', 'zéro'], 0, 'Lui semblaient : l’impression d’Aminata. EN: internal.', 'a3-indices'),
        mc('Un texte ne montre que des gestes et des paroles. La focalisation est…', ['externe', 'interne'], 0, 'Comme une caméra. EN: external.', 'a3-trier'),
        mc('« Elle ne savait pas encore qu’elle resterait vingt ans à Dakar. » Qui peut dire cela ?', ['un narrateur omniscient', 'Aminata', 'l’homme au sac'], 0, 'Seul un narrateur qui sait tout connaît l’avenir. EN: an omniscient narrator.', 'a3-indices'),
        tI(UN_MOT, 'On voit la scène par les yeux d’Aminata : c’est une focalisation ... .', 'interne', 'Ses perceptions, ses peurs. EN: internal.', 'a3-commentaire'),
        tI(UN_MOT, 'Le narrateur qui connaît les pensées de tous les personnages est ... .', 'omniscient', 'Il sait tout. EN: omniscient.', 'a3-indices'),
        mc('Pourquoi le lecteur a-t-il peur avec Aminata ?', ['il en sait aussi peu qu’elle', 'le narrateur lui explique tout'], 0, 'Le savoir limité crée l’inquiétude. EN: limited knowledge.', 'a3-lecture'),
        eS('Le passage est écrit en focalisation externe : on voit Dakar par les yeux d’Aminata.', 'Le passage est écrit en focalisation interne : on voit Dakar par les yeux d’Aminata.', 'Par les yeux d’un personnage : interne. EN: internal.', 'a3-commentaire'),
        lC('Écoute. Par les yeux de qui voit-on ?', fr(E(1446)), ['de Moussa', 'd’Aminata', 'de personne'], 0, 'Moussa voit une jeune fille perdue. EN: Moussa’s.', 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-temps', label: 'Le temps du récit', targets: ['temps-du-recit'],
      questions: [
        mc('« Le village n’avait pas changé. » Ce verbe…', ['décrit le décor', 'fait avancer l’histoire'], 0, 'Un état, pas un événement. EN: background.', 'a4-trier'),
        mc('« Elle avait quitté la Gaspésie à dix-sept ans. » C’est…', ['un retour en arrière', 'une anticipation', 'une ellipse'], 0, 'Le plus-que-parfait remonte avant le récit. EN: a flashback.', 'a4-temps'),
        mc('Pourquoi « Enfin, elle entre » est-il au présent ?', ['pour rendre le moment fort plus vif', 'parce que la scène se passe aujourd’hui'], 0, 'Un présent de narration. EN: the narrative present.', 'a4-erreurs'),
        tI(UN_MOT, 'Trente ans résumés en deux phrases : c’est un ... .', 'sommaire', 'Le récit accélère. EN: a summary.', 'a4-trier'),
        tI(UN_MOT, '« Trois ans plus tard » : le texte saute trois années. C’est une ... .', 'ellipse', 'Une période passée sous silence. EN: an ellipsis.', 'a4-texte'),
        mc('Une minute racontée en dix lignes, c’est…', ['une scène', 'un sommaire'], 0, 'Le récit ralentit sur ce qui compte. EN: a scene.', 'a4-temps'),
        eS('Le plus-que-parfait marque une anticipation.', 'Le plus-que-parfait marque un retour en arrière.', 'Il remonte dans le passé. EN: a flashback.', 'a4-erreurs', ['Le plus-que-parfait marque une analepse.']),
        lC('Écoute. Cette phrase fait-elle avancer l’histoire, ou décrit-elle le décor ?', fr(E(1456)), ['elle décrit le décor', 'elle fait avancer l’histoire'], 0, 'Un état, au plus-que-parfait : le décor, pas un événement. EN: background.', 'a4-trier'),
      ],
    },
    {
      id: 'r5-paroles', label: 'Les paroles et les pensées', targets: ['indirect-libre'],
      questions: [
        mc('« Évidemment, il avait oublié. » C’est…', ['du style indirect libre', 'du discours direct', 'du discours indirect'], 0, 'La voix de Lise, sans guillemets ni que. EN: free indirect style.', 'a5-reperer'),
        mc('Dans la nouvelle, qui pense « Qu’il se débrouille » ?', ['Lise', 'le narrateur', 'Mathieu'], 0, 'C’est sa colère. EN: Lise.', 'a5-piege'),
        mc('« Elle avait répondu que ça ne la dérangeait pas d’attendre. » C’est du discours…', ['indirect', 'direct'], 0, 'Que, et le temps du récit. EN: indirect.', 'a5-trois'),
        tI(UN_MOT, 'Au discours direct, les paroles sont placées entre ... .', 'guillemets', 'On cite les mots exacts. EN: quotation marks.', 'a5-trois'),
        tI(UN_MOT, 'Au discours indirect, la parole passe par un verbe comme dire et par le mot ... .', 'que', 'Elle a dit que… EN: que.', 'a5-trois'),
        mc('Que révèle « avec cette fille » ?', ['le jugement de Lise', 'le jugement du narrateur'], 0, 'Le narrateur ne juge personne. EN: Lise’s judgement.', 'a5-lecture'),
        eS('Le narrateur n’aime pas l’amie de Mathieu.', 'Lise n’aime pas l’amie de Mathieu.', 'Rends le jugement à Lise. EN: it is Lise.', 'a5-piege', ['Sa mère n’aime pas l’amie de Mathieu.', 'La mère n’aime pas l’amie de Mathieu.']),
        lC('Écoute. Discours direct, indirect, ou style indirect libre ?', fr(E(1471)), ['style indirect libre', 'discours direct', 'discours indirect'], 0, 'Évidemment : sa voix, sans verbe de parole. EN: free indirect.', 'a5-reperer'),
      ],
    },
    {
      id: 'r6-tonalite', label: 'La tonalité', targets: ['tonalite-sans-moyen'],
      questions: [
        mc('Un texte qui montre une souffrance pour faire naître la pitié est…', ['pathétique', 'comique', 'neutre'], 0, 'Pathétique, au sens littéraire. EN: pathetic.', 'a6-tonalites'),
        mc('Des phrases très courtes, au présent, dans une poursuite, créent…', ['de la tension', 'du lyrisme'], 0, 'Le rythme suit le danger. EN: tension.', 'a6-moyens'),
        mc('Texte A, Gérard et son sandwich : « Il courut comme il n’avait pas couru depuis 1987. » L’effet est…', ['comique', 'pathétique', 'dramatique'], 0, 'Une exagération précise, en décalage. EN: comic.', 'a6-moyens'),
        tI(UN_MOT, 'Un je qui exprime ses émotions, avec des images et un rythme lent : la tonalité est ... .', 'lyrique', 'Les émotions d’un je. EN: lyrical.', 'a6-ecoute'),
        tI(UN_MOT, 'Le comique naît souvent d’un ... entre la situation et les mots.', 'décalage', 'L’écart fait rire. EN: a gap.', 'a6-tonalites', ['écart', 'contraste']),
        mc('« Le ton est triste. » Que manque-t-il à ce commentaire ?', ['le nom exact de la tonalité et ses moyens', 'une citation plus longue'], 0, 'Nomme, puis prouve. EN: name and prove.', 'a6-erreurs'),
        eS('La tonalité du texte C est lyrique : les phrases courtes créent la tension.', 'La tonalité du texte C est dramatique : les phrases courtes créent la tension.', 'Tension, danger : dramatique. EN: dramatic.', 'a6-tonalites'),
        lC('Écoute. Quelle est la tonalité de cette phrase ?', fr(E(1491)), ['lyrique', 'comique', 'dramatique'], 0, 'Un je, une émotion, une image. EN: lyrical.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-images', label: 'Les images', targets: ['image-sans-effet'],
      questions: [
        mc('« Les voiliers tiraient sur leurs cordes comme des chiens impatients. » C’est…', ['une comparaison', 'une métaphore', 'une personnification'], 0, 'L’outil comme. EN: a comparison.', 'a7-images'),
        mc('« Le ciel était une mer à l’envers. » C’est…', ['une métaphore', 'une comparaison'], 0, 'Sans outil. EN: a metaphor.', 'a7-images'),
        mc('« Comme il pleuvait, Élise est rentrée. » Ici, comme…', ['exprime la cause', 'introduit une comparaison'], 0, 'Comme = parce que. EN: cause.', 'a7-piege'),
        tI(UN_MOT, 'Donner à une chose des gestes humains, c’est une ... .', 'personnification', 'Le vent court, la maison dort. EN: personification.', 'a7-trier'),
        tI(UN_MOT, 'Une seule image qui continue dans tout un poème : une métaphore ... .', 'filée', 'Le vaisseau de Nelligan. EN: extended.', 'a7-images'),
        mc('Après avoir nommé une image, tu dois…', ['dire son effet', 'compter les images'], 0, 'L’effet donne la note. EN: its effect.', 'a7-commentaire'),
        eS('« Son cœur était un tambour » est une comparaison.', '« Son cœur était un tambour » est une métaphore.', 'Pas d’outil : métaphore. EN: a metaphor.', 'a7-texte'),
        lC('Écoute. Quelle image entends-tu ?', fr(E(1503)), ['une métaphore', 'une comparaison'], 0, 'Le lac est un lion, sans outil. EN: a metaphor.', 'a7-trier'),
      ],
    },
    {
      id: 'r8-portrait', label: 'Le portrait', targets: ['portrait-paraphrase'],
      questions: [
        mc('Dans un portrait, un détail inattendu sert souvent à…', ['révéler un caractère ou un secret', 'remplir la page'], 0, 'La pipe jamais allumée. EN: to reveal.', 'a8-fonctions'),
        mc('« On le disait bourru. » Ce jugement vient…', ['des gens de l’île', 'du narrateur'], 0, 'On : la rumeur, que le narrateur corrige. EN: the rumour.', 'a8-erreurs'),
        mc('Une description qui ralentit le récit…', ['fait connaître le personnage ou installe une atmosphère', 'ne sert à rien'], 0, 'Une pause voulue. EN: a deliberate pause.', 'a8-fonctions'),
        tI(UN_MOT, 'Des adjectifs qui montrent quelqu’un sous un beau jour sont ... .', 'mélioratifs', 'Le contraire de péjoratifs. EN: appreciative.', 'a8-erreurs', ['valorisants', 'laudatifs', 'élogieux', 'flatteurs', 'positifs']),
        tI('Complète avec l’adjectif verbal accordé (émouvoir).', 'Une scène ... .', 'émouvante', `« ${B213_REFRAME} » EN: ${B213_REFRAME_EN}`, 'a8-lire'),
        mc(`${Cap(GERONDIF_REF)} : « Il s’asseyait à l’arrière du bateau en fumant sa pipe. » Qui fume ?`, ['le sujet de s’asseyait', 'le bateau'], 0, `« ${B212_REFRAME} » EN: ${B212_REFRAME_EN}`, 'a8-lire'),
        eS('Le narrateur montre que le père Fortin est méchant.', 'Le narrateur montre que le père Fortin est généreux.', 'Les bonbons pour les enfants le prouvent. EN: generous.', 'a8-commentaire', ['Le narrateur montre que le père Fortin est bon.', 'Le narrateur montre que le père Fortin est gentil.', 'Le narrateur montre que le père Fortin est bienveillant.']),
        lC('Écoute. Que révèle ce détail ?', fr(E(1516)), ['sa bonté cachée', 'sa méchanceté'], 0, 'Bourru en apparence, généreux en vrai. EN: hidden kindness.', 'a8-lecture'),
      ],
    },
    {
      id: 'r9-debut-fin', label: 'Le début et la fin', targets: ['incipit-chute'],
      questions: [
        mc('« Vous êtes sûre que c’est lui ? » Cet incipit…', ['jette le lecteur au milieu de l’action', 'décrit un paysage'], 0, 'In medias res. EN: in the middle of things.', 'a9-fonctions'),
        mc('« Longtemps, je me suis couché de bonne heure. » Cet incipit installe…', ['une voix qui se souvient', 'une scène d’action', 'un dialogue'], 0, 'Un je, une habitude, la mémoire. EN: a remembering voice.', 'a9-incipits'),
        mc('Dans « La Parure », « Mais la mienne était fausse. » est…', ['la chute', 'l’incipit'], 0, 'La dernière révélation de la nouvelle. EN: the twist ending.', 'a9-chutes'),
        tI(UN_MOT, 'La fin surprenante d’une nouvelle s’appelle la ... .', 'chute', 'Elle renverse la lecture. EN: the twist.', 'a9-chutes'),
        tI(UN_MOT, 'La première phrase ou la première page d’un texte s’appelle son ... .', 'incipit', 'Il informe, intrigue, donne le ton. EN: the opening.', 'a9-incipits'),
        mc('Un incipit sert à…', ['informer, intriguer et donner le ton', 'résumer toute l’histoire'], 0, 'Il donne envie de lire. EN: it opens a pact.', 'a9-fonctions'),
        eS('La chute de la nouvelle confirme tout ce que croyait Mme Kaboré.', 'La chute de la nouvelle renverse tout ce que croyait Mme Kaboré.', 'Le suspect était le boulanger. EN: it overturns.', 'a9-lecture', ['La chute de la nouvelle contredit tout ce que croyait Mme Kaboré.', 'La chute de la nouvelle dément tout ce que croyait Mme Kaboré.']),
        lC('Écoute. Qu’annonce cette première phrase ?', Q_SEGUIN_1.fr, ['une série de malheurs', 'une histoire joyeuse'], 0, 'Jamais de bonheur avec ses chèvres. EN: misfortune.', 'a9-incipits'),
      ],
    },
    {
      id: 'r10-genres', label: 'Les genres', targets: ['genre-confondu'],
      questions: [
        mc('« (Elle se relève brusquement) » est…', ['une didascalie', 'une réplique'], 0, 'Une indication de jeu. EN: a stage direction.', 'a10-reconnaitre'),
        mc('Un récit court, souvent à chute, est…', ['une nouvelle', 'un roman', 'un poème'], 0, 'Court, un événement, une fin forte. EN: a short story.', 'a10-genres'),
        mc('« Il faut être toujours ivre. Tout est là : c’est l’unique question. » Baudelaire écrit ici…', ['un poème en prose', 'une scène de théâtre', 'un conte'], 0, 'Ni vers ni rimes, mais un poème. EN: a prose poem.', 'a10-genres'),
        tI(UN_MOT, 'Ce qu’un personnage de théâtre dit s’appelle une ... .', 'réplique', 'La didascalie, elle, ne se dit pas. EN: a line.', 'a10-reconnaitre'),
        tI(UN_MOT, 'Au théâtre, il n’y a pas de ... : les personnages parlent.', 'narrateur', 'Personne ne raconte. EN: narrator.', 'a10-erreurs'),
        mc('« Il était une fois… » ouvre souvent…', ['un conte', 'une pièce de théâtre'], 0, 'L’entrée dans un autre monde. EN: a tale.', 'a10-genres'),
        eS('La didascalie est dite par l’actrice sur scène.', 'La didascalie n’est pas dite par l’actrice sur scène.', 'Elle se lit et se joue. EN: not spoken.', 'a10-erreurs', ['La réplique est dite par l’actrice sur scène.', 'La didascalie est jouée par l’actrice sur scène.']),
        lC('Écoute. Réplique ou didascalie ?', fr(E(1542)), ['une réplique', 'une didascalie'], 0, 'Claire la dit à sa sœur. EN: a line.', 'a10-reconnaitre'),
      ],
    },
    {
      id: 'r11-commentaire', label: 'Écrire sur un texte', targets: ['commentaire-paraphrase'],
      questions: [
        mc('Un commentaire s’écrit…', ['au présent', 'au passé simple'], 0, 'Le présent de l’analyse. EN: in the present.', 'a11-erreurs'),
        mc('Une bonne citation, c’est…', ['quelques mots exacts glissés dans ta phrase', 'un paragraphe entier'], 0, 'Courte, exacte, commentée. EN: short and exact.', 'a11-citer'),
        mc('« On peut y voir une critique des adultes. » Cette formule…', ['propose une interprétation', 'raconte l’histoire'], 0, 'Prudente, appuyée sur le texte. EN: an interpretation.', 'a11-formules'),
        tI(UN_MOT, 'L’auteure met en ... la solitude du personnage.', 'relief', 'Mettre en relief : souligner. EN: to highlight.', 'a11-formules'),
        tI(UN_MOT, 'Le narrateur ... que le père l’aimait sans le dire.', 'suggère', 'Suggérer : dire sans dire. EN: suggests.', 'a11-formules', ['montre', 'sousentend', 'révèle', 'indique', 'insinue']),
        mc('Commenter, c’est…', ['montrer comment le texte produit son effet', 'raconter l’histoire'], 0, 'Ton lecteur connaît l’histoire. EN: show how it works.', 'a11-commentaire'),
        eS('Dans cet extrait, la narratrice raconta son premier jour de stage.', 'Dans cet extrait, la narratrice raconte son premier jour de stage.', 'Le commentaire reste au présent. EN: raconte.', 'a11-erreurs'),
        lC('Écoute. Cette phrase analyse-t-elle, ou raconte-t-elle ?', fr(E(1555)), ['elle analyse', 'elle raconte'], 0, 'Mettre en relief : une formule d’analyse. EN: it analyses.', 'a11-formules'),
      ],
    },
    {
      id: 'r12-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(PC_IMP_REF)} : « Il pleuvait quand Jeanne arriva. » Quel verbe fait avancer le récit ?`, ['arriva', 'pleuvait'], 0, `« ${B103_REFRAME} » EN: ${B103_REFRAME_EN}`, 'a4-temps'),
        mc(`${Cap(PASSE_SIMPLE_REF)} : « Jeanne prit la route un lundi. » Aujourd’hui, tu dirais…`, ['Jeanne a pris la route un lundi.', 'Jeanne prenait la route un lundi.', 'Jeanne prendra la route un lundi.'], 0, `« ${B208_REFRAME} » EN: ${B208_REFRAME_EN}`, 'a4-temps'),
        mc(`${Cap(PQP_REF)} : « Son père l’avait regardée partir. » Ce plus-que-parfait dit…`, ['ce qui était déjà fait avant le retour de Jeanne', 'ce qui arrivera plus tard'], 0, `« ${B201_REFRAME} » EN: ${B201_REFRAME_EN}`, 'a4-trier'),
        eS('Elle a dit qu’elle viendra le lendemain.', 'Elle a dit qu’elle viendrait le lendemain.', `« ${B119_REFRAME} » EN: ${B119_REFRAME_EN}`, 'a5-trois', [],
          `${Cap(DISCOURS_REF)} : une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.`),
        mc(`${Cap(SUBJ_LITT_REF)} : « Il fallait qu’elle vînt seule. » Aujourd’hui, tu dirais…`, ['Il fallait qu’elle vienne seule.', 'Il fallait qu’elle venait seule.'], 0, `« ${B209_REFRAME} » EN: ${B209_REFRAME_EN}`, 'a4-temps'),
        mc(`${Cap(GERONDIF_REF)} : « Elle s’est endormie en lisant. » Qui lisait ?`, ['elle', 'quelqu’un d’autre'], 0, `« ${B212_REFRAME} » EN: ${B212_REFRAME_EN}`, 'a8-lire'),
        tI(`${Cap(PARTICIPE_REF)} : complète avec l’adjectif verbal accordé (fatiguer).`, 'Une journée ... .', 'fatigante', `« ${B213_REFRAME} » EN: ${B213_REFRAME_EN}`, 'a8-lire'),
        lC(`Écoute. ${Cap(CRITIQUE_REF)} : ce compliment est-il sincère ?`, fr(SC2(1494)), ['non, il est ironique', 'oui, il est sincère'], 0, `« ${B224_REFRAME} » EN: ${B224_REFRAME_EN}`, 'a6-tonalites'),
      ],
    },
    {
      id: 'r13-examen', label: 'Comme au DELF B2', targets: ['examen-sans-preuve'],
      questions: [
        mc('Format DELF B2, compréhension écrite. L’extrait de l’acte 11 est…', ['un extrait de roman à la première personne', 'un article de presse', 'une scène de théâtre'], 0, 'Je, un récit au passé simple, des personnages. EN: a first-person novel extract.', 'a11-lecture'),
        mc('Format DELF B2. Vrai, faux ou non mentionné : « La narratrice connaissait bien le football. »', ['faux', 'vrai', 'non mentionné'], 0, '« Je ne connaissais rien au football. » EN: false.', 'a11-lecture'),
        mc('Format DELF B2. « Il ne me vit pas. Je toussai. Il me vit. » Ces phrases courtes produisent un effet…', ['comique', 'tragique', 'lyrique'], 0, 'La répétition fait sourire : on la remarque enfin. EN: comic.', 'a11-lecture'),
        mc('Format DELF B2. Quelle citation justifie que personne n’attendait la narratrice à son arrivée ?', ['« il n’y a personne avant dix heures »', '« Je montai quand même »', '« Deux mille signes pour midi »'], 0, 'La justification doit prouver l’idée. EN: the proof.', 'a11-lecture'),
        tI('Format DELF B2. Complète. Un mot.', 'La narratrice se moque d’elle-même : le texte est plein d’... .', 'autodérision', 'Rire de soi. EN: self-mockery.', 'a11-texte', ['autoironie', 'ironie', 'humour']),
        mc('Format DELF B2. Que laisse entendre le sourire du chef, « pour la première fois » ?', ['qu’elle a réussi, au moins en partie, son premier test', 'qu’il se moque de son texte'], 0, 'Il garde une phrase, et il sourit. EN: a first success.', 'a11-lecture'),
        eS('Dans cet extrait, la narratrice décrivit son premier jour de stage.', 'Dans cet extrait, la narratrice décrit son premier jour de stage.', 'Au présent, même si le texte est au passé simple. EN: décrit.', 'a11-erreurs', [],
          'Format DELF B2, production écrite. Un mot ne va pas. Écris la phrase correcte. EN: One word is wrong; write the sentence correctly.'),
        lC('Format DELF B2, compréhension orale. Écoute ce passage. Quelle est sa tonalité ?', PATHETIQUE_SAY, ['pathétique', 'comique', 'dramatique'], 0, 'Une attente vaine, des gestes lents : la pitié. EN: pathetic.', 'a6-tonalites'),
      ],
    },
  ],
  audio: AUDIO, say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. Each closed question's options are
 *  ROTATED, `correct` moved in step, onto the least-used slot so far. The
 *  option set and the right answer are unchanged. As b2.16 and b2.19. */
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
  type: 'reviewDeck', id: 'a12-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'the voice that tells the story', back: 'le narrateur, pas l’auteur', say: fr(E(1413)) },
    { front: 'a narrator who tells someone else’s story', back: 'un narrateur témoin', say: fr(E(1420)) },
    { front: 'seen through one character’s eyes', back: 'la focalisation interne', say: fr(E(1439)) },
    { front: 'years in a sentence', back: 'un sommaire', say: fr(E(1459)) },
    { front: 'the character’s voice with no quotation marks', back: 'le style indirect libre', say: fr(E(1473)) },
    { front: 'a tone that stirs pity', back: 'la tonalité pathétique', say: fr(E(1480)) },
    { front: 'an image with no linking word', back: 'une métaphore', say: fr(E(1505)) },
    { front: 'the twist at the end of a short story', back: 'la chute', say: fr(E(1534)) },
    { front: 'a stage direction', back: 'une didascalie', say: fr(E(1544)) },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Lire un texte littéraire, en résumé',
  body: `${REFRAME} ${Cap(LECTURE_B1_REF)} t’a appris à comprendre sans tout comprendre, ${CRITIQUE_REF} à juger un texte d’idées ; cette leçon t’a appris à lire une page d’écrivain : sa voix, son regard, son temps, sa tonalité, ses images, son début et sa fin. La suite de cette unité t’emmène vers la variation du français : les accents, les régions, les registres. EN: Next in this unit: variation in French, with its accents, regions and registers.`,
  points: [
    'Le narrateur n’est pas l’auteur ; au théâtre, personne ne raconte.',
    'Par quels yeux : interne, externe, omnisciente, et l’effet sur le lecteur.',
    'Une tonalité, une image, un rythme se prouvent par leurs moyens et leur effet.',
    'Ton commentaire : au présent, une idée, une citation courte, un effet.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['narrateur', 'citation'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ton commentaire',
    opener: {
      line: 'Un épicier éteint la lumière de son magasin pour la dernière fois : à toi d’écrire qui raconte, par quels yeux, et avec quels mots le texte t’émeut. EN: A grocer turns off his shop light for the last time: your turn to write who narrates, through whose eyes, and with which words the text moves you.',
      imageRef: 'lessons/lire-litterature/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit ton commentaire et passé l’examen : quatre-vingt-seize questions, douze manches. EN: You wrote your commentary and sat the exam: ninety-six questions, twelve rounds.',
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r5-paroles', 'a12-quiz/r9-debut-fin', 'a12-review'],
  },
  sections: [
    A12_LECTURE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-voix', title: 'Qui raconte', format: 'mcq' as const, coach: 'Le je d’un roman est une voix inventée : dis « le narrateur », et précise sa place. EN: say the narrator, and where they stand.', q: 'Un roman dit « je ». Tu écris d’abord…', opts: ['le narrateur', 'l’auteur'], correct: 0, why: 'Sauf autobiographie déclarée. EN: unless it is an autobiography.', items: [E(1413), E(1414), E(1420), E(1421), E(1426), E(1427)], audio: AUDIO },
  { id: 'd-focalisation', title: 'Dans une tête, ou au-dessus', format: 'sort' as const, coach: 'Deux piles : on voit par les yeux d’un personnage, ou de dehors et de partout. EN: one character’s eyes, or outside and everywhere.', buckets: ['par les yeux d’un personnage', 'de dehors, ou de partout'], items: [E(1433), E(1429), E(1439), E(1438), E(1437), E(1432)], audio: AUDIO },
  { id: 'd-temps', title: 'Le temps du récit', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute et dis ce qu’elle fait : décor, retour en arrière, sommaire. EN: say what each sentence does.', items: [E(1450), E(1455), E(1456), E(1457), E(1458), E(1459)], audio: AUDIO },
  { id: 'd-paroles', title: 'Rapporté, ou glissé', format: 'sort' as const, coach: 'Deux piles : la parole est citée ou rapportée, ou elle est glissée dans le récit. EN: quoted or reported, or slipped in.', buckets: ['discours direct ou indirect', 'style indirect libre'], items: [E(1465), E(1466), E(1469), E(1470), E(1467), E(1471)], audio: AUDIO },
  { id: 'd-tonalite', title: 'La tonalité et ses moyens', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : chacune nomme une tonalité avec son moyen. EN: each names a tone and its means.', items: [E(1480), E(1481), E(1482), E(1484), E(1485), E(1496)], audio: AUDIO },
  { id: 'd-images', title: 'Avec un outil, ou sans', format: 'sort' as const, coach: 'Deux piles : cherche comme, pareil à, on aurait dit. EN: look for a linking word.', buckets: ['une comparaison', 'une métaphore'], items: [E(1499), E(1500), E(1513), E(1501), E(1503), E(1510)], audio: AUDIO },
  { id: 'd-portrait', title: 'Ce que révèle un portrait', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : ce sont des phrases de commentaire, pas de résumé. EN: commentary, not summary.', items: [E(1519), E(1520), E(1521), E(1522), E(1523), E(1524)], audio: AUDIO },
  { id: 'd-incipit', title: 'Le début et la fin', format: 'mcq' as const, coach: 'Un incipit ouvre un pacte ; une chute le tient ou le renverse. EN: the opening promises, the ending delivers.', q: 'Un début qui entre directement dans l’action est…', opts: ['in medias res', 'un sommaire'], correct: 0, why: 'Au milieu des choses. EN: in the middle of things.', items: [E(1531), E(1534), E(1535), E(1536), E(1537), E(1538)], audio: AUDIO },
  { id: 'd-genres', title: 'Reconnaître un genre', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : la forme, puis la voix de chaque genre. EN: form, then voice.', items: [E(1544), E(1545), E(1546), E(1547), E(1550), E(1552)], audio: AUDIO },
  { id: 'd-commentaire', title: 'Les formules du commentaire', format: 'flashcard' as const, coach: 'Lis chaque phrase, puis écris la tienne sur le même modèle, à propos d’un autre texte. EN: read each, then write your own.', items: [E(1553), E(1554), E(1555), E(1556), E(1558), E(1561)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 et le B2 en renfort', format: 'flashcard' as const, coach: 'Six phrases des leçons précédentes : dis ce que chacune fait dans un récit. EN: say what each does in a narrative.', items: [RP, LIT(1146), GER, ADJ, SC2(1503), PR], audio: AUDIO },
  { id: 'd-examen', title: 'Répondre avec le texte', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : au DELF, chaque idée s’appuie sur quelques mots du texte. EN: every idea rests on a few words of the text.', items: [E(1567), E(1570), E(1571), E(1573), E(1559), E(1557)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'auteur-narrateur', description: 'Attributes a first-person narrator’s views or life to the author, or misses whether the narrator is hero, witness or outside the story.', detectOn: ['a2-qui', 'a2-piege', 'a2-check', 'a12-mission'], drill: 'd-voix', retest: 'd-voix' },
  { id: 'focalisation-confondue', description: 'Confuses internal, external and omniscient focalisation, or names the focalisation without its effect on the reader.', detectOn: ['a3-trier', 'a3-ecoute', 'a3-check', 'a12-mission'], drill: 'd-focalisation', retest: 'd-focalisation' },
  { id: 'temps-du-recit', description: 'Reads the présent de narration as today, a flashback as a tense error, or a summary or ellipsis as something the text forgot.', detectOn: ['a4-trier', 'a4-erreurs', 'a4-check', 'a12-mission'], drill: 'd-temps', retest: 'd-temps' },
  { id: 'indirect-libre', description: 'Takes a character’s free indirect thought for the narrator’s opinion, or mixes up direct and indirect speech.', detectOn: ['a5-reperer', 'a5-piege', 'a5-check', 'a12-mission'], drill: 'd-paroles', retest: 'd-paroles' },
  { id: 'tonalite-sans-moyen', description: 'Names a tone vaguely (triste, drôle) or without the words, rhythm and images that create it, or attributes it to the author.', detectOn: ['a6-moyens', 'a6-erreurs', 'a6-check', 'a12-mission'], drill: 'd-tonalite', retest: 'd-tonalite' },
  { id: 'image-sans-effet', description: 'Confuses comparison and metaphor, reads a causal comme as a comparison, or names an image without its effect.', detectOn: ['a7-trier', 'a7-piege', 'a7-check', 'a12-mission'], drill: 'd-images', retest: 'd-images' },
  { id: 'portrait-paraphrase', description: 'Lists a character’s features instead of saying what the portrait reveals, or takes a rumour for the narrator’s judgement.', detectOn: ['a8-lire', 'a8-erreurs', 'a8-check'], drill: 'd-portrait', retest: 'd-portrait' },
  { id: 'incipit-chute', description: 'Describes an opening or an ending without saying what it does: informing, intriguing, overturning the reading.', detectOn: ['a9-fonctions', 'a9-commentaire', 'a9-check', 'a12-mission'], drill: 'd-incipit', retest: 'd-incipit' },
  { id: 'genre-confondu', description: 'Confuses the genres, a réplique with a didascalie, or looks for a narrator in a play.', detectOn: ['a10-reconnaitre', 'a10-erreurs', 'a10-check'], drill: 'd-genres', retest: 'd-genres' },
  { id: 'commentaire-paraphrase', description: 'Retells the story, quotes whole sentences, writes the commentary in the passé simple, or gives personal taste instead of analysis.', detectOn: ['a11-citer', 'a11-erreurs', 'a11-check', 'a12-mission'], drill: 'd-commentaire', retest: 'd-commentaire' },
  { id: 'recyclage', description: 'Loses a contrast this lesson reads on: foreground and background, the passé simple and literary subjunctive mapped to today, reported speech, the gérondif’s subject, the adjectif verbal, irony.', detectOn: ['a4-temps', 'a5-trois', 'a8-lire'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'examen-sans-preuve', description: 'Answers a DELF B2 literary question with an opinion or no quotation, or misreads the tone of an extract.', detectOn: ['a11-lecture', 'a11-texte', 'a12-mission'], drill: 'd-examen', retest: 'd-examen' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` names a position. As b2.16 and b2.19. */
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
  sheet('sheet-voix', 'Qui raconte, qui voit, qui parle', ['le narrateur', 'la focalisation', 'les paroles rapportées'], [
    teach('sheet-voix-teach', 'La voix et le regard',
      `${REFRAME} L’auteur écrit, le narrateur raconte : même au je, c’est une voix inventée. Le regard (la focalisation) dit par quels yeux on voit. Les paroles des personnages sont citées, rapportées, ou glissées dans le récit. ${Cap(DISCOURS_REF)} disait : « ${B119_REFRAME} » EN: ${REFRAME_EN}`),
    table('sheet-voix-narrateurs', 'Le narrateur', ['Narrateur', 'Il dit', 'Exemple'], [
      ['personnage principal', 'je, sa propre histoire', 'La narratrice raconte sa propre enfance.'],
      ['témoin', 'je ou nous, l’histoire d’un autre', 'le « nous » du début de Madame Bovary'],
      ['extérieur à l’histoire', 'il, elle', 'Le narrateur ne fait pas partie de l’histoire.'],
      ['autobiographie', 'je = l’auteur = le personnage', 'le seul cas où l’on peut dire « l’auteur »'],
    ]),
    table('sheet-voix-focalisations', 'La focalisation', ['Focalisation', 'On voit', 'Indices'], [
      ['interne', 'par les yeux d’un personnage', 'lui parut, lui semblaient, ses questions'],
      ['externe', 'comme une caméra', 'des gestes et des paroles, aucune pensée'],
      ['zéro (omnisciente)', 'tout, partout', 'les pensées de plusieurs, l’avenir'],
    ]),
    table('sheet-voix-discours', 'Les paroles et les pensées', ['Forme', 'Marques', 'Exemple'], [
      ['discours direct', 'guillemets, mots exacts', 'Elle se dit : « Il a encore oublié. »'],
      ['discours indirect', 'un verbe, que, les temps reculent', 'Elle se dit qu’il avait encore oublié.'],
      ['style indirect libre', 'ni guillemets ni que ; la voix du personnage', 'Il avait encore oublié, évidemment.'],
    ]),
  ]),
  sheet('sheet-temps', 'Le temps du récit', ['les plans', 'le retour en arrière', 'le rythme'], [
    teach('sheet-temps-teach', 'Le temps, travaillé par le texte',
      `Dans un récit au passé, le passé simple fait avancer l’action et l’imparfait pose le décor (${PASSE_SIMPLE_REF}, ${PC_IMP_REF}). Le plus-que-parfait ouvre un retour en arrière (${PQP_REF}). Le présent de narration rapproche un moment fort. Et le récit accélère ou ralentit selon ce qui compte. EN: tenses set the plans; speed shows what matters.`),
    table('sheet-temps-roles', 'Les temps et leur rôle', ['Temps', 'Rôle', 'Exemple'], [
      ['passé simple', 'le premier plan : ce qui arrive', 'Jeanne prit la route un lundi.'],
      ['imparfait', 'l’arrière-plan : décor, durée', 'Le phare était éteint depuis trente ans.'],
      ['plus-que-parfait', 'le retour en arrière', 'Elle avait quitté la Gaspésie à dix-sept ans.'],
      ['présent de narration', 'le gros plan sur un moment fort', 'Enfin, elle entre.'],
    ]),
    table('sheet-temps-rythme', 'Le rythme', ['Procédé', 'Ce que fait le texte', 'Exemple'], [
      ['la scène', 'il s’attarde sur un moment', 'Devant la porte, elle hésita longtemps.'],
      ['le sommaire', 'il résume des années', 'Elle vécut à Montréal, puis à Lyon, se maria…'],
      ['l’ellipse', 'il saute une période', 'Trois ans plus tard, ils ne se parlaient plus.'],
      ['la pause', 'il décrit, l’action s’arrête', 'les mêmes maisons blanches, le même vent'],
      ['l’analepse', 'il revient en arrière', 'Son père l’avait donc regardée partir.'],
    ]),
  ]),
  sheet('sheet-style', 'Tonalités, images, portrait', ['six tonalités', 'trois images', 'lire un portrait'], [
    teach('sheet-style-teach', 'Avec quels mots',
      'Une tonalité, une image ou un portrait se commentent en trois temps : nomme-les, montre le moyen dans le texte (une citation courte), dis l’effet sur le lecteur. Un procédé sans effet ne rapporte rien. EN: name it, show the means, say the effect.'),
    table('sheet-style-tonalites', 'Les tonalités', ['Tonalité', 'Effet', 'Moyens'], [
      ['comique', 'le rire', 'exagération, décalage, chute'],
      ['ironique', 'un sourire critique', 'guillemets, antiphrase, décalage'],
      ['lyrique', 'les émotions d’un je', 'je, images, rythme musical'],
      ['pathétique', 'la pitié', 'douleur, solitude, silence'],
      ['dramatique', 'la tension', 'phrases courtes, présent, danger'],
      ['neutre', 'aucune émotion affichée', 'faits, gestes, verbes simples'],
    ]),
    table('sheet-style-images', 'Les images', ['Image', 'Marque', 'Exemple'], [
      ['comparaison', 'un outil : comme, tel, pareil à, on aurait dit', 'comme des chiens impatients'],
      ['métaphore', 'pas d’outil : l’un est l’autre', 'Le ciel était une mer à l’envers.'],
      ['métaphore filée', 'une image qui continue', 'le vaisseau de Nelligan'],
      ['personnification', 'une chose agit en personne', 'Le vent courut dans les rues.'],
      ['attention', 'comme peut dire la cause', 'Comme il pleuvait, Élise est rentrée.'],
    ]),
    table('sheet-style-portrait', 'Lire un portrait', ['Élément', 'Question à poser'], [
      ['le corps', 'que dit-il du caractère ?'],
      ['le détail', 'quel secret révèle-t-il ?'],
      ['les gestes', 'quelle habitude, quelle rigueur ?'],
      ['les adjectifs', 'quel regard du narrateur ?'],
      ['la rumeur (on)', 'le texte la confirme-t-il ?'],
    ]),
  ]),
  sheet('sheet-genres', 'Débuts, fins et genres', ['l’incipit', 'la chute', 'les genres', 'le théâtre'], [
    teach('sheet-genres-teach', 'Commencer, finir, reconnaître',
      'L’incipit informe, intrigue et donne le ton ; il peut poser un décor ou commencer au milieu de l’action. La chute d’une nouvelle surprend et fait relire le texte autrement. Chaque genre a sa forme et sa voix ; au théâtre, personne ne raconte. EN: openings, endings, genres.'),
    table('sheet-genres-incipits', 'Quatre incipits', ['Incipit', 'Ce qu’il fait'], [
      [`${Q_COEUR.source}`, 'un sommaire de cinquante ans, une question'],
      [`${Q_PROUST.source}`, 'une voix qui se souvient'],
      [`${Q_PARURE_1.source}`, 'un portrait qui annonce un destin'],
      [`${Q_SEGUIN_1.source}`, 'une première phrase qui annonce la fin'],
    ]),
    table('sheet-genres-genres', 'Les genres', ['Genre', 'Forme', 'Qui parle'], [
      ['roman', 'long, plusieurs personnages', 'un narrateur'],
      ['nouvelle', 'court, souvent à chute', 'un narrateur'],
      ['conte', 'un autre monde, une leçon', 'un narrateur'],
      ['poème en vers', 'vers, rythme, souvent rimes', 'souvent un je lyrique'],
      ['poème en prose', 'des phrases, sans vers ni rimes', 'souvent un je lyrique'],
      ['théâtre', 'répliques et didascalies', 'les personnages'],
    ]),
    table('sheet-genres-theatre', 'Le vocabulaire du théâtre', ['Mot', 'Sens'], [
      ['la réplique', 'ce qu’un personnage dit'],
      ['la didascalie', 'une indication de décor, de geste ou de ton, jamais dite'],
      ['le monologue', 'un personnage seul, qui parle'],
      ['un temps', 'une courte pause dans le jeu'],
    ]),
  ]),
  sheet('sheet-commentaire', 'Écrire sur un texte', ['les formules', 'citer', 'le plan du commentaire'], [
    teach('sheet-commentaire-teach', 'Une idée, une citation, un effet',
      'Un commentaire s’écrit au présent. Il n’a pas à raconter l’histoire : il montre comment le texte produit son effet. Chaque idée s’appuie sur quelques mots exacts, entre guillemets, glissés dans ta phrase ; si tu coupes, écris [...]. EN: present tense, short quotations, analysis not retelling.'),
    table('sheet-commentaire-formules', 'Les formules', ['Pour…', 'Formule'], [
      ['dire ce que le texte sous-entend', 'Le narrateur suggère que… Le texte laisse entendre que…'],
      ['interpréter avec prudence', 'On peut y voir…'],
      ['dire ce qui est souligné', 'L’auteure met en relief…'],
      ['relier un moyen à un effet', 'Grâce à cette comparaison, … Ce passage produit un effet de…'],
      ['conclure', 'En somme, ce passage…'],
    ]),
    table('sheet-commentaire-plan', 'Le plan du commentaire', ['Étape', 'Ce que tu écris'], [
      ['1', 'le genre, le sujet, qui raconte'],
      ['2', 'par quels yeux, et l’effet sur le lecteur'],
      ['3', 'la tonalité et deux moyens, avec des citations'],
      ['4', 'la fin : le dernier geste, la dernière phrase'],
      ['5', 'une conclusion, au présent'],
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
  ...ITEM_IDS.filter((id) => !ROW.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-30-[a-z0-9-]+/g) ?? [])];

const TEXT_BRIEF = 'ONE VOICE, one take, read as a literary text, never performed. The label « Texte original écrit pour la leçon » is read plainly first.';
const REC_DESC: Record<string, string> = {
  'rec-b2-30-voisin': `The act 1 novel opening. ${TEXT_BRIEF} A man in his seventies, Québec French, dry and a little pompous: he must sound sure of himself, never aware that he is being ridiculous. Times read in full: « vingt et une heures douze », « seize heures cinq ».`,
  'rec-b2-30-lambert': `The act 2 memoir. ${TEXT_BRIEF} A woman in her forties, Belgian French, warm and measured; « ce qui était pire » at ordinary weight, with no irony.`,
  'rec-b2-30-voix': 'The four narrator cards. Card three is Flaubert’s first sentence: read it plainly, as prose, with the name of the work said as a label before it.',
  'rec-b2-30-piege-narrateur': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-b2-30-aminata': `The act 3 novel page. ${TEXT_BRIEF} A Senegalese woman’s voice, standard French with a light Dakar accent; the two questions in Aminata’s head (« Où était donc sa tante ? », « Voulait-il l’aider, ou la voler ? ») slightly lowered, as thought.`,
  'rec-b2-30-ecoute-regards': 'REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, in authored order, neutral narrator pace. The change of point of view must come from the WORDS only: no change of tone between the external, internal and omniscient lines.',
  'rec-b2-30-texte-a3': 'The man in the café (act 3). One voice, flat and even like a camera; no emotion on « elle était encore pleine ».',
  'rec-b2-30-jeanne': `The act 4 novel page. ${TEXT_BRIEF} A woman in her fifties, Québec French. From « Enfin, elle entre » the pace slows slightly for the présent; no other change of tone.`,
  'rec-b2-30-temps': 'The four time cards: the three sentences with a passé simple are read as literary lines, with no stress on the verb ending.',
  'rec-b2-30-texte-a4': 'Paul and Nadia (act 4). One voice, even; a clear beat before « Il ne rit plus ».',
  'rec-b2-30-lise': `The act 5 short story. ${TEXT_BRIEF} A Montréal woman’s voice, Québec French. The free indirect sentences (« Évidemment, il avait oublié », « Qu’il se débrouille ») carry Lise’s irritation lightly; Mathieu’s last line in a young man’s voice, spoken and Québécois (« j’ai plus de batterie »).`,
  'rec-b2-30-piege-libre': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-b2-30-texte-a5': 'M. Bélanger (act 5). One voice; his free indirect anger lightly coloured; « Rien, dit-il. De la publicité. » flat and tired.',
  'rec-b2-30-trains': `The three train pages (act 6). ${TEXT_BRIEF} Read « A », « B », « C » as labels. A: light and quick, deadpan; B: slow and quiet; C: fast, clipped, present tense. The tone may follow the text, but never louder than a good audiobook.`,
  'rec-b2-30-ecoute-plage': 'REQUIRED FOR THE TONE MISSION (act 6): eight lines, ONE TAKE, ONE WOMAN’S VOICE, in authored order, slow and even like waves. The lyrical tone must be audible (warmth, slowness) without sobbing or theatrical pauses.',
  'rec-b2-30-texte-a6': 'The director’s speech (act 6). One neutral narrator voice: the quoted words (« efforts exceptionnels », « la grande famille ») with the small lift of a quotation, no sarcasm in the voice; the irony is in the words.',
  'rec-b2-30-elise': `The act 7 novel page. ${TEXT_BRIEF} A Swiss French voice, calm; the storm is in the words, not in the reading.`,
  'rec-b2-30-images': 'The four image cards. Card four is the first line of Nelligan’s sonnet: read as a line of verse, with its source said as a label before it.',
  'rec-b2-30-piege-images': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-b2-30-texte-a7': 'The town waking up (act 7). One voice, light; a clear beat before « Il était là ».',
  'rec-b2-30-fortin': `The act 8 portrait. ${TEXT_BRIEF} An older Québec voice, unhurried; « Ça dépend du fleuve » in the ferryman’s gruff voice.`,
  'rec-b2-30-texte-a8': 'Germinal (act 8). The framing sentences read plainly; Zola’s sentence read slowly and whole, as a long literary sentence, with its commas breathed.',
  'rec-b2-30-kabore': `The act 9 short story. ${TEXT_BRIEF} One voice, lively, a touch of humour at the twist; the policewoman’s opening question as a real question.`,
  'rec-b2-30-incipits': 'The four famous first sentences. Each preceded by its source, read as a label. Read the quotations slowly and plainly, with no dramatic effect.',
  'rec-b2-30-texte-a9': 'Hélène Morin (act 9). One voice; the short sentences in the middle read as a list, evenly.',
  'rec-b2-30-soeurs': 'The theatre scene (act 10). THREE VOICES: a neutral reader for the didascalies (read as stage directions, a little faster and flatter), ROSE (older sister, tense) and CLAIRE (softer). Belgian French. The characters’ names are NOT read before each line; the change of voice shows who speaks. The final laugh may be heard.',
  'rec-b2-30-texte-a10': 'The prose poem (act 10). One voice, lyrical and light; the repeated « Je voudrais » at the same pace.',
  'rec-b2-30-stagiaire': `The DELF-style extract (act 11). ${TEXT_BRIEF} An Ivorian woman’s voice, standard French, amused; read at the even pace of an exam recording. The editor’s lines in a man’s voice, brisk.`,
  'rec-b2-30-texte-a11': 'The commentary paragraph (act 11). One voice, the clear, neutral pace of someone reading their own analysis; the quotations with the slight lift of a quotation.',
  'rec-b2-30-armand': `THE TASK EXTRACT (act 12). ${TEXT_BRIEF} An older man’s voice, Québec French, restrained. « Totale, vraiment. » dry, almost under the breath; « merci, bonne journée » as Armand says it to a customer; the last sentence slow, after a beat.`,
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 30',
  intro: 'You can read a text for its meaning and judge an argument. A novel, a short story, a poem or a play asks for something more: who is speaking, through whose eyes, with which words. This lesson reads twelve literary pages, from a Montréal book club to Dakar, Brussels and Abidjan, and a handful of famous first sentences. It covers the narrator, point of view, time in narration, reported thought and free indirect style, tone and imagery, portraits, openings and twist endings, the genres, and how to write about a text. It ends with a 200 to 250 word commentary on an extract.',
  skill: 'CE',
  grammarAssumed: [LECTURE_B1_UNIT, CRITIQUE_UNIT, PASSE_SIMPLE_UNIT, PC_IMP_UNIT, PQP_UNIT, DISCOURS_UNIT],
  grammarIntroduced: [
    'The narrator as distinct from the author: first and third person, the narrator who is the hero, a witness, or outside the story; the autobiographical pact',
    'Focalisation: internal, external and zero (omniscient), recognised by perception verbs, thoughts and knowledge, with its effect on the reader',
    'Time in narration: foreground and background, the présent de narration, analepse, ellipse, scène and sommaire',
    'Reported words and thoughts: direct, indirect, and recognising the style indirect libre',
    'Literary tone (comique, ironique, lyrique, pathétique, dramatique, neutre) and imagery (comparaison, métaphore, personnification), always with the means and the effect; description and portrait; incipit and chute; the genres at recognition level; writing a commentary with brief quotations',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Tu sais comprendre un texte et juger un argument. Une page de roman, une nouvelle, un poème ou une scène de théâtre demandent autre chose : qui parle, par quels yeux, avec quels mots. Cette leçon lit douze pages littéraires, d’un club de lecture de Montréal à Dakar, Bruxelles et Abidjan, et quelques premières phrases célèbres. À la fin, tu écris un commentaire de 200 à 250 mots sur un extrait.',
    minutes: 170,
    difficulty: 4,
    glyph: 'plume',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: LIRE_LITTERATURE_TERMS,
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

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, TEXTE_ARMAND };
export const lessonWithoutTask = (): Lesson => LESSON;
