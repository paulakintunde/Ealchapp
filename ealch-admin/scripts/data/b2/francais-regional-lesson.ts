// b2.31.l1 « Les accents et le français régional »: the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE: a TEXT
// and a MOVE per act) on top of B1-BUILD-PLAYBOOK.md, with the B2 rules of
// B2-BUILD-LOG.md. The second lesson of Unit 6 (culture, variation, nuance).
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   RECEPTIVE. The learner meets a variety, learns to hear and read it, and
//   says what it is and where it comes from. He or she is never asked to
//   imitate an accent, and no variety is ever called wrong. The TTS voice is
//   fr-FR: the lesson says so on screen, teaches accent features through
//   notation and description, and every studio brief names the lines that
//   need a real regional voice later (B2-BUILD-LOG, « Listening at B2 »).
//
//   Every act from 2 to 10 is built around ONE ANCHOR TEXT (200 to 350
//   words, labelled « texte original écrit pour la leçon ») and ONE MOVE, in
//   the same beats:
//
//     1. MEET THE TEXT     a `reading`, questions behind `questionsInModal`,
//                          each LABELLED: « Devine le sens » first, then
//                          « Question globale », « Détail », « Inférence »
//                          and « Ton et position ». Glossary 0 to 2.
//     2. NOTICE THE MOVE   a `cardDeck`, `tapTable`, `examples` or `hacks`,
//                          linked to a sheet.
//     3. PRACTISE          one or two checks on NEW material (groupDrill,
//                          trapDrill, commonErrors, a hidden listening).
//     4. USE IT            « Pour ta lettre », always the same groupDrill
//                          shape: a line for the final letter built with
//                          this act's move, against the line a careless
//                          writer would put (a judgement, a vague region).
//                          Act 9 uses a short scenario instead.
//     5. IN A TEXT         from act 3 on, « Dans un texte »: a NEW text of
//                          60 to 120 words (a forum post, a menu, text
//                          messages, a dialogue, an email), answers behind
//                          the modal.
//
//   then the act check (control pages, gated). Act 1 is the problem scene;
//   act 11 is the production act (the task and the closing sections).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Pardon, je n’ai pas bien saisi  6  a Montréal dépanneur (scene), a
//                                         newcomer's forum post · blame the
//                                         accent, or ask for the missing part
//    2  Une langue, plusieurs centres   6  a magazine explainer · pluricentric
//                                         French, the shared written form,
//                                         the français de référence
//    3  Le Québec à l’oreille            7  a radio column · affrication,
//                                         relâchement, diphthongs, moé / toé,
//                                         patte / pâte; joual
//    4  Le Québec, les mots              8  a colleague's email · the meals,
//                                         dépanneur, magasiner, blonde / chum,
//                                         char, présentement, tuque, sacres
//                                         as a category (+ a voicemail)
//    5  La Belgique et la Suisse         7  a travel blog · septante, huitante,
//                                         nonante, à tantôt, s’il vous plaît,
//                                         GSM, natel, drache, kot, savoir,
//                                         une fois (+ a phone call)
//    6  En France aussi, des accents     7  a testimony from Toulouse · the
//                                         Midi, chocolatine, insécurité,
//                                         glottophobie
//    7  Le français en Afrique           7  an intern's blog · Côte d’Ivoire,
//                                         Sénégal, Cameroun, country by
//                                         country (+ a lunch at a maquis)
//    8  Les langues en contact           7  a magazine article · Creoles as
//                                         languages, Acadia, chiac, Arabic
//                                         borrowings
//    9  Quand tu ne comprends pas        8  an advice column (+ a call to a
//                                         garage) · five strategies, staying
//                                         in French; a scenario
//   10  Respect et institutions          7  a Brussels column · insécurité,
//                                         OQLF, DGLFLF, Académie, OIF
//   11  Ta lettre                       11  a student's blog in Liège · plan,
//                                         scenario, TASK, practice, quiz,
//                                         review
//
//   TOTAL 81 missions, 11 acts (6,6,7,8,7,7,7,7,8,7,11). Corpus: 193
//   authored rows (.1000-.1192) plus 33 reused seed rows. 11 anchor
//   readings, 8 « Dans un texte » texts, 4 hidden listenings (+ the DELF B2
//   CO round). Quiz: 11 rounds of 8 (one per act 2 to 10, a recycling
//   round, a DELF B2 CO round). Eleven error triggers, eleven drills, five
//   sheets, eleven terms. Chapter artwork: `francais-regional-image-prompts.md`,
//   eleven prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Tout le monde a un accent : il dit d’où l’on vient, jamais ce qu’on
//   vaut. »
//   EN: Everyone has an accent: it says where you come from, never what you
//   are worth.
//
//   ONE METAPHOR, UN ACCENT EST UNE ADRESSE: acts 3 to 8 read the address,
//   acts 1, 2, 6 and 10 refuse to read it as a grade, act 9 finds the way to
//   the meaning when the address is unfamiliar. Rejected candidates and why:
//   corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    regional French and accents at B2, receptive: pluricentric
//           French and the français de référence, the audible features of
//           Québec French, Québec, Belgian, Swiss, southern French, Ivorian,
//           Senegalese and Cameroonian everyday words, Creoles as languages,
//           Acadia and chiac, Arabic borrowings, strategies for an unfamiliar
//           accent, linguistic insecurity, the language institutions.
//   QUOTES  the reframes of lessons 25, 26 and 38 in B1 and 24, 25 and 30
//           in B2, re-exported from their corpus files.
//   LEAVES  register as a system (lesson 25 in B1), tu and vous (lesson 26
//           in B1), repetition on the phone (lesson 38 in B1), slang and
//           verlan (lesson 32 in B2, named in the roundup).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use what the situation needs. Natural B2
//   French; English on every learner string (`en`, or a final « EN: »),
//   never on an answer. Every `say` is French. Citations by trail position
//   in French, never a raw id (A1, A2 1-36, B1 1-39, B2 1-34 only). No
//   spaced « ? » or « ! » in a scene bubble. Typographic ’ everywhere
//   authored. Mission answer slots spread by `spreadMissions()` (options and
//   index rotated together, no text changed, no `why` names a position); the
//   quiz by `spreadSlots()`. Gate B2-2 spoken-variant decision: the dropped
//   ne in the garage call (« je peux pas ») is a character's speech, named
//   as familier, never a model.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. FACT CHECK. Every regional item and claim is listed with its region
//      and my confidence in the corpus header §A.7 (two at M: Geneva
//      « plutôt quatre-vingts », and the Belgian and Swiss language bodies
//      named in a sheet). Items I was not sure of were left out.
//   2. « Deuxième bureau » and « enceinter » (act 7) are real, frequent and
//      adult; they are named once each, neutrally. Keep, or drop?
//   3. `Lesson.skill` is 'CO' (the lesson remediates understanding speakers
//      of other varieties), although the task is written. Nothing routes
//      here from EXAM_PREP_TARGETS. Agree, or 'PE'?
//   4. Rubric: five criteria, 12 points (tâche 3, cohérence 3, étendue 2,
//      correction 2, registre 2), the B2 grid of lessons 23 and 30 in B2.
//   5. The studio briefs ask for real Québécois, Belgian, Swiss, southern,
//      Ivorian, Senegalese and Martinican voices for the recordings; until
//      then TTS reads every line in a French of France, and the lesson says
//      so on screen.
//   6. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' is inert; kept.
//      The eleven openers need art (ART_PENDING until Paul's images land).

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE,
  DEPANNEUR, MAGASINER, SOUPE, CHARTE, CHAR_S, BLONDE_S, PLATE_S, CHUM_S, QC_RULE,
  CHAR, BLONDE, CHUM, PANTOUTE, PLATE, PRESENTEMENT, FIN_SEMAINE, SEPTANTE_S, NONANTE_S,
  TANTOT_S, SOUPER_S, TU_QC, TU_CHALEUREUX, VOUS_DAKAR, TONTON, PAYS_RULE, CREOLE_S,
  REPETER, DIT_OU, SI_COMPRENDS, BIEN_CA, REPETER_RULE, EPELER, ECRIRE, TUQUE,
  TEXTE_HANNAH, TEXTE_CENTRES, TEXTE_CHRONIQUE, TEXTE_JULIE, TEXTE_WEEKEND, TEXTE_TOULOUSE,
  TEXTE_CAMILLE, TEXTE_CONTACT, TEXTE_CONSEILS, TEXTE_NADIA, TEXTE_RAVI,
  DANS_A3, DANS_A4, DANS_A5, DANS_A6, DANS_A7, DANS_A8, DANS_A9, DANS_A10,
  MESSAGE_LINES, CYCLES_LINES, MAQUIS_LINES, GARAGE_LINES, ENTREVUE_LINES,
  B125_REFRAME, B125_REFRAME_EN, B126_REFRAME, B126_REFRAME_EN, B138_REFRAME, B138_REFRAME_EN,
  B224_REFRAME, B224_REFRAME_EN, B225_REFRAME, B225_REFRAME_EN, B230_REFRAME, B230_REFRAME_EN,
  NOMBRES_REF, NEGATION_REF, REGISTRES_REF, TU_VOUS_REF, ECOUTE_B1_REF, SI_PASSE_REF,
  CRITIQUE_REF, ECOUTE_B2_REF, LITTERATURE_REF, ARGOT_REF,
  REGISTRES_UNIT, TU_VOUS_UNIT, ECOUTE_B1_UNIT, ECOUTE_B2_UNIT, NOMBRES_UNIT,
} from './francais-regional-corpus.ts';
import { FRANCAIS_REGIONAL_TERMS } from './francais-regional-terms.ts';

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

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.31: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.31: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.31: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const free = (f: string, e: string, note?: string): GItem => ({ fr: f, en: e, ...(note ? { note } : {}) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** A trap card: the WRONG belief in promptSound (never spoken), the row's
 *  correct French in fr. */
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

/** USE IT: the act's one tool for the letter. Always the same title. */
function pourTaLettre(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ta lettre', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/** IN A TEXT: the 60 to 120 word text that closes acts 3 to 10, answers
 *  behind the modal. Always the same title. */
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

/** The line every accent card carries, so no screen pretends the TTS voice
 *  has a regional accent. */
const VOIX = 'La voix de l’appli parle un français de France : l’accent, ici, se lit dans la notation.';

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: PARDON, JE N’AI PAS BIEN SAISI
 *
 *  The problem: in a Montréal dépanneur, a fast familiar question. The
 *  failing instinct is to blame the accent. NO « ? » OR « ! » IN ANY BUBBLE:
 *  the cashier's question itself is only narrated and shown in the break.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Au dépanneur', frSub: 'Une question, très vite',
  setting: { place: 'Un dépanneur de la rue Masson', city: 'Montréal', time: 'samedi, 9 h', ambience: 'une caisse, une file de clients, la neige derrière la vitrine' },
  beats: [
    { kind: 'narration', text: 'Un samedi matin de janvier, dans un dépanneur de la rue Masson, à Montréal. Tu vis ici depuis une semaine. Tu poses un litre de lait et un pain sur le comptoir.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'La caissière', fr: 'Bonjour. Juste ça, le lait et le pain.', en: 'Hello. Just that, the milk and the bread.', respell: '[bohⁿ-ZHOOR | zhüst SA | luh LEH | ay luh PEHⁿ]', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'Elle ajoute une question, très vite, en souriant. Tu n’attrapes que le dernier mot : « sac ». Derrière toi, la file s’allonge.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Que lui dis-tu ?', size: 'lg',
      options: [
        { fr: fr(E(1000)), respell: rsOf(E(1000)), en: en(E(1000)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1001)), respell: rsOf(E(1001)), en: en(E(1001)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Elle répète, plus lentement : « Je vous demandais si vous vouliez un sac. » Tu réponds oui, elle sourit, et la file avance.',
        breaks: 'Son sourire se fige. « Mon accent ? » Elle répète la question en anglais, poliment mais sans chaleur, et la conversation s’arrête là.',
      },
    },
    {
      kind: 'break', heading: 'Ce n’était pas l’accent',
      body: `Elle avait demandé « ${fr(E(1003))} », une question familière très courante au Québec : le second tu marque seulement la question. Il fallait demander la partie qui manquait, pas juger l’accent. EN: Ask for the missing part, never blame the accent.`,
      wrong: { fr: fr(E(1000)), ipa: ipaOf(E(1000)), respell: rsOf(E(1000)), en: en(E(1000)) },
      right: { fr: fr(E(1001)), ipa: ipaOf(E(1001)), respell: rsOf(E(1001)), en: en(E(1001)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'bubble', from: 'them', speaker: 'La caissière', fr: fr(E(1002)), en: en(E(1002)), respell: rsOf(E(1002)), size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: 'Oui, s’il vous plaît. Merci beaucoup.', en: 'Yes, please. Thank you very much.', respell: '[WEE | seel voo PLEH | mehr-see boh-KOO]', size: 'md', audio: AUDIO },
    { kind: 'resolve', text: 'Cette leçon t’apprend à comprendre le français d’ailleurs, du Québec à Dakar, de Bruxelles à Fort-de-France, sans jamais juger un accent. À la fin, tu écriras une lettre de 200 à 250 mots sur une conversation que tu n’as pas comprise tout de suite.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['accent', 'repeter'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Savoir ce qu’est un accent', s: 'Actes 2 et 6 : plusieurs centres, une référence, aucun accent supérieur' },
    { t: 'Reconnaître le français d’ailleurs', s: 'Actes 3 à 8 : le Québec, la Belgique, la Suisse, le Midi, l’Afrique, les créoles' },
    { t: 'Comprendre sans passer à l’anglais', s: 'Acte 9 : cinq gestes quand tu ne comprends pas' },
    { t: 'Écrire avec respect', s: 'Actes 10 et 11 : les attitudes, les institutions, ta lettre' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE = lecture('a1-lecture', 'Trois mois à Montréal', 'Un message sur un forum', TEXTE_HANNAH,
  [{ word: 'dépanneur', en: 'convenience store (Québec)', note: 'La petite épicerie du coin, ouverte tard.' }],
  [
    { q: 'Devine le sens. « Je sentais que quelque chose se refermait. » Qu’est-ce qui se refermait ?', a: 'La conversation en français, et une forme de proximité : les gens restaient polis, mais la relation devenait plus distante.' },
    { q: 'Question globale. Que raconte Hannah dans ce message ?', a: 'Ses trois premiers mois à Montréal : elle ne comprenait pas le français d’ici, puis elle a changé de méthode, et elle comprend presque tout.' },
    { q: 'Détail. Pourquoi est-elle arrivée trop tard chez son collègue ?', a: 'Au Québec, le dîner est le repas de midi ; le soir, on soupe. Elle est venue à sept heures du soir.' },
    { q: 'Inférence. Pourquoi la caissière lui dit-elle « Voyons, tu parles français, toi ! » ?', a: 'Pour l’encourager à rester en français : elle voit qu’Hannah le parle, et elle préfère continuer dans cette langue.' },
    { q: 'Inférence. Pourquoi Hannah ne dit-elle plus jamais « votre accent » ?', a: 'Parce que le problème ne venait pas de l’accent des gens, mais de ce qu’elle n’avait pas encore entendu ; et la remarque blesse.' },
    { q: 'Ton et position. Comment Hannah voit-elle les accents aujourd’hui ? Par quels mots le sais-tu ?', a: 'Sans jugement, avec humour : « ici, c’est moi qui ai un accent, et personne ne me le reproche ».' },
  ], 'rec-b2-31-hannah', ['accent', 'repeter']);

const A1_REFLEXES: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-reflexes', layer: 'core', size: 'lg',
  title: 'Deux réflexes', frSub: 'Au début, puis maintenant',
  groups: [
    grp('Ce que Hannah faisait au début', [
      it(E(1008), 'la panique des premiers jours'),
      it(E(1006), 'le prix de l’anglais'),
      it(E(1000), 'la phrase qu’elle ne dit plus'),
    ], chk('Pourquoi passer à l’anglais « refermait » quelque chose ?', ['la conversation continuait, mais plus en français, et plus froide', 'les gens refusaient de lui répondre'], 0,
      'On lui répondait gentiment, mais en anglais : elle perdait la relation en français. EN: people stayed polite, but the French conversation was gone.')),
    grp('Ce qu’elle fait maintenant', [
      it(E(1001), 'demander la partie qui manque'),
      it(E(1009), 'ce que ça produit'),
      it(E(1012), 'la règle qu’elle s’est donnée'),
    ], chk('Qu’a changé la phrase « Pardon, je n’ai pas bien saisi » ?', ['les gens répètent, presque toujours avec le sourire', 'les gens passent à l’anglais'], 0,
      'Tu demandes de l’aide sans juger personne : on te la donne volontiers. EN: a polite request gets a friendly repeat.')),
    ctl('La phrase de la leçon', `« ${REFRAME} » Qu’est-ce qu’un accent dit d’une personne ?`, ['d’où elle vient', 'si elle parle bien'], 0,
      'Une adresse, pas une note. EN: where she comes from, not a grade.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['accent', 'repeter'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment',
  cases: [
    { situation: 'À la caisse d’un dépanneur, à Montréal', fr: fr(E(1001)), en: en(E(1001)) },
    { situation: 'En réunion avec des collègues de Bruxelles', fr: fr(E(1007)), en: en(E(1007)) },
    { situation: 'Un ami se moque d’un accent du Sud', fr: fr(E(1005)), en: en(E(1005)) },
    { situation: 'Au téléphone avec une cliente d’Abidjan', fr: fr(E(1010)), en: en(E(1010)) },
  ],
  audio: AUDIO, say: REFRAME, terms: ['accent'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le réflexe', 'Tu n’as pas compris une question au dépanneur. Tu dis…', ['« Pardon, je n’ai pas bien saisi. »', '« Je ne comprends pas votre accent. »'], 0,
    'Tu demandes la partie qui manque, sans juger. EN: ask, do not judge.'),
  ctl('L’anglais', 'Passer tout de suite à l’anglais, c’est souvent…', ['refermer la conversation en français', 'rendre service à tout le monde', 'obligatoire au Québec'], 0,
    'On te répondra poliment, mais la relation change. EN: it often closes the French conversation.'),
  ctl('La mission', 'À la fin de la leçon, tu écris…', ['une lettre sur une conversation que tu n’as pas comprise tout de suite', 'une liste de mots québécois'], 0,
    'Ce qui s’est passé, les mots et leur région, ce que tu as appris, ce que tu ferais aujourd’hui. EN: a letter about a misunderstanding.'),
], ['accent', 'repeter']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Pardon, je n’ai pas bien saisi',
    opener: {
      line: 'Une caissière de Montréal te pose une question que tu ne saisis pas : ici tu apprends à demander, pas à juger l’accent. EN: A Montréal cashier asks you something you do not catch: here you learn to ask, not to blame the accent.',
      imageRef: 'lessons/francais-regional/act01.jpg',
    },
    sections: [],
    milestone: 'Tu demandes la partie qui manque au lieu d’accuser l’accent ou de passer à l’anglais. EN: You ask for the missing part instead of blaming the accent or switching to English.',
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REFLEXES, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: UNE LANGUE, PLUSIEURS CENTRES
 *
 *  TEXT: a magazine explainer. MOVE: French has several centres and one
 *  shared written form; the français de référence is a landmark, not a
 *  measure of people.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE = lecture('a2-lecture', 'Qui parle le « vrai » français ?', 'Un article de magazine', TEXTE_CENTRES,
  [{ word: 'pluricentrique', en: 'pluricentric', note: 'Qui a plusieurs centres, plusieurs normes reconnues.' }],
  [
    { q: 'Devine le sens. « Faut-il en conclure que tout se vaut ? » Que veut dire « tout se vaut » ?', a: 'Que tout a la même valeur, qu’il n’y a plus aucune différence entre les façons de parler.' },
    { q: 'Question globale. Quelle idée l’article défend-il ?', a: 'Le français a plusieurs centres ; l’écrit est presque commun, l’oral varie, et aucun accent n’est le seul « vrai ».' },
    { q: 'Détail. Qu’est-ce que les francophones partagent à l’écrit ?', a: 'L’orthographe, la grammaire et l’essentiel du vocabulaire.' },
    { q: 'Inférence. Pourquoi l’auteur met-il « vrai » entre guillemets ?', a: 'Pour prendre ses distances avec l’idée d’un seul vrai français : il cite une opinion qu’il ne partage pas.' },
    { q: 'Inférence. Pourquoi rappeler qu’à Paris aussi, on a un accent ?', a: 'Pour montrer que le français de référence n’est l’accent de personne : même Paris a le sien.' },
    { q: 'Ton et position. Que pense l’auteur du français de référence ?', a: 'Qu’il est utile comme repère, mais qu’il ne doit pas servir à juger la valeur des gens : « Le piège serait d’en faire une mesure de la valeur des gens. »' },
  ], 'rec-b2-31-centres', ['centres', 'reference']);

const A2_CENTRES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-centres', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-centres',
  title: 'Une langue, plusieurs centres', frSub: 'Ce qui est commun, ce qui varie',
  hint: 'Quatre cartes. Demande-toi chaque fois si l’on parle de l’écrit ou de l’oral.',
  audio: REC('rec-b2-31-centres-cartes'), say: REFRAME, terms: ['centres', 'reference'],
  cards: [
    { head: 'Plusieurs centres', label: 'pluricentrique', fr: fr(E(1013)), sub: rsOf(E(1013)),
      body: 'La France, le Québec, la Belgique, la Suisse et les pays d’Afrique francophone ont chacun leurs mots et leurs accents. Le Québec a même son dictionnaire du français standard. EN: several centres, each with its own habits.' },
    { head: 'Un écrit commun', label: 'l’écrit', fr: fr(E(1015)), sub: rsOf(E(1015)),
      body: 'Orthographe, grammaire, l’essentiel du vocabulaire : un journal de Dakar se lit à Genève. C’est l’oral qui varie. EN: writing is shared; speech varies.' },
    { head: 'Le français de référence', label: 'un repère', fr: fr(E(1021)), sub: rsOf(E(1021)),
      body: 'La forme des dictionnaires, des manuels et des examens. Utile pour apprendre et pour écrire ; personne ne la parle exactement. EN: a landmark, not a better accent.' },
    { head: 'Paris aussi', label: 'un accent parmi d’autres', fr: fr(E(1026)), sub: rsOf(E(1026)),
      body: 'L’accent de Paris s’entend partout à la télévision, alors on l’oublie. Mais c’est un accent, comme celui de Liège ou d’Abidjan. EN: Paris has an accent too.' },
  ],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-trier', layer: 'core', size: 'lg',
  title: 'Commun ou variable', frSub: 'L’écrit, l’oral, les centres',
  groups: [
    grp('Ce qui est commun', [
      it(E(1014), 'une preuve'),
      it(E(1015), 'l’écrit'),
      it(E(1022), 'la limite de la référence'),
    ], chk('Un article écrit à Montréal paraît dans un journal de Lyon. Le lecteur lyonnais…', ['le lit sans peine, à quelques mots près', 'a besoin d’une traduction'], 0,
      'L’écrit est commun ; seuls quelques mots d’ici peuvent l’arrêter. EN: writing travels with almost no loss.')),
    grp('Ce qui varie', [
      it(E(1016), 'la musique'),
      it(E(1020), 'le mot d’une région'),
      it(E(1019), 'le nom savant'),
      it(E(1023), 'un centre qui a son dictionnaire'),
    ], chk('« Une variété de français », c’est…', ['la façon de parler d’une région ou d’un pays', 'un français incorrect'], 0,
      'Le mot est neutre : il décrit, il ne juge pas. EN: a neutral word for a regional or national form.')),
    ctl('Les chiffres', 'Selon l’OIF, où vivent la plupart des gens qui parlent français chaque jour ?', ['en Afrique', 'en France', 'au Canada'], 0,
      'La majorité des locuteurs quotidiens vivent aujourd’hui en Afrique. EN: most daily speakers live in Africa.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['centres', 'regionalisme'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a2-piege', layer: 'core', swipe: true,
  title: 'Six idées reçues à corriger',
  rule: {
    title: 'Plusieurs centres, un écrit commun',
    body: 'Le français n’a pas de capitale unique. L’écrit est presque le même partout ; l’oral varie, et le français de référence est un repère, pas un accent supérieur. EN: several centres, one shared written form, a reference that ranks no one.',
  },
  cards: [
    trap(E(1013), 'un seul centre', 'Le vrai français se parle à Paris.', 'Paris est un centre parmi d’autres. EN: one centre among several.'),
    trap(E(1026), 'Paris sans accent', 'À Paris, on parle sans accent.', 'On ne l’entend plus, parce qu’il est partout à la télévision. EN: it is an accent you no longer notice.'),
    trap(E(1022), 'le manuel parlé', 'Les Français parlent comme les manuels.', 'Personne ne parle exactement la langue des manuels. EN: nobody speaks textbook French.'),
    trap(E(1027), 'le mot régional', 'Un mot régional est une faute.', 'C’est un régionalisme : un mot d’ailleurs, pas une erreur. EN: a regionalism, not an error.'),
    trap(E(1015), 'l’écrit éclaté', 'Chaque pays écrit un français différent.', 'L’orthographe et la grammaire sont communes. EN: spelling and grammar are shared.'),
    trap(E(1024), 'la francophonie oubliée', 'La plupart des francophones vivent en France.', 'La majorité des locuteurs quotidiens vivent en Afrique. EN: most live in Africa.'),
  ],
  drill: [
    { promptSay: 'Le français est une langue ... : il a plusieurs centres.', opts: ['pluricentrique', 'régionale'], correct: 0 },
    { promptSay: 'À l’écrit, les francophones partagent presque ... .', opts: ['tout', 'rien'], correct: 0 },
    { promptSay: 'Le français de référence est un repère ... .', opts: ['utile', 'obligatoire à l’oral', 'parisien'], correct: 0 },
    { promptSay: 'Un mot propre à une région s’appelle un ... .', opts: ['régionalisme', 'barbarisme'], correct: 0 },
    { promptSay: 'Au Québec, le dictionnaire ... décrit le français standard d’ici.', opts: ['Usito', 'Larousse'], correct: 0 },
    { promptSay: 'La plupart des gens qui parlent français chaque jour vivent en ... .', opts: ['Afrique', 'France', 'Belgique'], correct: 0 },
    { promptSay: 'Le français de Paris est un accent ... d’autres.', opts: ['parmi', 'au-dessus'], correct: 0 },
    { promptSay: 'À l’oral, chaque région a sa ... .', opts: ['musique', 'orthographe'], correct: 0 },
  ],
  steps: STEPS('Plusieurs centres, un écrit commun', 'Ce qu’on entend souvent dire'),
  audio: REC('rec-b2-31-piege-centres'), say: REFRAME, terms: ['centres', 'reference'],
};

const A2_LETTRE = pourTaLettre('a2-lettre', 'Tu décris, tu ne juges pas', [
  grp('Parler d’un mot d’ailleurs', [
    it(E(1027), 'le mot juste'),
    free('Il parle mal : il dit des mots bizarres.', 'He speaks badly: he says weird words.', 'un jugement'),
  ], chk('Laquelle a sa place dans ta lettre ?', ['« Ce mot n’est pas une faute : c’est un régionalisme. »', '« Il parle mal : il dit des mots bizarres. »'], 0,
    'La première décrit ; la seconde juge une personne. EN: describe, do not judge.')),
  grp('Nommer la région', [
    it(E(1028), 'ta méthode'),
    it(E(1029), 'une phrase modèle'),
  ], chk('Que gagne ton lecteur quand tu nommes la région d’un mot ?', ['il sait où il l’entendra', 'il sait que le mot est faux'], 0,
    'La région est une information, pas un défaut. EN: the region is information.')),
], ['regionalisme', 'centres']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Les centres', 'Combien de centres le français a-t-il ?', ['plusieurs', 'un seul, Paris'], 0,
    'La France, le Québec, la Belgique, la Suisse, l’Afrique francophone. EN: several.'),
  ctl('L’écrit', 'Qu’est-ce qui varie le moins d’un pays à l’autre ?', ['l’orthographe et la grammaire', 'l’accent', 'les mots du quotidien'], 0,
    'L’écrit est presque commun. EN: writing varies least.'),
  ctl('La référence', 'Le français de référence…', ['est un repère utile, que personne ne parle exactement', 'est l’accent de Paris'], 0,
    'Un outil commun, pas un modèle de valeur. EN: a tool, not a ranking.'),
], ['centres', 'reference']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Une langue, plusieurs centres',
    opener: {
      line: 'Montréal, Bruxelles, Dakar et Paris écrivent le même français, mais chacune a sa musique : ici tu vois pourquoi aucun accent n’est le vrai. EN: Montréal, Brussels, Dakar and Paris write the same French, each with its own music: here you see why no accent is the true one.',
      imageRef: 'lessons/francais-regional/act02.jpg',
    },
    sections: [],
    milestone: 'Tu expliques que le français a plusieurs centres, un écrit commun et une référence qui ne classe personne. EN: You can explain that French has several centres, a shared written form and a reference that ranks no one.',
    estScreens: 36, restPoints: ['a2-centres', 'a2-piege'],
  },
  sections: [A2_LECTURE, A2_CENTRES, A2_TRIER, A2_PIEGE, A2_LETTRE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: LE QUÉBEC À L’OREILLE
 *
 *  TEXT: a Montréal radio column on the sounds. MOVE: recognise the
 *  features of Québec pronunciation from their description and notation,
 *  hear the same word behind them, never imitate. The TTS voice says every
 *  word in a French of France; the cards say so (VOIX).
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE = lecture('a3-lecture', 'L’oreille du lundi', 'Une chronique de radio, à Montréal', TEXTE_CHRONIQUE,
  [{ word: 'bulletin de nouvelles', en: 'news bulletin (Québec)', note: 'Le journal parlé, à la radio ou à la télévision.' }],
  [
    { q: 'Devine le sens. « Les voyelles se relâchent. » Que fait une voyelle qui se relâche ?', a: 'Elle devient moins tendue, un peu plus ouverte : « vite » sonne un peu entre vite et vette.' },
    { q: 'Question globale. À quelle question la chronique répond-elle ?', a: 'Pourquoi une Lyonnaise entend « tsu » et « dzi » à Montréal : ce sont des traits réguliers du français québécois, pas des erreurs.' },
    { q: 'Détail. Devant quelles voyelles le t et le d changent-ils ?', a: 'Devant i et u : tu, dis, petit, lundi, midi.' },
    { q: 'Inférence. Pourquoi le chroniqueur cite-t-il le bulletin de nouvelles de Radio-Canada ?', a: 'Pour montrer que l’affrication n’est pas familière : on l’entend aussi dans la langue la plus soignée.' },
    { q: 'Inférence. Quel trait est présenté comme plus familier que les autres ?', a: 'Les diphtongues (« paère », « faète ») et « moé, toé », surtout en conversation détendue et chez certains locuteurs.' },
    { q: 'Ton et position. Que pense le chroniqueur de l’idée de « vieux français » ? Comment le sais-tu ?', a: 'Il la rejette, avec humour : les guillemets autour de « vieux français », puis « les règles d’une autre variété, aussi cohérente que celle de Paris ».' },
  ], 'rec-b2-31-chronique', ['affrication', 'accent']);

const A3_TRAITS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-traits', layer: 'core', sheetId: 'sheet-quebec',
  title: 'Six traits du français québécois',
  cols: ['Trait', 'Mots', 'À Montréal, tu entends'],
  rows: [
    { cells: ['t devant i, u', 'tu, petit', '« tsu », « petsi »'], say: fr(E(1030)),
      detail: { title: 'L’affrication du t', body: `Le t devant i ou u part avec un petit s. C’est la norme, jusqu’au bulletin de nouvelles. ${VOIX} EN: t before i or u sounds like ts.`, say: fr(E(1034)) } },
    { cells: ['d devant i, u', 'dis, lundi', '« dzi », « lundzi »'], say: fr(E(1030)),
      detail: { title: 'L’affrication du d', body: `Même règle pour le d, qui part avec un petit z : dis, dire, lundi, midi. ${VOIX} EN: d before i or u sounds like dz.`, say: fr(E(1035)) } },
    { cells: ['i, u, ou relâchés', 'vite, jupe, route', 'un peu plus ouverts'], say: fr(E(1036)),
      detail: { title: 'Le relâchement', body: 'Dans une syllabe terminée par une consonne, i, u et ou s’ouvrent un peu. L’oreille française croit entendre une autre voyelle ; le mot, lui, ne change pas. EN: vowels open slightly in closed syllables.', say: fr(E(1036)) } },
    { cells: ['voyelles longues', 'père, fête', '« paère », « faète »'], say: fr(E(1037)),
      detail: { title: 'Les diphtongues', body: `Surtout en conversation détendue, une voyelle longue et accentuée peut glisser vers une autre. ${VOIX} EN: long stressed vowels may glide, mostly in relaxed speech.`, say: fr(E(1037)) } },
    { cells: ['oi, en famille', 'moi, toi', '« moé », « toé »'], say: fr(E(1038)),
      detail: { title: 'Moé et toé', body: 'Une prononciation familière, chez certains locuteurs et surtout en famille. Tu la reconnais ; tu n’as pas à l’employer. EN: familiar, some speakers only.', say: fr(E(1038)) } },
    { cells: ['a et â', 'patte, pâte', 'deux voyelles distinctes'], say: fr(E(1039)),
      detail: { title: 'Patte et pâte', body: 'Beaucoup de Québécois distinguent encore ces deux a, que bien des Parisiens confondent. EN: two different a sounds.', say: fr(E(1039)) } },
  ],
  audio: REC('rec-b2-31-traits'), say: REFRAME, terms: ['affrication'],
};

const A3_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-reperer', layer: 'core', size: 'lg',
  title: 'Où l’oreille entend tsu et dzi', frSub: 'Repérer, sans imiter',
  groups: [
    grp('Le trait, dans une phrase', [
      it(E(1030), 'la phrase de la chronique'),
      it(E(1034), 'la règle'),
      it(E(1043), 'jusqu’à la radio'),
    ], chk('Dans « Tu dis que le petit arrive lundi midi », combien de fois entends-tu le trait à Montréal ?', ['cinq fois', 'deux fois', 'jamais'], 0,
      'Tu, dis, petit, lundi, midi : cinq t ou d devant i ou u. EN: five times.')),
    grp('Ce que ces sons ne disent pas', [
      it(E(1040), 'une adresse, pas une note'),
      it(E(1047), 'une idée reçue, corrigée'),
      it(E(1035), 'la radio aussi'),
    ], chk('Une collègue dit « faète » pour fête, dans une conversation détendue. Elle…', ['parle un français québécois familier', 'fait une faute de prononciation'], 0,
      'C’est un trait régulier de sa variété. EN: a regular feature, not a mistake.')),
    ctl('Le mot qui ne change pas', 'Dans lequel de ces mots le t ou le d ne change PAS au Québec ?', ['table', 'tu', 'dire'], 0,
      'Devant a, le t reste un t : seuls i et u déclenchent le trait. EN: only i and u trigger it.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['affrication'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a3-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre idées reçues sur l’accent québécois',
  errors: [
    { wrong: 'Les Québécois parlent un vieux français.', right: fr(E(1047)),
      why: 'L’idée est répandue : quelques mots anciens ont survécu. Mais la langue vit et change, comme partout. EN: some old words survive; the language is modern.' },
    { wrong: 'Le joual, c’est le français du Québec.', right: fr(E(1042)),
      why: 'Le mot circule beaucoup, grâce au théâtre et aux chansons. Il désigne une variété populaire, pas toute la langue. EN: joual is one popular variety.' },
    { wrong: 'À la radio, les Québécois prennent l’accent de Paris.', right: fr(E(1043)),
      why: 'On le croit parce que la langue des nouvelles est soignée. Mais soigné ne veut pas dire parisien. EN: careful, not Parisian.' },
    { wrong: 'Pour bien comprendre, il faut imiter leur accent.', right: fr(E(1045)),
      why: 'L’intention est bonne, mais une imitation s’entend comme une moquerie. L’oreille s’habitue sans elle. EN: imitation sounds like mockery.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['accent', 'affrication'],
};

const A3_LETTRE = pourTaLettre('a3-lettre', 'Tu décris un son sans te moquer', [
  grp('Décrire l’accent', [
    it(E(1046), 'ta règle'),
    free('Il parle bizarrement, on dirait qu’il siffle.', 'He talks funny, it sounds like he whistles.', 'une moquerie'),
  ], chk('Laquelle a sa place dans ta lettre ?', ['« Au Québec, tu se prononce presque tsu, et on s’y habitue vite. »', '« Il parle bizarrement, on dirait qu’il siffle. »'], 0,
    'La première décrit un trait et sa région ; la seconde se moque. EN: describe the feature and its region.')),
  grp('Dire ce que tu ne fais pas', [
    it(E(1044), 'reconnaître sans imiter'),
    it(TU_CHALEUREUX, Cap(TU_VOUS_REF)),
  ], chk('Pourquoi écrire que tu reconnais l’accent sans l’imiter ?', ['pour montrer ton respect', 'pour montrer que tu ne l’aimes pas'], 0,
    'Reconnaître, c’est comprendre ; imiter, c’est souvent se moquer. EN: recognising shows respect.')),
], ['affrication', 'accent']);

const A3_TEXTE = dansUnTexte('a3-texte', 'Une question sur un forum', DANS_A3, [
  { q: 'Qu’est-ce qui inquiète la personne qui pose la question ?', a: 'Elle croit que son professeur de Montréal a un défaut de prononciation, parce qu’il dit « tsu » pour tu.' },
  { q: 'Quelle preuve Mathieu donne-t-il que ce n’est pas un défaut ?', a: 'Tout le monde le fait au Québec, même les lecteurs de nouvelles à la télévision.' },
  { q: 'Quel conseil donne-t-il pour la suite ?', a: 'Écouter quelques semaines : l’oreille s’habitue, et on n’entend même plus le trait.' },
  { q: 'Pourquoi déconseille-t-il d’imiter le professeur ?', a: 'Parce que ce n’est pas nécessaire pour être compris, et qu’une imitation peut blesser : il vaut mieux parler avec sa propre voix.' },
], 'rec-b2-31-texte-a3', ['affrication']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le trait', 'À Montréal, tu sonne presque « tsu » parce que…', ['le t change devant i et u', 'la personne parle vite'], 0,
    'C’est l’affrication, une règle de la variété. EN: t changes before i and u.'),
  ctl('Le registre', 'On entend l’affrication…', ['chez tout le monde, radio comprise', 'seulement en famille', 'seulement chez les jeunes'], 0,
    'Elle fait partie du français standard du Québec. EN: in every register.'),
  ctl('Ton rôle', 'Face à un trait que tu ne connais pas, tu…', ['le reconnais et écoutes le sens', 'l’imites pour faire plaisir'], 0,
    'Un autre son, le même mot. EN: recognise, do not imitate.'),
], ['affrication']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Le Québec à l’oreille',
    opener: {
      line: 'Tu attends tu et tu entends tsu : ici tu apprends à reconnaître les sons du Québec et le même mot derrière eux. EN: You expect tu and hear tsu: here you learn to recognise the sounds of Québec and the same word behind them.',
      imageRef: 'lessons/francais-regional/act03.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais l’affrication, le relâchement et les diphtongues du Québec, et tu sais qu’aucun n’est une faute. EN: You can recognise Québec affrication, laxing and diphthongs, and you know none of them is a mistake.',
    estScreens: 40, restPoints: ['a3-traits', 'a3-erreurs'],
  },
  sections: [A3_LECTURE, A3_TRAITS, A3_REPERER, A3_ERREURS, A3_LETTRE, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: LE QUÉBEC, LES MOTS
 *
 *  TEXT: an email from a colleague in Québec City. MOVE: read the everyday
 *  words (the meals, the shop, the couple, the weather) with their register,
 *  and keep a familiar word familiar. Lesson 25 in B1's rows are REUSED. The
 *  sacres are named as a category and NONE is ever written.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE = lecture('a4-lecture', 'Ta première fin de semaine à Québec', 'Le courriel d’une collègue', TEXTE_JULIE,
  [
    { word: 'tourtière', en: 'meat pie (Québec)', note: 'Une tourte à la viande, le plat des fêtes au Québec.' },
    { word: 'mitaines', en: 'mittens (Québec)', note: 'Des gants sans doigts séparés, sauf le pouce.' },
  ],
  [
    { q: 'Devine le sens. « Si ça te tente, on pourrait aller magasiner. » Que veut dire « si ça te tente » ?', a: 'Si tu en as envie.' },
    { q: 'Question globale. Pourquoi Julie écrit-elle ce courriel ?', a: 'Pour accueillir sa future collègue et lui donner des conseils pratiques pour sa première fin de semaine à Québec.' },
    { q: 'Détail. À quelle heure faut-il arriver chez Julie samedi, et pour quel repas ?', a: 'Vers dix-huit heures, pour le souper, le repas du soir.' },
    { q: 'Inférence. Pourquoi Julie précise-t-elle le sens de souper, dîner et déjeuner ?', a: 'Parce qu’elle sait qu’en France, les mêmes mots désignent d’autres repas : elle veut éviter un malentendu.' },
    { q: 'Inférence. Que veut dire « c’est plate au début » ?', a: 'Que c’est ennuyeux, un peu décourageant au début ; une expression familière du Québec.' },
    { q: 'Ton et position. Quel ton Julie adopte-t-elle, et quels mots le montrent ?', a: 'Chaleureux et familier : « Salut ! », le tu, « mon chum », « c’est plate », « On a hâte de te rencontrer ».' },
  ], 'rec-b2-31-julie', ['repas', 'regionalisme']);

const A4_MOTS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-mots', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-quebec',
  title: 'Les mots du quotidien, au Québec', frSub: 'Le sens, puis le registre',
  hint: 'Quatre cartes. Pour chaque mot, demande-toi s’il est familier ou courant.',
  audio: REC('rec-b2-31-mots'), say: REFRAME, terms: ['repas', 'regionalisme'],
  cards: [
    { head: 'Trois repas', label: 'déjeuner, dîner, souper', fr: fr(E(1048)), sub: rsOf(E(1048)),
      body: 'Là où la France dit petit-déjeuner, déjeuner et dîner. Une invitation à dîner, à Québec, c’est à midi. EN: dîner is lunch and souper is the evening meal.' },
    { head: 'Le couple', label: Cap(REGISTRES_REF), fr: fr(BLONDE_S), sub: rsOf(BLONDE_S),
      body: `Ma blonde, mon chum : ma copine, mon copain. Des mots familiers, qu’on entend partout. « ${B125_REFRAME} » EN: ${B125_REFRAME_EN}` },
    { head: 'Le quotidien', label: 'dépanneur, magasiner', fr: fr(E(1054)), sub: rsOf(E(1054)),
      body: 'Le dépanneur, c’est l’épicerie du coin ; magasiner, faire les magasins ; une tuque, un bonnet ; un breuvage, une boisson. EN: the corner store, shopping, a hat, a drink.' },
    { head: 'Familier ou courant', label: 'le registre', fr: fr(CHAR_S), sub: rsOf(CHAR_S),
      body: 'Char et c’est plate sont familiers. Courriel, fin de semaine, présentement et magasiner sont courants : on les écrit au bureau. EN: some words are familiar, others fine at work.' },
  ],
};

const A4_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-trier', layer: 'core', size: 'lg',
  title: 'Le bon repas, le bon registre', frSub: 'Des mots de tous les jours',
  groups: [
    grp('Le bon repas', [
      it(E(1059), 'au Québec'),
      it(SOUPER_S, 'Québec et France'),
      it(SOUPE, 'une question de tous les jours'),
    ], chk('Julie t’invite à souper samedi. Tu arrives…', ['vers dix-huit heures', 'vers midi'], 0,
      'Le souper est le repas du soir ; le dîner, celui de midi. EN: souper is in the evening.')),
    grp('Familier ou courant', [
      it(PLATE_S, 'familier'),
      it(E(1056), 'courant au Québec'),
      it(E(1058), 'courant partout'),
    ], chk('Lequel peux-tu écrire dans un courriel de travail à Québec ?', ['présentement', 'c’est plate'], 0,
      'Présentement est courant ; c’est plate reste familier. EN: présentement fits a work email.')),
    ctl('Les sacres', 'Tu entends des sacres pendant un match de hockey. Tu…', ['les reconnais au ton, sans les répéter', 'les apprends pour t’intégrer'], 0,
      'Ce sont des jurons, souvent tirés du vocabulaire religieux : les reconnaître suffit. EN: recognise them, do not repeat them.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['repas', 'regionalisme'],
};

/** `hideLines`: the questions are about what the ear caught. */
const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'Un message de Julie', frSub: 'Écoute sans lire',
  lines: MESSAGE_LINES,
  questions: [
    { q: 'Quand le repas a-t-il lieu, finalement ?', opts: ['dimanche, à midi', 'samedi soir', 'dimanche soir'], correct: 0,
      why: 'On dîne dimanche, à midi : au Québec, le dîner est le repas du midi. EN: Sunday at noon.' },
    { q: 'Que veut dire « si ça te tente », dans le message ?', opts: ['si tu en as envie', 'si tu as le temps'], correct: 0,
      why: 'Une tournure courante au Québec pour proposer sans insister. EN: if you feel like it.' },
    { q: 'Que faut-il apporter ?', opts: ['une tuque et des mitaines', 'un parapluie', 'la tourtière'], correct: 0,
      why: 'Il va faire moins quinze : un bonnet et des moufles. EN: a hat and mittens.' },
    { q: 'Pourquoi répondre par courriel ?', opts: ['son cellulaire est presque déchargé', 'elle n’a pas de téléphone'], correct: 0,
      why: 'Le cellulaire, c’est le portable. EN: her phone is almost dead.' },
    { q: 'Quel repère Julie donne-t-elle pour trouver chez elle ?', opts: ['le dépanneur au coin de la rue', 'le Vieux-Québec'], correct: 0,
      why: 'Elle habite juste à côté du dépanneur. EN: the corner store.' },
  ],
  audio: REC('rec-b2-31-message'), say: REFRAME, terms: ['repas'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a4-piege', layer: 'core', swipe: true,
  title: 'Six mots qui trompent',
  rule: {
    title: 'Un mot connu, un autre sens',
    body: 'Blonde, dîner, déjeuner, char, bienvenue, présentement : des mots que tu connais, avec un autre sens ou un autre usage au Québec. Vérifie le sens avant de conclure. EN: familiar words can carry another meaning in Québec.',
  },
  cards: [
    trap(E(1064), 'blonde', 'Sa blonde ? Elle a pourtant les cheveux bruns.', 'La blonde, c’est la copine. EN: blonde means girlfriend.'),
    trap(E(1059), 'le dîner', 'Le dîner, c’est forcément le repas du soir.', 'Au Québec, le dîner est à midi. EN: dîner is at noon.'),
    trap(E(1048), 'le déjeuner', 'Au Québec, le déjeuner se prend à midi.', 'Le déjeuner est le repas du matin. EN: déjeuner is breakfast.'),
    trap(CHAR_S, 'un char', 'Au Québec, un char, c’est un char d’assaut.', 'Un char, familier, c’est une voiture. EN: a car, informally.'),
    trap(E(1053), 'bienvenue', 'On te dit « bienvenue » après ton merci : on croit que tu viens d’arriver.', 'C’est la réponse à un merci. EN: it means you are welcome.'),
    trap(E(1056), 'présentement', '« Présentement » est une faute pour « actuellement ».', 'Il est courant au Québec et en Afrique de l’Ouest. EN: a normal word there.'),
  ],
  drill: [
    { promptSay: 'Au Québec, on déjeune le ... .', opts: ['matin', 'midi', 'soir'], correct: 0 },
    { promptSay: 'Au Québec, on dîne à ... .', opts: ['midi', 'vingt heures'], correct: 0 },
    { promptSay: 'Sa ..., c’est sa copine.', opts: ['blonde', 'brune'], correct: 0 },
    { promptSay: 'Mon char, c’est ma ... .', opts: ['voiture', 'maison'], correct: 0 },
    { promptSay: 'Au Québec, on répond « ... » à un merci.', opts: ['bienvenue', 'à bientôt'], correct: 0 },
    { promptSay: 'Il est ... en réunion : il te rappellera.', opts: ['présentement', 'bientôt'], correct: 0 },
    { promptSay: 'Mets ta ..., il fait froid.', opts: ['tuque', 'casquette de soleil'], correct: 0 },
    { promptSay: 'Je passe au ... acheter du lait.', opts: ['dépanneur', 'garage'], correct: 0 },
  ],
  steps: STEPS('Un mot connu, un autre sens', 'Ce qu’un nouvel arrivant comprend de travers'),
  audio: REC('rec-b2-31-piege-mots'), say: REFRAME, terms: ['regionalisme', 'repas'],
};

const A4_LETTRE = pourTaLettre('a4-lettre', 'Tu cites le mot avec sa région', [
  grp('Présenter un mot du Québec', [
    it(E(1063), 'ta méthode'),
    free('Ils ont des mots bizarres pour les repas.', 'They have weird words for meals.', 'une remarque floue'),
  ], chk('Laquelle apprend quelque chose à ton lecteur ?', ['« Au Québec, on dit dîner pour le repas de midi. »', '« Ils ont des mots bizarres pour les repas. »'], 0,
    'Le mot, sa région, son sens : ton lecteur peut s’en servir. EN: word, region, meaning.')),
  grp('Parler des sacres', [
    it(E(1060), 'la catégorie'),
    it(E(1061), 'ton attitude'),
  ], chk('Comment parles-tu des sacres dans ta lettre ?', ['tu nommes la catégorie, sans en citer', 'tu en cites quelques-uns pour faire vrai'], 0,
    'Un juron cité reste un juron : la catégorie suffit. EN: name the category, quote none.')),
], ['regionalisme', 'repas']);

const A4_TEXTE = dansUnTexte('a4-texte', 'Un menu à Trois-Rivières', DANS_A4, [
  { q: 'Il est 12 h 30. Quelle formule peux-tu commander ?', a: 'Le spécial du dîner, servi de 11 h à 14 h : au Québec, le dîner est le repas du midi.' },
  { q: 'Que sont des « rôties » ?', a: 'Des tranches de pain grillé, servies au déjeuner, le repas du matin.' },
  { q: 'Que veut dire « breuvage inclus » ?', a: 'La boisson est comprise dans le prix.' },
  { q: 'Le prix affiché est-il le prix que tu paieras ?', a: 'Non : les prix sont avant taxes, les taxes s’ajoutent à la caisse.' },
  { q: 'Le samedi soir, que faut-il faire pour souper ici ?', a: 'Réserver : le souper est servi sur réservation le samedi soir.' },
], 'rec-b2-31-texte-a4', ['repas']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Les repas', 'Au Québec, le souper, c’est…', ['le repas du soir', 'le repas de midi'], 0,
    'Déjeuner le matin, dîner à midi, souper le soir. EN: the evening meal.'),
  ctl('Le registre', 'Lequel de ces mots est familier ?', ['char', 'courriel', 'fin de semaine'], 0,
    'Char est familier ; courriel et fin de semaine sont courants. EN: char is informal.'),
  ctl('Les sacres', 'Dans ta lettre, les sacres…', ['sont nommés comme une catégorie, jamais cités', 'sont cités pour montrer que tu les connais'], 0,
    'Tu décris sans répéter. EN: name the category only.'),
], ['repas', 'regionalisme']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Le Québec, les mots',
    opener: {
      line: 'Une collègue t’invite à dîner, et tu arrives le soir : ici tu apprends les mots du quotidien québécois et leur registre. EN: A colleague invites you to dinner and you turn up in the evening: here you learn Québec’s everyday words and their register.',
      imageRef: 'lessons/francais-regional/act04.jpg',
    },
    sections: [],
    milestone: 'Tu comprends les repas, les mots du quotidien et le registre des mots québécois les plus courants. EN: You understand Québec’s meals, everyday words and the register of the most common ones.',
    estScreens: 44, restPoints: ['a4-mots', 'a4-ecoute'],
  },
  sections: [A4_LECTURE, A4_MOTS, A4_TRIER, A4_ECOUTE, A4_PIEGE, A4_LETTRE, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: LA BELGIQUE ET LA SUISSE
 *
 *  TEXT: a student's travel blog, Brussels then Lausanne. MOVE: hear the
 *  numbers and the everyday words of Belgium and Switzerland, and say which
 *  country each belongs to. « Une fois » is presented as a real Brussels
 *  turn, never as a joke.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE = lecture('a5-lecture', 'Un week-end, deux pays', 'Un blog de voyage', TEXTE_WEEKEND, [],
  [
    { q: 'Devine le sens. Sous une pluie battante, Thomas s’écrie « Quelle drache ! ». D’après le contexte, qu’est-ce qu’une drache ?', a: 'Une grosse averse, une pluie très forte.' },
    { q: 'Question globale. Que raconte Karim, et qu’en retient-il ?', a: 'Un week-end à Bruxelles puis à Lausanne, et les mots qu’il y a découverts ; il retient que ce ne sont pas des fautes, mais d’autres habitudes.' },
    { q: 'Détail. Combien coûte son expresso à Lausanne ?', a: 'Quatre francs nonante, soit 4,90 francs.' },
    { q: 'Inférence. Pourquoi Karim a-t-il cru que la vendeuse lui demandait quelque chose ?', a: 'Parce qu’en France, « s’il vous plaît » accompagne une demande ; en Belgique, on le dit aussi en tendant un objet.' },
    { q: 'Inférence. Pourquoi parle-t-il de « une fois » avec précaution ?', a: 'Parce que cette tournure est souvent caricaturée en France ; il la présente comme un vrai usage du français populaire de Bruxelles.' },
    { q: 'Ton et position. Karim juge-t-il ces façons de parler ? Cite une phrase.', a: 'Non : « aussi logiques que les nôtres », et même « Septante, c’est même plus simple que soixante-dix. »' },
  ], 'rec-b2-31-weekend', ['nombres', 'regionalisme']);

const A5_NOMBRES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a5-nombres', layer: 'core', sheetId: 'sheet-belgique-suisse',
  title: 'Six nombres, trois pays',
  cols: ['Nombre', 'En France', 'En Belgique et en Suisse'],
  rows: [
    { cells: ['70', 'soixante-dix', 'septante'], say: fr(E(1078)),
      detail: { title: 'Septante', body: `Sept, puis la finale de trente, quarante, cinquante : un nombre régulier. ${Cap(NOMBRES_REF)} te l’a fait reconnaître. EN: regular, like thirty or forty.`, say: fr(SEPTANTE_S) } },
    { cells: ['71', 'soixante et onze', 'septante et un'], say: fr(E(1086)),
      detail: { title: 'Septante et un', body: 'Comme vingt et un ou trente et un. L’oreille entend d’abord septante : attends la fin du nombre. EN: like twenty-one.', say: fr(E(1086)) } },
    { cells: ['75', 'soixante-quinze', 'septante-cinq'], say: fr(E(1075)),
      detail: { title: 'Au comptoir', body: 'Un prix en septante, à Lausanne ou à Namur. Écoute la dizaine, puis l’unité. EN: tens first, then units.', say: fr(E(1075)) } },
    { cells: ['80', 'quatre-vingts', 'Belgique : quatre-vingts ; Vaud, Valais, Fribourg : huitante'], say: fr(E(1077)),
      detail: { title: 'Huitante', body: 'La Belgique garde quatre-vingts. En Suisse, dans les cantons de Vaud, du Valais et de Fribourg, on dit huitante ; à Genève, plutôt quatre-vingts. EN: eighty varies inside Switzerland.', say: fr(E(1078)) } },
    { cells: ['90', 'quatre-vingt-dix', 'nonante'], say: fr(NONANTE_S),
      detail: { title: 'Nonante', body: 'En Belgique comme en Suisse. « Quatre francs nonante », c’est 4,90 francs. EN: ninety in both countries.', say: fr(NONANTE_S) } },
    { cells: ['92', 'quatre-vingt-douze', 'nonante-deux'], say: fr(E(1076)),
      detail: { title: 'Nonante-deux', body: 'Plus court que quatre-vingt-douze, et sans calcul. EN: shorter, and no arithmetic.', say: fr(E(1076)) } },
  ],
  audio: REC('rec-b2-31-nombres'), say: REFRAME, terms: ['nombres'],
};

/** `hideLines`: the numbers must be caught by ear. */
const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a5-ecoute', layer: 'core', hideLines: true,
  title: 'Un appel à Lausanne', frSub: 'Écoute les nombres',
  lines: CYCLES_LINES,
  questions: [
    { q: 'Combien coûtent les freins ?', opts: ['72 francs', '62 francs', '92 francs'], correct: 0,
      why: 'Septante-deux : 72. EN: seventy-two.' },
    { q: 'Quel est le total, avec la main-d’œuvre ?', opts: ['180 francs', '118 francs', '100 francs'], correct: 0,
      why: 'Cent huitante : 180, comme on dit dans le canton de Vaud. EN: one hundred and eighty.' },
    { q: 'Que fait le client quand il n’est pas sûr du total ?', opts: ['il répète le nombre pour vérifier', 'il demande de parler anglais'], correct: 0,
      why: 'Il reprend le nombre, et le vendeur confirme. EN: he repeats it back.' },
    { q: 'Quand peut-il récupérer son vélo ?', opts: ['samedi, avant midi', 'samedi soir'], correct: 0,
      why: 'Avant midi, samedi. EN: Saturday before noon.' },
    { q: 'Où recevra-t-il la facture ?', opts: ['sur son téléphone portable', 'par la poste'], correct: 0,
      why: 'Le natel, en Suisse, c’est le portable. EN: on his mobile.' },
  ],
  audio: REC('rec-b2-31-cycles'), say: REFRAME, terms: ['nombres'],
};

const A5_OU: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-ou', layer: 'core', size: 'lg',
  title: 'Belgique ou Suisse', frSub: 'Des mots, deux pays',
  groups: [
    grp('En Belgique', [
      it(E(1070), 'au revoir, pour plus tard (aussi en Suisse)'),
      it(E(1073), 'la météo'),
      it(E(1071), 'le téléphone'),
      it(E(1074), 'la vie étudiante'),
    ], chk('« Je ne sais pas venir ce soir. » En Belgique, cela veut dire…', ['je ne peux pas venir ce soir', 'je ne sais pas si je viens'], 0,
      'En Belgique, savoir peut prendre le sens de pouvoir. EN: savoir can mean pouvoir.')),
    grp('En Suisse', [
      it(E(1069), 'le nombre'),
      it(E(1072), 'le téléphone'),
      it(E(1084), 'dans une phrase'),
    ], chk('Une vendeuse de Lausanne annonce « huitante francs ». Tu paies…', ['80 francs', '18 francs', '8 francs'], 0,
      'Huitante, c’est quatre-vingts. EN: eighty.')),
    ctl('En tendant la monnaie', 'À Bruxelles, la vendeuse te tend ta monnaie : « S’il vous plaît. » Elle…', ['te donne ta monnaie, comme « voilà »', 'te demande quelque chose'], 0,
      'En Belgique, on le dit en tendant un objet. EN: said when handing something over.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['regionalisme', 'nombres'],
};

const A5_LETTRE = pourTaLettre('a5-lettre', 'Juste, et sans caricature', [
  grp('Raconter un nombre mal compris', [
    it(E(1086), 'ce qui s’est passé'),
    free('Là-bas, ils comptent n’importe comment.', 'Over there they count any old way.', 'un jugement'),
  ], chk('Laquelle a sa place dans ta lettre ?', ['« J’ai d’abord entendu septante, puis j’ai compris soixante-dix. »', '« Là-bas, ils comptent n’importe comment. »'], 0,
    'Tu racontes ce que tu as entendu ; tu ne juges pas un système régulier. EN: tell, do not judge.')),
  grp('Parler de « une fois »', [
    it(E(1081), 'Bruxelles, familier'),
    free('À Bruxelles, tout le monde dit « une fois » à chaque phrase.', 'In Brussels everyone says une fois in every sentence.', 'une caricature'),
  ], chk('Laquelle est juste et respectueuse ?', ['« Viens une fois ici » : une tournure du français populaire de Bruxelles.', '« À Bruxelles, tout le monde dit une fois à chaque phrase. »'], 0,
    'La première décrit un usage ; la seconde répète une moquerie. EN: describe the use, drop the joke.')),
], ['regionalisme', 'nombres']);

const A5_TEXTE = dansUnTexte('a5-texte', 'Le groupe du kot', DANS_A5, [
  { q: 'Pourquoi Manon ne vient-elle pas au souper ?', a: 'Elle a un examen le lendemain matin. « Je ne sais pas venir » veut dire, en Belgique, « je ne peux pas venir ».' },
  { q: 'Quel temps fait-il, selon Tom ?', a: 'Il pleut très fort : « il drache ».' },
  { q: 'Combien faut-il par personne, selon Manon, et pourquoi ?', a: 'Nonante euros, soit 90, parce qu’il faut ajouter la facture d’électricité.' },
  { q: 'Quand Manon reverra-t-elle ses colocataires ?', a: 'Plus tard dans la journée : « à tantôt », c’est « à tout à l’heure ».' },
], 'rec-b2-31-texte-a5', ['nombres', 'regionalisme']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Les nombres', 'En Belgique, 80 se dit…', ['quatre-vingts', 'huitante'], 0,
    'Septante et nonante, mais quatre-vingts. EN: quatre-vingts in Belgium.'),
  ctl('Le téléphone', 'Un natel, c’est…', ['un téléphone portable, en Suisse', 'un repas, en Belgique', 'une voiture, au Québec'], 0,
    'En Belgique, on dit un GSM. EN: a Swiss mobile phone.'),
  ctl('À tantôt', 'À Liège, à dix heures du matin, « à tantôt » veut dire…', ['à tout à l’heure, plus tard dans la journée', 'à demain'], 0,
    'Tantôt, en Belgique : plus tard dans la journée. EN: later today.'),
], ['nombres', 'regionalisme']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'La Belgique et la Suisse',
    opener: {
      line: 'Septante-huit euros à Bruxelles, huitante francs à Lausanne : ici tu entends les nombres et les mots de la Belgique et de la Suisse. EN: Seventy-eight euros in Brussels, eighty francs in Lausanne: here you hear the numbers and words of Belgium and Switzerland.',
      imageRef: 'lessons/francais-regional/act05.jpg',
    },
    sections: [],
    milestone: 'Tu comprends septante, huitante et nonante, et tu sais dire si un mot est belge ou suisse. EN: You understand septante, huitante and nonante, and you can say whether a word is Belgian or Swiss.',
    estScreens: 40, restPoints: ['a5-nombres', 'a5-ou'],
  },
  sections: [A5_LECTURE, A5_NOMBRES, A5_ECOUTE, A5_OU, A5_LETTRE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: EN FRANCE AUSSI, DES ACCENTS
 *
 *  TEXT: an engineer from Toulouse on a job interview in Paris. MOVE: hear
 *  the Midi as a regular accent, name the insécurité it can cause, and
 *  refuse to correct an accent. Nothing vulgar from the Midi is quoted.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE = lecture('a6-lecture', 'Mon accent de Toulouse', 'Un témoignage', TEXTE_TOULOUSE,
  [{ word: 'occitan', en: 'Occitan', note: 'Une langue romane du sud de la France, parlée depuis le Moyen Âge.' }],
  [
    { q: 'Devine le sens. « J’ai essayé de gommer mon accent. » Que veut dire « gommer », ici ?', a: 'Effacer, faire disparaître, comme on efface un mot avec une gomme.' },
    { q: 'Question globale. De quoi témoigne l’ingénieure ?', a: 'D’une remarque sur son accent pendant un entretien d’embauche, du malaise qui a suivi, puis de sa décision de garder son accent.' },
    { q: 'Détail. Quels deux traits de l’accent du Midi décrit-elle ?', a: 'Le e final prononcé (« u-ne pe-ti-te ta-ble ») et les voyelles nasales qui finissent par un petit son de consonne (« pèng »).' },
    { q: 'Inférence. Pourquoi n’a-t-elle rien répondu à la question du recruteur ?', a: 'Elle était surprise et blessée, et dans un entretien, elle n’osait pas contredire ; la question la jugeait sur sa façon de parler.' },
    { q: 'Inférence. Que montre le fait qu’elle parlait moins en réunion ?', a: 'Son insécurité linguistique : elle avait peur de « mal » prononcer, alors qu’elle parlait très bien.' },
    { q: 'Ton et position. Que pense-t-elle aujourd’hui de la question « Vous comptez le garder ? » Comment le sais-tu ?', a: 'Qu’elle était déplacée : elle l’oppose à la bonne question, « d’où je viens », et conclut « n’en était pas une ».' },
  ], 'rec-b2-31-toulouse', ['accent', 'insecurite']);

const A6_TRAITS: Sec<'examples'> = {
  type: 'examples', id: 'a6-traits', layer: 'core', sheetId: 'sheet-ailleurs',
  title: 'Des accents de France',
  examples: [
    ex(E(1089), 'Midi : le e final se prononce, « pe-ti-te ta-ble ron-de ». La voix de l’appli, elle, parle un français de France.'),
    ex(E(1090), 'Midi : pain, vin, demain finissent par un petit son de consonne.'),
    ex(E(1099), 'sud-ouest : on commande une chocolatine.'),
    ex(E(1100), 'd’autres régions, d’autres musiques, sans hiérarchie.'),
    ex(E(1094), 'Paris aussi a un accent, qu’on n’entend plus.'),
    ex(E(1098), 'un mot pour la discrimination par la façon de parler.'),
  ],
  audio: REC('rec-b2-31-accents-france'), say: REFRAME, terms: ['accent'],
};

const A6_JUGER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-juger', layer: 'core', size: 'lg',
  title: 'Décrire ou juger', frSub: 'Ce qu’on dit d’un accent',
  groups: [
    grp('Ce qui décrit', [
      it(E(1102), 'la personne d’abord'),
      it(E(1103), 'un choix respecté'),
      it(E(1096), 'l’essentiel'),
    ], chk('Une collègue marseillaise présente un projet. Que retiens-tu ?', ['ce qu’elle propose', 'sa façon de prononcer'], 0,
      'Respecter un accent, c’est écouter ce que la personne dit. EN: listen to the content.')),
    grp('Ce qui juge', [
      it(E(1095), 'le conseil reçu'),
      it(E(1097), 'ce que fait une moquerie'),
      it(E(1104), 'la règle de politesse'),
    ], chk('« Vous comptez garder cet accent avec nos clients ? » Cette question…', ['juge la personne sur sa façon de parler', 'vérifie une compétence professionnelle'], 0,
      'Elle ne dit rien des compétences : elle vise l’origine. EN: it targets origin, not skill.')),
    ctl('Le malaise', 'Pendant des mois, l’ingénieure parlait moins en réunion. Les linguistes appellent cela…', ['l’insécurité linguistique', 'la timidité naturelle'], 0,
      'Le sentiment que sa façon de parler vaut moins. EN: linguistic insecurity.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['accent', 'insecurite'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a6-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre remarques à reformuler',
  errors: [
    { wrong: 'Elle devrait corriger son accent pour les clients.', right: fr(E(1101)),
      why: 'On pense rendre service. Mais on corrige une faute, pas un accent, et ses clients la comprennent très bien. EN: an accent is not an error.' },
    { wrong: 'Le vrai mot, c’est pain au chocolat ; chocolatine est une erreur.', right: fr(E(1099)),
      why: 'Le débat amuse les Français, mais les deux mots existent, chacun dans sa région. EN: both words exist.' },
    { wrong: 'Il n’a pas d’accent : il vient de Paris.', right: fr(E(1094)),
      why: 'On l’entend partout à la télévision, alors on ne le remarque plus. C’est pourtant un accent. EN: Paris has one too.' },
    { wrong: 'L’accent du Midi, c’est du français mal prononcé.', right: 'L’accent du Midi prononce le e final : c’est régulier, pas fautif.',
      why: 'Ce qui surprend l’oreille n’est pas une erreur : c’est une règle partagée par toute une région. EN: a regular feature, not a mistake.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['accent', 'insecurite'],
};

const A6_LETTRE = pourTaLettre('a6-lettre', 'Tu parles de la personne', [
  grp('Parler d’un accent', [
    it(E(1102), 'ta règle'),
    free('Elle a un accent à couper au couteau, c’est trop drôle.', 'She has an accent you could cut with a knife, it is so funny.', 'une moquerie'),
  ], chk('Laquelle a sa place dans ta lettre ?', ['« Je parle de la personne, pas de son accent. »', '« Elle a un accent à couper au couteau, c’est trop drôle. »'], 0,
    'Ton lecteur retient la personne, pas la caricature. EN: keep the person, drop the caricature.')),
  grp('Nommer un malaise', [
    it(E(1093), 'le mot'),
    it(E(1096), 'la phrase qui répond'),
  ], chk('Quel mot nomme le sentiment que sa façon de parler vaut moins ?', ['l’insécurité linguistique', 'l’accent du Midi'], 0,
    'Un mot précis rend ta lettre plus juste. EN: the precise word.')),
], ['accent', 'insecurite']);

const A6_TEXTE = dansUnTexte('a6-texte', 'Dans une boulangerie de Bordeaux', DANS_A6, [
  { q: 'Qui dit chocolatine, et qui dit pain au chocolat ?', a: 'La boulangère de Bordeaux dit chocolatine ; le client, venu de Lille, dit pain au chocolat.' },
  { q: 'Y a-t-il un malentendu ?', a: 'Non : chacun comprend l’autre, et la boulangère sert le client sans problème.' },
  { q: 'Quelle phrase résume l’attitude des deux personnes ?', a: '« Chacun ses mots, du moment qu’on se comprend ! »' },
  { q: 'Ce dialogue parle-t-il d’un accent ou d’un mot ?', a: 'D’un mot régional : deux façons de nommer la même viennoiserie.' },
], 'rec-b2-31-texte-a6', ['regionalisme']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le Midi', 'Dans l’accent du Midi, « petite » se prononce souvent…', ['avec le e final : pe-ti-te', 'sans le t'], 0,
    'Le e final s’entend. EN: the final e is heard.'),
  ctl('Paris', 'L’accent de Paris…', ['est un accent parmi d’autres', 'n’est pas un accent'], 0,
    'On ne l’entend plus, voilà tout. EN: one accent among others.'),
  ctl('Corriger', 'On corrige l’accent de quelqu’un…', ['seulement s’il le demande', 'pour l’aider, même sans qu’il le demande'], 0,
    'Un accent n’est pas une faute. EN: only if asked.'),
], ['accent', 'insecurite']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'En France aussi, des accents',
    opener: {
      line: 'Une ingénieure de Toulouse passe un entretien à Paris, et on lui parle de son accent : ici tu entends le Midi et tu refuses de juger. EN: An engineer from Toulouse has an interview in Paris and is asked about her accent: here you hear the south and refuse to judge.',
      imageRef: 'lessons/francais-regional/act06.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais l’accent du Midi, tu sais que Paris a aussi un accent, et tu nommes l’insécurité linguistique. EN: You recognise the southern accent, know Paris has one too, and can name linguistic insecurity.',
    estScreens: 38, restPoints: ['a6-traits', 'a6-erreurs'],
  },
  sections: [A6_LECTURE, A6_TRAITS, A6_JUGER, A6_ERREURS, A6_LETTRE, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: LE FRANÇAIS EN AFRIQUE, PAYS PAR PAYS
 *
 *  TEXT: a Sherbrooke intern's blog, Abidjan then Dakar. MOVE: read a word
 *  of African French with its COUNTRY, and see how it is made (a French
 *  suffix, a shifted meaning, a greeting, a term of respect). Never
 *  « l’Afrique » as one place.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE = lecture('a7-lecture', 'Six mois entre Abidjan et Dakar', 'Le blog d’une stagiaire', TEXTE_CAMILLE,
  [{ word: 'attiéké', en: 'attiéké, cassava semolina', note: 'Une semoule de manioc, très courante en Côte d’Ivoire.' }],
  [
    { q: 'Devine le sens. « Le technicien a annoncé qu’elle était gâtée. » D’après le contexte, que veut dire « gâtée » ?', a: 'En panne : l’imprimante ne marchait plus.' },
    { q: 'Question globale. Qu’a découvert Camille pendant ses six mois de stage ?', a: 'Que le français d’Abidjan et celui de Dakar ont leurs propres mots et leurs propres usages, différents d’un pays à l’autre et du sien.' },
    { q: 'Détail. Qu’est-ce qu’un gbaka ?', a: 'Un minibus, à Abidjan, toujours plein.' },
    { q: 'Inférence. Pourquoi Camille a-t-elle d’abord « cherché ce qu’on disait » ?', a: 'Elle a pris « On dit quoi ? » au pied de la lettre, alors que c’est une salutation : comment ça va ?' },
    { q: 'Inférence. Pourquoi le mot « essencerie » l’a-t-il frappée ?', a: 'Parce qu’il est parfaitement formé, comme boulangerie, et qu’il lui manque au Québec.' },
    { q: 'Ton et position. Quelle idée Camille retient-elle ? Cite ses mots.', a: '« Il n’y a pas un français d’Afrique, mais des français, pays par pays. »' },
  ], 'rec-b2-31-camille', ['regionalisme', 'centres']);

const A7_MOTS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a7-mots', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-ailleurs',
  title: 'Comment naissent ces mots', frSub: 'Chaque mot avec son pays',
  hint: 'Quatre cartes. Pour chaque mot, retiens le pays, puis la façon dont il est fait.',
  audio: REC('rec-b2-31-afrique'), say: REFRAME, terms: ['regionalisme'],
  cards: [
    { head: 'Un mot fabriqué', label: 'Sénégal', fr: fr(E(1120)), sub: rsOf(E(1120)),
      body: 'Essence et -erie, comme boulangerie. Au Cameroun, enceinter (rendre enceinte) est fait lui aussi avec les règles du français : enceinte et -er. EN: new words, built with French rules.' },
    { head: 'Un sens qui change', label: 'Côte d’Ivoire, Cameroun', fr: fr(E(1111)), sub: rsOf(E(1111)),
      body: 'Gâté veut dire en panne, abîmé. En RD Congo, au Congo ou en Côte d’Ivoire, un deuxième bureau est un partenaire caché. EN: familiar words, new meanings.' },
    { head: 'Une façon de saluer', label: 'Cameroun, Côte d’Ivoire', fr: fr(E(1110)), sub: rsOf(E(1110)),
      body: '« On dit quoi ? » veut dire « comment ça va ? ». Tu réponds comme à un « ça va ? ». EN: a greeting, not a real question.' },
    { head: 'Une marque de respect', label: 'Côte d’Ivoire', fr: fr(E(1117)), sub: rsOf(E(1117)),
      body: `Tantie ou tonton, pour une personne plus âgée : du respect, pas de la famille. ${Cap(TU_VOUS_REF)} t’a montré le vous des aînés à Dakar. EN: respect for elders.` },
  ],
};

const A7_PAYS: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-pays', layer: 'core', size: 'lg',
  title: 'Un mot, un pays', frSub: 'Côte d’Ivoire et Sénégal',
  groups: [
    grp('En Côte d’Ivoire', [
      it(E(1107), 'où l’on mange'),
      it(E(1108), 'comment on circule'),
      it(E(1109), 'comment on s’adresse à une aînée'),
      it(E(1113), 'la langue officielle'),
    ], chk('À Abidjan, un collègue te propose d’aller « au maquis ». Il t’invite…', ['à manger dans un petit restaurant en plein air', 'à une randonnée en forêt'], 0,
      'Le maquis, en Côte d’Ivoire, c’est le petit restaurant populaire. EN: an open-air eatery.')),
    grp('Au Sénégal', [
      it(E(1105), 'la station-service'),
      it(E(1106), 'le restaurant de grillades'),
      it(E(1114), 'deux langues dans une phrase'),
      it(VOUS_DAKAR, Cap(TU_VOUS_REF)),
    ], chk('Ton chauffeur, à Dakar, s’arrête à l’essencerie. Il…', ['fait le plein d’essence', 'achète du pain'], 0,
      'Essencerie : la station-service, au Sénégal. EN: a petrol station.')),
    ctl('Le pays', 'Dans ta lettre, « essencerie » est présenté comme un mot…', ['du Sénégal', 'd’Afrique'], 0,
      'Nomme le pays : l’Afrique n’est pas un pays. EN: name the country.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['regionalisme'],
};

/** `hideLines`: the questions are about what the ear caught. */
const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a7-ecoute', layer: 'core', hideLines: true,
  title: 'Midi, au maquis', frSub: 'Écoute sans lire, à Abidjan',
  lines: MAQUIS_LINES,
  questions: [
    { q: 'Qu’est-ce qu’on peut encore commander, finalement ?', opts: ['du poulet', 'du poisson braisé', 'rien'], correct: 0,
      why: 'Il n’y a plus de poisson, présentement : il reste du poulet. EN: chicken.' },
    { q: 'Pourquoi Camille paie-t-elle en espèces ?', opts: ['son téléphone est en panne', 'sa carte est refusée'], correct: 0,
      why: 'Son téléphone est gâté : en panne. EN: her phone is broken.' },
    { q: 'Comment est-elle venue ?', opts: ['en minibus, plein', 'à pied', 'en taxi'], correct: 0,
      why: 'Le gbaka, le minibus d’Abidjan, était plein. EN: by minibus.' },
    { q: 'Qui est la « tantie » ?', opts: ['la femme qui sert, appelée ainsi par respect', 'la tante de Camille'], correct: 0,
      why: 'Tantie : une femme plus âgée, à qui l’on parle avec respect. EN: a respectful address.' },
    { q: 'Pourquoi prendra-t-elle un taxi demain ?', opts: ['pour arriver à l’heure', 'parce qu’il n’y a plus de minibus'], correct: 0,
      why: 'Sa cheffe veut qu’elle arrive à l’heure. EN: to be on time.' },
  ],
  audio: REC('rec-b2-31-maquis'), say: REFRAME, terms: ['regionalisme'],
};

const A7_LETTRE = pourTaLettre('a7-lettre', 'Le pays, pas le continent', [
  grp('Situer un mot', [
    it(E(1124), 'ta règle'),
    free('En Afrique, ils disent des mots bizarres.', 'In Africa they say weird words.', 'un raccourci'),
  ], chk('Laquelle a sa place dans ta lettre ?', ['« Au Sénégal, une station-service s’appelle une essencerie. »', '« En Afrique, ils disent des mots bizarres. »'], 0,
    'Le pays, le mot, le sens : une information juste. EN: country, word, meaning.')),
  grp('Dire ce que sont ces mots', [
    it(E(1125), 'le principe'),
    it(E(1115), 'la preuve'),
  ], chk('Pourquoi rappeler que ces mots sont décrits dans des dictionnaires ?', ['pour montrer que ce sont des mots du français', 'pour montrer qu’ils sont rares'], 0,
    'Décrits, donc reconnus : pas des erreurs. EN: described, so recognised.')),
], ['regionalisme', 'centres']);

const A7_TEXTE = dansUnTexte('a7-texte', 'Deux cousins, à Dakar', DANS_A7, [
  { q: 'Où est Ibou quand Moussa lui écrit ?', a: 'À l’essencerie de la corniche : il fait le plein.' },
  { q: 'Que veut dire « Tu es où, présentement ? »', a: '« Où es-tu en ce moment ? » Présentement est courant au Sénégal, comme au Québec.' },
  { q: 'Que doit faire Ibou en revenant, et pourquoi ?', a: 'Passer à la dibiterie, acheter de la viande grillée : il y a des invités ce soir.' },
  { q: 'Pourquoi Ibou ne veut-il pas qu’on l’appelle ?', a: 'Son téléphone est presque déchargé.' },
], 'rec-b2-31-texte-a7', ['regionalisme']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le maquis', 'En Côte d’Ivoire, un maquis, c’est…', ['un petit restaurant en plein air', 'une forêt'], 0,
    'Le sens ivoirien, à Abidjan. EN: an open-air eatery.'),
  ctl('Gâté', '« Mon téléphone est gâté. » Il est…', ['en panne', 'neuf', 'offert'], 0,
    'Gâter : abîmer, tomber en panne, en Côte d’Ivoire et au Cameroun. EN: broken.'),
  ctl('La méthode', 'Quand tu cites un mot de Dakar, tu écris…', ['au Sénégal', 'en Afrique'], 0,
    'Chaque pays a ses mots. EN: name the country.'),
], ['regionalisme']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Le français en Afrique',
    opener: {
      line: 'On te salue d’un « On dit quoi ? » et on t’emmène au maquis : ici tu apprends les mots du français d’Afrique, pays par pays. EN: You are greeted with On dit quoi? and taken to a maquis: here you learn the words of African French, country by country.',
      imageRef: 'lessons/francais-regional/act07.jpg',
    },
    sections: [],
    milestone: 'Tu comprends des mots de Côte d’Ivoire, du Sénégal et du Cameroun, et tu cites toujours le pays. EN: You understand words from Côte d’Ivoire, Senegal and Cameroon, and you always name the country.',
    estScreens: 38, restPoints: ['a7-mots', 'a7-ecoute'],
  },
  sections: [A7_LECTURE, A7_MOTS, A7_PAYS, A7_ECOUTE, A7_LETTRE, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: LES LANGUES EN CONTACT
 *
 *  TEXT: a magazine article. MOVE: tell a Creole from French (a language of
 *  its own), recognise Acadian forms and chiac as contact varieties, and
 *  read the familiar French words borrowed from Arabic. No chiac sentence is
 *  invented; the Creole greetings are labelled NOT French.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE = lecture('a8-lecture', 'Quand le français rencontre d’autres langues', 'Un article de magazine', TEXTE_CONTACT,
  [{ word: 'tamazight', en: 'Tamazight, a Berber language', note: 'Une langue berbère, officielle au Maroc et en Algérie.' }],
  [
    { q: 'Devine le sens. « Aucune n’en est sortie intacte. » Que veut dire l’auteur ?', a: 'Que chaque langue a été changée par la rencontre : aucune n’est restée exactement comme avant.' },
    { q: 'Question globale. Quelle idée l’article défend-il ?', a: 'Les contacts du français avec d’autres langues ont produit des langues et des façons de parler, avec leurs règles, pas du « mauvais » français.' },
    { q: 'Détail. Que veulent dire « Sa ou fè ? » et « Koman i lé ? » ?', a: '« Comment ça va ? », en créole de Martinique et de Guadeloupe, puis de La Réunion.' },
    { q: 'Inférence. Pourquoi l’auteur précise-t-il que les créoles « s’écrivent, s’enseignent et ont leur littérature » ?', a: 'Pour prouver que ce sont des langues à part entière, et non des formes abîmées du français.' },
    { q: 'Inférence. Que suggère « longtemps moqué, il est aujourd’hui revendiqué » à propos du chiac ?', a: 'Que le regard a changé : ce qui était une honte est devenu une fierté, portée par des artistes.' },
    { q: 'Ton et position. L’auteur est-il neutre ? Relève les mots qui montrent sa position.', a: 'Non : il met « mauvais » entre guillemets et affirme « des langues à part entière » : il défend ces façons de parler.' },
  ], 'rec-b2-31-contact', ['creole']);

const A8_LANGUES: Sec<'examples'> = {
  type: 'examples', id: 'a8-langues', layer: 'core', sheetId: 'sheet-ailleurs',
  title: 'Des langues et des mots en contact',
  examples: [
    ex(E(1128), 'du créole, en Martinique et en Guadeloupe : pas du français.'),
    ex(E(1129), 'du créole, à La Réunion : pas du français.'),
    ex(E(1130), 'deux langues officielles, côte à côte.'),
    ex(E(1133), 'en Acadie : une forme ancienne, chez certains locuteurs âgés.'),
    ex(E(1135), 'le chiac : une variété de contact, au Nouveau-Brunswick.'),
    ex(E(1140), 'un mot venu de l’arabe, en français familier.'),
  ],
  audio: REC('rec-b2-31-contact-exemples'), say: REFRAME, terms: ['creole'],
};

const A8_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-trier', layer: 'core', size: 'lg',
  title: 'Créole, français, emprunt', frSub: 'Trois choses différentes',
  groups: [
    grp('Créole ou français', [
      it(E(1128), 'aux Antilles'),
      it(E(1129), 'à La Réunion'),
      it(E(1131), 'deux langues dans une famille'),
      it(CREOLE_S, 'une autre famille'),
    ], chk('« Sa ou fè ? », c’est…', ['du créole', 'du français familier'], 0,
      'Une autre langue, avec sa grammaire, même si les mots rappellent le français. EN: Creole, not French.')),
    grp('Des mots venus de l’arabe', [
      it(E(1137), 'le médecin'),
      it(E(1136), 'pareil'),
      it(E(1138), 'le désordre'),
      it(E(1145), 'leur place en France'),
    ], chk('« Pour moi, c’est kif-kif. » Cela veut dire…', ['c’est pareil', 'c’est génial'], 0,
      'Kif-kif : la même chose, en français familier. EN: all the same.')),
    ctl('L’Acadie', 'En Acadie, « je parlons » veut dire…', ['nous parlons', 'je parle'], 0,
      'Une forme ancienne du pluriel, qu’on entend encore chez certains locuteurs. EN: we speak.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['creole'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a8-piege', layer: 'core', swipe: true,
  title: 'Six idées fausses sur les langues en contact',
  rule: {
    title: 'Une langue, pas une erreur',
    body: 'Un créole est une langue à part entière. L’acadien et le chiac sont des façons de parler, avec leurs règles. Un mot venu de l’arabe est du français familier. EN: a Creole is a language; a borrowing is a French word.',
  },
  cards: [
    trap(E(1127), 'le créole', 'Le créole, c’est du français mal parlé.', 'C’est une autre langue, avec sa grammaire. EN: another language.'),
    trap(E(1130), 'Haïti', 'En Haïti, on ne parle que français.', 'Le créole y est langue officielle, avec le français. EN: two official languages.'),
    trap(E(1144), 'deux langues', 'Aux Antilles, on parle soit créole, soit français, jamais les deux.', 'Beaucoup passent de l’une à l’autre selon la situation. EN: many switch.'),
    trap(E(1146), 'le chiac', 'Le chiac, c’est de l’anglais mal traduit.', 'C’est une variété de contact, qui a ses règles. EN: a contact variety.'),
    trap(E(1133), 'je parlons', '« Je parlons » est une faute de conjugaison.', 'Une forme ancienne, restée vivante en Acadie. EN: an old form.'),
    trap(E(1145), 'toubib', '« Toubib » est un mot d’argot sans origine.', 'Il vient de l’arabe, comme kif-kif et souk. EN: from Arabic.'),
  ],
  drill: [
    { promptSay: 'Le créole n’est pas du français mal parlé : c’est une autre ... .', opts: ['langue', 'faute'], correct: 0 },
    { promptSay: 'En Haïti, le créole et le français sont ... .', opts: ['officiels', 'interdits'], correct: 0 },
    { promptSay: '« Koman i lé ? » est du créole de ... .', opts: ['La Réunion', 'Belgique', 'Suisse'], correct: 0 },
    { promptSay: 'Le chiac mêle le français et l’... .', opts: ['anglais', 'arabe'], correct: 0 },
    { promptSay: 'On entend le chiac surtout dans la région de ... .', opts: ['Moncton', 'Genève'], correct: 0 },
    { promptSay: 'Un toubib, c’est un ... .', opts: ['médecin', 'marchand'], correct: 0 },
    { promptSay: 'Kif-kif veut dire « ... ».', opts: ['pareil', 'vite', 'demain'], correct: 0 },
    { promptSay: 'Au Maghreb, le français vit à côté de l’arabe et du ... .', opts: ['tamazight', 'wolof'], correct: 0 },
  ],
  steps: STEPS('Une langue, pas une erreur', 'Ce qu’on croit à tort'),
  audio: REC('rec-b2-31-piege-contact'), say: REFRAME, terms: ['creole'],
};

const A8_LETTRE = pourTaLettre('a8-lettre', 'Le créole à sa place', [
  grp('Parler du créole', [
    it(E(1143), 'ta règle'),
    free('Aux Antilles, ils parlent un français déformé.', 'In the Antilles they speak a distorted French.', 'une erreur'),
  ], chk('Laquelle a sa place dans ta lettre ?', ['« Ma collègue passe du créole au français selon la personne. »', '« Aux Antilles, ils parlent un français déformé. »'], 0,
    'Deux langues, et une personne qui choisit. EN: two languages, one speaker who chooses.')),
  grp('Citer un emprunt', [
    it(E(1140), 'dans une phrase'),
    it(E(1145), 'son origine'),
  ], chk('Tu cites « kif-kif » dans ta lettre. Tu précises…', ['que c’est un mot familier venu de l’arabe', 'que c’est une faute de français'], 0,
    'Le registre et l’origine : ton lecteur sait quand l’employer. EN: register and origin.')),
], ['creole']);

const A8_TEXTE = dansUnTexte('a8-texte', 'Un courriel de Fort-de-France', DANS_A8, [
  { q: 'Quelle langue Maëlle parle-t-elle au travail, et à la maison ?', a: 'Le français au travail ; le créole à la maison, avec sa grand-mère.' },
  { q: 'Que lui demande sa grand-mère chaque matin ?', a: '« Sa ou fè ? » : comment ça va ?, en créole.' },
  { q: 'Qu’est-ce que les cousins de Paris ont mal compris ?', a: 'Ils croient que le créole est du français « déformé », alors que c’est une autre langue.' },
  { q: 'Que montrent les guillemets autour de « déformé » ?', a: 'Que Maëlle cite l’avis de ses cousins et ne le partage pas.' },
], 'rec-b2-31-texte-a8', ['creole']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le créole', 'Un créole, c’est…', ['une langue à part entière', 'du français mal parlé'], 0,
    'Une grammaire à lui, une littérature. EN: a language.'),
  ctl('Le chiac', 'Le chiac se parle surtout…', ['dans la région de Moncton', 'à Marseille', 'à Abidjan'], 0,
    'Au Nouveau-Brunswick, en Acadie. EN: around Moncton.'),
  ctl('Toubib', '« Toubib » est un mot…', ['familier, venu de l’arabe', 'du créole réunionnais'], 0,
    'Comme kif-kif et souk. EN: familiar, from Arabic.'),
], ['creole']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Les langues en contact',
    opener: {
      line: 'Une grand-mère demande « Sa ou fè ? » et sa petite-fille répond dans sa langue : ici tu sépares le créole, le français et les mots venus d’ailleurs. EN: A grandmother asks Sa ou fè? and her granddaughter answers in her language: here you tell Creole, French and borrowed words apart.',
      imageRef: 'lessons/francais-regional/act08.jpg',
    },
    sections: [],
    milestone: 'Tu distingues un créole du français, tu reconnais l’acadien et le chiac, et tu sais d’où viennent toubib ou kif-kif. EN: You can tell a Creole from French, recognise Acadian and chiac, and know where toubib and kif-kif come from.',
    estScreens: 40, restPoints: ['a8-langues', 'a8-piege'],
  },
  sections: [A8_LECTURE, A8_LANGUES, A8_TRIER, A8_PIEGE, A8_LETTRE, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: QUAND TU NE COMPRENDS PAS
 *
 *  TEXT: an advice column, then a call to a garage in Lévis. MOVE: five
 *  gestures (let the ear adjust, lean on context, ask for the missing part,
 *  repeat back, ask for the word) and two refusals (switching to English
 *  unasked, commenting on the accent). Goes past lesson 38 in B1 (a phone
 *  repeat) and lesson 25 in B2 (natural speed): here the accent is
 *  unfamiliar and a WORD is new. USE IT is a short scenario.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE = lecture('a9-lecture', 'Cinq gestes pour comprendre un accent', 'Une chronique de conseils', TEXTE_CONSEILS, [],
  [
    { q: 'Devine le sens. « Deux réflexes à laisser au vestiaire. » Que veut dire « laisser au vestiaire » ?', a: 'Abandonner, ne pas emporter avec soi : se débarrasser de ces réflexes.' },
    { q: 'Question globale. Que propose la chronique ?', a: 'Cinq gestes pour comprendre un accent inconnu (laisser l’oreille s’habituer, s’appuyer sur le contexte, demander ce qui manque, reformuler, demander le mot) et deux réflexes à éviter.' },
    { q: 'Détail. Pourquoi « Pardon, je n’ai pas bien saisi la fin » vaut-il mieux qu’un « Quoi ? » ?', a: 'Parce qu’il dit ce qui manque : l’autre ne répète que la fin, et la demande est polie.' },
    { q: 'Inférence. Pourquoi « Pouvez-vous parler normalement ? » est-il une « petite insulte » ?', a: 'Parce qu’il sous-entend que la façon de parler de l’autre n’est pas normale.' },
    { q: 'Inférence. Pourquoi reformuler est-il utile, même si l’on s’est trompé ?', a: 'Parce qu’on sera corrigé, et qu’on apprendra un mot au passage.' },
    { q: 'Ton et position. Que pense le chroniqueur du passage à l’anglais ? Relève ses mots.', a: 'Il le déconseille, sauf si on te le propose : « Ton interlocuteur y entend souvent que son français ne te convient pas. »' },
  ], 'rec-b2-31-conseils', ['repeter']);

/** `hideLines`: the questions are about what the ear caught. */
const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a9-ecoute', layer: 'core', hideLines: true,
  title: 'Un appel au garage', frSub: 'Écoute sans lire, à Lévis',
  lines: GARAGE_LINES,
  questions: [
    { q: 'Quand le garagiste peut-il regarder la voiture ?', opts: ['demain matin, tôt', 'tout de suite', 'la semaine prochaine'], correct: 0,
      why: 'Aujourd’hui, c’est impossible : demain matin, de bonne heure. EN: early tomorrow morning.' },
    { q: 'Que fait la personne qui appelle quand elle ne comprend pas ?', opts: ['elle demande de répéter plus lentement', 'elle passe à l’anglais'], correct: 0,
      why: 'Elle dit qu’elle n’a pas saisi, puis demande plus lentement. EN: she asks for a slower repeat.' },
    { q: 'Comment vérifie-t-elle l’heure du rendez-vous ?', opts: ['elle reformule ce qu’elle a compris', 'elle demande un courriel'], correct: 0,
      why: 'Elle reprend l’heure, et le garagiste confirme. EN: she repeats it back.' },
    { q: 'Que lui demande le garagiste pour la voiture ?', opts: ['de fermer les portes à clé', 'de laisser les clés dedans'], correct: 0,
      why: 'Barrer les portes, au Québec : les fermer à clé. EN: lock the doors.' },
    { q: 'Le garagiste parle sans le ne de la négation. C’est…', opts: ['du français familier, très courant à l’oral', 'une faute de débutant'], correct: 0,
      why: `${Cap(NEGATION_REF)} l’a montré : à l’oral, le ne tombe souvent. EN: informal speech drops ne.` },
  ],
  audio: REC('rec-b2-31-garage'), say: REFRAME, terms: ['repeter'],
};

const A9_GESTES: Sec<'hacks'> = {
  type: 'hacks', id: 'a9-gestes', layer: 'core', sheetId: 'sheet-strategies',
  title: 'Trois gestes qui changent tout',
  hacks: [
    { hack: 'Dis ce qui manque : « la fin de la phrase », « le nom de la rue ».', why: 'On te répète seulement ce qu’il faut, sans tout reprendre. EN: name the missing part.' },
    { hack: 'Demande le mot, pas l’accent : « Que veut dire barrer, ici ? »', why: 'Une question sur un mot est une vraie question ; une remarque sur l’accent blesse. EN: ask about the word.' },
    { hack: 'Reformule pour vérifier : « Si je comprends bien… »', why: `Si tu te trompes, on te corrige et tu apprends. « ${B138_REFRAME} » EN: ${B138_REFRAME_EN}` },
  ],
  audio: AUDIO, say: REFRAME, terms: ['repeter'],
};

const A9_DEMANDER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-demander', layer: 'core', size: 'lg',
  title: 'Ce qui aide, ce qui ferme', frSub: 'Demander sans blesser',
  groups: [
    grp('Ce qui aide', [
      it(E(1147), 'la partie qui manque'),
      it(E(1148), 'le mot'),
      it(E(1149), 'la vérification'),
      it(REPETER, Cap(ECOUTE_B1_REF)),
    ], chk('Tu n’as pas saisi le nom de la rue. Tu dis…', ['« Pardon, vous pouvez répéter le nom de la rue ? »', '« Quoi ? »'], 0,
      'Tu nommes ce qui manque, poliment. EN: name what you missed.')),
    grp('Ce qui ferme la porte', [
      it(E(1000), 'une remarque sur l’accent'),
      it(E(1006), 'le prix de l’anglais'),
      it(E(1155), 'la règle'),
    ], chk('« Pouvez-vous parler normalement ? » Cette phrase…', ['sous-entend que son français n’est pas normal', 'est une demande polie'], 0,
      'Elle juge la façon de parler, pas le message. EN: it judges the way of speaking.')),
    ctl('Le plan B', 'Rien ne passe, même après deux essais. Tu dis…', ['« Excusez-moi, je ne suis pas d’ici, vous pouvez parler un peu plus lentement ? »', '« Vous parlez anglais ? »'], 0,
      'Tu restes en français, tu expliques, tu demandes. EN: stay in French and explain.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['repeter'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a9-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre réflexes à remplacer',
  errors: [
    { wrong: 'Quoi ?', right: fr(E(1001)),
      why: 'C’est le réflexe de tout le monde. Mais c’est sec, et l’autre doit tout répéter. EN: blunt, and it forces a full repeat.' },
    { wrong: 'Pouvez-vous parler normalement ?', right: fr(E(1154)),
      why: 'On veut seulement plus de clarté. Mais « normalement » juge l’autre ; « je ne suis pas d’ici » explique ton problème. EN: explain your side, do not judge theirs.' },
    { wrong: 'Sorry, do you speak English?', right: fr(E(1153)),
      why: 'On croit rendre service. Mais l’autre y entend souvent que son français ne te convient pas. EN: it can sound like a rejection.' },
    { wrong: 'Votre accent est difficile à comprendre.', right: fr(E(1155)),
      why: 'C’est peut-être vrai pour toi, mais c’est un mot qui te manque, pas un défaut chez lui. EN: ask about the word.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['repeter', 'accent'],
};

/** USE IT, out loud. Every French string here uses the typographic ’ only. */
const A9_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a9-scenario', layer: 'core', title: 'Le plombier de Liège',
  setting: 'Tu loues un appartement à Liège depuis un mois. Le plombier te rappelle pour une fuite. Il parle vite, avec des mots de Belgique.',
  turns: [
    {
      ai: 'Bonjour, c’est pour la fuite. Je ne sais pas passer avant jeudi.', en: 'Hello, it’s about the leak. I can’t come by before Thursday.',
      user: 'Pardon, je n’ai pas bien saisi : vous ne pouvez pas passer avant jeudi ?', userEn: 'Sorry, I didn’t quite catch that: you can’t come before Thursday? (You say what you missed and check.)',
      alts: [
        { fr: 'Excusez-moi, « je ne sais pas passer », ça veut dire que vous ne pouvez pas ?', en: 'Excuse me, « je ne sais pas passer » means you can’t? (You ask about the word.)' },
        { fr: 'Si je comprends bien, pas avant jeudi ?', en: 'If I understand correctly, not before Thursday? (You rephrase to check.)' },
      ],
    },
    {
      ai: 'C’est ça. Jeudi vers dix heures, ça vous va ?', en: 'That’s right. Thursday around ten, does that suit you?',
      user: 'Jeudi à dix heures, c’est parfait.', userEn: 'Thursday at ten is perfect. (You repeat the time as you agree.)',
      alts: [
        { fr: 'Oui, jeudi matin me convient très bien.', en: 'Yes, Thursday morning suits me very well.' },
        { fr: 'D’accord pour jeudi, dix heures.', en: 'All right for Thursday, ten o’clock.' },
      ],
    },
    {
      ai: 'Ça fera septante euros pour le déplacement, plus les pièces.', en: 'It will be seventy euros for the call-out, plus the parts.',
      user: 'Septante, donc soixante-dix euros, c’est bien ça ?', userEn: 'Septante, so seventy euros, is that right? (You check the number.)',
      alts: [
        { fr: 'Soixante-dix euros pour le déplacement, d’accord.', en: 'Seventy euros for the call-out, all right.' },
        { fr: 'Vous avez dit septante ? Très bien.', en: 'You said septante? Very good.' },
      ],
    },
    {
      ai: 'Oui. Si vous n’êtes pas là, vous laissez la clé chez la voisine.', en: 'Yes. If you’re not in, leave the key with the neighbour.',
      user: 'D’accord. Vous pouvez me l’envoyer par message, pour ne rien oublier ?', userEn: 'All right. Could you send it to me by text, so I don’t forget anything? (You ask for it in writing.)',
      alts: [
        { fr: 'Entendu. Vous pouvez me l’écrire, s’il vous plaît ?', en: 'Understood. Could you write it down for me, please?' },
        { fr: 'Très bien, la clé chez la voisine.', en: 'Very good, the key with the neighbour.' },
      ],
    },
    {
      ai: 'Pas de souci, je vous envoie ça sur votre GSM. Vous venez d’arriver à Liège ?', en: 'No problem, I’ll send it to your mobile. Have you just arrived in Liège?',
      user: 'Oui, depuis un mois. Je découvre les mots d’ici, et ça me plaît.', userEn: 'Yes, for a month. I’m discovering the local words, and I like it. (A friendly word about the variety.)',
      alts: [
        { fr: 'Oui, et j’apprends chaque jour un mot belge.', en: 'Yes, and I learn a Belgian word every day.' },
        { fr: 'Depuis un mois, oui. Je commence à m’habituer.', en: 'For a month, yes. I’m starting to get used to it.' },
      ],
    },
    {
      ai: 'Vous vous débrouillez très bien. À jeudi, alors.', en: 'You’re doing very well. See you on Thursday, then.',
      user: 'Merci beaucoup. À jeudi, et bonne journée.', userEn: 'Thank you very much. See you on Thursday, and have a good day.',
      alts: [
        { fr: 'Merci, à jeudi.', en: 'Thanks, see you Thursday.' },
        { fr: 'Parfait, merci pour votre patience.', en: 'Perfect, thank you for your patience.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['repeter', 'nombres'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'À la quincaillerie', DANS_A9, [
  { q: 'Qu’est-ce que le client ne comprend pas d’abord ?', a: 'La fin de la réponse : « à côté des tuques ».' },
  { q: 'Quelles deux stratégies emploie-t-il ?', a: 'Il dit ce qui lui manque (« je n’ai pas bien saisi la fin »), puis il reformule pour vérifier (« si je comprends bien »).' },
  { q: 'Que veut dire « barrer mon cabanon » ?', a: 'Fermer à clé sa petite cabane de jardin : au Québec, barrer veut dire verrouiller.' },
  { q: 'Que montre la dernière réplique du vendeur ?', a: 'Qu’il apprécie l’effort du client, resté en français du début à la fin.' },
], 'rec-b2-31-texte-a9', ['repeter']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Demander', 'Le plus utile, quand tu n’as pas compris, c’est…', ['dire ce qui manque', 'dire « Quoi ? »'], 0,
    'L’autre sait quoi répéter. EN: name what you missed.'),
  ctl('Vérifier', '« Si je comprends bien, je passe demain ? » sert à…', ['vérifier ce que tu as compris', 'changer de sujet', 'passer à l’anglais'], 0,
    'Tu reformules, on confirme ou on corrige. EN: to check.'),
  ctl('L’anglais', 'Passer à l’anglais sans qu’on te le propose…', ['peut vexer ton interlocuteur', 'fait toujours plaisir'], 0,
    'Il peut y entendre un rejet de son français. EN: it can offend.'),
], ['repeter']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Quand tu ne comprends pas',
    opener: {
      line: 'Un garagiste de Lévis parle vite et tu perds le fil : ici tu apprends cinq gestes pour comprendre sans passer à l’anglais. EN: A mechanic in Lévis talks fast and you lose the thread: here you learn five moves to understand without switching to English.',
      imageRef: 'lessons/francais-regional/act09.jpg',
    },
    sections: [],
    milestone: 'Tu fais répéter la partie qui manque, tu demandes un mot, tu reformules, et tu restes en français. EN: You ask for the missing part, ask about a word, repeat back, and stay in French.',
    estScreens: 46, restPoints: ['a9-ecoute', 'a9-demander'],
  },
  sections: [A9_LECTURE, A9_ECOUTE, A9_GESTES, A9_DEMANDER, A9_ERREURS, A9_SCENARIO, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: RESPECT, INSÉCURITÉ, INSTITUTIONS
 *
 *  TEXT: a Brussels opinion column. MOVE: name linguistic insecurity, state
 *  what each institution really does (none ranks accents), and separate
 *  loving a careful French from judging people. Goes past lesson 24 in B2:
 *  the stance of the column is read, then used for the letter.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE = lecture('a10-lecture', '« Ton accent est mignon » : et si on arrêtait ?', 'Une chronique, à Bruxelles', TEXTE_NADIA, [],
  [
    { q: 'Devine le sens. « Un léger sentiment de culpabilité. » Qu’est-ce que la culpabilité ?', a: 'Le sentiment d’avoir fait quelque chose de mal, de devoir s’excuser.' },
    { q: 'Question globale. Quelle est la thèse de la chroniqueuse ?', a: 'Le problème n’est pas la norme, mais l’usage qu’on en fait : on peut aimer une langue soignée et respecter tous les accents.' },
    { q: 'Détail. Que fait l’Académie française, selon la chronique, et que ne fait-elle pas ?', a: 'Elle rédige un dictionnaire et publie des avis ; elle ne fait pas la loi sur la façon dont on parle.' },
    { q: 'Inférence. Pourquoi évoquer des parents qui corrigeaient leurs enfants ?', a: 'Pour montrer jusqu’où allait l’insécurité : on transmettait la honte de ses propres mots.' },
    { q: 'Inférence. À quoi sert la comparaison avec un accent parisien, à la fin ?', a: 'À faire voir le deux poids, deux mesures : on ne trouve jamais « mignon » l’accent qu’on croit neutre.' },
    { q: 'Ton et position. Quelle est la position de l’autrice ? Par quels procédés la défend-elle ?', a: 'Elle s’oppose au regard condescendant sur les accents : question dans le titre, guillemets autour de « mignon » et de « bon », exemples précis, puis une invitation directe au lecteur.' },
  ], 'rec-b2-31-nadia', ['insecurite', 'institutions']);

const A10_ROLES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a10-roles', layer: 'core', sheetId: 'sheet-centres',
  title: 'Qui fait quoi pour la langue',
  cols: ['Qui ou quoi', 'Où', 'Son rôle'],
  rows: [
    { cells: ['l’OQLF', 'Québec', 'la Charte, des mots nouveaux'], say: fr(E(1168)),
      detail: { title: 'L’Office québécois de la langue française', body: 'Il veille à l’application de la Charte de la langue française et propose des mots français, comme courriel ou clavardage. EN: applies Québec’s language charter, proposes terms.', say: fr(E(1169)) } },
    { cells: ['la Charte de la langue française', 'Québec', 'la loi sur le français'], say: fr(CHARTE),
      detail: { title: 'La Charte', body: 'La loi québécoise qui fait du français la langue commune : au travail, dans le commerce, à l’école. EN: Québec’s French-language law.', say: fr(E(1168)) } },
    { cells: ['la DGLFLF', 'France', 'la politique de la langue'], say: fr(E(1170)),
      detail: { title: 'La Délégation générale à la langue française et aux langues de France', body: 'Au ministère de la Culture, elle coordonne la politique de la langue et le travail sur les mots nouveaux. EN: France’s language policy body.', say: fr(E(1170)) } },
    { cells: ['l’Académie française', 'France', 'un dictionnaire, des avis'], say: fr(E(1171)),
      detail: { title: 'L’Académie française', body: 'Fondée en 1635, elle rédige un dictionnaire et publie des avis. Elle ne fait pas la loi sur l’usage. EN: a dictionary and opinions, no power over usage.', say: fr(E(1171)) } },
    { cells: ['la loi Toubon', 'France', 'le français obligatoire dans certains domaines'], say: fr(E(1178)),
      detail: { title: 'La loi Toubon', body: 'Depuis 1994, elle impose le français dans la publicité, au travail et dans d’autres domaines. Elle ne dit rien des accents. EN: French required in some fields since 1994.', say: fr(E(1182)) } },
    { cells: ['l’OIF', 'le monde', 'les pays qui ont le français en partage'], say: fr(E(1180)),
      detail: { title: 'L’Organisation internationale de la Francophonie', body: 'Elle réunit des États et des gouvernements autour de la langue française, sur tous les continents. EN: the international organisation of French-speaking states.', say: fr(E(1180)) } },
  ],
  audio: REC('rec-b2-31-roles'), say: REFRAME, terms: ['institutions'],
};

const A10_ATTITUDES: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-attitudes', layer: 'core', size: 'lg',
  title: 'Conseiller, respecter', frSub: 'Les institutions et les gens',
  groups: [
    grp('Qui fait quoi', [
      it(E(1168), 'au Québec'),
      it(E(1171), 'en France'),
      it(E(1173), 'le principe'),
    ], chk('L’Académie française peut-elle interdire de dire « septante » ?', ['non : elle donne des avis', 'oui : c’est son rôle'], 0,
      'Elle ne fait pas la loi sur l’usage. EN: it gives opinions only.')),
    grp('Le respect', [
      it(E(1174), 'une histoire'),
      it(E(1175), 'ce que produit l’insécurité'),
      it(E(1176), 'ce que demande le respect'),
    ], chk('Pourquoi des Belges évitaient-ils « à tantôt » devant des Parisiens ?', ['par insécurité linguistique', 'parce que c’était interdit'], 0,
      'Rien ne l’interdisait : ils craignaient d’être jugés. EN: out of insecurity.')),
    ctl('La norme', 'Aimer une langue soignée et respecter tous les accents, c’est…', ['compatible', 'contradictoire'], 0,
      'La chroniqueuse le dit : le problème n’est pas la norme, c’est l’usage qu’on en fait. EN: they go together.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['institutions', 'insecurite'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a10-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre idées fausses sur les institutions',
  errors: [
    { wrong: 'L’Académie française décide comment on doit parler.', right: fr(E(1171)),
      why: 'Son prestige le fait croire. Mais elle conseille ; l’usage appartient à ceux qui parlent. EN: it advises, it does not rule.' },
    { wrong: 'L’OQLF corrige l’accent des Québécois.', right: fr(E(1168)),
      why: 'On confond la langue et l’accent. L’Office s’occupe de la place du français, pas de la prononciation. EN: it deals with the place of French, not accents.' },
    { wrong: 'Une recommandation officielle oblige tout le monde à changer de mot.', right: fr(E(1182)),
      why: 'Elle vise surtout les administrations. Chacun reste libre de ses mots. EN: individuals are not bound.' },
    { wrong: 'Respecter les accents, c’est renoncer à bien parler.', right: fr(E(1181)),
      why: 'On oppose souvent les deux. Pourtant, on peut soigner sa langue et écouter tout le monde. EN: both go together.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['institutions', 'insecurite'],
};

const A10_LETTRE = pourTaLettre('a10-lettre', 'Le respect, avec des mots justes', [
  grp('Le ton de ta lettre', [
    it(E(1179), 'ta règle'),
    free('Leur français est moins bon, mais c’est mignon.', 'Their French is not as good, but it is cute.', 'un faux compliment'),
  ], chk('Laquelle a sa place dans ta lettre ?', ['« Je parle de respect, pas de bon ou de mauvais français. »', '« Leur français est moins bon, mais c’est mignon. »'], 0,
    'Un compliment qui classe reste un jugement. EN: a patronising compliment is still a judgement.')),
  grp('Citer une institution', [
    it(E(1169), 'un exemple précis'),
    it(E(1177), 'la limite'),
  ], chk('Tu parles de l’OQLF dans ta lettre. Tu écris qu’il…', ['propose des mots comme courriel', 'corrige l’accent des Québécois'], 0,
    'Un rôle exact, vérifiable. EN: an accurate role.')),
], ['institutions', 'insecurite']);

const A10_TEXTE = dansUnTexte('a10-texte', 'Courriel ou mail ?', DANS_A10, [
  { q: 'Que croit Tom au départ ?', a: 'Que « courriel » est une faute.' },
  { q: 'Quels deux arguments Sylvie lui donne-t-elle ?', a: 'Le mot a été proposé au Québec dans les années 1990, par l’office qui est aujourd’hui l’OQLF, et il figure aussi dans les dictionnaires publiés en France.' },
  { q: 'Que dit-elle de « mail » ?', a: 'Qu’il reste courant en France, surtout à l’oral : aucune des deux formes n’est fausse.' },
  { q: 'Quelle attitude Tom adopte-t-il à la fin ?', a: 'Il décide d’essayer « courriel » avec ses collègues : il s’adapte à eux, sans juger.' },
], 'rec-b2-31-texte-a10', ['institutions']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('L’Académie', 'L’Académie française…', ['rédige un dictionnaire et donne des avis', 'fait la loi sur la façon dont on parle'], 0,
    'Des avis, pas des ordres. EN: opinions, not orders.'),
  ctl('L’OQLF', 'L’Office québécois de la langue française…', ['veille à l’application de la Charte', 'note les accents'], 0,
    'La place du français, pas la prononciation. EN: the Charter.'),
  ctl('L’insécurité', 'L’insécurité linguistique, c’est…', ['croire que sa façon de parler vaut moins', 'ne pas connaître un mot'], 0,
    'Un sentiment, souvent appris. EN: feeling your French is worth less.'),
], ['institutions', 'insecurite']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Respect et institutions',
    opener: {
      line: 'Une chroniqueuse de Bruxelles en a assez qu’on trouve son accent « mignon » : ici tu nommes l’insécurité et tu sais ce que font vraiment les institutions. EN: A Brussels columnist is tired of hearing her accent called cute: here you name insecurity and learn what the institutions really do.',
      imageRef: 'lessons/francais-regional/act10.jpg',
    },
    sections: [],
    milestone: 'Tu expliques l’insécurité linguistique et le rôle exact de l’OQLF, de la DGLFLF et de l’Académie française. EN: You can explain linguistic insecurity and the exact role of the OQLF, the DGLFLF and the Académie française.',
    estScreens: 40, restPoints: ['a10-roles', 'a10-erreurs'],
  },
  sections: [A10_LECTURE, A10_ROLES, A10_ATTITUDES, A10_ERREURS, A10_LETTRE, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: TA LETTRE
 *
 *  The production act. A student's blog from Liège is the model to read;
 *  then the plan, a rehearsal out loud, the TASK, and the closing sections.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE = lecture('a11-lecture', 'Le jour où j’ai cru que mon français ne valait rien', 'Le blog d’un étudiant, à Liège', TEXTE_RAVI, [],
  [
    { q: 'Devine le sens. « Le lendemain, j’ai osé. » Qu’a osé faire Ravi ?', a: 'Demander à sa voisine ce que voulait dire son mot, malgré la peur de paraître ignorant.' },
    { q: 'Question globale. Que raconte Ravi, et qu’en a-t-il appris ?', a: 'Deux phrases belges qu’il n’a pas comprises à Liège ; il a appris que le problème venait de mots qu’il ne connaissait pas, ni de l’accent ni de son français.' },
    { q: 'Détail. Que veulent dire « à tantôt » et « je ne sais pas venir » en Belgique ?', a: '« À tout à l’heure » et « je ne peux pas venir ».' },
    { q: 'Inférence. Pourquoi la conversation « s’est arrêtée là » quand il est passé à l’anglais ?', a: 'Parce que sa voisine a répondu poliment en anglais, sans plus : il a fermé la porte au français et à l’explication.' },
    { q: 'Inférence. Quelles deux stratégies emploie-t-il le lendemain ?', a: 'Il demande le sens du mot (« que veut dire savoir, dans ta phrase ? »), puis il reformule pour vérifier (« si je comprends bien… »).' },
    { q: 'Ton et position. Ravi se moque-t-il de sa voisine ou de lui-même ? Comment le sais-tu ?', a: 'De lui-même, avec humour : « elle avait des jambes ! » ; il ne juge jamais la voisine et conclut sur ce qu’il fera mieux.' },
  ], 'rec-b2-31-ravi', ['repeter', 'regionalisme']);

const A11_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a11-plan', layer: 'core', sheetId: 'sheet-strategies',
  title: 'Cinq étapes pour ta lettre',
  steps: [
    '1. La scène : où, quand, avec qui, et la phrase que tu n’as pas comprise. EN: set the scene and the sentence you missed.',
    '2. Les mots : au moins quatre mots ou traits régionaux, chacun avec sa région ou son pays. EN: at least four regional items, each with its place.',
    '3. Ce que tu as fait : au moins deux stratégies, dans l’ordre. EN: at least two strategies, in order.',
    '4. Ce que tu as appris : sur les accents, avec respect, sans juger. EN: what you learned, with respect.',
    '5. Aujourd’hui : ce que tu ferais autrement, et un conseil à ton amie. EN: what you would do now, and advice.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['repeter', 'regionalisme'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a11-usages', layer: 'core', title: 'Des phrases pour ta lettre',
  cases: [
    { situation: 'Pour ouvrir ta lettre', fr: fr(E(1183)), en: en(E(1183)) },
    { situation: 'Pour dire ton erreur de départ', fr: fr(E(1184)), en: en(E(1184)) },
    { situation: 'Pour exprimer un regret, au passé', fr: fr(E(1164)), en: en(E(1164)) },
    { situation: 'Pour dire ce que tu as appris', fr: fr(E(1185)), en: en(E(1185)) },
  ],
  audio: AUDIO, say: REFRAME, terms: ['repeter'],
};

/** USE IT, out loud. Every French string here uses the typographic ’ only. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a11-scenario', layer: 'core', title: 'Au café, tu racontes',
  setting: 'Un café de Montréal, un dimanche. Ton amie Sophie arrive de Lyon pour un stage. Elle te demande comment se sont passées tes premières semaines ici.',
  turns: [
    {
      ai: 'Alors, tu as tout compris, en arrivant ?', en: 'So, did you understand everything when you arrived?',
      user: 'Pas du tout ! Au début, je croyais que je ne parlais pas français.', userEn: 'Not at all! At first, I thought I didn’t speak French. (The scene, with humour.)',
      alts: [
        { fr: 'Non, la première semaine, j’ai eu du mal.', en: 'No, the first week was hard.' },
        { fr: 'Pas tout, mais j’ai vite saisi l’essentiel.', en: 'Not everything, but I soon caught the main point.' },
      ],
    },
    {
      ai: 'Qu’est-ce qui t’a posé problème ?', en: 'What gave you trouble?',
      user: 'Les repas ! Ici, on dîne à midi et on soupe le soir.', userEn: 'Meals! Here, dîner is at noon and souper in the evening. (A regional item, with its place.)',
      alts: [
        { fr: 'Des mots comme dépanneur ou présentement, que je ne connaissais pas.', en: 'Words like dépanneur or présentement, which I didn’t know.' },
        { fr: 'Le t devant i et u, qui sonne presque comme « ts ».', en: 'The t before i and u, which sounds almost like ts.' },
      ],
    },
    {
      ai: 'Et quand tu ne comprenais pas, tu faisais quoi ?', en: 'And when you didn’t understand, what did you do?',
      user: 'Je disais : « Pardon, je n’ai pas bien saisi », et on me répétait.', userEn: 'I said: « Sorry, I didn’t quite catch that », and people repeated. (A strategy.)',
      alts: [
        { fr: 'Je reformulais pour vérifier : « Si je comprends bien… »', en: 'I rephrased to check: « If I understand correctly… »' },
        { fr: 'Je demandais le sens du mot, tout simplement.', en: 'I simply asked what the word meant.' },
      ],
    },
    {
      ai: 'Et tu ne parlais jamais anglais ?', en: 'And you never spoke English?',
      user: 'Si, au début. Mais j’ai vite compris que ça refermait la conversation.', userEn: 'Yes, at first. But I soon realised it closed the conversation down. (What you learned.)',
      alts: [
        { fr: 'Une ou deux fois, et je l’ai regretté.', en: 'Once or twice, and I regretted it.' },
        { fr: 'Plus maintenant : je reste en français, même quand c’est difficile.', en: 'Not any more: I stay in French, even when it’s hard.' },
      ],
    },
    {
      ai: 'Et l’accent, tu t’y es fait ?', en: 'And the accent, did you get used to it?',
      user: 'Oui, en quelques semaines. Et ici, c’est moi qui ai un accent !', userEn: 'Yes, within a few weeks. And here, I’m the one with the accent! (Respect, with humour.)',
      alts: [
        { fr: 'Oui, et je ne l’entends presque plus.', en: 'Yes, and I hardly hear it any more.' },
        { fr: 'Tout à fait. Un accent dit d’où l’on vient, c’est tout.', en: 'Absolutely. An accent says where you come from, that’s all.' },
      ],
    },
    {
      ai: 'Tu me donnes un conseil pour mon stage ?', en: 'Will you give me some advice for my internship?',
      user: 'N’aie pas peur de demander le sens des mots : tout le monde aide volontiers.', userEn: 'Don’t be afraid to ask what words mean: everyone is glad to help. (Your advice.)',
      alts: [
        { fr: 'Reste en français, et dis ce qui te manque.', en: 'Stay in French, and say what you missed.' },
        { fr: 'Écoute les premières minutes sans paniquer : l’oreille s’habitue.', en: 'Listen to the first few minutes without panicking: the ear adjusts.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['repeter', 'repas'],
};

/** THE GRADED TASK: a letter or blog post, DELF B2 PE register, graded on
 *  the B2 grid (task, coherence, range, accuracy, register). */
const A11_MISSION: Sec<'task'> = {
  type: 'task', id: 'a11-mission', title: 'Ta lettre', frSub: 'Mission écrite, registre du DELF B2',
  brief: 'Ton amie Inès, qui vit à Lyon, part bientôt vivre dans un autre pays francophone. Elle te demande comment ça s’est passé pour toi la première fois que tu n’as pas compris le français de quelqu’un. Écris-lui une lettre, ou un billet pour ton blog, où tu racontes cette conversation, ce que tu as appris et ce que tu ferais aujourd’hui.',
  briefEn: 'Your friend Inès, who lives in Lyon, is about to move to another French-speaking country. She asks how it went for you the first time you did not understand someone’s French. Write her a letter, or a blog post, telling the conversation, what you learned and what you would do today.',
  produce: 'Écris une lettre ou un billet de 200 à 250 mots : raconte la scène (où, avec qui), cite au moins quatre mots ou traits régionaux en nommant chaque fois la région ou le pays, décris au moins deux stratégies de compréhension, et dis ce que tu as appris, avec respect pour la façon de parler de l’autre.',
  responseSpec: { kind: 'text', minWords: 200, maxWords: 275 },
  rubric: {
    criteria: [
      { key: 'tache', label: 'Réalisation de la tâche', maxPoints: 3, descriptors: [
        '3 : La scène, au moins quatre mots ou traits régionaux avec leur région ou leur pays, au moins deux stratégies, ce que tu as appris et ce que tu ferais aujourd’hui. Entre 200 et 250 mots.',
        '2 : Un élément manque, trois régionalismes seulement, une région oubliée, ou la longueur sort un peu des limites.',
        '1 : Une liste de mots sans histoire, aucune stratégie, ou un texte beaucoup trop court.',
      ] },
      { key: 'coherence', label: 'Cohérence et cohésion', maxPoints: 3, descriptors: [
        '3 : Un ordre clair (la scène, le malentendu, ce que tu as fait, ce que tu as appris, aujourd’hui) et des liens variés (sur le moment, ensuite, heureusement, finalement, si c’était à refaire).',
        '2 : L’ordre se suit, mais les liens sont pauvres (et, puis, après) ou une idée arrive hors de sa place.',
        '1 : Des remarques juxtaposées, sans fil.',
      ] },
      { key: 'etendue', label: 'Étendue du lexique', maxPoints: 2, descriptors: [
        '2 : Les mots de la leçon, justes et variés : un régionalisme, une variété, l’affrication, l’insécurité linguistique, reformuler, faire répéter, et des régionalismes bien choisis.',
        '1 : Un vocabulaire vague ou répété (des mots bizarres, là-bas, ils disent).',
      ] },
      { key: 'correction', label: 'Correction', maxPoints: 2, descriptors: [
        '2 : Le récit au passé tient (imparfait et passé composé), le regret au conditionnel passé ou avec si et le plus-que-parfait, les régionalismes bien attribués ; peu d’erreurs, qui ne gênent pas.',
        '1 : Des erreurs qui gênent parfois, un régionalisme attribué à la mauvaise région, ou des temps du passé mélangés.',
      ] },
      { key: 'registre', label: 'Registre et respect', maxPoints: 2, descriptors: [
        '2 : Une lettre amicale et soignée, tu à ton amie ; tu décris les accents et les mots sans les juger, et tu cites les mots familiers entre guillemets, sans les reprendre à ton compte.',
        '1 : Un jugement ou une moquerie sur un accent, un juron cité, ou un texte trop familier pour une lettre de conseil.',
      ] },
    ],
  },
  scaffold: [
    'Chère Inès,',
    'Je t’écris pour te raconter',
    'Sur le moment, j’ai cru que',
    'Au Québec, on dit',
    'Alors, j’ai demandé',
    'Si je comprends bien,',
    'Ce que j’ai appris, c’est que',
    'Si c’était à refaire,',
  ],
  modelAnswer: 'Chère Inès,\n\nTu pars bientôt à Québec, alors je t’écris pour te raconter ma première semaine là-bas, l’an dernier. Le lundi, ma collègue Julie m’a invitée à dîner. Je suis arrivée chez elle à sept heures du soir : toute la famille avait fini de manger ! Au Québec, on dîne à midi et on soupe le soir, comme en Belgique et en Suisse, d’ailleurs. Le lendemain, au dépanneur, l’épicerie du coin, la caissière m’a demandé très vite : « Tu veux-tu un sac ? » Sur le moment, j’ai cru que c’était mon français qui n’allait pas, et j’ai failli passer à l’anglais. Heureusement, j’ai dit : « Pardon, je n’ai pas bien saisi. » Elle a répété plus lentement, en souriant. Ensuite, j’ai pris l’habitude de reformuler pour vérifier : « Si je comprends bien, le bureau est présentement fermé ? » Présentement, c’est « en ce moment », au Québec comme en Afrique de l’Ouest. J’ai aussi appris qu’à Montréal, tu se prononce presque « tsu » : ce n’est pas un défaut, c’est la règle de leur français, qu’on entend même à la radio.\n\nCe que j’ai appris, c’est qu’il n’y a pas de mauvais accent : un accent dit d’où l’on vient, jamais ce qu’on vaut. Si j’avais osé demander dès le premier jour, j’aurais tout compris plus vite. Alors, n’aie pas peur de demander le sens des mots : tout le monde t’aidera.\n\nJe t’embrasse,\nCamille\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : la scène (Québec, une collègue, le dépanneur) ; cinq régionalismes attribués (dîner et souper au Québec, en Belgique et en Suisse ; dépanneur ; « Tu veux-tu » ; présentement au Québec et en Afrique de l’Ouest ; l’affrication à Montréal) ; deux stratégies (faire répéter, reformuler) ; ce qu’elle a appris ; un conseil.\n2. Cohérence : la scène, le malentendu, ce qu’elle a fait, ce qu’elle a appris, un conseil ; sur le moment, heureusement, ensuite, aussi, alors.\n3. Étendue : reformuler, passer à l’anglais, un défaut, la règle de leur français.\n4. Correction : imparfait et passé composé ; le regret avec si et le plus-que-parfait, puis le conditionnel passé.\n5. Registre : amical (tu, Je t’embrasse), respectueux ; « Tu veux-tu un sac ? » est cité, jamais repris.',
  modelAnswerEn: 'Dear Inès, You are leaving for Québec soon, so I am writing to tell you about my first week there last year. On the Monday, my colleague Julie invited me to dîner. I arrived at seven in the evening: the whole family had finished eating! In Québec, dîner is at noon and souper in the evening, as in Belgium and Switzerland, by the way. The next day, at the dépanneur, the corner store, the cashier asked me very quickly: « Tu veux-tu un sac ? » At the time, I thought my French was the problem, and I almost switched to English. Luckily, I said: « Sorry, I didn’t quite catch that. » She repeated it more slowly, with a smile. After that, I got into the habit of rephrasing to check: « If I understand correctly, the office is présentement closed? » Présentement means « at the moment », in Québec and in West Africa. I also learned that in Montréal, tu is pronounced almost « tsu »: it is not a flaw, it is the rule of their French, which you even hear on the radio. What I learned is that there is no bad accent: an accent says where you come from, never what you are worth. If I had dared to ask from the first day, I would have understood everything faster. So don’t be afraid to ask what words mean: everyone will help you. Love, Camille. The marker’s notes (not counted): 1. Task: the scene, five regional items with their places, two strategies, what she learned, advice. 2. Coherence: scene, misunderstanding, action, lesson, advice, with varied connectors. 3. Range: rephrase, switch to English, a flaw, the rule of their French. 4. Accuracy: past narration; the regret with si and the plus-que-parfait, then the conditionnel passé. 5. Register: friendly and respectful; the familiar question is quoted, never taken over.',
  watchFor: [
    { pattern: 'A regional item with no region, or with the wrong one (septante « en France », dîner in the evening « au Québec »).', criterion: 'tache', feedback: 'Nomme la région ou le pays de chaque mot, et vérifie-la.', ref: 'a2-lettre' },
    { pattern: 'Africa named as one place (« en Afrique, on dit essencerie »).', criterion: 'tache', feedback: 'Nomme le pays : essencerie, c’est au Sénégal.', ref: 'a7-lettre' },
    { pattern: 'A judgement or a joke about an accent (bizarre, mal parler, mignon), or an accent imitated in spelling to make fun of it.', criterion: 'registre', feedback: 'Décris le trait et sa région, sans juger ni imiter.', ref: 'a6-lettre' },
    { pattern: 'A Creole called broken French, or Creole words presented as French.', criterion: 'tache', feedback: 'Le créole est une autre langue : distingue-le du français.', ref: 'a8-lettre' },
    { pattern: 'A sacre or any other swear word written out.', criterion: 'registre', feedback: 'Nomme la catégorie, sans citer de juron.', ref: 'a4-lettre' },
    { pattern: 'Fewer than two strategies, or strategies left vague (« j’ai fait des efforts »).', criterion: 'tache', feedback: 'Dis ce que tu as fait : faire répéter la partie qui manque, demander le mot, reformuler.', ref: 'a9-gestes' },
    { pattern: 'Switching to English presented as the solution.', criterion: 'tache', feedback: 'Raconte plutôt comment tu as continué en français, ou ce que tu ferais aujourd’hui.', ref: 'a9-erreurs' },
    { pattern: 'The Québec meals confused (dîner in the evening, déjeuner at noon).', criterion: 'correction', feedback: 'Au Québec : déjeuner le matin, dîner à midi, souper le soir.', ref: 'a4-piege' },
    { pattern: 'Past narration mixed up, or the regret written without the conditionnel passé (« si j’aurais osé »).', criterion: 'correction', feedback: 'Si j’avais osé, j’aurais compris : le plus-que-parfait après si, le conditionnel passé ensuite.', ref: 'a11-usages' },
    { pattern: 'A list of words with no story, no order, connectors limited to et, puis, après.', criterion: 'coherence', feedback: 'Suis le plan : la scène, le malentendu, ce que tu as fait, ce que tu as appris, aujourd’hui.', ref: 'a11-plan' },
    { pattern: 'Familiar regional words used as the writer’s own words (« mon char », « c’est plate ») instead of quoted.', criterion: 'registre', feedback: 'Cite les mots familiers entre guillemets : ils appartiennent à ceux qui les disent.', ref: 'a4-mots' },
  ],
  graderNotes: [
    'Word count: the body only, the greeting and the sign-off excluded (Paul, 2026-09-22). 200 to 250 with 10% tolerance (180 to 275) before criterion « tache » loses a point; responseSpec allows 275.',
    'A regional item counts when its meaning or use is right AND its place is right. Accept any attested attribution the lesson teaches (présentement: Québec or West Africa; dîner / souper: Québec, Belgium or Switzerland; septante: Belgium or Switzerland; huitante: Switzerland, Vaud, Valais or Fribourg). A feature of pronunciation counts as an item (l’affrication à Montréal, le e final du Midi).',
    'Accept any real conversation or setting, in or out of the lesson’s places, provided the items the learner names are correctly attributed. If the learner names an item the lesson did not teach, do not penalise it unless it is clearly misattributed.',
    'Strategies that count: asking for the missing part, asking the meaning of a word, repeating back or rephrasing, asking to speak more slowly, using context and key words, letting the ear adjust, asking for it in writing. « Switching to English » never counts as a strategy, though the learner may tell it as a first reflex.',
    'Respect is marked under « registre »: a mocking, judging or imitating line costs that point even if the rest is excellent. A quoted familiar form (« Tu veux-tu un sac ? ») is fine; the writer taking it over as his or her own voice is not.',
    'Past narration and the regret are marked under « correction »; « si j’aurais » is an error (lesson 3 in B2). The spoken variant decision of gate B2-2 applies: a dropped ne inside a quoted line is not an error.',
    'Accept regional vocabulary in the learner’s own French when it matches the learner’s own variety (a Québec learner writing « courriel » or « fin de semaine »).',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Cite other lessons by trail position (« la leçon 26 du B1 »), never by id.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['regionalisme', 'repeter'],
};

/** Say the lesson out loud. Every id carries `voiceflash`; no regional item
 *  is ever put in the learner's mouth (corpus §A.3). */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a11-parler', layer: 'core', title: 'Dis tes phrases à voix haute', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['repeter'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a11-cheat', layer: 'core', sheetId: 'sheet-strategies',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'un accent', v: 'une adresse, pas une note', say: fr(E(1005)),
      detail: { title: 'Tout le monde a un accent', body: 'Il dit d’où l’on vient, jamais ce qu’on vaut. Paris aussi a le sien. EN: everyone has one.', say: fr(E(1026)) } },
    { k: 'plusieurs centres', v: 'un écrit commun, des oraux variés', say: fr(E(1013)),
      detail: { title: 'Le français pluricentrique', body: 'La France, le Québec, la Belgique, la Suisse, l’Afrique ; le français de référence est un repère. EN: several centres, one reference.', say: fr(E(1021)) } },
    { k: 'le Québec', v: 'tsu, dzi ; dîner à midi', say: fr(E(1048)),
      detail: { title: 'À l’oreille et dans les mots', body: 'L’affrication devant i et u ; déjeuner, dîner, souper ; dépanneur, magasiner, présentement. EN: sounds and words of Québec.', say: fr(E(1030)) } },
    { k: 'Belgique, Suisse', v: 'septante, huitante, nonante', say: fr(E(1078)),
      detail: { title: 'Nombres et mots', body: 'À tantôt, une drache, un GSM (Belgique) ; un natel, huitante (Suisse). EN: Belgian and Swiss words.', say: fr(E(1077)) } },
    { k: 'ailleurs', v: 'le pays, le créole, l’emprunt', say: fr(E(1125)),
      detail: { title: 'Le Midi, l’Afrique, les créoles', body: 'Chocolatine (sud-ouest), maquis (Côte d’Ivoire), essencerie (Sénégal) ; le créole est une langue ; toubib vient de l’arabe. EN: name the place.', say: fr(E(1127)) } },
    { k: 'ne pas comprendre', v: 'dire ce qui manque, reformuler', say: fr(E(1001)),
      detail: { title: 'Cinq gestes', body: 'Laisse l’oreille s’habituer, appuie-toi sur le contexte, dis ce qui manque, reformule, demande le mot. Reste en français. EN: five moves, in French.', say: fr(E(1149)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['accent', 'repeter'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a11-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu sais maintenant que le français a plusieurs centres et que tout le monde a un accent. Tu reconnais l’affrication et les mots du Québec, les nombres et les mots de Belgique et de Suisse, l’accent du Midi, des mots de Côte d’Ivoire, du Sénégal et du Cameroun, et tu sépares le créole du français. Quand tu ne comprends pas, tu dis ce qui manque, tu reformules et tu restes en français. Le piège qui reste : citer un mot sans sa région, ou « l’Afrique » au lieu du pays. Avant l’examen, reprends les quatre mots régionaux de ta lettre et vérifie, pour chacun, la région et le sens. EN: Before the exam, check the region and the meaning of each regional word in your letter.',
  stats: [
    { k: 'Plusieurs centres', v: 'un écrit commun' },
    { k: 'Des mots d’ailleurs', v: 'toujours avec leur région' },
    { k: 'Ne pas comprendre', v: 'dire ce qui manque' },
    { k: 'Ta lettre', v: 'une scène, des mots, deux gestes' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 2 to 10, a round that
 *  recycles lessons 25, 26 and 38 in B1, 3 in A1 and 3, 24, 25 and 30 in B2
 *  (named in each question), and a DELF B2 CO round on a radio interview.
 *  `fold()` strips accents, case, punctuation and spacing and keeps digits,
 *  so every typed answer is ONE word or ONE number the prompt determines,
 *  and every errorSpot turns on one part of the sentence, with every equally
 *  correct fix accepted. The quiz never asks the learner to SAY a regional
 *  form. Authored slots are spread by `spreadSlots()`; no `why` names a
 *  position. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Une partie de cette phrase est fausse. Écris la phrase correcte. EN: Part of this sentence is wrong; write it correctly.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_Q): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });
const UN_MOT = 'Complète. Un mot.';
const CHIFFRES = 'Écris le nombre en chiffres.';

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a11-quiz', layer: 'core', title: 'L’examen', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r2-centres', label: 'Une langue, plusieurs centres', targets: ['centre-unique'],
      questions: [
        mc('Le français est une langue pluricentrique. Cela veut dire qu’il a…', ['plusieurs centres', 'un seul centre, Paris', 'aucune norme'], 0, 'La France, le Québec, la Belgique, la Suisse, l’Afrique francophone. EN: several centres.', 'a2-centres'),
        mc('Qu’est-ce qui varie le moins d’un pays francophone à l’autre ?', ['l’orthographe', 'l’accent', 'les mots du quotidien'], 0, 'L’écrit est presque commun. EN: spelling.', 'a2-trier'),
        mc('Selon l’article, le français de référence est…', ['un repère utile, que personne ne parle exactement', 'l’accent de Paris', 'le français des jeunes'], 0, 'Un outil commun, pas un modèle de valeur. EN: a landmark.', 'a2-lecture'),
        tI(UN_MOT, 'Un mot propre à une région s’appelle un ... .', 'régionalisme', 'Un mot d’ailleurs, pas une faute. EN: a regionalism.', 'a2-piege'),
        tI(UN_MOT, 'Au Québec, le dictionnaire ... décrit le français standard d’ici.', 'Usito', 'Le Québec a son dictionnaire du français standard. EN: Usito.', 'a2-piege'),
        mc('Où vivent la plupart des gens qui parlent français tous les jours ?', ['en Afrique', 'en France', 'au Canada'], 0, 'Selon l’OIF, en Afrique. EN: in Africa.', 'a2-trier'),
        eS('Le français est une langue pluricentrique : il n’a qu’un seul centre.', 'Le français est une langue pluricentrique : il a plusieurs centres.', 'Pluricentrique : plusieurs centres. EN: several centres.', 'a2-centres',
          ['Le français est une langue pluricentrique : il n’a pas un seul centre.', 'Le français est une langue pluricentrique : il n’a pas qu’un seul centre.']),
        lC('Écoute. Cette phrase parle-t-elle de l’écrit ou de l’oral ?', fr(E(1016)), ['de l’oral', 'de l’écrit'], 0, 'La musique d’une région : l’oral. EN: speech.', 'a2-centres'),
      ],
    },
    {
      id: 'r3-sons', label: 'Le Québec à l’oreille', targets: ['son-juge-faute'],
      questions: [
        mc('À Montréal, « tu » sonne presque « tsu ». Pourquoi ?', ['le t change devant i et u', 'la personne parle trop vite', 'c’est une faute'], 0, 'L’affrication, une règle de la variété. EN: t changes before i and u.', 'a3-traits'),
        mc('Dans lequel de ces mots entends-tu l’affrication, à Montréal ?', ['lundi', 'table', 'bateau'], 0, 'Un d devant i. EN: lundi.', 'a3-reperer'),
        mc('« Moé » et « toé » pour moi et toi, c’est…', ['familier, chez certains locuteurs', 'la norme de la radio', 'une faute'], 0, 'Une prononciation familière, surtout en famille. EN: familiar.', 'a3-traits'),
        tI(UN_MOT, 'Le trait qui fait sonner tu comme « tsu » s’appelle l’... .', 'affrication', 'Le t et le d devant i et u ; les linguistes disent aussi l’assibilation. EN: affrication.', 'a3-lecture', ['assibilation']),
        tI(UN_MOT, 'La variété populaire de Montréal s’appelle le ... .', 'joual', 'Une variété, pas tout le français du Québec. EN: joual.', 'a3-erreurs'),
        mc('Entend-on l’affrication au bulletin de nouvelles de Radio-Canada ?', ['oui', 'non'], 0, 'Elle fait partie du français standard du Québec. EN: yes.', 'a3-lecture'),
        eS('Au Québec, le t et le d changent devant a et o.', 'Au Québec, le t et le d changent devant i et u.', 'Seuls i et u déclenchent le trait. EN: before i and u.', 'a3-traits',
          ['Au Québec, le t et le d changent devant u et i.']),
        lC('Écoute. À Montréal, combien de t ou de d de cette phrase se prononceraient « ts » ou « dz » ?', fr(E(1030)), ['cinq', 'deux', 'aucun'], 0, 'Tu, dis, petit, lundi, midi. EN: five.', 'a3-reperer'),
      ],
    },
    {
      id: 'r4-quebec', label: 'Le Québec, les mots', targets: ['mot-quebec-mal-lu'],
      questions: [
        mc('Une collègue de Québec t’invite à dîner. C’est…', ['à midi', 'le soir', 'le matin'], 0, 'Au Québec, le dîner est le repas du midi. EN: at noon.', 'a4-mots'),
        mc('« Ma blonde », au Québec, c’est…', ['ma copine', 'ma sœur', 'une amie aux cheveux blonds'], 0, 'Un mot familier pour la copine. EN: my girlfriend.', 'a4-piege'),
        mc('Lequel de ces mots est familier ?', ['char', 'courriel', 'présentement'], 0, 'Char est familier ; les deux autres sont courants. EN: char.', 'a4-trier'),
        tI(UN_MOT, 'Au Québec, le repas du soir, c’est le ... .', 'souper', 'Déjeuner, dîner, souper. EN: souper.', 'a4-mots', ['le souper']),
        tI(UN_MOT, 'Au Québec, l’épicerie du coin s’appelle le ... .', 'dépanneur', 'Ouvert tard, au coin de la rue. EN: dépanneur.', 'a4-lecture', ['le dépanneur']),
        tI(UN_MOT, 'Au Québec, on répond souvent à un merci par le mot qui, en France, sert à accueillir : « ... ».', 'bienvenue', 'Bienvenue : de rien. EN: bienvenue.', 'a4-piege'),
        eS('Au Québec, on déjeune à midi et on soupe le soir.', 'Au Québec, on dîne à midi et on soupe le soir.', 'Le déjeuner est le repas du matin. EN: dîner at noon.', 'a4-piege',
          ['Au Québec, on déjeune le matin et on soupe le soir.']),
        lC('Écoute. Où la personne va-t-elle acheter du lait ?', fr(E(1054)), ['à l’épicerie du coin', 'au garage', 'au marché'], 0, 'Le dépanneur, au Québec. EN: the corner store.', 'a4-mots'),
      ],
    },
    {
      id: 'r5-belgique-suisse', label: 'La Belgique et la Suisse', targets: ['nombre-pays'],
      questions: [
        mc('En Belgique, 80 se dit…', ['quatre-vingts', 'huitante', 'octante'], 0, 'Septante et nonante, mais quatre-vingts. EN: quatre-vingts.', 'a5-nombres'),
        mc('« Je ne sais pas venir ce soir », en Belgique, veut dire…', ['je ne peux pas venir', 'je ne sais pas si je viens'], 0, 'Savoir au sens de pouvoir. EN: I can’t come.', 'a5-ou'),
        mc('Un natel, c’est…', ['un portable, en Suisse', 'un portable, en Belgique', 'un sac, au Québec'], 0, 'En Belgique, on dit un GSM. EN: a Swiss mobile.', 'a5-ou'),
        tI(CHIFFRES, 'septante-deux', '72', 'Septante, puis deux. EN: 72.', 'a5-nombres'),
        tI(CHIFFRES, 'nonante-cinq', '95', 'Nonante, puis cinq. EN: 95.', 'a5-nombres'),
        tI(UN_MOT, 'En Belgique, on appelle souvent un portable par trois lettres : un ... .', 'GSM', 'En Suisse, un natel. EN: GSM.', 'a5-ou'),
        eS('En Belgique, on dit huitante pour 80.', 'En Belgique, on dit quatre-vingts pour 80.', 'Huitante est suisse. EN: quatre-vingts in Belgium.', 'a5-nombres',
          ['En Suisse, on dit huitante pour 80.', 'Dans le canton de Vaud, on dit huitante pour 80.']),
        lC('Écoute. Combien la personne doit-elle payer ?', fr(E(1075)), ['75 francs', '65 francs', '85 francs'], 0, 'Septante-cinq : 75. EN: 75 francs.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-france', label: 'En France aussi, des accents', targets: ['accent-corrige'],
      questions: [
        mc('Dans l’accent du Midi, « petite » se prononce souvent…', ['avec le e final', 'sans le t', 'comme « petit »'], 0, 'Pe-ti-te : le e final s’entend. EN: with the final e.', 'a6-traits'),
        mc('Chez l’ingénieure de Toulouse, « pain » sonne un peu comme…', ['« pèng »', '« pan »', '« pin »'], 0, 'Une nasale suivie d’un petit son de consonne. EN: « pèng ».', 'a6-lecture'),
        mc('L’accent de Paris…', ['est un accent parmi d’autres', 'n’est pas un accent'], 0, 'On ne l’entend plus, voilà tout. EN: one among others.', 'a6-erreurs'),
        tI(UN_MOT, 'Dans le sud-ouest de la France, un pain au chocolat s’appelle souvent une ... .', 'chocolatine', 'À Paris, un pain au chocolat. EN: chocolatine.', 'a6-traits'),
        tI(UN_MOT, 'Le sentiment que sa façon de parler vaut moins, c’est l’insécurité ... .', 'linguistique', 'L’insécurité linguistique. EN: linguistic.', 'a6-juger'),
        mc('« Vous comptez garder cet accent avec nos clients ? » Cette question…', ['juge la personne sur sa façon de parler', 'vérifie une compétence'], 0, 'Elle vise l’origine, pas le métier. EN: it judges.', 'a6-juger'),
        eS('Un accent est une faute de prononciation.', 'Un accent n’est pas une faute de prononciation.', 'On corrige une faute ; on respecte un accent. EN: not a mistake.', 'a6-erreurs',
          ['Un accent n’est pas une faute.']),
        lC('Écoute. Cette phrase décrit-elle ou juge-t-elle ?', fr(E(1102)), ['elle décrit, sans juger', 'elle juge un accent'], 0, 'La personne d’abord. EN: it describes.', 'a6-lettre'),
      ],
    },
    {
      id: 'r7-afrique', label: 'Le français en Afrique', targets: ['afrique-sans-pays'],
      questions: [
        mc('Une essencerie, au Sénégal, c’est…', ['une station-service', 'une boulangerie', 'un restaurant'], 0, 'Essence et -erie. EN: a petrol station.', 'a7-mots'),
        mc('En Côte d’Ivoire, « mon téléphone est gâté » veut dire qu’il est…', ['en panne', 'neuf', 'offert'], 0, 'Gâter : abîmer, tomber en panne. EN: broken.', 'a7-mots'),
        mc('« On dit quoi ? », au Cameroun, veut dire…', ['comment ça va ?', 'qu’est-ce qu’on dit ?', 'répète !'], 0, 'Une salutation. EN: how are you?', 'a7-mots'),
        tI(UN_MOT, 'À Abidjan, le petit restaurant en plein air s’appelle un ... .', 'maquis', 'Le maquis, en Côte d’Ivoire. EN: maquis.', 'a7-pays'),
        tI(UN_MOT, 'À Abidjan, le minibus s’appelle un ... .', 'gbaka', 'Toujours plein. EN: gbaka.', 'a7-lecture'),
        mc('Pourquoi dire « tantie » à une femme plus âgée, en Côte d’Ivoire ?', ['par respect', 'parce que c’est sa tante', 'pour plaisanter'], 0, 'Une marque de respect, pas de famille. EN: out of respect.', 'a7-mots'),
        eS('En Afrique, on dit essencerie pour une station-service.', 'Au Sénégal, on dit essencerie pour une station-service.', 'Nomme le pays : l’Afrique n’est pas un pays. EN: in Senegal.', 'a7-lettre',
          [], 'Une partie de cette phrase est trop vague. Écris la phrase correcte. EN: Part of this sentence is too vague; write it correctly.'),
        lC('Écoute. Que veut dire « présentement », dans cette phrase ?', fr(E(1123)), ['en ce moment', 'en cadeau', 'demain'], 0, 'Présentement : en ce moment. EN: right now.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-contact', label: 'Les langues en contact', targets: ['creole-francais'],
      questions: [
        mc('Un créole, c’est…', ['une langue à part entière', 'du français mal parlé'], 0, 'Une grammaire à lui. EN: a language.', 'a8-piege'),
        mc('En Haïti, les langues officielles sont…', ['le créole et le français', 'le français seulement', 'l’anglais et le créole'], 0, 'Deux langues officielles. EN: Creole and French.', 'a8-langues'),
        mc('« Koman i lé ? » est…', ['du créole de La Réunion', 'du français de Belgique', 'de l’arabe'], 0, 'Comment ça va, en créole réunionnais. EN: Réunion Creole.', 'a8-trier'),
        tI(UN_MOT, 'Le mélange de français et d’anglais de la région de Moncton s’appelle le ... .', 'chiac', 'Une variété de contact, en Acadie. EN: chiac.', 'a8-langues'),
        tI(UN_MOT, 'Un médecin, en français familier venu de l’arabe, c’est un ... .', 'toubib', 'Comme kif-kif et souk. EN: toubib.', 'a8-trier'),
        mc('« Je parlons », en Acadie, veut dire…', ['nous parlons', 'je parle', 'ils parlent'], 0, 'Une forme ancienne du pluriel. EN: we speak.', 'a8-trier'),
        eS('« Sa ou fè ? » est du français familier des Antilles.', '« Sa ou fè ? » est du créole des Antilles.', 'C’est du créole, pas du français. EN: Creole.', 'a8-piege',
          ['« Sa ou fè ? » est du créole de Martinique et de Guadeloupe.', '« Sa ou fè ? » est du créole antillais.']),
        lC('Écoute. D’où vient le mot familier de cette phrase ?', fr(E(1141)), ['de l’arabe', 'du créole', 'de l’anglais'], 0, 'Toubib vient de l’arabe. EN: from Arabic.', 'a8-trier'),
      ],
    },
    {
      id: 'r9-strategies', label: 'Quand tu ne comprends pas', targets: ['anglais-reflexe'],
      questions: [
        mc('Tu n’as pas saisi la fin de la phrase. Le plus utile est de dire…', ['« Pardon, je n’ai pas bien saisi la fin. »', '« Quoi ? »', '« Vous parlez anglais ? »'], 0, 'Tu nommes ce qui manque. EN: name the missing part.', 'a9-gestes'),
        mc('« Pouvez-vous parler normalement ? » est…', ['une remarque blessante', 'une demande polie'], 0, 'Normalement juge l’autre. EN: it hurts.', 'a9-erreurs'),
        mc('« Si je comprends bien, je passe demain ? » sert à…', ['vérifier ce que tu as compris', 'changer de sujet'], 0, 'Tu reformules pour vérifier. EN: to check.', 'a9-demander'),
        tI(UN_MOT, 'Pardon, je n’ai pas bien ... .', 'saisi', 'La formule de l’acte 1. EN: caught.', 'a9-demander', ['compris', 'entendu']),
        tI(UN_MOT, 'Quand tu ne comprends pas, tu restes en ... .', 'français', 'Tu demandes, en français. EN: in French.', 'a9-lecture'),
        mc('Un mot est nouveau pour toi. Tu demandes…', ['le sens du mot', 'que la personne change d’accent'], 0, 'Le mot, jamais l’accent. EN: the meaning.', 'a9-gestes'),
        eS('Excusez-moi, je ne suis pas d’ici : vous pouvez parler normalement ?', 'Excusez-moi, je ne suis pas d’ici : vous pouvez parler plus lentement ?', 'Tu expliques ton problème, sans juger l’autre. EN: more slowly.', 'a9-erreurs',
          ['Excusez-moi, je ne suis pas d’ici : vous pouvez parler un peu plus lentement ?', 'Excusez-moi, je ne suis pas d’ici : vous pouvez parler moins vite ?', 'Excusez-moi, je ne suis pas d’ici : vous pouvez parler lentement ?']),
        lC('Écoute. Que fait cette personne ?', fr(E(1149)), ['elle reformule pour vérifier', 'elle demande de répéter', 'elle passe à l’anglais'], 0, 'Si j’ai bien compris : elle vérifie. EN: she checks.', 'a9-demander'),
      ],
    },
    {
      id: 'r10-institutions', label: 'Respect et institutions', targets: ['institution-mal-comprise'],
      questions: [
        mc('L’Académie française…', ['rédige un dictionnaire et donne des avis', 'fait la loi sur l’usage', 'note les accents'], 0, 'Des avis, pas des ordres. EN: a dictionary and opinions.', 'a10-roles'),
        mc('L’OQLF veille à l’application…', ['de la Charte de la langue française', 'de la loi Toubon', 'du dictionnaire de l’Académie'], 0, 'La Charte, au Québec. EN: the Charter.', 'a10-roles'),
        mc('Qui a proposé des mots comme courriel et clavardage ?', ['l’OQLF', 'l’Académie française'], 0, 'L’Office québécois de la langue française. EN: the OQLF.', 'a10-roles'),
        tI(UN_MOT, 'Le sentiment que son français vaut moins s’appelle l’... linguistique.', 'insécurité', 'L’insécurité linguistique. EN: insecurity.', 'a10-attitudes'),
        tI('Complète. Un nombre.', 'L’Académie française a été fondée en ... .', '1635', 'En 1635. EN: 1635.', 'a10-roles'),
        mc('Une recommandation de terminologie oblige…', ['surtout les administrations, pas les particuliers', 'chaque citoyen'], 0, 'Les particuliers restent libres. EN: not individuals.', 'a10-erreurs'),
        eS('La loi Toubon impose l’accent de Paris dans la publicité.', 'La loi Toubon impose le français dans la publicité.', 'Elle impose la langue, pas un accent. EN: French, not an accent.', 'a10-roles',
          ['La loi Toubon impose la langue française dans la publicité.']),
        lC('Écoute. De quelle organisation parle-t-on ?', fr(E(1180)), ['de l’OIF', 'de l’OQLF', 'de l’Académie française'], 0, 'Des États et des gouvernements. EN: the OIF.', 'a10-roles'),
      ],
    },
    {
      id: 'r11-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(REGISTRES_REF)} : « ${fr(CHAR_S)} » Ce mot « char » est…`, ['familier', 'soutenu', 'courant'], 0, `« ${B125_REFRAME} » EN: ${B125_REFRAME_EN}`, 'a4-mots'),
        mc(`${Cap(TU_VOUS_REF)} : au Québec, une caissière te tutoie. C’est…`, ['chaleureux, et courant', 'impoli'], 0, `« ${B126_REFRAME} » EN: ${B126_REFRAME_EN}`, 'a1-scene'),
        lC(`Écoute. ${Cap(ECOUTE_B1_REF)} : que fait cette personne ?`, fr(DIT_OU), ['elle vérifie un nombre', 'elle annonce un prix'], 0, `« ${B138_REFRAME} » EN: ${B138_REFRAME_EN}`, 'a9-demander'),
        mc(`${Cap(ECOUTE_B2_REF)} : un invité de radio dit « présentement ». Tu en conclus…`, ['qu’il vient peut-être du Québec ou d’Afrique de l’Ouest', 'qu’il fait une faute'], 0, `« ${B225_REFRAME} » EN: ${B225_REFRAME_EN}`, 'a4-piege'),
        tI(`${Cap(NOMBRES_REF)} : écris le nombre en chiffres.`, 'septante-sept', '77', 'Septante, puis sept. EN: 77.', 'a5-nombres'),
        mc(`${Cap(LITTERATURE_REF)} : dans un roman, un personnage de Montréal dit « c’est plate ». Ce mot sert surtout à…`, ['faire entendre la voix et l’origine du personnage', 'montrer que l’auteur parle mal'], 0, `« ${B230_REFRAME} » EN: ${B230_REFRAME_EN}`, 'a4-mots'),
        mc(`${Cap(CRITIQUE_REF)} : dans la chronique de Bruxelles, les guillemets autour de « mignon » montrent…`, ['la distance critique de l’autrice', 'une citation de dictionnaire'], 0, `« ${B224_REFRAME} » EN: ${B224_REFRAME_EN}`, 'a10-lecture'),
        eS('Si j’aurais osé demander, j’aurais tout compris plus vite.', 'Si j’avais osé demander, j’aurais tout compris plus vite.', 'Après si, le plus-que-parfait ; le conditionnel passé ensuite. EN: si + plus-que-parfait.', 'a11-usages',
          [], `${Cap(SI_PASSE_REF)} : une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.`),
      ],
    },
    {
      id: 'r12-examen', label: 'Comme au DELF B2', targets: ['examen-co'],
      questions: [
        lC('Format DELF B2, compréhension orale. Écoute l’invitée. Pour elle, un accent est…', ENTREVUE_LINES[0].fr, ['la trace de l’endroit où l’on a grandi', 'un défaut à corriger', 'un signe de mauvaise éducation'], 0, 'Une trace, pas un défaut. EN: a trace of where you grew up.', 'a1-reflexes'),
        lC('Format DELF B2. Écoute. Que dit-elle du français de référence ?', ENTREVUE_LINES[1].fr, ['il est utile, mais personne ne le parle tel quel', 'il faut le parler partout', 'il n’existe pas'], 0, 'Certes… mais : elle accorde, puis nuance. EN: useful, but nobody speaks it as such.', 'a2-centres'),
        lC('Format DELF B2. Écoute. Qu’est-ce qui la gêne ?', ENTREVUE_LINES[2].fr, ['qu’on rie d’un accent au lieu d’écouter', 'qu’on parle trop vite', 'qu’on emploie des mots régionaux'], 0, 'Rire au lieu d’écouter. EN: laughing instead of listening.', 'a6-juger'),
        lC('Format DELF B2. Écoute. Qu’est-ce qui a changé dans sa famille ?', ENTREVUE_LINES[3].fr, ['ses enfants disent septante sans gêne', 'sa grand-mère dit enfin septante', 'plus personne ne dit septante'], 0, 'La gêne a disparu d’une génération à l’autre. EN: the embarrassment is gone.', 'a10-attitudes'),
        lC('Format DELF B2. Écoute. Quel conseil donne-t-elle ?', ENTREVUE_LINES[4].fr, ['demander le mot', 'imiter l’accent', 'passer à l’anglais'], 0, 'Demander le mot, tout simplement. EN: ask for the word.', 'a9-gestes'),
        mc('Format DELF B2. D’après l’ensemble de l’entretien, quelle est l’attitude de l’invitée envers les accents ?', ['respectueuse et nuancée', 'moqueuse', 'indifférente'], 0, 'Elle défend les accents, sans rejeter la référence. EN: respectful and nuanced.', 'a10-lecture'),
        tI('Format DELF B2. Complète avec le mot de l’invitée. Un mot.', 'Pour elle, un accent est la ... de l’endroit où l’on a grandi.', 'trace', 'Son mot exact : la trace. EN: trace.', 'a1-reflexes'),
        eS('L’invitée pense qu’un accent est un défaut.', 'L’invitée pense qu’un accent n’est pas un défaut.', 'Elle dit le contraire : ce n’est pas un défaut. EN: not a flaw.', 'a1-reflexes',
          ['L’invitée pense qu’un accent est une trace.', 'L’invitée pense qu’un accent n’est pas un défaut mais une trace.'],
          'Format DELF B2. Un élément de ce résumé ne va pas. Écris la phrase correcte. EN: One element of this summary is wrong; write it correctly.'),
      ],
    },
  ],
  audio: AUDIO, say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. Each closed question's options are
 *  ROTATED, `correct` moved in step, onto the least-used slot so far. The
 *  option set and the right answer are unchanged. As b2.16 and b2.30. */
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
  type: 'reviewDeck', id: 'a11-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'a language with several centres', back: 'une langue pluricentrique', say: fr(E(1013)) },
    { front: 'the common standard of dictionaries and exams', back: 'le français de référence', say: fr(E(1021)) },
    { front: 't and d before i and u, in Québec', back: 'l’affrication', say: fr(E(1030)) },
    { front: 'the midday meal, in Québec', back: 'le dîner', say: fr(E(1059)) },
    { front: 'ninety, in Belgium and Switzerland', back: 'nonante', say: fr(E(1078)) },
    { front: 'a petrol station, in Senegal', back: 'une essencerie', say: fr(E(1118)) },
    { front: 'a language of its own, not broken French', back: 'le créole', say: fr(E(1127)) },
    { front: 'feeling that your French is worth less', back: 'l’insécurité linguistique', say: fr(E(1175)) },
    { front: 'what to say when you missed something', back: 'Pardon, je n’ai pas bien saisi.', say: fr(E(1147)) },
  ],
  audio: AUDIO, say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a11-roundup', layer: 'core', title: 'Les accents et le français régional, en résumé',
  body: `${REFRAME} ${Cap(REGISTRES_REF)} t’a appris les registres, ${TU_VOUS_REF} le tu et le vous d’un pays à l’autre ; cette leçon t’a fait entendre le français d’ailleurs : le Québec, la Belgique, la Suisse, le Midi, l’Afrique, les créoles, et ce qu’il faut faire quand on ne comprend pas. ${Cap(ARGOT_REF)} te fait entendre un autre français encore : le verlan et l’argot d’aujourd’hui, à reconnaître avant de décider de ne pas les employer. EN: Next: verlan and today’s slang, to recognise before deciding not to use them.`,
  points: [
    'Le français a plusieurs centres, un écrit commun, et une référence qui ne classe personne.',
    'Un mot régional se cite avec sa région ou son pays, jamais « en Afrique ».',
    'Un créole est une langue ; un accent n’est pas une faute.',
    'Quand tu ne comprends pas : dis ce qui manque, reformule, reste en français.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['accent', 'repeter'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Ta lettre',
    opener: {
      line: 'Une amie part vivre dans un autre pays francophone et te demande conseil : à toi de raconter la conversation qui t’a tout appris. EN: A friend is moving to another French-speaking country and asks for advice: your turn to tell the conversation that taught you everything.',
      imageRef: 'lessons/francais-regional/act11.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit ta lettre et passé l’examen : quatre-vingt-huit questions, onze manches. EN: You wrote your letter and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 140,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r5-belgique-suisse', 'a11-quiz/r9-strategies', 'a11-review'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`. A `sort` drill
 *  lists its first bucket's items first.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-centres', title: 'Plusieurs centres', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : un écrit commun, des oraux variés, une référence qui ne classe personne. EN: read each aloud.', items: [E(1013), E(1015), E(1016), E(1021), E(1026), E(1027)], audio: AUDIO },
  { id: 'd-sons', title: 'Un autre son, le même mot', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute, avec ta voix : tu décris les sons du Québec, tu ne les imites pas. EN: describe, do not imitate.', items: [E(1030), E(1034), E(1035), E(1040), E(1044), E(1047)], audio: AUDIO },
  { id: 'd-quebec', title: 'Les mots du Québec', format: 'mcq' as const, coach: 'Un mot connu peut changer de sens : vérifie le repas, la personne, le registre. EN: check the meaning.', q: 'Au Québec, le dîner, c’est…', opts: ['à midi', 'le soir'], correct: 0, why: 'Déjeuner le matin, dîner à midi, souper le soir. EN: at noon.', items: [E(1048), E(1059), E(1064), E(1053), E(1054), E(1056)], audio: AUDIO },
  { id: 'd-nombres', title: 'Belgique ou Suisse', format: 'sort' as const, coach: 'Deux piles : les mots de Belgique, puis ceux de Suisse. EN: Belgian words, then Swiss words.', buckets: ['en Belgique', 'en Suisse'], items: [E(1074), E(1073), E(1071), E(1069), E(1072), E(1084)], audio: AUDIO },
  { id: 'd-france', title: 'Décrire sans juger', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : chacune décrit un accent ou refuse de le juger. EN: describe, never judge.', items: [E(1089), E(1090), E(1096), E(1102), E(1103), E(1104)], audio: AUDIO },
  { id: 'd-afrique', title: 'Un mot, un pays', format: 'sort' as const, coach: 'Deux piles : la Côte d’Ivoire, puis le Sénégal. EN: Côte d’Ivoire, then Senegal.', buckets: ['en Côte d’Ivoire', 'au Sénégal'], items: [E(1107), E(1108), E(1109), E(1105), E(1106), E(1118)], audio: AUDIO },
  { id: 'd-contact', title: 'Une langue, pas une erreur', format: 'mcq' as const, coach: 'Un créole est une langue ; un emprunt est un mot français. EN: a Creole is a language.', q: 'Un créole, c’est…', opts: ['une langue à part entière', 'du français mal parlé'], correct: 0, why: 'Une grammaire à lui, une littérature. EN: a language.', items: [E(1127), E(1128), E(1129), E(1130), E(1133), E(1136)], audio: AUDIO },
  { id: 'd-strategies', title: 'Demander sans blesser', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute, puis dis-la sans regarder : ce sont tes phrases de secours. EN: your rescue phrases.', items: [E(1001), E(1147), E(1148), E(1149), E(1154), E(1155)], audio: AUDIO },
  { id: 'd-institutions', title: 'Qui fait quoi', format: 'mcq' as const, coach: 'Les institutions conseillent ; aucune ne classe les accents. EN: they advise.', q: 'L’Académie française…', opts: ['donne des avis', 'fait la loi sur l’usage'], correct: 0, why: 'Un dictionnaire et des avis. EN: opinions only.', items: [E(1168), E(1169), E(1170), E(1171), E(1173), E(1181)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 et le B2 en renfort', format: 'flashcard' as const, coach: 'Six phrases des leçons précédentes : dis ce que chacune t’apprend sur le français d’ailleurs. EN: say what each teaches.', items: [CHAR_S, TU_QC, DIT_OU, PRESENTEMENT, SEPTANTE_S, E(1164)], audio: AUDIO },
  { id: 'd-examen', title: 'L’attitude d’un invité', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : au DELF, l’attitude se lit dans des mots comme ceux-là. EN: attitude lives in these words.', items: [E(1005), E(1021), E(1097), E(1176), E(1155), E(1185)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'centre-unique', description: 'Treats Paris or reference French as the only real French, or a regional word as a mistake.', detectOn: ['a2-trier', 'a2-piege', 'a2-check', 'a11-mission'], drill: 'd-centres', retest: 'd-centres' },
  { id: 'son-juge-faute', description: 'Hears a Québec pronunciation feature as a mistake, as old French, or as something to imitate.', detectOn: ['a3-reperer', 'a3-erreurs', 'a3-check', 'a11-mission'], drill: 'd-sons', retest: 'd-sons' },
  { id: 'mot-quebec-mal-lu', description: 'Reads a Québec word with its France meaning (dîner in the evening, blonde as a hair colour) or misses its register.', detectOn: ['a4-trier', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-quebec', retest: 'd-quebec' },
  { id: 'nombre-pays', description: 'Mishears septante, huitante or nonante, or gives a Belgian or Swiss word to the wrong country.', detectOn: ['a5-ecoute', 'a5-ou', 'a5-check', 'a11-mission'], drill: 'd-nombres', retest: 'd-nombres' },
  { id: 'accent-corrige', description: 'Judges or corrects an accent from France (the Midi), or treats the Paris accent as no accent.', detectOn: ['a6-juger', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-france', retest: 'd-france' },
  { id: 'afrique-sans-pays', description: 'Treats African French as one variety, forgets the country, or reads maquis or gâté with the France meaning.', detectOn: ['a7-pays', 'a7-ecoute', 'a7-check', 'a11-mission'], drill: 'd-afrique', retest: 'd-afrique' },
  { id: 'creole-francais', description: 'Calls a Creole broken French, takes a Creole greeting for French, or thinks an Arabic borrowing has no origin.', detectOn: ['a8-trier', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-contact', retest: 'd-contact' },
  { id: 'anglais-reflexe', description: 'Switches to English, says Quoi, or comments on the accent instead of naming the missing part and checking.', detectOn: ['a9-demander', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-strategies', retest: 'd-strategies' },
  { id: 'institution-mal-comprise', description: 'Credits an institution with power over accents or usage, or takes linguistic insecurity for a personal failing.', detectOn: ['a10-attitudes', 'a10-erreurs', 'a10-check', 'a11-mission'], drill: 'd-institutions', retest: 'd-institutions' },
  { id: 'recyclage', description: 'Loses a link to earlier lessons: register, tu in Québec, checking by ear, septante, a regional word in fiction, stance, the past unreal si clause.', detectOn: ['a4-mots', 'a9-demander', 'a10-lecture'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'examen-co', description: 'In a DELF B2 listening about accents, misses the speaker’s stance, her concession or her exact word.', detectOn: ['a2-lecture', 'a10-lecture', 'a11-mission'], drill: 'd-examen', retest: 'd-examen' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` names a position. As b2.16 and b2.30. */
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
  sheet('sheet-centres', 'Une langue, plusieurs centres', ['pluricentrique', 'le français de référence', 'les institutions'], [
    teach('sheet-centres-teach', 'Plusieurs centres, un écrit commun',
      `${REFRAME} Le français a plusieurs centres : la France, le Québec, la Belgique, la Suisse, les pays d’Afrique francophone. L’écrit (orthographe, grammaire, l’essentiel du vocabulaire) est presque commun ; l’oral varie. Le français de référence est la forme des dictionnaires et des examens : un repère utile, que personne ne parle exactement, et qui ne sert pas à classer les gens. EN: ${REFRAME_EN}`),
    table('sheet-centres-oral-ecrit', 'Ce qui est commun, ce qui varie', ['Domaine', 'Commun', 'Variable'], [
      ['l’écrit', 'orthographe, grammaire, la plupart des mots', 'quelques centaines de mots du quotidien'],
      ['l’oral', 'la langue elle-même', 'l’accent, la mélodie, certaines voyelles'],
      ['les dictionnaires', 'le français de référence', 'Usito au Québec ; des dictionnaires du français d’Afrique, de Belgique, de Suisse'],
    ]),
    table('sheet-centres-institutions', 'Qui fait quoi', ['Qui ou quoi', 'Où', 'Rôle'], [
      ['Office québécois de la langue française', 'Québec', 'veille à l’application de la Charte de la langue française ; propose des mots (courriel, clavardage)'],
      ['Charte de la langue française', 'Québec', 'la loi qui fait du français la langue commune'],
      ['Délégation générale à la langue française et aux langues de France', 'France, ministère de la Culture', 'coordonne la politique de la langue et le travail sur les mots nouveaux'],
      ['Académie française (1635)', 'France', 'rédige un dictionnaire et donne des avis ; ne fait pas la loi sur l’usage'],
      ['loi Toubon (1994)', 'France', 'le français obligatoire dans la publicité, au travail et dans d’autres domaines'],
      ['Direction de la langue française', 'Fédération Wallonie-Bruxelles', 'la promotion du français et le travail sur les mots nouveaux en Belgique francophone'],
      ['Délégation à la langue française (CIIP)', 'Suisse romande', 'observe les usages du français en Suisse et conseille les cantons romands'],
      ['Organisation internationale de la Francophonie', 'le monde', 'réunit des États et des gouvernements qui ont le français en partage'],
    ]),
  ]),
  sheet('sheet-quebec', 'Le français du Québec', ['les sons', 'les mots', 'les repas'], [
    teach('sheet-quebec-teach', 'À l’oreille et dans les mots',
      `Le français du Québec a ses sons, réguliers, qu’on entend chez tout le monde, radio comprise, et ses mots, dont certains sont familiers et d’autres courants. La voix de l’appli parle un français de France : les sons, ici, se lisent dans la notation. ${Cap(REGISTRES_REF)} a présenté les mots familiers ; cette fiche les range avec les autres. Les sacres sont des jurons québécois, souvent tirés du vocabulaire religieux : on les reconnaît, on ne les répète pas. EN: Québec’s sounds and words, familiar or everyday.`),
    table('sheet-quebec-sons', 'Les sons', ['Trait', 'Mots', 'À l’oreille', 'Registre'], [
      ['affrication du t', 'tu, petit', '« tsu », « petsi »', 'tous'],
      ['affrication du d', 'dis, lundi, midi', '« dzi », « lundzi », « midzi »', 'tous'],
      ['relâchement', 'vite, jupe, route', 'i, u, ou un peu plus ouverts', 'tous'],
      ['diphtongues', 'père, fête', '« paère », « faète »', 'surtout détendu'],
      ['oi familier', 'moi, toi', '« moé », « toé »', 'familier, certains locuteurs'],
      ['a et â', 'patte, pâte', 'deux voyelles distinctes', 'tous'],
    ]),
    table('sheet-quebec-mots', 'Les mots', ['Mot', 'Sens', 'Registre'], [
      ['un dépanneur', 'l’épicerie du coin', 'courant'],
      ['magasiner', 'faire les magasins', 'courant'],
      ['présentement', 'en ce moment (aussi en Afrique de l’Ouest)', 'courant'],
      ['la fin de semaine', 'le week-end', 'courant'],
      ['un courriel', 'un e-mail', 'courant'],
      ['une tuque, des mitaines', 'un bonnet, des moufles', 'familier (tuque), courant (mitaines)'],
      ['un breuvage', 'une boisson', 'familier'],
      ['bienvenue (après merci)', 'de rien', 'courant à l’oral'],
      ['barrer la porte', 'fermer à clé', 'familier'],
      ['ma blonde, mon chum', 'ma copine, mon copain', 'familier'],
      ['un char', 'une voiture', 'familier'],
      ['c’est plate', 'c’est ennuyeux', 'familier'],
      ['jaser', 'bavarder', 'familier'],
    ]),
    table('sheet-quebec-repas', 'Les repas', ['Moment', 'Québec, Belgique, Suisse', 'France'], [
      ['le matin', 'le déjeuner', 'le petit-déjeuner'],
      ['à midi', 'le dîner', 'le déjeuner'],
      ['le soir', 'le souper', 'le dîner'],
    ]),
  ]),
  sheet('sheet-belgique-suisse', 'La Belgique et la Suisse', ['les nombres', 'les mots'], [
    teach('sheet-belgique-suisse-teach', 'Des nombres réguliers, des mots de tous les jours',
      `Septante et nonante suivent la série trente, quarante, cinquante : ils sont réguliers. La Belgique garde quatre-vingts ; en Suisse, dans les cantons de Vaud, du Valais et de Fribourg, on dit huitante. ${Cap(NOMBRES_REF)} t’a fait reconnaître septante et nonante. « Une fois », après un impératif (« viens une fois »), est une tournure du français populaire de Bruxelles, souvent caricaturée : elle adoucit une demande. EN: regular numbers, and everyday Belgian and Swiss words.`),
    table('sheet-belgique-suisse-nombres', 'Les nombres', ['Nombre', 'France', 'Belgique', 'Suisse'], [
      ['70', 'soixante-dix', 'septante', 'septante'],
      ['71', 'soixante et onze', 'septante et un', 'septante et un'],
      ['80', 'quatre-vingts', 'quatre-vingts', 'huitante (Vaud, Valais, Fribourg), ailleurs quatre-vingts'],
      ['90', 'quatre-vingt-dix', 'nonante', 'nonante'],
      ['99', 'quatre-vingt-dix-neuf', 'nonante-neuf', 'nonante-neuf'],
    ]),
    table('sheet-belgique-suisse-mots', 'Les mots', ['Mot', 'Pays', 'Sens'], [
      ['à tantôt', 'Belgique (aussi en Suisse et au Québec)', 'à tout à l’heure, plus tard dans la journée'],
      ['s’il vous plaît (en tendant un objet)', 'Belgique', 'voilà, tenez'],
      ['savoir (je ne sais pas venir)', 'Belgique', 'pouvoir'],
      ['une drache', 'Belgique', 'une grosse averse'],
      ['un GSM', 'Belgique', 'un téléphone portable'],
      ['un kot', 'Belgique', 'une chambre d’étudiant'],
      ['un natel', 'Suisse', 'un téléphone portable'],
      ['dîner, souper', 'Belgique, Suisse', 'le repas de midi, le repas du soir'],
    ]),
  ]),
  sheet('sheet-ailleurs', 'Ailleurs en francophonie', ['le Midi', 'l’Afrique', 'les créoles', 'l’Acadie', 'le Maghreb'], [
    teach('sheet-ailleurs-teach', 'Chaque mot avec son lieu',
      'Un mot ou un trait se cite toujours avec sa région ou son pays : jamais « en Afrique », toujours « en Côte d’Ivoire » ou « au Sénégal ». Un créole est une langue à part entière, pas du français. Un mot emprunté à l’arabe, comme toubib, est du français familier. EN: always name the place; a Creole is a language.'),
    table('sheet-ailleurs-france', 'En France', ['Trait ou mot', 'Où', 'Ce que tu entends'], [
      ['le e final prononcé', 'le Midi', '« u-ne pe-ti-te ta-ble »'],
      ['la nasale et sa consonne', 'le Midi', '« pèng » pour pain'],
      ['une chocolatine', 'le sud-ouest (et le Québec)', 'un pain au chocolat'],
      ['l’accent de Paris', 'Paris', 'un accent, qu’on n’entend plus'],
    ]),
    table('sheet-ailleurs-afrique', 'En Afrique, pays par pays', ['Mot', 'Pays', 'Sens'], [
      ['un maquis', 'Côte d’Ivoire', 'un petit restaurant en plein air'],
      ['un gbaka', 'Côte d’Ivoire (Abidjan)', 'un minibus'],
      ['une tantie', 'Côte d’Ivoire', 'une femme plus âgée, appelée ainsi par respect'],
      ['gâté', 'Côte d’Ivoire, Cameroun', 'en panne, abîmé'],
      ['enceinter', 'Cameroun, et d’autres pays d’Afrique', 'rendre enceinte'],
      ['on dit quoi ?', 'Cameroun, Côte d’Ivoire', 'comment ça va ?'],
      ['une essencerie', 'Sénégal', 'une station-service'],
      ['une dibiterie', 'Sénégal', 'un restaurant de viande grillée'],
      ['un deuxième bureau', 'RD Congo, Congo, Côte d’Ivoire', 'un partenaire caché'],
      ['présentement', 'Afrique de l’Ouest, Québec', 'en ce moment'],
    ]),
    table('sheet-ailleurs-contact', 'Créoles, Acadie, Maghreb', ['Forme', 'Où', 'Ce que c’est'], [
      ['Sa ou fè ?', 'Martinique, Guadeloupe', 'du créole : comment ça va ?'],
      ['Koman i lé ?', 'La Réunion', 'du créole : comment ça va ?'],
      ['le créole et le français', 'Haïti', 'les deux langues officielles'],
      ['un cari', 'La Réunion', 'un plat mijoté et épicé'],
      ['je parlons', 'Acadie', 'une forme ancienne : nous parlons'],
      ['le chiac', 'région de Moncton', 'une variété de contact, français et anglais'],
      ['toubib, kif-kif, souk', 'France (de l’arabe)', 'des mots familiers : médecin, pareil, désordre'],
    ]),
  ]),
  sheet('sheet-strategies', 'Comprendre un accent, écrire ta lettre', ['les cinq gestes', 'les phrases utiles', 'le plan de ta lettre'], [
    teach('sheet-strategies-teach', 'Cinq gestes, deux refus',
      `Laisse passer les premières minutes ; appuie-toi sur le contexte et les mots-clés ; dis ce qui manque ; reformule pour vérifier ; demande le mot, pas l’accent. Et deux refus : passer à l’anglais sans qu’on te le propose, commenter ou imiter l’accent. ${Cap(ECOUTE_B1_REF)} t’a appris à faire répéter au téléphone ; ${ECOUTE_B2_REF}, à suivre un débat à vitesse réelle. EN: five moves, two refusals.`),
    table('sheet-strategies-phrases', 'Les phrases utiles', ['Pour…', 'Tu dis'], [
      ['dire ce qui manque', 'Pardon, je n’ai pas bien saisi la fin.'],
      ['demander de répéter', 'Pourriez-vous répéter la fin de la phrase ?'],
      ['demander un mot', 'Excusez-moi, que veut dire « barrer », ici ?'],
      ['vérifier', 'Si j’ai bien compris, vous passez samedi matin.'],
      ['expliquer ton problème', 'Excusez-moi, je ne suis pas d’ici : vous pouvez parler un peu plus lentement ?'],
      ['remercier', 'Merci de m’avoir expliqué.'],
    ]),
    table('sheet-strategies-plan', 'Le plan de ta lettre', ['Étape', 'Ce que tu écris'], [
      ['1', 'la scène : où, quand, avec qui, la phrase non comprise'],
      ['2', 'au moins quatre mots ou traits, chacun avec sa région ou son pays'],
      ['3', 'au moins deux stratégies, dans l’ordre'],
      ['4', 'ce que tu as appris, avec respect'],
      ['5', 'ce que tu ferais aujourd’hui, et un conseil'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-31-[a-z0-9-]+/g) ?? [])];

const TEXT_BRIEF = 'ONE VOICE, one take, read plainly as the text it is (a post, an email, an article), never performed. The label « Texte original écrit pour la leçon » is read plainly first.';
const NO_ACCENT_PLAY = 'NEVER imitate or exaggerate an accent: a real speaker of the variety, speaking naturally, or a neutral voice.';
const REC_DESC: Record<string, string> = {
  'rec-b2-31-hannah': `The act 1 forum post. ${TEXT_BRIEF} A young woman whose first language is English, speaking good B2 French with a light English accent of her own (the post says so). The quoted cashier line « Voyons, tu parles français, toi ! » in a Montréal woman's voice if a second voice is available.`,
  'rec-b2-31-centres': `The act 2 magazine article. ${TEXT_BRIEF} Any neutral voice.`,
  'rec-b2-31-centres-cartes': 'The four cards on pluricentric French. One neutral voice, even pace.',
  'rec-b2-31-piege-centres': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-b2-31-chronique': `The act 3 radio column. ${TEXT_BRIEF} NEEDS A QUÉBÉCOIS VOICE: a Montréal radio columnist, male or female, speaking standard Québec French with its natural affrication (tu, dis, petit, lundi, midi). The quoted forms « tsu », « dzi », « paère », « faète », « moé », « toé » are said as described, as examples, without mockery. ${NO_ACCENT_PLAY}`,
  'rec-b2-31-traits': `The six Québec features (act 3). NEEDS A QUÉBÉCOIS VOICE for the row sentences, so the learner finally HEARS what the notation describes: « Tu dis que le petit arrive lundi midi », « La route est longue, mais on arrive vite », « Mon père prépare la fête » (a relaxed diphthong is fine), « Moi, je reste chez toi ce soir » (standard moi, toi: do NOT say moé, toé), « Une patte de chat, une pâte à pizza » (two distinct a). ${NO_ACCENT_PLAY} Until then, TTS fr-FR: the cards say so on screen.`,
  'rec-b2-31-texte-a3': `The forum answer (act 3). ${TEXT_BRIEF} A Québécois voice for Mathieu if available.`,
  'rec-b2-31-julie': `The act 4 email. ${TEXT_BRIEF} NEEDS A QUÉBÉCOISE VOICE (Québec City), warm and informal. « c’est plate », « mon chum », « si ça te tente » said naturally. The word « sacres » only: no swear word is ever spoken.`,
  'rec-b2-31-mots': 'The four Québec word cards. A Québécois voice if available, plain pace.',
  'rec-b2-31-message': `REQUIRED FOR THE EAR MISSION (act 4): Julie's voicemail, eight lines, ONE TAKE, ONE VOICE, in authored order, at the speed of a real phone message. NEEDS A QUÉBÉCOISE VOICE: this is the lesson's first chance to hear the words in their accent. ${NO_ACCENT_PLAY}`,
  'rec-b2-31-piege-mots': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-b2-31-texte-a4': 'The snack-bar menu (act 4). One voice, read as a menu: prices and hours plainly, « 11 h » as « onze heures ».',
  'rec-b2-31-weekend': `The act 5 travel blog. ${TEXT_BRIEF} Karim, a young man from Lyon. The quoted lines: « Quelle drache ! », « À tantôt ! » and « Viens une fois ici ! » in a BELGIAN voice (Brussels) if available; « Je t’envoie l’adresse sur ton natel » in a SWISS voice (Vaud). « Viens une fois ici » said as a real grandfather calls a child, never as a joke. ${NO_ACCENT_PLAY}`,
  'rec-b2-31-nombres': 'The six number rows (act 5). A BELGIAN or SWISS (Vaud) voice for the sentences with septante, huitante, nonante; numbers said naturally, not slowed.',
  'rec-b2-31-cycles': `REQUIRED FOR THE EAR MISSION (act 5): the call to a Lausanne bike shop, eight lines, ONE TAKE, TWO VOICES (the shop assistant, SWISS FRENCH from Vaud; the customer, any voice), in authored order, at natural phone speed. « septante-deux » and « cent huitante » at normal speed: the learner must catch them by ear. ${NO_ACCENT_PLAY}`,
  'rec-b2-31-texte-a5': 'The Liège group chat (act 5). One or two BELGIAN voices, names read as labels; « Je ne sais pas venir » and « Il drache » said naturally.',
  'rec-b2-31-toulouse': `The act 6 testimony. ${TEXT_BRIEF} NEEDS A VOICE FROM TOULOUSE (the Midi), a woman in her twenties, with her natural southern accent: final e sounded, nasal vowels with their consonant tail. The recruiter's question in a neutral voice. ${NO_ACCENT_PLAY}`,
  'rec-b2-31-accents-france': 'The six examples (act 6). A southern voice for the first three rows (petite table ronde; pain, vin, demain; chocolatine), a neutral voice for the rest.',
  'rec-b2-31-texte-a6': 'The Bordeaux bakery (act 6). TWO VOICES: the baker, with a south-western accent; the customer, from Lille, any northern or neutral voice. Friendly, never comic.',
  'rec-b2-31-camille': `The act 7 intern's blog. ${TEXT_BRIEF} Camille is from Sherbrooke: a QUÉBÉCOISE voice. The quoted « On dit quoi ? » in an IVORIAN voice if available.`,
  'rec-b2-31-afrique': 'The four African word cards (act 7). An IVORIAN voice for the Côte d’Ivoire and Cameroun cards, a SENEGALESE voice for the essencerie card, if available; plain pace.',
  'rec-b2-31-maquis': `REQUIRED FOR THE EAR MISSION (act 7): lunch at a maquis in Abidjan, eight lines, ONE TAKE, THREE VOICES (a colleague and the woman serving: IVORIAN FRENCH; Camille: QUÉBÉCOISE), in authored order, at natural speed. The server is addressed as « Tantie » with respect. ${NO_ACCENT_PLAY}`,
  'rec-b2-31-texte-a7': 'The Dakar messages (act 7). Two SENEGALESE voices if available, names read as labels.',
  'rec-b2-31-contact': `The act 8 magazine article. ${TEXT_BRIEF} A neutral voice. The Creole greetings « Sa ou fè ? » and « Koman i lé ? » said correctly: by a Martinican or Guadeloupean speaker and a Réunionese speaker if available, or in a neutral voice that does not guess.`,
  'rec-b2-31-contact-exemples': 'The six contact examples (act 8). The two Creole greetings by speakers of those Creoles if available (see rec-b2-31-contact); the others in a neutral voice.',
  'rec-b2-31-piege-contact': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-b2-31-texte-a8': 'Maëlle’s email from Fort-de-France (act 8). A MARTINICAN voice if available; « Sa ou fè ? » said naturally.',
  'rec-b2-31-conseils': `The act 9 advice column. ${TEXT_BRIEF} A neutral, friendly voice; the quoted rescue phrases with the slight lift of a quotation.`,
  'rec-b2-31-garage': `REQUIRED FOR THE EAR MISSION (act 9): the call to a garage in Lévis, eight lines, ONE TAKE, TWO VOICES (the mechanic: QUÉBÉCOIS, familiar, fast, with the dropped ne; the caller: any voice, slower, polite), in authored order. The mechanic slows down after « Pardon, je n’ai pas bien saisi ». ${NO_ACCENT_PLAY}`,
  'rec-b2-31-texte-a9': 'The hardware store (act 9). TWO VOICES: the clerk, QUÉBÉCOIS; the customer, from Lyon.',
  'rec-b2-31-nadia': `The act 10 column. ${TEXT_BRIEF} A BELGIAN woman's voice (Brussels), measured, a touch of irony in the words only.`,
  'rec-b2-31-roles': 'The six institution rows (act 10). One neutral voice; names of institutions said in full.',
  'rec-b2-31-texte-a10': 'The forum exchange (act 10). Tom from Lyon, Sylvie from Québec (a Québécoise voice if available).',
  'rec-b2-31-ravi': `The act 11 model blog. ${TEXT_BRIEF} Ravi, a young man whose first language is not French. The neighbour's lines (« À tantôt ! », « Je ne sais pas venir au souper, j’ai cours. ») in a BELGIAN voice (Liège) if available.`,
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 31',
  intro: 'You can follow natural-speed French and you know the registers. But French is spoken on five continents, and a Montréal cashier, a Brussels baker or an Abidjan colleague may not sound like your textbook. This lesson teaches you to understand them, never to imitate them: French as a language with several centres, the sounds and words of Québec, the numbers and words of Belgium and Switzerland, the accents of France, the French of Côte d’Ivoire, Senegal and Cameroon, Creoles as languages of their own, and five moves for when you do not understand. It ends with a 200 to 250 word letter about a conversation you did not understand at first.',
  skill: 'CO',
  grammarAssumed: [REGISTRES_UNIT, TU_VOUS_UNIT, ECOUTE_B1_UNIT, ECOUTE_B2_UNIT, NOMBRES_UNIT],
  grammarIntroduced: [
    'French as a pluricentric language: several centres, a shared written standard, the français de référence as a landmark rather than a measure of speakers',
    'The main audible features of Québec French (affrication of t and d before i and u, vowel laxing, diphthongs, familiar moé and toé, patte and pâte), recognised through description and notation, never imitated',
    'Everyday regional vocabulary with its place and register: Québec (the meals, dépanneur, présentement, tuque, bienvenue), Belgium and Switzerland (septante, huitante, nonante, à tantôt, GSM, natel, drache, savoir for pouvoir), the Midi, Côte d’Ivoire, Senegal and Cameroon',
    'Languages and varieties in contact: the Creoles of the Antilles, La Réunion and Haiti as languages, Acadian French and chiac, familiar French words borrowed from Arabic',
    'Strategies for an unfamiliar accent (naming the missing part, asking about the word, repeating back, staying in French), linguistic insecurity, and the real roles of the OQLF, the DGLFLF, the Académie française and the OIF',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Tu suis le français à vitesse réelle et tu connais les registres. Mais le français se parle sur cinq continents, et une caissière de Montréal, un boulanger de Bruxelles ou une collègue d’Abidjan ne parlent pas comme ton manuel. Cette leçon t’apprend à les comprendre, jamais à les imiter : les centres du français, les sons et les mots du Québec, de la Belgique et de la Suisse, les accents de France, le français de Côte d’Ivoire, du Sénégal et du Cameroun, les créoles, et cinq gestes pour quand tu ne comprends pas. À la fin, tu écris une lettre de 200 à 250 mots.',
    minutes: 160,
    difficulty: 4,
    glyph: 'accent',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: FRANCAIS_REGIONAL_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, TEXTE_RAVI };
export const lessonWithoutTask = (): Lesson => LESSON;
