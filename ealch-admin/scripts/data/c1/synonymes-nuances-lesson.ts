// c1.17.l1 « Synonymes et nuances » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 (THE VOCAB SHAPE) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (wave 5 and its
// review lessons). Structural model: the reviewed C1 vocabulary lesson c1.12
// « Le vocabulaire des idées » (`./vocabulaire-idees-*`): same helpers, same
// act loop, same counts.
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE VOCAB SHAPE, AS BUILT HERE (model: c1.12's counts)
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around ONE WEIGHT of a synonym (its
//   force, its colour, its neighbours, its opposite, its region), in the
//   same beats as c1.12:
//     1. MEET THEM IN USE   a `story`, a one-take `listening` or a `reading`.
//     2. LEARN THEM         a `cardDeck` (4 cards) or a `tapTable` (6 rows),
//                           linked to a sheet.
//     3. TELL THEM APART    a gated `groupDrill` of collocations and rows.
//     4. TRAP               a stepped `trapDrill` or a `commonErrors`.
//     5. ONE MORE ANGLE     a listening, examples, flashcards, hacks, focus or
//                           dictation.
//     6. DANS UN TEXTE      the same title every act: a short authentic-
//                           looking text (90 to 110 words), questions behind
//                           the modal.
//     7. CHECK              the gated act check.
//
//    1  Le bon cran                     6   the client's complaint relayed at
//                                           the wrong strength; goals; Rosalie
//                                           Brassard's column; recap of b1.25,
//                                           b1.35, b2.32, b2.33, c1.06; uses
//    2  De l’agacement à l’exaspération 7   agacer < irriter < exaspérer,
//                                           excéder; -ant / -é families
//    3  Monter, descendre               7   grimper, flamber; fléchir,
//                                           reculer, s’effondrer, stagner
//    4  Le même trait, deux jugements   7   économe / avare / radin,
//                                           persévérant / obstiné, prudent /
//                                           timoré, curieux / indiscret,
//                                           ambitieux / arriviste
//    5  Les suffixes qui jugent         7   -âtre (neutral or pejorative),
//                                           bellâtre, fadasse, paperasse,
//                                           lourdaud, écrivailleur
//    6  Adoucir ou masquer              7   a notice and its plain version;
//                                           décéder, s’éteindre; respect,
//                                           soften, mask
//    7  Les verbes qui vont avec        7   poser, émettre, formuler, nourrir,
//                                           dissiper, tenir, mener, prendre
//                                           des mesures; two OQLF calques
//    8  Les intensifs attendus          7   grièvement / gravement, refus
//                                           catégorique, écrasante majorité,
//                                           gros fumeur, circulation dense
//    9  Le contraire dépend du sens     7   doux and léger, sense by sense
//   10  Une étiquette selon la région   7   magasiner, blonde, char, courriel
//   11  Le mot passe-partout            7   a library report rewritten
//   12  Ton portrait                   11   model portrait, plan, role play,
//                                           TASK, practice, quiz, review
//
//   TOTAL 87 missions, 12 acts. Corpus: 150 authored rows (.1200-.1353, four
//   ids left unused after the twin check) in twelve blocks plus 45 reused
//   rows (20 Postgres-only in PG_ROWS, 25 in seedPlusPacks), released act by
//   act through `deckTranche`. Texts: 4 readings of 160 to 260 words, 10
//   « Dans un texte » paragraphs, 5 hideLines listenings, 6 stories, one
//   scene, one role play. Quiz: 12 rounds of 8 (one per act 2 to 11, a
//   recycling round citing b1.25, b1.35, b2.29, b2.32, b2.33, c1.05, c1.06
//   and c1.24, a « comme à l’examen » round). Chapter artwork:
//   `synonymes-nuances-image-prompts.md`, twelve prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (a later lesson may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un synonyme n’est jamais un jumeau : pèse sa force, sa couleur et ses
//   voisins. »
//   EN: A synonym is never a twin: weigh its strength, its colour and its
//   neighbours.
//
//   ONE METAPHOR, LE NUANCIER: the painter's fan of swatches. Strength is
//   the intensity, colour the connotation and the register, neighbours the
//   collocations, which also decide the opposite. Rejected candidates and
//   why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    choosing among near-synonyms at C1 (wave 5 brief): intensity
//           scales (anger, the press verbs of change), connotation of
//           character words, the judging suffixes, euphemism as
//           connotation, verb + noun and intensifier collocations, antonymy
//           by sense, Québec register labels in Usito and the OQLF, the
//           all-purpose word; and a portrait fair in connotation.
//   QUOTES  the reframes of b1.25, b2.32, b2.33 and c1.06, re-exported from
//           their corpus files; rows of b1.25, b1.35, b2.29, b2.32, b2.33,
//           c1.05, c1.06, c1.24 and ten legacy euphemism rows reused BY ID.
//   LEAVES  the three registers and triplets to b1.25 (cited), the basic
//           feeling scales to b1.35 (cited), numbers that move to b2.29
//           (cited), press framing to c1.24, evaluative reporting verbs to
//           b2.24, litote in speech to c1.06 and as a figure to c1.19,
//           reprise by synonym to c1.05, false friends to c1.18, the colour
//           idioms (une peur bleue) to b1.29.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   C1: unsimplified French; English authored on every learner string (an
//   `en` field or a final « EN: »), never on an answer. tu in every
//   instruction; characters use what the situation needs. Every `say` is
//   French. No « ? » or « ! » in any scene or story bubble. Other lessons
//   cited by trail position in words, read from the seed units; c1.18 is
//   typed from the plan for the roundup (NEXT_REF_PLANNED). Mission answer
//   slots are spread by `spreadMissions()`, the quiz by `spreadSlots()` (no
//   text changes; no `why` names a position), as c1.12 does. Up to 4
//   tapTables (decision 16): acts 3, 6, 8 and 9. Unpadded tag (« C1 ·
//   LEÇON 17 »). Wave 5 review lessons: nothing correct is taught as an
//   error (« faire une erreur », « très exaspéré », « un rôle important »
//   are never marked wrong; every wrong form is a dictionary-attested
//   mismatch or an OQLF verdict); every typed answer lists the other
//   correct words in `accept`; every closed item was checked for a second
//   defensible option; the model answer copies no source sentence and adds
//   no figure the notes lack; every listening names its speakers.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. FACT CHECK before publish: the register, connotation, intensity and
//      collocation judgements in corpus §A.7 (a to l), all sourced from
//      Larousse, Usito, the OQLF and Wiktionnaire. CNRTL / CRISCO could not
//      be read by script (a JavaScript shell): a human check of the
//      intensity scales against CRISCO is welcome.
//   2. b1.25's Québec act tags « magasiner » with the familiar words
//      (row langue-soignee .1361 is right to be familiar, because of « ma
//      blonde »). Act 10 here says magasiner is STANDARD in Québec (Usito
//      Q/C with no familiar label; OQLF « implanté et légitimé »). Keep the
//      precision, and leave b1.25 as it is?
//   3. Usito labels « char » « anglicisme critiqué, non standard », b1.25
//      says « familier québécois ». Both are true; act 10 uses Usito's
//      label. Agree?
//   4. The task is a WRITTEN portrait (250 to 350 words, responseSpec
//      250-380), but `Lesson.skill` is 'CE' as the brief says (as c1.12).
//      Keep 'CE'?
//   5. 20 reused rows are Postgres-only (PG_ROWS): the merge must carry
//      them and the gate preview needs them; 13 need the decision 13
//      typography pass (corpus §A.5). Four authored twins were dropped for
//      published rows (§A.8).
//   6. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' is inert; kept.
//      The twelve openers need art (ART_PENDING until Paul's images land).

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, PG_ROWS, dicteeFor,
  LECTURE_CHRONIQUE, LECTURE_COMMUNIQUE, LECTURE_RAPPORT, LECTURE_MODELE, NOTES_JOSEE,
  TEXTE_A2, TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A11,
  B125_REFRAME, B125_REFRAME_EN, B232_REFRAME, B232_REFRAME_EN, B233_REFRAME, B233_REFRAME_EN,
  C106_REFRAME, C106_REFRAME_EN,
  REGISTRES_UNIT, EMOTIONS_UNIT, SCIENCE_UNIT, ARGOT_UNIT, CALQUER_UNIT, REPRISE_UNIT, NUANCER_UNIT, PRESSE_UNIT,
  REGISTRES_REF, EMOTIONS_REF, SCIENCE_REF, ARGOT_REF, CALQUER_REF, REPRISE_REF, NUANCER_REF, PRESSE_REF,
  NEXT_REF_PLANNED,
} from './synonymes-nuances-corpus.ts';
import { SYNONYMES_NUANCES_TERMS } from './synonymes-nuances-terms.ts';

const seed = seedPlusPacks();

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };
type TrapCard = NonNullable<Sec<'trapDrill'>['cards']>[number];
type TrapStep = NonNullable<Sec<'trapDrill'>['steps']>[number];

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string; drills?: string[] };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const PG = new Map<string, SrcItem>(PG_ROWS.map((r) => [r.id, r]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));
const OWN = new Set(ALL_ROWS.map((r) => r.id));

/** An item's fr/en, from this corpus, the seed, or the Postgres-only rows.
 *  Throws on a typo, so no section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id) ?? PG.get(id);
  if (!r) throw new Error(`c1.17: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

/** Every import must exist in the seed or in PG_ROWS. */
for (const id of IMPORT_IDS) {
  if (!SEED.has(id) && !PG.has(id)) throw new Error(`c1.17: import ${id} is in neither the seed nor PG_ROWS`);
}

function ipaOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.ipa) throw new Error(`c1.17: no authored ipa on ${id}`);
  return r.ipa;
}
/** The AUTHORED row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.17: no authored respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const uc = (situation: string, id: string) => ({ situation, fr: fr(id), en: en(id) });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** A trap card: the WRONG version in promptSound (never spoken), the row's
 *  correct French in fr. */
const trap = (id: string, promptLabel: string, promptSound: string, tip: string): TrapCard =>
  ({ promptLabel, promptSound, fr: fr(id), ipa: ipaOf(id), tip });

const STEPS = (ruleTitle: string, cardsTitle: string): TrapStep[] => [
  { label: 'La règle', kind: 'rule', title: ruleTitle },
  { label: 'Six cartes', kind: 'cards', title: cardsTitle },
  { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
  { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
];

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** THE « DANS UN TEXTE » BEAT that closes acts 2 to 11: one short text, the
 *  answers behind the modal. Always the same title, so the loop is visible. */
function dansUnTexte(
  id: string, frSub: string, text: string, questions: { q: string; a: string }[], rec: string, terms: string[],
): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true,
    title: 'Dans un texte', frSub, text, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

const B125_ROW = 'fr.b1.langue-soignee.1257';
const B135_ROW = 'fr.b1.emotions.1047';
const B229_ROW = 'fr.b2.methode-scientifique.1091';
const B232_ROW = 'fr.b2.argot-des-jeunes.1059';
const B232_ARD = 'fr.b2.argot-des-jeunes.1097';
const B233_ROW = 'fr.b2.langue-soignee.1999';
const C105_ROW = 'fr.c1.langue-soignee.2179';
const C106_ROW = 'fr.c1.nuances-et-registres.1122';
const C124_ENTETE = 'fr.c1.strategies-de-comprehension.2122';
const C124_MAINTIENT = 'fr.c1.strategies-de-comprehension.2123';
const SYNONYME = 'fr.b1.dictee.014';
const ANTONYME = 'fr.b1.dictee.015';
const CONNOTATION = 'fr.b2.litterature.071';
const EUPHEMISME = 'fr.b2.litterature.078';
const MELIORATIF = 'fr.b2.litterature.1524';
const POSER = 'fr.a1.dictee.107';
const COPIEUX = 'fr.b1.rp-repas.024';
const SHOPPING = 'fr.a2.courses.074';
const OCCUPER = 'fr.b1.affaires.1022';
const MAGASINER = 'fr.a2.quebec-et-francophonie.199';
const CHAR_ROW = 'fr.b1.langue-soignee.1360';
const BLONDE_ROW = 'fr.b1.langue-soignee.1361';
const COURRIEL_ROW = 'fr.b1.langue-soignee.1374';
const UN_CHAR = 'fr.b1.langue-soignee.1375';
const MA_BLONDE = 'fr.b1.langue-soignee.1376';

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE BON CRAN
 *
 *  The problem: at the Imprimerie des Deux-Ponts, the learner relays a
 *  client's furious email to the director and must not soften « elle
 *  menace de rompre le contrat » into « un peu agacée ». Then Rosalie
 *  Brassard's column, and the recap of b1.25, b1.35, b2.32, b2.33 and c1.06
 *  by trail position, their rows reused by id. NO « ? » OR « ! » IN ANY
 *  BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const AGACEE = {
  fr: 'La cliente est un peu agacée par le retard.',
  ipa: '/la kli.jɑ̃t ɛ.tœ̃ pø a.ɡa.se paʁ lə ʁə.taʁ/',
  respell: '[la klee-YAHⁿT | eh-tuhⁿ PEU a-ga-SAY | par luh ruh-TAR]',
  en: 'The client is a little annoyed by the delay. (Far below what her email says.)',
};

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Un courriel à résumer', frSub: 'La cliente du vendredi',
  setting: { place: 'L’Imprimerie des Deux-Ponts, le bureau de la production', city: 'Longueuil', time: 'jeudi, 16 h 10', ambience: 'le bruit régulier des presses, une pile d’épreuves, un écran ouvert sur un courriel' },
  beats: [
    { kind: 'narration', text: 'Longueuil, jeudi après-midi, à l’Imprimerie des Deux-Ponts. Madame Nadeau, de la Fromagerie du Haut-Ruisseau, vient d’écrire : « Troisième retard en un mois. Si mes étiquettes ne sont pas livrées vendredi, je mets fin à notre contrat. » Ton directeur, Benoît Lachance, entre dans le bureau.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Benoît, le directeur', fr: 'Je n’ai pas le temps de tout lire. Résume-moi le courriel de madame Nadeau en une phrase.', en: 'I do not have time to read it all. Sum up Mrs Nadeau’s email for me in one sentence.', respell: '[zhuh nay pa luh TAHⁿ | duh too LEER | ray-zü-muh-MWA | luh koo-RYEL duh ma-DAMM na-DOH | ahⁿ-nün FRAHZ]', stage: 'Il a déjà la main sur la poignée.', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'Tu cherches le mot juste. Madame Nadeau ne se plaint pas en passant : elle menace de partir.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle phrase dis-tu à Benoît ?', size: 'lg',
      options: [
        { fr: AGACEE.fr, respell: AGACEE.respell, en: AGACEE.en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1200)), respell: rsOf(E(1200)), en: en(E(1200)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Benoît s’arrête net. Il appelle l’atelier, fait passer les étiquettes en priorité, et téléphone lui-même à madame Nadeau avant cinq heures.',
        breaks: 'Benoît hoche la tête et sort. Un peu agacée, cela peut attendre lundi. Vendredi soir, madame Nadeau annule son contrat.',
      },
    },
    {
      kind: 'break', heading: 'Agacée n’est pas exaspérée',
      body: 'Agacée dit l’impatience ; exaspérée dit la colère vive, la patience à bout. Les deux sont voisins dans un dictionnaire des synonymes, mais pas au même cran. Une menace de rupture appelle le cran le plus fort. EN: Annoyed and exasperated are neighbours, not twins.',
      wrong: { fr: AGACEE.fr, ipa: AGACEE.ipa, respell: AGACEE.respell, en: AGACEE.en },
      right: { fr: fr(E(1200)), ipa: ipaOf(E(1200)), respell: rsOf(E(1200)), en: en(E(1200)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Les étiquettes partiront vendredi matin. Cette leçon t’apprend à peser un synonyme avant de l’employer : sa force, sa couleur, ses voisins, et même son contraire. À la fin, tu écris le portrait d’une collègue, juste et exact.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['nuancier', 'intensite'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Choisir la bonne force', s: 'Actes 2 et 3 : la colère, les chiffres qui montent et qui baissent' },
    { t: 'Choisir la bonne couleur', s: 'Actes 4 à 6 : le jugement, les suffixes, l’euphémisme' },
    { t: 'Choisir les bons voisins', s: 'Actes 7 à 9 : les verbes, les intensifs, les contraires' },
    { t: 'Écrire un portrait juste', s: 'Actes 10 à 12 : la région, le mot précis, ton portrait' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'La chronique du mot juste', frSub: 'Lis, et repère les trois questions',
  text: LECTURE_CHRONIQUE,
  glossary: [
    { word: 'déclenché', en: 'set off', note: 'Déclencher une crise : la faire commencer d’un coup.' },
    { word: 'dispose', en: 'decides', note: 'Le proverbe dit : l’homme propose, Dieu dispose. Ici, c’est la phrase qui décide.' },
    { word: 'fournisseur', en: 'supplier', note: 'L’entreprise qui livre une marchandise ou un service.' },
  ],
  questions: [
    { q: 'Global : de quoi parle cette chronique ?', a: 'Des synonymes qui ne sont pas interchangeables, à partir de l’histoire d’une lectrice qui avait choisi un mot trop fort.' },
    { q: 'Détail : quelle erreur la lectrice a-t-elle faite ?', a: 'Elle a remplacé « agacée » par « exaspérée », trouvé dans un dictionnaire des synonymes, et son courriel a paru beaucoup plus fâché qu’elle ne l’était.' },
    { q: 'Détail : quelles sont les trois questions de la chroniqueuse ?', a: 'La force du mot, sa couleur (le jugement et le registre) et ses voisins (les mots avec lesquels il va).' },
    { q: 'Inférence : pourquoi parle-t-elle d’un hiver rigoureux et d’un caractère emporté ?', a: 'Pour montrer que le contraire de doux change selon le nom qui l’accompagne.' },
    { q: 'Position : quel ton prend la chroniqueuse dans sa dernière phrase ?', a: 'Un ton léger, presque une maxime : le mot juste demande seulement un peu d’attention.' },
  ],
  audio: REC('rec-c1-17-chronique'), say: REFRAME, terms: ['nuancier'],
};

const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: 'Le B1, le B2 et le C1, en renfort',
  groups: [
    grp('Le registre et la force', [
      it(B125_ROW, `${Cap(REGISTRES_REF)} : le registre, un choix`),
      it(B135_ROW, `${Cap(EMOTIONS_REF)} : une échelle de la colère`),
      it(B232_ROW, `${Cap(ARGOT_REF)} : l’échelle des registres`),
    ], chk('« Agacé, énervé, en colère, furieux. » Ces quatre mots…',
      ['disent la même colère à quatre forces', 'disent quatre sentiments sans rapport', 'sont quatre registres'], 0,
      'Une échelle de force, vue à la leçon 35 du B1. Cette leçon monte plus haut : irriter, exaspérer, excéder. EN: one feeling, four strengths.')),
    grp('Le ton et ce qu’on ne dit pas', [
      it(B233_ROW, `${Cap(CALQUER_REF)} : traduire aussi le ton`),
      it(C106_ROW, `${Cap(NUANCER_REF)} : la litote à l’oral`),
      it(CONNOTATION, 'le mot de cette leçon'),
    ], chk('« La litote dit moins pour faire entendre plus. » Cette leçon-ci l’enseigne-t-elle de nouveau ?',
      ['non : elle la suppose connue', 'oui, avec de nouvelles règles'], 0,
      'La litote à l’oral appartient à la leçon 6 du C1. Ici, tu pèses la couleur des mots. EN: assumed known.')),
    ctl('Ce qui change ici', 'Le B1 t’a appris qu’aucun registre n’est faux. Ici, tu apprends surtout…',
      ['à choisir entre deux synonymes du même registre', 'à passer du familier au soutenu', 'à reconnaître le verlan'], 0,
      `« ${B125_REFRAME.replace(/'/g, '’')} » Économe et avare sont tous deux courants, et pourtant ils jugent différemment. EN: ${B125_REFRAME_EN}`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['nuancier', 'registre'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Là où un synonyme change tout',
  cases: [
    uc('Tu transmets une plainte à ton directeur', E(1200)),
    uc('Tu choisis un mot dans une liste de synonymes', E(1206)),
    uc('Tu décris quelqu’un sans le juger malgré toi', E(1204)),
    uc('Tu relis ta phrase après un remplacement', E(1209)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['nuancier'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le cran', 'D’après son courriel, madame Nadeau, qui menace de rompre le contrat, est…',
    ['exaspérée', 'un peu agacée'], 0,
    'Une menace de rupture : la patience est à bout. EN: exasperated.'),
  ctl('La méthode', 'Avant de remplacer un mot par un synonyme, tu pèses…',
    ['sa force, sa couleur et ses voisins', 'sa longueur', 'son origine'], 0,
    `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('Le renfort', 'Dans cette leçon, la litote de la leçon 6 du C1 est…',
    ['supposée connue', 'enseignée de nouveau'], 0,
    'Citée, jamais réenseignée. EN: assumed known.'),
], ['nuancier']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le bon cran',
    opener: {
      line: 'Une cliente à bout résumée en « un peu agacée » : ici tu découvres qu’un synonyme n’est jamais un jumeau. EN: A client at the end of her tether summed up as « a little annoyed »: here you see that a synonym is never a twin.',
      imageRef: 'lessons/synonymes-nuances/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais qu’un synonyme se pèse avant de s’employer : sa force, sa couleur, ses voisins. EN: You know a synonym must be weighed before use: its strength, its colour, its neighbours.',
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — DE L’AGACEMENT À L’EXASPÉRATION
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a2-histoire', layer: 'core',
  title: 'Trois semaines de chantier', frSub: 'Agacé, irrité, exaspéré',
  setting: 'Vendredi soir, dans le hall du 412, rue des Érables, à Laval. Paul rentre du travail ; sa voisine Martine relève son courrier.',
  bubbles: [
    { from: 'narrator', fr: 'Une affiche annonce encore une coupure d’eau. Paul la lit deux fois.', en: 'A notice announces yet another water cut. Paul reads it twice.' },
    { from: 'user', fr: 'Au début, le bruit du chantier m’agaçait un peu, surtout le samedi.', en: 'At first the noise of the works annoyed me a little, especially on Saturdays.' },
    { from: 'coach', fr: fr(E(1219)), en: en(E(1219)), warn: 'Irriter' },
    { from: 'user', fr: 'Maintenant, avec les coupures d’eau sans prévenir, je suis exaspéré.', en: 'Now, with the water cuts without warning, I am exasperated.' },
    { from: 'coach', fr: fr(E(1224)), en: en(E(1224)), warn: 'Le cran monte' },
    { from: 'user', fr: 'Je vais écrire à la gestionnaire, mais calmement.', en: 'I am going to write to the manager, but calmly.' },
    { from: 'coach', fr: 'Bonne idée. Écris « exaspéré » si c’est vrai, et explique pourquoi : deux coupures en une semaine. Le mot fort doit avoir ses faits.', en: 'Good idea. Write « exasperated » if it is true, and explain why: two cuts in one week. A strong word needs its facts.', warn: 'Les faits' },
    { from: 'coach', fr: fr(E(1222)), en: en(E(1222)), warn: 'Trois crans' },
  ],
  closing: { fr: 'Le même chantier : d’abord agaçant, puis irritant, enfin exaspérant.', en: 'The same building site: first annoying, then irritating, finally exasperating.' },
  audio: REC('rec-c1-17-chantier'), say: REFRAME, terms: ['intensite'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-force',
  title: 'Quatre crans de colère', frSub: 'Au-delà de la leçon 35 du B1',
  hint: 'Quatre cartes. À chaque carte, la patience diminue.',
  audio: REC('rec-c1-17-colere-cartes'), say: REFRAME, terms: ['intensite'],
  cards: [
    { head: 'L’impatience', label: 'agacer', fr: fr(E(1212)), sub: rsOf(E(1212)),
      body: 'Agacer, c’est provoquer de l’impatience, de la gêne. Un bruit répété agace. Le premier cran. EN: to annoy, the first notch.' },
    { head: 'La colère', label: 'irriter', fr: fr(E(1213)), sub: rsOf(E(1213)),
      body: 'Irriter, c’est mettre en colère. Plus fort qu’agacer : on ne sourit plus. EN: to irritate, to anger.' },
    { head: 'La colère vive', label: 'exaspérer', fr: fr(E(1214)), sub: rsOf(E(1214)),
      body: 'Exaspérer, c’est irriter vivement. La patience est à bout ; on menace, on part. EN: to exasperate.' },
    { head: 'L’insupportable', label: 'excéder', fr: fr(E(1215)), sub: rsOf(E(1215)),
      body: 'Excéder quelqu’un, c’est lui imposer une tension extrême. Excédé, on n’en peut plus. Ce verbe veut aussi dire dépasser : le sens vient de la phrase. EN: to push someone past their limit.' },
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-construire', layer: 'core', size: 'lg',
  title: 'Le bas et le haut de l’échelle', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('L’impatience', [
      it(E(1218), 'ça commence'),
      it(E(1216), 'la famille d’agacer'),
      it(E(1223), 'un léger agacement'),
      it('fr.b1.emotions.057', 'le nom, déjà connu'),
    ], chk('« Ses retards répétés commencent à m’agacer. » La personne est…',
      ['au premier cran', 'à bout de patience'], 0,
      'Commencent à agacer : l’impatience naît. EN: the first notch.')),
    grp('La patience à bout', [
      it(E(1220), 'après trois appels'),
      it(E(1221), 'il part sans un mot'),
      it(E(1217), 'la famille d’exaspérer'),
      it('fr.b1.emotions.040', 'le nom, déjà connu'),
    ], chk('« Excédé, il a quitté la réunion sans un mot. » Que dit « excédé » ici ?',
      ['qu’il n’en pouvait plus', 'qu’il avait dépassé l’heure'], 0,
      'Pour une personne, excéder : imposer une tension extrême. Le sens de « dépasser » ne va pas avec « il ». EN: he could not take any more.')),
    ctl('Qui est quoi', 'Le bruit est exaspérant ; Paul est…',
      ['exaspéré', 'exaspérant'], 0,
      'Exaspérant : ce qui exaspère. Exaspéré : celui qui ne supporte plus. EN: Paul is exasperated.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['intensite'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a2-piege', layer: 'core', swipe: true,
  title: 'Six phrases au mauvais cran', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le mot suit les faits',
    body: 'Regarde ce que la phrase raconte : une gêne, une colère, ou une patience à bout. Puis choisis agacer, irriter ou exaspérer. Un mot trop faible cache l’urgence ; un mot trop fort crée une crise. EN: let the facts choose the notch.',
  },
  cards: [
    trap(E(1200), 'trop faible', 'La cliente est à peine agacée : elle menace de rompre le contrat.', 'Une menace de rupture, c’est la patience à bout : exaspérée. EN: exaspérée.'),
    trap(E(1221), 'qui ressent', 'Excédant, il a quitté la réunion sans un mot.', 'Celui qui n’en peut plus est excédé ; excédant se dit de ce qui dépasse. EN: excédé.'),
    trap(E(1215), 'la construction', 'excéder à quelqu’un', 'Excéder se construit sans préposition : excéder quelqu’un. EN: no à.'),
    trap(E(1223), 'le nom', 'Un léger exaspération, oui ; de l’agacement, non.', 'Léger va avec agacement ; l’exaspération n’est jamais légère. EN: un léger agacement.'),
    trap(E(1224), 'le cran qui monte', 'Ce n’est plus de l’exaspération : c’est de l’agacement.', 'Ne plus… c’est : le cran monte, de l’agacement à l’exaspération. EN: the order is reversed.'),
    trap(E(1219), 'qui irrite', 'Le bruit du chantier est irrité par tout le quartier.', 'C’est le bruit qui irrite le quartier. EN: the noise irritates.'),
  ],
  drill: [
    { promptSay: 'Après trois appels sans réponse, elle a raccroché en criant : elle était … .', opts: ['exaspérée', 'un peu agacée'], correct: 0 },
    { promptSay: 'Martine est … par trois semaines de bruit.', opts: ['irritée', 'irritante'], correct: 0 },
    { promptSay: 'Un léger … , rien de plus.', opts: ['agacement', 'exaspération'], correct: 0 },
    { promptSay: '… , il a quitté la réunion sans un mot.', opts: ['Excédé', 'Agaçant'], correct: 0 },
    { promptSay: 'Ce bruit est … : on ne le supporte plus.', opts: ['exaspérant', 'exaspéré'], correct: 0 },
    { promptSay: 'Paul est … par les coupures d’eau.', opts: ['exaspéré', 'exaspérant'], correct: 0 },
    { promptSay: 'Le bruit du chantier … tout le quartier.', opts: ['irrite', 'excède de'], correct: 0 },
    { promptSay: 'Ce n’est plus de l’agacement : c’est de l’… .', opts: ['exaspération', 'impatience légère'], correct: 0 },
  ],
  steps: STEPS('Le mot suit les faits', 'Six phrases au mauvais cran'),
  audio: REC('rec-c1-17-piege-colere'), say: REFRAME, terms: ['intensite'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a2-ecoute', layer: 'core', hideLines: true,
  title: 'À la réunion des résidents', frSub: 'Huit voix, huit crans',
  lines: [
    ln(E(1218)), ln(E(1219)), ln(E(1220)), ln(E(1221)),
    ln(E(1223)), ln(E(1224)), ln('fr.c1.culture-profonde.091'), ln(E(1201)),
  ],
  questions: [
    { q: 'Premier résident : où en est-il avec les retards ?', opts: ['l’agacement commence', 'il est à bout'], correct: 0, why: 'Commencent à m’agacer : le premier cran. EN: annoyance begins.' },
    { q: 'Troisième résidente : dans quel état était-elle après trois appels ?', opts: ['exaspérée', 'à peine gênée'], correct: 0, why: 'Trois appels sans réponse : exaspérée. EN: exasperated.' },
    { q: 'Quatrième résident : comment a-t-il quitté la réunion ?', opts: ['sans un mot, à bout', 'en souriant'], correct: 0, why: 'Excédé : il n’en pouvait plus. EN: at the end of his tether.' },
    { q: 'Sixième résident : la colère a-t-elle baissé ou monté ?', opts: ['monté', 'baissé'], correct: 0, why: 'Ce n’est plus de l’agacement : c’est de l’exaspération. EN: it rose.' },
    { q: 'Dernière résidente : que veut-elle faire comprendre ?', opts: ['que deux mots voisins ne disent pas la même urgence', 'qu’elle n’est pas fâchée du tout'], correct: 0, why: 'Agacée ou exaspérée : deux urgences. EN: two different urgencies.' },
  ],
  audio: REC('rec-c1-17-colere-ecoute'), say: REFRAME, terms: ['intensite'],
};

const A2_TEXTE = dansUnTexte('a2-texte', 'Lire : un forum de résidents', TEXTE_A2, [
  { q: 'À quel cran en est Gilles ?', a: 'Au premier : les travaux commencent à l’agacer, surtout le samedi matin.' },
  { q: 'Et Martine ?', a: 'Plus haut : les travaux l’irritent franchement, après trois semaines sans aucun avis affiché.' },
  { q: 'Pourquoi Paul dit-il qu’il est exaspéré ?', a: 'L’eau a été coupée sans prévenir pour la deuxième fois de la semaine : il demande une réunion d’urgence.' },
  { q: 'Que montre la réponse de la gestionnaire ?', a: 'Qu’elle a entendu le cran de Paul : elle reprend le mot « exaspération » et propose une réunion et un horaire des coupures.' },
], 'rec-c1-17-texte-a2', ['intensite']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le premier cran', 'Un bruit répété qui donne de l’impatience…',
    ['agace', 'exaspère', 'excède'], 0,
    'L’impatience : agacer. EN: it annoys.'),
  ctl('Le plus haut', 'Dans l’histoire, après la deuxième coupure d’eau, Paul se dit…',
    ['exaspéré', 'légèrement agacé'], 0,
    'Il le dit lui-même : la patience est à bout. EN: exasperated.'),
  ctl('Qui ressent', 'Le bruit est exaspérant ; les voisins sont…',
    ['exaspérés', 'exaspérants'], 0,
    'Les voisins ressentent : -é. EN: exaspérés.'),
], ['intensite']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'De l’agacement à l’exaspération',
    opener: {
      line: 'Trois semaines de chantier sous tes fenêtres : ici tu montes l’échelle de la colère, cran par cran. EN: Three weeks of works under your windows: here you climb the ladder of anger, notch by notch.',
      imageRef: 'lessons/synonymes-nuances/act02.jpg',
    },
    sections: [],
    milestone: 'Tu dis agacé, irrité, exaspéré ou excédé selon les faits, et tu sépares ce qui exaspère de celui qui est exaspéré. EN: You choose agacé, irrité, exaspéré or excédé from the facts, and separate what exasperates from who is exasperated.',
    estScreens: 38, restPoints: ['a2-construire', 'a2-ecoute'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_CONSTRUIRE, A2_PIEGE, A2_ECOUTE, A2_TEXTE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — MONTER, DESCENDRE
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a3-ecoute', layer: 'core', hideLines: true,
  title: 'Le point économique', frSub: 'Une chroniqueuse, huit chiffres',
  lines: [
    ln(E(1232)), ln(E(1231)), ln(E(1233)), ln(E(1234)),
    ln(B229_ROW), ln('fr.b2.economie.003'), ln(E(1236)), ln(E(1237)),
  ],
  questions: [
    { q: 'Premier chiffre : comment évoluent les loyers du quartier ?', opts: ['ils montent brutalement', 'ils baissent un peu'], correct: 0, why: 'Flamber : s’élever brutalement. EN: they are soaring.' },
    { q: 'Deuxième : les inscriptions ont-elles beaucoup baissé ?', opts: ['non, légèrement', 'oui, brutalement'], correct: 0, why: 'Légèrement fléchi : une petite baisse. EN: slightly.' },
    { q: 'Troisième : qu’est-il arrivé à l’action ?', opts: ['une baisse brutale en une matinée', 'une hausse rapide'], correct: 0, why: 'S’effondrer : une baisse brutale. EN: it collapsed.' },
    { q: 'Quatrième : et les ventes depuis le printemps ?', opts: ['elles ne bougent presque pas', 'elles s’effondrent'], correct: 0, why: 'Stagner : fonctionner au ralenti, sans progresser. EN: flat.' },
    { q: 'Dernière phrase : que reproche la chroniqueuse au titre ?', opts: ['un mot trop fort pour le chiffre', 'un chiffre faux'], correct: 0, why: 'Une flambée pour trois pour cent : le mot exagère. EN: too strong a word.' },
  ],
  audio: REC('rec-c1-17-eco-ecoute'), say: REFRAME, terms: ['intensite'],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-table', layer: 'core', sheetId: 'sheet-force',
  title: 'Six verbes pour un chiffre',
  cols: ['Verbe', 'Sens', 'Force'],
  rows: [
    { cells: ['grimper', 'monter vite', 'forte'], say: fr(E(1225)),
      detail: { title: 'Grimper', body: 'S’élever rapidement. Plus vif qu’augmenter, sans le drame de flamber. EN: to climb fast.', say: fr('fr.b1.strategies-de-comprehension.1052') } },
    { cells: ['flamber', 'monter brutalement', 'très forte'], say: fr(E(1226)),
      detail: { title: 'Flamber', body: 'S’élever brutalement, en parlant des prix. Le nom : une flambée. EN: to soar.', say: fr(E(1232)) } },
    { cells: ['fléchir', 'diminuer', 'faible'], say: fr(E(1227)),
      detail: { title: 'Fléchir', body: 'Diminuer en valeur ou en quantité, sans drame. Souvent avec légèrement. EN: to dip.', say: fr(E(1231)) } },
    { cells: ['reculer', 'baisser', 'mesurée'], say: fr(B229_ROW),
      detail: { title: 'Reculer', body: `Vu à ${SCIENCE_REF} avec les chiffres qui bougent : une baisse que l’on mesure. EN: to fall back.`, say: fr(B229_ROW) } },
    { cells: ['s’effondrer', 'baisser brutalement', 'très forte'], say: fr(E(1228)),
      detail: { title: 'S’effondrer', body: 'Subir une baisse brutale. Le nom : un effondrement. À garder pour les vraies chutes. EN: to collapse.', say: fr(E(1233)) } },
    { cells: ['stagner', 'ne pas progresser', 'nulle'], say: fr(E(1234)),
      detail: { title: 'Stagner', body: 'Fonctionner au ralenti, sans progresser. Le mot regrette souvent l’immobilité. EN: to be flat.', say: fr(E(1234)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['intensite'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-construire', layer: 'core', size: 'lg',
  title: 'Monter ou descendre, et à quelle vitesse', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Ça monte', [
      it(E(1225), 'vite'),
      it(E(1226), 'brutalement'),
      it(E(1229), 'un peu'),
      it('fr.b2.economie.003', 'faire grimper'),
    ], chk('Une hausse de quarante pour cent des loyers en un an. Le titre dit que les loyers…',
      ['flambent', 'fléchissent', 'stagnent'], 0,
      'Une hausse brutale : flamber. Fléchir et stagner vont dans l’autre sens. EN: soar.')),
    grp('Ça baisse', [
      it(E(1227), 'un peu'),
      it(E(1228), 'brutalement'),
      it(E(1230), 'fortement'),
      it(E(1236), 'pas un effondrement'),
    ], chk('Les ventes perdent deux pour cent. Quel verbe colle au chiffre ?',
      ['fléchissent', 's’effondrent', 'flambent'], 0,
      'Une petite baisse : fléchir. S’effondrer serait une baisse brutale. EN: dip.')),
    ctl('Le titre', 'Le titre parle de flambée, l’article donne trois pour cent. Le titre…',
      ['exagère', 'minimise', 'dit juste'], 0,
      'Une flambée est une hausse brutale ; trois pour cent ne l’est pas. EN: it exaggerates.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['intensite'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a3-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre chiffres mal pesés',
  errors: [
    { wrong: 'Une baisse de deux pour cent : les ventes s’effondrent.', right: fr(E(1236)),
      why: 'Normal : les titres aiment les mots forts. Mais s’effondrer dit une baisse brutale ; deux pour cent, c’est un recul. EN: not a collapse.' },
    { wrong: 'Les inscriptions ont légèrement flambé cet automne.', right: fr(E(1231)),
      why: 'Normal : on cherche un verbe vivant. Mais flamber est brutal, et il monte ; une petite baisse, c’est fléchir. EN: fléchi.' },
    { wrong: 'Quarante pour cent de plus depuis janvier : les loyers du quartier fléchissent.', right: fr(E(1232)),
      why: 'Normal : fléchir sonne savant. Mais fléchir dit une baisse ; une hausse brutale des loyers, c’est flamber. EN: flambent.' },
    { wrong: 'Les ventes s’effondrent depuis le printemps : elles ne bougent plus.', right: fr(E(1234)),
      why: 'Normal : on veut dire que ça va mal. Mais si les ventes ne bougent plus, elles stagnent. EN: stagnent.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['intensite'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a3-exemples', layer: 'core',
  title: 'Cinq chiffres, cinq verbes', frSub: 'Du B2 et de cette leçon',
  examples: [
    ex(B229_ROW, `${Cap(SCIENCE_REF)} : le chiffre, mesuré`),
    ex('fr.b1.strategies-de-comprehension.1052', 'un titre de presse'),
    ex(E(1233), 'une baisse brutale, en une matinée'),
    ex(E(1237), 'un titre qui exagère'),
    ex(E(1235), 'la règle de l’acte'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['intensite'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Lire : une brève sur l’immobilier', TEXTE_A3, [
  { q: 'Quel mouvement est le plus fort dans la brève ?', a: 'La hausse des loyers : ils flambent, ils ont grimpé de neuf pour cent en un an.' },
  { q: 'Comment la brève décrit-elle la baisse des ventes ?', a: 'Elles ont légèrement fléchi, de deux pour cent : une petite baisse.' },
  { q: 'Pourquoi juge-t-elle « effondrement » excessif ?', a: 'Parce qu’un effondrement est une baisse brutale, et deux pour cent n’est qu’un recul.' },
  { q: 'Que dit « stagne » de la construction ?', a: 'Qu’elle fonctionne au ralenti, sans progresser, depuis le printemps ; le mot regrette cette immobilité.' },
], 'rec-c1-17-texte-a3', ['intensite']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La hausse brutale', 'Des prix qui s’élèvent brutalement…',
    ['flambent', 'fléchissent', 'stagnent'], 0,
    'Flamber : s’élever brutalement. EN: soar.'),
  ctl('La petite baisse', 'Une baisse de deux pour cent, c’est…',
    ['un recul', 'un effondrement'], 0,
    'S’effondrer est réservé aux baisses brutales. EN: a fall back.'),
  ctl('Rien ne bouge', 'Des ventes qui ne progressent plus…',
    ['stagnent', 'grimpent'], 0,
    'Stagner : fonctionner au ralenti. EN: they are flat.'),
], ['intensite']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Monter, descendre',
    opener: {
      line: 'Un titre qui crie à l’effondrement pour deux pour cent : ici tu fais coller le verbe au chiffre. EN: A headline crying collapse over two per cent: here you make the verb fit the figure.',
      imageRef: 'lessons/synonymes-nuances/act03.jpg',
    },
    sections: [],
    milestone: 'Tu choisis grimper, flamber, fléchir, reculer, s’effondrer ou stagner selon le chiffre, et tu repères le titre qui exagère. EN: You pick the verb of change that fits the figure, and spot the headline that exaggerates.',
    estScreens: 38, restPoints: ['a3-table', 'a3-erreurs'],
  },
  sections: [A3_ECOUTE, A3_TABLE, A3_CONSTRUIRE, A3_ERREURS, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LE MÊME TRAIT, DEUX JUGEMENTS
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a4-histoire', layer: 'core',
  title: 'Deux lettres pour Samuel', frSub: 'Économe ou avare',
  setting: 'À l’imprimerie, Benoît a reçu deux lettres sur le même candidat, Samuel. Il les lit à voix haute devant toi, à la pause.',
  bubbles: [
    { from: 'narrator', fr: 'Benoît pose les deux feuilles côte à côte sur la table.', en: 'Benoît lays the two sheets side by side on the table.' },
    { from: 'coach', fr: 'La première dit qu’il est persévérant et économe. La seconde, qu’il est obstiné et avare.', en: 'The first says he is persevering and thrifty. The second says he is obstinate and miserly.' },
    { from: 'user', fr: 'On dirait deux personnes différentes.', en: 'It sounds like two different people.' },
    { from: 'coach', fr: 'Pourtant les faits sont les mêmes : il insiste, et il dépense peu.', en: 'And yet the facts are the same: he insists, and he spends little.', warn: 'Les faits' },
    { from: 'user', fr: 'Alors ce sont les mots qui jugent, pas les faits.', en: 'So it is the words that judge, not the facts.' },
    { from: 'coach', fr: fr(E(1249)), en: en(E(1249)), warn: 'Le jugement' },
    { from: 'coach', fr: 'Je vais l’appeler pour un entretien. Je préfère juger moi-même.', en: 'I am going to call him for an interview. I would rather judge for myself.' },
  ],
  closing: { fr: 'Persévérant ou obstiné, économe ou avare : le même homme, deux jugements.', en: 'Persevering or obstinate, thrifty or miserly: the same man, two judgements.' },
  audio: REC('rec-c1-17-samuel'), say: REFRAME, terms: ['connotation'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-couleur',
  title: 'Quatre traits, deux couleurs', frSub: 'Louer ou reprocher',
  hint: 'Quatre cartes. Chaque fois, le même trait, vu de deux côtés.',
  audio: REC('rec-c1-17-trait-cartes'), say: REFRAME, terms: ['connotation'],
  cards: [
    { head: 'La dépense', label: 'économe, avare', fr: fr(E(1238)), sub: rsOf(E(1238)),
      body: 'Économe : qui veille à limiter ses dépenses. Avare : qui accumule en restreignant tout. Radin dit avare entre amis. EN: thrifty approves, miserly blames.' },
    { head: 'L’insistance', label: 'persévérant, obstiné', fr: fr(E(1240)), sub: rsOf(E(1240)),
      body: 'Persévérant : qui tient bon dans sa résolution. Obstiné : qui persévère sans vouloir rien entendre. EN: persevering approves, obstinate blames.' },
    { head: 'La prudence', label: 'prudent, timoré', fr: fr(E(1243)), sub: rsOf(E(1243)),
      body: 'Prudent : qui évite les risques inutiles. Timoré : d’une prudence excessive. EN: cautious, or too cautious.' },
    { head: 'L’envie de savoir', label: 'curieux, indiscret', fr: fr(E(1245)), sub: rsOf(E(1245)),
      body: 'Curieux, pour un esprit : qui veut apprendre. Indiscret : qui insiste pour savoir ce qu’on ne veut pas dévoiler. EN: curious, or prying.' },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-construire', layer: 'core', size: 'lg',
  title: 'Louer ou blâmer le même trait', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le mot qui loue', [
      it(E(1247), 'économe'),
      it(E(1248), 'persévérante'),
      it(E(1244), 'curieux'),
      it(MELIORATIF, 'le mot savant : mélioratif'),
    ], chk('« Économe, elle refuse de payer plus cher pour la même chose. » Le mot…',
      ['approuve', 'reproche'], 0,
      'Économe : qui veille à ses dépenses. Un éloge. EN: it approves.')),
    grp('Le mot qui blâme', [
      it(E(1239), 'avare'),
      it(E(1241), 'obstiné'),
      it(E(1246), 'arriviste'),
      it('fr.b2.argot-classique.030', 'radin, en familier'),
    ], chk('Avare et radin : quelle est la différence ?',
      ['le registre : radin est familier', 'le jugement : radin approuve'], 0,
      'Les deux blâment ; radin est familier. EN: the register.')),
    ctl('Dans la presse', `${Cap(PRESSE_REF)} : « La municipalité s’entête » et « La municipalité maintient son projet ». Ces deux titres…`,
      ['décrivent le même fait avec deux jugements', 'décrivent deux faits différents'], 0,
      'S’entêter blâme, maintenir reste neutre. La leçon 24 du C1 l’a vu pour la presse. EN: one fact, two judgements.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['connotation'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a4-piege', layer: 'core', swipe: true,
  title: 'Six éloges qui blessent', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Louer ou reprocher : choisis avant d’écrire',
    body: 'Les deux mots décrivent le même trait. Avant de choisir, demande-toi si tu veux louer ou reprocher. Dans un éloge, un mot péjoratif blesse ; dans une critique, un mot flatteur dit le contraire de ta pensée. EN: decide first whether you praise or blame.',
  },
  cards: [
    trap(E(1247), 'éloge', 'Avare, elle refuse de payer plus cher pour la même chose : bravo.', 'Tu félicites : le mot qui loue la même dépense est économe. EN: économe.'),
    trap(E(1248), 'éloge', 'Obstinée, elle a relancé le dossier jusqu’à obtenir une réponse, et nous l’en remercions.', 'Un remerciement appelle le mot qui loue : persévérante. EN: persévérante.'),
    trap(E(1250), 'les deux pôles', 'Arriviste, c’est un compliment ; ambitieuse, une accusation.', 'Ambitieux peut louer ; arriviste accuse toujours. EN: the reverse.'),
    trap(E(1251), 'les deux regards', 'Prudent pour les uns, curieux pour les autres : le chef n’a pas changé.', 'Le revers de prudent, c’est timoré : d’une prudence excessive. EN: timoré.'),
    trap(E(1238), 'le mot qui loue', 'une gestionnaire avare, félicitée par le conseil', 'Félicitée : le mot qui approuve est économe. EN: économe.'),
    trap(E(1242), 'neutre', 'une décision timorée, que tout le monde approuve', 'Si tout le monde approuve, la prudence n’est pas excessive : prudente. EN: prudente.'),
  ],
  drill: [
    { promptSay: 'Dans une lettre de remerciement : « Elle est … et ne gaspille rien. »', opts: ['économe', 'avare'], correct: 0 },
    { promptSay: 'Dans une critique : « Il est … : il n’écoute aucun argument. »', opts: ['obstiné', 'persévérant'], correct: 0 },
    { promptSay: 'D’une prudence excessive : …', opts: ['timoré', 'prudent'], correct: 0 },
    { promptSay: 'Qui veut réussir à tout prix, sans scrupule : …', opts: ['arriviste', 'ambitieux'], correct: 0 },
    { promptSay: 'Une question … : elle insiste sur ce qu’on veut taire.', opts: ['indiscrète', 'curieuse'], correct: 0 },
    { promptSay: 'Entre amis, pour avare : …', opts: ['radin', 'économe'], correct: 0 },
    { promptSay: 'Un esprit … : il veut apprendre.', opts: ['curieux', 'indiscret'], correct: 0 },
    { promptSay: '…, elle a relancé le dossier, et nous l’en remercions.', opts: ['Persévérante', 'Obstinée'], correct: 0 },
  ],
  steps: STEPS('Louer ou reprocher', 'Six éloges qui blessent'),
  audio: REC('rec-c1-17-piege-trait'), say: REFRAME, terms: ['connotation'],
};

const A4_FLASH: Sec<'flashcards'> = {
  type: 'flashcards', id: 'a4-flash', layer: 'core',
  title: 'Huit traits en deux couleurs', frSub: 'De l’anglais au français',
  cards: [
    { front: 'thrifty (approving)', back: 'économe', say: fr(E(1247)) },
    { front: 'miserly (blaming)', back: 'avare', say: fr(E(1239)) },
    { front: 'a cheapskate (informal)', back: 'un radin', say: 'Entre amis, on le traite de radin.' },
    { front: 'persevering', back: 'persévérant', say: fr(E(1248)) },
    { front: 'obstinate', back: 'obstiné', say: fr(E(1241)) },
    { front: 'overcautious, timid', back: 'timoré', say: fr(E(1243)) },
    { front: 'prying', back: 'indiscret', say: fr(E(1245)) },
    { front: 'a ruthless careerist', back: 'un arriviste', say: fr(E(1246)) },
  ],
  audio: AUDIO, say: REFRAME, terms: ['connotation'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Lire : deux lettres de référence', TEXTE_A4, [
  { q: 'Les deux textes racontent-ils des faits différents ?', a: 'Non : Samuel insiste sur les problèmes, dépense peu et hésite avant de décider. Seuls les mots changent.' },
  { q: 'Quels mots de la première lettre louent ?', a: 'Persévérant, économe, prudent, et sa curiosité.' },
  { q: 'Quels mots du message les blâment ?', a: 'Obstiné, avare, timoré.' },
  { q: 'Que devrait faire un recruteur qui lit les deux ?', a: 'Séparer les faits des jugements, et vérifier les faits lui-même, par exemple en entretien.' },
], 'rec-c1-17-texte-a4', ['connotation']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le jugement', 'Économe et avare décrivent la même dépense. Ce qui change, c’est…',
    ['le jugement', 'le montant', 'le registre'], 0,
    'Économe loue, avare blâme, tous deux courants. EN: the judgement.'),
  ctl('Trop prudent', 'D’une prudence excessive, on dit…',
    ['timoré', 'prudent'], 0,
    'Timoré : le même trait, reproché. EN: timoré.'),
  ctl('L’éloge', 'Dans un discours d’adieu qui félicite, tu écris…',
    ['persévérante', 'obstinée'], 0,
    'Le mot qui loue la même insistance. EN: persévérante.'),
], ['connotation']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Le même trait, deux jugements',
    opener: {
      line: 'Deux lettres sur le même candidat, deux portraits opposés : ici tu vois comment un mot loue ou blâme le même fait. EN: Two letters about the same candidate, two opposite portraits: here you see how a word praises or blames the same fact.',
      imageRef: 'lessons/synonymes-nuances/act04.jpg',
    },
    sections: [],
    milestone: 'Tu choisis économe ou avare, persévérant ou obstiné, prudent ou timoré selon que tu loues ou reproches. EN: You choose the approving or the blaming word on purpose.',
    estScreens: 40, restPoints: ['a4-construire', 'a4-flash'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_PIEGE, A4_FLASH, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LES SUFFIXES QUI JUGENT
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a5-histoire', layer: 'core',
  title: 'Une critique à relire', frSub: 'Rougeâtre ou verdâtre',
  setting: 'À Québec, Élodie tient un blogue gourmand. Elle relit sa critique du Bistro des Quais avec son ami Karim, au téléphone.',
  bubbles: [
    { from: 'narrator', fr: 'Élodie a son texte sous les yeux. Karim l’écoute en préparant son souper.', en: 'Élodie has her text in front of her. Karim listens while making his supper.' },
    { from: 'user', fr: 'J’ai écrit que la salle baigne dans une lumière rougeâtre. C’est méchant, d’après toi.', en: 'I wrote that the room is bathed in a reddish light. Is that mean, do you think.' },
    { from: 'coach', fr: 'Pas du tout. Rougeâtre dit seulement que la lumière tire sur le rouge. Tu ajoutes « chaleureuse », et tout est clair.', en: 'Not at all. Rougeâtre only says the light tends towards red. You add « warm », and all is clear.', warn: 'Presque rouge' },
    { from: 'user', fr: 'Et le serveur, je l’appelle un bellâtre.', en: 'And the waiter, I call him a bellâtre.' },
    { from: 'coach', fr: 'Là, tu juges : un bellâtre est beau, mais fat et niais. Assume-le, c’est une critique.', en: 'There you are judging: a bellâtre is handsome but vain and silly. Own it, it is a review.', warn: 'Un jugement' },
    { from: 'user', fr: 'Pour le poisson, j’hésite entre fade et fadasse.', en: 'For the fish, I hesitate between bland and fadasse.' },
    { from: 'coach', fr: 'Fadasse est plus fort, et plus méprisant. Choisis-le seulement si tu veux être dure.', en: 'Fadasse is stronger, and more scornful. Choose it only if you want to be harsh.', warn: 'Plus fort' },
    { from: 'coach', fr: fr(E(1263)), en: en(E(1263)), warn: 'Le suffixe' },
  ],
  closing: { fr: 'Le suffixe peut décrire ou juger : regarde ce qu’il qualifie.', en: 'A suffix can describe or judge: look at what it qualifies.' },
  audio: REC('rec-c1-17-critique'), say: REFRAME, terms: ['suffixe'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-couleur',
  title: 'Quatre suffixes, quatre nuances', frSub: 'Décrire ou juger',
  hint: 'Quatre cartes. La première ne juge pas ; les trois autres, si.',
  audio: REC('rec-c1-17-suffixe-cartes'), say: REFRAME, terms: ['suffixe'],
  cards: [
    { head: 'Presque, sans jugement', label: '-âtre', fr: fr(E(1253)), sub: rsOf(E(1253)),
      body: 'Rougeâtre, bleuâtre, grisâtre : -âtre dit « un peu, pas tout à fait ». Pour une couleur de ciel ou de lumière, il décrit. EN: -âtre often just means -ish.' },
    { head: 'Presque, et pas beau', label: '-âtre', fr: fr(E(1254)), sub: rsOf(E(1254)),
      body: 'Un teint verdâtre, un goût douceâtre, un bellâtre : sur un visage, une saveur, une personne, le suffixe déprécie. EN: on a face or a taste, it disparages.' },
    { head: 'Trop, et mal', label: '-asse', fr: fr(E(1257)), sub: rsOf(E(1257)),
      body: 'Fadasse : qui manque totalement de goût. La paperasse : des papiers jugés inutiles. -asse ajoute le mépris. EN: -asse adds scorn.' },
    { head: 'La moquerie', label: '-aud, -ailleur', fr: fr(E(1259)), sub: rsOf(E(1259)),
      body: `Un lourdaud, un écrivailleur : le suffixe se moque. ${Cap(ARGOT_REF)} t’a montré le même effet avec -ard. EN: -aud and -ailleur mock, like -ard.` },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-construire', layer: 'core', size: 'lg',
  title: 'Le suffixe qui décrit, le suffixe qui juge', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Il décrit', [
      it(E(1252), 'presque rouge'),
      it(E(1253), 'une lumière'),
      it(E(1261), 'un ciel au loin'),
    ], chk('« Au loin, le ciel prenait une teinte rougeâtre. » Le mot rougeâtre…',
      ['décrit une couleur approximative', 'critique le ciel'], 0,
      'Pour un ciel, -âtre dit seulement « presque ». EN: it describes.')),
    grp('Il juge', [
      it(E(1255), 'doux, mais fade'),
      it(E(1256), 'beau, mais fat'),
      it(E(1264), 'des papiers jugés inutiles'),
      it(B232_ARD, `${Cap(ARGOT_REF)} : le suffixe -ard`),
    ], chk('« Un parfum douceâtre » : ce parfum est…',
      ['doux et fade, désagréable', 'doux et délicat'], 0,
      'Douceâtre : doux et fade. Le suffixe déprécie. EN: sickly-sweet.')),
    ctl('Le test', 'Pour savoir si -âtre juge, tu regardes…',
      ['ce qu’il qualifie', 'la longueur du mot', 'la première lettre'], 0,
      'Une lueur rougeâtre décrit ; un teint verdâtre juge. EN: look at what it qualifies.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['suffixe'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a5-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre compliments qui ratent',
  errors: [
    { wrong: 'Pour te remercier, un parfum douceâtre et délicat.', right: 'Pour te remercier, un parfum doux et délicat.',
      why: 'Normal : douceâtre ressemble à doux. Mais le suffixe le rend fade et désagréable : pas pour un cadeau. EN: doux.' },
    { wrong: 'Un bellâtre élégant et cultivé : voilà notre nouveau directeur.', right: 'Un homme élégant et cultivé : voilà notre nouveau directeur.',
      why: 'Normal : bellâtre contient beau. Mais il dit beau, fat et niais : une moquerie. EN: un homme.' },
    { wrong: 'Le jury a salué un écrivailleur de grand talent.', right: 'Le jury a salué un écrivain de grand talent.',
      why: 'Normal : on croit à une variante. Mais un écrivailleur est un mauvais écrivain. EN: un écrivain.' },
    { wrong: 'Merci d’avoir rempli toute cette paperasse, si utile pour le dossier.', right: 'Merci d’avoir rempli tous ces formulaires, si utiles pour le dossier.',
      why: 'Normal : paperasse semble désigner les papiers. Mais il les juge inutiles : il contredit le merci. EN: formulaires.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['suffixe'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a5-ecoute', layer: 'core', hideLines: true,
  title: 'Élodie relit à voix haute', frSub: 'Huit phrases, avec ou sans jugement',
  lines: [
    ln(E(1261)), ln(E(1262)), ln(E(1264)), ln(E(1265)),
    ln(E(1253)), ln(E(1255)), ln(B232_ARD), ln(E(1263)),
  ],
  questions: [
    { q: 'Première phrase : le ciel est-il jugé ?', opts: ['non, sa couleur est décrite', 'oui, il est laid'], correct: 0, why: 'Une teinte rougeâtre : une couleur approximative. EN: just described.' },
    { q: 'Deuxième phrase : l’homme du bateau avait-il bonne mine ?', opts: ['non', 'oui'], correct: 0, why: 'Un teint verdâtre : pas flatteur. EN: no.' },
    { q: 'Troisième phrase : que pense Élodie de ces papiers ?', opts: ['qu’ils sont inutiles', 'qu’ils sont importants'], correct: 0, why: 'La paperasse : des papiers jugés inutiles. EN: useless.' },
    { q: 'Quatrième phrase : laquelle des deux était la pire ?', opts: ['la sauce', 'la soupe'], correct: 0, why: 'Fade pour la soupe, fadasse pour la sauce : plus fort. EN: the sauce.' },
    { q: 'Septième phrase : de quel suffixe parle-t-on ?', opts: ['-ard', '-âtre', '-asse'], correct: 0, why: 'Le suffixe vu à la leçon 32 du B2. EN: -ard.' },
  ],
  audio: REC('rec-c1-17-suffixe-ecoute'), say: REFRAME, terms: ['suffixe'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Lire : une critique de restaurant', TEXTE_A5, [
  { q: 'Quel mot en -âtre décrit sans juger ?', a: 'Rougeâtre : la lumière tire sur le rouge, et l’autrice la trouve plutôt chaleureuse.' },
  { q: 'Comment juge-t-elle le serveur ?', a: 'C’est un bellâtre : beau, mais fat et niais, qui s’admirait dans les miroirs.' },
  { q: 'Que dit fadasse de plus que fade ?', a: 'Que le poisson manquait totalement de goût, avec du mépris.' },
  { q: 'Pourquoi parle-t-elle de paperasse ?', a: 'Pour dire que le formulaire de la carte de fidélité lui a paru inutile et agaçant.' },
], 'rec-c1-17-texte-a5', ['suffixe']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Sans jugement', 'Quel mot décrit seulement une couleur ?',
    ['une lueur rougeâtre', 'un teint verdâtre'], 0,
    'Pour une lumière, rougeâtre dit « presque rouge ». EN: a reddish glow.'),
  ctl('Le mépris', 'Fadasse, par rapport à fade, est…',
    ['plus fort et plus méprisant', 'plus faible', 'plus soutenu'], 0,
    'Fadasse : qui manque totalement de goût. EN: stronger, scornful.'),
  ctl('La personne', 'Un mauvais écrivain, c’est…',
    ['un écrivailleur', 'un écrivain'], 0,
    '-ailleur rabaisse. EN: a hack.'),
], ['suffixe']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Les suffixes qui jugent',
    opener: {
      line: 'Une lumière rougeâtre, un teint verdâtre : ici tu sépares le suffixe qui décrit de celui qui juge. EN: A reddish light, a greenish face: here you separate the suffix that describes from the one that judges.',
      imageRef: 'lessons/synonymes-nuances/act05.jpg',
    },
    sections: [],
    milestone: 'Tu sais quand -âtre décrit et quand il juge, et tu n’emploies -asse, -aud ou -ailleur que pour critiquer. EN: You know when -âtre describes and when it judges, and keep -asse, -aud and -ailleur for criticism.',
    estScreens: 38, restPoints: ['a5-construire', 'a5-ecoute'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_CONSTRUIRE, A5_ERREURS, A5_ECOUTE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — ADOUCIR OU MASQUER
 *  Euphemism as connotation. Litote in speech is c1.06's: cited only.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a6-lecture', layer: 'core', questionsInModal: true,
  title: 'Un communiqué et un article', frSub: 'Lis les deux, et compare les mots',
  text: LECTURE_COMMUNIQUE,
  glossary: [
    { word: 'collaborateurs', en: 'staff, co-workers', note: 'Dans une entreprise, le mot valorise les salariés.' },
    { word: 'maîtrisé', en: 'brought under control', note: 'Maîtriser un incendie : l’empêcher de s’étendre, puis l’éteindre.' },
    { word: 'enveloppait', en: 'wrapped', note: 'Envelopper un fait : le présenter sous une forme qui le cache en partie.' },
  ],
  questions: [
    { q: 'Global : que comparent ces deux textes ?', a: 'Deux façons de dire les mêmes faits : la formule douce de l’entreprise et le mot direct du journal.' },
    { q: 'Détail : que deviennent les « collaborateurs invités à poursuivre leur parcours » dans l’article ?', a: 'Trente-deux licenciements.' },
    { q: 'Détail : et l’« incident technique » ?', a: 'Un début d’incendie, maîtrisé par les pompiers.' },
    { q: 'Inférence : pourquoi le journal garde-t-il une formule douce pour le fondateur ?', a: 'Parce que « s’éteindre » et « décédé » ne cachent rien : ils ménagent seulement la famille.' },
    { q: 'Position : quel euphémisme du communiqué te paraît masquer un fait ? Pourquoi ?', a: 'L’ajustement des effectifs, ou l’incident technique : le lecteur ne comprend plus qu’il y a eu des licenciements, ou un incendie.' },
  ],
  audio: REC('rec-c1-17-communique'), say: REFRAME, terms: ['euphemisme'],
};

const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a6-table', layer: 'core', sheetId: 'sheet-couleur',
  title: 'Six formules douces',
  cols: ['Formule', 'Le fait', 'Usage'],
  rows: [
    { cells: ['s’éteindre', 'mourir', 'respecter'], say: fr(E(1267)),
      detail: { title: 'S’éteindre', body: 'Un euphémisme doux pour la mort. Il ménage la famille et ne cache rien. EN: to slip away.', say: fr(E(1270)) } },
    { cells: ['décéder', 'mourir', 'soutenu, euphémique'], say: fr(E(1268)),
      detail: { title: 'Décéder', body: 'Soutenu, souvent employé par euphémisme ; seulement pour une personne, avec être. EN: to pass away.', say: fr(E(1268)) } },
    { cells: ['un certain âge', 'âgée', 'adoucir'], say: fr('fr.c1.nuances-et-registres.132'),
      detail: { title: 'D’un certain âge', body: 'Une politesse : le fait reste compris. EN: of a certain age.', say: fr('fr.c1.nuances-et-registres.132') } },
    { cells: ['ajuster les effectifs', 'licencier', 'masquer'], say: fr('fr.c1.nuances-et-registres.135'),
      detail: { title: 'Ajuster les effectifs', body: 'La formule cache des licenciements. Le lecteur ne comprend plus ce qui arrive. EN: to « adjust the workforce ».', say: fr(E(1273)) } },
    { cells: ['un incident', 'un incendie', 'masquer'], say: fr('fr.c1.nuances-et-registres.140'),
      detail: { title: 'Un incident', body: 'Un mot vague à la place d’un fait précis. Les pompiers, eux, disent incendie. EN: an « incident ».', say: fr('fr.c1.nuances-et-registres.140') } },
    { cells: ['un ajustement tarifaire', 'une hausse', 'masquer'], say: fr(E(1274)),
      detail: { title: 'Un ajustement tarifaire', body: 'Une hausse de prix qui ne dit pas son nom. Donne le chiffre. EN: a price « adjustment ».', say: fr(E(1274)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['euphemisme'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-construire', layer: 'core', size: 'lg',
  title: 'Ménager ou cacher', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Il ménage, sans rien cacher', [
      it(E(1267), 's’éteindre'),
      it(E(1268), 'décéder'),
      it(E(1270), 'la famille est ménagée'),
      it('fr.c1.nuances-et-registres.132', 'un certain âge'),
    ], chk('« Il s’est éteint dans la nuit, entouré des siens. » Le lecteur comprend-il qu’il est mort ?',
      ['oui : l’euphémisme ménage sans cacher', 'non : le fait est masqué'], 0,
      'S’éteindre adoucit le mot, pas le fait. EN: yes.')),
    grp('Il cache le fait', [
      it(E(1273), 'quarante licenciements'),
      it(E(1274), 'une hausse de huit dollars'),
      it('fr.c1.nuances-et-registres.135', 'ajuster les effectifs'),
      it('fr.c1.nuances-et-registres.140', 'un incident, un incendie'),
    ], chk('« Un ajustement tarifaire » pour une hausse de huit dollars : l’euphémisme…',
      ['masque le fait', 'respecte une douleur', 'adoucit une remarque personnelle'], 0,
      'Le client ne voit plus qu’il paiera plus. EN: it masks the fact.')),
    ctl('La voisine', `${Cap(NUANCER_REF)} : « ${fr(C106_ROW)} » Et l’euphémisme ?`,
      ['il adoucit ce qui serait brutal', 'il fait entendre plus qu’il ne dit'], 0,
      'La litote dit moins pour faire entendre plus ; l’euphémisme atténue une réalité brutale ou déplaisante. EN: it softens.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['euphemisme'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a6-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Adoucir les mots, jamais les faits',
    body: 'Un euphémisme est juste s’il ménage une personne et laisse le fait reconnaissable. S’il cache ce que le lecteur a le droit de savoir, remplace-le par le fait. Et respecte sa grammaire : décéder se conjugue avec être. EN: soften the words, never the facts.',
  },
  cards: [
    trap(E(1268), 'l’auxiliaire', 'Madame Roy a décédé le 3 mars, à Rimouski.', 'Décéder se conjugue avec être : elle est décédée. EN: est décédée.'),
    trap(E(1267), 'le pronom', 'Il a éteint dans la nuit, entouré des siens.', 'Pour mourir, le verbe est pronominal : il s’est éteint. EN: s’est éteint.'),
    trap(E(1273), 'le fait masqué', 'Une restructuration qui supprime quarante postes, ce n’est qu’un ajustement.', 'Quarante postes supprimés : quarante licenciements. Dis le fait. EN: name the fact.'),
    trap(E(1270), 'ménager', 'Le mot doux ménage la famille ; il cache tout.', 'Un euphémisme juste ne cache rien : il ménage. EN: it hides nothing.'),
    trap(E(1272), 'avec égards', 'Dis-le avec égards, ou ne le dis pas.', 'Ménager n’est pas taire : dis-le avec égards, mais dis-le. EN: but say it.'),
    trap(E(1277), 'le mot direct', 'Ici, la formule la plus vague serait la plus respectueuse.', 'Quand le fait compte pour le lecteur, le mot direct respecte davantage. EN: the plain word.'),
  ],
  drill: [
    { promptSay: 'Madame Roy … décédée le 3 mars.', opts: ['est', 'a'], correct: 0 },
    { promptSay: 'Notre fondateur s’est … dans la nuit.', opts: ['éteint', 'décédé'], correct: 0 },
    { promptSay: 'Quarante postes supprimés, ce sont quarante … .', opts: ['licenciements', 'ajustements'], correct: 0 },
    { promptSay: 'Un euphémisme adoucit les mots, jamais les … .', opts: ['faits', 'phrases'], correct: 0 },
    { promptSay: 'Un « incident » qui était un incendie : la formule … le fait.', opts: ['masque', 'respecte'], correct: 0 },
    { promptSay: '« S’éteindre », pour un décès : la formule … la famille.', opts: ['ménage', 'trompe'], correct: 0 },
    { promptSay: 'Décéder appartient au registre … .', opts: ['soutenu', 'familier'], correct: 0 },
    { promptSay: 'Dis-le avec égards, mais … .', opts: ['dis-le', 'tais-le'], correct: 0 },
  ],
  steps: STEPS('Adoucir les mots, jamais les faits', 'Six phrases à redresser'),
  audio: REC('rec-c1-17-piege-euphemisme'), say: REFRAME, terms: ['euphemisme'],
};

const A6_HACKS: Sec<'hacks'> = {
  type: 'hacks', id: 'a6-hacks', layer: 'core', title: 'Trois questions devant une formule douce',
  hacks: [
    { hack: 'Remplace la formule par le mot direct : la phrase dit-elle la même chose ?', why: 'Si oui, l’euphémisme ménage seulement. Si le mot direct change le sens pour le lecteur, la formule masquait. EN: swap in the plain word.' },
    { hack: 'Demande-toi qui la formule protège : une famille, ou l’auteur du texte.', why: 'Ménager une douleur est un égard ; protéger l’auteur d’une mauvaise nouvelle, c’est cacher. EN: who is being protected.' },
    { hack: 'Cherche le chiffre que la formule évite.', why: 'Un ajustement, une évolution, une restructuration : derrière, il y a souvent un montant ou un nombre de postes. EN: look for the missing figure.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['euphemisme'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Lire : le message d’un club de sport', TEXTE_A6, [
  { q: 'Quel euphémisme ménage, sans rien cacher ?', a: '« Lucien est décédé » : le fait est clair, dit avec égards.' },
  { q: 'Quel euphémisme masque un fait ?', a: '« Un ajustement tarifaire » : c’est une hausse de huit dollars par mois.' },
  { q: 'Que demande Mireille dans sa réponse ?', a: 'Qu’on dise les choses avec égards, mais qu’on les dise : elle préfère les chiffres aux formules.' },
  { q: 'Le message du club est-il faux ?', a: 'Non : il ne ment pas, mais sa formule cache un fait que les abonnés ont le droit de connaître.' },
], 'rec-c1-17-texte-a6', ['euphemisme']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le test', 'Un euphémisme est juste quand…',
    ['le lecteur comprend encore le fait', 'le fait disparaît'], 0,
    'Il adoucit les mots, jamais les faits. EN: the fact stays clear.'),
  ctl('L’auxiliaire', 'Elle … décédée hier.',
    ['est', 'a'], 0,
    'Décéder se conjugue avec être. EN: est.'),
  ctl('Masquer', '« Ajuster les effectifs » pour des licenciements…',
    ['masque le fait', 'respecte une douleur', 'adoucit un reproche'], 0,
    'Le lecteur ne voit plus les licenciements. EN: masks.'),
], ['euphemisme']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Adoucir ou masquer',
    opener: {
      line: 'Un communiqué tout en douceur, un journal qui dit les faits : ici tu sépares l’euphémisme qui ménage de celui qui cache. EN: A gentle press release, a paper that states the facts: here you separate the euphemism that spares from the one that hides.',
      imageRef: 'lessons/synonymes-nuances/act06.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais l’euphémisme qui respecte, adoucit ou masque, et tu dis le fait quand il compte. EN: You recognise the euphemism that respects, softens or masks, and state the fact when it matters.',
    estScreens: 40, restPoints: ['a6-table', 'a6-piege'],
  },
  sections: [A6_LECTURE, A6_TABLE, A6_CONSTRUIRE, A6_PIEGE, A6_HACKS, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LES VERBES QUI VONT AVEC
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a7-histoire', layer: 'core',
  title: 'Le compte rendu du comité', frSub: 'Le verbe que le nom attend',
  setting: 'Après la séance du conseil municipal, Julie, présidente du Comité du quartier Saint-Roch-Nord, rédige le compte rendu avec toi, au café du coin.',
  bubbles: [
    { from: 'narrator', fr: 'Julie a écrit un premier jet. Elle te tend son portable.', en: 'Julie has written a first draft. She hands you her laptop.' },
    { from: 'user', fr: 'Tu as écrit « les résidents ont demandé trois questions ». On pose une question.', en: 'You wrote « the residents asked three questions » with demander. One poses a question.' },
    { from: 'coach', fr: 'C’est l’anglais qui m’a eue. Je corrige : ils ont posé trois questions.', en: 'English caught me out. I will fix it: they posed three questions.', warn: 'Poser' },
    { from: 'user', fr: 'Et la mairesse n’a pas « pris une action ». Elle a promis de prendre des mesures.', en: 'And the mayor did not « take an action ». She promised to take measures.' },
    { from: 'coach', fr: 'Encore un calque. Et pour le conseiller qui pense aux livraisons de nuit, j’écris quoi.', en: 'Another calque. And for the councillor who suspects the night deliveries, what do I write.' },
    { from: 'user', fr: 'Il a émis une hypothèse. Et le malentendu sur les horaires a été dissipé.', en: 'He put forward a hypothesis. And the misunderstanding about the hours was cleared up.' },
    { from: 'coach', fr: fr(E(1290)), en: en(E(1290)), warn: 'Le nom choisit' },
  ],
  closing: { fr: 'Pars du nom : il sait avec quel verbe il va.', en: 'Start from the noun: it knows which verb it goes with.' },
  audio: REC('rec-c1-17-comite'), say: REFRAME, terms: ['collocation'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a7-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-voisins',
  title: 'Quatre noms et leurs verbes', frSub: 'Pars du nom, pas de l’anglais',
  hint: 'Quatre cartes. Deux d’entre elles corrigent un calque relevé par l’OQLF.',
  audio: REC('rec-c1-17-verbe-cartes'), say: REFRAME, terms: ['collocation'],
  cards: [
    { head: 'Une question', label: 'poser', fr: fr(POSER), sub: '[poh-ZAY ün kes-TYOHⁿ]',
      body: 'On pose, on formule ou on adresse une question à quelqu’un. L’OQLF déconseille « demander une question », traduit de to ask a question. EN: poser une question.' },
    { head: 'Une hypothèse', label: 'émettre', fr: fr(E(1279)), sub: rsOf(E(1279)),
      body: 'Émettre : exprimer, formuler une idée. On émet une hypothèse, on la vérifie, on la confirme ou on l’abandonne. EN: to put forward.' },
    { head: 'Un malentendu', label: 'dissiper', fr: fr(E(1282)), sub: rsOf(E(1282)),
      body: 'On dissipe un malentendu, ou on le fait cesser : on le fait disparaître. EN: to clear up.' },
    { head: 'Des mesures', label: 'prendre', fr: fr(E(1285)), sub: rsOf(E(1285)),
      body: 'Prendre des mesures, intervenir, passer à l’action. L’OQLF déconseille « prendre une action », calque de to take action. EN: to take steps.' },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-construire', layer: 'core', size: 'lg',
  title: 'Parler et agir avec le bon verbe', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Dire', [
      it(POSER, 'une question'),
      it(E(1279), 'une hypothèse'),
      it(E(1280), 'des revendications'),
      it(E(1286), 'poliment'),
    ], chk('Le comité présente ses demandes de façon précise. Il…',
      ['formule ses revendications', 'dissipe ses revendications', 'tient ses revendications'], 0,
      'Formuler, c’est exprimer avec précision : on formule des revendications. Dissiper va avec malentendu ; tenir avec promesse. EN: formulates.')),
    grp('Faire', [
      it(E(1283), 'une promesse'),
      it(E(1284), 'une enquête'),
      it(E(1292), 'des mesures'),
      it(E(1289), 'un projet, au fond de soi'),
    ], chk('« Elle nourrit depuis longtemps le projet de reprendre ses études. » Nourrir veut dire ici…',
      ['entretenir en soi', 'financer'], 0,
      'Nourrir un projet : l’entretenir, le garder en soi. EN: to cherish.')),
    ctl('Le calque', 'L’OQLF déconseille l’une de ces tournures. Laquelle ?',
      ['demander une question', 'poser une question', 'formuler une question'], 0,
      'Demander une question traduit to ask a question mot à mot. EN: demander une question.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['collocation'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a7-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre verbes égarés',
  errors: [
    { wrong: 'Puis-je vous demander une dernière question ?', right: fr(E(1286)),
      why: 'Normal : en anglais, on ask a question. L’OQLF déconseille ce calque : on pose une question. EN: poser.' },
    { wrong: 'La ville a pris une action pour réduire le bruit.', right: fr(E(1292)),
      why: 'Normal : to take action se traduit tout seul. L’OQLF le déconseille : prendre des mesures, intervenir. EN: pris des mesures.' },
    { wrong: 'Il a posé sa promesse, à la lettre.', right: fr(E(1291)),
      why: 'Normal : poser va si bien avec question. Mais une promesse se fait, se tient, ou on y manque. EN: tenu.' },
    { wrong: 'Le comité a tenu une autre hypothèse.', right: fr(E(1287)),
      why: 'Normal : tenir va avec promesse. Mais une hypothèse s’émet. EN: émis.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['collocation'],
};

const A7_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a7-dictee', layer: 'core',
  title: 'Écris les phrases que tu entends', frSub: 'Un nom, son verbe',
  itemIds: dicteeFor(7),
  audio: AUDIO, say: REFRAME, terms: ['collocation'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Lire : un compte rendu de comité', TEXTE_A7, [
  { q: 'Quel verbe accompagne « trois questions » ?', a: 'Poser : les résidents ont posé trois questions au conseil.' },
  { q: 'Et « revendications », « hypothèse » ?', a: 'Le comité a formulé ses revendications ; un conseiller a émis une hypothèse.' },
  { q: 'Qu’a promis la mairesse, et que surveillera le comité ?', a: 'De prendre des mesures avant l’hiver ; le comité veillera à ce qu’elle tienne sa promesse.' },
  { q: 'Qu’est-il arrivé au malentendu sur les horaires ?', a: 'Il a été dissipé en fin de séance.' },
], 'rec-c1-17-texte-a7', ['collocation']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La question', 'Une question, on la…',
    ['pose', 'demande', 'tient'], 0,
    'On pose, formule ou adresse une question. EN: pose.'),
  ctl('L’action', 'Pour dire to take action, l’OQLF propose…',
    ['prendre des mesures', 'prendre une action'], 0,
    'Prendre une action est un calque déconseillé. EN: prendre des mesures.'),
  ctl('La promesse', 'Une promesse, on la…',
    ['tient', 'émet', 'pose'], 0,
    'Tenir sa promesse, ou y manquer. EN: tient.'),
], ['collocation']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Les verbes qui vont avec',
    opener: {
      line: 'Un compte rendu où l’anglais glisse ses verbes : ici tu trouves le verbe que chaque nom attend. EN: Minutes where English slips in its verbs: here you find the verb each noun expects.',
      imageRef: 'lessons/synonymes-nuances/act07.jpg',
    },
    sections: [],
    milestone: 'Tu poses une question, émets une hypothèse, formules des revendications et prends des mesures, sans calque. EN: You use the verbs each noun expects, without calques.',
    estScreens: 36, restPoints: ['a7-construire', 'a7-dictee'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_CONSTRUIRE, A7_ERREURS, A7_DICTEE, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LES INTENSIFS ATTENDUS
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a8-ecoute', layer: 'core', hideLines: true,
  title: 'Le bulletin de dix-sept heures', frSub: 'Radio Cap-Blanc : la présentatrice et deux journalistes',
  lines: [
    ln(E(1305)), ln(E(1307)), ln(E(1302)), ln(E(1304)),
    ln(E(1303)), ln(E(1295)), ln(E(1297)), ln(E(1299)),
  ],
  questions: [
    { q: 'Premier titre : comment est la circulation ?', opts: ['chargée', 'fluide'], correct: 0, why: 'Dense : beaucoup de voitures, serrées. EN: heavy.' },
    { q: 'Deuxième : quel temps faisait-il au départ ?', opts: ['une forte pluie', 'un ciel clair'], correct: 0, why: 'Une pluie battante : une forte pluie. EN: driving rain.' },
    { q: 'Troisième : les passagers sont-ils légèrement blessés ?', opts: ['non, sérieusement', 'oui'], correct: 0, why: 'Grièvement : gravement, pour une blessure. EN: seriously.' },
    { q: 'Quatrième : la proposition a-t-elle été adoptée de justesse ?', opts: ['non, par une très large majorité', 'oui'], correct: 0, why: 'Une écrasante majorité : très large. EN: by a wide margin.' },
    { q: 'Cinquième : de quoi souffre la grand-mère ?', opts: ['d’une maladie sérieuse', 'd’une blessure'], correct: 0, why: 'Gravement malade : grièvement ne va qu’avec les blessures. EN: a serious illness.' },
  ],
  audio: REC('rec-c1-17-bulletin-ecoute'), say: REFRAME, terms: ['intensif'],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a8-table', layer: 'core', sheetId: 'sheet-voisins',
  title: 'Six intensifs attendus',
  cols: ['Nom ou adjectif', 'Intensif', 'Attention'],
  rows: [
    { cells: ['blessé', 'grièvement', 'seulement les blessures'], say: fr(E(1293)),
      detail: { title: 'Grièvement', body: 'Ne s’emploie qu’avec blesser et ses voisins (brûler, atteindre). Gravement blessé se dit aussi. EN: seriously injured.', say: fr(E(1302)) } },
    { cells: ['malade', 'gravement', 'jamais grièvement'], say: fr(E(1294)),
      detail: { title: 'Gravement', body: 'L’intensif général : gravement malade, gravement touché. EN: seriously ill.', say: fr(E(1303)) } },
    { cells: ['un refus', 'catégorique', 'net, sans appel'], say: fr(E(1295)),
      detail: { title: 'Un refus catégorique', body: 'Exprimé avec force et netteté. EN: a flat refusal.', say: fr(E(1295)) } },
    { cells: ['une majorité', 'écrasante', 'avant ou après'], say: fr(E(1296)),
      detail: { title: 'Une écrasante majorité', body: 'Qui accable par sa supériorité. EN: an overwhelming majority.', say: fr(E(1304)) } },
    { cells: ['un fumeur', 'gros', 'pas lourd'], say: fr(E(1297)),
      detail: { title: 'Un gros fumeur', body: 'Heavy smoker se dit gros fumeur. EN: a heavy smoker.', say: fr(E(1297)) } },
    { cells: ['la circulation', 'dense', 'beaucoup, serré'], say: fr(E(1298)),
      detail: { title: 'Une circulation dense', body: 'Beaucoup de voitures, serrées. EN: heavy traffic.', say: fr(E(1305)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['intensif'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-construire', layer: 'core', size: 'lg',
  title: 'Le nom et son intensif', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('La santé', [
      it(E(1293), 'une blessure'),
      it(E(1294), 'une maladie'),
      it(E(1302), 'un accident'),
      it(E(1303), 'depuis l’hiver'),
    ], chk('Une maladie sérieuse : on est…',
      ['gravement malade', 'grièvement malade'], 0,
      'Grièvement ne va qu’avec les blessures. EN: gravement.')),
    grp('Les votes, la météo, les habitudes', [
      it(E(1296), 'une majorité'),
      it(E(1301), 'la pluie'),
      it(E(1299), 'un célibataire'),
      it(E(1300), 'une habitude'),
    ], chk('Une habitude enracinée par le temps est…',
      ['invétérée', 'battante', 'écrasante'], 0,
      'Invétéré : enraciné par le temps. EN: ingrained.')),
    ctl('Très', '« Très malade » est-il faux ?',
      ['non : très est toujours correct', 'oui : il faut gravement'], 0,
      'Très est correct partout ; l’intensif attendu est seulement plus précis. EN: no, très is always correct.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['intensif'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a8-piege', layer: 'core', swipe: true,
  title: 'Six intensifs de travers', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'L’intensif que le nom attend',
    body: 'Chaque mot a ses intensifs habituels. Grièvement ne va qu’avec les blessures ; heavy ne se dit pas lourd pour un fumeur ou une majorité. Dans le doute, très reste correct. EN: each word has its expected intensifier; très is always safe.',
  },
  cards: [
    trap(E(1303), 'grièvement', 'Sa grand-mère est grièvement malade depuis l’hiver.', 'Grièvement ne va qu’avec blessé et ses voisins. EN: gravement.'),
    trap(E(1297), 'heavy', 'un lourd fumeur', 'Heavy smoker : un gros fumeur. EN: gros.'),
    trap(E(1304), 'la majorité', 'La proposition a été adoptée à une lourde majorité.', 'Une majorité qui accable : écrasante. EN: écrasante.'),
    trap(E(1295), 'le refus', 'un refus écrasant', 'Un refus net et sans appel : catégorique. EN: catégorique.'),
    trap(E(1307), 'la pluie', 'Nous sommes partis sous une pluie battue.', 'Une forte pluie : une pluie battante. EN: battante.'),
    trap(E(1299), 'le célibataire', 'un célibataire durci', 'Celui qui a pris ses habitudes : endurci. EN: endurci.'),
  ],
  drill: [
    { promptSay: 'Deux passagers ont été … blessés.', opts: ['grièvement', 'catégoriquement'], correct: 0 },
    { promptSay: 'Sa grand-mère est … malade.', opts: ['gravement', 'grièvement'], correct: 0 },
    { promptSay: 'Le syndicat a opposé un refus … .', opts: ['catégorique', 'battant'], correct: 0 },
    { promptSay: 'Adoptée à une … majorité.', opts: ['écrasante', 'battante'], correct: 0 },
    { promptSay: 'Il fume deux paquets par jour : c’est un … fumeur.', opts: ['gros', 'lourd'], correct: 0 },
    { promptSay: 'Ce matin, la circulation est … sur l’autoroute.', opts: ['dense', 'catégorique'], correct: 0 },
    { promptSay: 'À soixante ans, jamais marié : un célibataire … .', opts: ['endurci', 'écrasant'], correct: 0 },
    { promptSay: 'Nous sommes partis sous une pluie … .', opts: ['battante', 'endurcie'], correct: 0 },
  ],
  steps: STEPS('L’intensif que le nom attend', 'Six intensifs de travers'),
  audio: REC('rec-c1-17-piege-intensif'), say: REFRAME, terms: ['intensif'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a8-exemples', layer: 'core',
  title: 'Cinq intensifs dans une phrase', frSub: 'Le nom, puis son renfort',
  examples: [
    ex(E(1300), 'invétérée : enraciné par le temps'),
    ex(E(1301), 'battante : une forte pluie'),
    ex(E(1304), 'écrasante : une majorité très large'),
    ex(E(1302), 'grièvement : seulement les blessures'),
    ex(E(1306), 'la règle de l’acte'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['intensif'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Lire : un bulletin de radio', TEXTE_A8, [
  { q: 'Quels intensifs accompagnent la circulation et la pluie ?', a: 'Une circulation dense, une pluie battante.' },
  { q: 'Pourquoi le bulletin dit-il grièvement, et non gravement malades ?', a: 'Parce qu’il s’agit de blessures : grièvement ne va qu’avec blesser et ses voisins.' },
  { q: 'Le vote a-t-il été serré ?', a: 'Non : le projet a été adopté à une écrasante majorité, malgré le refus catégorique de deux conseillers.' },
  { q: 'Que veut dire « aux habitudes invétérées » ?', a: 'Des habitudes enracinées par le temps, donc difficiles à perdre.' },
], 'rec-c1-17-texte-a8', ['intensif']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La blessure', 'Grièvement va avec…',
    ['blessé', 'malade', 'fatigué'], 0,
    'Seulement blesser et ses voisins. EN: blessé.'),
  ctl('Heavy', 'Un heavy smoker, en français…',
    ['un gros fumeur', 'un lourd fumeur'], 0,
    'Gros fumeur. EN: gros.'),
  ctl('Le refus', 'Un refus net, sans appel, est…',
    ['catégorique', 'écrasant'], 0,
    'Un refus catégorique. EN: catégorique.'),
], ['intensif']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Les intensifs attendus',
    opener: {
      line: 'Un bulletin de radio où chaque nom a son renfort : ici tu trouves l’intensif que le français attend. EN: A radio bulletin where every noun has its booster: here you find the intensifier French expects.',
      imageRef: 'lessons/synonymes-nuances/act08.jpg',
    },
    sections: [],
    milestone: 'Tu dis grièvement blessé mais gravement malade, un refus catégorique, une écrasante majorité, un gros fumeur. EN: You use the expected intensifiers, and know très is always safe.',
    estScreens: 38, restPoints: ['a8-table', 'a8-piege'],
  },
  sections: [A8_ECOUTE, A8_TABLE, A8_CONSTRUIRE, A8_PIEGE, A8_EXEMPLES, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LE CONTRAIRE DÉPEND DU SENS
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a9-histoire', layer: 'core',
  title: 'Un avis à écrire', frSub: 'Doux, mais contre quoi',
  setting: 'Dernier soir à l’Auberge du Phare, en Gaspésie. Tu écris un avis sur le site de l’auberge ; Mathias, le guide, relit par-dessus ton épaule.',
  bubbles: [
    { from: 'narrator', fr: 'Dehors, le vent secoue les volets. Dedans, le poêle ronronne.', en: 'Outside, the wind rattles the shutters. Inside, the stove purrs.' },
    { from: 'user', fr: 'J’écris que l’hiver ici est dur, et que l’auberge est douce.', en: 'I am writing that winter here is hard, and the inn is gentle.' },
    { from: 'coach', fr: 'Pour un hiver, le mot juste serait rigoureux : c’est le contraire de doux quand on parle du climat.', en: 'For a winter, the right word would be harsh: it is the opposite of mild when you speak of climate.', warn: 'Le climat' },
    { from: 'user', fr: 'Et toi, tu as un caractère doux. Le contraire, ce serait quoi.', en: 'And you have a gentle nature. What would the opposite be.' },
    { from: 'coach', fr: 'Emporté : quelqu’un qui se met facilement en colère. Pas rigoureux, qui dirait plutôt sévère.', en: 'Quick-tempered: someone who gets angry easily. Not rigoureux, which would rather say strict.', warn: 'Le caractère' },
    { from: 'user', fr: 'Pour le café du matin, j’écris qu’il était trop léger.', en: 'For the morning coffee, I am writing that it was too weak.' },
    { from: 'coach', fr: 'Alors dis aussi ce que tu voulais : un café corsé. Pour un repas, le contraire de léger serait copieux.', en: 'Then also say what you wanted: a strong coffee. For a meal, the opposite of light would be hearty.', warn: 'Le café' },
    { from: 'coach', fr: fr(E(1319)), en: en(E(1319)), warn: 'Le sens d’abord' },
  ],
  closing: { fr: 'Doux et léger ont plusieurs contraires : le nom voisin choisit.', en: 'Doux and léger have several opposites: the neighbouring noun chooses.' },
  audio: REC('rec-c1-17-auberge'), say: REFRAME, terms: ['contraire'],
};

const A9_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a9-table', layer: 'core', sheetId: 'sheet-sens',
  title: 'Six contraires pour deux mots',
  cols: ['Avec', 'Doux ou léger', 'Contraire'],
  rows: [
    { cells: ['un hiver', 'doux', 'rigoureux'], say: fr(E(1308)),
      detail: { title: 'Le climat', body: 'Doux : ni froid ni dur. Contraire : rigoureux, dur à supporter. EN: mild, harsh.', say: fr(E(1316)) } },
    { cells: ['un caractère', 'doux', 'emporté'], say: fr(E(1310)),
      detail: { title: 'La personne', body: 'Doux : conciliant, gentil. Contraire : emporté, qui se met facilement en colère. EN: gentle, quick-tempered.', say: fr(E(1317)) } },
    { cells: ['une peau', 'douce', 'rêche'], say: fr(E(1311)),
      detail: { title: 'Le toucher', body: 'Doux au toucher. Contraire : rêche, rude, rugueux. EN: soft, rough.', say: fr(E(1311)) } },
    { cells: ['l’eau', 'douce', 'salée'], say: fr(E(1312)),
      detail: { title: 'L’eau', body: 'L’eau douce n’est pas salée ; son contraire est l’eau salée, l’eau de mer. EN: fresh water, salt water.', say: fr(E(1312)) } },
    { cells: ['un repas', 'léger', 'copieux'], say: fr(COPIEUX),
      detail: { title: 'Le repas', body: 'Léger : peu copieux, qui se digère bien. Contraire : copieux. EN: light, hearty.', say: fr(E(1318)) } },
    { cells: ['un café', 'léger', 'corsé, fort'], say: fr(E(1314)),
      detail: { title: 'Le café', body: 'Léger : peu concentré. Contraire : corsé ou fort. EN: weak, strong.', say: fr(E(1321)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['contraire'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-construire', layer: 'core', size: 'lg',
  title: 'Un mot, plusieurs contraires', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Les contraires de doux', [
      it(E(1309), 'le climat'),
      it(E(1310), 'le caractère'),
      it(E(1311), 'le toucher'),
      it(E(1312), 'l’eau'),
    ], chk('Le contraire de « doux » dans « un hiver doux » ?',
      ['rigoureux', 'emporté', 'rêche'], 0,
      'Pour le climat : rigoureux. Emporté va avec un caractère, rêche avec une peau. EN: rigoureux.')),
    grp('Les contraires de léger', [
      it(COPIEUX, 'le repas'),
      it(E(1314), 'le café'),
      it(E(1315), 'la faute'),
      it(E(1320), 'la blessure et la faute'),
    ], chk('Le contraire de « léger » dans « une faute légère » ?',
      ['grave', 'copieuse', 'corsée'], 0,
      'Pour une faute : grave. EN: grave.')),
    ctl('Le poids', 'Et pour une valise légère ?',
      ['lourde', 'grave', 'corsée'], 0,
      'Au sens premier, le poids : lourd. EN: heavy.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['contraire'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a9-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre contraires mal choisis',
  errors: [
    { wrong: 'Après un hiver aussi salé, ce printemps doux fait du bien.', right: fr(E(1316)),
      why: 'Normal : salé est bien un contraire de doux, pour l’eau. Pour le climat, c’est rigoureux. EN: rigoureux.' },
    { wrong: 'Il a un caractère doux, mais son frère est plutôt corsé.', right: fr(E(1317)),
      why: 'Normal : corsé s’oppose à léger, pour un café. Pour une personne vive, c’est emporté. EN: emporté.' },
    { wrong: 'À midi, un repas léger ; le soir, un repas plus grave.', right: fr(E(1318)),
      why: 'Normal : grave s’oppose à léger, pour une faute. Pour un repas, c’est copieux. EN: copieux.' },
    { wrong: 'Un café léger pour moi, un café grave pour elle.', right: fr(E(1321)),
      why: 'Normal : on cherche le contraire général. Pour un café, c’est corsé ou fort. EN: corsé.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['contraire'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a9-ecoute', layer: 'core', hideLines: true,
  title: 'Mathias présente l’auberge', frSub: 'Le guide parle aux nouveaux venus',
  lines: [
    ln(E(1316)), ln(E(1317)), ln(E(1318)), ln(E(1320)),
    ln(E(1321)), ln(E(1308)), ln(COPIEUX), ln(E(1319)),
  ],
  questions: [
    { q: 'Première phrase : comment a été l’hiver ?', opts: ['dur à supporter', 'très doux'], correct: 0, why: 'Rigoureux : dur à supporter. EN: harsh.' },
    { q: 'Deuxième phrase : comment est le frère ?', opts: ['il se met facilement en colère', 'il est très calme'], correct: 0, why: 'Emporté : qui se met facilement en colère. EN: quick-tempered.' },
    { q: 'Troisième phrase : quel repas est le plus abondant ?', opts: ['celui du soir', 'celui de midi'], correct: 0, why: 'Le soir, un repas plus copieux. EN: the evening one.' },
    { q: 'Quatrième phrase : qu’est-ce qui est sérieux ?', opts: ['la faute', 'la blessure'], correct: 0, why: 'La blessure est légère ; la faute est grave. EN: the fault.' },
    { q: 'Cinquième phrase : qui boit le café le plus fort ?', opts: ['elle', 'moi'], correct: 0, why: 'Un café corsé pour elle. EN: she does.' },
  ],
  audio: REC('rec-c1-17-contraire-ecoute'), say: REFRAME, terms: ['contraire'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Lire : un avis sur une auberge', TEXTE_A9, [
  { q: 'Quel contraire de doux l’autrice choisit-elle pour l’hiver ?', a: 'Rigoureux : l’hiver est dur, et le vent ne pardonne rien.' },
  { q: 'Que dit-elle du caractère de Mathias ?', a: 'Il a un caractère doux ; il ne s’est jamais emporté.' },
  { q: 'Comment oppose-t-elle les deux repas ?', a: 'Un repas léger le midi, un souper copieux le soir.' },
  { q: 'Quel est son seul regret, et quel mot choisit-elle pour le contraire ?', a: 'Le café trop léger ; elle l’aurait voulu corsé.' },
], 'rec-c1-17-texte-a9', ['contraire']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('L’eau', 'Le contraire de l’eau douce ?',
    ['l’eau salée', 'l’eau rigoureuse'], 0,
    'L’eau douce n’est pas salée. EN: salt water.'),
  ctl('La personne', 'Le contraire d’un caractère doux ?',
    ['un caractère emporté', 'un caractère rêche', 'un caractère salé'], 0,
    'Emporté : qui se met facilement en colère. EN: quick-tempered.'),
  ctl('La méthode', 'Avant de chercher un contraire, tu cherches…',
    ['le sens du mot dans la phrase', 'le contraire le plus courant'], 0,
    'Un mot a autant de contraires que de sens. EN: the meaning first.'),
], ['contraire']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Le contraire dépend du sens',
    opener: {
      line: 'Un hiver doux, un caractère doux, une eau douce : ici tu trouves pour chaque sens le contraire qui va. EN: A mild winter, a gentle nature, fresh water: here you find the opposite that fits each sense.',
      imageRef: 'lessons/synonymes-nuances/act09.jpg',
    },
    sections: [],
    milestone: 'Tu opposes doux à rigoureux, emporté, rêche ou salé, et léger à copieux, corsé, grave ou lourd, selon le nom. EN: You pick the opposite that matches the sense.',
    estScreens: 38, restPoints: ['a9-table', 'a9-erreurs'],
  },
  sections: [A9_HISTOIRE, A9_TABLE, A9_CONSTRUIRE, A9_ERREURS, A9_ECOUTE, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — UNE ÉTIQUETTE SELON LA RÉGION
 *  b1.25's Québec act recapped and made precise with Usito and the OQLF.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a10-histoire', layer: 'core',
  title: 'L’infolettre de la coop', frSub: 'Magasiner, blonde, char',
  setting: 'À la Coop des Trois-Lacs, en Estrie, Annie relit l’infolettre avec Vincent, un collègue arrivé de Lyon le mois dernier.',
  bubbles: [
    { from: 'narrator', fr: 'Vincent a souligné trois mots en rouge sur l’épreuve.', en: 'Vincent has underlined three words in red on the proof.' },
    { from: 'user', fr: 'J’ai souligné magasiner. Ce n’est pas un peu familier pour une infolettre.', en: 'I underlined magasiner. Is it not a bit informal for a newsletter.' },
    { from: 'coach', fr: 'Pas au Québec. Usito ne le marque pas familier, et l’OQLF le dit implanté. On l’écrit sans guillemets.', en: 'Not in Québec. Usito does not mark it informal, and the OQLF calls it established. We write it without quotation marks.', warn: 'Standard' },
    { from: 'user', fr: 'Et blonde, dans la phrase sur la fête des employés.', en: 'And blonde, in the sentence about the staff party.' },
    { from: 'coach', fr: 'Là, tu as raison : blonde est familier. Dans une infolettre, j’écris conjointe.', en: 'There you are right: blonde is informal. In a newsletter, I write conjointe.', warn: 'Familier' },
    { from: 'user', fr: 'Le troisième, c’est char, dans la petite annonce.', en: 'The third is char, in the small ad.' },
    { from: 'coach', fr: 'Usito le critique comme anglicisme non standard. J’écris voiture, et l’annonce reste claire pour tout le monde.', en: 'Usito criticises it as a non-standard anglicism. I write voiture, and the ad stays clear for everyone.', warn: 'Critiqué' },
    { from: 'coach', fr: fr(E(1330)), en: en(E(1330)), warn: 'Trois étiquettes' },
  ],
  closing: { fr: 'Trois mots québécois, trois étiquettes : vérifie avant de corriger.', en: 'Three Québec words, three labels: check before you correct.' },
  audio: REC('rec-c1-17-coop'), say: REFRAME, terms: ['registre'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a10-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-couleur',
  title: 'Quatre mots, quatre étiquettes', frSub: `Plus précis que ${REGISTRES_REF}`,
  hint: 'Quatre cartes. Les étiquettes viennent d’Usito et de l’OQLF.',
  audio: REC('rec-c1-17-region-cartes'), say: REFRAME, terms: ['registre'],
  cards: [
    { head: 'Standard au Québec', label: 'magasiner', fr: fr(E(1322)), sub: rsOf(E(1322)),
      body: 'Usito : québécois, sans marque familière. L’OQLF : implanté dans l’usage ; faire du shopping est déconseillé au Québec. EN: standard in Québec.' },
    { head: 'Familier', label: 'ma blonde', fr: fr(MA_BLONDE), sub: '[ma BLOHⁿD]',
      body: 'Usito : québécois et familier, pour une petite amie ou une conjointe. Entre amis, oui ; dans un formulaire, conjointe. EN: informal.' },
    { head: 'Critiqué', label: 'un char', fr: fr(UN_CHAR), sub: '[uhⁿ SHAR]',
      body: 'Usito : critiqué comme synonyme non standard de voiture, auto, automobile. À l’écrit officiel, écris voiture. EN: a criticised, non-standard word.' },
    { head: 'Né au Québec', label: 'courriel', fr: fr(E(1329)), sub: rsOf(E(1329)),
      body: 'Usito : d’origine québécoise, recommandé officiellement en France. Un mot régional peut devenir commun. EN: born in Québec, recommended in France.' },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-construire', layer: 'core', size: 'lg',
  title: 'Standard ici, familier là', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Standard au Québec', [
      it(MAGASINER, 'le verbe'),
      it(E(1322), 'magasiner un produit'),
      it(E(1323), 'le nom'),
      it(COURRIEL_ROW, `${Cap(REGISTRES_REF)} : courriel, fin de semaine`),
    ], chk('« Je magasine un nouvel ordinateur » dans une infolettre québécoise :',
      ['correct', 'trop familier'], 0,
      'Magasiner est implanté au Québec ; le sens « comparer des prix » aussi. EN: correct.')),
    grp('Familier ou critiqué', [
      it(MA_BLONDE, 'familier'),
      it(BLONDE_ROW, 'familier, à cause de blonde'),
      it(UN_CHAR, 'critiqué'),
      it(CHAR_ROW, 'critiqué'),
    ], chk('« Samedi, je vais magasiner avec ma blonde. » Quel mot rend la phrase familière ?',
      ['blonde', 'magasiner', 'samedi'], 0,
      'Magasiner est standard au Québec ; blonde est familier. EN: blonde.')),
    ctl('La France', 'En France, on dit souvent faire du shopping. Au Québec, l’OQLF recommande…',
      ['magasiner', 'shopper'], 0,
      'Faire du shopping est déconseillé au Québec. EN: magasiner.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a10-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre étiquettes mal collées',
  errors: [
    { wrong: 'Rapport annuel : « Trois chars de service ont été achetés. »', right: 'Rapport annuel : « Trois voitures de service ont été achetées. »',
      why: 'Normal : char se dit partout au Québec. Mais Usito le critique comme non standard : à l’écrit officiel, voiture. EN: voitures.' },
    { wrong: 'Formulaire de la coop : « Nom de votre blonde ».', right: 'Formulaire de la coop : « Nom de votre conjointe ».',
      why: 'Normal : blonde est le mot de tous les jours. Mais il est familier ; un formulaire demande conjointe. EN: conjointe.' },
    { wrong: 'Dans l’infolettre, j’écris « magasiner » entre guillemets, comme un mot familier.', right: 'Dans l’infolettre, j’écris magasiner sans guillemets : il est implanté au Québec.',
      why: 'Normal : on l’a entendu classé avec blonde et char. Mais Usito ne le marque pas familier, et l’OQLF le dit légitimé. EN: no quotation marks.' },
    { wrong: 'L’infolettre québécoise invite à faire du shopping au marché de Noël.', right: 'L’infolettre québécoise invite à magasiner au marché de Noël.',
      why: 'Normal : c’est l’usage de France. Au Québec, l’OQLF le déconseille. EN: magasiner.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a10-focus', layer: 'core', sheetId: 'sheet-couleur',
  title: 'Avant d’étiqueter un mot régional',
  points: [
    'Cherche où on le lit : un même mot peut être standard au Québec et rare en France. EN: ask where it is read.',
    'Vérifie la marque dans Usito ou à l’OQLF : familier, critiqué, ou rien. EN: check the label.',
    'Pas de marque, pas de guillemets : magasiner, courriel. EN: no label, no quotation marks.',
    'Familier n’est pas faux : blonde va très bien entre amis. EN: informal is not wrong.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Lire : un guide de rédaction', TEXTE_A10, [
  { q: 'Que dit le guide de magasiner et de magasinage ?', a: 'De les écrire sans guillemets : ce sont des mots implantés au Québec.' },
  { q: 'Que remplace-t-il char par ?', a: 'Voiture, auto ou automobile.' },
  { q: 'Où blonde et chum sont-ils permis ?', a: 'Dans les échanges entre amis ; dans un formulaire, on écrit conjointe et conjoint.' },
  { q: 'Que veut dire la dernière phrase du guide ?', a: 'Qu’un mot familier n’est pas une faute : il est seulement mal placé dans un texte officiel.' },
], 'rec-c1-17-texte-a10', ['registre']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Standard', 'Au Québec, magasiner est…',
    ['standard', 'familier', 'critiqué'], 0,
    'Usito : québécois, sans marque familière. EN: standard.'),
  ctl('Familier', 'Ma blonde, d’après Usito, est…',
    ['familier', 'standard'], 0,
    'Québécois et familier. EN: informal.'),
  ctl('Critiqué', 'Dans un rapport, à la place de char, tu écris…',
    ['voiture', 'char, entre guillemets'], 0,
    'Char est critiqué comme non standard. EN: voiture.'),
], ['registre']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Une étiquette selon la région',
    opener: {
      line: 'Trois mots soulignés en rouge par un collègue arrivé de Lyon : ici tu vérifies l’étiquette avant de corriger. EN: Three words underlined in red by a colleague from Lyon: here you check the label before you correct.',
      imageRef: 'lessons/synonymes-nuances/act10.jpg',
    },
    sections: [],
    milestone: 'Tu sais que magasiner est standard au Québec, blonde familier et char critiqué, et tu vérifies une étiquette dans Usito ou à l’OQLF. EN: You know the three labels and where to check them.',
    estScreens: 36, restPoints: ['a10-construire', 'a10-focus'],
  },
  sections: [A10_HISTOIRE, A10_CARTES, A10_CONSTRUIRE, A10_ERREURS, A10_FOCUS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — LE MOT PASSE-PARTOUT
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a11-lecture', layer: 'core', questionsInModal: true,
  title: 'Le rapport de la bibliothèque', frSub: 'Lis le premier jet, puis la version finale',
  text: LECTURE_RAPPORT,
  glossary: [
    { word: 'premier jet', en: 'first draft', note: 'La première version d’un texte, écrite d’un trait.' },
    { word: 'décisive', en: 'decisive', note: 'Qui décide de la suite : une année décisive change tout.' },
    { word: 'mairesse', en: 'mayor (woman)', note: 'Au Québec, le féminin courant de maire.' },
  ],
  questions: [
    { q: 'Global : qu’a fait la directrice au premier jet ?', a: 'Elle a remplacé presque chaque mot passe-partout par un mot qui dit en quoi la chose compte.' },
    { q: 'Détail : par quoi a-t-elle remplacé « une somme importante » et « un rôle important » ?', a: 'Une somme considérable ; un rôle majeur.' },
    { q: 'Détail : que devient « un problème important avec le chauffage » ?', a: 'Une panne grave du chauffage, qui a obligé à fermer dix jours.' },
    { q: 'Inférence : pourquoi a-t-elle gardé un seul « important » ?', a: 'Parce que, dans la dernière phrase, rien de plus précis n’était vrai.' },
    { q: 'Position : la version finale est-elle plus longue ? Est-elle meilleure ?', a: 'Presque aussi longue, mais plus précise : le lecteur sait en quoi chaque chose comptait.' },
  ],
  audio: REC('rec-c1-17-rapport'), say: REFRAME, terms: ['passepartout'],
};

const A11_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a11-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-sens',
  title: 'Dire en quoi ça compte', frSub: 'Important, faire, dire, remplacés',
  hint: 'Quatre cartes. Chaque fois, demande-toi ce que le mot passe-partout voulait dire.',
  audio: REC('rec-c1-17-passe-cartes'), say: REFRAME, terms: ['passepartout'],
  cards: [
    { head: 'Il pèse plus que les autres', label: 'majeur', fr: fr(E(1333)), sub: rsOf(E(1333)),
      body: 'Majeur : plus important que les autres. Pour le premier rôle d’un projet. EN: major.' },
    { head: 'Il est très grand', label: 'considérable', fr: fr(E(1334)), sub: rsOf(E(1334)),
      body: 'Considérable : très grand par le nombre, l’intensité ou la valeur. Pour une somme, un effort, un retard. EN: considerable.' },
    { head: 'Il fait du tort', label: 'grave', fr: fr(E(1335)), sub: rsOf(E(1335)),
      body: 'Grave : qui a des conséquences sérieuses. Pour une erreur, une panne, une faute. EN: serious.' },
    { head: 'Le verbe précis', label: 'prononcer', fr: fr(E(1337)), sub: rsOf(E(1337)),
      body: 'On prononce un discours, on exprime un avis, on occupe un poste. Faire, dire, avoir restent corrects ; à l’écrit surtout, le verbe précis dit plus. EN: the precise verb.' },
  ],
};

const A11_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-construire', layer: 'core', size: 'lg',
  title: 'Le mot qui dit en quoi', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Important, dit autrement', [
      it(E(1333), 'le premier rôle'),
      it(E(1334), 'très grand'),
      it(E(1335), 'des conséquences'),
      it(E(1336), 'qui pèse sur les autres'),
    ], chk('« Une panne importante du chauffage a fermé la bibliothèque dix jours. » Le mot plus précis ?',
      ['grave', 'influente', 'catégorique'], 0,
      'Une panne qui fait du tort : grave. Influent se dit d’une personne. EN: grave.')),
    grp('Faire, dire, avoir, dit autrement', [
      it(E(1337), 'un discours'),
      it(E(1338), 'un avis'),
      it(OCCUPER, 'un poste'),
      it(E(1342), 'depuis deux ans'),
    ], chk('À l’écrit, « elle a eu le poste de comptable pendant trente ans » devient…',
      ['elle a occupé le poste', 'elle a prononcé le poste'], 0,
      'Occuper un poste : le tenir. EN: occupied.')),
    ctl('La mesure', `${Cap(REPRISE_REF)} : « ${fr(C105_ROW)} » Faut-il donc remplacer chaque « important » ?`,
      ['non : seulement quand un mot plus précis est vrai', 'oui, toujours'], 0,
      'Le synonyme doit dire plus, pas seulement varier. EN: only when a more precise word is true.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['passepartout'],
};

const A11_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a11-piege', layer: 'core', swipe: true,
  title: 'Six remplacements de travers', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le mot précis doit être vrai',
    body: 'Remplacer important ou faire n’est un progrès que si le nouveau mot va avec son nom et dit ce qui est vrai. Grave annonce un dommage ; considérable, une grande taille ; majeur, un premier rang. EN: the precise word must fit and be true.',
  },
  cards: [
    trap(E(1340), 'un rôle', 'Ce bénévole a joué un rôle grave dans le projet.', 'Grave annonce un dommage. Le premier rôle : majeur. EN: majeur.'),
    trap(E(1341), 'une somme', 'La rénovation a coûté une somme grave.', 'Une très grande somme : considérable. EN: considérable.'),
    trap(E(1342), 'un poste', 'Elle exprime un poste de direction depuis deux ans.', 'Un poste s’occupe. EN: occupe.'),
    trap(E(1345), 'un discours', 'Le maire a exprimé un discours très bref.', 'Un discours se prononce. EN: prononcé.'),
    trap(E(1338), 'un avis', 'occuper un avis', 'Un avis s’exprime. EN: exprimer.'),
    trap(E(1344), 'la mesure', 'Même si rien de plus précis n’est vrai, change le mot simple.', 'Le mot précis doit être vrai ; sinon, garde le mot simple. EN: keep it.'),
  ],
  drill: [
    { promptSay: 'Ce bénévole a joué un rôle … dans le projet.', opts: ['majeur', 'grave'], correct: 0 },
    { promptSay: 'La rénovation a coûté une somme … .', opts: ['considérable', 'influente'], correct: 0 },
    { promptSay: 'Une erreur … : elle a eu des conséquences sérieuses.', opts: ['grave', 'influente'], correct: 0 },
    { promptSay: 'Une personne … : elle pèse sur les décisions.', opts: ['influente', 'grave'], correct: 0 },
    { promptSay: 'Le maire a … un discours.', opts: ['prononcé', 'exprimé'], correct: 0 },
    { promptSay: 'Elle a … son avis en réunion.', opts: ['exprimé', 'occupé'], correct: 0 },
    { promptSay: 'Elle … un poste de direction.', opts: ['occupe', 'prononce'], correct: 0 },
    { promptSay: 'Si rien de plus précis n’est vrai, garde … .', opts: ['le mot simple', 'un mot rare'], correct: 0 },
  ],
  steps: STEPS('Le mot précis doit être vrai', 'Six remplacements de travers'),
  audio: REC('rec-c1-17-piege-passe'), say: REFRAME, terms: ['passepartout'],
};

const A11_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a11-exemples', layer: 'core',
  title: 'Cinq phrases plus précises', frSub: 'Et une mise en garde',
  examples: [
    ex(E(1340), 'majeur : le premier rôle'),
    ex(E(1341), 'considérable : très grande'),
    ex(E(1342), 'occuper : tenir un poste'),
    ex(E(1345), 'prononcer : dire à voix haute'),
    ex(C105_ROW, `${Cap(REPRISE_REF)} : varier pour varier égare`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['passepartout'],
};

const A11_TEXTE = dansUnTexte('a11-texte', 'Lire : un courriel relu', TEXTE_A11, [
  { q: 'Par quoi Benoît remplace-t-il « un rôle important » ?', a: 'Un rôle majeur.' },
  { q: 'Et « une erreur importante » ?', a: 'Une erreur grave : elle aurait eu des conséquences sérieuses.' },
  { q: 'Quel verbe remplace « elle a eu le poste » ?', a: 'Elle a occupé le poste.' },
  { q: 'Pourquoi « je prononcerai quelques mots » plutôt que « je ferai un discours » ?', a: 'Le verbe est plus précis, et « quelques mots » annonce un discours bref, en son honneur.' },
], 'rec-c1-17-texte-a11', ['passepartout']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('La somme', 'Une très grande somme, c’est une somme…',
    ['considérable', 'grave', 'influente'], 0,
    'Considérable : très grand par la valeur. EN: considerable.'),
  ctl('Le discours', 'Un discours, on le…',
    ['prononce', 'exprime', 'occupe'], 0,
    'Prononcer un discours. EN: deliver.'),
  ctl('La mesure', 'Rien de plus précis n’est vrai. Tu…',
    ['gardes important', 'cherches un mot rare'], 0,
    'Le mot simple reste juste. EN: keep important.'),
], ['passepartout']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Le mot passe-partout',
    opener: {
      line: 'Un rapport où tout est important : ici tu remplaces le mot passe-partout par celui qui dit en quoi. EN: A report where everything is important: here you replace the all-purpose word with one that says how.',
      imageRef: 'lessons/synonymes-nuances/act11.jpg',
    },
    sections: [],
    milestone: 'Tu remplaces important, faire, dire et avoir par le mot qui dit en quoi, et tu gardes le mot simple quand rien de plus précis n’est vrai. EN: You replace all-purpose words with precise ones, and keep the simple word when nothing more precise is true.',
    estScreens: 38, restPoints: ['a11-cartes', 'a11-piege'],
  },
  sections: [A11_LECTURE, A11_CARTES, A11_CONSTRUIRE, A11_PIEGE, A11_EXEMPLES, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TON PORTRAIT
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a12-lecture', layer: 'core', questionsInModal: true,
  title: 'Le portrait que tu vas imiter', frSub: 'Normand Bélair prend sa retraite',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'côtoyé', en: 'worked alongside', note: 'Côtoyer quelqu’un : le fréquenter de près, tous les jours.' },
    { word: 'épreuve', en: 'proof', note: 'En imprimerie : la page tirée pour être relue avant le tirage.' },
    { word: 'ruineux', en: 'ruinously expensive', note: 'Qui coûte si cher qu’il pourrait ruiner.' },
  ],
  questions: [
    { q: 'Global : comment le portrait est-il construit ?', a: 'Une ouverture qui promet un portrait exact, trois traits (exigeant, économe, discret), chacun avec ses faits, puis un adieu.' },
    { q: 'Détail : quel fait montre que Normand est exigeant ?', a: 'Il relisait chaque épreuve deux fois et a fait recommencer un tirage pour une couleur un peu terne.' },
    { q: 'Détail : que fait l’auteur du mot « entêtement » ?', a: 'Il le cite comme le mot de certains, puis montre par un fait que ce trait a évité un achat ruineux.' },
    { q: 'Inférence : pourquoi écrire « économe » et pas « avare » ?', a: 'Parce que le portrait loue : économe approuve la même prudence que avare blâmerait.' },
    { q: 'Position : le portrait cache-t-il les défauts de Normand ?', a: 'Non : il dit que certains l’ont trouvé dur, mais il nomme ce trait avec égards et le relie à ce qu’il a apporté.' },
  ],
  audio: REC('rec-c1-17-modele'), say: REFRAME, terms: ['connotation', 'nuancier'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-portrait',
  title: 'Cinq étapes avant d’écrire', frSub: 'Des notes brutes au portrait juste',
  steps: [
    'Trie les notes : garde les faits, repère les mots qui jugent (têtue, radine, exaspérante, indiscrètes). EN: separate facts from judging words.',
    'Pour chaque trait, choisis la couleur : le mot qui loue le même fait, s’il est vrai (persévérante, économe, exigeante). EN: choose the approving word that is still true.',
    'Règle la force : ni exaspérante ni parfaite ; un fait précis par trait. EN: set the strength with one fact per trait.',
    'Soigne les voisins : les verbes et les intensifs attendus, pas de mot passe-partout. EN: use the expected collocations.',
    'Ouvre et ferme avec égards : l’annonce du départ, puis un adieu chaleureux. EN: open and close with warmth.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['nuancier'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', sheetId: 'sheet-portrait',
  title: 'Quatre phrases qu’un portrait juste contient',
  cases: [
    uc('Tu nommes un trait par un fait', E(1348)),
    uc('Tu loues sans mentir', E(1347)),
    uc('Tu reconnais un défaut avec égards', E(1350)),
    uc('Tu fermes chaleureusement', E(1352)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['connotation'],
};

const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core',
  title: 'Benoît veut relire avant', frSub: 'Six tours, à voix haute',
  setting: 'Benoît Lachance, le directeur, t’appelle : il a vu les notes de la salle de pause sur Josée et s’inquiète du portrait. Rassure-le en lui disant comment tu choisis tes mots.',
  turns: [
    {
      ai: 'J’ai lu les notes au tableau. « Têtue comme pas une », « radine »… Tu ne vas pas écrire ça ?', en: 'I read the notes on the board. « Stubborn as they come », « stingy »… You are not going to write that?',
      user: 'Non. Je garde les faits et je change les mots qui jugent : elle est persévérante, et économe.',
      userEn: 'No. I keep the facts and change the judging words: she is persevering, and thrifty. (Connotation chosen on purpose.)',
      alts: [
        { fr: 'Non : les faits restent, mais je choisis les mots qui louent ce qui est vrai.', en: 'No: the facts stay, but I choose the words that praise what is true. (The method.)' },
        { fr: 'Non. Têtue et radine blâment ; j’écris persévérante et économe.', en: 'No. Stubborn and stingy blame; I write persevering and thrifty. (The pairs named.)' },
      ],
    },
    {
      ai: 'Mais ce n’est pas mentir, ça ?', en: 'But is that not lying?',
      user: 'Non, parce que chaque mot reste vrai : je donne un fait pour chacun.',
      userEn: 'No, because each word stays true: I give a fact for each one. (An approving word backed by a fact.)',
      alts: [
        { fr: 'Pas si le fait reste reconnaissable : elle a bien refusé trois fois le nouveau café.', en: 'Not if the fact stays recognisable: she did refuse the new coffee three times. (The fact kept.)' },
        { fr: 'J’adoucis les mots, pas les faits.', en: 'I soften the words, not the facts. (The euphemism rule.)' },
      ],
    },
    {
      ai: 'Et « exaspérante en réunion » ?', en: 'And « exasperating in meetings »?',
      user: 'J’écrirai qu’elle est exigeante : elle posait des questions précises à qui n’avait pas lu le dossier.',
      userEn: 'I will write that she is demanding: she asked precise questions of anyone who had not read the file. (A lower notch, with its fact.)',
      alts: [
        { fr: 'Exaspérante, c’est trop fort pour un portrait : exigeante dit le même fait au bon cran.', en: 'Exasperating is too strong for a portrait: demanding says the same fact at the right notch. (Intensity.)' },
        { fr: 'Je dirai qu’arriver sans avoir lu le dossier, c’était s’exposer à ses questions.', en: 'I will say that turning up without reading the file meant facing her questions. (The fact, with humour.)' },
      ],
    },
    {
      ai: 'Les fournisseurs se plaignaient de ses questions sur les prix.', en: 'The suppliers complained about her questions on prices.',
      user: 'Je parlerai de questions directes sur leurs prix ; indiscrètes serait un reproche.',
      userEn: 'I will speak of direct questions about their prices; prying would be a reproach. (Connotation.)',
      alts: [
        { fr: 'Elle défendait nos prix : je le dirai comme ça.', en: 'She was defending our prices: I will put it that way. (The fact behind the complaint.)' },
        { fr: 'Ses questions étaient franches, et souvent utiles : voilà ce que j’écrirai.', en: 'Her questions were frank, and often useful: that is what I will write. (An approving pair.)' },
      ],
    },
    {
      ai: 'N’oublie pas l’erreur de facturation de 2021. Sans elle, ça nous coûtait cher.', en: 'Do not forget the 2021 billing error. Without her, it would have cost us dearly.',
      user: 'J’écrirai qu’elle nous a évité une erreur grave, qui aurait coûté une somme considérable.',
      userEn: 'I will write that she saved us from a serious mistake that would have cost a considerable sum. (Expected collocations.)',
      alts: [
        { fr: 'Elle a joué un rôle majeur ce jour-là : je le mettrai au centre du portrait.', en: 'She played a major role that day: I will put it at the centre of the portrait. (The precise word.)' },
        { fr: 'Je dirai que sa rigueur nous a épargné une perte considérable.', en: 'I will say that her rigour spared us a considerable loss. (Another collocation.)' },
      ],
    },
    {
      ai: 'Et pour finir ?', en: 'And to finish?',
      user: 'Les chocolats du tiroir du bas, et un adieu : elle nous manquera, ses questions aussi.',
      userEn: 'The chocolates in the bottom drawer, and a farewell: we will miss her, and her questions too. (A warm close.)',
      alts: [
        { fr: 'Un souhait : une retraite à la hauteur de son énergie.', en: 'A wish: a retirement worthy of her energy. (The closing wish.)' },
        { fr: 'Un détail tendre, puis un merci pour ses trente et un ans.', en: 'A tender detail, then thanks for her thirty-one years. (Warmth.)' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['connotation', 'intensite'],
};

const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission',
  title: 'Le portrait de Josée', frSub: 'Mission écrite',
  brief: `Josée Ouellette, comptable à l’Imprimerie des Deux-Ponts depuis trente et un ans, part à la retraite vendredi. Benoît te demande son portrait pour le bulletin interne, Le Petit Deux-Ponts. Voici les notes que ses collègues ont laissées : ${NOTES_JOSEE}`,
  briefEn: 'Josée Ouellette, an accountant at the Imprimerie des Deux-Ponts for thirty-one years, retires on Friday. Benoît asks you for her portrait for the staff newsletter. Her colleagues’ notes say she is « stubborn as they come », « stingy with the budget » (she refused the new coffee three times), « exasperating in meetings » if you have not read the file, that she asks suppliers « prying » questions about their prices, that she spotted the 2021 billing error that would have cost a fortune, knows every client by first name, always helps newcomers without doing their work for them, and keeps a box of chocolates in the bottom drawer for hard days.',
  produce: 'Écris un portrait de 250 à 350 mots. Garde les faits des notes, n’en invente aucun, et choisis pour chaque trait le mot juste : sa force (ni trop ni trop peu), sa couleur (un éloge qui reste vrai, sans cacher les défauts) et ses voisins (les verbes et les intensifs attendus). Termine par un adieu.',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 380 },
  rubric: {
    criteria: [
      {
        key: 'tache', label: 'Réalisation de la tâche', maxPoints: 3,
        descriptors: [
          '3 : Au moins quatre traits de Josée, chacun appuyé sur un fait des notes ; aucun fait inventé ; une ouverture et un adieu. Entre 250 et 350 mots.',
          '2 : Trois traits seulement, ou un fait inventé, ou l’adieu manque, ou la longueur sort un peu des limites.',
          '1 : Une liste d’éloges sans faits, ou un recopiage des notes, ou un texte beaucoup trop court.',
        ],
      },
      {
        key: 'nuance', label: 'Justesse des nuances', maxPoints: 3,
        descriptors: [
          '3 : Chaque trait a la bonne couleur et le bon cran : un éloge vrai (persévérante, économe, exigeante, directe), aucun mot péjoratif repris tel quel, aucun euphémisme qui cache un fait.',
          '2 : La plupart des traits sont justes, mais un mot reste péjoratif (radine, têtue) ou un mot est trop fort ou trop faible.',
          '1 : Les mots des notes sont recopiés, ou tout est flatterie sans rapport avec les faits.',
        ],
      },
      {
        key: 'precision', label: 'Précision du vocabulaire', maxPoints: 2,
        descriptors: [
          '2 : Les collocations et les intensifs attendus (poser une question, une erreur grave, une somme considérable, un rôle majeur) ; aucun mot passe-partout inutile.',
          '1 : Plusieurs « important », « faire », « chose », ou une collocation de travers (demander une question).',
        ],
      },
      {
        key: 'correction', label: 'Correction', maxPoints: 2,
        descriptors: [
          '2 : Les constructions sont justes : accords, temps du récit, prépositions, ponctuation.',
          '1 : Des erreurs gênent parfois la lecture.',
        ],
      },
      {
        key: 'registre', label: 'Registre et ton', maxPoints: 2,
        descriptors: [
          '2 : Un registre courant soigné, chaleureux, avec un peu d’humour bienveillant ; le portrait respecte Josée et ses lecteurs.',
          '1 : Le ton est moqueur, administratif ou trop familier (radine, têtue comme pas une).',
        ],
      },
    ],
  },
  scaffold: [
    'Après trente et un ans',
    'Ceux qui ont travaillé avec elle savent que',
    'Josée est',
    'Certains l’ont trouvée',
    'C’est pourtant cette',
    'On lui doit',
    'Elle nous manquera,',
    'Bonne retraite, Josée :',
  ],
  modelAnswer: 'Le Petit Deux-Ponts. Portrait : Josée Ouellette prend sa retraite.\n\nAprès trente et un ans à la comptabilité, Josée quitte l’imprimerie vendredi. Il y a des collègues qu’on remarque à peine ; Josée n’en a jamais fait partie. Ceux qui ont travaillé avec elle savent qu’un portrait trop flatteur l’agacerait ; celui-ci sera donc exact.\n\nJosée est persévérante. Une fois convaincue, elle ne changeait d’avis que devant de très bons arguments, et nous n’en avions pas toujours. Elle ne s’entêtait pas par orgueil : elle voulait des chiffres justes, et elle avait souvent raison. C’est pourtant cette ténacité qui lui a fait repérer, en 2021, une erreur de facturation qui nous aurait coûté une somme considérable.\n\nJosée est économe. Elle défendait chaque dollar du budget comme s’il était le sien, et le nouveau café a dû attendre son tour plus d’une fois. Nous en avons souri, parfois en grinçant des dents ; nous lui devons pourtant des comptes toujours justes. Ce n’était pas de l’avarice : c’était le respect de l’argent de tous.\n\nJosée est exigeante. Se présenter en réunion sans avoir lu le dossier, c’était s’exposer à une question précise, puis à une autre. Certains l’ont trouvée dure ; beaucoup ont appris avec elle à lire un dossier avant d’en parler. Les fournisseurs connaissaient aussi ses questions directes sur leurs prix : elles n’étaient pas toujours agréables à entendre, mais elles étaient rarement inutiles.\n\nJosée est attentive aux autres. Elle appelait les clients par leur prénom, et les nouveaux trouvaient toujours chez elle une explication, jamais quelqu’un pour faire le travail à leur place. Les jours difficiles, enfin, il suffisait d’ouvrir le bon tiroir : elle y gardait des chocolats pour toute l’équipe.\n\nElle nous manquera, ses questions aussi. Bonne retraite, Josée : nous te souhaitons des journées à la hauteur de ton énergie.\n\nMélanie, pour l’équipe de l’imprimerie\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : quatre traits, chacun appuyé sur un fait des notes, aucun fait ajouté (pas de montant pour l’erreur de 2021).\n2. Nuances : têtue devient persévérante, radine devient économe, exaspérante devient exigeante, indiscrètes devient directes ; les défauts restent visibles (« nous n’en avions pas toujours », « en grinçant des dents »).\n3. Précision : une somme considérable, une question précise, des comptes justes ; aucun « important ».\n4. Registre : chaleureux, un peu d’humour, aucune moquerie.',
  modelAnswerEn: 'Le Petit Deux-Ponts. Portrait: Josée Ouellette retires. After thirty-one years in accounts, Josée leaves the print works on Friday. Some colleagues are barely noticed; Josée was never one of them. Those who worked with her know an overly flattering portrait would annoy her; this one will therefore be exact. Josée is persevering. Once convinced, she only changed her mind in the face of very good arguments, and we did not always have them. She was not stubborn out of pride: she wanted the figures right, and she was often right. Yet it was that tenacity that made her spot, in 2021, a billing error that would have cost us a considerable sum. Josée is thrifty. She defended every dollar of the budget as if it were her own, and the new coffee had to wait its turn more than once. We smiled about it, sometimes through gritted teeth; we owe her accounts that were always right. It was not miserliness: it was respect for everyone’s money. Josée is demanding. Turning up to a meeting without reading the file meant facing one precise question, then another. Some found her hard; many learned from her to read a file before talking about it. Suppliers also knew her direct questions about their prices: they were not always pleasant to hear, but they were rarely useless. Josée is attentive to others. She called clients by their first names, and newcomers always found an explanation with her, never someone to do the work for them. And on hard days, you only had to open the right drawer: she kept chocolates there for the whole team. We will miss her, and her questions too. Happy retirement, Josée: we wish you days worthy of your energy. Mélanie, for the print works team. The marker’s notes (not counted): four traits, each backed by a fact from the notes, no fact added.',
  watchFor: [
    { pattern: 'Copies a judging word of the notes as is (têtue, radine, exaspérante, indiscrète) in a portrait meant as praise.', criterion: 'nuance', feedback: 'Garde le fait, change le mot qui juge : persévérante, économe, exigeante, directe.', ref: 'a4-cartes' },
    { pattern: 'Replaces a fact by an empty euphemism (« une personnalité particulière », « un caractère affirmé ») so that the reader no longer sees the trait.', criterion: 'nuance', feedback: 'Adoucis les mots, jamais les faits : dis ce qu’elle faisait, avec égards.', ref: 'a6-table' },
    { pattern: 'Pitches a trait at the wrong strength (« exaspérante » kept, or « un peu attentive » for someone the notes praise).', criterion: 'nuance', feedback: 'Choisis le cran que les faits justifient : exigeante, ni exaspérante ni seulement attentive.', ref: 'a2-cartes' },
    { pattern: 'Invents a fact or a figure the notes do not give (a sum for the 2021 error, a number of clients).', criterion: 'tache', feedback: 'Reste dans les faits des notes : « une somme considérable », pas un montant inventé.', ref: 'a12-plan' },
    { pattern: 'Lists praise without one fact per trait.', criterion: 'tache', feedback: 'Pour chaque trait, un fait : le café refusé, l’erreur de 2021, les questions en réunion.', ref: 'a12-usages' },
    { pattern: 'Uses « demander une question » or « prendre une action ».', criterion: 'precision', feedback: 'On pose une question ; on prend des mesures.', ref: 'a7-erreurs' },
    { pattern: 'Writes « grièvement » with a non-injury word, or a calqued intensifier.', criterion: 'precision', feedback: 'Grièvement ne va qu’avec les blessures ; pour le reste, gravement ou très.', ref: 'a8-table' },
    { pattern: 'Piles up « important », « faire », « chose » where a precise word is true.', criterion: 'precision', feedback: 'Dis en quoi : une erreur grave, une somme considérable, un rôle majeur.', ref: 'a11-cartes' },
    { pattern: 'Uses a judging suffix by accident (« paperasse » for her accounts, a word in -asse or -âtre in praise).', criterion: 'nuance', feedback: 'Le suffixe juge : dans un éloge, écris les comptes, les dossiers.', ref: 'a5-cartes' },
    { pattern: 'Mocking, administrative or too familiar tone (radine, têtue comme pas une, formulas of a report).', criterion: 'registre', feedback: 'Un registre courant, chaleureux : un peu d’humour, jamais de moquerie.', ref: 'a12-lecture' },
    { pattern: 'No opening or no farewell.', criterion: 'tache', feedback: 'Annonce le départ, puis termine par un adieu : elle nous manquera.', ref: 'a12-plan' },
  ],
  graderNotes: [
    'Count the words of the body only: the title line, the signature and the farewell formula do not count. 250 to 350 with 10% tolerance (225 to 385) before criterion « tache » loses a point. responseSpec allows 380.',
    'The notes carry four judging words (têtue, radine, exaspérante, indiscrètes) and five facts (the 2021 billing error, every client known by first name, help for newcomers without doing their work, the coffee refused three times, the chocolates). A strong portrait keeps the facts and re-colours the words; it may keep a mild trace of a defect (« certains l’ont trouvée dure ») and should not erase it entirely.',
    'Accept any approving word that stays TRUE to the fact: persévérante, tenace, déterminée, constante for têtue; économe, prudente, rigoureuse for radine; exigeante, rigoureuse for exaspérante; directe, franche for indiscrètes. Do not require the lesson’s exact words.',
    'Do NOT penalise correct French the lesson does not prefer: « très », « faire une erreur », « un rôle important » are correct; only mark them under « precision » when they pile up instead of a precise word that would be true.',
    'A figure for the 2021 error, a number of years other than thirty-one, or any fact absent from the notes costs a point in « tache ».',
    'Québec usage is welcome (courriel, magasiner, souper); familiar words (radine, têtue comme pas une) are a register issue, not a correctness error.',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 25 du B1 »), never by id.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['connotation', 'nuancier'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core',
  title: 'Dis les mots justes à voix haute', frSub: 'La force, la couleur, les voisins',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['nuancier'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-portrait',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la force', v: 'le cran que les faits justifient', say: fr(E(1222)),
      detail: { title: 'L’intensité', body: 'Agacer, irriter, exaspérer, excéder ; grimper, flamber ; fléchir, s’effondrer, stagner. EN: pick the notch.', say: fr(E(1235)) } },
    { k: 'la couleur', v: 'louer ou blâmer le même fait', say: fr(E(1249)),
      detail: { title: 'La connotation', body: 'Économe ou avare, persévérant ou obstiné, prudent ou timoré. Les suffixes -âtre, -asse, -aud, -ailleur jugent souvent. EN: approving or pejorative.', say: fr(E(1263)) } },
    { k: 'l’euphémisme', v: 'adoucir sans cacher', say: fr(E(1269)),
      detail: { title: 'Respecter, adoucir, masquer', body: 'S’éteindre ménage ; ajuster les effectifs masque. Le lecteur doit comprendre le fait. EN: soften the words, never the facts.', say: fr(E(1276)) } },
    { k: 'les voisins', v: 'le verbe et l’intensif attendus', say: fr(E(1290)),
      detail: { title: 'Les collocations', body: 'Poser une question, émettre une hypothèse, prendre des mesures ; grièvement blessé, gravement malade. EN: the expected pairings.', say: fr(E(1306)) } },
    { k: 'le contraire', v: 'il dépend du sens', say: fr(E(1319)),
      detail: { title: 'Les contraires', body: 'Doux : rigoureux, emporté, rêche, salé. Léger : copieux, corsé, grave, lourd. EN: one opposite per sense.', say: fr(E(1316)) } },
    { k: 'la région', v: 'vérifie l’étiquette', say: fr(E(1330)),
      detail: { title: 'Les étiquettes', body: 'Au Québec, magasiner est standard, blonde familier, char critiqué. Courriel est né au Québec. EN: check Usito and the OQLF.', say: fr(E(1331)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['nuancier'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu pèses un synonyme avant de l’employer. Sa force : agacé, irrité, exaspéré, excédé ; une hausse qui grimpe ou qui flambe, une baisse qui fléchit ou qui s’effondre. Sa couleur : économe ou avare, persévérant ou obstiné, un suffixe qui décrit ou qui juge, un euphémisme qui ménage ou qui masque. Ses voisins : le verbe et l’intensif que le nom attend, et le contraire qui va avec le sens. Tu vérifies aussi l’étiquette d’un mot régional. Le piège qui reste, c’est le dictionnaire des synonymes ouvert trop vite : un mot voisin choisi pour varier change la force ou la couleur de ta phrase. Avant d’envoyer un texte, relis chaque mot remplacé dans sa phrase entière. EN: Before sending a text, reread every replaced word in its whole sentence.',
  stats: [
    { k: 'La force', v: 'agacer, flamber, s’effondrer' },
    { k: 'La couleur', v: 'économe, timoré, -âtre' },
    { k: 'Les voisins', v: 'poser, grièvement, rigoureux' },
    { k: 'La région', v: 'magasiner, blonde, char' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 2 to 11, a round that
 *  recycles b1.25, b1.35, b2.29, b2.32, b2.33, c1.05, c1.06 and c1.24 (named
 *  in each question), and a « comme à l’examen » round. `fold()` strips
 *  accents, commas, apostrophes, hyphens and SPACES, so every typed answer
 *  turns on a word, and every equally correct word is listed in `accept`.
 *  Closed options were checked for a second defensible answer: the other
 *  synonyms that would also fit are never offered as distractors. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: ES_Q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const MOT = 'Écris le mot qui manque.';

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'L’examen',
  passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r2-colere', label: 'De l’agacement à l’exaspération', targets: ['cran-colere'],
      questions: [
        mc('Du plus faible au plus fort :', ['agacer, irriter, exaspérer', 'exaspérer, agacer, irriter', 'irriter, exaspérer, agacer'], 0, 'L’impatience, la colère, la colère vive. EN: annoy, irritate, exasperate.', 'a2-cartes'),
        mc('« Excédé, il a quitté la réunion sans un mot. » Excédé veut dire ici…', ['qu’il n’en pouvait plus', 'qu’il avait dépassé l’heure'], 0, 'Pour une personne : une tension extrême. EN: he could not take any more.', 'a2-construire'),
        mc('Le bruit est … ; les voisins sont exaspérés.', ['exaspérant', 'exaspéré'], 0, 'Ce qui exaspère : -ant. EN: exaspérant.', 'a2-construire'),
        mc('Sur le forum, Paul demande une réunion d’urgence après la deuxième coupure. Il se dit…', ['exaspéré', 'légèrement agacé'], 0, 'Il le dit lui-même. EN: exasperated.', 'a2-texte'),
        tI(MOT, 'Un léger ___ , rien de plus. (nom de la famille d’agacer)', 'agacement', 'Un léger agacement : le premier cran. EN: annoyance.', 'a2-piege'),
        tI(MOT, 'Martine est ___ par trois semaines de bruit. (participe d’irriter)', 'irritée', 'Celle qui ressent : -ée. EN: irritated.', 'a2-piege'),
        eS('Excédant, il a quitté la réunion sans un mot.', fr(E(1221)), 'Celui qui n’en peut plus est excédé. EN: excédé.', 'a2-piege'),
        lC('Écoute. La colère monte-t-elle ou baisse-t-elle ?', fr(E(1224)), ['elle monte', 'elle baisse'], 0, 'De l’agacement à l’exaspération. EN: it rises.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-chiffres', label: 'Monter, descendre', targets: ['verbe-chiffre'],
      questions: [
        mc('Une baisse brutale des cours : ils…', ['s’effondrent', 'fléchissent', 'stagnent'], 0, 'S’effondrer : une baisse brutale. EN: collapse.', 'a3-table'),
        mc('Une petite baisse de deux pour cent : les ventes…', ['fléchissent', 's’effondrent', 'flambent'], 0, 'Fléchir : diminuer sans drame. EN: dip.', 'a3-construire'),
        mc('Les loyers s’élèvent brutalement : ils…', ['flambent', 'stagnent', 'fléchissent'], 0, 'Flamber : s’élever brutalement. EN: soar.', 'a3-table'),
        mc('Les ventes ne progressent plus : elles…', ['stagnent', 'grimpent', 's’effondrent'], 0, 'Stagner : fonctionner au ralenti. EN: they are flat.', 'a3-erreurs'),
        tI(MOT, 'Une baisse de deux pour cent n’est pas un ___ . (nom de s’effondrer)', 'effondrement', 'Un effondrement est une baisse brutale. EN: collapse.', 'a3-erreurs'),
        tI(MOT, 'Le titre parle de ___ des loyers : une hausse brutale. (nom de flamber)', 'flambée', 'Une flambée. EN: surge.', 'a3-texte'),
        eS('Après l’annonce, l’action s’est effondré en une matinée.', fr(E(1233)), 'L’action, féminin : effondrée. EN: agreement.', 'a3-exemples'),
        lC('Écoute. Le titre dit-il juste ?', fr(E(1237)), ['non, il exagère', 'oui'], 0, 'Une flambée pour trois pour cent. EN: it exaggerates.', 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-jugement', label: 'Le même trait, deux jugements', targets: ['trait-mal-juge'],
      questions: [
        mc('Économe et avare : quelle différence ?', ['économe loue, avare blâme', 'avare est plus soutenu', 'aucune'], 0, 'Le jugement change, pas la dépense. EN: praise or blame.', 'a4-cartes'),
        mc('D’une prudence excessive :', ['timoré', 'prudent', 'curieux'], 0, 'Timoré : le même trait, reproché. EN: timid.', 'a4-cartes'),
        mc('Ambitieux sans scrupule :', ['arriviste', 'persévérant', 'économe'], 0, 'Arriviste : réussir à tout prix. EN: ruthless careerist.', 'a4-flash'),
        mc('Dans un discours d’adieu qui remercie : « Elle a relancé le dossier jusqu’au bout ; elle était … »', ['persévérante', 'obstinée'], 0, 'Le mot qui loue la même insistance. EN: persevering.', 'a4-piege'),
        tI(MOT, 'Entre amis, pour dire avare : il est ___ . (familier)', 'radin', 'Radin : avare, en familier. EN: stingy.', 'a4-construire', ['pingre', 'rapiat', 'rat', 'grigou', 'grippe-sou']),
        tI(MOT, 'Une question ___ : elle insiste sur ce qu’on veut taire.', 'indiscrète', 'Indiscret : qui cherche à savoir ce qu’on ne veut pas dévoiler. EN: prying.', 'a4-cartes', ['intrusive', 'inquisitrice']),
        eS('Avare, elle refuse de payer plus cher pour la même chose : bravo.', 'Économe, elle refuse de payer plus cher pour la même chose : bravo.', 'Un bravo appelle le mot qui loue. EN: économe.', 'a4-piege'),
        lC('Écoute. Cette phrase loue-t-elle ou blâme-t-elle ?', fr(E(1247)), ['elle loue', 'elle blâme'], 0, 'Économe approuve. EN: it praises.', 'a4-construire'),
      ],
    },
    {
      id: 'r5-suffixes', label: 'Les suffixes qui jugent', targets: ['suffixe-mal-lu'],
      questions: [
        mc('« Une lueur rougeâtre » :', ['une lumière qui tire sur le rouge', 'une lumière laide'], 0, 'Pour une lumière, -âtre décrit. EN: reddish.', 'a5-cartes'),
        mc('« Un parfum douceâtre » :', ['doux et fade', 'doux et délicat'], 0, 'Le suffixe déprécie. EN: sickly-sweet.', 'a5-construire'),
        mc('Un bellâtre est…', ['beau, mais fat et niais', 'beau et cultivé'], 0, 'Le mot se moque. EN: a vain pretty boy.', 'a5-cartes'),
        mc('La paperasse, ce sont…', ['des papiers jugés inutiles', 'des papiers importants'], 0, 'Le mot râle. EN: useless paperwork.', 'a5-erreurs'),
        tI(MOT, 'Plus fort et plus méprisant que fade : ___ .', 'fadasse', 'Fadasse : qui manque totalement de goût. EN: utterly tasteless.', 'a5-cartes', ['insipide']),
        tI(MOT, 'Un mauvais écrivain : un ___ .', 'écrivailleur', 'Le suffixe rabaisse. EN: hack writer.', 'a5-cartes', ['écrivaillon', 'écrivassier', 'plumitif']),
        eS('Le jury a salué un écrivailleur de grand talent.', 'Le jury a salué un écrivain de grand talent.', 'Un écrivailleur est un mauvais écrivain. EN: écrivain.', 'a5-erreurs', ['Le jury a salué une écrivaine de grand talent.', 'Le jury a salué un auteur de grand talent.']),
        lC('Écoute. Le ciel est-il jugé ?', fr(E(1261)), ['non, sa couleur est décrite', 'oui, il est critiqué'], 0, 'Une teinte rougeâtre : une couleur approximative. EN: just described.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-euphemisme', label: 'Adoucir ou masquer', targets: ['euphemisme-masque'],
      questions: [
        mc('Un euphémisme juste…', ['adoucit les mots, pas les faits', 'fait disparaître le fait'], 0, 'Le lecteur comprend encore. EN: words, not facts.', 'a6-table'),
        mc('« Ajuster les effectifs » veut souvent dire…', ['licencier', 'embaucher'], 0, 'La formule masque des licenciements. EN: lay off.', 'a6-table'),
        mc('Décéder appartient au registre…', ['soutenu', 'familier'], 0, 'Soutenu, souvent par euphémisme. EN: formal.', 'a6-table'),
        mc('Dans le communiqué, l’« incident technique » était…', ['un début d’incendie', 'une panne de courant'], 0, 'L’article le dit. EN: a small fire.', 'a6-lecture'),
        tI(MOT, 'Madame Roy ___ décédée le 3 mars.', 'est', 'Décéder se conjugue avec être. EN: est.', 'a6-piege', ['était']),
        tI(MOT, 'Il s’est ___ dans la nuit, entouré des siens. (euphémisme de mourir)', 'éteint', 'S’éteindre : un euphémisme doux. EN: slipped away.', 'a6-piege', ['endormi']),
        eS('Madame Roy a décédé le 3 mars, à Rimouski.', fr(E(1268)), 'Décéder se conjugue avec être. EN: est décédée.', 'a6-piege', ['Madame Roy est morte le 3 mars, à Rimouski.']),
        lC('Écoute. Que dit cette phrase de la restructuration ?', fr(E(1273)), ['qu’elle cache des licenciements', 'qu’elle crée des postes'], 0, 'Quarante postes supprimés. EN: it hides lay-offs.', 'a6-construire'),
      ],
    },
    {
      id: 'r7-verbes', label: 'Les verbes qui vont avec', targets: ['verbe-calque'],
      questions: [
        mc('To ask a question :', ['poser une question', 'demander une question'], 0, 'L’OQLF déconseille le calque. EN: poser.', 'a7-cartes'),
        mc('To take action, selon l’OQLF :', ['prendre des mesures', 'prendre une action'], 0, 'Prendre une action est déconseillé. EN: prendre des mesures.', 'a7-cartes'),
        mc('Une hypothèse, on l’…', ['émet', 'tient', 'dissipe'], 0, 'Émettre une hypothèse. EN: put forward.', 'a7-cartes'),
        mc('Un malentendu, on le…', ['dissipe', 'tient', 'émet'], 0, 'Dissiper, ou faire cesser. EN: clear up.', 'a7-cartes'),
        tI(MOT, 'Il a ___ sa promesse, à la lettre. (participe)', 'tenu', 'Tenir sa promesse. EN: kept.', 'a7-erreurs', ['respecté']),
        tI(MOT, 'La journaliste ___ l’enquête depuis deux ans.', 'mène', 'Mener une enquête. EN: is conducting.', 'a7-construire', ['conduit', 'dirige', 'poursuit']),
        eS('Puis-je vous demander une dernière question ?', fr(E(1286)), 'On pose une question. EN: poser.', 'a7-erreurs', ['Puis-je vous adresser une dernière question ?']),
        lC('Écoute. Qu’a fait le comité ?', fr(E(1287)), ['il a proposé une autre explication possible', 'il a tenu une promesse'], 0, 'Émettre une hypothèse. EN: put forward a hypothesis.', 'a7-histoire'),
      ],
    },
    {
      id: 'r8-intensifs', label: 'Les intensifs attendus', targets: ['intensif-calque'],
      questions: [
        mc('Grièvement va avec…', ['blessé', 'malade'], 0, 'Seulement les blessures. EN: injured.', 'a8-table'),
        mc('Heavy smoker :', ['un gros fumeur', 'un lourd fumeur'], 0, 'Gros fumeur. EN: gros.', 'a8-table'),
        mc('Une majorité très large :', ['une écrasante majorité', 'une majorité battante'], 0, 'Écrasante. EN: overwhelming.', 'a8-table'),
        mc('« Très malade » est…', ['correct', 'faux'], 0, 'Très est toujours correct. EN: correct.', 'a8-construire'),
        tI(MOT, 'Le syndicat a opposé un refus ___ .', 'catégorique', 'Un refus catégorique. EN: flat.', 'a8-table', ['net', 'formel', 'ferme', 'absolu']),
        tI(MOT, 'Nous sommes partis sous une pluie ___ .', 'battante', 'Une pluie battante. EN: driving.', 'a8-piege', ['diluvienne', 'torrentielle', 'forte', 'violente']),
        eS('Sa grand-mère est grièvement malade depuis l’hiver.', fr(E(1303)), 'Grièvement ne va qu’avec les blessures. EN: gravement.', 'a8-piege', ['Sa grand-mère est très malade depuis l’hiver.', 'Sa grand-mère est sérieusement malade depuis l’hiver.']),
        lC('Écoute. Comment est la circulation ?', fr(E(1305)), ['chargée', 'fluide'], 0, 'Dense : beaucoup de voitures. EN: heavy.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-contraires', label: 'Le contraire dépend du sens', targets: ['contraire-faux-sens'],
      questions: [
        mc('Le contraire d’un hiver doux :', ['un hiver rigoureux', 'un hiver emporté'], 0, 'Pour le climat. EN: harsh.', 'a9-table'),
        mc('Le contraire d’un caractère doux :', ['emporté', 'salé', 'corsé'], 0, 'Pour une personne. EN: quick-tempered.', 'a9-table'),
        mc('Le contraire d’un café léger :', ['corsé', 'grave', 'copieux'], 0, 'Pour un café. EN: strong.', 'a9-table'),
        mc('Le contraire d’une faute légère :', ['grave', 'corsée', 'rêche'], 0, 'Pour une faute. EN: serious.', 'a9-construire'),
        tI(MOT, 'L’eau douce n’est pas ___ .', 'salée', 'Son contraire : l’eau salée. EN: salt.', 'a9-table', ['calcaire']),
        tI(MOT, 'À midi, un repas léger ; le soir, un repas plus ___ .', 'copieux', 'Pour un repas : copieux. EN: hearty.', 'a9-erreurs', ['lourd', 'consistant', 'abondant', 'riche', 'substantiel', 'solide']),
        eS('Il a un caractère doux, mais son frère est plutôt corsé.', fr(E(1317)), 'Pour une personne vive : emporté. EN: emporté.', 'a9-erreurs', ['Il a un caractère doux, mais son frère est plutôt colérique.', 'Il a un caractère doux, mais son frère est plutôt irascible.', 'Il a un caractère doux, mais son frère est plutôt bourru.', 'Il a un caractère doux, mais son frère est plutôt brutal.']),
        lC('Écoute. Qui boit le café le plus fort ?', fr(E(1321)), ['elle', 'moi'], 0, 'Un café corsé pour elle. EN: she does.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-region', label: 'Une étiquette selon la région', targets: ['etiquette-region'],
      questions: [
        mc('Au Québec, magasiner est…', ['standard', 'familier', 'critiqué'], 0, 'Usito : sans marque familière. EN: standard.', 'a10-cartes'),
        mc('Ma blonde, d’après Usito :', ['familier', 'standard', 'critiqué'], 0, 'Québécois et familier. EN: informal.', 'a10-cartes'),
        mc('Un char, d’après Usito :', ['critiqué comme non standard', 'standard'], 0, 'Anglicisme critiqué. EN: criticised.', 'a10-cartes'),
        mc('Le mot courriel…', ['est né au Québec et recommandé en France', 'est un anglicisme critiqué'], 0, 'D’origine québécoise. EN: born in Québec.', 'a10-cartes'),
        tI(MOT, 'Dans un rapport, à la place de char : une ___ .', 'voiture', 'Usito propose voiture, auto, automobile. EN: car.', 'a10-erreurs', ['automobile', 'auto']),
        tI(MOT, 'Dans un formulaire, à la place de ma blonde : ma ___ .', 'conjointe', 'Le mot standard. EN: partner.', 'a10-erreurs', ['partenaire', 'compagne', 'épouse', 'femme', 'amie', 'petite amie']),
        eS('Rapport annuel : trois chars de service ont été achetés.', 'Rapport annuel : trois voitures de service ont été achetées.', 'À l’écrit officiel, voiture. EN: voitures.', 'a10-erreurs', ['Rapport annuel : trois automobiles de service ont été achetées.', 'Rapport annuel : trois autos de service ont été achetées.', 'Rapport annuel : trois véhicules de service ont été achetés.']),
        lC('Écoute. Quel mot rend cette phrase familière ?', fr(BLONDE_ROW), ['blonde', 'magasiner'], 0, 'Magasiner est standard au Québec ; blonde est familier. EN: blonde.', 'a10-construire'),
      ],
    },
    {
      id: 'r11-passe', label: 'Le mot passe-partout', targets: ['passe-partout-flou'],
      questions: [
        mc('Une très grande somme :', ['considérable', 'grave', 'influente'], 0, 'Considérable. EN: considerable.', 'a11-cartes'),
        mc('Le premier rôle dans un projet :', ['un rôle majeur', 'un rôle grave'], 0, 'Majeur. EN: major.', 'a11-cartes'),
        mc('Une panne qui ferme la bibliothèque dix jours :', ['une panne grave', 'une panne influente'], 0, 'Grave : des conséquences sérieuses. EN: serious.', 'a11-lecture'),
        mc('Rien de plus précis n’est vrai :', ['tu gardes important', 'tu choisis un mot rare'], 0, 'Le mot simple reste juste. EN: keep it.', 'a11-cartes'),
        tI(MOT, 'Le maire a ___ un discours très bref. (participe)', 'prononcé', 'Prononcer un discours. EN: delivered.', 'a11-piege', ['fait', 'tenu', 'donné']),
        tI(MOT, 'Elle ___ un poste de direction depuis deux ans.', 'occupe', 'Occuper un poste. EN: holds.', 'a11-construire', ['a', 'tient', 'détient', 'exerce']),
        eS('Ce bénévole a joué un rôle grave dans le projet.', fr(E(1340)), 'Grave annonce un dommage. EN: majeur.', 'a11-piege', ['Ce bénévole a joué un rôle important dans le projet.', 'Ce bénévole a joué un rôle essentiel dans le projet.', 'Ce bénévole a joué un rôle déterminant dans le projet.', 'Ce bénévole a joué un rôle capital dans le projet.', 'Ce bénévole a joué un rôle considérable dans le projet.', 'Ce bénévole a joué un rôle décisif dans le projet.', 'Ce bénévole a joué un rôle clé dans le projet.', 'Ce bénévole a joué un rôle central dans le projet.']),
        lC('Écoute. Combien a coûté la rénovation ?', fr(E(1341)), ['beaucoup', 'presque rien'], 0, 'Une somme considérable. EN: a lot.', 'a11-texte'),
      ],
    },
    {
      id: 'r12-recyclage', label: 'Le B1, le B2 et le C1 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(REGISTRES_REF)} : « bagnole » dans un courriel à ta banque, c’est…`, ['un mauvais choix, pas une faute', 'une faute'], 0, `« ${B125_REFRAME.replace(/'/g, '’')} » EN: ${B125_REFRAME_EN}`, 'a1-rappel'),
        mc(`${Cap(EMOTIONS_REF)} : dans l’échelle de la colère, juste après agacé, vient…`, ['énervé', 'furieux'], 0, 'Agacé, énervé, en colère, furieux. EN: énervé.', 'a1-rappel'),
        mc(`${Cap(SCIENCE_REF)} : « les ventes ont reculé de cinq pour cent » décrit…`, ['une baisse mesurée', 'un effondrement'], 0, 'Reculer : une baisse que l’on mesure. EN: a measured fall.', 'a3-table'),
        mc(`${Cap(ARGOT_REF)} : le suffixe -ard est souvent…`, ['péjoratif', 'mélioratif'], 0, `« ${B232_REFRAME} » EN: ${B232_REFRAME_EN}`, 'a5-construire'),
        mc(`${Cap(CALQUER_REF)} : l’enthousiasme d’une annonce en anglais se dit en français…`, ['plus sobrement', 'avec plus de points d’exclamation'], 0, `« ${B233_REFRAME} » EN: ${B233_REFRAME_EN}`, 'a1-rappel'),
        mc(`${Cap(NUANCER_REF)} : la litote…`, ['dit moins pour faire entendre plus', 'adoucit une réalité brutale'], 0, `« ${C106_REFRAME} » EN: ${C106_REFRAME_EN}`, 'a6-construire'),
        mc(`${Cap(PRESSE_REF)} : « La municipalité s’entête », par rapport à « La municipalité maintient son projet »…`, ['blâme', 'reste neutre'], 0, 'S’entêter juge ; maintenir décrit. EN: it blames.', 'a4-construire'),
        lC(`Écoute. ${Cap(REPRISE_REF)} : que dit cette phrase ?`, fr(C105_ROW), ['varier les mots sans raison égare le lecteur', 'il faut toujours varier les mots'], 0, 'Un synonyme doit dire plus, pas seulement varier. EN: needless variation loses the reader.', 'a11-construire'),
      ],
    },
    {
      id: 'r13-examen', label: 'Comme à l’examen', targets: ['portrait-injuste'],
      questions: [
        mc('Compréhension écrite. Dans le portrait de Normand, « ce que certains appelaient de l’entêtement » sert à…', ['citer un mot péjoratif pour le corriger par un fait', 'insulter Normand', 'citer un client', 'annoncer son départ'], 0, 'Le fait qui suit donne une autre couleur au trait. EN: to correct a pejorative word with a fact.', 'a12-lecture'),
        mc('Compréhension écrite. Comment le portrait présente-t-il l’exigence de Normand ?', ['par des faits, avec ses deux faces', 'par un éloge sans nuance', 'par une critique sévère', 'par une citation'], 0, 'Certains l’ont trouvé dur ; tous ont appris. EN: with facts, both sides.', 'a12-lecture'),
        mc('Compréhension écrite. « Un vide considérable » dit que…', ['son départ se fera beaucoup sentir', 'il était souvent absent', 'l’atelier sera fermé', 'il laisse des dettes'], 0, 'Considérable : très grand. EN: he will be greatly missed.', 'a12-lecture'),
        mc('Choisis le mot juste pour un éloge : « Elle défendait chaque dollar du budget : elle était … »', ['économe', 'avare', 'radine'], 0, 'Le mot qui loue. EN: thrifty.', 'a4-cartes'),
        mc('Choisis le mot juste : « Le projet a été adopté à une … majorité. »', ['écrasante', 'grave', 'battante'], 0, 'Une écrasante majorité. EN: overwhelming.', 'a8-table'),
        tI(MOT, 'Prudent pour les uns, ___ pour les autres : le chef n’a pas changé. (trop prudent)', 'timoré', 'Timoré : d’une prudence excessive. EN: timid.', 'a4-cartes', ['craintif', 'frileux', 'pusillanime', 'peureux']),
        eS('Elle a exprimé un poste de direction pendant trente et un ans.', 'Elle a occupé un poste de direction pendant trente et un ans.', 'Un poste s’occupe. EN: occupé.', 'a11-piege', ['Elle a tenu un poste de direction pendant trente et un ans.', 'Elle a eu un poste de direction pendant trente et un ans.', 'Elle a exercé un poste de direction pendant trente et un ans.']),
        lC('Compréhension orale. Écoute. Que fait un portrait juste ?', fr(E(1350)), ['il nomme les défauts avec égards', 'il cache les défauts', 'il ne parle que des défauts'], 0, 'Il ne cache pas, il ménage. EN: it names faults with care.', 'a12-plan'),
      ],
    },
  ],
  audio: AUDIO, say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As c1.12 does. */
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
    { front: 'to exasperate (the high notch)', back: 'exaspérer', say: fr(E(1220)) },
    { front: 'prices are soaring', back: 'les prix flambent', say: fr(E(1232)) },
    { front: 'thrifty, not miserly', back: 'économe, pas avare', say: fr(E(1249)) },
    { front: 'reddish (no judgement)', back: 'rougeâtre', say: fr(E(1261)) },
    { front: 'to pass away (formal)', back: 'décéder (avec être)', say: fr(E(1268)) },
    { front: 'to ask a question', back: 'poser une question', say: fr(E(1286)) },
    { front: 'seriously injured', back: 'grièvement blessé', say: fr(E(1302)) },
    { front: 'the opposite of a mild winter', back: 'un hiver rigoureux', say: fr(E(1316)) },
    { front: 'to shop around (Québec, standard)', back: 'magasiner', say: fr(E(1322)) },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Un synonyme n’est jamais un jumeau',
  body: `${REFRAME} Tu es parti des registres de ${REGISTRES_REF}, des échelles de ${EMOTIONS_REF}, de l’argot de ${ARGOT_REF}, du ton de ${CALQUER_REF} et de la litote de ${NUANCER_REF}, pour peser chaque synonyme : sa force, sa couleur, ses voisins, son contraire et son étiquette régionale. La suite, c’est ${NEXT_REF_PLANNED} : les faux amis, ces mots qui ressemblent à l’anglais et disent autre chose. EN: Next comes lesson 18 in C1, false friends: words that look like English and mean something else.`,
  points: [
    'La force : choisis le cran que les faits justifient.',
    'La couleur : économe loue, avare blâme le même fait.',
    'Les voisins : pars du nom pour trouver son verbe et son intensif.',
    'Le contraire : trouve d’abord le sens.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['nuancier', 'contraire'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ton portrait',
    opener: {
      line: 'Des notes brutes sur une collègue qui part : ici tu écris un portrait juste et exact, puis tu passes l’examen. EN: Blunt notes about a departing colleague: here you write a fair and exact portrait, then sit the exam.',
      imageRef: 'lessons/synonymes-nuances/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit ton portrait et passé l’examen : quatre-vingt-seize questions, douze manches. EN: You wrote your portrait and sat the exam: ninety-six questions, twelve rounds.',
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r5-suffixes', 'a12-quiz/r9-contraires', 'a12-review'],
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
  { id: 'd-colere', title: 'Le bas ou le haut de l’échelle', format: 'sort' as const, coach: 'Deux piles : l’impatience qui commence, ou la patience à bout. EN: the low notch or the high one.', buckets: ['agacer', 'exaspérer'], items: [E(1218), E(1223), E(1216), E(1220), E(1224), E(1217)], audio: AUDIO },
  { id: 'd-chiffres', title: 'Monter ou baisser', format: 'sort' as const, coach: 'Deux piles : le chiffre monte, ou il baisse. Puis regarde la vitesse. EN: up or down, then how fast.', buckets: ['monter', 'baisser'], items: [E(1225), E(1226), E(1232), E(1227), E(1228), E(1233)], audio: AUDIO },
  { id: 'd-jugement', title: 'Louer ou blâmer', format: 'sort' as const, coach: 'Deux piles : le mot loue le trait, ou il le blâme. EN: praise or blame.', buckets: ['louer', 'blâmer'], items: [E(1247), E(1248), E(1240), E(1239), E(1241), E(1246)], audio: AUDIO },
  { id: 'd-suffixes', title: 'Décrire ou juger', format: 'sort' as const, coach: 'Deux piles : le suffixe décrit, ou il juge. Regarde ce qu’il qualifie. EN: describe or judge.', buckets: ['il décrit', 'il juge'], items: [E(1252), E(1253), E(1261), E(1254), E(1255), E(1256)], audio: AUDIO },
  { id: 'd-euphemisme', title: 'Ménager ou cacher', format: 'mcq' as const, coach: 'Le test : le lecteur comprend-il encore le fait ? EN: is the fact still clear?', q: '« Ajuster les effectifs », pour quarante licenciements, …', opts: ['masque le fait', 'ménage une famille'], correct: 0, why: 'Le lecteur ne voit plus les licenciements. EN: it masks.', items: [E(1267), E(1268), E(1270), E(1271), E(1273), E(1274)], audio: AUDIO },
  { id: 'd-verbes', title: 'Le verbe du nom', format: 'mcq' as const, coach: 'Pars du nom, pas de l’anglais. EN: start from the noun.', q: 'Une question, on la …', opts: ['pose', 'demande'], correct: 0, why: 'L’OQLF déconseille « demander une question ». EN: pose.', items: [E(1279), E(1282), E(1283), E(1284), E(1285), E(1288)], audio: AUDIO },
  { id: 'd-intensifs', title: 'L’intensif attendu', format: 'mcq' as const, coach: 'Grièvement pour les blessures ; ailleurs, gravement ou très. EN: grièvement for injuries only.', q: 'Sa grand-mère est … malade.', opts: ['gravement', 'grièvement'], correct: 0, why: 'Grièvement ne va pas avec malade. EN: gravement.', items: [E(1293), E(1294), E(1295), E(1296), E(1297), E(1298)], audio: AUDIO },
  { id: 'd-contraires', title: 'Un contraire par sens', format: 'flashcard' as const, coach: 'Lis chaque mot et dis son contraire, puis le nom qui le choisit. EN: say the opposite and the noun that picks it.', items: [E(1309), E(1310), E(1311), E(1312), E(1314), E(1315)], audio: AUDIO },
  { id: 'd-region', title: 'Standard ou familier', format: 'sort' as const, coach: 'Deux piles, d’après Usito : standard au Québec, ou familier et critiqué. EN: standard, or informal and criticised.', buckets: ['standard au Québec', 'familier ou critiqué'], items: [E(1322), E(1323), MAGASINER, MA_BLONDE, UN_CHAR, CHAR_ROW], audio: AUDIO },
  { id: 'd-passe', title: 'Dire en quoi', format: 'flashcard' as const, coach: 'Lis chaque expression, puis dis le mot passe-partout qu’elle remplace. EN: say the all-purpose word it replaces.', items: [E(1333), E(1334), E(1335), E(1336), E(1337), E(1338)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1, le B2 et le C1 en renfort', format: 'flashcard' as const, coach: 'Six phrases des leçons précédentes : dis ce que chacune t’apprend pour choisir un synonyme. EN: what each earlier sentence teaches here.', items: [B125_ROW, B135_ROW, B229_ROW, B232_ROW, B233_ROW, C106_ROW], audio: AUDIO },
  { id: 'd-portrait', title: 'Un trait, un fait', format: 'flashcard' as const, coach: 'Lis chaque phrase, puis écris la tienne sur le même modèle pour le portrait de Josée. EN: read each one, then write your own.', items: [E(1346), E(1347), E(1348), E(1349), E(1350), E(1351)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'cran-colere', description: 'Pitches anger at the wrong strength (a threat called « un peu agacé », a passing annoyance called exasperation), or mixes up the -ant and -é forms.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a12-mission'], drill: 'd-colere', retest: 'd-colere' },
  { id: 'verbe-chiffre', description: 'Uses a press verb of change that does not fit the figure (s’effondrer for a small fall, flamber for a fall), or misses an exaggerating headline.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check'], drill: 'd-chiffres', retest: 'd-chiffres' },
  { id: 'trait-mal-juge', description: 'Uses the blaming word where praise is meant (avare, obstiné, timoré in a tribute), or misses the judgement a word carries.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a12-mission'], drill: 'd-jugement', retest: 'd-jugement' },
  { id: 'suffixe-mal-lu', description: 'Reads every -âtre as pejorative, or uses bellâtre, douceâtre, fadasse, paperasse or écrivailleur as neutral words.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a12-mission'], drill: 'd-suffixes', retest: 'd-suffixes' },
  { id: 'euphemisme-masque', description: 'Accepts or writes a euphemism that hides the fact, or misbuilds décéder and s’éteindre.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a12-mission'], drill: 'd-euphemisme', retest: 'd-euphemisme' },
  { id: 'verbe-calque', description: 'Writes demander une question or prendre une action, or pairs a noun with another noun’s verb.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a12-mission'], drill: 'd-verbes', retest: 'd-verbes' },
  { id: 'intensif-calque', description: 'Writes grièvement with a non-injury word, or calques heavy (lourd fumeur, lourde majorité).', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a12-mission'], drill: 'd-intensifs', retest: 'd-intensifs' },
  { id: 'contraire-faux-sens', description: 'Picks the opposite of another sense of the word (a « salty » winter, a « strong » brother, a « serious » meal).', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check'], drill: 'd-contraires', retest: 'd-contraires' },
  { id: 'etiquette-region', description: 'Labels magasiner as familiar, or uses char or blonde in an official text.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check'], drill: 'd-region', retest: 'd-region' },
  { id: 'passe-partout-flou', description: 'Piles up important, faire and dire, or replaces them with a precise word that is not true (un rôle grave).', detectOn: ['a11-construire', 'a11-piege', 'a11-check', 'a12-mission'], drill: 'd-passe', retest: 'd-passe' },
  { id: 'recyclage', description: 'Loses a tool this lesson sits on: register as a choice, the feeling scales, measured numbers, the -ard suffix, tone in translation, litote, press framing, needless variation.', detectOn: ['a1-rappel', 'a4-construire', 'a11-construire'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'portrait-injuste', description: 'In a portrait, copies the judging words, hides the facts, or invents a fact.', detectOn: ['a12-plan', 'a12-scenario', 'a12-mission'], drill: 'd-portrait', retest: 'd-portrait' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names a position. As c1.12 does. */
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
  sheet('sheet-force', 'La force des mots', ['l’échelle de la colère', 'les verbes du chiffre'], [
    teach('sheet-force-teach', 'Le cran que les faits justifient',
      `${REFRAME} Deux synonymes peuvent dire la même chose à des degrés différents. Regarde ce que la phrase raconte, puis choisis le cran : un mot trop faible cache l’urgence, un mot trop fort crée une crise. Dans la presse, le verbe est déjà un jugement sur le chiffre. EN: ${REFRAME_EN}`),
    table('sheet-force-colere', 'De l’agacement à l’exaspération', ['Verbe', 'Il dit', 'Exemple'], [
      ['agacer', 'l’impatience, la gêne', 'Ses retards répétés commencent à m’agacer.'],
      ['irriter', 'la colère', 'Le bruit du chantier irrite tout le quartier.'],
      ['exaspérer', 'la colère vive, la patience à bout', 'Après trois appels sans réponse, elle était exaspérée.'],
      ['excéder', 'une tension extrême, l’insupportable', 'Excédé, il a quitté la réunion sans un mot.'],
      ['-ant / -é', 'ce qui cause / qui ressent', 'Un bruit exaspérant ; des voisins exaspérés.'],
    ]),
    table('sheet-force-chiffres', 'Monter, descendre', ['Verbe', 'Sens', 'Exemple'], [
      ['grimper', 's’élever rapidement', 'Les prix grimpent.'],
      ['flamber', 's’élever brutalement (prix)', 'Depuis janvier, les loyers du quartier flambent.'],
      ['fléchir', 'diminuer, sans drame', 'Les inscriptions ont légèrement fléchi cet automne.'],
      ['reculer', 'baisser, d’un chiffre mesuré', 'Les ventes ont reculé de cinq pour cent.'],
      ['s’effondrer', 'subir une baisse brutale', 'Après l’annonce, l’action s’est effondrée en une matinée.'],
      ['stagner', 'fonctionner au ralenti', 'Les ventes stagnent depuis le printemps.'],
      ['léger, fort', 'règle la force du nom', 'une légère hausse, une forte baisse'],
    ]),
  ]),
  sheet('sheet-couleur', 'La couleur des mots', ['louer ou blâmer', 'les suffixes', 'l’euphémisme', 'les étiquettes du Québec'], [
    teach('sheet-couleur-teach', 'Ce que le mot ajoute au sens',
      'La connotation, ce sont les significations secondes qui s’ajoutent au sens : un mot approuve (mélioratif), reste neutre ou blâme (péjoratif). Le registre fait partie de cette couleur, et il peut changer d’une région à l’autre. Un euphémisme atténue une réalité brutale : il est juste tant que le lecteur comprend le fait. EN: connotation, register and euphemism.'),
    table('sheet-couleur-traits', 'Le même trait, deux jugements', ['Il loue', 'Il blâme', 'Le trait'], [
      ['économe', 'avare (radin, familier)', 'dépenser peu'],
      ['persévérant', 'obstiné, têtu', 'insister'],
      ['prudent', 'timoré', 'éviter les risques'],
      ['curieux', 'indiscret', 'vouloir savoir'],
      ['ambitieux', 'arriviste', 'vouloir réussir'],
    ]),
    table('sheet-couleur-suffixes', 'Les suffixes qui jugent', ['Suffixe', 'Effet', 'Exemples'], [
      ['-âtre', '« presque » ; souvent péjoratif', 'rougeâtre (neutre) ; verdâtre, douceâtre, bellâtre'],
      ['-asse', 'mépris', 'fadasse, paperasse'],
      ['-aud', 'moquerie', 'lourdaud'],
      ['-ailleur', 'rabaisse', 'écrivailleur'],
      ['-ard', 'moquerie, mépris (leçon 32 du B2)', 'vantard, chauffard'],
    ]),
    table('sheet-couleur-euphemisme', 'Respecter, adoucir, masquer', ['Formule', 'Le fait', 'Usage'], [
      ['s’éteindre', 'mourir', 'respecter'],
      ['décéder (avec être)', 'mourir', 'soutenu, euphémique'],
      ['d’un certain âge', 'âgé', 'adoucir'],
      ['ajuster les effectifs', 'licencier', 'masquer'],
      ['un incident', 'un incendie', 'masquer'],
      ['un ajustement tarifaire', 'une hausse', 'masquer'],
    ]),
    table('sheet-couleur-region', 'Les étiquettes du Québec (Usito, OQLF)', ['Mot', 'Étiquette', 'À l’écrit officiel'], [
      ['magasiner, magasinage', 'standard, implanté', 'oui, sans guillemets'],
      ['ma blonde', 'familier', 'ma conjointe'],
      ['un char', 'critiqué, non standard', 'une voiture, une auto'],
      ['courriel', 'né au Québec, recommandé en France', 'oui'],
      ['faire du shopping', 'usage de France, déconseillé au Québec', 'magasiner'],
    ]),
  ]),
  sheet('sheet-voisins', 'Les voisins des mots', ['le verbe du nom', 'l’intensif attendu'], [
    teach('sheet-voisins-teach', 'Pars du nom',
      'Une collocation est l’association habituelle d’un mot avec un autre. Pour trouver le verbe ou l’intensif d’un nom, pars du nom, pas de l’anglais, et vérifie dans un dictionnaire. Très reste toujours correct ; l’intensif attendu est seulement plus précis. EN: start from the noun, not from English.'),
    table('sheet-voisins-verbes', 'Le verbe que le nom attend', ['Nom', 'Verbe', 'À éviter (OQLF)'], [
      ['une question', 'poser, formuler, adresser', 'demander une question'],
      ['des mesures', 'prendre', 'prendre une action'],
      ['une hypothèse', 'émettre', ''],
      ['des revendications', 'formuler', ''],
      ['un projet', 'nourrir (en soi)', ''],
      ['un malentendu', 'dissiper, faire cesser', ''],
      ['une promesse', 'faire, tenir, manquer à', ''],
      ['une enquête', 'mener', ''],
    ]),
    table('sheet-voisins-intensifs', 'L’intensif attendu', ['Nom ou adjectif', 'Intensif', 'Remarque'], [
      ['blessé', 'grièvement', 'seulement les blessures'],
      ['malade', 'gravement', 'jamais grièvement'],
      ['un refus', 'catégorique', ''],
      ['une majorité', 'écrasante', ''],
      ['un fumeur', 'gros', 'heavy, pas lourd'],
      ['la circulation', 'dense', ''],
      ['un célibataire', 'endurci', ''],
      ['une habitude', 'invétérée', 'enracinée par le temps'],
      ['la pluie', 'battante', 'une forte pluie'],
    ]),
  ]),
  sheet('sheet-sens', 'Le sens, le contraire, le mot précis', ['un contraire par sens', 'le mot passe-partout'], [
    teach('sheet-sens-teach', 'Trouve d’abord le sens',
      'Un mot a autant de contraires que de sens : le nom voisin choisit. De même, un mot passe-partout comme important ne dit pas en quoi la chose compte : remplace-le par le mot qui le dit, si ce mot est vrai ; sinon, garde-le. EN: find the meaning first.'),
    table('sheet-sens-contraires', 'Doux et léger', ['Avec', 'Mot', 'Contraire'], [
      ['un hiver, un climat', 'doux', 'rigoureux'],
      ['un caractère', 'doux', 'emporté'],
      ['une peau, un tissu', 'doux', 'rêche'],
      ['l’eau', 'douce', 'salée'],
      ['un repas', 'léger', 'copieux'],
      ['un café', 'léger', 'corsé, fort'],
      ['une faute, une blessure', 'légère', 'grave'],
      ['une valise', 'légère', 'lourde'],
    ]),
    table('sheet-sens-passe', 'Le mot passe-partout, remplacé', ['Au lieu de', 'Dis', 'Quand'], [
      ['un rôle important', 'un rôle majeur', 'le premier rôle'],
      ['une somme importante', 'une somme considérable', 'très grande'],
      ['un problème important', 'un problème grave', 'il fait du tort'],
      ['une personne importante', 'une personne influente', 'elle pèse sur les décisions'],
      ['faire un discours', 'prononcer un discours', 'à l’écrit'],
      ['dire son avis', 'exprimer son avis', 'à l’écrit'],
      ['avoir un poste', 'occuper un poste', 'à l’écrit'],
    ]),
  ]),
  sheet('sheet-portrait', 'Écrire un portrait juste', ['le plan', 'la liste de contrôle'], [
    teach('sheet-portrait-teach', 'Un trait, un fait, le mot juste',
      `${REFRAME} Un portrait juste garde les faits, choisit pour chaque trait le mot qui loue sans mentir, règle sa force, soigne ses voisins, et ne cache pas les défauts : il les nomme avec égards. EN: ${REFRAME_EN}`),
    table('sheet-portrait-plan', 'Le plan', ['Partie', 'Ce qu’elle fait', 'Exemple'], [
      ['l’ouverture', 'annonce le départ', 'Après trente et un ans, Josée nous quitte vendredi.'],
      ['un trait', 'un mot juste, un fait', 'Elle gérait le budget avec une rigueur que nous lui envions.'],
      ['un défaut', 'nommé avec égards', 'Certains l’ont trouvée dure ; tous ont appris avec elle.'],
      ['l’adieu', 'chaleureux', 'Elle nous manquera, ses questions aussi.'],
    ]),
    table('sheet-portrait-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Chaque trait a son fait', 'tiré des notes, jamais inventé'],
      ['La couleur', 'le mot qui loue, s’il reste vrai'],
      ['La force', 'ni exaspérante ni parfaite'],
      ['Les voisins', 'verbes et intensifs attendus'],
      ['Le passe-partout', 'remplacé seulement par un mot vrai'],
      ['Le ton', 'chaleureux, jamais moqueur'],
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
 *  released ONCE, and only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-17-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, lines in authored order, at natural C1 speed; the lines are hidden, so the take must be continuous.';
const TRAP = 'The audio step plays each card’s CORRECT sentence. Six lines, one voice, plainly and at the same pace. The wrong versions in promptSound are NEVER spoken.';
const TEXTE = 'One voice, read as written, at a natural reading pace: the instruction sentence first, then the text itself after a short pause.';
const CARDS = 'Four cards, one coach voice, neutral and clear; each card’s French line read once, unhurried.';
const REC_DESC: Record<string, string> = {
  'rec-c1-17-chronique': 'Rosalie Brassard’s language column (act 1), ONE female Québécoise voice, one take, warm and lightly amused; the reader’s quoted lines a little faster, the last sentence slower, like a maxim.',
  'rec-c1-17-chantier': 'Paul and Martine in the lobby of a Laval building (act 2), two voices, one take: Paul tired and climbing in irritation, Martine calm and practical. Québec accents.',
  'rec-c1-17-colere-cartes': `The four anger cards (act 2). ${CARDS}`,
  'rec-c1-17-piege-colere': TRAP,
  'rec-c1-17-colere-ecoute': `${ONE_TAKE} EIGHT VOICES, one per line, as eight residents speaking in turn at a building meeting: varied ages, Québec accents, each line a little more heated than the one before until line 6; lines 7 and 8 calmer.`,
  'rec-c1-17-texte-a2': `The residents’ forum (act 2). ${TEXTE} Four voices for Gilles, Martine, Paul and the manager; the instruction by a neutral fifth voice.`,
  'rec-c1-17-eco-ecoute': `${ONE_TAKE} ONE VOICE, a radio business columnist reading eight figures: brisk, neutral, with a short pause between lines.`,
  'rec-c1-17-texte-a3': `The housing news brief (act 3). ${TEXTE} A local newsreader voice.`,
  'rec-c1-17-samuel': 'Benoît and the learner at the print works break table (act 4), two voices, one take: Benoît amused and thoughtful, the learner curious. Québec accents.',
  'rec-c1-17-trait-cartes': `The four trait cards (act 4). ${CARDS}`,
  'rec-c1-17-piege-trait': TRAP,
  'rec-c1-17-texte-a4': `The two reference letters (act 4). ${TEXTE} One warm voice for the first letter, a dry voice for the colleague’s message.`,
  'rec-c1-17-critique': 'Élodie and Karim on the phone (act 5), two voices, one take: Élodie unsure and laughing, Karim precise and friendly; light kitchen sounds on his side.',
  'rec-c1-17-suffixe-cartes': `The four suffix cards (act 5). ${CARDS}`,
  'rec-c1-17-suffixe-ecoute': `${ONE_TAKE} ONE VOICE, Élodie reading eight sentences of her draft aloud: lively, a little ironic on the judging words.`,
  'rec-c1-17-texte-a5': `The restaurant review (act 5). ${TEXTE} A female blogger’s voice, cheerful then dry.`,
  'rec-c1-17-communique': 'The company notice and the newspaper article (act 6), TWO voices, one take: a smooth corporate voice for the notice, a plain newsreader voice for the article and the last sentences.',
  'rec-c1-17-piege-euphemisme': TRAP,
  'rec-c1-17-texte-a6': `The sports club message and Mireille’s reply (act 6). ${TEXTE} A polished voice for the club, a direct female voice for Mireille.`,
  'rec-c1-17-comite': 'Julie and the learner in a café (act 7), two voices, one take: Julie self-mocking, the learner helpful. Café ambience, low.',
  'rec-c1-17-verbe-cartes': `The four collocation cards (act 7). ${CARDS}`,
  'rec-c1-17-texte-a7': `The committee minutes (act 7). ${TEXTE} A measured voice, like a secretary reading minutes.`,
  'rec-c1-17-bulletin-ecoute': `${ONE_TAKE} THREE VOICES as a radio news bulletin: the female presenter reads lines 1, 2 and 6, a male reporter lines 3, 4 and 5, a second female reporter lines 7 and 8.`,
  'rec-c1-17-piege-intensif': TRAP,
  'rec-c1-17-texte-a8': `The radio bulletin (act 8). ${TEXTE} A radio presenter’s voice.`,
  'rec-c1-17-auberge': 'Mathias and the learner at the inn (act 9), two voices, one take: Mathias gentle and amused, Gaspésie accent welcome; wind outside, a stove crackling.',
  'rec-c1-17-contraire-ecoute': `${ONE_TAKE} ONE VOICE, Mathias speaking to newcomers: relaxed, warm, unhurried.`,
  'rec-c1-17-texte-a9': `The inn review (act 9). ${TEXTE} A female traveller’s voice.`,
  'rec-c1-17-coop': 'Annie and Vincent at the cooperative (act 10), two voices, one take: Annie Québécoise and patient, Vincent with a Lyon accent, careful and a little embarrassed.',
  'rec-c1-17-region-cartes': `The four regional label cards (act 10). ${CARDS} A Québécoise voice.`,
  'rec-c1-17-texte-a10': `The cooperative style guide (act 10). ${TEXTE} A Québécoise voice, practical.`,
  'rec-c1-17-rapport': 'The library annual report (act 11), TWO voices, one take: a hesitant volunteer for the first draft, the director, crisp and kind, for the final version and the last sentences.',
  'rec-c1-17-passe-cartes': `The four precise-word cards (act 11). ${CARDS}`,
  'rec-c1-17-piege-passe': TRAP,
  'rec-c1-17-texte-a11': `Benoît’s email, first draft and sent version (act 11). ${TEXTE} One male voice, slightly brisker for the sent version.`,
  'rec-c1-17-modele': 'The model portrait of Normand (act 12), ONE voice, one take, warm and exact, a little humour on the coffee and the old press; the last line slower.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 17',
  intro: 'At B1 you learned that no register is wrong and met the first feeling scales; at B2, slang, tone and the -ard suffix. At C1, a dictionary of synonyms gives you a fan of neighbouring words, and the right one depends on three weights: its strength (annoy, irritate, exasperate; prices that climb or soar, sales that dip or collapse), its colour (thrifty or miserly, cautious or timid, the suffixes that judge, the euphemism that spares or hides) and its neighbours (the verb and the intensifier a noun expects, the opposite that matches the sense). You also check a word’s regional label in Usito and the OQLF. The lesson ends with a 250 to 350 word farewell portrait written from a colleague’s blunt notes.',
  skill: 'CE',
  grammarAssumed: [REGISTRES_UNIT, EMOTIONS_UNIT, SCIENCE_UNIT, ARGOT_UNIT, CALQUER_UNIT, REPRISE_UNIT, NUANCER_UNIT, PRESSE_UNIT],
  grammarIntroduced: [
    'Intensity scales past B1: agacer, irriter, exaspérer, excéder, with the -ant / -é split',
    'The press verbs of change by strength: grimper, flamber, fléchir, reculer, s’effondrer, stagner; une légère / forte hausse',
    'Connotation of character words: économe / avare / radin, persévérant / obstiné, prudent / timoré, curieux / indiscret, ambitieux / arriviste',
    'Judging suffixes: -âtre as approximation and as pejorative (rougeâtre against verdâtre, douceâtre, bellâtre), -asse, -aud, -ailleur',
    'Euphemism as connotation: décéder (être), s’éteindre; respecting, softening and masking',
    'Verb + noun collocations: poser une question, émettre une hypothèse, formuler des revendications, nourrir un projet, dissiper un malentendu, tenir sa promesse, mener une enquête, prendre des mesures; the OQLF calques demander une question and prendre une action',
    'Expected intensifiers: grièvement blessé against gravement malade, un refus catégorique, une écrasante majorité, un gros fumeur, une circulation dense, un célibataire endurci, une habitude invétérée, une pluie battante',
    'Antonymy by sense: doux (rigoureux, emporté, rêche, salé) and léger (copieux, corsé, grave, lourd)',
    'Québec register labels from Usito and the OQLF: magasiner (standard), blonde (familier), char (criticised), courriel',
    'Replacing all-purpose words with true precise ones: majeur, considérable, grave, influent; prononcer, exprimer, occuper',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B1, tu as appris qu’aucun registre n’est faux et rencontré les premières échelles de sentiments ; au B2, l’argot, le ton et le suffixe -ard. Au C1, un dictionnaire des synonymes te donne un éventail de mots voisins, et le bon dépend de trois poids : sa force (agacer, irriter, exaspérer ; des prix qui grimpent ou flambent, des ventes qui fléchissent ou s’effondrent), sa couleur (économe ou avare, prudent ou timoré, les suffixes qui jugent, l’euphémisme qui ménage ou qui cache) et ses voisins (le verbe et l’intensif que le nom attend, le contraire qui va avec le sens). Tu vérifies aussi l’étiquette d’un mot régional dans Usito et à l’OQLF. À la fin, tu écris en 250 à 350 mots le portrait d’une collègue qui part, à partir de notes peu tendres.',
    minutes: 170,
    difficulty: 4,
    glyph: '≈',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: SYNONYMES_NUANCES_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, LECTURE_MODELE, NOTES_JOSEE, dicteeFor };
export const lessonWithoutTask = (): Lesson => LESSON;
