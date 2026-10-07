// c1.18.l1 « Les faux amis savants » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 (THE VOCAB SHAPE) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (wave 6, the
// wave 5 review lessons). Structural model: the reviewed c1.12 « Le
// vocabulaire des idées » (`./vocabulaire-idees-*`): its helpers, its act
// beats, its « Dans un texte » loop, its slot spreaders.
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE VOCAB SHAPE, AS BUILT HERE (c1.12's beats)
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 holds ONE learned false friend (two in acts 6, 10
//   and 11), in the same beats:
//     1. MEET IT IN USE     a `story` where the word is said, and corrected
//     2. LEARN THE VERDICT  a `cardDeck` (4 cards) or a `tapTable` (6 rows),
//                           linked to a sheet: the safe words, the correct
//                           French sense, WHO criticises and WHO accepts
//     3. CHOOSE             a gated `groupDrill` of the safe words
//     4. TRAP               a stepped `trapDrill` or a `commonErrors`
//     5. ONE MORE ANGLE     a hideLines listening, examples, hacks, dictation
//     6. DANS UN TEXTE      the same title every act: a short text read for
//                           the act's word (drafts labelled « brouillon à
//                           reprendre »), answers behind the modal
//     7. CHECK              the gated act check
//
//    1  Le mot savant qui trompe   6   a reviser's note, recap of b1.35,
//                                       b1.37, b2.27-29 and b2.33, the bank
//    2  Initier                    7   lancer, amorcer, être à l’origine de
//    3  Opportunité                7   occasion, chance, perspectives
//    4  Alternative                7   option, solution de rechange
//    5  Impacter                   7   toucher, avoir une incidence sur
//    6  Académique, versatile      7   universitaire, scolaire, polyvalent
//    7  Juridiction                7   compétence, ressort, tribunal
//    8  Éligible                   7   admissible, avoir droit à
//    9  Digital ou numérique       7   numérique, numériser
//   10  Faire sens, questionner    7   avoir du sens, remettre en question
//   11  Canceller, céduler, booker 7   annuler, fixer, réserver
//   12  Ta note de révision       11   model note, plan, role play, TASK,
//                                       practice, quiz, review
//
//   TOTAL 87 missions, 12 acts. Corpus: 140 authored rows (.1000-.1139) in
//   twelve blocks plus 23 reused rows (9 Postgres-only in PG_ROWS, 14 in
//   seedPlusPacks), released act by act through `deckTranche`. Quiz: 12
//   rounds of 8 (one per act 2 to 11, a recycling round citing b1.35, b1.37,
//   b2.27, b2.28, b2.29 and b2.33, a « comme à l’examen » round). Chapter
//   artwork: `faux-amis-savants-image-prompts.md`, twelve prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un mot savant qui ressemble à l’anglais : vérifie son sens français, et
//   qui l’accepte. »
//   EN: A learned word that looks like English: check its French meaning, and
//   who accepts it.
//
//   ONE METAPHOR, LE SOSIE: a lookalike examined under a lens, lit by several
//   lamps (the authorities). Rejected candidates: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the fourteen learned false friends of the brief, each with its
//           safe replacements, its correct French sense and its sourced
//           verdict (corpus VERDICTS, §A.7); the revision note that justifies
//           a replacement « selon … ».
//   QUOTES  b2.33's reframe, re-exported; rows of b1.35, b1.36, b1.37, b2.27,
//           b2.28, b2.29, b2.33 and six faux-amis bank rows reused BY ID.
//   LEAVES  ideas and paragraphs in translation to c1.22; tact at work to
//           c1.23 (which may cite « la leçon 18 du C1 » for impacter, initier,
//           booker); « une évidence » to c1.12 (cited); « faire du sens » and
//           b2.33's ten words to b2.33 (cited, never re-taught).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   C1: unsimplified French; English authored on every learner string (an
//   `en` field or a final « EN: »), never on an answer. tu in every
//   instruction. Every `say` is French. No « ? » or « ! » in any bubble.
//   Neighbours cited by trail position in words; c1.12 and c1.19 typed from
//   the plan. Mission slots spread by `spreadMissions()`, the quiz by
//   `spreadSlots()` (no text changes), as c1.12. Wave 5 review lessons: no
//   correct French taught as an error (every « critiqué » is « selon … »,
//   and where Le Robert or Usito accept a use the card says so); no item
//   with two defensible answers (every typed answer lists its equals in
//   `accept`); the model answer copies no whole source sentence. Up to 4
//   tapTables (decision 16): acts 3, 7, 8 and 11. Unpadded tag.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. FACT CHECK before publish: the fourteen verdicts and their sources in
//      corpus §A.7 (and VERDICTS), plus the facts in the texts: health
//      mainly provincial in Canada (row .1076), British Columbia's
//      short-term rental law and the Tribunal administratif du logement
//      (act 7 draft), Belgian universities' « calendrier académique ».
//   2. Published rows use senses this lesson calls criticised (corpus
//      §A.4): fr.b2.soins.1135 « une alternative », fr.b2.projets-et-futur
//      .022 « opportunité », four b2 « académique » rows, a dozen « impact »
//      rows. The lesson never calls them wrong (it says « critiqué par »),
//      but a learner may notice. Leave them, or a text edit later?
//   3. No item-level verdict of the Belgian Service de la langue française
//      could be found online for any of the fourteen words; the lesson cites
//      none. Acceptable, or should a Belgian source be sought offline?
//   4. `Lesson.skill` is 'CE' as the brief says, though the task is written
//      (as c1.12). Keep?
//   5. The noun « impact » (= effet) is criticised by the Académie and the
//      BDL; it is named in a sheet only, never tested. Agree?
//   6. `Lesson.version` is 1. 'coach-fr-FR' is inert; kept. Twelve openers
//      need art (ART_PENDING until Paul's images land).

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, FA, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, PG_ROWS, dicteeFor,
  LECTURE_REVISION, LECTURE_MODELE, BROUILLON_TACHE,
  TEXTE_A2, TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A11,
  B233_REFRAME, B233_REFRAME_EN,
  EMOTIONS_UNIT, LECTURE_UNIT, JURIDIQUE_UNIT, SOINS_UNIT, SCIENCE_UNIT, CALQUER_UNIT,
  EMOTIONS_REF, LECTURE_REF, JURIDIQUE_REF, SOINS_REF, SCIENCE_REF, CALQUER_REF,
  IDEES_REF_PLANNED, NEXT_REF_PLANNED,
} from './faux-amis-savants-corpus.ts';
import { FAUX_AMIS_SAVANTS_TERMS } from './faux-amis-savants-terms.ts';

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
  if (!r) throw new Error(`c1.18: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

for (const id of IMPORT_IDS) {
  if (!SEED.has(id) && !PG.has(id)) throw new Error(`c1.18: import ${id} is in neither the seed nor PG_ROWS`);
}

function ipaOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.ipa) throw new Error(`c1.18: no authored ipa on ${id}`);
  return r.ipa;
}
/** The AUTHORED row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.18: no authored respell on ${id}`);
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

/** A trap card: the CRITICISED version in promptSound (never spoken), the
 *  row's safe French in fr. */
const trap = (id: string, promptLabel: string, promptSound: string, tip: string): TrapCard =>
  ({ promptLabel, promptSound, fr: fr(id), ipa: ipaOf(id), tip });

const STEPS = (ruleTitle: string, cardsTitle: string): TrapStep[] => [
  { label: 'La règle', kind: 'rule', title: ruleTitle },
  { label: 'Six cartes', kind: 'cards', title: cardsTitle },
  { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases sûres' },
  { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
];

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** THE « DANS UN TEXTE » BEAT that closes acts 2 to 11. */
function dansUnTexte(
  id: string, frSub: string, text: string, questions: { q: string; a: string }[], rec: string, terms: string[],
): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true,
    title: 'Dans un texte', frSub, text, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

const B137_FAUX_AMI = 'fr.b1.strategies-de-comprehension.1115';
const B137_ACTU = 'fr.b1.strategies-de-comprehension.1116';
const B137_EVENT = 'fr.b1.strategies-de-comprehension.1118';
const B135_DECEVOIR = 'fr.b1.emotions.1046';
const B227_LOCATION = 'fr.b2.droit.1079';
const B227_EVENT = 'fr.b2.droit.1176';
const B228_PHYSICIEN = 'fr.b2.soins.1160';
const B229_EVIDENCE = 'fr.b2.methode-scientifique.1177';
const B233_CALQUE = 'fr.b2.langue-soignee.1802';
const B233_RESSEMBLE = 'fr.b2.langue-soignee.1835';
const B233_A_DU_SENS = 'fr.b2.langue-soignee.1872';
const B233_SENSE = 'fr.b2.langue-soignee.1856';
const B136_SENS = 'fr.b1.affaires.1139';
const B2_JURIDICTION = 'fr.b2.droit.140';
const B2_EMPREINTE = 'fr.b2.immigration-et-citoyennete.014';
const B2_FRACTURE = 'fr.b2.questions-sociales.041';
const B2_TRANSFO = 'fr.b2.rp-technologie.025';

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE MOT SAVANT QUI TROMPE
 *
 *  The problem: the learner revises one sentence of a colleague's report
 *  and must not keep « initié ». Then the reviser's note, and the recap of
 *  b1.35, b1.37, b2.27, b2.28, b2.29 and b2.33 by trail position, their rows
 *  and six faux-amis bank rows reused by id. NO « ? » OR « ! » IN A BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const INITIE = {
  fr: 'La ville a initié le projet en mars.',
  ipa: '/la vil a i.ni.sje lə pʁɔ.ʒɛ ɑ̃ maʁs/',
  respell: '[la VEEL | a ee-nee-SYAY luh pro-ZHEH | ahⁿ MARSS]',
  en: 'The city initiated the project in March. (Initier in the sense of lancer: criticised by the OQLF and the Académie.)',
};
const LANCE = {
  fr: 'La ville a lancé le projet en mars.',
  ipa: '/la vil a lɑ̃.se lə pʁɔ.ʒɛ ɑ̃ maʁs/',
  respell: '[la VEEL | a lahⁿ-SAY luh pro-ZHEH | ahⁿ MARSS]',
  en: 'The city launched the project in March.',
};

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Une phrase à réviser', frSub: 'Le rapport de Benoît',
  setting: { place: 'Atelier Brière-Sorel, un bureau du Mile End', city: 'Montréal', time: 'lundi, 9 h 15', ambience: 'deux écrans, un café qui refroidit, un rapport ouvert en mode révision' },
  beats: [
    { kind: 'narration', text: 'Montréal, un lundi matin, à l’Atelier Brière-Sorel, une petite agence de rédaction qui travaille aussi pour Lyon. Benoît a écrit un rapport sur un projet de bibliothèque mobile. Odile, la réviseure, est à Lyon ; elle te confie la première page.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Benoît', fr: 'Relis seulement la première phrase. Le reste, Odile s’en occupe.', en: 'Just reread the first sentence. Odile is taking care of the rest.', respell: '[ruh-LEE suhl-MAHⁿ | la pruh-MYEHR FRAHZ | luh REST | o-DEEL | soh-nok-KÜP]', stage: 'Il pose une tasse à côté de ton clavier.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Benoît', fr: 'Le rapport part chez la Fondation ce soir, à Montréal et à Lyon.', en: 'The report goes to the Foundation tonight, in Montréal and in Lyon.', respell: '[luh ra-POR | par shay la fohⁿ-da-SYOHⁿ suh SWAR | a mohⁿ-ray-AL ay a LYOHⁿ]', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'La phrase dit : « La ville a initié le projet en mars. » Le mot ressemble à l’anglais to initiate. Il passe inaperçu, et c’est justement ce qui t’arrête.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle version envoies-tu à la Fondation ?', size: 'lg',
      options: [
        { fr: INITIE.fr, respell: INITIE.respell, en: INITIE.en, outcome: 'breaks', audio: AUDIO },
        { fr: LANCE.fr, respell: LANCE.respell, en: LANCE.en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Odile valide la phrase sans commentaire. Lancé ne prête à aucune critique, à Lyon comme à Montréal.',
        breaks: 'Odile souligne le mot : selon l’OQLF et l’Académie, initier au sens de lancer vient de l’anglais. Personne n’y verra un contresens, mais un lecteur attentif s’y arrêtera.',
      },
    },
    {
      kind: 'break', heading: 'Initier n’est pas lancer',
      body: 'En français, on initie quelqu’un à un savoir. Pour un projet, on le lance. L’emploi au sens de commencer vient de l’anglais, et plusieurs ouvrages le critiquent. EN: In French you introduce someone to a skill; you launch a project.',
      wrong: { fr: INITIE.fr, ipa: INITIE.ipa, respell: INITIE.respell, en: INITIE.en },
      right: { fr: LANCE.fr, ipa: LANCE.ipa, respell: LANCE.respell, en: LANCE.en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Odile t’envoie sa note sur le reste du rapport : six mots savants, d’allure anglaise. Cette leçon t’apprend à les repérer, à dire qui les critique et qui les accepte, puis à les remplacer. À la fin, tu réviseras un texte.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['selon', 'initier'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Repérer le mot savant qui ressemble trop à l’anglais', s: 'Actes 2 à 5 : initier, opportunité, alternative, impacter' },
    { t: 'Choisir le mot juste dans un texte officiel', s: 'Actes 6 à 9 : académique, juridiction, éligible, digital' },
    { t: 'Savoir ce qui divise les ouvrages de référence', s: 'Actes 8 et 10 : éligible, faire sens, questionner' },
    { t: 'Réviser un texte et justifier tes choix', s: 'Actes 11 et 12 : l’oral québécois, puis ta note' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'La note de la réviseure', frSub: 'Lis, et repère les six mots',
  text: LECTURE_REVISION,
  glossary: [
    { word: 'inaperçus', en: 'unnoticed', note: 'Qu’on ne remarque pas.' },
    { word: 'tranchée', en: 'clear-cut', note: 'Une affaire tranchée : sur laquelle tout le monde est d’accord.' },
    { word: 'bute', en: 'stumbles', note: 'Buter sur un mot : s’arrêter, gêné, en le lisant.' },
  ],
  questions: [
    { q: 'Global : que fait Odile dans cette note ?', a: 'Elle signale six mots savants d’allure anglaise dans le rapport de Benoît, propose un remplacement pour chacun et explique pourquoi.' },
    { q: 'Détail : quels sont les trois mots dont l’affaire est tranchée, selon elle ?', a: 'Initié, opportunité et impacteront, remplacés par lancé, occasion et toucheront.' },
    { q: 'Détail : que dit-elle d’« éligible » ?', a: 'Que l’OQLF et l’Académie le déconseillent, mais que Le Robert l’enregistre sans réserve ; elle a choisi « admissible », qui ne divise personne.' },
    { q: 'Inférence : pourquoi choisit-elle chaque fois le mot que personne ne conteste ?', a: 'Parce que le rapport sera lu à Montréal et à Lyon, et qu’un lecteur qui bute sur un mot cesse un instant de suivre les arguments.' },
    { q: 'Position : Odile pense-t-elle que Benoît écrit mal ?', a: 'Non : elle dit que le rapport est solide et qu’elle n’a touché ni au plan ni aux chiffres ; elle parle de risque, pas de pureté.' },
  ],
  audio: REC('rec-c1-18-revision'), say: REFRAME, terms: ['selon'],
};

const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: 'Le B1, le B2 et la banque des faux amis',
  groups: [
    grp('Les faux amis du B1 et du B2', [
      it(B137_FAUX_AMI, `${Cap(LECTURE_REF)} : le mot`),
      it(B135_DECEVOIR, `${Cap(EMOTIONS_REF)} : décevoir`),
      it(B227_LOCATION, `${Cap(JURIDIQUE_REF)} : la location`),
      it(B228_PHYSICIEN, `${Cap(SOINS_REF)} : le physicien`),
      it(B229_EVIDENCE, `${Cap(SCIENCE_REF)} : l’évidence, reprise à ${IDEES_REF_PLANNED}`),
    ], chk('« Décevoir, ce n’est pas tromper. » Ces faux amis-là sont…',
      ['des mots courants, connus du B1 et du B2', 'des mots savants, nouveaux ici'], 0,
      'Ils sont acquis. Ici, les faux amis sont savants : on les trouve dans les rapports, pas dans la conversation. EN: those are known; this lesson is about learned ones.')),
    grp('Le calque, vu au B2', [
      it(B233_CALQUE, `${Cap(CALQUER_REF)} : le calque de mot`),
      it(B233_RESSEMBLE, `${Cap(CALQUER_REF)} : la ressemblance trompe`),
      it(FA(72), 'réaliser : accepté par l’OQLF au sens de se rendre compte'),
      it(FA(46), 'supporter : tolérer, au sens français'),
    ], chk('Un calque de mot donne à un mot français…',
      ['le sens d’un mot anglais qui lui ressemble', 'la prononciation anglaise'], 0,
      `« ${B233_REFRAME} » Les mots de cette leçon sont tous des calques de mot. EN: ${B233_REFRAME_EN}`)),
    ctl('Ce qui change ici', 'Au B2, tu as appris à éviter les calques. Ici, tu apprends surtout…',
      ['à dire qui critique un emploi, et qui l’accepte', 'à traduire un texte entier', 'à repérer les faux amis courants'], 0,
      'Les ouvrages ne sont pas toujours d’accord : à ce niveau, tu le dis. EN: say who criticises and who accepts.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['selon'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', sheetId: 'sheet-sources', title: 'Là où un mot savant coûte quelque chose',
  cases: [
    uc('Tu révises le rapport d’un collègue', E(1008)),
    uc('Tu signales un emploi sans le condamner', E(1002)),
    uc('Tu dis que les ouvrages se partagent', E(1005)),
    uc('Tu écris pour Montréal et pour Lyon à la fois', E(1009)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['selon'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le mot', 'La ville « a initié » un projet. Dans un texte soigné, tu écris…',
    ['qu’elle l’a lancé', 'qu’elle l’a initié', 'qu’elle l’a réalisé'], 0,
    'Lancer ne divise personne. Réaliser dirait qu’elle l’a mené à bien. EN: lancé.'),
  ctl('La méthode', 'Un mot savant ressemble à l’anglais. Avant de l’écrire, tu vérifies…',
    ['son sens français, et qui l’accepte', 'seulement son orthographe'], 0,
    `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('Le renfort', 'Actuellement, éventuellement, la location : dans cette leçon, ces mots sont…',
    ['supposés connus', 'enseignés de nouveau'], 0,
    'Ils viennent du B1 et du B2 : cités, jamais réenseignés. EN: assumed known.'),
], ['selon']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le mot savant qui trompe',
    opener: {
      line: 'Un rapport impeccable et six mots qui ressemblent trop à l’anglais : ici tu découvres les faux amis savants. EN: A flawless report and six words too close to English: here you meet learned false friends.',
      imageRef: 'lessons/faux-amis-savants/act01.jpg',
    },
    sections: [],
    milestone: 'Tu repères un mot savant d’allure anglaise et tu sais qu’il faut demander qui l’accepte. EN: You spot a learned English-looking word and know to ask who accepts it.',
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — INITIER
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a2-histoire', layer: 'core',
  title: 'Qui a lancé l’atelier', frSub: 'Initier, au bon sens',
  setting: 'À la Coopérative du Vieux-Pressoir, Nadia prépare le bulletin de printemps avec Samuel, le mécanicien bénévole.',
  bubbles: [
    { from: 'narrator', fr: 'Nadia relit son brouillon à voix haute. Samuel répare une chambre à air.', en: 'Nadia reads her draft aloud. Samuel is fixing an inner tube.' },
    { from: 'user', fr: 'J’ai écrit que c’est moi qui ai initié l’atelier de réparation.', en: 'I wrote that I was the one who initiated the repair workshop.' },
    { from: 'coach', fr: 'Tu l’as lancé, plutôt. Initier, en français, c’est faire découvrir un savoir à quelqu’un.', en: 'You launched it, rather. In French, initier means introducing someone to a skill.', warn: 'Lancer' },
    { from: 'user', fr: 'Alors c’est toi qui inities les bénévoles aux réglages.', en: 'So you are the one introducing the volunteers to adjustments.' },
    { from: 'coach', fr: fr(E(1019)), en: en(E(1019)), warn: 'Le sens français' },
    { from: 'user', fr: 'Et pour la mairie, j’écris qu’elle a initié les discussions.', en: 'And for the town hall, I write that it initiated the discussions.' },
    { from: 'coach', fr: 'Écris qu’elle a amorcé les discussions, ou qu’elle les a entamées. L’OQLF et l’Académie déconseillent initier en ce sens.', en: 'Write that it began the discussions. The OQLF and the Académie advise against initier in that sense.', warn: 'Amorcer' },
  ],
  closing: { fr: 'On initie quelqu’un à un savoir ; on lance un projet.', en: 'You introduce someone to a skill; you launch a project.' },
  audio: REC('rec-c1-18-nadia'), say: REFRAME, terms: ['initier'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-mots',
  title: 'Quatre façons de commencer', frSub: 'Et le vrai sens d’initier',
  hint: 'Quatre cartes. Pour chaque verbe, demande-toi : qui commence quoi ?',
  audio: REC('rec-c1-18-initier-cartes'), say: REFRAME, terms: ['initier'],
  cards: [
    { head: 'Donner le départ', label: 'lancer', fr: fr(E(1012)), sub: rsOf(E(1012)),
      body: 'Le verbe le plus courant pour un projet, une campagne, une idée. Personne ne le conteste. EN: the everyday verb for starting a project.' },
    { head: 'Les premiers pas', label: 'amorcer, entamer', fr: fr(E(1013)), sub: rsOf(E(1013)),
      body: 'Pour un processus qui commence : des négociations, un dialogue, une réforme. Registre soigné. EN: to begin a process.' },
    { head: 'L’auteur de l’idée', label: 'être à l’origine de', fr: fr(E(1014)), sub: rsOf(E(1014)),
      body: 'Pour dire qui a eu l’idée, qui en est le point de départ. EN: to be the source of.' },
    { head: 'Le sens français', label: 'initier quelqu’un à', fr: fr(E(1015)), sub: rsOf(E(1015)),
      body: 'Faire découvrir un art, une science, une pratique. Correct partout. L’Académie admet aussi initier une réaction chimique, en sciences. EN: to introduce someone to.' },
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-construire', layer: 'core', size: 'lg',
  title: 'Commencer, ou faire découvrir', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Commencer quelque chose', [
      it(E(1016), 'lancer un projet'),
      it(E(1017), 'entamer des négociations'),
      it(E(1018), 'être à l’origine de'),
      it(E(1022), 'mettre sur pied un programme'),
    ], chk('« Les deux syndicats ont entamé les négociations. » Ici, entamer veut dire…',
      ['commencer', 'faire découvrir'], 0,
      'Entamer : commencer. C’est l’un des verbes que l’OQLF propose à la place d’initier. EN: to begin.')),
    grp('Faire découvrir un savoir', [
      it(E(1019), 'le sens français'),
      it(E(1015), 'initier quelqu’un à'),
      it(E(1020), 'en sciences, admis par l’Académie'),
      it(E(1023), 'prendre l’initiative de'),
    ], chk('« Mon grand-père m’a initiée aux échecs. » Cette phrase est…',
      ['correcte partout', 'critiquée par l’OQLF'], 0,
      'Initier quelqu’un à un savoir : c’est le sens français. EN: correct everywhere.')),
    ctl('Le verdict', 'Selon l’OQLF et l’Académie, « initier un projet »…',
      ['est à éviter : dis lancer', 'est parfaitement neutre', 'n’existe qu’en sciences'], 0,
      'Les deux le déconseillent ; le Dictionnaire de l’Académie ajoute que l’emploi n’est pas en soi condamnable, mais abusif. EN: avoid it; say lancer.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['initier'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a2-piege', layer: 'core', swipe: true,
  title: 'Six phrases à reprendre', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Pour un projet, lance ; pour un savoir, initie',
    body: 'Quand quelqu’un commence quelque chose, dis lancer, amorcer, entamer, mettre sur pied, être à l’origine de. Garde initier pour la personne à qui l’on fait découvrir un savoir. EN: start with lancer; keep initier for teaching someone.',
  },
  cards: [
    trap(E(1016), 'initier un projet', 'C’est Léa qui a initié ce projet de jardin partagé.', 'Elle l’a lancé. EN: lancé.'),
    trap(E(1017), 'initier des négociations', 'Les deux syndicats ont initié les négociations lundi.', 'On entame des négociations. EN: entamé.'),
    trap(E(1018), 'initier une pétition', 'Elle a initié la pétition.', 'Elle en est à l’origine. EN: à l’origine de.'),
    trap(E(1022), 'initier un programme', 'La ville a initié un programme d’aide aux aînés.', 'On met sur pied un programme. EN: mis sur pied.'),
    trap(E(1023), 'initier une rencontre', 'Qui a initié cette rencontre ?', 'Prendre l’initiative de. EN: pris l’initiative.'),
    trap(E(1013), 'initier un dialogue', 'initier des négociations', 'Amorcer : faire les premiers pas. EN: amorcer.'),
  ],
  drill: [
    { promptSay: 'C’est Léa qui a … ce projet.', opts: ['lancé', 'initié'], correct: 0 },
    { promptSay: 'Mon grand-père m’a … aux échecs.', opts: ['initiée', 'lancée'], correct: 0 },
    { promptSay: 'Les syndicats ont … les négociations.', opts: ['entamé', 'initié'], correct: 0 },
    { promptSay: 'Elle est … de la pétition.', opts: ['à l’origine', 'l’initiée'], correct: 0 },
    { promptSay: 'La ville a … un programme d’aide.', opts: ['mis sur pied', 'initié'], correct: 0 },
    { promptSay: 'Samuel … les bénévoles aux réglages.', opts: ['initie', 'lance'], correct: 0 },
    { promptSay: 'Qui a pris … de cette rencontre ?', opts: ['l’initiative', 'l’initiation'], correct: 0 },
    { promptSay: 'Le conseil a … des discussions avec la mairie.', opts: ['amorcé', 'initié'], correct: 0 },
  ],
  steps: STEPS('Pour un projet, lance ; pour un savoir, initie', 'Six phrases à reprendre'),
  audio: REC('rec-c1-18-piege-initier'), say: REFRAME, terms: ['initier'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a2-ecoute', layer: 'core', hideLines: true,
  title: 'Huit phrases entendues', frSub: 'Écoute, puis réponds',
  lines: [
    ln(E(1016)), ln(E(1017)), ln(E(1018)), ln(E(1019)),
    ln(E(1020)), ln(E(1022)), ln(E(1023)), ln(E(1013)),
  ],
  questions: [
    { q: 'Première phrase : qu’a fait Léa ?', opts: ['elle a lancé un projet', 'elle a appris le jardinage'], correct: 0, why: 'Lancer : donner le départ. EN: she launched it.' },
    { q: 'Quatrième phrase : qu’a fait le grand-père ?', opts: ['il a fait découvrir les échecs', 'il a fondé un club'], correct: 0, why: 'Initier quelqu’un à : le sens français. EN: he taught her chess.' },
    { q: 'Cinquième phrase : dans quel domaine initier une réaction est-il admis ?', opts: ['en chimie', 'en politique'], correct: 0, why: 'L’Académie enregistre ce sens en sciences. EN: in chemistry.' },
    { q: 'Sixième phrase : quelle tournure remplace initier un programme ?', opts: ['mettre sur pied', 'prendre part à', 'mettre fin à'], correct: 0, why: 'Mettre sur pied : organiser, créer. EN: set up.' },
    { q: 'Septième phrase : que demande-t-on ?', opts: ['qui a pris l’initiative', 'qui a été initié'], correct: 0, why: 'Prendre l’initiative de : être le premier à agir. EN: who took the initiative.' },
  ],
  audio: REC('rec-c1-18-initier-ecoute'), say: REFRAME, terms: ['initier'],
};

const A2_TEXTE = dansUnTexte('a2-texte', 'Lire : le bulletin d’une coopérative', TEXTE_A2, [
  { q: 'Qui a lancé l’idée de l’atelier ?', a: 'Nadia Ferhat.' },
  { q: 'Quel verbe dit ce qu’a fait le conseil avec la mairie ?', a: 'Amorcer : le conseil a amorcé des discussions.' },
  { q: 'Où initier est-il employé, et dans quel sens ?', a: 'Samuel a accepté d’initier les bénévoles aux réglages : il leur fait découvrir un savoir, le sens français.' },
  { q: 'Quelle tournure dit qui a créé le système d’inscription ?', a: 'Mettre sur pied : nous avons mis sur pied un système d’inscription.' },
], 'rec-c1-18-texte-a2', ['initier']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le projet', 'Tu dis qui a donné le départ d’un projet. Tu écris qu’il l’a…',
    ['lancé', 'initié'], 0, 'Lancer ne divise personne. EN: lancé.'),
  ctl('Le savoir', '« Elle m’a initié à la photographie. » Cette phrase est…',
    ['correcte partout', 'déconseillée'], 0, 'Faire découvrir un savoir : le sens français. EN: correct.'),
  ctl('La source', 'Qui déconseille initier au sens de commencer ?',
    ['l’OQLF et l’Académie', 'personne', 'seulement Le Robert'], 0,
    'L’OQLF et l’Académie ; Le Robert n’enregistre pas ce sens. EN: the OQLF and the Académie.'),
], ['initier']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Initier',
    opener: {
      line: 'Un atelier de vélos lancé au printemps : ici tu sépares initier quelqu’un à un savoir et lancer un projet. EN: A bike workshop launched in spring: here you separate introducing someone to a skill from launching a project.',
      imageRef: 'lessons/faux-amis-savants/act02.jpg',
    },
    sections: [],
    milestone: 'Tu lances, amorces et entames sans initier, et tu inities quelqu’un à un savoir. EN: You launch and begin without initier, and keep initier for teaching.',
    estScreens: 38, restPoints: ['a2-construire', 'a2-ecoute'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_CONSTRUIRE, A2_PIEGE, A2_ECOUTE, A2_TEXTE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — OPPORTUNITÉ
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a3-histoire', layer: 'core',
  title: 'Une lettre de candidature', frSub: 'Occasion, chance, opportunité',
  setting: 'Maxime relit avec Odile, en visioconférence, la lettre qu’il envoie pour un poste à Lyon.',
  bubbles: [
    { from: 'narrator', fr: 'Sur l’écran partagé, une lettre de motivation. Odile a surligné deux mots.', en: 'On the shared screen, a cover letter. Odile has highlighted two words.' },
    { from: 'user', fr: 'J’écris que ce poste serait une belle opportunité pour moi.', en: 'I write that this job would be a fine opportunity for me.' },
    { from: 'coach', fr: 'Pour l’Académie, c’est un anglicisme. Le Robert l’enregistre, mais à Lyon, occasion ne fera tiquer personne.', en: 'For the Académie it is an anglicism. Le Robert records it, but in Lyon occasion will not bother anyone.', warn: 'Occasion' },
    { from: 'user', fr: 'Et plus loin, je parle des opportunités de carrière dans votre groupe.', en: 'And further on I mention career opportunities in your group.' },
    { from: 'coach', fr: 'Là, dis perspectives de carrière. L’OQLF déconseille ce pluriel.', en: 'There, say perspectives de carrière. The OQLF advises against that plural.', warn: 'Perspectives' },
    { from: 'user', fr: 'Alors opportunité ne sert plus à rien.', en: 'So opportunité is no use any more.' },
    { from: 'coach', fr: fr(E(1031)), en: en(E(1031)), warn: 'Le sens français' },
  ],
  closing: { fr: 'Une occasion se saisit ; l’opportunité d’une décision se discute.', en: 'An occasion is seized; the timeliness of a decision is debated.' },
  audio: REC('rec-c1-18-maxime'), say: REFRAME, terms: ['opportunite'],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-table', layer: 'core', sheetId: 'sheet-mots',
  title: 'Six mots pour une circonstance favorable',
  cols: ['Mot', 'Il dit', 'Exemple'],
  rows: [
    { cells: ['une occasion', 'une circonstance qui tombe bien', 'saisir l’occasion'], say: fr(E(1028)),
      detail: { title: 'L’occasion', body: 'On la saisit, on la guette, on la laisse passer. C’est le mot que proposent l’Académie et l’OQLF. EN: the safe word for a chance.', say: fr(E(1034)) } },
    { cells: ['la chance de', 'une circonstance heureuse', 'avoir la chance de'], say: fr(E(1029)),
      detail: { title: 'La chance', body: 'Avoir la chance de + infinitif : ce qui a permis quelque chose. EN: to have the chance to.', say: fr(E(1029)) } },
    { cells: ['des perspectives', 'un avenir possible', 'perspectives de carrière'], say: fr(E(1026)),
      detail: { title: 'Les perspectives', body: 'Au pluriel, pour l’avenir professionnel. L’OQLF déconseille opportunités de carrière. EN: prospects.', say: fr(E(1026)) } },
    { cells: ['des débouchés', 'des emplois accessibles', 'un secteur qui embauche'], say: fr(E(1030)),
      detail: { title: 'Les débouchés', body: 'Les métiers auxquels mène une formation ou un secteur. EN: openings.', say: fr(E(1030)) } },
    { cells: ['un moment propice', 'le bon moment', 'window of opportunity'], say: fr(E(1035)),
      detail: { title: 'Le moment propice', body: 'Usito propose moment propice, occasion rêvée pour fenêtre d’opportunité, qu’il critique. EN: the right moment.', say: fr(E(1035)) } },
    { cells: ['l’opportunité de', 'le caractère opportun', 'l’opportunité d’une mesure'], say: fr(E(1031)),
      detail: { title: 'Le sens français', body: 'Ce qui vient à propos. On juge, on discute de l’opportunité d’une décision. Correct partout. EN: timeliness.', say: fr(E(1027)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['opportunite'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-construire', layer: 'core', size: 'lg',
  title: 'Une occasion, ou ce qui vient à propos', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Une circonstance favorable', [
      it(E(1024), 'saisir l’occasion'),
      it(E(1028), 'une belle occasion'),
      it(E(1032), 'avoir l’occasion de'),
      it(E(1025), 'avoir la chance de'),
    ], chk('« C’était une belle … de montrer ce que je sais faire. » Le mot que personne ne conteste :',
      ['occasion', 'opportunité'], 0,
      'Occasion ne divise personne ; opportunité en ce sens est critiqué par l’Académie et l’OQLF. EN: occasion.')),
    grp('L’avenir, et le caractère opportun', [
      it(E(1026), 'des perspectives'),
      it(E(1030), 'des débouchés'),
      it(E(1027), 'le sens français'),
      it(E(1031), 'douter de l’opportunité'),
    ], chk('« Le conseil doute de l’opportunité de cette dépense. » Cette phrase…',
      ['emploie opportunité au sens français', 'calque l’anglais opportunity'], 0,
      'Le conseil se demande si la dépense vient à propos : c’est le sens français. EN: French sense.')),
    ctl('Le verdict', 'Opportunité au sens d’occasion : que disent les ouvrages ?',
      ['ils se partagent : l’Académie le condamne, Le Robert l’enregistre', 'tous l’acceptent', 'tous le condamnent'], 0,
      'Académie : un anglicisme ; OQLF : critiqué ; Le Robert : enregistré, marqué anglicisme ; Usito : parfois critiqué. EN: they differ.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['opportunite', 'selon'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a3-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre phrases d’offre d’emploi',
  errors: [
    { wrong: 'C’était une belle opportunité de montrer ce que je sais faire.', right: fr(E(1028)),
      why: 'Normal : opportunity est partout en anglais, et Le Robert l’enregistre. Mais l’Académie y voit un anglicisme : occasion est sûr. EN: occasion is safe.' },
    { wrong: 'Ce secteur offre beaucoup d’opportunités aux jeunes diplômés.', right: fr(E(1030)),
      why: 'Normal : job opportunities se traduit mot à mot. L’OQLF déconseille ce pluriel ; dis débouchés ou perspectives. EN: débouchés.' },
    { wrong: 'J’ai eu l’opportunité de lui parler avant son départ.', right: fr(E(1029)),
      why: 'Normal : la tournure anglaise est la même. L’OQLF propose avoir la chance de, ou l’occasion de. EN: la chance de.' },
    { wrong: 'Ne laisse pas passer une opportunité pareille.', right: fr(E(1034)),
      why: 'Normal : le mot est fréquent dans la presse. Une occasion se laisse passer : c’est l’expression que l’Académie donne en exemple. EN: occasion.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['opportunite'],
};

const A3_HACKS: Sec<'hacks'> = {
  type: 'hacks', id: 'a3-hacks', layer: 'core', title: 'Trois réflexes avant d’écrire opportunité',
  hacks: [
    { hack: 'Remplace par occasion. Si la phrase tient, garde occasion.', why: 'Occasion couvre presque tous les emplois critiqués, et personne ne le conteste. EN: try occasion first.' },
    { hack: 'Au pluriel, pense à l’avenir : perspectives, débouchés, possibilités.', why: 'C’est le pluriel que l’OQLF et Usito critiquent le plus nettement. EN: think prospects.' },
    { hack: 'Garde opportunité pour juger d’une décision : l’opportunité d’une mesure.', why: 'C’est le sens français, que tous les ouvrages donnent. EN: keep the French sense.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['opportunite'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Lire : un brouillon à reprendre', TEXTE_A3, [
  { q: 'Quels sont les deux emplois critiqués ?', a: '« une opportunité de vous former » (occasion) et « de réelles opportunités de carrière » (perspectives, débouchés).' },
  { q: 'Quel emploi d’opportunité est correct, et pourquoi ?', a: '« l’opportunité d’ouvrir une deuxième place » : le comité se demande si c’est à propos, le sens français.' },
  { q: 'Quelle tournure du texte est déjà juste pour une circonstance heureuse ?', a: '« vous donnera la chance d’écrire chaque semaine ».' },
  { q: 'Comment réécrirais-tu la première phrase ?', a: 'Par exemple : « Vous cherchez une occasion de vous former au journalisme ? »' },
], 'rec-c1-18-texte-a3', ['opportunite']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('L’occasion', 'Pour une circonstance favorable, le mot que personne ne conteste :',
    ['une occasion', 'une opportunité'], 0, 'Occasion. EN: occasion.'),
  ctl('Le pluriel', '« Opportunités de carrière » : l’OQLF propose…',
    ['perspectives de carrière', 'occasions de carrière', 'chances de carrière'], 0,
    'Perspectives, ou débouchés. EN: career prospects.'),
  ctl('Le partage', 'Le Robert, pour opportunité au sens d’occasion…',
    ['l’enregistre, marqué anglicisme', 'ne le mentionne pas'], 0,
    'Il l’enregistre : les ouvrages se partagent. EN: it records it.'),
], ['opportunite']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Opportunité',
    opener: {
      line: 'Une lettre de candidature pour Lyon : ici tu choisis entre occasion, perspectives et l’opportunité d’une mesure. EN: A cover letter for Lyon: here you choose between occasion, prospects and the timeliness of a measure.',
      imageRef: 'lessons/faux-amis-savants/act03.jpg',
    },
    sections: [],
    milestone: 'Tu saisis une occasion, tu parles de perspectives, et tu sais pourquoi les ouvrages se partagent sur opportunité. EN: You seize an occasion, speak of prospects, and know why authorities differ on opportunité.',
    estScreens: 38, restPoints: ['a3-table', 'a3-erreurs'],
  },
  sections: [A3_HISTOIRE, A3_TABLE, A3_CONSTRUIRE, A3_ERREURS, A3_HACKS, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — ALTERNATIVE
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a4-histoire', layer: 'core',
  title: 'Le pavillon sans chauffage', frSub: 'Une alternative, trois options',
  setting: 'Au cégep de la Haute-Rivière, la directrice des études prépare un courriel avec son adjoint après une panne de chauffage.',
  bubbles: [
    { from: 'narrator', fr: 'Il fait douze degrés dans le pavillon B. Le courriel doit partir avant midi.', en: 'It is twelve degrees in building B. The email has to go out before noon.' },
    { from: 'user', fr: 'J’écris que nous avons trois alternatives pour les cours.', en: 'I am writing that we have three alternatives for the classes.' },
    { from: 'coach', fr: 'Trois options. Au sens strict, l’alternative, c’est le choix entre deux.', en: 'Three options. Strictly speaking, an alternative is the choice between two.', warn: 'Option' },
    { from: 'user', fr: 'D’accord. Et pour les labos, il n’y a pas d’alternative.', en: 'All right. And for the labs, there is no alternative.' },
    { from: 'coach', fr: 'Il n’y a pas de solution de rechange. L’OQLF et Le Robert critiquent alternative dans ce sens.', en: 'There is no fallback. The OQLF and Le Robert criticise alternative in that sense.', warn: 'De rechange' },
    { from: 'user', fr: 'Alors je garde le mot pour le choix de départ : fermer ou déplacer.', en: 'Then I keep the word for the first choice: close or move.' },
    { from: 'coach', fr: fr(E(1042)), en: en(E(1042)), warn: 'Le sens strict' },
  ],
  closing: { fr: 'Une alternative, c’est deux branches ; chaque branche est une option.', en: 'An alternative has two branches; each branch is an option.' },
  audio: REC('rec-c1-18-cegep'), say: REFRAME, terms: ['alternative'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-mots',
  title: 'Le choix et ses branches', frSub: 'Alternative au sens strict',
  hint: 'Quatre cartes. Compte les possibilités : deux, ou plus ?',
  audio: REC('rec-c1-18-alternative-cartes'), say: REFRAME, terms: ['alternative'],
  cards: [
    { head: 'Le choix entre deux', label: 'l’alternative', fr: fr(E(1038)), sub: rsOf(E(1038)),
      body: 'Le sens français, que donne l’Académie : un choix nécessaire entre deux solutions qui s’excluent. EN: the choice between two.' },
    { head: 'Une des branches', label: 'une option', fr: fr(E(1037)), sub: rsOf(E(1037)),
      body: 'Chaque possibilité est une option, une solution, une possibilité. EN: each possibility is an option.' },
    { head: 'Ce qui remplace', label: 'de rechange', fr: fr(E(1036)), sub: rsOf(E(1036)),
      body: 'Pour an alternative, au sens de plan B : une solution de rechange, de remplacement. EN: a fallback.' },
    { head: 'Le verdict', label: 'selon les ouvrages', fr: fr(E(1044)), sub: rsOf(E(1044)),
      body: 'L’OQLF déconseille alternative au sens d’option, Le Robert le marque emploi critiqué, Usito aussi. Deux alternatives est un pléonasme. EN: criticised by all three.' },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-construire', layer: 'core', size: 'lg',
  title: 'Deux branches, ou plusieurs options', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Des options, des solutions', [
      it(E(1041), 'trois options'),
      it(E(1040), 'la solution de rechange'),
      it(E(1046), 'deux solutions possibles'),
      it(E(1047), 'une autre possibilité'),
    ], chk('Le comité propose deux solutions. Il propose donc…',
      ['deux options', 'deux alternatives'], 0,
      'Deux alternatives est un pléonasme selon l’OQLF : chaque solution est une option. EN: two options.')),
    grp('Le choix lui-même', [
      it(E(1042), 'l’alternative au sens strict'),
      it(E(1038), 'se trouver devant une alternative'),
      it(E(1043), 'pas d’autre solution'),
      it(E(1045), 'remplacer, sans le nom'),
    ], chk('« L’alternative est simple : partir ce soir ou attendre lundi. » Cette phrase est…',
      ['correcte partout', 'critiquée par l’OQLF'], 0,
      'Deux branches qui s’excluent : le sens que donne l’Académie. EN: correct.')),
    ctl('Le verdict', 'Alternative au sens d’option : qui le critique ?',
      ['l’OQLF, Le Robert et Usito', 'personne', 'seulement l’Académie'], 0,
      'Les trois le critiquent ; l’Académie ne donne que le choix entre deux. EN: all three.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['alternative'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a4-piege', layer: 'core', swipe: true,
  title: 'Six phrases à reprendre', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Deux branches font une alternative ; chaque branche est une option',
    body: 'Si tu comptes des possibilités, dis options, solutions, possibilités. Si tu cherches un plan B, dis solution de rechange. Garde alternative pour le choix entre deux. EN: count options; keep alternative for the two-way choice.',
  },
  cards: [
    trap(E(1041), 'trois alternatives', 'Nous avons trois alternatives, et aucune n’est parfaite.', 'Trois options. EN: options.'),
    trap(E(1040), 'une alternative = plan B', 'Si le train est annulé, quelle est l’alternative ?', 'La solution de rechange. EN: fallback.'),
    trap(E(1047), 'une alternative de traitement', 'La clinique offre une alternative de traitement.', 'Une autre possibilité. EN: possibilité.'),
    trap(E(1046), 'deux alternatives', 'Le comité propose deux alternatives possibles.', 'Pléonasme, selon l’OQLF : deux solutions. EN: solutions.'),
    trap(E(1045), 'une alternative au beurre', 'Cette crème végétale est une bonne alternative au beurre.', 'Elle remplace bien le beurre. EN: remplace.'),
    trap(E(1039), 'une alternative à', 'Il nous faut une alternative à ce fournisseur.', 'Une solution de remplacement, ou un autre fournisseur. EN: a replacement.'),
  ],
  drill: [
    { promptSay: 'Nous avons trois … , et aucune n’est parfaite.', opts: ['options', 'alternatives'], correct: 0 },
    { promptSay: 'Quelle est la solution de … ?', opts: ['rechange', 'alternative'], correct: 0 },
    { promptSay: 'Partir ou attendre : l’… est simple.', opts: ['alternative', 'option'], correct: 0 },
    { promptSay: 'La clinique offre une autre … de traitement.', opts: ['possibilité', 'alternative'], correct: 0 },
    { promptSay: 'Le comité propose deux … possibles.', opts: ['solutions', 'alternatives'], correct: 0 },
    { promptSay: 'Cette crème … bien le beurre.', opts: ['remplace', 'alterne'], correct: 0 },
    { promptSay: 'Si le car ne vient pas, prévois une solution de … .', opts: ['rechange', 'option'], correct: 0 },
    { promptSay: 'Il se trouvait devant une … : se taire ou partir.', opts: ['alternative', 'option'], correct: 0 },
  ],
  steps: STEPS('Deux branches font une alternative', 'Six phrases à reprendre'),
  audio: REC('rec-c1-18-piege-alternative'), say: REFRAME, terms: ['alternative'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a4-exemples', layer: 'core', sheetId: 'sheet-mots',
  title: 'Cinq façons de proposer un autre choix', frSub: 'Sans le mot critiqué',
  examples: [
    ex(E(1039), 'proposée par l’OQLF et Le Robert'),
    ex(E(1036), 'le plan B'),
    ex(E(1037), 'une des branches'),
    ex(E(1045), 'le verbe, sans aucun nom'),
    ex(E(1047), 'pour un traitement, une offre'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['alternative'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Lire : le courriel d’une direction', TEXTE_A4, [
  { q: 'Quelle est la vraie alternative, au sens strict ?', a: 'Fermer le pavillon trois jours ou déplacer tous les cours : deux branches qui s’excluent.' },
  { q: 'Pourquoi le texte dit-il « trois options » et non « trois alternatives » ?', a: 'Parce que chaque possibilité est une option ; l’alternative est le choix entre deux.' },
  { q: 'Quelle tournure dit qu’il n’y a pas de plan B pour les laboratoires ?', a: '« Il n’y a pas de solution de rechange. »' },
  { q: 'Que doivent faire les enseignants ?', a: 'Indiquer leur choix entre la bibliothèque, la grande salle ou un cours à distance, avant le lendemain midi.' },
], 'rec-c1-18-texte-a4', ['alternative']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Les options', 'Quatre possibilités s’offrent à toi. Tu as…',
    ['quatre options', 'quatre alternatives'], 0, 'Quatre options. EN: four options.'),
  ctl('Le plan B', 'Pour an alternative au sens de plan B, tu écris…',
    ['une solution de rechange', 'une alternative', 'une option alternative'], 0,
    'Solution de rechange, ou de remplacement. EN: a fallback.'),
  ctl('Le sens strict', 'L’alternative, au sens de l’Académie, c’est…',
    ['le choix entre deux solutions', 'chacune des solutions'], 0,
    'Le choix lui-même, entre deux. EN: the choice between two.'),
], ['alternative']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Alternative',
    opener: {
      line: 'Un pavillon sans chauffage et des cours à déplacer : ici tu comptes les branches avant de dire alternative. EN: A building without heating and classes to move: here you count the branches before saying alternative.',
      imageRef: 'lessons/faux-amis-savants/act04.jpg',
    },
    sections: [],
    milestone: 'Tu proposes des options et des solutions de rechange, et tu gardes alternative pour le choix entre deux. EN: You offer options and fallbacks, and keep alternative for the two-way choice.',
    estScreens: 38, restPoints: ['a4-construire', 'a4-exemples'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_PIEGE, A4_EXEMPLES, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — IMPACTER
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a5-histoire', layer: 'core',
  title: 'Les travaux de la rue Principale', frSub: 'Un verbe qui dit l’effet',
  setting: 'À la rédaction de L’Écho des Prés, une stagiaire relit son article avec le rédacteur en chef.',
  bubbles: [
    { from: 'narrator', fr: 'L’article paraît demain. Le titre est déjà choisi ; la première phrase hésite encore.', en: 'The article comes out tomorrow. The headline is chosen; the first sentence is still hesitating.' },
    { from: 'user', fr: 'J’ai écrit que les travaux impactent les commerces du centre.', en: 'I wrote that the roadworks impact the shops in the centre.' },
    { from: 'coach', fr: 'L’Académie y voit une forme fautive, l’OQLF le déconseille. Et surtout, impacter ne dit pas comment.', en: 'The Académie calls it a faulty form, the OQLF advises against it. Above all, impacter does not say how.', warn: 'Impacter' },
    { from: 'user', fr: 'Pourtant Le Robert l’enregistre.', en: 'But Le Robert records it.' },
    { from: 'coach', fr: 'Oui, comme anglicisme. Les ouvrages se partagent ; un verbe précis, lui, ne divise personne.', en: 'Yes, as an anglicism. The authorities differ; a precise verb divides nobody.', warn: 'Le partage' },
    { from: 'user', fr: 'Alors la fermeture du stationnement touche surtout la boulangerie.', en: 'So the car park closure mainly hits the bakery.' },
    { from: 'coach', fr: fr(E(1053)), en: en(E(1053)), warn: 'Une incidence' },
  ],
  closing: { fr: 'Le verbe précis dit l’effet : toucher, ralentir, faire baisser, peser sur.', en: 'The precise verb says the effect: hit, slow down, bring down, weigh on.' },
  audio: REC('rec-c1-18-echo'), say: REFRAME, terms: ['impacter'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-mots',
  title: 'Quatre verbes qui disent l’effet', frSub: 'À la place d’impacter',
  hint: 'Quatre cartes. Demande-toi : quel effet, exactement ?',
  audio: REC('rec-c1-18-impacter-cartes'), say: REFRAME, terms: ['impacter'],
  cards: [
    { head: 'Atteindre', label: 'toucher', fr: fr(E(1048)), sub: rsOf(E(1048)),
      body: 'Le verbe le plus simple : une crise touche des gens, des secteurs. EN: to hit.' },
    { head: 'Une conséquence', label: 'avoir une incidence sur', fr: fr(E(1049)), sub: rsOf(E(1049)),
      body: 'Registre soigné, très courant dans la presse et les rapports. EN: to have an effect on.' },
    { head: 'Par contrecoup', label: 'se répercuter sur', fr: fr(E(1050)), sub: rsOf(E(1050)),
      body: 'L’effet passe d’un point à un autre : une grève se répercute sur tout le réseau. EN: knock-on effects.' },
    { head: 'Une charge', label: 'peser sur', fr: fr(E(1051)), sub: rsOf(E(1051)),
      body: 'L’effet rend les choses plus lourdes, plus difficiles : peser sur un budget. EN: to weigh on.' },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-construire', layer: 'core', size: 'lg',
  title: 'Dire l’effet, sans impacter', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Toucher, peser, se répercuter', [
      it(E(1052), 'toucher'),
      it(E(1054), 'se répercuter'),
      it(E(1055), 'concerner'),
      it(E(1051), 'peser sur'),
    ], chk('« La grève s’est répercutée sur tout le réseau. » L’effet…',
      ['est passé d’un point à un autre', 'est resté au même endroit'], 0,
      'Se répercuter : par contrecoup. EN: a knock-on effect.')),
    grp('Le verbe qui dit comment', [
      it(E(1056), 'ralentir'),
      it(E(1059), 'faire baisser'),
      it(E(1053), 'une incidence'),
      it(E(1058), 'quel effet'),
    ], chk('Pour la pluie qui a vidé un festival, le verbe le plus précis :',
      ['faire baisser la fréquentation', 'avoir un impact'], 0,
      'Il dit dans quel sens et sur quoi : la fréquentation a baissé. EN: the precise verb.')),
    ctl('Le verdict', 'Impacter, selon les ouvrages :',
      ['l’Académie et l’OQLF le condamnent ; Le Robert l’enregistre', 'tous l’acceptent', 'aucun ne le mentionne'], 0,
      'Les ouvrages se partagent ; Usito le dit parfois critiqué. EN: they differ.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['impacter', 'selon'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a5-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre phrases de presse à préciser',
  errors: [
    { wrong: 'La hausse du carburant impacte d’abord les livreurs.', right: fr(E(1052)),
      why: 'Normal : impact est partout dans les médias. Mais l’Académie juge le verbe fautif ; toucher dit la même chose, sans débat. EN: touche.' },
    { wrong: 'La grève a impacté tout le réseau.', right: fr(E(1054)),
      why: 'Normal : impacter semble couvrir tous les effets. Se répercuter dit comment : de proche en proche. EN: s’est répercutée.' },
    { wrong: 'Le froid a impacté les chantiers tout l’hiver.', right: fr(E(1056)),
      why: 'Normal : on hésite sur le verbe exact. Le froid les a ralentis : c’est plus précis et personne ne le conteste. EN: ralenti.' },
    { wrong: 'La pluie a impacté la fréquentation.', right: fr(E(1059)),
      why: 'Normal : impacter évite de dire dans quel sens. Faire baisser le dit, avec la mesure. EN: fait baisser.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['impacter'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a5-dictee', layer: 'core',
  title: 'Écris l’effet que tu entends', frSub: 'Deux phrases',
  itemIds: dicteeFor(5),
  audio: AUDIO, say: REFRAME, terms: ['impacter'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Lire : un article de journal local', TEXTE_A5, [
  { q: 'Quels verbes ou tournures disent l’effet des travaux ?', a: 'Avoir une incidence sur, toucher, se répercuter sur.' },
  { q: 'Quels commerces la fermeture du stationnement a-t-elle surtout touchés, et pourquoi ?', a: 'La boulangerie et la quincaillerie, dont la clientèle vient en voiture.' },
  { q: 'Sur quoi le retard du chantier se répercute-t-il ?', a: 'Sur le budget de la ville, qui devra payer des heures supplémentaires.' },
  { q: 'Pourquoi « toucher » est-il plus précis qu’impacter ici ?', a: 'Il dit qui subit l’effet, et il ne divise aucun ouvrage de référence.' },
], 'rec-c1-18-texte-a5', ['impacter']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le verbe', 'Une crise atteint les petits commerces. Elle les…',
    ['touche', 'impacte'], 0, 'Toucher : personne ne le conteste. EN: touche.'),
  ctl('Le soigné', 'En registre soigné, une mesure a… sur les prix.',
    ['une incidence', 'un impacteur', 'une impaction'], 0,
    'Avoir une incidence sur. EN: an effect.'),
  ctl('Le partage', 'Le Robert, pour impacter…',
    ['l’enregistre, marqué anglicisme', 'le condamne'], 0,
    'Il l’enregistre ; l’Académie le condamne. EN: it records it.'),
], ['impacter']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Impacter',
    opener: {
      line: 'Une rue en travaux et des commerçants inquiets : ici tu remplaces impacter par le verbe qui dit l’effet. EN: A street under repair and worried shopkeepers: here you replace impacter with the verb that says the effect.',
      imageRef: 'lessons/faux-amis-savants/act05.jpg',
    },
    sections: [],
    milestone: 'Tu dis qu’une mesure touche, pèse ou se répercute, et tu sais pourquoi impacter divise. EN: You say a measure hits, weighs or has knock-on effects, and know why impacter divides.',
    estScreens: 36, restPoints: ['a5-construire', 'a5-dictee'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_CONSTRUIRE, A5_ERREURS, A5_DICTEE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — ACADÉMIQUE ET VERSATILE
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a6-histoire', layer: 'core',
  title: 'Une annonce pour Genève', frSub: 'Deux adjectifs savants',
  setting: 'Un centre de recherche genevois a confié à l’Atelier la relecture d’une offre d’emploi. Odile en parle avec Benoît.',
  bubbles: [
    { from: 'narrator', fr: 'L’offre doit paraître lundi, en Suisse et au Québec.', en: 'The job ad must appear on Monday, in Switzerland and in Québec.' },
    { from: 'user', fr: 'Ils demandent un assistant versatile, avec une solide formation académique.', en: 'They want a versatile assistant with a solid academic background.' },
    { from: 'coach', fr: 'Versatile, en français, c’est quelqu’un qui change d’avis. Pour plusieurs tâches, dis polyvalent.', en: 'In French, versatile means someone who keeps changing their mind. For several tasks, say polyvalent.', warn: 'Polyvalent' },
    { from: 'user', fr: 'Et formation académique.', en: 'And formation académique.' },
    { from: 'coach', fr: 'Formation universitaire. L’Académie et l’OQLF déconseillent académique au sens d’universitaire.', en: 'Formation universitaire. The Académie and the OQLF advise against académique meaning university.', warn: 'Universitaire' },
    { from: 'user', fr: 'Pourtant, à Liège, mon université parle de calendrier académique.', en: 'And yet in Liège my university talks about the calendrier académique.' },
    { from: 'coach', fr: 'C’est vrai, c’est l’usage des universités belges. Pour un texte lu partout, universitaire ne divise personne.', en: 'True, that is how Belgian universities write. For a text read everywhere, universitaire divides nobody.', warn: 'Usage' },
  ],
  closing: { fr: 'Pour l’université, universitaire ; pour plusieurs tâches, polyvalent.', en: 'For the university, universitaire; for several tasks, polyvalent.' },
  audio: REC('rec-c1-18-geneve'), say: REFRAME, terms: ['academique'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a6-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-mots',
  title: 'Deux adjectifs, deux sens français', frSub: 'Académique, versatile',
  hint: 'Quatre cartes : deux pour le mot sûr, deux pour le sens français.',
  audio: REC('rec-c1-18-academique-cartes'), say: REFRAME, terms: ['academique'],
  cards: [
    { head: 'L’université', label: 'universitaire', fr: fr(E(1064)), sub: rsOf(E(1064)),
      body: 'Année universitaire, travaux universitaires, formation universitaire. À l’école : scolaire. EN: university, school.' },
    { head: 'Le sens français', label: 'académique', fr: fr(E(1066)), sub: rsOf(E(1066)),
      body: 'D’une académie, ou trop conventionnel. En France, une académie est aussi une circonscription scolaire : l’inspection académique. EN: conventional; of an academy.' },
    { head: 'Plusieurs usages', label: 'polyvalent', fr: fr(E(1067)), sub: rsOf(E(1067)),
      body: 'Un outil, une personne capable de plusieurs tâches. Aussi souple, flexible. EN: versatile.' },
    { head: 'Le sens français', label: 'versatile', fr: fr(E(1068)), sub: rsOf(E(1068)),
      body: 'Qui change facilement d’avis, selon Le Robert. L’OQLF et Usito critiquent le sens de polyvalent. EN: fickle.' },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-construire', layer: 'core', size: 'lg',
  title: 'Universitaire ou académique, polyvalent ou versatile', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('L’école et l’université', [
      it(E(1060), 'l’année universitaire'),
      it(E(1061), 'le dossier scolaire'),
      it(E(1062), 'une formation universitaire'),
      it(E(1065), 'des travaux universitaires'),
    ], chk('Pour academic year, à l’université, tu écris…',
      ['l’année universitaire', 'l’année académique'], 0,
      'L’OQLF a officialisé année universitaire et année scolaire ; l’Académie déconseille académique en ce sens. EN: année universitaire.')),
    grp('Plusieurs tâches, ou un avis qui change', [
      it(E(1063), 'polyvalent'),
      it(E(1071), 'souple'),
      it(E(1068), 'versatile, au sens français'),
      it(E(1066), 'académique, au sens français'),
    ], chk('« L’opinion publique s’est montrée versatile. » Cela veut dire qu’elle…',
      ['a souvent changé d’avis', 'savait tout faire'], 0,
      'Versatile : changeant. C’est le sens français. EN: it kept changing.')),
    ctl('Le partage', 'En Belgique, les universités écrivent calendrier académique. C’est…',
      ['un usage réel, que l’Académie et l’OQLF déconseillent', 'une faute pour tout le monde', 'la seule forme correcte'], 0,
      'Un usage n’est pas un avis d’autorité : dis-le tel quel. EN: a real usage, criticised by some.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['academique', 'selon'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a6-piege', layer: 'core', swipe: true,
  title: 'Six phrases à reprendre', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Universitaire pour l’université, polyvalent pour plusieurs tâches',
    body: 'Académique renvoie à une académie ou à un style convenu. Versatile se dit de qui change d’avis. Pour le sens anglais, dis universitaire, scolaire, polyvalent, souple. EN: say universitaire and polyvalent.',
  },
  cards: [
    trap(E(1064), 'l’année académique', 'L’année académique commence début septembre.', 'L’année universitaire. EN: universitaire.'),
    trap(E(1065), 'des travaux académiques', 'Elle a publié des travaux académiques remarqués.', 'L’exemple même de l’Académie : travaux universitaires. EN: universitaires.'),
    trap(E(1061), 'le dossier académique', 'le dossier académique', 'À l’école, le dossier scolaire. EN: scolaire.'),
    trap(E(1062), 'une formation académique', 'une formation académique', 'Une formation universitaire. EN: universitaire.'),
    trap(E(1067), 'un robot versatile', 'Ce robot culinaire est vraiment versatile.', 'Polyvalent. EN: polyvalent.'),
    trap(E(1063), 'un employé versatile', 'un employé versatile', 'Versatile dirait qu’il change d’avis. Polyvalent. EN: polyvalent.'),
  ],
  drill: [
    { promptSay: 'L’année … commence en septembre.', opts: ['universitaire', 'académique'], correct: 0 },
    { promptSay: 'Son style est trop … à mon goût.', opts: ['académique', 'universitaire'], correct: 0 },
    { promptSay: 'Ce robot est vraiment … .', opts: ['polyvalent', 'versatile'], correct: 0 },
    { promptSay: 'L’opinion publique est … .', opts: ['versatile', 'polyvalente'], correct: 0 },
    { promptSay: 'À l’école, on consulte le dossier … .', opts: ['scolaire', 'académique'], correct: 0 },
    { promptSay: 'Il nous faut quelqu’un de … , capable de tout faire.', opts: ['souple', 'versatile'], correct: 0 },
    { promptSay: 'Elle a une formation … en sociologie.', opts: ['universitaire', 'académique'], correct: 0 },
    { promptSay: 'En France, les bureaux de l’inspection … gèrent les écoles.', opts: ['académique', 'universitaire'], correct: 0 },
  ],
  steps: STEPS('Universitaire et polyvalent', 'Six phrases à reprendre'),
  audio: REC('rec-c1-18-piege-academique'), say: REFRAME, terms: ['academique'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a6-ecoute', layer: 'core', hideLines: true,
  title: 'Huit phrases au centre de recherche', frSub: 'Écoute, puis réponds',
  lines: [
    ln(E(1064)), ln(E(1065)), ln(E(1066)), ln(E(1067)),
    ln(E(1068)), ln(E(1071)), ln(E(1060)), ln(E(1063)),
  ],
  questions: [
    { q: 'Première phrase : quand l’année commence-t-elle ?', opts: ['début septembre', 'en janvier'], correct: 0, why: 'Début septembre. EN: early September.' },
    { q: 'Troisième phrase : que reproche-t-on au style ?', opts: ['il est trop conventionnel', 'il est trop familier'], correct: 0, why: 'Académique, au sens français : convenu. EN: too conventional.' },
    { q: 'Quatrième phrase : que peut faire le robot ?', opts: ['plusieurs choses', 'une seule chose'], correct: 0, why: 'Polyvalent : plusieurs usages. EN: many things.' },
    { q: 'Cinquième phrase : comment s’est comportée l’opinion publique ?', opts: ['elle a changé d’avis', 'elle est restée stable'], correct: 0, why: 'Versatile : changeant. EN: it changed.' },
    { q: 'Sixième phrase : quelle qualité cherche-t-on ?', opts: ['la souplesse', 'la rigueur académique', 'l’ancienneté'], correct: 0, why: 'Souple : passer d’une tâche à l’autre. EN: adaptability.' },
  ],
  audio: REC('rec-c1-18-academique-ecoute'), say: REFRAME, terms: ['academique'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Lire : un brouillon à reprendre', TEXTE_A6, [
  { q: 'Quels sont les deux mots à changer ?', a: '« versatile » (polyvalent) et « formation académique » (formation universitaire).' },
  { q: 'Quel emploi d’académique est correct, et pourquoi ?', a: '« un style trop académique » : un style trop conventionnel, le sens français.' },
  { q: 'Quelle tournure du texte est déjà juste pour l’université ?', a: '« la nouvelle année universitaire ».' },
  { q: 'Que cherche vraiment le centre dans les candidatures ?', a: 'Des lettres qui racontent une expérience plutôt que de réciter un manuel.' },
], 'rec-c1-18-texte-a6', ['academique']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('L’université', 'Pour academic background, tu écris…',
    ['une formation universitaire', 'une formation académique'], 0, 'Universitaire. EN: universitaire.'),
  ctl('Plusieurs usages', 'Un outil qui sert à tout est…',
    ['polyvalent', 'versatile'], 0, 'Polyvalent. EN: polyvalent.'),
  ctl('Le sens français', '« Un discours académique » se dit…',
    ['d’un discours d’académie, ou très convenu', 'd’un cours à l’université', 'd’un discours scolaire'], 0,
    'C’est le sens français, correct partout. EN: academy, or conventional.'),
], ['academique']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Académique, versatile',
    opener: {
      line: 'Une offre d’emploi pour Genève : ici tu rends l’université à universitaire et les tâches multiples à polyvalent. EN: A job ad for Geneva: here you give university back to universitaire and many tasks to polyvalent.',
      imageRef: 'lessons/faux-amis-savants/act06.jpg',
    },
    sections: [],
    milestone: 'Tu écris universitaire, scolaire et polyvalent, et tu gardes académique et versatile pour leur sens français. EN: You write universitaire, scolaire and polyvalent, keeping académique and versatile for their French senses.',
    estScreens: 38, restPoints: ['a6-construire', 'a6-ecoute'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_PIEGE, A6_ECOUTE, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — JURIDICTION
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a7-histoire', layer: 'core',
  title: 'La note du stagiaire', frSub: 'Un tribunal, ou une province',
  setting: 'À Québec, Samuel relit avec une juriste la note de politique publique qu’il a écrite sur la location de courte durée.',
  bubbles: [
    { from: 'narrator', fr: 'La note part au cabinet demain. La juriste a entouré un mot trois fois.', en: 'The memo goes to the minister’s office tomorrow. The lawyer has circled one word three times.' },
    { from: 'user', fr: 'J’écris que d’autres juridictions ont déjà encadré la location.', en: 'I write that other jurisdictions have already regulated rentals.' },
    { from: 'coach', fr: 'D’autres provinces, d’autres pays. Usito critique juridiction au sens de territoire ou d’autorité.', en: 'Other provinces, other countries. Usito criticises juridiction in the sense of territory or authority.', warn: 'Nomme le lieu' },
    { from: 'user', fr: 'Et le logement relève de la juridiction des provinces.', en: 'And housing falls under provincial jurisdiction.' },
    { from: 'coach', fr: 'De la compétence des provinces. Une juridiction, en français, c’est d’abord un tribunal.', en: 'Under provincial compétence. In French a juridiction is first of all a court.', warn: 'Compétence' },
    { from: 'user', fr: 'Alors le Tribunal administratif du logement, c’est une juridiction.', en: 'So the Tribunal administratif du logement is a juridiction.' },
    { from: 'coach', fr: 'Exactement. Là, le mot est juste partout.', en: 'Exactly. There, the word is right everywhere.', warn: 'Le sens français' },
  ],
  closing: { fr: 'Une juridiction juge ; une province a des compétences.', en: 'A court judges; a province has powers.' },
  audio: REC('rec-c1-18-quebec'), say: REFRAME, terms: ['juridiction'],
};

const A7_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a7-table', layer: 'core', sheetId: 'sheet-institutions',
  title: 'Six mots pour le pouvoir et son territoire',
  cols: ['Pour dire', 'Le mot sûr', 'Exemple'],
  rows: [
    { cells: ['un tribunal', 'une juridiction', 'une juridiction civile'], say: fr(E(1075)),
      detail: { title: 'Le sens français', body: 'Un tribunal, ou le pouvoir de juger : normalisé par l’OQLF, donné par Le Robert. EN: a court.', say: fr(E(1077)) } },
    { cells: ['le domaine d’une autorité', 'la compétence', 'avoir compétence en matière de'], say: fr(E(1076)),
      detail: { title: 'La compétence', body: 'Ce qu’une autorité a le droit de décider. Usito propose compétence à la place de juridiction. EN: powers.', say: fr(E(1072)) } },
    { cells: ['le territoire d’une autorité', 'le ressort', 'le ressort d’un tribunal'], say: fr(E(1074)),
      detail: { title: 'Le ressort', body: 'Le GDT marque juridiction à éviter en ce sens ; Le Robert admet l’étendue du pouvoir de juger. Ressort ne divise personne. EN: territory.', say: fr(E(1079)) } },
    { cells: ['le droit de trancher', 'l’autorité', 'l’autorité nécessaire'], say: fr(E(1081)),
      detail: { title: 'L’autorité', body: 'Pour un ministère, un organisme. EN: authority.', say: fr(E(1081)) } },
    { cells: ['other jurisdictions', 'nomme le lieu', 'dans les autres provinces'], say: fr(E(1083)),
      detail: { title: 'Nomme le lieu', body: 'Pays, provinces, États, cantons, villes : le mot exact est toujours plus clair. EN: name the place.', say: fr(E(1082)) } },
    { cells: ['ce n’est pas mon domaine', 'pas de mon ressort', 'pas du ressort de la mairie'], say: fr(E(1079)),
      detail: { title: 'Au figuré', body: 'Ce n’est pas de mon ressort : cela ne relève pas de moi. EN: not my area.', say: fr(E(1073)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['juridiction'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-construire', layer: 'core', size: 'lg',
  title: 'Juger, ou décider', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Les tribunaux', [
      it(E(1075), 'une juridiction civile'),
      it(E(1077), 'une juridiction pénale'),
      it(B2_JURIDICTION, 'déjà au B2, au sens juste'),
      it(E(1074), 'le ressort d’un tribunal'),
    ], chk('« La juridiction compétente a été déterminée. » Ici, juridiction veut dire…',
      ['le tribunal', 'la province'], 0,
      'Le tribunal qui pourra juger : le sens français. EN: the court.')),
    grp('Les gouvernements et leur territoire', [
      it(E(1076), 'la compétence des provinces'),
      it(E(1073), 'relever de la compétence de'),
      it(E(1082), 'plusieurs provinces'),
      it(E(1078), 'd’autres pays'),
    ], chk('Pour other jurisdictions, dans une note sur des provinces, tu écris…',
      ['d’autres provinces', 'd’autres juridictions'], 0,
      'Nomme le lieu ; Usito critique juridiction en ce sens. EN: other provinces.')),
    ctl('Le verdict', 'Juridiction au sens de compétence d’un gouvernement :',
      ['Usito le critique, le GDT le déconseille pour un territoire', 'tous l’acceptent', 'seule l’Académie le critique'], 0,
      'Usito et le GDT ; Le Robert admet l’étendue du pouvoir de juger. EN: criticised in Québec sources.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['juridiction'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a7-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre phrases de note officielle',
  errors: [
    { wrong: 'Au Canada, la santé relève surtout de la juridiction des provinces.', right: fr(E(1076)),
      why: 'Normal : jurisdiction est le mot anglais exact. En français, une province a des compétences. EN: compétence.' },
    { wrong: 'Plusieurs juridictions ont déjà adopté une loi semblable.', right: fr(E(1082)),
      why: 'Normal : l’anglais compte les territoires en jurisdictions. Nomme-les : des provinces. EN: provinces.' },
    { wrong: 'Dans d’autres juridictions, la règle est différente.', right: fr(E(1078)),
      why: 'Normal : le mot paraît plus juridique. D’autres pays est plus clair. EN: other countries.' },
    { wrong: 'Cette question n’est pas de la juridiction de la mairie.', right: fr(E(1079)),
      why: 'Normal : on cherche un mot savant. Le ressort, ou la compétence, ne divise personne. EN: du ressort.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['juridiction'],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a7-exemples', layer: 'core', sheetId: 'sheet-institutions',
  title: 'Cinq phrases d’institution', frSub: 'Le mot juste pour chaque pouvoir',
  examples: [
    ex(E(1077), 'un tribunal : juridiction'),
    ex(E(1072), 'le domaine d’une autorité'),
    ex(E(1081), 'le droit de trancher'),
    ex(E(1083), 'nommer le lieu'),
    ex(E(1080), 'la règle de l’acte'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['juridiction'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Lire : un brouillon à reprendre', TEXTE_A7, [
  { q: 'Où juridiction est-il employé au sens français ?', a: '« le Tribunal administratif du logement, une juridiction spécialisée » : un tribunal.' },
  { q: 'Quels sont les deux emplois critiqués ?', a: '« la juridiction appartient surtout aux provinces » (la compétence) et « plusieurs autres juridictions » (d’autres provinces, d’autres États).' },
  { q: 'Comment réécrirais-tu la première phrase ?', a: 'Par exemple : « En matière de logement, la compétence appartient surtout aux provinces. »' },
  { q: 'Qui tranche un litige entre propriétaire et locataire, selon le texte ?', a: 'Le Tribunal administratif du logement.' },
], 'rec-c1-18-texte-a7', ['juridiction']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le tribunal', 'Une juridiction pénale, c’est…',
    ['un tribunal', 'une province'], 0, 'Le sens français. EN: a court.'),
  ctl('La province', 'Une province peut décider en matière d’éducation. Elle a…',
    ['compétence', 'juridiction', 'ressort'], 0, 'Compétence en matière de. EN: powers.'),
  ctl('Le lieu', 'Pour other jurisdictions, le plus clair :',
    ['nommer les pays ou les provinces', 'garder juridictions'], 0, 'Nomme le lieu. EN: name the place.'),
], ['juridiction']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Juridiction',
    opener: {
      line: 'Une note pour le cabinet, à Québec : ici tu gardes juridiction pour les tribunaux et tu donnes aux provinces leurs compétences. EN: A memo for the minister’s office: here you keep juridiction for courts and give provinces their compétences.',
      imageRef: 'lessons/faux-amis-savants/act07.jpg',
    },
    sections: [],
    milestone: 'Tu écris compétence, ressort et autorité, tu nommes les pays et les provinces, et une juridiction juge. EN: You write compétence, ressort and autorité, name countries and provinces, and a juridiction judges.',
    estScreens: 38, restPoints: ['a7-table', 'a7-erreurs'],
  },
  sections: [A7_HISTOIRE, A7_TABLE, A7_CONSTRUIRE, A7_ERREURS, A7_EXEMPLES, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — ÉLIGIBLE (the showcase of a divided verdict)
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a8-histoire', layer: 'core',
  title: 'Un appel à candidatures', frSub: 'Lyon et Montréal ne disent pas la même chose',
  setting: 'La Fondation Rive-Claire publie sa bourse en France et au Québec. Odile et Benoît relisent l’appel ensemble.',
  bubbles: [
    { from: 'narrator', fr: 'Une seule phrase les arrête : « Sont éligibles les étudiants inscrits à temps plein. »', en: 'One sentence stops them: « Full-time students are eligible. »' },
    { from: 'user', fr: 'À Lyon, personne ne tiquera sur éligibles.', en: 'In Lyon, nobody will bat an eyelid at éligibles.' },
    { from: 'coach', fr: 'C’est vrai : Le Robert l’enregistre sans marque, et Usito dit qu’en France il n’est généralement pas critiqué.', en: 'True: Le Robert records it unmarked, and Usito says it is generally not criticised in France.', warn: 'Le partage' },
    { from: 'user', fr: 'Mais l’OQLF le déconseille, et l’Académie aussi.', en: 'But the OQLF advises against it, and so does the Académie.' },
    { from: 'coach', fr: 'Alors pour un texte lu des deux côtés, admissibles ne divise personne.', en: 'So for a text read on both sides, admissibles divides nobody.', warn: 'Admissible' },
    { from: 'user', fr: 'Et éligible reste juste pour une élection.', en: 'And éligible is still right for an election.' },
    { from: 'coach', fr: fr(E(1091)), en: en(E(1091)), warn: 'Le sens français' },
  ],
  closing: { fr: 'Quand les ouvrages se partagent, dis-le, et choisis le mot commun.', en: 'When the authorities differ, say so, and choose the shared word.' },
  audio: REC('rec-c1-18-fondation'), say: REFRAME, terms: ['eligible', 'selon'],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a8-table', layer: 'core', sheetId: 'sheet-institutions',
  title: 'Qui dit quoi sur éligible',
  cols: ['Ouvrage', 'Éligible à une bourse', 'Il propose'],
  rows: [
    { cells: ['Académie française', 'à éviter', 'avoir droit à, remplir les conditions'], say: fr(E(1085)),
      detail: { title: 'L’Académie', body: 'Dans Dire, ne pas dire : éligible n’a pour sens que pouvoir être candidat à une élection. EN: avoid it.', say: fr(E(1086)) } },
    { cells: ['OQLF (BDL)', 'déconseillé', 'admissible'], say: fr(E(1088)),
      detail: { title: 'L’OQLF', body: 'Emprunt sémantique à l’anglais eligible, qui ne comble aucun manque : dis admissible. EN: not recommended.', say: fr(E(1084)) } },
    { cells: ['Usito', 'critiqué au Québec', 'admissible'], say: fr(E(1093)),
      detail: { title: 'Usito', body: 'Il ajoute que l’emploi n’est généralement pas critiqué en France. EN: criticised in Québec, not usually in France.', say: fr(E(1093)) } },
    { cells: ['Le Robert', 'enregistré, sans marque', 'les foyers éligibles à…'], say: fr(E(1092)),
      detail: { title: 'Le Robert', body: 'Il donne être éligible à : remplir les conditions pour bénéficier de quelque chose. EN: recorded, unmarked.', say: fr(E(1092)) } },
    { cells: ['partout', 'pour une élection', 'éligible au conseil municipal'], say: fr(E(1087)),
      detail: { title: 'Le sens commun', body: 'Pouvoir être élu : correct dans tous les ouvrages. EN: able to be elected.', say: fr(E(1091)) } },
    { cells: ['ton choix', 'texte lu partout', 'admissible, avoir droit à'], say: fr(E(1094)),
      detail: { title: 'Le mot commun', body: 'Pour un public des deux côtés de l’Atlantique, prends le mot qu’aucun ouvrage ne conteste. EN: the shared word.', say: fr(E(1089)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['eligible', 'selon'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-construire', layer: 'core', size: 'lg',
  title: 'Admissible, avoir droit à, éligible', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Une aide, une bourse, une prestation', [
      it(E(1088), 'admissible à une bourse'),
      it(E(1089), 'remplir les conditions'),
      it(E(1090), 'avoir droit à'),
      it(E(1094), 'ouvrir droit à'),
    ], chk('« Ces travaux ouvrent droit à un crédit d’impôt. » Cela veut dire qu’ils…',
      ['permettent d’obtenir le crédit', 'sont payés par l’État'], 0,
      'Ouvrir droit à : donner le droit de recevoir. EN: they qualify for it.')),
    grp('Une élection', [
      it(E(1087), 'éligible au conseil'),
      it(E(1091), 'l’âge requis'),
      it(E(1093), 'des dossiers admissibles'),
      it(E(1095), 'l’admissibilité'),
    ], chk('Pour eligibility criteria d’une bourse, tu écris…',
      ['les critères d’admissibilité', 'les critères d’éligibilité'], 0,
      'L’admissibilité ; l’éligibilité reste le droit d’être candidat. EN: admissibilité.')),
    ctl('Le partage', 'Éligible à une bourse : quelle phrase est exacte ?',
      ['les ouvrages se partagent : l’Académie et l’OQLF le déconseillent, Le Robert l’enregistre', 'c’est une faute pour tous les ouvrages', 'c’est accepté par tous'], 0,
      'C’est le cas type de cette leçon : on le dit, avec ses sources. EN: they differ.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['eligible', 'selon'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a8-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre phrases pour un texte lu partout',
  errors: [
    { wrong: 'Tu es éligible à cette bourse si tu as moins de trente ans.', right: fr(E(1088)),
      why: 'Normal : en France, la tournure est courante et Le Robert l’enregistre. Mais l’Académie et l’OQLF la déconseillent : admissible passe partout. EN: admissible.' },
    { wrong: 'À soixante-cinq ans, Martine sera éligible à sa pension complète.', right: fr(E(1090)),
      why: 'Normal : eligible for a pension se dit ainsi en anglais. L’Académie propose avoir droit à. EN: aura droit à.' },
    { wrong: 'Seuls les dossiers complets seront jugés éligibles.', right: fr(E(1093)),
      why: 'Normal : le mot paraît administratif. Pour un dossier, admissible ne divise personne. EN: admissibles.' },
    { wrong: 'les critères d’éligibilité', right: fr(E(1095)),
      why: 'Normal : eligibility se calque facilement. L’éligibilité, c’est le droit d’être candidat ; dis admissibilité. EN: admissibilité.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['eligible'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a8-exemples', layer: 'core',
  title: 'Cinq tournures administratives sûres', frSub: 'Et un faux ami de la banque',
  examples: [
    ex(E(1086), 'valable partout'),
    ex(E(1085), 'la tournure de l’Académie'),
    ex(E(1084), 'la tournure de l’OQLF'),
    ex(E(1094), 'pour un crédit, une aide'),
    ex(FA(81), 'délivrer un document : un faux ami déjà connu'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['eligible'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Lire : l’appel d’une fondation', TEXTE_A8, [
  { q: 'Qui peut recevoir la bourse ?', a: 'Les étudiants inscrits à temps plein dans un établissement d’enseignement supérieur, qui remplissent les conditions.' },
  { q: 'Quelles conditions faut-il remplir ?', a: 'Avoir terminé une première année d’études et présenter un projet de stage confirmé.' },
  { q: 'Qui n’y a pas droit ?', a: 'Les étudiants qui ont déjà reçu la bourse.' },
  { q: 'Pourquoi la fondation écrit-elle admissibles plutôt qu’éligibles ?', a: 'Parce que l’appel est lu en France et au Québec, et qu’admissible ne divise aucun ouvrage.' },
], 'rec-c1-18-texte-a8', ['eligible']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('L’aide', 'Pour une bourse, le mot qu’aucun ouvrage ne conteste :',
    ['admissible', 'éligible'], 0, 'Admissible. EN: admissible.'),
  ctl('L’élection', '« Éligible au conseil municipal » est…',
    ['correct partout', 'déconseillé'], 0, 'Pouvoir être élu : le sens français. EN: correct.'),
  ctl('Le partage', 'Qui enregistre éligible à une aide, sans marque ?',
    ['Le Robert', 'l’Académie', 'l’OQLF'], 0, 'Le Robert ; l’Académie et l’OQLF le déconseillent. EN: Le Robert.'),
], ['eligible', 'selon']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Éligible',
    opener: {
      line: 'Une bourse annoncée à Lyon et à Montréal : ici tu vois deux ouvrages dire deux choses, et tu choisis le mot commun. EN: A grant announced in Lyon and Montréal: here you see two authorities disagree, and choose the shared word.',
      imageRef: 'lessons/faux-amis-savants/act08.jpg',
    },
    sections: [],
    milestone: 'Tu écris admissible et avoir droit à, et tu sais dire qui accepte éligible et qui le refuse. EN: You write admissible and avoir droit à, and can say who accepts éligible and who does not.',
    estScreens: 38, restPoints: ['a8-table', 'a8-erreurs'],
  },
  sections: [A8_HISTOIRE, A8_TABLE, A8_CONSTRUIRE, A8_ERREURS, A8_EXEMPLES, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — DIGITAL OU NUMÉRIQUE
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a9-histoire', layer: 'core',
  title: 'Le musée passe au numérique', frSub: 'Les doigts et les données',
  setting: 'À Lyon, Aurélie Vandamme, directrice d’un musée, prépare un message pour son équipe avec sa chargée de communication.',
  bubbles: [
    { from: 'narrator', fr: 'Sur le bureau, une maquette de site et une pile de vieilles photographies.', en: 'On the desk, a website mock-up and a pile of old photographs.' },
    { from: 'user', fr: 'J’annonce la transformation digitale du musée.', en: 'I am announcing the museum’s digital transformation.' },
    { from: 'coach', fr: 'La transformation numérique. FranceTerme, l’Académie et l’OQLF recommandent numérique.', en: 'La transformation numérique. FranceTerme, the Académie and the OQLF recommend numérique.', warn: 'Numérique' },
    { from: 'user', fr: 'Et on va digitaliser les photographies.', en: 'And we are going to digitalise the photographs.' },
    { from: 'coach', fr: 'Les numériser. Digitaliser vient de l’anglais, et l’OQLF propose numériser.', en: 'Numériser. Digitaliser comes from English, and the OQLF suggests numériser.', warn: 'Numériser' },
    { from: 'user', fr: 'Alors digital ne sert plus à rien.', en: 'So digital is no use any more.' },
    { from: 'coach', fr: fr(E(1102)), en: en(E(1102)), warn: 'Le sens français' },
  ],
  closing: { fr: 'Digital pour les doigts ; numérique pour les données.', en: 'Digital for fingers; numérique for data.' },
  audio: REC('rec-c1-18-musee'), say: REFRAME, terms: ['numerique'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a9-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-mots',
  title: 'La famille de numérique', frSub: 'Et les empreintes digitales',
  hint: 'Quatre cartes. Demande-toi : des doigts, ou des nombres ?',
  audio: REC('rec-c1-18-numerique-cartes'), say: REFRAME, terms: ['numerique'],
  cards: [
    { head: 'L’adjectif recommandé', label: 'numérique', fr: fr(E(1096)), sub: rsOf(E(1096)),
      body: 'Pour les données, les écrans, les outils. Terme publié au Journal officiel (FranceTerme), recommandé par l’Académie et l’OQLF. EN: digital.' },
    { head: 'Le verbe', label: 'numériser', fr: fr(E(1097)), sub: rsOf(E(1097)),
      body: 'Pour digitize. L’OQLF déconseille digitaliser, digitalisation. EN: to digitise.' },
    { head: 'Le nom', label: 'la numérisation', fr: fr(E(1107)), sub: rsOf(E(1107)),
      body: 'L’action de numériser des documents, des dossiers, des archives. EN: digitisation.' },
    { head: 'Le sens français', label: 'digital', fr: fr(E(1102)), sub: rsOf(E(1102)),
      body: 'Qui se rapporte aux doigts. Le Robert enregistre digital au sens de numérique, marqué anglicisme, et renvoie à numérique. EN: of the fingers.' },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-construire', layer: 'core', size: 'lg',
  title: 'Des nombres, ou des doigts', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Les données et les écrans', [
      it(E(1100), 'numériser'),
      it(E(1101), 'la communication numérique'),
      it(B2_FRACTURE, 'déjà au B2'),
      it(B2_TRANSFO, 'déjà au B2'),
    ], chk('Pour digital transformation, le terme recommandé :',
      ['la transformation numérique', 'la transformation digitale'], 0,
      'Numérique : FranceTerme, l’Académie, l’OQLF. EN: numérique.')),
    grp('Les doigts', [
      it(E(1102), 'les empreintes digitales'),
      it(B2_EMPREINTE, 'déjà au B2'),
      it(E(1105), 'un cadran numérique'),
      it(E(1103), 'des outils numériques'),
    ], chk('« Les empreintes digitales sont prises au guichet. » Cette phrase est…',
      ['correcte partout', 'déconseillée'], 0,
      'Digital, ce qui se rapporte aux doigts : le sens français. EN: correct.')),
    ctl('Le verdict', 'Digital au sens de numérique, selon les ouvrages :',
      ['ils recommandent tous numérique ; Le Robert marque digital comme anglicisme', 'ils le jugent tous neutre', 'seul l’OQLF le critique'], 0,
      'Un cas où les ouvrages s’accordent. EN: they agree.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['numerique'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a9-piege', layer: 'core', swipe: true,
  title: 'Six phrases à reprendre', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Numérique pour les données, digital pour les doigts',
    body: 'Pour l’informatique, les écrans et les données, dis numérique, numériser, numérisation. Digital ne se dit que des doigts : les empreintes digitales. EN: numérique for data; digital for fingers.',
  },
  cards: [
    trap(E(1100), 'digitaliser', 'La bibliothèque a digitalisé ses plus vieux journaux.', 'Numérisé. EN: numérisé.'),
    trap(E(1101), 'la communication digitale', 'Nous cherchons un responsable de la communication digitale.', 'Numérique. EN: numérique.'),
    trap(E(1103), 'des outils digitaux', 'L’école a investi dans des tablettes et des outils digitaux.', 'Des outils numériques. EN: numériques.'),
    trap(E(1105), 'un cadran digital', 'Sur un cadran digital, l’heure s’affiche en chiffres.', 'Un cadran numérique, opposé à analogique. EN: numérique.'),
    trap(E(1106), 'le tout digital', 'Le service passe au tout digital en janvier.', 'Au tout numérique. EN: numérique.'),
    trap(E(1107), 'la digitalisation', 'la digitalisation des dossiers', 'La numérisation. EN: numérisation.'),
  ],
  drill: [
    { promptSay: 'La bibliothèque a … ses archives.', opts: ['numérisé', 'digitalisé'], correct: 0 },
    { promptSay: 'Les empreintes … sont prises au guichet.', opts: ['digitales', 'numériques'], correct: 0 },
    { promptSay: 'Nous cherchons un responsable de la stratégie … .', opts: ['numérique', 'digitale'], correct: 0 },
    { promptSay: 'L’heure s’affiche sur un cadran … .', opts: ['numérique', 'digital'], correct: 0 },
    { promptSay: 'La … des dossiers prendra six mois.', opts: ['numérisation', 'digitalisation'], correct: 0 },
    { promptSay: 'La fracture … touche les aînés.', opts: ['numérique', 'digitale'], correct: 0 },
    { promptSay: 'Le lecteur d’empreintes … ouvre les réserves.', opts: ['digitales', 'numériques'], correct: 0 },
    { promptSay: 'Le service passe au tout … .', opts: ['numérique', 'digital'], correct: 0 },
  ],
  steps: STEPS('Numérique pour les données', 'Six phrases à reprendre'),
  audio: REC('rec-c1-18-piege-numerique'), say: REFRAME, terms: ['numerique'],
};

const A9_FLASH: Sec<'flashcards'> = {
  type: 'flashcards', id: 'a9-flash', layer: 'core',
  title: 'Huit mots du numérique', frSub: 'De l’anglais au français recommandé',
  cards: [
    { front: 'digital (data)', back: 'numérique', say: fr(E(1096)) },
    { front: 'to digitize', back: 'numériser', say: fr(E(1100)) },
    { front: 'digitization', back: 'la numérisation', say: fr(E(1107)) },
    { front: 'digital strategy', back: 'la stratégie numérique', say: fr(E(1098)) },
    { front: 'digital divide', back: 'la fracture numérique', say: fr(B2_FRACTURE) },
    { front: 'digital display', back: 'un affichage numérique', say: fr(E(1105)) },
    { front: 'fingerprints', back: 'les empreintes digitales', say: fr(E(1102)) },
    { front: 'fully digital', back: 'le tout numérique', say: fr(E(1106)) },
  ],
  audio: AUDIO, say: REFRAME, terms: ['numerique'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Lire : le message d’une directrice', TEXTE_A9, [
  { q: 'Quels mots de la famille de numérique trouves-tu ?', a: 'Numérisation, numérisées, numérique (la stratégie numérique).' },
  { q: 'Où digital est-il employé, et est-ce juste ?', a: 'Dans « lecteur d’empreintes digitales » : oui, il s’agit des doigts.' },
  { q: 'Que se passera-t-il d’ici l’été ?', a: 'Toutes les photographies anciennes seront numérisées et consultables en ligne.' },
  { q: 'Que doit faire chaque collègue ?', a: 'Enregistrer ses empreintes auprès de l’accueil pour entrer dans les réserves.' },
], 'rec-c1-18-texte-a9', ['numerique']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('L’adjectif', 'Pour digital tools, tu écris…',
    ['des outils numériques', 'des outils digitaux'], 0, 'Numériques. EN: numériques.'),
  ctl('Le verbe', 'Pour to digitize, le verbe recommandé :',
    ['numériser', 'digitaliser', 'chiffrer'], 0, 'Numériser. EN: numériser.'),
  ctl('Les doigts', 'Digital est juste dans…',
    ['les empreintes digitales', 'la transformation digitale'], 0, 'Les doigts. EN: fingerprints.'),
], ['numerique']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Digital ou numérique',
    opener: {
      line: 'Un musée qui met ses photos en ligne : ici tu rends les données à numérique et les doigts à digital. EN: A museum putting its photos online: here you give data back to numérique and fingers to digital.',
      imageRef: 'lessons/faux-amis-savants/act09.jpg',
    },
    sections: [],
    milestone: 'Tu écris numérique, numériser, numérisation, et tu gardes digital pour les doigts. EN: You write numérique, numériser and numérisation, and keep digital for fingers.',
    estScreens: 38, restPoints: ['a9-construire', 'a9-flash'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_CONSTRUIRE, A9_PIEGE, A9_FLASH, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — FAIRE SENS, QUESTIONNER
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a10-histoire', layer: 'core',
  title: 'La note de frais', frSub: 'Deux tournures discutées',
  setting: 'Dans une entreprise montréalaise, la responsable des finances relit un courriel interne avec Benoît, qui l’aide à le rédiger.',
  bubbles: [
    { from: 'narrator', fr: 'La nouvelle procédure de remboursement déplaît. Le courriel doit calmer les esprits.', en: 'The new reimbursement procedure is unpopular. The email has to calm things down.' },
    { from: 'user', fr: 'Plusieurs employés ont questionné la procédure.', en: 'Several employees questioned the procedure.' },
    { from: 'coach', fr: 'Ils l’ont contestée, ou remise en question. L’OQLF déconseille questionner au sens de mettre en doute.', en: 'They challenged it, or called it into question. The OQLF advises against questionner meaning to doubt.', warn: 'Remettre en question' },
    { from: 'user', fr: 'Et j’ajoute qu’elle ne fait pas encore sens pour tout le monde.', en: 'And I add that it does not make sense to everyone yet.' },
    { from: 'coach', fr: 'Faire sens divise. L’OQLF le juge ancien, l’Académie le critique. Écris qu’elle n’est pas encore claire.', en: 'Faire sens divides. The OQLF calls it old, the Académie criticises it. Write that it is not clear yet.', warn: 'Le partage' },
    { from: 'user', fr: 'Faire du sens, je sais déjà que c’est déconseillé.', en: 'Faire du sens, I already know is not recommended.' },
    { from: 'coach', fr: `Oui, c’est ${CALQUER_REF}. Ici, on va plus loin : faire sens, sans du.`, en: 'Yes, that is lesson 33 in B2. Here we go further: faire sens, without du.', warn: 'Le renfort' },
  ],
  closing: { fr: 'On questionne une personne ; une décision, on la remet en question.', en: 'You question a person; a decision, you call into question.' },
  audio: REC('rec-c1-18-frais'), say: REFRAME, terms: ['questionner'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a10-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-mots',
  title: 'Douter, contester, interroger', frSub: 'Et faire sens',
  hint: 'Quatre cartes. La quatrième prolonge la leçon 33 du B2.',
  audio: REC('rec-c1-18-questionner-cartes'), say: REFRAME, terms: ['questionner'],
  cards: [
    { head: 'Réexaminer', label: 'remettre en question', fr: fr(E(1108)), sub: rsOf(E(1108)),
      body: 'Pour to question a decision. L’OQLF propose aussi contester, mettre en doute, s’interroger sur. EN: to call into question.' },
    { head: 'Ne pas croire', label: 'mettre en doute', fr: fr(E(1109)), sub: rsOf(E(1109)),
      body: 'Ne pas tenir une chose pour certaine : un chiffre, un témoignage, une version. EN: to cast doubt on.' },
    { head: 'Le sens français', label: 'questionner quelqu’un', fr: fr(E(1111)), sub: rsOf(E(1111)),
      body: 'Poser des questions à une personne. C’est le seul sens que donnent l’Académie et Le Robert. EN: to question a person.' },
    { head: 'Un tour qui divise', label: 'faire sens', fr: fr(E(1117)), sub: rsOf(E(1117)),
      body: `L’OQLF le dit ancien et peu employé au Québec ; l’Académie le critique. Faire du sens, déconseillé, est vu à ${CALQUER_REF}. EN: faire sens divides the authorities.` },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-construire', layer: 'core', size: 'lg',
  title: 'Interroger une personne, douter d’une chose', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Douter, contester', [
      it(E(1113), 'mettre en doute'),
      it(E(1114), 'contester'),
      it(E(1119), 's’interroger sur'),
      it(E(1108), 'remettre en question'),
    ], chk('« Plusieurs chercheurs mettent en doute ces résultats. » Ils…',
      ['ne les tiennent pas pour certains', 'leur posent des questions'], 0,
      'Mettre en doute : ne pas tenir pour certain. EN: they doubt them.')),
    grp('Avoir du sens, au B2 et ici', [
      it(B233_A_DU_SENS, `${Cap(CALQUER_REF)} : avoir du sens`),
      it(B233_SENSE, `${Cap(CALQUER_REF)} : sensé`),
      it(B136_SENS, 'déjà au B1'),
      it(E(1112), 'être logique'),
    ], chk('Pour dire qu’une proposition est cohérente sans diviser personne, tu écris qu’elle…',
      ['a du sens', 'fait sens', 'fait du sens'], 0,
      'Avoir du sens ou être logique ne divisent personne. EN: a du sens.')),
    ctl('Le verdict', 'Faire sens, sans du :',
      ['l’Académie le critique ; l’OQLF le juge ancien', 'tous l’acceptent', 'tous le condamnent'], 0,
      'Les ouvrages se partagent. EN: they differ.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['questionner', 'selon'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a10-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre phrases de courriel à reprendre',
  errors: [
    { wrong: 'Plusieurs chercheurs questionnent ces résultats.', right: fr(E(1113)),
      why: 'Normal : to question se traduit d’un mot. L’OQLF déconseille ce sens ; mettre en doute est sûr. EN: mettent en doute.' },
    { wrong: 'Les élus ont questionné le choix du site.', right: fr(E(1114)),
      why: 'Normal : la phrase anglaise est la même. Contester dit plus clairement que les élus s’y opposent. EN: contesté.' },
    { wrong: 'Ta proposition fait sens, et elle coûte peu.', right: fr(E(1112)),
      why: 'Normal : la tournure s’entend, surtout en France, et l’OQLF ne la condamne pas. Mais l’Académie la critique : logique ne divise personne. EN: est logique.' },
    { wrong: 'Je questionne la date choisie.', right: fr(E(1119)),
      why: 'Normal : on cherche un verbe court. S’interroger sur garde le doute sans accuser. EN: je m’interroge sur.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['questionner'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a10-ecoute', layer: 'core', hideLines: true,
  title: 'Huit phrases à la réunion', frSub: 'Écoute, puis réponds',
  lines: [
    ln(E(1112)), ln(E(1113)), ln(E(1114)), ln(E(1115)),
    ln(E(1118)), ln(E(1119)), ln(E(1108)), ln(E(1111)),
  ],
  questions: [
    { q: 'Première phrase : que dit-on de la proposition ?', opts: ['elle est logique', 'elle est chère'], correct: 0, why: 'Logique, et elle coûte peu. EN: it makes sense.' },
    { q: 'Troisième phrase : qu’ont fait les élus ?', opts: ['ils ont contesté le choix', 'ils ont voté pour'], correct: 0, why: 'Contester : s’opposer. EN: they challenged it.' },
    { q: 'Quatrième phrase : qui a été questionné ?', opts: ['les voisins', 'la décision'], correct: 0, why: 'On questionne des personnes. EN: the neighbours.' },
    { q: 'Cinquième phrase : l’explication suffit-elle ?', opts: ['non, même si elle tient debout', 'oui'], correct: 0, why: 'Elle tient debout, mais ne suffit pas. EN: no.' },
    { q: 'Sixième phrase : la personne conteste-t-elle déjà la date ?', opts: ['non, elle s’interroge', 'oui, elle la refuse'], correct: 0, why: 'S’interroger sur : douter, sans encore contester. EN: she wonders.' },
  ],
  audio: REC('rec-c1-18-questionner-ecoute'), say: REFRAME, terms: ['questionner'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Lire : un brouillon à reprendre', TEXTE_A10, [
  { q: 'Quelles sont les deux tournures discutées ?', a: '« ont questionné la nouvelle procédure » et « elle ne fait pas encore sens ».' },
  { q: 'Par quoi remplacerais-tu « ont questionné » ?', a: 'Ont contesté, ont mis en doute, ou ont remis en question la nouvelle procédure.' },
  { q: 'Et « ne fait pas encore sens » ?', a: '« n’est pas encore claire » ou « n’a pas encore de sens pour tout le monde ».' },
  { q: 'Quelles tournures du texte sont déjà sûres ?', a: '« ne tient toujours pas debout » et « nous la remettrons en question ».' },
], 'rec-c1-18-texte-a10', ['questionner']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La personne', '« L’enquêtrice a questionné les voisins. » Cette phrase est…',
    ['correcte partout', 'déconseillée'], 0, 'On questionne des personnes. EN: correct.'),
  ctl('La décision', 'Pour to question a decision, tu écris…',
    ['remettre en question une décision', 'questionner une décision'], 0,
    'L’OQLF déconseille questionner en ce sens. EN: remettre en question.'),
  ctl('Le partage', 'Faire sens, sans du :',
    ['divise les ouvrages', 'est déconseillé par l’OQLF', 'est accepté par l’Académie'], 0,
    'L’OQLF le juge ancien, l’Académie le critique. EN: it divides.'),
], ['questionner']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Faire sens, questionner',
    opener: {
      line: 'Une procédure qui déplaît et un courriel à écrire : ici tu remets en question sans questionner, et tu pèses faire sens. EN: An unpopular procedure and an email to write: here you call into question without questionner, and weigh faire sens.',
      imageRef: 'lessons/faux-amis-savants/act10.jpg',
    },
    sections: [],
    milestone: 'Tu contestes, mets en doute et remets en question, tu questionnes une personne, et tu sais pourquoi faire sens divise. EN: You challenge, doubt and call into question, question a person, and know why faire sens divides.',
    estScreens: 38, restPoints: ['a10-construire', 'a10-ecoute'],
  },
  sections: [A10_HISTOIRE, A10_CARTES, A10_CONSTRUIRE, A10_ERREURS, A10_ECOUTE, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — CANCELLER, CÉDULER, BOOKER
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a11-histoire', layer: 'core',
  title: 'Le message vocal', frSub: 'De l’oral à l’écrit',
  setting: 'Maxime réécoute un message laissé par Samuel, puis le résume par écrit pour le fournisseur.',
  bubbles: [
    { from: 'narrator', fr: 'Le message dure vingt secondes. Le résumé doit partir en une minute.', en: 'The message lasts twenty seconds. The summary has to go out in a minute.' },
    { from: 'user', fr: 'Samuel dit que la rencontre est cancellée.', en: 'Samuel says the meeting is cancelled.' },
    { from: 'coach', fr: 'À l’écrit, annulée. L’OQLF déconseille canceller, et Usito le marque comme anglicisme du Québec.', en: 'In writing, annulée. The OQLF advises against canceller, and Usito marks it as a Québec anglicism.', warn: 'Annuler' },
    { from: 'user', fr: 'Il a essayé de la céduler à mardi.', en: 'He tried to schedule it for Tuesday.' },
    { from: 'coach', fr: 'De la fixer à mardi, ou de la reporter. Céduler vient de to schedule.', en: 'To set it for Tuesday, or to postpone it. Céduler comes from to schedule.', warn: 'Fixer' },
    { from: 'user', fr: 'Et il me demande de booker la petite salle.', en: 'And he asks me to book the small room.' },
    { from: 'coach', fr: 'De réserver la petite salle. À l’oral, tu entendras ces mots ; à l’écrit, garde les verbes français.', en: 'To reserve the small room. You will hear these words in speech; in writing, keep the French verbs.', warn: 'Réserver' },
  ],
  closing: { fr: 'À l’écrit : annuler, fixer, réserver.', en: 'In writing: annuler, fixer, réserver.' },
  audio: REC('rec-c1-18-vocal'), say: REFRAME, terms: ['oral'],
};

const A11_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a11-table', layer: 'core', sheetId: 'sheet-oral',
  title: 'Six verbes du bureau',
  cols: ['À l’oral', 'À l’écrit', 'Exemple'],
  rows: [
    { cells: ['canceller', 'annuler', 'annuler un rendez-vous'], say: fr(E(1124)),
      detail: { title: 'Annuler', body: 'L’OQLF déconseille canceller, surtout employé à l’oral ; Usito le marque anglicisme critiqué. EN: to cancel.', say: fr(E(1120)) } },
    { cells: ['céduler', 'fixer', 'fixer une réunion'], say: fr(E(1125)),
      detail: { title: 'Fixer', body: 'Pour une date, une heure. L’OQLF et Usito proposent fixer, prévoir, programmer, inscrire à l’horaire. EN: to set.', say: fr(E(1121)) } },
    { cells: ['céduler un cours', 'inscrire à l’horaire', 'à l’horaire du mardi'], say: fr(E(1127)),
      detail: { title: 'Inscrire à l’horaire', body: 'Pour un cours, une activité régulière. EN: to put on the schedule.', say: fr(E(1123)) } },
    { cells: ['booker', 'réserver', 'réserver une salle'], say: fr(E(1126)),
      detail: { title: 'Réserver', body: 'L’OQLF déconseille booker et propose réserver, retenir, faire une réservation. Ni Le Robert en ligne ni Usito ne l’enregistrent. EN: to book.', say: fr(E(1122)) } },
    { cells: ['booker une table', 'retenir', 'retenir une table'], say: fr(E(1129)),
      detail: { title: 'Retenir', body: 'Plus soutenu que réserver, pour une table, une chambre, une place. EN: to reserve.', say: fr(E(1129)) } },
    { cells: ['c’est cédulé', 'c’est prévu', 'prévu pour la mi-mai'], say: fr(E(1130)),
      detail: { title: 'Prévoir', body: 'Pour un événement à venir : le congrès est prévu pour mai. EN: scheduled.', say: fr(E(1130)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['oral'],
};

const A11_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-construire', layer: 'core', size: 'lg',
  title: 'Annuler, fixer, réserver', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Annuler et prévoir', [
      it(E(1124), 'annulé'),
      it(E(1131), 'l’annulation'),
      it(E(1125), 'fixer'),
      it(E(1130), 'prévu'),
    ], chk('« On a fixé la réunion à jeudi. » Fixer veut dire…',
      ['arrêter une date', 'réparer'], 0,
      'Fixer une réunion : en arrêter la date et l’heure. EN: to set.')),
    grp('Réserver et inscrire', [
      it(E(1126), 'réserver'),
      it(E(1129), 'retenir'),
      it(E(1127), 'inscrire à l’horaire'),
      it(E(1122), 'réserver une salle'),
    ], chk('Pour to book a table, en registre soigné :',
      ['retenir une table', 'booker une table'], 0,
      'Retenir, ou réserver. EN: retenir.')),
    ctl('Le verdict', 'Canceller, céduler, booker :',
      ['l’OQLF les déconseille tous les trois', 'Le Robert les enregistre tous', 'ils sont neutres à l’écrit'], 0,
      'Usito marque aussi canceller et céduler ; booker n’est dans aucun des deux dictionnaires consultés. EN: all three not recommended.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['oral'],
};

const A11_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a11-piege', layer: 'core', swipe: true,
  title: 'Six phrases à reprendre', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Ce qui s’entend ne s’écrit pas forcément',
    body: 'Au bureau, au Québec surtout, on entend canceller, céduler, booker. Dans un courriel, un compte rendu, une annonce : annuler, fixer ou programmer, réserver. EN: heard in speech; written as annuler, fixer, réserver.',
  },
  cards: [
    trap(E(1124), 'canceller', 'Le spectacle de ce soir est cancellé à cause de la tempête.', 'Annulé. EN: annulé.'),
    trap(E(1125), 'céduler', 'On a cédulé la réunion à jeudi, dix heures.', 'Fixé. EN: fixé.'),
    trap(E(1126), 'booker', 'J’ai booké la grande salle pour la formation.', 'Réservé. EN: réservé.'),
    trap(E(1127), 'céduler un cours', 'Le cours de yoga a été cédulé le mardi.', 'Inscrit à l’horaire. EN: inscrit à l’horaire.'),
    trap(E(1131), 'la cancellation', 'La cancellation a été annoncée la veille.', 'L’annulation. EN: annulation.'),
    trap(E(1130), 'c’est cédulé', 'Le congrès est cédulé pour la mi-mai.', 'Prévu. EN: prévu.'),
  ],
  drill: [
    { promptSay: 'Le spectacle est … à cause de la tempête.', opts: ['annulé', 'cancellé'], correct: 0 },
    { promptSay: 'On a … la réunion à jeudi.', opts: ['fixé', 'cédulé'], correct: 0 },
    { promptSay: 'J’ai … la grande salle.', opts: ['réservé', 'booké'], correct: 0 },
    { promptSay: 'Le cours a été inscrit à l’… du mardi.', opts: ['horaire', 'cédule'], correct: 0 },
    { promptSay: 'L’… a été annoncée la veille.', opts: ['annulation', 'cancellation'], correct: 0 },
    { promptSay: 'Le congrès est … pour la mi-mai.', opts: ['prévu', 'cédulé'], correct: 0 },
    { promptSay: 'Peux-tu … une table pour six ?', opts: ['retenir', 'booker'], correct: 0 },
    { promptSay: 'Il faut … le rendez-vous de demain.', opts: ['annuler', 'canceller'], correct: 0 },
  ],
  steps: STEPS('Ce qui s’entend ne s’écrit pas forcément', 'Six phrases à reprendre'),
  audio: REC('rec-c1-18-piege-oral'), say: REFRAME, terms: ['oral'],
};

const A11_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a11-dictee', layer: 'core',
  title: 'Écris ce que tu entends', frSub: 'La version écrite',
  itemIds: dicteeFor(11),
  audio: AUDIO, say: REFRAME, terms: ['oral'],
};

const A11_TEXTE = dansUnTexte('a11-texte', 'Lire : un brouillon à reprendre', TEXTE_A11, [
  { q: 'Quels sont les trois emprunts ?', a: 'Cancellée, céduler, booker.' },
  { q: 'Par quels verbes les remplacerais-tu à l’écrit ?', a: 'Annulée ; fixer ou reporter ; réserver.' },
  { q: 'Pourquoi la rencontre est-elle annulée ?', a: 'Le fournisseur est malade.' },
  { q: 'Quelle solution Samuel propose-t-il si la petite salle est prise ?', a: 'Faire la rencontre par téléphone.' },
], 'rec-c1-18-texte-a11', ['oral']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Annuler', 'Pour canceller, à l’écrit :',
    ['annuler', 'cancéler'], 0, 'Annuler. EN: annuler.'),
  ctl('Fixer', 'Pour céduler une réunion :',
    ['la fixer', 'la céduler', 'la cédule'], 0, 'Fixer, prévoir, programmer. EN: fixer.'),
  ctl('Réserver', 'Pour booker une salle :',
    ['la réserver', 'la booker'], 0, 'Réserver, retenir. EN: réserver.'),
], ['oral']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Canceller, céduler, booker',
    opener: {
      line: 'Un message vocal à résumer par écrit : ici tu fais passer canceller, céduler et booker de l’oral à l’écrit. EN: A voicemail to summarise in writing: here you take canceller, céduler and booker from speech to writing.',
      imageRef: 'lessons/faux-amis-savants/act11.jpg',
    },
    sections: [],
    milestone: 'Tu annules, fixes et réserves par écrit, et tu reconnais les emprunts de l’oral québécois. EN: You cancel, set and book in writing, and recognise the spoken Québec loans.',
    estScreens: 36, restPoints: ['a11-construire', 'a11-dictee'],
  },
  sections: [A11_HISTOIRE, A11_TABLE, A11_CONSTRUIRE, A11_PIEGE, A11_DICTEE, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TA NOTE DE RÉVISION
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a12-lecture', layer: 'core', questionsInModal: true,
  title: 'La note que tu vas imiter', frSub: 'Odile répond à Maxime',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'phrase clé', en: 'key sentence', note: 'La phrase qui porte l’information principale.' },
    { word: 'divise', en: 'divides', note: 'Un mot qui divise : sur lequel les ouvrages ne sont pas d’accord.' },
  ],
  questions: [
    { q: 'Global : que contient la note d’Odile ?', a: 'Un remerciement, la phrase révisée, puis pour chaque mot remplacé le mot choisi, qui critique l’emploi d’origine et si d’autres l’acceptent.' },
    { q: 'Détail : quels mots a-t-elle remplacés, et par quoi ?', a: 'Initié par lancé ; éligibles par admissibles.' },
    { q: 'Détail : que dit-elle du Dictionnaire de l’Académie à propos d’initier ?', a: 'Qu’il ne juge pas l’emploi condamnable en soi, mais qu’il le dit abusif.' },
    { q: 'Inférence : pourquoi écrit-elle « seulement un risque » pour éligibles ?', a: 'Parce que les ouvrages se partagent : Le Robert et l’usage de France l’acceptent, l’Académie et l’OQLF non.' },
    { q: 'Position : quel ton prend-elle avec Maxime ?', a: 'Amical et précis : elle remercie, dit que le texte est presque prêt et propose d’en discuter.' },
  ],
  audio: REC('rec-c1-18-modele'), say: REFRAME, terms: ['selon'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-note',
  title: 'Cinq étapes avant d’écrire', frSub: 'Repérer, remplacer, justifier',
  steps: [
    'Lis le texte une fois pour le sens, puis une fois en soulignant chaque mot savant d’allure anglaise. EN: read for meaning, then underline.',
    'Pour chaque mot souligné, retrouve son sens français : est-il employé ici dans ce sens ? EN: check its French meaning.',
    'Remplace les emplois critiqués par le mot qu’aucun ouvrage ne conteste. EN: replace with the uncontested word.',
    'Choisis quatre remplacements et, pour chacun, écris qui critique l’emploi et si d’autres l’acceptent. EN: justify four, with sources.',
    'Termine par une phrase amicale qui laisse la porte ouverte à la discussion. EN: end kindly.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['selon'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', sheetId: 'sheet-note',
  title: 'Quatre phrases que toute bonne note contient',
  cases: [
    uc('Tu remercies et tu rassures', E(1138)),
    uc('Tu annonces tes remplacements', E(1132)),
    uc('Tu dis que les ouvrages se partagent', E(1134)),
    uc('Tu laisses la porte ouverte', E(1139)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['selon'],
};

const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core',
  title: 'Maxime défend son brouillon', frSub: 'Six tours, à voix haute',
  setting: 'Maxime t’appelle : il n’est pas sûr d’accepter tes corrections. Explique chaque choix, avec ses sources, sans lui faire la leçon.',
  turns: [
    {
      ai: 'Salut. J’ai vu tes corrections. Pourquoi changer « initié » ?', en: 'Hi. I saw your corrections. Why change « initié »?',
      user: 'Parce que l’OQLF et l’Académie déconseillent initier au sens de lancer. « Lancé » ne divise personne.',
      userEn: 'Because the OQLF and the Académie advise against initier meaning lancer. « Lancé » divides nobody. (A verdict with its sources.)',
      alts: [
        { fr: 'Initier, en français, c’est faire découvrir un savoir. Pour un projet, on le lance.', en: 'In French, initier means introducing someone to a skill. You launch a project. (The French sense.)' },
        { fr: 'Ce n’est pas un contresens, mais un lecteur attentif s’y arrêterait.', en: 'It is not a mistranslation, but a careful reader would stop at it. (The risk, plainly.)' },
      ],
    },
    {
      ai: 'Mais « éligible », tout le monde le dit en France.', en: 'But everyone in France says « éligible ».',
      user: 'C’est vrai : Le Robert l’enregistre. Mais l’Académie et l’OQLF le déconseillent, alors j’ai pris « admissible ».',
      userEn: 'True: Le Robert records it. But the Académie and the OQLF advise against it, so I chose « admissible ». (Granting the divided case.)',
      alts: [
        { fr: 'Les ouvrages se partagent ; pour un texte lu des deux côtés, j’ai choisi le mot commun.', en: 'The authorities differ; for a text read on both sides, I chose the shared word. (The reason for the choice.)' },
        { fr: 'Ce n’est pas une faute pour tout le monde, seulement un risque à Montréal.', en: 'It is not a mistake for everyone, only a risk in Montréal. (Not a single verdict.)' },
      ],
    },
    {
      ai: 'Et « plateforme digitale » ? Ça fait moderne.', en: 'And « plateforme digitale »? It sounds modern.',
      user: 'La recommandation officielle est « numérique », en France comme au Québec. « Digital », c’est pour les doigts.',
      userEn: 'The official recommendation is « numérique », in France and in Québec. « Digital » is for fingers. (An agreed verdict.)',
      alts: [
        { fr: 'FranceTerme, l’Académie et l’OQLF recommandent numérique.', en: 'FranceTerme, the Académie and the OQLF recommend numérique. (The sources.)' },
        { fr: 'Même Le Robert renvoie de digital à numérique.', en: 'Even Le Robert refers digital to numérique. (A dictionary that records it still points elsewhere.)' },
      ],
    },
    {
      ai: 'Tu as aussi changé « une alternative à l’achat neuf ».', en: 'You also changed « une alternative à l’achat neuf ».',
      user: 'Oui : au sens strict, l’alternative est le choix entre deux. J’ai écrit « une solution de rechange ».',
      userEn: 'Yes: strictly, an alternative is the choice between two. I wrote « une solution de rechange ». (The strict sense.)',
      alts: [
        { fr: 'L’OQLF, Le Robert et Usito critiquent alternative au sens d’option.', en: 'The OQLF, Le Robert and Usito criticise alternative meaning option. (The sources.)' },
        { fr: 'On pourrait dire aussi que la réparation remplace l’achat neuf.', en: 'You could also say that repair replaces buying new. (A verb instead of a noun.)' },
      ],
    },
    {
      ai: 'Et « cédulés », « canceller » ? On dit ça tous les jours au bureau.', en: 'And « cédulés », « canceller »? We say that every day at the office.',
      user: 'À l’oral, d’accord. À l’écrit, l’OQLF les déconseille : « prévus le samedi », « si vous devez annuler ».',
      userEn: 'In speech, fine. In writing, the OQLF advises against them: « prévus le samedi », « si vous devez annuler ». (Speech versus writing.)',
      alts: [
        { fr: 'Usito les marque comme anglicismes critiqués du Québec.', en: 'Usito marks them as criticised Québec anglicisms. (A second source.)' },
        { fr: 'Pour une annonce publique, j’ai pris les verbes que tout le monde lit sans hésiter.', en: 'For a public announcement, I took the verbs everyone reads without hesitating. (The reader first.)' },
      ],
    },
    {
      ai: 'Bon. Tu crois que je peux garder « fait sens » ?', en: 'All right. Do you think I can keep « fait sens »?',
      user: 'Tu peux : l’OQLF ne le condamne pas. Mais l’Académie le critique ; « a du sens » ne divise personne.',
      userEn: 'You can: the OQLF does not condemn it. But the Académie criticises it; « a du sens » divides nobody. (A divided case, left to him.)',
      alts: [
        { fr: 'C’est ton choix : les ouvrages se partagent. Je proposerais « est logique ».', en: 'It is your choice: the authorities differ. I would suggest « est logique ». (Leaving the choice open.)' },
        { fr: 'On peut en discuter : ce n’est pas une faute pour tout le monde.', en: 'We can talk about it: it is not a mistake for everyone. (An open door.)' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['selon'],
};

const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission',
  title: 'Ta note de révision', frSub: 'Mission écrite',
  brief: `L’Atelier Brière-Sorel publie, à Montréal et à Lyon, une annonce écrite par ton collègue Maxime. Odile te confie la révision. Voici son brouillon à reprendre : ${BROUILLON_TACHE}`,
  briefEn: 'The Atelier Brière-Sorel is publishing, in Montréal and Lyon, an announcement written by your colleague Maxime. Odile asks you to revise it. His draft announces a free repair service run with a community reuse centre, and uses about ten learned false friends: initié, une belle opportunité, impacté, une alternative, éligibles, plateforme digitale, cédulés, canceller, versatile, fait sens and d’autres juridictions.',
  produce: 'Écris en 250 à 350 mots : d’abord l’annonce révisée (environ 120 mots), puis une note à Maxime, en le tutoyant, qui justifie au moins quatre de tes remplacements. Pour chacun, dis qui critique l’emploi d’origine et, si les ouvrages se partagent, qui l’accepte. Ne donne jamais un verdict unique quand les ouvrages ne sont pas d’accord.',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 380 },
  rubric: {
    criteria: [
      {
        key: 'tache', label: 'Réalisation de la tâche', maxPoints: 3,
        descriptors: [
          '3 : L’annonce révisée est complète et naturelle ; au moins huit emplois critiqués sont remplacés ; la note justifie au moins quatre choix. Entre 250 et 350 mots.',
          '2 : L’annonce garde deux ou trois emplois critiqués, ou la note ne justifie que deux ou trois choix, ou la longueur sort un peu des limites.',
          '1 : L’annonce n’est pas révisée, ou la note se contente de dire que les mots sont faux.',
        ],
      },
      {
        key: 'precision', label: 'Précision des remplacements', maxPoints: 3,
        descriptors: [
          '3 : Chaque remplacement dit exactement ce que voulait Maxime (lancé, occasion, touché, solution de rechange, admissibles, numérique, prévus, annuler, polyvalente, a du sens, d’autres villes), et les sens français justes sont gardés.',
          '2 : Un ou deux remplacements changent le sens ou restent vagues.',
          '1 : Plusieurs remplacements sont faux, ou un emploi correct a été corrigé à tort.',
        ],
      },
      {
        key: 'sources', label: 'Sources et nuance', maxPoints: 2,
        descriptors: [
          '2 : Chaque justification nomme un ouvrage (OQLF, Académie, Le Robert, Usito, FranceTerme) ; les cas partagés (éligible, opportunité, impacter, faire sens) sont présentés comme partagés.',
          '1 : Les sources manquent, ou un cas partagé est présenté comme une faute pour tous.',
        ],
      },
      {
        key: 'correction', label: 'Correction', maxPoints: 2,
        descriptors: [
          '2 : La langue est correcte : accords, constructions (admissible à, avoir droit à, remettre en question), typographie française.',
          '1 : Des erreurs gênent parfois la lecture.',
        ],
      },
      {
        key: 'registre', label: 'Registre et ton', maxPoints: 2,
        descriptors: [
          '2 : L’annonce est dans un registre soigné et public ; la note tutoie Maxime, reste amicale et laisse la discussion ouverte.',
          '1 : La note fait la leçon, se moque, ou passe au vous administratif.',
        ],
      },
    ],
  },
  scaffold: [
    'Merci pour ton brouillon :',
    'J’ai remplacé',
    'Selon l’OQLF,',
    'L’Académie, de son côté,',
    'Ici, les ouvrages se partagent :',
    'Pour un public des deux côtés de l’Atlantique,',
    'Dis-moi si tu préfères',
  ],
  modelAnswer: 'Annonce révisée\n\nL’Atelier Brière-Sorel est fier d’annoncer qu’il a lancé, avec la Ressourcerie Le Grand Soin, un service de réparation pour les familles du quartier. C’est une belle occasion de prolonger la vie des objets. La hausse des prix a durement touché beaucoup de ménages : la réparation gratuite offre une solution de rechange à l’achat neuf. Les familles admissibles pourront prendre rendez-vous sur notre plateforme numérique. Les ateliers sont prévus le samedi matin ; si vous devez annuler, prévenez-nous la veille. Notre équipe, très polyvalente, répare aussi bien les grille-pain que les vélos. Ce projet a du sens dans une ville qui veut réduire ses déchets, et nous espérons que d’autres villes s’en inspireront.\n\nNote pour Maxime\n\nMaxime, ton annonce est claire et chaleureuse ; je n’ai touché qu’aux mots. Quatre choix méritent une explication. « Initié » : l’OQLF et l’Académie déconseillent initier au sens de lancer. « Éligibles » : les ouvrages se partagent. L’Académie et l’OQLF le refusent, mais Le Robert l’enregistre sans marque ; comme l’annonce paraît aussi à Montréal, « admissibles » évite tout débat. « Digitale » : FranceTerme et l’OQLF recommandent numérique, et Le Robert renvoie lui-même à ce mot. « Fait sens » : l’OQLF juge la tournure ancienne et ne la condamne pas ; seule l’Académie la critique. J’ai mis « a du sens », mais c’est le choix le plus discutable. Les autres remplacements vont de soi : « occasion » pour opportunité, « touché » pour impacté, « solution de rechange » pour alternative, « prévus » et « annuler » pour les deux mots de l’oral, et « polyvalente » pour versatile, qui veut dire changeant. Pour « juridictions », j’ai simplement nommé ce que tu voulais dire : d’autres villes. Dis-moi si tu tiens à l’un de tes mots ; on en parlera.\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : onze remplacements, quatre choix justifiés.\n2. Précision : lancé, occasion, touché, solution de rechange, admissibles, numérique, prévus, annuler, polyvalente, a du sens, d’autres villes.\n3. Sources : OQLF, Académie, Le Robert, FranceTerme ; éligible et faire sens présentés comme partagés.\n4. Registre : annonce soignée, note amicale au tu.',
  modelAnswerEn: 'Revised announcement: The Atelier Brière-Sorel is proud to announce that it has launched, with the Ressourcerie Le Grand Soin, a repair service for local families. It is a fine opportunity to extend the life of objects. Rising prices have hit many households hard: free repair offers an alternative to buying new. Eligible families can book on our digital platform. Workshops are held on Saturday mornings; if you need to cancel, let us know the day before. Our very versatile team repairs toasters as well as bikes. This project makes sense in a city that wants to cut its waste, and we hope other cities will follow. Note for Maxime: your announcement is clear and warm; I only touched the words. Four choices need explaining. « Initié »: the OQLF and the Académie advise against initier meaning launch. « Éligibles »: the authorities differ. The Académie and the OQLF reject it, but Le Robert records it unmarked; since the announcement also appears in Montréal, « admissibles » avoids any debate. « Digitale »: FranceTerme and the OQLF recommend numérique, and Le Robert itself refers to that word. « Fait sens »: the OQLF calls the phrase old and does not condemn it; only the Académie criticises it. I wrote « a du sens », but it is the most debatable choice. The other replacements are straightforward: « occasion » for opportunité, « touché » for impacté, « solution de rechange » for alternative, « prévus » and « annuler » for the two spoken words, and « polyvalente » for versatile, which means fickle. For « juridictions », I simply named what you meant: other cities. Tell me if you want to keep any of your words; we will talk about it.',
  watchFor: [
    { pattern: 'Keeps initier in the sense of lancer, or replaces it with a verb that changes the meaning (réaliser = carry out).', criterion: 'precision', feedback: 'Pour un projet qui commence : lancer, mettre sur pied, être à l’origine de.', ref: 'a2-cartes' },
    { pattern: 'Presents éligible, opportunité, impacter or faire sens as wrong for every authority, with no mention that Le Robert, Usito or the OQLF accept or record them.', criterion: 'sources', feedback: 'Ici, les ouvrages se partagent : dis qui critique et qui accepte.', ref: 'a8-table' },
    { pattern: 'Justifies a replacement with « c’est faux » or « c’est un anglicisme » and no named authority.', criterion: 'sources', feedback: 'Nomme la source : selon l’OQLF, selon l’Académie, selon Le Robert.', ref: 'a12-plan' },
    { pattern: 'Keeps « une alternative » for a single option, or writes « deux alternatives ».', criterion: 'precision', feedback: 'Une solution de rechange, une autre option ; l’alternative est le choix entre deux.', ref: 'a4-cartes' },
    { pattern: 'Keeps digital for numérique, or « digitaliser ».', criterion: 'precision', feedback: 'Numérique, numériser : FranceTerme et l’OQLF.', ref: 'a9-cartes' },
    { pattern: 'Keeps cédulés, canceller or booker in the written announcement.', criterion: 'precision', feedback: 'À l’écrit : prévus, annuler, réserver.', ref: 'a11-table' },
    { pattern: 'Replaces versatile with a word that keeps the « changing its mind » sense, or keeps versatile.', criterion: 'precision', feedback: 'Pour une équipe qui sait tout faire : polyvalente.', ref: 'a6-cartes' },
    { pattern: 'Keeps « d’autres juridictions » for other cities or provinces.', criterion: 'precision', feedback: 'Nomme le lieu : d’autres villes, d’autres provinces.', ref: 'a7-table' },
    { pattern: 'Corrects a correct French use (initier qqn à, l’opportunité d’une mesure, une juridiction civile, éligible au conseil, empreintes digitales).', criterion: 'precision', feedback: 'Ce sens-là est français : garde-le.', ref: 'a1-rappel' },
    { pattern: 'Note is lecturing or mocking, or uses vous with a colleague who writes in tu.', criterion: 'registre', feedback: 'Remercie, tutoie, et laisse la porte ouverte.', ref: 'a12-lecture' },
    { pattern: 'Copies whole sentences of the draft into the note, or leaves the announcement unrevised and only writes the note.', criterion: 'tache', feedback: 'Deux parties : l’annonce révisée, puis la note.', ref: 'a12-usages' },
  ],
  graderNotes: [
    'Count the words of both parts together, excluding the headings, the greeting and the signature: 250 to 350 with 10% tolerance (225 to 385) before criterion « tache » loses a point. responseSpec allows 380.',
    'The draft holds eleven criticised uses: initié, belle opportunité, impacté, une alternative, éligibles, digitale, cédulés, canceller, versatile, fait sens, juridictions. Eight replaced satisfy « tache »; four justified with a source satisfy the note.',
    'DIVIDED CASES (corpus §A.7): éligible (Académie and OQLF against; Le Robert unmarked; Usito: not generally criticised in France), opportunité (Académie: anglicism; OQLF: criticised; Le Robert: recorded as anglicism; Usito: sometimes criticised), impacter (Académie: faulty; OQLF against; Le Robert: recorded as anglicism; Usito: sometimes criticised), faire sens (Académie against; OQLF: old, not condemned). A learner who KEEPS one of these and says why, with sources, loses nothing. A learner who calls one of them wrong for everyone loses the point in « sources ».',
    'Accept any precise replacement: lancé, mis sur pied, est à l’origine de; occasion, chance; touché, frappé, pesé sur, eu une incidence sur; solution de rechange, de remplacement, autre possibilité; admissibles, qui remplissent les conditions, qui y ont droit; numérique, en ligne; prévus, programmés, fixés, ont lieu; annuler; polyvalente, souple; a du sens, est logique, se justifie; d’autres villes, d’autres municipalités, d’autres provinces.',
    'Do not penalise « réaliser » in the sense of se rendre compte (accepted by the OQLF, taught in lesson 33 of B2) or the noun « impact » (criticised by some, not taught as an error here).',
    'The learner need not quote an authority word for word; a fair paraphrase with the authority named is enough. A misattributed verdict (for example « l’OQLF accepte éligible ») costs the point in « sources ».',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 33 du B2 »), never by id.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['selon'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core',
  title: 'Dis les mots sûrs à voix haute', frSub: 'Le mot que personne ne conteste',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['selon'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-note',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'initier, opportunité', v: 'lancer ; occasion', say: fr(E(1021)),
      detail: { title: 'Commencer, saisir', body: 'Lancer, amorcer, entamer. Une occasion se saisit ; l’opportunité d’une mesure se discute. EN: launch; occasion.', say: fr(E(1033)) } },
    { k: 'alternative, impacter', v: 'option ; toucher', say: fr(E(1044)),
      detail: { title: 'Choisir, affecter', body: 'L’alternative est le choix entre deux. Une crise touche, pèse, se répercute. EN: option; affect.', say: fr(E(1057)) } },
    { k: 'académique, versatile', v: 'universitaire ; polyvalent', say: fr(E(1069)),
      detail: { title: 'Deux adjectifs', body: 'L’année universitaire ; un outil polyvalent. Versatile : changeant. EN: university; versatile.', say: fr(E(1070)) } },
    { k: 'juridiction, éligible', v: 'compétence ; admissible', say: fr(E(1080)),
      detail: { title: 'Le vocabulaire officiel', body: 'Une juridiction juge ; une province a des compétences. Éligible divise ; admissible passe partout. EN: powers; eligible.', say: fr(E(1092)) } },
    { k: 'digital, questionner', v: 'numérique ; remettre en question', say: fr(E(1104)),
      detail: { title: 'Données et doute', body: 'Numérique pour les données. On questionne une personne ; une décision, on la remet en question. Faire sens divise. EN: digital; question.', say: fr(E(1116)) } },
    { k: 'canceller, céduler, booker', v: 'annuler, fixer, réserver', say: fr(E(1128)),
      detail: { title: 'De l’oral à l’écrit', body: 'Ce qui s’entend au bureau ne s’écrit pas forcément. EN: speech to writing.', say: fr(E(1137)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['selon'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu repères les faux amis savants qui passent inaperçus dans un rapport : initier, opportunité, alternative, impacter, académique, versatile, juridiction, éligible, digital, faire sens, questionner, et les emprunts de l’oral québécois. Pour chacun, tu connais le mot qu’aucun ouvrage ne conteste et le sens français qu’il faut garder. Surtout, tu sais dire qui critique un emploi et qui l’accepte : l’OQLF, l’Académie, Le Robert, Usito, FranceTerme ne sont pas toujours d’accord. Le piège qui reste, c’est de corriger trop : éligible au conseil, initier quelqu’un à, une juridiction civile sont justes partout. Avant d’envoyer une révision, relis chaque correction en te demandant : selon qui ? EN: Before sending a revision, ask of each correction: according to whom?',
  stats: [
    { k: 'Commencer', v: 'lancer, occasion, option' },
    { k: 'Dire l’effet', v: 'toucher, se répercuter' },
    { k: 'L’officiel', v: 'compétence, admissible' },
    { k: 'Les sources', v: 'selon qui, et qui accepte' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 2 to 11, a round that
 *  recycles b1.35, b1.37, b2.27, b2.28, b2.29 and b2.33 (named in each
 *  question), and a « comme à l’examen » round. `fold()` strips accents,
 *  commas, apostrophes, hyphens and SPACES, so every typed answer turns on a
 *  word, and every equally safe answer is listed in `accept`. No question
 *  asks the learner to call a divided use « faux ». */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Un mot est critiqué ici. Écris la phrase avec le mot sûr. EN: One word is criticised here; write the sentence with the safe word.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: ES_Q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const MOT = 'Écris le mot sûr qui manque.';

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'L’examen',
  passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r2-initier', label: 'Initier', targets: ['initier-commencer'],
      questions: [
        mc('« C’est Léa qui a … ce projet. » Le verbe que personne ne conteste :', ['lancé', 'initié', 'initialisé'], 0, 'Lancer. EN: lancé.', 'a2-cartes'),
        mc('« Mon grand-père m’a initiée aux échecs. » Cette phrase…', ['emploie initier au sens français', 'calque l’anglais to initiate'], 0, 'Faire découvrir un savoir. EN: French sense.', 'a2-construire'),
        mc('Qui déconseille initier au sens de commencer ?', ['l’OQLF et l’Académie', 'personne', 'seulement Usito'], 0, 'Les deux, et Usito aussi. EN: the OQLF and the Académie.', 'a2-construire'),
        tI(MOT, 'Les deux syndicats ont ___ les négociations lundi. (commencé)', 'entamé', 'Entamer, amorcer. EN: began.', 'a2-piege', ['amorcé', 'commencé', 'ouvert', 'engagé']),
        tI(MOT, 'La ville a mis sur ___ un programme d’aide aux aînés.', 'pied', 'Mettre sur pied. EN: set up.', 'a2-piege'),
        tI('Écris les mots qui manquent.', 'Elle est à l’___ de la pétition.', 'origine', 'Être à l’origine de. EN: behind it.', 'a2-cartes'),
        eS('Qui a initié cette rencontre ?', fr(E(1023)), 'Prendre l’initiative de. EN: took the initiative.', 'a2-piege', ['Qui a lancé cette rencontre ?', 'Qui a organisé cette rencontre ?', 'Qui est à l’origine de cette rencontre ?', 'Qui a provoqué cette rencontre ?']),
        lC('Écoute. Dans quel domaine ce sens d’initier est-il admis ?', fr(E(1020)), ['en sciences', 'en politique', 'en publicité'], 0, 'L’Académie l’enregistre en sciences. EN: in science.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-opportunite', label: 'Opportunité', targets: ['opportunite-occasion'],
      questions: [
        mc('« C’était une belle … de montrer ce que je sais faire. » Le mot que personne ne conteste :', ['occasion', 'opportunité'], 0, 'Occasion. EN: occasion.', 'a3-table'),
        mc('Pour job opportunities, l’OQLF propose…', ['des débouchés, des perspectives', 'des opportunités d’emploi', 'des occasions d’emploi'], 0, 'Débouchés, perspectives. EN: openings.', 'a3-table'),
        mc('Le Robert, pour opportunité au sens d’occasion…', ['l’enregistre, marqué anglicisme', 'le condamne', 'l’ignore'], 0, 'Il l’enregistre : les ouvrages se partagent. EN: records it.', 'a3-construire'),
        mc('« Le conseil doute de l’opportunité de cette dépense. »', ['sens français, correct partout', 'emploi critiqué'], 0, 'Ce qui vient à propos. EN: French sense.', 'a3-construire'),
        tI(MOT, 'J’ai eu la ___ de lui parler avant son départ.', 'chance', 'Avoir la chance de. EN: chance.', 'a3-erreurs', ['possibilité']),
        tI(MOT, 'Ne laisse pas passer une ___ pareille.', 'occasion', 'Une occasion se laisse passer. EN: occasion.', 'a3-erreurs', ['chance']),
        eS('Ce secteur offre beaucoup d’opportunités aux jeunes diplômés.', fr(E(1030)), 'Débouchés. EN: openings.', 'a3-erreurs', ['Ce secteur offre beaucoup de perspectives aux jeunes diplômés.', 'Ce secteur offre beaucoup de possibilités aux jeunes diplômés.', 'Ce secteur offre beaucoup d’emplois aux jeunes diplômés.']),
        lC('Écoute. Que veut faire la personne ?', fr(E(1032)), ['rencontrer quelqu’un', 'refuser un poste'], 0, 'Avoir l’occasion de vous rencontrer. EN: to meet you.', 'a3-construire'),
      ],
    },
    {
      id: 'r4-alternative', label: 'Alternative', targets: ['alternative-option'],
      questions: [
        mc('Quatre possibilités s’offrent à toi. Tu as…', ['quatre options', 'quatre alternatives'], 0, 'Options. EN: options.', 'a4-cartes'),
        mc('L’alternative, au sens de l’Académie :', ['le choix entre deux solutions', 'chacune des solutions', 'une solution meilleure'], 0, 'Le choix lui-même. EN: the choice between two.', 'a4-cartes'),
        mc('« Deux alternatives », selon l’OQLF, est…', ['un pléonasme', 'la forme correcte'], 0, 'L’alternative contient déjà deux. EN: a pleonasm.', 'a4-cartes'),
        mc('« L’alternative est simple : partir ce soir ou attendre lundi. »', ['correcte partout', 'critiquée'], 0, 'Deux branches. EN: correct.', 'a4-construire'),
        tI(MOT, 'Si le train est annulé, quelle est la solution de ___ ?', 'rechange', 'Solution de rechange. EN: fallback.', 'a4-piege', ['remplacement']),
        tI(MOT, 'La clinique offre une autre ___ de traitement.', 'possibilité', 'Une autre possibilité. EN: option.', 'a4-piege', ['option', 'solution', 'forme']),
        eS('Nous avons trois alternatives, et aucune n’est parfaite.', fr(E(1041)), 'Trois options. EN: options.', 'a4-piege', ['Nous avons trois solutions, et aucune n’est parfaite.', 'Nous avons trois possibilités, et aucune n’est parfaite.', 'Nous avons trois choix, et aucun n’est parfait.']),
        lC('Écoute. Combien de solutions le comité propose-t-il ?', fr(E(1046)), ['deux', 'trois', 'aucune'], 0, 'Deux solutions possibles. EN: two.', 'a4-construire'),
      ],
    },
    {
      id: 'r5-impacter', label: 'Impacter', targets: ['impacter-effet'],
      questions: [
        mc('« La hausse du carburant … d’abord les livreurs. » Le verbe que personne ne conteste :', ['touche', 'impacte'], 0, 'Toucher. EN: hits.', 'a5-cartes'),
        mc('Selon l’Académie, impacter est…', ['une forme verbale fautive', 'un verbe recommandé'], 0, 'Dire, ne pas dire. EN: faulty.', 'a5-construire'),
        mc('Le Robert, pour impacter…', ['l’enregistre, marqué anglicisme', 'le refuse'], 0, 'Les ouvrages se partagent. EN: records it.', 'a5-construire'),
        mc('« La grève s’est répercutée sur tout le réseau. » L’effet…', ['s’est transmis de proche en proche', 'a été nul', 'a été positif'], 0, 'Se répercuter. EN: knock-on.', 'a5-cartes'),
        tI(MOT, 'Les travaux ont eu une ___ sur la fréquentation du marché.', 'incidence', 'Avoir une incidence sur. EN: effect.', 'a5-erreurs', ['influence', 'conséquence', 'répercussion']),
        tI(MOT, 'Le froid a ___ les chantiers tout l’hiver.', 'ralenti', 'Ralentir : le verbe qui dit comment. EN: slowed.', 'a5-erreurs', ['retardé', 'freiné', 'bloqué', 'arrêté', 'perturbé']),
        eS('La pluie a impacté la fréquentation de moitié.', fr(E(1059)), 'Faire baisser dit le sens de l’effet. EN: brought down.', 'a5-erreurs', ['La pluie a réduit la fréquentation de moitié.', 'La pluie a fait chuter la fréquentation de moitié.', 'La pluie a diminué la fréquentation de moitié.']),
        lC('Écoute. Sur quoi pèsent les travaux ?', fr(E(1053)), ['la fréquentation du marché', 'le prix des loyers'], 0, 'Une incidence sur la fréquentation. EN: attendance.', 'a5-dictee'),
      ],
    },
    {
      id: 'r6-academique', label: 'Académique, versatile', targets: ['academique-universitaire'],
      questions: [
        mc('Pour academic year, à l’université :', ['l’année universitaire', 'l’année académique'], 0, 'Universitaire. EN: universitaire.', 'a6-cartes'),
        mc('« Ce robot culinaire est vraiment … » (il sert à tout)', ['polyvalent', 'versatile'], 0, 'Polyvalent. EN: versatile.', 'a6-cartes'),
        mc('« L’opinion publique s’est montrée versatile. » Elle…', ['a souvent changé d’avis', 'savait tout faire'], 0, 'Versatile : changeant. EN: fickle.', 'a6-construire'),
        mc('En Belgique, les universités écrivent calendrier académique. C’est…', ['un usage, que l’Académie et l’OQLF déconseillent', 'la seule forme correcte'], 0, 'Un usage n’est pas un avis. EN: a usage.', 'a6-construire'),
        tI(MOT, 'À l’école, on consulte le dossier ___ .', 'scolaire', 'Scolaire. EN: school record.', 'a6-piege'),
        tI(MOT, 'Il nous faut quelqu’un de ___ , capable de passer d’une tâche à l’autre.', 'souple', 'Souple, polyvalent. EN: adaptable.', 'a6-piege', ['polyvalent', 'flexible', 'adaptable']),
        eS('Elle a publié des travaux académiques remarqués.', fr(E(1065)), 'Universitaires : l’exemple de l’Académie. EN: universitaires.', 'a6-piege'),
        lC('Écoute. Que reproche-t-on à ce style ?', fr(E(1066)), ['d’être trop conventionnel', 'd’être trop familier'], 0, 'Académique, au sens français. EN: too conventional.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-juridiction', label: 'Juridiction', targets: ['juridiction-competence'],
      questions: [
        mc('Une juridiction pénale, c’est…', ['un tribunal', 'une province', 'un ministère'], 0, 'Le sens français. EN: a court.', 'a7-table'),
        mc('Pour other jurisdictions, dans une note sur le Canada :', ['d’autres provinces', 'd’autres juridictions'], 0, 'Nomme le lieu. EN: other provinces.', 'a7-table'),
        mc('Qui critique juridiction au sens d’autorité d’un gouvernement ?', ['Usito, et le GDT pour un territoire', 'personne', 'l’Académie seulement'], 0, 'Usito et le GDT ; Le Robert admet l’étendue du pouvoir de juger. EN: Québec sources.', 'a7-construire'),
        mc('« Cette question n’est pas du … de la mairie. »', ['ressort', 'juridiction'], 0, 'Du ressort. EN: not a matter for.', 'a7-table'),
        tI(MOT, 'Au Canada, la santé relève surtout de la ___ des provinces.', 'compétence', 'Compétence. EN: jurisdiction.', 'a7-erreurs', ['responsabilité']),
        tI(MOT, 'Le ministère n’a pas l’___ nécessaire pour trancher.', 'autorité', 'L’autorité. EN: authority.', 'a7-exemples', ['compétence', 'pouvoir']),
        eS('Plusieurs juridictions ont déjà adopté une loi semblable.', fr(E(1082)), 'Nomme les provinces. EN: provinces.', 'a7-erreurs', ['Plusieurs pays ont déjà adopté une loi semblable.', 'Plusieurs États ont déjà adopté une loi semblable.']),
        lC('Écoute. Qui va juger cette affaire ?', fr(E(1077)), ['un tribunal pénal', 'le gouvernement'], 0, 'Une juridiction pénale. EN: a criminal court.', 'a7-construire'),
      ],
    },
    {
      id: 'r8-eligible', label: 'Éligible', targets: ['eligible-admissible'],
      questions: [
        mc('Pour une bourse, le mot qu’aucun ouvrage ne conteste :', ['admissible', 'éligible'], 0, 'Admissible. EN: admissible.', 'a8-table'),
        mc('Le Robert, pour éligible à une aide…', ['l’enregistre sans marque', 'le condamne'], 0, 'Les ouvrages se partagent. EN: unmarked.', 'a8-table'),
        mc('Usito dit d’éligible au sens d’admissible qu’il est…', ['critiqué au Québec, généralement pas en France', 'accepté partout', 'inconnu'], 0, 'Usito, remarque. EN: Québec versus France.', 'a8-table'),
        mc('« Être éligible au conseil municipal » :', ['correct partout', 'critiqué'], 0, 'Pouvoir être élu. EN: correct.', 'a8-construire'),
        tI(MOT, 'À soixante-cinq ans, Martine aura ___ à sa pension complète.', 'droit', 'Avoir droit à. EN: entitled.', 'a8-erreurs'),
        tI(MOT, 'Les familles qui ___ les conditions recevront l’aide en mars.', 'remplissent', 'Remplir les conditions. EN: meet.', 'a8-construire', ['satisfont', 'réunissent']),
        eS('les critères d’éligibilité', fr(E(1095)), 'L’admissibilité. EN: eligibility criteria.', 'a8-erreurs'),
        lC('Écoute. Qui peut recevoir la bourse ?', fr(E(1088)), ['qui a moins de trente ans', 'qui a plus de trente ans'], 0, 'Moins de trente ans. EN: under thirty.', 'a8-construire'),
      ],
    },
    {
      id: 'r9-numerique', label: 'Digital ou numérique', targets: ['digital-numerique'],
      questions: [
        mc('Pour digital transformation :', ['la transformation numérique', 'la transformation digitale'], 0, 'Numérique. EN: numérique.', 'a9-cartes'),
        mc('Digital est juste dans…', ['les empreintes digitales', 'la stratégie digitale', 'un affichage digital'], 0, 'Les doigts. EN: fingerprints.', 'a9-construire'),
        mc('Qui recommande numérique ?', ['l’Académie, FranceTerme et l’OQLF', 'seulement l’OQLF'], 0, 'Un cas où les ouvrages s’accordent. EN: they agree.', 'a9-construire'),
        tI(MOT, 'La bibliothèque a ___ ses plus vieux journaux. (digitized)', 'numérisé', 'Numériser. EN: digitised.', 'a9-piege', ['scanné']),
        tI(MOT, 'La ___ des dossiers prendra six mois. (digitization)', 'numérisation', 'La numérisation. EN: digitisation.', 'a9-piege'),
        tI(MOT, 'Nous cherchons un responsable de la communication ___ .', 'numérique', 'Numérique. EN: digital.', 'a9-piege'),
        eS('Le service passe au tout digital en janvier.', fr(E(1106)), 'Le tout numérique. EN: fully digital.', 'a9-piege'),
        lC('Écoute. Où prend-on les empreintes ?', fr(E(1102)), ['au guichet', 'en ligne'], 0, 'Au guichet. EN: at the counter.', 'a9-construire'),
      ],
    },
    {
      id: 'r10-questionner', label: 'Faire sens, questionner', targets: ['questionner-douter'],
      questions: [
        mc('Pour to question a decision :', ['remettre en question une décision', 'questionner une décision'], 0, 'L’OQLF déconseille questionner en ce sens. EN: call into question.', 'a10-cartes'),
        mc('« L’enquêtrice a questionné les voisins. »', ['correct partout', 'déconseillé'], 0, 'On questionne des personnes. EN: correct.', 'a10-construire'),
        mc('Faire sens, sans du :', ['les ouvrages se partagent', 'l’OQLF le condamne', 'l’Académie l’accepte'], 0, 'L’OQLF le juge ancien ; l’Académie le critique. EN: divided.', 'a10-cartes'),
        mc(`${Cap(CALQUER_REF)} t’a appris que faire du sens est…`, ['déconseillé par l’OQLF', 'recommandé'], 0, 'Avoir du sens, être logique. EN: not recommended.', 'a10-construire'),
        tI(MOT, 'Plusieurs chercheurs mettent en ___ ces résultats.', 'doute', 'Mettre en doute. EN: cast doubt.', 'a10-erreurs'),
        tI(MOT, 'Les élus ont ___ le choix du site.', 'contesté', 'Contester. EN: challenged.', 'a10-erreurs', ['critiqué', 'refusé', 'rejeté']),
        eS('Je questionne la date choisie.', fr(E(1119)), 'S’interroger sur. EN: I wonder about.', 'a10-erreurs', ['Je mets en doute la date choisie.', 'Je conteste la date choisie.', 'Je remets en question la date choisie.']),
        lC('Écoute. L’explication suffit-elle ?', fr(E(1118)), ['non', 'oui'], 0, 'Elle tient debout, mais ne suffit pas. EN: no.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-oral', label: 'Canceller, céduler, booker', targets: ['emprunt-oral'],
      questions: [
        mc('Pour canceller, à l’écrit :', ['annuler', 'cancéler'], 0, 'Annuler. EN: annuler.', 'a11-table'),
        mc('Pour booker une salle :', ['la réserver', 'la booker'], 0, 'Réserver. EN: book.', 'a11-table'),
        mc('Qui déconseille ces trois emprunts ?', ['l’OQLF', 'Le Robert', 'personne'], 0, 'L’OQLF ; Usito marque canceller et céduler. EN: the OQLF.', 'a11-construire'),
        tI(MOT, 'On a ___ la réunion à jeudi, dix heures.', 'fixé', 'Fixer. EN: set.', 'a11-piege', ['prévu', 'programmé', 'mis', 'déplacé', 'reporté']),
        tI(MOT, 'Le cours de yoga a été inscrit à l’___ du mardi.', 'horaire', 'Inscrire à l’horaire. EN: schedule.', 'a11-piege', ['emploi du temps']),
        tI(MOT, 'Le congrès est ___ pour la mi-mai.', 'prévu', 'Prévu. EN: scheduled.', 'a11-piege', ['programmé', 'fixé']),
        eS('La cancellation a été annoncée la veille.', fr(E(1131)), 'L’annulation. EN: cancellation.', 'a11-piege'),
        lC('Écoute. Pourquoi le spectacle n’a-t-il pas lieu ?', fr(E(1124)), ['à cause de la tempête', 'faute de public'], 0, 'La tempête. EN: the storm.', 'a11-dictee'),
      ],
    },
    {
      id: 'r12-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(EMOTIONS_REF)} : décevoir veut dire…`, ['ne pas répondre à une attente', 'tromper'], 0, 'Décevoir n’est pas tromper. EN: to disappoint.', 'a1-rappel'),
        mc(`${Cap(LECTURE_REF)} : actuellement veut dire…`, ['en ce moment', 'en fait'], 0, 'Actually : en fait. EN: currently.', 'a1-rappel'),
        mc(`${Cap(JURIDIQUE_REF)} : « éventuellement »…`, ['peut-être', 'finalement'], 0, 'Jamais finalement. EN: possibly.', 'a1-rappel'),
        mc(`${Cap(SOINS_REF)} : un physicien…`, ['fait de la physique', 'soigne les malades'], 0, 'Un médecin soigne. EN: a physicist.', 'a1-rappel'),
        mc(`${Cap(SCIENCE_REF)} : evidence se dit…`, ['des preuves, des données', 'une évidence'], 0, `Une évidence saute aux yeux ; ${IDEES_REF_PLANNED} y revient. EN: preuves.`, 'a1-rappel'),
        mc(`${Cap(JURIDIQUE_REF)} : the location of the flat…`, ['l’emplacement', 'la location'], 0, 'La location, c’est le fait de louer. EN: emplacement.', 'a1-rappel'),
        mc(`${Cap(CALQUER_REF)} : un calque de mot…`, ['donne à un mot français le sens d’un mot anglais', 'traduit une expression entière'], 0, `« ${B233_REFRAME} » EN: ${B233_REFRAME_EN}`, 'a1-rappel'),
        lC(`Écoute. ${Cap(LECTURE_REF)} : que veut dire la phrase ?`, fr(B137_EVENT), ['je pourrais peut-être partager un appartement', 'j’ai fini par partager un appartement'], 0, 'Éventuellement : peut-être. EN: possibly.', 'a1-rappel'),
      ],
    },
    {
      id: 'r13-examen', label: 'Comme à l’examen', targets: ['revision-sans-source'],
      questions: [
        mc('Compréhension écrite. Combien de mots Odile a-t-elle remplacés dans la note de l’acte 12 ?', ['deux', 'six', 'onze', 'aucun'], 0, 'Initié et éligibles. EN: two.', 'a12-lecture'),
        mc('Compréhension écrite. Pourquoi Odile dit-elle « seulement un risque » ?', ['les ouvrages se partagent sur éligible', 'elle n’est pas sûre de son orthographe', 'Maxime a raison partout', 'le texte est trop long'], 0, 'Le Robert et Usito ne le condamnent pas en France. EN: divided authorities.', 'a12-lecture'),
        mc('Compréhension écrite. Le ton de la note est…', ['amical et précis', 'sévère', 'moqueur', 'indifférent'], 0, 'Elle remercie et propose d’en discuter. EN: friendly and precise.', 'a12-lecture'),
        mc('Choisis la justification la plus juste pour remplacer éligible :', ['l’Académie et l’OQLF le déconseillent ; Le Robert l’enregistre', 'c’est faux pour tout le monde', 'Le Robert le condamne', 'personne ne le dit'], 0, 'Un cas partagé, présenté comme tel. EN: say who says what.', 'a8-table'),
        mc('Choisis le mot juste : « Notre équipe, très …, répare aussi bien les grille-pain que les vélos. »', ['polyvalente', 'versatile', 'académique', 'éligible'], 0, 'Polyvalente. EN: versatile.', 'a6-cartes'),
        tI('Écris le mot qui manque.', 'Pour un public des deux côtés de l’Atlantique, j’ai choisi le mot ___ .', 'commun', 'Le mot commun, que personne ne conteste. EN: shared.', 'a12-usages', ['sûr', 'neutre']),
        eS('Les familles éligibles pourront prendre rendez-vous sur notre plateforme digitale.', 'Les familles admissibles pourront prendre rendez-vous sur notre plateforme numérique.', 'Deux mots : admissibles, numérique. EN: two words.', 'a9-piege', ['Les familles admissibles pourront prendre rendez-vous sur notre plateforme en ligne.']),
        lC('Compréhension orale. Écoute. Que fait la personne ?', fr(E(1134)), ['elle choisit le mot que personne ne conteste', 'elle garde le mot critiqué', 'elle renonce à corriger'], 0, 'Le mot commun. EN: the uncontested word.', 'a12-plan'),
      ],
    },
  ],
  audio: AUDIO, say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt: each closed question's options are
 *  ROTATED, `correct` moved in step. As c1.12. */
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
    { front: 'to launch a project', back: 'lancer un projet', say: fr(E(1016)) },
    { front: 'a fine opportunity', back: 'une belle occasion', say: fr(E(1028)) },
    { front: 'a fallback solution', back: 'une solution de rechange', say: fr(E(1040)) },
    { front: 'to have an effect on', back: 'avoir une incidence sur', say: fr(E(1053)) },
    { front: 'the academic year', back: 'l’année universitaire', say: fr(E(1064)) },
    { front: 'provincial jurisdiction', back: 'la compétence des provinces', say: fr(E(1076)) },
    { front: 'eligible for a grant', back: 'admissible à une bourse', say: fr(E(1088)) },
    { front: 'to digitise', back: 'numériser', say: fr(E(1100)) },
    { front: 'to question a decision', back: 'remettre en question une décision', say: fr(E(1108)) },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Selon qui',
  body: `${REFRAME} Tu es parti des faux amis courants de ${EMOTIONS_REF}, ${LECTURE_REF}, ${JURIDIQUE_REF}, ${SOINS_REF} et ${SCIENCE_REF}, et des calques de ${CALQUER_REF}, pour réviser les mots savants qui passent inaperçus dans un rapport, en disant chaque fois qui les critique et qui les accepte. La suite, c’est ${NEXT_REF_PLANNED} : les figures de style et l’effet qu’elles produisent. EN: Next comes lesson 19 in C1, figures of speech and the effect they produce.`,
  points: [
    'Un mot savant d’allure anglaise : vérifie son sens français.',
    'Quand les ouvrages se partagent, dis-le : selon l’OQLF, selon l’Académie, selon Le Robert.',
    'Pour un public des deux côtés de l’Atlantique, prends le mot que personne ne conteste.',
    'Ne corrige pas le sens français : initier quelqu’un à, éligible au conseil sont justes.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['selon'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ta note de révision',
    opener: {
      line: 'Une annonce pleine de mots savants : ici tu la révises, tu justifies tes choix avec leurs sources, puis tu passes l’examen. EN: An announcement full of learned words: here you revise it, justify your choices with their sources, then sit the exam.',
      imageRef: 'lessons/faux-amis-savants/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as révisé une annonce, justifié tes choix selon les ouvrages, et passé l’examen : quatre-vingt-seize questions, douze manches. EN: You revised an announcement, justified your choices by source, and sat the exam: ninety-six questions, twelve rounds.',
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r5-impacter', 'a12-quiz/r9-numerique', 'a12-review'],
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
  { id: 'd-initier', title: 'Commencer, ou faire découvrir', format: 'sort' as const, coach: 'Deux piles : la phrase dit qu’on commence quelque chose, ou qu’on fait découvrir un savoir. EN: starting, or teaching?', buckets: ['commencer', 'faire découvrir'], items: [E(1016), E(1017), E(1022), E(1019), E(1015), E(1020)], audio: AUDIO },
  { id: 'd-opportunite', title: 'Une occasion', format: 'mcq' as const, coach: 'Essaie d’abord occasion ; au pluriel, pense perspectives et débouchés. EN: try occasion first.', q: '« Ne laisse pas passer une … pareille. »', opts: ['occasion', 'opportunité'], correct: 0, why: 'Une occasion se laisse passer. EN: occasion.', items: [E(1024), E(1028), E(1029), E(1030), E(1034), E(1031)], audio: AUDIO },
  { id: 'd-alternative', title: 'Deux branches, ou des options', format: 'sort' as const, coach: 'Deux piles : le choix entre deux, ou une des possibilités. EN: the choice, or one option?', buckets: ['l’alternative', 'une option'], items: [E(1042), E(1038), E(1041), E(1040), E(1046), E(1047)], audio: AUDIO },
  { id: 'd-impacter', title: 'Le verbe qui dit l’effet', format: 'flashcard' as const, coach: 'Lis chaque phrase et dis quel effet exact le verbe décrit. EN: name the exact effect.', items: [E(1052), E(1053), E(1054), E(1056), E(1059), E(1051)], audio: AUDIO },
  { id: 'd-academique', title: 'Universitaire, polyvalent', format: 'sort' as const, coach: 'Deux piles : le mot sûr pour le sens anglais, ou le sens français à garder. EN: safe word, or French sense?', buckets: ['le mot sûr', 'le sens français'], items: [E(1064), E(1067), E(1062), E(1066), E(1068), E(1060)], audio: AUDIO },
  { id: 'd-juridiction', title: 'Juger, ou décider', format: 'mcq' as const, coach: 'Une juridiction juge ; une province a des compétences. EN: courts judge; provinces have powers.', q: '« La santé relève de la … des provinces. »', opts: ['compétence', 'juridiction'], correct: 0, why: 'Compétence. EN: powers.', items: [E(1076), E(1077), E(1079), E(1082), E(1075), E(1081)], audio: AUDIO },
  { id: 'd-eligible', title: 'Le mot commun', format: 'mcq' as const, coach: 'Quand les ouvrages se partagent, prends le mot que personne ne conteste. EN: the shared word.', q: '« Tu es … à cette bourse si tu as moins de trente ans. » (texte lu partout)', opts: ['admissible', 'éligible'], correct: 0, why: 'Admissible passe partout. EN: admissible.', items: [E(1088), E(1089), E(1090), E(1093), E(1087), E(1095)], audio: AUDIO },
  { id: 'd-numerique', title: 'Des nombres, ou des doigts', format: 'sort' as const, coach: 'Deux piles : les données, ou les doigts. EN: data, or fingers?', buckets: ['numérique', 'digital'], items: [E(1100), E(1101), E(1103), E(1102), E(1107), E(1106)], audio: AUDIO },
  { id: 'd-questionner', title: 'Douter d’une chose', format: 'flashcard' as const, coach: 'Lis chaque phrase et dis si l’on interroge une personne ou si l’on doute d’une chose. EN: a person, or a thing?', items: [E(1113), E(1114), E(1115), E(1119), E(1108), E(1112)], audio: AUDIO },
  { id: 'd-oral', title: 'De l’oral à l’écrit', format: 'flashcard' as const, coach: 'Lis chaque phrase écrite et dis l’emprunt qu’on entend à sa place au bureau. EN: name the spoken loan it replaces.', items: [E(1124), E(1125), E(1126), E(1127), E(1129), E(1131)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 et le B2 en renfort', format: 'flashcard' as const, coach: 'Six faux amis déjà connus : dis ce que chacun veut dire en français. EN: what each known false friend means.', items: [B137_ACTU, B137_EVENT, B227_EVENT, FA(2), FA(84), FA(83)], audio: AUDIO },
  { id: 'd-note', title: 'Remplacer, citer, nuancer', format: 'flashcard' as const, coach: 'Lis chaque phrase, puis écris la tienne sur le même modèle pour ta note à Maxime. EN: read each one, then write your own.', items: [E(1132), E(1133), E(1134), E(1135), E(1136), E(1137)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'initier-commencer', description: 'Uses initier for starting a project, or corrects the French sense of initier quelqu’un à.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a12-mission'], drill: 'd-initier', retest: 'd-initier' },
  { id: 'opportunite-occasion', description: 'Writes opportunité for occasion or opportunités for prospects, or calls the use wrong for every authority.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check', 'a12-mission'], drill: 'd-opportunite', retest: 'd-opportunite' },
  { id: 'alternative-option', description: 'Calls each option an alternative, writes deux alternatives, or rejects the strict two-way sense.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a12-mission'], drill: 'd-alternative', retest: 'd-alternative' },
  { id: 'impacter-effet', description: 'Writes impacter where a precise verb of effect is needed (toucher, ralentir, faire baisser).', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a12-mission'], drill: 'd-impacter', retest: 'd-impacter' },
  { id: 'academique-universitaire', description: 'Uses académique for university or school matters, or versatile for multi-purpose.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a12-mission'], drill: 'd-academique', retest: 'd-academique' },
  { id: 'juridiction-competence', description: 'Uses juridiction for a government’s powers, its territory, or for other countries and provinces.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a12-mission'], drill: 'd-juridiction', retest: 'd-juridiction' },
  { id: 'eligible-admissible', description: 'Writes éligible for a grant in a text read everywhere, or calls it wrong for every authority.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a12-mission'], drill: 'd-eligible', retest: 'd-eligible' },
  { id: 'digital-numerique', description: 'Writes digital or digitaliser for numérique or numériser, or corrects empreintes digitales.', detectOn: ['a9-construire', 'a9-piege', 'a9-check', 'a12-mission'], drill: 'd-numerique', retest: 'd-numerique' },
  { id: 'questionner-douter', description: 'Writes questionner for doubting a thing, or presents faire sens as condemned by everyone.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check', 'a12-mission'], drill: 'd-questionner', retest: 'd-questionner' },
  { id: 'emprunt-oral', description: 'Writes canceller, céduler or booker in a written text.', detectOn: ['a11-construire', 'a11-piege', 'a11-check', 'a12-mission'], drill: 'd-oral', retest: 'd-oral' },
  { id: 'recyclage', description: 'Loses a known false friend from B1 or B2: actuellement, éventuellement, décevoir, location, physicien, évidence.', detectOn: ['a1-rappel', 'a1-check', 'a12-mission'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'revision-sans-source', description: 'In a revision note, replaces words without naming a source or flattens a divided verdict into a single one.', detectOn: ['a12-plan', 'a12-scenario', 'a12-mission'], drill: 'd-note', retest: 'd-note' },
];

/** Missions do not shuffle: every closed mission item and drill is ROTATED,
 *  `correct` moved in step, so each option-count class spreads evenly and
 *  no slot repeats more than twice in a row. As c1.12. */
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
  sheet('sheet-sources', 'Qui dit quoi : les sources', ['les ouvrages de référence', 'le tableau des verdicts', 'les cas partagés'], [
    teach('sheet-sources-teach', 'Selon qui',
      `${REFRAME} Cinq sources reviennent dans cette leçon. L’OQLF, au Québec, publie la Banque de dépannage linguistique et le Grand dictionnaire terminologique. L’Académie française publie son Dictionnaire et la rubrique Dire, ne pas dire. FranceTerme publie les termes recommandés au Journal officiel. Le Robert décrit l’usage, et marque certains emplois comme anglicismes ou critiqués. Usito décrit le français du Québec et signale les anglicismes critiqués. Quand elles ne sont pas d’accord, dis-le. EN: ${REFRAME_EN}`),
    table('sheet-sources-verdicts', 'Les quatorze mots', ['Emploi', 'Le mot sûr', 'Critiqué par', 'Accepté ou nuancé par'], [
      ['initier un projet', 'lancer, amorcer', 'OQLF, Académie, Usito', 'Dictionnaire de l’Académie : pas condamnable en soi, mais abusif'],
      ['une belle opportunité', 'occasion ; perspectives', 'Académie, OQLF', 'Le Robert (marqué anglicisme), Usito (parfois critiqué)'],
      ['une alternative (= option)', 'option, solution de rechange', 'OQLF, Le Robert, Usito', 'l’alternative = le choix entre deux, partout'],
      ['impacter', 'toucher, avoir une incidence sur', 'Académie, OQLF', 'Le Robert (marqué anglicisme), Usito (parfois critiqué)'],
      ['l’année académique', 'l’année universitaire', 'Académie, OQLF, Usito', 'usage des universités belges'],
      ['un outil versatile', 'polyvalent', 'OQLF, Usito', 'versatile = changeant, partout'],
      ['d’autres juridictions', 'compétence, ressort ; pays, provinces', 'Usito, GDT', 'tribunal, pouvoir de juger, partout'],
      ['éligible à une bourse', 'admissible, avoir droit à', 'Académie, OQLF', 'Le Robert (sans marque), Usito (pas critiqué en France)'],
      ['digital (= numérique)', 'numérique, numériser', 'Académie, FranceTerme, OQLF, Le Robert', 'empreintes digitales, partout'],
      ['faire sens', 'avoir du sens, être logique', 'Académie', 'OQLF : ancien, non condamné'],
      ['questionner une décision', 'remettre en question, mettre en doute', 'OQLF, Usito', 'questionner quelqu’un, partout'],
      ['canceller, céduler, booker', 'annuler, fixer, réserver', 'OQLF ; Usito pour les deux premiers', 'absents du Robert en ligne'],
    ]),
  ]),
  sheet('sheet-mots', 'Les mots du quotidien savant', ['initier, opportunité, alternative', 'impacter, académique, versatile', 'digital, faire sens, questionner'], [
    teach('sheet-mots-teach', 'Le sens français à garder',
      'Chaque mot de cette leçon a un sens français juste, que tous les ouvrages donnent : initier quelqu’un à un savoir ; l’opportunité d’une mesure ; l’alternative, choix entre deux ; un impact, au sens d’effet de choc ; un style académique ; une opinion versatile ; les empreintes digitales ; questionner un témoin. Ne corrige jamais ces emplois. Le nom impact au sens d’effet est lui aussi critiqué par l’Académie et l’OQLF, mais très courant : on ne le teste pas ici. EN: keep the French senses; never correct them.'),
    table('sheet-mots-table', 'Le mot sûr, mot par mot', ['Au lieu de', 'Écris', 'Exemple'], [
      ['initier un projet', 'lancer, amorcer, entamer, être à l’origine de', 'C’est Léa qui a lancé ce projet.'],
      ['une opportunité (= occasion)', 'une occasion, la chance de', 'C’était une belle occasion.'],
      ['des opportunités d’emploi', 'des débouchés, des perspectives', 'des perspectives de carrière'],
      ['une alternative (= option)', 'une option, une solution de rechange', 'Quelle est la solution de rechange ?'],
      ['impacter', 'toucher, peser sur, se répercuter sur', 'La hausse touche les livreurs.'],
      ['académique (= universitaire)', 'universitaire, scolaire', 'l’année universitaire'],
      ['versatile (= polyvalent)', 'polyvalent, souple', 'un robot polyvalent'],
      ['digital, digitaliser', 'numérique, numériser', 'la transformation numérique'],
      ['faire sens', 'avoir du sens, être logique', 'Ta proposition est logique.'],
      ['questionner une décision', 'remettre en question, contester', 'Les élus ont contesté le choix.'],
    ]),
  ]),
  sheet('sheet-institutions', 'Le vocabulaire des institutions', ['juridiction, compétence, ressort', 'éligible, admissible', 'nommer le lieu'], [
    teach('sheet-institutions-teach', 'Juger, décider, avoir droit',
      'Une juridiction juge : c’est un tribunal, ou le pouvoir de juger. Un gouvernement a des compétences, sur un ressort. Pour d’autres pays ou d’autres provinces, nomme-les. Éligible veut dire qui peut être élu ; pour une aide, admissible et avoir droit à ne divisent personne, alors que les ouvrages se partagent sur éligible. EN: courts judge; governments have powers; admissible is safe.'),
    table('sheet-institutions-table', 'Les tournures sûres', ['Pour dire', 'Écris', 'Exemple'], [
      ['un tribunal', 'une juridiction', 'une juridiction civile'],
      ['le domaine d’une autorité', 'la compétence', 'La santé relève de la compétence des provinces.'],
      ['son territoire', 'le ressort', 'le ressort d’un tribunal'],
      ['other jurisdictions', 'd’autres pays, d’autres provinces', 'Plusieurs provinces ont adopté une loi.'],
      ['eligible for', 'admissible à', 'admissible à une bourse'],
      ['entitled to', 'avoir droit à', 'Elle aura droit à sa pension.'],
      ['eligibility', 'l’admissibilité', 'les critères d’admissibilité'],
      ['able to be elected', 'éligible', 'éligible au conseil municipal'],
    ]),
  ]),
  sheet('sheet-oral', 'De l’oral à l’écrit', ['canceller, céduler, booker', 'les verbes de l’écrit', 'la cédule en droit'], [
    teach('sheet-oral-teach', 'Ce qui s’entend au bureau',
      'Au Québec surtout, on entend canceller, céduler, booker. L’OQLF les déconseille, et Usito marque les deux premiers comme anglicismes critiqués. À l’écrit : annuler, fixer, prévoir, programmer, inscrire à l’horaire, réserver, retenir. Le nom cédule survit en finance et en droit (une cédule hypothécaire), selon l’OQLF. EN: in writing, annuler, fixer, réserver.'),
    table('sheet-oral-table', 'Les verbes de l’écrit', ['À l’oral', 'À l’écrit', 'Exemple'], [
      ['canceller', 'annuler', 'Le spectacle est annulé.'],
      ['une cancellation', 'une annulation', 'L’annulation a été annoncée la veille.'],
      ['céduler une réunion', 'fixer, prévoir, programmer', 'On a fixé la réunion à jeudi.'],
      ['céduler un cours', 'inscrire à l’horaire', 'inscrit à l’horaire du mardi'],
      ['booker', 'réserver, retenir', 'J’ai réservé la grande salle.'],
    ]),
  ]),
  sheet('sheet-note', 'La note de révision', ['le plan', 'la liste de contrôle', 'les phrases utiles'], [
    teach('sheet-note-teach', 'Remplacer, citer, nuancer',
      `${REFRAME} Une bonne note remercie, annonce les remplacements, justifie chacun par une source, dit quand les ouvrages se partagent, et laisse la porte ouverte. Elle corrige les mots, jamais la personne. EN: ${REFRAME_EN}`),
    table('sheet-note-plan', 'Le plan', ['Partie', 'Tournure', 'Exemple'], [
      ['l’ouverture', 'merci, presque prêt', 'Merci pour ton brouillon : il est clair, et presque prêt.'],
      ['l’annonce', 'j’ai remplacé…', 'J’ai remplacé six mots, et voici pourquoi.'],
      ['la source', 'selon…', 'Selon l’OQLF, ce mot est déconseillé ; Le Robert l’enregistre.'],
      ['le partage', 'les ouvrages se partagent', 'Les ouvrages se partagent : j’ai pris le mot que personne ne conteste.'],
      ['la fermeture', 'on en discutera', 'Dis-moi si tu préfères garder un mot ; on en discutera.'],
    ]),
    table('sheet-note-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Chaque mot critiqué est remplacé', 'relis le texte une fois pour les mots savants'],
      ['Le sens français est gardé', 'initier qqn à, éligible au conseil, empreintes digitales'],
      ['Chaque choix a une source', 'OQLF, Académie, Le Robert, Usito, FranceTerme'],
      ['Les cas partagés sont dits partagés', 'éligible, opportunité, impacter, faire sens'],
      ['Le ton', 'tu, amical, sans leçon'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-18-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, lines in authored order, at natural C1 speed; the lines are hidden, so the take must be continuous.';
const TRAP = 'The audio step plays each card’s SAFE sentence. Six lines, one voice, plainly and at the same pace. The criticised versions in promptSound are NEVER spoken.';
const TEXTE = 'One voice, read as written, at a natural reading pace: the instruction sentence first, then the text itself after a short pause.';
const DRAFT = 'This text is a DRAFT TO REVISE: read it neutrally, never mocking the criticised words; the learner must find them.';
const CARDS = 'Four cards, one coach voice, neutral and clear; each card’s French line read once, unhurried.';
const REC_DESC: Record<string, string> = {
  'rec-c1-18-revision': 'Odile’s revision note to Benoît (act 1), ONE female voice from Lyon, one take, warm and precise, like a colleague reading her note aloud; each quoted word slightly set apart.',
  'rec-c1-18-nadia': 'Nadia and Samuel at the cooperative (act 2), two voices, one take: Nadia busy and cheerful, Samuel an older Québécois mechanic, calm. Light workshop sounds.',
  'rec-c1-18-initier-cartes': `The four « lancer » cards (act 2). ${CARDS}`,
  'rec-c1-18-piege-initier': TRAP,
  'rec-c1-18-initier-ecoute': `${ONE_TAKE} Eight lines, ONE VOICE, as a community-centre coordinator reviewing the season: even, friendly.`,
  'rec-c1-18-texte-a2': `The cooperative's bulletin (act 2). ${TEXTE} A Québécoise voice, upbeat.`,
  'rec-c1-18-maxime': 'Maxime and Odile on a video call (act 3), two voices, one take: Maxime Québécois, hopeful; Odile from Lyon, kind and exact. Slight video-call colour.',
  'rec-c1-18-texte-a3': `The internship offer from Liège (act 3). ${TEXTE} ${DRAFT} A Belgian voice.`,
  'rec-c1-18-cegep': 'The director of studies and her assistant (act 4), two voices, one take: brisk, practical, a little cold in a chilly building. Québec accents.',
  'rec-c1-18-alternative-cartes': `The four alternative cards (act 4). ${CARDS}`,
  'rec-c1-18-piege-alternative': TRAP,
  'rec-c1-18-texte-a4': `The cégep email (act 4). ${TEXTE} A Québécoise administrator's voice.`,
  'rec-c1-18-echo': 'The intern and the editor-in-chief (act 5), two voices, one take: the intern eager, the editor dry and amused. Newsroom ambience, low.',
  'rec-c1-18-impacter-cartes': `The four verbs of effect (act 5). ${CARDS}`,
  'rec-c1-18-texte-a5': `The local newspaper article (act 5). ${TEXTE} A local radio-style voice.`,
  'rec-c1-18-geneve': 'Odile and Benoît discussing a Geneva job ad (act 6), two voices, one take: Odile from Lyon, Benoît Québécois; relaxed office talk.',
  'rec-c1-18-academique-cartes': `The four adjective cards (act 6). ${CARDS}`,
  'rec-c1-18-piege-academique': TRAP,
  'rec-c1-18-academique-ecoute': `${ONE_TAKE} Eight lines, TWO VOICES alternating (odd lines a woman with a Swiss accent, even lines a man), as overheard in a research centre.`,
  'rec-c1-18-texte-a6': `The Geneva job ad (act 6). ${TEXTE} ${DRAFT} A Swiss voice.`,
  'rec-c1-18-quebec': 'Samuel and a government lawyer in Québec City (act 7), two voices, one take: Samuel young and keen, the lawyer patient and exact.',
  'rec-c1-18-texte-a7': `The intern's policy summary (act 7). ${TEXTE} ${DRAFT} A Québécois voice.`,
  'rec-c1-18-fondation': 'Odile and Benoît reviewing a call for applications (act 8), two voices, one take: a friendly France-Québec comparison, neither side winning.',
  'rec-c1-18-texte-a8': `The foundation's call (act 8). ${TEXTE} A neutral institutional voice.`,
  'rec-c1-18-musee': 'Aurélie Vandamme and her communications officer in Lyon (act 9), two voices, one take: enthusiastic about the project.',
  'rec-c1-18-numerique-cartes': `The four numérique cards (act 9). ${CARDS}`,
  'rec-c1-18-piege-numerique': TRAP,
  'rec-c1-18-texte-a9': `The museum director's message (act 9). ${TEXTE} A female voice from Lyon.`,
  'rec-c1-18-frais': 'The finance manager and Benoît in Montréal (act 10), two voices, one take: tactful, slightly tired of complaints.',
  'rec-c1-18-questionner-cartes': `The four doubt cards (act 10). ${CARDS} Card four cites lesson 33 in B2: read it as a reference, not stressed.`,
  'rec-c1-18-questionner-ecoute': `${ONE_TAKE} Eight lines, THREE VOICES as a staff meeting: lines 1, 4 and 7 the chair, lines 2, 5 and 8 a researcher, lines 3 and 6 a councillor. One voice at a time.`,
  'rec-c1-18-texte-a10': `The internal email (act 10). ${TEXTE} ${DRAFT} A Montréal manager's voice.`,
  'rec-c1-18-vocal': 'Maxime replaying Samuel’s voicemail (act 11), two voices, one take: Maxime thinking aloud, coach-like; colloquial Québec register is expected in Maxime’s quotes.',
  'rec-c1-18-piege-oral': TRAP,
  'rec-c1-18-texte-a11': `The transcribed voicemail (act 11). ${TEXTE} ${DRAFT} A casual Québécois voice, as on an answering machine.`,
  'rec-c1-18-modele': 'Odile’s note to Maxime (act 12), ONE female voice from Lyon, one take, kind and precise; the revised sentence read slightly slower.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 18',
  intro: 'At B1 and B2 you met the everyday false friends (actuellement, éventuellement, décevoir, location) and the calques of translation. At C1 the traps are learned words that pass unnoticed in a report: initier, opportunité, alternative, impacter, académique, versatile, juridiction, éligible, digital, faire sens, questionner, and the spoken Québec loans canceller, céduler and booker. For each you learn the safe French word, the French sense to keep, and above all who condemns the use and who accepts it, because the OQLF, the Académie française, Le Robert, Usito and FranceTerme do not always agree. It ends with a 250 to 350 word revision of an announcement and a note justifying your choices.',
  skill: 'CE',
  grammarAssumed: [EMOTIONS_UNIT, LECTURE_UNIT, JURIDIQUE_UNIT, SOINS_UNIT, SCIENCE_UNIT, CALQUER_UNIT],
  grammarIntroduced: [
    'Initier (to introduce someone to a skill) against lancer, amorcer, entamer, être à l’origine de for starting something',
    'Opportunité (timeliness) against occasion, chance, perspectives and débouchés; the divided verdict on opportunité = occasion',
    'Alternative as the choice between two, against option, solution de rechange, possibilité; the pleonasm deux alternatives',
    'Impacter against toucher, avoir une incidence sur, se répercuter sur, peser sur, and the precise verb of effect',
    'Académique and versatile in their French senses, against universitaire, scolaire, polyvalent, souple',
    'Juridiction (a court, the power to judge) against compétence, ressort, autorité, and naming countries and provinces',
    'Éligible (able to be elected) against admissible, avoir droit à, remplir les conditions; the France and Québec split',
    'Digital (of the fingers) against numérique, numériser, numérisation, as recommended by FranceTerme',
    'Questionner (a person) against remettre en question, mettre en doute, contester; the divided verdict on faire sens',
    'The spoken Québec loans canceller, céduler, booker against annuler, fixer, programmer, réserver, retenir',
    'Stating a usage verdict with its source (selon l’OQLF, selon l’Académie, selon Le Robert) and never as a single verdict where authorities differ',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B1 et au B2, tu as rencontré les faux amis courants et les calques de la traduction. Au C1, les pièges sont des mots savants qui passent inaperçus dans un rapport : initier, opportunité, alternative, impacter, académique, versatile, juridiction, éligible, digital, faire sens, questionner, et les emprunts de l’oral québécois canceller, céduler et booker. Pour chacun, tu apprends le mot sûr, le sens français à garder, et surtout qui condamne l’emploi et qui l’accepte, car l’OQLF, l’Académie, Le Robert, Usito et FranceTerme ne sont pas toujours d’accord. À la fin, tu révises une annonce et tu justifies tes choix en 250 à 350 mots.',
    minutes: 170,
    difficulty: 4,
    glyph: '≈EN',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: FAUX_AMIS_SAVANTS_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, LECTURE_MODELE, BROUILLON_TACHE, dicteeFor };
export const lessonWithoutTask = (): Lesson => LESSON;
