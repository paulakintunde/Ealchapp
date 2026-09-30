// b2.14.l1 « Les constructions infinitives »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.12 gérondif and b2.07
// futur antérieur), under the B2 rules of B2-BUILD-LOG.md (form, meaning,
// choice, text).
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema now, so the lesson validates with it in place (as b2.12 does).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act (B2): meet (scene, story, reading or listening), name
//   (cardDeck, tapTable, examples), build (groupDrill, gated), choose (a
//   drill where the MEANING or the SUBJECT picks the form), trap (trapDrill
//   stepped or commonErrors), then from act 3 on the form INSIDE A TEXT of
//   60 to 120 words (complete, rewrite or read), then the gated act check.
//
//    1  Qui agit, et quand ?          6   the reframe; the scene's « j'ai
//                                          réparé » against « j'ai fait
//                                          réparer »; a forum thread with
//                                          every construction of the lesson
//    2  L'infinitif passé             8   avoir / être + participe (past
//                                          lesson 5 in B2), agreement, a
//                                          pronoun before avoir, the passé
//                                          that looks forward
//    3  Après et avant de             7   après + passé, avant de + présent,
//                                          avant d'avoir fini; avant que and
//                                          après que with two subjects
//                                          (lessons 16 in B1 and 7 in B2)
//    4  Pour : le but ou la faute     7   pour + présent (purpose) against
//                                          pour + passé (reason: sanctionné,
//                                          félicité pour avoir...)
//    5  Sans                          7   sans + présent or passé, sans que +
//                                          subjonctif (lesson 16 in B1), sans
//                                          avoir rien reçu
//    6  Un seul sujet, plus loin      8   croire, dire, affirmer, nier:
//                                          infinitive AND que both correct;
//                                          vouloir: infinitive only
//    7  À, de ou rien                 8   the first verb picks; the pairs
//                                          that change meaning (finir de /
//                                          par, penser à / penser, venir /
//                                          venir de, commencer à / par)
//    8  Faire faire                   7   faire + infinitif, the agent with à
//                                          or par, faire faire, against se
//                                          faire (lesson 18 in B1)
//    9  Laisser, et les pronoms       7   laisser tomber; the pronoun before
//                                          faire and laisser (lesson 17 in
//                                          B1); fait never agrees
//   10  Les consignes                 7   the infinitive of notices, ne pas
//                                          in front, s'adresser, veuillez
//   11  Sujet, question, nom          7   Voyager forme la jeunesse; Que
//                                          faire ?; le droit de, des factures
//                                          à payer (past lessons 22 in B1 and
//                                          5 in B2)
//   12  Ta réclamation               11   model, plan, role play, TASK, quiz
//
//   TOTAL 90 missions, 12 acts. Corpus: 176 authored rows (.1200-.1397) in
//   twelve blocks plus 31 reused seed rows, released act by act through
//   `deckTranche`. Quiz: 12 rounds of 8 (one per act 2 to 11, a recycling
//   round citing lessons 16, 17, 18 and 22 in B1 and 5, 7 and 12 in B2, an
//   exam-format round). Chapter artwork:
//   `constructions-infinitives-image-prompts.md`, twelve prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (a later lesson may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un infinitif n'a ni personne ni date : il les prend dans la phrase. »
//   EN: An infinitive has no person and no date: it takes both from the
//   sentence.
//
//   ONE METAPHOR, LE VERBE SANS PAPIERS: the infinitive carries no person
//   and no date, and the sentence supplies both. WHO: the main subject, or
//   someone else after faire, or the reader of a notice, or everyone. WHEN:
//   présent = at the same time or after, passé = before the other verb, the
//   main verb anchoring both. It is NOT « the infinitive is the to-form »:
//   rejected candidates and why, corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the infinitif passé outside feelings (après, pour, sans, the
//           declarative verbs, the passé that looks forward); pour + passé
//           for a reason; the one-subject rule where BOTH forms are right;
//           the verb + à / de / rien system and its meaning pairs; faire and
//           laisser + infinitif with their pronouns and the invariable fait;
//           the infinitive of notices, as subject, in questions, after nouns.
//   QUOTES  the reframes of lessons 16, 17, 18 and 22 in B1 and 5, 7 and 12
//           in B2, re-exported from their corpus files; rows of lessons 11,
//           16, 18, 22, 24, 26, 35 and 39 in B1 and 5, 7 and 23 in B2 reused BY
//           ID.
//   LEAVES  the subjunctive after avant que and sans que to lesson 16 in B1
//           (used, never re-taught); après que + indicatif to lesson 7 in
//           B2; se faire to lesson 18 in B1; the participle clause (« n'ayant
//           reçu aucune réponse ») to the participle lesson, which this file
//           does not cite by number; purpose clauses in full (pour que,
//           afin que) to a later lesson, named without a number.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English still authored on every
//   learner string (an `en` field or a final `EN: `), never on an answer.
//   tu in every instruction; characters use what the situation needs.
//   Every `say` is French. No spaced « ? » or « ! » in any scene or story
//   bubble. The scenario uses ’ only and embeds no corpus row. Other lessons
//   cited by trail position in words, never by raw id. Mission answer slots
//   are spread by `spreadMissions()`, the quiz by `spreadSlots()` (no text
//   changes, no `why` names a position), as b2.12 does. No wrong sentence is
//   ever a corpus row (corpus §A.7).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. TWELVE ACTS, 90 missions (the top of the 80 to 90 band). Act 11
//      bundles three small jobs (infinitive subject, deliberative question,
//      noun + de / à) rather than a thirteenth act. Keep, or split?
//   2. « APRÈS MANGER » is taught as a familiar fixed phrase, never as an
//      error in speech; written French and every key require « après avoir
//      mangé ». « Après dîner » is never used as an error for that reason.
//   3. LAISSÉ + INFINITIF. The lesson teaches « fait » as invariable before
//      an infinitive and only NAMES « laissé » as invariable too (1990
//      rectifications, agreement still seen); no key turns on it, and no
//      row puts a laissé with a preceding object. Enough?
//   4. BOTH FORMS ACCEPTED where both are correct: « je crois avoir compris »
//      and « je crois que j'ai compris », « sans payer » and « sans avoir
//      payé », « commencer à » and « commencer de ». Every type-in key lists
//      the equally correct alternative; the infinitive is presented as a
//      little more careful, never as the only right answer.
//   5. THE TASK (a formal complaint, 180 to 250 words) uses FIVE criteria
//      (tâche 3, cohérence 3, étendue 2, correction 2, registre 2 = 12), as
//      lessons 7 and 12 in B2, with the annotation block inside
//      `modelAnswer`. Letter formulas (« Dans l'attente de votre réponse »)
//      count as range only if an infinitive construction is also built.
//   6. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' is inert; kept.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  LECTURE_FORUM, LECTURE_MODELE,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A11,
  B116_REFRAME, B116_REFRAME_EN, B117_REFRAME, B117_REFRAME_EN, B118_REFRAME, B118_REFRAME_EN,
  B122_REFRAME, B122_REFRAME_EN, B205_REFRAME, B205_REFRAME_EN, B207_REFRAME, B207_REFRAME_EN,
  B212_REFRAME, B212_REFRAME_EN,
  SUBJ_INF_UNIT, PRONOMS_UNIT, PASSIF_UNIT, CEST_UNIT, SUBJ_PASSE_UNIT, FUT_ANT_UNIT, GERONDIF_UNIT,
  SUBJ_INF_REF, PRONOMS_REF, PASSIF_REF, CEST_REF, SUBJ_PASSE_REF, FUT_ANT_REF, GERONDIF_REF, NEXT_REF,
} from './constructions-infinitives-corpus.ts';
import { INFINITIVES_TERMS } from './constructions-infinitives-terms.ts';

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
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));
const OWN = new Set(ALL_ROWS.map((r) => r.id));
const OA = (n: number) => `fr.b1.opinions-et-avis.${n}`;

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.14: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.14: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.14: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
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

/** THE « IN A TEXT » BEAT that closes acts 3 to 11: one paragraph of 60 to
 *  120 words, with the answers behind the modal. Always the same title, so a
 *  learner and a reviewer see the loop. */
function dansUnTexte(
  id: string, frSub: string, text: string, questions: { q: string; a: string }[], rec: string, terms: string[],
): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true,
    title: 'Dans un texte', frSub, text, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: QUI AGIT, ET QUAND ?
 *
 *  Meet the infinitive as a verb with no person. The scene's wrong option is
 *  the English « I repaired it » for a job a garage did: without faire, the
 *  French says you did the work. NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const WRONG_MIRROR = {
  fr: "J'ai réparé le rétroviseur dans un garage.",
  ipa: '/ʒe ʁe.pa.ʁe lə ʁe.tʁo.vi.zœʁ dɑ̃.zœ̃ ɡa.ʁaʒ/',
  respell: '[zhay ray-pa-RAY | luh ray-troh-vee-ZUHR | dahⁿ-zuhⁿ ga-RAZH]',
  en: 'I repaired the wing mirror at a garage.',
};

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le retour de la voiture',
  frSub: 'Qui a réparé le rétroviseur',
  setting: { place: 'Une agence de location, gare Part-Dieu', city: 'Lyon', time: 'lundi, 8 h 45', ambience: 'un comptoir, des clés sur un tableau, des valises qui roulent' },
  beats: [
    {
      kind: 'narration',
      text: "Lyon, l'agence de location de la gare Part-Dieu. Tu rends la voiture louée pour le week-end. Samedi, un camion a arraché le rétroviseur gauche sur un parking, et tu as tout fait régler avant de revenir.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Karim, l’agent',
      fr: 'Bonjour. Je vois que le rétroviseur gauche a été changé.',
      en: 'Hello. I can see the left wing mirror has been replaced.',
      respell: '[bohⁿ-ZHOOR | zhuh vwa kuh luh ray-troh-vee-zuhr GOHSH | a ay-tay shahⁿ-ZHAY]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Oui. Samedi, un camion l'a arraché sur un parking à Grenoble.",
      en: 'Yes. On Saturday a lorry tore it off in a car park in Grenoble.',
      respell: '[WEE | sam-DEE | uhⁿ ka-MYOHⁿ la a-ra-SHAY | sür uhⁿ par-KEENG a gruh-NOBL]',
      stage: 'Karim tape tout dans le dossier. Ce qu’il écrit décidera qui paie.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Karim, l’agent',
      fr: 'Racontez-moi la suite, pour le dossier de l’assurance.',
      en: 'Tell me what happened next, for the insurance file.',
      respell: '[ra-kohⁿ-tay-MWA la SWEET | poor luh do-syay duh la-sü-RAHⁿS]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Quelle phrase dit que c’est un garage, et pas toi, qui a fait la réparation.',
      size: 'lg',
      options: [
        { fr: WRONG_MIRROR.fr, respell: WRONG_MIRROR.respell, en: WRONG_MIRROR.en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1200)), respell: rsOf(E(1200)), en: en(E(1200)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Karim hoche la tête : un garage agréé a fait le travail. Il te demande la facture, et l’assurance te rembourse.',
        breaks: 'Karim fronce les sourcils. Pour lui, tu as fait la réparation toi-même : il doit faire contrôler la pièce, et le contrôle sera à tes frais.',
      },
    },
    {
      kind: 'break',
      heading: 'Réparer, mais qui répare',
      body: "Réparer n'a pas de personne à lui. Sans faire, c'est toi qui répares. Avec faire, quelqu'un d'autre répare pour toi. C'est la phrase qui donne la personne. EN: With faire, somebody else does the repair; the sentence says who acts.",
      wrong: { fr: WRONG_MIRROR.fr, ipa: WRONG_MIRROR.ipa, respell: WRONG_MIRROR.respell, en: WRONG_MIRROR.en },
      right: { fr: fr(E(1200)), ipa: ipaOf(E(1200)), respell: rsOf(E(1200)), en: en(E(1200)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Karim te rend ta caution. Cette leçon t'apprend à faire dire à un infinitif qui agit et quand : après avoir, pour avoir, sans avoir, faire réparer, et l'infinitif des consignes, jusqu'à ta lettre de réclamation.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['qui', 'faire'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Dire quand, avec l’infinitif passé', s: 'Actes 2 à 5 : après avoir, avant de, pour avoir, sans avoir' },
    { t: 'Dire qui, avec un seul sujet ou avec faire', s: 'Actes 6, 8 et 9 : je crois avoir compris, je fais réparer, je la fais réparer' },
    { t: 'Choisir à, de ou rien, et l’infinitif seul', s: 'Actes 7, 10 et 11 : tenir à, oser, les consignes, Que faire ?' },
    { t: 'Écrire une réclamation de 200 mots', s: 'Acte 12 : ta lettre à une entreprise' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Trois mois pour un canapé',
  frSub: 'Lis, et cherche qui fait chaque infinitif',
  text: LECTURE_FORUM,
  glossary: [
    { word: 'menuisier', en: 'carpenter, joiner', note: 'Celui qui travaille le bois et répare les meubles.' },
    { word: 'gain de cause', en: 'won her case', note: 'Obtenir gain de cause : obtenir ce qu’on demandait.' },
    { word: 'en recommandé', en: 'by registered post', note: 'Une lettre dont la réception est prouvée.' },
  ],
  questions: [
    { q: 'Global : à quoi sert le message de Nadia ?', a: "À raconter une livraison ratée et à demander conseil aux autres consommateurs : que faire, à qui s'adresser." },
    { q: 'Détail : qui a réparé le pied du canapé ?', a: "Un menuisier du quartier : « j'ai fait réparer ». Nadia a payé, mais elle n'a pas fait la réparation elle-même." },
    { q: '« Le livreur est reparti sans avoir monté le canapé » : qu’est-ce qui n’a pas été fait ?', a: "La montée du canapé. Sans avoir monté : une étape qui aurait dû venir avant le départ du livreur." },
    { q: 'Inférence : pourquoi Nadia écrit-elle « je crois avoir fait tout ce qu’il fallait » ?', a: "Elle pense avoir suivi la bonne procédure, mais elle n'en est pas sûre : c'est pour ça qu'elle demande conseil. C'est elle qui croit, et elle qui a fait." },
    { q: 'Dans « Que faire si l’entreprise ne répond pas ? », qui doit agir ?', a: "Nadia, la personne qui écrit : la question à l'infinitif ne nomme personne, c'est la situation qui le dit." },
    { q: 'Position : que pense Marc de la situation ?', a: "Qu'il ne faut pas abandonner : il conseille une lettre en recommandé, avec les preuves, et rappelle que Nadia a le droit d'exiger une réponse." },
  ],
  audio: REC('rec-b2-14-forum'),
  say: REFRAME,
  terms: ['qui', 'passe'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Qui agit, et quand',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Qui agit ?', [
      it(E(1200), 'le garage répare'),
      it(E(1209), 'le technicien vient'),
      it(E(1206), 'je crois, j’ai compris'),
      it(E(1210), 'le lecteur vérifie'),
    ], chk('« J’ai dû faire venir un technicien. » Qui vient ?',
      ['le technicien', 'moi', 'on ne sait pas'], 0,
      'Faire donne l’action à quelqu’un d’autre : le technicien. EN: the technician comes.')),
    grp('Avant, ou pas encore ?', [
      it(E(1201), 'la commande, puis l’attente'),
      it(E(1211), 'l’arrivée, puis le carton'),
      it(E(1202), 'la montée n’a pas eu lieu'),
      it(E(1205), 'la tromperie, puis la condamnation'),
    ], chk('« Après être arrivée à la maison, elle a ouvert le carton. » Qu’est-ce qui vient d’abord ?',
      ['l’arrivée', 'l’ouverture du carton'], 0,
      'Être arrivée : l’infinitif passé dit que c’est fait avant. EN: the arrival comes first.')),
    ctl('La préposition', '« Je compte demander un remboursement. » Après compter…',
      ['rien', 'à', 'de'], 0,
      'Compter + infinitif, sans préposition : j’ai l’intention de. EN: no preposition.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['qui', 'passe'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où l’infinitif coûte cher',
  cases: [
    { situation: 'Tu expliques une réparation à ton assurance', fr: fr(E(1200)), en: en(E(1200)) },
    { situation: 'Tu mets les faits dans l’ordre d’une réclamation', fr: fr(E(1201)), en: en(E(1201)) },
    { situation: 'Tu signales ce qui n’a pas été fait', fr: fr(E(1202)), en: en(E(1202)) },
    { situation: 'Tu annonces ce que tu vas demander', fr: fr(E(1203)), en: en(E(1203)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['qui'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Qui', '« J’ai fait réparer le rétroviseur. » Qui a réparé ?',
    ['un garage', 'moi'], 0,
    'Avec faire, quelqu’un d’autre. EN: someone else did it.'),
  ctl('Quand', '« Après avoir commandé un canapé, j’ai attendu. » Qu’est-ce qui vient d’abord ?',
    ['la commande', 'l’attente'], 0,
    'Avoir commandé : fait avant l’attente. EN: the order came first.'),
  ctl('La phrase', 'La personne et le moment d’un infinitif, c’est…',
    ['la phrase qui les donne', 'la terminaison qui les donne'], 0,
    'L’infinitif n’a ni personne ni date. EN: the sentence gives both.'),
], ['qui']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Qui agit, et quand ?',
    opener: {
      line: "Tu as fait réparer, ou tu as réparé : ici tu découvres un verbe sans personne ni date, qui les prend dans la phrase. EN: You had it repaired, or you repaired it: here you meet a verb with no person and no date of its own.",
      imageRef: 'lessons/constructions-infinitives/act01.jpg',
    },
    sections: [],
    milestone: "Tu repères qui fait l'action d'un infinitif, et si elle vient avant ou pas encore. EN: You can tell who does an infinitive's action, and whether it came before.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: L'INFINITIF PASSÉ
 *
 *  Form, briefly: lesson 5 in B2 built « content d'être venu ». Here the
 *  form leaves the feelings: the auxiliary of the passé composé, agreement,
 *  a pronoun before avoir, and the passé that looks forward.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà, et la suite',
  frSub: 'Avoir ou être, puis le participe',
  hint: 'Quatre cartes. La dernière regarde vers demain.',
  audio: REC('rec-b2-14-passe'),
  say: REFRAME,
  terms: ['passe'],
  cards: [
    {
      head: 'Déjà vu', label: Cap(SUBJ_PASSE_REF),
      fr: fr('fr.b2.emotions.1365'), sub: rsOf('fr.b2.emotions.1365'),
      body: `« ${B205_REFRAME} » Un seul sujet, et tu disais déjà content d'être venu. Ici, l'infinitif passé quitte les sentiments. EN: ${B205_REFRAME_EN}`,
    },
    {
      head: 'L’auxiliaire du passé composé', label: 'avoir ou être',
      fr: 'avoir fini · être parti · s’être levé',
      sub: '[a-vwar fee-NEE] · [ehtr par-TEE] · [sehtr luh-VAY]',
      body: "Même choix qu'au passé composé : avoir pour la plupart des verbes, être pour partir, venir, arriver et les pronominaux. EN: the same auxiliary as in the passé composé.",
    },
    {
      head: 'L’accord avec être', label: 'celui qui agit',
      fr: fr(E(1223)), sub: rsOf(E(1223)),
      body: "L'infinitif n'a pas de sujet, mais la phrase dit qui est partie : elle. Avec être, le participe s'accorde avec cette personne. EN: with être, agree with the doer.",
    },
    {
      head: 'Avant, pas forcément hier', label: 'dans le futur',
      fr: fr(E(1226)), sub: rsOf(E(1226)),
      body: "L'infinitif passé ne dit pas le passé : il dit « avant l'autre verbe ». Ici, avant vendredi, qui n'est pas encore arrivé. EN: done before the other verb, even in the future.",
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-passe',
  title: 'Six verbes, deux auxiliaires',
  cols: ['Verbe', 'auxiliaire', 'infinitif passé'],
  rows: [
    { cells: ['finir', 'avoir', 'avoir fini'], say: fr(E(1226)),
      detail: { title: 'finir', body: "Avoir, comme j'ai fini. La grande majorité des verbes. EN: most verbs take avoir.", say: fr(E(1216)) } },
    { cells: ['prendre', 'avoir', 'avoir pris'], say: fr(E(1219)),
      detail: { title: 'prendre', body: "Le participe irrégulier du passé composé : pris, et donc avoir pris. EN: the irregular participle stays.", say: fr(E(1219)) } },
    { cells: ['partir', 'être', 'être parti'], say: fr(E(1223)),
      detail: { title: 'partir', body: "Être, comme je suis parti. Avec elle : être partie. EN: être, and agreement.", say: fr(E(1217)) } },
    { cells: ['venir', 'être', 'être venu'], say: fr('fr.b2.emotions.1365'),
      detail: { title: 'venir', body: "Être aussi pour venir, arriver, rentrer, rester, tomber. EN: the être verbs keep être.", say: fr(E(1220)) } },
    { cells: ['se lever', 'être', 's’être levé'], say: fr(E(1224)),
      detail: { title: 'se lever', body: "Un pronominal prend toujours être, et le pronom suit la personne : me, te, se, nous, vous. EN: pronominals take être.", say: fr(E(1218)) } },
    { cells: ['se tromper', 'être', 's’être trompé'], say: fr('fr.b2.emotions.1373'),
      detail: { title: 'se tromper', body: "Je reconnais m'être trompé : le pronom est celui de je. EN: the pronoun matches the doer.", say: fr(E(1221)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passe'],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis l’infinitif passé',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Avoir ou être', [
      it(E(1216), 'j’ai fini'),
      it(E(1219), 'j’ai pris'),
      it(E(1217), 'je suis parti'),
      it(E(1220), 'je suis venu'),
    ], chk('Arriver, à l’infinitif passé :',
      ['être arrivé', 'avoir arrivé'], 0,
      'Je suis arrivé, donc être arrivé. EN: être, as in the passé composé.')),
    grp('L’accord', [
      it(E(1223), 'elle : partie'),
      it(E(1224), 'les enfants : levés'),
      it(E(1225), 'elles : arrivées'),
      it(E(1229), 'nous : perdus'),
    ], chk('« Après s’être …, elles sont sorties. » (se préparer)',
      ['préparées', 'préparé', 'préparés'], 0,
      'Elles se sont préparées : l’accord suit elles. EN: agree with elles.')),
    ctl('Le pronom', '« Les documents ? Je les ai signés après … »',
      ['les avoir lus', 'avoir les lus'], 0,
      'Le pronom passe devant avoir, et lus s’accorde avec les. EN: the pronoun before avoir.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passe'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'L’infinitif passé à l’oreille',
  frSub: 'Huit phrases : qu’est-ce qui vient d’abord',
  lines: [
    ln(E(1222)), ln(E(1223)), ln(E(1225)), ln(E(1226)),
    ln(E(1229)), ln(E(1234)), ln(E(1235)), ln('fr.b2.emotions.1366'),
  ],
  questions: [
    { q: 'Première phrase : qu’ont-ils fait en premier ?', opts: ['ils ont mangé', 'ils ont marché'], correct: 0, why: 'Après avoir mangé : le repas vient d’abord. EN: they ate first.' },
    { q: 'Deuxième phrase : qu’a-t-elle regretté ?', opts: ['sa décision', 'son retard'], correct: 0, why: 'Elle est partie, puis elle a regretté sa décision. EN: her decision.' },
    { q: 'Quatrième phrase : quand faut-il avoir fini le dossier ?', opts: ['avant vendredi', 'avant lundi', 'hier'], correct: 0, why: 'Avant vendredi : l’infinitif passé regarde vers demain. EN: before Friday.' },
    { q: 'Cinquième phrase : qu’ont-ils fait après s’être perdus ?', opts: ['ils ont demandé leur chemin', 'ils sont rentrés'], correct: 0, why: 'Nous avons demandé notre chemin. EN: they asked the way.' },
    { q: 'Septième phrase : quand seras-tu payé ?', opts: ['quand le travail sera rendu', 'avant de commencer'], correct: 0, why: 'Après avoir rendu le travail. EN: once the work is handed in.' },
  ],
  audio: REC('rec-b2-14-passe-ecoute'),
  say: REFRAME,
  terms: ['passe'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de forme',
  errors: [
    {
      wrong: 'Tu seras payé après rendre le travail.',
      right: fr(E(1235)),
      why: "Normal : l'anglais dit after handing in, sans marque de temps. Mais après veut l'infinitif passé : le travail est rendu avant la paie, même dans le futur. Seuls après manger, après dîner restent, en tournures familières. EN: après takes the past infinitive.",
    },
    {
      wrong: 'Après avoir parti, elle a regretté sa décision.',
      right: fr(E(1223)),
      why: "Normal : avoir est l'auxiliaire le plus fréquent. Mais partir prend être au passé composé, donc à l'infinitif passé aussi. EN: same auxiliary as the passé composé.",
    },
    {
      wrong: "Après s'être levé, les enfants ont pris leur petit-déjeuner.",
      right: fr(E(1224)),
      why: "Normal : l'infinitif semble n'avoir personne avec qui s'accorder. Mais ce sont les enfants qui se sont levés : levés. EN: agree with whoever acts.",
    },
    {
      wrong: 'Les documents ? Je les ai signés après avoir les lus.',
      right: fr(E(1228)),
      why: "Normal : en anglais, them vient après reading. En français, le pronom se place devant avoir, comme devant un verbe conjugué. EN: the pronoun goes before avoir.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passe'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Avoir ou être, et les accords',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['passe'],
};

const A2_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a2-flash',
  layer: 'core',
  title: 'Huit formes à avoir en bouche',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'after eating', back: 'après avoir mangé', say: fr(E(1222)) },
    { front: 'after leaving (she)', back: 'après être partie', say: fr(E(1223)) },
    { front: 'once they were up', back: 'après s’être levés', say: fr(E(1224)) },
    { front: 'glad to have arrived (they, f.)', back: 'contentes d’être arrivées', say: fr(E(1225)) },
    { front: 'to have finished by Friday', back: 'avoir fini avant vendredi', say: fr(E(1226)) },
    { front: 'after reading them', back: 'après les avoir lus', say: fr(E(1228)) },
    { front: 'thank you for waiting', back: 'merci de m’avoir attendu', say: fr(E(1234)) },
    { front: 'after getting lost (we)', back: 'après nous être perdus', say: fr(E(1229)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passe'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('L’auxiliaire', 'Pour l’infinitif passé, tu choisis avoir ou être…',
    ['comme au passé composé', 'toujours avoir', 'toujours être'], 0,
    'Le même auxiliaire qu’au passé composé. EN: as in the passé composé.'),
  ctl('L’accord', '« Après être …, elle a regretté sa décision. »',
    ['partie', 'parti'], 0,
    'Être, et c’est elle qui part : partie. EN: agree with elle.'),
  ctl('Le moment', '« Il faut avoir fini avant vendredi. » L’action finie est…',
    ['dans le futur, avant vendredi', 'dans le passé'], 0,
    'Avant l’autre moment, même à venir. EN: before Friday, still ahead.'),
], ['passe']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'L’infinitif passé',
    opener: {
      line: "Avoir fini, être parti, s'être levé : ici tu construis la forme qui dit « déjà fait », même quand c'est pour demain. EN: Avoir fini, être parti, s'être levé: here you build the form that says already done, even for tomorrow.",
      imageRef: 'lessons/constructions-infinitives/act02.jpg',
    },
    sections: [],
    milestone: "Tu construis l'infinitif passé avec le bon auxiliaire, l'accord et le pronom à sa place. EN: You can build the past infinitive with its auxiliary, agreement and pronoun.",
    estScreens: 38, restPoints: ['a2-table', 'a2-ecoute'],
  },
  sections: [A2_RAPPEL, A2_TABLE, A2_CONSTRUIRE, A2_ECOUTE, A2_ERREURS, A2_DICTEE, A2_FLASH, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: APRÈS ET AVANT DE
 *
 *  Meaning in contrast: après + passé (already done) against avant de +
 *  présent (not yet), avant d'avoir fini (not before it is done), and the
 *  two-subject forms of lessons 16 in B1 and 7 in B2. The subject of après
 *  avoir is the main subject: « après avoir ouvert le colis, les dégâts... »
 *  hangs.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'Les consignes d’Inès',
  frSub: 'La veille d’un départ',
  setting: 'Lausanne. Inès part en vacances demain matin et laisse l’appartement à Marco, son colocataire. Elle lui donne ses consignes à voix haute, et une amie prof de français l’écoute.',
  bubbles: [
    { from: 'narrator', fr: 'Inès fait ses valises en parlant. Son amie Léa relève chaque infinitif.', en: 'Inès packs as she talks. Her friend Léa picks out every infinitive.' },
    { from: 'user', fr: 'Avant de partir, je vais vider le frigo.', en: 'Before I leave, I am going to empty the fridge.' },
    { from: 'coach', fr: 'Avant de, puis le présent : le départ n’a pas encore eu lieu.', en: 'Avant de, then the present: the departure has not happened yet.', warn: 'Avant de + présent' },
    { from: 'user', fr: 'Et après avoir fermé les volets, je te laisserai les clés.', en: 'And after closing the shutters, I will leave you the keys.' },
    { from: 'coach', fr: 'Après, puis le passé : les volets seront fermés avant les clés, même demain.', en: 'Après, then the past: the shutters will be shut before the keys, even tomorrow.', warn: 'Après + passé' },
    { from: 'user', fr: 'Toi, ne sors pas avant d’avoir arrosé les plantes.', en: 'You, do not go out before you have watered the plants.' },
    { from: 'coach', fr: 'Avant d’avoir arrosé : pas de sortie tant que ce n’est pas fait.', en: 'Avant d’avoir arrosé: no going out until it is done.', warn: 'Avant d’avoir fini' },
    { from: 'user', fr: 'Et quand je serai partie, invite qui tu veux.', en: 'And once I am gone, invite anyone you like.' },
    { from: 'coach', fr: `Deux personnes : quand, ou après que avec l’indicatif, comme dans ${FUT_ANT_REF}.`, en: 'Two people: quand, or après que with the indicative.', warn: 'Deux sujets' },
  ],
  closing: { fr: 'Avant de : pas encore. Après avoir : déjà fait. Avant d’avoir : pas avant que ce soit fait.', en: 'Avant de: not yet. Après avoir: already done. Avant d’avoir: not until it is done.' },
  audio: REC('rec-b2-14-ines'),
  say: REFRAME,
  terms: ['apres'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-passe',
  title: 'Déjà fait, ou pas encore',
  frSub: 'Après, avant de, et les deux sujets',
  hint: 'Quatre cartes. Les deux dernières gardent une conjonction.',
  audio: REC('rec-b2-14-apres'),
  say: REFRAME,
  terms: ['apres', 'qui'],
  cards: [
    {
      head: 'Après : déjà fait', label: 'après + passé',
      fr: fr(E(1242)), sub: rsOf(E(1242)),
      body: "La signature est finie quand les clés arrivent. Après manger ne vit que dans quelques tournures familières ; à l'écrit, après avoir mangé. EN: après takes the past infinitive.",
    },
    {
      head: 'Avant de : pas encore', label: 'avant de + présent',
      fr: fr(E(1238)), sub: rsOf(E(1238)),
      body: "Le départ n'a pas eu lieu. Avant d'avoir fini se dit aussi, pour « pas avant que ce soit fait » : ne pars pas avant d'avoir fini tes devoirs. EN: not yet; or not until it is done.",
    },
    {
      head: 'Deux sujets, avant', label: Cap(SUBJ_INF_REF),
      fr: fr(OA(1499)), sub: rsOf(OA(1499)),
      body: `« ${B116_REFRAME} » Elle range, les invités arrivent : avant que + subjonctif. EN: two subjects, avant que.`,
    },
    {
      head: 'Deux sujets, après', label: Cap(FUT_ANT_REF),
      fr: fr('fr.b2.projets-et-futur.1883'), sub: rsOf('fr.b2.projets-et-futur.1883'),
      body: "Tu pars, je ferme : deux personnes, donc après que, avec l'indicatif. Avec une seule personne, après avoir. EN: two subjects, après que plus the indicative.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Après ou avant de',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Après : c’est fait', [
      it(E(1240), 'le dîner, puis le film'),
      it(E(1245), 'l’attente, puis le départ'),
      it(E(1247), 'les lumières, puis le lit'),
      it('fr.b2.opinions-et-avis.1945', 'le vote, puis la fin'),
    ], chk('« Après … une heure, nous sommes repartis. »',
      ['avoir attendu', 'attendre', 'attendu'], 0,
      'Après + infinitif passé : avoir attendu. EN: après avoir attendu.')),
    grp('Avant de : pas encore', [
      it(E(1238), 'le départ est à venir'),
      it(E(1244), 'la signature est à venir'),
      it(OA(1498), 'le coucher est à venir'),
      it(E(1241), 'pas de départ avant la fin'),
    ], chk('« Lis bien les conditions … » (la signature n’a pas eu lieu)',
      ['avant de signer', 'après avoir signé'], 0,
      'Pas encore : avant de + présent. EN: avant de signer.')),
    ctl('Qui agit', '« Après avoir ouvert le colis, … »',
      ['j’ai constaté les dégâts', 'les dégâts étaient visibles'], 0,
      'Celui qui ouvre doit être le sujet : je. EN: the main subject does the opening.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['apres', 'qui'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Les formes que l’anglais souffle',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Après : passé. Avant de : présent',
    body: "Après prend l'infinitif passé, avant de l'infinitif présent. Le sujet du verbe principal fait les deux actions ; s'il y a deux personnes, avant que ou après que. EN: après + past, avant de + present, one subject.",
  },
  cards: [
    trap(E(1248), 'après + présent', "Après ouvrir le colis, j'ai constaté les dégâts.", 'Le colis est ouvert avant : après avoir ouvert. EN: après avoir ouvert.'),
    trap(E(1249), 'avant de + passé', 'Avant de avoir validé la commande, compare les prix.', 'Pas encore fait : avant de valider. EN: avant de valider.'),
    trap(E(1243), 'l’accord', "Après s'être excusé, la directrice a proposé un geste commercial.", 'C’est la directrice qui s’excuse : excusée. EN: agree with her.'),
    trap(E(1239), 'l’auxiliaire', "Après avoir parti, il s'est rendu compte qu'il avait oublié ses clés.", 'Partir prend être : après être parti. EN: être parti.'),
    trap(E(1246), 'le sujet', "Après avoir parlé au propriétaire, tu auras mon appel.", 'Celui qui parle doit être le sujet : je t’appellerai. EN: I am the one who speaks.'),
    trap(E(1252), 'l’accord pluriel', 'Après être passé à la poste, nous sommes rentrés.', 'Nous : passés. EN: agree with nous.'),
  ],
  drill: [
    { promptSay: 'Après … le bail, nous avons reçu les clés.', opts: ['avoir signé', 'signer'], correct: 0 },
    { promptSay: 'Avant de …, vérifie que les fenêtres sont fermées.', opts: ['partir', 'être parti'], correct: 0 },
    { promptSay: 'Ne pars pas avant d’… fini tes devoirs.', opts: ['avoir', 'être'], correct: 0 },
    { promptSay: 'Après être …, elle a appelé sa mère.', opts: ['rentré', 'rentrée'], correct: 1 },
    { promptSay: 'Elle s’est couchée après … toutes les lumières.', opts: ['éteindre', 'avoir éteint'], correct: 1 },
    { promptSay: '… tu seras parti, je fermerai la maison.', opts: ['Après que', 'Après'], correct: 0 },
    { promptSay: 'Elle range la cuisine avant que les invités …', opts: ['arrivent', 'arriver'], correct: 0 },
    { promptSay: 'Après … une heure, nous sommes repartis.', opts: ['attendre', 'avoir attendu'], correct: 1 },
  ],
  steps: STEPS('Après : passé. Avant de : présent', 'Ce que l’anglais souffle'),
  audio: REC('rec-b2-14-piege-apres'),
  say: REFRAME,
  terms: ['apres', 'qui'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq phrases de la vie de tous les jours',
  frSub: 'Le moment, et la personne',
  examples: [
    ex(E(1246), 'après avoir parlé, et l’appel viendra ensuite : le futur ne change rien'),
    ex(E(1251), 'avant d’avoir rendu : pas de sortie tant que la copie n’est pas rendue'),
    ex(E(1243), 'la directrice s’excuse, puis propose : excusée'),
    ex(E(1252), 'nous : passés, rentrés'),
    ex(OA(1498), 'avant de se coucher : elle range et elle se couche'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['apres'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Compléter : le déménagement de Lucas', TEXTE_A3, [
  { q: 'Complète les deux premiers : après (prendre) un café ; avant de (partir).', a: "Après avoir pris un café : le café est bu avant. Avant de partir : le départ n'a pas encore eu lieu." },
  { q: 'Complète : après (rendre) les clés ; après (arriver), ma sœur et moi…', a: "Après avoir rendu les clés. Après être arrivés : arriver prend être, et l'accord suit ma sœur et moi, donc un pluriel." },
  { q: 'Complète : après nous (installer) ; avant de (se coucher).', a: "Après nous être installés : un pronominal, être, et nous. Avant de me coucher : le pronom est celui de je." },
  { q: 'Pourquoi pas « avant de m’être couché » à la fin ?', a: "Parce que le coucher vient après la promesse : avant de + présent. Avant de m'être couché dirait « pas avant que ce soit fait », ce qui n'a pas de sens ici." },
], 'rec-b2-14-texte-a3', ['apres']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Après', '« … le colis, j’ai constaté les dégâts. »',
    ['Après avoir ouvert', 'Après ouvrir', 'Avant d’ouvrir'], 0,
    'Le colis est ouvert d’abord. EN: après avoir ouvert.'),
  ctl('Avant de', '« Compare les prix avant de … la commande. »',
    ['valider', 'avoir validé'], 0,
    'Pas encore fait : avant de valider. EN: avant de valider.'),
  ctl('Deux sujets', '« … tu seras parti, je fermerai la maison. »',
    ['Après que', 'Après être'], 0,
    'Tu pars, je ferme : deux sujets, après que. EN: two subjects.'),
], ['apres']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Après et avant de',
    opener: {
      line: "Après avoir signé, avant de partir : ici tu places une action avant ou après l'autre, avec un seul sujet pour les deux. EN: After signing, before leaving: here you place one action before or after the other, with one subject for both.",
      imageRef: 'lessons/constructions-infinitives/act03.jpg',
    },
    sections: [],
    milestone: "Tu dis après avoir, avant de et avant d'avoir fini, et tu passes à avant que ou après que quand deux personnes agissent. EN: You can order two actions with one subject, and switch to a clause for two.",
    estScreens: 36, restPoints: ['a3-construire', 'a3-piege'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_PIEGE, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: POUR : LE BUT OU LA FAUTE
 *
 *  Meaning in contrast: pour + présent (what you aim at) against pour +
 *  passé (what you already did, and are judged for). The verbs that judge:
 *  sanctionner, condamner, féliciter, récompenser; and merci de, s'excuser
 *  de, which take de, not pour.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Les brèves du jour',
  frSub: 'Neuf phrases : un but, ou une raison',
  lines: [
    ln(E(1255)), ln(E(1256)), ln(E(1258)), ln(E(1260)), ln(E(1257)),
    ln(E(1264)), ln(E(1263)), ln(E(1268)), ln('fr.b2.maison.021'),
  ],
  questions: [
    { q: 'Première phrase : pourquoi a-t-il été sanctionné ?', opts: ['il avait menti', 'il voulait un poste'], correct: 0, why: 'Pour avoir menti : la faute, déjà commise. EN: because he lied.' },
    { q: 'Deuxième phrase : pourquoi a-t-il menti ?', opts: ['pour obtenir un poste', 'parce qu’on l’avait puni'], correct: 0, why: 'Pour obtenir : le but, pas encore atteint. EN: to get the job.' },
    { q: 'Quatrième phrase : qu’a fait la société ?', opts: ['elle a pollué une rivière', 'elle a nettoyé une rivière'], correct: 0, why: 'Condamnée pour avoir pollué. EN: it polluted the river.' },
    { q: 'Sixième phrase : la médaille récompense…', opts: ['un sauvetage déjà fait', 'un sauvetage à venir'], correct: 0, why: 'Pour avoir sauvé : c’est fait. EN: a rescue already made.' },
    { q: 'Dernière phrase : de quoi accuse-t-on l’agence ?', opts: ['d’avoir caché des défauts', 'de vouloir vendre trop cher'], correct: 0, why: 'Pour avoir dissimulé des vices cachés. EN: of hiding defects.' },
  ],
  audio: REC('rec-b2-14-pour-ecoute'),
  say: REFRAME,
  terms: ['pour'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Pour, deux directions',
  frSub: 'Vers l’avant, ou vers l’arrière',
  hint: 'Quatre cartes. La dernière n’a pas de pour.',
  audio: REC('rec-b2-14-pour'),
  say: REFRAME,
  terms: ['pour'],
  cards: [
    {
      head: 'Le but', label: 'pour + présent',
      fr: fr(E(1256)), sub: rsOf(E(1256)),
      body: "Le poste, il ne l'a pas encore : pour obtenir regarde devant. Même idée qu'afin de, plus soutenu. EN: pour + present infinitive looks ahead, to a purpose.",
    },
    {
      head: 'La raison', label: 'pour + passé',
      fr: fr(E(1255)), sub: rsOf(E(1255)),
      body: "Le mensonge est déjà fait, et c'est pour lui qu'on le sanctionne : pour avoir menti regarde en arrière. EN: pour + past infinitive looks back, to a reason.",
    },
    {
      head: 'Les verbes qui jugent', label: 'sanction, mérite',
      fr: fr(E(1257)), sub: rsOf(E(1257)),
      body: "Sanctionner, condamner, arrêter, punir ; féliciter, récompenser. Ce qu'on juge est déjà fait : pour + infinitif passé. EN: verbs of blame and praise take pour + past.",
    },
    {
      head: 'Merci de, s’excuser de', label: 'sans pour',
      fr: fr(E(1261)), sub: rsOf(E(1261)),
      body: "Merci de m'avoir aidé, je m'excuse d'être en retard : de, puis l'infinitif. Merci pour se garde pour un nom : merci pour votre aide. EN: merci de and s'excuser de take de before an infinitive.",
    },
  ],
};

const A4_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-trier',
  layer: 'core',
  size: 'lg',
  title: 'Un but ou une raison',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le but : pas encore', [
      it(E(1259), 'signaler, c’est ce que je veux faire'),
      it(E(1263), 'obtenir un avoir, c’est le but'),
      it(E(1266), 'arriver à l’heure, c’est le but'),
      it(E(1256), 'obtenir le poste, c’est le but'),
    ], chk('« J’ai pris un taxi pour … à l’heure. »',
      ['arriver', 'être arrivé'], 0,
      'Un but, pas encore atteint : pour + présent. EN: arriver.')),
    grp('La raison : déjà fait', [
      it(E(1258), 'il a brûlé un feu'),
      it(E(1260), 'elle a pollué'),
      it(E(1264), 'elle a sauvé un enfant'),
      it(E(1268), 'il a laissé le colis dehors'),
    ], chk('« Elle a été félicitée pour … le portefeuille. »',
      ['avoir retrouvé', 'retrouver'], 0,
      'Un mérite déjà acquis : pour avoir retrouvé. EN: avoir retrouvé.')),
    ctl('Sans pour', '« … de nous avoir aidés à déménager. »',
      ['Merci', 'Merci pour'], 0,
      'Merci de + infinitif ; merci pour + nom. EN: merci de before an infinitive.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pour'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de pour',
  errors: [
    {
      wrong: 'Il a été sanctionné pour mentir.',
      right: fr(E(1255)),
      why: "Normal : l'anglais dit for lying, sans temps. Mais pour mentir serait un but : on l'aurait sanctionné pour qu'il mente. EN: the fault is done, so pour avoir menti.",
    },
    {
      wrong: "J'ai pris un taxi pour être arrivé à l'heure.",
      right: fr(E(1266)),
      why: "Normal : l'arrivée est au passé dans ton récit. Mais au moment du taxi, elle est encore à venir : c'est un but. EN: a purpose takes the present infinitive.",
    },
    {
      wrong: 'Il a perdu son permis pour rouler trop vite.',
      right: fr(E(1265)),
      why: "Normal : en anglais, for speeding suffit. En français, pour rouler dirait le but du permis. La faute est faite : pour avoir roulé. EN: the fault needs the past.",
    },
    {
      wrong: "Il s'est excusé pour arriver en retard.",
      right: fr(E(1262)),
      why: "Normal : apologise for appelle pour. Mais s'excuser se construit avec de, et le retard est déjà là : d'être arrivé. EN: s'excuser de, plus the past.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pour'],
};

const A4_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a4-hacks',
  layer: 'core',
  sheetId: 'sheet-passe',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Remplace pour par afin de. Si la phrase tient, c’est un but : infinitif présent.', why: "J'ai pris un taxi afin d'arriver à l'heure : ça tient. Sanctionné afin de mentir : non. EN: test with afin de." },
    { hack: 'Remplace pour par parce qu’il a. Si la phrase tient, c’est une raison : infinitif passé.', why: "Sanctionné parce qu'il a menti : ça tient, donc pour avoir menti. EN: test with parce qu'il a." },
    { hack: 'Un verbe qui juge (sanctionner, féliciter, condamner) regarde presque toujours en arrière.', why: "On juge ce qui est fait. EN: blame and praise look back." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pour'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Lire : une brève de Genève', TEXTE_A4, [
  { q: 'Récompensé pour avoir évité un accident : un but ou une raison ?', a: "Une raison : l'accident a déjà été évité. Pour + infinitif passé, après un verbe qui juge (récompenser)." },
  { q: 'Pour éviter un cycliste, il a freiné : un but ou une raison ?', a: "Un but : il freine afin d'éviter le cycliste. Pour + infinitif présent." },
  { q: 'Félicité pour avoir gardé son calme ; porter un gilet pour être vus : lequel regarde devant ?', a: "Pour être vus : un but, pour la nuit à venir. Pour avoir gardé son calme regarde en arrière : une raison." },
  { q: 'Et l’amende du cycliste ?', a: "Pour avoir brûlé un feu rouge : la faute est faite, c'est la raison de l'amende." },
], 'rec-b2-14-texte-a4', ['pour']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le but', '« Je vous écris pour … un problème. »',
    ['signaler', 'avoir signalé'], 0,
    'Le but de la lettre : signaler. EN: a purpose.'),
  ctl('La raison', '« Il a été condamné pour … la rivière. »',
    ['avoir pollué', 'polluer'], 0,
    'La faute est faite : avoir pollué. EN: a reason.'),
  ctl('Sans pour', '« Il s’est excusé … arrivé en retard. »',
    ['d’être', 'pour'], 0,
    'S’excuser de, et l’infinitif passé. EN: s’excuser d’être.'),
], ['pour']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Pour : le but ou la faute',
    opener: {
      line: "Pour obtenir le poste, il a menti ; pour avoir menti, il a été sanctionné : ici tu fais regarder pour devant ou derrière. EN: He lied to get the job and was disciplined for lying: here you make pour look ahead or back.",
      imageRef: 'lessons/constructions-infinitives/act04.jpg',
    },
    sections: [],
    milestone: "Tu dis un but avec pour + présent et une raison avec pour + passé, et tu gardes merci de et s'excuser de. EN: You can say a purpose or a reason with pour.",
    estScreens: 34, restPoints: ['a4-cartes', 'a4-erreurs'],
  },
  sections: [A4_ECOUTE, A4_CARTES, A4_TRIER, A4_ERREURS, A4_HACKS, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: SANS
 *
 *  Past lesson 16 in B1 (sans / sans que by the subject count): the passé
 *  after sans for the step that should have come first, and where rien and
 *  personne go.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Au guichet de la banque',
  frSub: 'Débitée deux fois',
  setting: 'Dakar, une agence bancaire du Plateau. Awa a payé deux fois une commande en ligne qu’elle n’a jamais reçue. Mme Diop, la conseillère, prend des notes.',
  bubbles: [
    { from: 'narrator', fr: 'Awa a préparé ses relevés. Elle veut que tout soit clair.', en: 'Awa has brought her statements. She wants everything to be clear.' },
    { from: 'user', fr: 'J’ai été débitée deux fois sans avoir rien reçu.', en: 'I was charged twice without receiving anything.' },
    { from: 'coach', fr: 'Sans avoir reçu : ce qui devait venir avant le paiement n’est jamais venu.', en: 'Sans avoir reçu: what should have come before the payment never came.', warn: 'Sans + passé' },
    { from: 'user', fr: 'Et le vendeur a fermé son site sans que personne soit prévenu.', en: 'And the seller shut down his site without anyone being told.' },
    { from: 'coach', fr: 'Le vendeur ferme, personne n’est prévenu : deux sujets, sans que et le subjonctif.', en: 'The seller shuts down, nobody is told: two subjects, sans que and the subjunctive.', warn: 'Deux sujets' },
    { from: 'user', fr: 'J’ai payé sans vérifier l’adresse du site, je le reconnais.', en: 'I paid without checking the website address, I admit it.' },
    { from: 'coach', fr: 'Sans vérifier, ou sans avoir vérifié : un seul sujet, les deux se disent.', en: 'Sans vérifier or sans avoir vérifié: one subject, both are right.', warn: 'Présent ou passé' },
    { from: 'user', fr: 'Je ne partirai pas sans avoir rempli la réclamation.', en: 'I will not leave without filling in the claim.' },
    { from: 'coach', fr: 'Sans avoir rempli : pas de départ tant que ce n’est pas fait.', en: 'Sans avoir rempli: no leaving until it is done.', warn: 'Sans avoir fini' },
  ],
  closing: { fr: 'Un sujet : sans + infinitif, présent ou passé. Deux sujets : sans que + subjonctif.', en: 'One subject: sans + infinitive, present or past. Two subjects: sans que + subjunctive.' },
  audio: REC('rec-b2-14-awa'),
  say: REFRAME,
  terms: ['sans'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Sans, un pas plus loin',
  frSub: 'Le passé, et ce qui manque',
  hint: 'Quatre cartes. La première vient du B1.',
  audio: REC('rec-b2-14-sans'),
  say: REFRAME,
  terms: ['sans'],
  cards: [
    {
      head: 'Déjà vu', label: Cap(SUBJ_INF_REF),
      fr: fr(OA(1514)), sub: rsOf(OA(1514)),
      body: "Sans + infinitif avec un seul sujet, sans que + subjonctif avec deux. Ici, l'infinitif passé s'ajoute : sans avoir payé. EN: sans with one subject, sans que with two.",
    },
    {
      head: 'L’étape qui manque', label: 'sans + passé',
      fr: fr(E(1271)), sub: rsOf(E(1271)),
      body: "Le paiement devait venir avant le départ, et il n'a pas eu lieu. Sans payer se dit aussi ; le passé insiste sur l'étape manquée. EN: the step that should have come first.",
    },
    {
      head: 'Deux sujets', label: 'sans que',
      fr: fr(E(1275)), sub: rsOf(E(1275)),
      body: "Nous partons, les enfants ne voient rien : sans que + subjonctif. Avec un seul sujet, jamais sans que. EN: two subjects, sans que.",
    },
    {
      head: 'Rien, personne', label: 'la place',
      fr: fr(E(1277)), sub: rsOf(E(1277)),
      body: "Rien se met entre avoir et le participe, ou devant avoir : sans avoir rien reçu, sans rien avoir reçu. Personne va après : sans rencontrer personne. EN: rien inside, personne after.",
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Sans ou sans que',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Un seul sujet', [
      it(E(1272), 'elle entre, elle ne frappe pas'),
      it(E(1276), 'tu juges, tu n’as pas lu'),
      it(E(1279), 'il critique, il n’a pas vu'),
      it(E(1283), 'tu signes, tu n’as pas relu'),
    ], chk('« Il est parti sans … » (il n’a pas payé)',
      ['avoir payé', 'qu’il ait payé'], 0,
      'Un seul sujet : sans + infinitif. EN: sans avoir payé.')),
    grp('Deux sujets', [
      it(E(1274), 'ils annulent, je ne suis pas prévenue'),
      it(E(1275), 'nous partons, les enfants ne voient rien'),
      it(OA(1515), 'il sort, personne n’entend'),
    ], chk('« Nous sommes partis sans que les enfants … »',
      ['s’en aperçoivent', 's’en apercevoir'], 0,
      'Après sans que, le subjonctif. EN: the subjunctive.')),
    ctl('Rien', '« J’ai été débité deux fois sans avoir … reçu. »',
      ['rien', 'personne', 'pas'], 0,
      'Rien entre avoir et le participe. EN: sans avoir rien reçu.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sans'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Six façons de rater sans',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Un sujet : sans + infinitif. Deux : sans que',
    body: "Sans prend l'infinitif, présent ou passé, quand la même personne agit. Si une autre personne entre, sans que + subjonctif. Personne se place après l'infinitif. EN: one subject, sans + infinitive; two, sans que.",
  },
  cards: [
    trap(E(1273), 'sans que, un sujet', "Ils ont annulé ma commande sans qu'ils m'aient prévenue.", 'Eux annulent, eux ne préviennent pas : sans m’avoir prévenue. EN: one subject.'),
    trap(E(1275), 'deux sujets', "Nous sommes partis sans les enfants s'en apercevoir.", 'Les enfants sont un autre sujet : sans que. EN: two subjects.'),
    trap(E(1276), 'un verbe conjugué', 'Tu ne peux pas juger sans tu as lu le rapport.', 'Après sans, un infinitif : sans avoir lu. EN: sans + infinitive.'),
    trap(E(1278), 'personne', 'Il a traversé la ville sans personne rencontrer.', 'Personne après l’infinitif. EN: sans rencontrer personne.'),
    trap(E(1272), 'la forme en -ant', 'Elle est entrée sans frappant.', 'Sans prend l’infinitif, jamais la forme en -ant. EN: sans frapper.'),
    trap(E(1283), 'le participe', 'Ne signe rien sans avoir tout relire.', 'Avoir, puis le participe : relu. EN: avoir relu.'),
  ],
  drill: [
    { promptSay: 'Il est parti sans avoir …', opts: ['payé', 'payer'], correct: 0 },
    { promptSay: 'Ils ont annulé ma commande sans que je … prévenue.', opts: ['suis', 'sois'], correct: 1 },
    { promptSay: 'Elle a quitté la réunion sans … un mot.', opts: ['dire', 'disant'], correct: 0 },
    { promptSay: 'Nous sommes partis … les enfants s’en aperçoivent.', opts: ['sans', 'sans que'], correct: 1 },
    { promptSay: 'Il a traversé la ville sans … personne.', opts: ['rencontrer', 'rencontrant'], correct: 0 },
    { promptSay: 'Tu ne peux pas juger sans … lu le rapport.', opts: ['avoir', 'être'], correct: 0 },
    { promptSay: 'Il est sorti sans que personne l’…', opts: ['entend', 'entende'], correct: 1 },
    { promptSay: 'Ne signe rien sans avoir tout …', opts: ['relire', 'relu'], correct: 1 },
  ],
  steps: STEPS('Un sujet : sans + infinitif. Deux : sans que', 'Ce que la main écrit trop vite'),
  audio: REC('rec-b2-14-piege-sans'),
  say: REFRAME,
  terms: ['sans'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Sans dans une réclamation',
  frSub: 'Ce qui n’a pas été fait',
  examples: [
    ex(E(1273), 'eux annulent, eux ne préviennent pas : un seul sujet'),
    ex(E(1274), 'la même plainte, avec deux sujets : sans que je sois'),
    ex(E(1277), 'rien entre avoir et reçu'),
    ex(E(1281), 'la demande aurait dû venir avant la facture'),
    ex(E(1279), 'en tête de phrase, avec une virgule'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sans'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Compléter : le courriel de Samia', TEXTE_A5, [
  { q: 'Complète : sans (prévenir) les locataires ; sans que je (être) là.', a: "Sans prévenir ou sans avoir prévenu les locataires : l'entreprise vient et ne prévient pas, un seul sujet. Sans que je sois là : l'entreprise entre, moi je suis absente, deux sujets." },
  { q: 'Complète : sans (protéger) les meubles ; sans (nettoyer).', a: "Sans protéger ou sans avoir protégé les meubles ; sans nettoyer ou sans avoir nettoyé. Les ouvriers font tout : un seul sujet. Le passé insiste sur ce qui manquait." },
  { q: 'Complète : sans que celui-ci (donner) son accord.', a: "Sans que celui-ci donne son accord, ou ait donné : personne entre, le locataire donne, deux sujets, donc le subjonctif." },
  { q: 'Complète la fin : je ne signerai rien sans (voir) le devis.', a: "Sans avoir vu le devis, ou sans voir : c'est moi qui signe et moi qui dois voir. Le passé dit que le devis doit être vu avant." },
], 'rec-b2-14-texte-a5', ['sans']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Un sujet', '« Il est parti sans … . »',
    ['avoir payé', 'qu’il ait payé'], 0,
    'Lui part, lui ne paie pas : sans + infinitif. EN: one subject.'),
  ctl('Deux sujets', '« Il est sorti … personne l’entende. »',
    ['sans que', 'sans'], 0,
    'Lui sort, personne n’entend : sans que. EN: two subjects.'),
  ctl('Rien', 'Où se place rien ?',
    ['sans avoir rien reçu', 'sans avoir reçu rien'], 0,
    'Rien avant le participe. EN: rien before reçu.'),
], ['sans']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Sans',
    opener: {
      line: "Débitée deux fois sans avoir rien reçu : ici tu dis ce qui n'a pas été fait, et qui ne l'a pas fait. EN: Charged twice without receiving anything: here you say what was not done, and who did not do it.",
      imageRef: 'lessons/constructions-infinitives/act05.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre sans + infinitif, présent ou passé, et sans que + subjonctif, et tu places rien et personne. EN: You can choose sans or sans que and place rien and personne.",
    estScreens: 36, restPoints: ['a5-construire', 'a5-piege'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_CONSTRUIRE, A5_PIEGE, A5_EXEMPLES, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: UN SEUL SUJET, PLUS LOIN
 *
 *  Past lesson 16 in B1: with vouloir, one subject forces the infinitive;
 *  with croire, penser, dire, affirmer, reconnaître, nier, se souvenir, the
 *  infinitive is possible AND the que-clause stays correct. Pronouns and
 *  negation in front of the infinitive.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'La déposition de Mme Roy',
  frSub: 'Un vol dans une boutique',
  setting: 'Montréal, un poste de quartier du Plateau. Un vol a eu lieu la veille dans une boutique. Mme Roy, qui habite en face, fait sa déposition à l’agent Lavoie.',
  bubbles: [
    { from: 'narrator', fr: 'L’agent Lavoie tape chaque phrase. Mme Roy choisit ses mots.', en: 'Officer Lavoie types every sentence. Mrs Roy chooses her words.' },
    { from: 'user', fr: 'Je crois avoir vu l’homme vers vingt heures.', en: 'I think I saw the man at around eight in the evening.' },
    { from: 'coach', fr: 'Elle croit, elle a vu : un seul sujet, l’infinitif passé.', en: 'She thinks, she saw: one subject, the past infinitive.', warn: 'Un seul sujet' },
    { from: 'user', fr: 'Enfin, je crois que je l’ai vu. Il faisait déjà sombre.', en: 'Well, I think I saw him. It was already dark.' },
    { from: 'coach', fr: 'Je crois que je l’ai vu : tout aussi juste. Avec croire, les deux formes se disent.', en: 'Je crois que je l’ai vu: just as correct. With croire, both forms work.', warn: 'Les deux se disent' },
    { from: 'user', fr: 'Mon voisin pense que je me trompe.', en: 'My neighbour thinks I am wrong.' },
    { from: 'coach', fr: 'Le voisin pense, elle se trompe : deux sujets, que seulement.', en: 'The neighbour thinks, she is wrong: two subjects, only que.', warn: 'Deux sujets' },
    { from: 'user', fr: 'Mais je me souviens d’avoir entendu une alarme.', en: 'But I remember hearing an alarm.' },
    { from: 'coach', fr: 'Se souvenir de, puis l’infinitif passé : l’alarme a sonné avant le souvenir.', en: 'Se souvenir de, then the past infinitive: the alarm came before the memory.', warn: 'Se souvenir de' },
  ],
  closing: { fr: 'Un sujet : l’infinitif, ou que avec croire et dire. Deux sujets : que, toujours.', en: 'One subject: the infinitive, or que with croire and dire. Two subjects: que, always.' },
  audio: REC('rec-b2-14-roy'),
  say: REFRAME,
  terms: ['sujet'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sujet',
  title: 'Compter, puis regarder le verbe',
  frSub: 'Vouloir ferme, croire laisse ouvert',
  hint: 'Quatre cartes. La deuxième est la nouveauté.',
  audio: REC('rec-b2-14-sujet'),
  say: REFRAME,
  terms: ['sujet'],
  cards: [
    {
      head: 'Déjà vu', label: Cap(SUBJ_INF_REF),
      fr: fr(OA(1400)), sub: rsOf(OA(1400)),
      body: `« ${B116_REFRAME} » Avec vouloir, c'est la règle : je veux partir, jamais je veux que je parte. EN: after vouloir, one subject means the infinitive only.`,
    },
    {
      head: 'Le presque', label: 'croire, penser, dire',
      fr: fr(E(1206)), sub: rsOf(E(1206)),
      body: "Avec croire, penser, dire, affirmer, reconnaître, un seul sujet permet l'infinitif, un peu plus soigné. Mais que reste juste : je crois que j'ai compris. EN: after croire or dire, both forms are right.",
    },
    {
      head: 'Deux sujets', label: 'que seulement',
      fr: fr(E(1290)), sub: rsOf(E(1290)),
      body: "Il pense, tu pars : que, seulement. Il pense partir voudrait dire que c'est lui qui part. EN: two subjects, only que.",
    },
    {
      head: 'Le pronom, la négation', label: 'devant',
      fr: fr(E(1287)), sub: rsOf(E(1287)),
      body: "Le pronom se place devant avoir : l'avoir vu. Ne pas et ne rien passent devant l'infinitif : il prétend ne rien savoir. EN: pronouns before avoir; ne pas and ne rien in front.",
    },
  ],
};

const A6_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-trier',
  layer: 'core',
  size: 'lg',
  title: 'Infinitif, que, ou les deux',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Les deux se disent', [
      it(E(1206), 'je crois, j’ai compris'),
      it(E(1286), 'la même idée, avec que'),
      it(E(1287), 'elle affirme, elle a vu'),
      it(E(1288), 'la même idée, avec que'),
    ], chk('« Je crois que j’ai compris. » Cette phrase est…',
      ['juste', 'fausse : il faut l’infinitif'], 0,
      'Avec croire, que reste juste, même avec un seul sujet. EN: correct.')),
    grp('Volonté et goût : l’infinitif seul', [
      it(OA(1400), 'vouloir'),
      it(OA(1402), 'préférer'),
      it(OA(1404), 'souhaiter'),
      it(OA(1406), 'aimer'),
    ], chk('« Je veux que je parte avant six heures. »',
      ['fausse : je veux partir', 'juste'], 0,
      'Vouloir et un seul sujet : l’infinitif seul. EN: je veux partir.')),
    ctl('Deux sujets', '« Il pense que tu pars en septembre. » Avec un infinitif ?',
      ['impossible : ce serait lui qui part', 'il pense partir'], 0,
      'Deux personnes : que, seulement. EN: two subjects keep que.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui dit quoi, et sur qui',
  frSub: 'Neuf phrases, un sujet ou deux',
  lines: [
    ln(E(1287)), ln(E(1288)), ln(E(1289)), ln(E(1290)), ln(E(1291)),
    ln(E(1293)), ln(E(1295)), ln(E(1297)), ln(E(1300)),
  ],
  questions: [
    { q: 'Les deux premières phrases disent-elles la même chose ?', opts: ['oui, avec deux tournures justes', 'non, deux sens différents'], correct: 0, why: 'L’infinitif et que, pour un seul sujet : même sens. EN: same meaning.' },
    { q: 'Troisième phrase : qui part en septembre ?', opts: ['lui', 'toi'], correct: 0, why: 'Il pense partir : c’est lui. EN: he does.' },
    { q: 'Quatrième phrase : qui part en septembre ?', opts: ['toi', 'lui'], correct: 0, why: 'Il pense que tu pars : c’est toi. EN: you do.' },
    { q: 'Sixième phrase : le suspect avoue-t-il le vol ?', opts: ['non, il nie', 'oui'], correct: 0, why: 'Nier avoir volé : il dit qu’il ne l’a pas fait. EN: he denies it.' },
    { q: 'Huitième phrase : le remboursement est-il arrivé ?', opts: ['non, rien n’est arrivé', 'oui'], correct: 0, why: 'Vous dites l’avoir envoyé, mais je n’ai rien reçu. EN: nothing arrived.' },
  ],
  audio: REC('rec-b2-14-sujet-ecoute'),
  say: REFRAME,
  terms: ['sujet'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Un que de trop, un mot mal placé',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Vouloir : l’infinitif. Croire : les deux',
    body: "Avec vouloir et un seul sujet, jamais que. Avec croire, penser, dire, affirmer, les deux se disent. Le pronom se met devant avoir, la négation devant l'infinitif. EN: vouloir takes only the infinitive; croire allows both.",
  },
  cards: [
    trap(OA(1400), 'vouloir', 'Je veux que je parte avant six heures.', 'Vouloir, un seul sujet : l’infinitif seul. EN: je veux partir.'),
    trap(E(1300), 'prétendre', 'Il prétend de ne rien savoir.', 'Prétendre, sans préposition. EN: prétendre ne rien savoir.'),
    trap(E(1287), 'le pronom', 'Elle affirme avoir le vu devant la banque.', 'Le pronom devant avoir : l’avoir vu. EN: before avoir.'),
    trap(E(1301), 'la négation', 'Elle reconnaît avoir pas lu le contrat.', 'Ne pas devant avoir : ne pas avoir lu. EN: ne pas in front.'),
    trap(E(1295), 'le pronom réfléchi', 'Je reconnais s’être trompé.', 'Le pronom suit la personne : je, donc m’être. EN: me for je.'),
    trap(E(1290), 'deux sujets', 'Il pense toi partir en septembre.', 'Deux sujets : que, avec un verbe conjugué. EN: il pense que tu pars.'),
  ],
  drill: [
    { promptSay: 'Je veux … avant six heures.', opts: ['partir', 'que je parte'], correct: 0 },
    { promptSay: 'Je crois … compris le problème.', opts: ['avoir', 'être'], correct: 0 },
    { promptSay: 'Il pense que tu … en septembre.', opts: ['pars', 'partir'], correct: 0 },
    { promptSay: 'Elle affirme … vu devant la banque.', opts: ['avoir le', 'l’avoir'], correct: 1 },
    { promptSay: 'Il prétend … savoir.', opts: ['ne rien', 'rien ne'], correct: 0 },
    { promptSay: 'Je reconnais … trompé.', opts: ['m’être', 's’être'], correct: 0 },
    { promptSay: 'Le suspect nie … volé la voiture.', opts: ['de avoir', 'avoir'], correct: 1 },
    { promptSay: 'Je me souviens … fermé la porte à clé.', opts: ['d’avoir', 'que avoir'], correct: 0 },
  ],
  steps: STEPS('Vouloir : l’infinitif. Croire : les deux', 'Le que de trop et le mot mal placé'),
  audio: REC('rec-b2-14-piege-sujet'),
  say: REFRAME,
  terms: ['sujet'],
};

const A6_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a6-hacks',
  layer: 'core',
  sheetId: 'sheet-sujet',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Compte les sujets, puis regarde le premier verbe : vouloir ferme la porte à que, croire la laisse ouverte.', why: "Je veux partir, mais je crois avoir compris ou je crois que j'ai compris. EN: count, then look at the verb." },
    { hack: 'Dans une lettre soignée, préfère l’infinitif quand il n’y a qu’un sujet.', why: "Je déclare avoir reçu un colis abîmé sonne plus net qu'avec que, mais les deux sont justes. EN: the infinitive reads tighter." },
    { hack: 'Un pronom ou une négation : devant l’infinitif, ou devant avoir.', why: "Elle affirme l'avoir vu, il prétend ne rien savoir. EN: pronouns and negation go in front." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Réécrire : le témoignage de M. Girard', TEXTE_A6, [
  { q: 'Les deux premières phrases : je crois que j’ai vu ; je pense qu’il portait.', a: "Je crois avoir vu l'homme vers vingt heures : un seul sujet. Je pense qu'il portait une veste bleue : je pense, il portait, deux sujets, on garde que." },
  { q: 'Troisième phrase : ma voisine affirme qu’elle l’a vu entrer.', a: "Ma voisine affirme l'avoir vu entrer dans l'immeuble : un seul sujet, et le pronom devant avoir." },
  { q: 'Quatrième phrase : je me souviens que j’ai entendu…', a: "Je me souviens d'avoir entendu une porte claquer : se souvenir de, puis l'infinitif passé." },
  { q: 'La dernière phrase : le gardien dit que je me trompe, mais je suis sûr que j’ai raison.', a: "Le gardien dit que je me trompe : deux sujets, que reste. Je suis sûr d'avoir raison : un seul sujet, l'infinitif (présent : avoir raison, c'est maintenant)." },
], 'rec-b2-14-texte-a6', ['sujet']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Vouloir', 'Un seul sujet, avec vouloir :',
    ['l’infinitif seul', 'l’infinitif ou que'], 0,
    'Je veux partir, jamais je veux que je parte. EN: only the infinitive.'),
  ctl('Croire', 'Un seul sujet, avec croire :',
    ['l’infinitif ou que', 'l’infinitif seul'], 0,
    'Je crois avoir compris, je crois que j’ai compris. EN: both.'),
  ctl('Le pronom', '« Elle affirme … vu. »',
    ['l’avoir', 'avoir le'], 0,
    'Le pronom devant avoir. EN: l’avoir vu.'),
], ['sujet']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Un seul sujet, plus loin',
    opener: {
      line: "Je crois avoir compris, je crois que j'ai compris : ici tu apprends quand les deux sont justes, et quand un seul l'est. EN: Two ways to say I think I understood: here you learn when both are right, and when only one is.",
      imageRef: 'lessons/constructions-infinitives/act06.jpg',
    },
    sections: [],
    milestone: "Tu remplaces que par l'infinitif avec croire, dire ou affirmer, tu sais que les deux se disent, et tu gardes l'infinitif seul après vouloir. EN: You can use the infinitive after declarative verbs and know when que also works.",
    estScreens: 38, restPoints: ['a6-trier', 'a6-piege'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_TRIER, A6_ECOUTE, A6_PIEGE, A6_HACKS, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: À, DE OU RIEN
 *
 *  The preposition belongs to the first verb. Past lesson 16 in B1 (réussir
 *  à, hésiter à, demander de): tenir à, s'attendre à, se mettre à, obliger
 *  à; s'efforcer de, il s'agit de, empêcher de; oser, compter with nothing;
 *  and the pairs whose meaning changes with the preposition.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'La semaine de Chloé',
  frSub: 'Un atelier de vélos',
  setting: 'Bordeaux, un atelier de réparation de vélos. Chloé, l’apprentie, raconte sa semaine à Hugo, le patron, qui l’écoute en rangeant ses outils.',
  bubbles: [
    { from: 'narrator', fr: 'Chloé parle vite. Hugo, lui, écoute surtout les petits mots entre les verbes.', en: 'Chloé talks fast. Hugo listens mostly to the little words between the verbs.' },
    { from: 'user', fr: 'Lundi, je me suis mise à réparer les freins toute seule.', en: 'On Monday I started fixing the brakes on my own.' },
    { from: 'coach', fr: 'Se mettre à : commencer, souvent d’un coup. À, puis l’infinitif.', en: 'Se mettre à: to start, often all at once. À, then the infinitive.', warn: 'se mettre à' },
    { from: 'user', fr: 'Je n’osais pas vous demander de l’aide.', en: 'I did not dare ask you for help.' },
    { from: 'coach', fr: 'Oser, sans rien devant l’infinitif. Et demander, lui, garde son complément.', en: 'Oser, with nothing before the infinitive. And demander keeps its object.', warn: 'oser' },
    { from: 'user', fr: 'Mais j’ai fini par trouver la panne.', en: 'But in the end I found the fault.' },
    { from: 'coach', fr: 'Finir par : au bout du compte. Finir de, ce serait terminer.', en: 'Finir par: in the end. Finir de would mean to finish doing.', warn: 'finir par' },
    { from: 'user', fr: 'Et je compte passer mon diplôme en juin.', en: 'And I intend to take my diploma in June.' },
    { from: 'coach', fr: 'Compter + infinitif, sans rien : tu en as l’intention.', en: 'Compter + infinitive, with nothing: you intend to.', warn: 'compter' },
  ],
  closing: { fr: 'C’est le premier verbe qui choisit : à, de, par ou rien.', en: 'The first verb chooses: à, de, par or nothing.' },
  audio: REC('rec-b2-14-chloe'),
  say: REFRAME,
  terms: ['prep'],
};

const A7_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-table',
  layer: 'core',
  sheetId: 'sheet-prep',
  title: 'Six verbes à connaître par cœur',
  cols: ['Verbe', 'devant l’infinitif', 'exemple'],
  rows: [
    { cells: ['tenir', 'à', 'je tiens à préciser'], say: fr(E(1308)),
      detail: { title: 'tenir à', body: "Tenir à faire, c'est vouloir absolument : très utile dans une lettre. EN: to be keen to.", say: fr(E(1212)) } },
    { cells: ['s’attendre', 'à', 'je ne m’attendais pas à'], say: fr(E(1307)),
      detail: { title: 's’attendre à', body: "Prévoir, imaginer d'avance. Souvent à la forme négative, pour une surprise. EN: to expect.", say: fr(E(1307)) } },
    { cells: ['s’efforcer', 'de', 'l’équipe s’efforce de'], say: fr(E(1312)),
      detail: { title: 's’efforcer de', body: "Faire de son mieux pour. Un verbe soutenu, fréquent dans les réponses d'entreprise. EN: to strive to.", say: fr(E(1312)) } },
    { cells: ['il s’agit', 'de', 'il s’agit de remplir'], say: fr(E(1311)),
      detail: { title: 'il s’agit de', body: "Toujours avec il, jamais avec un nom comme sujet : il s'agit de, c'est-à-dire ce qu'il faut, c'est. EN: only il s'agit de.", say: fr(E(1204)) } },
    { cells: ['oser', 'rien', 'il n’ose pas demander'], say: fr(E(1309)),
      detail: { title: 'oser', body: "Aucune préposition : oser demander, oser répondre. EN: no preposition.", say: fr(E(1321)) } },
    { cells: ['compter', 'rien', 'nous comptons partir'], say: fr(E(1310)),
      detail: { title: 'compter', body: "Compter + infinitif : avoir l'intention. Compter sur quelqu'un pour + infinitif, c'est autre chose. EN: to intend; compter sur, to rely on.", say: fr(E(1203)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['prep'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-prep',
  title: 'Même verbe, autre sens',
  frSub: 'Quand la préposition change tout',
  hint: 'Quatre cartes, quatre paires.',
  audio: REC('rec-b2-14-paires'),
  say: REFRAME,
  terms: ['prep'],
  cards: [
    {
      head: 'Finir de, finir par', label: 'terminer, ou au bout du compte',
      fr: fr(E(1306)), sub: rsOf(E(1306)),
      body: "J'ai fini de ranger : c'est terminé. Il a fini par accepter : au bout du compte, après avoir refusé. EN: finir de, to finish; finir par, to end up.",
    },
    {
      head: 'Penser à, penser', label: 'se souvenir, ou avoir l’intention',
      fr: fr(E(1313)), sub: rsOf(E(1313)),
      body: "Pense à acheter du pain : n'oublie pas. Je pense acheter une voiture : j'en ai l'intention. EN: penser à, to remember to; penser, to intend.",
    },
    {
      head: 'Venir, venir de', label: 'pour, ou juste avant',
      fr: fr(E(1316)), sub: rsOf(E(1316)),
      body: "Je viens chercher mon colis : je viens pour ça. Je viens de recevoir : c'est arrivé à l'instant. EN: venir, to come to; venir de, to have just.",
    },
    {
      head: 'Commencer à, commencer par', label: 'le début, ou la première étape',
      fr: fr(E(1318)), sub: rsOf(E(1318)),
      body: "Elle a commencé à apprendre le piano (commencer de se dit aussi, plus écrit). Commence par lire : c'est la première étape. EN: commencer à, to start; commencer par, to start by.",
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'À, de ou rien',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('À', [
      it(E(1304), 'se mettre à'),
      it(E(1307), 's’attendre à'),
      it(E(1320), 'obliger quelqu’un à'),
      it(OA(1463), 'hésiter à'),
    ], chk('« Je tiens … vous remercier. »',
      ['à', 'de', 'rien'], 0,
      'Tenir à + infinitif. EN: tenir à.')),
    grp('De', [
      it(E(1311), 'il s’agit de'),
      it(E(1312), 's’efforcer de'),
      it(E(1319), 'empêcher quelqu’un de'),
      it(OA(1570), 'demander à quelqu’un de'),
    ], chk('« L’équipe s’efforce … répondre vite. »',
      ['de', 'à', 'rien'], 0,
      'S’efforcer de. EN: s’efforcer de.')),
    ctl('Rien', '« Nous comptons … partir samedi matin. »',
      ['rien', 'à', 'de'], 0,
      'Compter + infinitif, sans préposition. EN: no preposition.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['prep'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre prépositions de trop ou de travers',
  errors: [
    {
      wrong: 'Je tiens de vous remercier de votre patience.',
      right: fr(E(1212)),
      why: "Normal : la phrase finit déjà par de votre patience, et de semble le mot des lettres. Mais tenir se construit avec à. EN: tenir à.",
    },
    {
      wrong: 'Nous comptons de partir samedi matin.',
      right: fr(E(1310)),
      why: "Normal : décider de, essayer de, prévoir de. Compter, lui, ne prend rien devant l'infinitif. EN: compter takes no preposition.",
    },
    {
      wrong: "Ce formulaire s'agit de remplir avant lundi.",
      right: fr(E(1311)),
      why: "Normal : en anglais, this form is about... S'agir n'a jamais d'autre sujet que il : il s'agit de. EN: only il s'agit de.",
    },
    {
      wrong: "Je ne m'attendais pas de recevoir une facture aussi élevée.",
      right: fr(E(1307)),
      why: "Normal : de après ne pas semble logique. Mais s'attendre se construit avec à. EN: s'attendre à.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['prep'],
};

const A7_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a7-flash',
  layer: 'core',
  title: 'Huit verbes et leur préposition',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'to be keen to', back: 'tenir à', say: fr(E(1308)) },
    { front: 'to expect to', back: 's’attendre à', say: fr(E(1307)) },
    { front: 'to start (suddenly)', back: 'se mettre à', say: fr(E(1304)) },
    { front: 'to strive to', back: 's’efforcer de', say: fr(E(1312)) },
    { front: 'to end up doing', back: 'finir par', say: fr(E(1322)) },
    { front: 'to dare', back: 'oser, sans préposition', say: fr(E(1321)) },
    { front: 'to intend to', back: 'compter, sans préposition', say: fr(E(1310)) },
    { front: 'to have just done', back: 'venir de', say: fr(E(1316)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['prep'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Compléter : le courriel de Paul', TEXTE_A7, [
  { q: 'Les deux premiers blancs : je tiens ___ vous remercier ; nous avons commencé ___ recevoir.', a: "Je tiens à vous remercier. Nous avons commencé à recevoir (commencé de se dit aussi, plus écrit)." },
  { q: 'Je compte ___ ouvrir un bureau ; il s’agit maintenant ___ trouver…', a: "Je compte ouvrir, sans rien. Il s'agit maintenant de trouver deux personnes." },
  { q: 'N’hésitez pas ___ me proposer ; si personne n’ose ___ se lancer.', a: "N'hésitez pas à me proposer des noms. Si personne n'ose se lancer, sans rien." },
  { q: 'Le dernier : je finirai ___ publier une annonce.', a: "Je finirai par publier une annonce : au bout du compte, s'il le faut. Finir de publier voudrait dire terminer la publication." },
], 'rec-b2-14-texte-a7', ['prep']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Qui choisit', 'La préposition devant l’infinitif dépend…',
    ['du premier verbe', 'de l’infinitif'], 0,
    'Tenir à, s’efforcer de, oser sans rien. EN: the first verb.'),
  ctl('Finir', '« Il a fini par accepter. » Cela veut dire…',
    ['il a accepté au bout du compte', 'il a terminé d’accepter'], 0,
    'Finir par : en fin de compte. EN: he ended up accepting.'),
  ctl('Venir', '« Je viens de recevoir votre courriel. »',
    ['je l’ai reçu à l’instant', 'je viens pour le recevoir'], 0,
    'Venir de : juste avant. EN: I have just received it.'),
], ['prep']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'À, de ou rien',
    opener: {
      line: "Tenir à, s'efforcer de, oser sans rien : ici tu apprends que c'est le premier verbe qui choisit la préposition. EN: Tenir à, s'efforcer de, oser with nothing: here you learn that the first verb picks the preposition.",
      imageRef: 'lessons/constructions-infinitives/act07.jpg',
    },
    sections: [],
    milestone: "Tu construis les verbes courants avec à, de ou rien, et tu ne confonds plus finir de et finir par, venir et venir de. EN: You can build common verbs with the right preposition and tell the meaning pairs apart.",
    estScreens: 40, restPoints: ['a7-cartes', 'a7-erreurs'],
  },
  sections: [A7_HISTOIRE, A7_TABLE, A7_CARTES, A7_CONSTRUIRE, A7_ERREURS, A7_FLASH, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: FAIRE FAIRE
 *
 *  Faire + infinitif: the subject decides, somebody else acts. The agent
 *  with à (when the infinitive already has an object) or par; faire faire;
 *  against se faire (lesson 18 in B1) and against the calque « j'ai eu les
 *  serrures changées ».
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'L’appartement de Sofia et Tom',
  frSub: 'Qui fait les travaux',
  setting: 'Bruxelles, quartier d’Ixelles. Sofia et Tom viennent d’acheter un vieil appartement. Tom veut tout faire lui-même ; Sofia préfère appeler des artisans.',
  bubbles: [
    { from: 'narrator', fr: 'Ils font la liste des travaux sur la table de la cuisine.', en: 'They draw up the list of works on the kitchen table.' },
    { from: 'user', fr: 'La cuisine, on la fait installer, Tom, on ne l’installe pas nous-mêmes.', en: 'The kitchen, we are having it fitted, Tom, we are not fitting it ourselves.' },
    { from: 'coach', fr: 'Faire installer : un cuisiniste installe. Faire donne l’action à quelqu’un d’autre.', en: 'Faire installer: a kitchen fitter fits it. Faire hands the action to someone else.', warn: 'faire + infinitif' },
    { from: 'user', fr: 'Et on fait repeindre le salon par un peintre du quartier.', en: 'And we are having the living room repainted by a local painter.' },
    { from: 'coach', fr: 'Par nomme celui qui agit. Sans par, on ne sait pas qui, et ce n’est pas grave.', en: 'Par names who does it. Without par, we do not know who, and that is fine.', warn: 'L’agent : par' },
    { from: 'user', fr: 'Ton frère, on lui fait poser les étagères, il adore ça.', en: 'Your brother, we will get him to put up the shelves, he loves that.' },
    { from: 'coach', fr: 'Lui, c’est le frère de Tom : c’est lui qui pose. Poser a déjà un complément, donc lui.', en: 'Lui is Tom’s brother: he does the fitting. Poser already has an object, so lui.', warn: 'L’agent : à ou lui' },
    { from: 'user', fr: 'Et le parquet, on le fait faire, c’est plus sûr.', en: 'And the floor, we are having it done, it is safer.' },
    { from: 'coach', fr: 'Faire faire : quelqu’un fait le parquet pour vous. Deux fois faire, c’est normal.', en: 'Faire faire: someone lays the floor for you. Faire twice is normal.', warn: 'faire faire' },
  ],
  closing: { fr: 'Faire + infinitif : le sujet décide, quelqu’un d’autre agit.', en: 'Faire + infinitive: the subject decides, someone else acts.' },
  audio: REC('rec-b2-14-sofia'),
  say: REFRAME,
  terms: ['faire'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-faire',
  title: 'Faire faire, sans faute',
  frSub: 'Qui décide, qui agit',
  hint: 'Quatre cartes. La dernière vient du B1.',
  audio: REC('rec-b2-14-faire'),
  say: REFRAME,
  terms: ['faire'],
  cards: [
    {
      head: 'Quelqu’un d’autre agit', label: 'faire + infinitif',
      fr: fr(E(1325)), sub: rsOf(E(1325)),
      body: "Je fais réparer : le garagiste répare, moi je décide et je paie. Sans faire, c'est toi qui répares. EN: faire + infinitive, someone else does it.",
    },
    {
      head: 'Qui agit : à ou par', label: 'l’agent',
      fr: fr(E(1328)), sub: rsOf(E(1328)),
      body: "Si l'infinitif a déjà un complément (le texte), celui qui agit arrive avec à : aux élèves. Par se dit aussi, surtout pour un professionnel : par une agence. EN: the doer with à or par.",
    },
    {
      head: 'Faire faire', label: 'deux fois faire',
      fr: fr(E(1332)), sub: rsOf(E(1332)),
      body: "Faire faire n'est pas une faute : quelqu'un fait le double pour toi. Faire faire des travaux, faire faire un devis. EN: faire faire is correct French.",
    },
    {
      head: 'Se faire, déjà vu', label: Cap(PASSIF_REF),
      fr: fr('fr.b1.faits-et-procedures.1164'), sub: rsOf('fr.b1.faits-et-procedures.1164'),
      body: `« ${B118_REFRAME} » Se faire + infinitif dit ce qui t'arrive, ou ce qu'on fait pour toi. EN: se faire, for what happens to you.`,
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Toi, ou quelqu’un d’autre',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Qui fait le travail', [
      it(E(1325), 'le garagiste'),
      it(E(1326), 'moi-même'),
      it(E(1327), 'un cuisiniste'),
      it(E(1334), 'le plombier'),
    ], chk('« Je répare ma voiture moi-même. » Qui répare ?',
      ['moi', 'un garagiste'], 0,
      'Sans faire, le sujet agit lui-même. EN: I do.')),
    grp('Celui qui agit, nommé', [
      it(E(1328), 'à : aux élèves'),
      it(E(1329), 'sans complément : les élèves'),
      it(E(1330), 'par : une agence'),
      it('fr.b1.comparaisons.1172', 'me : c’est moi qui visite'),
    ], chk('« Le professeur fait lire le texte … élèves. »',
      ['aux', 'les'], 0,
      'Le texte est déjà là, donc à : aux élèves. EN: aux élèves.')),
    ctl('Faire faire', '« Il faut faire faire un double des clés. » Qui fait le double ?',
      ['un serrurier', 'moi'], 0,
      'Faire faire : quelqu’un d’autre le fait. EN: a locksmith.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['faire'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui a vraiment fait le travail',
  frSub: 'Neuf phrases, une question',
  lines: [
    ln(E(1325)), ln(E(1326)), ln(E(1327)), ln(E(1329)), ln(E(1331)),
    ln(E(1332)), ln(E(1334)), ln(E(1338)), ln('fr.b1.comparaisons.1172'),
  ],
  questions: [
    { q: 'Première phrase : qui répare la voiture ?', opts: ['un garagiste', 'la personne qui parle'], correct: 0, why: 'Je fais réparer : quelqu’un d’autre. EN: a mechanic.' },
    { q: 'Deuxième phrase : qui répare la voiture ?', opts: ['la personne qui parle', 'un garagiste'], correct: 0, why: 'Moi-même, sans faire. EN: the speaker.' },
    { q: 'Cinquième phrase : qu’a provoqué le film ?', opts: ['des larmes', 'des rires'], correct: 0, why: 'M’a fait pleurer. EN: tears.' },
    { q: 'Sixième phrase : que faut-il obtenir ?', opts: ['une clé de plus', 'une nouvelle serrure'], correct: 0, why: 'Un double des clés. EN: a spare key.' },
    { q: 'Huitième phrase : qui a repeint la façade ?', opts: ['des ouvriers, pour le propriétaire', 'le propriétaire lui-même'], correct: 0, why: 'A fait repeindre : il a payé, d’autres ont peint. EN: workers did.' },
  ],
  audio: REC('rec-b2-14-faire-ecoute'),
  say: REFRAME,
  terms: ['faire'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Ce que l’anglais fait dire',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Faire, puis l’infinitif, toujours',
    body: "I had the locks changed se dit j'ai fait changer les serrures. Après faire, un infinitif, jamais un participe ni un verbe conjugué. Celui qui agit arrive avec à ou par. EN: faire plus an infinitive, never a participle.",
  },
  cards: [
    trap(E(1335), 'le calque', "J'ai eu les serrures changées.", 'I had the locks changed : en français, faire + infinitif. EN: j’ai fait changer.'),
    trap(E(1327), 'un participe', 'Nous avons fait installée une nouvelle cuisine.', 'Après faire, l’infinitif : installer. EN: fait installer.'),
    trap(E(1333), 'un verbe conjugué', 'Faites entrez le client suivant.', 'Après faire, l’infinitif : entrer. EN: faites entrer.'),
    trap(E(1328), 'l’agent', 'Le professeur fait lire le texte les élèves.', 'Deux compléments : celui qui lit prend à. EN: aux élèves.'),
    trap(E(1331), 'rendre', 'Ce film m’a rendu pleurer.', 'Rendre + adjectif (rendre triste), faire + infinitif. EN: m’a fait pleurer.'),
    trap(E(1338), 'l’auxiliaire', 'Le propriétaire est fait repeindre la façade.', 'Faire prend avoir : a fait repeindre. EN: a fait.'),
  ],
  drill: [
    { promptSay: 'J’ai … changer les serrures.', opts: ['fait', 'eu'], correct: 0 },
    { promptSay: 'Nous avons fait … une nouvelle cuisine.', opts: ['installée', 'installer'], correct: 1 },
    { promptSay: 'Faites … le client suivant.', opts: ['entrer', 'entrez'], correct: 0 },
    { promptSay: 'Le professeur fait lire le texte … élèves.', opts: ['les', 'aux'], correct: 1 },
    { promptSay: 'Ce film m’a … pleurer.', opts: ['fait', 'rendu'], correct: 0 },
    { promptSay: 'Elle a fait … un plombier en urgence.', opts: ['venir', 'venu'], correct: 0 },
    { promptSay: 'Le propriétaire … repeindre la façade.', opts: ['est fait', 'a fait'], correct: 1 },
    { promptSay: 'Tu devrais faire … les freins avant de partir.', opts: ['vérifier', 'vérifiés'], correct: 0 },
  ],
  steps: STEPS('Faire, puis l’infinitif, toujours', 'Ce que l’anglais fait dire'),
  audio: REC('rec-b2-14-piege-faire'),
  say: REFRAME,
  terms: ['faire'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Réécrire : la maison d’Hélène', TEXTE_A8, [
  { q: 'Les deux premières : un peintre repeint la façade ; un électricien vérifie l’installation.', a: "Hélène fait repeindre la façade par un peintre. Hélène fait vérifier l'installation par un électricien. Sans par, la phrase est juste aussi." },
  { q: 'La haie et l’estimation.', a: "Hélène fait tailler la haie par un jardinier. Hélène fait estimer la maison par un expert." },
  { q: 'Les photos et les visites.', a: "Hélène fait photographier les pièces par une agence. Hélène fait visiter la maison le samedi : ce sont les visiteurs qui visitent, et on n'a pas besoin de les nommer." },
  { q: 'Pourquoi jamais « Hélène a les pièces photographiées » ?', a: "C'est un calque de l'anglais (she has the rooms photographed). En français, faire + infinitif : Hélène fait photographier les pièces." },
], 'rec-b2-14-texte-a8', ['faire']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Qui agit', '« Nous avons fait installer une cuisine. » Qui installe ?',
    ['un professionnel', 'nous'], 0,
    'Faire : quelqu’un d’autre. EN: a professional.'),
  ctl('L’agent', '« Le professeur fait lire le texte … élèves. »',
    ['aux', 'les'], 0,
    'À, car le texte est déjà complément. EN: aux élèves.'),
  ctl('Le calque', 'I had the locks changed :',
    ['j’ai fait changer les serrures', 'j’ai eu les serrures changées'], 0,
    'Faire + infinitif. EN: faire changer.'),
], ['faire']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Faire faire',
    opener: {
      line: "Tu décides, et quelqu'un d'autre agit : ici tu fais réparer, installer et vérifier, sans jamais tenir l'outil. EN: You decide and someone else acts: here you have things repaired, fitted and checked without holding a tool.",
      imageRef: 'lessons/constructions-infinitives/act08.jpg',
    },
    sections: [],
    milestone: "Tu dis ce que tu fais faire, tu nommes celui qui agit avec à ou par, et tu évites le calque de l'anglais. EN: You can say what you have done by others and name who does it.",
    estScreens: 36, restPoints: ['a8-construire', 'a8-piege'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_ECOUTE, A8_PIEGE, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: LAISSER, ET LES PRONOMS
 *
 *  Laisser + infinitif (to let), laisser tomber; the pronoun before faire
 *  or laisser, never before the infinitive (the single file of lesson 17
 *  in B1); two pronouns; the affirmative imperative; fait never agrees.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Laisser, et les petits mots',
  frSub: 'Neuf phrases, qui fait quoi',
  lines: [
    ln(E(1341)), ln(E(1342)), ln(E(1343)), ln(E(1344)), ln(E(1346)),
    ln(E(1347)), ln(E(1349)), ln(E(1350)), ln('fr.b1.rp-etiquette.1105'),
  ],
  questions: [
    { q: 'Première phrase : que conseille-t-on ?', opts: ['d’oublier le problème', 'de faire attention'], correct: 0, why: 'Laisse tomber : n’y pense plus. EN: forget it.' },
    { q: 'Deuxième phrase : qu’a-t-il fait de ses études ?', opts: ['il les a abandonnées', 'il les a terminées'], correct: 0, why: 'Laisser tomber : abandonner. EN: he dropped out.' },
    { q: 'Quatrième phrase : qui répare la voiture demain ?', opts: ['quelqu’un d’autre', 'la personne qui parle'], correct: 0, why: 'Je la fais réparer : un garagiste. EN: someone else.' },
    { q: 'Septième phrase : que font les enfants ?', opts: ['ils jouent dans le jardin', 'ils rentrent à la maison'], correct: 0, why: 'Je les laisse jouer. EN: they play.' },
    { q: 'Dernière phrase : pourquoi s’excuse-t-on ?', opts: ['on a fait attendre quelqu’un', 'on est parti trop tôt'], correct: 0, why: 'Je vous ai fait attendre. EN: for keeping someone waiting.' },
  ],
  audio: REC('rec-b2-14-pronoms-ecoute'),
  say: REFRAME,
  terms: ['faire', 'pronom'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-faire',
  title: 'Le pronom devant le bloc',
  frSub: 'Faire, laisser, et la file',
  hint: 'Quatre cartes. La deuxième vient du B1.',
  audio: REC('rec-b2-14-pronoms'),
  say: REFRAME,
  terms: ['pronom', 'faire'],
  cards: [
    {
      head: 'Laisser : tu permets', label: 'laisser + infinitif',
      fr: fr(E(1349)), sub: rsOf(E(1349)),
      body: "Je les laisse jouer : ce sont eux qui jouent, et moi je permets. Laisser tomber, c'est aussi abandonner : laisse tomber. EN: laisser + infinitive means to let.",
    },
    {
      head: 'Le pronom devant le bloc', label: Cap(PRONOMS_REF),
      fr: fr(E(1344)), sub: rsOf(E(1344)),
      body: `« ${B117_REFRAME} » Avec faire, la file se colle à faire, pas à l'infinitif : je la fais réparer. EN: the pronoun goes before faire.`,
    },
    {
      head: 'Deux pronoms, un impératif', label: 'la lui, fais-le',
      fr: fr(E(1345)), sub: rsOf(E(1345)),
      body: "La lettre (la) et celui qui lit (lui) passent devant ai fait. À l'impératif affirmatif, ils vont derrière : fais-le entrer. EN: both pronouns before faire; after it in a command.",
    },
    {
      head: 'Fait ne bouge pas', label: 'l’accord',
      fr: fr('fr.b1.pronoms-essentiels.1196'), sub: rsOf('fr.b1.pronoms-essentiels.1196'),
      body: "Les clés que j'ai fait faire : jamais faites. Devant un infinitif, fait ne s'accorde pas. Pour laissé, l'orthographe de 1990 recommande aussi l'invariable, mais l'accord reste admis. EN: fait never agrees before an infinitive.",
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Place le pronom',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Devant faire', [
      it(E(1344), 'la : la voiture'),
      it(E(1346), 'les : les meubles'),
      it(E(1347), 'me : à la forme négative'),
      it('fr.b1.rp-etiquette.1105', 'vous : devant ai fait'),
    ], chk('« Ma voiture ? Je … réparer demain. »',
      ['la fais', 'fais la'], 0,
      'Le pronom devant faire. EN: je la fais réparer.')),
    grp('Laisser', [
      it(E(1341), 'laisse tomber : oublie'),
      it(E(1343), 'l’ambulance passe'),
      it(E(1349), 'les enfants jouent'),
      it(E(1350), 'elle parle'),
    ], chk('« Je … jouer dans le jardin. » (les enfants)',
      ['les laisse', 'laisse les'], 0,
      'Le pronom devant laisser. EN: je les laisse jouer.')),
    ctl('L’accord', '« Ces meubles, je les ai … livrer. »',
      ['fait', 'faits'], 0,
      'Fait ne s’accorde jamais devant un infinitif. EN: fait.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronom'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre pronoms mal rangés',
  errors: [
    {
      wrong: 'Ma voiture ? Je fais la réparer demain.',
      right: fr(E(1344)),
      why: "Normal : avec vouloir, le pronom va devant l'infinitif (je veux la réparer). Avec faire, il passe devant faire. EN: the pronoun goes before faire.",
    },
    {
      wrong: 'Ces meubles, je les ai faits livrer mardi.',
      right: fr(E(1346)),
      why: "Normal : les est placé avant, et d'habitude le participe s'accorde alors. Devant un infinitif, fait reste fait. EN: fait never agrees here.",
    },
    {
      wrong: "Ta lettre ? Je lui l'ai fait lire hier soir.",
      right: fr(E(1345)),
      why: "Normal : en anglais, him vient en premier (I had him read it). La file française dit la, puis lui. EN: la before lui.",
    },
    {
      wrong: 'Je laisse les jouer dans le jardin.',
      right: fr(E(1349)),
      why: "Normal : les enfants jouent, alors les semble aller avec jouer. Mais avec laisser, comme avec faire, le pronom passe devant le premier verbe. EN: the pronoun before laisser.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronom'],
};

const A9_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a9-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Le pronom, et fait sans accord',
  itemIds: dicteeFor(9),
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronom'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Réécrire : ta réponse à Théo', TEXTE_A9, [
  { q: 'Le chauffe-eau et les clés.', a: "Oui, je l'ai fait réparer lundi. Je les ai fait faire au magasin du coin : fait, sans accord." },
  { q: 'La facture, envoyée au propriétaire.', a: "Je la lui ai fait envoyer : la (la facture) puis lui (le propriétaire), tous les deux devant ai fait." },
  { q: 'Les enfants des voisins.', a: "Je les laisse jouer dans la cour : le pronom devant laisser, pas devant jouer." },
  { q: 'Pourquoi pas « je les ai faites faire » pour les clés ?', a: "Parce que fait ne s'accorde jamais devant un infinitif : les clés, je les ai fait faire." },
], 'rec-b2-14-texte-a9', ['pronom']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('La place', '« Ta voiture ? Je … réparer. »',
    ['la fais', 'fais la'], 0,
    'Devant faire. EN: je la fais réparer.'),
  ctl('Deux pronoms', '« Ta lettre ? Je … ai fait lire. »',
    ['la lui', 'lui la'], 0,
    'La, puis lui. EN: la lui.'),
  ctl('L’accord', '« Les clés, je les ai … faire. »',
    ['fait', 'faites'], 0,
    'Fait ne s’accorde pas devant un infinitif. EN: fait.'),
], ['pronom']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Laisser, et les pronoms',
    opener: {
      line: "Je la fais réparer, je les laisse jouer : ici les petits mots se rangent devant faire et laisser, et fait ne bouge plus. EN: I am having it repaired, I let them play: here the little words line up before faire and laisser.",
      imageRef: 'lessons/constructions-infinitives/act09.jpg',
    },
    sections: [],
    milestone: "Tu dis laisser + infinitif, tu places un ou deux pronoms devant faire et laisser, et tu laisses fait invariable. EN: You can place pronouns with faire and laisser and keep fait unchanged.",
    estScreens: 34, restPoints: ['a9-cartes', 'a9-erreurs'],
  },
  sections: [A9_ECOUTE, A9_CARTES, A9_CONSTRUIRE, A9_ERREURS, A9_DICTEE, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: LES CONSIGNES
 *
 *  The infinitive of notices, recipes and forms: an order with no person.
 *  Ne pas together in front, the pronominal keeps se, veuillez and prière
 *  de as the polite frames.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'Les panneaux de Priya',
  frSub: 'Premier jour à Genève',
  setting: 'Genève, la gare Cornavin. Priya vient d’arriver de Bangalore pour son travail. Luc, son collègue, l’accompagne et commente les panneaux qu’elle lit à voix haute.',
  bubbles: [
    { from: 'narrator', fr: 'Priya lit tout ce qu’elle voit. Luc s’amuse de sa curiosité.', en: 'Priya reads everything she sees. Luc is amused by her curiosity.' },
    { from: 'user', fr: 'Le panneau dit « ne pas se pencher », pas « ne vous penchez pas ».', en: 'The sign says ne pas se pencher, not ne vous penchez pas.' },
    { from: 'coach', fr: 'L’infinitif ne vise personne en particulier : tous ceux qui lisent. C’est la voix des affiches.', en: 'The infinitive targets nobody in particular: everyone who reads it. It is the voice of notices.', warn: 'Personne en particulier' },
    { from: 'user', fr: 'Et là, c’est écrit « s’adresser au guichet », avec se.', en: 'And here it says s’adresser au guichet, with se.' },
    { from: 'coach', fr: 'Un pronominal garde se dans une consigne : s’adresser, se présenter, se munir de.', en: 'A pronominal verb keeps se in a notice: s’adresser, se présenter, se munir de.', warn: 'Se, toujours' },
    { from: 'user', fr: 'Sur ma boîte de médicaments : « ne pas dépasser la dose prescrite ».', en: 'On my medicine box: do not exceed the prescribed dose.' },
    { from: 'coach', fr: 'Ne pas, soudé, devant l’infinitif. Jamais ne dépasser pas.', en: 'Ne pas, joined, before the infinitive. Never ne dépasser pas.', warn: 'Ne pas devant' },
    { from: 'user', fr: 'Et au micro : « veuillez vous munir de votre titre de transport ».', en: 'And over the loudspeaker: please have your ticket ready.' },
    { from: 'coach', fr: 'Veuillez + infinitif : une demande polie. Ici, le pronom suit vous : vous munir.', en: 'Veuillez + infinitive: a polite request. Here the pronoun follows vous: vous munir.', warn: 'Veuillez' },
  ],
  closing: { fr: 'Sur une affiche, l’infinitif donne l’ordre sans nommer personne.', en: 'On a notice, the infinitive gives the order without naming anyone.' },
  audio: REC('rec-b2-14-priya'),
  say: REFRAME,
  terms: ['consigne'],
};

const A10_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a10-table',
  layer: 'core',
  sheetId: 'sheet-seul',
  title: 'Six consignes, six endroits',
  cols: ['Consigne', 'où la lire', 'ce qu’elle montre'],
  rows: [
    { cells: ['Ne pas se pencher au dehors', 'dans un train', 'ne pas, devant'], say: fr(E(1356)),
      detail: { title: 'Ne pas se pencher', body: "La vieille plaque des trains : ne pas, soudé, devant l'infinitif, et se reste. EN: ne pas in front, se kept.", say: fr(E(1356)) } },
    { cells: ['Composter son billet', 'dans une gare', 'l’ordre sans personne'], say: fr(E(1357)),
      detail: { title: 'Composter', body: "Son billet, pas ton ou votre : la consigne parle à tout le monde. EN: son, for everyone.", say: fr(E(1357)) } },
    { cells: ['Agiter avant emploi', 'sur un flacon', 'deux mots suffisent'], say: fr(E(1363)),
      detail: { title: 'Agiter avant emploi', body: "Une notice va à l'essentiel : un infinitif, un nom. EN: short and to the point.", say: fr(E(1363)) } },
    { cells: ['Préchauffer le four', 'dans une recette', 'une étape'], say: fr(E(1359)),
      detail: { title: 'Préchauffer', body: "Une recette enchaîne les infinitifs, une étape par phrase. EN: a recipe chains infinitives.", say: fr(E(1359)) } },
    { cells: ['Ne rien jeter', 'dans des toilettes', 'ne rien, devant'], say: fr(E(1362)),
      detail: { title: 'Ne rien jeter', body: "Ne rien, comme ne pas : les deux mots avant l'infinitif. EN: ne rien in front.", say: fr(E(1362)) } },
    { cells: ['S’adresser à l’accueil', 'dans un hall', 'le pronominal garde se'], say: fr(E(1364)),
      detail: { title: 'S’adresser', body: "Pour tout renseignement, s'adresser à l'accueil : se, pas vous ni rien. EN: se stays.", say: fr(E(1364)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consigne'],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Écris comme une affiche',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('L’ordre, sans personne', [
      it(E(1357), 'la gare'),
      it(E(1359), 'la recette'),
      it(E(1360), 'le formulaire'),
      it(E(1368), 'l’étiquette'),
    ], chk('« Vous remplissez le formulaire en lettres capitales. » Sur une affiche, à l’infinitif :',
      ['Remplir le formulaire en lettres capitales.', 'Remplissez le formulaire en lettres capitales.'], 0,
      'L’infinitif, sans personne. EN: remplir.')),
    grp('La négation', [
      it(E(1356), 'ne pas se pencher'),
      it(E(1358), 'ne pas laisser'),
      it(E(1362), 'ne rien jeter'),
      it(E(1366), 'ne pas ouvrir'),
    ], chk('Sur une affiche : « … la porte avant l’arrêt du train. »',
      ['Ne pas ouvrir', 'N’ouvrir pas', 'Pas ouvrir'], 0,
      'Ne pas, soudé, devant l’infinitif. EN: ne pas ouvrir.')),
    ctl('Se', 'Sur une affiche : « Pour tout renseignement, … à l’accueil. »',
      ['s’adresser', 'adresser'], 0,
      'Le pronominal garde se. EN: s’adresser.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consigne'],
};

const A10_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-exemples',
  layer: 'core',
  title: 'Plus poli, plus sec',
  frSub: 'Les cadres de la consigne',
  examples: [
    ex(E(1361), 'prière de : une demande écrite, polie, un peu ancienne'),
    ex(E(1365), 'veuillez : poli, et ne pas reste devant l’infinitif'),
    ex(E(1363), 'la notice la plus courte : un infinitif, un nom'),
    ex(E(1210), 'avant de, dans une consigne aussi'),
    ex(E(1364), 'pour tout renseignement : la formule des halls d’accueil'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consigne'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre consignes de travers',
  errors: [
    {
      wrong: 'Ne se pencher pas au dehors.',
      right: fr(E(1356)),
      why: "Normal : avec un verbe conjugué, pas vient après (ne vous penchez pas). Devant un infinitif, ne pas reste soudé et passe devant. EN: ne pas together, in front.",
    },
    {
      wrong: "Pour tout renseignement, adresser à l'accueil.",
      right: fr(E(1364)),
      why: "Normal : sans personne nommée, le pronom semble inutile. Mais s'adresser est pronominal : il garde se. EN: keep se.",
    },
    {
      wrong: 'Veuillez ne stationnez pas devant la sortie.',
      right: fr(E(1365)),
      why: "Normal : veuillez est déjà un ordre, alors le second verbe semble devoir suivre. Après veuillez, l'infinitif, avec ne pas devant. EN: veuillez + infinitive.",
    },
    {
      wrong: 'Préchauffé le four à cent quatre-vingts degrés.',
      right: fr(E(1359)),
      why: "Normal : à l'oral, préchauffer et préchauffé se disent pareil. Dans une recette, c'est l'infinitif : -er. EN: the infinitive ending.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consigne'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Réécrire : le règlement de la salle', TEXTE_A10, [
  { q: 'Les deux premières consignes.', a: "Présenter sa carte à l'entrée. Ne pas laisser ses affaires dans les vestiaires la nuit : ne pas devant, et sa ou ses, pour tout le monde." },
  { q: 'Les machines, les poids et la nourriture.', a: "Essuyer les machines après usage. Ranger les poids à leur place. Ne pas manger dans la salle." },
  { q: 'La dernière : pour réserver un cours, vous vous adressez à l’accueil.', a: "Pour réserver un cours, s'adresser à l'accueil : le pronominal garde se." },
  { q: 'Pourquoi « sa carte » et pas « votre carte » ?', a: "La consigne à l'infinitif ne s'adresse à personne en particulier : le possessif est celui de tout le monde, sa, son, ses." },
], 'rec-b2-14-texte-a10', ['consigne']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La négation', 'Sur une affiche :',
    ['Ne pas fumer.', 'Ne fumer pas.'], 0,
    'Ne pas, devant l’infinitif. EN: ne pas fumer.'),
  ctl('Se', '« Pour tout renseignement, … à l’accueil. »',
    ['s’adresser', 'adresser'], 0,
    'Le pronominal garde se. EN: s’adresser.'),
  ctl('Veuillez', '« Veuillez … devant la sortie. »',
    ['ne pas stationner', 'ne stationnez pas'], 0,
    'Veuillez + infinitif. EN: ne pas stationner.'),
], ['consigne']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Les consignes',
    opener: {
      line: "Ne pas se pencher au dehors : ici tu lis et tu écris l'infinitif des affiches, qui donne un ordre à tout le monde sans nommer personne. EN: Do not lean out: here you read and write the infinitive of notices, an order to everyone that names no one.",
      imageRef: 'lessons/constructions-infinitives/act10.jpg',
    },
    sections: [],
    milestone: "Tu écris une consigne à l'infinitif, avec ne pas devant, se gardé et veuillez ou prière de pour la politesse. EN: You can write a notice in the infinitive.",
    estScreens: 34, restPoints: ['a10-construire', 'a10-erreurs'],
  },
  sections: [A10_HISTOIRE, A10_TABLE, A10_CONSTRUIRE, A10_EXEMPLES, A10_ERREURS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: SUJET, QUESTION, NOM
 *
 *  The infinitive with no verb in front: as a subject (for everyone), in a
 *  deliberative question (Que faire ?), and after a noun or an adjective
 *  (de, or à for what is left to do). Past lessons 22 in B1 (facile à) and
 *  5 in B2 (heureux de + infinitif passé).
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a11-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'L’infinitif tout seul',
  frSub: 'Neuf phrases, qui est visé',
  lines: [
    ln(E(1371)), ln(E(1372)), ln(E(1373)), ln(E(1374)), ln(E(1375)),
    ln(E(1377)), ln(E(1378)), ln(E(1380)), ln(E(1382)),
  ],
  questions: [
    { q: 'Première phrase : qu’est-ce qui forme la jeunesse ?', opts: ['le voyage', 'l’école'], correct: 0, why: 'Voyager : l’infinitif sujet. EN: travelling.' },
    { q: 'Troisième phrase : à quoi sert le mensonge ?', opts: ['à rien', 'à se protéger'], correct: 0, why: 'Mentir ne sert à rien. EN: nothing.' },
    { q: 'Cinquième phrase : la personne sait-elle où aller ?', opts: ['non', 'oui'], correct: 0, why: 'Je n’en ai aucune idée. EN: no idea.' },
    { q: 'Sixième phrase : qu’annonce-t-on ?', opts: ['une ouverture', 'une fermeture'], correct: 0, why: 'L’ouverture d’un magasin. EN: an opening.' },
    { q: 'Huitième phrase : combien de factures reste-t-il ?', opts: ['trois', 'deux', 'aucune'], correct: 0, why: 'Trois factures à payer. EN: three.' },
  ],
  audio: REC('rec-b2-14-seul-ecoute'),
  say: REFRAME,
  terms: ['nom'],
};

const A11_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a11-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Sans verbe devant',
  frSub: 'Sujet, question, nom',
  hint: 'Quatre cartes. Les deux dernières citent des leçons passées.',
  audio: REC('rec-b2-14-seul'),
  say: REFRAME,
  terms: ['nom', 'qui'],
  cards: [
    {
      head: 'L’infinitif sujet', label: 'pour tout le monde',
      fr: fr(E(1371)), sub: rsOf(E(1371)),
      body: "Voyager est le sujet, et il vaut pour tout le monde. À l'oral, on le reprend souvent avec c'est : partir sans téléphone, c'est possible. EN: an infinitive can be the subject.",
    },
    {
      head: 'La question à l’infinitif', label: 'que faire',
      fr: fr(E(1374)), sub: rsOf(E(1374)),
      body: "Que faire ? À qui s'adresser ? Où aller ? Une question qu'on se pose, sans dire qui. En discours indirect : je ne sais pas quoi répondre. EN: a question you ask yourself.",
    },
    {
      head: 'Un nom, puis de', label: Cap(SUBJ_PASSE_REF),
      fr: fr(E(1379)), sub: rsOf(E(1379)),
      body: `Le droit de, le plaisir de, la chance de. Après un adjectif aussi : ravi de t'avoir revue, comme dans ${SUBJ_PASSE_REF}. EN: nouns and adjectives usually take de.`,
    },
    {
      head: 'À : ce qui reste à faire', label: Cap(CEST_REF),
      fr: fr('fr.b1.description-personnes-objets.1104'), sub: rsOf('fr.b1.description-personnes-objets.1104'),
      body: `« ${B122_REFRAME} » Difficile à trouver, des factures à payer, la première à arriver : à dit ce qui reste à faire, ou suit premier, seul, prêt. EN: à after these.`,
    },
  ],
};

const A11_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-trier',
  layer: 'core',
  size: 'lg',
  title: 'De ou à',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('De', [
      it(E(1377), 'le plaisir de'),
      it(E(1378), 'la chance de'),
      it(E(1379), 'le droit de'),
      it('fr.b2.emotions.1374', 'ravi de'),
    ], chk('« Vous avez le droit … demander un remboursement. »',
      ['de', 'à', 'pour'], 0,
      'Le droit de + infinitif. EN: le droit de.')),
    grp('À', [
      it(E(1380), 'des factures à payer'),
      it(E(1381), 'la première à'),
      it(E(1382), 'prêts à'),
      it('fr.b1.description-personnes-objets.1107', 'facile à'),
    ], chk('« J’ai encore trois factures … payer. »',
      ['à', 'de', 'pour'], 0,
      'Ce qui reste à faire : à. EN: à payer.')),
    ctl('C’est à toi', '« C’est à toi … décider. »',
      ['de', 'que'], 0,
      'C’est à quelqu’un de faire : son rôle. EN: it is up to you.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nom'],
};

const A11_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a11-focus',
  layer: 'core',
  sheetId: 'sheet-seul',
  title: 'Ce qu’il faut retenir',
  points: [
    "L'infinitif peut être sujet : Voyager forme la jeunesse. Pas d'article devant. EN: an infinitive can be a subject.",
    "Une question à l'infinitif ne nomme personne : Que faire ? À qui s'adresser ? EN: a question with no subject.",
    "Un nom ou un adjectif prend le plus souvent de : le droit de, heureux de. EN: nouns take de.",
    "À pour ce qui reste à faire, et après premier, seul, prêt : des factures à payer. EN: à for what is left to do.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nom'],
};

const A11_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a11-piege',
  layer: 'core',
  swipe: true,
  title: 'Le -ing et la mauvaise préposition',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Sujet : l’infinitif. Nom : de, ou à',
    body: "L'anglais met un -ing en sujet ; le français met l'infinitif, sans article. Après un nom, de ; à pour ce qui reste à faire, et après premier, seul, prêt. EN: the infinitive as subject; de after a noun, à for what is left to do.",
  },
  cards: [
    trap(E(1371), 'le -ing', 'Voyageant forme la jeunesse.', 'Le sujet est un infinitif : voyager. EN: the subject is an infinitive.'),
    trap(E(1372), 'l’article', "L'apprendre une langue prend du temps.", 'Pas d’article devant l’infinitif sujet. EN: no article.'),
    trap(E(1379), 'le droit à', 'Vous avez le droit à demander un remboursement.', 'Le droit à + nom, le droit de + infinitif. EN: le droit de.'),
    trap(E(1380), 'pour', "J'ai encore trois factures pour payer.", 'Ce qui reste à faire : à payer. EN: factures à payer.'),
    trap(E(1381), 'de', 'Elle a été la première de arriver.', 'Le premier, le seul, le dernier : à. EN: la première à.'),
    trap(E(1377), 'le plaisir à', "Nous avons le plaisir à vous annoncer l'ouverture de notre magasin.", 'Avoir le plaisir de + infinitif. EN: le plaisir de.'),
  ],
  drill: [
    { promptSay: '… ne sert à rien.', opts: ['Mentir', 'Mentant'], correct: 0 },
    { promptSay: '… qui s’adresser en cas de problème ?', opts: ['À', 'De'], correct: 0 },
    { promptSay: 'Vous avez le droit … demander un remboursement.', opts: ['à', 'de'], correct: 1 },
    { promptSay: 'J’ai encore trois factures … payer.', opts: ['à', 'pour'], correct: 0 },
    { promptSay: 'Elle a été la première … arriver.', opts: ['de', 'à'], correct: 1 },
    { promptSay: 'J’ai eu la chance … travailler avec elle.', opts: ['de', 'à'], correct: 0 },
    { promptSay: 'Nous sommes prêts … trouver un arrangement.', opts: ['de', 'à'], correct: 1 },
    { promptSay: 'Je ne sais pas … répondre.', opts: ['quoi', 'ce que'], correct: 0 },
  ],
  steps: STEPS('Sujet : l’infinitif. Nom : de, ou à', 'Le -ing et la mauvaise préposition'),
  audio: REC('rec-b2-14-piege-seul'),
  say: REFRAME,
  terms: ['nom'],
};

const A11_TEXTE = dansUnTexte('a11-texte', 'Lire : le blog d’Ousmane', TEXTE_A11, [
  { q: 'Trouve les infinitifs sujets.', a: "Partir seul (repris par c'est), voyager sans rien réserver, et voyager forme la jeunesse : trois infinitifs sujets, sans article." },
  { q: 'Trouve les questions à l’infinitif.', a: "Que faire ? Où dormir ? À qui demander son chemin ? Des questions qu'Ousmane se pose à lui-même, sans sujet." },
  { q: 'Trouve les noms suivis de de ou de à.', a: "La chance de rencontrer des gens formidables ; mille photos à trier, ce qui reste à faire." },
  { q: 'Dans « apprendre à se débrouiller », qui choisit la préposition ?', a: "Apprendre, le premier verbe : apprendre à. C'est le principe de l'acte 7." },
], 'rec-b2-14-texte-a11', ['nom']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le sujet', '« … prend du temps. »',
    ['Apprendre une langue', 'Apprenant une langue'], 0,
    'L’infinitif sujet, sans article. EN: apprendre.'),
  ctl('Le nom', '« Nous avons le plaisir … vous annoncer… »',
    ['de', 'à'], 0,
    'Le plaisir de. EN: de.'),
  ctl('À', '« J’ai encore trois factures … payer. »',
    ['à', 'de'], 0,
    'Ce qui reste à faire. EN: à payer.'),
], ['nom']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Sujet, question, nom',
    opener: {
      line: "Voyager forme la jeunesse ; que faire ? : ici l'infinitif se passe de verbe devant lui, et devient sujet, question ou complément d'un nom. EN: Here the infinitive stands without a verb in front: as a subject, a question or after a noun.",
      imageRef: 'lessons/constructions-infinitives/act11.jpg',
    },
    sections: [],
    milestone: "Tu emploies l'infinitif comme sujet, dans une question sans sujet, et après un nom avec de ou à. EN: You can use the infinitive as a subject, in a question and after a noun.",
    estScreens: 34, restPoints: ['a11-trier', 'a11-piege'],
  },
  sections: [A11_ECOUTE, A11_CARTES, A11_TRIER, A11_FOCUS, A11_PIEGE, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12: TA RÉCLAMATION
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La lettre que tu vas imiter',
  frSub: 'Claire Moreau écrit à une compagnie ferroviaire',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'correspondance', en: 'connecting train', note: 'Le train suivant, qu’on prend après le premier.' },
    { word: 'clôturé', en: 'closed', note: 'Clôturer un dossier : le fermer, le déclarer terminé.' },
    { word: 'ci-joint', en: 'enclosed, attached', note: 'Joint à la lettre, avec elle.' },
  ],
  questions: [
    { q: 'Global : que demande Claire Moreau, et pourquoi ?', a: "Une indemnisation égale à la moitié du prix de son billet, pour plus de deux heures de retard, et le remboursement du billet pour Nice qu'elle a dû racheter." },
    { q: 'Détail : dans quel ordre les faits sont-ils racontés ?', a: "La réservation, le blocage à Valence, l'arrivée tardive, la correspondance manquée, le formulaire, le silence de trois semaines : l'ordre du temps, marqué par après avoir, après être." },
    { q: '« Sans avoir répondu à ma demande » : qu’est-ce qui n’a pas été fait ?', a: "La réponse du service client, qui aurait dû venir avant la clôture du dossier : sans + infinitif passé." },
    { q: 'Pourquoi « sans que les passagers reçoivent » et pas « sans recevoir » ?', a: "Parce qu'il y a deux sujets : le train reste bloqué, les passagers ne reçoivent rien. Sans que + subjonctif." },
    { q: 'Inférence : à quoi sert la phrase « Je tiens à rappeler que la réglementation européenne… » ?', a: "À montrer que la demande repose sur un droit, pas sur une faveur : la compagnie ne peut pas l'ignorer." },
    { q: 'Position : quel ton Claire Moreau choisit-elle ?', a: "Ferme mais courtois : des faits datés, des chiffres, une demande précise, une échéance (quinze jours), et les formules de politesse d'une lettre formelle." },
  ],
  audio: REC('rec-b2-14-modele'),
  say: REFRAME,
  terms: ['passe', 'sans'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  sheetId: 'sheet-passe',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Une réclamation qui tient',
  steps: [
    'Donne l’objet et la raison de ta lettre : je me permets de vous écrire au sujet de… EN: state what the letter is about.',
    'Raconte les faits dans l’ordre, avec des dates : après avoir commandé, après être arrivé. EN: tell the facts in order.',
    'Dis ce qui n’a pas été fait, et ce que tu as dû faire : sans avoir reçu, j’ai dû faire réparer. EN: what was not done, what you had to do.',
    'Formule une demande précise, avec une échéance : je vous demande de, faute de réponse. EN: a precise request and a deadline.',
    'Termine par une formule de politesse, puis vérifie qui fait chaque infinitif. EN: close politely, then check every infinitive.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passe', 'qui'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  title: 'Quatre phrases que toute réclamation contient',
  cases: [
    { situation: 'Tu ouvres la lettre', fr: fr(E(1388)), en: en(E(1388)) },
    { situation: 'Tu dis ce que tu as dû payer', fr: fr(E(1390)), en: en(E(1390)) },
    { situation: 'Tu dis ce qui n’a pas été fait', fr: fr(E(1391)), en: en(E(1391)) },
    { situation: 'Tu fixes une échéance', fr: fr(E(1394)), en: en(E(1394)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sans', 'faire'],
};

const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'L’appel au service client',
  frSub: 'Six tours, à voix haute',
  setting: 'Ton aspirateur, commandé il y a trois semaines, n’est jamais arrivé. Tu appelles le service client avant d’écrire ta lettre.',
  turns: [
    {
      ai: 'Service client, bonjour. Que puis-je faire pour vous ?', en: 'Customer service, hello. What can I do for you?',
      user: 'Bonjour. Après avoir attendu trois semaines, je n’ai toujours pas reçu ma commande.',
      userEn: 'Hello. I have waited three weeks and still have not received my order. (Après avoir + participle: the waiting came first.)',
      alts: [
        { fr: 'Bonjour. J’ai commandé il y a trois semaines, et je n’ai toujours rien reçu.', en: 'Hello. I ordered three weeks ago and still have received nothing. (No infinitive: also right.)' },
        { fr: 'Je vous appelle pour signaler un colis qui n’est jamais arrivé.', en: 'I am calling to report a parcel that never arrived. (Pour + present infinitive: the purpose of the call.)' },
      ],
    },
    {
      ai: 'D’après notre système, le colis a été livré le 4.', en: 'According to our system, the parcel was delivered on the 4th.',
      user: 'Le livreur a dû le déposer sans avoir sonné, personne ne l’a vu.',
      userEn: 'The driver must have left it without ringing; nobody saw him. (Sans avoir: the step that was missing.)',
      alts: [
        { fr: 'Il a dû le laisser quelque part sans sonner.', en: 'He must have left it somewhere without ringing. (Sans + present infinitive: also right.)' },
        { fr: 'Il l’a laissé sans que personne le voie.', en: 'He left it without anybody seeing him. (Two subjects: sans que + subjunctive.)' },
      ],
    },
    {
      ai: 'Avez-vous demandé à vos voisins ?', en: 'Have you asked your neighbours?',
      user: 'Oui, et je crois avoir fait tout ce qu’il fallait.',
      userEn: 'Yes, and I think I did everything I had to. (One subject: croire + past infinitive.)',
      alts: [
        { fr: 'Oui, et je crois que j’ai fait tout ce qu’il fallait.', en: 'Yes, and I think I did everything I had to. (Que is just as correct here.)' },
        { fr: 'Oui, je me souviens d’avoir demandé à tout l’immeuble.', en: 'Yes, I remember asking the whole building. (Se souvenir de + past infinitive.)' },
      ],
    },
    {
      ai: 'Il s’agissait bien d’un aspirateur, n’est-ce pas ?', en: 'It was a vacuum cleaner, was it not?',
      user: 'Oui, et comme j’en avais besoin, j’ai dû en faire livrer un autre par un magasin.',
      userEn: 'Yes, and as I needed one, I had to have another delivered by a shop. (Faire + infinitive: someone else delivered; en before faire.)',
      alts: [
        { fr: 'Oui, et j’en ai acheté un autre ailleurs.', en: 'Yes, and I bought another one elsewhere. (No infinitive: also right.)' },
        { fr: 'Oui, et je me suis fait livrer un autre aspirateur ailleurs.', en: 'Yes, and I had another vacuum cleaner delivered elsewhere. (Se faire + infinitive, as in lesson 18 in B1.)' },
      ],
    },
    {
      ai: 'Que souhaitez-vous que nous fassions ?', en: 'What would you like us to do?',
      user: 'Je tiens à être remboursé, et je compte sur vous pour le faire rapidement.',
      userEn: 'I want to be refunded, and I am counting on you to do it quickly. (Tenir à; compter sur vous pour + infinitive.)',
      alts: [
        { fr: 'Je voudrais être remboursée, s’il vous plaît.', en: 'I would like to be refunded, please. (Vouloir + infinitive, one subject.)' },
        { fr: 'Je vous demande de me rembourser la totalité.', en: 'I ask you to refund me in full. (Demander à quelqu’un de + infinitive.)' },
      ],
    },
    {
      ai: 'C’est noté. Autre chose ?', en: 'Noted. Anything else?',
      user: 'Oui : pour éviter ce genre de problème, faites signer le client à la livraison.',
      userEn: 'Yes: to avoid this kind of problem, have the customer sign on delivery. (Pour + present: a purpose; faire + infinitive.)',
      alts: [
        { fr: 'Non, merci de m’avoir écouté.', en: 'No, thank you for listening to me. (Merci de + past infinitive.)' },
        { fr: 'Non, je vous remercie de bien vouloir traiter ma demande.', en: 'No, thank you for kindly dealing with my request. (Remercier de + infinitive.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['qui', 'faire', 'sans'],
};

const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Ta lettre de réclamation',
  frSub: 'Mission écrite, format B2',
  brief: "Tu as commandé un produit ou un service (un meuble, un appareil, un voyage, une réparation), et rien ne s'est passé comme prévu. Écris une lettre de réclamation à l'entreprise : raconte ce qui s'est passé dans l'ordre, dis ce que tu as dû faire à cause d'elle, et demande une solution précise.",
  briefEn: 'You ordered a product or a service (furniture, an appliance, a trip, a repair) and nothing went as planned. Write a letter of complaint to the company: tell what happened in order, say what you had to do because of it, and ask for a precise remedy.',
  produce: "Écris une lettre formelle de 180 à 250 mots, avec au moins six constructions infinitives : un après + infinitif passé, un sans + infinitif, faire + infinitif (j'ai dû faire réparer…), un verbe avec sa préposition (tenir à, s'attendre à…) et un pour. Termine par ta demande et une formule de politesse.",
  responseSpec: { kind: 'text', minWords: 180, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : Une vraie lettre à une entreprise : l'objet, les faits datés, ce que tu as dû faire, une demande précise avec un montant ou une solution, une échéance et une formule de politesse. Entre 180 et 250 mots.",
          '2 : La lettre existe, mais la demande reste vague, ou il manque l’échéance ou la formule finale, ou la longueur sort un peu des limites.',
          '1 : Un récit sans demande, ou un texte beaucoup trop court.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          "3 : Les faits dans l'ordre du temps (après avoir, puis, ensuite), un paragraphe pour les faits et un pour la demande, et chaque infinitif a clairement la bonne personne.",
          '2 : La lettre se suit, mais l’ordre des faits se brouille une fois, ou un infinitif a le mauvais sujet.',
          '1 : On ne sait pas toujours ce qui s’est passé avant quoi, ni qui a fait quoi.',
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          "2 : Au moins six constructions infinitives variées : infinitif passé après après, sans, faire + infinitif, un verbe avec à ou de, un pour, et un infinitif après croire, dire ou un nom (le droit de).",
          '1 : Deux ou trois constructions seulement, toujours les mêmes.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          "2 : Les formes sont justes : avoir ou être, l'accord, le pronom devant faire, fait sans accord, la bonne préposition, pour + passé pour une raison.",
          "1 : Des erreurs fréquentes (après recevoir, je fais le réparer, je les ai faits réparer, je tiens de) gênent parfois la lecture.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          "2 : Un ton ferme et courtois : vous, des formules de lettre (je me permets de, je vous prie d'agréer), aucune insulte, aucun langage familier.",
          '1 : Le ton est trop familier (salut, c’est nul) ou agressif, ou les formules de politesse manquent.',
        ],
      },
    ],
  },
  scaffold: [
    'Je me permets de vous écrire',
    'Après avoir',
    'sans avoir',
    "J'ai dû faire",
    'Je tiens à',
    'Je vous demande de',
    'Faute de réponse',
    "Dans l'attente de votre réponse,",
  ],
  modelAnswer: "Objet : réclamation, commande n° 48213 (lave-linge). Madame, Monsieur, je me permets de vous écrire au sujet du lave-linge que j'ai acheté sur votre site le 3 mars. Après avoir passé commande, j'ai reçu une date de livraison : le 10 mars. Ce jour-là, le livreur est reparti sans avoir installé l'appareil, alors que l'installation était comprise dans le prix. Je ne m'attendais pas à devoir le brancher moi-même. Après l'avoir mis en marche, j'ai constaté une fuite importante. J'ai appelé votre service client pour obtenir la visite d'un technicien, mais personne n'est venu. J'ai donc dû faire venir un plombier, qui a trouvé un tuyau percé, et j'ai fait réparer l'appareil à mes frais, pour cent vingt euros. Je vous ai écrit deux fois depuis, sans avoir reçu de réponse. Je tiens à rappeler que la garantie légale de conformité couvre ce type de défaut. Je vous demande donc de me rembourser la somme de cent vingt euros, sur présentation de la facture ci-jointe, et de faire vérifier l'appareil par un de vos techniciens. Faute de réponse sous quinze jours, je saisirai le médiateur de la consommation. Je vous remercie de bien vouloir examiner ma demande et vous prie d'agréer, Madame, Monsieur, mes salutations distinguées. Jonas Keller\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : l'objet, les faits datés (3 mars, 10 mars), ce que Jonas a dû faire et payer, une demande chiffrée, une échéance et la formule finale.\n2. Cohérence : l'ordre du temps (après avoir passé commande, ce jour-là, après l'avoir mis en marche, depuis), les faits puis la demande (donc) ; chaque infinitif a pour sujet je, sauf avec faire.\n3. Étendue : après + infinitif passé (deux fois, dont un pronom devant avoir), sans avoir installé, sans avoir reçu, s'attendre à, pour obtenir, faire venir, faire réparer, faire vérifier par, tenir à, demander de, remercier de.\n4. Correction : avoir ou être justes, le pronom l' devant avoir, la préposition de chaque verbe, pour + présent pour un but.\n5. Registre : vous, des formules de lettre, un ton ferme sans agressivité.",
  modelAnswerEn: "Subject: complaint, order no. 48213 (washing machine). Dear Sir or Madam, I am writing to you about the washing machine I bought on your website on 3 March. After placing the order, I was given a delivery date: 10 March. On that day, the delivery man left without installing the machine, although installation was included in the price. I did not expect to have to connect it myself. After switching it on, I noticed a major leak. I called your customer service to get a technician to visit, but nobody came. So I had to call out a plumber, who found a split hose, and I had the machine repaired at my own expense, for one hundred and twenty euros. I have written to you twice since, without receiving a reply. I would like to point out that the legal guarantee of conformity covers this type of defect. I therefore ask you to refund me the sum of one hundred and twenty euros, on presentation of the enclosed invoice, and to have the machine checked by one of your technicians. Failing a reply within fifteen days, I will refer the matter to the consumer ombudsman. Thank you for kindly considering my request. Yours faithfully, Jonas Keller. The marker's notes (not counted): 1. Task: subject line, dated facts, what Jonas had to do and pay, a costed request, a deadline and the closing formula. 2. Coherence: time order, facts then request; every infinitive has je as its subject except after faire. 3. Range: past infinitive after après (twice, once with a pronoun before avoir), sans avoir twice, s'attendre à, pour obtenir, faire venir, faire réparer, faire vérifier par, tenir à, demander de, remercier de. 4. Accuracy: auxiliaries, pronoun before avoir, the preposition of each verb, pour + present for a purpose. 5. Register: vous, letter formulas, firm without aggression.",
  watchFor: [
    { pattern: 'Après followed by a present infinitive in written French (après recevoir, après signer).', criterion: 'correction', feedback: 'À l’écrit, après prend l’infinitif passé : après avoir reçu, après être arrivé.', ref: 'a3-piege' },
    { pattern: 'The wrong auxiliary or a missing agreement in a past infinitive (après avoir parti, après s’être levé for a woman).', criterion: 'correction', feedback: 'L’auxiliaire du passé composé, et l’accord avec celui qui agit : après être partie.', ref: 'a2-erreurs' },
    { pattern: 'An infinitive whose doer is not the main subject (après avoir reçu le colis, l’écran était cassé).', criterion: 'coherence', feedback: 'Celui qui fait l’infinitif doit être le sujet : après avoir reçu le colis, j’ai constaté que l’écran était cassé.', ref: 'a3-construire' },
    { pattern: 'Pour + present infinitive for a reason already given (sanctionné pour mentir), or pour + past for a purpose.', criterion: 'correction', feedback: 'Pour + présent : le but. Pour + passé : la raison, une chose déjà faite.', ref: 'a4-erreurs' },
    { pattern: 'Sans que with one subject, or sans + infinitive with two subjects.', criterion: 'correction', feedback: 'Un seul sujet : sans + infinitif. Deux sujets : sans que + subjonctif.', ref: 'a5-piege' },
    { pattern: 'Que with one subject after vouloir (je veux que je sois remboursé).', criterion: 'correction', feedback: 'Avec vouloir et un seul sujet : je veux être remboursé.', ref: 'a6-piege' },
    { pattern: 'A wrong preposition before an infinitive (je tiens de, je compte de, je m’attends de).', criterion: 'correction', feedback: 'C’est le premier verbe qui choisit : tenir à, compter sans rien, s’attendre à.', ref: 'a7-erreurs' },
    { pattern: 'The calque « j’ai eu la machine réparée » or a participle after faire (fait réparé).', criterion: 'correction', feedback: 'J’ai fait réparer la machine : faire + infinitif.', ref: 'a8-piege' },
    { pattern: 'A pronoun before the infinitive with faire (je fais la réparer), or fait with an agreement (je les ai faits réparer).', criterion: 'correction', feedback: 'Le pronom devant faire, et fait sans accord : je l’ai fait réparer.', ref: 'a9-erreurs' },
    { pattern: 'Fewer than six infinitive constructions, or always the same one.', criterion: 'etendue', feedback: 'Varie : après avoir, sans avoir, faire réparer, tenir à, pour, le droit de.', ref: 'a12-plan' },
    { pattern: 'No precise request, no deadline, or a body outside 180 to 250 words.', criterion: 'tache', feedback: 'Demande une solution chiffrée et donne une échéance : faute de réponse sous quinze jours…', ref: 'a12-plan' },
    { pattern: 'A familiar or aggressive register (salut, c’est nul, vous êtes des voleurs), or no letter formulas.', criterion: 'registre', feedback: 'Reste ferme mais courtois, comme Claire Moreau : je me permets de, je vous prie d’agréer.', ref: 'a12-lecture' },
  ],
  graderNotes: [
    'Count the words of the body only; the subject line, the salutation (Madame, Monsieur) and the signature do not count. 180 to 250 with 10% tolerance (162 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'Judge each infinitive by its DOER first: after après, sans, pour, avant de and the declarative verbs, the doer must be the subject of the main verb; after faire and laisser, it is someone else. A hanging infinitive costs one « correction » point once, not per occurrence, and « coherence » only if it actually misleads.',
    'BOTH FORMS ARE CORRECT with one subject after croire, penser, dire, affirmer, reconnaître, espérer, se souvenir: « je crois avoir compris » and « je crois que j’ai compris ». Never score the que-clause as an error there. After vouloir, préférer, souhaiter, aimer with one subject, the que-clause IS an error.',
    'Accept « sans + infinitif présent » and « sans + infinitif passé » alike where both make sense (sans payer, sans avoir payé), « commencer à » and « commencer de », « continuer à » and « continuer de ».',
    '« Laissé » before an infinitive: accept it invariable (1990 rectifications) or agreed; « fait » before an infinitive must be invariable.',
    'Letter formulas (« Dans l’attente de votre réponse », « Je vous prie d’agréer… ») are correct and expected, but they do not count toward the six infinitive constructions unless the learner builds one (je vous remercie de bien vouloir…).',
    'Participle clauses (« N’ayant reçu aucune réponse ») belong to another lesson: do not score them as errors if correct, and give them no range credit here.',
    'Writer gender is unknown: judge agreement (remboursé or remboursée, partie or parti) for internal consistency only.',
    'Accept regional usage and settings (Belgium, Switzerland, Québec, West Africa): courriel and mail, septante, nonante, magasiner.',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 16 du B1 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passe', 'faire', 'prep'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Dis ta réclamation à voix haute',
  frSub: 'Qui agit, et quand',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['qui', 'passe'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-faire',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'l’infinitif passé', v: 'avoir ou être + participe', say: fr(E(1223)),
      detail: { title: 'L’infinitif passé', body: "L'auxiliaire du passé composé, l'accord avec celui qui agit. Il dit « avant l'autre verbe ». EN: done before the other verb.", say: fr(E(1226)) } },
    { k: 'après, pour, sans', v: 'déjà fait, la raison, ce qui manque', say: fr(E(1255)),
      detail: { title: 'Après, pour, sans', body: "Après avoir fini ; pour + présent le but, pour + passé la raison ; sans avoir payé, ou sans que avec deux sujets. EN: après, pour and sans.", say: fr(E(1271)) } },
    { k: 'un seul sujet', v: 'l’infinitif, ou que avec croire', say: fr(E(1206)),
      detail: { title: 'Un seul sujet', body: "Vouloir : l'infinitif seul. Croire, dire, affirmer : les deux se disent. EN: vouloir only the infinitive; croire both.", say: fr(E(1287)) } },
    { k: 'à, de ou rien', v: 'le premier verbe choisit', say: fr(E(1308)),
      detail: { title: 'À, de ou rien', body: "Tenir à, s'efforcer de, oser et compter sans rien ; finir de ou par, venir ou venir de. EN: the first verb picks.", say: fr(E(1310)) } },
    { k: 'faire, laisser', v: 'quelqu’un d’autre agit, pronom devant', say: fr(E(1325)),
      detail: { title: 'Faire et laisser', body: "Je la fais réparer, je les laisse jouer. Fait ne s'accorde jamais devant un infinitif. EN: pronoun before faire; fait invariable.", say: fr(E(1346)) } },
    { k: 'l’infinitif seul', v: 'consigne, sujet, question, nom', say: fr(E(1356)),
      detail: { title: 'L’infinitif seul', body: "Ne pas se pencher ; Voyager forme la jeunesse ; Que faire ? ; le droit de, des factures à payer. EN: notices, subjects, questions, nouns.", say: fr(E(1379)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['faire', 'passe', 'consigne'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu construis l'infinitif passé et tu l'emploies après après, pour et sans. Tu remplaces que par l'infinitif avec un seul sujet, en sachant quand les deux formes se disent. Tu choisis à, de ou rien selon le premier verbe, tu fais faire et tu laisses faire, avec le pronom devant et fait sans accord, et tu écris l'infinitif des consignes. Le piège qui reste, c'est la personne : un infinitif n'a pas de sujet, et l'anglais le laisse flotter. Avant l'examen, reprends ta lettre et, pour chaque infinitif, demande-toi qui agit et quand. EN: For every infinitive, ask who does it and when.",
  stats: [
    { k: 'Le moment', v: 'après avoir, avant de, pour avoir, sans avoir' },
    { k: 'La personne', v: 'un seul sujet, ou faire et laisser' },
    { k: 'La préposition', v: 'le premier verbe choisit' },
    { k: 'Sans verbe devant', v: 'consigne, sujet, question, nom' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 2 to 11, a round that
 *  recycles lessons 16, 17, 18 and 22 in B1 and 5, 7 and 12 in B2 (named in
 *  each question), and an exam-format round (TCF, DELF B2 and TEF items).
 *  `fold()` strips accents, commas, apostrophes and hyphens, so every typed
 *  answer turns on an auxiliary, a participle letter, a pronoun, a
 *  preposition or a word choice. Where another rewrite is just as correct,
 *  it is in `accept`. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_Q): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const MESSAGE_TEF = "Bonjour, ici le service après-vente. Nous avons bien reçu votre réclamation au sujet du canapé. Pour être remboursée, vous devez d'abord remplir le formulaire en ligne, puis nous envoyer la facture du menuisier. Après avoir examiné votre dossier, nous vous rappellerons sous huit jours. Merci de votre patience.";

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a12-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r2-passe', label: 'L’infinitif passé', targets: ['passe-forme'],
      questions: [
        mc('Partir, à l’infinitif passé :', ['être parti', 'avoir parti', 'être partir'], 0, 'Partir prend être au passé composé. EN: être parti.', 'a2-table'),
        mc('« Après s’être …, elles sont sorties. » (se préparer)', ['préparées', 'préparé', 'préparés'], 0, 'Elles agissent : préparées. EN: agree with elles.', 'a2-construire'),
        mc('« Il faut avoir fini le dossier avant vendredi. » L’infinitif passé dit…', ['une action finie avant vendredi', 'une action finie hier'], 0, 'Avant l’autre moment, même dans le futur. EN: done before Friday.', 'a2-rappel'),
        tI('Mets le verbe à l’infinitif passé.', 'Après (manger), nous sommes allés marcher.', fr(E(1222)), 'Manger prend avoir : après avoir mangé. EN: avoir mangé.', 'a2-table'),
        tI('Mets le verbe à l’infinitif passé. C’est elle qui rentre.', 'Après (rentrer), elle a appelé sa mère.', fr(E(1230)), 'Être, et l’accord avec elle : rentrée. EN: être rentrée.', 'a2-construire'),
        eS('Après avoir parti, elle a regretté sa décision.', fr(E(1223)), 'Partir prend être : être partie. EN: être partie.', 'a2-erreurs'),
        eS('Les documents ? Je les ai signés après avoir les lus.', fr(E(1228)), 'Le pronom se place devant avoir. EN: les avoir lus.', 'a2-erreurs'),
        lC('Écoute. Qui est arrivé à l’heure ?', fr(E(1225)), ['elles, un groupe au féminin', 'lui, un homme seul'], 0, 'Contentes, arrivées : un groupe au féminin. EN: they, feminine.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-apres', label: 'Après et avant de', targets: ['apres-present'],
      questions: [
        mc('« … le bail, nous avons reçu les clés. »', ['Après avoir signé', 'Après signer', 'Avant de signé'], 0, 'La signature vient d’abord : après avoir signé. EN: après avoir signé.', 'a3-cartes'),
        mc('« Lis bien les conditions … » (la signature n’a pas encore eu lieu)', ['avant de signer', 'après avoir signé', 'avant signer'], 0, 'Pas encore fait : avant de + présent. EN: avant de signer.', 'a3-construire'),
        mc('« Ne pars pas avant d’avoir fini tes devoirs. » Ce qui est demandé :', ['finir les devoirs, puis partir', 'partir, puis finir les devoirs'], 0, 'Avant d’avoir fini : pas de départ tant que ce n’est pas fait. EN: finish first.', 'a3-cartes'),
        tI('Complète avec après + l’infinitif passé.', 'Après (attendre) une heure, nous sommes repartis.', fr(E(1245)), 'Attendre prend avoir : après avoir attendu. EN: avoir attendu.', 'a3-construire'),
        tI('Complète avec après + l’infinitif passé.', "Après (s'excuser), la directrice a proposé un geste commercial.", fr(E(1243)), 'Pronominal : être, et l’accord avec la directrice. EN: s’être excusée.', 'a3-piege'),
        eS("Après ouvrir le colis, j'ai constaté les dégâts.", fr(E(1248)), 'Après veut l’infinitif passé. EN: après avoir ouvert.', 'a3-piege', ["À l'ouverture du colis, j'ai constaté les dégâts.", "En ouvrant le colis, j'ai constaté les dégâts."]),
        eS("Il est interdit de sortir avant d'avoir rendre sa copie.", fr(E(1251)), 'Avoir, puis le participe : rendu. EN: avoir rendu.', 'a3-cartes', ['Il est interdit de sortir avant de rendre sa copie.']),
        lC('Écoute. Qu’a fait cette personne en premier ?', fr(E(1239)), ['il est parti', 'il a cherché ses clés'], 0, 'Après être parti : le départ vient d’abord. EN: he left first.', 'a3-histoire'),
      ],
    },
    {
      id: 'r4-pour', label: 'Pour : le but ou la faute', targets: ['pour-confus'],
      questions: [
        mc('« Il a été sanctionné pour avoir menti. » Pour avoir menti dit…', ['la raison de la sanction', 'le but de la sanction'], 0, 'Une faute déjà commise : la raison. EN: the reason.', 'a4-cartes'),
        mc('« J’ai pris un taxi pour … à l’heure. »', ['arriver', 'être arrivé'], 0, 'Un but : pour + présent. EN: arriver.', 'a4-trier'),
        mc('« Elle a été félicitée pour … le portefeuille. »', ['avoir retrouvé', 'retrouver'], 0, 'Un mérite déjà acquis : pour avoir retrouvé. EN: avoir retrouvé.', 'a4-trier'),
        tI('Mets le verbe à l’infinitif qui convient.', 'Le conducteur a été arrêté pour (brûler) un feu rouge.', fr(E(1258)), 'La faute est faite : pour avoir brûlé. EN: avoir brûlé.', 'a4-cartes'),
        tI('Mets le verbe à l’infinitif qui convient.', 'Je vous écris pour (signaler) un problème de livraison.', fr(E(1259)), 'Le but de la lettre : pour signaler. EN: signaler.', 'a4-trier'),
        eS('Il a perdu son permis pour rouler trop vite.', fr(E(1265)), 'La faute est faite : pour avoir roulé. EN: pour avoir roulé.', 'a4-erreurs', ["Il a perdu son permis parce qu'il a roulé trop vite.", "Il a perdu son permis parce qu'il roulait trop vite."]),
        eS('Elle a reçu une médaille pour sauver un enfant.', fr(E(1264)), 'Le sauvetage est fait : pour avoir sauvé. EN: pour avoir sauvé.', 'a4-cartes', ["Elle a reçu une médaille parce qu'elle a sauvé un enfant."]),
        lC('Écoute. Pourquoi a-t-il menti ?', fr(E(1256)), ['pour avoir le poste', 'parce qu’on l’avait sanctionné'], 0, 'Pour obtenir : un but. EN: to get the job.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-sans', label: 'Sans', targets: ['sans-que-colle'],
      questions: [
        mc('« Nous sommes partis … les enfants s’en aperçoivent. »', ['sans que', 'sans'], 0, 'Deux sujets : sans que. EN: sans que.', 'a5-cartes'),
        mc('« Il est parti sans … » (il n’a pas payé)', ['avoir payé', 'qu’il ait payé'], 0, 'Un seul sujet : sans + infinitif. EN: sans avoir payé.', 'a5-construire'),
        mc('« J’ai été débité deux fois sans avoir … reçu. »', ['rien', 'personne', 'pas'], 0, 'Rien avant le participe. EN: rien.', 'a5-cartes'),
        tI('Complète avec sans + infinitif.', 'Elle a quitté la réunion sans (dire) un mot.', fr(E(1280)), 'Elle seule agit : sans dire. EN: sans dire.', 'a5-construire', ['Elle a quitté la réunion sans avoir dit un mot.']),
        tI('Complète avec sans que + subjonctif.', 'Ils ont annulé ma commande sans que je (être) prévenue.', fr(E(1274)), 'Après sans que, le subjonctif : sois. EN: sois.', 'a5-piege', ["Ils ont annulé ma commande sans que j'aie été prévenue."]),
        eS("Ils ont annulé ma commande sans qu'ils m'aient prévenue.", fr(E(1273)), 'Un seul sujet : sans + infinitif. EN: sans m’avoir prévenue.', 'a5-piege', ['Ils ont annulé ma commande sans me prévenir.']),
        eS('Tu ne peux pas juger sans que tu lises le rapport.', fr(E(1276)), 'Un seul sujet : sans + infinitif. EN: sans avoir lu.', 'a5-construire', ['Tu ne peux pas juger sans lire le rapport.']),
        lC('Écoute. Les enfants ont-ils vu partir leurs parents ?', fr(E(1275)), ['non', 'oui'], 0, 'Sans que les enfants s’en aperçoivent. EN: no.', 'a5-cartes'),
      ],
    },
    {
      id: 'r6-sujet', label: 'Un seul sujet', targets: ['que-de-trop'],
      questions: [
        mc('Un seul sujet : quelle phrase est juste ?', ['Je crois que j’ai compris.', 'Je veux que je parte.'], 0, 'Avec croire, que reste juste ; avec vouloir, non. EN: croire allows que.', 'a6-cartes'),
        mc('« Il pense partir en septembre. » Qui part ?', ['lui', 'quelqu’un d’autre'], 0, 'Un seul sujet : lui. EN: he does.', 'a6-trier'),
        mc('« Il pense que tu pars en septembre. » Peut-on dire « il pense partir » ?', ['non, ce serait lui qui part', 'oui, même sens'], 0, 'Deux sujets : que, seulement. EN: two subjects.', 'a6-trier'),
        tI('Réécris avec un infinitif.', "Elle affirme qu'elle l'a vu devant la banque.", fr(E(1287)), 'Un seul sujet, le pronom devant avoir. EN: l’avoir vu.', 'a6-cartes'),
        tI('Réécris avec un infinitif.', "Je me souviens que j'ai fermé la porte à clé.", fr(E(1292)), 'Se souvenir de + infinitif passé. EN: d’avoir fermé.', 'a6-trier', ['Je me souviens avoir fermé la porte à clé.']),
        eS('Je veux que je parte avant six heures.', fr(OA(1400)), 'Vouloir et un seul sujet : l’infinitif seul. EN: je veux partir.', 'a6-piege'),
        eS('Il prétend de ne rien savoir.', fr(E(1300)), 'Prétendre, sans préposition. EN: prétendre ne rien savoir.', 'a6-piege', ["Il prétend qu'il ne sait rien."]),
        lC('Écoute. Qui a reçu le colis abîmé ?', fr(E(1296)), ['celle qui fait la déclaration', 'une autre personne'], 0, 'Elle déclare avoir reçu : un seul sujet, c’est elle. EN: the woman making the statement.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-prep', label: 'À, de ou rien', targets: ['preposition-fausse'],
      questions: [
        mc('« Je tiens … vous remercier. »', ['à', 'de', 'sans préposition'], 0, 'Tenir à. EN: tenir à.', 'a7-table'),
        mc('« Nous comptons … partir samedi. »', ['sans préposition', 'à', 'de'], 0, 'Compter + infinitif. EN: no preposition.', 'a7-table'),
        mc('« Le vendeur a fini par accepter. » Cela veut dire…', ['il a accepté au bout du compte', 'il a terminé d’accepter'], 0, 'Finir par : en fin de compte. EN: he ended up accepting.', 'a7-cartes'),
        mc('« Je viens de recevoir votre courriel. » Quand ?', ['il y a très peu de temps', 'je suis venu pour le recevoir'], 0, 'Venir de : juste avant. EN: just now.', 'a7-cartes'),
        tI('Complète avec à, de, par ou rien, et écris la phrase.', "L'équipe s'efforce (…) répondre sous quarante-huit heures.", fr(E(1312)), 'S’efforcer de. EN: de.', 'a7-table'),
        tI('Complète avec à, de, par ou rien, et écris la phrase.', "Je ne m'attendais pas (…) recevoir une facture aussi élevée.", fr(E(1307)), 'S’attendre à. EN: à.', 'a7-table'),
        eS("Il n'ose pas de demander de l'aide.", fr(E(1309)), 'Oser, sans préposition. EN: oser demander.', 'a7-erreurs', ["Il n'ose pas demander d'aide.", "Il n'ose demander de l'aide."]),
        lC('Écoute. Le locataire a-t-il payé ?', fr(E(1322)), ['oui, au bout du compte', 'non, il a arrêté de payer'], 0, 'Finir par payer : il a fini par le faire. EN: yes, in the end.', 'a7-construire'),
      ],
    },
    {
      id: 'r8-faire', label: 'Faire faire', targets: ['faire-oublie'],
      questions: [
        mc('« Je fais réparer ma voiture. » Qui répare ?', ['le garagiste', 'moi'], 0, 'Faire : quelqu’un d’autre. EN: the mechanic.', 'a8-cartes'),
        mc('I had the locks changed :', ["J'ai fait changer les serrures.", "J'ai eu les serrures changées.", "J'ai changé les serrures."], 0, 'Faire + infinitif. EN: faire changer.', 'a8-piege'),
        mc('« Le professeur fait lire le texte … élèves. »', ['aux', 'les', 'à les'], 0, 'Le texte est déjà complément : à. EN: aux élèves.', 'a8-cartes'),
        tI('Réécris avec faire + infinitif : quelqu’un d’autre fera le travail.', 'Tu devrais vérifier les freins avant de partir.', fr(E(1337)), 'Faire vérifier : un garagiste vérifie. EN: faire vérifier.', 'a8-construire'),
        tI('Réécris avec faire + infinitif, en commençant par « Elle ».', 'Elle a appelé un plombier, et il est venu en urgence.', fr(E(1334)), 'Faire venir. EN: faire venir.', 'a8-construire', ['Elle a fait venir un plombier.', 'Elle a fait venir en urgence un plombier.']),
        eS('Nous avons eu une nouvelle cuisine installée.', fr(E(1327)), 'Pas de calque : faire + infinitif. EN: fait installer.', 'a8-piege', ['Nous nous sommes fait installer une nouvelle cuisine.']),
        eS('Faites entrez le client suivant.', fr(E(1333)), 'Après faire, l’infinitif. EN: faites entrer.', 'a8-piege'),
        lC('Écoute. Qui a repeint la façade ?', fr(E(1338)), ['des ouvriers, pour le propriétaire', 'le propriétaire lui-même'], 0, 'A fait repeindre : d’autres ont peint. EN: workers did.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-pronoms', label: 'Laisser, et les pronoms', targets: ['pronom-deplace'],
      questions: [
        mc('« Ma voiture ? Je … réparer demain. »', ['la fais', 'fais la', 'fais-la'], 0, 'Le pronom devant faire. EN: je la fais réparer.', 'a9-cartes'),
        mc('« Ces meubles, je les ai … livrer. »', ['fait', 'faits', 'faites'], 0, 'Fait ne s’accorde pas devant un infinitif. EN: fait.', 'a9-cartes'),
        mc('« …, il est attendu. »', ['Fais-le entrer', 'Le fais entrer', 'Fais entrer le'], 0, 'À l’impératif affirmatif, le pronom suit faire. EN: fais-le entrer.', 'a9-cartes'),
        tI('Remplace le chauffe-eau par un pronom.', "J'ai fait réparer le chauffe-eau lundi.", "Je l'ai fait réparer lundi.", 'Le pronom devant ai fait, et fait sans accord. EN: je l’ai fait réparer.', 'a9-construire', ["Lundi, je l'ai fait réparer."]),
        tI('Remplace ta lettre et Paul par des pronoms.', "J'ai fait lire ta lettre à Paul hier soir.", 'Je la lui ai fait lire hier soir.', 'La, puis lui, devant ai fait. EN: je la lui ai fait lire.', 'a9-cartes', ['Hier soir, je la lui ai fait lire.']),
        eS('Les documents ? Je les ai faits traduire.', fr(E(1351)), 'Fait reste fait devant un infinitif. EN: fait traduire.', 'a9-erreurs'),
        eS('Je laisse les jouer dans le jardin.', fr(E(1349)), 'Le pronom devant laisser. EN: je les laisse jouer.', 'a9-erreurs'),
        lC('Écoute. Que veut dire cette phrase ?', fr(E(1341)), ['n’y pense plus', 'fais attention de ne pas tomber'], 0, 'Laisser tomber : abandonner. EN: forget it.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-consignes', label: 'Les consignes', targets: ['consigne-conjuguee'],
      questions: [
        mc('Sur une affiche : « … au dehors. »', ['Ne pas se pencher', 'Ne se pencher pas', 'Pas se pencher'], 0, 'Ne pas, soudé, devant. EN: ne pas se pencher.', 'a10-table'),
        mc('Sur une affiche : « Pour tout renseignement, … à l’accueil. »', ["s'adresser", 'adresser', 'se adresser'], 0, 'Le pronominal garde se, élidé. EN: s’adresser.', 'a10-table'),
        mc('« Veuillez … devant la sortie. »', ['ne pas stationner', 'ne stationner pas', 'stationner ne pas'], 0, 'Veuillez + infinitif, ne pas devant. EN: ne pas stationner.', 'a10-exemples'),
        tI('Réécris la consigne à l’infinitif.', 'Préchauffez le four à cent quatre-vingts degrés.', fr(E(1359)), 'L’infinitif des recettes. EN: préchauffer.', 'a10-construire', ['Préchauffer le four à 180 degrés.']),
        tI('Réécris la consigne à l’infinitif, à la forme négative.', 'Ne laissez pas les bagages sans surveillance.', fr(E(1358)), 'Ne pas devant l’infinitif. EN: ne pas laisser.', 'a10-construire', ['Ne pas laisser ses bagages sans surveillance.']),
        eS('Ne se pencher pas au dehors.', fr(E(1356)), 'Ne pas, ensemble, devant l’infinitif. EN: ne pas se pencher.', 'a10-erreurs'),
        eS("Pour tout renseignement, adresser à l'accueil.", fr(E(1364)), 'S’adresser garde se. EN: s’adresser.', 'a10-erreurs'),
        lC('Écoute. Où lit-on cette consigne ?', fr(E(1363)), ['sur un flacon', 'sur une porte de train'], 0, 'Agiter avant emploi : un produit. EN: on a bottle.', 'a10-exemples'),
      ],
    },
    {
      id: 'r11-seul', label: 'Sujet, question, nom', targets: ['infinitif-seul'],
      questions: [
        mc('« … forme la jeunesse. »', ['Voyager', 'Voyageant', 'À voyager'], 0, 'L’infinitif sujet. EN: voyager.', 'a11-cartes'),
        mc('« … s’adresser en cas de problème ? »', ['À qui', 'Qui', 'Que'], 0, 'S’adresser à quelqu’un : à qui. EN: à qui.', 'a11-cartes'),
        mc('« Vous avez le droit … demander un remboursement. »', ['de', 'à', 'pour'], 0, 'Le droit de. EN: de.', 'a11-trier'),
        mc('« J’ai encore trois factures … payer. »', ['à', 'de', 'pour'], 0, 'Ce qui reste à faire. EN: à.', 'a11-trier'),
        tI('Complète avec à ou de et écris la phrase.', "C'est à toi (…) décider.", fr(E(1383)), 'C’est à quelqu’un de faire. EN: de.', 'a11-trier'),
        tI('Complète avec à ou de et écris la phrase.', 'Elle a été la première (…) arriver.', fr(E(1381)), 'Le premier à. EN: à.', 'a11-cartes'),
        eS("Nous avons le plaisir à vous annoncer l'ouverture de notre magasin.", fr(E(1377)), 'Avoir le plaisir de. EN: de.', 'a11-piege'),
        lC('Écoute. Que veut dire la personne ?', fr(E(1376)), ['elle ne trouve pas de réponse', 'elle ne veut pas répondre'], 0, 'Je ne sais pas quoi répondre. EN: she has no answer.', 'a11-cartes'),
      ],
    },
    {
      id: 'r12-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(SUBJ_INF_REF)} : « Je pars tôt … éviter les bouchons. »`, ['pour', 'pour que'], 0, `« ${B116_REFRAME} » EN: ${B116_REFRAME_EN}`, 'a3-cartes'),
        mc(`${Cap(PRONOMS_REF)} : « Ta lettre ? Oui, je … ai donnée. » (à Paul)`, ['la lui', 'lui la'], 0, `« ${B117_REFRAME} » EN: ${B117_REFRAME_EN}`, 'a9-cartes'),
        mc(`${Cap(PASSIF_REF)} : « Il s’est fait … par son frère. »`, ['aider', 'aidé'], 0, `« ${B118_REFRAME} » EN: ${B118_REFRAME_EN}`, 'a8-cartes'),
        mc(`${Cap(CEST_REF)} : « Ce formulaire est facile … remplir. »`, ['à', 'de'], 0, `« ${B122_REFRAME} » EN: ${B122_REFRAME_EN}`, 'a11-cartes'),
        tI(`${Cap(SUBJ_PASSE_REF)} : un seul sujet, mets à l’infinitif passé.`, 'Il est furieux (se tromper) de train.', fr('fr.b2.emotions.1373'), `« ${B205_REFRAME} » EN: ${B205_REFRAME_EN}`, 'a2-rappel'),
        mc(`${Cap(FUT_ANT_REF)} : « Après que tu … parti, je fermerai la maison. »`, ['seras', 'sois'], 0, `« ${B207_REFRAME} » EN: ${B207_REFRAME_EN}`, 'a3-cartes'),
        mc(`${Cap(GERONDIF_REF)} : laquelle dit deux actions en même temps ?`, ['Il est entré en courant.', 'Il est entré après avoir couru.'], 0, `« ${B212_REFRAME} » EN: ${B212_REFRAME_EN}`, 'a3-cartes'),
        lC(`Écoute. ${Cap(SUBJ_INF_REF)} : un sujet ou deux ?`, fr(OA(1499)), ['deux', 'un seul'], 0, 'Elle range, les invités arrivent : deux sujets, avant que. EN: two subjects.', 'a3-cartes'),
      ],
    },
    {
      id: 'r13-examen', label: 'Comme à l’examen', targets: ['reclamation-plate'],
      questions: [
        mc('Format TCF. Choisissez la bonne réponse : « … commandé en janvier, je n’ai toujours rien reçu. »', ['Après avoir', 'Après', 'Avant d’avoir', 'Pour avoir'], 0, 'La commande vient d’abord : après avoir. EN: après avoir.', 'a3-cartes'),
        mc('Format TCF : « Je vous remercie de bien … examiner ma demande. »', ['vouloir', 'voulant', 'voulu', 'veuillez'], 0, 'Remercier de, puis l’infinitif : bien vouloir. EN: vouloir.', 'a12-usages'),
        mc('Format DELF B2, compréhension écrite. D’après le forum de l’acte 1, qui a réparé le pied du canapé ?', ['un menuisier', 'Nadia elle-même', 'le livreur'], 0, 'J’ai fait réparer : un menuisier. EN: a carpenter.', 'a1-lecture'),
        mc('Format DELF B2. « La société a été condamnée pour avoir trompé ses clients. » La phrase dit…', ['pourquoi elle a été condamnée', 'dans quel but elle a été condamnée', 'ce qu’elle doit faire'], 0, 'Pour + infinitif passé : la raison. EN: why.', 'a4-cartes'),
        tI('Format TCF, phrase à compléter.', "Je vous écris pour (signaler) que mon colis n'est jamais arrivé.", "Je vous écris pour signaler que mon colis n'est jamais arrivé.", 'Le but de la lettre : pour + présent. EN: signaler.', 'a4-trier'),
        tI('Format DELF B2, production. Reformulez avec sans + infinitif passé.', "Le technicien est reparti ; il n'avait pas réglé la panne.", fr(E(1397)), 'Un seul sujet : sans avoir réglé. EN: sans avoir réglé.', 'a5-cartes', ['Le technicien est reparti sans régler la panne.']),
        eS("Après avoir reçu le colis, l'écran était cassé.", "Après avoir reçu le colis, j'ai constaté que l'écran était cassé.", 'Celui qui reçoit doit être le sujet : je. EN: I am the one who received it.', 'a3-construire',
          ["Après avoir reçu le colis, j'ai vu que l'écran était cassé.", "Après avoir reçu le colis, j'ai découvert que l'écran était cassé.", "Après avoir reçu le colis, je me suis aperçu que l'écran était cassé.", "Après avoir reçu le colis, je me suis aperçue que l'écran était cassé.", "Après avoir reçu le colis, je me suis rendu compte que l'écran était cassé.", "Après avoir reçu le colis, je me suis rendue compte que l'écran était cassé.", "Après avoir reçu le colis, j'ai remarqué que l'écran était cassé."],
          'Format DELF B2, correction. L’infinitif n’a pas le bon sujet : écris la phrase correcte, avec je comme sujet. EN: The infinitive has the wrong subject; rewrite it with je as the subject.'),
        lC('Format TEF, compréhension orale. Écoute ce message. Que faut-il faire d’abord ?', MESSAGE_TEF, ['remplir le formulaire en ligne', 'appeler le service client', 'envoyer une photo du canapé'], 0, 'D’abord le formulaire, puis la facture. EN: fill in the online form first.', 'a12-lecture'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.12 does. */
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
  type: 'reviewDeck',
  id: 'a12-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'after eating', back: 'après avoir mangé', say: fr(E(1222)) },
    { front: 'after leaving (she)', back: 'après être partie', say: fr(E(1223)) },
    { front: 'disciplined for lying', back: 'sanctionné pour avoir menti', say: fr(E(1255)) },
    { front: 'without receiving anything', back: 'sans avoir rien reçu', say: fr(E(1277)) },
    { front: 'I think I understood', back: 'je crois avoir compris, ou je crois que j’ai compris', say: fr(E(1206)) },
    { front: 'to be keen to, to dare', back: 'tenir à, oser (sans préposition)', say: fr(E(1308)) },
    { front: 'I had my car repaired', back: 'j’ai fait réparer ma voiture', say: fr(E(1325)) },
    { front: 'I am having it repaired', back: 'je la fais réparer', say: fr(E(1344)) },
    { front: 'do not lean out', back: 'ne pas se pencher au dehors', say: fr(E(1356)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Un verbe sans papiers',
  body: `${REFRAME} Tu as repris le compte des sujets de ${SUBJ_INF_REF}, la file de ${PRONOMS_REF}, se faire de ${PASSIF_REF} et l'infinitif passé de ${SUBJ_PASSE_REF}, pour faire de l'infinitif une vraie proposition : il dit avant ou pas encore, il prend le bon sujet, il laisse agir quelqu'un d'autre, et il donne les ordres des affiches. La suite, c'est ${NEXT_REF} : la cause et la conséquence, sans parce que ni donc. EN: Next comes the following lesson: cause and consequence beyond parce que and donc.`,
  points: [
    'Après avoir, pour avoir, sans avoir : l’infinitif passé dit « avant ».',
    'Un seul sujet : l’infinitif ; avec croire et dire, que reste juste.',
    'Le premier verbe choisit à, de ou rien.',
    'Je la fais réparer : le pronom devant faire, fait sans accord.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passe', 'sujet', 'faire'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ta réclamation',
    opener: {
      line: "Rien ne s'est passé comme prévu, et tu écris pour obtenir réparation : ici tu mets tous tes infinitifs au service d'une lettre qui porte. EN: Nothing went as planned and you write for a remedy: here every infinitive serves a letter that gets results.",
      imageRef: 'lessons/constructions-infinitives/act12.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ta réclamation et passé l'examen : quatre-vingt-seize questions, douze manches. EN: You wrote your complaint and sat the exam: ninety-six questions, twelve rounds.",
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r5-sans', 'a12-quiz/r9-pronoms', 'a12-review'],
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
  { id: 'd-passe', title: 'Avoir ou être, et l’accord', format: 'mcq' as const, coach: "L'auxiliaire du passé composé, puis l'accord avec celui qui agit. EN: the passé composé auxiliary, then agreement.", q: 'Partir, à l’infinitif passé :', opts: ['être parti', 'avoir parti'], correct: 0, why: 'Je suis parti, donc être parti. EN: être.', items: [E(1216), E(1217), E(1218), E(1223), E(1224), E(1230)], audio: AUDIO },
  { id: 'd-apres', title: 'Déjà fait, ou pas encore', format: 'sort' as const, coach: "Deux piles : l'action est finie avant (après), ou elle est encore à venir (avant de). EN: already done, or not yet.", buckets: ['déjà fait : après', 'pas encore : avant de'], items: [E(1240), E(1242), E(1245), E(1238), E(1244), E(1249)], audio: AUDIO },
  { id: 'd-pour', title: 'Le but ou la raison', format: 'sort' as const, coach: "Deux piles : ce qu'on cherche (pour + présent), ou ce qu'on a fait (pour + passé). EN: purpose or reason.", buckets: ['le but', 'la raison'], items: [E(1256), E(1259), E(1266), E(1255), E(1258), E(1265)], audio: AUDIO },
  { id: 'd-sans', title: 'Sans ou sans que', format: 'sort' as const, coach: "Deux piles : une seule personne agit, ou deux. EN: one subject or two.", buckets: ['un seul sujet : sans', 'deux sujets : sans que'], items: [E(1271), E(1276), E(1283), E(1274), E(1275), OA(1515)], audio: AUDIO },
  { id: 'd-sujet', title: 'Un sujet, deux façons', format: 'flashcard' as const, coach: "Lis chaque phrase, puis redis-la avec que quand c'est possible : je crois avoir compris, je crois que j'ai compris. EN: say each one again with que.", items: [E(1206), E(1287), E(1289), E(1292), E(1296), E(1300)], audio: AUDIO },
  { id: 'd-prep', title: 'La préposition du premier verbe', format: 'mcq' as const, coach: "Le premier verbe choisit : tenir à, s'efforcer de, oser et compter sans rien. EN: the first verb picks.", q: '« Nous comptons … partir samedi. »', opts: ['sans préposition', 'de'], correct: 0, why: 'Compter + infinitif. EN: no preposition.', items: [E(1304), E(1307), E(1308), E(1310), E(1311), E(1312)], audio: AUDIO },
  { id: 'd-faire', title: 'Moi, ou quelqu’un d’autre', format: 'sort' as const, coach: "Deux piles : le sujet fait l'action lui-même, ou il la fait faire. EN: do it yourself, or have it done.", buckets: ['je le fais moi-même', 'quelqu’un d’autre le fait'], items: [E(1326), E(1305), E(1316), E(1325), E(1327), E(1335)], audio: AUDIO },
  { id: 'd-pronom', title: 'Le pronom devant le bloc', format: 'mcq' as const, coach: "Le pronom se met devant faire ou laisser, et fait ne s'accorde pas. EN: pronoun before faire.", q: '« Ma voiture ? Je … réparer. »', opts: ['la fais', 'fais la'], correct: 0, why: 'Devant faire. EN: je la fais réparer.', items: [E(1344), E(1345), E(1346), E(1347), E(1348), E(1351)], audio: AUDIO },
  { id: 'd-consigne', title: 'Comme sur une affiche', format: 'flashcard' as const, coach: "Lis chaque consigne à voix haute, puis dis-la à quelqu'un avec vous : ne vous penchez pas. EN: read each notice, then say it with vous.", items: [E(1356), E(1357), E(1358), E(1362), E(1364), E(1366)], audio: AUDIO },
  { id: 'd-seul', title: 'De ou à après un nom', format: 'sort' as const, coach: "Deux piles : un nom ou un adjectif suivi de de, ou ce qui reste à faire et premier, prêt, suivis de à. EN: de or à after a noun.", buckets: ['de', 'à'], items: [E(1377), E(1378), E(1379), E(1380), E(1381), E(1382)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 et le B2 en renfort', format: 'flashcard' as const, coach: "Six phrases des leçons passées : pour chacune, dis qui agit et si c'est avant ou pas encore. EN: who acts, and when.", items: [OA(1400), OA(1499), 'fr.b1.faits-et-procedures.1164', 'fr.b2.emotions.1365', 'fr.b2.projets-et-futur.1883', 'fr.b1.description-personnes-objets.1104'], audio: AUDIO },
  { id: 'd-reclamation', title: 'Ta lettre, à voix haute', format: 'flashcard' as const, coach: "Lis chaque phrase de lettre, puis adapte-la à ta propre réclamation. EN: read each line, then adapt it to your own complaint.", items: [E(1388), E(1389), E(1390), E(1391), E(1392), 'fr.b1.correspondance.1102'], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'passe-forme', description: 'Builds the past infinitive with the wrong auxiliary, forgets the agreement with être, or puts the pronoun after avoir.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a12-mission'], drill: 'd-passe', retest: 'd-passe' },
  { id: 'apres-present', description: 'Writes après + present infinitive, avant de + past infinitive for a later action, or hangs après avoir on a subject that did not act.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-apres', retest: 'd-apres' },
  { id: 'pour-confus', description: 'Uses pour + present infinitive for a reason already done (sanctionné pour mentir), or pour + past for a purpose, or pour after merci and s’excuser before an infinitive.', detectOn: ['a4-trier', 'a4-erreurs', 'a4-check', 'a12-mission'], drill: 'd-pour', retest: 'd-pour' },
  { id: 'sans-que-colle', description: 'Uses sans que with a single subject, sans + infinitive with two subjects, or misplaces rien and personne.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a12-mission'], drill: 'd-sans', retest: 'd-sans' },
  { id: 'que-de-trop', description: 'Writes que after vouloir with one subject, or wrongly rejects the que-clause after croire or dire, or misplaces a pronoun or negation before the infinitive.', detectOn: ['a6-trier', 'a6-piege', 'a6-check', 'a12-mission'], drill: 'd-sujet', retest: 'd-sujet' },
  { id: 'preposition-fausse', description: 'Picks the wrong preposition before an infinitive (tenir de, compter de, s’attendre de) or confuses finir de and finir par, venir and venir de.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a12-mission'], drill: 'd-prep', retest: 'd-prep' },
  { id: 'faire-oublie', description: 'Drops faire and claims to have done the work, calques « j’ai eu la voiture réparée », or puts a participle or a conjugated verb after faire.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a12-mission'], drill: 'd-faire', retest: 'd-faire' },
  { id: 'pronom-deplace', description: 'Places the pronoun before the infinitive instead of before faire or laisser, orders two pronouns wrongly, or makes fait agree.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a12-mission'], drill: 'd-pronom', retest: 'd-pronom' },
  { id: 'consigne-conjuguee', description: 'Splits ne and pas around the infinitive of a notice, drops se from a pronominal, or conjugates the verb after veuillez.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check'], drill: 'd-consigne', retest: 'd-consigne' },
  { id: 'infinitif-seul', description: 'Uses an -ant form or an article for an infinitive subject, or the wrong preposition after a noun or adjective (le droit à, des factures pour payer).', detectOn: ['a11-trier', 'a11-piege', 'a11-check'], drill: 'd-seul', retest: 'd-seul' },
  { id: 'recyclage', description: 'Loses a contrast this lesson stands on: the subject count, the pronoun file, se faire, facile à, the past infinitive after a feeling, après que + indicative, or the gérondif.', detectOn: ['a2-rappel', 'a3-cartes', 'a8-cartes'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'reclamation-plate', description: 'In an exam-format complaint, avoids infinitive constructions or leaves an infinitive with no clear doer, so range and accuracy are not met.', detectOn: ['a12-plan', 'a12-scenario', 'a12-mission'], drill: 'd-reclamation', retest: 'd-reclamation' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names a position. */
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
  sheet('sheet-passe', 'L’infinitif passé et le moment', ['la forme', 'l’accord', 'après, avant de', 'pour, sans'], [
    teach('sheet-passe-teach', 'Avant l’autre verbe',
      `${REFRAME} L'infinitif passé, c'est avoir ou être à l'infinitif, puis le participe, avec l'auxiliaire du passé composé. Il dit que l'action est finie avant l'autre verbe, même dans le futur. Avec être, le participe s'accorde avec celui qui agit. EN: ${REFRAME_EN} Avoir or être plus the participle: done before the other verb.`),
    table('sheet-passe-forme', 'La forme', ['Verbe', 'infinitif passé', 'exemple'], [
      ['finir', 'avoir fini', 'Il faut avoir fini le dossier avant vendredi.'],
      ['partir', 'être parti(e)(s)', 'Après être partie, elle a regretté sa décision.'],
      ['se lever', 's’être levé(e)(s)', "Après s'être levés, les enfants ont pris leur petit-déjeuner."],
      ['avec un pronom', 'le pronom devant avoir', 'Je les ai signés après les avoir lus.'],
      ['avec une négation', 'ne pas avoir, n’avoir pas', "Il regrette de n'avoir pas prévenu ses collègues."],
    ]),
    table('sheet-passe-moment', 'Après, avant de, pour, sans', ['Tournure', 'infinitif', 'exemple'], [
      ['après', 'passé', "Après avoir signé le bail, nous avons reçu les clés."],
      ['avant de', 'présent', 'Avant de partir, vérifie que les fenêtres sont fermées.'],
      ['avant de (pas avant que ce soit fait)', 'passé', "Ne pars pas avant d'avoir fini tes devoirs."],
      ['pour (le but)', 'présent', 'Il a menti pour obtenir le poste.'],
      ['pour (la raison)', 'passé', 'Il a été sanctionné pour avoir menti.'],
      ['sans', 'présent ou passé', 'Il est parti sans payer, sans avoir payé.'],
      ['deux sujets', 'avant que, après que, sans que', 'Il est sorti sans que personne l’entende.'],
    ]),
  ]),
  sheet('sheet-sujet', 'Un seul sujet', ['vouloir', 'croire, dire, affirmer', 'deux sujets', 'pronoms et négation'], [
    teach('sheet-sujet-teach', 'Compter, puis regarder le verbe',
      `« ${B116_REFRAME} » Avec vouloir, préférer, souhaiter, aimer, un seul sujet impose l'infinitif. Avec croire, penser, dire, affirmer, reconnaître, espérer, se souvenir, l'infinitif est possible et un peu plus soigné, mais que reste juste. Avec deux sujets, que, toujours. EN: vouloir only the infinitive; croire and dire both; two subjects, que.`),
    table('sheet-sujet-table', 'Un sujet ou deux', ['Verbe', 'un seul sujet', 'deux sujets'], [
      ['vouloir', 'je veux partir', 'je veux que tu partes'],
      ['croire', "je crois avoir compris ou je crois que j'ai compris", 'je crois que tu as compris'],
      ['penser', 'il pense partir ou il pense qu’il partira', 'il pense que tu pars'],
      ['affirmer', "elle affirme l'avoir vu ou qu'elle l'a vu", "elle affirme que je l'ai vu"],
      ['se souvenir', "je me souviens d'avoir fermé la porte", "je me souviens qu'il a fermé la porte"],
      ['prétendre', 'il prétend ne rien savoir', "il prétend que je ne sais rien"],
    ]),
  ]),
  sheet('sheet-prep', 'À, de ou rien', ['à', 'de', 'sans préposition', 'les paires de sens'], [
    teach('sheet-prep-teach', 'Le premier verbe choisit',
      "La préposition devant un infinitif dépend du verbe qui le précède, jamais de l'infinitif. Apprends chaque verbe avec la sienne. Quelques verbes changent de sens selon la préposition. EN: the first verb picks the preposition; learn each verb with it."),
    table('sheet-prep-table', 'Les verbes de la leçon', ['à', 'de', 'sans préposition'], [
      ['tenir à, s’attendre à', 's’efforcer de, il s’agit de', 'oser, compter'],
      ['se mettre à, commencer à', 'finir de, venir de', 'vouloir, pouvoir, devoir'],
      ['hésiter à, réussir à', 'décider de, essayer de, refuser de', 'aimer, préférer, espérer'],
      ['obliger quelqu’un à, aider quelqu’un à', 'empêcher quelqu’un de, demander à quelqu’un de', 'penser (avoir l’intention), venir (pour)'],
    ]),
    table('sheet-prep-paires', 'Même verbe, autre sens', ['Tournure', 'sens', 'exemple'], [
      ['finir de', 'terminer', "J'ai fini de ranger le bureau."],
      ['finir par', 'au bout du compte', 'Le locataire a fini par payer son loyer.'],
      ['penser à', 'ne pas oublier', 'Pense à acheter du pain en rentrant.'],
      ['penser', 'avoir l’intention', 'Je pense acheter une voiture électrique.'],
      ['venir', 'venir pour', 'Je viens chercher mon colis.'],
      ['venir de', 'juste avant', 'Je viens de recevoir votre courriel.'],
      ['commencer à (ou de)', 'le début', 'Elle a commencé à apprendre le piano à quarante ans.'],
      ['commencer par', 'la première étape', 'Commence par lire les consignes.'],
    ]),
  ]),
  sheet('sheet-faire', 'Faire et laisser + infinitif', ['qui agit', 'l’agent', 'les pronoms', 'l’accord'], [
    teach('sheet-faire-teach', 'Le sujet décide, un autre agit',
      `Faire + infinitif : quelqu'un d'autre fait l'action. Celui qui agit arrive avec à si l'infinitif a déjà un complément, ou avec par. Laisser + infinitif : tu permets. Le pronom se place devant faire ou laisser, et fait ne s'accorde jamais devant un infinitif. Se faire est dans ${PASSIF_REF}. EN: someone else acts; pronoun before faire; fait never agrees.`),
    table('sheet-faire-table', 'Les formes', ['Cas', 'exemple', 'à retenir'], [
      ['faire + infinitif', 'Je fais réparer ma voiture.', 'le garagiste répare'],
      ['l’agent avec à', 'Le professeur fait lire le texte aux élèves.', 'le texte est déjà complément'],
      ['l’agent avec par', "J'ai fait visiter l'appartement par une agence.", 'surtout un professionnel'],
      ['faire faire', 'Il faut faire faire un double des clés.', 'correct'],
      ['un pronom', 'Je la fais réparer.', 'devant faire'],
      ['deux pronoms', 'Je la lui ai fait lire.', 'la, puis lui'],
      ['l’impératif', 'Fais-le entrer.', 'le pronom derrière'],
      ['l’accord', 'Ces meubles, je les ai fait livrer.', 'fait, jamais faits'],
      ['laisser', 'Je les laisse jouer. Laisse tomber.', 'permettre ; abandonner'],
    ]),
  ]),
  sheet('sheet-seul', 'L’infinitif sans verbe devant', ['les consignes', 'l’infinitif sujet', 'les questions', 'après un nom'], [
    teach('sheet-seul-teach', 'Consigne, sujet, question, nom',
      `Sur une affiche, l'infinitif donne l'ordre sans nommer personne ; ne pas passe devant, soudé, et le pronominal garde se. En sujet, l'infinitif vaut pour tout le monde, sans article. Dans une question, il ne dit pas qui. Après un nom, de le plus souvent ; à pour ce qui reste à faire. Pour facile à, voir ${CEST_REF}. EN: notices, subjects, questions, nouns.`),
    table('sheet-seul-table', 'Les usages', ['Usage', 'exemple', 'à retenir'], [
      ['consigne', 'Ne pas se pencher au dehors.', 'ne pas devant, se gardé'],
      ['consigne polie', 'Veuillez ne pas stationner devant la sortie.', 'veuillez, prière de'],
      ['sujet', 'Voyager forme la jeunesse.', 'pas d’article'],
      ['question', "À qui s'adresser en cas de problème ?", 'personne n’est nommé'],
      ['nom + de', 'Vous avez le droit de demander un remboursement.', 'le droit de, le plaisir de'],
      ['nom + à', "J'ai encore trois factures à payer.", 'ce qui reste à faire'],
      ['premier, seul, prêt + à', 'Elle a été la première à arriver.', 'à'],
      ["c'est à quelqu'un de", "C'est à toi de décider.", 'son rôle'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-14-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const EXERCISE = 'One voice, read as written WITH the bracketed infinitives and the blanks spoken as a short pause: this is the exercise text, not the answer.';
const TRAP = "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions in promptSound are NEVER spoken.";
const REC_DESC: Record<string, string> = {
  'rec-b2-14-forum': "The consumer forum thread (act 1), two voices, one take: Nadia (Brussels accent, tired but precise) for her message, Marc (Liège, calm, a little older) for the reply. The infinitive constructions are read at the pace of the rest: the learner is meant to notice them, not be told.",
  'rec-b2-14-passe': 'The four past-infinitive cards (act 2). One coach voice. Card two reads « avoir fini · être parti · s’être levé » with a short pause between the three.',
  'rec-b2-14-passe-ecoute': `${ONE_TAKE} Eight lines. The liaison in « après avoir » [apʁɛzavwaʁ] and « après être » [apʁɛzɛtʁ] is made, naturally.`,
  'rec-b2-14-ines': 'Inès and her friend Léa (act 3), Lausanne, two voices, one take, relaxed, packing a suitcase. A Swiss accent is welcome.',
  'rec-b2-14-apres': 'The four après / avant de cards (act 3). One voice. Cards three and four quote lessons 16 in B1 and 7 in B2; read them with the same rhythm as the others.',
  'rec-b2-14-piege-apres': TRAP,
  'rec-b2-14-texte-a3': `Lucas's moving-day account (act 3). ${EXERCISE}`,
  'rec-b2-14-pour-ecoute': `${ONE_TAKE} Nine lines, a regional radio newsreader, neutral. No emphasis on « pour »: the tense of the infinitive carries the meaning.`,
  'rec-b2-14-pour': 'The four pour cards (act 4). One voice. Card one and card two are read as a pair, with the same melody.',
  'rec-b2-14-texte-a4': 'The Geneva news brief (act 4), one voice, a newsreader, neutral.',
  'rec-b2-14-awa': 'Awa and Mme Diop (act 5), Dakar, two voices, one take, a calm bank office. Awa is firm and precise, never angry.',
  'rec-b2-14-sans': 'The four sans cards (act 5). One voice. Card four reads « sans avoir rien reçu » and « sans rien avoir reçu » with equal ease: both are correct.',
  'rec-b2-14-piege-sans': TRAP,
  'rec-b2-14-texte-a5': `Samia's email to her managing agent (act 5). ${EXERCISE}`,
  'rec-b2-14-roy': 'Mme Roy and Officer Lavoie (act 6), Montréal, two voices with a Québec accent, one take, a quiet police station. Mme Roy corrects herself naturally from « je crois avoir vu » to « je crois que je l’ai vu »: both are right, and she must not sound as if the first was wrong.',
  'rec-b2-14-sujet': 'The four one-subject cards (act 6). One voice. Card one quotes lesson 16 in B1.',
  'rec-b2-14-sujet-ecoute': `${ONE_TAKE} Nine lines. Lines one and two (l'avoir vu / qu'elle l'a vu) must be read with identical rhythm; lines three and four (il pense partir / il pense que tu pars) too.`,
  'rec-b2-14-piege-sujet': TRAP,
  'rec-b2-14-texte-a6': "M. Girard's witness statement (act 6), one older male voice, read as written with every que: the rewrite is the exercise.",
  'rec-b2-14-chloe': 'Chloé and Hugo (act 7), Bordeaux, two voices, one take, a bike workshop with a little background noise. Chloé speaks fast and cheerfully.',
  'rec-b2-14-paires': 'The four meaning-pair cards (act 7). One voice. In each card, read the two uses as a pair with a clear pause between them.',
  'rec-b2-14-texte-a7': "Paul's email to his team (act 7). One voice; each blank is read as a short pause, never filled.",
  'rec-b2-14-sofia': 'Sofia and a coach voice (act 8), Brussels, one take, at a kitchen table. Sofia is amused and decided; a Belgian accent is welcome.',
  'rec-b2-14-faire': 'The four faire cards (act 8). One voice. Card four quotes lesson 18 in B1.',
  'rec-b2-14-faire-ecoute': `${ONE_TAKE} Nine lines. Lines one and two (je fais réparer / je répare moi-même) must be read with the same rhythm, so only faire tells them apart.`,
  'rec-b2-14-piege-faire': TRAP,
  'rec-b2-14-texte-a8': "Hélène's to-do list (act 8), one voice, read as written: the rewrite with faire is the exercise.",
  'rec-b2-14-pronoms-ecoute': `${ONE_TAKE} Nine lines. « Je la fais réparer » and « je les laisse jouer » are read as one group each, with no stress on the pronoun.`,
  'rec-b2-14-pronoms': 'The four pronoun cards (act 9). One voice. Card two quotes lesson 17 in B1; card three reads « je la lui ai fait lire » as one smooth group.',
  'rec-b2-14-texte-a9': "Théo's message (act 9), one young voice, casual, read as written with every repeated noun.",
  'rec-b2-14-priya': 'Priya and Luc (act 10), Geneva station, two voices, one take, with light station ambience. Priya has a light Indian English accent in French; Luc a Swiss accent.',
  'rec-b2-14-texte-a10': 'The gym rules written with vous (act 10), one voice, read as written: the rewrite in the infinitive is the exercise.',
  'rec-b2-14-seul-ecoute': `${ONE_TAKE} Nine lines. The questions (lines four and five) keep a natural rising or falling question melody.`,
  'rec-b2-14-seul': 'The four cards of act 11. One voice. Card four quotes lesson 22 in B1.',
  'rec-b2-14-piege-seul': TRAP,
  'rec-b2-14-texte-a11': "Ousmane's travel blog (act 11), one young male voice with a light Senegalese accent, warm, read as written.",
  'rec-b2-14-modele': "Claire Moreau's complaint letter (act 12), one female voice, one take, firm and courteous, the pace of someone reading a letter aloud before sending it.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 14',
  intro: 'An infinitive has no person and no date of its own: the sentence supplies both. This lesson turns that into control. You build the past infinitive (avoir or être plus the participle, with its agreement) and use it where English uses -ing: après avoir signé, sanctionné pour avoir menti, sans avoir rien reçu. You push the one-subject rule of lesson 16 in B1 further (je crois avoir compris, and je crois que j’ai compris is right too), learn which verbs take à, de or nothing, and have things done with faire and laisser, pronoun in front and fait never agreeing. Then the infinitive on its own: notices (Ne pas se pencher au dehors), subjects (Voyager forme la jeunesse), questions (Que faire ?) and nouns (le droit de). The task: a 180 to 250 word formal complaint, graded on the B2 writing criteria.',
  skill: 'PE',
  grammarAssumed: [SUBJ_INF_UNIT, PRONOMS_UNIT, PASSIF_UNIT, CEST_UNIT, SUBJ_PASSE_UNIT, FUT_ANT_UNIT, GERONDIF_UNIT],
  grammarIntroduced: [
    'The past infinitive (avoir or être + past participle, with the auxiliary of the passé composé), its agreement with être and pronominal verbs, a pronoun before avoir, negation (ne pas avoir, n’avoir pas), and its use for an action completed before the main verb, including in the future',
    'Après + past infinitive against avant de + present infinitive, and avant d’avoir + participle for « not until it is done », with the subject of the main verb as the doer',
    'Pour + present infinitive for a purpose against pour + past infinitive for a reason (fault or merit), and merci de, s’excuser de + infinitive',
    'Sans + present or past infinitive with one subject against sans que + subjunctive with two, and the place of rien and personne',
    'The one-subject rule extended: after croire, penser, dire, affirmer, reconnaître, nier, espérer, se souvenir, the infinitive and the que-clause are both correct; after vouloir and verbs of wish, only the infinitive',
    'Verbs followed by à, de or no preposition before an infinitive (tenir à, s’attendre à, se mettre à, s’efforcer de, il s’agit de, oser, compter), and the pairs that change meaning (finir de / par, penser à / penser, venir / venir de, commencer à / par)',
    'Faire + infinitive (someone else acts), the agent with à or par, faire faire, and laisser + infinitive (laisser tomber)',
    'Pronoun placement before faire and laisser (je la fais réparer, je la lui ai fait lire, fais-le entrer) and the invariable fait before an infinitive',
    'The infinitive in notices and instructions (ne pas in front, the pronominal keeps se, veuillez and prière de), as a subject, in deliberative questions, and after nouns and adjectives with de or à',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Un infinitif n'a ni personne ni date : la phrase les lui donne. Ici, tu construis l'infinitif passé et tu le fais travailler après après, pour et sans, tu remplaces que quand il n'y a qu'un sujet, tu choisis à, de ou rien, tu fais faire et tu laisses faire, et tu écris l'infinitif des affiches. À la fin, tu écris une lettre de réclamation de 180 à 250 mots.",
    minutes: 160,
    difficulty: 4,
    glyph: '-er',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: INFINITIVES_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (build log, 2026-09-25). Kept, as every B1 and B2 lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, LECTURE_MODELE, dicteeFor };
