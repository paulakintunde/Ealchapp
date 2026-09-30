// b2.10.l1 « La nominalisation »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.07 futur antérieur),
// under the B2 rules of B2-BUILD-LOG.md (form, meaning, choice, text).
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema now, so the lesson validates with it in place (as b2.07 does).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act (B2): meet (scene, story, reading or listening), name
//   (cardDeck, tapTable, examples), build (groupDrill, gated), choose (a
//   drill where the MEANING picks the form), trap (trapDrill stepped or
//   commonErrors), then from act 3 on the form INSIDE A TEXT of 60 to 120
//   words (complete, rewrite or condense), then the gated act check. The
//   unit of teaching is the contrast: verbal sentence beside nominal phrase,
//   same fact.
//
//    1  Deux versions, un seul fait   6   a voicemail and its written summary:
//                                          the verb tells, the noun condenses
//    2  Du verbe au nom               8   -tion / -ation / -aison, -ment, -age,
//                                          -ure, -ée, -ance (after lesson 22 in
//                                          B2, which only showed the result)
//    3  Le genre dans le suffixe      7   the gender each suffix gives; la
//                                          plage, le silence, le musée
//    4  Les noms courts               8   l'achat, le refus, la vente, le
//                                          départ, le choix; la prise, la mise
//    5  De l'adjectif au nom          7   -ité, -eur, -esse, -ise, -ence;
//                                          le bonheur and la valeur
//    6  Une proposition, un groupe    8   quand > à son arrivée, avant que >
//                                          avant son départ, après que, parce
//                                          que (lesson 31 in B1), si, depuis que
//    7  La préposition dit le lien    7   en raison de, à la suite de, lors
//                                          de, en vue de, malgré (lesson 32 in
//                                          B1), faute de, dès, en cas de
//    8  Qui fait quoi                 7   de, par (lesson 18 in B1), the
//                                          possessive, the ambiguous de
//    9  Titres et comptes rendus      7   headlines (written, after lesson 34
//                                          in B1 read them), agenda, minutes
//   10  Trop de noms                  7   the chain, empty verbs, unfolding
//                                          for the ear
//   11  Ton compte rendu              11  model, plan, role play, TASK, quiz
//
//   TOTAL 83 missions, 11 acts. Corpus: 178 authored rows (.1400-.1581) in
//   eleven blocks plus 25 reused seed rows, released act by act through
//   `deckTranche`. Quiz: 11 rounds of 8 (one per act 2 to 10, a recycling
//   round citing lessons 18, 31, 32 and 34 in B1 and 6, 7 and 22 in B2, an
//   exam-format round). Chapter artwork: `nominalisation-image-prompts.md`,
//   eleven prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (a later lesson may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le verbe raconte, le nom condense : choisis selon qui te lit ou
//   t’écoute. »
//   EN: The verb tells, the noun condenses: choose for whoever reads or
//   hears you.
//
//   ONE METAPHOR, LE PLI: a clause folds into a noun for the page, and
//   unfolds back into a verb for the ear. Rejected candidates and why:
//   corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    verb-to-noun and adjective-to-noun formation with their
//           suffixes and genders, the short and participle nouns, clause to
//           noun phrase, the relation prepositions in a noun phrase, who does
//           what inside it (de, par, possessive), headline, agenda and
//           minutes style, and when to unfold (the chain, empty verbs, speech).
//   QUOTES  the reframes of lessons 18, 31, 32 and 34 in B1 and lesson 22 in
//           B2, re-exported from their corpus files; rows of lessons 18, 31,
//           32, 34 and 36 in B1 and 6, 7 and 22 in B2 reused BY ID.
//   LEAVES  cause and consequence connectors in depth to lesson 15 in B2
//           (not cited: unoccupied in this publish); the gérondif to lesson
//           12 in B2 (same publish, not needed here); the subjunctive after
//           avant que stays lesson 6 in B2's, only sidestepped here.
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
//   changes, no `why` names a position), as b2.07 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. ELEVEN quiz rounds (88 questions): acts 2 to 10, a recycling round and
//      an exam-format round. Act 1 has no round of its own (its contrast is
//      tested again in every round). Add an act 1 round to make twelve?
//   2. « SUITE À » is taught as courant, not as an error (act 7): à la suite
//      de is the soigné form, and the task grader does not penalise suite à.
//      Keep that line, or mark suite à as wrong in a report?
//   3. HEADLINES keep digits (« Fermeture de la ligne 4 »), as real
//      headlines do; those two rows carry no dictation drill.
//   4. THE TASK is a compte rendu of a printed spoken account (a colleague's
//      voicemail after a trade fair), 180 to 250 words, FIVE criteria
//      (tâche 3, cohérence 3, étendue 2, correction 2, registre 2 = 12) as
//      lesson 7 in B2. Annotation block inside `modelAnswer`.
//   5. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' is inert; kept.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  LECTURE_DEUX_VERSIONS, LECTURE_COMPTE_RENDU, LECTURE_MODELE, MESSAGE_INES,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10,
  B118_REFRAME, B118_REFRAME_EN, B131_REFRAME, B131_REFRAME_EN, B132_REFRAME, B132_REFRAME_EN,
  B134_REFRAME, B134_REFRAME_EN, B222_REFRAME, B222_REFRAME_EN,
  PASSIF_UNIT, SUBORD_UNIT, CONCESSION_UNIT, MEDIAS_UNIT, STYLE_UNIT,
  PASSIF_REF, REGISTRES_REF, SUBORD_REF, CONCESSION_REF, MEDIAS_REF, SUBJ_IND_REF, FUT_ANT_REF,
  EMPHATIQUE_REF, STYLE_REF,
} from './nominalisation-corpus.ts';
import { NOMINALISATION_TERMS } from './nominalisation-terms.ts';

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

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.10: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.10: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.10: no respell on ${id}`);
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

/** THE « IN A TEXT » BEAT that closes acts 3 to 10: one paragraph of 60 to
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
 *  ACT 1: DEUX VERSIONS, UN SEUL FAIT
 *
 *  Meet the contrast: a voicemail told with verbs, a subject line that
 *  condenses it. NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'L’objet du courriel',
  frSub: 'Une ligne pour tout dire',
  setting: { place: 'Le siège d’une entreprise de logistique', city: 'Liège', time: 'lundi, 8 h 30', ambience: 'des écrans, une boîte de réception pleine, la pluie sur les vitres' },
  beats: [
    {
      kind: 'narration',
      text: "Liège, un lundi matin. Tu travailles au siège d'une entreprise de logistique. Claire, ta directrice, vient d'écouter le message vocal de Julien, le chef d'entrepôt.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Claire',
      fr: "Julien a fermé l'entrepôt deux jours. Il me faut l'objet du courriel pour la direction.",
      en: 'Julien closed the warehouse for two days. I need the subject line of the email to management.',
      respell: '[zhü-LYEHⁿ a fehr-MAY lahⁿ-truh-POH deu ZHOOR | eel muh foh lob-ZHEH dü koo-RYEL | poor la dee-rehk-SYOHⁿ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Je m'en occupe tout de suite.",
      en: 'I will deal with it right away.',
      respell: '[zhuh mahⁿ-no-KÜP | toot SWEET]',
      stage: 'Tu réécoutes le message de Julien et tu recopies ce qu’il dit.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "L'objet doit tenir sur une ligne et se lire d'un coup d'œil, au milieu de vingt autres messages.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Quelle ligne mets-tu dans l’objet du courriel.',
      size: 'lg',
      options: [
        { fr: fr(E(1400)), respell: rsOf(E(1400)), en: en(E(1400)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1401)), respell: rsOf(E(1401)), en: en(E(1401)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Claire valide. En une ligne, la direction sait quoi, combien de temps et pourquoi, sans même ouvrir le message.',
        breaks: 'Claire sourit : c’est Julien qui parle. Dans la boîte de réception, l’objet est coupé après « donc on a », et la cause disparaît.',
      },
    },
    {
      kind: 'break',
      heading: 'Le même fait, deux formes',
      body: "Julien raconte avec des verbes : qui a fait quoi, puis la suite. L'objet condense : les verbes deviennent des noms (fermeture, retard, livraison) et la cause passe par en raison de. EN: Julien tells it with verbs; the subject line folds the verbs into nouns.",
      wrong: { fr: fr(E(1400)), ipa: ipaOf(E(1400)), respell: rsOf(E(1400)), en: en(E(1400)) },
      right: { fr: fr(E(1401)), ipa: ipaOf(E(1401)), respell: rsOf(E(1401)), en: en(E(1401)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: `Dans ${STYLE_REF}, tu as croisé quelques noms comme la hausse. Ici, tu apprends à les fabriquer, à les relier, à dire qui fait quoi, et à savoir quand t'arrêter.`,
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['nominaliser', 'deplier'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Fabriquer le bon nom, au bon genre', s: 'Actes 2 à 5 : les suffixes, le genre, les noms courts, les adjectifs' },
    { t: 'Plier une proposition en groupe nominal', s: 'Actes 6 et 7 : à son arrivée, avant son départ, en raison de' },
    { t: 'Dire qui fait quoi, et titrer', s: 'Actes 8 et 9 : de, par, les titres, les comptes rendus' },
    { t: 'Savoir déplier, puis écrire un compte rendu', s: 'Actes 10 et 11 : trop de noms, puis ta mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Julien, la lettre de Claire',
  frSub: 'Lis, et compare les deux versions',
  text: LECTURE_DEUX_VERSIONS,
  glossary: [
    { word: 'les quais', en: 'the loading bays', note: 'Les quais de chargement, où les camions viennent se garer à l’entrepôt.' },
    { word: 'alourdi', en: 'pushed up, made heavier', note: 'Alourdir un coût : le rendre plus élevé.' },
    { word: 'la lettre interne', en: 'the internal newsletter', note: 'Le petit journal qu’une entreprise envoie à son personnel.' },
  ],
  questions: [
    { q: 'Global : que montre ce texte ?', a: "Le même message sous deux formes : Julien le raconte à l'oral avec des verbes, Claire le résume à l'écrit avec des noms." },
    { q: 'Détail : par quoi Claire remplace-t-elle « quand le camion est arrivé » ?', a: "Par « à l'arrivée du camion » : une préposition et un nom d'action." },
    { q: 'Détail : que devient « on a fermé l’entrepôt pendant deux jours » ?', a: "« Fermeture de l'entrepôt pendant deux jours », sans verbe, comme un titre." },
    { q: 'Inférence : quelle information de Julien disparaît dans la lettre de Claire ?', a: "Son ressenti : « la semaine a été compliquée ». Les mots de l'oral (bon, voilà, rappelle-moi) disparaissent aussi." },
    { q: 'Position : l’auteur pense-t-il qu’il faut tout mettre en noms ?', a: "Non : à part une ligne écrite comme un titre, Claire garde un verbe dans chaque phrase, pour que sa lettre se lise sans effort." },
  ],
  audio: REC('rec-b2-10-deux-versions'),
  say: REFRAME,
  terms: ['nominaliser'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère ce qui a changé',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Julien raconte', [
      it(E(1402), 'ont augmenté'),
      it(E(1404), 'est arrivé'),
      it(E(1406), 'a signé'),
      it(E(1408), 'parte'),
    ], chk('Dans ces quatre phrases, qu’est-ce qui porte chaque action ?',
      ['un verbe conjugué', 'un nom d’action', 'un adjectif'], 0,
      'Ont augmenté, est arrivé, a signé, parte : chaque action est un verbe. EN: each action is a conjugated verb.')),
    grp('Claire condense', [
      it(E(1403), 'la hausse'),
      it(E(1405), 'l’arrivée'),
      it(E(1407), 'la signature'),
      it(E(1409), 'le départ'),
    ], chk('Et ici, que sont devenues ces actions ?',
      ['des noms : la hausse, l’arrivée, la signature, le départ', 'des verbes au passé composé'], 0,
      'Chaque action est devenue un nom, et la phrase tient autour d’un seul verbe. EN: each action became a noun.')),
    ctl('Le test', 'Pour l’objet d’un courriel, quelle version choisis-tu ?',
      ['la version en noms', 'la version en verbes'], 0,
      'Un objet se lit d’un coup d’œil : le nom condense. EN: a subject line wants the noun.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nominaliser'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où la forme compte',
  cases: [
    { situation: 'Tu écris l’objet d’un courriel', fr: 'Report de la réunion de lundi', en: "Monday's meeting postponed" },
    { situation: 'Tu titres une diapositive', fr: 'Hausse des ventes au troisième trimestre', en: 'Sales up in the third quarter' },
    { situation: 'Tu rédiges un compte rendu', fr: fr(E(1411)), en: en(E(1411)) },
    { situation: 'Tu expliques la situation à un collègue, à voix haute', fr: 'On a reporté la réunion parce que Karim est malade.', en: 'We have put the meeting off because Karim is ill.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nominaliser', 'deplier'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le sens', '« À l’arrivée du camion » veut dire…',
    ['quand le camion est arrivé', 'avant que le camion arrive', 'si le camion arrive'], 0,
    'À + le nom d’action : au moment où il est arrivé. EN: when the lorry arrived.'),
  ctl('Le rôle', 'Le nom d’action sert surtout à…',
    ['condenser une phrase entière', 'rendre un récit plus vivant'], 0,
    'Il plie une proposition dans un mot. EN: it folds a clause into one word.'),
  ctl('Le choix', 'À la pause café, tu racontes ta semaine à un collègue. Tu dis plutôt…',
    ['« on a fermé l’entrepôt deux jours »', '« fermeture de l’entrepôt pendant deux jours »'], 0,
    'À voix haute, le verbe raconte mieux. EN: out loud, the verb tells it better.'),
], ['nominaliser']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Deux versions, un seul fait',
    opener: {
      line: "Un message vocal, puis une ligne dans un courriel : ici tu vois le même fait raconté avec des verbes et condensé avec des noms. EN: A voicemail, then one line in an email: here you see one fact told with verbs and condensed with nouns.",
      imageRef: 'lessons/nominalisation/act01.jpg',
    },
    sections: [],
    milestone: "Tu reconnais un nom d'action qui remplace une proposition, et tu sais quand chaque forme sert. EN: You can spot an action noun standing for a clause, and tell when each form fits.",
    estScreens: 32, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: DU VERBE AU NOM
 *
 *  Form: the suffixes. Lesson 22 in B2 showed la hausse and l'éloignement as
 *  finished nouns; here the learner builds them.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Cinq familles de suffixes',
  frSub: 'Du résultat à la fabrication',
  hint: 'Quatre cartes. Regarde la fin de chaque nom.',
  audio: REC('rec-b2-10-suffixes'),
  say: REFRAME,
  terms: ['suffixe', 'nominaliser'],
  cards: [
    {
      head: 'Ce que tu as déjà vu', label: Cap(STYLE_REF),
      fr: fr('fr.b2.universite.1121'), sub: rsOf('fr.b2.universite.1121'),
      body: `« ${B222_REFRAME} » Là, un nom reprenait une idée. Ici, tu le fabriques. EN: ${B222_REFRAME_EN}`,
    },
    {
      head: '-tion, -sion, -ation', label: 'le plus fréquent',
      fr: "annuler > l'annulation · décider > la décision",
      sub: '[a-nü-LAY] · [la-nü-la-SYOHⁿ] · [day-see-DAY] · [la day-see-ZYOHⁿ]',
      body: "Le radical du verbe, puis -tion. C'est le suffixe des rapports et des courriels officiels : la réparation, l'inscription. Livrer donne la livraison, un cousin en -aison. EN: stem plus -tion, the suffix of reports.",
    },
    {
      head: '-ment', label: 'une action, un processus',
      fr: 'lancer > le lancement · changer > le changement',
      sub: '[lahⁿ-SAY] · [luh lahⁿs-MAHⁿ] · [shahⁿ-ZHAY] · [luh shahⁿzh-MAHⁿ]',
      body: "Très productif pour les actions et les processus : le paiement, le recrutement, le stationnement. EN: -ment names processes.",
    },
    {
      head: '-age, -ure, -ée', label: 'trois autres familles',
      fr: "nettoyer > le nettoyage · fermer > la fermeture · arriver > l'arrivée",
      sub: '[luh nay-twa-YAZH] · [la fehr-muh-TÜR] · [la-ree-VAY]',
      body: "-age nomme souvent une opération concrète ; -ure, l'acte ou son résultat ; -ée, une action vue d'un bloc : l'entrée, la durée. EN: three more families.",
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-suffixes',
  title: 'Six suffixes, six familles',
  cols: ['Suffixe', 'Exemple', 'Genre'],
  rows: [
    { cells: ['-tion, -sion, -ation', "annuler > l'annulation", 'féminin'], say: fr(E(1420)),
      detail: { title: '-tion', body: "Le suffixe des papiers officiels, toujours féminin : la réparation, la décision, l'inscription. EN: always feminine.", say: fr(E(1424)) } },
    { cells: ['-aison', 'livrer > la livraison', 'féminin'], say: fr(E(1423)),
      detail: { title: '-aison', body: "Une variante de -tion pour quelques verbes : la livraison, la comparaison. Féminin aussi. EN: a variant of -tion, feminine.", say: 'Une comparaison des prix a été faite.' } },
    { cells: ['-ment', 'lancer > le lancement', 'masculin'], say: fr(E(1421)),
      detail: { title: '-ment', body: "Pour les actions et les processus, toujours masculin : le paiement, le changement. EN: masculine.", say: fr(E(1427)) } },
    { cells: ['-age', 'nettoyer > le nettoyage', 'masculin'], say: fr(E(1422)),
      detail: { title: '-age', body: "Une opération concrète, souvent technique : le lavage, le chargement. Masculin quand il vient d'un verbe. EN: masculine when built on a verb.", say: fr(E(1429)) } },
    { cells: ['-ure', 'fermer > la fermeture', 'féminin'], say: fr('fr.b1.journalisme.1079'),
      detail: { title: '-ure', body: "L'acte ou son résultat : la signature, l'ouverture, la fermeture. Féminin. EN: feminine.", say: fr(E(1446)) } },
    { cells: ['-ée, -ance, -ence', "arriver > l'arrivée", 'féminin'], say: fr(E(1434)),
      detail: { title: '-ée, -ance', body: "L'arrivée, l'entrée, la durée ; la naissance, la croissance. Féminin, sauf quelques intrus que l'acte 3 te montre. EN: feminine, with a few outsiders.", say: fr(E(1426)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suffixe', 'genre'],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte le nom',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('-tion et -aison', [
      it(E(1412), 'le verbe, puis le nom'),
      it(E(1420), 'dans une phrase'),
      it('fr.b1.ecologie.1076', 'réparer'),
      it(E(1424), 'dans une phrase'),
    ], chk('« On a réparé le toit » devient…',
      ['la réparation du toit', 'le réparement du toit', 'la réparage du toit'], 0,
      'Réparer, la réparation : -ation. EN: réparer takes -ation.')),
    grp('-ment et -age', [
      it('fr.b1.affaires.1100', 'lancer'),
      it(E(1421), 'dans une phrase'),
      it(E(1414), 'nettoyer'),
      it(E(1422), 'dans une phrase'),
    ], chk('« On lance le site lundi » devient…',
      ['le lancement du site lundi', 'la lançation du site lundi'], 0,
      'Lancer, le lancement. EN: lancer takes -ment.')),
    grp('-ure, -ée, -ance', [
      it('fr.b1.journalisme.1035', 'fermer'),
      it(E(1416), 'entrer'),
      it(E(1417), 'naître'),
      it(E(1426), 'dans une phrase'),
    ], chk('« Le magasin ferme à vingt heures » devient…',
      ['la fermeture du magasin à vingt heures', 'la fermée du magasin à vingt heures'], 0,
      'Fermer, la fermeture. L’entrée, elle, prend -ée. EN: fermer takes -ure.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suffixe'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le nom à l’oreille',
  frSub: 'Dix phrases, un nom d’action chacune',
  lines: [
    ln(E(1420)), ln(E(1421)), ln(E(1422)), ln(E(1423)), ln(E(1424)),
    ln(E(1425)), ln(E(1426)), ln(E(1427)), ln(E(1428)), ln(E(1433)),
  ],
  questions: [
    { q: 'Première phrase : qu’est-ce qui a été annulé ?', opts: ['un concert', 'un vol', 'une réunion'], correct: 0, why: 'Le concert, et les abonnés sont déçus. EN: the concert.' },
    { q: 'Troisième phrase : quand a lieu le nettoyage ?', opts: ['chaque vendredi', 'chaque lundi'], correct: 0, why: 'Chaque vendredi. EN: every Friday.' },
    { q: 'Sixième phrase : que va-t-il se passer en janvier ?', opts: ['les salaires vont augmenter', 'les salaires vont baisser'], correct: 0, why: 'L’augmentation entre en vigueur. EN: pay goes up.' },
    { q: 'Neuvième phrase : comment s’inscrit-on ?', opts: ['en ligne', 'au guichet'], correct: 0, why: 'L’inscription se fait en ligne. EN: online.' },
    { q: 'Dernière phrase : combien de temps la construction a-t-elle duré ?', opts: ['quatre ans', 'deux ans', 'six mois'], correct: 0, why: 'Quatre ans. EN: four years.' },
  ],
  audio: REC('rec-b2-10-suffixes-ecoute'),
  say: REFRAME,
  terms: ['suffixe'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre suffixes inventés',
  errors: [
    {
      wrong: "L'augmentement des salaires entrera en vigueur en janvier.",
      right: fr(E(1425)),
      why: "Normal : -ment fabrique beaucoup de noms (le changement), alors il semble sûr. Mais augmenter prend -ation. EN: -ment looks safe, but augmenter takes -ation.",
    },
    {
      wrong: 'La lancée du site est prévue pour lundi.',
      right: fr(E(1421)),
      why: "La lancée existe, mais elle veut dire l'élan (sur sa lancée). Pour une mise en service : le lancement, masculin, donc prévu. EN: la lancée means momentum.",
    },
    {
      wrong: 'Le livrement des meubles prendra trois semaines.',
      right: fr(E(1423)),
      why: "Normal : livrer ressemble à un verbe en -ment. Mais son nom est la livraison, en -aison. EN: livrer gives la livraison.",
    },
    {
      wrong: 'Le fermage du magasin est à vingt heures.',
      right: 'La fermeture du magasin est à vingt heures.',
      why: "Le fermage existe, mais c'est la location d'une ferme. Fermer une porte ou un magasin : la fermeture. EN: fermage is farm tenancy.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suffixe'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Le nom, puis la suite',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['suffixe'],
};

const A2_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a2-flash',
  layer: 'core',
  title: 'Huit noms à avoir en bouche',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'the cancellation', back: "l'annulation", say: fr(E(1420)) },
    { front: 'the launch', back: 'le lancement', say: fr(E(1421)) },
    { front: 'the cleaning', back: 'le nettoyage', say: fr(E(1422)) },
    { front: 'the delivery', back: 'la livraison', say: fr(E(1423)) },
    { front: 'the repair', back: 'la réparation', say: fr(E(1424)) },
    { front: 'the pay rise', back: "l'augmentation", say: fr(E(1425)) },
    { front: 'the birth', back: 'la naissance', say: fr(E(1426)) },
    { front: 'the registration', back: "l'inscription", say: fr(E(1428)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suffixe'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le suffixe', 'Livrer donne…',
    ['la livraison', 'le livrement', 'la livrure'], 0,
    'Livrer, la livraison. EN: livraison.'),
  ctl('Le piège', 'Augmenter donne…',
    ['l’augmentation', 'l’augmentement'], 0,
    'Augmenter prend -ation. EN: -ation.'),
  ctl('La méthode', 'Pour savoir quel suffixe prend un verbe, tu…',
    ['l’apprends avec le nom, ou tu vérifies', 'ajoutes toujours -ment'], 0,
    'Chaque verbe choisit le sien. EN: each verb picks its own.'),
], ['suffixe']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Du verbe au nom',
    opener: {
      line: "Annuler, lancer, nettoyer : ici tu fabriques le nom de chaque action avec le bon suffixe. EN: Cancel, launch, clean: here you build the noun for each action with the right suffix.",
      imageRef: 'lessons/nominalisation/act02.jpg',
    },
    sections: [],
    milestone: "Tu fabriques un nom d'action en -tion, -ment, -age, -ure ou -ée, sans inventer de suffixe. EN: You can build an action noun with the right suffix.",
    estScreens: 40, restPoints: ['a2-table', 'a2-ecoute'],
  },
  sections: [A2_RAPPEL, A2_TABLE, A2_CONSTRUIRE, A2_ECOUTE, A2_ERREURS, A2_DICTEE, A2_FLASH, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: LE GENRE DANS LE SUFFIXE
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'La correctrice',
  frSub: 'Un article, quatre genres',
  setting: "Montréal, la rédaction d'un journal de quartier. Sylvie, la correctrice, relit l'article d'un stagiaire. Elle ne regarde qu'une chose : le genre des noms.",
  bubbles: [
    { from: 'narrator', fr: 'Le stagiaire lit ses phrases à voix haute ; Sylvie explique chaque genre.', en: 'The intern reads his sentences aloud; Sylvie explains each gender.' },
    { from: 'user', fr: 'La fermeture du pont est prévue pour lundi.', en: 'The bridge closure is planned for Monday.' },
    { from: 'coach', fr: 'Fermeture, en -ure : féminin, donc prévue avec un e.', en: 'Fermeture, in -ure: feminine, so prévue with an e.', warn: '-ure : féminin' },
    { from: 'user', fr: "Le nettoyage des quais commencera à l'aube.", en: 'Cleaning the quays will start at dawn.' },
    { from: 'coach', fr: 'Nettoyage, en -age, fait sur un verbe : masculin.', en: 'Nettoyage, in -age, built on a verb: masculine.', warn: '-age d’action : masculin' },
    { from: 'user', fr: 'La plage du Vieux-Port est fermée.', en: 'The Old Port beach is closed.' },
    { from: 'coach', fr: 'Plage finit en -age, mais ne vient d’aucun verbe : féminin.', en: 'Plage ends in -age but comes from no verb: feminine.', warn: 'Le piège : la plage' },
    { from: 'user', fr: 'Le silence de la foule était impressionnant.', en: 'The silence of the crowd was striking.' },
    { from: 'coach', fr: 'Les noms en -ence sont féminins, sauf le silence. Retiens-le à part.', en: 'Nouns in -ence are feminine, except le silence. Learn it on its own.', warn: 'Le piège : le silence' },
  ],
  closing: { fr: "Le suffixe donne le genre presque toujours ; les exceptions s'apprennent une par une.", en: 'The suffix almost always gives the gender; the exceptions are learnt one by one.' },
  audio: REC('rec-b2-10-correctrice'),
  say: REFRAME,
  terms: ['genre'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-suffixes',
  title: 'Le genre, en quatre cartes',
  frSub: 'L’article l’ cache le genre, l’accord le montre',
  hint: 'Quatre cartes. Regarde l’accord du participe.',
  audio: REC('rec-b2-10-genre'),
  say: REFRAME,
  terms: ['genre'],
  cards: [
    {
      head: 'Féminin', label: '-tion, -ure, -ée, -ance',
      fr: fr(E(1434)), sub: rsOf(E(1434)),
      body: "L'arrivée est prévue : le participe prend un e, parce que -ée est féminin. Quand l'article est l', l'accord montre le genre. EN: the agreement shows the gender.",
    },
    {
      head: 'Masculin', label: '-ment, -age',
      fr: fr(E(1435)), sub: rsOf(E(1435)),
      body: "Le paiement, le lancement, le nettoyage : -ment et -age, faits sur un verbe, donnent des noms masculins. EN: -ment and -age are masculine.",
    },
    {
      head: 'Le piège de -age', label: 'pas de verbe derrière',
      fr: fr(E(1436)), sub: rsOf(E(1436)),
      body: "La plage, la page, l'image, la cage : ces noms ne viennent d'aucun verbe, et ils sont féminins. EN: these -age nouns are not built on a verb and are feminine.",
    },
    {
      head: 'Deux intrus', label: 'le silence, le musée',
      fr: fr(E(1437)), sub: rsOf(E(1437)),
      body: "Le silence, malgré -ence, et le musée, le lycée, malgré -ée, sont masculins. Ils sont rares : apprends-les par cœur. EN: masculine outsiders.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trouve le genre',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Féminin', [
      it(E(1434), 'arrivée : prévue'),
      it(E(1441), 'présence'),
      it(E(1443), 'croissance'),
      it(E(1444), 'durée'),
    ], chk('« La livraison est … pour mardi. »',
      ['prévue', 'prévu'], 0,
      '-aison, féminin : prévue. EN: feminine agreement.')),
    grp('Masculin', [
      it(E(1435), 'paiement : effectué'),
      it(E(1440), 'stationnement'),
      it(E(1442), 'passage'),
      it(E(1445), 'chargement'),
    ], chk('« Le stationnement est … devant l’école. »',
      ['interdit', 'interdite'], 0,
      '-ment, masculin : interdit. EN: masculine.')),
    grp('Les exceptions', [
      it(E(1436), 'la plage'),
      it(E(1437), 'le silence'),
      it(E(1438), 'le musée'),
      it(E(1439), 'la page'),
    ], chk('Quel nom est masculin ?',
      ['le musée', 'la plage', 'la page'], 0,
      'Le musée, malgré -ée. EN: a masculine -ée.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['genre'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Le genre qu’on devine mal',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le suffixe donne le genre',
    body: "-ment et -age d'action : masculin. -tion, -ure, -ée, -ance, -ence : féminin. Les intrus sont peu nombreux : la plage, la page, le silence, le musée. EN: the suffix gives the gender; learn the few outsiders.",
  },
  cards: [
    trap(E(1434), 'mauvais genre', "L'arrivée des premiers invités est prévu à dix-neuf heures.", 'Arrivée est féminin : prévue. EN: arrivée is feminine.'),
    trap(E(1435), 'mauvais genre', 'La paiement doit être effectuée avant la livraison.', '-ment : masculin, effectué. EN: masculine.'),
    trap(E(1436), 'règle trop large', "Le plage a été fermé au public tout l'été.", 'La plage ne vient pas d’un verbe : féminin. EN: feminine.'),
    trap(E(1437), 'règle trop large', 'La silence de la salle était impressionnante.', 'Le silence est masculin. EN: masculine.'),
    trap(E(1440), 'mauvais genre', "La stationnement est interdite devant l'école.", '-ment : masculin, interdit. EN: masculine.'),
    trap(E(1446), 'accord oublié', "L'ouverture du salon est fixé au trois juin.", '-ure : féminin, fixée. EN: feminine.'),
  ],
  drill: [
    { promptSay: '… chargement des camions commence à six heures.', opts: ['Le', 'La'], correct: 0 },
    { promptSay: 'La livraison est …', opts: ['prévu', 'prévue'], correct: 1 },
    { promptSay: '… plage est fermée.', opts: ['La', 'Le'], correct: 0 },
    { promptSay: '… silence était total.', opts: ['La', 'Le'], correct: 1 },
    { promptSay: 'Le paiement est …', opts: ['effectué', 'effectuée'], correct: 0 },
    { promptSay: '… musée ouvre à dix heures.', opts: ['La', 'Le'], correct: 1 },
    { promptSay: 'La croissance a été …', opts: ['forte', 'fort'], correct: 0 },
    { promptSay: '… passage est réservé aux piétons.', opts: ['La', 'Le'], correct: 1 },
  ],
  steps: STEPS('Le suffixe donne le genre', 'Ce que l’oreille ne dit pas'),
  audio: REC('rec-b2-10-piege-genre'),
  say: REFRAME,
  terms: ['genre'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq genres au travail',
  frSub: 'Lis, puis dis ce qui décide',
  examples: [
    ex(E(1438), '-ée, mais masculin : un intrus'),
    ex(E(1439), '-age sans verbe derrière : féminin'),
    ex(E(1441), '-ence : féminin'),
    ex(E(1443), '-ance : féminin'),
    ex(E(1444), '-ée : féminin, comme l’arrivée'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['genre'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Compléter : l’avis aux habitants', TEXTE_A3, [
  { q: 'Complète le début : (___) fermeture, (prévu), (reporté).', a: "La fermeture de la rue Saint-Joseph, prévue du 4 au 8 juin, est reportée d'une semaine : -ure, féminin." },
  { q: 'Complète : (___) nettoyage des égouts ; (___) durée des travaux.', a: 'Le nettoyage (-age d’action, masculin) ; la durée (-ée, féminin).' },
  { q: 'Complète : (___) stationnement sera (interdit) ; (___) passage restera (assuré).', a: 'Le stationnement sera interdit ; le passage restera assuré. Deux masculins.' },
  { q: 'Complète la fin : (___) livraison des commerces.', a: 'La livraison des commerces : -aison, féminin.' },
], 'rec-b2-10-texte-a3', ['genre']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('-ment', 'Un nom d’action en -ment est…',
    ['masculin', 'féminin', 'l’un ou l’autre'], 0,
    'Le lancement, le paiement. EN: masculine.'),
  ctl('-age', '« … plage a été fermée. »',
    ['Le', 'La'], 1,
    'La plage ne vient pas d’un verbe. EN: feminine.'),
  ctl('L’accord', '« L’ouverture est … au trois juin. »',
    ['fixé', 'fixée'], 1,
    '-ure : féminin. EN: feminine.'),
], ['genre']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Le genre dans le suffixe',
    opener: {
      line: "Le lancement ou la lancement, l'arrivée prévue ou prévu : ici tu lis le genre dans le suffixe, et tu apprends les rares intrus. EN: Here you read the gender off the suffix and learn the few outsiders.",
      imageRef: 'lessons/nominalisation/act03.jpg',
    },
    sections: [],
    milestone: "Tu donnes le bon genre à un nom d'action et tu accordes ce qui le suit, même quand l'article est l'. EN: You can give an action noun its gender and agree what follows.",
    estScreens: 36, restPoints: ['a3-construire', 'a3-piege'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_PIEGE, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: LES NOMS COURTS
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Le rapport de Moussa',
  frSub: 'Des titres sans suffixe',
  setting: 'Dakar. Moussa rédige le rapport du trimestre et cherche un nom pour chaque titre. Sa collègue Aïssatou relit par-dessus son épaule.',
  bubbles: [
    { from: 'narrator', fr: 'Moussa tape ses titres ; Aïssatou vérifie chaque nom.', en: 'Moussa types his headings; Aïssatou checks each noun.' },
    { from: 'user', fr: "L'achat de deux camions neufs.", en: 'The purchase of two new lorries.' },
    { from: 'coach', fr: 'Acheter, l’achat : pas de suffixe, le verbe perd sa fin.', en: 'Acheter, l’achat: no suffix, the verb loses its ending.', warn: 'Le verbe sans sa fin' },
    { from: 'user', fr: "La vente de l'ancien entrepôt.", en: 'The sale of the old warehouse.' },
    { from: 'coach', fr: 'Vendre, la vente : un nom court, féminin.', en: 'Vendre, la vente: a short noun, feminine.', warn: 'Un nom court en -e' },
    { from: 'user', fr: 'Le départ du directeur commercial.', en: 'The departure of the sales director.' },
    { from: 'coach', fr: 'Partir donne le départ. Le partement n’existe pas.', en: 'Partir gives le départ. Le partement does not exist.', warn: 'Une autre forme' },
    { from: 'user', fr: 'La mise en ligne du catalogue.', en: 'Putting the catalogue online.' },
    { from: 'coach', fr: 'Mis, la mise : le nom vient du participe.', en: 'Mis, la mise: the noun comes from the participle.', warn: 'Du participe au nom' },
  ],
  closing: { fr: "Avant de fabriquer un nom en -tion ou en -ment, cherche s'il existe déjà un nom court.", en: 'Before building a noun in -tion or -ment, check whether a short noun already exists.' },
  audio: REC('rec-b2-10-moussa'),
  say: REFRAME,
  terms: ['court'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-suffixes',
  title: 'Quatre sortes de noms courts',
  frSub: 'Pas de suffixe, ou pas celui qu’on croit',
  hint: 'Quatre cartes. Cherche ce qui reste du verbe.',
  audio: REC('rec-b2-10-courts'),
  say: REFRAME,
  terms: ['court'],
  cards: [
    {
      head: 'Le verbe sans sa fin', label: 'refuser, acheter, appeler',
      fr: "le refus · l'achat · l'appel",
      sub: '[luh ruh-FÜ] · [la-SHA] · [la-PEL]',
      body: "Le radical seul, sans suffixe : le refus, l'achat, l'appel, l'envoi, l'oubli. Ces noms sont masculins. EN: the bare stem, masculine.",
    },
    {
      head: 'Un nom en -e', label: 'vendre, baisser, demander',
      fr: 'la vente · la baisse · la demande',
      sub: '[la VAHⁿT] · [la BEHS] · [la duh-MAHⁿD]',
      body: "Le radical plus un e muet : la vente, la baisse, la demande, la perte. Ces noms sont féminins. EN: stem plus a silent e, feminine.",
    },
    {
      head: 'Du participe au nom', label: 'pris, mis, venu',
      fr: 'la prise · la mise · la venue',
      sub: '[la PREEZ] · [la MEEZ] · [la vuh-NÜ]',
      body: "Le participe passé au féminin : la prise en charge, la mise en ligne, la venue du ministre. EN: the feminine participle.",
    },
    {
      head: 'Une autre forme', label: 'partir, choisir, commencer',
      fr: 'le départ · le choix · le début',
      sub: '[luh day-PAR] · [luh SHWA] · [luh day-BÜ]',
      body: "Certains noms ont une autre forme, ou un autre mot : partir, le départ ; choisir, le choix ; commencer, le début. Ceux-là s'apprennent un par un. EN: some nouns have to be learnt one by one.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trouve le nom court',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Le verbe sans sa fin', [
      it(E(1449), 'acheter'),
      it(E(1457), 'dans une phrase'),
      it(E(1458), 'refuser'),
      it(E(1468), 'refus, au pluriel'),
    ], chk('« Elle a oublié son code » devient…',
      ['l’oubli de son code', 'l’oubliement de son code', 'l’oubliation de son code'], 0,
      'Oublier, l’oubli. EN: the bare stem.')),
    grp('Un nom en -e', [
      it('fr.b1.affaires.1016', 'vendre'),
      it(E(1459), 'dans une phrase'),
      it(E(1455), 'perdre'),
      it(E(1466), 'baisser'),
    ], chk('« Les ventes ont baissé » devient…',
      ['la baisse des ventes', 'le baissement des ventes'], 0,
      'Baisser, la baisse. EN: stem plus e.')),
    grp('Participe ou autre forme', [
      it(E(1453), 'mis, la mise'),
      it(E(1463), 'dans une phrase'),
      it(E(1450), 'partir'),
      it(E(1460), 'dans une phrase'),
    ], chk('« On a mis le site en ligne » devient…',
      ['la mise en ligne du site', 'le mettage en ligne du site'], 0,
      'Mis, la mise. EN: from the participle.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['court'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Des noms courts, à l’oreille',
  frSub: 'Neuf phrases, neuf noms sans suffixe',
  lines: [
    ln(E(1457)), ln(E(1458)), ln(E(1459)), ln(E(1460)), ln(E(1461)),
    ln(E(1462)), ln(E(1463)), ln(E(1465)), ln(E(1467)),
  ],
  questions: [
    { q: 'Première phrase : comment achète-t-on les billets ?', opts: ['en ligne', 'au guichet'], correct: 0, why: 'Uniquement en ligne. EN: online only.' },
    { q: 'Deuxième phrase : qui a refusé ?', opts: ['la banque', 'le client', 'la mairie'], correct: 0, why: 'La banque, et le projet a pris du retard. EN: the bank.' },
    { q: 'Quatrième phrase : de combien le train est-il retardé ?', opts: ['vingt minutes', 'deux heures'], correct: 0, why: 'Vingt minutes. EN: twenty minutes.' },
    { q: 'Sixième phrase : à partir de quel montant l’envoi est-il gratuit ?', opts: ['cinquante euros', 'quinze euros', 'cent euros'], correct: 0, why: 'Dès cinquante euros. EN: from fifty euros.' },
    { q: 'Dernière phrase : qu’est-ce qui attire les touristes ?', opts: ['le retour des beaux jours', 'la baisse des prix'], correct: 0, why: 'Le retour, de retourner : un nom court. EN: the return of fine weather.' },
  ],
  audio: REC('rec-b2-10-courts-ecoute'),
  say: REFRAME,
  terms: ['court'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre noms qui n’existent pas',
  errors: [
    {
      wrong: 'La choisition du prestataire sera annoncée vendredi.',
      right: fr(E(1461)),
      why: "Normal : -tion fabrique beaucoup de noms, alors on le tente partout. Mais choisir a son nom court : le choix, masculin, donc annoncé. EN: choisir has a short noun, le choix.",
    },
    {
      wrong: 'Le partement du train est retardé de vingt minutes.',
      right: fr(E(1460)),
      why: "Normal : départ ne ressemble pas à partir. Mais le partement n'existe pas. EN: départ is the noun.",
    },
    {
      wrong: "L'achètement des billets se fait uniquement en ligne.",
      right: fr(E(1457)),
      why: "Normal : -ment semble sûr. Mais acheter perd simplement sa fin : l'achat. EN: the bare stem.",
    },
    {
      wrong: 'La perdition du dossier a causé beaucoup de retard.',
      right: fr(E(1465)),
      why: "La perdition existe, mais elle parle d'un navire ou d'une âme en perdition. Pour un dossier : la perte. EN: perdition exists but means ruin.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['court'],
};

const A4_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a4-hacks',
  layer: 'core',
  title: 'Trois astuces avant d’inventer',
  hacks: [
    { hack: 'Cherche d’abord le nom court : le refus, l’achat, la vente.', why: "Le français préfère souvent le nom le plus court, et il sonne plus naturel. EN: try the short noun first." },
    { hack: 'Pense au participe : mis, la mise ; pris, la prise.', why: "Ça marche pour beaucoup de verbes irréguliers, souvent dans des expressions figées : la mise en ligne, la prise en charge. EN: the participle often gives the noun." },
    { hack: 'Au doute, garde le verbe : le site a été mis en ligne hier.', why: "Un nom inventé choque plus qu'un verbe bien placé. EN: when unsure, keep a verb." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['court', 'deplier'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Compléter : la note trimestrielle', TEXTE_A4, [
  { q: 'Complète les trois premiers faits : (acheter), (vendre), (partir).', a: "Achat de deux camions neufs. Vente de l'ancien entrepôt de Herstal. Départ du directeur commercial." },
  { q: 'Complète : (choisir) ; (mettre en ligne).', a: "Choix d'un nouveau logiciel de gestion. Mise en ligne du catalogue, avec trois semaines de retard." },
  { q: 'Complète la fin : (perdre) ; (refuser).', a: 'Perte d’un client important, après le refus de notre devis.' },
  { q: 'Pourquoi la note n’a-t-elle presque pas de verbes ?', a: "C'est une liste de faits marquants, comme des titres : chaque ligne commence par un nom d'action." },
], 'rec-b2-10-texte-a4', ['court']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le nom court', 'Refuser donne…',
    ['le refus', 'la refusation', 'le refusement'], 0,
    'Le verbe sans sa fin. EN: the bare stem.'),
  ctl('Le participe', '« Prendre en charge » donne…',
    ['la prise en charge', 'la prendre en charge'], 0,
    'Pris, la prise. EN: from the participle.'),
  ctl('La méthode', 'Avant d’ajouter -tion à un verbe, tu…',
    ['cherches s’il existe un nom court', 'ajoutes -tion de toute façon'], 0,
    'Le nom court existe souvent déjà. EN: look for the short noun.'),
], ['court']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Les noms courts',
    opener: {
      line: "Le refus, l'achat, la vente, la mise en ligne : ici tu trouves les noms qui n'ont pas besoin de suffixe. EN: Here you find the nouns that need no suffix at all.",
      imageRef: 'lessons/nominalisation/act04.jpg',
    },
    sections: [],
    milestone: "Tu trouves le nom court d'un verbe (le refus, la vente, le départ, la mise) au lieu d'en inventer un. EN: You can find a verb's short noun instead of inventing one.",
    estScreens: 38, restPoints: ['a4-construire', 'a4-erreurs'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_ECOUTE, A4_ERREURS, A4_HACKS, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: DE L'ADJECTIF AU NOM
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Répondre aux avis',
  frSub: 'Des adjectifs devenus noms',
  setting: 'Genève. Nadia dirige un petit hôtel et répond aux avis en ligne. Les clients écrivent avec des adjectifs ; elle répond avec des noms.',
  bubbles: [
    { from: 'narrator', fr: 'Un client a écrit un avis franc : service rapide, ascenseur lent, quartier calme.', en: 'A guest wrote a frank review: fast service, slow lift, quiet area.' },
    { from: 'user', fr: 'Nous vous remercions d’avoir salué la rapidité du service.', en: 'Thank you for praising the speed of the service.' },
    { from: 'coach', fr: 'Rapide devient la rapidité : -ité, féminin.', en: 'Rapide becomes la rapidité: -ité, feminine.', warn: 'Adjectif > -ité' },
    { from: 'user', fr: 'Nous regrettons la lenteur de l’ascenseur.', en: 'We are sorry the lift is so slow.' },
    { from: 'coach', fr: 'Lent, la lenteur : -eur, féminin aussi.', en: 'Lent, la lenteur: -eur, feminine too.', warn: 'Adjectif > -eur' },
    { from: 'user', fr: 'Votre franchise nous aide à progresser.', en: 'Your frankness helps us improve.' },
    { from: 'coach', fr: 'Franc, la franchise : -ise, pour un trait de caractère.', en: 'Franc, la franchise: -ise, for a character trait.', warn: 'Adjectif > -ise' },
    { from: 'user', fr: 'Le calme du quartier vous a plu, et nous en sommes ravis.', en: 'You liked how quiet the area is, and we are delighted.' },
    { from: 'coach', fr: 'Calme reste calme : l’adjectif devient un nom tel quel, au masculin.', en: 'Calme stays calme: the adjective becomes a noun as it is, masculine.', warn: 'Sans suffixe : le calme' },
  ],
  closing: { fr: "Un adjectif se nominalise lui aussi : il donne les noms de qualité.", en: 'Adjectives turn into nouns too: they give the nouns of quality.' },
  audio: REC('rec-b2-10-nadia'),
  say: REFRAME,
  terms: ['qualite'],
};

const A5_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-table',
  layer: 'core',
  sheetId: 'sheet-qualites',
  title: 'Six chemins de l’adjectif au nom',
  cols: ['Suffixe', 'Exemple', 'Genre'],
  rows: [
    { cells: ['-ité', 'rapide > la rapidité', 'féminin'], say: fr(E(1481)),
      detail: { title: '-ité', body: "Le plus fréquent : la rapidité, la fiabilité, la simplicité, l'efficacité. EN: the most common, feminine.", say: fr(E(1485)) } },
    { cells: ['-eur', 'lent > la lenteur', 'féminin'], say: fr(E(1484)),
      detail: { title: '-eur', body: "La lenteur, la douceur, la largeur. Masculin seulement pour le bonheur et le malheur. EN: feminine, except bonheur and malheur.", say: fr(E(1493)) } },
    { cells: ['-esse', 'sage > la sagesse', 'féminin'], say: fr(E(1494)),
      detail: { title: '-esse', body: "La sagesse, la jeunesse, la gentillesse, la faiblesse. EN: feminine.", say: 'La sagesse vient avec les années.' } },
    { cells: ['-ise', 'franc > la franchise', 'féminin'], say: fr(E(1486)),
      detail: { title: '-ise', body: "La franchise, la gourmandise, la bêtise : souvent un trait de caractère. EN: often a character trait.", say: 'Sa gourmandise le perdra.' } },
    { cells: ['-ence, -ance', 'prudent > la prudence', 'féminin'], say: fr(E(1487)),
      detail: { title: '-ence, -ance', body: "Un adjectif en -ent donne -ence, en -ant donne -ance : patient, la patience ; élégant, l'élégance. EN: -ent gives -ence, -ant gives -ance.", say: 'Merci de votre patience.' } },
    { cells: ['-ion, -té, sans suffixe', 'précis > la précision', 'selon le mot'], say: fr(E(1482)),
      detail: { title: 'Un par un', body: "Précis, la précision ; clair, la clarté ; fort, la force ; calme, le calme. Ceux-là s'apprennent un par un. EN: learn these one by one.", say: fr(E(1483)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['qualite', 'genre'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'De la qualité au nom',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('-ité et -ion', [
      it(E(1471), 'rapide'),
      it(E(1481), 'dans une phrase'),
      it('fr.b1.journalisme.1137', 'fiable'),
      it(E(1492), 'précis'),
    ], chk('« Le matériel est fiable » : on salue…',
      ['la fiabilité du matériel', 'la fiablesse du matériel', 'la fiableur du matériel'], 0,
      'Fiable, la fiabilité. EN: -ité.')),
    grp('-eur, -ise, -ence', [
      it(E(1484), 'lent'),
      it(E(1486), 'franc'),
      it(E(1487), 'prudent'),
      it(E(1494), 'gentil'),
    ], chk('« Il est prudent » : on loue sa…',
      ['prudence', 'prudentité'], 0,
      'Prudent, la prudence. EN: -ent gives -ence.')),
    ctl('Sans suffixe', '« La maison est calme » : on apprécie…',
      ['le calme de la maison', 'la calmeur de la maison'], 0,
      'Calme est déjà un nom. EN: calme is already a noun.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['qualite'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Les noms de qualité qu’on invente',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Chaque adjectif a son nom',
    body: "Rapide donne -ité, lent donne -eur, prudent donne -ence, précis donne -ion, fort donne la force. Ces noms sont féminins, sauf le bonheur, le malheur et le calme. EN: each adjective has its noun; nearly all are feminine.",
  },
  cards: [
    trap(E(1482), 'suffixe inventé', 'La précisité des chiffres rassure les investisseurs.', 'Précis, la précision. EN: precision.'),
    trap(E(1484), 'mauvais genre', 'Le lenteur des démarches décourage les candidats.', '-eur tiré d’un adjectif : féminin. EN: feminine.'),
    trap(E(1488), 'mauvais genre', 'La bonheur des enfants passe avant tout.', 'Le bonheur : l’exception masculine. EN: masculine.'),
    trap(E(1489), 'mauvais genre', 'Le valeur du terrain a doublé en dix ans.', 'La valeur : féminin. EN: feminine.'),
    trap(E(1483), 'suffixe inventé', "La fortesse de ce projet, c'est son équipe.", 'Fort, la force. EN: strength.'),
    trap(E(1487), 'suffixe inventé', "La prudentité s'impose sur les routes enneigées.", 'Prudent, la prudence. EN: caution.'),
  ],
  drill: [
    { promptSay: 'La … du service', opts: ['rapidité', 'rapidesse'], correct: 0 },
    { promptSay: 'La … des chiffres', opts: ['précisité', 'précision'], correct: 1 },
    { promptSay: '… lenteur du réseau', opts: ['La', 'Le'], correct: 0 },
    { promptSay: '… bonheur des enfants', opts: ['La', 'Le'], correct: 1 },
    { promptSay: 'La … de ce projet', opts: ['force', 'fortesse'], correct: 0 },
    { promptSay: '… valeur du terrain', opts: ['Le', 'La'], correct: 1 },
    { promptSay: 'Sa … a surpris le jury.', opts: ['franchise', 'franchesse'], correct: 0 },
    { promptSay: 'La … s’impose sur la route.', opts: ['prudentité', 'prudence'], correct: 1 },
  ],
  steps: STEPS('Chaque adjectif a son nom', 'Les noms qu’on invente'),
  audio: REC('rec-b2-10-piege-qualite'),
  say: REFRAME,
  terms: ['qualite', 'genre'],
};

const A5_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a5-flash',
  layer: 'core',
  title: 'Huit noms de qualité',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'speed', back: 'la rapidité', say: fr(E(1481)) },
    { front: 'precision', back: 'la précision', say: fr(E(1482)) },
    { front: 'strength', back: 'la force', say: fr(E(1483)) },
    { front: 'slowness', back: 'la lenteur', say: fr(E(1484)) },
    { front: 'reliability', back: 'la fiabilité', say: fr(E(1485)) },
    { front: 'frankness', back: 'la franchise', say: fr(E(1486)) },
    { front: 'caution', back: 'la prudence', say: fr(E(1487)) },
    { front: 'clarity', back: 'la clarté', say: fr(E(1490)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['qualite'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Compléter : la réponse de l’hôtel', TEXTE_A5, [
  { q: 'Complète : (gentil), (rapide), (calme).', a: 'La gentillesse de notre équipe, la rapidité du service en chambre et le calme du quartier.' },
  { q: 'Complète : (lent), (bruyant).', a: "La lenteur de l'ascenseur et le bruit de la rue : bruyant n'a pas de nom en -ité, on prend le nom de la même famille." },
  { q: 'Complète la fin : (propre), (franc).', a: 'La propreté des chambres reste notre priorité, et votre franchise nous aide à progresser.' },
  { q: 'Pourquoi l’hôtel répond-il avec des noms plutôt qu’avec des adjectifs ?', a: "Les noms regroupent chaque remarque du client en un mot, ce qui donne une réponse courte, polie et bien organisée." },
], 'rec-b2-10-texte-a5', ['qualite']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('-ité', 'Rapide donne…',
    ['la rapidité', 'la rapidesse', 'la rapideur'], 0,
    'Rapide, la rapidité. EN: -ité.'),
  ctl('Le genre', '« … bonheur des enfants passe avant tout. »',
    ['Le', 'La'], 0,
    'Le bonheur, l’exception masculine. EN: masculine.'),
  ctl('Le piège', 'Précis donne…',
    ['la précisité', 'la précision'], 1,
    'Précis, la précision. EN: -ion.'),
], ['qualite']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'De l’adjectif au nom',
    opener: {
      line: "Un service rapide, un ascenseur lent : ici tu transformes les qualités en noms pour répondre, résumer ou juger. EN: A fast service, a slow lift: here you turn qualities into nouns to reply, summarise or assess.",
      imageRef: 'lessons/nominalisation/act05.jpg',
    },
    sections: [],
    milestone: "Tu passes d'un adjectif à son nom (la rapidité, la lenteur, la prudence, la précision) avec le bon genre. EN: You can turn an adjective into its noun with the right gender.",
    estScreens: 38, restPoints: ['a5-construire', 'a5-piege'],
  },
  sections: [A5_HISTOIRE, A5_TABLE, A5_CONSTRUIRE, A5_PIEGE, A5_FLASH, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: UNE PROPOSITION DEVIENT UN GROUPE
 *
 *  Meaning in contrast: the clause and its noun phrase, side by side.
 *  Lesson 31 in B1 (parce que against à cause de) is quoted, never re-taught.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'L’affiche de la clinique',
  frSub: 'Des consignes pliées',
  setting: "Lausanne. À l'accueil d'une clinique, Chloé transforme les consignes du médecin en affiche pour la salle d'attente. Le médecin parle avec des verbes ; l'affiche doit être courte.",
  bubbles: [
    { from: 'narrator', fr: 'Le médecin dicte, Chloé écrit, et la cheffe de l’accueil commente.', en: 'The doctor dictates, Chloé writes, and the head of reception comments.' },
    { from: 'user', fr: 'À votre arrivée, présentez votre carte d’assuré.', en: 'On arrival, show your insurance card.' },
    { from: 'coach', fr: 'Quand vous arrivez devient à votre arrivée : une préposition, un possessif, un nom.', en: 'Quand vous arrivez becomes à votre arrivée: a preposition, a possessive, a noun.', warn: 'Quand > à + nom' },
    { from: 'user', fr: 'Avant votre départ, passez au secrétariat.', en: 'Before you leave, stop at the office.' },
    { from: 'coach', fr: 'Avant que vous partiez, avec son subjonctif, devient avant votre départ.', en: 'Avant que vous partiez, with its subjunctive, becomes avant votre départ.', warn: 'Avant que > avant + nom' },
    { from: 'user', fr: 'Après la consultation, réglez à la caisse.', en: 'After the appointment, pay at the desk.' },
    { from: 'coach', fr: 'Après que vous avez consulté, c’est lourd. Après la consultation, c’est net.', en: 'Après que vous avez consulté is heavy. Après la consultation is clean.', warn: 'Après que > après + nom' },
    { from: 'user', fr: 'En cas d’urgence, sonnez au guichet.', en: 'In an emergency, ring at the desk.' },
    { from: 'coach', fr: 'Si c’est urgent devient en cas d’urgence.', en: 'Si c’est urgent becomes en cas d’urgence.', warn: 'Si > en cas de' },
  ],
  closing: { fr: "Chaque proposition est devenue un groupe : la préposition garde le lien, le nom garde l'action.", en: 'Each clause has become a noun phrase: the preposition keeps the link, the noun keeps the action.' },
  audio: REC('rec-b2-10-clinique'),
  say: REFRAME,
  terms: ['groupe'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-groupes',
  title: 'Quatre propositions pliées',
  frSub: 'La conjonction devient préposition',
  hint: 'Quatre cartes. Regarde ce que devient le sujet.',
  audio: REC('rec-b2-10-groupes'),
  say: REFRAME,
  terms: ['groupe', 'lien'],
  cards: [
    {
      head: 'Quand > à, dès', label: 'le moment',
      fr: fr(E(1496)), sub: rsOf(E(1496)),
      body: "Quand il est arrivé devient à son arrivée. Le sujet il devient le possessif son ; avec un nom, on écrit de : à l'arrivée de la ministre. EN: the subject becomes a possessive or de.",
    },
    {
      head: 'Avant que > avant', label: Cap(SUBJ_IND_REF),
      fr: fr(E(1498)), sub: rsOf(E(1498)),
      body: "Avant qu'il parte demande le subjonctif. Avant son départ ne demande rien : le groupe nominal contourne le mode. EN: the noun phrase sidesteps the subjunctive.",
    },
    {
      head: 'Après que > après', label: 'la suite',
      fr: fr(E(1500)), sub: rsOf(E(1500)),
      body: "Après qu'on a signé devient après la signature. Le on disparaît : le nom n'a pas besoin de sujet. EN: the noun needs no subject.",
    },
    {
      head: 'Parce que > en raison de', label: Cap(SUBORD_REF),
      fr: fr(E(1502)), sub: rsOf(E(1502)),
      body: `« ${B131_REFRAME} » Devant un nom : à cause de, ou en raison de à l'écrit. EN: ${B131_REFRAME_EN}`,
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Plie la proposition',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Le moment', [
      it(E(1495), 'la proposition'),
      it(E(1496), 'le groupe'),
      it(E(1503), 'la proposition'),
      it(E(1504), 'le groupe'),
    ], chk('« Quand la ministre est arrivée » devient…',
      ['à l’arrivée de la ministre', 'quand l’arrivée de la ministre', 'à la ministre arrivée'], 0,
      'À + nom, et la ministre passe derrière de. EN: à l’arrivée de.')),
    grp('Avant, après', [
      it(E(1497), 'la proposition'),
      it(E(1498), 'le groupe'),
      it(E(1499), 'la proposition'),
      it(E(1500), 'le groupe'),
    ], chk('« Avant qu’elle parte » devient…',
      ['avant son départ', 'avant sa partie'], 0,
      'Partir, le départ ; elle devient son. EN: avant son départ.')),
    grp('La cause, la condition', [
      it(E(1501), 'la proposition'),
      it(E(1502), 'le groupe'),
      it(E(1507), 'la proposition'),
      it(E(1508), 'le groupe'),
    ], chk('« Si le vol est annulé » devient…',
      ['en cas d’annulation du vol', 'si l’annulation du vol'], 0,
      'Si devient en cas de. EN: si becomes en cas de.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['groupe'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Proposition ou groupe',
  frSub: 'Neuf phrases, deux formes',
  lines: [
    ln(E(1495)), ln(E(1496)), ln(E(1497)), ln(E(1498)), ln(E(1501)),
    ln(E(1502)), ln(E(1505)), ln(E(1506)), ln(E(1509)),
  ],
  questions: [
    { q: 'Deuxième phrase : à quel moment tout le monde s’est-il levé ?', opts: ['quand il est arrivé', 'quand il est parti'], correct: 0, why: 'À son arrivée. EN: when he arrived.' },
    { q: 'Quatrième phrase : le pot aura lieu…', opts: ['avant qu’il parte', 'après son départ'], correct: 0, why: 'Avant son départ. EN: before he leaves.' },
    { q: 'Sixième phrase : pourquoi les ventes ont-elles baissé ?', opts: ['les prix ont augmenté', 'les prix ont baissé'], correct: 0, why: 'En raison de la hausse des prix. EN: prices went up.' },
    { q: 'Huitième phrase : où s’arrêtent les trains pendant les travaux ?', opts: ['à Renens', 'à Morges', 'à Lausanne'], correct: 0, why: 'À Renens. EN: at Renens.' },
    { q: 'Dernière phrase : depuis quand le service fonctionne-t-il mal ?', opts: ['depuis que quelqu’un est parti', 'depuis que quelqu’un est arrivé'], correct: 0, why: 'Depuis son départ. EN: since someone left.' },
  ],
  audio: REC('rec-b2-10-groupes-ecoute'),
  say: REFRAME,
  terms: ['groupe'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Les groupes à moitié pliés',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Préposition, possessif, nom',
    body: "Quand on plie une proposition, tout change en même temps : la conjonction devient préposition (que disparaît), le verbe devient nom, le sujet devient possessif ou complément avec de. EN: conjunction to preposition, verb to noun, subject to possessive or de.",
  },
  cards: [
    trap(E(1498), 'le sujet perdu', 'Avant départ, nous organiserons un pot.', 'Dis à qui est le départ : avant son départ. EN: say whose departure.'),
    trap(E(1502), 'la conjonction gardée', 'Parce que la hausse des prix, les ventes ont baissé.', 'Parce que veut un verbe ; devant un nom, en raison de. EN: parce que needs a clause.'),
    trap(E(1496), 'la préposition oubliée', "Son arrivée, tout le monde s'est levé.", 'Le lien de temps a disparu : à son arrivée. EN: the time link is gone.'),
    trap(E(1504), 'le possessif', 'Dès sa arrivée, préviens-moi.', 'Devant une voyelle, son, même au féminin : son arrivée. EN: son before a vowel.'),
    trap(E(1500), 'que en trop', 'Après que la signature du contrat, les travaux ont commencé.', 'Devant un nom, après tout seul. EN: après alone before a noun.'),
    trap(E(1509), 'que en trop', 'Depuis que son départ, le service fonctionne mal.', 'Devant un nom, depuis tout seul. EN: depuis alone before a noun.'),
  ],
  drill: [
    { promptSay: '… son arrivée, préviens-moi.', opts: ['Dès', 'Dès que'], correct: 0 },
    { promptSay: 'Avant … départ, passe me voir.', opts: ['sa', 'son'], correct: 1 },
    { promptSay: '… la hausse des prix, les ventes ont baissé.', opts: ['En raison de', 'Parce que'], correct: 0 },
    { promptSay: '… la signature, les travaux ont commencé.', opts: ['Après que', 'Après'], correct: 1 },
    { promptSay: '… d’annulation, vous serez remboursé.', opts: ['En cas', 'Si'], correct: 0 },
    { promptSay: 'Depuis … départ, rien ne va.', opts: ['que son', 'son'], correct: 1 },
    { promptSay: '… la rénovation, la gare reste ouverte.', opts: ['Pendant', 'Pendant que'], correct: 0 },
    { promptSay: '… l’arrivée de la ministre, on a applaudi.', opts: ['Quand', 'À'], correct: 1 },
  ],
  steps: STEPS('Préposition, possessif, nom', 'Les groupes à moitié pliés'),
  audio: REC('rec-b2-10-piege-groupes'),
  say: REFRAME,
  terms: ['groupe'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  title: 'Cinq propositions pliées',
  frSub: 'Lis, puis retrouve la proposition',
  examples: [
    ex(E(1506), 'pendant qu’on rénove la gare'),
    ex(E(1508), 'si le vol est annulé'),
    ex(E(1509), 'depuis qu’il est parti'),
    ex(E(1512), 'quand la ministre est arrivée'),
    ex('fr.b1.projets-et-futur.1114', 'dès qu’elle arrivera'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['groupe'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Réécrire : l’avis des trains vaudois', TEXTE_A6, [
  { q: 'Réécris le début : parce qu’on fait des travaux sur la voie.', a: 'En raison de travaux sur la voie, le train de 7 h 12 ne circulera pas.' },
  { q: 'Réécris : quand vous arriverez à Morges ; avant que le bus parte.', a: 'À votre arrivée à Morges, prenez le bus. Avant le départ du bus, montrez votre billet au chauffeur.' },
  { q: 'Réécris : si votre correspondance est annulée.', a: 'En cas d’annulation de votre correspondance, vous serez remboursé.' },
  { q: 'Réécris la fin : après qu’on aura terminé les travaux.', a: "Après la fin des travaux, l'horaire normal reprendra. Le on disparaît avec le verbe." },
], 'rec-b2-10-texte-a6', ['groupe']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Quand', '« Quand il est arrivé » devient…',
    ['à son arrivée', 'quand son arrivée', 'à sa arrivée'], 0,
    'À + possessif + nom. EN: à son arrivée.'),
  ctl('Avant que', 'Avec « avant son départ », le verbe de la phrase…',
    ['n’a plus besoin du subjonctif', 'reste au subjonctif'], 0,
    'Plus de proposition, donc plus de mode à choisir. EN: no clause, no mood.'),
  ctl('Parce que', 'Devant un nom, « parce que » devient…',
    ['en raison de', 'parce que de'], 0,
    'Une préposition devant un nom. EN: a preposition before a noun.'),
], ['groupe']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Une proposition, un groupe',
    opener: {
      line: "Quand vous arrivez, avant que vous partiez : ici tu plies une proposition entière en un groupe nominal. EN: Here you fold a whole clause into one noun phrase.",
      imageRef: 'lessons/nominalisation/act06.jpg',
    },
    sections: [],
    milestone: "Tu transformes quand, avant que, après que, parce que et si en une préposition suivie d'un nom, avec le bon possessif. EN: You can turn a clause into a preposition plus a noun.",
    estScreens: 40, restPoints: ['a6-construire', 'a6-piege'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_ECOUTE, A6_PIEGE, A6_EXEMPLES, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: LA PRÉPOSITION DIT LE LIEN
 *
 *  Lesson 32 in B1 (malgré against bien que) is quoted, never re-taught.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Dix annonces',
  frSub: 'Écoute le lien avant le fait',
  lines: [
    ln(E(1513)), ln(E(1514)), ln(E(1515)), ln(E(1516)), ln(E(1517)),
    ln(E(1518)), ln(E(1519)), ln(E(1520)), ln(E(1522)), ln(E(1523)),
  ],
  questions: [
    { q: 'Première annonce : pourquoi les trains ne circuleront-ils pas ?', opts: ['une grève', 'une panne', 'la neige'], correct: 0, why: 'En raison d’une grève : la cause. EN: a strike.' },
    { q: 'Deuxième annonce : que s’est-il passé avant le redémarrage ?', opts: ['une panne', 'une mise à jour'], correct: 0, why: 'À la suite d’une panne. EN: a breakdown.' },
    { q: 'Cinquième annonce : les ventes ont-elles baissé ?', opts: ['non, elles ont progressé', 'oui, elles ont baissé'], correct: 0, why: 'Malgré : l’obstacle n’a rien empêché. EN: despite the rise, sales grew.' },
    { q: 'Sixième annonce : pourquoi le poste reste-t-il vacant ?', opts: ['il manque des candidats', 'le salaire est trop bas'], correct: 0, why: 'Faute de candidats : le manque. EN: no applicants.' },
    { q: 'Huitième annonce : quand faut-il prendre l’escalier de secours ?', opts: ['s’il y a le feu', 's’il y a une panne'], correct: 0, why: 'En cas d’incendie : une condition. EN: in case of fire.' },
  ],
  audio: REC('rec-b2-10-annonces'),
  say: REFRAME,
  terms: ['lien'],
};

const A7_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-table',
  layer: 'core',
  sheetId: 'sheet-liens',
  title: 'Six prépositions, six liens',
  cols: ['Préposition', 'Le lien', 'Exemple'],
  rows: [
    { cells: ['en raison de', 'la cause, neutre', "en raison d'une grève"], say: fr(E(1513)),
      detail: { title: 'en raison de', body: `La cause, sans jugement : le registre des avis et des rapports. ${Cap(SUBORD_REF)} t'a donné à cause de et grâce à. EN: a neutral, formal cause.`, say: fr('fr.b1.connecteurs-logiques.1266') } },
    { cells: ['à la suite de', "ce qui s'est passé avant", "à la suite d'une panne"], say: fr(E(1514)),
      detail: { title: 'à la suite de', body: "Un événement antérieur qui a entraîné la suite. Suite à s'entend beaucoup dans les courriels ; à la suite de reste plus soigné. EN: following.", say: fr(E(1521)) } },
    { cells: ['lors de', 'le moment', 'lors de la réunion'], say: fr(E(1515)),
      detail: { title: 'lors de', body: "Au moment de, à l'occasion de, toujours devant un nom : lors de sa visite. EN: during, at the time of.", say: fr(E(1526)) } },
    { cells: ['en vue de', 'le but', 'en vue du déménagement'], say: fr(E(1516)),
      detail: { title: 'en vue de', body: "Le but, devant un nom ou un infinitif : en vue de l'examen, en vue de partir. EN: with a view to.", say: fr(E(1528)) } },
    { cells: ['malgré', "l'obstacle", 'malgré la hausse des prix'], say: fr(E(1517)),
      detail: { title: 'malgré', body: `« ${B132_REFRAME} » Malgré dit que l'obstacle n'a rien empêché. Devant une proposition : bien que. EN: ${B132_REFRAME_EN}`, say: fr('fr.b1.connecteurs-logiques.1459') } },
    { cells: ['faute de', 'le manque', 'faute de candidats'], say: fr(E(1518)),
      detail: { title: 'faute de', body: "Le manque, sans article : faute de temps, faute d'argent. EN: for lack of.", say: fr(E(1527)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lien'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Choisis le lien par le sens',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('La cause ou le but', [
      it(E(1513), 'la cause'),
      it('fr.b1.strategies-de-comprehension.1219', 'la cause'),
      it(E(1516), 'le but'),
      it(E(1528), 'le but'),
    ], chk('« … l’inventaire, le magasin fermera plus tôt. » (pour pouvoir le faire)',
      ['En vue de', 'En raison de', 'Malgré'], 0,
      'Le but : en vue de. EN: the purpose.')),
    grp('Le moment', [
      it(E(1515), 'lors de'),
      it(E(1519), 'dès'),
      it(E(1522), 'dès, sans article'),
      it(E(1526), 'lors de'),
    ], chk('« … réception du colis, vérifie son contenu. »',
      ['Dès', 'Faute de'], 0,
      'Dès : à partir du moment de. EN: as soon as.')),
    grp('L’obstacle ou le manque', [
      it(E(1517), 'malgré'),
      it(E(1523), 'malgré'),
      it(E(1518), 'faute de'),
      it(E(1527), 'faute de'),
    ], chk('« … la pluie, le concert a eu lieu. »',
      ['Malgré', 'Faute de', 'En vue de'], 0,
      'L’obstacle n’a rien empêché : malgré. EN: despite.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lien'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre liens mal branchés',
  errors: [
    {
      wrong: "Malgré qu'il pleuve, le match a eu lieu.",
      right: 'Malgré la pluie, le match a eu lieu.',
      why: "Normal : bien que est suivi d'une proposition, et malgré est son cousin. Mais à l'écrit soigné, malgré veut un nom. EN: in careful writing, malgré takes a noun.",
    },
    {
      wrong: "En raison qu'il y a une grève, aucun train ne circule.",
      right: "En raison d'une grève, aucun train ne circule.",
      why: "Normal : on croise parce que et en raison de dans la même phrase. En raison de ne se construit qu'avec un nom. EN: en raison de takes a noun only.",
    },
    {
      wrong: "Grâce à la tempête, l'école a fermé.",
      right: "À cause de la tempête, l'école a fermé.",
      why: `Grâce à dit une cause positive (${SUBORD_REF}). Pour une tempête, à cause de, ou en raison de à l'écrit. EN: grâce à is for a welcome cause.`,
    },
    {
      wrong: 'Faute du temps, nous n’avons pas fini.',
      right: 'Faute de temps, nous n’avons pas fini.',
      why: "Normal : on met souvent un article après de. Faute de, lui, se passe d'article : faute de temps, faute d'argent. EN: faute de takes no article.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lien'],
};

const A7_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a7-flash',
  layer: 'core',
  title: 'Huit liens à connaître',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'owing to', back: 'en raison de', say: fr(E(1513)) },
    { front: 'following', back: 'à la suite de', say: fr(E(1514)) },
    { front: 'at, during (an event)', back: 'lors de', say: fr(E(1515)) },
    { front: 'with a view to', back: 'en vue de', say: fr(E(1516)) },
    { front: 'despite', back: 'malgré', say: fr(E(1517)) },
    { front: 'for lack of', back: 'faute de', say: fr(E(1518)) },
    { front: 'as soon as (+ noun)', back: 'dès', say: fr(E(1522)) },
    { front: 'in case of', back: 'en cas de', say: fr(E(1520)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lien'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Compléter : l’annonce de l’aéroport', TEXTE_A7, [
  { q: 'Complète : (la cause) du brouillard ; (ce qui s’est passé avant) d’un incident technique.', a: "En raison du brouillard, plusieurs vols sont retardés. À la suite d'un incident technique, le vol pour Paris est annulé." },
  { q: 'Complète : (le moment) de l’embarquement ; (la condition) de retard.', a: "Lors de l'embarquement, présentez votre passeport. En cas de retard de plus de trois heures, un repas vous sera offert." },
  { q: 'Complète la fin : (l’obstacle) ces difficultés ; (le manque) de place.', a: 'Malgré ces difficultés, notre personnel reste à votre disposition. Faute de place, certains passagers seront logés à Laval.' },
  { q: 'Pourquoi une annonce d’aéroport aime-t-elle ces prépositions ?', a: "Elles disent le lien en deux ou trois mots, devant un nom : le voyageur pressé comprend la cause et la consigne d'un coup d'œil." },
], 'rec-b2-10-texte-a7', ['lien']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le manque', '« … candidats, le poste reste vacant. »',
    ['Faute de', 'Malgré', 'En vue de'], 0,
    'Le manque : faute de. EN: for lack of.'),
  ctl('Le moment', '« … la réunion, la directrice a présenté le budget. »',
    ['Faute de', 'Lors de'], 1,
    'Le moment : lors de. EN: at the meeting.'),
  ctl('Malgré', 'À l’écrit soigné, malgré est suivi…',
    ['d’un nom', 'de que et d’un verbe'], 0,
    'Malgré la pluie ; bien qu’il pleuve. EN: malgré takes a noun.'),
], ['lien']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'La préposition dit le lien',
    opener: {
      line: "En raison de, malgré, faute de : ici tu choisis la préposition qui dit pourquoi, quand ou malgré quoi. EN: Here you pick the preposition that says why, when or despite what.",
      imageRef: 'lessons/nominalisation/act07.jpg',
    },
    sections: [],
    milestone: "Tu relies un groupe nominal au reste de la phrase avec la préposition qui dit le bon lien : cause, but, moment, obstacle, manque, condition. EN: You can link a noun phrase with the preposition that names the relation.",
    estScreens: 36, restPoints: ['a7-table', 'a7-erreurs'],
  },
  sections: [A7_ECOUTE, A7_TABLE, A7_CHOISIR, A7_ERREURS, A7_FLASH, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: QUI FAIT QUOI DANS LE GROUPE
 *
 *  Lesson 18 in B1 (the passive and par) is quoted.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Les titres de Kouadio',
  frSub: 'Qui critique qui',
  setting: "Abidjan, la rédaction d'un journal en ligne. Kouadio, stagiaire, propose des titres ; sa cheffe, Mme Yao, vérifie qu'on sait toujours qui fait quoi.",
  bubbles: [
    { from: 'narrator', fr: 'Kouadio lit ses titres ; Mme Yao cherche qui agit et qui subit.', en: 'Kouadio reads his headlines; Mme Yao looks for who acts and who undergoes.' },
    { from: 'user', fr: 'La critique du ministre fait du bruit.', en: 'The minister’s criticism is causing a stir.' },
    { from: 'coach', fr: 'Le ministre critique, ou on le critique. Ton titre ne le dit pas.', en: 'The minister criticises, or he is criticised. Your headline does not say which.', warn: 'De : ambigu' },
    { from: 'user', fr: 'Les critiques du ministre contre la réforme font du bruit.', en: 'The minister’s criticisms of the reform are causing a stir.' },
    { from: 'coach', fr: 'Contre la réforme : maintenant, c’est clair, le ministre critique.', en: 'Contre la réforme: now it is clear, the minister is the critic.', warn: 'Contre lève le doute' },
    { from: 'user', fr: 'Annulation du festival par la mairie.', en: 'Festival cancelled by the town hall.' },
    { from: 'coach', fr: 'De pour ce qui est annulé, par pour qui annule. Parfait.', en: 'De for what is cancelled, par for who cancels. Perfect.', warn: 'De et par' },
    { from: 'user', fr: 'Sa nomination à la tête de la police.', en: 'Her appointment as head of the police.' },
    { from: 'coach', fr: 'Sa : la personne qu’on a nommée. Le possessif peut aussi dire qui subit.', en: 'Sa: the person who was appointed. The possessive can also mean the one affected.', warn: 'Le possessif' },
  ],
  closing: { fr: 'Dans un groupe nominal, de et le possessif restent flous ; par et contre disent qui fait quoi.', en: 'In a noun phrase, de and the possessive stay vague; par and contre say who does what.' },
  audio: REC('rec-b2-10-kouadio'),
  say: REFRAME,
  terms: ['agent'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-groupes',
  title: 'Qui agit, qui subit',
  frSub: 'De, par, le possessif',
  hint: 'Quatre cartes. Cherche celui qui fait l’action.',
  audio: REC('rec-b2-10-agent'),
  say: REFRAME,
  terms: ['agent'],
  cards: [
    {
      head: 'Celui qui agit', label: 'de ou le possessif',
      fr: fr(E(1530)), sub: rsOf(E(1530)),
      body: "Le maire décide : la décision du maire, sa décision. Avec un verbe sans complément, de introduit aussi celui qui agit : l'arrivée du train. EN: de or the possessive for the doer.",
    },
    {
      head: 'Ce qui subit', label: 'de',
      fr: fr(E(1536)), sub: rsOf(E(1536)),
      body: "On arrête le policier : l'arrestation du policier. Quand le verbe a un complément, de introduit souvent ce qui subit. EN: de often marks what undergoes the action.",
    },
    {
      head: 'Les deux à la fois', label: Cap(PASSIF_REF),
      fr: fr(E(1532)), sub: rsOf(E(1532)),
      body: `De pour ce qui subit, par pour celui qui agit, comme au passif : « ${B118_REFRAME} » EN: ${B118_REFRAME_EN}`,
    },
    {
      head: 'Le doute', label: 'de peut tromper',
      fr: fr(E(1533)), sub: rsOf(E(1533)),
      body: "La critique du ministre : il critique, ou on le critique ? Quand le contexte ne tranche pas, ajoute par ou contre, ou garde le verbe. EN: when de is ambiguous, add par or contre.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Garde qui fait quoi',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Un verbe, un groupe', [
      it(E(1529), 'la phrase'),
      it(E(1530), 'le groupe : du maire'),
      it('fr.b1.faits-et-procedures.1000', 'le passif, avec par'),
      it(E(1532), 'le groupe : de, puis par'),
    ], chk('« La compagnie a annulé le vol » : dans le groupe, la compagnie est introduite par…',
      ['par', 'de', 'à'], 0,
      'Par, pour celui qui annule. EN: par for the doer.')),
    grp('De : ce qui subit', [
      it(E(1536), 'on l’a arrêté'),
      it(E(1537), 'on l’a nommée'),
      it(E(1543), 'on l’a nommé'),
      it(E(1539), 'l’entreprise est rachetée'),
    ], chk('« L’arrestation du policier » : le policier…',
      ['a été arrêté', 'a arrêté quelqu’un'], 0,
      'Il subit l’arrestation. EN: he was arrested.')),
    ctl('Le doute', '« La critique du ministre » : qui critique ?',
      ['on ne peut pas savoir sans contexte', 'le ministre, forcément'], 0,
      'De peut désigner les deux. EN: de is ambiguous here.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['agent'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Les groupes où l’on se perd',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'De subit, par agit',
    body: "Quand le groupe a deux personnes ou deux choses, de introduit ce qui subit l'action et par celui qui la fait. Avec deux de, on ne sait plus qui fait quoi. EN: de for what undergoes the action, par for the doer.",
  },
  cards: [
    trap(E(1532), 'de en double', "L'annulation du vol de la compagnie a provoqué la colère des passagers.", 'Le vol de la compagnie ? Par la compagnie : celle qui annule. EN: par for the doer.'),
    trap(E(1539), 'par oublié', "Le rachat de l'entreprise d'un groupe canadien est confirmé.", 'D’un groupe canadien semble décrire l’entreprise. Par dit l’acheteur. EN: par names the buyer.'),
    trap(E(1542), 'par oublié', "L'annulation du concert de l'organisateur a déçu le public.", 'Le concert de l’organisateur ? Par l’organisateur. EN: par names the doer.'),
    trap(E(1535), 'le doute', 'Les critiques du ministre se multiplient.', 'Ambigu : ajoute contre la réforme pour dire que le ministre critique. EN: add contre to remove the doubt.'),
    trap(E(1538), 'de en double', "La construction du pont d'une entreprise locale a duré deux ans.", 'Par une entreprise locale : celle qui construit. EN: par for the builder.'),
    trap(E(1543), 'mauvais nom', 'Le nommement du directeur a été annoncé hier.', 'Nommer, la nomination. EN: nomination.'),
  ],
  drill: [
    { promptSay: "L'annulation du vol … la compagnie", opts: ['par', 'de'], correct: 0 },
    { promptSay: "Le rachat de l'usine … un groupe canadien", opts: ["d'", 'par'], correct: 1 },
    { promptSay: '… arrivée a été saluée par tous.', opts: ['Son', 'Sa'], correct: 0 },
    { promptSay: 'Les critiques … le ministre se multiplient.', opts: ['par', 'contre'], correct: 1 },
    { promptSay: 'La décision … maire a surpris.', opts: ['du', 'par le'], correct: 0 },
    { promptSay: 'La construction du pont … une entreprise locale', opts: ["d'", 'par'], correct: 1 },
    { promptSay: 'La … du directeur a été annoncée.', opts: ['nomination', 'nommage'], correct: 0 },
    { promptSay: "L'arrestation … policier a eu lieu hier.", opts: ['par le', 'du'], correct: 1 },
  ],
  steps: STEPS('De subit, par agit', 'Les groupes où l’on se perd'),
  audio: REC('rec-b2-10-piege-agent'),
  say: REFRAME,
  terms: ['agent'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui a fait quoi',
  frSub: 'Neuf phrases, écoute de et par',
  lines: [
    ln(E(1529)), ln(E(1530)), ln(E(1531)), ln(E(1532)), ln(E(1533)),
    ln(E(1536)), ln(E(1537)), ln(E(1538)), ln(E(1539)),
  ],
  questions: [
    { q: 'Deuxième phrase : qui a pris la décision ?', opts: ['le maire', 'le club', 'les nageurs'], correct: 0, why: 'La décision du maire. EN: the mayor.' },
    { q: 'Quatrième phrase : qui a annulé le vol ?', opts: ['la compagnie', 'les passagers'], correct: 0, why: 'Par la compagnie. EN: the airline.' },
    { q: 'Sixième phrase : le policier…', opts: ['a été arrêté', 'a arrêté quelqu’un'], correct: 0, why: 'L’arrestation du policier : il la subit. EN: he was arrested.' },
    { q: 'Huitième phrase : qui a construit le pont ?', opts: ['une entreprise locale', 'une entreprise canadienne'], correct: 0, why: 'Par une entreprise locale. EN: a local firm.' },
    { q: 'Dernière phrase : qui achète l’entreprise ?', opts: ['un groupe canadien', 'ses salariés'], correct: 0, why: 'Par un groupe canadien. EN: a Canadian group.' },
  ],
  audio: REC('rec-b2-10-agent-ecoute'),
  say: REFRAME,
  terms: ['agent'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Réécrire : quatre titres de Sherbrooke', TEXTE_A8, [
  { q: 'Titre 1 : le conseil municipal a voté le budget.', a: 'Vote du budget par le conseil municipal : de pour le budget, par pour le conseil.' },
  { q: 'Titre 2 : la mairesse a nommé une nouvelle directrice des sports.', a: "Nomination d'une nouvelle directrice des sports par la mairesse." },
  { q: 'Titre 3 : le club de natation a critiqué la fermeture de la piscine.', a: 'Critiques du club de natation contre la fermeture de la piscine : contre dit ce qui est critiqué.' },
  { q: 'Titre 4 : un promoteur de Laval a racheté l’ancien cinéma Élysée.', a: "Rachat de l'ancien cinéma Élysée par un promoteur de Laval." },
], 'rec-b2-10-texte-a8', ['agent', 'titre']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Par', '« L’annulation du vol par la compagnie » : qui annule ?',
    ['la compagnie', 'le vol', 'les passagers'], 0,
    'Par introduit celui qui agit. EN: the airline.'),
  ctl('De', '« L’arrestation du policier » : le policier…',
    ['a arrêté quelqu’un', 'a été arrêté'], 1,
    'De introduit ici celui qui subit. EN: he was arrested.'),
  ctl('Le doute', 'Pour lever le doute de « la critique du ministre », tu…',
    ['ajoutes par ou contre', 'ajoutes un autre de'], 0,
    'Par ou contre disent qui fait quoi. EN: add par or contre.'),
], ['agent']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Qui fait quoi',
    opener: {
      line: "La critique du ministre : il critique, ou on le critique ? Ici tu apprends à dire qui fait quoi dans un groupe nominal. EN: Here you learn to say who does what inside a noun phrase.",
      imageRef: 'lessons/nominalisation/act08.jpg',
    },
    sections: [],
    milestone: "Tu dis qui agit et qui subit dans un groupe nominal, avec de, par, contre ou un possessif, sans ambiguïté. EN: You can mark the doer and the patient in a noun phrase.",
    estScreens: 36, restPoints: ['a8-construire', 'a8-piege'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_PIEGE, A8_ECOUTE, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: TITRES ET COMPTES RENDUS
 *
 *  Lesson 34 in B1 taught headlines for READING; here they are WRITTEN,
 *  with agenda points, minutes and summaries.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le compte rendu de la Croix-Rousse',
  frSub: 'Lis, et repère les noms et les verbes',
  text: LECTURE_COMPTE_RENDU,
  glossary: [
    { word: 'Excusés', en: 'apologies (absent)', note: 'Les membres absents qui ont prévenu.' },
    { word: 'questions diverses', en: 'any other business', note: 'Le dernier point d’une réunion, pour les sujets non prévus.' },
    { word: 'la dangerosité', en: 'how dangerous (something) is', note: 'Le nom de dangereux : le caractère dangereux d’un lieu.' },
  ],
  questions: [
    { q: 'Global : à quoi sert ce document ?', a: 'À garder une trace de la réunion : qui était là, de quoi on a parlé, ce qui a été décidé.' },
    { q: 'Détail : que décide l’association au point 3 ?', a: "Le lancement d'une pétition en ligne dès la semaine prochaine, contre la fermeture de la bibliothèque le samedi." },
    { q: 'Détail : pourquoi les travaux ont-ils pris du retard ?', a: "En raison d'un désaccord entre la mairie et l'entreprise." },
    { q: 'Inférence : pourquoi l’ordre du jour est-il écrit tout en noms ?', a: "C'est une liste : chaque nom annonce un sujet d'un coup d'œil, sans phrase complète." },
    { q: 'Position : le compte rendu est-il neutre sur la fermeture de la bibliothèque ?', a: "Il rapporte l'avis des membres (ils s'y opposent, la mesure pénaliserait les familles), mais sans commentaire de la personne qui écrit." },
  ],
  audio: REC('rec-b2-10-compte-rendu'),
  say: REFRAME,
  terms: ['titre'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ecrit',
  title: 'Quatre écrits qui aiment les noms',
  frSub: 'Le titre, le point, la décision, le résumé',
  hint: 'Quatre cartes. Regarde où le verbe disparaît, et où il reste.',
  audio: REC('rec-b2-10-titres'),
  say: REFRAME,
  terms: ['titre'],
  cards: [
    {
      head: 'Le titre', label: Cap(MEDIAS_REF),
      fr: fr('fr.b1.journalisme.1041'), sub: rsOf('fr.b1.journalisme.1041'),
      body: `« ${B134_REFRAME} » Là, tu lisais les titres. Maintenant tu les écris : un nom d'action, pas d'article, pas de verbe conjugué, puis les détails. EN: ${B134_REFRAME_EN}`,
    },
    {
      head: 'Le point de réunion', label: 'l’ordre du jour',
      fr: fr(E(1548)), sub: rsOf(E(1548)),
      body: "Chaque point se liste en noms : adoption, point sur, fermeture. On voit tout le plan d'un coup d'œil. EN: agenda points are listed as nouns.",
    },
    {
      head: 'La décision', label: 'le compte rendu',
      fr: fr(E(1553)), sub: rsOf(E(1553)),
      body: "Pour une décision, garde souvent un verbe : le règlement est adopté. Le nom seul (adoption du règlement) va bien dans une liste. EN: decisions often keep a verb.",
    },
    {
      head: 'Le résumé', label: 'la lettre interne',
      fr: fr(E(1403)), sub: rsOf(E(1403)),
      body: "Dans un résumé, un ou deux noms par phrase, et un verbe précis au milieu : a alourdi, a raccourci. EN: one or two nouns per sentence, and a precise verb.",
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'De la phrase au titre, et retour',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('De la phrase au titre', [
      it(E(1545), 'la phrase'),
      it(E(1544), 'le titre'),
      it(E(1547), 'la phrase'),
      it(E(1546), 'le titre'),
    ], chk('« La piscine sera fermée en août » devient…',
      ['Fermeture de la piscine en août', 'La piscine fermée elle sera en août', 'Fermer la piscine en août'], 0,
      'Le nom d’action, sans article, puis les détails. EN: action noun first.')),
    grp('Du titre à la phrase', [
      it(E(1549), 'tous d’accord'),
      it(E(1550), 'une crèche ouvre'),
      it(E(1551), 'la présidente part'),
      it(E(1552), 'le conseil valide'),
    ], chk('« Adoption du budget à l’unanimité » veut dire…',
      ['tout le monde a voté pour le budget', 'le budget a été refusé'], 0,
      'À l’unanimité : tous d’accord. EN: everyone voted for it.')),
    ctl('Le compte rendu', 'Dans un compte rendu, une décision importante…',
      ['garde souvent un verbe', 'doit toujours être un nom seul'], 0,
      'Le règlement est adopté : la décision se lit mieux avec un verbe. EN: keep a verb for decisions.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['titre'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Cinq titres bien faits',
  frSub: 'Lis, puis retrouve le verbe',
  examples: [
    ex(E(1556), 'modifier : la modification'),
    ex(E(1557), 'planter : la plantation'),
    ex('fr.b1.journalisme.1043', 'le nom, puis deux points et la conséquence'),
    ex('fr.b1.journalisme.1044', 'le lieu à la fin'),
    ex(E(1548), 'reporter : le report, un nom court'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['titre', 'court'],
};

const A9_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a9-focus',
  layer: 'core',
  sheetId: 'sheet-ecrit',
  title: 'Quatre règles pour écrire court',
  frSub: 'Avant un titre ou un compte rendu',
  points: [
    "Un titre : le nom d'action d'abord, sans article, puis qui, où, quand. EN: noun first, then the details.",
    "Un ordre du jour : un nom par point, tous dans le même style. EN: one noun per agenda item.",
    "Un compte rendu : des noms pour les points, des verbes pour les décisions. EN: nouns for items, verbs for decisions.",
    "Un résumé : un ou deux noms par phrase, jamais une chaîne. EN: one or two nouns per sentence.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['titre', 'chaine'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Condenser : la patinoire de Sherbrooke', TEXTE_A9, [
  { q: 'Écris le titre de la dépêche.', a: 'Fermeture de la patinoire du parc Jacques-Cartier pendant trois semaines.' },
  { q: 'Écris la première phrase du chapeau : la cause et la date.', a: 'À la suite de la découverte de fissures dans la dalle, la Ville fermera la patinoire à partir de lundi.' },
  { q: 'Écris la deuxième phrase du chapeau : la solution et la promesse.', a: 'Les patineurs pourront aller au lac des Nations ; réouverture promise avant Noël.' },
  { q: 'Quelle information peux-tu laisser dans le corps de l’article ?', a: "Les horaires prolongés du lac des Nations : utiles, mais pas essentiels dans le titre ni dans le chapeau." },
], 'rec-b2-10-texte-a9', ['titre']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le titre', 'Quel titre est bien formé ?',
    ['Hausse des loyers à Lyon', 'Les loyers, ils augmentent à Lyon', 'Augmenter les loyers à Lyon'], 0,
    'Le nom d’action, sans article. EN: the action noun first.'),
  ctl('L’ordre du jour', 'Un point d’ordre du jour s’écrit…',
    ['avec un nom d’action', 'avec un verbe conjugué'], 0,
    'Adoption du budget. EN: with an action noun.'),
  ctl('La décision', '« Le règlement est adopté » : dans un compte rendu, c’est…',
    ['une décision, qui garde son verbe', 'une erreur de style'], 0,
    'Les décisions gardent souvent un verbe. EN: decisions keep a verb.'),
], ['titre']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Titres et comptes rendus',
    opener: {
      line: "Un titre, un ordre du jour, un compte rendu : ici tu écris les textes courts où le nom fait tout le travail. EN: Here you write the short texts where the noun does all the work.",
      imageRef: 'lessons/nominalisation/act09.jpg',
    },
    sections: [],
    milestone: "Tu écris un titre de presse, un ordre du jour et un compte rendu en groupes nominaux, en gardant un verbe pour les décisions. EN: You can write headlines, agendas and minutes in nominal style.",
    estScreens: 38, restPoints: ['a9-lecture', 'a9-exemples'],
  },
  sections: [A9_LECTURE, A9_CARTES, A9_CONSTRUIRE, A9_EXEMPLES, A9_FOCUS, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: TROP DE NOMS
 *
 *  The limit. Lesson 22 in B2 said « une nominalisation par phrase suffit
 *  souvent »; here the learner unfolds a chain, drops empty verbs and
 *  rewrites for the ear.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'Le communiqué à la radio',
  frSub: 'Plié pour l’écrit, déplié pour l’oreille',
  setting: "Nantes, le studio d'une radio locale. Julie doit lire à l'antenne un communiqué de la mairie écrit tout en noms. Son rédacteur en chef l'aide à le déplier.",
  bubbles: [
    { from: 'narrator', fr: 'Julie lit la première phrase du communiqué, et s’arrête.', en: 'Julie reads the first sentence of the press release, and stops.' },
    { from: 'user', fr: 'La mise en place d’un dispositif de réduction de la consommation d’énergie est prévue.', en: 'The setting up of a scheme for the reduction of energy consumption is planned.' },
    { from: 'coach', fr: 'À la radio, personne ne suit cette chaîne. Qui fait quoi, et pourquoi.', en: 'On the radio, nobody can follow that chain. Who does what, and why.', warn: 'Quatre noms à la suite' },
    { from: 'user', fr: 'La mairie va installer un système pour consommer moins d’énergie.', en: 'The town hall is going to install a system to use less energy.' },
    { from: 'coach', fr: 'Voilà : un sujet, un verbe, un but. On comprend du premier coup.', en: 'That is it: a subject, a verb, a purpose. You get it first time.', warn: 'Déplié pour l’oreille' },
    { from: 'user', fr: 'Il est procédé à la vérification des chaudières.', en: 'A check of the boilers is being carried out.' },
    { from: 'coach', fr: 'Procéder à la vérification, c’est vérifier. Garde le verbe fort.', en: 'Procéder à la vérification means vérifier. Keep the strong verb.', warn: 'Un verbe vide' },
    { from: 'user', fr: 'Les techniciens vérifient les chaudières.', en: 'The technicians are checking the boilers.' },
    { from: 'coach', fr: 'Plus court, plus clair, et rien n’est perdu.', en: 'Shorter, clearer, and nothing is lost.', warn: 'Le verbe fort' },
  ],
  closing: { fr: "Plier pour la page, déplier pour l'oreille : le fait reste le même.", en: 'Fold for the page, unfold for the ear: the fact stays the same.' },
  audio: REC('rec-b2-10-radio'),
  say: REFRAME,
  terms: ['chaine', 'deplier'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ecrit',
  title: 'Quatre signes qu’il faut déplier',
  frSub: 'La chaîne, le verbe vide, l’oreille, la mesure',
  hint: 'Quatre cartes. Cherche le verbe qui se cache dans le nom.',
  audio: REC('rec-b2-10-chaine'),
  say: REFRAME,
  terms: ['chaine', 'deplier'],
  cards: [
    {
      head: 'La chaîne', label: 'de la… de la…',
      fr: fr('fr.b2.universite.1125'), sub: rsOf('fr.b2.universite.1125'),
      body: "Quatre noms enchaînés par de : le lecteur doit tout déplier lui-même. Au-delà de deux, la phrase décroche. EN: past two chained nouns, the reader is lost.",
    },
    {
      head: 'Le verbe vide', label: 'procéder à, effectuer',
      fr: fr(E(1558)), sub: rsOf(E(1558)),
      body: "Procéder à, effectuer, faire l'objet de : ces verbes ne disent rien, le nom porte tout. Remplace-les par le verbe fort : vérifier. EN: replace the empty verb with the real one.",
    },
    {
      head: 'L’oreille', label: Cap(REGISTRES_REF),
      fr: fr(E(1563)), sub: rsOf(E(1563)),
      body: "À l'oral, l'auditeur ne peut pas relire. Qui fait quoi, avec des verbes : si vous ne montrez pas, on ne pourra pas. Le registre suit la personne et le moment. EN: speech wants verbs.",
    },
    {
      head: 'La mesure', label: Cap(STYLE_REF),
      fr: fr('fr.b2.universite.1126'), sub: rsOf('fr.b2.universite.1126'),
      body: "Une nominalisation par phrase suffit souvent : c'était déjà la règle. Maintenant, tu sais la fabriquer, et aussi la défaire. EN: one per sentence is often enough; now you can undo one too.",
    },
  ],
};

const A10_DEPLIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-deplier',
  layer: 'core',
  size: 'lg',
  title: 'Déplie la phrase',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Plié, puis déplié', [
      it(E(1558), 'plié : le verbe vide'),
      it(E(1559), 'déplié : le verbe fort'),
      it(E(1560), 'plié : faire l’objet de'),
      it(E(1561), 'déplié'),
    ], chk('« Le projet fait l’objet d’une révision » se dit à l’oral…',
      ['on revoit le projet', 'on procède à la révision du projet', 'le projet fait une révision'], 0,
      'Le verbe fort, avec un sujet. EN: the strong verb, with a subject.')),
    grp('Pour l’oreille', [
      it(E(1562), 'plié, pour un formulaire'),
      it(E(1563), 'déplié, pour une personne'),
      it(E(1564), 'une chaîne de quatre noms'),
      it(E(1565), 'déplié'),
    ], chk('Laquelle passe le mieux à la radio ?',
      [fr(E(1565)), fr(E(1564))], 0,
      'Un sujet, un verbe, un complément : on suit du premier coup. EN: one subject, one verb.')),
    ctl('La mesure', 'Combien de noms d’action enchaînés par de un lecteur suit-il sans peine ?',
      ['un ou deux', 'quatre ou cinq', 'autant qu’on veut'], 0,
      'Au-delà de deux, déplie. EN: past two, unfold.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['deplier', 'chaine'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre phrases trop pliées',
  errors: [
    {
      wrong: fr(E(1564)),
      right: fr(E(1565)),
      why: "Normal : les noms sonnent sérieux, alors on les empile. Mais trois de à la suite noient l'idée. EN: stacked nouns sound serious but drown the idea.",
    },
    {
      wrong: fr(E(1558)),
      right: fr(E(1559)),
      why: "Normal : procéder à fait administratif. Mais le verbe vide cache qui agit ; vérifier le dit. EN: the empty verb hides the doer.",
    },
    {
      wrong: fr(E(1562)),
      right: fr(E(1563)),
      why: "Sur un formulaire, la première passe. Lue à voix haute, elle perd l'auditeur, qui ne peut pas relire. EN: fine on a form, lost on the radio.",
    },
    {
      wrong: fr(E(1567)),
      right: fr(E(1566)),
      why: "Normal : en vue de semble élégant. Mais le repos des promeneurs n'est pas une chose qu'on installe : le verbe le dit plus simplement. EN: the verbal version says it plainly.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chaine', 'deplier'],
};

const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-hacks',
  layer: 'core',
  title: 'Trois astuces pour relire',
  hacks: [
    { hack: 'Compte les de. Au troisième, déplie un nom.', why: "Chaque de ajoute un étage ; au troisième, le lecteur perd le fil. EN: at the third de, unfold a noun." },
    { hack: 'Cherche le verbe vide : procéder à, effectuer, faire l’objet de.', why: "Enlève-le, et mets le verbe caché dans le nom : procéder à la vérification devient vérifier. EN: remove the empty verb." },
    { hack: 'Lis ta phrase à voix haute. Si tu reprends ton souffle au milieu, elle est trop pliée.', why: "Ton souffle mesure ce que l'oreille peut suivre. EN: your breath measures what the ear can follow." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['deplier'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Déplier : le communiqué de la préfecture', TEXTE_A10, [
  { q: 'Déplie la première phrase pour la radio.', a: 'À partir du lundi 3 mars, la route départementale 12 sera fermée, parce qu’on renforce la digue.' },
  { q: 'Déplie la deuxième phrase.', a: 'Une déviation passera par Saint-Martin. Ou : on va mettre en place une déviation par Saint-Martin.' },
  { q: 'Déplie la dernière phrase.', a: 'La route rouvrira quand les travaux seront finis, fin avril.' },
  { q: 'Combien de noms d’action la première phrase enchaînait-elle, et pourquoi était-ce trop ?', a: "Quatre : la réalisation, les travaux, le renforcement, la fermeture. L'auditeur doit tout garder en tête avant d'arriver au verbe." },
], 'rec-b2-10-texte-a10', ['deplier', 'chaine']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La chaîne', 'Trois de à la suite dans une phrase : tu…',
    ['déplies un nom en verbe', 'ajoutes un quatrième nom'], 0,
    'Au troisième de, déplie. EN: unfold at the third de.'),
  ctl('Le verbe vide', '« Procéder à la vérification » devient…',
    ['vérifier', 'effectuer une vérification', 'faire la vérification'], 0,
    'Le verbe fort remplace le verbe vide et son nom. EN: the strong verb.'),
  ctl('L’oral', 'À la radio, tu préfères…',
    ['le verbe, avec un sujet', 'le nom, sans sujet'], 0,
    'L’auditeur ne peut pas relire. EN: the listener cannot reread.'),
], ['deplier']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Trop de noms',
    opener: {
      line: "De la mise en place de la réduction de la consommation : ici tu apprends à déplier une phrase trop pliée. EN: Here you learn to unfold a sentence that has been folded too far.",
      imageRef: 'lessons/nominalisation/act10.jpg',
    },
    sections: [],
    milestone: "Tu repères une chaîne de noms et un verbe vide, et tu déplies la phrase pour un lecteur pressé ou pour l'oreille. EN: You can spot a noun chain or an empty verb and unfold it.",
    estScreens: 34, restPoints: ['a10-deplier', 'a10-hacks'],
  },
  sections: [A10_HISTOIRE, A10_CARTES, A10_DEPLIER, A10_ERREURS, A10_HACKS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: TON COMPTE RENDU
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le bilan que tu vas imiter',
  frSub: 'La lettre d’information de Lire à Dakar',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'ont afflué', en: 'poured in', note: 'Affluer : arriver en grand nombre.' },
    { word: 'bénévoles', en: 'volunteers', note: 'Des personnes qui aident sans être payées.' },
    { word: 'Perspectives', en: 'outlook', note: 'Ce qu’on prévoit pour la suite.' },
  ],
  questions: [
    { q: 'Global : à quoi sert ce texte ?', a: "À rendre compte d'une collecte de livres aux membres et aux donateurs, et à demander de l'aide pour la suite." },
    { q: 'Détail : combien de bibliothèques ont reçu des livres ?', a: "Onze, contre sept l'an dernier." },
    { q: 'Détail : quelle proposition cache le groupe « à la suite d’une panne de notre camion » ?', a: "Parce que notre camion est tombé en panne : la cause passe dans un groupe nominal." },
    { q: 'Inférence : pourquoi le texte n’est-il pas entièrement en noms ?', a: "Il garde un verbe dans chaque phrase (ont afflué, a pris, ont reçu) pour rester vivant et lisible, et s'adresse directement aux lecteurs à la fin." },
    { q: 'Position : quel ton l’association prend-elle avec ses lecteurs ?', a: "Un ton reconnaissant et engageant : elle remercie les donateurs et les invite à aider." },
  ],
  audio: REC('rec-b2-10-modele'),
  say: REFRAME,
  terms: ['titre', 'nominaliser'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-ecrit',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Du message oral au compte rendu',
  steps: [
    'Lis le récit et note chaque fait : qui, quoi, quand, pourquoi. EN: list the facts.',
    'Classe les faits en rubriques : déroulement, incident, résultats, recommandation. EN: sort them under headings.',
    'Plie ce qui peut l’être : un nom par idée, relié par à la suite de, en raison de, avant, dès. EN: fold into nouns, linked by prepositions.',
    'Garde au moins un verbe par phrase, et un verbe fort pour chaque décision. EN: keep a verb in each sentence.',
    'Relis à voix haute : trois de à la suite, déplie. Enlève les mots de l’oral (bon, du coup, voilà). EN: read aloud and unfold what is too heavy.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nominaliser', 'deplier'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  sheetId: 'sheet-ecrit',
  title: 'Quatre phrases que tout compte rendu contient',
  cases: [
    { situation: 'Tu ouvres le compte rendu', fr: fr(E(1580)), en: en(E(1580)) },
    { situation: 'Tu racontes un incident', fr: fr(E(1574)), en: en(E(1574)) },
    { situation: 'Tu en tires la conséquence', fr: fr(E(1575)), en: en(E(1575)) },
    { situation: 'Tu fais une recommandation', fr: fr(E(1578)), en: en(E(1578)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['titre', 'lien'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Ta responsable au téléphone',
  frSub: 'Six tours, à voix haute',
  setting: 'Mme Lefebvre, ta responsable, t’appelle au sujet du salon de Montréal. Elle veut les faits, puis un titre pour la lettre interne.',
  turns: [
    {
      ai: 'Alors, ce salon, comment ça s’est passé ?', en: 'So, how did the fair go?',
      user: 'Très bien : dès qu’on a monté le stand, les visiteurs sont venus.',
      userEn: 'Very well: as soon as we set up the stand, visitors came. (Out loud, the verb flows better.)',
      alts: [
        { fr: 'Très bien, il y a eu du monde dès l’installation du stand.', en: 'Very well, there were people as soon as the stand was set up. (A noun phrase: also right.)' },
        { fr: 'Beaucoup de monde, dès le premier jour.', en: 'A lot of people, from the very first day.' },
      ],
    },
    {
      ai: 'Et l’application, ils l’ont aimée ?', en: 'And the app, did they like it?',
      user: 'Oui, ils ont salué sa rapidité, mais ils trouvent nos prix trop élevés.',
      userEn: 'Yes, they praised its speed, but they find our prices too high. (Rapide becomes la rapidité.)',
      alts: [
        { fr: 'Oui, ils l’ont trouvée rapide et simple, mais trop chère.', en: 'Yes, they found it fast and simple, but too expensive. (Adjectives: also right when speaking.)' },
        { fr: 'Ils ont apprécié sa simplicité, moins nos tarifs.', en: 'They liked its simplicity, less so our prices.' },
      ],
    },
    {
      ai: 'On m’a parlé d’un problème mercredi.', en: 'I heard there was a problem on Wednesday.',
      user: 'Oui, la conférence de Karim a été annulée à la suite d’une panne de courant.',
      userEn: 'Yes, Karim’s talk was cancelled following a power cut. (À la suite de + noun: the cause.)',
      alts: [
        { fr: 'Oui, il y a eu une panne de courant, et l’organisateur a annulé la conférence de Karim.', en: 'Yes, there was a power cut, and the organiser cancelled Karim’s talk. (All verbs: fine on the phone.)' },
        { fr: 'Oui, en raison d’une panne, la conférence n’a pas eu lieu.', en: 'Yes, owing to a power cut, the talk did not take place.' },
      ],
    },
    {
      ai: 'Pour la lettre interne, quel titre proposez-vous ?', en: 'For the newsletter, what headline do you suggest?',
      user: 'Signature de deux contrats de distribution au salon de Montréal.',
      userEn: 'Two distribution contracts signed at the Montréal fair. (A headline: action noun, no article, no verb.)',
      alts: [
        { fr: 'Salon de Montréal : deux nouveaux distributeurs.', en: 'Montréal fair: two new distributors. (Also a nominal headline.)' },
        { fr: 'Deux contrats signés à Montréal.', en: 'Two contracts signed in Montréal. (The participle headline: also right.)' },
      ],
    },
    {
      ai: 'Et qu’est-ce que vous me conseillez pour Toronto ?', en: 'And what do you advise for Toronto?',
      user: 'En vue du salon de Toronto, je propose une révision de nos tarifs.',
      userEn: 'Ahead of the Toronto fair, I suggest a review of our prices. (En vue de + noun: the purpose.)',
      alts: [
        { fr: 'Avant Toronto, je propose de revoir nos tarifs.', en: 'Before Toronto, I suggest reviewing our prices. (A verb: also right.)' },
        { fr: 'Une baisse de nos prix, avant le salon de Toronto.', en: 'A price cut, before the Toronto fair.' },
      ],
    },
    {
      ai: 'Vous pouvez me dire ça plus simplement, pour la réunion de lundi ?', en: 'Can you put that more simply, for Monday’s meeting?',
      user: 'Oui : avant Toronto, il faudrait baisser nos prix.',
      userEn: 'Yes: before Toronto, we should lower our prices. (Unfolded for speech: a verb says it faster.)',
      alts: [
        { fr: 'Oui : on devrait baisser nos prix avant Toronto.', en: 'Yes: we should lower our prices before Toronto.' },
        { fr: 'Oui : nos prix sont trop hauts, il faut les baisser.', en: 'Yes: our prices are too high, we need to lower them.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nominaliser', 'deplier'],
};

const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Le compte rendu du salon',
  frSub: 'Mission écrite, format B2',
  brief: `Ta collègue Inès revient du salon professionnel de Montréal. Elle t'a laissé ce message vocal. Ta responsable te demande d'en faire un compte rendu écrit pour la lettre interne de l'entreprise. Voici le message : ${MESSAGE_INES}`,
  briefEn: "Your colleague Inès is back from the Montréal trade fair and left you this voicemail. Your manager asks you to turn it into a written report for the company newsletter. The message: « Hi, it's Inès. The Montréal fair was intense. We arrived on Tuesday, and as soon as we set up the stand, visitors came. We presented the new app: people found it fast and simple, but found our prices too high. On Wednesday the organiser cancelled Karim's talk because there was a power cut, so we lost quite a few contacts. On the other hand, we signed with two distributors, one in Québec City and one in Ottawa. On Thursday, before we left, the manager of a big store came by, and she wants us to call her back. I think we should lower our prices before the Toronto fair. Bye. »",
  produce: "Écris un compte rendu de 180 à 250 mots, avec un objet et des rubriques (déroulement, incident, résultats, recommandation). Plie au moins six faits en groupes nominaux là où ils condensent bien, dont une proposition avec une préposition (à la suite de, en raison de, avant, dès), un nom de qualité et un groupe qui dit qui fait quoi (de, par). Garde au moins un verbe par phrase, et aucun mot de l'oral.",
  responseSpec: { kind: 'text', minWords: 180, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : Un vrai compte rendu, avec un objet et des rubriques, qui reprend tous les faits du message (l'affluence, l'avis sur l'application et sur les prix, l'incident, les deux contrats, la visite de la directrice, la recommandation) sans en inventer. Entre 180 et 250 mots.",
          '2 : Le compte rendu existe, mais un ou deux faits manquent, ou il n’a ni objet ni rubriques, ou la longueur sort un peu des limites.',
          '1 : Une transcription du message, ou un texte beaucoup trop court.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          "3 : Le lecteur trouve chaque information à sa place : les rubriques suivent un ordre logique, les liens sont dits (à la suite de, en raison de, en revanche, par ailleurs), et un nom reprend parfois l'idée précédente (cette annulation).",
          '2 : Le texte se suit, mais une rubrique mélange deux sujets, ou un lien manque.',
          '1 : Les faits sont posés les uns après les autres, sans ordre ni lien.',
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          "2 : Tu plies au moins six faits en groupes nominaux variés : un nom d'action en -tion ou -ment, un nom court (le départ, la baisse), un nom de qualité (la rapidité), une proposition pliée avec la bonne préposition, un groupe avec de et par, et tu gardes des verbes précis à côté.",
          '1 : Les noms sont rares, toujours du même type, ou le texte reste presque entièrement verbal.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          "2 : Les noms existent et ont le bon genre, les accords qui en dépendent sont justes (l'arrivée est prévue), les prépositions conviennent au lien, et aucune phrase n'empile trois de à la suite.",
          "1 : Des noms inventés (la choisition, le partement), des genres faux (le fermeture), des liens mal branchés (malgré que, parce que la hausse) ou des chaînes gênent la lecture.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          "2 : Un écrit professionnel courant : clair, neutre, poli, sans aucun mot de l'oral (bon, du coup, pas mal, voilà) et sans lourdeur administrative.",
          "1 : Le texte garde des tics de l'oral, ou tombe dans le jargon (il est procédé à, faire l'objet de).",
        ],
      },
    ],
  },
  scaffold: [
    'Objet :',
    'Voici le bilan de',
    "Dès l'installation du stand,",
    'À la suite de',
    'En revanche,',
    'Point positif :',
    'En vue du salon de Toronto,',
    'Nous suggérons',
  ],
  modelAnswer: "Objet : compte rendu du salon de Montréal (4 au 6 mars)\n\nBonjour à toutes et à tous,\n\nVoici le bilan de notre participation au salon de Montréal. Il reprend les notes d'Inès Martin, présente sur le stand du mardi au jeudi.\n\nDéroulement. Dès l'installation du stand, mardi matin, l'affluence a été forte. La présentation de notre nouvelle application a suscité un vif intérêt : les visiteurs ont salué sa rapidité et sa simplicité. En revanche, plusieurs d'entre eux ont jugé nos prix trop élevés.\n\nIncident. Mercredi, à la suite d'une panne de courant, la conférence de Karim a été annulée par l'organisateur. Cette annulation nous a privés d'une partie des contacts prévus.\n\nRésultats. Point très positif : la signature de deux contrats de distribution, l'un à Québec, l'autre à Ottawa. Ces accords ouvrent deux nouveaux marchés à l'entreprise. Par ailleurs, avant notre départ, jeudi, la directrice d'un grand magasin est venue au stand. Elle souhaite être rappelée.\n\nRecommandations. Le bilan est donc globalement positif, malgré l'incident de mercredi. En vue du salon de Toronto, nous proposons une révision de nos tarifs, qui semblent freiner certains clients. Nous suggérons aussi de rappeler rapidement la directrice du magasin, dont l'intérêt paraissait réel.\n\nMerci à toute l'équipe pour son travail et sa bonne humeur.\n\nCamille Roy, pour l'équipe commerciale\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : un objet, quatre rubriques, tous les faits du message et aucun fait inventé ; environ 190 mots de corps.\n2. Cohérence : des rubriques dans l'ordre du temps puis du bilan ; les liens sont dits (à la suite de, en revanche, par ailleurs, donc) ; « cette annulation » reprend la phrase précédente.\n3. Étendue : des noms d'action (l'installation, la présentation, la signature, une révision), un nom court (notre départ), des noms de qualité (sa rapidité, sa simplicité), une proposition pliée (à la suite d'une panne), qui fait quoi (annulée par l'organisateur), et des verbes précis à côté (a suscité, ont jugé, ouvrent).\n4. Correction : des noms qui existent, au bon genre, et jamais trois de à la suite.\n5. Registre : un écrit professionnel courant ; les mots de l'oral d'Inès (bon, du coup, pas mal, voilà) ont disparu.",
  modelAnswerEn: "Subject: report on the Montréal fair (4 to 6 March). Hello everyone, here is a review of our time at the Montréal fair. It is based on the notes of Inès Martin, who was on the stand from Tuesday to Thursday. How it went. As soon as the stand was set up on Tuesday morning, there were crowds. The presentation of our new app aroused keen interest: visitors praised its speed and simplicity. On the other hand, several of them felt our prices were too high. Incident. On Wednesday, following a power cut, Karim's talk was cancelled by the organiser. This cancellation cost us some of the contacts we had planned. Results. A very positive point: two distribution contracts were signed, one in Québec City and one in Ottawa. These agreements open two new markets for the company. Also, before we left on Thursday, the manager of a big department store came to the stand. She would like a call back. Recommendations. Overall, then, a positive review, despite Wednesday's incident. Ahead of the Toronto fair, we propose a review of our prices, which seem to hold some customers back. We also suggest calling the store manager back quickly, as her interest seemed genuine. Thanks to the whole team for their work and good humour. Camille Roy, for the sales team. The marker's notes (not counted): 1. Task: a subject line, four headings, every fact of the message and none invented; about 190 words of body. 2. Coherence: headings in time order, then the review; links are stated; « cette annulation » picks up the previous sentence. 3. Range: action nouns, a short noun, nouns of quality, a folded clause, who does what, and precise verbs alongside. 4. Accuracy: real nouns, right genders, never three de in a row. 5. Register: everyday professional writing; Inès's spoken fillers are gone.",
  watchFor: [
    { pattern: 'A near-transcription of the voicemail: every fact still a verbal clause, with the spoken order and connectors (et puis, du coup).', criterion: 'etendue', feedback: 'Plie les faits principaux : dès l’installation du stand, à la suite d’une panne, la signature de deux contrats.', ref: 'a1-reperer' },
    { pattern: 'An invented action noun (l’augmentement, la livrance, le fermage for la fermeture).', criterion: 'correction', feedback: 'Chaque verbe a son suffixe : l’augmentation, la livraison, la fermeture. Au doute, vérifie.', ref: 'a2-erreurs' },
    { pattern: 'A wrong gender on an action noun, visible in the agreement (le fermeture, l’arrivée est prévu, la paiement).', criterion: 'correction', feedback: '-tion, -ure, -ée : féminin ; -ment, -age : masculin. Regarde l’accord qui suit.', ref: 'a3-piege' },
    { pattern: 'A suffix forced where a short noun exists (la choisition, le partement, l’achètement).', criterion: 'correction', feedback: 'Cherche le nom court : le choix, le départ, l’achat.', ref: 'a4-erreurs' },
    { pattern: 'An invented noun of quality or a wrong gender (la rapidesse, la précisité, le lenteur).', criterion: 'correction', feedback: 'Rapide, la rapidité ; précis, la précision ; la lenteur est féminine.', ref: 'a5-piege' },
    { pattern: 'A half-folded clause: parce que + noun, après que + noun, a lost possessive (avant départ), sa before a vowel.', criterion: 'correction', feedback: 'Devant un nom : en raison de, après, dès, et son devant une voyelle (son arrivée).', ref: 'a6-piege' },
    { pattern: 'A preposition that names the wrong link (grâce à for a problem, malgré que, faute du temps).', criterion: 'correction', feedback: 'À la suite de ou en raison de pour la cause, malgré + nom pour l’obstacle, faute de sans article.', ref: 'a7-erreurs' },
    { pattern: 'A noun phrase where the reader cannot tell who did what (l’annulation de l’organisateur de la conférence).', criterion: 'coherence', feedback: 'De pour ce qui subit, par pour celui qui agit : l’annulation de la conférence par l’organisateur.', ref: 'a8-piege' },
    { pattern: 'No subject line or headings, or headings written as full sentences.', criterion: 'tache', feedback: 'Un objet et des rubriques courtes en noms : Déroulement, Incident, Résultats.', ref: 'a9-focus' },
    { pattern: 'A chain of three or more nouns linked by de, or empty verbs (il est procédé à, faire l’objet de).', criterion: 'registre', feedback: 'Au troisième de, déplie un nom en verbe ; remplace le verbe vide par le verbe fort.', ref: 'a10-erreurs' },
    { pattern: 'Spoken fillers kept (bon, du coup, pas mal, voilà) or a chatty tone addressed to Inès rather than to the readers.', criterion: 'registre', feedback: 'Écris pour les lecteurs de la lettre interne : enlève les mots de l’oral.', ref: 'a11-plan' },
    { pattern: 'A fact left out or invented (the distributors’ cities, the store manager’s visit, the price recommendation), or a body outside 180 to 250 words.', criterion: 'tache', feedback: 'Reprends le message fait par fait et coche chacun dans ton texte.', ref: 'a11-usages' },
  ],
  graderNotes: [
    'Count the words of the body only; the subject line, greeting and signature do not count. 180 to 250 with 10% tolerance (162 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'Judge nominalisation by fit, not by count. A clear sentence that keeps a verb is never an error; a correct noun phrase that makes the sentence heavier gains nothing under « etendue ». The target is a readable report, not a maximum of nouns.',
    '« Suite à » is courant, not an error: accept it and do not penalise it; « à la suite de » is the soigné form.',
    'Accept either register-appropriate headline form: nominal (« Signature de deux contrats ») or participial (« Deux contrats signés »).',
    'Do not penalise a correct subjunctive after avant que (lesson 6 in B2) where the learner keeps the clause; the noun phrase avant notre départ is rewarded but not required.',
    'A chain of three or more de, or an empty verb (procéder à, effectuer, faire l’objet de), costs one point under « registre » once, not per occurrence.',
    'Writer gender is unknown: judge agreements for internal consistency. The report may be signed with any name.',
    'Accept Québec and Belgian usage (courriel, magasin à rayons, septante) and either « salon » or « foire ».',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 22 du B2 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nominaliser', 'titre', 'deplier'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis les deux versions à voix haute',
  frSub: 'Le verbe, puis le nom',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nominaliser', 'deplier'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-ecrit',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le suffixe', v: '-tion, -ment, -age, -ure, -ée', say: fr(E(1420)),
      detail: { title: 'Le suffixe', body: "Chaque verbe a son nom : l'annulation, le lancement, le nettoyage, la fermeture, l'arrivée. EN: each verb has its noun.", say: fr(E(1421)) } },
    { k: 'le genre', v: '-ment, -age : masculin', say: fr(E(1435)),
      detail: { title: 'Le genre', body: "-tion, -ure, -ée, -ance, -ité, -eur : féminin. Les intrus : la plage, le silence, le musée, le bonheur. EN: the suffix gives the gender.", say: fr(E(1436)) } },
    { k: 'le nom court', v: 'le refus, la vente, la mise', say: fr(E(1458)),
      detail: { title: 'Le nom court', body: "Le verbe sans sa fin, un nom en -e, ou le participe : cherche-le avant d'inventer. EN: look for the short noun first.", say: fr(E(1463)) } },
    { k: 'la qualité', v: '-ité, -eur, -esse, -ise, -ence', say: fr(E(1481)),
      detail: { title: 'La qualité', body: "Rapide, la rapidité ; lent, la lenteur ; franc, la franchise ; prudent, la prudence. EN: adjectives give nouns of quality.", say: fr(E(1484)) } },
    { k: 'le groupe', v: 'à son arrivée, par la compagnie', say: fr(E(1496)),
      detail: { title: 'Le groupe', body: "La conjonction devient préposition, le verbe un nom, le sujet un possessif ou de ; par pour celui qui agit. EN: preposition, noun, possessive, par.", say: fr(E(1532)) } },
    { k: 'la mesure', v: 'plier pour lire, déplier pour dire', say: fr(E(1565)),
      detail: { title: 'La mesure', body: "Un ou deux noms par phrase ; au troisième de, déplie ; à l'oral, le verbe. EN: fold for the page, unfold for the ear.", say: fr(E(1563)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suffixe', 'groupe', 'deplier'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu fabriques un nom à partir d'un verbe ou d'un adjectif, avec le bon suffixe et le bon genre, tu trouves le nom court quand il existe, tu plies une proposition en groupe nominal avec la préposition qui dit le lien, tu dis qui fait quoi avec de et par, et tu écris titres, ordres du jour et comptes rendus. Le piège qui reste, c'est l'excès : une phrase qui empile les noms finit par ne plus rien dire. Avant l'examen, reprends ton compte rendu et compte les de de chaque phrase. Au troisième, déplie un nom en verbe. EN: Count the de in each sentence of your report; at the third, unfold a noun into a verb.",
  stats: [
    { k: 'Le nom', v: 'le bon suffixe, le bon genre' },
    { k: 'Le groupe', v: 'une préposition, un nom, qui fait quoi' },
    { k: 'L’écrit court', v: 'titre, ordre du jour, compte rendu' },
    { k: 'La mesure', v: 'au troisième de, déplie' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 2 to 10, a round that
 *  recycles lessons 18, 31, 32 and 34 in B1 and 6, 7 and 22 in B2 (named in
 *  each question), and an exam-format round (TCF, DELF B2 and TEF items).
 *  `fold()` strips accents, commas, apostrophes and hyphens, so every typed
 *  answer turns on the noun, its suffix, a gender letter or the preposition. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const ANNONCE_TEF = "Mesdames et messieurs, en raison d'une panne technique, le départ du vol à destination de Casablanca est retardé d'une heure. L'embarquement débutera à quinze heures, porte douze. Merci de votre compréhension.";

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r2-suffixe', label: 'Du verbe au nom', targets: ['suffixe-invente'],
      questions: [
        mc('« On a annulé le concert » devient…', ["l'annulation du concert", "l'annulement du concert", "l'annulage du concert"], 0, 'Annuler, l’annulation. EN: -ation.', 'a2-construire'),
        mc('Lancer donne…', ['le lancement', 'la lançation'], 0, 'Lancer, le lancement. EN: -ment.', 'a2-rappel'),
        mc('Quel est le nom de nettoyer ?', ['le nettoyage', 'la nettoyation', 'la nettoyure'], 0, 'Une opération concrète : -age. EN: -age.', 'a2-table'),
        tI('Récris la phrase avec le nom d’action.', 'On livrera les meubles dans trois semaines. (La … des meubles prendra trois semaines.)', fr(E(1423)), 'Livrer, la livraison. EN: livraison.', 'a2-table', ['la livraison', 'livraison']),
        tI('Récris la phrase avec le nom d’action.', 'On répare le toit, et ça coûtera cher. (La … du toit coûtera cher.)', fr(E(1424)), 'Réparer, la réparation. EN: réparation.', 'a2-construire', ['la réparation', 'réparation']),
        eS("L'augmentement des salaires entrera en vigueur en janvier.", fr(E(1425)), 'Augmenter, l’augmentation. EN: -ation.', 'a2-erreurs'),
        eS('La lancée du site est prévue pour lundi.', fr(E(1421)), 'Le lancement, masculin : prévu. EN: le lancement.', 'a2-erreurs'),
        lC('Écoute. Quel nom d’action entends-tu ?', fr(E(1422)), ['le nettoyage', 'la netteté'], 0, 'Nettoyer, le nettoyage. EN: cleaning.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-genre', label: 'Le genre', targets: ['genre-faux'],
      questions: [
        mc('« … stationnement est interdit devant l’école. »', ['Le', 'La'], 0, '-ment : masculin. EN: masculine.', 'a3-cartes'),
        mc('« L’arrivée des invités est … à dix-neuf heures. »', ['prévue', 'prévu'], 0, '-ée : féminin. EN: feminine.', 'a3-cartes'),
        mc('Quel nom est féminin malgré -age ?', ['la plage', 'le passage', 'le nettoyage'], 0, 'La plage ne vient d’aucun verbe. EN: no verb behind it.', 'a3-piege'),
        mc('Quel nom est masculin malgré son suffixe ?', ['le silence', 'la présence', 'la patience'], 0, 'Le silence, l’exception en -ence. EN: an outsider.', 'a3-piege'),
        tI('Accorde le participe.', "L'ouverture du salon est (fixer) au trois juin.", fr(E(1446)), '-ure : féminin, fixée. EN: fixée.', 'a3-construire'),
        tI('Écris l’article.', '(Le / La) chargement des camions commence à six heures.', fr(E(1445)), '-ment : masculin. EN: le.', 'a3-construire'),
        eS('Le musée est fermée le mardi.', fr(E(1438)), 'Le musée est masculin : fermé. EN: masculine.', 'a3-exemples'),
        lC('Écoute. Ce nom est-il masculin ou féminin ?', fr(E(1443)), ['féminin', 'masculin'], 0, 'La croissance : -ance, féminin. EN: feminine.', 'a3-construire'),
      ],
    },
    {
      id: 'r4-court', label: 'Les noms courts', targets: ['nom-invente'],
      questions: [
        mc('Acheter donne…', ["l'achat", "l'achètement", "l'achetage"], 0, 'Le verbe sans sa fin. EN: the bare stem.', 'a4-cartes'),
        mc('Choisir donne…', ['le choix', 'la choisition'], 0, 'Un nom court. EN: le choix.', 'a4-erreurs'),
        mc('« On a mis le catalogue en ligne » devient…', ['la mise en ligne du catalogue', 'le mettage en ligne du catalogue'], 0, 'Mis, la mise. EN: from the participle.', 'a4-cartes'),
        tI('Récris avec le nom court.', 'Le train part avec vingt minutes de retard. (Le … du train est retardé de vingt minutes.)', fr(E(1460)), 'Partir, le départ. EN: départ.', 'a4-construire', ['le départ', 'départ']),
        tI('Récris avec le nom court.', 'On a vendu la maison en six mois. (La … de la maison a pris six mois.)', fr(E(1459)), 'Vendre, la vente. EN: vente.', 'a4-construire', ['la vente', 'vente']),
        eS('La perdition du dossier a causé beaucoup de retard.', fr(E(1465)), 'Perdre, la perte. EN: loss.', 'a4-erreurs'),
        eS('Après trois refusations, elle a enfin trouvé un stage.', fr(E(1468)), 'Refuser, le refus. EN: refus.', 'a4-hacks'),
        lC('Écoute. De quel verbe vient le nom de la phrase ?', fr(E(1458)), ['refuser', 'refaire'], 0, 'Le refus, de refuser. EN: refuser.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-qualite', label: 'De l’adjectif au nom', targets: ['qualite-inventee'],
      questions: [
        mc('Rapide donne…', ['la rapidité', 'la rapidesse', 'la rapideur'], 0, '-ité. EN: la rapidité.', 'a5-table'),
        mc('Précis donne…', ['la précision', 'la précisité'], 0, '-ion. EN: la précision.', 'a5-piege'),
        mc('« … bonheur des enfants passe avant tout. »', ['Le', 'La'], 0, 'L’exception masculine. EN: masculine.', 'a5-piege'),
        mc('Fort donne…', ['la force', 'la fortesse', 'la forteté'], 0, 'Un nom à part : la force. EN: strength.', 'a5-table'),
        tI('Récris avec le nom de qualité.', 'Le réseau est lent, et c’est un problème. (La … du réseau pose problème.)', fr(E(1493)), 'Lent, la lenteur. EN: lenteur.', 'a5-construire', ['la lenteur', 'lenteur']),
        tI('Récris avec le nom de qualité.', 'Ta présentation était claire, et la direction a été convaincue. (La … de ta présentation a convaincu la direction.)', fr(E(1490)), 'Clair, la clarté. EN: clarté.', 'a5-table', ['la clarté', 'clarté']),
        eS('Le valeur du terrain a doublé en dix ans.', fr(E(1489)), 'La valeur est féminine. EN: feminine.', 'a5-piege'),
        lC('Écoute. De quel adjectif vient le nom ?', fr(E(1486)), ['franc', 'frais'], 0, 'Franc, la franchise. EN: franc.', 'a5-histoire'),
      ],
    },
    {
      id: 'r6-groupe', label: 'Une proposition, un groupe', targets: ['groupe-bancal'],
      questions: [
        mc('« Quand il est arrivé » devient…', ['à son arrivée', 'quand son arrivée', 'à sa arrivée'], 0, 'À + son + nom. EN: à son arrivée.', 'a6-cartes'),
        mc('« Avant qu’elle parte » devient…', ['avant son départ', 'avant qu’elle départ'], 0, 'Avant + nom, sans que. EN: avant son départ.', 'a6-cartes'),
        mc('« Si le vol est annulé » devient…', ["en cas d'annulation du vol", "si l'annulation du vol"], 0, 'Si devient en cas de. EN: en cas de.', 'a6-construire'),
        tI('Plie la proposition : une préposition et un nom.', "Après qu'on a signé le contrat, les travaux ont commencé.", fr(E(1500)), 'Après la signature. EN: après + nom.', 'a6-cartes'),
        tI('Plie la proposition : une préposition et un nom.', "Pendant qu'on rénove la gare, les trains s'arrêtent à Renens.", fr(E(1506)), 'Pendant la rénovation. EN: pendant + nom.', 'a6-exemples'),
        eS('Parce que la hausse des prix, les ventes ont baissé.', fr(E(1502)), 'Devant un nom : en raison de. EN: a preposition.', 'a6-piege', ['À cause de la hausse des prix, les ventes ont baissé.']),
        eS('Dès sa arrivée, préviens-moi.', fr(E(1504)), 'Son devant une voyelle. EN: son arrivée.', 'a6-piege'),
        lC('Écoute. Qu’est-ce qui s’est passé en premier ?', fr(E(1500)), ['la signature du contrat', 'le début des travaux'], 0, 'Après la signature : elle vient d’abord. EN: the signing.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-lien', label: 'Le mot-lien', targets: ['lien-faux'],
      questions: [
        mc('« … candidats, le poste reste vacant. »', ['Faute de', 'Malgré', 'En vue de'], 0, 'Le manque. EN: for lack of.', 'a7-table'),
        mc('« … la réunion, la directrice a présenté le budget. »', ['Lors de', 'Faute de'], 0, 'Le moment. EN: at the meeting.', 'a7-table'),
        mc('« … la hausse des prix, les ventes ont progressé. »', ['Malgré', 'En raison de'], 0, 'L’obstacle n’a rien empêché. EN: despite.', 'a7-choisir'),
        mc('Quelle phrase est la plus soignée ?', ["À la suite d'une panne, le serveur a été redémarré.", 'Suite à une panne, le serveur a été redémarré.'], 0, 'À la suite de reste plus soigné. EN: more careful.', 'a7-table'),
        tI('Complète avec la préposition du but.', '(…) du déménagement, chacun doit trier ses dossiers.', fr(E(1516)), 'En vue de : le but. EN: en vue de.', 'a7-table', ['en vue du déménagement', 'en vue du']),
        tI('Complète avec la préposition du manque.', "(…) argent, ils ont renoncé au voyage.", fr(E(1527)), 'Faute de, sans article. EN: faute d’argent.', 'a7-choisir', ["faute d'argent"]),
        eS("Malgré qu'il pleuve, le match a eu lieu.", 'Malgré la pluie, le match a eu lieu.', 'Malgré + nom, ou bien que + subjonctif. EN: malgré takes a noun.', 'a7-erreurs', ["Bien qu'il pleuve, le match a eu lieu."]),
        lC('Écoute. Quel lien dit cette phrase ?', fr(E(1520)), ['une condition', 'une cause', 'un but'], 0, 'En cas de : une condition. EN: a condition.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-agent', label: 'Qui fait quoi', targets: ['agent-flou'],
      questions: [
        mc('« L’annulation du vol par la compagnie » : qui annule ?', ['la compagnie', 'le vol', 'les passagers'], 0, 'Par : celui qui agit. EN: the airline.', 'a8-cartes'),
        mc('« L’arrestation du policier » : le policier…', ['a été arrêté', "a arrêté quelqu'un"], 0, 'De : celui qui subit. EN: he was arrested.', 'a8-cartes'),
        mc('« La critique du ministre », sans contexte, est…', ['ambiguë', 'toujours claire'], 0, 'De peut désigner les deux. EN: ambiguous.', 'a8-histoire'),
        tI('Plie en gardant qui fait quoi.', "L'organisateur a annulé le concert, et le public a été déçu. (L'annulation du concert … a déçu le public.)", fr(E(1542)), 'Par l’organisateur. EN: par for the doer.', 'a8-construire', ["par l'organisateur"]),
        tI('Récris avec le nom d’action.', 'On a nommé le directeur ; ça a été annoncé hier. (La … du directeur a été annoncée hier.)', fr(E(1543)), 'Nommer, la nomination. EN: nomination.', 'a8-construire', ['la nomination', 'nomination']),
        eS("Le rachat de l'entreprise d'un groupe canadien est confirmé.", fr(E(1539)), 'Par un groupe canadien : l’acheteur. EN: par.', 'a8-piege'),
        eS("La construction du pont d'une entreprise locale a duré deux ans.", fr(E(1538)), 'Par une entreprise locale : le constructeur. EN: par.', 'a8-piege'),
        lC('Écoute. Qui a pris la décision ?', fr(E(1530)), ['le maire', 'les nageurs'], 0, 'La décision du maire. EN: the mayor.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-titre', label: 'Titres et comptes rendus', targets: ['titre-verbal'],
      questions: [
        mc('Quel titre de presse est bien formé ?', ['Hausse des loyers à Lyon', 'Les loyers augmentent-ils à Lyon', 'La hausse elle est à Lyon'], 0, 'Le nom d’action, sans article. EN: noun first.', 'a9-cartes'),
        mc('Un point d’ordre du jour s’écrit…', ["avec un nom d'action : adoption du budget", 'avec un verbe conjugué : on adopte le budget'], 0, 'Une liste de noms. EN: nouns.', 'a9-focus'),
        mc('« Report de la réunion au jeudi suivant » veut dire…', ['la réunion aura lieu plus tard', 'la réunion est annulée', 'la réunion aura lieu plus tôt'], 0, 'Reporter : remettre à plus tard. EN: postponed.', 'a9-cartes'),
        tI('Écris le titre.', 'On va modifier les horaires de la piscine à partir de lundi.', fr(E(1556)), 'Modifier, la modification. EN: noun first.', 'a9-construire'),
        tI('Écris le titre.', 'On plantera trois arbres sur la place Bellecour.', fr(E(1557)), 'Planter, la plantation. EN: noun first.', 'a9-exemples'),
        eS("Adoption de budget à l'unanimité", fr(E(1549)), 'Le titre enlève l’article du début, pas celui du complément : du budget. EN: du budget.', 'a9-cartes'),
        eS('Démission du présidente du club', fr(E(1551)), 'De la présidente : féminin. EN: de la.', 'a9-construire'),
        lC('Écoute. Est-ce un titre ou une phrase complète ?', fr(E(1552)), ['un titre', 'une phrase complète'], 0, 'Pas de verbe conjugué : un titre. EN: a headline.', 'a9-lecture'),
      ],
    },
    {
      id: 'r10-chaine', label: 'Trop de noms', targets: ['chaine-lourde'],
      questions: [
        mc('Laquelle passe le mieux à la radio ?', [fr(E(1563)), fr(E(1562))], 0, 'Des verbes, un sujet : l’oreille suit. EN: verbs for the ear.', 'a10-cartes'),
        mc('« Procéder à la vérification » se dit plus simplement…', ['vérifier', 'effectuer une vérification'], 0, 'Le verbe fort. EN: vérifier.', 'a10-cartes'),
        mc('Au troisième de à la suite, tu…', ['déplies un nom en verbe', 'ajoutes un quatrième nom'], 0, 'Déplie. EN: unfold.', 'a10-hacks'),
        mc("« Le projet fait l'objet d'une révision » veut dire…", ['on révise le projet', 'le projet révise quelque chose'], 0, 'Faire l’objet de : subir. EN: it is being reviewed.', 'a10-deplier'),
        tI('Déplie avec le verbe fort.', "Il est procédé à la vérification de l'installation par le technicien.", fr(E(1559)), 'Qui agit, avec le verbe fort. EN: the technician checks.', 'a10-erreurs'),
        tI('Déplie pour l’oral.', "L'amélioration de la qualité de l'accueil des usagers est notre priorité.", fr(E(1565)), 'Un sujet, un verbe. EN: we want to welcome users better.', 'a10-erreurs', ['Nous voulons accueillir mieux les usagers.']),
        tI('Déplie au futur.', "Il sera procédé à la vérification de l'installation. (Le technicien … l'installation.)", fr(E(1570)), 'Vérifier, au futur. EN: vérifiera.', 'a10-cartes', ['vérifiera']),
        lC('Écoute. Cette phrase est-elle faite pour l’oreille ?', fr(E(1571)), ['oui, elle garde des verbes', 'non, elle enchaîne des noms'], 0, 'Des verbes, et rien d’enchaîné. EN: yes.', 'a10-histoire'),
      ],
    },
    {
      id: 'r11-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(SUBORD_REF)} : « Je suis en retard … la tempête. »`, ['à cause de', 'parce que'], 0, `« ${B131_REFRAME} » EN: ${B131_REFRAME_EN}`, 'a6-cartes'),
        mc(`${Cap(CONCESSION_REF)} : « … il pleuve, le match a lieu. »`, ["Bien qu'", 'Malgré'], 0, `« ${B132_REFRAME} » Devant une proposition, bien que. EN: ${B132_REFRAME_EN}`, 'a7-table'),
        tI(`${Cap(PASSIF_REF)} : plie la phrase en groupe nominal.`, 'La salle a été réservée par le directeur.', 'la réservation de la salle par le directeur', `« ${B118_REFRAME} » De pour ce qui subit, par pour celui qui agit. EN: ${B118_REFRAME_EN}`, 'a8-cartes'),
        mc(`${Cap(MEDIAS_REF)} : « Démission du ministre des Transports » veut dire…`, [fr('fr.b1.journalisme.1042'), 'Le ministre des Transports va démissionner.'], 0, `« ${B134_REFRAME} » Le titre dit un fait accompli. EN: ${B134_REFRAME_EN}`, 'a9-cartes'),
        tI(`${Cap(SUBJ_IND_REF)} : plie la proposition pour éviter le subjonctif.`, fr('fr.b2.opinions-et-avis.1940'), 'Finissons avant le départ du gardien.', 'Avant + nom : plus de subjonctif. EN: avant + noun.', 'a6-cartes'),
        tI(`${Cap(FUT_ANT_REF)} : plie la proposition avec dès.`, fr('fr.b2.projets-et-futur.1808'), "Dès la signature, nous lancerons l'impression.", 'Dès que vous aurez signé devient dès la signature. EN: dès + noun.', 'a6-construire', ["Dès votre signature, nous lancerons l'impression."]),
        mc(`${Cap(STYLE_REF)} : une phrase qui empile quatre noms abstraits…`, ['se lit mal', 'se lit mieux'], 0, `« ${B222_REFRAME} » EN: ${B222_REFRAME_EN}`, 'a10-cartes'),
        lC(`Écoute. ${Cap(SUBORD_REF)} : quel lien dit cette phrase ?`, fr('fr.b1.connecteurs-logiques.1266'), ['une cause', 'un but', 'un obstacle'], 0, 'En raison de : la cause. EN: a cause.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r12-examen', label: 'Comme à l’examen', targets: ['compte-rendu-verbal'],
      questions: [
        mc('Format TCF. Choisissez la bonne réponse : « … de la neige, les cours sont suspendus. »', ['En raison', 'Malgré', 'Faute', 'En vue'], 0, 'La cause : en raison de. EN: owing to.', 'a7-table'),
        mc('Format TCF : « L’… du nouveau pont aura lieu en présence du maire. »', ['inauguration', 'inaugurement', 'inaugurage', 'inaugurée'], 0, 'Inaugurer, l’inauguration. EN: -ation.', 'a2-table'),
        mc('Format DELF B2, compréhension écrite. « À la suite de la hausse des loyers, de nombreux étudiants quittent le centre-ville. » Que dit la phrase ?', ['les loyers ont augmenté, puis les étudiants partent', 'les étudiants partent, puis les loyers augmentent', 'les loyers baissent grâce aux étudiants'], 0, 'À la suite de : la cause vient d’abord. EN: rents rose first.', 'a7-table'),
        mc('Format DELF B2, production écrite. Quelle phrase condense le mieux « Parce que le budget a été réduit, on a dû annuler le festival » ?', ['En raison de la réduction du budget, le festival a été annulé.', 'Parce que la réduction du budget, le festival a été annulé.', "La réduction de l'annulation du budget du festival a eu lieu."], 0, 'Une préposition, un nom, et un verbe clair. EN: a clear condensed sentence.', 'a6-cartes'),
        tI('Format DELF B2. Plie la proposition en groupe nominal.', 'Quand le ministre est arrivé, les manifestants se sont tus.', "À l'arrivée du ministre, les manifestants se sont tus.", 'Quand devient à + nom. EN: à l’arrivée de.', 'a6-construire', ["Dès l'arrivée du ministre, les manifestants se sont tus.", "Lors de l'arrivée du ministre, les manifestants se sont tus."]),
        tI('Format TCF. Écris le titre de presse.', "Le musée d'art de Lausanne rouvrira en mai.", "Réouverture du musée d'art de Lausanne en mai", 'Rouvrir, la réouverture. EN: noun first.', 'a9-construire', ["Réouverture en mai du musée d'art de Lausanne"]),
        eS("L'annulation du match de la fédération a surpris les joueurs.", "L'annulation du match par la fédération a surpris les joueurs.", 'Par dit qui annule. EN: par.', 'a8-piege'),
        lC('Format TEF, compréhension orale. Écoute cette annonce. Pourquoi le vol est-il retardé ?', ANNONCE_TEF, ['une panne technique', 'la météo', 'une grève'], 0, 'En raison d’une panne technique. EN: a technical fault.', 'a7-ecoute'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.07 does. */
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
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'annuler, lancer, nettoyer', back: "l'annulation, le lancement, le nettoyage", say: fr(E(1420)) },
    { front: '-ment et -age', back: 'masculin (sauf la plage, la page, l’image)', say: fr(E(1435)) },
    { front: 'acheter, vendre, partir', back: "l'achat, la vente, le départ", say: fr(E(1457)) },
    { front: 'rapide, lent, précis', back: 'la rapidité, la lenteur, la précision', say: fr(E(1481)) },
    { front: 'quand il est arrivé', back: 'à son arrivée', say: fr(E(1496)) },
    { front: 'parce que les prix ont augmenté', back: 'en raison de la hausse des prix', say: fr(E(1502)) },
    { front: 'despite, for lack of', back: 'malgré, faute de', say: fr(E(1517)) },
    { front: 'la compagnie annule le vol', back: "l'annulation du vol par la compagnie", say: fr(E(1532)) },
    { front: 'trois de à la suite', back: 'déplie un nom en verbe', say: fr(E(1565)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Plier pour la page, déplier pour l’oreille',
  body: `${REFRAME} Tu as repris ce que ${STYLE_REF} t'avait montré, quelques noms qui résument une idée, pour en faire un outil complet : fabriquer le nom, lui donner son genre, plier une proposition, choisir le lien, dire qui fait quoi, titrer, et savoir déplier. La suite, c'est ${EMPHATIQUE_REF} : les pronoms qui insistent, opposent et lèvent les doubles sens. EN: Next comes lesson 11 in B2: emphatic pronouns that stress, contrast and remove ambiguity.`,
  points: [
    'Chaque verbe a son nom : -tion, -ment, -age, -ure, -ée, ou un nom court.',
    'Le suffixe donne le genre ; les intrus s’apprennent un par un.',
    'Une proposition devient une préposition et un nom : à son arrivée, en raison de.',
    'Au troisième de, déplie ; à l’oral, le verbe.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nominaliser', 'groupe', 'deplier'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Ton compte rendu',
    opener: {
      line: "Un message vocal plein de verbes, et ta responsable attend un écrit : ici tu rédiges ton compte rendu, et tu passes l'examen. EN: A voicemail full of verbs, and your manager wants it in writing: here you write your report and sit the exam.",
      imageRef: 'lessons/nominalisation/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton compte rendu et passé l'examen : quatre-vingt-huit questions, onze manches. EN: You wrote your report and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r5-qualite', 'a11-quiz/r9-titre', 'a11-review'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-suffixe', title: 'Le bon suffixe', format: 'mcq' as const, coach: "Chaque verbe a son suffixe : -tion, -ment, -age, -ure ou -ée. Au doute, vérifie. EN: each verb has its own suffix.", q: 'Livrer donne…', opts: ['la livraison', 'le livrement'], correct: 0, why: 'Livrer, la livraison. EN: -aison.', items: [E(1412), E(1418), E(1420), E(1421), E(1422), 'fr.b1.affaires.1058'], audio: AUDIO },
  { id: 'd-genre', title: 'Masculin ou féminin', format: 'sort' as const, coach: "Deux piles : -ment et -age d'un côté, -tion, -ure, -ée, -ance de l'autre. Attention aux intrus. EN: sort by gender.", buckets: ['masculin', 'féminin'], items: [E(1435), E(1440), E(1442), E(1434), E(1441), E(1443)], audio: AUDIO },
  { id: 'd-court', title: 'Le nom court', format: 'flashcard' as const, coach: "Lis chaque paire et dis la phrase à voix haute : le verbe, puis son nom court. EN: read each pair aloud.", items: [E(1449), E(1450), E(1451), E(1452), E(1454), E(1456)], audio: AUDIO },
  { id: 'd-qualite', title: 'Le nom de qualité', format: 'mcq' as const, coach: "Rapide, la rapidité ; lent, la lenteur ; prudent, la prudence. EN: each adjective has its noun.", q: 'Rapide donne…', opts: ['la rapidesse', 'la rapidité'], correct: 1, why: '-ité. EN: la rapidité.', items: [E(1471), E(1472), E(1474), E(1476), E(1477), E(1478)], audio: AUDIO },
  { id: 'd-groupe', title: 'Proposition ou groupe', format: 'sort' as const, coach: "Deux piles : la phrase avec un verbe, ou le groupe plié avec une préposition et un nom. EN: clause or noun phrase.", buckets: ['la proposition', 'le groupe'], items: [E(1495), E(1497), E(1501), E(1496), E(1498), E(1502)], audio: AUDIO },
  { id: 'd-lien', title: 'Le bon lien', format: 'mcq' as const, coach: "La cause, le but, le moment, l'obstacle, le manque : chacun a sa préposition. EN: each link has its preposition.", q: '… une grève, aucun train ne circule.', opts: ["En raison d'", 'Malgré'], correct: 0, why: 'La cause. EN: owing to.', items: [E(1513), E(1514), E(1515), E(1516), E(1517), E(1518)], audio: AUDIO },
  { id: 'd-agent', title: 'De subit, par agit', format: 'mcq' as const, coach: "De pour ce qui subit l'action, par pour celui qui la fait. EN: de for the patient, par for the doer.", q: "L'annulation du vol … la compagnie", opts: ['de', 'par'], correct: 1, why: 'Par, pour celui qui annule. EN: par.', items: [E(1530), E(1532), E(1536), E(1537), E(1538), E(1539)], audio: AUDIO },
  { id: 'd-titre', title: 'Des titres', format: 'flashcard' as const, coach: "Lis chaque titre, puis dis la phrase complète qu'il résume. EN: read each headline, then say the full sentence.", items: [E(1544), E(1546), E(1548), E(1549), E(1550), E(1552)], audio: AUDIO },
  { id: 'd-deplier', title: 'Plié ou déplié', format: 'sort' as const, coach: "Deux piles : la phrase pliée pour un formulaire, ou dépliée pour une personne qui écoute. EN: folded or unfolded.", buckets: ['plié, pour l’écrit', 'déplié, pour l’oreille'], items: [E(1558), E(1562), E(1564), E(1559), E(1563), E(1565)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 et le B2 en renfort', format: 'flashcard' as const, coach: "Six phrases des leçons précédentes : dis pour chacune la version pliée ou dépliée. EN: give the folded or unfolded version.", items: ['fr.b1.connecteurs-logiques.1266', 'fr.b1.connecteurs-logiques.1459', 'fr.b1.faits-et-procedures.1000', 'fr.b1.journalisme.1041', 'fr.b2.projets-et-futur.1808', 'fr.b2.opinions-et-avis.1940'], audio: AUDIO },
  { id: 'd-compte-rendu', title: 'Le compte rendu, phrase par phrase', format: 'flashcard' as const, coach: "Lis les phrases du compte rendu dans l'ordre : l'ouverture, les faits, la conséquence, la recommandation. EN: read the report in order.", items: [E(1580), E(1572), E(1574), E(1575), E(1576), E(1578)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'suffixe-invente', description: 'Builds an action noun with a suffix the verb does not take (l’augmentement, le livrement, la lancée for le lancement).', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-suffixe', retest: 'd-suffixe' },
  { id: 'genre-faux', description: 'Gives an action noun the wrong gender, visible in the article or the agreement, or overgeneralises the rule to la plage, le silence, le musée.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-genre', retest: 'd-genre' },
  { id: 'nom-invente', description: 'Forces a suffix where a short or participle noun exists (la choisition, le partement, l’achètement, la perdition).', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-court', retest: 'd-court' },
  { id: 'qualite-inventee', description: 'Invents a noun of quality (la rapidesse, la précisité) or gets its gender wrong (le lenteur, la bonheur).', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-qualite', retest: 'd-qualite' },
  { id: 'groupe-bancal', description: 'Half-folds a clause: keeps parce que or après que before a noun, drops the preposition or the possessive, or writes sa before a vowel.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-groupe', retest: 'd-groupe' },
  { id: 'lien-faux', description: 'Picks a preposition that names the wrong relation, or builds one with a clause (malgré que, en raison que, faute du temps).', detectOn: ['a7-choisir', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-lien', retest: 'd-lien' },
  { id: 'agent-flou', description: 'Chains two de so the doer and the patient cannot be told apart, or leaves an ambiguous de where par or contre is needed.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-agent', retest: 'd-agent' },
  { id: 'titre-verbal', description: 'Writes headlines and agenda points as full sentences, or drops the wrong article in a headline.', detectOn: ['a9-construire', 'a9-focus', 'a9-check', 'a11-mission'], drill: 'd-titre', retest: 'd-titre' },
  { id: 'chaine-lourde', description: 'Stacks three or more nouns with de or uses empty verbs (procéder à, faire l’objet de), especially in text meant to be heard.', detectOn: ['a10-deplier', 'a10-erreurs', 'a10-check', 'a11-mission'], drill: 'd-deplier', retest: 'd-deplier' },
  { id: 'recyclage', description: 'Loses a contrast nominalisation rests on: parce que against à cause de, malgré against bien que, the passive and par, headlines, avant que and dès que against avant and dès.', detectOn: ['a6-cartes', 'a7-table', 'a8-cartes'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'compte-rendu-verbal', description: 'In an exam-format summary or report, transcribes the spoken account clause by clause instead of condensing it.', detectOn: ['a11-plan', 'a11-scenario', 'a11-mission'], drill: 'd-compte-rendu', retest: 'd-compte-rendu' },
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
  sheet('sheet-suffixes', 'Du verbe au nom', ['les suffixes', 'le genre', 'les intrus', 'les noms courts'], [
    teach('sheet-suffixes-teach', 'Le radical, puis le suffixe',
      `${REFRAME} Pour nommer une action, on part du radical du verbe et on ajoute un suffixe : -tion, -ment, -age, -ure, -ée, -ance. Chaque verbe a le sien, et le suffixe donne presque toujours le genre. Beaucoup de verbes ont aussi un nom court, sans suffixe. EN: ${REFRAME_EN} Stem plus suffix; the suffix almost always gives the gender.`),
    table('sheet-suffixes-table', 'Les suffixes et leur genre', ['Suffixe', 'Genre', 'Exemples'], [
      ['-tion, -sion, -ation', 'féminin', "l'annulation, la décision, la réparation"],
      ['-aison', 'féminin', 'la livraison, la comparaison'],
      ['-ment', 'masculin', 'le lancement, le paiement, le stationnement'],
      ['-age, sur un verbe', 'masculin', 'le nettoyage, le passage, le chargement'],
      ['-ure', 'féminin', "la fermeture, la signature, l'ouverture"],
      ['-ée', 'féminin', "l'arrivée, l'entrée, la durée"],
      ['-ance, -ence', 'féminin', 'la naissance, la croissance, la présence'],
    ]),
    table('sheet-suffixes-intrus', 'Les intrus', ['Nom', 'Genre', 'Pourquoi'], [
      ["la plage, la page, l'image, la cage", 'féminin', 'aucun verbe derrière le -age'],
      ['le silence', 'masculin', 'exception en -ence'],
      ['le musée, le lycée', 'masculin', 'exceptions en -ée'],
      ['le bonheur, le malheur', 'masculin', 'exceptions en -eur'],
    ]),
    table('sheet-suffixes-courts', 'Les noms courts', ['Verbes', 'Noms', 'Forme'], [
      ['acheter, refuser, appeler, envoyer', "l'achat, le refus, l'appel, l'envoi", 'le radical seul, masculin'],
      ['vendre, baisser, demander, perdre', 'la vente, la baisse, la demande, la perte', 'le radical et un e, féminin'],
      ['prendre, mettre, venir', 'la prise, la mise, la venue', 'le participe au féminin'],
      ['partir, choisir, commencer, finir', 'le départ, le choix, le début, la fin', 'une autre forme, à apprendre'],
    ]),
  ]),
  sheet('sheet-qualites', "De l'adjectif au nom", ['les suffixes', 'le genre', 'les cas à part'], [
    teach('sheet-qualites-teach', 'Les noms de qualité',
      "Un adjectif donne lui aussi un nom, qui nomme la qualité : rapide, la rapidité. Ces noms sont presque tous féminins. Trois cas à part : le bonheur, le malheur, et les adjectifs qui deviennent noms tels quels (le calme, le vide, le froid). EN: adjectives give nouns of quality, nearly all feminine."),
    table('sheet-qualites-table', 'Les suffixes', ['Suffixe', 'Adjectif', 'Nom'], [
      ['-ité', 'rapide, fiable, simple', 'la rapidité, la fiabilité, la simplicité'],
      ['-eur', 'lent, doux, large', 'la lenteur, la douceur, la largeur'],
      ['-esse', 'sage, jeune, gentil', 'la sagesse, la jeunesse, la gentillesse'],
      ['-ise', 'franc, gourmand, bête', 'la franchise, la gourmandise, la bêtise'],
      ['-ence, -ance', 'prudent, patient, élégant', "la prudence, la patience, l'élégance"],
      ['-té', 'clair, propre, fier', 'la clarté, la propreté, la fierté'],
      ['-ion, -tude', 'précis, exact, certain', "la précision, l'exactitude, la certitude"],
      ['sans suffixe', 'fort, calme, bruyant', 'la force, le calme, le bruit'],
    ]),
  ]),
  sheet('sheet-groupes', 'De la proposition au groupe', ['les conjonctions', 'le sujet', 'qui fait quoi'], [
    teach('sheet-groupes-teach', 'Trois changements à la fois',
      `Quand on plie une proposition, la conjonction devient une préposition, le verbe devient un nom, et le sujet devient un possessif ou un complément avec de. Avant + nom évite le subjonctif d'avant que (${SUBJ_IND_REF}). EN: conjunction to preposition, verb to noun, subject to possessive or de.`),
    table('sheet-groupes-table', 'Les conjonctions et leur préposition', ['Conjonction', 'Préposition', 'Exemple'], [
      ['quand, lorsque', 'à, lors de', 'quand il est arrivé > à son arrivée'],
      ['dès que', 'dès', "dès qu'elle arrivera > dès son arrivée"],
      ['avant que (+ subjonctif)', 'avant', "avant qu'il parte > avant son départ"],
      ['après que', 'après', "après qu'on a signé > après la signature"],
      ['pendant que', 'pendant', "pendant qu'on rénove la gare > pendant la rénovation de la gare"],
      ['depuis que', 'depuis', "depuis qu'il est parti > depuis son départ"],
      ['parce que', 'en raison de, à cause de', 'parce que les prix ont augmenté > en raison de la hausse des prix'],
      ['si', 'en cas de', "si le vol est annulé > en cas d'annulation du vol"],
    ]),
    table('sheet-groupes-agent', 'Qui fait quoi', ['Rôle', 'Marque', 'Exemple'], [
      ['celui qui agit, verbe sans complément', 'de, possessif', "l'arrivée du train, son arrivée"],
      ['ce qui subit', 'de, possessif', "l'arrestation du policier, sa nomination"],
      ['celui qui agit, à côté de ce qui subit', 'par', "l'annulation du vol par la compagnie"],
      ["la cible d'une critique", 'contre', 'les critiques contre le ministre'],
    ]),
  ]),
  sheet('sheet-liens', 'Les prépositions qui relient', ['la cause', 'le but', 'le moment', "l'obstacle", 'le manque', 'la condition'], [
    teach('sheet-liens-teach', 'La préposition porte le lien',
      `Dans une phrase, la conjonction dit le lien ; dans un groupe nominal, c'est la préposition. « ${B131_REFRAME} » EN: ${B131_REFRAME_EN}`),
    table('sheet-liens-table', 'Les prépositions', ['Préposition', 'Le lien', 'Exemple'], [
      ['en raison de', 'la cause, neutre, soignée', "En raison d'une grève, aucun train ne circulera demain."],
      ['à cause de, grâce à', 'la cause, négative ou positive', "J'ai réussi grâce à ton aide."],
      ['à la suite de (suite à, courant)', 'ce qui a entraîné la suite', "À la suite d'une panne, le serveur a été redémarré."],
      ['lors de', 'le moment', 'Lors de la réunion, la directrice a présenté le budget.'],
      ['dès', 'le point de départ', 'Dès réception du paiement, la commande sera expédiée.'],
      ['en vue de', 'le but', 'En vue du déménagement, chacun doit trier ses dossiers.'],
      ['malgré', "l'obstacle", 'Malgré la hausse des prix, les ventes ont progressé.'],
      ['faute de (sans article)', 'le manque', 'Faute de candidats, le poste reste vacant.'],
      ['en cas de', 'la condition', "En cas d'incendie, utilisez l'escalier de secours."],
    ]),
  ]),
  sheet('sheet-ecrit', 'Titres, comptes rendus, mesure', ['le titre', 'le compte rendu', 'quand déplier', 'la liste de contrôle'], [
    teach('sheet-ecrit-teach', 'Plier pour la page, déplier pour l’oreille',
      "Le titre, l'ordre du jour et la liste aiment les noms. Le compte rendu et le résumé mélangent : des noms pour condenser, un verbe dans chaque phrase pour avancer. À l'oral et dans une consigne, on déplie. EN: headlines and lists want nouns; reports mix; speech unfolds."),
    table('sheet-ecrit-titres', 'Le titre et le compte rendu', ['Écrit', 'Forme', 'Exemple'], [
      ['titre de presse', "nom d'action, sans article ni verbe", 'Hausse des loyers à Lyon'],
      ["point d'ordre du jour", "un nom par point", 'Adoption du budget à l’unanimité'],
      ['décision', 'souvent un verbe', "Après discussion, le règlement est adopté à l'unanimité."],
      ['résumé', 'un ou deux noms par phrase', 'La hausse du carburant a alourdi le coût des livraisons.'],
      ['objet de courriel', 'un groupe nominal', 'Report de la réunion de lundi'],
    ]),
    table('sheet-ecrit-deplier', 'Quand déplier', ['Signe', 'Plié', 'Déplié'], [
      ['trois de à la suite', "l'amélioration de la qualité de l'accueil des usagers", 'nous voulons mieux accueillir les usagers'],
      ['un verbe vide', "il est procédé à la vérification", "le technicien vérifie l'installation"],
      ["faire l'objet de", "le projet fait l'objet d'une révision", 'on revoit le projet'],
      ['un texte lu à voix haute', 'en cas de non-présentation du justificatif', 'si vous ne montrez pas le justificatif'],
    ]),
    table('sheet-ecrit-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Le nom existe', 'le bon suffixe, ou le nom court'],
      ['Le genre est juste', "regarde l'accord qui suit"],
      ['Le lien est dit', 'en raison de, à la suite de, malgré, faute de'],
      ['On sait qui fait quoi', 'de pour ce qui subit, par pour celui qui agit'],
      ['Chaque phrase a un verbe', 'sauf les titres et les listes'],
      ['Jamais trois de à la suite', 'sinon, déplie un nom'],
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
  ...ITEM_IDS.filter((id) => !OWN.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-10-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const EXERCISE = 'One voice, read as written WITH the bracketed words spoken as they stand: this is the exercise text, not the answer.';
const TRAP = "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions in promptSound are NEVER spoken.";
const REC_DESC: Record<string, string> = {
  'rec-b2-10-deux-versions': "Julien's voicemail and Claire's newsletter (act 1), two voices, one take. Julien (a Liège voice, male) speaks in a relaxed, slightly tired phone register, with the fillers (bon, voilà) natural; Claire's summary is read by a second, female voice in a clear written register. The narrator's frame is read by Claire's voice.",
  'rec-b2-10-suffixes': 'The four suffix cards (act 2). One coach voice. Each verb and its noun are read with a short pause between them, so the suffix lands on its own.',
  'rec-b2-10-suffixes-ecoute': `${ONE_TAKE} Ten lines, each with one action noun. No noun may be stressed more than the rest of its sentence.`,
  'rec-b2-10-correctrice': 'Sylvie and the intern (act 3), Montréal, two voices, one take. The intern reads his lines plainly; Sylvie answers calmly, as a colleague, never as a teacher.',
  'rec-b2-10-genre': 'The four gender cards (act 3). One voice. The agreement endings are silent in most lines; do not add a sound to help.',
  'rec-b2-10-piege-genre': TRAP,
  'rec-b2-10-texte-a3': `The neighbourhood notice (act 3). ${EXERCISE}`,
  'rec-b2-10-moussa': 'Moussa and Aïssatou (act 4), Dakar, two voices, one take, an easy office rhythm. Moussa reads his headings as headings, without a sentence melody.',
  'rec-b2-10-courts': 'The four short-noun cards (act 4). One voice. Each verb, then its noun, with a short pause.',
  'rec-b2-10-courts-ecoute': `${ONE_TAKE} Nine lines, each with one short noun. Read them evenly; the questions ask about facts, not nouns.`,
  'rec-b2-10-texte-a4': `The quarterly note (act 4). ${EXERCISE}`,
  'rec-b2-10-nadia': 'The guest review and Nadia (act 5), Geneva, two voices, one take. The narrator line lists the adjectives flatly; Nadia replies warmly and professionally.',
  'rec-b2-10-piege-qualite': TRAP,
  'rec-b2-10-texte-a5': `The hotel's reply (act 5). ${EXERCISE}`,
  'rec-b2-10-clinique': 'Chloé and the head of reception (act 6), Lausanne, two voices, one take, calm and practical.',
  'rec-b2-10-groupes': 'The four clause-to-group cards (act 6). One voice, level. Read each noun phrase at the pace of the clause it replaces.',
  'rec-b2-10-groupes-ecoute': `${ONE_TAKE} Nine lines: pairs of a clause and its noun phrase. Identical rhythm for each pair, so only the form changes.`,
  'rec-b2-10-piege-groupes': TRAP,
  'rec-b2-10-texte-a6': "The train company's voicemail (act 6), one voice, read as a recorded customer-service message, as written.",
  'rec-b2-10-annonces': `${ONE_TAKE} Ten short announcements, one voice, the tone of a station or office announcement. The prepositions (en raison de, malgré, faute de) are not stressed.`,
  'rec-b2-10-texte-a7': `The airport notice (act 7). ${EXERCISE}`,
  'rec-b2-10-kouadio': 'Kouadio and Mme Yao (act 8), Abidjan, two voices, one take, a busy newsroom. Mme Yao is brisk and friendly.',
  'rec-b2-10-agent': 'The four who-does-what cards (act 8). One voice. De and par are read without emphasis.',
  'rec-b2-10-piege-agent': TRAP,
  'rec-b2-10-agent-ecoute': `${ONE_TAKE} Nine lines; the questions ask who did what, so no line may stress par or de.`,
  'rec-b2-10-texte-a8': "The Sherbrooke news items (act 8), one voice, read as a radio news round-up, as written.",
  'rec-b2-10-compte-rendu': 'The Croix-Rousse minutes (act 9), one voice, one take, read as a secretary reads minutes at the next meeting: steady, neutral, headings slightly marked.',
  'rec-b2-10-titres': 'The four headline cards (act 9). One voice. Headlines are read as headlines: no sentence melody, a light fall at the end.',
  'rec-b2-10-texte-a9': "The Sherbrooke dispatch (act 9), one voice, read as a news-agency dispatch, neutral.",
  'rec-b2-10-radio': 'Julie and her editor (act 10), Nantes, two voices, one take. Julie reads the folded sentences as she would on air, and stumbles slightly on the chain; the editor is patient.',
  'rec-b2-10-chaine': 'The four unfolding cards (act 10). One voice. The chained sentence is read without pauses between the de, so its weight is audible.',
  'rec-b2-10-texte-a10': "The prefecture's press release (act 10), one voice, read in a flat administrative register exactly as written: the heaviness is the exercise.",
  'rec-b2-10-modele': "The Lire à Dakar newsletter (act 11), one female voice with a light Dakar accent, one take, warm and clear, as a volunteer reading it at the association's meeting.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 10',
  intro: 'Lesson 22 in B2 showed you a few nouns that sum up an idea, like la hausse. Here you learn the whole machinery: building a noun from a verb with the right suffix and gender, finding the short nouns (le refus, la vente, la mise), turning adjectives into nouns of quality, folding a clause into a noun phrase with the preposition that carries the link (à son arrivée, en raison de, malgré), saying who does what with de and par, and writing headlines, agendas and minutes. Then you learn the limit: when a chain of nouns becomes unreadable, and how to unfold it for a listener. The task: a 180 to 250 word written report of a colleague’s spoken account, graded on the B2 writing criteria.',
  skill: 'PE',
  grammarAssumed: [PASSIF_UNIT, SUBORD_UNIT, CONCESSION_UNIT, MEDIAS_UNIT, STYLE_UNIT],
  grammarIntroduced: [
    'Action nouns built from verbs with -tion, -sion, -ation, -aison, -ment, -age, -ure, -ée and -ance, each verb taking its own suffix',
    'The gender each suffix gives (-ment and verbal -age masculine; -tion, -ure, -ée, -ance, -ence feminine) and the exceptions la plage, la page, l’image, le silence, le musée',
    'Zero-suffix and irregular action nouns (l’achat, le refus, la vente, la baisse, le départ, le choix) and participle nouns (la prise, la mise, la venue)',
    'Nouns of quality from adjectives with -ité, -eur, -esse, -ise, -ence and -ance, one-offs (la précision, la force, le calme) and le bonheur, le malheur',
    'Clause to noun phrase: quand, dès que, avant que, après que, pendant que, depuis que, parce que and si become a preposition plus a noun, with the subject as a possessive or a de-complement',
    'Relation prepositions in a noun phrase: en raison de, à la suite de, lors de, en vue de, malgré, faute de, dès and en cas de, with suite à named as courant',
    'Doer and patient inside a noun phrase: de and the possessive, par beside a de-patient, contre, and the ambiguous de',
    'Nominal style in headlines, agenda points, minutes and summaries, with decisions keeping a verb',
    'The limit of nominalisation: chains of de, empty verbs (procéder à, effectuer, faire l’objet de) and unfolding nominal French for speech',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Dans la leçon 22 du B2, tu as vu quelques noms qui résument une idée. Ici, tu apprends à les fabriquer : le bon suffixe, le bon genre, le nom court quand il existe, les noms de qualité. Puis tu plies une proposition entière en groupe nominal, avec la préposition qui dit le lien et une façon claire de dire qui fait quoi, et tu écris titres et comptes rendus. Tu apprends aussi à t'arrêter, et à déplier pour l'oreille. À la fin, tu écris en 180 à 250 mots le compte rendu d'un message oral.",
    minutes: 150,
    difficulty: 4,
    glyph: '-tion',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: NOMINALISATION_TERMS,
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
