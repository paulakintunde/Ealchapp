// c2.13.l1 « Correction et révision » — the lesson. DRAFT, first lesson of
// C2 wave 4 (Révision et maîtrise). To RICH-LESSON-STANDARD.md (the
// workshop shape, text and task) on top of B1-BUILD-PLAYBOOK.md, with the
// C2 rules of C2-BUILD-PLAN.md and the c2.13 brief in C2-RESEARCH-PLAN.md.
//
// Not imported, not merged into seed.json, not published. No Postgres
// session was opened while authoring this file: every predecessor is cited
// by REFRAME import and by trail position read from the local `seed.json`'s
// units array, never by reusing another lesson's item id.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Eight acts, one throughline: Soline Marchetti and the volunteers who
//   write « La Feuille », a neighbourhood association's monthly newsletter,
//   catch and repair four recurring coherence faults in each other's drafts,
//   always in an otherwise grammatically correct text (C2 has no grammar
//   lesson, C2-BUILD-PLAN.md). Acts 1 names the problem and recaps the whole
//   langue-soignee thread; acts 2-5 teach one fault each (register,
//   redundancy, reference, transition), with domain variety; act 6 is the
//   central C2 trap, a text "corrected" for one fault while another remains;
//   act 7 rehearses the four-question checklist; act 8 is the graded
//   revision of a brand-new flawed draft carrying all four faults at once.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Un texte presque sous presse      6  one register slip almost
//                                            ships; the whole langue-soignee
//                                            thread recapped, never re-taught
//    2  Le registre qui glisse            6  an unmarked tonal shift, either
//                                            direction, across a bulletin, an
//                                            email, an academic abstract
//    3  La redondance                     5  the same idea said twice:
//                                            sentence level, paragraph level,
//                                            pleonasm inside one clause
//    4  La référence qui dérive           5  a drifted or ambiguous
//                                            reference, repaired with c1.05's
//                                            own toolkit
//    5  La transition qui ne tient pas    5  a connector that promises a
//                                            relationship the sentence does
//                                            not deliver
//    6  Le piège : une correction         4  the stepped trap: two "fixed"
//       peut en cacher une autre             versions, each repairing one
//                                            fault while leaving another
//    7  Avant ta révision                 3  rehearsing the four-question
//                                            checklist, in order, out loud
//    8  Ta révision                      10  the model draft, the plan, the
//                                            rehearsal, TASK, quiz, review,
//                                            roundup
//
//   TOTAL 44 missions, 8 acts (6,6,5,5,5,4,3,10). Corpus: 87 authored rows
//   (.2600-.2686, inside the claimed .2600-.2799 block). Quiz: 8 rounds of
//   6 (mcq, typeIn, errorSpot, listenChoose mixed). Eight error triggers,
//   eight remediation drills, two reference sheets, five terms, two
//   cardDecks, one tapTable. Chapter artwork:
//   `c2-correction-revision-image-prompts.md`, 8 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Se relire, c'est reprendre le fil du texte jusqu'à ce qu'il tienne,
//   d'un bout à l'autre. » EN: Rereading means picking the text's thread
//   back up until it holds, from one end to the other.
//
//   ONE METAPHOR, THE THREAD. « Le fil » is already the French idiom for a
//   text's thread of sense; a register slip is a patch of the wrong colour
//   sewn into the cloth, redundancy is a seam sewn twice, a dangling
//   reference is a thread that trails off joined to nothing, a weak
//   transition is a stitch that pulls the fabric a way the seam never
//   promised. Correcting is following the thread again, the whole way
//   through, even through a seam already mended once (act 6's trap).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    diagnosing and repairing four named coherence faults in an
//           already grammatically correct C2 text: an unmarked register
//           slip, a redundant restatement, a drifted or ambiguous
//           reference, and a connector that does not deliver its promised
//           logical relationship; the stepped trap that one correction can
//           hide another; producing a full revision of a new flawed draft.
//   QUOTES  c1.05's, c1.06's, c1.17's and c1.22's reframes (act 1), each
//           imported from its own corpus file, never retyped.
//   LEAVES  re-teaching any predecessor's own ground: c1.05's full ellipsis
//           grammar (le neutre, faire, gapping, sluicing, ledit), c1.06's
//           full hedging inventory, c1.17's intensity scales and suffixes,
//           c1.22's own translation-fidelity method (faux sens, contresens).
//           Only the repair TOOLS and the general METHOD are recapped, on
//           brand-new sentences, never on a predecessor's own rows.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; every invented character is a peer, so none uses
//   vous with another. French only on the learner surface; English authored
//   on every `en` field and every trailing « EN: », never shown by default.
//   No em dash, no U+203F tie, never "honnête"/"honnêtement"/"honest".
//   Typographic ’ throughout. No spaced « ? » or « ! » in a scene or story
//   bubble. Citations by trail position in French words (« la leçon 5 du
//   C1 »), never a raw id. Mission answer slots are spread by
//   `balanceSlots()`; the quiz is left with its authored slots scattered by
//   hand, as c2.06 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 44 missions, close to c2.06's 44. Every sub-topic in the brief is
//      covered once, fully. Extend any single act before the phone review,
//      or ship at this size?
//   2. The task (act 8) marks all four coherence fixes together, a
//      four-criterion rubric (20 points). Split into two shorter tasks
//      instead (one for register and redundancy, one for reference and
//      transition)?
//   3. The task's source draft ("le brouillon d'Inès") is a brand-new
//      paragraph, never reused from acts 1-6, so the graded task tests
//      transfer rather than a text the learner has already seen corrected.
//      Confirm this is the wanted route, or reuse act 6's trap paragraph
//      instead for a shorter authoring pass?
//   4. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.
//   5. All flawed/corrected text pairs in this lesson are ORIGINAL, written
//      for this lesson (brief's required route, to sidestep any copyright
//      question and to control exactly which fault appears where). Confirm
//      this is the wanted route.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap, ALL_ROWS, ROWS_BY_ACT,
  IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor, MISSION_SOURCE, MISSION_SOURCE_EN,
  C105_REF, C105_REFRAME, C105_REFRAME_EN,
  C106_REF, C106_REFRAME, C106_REFRAME_EN,
  C117_REF, C117_REFRAME, C117_REFRAME_EN,
  C122_REF, C122_REFRAME, C122_REFRAME_EN,
} from './correction-revision-corpus.ts';
import { CORRECTION_TERMS } from './correction-revision-terms.ts';

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

/** An item's fr/en. Throws on a typo, so no section can name an id that
 *  does not exist in this lesson's own corpus. */
function src(id: string): SrcItem {
  const r = ROW.get(id);
  if (!r) throw new Error(`c2.13: no item ${id}`);
  return r;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
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

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — UN TEXTE PRESQUE SOUS PRESSE
 * ══════════════════════════════════════════════════════════════════════════ */

const DRAFT_PARAGRAPH =
  'Le grand nettoyage de printemps rassemblera, comme chaque année, les riverains désireux de redonner au quartier son éclat d’antan. Les bénévoles se répartiront en plusieurs équipes, chacune chargée d’un secteur précis, de la place du marché jusqu’aux abords du parc. On prévoit même un petit goûter après, ça va être trop cool. Les familles sont cordialement invitées à se joindre à cette mobilisation collective.';
const DRAFT_PARAGRAPH_EN =
  'The great spring clean-up will bring together, as every year, residents keen to restore the neighbourhood’s former glow. Volunteers will split into several teams, each in charge of a specific area, from the market square to the edge of the park. A little snack is even planned afterward, it is going to be really cool. Families are cordially invited to join this collective effort.';
/** A short, core-screen-sized excerpt of the draft for the scene bubble
 *  (density's core-words cap is 45); the full paragraph lives in a1-lecture. */
const DRAFT_EXCERPT =
  'Les bénévoles se répartiront en plusieurs équipes, chacune chargée d’un secteur précis. On prévoit même un petit goûter après, ça va être trop cool.';
const DRAFT_EXCERPT_EN =
  'Volunteers will split into several teams, each in charge of a specific area. A little snack is even planned afterward, it is going to be really cool.';

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Un texte presque sous presse', frSub: 'Le local de l’association',
  setting: { place: 'Le local de l’association du quartier', city: '', time: '17 h', ambience: 'un ordinateur allumé, une imprimante qui attend' },
  beats: [
    { kind: 'narration', text: 'Soline Marchetti rédige « La Feuille », le bulletin mensuel de l’association, depuis trois ans. L’imprimeur attend le fichier dans une heure.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Soline', fr: src(E(2601)).fr, en: src(E(2601)).en, respell: '[zhuh dwa ahⁿ-vwa-YAY sa a laⁿ-pree-MUHR dahⁿz ün UHR]', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'Elle relit une dernière fois son article sur le grand nettoyage de printemps.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'coach', fr: DRAFT_EXCERPT, en: DRAFT_EXCERPT_EN, size: 'lg', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Qu’est-ce qui cloche, avant que Soline n’envoie le fichier.', size: 'lg',
      options: [
        { fr: src(E(2609)).fr, en: src(E(2609)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(2610)).fr, en: src(E(2610)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Soline relit la phrase du goûter et hoche la tête : « Ah oui, je vois. »',
        breaks: 'Soline relit la troisième phrase : « Non, la virgule est bonne. Regarde encore. »',
      },
    },
    {
      kind: 'break', heading: 'Un ton qui glisse, une seule fois',
      body: `${src(E(2607)).fr} EN: ${src(E(2607)).en}`,
      wrong: { fr: src(E(2600)).fr, ipa: '/ɔ̃ pʁevwa mɛm œ̃ pəti gute apʁɛ sa va ɛtʁ tʁo kul/', respell: '[ohⁿ pray-VWA mem uhⁿ puh-TEE goo-TAY a-PREH sa va EHTR troh kool]', en: src(E(2600)).en },
      right: { fr: src(E(2602)).fr, ipa: '/ɔ̃ pʁevwa mɛm œ̃ gute a lisy də la matine/', respell: '[ohⁿ pray-VWA mem uhⁿ goo-TAY a lee-SÜ duh la ma-TEEN]', en: src(E(2602)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Soline corrige la phrase et envoie le fichier à temps. Cette leçon t’apprend à repérer ce genre de faute, et trois autres comme elle, dans n’importe quel texte que tu relis, le tien ou celui d’un autre.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['registre'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Repérer un registre qui glisse', s: 'Acte 2 : une phrase qui change de ton sans prévenir' },
    { t: 'Repérer une redondance', s: 'Acte 3 : la même idée, dite deux fois' },
    { t: 'Repérer une référence qui dérive', s: 'Acte 4 : un pronom qui a perdu son nom, avec les outils de la leçon 5 du C1' },
    { t: 'Repérer une transition qui ne tient pas', s: 'Acte 5 : un connecteur qui ne dit pas vrai' },
    { t: 'Réviser un texte entier, jamais une seule faute', s: 'Actes 6 à 8 : le piège central, la méthode, puis ta mission' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'Le brouillon de Soline', frSub: 'Avant la correction',
  text: `« ${DRAFT_PARAGRAPH} »\n\nSoline relit son article une dernière fois avant l’impression. Quelque chose cloche, mais quoi.`,
  glossary: [
    { word: 'riverains', en: 'local residents', note: 'Les habitants du quartier. EN: the people who live in the neighbourhood.' },
  ],
  questions: [
    { q: 'Laquelle des quatre fautes de cette leçon apparaît dans ce texte.', a: 'Un registre qui glisse : la phrase sur le goûter sonne familière, alors que tout le reste du paragraphe est soutenu.' },
    { q: 'Pourquoi cette faute ne serait-elle jamais sanctionnée comme une faute de grammaire.', a: 'Parce que la phrase est grammaticalement correcte ; le problème est son ton, pas sa forme.' },
    { q: 'Quelle serait une bonne façon de corriger cette phrase, sans en changer le sens.', a: 'Garder l’idée d’un goûter prévu après le nettoyage, dans des mots aussi soutenus que le reste du texte.' },
  ],
  audio: REC('rec-c2-13-brouillon-soline'), say: REFRAME, terms: ['registre'],
};

const A1_ACQUIS: Sec<'examples'> = {
  type: 'examples', id: 'a1-acquis', layer: 'core', sheetId: 'sheet-correction',
  title: 'Ce que tu sais déjà',
  examples: [
    { fr: C105_REFRAME, en: C105_REFRAME_EN, note: `${Cap(C105_REF)} : quatre façons de réparer une reprise ambiguë` },
    { fr: C106_REFRAME, en: C106_REFRAME_EN, note: `${Cap(C106_REF)} : le registre comme une question de dosage, à l’oral` },
    { fr: C117_REFRAME, en: C117_REFRAME_EN, note: `${Cap(C117_REF)} : choisir entre synonymes proches selon leur registre et leur connotation` },
    { fr: C122_REFRAME, en: C122_REFRAME_EN, note: `${Cap(C122_REF)} : reformuler par le sens, et rendre visibles les connecteurs d’un paragraphe` },
  ],
  audio: AUDIO, say: REFRAME, terms: ['quatreQuestions'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Un courriel professionnel avant l’envoi', fr: src(E(2611)).fr, en: src(E(2611)).en },
    { situation: 'Une thèse relue la veille de la remise', fr: src(E(2612)).fr, en: src(E(2612)).en },
    { situation: 'Un discours de mariage écrit à l’avance', fr: src(E(2613)).fr, en: src(E(2613)).en },
    { situation: 'Une relecture à voix haute, contre une relecture silencieuse', fr: src(E(2614)).fr, en: src(E(2614)).en },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le genre de faute', 'Les quatre fautes de cette leçon sont des fautes de...', ['grammaire, comme au C1', 'cohérence, dans un texte par ailleurs correct'], 1,
    'Le C2 n’ajoute aucune forme grammaticale nouvelle. EN: C2 adds no new grammatical form.'),
  ctl('Ce que Soline repère', 'Dans le brouillon de Soline, la phrase sur le goûter...', ['contient une faute de grammaire', 'sonne plus familière que le reste du texte'], 1,
    'Chaque mot pris seul est correct ; seul le ton change. EN: every word taken alone is correct; only the tone changes.'),
  ctl('La mission de cette leçon', 'Cette leçon t’apprend à...', ['réviser un texte entier contre quatre fautes de cohérence', 'corriger uniquement l’orthographe', 'réécrire un texte entièrement, sans garder ses faits'], 0,
    'Réviser, pas réécrire ni corriger l’orthographe seule. EN: revise, never rewrite from scratch nor correct spelling alone.'),
], ['registre']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Un texte presque sous presse',
    opener: {
      line: 'Soline relit son article une dernière fois avant l’imprimeur : une seule phrase, mal accordée en ton, menace de partir avec tout le reste. EN: Soline rereads her article one last time before the printer: a single sentence, mismatched in tone, threatens to go to print with everything else.',
      imageRef: 'lessons/c2-13-correction-revision/act01.jpg',
    },
    sections: [],
    milestone: 'Tu nommes les quatre fautes de cohérence que cette leçon t’apprend à repérer, et tu sais qu’aucune n’est une faute de grammaire. EN: You can name the four coherence faults this lesson teaches you to spot, and you know none of them is a grammar mistake.',
    estScreens: 24, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_ACQUIS, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LE REGISTRE QUI GLISSE
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-deck', render: 'deck', layer: 'core', size: 'lg',
  title: 'Trois textes, un même glissement', frSub: 'Le ton qui change sans prévenir',
  hint: 'Trois cartes. Chaque fois, le fait ne change pas ; le ton, oui, pour une phrase seulement.',
  audio: REC('rec-c2-13-trois-registres'), say: REFRAME, terms: ['registre'],
  cards: [
    { head: 'Le bulletin', label: 'une aparté trop familière', fr: src(E(2615)).fr, sub: '[frahⁿ-SHMAHⁿ sa fay play-ZEER duh vwar sa]',
      body: 'Le reste du compte rendu est soutenu ; « franchement, ça fait plaisir de voir ça » parle à voix basse, entre amis. EN: the rest of the report is formal; "franchement, ça fait plaisir de voir ça" speaks in a low, casual voice.' },
    { head: 'Le courriel', label: 'un relâchement final', fr: src(E(2617)).fr, sub: '[ühⁿ trük klosh]',
      body: 'L’ouverture est soignée, formelle ; « un truc cloche » referme la phrase sur un mot de tous les jours. EN: the opening is careful, formal; "un truc cloche" closes the sentence on an everyday word.' },
    { head: 'Le résumé universitaire', label: 'le glissement inverse', fr: src(E(2619)).fr, sub: '[koh-roh-boh-RAHⁿ duh ma-NYEHR seeg-nee-fee-ka-TEEV]',
      body: 'Ici, c’est l’inverse : un ton décontracté bascule, en fin de phrase, dans un jargon trop savant pour le reste. EN: here, it is the reverse: a relaxed tone tips, by the sentence’s end, into jargon too learned for the rest.' },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a2-table', layer: 'core', sheetId: 'sheet-correction',
  title: 'Le brouillon, la version corrigée',
  cols: ['Le brouillon', 'La version corrigée'],
  rows: [
    { cells: [src(E(2615)).fr, src(E(2616)).fr], say: src(E(2616)).fr,
      detail: { title: 'Même fait, même ton du début à la fin', body: 'Le fait (un bilan clair, bien reçu) ne change pas ; seule l’aparté familière disparaît. EN: the fact does not change; only the familiar aside disappears.', say: src(E(2615)).fr } },
    { cells: [src(E(2617)).fr, src(E(2618)).fr], say: src(E(2618)).fr,
      detail: { title: 'Le même service offert, dans le même registre', body: '« Me relancer » et « un truc » retombent dans le familier ; « me solliciter » et « un point » restent soutenus. EN: the familiar verb and noun are replaced by their soutenu equivalents.', say: src(E(2617)).fr } },
    { cells: [src(E(2619)).fr, src(E(2620)).fr], say: src(E(2620)).fr,
      detail: { title: 'Le glissement inverse, corrigé lui aussi', body: 'Le ton décontracté du début (« deux ou trois trucs ») doit rester cohérent avec la fin ; le jargon excessif est redescendu, pas supprimé. EN: the relaxed opening tone must stay consistent with the ending; the excessive jargon is brought down, not erased.', say: src(E(2619)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a2-exemples', layer: 'core', title: 'Ce qui aide à corriger, rappelé',
  examples: [
    ex(E(2621), 'le mot qui reste au même niveau que les phrases autour'),
    ex(E(2625), `${Cap(C106_REF)} : le dosage à l’oral, rappelé pour un paragraphe entier à l’écrit`),
    ex(E(2626), `${Cap(C117_REF)} : le choix du bon synonyme, une fois le glissement repéré`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre'],
};

const A2_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-groupe', layer: 'core', size: 'lg',
  title: 'Repère le glissement', frSub: 'Quatre textes, un ton qui bouge',
  groups: [
    grp('Le bulletin', [
      it(E(2615), 'l’aparté familière'),
      it(E(2616), 'le ton tenu jusqu’au bout'),
    ], chk('Entre ces deux versions, ce qui change est...', ['le bilan présenté', 'seulement le ton de la seconde phrase'], 1,
      'Le fait (un bilan clair, bien reçu) reste identique. EN: the fact stays identical.')),
    grp('Le courriel', [
      it(E(2617), 'la fin relâchée'),
      it(E(2618), 'la fin tenue'),
    ], chk('« Un truc cloche » et « un point appelle une précision » disent...', ['deux choses différentes', 'la même chose, à deux niveaux de langue'], 1,
      'Le service offert ne change pas, seul le registre du verbe et du nom change. EN: the offer stays the same, only the verb’s and noun’s register changes.')),
    grp('Le compte rendu', [
      it(E(2627), 'l’aparté qui glisse'),
      it(E(2628), 'la version tenue'),
    ], chk('« Il fallait bien que quelqu’un s’y colle » rompt le ton parce que...', ['elle est trop longue', 'elle sonne comme une plainte amicale, pas comme un compte rendu'], 1,
      'Un compte rendu garde un ton neutre du début à la fin. EN: minutes keep a neutral tone throughout.')),
    ctl('Le résumé universitaire', 'Le résumé universitaire glisse, lui, du...', ['soutenu vers le familier', 'décontracté vers un jargon trop savant pour la phrase'], 1,
      'Le glissement va dans les deux sens, pas seulement vers le familier. EN: the slip goes both ways, not only toward informal.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a2-ecoute', layer: 'core', hideLines: true,
  title: 'Glissé ou tenu', frSub: 'Huit phrases, quatre paires',
  lines: [ln(E(2615)), ln(E(2616)), ln(E(2617)), ln(E(2618)), ln(E(2619)), ln(E(2620)), ln(E(2627)), ln(E(2628))],
  questions: [
    { q: 'Première et deuxième phrases : laquelle garde une aparté familière.', opts: ['la première', 'la deuxième'], correct: 0,
      why: 'La première garde l’aparté sur le plaisir ressenti. EN: the first keeps the aside about feeling pleased.' },
    { q: 'Troisième et quatrième phrases : laquelle referme sur un mot courant.', opts: ['la troisième', 'la quatrième'], correct: 0,
      why: '« Un truc cloche » est courant ; « un point appelle une précision » reste soutenu. EN: the third ends on an everyday phrase.' },
    { q: 'Cinquième et sixième phrases : laquelle glisse vers un jargon trop savant.', opts: ['la cinquième', 'la sixième'], correct: 0,
      why: 'La cinquième finit sur « corroborent de manière significative », trop savant pour son début. EN: the fifth ends on overly learned phrasing.' },
    { q: 'Septième et huitième phrases : laquelle sonne comme une plainte amicale.', opts: ['la septième', 'la huitième'], correct: 0,
      why: '« Il fallait bien que quelqu’un s’y colle » sonne comme une plainte entre amis. EN: it sounds like a friendly complaint.' },
  ],
  audio: REC('rec-c2-13-glisse-ou-tenu'), say: REFRAME, terms: ['registre'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le sens du glissement', 'Un registre qui glisse va...', ['toujours du soutenu vers le familier', 'dans les deux sens, familier vers soutenu aussi'], 1,
    'Le glissement peut aussi monter trop haut, pas seulement descendre. EN: the slip can also climb too high, not only drop.'),
  ctl('Le test', 'Pour repérer un glissement, tu te demandes...', ['si la phrase est trop longue', 'si un lecteur d’une seule phrase devinerait le ton du reste'], 1,
    'C’est le test de l’acte 2. EN: this is act 2’s test.'),
  ctl('La réparation', 'Corriger un registre qui glisse veut dire choisir...', ['le mot le plus soutenu possible, pour être sûr', 'le mot qui reste au même niveau que les phrases autour'], 1,
    'Le niveau constant compte, pas l’élévation maximale. EN: a constant level matters, not maximal elevation.'),
], ['registre']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Le registre qui glisse',
    opener: {
      line: 'Un bulletin, un courriel, un résumé universitaire : dans chacun, une seule phrase trahit tout le reste par son ton. EN: A newsletter, an email, an academic summary: in each, a single sentence betrays everything else by its tone.',
      imageRef: 'lessons/c2-13-correction-revision/act02.jpg',
    },
    sections: [],
    milestone: 'Tu repères une phrase qui change de ton sans prévenir, dans les deux sens, et tu la corriges sans toucher au fait qu’elle porte. EN: You can spot a sentence that changes tone without warning, in either direction, and correct it without touching the fact it carries.',
    estScreens: 26, restPoints: ['a2-table', 'a2-groupe'],
  },
  sections: [A2_DECK, A2_TABLE, A2_EXEMPLES, A2_GROUPE, A2_ECOUTE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LA REDONDANCE
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a3-histoire', layer: 'core',
  title: 'Thierry dit tout deux fois', frSub: 'Son premier article pour « La Feuille »',
  setting: 'Thierry, nouveau bénévole, relit son premier article avec Léna.',
  bubbles: [
    { from: 'narrator', fr: 'La réunion du comité, reportée.', en: 'The committee meeting, postponed.' },
    { from: 'coach', fr: src(E(2630)).fr, en: src(E(2630)).en },
    { from: 'user', fr: src(E(2631)).fr, en: src(E(2631)).en },
    { from: 'narrator', fr: 'Les ventes de la boutique solidaire, au premier trimestre.', en: 'The solidarity shop’s sales, in the first quarter.' },
    { from: 'coach', fr: src(E(2632)).fr, en: src(E(2632)).en },
    { from: 'user', fr: src(E(2633)).fr, en: src(E(2633)).en },
  ],
  closing: { fr: 'Même geste, deux fois : garder le fait, couper seulement sa répétition.', en: 'The same move, twice: keep the fact, cut only its repetition.' },
  audio: REC('rec-c2-13-thierry-redondance'), say: REFRAME, terms: ['redondance'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a3-exemples', layer: 'core', title: 'Trois façons de dire deux fois',
  examples: [
    ex(E(2634), 'une erreur grossière, doublée de « manifestement évidente »'),
    ex(E(2635), 'la même phrase, sans le mot qui double'),
    ex(E(2641), 'un projet ambitieux, dont la conclusion répète ce qui vient d’être dit'),
    ex(E(2642), 'la même phrase, sans la conclusion redondante'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['redondance'],
};

const A3_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-groupe', layer: 'core', size: 'lg',
  title: 'Garde le fait, coupe la redite', frSub: 'Trois redondances, trois coupes',
  groups: [
    grp('La réunion reportée', [
      it(E(2630), 'dit deux fois'),
      it(E(2631), 'dit une fois'),
    ], chk('La seconde moitié de la phrase longue...', ['ajoute une information nouvelle', 'redit ce que « reportée à la semaine prochaine » dit déjà'], 1,
      '« Reportée à la semaine prochaine » dit déjà qu’elle n’aura pas lieu cette semaine. EN: "postponed to next week" already says it will not happen this week.')),
    grp('Les ventes du trimestre', [
      it(E(2632), 'la conclusion qui redit'),
      it(E(2633), 'la conclusion qui ajoute'),
    ], chk('« En somme, les ventes ont connu une baisse importante » ajoute-t-elle un fait nouveau.', ['oui, un chiffre précis', 'non, elle redit la première phrase avec d’autres mots'], 1,
      'Une bonne coupe libère la place pour un fait vraiment nouveau. EN: a good cut frees space for a genuinely new fact.')),
    ctl('Le projet ambitieux', 'Dans « un projet vraiment très ambitieux », le dernier mot...', ['précise un fait nouveau', 'redit « ambitieux », déjà présent au début de la phrase'], 1,
      'La conclusion ne fait que reprendre l’adjectif déjà donné. EN: the conclusion only repeats the adjective already given.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['redondance'],
};

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a3-ecoute', layer: 'core', hideLines: true,
  title: 'Dit une fois ou dit deux fois', frSub: 'Huit phrases, quatre paires',
  lines: [ln(E(2630)), ln(E(2631)), ln(E(2632)), ln(E(2633)), ln(E(2634)), ln(E(2635)), ln(E(2641)), ln(E(2642))],
  questions: [
    { q: 'Première et deuxième phrases : laquelle dit le fait une seule fois.', opts: ['la première', 'la deuxième'], correct: 1,
      why: 'La seconde garde seulement « reportée à la semaine prochaine ». EN: the second keeps only the postponement itself.' },
    { q: 'Troisième et quatrième phrases : laquelle ajoute un fait nouveau à la fin.', opts: ['la troisième', 'la quatrième'], correct: 1,
      why: 'La quatrième ajoute « qui pèse sur l’ensemble de l’exercice ». EN: the fourth adds a genuinely new fact.' },
    { q: 'Cinquième et sixième phrases : laquelle garde un mot qui double un autre mot.', opts: ['la cinquième', 'la sixième'], correct: 0,
      why: '« Manifestement évidente » double le sens de « grossière ». EN: it doubles the meaning of "grossière".' },
    { q: 'Septième et huitième phrases : laquelle répète l’adjectif du début, à la fin.', opts: ['la septième', 'la huitième'], correct: 0,
      why: 'Elle referme sur « vraiment très ambitieux », déjà dit. EN: it closes by repeating "ambitieux".' },
  ],
  audio: REC('rec-c2-13-dit-une-ou-deux-fois'), say: REFRAME, terms: ['redondance'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Comment couper', 'Pour corriger une redondance, tu...', ['coupes au hasard l’une des deux phrases', 'gardes la phrase qui porte le fait, et supprimes celle qui le redit'], 1,
    'La règle de l’acte 3. EN: act 3’s rule.'),
  ctl('Le mot qui double', '« Manifestement évidente » double le sens de...', ['« erreur »', '« grossière »'], 1,
    '« Grossière » dit déjà que l’erreur est évidente. EN: "grossière" already says the error is obvious.'),
  ctl('Le bénéfice d’une bonne coupe', 'Une bonne coupe de redondance libère souvent de la place pour...', ['une information vraiment nouvelle', 'rien en particulier'], 0,
    'Couper la redite ouvre un espace utile. EN: cutting the restatement opens useful space.'),
], ['redondance']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La redondance',
    opener: {
      line: 'Thierry écrit sa première phrase, puis la redit, autrement, juste après, sans s’en rendre compte. EN: Thierry writes his first sentence, then restates it, differently, right after, without noticing.',
      imageRef: 'lessons/c2-13-correction-revision/act03.jpg',
    },
    sections: [],
    milestone: 'Tu repères une idée dite deux fois, en phrases ou en mots, et tu coupes la redite sans perdre le fait. EN: You can spot an idea said twice, in sentences or in words, and cut the repetition without losing the fact.',
    estScreens: 22, restPoints: ['a3-groupe'],
  },
  sections: [A3_HISTOIRE, A3_EXEMPLES, A3_GROUPE, A3_ECOUTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA RÉFÉRENCE QUI DÉRIVE
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a4-lecture', layer: 'core', questionsInModal: true,
  title: 'Le rapport du conseil', frSub: 'Une référence qui a déjà dérivé',
  text: `« ${src(E(2647)).fr} »\n\nLéna relit cette phrase trois fois. La première fois, « cela » semble clair. La seconde fois, elle se demande : le premier « cela » et le second nomment-ils vraiment la même chose, ou le second a-t-il déjà dérivé vers autre chose, sans qu’elle s’en aperçoive.`,
  glossary: [
    { word: 'réfection', en: 'renovation', note: 'Le fait de refaire quelque chose d’abîmé ou de vieux. EN: the act of redoing something damaged or old.' },
  ],
  questions: [
    { q: 'À quoi renvoie le premier « cela » de cette phrase.', a: 'À toute la décision du conseil de reporter les travaux du parc.' },
    { q: 'Le second « cela » nomme-t-il clairement la même chose.', a: 'Il la reprend, mais le lecteur doit le deviner : rien dans la phrase ne le confirme clairement, surtout après un autre verbe entre les deux.' },
    { q: 'Quel mot unique pourrait remplacer les deux « cela » pour nommer clairement la décision.', a: '« Ce report », l’hyperonyme qui résume toute la décision en un seul nom.' },
  ],
  audio: REC('rec-c2-13-rapport-conseil'), say: REFRAME, terms: ['reference'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a4-exemples', layer: 'core', sheetId: 'sheet-correction', title: 'Les réparations de la leçon 5 du C1, et une de plus',
  examples: [
    { fr: C105_REFRAME, en: C105_REFRAME_EN, note: `${Cap(C105_REF)} : plusieurs réparations pour une reprise ambiguë` },
    ex(E(2644), 'répéter le nom : la présidente, puis la trésorière, chacune nommée'),
    ex(E(2646), 'reconstruire la phrase : Soline, nommée directement, jamais « cette dernière »'),
    ex(E(2648), 'une réparation de plus, utile ici : l’hyperonyme, « ce report », résume toute la décision en un mot'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['reference'],
};

const A4_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-groupe', layer: 'core', size: 'lg',
  title: 'Répare la référence', frSub: 'Trois dérives, trois réparations',
  groups: [
    grp('Elle, ambigu', [
      it(E(2643), 'ambigu entre deux noms féminins'),
      it(E(2644), 'réparé en répétant le nom'),
    ], chk('Dans la première phrase, « elle » peut renvoyer à...', ['un seul nom possible', 'la présidente ou la trésorière, les deux plausibles'], 1,
      'Les deux sont des sujets plausibles de « a pris la parole ». EN: both are plausible subjects of "spoke".')),
    grp('Cette dernière, mal posée', [
      it(E(2645), 'grammaticalement proche, mais impossible par le sens'),
      it(E(2646), 'réparé en nommant directement'),
    ], chk('« Cette dernière, trop pressée » décrit une personne ; or « cette dernière » pointe vers...', ['Thierry', '« la version finale », qui ne peut pas être « pressée »'], 1,
      '« Cette dernière » pointe toujours vers le nom le plus proche, même quand le sens s’y refuse. EN: "cette dernière" always points to the nearest noun, even when meaning resists it.')),
    ctl('Cela, deux fois', 'Dans « cela inquiète..., qui craignent que cela ne retarde... », les deux « cela »...', ['nomment chacun quelque chose de différent', 'nomment la même décision, mais sans jamais la nommer par un mot précis'], 1,
      'L’hyperonyme « ce report » répare cette dérive en un seul mot. EN: the hyperonym "ce report" repairs this drift in one word.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['reference'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'Dérivé ou réparé', frSub: 'Six phrases, trois paires',
  lines: [ln(E(2643)), ln(E(2644)), ln(E(2645)), ln(E(2646)), ln(E(2647)), ln(E(2648))],
  questions: [
    { q: 'Première et deuxième phrases : laquelle répète le nom pour éviter l’ambiguïté.', opts: ['la première', 'la deuxième'], correct: 1,
      why: 'La deuxième nomme « la trésorière » au lieu de dire « elle ». EN: the second names "la trésorière" instead of saying "elle".' },
    { q: 'Troisième et quatrième phrases : laquelle garde un « cette dernière » impossible par le sens.', opts: ['la troisième', 'la quatrième'], correct: 0,
      why: 'Une version ne peut pas être « trop pressée » ; seule une personne le peut. EN: a version cannot be "too rushed"; only a person can.' },
    { q: 'Cinquième et sixième phrases : laquelle nomme la décision par un seul mot précis.', opts: ['la cinquième', 'la sixième'], correct: 1,
      why: 'La sixième utilise « ce report » au lieu de deux « cela ». EN: the sixth uses "ce report" instead of two "cela".' },
  ],
  audio: REC('rec-c2-13-derive-ou-repare'), say: REFRAME, terms: ['reference'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La règle de « cette dernière »', '« Cette dernière » pointe toujours vers...', ['le nom le plus proche, jamais celui que le sens viserait', 'le nom le plus important de la phrase'], 0,
    'La proximité grammaticale décide, pas l’importance. EN: grammatical closeness decides, not importance.'),
  ctl('Que faire si le bon nom n’est pas le plus proche', 'Si « cette dernière » ne peut pas viser le bon nom, tu...', ['l’utilises tout de même, le sens corrigera', 'répètes le nom ou reconstruis la phrase'], 1,
    'Deux réparations possibles, jamais « cette dernière » en force. EN: two possible repairs, never "cette dernière" forced through.'),
  ctl('Le cela qui dérive', 'Un « cela » qui revient deux fois sans qu’on sache ce qu’il nomme la seconde fois est...', ['toujours sans problème', 'une référence qui a déjà dérivé'], 1,
    'C’est le nom de ce piège. EN: this trap’s name.'),
], ['reference']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La référence qui dérive',
    opener: {
      line: 'Léna relit une phrase trois fois avant de comprendre qu’un « cela » ne nomme plus ce qu’elle croyait. EN: Léna rereads a sentence three times before realising a "cela" no longer names what she thought.',
      imageRef: 'lessons/c2-13-correction-revision/act04.jpg',
    },
    sections: [],
    milestone: 'Tu repères un pronom ou un démonstratif dont le nom a dérivé, et tu le répares avec les outils de la leçon 5 du C1. EN: You can spot a pronoun or demonstrative whose noun has drifted, and repair it with lesson 5 of C1’s own toolkit.',
    estScreens: 24, restPoints: ['a4-lecture', 'a4-groupe'],
  },
  sections: [A4_LECTURE, A4_EXEMPLES, A4_GROUPE, A4_ECOUTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LA TRANSITION QUI NE TIENT PAS
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-deck', render: 'deck', layer: 'core', size: 'lg',
  title: 'Trois connecteurs, trois promesses rompues', frSub: 'Donc, cependant, par conséquent',
  hint: 'Trois cartes. Chaque connecteur promet une relation ; vérifie qu’elle tient.',
  audio: REC('rec-c2-13-trois-connecteurs'), say: REFRAME, terms: ['transition'],
  cards: [
    { head: 'Donc', label: 'une cause absente', fr: src(E(2656)).fr, sub: '[lor-gaⁿ-ee-za-SYOHⁿ or-ga-nee-ze-RA dohⁿk]',
      body: 'Doubler le nombre de bénévoles ne cause pas, en soi, un barbecue ; « donc » promet une cause qui n’est jamais venue. EN: doubling the number of volunteers does not, on its own, cause a barbecue; "donc" promises a cause that never comes.' },
    { head: 'Cependant', label: 'une opposition absente', fr: src(E(2658)).fr, sub: '[suh-pahⁿ-dahⁿ luh pray-zee-DAHⁿ a ruh-mehr-SYAY]',
      body: 'Un bon bilan et des remerciements ne s’opposent pas ; « cependant » promet un contraste qui n’existe pas ici. EN: a good report and words of thanks do not contrast; "cependant" promises an opposition that is not there.' },
    { head: 'Par conséquent', label: 'une logique inversée', fr: src(E(2660)).fr, sub: '[la sal a-bee-tü-EL eh duh-vuh-NÜ troh grahⁿd]',
      body: 'Plus d’inscriptions devrait rendre une salle trop PETITE, pas trop grande ; le connecteur garde une logique à l’envers. EN: more registrations should make a room too SMALL, not too big; the connector keeps a backwards logic.' },
  ],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a5-exemples', layer: 'core', title: 'La promesse de chaque connecteur',
  examples: [
    { fr: C122_REFRAME, en: C122_REFRAME_EN, note: `${Cap(C122_REF)}, acte « le fil » : rendre visibles les connecteurs d’un paragraphe, en traduisant` },
    ex(E(2663), 'la promesse de donc, cependant, par conséquent'),
    ex(E(2664), 'corriger le connecteur, ou corriger le fait'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['transition'],
};

const A5_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-groupe', layer: 'core', size: 'lg',
  title: 'Teste la promesse', frSub: 'Chaque connecteur, vérifié',
  groups: [
    grp('Donc', [
      it(E(2656), 'la cause absente'),
      it(E(2657), 'réparé par un connecteur qui tient sa promesse'),
    ], chk('« D’ailleurs » promet, lui...', ['une cause', 'un fait ajouté, sans prétendre à une cause'], 1,
      '« D’ailleurs » ne promet rien de causal. EN: "d’ailleurs" promises nothing causal.')),
    grp('Cependant', [
      it(E(2658), 'l’opposition absente'),
      it(E(2659), 'réparé par « par ailleurs »'),
    ], chk('Un bon bilan suivi de remerciements est-il une opposition.', ['oui', 'non, ce sont deux faits qui s’ajoutent'], 1,
      '« Par ailleurs » annonce un ajout, pas un contraste. EN: "par ailleurs" announces an addition, not a contrast.')),
    grp('Par conséquent', [
      it(E(2660), 'la logique inversée'),
      it(E(2661), 'la logique réparée'),
    ], chk('Plus d’inscriptions que prévu rend une salle habituelle...', ['trop grande', 'trop petite'], 1,
      'Plus de monde a besoin de plus de place, jamais moins. EN: more people need more room, never less.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['transition'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a5-ecoute', layer: 'core', hideLines: true,
  title: 'La promesse tenue ou rompue', frSub: 'Six phrases, trois paires',
  lines: [ln(E(2656)), ln(E(2657)), ln(E(2658)), ln(E(2659)), ln(E(2660)), ln(E(2661))],
  questions: [
    { q: 'Première et deuxième phrases : laquelle garde un « donc » sans vraie cause.', opts: ['la première', 'la deuxième'], correct: 0,
      why: 'La première garde « donc » sans cause réelle. EN: the first keeps "donc" with no real cause.' },
    { q: 'Troisième et quatrième phrases : laquelle garde « cependant » sans vraie opposition.', opts: ['la troisième', 'la quatrième'], correct: 0,
      why: 'La troisième oppose deux faits qui ne s’opposent pas. EN: the third contrasts two facts that do not contrast.' },
    { q: 'Cinquième et sixième phrases : laquelle garde une logique inversée.', opts: ['la cinquième', 'la sixième'], correct: 0,
      why: 'La cinquième dit « trop grande » alors que plus d’inscriptions demande plus de place. EN: the fifth says "too big" when more registrations need more room.' },
  ],
  audio: REC('rec-c2-13-promesse-tenue'), say: REFRAME, terms: ['transition'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La promesse', 'Un connecteur logique...', ['décore la phrase, sans rien promettre', 'fait une promesse précise que la phrase doit tenir'], 1,
    'Donc une cause, cependant une opposition, par conséquent une suite précise. EN: "donc" a cause, "cependant" an opposition, "par conséquent" a precise consequence.'),
  ctl('Deux réparations', 'Une transition qui ne tient pas se corrige en...', ['changeant le connecteur, ou en corrigeant le fait', 'supprimant toujours la phrase entière'], 0,
    'Deux façons de réparer, jamais besoin de tout effacer. EN: two ways to repair, never a need to erase everything.'),
  ctl('Ce que cet acte recapitule', 'La leçon 22 du C1 t’a appris à rendre visibles les connecteurs ; ici...', ['le connecteur est absent, il faut le traduire', 'le connecteur est présent, mais il ne dit pas vrai'], 1,
    'Le problème est inverse de celui de la leçon 22 du C1. EN: the problem is the reverse of lesson 22 of C1’s.'),
], ['transition']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'La transition qui ne tient pas',
    opener: {
      line: 'Donc, cependant, par conséquent : trois connecteurs, trois promesses, et trois phrases qui ne les tiennent pas. EN: Donc, cependant, par conséquent: three connectors, three promises, and three sentences that do not keep them.',
      imageRef: 'lessons/c2-13-correction-revision/act05.jpg',
    },
    sections: [],
    milestone: 'Tu testes la promesse d’un connecteur contre ce que la phrase dit vraiment, et tu répares celui qui ne la tient pas. EN: You can test a connector’s promise against what the sentence really says, and repair the one that does not keep it.',
    estScreens: 22, restPoints: ['a5-groupe'],
  },
  sections: [A5_DECK, A5_EXEMPLES, A5_GROUPE, A5_ECOUTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LE PIÈGE CENTRAL
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_DECK: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a6-deck', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-piege-correction',
  title: 'Deux corrections, chacune incomplète', frSub: 'Une faute réparée peut en cacher une autre',
  hint: 'Trois cartes : le problème, puis deux corrections, aucune des deux complète.',
  audio: REC('rec-c2-13-deux-corrections'), say: REFRAME, terms: ['quatreQuestions'],
  cards: [
    { head: 'Le problème', label: 'deux fautes à la fois', fr: src(E(2668)).fr, sub: '[ehl a-vay pray-pa-RAY plü-zyuhr gra-FEEK]',
      body: 'Cette phrase garde une référence ambiguë (« elle ») ET une transition qui ne tient pas (« donc »). EN: this sentence keeps an ambiguous reference ("elle") AND a transition that does not hold ("donc").' },
    { head: 'Correction A', label: 'la référence, pas la transition', fr: src(E(2669)).fr, sub: '[la tray-zor-YEHR a-vay pray-pa-RAY]',
      body: '« Elle » devient « la trésorière » : la référence est réparée. Mais « donc » garde la même fausse promesse de cause. EN: "elle" becomes "la trésorière": the reference is repaired. But "donc" still keeps the same false promise of a cause.' },
    { head: 'Correction B', label: 'la transition, pas la référence', fr: src(E(2670)).fr, sub: '[nay-ahⁿ-MWAHⁿ vo-TAY ün oss duh dee poor sahⁿ]',
      body: '« Néanmoins... pour anticiper » dit vrai sur la relation logique. Mais « elle » reste ambigu entre la présidente et la trésorière. EN: "néanmoins... pour anticiper" tells the truth about the logical relation. But "elle" stays ambiguous.' },
  ],
};

const A6_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-groupe', layer: 'core', size: 'lg',
  title: 'Quelle faute reste', frSub: 'Deux corrections, chacune juge l’autre',
  groups: [
    ctl('Correction A', 'Dans la correction A, « elle » devient « la trésorière » ; quelle faute reste-t-il.', ['le registre', 'la transition : « donc » ne tient toujours pas sa promesse'], 1,
      'La référence est réparée, pas la transition. EN: the reference is fixed, not the transition.'),
    ctl('Correction B', 'Dans la correction B, le connecteur dit enfin vrai ; quelle faute reste-t-il.', ['la référence : « elle » reste ambigu entre la présidente et la trésorière', 'la redondance'], 0,
      'La transition est réparée, pas la référence. EN: the transition is fixed, not the reference.'),
    grp('Les deux réparées à la fois', [
      it(E(2670), 'la transition réparée seule, « elle » encore ambigu'),
      it(E(2671), 'la référence réparée aussi, en plus de la transition'),
    ], chk('Entre la correction B et cette version, ce qui change est...', ['rien, elles disent la même chose', 'le pronom « elle » devient « la trésorière », en plus de la transition déjà réparée'], 1,
      'Cette version répare la référence en plus de la transition déjà corrigée en B. EN: this version repairs the reference in addition to the transition already fixed in B.')),
    ctl('La leçon du piège', 'Ce double piège prouve que...', ['une seule correction, bien faite, suffit toujours', 'corriger une faute ne corrige jamais automatiquement les autres'], 1,
      'Il faut repasser les quatre questions sur tout le texte, même déjà corrigé. EN: you must run all four questions over the whole text, even what is already corrected.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['quatreQuestions'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a6-ecoute', layer: 'core', hideLines: true,
  title: 'Complètement corrigé, ou pas encore', frSub: 'Quatre versions de la même phrase',
  lines: [ln(E(2668)), ln(E(2669)), ln(E(2670)), ln(E(2671))],
  questions: [
    { q: 'Première et deuxième versions : laquelle a réparé la référence.', opts: ['la première', 'la deuxième'], correct: 1,
      why: 'La deuxième nomme « la trésorière » au lieu de dire « elle ». EN: the second names "la trésorière" instead of saying "elle".' },
    { q: 'Troisième et quatrième versions : laquelle garde encore « elle » ambigu.', opts: ['la troisième', 'la quatrième'], correct: 0,
      why: 'La troisième a réparé la transition, pas la référence. EN: the third fixed the transition, not the reference.' },
    { q: 'Quatrième version seulement : a-t-elle réparé les deux fautes à la fois.', opts: ['oui, les deux', 'non, une seule'], correct: 0,
      why: 'La quatrième combine les deux réparations. EN: the fourth combines both repairs.' },
  ],
  audio: REC('rec-c2-13-completement-corrige'), say: REFRAME, terms: ['quatreQuestions'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Une seule faute réparée', 'Réparer une seule faute sur un texte qui en a deux...', ['garantit un texte sans faute', 'laisse l’autre faute intacte'], 1,
    'Les deux corrections de cet acte le prouvent. EN: this act’s two corrections prove it.'),
  ctl('Comment savoir qu’une révision est complète', 'La seule façon de savoir est de...', ['se fier à la première impression', 'repasser les quatre questions, une par une, sur tout le texte'], 1,
    'Même sur ce qui vient d’être corrigé. EN: even on what was just corrected.'),
  ctl('Deux relecteurs', 'Deux relecteurs qui corrigent chacun une faute différente sur le même texte...', ['garantissent, à eux deux, un texte sans faute', 'ne le garantissent pas forcément'], 1,
    'Sans comparer leurs deux passes contre les quatre questions, rien ne le garantit. EN: without comparing both passes against the four questions, nothing guarantees it.'),
], ['quatreQuestions']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Le piège : une correction peut en cacher une autre',
    opener: {
      line: 'Deux versions corrigées de la même phrase, et aucune des deux n’est complètement corrigée : ici tu apprends pourquoi une seule passe ne suffit jamais. EN: Two corrected versions of the same sentence, and neither is fully corrected: here you learn why a single pass is never enough.',
      imageRef: 'lessons/c2-13-correction-revision/act06.jpg',
    },
    sections: [],
    milestone: 'Tu sais qu’une faute réparée n’empêche jamais une autre de rester, intacte, dans la même phrase. EN: You know that a fault repaired never stops another one from staying, untouched, in the same sentence.',
    estScreens: 20, restPoints: ['a6-deck'],
  },
  sections: [A6_DECK, A6_GROUPE, A6_ECOUTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — AVANT TA RÉVISION
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_STEPS: Sec<'steps'> = {
  type: 'steps', id: 'a7-steps', layer: 'core',
  title: 'Les quatre questions, dans l’ordre',
  steps: [
    '1. Le registre : une phrase sonne-t-elle plus familière ou plus savante que le reste. EN: register: does a sentence sound more informal or more learned than the rest.',
    '2. La redondance : une idée est-elle dite deux fois, en deux phrases ou en deux mots. EN: redundancy: is an idea said twice, in two sentences or two words.',
    '3. La référence : chaque pronom ou démonstratif renvoie-t-il clairement au bon nom. EN: reference: does every pronoun or demonstrative clearly point to the right noun.',
    '4. La transition : chaque connecteur tient-il la promesse logique qu’il fait. EN: transition: does every connector keep the logical promise it makes.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['quatreQuestions'],
};

const A7_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a7-scenario', layer: 'core', title: 'Soline demande le plan de Thierry',
  setting: 'Avant son prochain article, Thierry explique à Soline comment il compte se relire.',
  turns: [
    {
      ai: src(E(2677)).fr, en: src(E(2677)).en,
      user: src(E(2678)).fr, userEn: 'I check the register first, then I look for repeats, then I follow each pronoun to its noun, and finally I test each connector. (Naming the four questions, in order.)',
      alts: [
        { fr: 'D’abord le ton, puis les répétitions, puis chaque pronom, puis chaque connecteur.', en: 'First the tone, then the repeats, then each pronoun, then each connector.' },
        { fr: 'Je relis une fois pour le sens, puis une seconde fois, phrase par phrase, contre les quatre questions.', en: 'I reread once for meaning, then a second time, sentence by sentence, against the four questions.' },
      ],
    },
    {
      ai: src(E(2679)).fr, en: src(E(2679)).en,
      user: src(E(2680)).fr, userEn: 'Yes, because one correction can hide another; I reread the whole text against the four questions, even the already corrected passages. (Explaining why a second pass matters.)',
      alts: [
        { fr: 'Oui, parce qu’une faute réparée ailleurs n’empêche pas une autre de rester dans la même phrase.', en: 'Yes, because a fault repaired elsewhere does not stop another one from staying in the same sentence.' },
        { fr: 'Oui, je préfère toujours une deuxième passe complète à une confiance aveugle dans la première.', en: 'Yes, I always prefer a full second pass to blind trust in the first one.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['quatreQuestions'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Les quatre questions', 'La méthode de cette leçon tient en...', ['une seule question, répétée quatre fois', 'quatre questions distinctes, posées sur tout le texte'], 1,
    'Registre, redondance, référence, transition. EN: register, redundancy, reference, transition.'),
  ctl('L’ordre', 'Les quatre questions doivent-elles être posées dans un ordre fixe.', ['oui, toujours le même ordre', 'non, mais toutes les quatre, sur tout le texte'], 1,
    'L’ordre importe moins que la complétude. EN: completeness matters more than order.'),
  ctl('Un texte déjà relu une fois', 'Si le texte a déjà été relu une fois contre les quatre questions, tu...', ['passes directement à l’envoi', 'le relis une seconde fois, de la même façon'], 1,
    'Une correction peut en cacher une autre, même après une première passe complète. EN: one correction can hide another, even after a full first pass.'),
], ['quatreQuestions']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Avant ta révision',
    opener: {
      line: 'Soline demande à Thierry de nommer son plan, à voix haute, avant son prochain article : ici tu t’entraînes à faire pareil. EN: Soline asks Thierry to name his plan, out loud, before his next article: here you practise doing the same.',
      imageRef: 'lessons/c2-13-correction-revision/act07.jpg',
    },
    sections: [],
    milestone: 'Tu nommes les quatre questions, dans un ordre clair, et tu sais pourquoi une seule passe ne suffit jamais. EN: You can name the four questions, in a clear order, and you know why a single pass is never enough.',
    estScreens: 16, restPoints: ['a7-scenario'],
  },
  sections: [A7_STEPS, A7_SCENARIO, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — TA RÉVISION
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_MODELE: Sec<'reading'> = {
  type: 'reading', id: 'a8-modele', layer: 'core', questionsInModal: true,
  title: 'Le brouillon d’Inès', frSub: 'Lis-le comme tu liras le tien',
  text: MISSION_SOURCE,
  glossary: [
    { word: 'sortante', en: 'outgoing', note: 'Qui quitte sa fonction. EN: who is leaving their role.' },
  ],
  questions: [
    { q: 'Quelle phrase de ce brouillon change de registre par rapport au reste.', a: '« Franchement, ça va être une super année pour tout le monde. »' },
    { q: '« Celle-ci » pointe, par la règle de la leçon 5 du C1, vers quel nom ; et pourquoi ce nom ne peut-il pas être le bon.', a: 'Vers « la trésorière sortante », le nom le plus proche ; mais une trésorière sortante ne peut pas être « reconduite dans ses fonctions », donc le nom visé est en réalité la présidente.' },
    { q: 'Le « donc » de la troisième phrase promet-il une vraie cause.', a: 'Non : des comptes équilibrés ne causent pas, à eux seuls, de nouveaux projets ; rien n’explique pourquoi l’un entraînerait l’autre.' },
    { q: 'Quelle phrase répète une information déjà donnée, avec d’autres mots.', a: 'La dernière : « dernier jour pour faire connaître sa participation » redit « date limite pour s’inscrire ».' },
  ],
  audio: REC('rec-c2-13-brouillon-ines'), say: REFRAME, terms: ['quatreQuestions'],
};

const A8_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a8-plan', layer: 'core', sheetId: 'sheet-correction',
  title: 'Quatre passes pour ta révision',
  steps: [
    '1. Lis le texte une fois en entier, sans corriger, pour en garder le sens global. EN: read the whole text once, without correcting, to keep its overall meaning.',
    '2. Repère chaque faute : le registre, la redondance, la référence, la transition, une question à la fois. EN: spot each fault: register, redundancy, reference, transition, one question at a time.',
    '3. Corrige chaque faute en gardant exactement les mêmes faits. EN: correct each fault while keeping exactly the same facts.',
    '4. Relis le texte corrigé en entier, contre les quatre questions une nouvelle fois. EN: reread the corrected text in full, against the four questions once more.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['quatreQuestions'],
};

const A8_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a8-scenario', layer: 'core', title: 'Tu t’entraînes à voix haute, avec Léna',
  setting: 'Avant d’écrire ta version officielle, tu t’entraînes à voix haute avec Léna sur la phrase la plus difficile du brouillon d’Inès.',
  turns: [
    {
      ai: 'Celle-ci sera d’ailleurs reconduite dans ses fonctions. Dis-moi, à voix haute, comment tu corrigerais cette phrase sans en changer le fait.', en: '"Celle-ci sera d’ailleurs reconduite dans ses fonctions." Tell me, out loud, how you would correct this sentence without changing the fact it carries.',
      user: 'Je remplace « celle-ci » par « la présidente », puisque c’est elle qui sera reconduite, pas la trésorière sortante.', userEn: 'I replace "celle-ci" with "la présidente", since she is the one being reappointed, not the outgoing treasurer. (Repairing by repeating the name.)',
      alts: [
        { fr: 'Je garde l’idée d’une personne reconduite, mais je la nomme directement : « la présidente », pour ne plus dépendre d’un pronom ambigu.', en: 'I keep the idea of someone being reappointed, but I name her directly: "la présidente", so it no longer depends on an ambiguous pronoun.' },
        { fr: 'Je reconstruis la phrase : « La présidente, elle, sera reconduite dans ses fonctions, sauf avis contraire de l’assemblée. »', en: 'I rebuild the sentence: "The chairwoman, for her part, will be reappointed to her role, barring any objection from the assembly."' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['reference'],
};

/** THE GRADED TASK. A full revision of a new flawed draft, graded on all
 *  four coherence fixes together AND on keeping every fact unchanged
 *  (C2-BUILD-LOG, same fidelity logic as c2.06's mission). */
const A8_MISSION: Sec<'task'> = {
  type: 'task', id: 'a8-mission', title: 'Ta révision', frSub: 'Mission écrite', sheetId: 'sheet-correction',
  brief: `Soline te transmet le brouillon d’Inès pour « La Feuille » et te demande de le corriger avant l’impression. Voici le brouillon. ${MISSION_SOURCE}`,
  briefEn: 'Soline sends you Inès’s draft for “La Feuille” and asks you to correct it before printing. The draft is printed above so you can write with it in front of you.',
  produce: 'Écris une version corrigée de ce brouillon : répare le registre qui glisse, coupe la redondance sans perdre le fait qu’elle porte, répare la référence ambiguë, et répare la transition qui ne tient pas sa promesse ; garde exactement les mêmes faits que le brouillon (la date du quinze mars, la date limite du dix mars, la reconduction de la présidente, les comptes équilibrés, les deux projets cités).',
  responseSpec: { kind: 'text', minWords: 70, maxWords: 150 },
  rubric: {
    criteria: [
      { key: 'registre', label: 'Un ton soutenu, du début à la fin', maxPoints: 5, descriptors: [
        '5 : Aucune aparté familière ne reste ; le ton est soutenu et constant du début à la fin.',
        '4 : L’aparté familière a disparu, mais un autre mot reste un peu trop décontracté.',
        '3 : L’aparté familière est raccourcie, mais garde un mot ou une tournure familière.',
        '2 : L’aparté familière reste largement intacte.',
        '1 : Le registre ne s’ajuste pas du tout au reste du texte.',
      ] },
      { key: 'redondance', label: 'Chaque fait dit une seule fois', maxPoints: 5, descriptors: [
        '5 : La date limite n’est donnée qu’une seule fois ; rien d’autre n’est redit.',
        '4 : La redondance est réduite mais une trace de la répétition subsiste.',
        '3 : La date limite est encore donnée deux fois, avec des mots différents.',
        '2 : La redondance reste largement intacte, sans aucune coupe.',
        '1 : Une nouvelle redondance apparaît ailleurs dans le texte corrigé.',
      ] },
      { key: 'reference', label: 'Chaque pronom renvoie au bon nom', maxPoints: 5, descriptors: [
        '5 : « Celle-ci » est remplacé par « la présidente », nommée directement ; aucune ambiguïté ne reste.',
        '4 : Le nom correct est utilisé, mais une autre phrase garde un pronom un peu flou.',
        '3 : « Celle-ci » reste, mais une précision ailleurs réduit l’ambiguïté.',
        '2 : La référence reste ambiguë, sans aucune réparation.',
        '1 : La version corrigée nomme la trésorière sortante comme reconduite, un contresens.',
      ] },
      { key: 'transition', label: 'Chaque connecteur tient sa promesse', maxPoints: 5, descriptors: [
        '5 : « Donc » est remplacé par un connecteur qui dit vrai, ou le fait est corrigé, pour que la relation logique soit vraie du début à la fin.',
        '4 : La relation logique est globalement vraie, mais le connecteur choisi reste un peu imprécis.',
        '3 : Le connecteur reste imprécis, mais la fausse promesse de cause est atténuée.',
        '2 : « Donc » reste, avec la même fausse promesse de cause.',
        '1 : Un nouveau connecteur tout aussi inexact remplace l’ancien.',
      ] },
    ],
  },
  scaffold: [
    'L’assemblée générale annuelle…',
    'La présidente et la trésorière sortante…',
    'La présidente sera d’ailleurs…',
    'Les comptes sont équilibrés, ce qui…',
    'Les membres sont invités à confirmer leur présence avant…',
  ],
  modelAnswer: 'L’assemblée générale annuelle de l’association se tiendra le quinze mars. La présidente et la trésorière sortante ont toutes deux préparé un rapport détaillé ; la présidente sera d’ailleurs reconduite dans ses fonctions, sauf avis contraire de l’assemblée. Les comptes sont équilibrés, ce qui permettra de proposer plusieurs projets pour l’année prochaine, dont la rénovation du local et l’achat de nouveau matériel. Ce sera une année chargée pour l’ensemble des bénévoles. Les membres sont invités à confirmer leur présence avant le dix mars, date limite pour s’inscrire.',
  modelAnswerEn: 'The association’s annual general meeting will be held on March fifteenth. The chairwoman and the outgoing treasurer have both prepared a detailed report; the chairwoman will moreover be reappointed to her role, barring any objection from the assembly. The accounts are balanced, which will make it possible to propose several projects for next year, including the renovation of the venue and the purchase of new equipment. It will be a busy year for all the volunteers. Members are invited to confirm their attendance before March tenth, the deadline to register.',
  watchFor: [
    { pattern: 'The reply keeps "Franchement" or another informal aside amid the rest of the soutenu register.', criterion: 'registre', feedback: 'Le reste du texte est soutenu ; une aparté familière continue de trahir tout le paragraphe, même si une autre faute a déjà été corrigée.', ref: 'a2-table' },
    { pattern: 'The reply keeps both the deadline sentence and the restated "dernier jour" clause.', criterion: 'redondance', feedback: 'Garde la date une seule fois ; répéter le même fait avec d’autres mots n’ajoute rien.', ref: 'a3-exemples' },
    { pattern: 'The reply keeps "celle-ci" or another pronoun that could still point to the treasurer.', criterion: 'reference', feedback: 'Une trésorière sortante ne peut pas être reconduite ; nomme directement la présidente.', ref: 'a4-exemples' },
    { pattern: 'The reply keeps "donc" asserting that balanced accounts by themselves cause new projects.', criterion: 'transition', feedback: 'Des comptes équilibrés permettent des projets, ils ne les causent pas automatiquement ; choisis un connecteur qui dit vrai.', ref: 'a5-deck' },
    { pattern: 'The reply drops one of the facts (the two dates, the chairwoman’s reappointment, the balanced accounts, the two named projects).', criterion: 'redondance', feedback: 'Une révision garde tous les faits du brouillon ; seule la forme change.', ref: 'a8-modele' },
    { pattern: 'The reply invents a new fact the draft never gave (a figure, a new project, a different date).', criterion: 'reference', feedback: 'La révision ne doit jamais ajouter un fait que le brouillon n’a pas donné.', ref: 'a8-modele' },
  ],
  graderNotes: [
    'Word count: 70 to 150, with 10% tolerance (63 to 165) before length costs points.',
    'The task marks the four coherence fixes together, not literary style or grammar (C2 has none, per C2-BUILD-PLAN.md).',
    'Accept any correct, fact-preserving fix for each fault, even if the wording differs from the model (any connector genuinely linking balanced accounts to being ABLE to fund projects is acceptable, not required to be "ce qui permettra de" exactly).',
    'Do not require the exact register fix for the familiar aside; accept any soutenu-consistent replacement or outright removal of it, provided no fact is dropped.',
    'Feedback language: unsimplified C2 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['quatreQuestions'],
};

const A8_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a8-parler', layer: 'core', title: 'Dis ta révision à voix haute', skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO, say: REFRAME, terms: ['quatreQuestions'],
};

const A8_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a8-cheat', layer: 'core', sheetId: 'sheet-correction',
  title: 'Toute la méthode sur un écran',
  rows: [
    { k: 'le registre qui glisse', v: 'une phrase change de ton sans prévenir', say: src(E(2607)).fr,
      detail: { title: 'Le test', body: 'Un lecteur d’une seule phrase devinerait-il le ton du reste. EN: would a reader of one sentence alone guess the rest’s tone.', say: src(E(2623)).fr } },
    { k: 'la redondance', v: 'la même idée, dite deux fois', say: src(E(2636)).fr,
      detail: { title: 'Comment couper', body: 'Garde la phrase qui porte le fait, supprime celle qui le redit. EN: keep the sentence that carries the fact, cut the one that restates it.', say: src(E(2637)).fr } },
    { k: 'la référence qui dérive', v: 'un pronom qui a perdu son nom', say: src(E(2649)).fr,
      detail: { title: 'La règle de « cette dernière »', body: 'Elle pointe toujours vers le nom le plus proche, jamais vers celui que le sens vise. EN: it always points to the nearest noun, never the one meaning intends.', say: src(E(2651)).fr } },
    { k: 'la transition qui ne tient pas', v: 'un connecteur qui ne dit pas vrai', say: src(E(2662)).fr,
      detail: { title: 'La promesse de chaque connecteur', body: 'Donc une cause, cependant une opposition, par conséquent une suite précise. EN: "donc" a cause, "cependant" an opposition, "par conséquent" a precise consequence.', say: src(E(2663)).fr } },
    { k: 'les quatre questions', v: 'posées sur tout le texte, même ce qui est déjà corrigé', say: src(E(2681)).fr,
      detail: { title: 'Pourquoi tout relire', body: 'Une faute réparée ailleurs n’empêche pas une autre de rester dans la même phrase. EN: a fault repaired elsewhere does not stop another from staying in the same sentence.', say: src(E(2673)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre', 'redondance', 'reference', 'transition', 'quatreQuestions'],
};

const A8_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a8-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu poses maintenant quatre questions précises sur un texte par ailleurs correct : son registre, sa redondance, ses références et ses transitions tiennent-ils du début à la fin. Le piège qui reste est le même que partout ailleurs dans cette leçon : corriger une seule faute en croyant le texte entièrement révisé. Avant l’examen, prends un texte que tu as écrit cette semaine (un courriel, un message, un paragraphe de travail) et repasse-le contre les quatre questions, même si tu l’as déjà relu une fois. EN: Before any exam, take a text you wrote this week (an email, a message, a work paragraph) and run it back through the four questions, even if you already reread it once.',
  stats: [
    { k: 'Les quatre questions', v: 'le registre, la redondance, la référence, la transition' },
    { k: 'L’outil le plus récupéré', v: 'les quatre réparations de la leçon 5 du C1' },
    { k: 'Le piège évité', v: 'une faute réparée n’empêche pas une autre de rester' },
    { k: 'Ce qui ne change jamais', v: 'les faits du texte original' },
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
  ({ format: 'errorSpot', q: 'Une faute reste. Écris la phrase corrigée. EN: One fault remains; write the corrected sentence.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A8_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a8-quiz', layer: 'core', title: 'Le bilan', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-probleme', label: 'Un texte presque sous presse', targets: ['confond-grammaire-coherence'],
      questions: [
        mc('Les quatre fautes de cette leçon sont des fautes de...', ['grammaire', 'cohérence, dans un texte par ailleurs correct', 'ponctuation, comme une virgule mal placée'], 1, 'Le C2 n’ajoute aucune forme grammaticale nouvelle. EN: C2 adds no new grammatical form.', 'a1-check'),
        mc('Dans le brouillon de Soline, la phrase sur le goûter...', ['contient une faute de grammaire', 'sonne plus familière que le reste du texte', 'change le sujet de l’article entier'], 1, 'Chaque mot pris seul est correct. EN: every word taken alone is correct.', 'a1-lecture'),
        mc('Cette leçon t’apprend à...', ['réviser un texte entier contre quatre fautes de cohérence', 'corriger uniquement l’orthographe', 'réécrire le texte à partir de rien, sans garder ses faits'], 0, 'Réviser, pas corriger l’orthographe seule. EN: revise, not only correct spelling.', 'a1-check'),
        tI('Complète. Un mot.', 'Se relire, c’est reprendre le ... du texte jusqu’à ce qu’il tienne.', 'fil', 'C’est la métaphore de la leçon. EN: the lesson’s metaphor.', 'a1-scene'),
        eS('Il y a une virgule mal placée dans la troisième phrase.', 'Cette phrase sur le goûter sonne plus familière que tout le reste du texte.', 'Le problème n’est pas une virgule : c’est un registre qui glisse. EN: the problem is not a comma: it is a slipping register.', 'a1-scene', []),
        mc('La leçon 22 du C1 porte sur...', ['traduire des idées, par le sens', 'corriger un texte déjà écrit en français', 'nuancer un propos à l’oral, par des hedges'], 0, 'C’est un des quatre lessons recapées en acte 1. EN: one of act 1’s four recapped lessons.', 'a1-acquis'),
      ],
    },
    {
      id: 'r2-registre', label: 'Le registre qui glisse', targets: ['registre-non-repare'],
      questions: [
        mc('Un registre qui glisse va...', ['toujours du soutenu vers le familier', 'dans les deux sens', 'seulement d’une phrase à une autre, jamais à l’intérieur d’une phrase'], 1, 'Le glissement peut aussi monter trop haut. EN: the slip can also climb too high.', 'a2-check'),
        mc('Pour repérer un glissement, tu te demandes...', ['si la phrase est trop longue', 'si un lecteur d’une seule phrase devinerait le ton du reste', 'si le texte contient un mot rare'], 1, 'C’est le test de l’acte 2. EN: act 2’s test.', 'a2-check'),
        mc('Corriger un registre qui glisse veut dire choisir...', ['le mot le plus soutenu possible', 'le mot qui reste au même niveau que les phrases autour', 'le mot le plus familier possible, pour faire court'], 1, 'Le niveau constant compte. EN: a constant level matters.', 'a2-exemples'),
        tI('Complète. Un mot.', 'Le nom de ce piège est le ... qui glisse.', 'registre', 'C’est le nom du piège de l’acte 2. EN: act 2’s trap name.', 'a2-deck'),
        eS('Je vous prie de trouver ci-joint le rapport demandé. N’hésitez pas à me relancer si un truc cloche.', 'Je vous prie de trouver ci-joint le rapport demandé. N’hésitez pas à me solliciter si un point appelle une précision.', 'La fin doit rester au même niveau soutenu que l’ouverture. EN: the ending must stay as formal as the opening.', 'a2-table', []),
        lC('Écoute. Cette phrase garde-t-elle un ton constant, ou glisse-t-elle.', src(E(2619)).fr, ['elle glisse', 'elle garde un ton constant'], 0, 'Elle bascule dans un jargon trop savant pour son début décontracté. EN: it tips into jargon too learned for its relaxed start.', 'a2-deck'),
      ],
    },
    {
      id: 'r3-redondance', label: 'La redondance', targets: ['redondance-mal-coupee'],
      questions: [
        mc('Pour corriger une redondance, tu...', ['coupes au hasard l’une des deux phrases', 'gardes la phrase qui porte le fait, et supprimes celle qui le redit', 'ajoutes une troisième phrase qui redit encore la même idée'], 1, 'La règle de l’acte 3. EN: act 3’s rule.', 'a3-check'),
        mc('« Manifestement évidente » double le sens de...', ['« erreur »', '« grossière »', '« résiduelle »'], 1, '« Grossière » dit déjà que l’erreur est évidente. EN: "grossière" already says the error is obvious.', 'a3-exemples'),
        mc('Une bonne coupe de redondance libère souvent de la place pour...', ['une information vraiment nouvelle', 'rien en particulier', 'un risque de perdre le fait original'], 0, 'Couper la redite ouvre un espace utile. EN: cutting the restatement opens useful space.', 'a3-check'),
        tI('Complète. Un mot.', 'Dire deux fois la même idée s’appelle la ... .', 'redondance', 'C’est le nom du piège de l’acte 3. EN: act 3’s trap name.', 'a3-exemples'),
        eS('Les ventes ont chuté de douze pour cent au premier trimestre. En somme, les ventes ont connu une baisse importante durant ces trois premiers mois.', 'Les ventes ont chuté de douze pour cent au premier trimestre, une baisse qui pèse sur l’ensemble de l’exercice.', 'La seconde phrase ne faisait que redire la première. EN: the second sentence only restated the first.', 'a3-groupe', []),
        lC('Écoute. Cette phrase dit-elle son fait une fois, ou deux fois.', src(E(2641)).fr, ['deux fois', 'une fois'], 0, 'La conclusion répète « ambitieux », déjà dit au début. EN: the conclusion repeats "ambitieux", already said at the start.', 'a3-exemples'),
      ],
    },
    {
      id: 'r4-reference', label: 'La référence qui dérive', targets: ['reference-non-reparee'],
      questions: [
        mc('« Cette dernière » pointe toujours vers...', ['le nom le plus proche', 'le nom le plus important de la phrase', 'le nom qui plaît le plus au lecteur'], 0, 'La proximité grammaticale décide. EN: grammatical closeness decides.', 'a4-check'),
        mc('Si « cette dernière » ne peut pas viser le bon nom, tu...', ['l’utilises tout de même', 'répètes le nom ou reconstruis la phrase', 'changes complètement de sujet'], 1, 'Deux réparations possibles, rappelées de la leçon 5 du C1. EN: two possible repairs, recapped from lesson 5 of C1.', 'a4-exemples'),
        mc('Un « cela » qui revient deux fois sans qu’on sache ce qu’il nomme la seconde fois est...', ['sans problème', 'une référence qui a déjà dérivé', 'toujours une faute de grammaire'], 1, 'C’est le nom de ce piège. EN: this trap’s name.', 'a4-check'),
        tI('Complète. Un mot.', 'Le nom de ce piège est le ... qui se perd.', 'fil', 'C’est le nom du piège de l’acte 4. EN: act 4’s trap name.', 'a4-exemples'),
        eS('Léna a comparé le brouillon de Soline et la version finale de Thierry ; cette dernière, trop pressée, n’avait pas eu le temps de tout relire.', 'Léna a comparé le brouillon de Soline et la version finale de Thierry ; Soline, trop pressée, n’avait pas eu le temps de tout relire.', 'Une version ne peut pas être « trop pressée » ; seule une personne le peut. EN: a version cannot be "too rushed"; only a person can.', 'a4-groupe', []),
        lC('Écoute. « Elle » est-il ambigu dans cette phrase, ou clair.', src(E(2643)).fr, ['ambigu', 'clair'], 0, 'Deux noms féminins précèdent « elle », tous deux plausibles. EN: two feminine nouns precede "elle", both plausible.', 'a4-groupe'),
      ],
    },
    {
      id: 'r5-transition', label: 'La transition qui ne tient pas', targets: ['transition-non-reparee'],
      questions: [
        mc('Un connecteur logique...', ['décore la phrase, sans rien promettre', 'fait une promesse précise que la phrase doit tenir', 'remplace toujours une virgule'], 1, 'Donc une cause, cependant une opposition. EN: "donc" a cause, "cependant" an opposition.', 'a5-check'),
        mc('Une transition qui ne tient pas se corrige en...', ['changeant le connecteur, ou en corrigeant le fait', 'supprimant toujours la phrase entière', 'ajoutant un second connecteur, pour renforcer le premier'], 0, 'Deux façons de réparer. EN: two ways to repair.', 'a5-check'),
        mc('Plus d’inscriptions que prévu rend une salle habituelle...', ['trop grande', 'trop petite', 'de la même taille qu’avant, sans changement'], 1, 'Plus de monde a besoin de plus de place. EN: more people need more room.', 'a5-deck'),
        tI('Complète. Un mot.', 'Un connecteur qui ne tient pas sa promesse est un connecteur qui ... .', 'ment', 'C’est le nom du piège de l’acte 5. EN: act 5’s trap name.', 'a5-exemples'),
        eS('Le nombre de bénévoles a doublé cette année ; l’association organisera donc un grand barbecue en juin.', 'Le nombre de bénévoles a doublé cette année ; l’association profitera d’ailleurs de cet élan pour organiser un grand barbecue en juin.', '« Donc » promettait une cause qui n’existait pas. EN: "donc" promised a cause that did not exist.', 'a5-deck', []),
        lC('Écoute. Cette phrase tient-elle la promesse de son connecteur, ou la rompt-elle.', src(E(2658)).fr, ['elle la rompt', 'elle la tient'], 0, 'Un bon bilan et des remerciements ne s’opposent pas. EN: a good report and words of thanks do not contrast.', 'a5-deck'),
      ],
    },
    {
      id: 'r6-piege', label: 'Le piège central', targets: ['une-seule-passe'],
      questions: [
        mc('Réparer une seule faute sur un texte qui en a deux...', ['garantit un texte sans faute', 'laisse l’autre faute intacte', 'rend le texte plus court, rien de plus'], 1, 'Les deux corrections de l’acte 6 le prouvent. EN: act 6’s two corrections prove it.', 'a6-check'),
        mc('Dans la correction A, la référence est réparée ; que reste-t-il.', ['le registre', 'la transition : « donc » ne tient toujours pas sa promesse', 'la redondance'], 1, 'La transition n’a pas été touchée. EN: the transition was not touched.', 'a6-groupe'),
        mc('Dans la correction B, la transition est réparée ; que reste-t-il.', ['la référence : « elle » reste ambigu', 'la redondance', 'le registre'], 0, 'La référence n’a pas été touchée. EN: the reference was not touched.', 'a6-groupe'),
        tI('Complète. Un mot.', 'Une correction qui en cache une autre est le piège ... de cette leçon.', 'central', 'C’est le nom du piège de l’acte 6. EN: act 6’s trap name.', 'a6-deck'),
        eS('Deux relecteurs qui corrigent chacun une faute différente garantissent, à eux deux, un texte sans faute.', 'Deux relecteurs qui corrigent chacun une faute différente ne garantissent pas, à eux deux, un texte sans faute.', 'Sans comparer les deux passes contre les quatre questions, rien ne le garantit. EN: without comparing both passes, nothing guarantees it.', 'a6-check', []),
        lC('Écoute. Cette version a-t-elle réparé les deux fautes à la fois, ou une seule.', src(E(2671)).fr, ['les deux à la fois', 'une seule'], 0, 'Elle combine la réparation de la référence et celle de la transition. EN: it combines both repairs.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-methode', label: 'Avant ta révision', targets: ['checklist-incomplete'],
      questions: [
        mc('La méthode de cette leçon tient en...', ['une seule question, répétée quatre fois', 'quatre questions distinctes, posées sur tout le texte', 'un seul connecteur à vérifier, rien d’autre'], 1, 'Registre, redondance, référence, transition. EN: register, redundancy, reference, transition.', 'a7-check'),
        mc('Les quatre questions doivent-elles être posées dans un ordre fixe.', ['oui, toujours le même ordre', 'non, mais toutes les quatre, sur tout le texte', 'non, une seule des quatre suffit'], 1, 'La complétude importe plus que l’ordre. EN: completeness matters more than order.', 'a7-check'),
        mc('Si le texte a déjà été relu une fois contre les quatre questions, tu...', ['passes directement à l’envoi', 'le relis une seconde fois, de la même façon', 'relis seulement la phrase que tu viens de corriger'], 1, 'Une correction peut en cacher une autre. EN: one correction can hide another.', 'a7-check'),
        tI('Complète. Quatre mots.', 'Le registre, la redondance, la ... , la transition.', 'référence', 'C’est la troisième des quatre questions. EN: the third of the four questions.', 'a7-steps'),
        eS('Je relis mon texte une fois, et je l’envoie si rien ne me saute aux yeux.', 'Je relis mon texte contre les quatre questions, une par une, même après une première relecture.', 'Une relecture rapide ne remplace pas la méthode. EN: a quick reread does not replace the method.', 'a7-scenario', []),
        lC('Écoute. Thierry nomme-t-il les quatre questions dans l’ordre, ou en oublie-t-il une.', src(E(2678)).fr, ['il les nomme toutes les quatre', 'il en oublie une'], 0, 'Il nomme le registre, les redites, la référence, puis les connecteurs. EN: he names register, repeats, reference, then connectors.', 'a7-scenario'),
      ],
    },
    {
      id: 'r8-bilan', label: 'Le bilan de la mission', targets: ['fait-perdu-ou-invente'],
      questions: [
        mc('Le brouillon d’Inès contient...', ['une seule des quatre fautes', 'les quatre fautes à la fois', 'aucune des quatre fautes'], 1, 'Chaque faute apparaît une fois dans ce brouillon. EN: each fault appears once in this draft.', 'a8-modele'),
        mc('« Celle-ci » dans ce brouillon pointe, par la règle de la leçon 5 du C1, vers...', ['la présidente', 'la trésorière sortante, le nom le plus proche', 'Inès elle-même, l’auteure du brouillon'], 1, 'Mais ce nom est impossible par le sens : une sortante ne peut pas être reconduite. EN: but that name is impossible by meaning: an outgoing treasurer cannot be reappointed.', 'a8-modele'),
        mc('La mission écrite demande de...', ['résumer le brouillon en une phrase', 'corriger les quatre fautes en gardant tous les faits', 'traduire le brouillon vers l’anglais'], 1, 'Résumer ne suffit pas ; il faut corriger, pas raccourcir. EN: summarising is not enough; the task is to correct, not shorten.', 'a8-mission'),
        tI('Complète. Un mot.', 'Avant de livrer, relis le texte corrigé contre les quatre ... une nouvelle fois.', 'questions', 'C’est la quatrième étape du plan. EN: the plan’s fourth step.', 'a8-plan'),
        eS('Une bonne révision du brouillon d’Inès peut laisser « donc » si le reste du texte sonne mieux.', 'Une bonne révision du brouillon d’Inès corrige « donc », pour que la relation logique annoncée soit vraie.', 'Le critère « transition » juge la vérité de la relation annoncée, jamais seulement le son de la phrase. EN: the "transition" criterion judges the truth of the announced relation, never just how the sentence sounds.', 'a8-mission', []),
        lC('Écoute. Cette phrase vient-elle du brouillon d’Inès, ou décrit-elle une révision réussie.', src(E(2684)).fr, ['elle décrit une révision réussie', 'elle vient du brouillon'], 0, 'Elle parle de ce à quoi ressemble une bonne révision, pas d’un fait du brouillon. EN: it describes what a good revision looks like, not a fact from the draft.', 'a8-progress'),
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
    { front: 'a tone that changes without warning', back: 'le registre qui glisse', say: src(E(2607)).fr },
    { front: 'the same idea, said twice', back: 'la redondance', say: src(E(2636)).fr },
    { front: 'a pronoun that lost its noun', back: 'la référence qui dérive', say: src(E(2649)).fr },
    { front: 'a connector that does not keep its promise', back: 'la transition qui ne tient pas', say: src(E(2662)).fr },
    { front: 'donc promises a cause', back: 'la promesse d’un connecteur', say: src(E(2663)).fr },
    { front: 'cette dernière always points to the nearest noun', back: 'la règle de « cette dernière »', say: src(E(2651)).fr },
    { front: 'one correction can hide another', back: 'le piège central', say: src(E(2673)).fr },
    { front: 'register, redundancy, reference, transition', back: 'les quatre questions', say: src(E(2681)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A8_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a8-roundup', layer: 'core', title: 'Correction et révision, en résumé',
  body: `${REFRAME} Tu poses maintenant quatre questions sur n’importe quel texte par ailleurs correct : son registre, sa redondance, ses références et ses transitions tiennent-ils du début à la fin, y compris dans ce que tu as déjà corrigé. EN: You can now ask four questions of any otherwise correct text: do its register, its redundancy, its references and its transitions hold from one end to the other, including in what you already corrected.`,
  points: [
    'Les quatre fautes de cette leçon sont des fautes de cohérence, jamais de grammaire.',
    'Un registre qui glisse se teste en se demandant ce qu’une seule phrase révèlerait du reste du texte.',
    'Une redondance se coupe en gardant le fait, jamais en coupant au hasard.',
    'Une référence qui dérive se répare avec les outils de la leçon 5 du C1 : répéter le nom, « cette dernière » pour le nom le plus proche seulement, reconstruire la phrase, ou passer au discours direct ; et, pour un « cela » trop vague, l’hyperonyme qui le résume en un mot.',
    'Un connecteur fait une promesse logique ; une transition qui ne la tient pas se corrige en changeant le connecteur ou en corrigeant le fait.',
    'Une seule faute réparée n’empêche jamais une autre de rester, intacte, dans la même phrase.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['quatreQuestions'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-probleme', title: 'Cohérence, pas grammaire', format: 'mcq' as const, coach: 'Rappelle-toi : les quatre fautes de cette leçon traversent un texte par ailleurs correct. EN: the four faults of this lesson run through an otherwise correct text.', q: 'Les quatre fautes de cette leçon sont des fautes de...', opts: ['grammaire', 'cohérence'], correct: 1, why: 'Le C2 n’ajoute aucune forme grammaticale nouvelle. EN: C2 adds no new grammatical form.', items: [E(2607), E(2608)], audio: AUDIO },
  { id: 'd-registre', title: 'Le registre qui glisse', format: 'sort' as const, coach: 'Classe chaque phrase selon son registre. EN: sort each sentence by its register.', buckets: ['soutenu, constant', 'glisse vers le familier', 'glisse vers un jargon trop savant'], items: [E(2616), E(2615), E(2619)], audio: AUDIO },
  { id: 'd-redondance', title: 'Dire deux fois, ou une fois', format: 'mcq' as const, coach: 'Compare les deux versions : laquelle garde le fait sans le redire. EN: compare both versions: which keeps the fact without restating it.', q: 'Laquelle de ces deux versions dit le fait une seule fois.', opts: ['la bonne version', 'l’autre'], correct: 0, why: 'Seule la bonne version coupe la redite sans perdre le fait. EN: only the right version cuts the restatement without losing the fact.', items: [E(2630), E(2631), E(2632), E(2633)], audio: AUDIO },
  { id: 'd-reference', title: 'À quel nom ça renvoie', format: 'mcq' as const, coach: 'Vérifie le nom le plus proche de chaque pronom. EN: check the nearest noun to each pronoun.', q: 'Dans cette phrase, le pronom renvoie-t-il clairement à un seul nom.', opts: ['oui, clairement', 'non, il est ambigu ou impossible par le sens'], correct: 1, why: 'Deux noms plausibles, ou un sens qui contredit le nom le plus proche. EN: two plausible nouns, or a meaning that contradicts the nearest noun.', items: [E(2643), E(2645), E(2647)], audio: AUDIO },
  { id: 'd-transition', title: 'La promesse du connecteur', format: 'mcq' as const, coach: 'Vérifie ce que le connecteur promet, puis ce que la phrase dit vraiment. EN: check what the connector promises, then what the sentence really says.', q: 'Ce connecteur tient-il sa promesse logique.', opts: ['oui', 'non'], correct: 1, why: 'Donc, cependant et par conséquent promettent chacun une relation précise. EN: donc, cependant and par conséquent each promise a precise relation.', items: [E(2656), E(2658), E(2660)], audio: AUDIO },
  { id: 'd-piege', title: 'Une correction, une seule faute', format: 'mcq' as const, coach: 'Vérifie les quatre questions, même sur ce qui vient d’être corrigé. EN: check all four questions, even on what was just corrected.', q: 'Cette version corrigée a-t-elle réparé toutes les fautes du texte original.', opts: ['oui, toutes', 'non, au moins une reste'], correct: 1, why: 'Une seule passe ne suffit jamais. EN: a single pass is never enough.', items: [E(2668), E(2669), E(2670)], audio: AUDIO },
  { id: 'd-methode', title: 'Les quatre questions, dans l’ordre', format: 'flashcard' as const, coach: 'Dis les quatre questions à voix haute, dans l’ordre. EN: say the four questions aloud, in order.', items: [E(2678), E(2682)], audio: AUDIO },
  { id: 'd-fidelite', title: 'Garder tous les faits', format: 'mcq' as const, coach: 'Compare la version corrigée au brouillon : un fait a-t-il disparu ou a-t-il été inventé. EN: compare the corrected version to the draft: did a fact disappear or get invented.', q: 'La version corrigée garde-t-elle exactement les mêmes faits que le brouillon.', opts: ['oui', 'non, un fait a disparu ou a été ajouté'], correct: 0, why: 'Seules la forme et la cohérence doivent changer. EN: only form and coherence should change.', items: [E(2684), E(2685)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'confond-grammaire-coherence', description: 'Treats one of the four coherence faults as if it were a grammar mistake, or looks for a grammar error where none exists.', detectOn: ['a1-check', 'a1-acquis', 'a8-mission'], drill: 'd-probleme', retest: 'd-probleme' },
  { id: 'registre-non-repare', description: 'Fails to spot or correct an unmarked register slip, in either direction, inside an otherwise consistent text.', detectOn: ['a2-groupe', 'a2-check', 'a8-mission'], drill: 'd-registre', retest: 'd-registre' },
  { id: 'redondance-mal-coupee', description: 'Cuts a redundant restatement at random, losing the fact it carried, instead of keeping the fact and cutting only the repetition.', detectOn: ['a3-groupe', 'a3-check', 'a8-mission'], drill: 'd-redondance', retest: 'd-redondance' },
  { id: 'reference-non-reparee', description: 'Leaves a dangling or drifted reference unrepaired, or misuses "cette dernière" for a noun that is not the grammatically nearest one.', detectOn: ['a4-groupe', 'a4-check', 'a8-mission'], drill: 'd-reference', retest: 'd-reference' },
  { id: 'transition-non-reparee', description: 'Leaves a connector asserting a logical relationship (cause, opposition, consequence) the sentence does not actually deliver.', detectOn: ['a5-groupe', 'a5-check', 'a8-mission'], drill: 'd-transition', retest: 'd-transition' },
  { id: 'une-seule-passe', description: 'Treats a text as fully revised after fixing only one fault, without rechecking the whole text against all four questions.', detectOn: ['a6-groupe', 'a6-check', 'a8-mission'], drill: 'd-piege', retest: 'd-piege' },
  { id: 'checklist-incomplete', description: 'Applies the four-question checklist partially, skipping a question or stopping after a single pass.', detectOn: ['a7-check', 'a8-mission'], drill: 'd-methode', retest: 'd-methode' },
  { id: 'fait-perdu-ou-invente', description: 'Drops an actionable fact from the source draft while revising it, or invents a new fact the draft never gave.', detectOn: ['a8-modele', 'a8-mission'], drill: 'd-fidelite', retest: 'd-fidelite' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-correction', 'Correction et révision', ['les quatre questions', 'la règle de cette dernière'], [
    teach('sheet-correction-teach', 'Reprendre le fil du texte',
      `${Cap(C105_REF)}, ${C106_REF}, ${C117_REF} et ${C122_REF} t’ont appris, séparément, à réparer une reprise, à doser un ton, à choisir un synonyme et à reformuler par le sens. Cette leçon réunit ces quatre acquis dans une seule méthode : quatre questions posées sur tout un texte par ailleurs correct. EN: This lesson brings four earlier skills together into one method: four questions asked of a whole, otherwise correct text.`),
    table('sheet-correction-questions', 'Les quatre questions', ['Question', 'Ce qu’elle cherche'], [
      ['le registre', 'une phrase qui sonne plus familière ou plus savante que le reste'],
      ['la redondance', 'une idée dite deux fois, en phrases ou en mots'],
      ['la référence', 'un pronom ou un démonstratif dont le nom a dérivé'],
      ['la transition', 'un connecteur qui ne tient pas la promesse logique qu’il fait'],
    ]),
  ]),
  sheet('sheet-piege-correction', 'Une correction peut en cacher une autre', ['deux corrections, chacune incomplète'], [
    teach('sheet-piege-correction-teach', 'Une seule passe ne suffit jamais',
      'Réparer une seule faute sur un texte qui en porte plusieurs laisse les autres intactes. La seule façon de savoir qu’une révision est complète est de repasser les quatre questions sur tout le texte, y compris sur ce qu’on vient déjà de corriger. EN: fixing only one fault on a text carrying several leaves the others untouched. The only way to know a revision is complete is to run all four questions over the whole text, including what was just corrected.'),
    table('sheet-piege-correction-deux', 'Les deux corrections incomplètes', ['Correction', 'Ce qu’elle rate'], [
      ['la référence réparée', 'la transition garde sa fausse promesse'],
      ['la transition réparée', 'la référence reste ambiguë'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Ta révision',
    opener: {
      line: 'Soline te transmet un dernier brouillon, celui d’Inès, et les quatre fautes y sont toutes : à toi de les retrouver et de les réparer. EN: Soline sends you one last draft, Inès’s, and all four faults are there: it is up to you to find and repair them.',
      imageRef: 'lessons/c2-13-correction-revision/act08.jpg',
    },
    sections: [],
    milestone: 'Tu révises un texte neuf qui porte les quatre fautes à la fois, en gardant exactement les mêmes faits. EN: You can revise a new text carrying all four faults at once, keeping exactly the same facts.',
    estScreens: 40, restPoints: ['a8-scenario', 'a8-mission', 'a8-cheat', 'a8-quiz'],
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
 *  its authored slots, scattered by hand, exactly as c2.06 does. */
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c2-13-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c2-13-brouillon-soline': 'Soline’s draft paragraph (act 1), ONE VOICE, one take, read evenly, no vocal hint at which sentence is the flaw.',
  'rec-c2-13-trois-registres': 'The three register-slip cards (act 2), ONE VOICE, one take, read plainly, no corrective tone.',
  'rec-c2-13-glisse-ou-tenu': 'REQUIRED FOR THE EAR MISSION (act 2): eight lines, ONE TAKE, ONE VOICE, in authored order, read plainly with no extra emphasis that would give away which is which.',
  'rec-c2-13-thierry-redondance': 'Thierry’s two redundant drafts and their fixes (act 3), ONE VOICE for the flawed lines, a second, calmer VOICE for the fixes, one take each.',
  'rec-c2-13-dit-une-ou-deux-fois': 'REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, in authored order, even pace throughout.',
  'rec-c2-13-rapport-conseil': 'The council report sentence (act 4), ONE VOICE, one take, a measured, reflective tone, as if thinking the ambiguity through out loud.',
  'rec-c2-13-derive-ou-repare': 'REQUIRED FOR THE EAR MISSION (act 4): six lines, ONE TAKE, ONE VOICE, in authored order, no vocal cue beyond the words themselves.',
  'rec-c2-13-trois-connecteurs': 'The three connector-trap cards (act 5), ONE VOICE, one take, read plainly, with no ironic or corrective tone that would give the trap away.',
  'rec-c2-13-promesse-tenue': 'REQUIRED FOR THE EAR MISSION (act 5): six lines, ONE TAKE, ONE VOICE, in authored order, even conversational pace.',
  'rec-c2-13-deux-corrections': 'The source sentence and its two incomplete corrections (act 6), ONE VOICE, one take each, identical pace across all three so neither sounds more "finished" than the other.',
  'rec-c2-13-completement-corrige': 'REQUIRED FOR THE EAR MISSION (act 6): four lines, ONE TAKE, ONE VOICE, in authored order, no vocal cue distinguishing the fully corrected version.',
  'rec-c2-13-brouillon-ines': "Inès's draft paragraph (act 8), ONE VOICE, one take, read evenly throughout, including the register-slip sentence, exactly the register the task asks the learner to move away from.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C2 · LEÇON 13',
  intro: "At C1 you learned, across four separate lessons, to repair a dangling reference, to dose register in speech, to choose among near synonyms by connotation, and to reformulate by meaning. At C2, this lesson gathers those four skills into a single method for reviewing your own writing: four questions (register, redundancy, reference, transition) asked of a whole text that is already grammatically correct. You will catch an unmarked tonal shift, cut a restated idea without losing the fact it carried, repair a pronoun whose antecedent has drifted, and fix a connector that promises a logical relationship it does not deliver, then prove you can do all four at once on a brand-new flawed draft.",
  skill: 'PE',
  grammarAssumed: ['c1.05', 'c1.06', 'c1.17', 'c1.22'],
  grammarIntroduced: [
    'Self-editing a C2-level text as a distinct skill: diagnosing four named coherence faults in a text that is already grammatically correct, never a grammar point itself',
    'The register slip: an unmarked tonal shift, in either direction, tested by asking what a reader of one isolated sentence would guess about the rest',
    'Redundancy at three grains: a restated sentence, a restated paragraph conclusion, and a pleonasm doubling a word already precise',
    'The drifting reference, repaired with lesson 5 of C1’s own toolkit (repeat the noun, "cette dernière" for the nearest noun only, rebuild the sentence, the hyperonym), reused rather than re-taught',
    'The weak transition: a connector (donc, cependant, par conséquent) that promises a specific logical relationship the sentence does not actually deliver',
    'The central C2 trap: a text corrected for one fault while another remains, proving that no single revision pass is ever enough',
    'Producing a full, fact-preserving revision of a new flawed draft, graded on all four fixes together',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au C1, quatre leçons séparées t’ont appris à réparer une reprise ambiguë, à doser le registre à l’oral, à choisir entre synonymes proches selon leur connotation, et à reformuler par le sens. Au C2, cette leçon réunit ces quatre acquis en une seule méthode pour réviser tes propres textes : quatre questions (registre, redondance, référence, transition) posées sur un texte déjà grammaticalement correct. Tu repéreras un ton qui glisse sans prévenir, tu couperas une idée redite sans perdre le fait qu’elle porte, tu répareras un pronom dont le nom a dérivé, et tu corrigeras un connecteur qui ne tient pas sa promesse, avant de prouver que tu sais faire les quatre à la fois sur un brouillon neuf.',
    minutes: 150,
    difficulty: 5,
    glyph: 'fil',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: CORRECTION_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, MISSION_SOURCE, MISSION_SOURCE_EN, dicteeFor };
export const lessonWithoutTask = (): Lesson => LESSON;
