// c1.11.l1 « Rapports et comptes rendus » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (decisions 1-35,
// the wave 2 notes, the wave 4 brief). Structural model: b2.22 « Le style
// académique » (`../b2/style-academique-*`), through its C1 descendant c1.07.
// Skill PE; no exam task of its own (no PE@c1 task exists, decision 23).
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around ONE ANCHOR TEXT (a real genre of
//   working document, original, about 230 to 330 words) and ONE MOVE, in the
//   same beats:
//
//     1. MEET THE TEXT     a `reading`, questions behind `questionsInModal`;
//                          its FIRST question is always « Devine le sens »;
//                          the glossary keeps one entry.
//     2. NOTICE THE MOVE   a `tapTable`, `cardDeck`, `examples` or `focus`.
//     3. PRACTISE          one or two checks on NEW material (groupDrill,
//                          trapDrill, commonErrors, listening, dictation).
//     4. USE IT            « Pour ton rapport », always the same groupDrill
//                          shape: two versions of a line of the canteen
//                          report, one with THIS act's move.
//
//   then the act check (control pages, gated). Act 1 is the problem scene
//   and the ONE recap; act 12 is the production act (the task and the
//   closing sections). The canteen case of the Ateliers Corvelle runs from
//   act 1 to act 11; the task uses another case (the Lyon shuttle), so the
//   model cannot be copied.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le rapport qu’on ne lit pas   6  scene + the chronological first
//                                        draft · the problem; ONE recap
//                                        (B1 39, B2 10, 22, 26, 33)
//    2  L’architecture                6  a car-park report · objet,
//                                        contexte, constat, analyse,
//                                        recommandations, annexes (tapTable)
//    3  Le constat                    6  the findings section · the source,
//                                        fact or impression (trapDrill)
//    4  Du symptôme aux causes        6  the analysis section · cause
//                                        principale, facteur aggravant; a
//                                        voicemail heard once (listening)
//    5  Les options et les critères   6  the options section · au regard
//                                        de, écarter, retenir (tapTable)
//    6  Recommander                   6  the recommendations · préconiser,
//                                        il est recommandé que + subj.
//                                        (tapTable, trapDrill, dictation)
//    7  La synthèse en tête           6  the sommaire de gestion · summarise,
//                                        never announce
//    8  Le compte rendu               6  a committee's compte rendu ·
//                                        present, reporting verbs, no
//                                        opinion (trapDrill)
//    9  Le procès-verbal              6  a board's procès-verbal · adopter /
//                                        approuver, France and Québec
//                                        (tapTable, listening)
//   10  Le relevé de décisions        6  a colleague's corrections · the
//                                        office anglicisms (trapDrill)
//   11  Relire en rapporteur          6  the director's rereading notes ·
//                                        neutral words, one figure
//   12  Ton rapport                  11  the model report · plan, role play,
//                                        TASK, quiz, review
//
//   TOTAL 77 missions, 12 acts (6 × 11 + 11). Corpus: 158 authored rows
//   (.1200-.1357) in twelve blocks plus 22 reused rows (14 from the seed: B1
//   36 and 39, B2 10, 22, 26, 33 and two other B2 rows, C1 1 and 21; 8 Postgres-only: the
//   headword « il conviendrait de » and seven legacy c1 rows of this theme,
//   named only). 12 readings (one per act) and 2 listenings. Quiz: 11 rounds
//   of 8. Eleven error triggers, eleven drills, five reference sheets,
//   twelve terms, four tapTables (decision 16). Chapter artwork:
//   `rapports-comptes-rendus-image-prompts.md`, 12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Écris pour qui n’était pas là : l’essentiel d’abord, puis les faits, et
//     tes recommandations à part. »
//   EN: Write for someone who was not there: the essentials first, then the
//   facts, and your recommendations kept apart.
//
//   ONE METAPHOR, THE ABSENT READER: every document leaves the room for
//   someone who was not in it. It is NOT « tell it in order » (act 1) nor
//   « the more detail the better » (act 2). In a compte rendu and a
//   procès-verbal, « à part » means the writer's opinion is absent.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the report's architecture; the sourced constat; the case
//           analysis (symptom, causes ranked, options, criteria, choice);
//           the recommendation register and its moods; the sommaire de
//           gestion; the compte rendu (purpose, present, reporting verbs,
//           neutrality); the procès-verbal (official, agenda, adopter /
//           approuver, France and Québec); the relevé de décisions; the
//           office anglicisms deadline, implémenter, les minutes, varia,
//           sommaire exécutif; rereading as a rapporteur; the report task.
//   QUOTES  the reframes of lesson 39 in B1 and lessons 10, 22, 26 and 33 in
//           B2, each imported from its corpus, never retyped; their rows
//           reused by id.
//   LEAVES  the email to lesson 39 in B1; nominalisation to lesson 10 in B2;
//           hedging and the academic paragraph to lesson 22 in B2; running a
//           meeting and « prochain item » to lesson 26 in B2; adresser /
//           supporter / réaliser to lesson 33 in B2; the account of a debate
//           to lesson 21 in C1; « suite à » to lesson 7 in C1; the
//           dissertation's order to a later C1 lesson, NOT cited (unbuilt).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use vous at work. Natural, unsimplified
//   C1 French; English authored on every learner string (`en`, or a final
//   « EN: »), never on an answer. Every `say` is French. Citations by trail
//   position in French, never a raw id. Typographic ’ in every authored
//   French string; no seed row with a straight ' inside the scenario.
//   Norms: OQLF and Larousse cited, never overridden; no anglicism is taught
//   as « wrong in speech », only replaced in a careful written document.
//   Mission answer slots spread by `balanceSlots()` (options and index
//   rotated together, no text changed), the quiz by `spreadSlots()`; no
//   `why` names a position.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. « IMPLÉMENTER »: no OQLF fiche was found and no Académie verdict is
//      quoted; the lesson only says the word comes from computing
//      (Larousse's definition of implémentation) and that a careful report
//      writes « mettre en œuvre » for a measure. Accept, or drop the word?
//   2. ADOPTER / APPROUVER: the lesson keys « on approuve un procès-verbal »
//      to the OQLF page; « adopter le procès-verbal » is also heard in
//      Québec and France (the Sénat: « Le procès-verbal est adopté sous les
//      réserves d’usage »). PRE-REVIEW: every closed item keyed on it now
//      opens « Selon l’Office québécois », and act 9's table and the sheet
//      say adopté is also read in France. Keep the OQLF line as the key?
//   3. SEVEN LEGACY c1 ROWS of this theme (.003, .011, .019, .040, .078,
//      .086, .120) are reused named only ({sentence, review}); none carries
//      a straight apostrophe. Keep them?
//   4. THE TENSE OF A COMPTE RENDU: the present is taught as the
//      convention (the OQLF states it for the procès-verbal; for the compte
//      rendu the BDL says « Il est conseillé d’utiliser le temps présent »).
//      One typeIn asks for « rappelle »; no errorSpot marks the passé
//      composé as an error. Accept?
//   5. RUBRIC: six criteria, 20 points (decision 14 pattern), the model
//      answer about 330 words. Keep the grid?
//   6. The roundup names no next lesson by number (c1.12 is drafted in the
//      same wave). Add « la leçon 12 du C1 » if it publishes with this one?
//   7. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, DB_ONLY_ROWS, dicteeFor,
  BROUILLON_TEXT, STATIONNEMENT_TEXT, CONSTAT_TEXT, ANALYSE_TEXT, OPTIONS_TEXT, RECOMMANDATIONS_TEXT,
  SOMMAIRE_TEXT, CR_TEXT, PV_TEXT, RELEVE_TEXT, RELECTURE_TEXT, MODELE_TEXT, NAVETTE_FICHE,
  B139_REFRAME, B210_REFRAME, B222_REFRAME, B226_REFRAME, B233_REFRAME,
  COURRIELS_UNIT, NOMINAL_UNIT, ACADEMIQUE_UNIT, REUNION_UNIT, CALQUES_UNIT,
  COURRIELS_REF, NOMINAL_REF, ACADEMIQUE_REF, REUNION_REF, CALQUES_REF, DEBATS_REF, REFORMULER_REF,
} from './rapports-comptes-rendus-corpus.ts';
import { RAPPORTS_COMPTES_RENDUS_TERMS } from './rapports-comptes-rendus-terms.ts';

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
const DB_ONLY = new Map<string, SrcItem>(DB_ONLY_ROWS.map((r) => [r.id, r]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));

/** An item's fr/en, from this corpus, the seed, or the Postgres-only rows.
 *  Throws on a typo, so no section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id) ?? DB_ONLY.get(id);
  if (!r) throw new Error(`c1.11: no item ${id}`);
  return r;
}
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.11: no ipa on ${id}`);
  return r.ipa;
}
/** The corpus row's respelling, BRACKETED for a section. Authored rows only. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.11: no authored respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** THE « USE IT » BEAT: the act's one tool for the graded report. */
function pourTonRapport(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ton rapport', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE RAPPORT QU’ON NE LIT PAS
 *
 *  The problem: the director has five minutes and the learner's note tells
 *  the week in order. The draft is the act's text. Then ONE recap of the
 *  lessons this one builds on, by trail position, rows reused by id.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Cinq minutes avant le conseil', frSub: 'La note sur la cantine',
  setting: { place: 'Bureau de la directrice générale, Ateliers Corvelle', city: 'Sherbrooke', time: '17 h 55', ambience: 'une note de trois pages sur le bureau, un manteau déjà sur le dossier de la chaise' },
  beats: [
    { kind: 'narration', text: 'Sherbrooke, aux Ateliers Corvelle, un fabricant de meubles. Tu es chargé·e de mission à la direction générale. Il y a deux semaines, Martine Pelletier t’a demandé ce qu’il fallait faire de la cantine, qui perd de l’argent. Ce soir, elle a lu ta note.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Martine Pelletier', fr: 'J’ai lu votre note jusqu’au jeudi. Je ne sais toujours pas ce que vous me demandez.', en: 'I read your note as far as Thursday. I still do not know what you are asking me.', respell: '[zhay lü votr NOT | zhüs-koh zheu-DEE | zhuh nuh seh too-ZHOOR pa | suh kuh voo muh duh-mahⁿ-DAY]', stage: 'Elle tapote la troisième page.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: 'Pourtant, tout y est : les visites, les chiffres, le sondage.', en: 'And yet it is all there: the visits, the figures, the survey.', respell: '[poor-TAHⁿ | too tee-YEH | lay vee-ZEET | lay SHEEFR | luh sohⁿ-DAZH]', stage: 'Tu as travaillé toute la semaine.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Martine Pelletier', fr: 'Tout y est, oui, mais dans l’ordre de votre semaine. Moi, j’ai cinq minutes avant le conseil.', en: 'It is all there, yes, but in the order of your week. I have five minutes before the board meeting.', respell: '[too tee-YEH | WEE | meh dahⁿ LORDR duh votr suh-MENN | MWA | zhay sehⁿk mee-NÜT | a-vahⁿ luh kohⁿ-SEY]', stage: 'Elle regarde l’heure.', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'Elle te rend la note. Tu as une phrase pour recommencer la première page.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle première phrase écris-tu ?', size: 'lg',
      options: [
        { fr: src(E(1209)).fr, respell: rsOf(E(1209)), en: src(E(1209)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(1284)).fr, respell: rsOf(E(1284)), en: src(E(1284)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Martine Pelletier lit la phrase et hoche la tête. Elle sait ce qui ne va pas, et pourquoi. « Et donc, que me recommandez-vous ? » La suite du rapport doit répondre.',
        breaks: 'Martine Pelletier soupire. Le lundi, le gérant, la visite : elle connaît déjà la cantine. Elle part au conseil sans proposition, et le dossier est reporté d’un mois.',
      },
    },
    {
      kind: 'break', heading: 'Le calendrier, ou la décision',
      body: `${Cap(COURRIELS_REF)} te faisait dire d’emblée pourquoi tu écris. Un rapport va plus loin : sa première phrase donne le problème et sa cause. EN: A report opens on the problem and its cause.`,
      wrong: { fr: src(E(1209)).fr, ipa: ipaOf(E(1209)), respell: rsOf(E(1209)), en: src(E(1209)).en },
      right: { fr: src(E(1284)).fr, ipa: ipaOf(E(1284)), respell: rsOf(E(1284)), en: src(E(1284)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Cette leçon t’apprend les documents de travail : le rapport, l’analyse de cas, la recommandation, la synthèse, puis le compte rendu, le procès-verbal et le relevé de décisions. À la fin, tu écriras un rapport à partir d’une fiche de faits.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['lecteur', 'synthese'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Bâtir un rapport', s: 'Actes 2 et 3 : les six parties, un constat qui cite ses sources' },
    { t: 'Analyser un cas', s: 'Actes 4 et 5 : les causes classées, les options, les critères, le choix' },
    { t: 'Recommander et résumer', s: 'Actes 6 et 7 : nous préconisons, il est recommandé que, la synthèse en tête' },
    { t: 'Rendre compte d’une réunion', s: 'Actes 8 à 11 : compte rendu, procès-verbal, relevé de décisions, relecture' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'Ton premier jet', frSub: 'Une note qui suit le calendrier',
  text: BROUILLON_TEXT,
  glossary: [
    { word: 'déficit', en: 'deficit, shortfall', note: 'Ce qui manque quand les dépenses dépassent les recettes.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « Il était assez découragé ». Que veut dire « découragé » ?', a: 'Il avait perdu courage : il ne croyait plus que la situation pouvait s’améliorer.' },
    { q: 'Dans quel ordre la note est-elle écrite ?', a: 'Dans l’ordre de la semaine, du lundi au vendredi. La conclusion arrive à la dernière ligne.' },
    { q: 'Où se trouvent les deux chiffres les plus importants ?', a: 'Au milieu du vendredi : cent dix repas contre soixante-dix, et un déficit de trente-huit mille dollars.' },
    { q: 'Quelles phrases mêlent une opinion aux faits ?', a: '« Il était assez découragé », « le plat du jour plutôt bon », « Moi, je pense que le prix de 8,25 $ est trop élevé », « peut-être un quart des plats, je ne sais pas exactement ».' },
    { q: 'Quelle est, d’après les faits de la note, la cause la plus probable ?', a: 'Les horaires : l’équipe du soir commence à quatorze heures, après la fermeture de la cantine.' },
    { q: 'Que demande la note à la direction ?', a: 'Rien de précis : « il faudrait peut-être changer quelque chose, mais c’est à la direction de voir ».' },
  ],
  audio: REC('rec-c1-11-brouillon'), say: REFRAME, terms: ['lecteur', 'constat'],
};

/** THE ONE RECAP: one group per lesson family it builds on, rows reused by
 *  id, each reframe imported, never retyped. */
const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: 'Cinq leçons, un rappel',
  groups: [
    grp(Cap(COURRIELS_REF), [
      it('fr.b1.correspondance.1025', 'l’anatomie d’un message'),
    ], chk('Au B1, la première phrase d’un courriel disait...', ['pourquoi tu écris', 'la date de ta dernière visite'], 0,
      `« ${B139_REFRAME} » Un rapport garde ce réflexe et va plus loin : il commence par ce qu’il faut décider. EN: a report starts with the decision.`)),
    grp(Cap(ACADEMIQUE_REF), [
      it('fr.b2.universite.1042', 'une tournure impersonnelle'),
    ], chk('« Il convient de » appartient au registre...', ['soutenu et impersonnel', 'familier'], 0,
      `« ${B222_REFRAME} » Le rapport garde cette prudence ; l’acte 11 l’applique à tes chiffres. EN: never surer than your evidence.`)),
    grp(Cap(REUNION_REF), [
      it('fr.b2.affaires.1218', 'le compte rendu, annoncé'),
      it('fr.b2.affaires.1378', 'fermer une réunion'),
    ], chk('Au B2, une réunion se terminait sur...', ['ce qui est décidé, qui s’en charge, et pour quand', 'un résumé de chaque intervention'], 0,
      `« ${B226_REFRAME} » Ici, tu passes de la réunion au document qui en reste. EN: from the meeting to its written record.`)),
    grp(`${Cap(NOMINAL_REF)} et ${CALQUES_REF}`, [
      it('fr.b2.langue-soignee.1581', 'condenser en noms'),
      it('fr.b2.langue-soignee.1833', 'pas « adresser »'),
    ], chk(`${Cap(NOMINAL_REF)} t’a appris qu’un compte rendu...`, ['condense les faits en noms et garde des verbes', 'recopie chaque phrase prononcée'], 0,
      `« ${B210_REFRAME} » Et ${CALQUES_REF} : « ${B233_REFRAME} » EN: condense; translate the meaning.`)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['lecteur', 'compterendu'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Ta directrice a cinq minutes avant une réunion', fr: src(E(1207)).fr, en: src(E(1207)).en },
    { situation: 'Tu reçois une commande de rapport', fr: src(E(1204)).fr, en: src(E(1204)).en },
    { situation: 'Tu relis tes notes d’enquête', fr: src(E(1205)).fr, en: src(E(1205)).en },
    { situation: 'Ton document circule pendant tes vacances', fr: src(E(1208)).fr, en: src(E(1208)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['lecteur'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le problème', 'Pourquoi la note ne permet-elle pas de décider ?', ['Elle suit le calendrier et garde la conclusion pour la fin.', 'Elle est trop courte.', 'Elle contient trop de chiffres.'], 0,
    'Les faits sont là, mais dans l’ordre de ta semaine ; la décision, elle, n’y est pas. EN: chronology buries the decision.'),
  ctl('La question', 'Avant d’écrire, tu te demandes d’abord...', ['qui va lire, et pour décider de quoi', 'combien de pages écrire', 'dans quel ordre tout s’est passé'], 0,
    'Tout se règle sur le lecteur absent. EN: who reads, to decide what?'),
  ctl('La mission', 'À la fin de la leçon, tu vas écrire...', ['le compte rendu de ta semaine', 'un rapport de 250 à 400 mots à partir d’une fiche de faits', 'une lettre de réclamation'], 1,
    'Un rapport avec sa synthèse, son constat, son analyse et ses recommandations. EN: a short report from a fact sheet.'),
], ['lecteur']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le rapport qu’on ne lit pas',
    opener: {
      line: 'Tout est dans ta note, et pourtant personne ne sait quoi décider : ici tu découvres pour qui l’on écrit un rapport. EN: Everything is in your note, yet nobody knows what to decide: here you find out who a report is written for.',
      imageRef: 'lessons/rapports-comptes-rendus/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais qu’un rapport s’écrit pour un lecteur absent qui doit décider, et non dans l’ordre de ta semaine. EN: You know a report is written for an absent reader who must decide, not in the order of your week.',
    estScreens: 32, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — L’ARCHITECTURE
 *
 *  TEXT: another department's report on the car park, every part titled.
 *  MOVE: six parts, each answering one question; detail to the annexes.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a2-lecture', layer: 'core', questionsInModal: true,
  title: 'Le rapport sur le stationnement', frSub: 'Six parties, six questions',
  text: STATIONNEMENT_TEXT,
  glossary: [
    { word: 'covoiturage', en: 'car-pooling', note: 'Plusieurs personnes partagent une voiture pour le même trajet.' },
  ],
  questions: [
    { q: 'Devine le sens : « le stationnement est complet chaque matin dès 7 h 40 ». Que veut dire « complet » ?', a: 'Plein : il n’y a plus une seule place libre.' },
    { q: 'Quelle phrase dit ce que la direction attend de ce rapport ?', a: '« Le présent rapport a pour objet de proposer une nouvelle répartition des places. »' },
    { q: 'Que trouve-t-on dans le constat, et rien d’autre ?', a: 'Des faits chiffrés avec leur source : complet dès 7 h 40, douze places de visiteurs vides, une vingtaine de voitures dans la rue.' },
    { q: 'Que fait l’analyse que le constat ne fait pas ?', a: 'Elle explique : la pénurie vient de la répartition des places, pas de leur nombre, et la relève de l’équipe du soir l’aggrave.' },
    { q: 'Les recommandations disent-elles qui fait quoi et pour quand ?', a: 'En partie : quoi (réduire à quatre les places de visiteurs, dix places de covoiturage) et quand (dès avril, un relevé en juin) ; le responsable n’est pas nommé.' },
    { q: 'Pourquoi le plan du stationnement est-il en annexe ?', a: 'C’est du détail : le lecteur qui veut vérifier le trouve, celui qui décide n’en a pas besoin.' },
  ],
  audio: REC('rec-c1-11-stationnement'), say: REFRAME, terms: ['lecteur', 'constat'],
};

const A2_PARTIES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a2-parties', layer: 'core', sheetId: 'sheet-architecture',
  title: 'Six parties, six questions', frSub: 'De ce qu’on te demande à ce que tu proposes',
  cols: ['Partie', 'Question', 'Dans le rapport du stationnement'],
  rows: [
    { cells: ['Objet', 'Que demande-t-on ?', 'proposer une nouvelle répartition'],
      say: src(E(1213)).fr,
      detail: { title: 'L’objet', body: 'Une phrase, souvent « Le présent rapport a pour objet de… ». Le lecteur sait d’emblée ce qu’on attend de lui. EN: one sentence on what the report is for.', say: src(E(1212)).fr } },
    { cells: ['Contexte', 'Que faut-il savoir ?', 'quarante salariés de plus'],
      say: src(E(1214)).fr,
      detail: { title: 'Le contexte', body: 'Ce que le lecteur doit savoir pour comprendre, et rien de plus : pas l’histoire de l’entreprise. EN: only the background needed.', say: 'Depuis septembre, le site accueille quarante salariés de plus.' } },
    { cells: ['Constat', 'Qu’observe-t-on ?', 'complet dès 7 h 40'],
      say: src(E(1215)).fr,
      detail: { title: 'Le constat', body: 'Des faits vérifiables, avec leur source. Pas de cause, pas de proposition. L’acte 3 y revient. EN: sourced facts, no causes, no proposals.', say: 'Selon les relevés du gardien, le stationnement est complet dès 7 h 40.' } },
    { cells: ['Analyse', 'Pourquoi ?', 'la répartition, pas le nombre'],
      say: src(E(1216)).fr,
      detail: { title: 'L’analyse', body: 'Les causes, classées, prouvées par le constat. Les actes 4 et 5 y reviennent. EN: the causes, ranked, proved by the findings.', say: 'La pénurie tient à la répartition des places.' } },
    { cells: ['Recommandations', 'Que faire ?', 'quatre places de visiteurs'],
      say: src(E(1217)).fr,
      detail: { title: 'Les recommandations', body: 'Ta voix, enfin : ce que tu proposes, par qui, pour quand. Elles restent dans leur partie. L’acte 6 y revient. EN: your proposals, kept in their own part.', say: 'Nous recommandons de réduire à quatre les places réservées aux visiteurs.' } },
    { cells: ['Annexes', 'Où est le détail ?', 'relevés, plan'],
      say: src(E(1218)).fr,
      detail: { title: 'Les annexes', body: 'Le détail que le lecteur peut consulter : tableaux, questionnaire, devis. Chacune est citée dans le texte. EN: the detail, each appendix cited in the text.', say: src(E(1220)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['lecteur'],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-trier', layer: 'core', size: 'lg',
  title: 'Chaque phrase dans sa partie', frSub: 'Un autre rapport : la salle de réunion',
  groups: [
    grp('Trois phrases d’un même rapport', [
      free('Selon le planning, la grande salle est réservée huit heures par jour.', 'According to the booking schedule, the large room is booked eight hours a day.', 'un fait sourcé'),
      free('Les réservations annulées ne sont jamais libérées dans le logiciel.', 'Cancelled bookings are never released in the software.', 'une cause'),
      free('Nous recommandons de libérer automatiquement toute salle inoccupée après quinze minutes.', 'We recommend automatically releasing any room left empty after fifteen minutes.', 'une proposition'),
    ], chk('« Les réservations annulées ne sont jamais libérées » : dans quelle partie ?', ['l’analyse', 'les annexes', 'l’objet'], 0,
      'Elle explique pourquoi la salle paraît pleine : c’est une cause. EN: it explains, so it is analysis.')),
    ctl('Le détail', 'Le relevé heure par heure des réservations va...', ['en annexe', 'dans l’objet', 'dans la synthèse'], 0,
      'C’est du détail : en annexe, cité dans le texte. EN: detail goes to an appendix.'),
    ctl('Le début', '« Le présent rapport a pour objet de… » ouvre...', ['l’objet', 'le constat', 'les recommandations'], 0,
      'Il dit ce que la direction attend du rapport. EN: it states the report’s purpose.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['constat', 'analyse'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a2-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre parties qui débordent',
  errors: [
    { wrong: 'Constat : le stationnement est complet, il faut donc supprimer des places de visiteurs.', right: 'Constat : selon les relevés du gardien, le stationnement est complet dès 7 h 40.',
      why: 'On a envie d’aller droit au but. Mais une recommandation glissée dans le constat brouille la lecture : garde-la pour sa partie. EN: keep proposals out of the findings.' },
    { wrong: 'Contexte : les Ateliers Corvelle ont été fondés il y a quarante ans par deux ébénistes.', right: 'Contexte : depuis septembre, le site accueille quarante salariés de plus.',
      why: 'L’histoire est vraie et sympathique ; le lecteur n’en a pas besoin pour décider. EN: background only if it helps the decision.' },
    { wrong: 'Annexe 2 : plan du stationnement (jamais mentionné dans le texte).', right: 'Le tableau complet figure en annexe 2.',
      why: 'Une annexe que le texte ne cite pas, personne ne l’ouvre. EN: every appendix must be cited in the text.' },
    { wrong: 'Objet : le stationnement.', right: src(E(1213)).fr,
      why: 'Un thème n’est pas un objet. L’objet dit ce que le rapport doit faire : proposer, évaluer, recommander. EN: the purpose is an action, not a topic.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['constat', 'lecteur'],
};

const A2_VERSION = pourTonRapport('a2-version', 'L’objet de ton rapport sur la cantine', [
  grp('Deux objets', [
    free('Objet : la cantine.', 'Subject: the canteen.', 'un thème'),
    free('Le présent rapport a pour objet de recommander un avenir pour la cantine du site de Sherbrooke.', 'The purpose of this report is to recommend a future for the canteen at the Sherbrooke site.', 'un objet'),
  ], chk('Lequel sert ton rapport ?', ['le second', 'le premier'], 0,
    'Le second dit ce que le rapport doit faire : recommander. Le lecteur sait déjà qu’une décision l’attend. EN: the purpose names an action.')),
  grp('Le détail à sa place', [
    it(E(1220), 'le renvoi'),
    it(E(1218), 'ce que contiennent les annexes'),
  ], chk('Tu as les chiffres de fréquentation mois par mois. Où les mets-tu ?', ['en annexe, cités dans le constat', 'en entier dans la synthèse'], 0,
    'Le constat donne le chiffre utile, l’annexe le détail. EN: the useful figure in the text, the detail in an appendix.')),
], ['lecteur', 'constat']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('L’ordre', 'Après le constat vient...', ['l’analyse', 'l’objet', 'le contexte'], 0,
    'On observe, puis on explique. EN: findings, then analysis.'),
  ctl('Le constat', 'Le constat dit...', ['ce qu’on observe, avec la source', 'ce qu’il faut faire', 'pourquoi la situation existe'], 0,
    'Des faits vérifiables, rien d’autre. EN: sourced facts.'),
  ctl('Les annexes', 'Une annexe doit être...', ['citée dans le texte', 'plus longue que le rapport', 'placée avant la synthèse'], 0,
    'Sinon le lecteur ne sait pas qu’elle existe. EN: cited in the text.'),
], ['constat', 'analyse']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'L’architecture d’un rapport',
    opener: {
      line: 'Un rapport a six pièces, et chacune répond à une seule question : ici tu apprends à ranger ce que tu sais. EN: A report has six rooms, each answering one question: here you learn to put what you know in its place.',
      imageRef: 'lessons/rapports-comptes-rendus/act02.jpg',
    },
    sections: [],
    milestone: 'Tu ranges un rapport en six parties et tu envoies le détail en annexe. EN: You lay a report out in six parts and send the detail to the appendices.',
    estScreens: 33, restPoints: ['a2-parties'],
  },
  sections: [A2_LECTURE, A2_PARTIES, A2_TRIER, A2_ERREURS, A2_VERSION, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LE CONSTAT
 *
 *  TEXT: the findings of the canteen report. MOVE: every figure with its
 *  source (selon, d’après, il ressort de); an impression flagged as such,
 *  never stated as a fact.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a3-lecture', layer: 'core', questionsInModal: true,
  title: 'Le constat sur la cantine', frSub: 'Trois sources, des chiffres',
  text: CONSTAT_TEXT,
  glossary: [
    { word: 'exercice', en: 'financial year', note: 'Ici, la période comptable d’un an sur laquelle on fait les comptes.' },
  ],
  questions: [
    { q: 'Devine le sens : « au moment où les nouveaux horaires entrent en vigueur ». Que veut dire « entrer en vigueur » ?', a: 'Commencer à s’appliquer officiellement.' },
    { q: 'Quelles sont les trois sources du constat ?', a: 'Le registre des caisses, les relevés de production de la cuisine et l’enquête interne (150 répondants sur 240).' },
    { q: 'Comment le texte arrive-t-il à « plus d’un tiers » ?', a: 'Par le registre des caisses : soixante-dix repas contre cent dix à la même période l’an dernier.' },
    { q: 'Quelle phrase tire un résultat de l’enquête, et avec quelle tournure ?', a: '« Il ressort de l’enquête que les équipes du soir ne mangent plus sur place. »' },
    { q: 'Pourquoi le constat écarte-t-il « le personnel boude la cantine » ?', a: 'Parce que la formule juge une intention ; aucune donnée ne montre que les salariés évitent la cantine par choix.' },
    { q: 'Le constat dit-il pourquoi la fréquentation baisse ?', a: 'Non : il note que la baisse commence en janvier, avec les nouveaux horaires, mais l’explication appartient à l’analyse.' },
  ],
  audio: REC('rec-c1-11-constat'), say: REFRAME, terms: ['constat'],
};

const A3_SOURCES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a3-sources', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-analyse',
  title: 'Un fait, sa source', frSub: 'Ce qui se vérifie',
  hint: 'Quatre cartes. Cherche d’où vient chaque chiffre.',
  audio: AUDIO, say: REFRAME, terms: ['constat'],
  cards: [
    { head: 'Le chiffre et sa source', label: 'selon, d’après', fr: src(E(1227)).fr, sub: rsOf(E(1227)),
      body: 'Selon et d’après introduisent la source : le lecteur peut vérifier. Un chiffre sans source reste une affirmation. EN: selon and d’après name the source.' },
    { head: 'Le résultat d’une enquête', label: 'il ressort de… que', fr: src(E(1225)).fr, sub: rsOf(E(1225)),
      body: 'Le résultat sort de la source, et pas de toi. Après « il ressort de… que », l’indicatif : c’est un fait établi. EN: a result drawn from a source, indicative.' },
    { head: 'Ce qu’on observe', label: 'on constate', fr: src(E(1224)).fr, sub: rsOf(E(1224)),
      body: '« On constate » décrit sans expliquer. Le « pourquoi » attendra l’analyse. EN: describe, do not explain yet.' },
    { head: 'Une impression, signalée', label: 'à part', fr: src(E(1233)).fr, sub: rsOf(E(1233)),
      body: 'Tu peux mentionner une impression (« on entend dire que… »), à condition de la présenter comme telle, jamais comme un fait. EN: flag an impression as one.' },
  ],
};

const A3_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-trier', layer: 'core', size: 'lg',
  title: 'Fait ou interprétation', frSub: 'De nouvelles phrases',
  groups: [
    grp('Trois faits sourcés', [
      it(E(1231), 'un écart chiffré'),
      it(E(1234), 'un relevé de la cuisine'),
      it(E(1235), 'une enquête'),
    ], chk('Ces trois phrases ont en commun...', ['un chiffre qu’on peut vérifier', 'une opinion du rédacteur'], 0,
      'Chacune s’appuie sur une mesure : le registre, les relevés, l’enquête. EN: each rests on a measurement.')),
    ctl('Le mot qui juge', '« Les salariés désertent la cantine. » Fait ou interprétation ?', ['une interprétation', 'un fait'], 0,
      '« Déserter » prête une intention. Le fait : soixante-dix repas contre cent dix. EN: « déserter » implies intent.'),
    ctl('La bonne version', 'Laquelle a sa place dans un constat ?', ['D’après la cuisine, environ un quart des plats est jeté.', 'La cuisine gaspille énormément, c’est évident.'], 0,
      'Une source, un ordre de grandeur, aucun jugement. EN: a source and a measure, no judgement.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['constat'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a3-piege', layer: 'core', swipe: true,
  title: 'Six constats qui n’en sont pas',
  rule: {
    title: 'Un fait se vérifie',
    body: 'Le constat est la partie que le lecteur doit pouvoir vérifier ligne par ligne. Un chiffre sans source, un adjectif qui juge, une cause glissée trop tôt : il ne peut plus faire confiance au reste. EN: The findings must be checkable line by line.',
  },
  cards: [
    { promptLabel: 'un mot qui juge', promptSound: 'Le personnel boude la cantine.',
      fr: 'La fréquentation a baissé de plus d’un tiers en un an.', ipa: ipaOf(E(1231)),
      tip: 'Bouder suppose une intention ; le chiffre, lui, se vérifie. EN: a measure, not an intention.' },
    { promptLabel: 'un chiffre sans source', promptSound: 'La cantine sert soixante-dix repas par jour, à peu près.',
      fr: 'Selon le registre des caisses, la cantine sert soixante-dix repas par jour.', ipa: ipaOf(E(1227)),
      tip: 'D’où vient le chiffre ? Dis-le. EN: name the source.' },
    { promptLabel: 'une cause trop tôt', promptSound: 'On constate une baisse due au prix trop élevé.',
      fr: 'On constate une baisse de la fréquentation depuis janvier.', ipa: ipaOf(E(1224)),
      tip: 'La cause appartient à l’analyse, et l’analyse dira que ce n’est pas le prix. EN: causes belong to the analysis.' },
    { promptLabel: 'une impression cachée', promptSound: 'Tout le monde trouve les horaires inadaptés.',
      fr: 'D’après l’enquête interne, six répondants sur dix jugent les horaires inadaptés.', ipa: ipaOf(E(1235)),
      tip: '« Tout le monde » n’a pas été interrogé : six sur dix l’ont été. EN: give the real proportion.' },
    { promptLabel: 'un chiffre flou', promptSound: 'Beaucoup de plats sont jetés.',
      fr: 'Environ un quart des plats préparés est jeté chaque jour.', ipa: ipaOf(E(1234)),
      tip: '« Beaucoup » ne se vérifie pas ; « environ un quart » donne un ordre de grandeur. EN: an order of magnitude.' },
    { promptLabel: 'un « je »', promptSound: 'Moi, j’ai vu que la salle était vide.',
      fr: 'Il ressort de l’enquête que les équipes du soir ne mangent plus sur place.', ipa: ipaOf(E(1225)),
      tip: 'Ce que tu as vu un jeudi ne vaut pas une enquête. EN: one visit is not evidence.' },
  ],
  drill: [
    { promptSay: '… le registre des caisses, la fréquentation a baissé.', opts: ['Selon', 'Malgré'], correct: 0 },
    { promptSay: 'Il … de l’enquête que les horaires gênent l’équipe du soir.', opts: ['ressort', 'semble'], correct: 0 },
    { promptSay: 'Le constat dit ce qu’on observe ; l’analyse dit … .', opts: ['pourquoi', 'quoi faire'], correct: 0 },
    { promptSay: 'Chaque chiffre doit avoir sa … .', opts: ['source', 'conclusion'], correct: 0 },
    { promptSay: '… l’enquête interne, un répondant sur quatre cite le prix.', opts: ['D’après', 'Pourtant'], correct: 0 },
    { promptSay: 'Environ un … des plats préparés est jeté.', opts: ['quart', 'beaucoup'], correct: 0 },
    { promptSay: 'On … une baisse de la fréquentation depuis janvier.', opts: ['constate', 'déplore'], correct: 0 },
    { promptSay: 'Une impression se signale comme … .', opts: ['telle', 'un fait'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un fait se vérifie' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le lecteur ne peut pas vérifier' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six constats justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-11-piege-constat'), say: REFRAME, terms: ['constat'],
};

const A3_VERSION = pourTonRapport('a3-version', 'Le premier chiffre de ton constat', [
  grp('Deux versions', [
    free('Il y a de moins en moins de monde à la cantine.', 'There are fewer and fewer people at the canteen.', 'une impression'),
    free('Selon le registre des caisses, la cantine sert soixante-dix repas par jour, contre cent dix l’an dernier.', 'According to the till records, the canteen serves seventy meals a day, against a hundred and ten last year.', 'un fait sourcé'),
  ], chk('Laquelle sert ton constat ?', ['la seconde', 'la première'], 0,
    'Un chiffre, une comparaison, une source : le lecteur peut vérifier. EN: a figure, a comparison, a source.')),
  grp('L’impression de Bruno', [
    it(E(1233), 'la règle'),
  ], chk('Bruno pense que le menu décourage les jeunes, sans chiffres. Dans ton constat, tu...', ['signales cette idée comme une impression du gérant', 'écris cette idée comme un fait'], 0,
    'Elle peut figurer, présentée comme telle : « selon le gérant, sans données à l’appui ». EN: flag it as his impression.')),
], ['constat']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La source', '« Selon », « d’après », « il ressort de » servent à...', ['donner la source d’un fait', 'donner ton avis', 'annoncer une cause'], 0,
    'Le lecteur sait d’où vient le fait. EN: they name the source.'),
  ctl('Le jugement', '« Le personnel boude la cantine » est...', ['un fait vérifiable', 'une interprétation'], 1,
    'Bouder prête une intention que rien ne prouve. EN: an interpretation.'),
  ctl('La limite', 'Le constat dit-il pourquoi ?', ['non, c’est le rôle de l’analyse', 'oui, en une phrase', 'seulement si on est sûr'], 0,
    'Observer d’abord, expliquer ensuite. EN: the why is for the analysis.'),
], ['constat']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Le constat',
    opener: {
      line: 'Le lecteur n’a pas vu la salle vide : il ne croira que ce qu’il peut vérifier. Ici tu donnes à chaque fait sa source. EN: The reader did not see the empty room: he will only believe what he can check. Here you give every fact its source.',
      imageRef: 'lessons/rapports-comptes-rendus/act03.jpg',
    },
    sections: [],
    milestone: 'Tu écris un constat où chaque chiffre a sa source et où aucune impression ne passe pour un fait. EN: You write findings where every figure has a source and no impression passes for a fact.',
    estScreens: 34, restPoints: ['a3-sources'],
  },
  sections: [A3_LECTURE, A3_SOURCES, A3_TRIER, A3_PIEGE, A3_VERSION, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — DU SYMPTÔME AUX CAUSES
 *
 *  TEXT: the analysis of the canteen report. MOVE: the symptom is not a
 *  cause; causes are ranked (la cause principale, un facteur aggravant).
 *  A voicemail from the manager, heard once: sort what he knows from what
 *  he thinks.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a4-lecture', layer: 'core', questionsInModal: true,
  title: 'L’analyse', frSub: 'Une cause principale, deux facteurs aggravants',
  text: ANALYSE_TEXT,
  glossary: [
    { word: 'désormais', en: 'now, from now on', note: 'À partir de maintenant, et pour la suite.' },
  ],
  questions: [
    { q: 'Devine le sens : « un défaut de coordination entre services ». Que veut dire « défaut » ici ?', a: 'Un manque : la coordination n’a pas eu lieu.' },
    { q: 'Quelle est la cause principale, et comment est-elle prouvée ?', a: 'Les horaires : l’équipe du soir arrive après la fermeture ; elle représentait plus d’un tiers des repas.' },
    { q: 'Pourquoi le prix n’est-il qu’un facteur aggravant ?', a: 'Il a augmenté en septembre sans effet visible à l’automne ; la chute commence en janvier, avec les horaires.' },
    { q: 'Que pèse le menu unique ?', a: 'Un répondant sur cinq voudrait un second plat, et la quantité fixe explique en grande partie le gaspillage.' },
    { q: 'Comment le texte parle-t-il du gérant ?', a: 'Sans le juger : il n’a pas été consulté ; ce n’est « pas une faute, mais un défaut de coordination ».' },
    { q: 'À quoi sert la dernière phrase ?', a: 'À relier l’analyse à la suite : les options seront évaluées au regard de ces causes.' },
  ],
  audio: REC('rec-c1-11-analyse'), say: REFRAME, terms: ['analyse'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a4-exemples', layer: 'core',
  title: 'Classer les causes', frSub: 'Du plus lourd au plus léger',
  examples: [
    ex(E(1238), 'Le symptôme : ce qu’on voit. On ne s’arrête pas là.'),
    ex(E(1239), 'La cause principale : celle qui explique l’essentiel. « Tenir à » relie l’effet à sa cause.'),
    ex(E(1240), 'Un facteur aggravant : il aggrave, il n’explique pas tout seul.'),
    ex(E(1241), 'Une cause secondaire, reconnue mais mesurée.'),
    ex(E(1242), 'La méthode, en une phrase.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['analyse'],
};

/** THE EAR MISSION: one take, the manager's voicemail heard once. */
const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'Le message de Bruno', frSub: 'Un message vocal, une écoute',
  lines: [ln(E(1243)), ln(E(1244)), ln(E(1245)), ln(E(1246)), ln(E(1247)), ln(E(1248)), ln(E(1249)), ln(E(1250))],
  questions: [
    { q: 'Depuis quand l’équipe du soir commence-t-elle plus tard ?', opts: ['depuis janvier', 'depuis septembre', 'depuis l’an dernier'], correct: 0,
      why: '« Depuis janvier » : le moment où la fréquentation chute. EN: since January.' },
    { q: 'Que dit Bruno du prix ?', opts: ['Il a augmenté, mais ce n’est pas le fond du problème.', 'C’est la cause principale.', 'Il a baissé.'], correct: 0,
      why: 'Il reconnaît la hausse et la relativise. EN: real, but not the core issue.' },
    { q: 'Sur le menu unique, Bruno apporte...', opts: ['une impression, sans chiffres', 'des relevés précis'], correct: 0,
      why: 'Il le dit lui-même : « c’est une impression ». EN: an impression.' },
    { q: 'Quelle information est un fait vérifiable ?', opts: ['L’heure de fermeture de la cantine.', 'L’effet du menu sur les jeunes.'], correct: 0,
      why: 'Les horaires se vérifient ; l’effet du menu reste à mesurer. EN: the hours can be checked.' },
    { q: 'Que propose-t-il à la fin ?', opts: ['de t’envoyer les relevés de caisse', 'de fermer la cantine', 'une réunion le lendemain'], correct: 0,
      why: 'Les relevés de caisse : une source pour ton constat. EN: the till records.' },
  ],
  audio: REC('rec-c1-11-bruno'), say: REFRAME, terms: ['analyse', 'constat'],
};

const A4_CLASSER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-classer', layer: 'core', size: 'lg',
  title: 'Symptôme ou cause', frSub: 'Un autre cas : le service après-vente',
  groups: [
    grp('Un cas, trois phrases', [
      free('Les clients se plaignent de plus en plus.', 'Customers are complaining more and more.', 'ce qu’on voit'),
      free('Depuis mars, le service ne répond plus au téléphone l’après-midi.', 'Since March, the department no longer answers the phone in the afternoon.', 'ce qui l’explique'),
      free('Le nouveau formulaire en ligne est long à remplir.', 'The new online form takes a long time to fill in.', 'ce qui aggrave'),
    ], chk('« Les clients se plaignent de plus en plus » est...', ['le symptôme', 'la cause principale'], 0,
      'C’est l’effet visible ; les causes sont le téléphone et le formulaire. EN: the visible effect.')),
    ctl('Classer', 'Le formulaire long, sans le téléphone coupé, suffirait-il à expliquer la hausse des plaintes ?', ['Non : c’est un facteur aggravant.', 'Oui : c’est la cause principale.'], 0,
      'Il aggrave, il n’explique pas tout seul. EN: aggravating, not sufficient.'),
    ctl('La tournure', '« La hausse des plaintes … à la coupure du téléphone. »', ['tient', 'tient de', 'est tenue'], 0,
      'Tenir à quelque chose : en être la cause. EN: tenir à = to be due to.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['analyse'],
};

const A4_VERSION = pourTonRapport('a4-version', 'Ta cause principale', [
  grp('Deux analyses', [
    free('La cantine marche mal pour plein de raisons : les horaires, le prix, le menu, le gérant.', 'The canteen is doing badly for lots of reasons: the hours, the price, the menu, the manager.', 'une liste'),
    free('La cause principale tient aux horaires ; le prix et le menu unique jouent comme facteurs aggravants.', 'The main cause lies in the hours; the price and the single menu act as aggravating factors.', 'un classement'),
  ], chk('Laquelle sert ton rapport ?', ['la seconde', 'la première'], 0,
    'Une liste met tout au même niveau ; un classement dit au lecteur où agir d’abord. EN: rank the causes.')),
  grp('Ce que Bruno sait', [
    it(E(1251), 'la méthode'),
    it(E(1245), 'un fait'),
  ], chk('Bruno dit : « le menu décourage les jeunes ». Dans ton analyse, c’est...', ['une piste à vérifier', 'la preuve que le menu est la cause'], 0,
    'Une impression ne prouve rien ; le chiffre de l’enquête (un sur cinq) pèse davantage. EN: a lead to check.')),
], ['analyse']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le symptôme', '« La salle se vide » est...', ['un symptôme', 'une cause', 'une recommandation'], 0,
    'Ce qu’on voit, pas ce qui l’explique. EN: a symptom.'),
  ctl('Le classement', 'Une analyse présente ses causes...', ['dans le désordre', 'de la plus lourde à la plus légère'], 1,
    'Le lecteur sait où agir d’abord. EN: ranked.'),
  ctl('La preuve', 'Une cause se prouve avec...', ['les faits du constat', 'l’avis du gérant', 'une recommandation'], 0,
    'L’analyse s’appuie sur le constat. EN: on the findings.'),
], ['analyse']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Du symptôme aux causes',
    opener: {
      line: 'La salle se vide, mais ce n’est pas une explication : ici tu remontes aux causes et tu les classes. EN: The room is emptying, but that is not an explanation: here you trace the causes and rank them.',
      imageRef: 'lessons/rapports-comptes-rendus/act04.jpg',
    },
    sections: [],
    milestone: 'Tu distingues le symptôme des causes et tu nommes la cause principale et les facteurs aggravants. EN: You tell the symptom from the causes and name the main cause and the aggravating factors.',
    estScreens: 34, restPoints: ['a4-ecoute'],
  },
  sections: [A4_LECTURE, A4_EXEMPLES, A4_ECOUTE, A4_CLASSER, A4_VERSION, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LES OPTIONS ET LES CRITÈRES
 *
 *  TEXT: the options section. MOVE: announce the criteria, apply them to
 *  every option, rule out with a reason, choose (l’option retenue).
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a5-lecture', layer: 'core', questionsInModal: true,
  title: 'Trois options', frSub: 'Quatre critères, un choix',
  text: OPTIONS_TEXT,
  glossary: [
    { word: 'régie', en: 'run in-house', note: 'Garder un service « en régie » : l’entreprise le gère elle-même, sans prestataire.' },
  ],
  questions: [
    { q: 'Devine le sens : « le traiteur assume le risque ». Que veut dire « assumer » ici ?', a: 'Prendre à sa charge : si la cantine perd de l’argent, c’est le traiteur qui paie.' },
    { q: 'Quels sont les quatre critères, et quand sont-ils annoncés ?', a: 'Le coût, l’accès des deux équipes à un repas chaud, le gaspillage et le délai ; ils sont annoncés avant les options.' },
    { q: 'Quel est l’avantage de l’option A, et son inconvénient ?', a: 'Elle est la moins coûteuse et la plus rapide ; elle supprime un lieu de pause et ne garantit pas de repas chaud.' },
    { q: 'Pourquoi l’option B est-elle écartée, alors qu’elle est intéressante pour le coût ?', a: 'Faute de traiteur disponible le soir : elle ne répond pas à la cause principale.' },
    { q: 'Quel est le point faible de l’option C, et pourquoi est-elle retenue quand même ?', a: 'Son coût la première année ; elle est la seule à répondre à la cause principale et la plus efficace contre le gaspillage.' },
    { q: 'Le texte prétend-il que l’option C est parfaite ?', a: 'Non : « Aucune option n’est parfaite ; l’option C est la moins risquée, à condition d’en mesurer les effets ».' },
  ],
  audio: REC('rec-c1-11-options'), say: REFRAME, terms: ['options', 'criteres'],
};

const A5_GRILLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a5-grille', layer: 'core', sheetId: 'sheet-analyse',
  title: 'Six tournures pour comparer', frSub: 'Peser, écarter, retenir',
  cols: ['Tournure', 'Geste', 'Registre'],
  rows: [
    { cells: ['au regard de', 'applique un critère', 'soutenu'],
      say: src(E(1258)).fr,
      detail: { title: 'au regard de', body: '« Si l’on considère ce critère ». On compare toutes les options au regard du même critère. EN: in the light of a criterion.', say: 'Au regard du coût, l’option A est la plus avantageuse.' } },
    { cells: ['présenter l’avantage de', 'donne un point fort', 'courant à soutenu'],
      say: src(E(1256)).fr,
      detail: { title: 'présenter l’avantage de', body: 'Suivi d’un infinitif ou d’un nom. Son contraire : avoir l’inconvénient de. EN: to have the advantage of.', say: 'Cette solution présente l’avantage de la simplicité.' } },
    { cells: ['avoir l’inconvénient de', 'donne un point faible', 'courant à soutenu'],
      say: src(E(1257)).fr,
      detail: { title: 'avoir l’inconvénient de', body: 'Chaque option a le sien : le dire rend le choix crédible. Toutefois, cependant l’introduisent souvent. EN: to have the drawback of.', say: 'Elle a l’inconvénient de coûter plus cher la première année.' } },
    { cells: ['écarter une option', 'l’élimine, avec une raison', 'courant'],
      say: src(E(1260)).fr,
      detail: { title: 'écarter', body: 'On écarte une option en disant pourquoi, souvent avec « faute de » ou « en raison de ». EN: to rule out, with a reason.', say: 'L’option B est écartée en raison de son délai.' } },
    { cells: ['retenir une option', 'la choisit', 'courant'],
      say: src(E(1263)).fr,
      detail: { title: 'retenir', body: '« L’option retenue » : celle que le rapport recommande. Le mot est neutre : il dit le choix, pas l’enthousiasme. EN: to choose, neutrally.', say: 'C’est l’option retenue.' } },
    { cells: ['faute de', 'donne la raison d’un rejet', 'courant'],
      say: 'Le projet est reporté, faute de budget.',
      detail: { title: 'faute de', body: 'Faute de + nom : parce qu’il manque. On l’emploie sans article quand le nom est général : faute de temps, faute de budget. EN: for lack of.', say: 'Faute de traiteur disponible le soir, l’option B est écartée.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['options', 'criteres'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a5-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre comparaisons boiteuses',
  errors: [
    { wrong: 'L’option C est la meilleure, car elle est moderne.', right: 'Au regard du gaspillage et de l’accès des deux équipes, l’option C est la plus efficace.',
      why: 'La nouveauté séduit ; elle n’est pas un critère annoncé. Juge sur les critères. EN: judge on the announced criteria.' },
    { wrong: 'L’option A coûte peu. L’option B est rapide. L’option C plaît aux salariés.', right: 'Au regard du coût, l’option A est la plus avantageuse ; au regard de l’accès, seule l’option C répond.',
      why: 'Chaque option est jugée sur un critère différent : on ne peut plus comparer. EN: same criteria for every option.' },
    { wrong: 'L’option B est écartée.', right: src(E(1260)).fr,
      why: 'Sans raison, le lecteur se demande si l’option a vraiment été étudiée. EN: give the reason for ruling out.' },
    { wrong: 'Nous retenons l’option C, qui est parfaite.', right: src(E(1264)).fr,
      why: 'Un rapport qui cache le point faible de son choix perd la confiance du lecteur. EN: admit the weak point.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['options', 'criteres'],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-choisir', layer: 'core', size: 'lg',
  title: 'Peser trois options', frSub: 'Un autre cas : le parc d’imprimantes',
  groups: [
    grp('Trois phrases d’un rapport', [
      free('Trois options ont été comparées au regard du coût, de la fiabilité et de l’encombrement.', 'Three options were compared in the light of cost, reliability and footprint.', 'les critères'),
      free('La location présente l’avantage d’inclure l’entretien.', 'Leasing has the advantage of including maintenance.', 'un avantage'),
      free('L’achat est écarté, faute de technicien sur place.', 'Buying is ruled out, for lack of an on-site technician.', 'un rejet motivé'),
    ], chk('Que fait la première phrase ?', ['Elle annonce les critères avant la comparaison.', 'Elle donne la recommandation.'], 0,
      'Les critères d’abord : le lecteur sait sur quoi on juge. EN: criteria first.')),
    ctl('Le point faible', '« La location présente l’avantage d’inclure l’entretien ; elle a toutefois … d’engager l’entreprise pour cinq ans. »', ['l’inconvénient', 'l’avantage', 'le regard'], 0,
      'Chaque option a son point faible ; le nommer rend le choix crédible. EN: name the drawback.'),
    ctl('Le choix', 'Comment le rapport annonce-t-il son choix ?', ['« C’est l’option retenue. »', '« C’est l’option que je préfère, de loin. »'], 0,
      'Neutre, au nom du service. EN: neutral wording.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['options', 'criteres'],
};

const A5_VERSION = pourTonRapport('a5-version', 'Comparer les options de la cantine', [
  grp('Deux comparaisons', [
    free('Fermer, prendre un traiteur ou changer les horaires : il y a plusieurs solutions possibles.', 'Close, bring in a caterer or change the hours: there are several possible solutions.', 'une énumération'),
    free('Trois options ont été comparées au regard du coût, de l’accès à un repas chaud, du gaspillage et du délai.', 'Three options were compared in the light of cost, access to a hot meal, waste and lead time.', 'une comparaison'),
  ], chk('Laquelle sert ton rapport ?', ['la seconde', 'la première'], 0,
    'Le premier jet énumérait ; le rapport compare, sur des critères annoncés. EN: compare on announced criteria.')),
  grp('Le point faible du choix', [
    it(E(1264), 'la nuance'),
  ], chk('L’option C coûte plus cher la première année. Tu...', ['le dis, puis tu expliques pourquoi elle est retenue', 'le caches pour ne pas affaiblir ta recommandation'], 0,
    'Le lecteur le découvrira de toute façon ; mieux vaut qu’il l’apprenne de toi. EN: state it, then justify.')),
], ['options', 'criteres']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Les critères', 'Les critères sont annoncés...', ['avant la comparaison', 'dans les annexes seulement', 'après le choix'], 0,
    'Le lecteur sait d’abord sur quoi on juge. EN: before comparing.'),
  ctl('Écarter', 'Une option écartée l’est...', ['sans explication', 'avec une raison'], 1,
    'Faute de, en raison de : on dit pourquoi. EN: with a reason.'),
  ctl('Retenir', '« L’option retenue » est...', ['celle que le rapport recommande', 'la moins chère', 'la plus récente'], 0,
    'Retenir, c’est choisir, au vu des critères. EN: the one recommended.'),
], ['options', 'criteres']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Les options et les critères',
    opener: {
      line: 'Trois chemins, une seule balance : ici tu compares des options sur les mêmes critères avant de choisir. EN: Three paths, one set of scales: here you compare options on the same criteria before choosing.',
      imageRef: 'lessons/rapports-comptes-rendus/act05.jpg',
    },
    sections: [],
    milestone: 'Tu annonces tes critères, tu écartes avec une raison et tu justifies l’option retenue sans cacher son point faible. EN: You announce your criteria, rule out with a reason and justify the chosen option, weak point included.',
    estScreens: 33, restPoints: ['a5-grille'],
  },
  sections: [A5_LECTURE, A5_GRILLE, A5_ERREURS, A5_CHOISIR, A5_VERSION, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — RECOMMANDER
 *
 *  TEXT: the recommendations. MOVE: the register (nous préconisons, nous
 *  recommandons, il conviendrait de, il y aurait lieu de, il est
 *  recommandé que + subjonctif), dosage, and who / what / by when.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a6-lecture', layer: 'core', questionsInModal: true,
  title: 'Les recommandations', frSub: 'Qui fait quoi, et pour quand',
  text: RECOMMANDATIONS_TEXT,
  glossary: [
    { word: 'borne', en: 'kiosk, terminal', note: 'Un petit appareil en libre-service, ici à l’entrée, pour commander.' },
  ],
  questions: [
    { q: 'Devine le sens : « Si les résultats ne sont pas au rendez-vous ». Que veut dire l’expression ?', a: 'S’ils ne sont pas aussi bons que prévu.' },
    { q: 'Quelles tournures servent à recommander ? Relève-en quatre.', a: '« nous préconisons », « nous recommandons de », « il est recommandé que », « il conviendrait de », « il y aurait lieu de ».' },
    { q: 'Quel mode suit « il est recommandé que » dans le texte ?', a: 'Le subjonctif : « que chaque salarié puisse », « que la cantine soit ouverte ».' },
    { q: 'Quelle recommandation nomme un responsable ?', a: 'La deuxième (les ressources humaines pour l’embauche), la quatrième (les finances) et le bilan (le gérant et le service des installations).' },
    { q: 'Pourquoi « il y aurait lieu de » plutôt que « nous recommandons » pour les prix ?', a: 'Le conditionnel dose la recommandation : c’est un essai, dont l’effet doit encore être évalué.' },
    { q: 'Que prévoit le texte si l’essai échoue ?', a: 'De réexaminer l’option A, la fermeture.' },
  ],
  audio: REC('rec-c1-11-recommandations'), say: REFRAME, terms: ['preconiser'],
};

const A6_ECHELLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a6-echelle', layer: 'core', sheetId: 'sheet-recommander',
  title: 'Six façons de recommander', frSub: 'Du plus net au plus prudent',
  cols: ['Tournure', 'Construction', 'Force'],
  rows: [
    { cells: ['nous préconisons', '+ nom, + de + inf., + que + subj.', 'nette, soutenue'],
      say: src(E(1268)).fr,
      detail: { title: 'préconiser', body: 'Recommander vivement. Le verbe du rapport par excellence ; « que » demande le subjonctif. EN: to recommend strongly, formal.', say: src(E(1278)).fr } },
    { cells: ['nous recommandons de', '+ infinitif, ou + nom', 'nette'],
      say: src(E(1272)).fr,
      detail: { title: 'recommander de', body: 'Le plus courant. « Nous » engage le service. EN: the commonest; « nous » speaks for the department.', say: 'Nous recommandons un essai de six mois.' } },
    { cells: ['il est recommandé que', '+ subjonctif', 'nette, impersonnelle'],
      say: src(E(1269)).fr,
      detail: { title: 'il est recommandé que', body: 'Impersonnel, suivi du subjonctif comme « il faut que ». EN: impersonal, + subjunctive.', say: src(E(1273)).fr } },
    { cells: ['il conviendrait de', '+ infinitif', 'prudente'],
      say: src(E(1270)).fr,
      detail: { title: 'il conviendrait de', body: 'Le conditionnel adoucit : c’est souhaitable plutôt qu’urgent. EN: the conditional softens.', say: 'Il conviendrait de consulter l’équipe du soir.' } },
    { cells: ['il y aurait lieu de', '+ infinitif', 'prudente, soutenue'],
      say: src(E(1271)).fr,
      detail: { title: 'il y aurait lieu de', body: '« Il serait justifié de ». Pour une mesure qu’on propose d’étudier ou d’essayer. EN: there would be grounds to.', say: 'Il y aurait lieu de revoir le contrat en septembre.' } },
    { cells: ['il faut absolument', '+ infinitif', 'trop brutale pour un rapport'],
      say: src(E(1275)).fr,
      detail: { title: 'il faut absolument', body: 'Un ordre, pas une recommandation : la direction décide, le rapport propose. EN: an order, not a recommendation.', say: 'Nous préconisons la fermeture, à défaut d’autre solution.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['preconiser'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a6-piege', layer: 'core', swipe: true,
  title: 'Six recommandations qui ne recommandent pas',
  rule: {
    title: 'Le bon mode, la bonne force',
    body: 'Après « il est recommandé que » et « nous préconisons que », le subjonctif ; après « il conviendrait de », l’infinitif. Une recommandation propose sans ordonner, et dit qui fait quoi pour quand. EN: The right mood and the right strength: propose, do not order.',
  },
  cards: [
    { promptLabel: 'l’indicatif', promptSound: 'Il est recommandé que la cantine est ouverte jusqu’à dix-neuf heures.',
      fr: src(E(1269)).fr, ipa: ipaOf(E(1269)),
      tip: 'Une recommandation n’est pas un fait : le subjonctif. EN: subjunctive.' },
    { promptLabel: 'un ordre', promptSound: 'Il faut absolument fermer la cantine.',
      fr: 'Nous préconisons un essai de six mois.', ipa: ipaOf(E(1268)),
      tip: 'Le rapport propose ; la direction décide. EN: propose, do not order.' },
    { promptLabel: 'de ou que', promptSound: 'Il conviendrait que proposer deux plats.',
      fr: src(E(1270)).fr, ipa: ipaOf(E(1270)),
      tip: 'Il conviendrait de + infinitif. EN: de + infinitive.' },
    { promptLabel: 'l’indicatif encore', promptSound: 'Nous préconisons que l’essai fait l’objet d’un bilan en juin.',
      fr: src(E(1278)).fr, ipa: ipaOf(E(1278)),
      tip: 'Préconiser que + subjonctif : fasse. EN: fasse.' },
    { promptLabel: 'une recommandation floue', promptSound: 'Il faudrait faire quelque chose pour la cantine.',
      fr: 'Nous recommandons de mettre en place la précommande en ligne.', ipa: ipaOf(E(1272)),
      tip: 'Quoi, précisément ? Une recommandation se met en œuvre. EN: say what, precisely.' },
    { promptLabel: 'pas de suivi', promptSound: 'Nous recommandons un essai, puis on verra.',
      fr: src(E(1277)).fr, ipa: ipaOf(E(1277)),
      tip: 'Un bilan daté dit comment on saura si l’essai réussit. EN: a dated review.' },
  ],
  drill: [
    { promptSay: 'Il est recommandé que chaque salarié … commander la veille.', opts: ['puisse', 'peut'], correct: 0 },
    { promptSay: 'Il conviendrait … proposer deux plats.', opts: ['de', 'que'], correct: 0 },
    { promptSay: 'Nous … un essai de six mois.', opts: ['préconisons', 'ordonnons'], correct: 0 },
    { promptSay: 'Il est recommandé que la cantine … ouverte jusqu’à 19 h.', opts: ['soit', 'est'], correct: 0 },
    { promptSay: 'Il y aurait … de revoir les prix.', opts: ['lieu', 'place'], correct: 0 },
    { promptSay: 'Nous préconisons que l’essai … l’objet d’un bilan.', opts: ['fasse', 'fait'], correct: 0 },
    { promptSay: 'Nous recommandons … mettre en place la précommande.', opts: ['de', 'à'], correct: 0 },
    { promptSay: 'Une recommandation dit qui fait quoi, et pour … .', opts: ['quand', 'combien'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le bon mode, la bonne force' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qui affaiblit une recommandation' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six recommandations justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-11-piege-recommander'), say: REFRAME, terms: ['preconiser'],
};

const A6_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a6-dictee', layer: 'core',
  title: 'Écris les recommandations que tu entends',
  itemIds: dicteeFor(6),
  audio: AUDIO, say: REFRAME, terms: ['preconiser'],
};

const A6_VERSION = pourTonRapport('a6-version', 'Ta recommandation principale', [
  grp('Deux recommandations', [
    free('Il faudrait peut-être changer les horaires de la cantine.', 'Perhaps the canteen’s hours should be changed.', 'une piste vague'),
    free('Nous préconisons d’ouvrir un second service jusqu’à 19 h dès le 1er avril ; les ressources humaines recruteront un cuisinier à temps partiel.', 'We recommend opening a second sitting until 7 p.m. from 1 April; human resources will recruit a part-time cook.', 'une recommandation complète'),
  ], chk('Laquelle sert ton rapport ?', ['la seconde', 'la première'], 0,
    'Quoi, quand, qui : la direction peut décider sur-le-champ. EN: what, when, who.')),
  grp('Le mode', [
    it(E(1273), 'le modèle'),
  ], chk('« Il est recommandé que le service des finances … (évaluer) l’effet des nouveaux prix. »', ['évalue', 'évaluera'], 0,
    'Après « il est recommandé que », le subjonctif présent. EN: present subjunctive.')),
], ['preconiser']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le mode', 'Après « il est recommandé que », on emploie...', ['le subjonctif', 'l’indicatif', 'le futur'], 0,
    'Comme après « il faut que ». EN: the subjunctive.'),
  ctl('La force', '« Il y aurait lieu de » est plus prudent que...', ['« il conviendrait de »', '« nous préconisons »'], 1,
    'Le conditionnel adoucit ; préconiser recommande vivement. EN: more cautious than préconiser.'),
  ctl('Complète', 'Une recommandation complète dit...', ['qui fait quoi, et pour quand', 'pourquoi le problème existe', 'ce que pense le rédacteur'], 0,
    'Sinon personne ne la met en œuvre. EN: who, what, when.'),
], ['preconiser']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Recommander',
    opener: {
      line: 'La direction décide, toi tu proposes : ici tu apprends à recommander avec la bonne force et le bon mode. EN: Management decides, you propose: here you learn to recommend with the right strength and the right mood.',
      imageRef: 'lessons/rapports-comptes-rendus/act06.jpg',
    },
    sections: [],
    milestone: 'Tu recommandes dans le registre du rapport, avec le subjonctif quand il le faut, et chaque recommandation dit qui, quoi et quand. EN: You recommend in report register, with the subjunctive where needed, and say who, what and when.',
    estScreens: 35, restPoints: ['a6-echelle'],
  },
  sections: [A6_LECTURE, A6_ECHELLE, A6_PIEGE, A6_DICTEE, A6_VERSION, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LA SYNTHÈSE EN TÊTE
 *
 *  TEXT: the sommaire de gestion and the director's note. MOVE: written
 *  last, placed first; it summarises (problem, cause, recommendation,
 *  decision expected), never announces. « sommaire exécutif » is a calque.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a7-lecture', layer: 'core', questionsInModal: true,
  title: 'Le sommaire de gestion', frSub: 'La page que la directrice lit',
  text: SOMMAIRE_TEXT,
  glossary: [
    { word: 'calque', en: 'calque, loan translation', note: 'Une expression traduite mot à mot d’une autre langue.' },
  ],
  questions: [
    { q: 'Devine le sens : « La direction est invitée à valider l’essai ». Que veut dire « valider » ici ?', a: 'Approuver officiellement, donner son accord.' },
    { q: 'Quelles sont les cinq rubriques du sommaire ?', a: 'Problème, cause, options, recommandation, décision attendue.' },
    { q: 'Que trouve-t-on dans « Décision attendue » qu’on ne trouvait pas dans le premier jet ?', a: 'Ce qu’on demande à la direction, et pour quand : valider l’essai et le budget avant le 20 mars.' },
    { q: 'Pourquoi Martine Pelletier est-elle satisfaite ?', a: 'La première page lui suffit : elle sait ce qui ne va pas, pourquoi, et ce qu’on lui demande.' },
    { q: 'À quoi servira le reste du rapport, selon elle ?', a: 'À répondre si le conseil d’administration pose des questions.' },
    { q: 'Quel titre remplace « sommaire exécutif », et pourquoi ?', a: '« Sommaire de gestion », recommandé par l’Office au Québec (en France, « synthèse ») : « sommaire exécutif » est un calque de l’anglais.' },
  ],
  audio: REC('rec-c1-11-sommaire'), say: REFRAME, terms: ['synthese', 'calque'],
};

const A7_TROIS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a7-trois', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-architecture',
  title: 'Une page qui tient seule', frSub: 'Écrite en dernier, lue en premier',
  hint: 'Quatre cartes. Demande-toi ce que le lecteur pressé retient.',
  audio: AUDIO, say: REFRAME, terms: ['synthese'],
  cards: [
    { head: 'Le problème et sa cause', label: 'en une phrase', fr: src(E(1284)).fr, sub: rsOf(E(1284)),
      body: 'Ce qui ne va pas, et pourquoi, dans la même phrase. Le lecteur sait déjà l’essentiel. EN: the problem and its cause together.' },
    { head: 'La recommandation', label: 'nous recommandons', fr: src(E(1285)).fr, sub: rsOf(E(1285)),
      body: 'Ce que tu proposes, avec l’échéance du bilan. Pas les détails : ils sont dans le rapport. EN: what you propose, not the detail.' },
    { head: 'Écrite en dernier', label: 'la méthode', fr: src(E(1286)).fr, sub: rsOf(E(1286)),
      body: 'Tu ne peux résumer qu’un rapport fini. Puis tu la mets en tête, pour le lecteur pressé. EN: write it last, place it first.' },
    { head: 'Le nom', label: 'Québec et France', fr: src(E(1279)).fr, sub: rsOf(E(1279)),
      body: 'Au Québec, l’Office privilégie « sommaire de gestion » ; « synthèse » et « résumé », plus généraux, s’emploient aussi, et c’est « synthèse » qu’on lit le plus en France. EN: sommaire de gestion (Québec), synthèse.' },
  ],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a7-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre synthèses qui ne résument pas',
  errors: [
    { wrong: src(E(1283)).fr, right: src(E(1284)).fr,
      why: 'C’est l’habitude de l’introduction : annoncer. Mais la synthèse doit déjà donner la réponse. EN: a summary answers, it does not announce.' },
    { wrong: 'Sommaire exécutif', right: 'Sommaire de gestion',
      why: 'Le calque de « executive summary » se comprend, mais l’Office le déconseille : en français, « exécutif » renvoie à l’exécution des lois. EN: an advised-against calque.' },
    { wrong: 'Synthèse : le déficit atteint environ 40 000 $.', right: 'Synthèse : le déficit atteint 38 000 $.',
      why: 'On arrondit pour faire court ; mais le lecteur verra 38 000 $ page 2 et doutera de tout. EN: same figure everywhere.' },
    { wrong: 'Synthèse : on verra dans la conclusion ce que nous proposons.', right: src(E(1285)).fr,
      why: 'Le suspense marche dans un roman ; le lecteur d’un rapport n’ira peut-être jamais jusqu’à la conclusion. EN: no suspense in a summary.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['synthese', 'calque'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-choisir', layer: 'core', size: 'lg',
  title: 'La bonne première page', frSub: 'Un autre rapport : le télétravail',
  groups: [
    grp('Trois phrases de synthèse', [
      free('Le télétravail du vendredi a réduit de moitié l’occupation des bureaux, sans baisse de production selon les indicateurs du service.', 'Working from home on Fridays has halved office occupancy, with no fall in output according to the department’s indicators.', 'le constat'),
      free('Nous recommandons de fermer un étage le vendredi, à titre d’essai jusqu’en décembre.', 'We recommend closing one floor on Fridays, as a trial until December.', 'la recommandation'),
      free('La direction est invitée à se prononcer avant la fin du mois.', 'Management is asked to decide before the end of the month.', 'la décision attendue'),
    ], chk('Ces trois phrases suffisent-elles à décider ?', ['Oui : le fait, la proposition, la décision attendue.', 'Non : il manque l’histoire du télétravail.'], 0,
      'Le lecteur pressé n’a pas besoin de l’histoire, seulement de quoi décider. EN: enough to decide.')),
    ctl('L’ordre', 'Quand écris-tu la synthèse ?', ['en dernier', 'en premier', 'avant l’enquête'], 0,
      'On ne résume qu’un rapport fini. EN: last.'),
    ctl('Le verbe', 'Une synthèse...', ['résume le rapport', 'présente le plan du rapport'], 0,
      'Elle donne les réponses, pas le sommaire des chapitres. EN: it sums up.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['synthese'],
};

const A7_VERSION = pourTonRapport('a7-version', 'La synthèse de ton rapport', [
  grp('Deux débuts de synthèse', [
    free('Ce rapport va présenter la situation de la cantine, puis les solutions envisagées.', 'This report will present the situation of the canteen, then the solutions considered.', 'une annonce'),
    free('La cantine sert soixante-dix repas par jour au lieu de cent dix, parce que ses horaires ne suivent plus ceux des équipes.', 'The canteen serves seventy meals a day instead of a hundred and ten, because its hours no longer match the teams’.', 'un résumé'),
  ], chk('Laquelle ouvre ta synthèse ?', ['la seconde', 'la première'], 0,
    'Le chiffre et la cause : la directrice sait déjà l’essentiel. EN: the figure and the cause.')),
  grp('La règle des trois', [
    it(E(1287), 'le modèle'),
    it(E(1289), 'la cohérence'),
  ], chk('Ta synthèse fait cinq lignes et oublie la recommandation. Tu...', ['ajoutes la recommandation et coupes un détail', 'gardes tout : la recommandation est plus loin'], 0,
    'Sans recommandation, le lecteur pressé ne sait pas quoi décider. EN: the recommendation must be there.')),
], ['synthese']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La place', 'La synthèse se place...', ['en tête du rapport', 'après les annexes', 'à la fin de l’analyse'], 0,
    'Pour le lecteur qui ne lira qu’elle. EN: at the head.'),
  ctl('Le contenu', 'Elle dit...', ['le plan du rapport', 'le problème, la cause et la recommandation'], 1,
    'Les réponses, pas les chapitres. EN: problem, cause, recommendation.'),
  ctl('Le nom', 'L’Office québécois déconseille...', ['« sommaire exécutif »', '« synthèse »', '« sommaire de gestion »'], 0,
    'C’est un calque de « executive summary ». EN: a calque.'),
], ['synthese', 'calque']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'La synthèse en tête',
    opener: {
      line: 'Elle ne lira qu’une page : alors cette page doit tout dire. Ici tu écris la synthèse en dernier et tu la places en premier. EN: She will read only one page, so that page must say it all. Here you write the summary last and put it first.',
      imageRef: 'lessons/rapports-comptes-rendus/act07.jpg',
    },
    sections: [],
    milestone: 'Tu écris une synthèse qui tient seule : le problème, sa cause, ta recommandation et la décision attendue. EN: You write a summary that stands alone: problem, cause, recommendation, decision expected.',
    estScreens: 33, restPoints: ['a7-trois'],
  },
  sections: [A7_LECTURE, A7_TROIS, A7_ERREURS, A7_CHOISIR, A7_VERSION, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LE COMPTE RENDU
 *
 *  TEXT: the canteen committee's compte rendu. MOVE: the essence of the
 *  discussions and the decisions, in the present, with reporting verbs,
 *  and no opinion of the secretary. Nominalisation stays lesson 10 in B2's.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a8-lecture', layer: 'core', questionsInModal: true,
  title: 'Le compte rendu du comité', frSub: 'La réunion du 18 mars',
  text: CR_TEXT,
  glossary: [
    { word: 'renfort', en: 'extra help, reinforcement', note: 'Du personnel en plus, pour aider une équipe.' },
  ],
  questions: [
    { q: 'Devine le sens : « La question est reportée à la prochaine réunion ». Que veut dire « reporter » ici ?', a: 'Remettre à plus tard : on en parlera à la prochaine réunion.' },
    { q: 'À quel temps sont les verbes qui rapportent les interventions ?', a: 'Au présent : rappelle, souligne, estime, s’inquiètent, conteste, propose, demande.' },
    { q: 'Relève quatre verbes qui rapportent une parole, chacun avec ce qu’il dit de l’intervention.', a: 'Rappeler (un fait connu), souligner (un point important), s’inquiéter de (une crainte), contester (un désaccord), proposer, demander.' },
    { q: 'Le secrétaire donne-t-il son avis quelque part ?', a: 'Non : il rapporte les positions, y compris le désaccord de Bruno Lachance sur le chiffre, sans dire qui a raison.' },
    { q: 'Quelles décisions sont prises, et qui s’en charge ?', a: 'Recommander l’essai à la direction ; Aïcha Benali prépare l’offre d’emploi pour le 25 mars ; Thomas Girard diffuse le compte rendu.' },
    { q: 'Que se passera-t-il au début de la prochaine réunion ?', a: 'Le compte rendu sera soumis à l’approbation du comité.' },
  ],
  audio: REC('rec-c1-11-cr'), say: REFRAME, terms: ['compterendu'],
};

const A8_VERBES: Sec<'examples'> = {
  type: 'examples', id: 'a8-verbes', layer: 'core',
  title: 'Les verbes qui rapportent', frSub: 'Chacun dit quelque chose de l’intervention',
  examples: [
    ex(E(1291), 'Rappeler : redire un fait que tout le monde est censé connaître.'),
    ex(E(1292), 'Souligner : mettre en avant un point jugé important par celui qui parle.'),
    ex(E(1293), 'S’inquiéter de : rapporter une crainte, sans la partager ni la juger.'),
    ex(E(1294), 'Proposer : une suggestion, pas encore une décision.'),
    ex(E(1302), 'Pour une décision sans opposition : les faits, rien de plus.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['compterendu'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a8-piege', layer: 'core', swipe: true,
  title: 'Six phrases qui trahissent le secrétaire',
  rule: {
    title: 'Rapporter, sans juger',
    body: 'Le compte rendu présente l’essentiel des discussions et des décisions, au présent, avec un verbe qui rapporte. Le secrétaire n’y met ni son avis, ni ses adjectifs, ni les répliques. EN: Report in the present, with a reporting verb, never judging.',
  },
  cards: [
    { promptLabel: 'un avis', promptSound: 'Je trouve que Bruno a eu raison de se fâcher.',
      fr: 'Bruno Lachance conteste le chiffre de deux cuisiniers.', ipa: '/bʁy.no la.ʃɑ̃s kɔ̃.tɛst lə ʃifʁ də dø kɥi.zi.nje/',
      tip: 'Le désaccord se rapporte ; qui a raison, le comité en jugera. EN: report the disagreement, do not rule on it.' },
    { promptLabel: 'un adjectif qui juge', promptSound: 'Aïcha Benali souligne avec justesse que l’équipe du soir n’a pas été consultée.',
      fr: src(E(1292)).fr, ipa: ipaOf(E(1292)),
      tip: '« Avec justesse » est ton avis. Le verbe suffit. EN: drop the judging adverb.' },
    { promptLabel: 'une réplique', promptSound: 'Bruno dit : « Franchement, deux cuisiniers, vous rêvez. »',
      fr: 'Bruno Lachance estime qu’un cuisinier à temps partiel suffit.', ipa: '/bʁy.no la.ʃɑ̃s ɛs.tim kœ̃ kɥi.zi.nje a tɑ̃ paʁ.sjɛl sy.fi/',
      tip: 'On garde le contenu, pas le ton ni les mots exacts. EN: keep the content, not the wording.' },
    { promptLabel: 'un récit', promptSound: 'Ensuite, Nora a pris la parole, puis tout le monde a discuté longtemps.',
      fr: 'Plusieurs membres s’inquiètent du coût d’un second service.', ipa: ipaOf(E(1293)),
      tip: 'Pas la chronologie de la séance : ce qui a été dit d’important. EN: the substance, not the sequence.' },
    { promptLabel: 'un vague « on »', promptSound: 'On a parlé un peu de la précommande.',
      fr: src(E(1294)).fr, ipa: ipaOf(E(1294)),
      tip: 'Qui, et pour dire quoi ? Le lecteur absent veut le savoir. EN: who said what.' },
    { promptLabel: 'une décision floue', promptSound: 'Il faudra que quelqu’un s’occupe de l’offre d’emploi.',
      fr: 'Aïcha Benali prépare l’offre d’emploi pour le 25 mars.', ipa: '/a.i.ʃa be.na.li pʁe.paʁ lɔfʁ dɑ̃.plwa puʁ lə vɛ̃t.sɛ̃k maʁs/',
      tip: 'Une décision a un responsable et une date. EN: an owner and a date.' },
  ],
  drill: [
    { promptSay: 'Bruno Lachance … que la cantine ferme à 13 h 30.', opts: ['rappelle', 'a eu raison de dire'], correct: 0 },
    { promptSay: 'Plusieurs membres s’… du coût d’un second service.', opts: ['inquiètent', 'énervent'], correct: 0 },
    { promptSay: 'Le compte rendu est rédigé au … .', opts: ['présent', 'passé simple'], correct: 0 },
    { promptSay: 'Aïcha Benali … que l’équipe du soir n’a pas été consultée.', opts: ['souligne', 'souligne à juste titre'], correct: 0 },
    { promptSay: 'Le secrétaire ne donne pas son … .', opts: ['avis', 'nom'], correct: 0 },
    { promptSay: 'Personne ne s’… à la proposition.', opts: ['oppose', 'opposait'], correct: 0 },
    { promptSay: 'Le comité … un essai de précommande dès avril.', opts: ['propose', 'impose'], correct: 0 },
    { promptSay: 'Le compte rendu sera soumis à l’… du comité.', opts: ['approbation', 'approuvation'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Rapporter, sans juger' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qui trahit le secrétaire' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-11-piege-cr'), say: REFRAME, terms: ['compterendu'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-choisir', layer: 'core', size: 'lg',
  title: 'Le bon verbe pour chaque intervention', frSub: 'Une autre réunion : le déménagement des archives',
  groups: [
    grp('Trois interventions rapportées', [
      free('La responsable des archives rappelle que le local actuel est inondable.', 'The archivist points out that the current room is liable to flooding.', 'un fait connu'),
      free('Le représentant du personnel s’inquiète de la distance avec le nouveau local.', 'The staff representative is concerned about the distance to the new room.', 'une crainte'),
      free('Le directeur financier propose de louer un entrepôt pour deux ans.', 'The finance director proposes renting a warehouse for two years.', 'une suggestion'),
    ], chk('« Le directeur financier propose » rapporte...', ['une suggestion, pas encore une décision', 'une décision du comité'], 0,
      'Proposer n’engage pas le comité : la décision viendra, ou pas. EN: a suggestion, not a decision.')),
    ctl('Le désaccord', 'Quelqu’un dit que le chiffre avancé est faux. Tu écris qu’il...', ['conteste le chiffre', 'se trompe sur le chiffre', 'a raison sur le chiffre'], 0,
      'Contester rapporte le désaccord sans trancher. EN: report, do not rule.'),
    ctl('Le temps', 'Le compte rendu de la réunion d’hier s’écrit...', ['au présent', 'au plus-que-parfait'], 0,
      'Le présent du compte rendu met toutes les interventions sur le même plan. EN: present.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['compterendu'],
};

const A8_VERSION = pourTonRapport('a8-version', 'Ce que le comité a dit, dans ton rapport', [
  grp('Deux façons de citer le comité', [
    free('Au comité, tout le monde a fini par être d’accord avec Bruno, qui avait raison.', 'At the committee, everyone ended up agreeing with Bruno, who was right.', 'un avis'),
    free('Selon le compte rendu du comité du 18 mars, le gérant estime qu’un cuisinier à temps partiel suffit.', 'According to the committee’s compte rendu of 18 March, the manager believes a part-time cook is enough.', 'une source rapportée'),
  ], chk('Laquelle sert ton rapport ?', ['la seconde', 'la première'], 0,
    'Le compte rendu devient une source, citée sans jugement. EN: the compte rendu becomes a cited source.')),
  grp('Le secrétaire', [
    it(E(1299), 'la règle'),
    it(E(1300), 'en une phrase'),
  ], chk('Tu rédiges le compte rendu et tu n’es pas d’accord avec une proposition. Tu...', ['la rapportes telle quelle', 'ajoutes ta réserve entre parenthèses'], 0,
    'Ton avis, tu le donnes en réunion, pas dans le compte rendu. EN: give your view in the meeting, not in the record.')),
], ['compterendu']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le contenu', 'Un compte rendu présente...', ['l’essentiel des discussions et des décisions', 'chaque réplique mot pour mot', 'l’avis du secrétaire'], 0,
    'L’essentiel, et les décisions. EN: the essence and the decisions.'),
  ctl('Le temps', 'On le rédige...', ['au passé composé, dans l’ordre', 'au présent'], 1,
    'Le présent rapporte sans raconter. EN: in the present.'),
  ctl('La suite', 'Contrairement au procès-verbal, le compte rendu...', ['n’a pas à être approuvé : c’est un aide-mémoire interne', 'doit être signé par un notaire', 'reste secret'], 0,
    'Pour l’Office québécois, il n’a pas à être approuvé ; un comité peut le faire, comme celui de la cantine. EN: approval is optional.'),
], ['compterendu']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le compte rendu',
    opener: {
      line: 'Ils étaient cinq autour de la table ; le compte rendu parle pour tous, et pour ceux qui n’y étaient pas. Ici tu rapportes sans juger. EN: Five people sat round the table; the compte rendu speaks for all of them, and for those who were absent. Here you report without judging.',
      imageRef: 'lessons/rapports-comptes-rendus/act08.jpg',
    },
    sections: [],
    milestone: 'Tu rédiges un compte rendu au présent, avec le verbe qui rapporte chaque intervention, et sans ton avis. EN: You write a compte rendu in the present, with the right reporting verb, and without your opinion.',
    estScreens: 34, restPoints: ['a8-verbes'],
  },
  sections: [A8_LECTURE, A8_VERBES, A8_PIEGE, A8_CHOISIR, A8_VERSION, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LE PROCÈS-VERBAL
 *
 *  TEXT: an extract from the board's procès-verbal. MOVE: official, tied to
 *  the agenda, present and impersonal, decisions as resolutions; on adopte
 *  un ordre du jour, on approuve un procès-verbal (OQLF). A colleague in
 *  Lyon explains the French uses, heard once.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a9-lecture', layer: 'core', questionsInModal: true,
  title: 'Le procès-verbal du conseil', frSub: 'La séance du 26 mars',
  text: PV_TEXT,
  glossary: [
    { word: 'quorum', en: 'quorum', note: 'Le nombre minimum de membres présents pour que l’assemblée puisse décider.' },
  ],
  questions: [
    { q: 'Devine le sens : « L’ordre du jour étant épuisé, la séance est levée ». Que veut dire « épuisé » ici ?', a: 'Terminé : tous les points ont été traités.' },
    { q: 'Comment le procès-verbal est-il organisé ?', a: 'Point par point, en suivant l’ordre du jour : ouverture, ordre du jour, procès-verbal précédent, cantine, questions diverses, clôture.' },
    { q: 'Quel verbe s’emploie pour l’ordre du jour, et lequel pour le procès-verbal précédent ?', a: 'On adopte l’ordre du jour ; on approuve le procès-verbal.' },
    { q: 'Comment la décision sur la cantine est-elle formulée ?', a: 'En résolution : « Sur proposition de…, appuyée par…, il est résolu d’autoriser l’essai… », adoptée à l’unanimité.' },
    { q: 'Qu’est-ce qui distingue ce document du compte rendu du comité, selon le secrétaire ?', a: 'Il ne rapporte pas toutes les opinions : il consigne les décisions officielles, point par point ; il sera approuvé, signé et conservé.' },
    { q: 'Pourquoi le secrétaire n’a-t-il pas écrit « minutes » ?', a: 'Parce que l’Office québécois de la langue française déconseille cet emprunt pour désigner le procès-verbal.' },
  ],
  audio: REC('rec-c1-11-pv'), say: REFRAME, terms: ['procesverbal'],
};

const A9_TROIS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a9-trois', layer: 'core', sheetId: 'sheet-reunion',
  title: 'Compte rendu ou procès-verbal', frSub: 'Six questions pour choisir',
  cols: ['Question', 'Compte rendu', 'Procès-verbal'],
  rows: [
    { cells: ['Caractère', 'document de travail', 'document officiel'],
      say: src(E(1307)).fr,
      detail: { title: 'Le caractère', body: 'Pour l’Office québécois, le procès-verbal se distingue du compte rendu « surtout par son caractère officiel ». EN: the procès-verbal is above all official.', say: src(E(1313)).fr } },
    { cells: ['Contenu', 'l’essentiel des discussions et des décisions', 'les discussions et décisions, les résolutions'],
      say: src(E(1290)).fr,
      detail: { title: 'Le contenu', body: 'Le compte rendu présente l’essentiel des échanges ; le procès-verbal consigne aussi les résolutions, nominations et engagements. EN: the procès-verbal also records resolutions.', say: src(E(1310)).fr } },
    { cells: ['Plan', 'souple', 'l’ordre du jour, point par point'],
      say: src(E(1308)).fr,
      detail: { title: 'Le plan', body: 'Le procès-verbal suit l’ordre du jour, plus étroitement que le compte rendu. EN: tied to the agenda.', say: src(E(1308)).fr } },
    { cells: ['Temps', 'le présent', 'le présent, forme impersonnelle'],
      say: src(E(1295)).fr,
      detail: { title: 'Le temps', body: 'Les deux s’écrivent au présent ; le procès-verbal, à la forme impersonnelle : « il est résolu », « le procès-verbal est approuvé ». EN: present tense; impersonal for the procès-verbal.', say: src(E(1309)).fr } },
    { cells: ['Approbation', 'facultative', 'par l’assemblée, à la séance suivante'],
      say: src(E(1311)).fr,
      detail: { title: 'Adopter, approuver', body: 'L’Office québécois : on adopte un ordre du jour, on approuve un procès-verbal. En France, on lit aussi « le procès-verbal est adopté », au Sénat par exemple. EN: adopt an agenda, approve minutes (OQLF); « adopté » is also used in France.', say: src(E(1305)).fr } },
    { cells: ['Et en France', 'pour les réunions d’équipe', 'aussi l’acte d’un agent public'],
      say: src(E(1316)).fr,
      detail: { title: 'En France', body: 'Le mot y désigne aussi l’acte écrit d’un agent public, et « un PV », souvent une amende. Pour une réunion courante, on fait un compte rendu ou un relevé de décisions. EN: in France, also an official’s report; a PV is often a fine.', say: src(E(1317)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['procesverbal', 'compterendu'],
};

/** THE EAR MISSION: one take, the Lyon colleague heard once. */
const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a9-ecoute', layer: 'core', hideLines: true,
  title: 'Aïcha, de Lyon', frSub: 'Un message, une écoute',
  lines: [ln(E(1312)), ln(E(1313)), ln(E(1314)), ln(E(1315)), ln(E(1316)), ln(E(1317)), ln(E(1318)), ln(E(1319))],
  questions: [
    { q: 'Selon Aïcha, qu’est-ce qu’un procès-verbal, avant tout ?', opts: ['un document officiel', 'une amende', 'une note personnelle'], correct: 0,
      why: '« C’est d’abord un document officiel. » EN: official first.' },
    { q: 'Que fait-on de celui d’une assemblée générale ?', opts: ['On le signe et on le conserve.', 'On le jette après la séance.'], correct: 0,
      why: 'Il se signe et se conserve : c’est une trace officielle. EN: signed and kept.' },
    { q: 'Que veut souvent dire « un PV » dans la rue, en France ?', opts: ['une amende', 'une réunion', 'un rapport'], correct: 0,
      why: 'Le procès-verbal de l’agent, donc souvent une contravention. EN: often a fine.' },
    { q: 'Pour les réunions d’équipe, que rédige-t-on plutôt à Lyon ?', opts: ['un compte rendu', 'un procès-verbal signé'], correct: 0,
      why: 'Un document de travail suffit. EN: a compte rendu.' },
    { q: 'Quel mot Aïcha écarte-t-elle, pour Lyon comme pour Sherbrooke ?', opts: ['« les minutes »', '« le compte rendu »', '« le relevé »'], correct: 0,
      why: 'À Lyon, on ne le dit pas ; à Sherbrooke, on l’entend parfois, mais l’Office déconseille cet emprunt. EN: an advised-against borrowing, sometimes heard in Québec.' },
  ],
  audio: REC('rec-c1-11-aicha'), say: REFRAME, terms: ['procesverbal'],
};

const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-trier', layer: 'core', size: 'lg',
  title: 'Adopter, approuver, résoudre', frSub: 'Les mots du procès-verbal',
  groups: [
    grp('Trois lignes de procès-verbal', [
      it(E(1309), 'le procès-verbal précédent'),
      it(E(1310), 'une résolution'),
      it(E(1328), 'le dernier point'),
    ], chk('Selon l’Office québécois : « Le procès-verbal de la dernière séance est … à l’unanimité. »', ['approuvé', 'adopté'], 0,
      'L’Office québécois réserve « approuver » au procès-verbal et « adopter » à l’ordre du jour. EN: approve the minutes.')),
    ctl('L’ordre du jour', 'Selon l’Office québécois : « L’ordre du jour est … tel que présenté. »', ['adopté', 'approuvé', 'résolu'], 0,
      'On adopte l’ordre du jour en début de séance. EN: adopt the agenda.'),
    ctl('Le document', 'La réunion d’équipe de lundi, sans vote ni résolution, demande...', ['un compte rendu', 'un procès-verbal signé', 'un sommaire de gestion'], 0,
      'Un document de travail suffit ; le procès-verbal a un caractère officiel. EN: a compte rendu.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['procesverbal', 'compterendu'],
};

const A9_VERSION = pourTonRapport('a9-version', 'Citer la décision du conseil', [
  grp('Deux renvois', [
    free('Les minutes du conseil disent qu’on peut faire l’essai.', 'The board’s minutes say the trial can go ahead.', 'un calque'),
    free('Par résolution du 26 mars, le conseil d’administration a autorisé l’essai d’avril à septembre.', 'By a resolution of 26 March, the board of directors authorised the trial from April to September.', 'un renvoi précis'),
  ], chk('Lequel sert le bilan de juin ?', ['le second', 'le premier'], 0,
    'La date, l’instance, la décision : le lecteur peut retrouver le procès-verbal. EN: date, body, decision.')),
  grp('Le mot juste', [
    it(E(1320), 'la règle'),
    it('fr.b2.connecteurs-logiques.2569', 'le geste de la présidente'),
  ], chk('Ton collègue écrit « les minutes de la séance ». Tu proposes...', ['le procès-verbal de la séance', 'les minutes officielles de la séance'], 0,
    '« Minutes » est un emprunt déconseillé ; « procès-verbal » est le mot. EN: procès-verbal.')),
], ['procesverbal', 'calque']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le caractère', 'Le procès-verbal se distingue du compte rendu surtout par...', ['son caractère officiel', 'sa longueur', 'son registre familier'], 0,
    'Selon l’Office québécois de la langue française. EN: its official character.'),
  ctl('Les verbes', 'Selon l’Office québécois, on approuve...', ['l’ordre du jour', 'le procès-verbal'], 1,
    'On adopte l’ordre du jour, on approuve le procès-verbal. EN: approve the minutes.'),
  ctl('En France', '« Un PV », dans la rue, c’est souvent...', ['une amende', 'une réunion', 'un rapport annuel'], 0,
    'Le procès-verbal d’un agent public. EN: a fine.'),
], ['procesverbal']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Le procès-verbal',
    opener: {
      line: 'Dans un an, quelqu’un voudra savoir ce qui a été décidé ce soir-là : le procès-verbal le dira. Ici tu écris le document officiel. EN: In a year, someone will want to know what was decided that evening: the procès-verbal will say. Here you write the official record.',
      imageRef: 'lessons/rapports-comptes-rendus/act09.jpg',
    },
    sections: [],
    milestone: 'Tu distingues le procès-verbal du compte rendu, tu adoptes un ordre du jour et tu approuves un procès-verbal, et tu sais ce que « PV » veut dire en France. EN: You tell the procès-verbal from the compte rendu and use adopter and approuver.',
    estScreens: 35, restPoints: ['a9-trois'],
  },
  sections: [A9_LECTURE, A9_TROIS, A9_ECOUTE, A9_TRIER, A9_VERSION, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — LE RELEVÉ DE DÉCISIONS ET LES MOTS DU BUREAU
 *
 *  TEXT: a colleague's corrections to a record of decisions. MOVE: the
 *  relevé keeps only decisions, owners, due dates; and the office
 *  anglicisms are replaced (deadline, implémenter, les minutes, varia;
 *  item from lesson 26 in B2, adresser from lesson 33 in B2).
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a10-lecture', layer: 'core', questionsInModal: true,
  title: 'Les retouches d’Aïcha', frSub: 'Un relevé de décisions, corrigé',
  text: RELEVE_TEXT,
  glossary: [
    { word: 'retouches', en: 'small corrections, touch-ups', note: 'Petites corrections apportées à un texte avant de le diffuser.' },
  ],
  questions: [
    { q: 'Devine le sens : « plusieurs mots viennent tout droit de l’anglais ». Que veut dire « tout droit » ici ?', a: 'Directement, sans transformation.' },
    { q: 'Pourquoi le document s’appelle-t-il « relevé de décisions » et non « procès-verbal » ?', a: 'Parce qu’il ne garde que ce qui a été décidé ; ce n’est ni un document officiel ni un compte rendu complet.' },
    { q: 'Par quoi Aïcha remplace-t-elle « deadline » et « implémenter » ?', a: '« Date limite » ou « échéance » ; « mettre en œuvre ».' },
    { q: 'Que dit-elle d’« adresser » ?', a: 'On traite, on aborde une question, on s’y attaque ; on adresse une lettre ou une facture.' },
    { q: 'Que contient chaque décision de la version corrigée ?', a: 'La décision, un responsable et une échéance.' },
    { q: 'Quel titre remplace « varia » ?', a: '« Questions diverses », comme le recommande l’Office québécois.' },
  ],
  audio: REC('rec-c1-11-releve'), say: REFRAME, terms: ['releve', 'calque'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a10-focus', layer: 'core', sheetId: 'sheet-mots',
  title: 'Le relevé, en quatre règles',
  points: [
    'Un relevé ne garde que les décisions : pas de débat, pas d’opinion. EN: decisions only.',
    'Chaque décision a un responsable et une échéance. EN: an owner and a due date for each.',
    'Les mots du bureau venus de l’anglais se remplacent : date limite, mettre en œuvre, point suivant. EN: replace the office anglicisms.',
    'Le dernier point s’intitule « questions diverses », pas « varia ». EN: questions diverses, not varia.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['releve', 'calque'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a10-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre mots venus de l’anglais',
  errors: [
    { wrong: 'Deadline : 30 avril.', right: 'Échéance : 30 avril.',
      why: 'On l’entend partout au bureau ; l’Office le déconseille, et le français a date limite, échéance, date butoir. EN: an advised-against borrowing.' },
    { wrong: 'Implémenter la précommande en avril.', right: 'Mettre en œuvre la précommande en avril.',
      why: 'Le mot vient de l’informatique, où il désigne la réalisation d’un système. Pour une mesure, un rapport soigné écrit « mettre en œuvre ». EN: a computing word; « mettre en œuvre » for a measure.' },
    { wrong: 'Minutes de la rencontre du 18 mars', right: 'Relevé de décisions de la réunion du 18 mars',
      why: 'C’est l’anglais « minutes » ; l’Office déconseille cet emprunt. Choisis le document que tu écris vraiment. EN: name the real document.' },
    { wrong: 'Varia : aucune.', right: src(E(1328)).fr,
      why: 'Courant dans les réunions au Québec, « varia » est, dans ce sens, un emprunt à l’anglais que l’Office déconseille (le mot désigne en français un recueil de textes variés). EN: questions diverses or divers.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['calque', 'releve'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a10-piege', layer: 'core', swipe: true,
  title: 'Six mots à reprendre',
  rule: {
    title: 'Traduis le bureau',
    body: `${Cap(REUNION_REF)} et ${CALQUES_REF} t’ont mis en garde contre « prochain item » et « adresser un problème ». Les documents de travail en attirent d’autres ; un rapport soigné les remplace. EN: Office calques are understood, but a careful document replaces them.`,
  },
  cards: [
    { promptLabel: 'deadline', promptSound: 'La deadline est fixée au 30 avril.',
      fr: src(E(1322)).fr, ipa: ipaOf(E(1322)),
      tip: 'Date limite, échéance, date butoir. EN: date limite.' },
    { promptLabel: 'implémenter', promptSound: 'La mesure sera implémentée dès le mois prochain.',
      fr: src(E(1324)).fr, ipa: ipaOf(E(1324)),
      tip: 'Une mesure se met en œuvre. EN: mettre en œuvre.' },
    { promptLabel: 'item', promptSound: 'Le prochain item porte sur les horaires.',
      fr: src(E(1326)).fr, ipa: ipaOf(E(1326)),
      tip: `Le point suivant, comme l’a montré ${REUNION_REF}. EN: le point suivant.` },
    { promptLabel: 'adresser', promptSound: 'Le comité adressera la question du gaspillage en mai.',
      fr: src(E(1327)).fr, ipa: ipaOf(E(1327)),
      tip: 'On traite une question ; on adresse une lettre. EN: traiter une question.' },
    { promptLabel: 'varia', promptSound: 'Varia : aucune.',
      fr: src(E(1328)).fr, ipa: ipaOf(E(1328)),
      tip: 'Questions diverses, ou divers. EN: questions diverses.' },
    { promptLabel: 'les minutes', promptSound: 'Les minutes seront envoyées demain.',
      fr: 'Le procès-verbal sera envoyé demain.', ipa: '/lə pʁɔ.sɛ.vɛʁ.bal sə.ʁa ɑ̃.vwa.je də.mɛ̃/',
      tip: 'Procès-verbal, ou compte rendu selon le document. EN: procès-verbal.' },
  ],
  drill: [
    { promptSay: 'La … est fixée au 30 avril.', opts: ['date limite', 'deadline'], correct: 0 },
    { promptSay: 'La mesure sera … dès le mois prochain.', opts: ['mise en œuvre', 'implémentée'], correct: 0 },
    { promptSay: 'Le … suivant porte sur les horaires.', opts: ['point', 'item'], correct: 0 },
    { promptSay: 'Le comité … la question du gaspillage en mai.', opts: ['traitera', 'adressera'], correct: 0 },
    { promptSay: '… : aucune.', opts: ['Questions diverses', 'Varia'], correct: 0 },
    { promptSay: 'Le … sera envoyé demain.', opts: ['procès-verbal', 'minutes'], correct: 0 },
    { promptSay: 'Nous vous … la facture par courriel.', opts: ['adresserons', 'traiterons'], correct: 0 },
    { promptSay: 'Chaque décision a un responsable et une … .', opts: ['échéance', 'deadline'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Traduis le bureau' },
    { label: 'Six cartes', kind: 'cards', title: 'Six mots du bureau' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases soignées' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-11-piege-calques'), say: REFRAME, terms: ['calque'],
};

const A10_VERSION = pourTonRapport('a10-version', 'Les échéances de ton rapport', [
  grp('Deux lignes de suivi', [
    free('Deadline pour implémenter la précommande : fin mars.', 'Deadline to implement pre-ordering: end of March.', 'deux calques'),
    free('Mise en œuvre de la précommande : responsable, le gérant ; échéance, 1er avril.', 'Implementation of pre-ordering: owner, the manager; due date, 1 April.', 'une ligne soignée'),
  ], chk('Laquelle sert ton rapport ?', ['la seconde', 'la première'], 0,
    'Les mots français, un responsable, une date précise. EN: French terms, an owner, a precise date.')),
  grp('Adresser, quand c’est juste', [
    it('fr.b2.langue-soignee.1817', 'le bon emploi'),
    it(E(1327), 'pour une question'),
  ], chk('Ton rapport doit « … la question du prix » en juin.', ['traiter', 'adresser'], 0,
    'On traite une question ; on adresse une facture, une lettre. EN: traiter.')),
], ['calque', 'releve']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le relevé', 'Un relevé de décisions garde...', ['les décisions, leurs responsables et leurs échéances', 'toutes les interventions', 'l’ordre du jour seulement'], 0,
    'Rien d’autre. EN: decisions, owners, due dates.'),
  ctl('Deadline', 'Dans un rapport soigné, « deadline » devient...', ['« date limite »', '« ligne morte »'], 0,
    'Ou échéance, ou date butoir. EN: date limite.'),
  ctl('Varia', 'Au Québec, l’Office recommande, à la place de « varia »...', ['« questions diverses »', '« items divers »', '« autres minutes »'], 0,
    'Ou « divers ». EN: questions diverses.'),
], ['calque', 'releve']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Le relevé de décisions',
    opener: {
      line: 'Qui fait quoi, et pour quand : le relevé ne garde que cela, avec les mots justes. Ici tu chasses les mots du bureau venus de l’anglais. EN: Who does what, and by when: the record keeps only that, in the right words. Here you hunt down the office anglicisms.',
      imageRef: 'lessons/rapports-comptes-rendus/act10.jpg',
    },
    sections: [],
    milestone: 'Tu écris un relevé de décisions et tu remplaces deadline, implémenter, les minutes et varia par leurs équivalents français. EN: You write a record of decisions and replace the office anglicisms.',
    estScreens: 34, restPoints: ['a10-erreurs'],
  },
  sections: [A10_LECTURE, A10_FOCUS, A10_ERREURS, A10_PIEGE, A10_VERSION, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — RELIRE EN RAPPORTEUR
 *
 *  TEXT: the director's rereading notes. MOVE: neutral words, the impersonal
 *  voice and the report's « nous », claims as strong as the evidence (lesson
 *  22 in B2, applied), one figure everywhere, every annex cited, the scope.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a11-lecture', layer: 'core', questionsInModal: true,
  title: 'Les notes de relecture', frSub: 'Avant l’envoi au conseil',
  text: RELECTURE_TEXT,
  glossary: [
    { word: 'périmètre', en: 'scope', note: 'Ici, ce que le rapport couvre, et ce qu’il ne couvre pas.' },
  ],
  questions: [
    { q: 'Devine le sens : « Ne forcez pas non plus vos conclusions ». Que veut dire « forcer » ici ?', a: 'Exagérer : dire plus que ce que les faits permettent.' },
    { q: 'Pourquoi « le gérant a été dépassé par les événements » est-il à reprendre ?', a: 'C’est un jugement, injuste, que les données ne montrent pas ; le fait est qu’il n’a pas été consulté.' },
    { q: 'Quelles tournures Martine propose-t-elle à la place de « je pense » ?', a: '« Il apparaît que », « les résultats suggèrent », et « nous recommandons » pour une recommandation.' },
    { q: 'Quelle conclusion est forcée, et comment la corriger ?', a: '« Les prix n’ont joué aucun rôle » ; les chiffres montrent seulement qu’ils ne sont pas la cause principale.' },
    { q: 'Quelle incohérence de chiffres relève-t-elle ?', a: 'Le déficit vaut 38 000 $ page 2 et 36 000 $ dans la synthèse.' },
    { q: 'Que demande-t-elle de préciser dès l’introduction, et pourquoi ?', a: 'Que le rapport ne porte que sur le site de Sherbrooke, parce que le site de Lyon a sa propre cantine et ses chiffres.' },
  ],
  audio: REC('rec-c1-11-relecture'), say: REFRAME, terms: ['impersonnel'],
};

const A11_DEUX: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a11-deux', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-mots',
  title: 'La voix du rapport', frSub: 'Neutre, impersonnelle, mesurée',
  hint: 'Quatre cartes. Écoute qui parle dans chaque phrase.',
  audio: AUDIO, say: REFRAME, terms: ['impersonnel'],
  cards: [
    { head: 'Neutre ou chargé', label: 'le mot', fr: src(E(1344)).fr, sub: rsOf(E(1344)),
      body: '« Dépassé », « boude », « gaspille énormément » jugent. Le mot neutre décrit ce qu’on peut vérifier. EN: neutral words describe.' },
    { head: 'L’impersonnel', label: 'il apparaît que', fr: src(E(1338)).fr, sub: rsOf(E(1338)),
      body: 'Le constat et l’analyse parlent au nom du service : « il apparaît que », « on constate ». EN: impersonal turns for findings and analysis.' },
    { head: 'Mesuré', label: `rappel : ${ACADEMIQUE_REF}`, fr: src(E(1339)).fr, sub: rsOf(E(1339)),
      body: 'Jamais plus sûr que tes preuves : « suggèrent » quand les données indiquent sans démontrer. EN: never surer than your evidence.' },
    { head: 'Le nous du rapport', label: 'pour recommander', fr: src(E(1342)).fr, sub: rsOf(E(1342)),
      body: 'Pour recommander, « nous » : il engage le service, pas la personne qui écrit. EN: « nous » speaks for the department.' },
  ],
};

const A11_HACKS: Sec<'hacks'> = {
  type: 'hacks', id: 'a11-hacks', layer: 'core', title: 'Trois astuces de relecteur',
  hacks: [
    { hack: 'Relis une fois pour les chiffres seulement : chaque chiffre de la synthèse doit se retrouver, identique, dans le rapport.',
      why: 'Un seul écart et le lecteur doute de tout le reste. EN: one discrepancy and the reader doubts everything.' },
    { hack: 'Cherche le mot « annexe » dans ton texte : chaque annexe doit y être citée au moins une fois.',
      why: 'Une annexe non citée n’est jamais ouverte. EN: an uncited appendix is never opened.' },
    { hack: 'Lis le rapport à voix haute comme si tu ne savais rien du dossier.',
      why: 'C’est le test du lecteur absent : ce qui te semble évident ne l’est pas pour lui. EN: the absent-reader test.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['impersonnel', 'lecteur'],
};

const A11_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-trier', layer: 'core', size: 'lg',
  title: 'Neutre ou chargé', frSub: 'De nouvelles phrases',
  groups: [
    grp('Trois phrases neutres', [
      it(E(1341), 'un fait vérifiable'),
      it(E(1346), 'le périmètre'),
      it(E(1347), 'une limite reconnue'),
    ], chk('Ces trois phrases...', ['décrivent sans juger', 'expriment l’avis du rédacteur'], 0,
      'Des faits, un périmètre, une réserve : rien qui juge. EN: describe, do not judge.')),
    ctl('Le mot chargé', '« Le service des finances traîne sur ce dossier. » Que corriges-tu ?', ['« traîne », qui juge', 'le sujet de la phrase'], 0,
      'Le fait vérifiable : « le dossier est en cours d’évaluation depuis mars ». EN: « traîne » judges.'),
    ctl('La force', 'Les données montrent un lien, sans prouver la cause. Tu écris...', ['« les résultats suggèrent un lien »', '« il est certain que c’est la cause »'], 0,
      'Jamais plus sûr que tes preuves. EN: suggest, do not assert.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['impersonnel'],
};

const A11_VERSION = pourTonRapport('a11-version', 'Ta dernière relecture', [
  grp('Deux phrases sur le gérant', [
    free('Le gérant a été dépassé par les événements et n’a rien vu venir.', 'The manager was overwhelmed by events and saw nothing coming.', 'un jugement'),
    free('Le gérant n’a pas été consulté sur les nouveaux horaires ; la cantine n’a donc pas pu s’adapter à temps.', 'The manager was not consulted about the new hours; so the canteen could not adapt in time.', 'un fait et sa conséquence'),
  ], chk('Laquelle garde-t-on ?', ['la seconde', 'la première'], 0,
    'Le fait, puis sa conséquence : personne n’est accusé, tout se vérifie. EN: the fact and its consequence.')),
  grp('La vérification finale', [
    it(E(1345), 'la règle'),
    it(E(1337), 'les chiffres'),
  ], chk('La synthèse dit 36 000 $, le constat 38 000 $, l’annexe 38 000 $. Tu...', ['corriges la synthèse : 38 000 $', 'gardes les deux, ce sont des arrondis'], 0,
    'Un seul chiffre partout, celui de la source. EN: one figure everywhere.')),
], ['impersonnel']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le mot', '« Dépassé par les événements » est...', ['un mot chargé', 'un mot neutre'], 0,
    'Il juge la personne. EN: loaded.'),
  ctl('La voix', 'Dans un constat, à la place de « je pense que », tu écris...', ['« il apparaît que »', '« moi, je trouve que »', '« franchement »'], 0,
    'L’impersonnel parle au nom du service. EN: impersonal.'),
  ctl('Les annexes', 'Une annexe qui n’est citée nulle part...', ['n’est jamais ouverte', 'est plus lue que les autres'], 0,
    'Cite chacune dans le texte. EN: cite each one.'),
], ['impersonnel']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Relire en rapporteur',
    opener: {
      line: 'Une dernière lecture, avec les yeux de celui qui n’était pas là : ici tu chasses les mots qui jugent et les chiffres qui se contredisent. EN: One last reading, through the eyes of someone who was not there: here you hunt down judging words and figures that contradict each other.',
      imageRef: 'lessons/rapports-comptes-rendus/act11.jpg',
    },
    sections: [],
    milestone: 'Tu relis en rapporteur : des mots neutres, une voix impersonnelle, des conclusions mesurées, un seul chiffre partout. EN: You reread as a rapporteur: neutral words, an impersonal voice, measured claims, one figure everywhere.',
    estScreens: 32, restPoints: ['a11-deux'],
  },
  sections: [A11_LECTURE, A11_DEUX, A11_HACKS, A11_TRIER, A11_VERSION, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TON RAPPORT
 *
 *  The production act. The canteen report as sent is the model; the plan,
 *  a role play with Martine Pelletier, then the graded task on another
 *  case: the Lyon shuttle, from a fact sheet printed in the brief (no
 *  `source` field on `task`).
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_MODELE: Sec<'reading'> = {
  type: 'reading', id: 'a12-modele', layer: 'core', questionsInModal: true,
  title: 'Le rapport, tel qu’il est parti', frSub: 'Un modèle complet',
  text: MODELE_TEXT,
  glossary: [
    { word: 'indicateurs', en: 'indicators, metrics', note: 'Des mesures chiffrées choisies pour suivre un résultat.' },
  ],
  questions: [
    { q: 'Devine le sens : « affiche un déficit de 38 000 $ ». Que veut dire « afficher » ici ?', a: 'Présenter, montrer dans ses comptes.' },
    { q: 'Que dit la synthèse, en trois phrases ?', a: 'Le problème chiffré, la cause principale (le décalage d’horaires) et la recommandation (un essai de six mois avec un bilan).' },
    { q: 'Chaque chiffre du constat a-t-il sa source ?', a: 'Oui : le registre des caisses, les relevés de la cuisine, l’enquête interne (150 répondants).' },
    { q: 'Comment l’analyse passe-t-elle des causes au choix ?', a: 'Elle classe les causes, puis compare les trois options sur quatre critères et retient celle qui répond à la cause principale.' },
    { q: 'Quelles tournures de recommandation reconnais-tu ?', a: '« Nous recommandons » (synthèse), « nous préconisons de », « il est recommandé que + subjonctif ».' },
    { q: 'Les chiffres de la synthèse et du constat sont-ils les mêmes ?', a: 'Oui : soixante-dix repas, cent dix l’an dernier, 38 000 $.' },
  ],
  audio: REC('rec-c1-11-modele'), say: REFRAME, terms: ['synthese', 'lecteur'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-architecture',
  title: 'Cinq étapes pour ton rapport',
  steps: [
    '1. Lis la fiche et classe chaque fait : constat, cause possible, contrainte. EN: sort the facts first.',
    '2. Écris l’objet, puis le constat, chaque chiffre avec sa source. EN: purpose, then sourced findings.',
    '3. Analyse : la cause principale, puis les options comparées sur les mêmes critères. EN: the main cause, then the options on the same criteria.',
    '4. Recommande : qui, quoi, pour quand, avec le bon mode. N’invente aucun chiffre. EN: who, what, when; invent no figure.',
    '5. Écris la synthèse en dernier, place-la en tête, puis relis en rapporteur. EN: summary last, placed first; then reread.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['synthese', 'constat'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', title: 'Où tu écriras un rapport',
  cases: [
    { situation: 'Ta responsable te confie un dossier qui coûte trop cher', fr: src(E(1357)).fr, en: src(E(1357)).en },
    { situation: 'Tu dois faire tenir une décision sur une page', fr: src(E(1348)).fr, en: src(E(1348)).en },
    { situation: 'On te donne des chiffres que tu n’as pas mesurés', fr: src(E(1352)).fr, en: src(E(1352)).en },
    { situation: 'Ton document sera lu dans un autre service', fr: src(E(1356)).fr, en: src(E(1356)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['lecteur'],
};

/** USE IT, out loud. Every French string here uses the typographic ’ and
 *  no seed row is quoted (scenario.logic: no mixed apostrophes). */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core', title: 'Martine Pelletier te confie la navette',
  setting: 'Une semaine après le conseil, dans le bureau de Martine Pelletier. Elle te confie un nouveau dossier, celui de la navette du site de Lyon, et te demande comment tu comptes t’y prendre.',
  turns: [
    {
      ai: 'Par où allez-vous commencer, cette fois ?', en: 'Where will you start this time?',
      user: src(E(1348)).fr, userEn: 'I start with the summary, in three sentences. (The summary first, written last.)',
      alts: [
        { fr: 'Par la synthèse, que j’écrirai en dernier et que je placerai en tête.', en: 'With the summary, which I will write last and put first.' },
        { fr: 'Par ce que vous devez décider, en une page au plus.', en: 'With what you have to decide, in one page at most.' },
      ],
    },
    {
      ai: 'Le chauffeur dit que la navette est vide. Vous l’écrivez tel quel ?', en: 'The driver says the shuttle is empty. Will you write that as is?',
      user: src(E(1349)).fr, userEn: 'I keep the findings apart from the analysis. (Sourced figures, not an impression.)',
      alts: [
        { fr: 'Non : j’écris ses relevés, neuf personnes le matin, avec leur source.', en: 'No: I write his counts, nine people in the morning, with their source.' },
        { fr: 'J’écris ce qu’il a compté, pas l’impression qu’il en garde.', en: 'I write what he counted, not the impression he has of it.' },
      ],
    },
    {
      ai: 'Et si je vous demande de la supprimer tout de suite ?', en: 'And if I ask you to scrap it straight away?',
      user: src(E(1350)).fr, userEn: 'I compare the options on the same criteria. (Options and criteria before the choice.)',
      alts: [
        { fr: 'Je comparerai la suppression aux autres options, au regard du coût et du service rendu.', en: 'I will compare scrapping it with the other options, in the light of cost and service.' },
        { fr: 'C’est une option parmi d’autres ; je vous dirai pourquoi je la retiens ou je l’écarte.', en: 'It is one option among others; I will tell you why I keep or rule it out.' },
      ],
    },
    {
      ai: 'Vous me direz ce que vous en pensez ?', en: 'Will you tell me what you think?',
      user: src(E(1351)).fr, userEn: 'I keep my recommendations for the end. (Your voice, in its own part.)',
      alts: [
        { fr: 'Oui, dans les recommandations, et nulle part ailleurs.', en: 'Yes, in the recommendations, and nowhere else.' },
        { fr: src(E(1354)).fr, en: src(E(1354)).en },
      ],
    },
    {
      ai: 'Il manque le coût par voyageur. Vous pouvez l’estimer ?', en: 'The cost per passenger is missing. Can you estimate it?',
      user: src(E(1352)).fr, userEn: 'I invent no figures: I take the ones in the fact sheet. (Nothing that cannot be checked.)',
      alts: [
        { fr: 'Je le signalerai comme un point à vérifier, sans inventer de chiffre.', en: 'I will flag it as a point to check, without inventing a figure.' },
        { fr: 'Je m’en tiens aux chiffres de la fiche ; le reste ira en annexe s’il existe.', en: 'I stick to the figures in the sheet; anything else goes in an appendix if it exists.' },
      ],
    },
    {
      ai: 'Et le détail des coûts, où le mettez-vous ?', en: 'And the cost breakdown, where will you put it?',
      user: src(E(1355)).fr, userEn: 'The breakdown of costs is in the appendix. (Detail to the appendices, cited in the text.)',
      alts: [
        { fr: 'En annexe, et je la cite dans le constat.', en: 'In an appendix, and I cite it in the findings.' },
        { fr: 'Dans une annexe que le texte mentionne, pour que la synthèse reste courte.', en: 'In an appendix the text mentions, so the summary stays short.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['lecteur', 'synthese'],
};

/** THE GRADED TASK: a short C1 report from a fact sheet, graded on the
 *  summary, the architecture, the sourced constat, the case analysis, the
 *  recommendations and the language. */
const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission', title: 'Le rapport sur la navette', frSub: 'Mission écrite',
  brief: `La direction du site de Lyon des Ateliers Corvelle te demande un court rapport sur la navette du personnel, avec une recommandation. Voici la fiche de faits que tu as reçue. ${NAVETTE_FICHE}`,
  briefEn: 'The management of the Lyon site of the Ateliers Corvelle asks you for a short report on the staff shuttle, with a recommendation. The fact sheet you received is printed here so you can write with it in front of you; every figure in it is invented for the exercise.',
  produce: 'Écris un rapport de 250 à 400 mots : une synthèse en tête, l’objet, un constat dont chaque chiffre a sa source, une analyse (la cause principale, au moins deux options comparées sur les mêmes critères, l’option retenue) et des recommandations qui disent qui fait quoi et pour quand. N’invente aucun chiffre.',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 400 },
  rubric: {
    criteria: [
      { key: 'synthese', label: 'Une synthèse qui tient seule', maxPoints: 3, descriptors: [
        '3 : En tête du rapport, en quelques phrases, elle donne le problème chiffré, sa cause principale et la recommandation ; elle résume, elle n’annonce pas.',
        '2 : Elle est en tête mais oublie la cause ou la recommandation, ou elle annonce le plan au lieu de résumer.',
        '1 : Pas de synthèse, ou une conclusion placée à la fin seulement.',
      ] },
      { key: 'architecture', label: 'L’architecture du rapport', maxPoints: 3, descriptors: [
        '3 : Les parties se suivent (objet, constat, analyse, recommandations, annexe si besoin) et chacune reste dans son rôle : aucune recommandation dans le constat.',
        '2 : Les parties existent, mais l’une déborde sur l’autre (une cause dans le constat, une opinion dans l’analyse).',
        '1 : Le texte suit l’ordre de la fiche ou un récit, sans parties.',
      ] },
      { key: 'constat', label: 'Un constat sourcé et fidèle', maxPoints: 3, descriptors: [
        '3 : Les faits utiles de la fiche sont là, chacun avec sa source (relevés du chauffeur, enquête interne, contrat), et aucun chiffre n’est inventé ou modifié.',
        '2 : Un chiffre sans source, ou un fait utile oublié.',
        '1 : Plusieurs chiffres inventés, modifiés ou présentés comme des impressions.',
      ] },
      { key: 'analyse', label: 'L’analyse du cas', maxPoints: 4, descriptors: [
        '4 : La cause principale est nommée et prouvée par le constat ; au moins deux options sont comparées sur les mêmes critères annoncés ; l’option retenue est justifiée, son point faible reconnu.',
        '3 : Cause et options sont présentes, mais les critères changent d’une option à l’autre ou le point faible est passé sous silence.',
        '2 : Une seule option, ou une liste de causes sans classement.',
        '1 : Pas d’analyse : le texte passe des faits à l’avis.',
      ] },
      { key: 'recommandations', label: 'Des recommandations bien dosées', maxPoints: 4, descriptors: [
        '4 : Les recommandations disent qui fait quoi et pour quand (en tenant compte du préavis de trois mois), dans le registre du rapport (nous préconisons, il conviendrait de, il est recommandé que + subjonctif), avec un suivi prévu.',
        '3 : Recommandations claires, mais sans responsable ou sans échéance, ou un mode mal choisi.',
        '2 : Une recommandation vague (« il faudrait faire quelque chose ») ou un ordre (« il faut absolument »).',
        '1 : Aucune recommandation.',
      ] },
      { key: 'langue', label: 'Une langue de rapport précise', maxPoints: 3, descriptors: [
        '3 : Une voix impersonnelle (il apparaît que, on constate, nous pour recommander), des mots neutres, aucun calque de bureau (deadline, implémenter, item, adresser une question), presque aucune erreur.',
        '2 : Un « je pense » ou un mot chargé, un calque, ou quelques erreurs qui ne gênent pas.',
        '1 : Un registre de conversation ou des erreurs fréquentes qui gênent la lecture.',
      ] },
    ],
  },
  scaffold: [
    'Objet : …',
    'Synthèse. …',
    'Selon les relevés du chauffeur, …',
    'Il ressort de l’enquête interne que…',
    'La cause principale tient à…',
    'Au regard du coût, …',
    'Nous préconisons de…',
    'Il est recommandé que…',
  ],
  modelAnswer: 'Objet : l’avenir de la navette du personnel du site de Lyon. Synthèse. La navette privée coûte 48 000 € par an, mais elle transporte peu de monde le matin et presque personne le midi ; seul le trajet du soir est bien utilisé. Ses horaires ne correspondent pas à ceux de l’équipe du matin. Nous recommandons de supprimer le trajet du midi, de garder celui du soir et d’avancer celui du matin, à partir du 1er septembre. Constat. Selon les relevés du chauffeur en février, la navette de 30 places transporte en moyenne 9 personnes le matin, 2 le midi et 24 le soir. Il ressort de l’enquête interne (70 répondants) que 41 salariés viennent en voiture ; 18 prendraient la navette si elle les déposait au site avant 6 h 30, et 12 jugent indispensable celle du soir. Une ligne de bus régulière passe à 400 mètres du site toutes les 20 minutes, de 7 h à 19 h. Analyse. La faible fréquentation du matin tient avant tout à l’horaire : la navette part de la gare à 7 h 15, alors que l’équipe du matin commence à 6 h 30, avant le premier bus. Le trajet du midi fait double emploi avec la ligne de bus. Trois options ont été comparées au regard du coût et du service rendu aux équipes. La suppression complète est la moins coûteuse, mais elle priverait de transport les salariés du soir. Le maintien en l’état ne règle rien. L’adaptation des horaires supprime un trajet peu utile et répond à la demande de l’équipe du matin ; son coût reste à négocier avec le transporteur. C’est l’option retenue. Recommandations. Nous préconisons que la direction du site renégocie le contrat avant le 1er juin, compte tenu du préavis de trois mois. Il est recommandé que la navette du matin dépose les salariés au site avant 6 h 30 et que le trajet du midi soit supprimé. Il conviendrait de mesurer la fréquentation en octobre et de présenter un bilan en novembre. Annexe : relevés de fréquentation et résultats de l’enquête.',
  modelAnswerEn: 'Subject: the future of the staff shuttle at the Lyon site. Summary. The private shuttle costs €48,000 a year, but it carries few people in the morning and almost nobody at midday; only the evening run is well used. Its times do not match those of the morning team. We recommend scrapping the midday run, keeping the evening one and bringing the morning one forward, from 1 September. Findings. According to the driver’s counts in February, the 30-seat shuttle carries on average 9 people in the morning, 2 at midday and 24 in the evening. The internal survey (70 respondents) shows that 41 employees come by car; 18 would take the shuttle if it dropped them at the site before 6:30, and 12 consider the evening one essential. A regular bus line passes 400 metres from the site every 20 minutes, from 7:00 to 19:00. Analysis. Low morning use is above all due to the timetable: the shuttle leaves the station at 7:15, whereas the morning team starts at 6:30, before the first bus. The midday run duplicates the bus line. Three options were compared in the light of cost and the service provided to the teams. Scrapping it altogether is the cheapest, but it would leave evening staff without transport. Keeping it as it is solves nothing. Adapting the times removes a little-used run and meets the morning team’s needs; its cost remains to be negotiated with the carrier. This is the option chosen. Recommendations. We recommend that site management renegotiate the contract before 1 June, given the three months’ notice. It is recommended that the morning shuttle drop staff at the site before 6:30 and that the midday run be scrapped. It would be advisable to measure use in October and present a review in November. Appendix: usage counts and survey results.',
  watchFor: [
    { pattern: 'No summary at the head of the report, or a summary that announces the plan (« ce rapport va présenter… ») instead of giving the problem, the cause and the recommendation.', criterion: 'synthese', feedback: 'Ta synthèse doit déjà répondre : le problème chiffré, sa cause principale, ce que tu recommandes.', ref: 'a7-erreurs' },
    { pattern: 'The report follows the order of the fact sheet, or tells a story, instead of being laid out in parts.', criterion: 'architecture', feedback: 'Range tes faits : objet, constat, analyse, recommandations. Le lecteur cherche la décision, pas l’ordre de la fiche.', ref: 'a2-parties' },
    { pattern: 'A recommendation or a cause placed in the constat (« la navette est inutile, il faut la supprimer »).', criterion: 'architecture', feedback: 'Le constat décrit ; garde la cause pour l’analyse et la proposition pour les recommandations.', ref: 'a2-erreurs' },
    { pattern: 'Figures given without their source, or figures changed, rounded or invented (a cost per passenger, a saving in euros, a new survey).', criterion: 'constat', feedback: 'Chaque chiffre vient de la fiche, avec sa source ; s’il te manque un chiffre, signale-le comme un point à vérifier.', ref: 'a3-piege' },
    { pattern: 'An impression stated as a fact (« personne ne prend la navette », « les salariés boudent la navette »).', criterion: 'constat', feedback: 'Donne le chiffre : 9 personnes le matin, 2 le midi, selon les relevés du chauffeur.', ref: 'a3-trier' },
    { pattern: 'The symptom given as the cause (« la navette est vide parce que les gens ne la prennent pas »), or causes listed without a main one.', criterion: 'analyse', feedback: 'Remonte à la cause : l’horaire du matin ne correspond pas à celui de l’équipe, et le bus double le trajet du midi.', ref: 'a4-classer' },
    { pattern: 'Only one option considered, or options judged on different criteria, or the chosen option presented as perfect.', criterion: 'analyse', feedback: 'Compare au moins deux options sur les mêmes critères, puis dis ce que coûte l’option retenue.', ref: 'a5-erreurs' },
    { pattern: '« il est recommandé que » or « nous préconisons que » followed by the indicative; « il conviendrait que » + infinitive.', criterion: 'recommandations', feedback: 'Après « il est recommandé que », le subjonctif (soit, puisse, dépose) ; après « il conviendrait de », l’infinitif.', ref: 'a6-piege' },
    { pattern: 'Recommendations with no owner, no date, or no account of the three months’ notice; or an order (« il faut absolument »).', criterion: 'recommandations', feedback: 'Qui, quoi, pour quand : le contrat se renouvelle le 1er septembre avec un préavis de trois mois.', ref: 'a6-echelle' },
    { pattern: 'Office anglicisms: deadline, implémenter, item, adresser une question, minutes.', criterion: 'langue', feedback: 'Date limite ou échéance, mettre en œuvre, point, traiter une question, procès-verbal.', ref: 'a10-erreurs' },
    { pattern: '« je pense », « à mon avis » or loaded words (inutile, gaspillage d’argent, ridicule) in the constat or the analysis.', criterion: 'langue', feedback: 'Il apparaît que, on constate, les résultats suggèrent ; et des mots qui décrivent sans juger.', ref: 'a11-deux' },
    { pattern: 'The summary and the body give different figures.', criterion: 'constat', feedback: 'Un seul chiffre partout, celui de la fiche.', ref: 'a11-hacks' },
  ],
  graderNotes: [
    'Word count: 250 to 400, with 10% tolerance (225 to 440) before a criterion loses points for length. The title and the word « Objet » do not count.',
    'Any recommendation is acceptable if it follows from the facts and the criteria: scrapping only the midday run, adapting the morning time, replacing the shuttle by a reimbursed transit pass, or scrapping it entirely with a plan for the evening staff. Grade the reasoning, never the choice.',
    'Fidelity: the facts are the fact sheet’s (120 employees; 30 seats; 3 runs at 7 h 15, 12 h 30, 17 h 30; 48 000 € a year; 9 / 2 / 24 passengers in February; 70 respondents, 41 by car, 18 would come before 6 h 30, 12 find the evening run essential; bus every 20 minutes, 7 h to 19 h, 400 m away; renewal on 1 September, three months’ notice). A proposal may go beyond the sheet (a new time, a review date); a new FACT may not (a cost per passenger, an amount saved, a bus fare). A computed figure that follows directly from the sheet (for example 11 passengers out of 90 seats over the morning and midday runs) is acceptable if it is correct.',
    'Headings: the learner may use titled parts (Synthèse, Constat…) or paragraphs that do the same job; do not require the six parts by name. Annexes are optional in a 400-word report.',
    'Moods: mark the indicative after « il est recommandé que », « nous préconisons que », « il faut que » under « recommandations ». « Nous recommandons de + infinitif » and « il conviendrait de + infinitif » are correct.',
    'Norms: « deadline », « implémenter », « item » (for a point), « adresser une question » and « minutes » are register faults in this document, not grammar errors; count them under « langue » only, one point at most in total. « Mettre en place » and « mettre en œuvre » are both correct.',
    'Reporting a survey: « selon l’enquête », « d’après l’enquête », « il ressort de l’enquête que », « l’enquête montre que » are all accepted.',
    'Do not mark persuasion figures (lesson 8 in C1), plan transitions between paragraphs, or nominalisation choices (lesson 10 in B2) as such.',
    'Accept European and Québec usage alike (« autobus » or « bus », « courriel » or « mail » in passing).',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['synthese', 'constat', 'preconiser'],
};

const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core', title: 'Dis les gestes du rapport à voix haute', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['lecteur'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-mots',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la synthèse', v: 'le problème, la cause, la recommandation, en tête', say: src(E(1284)).fr,
      detail: { title: 'Écrite en dernier, lue en premier', body: 'Elle résume, elle n’annonce pas. Au Québec : sommaire de gestion. EN: written last, read first.', say: src(E(1286)).fr } },
    { k: 'le constat', v: 'des faits, chacun avec sa source', say: src(E(1227)).fr,
      detail: { title: 'Ce qui se vérifie', body: 'Selon, d’après, il ressort de ; une impression signalée comme telle. EN: sourced facts.', say: src(E(1225)).fr } },
    { k: 'l’analyse', v: 'la cause principale, puis les facteurs aggravants', say: src(E(1239)).fr,
      detail: { title: 'Du symptôme aux causes', body: 'Le symptôme n’explique rien ; les causes se classent. EN: rank the causes.', say: src(E(1240)).fr } },
    { k: 'les options', v: 'les mêmes critères pour toutes, un choix justifié', say: src(E(1258)).fr,
      detail: { title: 'Peser, écarter, retenir', body: 'Au regard de, présenter l’avantage de, faute de, l’option retenue. EN: same criteria, a justified choice.', say: src(E(1260)).fr } },
    { k: 'recommander', v: 'nous préconisons, il est recommandé que + subjonctif', say: src(E(1268)).fr,
      detail: { title: 'Qui, quoi, pour quand', body: 'Il conviendrait de, il y aurait lieu de + infinitif ; jamais un ordre. EN: who, what, when.', say: src(E(1269)).fr } },
    { k: 'la réunion', v: 'compte rendu, procès-verbal, relevé de décisions', say: src(E(1290)).fr,
      detail: { title: 'Trois documents, sans ton avis', body: 'Au présent ; on adopte l’ordre du jour, on approuve le procès-verbal. Ni minutes, ni varia, ni deadline. EN: present tense, no opinion, no office calques.', say: src(E(1311)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['synthese', 'calque'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu n’écris plus dans l’ordre de ta semaine, mais pour un lecteur absent qui doit décider. Tu ranges un rapport en parties, tu donnes à chaque chiffre sa source, tu remontes du symptôme aux causes, tu compares des options sur les mêmes critères et tu recommandes avec la bonne force et le bon mode. Tu places la synthèse en tête. Tu sais rendre compte d’une réunion sans juger, distinguer le compte rendu du procès-verbal et du relevé de décisions, et remplacer les mots du bureau venus de l’anglais. Le piège qui reste : glisser ton avis dans les faits. Avant d’envoyer ton prochain document, relis seulement le constat et barre chaque mot qui juge. EN: Before sending your next document, reread only the findings and strike out every judging word.',
  stats: [
    { k: 'Le rapport', v: 'synthèse, constat, analyse, recommandations' },
    { k: 'L’analyse de cas', v: 'causes classées, options, critères' },
    { k: 'La réunion', v: 'compte rendu, procès-verbal, relevé' },
    { k: 'La langue', v: 'impersonnelle, neutre, sans calque' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 1 to 11, each
 *  targeting a distinct errorTrigger. Typed answers accept the natural
 *  variants (fold() compares the WHOLE answer, so every accepted form is
 *  listed). No errorSpot treats an office anglicism as a grammar error in
 *  speech: each is keyed « dans un document soigné ». The authored slots
 *  are then spread by `spreadSlots()`: no `why` names a position. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Un mot ou une forme ne va pas. Écris la phrase correcte. EN: One word or form is wrong; write the sentence correctly.';
const ES_JUGE = 'Un mot juge à la place du lecteur. Supprime-le et écris la phrase. EN: One word judges for the reader; remove it and write the sentence.';
const ES_SOIGNE = 'Dans un document soigné, un mot venu de l’anglais se remplace. Écris la phrase soignée. EN: In a careful document, replace the English-derived word and write the sentence.';
const ES_VOIX = 'Une voix personnelle se glisse dans le constat. Écris la phrase impersonnelle. EN: A personal voice slips into the findings; write the impersonal sentence.';
const ES_PARTIE = 'Une phrase est rangée dans la mauvaise partie. Écris-la avec le bon titre de partie. EN: A sentence is in the wrong part; write it with the right part heading.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_Q): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'L’examen', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-lecteur', label: 'Pour qui n’était pas là', targets: ['rapport-chronologique'],
      questions: [
        mc('Pourquoi la directrice ne sait-elle pas quoi décider après ton premier jet ?', ['Il suit l’ordre de ta semaine et garde la conclusion pour la fin.', 'Il est trop court.', 'Il contient des chiffres.'], 0, 'Le calendrier enterre la réponse à la dernière ligne. EN: chronology buries the answer.', 'a1-scene'),
        mc('Avant d’écrire, la première question à te poser est...', ['Qui va lire, et pour décider de quoi ?', 'Combien de pages faut-il ?', 'Dans quel ordre tout s’est-il passé ?'], 0, 'Tout se règle sur le lecteur absent. EN: who reads, to decide what?', 'a1-check'),
        mc('Quelle phrase ouvre le mieux un rapport sur la cantine ?', [src(E(1284)).fr, src(E(1209)).fr, src(E(1210)).fr], 0, 'Le problème et sa cause d’abord ; le récit de ta semaine n’aide pas à décider. EN: problem and cause first.', 'a1-scene'),
        tI('Complète la règle. Un mot.', 'Écris pour qui n’était pas … : l’essentiel d’abord.', 'là', 'Le lecteur n’assistait ni à tes visites ni à tes entretiens. EN: there.', 'a1-scene'),
        tI('Complète. Un mot.', 'Un rapport n’est pas un … de bord.', 'journal', 'Un journal de bord suit le calendrier ; un rapport suit la décision. EN: logbook.', 'a1-lecture'),
        tI('Complète. Un mot.', 'Les faits d’abord, les opinions à … .', 'part', 'Ce que tu penses va dans sa partie, pas dans les faits. EN: kept apart.', 'a1-usages'),
        eS('Ce document doit pouvoir se lire avec moi.', 'Ce document doit pouvoir se lire sans moi.', 'Le lecteur n’a pas l’auteur à côté de lui. EN: without me.', 'a1-usages'),
        lC('Écoute. Cette phrase sert-elle à ouvrir un rapport ?', src(E(1209)).fr, ['Non : elle raconte ta semaine.', 'Oui : elle donne le problème.'], 0, 'Une date et une visite ne disent pas quoi décider. EN: it tells your week.', 'a1-lecture'),
      ],
    },
    {
      id: 'r2-architecture', label: 'Six parties', targets: ['parties-melangees'],
      questions: [
        mc('Dans quelle partie places-tu « Selon les relevés du gardien, le stationnement est complet dès 7 h 40 » ?', ['le constat', 'l’analyse', 'les recommandations'], 0, 'Un fait observé, avec sa source. EN: the findings.', 'a2-parties'),
        mc('« La pénurie tient à la répartition des places » appartient à...', ['l’analyse', 'le constat', 'l’objet'], 0, 'Elle explique pourquoi. EN: the analysis.', 'a2-lecture'),
        mc('Où va le plan détaillé du stationnement ?', ['en annexe', 'dans le constat', 'dans l’objet'], 0, 'Le détail va en annexe, cité dans le texte. EN: an appendix.', 'a2-parties'),
        tI('Complète. Un mot.', 'Le … rapport a pour objet de proposer une nouvelle répartition des places.', 'présent', '« Le présent rapport » : ce rapport-ci, en langue administrative. EN: this report.', 'a2-lecture'),
        tI('Complète. Deux mots.', 'Le constat décrit la situation, chiffres … .', 'à l’appui', 'Chiffres à l’appui : avec des chiffres pour preuve. EN: backed by figures.', 'a2-parties'),
        tI('Complète. Un mot.', 'Le tableau complet figure en … 2.', 'annexe', 'On renvoie à l’annexe par son numéro. EN: appendix.', 'a2-version'),
        eS('Constat : nous recommandons de réduire les places des visiteurs.', 'Recommandations : nous recommandons de réduire les places des visiteurs.', 'Une recommandation n’a pas sa place dans le constat. EN: it belongs to the recommendations.', 'a2-erreurs',
          ['Recommandation : nous recommandons de réduire les places des visiteurs.'], ES_PARTIE),
        lC('Écoute. De quelle partie vient cette phrase ?', src(E(1213)).fr, ['l’objet', 'les annexes', 'le constat'], 0, '« A pour objet de » : ce qu’on attend du rapport. EN: the purpose.', 'a2-parties'),
      ],
    },
    {
      id: 'r3-constat', label: 'Un fait, sa source', targets: ['impression-pour-fait'],
      questions: [
        mc('« Le personnel boude la cantine » est...', ['une interprétation', 'un fait vérifiable', 'une recommandation'], 0, '« Bouder » prête une intention. EN: an interpretation.', 'a3-trier'),
        mc('Que manque-t-il à « La fréquentation a beaucoup baissé » ?', ['un chiffre et sa source', 'un adjectif', 'une recommandation'], 0, 'Combien, et selon quoi ? EN: a figure and its source.', 'a3-sources'),
        mc('« Il ressort de l’enquête que… » sert à...', ['tirer un résultat d’une source', 'donner ton avis', 'annoncer une recommandation'], 0, 'Le résultat vient de l’enquête, pas de toi. EN: a result from a source.', 'a3-sources'),
        tI('Complète. Un mot.', 'Il … de l’enquête que les équipes du soir ne mangent plus sur place.', 'ressort', 'Il ressort de… que : un résultat tiré d’une source. EN: it emerges.', 'a3-lecture'),
        tI('Complète. Un mot.', '… le registre des caisses, la cantine sert soixante-dix repas par jour.', 'Selon', 'Selon introduit la source du chiffre. EN: according to.', 'a3-lecture', ['D’après']),
        tI('Complète. Un mot.', 'Chaque chiffre doit avoir sa … .', 'source', 'Un chiffre sans source ne se vérifie pas. EN: source.', 'a3-check'),
        eS('Il ressort l’enquête que six répondants sur dix jugent les horaires inadaptés.', 'Il ressort de l’enquête que six répondants sur dix jugent les horaires inadaptés.', 'Il ressort DE quelque chose : la préposition est obligatoire. EN: ressortir de.', 'a3-sources'),
        lC('Écoute. Fait ou interprétation ?', src(E(1230)).fr, ['une interprétation', 'un fait sourcé'], 0, 'Aucune donnée ne dit pourquoi les salariés ne viennent pas. EN: an interpretation.', 'a3-piege'),
      ],
    },
    {
      id: 'r4-causes', label: 'Du symptôme aux causes', targets: ['symptome-pour-cause'],
      questions: [
        mc('« La cantine se vide » est...', ['un symptôme', 'une cause', 'une option'], 0, 'Ce qu’on voit, pas ce qui l’explique. EN: a symptom.', 'a4-classer'),
        mc('Selon l’analyse, la cause principale est...', ['le décalage des horaires', 'le prix du repas', 'le menu unique'], 0, 'L’équipe du soir arrive après la fermeture. EN: the hours.', 'a4-lecture'),
        mc('Pourquoi la hausse des prix n’est-elle qu’un facteur aggravant ?', ['Les prix ont augmenté en septembre sans effet visible avant janvier.', 'Personne ne s’en plaint.', 'Elle ne concerne que l’équipe du soir.'], 0, 'La chute commence avec les horaires, pas avec les prix. EN: the timing does not fit.', 'a4-lecture'),
        tI('Complète. Un mot.', 'La hausse des prix a joué comme facteur … .', 'aggravant', 'Il aggrave, il n’explique pas tout seul. EN: aggravating.', 'a4-exemples'),
        tI('Complète. Un mot.', 'La cause … tient aux nouveaux horaires de travail.', 'principale', 'Celle qui explique l’essentiel. EN: main.', 'a4-exemples'),
        tI('Complète. Un mot.', 'La baisse de fréquentation est un …, pas une cause.', 'symptôme', 'Ce qu’on voit ; les causes l’expliquent. EN: symptom.', 'a4-classer'),
        eS('La cause principale tient des nouveaux horaires de travail.', 'La cause principale tient aux nouveaux horaires de travail.', 'Tenir à quelque chose : en être la cause. EN: tenir à.', 'a4-classer'),
        lC('Écoute. Bruno donne-t-il ici un fait ou une opinion ?', src(E(1248)).fr, ['une opinion', 'un fait chiffré'], 0, '« Je pense que » : il le dit lui-même. EN: an opinion.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-options', label: 'Options et critères', targets: ['choix-sans-criteres'],
      questions: [
        mc('Avant de comparer les options, le rapport...', ['annonce ses critères', 'donne sa recommandation', 'décrit les annexes'], 0, 'Le lecteur sait sur quoi on juge. EN: criteria first.', 'a5-lecture'),
        mc('Pourquoi l’option B est-elle écartée ?', ['faute de traiteur disponible le soir', 'parce qu’elle coûte trop cher', 'parce que le comité la refuse'], 0, 'Elle ne répond pas à la cause principale. EN: no caterer in the evening.', 'a5-lecture'),
        mc('« Elle présente l’avantage d’être rapide ; elle a toutefois … de supprimer un lieu de pause. »', ['l’inconvénient', 'l’avantage', 'le critère'], 0, 'Chaque option a son point faible. EN: the drawback.', 'a5-grille'),
        tI('Complète. Un mot.', 'Au … du gaspillage, l’option C est la plus efficace.', 'regard', 'Au regard de : si l’on considère ce critère. EN: in the light of.', 'a5-grille'),
        tI('Complète. Un mot.', 'L’option B est …, faute de traiteur disponible le soir.', 'écartée', 'Écarter, avec une raison. EN: ruled out.', 'a5-grille', ['exclue', 'rejetée']),
        tI('Complète. Un mot.', 'Aucune option n’est parfaite ; l’option C est l’option … .', 'retenue', 'L’option retenue : celle que le rapport recommande. EN: chosen.', 'a5-choisir', ['choisie']),
        eS('L’option A présente l’avantage d’être la moins coûteux.', 'L’option A présente l’avantage d’être la moins coûteuse.', 'L’option est féminine : coûteuse. EN: agreement.', 'a5-grille'),
        lC('Écoute. Que fait cette phrase ?', src(E(1259)).fr, ['Elle annonce les critères.', 'Elle donne la recommandation.', 'Elle écarte une option.'], 0, 'Quatre critères, annoncés avant la comparaison. EN: it states the criteria.', 'a5-lecture'),
      ],
    },
    {
      id: 'r6-recommander', label: 'Recommander', targets: ['mode-recommandation'],
      questions: [
        mc('« Il est recommandé que la cantine … ouverte jusqu’à 19 h. »', ['soit', 'est', 'sera'], 0, 'Subjonctif après « il est recommandé que ». EN: subjunctive.', 'a6-echelle'),
        mc('« Il conviendrait … proposer deux plats. »', ['de', 'que', 'à'], 0, 'Il conviendrait de + infinitif. EN: de + infinitive.', 'a6-echelle'),
        mc('Laquelle est une recommandation complète ?', ['Nous recommandons que les ressources humaines recrutent un cuisinier à temps partiel avant le 1er avril.', 'Il faudrait faire quelque chose pour la cantine.', 'La cantine est un vrai problème.'], 0, 'Qui, quoi, pour quand. EN: who, what, when.', 'a6-lecture'),
        tI('Complète. Un mot.', 'Nous … un essai de six mois.', 'préconisons', 'Préconiser : recommander vivement, en langue soutenue. EN: we recommend.', 'a6-lecture', ['recommandons', 'proposons']),
        tI('Mets le verbe au mode qui convient. Un mot.', 'Il est recommandé que chaque salarié (pouvoir) commander la veille.', 'puisse', 'Le subjonctif de pouvoir. EN: puisse.', 'a6-piege'),
        tI('Complète. Un mot.', 'Il y aurait … de revoir les prix à la baisse.', 'lieu', 'Il y aurait lieu de : il serait justifié de. EN: grounds.', 'a6-echelle'),
        eS('Nous préconisons que l’essai fait l’objet d’un bilan en juin.', 'Nous préconisons que l’essai fasse l’objet d’un bilan en juin.', 'Préconiser que + subjonctif. EN: fasse.', 'a6-piege'),
        lC('Écoute. Cette phrase convient-elle à un rapport ?', src(E(1275)).fr, ['Non : c’est un ordre, trop brutal.', 'Oui : c’est une recommandation nuancée.'], 0, '« Il faut absolument » commande ; un rapport recommande. EN: too blunt.', 'a6-piege'),
      ],
    },
    {
      id: 'r7-synthese', label: 'La synthèse en tête', targets: ['synthese-qui-annonce'],
      questions: [
        mc('Où se place la synthèse ?', ['en tête du rapport', 'après les recommandations', 'en annexe'], 0, 'Pour le lecteur pressé. EN: at the head.', 'a7-trois'),
        mc('« Ce rapport va présenter la situation de la cantine » : pourquoi est-ce une mauvaise synthèse ?', ['Elle annonce au lieu de résumer.', 'Elle est trop longue.', 'Le futur proche est interdit à l’écrit.'], 0, 'Une synthèse donne déjà la réponse. EN: it announces.', 'a7-erreurs'),
        mc('Au Québec, l’Office privilégie...', ['« sommaire de gestion »', '« sommaire exécutif »', '« résumé exécutif »'], 0, '« Sommaire exécutif » est un calque déconseillé. EN: sommaire de gestion.', 'a7-lecture'),
        tI('Complète. Un mot.', 'On écrit la synthèse en dernier, et on la place en … .', 'premier', 'Écrite en dernier, lue en premier. EN: first.', 'a7-trois', ['tête']),
        tI('Complète. Un mot.', 'Le sommaire ne présente pas le rapport : il le … .', 'résume', 'Il donne les réponses. EN: sums it up.', 'a7-trois'),
        tI('Complète. Un mot.', 'Une synthèse dit le problème, la cause et la … .', 'recommandation', 'Le lecteur pressé doit pouvoir décider. EN: the recommendation.', 'a7-choisir', ['proposition']),
        eS('Le présent sommaire exécutif résume le rapport.', 'Le présent sommaire de gestion résume le rapport.', '« Sommaire exécutif » est un calque ; l’Office recommande « sommaire de gestion ». EN: a calque.', 'a7-lecture',
          ['La présente synthèse résume le rapport.', 'Le présent résumé résume le rapport.', 'Le présent sommaire résume le rapport.'], ES_SOIGNE),
        lC('Écoute. Cette phrase convient-elle à une synthèse ?', src(E(1284)).fr, ['Oui : elle donne le problème et sa cause.', 'Non : elle annonce seulement le sujet.'], 0, 'Le problème et sa cause, d’emblée. EN: problem and cause.', 'a7-choisir'),
      ],
    },
    {
      id: 'r8-compte-rendu', label: 'Le compte rendu', targets: ['cr-subjectif'],
      questions: [
        mc('À quel temps rédige-t-on un compte rendu ?', ['au présent', 'au passé simple', 'au futur'], 0, 'Le présent rapporte toutes les interventions sur le même plan. EN: present.', 'a8-lecture'),
        mc('Quel verbe rapporte une crainte ?', ['s’inquiéter de', 'souligner', 'rappeler'], 0, 'S’inquiéter de : une crainte, rapportée sans jugement. EN: to be concerned.', 'a8-verbes'),
        mc('Que fait le secrétaire de ses propres opinions ?', ['Il les garde pour lui.', 'Il les ajoute à la fin.', 'Il les met entre parenthèses.'], 0, 'Le compte rendu rapporte, il ne juge pas. EN: he keeps them out.', 'a8-choisir'),
        tI('Complète. Un mot.', 'Aïcha Benali … que l’équipe du soir n’a pas été consultée.', 'souligne', 'Souligner : mettre en avant un point important. EN: stresses.', 'a8-verbes', ['rappelle', 'précise', 'signale', 'indique']),
        tI('Complète. Un mot.', 'Plusieurs membres s’… du coût d’un second service.', 'inquiètent', 'S’inquiéter de : une crainte. EN: are concerned.', 'a8-verbes'),
        tI('Mets le verbe au temps du compte rendu. Un mot.', 'Bruno Lachance (rappeler) que la cantine ferme à 13 h 30.', 'rappelle', 'Le présent du compte rendu. EN: present.', 'a8-piege'),
        eS('Bruno Lachance rappelle à juste titre que la cantine ferme à 13 h 30.', 'Bruno Lachance rappelle que la cantine ferme à 13 h 30.', '« À juste titre » est l’avis du secrétaire. EN: drop the judgement.', 'a8-piege', [], ES_JUGE),
        lC('Écoute. Cette phrase a-t-elle sa place dans un compte rendu ?', src(E(1296)).fr, ['Non : c’est l’avis du rédacteur.', 'Oui : c’est un fait.'], 0, 'Le secrétaire ne donne pas son avis. EN: an opinion.', 'a8-piege'),
      ],
    },
    {
      id: 'r9-proces-verbal', label: 'Le procès-verbal', targets: ['pv-confondu'],
      questions: [
        mc('Selon l’Office québécois : « L’ordre du jour est … tel que présenté. »', ['adopté', 'approuvé', 'résolu'], 0, 'On adopte l’ordre du jour (Office québécois). EN: adopted.', 'a9-trois'),
        mc('Selon l’Office québécois : « Le procès-verbal de la dernière séance est … à l’unanimité. »', ['approuvé', 'adopté'], 0, 'On approuve le procès-verbal (Office québécois). EN: approved.', 'a9-trier'),
        mc('Qu’est-ce qui distingue surtout le procès-verbal du compte rendu ?', ['son caractère officiel', 'sa longueur', 'sa langue'], 0, 'Selon l’Office québécois de la langue française. EN: its official character.', 'a9-lecture'),
        tI('Complète. Un mot.', '5. Questions … : aucune.', 'diverses', 'Le dernier point : questions diverses. EN: any other business.', 'a9-lecture'),
        tI('Complète. Un mot.', 'Le procès-verbal suit l’ordre du …, point par point.', 'jour', 'L’ordre du jour, plus étroitement que le compte rendu. EN: agenda.', 'a9-trois'),
        tI('Complète. Un mot.', 'Il est … d’autoriser l’essai d’avril à septembre.', 'résolu', 'La forme d’une résolution. EN: resolved.', 'a9-lecture'),
        eS('Les minutes de la séance du 20 février sont approuvées.', 'Le procès-verbal de la séance du 20 février est approuvé.', 'L’Office déconseille « minutes » pour le procès-verbal. EN: procès-verbal.', 'a9-version',
          ['Le compte rendu de la séance du 20 février est approuvé.'], ES_SOIGNE),
        lC('Écoute. En France, que désigne souvent « un PV » dans la rue ?', src(E(1315)).fr, ['une amende', 'un compte rendu de réunion'], 0, 'Le procès-verbal d’un agent public. EN: a fine.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-calques', label: 'Les mots du bureau', targets: ['anglicisme-bureau'],
      questions: [
        mc('Dans un rapport soigné, « deadline » devient...', ['date limite', 'ligne morte', 'dernière ligne'], 0, 'Ou échéance, ou date butoir. EN: date limite.', 'a10-erreurs'),
        mc('« Implémenter la précommande » : que préfère un rapport soigné ?', ['mettre en œuvre la précommande', 'adresser la précommande', 'supporter la précommande'], 0, 'Une mesure se met en œuvre. EN: mettre en œuvre.', 'a10-lecture'),
        mc('« Prochain item » devient...', ['point suivant', 'article prochain', 'élément suivant'], 0, `Le point suivant, comme l’a montré ${REUNION_REF}. EN: point suivant.`, 'a10-piege'),
        tI('Complète. Un mot.', 'La mesure sera mise en … dès le mois prochain.', 'œuvre', 'Mettre en œuvre : appliquer une mesure. EN: implemented.', 'a10-focus', ['oeuvre']),
        tI('Complète. Un mot.', 'Chaque décision a un responsable et une … .', 'échéance', 'L’échéance : la date où ce doit être fait. EN: due date.', 'a10-lecture'),
        tI('Écris le titre soigné de ce point. Deux mots.', 'Varia : aucune.', 'Questions diverses', 'L’Office déconseille « varia ». EN: questions diverses.', 'a10-erreurs', ['Questions diverses : aucune.', 'Divers', 'Divers : aucune.']),
        eS('Nous devons adresser la question du gaspillage en mai.', 'Nous devons traiter la question du gaspillage en mai.', 'On traite une question ; on adresse une lettre. EN: traiter.', 'a10-piege',
          ['Nous devons aborder la question du gaspillage en mai.', 'Nous devons nous attaquer à la question du gaspillage en mai.', 'Nous devons régler la question du gaspillage en mai.', 'Nous devons examiner la question du gaspillage en mai.'], ES_SOIGNE),
        lC('Écoute. « Adresser » est-il bien employé ici ?', src('fr.b2.langue-soignee.1817').fr, ['Oui : on adresse une facture.', 'Non : c’est un calque.'], 0, 'Adresser une lettre, une facture : c’est juste. EN: correct.', 'a10-version'),
      ],
    },
    {
      id: 'r11-relire', label: 'Relire en rapporteur', targets: ['ton-personnel'],
      questions: [
        mc('« Le gérant a été dépassé par les événements » : que corriges-tu ?', ['un jugement que les faits ne prouvent pas', 'une faute d’accord', 'un anglicisme'], 0, 'Le fait : il n’a pas été consulté. EN: a judgement.', 'a11-lecture'),
        mc('Quelle tournure convient à un constat ?', ['Il apparaît que les prix ne sont pas la cause principale.', 'Je pense que les prix ne sont pas la cause principale.', 'À mon humble avis, les prix ne comptent pas.'], 0, 'L’impersonnel parle au nom du service. EN: impersonal.', 'a11-deux'),
        mc('Le déficit vaut 38 000 $ page 2 et 36 000 $ dans la synthèse. Que fais-tu ?', ['Tu vérifies et tu mets le chiffre de la source partout.', 'Tu gardes le plus petit.', 'Tu supprimes le chiffre.'], 0, 'Un seul chiffre partout. EN: one figure everywhere.', 'a11-hacks'),
        tI('Complète. Un mot.', 'Un mot chargé juge ; un mot … décrit.', 'neutre', 'Le mot neutre se vérifie. EN: neutral.', 'a11-deux'),
        tI('Complète. Un mot.', 'Les résultats … un lien avec les horaires.', 'suggèrent', 'Jamais plus sûr que tes preuves. EN: suggest.', 'a11-deux', ['indiquent']),
        tI('Complète. Un mot.', 'Chaque … est citée dans le texte.', 'annexe', 'Une annexe non citée n’est jamais ouverte. EN: appendix.', 'a11-hacks'),
        eS('Je pense que la fréquentation a baissé de plus d’un tiers.', 'La fréquentation a baissé de plus d’un tiers.', 'Un fait chiffré n’a pas besoin de « je pense ». EN: no « je pense ».', 'a11-trier',
          ['Selon le registre des caisses, la fréquentation a baissé de plus d’un tiers.', 'On constate que la fréquentation a baissé de plus d’un tiers.', 'Il apparaît que la fréquentation a baissé de plus d’un tiers.'], ES_VOIX),
        lC('Écoute. Cette phrase est-elle neutre ?', src(E(1340)).fr, ['Non : « dépassé » juge le gérant.', 'Oui : elle décrit un fait.'], 0, 'Un mot chargé juge. EN: loaded.', 'a11-trier'),
      ],
    },
  ],
  audio: AUDIO, say: REFRAME,
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
spreadSlots(A12_QUIZ);

const A12_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck', id: 'a12-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'ce rapport-ci, en langue administrative', back: 'le présent rapport', say: src(E(1213)).fr },
    { front: 'un résultat tiré d’une enquête', back: 'il ressort de… que', say: src(E(1225)).fr },
    { front: 'la cause qui explique l’essentiel', back: 'la cause principale', say: src(E(1239)).fr },
    { front: 'si l’on considère ce critère', back: 'au regard de', say: src(E(1258)).fr },
    { front: 'recommander vivement, en langue soutenue', back: 'préconiser', say: src(E(1268)).fr },
    { front: 'executive summary, au Québec', back: 'le sommaire de gestion', say: src(E(1286)).fr },
    { front: 'l’essentiel d’une réunion, au présent', back: 'le compte rendu', say: src(E(1290)).fr },
    { front: 'le document officiel d’une séance', back: 'le procès-verbal', say: src(E(1308)).fr },
    { front: 'deadline, dans un rapport soigné', back: 'la date limite, l’échéance', say: src(E(1322)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Rapports et comptes rendus, en résumé',
  body: `${REFRAME} Tu ranges un rapport en parties, tu sources chaque fait, tu remontes aux causes, tu compares des options sur les mêmes critères et tu recommandes avec le bon mode, la synthèse en tête. Tu rends compte d’une réunion sans juger, et tu sais ce qui sépare le compte rendu, le procès-verbal et le relevé de décisions. La suite du parcours C1 quitte les documents de travail pour le vocabulaire des idées : les concepts et leurs distinctions, qu’un bon rapport emploie sans les confondre. EN: Next, the C1 trail moves from working documents to the vocabulary of ideas.`,
  points: [
    'La synthèse en tête : le problème, la cause, la recommandation.',
    'Le constat sourcé ; l’analyse classe les causes et compare les options.',
    'Nous préconisons, il est recommandé que + subjonctif : qui, quoi, pour quand.',
    'Compte rendu, procès-verbal, relevé : au présent, sans avis, sans calque.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['synthese', 'procesverbal'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ton rapport',
    opener: {
      line: 'Un nouveau dossier, une fiche de faits, une directrice pressée : à toi d’écrire le rapport qu’elle lira en cinq minutes. EN: A new file, a fact sheet, a busy director: your turn to write the report she will read in five minutes.',
      imageRef: 'lessons/rapports-comptes-rendus/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit un rapport complet à partir d’une fiche de faits et passé l’examen : quatre-vingt-huit questions, onze rounds. EN: You wrote a full report from a fact sheet and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a12-modele', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-constat', 'a12-quiz/r6-recommander', 'a12-quiz/r9-proces-verbal'],
  },
  sections: [
    A12_MODELE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-lecteur', title: 'Pour le lecteur absent', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : ce sont les réflexes du rédacteur. EN: say each line aloud: the writer’s reflexes.', items: [E(1202), E(1204), E(1205), E(1206), E(1207), E(1208)], audio: AUDIO },
  { id: 'd-parties', title: 'Chaque chose dans sa partie', format: 'sort' as const, coach: 'Deux piles : ce qu’on observe, ce qu’on explique ou propose. EN: sort by part.', buckets: ['le constat', 'l’analyse ou les recommandations'], items: [E(1224), E(1227), E(1231), E(1239), E(1240), E(1272)], audio: AUDIO },
  { id: 'd-constat', title: 'Un fait, sa source', format: 'mcq' as const, coach: 'Un chiffre a toujours une source. EN: every figure has a source.', q: '« … le registre des caisses, la cantine sert soixante-dix repas par jour. »', opts: ['Selon', 'Malgré'], correct: 0, why: 'Selon introduit la source. EN: according to.', items: [E(1222), E(1225), E(1226), E(1227), E(1232), E(1235)], audio: AUDIO },
  { id: 'd-causes', title: 'Classer les causes', format: 'mcq' as const, coach: 'Le symptôme se voit ; la cause l’explique. EN: symptom vs cause.', q: '« La salle se vide » est...', opts: ['un symptôme', 'la cause principale'], correct: 0, why: 'Ce qu’on voit, pas ce qui l’explique. EN: a symptom.', items: [E(1236), E(1237), E(1238), E(1239), E(1240), E(1241)], audio: AUDIO },
  { id: 'd-options', title: 'Comparer sur les mêmes critères', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : peser, écarter, retenir. EN: weigh, rule out, choose.', items: [E(1252), E(1253), E(1254), E(1256), E(1258), E(1263)], audio: AUDIO },
  { id: 'd-recommander', title: 'Le bon mode', format: 'mcq' as const, coach: 'Après « il est recommandé que », le subjonctif. EN: subjunctive.', q: '« Il est recommandé que la cantine … ouverte jusqu’à 19 h. »', opts: ['soit', 'est'], correct: 0, why: 'Subjonctif. EN: soit.', items: [E(1265), E(1266), E(1267), E(1269), E(1273), E(1278)], audio: AUDIO },
  { id: 'd-synthese', title: 'Résumer, pas annoncer', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : une synthèse donne déjà la réponse. EN: a summary answers.', items: [E(1279), E(1280), E(1281), E(1282), E(1285), E(1286)], audio: AUDIO },
  { id: 'd-compte-rendu', title: 'Rapporter sans juger', format: 'mcq' as const, coach: 'Un verbe qui rapporte, au présent, sans ton avis. EN: report, do not judge.', q: '« Bruno Lachance … que la cantine ferme à 13 h 30. »', opts: ['rappelle', 'a raison de dire'], correct: 0, why: 'Rappeler rapporte sans juger. EN: rappelle.', items: [E(1290), E(1291), E(1292), E(1293), E(1297), E(1298)], audio: AUDIO },
  { id: 'd-proces-verbal', title: 'Adopter, approuver', format: 'mcq' as const, coach: 'On adopte l’ordre du jour ; on approuve le procès-verbal. EN: adopt the agenda, approve the minutes.', q: 'Selon l’Office québécois : « Le procès-verbal de la dernière séance est … . »', opts: ['approuvé', 'adopté'], correct: 0, why: 'Selon l’Office québécois. EN: approved.', items: [E(1303), E(1304), E(1305), E(1306), E(1307), E(1309)], audio: AUDIO },
  { id: 'd-calques', title: 'Les mots soignés', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : ce sont les mots qui remplacent ceux du bureau. EN: the careful replacements.', items: [E(1321), E(1322), E(1323), E(1324), E(1326), E(1327)], audio: AUDIO },
  { id: 'd-relire', title: 'Neutre et impersonnel', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : la voix du rapport. EN: the report’s voice.', items: [E(1338), E(1339), E(1341), E(1342), E(1344), E(1347)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'rapport-chronologique', description: 'Writes the report in the order things happened, so the decision and the cause sit on the last page.', detectOn: ['a1-scene', 'a1-check', 'a7-erreurs', 'a12-mission'], drill: 'd-lecteur', retest: 'd-lecteur' },
  { id: 'parties-melangees', description: 'Mixes the parts of a report: a recommendation in the findings, a cause in the background, an appendix never cited.', detectOn: ['a2-trier', 'a2-erreurs', 'a2-check', 'a12-mission'], drill: 'd-parties', retest: 'd-parties' },
  { id: 'impression-pour-fait', description: 'States an impression or a judging word as a fact, or gives a figure without its source.', detectOn: ['a3-trier', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-constat', retest: 'd-constat' },
  { id: 'symptome-pour-cause', description: 'Gives the symptom as the cause, or lists causes without naming the main one.', detectOn: ['a4-ecoute', 'a4-classer', 'a4-check', 'a12-mission'], drill: 'd-causes', retest: 'd-causes' },
  { id: 'choix-sans-criteres', description: 'Chooses an option without announced criteria, judges each option on a different criterion, or hides the chosen option’s weak point.', detectOn: ['a5-erreurs', 'a5-choisir', 'a5-check', 'a12-mission'], drill: 'd-options', retest: 'd-options' },
  { id: 'mode-recommandation', description: 'Uses the indicative after il est recommandé que or nous préconisons que, que + infinitive after il conviendrait, or gives an order instead of a recommendation.', detectOn: ['a6-piege', 'a6-version', 'a6-check', 'a12-mission'], drill: 'd-recommander', retest: 'd-recommander' },
  { id: 'synthese-qui-annonce', description: 'Writes a summary that announces the report’s plan instead of giving the problem, the cause and the recommendation, or uses the calque sommaire exécutif.', detectOn: ['a7-erreurs', 'a7-choisir', 'a7-check', 'a12-mission'], drill: 'd-synthese', retest: 'd-synthese' },
  { id: 'cr-subjectif', description: 'Puts the secretary’s opinion, judging adverbs or a blow-by-blow narrative into a compte rendu.', detectOn: ['a8-piege', 'a8-choisir', 'a8-check'], drill: 'd-compte-rendu', retest: 'd-compte-rendu' },
  { id: 'pv-confondu', description: 'Confuses the procès-verbal with the compte rendu, swaps adopter and approuver, or calls the minutes « les minutes ».', detectOn: ['a9-ecoute', 'a9-trier', 'a9-check'], drill: 'd-proces-verbal', retest: 'd-proces-verbal' },
  { id: 'anglicisme-bureau', description: 'Keeps office anglicisms in a careful document: deadline, implémenter, item, adresser une question, varia.', detectOn: ['a10-erreurs', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-calques', retest: 'd-calques' },
  { id: 'ton-personnel', description: 'Writes the findings in a personal voice (je pense), with loaded words, overstated conclusions or figures that differ from one page to another.', detectOn: ['a11-trier', 'a11-version', 'a11-check', 'a12-mission'], drill: 'd-relire', retest: 'd-relire' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here only; every sheet is reached by
 *  `sheetId` from at least one mission.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-architecture', 'L’architecture d’un rapport', ['les six parties', 'la synthèse en tête', 'l’objet et les annexes'], [
    teach('sheet-architecture-teach', 'Écrire pour qui n’était pas là',
      `${Cap(COURRIELS_REF)} te faisait dire d’emblée pourquoi tu écris. Le rapport pousse la logique au bout : il s’écrit pour un lecteur qui n’était pas là et doit décider. La synthèse vient en tête ; chaque partie répond à une seule question ; le détail va en annexe. EN: A report is written for an absent reader who must decide: summary first, one question per part, detail in the appendices.`),
    table('sheet-architecture-table', 'Les parties d’un rapport', ['Partie', 'Question', 'Tournures', 'Piège'], [
      ['Synthèse (sommaire de gestion)', 'Que faut-il décider ?', 'Nous recommandons… ; la direction est invitée à…', 'annoncer au lieu de résumer'],
      ['Objet', 'Que demande-t-on ?', 'Le présent rapport a pour objet de…', 'un thème au lieu d’une action'],
      ['Contexte', 'Que faut-il savoir ?', 'Depuis… ; la direction a demandé…', 'l’histoire de l’entreprise'],
      ['Constat', 'Qu’observe-t-on ?', 'Selon… ; d’après… ; il ressort de… que ; on constate', 'un chiffre sans source, un mot qui juge'],
      ['Analyse', 'Pourquoi ? Quelles options ?', 'La cause principale tient à… ; au regard de… ; l’option retenue', 'le symptôme pris pour la cause'],
      ['Recommandations', 'Que faire, qui, pour quand ?', 'Nous préconisons… ; il est recommandé que + subjonctif', 'une piste vague, un ordre'],
      ['Annexes', 'Où est le détail ?', 'Le tableau complet figure en annexe 2.', 'une annexe jamais citée'],
    ]),
  ]),
  sheet('sheet-analyse', 'Le constat et l’analyse de cas', ['un fait, sa source', 'symptôme, causes, facteurs aggravants', 'options et critères'], [
    teach('sheet-analyse-teach', 'Observer, expliquer, comparer',
      'Le constat dit ce qu’on observe, chaque chiffre avec sa source ; une impression y figure seulement présentée comme telle. L’analyse remonte du symptôme aux causes et les classe, puis compare les options sur les mêmes critères annoncés, écarte avec une raison et retient une option sans cacher son point faible. EN: Findings observe; the analysis explains, ranks causes and compares options on the same criteria.'),
    table('sheet-analyse-table', 'Les tournures de l’analyse de cas', ['Étape', 'Tournure', 'Exemple'], [
      ['la source', 'selon, d’après, il ressort de… que', 'Il ressort de l’enquête que les équipes du soir ne mangent plus sur place.'],
      ['le symptôme', 'on constate', 'On constate une baisse de la fréquentation depuis janvier.'],
      ['la cause', 'la cause principale tient à', 'La cause principale tient aux nouveaux horaires de travail.'],
      ['ce qui aggrave', 'jouer comme facteur aggravant', 'La hausse des prix a joué comme facteur aggravant.'],
      ['le critère', 'au regard de', 'Au regard du gaspillage, l’option C est la plus efficace.'],
      ['le pour et le contre', 'présenter l’avantage de ; avoir l’inconvénient de', 'Elle a toutefois l’inconvénient de supprimer un lieu de pause.'],
      ['le rejet', 'écarter, faute de, en raison de', 'L’option B est écartée, faute de traiteur disponible le soir.'],
      ['le choix', 'retenir ; l’option retenue', 'Aucune option n’est parfaite ; c’est l’option retenue.'],
    ]),
  ]),
  sheet('sheet-recommander', 'Recommander', ['six tournures, de la plus nette à la plus prudente', 'les modes', 'qui, quoi, pour quand'], [
    teach('sheet-recommander-teach', 'Proposer sans ordonner',
      'La direction décide, le rapport propose. Une recommandation dit qui fait quoi, et pour quand, et prévoit souvent un bilan. Le mode suit la tournure : subjonctif après « il est recommandé que » et « nous préconisons que », infinitif après « il conviendrait de » et « il y aurait lieu de ». « Il faut absolument » est un ordre : pas dans un rapport. EN: Propose, do not order; the mood follows the phrase.'),
    table('sheet-recommander-table', 'Six tournures', ['Tournure', 'Construction', 'Force', 'Exemple'], [
      ['nous préconisons', '+ nom ; + de + infinitif ; + que + subjonctif', 'nette, soutenue', 'Nous préconisons que l’essai fasse l’objet d’un bilan en juin.'],
      ['nous recommandons', '+ nom ; + de + infinitif', 'nette', 'Nous recommandons de mettre en place la précommande en ligne.'],
      ['il est recommandé que', '+ subjonctif', 'nette, impersonnelle', 'Il est recommandé que la cantine soit ouverte jusqu’à dix-neuf heures.'],
      ['il conviendrait de', '+ infinitif', 'prudente', 'Il conviendrait de proposer deux plats au lieu d’un.'],
      ['il y aurait lieu de', '+ infinitif', 'prudente, soutenue', 'Il y aurait lieu de revoir les prix à la baisse.'],
      ['il convient de (déjà vu)', '+ infinitif', 'nette, impersonnelle', 'Il convient de consulter l’équipe du soir.'],
    ]),
  ]),
  sheet('sheet-reunion', 'Les documents d’une réunion', ['compte rendu, procès-verbal, relevé de décisions', 'les verbes qui rapportent', 'France et Québec'], [
    teach('sheet-reunion-teach', 'Trois documents, aucun avis',
      `Le compte rendu présente l’essentiel des discussions et des décisions ; le procès-verbal, plus étroitement lié à l’ordre du jour, a un caractère officiel et consigne aussi les résolutions ; le relevé de décisions ne garde que les décisions. Les trois s’écrivent au présent, sans l’avis du rédacteur. On adopte un ordre du jour, on approuve un procès-verbal et un compte rendu (Office québécois de la langue française) ; en France, on lit aussi « le procès-verbal est adopté ». Le compte rendu, lui, n’a pas à être approuvé. ${Cap(DEBATS_REF)} t’a fait rendre compte d’un débat ; ici, c’est une réunion. EN: Three documents, present tense, no opinion; adopt an agenda, approve minutes.`),
    table('sheet-reunion-table', 'Compte rendu, procès-verbal, relevé', ['Point', 'Compte rendu', 'Procès-verbal', 'Relevé de décisions'], [
      ['caractère', 'document de travail', 'document officiel', 'aide-mémoire'],
      ['contenu', 'l’essentiel des discussions et des décisions', 'discussions, décisions, résolutions, nominations', 'les décisions seulement'],
      ['plan', 'souple', 'l’ordre du jour, point par point', 'une ligne par décision'],
      ['temps', 'présent', 'présent, forme impersonnelle', 'phrases nominales, présent'],
      ['approbation', 'facultative (aide-mémoire interne)', 'à la séance suivante, puis signé et conservé', 'aucune en général'],
      ['à éviter', 'l’avis du secrétaire', '« les minutes »', '« deadline », « varia »'],
    ]),
    table('sheet-reunion-verbes', 'Les verbes qui rapportent', ['Verbe', 'Ce qu’il dit de l’intervention'], [
      ['rappeler que', 'un fait que tous sont censés connaître'],
      ['souligner que', 'un point jugé important par celui qui parle'],
      ['estimer que', 'un avis, rapporté comme tel'],
      ['s’inquiéter de', 'une crainte'],
      ['contester', 'un désaccord, sans dire qui a raison'],
      ['proposer, demander', 'une suggestion, une requête'],
    ]),
    teach('sheet-reunion-pays', 'En France et au Québec',
      'Au Québec, l’Office déconseille « minutes » pour le procès-verbal et « varia » pour le dernier point (écris « questions diverses » ou « divers ») ; les résolutions s’écrivent souvent « Sur proposition de…, appuyée par…, il est résolu que… ». En France, « procès-verbal » désigne aussi l’acte écrit d’un agent public, et « un PV », dans la rue, souvent une amende ; pour une réunion courante, on rédige un compte rendu ou un relevé de décisions. EN: Québec: no minutes, no varia; France: a PV is often a fine.'),
  ]),
  sheet('sheet-mots', 'La langue du rapport', ['neutre et impersonnelle', 'les calques du bureau', 'la relecture'], [
    teach('sheet-mots-teach', 'Une voix qui engage le service',
      `Le rapport parle au nom d’un service : « il apparaît que », « on constate », « le présent rapport », et « nous » pour recommander. Les mots restent neutres et les conclusions mesurées : ${ACADEMIQUE_REF} disait « ${B222_REFRAME} » ${Cap(CALQUES_REF)} te mettait en garde contre « adresser » et « supporter » ; les écrits de bureau ajoutent leurs propres calques. EN: An impersonal, neutral, measured voice, free of office calques.`),
    table('sheet-mots-table', 'Les calques du bureau', ['Au bureau, on entend', 'Dans un document soigné', 'Pourquoi'], [
      ['deadline', 'date limite, échéance, date butoir', 'emprunt déconseillé par l’Office'],
      ['implémenter une mesure', 'mettre en œuvre', 'terme d’informatique (réaliser un système)'],
      ['les minutes', 'le procès-verbal, le compte rendu', 'emprunt déconseillé par l’Office'],
      ['varia', 'questions diverses, divers', 'emprunt déconseillé par l’Office'],
      ['sommaire exécutif', 'sommaire de gestion, synthèse', 'calque déconseillé : « exécutif » renvoie à l’exécution des lois'],
      ['prochain item', 'point suivant', `vu dans ${REUNION_REF}`],
      ['adresser une question', 'traiter, aborder une question', `vu dans ${CALQUES_REF}`],
      [`suite à (pour une cause)`, 'à la suite de, en raison de', `vu dans ${REFORMULER_REF}`],
    ]),
    table('sheet-mots-relire', 'La relecture en quatre questions', ['Question', 'Si la réponse est non'], [
      ['Chaque mot décrit-il sans juger ?', 'remplace le mot chargé par le fait'],
      ['La voix est-elle impersonnelle dans le constat ?', 'il apparaît que, on constate'],
      ['Chaque chiffre est-il le même partout ?', 'reprends celui de la source'],
      ['Chaque annexe est-elle citée ?', 'cite-la, ou supprime-la'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** MissionRich renders options in authored order, so every closed MISSION
 *  item (checks, trap drills, listening questions, remediation drills) is
 *  rotated here, options and `correct` together, so each option-count class
 *  spreads evenly and no slot repeats more than twice in a row. No text is
 *  changed and no `why` names a position. The quiz is left to spreadSlots. */
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
  for (const s of sections) if (s.type !== 'quiz') visit(s);
  for (const d of drills) visit(d);
}
balanceSlots(SECTIONS, DRILL_LIST);

export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-11-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c1-11-brouillon': 'The learner’s first draft (act 1), ONE VOICE, one take, a young colleague reading their own note aloud, Québec French, earnest and a little anxious. Even pace from Monday to Friday: the flatness is the point. The last sentence trails off.',
  'rec-c1-11-stationnement': 'The car-park report (act 2), ONE VOICE, one take, a facilities manager, Québec French, clear and neutral. Each part heading (Objet, Contexte, Constat, Analyse, Recommandations, Annexes) read as a heading, with a short beat after it. Times read in full (sept heures quarante).',
  'rec-c1-11-constat': 'The findings section (act 3), ONE VOICE, one take, a calm analyst, Québec French. Figures read in full (trente-huit mille dollars, six dollars cinquante). « Le personnel boude la cantine » read as a quotation, with a slight change of tone, then back to neutral.',
  'rec-c1-11-piege-constat': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-11-analyse': 'The analysis section (act 4), ONE VOICE, one take, the same analyst as act 3. A small beat before « La cause principale » and before each « facteur aggravant ». The sentence on the manager read neutrally, never apologetically.',
  'rec-c1-11-bruno': 'REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, ONE VOICE, in authored order. A male canteen manager in his fifties leaving a voicemail, Québec French, relaxed and a little tired, conversational speed. « Moi, je pense que » and « c’est une impression » at natural weight: the learner must hear the shift from fact to opinion in the words, not in an acted voice. Light phone-line colouring, no music. The learner hears it once: no pause longer than the punctuation gives.',
  'rec-c1-11-options': 'The options section (act 5), ONE VOICE, one take, the analyst. Each « L’option A / B / C » with a short beat. « C’est l’option retenue » slightly slower: the choice.',
  'rec-c1-11-recommandations': 'The recommendations (act 6), ONE VOICE, one take, the analyst. « Première recommandation », « Deuxième »… read as headings. Dates read in full (le premier avril). The subjunctives (puisse, soit, fasse) clearly articulated.',
  'rec-c1-11-piege-recommander': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-11-sommaire': 'The executive summary and the director’s note (act 7), TWO VOICES, one take each. SOMMAIRE: the analyst, crisp, each rubric (Problème, Cause, Options, Recommandation, Décision attendue) as a heading. NOTE: a woman in her fifties, Québec French, the director, brisk and approving; « sommaire exécutif » in quotation tone.',
  'rec-c1-11-cr': 'The committee’s compte rendu (act 8), ONE VOICE, one take, a secretary reading minutes aloud, neutral, Québec French. Names read clearly. « Point 1 », « Point 2 »… as headings. No acting of the positions: every intervention at the same weight.',
  'rec-c1-11-piege-cr': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-11-pv': 'The board’s procès-verbal (act 9), ONE VOICE, one take, a formal secretary, Québec French, measured. The numbered points as headings. The resolution (« Sur proposition de…, il est résolu… ») slightly slower and firm. The secretary’s note at the end in a lighter, personal tone.',
  'rec-c1-11-aicha': 'REQUIRED FOR THE EAR MISSION (act 9): eight lines, ONE TAKE, ONE VOICE, in authored order. A woman in her thirties from Lyon, France French, friendly and quick, as in a voice message to a colleague. « un PV » pronounced [pe.ve]. « les minutes » with a small smile in the voice. The learner hears it once: no pause longer than the punctuation gives.',
  'rec-c1-11-releve': 'The colleague’s email and the corrected record (act 10), ONE VOICE, one take, the same Lyon colleague, France French, warm and practical. The anglicisms (« deadline », « implémenter », « item », « varia ») read as quotations, at ordinary weight, never mocked. The corrected record read as a list.',
  'rec-c1-11-piege-calques': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-11-relecture': 'The director’s rereading notes (act 11), ONE VOICE, one take, the director (as act 7), Québec French, precise and kind. « Premièrement », « Deuxièmement »… with a beat. Figures read in full.',
  'rec-c1-11-modele': 'The model report (act 12), ONE VOICE, one take, the analyst, Québec French, confident. Part headings as headings. Figures in full. The final line on the appendices quicker.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 11',
  intro: 'At B1 you learned to say why you are writing an email; at B2 you wrote academic paragraphs, ran meetings, condensed minutes into nouns and translated without calques. At C1 you write the working documents of an organisation for a reader who was not there and must decide: a report laid out in parts with the executive summary first, findings with their sources, a case analysis that ranks causes and compares options on the same criteria, recommendations in the formal register (nous préconisons, il conviendrait de, il est recommandé que + subjunctive). You also write the compte rendu, the procès-verbal and the record of decisions, tell them apart in Québec and in France, and replace the office anglicisms (deadline, implémenter, les minutes, varia). You finish by writing a short report from a fact sheet.',
  skill: 'PE',
  grammarAssumed: [COURRIELS_UNIT, NOMINAL_UNIT, ACADEMIQUE_UNIT, REUNION_UNIT, CALQUES_UNIT],
  grammarIntroduced: [
    'Report architecture: objet (le présent rapport a pour objet de), contexte, constat, analyse, recommandations, annexes; detail to the appendices, every appendix cited',
    'The sourced constat: selon, d’après, il ressort de… que + indicative, on constate; an impression flagged as such, never stated as a fact',
    'Case analysis: symptom vs cause, la cause principale tient à, un facteur aggravant; options compared au regard de the same announced criteria, présenter l’avantage de / avoir l’inconvénient de, écarter (faute de), l’option retenue',
    'The recommendation register: nous préconisons, nous recommandons de, il est recommandé que + subjunctive, nous préconisons que + subjunctive, il conviendrait de and il y aurait lieu de + infinitive; who, what, by when',
    'The executive summary (sommaire de gestion, synthèse) written last and placed first; the compte rendu, the procès-verbal and the relevé de décisions in the present and the impersonal, adopter un ordre du jour / approuver un procès-verbal; office anglicisms deadline, implémenter, les minutes, varia, sommaire exécutif replaced',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B1, tu as appris à dire pourquoi tu écris un courriel ; au B2, tu as écrit des paragraphes académiques, mené des réunions, condensé des comptes rendus et traduit sans calquer. Au C1, tu écris les documents de travail d’une organisation pour un lecteur qui n’était pas là et doit décider : un rapport en parties, la synthèse en tête, un constat sourcé, une analyse de cas qui classe les causes et compare les options sur les mêmes critères, des recommandations dans le registre du rapport. Tu écris aussi le compte rendu, le procès-verbal et le relevé de décisions, et tu remplaces les mots du bureau venus de l’anglais. À la fin, tu écris un rapport à partir d’une fiche de faits.',
    minutes: 175,
    difficulty: 4,
    glyph: 'rapport',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: RAPPORTS_COMPTES_RENDUS_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, NAVETTE_FICHE };
export const lessonWithoutTask = (): Lesson => LESSON;
