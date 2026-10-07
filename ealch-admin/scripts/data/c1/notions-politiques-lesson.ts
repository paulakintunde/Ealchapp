// c1.15.l1 « Justice, liberté, identité, pouvoir » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 (THE VOCAB SHAPE) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (wave 5).
// Structural model: the reviewed C1 vocabulary lesson c1.12 « Le vocabulaire
// des idées » (`./vocabulaire-idees-*`): its shape, its counts, its helpers.
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE VOCAB SHAPE, AS BUILT HERE (model: c1.12's counts)
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around ONE PAIR OR FAMILY of political
//   and social words, in the same beats as c1.12:
//     1. MEET THEM IN USE   a `story`, a one-take `listening` or a `reading`.
//     2. LEARN THEM         a `cardDeck` (4 cards) or a `tapTable` (6 rows),
//                           linked to a sheet: each word with its meaning AND
//                           its weight.
//     3. TELL THEM APART    a gated `groupDrill` of collocations and bank rows
//                           (the b2 ethique / valeurs nouns reused as known).
//     4. TRAP               a stepped `trapDrill` or a `commonErrors`: the
//                           English calque, the wrong preposition, the
//                           neighbour taken for the word, the position
//                           stated as a fact.
//     5. ONE MORE ANGLE     a listening, examples, flashcards, hacks, focus or
//                           dictation.
//     6. DANS UN TEXTE      the same title every act: a short authentic-
//                           looking text (90 to 145 words), questions behind
//                           the modal.
//     7. CHECK              the gated act check.
//
//    1  Le poids des mots            6   neighbourhood council scene (également
//                                         for équitablement), goals, the
//                                         minutes, recap of b2.27, b1.33 and
//                                         c1.12, useCases
//    2  Égalité et équité            7   à parts égales, à égalité,
//                                         égalitaire, égalité des chances
//    3  La justice                   7   the value and the institution;
//                                         rendre (la) justice, se faire justice
//    4  La liberté et les libertés   7   libertés publiques, porter atteinte,
//                                         restreindre, liberté de réunion
//    5  Les droits et leurs textes   7   1789, 1975, 1982, article numbers;
//                                         droits de l’homme / de la personne
//    6  Pouvoir, puissance, autorité 7   a co-op column read in full; faire
//                                         autorité, autoritaire, les autorités
//    7  Les contre-pouvoirs          7   séparation des pouvoirs, judiciaire /
//                                         juridique, garde-fou, quatrième pouvoir
//    8  Légal et légitime            7   juridique (OQLF), légitime défense
//    9  L’État de droit et l’impunité 7  primauté du droit, impuni, deux poids
//                                         deux mesures, rendre compte de
//   10  L’identité                   7   a Brussels portrait read in full;
//                                         identité plurielle, appartenance,
//                                         identitaire as a loaded word
//   11  Vivre ensemble               7   multiculturalisme / interculturalisme,
//                                         accommodement, laïcité, communautarisme
//   12  Ta contribution             11   model contribution, plan, role play,
//                                         TASK, practice, quiz, review
//
//   TOTAL 87 missions, 12 acts. Corpus: 150 authored rows (.1000-.1149) in
//   twelve blocks plus 56 reused rows (50 Postgres-only in PG_ROWS, 6 in
//   seedPlusPacks), released act by act through `deckTranche`. Texts: 4
//   readings of 195 to 285 words (the council minutes, a co-op column, a
//   Brussels portrait, the model contribution), 10 « Dans un texte »
//   paragraphs, 5 hideLines listenings, 6 stories, one scene, one role play.
//   Quiz: 12 rounds of 8 (one per act 2 to 11, a recycling round citing b2.27,
//   b1.33 and c1.12, a « comme à l’examen » round). Sheets: 5. Terms: 11.
//   Chapter artwork: `notions-politiques-image-prompts.md`, twelve prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (c1.16 may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un mot du débat public a un sens et un poids : nomme les deux. »
//   EN: A word of public debate has a meaning and a weight: name both.
//
//   ONE METAPHOR, LA BALANCE: a plain pair of scales, meaning on one pan,
//   weight on the other. Each act weighs one pair; the task asks the learner
//   to weigh a neighbour's words in public. It goes past c1.12's « deux mots
//   voisins, deux idées » (quoted, never re-taught) by adding the weight.
//   Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the political and social headwords at C1 (wave 5 ownership):
//           équité / égalité, the senses of justice, la liberté / les
//           libertés publiques, the fundamental-rights texts and their usages,
//           pouvoir / puissance / autorité, contre-pouvoir and the separation
//           of powers, légitimité / légalité (and juridique), l’État de droit,
//           impunité, identité in its abstract sense, multiculturalisme /
//           interculturalisme; and the method of reporting a loaded word
//           (identité nationale, laïcité, communautarisme) as a usage.
//   QUOTES  the reframes of b2.27, b1.33 and c1.12, re-exported from their
//           corpus files; rows of b2.27 and b1.33 and 50 bank rows reused BY
//           ID; the official texts listed in corpus §A.7.
//   LEAVES  moral, aesthetic and memorial headwords to c1.16; the epistemic
//           pairs to c1.12 (quoted); the HISTORY of laïcité, 1905 and Loi 21
//           to c1.13 (cited in act 11, sheet-societe and the roundup); false
//           friends as a system to c1.18 (one trap kept: légal / legal);
//           persuasion to c1.08; press framing to c1.24.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   C1: unsimplified French; English authored on every learner string (an
//   `en` field or a final « EN: »), never on an answer. tu in every
//   instruction; characters use what the situation needs. Every `say` is
//   French. No « ? » or « ! » in any scene or story bubble. Other lessons
//   cited by trail position in words, read from the seed units; c1.12, c1.13
//   and c1.16 are typed from the plan (corpus §C). Mission answer slots are
//   spread by `spreadMissions()`, the quiz by `spreadSlots()` (no text
//   changes; no `why` names a position), as c1.12 does. Invented people,
//   outlets, associations and districts only; no living politician, no real
//   party or campaign; loaded terms always attributed (« pour ses partisans
//   », « selon ses critiques »). Wave 5 review lessons applied: nothing
//   correct taught as an error (« sens d’appartenance » NOT taught as a
//   calque, unconfirmed); no drill with two defensible answers (five items
//   reworded after a self-review); the model answer copies no sentence of
//   the letter and adds no figure; every listening names its speakers in
//   the REC brief and the story settings. Up to 4 tapTables (decision 16):
//   acts 3, 6, 9 and 11. Unpadded tag (« C1 · LEÇON 15 »).
//
//   CHECKS (2026-10-06): tsc clean on the three files; validateLesson 0,
//   validateDensity 0, validateItem 0/150; app checks TOTAL 0; answer slots
//   2-option 58/57, 3-option 7/6/6, longest run 2; 500 answer strings, 0 EN
//   tails; 0 twins against 64,066 Postgres rows; 0 rows in the block.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. FACT CHECK before publish: the claims in corpus §A.7 (a to q). The
//      DDHC articles (Légifrance) and the Charte canadienne (Justice Canada,
//      raw text) were read at source; LégisQuébec answered 403 to every
//      tool, so the Charte québécoise articles 3 and 4 and its 1975 date were
//      read on Québec mirrors (OCPM, BAnQ, Assemblée nationale annual
//      statutes, CDPDJ). RESOLVED at pre-review: C-12 art. 3, 4, 10 re-read
//      on LégisQuébec itself (corpus §A.7, after m).
//   2. The task is a WRITTEN contribution (250 to 350 words, responseSpec
//      250-380), but `Lesson.skill` is 'CE' as the brief says, like c1.12.
//      Keep 'CE'?
//   3. c1.12 is drafted, not published: its reframe is quoted (re-exported)
//      but none of its rows is reused by id. Reuse c1.12 rows once wave 4 is
//      imported?
//   4. « Légal / legal » (act 8) is a faux ami c1.18 may also want. Keep it
//      here as the one trap the field cannot do without (OQLF-sourced)?
//   5. 50 reused rows are Postgres-only (PG_ROWS): the merge must carry them
//      and the gate preview needs them; 21 of them carry straight
//      apostrophes for the decision 13 typography pass (corpus §A.5). The 8 twins the check found are now reused
//      instead of authored (corpus §A.6), from themes outside ethique /
//      valeurs (gouvernement, droit, questions-sociales, rp-societe,
//      rp-identite, immigration-et-citoyennete, quebec-et-francophonie).
//   6. Act 11 says « Le Québec défend plutôt un modèle d’interculturalisme »
//      and never names the 2025 integration statute (recent and contested).
//      Enough, or should the sheet name it?
//   7. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' is inert; kept.
//      The twelve openers need art (ART_PENDING until Paul's images land).

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, ETH, VAL1, VAL2, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, PG_ROWS, dicteeFor,
  LECTURE_CONSEIL, LECTURE_COOP, LECTURE_IDENTITE, LECTURE_MODELE, LETTRE_GERALD,
  TEXTE_A2, TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A11,
  B227_REFRAME, B227_REFRAME_EN, B133_REFRAME, B133_REFRAME_EN, C112_REFRAME, C112_REFRAME_EN,
  JURIDIQUE_UNIT, ENVIRONNEMENT_UNIT, JURIDIQUE_REF, ENVIRONNEMENT_REF,
  IDEES_REF_PLANNED, REFERENCES_REF_PLANNED, NEXT_REF_PLANNED,
} from './notions-politiques-corpus.ts';
import { NOTIONS_POLITIQUES_TERMS } from './notions-politiques-terms.ts';

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
  if (!r) throw new Error(`c1.15: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

/** Every import must exist in the seed or in PG_ROWS. */
for (const id of IMPORT_IDS) {
  if (!SEED.has(id) && !PG.has(id)) throw new Error(`c1.15: import ${id} is in neither the seed nor PG_ROWS`);
}

function ipaOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.ipa) throw new Error(`c1.15: no authored ipa on ${id}`);
  return r.ipa;
}
/** The AUTHORED row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.15: no authored respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
/** A free groupDrill item: a quotation with no reusable published row. */
const free = (frText: string, enText: string, note?: string): GItem => ({ fr: frText, en: enText, ...(note ? { note } : {}) });
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

const B227_JUSTICE = 'fr.b2.droit.1171';
const B227_LOI = 'fr.b2.droit.1177';
const B227_EN_DROIT = 'fr.b2.droit.1051';
const B133_ROW = 'fr.b1.ecologie.1009';
const B133_EGAL = 'fr.b1.ecologie.1156';
const PHILO_JUSTE = 'fr.b2.philosophie.202';
const C1_JUSTICE_RENDUE = 'fr.c1.ethique.006';

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE POIDS DES MOTS
 *
 *  The problem: at a neighbourhood council, the learner writes the minutes
 *  and must not turn a fair split into an equal one. Then the minutes, and
 *  the recap of b2.27, b1.33 and c1.12 by trail position, their rows reused
 *  by id (c1.12: its reframe only). NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const EGALEMENT = {
  fr: 'Le comité partage la somme également entre les trois jardins.',
  ipa: '/lə kɔ.mi.te paʁ.taʒ la sɔm e.ɡal.mɑ̃ ɑ̃.tʁə le tʁwa ʒaʁ.dɛ̃/',
  respell: '[luh ko-mee-TAY | par-TAZH la SOMM | ay-gal-MAHⁿ | ahⁿ-truh lay trwa zhar-DEHⁿ]',
  en: 'The committee splits the sum equally between the three gardens. (Également says each garden gets the same amount.)',
};

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Une phrase pour le compte rendu', frSub: 'Le conseil de quartier',
  setting: { place: 'La salle communautaire des Hautes-Rives', city: 'Montréal', time: 'mardi, 20 h 15', ambience: 'des chaises pliantes, un projecteur, du café tiède, seize résidents qui ne sont pas d’accord' },
  beats: [
    { kind: 'narration', text: 'Montréal, un mardi soir, au conseil de quartier des Hautes-Rives. On vient de voter la répartition de douze mille dollars entre trois jardins communautaires : deux mille dollars chacun, et le reste selon le nombre de familles. Tu tiens le compte rendu.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Malik', fr: 'Écris au moins que c’était égal pour tout le monde.', en: 'At least write that it was equal for everyone.', respell: '[ay-KREE oh-MWEHⁿ | kuh seh-tay-GAL | poor too luh MOHⁿD]', stage: 'Il range ses papiers, un peu vexé.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Rosalie, l’animatrice', fr: 'Une phrase pour le compte rendu, s’il te plaît. Juste et exacte.', en: 'One sentence for the minutes, please. Fair and accurate.', respell: '[ün FRAHZ | poor luh kohⁿt RAHⁿDÜ | seel tuh PLEH | zhüst ay eg-ZAKT]', stage: 'Elle te tend le portable de l’association.', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'Tu veux être exact. Les jardins n’ont pas reçu la même somme : le plus grand a reçu plus, parce qu’il nourrit plus de familles.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle phrase écris-tu dans le compte rendu ?', size: 'lg',
      options: [
        { fr: EGALEMENT.fr, respell: EGALEMENT.respell, en: EGALEMENT.en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1000)), respell: rsOf(E(1000)), en: en(E(1000)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Rosalie hoche la tête. Même Malik reconnaît que c’est exact : la somme a été répartie selon les besoins, pas à parts égales.',
        breaks: 'Yvette lève la main : « Ce n’est pas ce qu’on a voté. » Également veut dire la même somme pour chacun ; le compte rendu vient de changer la décision.',
      },
    },
    {
      kind: 'break', heading: 'Également n’est pas équitablement',
      body: 'Partager également, c’est donner la même part à chacun. Partager équitablement, c’est donner la part juste, selon les besoins. Le conseil a choisi l’équité ; le mot du compte rendu doit le dire. EN: Equally is the same share; fairly is the right share.',
      wrong: { fr: EGALEMENT.fr, ipa: EGALEMENT.ipa, respell: EGALEMENT.respell, en: EGALEMENT.en },
      right: { fr: fr(E(1000)), ipa: ipaOf(E(1000)), respell: rsOf(E(1000)), en: en(E(1000)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Rosalie envoie ta phrase. Cette leçon t’apprend les mots du débat public, chacun avec son voisin et son poids : égalité, justice, libertés, pouvoir, légitimité, identité. À la fin, tu répondras par écrit à un voisin qui les mélange.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['poids', 'egalite'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Dire ce qui est juste, sans te tromper de mot', s: 'Actes 2 et 3 : égalité ou équité, les sens de justice' },
    { t: 'Nommer les libertés et les textes qui les protègent', s: 'Actes 4 et 5 : les libertés publiques, 1789, 1975, 1982' },
    { t: 'Peser un pouvoir et ce qui le limite', s: 'Actes 6 à 9 : autorité, contre-pouvoirs, légitimité, État de droit' },
    { t: 'Employer un mot chargé sans le reprendre à ton compte', s: 'Actes 10 à 12 : identité, modèles, ta contribution' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'Le compte rendu de la séance', frSub: 'Lis, et repère les mots qui pèsent',
  text: LECTURE_CONSEIL,
  glossary: [
    { word: 'arrondissement', en: 'borough', note: 'À Montréal, une division de la ville, avec ses élus et son budget.' },
    { word: 'subvention', en: 'grant', note: 'Une somme versée par une administration pour soutenir un projet.' },
    { word: 'formule mixte', en: 'mixed formula', note: 'Une solution qui combine deux principes.' },
  ],
  questions: [
    { q: 'Global : à quoi sert ce texte ?', a: 'À rendre compte de la séance : la discussion sur la répartition de la subvention, la décision prise et le désaccord de Malik.' },
    { q: 'Détail : que proposait Malik, et au nom de quoi ?', a: 'Quatre mille dollars par jardin, au nom de l’égalité : la même somme pour chacun.' },
    { q: 'Détail : pourquoi Yvette juge-t-elle cette proposition inéquitable ?', a: 'Parce que les jardins n’ont pas la même taille : soixante familles d’un côté, une vingtaine de l’autre. La même somme ne tiendrait pas compte des besoins.' },
    { q: 'Inférence : pourquoi le ton est-il monté quand Aminata a parlé de justice ?', a: 'Malik a entendu une accusation d’injustice, alors qu’elle voulait montrer que chacun mettait un sens différent derrière le même mot.' },
    { q: 'Inférence : que veut dire Malik quand il juge la décision légale, mais pas tout à fait légitime ?', a: 'Elle a été votée selon les règles, mais il doute qu’elle soit pleinement acceptable, parce que peu de résidents ont voté.' },
    { q: 'Position : le compte rendu prend-il parti ?', a: 'Non : il rapporte les positions de chacun et la décision, et note le désaccord de Malik sans le juger.' },
  ],
  audio: REC('rec-c1-15-conseil'), say: REFRAME, terms: ['poids', 'egalite'],
};

const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: 'Le B1, le B2 et le C1, en renfort',
  groups: [
    grp('Le B2 t’a appris la langue du droit', [
      it(B227_JUSTICE, `${Cap(JURIDIQUE_REF)} : la justice, l’institution`),
      it(B227_LOI, `${Cap(JURIDIQUE_REF)} : le droit et la loi`),
      it(B227_EN_DROIT, `${Cap(JURIDIQUE_REF)} : être en droit de`),
    ], chk('« Il a porté l’affaire devant la justice. » Ici, la justice, c’est…',
      ['les tribunaux', 'une valeur', 'la loi elle-même'], 0,
      'L’institution qui juge. Cette leçon y ajoute la justice comme valeur. EN: the courts.')),
    grp('Des mots qui viennent à plusieurs', [
      it(B133_ROW, `${Cap(ENVIRONNEMENT_REF)} : la famille et les voisins`),
      it(B133_EGAL, `${Cap(ENVIRONNEMENT_REF)} : égal et ses voisins`),
      free(C112_REFRAME, C112_REFRAME_EN, `${Cap(IDEES_REF_PLANNED)} : séparer deux mots voisins`),
    ], chk('Égalité et équité sont…',
      ['deux mots voisins qui disent deux idées', 'deux synonymes', 'un mot et son contraire'], 0,
      'Voisins, et séparés par une idée : la même part, ou la part juste. EN: neighbours with two meanings.')),
    ctl('Ce qui change ici', 'Dans cette leçon, tu ajoutes au sens de chaque mot…',
      ['son poids : ce qu’il fait entendre', 'son étymologie', 'sa traduction mot à mot'], 0,
      `${REFRAME} EN: ${REFRAME_EN}`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['poids'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Là où un mot change une décision',
  cases: [
    uc('Tu rédiges la décision d’un comité', E(1000)),
    uc('Tu demandes à quelqu’un de préciser un mot', E(1005)),
    uc('Tu rapportes une position sans la reprendre', E(1007)),
    uc('Tu ramènes un débat sur les mots', E(1010)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['poids'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le mot juste', 'Le grand jardin reçoit plus, parce qu’il a plus de familles. La somme est répartie…',
    ['équitablement', 'également', 'à parts égales'], 0,
    'Selon les besoins : équitablement. EN: fairly.'),
  ctl('La méthode', 'Un mot du débat public te paraît évident. Avant de l’employer, tu…',
    ['dis dans quel sens tu le prends et ce qu’il pèse', 'cherches le plus fort'], 0,
    `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('Le renfort', 'La justice comme institution, vue à la leçon 27 du B2, est…',
    ['supposée connue', 'enseignée de nouveau'], 0,
    'Elle est citée, jamais réenseignée : cette leçon va vers la justice comme valeur. EN: assumed known.'),
], ['poids']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le poids des mots',
    opener: {
      line: 'Douze mille dollars, trois jardins et un seul mot de travers : ici tu découvres qu’un mot du débat public a un sens et un poids. EN: Twelve thousand dollars, three gardens and one wrong word: here you see that a word of public debate has a meaning and a weight.',
      imageRef: 'lessons/notions-politiques/act01.jpg',
    },
    sections: [],
    milestone: 'Tu rédiges une décision sans la déformer, et tu sais qu’un mot politique a un sens et un poids. EN: You can write up a decision without distorting it, and you know a political word has a meaning and a weight.',
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — ÉGALITÉ ET ÉQUITÉ
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a2-histoire', layer: 'core',
  title: 'Au jardin, le lendemain', frSub: 'La même part, ou la part juste',
  setting: 'Le lendemain, au jardin des Pommiers. Théo arrose ses tomates ; Yvette vient le voir, la décision de la veille encore en tête.',
  bubbles: [
    { from: 'narrator', fr: 'Théo pose son arrosoir. Yvette s’assoit sur le muret.', en: 'Théo puts down his watering can. Yvette sits on the low wall.' },
    { from: 'user', fr: 'Malik dit qu’on a trahi l’égalité. Moi, je crois qu’on l’a dépassée.', en: 'Malik says we betrayed equality. I think we went beyond it.' },
    { from: 'coach', fr: fr(E(1018)), en: en(E(1018)), warn: 'Égal, équitable' },
    { from: 'user', fr: 'Pourtant, je comprends sa peur : le plus grand jardin gagnera toujours.', en: 'Still, I understand his fear: the biggest garden will always win.' },
    { from: 'coach', fr: 'C’est pour ça que la formule garde deux mille dollars de base pour chacun : un peu d’égalité, puis de l’équité.', en: 'That is why the formula keeps two thousand dollars as a base for each: a little equality, then equity.', warn: 'Une formule mixte' },
    { from: 'coach', fr: fr(E(1016)), en: en(E(1016)), warn: 'La règle' },
    { from: 'user', fr: 'Et le vote, onze contre cinq, c’était serré.', en: 'And the vote, eleven to five, was close.' },
    { from: 'coach', fr: 'Serré, mais pas à égalité : six contre six, il aurait fallu revoter.', en: 'Close, but not a tie: at six to six, we would have had to vote again.', warn: 'À égalité' },
  ],
  closing: { fr: 'L’égalité donne la même chose ; l’équité regarde d’abord la situation de chacun.', en: 'Equality gives the same thing; equity looks first at each person’s situation.' },
  audio: REC('rec-c1-15-jardin'), say: REFRAME, terms: ['egalite'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-egalite',
  title: 'Quatre façons de partager', frSub: 'La même part, ou la part juste',
  hint: 'Quatre cartes. Demande-toi chaque fois : tout le monde reçoit-il la même chose ?',
  audio: REC('rec-c1-15-egalite-cartes'), say: REFRAME, terms: ['egalite'],
  cards: [
    { head: 'Devant la loi', label: 'l’égalité', fr: fr(E(1011)), sub: rsOf(E(1011)),
      body: 'Les mêmes droits pour tous. L’égalité des droits ne regarde pas la situation de chacun : c’est sa force. EN: the same rights for everyone.' },
    { head: 'Selon les besoins', label: 'l’équité', fr: fr(E(1012)), sub: rsOf(E(1012)),
      body: 'Une répartition équitable tient compte de la situation de chacun. Elle peut donner plus à l’un qu’à l’autre. EN: a fair, needs-based distribution.' },
    { head: 'Exactement autant', label: 'à parts égales', fr: fr(E(1013)), sub: rsOf(E(1013)),
      body: 'Chacun reçoit la même part, au dollar près. On partage à parts égales un héritage, une addition. EN: in exactly equal shares.' },
    { head: 'Un idéal, un adjectif', label: 'égalitaire', fr: fr(E(1014)), sub: rsOf(E(1014)),
      body: 'Égalitaire : qui vise l’égalité stricte. Une société égalitaire réduit les écarts ; le mot peut être un éloge ou un reproche, selon qui parle. EN: egalitarian, praise or reproach.' },
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-construire', layer: 'core', size: 'lg',
  title: 'La même chose, ou la chose juste', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('L’égalité', [
      it(VAL1(41), 'le mot du B1'),
      it(E(1011), 'les droits'),
      it(E(1017), 'devant la loi'),
      it(B133_EGAL, `${Cap(ENVIRONNEMENT_REF)} : la famille`),
    ], chk('« Tous les citoyens sont égaux devant la loi. » Cette phrase dit…',
      ['la même règle pour tous', 'une part selon les besoins'], 0,
      'Devant la loi, pas de traitement selon la situation : égalité. EN: one rule for all.')),
    grp('L’équité', [
      it(ETH(2), 'le mot du B2'),
      it(E(1015), 'la famille'),
      it(E(1019), 'plus pour qui en a besoin'),
      it(PHILO_JUSTE, 'des lois égales, appliquées équitablement'),
    ], chk('« Les élèves en difficulté reçoivent plus d’heures de soutien. » C’est une mesure…',
      ['d’équité', 'd’égalité stricte'], 0,
      'On donne plus à qui en a besoin : équité. EN: equity.')),
    ctl('Les deux à la fois', '« Il ne suffit pas que les lois soient égales, encore faut-il qu’elles soient appliquées équitablement. » La phrase dit que…',
      ['l’égalité des lois ne suffit pas à la justice', 'l’équité remplace l’égalité'], 0,
      'Les deux vont ensemble : des lois égales, et une application qui tient compte des cas. EN: equal laws are not enough.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['egalite'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a2-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'La même part, ou la part juste',
    body: 'Quand tout le monde reçoit la même chose, dis égal, également, à parts égales. Quand on tient compte des besoins, dis équitable, équitablement. Et à égalité, c’est un score, pas une valeur. EN: same share or fair share; à égalité is a tie.',
  },
  cards: [
    trap(E(1000), 'également pour équitablement', 'Le comité répartit la somme également, selon le nombre de familles.', 'Selon le nombre de familles, les parts diffèrent : équitablement. EN: équitablement.'),
    trap(E(1018), 'égal et équitable', 'Une même aide pour tous serait équitable, mais pas forcément égale.', 'La même aide pour tous est égale par définition ; c’est l’équité qui manque. EN: égale, pas équitable.'),
    trap(E(1013), 'à parts égales', 'partager en parts égalitaires', 'Égalitaire qualifie un idéal ou une société ; les parts sont égales. EN: à parts égales.'),
    trap(E(1020), 'à égalité', 'Le vote s’est terminé en égalité, six voix contre six.', 'Un score nul : à égalité. EN: à égalité.'),
    trap(E(1021), 'inéquitable', 'Ce partage me paraît inéquitablement pour les petites associations.', 'Après paraître, un adjectif : inéquitable. L’adverbe équitablement va avec un verbe : répartir équitablement. EN: inéquitable.'),
    trap(E(1022), 'chances et résultats', 'L’égalité des chances garantit l’égalité des résultats.', 'Les mêmes chances au départ ne promettent pas les mêmes résultats à l’arrivée. EN: it does not guarantee.'),
  ],
  drill: [
    { promptSay: 'Malik voulait partager la somme à parts … .', opts: ['égales', 'équitables'], correct: 0 },
    { promptSay: 'Une répartition … tient compte des besoins.', opts: ['équitable', 'égalitaire'], correct: 0 },
    { promptSay: 'Le match s’est terminé à … .', opts: ['égalité', 'équité'], correct: 0 },
    { promptSay: 'Tous les citoyens sont … devant la loi.', opts: ['égaux', 'équitables'], correct: 0 },
    { promptSay: 'Donner plus d’heures aux élèves en difficulté, c’est une mesure d’… .', opts: ['équité', 'égalité'], correct: 0 },
    { promptSay: 'L’égalité des … ne garantit pas l’égalité des résultats.', opts: ['chances', 'parts'], correct: 0 },
    { promptSay: 'Ce partage est … : il ignore les besoins des petites associations.', opts: ['inéquitable', 'inéquitablement'], correct: 0 },
    { promptSay: 'Une société … vise l’égalité stricte entre tous.', opts: ['égalitaire', 'équitable'], correct: 0 },
  ],
  steps: STEPS('La même part, ou la part juste', 'Six phrases à redresser'),
  audio: REC('rec-c1-15-piege-egalite'), say: REFRAME, terms: ['egalite'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a2-ecoute', layer: 'core', hideLines: true,
  title: 'Huit phrases entendues', frSub: 'Écoute, puis réponds',
  lines: [
    ln(E(1017)), ln(E(1018)), ln(E(1019)), ln(E(1020)),
    ln(E(1021)), ln(E(1022)), ln(E(1023)), ln(E(1001)),
  ],
  questions: [
    { q: 'Première phrase : de quelle égalité parle-t-on ?', opts: ['l’égalité devant la loi', 'l’égalité des salaires'], correct: 0, why: 'Égaux devant la loi : les mêmes droits. EN: equality before the law.' },
    { q: 'Deuxième phrase : la même aide pour tous serait-elle forcément juste ?', opts: ['non, pas forcément', 'oui, toujours'], correct: 0, why: 'Égale, mais pas forcément équitable. EN: not necessarily.' },
    { q: 'Troisième phrase : qui reçoit plus d’heures de soutien ?', opts: ['les élèves en difficulté', 'tous les élèves', 'les meilleurs élèves'], correct: 0, why: 'On donne plus à qui en a besoin : équité. EN: the struggling pupils.' },
    { q: 'Quatrième phrase : quel a été le résultat du vote ?', opts: ['un score nul', 'une large majorité'], correct: 0, why: 'Six contre six : à égalité. EN: a tie.' },
    { q: 'Septième phrase : traiter différemment deux situations peut-il être juste ?', opts: ['oui, si elles sont différentes', 'non, jamais'], correct: 0, why: 'C’est l’idée même de l’équité. EN: yes.' },
  ],
  audio: REC('rec-c1-15-egalite-ecoute'), say: REFRAME, terms: ['egalite'],
};

const A2_TEXTE = dansUnTexte('a2-texte', 'Lire : un message de parents', TEXTE_A2, [
  { q: 'Quelle proposition du centre de services scolaire relève de l’égalité ?', a: 'Le même budget de sorties, trois mille dollars, pour toutes les écoles du secteur.' },
  { q: 'Pourquoi les parents la jugent-ils insuffisante ?', a: 'Leurs écoles accueillent beaucoup d’enfants dont les familles ne peuvent pas payer : un même budget serait égal, pas équitable.' },
  { q: 'Que demandent-ils à la place ?', a: 'Une part de base identique pour tous, plus une part supplémentaire selon les besoins : une formule mixte.' },
  { q: 'Que veut dire « l’égalité des chances ne se décrète pas : elle se finance » ?', a: 'Proclamer les mêmes chances ne suffit pas : il faut des moyens pour compenser les écarts de départ.' },
], 'rec-c1-15-texte-a2', ['egalite']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La même part', 'Chacun reçoit exactement autant. On partage…',
    ['à parts égales', 'équitablement'], 0,
    'La même part : à parts égales. EN: equally.'),
  ctl('La part juste', 'On donne plus à qui en a besoin. C’est une mesure…',
    ['d’équité', 'd’égalité stricte'], 0,
    'Selon les besoins : équité. EN: equity.'),
  ctl('Le score', 'Six voix contre six : le vote est…',
    ['à égalité', 'équitable', 'égalitaire'], 0,
    'Un score nul se dit à égalité. EN: tied.'),
], ['egalite']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Égalité et équité',
    opener: {
      line: 'Trois jardins, une seule somme : ici tu sépares la même part pour chacun et la part juste pour chacun. EN: Three gardens, one sum: here you separate the same share for each from the fair share for each.',
      imageRef: 'lessons/notions-politiques/act02.jpg',
    },
    sections: [],
    milestone: 'Tu distingues égal et équitable, à parts égales et à égalité, et tu reconnais une formule qui mêle les deux. EN: You tell equal from fair, equal shares from a tie, and recognise a formula that mixes both.',
    estScreens: 38, restPoints: ['a2-construire', 'a2-ecoute'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_CONSTRUIRE, A2_PIEGE, A2_ECOUTE, A2_TEXTE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LA JUSTICE
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a3-histoire', layer: 'core',
  title: 'Le voisin et la clôture', frSub: 'Réclamer justice, saisir la justice',
  setting: 'Un soir, Aminata appelle sa mère à Sherbrooke. Un voisin a déplacé la clôture de son terrain de deux mètres, et son frère parle d’aller la remettre en place lui-même, la nuit.',
  bubbles: [
    { from: 'narrator', fr: 'Aminata marche dans sa cuisine, le téléphone à l’oreille.', en: 'Aminata paces her kitchen, the phone to her ear.' },
    { from: 'user', fr: 'Ibrahim veut arracher la clôture cette nuit. Il dit que c’est la justice.', en: 'Ibrahim wants to pull the fence out tonight. He says it is justice.' },
    { from: 'coach', fr: fr(E(1032)), en: en(E(1032)), warn: 'Se faire justice' },
    { from: 'user', fr: 'Mais attendre des mois, c’est injuste aussi.', en: 'But waiting for months is unfair too.' },
    { from: 'coach', fr: 'Je sais. Tu peux saisir la justice demain matin : un juge tranchera, et ton frère n’aura rien à se reprocher.', en: 'I know. You can take it to court tomorrow morning: a judge will decide, and your brother will have nothing to blame himself for.', warn: 'Saisir la justice' },
    { from: 'coach', fr: fr(E(1029)), en: en(E(1029)), warn: 'Deux justices' },
    { from: 'user', fr: 'Et si le juge nous donne raison, ce sera enfin juste.', en: 'And if the judge rules for us, it will finally be fair.' },
    { from: 'coach', fr: 'Ce sera juste, et ce sera la justice qui l’aura dit. Ça ne se compare pas.', en: 'It will be fair, and it will be justice that said so. There is no comparison.', warn: 'Juste' },
  ],
  closing: { fr: 'Réclamer justice, c’est la valeur ; saisir la justice, c’est l’institution.', en: 'Demanding justice is the value; going to the courts is the institution.' },
  audio: REC('rec-c1-15-cloture'), say: REFRAME, terms: ['justice'],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-table', layer: 'core', sheetId: 'sheet-egalite',
  title: 'Six emplois du mot justice',
  cols: ['Tournure', 'Elle désigne', 'Exemple'],
  rows: [
    { cells: ['réclamer justice', 'la valeur, ce qui est dû', 'des familles'], say: fr(E(1030)),
      detail: { title: 'Réclamer justice', body: 'Sans article : on demande ce qui est dû. On peut aussi demander réparation. EN: to demand justice.', say: fr(E(1030)) } },
    { cells: ['saisir la justice', 'l’institution, les tribunaux', 'un procès'], say: fr(E(1036)),
      detail: { title: 'Saisir la justice', body: 'Avec l’article : on s’adresse aux tribunaux. Porter l’affaire devant la justice se dit aussi. EN: to go to court.', say: fr(B227_JUSTICE) } },
    { cells: ['rendre la justice', 'juger', 'les juges'], say: fr(E(1026)),
      detail: { title: 'Rendre la justice', body: 'Ce que font les juges et les tribunaux : juger. Registre soutenu. EN: to administer justice.', say: fr(E(1026)) } },
    { cells: ['rendre justice à', 'reconnaître un mérite', 'un livre, un film'], say: fr(E(1031)),
      detail: { title: 'Rendre justice à', body: 'Reconnaître enfin les mérites de quelqu’un, ou réparer un tort. Sans article. EN: to do someone justice.', say: fr(E(1025)) } },
    { cells: ['se faire justice', 'se venger soi-même', 'un reproche'], say: fr(E(1032)),
      detail: { title: 'Se faire justice soi-même', body: 'Punir quelqu’un sans passer par les tribunaux. L’expression condamne. EN: to take the law into one’s own hands.', say: fr(E(1027)) } },
    { cells: ['juste, injuste', 'équitable, ou exact', 'une décision, une réponse'], say: fr(E(1034)),
      detail: { title: 'Juste', body: 'Deux sens : conforme à la justice (une décision juste) et exact (une réponse juste). Injuste n’a que le premier. EN: fair, or correct.', say: fr(E(1033)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['justice'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-construire', layer: 'core', size: 'lg',
  title: 'La valeur, l’institution', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('La justice comme valeur', [
      it(VAL1(39), 'le mot du B1'),
      it(E(1024), 'quand elle manque'),
      it(E(1030), 'ce que l’on réclame'),
      it(ETH(189), 'à l’échelle d’une société'),
    ], chk('« Les familles des victimes réclament justice. » Elles demandent…',
      ['ce qui leur est dû', 'un avocat'], 0,
      'Sans article, la valeur : ce qui est dû. EN: what is owed to them.')),
    grp('La justice comme institution', [
      it(B227_JUSTICE, `${Cap(JURIDIQUE_REF)} : devant la justice`),
      it(E(1026), 'ce que font les juges'),
      it(E(1036), 'saisir la justice'),
      it(ETH(190), 'une autre façon de juger'),
    ], chk('« Elle a saisi la justice. » Elle s’est adressée…',
      ['aux tribunaux', 'à sa conscience'], 0,
      'Saisir la justice : s’adresser aux tribunaux. EN: to the courts.')),
    ctl('Juste', '« Ta réponse est juste. » Ici, juste veut dire…',
      ['exacte', 'équitable'], 0,
      'Pour une réponse, juste veut dire exacte. EN: correct.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['justice'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a3-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre façons de rendre justice de travers',
  errors: [
    { wrong: 'Le film rend enfin la justice à ces ouvrières oubliées.', right: fr(E(1031)),
      why: 'Normal : rendre la justice existe. Mais il veut dire juger ; pour reconnaître un mérite, c’est rendre justice à, sans article. EN: rendre justice à.' },
    { wrong: 'Personne n’a le droit de prendre la loi entre ses mains.', right: fr(E(1032)),
      why: 'Normal : to take the law into one’s own hands se calque mot à mot. Pour punir sans passer par les tribunaux, l’expression française est se faire justice (soi-même). EN: se faire justice.' },
    { wrong: 'Cette décision a laissé un profond sentiment d’injustesse.', right: fr(E(1033)),
      why: 'Normal : juste donne justesse. Mais l’injustesse, c’est l’inexactitude ; ce qui blesse, c’est l’injustice. EN: injustice.' },
    { wrong: 'Elle a amené son employeur à la justice pour faire reconnaître ses droits.', right: fr(E(1036)),
      why: 'Normal : to bring to justice se calque mot à mot. En français, on saisit la justice, ou on poursuit son employeur en justice. EN: saisir la justice.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['justice'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a3-exemples', layer: 'core',
  title: 'Cinq phrases sur ce qui est juste', frSub: 'Du B2, du C1 et de cette leçon',
  examples: [
    ex(ETH(248), 'injuste : punir tout le monde pour un seul'),
    ex(ETH(67), 'l’adjectif du B2'),
    ex(C1_JUSTICE_RENDUE, 'justice rendue, mais tard'),
    ex(E(1034), 'juste : exact, ou équitable'),
    ex(E(1035), 'une justice trop lente'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['justice'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Lire : une brève de journal', TEXTE_A3, [
  { q: 'Quelle phrase parle de la justice comme institution ?', a: '« Ils avaient saisi la justice en 2019 » : ils se sont adressés aux tribunaux.' },
  { q: 'Quelle phrase parle de la justice comme valeur ?', a: '« Nous voulions justice » : ils réclamaient ce qui leur était dû, pas seulement de l’argent.' },
  { q: 'Que veut dire « le jugement leur rend enfin justice » ?', a: 'Il reconnaît enfin qu’ils avaient raison et répare le tort subi.' },
  { q: 'Pourquoi l’avocate parle-t-elle quand même d’un sentiment d’injustice ?', a: 'Parce que la décision arrive tard : deux salariés sont morts avant de l’entendre. Une justice trop lente laisse un goût d’injustice.' },
], 'rec-c1-15-texte-a3', ['justice']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La valeur', 'Sans article, « réclamer justice », c’est demander…',
    ['ce qui est dû', 'un tribunal'], 0,
    'La valeur. EN: what is owed.'),
  ctl('Le mérite', 'Un livre qui reconnaît enfin le travail de ces infirmières leur…',
    ['rend justice', 'rend la justice', 'demande justice'], 0,
    'Rendre justice à : reconnaître un mérite. EN: does them justice.'),
  ctl('La vengeance', 'Punir quelqu’un sans passer par les tribunaux, c’est…',
    ['se faire justice soi-même', 'saisir la justice'], 0,
    'L’expression est critique : se faire justice. EN: vigilante justice.'),
], ['justice']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La justice',
    opener: {
      line: 'Une clôture déplacée et un frère pressé : ici tu sépares la justice qu’on réclame et la justice qu’on saisit. EN: A moved fence and an impatient brother: here you separate the justice you demand from the justice you go to.',
      imageRef: 'lessons/notions-politiques/act03.jpg',
    },
    sections: [],
    milestone: 'Tu emploies justice comme valeur et comme institution, et tu ne confonds plus rendre justice, rendre la justice et se faire justice. EN: You use justice as a value and an institution, and keep its three verbs apart.',
    estScreens: 38, restPoints: ['a3-table', 'a3-erreurs'],
  },
  sections: [A3_HISTOIRE, A3_TABLE, A3_CONSTRUIRE, A3_ERREURS, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA LIBERTÉ ET LES LIBERTÉS
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'Radio Hautes-Rives', frSub: 'Huit auditeurs, au téléphone',
  lines: [
    ln(E(1043)), ln(E(1044)), ln(E(1045)), ln(E(1046)),
    ln(E(1047)), ln(E(1048)), ln(E(1049)), ln(E(1042)),
  ],
  questions: [
    { q: 'Premier auditeur : la liberté d’expression a-t-elle des bornes ?', opts: ['oui', 'non'], correct: 0, why: 'Elle n’est pas sans limites. EN: yes.' },
    { q: 'Deuxième auditrice : à quoi sert la liberté de réunion ?', opts: ['à manifester pacifiquement', 'à voter', 'à voyager'], correct: 0, why: 'Se réunir, manifester pacifiquement. EN: to demonstrate peacefully.' },
    { q: 'Troisième auditeur : quelle liberté la mesure restreint-elle ?', opts: ['la liberté de circulation', 'la liberté de conscience'], correct: 0, why: 'Se déplacer : la liberté de circulation. EN: freedom of movement.' },
    { q: 'Cinquième auditrice : a-t-elle demandé la permission avant d’écrire ?', opts: ['non, elle a pris la liberté d’écrire', 'oui'], correct: 0, why: 'Prendre la liberté de : oser, poliment, sans demander. EN: she took the liberty.' },
    { q: 'Sixième auditeur : de quoi les associations se plaignent-elles ?', opts: ['d’une atteinte aux libertés publiques', 'd’un manque de bénévoles'], correct: 0, why: 'Une atteinte : une réduction des libertés. EN: an infringement.' },
    { q: 'Dernier auditeur : au pluriel, que sont les libertés ?', opts: ['des droits précis', 'une valeur unique'], correct: 0, why: 'Au singulier une valeur ; au pluriel des droits. EN: specific rights.' },
  ],
  audio: REC('rec-c1-15-radio-libertes'), say: REFRAME, terms: ['liberte'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-droits',
  title: 'Les libertés, et ce qui les menace', frSub: 'Des droits qu’on peut nommer',
  hint: 'Quatre cartes. Les deux dernières disent ce qu’on peut faire à une liberté.',
  audio: REC('rec-c1-15-libertes-cartes'), say: REFRAME, terms: ['liberte'],
  cards: [
    { head: 'Au pluriel', label: 'les libertés publiques', fr: fr(E(1037)), sub: rsOf(E(1037)),
      body: 'Les libertés que l’État reconnaît et protège : s’exprimer, se réunir, s’associer, croire. EN: civil liberties, always plural.' },
    { head: 'Croire, ou ne pas croire', label: 'la liberté de conscience', fr: fr(E(1038)), sub: rsOf(E(1038)),
      body: 'Croire, ne pas croire, changer de conviction. Les chartes la nomment en premier. EN: freedom of conscience.' },
    { head: 'Le reproche grave', label: 'porter atteinte à', fr: fr(E(1039)), sub: rsOf(E(1039)),
      body: 'Porter atteinte à une liberté, c’est la réduire, souvent sans le dire. Soutenu, et toujours avec à. EN: to infringe.' },
    { head: 'La limite assumée', label: 'restreindre', fr: fr(E(1040)), sub: rsOf(E(1040)),
      body: 'Restreindre une liberté, c’est la limiter, parfois pour de bonnes raisons. Une restriction se discute ; une atteinte se dénonce. EN: to restrict.' },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-construire', layer: 'core', size: 'lg',
  title: 'Une valeur, des droits', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('La liberté, valeur', [
      it(VAL1(40), 'le mot du B1'),
      it(E(1041), 'la famille'),
      it(E(1046), 'être libre de'),
      it(E(1049), 'la limite, dans un proverbe'),
    ], chk('« La liberté des uns s’arrête où commence celle des autres. » Ce proverbe dit que…',
      ['la liberté a des limites', 'personne n’est libre'], 0,
      'Une liberté se borne là où elle nuirait aux autres. EN: freedom has limits.')),
    grp('Les libertés, droits', [
      it(ETH(126), 'le mot du B2'),
      it(E(1037), 'toujours au pluriel'),
      it(E(1044), 'se réunir'),
      it(ETH(185), 'une liberté qui touche la vie privée'),
    ], chk('La liberté d’expression, de réunion, d’association sont…',
      ['des libertés publiques', 'des valeurs morales'], 0,
      'Des droits précis, que l’État protège. EN: civil liberties.')),
    ctl('Atteinte ou restriction', 'Une mesure limite la liberté de réunion pour un motif annoncé. Tu parles plutôt…',
      ['d’une restriction', 'd’une atteinte'], 0,
      'Une restriction se discute ; « atteinte » accuse déjà. EN: a restriction.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['liberte'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a4-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Les petits mots des libertés',
    body: 'On porte atteinte à une liberté, on est libre de faire, on prend la liberté de faire. La liberté de réunion est le mot des chartes pour freedom of assembly, et restreindre se conjugue comme peindre. EN: the prepositions and verbs of freedom.',
  },
  cards: [
    trap(E(1039), 'porter atteinte à', 'porter atteinte sur une liberté', 'Toujours à : porter atteinte à. EN: à.'),
    trap(E(1046), 'libre de', 'Tu es libre à ne pas être d’accord.', 'Être libre de + infinitif. EN: libre de.'),
    trap(E(1047), 'prendre la liberté de', 'J’ai pris la liberté pour vous écrire directement.', 'Prendre la liberté de + infinitif. EN: de.'),
    trap(E(1045), 'restreindre', 'Cette mesure restricte la liberté de circulation des habitants.', 'Le verbe est restreindre : elle restreint. Restrictif est l’adjectif. EN: restreint.'),
    trap(E(1044), 'la liberté de réunion', 'La liberté d’assemblée permet de manifester pacifiquement.', 'Freedom of assembly : les chartes et les textes de droit disent la liberté de réunion (pacifique). « Liberté d’assemblée » se lit parfois, calqué sur l’anglais, mais ce n’est pas le terme. EN: réunion.'),
    trap(E(1048), 'publiques', 'Les associations dénoncent une atteinte aux libertés publics.', 'Libertés est féminin : publiques. EN: publiques.'),
  ],
  drill: [
    { promptSay: 'Cette mesure porte atteinte … la liberté de réunion.', opts: ['à', 'sur'], correct: 0 },
    { promptSay: 'Tu es libre … refuser.', opts: ['de', 'à'], correct: 0 },
    { promptSay: 'J’ai pris la liberté … vous appeler.', opts: ['de', 'pour'], correct: 0 },
    { promptSay: 'Le nouveau règlement … la liberté de circulation.', opts: ['restreint', 'restricte'], correct: 0 },
    { promptSay: 'Dans les deux chartes, on lit : la liberté de … pacifique.', opts: ['réunion', 'assemblée'], correct: 0 },
    { promptSay: 'Les libertés … sont protégées par les chartes.', opts: ['publiques', 'publics'], correct: 0 },
    { promptSay: 'Croire ou ne pas croire : la liberté de … .', opts: ['conscience', 'circulation'], correct: 0 },
    { promptSay: 'La liberté d’expression n’est pas sans … .', opts: ['limites', 'libertés'], correct: 0 },
  ],
  steps: STEPS('Les petits mots des libertés', 'Six phrases à redresser'),
  audio: REC('rec-c1-15-piege-libertes'), say: REFRAME, terms: ['liberte'],
};

const A4_FLASH: Sec<'flashcards'> = {
  type: 'flashcards', id: 'a4-flash', layer: 'core',
  title: 'Huit mots des libertés', frSub: 'De l’anglais au français',
  cards: [
    { front: 'civil liberties', back: 'les libertés publiques', say: fr(E(1048)) },
    { front: 'freedom of assembly', back: 'la liberté de réunion', say: fr(E(1044)) },
    { front: 'freedom of movement', back: 'la liberté de circulation', say: fr(E(1045)) },
    { front: 'freedom of conscience', back: 'la liberté de conscience', say: 'La liberté de conscience protège aussi ceux qui ne croient pas.' },
    { front: 'to infringe a freedom', back: 'porter atteinte à une liberté', say: 'Ce règlement porte atteinte à la liberté d’association.' },
    { front: 'to restrict', back: 'restreindre', say: fr(E(1045)) },
    { front: 'to take the liberty of', back: 'prendre la liberté de', say: fr(E(1047)) },
    { front: 'censorship', back: 'la censure', say: 'La censure frappe d’abord les journalistes.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['liberte'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Lire : un communiqué', TEXTE_A4, [
  { q: 'Que prévoit le projet de règlement ?', a: 'Une autorisation préalable pour toute réunion de plus de vingt personnes dans un parc.' },
  { q: 'La fondation conteste-t-elle que la liberté ait des limites ?', a: 'Non : elle reconnaît que la tranquillité des riverains compte aussi.' },
  { q: 'Quelles libertés publiques le règlement toucherait-il ?', a: 'La liberté de réunion et la liberté d’association.' },
  { q: 'Quelle différence fait-elle entre restreindre une liberté et la soumettre à un bureau ?', a: 'Restreindre peut se justifier ; faire dépendre chaque réunion d’une autorisation revient à la mettre à la merci de l’administration.' },
], 'rec-c1-15-texte-a4', ['liberte']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le pluriel', 'S’exprimer, se réunir, s’associer, croire : ce sont…',
    ['des libertés publiques', 'une liberté publique'], 0,
    'Des droits précis, au pluriel. EN: civil liberties.'),
  ctl('La préposition', 'Une mesure qui réduit une liberté y porte atteinte…',
    ['à', 'sur', 'contre'], 0,
    'Porter atteinte à. EN: à.'),
  ctl('Le mot des chartes', 'Dans les chartes, freedom of peaceful assembly se dit…',
    ['la liberté de réunion pacifique', 'la liberté d’assemblée pacifique'], 0,
    'Le mot des chartes : réunion pacifique. EN: réunion.'),
], ['liberte']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La liberté et les libertés',
    opener: {
      line: 'Huit auditeurs au téléphone, huit libertés : ici tu sépares la liberté qu’on célèbre et les libertés qu’on peut nommer et défendre. EN: Eight callers, eight freedoms: here you separate the liberty people celebrate from the liberties they can name and defend.',
      imageRef: 'lessons/notions-politiques/act04.jpg',
    },
    sections: [],
    milestone: 'Tu nommes les libertés publiques, tu dis qu’une mesure les restreint ou y porte atteinte, et tu emploies les bonnes prépositions. EN: You name civil liberties, say a measure restricts or infringes them, and use the right prepositions.',
    estScreens: 40, restPoints: ['a4-cartes', 'a4-piege'],
  },
  sections: [A4_ECOUTE, A4_CARTES, A4_CONSTRUIRE, A4_PIEGE, A4_FLASH, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LES DROITS ET LEURS TEXTES
 *  Every article number and quotation: corpus §A.7 a to e.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a5-histoire', layer: 'core',
  title: 'À la bibliothèque', frSub: 'Trois textes, trois mots',
  setting: 'Samedi matin, à la bibliothèque Marie-Galante. Kwame, arrivé du Ghana il y a trois ans, prépare son examen de citoyenneté avec la bibliothécaire, Hélène.',
  bubbles: [
    { from: 'narrator', fr: 'Kwame a étalé trois photocopies sur la table. Hélène s’assoit à côté de lui.', en: 'Kwame has spread three photocopies on the table. Hélène sits down next to him.' },
    { from: 'user', fr: 'Dans mon livre, on dit les droits de la personne. Mon cousin à Paris dit les droits de l’homme.', en: 'My book says droits de la personne. My cousin in Paris says droits de l’homme.' },
    { from: 'coach', fr: fr(E(1056)), en: en(E(1056)), warn: 'Trois usages' },
    { from: 'user', fr: 'Et celle-ci, de 1789, commence par une phrase que tout le monde cite.', en: 'And this one, from 1789, begins with a sentence everyone quotes.' },
    { from: 'coach', fr: fr(E(1057)), en: en(E(1057)), warn: 'L’article premier' },
    { from: 'user', fr: 'Ici, au Canada, la Charte protège ma liberté d’expression sans aucune limite, je suppose.', en: 'Here in Canada, I suppose the Charter protects my freedom of expression without any limit.' },
    { from: 'coach', fr: fr(E(1061)), en: en(E(1061)), warn: 'L’article premier de 1982' },
    { from: 'coach', fr: 'C’est l’article premier de la Charte canadienne : les droits y sont garantis, et leurs limites encadrées.', en: 'It is article 1 of the Canadian Charter: rights are guaranteed there, and their limits framed.', warn: 'Garantir, encadrer' },
  ],
  closing: { fr: 'Un droit fondamental est consacré par un texte ; ses limites aussi.', en: 'A fundamental right is enshrined in a text; so are its limits.' },
  audio: REC('rec-c1-15-bibliotheque'), say: REFRAME, terms: ['droits'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-droits',
  title: 'Trois textes et un verbe', frSub: '1789, 1975, 1982',
  hint: 'Quatre cartes : trois textes, puis le verbe qui dit ce qu’ils font.',
  audio: REC('rec-c1-15-droits-cartes'), say: REFRAME, terms: ['droits'],
  cards: [
    { head: 'France, 1789', label: 'la Déclaration', fr: fr(E(1053)), sub: rsOf(E(1053)),
      body: 'Dix-sept articles. Le premier proclame que les hommes naissent et demeurent libres et égaux en droits ; le onzième protège la libre communication des pensées. EN: the 1789 Declaration.' },
    { head: 'Canada, 1982', label: 'la Charte canadienne', fr: fr(E(1054)), sub: rsOf(E(1054)),
      body: 'Elle fait partie de la Constitution. Article 2 : les libertés fondamentales ; article 15 : l’égalité ; article 1 : des limites raisonnables. EN: the Canadian Charter.' },
    { head: 'Québec, 1975', label: 'la Charte québécoise', fr: fr(E(1055)), sub: rsOf(E(1055)),
      body: 'Elle s’applique aussi entre particuliers. Article 3 : les libertés fondamentales ; article 4 : la dignité, l’honneur, la réputation. EN: the Quebec Charter.' },
    { head: 'Ce que fait un texte', label: 'consacrer', fr: fr(E(1051)), sub: rsOf(E(1051)),
      body: 'Un texte consacre un droit : il l’inscrit et le reconnaît solennellement. On dit aussi garantir, proclamer, reconnaître. EN: to enshrine.' },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-construire', layer: 'core', size: 'lg',
  title: 'Les textes et leurs mots', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Ce que disent les textes', [
      it(E(1057), '1789, article premier'),
      it(E(1058), '1789, article 4, extrait'),
      it(E(1059), '1982, article 2'),
      it(E(1060), '1975, article 4'),
    ], chk('« La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. » D’après ce texte, la liberté…',
      ['s’arrête là où l’on nuit aux autres', 'n’a aucune limite'], 0,
      'Le début de l’article 4 de 1789 : la limite, c’est le tort fait à autrui. EN: it stops where others are harmed.')),
    grp('Les mots des droits', [
      it(E(1050), 'un droit fondamental'),
      it(ETH(152), 'le mot qui se répand'),
      it(ETH(187), 'ce que les chartes interdisent'),
      it(VAL1(54), 'le lien avec un État'),
    ], chk('Un droit que les textes les plus élevés protègent est…',
      ['un droit fondamental', 'un droit acquis'], 0,
      'Fondamental : à la base de tout l’édifice. EN: fundamental.')),
    ctl('Les usages', 'À Montréal, dans un texte officiel, human rights se dit le plus souvent…',
      ['les droits de la personne', 'les droits de l’homme'], 0,
      'Au Canada et au Québec : droits de la personne. À Paris, droits de l’homme. EN: droits de la personne.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['droits'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a5-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre erreurs sur les textes',
  errors: [
    { wrong: 'La Déclaration des droits humains et du citoyen date de 1789.', right: 'La Déclaration des droits de l’homme et du citoyen date de 1789.',
      why: 'Normal : droits humains est un usage actuel, et souvent recommandé. Mais le titre d’un texte de 1789 ne se modernise pas. EN: a title is fixed.' },
    { wrong: 'Un droit fondamental est consacré à un texte.', right: 'Un droit fondamental est consacré par un texte.',
      why: 'Normal : consacrer à existe (consacrer son temps à). Mais un texte consacre un droit : au passif, par. EN: par.' },
    { wrong: 'La Charte canadienne protège les libertés fondamentales sans aucune limite.', right: fr(E(1061)),
      why: 'Normal : on retient la liste de l’article 2. Mais l’article 1 permet des limites raisonnables, si on peut les justifier. EN: within reasonable limits.' },
    { wrong: 'La Charte canadienne des droits et libertés date de 1867.', right: 'La Charte canadienne des droits et libertés date de 1982.',
      why: 'Normal : 1867 est la date de la première Loi constitutionnelle. La Charte, elle, entre dans la Constitution en 1982. EN: 1982.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['droits'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a5-ecoute', layer: 'core', hideLines: true,
  title: 'Une leçon de civisme', frSub: 'Huit phrases, une seule voix',
  lines: [
    ln(E(1056)), ln(E(1057)), ln(E(1058)), ln(E(1059)),
    ln(E(1060)), ln(E(1061)), ln(E(1062)), ln(E(1050)),
  ],
  questions: [
    { q: 'Première phrase : combien d’usages pour dire les mêmes droits ?', opts: ['trois', 'deux', 'un seul'], correct: 0, why: 'Droits de l’homme, de la personne, humains. EN: three.' },
    { q: 'Deuxième phrase : de quand date le texte cité ?', opts: ['de 1789', 'de 1982'], correct: 0, why: 'L’article premier de la Déclaration de 1789. EN: 1789.' },
    { q: 'Troisième phrase : quelle est la limite de la liberté ?', opts: ['nuire à autrui', 'la loi du plus fort'], correct: 0, why: 'Faire tout ce qui ne nuit pas à autrui. EN: harming others.' },
    { q: 'Cinquième phrase : qu’ajoute la Charte québécoise ?', opts: ['la dignité, l’honneur et la réputation', 'le droit de vote'], correct: 0, why: 'L’article 4 de la Charte québécoise. EN: dignity, honour, reputation.' },
    { q: 'Sixième phrase : ces droits peuvent-ils être limités ?', opts: ['oui, dans des limites raisonnables', 'non, jamais'], correct: 0, why: 'L’article 1 de la Charte canadienne. EN: yes, reasonably.' },
  ],
  audio: REC('rec-c1-15-droits-ecoute'), say: REFRAME, terms: ['droits'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Lire : une fiche de civisme', TEXTE_A5, [
  { q: 'Quel droit la Déclaration de 1789 dit-elle « un des plus précieux » ?', a: 'La libre communication des pensées et des opinions, à son article 11.' },
  { q: 'Que fait l’article 2 de la Charte canadienne ?', a: 'Il énumère les libertés fondamentales : conscience et religion, pensée, croyance, opinion et expression, réunion pacifique, association.' },
  { q: 'Quel article de la Charte québécoise reconnaît des libertés très proches ?', a: 'L’article 3.' },
  { q: 'Quelle remarque de vocabulaire la fiche fait-elle ?', a: 'On disait droits de l’homme en 1789 ; le Québec parle des droits et libertés de la personne.' },
], 'rec-c1-15-texte-a5', ['droits']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('1789', 'L’article premier de 1789 proclame que les hommes naissent et demeurent…',
    ['libres et égaux en droits', 'libres et responsables', 'égaux en tout'], 0,
    'Le texte exact : libres et égaux en droits. EN: free and equal in rights.'),
  ctl('1982', 'La Charte canadienne des droits et libertés date de…',
    ['1982', '1867', '1975'], 0,
    '1982 ; 1975 est la Charte québécoise ; 1867, la première Loi constitutionnelle. EN: 1982.'),
  ctl('Le verbe', 'Un texte qui inscrit solennellement un droit le…',
    ['consacre', 'sacrifie'], 0,
    'Consacrer un droit. EN: enshrines it.'),
], ['droits']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Les droits et leurs textes',
    opener: {
      line: 'Trois photocopies sur une table de bibliothèque : ici tu apprends les mots des droits fondamentaux et les textes qui les consacrent, de 1789 à 1982. EN: Three photocopies on a library table: here you learn the words of fundamental rights and the texts that enshrine them, from 1789 to 1982.',
      imageRef: 'lessons/notions-politiques/act05.jpg',
    },
    sections: [],
    milestone: 'Tu cites un article de chacun des trois textes, tu dis consacrer un droit, et tu choisis entre droits de l’homme, de la personne et humains. EN: You quote an article from each of the three texts and choose the right usage for human rights.',
    estScreens: 40, restPoints: ['a5-cartes', 'a5-erreurs'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_CONSTRUIRE, A5_ERREURS, A5_ECOUTE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — POUVOIR, PUISSANCE, AUTORITÉ
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a6-lecture', layer: 'core', questionsInModal: true,
  title: 'Qui décide vraiment ?', frSub: 'Lis, et trouve qui a quoi',
  text: LECTURE_COOP,
  glossary: [
    { word: 'coopérative d’habitation', en: 'housing co-op', note: 'Un immeuble que ses locataires gèrent ensemble.' },
    { word: 'devis', en: 'quote, estimate', note: 'Le prix annoncé d’un travail avant de le faire.' },
    { word: 'promoteur', en: 'property developer', note: 'Une entreprise qui construit et vend des logements.' },
  ],
  questions: [
    { q: 'Global : quelle question pose cette chronique ?', a: 'Qui décide vraiment dans la coopérative : celle qui a le pouvoir, ou celui qu’on écoute.' },
    { q: 'Détail : quels pouvoirs Claudette tient-elle des règlements ?', a: 'Convoquer les assemblées, signer les contrats et parler au nom des membres.' },
    { q: 'Inférence : pourquoi écoute-t-on Hervé, qui n’a aucun titre ?', a: 'Parce qu’il connaît le bâtiment depuis trente ans et ne s’est jamais trompé : il a de l’autorité, reconnue par les autres.' },
    { q: 'Inférence : qu’a coûté à Claudette le règlement imposé ?', a: 'Une part de son autorité : elle avait le pouvoir de le faire, mais des membres ont parlé d’abus de pouvoir.' },
    { q: 'Position : que veut dire la chute « on reçoit le pouvoir, on mérite l’autorité » ?', a: 'Le pouvoir vient d’un titre ou d’un vote ; l’autorité se gagne par la compétence et la confiance.' },
  ],
  audio: REC('rec-c1-15-coop'), say: REFRAME, terms: ['pouvoir'],
};

const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a6-table', layer: 'core', sheetId: 'sheet-pouvoir',
  title: 'Six mots pour dire qui décide',
  cols: ['Mot', 'Il désigne', 'Il va avec'],
  rows: [
    { cells: ['le pouvoir', 'la capacité de décider', 'exercer, prendre'], say: fr(E(1063)),
      detail: { title: 'Le pouvoir', body: 'On le prend, on l’exerce, on le perd. Être au pouvoir, c’est gouverner. EN: power.', say: fr(E(1070)) } },
    { cells: ['les pouvoirs publics', 'les autorités qui gouvernent', 'au pluriel'], say: fr(E(1064)),
      detail: { title: 'Les pouvoirs publics', body: 'L’État, les provinces, les villes, dans leur rôle d’administration. EN: the public authorities.', say: fr(E(1075)) } },
    { cells: ['la puissance', 'la force, les moyens', 'un pays, une économie'], say: fr(E(1065)),
      detail: { title: 'La puissance', body: 'Une force qui s’impose : militaire, économique. Une grande puissance. EN: might, a power.', say: fr(E(1065)) } },
    { cells: ['l’autorité', 'un pouvoir reconnu', 'avoir, gagner'], say: fr(E(1073)),
      detail: { title: 'L’autorité', body: 'On l’a quand les autres reconnaissent qu’on peut décider ou conseiller. Elle se gagne et se perd. EN: authority.', say: fr(E(1069)) } },
    { cells: ['les autorités', 'ceux qui administrent', 'municipales, sanitaires'], say: fr(E(1071)),
      detail: { title: 'Les autorités', body: 'Au pluriel : les responsables officiels. Les autorités ont fermé la route. EN: the authorities.', say: fr(E(1071)) } },
    { cells: ['faire autorité', 'être une référence', 'un ouvrage, une experte'], say: fr(E(1072)),
      detail: { title: 'Faire autorité', body: 'Un livre, un rapport ou une personne qu’on cite parce qu’on s’y fie. EN: to be authoritative.', say: fr(E(1066)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['pouvoir'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-construire', layer: 'core', size: 'lg',
  title: 'Décider, ou être écouté', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le pouvoir', [
      it(E(1063), 'l’exercer'),
      it(E(1070), 'être au pouvoir'),
      it(E(1075), 'des pouvoirs, au pluriel'),
      it(ETH(101), 'quand on en abuse'),
    ], chk('« Ce parti est au pouvoir depuis huit ans. » Il…',
      ['gouverne', 'fait autorité'], 0,
      'Être au pouvoir : gouverner. EN: it governs.')),
    grp('L’autorité', [
      it(E(1066), 'une référence'),
      it(E(1072), 'un livre qu’on cite'),
      it(E(1073), 'pas besoin de crier'),
      it(ETH(243), 'quand on en abuse'),
    ], chk('Une enseignante qui a de l’autorité…',
      ['est écoutée sans avoir à crier', 'impose ses règles par la force'], 0,
      'L’autorité se reconnaît ; elle n’a pas besoin de contrainte. EN: she is listened to.')),
    ctl('Autoritaire', '« Un style de direction très autoritaire » est…',
      ['un reproche', 'un éloge'], 0,
      'Autoritaire : qui impose sans écouter. Avoir de l’autorité, c’est un éloge. EN: a reproach.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['pouvoir'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a6-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Pouvoir, puissance, autorité',
    body: 'On est au pouvoir, on exerce le pouvoir. Un pays fort est une puissance. Une personne écoutée a de l’autorité ; un livre de référence fait autorité ; autoritaire est un reproche. EN: power, might, authority, and authoritarian as a reproach.',
  },
  cards: [
    trap(E(1070), 'au pouvoir', 'Ce parti est en pouvoir depuis huit ans.', 'Gouverner : être au pouvoir. EN: au pouvoir.'),
    trap(E(1065), 'puissance', 'Ce pays est devenu un grand pouvoir économique.', 'Un pays fort et riche est une puissance : une grande puissance. Le pouvoir économique existe, mais c’est une capacité d’influence, pas un pays. EN: puissance.'),
    trap(E(1074), 'autoritaire', 'On lui reproche un style de direction très autoritatif.', 'Autoritatif n’est pas un mot français courant : autoritaire. EN: autoritaire.'),
    trap(E(1072), 'faire autorité', 'Son livre sur la question est autoritaire.', 'Un livre de référence fait autorité ; autoritaire se dit d’une personne qui impose. EN: fait autorité.'),
    trap(E(1069), 'pouvoir et puissance', 'Elle a la puissance de signer, mais pas l’autorité pour convaincre.', 'Signer est un pouvoir donné par un titre, pas une force : le pouvoir de signer. EN: le pouvoir.'),
    trap(E(1071), 'les autorités', 'Les puissances locales ont fermé la route par précaution.', 'Les responsables officiels sont les autorités ; la puissance est une force. EN: les autorités.'),
  ],
  drill: [
    { promptSay: 'Ce parti est … pouvoir depuis huit ans.', opts: ['au', 'en'], correct: 0 },
    { promptSay: 'Ce pays est devenu une grande … économique.', opts: ['puissance', 'autorité'], correct: 0 },
    { promptSay: 'Son rapport fait … dans le domaine.', opts: ['autorité', 'pouvoir'], correct: 0 },
    { promptSay: 'Les … ont fermé le pont pendant la tempête.', opts: ['autorités', 'puissances'], correct: 0 },
    { promptSay: 'Un chef qui impose sans écouter est … .', opts: ['autoritaire', 'puissant'], correct: 0 },
    { promptSay: 'Le règlement lui donne le … de signer les contrats.', opts: ['pouvoir', 'puissance'], correct: 0 },
    { promptSay: 'Il a perdu son … : plus personne ne l’écoute.', opts: ['autorité', 'puissance'], correct: 0 },
    { promptSay: 'La ville réclame plus de … en matière de logement.', opts: ['pouvoirs', 'puissances'], correct: 0 },
  ],
  steps: STEPS('Pouvoir, puissance, autorité', 'Six phrases à redresser'),
  audio: REC('rec-c1-15-piege-pouvoir'), say: REFRAME, terms: ['pouvoir'],
};

const A6_HACKS: Sec<'hacks'> = {
  type: 'hacks', id: 'a6-hacks', layer: 'core', title: 'Trois tests quand tu hésites',
  hacks: [
    { hack: 'Le test du titre : enlève le titre de la personne. Si on l’écoute encore, elle a de l’autorité.',
      why: 'Hervé n’a aucun titre, et la coopérative le suit. EN: take the title away; if people still listen, it is authority.' },
    { hack: 'Le test de la force : si la chose s’impose par les moyens, l’argent ou les armes, dis puissance.',
      why: 'Un promoteur face à une petite coopérative : une question de puissance. EN: means and force are might.' },
    { hack: 'Devant autoritaire dans un texte, cherche qui parle : c’est presque toujours un reproche.',
      why: 'Le mot juge déjà. Pour décrire sans juger, dis plutôt qui décide et comment. EN: autoritaire judges.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['pouvoir'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Lire : une offre d’emploi', TEXTE_A6, [
  { q: 'Quel pouvoir le ou la chef d’équipe aura-t-il ?', a: 'Répartir le travail et valider les réparations.' },
  { q: 'Comment Navibus veut-elle que cette personne gagne l’autorité ?', a: 'Par sa compétence, plutôt qu’en l’imposant par son titre.' },
  { q: 'Que pense l’entreprise du style autoritaire ?', a: 'Qu’il n’a pas sa place chez elle : le mot est un reproche.' },
  { q: 'Qui sont les autorités portuaires, et que veut dire « fait autorité » ?', a: 'Les responsables officiels du port, pour les inspections ; le manuel fait autorité parce qu’il sert de référence dans le secteur.' },
], 'rec-c1-15-texte-a6', ['pouvoir']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le pouvoir', 'Signer les contrats au nom de la coopérative, c’est…',
    ['un pouvoir', 'une puissance', 'une autorité'], 0,
    'Une capacité de décider donnée par les règlements. EN: a power.'),
  ctl('L’autorité', 'Hervé n’a aucun titre, et on l’écoute. Il a…',
    ['de l’autorité', 'du pouvoir'], 0,
    'Une autorité reconnue par les autres. EN: authority.'),
  ctl('La puissance', 'Un pays riche et armé est…',
    ['une puissance', 'une autorité'], 0,
    'La force et les moyens : une puissance. EN: a power.'),
], ['pouvoir']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Pouvoir, puissance, autorité',
    opener: {
      line: 'Une présidente qui signe, un voisin qu’on écoute : ici tu sépares le pouvoir qu’on exerce, la puissance qui s’impose et l’autorité qui se reconnaît. EN: A president who signs, a neighbour people listen to: here you separate power, might and authority.',
      imageRef: 'lessons/notions-politiques/act06.jpg',
    },
    sections: [],
    milestone: 'Tu dis qui a le pouvoir, qui a l’autorité et qui a la puissance, et tu entends le reproche dans autoritaire. EN: You say who has power, authority and might, and hear the reproach in autoritaire.',
    estScreens: 40, restPoints: ['a6-table', 'a6-piege'],
  },
  sections: [A6_LECTURE, A6_TABLE, A6_CONSTRUIRE, A6_PIEGE, A6_HACKS, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LES CONTRE-POUVOIRS
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a7-histoire', layer: 'core',
  title: 'Au bulletin du quartier', frSub: 'Qui fait contrepoids',
  setting: 'Un jeudi soir, dans le local du bulletin La Voix des Hautes-Rives. Théo relit l’éditorial ; Lina, bénévole depuis un mois, se demande à quoi sert un si petit journal.',
  bubbles: [
    { from: 'narrator', fr: 'Des piles de bulletins attendent sur la table. Lina en plie un.', en: 'Piles of newsletters wait on the table. Lina folds one.' },
    { from: 'user', fr: 'Franchement, quatre pages photocopiées, ça ne change rien.', en: 'Frankly, four photocopied pages change nothing.' },
    { from: 'coach', fr: 'C’est nous qui avons révélé la vente du terrain de la caserne. Sans nous, personne n’aurait posé de questions.', en: 'We are the ones who revealed the sale of the fire station land. Without us, no one would have asked questions.', warn: 'Un contre-pouvoir' },
    { from: 'coach', fr: fr(E(1082)), en: en(E(1082)), warn: 'Le quatrième pouvoir' },
    { from: 'user', fr: 'Mais nous ne votons pas les lois, nous ne jugeons personne.', en: 'But we do not pass laws, we do not judge anyone.' },
    { from: 'coach', fr: 'Justement : le législatif, l’exécutif et le judiciaire ont leurs rôles. Nous, nous les regardons.', en: 'Exactly: the legislature, the executive and the judiciary have their roles. We watch them.', warn: 'Trois pouvoirs' },
    { from: 'coach', fr: fr(E(1081)), en: en(E(1081)), warn: 'La règle' },
    { from: 'coach', fr: fr(E(1087)), en: en(E(1087)), warn: 'Un témoin' },
  ],
  closing: { fr: 'Un contre-pouvoir ne gouverne pas : il empêche un pouvoir de n’avoir aucune limite.', en: 'A counter-power does not govern: it stops a power from having no limit.' },
  audio: REC('rec-c1-15-bulletin'), say: REFRAME, terms: ['contrepoids'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a7-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-pouvoir',
  title: 'Trois pouvoirs et leurs garde-fous', frSub: 'Répartir, surveiller, corriger',
  hint: 'Quatre cartes. Les deux premières répartissent le pouvoir ; les deux dernières le limitent.',
  audio: REC('rec-c1-15-contrepouvoir-cartes'), say: REFRAME, terms: ['contrepoids'],
  cards: [
    { head: 'Trois mains', label: 'la séparation des pouvoirs', fr: fr(E(1076)), sub: rsOf(E(1076)),
      body: 'Faire les lois, les appliquer, juger : trois rôles, trois institutions. La Déclaration de 1789 en fait une condition de toute constitution (article 16). EN: separation of powers.' },
    { head: 'Les juges', label: 'le judiciaire', fr: fr(E(1077)), sub: rsOf(E(1077)),
      body: 'Les tribunaux. Une affaire en relève quand un juge tranche. Judiciaire concerne la justice ; juridique, le droit en général (OQLF). EN: the judiciary.' },
    { head: 'Ceux qui font contrepoids', label: 'le contre-pouvoir', fr: fr(E(1078)), sub: rsOf(E(1078)),
      body: 'Un pouvoir qui s’organise face à une autorité établie : presse, syndicats, opposition, associations. EN: a counter-power.' },
    { head: 'La rambarde', label: 'un garde-fou', fr: fr(E(1079)), sub: rsOf(E(1079)),
      body: 'Une règle ou une institution qui empêche les excès : un comité indépendant, un contrôle, une limite de mandat. EN: a safeguard.' },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-construire', layer: 'core', size: 'lg',
  title: 'Gouverner, ou faire contrepoids', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Les trois pouvoirs', [
      it('fr.b2.gouvernement.026', 'le mot du B2'),
      it('fr.b2.gouvernement.029', 'les tribunaux'),
      it(E(1084), 'le judiciaire corrige'),
      it(E(1085), 'le législatif contrôle'),
    ], chk('« Un tribunal peut annuler une décision du gouvernement. » Ici, le judiciaire…',
      ['limite l’exécutif', 'fait les lois'], 0,
      'Un pouvoir en limite un autre : c’est la séparation des pouvoirs. EN: it checks the executive.')),
    grp('Ceux qui font contrepoids', [
      it(E(1083), 'les syndicats'),
      it(ETH(102), 'une personne qui révèle'),
      it(ETH(257), 'protéger une source'),
      it(VAL2(114), 'des institutions impartiales'),
    ], chk('Un lanceur d’alerte, une presse libre, des syndicats sont…',
      ['des contre-pouvoirs', 'des pouvoirs publics'], 0,
      'Ils ne gouvernent pas : ils surveillent et contestent. EN: counter-powers.')),
    ctl('Le poids du mot', 'Appeler la presse « le quatrième pouvoir », c’est…',
      ['une image : elle pèse sans gouverner', 'un titre officiel de la Constitution'], 0,
      'Une expression courante, pas un statut juridique. EN: a figure of speech.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['contrepoids'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a7-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre façons de dire les pouvoirs de travers',
  errors: [
    { wrong: 'Le pouvoir juridique peut annuler une décision du gouvernement.', right: 'Le pouvoir judiciaire peut annuler une décision du gouvernement.',
      why: 'Normal : juridique et judiciaire se ressemblent. Mais les tribunaux sont le pouvoir judiciaire ; juridique se dit du droit en général. EN: judiciaire.' },
    { wrong: 'On appelle parfois la presse le quatrième état.', right: fr(E(1082)),
      why: 'Normal : the fourth estate se calque mot à mot. En français, on parle du quatrième pouvoir. EN: le quatrième pouvoir.' },
    { wrong: 'Ce comité indépendant sert comme garde-fou.', right: fr(E(1088)),
      why: 'Normal : to serve as se calque en servir comme. Avec un nom de rôle, on dit servir de. EN: servir de.' },
    { wrong: 'La séparation de pouvoirs protège les citoyens.', right: 'La séparation des pouvoirs protège les citoyens.',
      why: 'Normal : separation of powers n’a pas d’article. En français, l’expression est figée avec des : les trois pouvoirs connus. EN: des pouvoirs.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['contrepoids'],
};

const A7_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a7-dictee', layer: 'core',
  title: 'Écris le contre-pouvoir que tu entends',
  itemIds: [...dicteeFor(7), ETH(265)],
  audio: AUDIO, say: REFRAME, terms: ['contrepoids'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Lire : un éditorial de quartier', TEXTE_A7, [
  { q: 'Quels contre-pouvoirs l’éditorial nomme-t-il ?', a: 'Le conseil de quartier, les associations et le bulletin lui-même.' },
  { q: 'Qu’ont-ils fait dans l’affaire de la caserne ?', a: 'Ils ont demandé des explications quand l’arrondissement a voulu vendre le terrain sans appel d’offres.' },
  { q: 'De quel texte vient la phrase citée, et que dit-elle ?', a: 'De l’article 16 de la Déclaration de 1789 : sans garantie des droits ni séparation des pouvoirs, il n’y a pas de constitution.' },
  { q: 'Pourquoi l’auteur dit-il « un quartier n’est pas une société entière » ?', a: 'Pour nuancer la comparaison : la citation vise un État, mais l’idée de garde-fou vaut aussi à petite échelle.' },
], 'rec-c1-15-texte-a7', ['contrepoids']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Les trois', 'Faire les lois, les appliquer, juger : c’est…',
    ['la séparation des pouvoirs', 'la reddition de comptes'], 0,
    'Trois pouvoirs, trois institutions. EN: the separation of powers.'),
  ctl('Le judiciaire', 'Les tribunaux forment le pouvoir…',
    ['judiciaire', 'juridique', 'exécutif'], 0,
    'Judiciaire : la justice et ses tribunaux. EN: judicial.'),
  ctl('Le contrepoids', 'Un contre-pouvoir sert à…',
    ['limiter un pouvoir établi', 'remplacer le gouvernement'], 0,
    'Il surveille et conteste ; il ne gouverne pas. EN: to check power.'),
], ['contrepoids']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Les contre-pouvoirs',
    opener: {
      line: 'Quatre pages photocopiées et un terrain qui ne sera pas vendu en douce : ici tu nommes les pouvoirs et ce qui les empêche de n’avoir aucune limite. EN: Four photocopied pages and a plot of land not sold on the quiet: here you name the powers and what keeps them limited.',
      imageRef: 'lessons/notions-politiques/act07.jpg',
    },
    sections: [],
    milestone: 'Tu nommes les trois pouvoirs, tu dis judiciaire et juridique à bon escient, et tu reconnais un contre-pouvoir et un garde-fou. EN: You name the three powers, use judiciaire and juridique correctly, and recognise a counter-power and a safeguard.',
    estScreens: 38, restPoints: ['a7-construire', 'a7-dictee'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_CONSTRUIRE, A7_ERREURS, A7_DICTEE, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LÉGAL ET LÉGITIME
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a8-ecoute', layer: 'core', hideLines: true,
  title: 'Un débat à la cafétéria', frSub: 'Huit phrases entendues',
  lines: [
    ln(E(1096)), ln(E(1097)), ln(E(1098)), ln(E(1099)),
    ln(E(1100)), ln(E(1101)), ln(ETH(7)), ln(ETH(22)),
  ],
  questions: [
    { q: 'Première phrase : ce que la loi permet est-il toujours juste ?', opts: ['pas toujours', 'toujours'], correct: 0, why: 'Légal n’est pas toujours légitime. EN: not always.' },
    { q: 'Deuxième phrase : la manifestation était-elle autorisée ?', opts: ['non', 'oui'], correct: 0, why: 'Non autorisée, mais la colère est jugée légitime. EN: no.' },
    { q: 'Troisième phrase : qu’est-ce qui est contesté ?', opts: ['la légitimité du gouvernement', 'sa légalité'], correct: 0, why: 'Il est légal ; sa légitimité est contestée. EN: its legitimacy.' },
    { q: 'Quatrième phrase : de quel genre de problème parle-t-on ?', opts: ['un problème de droit', 'un problème de morale'], correct: 0, why: 'Juridique : relatif au droit. EN: a legal one.' },
    { q: 'Cinquième phrase : à quel âge peut-on voter au Canada ?', opts: ['dix-huit ans', 'seize ans', 'vingt et un ans'], correct: 0, why: 'L’âge légal du vote. EN: eighteen.' },
  ],
  audio: REC('rec-c1-15-legal-ecoute'), say: REFRAME, terms: ['legal'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a8-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-legal',
  title: 'La loi, la raison, le droit', frSub: 'Légal, légitime, juridique',
  hint: 'Quatre cartes. La dernière règle un faux ami de l’anglais.',
  audio: REC('rec-c1-15-legal-cartes'), say: REFRAME, terms: ['legal'],
  cards: [
    { head: 'Ce que la loi permet', label: 'légal', fr: fr(E(1089)), sub: rsOf(E(1089)),
      body: 'Légal : conforme à la loi ou défini par elle. On le vérifie dans les textes. EN: lawful.' },
    { head: 'Ce qui est fondé', label: 'légitime', fr: fr(E(1090)), sub: rsOf(E(1090)),
      body: 'Légitime : juste, fondé, défendable. On en discute au nom de la raison ou de la morale. EN: legitimate.' },
    { head: 'Une expression figée', label: 'la légitime défense', fr: fr(E(1091)), sub: rsOf(E(1091)),
      body: 'Se défendre contre une attaque, dans les limites que fixe la loi. Ici, légitime ne se remplace pas par légal. EN: self-defence.' },
    { head: 'Le droit, pas la loi', label: 'juridique', fr: fr(E(1092)), sub: rsOf(E(1092)),
      body: 'Pour legal advice ou a legal problem, dis juridique. L’OQLF note qu’on abuse de légal sous l’influence de l’anglais. EN: juridique for « legal ».' },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-construire', layer: 'core', size: 'lg',
  title: 'La loi, ou la raison', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Ce que dit la loi', [
      it(E(1089), 'une décision légale'),
      it(E(1093), 'la famille'),
      it(E(1100), 'l’âge légal'),
      it(ETH(7), 'permis, et pourtant'),
    ], chk('« Au Canada, on peut voter à dix-huit ans. » Cet âge est…',
      ['légal', 'légitime'], 0,
      'Fixé par la loi : légal. EN: the legal age.')),
    grp('Ce qui est juste ou fondé', [
      it(E(1090), 'une revendication'),
      it(E(1094), 'la famille'),
      it(E(1097), 'une colère fondée'),
      it(B227_EN_DROIT, `${Cap(JURIDIQUE_REF)} : être en droit de`),
    ], chk('« Leur colère est légitime. » La phrase dit que cette colère est…',
      ['fondée, défendable', 'autorisée par la loi'], 0,
      'Légitime : fondé. La loi n’autorise pas une colère. EN: well-founded.')),
    ctl('Les deux à la fois', 'Une loi votée dans les règles, que beaucoup jugent injuste, est…',
      ['légale, et contestée dans sa légitimité', 'illégale'], 0,
      'Légale par la procédure ; sa légitimité, elle, se discute. EN: lawful, legitimacy disputed.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['legal'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a8-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'La loi, la raison, le droit',
    body: 'Légal : ce que la loi permet ou fixe. Légitime : ce qui est juste ou fondé. Juridique : ce qui touche au droit. La légitime défense est figée ; l’âge légal, c’est la loi qui le fixe. EN: lawful, legitimate, legal (about law), one fixed phrase.',
  },
  cards: [
    trap(E(1092), 'juridique', 'un conseiller légal', 'Un conseiller en droit : un conseiller juridique (OQLF). EN: juridique.'),
    trap(E(1099), 'un problème juridique', 'Ce contrat pose un problème légal, pas moral.', 'Un problème de droit est juridique ; légal veut dire conforme à la loi. EN: juridique.'),
    trap(E(1091), 'la légitime défense', 'agir en état de légale défense', 'L’expression est figée : légitime défense. EN: légitime.'),
    trap(E(1097), 'une colère légitime', 'Leur colère est légale, même si la manifestation n’était pas autorisée.', 'Une colère n’est pas autorisée par la loi : elle est fondée, légitime. EN: légitime.'),
    trap(E(1095), 'les deux définitions', 'Légal dit ce qui est juste ; légitime dit ce que la loi permet.', 'C’est l’inverse : légal regarde la loi, légitime regarde la raison. EN: the reverse.'),
    trap(E(1100), 'l’âge légal', 'Au Canada, on peut voter à dix-huit ans : c’est l’âge légitime.', 'Un âge fixé par la loi : l’âge légal. EN: légal.'),
  ],
  drill: [
    { promptSay: 'Avant de signer, demande un avis … .', opts: ['juridique', 'légal'], correct: 0 },
    { promptSay: 'Au Canada, l’âge … pour voter est de dix-huit ans.', opts: ['légal', 'légitime'], correct: 0 },
    { promptSay: 'Il a agi en état de … défense.', opts: ['légitime', 'légale'], correct: 0 },
    { promptSay: 'Leur demande est … : elle est fondée.', opts: ['légitime', 'légale'], correct: 0 },
    { promptSay: 'Le gouvernement est légal ; c’est sa … qui est contestée.', opts: ['légitimité', 'légalité'], correct: 0 },
    { promptSay: 'Ce contrat pose un problème … , pas moral.', opts: ['juridique', 'légitime'], correct: 0 },
    { promptSay: 'Ce qui est … n’est pas toujours légitime.', opts: ['légal', 'juridique'], correct: 0 },
    { promptSay: 'Les tribunaux forment le pouvoir … .', opts: ['judiciaire', 'légal'], correct: 0 },
  ],
  steps: STEPS('La loi, la raison, le droit', 'Six phrases à redresser'),
  audio: REC('rec-c1-15-piege-legal'), say: REFRAME, terms: ['legal'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a8-exemples', layer: 'core',
  title: 'Cinq phrases entre la loi et la raison', frSub: 'Du B2 et de cette leçon',
  examples: [
    ex(E(1096), 'la règle en une phrase'),
    ex(E(1098), 'légal, et contesté'),
    ex(E(1101), 'voté dans les règles, et pourtant'),
    ex(ETH(22), 'la loi l’autorise, la morale hésite'),
    ex(ETH(307), 'la légitimité se débat'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['legal'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Lire : un échange sur un forum', TEXTE_A8, [
  { q: 'Pourquoi Léa dit-elle que l’occupation était illégale ?', a: 'Parce que le règlement de l’université l’interdit.' },
  { q: 'Sur quoi Samir fonde-t-il la légitimité de leur demande ?', a: 'La cafétéria ferme à 14 h, et beaucoup d’étudiants n’ont pas d’autre endroit pour manger.' },
  { q: 'Quelle distinction Léa ajoute-t-elle ?', a: 'Une revendication peut être légitime sans que tous les moyens employés le soient.' },
  { q: 'Que propose Samir à la fin, et pourquoi dit-il juridique ?', a: 'Demander un avis juridique, c’est-à-dire l’avis de quelqu’un qui connaît le droit, avant la prochaine action.' },
], 'rec-c1-15-texte-a8', ['legal']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La loi', 'Conforme à la loi se dit…',
    ['légal', 'légitime'], 0,
    'Légal regarde la loi. EN: lawful.'),
  ctl('La raison', 'Une demande fondée, qu’on peut défendre, est…',
    ['légitime', 'juridique', 'légale'], 0,
    'Légitime regarde la raison. EN: legitimate.'),
  ctl('Le droit', 'Legal advice se dit…',
    ['un avis juridique', 'un avis légal'], 0,
    'Juridique : relatif au droit (OQLF). EN: juridique.'),
], ['legal']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Légal et légitime',
    opener: {
      line: 'Un hall occupé et une cafétéria fermée : ici tu sépares ce que la loi permet de ce que la raison peut défendre. EN: An occupied hall and a closed cafeteria: here you separate what the law allows from what reason can defend.',
      imageRef: 'lessons/notions-politiques/act08.jpg',
    },
    sections: [],
    milestone: 'Tu distingues légal et légitime dans les deux sens, et tu dis juridique pour ce qui touche au droit. EN: You separate lawful from legitimate both ways, and say juridique for matters of law.',
    estScreens: 40, restPoints: ['a8-cartes', 'a8-piege'],
  },
  sections: [A8_ECOUTE, A8_CARTES, A8_CONSTRUIRE, A8_PIEGE, A8_EXEMPLES, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — L’ÉTAT DE DROIT ET L’IMPUNITÉ
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a9-histoire', layer: 'core',
  title: 'L’affaire des permis', frSub: 'Personne au-dessus des lois',
  setting: 'Au café du coin, Malik lit la dépêche de Radio Hautes-Rives sur le directeur du service des permis. Aminata le rejoint.',
  bubbles: [
    { from: 'narrator', fr: 'Malik tourne son téléphone vers Aminata. La dépêche tient en dix lignes.', en: 'Malik turns his phone towards Aminata. The dispatch is ten lines long.' },
    { from: 'user', fr: 'Six ans de passe-droits, et personne n’avait rien vu.', en: 'Six years of special favours, and no one had noticed a thing.' },
    { from: 'coach', fr: fr(E(1110)), en: en(E(1110)), warn: 'Impuni' },
    { from: 'user', fr: 'Et ce sont toujours les mêmes qui s’en sortent.', en: 'And it is always the same people who get away with it.' },
    { from: 'coach', fr: fr(E(1114)), en: en(E(1114)), warn: 'Deux poids, deux mesures' },
    { from: 'coach', fr: 'Mais cette fois, une employée a parlé, et un juge va trancher. Le directeur aussi aura droit à un procès équitable.', en: 'But this time an employee spoke up, and a judge will decide. The director too will be entitled to a fair trial.', warn: 'Un procès équitable' },
    { from: 'coach', fr: fr(E(1108)), en: en(E(1108)), warn: 'La règle' },
    { from: 'coach', fr: fr(E(1113)), en: en(E(1113)), warn: 'Rendre compte' },
  ],
  closing: { fr: 'L’impunité fait deux poids, deux mesures ; l’État de droit soumet tout le monde à la même loi.', en: 'Impunity creates double standards; the rule of law subjects everyone to the same law.' },
  audio: REC('rec-c1-15-permis'), say: REFRAME, terms: ['etatdroit'],
};

const A9_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a9-table', layer: 'core', sheetId: 'sheet-legal',
  title: 'Six mots de l’État de droit',
  cols: ['Expression', 'Elle dit', 'Registre'],
  rows: [
    { cells: ['l’État de droit', 'le pouvoir soumis à la loi', 'courant, majuscule'], say: fr(E(1109)),
      detail: { title: 'L’État de droit', body: 'Un État où les gouvernants obéissent à la loi et où des juges indépendants peuvent les sanctionner. État prend la majuscule. EN: the rule of law.', say: fr(E(1108)) } },
    { cells: ['la primauté du droit', 'la loi au-dessus de tous', 'soutenu, Canada'], say: fr(E(1102)),
      detail: { title: 'La primauté du droit', body: 'L’expression du préambule de la Charte canadienne. Elle dit la même idée que l’État de droit. EN: the rule of law.', say: fr(E(1109)) } },
    { cells: ['nul n’est au-dessus des lois', 'pas d’exception', 'soutenu'], say: fr(E(1109)),
      detail: { title: 'Nul n’est au-dessus des lois', body: 'Nul : personne, en registre soutenu. La formule vise d’abord les puissants. EN: no one is above the law.', say: fr(E(1102)) } },
    { cells: ['l’impunité', 'rester sans sanction', 'un reproche'], say: fr(E(1111)),
      detail: { title: 'L’impunité', body: 'Le fait de rester impuni. On la dénonce, on lutte contre elle. EN: impunity.', say: fr(E(1110)) } },
    { cells: ['l’indépendance de la justice', 'des juges sans ordres', 'courant'], say: fr(E(1105)),
      detail: { title: 'L’indépendance de la justice', body: 'Les juges décident sans recevoir d’ordres du gouvernement ni de personne. EN: judicial independence.', say: fr(E(1112)) } },
    { cells: ['la reddition de comptes', 'rendre compte de son action', 'administratif, Québec'], say: fr(E(1106)),
      detail: { title: 'La reddition de comptes', body: 'Le terme de l’administration québécoise (OQLF). Ailleurs, on dit souvent rendre des comptes. EN: accountability.', say: fr(E(1113)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['etatdroit'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-construire', layer: 'core', size: 'lg',
  title: 'La loi pour tous, ou pour certains', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('L’État de droit', [
      it(VAL2(90), 'le mot du B2'),
      it(VAL2(89), 'le mot canadien'),
      it(E(1109), 'la formule'),
      it('fr.b2.rp-societe.016', 'rendre compte, au Québec'),
    ], chk('Dans un État de droit, les gouvernants…',
      ['obéissent eux aussi à la loi', 'font la loi sans la subir'], 0,
      'Le pouvoir aussi est soumis à la loi. EN: they obey the law too.')),
    grp('L’impunité', [
      it(ETH(107), 'le mot du B2'),
      it(E(1103), 'rester impuni'),
      it(E(1110), 'des années sans sanction'),
      it(ETH(219), 'ceux qui échappent à tout'),
    ], chk('« Ces fraudes sont restées impunies. » Leurs auteurs…',
      ['n’ont pas été sanctionnés', 'ont été acquittés après un procès'], 0,
      'Impuni : sans sanction, souvent sans procès. EN: they were not punished.')),
    ctl('Rendre compte', 'Des élus qui expliquent publiquement leurs décisions…',
      ['rendent compte de leur action', 'se font justice'], 0,
      'Rendre compte de : la reddition de comptes. EN: they are accountable.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['etatdroit'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a9-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre erreurs autour de la loi',
  errors: [
    { wrong: 'Ces fraudes sont restées impunes pendant des années.', right: fr(E(1110)),
      why: 'Normal : on pense à punir, puni, et à l’anglais unpunished. Mais l’adjectif est impuni : impunies au féminin pluriel. EN: impunies.' },
    { wrong: 'Dans un état de droit, nul n’est au-dessus des lois.', right: fr(E(1109)),
      why: 'Normal : un état, c’est une situation. Mais ici, c’est l’État, l’institution : majuscule. EN: État, capital É.' },
    { wrong: 'Les élus doivent rendre compte pour leurs décisions.', right: fr(E(1113)),
      why: 'Normal : to account for se calque en pour. En français : rendre compte de. EN: de.' },
    { wrong: 'Ils luttent contre l’impunibilité des puissants.', right: 'Ils luttent contre l’impunité des puissants.',
      why: 'Normal : impunible ressemble à punissable. Mais le nom est l’impunité, sans -bilité. EN: l’impunité.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['etatdroit'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a9-ecoute', layer: 'core', hideLines: true,
  title: 'Une chronique judiciaire', frSub: 'Huit phrases, deux voix',
  lines: [
    ln(E(1109)), ln(E(1110)), ln(E(1111)), ln(E(1112)),
    ln(E(1113)), ln(E(1114)), ln(ETH(219)), ln(ETH(275)),
  ],
  questions: [
    { q: 'Première phrase : quelqu’un échappe-t-il à la loi dans un État de droit ?', opts: ['non, personne', 'oui, les gouvernants'], correct: 0, why: 'Nul n’est au-dessus des lois. EN: no one.' },
    { q: 'Deuxième phrase : combien de temps les fraudes sont-elles restées sans sanction ?', opts: ['des années', 'quelques jours'], correct: 0, why: 'Impunies pendant des années. EN: for years.' },
    { q: 'Troisième phrase : que nourrit l’impunité des puissants ?', opts: ['la méfiance des citoyens', 'la confiance des citoyens'], correct: 0, why: 'Elle nourrit la méfiance. EN: distrust.' },
    { q: 'Quatrième phrase : à quoi chacun a-t-il droit ?', opts: ['à un procès équitable', 'à un avocat gratuit'], correct: 0, why: 'Un procès équitable. EN: a fair trial.' },
    { q: 'Sixième phrase : qu’appelle-t-on deux poids, deux mesures ?', opts: ['une règle qui change selon la personne', 'une loi trop sévère'], correct: 0, why: 'La même règle n’est pas appliquée à tous. EN: double standards.' },
  ],
  audio: REC('rec-c1-15-etatdroit-ecoute'), say: REFRAME, terms: ['etatdroit'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Lire : une dépêche de radio', TEXTE_A9, [
  { q: 'Que reproche-t-on au directeur du service des permis ?', a: 'D’avoir accordé des passe-droits à des proches pendant six ans.' },
  { q: 'Qui a révélé l’affaire, et comment est-elle protégée ?', a: 'Une employée, aujourd’hui protégée comme lanceuse d’alerte.' },
  { q: 'Selon l’association, quel est le vrai problème ?', a: 'L’impunité, plus encore que la fraude : une règle qui change selon la personne.' },
  { q: 'Quelle phrase rappelle l’État de droit, même pour l’accusé ?', a: '« Le directeur, qui conteste les faits, aura droit à un procès équitable. »' },
], 'rec-c1-15-texte-a9', ['etatdroit']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('L’État de droit', 'Dans un État de droit, le pouvoir…',
    ['obéit aussi à la loi', 'est au-dessus des lois'], 0,
    'Personne n’est au-dessus des lois. EN: obeys the law too.'),
  ctl('L’impunité', 'Une faute qui reste sans sanction reste…',
    ['impunie', 'impune', 'imprévue'], 0,
    'L’adjectif est impuni. EN: unpunished.'),
  ctl('Les mesures', 'Une règle qui change selon la personne : c’est…',
    ['deux poids, deux mesures', 'la primauté du droit'], 0,
    'L’expression critique les inégalités de traitement. EN: double standards.'),
], ['etatdroit']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'L’État de droit et l’impunité',
    opener: {
      line: 'Six ans de passe-droits et une employée qui parle : ici tu apprends les mots qui disent que la loi vaut pour tous, et ce qui arrive quand elle ne vaut plus. EN: Six years of favours and an employee who speaks up: here you learn the words that say the law applies to all, and what happens when it does not.',
      imageRef: 'lessons/notions-politiques/act09.jpg',
    },
    sections: [],
    milestone: 'Tu définis l’État de droit, tu nommes l’impunité et ses remèdes, et tu dis rendre compte de sans calque. EN: You define the rule of law, name impunity and its remedies, and say rendre compte de without a calque.',
    estScreens: 38, restPoints: ['a9-table', 'a9-erreurs'],
  },
  sections: [A9_HISTOIRE, A9_TABLE, A9_CONSTRUIRE, A9_ERREURS, A9_ECOUTE, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — L’IDENTITÉ
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a10-lecture', layer: 'core', questionsInModal: true,
  title: 'D’où viens-tu, vraiment ?', frSub: 'Lis, et repère les sens d’identité',
  text: LECTURE_IDENTITE,
  glossary: [
    { word: 'liégeois', en: 'from Liège', note: 'De Liège, grande ville de Wallonie, en Belgique.' },
    { word: 'ne se décrète pas', en: 'cannot be decreed', note: 'On ne peut pas l’imposer par une décision.' },
    { word: 'racines', en: 'roots', note: 'Au sens figuré : les origines d’une personne ou d’une famille.' },
  ],
  questions: [
    { q: 'Global : de quoi parle ce portrait ?', a: 'De Nadia, Bruxelloise d’origine congolaise et liégeoise, et de la façon dont son identité s’est construite.' },
    { q: 'Détail : pourquoi a-t-elle d’abord cru qu’il fallait choisir ?', a: 'Au bureau, on la voyait comme Congolaise ; à Kinshasa, comme Belge.' },
    { q: 'Détail : quels mots emploie-t-elle pour son identité aujourd’hui ?', a: 'Une identité plurielle : bruxelloise, belge, africaine, francophone, un peu néerlandophone.' },
    { q: 'Inférence : quelle différence fait-elle entre « racines » et « repli identitaire » ?', a: 'Le premier mot lui semble curieux et neutre ; le second sonne comme un reproche adressé à son quartier.' },
    { q: 'Position : que veut dire sa conclusion ?', a: 'Certaines appartenances nous sont données, mais c’est nous qui choisissons celles que nous faisons vivre.' },
  ],
  audio: REC('rec-c1-15-identite'), say: REFRAME, terms: ['identite'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a10-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-societe',
  title: 'L’identité, au sens abstrait', frSub: 'Rien à voir avec tes papiers',
  hint: 'Quatre cartes. Aucune ne parle de la pièce d’identité.',
  audio: REC('rec-c1-15-identite-cartes'), say: REFRAME, terms: ['identite'],
  cards: [
    { head: 'Ce par quoi on se reconnaît', label: 'l’identité culturelle', fr: fr(E(1115)), sub: rsOf(E(1115)),
      body: 'Une langue, une mémoire, des habitudes partagées. Elle peut être celle d’une personne ou d’un groupe. EN: cultural identity.' },
    { head: 'Plusieurs à la fois', label: 'une identité plurielle', fr: fr(E(1116)), sub: rsOf(E(1116)),
      body: 'On peut être montréalaise, haïtienne et francophone sans choisir. L’identité se compose. EN: a multiple identity.' },
    { head: 'Se sentir membre', label: 'l’appartenance', fr: fr(E(1117)), sub: rsOf(E(1117)),
      body: 'Le sentiment d’appartenance à un groupe, un quartier, un pays. Il se gagne plus qu’il ne se décrète. EN: the sense of belonging.' },
    { head: 'Se reconnaître dans', label: 's’identifier à', fr: fr(E(1118)), sub: rsOf(E(1118)),
      body: 'S’identifier à un personnage, à un groupe : s’y reconnaître. Avec à, toujours. EN: to identify with.' },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-construire', layer: 'core', size: 'lg',
  title: 'Qui tu es, ce par quoi tu te reconnais', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('L’identité, au sens abstrait', [
      it(E(1120), 'la règle'),
      it(E(1115), 'culturelle'),
      it(E(1127), 'construite entre deux langues'),
      it('fr.b2.rp-identite.022', 'plusieurs à la fois'),
    ], chk('« Son identité s’est construite entre deux langues. » Il s’agit…',
      ['de ce par quoi elle se reconnaît', 'de ses papiers d’identité'], 0,
      'L’identité au sens abstrait : elle se construit. EN: who she feels she is.')),
    grp('Appartenir, s’identifier', [
      it('fr.b1.immigration-et-citoyennete.072', 'le mot du B1'),
      it(E(1125), 'un quartier soudé'),
      it(E(1122), 's’identifier à'),
      it(E(1126), 'des appartenances données'),
    ], chk('« Je m’identifie à ce personnage. » Je…',
      ['me reconnais en lui', 'montre mes papiers'], 0,
      'S’identifier à : se reconnaître dans. EN: I identify with him.')),
    ctl('Identitaire', '« Repli identitaire », dans un éditorial, est le plus souvent…',
      ['un reproche', 'une description neutre'], 0,
      'Le mot accuse déjà. Pour décrire, dis ce que le groupe fait. EN: a reproach.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['identite'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a10-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre façons de parler d’identité de travers',
  errors: [
    { wrong: 'Je m’identifie avec ce personnage plus qu’avec son auteur.', right: fr(E(1122)),
      why: 'Normal : to identify with se calque en avec. En français, on s’identifie à quelqu’un. EN: à.' },
    { wrong: 'Son identité s’est construit entre deux langues.', right: fr(E(1127)),
      why: 'Normal : on entend le même son. Mais avec se, le participe s’accorde ici avec identité : construite. EN: construite.' },
    { wrong: 'Ce par quoi elle se reconnaît, c’est son identité culturale.', right: 'Ce par quoi elle se reconnaît, c’est son identité culturelle.',
      why: 'Normal : cultural appelle culturale. Mais l’adjectif français est culturel, culturelle. EN: culturelle.' },
    { wrong: 'L’expression « identité nationale » a le même sens pour tout le monde.', right: fr(E(1123)),
      why: 'Normal : le mot paraît évident. Mais selon qui l’emploie, il désigne une culture commune ou sert un programme : dis dans quel sens. EN: its meaning depends on who uses it.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['identite', 'poids'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a10-focus', layer: 'core', sheetId: 'sheet-societe',
  title: 'Quatre gestes devant un mot chargé',
  points: [
    'Dis dans quel sens tu prends le mot : identité culturelle, ou administrative. EN: say which sense you take.',
    'Dis qui emploie le mot, et à propos de qui : repli identitaire vient de ses adversaires. EN: say who uses it, about whom.',
    'Rapporte la position sans la reprendre : « pour ses partisans », « selon ses critiques ». EN: report without adopting.',
    'Si tu prends position, annonce-le : « pour ma part », « à mon sens ». EN: flag your own view.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['identite', 'poids'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Lire : une annonce de quartier', TEXTE_A10, [
  { q: 'Quel sens du mot identité l’atelier écarte-t-il ?', a: 'Le sens administratif : la carte nationale d’identité, qui relève de l’administration.' },
  { q: 'Quel sens retient-il ?', a: 'Le sens large : les langues, les lieux, les groupes auxquels on se sent attaché.' },
  { q: 'Quelles langues l’annonce cite-t-elle ?', a: 'Le wolof, le français, le sérère et l’anglais.' },
  { q: 'Que veut dire « sans que personne ne vous dise laquelle est la bonne » ?', a: 'Que l’identité plurielle est acceptée : on ne demande pas de choisir une seule appartenance.' },
], 'rec-c1-15-texte-a10', ['identite']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Les deux sens', '« L’identité culturelle » parle…',
    ['de ce par quoi on se reconnaît', 'de ses papiers'], 0,
    'Le sens abstrait. EN: who you feel you are.'),
  ctl('La préposition', 'To identify with someone se dit s’identifier…',
    ['à quelqu’un', 'avec quelqu’un', 'pour quelqu’un'], 0,
    'S’identifier à. EN: à.'),
  ctl('Le poids', 'Devant « repli identitaire », tu dis d’abord…',
    ['qui emploie le mot, et à propos de qui', 'que c’est vrai'], 0,
    'Un mot chargé se présente comme un usage. EN: who uses it.'),
], ['identite']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'L’identité',
    opener: {
      line: 'Une Bruxelloise qu’on renvoie toujours ailleurs : ici tu apprends l’identité au sens abstrait, et le poids des mots qui l’entourent. EN: A woman from Brussels always sent somewhere else: here you learn identity in the abstract sense, and the weight of the words around it.',
      imageRef: 'lessons/notions-politiques/act10.jpg',
    },
    sections: [],
    milestone: 'Tu parles d’identité culturelle et plurielle, d’appartenance et d’identification, et tu présentes un mot chargé comme un usage. EN: You talk about cultural and multiple identity and belonging, and present a loaded word as a usage.',
    estScreens: 40, restPoints: ['a10-construire', 'a10-focus'],
  },
  sections: [A10_LECTURE, A10_CARTES, A10_CONSTRUIRE, A10_ERREURS, A10_FOCUS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — VIVRE ENSEMBLE
 *  Uses, not positions. The history of laïcité is c1.13's (cited).
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a11-histoire', layer: 'core',
  title: 'L’atelier citoyen', frSub: 'Deux modèles, deux mots chargés',
  setting: 'Mardi soir, à la bibliothèque Marie-Galante. Hélène anime l’atelier citoyen ; Aminata prépare une présentation pour le conseil de quartier.',
  bubbles: [
    { from: 'narrator', fr: 'Quatre mots sont écrits au tableau. Aminata les recopie dans son carnet.', en: 'Four words are written on the board. Aminata copies them into her notebook.' },
    { from: 'user', fr: 'Multiculturalisme et interculturalisme, pour moi, c’est la même chose avec deux préfixes.', en: 'Multiculturalism and interculturalism, to me, are the same thing with two prefixes.' },
    { from: 'coach', fr: fr(E(1134)), en: en(E(1134)), warn: 'Deux modèles' },
    { from: 'coach', fr: 'Le Canada a fait du multiculturalisme une politique officielle ; le Québec défend plutôt l’interculturalisme.', en: 'Canada made multiculturalism an official policy; Quebec instead defends interculturalism.', warn: 'Deux gouvernements' },
    { from: 'user', fr: 'Et la laïcité, je dois dire si je suis pour ou contre.', en: 'And secularism, I have to say whether I am for or against.' },
    { from: 'coach', fr: fr(E(1137)), en: en(E(1137)), warn: 'Ses partisans' },
    { from: 'coach', fr: fr(E(1138)), en: en(E(1138)), warn: 'Ses critiques' },
    { from: 'coach', fr: fr(E(1139)), en: en(E(1139)), warn: 'Un mot pour les autres' },
  ],
  closing: { fr: 'Devant un mot chargé, dis qui l’emploie, et à propos de qui ; ta position vient après.', en: 'Faced with a loaded word, say who uses it and about whom; your position comes after.' },
  audio: REC('rec-c1-15-atelier'), say: REFRAME, terms: ['modeles', 'poids'],
};

const A11_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a11-table', layer: 'core', sheetId: 'sheet-societe',
  title: 'Six mots du vivre-ensemble',
  cols: ['Mot', 'Il désigne', 'Son poids'],
  rows: [
    { cells: ['le multiculturalisme', 'la coexistence des cultures', 'politique officielle au Canada'], say: fr(E(1135)),
      detail: { title: 'Le multiculturalisme', body: 'Au Canada, une loi de 1988 et l’article 27 de la Charte. Ses partisans y voient la reconnaissance de chacun ; ses critiques, un risque de juxtaposition. EN: multiculturalism.', say: fr(E(1129)) } },
    { cells: ['l’interculturalisme', 'des échanges autour d’une culture commune', 'le modèle défendu au Québec'], say: fr(E(1136)),
      detail: { title: 'L’interculturalisme', body: 'Une culture commune, de langue française, qui dialogue avec les apports des nouveaux arrivants. EN: interculturalism.', say: fr(E(1128)) } },
    { cells: ['un accommodement raisonnable', 'adapter une règle commune', 'notion juridique'], say: fr(E(1130)),
      detail: { title: 'L’accommodement raisonnable', body: 'Une obligation née du droit à l’égalité : adapter une règle pour éviter une discrimination, sauf contrainte excessive. EN: reasonable accommodation.', say: fr(E(1130)) } },
    { cells: ['la laïcité', 'la neutralité de l’État envers les religions', 'chargé, et défendu'], say: fr(E(1131)),
      detail: { title: 'La laïcité', body: 'La République française se dit « laïque » à l’article premier de sa Constitution. L’histoire du mot, en France et au Québec, est celle de la leçon 13 du C1. EN: secularism.', say: fr(E(1137)) } },
    { cells: ['le communautarisme', 'le repli d’un groupe', 'presque toujours un reproche'], say: fr(E(1133)),
      detail: { title: 'Le communautarisme', body: 'Un mot qu’on applique aux autres. Pour décrire sans accuser : vie associative, réseaux d’entraide. EN: communitarianism, pejorative.', say: fr(E(1139)) } },
    { cells: ['s’intégrer, s’assimiler', 'participer, ou se fondre', 'deux projets différents'], say: fr(E(1140)),
      detail: { title: 'Intégration, assimilation', body: 'S’intégrer : participer à une société en gardant une part de soi. S’assimiler : se fondre jusqu’à ne plus se distinguer. EN: integration against assimilation.', say: fr(E(1140)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['modeles'],
};

const A11_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-construire', layer: 'core', size: 'lg',
  title: 'Deux modèles, des mots communs', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Deux modèles', [
      it(VAL2(85), 'le mot du B2'),
      it(E(1128), 'le modèle québécois'),
      it(E(1135), 'une politique officielle'),
      it(E(1136), 'le choix du Québec'),
    ], chk('Le modèle qui insiste sur les échanges autour d’une culture commune, c’est…',
      ['l’interculturalisme', 'le multiculturalisme'], 0,
      'Inter- : entre les cultures, autour d’un socle commun. EN: interculturalism.')),
    grp('Des mots du vivre-ensemble', [
      it(VAL2(81), 'le mot du B2'),
      it(VAL2(82), 'ce qui tient un quartier'),
      it(VAL2(86), 'la variété'),
      it(VAL2(87), 'faire une place à chacun'),
    ], chk('Ces mots sont plutôt…',
      ['plutôt positifs', 'des reproches'], 0,
      'Peu de gens sont contre la cohésion sociale : le désaccord porte sur les moyens. Vivre-ensemble est parfois raillé comme un mot creux, mais ce n’est pas un reproche fait à quelqu’un. EN: mostly positive.')),
    ctl('Le mot chargé', 'Quand tu rapportes le mot « communautarisme », tu précises…',
      ['qui l’emploie, et à propos de qui', 'qu’il est neutre'], 0,
      'Ceux qu’il désigne l’emploient rarement : c’est un mot pour les autres. EN: who uses it.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['modeles'],
};

const A11_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a11-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le mot juste, et qui le dit',
    body: 'Évite les calques (un accommodement, la laïcité), ne confonds pas les deux modèles, et attribue toujours une position : pour ses partisans, selon ses critiques. EN: avoid calques, keep the two models apart, attribute every position.',
  },
  cards: [
    trap(E(1130), 'accommodement', 'demander une accommodation raisonnable', 'Reasonable accommodation : un accommodement raisonnable. EN: accommodement.'),
    trap(E(1131), 'la laïcité', 'la sécularité de l’État', 'Secularism, au sens politique : la laïcité. Sécularité existe, mais dit le caractère séculier d’une chose, pas la neutralité de l’État. EN: laïcité.'),
    trap(E(1136), 'le modèle québécois', 'Le Québec défend plutôt un modèle de multiculturalisme.', 'Le multiculturalisme est la politique canadienne ; le Québec défend l’interculturalisme. EN: interculturalisme.'),
    trap(E(1137), 'attribuer', 'Pour tout le monde, la laïcité protège la liberté de conscience.', 'C’est la position de ses partisans, pas un fait admis de tous. EN: attribute it.'),
    trap(E(1139), 'un mot pour les autres', 'Ceux que le mot communautarisme désigne l’emploient volontiers.', 'C’est l’inverse : ceux qu’il vise l’emploient rarement. EN: rarely.'),
    trap(E(1140), 'intégrer, assimiler', 'S’intégrer, c’est s’assimiler : on demande de tout effacer.', 'Les deux mots disent deux projets différents : participer, ou se fondre. EN: not the same.'),
  ],
  drill: [
    { promptSay: 'Un … raisonnable adapte une règle commune.', opts: ['accommodement', 'accommodation'], correct: 0 },
    { promptSay: 'La neutralité de l’État envers les religions, c’est la … .', opts: ['laïcité', 'sécularité'], correct: 0 },
    { promptSay: 'Au Canada, le … est une politique officielle.', opts: ['multiculturalisme', 'communautarisme'], correct: 0 },
    { promptSay: 'Le Québec défend plutôt l’… .', opts: ['interculturalisme', 'assimilation'], correct: 0 },
    { promptSay: 'Pour ses …, la laïcité protège la liberté de conscience.', opts: ['partisans', 'critiques'], correct: 0 },
    { promptSay: 'Le mot communautarisme est presque toujours un … .', opts: ['reproche', 'éloge'], correct: 0 },
    { promptSay: 'S’intégrer, ce n’est pas s’… .', opts: ['assimiler', 'identifier'], correct: 0 },
    { promptSay: 'Les bénévoles renforcent la … sociale du quartier.', opts: ['cohésion', 'parité'], correct: 0 },
  ],
  steps: STEPS('Le mot juste, et qui le dit', 'Six phrases à redresser'),
  audio: REC('rec-c1-15-piege-modeles'), say: REFRAME, terms: ['modeles'],
};

const A11_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a11-exemples', layer: 'core',
  title: 'Cinq phrases qui rapportent sans trancher', frSub: 'Des usages, pas des verdicts',
  examples: [
    ex(E(1138), 'la position des critiques, attribuée'),
    ex(E(1139), 'un mot qu’on applique aux autres'),
    ex(E(1133), 'le mot sert d’accusation'),
    ex(E(1129), 'un fait : une loi de 1988'),
    ex(E(1140), 'deux mots, deux projets'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['modeles', 'poids'],
};

const A11_TEXTE = dansUnTexte('a11-texte', 'Lire : un glossaire citoyen', TEXTE_A11, [
  { q: 'Depuis quand le multiculturalisme est-il une politique officielle au Canada, d’après le glossaire ?', a: 'Depuis 1971 ; une loi l’a inscrit dans le droit en 1988.' },
  { q: 'Qu’est-ce qui distingue l’interculturalisme ?', a: 'Il insiste sur les échanges autour d’une culture commune de langue française.' },
  { q: 'Comment le glossaire présente-t-il la laïcité sans prendre parti ?', a: 'Il donne la position de ses partisans et celle de ses critiques, et renvoie l’histoire du mot à une autre séance.' },
  { q: 'Que dit-il du mot communautarisme ?', a: 'Qu’il est surtout employé en France, presque toujours comme un reproche, et rarement par ceux qu’il désigne.' },
], 'rec-c1-15-texte-a11', ['modeles']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Les modèles', 'Le modèle défendu au Québec, c’est…',
    ['l’interculturalisme', 'le multiculturalisme', 'l’assimilation'], 0,
    'Une culture commune qui dialogue. EN: interculturalism.'),
  ctl('Le calque', 'Reasonable accommodation se dit…',
    ['un accommodement raisonnable', 'une accommodation raisonnable'], 0,
    'Accommodement, au masculin. EN: accommodement.'),
  ctl('La position', 'Pour rapporter un avis sur la laïcité sans le reprendre, tu écris…',
    ['« pour ses partisans… »', '« comme chacun sait… »'], 0,
    'Une position attribuée reste une position. EN: attribute it.'),
], ['modeles']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Vivre ensemble',
    opener: {
      line: 'Quatre mots au tableau d’une bibliothèque : ici tu sépares deux modèles du vivre-ensemble et tu rapportes deux mots chargés sans les reprendre. EN: Four words on a library board: here you separate two models of living together and report two loaded words without adopting them.',
      imageRef: 'lessons/notions-politiques/act11.jpg',
    },
    sections: [],
    milestone: 'Tu distingues multiculturalisme et interculturalisme, tu nommes l’accommodement raisonnable, et tu présentes laïcité et communautarisme comme des usages. EN: You tell the two models apart and present loaded words as usages.',
    estScreens: 40, restPoints: ['a11-table', 'a11-piege'],
  },
  sections: [A11_HISTOIRE, A11_TABLE, A11_CONSTRUIRE, A11_PIEGE, A11_EXEMPLES, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TA CONTRIBUTION
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a12-lecture', layer: 'core', questionsInModal: true,
  title: 'La contribution que tu vas imiter', frSub: 'Rosalie répond à Bernard',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'rue piétonne', en: 'pedestrian street', note: 'Une rue fermée aux voitures, réservée aux piétons.' },
    { word: 'mobilité réduite', en: 'reduced mobility', note: 'Les personnes qui se déplacent difficilement : âge, handicap, blessure.' },
  ],
  questions: [
    { q: 'Global : que fait Rosalie dans sa réponse ?', a: 'Elle sépare trois idées que Bernard mélange (la liberté, la légitimité, l’égalité), puis elle donne sa propre position en l’annonçant comme telle.' },
    { q: 'Détail : que répond-elle sur la liberté ?', a: 'Aucune liberté n’est sans limites : la liberté de circuler ne comprend pas le droit de stationner partout.' },
    { q: 'Détail : que dit-elle de la légalité et de la légitimité ?', a: 'La décision est légale, votée dans les règles ; sa légitimité peut se discuter, mais il faut montrer que la consultation a été mal faite.' },
    { q: 'Inférence : pourquoi propose-t-elle de parler d’équité plutôt que d’égalité ?', a: 'Parce que la vraie question est de tenir compte des besoins de certains résidents, comme les personnes âgées, pas de donner la même place à chaque véhicule.' },
    { q: 'Position : comment annonce-t-elle son avis personnel ?', a: 'Par « Pour ma part » et « Voilà où je me situe, et pourquoi » : son avis vient après les distinctions, et il est signalé comme le sien.' },
  ],
  audio: REC('rec-c1-15-modele'), say: REFRAME, terms: ['poids', 'liberte', 'legal'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-societe',
  title: 'Cinq étapes avant d’écrire', frSub: 'Peser les mots, puis prendre position',
  steps: [
    'Remercie, et dis que la lettre pose une vraie question pour le quartier. EN: thank the writer and grant the question.',
    'Repère les mots qui pèsent : chaque fois, quel mot voisin aurait été plus juste ? EN: find the words that carry weight.',
    'Pour chaque confusion : nomme-la, donne la distinction, et ce qu’elle change à l’argument. EN: name it, distinguish, say what it changes.',
    'Rapporte les mots chargés comme des usages : qui les emploie, et à propos de qui. EN: report loaded words as usages.',
    'Termine par ta position, annoncée comme telle, et une proposition pour la prochaine séance. EN: end with your own view, flagged, and a proposal.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['poids'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', sheetId: 'sheet-societe',
  title: 'Quatre phrases que toute bonne contribution contient',
  cases: [
    uc('Tu ouvres avec bienveillance', E(1141)),
    uc('Tu nommes une confusion', E(1142)),
    uc('Tu sépares la loi et la raison', E(1143)),
    uc('Tu annonces ta position', E(1148)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['poids'],
};

const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core',
  title: 'À la radio, la tribune du quartier', frSub: 'Six tours, à voix haute',
  setting: 'Tu appelles l’émission de Radio Hautes-Rives qui débat ce soir de la piscine municipale. Un auditeur vient de dire que réserver des heures aux aînés est illégal et contraire à l’égalité. Pèse ses mots, puis donne ta position.',
  turns: [
    {
      ai: 'Bonsoir, vous êtes en direct. Vous vouliez réagir au sujet de la piscine ?', en: 'Good evening, you are on air. You wanted to respond about the pool?',
      user: 'Oui. Je crois qu’on mélange deux mots : égalité et équité.',
      userEn: 'Yes. I think two words are being mixed up: equality and equity. (Naming the confusion.)',
      alts: [
        { fr: 'Oui, merci. Il me semble qu’un mot pèse trop lourd dans ce débat : égalité.', en: 'Yes, thank you. It seems to me one word weighs too much in this debate: equality. (Naming the word.)' },
        { fr: 'Oui. Avant de parler de la piscine, je voudrais parler des mots.', en: 'Yes. Before talking about the pool, I would like to talk about the words. (Plainer, also right.)' },
      ],
    },
    {
      ai: 'Qu’entendez-vous par là ?', en: 'What do you mean by that?',
      user: 'L’égalité donnerait les mêmes horaires à tous ; l’équité tient compte de ceux qui ne peuvent pas nager dans la cohue.',
      userEn: 'Equality would give everyone the same hours; equity takes into account those who cannot swim in the crowd. (The distinction itself.)',
      alts: [
        { fr: 'La même chose pour tous n’est pas toujours la chose juste pour chacun.', en: 'The same thing for all is not always the fair thing for each. (The same line, shorter.)' },
        { fr: 'Deux matins sur sept réservés, ce n’est pas une inégalité, c’est une mesure d’équité.', en: 'Two mornings out of seven reserved is not an inequality, it is a fairness measure. (A case that shows it.)' },
      ],
    },
    {
      ai: 'L’auditeur disait aussi que c’est illégal, puisque cela le choque.', en: 'The listener also said it is illegal, since it shocks him.',
      user: 'Qu’une mesure le choque ne la rend pas illégale. Ce qu’il conteste, c’est sa légitimité, pas sa légalité.',
      userEn: 'A measure shocking him does not make it illegal. What he disputes is its legitimacy, not its legality. (Légal against légitime.)',
      alts: [
        { fr: 'Illégal veut dire contraire à la loi. Ici, il veut sans doute dire injuste.', en: 'Illegal means against the law. Here he probably means unfair. (Naming the right word.)' },
        { fr: 'Si elle est adoptée dans les règles, elle sera légale, même si on peut la discuter.', en: 'If it is adopted by the rules, it will be lawful, even if it can be debated. (The legal point.)' },
      ],
    },
    {
      ai: 'Il a parlé de communautarisme. Vous reprenez ce mot ?', en: 'He spoke of communautarisme. Do you use that word?',
      user: 'Non. C’est un mot qu’on emploie contre les autres ; ici, il s’agit d’horaires, pas d’un groupe qui se replie.',
      userEn: 'No. It is a word people use against others; here it is about opening hours, not a group withdrawing. (Reporting a loaded word as a usage.)',
      alts: [
        { fr: 'Je le rapporte, je ne le reprends pas : il accuse plus qu’il ne décrit.', en: 'I report it, I do not adopt it: it accuses more than it describes. (The weight named.)' },
        { fr: 'Ceux que ce mot désigne l’emploient rarement. Je parlerais plutôt d’inclusion.', en: 'Those the word refers to rarely use it. I would rather speak of inclusion. (A neutral alternative.)' },
      ],
    },
    {
      ai: 'Et sa liberté de nager quand il veut ?', en: 'And his freedom to swim whenever he wants?',
      user: 'Aucune liberté n’est sans limites : la sienne s’arrête où commence celle des autres usagers.',
      userEn: 'No freedom is without limits: his stops where the other users’ begins. (Freedom and its limits.)',
      alts: [
        { fr: 'Il garde cinq matins sur sept et tous les soirs : sa liberté est restreinte, pas supprimée.', en: 'He keeps five mornings out of seven and every evening: his freedom is restricted, not removed. (Restreindre against supprimer.)' },
        { fr: 'Nager quand on veut n’est pas une liberté publique ; c’est un service municipal.', en: 'Swimming whenever one wants is not a civil liberty; it is a municipal service. (Libertés publiques, precisely.)' },
      ],
    },
    {
      ai: 'Alors, quelle est votre position ?', en: 'So, what is your position?',
      user: 'Pour ma part, je soutiens la mesure, à condition qu’on fasse le point dans six mois.',
      userEn: 'For my part, I support the measure, provided we review it in six months. (Your view, flagged as yours.)',
      alts: [
        { fr: 'À mon sens, la mesure est équitable ; je propose qu’on en débatte à la prochaine séance.', en: 'In my view, the measure is fair; I propose we debate it at the next meeting. (Flagged view plus proposal.)' },
        { fr: 'Je suis plutôt contre, mais pour d’autres raisons : je préférerais des horaires plus larges pour tous.', en: 'I am rather against it, but for other reasons: I would prefer longer hours for everyone. (A different position, argued with the right words: also right.)' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['egalite', 'legal', 'poids'],
};

const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission',
  title: 'Ta contribution au conseil de quartier', frSub: 'Mission écrite',
  brief: `Sur le site du conseil de quartier des Hautes-Rives, un résident, Gérald Poulin, a publié cette lettre ouverte contre une mesure en discussion. Rosalie te demande d’y répondre par une contribution publique, au nom des résidents qui veulent un débat précis. Tu peux soutenir la mesure ou t’y opposer : on juge la justesse de tes mots, pas ton avis. Voici sa lettre : ${LETTRE_GERALD}`,
  briefEn: 'On the Hautes-Rives neighbourhood council website, a resident, Gérald Poulin, has published this open letter against a measure under discussion: reserving the municipal pool for seniors and people with disabilities from 7 to 9 a.m., two mornings a week. He calls it contrary to equality, illegal because it shocks him, a decision by a council with « no authority », « communautarisme », and an attack on his freedom to swim whenever he likes. Rosalie asks you to write a public contribution in reply. You may support or oppose the measure: your words are judged, not your opinion.',
  produce: 'Écris une contribution de 250 à 350 mots, en tutoyant Gérald. Nomme au moins trois mots de sa lettre qui pèsent ou qui sont mal choisis ; pour chacun, donne la distinction et ce qu’elle change à son argument ; rapporte au moins un mot chargé comme un usage ; termine par ta position, annoncée comme telle. Emploie au moins cinq notions de la leçon (par exemple : égalité et équité, légal et légitime, pouvoir et autorité, les libertés et leurs limites, contre-pouvoir, inclusion).',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 380 },
  rubric: {
    criteria: [
      {
        key: 'tache', label: 'Réalisation de la tâche', maxPoints: 3,
        descriptors: [
          '3 : Au moins trois mots de la lettre sont repris et pesés ; pour chacun, la distinction est donnée et son effet sur l’argument est montré ; un mot chargé est rapporté comme un usage ; la position finale est annoncée comme telle. Entre 250 et 350 mots.',
          '2 : Deux mots seulement sont vraiment traités, ou la position finale manque, ou la longueur sort un peu des limites.',
          '1 : La contribution dit que Gérald a tort ou raison sans examiner ses mots, ou le texte est beaucoup trop court.',
        ],
      },
      {
        key: 'precision', label: 'Précision du vocabulaire politique', maxPoints: 3,
        descriptors: [
          '3 : Au moins cinq notions de la leçon sont employées avec justesse (égalité et équité, légal et légitime, pouvoir et autorité, liberté et libertés publiques, restreindre et porter atteinte, contre-pouvoir, inclusion, accommodement), chacune au bon endroit.',
          '2 : Les notions sont là, mais l’une est employée de travers, ou la contribution reprend une confusion qu’elle dénonce.',
          '1 : Le vocabulaire reste vague (« c’est injuste », « c’est faux ») ou plusieurs notions sont confondues.',
        ],
      },
      {
        key: 'structure', label: 'Structure de la contribution', maxPoints: 2,
        descriptors: [
          '2 : La contribution avance dans l’ordre : une ouverture, un mot par paragraphe (le nommer, le peser, dire ce que cela change), puis la position et une proposition, avec des liens clairs.',
          '1 : Les mots se mêlent, ou les définitions s’alignent sans dire ce qu’elles changent à l’argument.',
        ],
      },
      {
        key: 'correction', label: 'Correction', maxPoints: 2,
        descriptors: [
          '2 : Les constructions sont justes : porter atteinte à, être libre de, rendre compte de, s’identifier à, se faire justice, au pouvoir, un accommodement.',
          '1 : Des erreurs de construction ou des calques (porter atteinte sur, un conseiller légal, rendre compte pour, une accommodation) gênent parfois la lecture.',
        ],
      },
      {
        key: 'registre', label: 'Registre et ton', maxPoints: 2,
        descriptors: [
          '2 : Un registre soutenu sans pédanterie, le tutoiement de Gérald, un ton respectueux : la contribution discute ses mots, jamais sa personne, et attribue chaque position.',
          '1 : La contribution se moque, reprend un mot chargé à son compte sans le signaler, ou passe au style administratif.',
        ],
      },
    ],
  },
  scaffold: [
    'Merci d’avoir lancé ce débat :',
    'Tu emploies le mot',
    'Or,',
    'Que la mesure soit légale',
    'Pour ses partisans,',
    'Ce mot est surtout employé',
    'Pour ma part,',
    'Je propose que',
  ],
  modelAnswer: 'Cher Gérald,\n\nmerci d’avoir lancé ce débat : il nous concerne tous. Ta lettre mêle pourtant plusieurs mots qui ne disent pas ce que tu veux leur faire dire, et je voudrais les peser un à un.\n\nD’abord, l’égalité. Donner les mêmes horaires à tout le monde serait égal ; ce ne serait pas forcément équitable. Une personne en fauteuil ou un nageur de quatre-vingts ans ne peut pas profiter du bassin aux heures de pointe. Deux matins réservés sur sept, c’est une mesure d’équité, pas une atteinte à l’égalité des droits : tu gardes toutes les autres heures.\n\nEnsuite, tu écris que la mesure est illégale parce qu’elle te choque. Or une décision peut choquer et rester légale. Tu peux contester sa légitimité, mais il faudrait montrer qu’elle est mal fondée, pas seulement qu’elle te déplaît.\n\nTu dis aussi que le conseil n’a aucune autorité. Il a en réalité le pouvoir que lui donne l’arrondissement de proposer des mesures ; son autorité, elle, dépend de la qualité de ses décisions, et donc de débats comme celui-ci. Le conseil sert même de contre-pouvoir face à la ville.\n\nQuant au mot communautarisme, je le rapporte sans le reprendre : il est le plus souvent employé contre les autres, et il accuse plus qu’il ne décrit. Ici, il ne s’agit pas d’un groupe qui se replie, mais d’horaires. Pour ses partisans, la mesure relève de l’inclusion.\n\nEnfin, ta liberté. Aucune liberté n’est sans limites : la tienne est restreinte deux matins par semaine, elle n’est pas supprimée, et nager quand on veut n’est pas une liberté publique.\n\nPour ma part, je soutiens la mesure, à condition qu’on fasse le point dans six mois. Je propose que nous en débattions à la prochaine séance, chiffres de fréquentation à l’appui.\n\nAu plaisir de te lire,\nNoura, résidente de la rue des Érables\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : cinq mots pesés (égalité, illégale, autorité, communautarisme, liberté), chacun avec ce qu’il change ; un mot chargé rapporté ; position annoncée.\n2. Précision : égal, équitable, équité, légale, légitimité, pouvoir, autorité, contre-pouvoir, inclusion, restreinte, liberté publique.\n3. Structure : une ouverture, un mot par paragraphe, une position et une proposition.\n4. Correction : une atteinte à, rester légale, relever de, sans le reprendre.\n5. Registre : tu, respectueux, positions attribuées.',
  modelAnswerEn: 'Dear Gérald, thank you for starting this debate: it concerns us all. Your letter, however, mixes several words that do not say what you want them to say, and I would like to weigh them one by one. First, equality. Giving everyone the same hours would be equal; it would not necessarily be fair. A person in a wheelchair or an eighty-year-old swimmer cannot use the pool at peak times. Two reserved mornings out of seven is a fairness measure, not an attack on equal rights: you keep all the other hours. Next, you write that the measure is illegal because it shocks you. Yet a decision can shock and remain lawful. You can dispute its legitimacy, but you would have to show it is ill-founded, not only that you dislike it. You also say the council has no authority. In fact it has the power, given by the borough, to propose measures; its authority depends on the quality of its decisions, and so on debates like this one. The council even acts as a counterweight to the city. As for the word communautarisme, I report it without adopting it: it is mostly used against others, and it accuses more than it describes. Here it is not about a group withdrawing, but about opening hours. For its supporters, the measure is a matter of inclusion. Finally, your freedom. No freedom is without limits: yours is restricted two mornings a week, it is not removed, and swimming whenever one wants is not a civil liberty. For my part, I support the measure, provided we review it in six months. I propose we debate it at the next meeting, with attendance figures to hand. Looking forward to reading you, Noura, a resident of rue des Érables. The marker’s notes (not counted): five words weighed, each with what it changes; one loaded word reported; the position flagged.',
  watchFor: [
    { pattern: 'Says Gérald is wrong (or right) without weighing any of his words.', criterion: 'tache', feedback: 'Reprends ses mots un à un : « Tu emploies le mot… », puis dis quel mot voisin serait plus juste.', ref: 'a12-plan' },
    { pattern: 'Treats égalité and équité as synonyms, or calls the reserved hours an inequality without discussing fairness.', criterion: 'precision', feedback: 'Les mêmes horaires pour tous seraient égaux ; tenir compte des besoins, c’est l’équité.', ref: 'a2-cartes' },
    { pattern: 'Accepts « illégal » for something merely shocking, or never separates légal and légitime.', criterion: 'precision', feedback: 'Choquer ne rend pas illégal : il peut contester la légitimité de la mesure, pas sa légalité.', ref: 'a8-cartes' },
    { pattern: 'Confuses pouvoir and autorité when answering « le conseil n’a aucune autorité ».', criterion: 'precision', feedback: 'Le conseil a un pouvoir donné par l’arrondissement ; son autorité dépend de la qualité de ses décisions.', ref: 'a6-table' },
    { pattern: 'Repeats « communautarisme » as a neutral description, or adopts it without saying who uses it.', criterion: 'registre', feedback: 'Rapporte le mot comme un usage : qui l’emploie, à propos de qui. Ici, il s’agit d’horaires.', ref: 'a11-table' },
    { pattern: 'Treats freedom as unlimited, or confuses restricting a freedom with suppressing it, or calls swimming hours a civil liberty.', criterion: 'precision', feedback: 'Aucune liberté n’est sans limites : sa liberté est restreinte, pas supprimée.', ref: 'a4-cartes' },
    { pattern: 'Porter atteinte sur, rendre compte pour, s’identifier avec, un conseiller légal, une accommodation raisonnable.', criterion: 'correction', feedback: 'Porter atteinte à, rendre compte de, s’identifier à, un conseiller juridique, un accommodement.', ref: 'a4-piege' },
    { pattern: 'Lists definitions without saying what each distinction changes to Gérald’s argument.', criterion: 'structure', feedback: 'Pour chaque mot, dis ce que la distinction change : l’argument tombe, ou devient plus faible.', ref: 'a10-focus' },
    { pattern: 'No final position, or a position not flagged as the writer’s own (« c’est évident », « tout le monde sait »).', criterion: 'tache', feedback: 'Termine par ta position, annoncée comme telle : « Pour ma part… », « À mon sens… ».', ref: 'a12-usages' },
    { pattern: 'Mocking or lecturing tone, attacks on the person, or vous and administrative style to a neighbour who wrote in the first person.', criterion: 'registre', feedback: 'Discute ses mots, jamais sa personne : remercie, tutoie, et reste précis.', ref: 'a12-lecture' },
    { pattern: 'Invents legal facts (« la Charte interdit cette mesure », « c’est contraire à l’article… ») without a source in the brief.', criterion: 'precision', feedback: 'Ne cite pas un article que tu ne peux pas vérifier : la distinction suffit.', ref: 'a5-cartes' },
  ],
  graderNotes: [
    'Count the words of the body only: the greeting, the closing formula and the signature do not count. 250 to 350 with 10% tolerance (225 to 385) before criterion « tache » loses a point. responseSpec allows 380.',
    'Gérald’s letter carries at least six weighable words: égalité (for équité), illégale (for illégitime or injuste), autorité (against pouvoir), communautarisme (a loaded word used as an insult), liberté (taken as unlimited), and the slippery-slope « n’importe quoi » (the word of lesson 23 in B2: accept it as one of the three). Any three, well treated, satisfy « tache ».',
    'NEVER judge the learner’s position on the measure. Support, opposition and a mixed view are equally acceptable; the model answer supports it, the scenario’s third alternative opposes it for other reasons. Never add a personal opinion on the measure, on secularism, on multiculturalism or on any political model to the feedback.',
    'Accept « juste » / « injuste » for the fairness point when the learner also shows the équité distinction; do not require the noun « équité ».',
    'Accept « contre-pouvoir » and « contrepouvoir »; accept « droits de la personne », « droits de l’homme » and « droits humains » alike.',
    'A learner who cites a Charter article must cite it correctly (corpus §A.7: Charte canadienne art. 1 limits, art. 2 freedoms, art. 15 equality; Charte québécoise art. 3 freedoms, art. 10 equality). A wrong article costs a point in « precision »; no article is required.',
    'The learner need not quote anyone; a quotation from a real politician is neither required nor rewarded.',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 27 du B2 »), never by id.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['poids', 'egalite', 'legal'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core',
  title: 'Dis les mots du débat à voix haute', frSub: 'Un sens, un poids',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['poids'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-societe',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'égalité, équité', v: 'la même part, la part juste', say: fr(E(1016)),
      detail: { title: 'Égalité ou équité', body: 'L’égalité donne la même chose à tous ; l’équité tient compte des besoins. À égalité : un score nul. EN: same share or fair share.', say: fr(E(1018)) } },
    { k: 'la justice', v: 'une valeur, une institution', say: fr(E(1029)),
      detail: { title: 'Les sens de justice', body: 'Réclamer justice ; saisir la justice ; rendre la justice ; rendre justice à ; se faire justice. EN: value and institution.', say: fr(E(1031)) } },
    { k: 'la liberté, les libertés', v: 'une valeur, des droits', say: fr(E(1042)),
      detail: { title: 'Les libertés et leurs textes', body: 'Les libertés publiques, restreintes ou atteintes ; 1789, 1975, 1982 ; droits de l’homme, de la personne, humains. EN: liberties and the texts.', say: fr(E(1057)) } },
    { k: 'pouvoir, autorité', v: 'décider, être écouté', say: fr(E(1068)),
      detail: { title: 'Pouvoir et contre-pouvoirs', body: 'Le pouvoir s’exerce, la puissance s’impose, l’autorité se reconnaît ; un contre-pouvoir limite un pouvoir établi. EN: power, might, authority, checks.', say: fr(E(1081)) } },
    { k: 'légal, légitime', v: 'la loi, la raison', say: fr(E(1095)),
      detail: { title: 'La loi et l’État de droit', body: 'Légal : conforme à la loi ; légitime : fondé ; juridique : relatif au droit. Dans un État de droit, nul n’est au-dessus des lois. EN: law, reason, rule of law.', say: fr(E(1109)) } },
    { k: 'identité, modèles', v: 'un sens, un poids', say: fr(E(1120)),
      detail: { title: 'Les mots chargés', body: 'L’identité se construit ; multiculturalisme et interculturalisme sont deux modèles ; laïcité et communautarisme se rapportent comme des usages. EN: identity, models, loaded words.', say: fr(E(1134)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['poids'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu sais peser les mots du débat public : égalité et équité, la justice qu’on réclame et celle qu’on saisit, la liberté et les libertés publiques, les droits et les textes qui les consacrent, le pouvoir, la puissance et l’autorité, les contre-pouvoirs, le légal et le légitime, l’État de droit et l’impunité, l’identité au sens abstrait, les modèles du vivre-ensemble. Le piège qui reste, c’est le mot chargé repris sans le voir : « communautarisme », « repli identitaire », « illégal » pour « injuste ». Avant d’envoyer une contribution, relis-la en soulignant chaque mot politique : pour chacun, as-tu dit dans quel sens tu le prends, et qui d’autre l’emploie ? EN: Before sending, underline each political word and check its meaning and its weight.',
  stats: [
    { k: 'Le juste', v: 'égalité, équité, justice' },
    { k: 'Les droits', v: 'libertés, textes, limites' },
    { k: 'Le pouvoir', v: 'autorité, contrepoids, légitimité' },
    { k: 'Les mots chargés', v: 'identité, laïcité, communautarisme' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 2 to 11, a round that
 *  recycles b2.27, b1.33 and c1.12 (named in each question), and a « comme à
 *  l’examen » round. `fold()` strips accents, commas, apostrophes, hyphens
 *  and SPACES, so every typed answer turns on a word or a preposition, and
 *  every equally correct answer is listed in `accept`. No item turns on a
 *  hyphen, a capital or an accent. */

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
      id: 'r2-egalite', label: 'Égalité et équité', targets: ['egalite-equite'],
      questions: [
        mc('Une répartition qui tient compte des besoins de chacun est…', ['équitable', 'égalitaire', 'à parts égales'], 0, 'Selon les besoins : équitable. EN: fair.', 'a2-cartes'),
        mc('« Tous les citoyens sont égaux devant la loi. » La phrase parle…', ['de l’égalité des droits', 'de l’équité des résultats'], 0, 'Les mêmes droits pour tous. EN: equal rights.', 'a2-construire'),
        mc('Six voix contre six : le vote s’est terminé…', ['à égalité', 'équitablement', 'à l’équité'], 0, 'Un score nul : à égalité. EN: in a tie.', 'a2-piege'),
        mc('Le Collectif de parents demande une part de base identique, plus une part selon les besoins. C’est…', ['une formule qui mêle égalité et équité', 'une égalité stricte'], 0, 'Une base égale, puis de l’équité. EN: a mixed formula.', 'a2-texte'),
        tI(MOT, 'Malik voulait partager la somme à parts ___ . (the same for each)', 'égales', 'À parts égales : la même part. EN: equal.', 'a2-cartes'),
        tI(MOT, 'L’égalité des ___ ne garantit pas l’égalité des résultats. (opportunities)', 'chances', 'L’égalité des chances. EN: chances.', 'a2-piege'),
        eS('Le comité répartit la somme également, selon le nombre de familles.', fr(E(1000)), 'Selon les familles, les parts diffèrent : équitablement. EN: équitablement.', 'a2-piege'),
        lC('Écoute. Cette mesure donne-t-elle la même chose à tous ?', fr(E(1019)), ['non, plus à ceux qui en ont besoin', 'oui, la même chose à tous'], 0, 'Une mesure d’équité. EN: no.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-justice', label: 'La justice', targets: ['justice-confondue'],
      questions: [
        mc('« Elle a saisi la justice. » Ici, la justice, c’est…', ['l’institution, les tribunaux', 'la valeur'], 0, 'Avec l’article, après saisir : l’institution. EN: the courts.', 'a3-table'),
        mc('Un film qui reconnaît enfin le travail de ces ouvrières leur…', ['rend justice', 'rend la justice', 'demande justice'], 0, 'Rendre justice à : reconnaître un mérite. EN: does them justice.', 'a3-table'),
        mc('Ce sont les juges qui…', ['rendent la justice', 'rendent justice à la justice', 'se font justice'], 0, 'Rendre la justice : juger. EN: administer justice.', 'a3-construire'),
        mc('« Ta réponse est juste. » Ici, juste veut dire…', ['exacte', 'équitable'], 0, 'Pour une réponse, juste veut dire exacte. EN: correct.', 'a3-construire'),
        tI(MOT, 'Cette décision a laissé un profond sentiment d’___ . (le contraire de justice)', 'injustice', 'L’injustice, pas l’injustesse. EN: injustice.', 'a3-erreurs'),
        tI(MOT, 'Personne n’a le droit de se ___ justice soi-même. (verbe)', 'faire', 'Se faire justice : se venger sans tribunal. EN: faire.', 'a3-erreurs'),
        eS('Le film rend enfin la justice à ces ouvrières oubliées.', fr(E(1031)), 'Pour un mérite : rendre justice à, sans article. EN: rendre justice.', 'a3-erreurs'),
        lC('Écoute. Que réclament les familles ?', fr(E(1030)), ['ce qui leur est dû', 'un avocat', 'une indemnité fixe'], 0, 'Réclamer justice : la valeur. EN: what is owed.', 'a3-histoire'),
      ],
    },
    {
      id: 'r4-libertes', label: 'La liberté et les libertés', targets: ['libertes-confondues'],
      questions: [
        mc('S’exprimer, se réunir, s’associer, croire : ce sont…', ['des libertés publiques', 'des libertés privées', 'une liberté unique'], 0, 'Des droits précis, au pluriel. EN: civil liberties.', 'a4-cartes'),
        mc('Dans la Charte canadienne, freedom of peaceful assembly se dit…', ['la liberté de réunion pacifique', 'la liberté d’assemblée pacifique'], 0, 'Le mot des chartes : article 2 c) de la Charte canadienne, article 3 de la Charte québécoise. EN: réunion.', 'a4-piege'),
        mc('Une mesure limite une liberté pour un motif annoncé. Le mot le plus neutre est…', ['restreindre', 'porter atteinte à'], 0, 'Porter atteinte accuse déjà. EN: restrict.', 'a4-construire'),
        mc('D’après la fondation genevoise, le règlement toucherait…', ['la liberté de réunion et la liberté d’association', 'la liberté de conscience'], 0, 'Réunions dans les parcs, associations. EN: assembly and association.', 'a4-texte'),
        tI(MOT, 'Ce règlement porte atteinte ___ la liberté d’association.', 'à', 'Porter atteinte à. EN: à.', 'a4-piege'),
        tI(MOT, 'Tu es libre ___ ne pas être d’accord.', 'de', 'Être libre de + infinitif. EN: de.', 'a4-piege'),
        eS('Cette mesure restricte la liberté de circulation des habitants.', fr(E(1045)), 'Le verbe est restreindre : elle restreint. EN: restreint.', 'a4-piege', ['Cette mesure limite la liberté de circulation des habitants.']),
        lC('Écoute. La personne a-t-elle demandé la permission avant d’écrire ?', fr(E(1047)), ['non, elle a osé le faire', 'oui'], 0, 'Prendre la liberté de : oser, sans demander. EN: no.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-droits', label: 'Les droits et leurs textes', targets: ['textes-confondus'],
      questions: [
        mc('« Les hommes naissent et demeurent libres et égaux en droits » : c’est l’article premier…', ['de la Déclaration de 1789', 'de la Charte canadienne', 'de la Charte québécoise'], 0, 'France, 1789. EN: the 1789 Declaration.', 'a5-cartes'),
        mc('La Charte canadienne des droits et libertés date de…', ['1982', '1867', '1975'], 0, '1982 ; 1975 est la Charte québécoise. EN: 1982.', 'a5-erreurs'),
        mc('Quel article de la Charte canadienne énumère les libertés fondamentales ?', ['l’article 2', 'l’article 15', 'l’article 33'], 0, 'L’article 2 ; le 15 traite de l’égalité. EN: section 2.', 'a5-cartes'),
        mc('Au Québec, dans un texte officiel, human rights se dit le plus souvent…', ['droits de la personne', 'droits de l’homme'], 0, 'Comme dans la Charte québécoise. EN: droits de la personne.', 'a5-construire'),
        tI(MOT, 'Un texte ___ un droit quand il l’inscrit solennellement. (to enshrine)', 'consacre', 'Consacrer un droit. EN: enshrines.', 'a5-cartes', ['garantit', 'proclame', 'reconnaît']),
        tI(MOT, 'La liberté consiste à pouvoir faire tout ce qui ne nuit pas à ___ . (les autres, soutenu)', 'autrui', 'Le mot exact de l’article 4 de 1789. EN: others.', 'a5-construire'),
        eS('Un droit fondamental est consacré à un texte.', 'Un droit fondamental est consacré par un texte.', 'Au passif : consacré par. EN: par.', 'a5-erreurs'),
        lC('Écoute. Ces droits peuvent-ils être limités ?', fr(E(1061)), ['oui, dans des limites raisonnables', 'non, jamais'], 0, 'L’article 1 de la Charte canadienne. EN: yes, reasonably.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-pouvoir', label: 'Pouvoir, puissance, autorité', targets: ['pouvoir-confondu'],
      questions: [
        mc('Hervé n’a aucun titre, et la coopérative l’écoute. Il a…', ['de l’autorité', 'du pouvoir', 'de la puissance'], 0, 'L’autorité se reconnaît. EN: authority.', 'a6-lecture'),
        mc('Un pays riche et armé est…', ['une puissance', 'une autorité'], 0, 'La force et les moyens. EN: a power.', 'a6-table'),
        mc('« Son livre sur la question fait autorité. » Il est…', ['une référence', 'imposé à tous'], 0, 'Faire autorité : servir de référence. EN: authoritative.', 'a6-table'),
        mc('« Un style de direction autoritaire » est…', ['un reproche', 'un éloge'], 0, 'Autoritaire : qui impose sans écouter. EN: a reproach.', 'a6-construire'),
        tI(MOT, 'Ce parti est ___ pouvoir depuis huit ans.', 'au', 'Être au pouvoir. EN: au.', 'a6-piege'),
        tI(MOT, 'Les ___ ont fermé la route par précaution. (the authorities)', 'autorités', 'Au pluriel : les responsables officiels. EN: autorités.', 'a6-piege'),
        eS('On lui reproche un style de direction très autoritatif.', fr(E(1074)), 'Le mot est autoritaire. EN: autoritaire.', 'a6-piege'),
        lC('Écoute. Que lui manque-t-il ?', fr(E(1069)), ['l’autorité pour convaincre', 'le pouvoir de signer'], 0, 'Elle a le pouvoir, pas l’autorité. EN: authority.', 'a6-construire'),
      ],
    },
    {
      id: 'r7-contrepouvoirs', label: 'Les contre-pouvoirs', targets: ['contrepouvoir-confondu'],
      questions: [
        mc('Les tribunaux forment le pouvoir…', ['judiciaire', 'juridique', 'législatif'], 0, 'Judiciaire : la justice et ses tribunaux. EN: judicial.', 'a7-cartes'),
        mc('Le pouvoir qui fait les lois est…', ['le législatif', 'l’exécutif', 'le judiciaire'], 0, 'Le Parlement : le législatif. EN: the legislature.', 'a7-construire'),
        mc('Un contre-pouvoir sert à…', ['limiter un pouvoir établi', 'remplacer le gouvernement'], 0, 'Il surveille et conteste. EN: to check power.', 'a7-cartes'),
        mc('D’après l’éditorial, l’article 16 de 1789 lie la constitution…', ['à la garantie des droits et à la séparation des pouvoirs', 'au suffrage universel'], 0, 'Le texte de l’article 16. EN: rights and separation of powers.', 'a7-texte'),
        tI(MOT, 'On appelle parfois la presse le quatrième ___ .', 'pouvoir', 'Le quatrième pouvoir. EN: estate.', 'a7-erreurs'),
        tI(MOT, 'Ce comité indépendant sert ___ garde-fou.', 'de', 'Servir de + rôle. EN: de.', 'a7-erreurs'),
        eS('Le pouvoir juridique peut annuler une décision du gouvernement.', 'Le pouvoir judiciaire peut annuler une décision du gouvernement.', 'Les tribunaux : judiciaire. EN: judiciaire.', 'a7-erreurs'),
        lC('Écoute. Que perd le pouvoir sans presse libre ?', fr(E(1087)), ['un témoin', 'un allié', 'un budget'], 0, 'Sans presse libre, plus personne ne regarde. EN: a witness.', 'a7-histoire'),
      ],
    },
    {
      id: 'r8-legal', label: 'Légal et légitime', targets: ['legal-legitime'],
      questions: [
        mc('Une décision conforme à la loi est…', ['légale', 'légitime'], 0, 'Légal regarde la loi. EN: lawful.', 'a8-cartes'),
        mc('Legal advice se dit…', ['un avis juridique', 'un avis légal'], 0, 'Juridique : relatif au droit (OQLF). EN: juridique.', 'a8-cartes'),
        mc('« Le gouvernement est légal ; c’est sa légitimité qui est contestée. » On lui reproche…', ['de ne pas être pleinement accepté ou fondé', 'd’avoir violé la loi'], 0, 'Légal, mais contesté sur ses raisons. EN: its legitimacy.', 'a8-construire'),
        mc('Pour Samir, l’occupation du hall était…', ['illégale, mais leur demande légitime', 'légale et légitime'], 0, 'Le règlement l’interdit ; la demande reste fondée. EN: illegal but legitimate demand.', 'a8-texte'),
        tI(MOT, 'Il a agi en état de ___ défense.', 'légitime', 'L’expression est figée. EN: légitime.', 'a8-piege'),
        tI(MOT, 'Ce contrat pose un problème ___ , pas moral. (relatif au droit)', 'juridique', 'Juridique, pas légal. EN: juridique.', 'a8-piege'),
        eS('Au Canada, on peut voter à dix-huit ans : c’est l’âge légitime.', fr(E(1100)), 'Un âge fixé par la loi : légal. EN: légal.', 'a8-piege'),
        lC('Écoute. Ce que la loi permet est-il toujours juste ?', fr(E(1096)), ['pas toujours', 'toujours'], 0, 'Légal n’est pas toujours légitime. EN: not always.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-etatdroit', label: 'L’État de droit et l’impunité', targets: ['etat-de-droit-confondu'],
      questions: [
        mc('Dans un État de droit, les gouvernants…', ['obéissent eux aussi à la loi', 'sont au-dessus des lois'], 0, 'Nul n’est au-dessus des lois. EN: obey the law too.', 'a9-table'),
        mc('Une règle qui change selon la personne, c’est…', ['deux poids, deux mesures', 'la primauté du droit'], 0, 'L’expression critique cette inégalité. EN: double standards.', 'a9-histoire'),
        mc('« La primauté du droit » figure…', ['dans le préambule de la Charte canadienne', 'dans la Déclaration de 1789'], 0, 'Le préambule de 1982. EN: the Charter’s preamble.', 'a9-table'),
        mc('Selon la dépêche, qui a révélé l’affaire des permis ?', ['une employée, protégée comme lanceuse d’alerte', 'un juge'], 0, 'Une employée. EN: an employee.', 'a9-texte'),
        tI(MOT, 'Ces fraudes sont restées ___ pendant des années. (sans sanction)', 'impunies', 'Impuni, impunies. EN: unpunished.', 'a9-erreurs'),
        tI(MOT, 'Les élus doivent rendre compte ___ leurs décisions.', 'de', 'Rendre compte de. EN: de.', 'a9-erreurs'),
        eS('Ils luttent contre l’impunibilité des puissants.', 'Ils luttent contre l’impunité des puissants.', 'Le nom est l’impunité. EN: impunité.', 'a9-erreurs'),
        lC('Écoute. À quoi chacun a-t-il droit ?', fr(E(1112)), ['à un procès équitable', 'à une amnistie'], 0, 'Un procès équitable. EN: a fair trial.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-identite', label: 'L’identité', targets: ['identite-confondue'],
      questions: [
        mc('« L’identité culturelle » parle…', ['de ce par quoi on se reconnaît', 'de la pièce d’identité'], 0, 'Le sens abstrait. EN: who you feel you are.', 'a10-cartes'),
        mc('« Repli identitaire » est le plus souvent…', ['un reproche', 'une description neutre'], 0, 'Le mot accuse déjà. EN: a reproach.', 'a10-construire'),
        mc('Nadia se dit bruxelloise, belge, africaine et francophone. Elle parle d’une identité…', ['plurielle', 'nationale', 'administrative'], 0, 'Plusieurs appartenances à la fois. EN: multiple.', 'a10-lecture'),
        mc('Pour rapporter l’expression « identité nationale », tu dis d’abord…', ['dans quel sens et par qui elle est employée', 'qu’elle est évidente'], 0, 'Un mot chargé se présente comme un usage. EN: who uses it, how.', 'a10-focus'),
        tI(MOT, 'Je m’identifie ___ ce personnage plus qu’à son auteur.', 'à', 'S’identifier à. EN: à.', 'a10-erreurs'),
        tI(MOT, 'Le quartier a gardé un fort sentiment d’___ . (belonging)', 'appartenance', 'Le sentiment d’appartenance. EN: belonging.', 'a10-cartes'),
        eS('Ce par quoi elle se reconnaît, c’est son identité culturale.', 'Ce par quoi elle se reconnaît, c’est son identité culturelle.', 'L’adjectif est culturel, culturelle. EN: culturelle.', 'a10-erreurs'),
        lC('Écoute. Choisit-on toutes ses appartenances ?', fr(E(1126)), ['non', 'oui'], 0, 'Certaines nous sont données. EN: no.', 'a10-construire'),
      ],
    },
    {
      id: 'r11-modeles', label: 'Vivre ensemble', targets: ['modeles-confondus'],
      questions: [
        mc('Le modèle défendu au Québec, c’est plutôt…', ['l’interculturalisme', 'le multiculturalisme'], 0, 'Une culture commune qui dialogue. EN: interculturalism.', 'a11-table'),
        mc('La Loi sur le multiculturalisme canadien date de…', ['1988', '1982', '1975'], 0, 'Politique officielle depuis 1971, inscrite dans une loi en 1988 ; 1982 est la Charte, 1975 la Charte québécoise. EN: 1988.', 'a11-table'),
        mc('Le mot communautarisme est…', ['presque toujours un reproche', 'un terme neutre de sociologie'], 0, 'Un mot qu’on applique aux autres. EN: a reproach.', 'a11-construire'),
        mc('Pour rapporter un avis sur la laïcité sans le reprendre, tu écris…', ['« pour ses partisans… »', '« comme chacun sait… »'], 0, 'Une position attribuée. EN: attribute it.', 'a11-piege'),
        tI(MOT, 'Un ___ raisonnable adapte une règle commune pour éviter une discrimination.', 'accommodement', 'Accommodement, au masculin. EN: accommodation.', 'a11-piege'),
        tI(MOT, 'La neutralité de l’État envers les religions, c’est la ___ .', 'laïcité', 'La laïcité. EN: secularism.', 'a11-table'),
        eS('Le Québec défend plutôt un modèle de multiculturalisme.', fr(E(1136)), 'Le Québec défend l’interculturalisme. EN: interculturalisme.', 'a11-piege'),
        lC('Écoute. Qui emploie rarement le mot communautarisme ?', fr(E(1139)), ['ceux qu’il désigne', 'les journalistes', 'personne'], 0, 'C’est un mot pour les autres. EN: those it refers to.', 'a11-histoire'),
      ],
    },
    {
      id: 'r12-recyclage', label: 'Le B1, le B2 et le C1 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(JURIDIQUE_REF)} : « Il a porté l’affaire devant la justice. » Ici, la justice est…`, ['l’institution', 'la valeur'], 0, `« ${B227_REFRAME} » EN: ${B227_REFRAME_EN}`, 'a1-rappel'),
        mc(`${Cap(JURIDIQUE_REF)} : « She studies law » se dit…`, ['elle étudie le droit', 'elle étudie la loi'], 0, 'Le droit est un domaine ; une loi est un texte. EN: le droit.', 'a1-rappel'),
        mc(`${Cap(JURIDIQUE_REF)} : « être en droit de refuser », c’est pouvoir refuser…`, ['légitimement', 'illégalement'], 0, 'Être en droit de : avoir le droit, légitimement. EN: legitimately.', 'a8-construire'),
        mc(`${Cap(ENVIRONNEMENT_REF)} : « Un mot n’arrive jamais seul. » Ici, le voisin d’égalité qui tient compte des besoins, c’est…`, ['l’équité', 'l’inégalité'], 0, `« ${B133_REFRAME} » EN: ${B133_REFRAME_EN}`, 'a2-construire'),
        mc(`${Cap(ENVIRONNEMENT_REF)} : égal, inégal, les inégalités. Le nom de « égalitaire » est…`, ['l’égalitarisme', 'l’égalité des chances'], 0, 'La famille : égal, égalitaire, égalitarisme. EN: egalitarianism.', 'a2-cartes'),
        mc(`${Cap(IDEES_REF_PLANNED)} : « deux mots voisins, deux idées ». Cette leçon y ajoute…`, ['le poids de chaque mot', 'leur étymologie'], 0, `« ${C112_REFRAME} » EN: ${C112_REFRAME_EN}`, 'a1-rappel'),
        mc(`${Cap(IDEES_REF_PLANNED)} : expliquer une décision, ce n’est pas la…`, ['justifier', 'rendre légale'], 0, 'Expliquer donne les causes ; justifier dit que c’était légitime. EN: justify.', 'a8-cartes'),
        lC(`Écoute. ${Cap(ENVIRONNEMENT_REF)} : que dit cette phrase ?`, fr(B133_ROW), ['un mot vient avec sa famille et ses voisins', 'un mot a un seul sens'], 0, 'Le principe des mots en famille. EN: words come with neighbours.', 'a1-rappel'),
      ],
    },
    {
      id: 'r13-examen', label: 'Comme à l’examen', targets: ['contribution-confuse'],
      questions: [
        mc('Compréhension écrite. D’après sa réponse, que reproche d’abord Rosalie à Bernard ?', ['de traiter la liberté comme si elle n’avait pas de limites', 'de ne pas aimer les piétons', 'de mentir sur la consultation', 'de ne pas avoir voté'], 0, 'Sa première distinction : la liberté et ses limites. EN: freedom without limits.', 'a12-lecture'),
        mc('Compréhension écrite. Pour Rosalie, la décision sur la rue Fleury est…', ['légale, mais sa légitimité peut se discuter', 'illégale', 'illégitime par définition', 'sans importance'], 0, 'Votée dans les règles ; la légitimité se discute. EN: lawful.', 'a12-lecture'),
        mc('Compréhension écrite. Comment Rosalie signale-t-elle son avis personnel ?', ['par « Pour ma part »', 'par une citation', 'par un chiffre', 'elle ne le donne pas'], 0, 'Une position annoncée comme telle. EN: « For my part ».', 'a12-lecture'),
        mc('Choisis le mot juste : « Cette mesure ne supprime pas ta liberté : elle la … . »', ['restreint', 'consacre', 'légitime', 'rend'], 0, 'Limiter sans supprimer : restreindre. EN: restricts.', 'a4-cartes'),
        mc('Choisis le mot juste : « Le conseil a le … de proposer des mesures ; son autorité dépend de ses décisions. »', ['pouvoir', 'puissance', 'autorité', 'mérite'], 0, 'Une capacité de décider donnée par un texte : le pouvoir. EN: power.', 'a6-table'),
        tI('Écris le mot qui manque.', 'Que la mesure soit légale ne règle pas la question de sa ___ .', 'légitimité', 'Légal ne dit pas légitime. EN: legitimacy.', 'a12-usages'),
        eS('Tu emploies le mot égalité là où tu veux dire équité, et ta lettre porte atteinte sur le débat.', 'Tu emploies le mot égalité là où tu veux dire équité, et ta lettre porte atteinte au débat.', 'Porter atteinte à. EN: à.', 'a4-piege'),
        lC('Compréhension orale. Écoute. Que fait la personne ?', fr(E(1148)), ['elle annonce sa position', 'elle refuse de répondre', 'elle cite une loi'], 0, 'Elle se situe, et dit pourquoi. EN: she states her position.', 'a12-plan'),
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
    { front: 'fair (taking needs into account)', back: 'équitable', say: fr(E(1000)) },
    { front: 'in a tie (a vote, a match)', back: 'à égalité', say: fr(E(1020)) },
    { front: 'to do someone justice', back: 'rendre justice à quelqu’un', say: fr(E(1031)) },
    { front: 'civil liberties', back: 'les libertés publiques', say: fr(E(1048)) },
    { front: 'to enshrine a right', back: 'consacrer un droit', say: fr(E(1061)) },
    { front: 'to be authoritative (a book)', back: 'faire autorité', say: fr(E(1072)) },
    { front: 'legal advice', back: 'un avis juridique', say: fr(E(1099)) },
    { front: 'to go unpunished', back: 'rester impuni', say: fr(E(1110)) },
    { front: 'reasonable accommodation', back: 'un accommodement raisonnable', say: fr(E(1130)) },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Un sens et un poids',
  body: `${REFRAME} Tu es parti de la justice des tribunaux de ${JURIDIQUE_REF}, des familles de mots de ${ENVIRONNEMENT_REF} et des mots voisins de ${IDEES_REF_PLANNED}, pour peser les mots du débat public : égalité et équité, la justice, les libertés et leurs textes, le pouvoir et ses contrepoids, le légal et le légitime, l’État de droit, l’identité, les modèles du vivre-ensemble. Pour l’histoire de la laïcité et des grandes références, reviens à ${REFERENCES_REF_PLANNED}. La suite, c’est ${NEXT_REF_PLANNED} : la mémoire, la vérité, la beauté et l’éthique. EN: Next comes lesson 16 in C1: memory, truth, beauty and ethics.`,
  points: [
    'L’égalité donne la même part ; l’équité, la part juste.',
    'La liberté a des limites ; les libertés publiques sont des droits précis.',
    'Le pouvoir s’exerce, l’autorité se reconnaît, un contre-pouvoir limite.',
    'Un mot chargé se rapporte comme un usage : qui le dit, et à propos de qui.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['poids', 'modeles'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ta contribution',
    opener: {
      line: 'Une lettre ouverte qui mélange tout : ici tu réponds à Gérald en pesant chacun de ses mots, puis tu passes l’examen. EN: An open letter that mixes everything up: here you reply to Gérald by weighing each of his words, then sit the exam.',
      imageRef: 'lessons/notions-politiques/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit ta contribution et passé l’examen : quatre-vingt-seize questions, douze manches. EN: You wrote your contribution and sat the exam: ninety-six questions, twelve rounds.',
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r5-droits', 'a12-quiz/r9-etatdroit', 'a12-review'],
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
  { id: 'd-egalite', title: 'La même part, ou la part juste', format: 'sort' as const, coach: 'Deux piles : la phrase donne la même chose à tous, ou elle tient compte des besoins. EN: same for all, or according to needs?', buckets: ['égalité', 'équité'], items: [E(1001), E(1017), ETH(130), E(1002), E(1019), ETH(142)], audio: AUDIO },
  { id: 'd-justice', title: 'La valeur ou l’institution', format: 'sort' as const, coach: 'Deux piles : la justice qu’on réclame, ou la justice qui juge. EN: value or institution?', buckets: ['la valeur', 'l’institution'], items: [E(1030), ETH(248), ETH(131), E(1036), E(1026), B227_JUSTICE], audio: AUDIO },
  { id: 'd-libertes', title: 'Les petits mots des libertés', format: 'mcq' as const, coach: 'Porter atteinte à, être libre de, prendre la liberté de. EN: the prepositions of freedom.', q: 'Ce règlement porte atteinte … la liberté de réunion.', opts: ['à', 'sur'], correct: 0, why: 'Porter atteinte à. EN: à.', items: [E(1037), E(1039), E(1040), E(1044), E(1046), E(1047)], audio: AUDIO },
  { id: 'd-droits', title: 'Trois textes, trois dates', format: 'flashcard' as const, coach: 'Lis chaque carte et dis à voix haute le pays et la date du texte. EN: say the country and the date.', items: [E(1053), E(1054), E(1055), E(1057), E(1059), 'fr.b1.questions-sociales.075'], audio: AUDIO },
  { id: 'd-pouvoir', title: 'Décider, ou être écouté', format: 'sort' as const, coach: 'Deux piles : la phrase parle d’un pouvoir qu’on exerce, ou d’une autorité qu’on reconnaît. EN: power or authority?', buckets: ['le pouvoir', 'l’autorité'], items: [E(1063), E(1070), E(1075), E(1066), E(1072), E(1073)], audio: AUDIO },
  { id: 'd-contrepouvoir', title: 'Gouverner, ou faire contrepoids', format: 'sort' as const, coach: 'Deux piles : un pouvoir établi, ou ce qui le limite. EN: power or check?', buckets: ['un pouvoir', 'un contrepoids'], items: [E(1076), E(1080), E(1085), E(1078), E(1083), E(1086)], audio: AUDIO },
  { id: 'd-legal', title: 'La loi, ou la raison', format: 'sort' as const, coach: 'Deux piles : ce que la loi permet, ou ce qui est fondé. EN: lawful or legitimate?', buckets: ['légal', 'légitime'], items: [E(1089), E(1093), E(1100), E(1090), ETH(307), E(1097)], audio: AUDIO },
  { id: 'd-etatdroit', title: 'La loi pour tous', format: 'flashcard' as const, coach: 'Lis chaque phrase et dis si elle protège l’État de droit ou si elle décrit ce qui le menace. EN: protects or threatens?', items: [E(1102), ETH(275), E(1105), E(1103), E(1110), E(1114)], audio: AUDIO },
  { id: 'd-identite', title: 'Le sens abstrait', format: 'mcq' as const, coach: 'L’identité au sens abstrait dit ce par quoi tu te reconnais. EN: identity in the abstract sense.', q: 'Je m’identifie … ce personnage.', opts: ['à', 'avec'], correct: 0, why: 'S’identifier à. EN: à.', items: [E(1115), E(1116), E(1117), E(1118), E(1121), E(1127)], audio: AUDIO },
  { id: 'd-modeles', title: 'Un usage, pas un verdict', format: 'flashcard' as const, coach: 'Lis chaque phrase, puis dis qui pourrait l’écrire : un partisan, un critique, ou quelqu’un qui rapporte. EN: who could write it?', items: [E(1128), 'fr.b2.quebec-et-francophonie.016', 'fr.b2.questions-sociales.035', E(1137), E(1138), E(1139)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1, le B2 et le C1 en renfort', format: 'flashcard' as const, coach: 'Six phrases des leçons précédentes : dis ce que chacune t’apprend pour peser un mot. EN: what each earlier sentence teaches here.', items: [B227_JUSTICE, B227_LOI, B227_EN_DROIT, B133_ROW, B133_EGAL, E(1003)], audio: AUDIO },
  { id: 'd-contribution', title: 'Peser, puis prendre position', format: 'flashcard' as const, coach: 'Lis chaque phrase, puis écris la tienne sur le même modèle pour ta réponse à Gérald. EN: read each one, then write your own.', items: [E(1141), E(1142), E(1143), E(1144), E(1145), E(1146)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'egalite-equite', description: 'Says égal or également where the split follows needs (or the reverse), or confuses à parts égales, à égalité and égalitaire.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a12-mission'], drill: 'd-egalite', retest: 'd-egalite' },
  { id: 'justice-confondue', description: 'Mixes up justice as a value and as the courts, or confuses rendre justice à, rendre la justice and se faire justice, or writes injustesse for injustice.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check'], drill: 'd-justice', retest: 'd-justice' },
  { id: 'libertes-confondues', description: 'Treats freedom as unlimited, uses the singular for civil liberties, or misbuilds porter atteinte à, être libre de, prendre la liberté de or restreindre.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a12-mission'], drill: 'd-libertes', retest: 'd-libertes' },
  { id: 'textes-confondus', description: 'Misdates or misattributes the 1789 Declaration and the two charters, forgets that the Canadian Charter allows reasonable limits, or writes consacré à for consacré par.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a12-mission'], drill: 'd-droits', retest: 'd-droits' },
  { id: 'pouvoir-confondu', description: 'Uses pouvoir, puissance and autorité interchangeably, says en pouvoir, or hears autoritaire as praise.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a12-mission'], drill: 'd-pouvoir', retest: 'd-pouvoir' },
  { id: 'contrepouvoir-confondu', description: 'Calls the courts juridique, calques the fourth estate or serve as, or takes a counter-power for a governing power.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check'], drill: 'd-contrepouvoir', retest: 'd-contrepouvoir' },
  { id: 'legal-legitime', description: 'Says légal for légitime (or the reverse), or légal for juridique under the influence of English legal.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a12-mission'], drill: 'd-legal', retest: 'd-legal' },
  { id: 'etat-de-droit-confondu', description: 'Cannot say what the rule of law requires, writes impune or rendre compte pour, or misses the capital of État.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check'], drill: 'd-etatdroit', retest: 'd-etatdroit' },
  { id: 'identite-confondue', description: 'Reads identité only in its administrative sense, writes s’identifier avec, or uses identitaire as a neutral word.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check'], drill: 'd-identite', retest: 'd-identite' },
  { id: 'modeles-confondus', description: 'Confuses multiculturalism and interculturalism, calques reasonable accommodation, or repeats laïcité or communautarisme as a verdict instead of a usage.', detectOn: ['a11-construire', 'a11-piege', 'a11-check', 'a12-mission'], drill: 'd-modeles', retest: 'd-modeles' },
  { id: 'recyclage', description: 'Loses a tool this lesson sits on: justice as the courts and droit against loi, word families, the neighbouring-word method.', detectOn: ['a1-rappel', 'a2-construire', 'a8-construire'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'contribution-confuse', description: 'In a contribution, judges the other person instead of weighing their words, adopts a loaded word, or gives a position without flagging it as one’s own.', detectOn: ['a12-plan', 'a12-scenario', 'a12-mission'], drill: 'd-contribution', retest: 'd-contribution' },
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
  sheet('sheet-egalite', 'Égalité, équité, justice', ['égalité ou équité', 'les emplois de justice', 'les pièges'], [
    teach('sheet-egalite-teach', 'La même part, la part juste, la justice',
      `${REFRAME} L’égalité donne la même chose à tous ; l’équité tient compte de la situation de chacun pour que le résultat soit juste. La justice est à la fois une valeur (réclamer justice) et l’institution qui juge (saisir la justice), celle que ${JURIDIQUE_REF} t’a fait lire. EN: ${REFRAME_EN}`),
    table('sheet-egalite-mots', 'Égalité et équité', ['Expression', 'Elle dit', 'Exemple'], [
      ['l’égalité des droits', 'les mêmes droits pour tous', 'Tous les citoyens sont égaux devant la loi.'],
      ['à parts égales', 'exactement la même part', 'Partager la somme à parts égales.'],
      ['égalitaire', 'qui vise l’égalité stricte', 'Une société égalitaire.'],
      ['à égalité', 'un score nul', 'Le vote s’est terminé à égalité.'],
      ['équitable, l’équité', 'la part juste, selon les besoins', 'Une répartition équitable.'],
      ['l’égalité des chances', 'les mêmes chances au départ', 'Elle ne garantit pas l’égalité des résultats.'],
    ]),
    table('sheet-egalite-justice', 'Les emplois de justice', ['Tournure', 'Sens', 'Exemple'], [
      ['réclamer justice', 'demander ce qui est dû', 'Les familles des victimes réclament justice.'],
      ['saisir la justice', 's’adresser aux tribunaux', 'Elle a saisi la justice.'],
      ['rendre la justice', 'juger (soutenu)', 'Ce sont les juges qui rendent la justice.'],
      ['rendre justice à', 'reconnaître un mérite', 'Le film rend justice à ces ouvrières.'],
      ['se faire justice soi-même', 'se venger sans tribunal', 'Personne n’a le droit de se faire justice soi-même.'],
      ['juste', 'équitable, ou exact', 'Une décision juste ; une réponse juste.'],
      ['l’injustice / l’injustesse', 'ce qui blesse / l’inexactitude', 'un sentiment d’injustice'],
    ]),
  ]),
  sheet('sheet-droits', 'Les libertés et leurs textes', ['la liberté et les libertés', 'trois textes', 'trois usages'], [
    teach('sheet-droits-teach', 'Des droits qu’on peut nommer',
      'Au singulier, la liberté est une valeur ; au pluriel, les libertés publiques sont des droits précis. Une mesure les restreint (elle les limite) ou y porte atteinte (elle les réduit, et c’est déjà une accusation). Trois textes les consacrent : la Déclaration de 1789 en France, la Charte québécoise de 1975, la Charte canadienne de 1982. EN: liberty, liberties, and the texts that enshrine them.'),
    table('sheet-droits-libertes', 'Les libertés', ['Expression', 'Sens', 'Construction'], [
      ['les libertés publiques', 'expression, réunion, association, culte', 'toujours au pluriel'],
      ['la liberté de conscience', 'croire, ne pas croire, changer', 'de conscience'],
      ['la liberté de réunion', 'freedom of assembly', 'le terme des chartes ; « d’assemblée » est un calque'],
      ['la liberté de circulation', 'se déplacer', 'de circulation'],
      ['porter atteinte à', 'réduire, nuire', 'à + liberté'],
      ['restreindre, une restriction', 'limiter', 'elle restreint'],
      ['être libre de, prendre la liberté de', 'avoir le choix, oser', 'de + infinitif'],
    ]),
    table('sheet-droits-textes', 'Trois textes', ['Texte', 'Pays et date', 'Articles cités dans la leçon'], [
      ['Déclaration des droits de l’homme et du citoyen', 'France, 1789', 'art. 1 libres et égaux en droits ; art. 4 la liberté ; art. 11 la libre communication des pensées ; art. 16 la séparation des pouvoirs'],
      ['Charte des droits et libertés de la personne', 'Québec, 1975', 'art. 3 libertés fondamentales ; art. 4 dignité, honneur, réputation ; art. 10 égalité'],
      ['Charte canadienne des droits et libertés', 'Canada, 1982', 'préambule primauté du droit ; art. 1 limites raisonnables ; art. 2 libertés fondamentales ; art. 15 égalité ; art. 27 patrimoine multiculturel'],
    ]),
    table('sheet-droits-usages', 'Trois usages pour human rights', ['Usage', 'Où', 'Exemple'], [
      ['les droits de l’homme', 'France, le texte de 1789', 'la Déclaration des droits de l’homme et du citoyen'],
      ['les droits de la personne', 'Canada, Québec', 'la Charte des droits et libertés de la personne'],
      ['les droits humains', 'usage qui se répand', 'défendre les droits humains'],
    ]),
  ]),
  sheet('sheet-pouvoir', 'Le pouvoir et ses contrepoids', ['pouvoir, puissance, autorité', 'les trois pouvoirs', 'les contre-pouvoirs'], [
    teach('sheet-pouvoir-teach', 'Qui décide, et qui limite',
      'Le pouvoir s’exerce : c’est une capacité de décider. La puissance s’impose : c’est une force. L’autorité se reconnaît : on obéit sans y être forcé. Un pouvoir se répartit entre le législatif, l’exécutif et le judiciaire, et des contre-pouvoirs le surveillent. EN: power, might, authority, and what checks them.'),
    table('sheet-pouvoir-mots', 'Pouvoir, puissance, autorité', ['Mot', 'Il désigne', 'Exemple'], [
      ['le pouvoir', 'la capacité de décider', 'Ce parti est au pouvoir depuis huit ans.'],
      ['les pouvoirs publics', 'les autorités qui gouvernent', 'Les pouvoirs publics doivent agir.'],
      ['la puissance', 'la force, les moyens', 'une grande puissance économique'],
      ['l’autorité', 'un pouvoir reconnu', 'Une enseignante qui a de l’autorité n’a pas besoin de crier.'],
      ['les autorités', 'les responsables officiels', 'Les autorités ont fermé la route.'],
      ['faire autorité', 'être une référence', 'Son livre sur la question fait autorité.'],
      ['autoritaire', 'qui impose sans écouter (reproche)', 'un style de direction autoritaire'],
    ]),
    table('sheet-pouvoir-contre', 'Les pouvoirs et leurs contrepoids', ['Expression', 'Sens', 'Attention'], [
      ['la séparation des pouvoirs', 'législatif, exécutif, judiciaire', 'des pouvoirs, avec l’article'],
      ['le pouvoir judiciaire', 'les tribunaux', 'judiciaire ≠ juridique'],
      ['un contre-pouvoir', 'un pouvoir face à une autorité établie', 'presse, syndicats, opposition'],
      ['le quatrième pouvoir', 'la presse', 'jamais « le quatrième état »'],
      ['servir de garde-fou', 'empêcher les excès', 'servir de, pas servir comme'],
    ]),
  ]),
  sheet('sheet-legal', 'La loi, la raison, l’État de droit', ['légal, légitime, juridique', 'l’État de droit', 'l’impunité'], [
    teach('sheet-legal-teach', 'Ce que la loi permet, ce qui est fondé',
      'Légal : conforme à la loi ou défini par elle. Légitime : juste, fondé, défendable. Juridique : relatif au droit (l’OQLF note qu’on abuse de légal sous l’influence de l’anglais legal). Dans un État de droit, les gouvernants aussi obéissent à la loi ; l’impunité, c’est rester sans sanction. EN: lawful, legitimate, legal (about law), rule of law, impunity.'),
    table('sheet-legal-mots', 'Légal, légitime, juridique', ['Mot', 'Il dit', 'Exemple'], [
      ['légal, la légalité', 'conforme à la loi', 'l’âge légal pour voter'],
      ['légitime, la légitimité', 'juste, fondé', 'une revendication légitime'],
      ['la légitime défense', 'expression figée', 'agir en état de légitime défense'],
      ['juridique', 'relatif au droit', 'un avis juridique, un conseiller juridique'],
      ['judiciaire', 'qui concerne les tribunaux', 'le pouvoir judiciaire'],
    ]),
    table('sheet-legal-etat', 'L’État de droit et l’impunité', ['Expression', 'Sens', 'Remarque'], [
      ['l’État de droit', 'le pouvoir soumis à la loi', 'É majuscule'],
      ['la primauté du droit', 'la loi au-dessus de tous', 'préambule de la Charte canadienne'],
      ['nul n’est au-dessus des lois', 'pas d’exception', 'soutenu'],
      ['rester impuni, l’impunité', 'sans sanction', 'impunies au féminin pluriel'],
      ['deux poids, deux mesures', 'une règle qui change selon la personne', 'un reproche'],
      ['rendre compte de, la reddition de comptes', 'expliquer son action', 'de, jamais pour ; terme québécois'],
      ['un procès équitable', 'un procès juste pour tous', 'même pour l’accusé'],
    ]),
  ]),
  sheet('sheet-societe', 'Identité, vivre ensemble, ta contribution', ['l’identité', 'les modèles et les mots chargés', 'le plan de la contribution'], [
    teach('sheet-societe-teach', 'Des mots qui pèsent',
      `${REFRAME} L’identité au sens abstrait se construit et peut être plurielle. Le multiculturalisme et l’interculturalisme sont deux modèles ; laïcité, communautarisme, identité nationale et repli identitaire sont des mots chargés : dis dans quel sens on les emploie, qui les emploie et à propos de qui, puis donne ta position en l’annonçant. L’histoire de la laïcité est celle de ${REFERENCES_REF_PLANNED}. EN: ${REFRAME_EN}`),
    table('sheet-societe-identite', 'L’identité', ['Expression', 'Sens', 'Exemple'], [
      ['l’identité culturelle', 'ce par quoi on se reconnaît', 'Pour beaucoup, la langue est au cœur de l’identité.'],
      ['une identité plurielle', 'plusieurs appartenances', 'montréalaise, haïtienne et francophone'],
      ['le sentiment d’appartenance', 'se sentir membre', 'Le quartier a gardé un fort sentiment d’appartenance.'],
      ['s’identifier à', 'se reconnaître dans', 'Je m’identifie à ce personnage.'],
      ['identitaire', 'souvent chargé', 'le repli identitaire : un reproche'],
    ]),
    table('sheet-societe-modeles', 'Les modèles et les mots chargés', ['Mot', 'Ce qu’il désigne', 'Comment le rapporter'], [
      ['le multiculturalisme', 'la coexistence des cultures', 'politique officielle au Canada (loi de 1988)'],
      ['l’interculturalisme', 'des échanges autour d’une culture commune', 'le modèle défendu au Québec'],
      ['un accommodement raisonnable', 'adapter une règle pour éviter une discrimination', 'notion juridique, sauf contrainte excessive'],
      ['la laïcité', 'la neutralité de l’État envers les religions', 'pour ses partisans… ; selon ses critiques…'],
      ['le communautarisme', 'le repli d’un groupe', 'presque toujours un reproche'],
      ['s’intégrer / s’assimiler', 'participer / se fondre', 'deux projets différents'],
    ]),
    table('sheet-societe-plan', 'Le plan de la contribution', ['Partie', 'Tournure', 'Exemple'], [
      ['l’ouverture', 'merci, une vraie question', 'Merci d’avoir lancé ce débat : il nous concerne tous.'],
      ['le mot pesé', 'tu emploies le mot… là où…', 'Tu emploies le mot égalité là où tu veux dire équité.'],
      ['la loi et la raison', 'légal ne règle pas légitime', 'Que la mesure soit légale ne règle pas la question de sa légitimité.'],
      ['le mot chargé', 'le rapporter comme un usage', 'Ce mot est surtout employé contre les autres.'],
      ['ta position', 'annoncée comme telle', 'Voilà où je me situe, et pourquoi.'],
      ['la proposition', 'une suite concrète', 'Je propose que nous en débattions à la prochaine séance.'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-15-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, lines in authored order, at natural C1 speed; the lines are hidden, so the take must be continuous.';
const TRAP = 'The audio step plays each card’s CORRECT sentence. Six lines, one voice, plainly and at the same pace. The wrong versions in promptSound are NEVER spoken.';
const TEXTE = 'One voice, read as written, at a natural reading pace: the instruction sentence first, then the text itself after a short pause.';
const CARDS = 'Four cards, one coach voice, neutral and clear; each card’s French line read once, unhurried.';
const REC_DESC: Record<string, string> = {
  'rec-c1-15-conseil': 'Rosalie’s minutes of the neighbourhood council (act 1), ONE female Québécoise voice, one take, even and factual, like minutes read at the next meeting. The quoted « par souci d’égalité » slightly marked; Malik’s reservation read neutrally, never ironically.',
  'rec-c1-15-jardin': 'Yvette and Théo in the community garden (act 2), two voices, one take: Yvette thoughtful, Théo calm and practical. Québec accents. Light outdoor ambience.',
  'rec-c1-15-egalite-cartes': `The four égalité / équité cards (act 2). ${CARDS}`,
  'rec-c1-15-piege-egalite': TRAP,
  'rec-c1-15-egalite-ecoute': `${ONE_TAKE} Eight lines, ONE VOICE, a community organiser explaining a budget to residents: clear, unhurried.`,
  'rec-c1-15-texte-a2': `The parents’ collective message (act 2). ${TEXTE} A female voice, firm and courteous.`,
  'rec-c1-15-cloture': 'Aminata and her mother on the phone (act 3), two voices, one take: Aminata agitated, her mother steady and warm, with a West African French accent. A slight telephone filter on the mother’s side.',
  'rec-c1-15-texte-a3': `The Lyon newspaper brief (act 3). ${TEXTE} A newsreader voice from France, neutral; the quoted spokeswoman’s line a little slower.`,
  'rec-c1-15-radio-libertes': `${ONE_TAKE} EIGHT VOICES, one per line, as eight listeners phoning a local radio show: varied ages and accents (Québec, France, Belgium, Switzerland, Senegal), each line slightly telephone-filtered.`,
  'rec-c1-15-libertes-cartes': `The four liberté cards (act 4). ${CARDS}`,
  'rec-c1-15-piege-libertes': TRAP,
  'rec-c1-15-texte-a4': `The Geneva foundation’s press release (act 4). ${TEXTE} A Swiss voice, measured and formal.`,
  'rec-c1-15-bibliotheque': 'Kwame and Hélène at the library (act 5), two voices, one take: Kwame curious, with a Ghanaian English-influenced accent in French; Hélène a patient Montréal librarian. The 1789 sentence read a little more slowly, as a quotation.',
  'rec-c1-15-droits-cartes': `The four cards on the three texts and consacrer (act 5). ${CARDS} Dates read in full (« mille sept cent quatre-vingt-neuf »).`,
  'rec-c1-15-droits-ecoute': `${ONE_TAKE} Eight lines, ONE VOICE, a civics teacher in class: clear, with a short pause between lines. The two 1789 quotations (lines 2 and 3) read as quotations.`,
  'rec-c1-15-texte-a5': `The civics handout (act 5). ${TEXTE} A Montréal librarian’s voice; the quoted article 11 slightly slower.`,
  'rec-c1-15-coop': 'The neighbourhood column on the housing co-op (act 6), ONE voice, one take, a columnist with a light, knowing tone; the closing maxim slower.',
  'rec-c1-15-piege-pouvoir': TRAP,
  'rec-c1-15-texte-a6': `The Navibus job advertisement (act 6). ${TEXTE} A businesslike Québec voice.`,
  'rec-c1-15-bulletin': 'Théo and Lina at the newsletter office (act 7), two voices, one take: Lina young and sceptical, Théo older, amused and convinced. Paper rustle welcome.',
  'rec-c1-15-contrepouvoir-cartes': `The four separation-of-powers cards (act 7). ${CARDS}`,
  'rec-c1-15-texte-a7': `The neighbourhood editorial (act 7). ${TEXTE} A male voice; the 1789 article 16 read as a quotation, slower.`,
  'rec-c1-15-legal-ecoute': `${ONE_TAKE} Eight lines, TWO VOICES alternating (odd lines a woman, even lines a man), as students arguing in a cafeteria: lively but never overlapping.`,
  'rec-c1-15-legal-cartes': `The four légal / légitime / juridique cards (act 8). ${CARDS}`,
  'rec-c1-15-piege-legal': TRAP,
  'rec-c1-15-texte-a8': `The Lausanne student forum exchange (act 8). ${TEXTE} Two voices for Léa and Samir; the instruction by a neutral third voice.`,
  'rec-c1-15-permis': 'Malik and Aminata at a café (act 9), two voices, one take: Malik indignant, Aminata calm and precise. Café ambience, low.',
  'rec-c1-15-etatdroit-ecoute': `${ONE_TAKE} Eight lines, TWO VOICES, a court reporter and a law teacher on the radio, alternating by line; serious, unhurried.`,
  'rec-c1-15-texte-a9': `The radio dispatch on the permits affair (act 9). ${TEXTE} A newsreader voice, neutral; the association’s quotation by a second voice.`,
  'rec-c1-15-identite': 'The Brussels magazine portrait (act 10), ONE female voice with a Belgian accent, one take, warm; Nadia’s quoted lines a little more lively.',
  'rec-c1-15-identite-cartes': `The four identity cards (act 10). ${CARDS}`,
  'rec-c1-15-texte-a10': `The Dakar community-centre announcement (act 10). ${TEXTE} A Senegalese voice, welcoming.`,
  'rec-c1-15-atelier': 'Aminata and Hélène at the citizens’ workshop (act 11), two voices, one take: Aminata earnest, Hélène careful to attribute every position. Quiet library ambience.',
  'rec-c1-15-piege-modeles': TRAP,
  'rec-c1-15-texte-a11': `The citizens’ workshop glossary (act 11). ${TEXTE} A neutral Montréal voice; every attributed position (« ses partisans », « ses critiques ») read with the same neutral tone.`,
  'rec-c1-15-modele': 'Rosalie’s reply to Bernard (act 12), ONE female Québécoise voice, one take, respectful and precise; Bernard’s quoted letter in a slightly flatter tone.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 15',
  intro: 'At B2 you learned to read legal and administrative French. At C1 you need the words of public debate, and each one carries a meaning and a weight. This lesson separates equality from equity, justice as a value from justice as the courts, liberty from civil liberties, power from might and authority, lawful from legitimate, and identity in the abstract sense from identity papers; it names the three texts behind fundamental rights (1789, 1975, 1982), counter-powers and the rule of law, and two models of living together. Loaded words such as laïcité or communautarisme are taught as usages, never as positions. It ends with a 250 to 350 word contribution to a neighbourhood consultation.',
  skill: 'CE',
  grammarAssumed: [JURIDIQUE_UNIT, ENVIRONNEMENT_UNIT],
  grammarIntroduced: [
    'Égalité against équité (égalitaire, à parts égales, à égalité, l’égalité des chances against des résultats)',
    'The senses of justice: the value and the institution; réclamer justice, saisir la justice, rendre la justice, rendre justice à, se faire justice; juste as fair and as correct',
    'La liberté against les libertés publiques; porter atteinte à, restreindre, être libre de, prendre la liberté de; la liberté de réunion',
    'Fundamental rights and their texts: the 1789 Declaration, the Charte québécoise (1975), the Charte canadienne (1982); consacrer un droit; droits de l’homme / de la personne / humains',
    'Pouvoir against puissance and autorité; les pouvoirs publics, faire autorité, autoritaire, les autorités',
    'The separation of powers and counter-powers: législatif, exécutif, judiciaire, contre-pouvoir, garde-fou, le quatrième pouvoir',
    'Légal against légitime, and juridique for « legal » in the sense of « about law »; la légitime défense',
    'L’État de droit, la primauté du droit, l’impunité, deux poids deux mesures, rendre compte de, la reddition de comptes',
    'Identité in its abstract sense: identité culturelle, plurielle, le sentiment d’appartenance, s’identifier à, identitaire as a loaded word',
    'Multiculturalisme against interculturalisme, l’accommodement raisonnable, laïcité and communautarisme presented as usages',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B2, tu as appris à lire la langue du droit et de l’administration. Au C1, il te faut les mots du débat public, et chacun porte un sens et un poids. Cette leçon sépare l’égalité et l’équité, la justice qu’on réclame et celle qu’on saisit, la liberté et les libertés publiques, le pouvoir, la puissance et l’autorité, le légal et le légitime, l’identité au sens abstrait et la pièce d’identité ; elle nomme les trois textes des droits fondamentaux, les contre-pouvoirs, l’État de droit et deux modèles du vivre-ensemble. Les mots chargés s’y apprennent comme des usages, jamais comme des positions. À la fin, tu écris une contribution de 250 à 350 mots à une consultation de quartier.',
    minutes: 170,
    difficulty: 4,
    glyph: '= ≈',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: NOTIONS_POLITIQUES_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, LECTURE_MODELE, LETTRE_GERALD, dicteeFor };
export const lessonWithoutTask = (): Lesson => LESSON;
