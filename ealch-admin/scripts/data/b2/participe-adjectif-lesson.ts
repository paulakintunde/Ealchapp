// b2.13.l1 « Participe présent ou adjectif verbal »: the lesson.
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
//   drill where the ROLE of the -ant form picks its spelling and agreement),
//   trap (trapDrill stepped or commonErrors), then from act 3 on the form
//   INSIDE A TEXT of 60 to 120 words (rewrite, complete, choose or correct),
//   then the gated act check.
//
//    1  Parlant, sans s               6   meet the two jobs of one -ant form:
//                                          « deux assistantes parlant anglais »
//                                          against « une équipe souriante »
//    2  Qui + verbe                   8   the participle without en (the form
//                                          of lesson 12 in B2), for qui +
//                                          verbe (lesson 11 in B1); invariable;
//                                          keeps object, adverb, negation
//    3  L'avis et la dépêche          7   register: notices, forms, adverts,
//                                          the press; qui + verbe in speech
//                                          (lessons 18 and 25 in B1)
//    4  En tête : la cause            8   « Ne sachant que faire, il… » = comme
//                                          (lesson 31 in B1); the main subject
//    5  Ayant fini, étant arrivée     7   the participe composé, its auxiliary
//                                          and agreement; après avoir
//    6  Une qualité qui s'accorde     8   the verbal adjective: agreement,
//                                          très, être, place; same verb, two
//                                          roles (souriante / souriant à)
//    7  Les trois tests               8   très ? qui + verbe ? complement,
//                                          adverb after, negation ?
//    8  -quant ou -cant               8   fatiguant / fatigant, convainquant /
//                                          convaincant, provoquant / provocant,
//                                          suffoquant / suffocant,
//                                          communiquant / communicant
//    9  -ant ou -ent, et les noms     8   précédant / précédent, différant,
//                                          négligeant, excellant, influant,
//                                          équivalant, adhérant; un adhérent,
//                                          un fabricant, un président
//   10  Le bon nom                    8   « en sortant » (the subject, lesson
//                                          12 in B2) against « sortant du
//                                          métro » (the noun it touches); the
//                                          dangling participle, its repairs;
//                                          the absolute participle
//   11  Ta critique, ton annonce      11  model, plan, role play, TASK, quiz
//
//   TOTAL 87 missions, 11 acts. Corpus: 166 authored rows (.1600-.1786) in
//   eleven blocks plus 15 reused rows (12 from the seed, 3 from lesson 12 in
//   B2), released act by act through `deckTranche` (the two seed rows with no
//   flashcard drill are named, never released). Quiz: 12 rounds of 8
//   (one per act 1 to 10, a recycling round citing lessons 11, 18, 25, 31,
//   35 in B1 and 10, 12 in B2, an exam-format round). Chapter artwork:
//   `participe-adjectif-image-prompts.md`, eleven prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (a later lesson may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le participe présent reste un verbe et ne s'accorde pas ; l'adjectif
//     verbal dit une qualité et s'accorde. »
//   EN: The present participle stays a verb and does not agree; the verbal
//   adjective names a quality and agrees.
//
//   ONE METAPHOR, LE VERBE OU LA QUALITÉ: one -ant form, two jobs. Still a
//   verb (object, adverb after it, negation, qui + verbe, a cause, an earlier
//   action): invariable, spelled like the verb. Only a quality (très, être):
//   it agrees, and a dozen of them change their spelling. The nouns are
//   qualities that became people (un adhérent); the subject rule follows
//   from « a verb needs a doer ». Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the present participle without en (for qui + verbe, at the head
//           of a sentence for a cause, the perfect form with ayant / étant,
//           the absolute participle), its written register, the verbal
//           adjective and its agreement, the tests that separate them, the
//           spelling pairs and the nouns among them, and the attachment
//           rule that sets the participle against the gérondif.
//   QUOTES  the reframes of lessons 11, 18, 25 and 31 in B1 and 10 and 12
//           in B2, re-exported from their corpus files; rows of lessons 11,
//           22, 35 in B1 and 22, 23, 24 in B2 reused BY ID, and three rows
//           of lesson 12 in B2 (draft) reused by id from its corpus.
//   LEAVES  the gérondif itself to lesson 12 in B2 (only contrasted here, in
//           acts 2, 4 and 10); the past participle's own agreement rules are
//           assumed (passé composé), and only the étant + participle case is
//           taught; « étant donné que » is named once as a fixed locution.
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
//   changes, no `why` names a position), as b2.12 does. No agreed
//   participle, swapped spelling or dangling participle is ever a corpus
//   row (corpus §A.7).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. TWELVE quiz rounds (96 questions): ten act rounds, one recycling round
//      and one exam-format round, as lessons 1, 7 and 12 in B2.
//   2. THREE ROWS OF LESSON 12 IN B2 (gérondif, still a draft) are reused by
//      id for the gérondif contrast (acts 4 and 10, the recycling round).
//      This lesson must therefore import with lesson 12 in B2 or after it.
//   3. REGISTER. The lesson teaches the participle as the written form
//      (notices, adverts, press) and qui + verbe as the spoken one, and says
//      a participle in speech is correct but sounds written. Keep that line?
//   4. THE TESTS are taught as three questions (très ? qui + verbe ? object,
//      adverb after, negation ?). Borderline cases (« des lumières
//      clignotant toute la nuit ») are kept out of every closed item and the
//      grader accepts either reading.
//   5. THE TASK offers two genres (a review of a book, film or exhibition, or
//      a formal job advert), 180 to 250 words, FIVE criteria (tâche 3,
//      cohérence 3, étendue 2, correction 2, registre 2 = 12), as lessons 1,
//      7 and 12 in B2. The reading is a review and the model answer a job
//      advert, so both are shown. Annotation block inside `modelAnswer`.
//   6. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' is inert; kept.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, G, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  GERONDIF_ROWS,
  LECTURE_ANNONCE, LECTURE_CRITIQUE, LECTURE_MODELE,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10,
  B111_REFRAME, B111_REFRAME_EN, B118_REFRAME, B118_REFRAME_EN, B125_REFRAME, B125_REFRAME_EN,
  B131_REFRAME, B131_REFRAME_EN, B210_REFRAME, B210_REFRAME_EN, B212_REFRAME, B212_REFRAME_EN,
  QUI_QUE_UNIT, PASSIF_UNIT, REGISTRES_UNIT, SUBORD_UNIT, GERONDIF_UNIT,
  QUI_QUE_REF, PASSIF_REF, REGISTRES_REF, SUBORD_REF, EMOTIONS_REF, NOMINAL_REF, GERONDIF_REF,
  ARGU_REF, LECTURE_REF, refFr,
} from './participe-adjectif-corpus.ts';

/** The next lesson on the trail (written in parallel, published together). */
const NEXT_REF = refFr('b2.14');
import { PARTICIPE_ADJECTIF_TERMS } from './participe-adjectif-terms.ts';

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
/** Lesson 12 in B2 is still a draft: its rows resolve from its corpus. */
const G_ROW = new Map<string, SrcItem>(GERONDIF_ROWS.map((r) => [r.id, r as SrcItem]));
const OWN = new Set(ALL_ROWS.map((r) => r.id));

/** An item's fr/en, from this corpus, the seed or lesson 12 in B2. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id) ?? G_ROW.get(id);
  if (!r) throw new Error(`b2.13: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.13: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.13: no respell on ${id}`);
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
 *  ACT 1: PARLANT, SANS S
 *
 *  Meet the two jobs of one -ant form in a job advert. The scene's wrong
 *  option is the most common written error: the participle agreed like an
 *  adjective (« parlantes anglais »). Unlike the pairs of act 8, the
 *  feminine is audible here ([paʁlɑ̃t]). NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const PARLANTES = {
  fr: 'Nous recherchons deux assistantes parlantes anglais et espagnol.',
  ipa: '/nu ʁə.ʃɛʁ.ʃɔ̃ dø.za.sis.tɑ̃t paʁ.lɑ̃t ɑ̃.ɡlɛ e ɛs.pa.ɲɔl/',
  respell: '[noo ruh-shehr-SHOHⁿ | deu-za-sees-TAHⁿT | par-LAHⁿT ahⁿ-GLEH ay es-pa-NYOL]',
  en: 'We are looking for two assistants speaking English and Spanish.',
};

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'L’annonce de l’école',
  frSub: 'Parlant ou parlantes',
  setting: { place: 'Une agence de recrutement, près du Vieux-Port', city: 'Montréal', time: 'mardi, 14 h', ambience: 'des bureaux vitrés, un écran partagé, une annonce à finir avant 15 h' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, une agence de recrutement. Tu rédiges une offre d'emploi pour un client, une école de langues. Nadia, ta responsable, relit chaque annonce avant qu'elle parte en ligne.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nadia',
      fr: "L'annonce part à quinze heures. Le client veut deux assistantes bilingues, anglais et espagnol.",
      en: 'The advert goes out at three. The client wants two bilingual assistants, English and Spanish.',
      respell: '[la-NOHⁿS par a kehⁿ-ZUHR | luh klee-YAHⁿ vuh deu-za-sees-TAHⁿT bee-LEHⁿG | ahⁿ-GLEH ay es-pa-NYOL]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Parfait, j'ai déjà la première phrase de l'annonce.",
      en: 'Great, I already have the first sentence of the advert.',
      respell: '[par-FEH | zhay day-ZHA la pruh-MYEHR FRAZ | duh la-NOHⁿS]',
      stage: 'Il te reste à choisir une orthographe, à deux lettres près.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Sur l'écran, deux versions de la même phrase. Pour une école qui vend des cours de langue, la moindre faute dans l'annonce se remarque.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Quelle phrase peut partir telle quelle sur le site du client.',
      size: 'lg',
      options: [
        { fr: PARLANTES.fr, respell: PARLANTES.respell, en: PARLANTES.en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1600)), respell: rsOf(E(1600)), en: en(E(1600)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Nadia valide sans rien changer. L'annonce est en ligne à quinze heures, et le client ne relit même pas.",
        breaks: "Nadia entoure parlantes en rouge. Le client, lui, l'aurait vu tout de suite : c'est son métier.",
      },
    },
    {
      kind: 'break',
      heading: 'Parlant a un complément : il reste un verbe',
      body: "Anglais et espagnol sont les compléments de parlant : parler anglais, c'est une action. C'est donc un participe présent, un verbe, qui ne s'accorde pas. EN: parlant has an object, so it is a verb and does not agree.",
      wrong: { fr: PARLANTES.fr, ipa: PARLANTES.ipa, respell: PARLANTES.respell, en: PARLANTES.en },
      right: { fr: fr(E(1600)), ipa: ipaOf(E(1600)), respell: rsOf(E(1600)), en: en(E(1600)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Le client ajoute une ligne : une équipe souriante et accueillante. Là, les e sont justes. Cette leçon t'apprend à voir, derrière la même forme en -ant, un verbe qui ne bouge pas ou une qualité qui s'accorde.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['participe', 'adjectif'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Écrire le participe présent sans en', s: 'Actes 2 à 5 : qui + verbe, l’écrit, la cause, ayant fini' },
    { t: 'Juger avec l’adjectif verbal accordé', s: 'Actes 6 et 7 : une qualité, et trois tests pour trancher' },
    { t: 'Écrire les paires sans faute', s: 'Actes 8 à 10 : fatigant, précédent, les noms, le bon nom' },
    { t: 'Rédiger une critique ou une annonce', s: 'Acte 11 : 180 à 250 mots, format B2' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Une offre d’emploi à Montréal',
  frSub: 'Lis, et regarde les formes en -ant',
  text: LECTURE_ANNONCE,
  glossary: [
    { word: 'programmation', en: 'programme of events', note: 'L’ensemble des spectacles, expositions et ateliers prévus.' },
    { word: 'fins de semaine', en: 'weekends', note: 'Au Québec : les week-ends.' },
    { word: 'poser leur candidature', en: 'to apply', note: 'Postuler, dans une langue plus soignée.' },
  ],
  questions: [
    { q: 'Global : à quoi sert ce texte, et à qui s’adresse-t-il ?', a: "C'est une offre d'emploi : la Maison de la culture cherche un chargé ou une chargée de projets culturels. Elle s'adresse aux candidats possibles." },
    { q: 'Détail : quelles langues donnent un avantage ?', a: "L'anglais ou l'espagnol : « les candidates et les candidats parlant anglais ou espagnol seront avantagés »." },
    { q: '« des bénévoles connaissant bien le quartier » : comment le dirais-tu avec qui ?', a: "Des bénévoles qui connaissent bien le quartier. Connaissant est un participe présent : il remplace qui + verbe." },
    { q: 'Forme : pourquoi « une équipe souriante », avec un e, mais « les candidates parlant anglais », sans rien ?', a: "Souriante est un adjectif : il décrit l'équipe et s'accorde. Parlant a un complément, anglais : c'est un participe, qui ne s'accorde jamais." },
    { q: 'Inférence : que signifie la dernière phrase pour un candidat ?', a: "Que l'organisme ne répondra pas à tout le monde : sans réponse le 30 juin, c'est un refus." },
    { q: 'Position : l’annonce cache-t-elle les inconvénients du poste ?', a: "Non : elle dit que le poste est exigeant, avec des soirées et des fins de semaine, mais elle le présente aussi comme passionnant. Elle cherche des gens qui savent à quoi s'attendre." },
  ],
  audio: REC('rec-b2-13-annonce'),
  say: REFRAME,
  terms: ['participe', 'adjectif'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Un verbe ou une qualité',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Un verbe : il ne bouge pas', [
      it(E(1600), 'parlant, après assistantes'),
      it(E(1603), 'ayant, après candidats'),
      it(E(1606), 'souhaitant, après personnes'),
      it(E(1613), 'venant, après stagiaires'),
    ], chk('Dans ces quatre phrases, la forme en -ant…',
      ['ne s’accorde jamais', 's’accorde avec le nom', 'prend un s au pluriel seulement'], 0,
      'C’est un participe : un verbe, avec son complément, sans accord. EN: a participle never agrees.')),
    grp('Une qualité : elle s’accorde', [
      it(E(1605), 'souriante, accueillante'),
      it(E(1610), 'fatigants, après horaires'),
      it(E(1612), 'convaincante, après annonce'),
      it('fr.b1.description-personnes-objets.1078', 'fatigant, après c’est'),
    ], chk('« Une équipe souriante » : pourquoi le e ?',
      ['souriante dit une qualité de l’équipe : c’est un adjectif', 'souriante a un complément'], 0,
      'Un adjectif s’accorde avec son nom, comme jeune ou grande. EN: an adjective agrees.')),
    ctl('Les deux', '« Nous proposons un poste exigeant de la rigueur. » Exigeant est ici…',
      ['un participe : il a un complément', 'un adjectif : il dit une qualité', 'un nom'], 0,
      'Exiger de la rigueur : exigeant garde un complément, comme un verbe. EN: it has an object, so it is a participle.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe', 'adjectif'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où l’accord se voit',
  cases: [
    { situation: 'Tu rédiges une offre d’emploi', fr: fr(E(1606)), en: en(E(1606)) },
    { situation: 'Tu décris une équipe', fr: fr(E(1605)), en: en(E(1605)) },
    { situation: 'Tu lis l’avis d’une association', fr: fr('fr.b2.entraide.003'), en: en('fr.b2.entraide.003') },
    { situation: 'Tu expliques pourquoi tu n’as pas postulé', fr: fr(E(1611)), en: en(E(1611)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe', 'accord'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le participe', 'Une forme en -ant qui a un complément d’objet…',
    ['ne s’accorde jamais', 's’accorde comme un adjectif'], 0,
    'C’est un participe, un verbe : parlant anglais. EN: a participle never agrees.'),
  ctl('L’adjectif', '« Les horaires sont parfois … »',
    ['fatigants', 'fatigant'], 0,
    'Une qualité des horaires : un adjectif, accordé. EN: fatigants.'),
  ctl('Le son', '« parlant » et « parlantes » se prononcent-ils pareil ?',
    ['non : on entend le t de parlantes', 'oui, exactement pareil'], 0,
    'Au féminin, le t se prononce : [paʁlɑ̃t]. EN: the feminine t is audible.'),
], ['participe', 'accord']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Parlant, sans s',
    opener: {
      line: "Deux assistantes parlant anglais, une équipe souriante : ici tu découvres les deux rôles d'une même forme en -ant. EN: Two assistants who speak English, a smiling team: here you meet the two jobs of one -ant form.",
      imageRef: 'lessons/participe-adjectif/act01.jpg',
    },
    sections: [],
    milestone: "Tu distingues dans une annonce la forme en -ant qui reste un verbe de celle qui dit une qualité et s'accorde. EN: You can tell the -ant verb from the -ant quality in a job advert.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: QUI + VERBE
 *
 *  The form is lesson 12 in B2's, without en (never re-taught). The meaning:
 *  qui + verbe (lesson 11 in B1). Invariable; keeps object, adverb, negation.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Sans en, à la place de qui',
  frSub: 'Ce que tu sais déjà, et ce qui change',
  hint: 'Quatre cartes. La forme, tu l’as déjà.',
  audio: REC('rec-b2-13-rappel'),
  say: REFRAME,
  terms: ['participe', 'gerondif'],
  cards: [
    {
      head: 'La forme, tu l’as déjà', label: Cap(GERONDIF_REF),
      fr: 'en parlant > parlant',
      sub: '[ahⁿ par-LAHⁿ] · [par-LAHⁿ]',
      body: `« ${B212_REFRAME} » Le participe présent, c'est la même forme en -ant, sans en. EN: ${B212_REFRAME_EN}`,
    },
    {
      head: 'Qui + verbe', label: Cap(QUI_QUE_REF),
      fr: fr(E(1616)), sub: rsOf(E(1616)),
      body: `« ${B111_REFRAME} » Ayant réussi remplace qui ont réussi : pas de sujet devant, comme après qui. EN: ${B111_REFRAME_EN}`,
    },
    {
      head: 'Il garde sa suite', label: 'un verbe',
      fr: fr(E(1625)), sub: rsOf(E(1625)),
      body: "Donnant sur la cour, comme donne sur la cour : le participe garde tout ce qu'un verbe a derrière lui, complément, adverbe, négation. EN: it keeps its object, adverb and negation.",
    },
    {
      head: 'Jamais d’accord', label: 'invariable',
      fr: fr(E(1622)), sub: rsOf(E(1622)),
      body: "Clientes est féminin pluriel, et pourtant attendant ne bouge pas : le participe reste un verbe. Ni e, ni s, jamais. EN: never an e or an s.",
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-participe',
  title: 'Six relatives, six participes',
  cols: ['Avec qui', 'Avec le participe', 'Verbe'],
  rows: [
    { cells: ['qui ont réussi', 'ayant réussi', 'avoir'], say: fr(E(1616)),
      detail: { title: 'avoir : ayant', body: `Ayant, l'une des trois formes à part de ${GERONDIF_REF}. Il sert aussi au participe composé. EN: ayant, as in the gérondif.`, say: fr(E(1629)) } },
    { cells: ['qui sait', 'sachant', 'savoir'], say: fr(E(1618)),
      detail: { title: 'savoir : sachant', body: "Sachant, jamais savant : savant est un nom ou un adjectif. EN: sachant, not savant.", say: fr(E(1619)) } },
    { cells: ['qui vit', 'vivant', 'vivre'], say: fr(E(1620)),
      detail: { title: 'vivre : vivant', body: "Nous vivons, donc vivant. Le même mot est aussi un adjectif : une ville vivante (acte 6). EN: also an adjective.", say: fr(E(1693)) } },
    { cells: ['qui possèdent', 'possédant', 'posséder'], say: fr(E(1621)),
      detail: { title: 'posséder : possédant', body: "L'accent suit le nous : nous possédons, possédant. EN: from nous possédons.", say: fr(E(1645)) } },
    { cells: ['qui annonce', 'annonçant', 'annoncer'], say: fr(E(1623)),
      detail: { title: 'annoncer : annonçant', body: "Le ç du nous reste devant -ant, comme au gérondif. EN: keep the ç.", say: fr(E(1623)) } },
    { cells: ['qui contient', 'contenant', 'contenir'], say: fr(E(1633)),
      detail: { title: 'contenir : contenant', body: "Nous contenons, contenant. Attention : un contenant est aussi un nom, une boîte. EN: also a noun, a container.", say: fr(E(1633)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe'],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'De qui au participe',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Qui + verbe devient -ant', [
      it(E(1617), 'qui ont réussi'),
      it(E(1616), 'ayant réussi'),
      it(E(1626), 'qui donne'),
      it(E(1625), 'donnant'),
    ], chk('« Je cherche une personne qui sait conduire. » Avec un participe :',
      ['une personne sachant conduire', 'une personne savant conduire', 'une personne en sachant conduire'], 0,
      'Savoir donne sachant, et pas de en devant un participe qui décrit un nom. EN: sachant, no en.')),
    grp('Sans accord', [
      it(E(1622), 'clientes, attendant'),
      it(E(1632), 'participantes, n’ayant pas reçu'),
      it(E(1630), 'une dame, portant'),
      it(E(1620), 'une fille, vivant'),
    ], chk('« Les participantes n’… pas reçu de badge… »',
      ['ayantes', 'ayant'], 1,
      'Le participe ne s’accorde jamais. EN: ayant.')),
    ctl('La suite du verbe', '« Des bénévoles connaissant bien le quartier » : bien le quartier, c’est…',
      ['ce que le verbe garde derrière lui : un adverbe et un complément', 'une qualité des bénévoles'], 0,
      'Connaître bien le quartier : le participe garde sa suite de verbe. EN: it keeps what a verb takes.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe', 'accord'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui fait quoi, sans qui',
  frSub: 'Neuf phrases d’avis et d’annonces',
  lines: [
    ln(E(1616)), ln(E(1618)), ln(E(1620)), ln(E(1621)), ln(E(1623)),
    ln(E(1624)), ln(E(1631)), ln(E(1633)), ln('fr.b2.universite.1070'),
  ],
  questions: [
    { q: 'Première phrase : qui recevra un diplôme ?', opts: ['ceux qui ont réussi l’examen', 'tous les étudiants'], correct: 0, why: 'Ayant réussi : seulement ceux qui ont réussi. EN: only those who passed.' },
    { q: 'Troisième phrase : où vit la fille ?', opts: ['à Dakar', 'à Douala'], correct: 0, why: 'Vivant à Dakar : qui vit à Dakar. EN: in Dakar.' },
    { q: 'Quatrième phrase : qui peut embarquer ?', opts: ['les voyageurs avec un billet électronique', 'tous les voyageurs'], correct: 0, why: 'Possédant un billet électronique : seulement ceux-là. EN: those with an e-ticket.' },
    { q: 'Cinquième phrase : qu’annonce la lettre ?', opts: ['la fermeture de l’agence', 'l’ouverture d’une agence'], correct: 0, why: 'Annonçant la fermeture. EN: the closure.' },
    { q: 'Dernière phrase : on y entend qui travaillent. Avec un participe, on écrirait…', opts: ['travaillant', 'travaillants'], correct: 0, why: 'Les étudiants travaillant beaucoup : sans accord. EN: travaillant.' },
  ],
  audio: REC('rec-b2-13-qui-ecoute'),
  say: REFRAME,
  terms: ['participe'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de participe',
  errors: [
    {
      wrong: "Les étudiants ayants réussi l'examen recevront leur diplôme en juin.",
      right: fr(E(1616)),
      why: "Normal : étudiants est au pluriel, et en français tout ce qui décrit un nom semble devoir suivre. Mais ayant est un verbe : jamais de s. EN: the participle never takes an s.",
    },
    {
      wrong: 'Une dame portante un grand chapeau est entrée.',
      right: fr(E(1630)),
      why: "Normal : dame est féminin, alors on ajoute un e, comme à grande. Mais portant a un complément, un grand chapeau : c'est un verbe. EN: an object means a verb, so no agreement.",
    },
    {
      wrong: 'Je cherche une personne en sachant conduire.',
      right: fr(E(1618)),
      why: `Normal : ${GERONDIF_REF} mettait en devant -ant. Mais ici, sachant décrit la personne ; le gérondif dirait ce que moi, je fais en cherchant. EN: no en when it describes a noun.`,
    },
    {
      wrong: 'Les voyageurs qui possédant un billet électronique peuvent embarquer.',
      right: fr(E(1621)),
      why: "Normal : on mélange les deux tournures, qui et le participe. Choisis : qui possèdent, ou possédant, jamais les deux. EN: qui + a conjugated verb, or -ant alone.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe', 'accord', 'gerondif'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Le participe, sans e ni s',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe'],
};

const A2_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a2-flash',
  layer: 'core',
  title: 'Huit participes à avoir en bouche',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'who have passed', back: 'ayant réussi', say: fr(E(1616)) },
    { front: 'who can drive', back: 'sachant conduire', say: fr(E(1618)) },
    { front: 'who lives', back: 'vivant', say: fr(E(1620)) },
    { front: 'holding a ticket', back: 'possédant un billet', say: fr(E(1621)) },
    { front: 'announcing', back: 'annonçant', say: fr(E(1623)) },
    { front: 'overlooking', back: 'donnant sur', say: fr(E(1625)) },
    { front: 'who have not received', back: 'n’ayant pas reçu', say: fr(E(1632)) },
    { front: 'containing', back: 'contenant', say: fr(E(1633)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La forme', 'Le participe présent, c’est…',
    ['la forme en -ant du gérondif, sans en', 'l’infinitif suivi de -ant'], 0,
    'La même forme qu’en parlant, sans en : parlant. EN: the gérondif form without en.'),
  ctl('Qui + verbe', '« Les personnes qui veulent » devient…',
    ['les personnes voulant', 'les personnes voulantes'], 0,
    'Voulant, sans accord. EN: voulant.'),
  ctl('L’accord', '« Des clientes … depuis une heure »',
    ['attendant', 'attendantes', 'attendants'], 0,
    'Un participe avec un complément de temps : invariable. EN: attendant.'),
], ['participe']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Qui + verbe',
    opener: {
      line: "Les étudiants ayant réussi l'examen : ici le participe prend la place de qui + verbe, sans jamais s'accorder. EN: Students who have passed the exam: here the participle takes the place of qui + verb, and never agrees.",
      imageRef: 'lessons/participe-adjectif/act02.jpg',
    },
    sections: [],
    milestone: "Tu remplaces qui + verbe par un participe présent, avec son complément et sa négation, sans l'accorder. EN: You can replace qui + verb with a present participle and never make it agree.",
    estScreens: 38, restPoints: ['a2-table', 'a2-ecoute'],
  },
  sections: [A2_RAPPEL, A2_TABLE, A2_CONSTRUIRE, A2_ECOUTE, A2_ERREURS, A2_DICTEE, A2_FLASH, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: L'AVIS ET LA DÉPÊCHE
 *
 *  Register: the participle lives in notices, forms, adverts and the press
 *  (lesson 18 in B1's split, quoted); speech says qui + verbe or ceux qui
 *  (lesson 25 in B1). A participle in speech is correct but sounds written.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'Au micro de la gare',
  frSub: 'L’affiche et la voix',
  setting: 'Gare de Lausanne. Zoé, stagiaire, doit lire au micro l’avis affiché sur le quai. Marc, qui fait les annonces depuis vingt ans, l’écoute répéter.',
  bubbles: [
    { from: 'narrator', fr: 'Zoé lit l’avis mot pour mot, comme il est écrit.', en: 'Zoé reads the notice word for word, as it is written.' },
    { from: 'user', fr: fr(E(1636)), en: en(E(1636)) },
    { from: 'coach', fr: 'C’est la phrase de l’affiche. Au micro, ça sonne comme un règlement qu’on récite.', en: 'That is the sentence on the notice. Over the speakers, it sounds like a rule being recited.', warn: 'L’écrit' },
    { from: 'user', fr: fr(E(1637)), en: en(E(1637)) },
    { from: 'coach', fr: 'Voilà. À l’oral, ceux qui veulent. Le participe reste sur l’affiche.', en: 'There you go. Out loud, ceux qui veulent. The participle stays on the notice.', warn: 'L’oral' },
    { from: 'user', fr: 'Et pour les bagages : tout objet ne portant pas d’étiquette sera détruit.', en: 'And for luggage: any item without a label will be destroyed.' },
    { from: 'coach', fr: 'Au micro, dis plutôt : les bagages sans étiquette seront détruits.', en: 'Over the speakers, say instead: unlabelled luggage will be destroyed.', warn: 'Plus simple' },
    { from: 'user', fr: 'Compris. J’écris comme l’affiche, et je parle comme les voyageurs.', en: 'Got it. I write like the notice, and I speak like the passengers.' },
  ],
  closing: { fr: 'Le participe est sur l’affiche ; dans ta bouche, c’est qui + verbe.', en: 'The participle is on the notice; in your mouth, it is qui + verb.' },
  audio: REC('rec-b2-13-zoe'),
  say: REFRAME,
  terms: ['registre', 'participe'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-participe',
  title: 'Où vit le participe',
  frSub: 'L’affiche, le formulaire, la dépêche, la voix',
  hint: 'Quatre cartes. La dernière parle comme toi.',
  audio: REC('rec-b2-13-registre'),
  say: REFRAME,
  terms: ['registre'],
  cards: [
    {
      head: 'Sur l’affiche', label: Cap(PASSIF_REF),
      fr: fr(E(1638)), sub: rsOf(E(1638)),
      body: `« ${B118_REFRAME} » Le participe présent vit au même endroit : avis, règlements, consignes. EN: ${B118_REFRAME_EN}`,
    },
    {
      head: 'Dans le formulaire', label: 'l’administration',
      fr: fr(E(1648)), sub: rsOf(E(1648)),
      body: "Attestant, désirant, possédant : les formulaires aiment le participe, court et impersonnel. Le guichetier, lui, te dira : un papier qui prouve ton adresse. EN: forms love the participle.",
    },
    {
      head: 'Dans la dépêche', label: 'la presse',
      fr: fr(E(1641)), sub: rsOf(E(1641)),
      body: "Réunissant, citant, souffrant : la presse serre l'information dans le participe. Une relative prendrait plus de place. EN: the press packs information into the participle.",
    },
    {
      head: 'À l’oral', label: Cap(REGISTRES_REF),
      fr: fr(E(1643)), sub: rsOf(E(1643)),
      body: `« ${B125_REFRAME} » À l'oral courant, qui + verbe est la forme naturelle ; le participe n'est pas faux, il sonne écrit. L'oral soutenu (une annonce en gare, un journal télévisé) le garde. EN: ${B125_REFRAME_EN}`,
    },
  ],
};

const A3_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-trier',
  layer: 'core',
  size: 'lg',
  title: 'L’écrit ou l’oral',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('L’écrit : le participe', [
      it(E(1636), 'un avis de gare'),
      it(E(1640), 'un formulaire'),
      it(E(1646), 'la presse'),
      it(E(1649), 'une consigne'),
    ], chk('Ces phrases viennent surtout…',
      ['d’avis, de formulaires, de journaux', 'de conversations entre amis'], 0,
      'Le participe est la forme de l’écrit public. EN: public writing.')),
    grp('L’oral : qui + verbe', [
      it(E(1637), 'au micro, ceux qui veulent'),
      it(E(1643), 'les gens qui arrivent'),
      it(E(1617), 'les étudiants qui ont réussi'),
      it(E(1626), 'un appartement qui donne'),
    ], chk('Tu expliques la règle à un ami. Tu dis…',
      ['les gens qui arrivent en retard ne pourront pas entrer', 'tout dossier arrivant en retard sera refusé'], 0,
      'Entre amis, qui + verbe : la phrase sonne parlée. EN: qui + verb in speech.')),
    ctl('Le choix', 'Tu rédiges le règlement d’une résidence. Tu écris…',
      ['Les résidents possédant un vélo doivent le ranger au sous-sol.', 'Les gens qui ont un vélo, ils doivent le ranger au sous-sol.'], 0,
      'Un règlement : le participe, sans reprise du sujet par ils. EN: a written rule.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'participe'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq écrits, cinq participes',
  frSub: 'La dépêche, l’avis, le règlement, le formulaire',
  examples: [
    ex(E(1639), 'la presse : roulant trop vite, entre deux virgules'),
    ex(E(1642), 'l’avis : tout dossier arrivant après la date'),
    ex(E(1645), 'le règlement d’un immeuble'),
    ex(E(1647), 'le fait divers : souffrant d’une fracture'),
    ex(E(1648), 'le formulaire : veuillez joindre un document attestant…'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

const A3_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a3-hacks',
  layer: 'core',
  sheetId: 'sheet-participe',
  title: 'Trois astuces de registre',
  hacks: [
    { hack: 'Pour savoir si un texte est écrit ou parlé, cherche le participe présent.', why: "Trois participes dans un paragraphe : c'est un avis, un article ou une annonce. EN: several participles signal writing." },
    { hack: 'À l’oral, remplace le participe par qui + verbe, ou par ceux qui.', why: "Ceux qui veulent descendre sonne naturel ; les voyageurs souhaitant descendre sonne comme une annonce enregistrée. EN: in speech, use qui." },
    { hack: 'À l’écrit, un participe par phrase suffit souvent.', why: "Deux ou trois participes à la suite alourdissent la phrase autant qu'une chaîne de noms. EN: one per sentence is usually enough." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Réécrire : l’avis de la gardienne', TEXTE_A3, [
  { q: 'Première phrase : les gens qui ont une voiture dans le garage…', a: "Les résidents ayant une voiture dans le garage doivent la sortir avant jeudi. Pour la raison, l'avis dira plutôt : en raison de travaux de peinture, un nom à la place de parce qu'on repeint." },
  { q: 'Deuxième phrase : ceux qui veulent une place provisoire…', a: "Les résidents souhaitant (ou désirant) une place provisoire peuvent s'adresser à la loge." },
  { q: 'Troisième phrase : les personnes qui n’ont pas encore leur badge…', a: "Les personnes n'ayant pas encore leur nouveau badge doivent passer à la loge : ne avant ayant, pas après." },
  { q: 'La dernière phrase, et le ton de l’avis ?', a: "Les vélos restant dans le couloir après vendredi seront enlevés. On remplace Bonjour à tous et Merci à tous par un Merci de votre compréhension : c'est un avis, pas une conversation." },
], 'rec-b2-13-texte-a3', ['registre', 'participe']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le registre', 'Le participe présent est surtout…',
    ['une forme de l’écrit', 'une forme de l’oral familier'], 0,
    'Avis, formulaires, annonces, presse. EN: a written form.'),
  ctl('À l’oral', '« Les voyageurs souhaitant descendre », au micro, se dit plutôt…',
    ['ceux qui veulent descendre', 'les voyageurs souhaitants descendre'], 0,
    'À l’oral, qui + verbe. EN: ceux qui veulent.'),
  ctl('Faux ou raide', 'À l’oral, un participe présent est…',
    ['correct, mais il sonne écrit', 'une faute'], 0,
    'Aucun registre n’est faux : il sonne seulement soutenu. EN: correct, just written-sounding.'),
], ['registre']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'L’avis et la dépêche',
    opener: {
      line: "Les voyageurs souhaitant descendre à Lausanne : ici tu apprends où vit le participe, et ce que ta bouche dit à sa place. EN: Passengers wishing to get off at Lausanne: here you learn where the participle lives, and what your mouth says instead.",
      imageRef: 'lessons/participe-adjectif/act03.jpg',
    },
    sections: [],
    milestone: "Tu écris un avis ou une dépêche avec des participes, et tu les rends en qui + verbe quand tu parles. EN: You can write a notice with participles and say it with qui + verb.",
    estScreens: 34, restPoints: ['a3-trier', 'a3-hacks'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_TRIER, A3_EXEMPLES, A3_HACKS, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: EN TÊTE : LA CAUSE
 *
 *  « Ne sachant que faire, il a appelé sa sœur » = comme il ne savait pas
 *  (lesson 31 in B1). At the head, the participle takes the main subject,
 *  like the gérondif of lesson 12 in B2.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Le blog de Léa',
  frSub: 'Une année à Genève',
  setting: 'Genève. Léa écrit un billet sur sa première année en Suisse ; son ami Hugo, journaliste, relit par-dessus son épaule.',
  bubbles: [
    { from: 'user', fr: 'Ne connaissant personne en arrivant, je me suis inscrite à un club de randonnée.', en: 'Not knowing anyone when I arrived, I joined a hiking club.' },
    { from: 'coach', fr: 'Ne connaissant personne : c’est la raison. Tu aurais pu écrire comme je ne connaissais personne.', en: 'Ne connaissant personne: that is the reason. You could have written comme je ne connaissais personne.', warn: 'La cause' },
    { from: 'user', fr: 'Ne parlant pas allemand, j’ai choisi Genève plutôt que Zurich.', en: 'Not speaking German, I chose Geneva rather than Zurich.' },
    { from: 'coach', fr: 'Parce que je ne parle pas allemand. Et c’est bien toi qui ne le parles pas : le sujet de la phrase.', en: 'Because I do not speak German. And it really is you who does not speak it: the subject of the sentence.', warn: 'Le même sujet' },
    { from: 'user', fr: 'Voyant les prix des loyers, j’ai vite cherché une colocation.', en: 'Seeing the rents, I quickly looked for a flatshare.' },
    { from: 'coach', fr: 'Quand j’ai vu les prix, et parce que je les ai vus : le moment et la cause à la fois.', en: 'When I saw the prices, and because I saw them: the moment and the cause at once.', warn: 'Le moment aussi' },
    { from: 'user', fr: 'Et ne sachant que faire le dimanche, je me suis mise à la voile.', en: 'And not knowing what to do on Sundays, I took up sailing.' },
    { from: 'coach', fr: 'Ne sachant que faire, sans pas : la tournure soignée de savoir.', en: 'Ne sachant que faire, without pas: the careful turn of phrase with savoir.', warn: 'Ne… que faire' },
  ],
  closing: { fr: 'En tête, le participe dit pourquoi, et il prend le sujet de la phrase.', en: 'At the head of the sentence, the participle says why, and it takes the sentence’s subject.' },
  audio: REC('rec-b2-13-lea'),
  say: REFRAME,
  terms: ['cause', 'sujet'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-participe',
  title: 'En tête, la raison',
  frSub: 'Le participe contre comme et parce que',
  hint: 'Quatre cartes. La dernière revient au gérondif.',
  audio: REC('rec-b2-13-cause'),
  say: REFRAME,
  terms: ['cause', 'sujet'],
  cards: [
    {
      head: 'Parce que, comme', label: Cap(SUBORD_REF),
      fr: fr(E(1652)), sub: rsOf(E(1652)),
      body: `« ${B131_REFRAME} » Le participe en tête fait le travail de comme, sans conjonction. EN: ${B131_REFRAME_EN}`,
    },
    {
      head: 'Étant, pour un état', label: 'être',
      fr: fr(E(1654)), sub: rsOf(E(1654)),
      body: "Étant malade : comme je suis malade. Étant ne s'accorde jamais ; l'adjectif qui le suit, si : étant fatiguée. EN: étant plus an adjective gives a reason.",
    },
    {
      head: 'Le même sujet', label: 'comme le gérondif',
      fr: fr(E(1659)), sub: rsOf(E(1659)),
      body: `Connaissant la ville : c'est Karim, le sujet du verbe principal. En tête de phrase, le participe prend ce sujet, comme le gérondif de ${GERONDIF_REF}. EN: at the head, the main subject.`,
    },
    {
      head: 'Avec ou sans en', label: 'la nuance',
      fr: fr(E(1664)), sub: rsOf(E(1664)),
      body: "Sachant cela : la raison, sans en. Le gérondif dit plus souvent comment, quand, ou à quelle condition : en sachant cela, j'aurais agi autrement. Une tendance, pas une règle : les deux peuvent dire la cause ou le moment. EN: without en, most often a cause; with en, rather how, when or on what condition.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'De comme au participe',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Comme devient -ant', [
      it(E(1653), 'comme il ne savait pas'),
      it(E(1652), 'ne sachant que faire'),
      it(E(1658), 'parce qu’ils craignaient'),
      it(E(1657), 'craignant la pluie'),
    ], chk('« Comme elle habite loin du centre, elle prend sa voiture. » Avec un participe :',
      ['Habitant loin du centre, elle prend sa voiture.', 'Habitante loin du centre, elle prend sa voiture.', 'En habitant loin du centre, elle prendrait sa voiture.'], 0,
      'Habitant, sans accord, et le même sujet : elle. EN: habitant, same subject.')),
    grp('Avec ne… pas', [
      it(E(1656), 'ne voulant pas'),
      it(E(1663), 'ne connaissant personne'),
      it(E(1667), 'ne trouvant pas'),
      it(E(1611), 'ne parlant pas'),
    ], chk('Où va ne ?',
      ['devant le participe : ne voulant pas', 'après pas : voulant pas ne'], 0,
      'Comme avec un verbe conjugué : ne avant, pas après. EN: ne before, pas after.')),
    ctl('Le sujet', '« Manquant d’expérience, la jeune avocate a préféré se taire. » Qui manque d’expérience ?',
      ['l’avocate', 'on ne sait pas', 'quelqu’un d’autre'], 0,
      'Le sujet du verbe principal : l’avocate. EN: the main subject.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cause', 'sujet'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Pourquoi, sans parce que',
  frSub: 'Neuf phrases, une raison chacune',
  lines: [
    ln(E(1654)), ln(E(1655)), ln(E(1657)), ln(E(1659)), ln(E(1660)),
    ln(E(1662)), ln(E(1665)), ln(E(1666)), ln('fr.b1.connecteurs-logiques.1240'),
  ],
  questions: [
    { q: 'Première phrase : pourquoi la personne ne viendra-t-elle pas ?', opts: ['elle est malade', 'elle travaille'], correct: 0, why: 'Étant malade : comme je suis malade. EN: she is ill.' },
    { q: 'Deuxième phrase : pourquoi prend-elle sa voiture ?', opts: ['elle habite loin du centre', 'elle aime conduire'], correct: 0, why: 'Habitant loin du centre. EN: she lives far out.' },
    { q: 'Troisième phrase : qu’ont fait les organisateurs ?', opts: ['ils ont déplacé le concert', 'ils l’ont annulé'], correct: 0, why: 'Ils l’ont déplacé, par peur de la pluie. EN: moved it.' },
    { q: 'Cinquième phrase : qu’est-ce qui a poussé la personne à prendre un taxi ?', opts: ['l’heure', 'la pluie'], correct: 0, why: 'Voyant l’heure : il était tard. EN: the time.' },
    { q: 'Dernière phrase : étant donné que est-il un participe comme les autres ?', opts: ['non, c’est une locution figée qui introduit une cause', 'oui'], correct: 0, why: 'Étant donné que se comporte comme puisque : on ne le transforme pas. EN: a fixed phrase.' },
  ],
  audio: REC('rec-b2-13-cause-ecoute'),
  say: REFRAME,
  terms: ['cause'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'La cause en tête, sans faux pas',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'En tête, la cause ; et le même sujet',
    body: "Le participe en tête de phrase dit le plus souvent la cause, comme comme ou parce que. Il ne s'accorde pas, garde ne… pas autour de lui, et prend le sujet du verbe principal. EN: a cause, no agreement, the main subject.",
  },
  cards: [
    trap(E(1652), 'ne… que faire', 'Ne sachant pas que faire, il a appelé sa sœur.', 'Avec que + infinitif, pas disparaît : ne sachant que faire. Ou : ne sachant pas quoi faire. EN: ne sachant que faire.'),
    trap(E(1654), 'étant', 'Étante malade, je ne pourrai pas venir demain.', 'Étant ne s’accorde jamais. EN: étant.'),
    trap(E(1656), 'la négation', 'Ne voulant déranger pas, nous sommes partis sans bruit.', 'Ne avant le participe, pas juste après : ne voulant pas. EN: ne voulant pas.'),
    trap(E(1659), 'le sujet', 'Connaissant bien la ville, la visite a été facile.', 'La visite ne connaît pas la ville : Karim, oui. Garde Karim comme sujet. EN: keep Karim as the subject.'),
    trap(E(1657), 'l’accord', 'Craignants la pluie, les organisateurs ont déplacé le concert.', 'Craignant garde un complément, la pluie : pas de s. EN: no s.'),
    trap(E(1662), 'l’adjectif après étant', 'Étant fatigué, elle s’est couchée tôt.', 'Fatiguée s’accorde avec elle ; étant, lui, ne bouge pas. EN: fatiguée agrees, étant does not.'),
  ],
  drill: [
    { promptSay: '… malade, je ne pourrai pas venir.', opts: ['Étant', 'Étante'], correct: 0 },
    { promptSay: 'Ne … que faire, il a appelé sa sœur.', opts: ['sachant', 'savant'], correct: 0 },
    { promptSay: '… pas déranger, nous sommes partis.', opts: ['Ne voulant', 'Ne voulants'], correct: 0 },
    { promptSay: '… la pluie, les organisateurs ont déplacé le concert.', opts: ['Craignants', 'Craignant'], correct: 1 },
    { promptSay: 'Étant …, elle s’est couchée tôt.', opts: ['fatigué', 'fatiguée'], correct: 1 },
    { promptSay: 'Julie ne trouve pas ses clés. Ne trouvant pas ses clés, … a appelé un serrurier.', opts: ['Julie', 'le serrurier'], correct: 0 },
    { promptSay: '… ne connaissait personne, il s’est inscrit à un club.', opts: ['Comme il', 'Connaissant'], correct: 0 },
    { promptSay: 'Mon père a mal au dos. Souffrant du dos, … a dû annuler son voyage.', opts: ['le voyage', 'mon père'], correct: 1 },
  ],
  steps: STEPS('En tête, la cause ; et le même sujet', 'Ce que la main écrit trop vite'),
  audio: REC('rec-b2-13-piege-cause'),
  say: REFRAME,
  terms: ['cause', 'sujet'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'La cause, partout',
  frSub: 'Dans un récit, un billet, un article',
  examples: [
    ex(E(1664), 'sachant cela : la raison du changement'),
    ex(G(1652), `en ne sachant pas : le gérondif de ${GERONDIF_REF}, une idée proche`),
    ex(E(1665), 'souffrant du dos : un état qui dure'),
    ex(E(1666), 'manquant d’expérience : la presse aime cette tournure'),
    ex('fr.b1.connecteurs-logiques.1240', 'étant donné que : une locution figée, pas un participe libre'),
    ex(E(1611), 'ne parlant pas espagnol : la raison d’un refus'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cause', 'gerondif'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Réécrire : l’histoire d’Inès', TEXTE_A4, [
  { q: 'Les deux premières phrases ?', a: "Ne connaissant personne, Inès s'est inscrite à une chorale. Ayant peur de chanter faux, elle restait au dernier rang. Inès est le sujet des deux verbes principaux." },
  { q: 'Troisième phrase : comme le chef de chœur voyait son talent…', a: "Voyant son talent, le chef de chœur lui a proposé un solo. C'est le chef qui voit : il doit être le sujet du verbe principal, juste après la virgule." },
  { q: 'Quatrième phrase : comme elle ne voulait pas le décevoir…', a: "Ne voulant pas le décevoir, elle a accepté : ne avant le participe, pas après." },
  { q: 'La dernière phrase ?', a: "Le soir du concert, tremblant un peu, elle a fermé les yeux et elle a chanté. Le participe peut aussi venir juste après un complément de temps." },
], 'rec-b2-13-texte-a4', ['cause', 'sujet']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le sens', 'En tête de phrase, le participe dit souvent…',
    ['la cause', 'le but', 'la condition'], 0,
    'Comme, parce que : la cause. EN: the cause.'),
  ctl('Le sujet', '« Voyant l’heure, j’ai pris un taxi. » Qui a vu l’heure ?',
    ['moi', 'le taxi'], 0,
    'Le sujet du verbe principal : moi. EN: me.'),
  ctl('La négation', '« … que faire, il a appelé sa sœur. »',
    ['Ne sachant', 'Sachant ne'], 0,
    'Ne avant le participe : ne sachant que faire. EN: ne sachant.'),
], ['cause']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'En tête : la cause',
    opener: {
      line: "Ne sachant que faire, il a appelé sa sœur : ici le participe ouvre la phrase et donne la raison de tout ce qui suit. EN: Not knowing what to do, he called his sister: here the participle opens the sentence and gives the reason for what follows.",
      imageRef: 'lessons/participe-adjectif/act04.jpg',
    },
    sections: [],
    milestone: "Tu ouvres une phrase par un participe qui dit la cause, avec la négation à sa place et le bon sujet derrière la virgule. EN: You can open a sentence with a participle of cause and keep the right subject.",
    estScreens: 38, restPoints: ['a4-construire', 'a4-piege'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_ECOUTE, A4_PIEGE, A4_EXEMPLES, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: AYANT FINI, ÉTANT ARRIVÉE
 *
 *  The participe composé: ayant / étant + past participle, the auxiliary of
 *  the passé composé, the être agreement; après avoir as the everyday form.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'La lettre de Moussa',
  frSub: 'Une candidature à Dakar',
  setting: 'Dakar. Moussa écrit sa lettre de motivation pour une banque ; sa cousine Awa, qui travaille aux ressources humaines, relit avec lui.',
  bubbles: [
    { from: 'user', fr: 'Ayant travaillé trois ans dans une agence, je connais bien la clientèle.', en: 'Having worked in a branch for three years, I know the customers well.' },
    { from: 'coach', fr: 'J’ai travaillé, donc ayant travaillé. L’action est finie, et elle explique la suite.', en: 'J’ai travaillé, so ayant travaillé. The action is over, and it explains what follows.', warn: 'Avoir : ayant' },
    { from: 'user', fr: 'Étant arrivé à Dakar il y a cinq ans, j’ai d’abord été stagiaire.', en: 'Having arrived in Dakar five years ago, I first worked as an intern.' },
    { from: 'coach', fr: 'Je suis arrivé, donc étant arrivé. Pour ta sœur, ce serait étant arrivée, avec un e.', en: 'Je suis arrivé, so étant arrivé. For your sister, it would be étant arrivée, with an e.', warn: 'Être : étant' },
    { from: 'user', fr: 'Ayant obtenu mon master, je souhaite maintenant évoluer.', en: 'Having obtained my master’s, I now wish to move up.' },
    { from: 'coach', fr: 'Parfait pour la lettre. À l’entretien, tu diras plutôt : après avoir obtenu mon master.', en: 'Perfect for the letter. At the interview, you will rather say: après avoir obtenu mon master.', warn: 'À l’oral' },
  ],
  closing: { fr: 'Ayant ou étant, comme au passé composé ; l’accord suit être.', en: 'Ayant or étant, as in the passé composé; agreement follows être.' },
  audio: REC('rec-b2-13-moussa'),
  say: REFRAME,
  terms: ['compose', 'accord'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-participe',
  title: 'Une action déjà finie',
  frSub: 'Ayant, étant, et l’accord',
  hint: 'Quatre cartes. La dernière est celle de tous les jours.',
  audio: REC('rec-b2-13-compose'),
  say: REFRAME,
  terms: ['compose', 'accord'],
  cards: [
    {
      head: 'Avec avoir', label: 'ayant + participe',
      fr: fr(E(1670)), sub: rsOf(E(1670)),
      body: "J'ai fini, donc ayant fini : le rapport est terminé avant le départ. L'ordre des actions est clair sans aucun mot de temps. EN: finished before the next action.",
    },
    {
      head: 'Avec être', label: 'étant + participe',
      fr: fr(E(1671)), sub: rsOf(E(1671)),
      body: "Je suis arrivée, donc étant arrivée, accordé avec elle. Étant ne bouge pas ; le participe passé, lui, suit la règle d'être. EN: étant, and the past participle agrees.",
    },
    {
      head: 'Les pronominaux', label: 's’étant + participe',
      fr: fr(E(1677)), sub: rsOf(E(1677)),
      body: "Se tromper se conjugue avec être : s'étant trompée, accordé avec l'étudiante. Le pronom suit le sujet : m'étant, t'étant, s'étant. EN: pronominals take étant.",
    },
    {
      head: 'Le plus courant', label: 'après avoir',
      fr: fr(E(1675)), sub: rsOf(E(1675)),
      body: "À l'oral et dans un courriel ordinaire, après avoir fini dit la même chose. Ayant fini reste la forme des lettres formelles, des CV et de la presse. EN: après avoir is the everyday version.",
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le bon auxiliaire',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Avoir : ayant', [
      it(E(1673), 'j’ai perdu'),
      it(E(1678), 'il a vécu'),
      it(E(1680), 'elle a lu'),
      it(E(1682), 'il a oublié'),
    ], chk('« J’ai perdu mes clés » devient…',
      ['Ayant perdu mes clés', 'Étant perdu mes clés', 'Ayant perdues mes clés'], 0,
      'Perdre prend avoir : ayant perdu, sans accord avec clés placé après. EN: ayant perdu.')),
    grp('Être : étant, et l’accord', [
      it(E(1671), 'elle est arrivée'),
      it(E(1674), 'nous sommes partis'),
      it(E(1683), 'elle est restée'),
      it(E(1681), 'ils se sont levés'),
    ], chk('« Étant … en retard, elles ont manqué le début. »',
      ['arrivées', 'arrivé', 'arrivés'], 0,
      'Être : l’accord avec elles, féminin pluriel. EN: arrivées.')),
    ctl('L’ordre', '« Ayant fini son rapport, elle est partie. » Qu’est-ce qui vient d’abord ?',
      ['le rapport', 'le départ'], 0,
      'Le participe composé dit l’action finie avant. EN: the report came first.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['compose', 'accord'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs d’auxiliaire',
  errors: [
    {
      wrong: 'Ayant arrivée en retard, elle a manqué le début du film.',
      right: fr(E(1671)),
      why: "Normal : ayant est la forme qu'on voit le plus. Mais arriver prend être au passé composé : étant arrivée. EN: être verbs take étant.",
    },
    {
      wrong: 'Étant fini son rapport, elle est partie en week-end.',
      right: fr(E(1670)),
      why: "Normal : partie prend être, plus loin dans la phrase. Mais c'est finir qu'il faut regarder : j'ai fini, donc ayant fini. EN: look at the participle's own verb.",
    },
    {
      wrong: "S'étant trompé de salle, l'étudiante est arrivée en retard.",
      right: fr(E(1677)),
      why: "Normal : le participe paraît loin de l'étudiante. Mais avec être, il s'accorde avec le sujet : trompée. EN: agree with the subject.",
    },
    {
      wrong: "Les candidats n'étant pas été retenus recevront une réponse par courriel.",
      right: fr(E(1676)),
      why: "Normal : être semble aller avec retenus. Mais le passé composé est ils n'ont pas été retenus : n'ayant pas été retenus. EN: ont été, so ayant été.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['compose', 'accord'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Le participe composé, et ses doubles',
  frSub: 'Plus soigné, ou plus courant',
  examples: [
    ex(E(1675), 'après avoir fini : la version de tous les jours'),
    ex(E(1672), 'comme elle était arrivée : la conjonction, plus longue'),
    ex(E(1676), 'l’annonce : n’ayant pas été retenus'),
    ex(E(1678), 'ayant vécu : une expérience qui explique le présent'),
    ex(E(1683), 'étant restée : être, accordé'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['compose'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Compléter : le parcours de Lucie', TEXTE_A5, [
  { q: 'Les deux premières : (finir) ; (arriver).', a: "Ayant fini ses études en juin (elle a fini) ; étant arrivée à Dakar un dimanche (elle est arrivée : être, accordé avec Lucie)." },
  { q: 'Troisième : (trouver) un poste.', a: "Ayant trouvé un poste dans une école : trouver prend avoir, et poste vient après, donc pas d'accord." },
  { q: 'Quatrième : (se perdre) le premier jour.', a: "S'étant perdue le premier jour : un verbe pronominal, donc être, et l'accord avec Lucie." },
  { q: 'La dernière : (vivre) trois ans là-bas.', a: "Ayant vécu trois ans là-bas : avoir. L'expérience passée explique le présent : elle parle un peu wolof." },
], 'rec-b2-13-texte-a5', ['compose', 'accord']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('L’auxiliaire', 'Partir, au participe composé :',
    ['étant parti', 'ayant parti'], 0,
    'Je suis parti, donc étant parti. EN: être, étant.'),
  ctl('L’accord', '« Étant … tôt, elles ont évité les bouchons. »',
    ['parties', 'parti'], 0,
    'Être : l’accord avec elles. EN: parties.'),
  ctl('À l’oral', 'Ayant fini, à l’oral, se dit plutôt…',
    ['après avoir fini', 'en ayant fini'], 0,
    'Après avoir + participe : la tournure courante. EN: après avoir fini.'),
], ['compose']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Ayant fini, étant arrivée',
    opener: {
      line: "Ayant fini son rapport, elle est partie : ici le participe dit ce qui était déjà fait, avec l'auxiliaire du passé composé. EN: Having finished her report, she left: here the participle says what was already done, with the passé composé auxiliary.",
      imageRef: 'lessons/participe-adjectif/act05.jpg',
    },
    sections: [],
    milestone: "Tu construis ayant ou étant + participe passé, avec l'accord qu'être demande, et tu sais dire la même chose avec après avoir. EN: You can build the perfect participle and agree it after étant.",
    estScreens: 34, restPoints: ['a5-construire', 'a5-exemples'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_CONSTRUIRE, A5_ERREURS, A5_EXEMPLES, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: UNE QUALITÉ QUI S'ACCORDE
 *
 *  The verbal adjective: a quality of the noun, agreement, très, être, the
 *  place before the noun; same verb, two roles (souriante / souriant à).
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Une critique de roman',
  frSub: 'Lis, et trie les formes en -ant',
  text: LECTURE_CRITIQUE,
  glossary: [
    { word: 'battante', en: 'driving (rain)', note: 'Une pluie battante tombe fort et frappe les vitres.' },
    { word: 'caricaturaux', en: 'caricatured', note: 'Pluriel de caricatural : exagéré jusqu’à la caricature.' },
    { word: 'convenu', en: 'predictable', note: 'Un récit convenu suit le chemin qu’on attend.' },
  ],
  questions: [
    { q: 'Global : quel est ce texte ?', a: "Une critique de livre : l'avis argumenté d'un lecteur, ou d'un journaliste, sur un premier roman." },
    { q: 'Détail : pourquoi les trois sœurs se retrouvent-elles ?', a: "Pour vendre la maison familiale, après dix ans sans se parler." },
    { q: 'Forme : relève trois adjectifs verbaux accordés.', a: "Par exemple battante (pluie), coupantes (phrases), étonnante (vérité), attachants (personnages), bouleversante (partie), décevante (fin) : ils disent une qualité et s'accordent." },
    { q: 'Forme : « doutant sans cesse d’eux-mêmes », « cachant un secret » : pourquoi pas d’accord ?', a: "Ce sont des participes : ils ont un complément et font une action. Doutant et cachant ne s'accordent jamais." },
    { q: '« quelques retours en arrière, précédant les grandes scènes » : pourquoi -ant et pas -ent ?', a: "Précédant a un complément, les grandes scènes : c'est le participe, qui garde -ant. L'adjectif serait précédent : la scène précédente." },
    { q: 'Position : le critique recommande-t-il ce livre ? Comment le sais-tu ?', a: "Oui, avec quelques réserves (le milieu lent, les retours en arrière). La fin le dit, je recommande, et les adjectifs sont très positifs : saisissant, bouleversante, émouvant." },
  ],
  audio: REC('rec-b2-13-critique'),
  say: REFRAME,
  terms: ['adjectif', 'participe'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-adjectif',
  title: 'Une qualité, comme un adjectif',
  frSub: 'L’accord, très, être, la place',
  hint: 'Quatre cartes. La dernière met les deux rôles côte à côte.',
  audio: REC('rec-b2-13-adjectif'),
  say: REFRAME,
  terms: ['adjectif', 'accord'],
  cards: [
    {
      head: 'Une qualité', label: 'l’adjectif verbal',
      fr: fr(E(1687)), sub: rsOf(E(1687)),
      body: "Fatigante ne fait rien : elle dit comment était la soirée. C'est un adjectif, comme longue ou agréable, et il s'accorde. EN: it describes, and agrees.",
    },
    {
      head: 'Très, et être', label: 'les signes',
      fr: fr(E(1688)), sub: rsOf(E(1688)),
      body: "Très inquiétants, sont inquiétants : l'adjectif verbal accepte très et suit être, comme n'importe quel adjectif. EN: it takes très and follows être.",
    },
    {
      head: 'Parfois devant le nom', label: 'la place',
      fr: fr(E(1698)), sub: rsOf(E(1698)),
      body: "Une brillante carrière, un charmant village : quelques adjectifs verbaux passent devant le nom, surtout à l'écrit, pour mettre la qualité en avant. EN: some go before the noun, for style.",
    },
    {
      head: 'Le même verbe, deux rôles', label: 'souriante ou souriant',
      fr: 'une hôtesse souriante · souriant à chaque client',
      sub: '[ü-no-TESS soo-RYAHⁿT] · [soo-ree-YAHⁿ a shak klee-YAHⁿ]',
      body: "Souriante décrit l'hôtesse et s'accorde. Souriant à chaque client fait une action, avec un complément : pas d'accord. EN: same verb, two jobs.",
    },
  ],
};

const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-table',
  layer: 'core',
  sheetId: 'sheet-adjectif',
  title: 'Six adjectifs pour juger',
  cols: ['Adjectif', 'Exemple', 'Sens'],
  rows: [
    { cells: ['passionnant', 'des chapitres passionnants', 'qui captive'], say: fr(E(1686)),
      detail: { title: 'passionnant', body: "Passionner : captiver. Au masculin pluriel, passionnants, avec un s qu'on n'entend pas. EN: gripping.", say: fr('fr.b1.pronoms-essentiels.1109') } },
    { cells: ['fatigant', 'une soirée fatigante', 'qui fatigue'], say: fr(E(1687)),
      detail: { title: 'fatigant', body: "Sans u : c'est l'adjectif. Le participe s'écrit fatiguant (acte 8). EN: no u for the adjective.", say: fr('fr.b1.description-personnes-objets.1078') } },
    { cells: ['apaisant', 'une voix apaisante', 'qui calme'], say: fr(E(1691)),
      detail: { title: 'apaisant', body: "Apaiser : calmer. Au féminin, le t s'entend : apaisante. EN: soothing.", say: fr(E(1691)) } },
    { cells: ['stimulant', 'des semaines stimulantes', 'qui motive'], say: fr(E(1692)),
      detail: { title: 'stimulant', body: "Fréquent dans les annonces : un cadre stimulant. EN: stimulating.", say: fr(E(1784)) } },
    { cells: ['décevant', 'une fin décevante', 'qui déçoit'], say: fr(E(1701)),
      detail: { title: 'décevant', body: `Décevoir, nous décevons : décevant. Un classique des critiques, déjà dans ${EMOTIONS_REF}. EN: disappointing.`, say: fr('fr.b1.emotions.1039') } },
    { cells: ['épuisant', 'des semaines épuisantes', 'qui épuise'], say: fr(E(1696)),
      detail: { title: 'épuisant', body: "Plus fort que fatigant : on n'en peut plus. EN: exhausting.", say: fr('fr.b1.strategies-de-comprehension.1101') } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adjectif'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Accorder, ou pas',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('L’accord', [
      it(E(1686), 'chapitres : -s'),
      it(E(1692), 'semaines : -es'),
      it(E(1699), 'lumières : -es'),
      it(E(1689), 'hôtesse : -e'),
    ], chk('« Des nuits (étouffant) » :',
      ['étouffantes', 'étouffant', 'étouffants'], 0,
      'Nuits est féminin pluriel : étouffantes. EN: feminine plural.')),
    grp('Qualité ou action', [
      it(E(1693), 'une ville vivante'),
      it(E(1694), 'une ville vivant du tourisme'),
      it(E(1689), 'une hôtesse souriante'),
      it(E(1690), 'une hôtesse souriant à chaque client'),
    ], chk('« Une ville … surtout du tourisme »',
      ['vivante', 'vivant'], 1,
      'Vivre du tourisme : une action avec son complément, donc le participe, sans accord. EN: vivant.')),
    ctl('Le son', 'Au féminin, souriante se prononce…',
      ['avec un t : [suʁjɑ̃t]', 'comme souriant'], 0,
      'Le e fait entendre le t : on entend l’accord. EN: the feminine t is heard.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adjectif', 'accord'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs d’accord',
  errors: [
    {
      wrong: "C'était une soirée fatigant, mais réussie.",
      right: fr(E(1687)),
      why: "Normal : tu viens d'apprendre que le participe ne s'accorde pas. Mais fatigante dit une qualité de la soirée : c'est un adjectif. EN: an adjective agrees.",
    },
    {
      wrong: 'Les chapitres sont courts et passionnant.',
      right: fr(E(1686)),
      why: "Normal : à l'oral, passionnant et passionnants sonnent pareil. À l'écrit, le s de l'accord est obligatoire. EN: the plural s is silent but required.",
    },
    {
      wrong: 'Une hôtesse souriante à chaque client distribuait les badges.',
      right: fr(E(1690)),
      why: "Normal : hôtesse est féminin, et souriante existe. Mais à chaque client est un complément : c'est l'action de sourire, donc souriant. EN: an object makes it a participle.",
    },
    {
      wrong: 'Ces chiffres sont très inquiétant.',
      right: fr(E(1688)),
      why: "Normal : très semble figer la forme. Au contraire, très prouve que c'est un adjectif, qui s'accorde : inquiétants. EN: très proves it is an adjective.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adjectif', 'accord'],
};

const A6_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a6-flash',
  layer: 'core',
  title: 'Huit adjectifs pour juger',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'gripping', back: 'passionnant', say: fr(E(1686)) },
    { front: 'tiring', back: 'fatigant', say: fr(E(1687)) },
    { front: 'worrying', back: 'inquiétant', say: fr(E(1688)) },
    { front: 'soothing', back: 'apaisant', say: fr(E(1691)) },
    { front: 'stimulating', back: 'stimulant', say: fr(E(1692)) },
    { front: 'moving', back: 'émouvant', say: fr(E(1697)) },
    { front: 'exhausting', back: 'épuisant', say: fr(E(1696)) },
    { front: 'accommodating', back: 'arrangeant', say: fr(E(1700)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adjectif'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Accorder : une carte de Marseille', TEXTE_A6, [
  { q: 'La première phrase : une semaine (fatigant) mais (passionnant).', a: "Une semaine fatigante mais passionnante : deux adjectifs, accordés au féminin singulier. Fatigante, sans u." },
  { q: 'Les ruelles (charmant), les marchés (vivant), les habitants très (accueillant).', a: "Charmantes, vivants, accueillants : chaque adjectif prend le genre et le nombre de son nom." },
  { q: 'Des conseils (étonnant) ; une beauté (saisissant).', a: "Étonnants (conseils, masculin pluriel) ; saisissante (beauté, féminin singulier)." },
  { q: 'La fin : des nuits (étouffant).', a: "Étouffantes : nuits est féminin pluriel. Aucune de ces formes n'a de complément : ce sont toutes des qualités." },
], 'rec-b2-13-texte-a6', ['adjectif', 'accord']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('L’adjectif', 'L’adjectif verbal…',
    ['s’accorde avec le nom', 'ne s’accorde jamais'], 0,
    'Une qualité : il s’accorde. EN: it agrees.'),
  ctl('L’accord', '« Ce sont des résultats très … »',
    ['encourageants', 'encourageant', 'encourageantes'], 0,
    'Résultats : masculin pluriel. EN: encourageants.'),
  ctl('Le rôle', '« Une ville vivant du tourisme » : vivant est…',
    ['un participe : il a un complément', 'un adjectif mal accordé'], 0,
    'Vivre du tourisme : une action. EN: a participle.'),
], ['adjectif', 'accord']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Une qualité qui s’accorde',
    opener: {
      line: "Une soirée fatigante, des histoires passionnantes : ici la forme en -ant ne fait plus rien, elle juge, et elle s'accorde. EN: A tiring evening, gripping stories: here the -ant form no longer does anything, it judges, and it agrees.",
      imageRef: 'lessons/participe-adjectif/act06.jpg',
    },
    sections: [],
    milestone: "Tu juges un livre, une soirée ou une ville avec des adjectifs verbaux accordés, et tu sais quand la même forme redevient un verbe. EN: You can judge with agreed verbal adjectives and spot when the form is a verb again.",
    estScreens: 38, restPoints: ['a6-cartes', 'a6-erreurs'],
  },
  sections: [A6_LECTURE, A6_CARTES, A6_TABLE, A6_CONSTRUIRE, A6_ERREURS, A6_FLASH, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: LES TROIS TESTS
 *
 *  très ? then an adjective. qui + verbe ? an object, an adverb after, a
 *  negation ? then a participle. Borderline cases stay out of every item.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'La correctrice',
  frSub: 'Trois questions avant d’accorder',
  setting: 'Lyon, un journal de quartier. Samuel, stagiaire, relit un article avec Claire, la correctrice, qui ne consulte jamais la grammaire.',
  bubbles: [
    { from: 'user', fr: 'Je ne sais jamais si j’écris obéissant ou obéissants.', en: 'I never know whether to write obéissant or obéissants.' },
    { from: 'coach', fr: 'Pose trois questions. D’abord, essaie d’ajouter très devant.', en: 'Ask three questions. First, try putting très in front.', warn: 'Test 1 : très' },
    { from: 'user', fr: 'Des enfants très obéissants : oui, ça marche.', en: 'Very obedient children: yes, that works.' },
    { from: 'coach', fr: 'Alors c’est un adjectif, et il s’accorde. Ensuite, essaie de dire qui + verbe.', en: 'Then it is an adjective, and it agrees. Next, try saying qui + verb.', warn: 'Test 2 : qui' },
    { from: 'user', fr: 'Les enfants, obéissant à leur mère : oui, qui obéissent à leur mère.', en: 'The children, obeying their mother: yes, who obey their mother.' },
    { from: 'coach', fr: 'Et il y a un complément, à leur mère : c’est un participe, sans accord.', en: 'And there is an object, à leur mère: it is a participle, no agreement.', warn: 'Test 3 : la suite' },
    { from: 'user', fr: 'Et ne parlant pas français, avec la négation autour.', en: 'And ne parlant pas français, with the negation around it.' },
    { from: 'coach', fr: 'Ne… pas, ou un adverbe placé après : c’est toujours un verbe.', en: 'Ne… pas, or an adverb placed after: it is always a verb.', warn: 'La négation' },
  ],
  closing: { fr: 'Très : un adjectif. Qui + verbe, un complément, une négation : un participe.', en: 'Très: an adjective. Qui + verb, an object, a negation: a participle.' },
  audio: REC('rec-b2-13-samuel'),
  say: REFRAME,
  terms: ['tests'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-adjectif',
  title: 'Trois questions pour trancher',
  frSub: 'Très, qui, la suite',
  hint: 'Quatre cartes, une question chacune.',
  audio: REC('rec-b2-13-tests'),
  say: REFRAME,
  terms: ['tests'],
  cards: [
    {
      head: 'Test 1 : très', label: 'l’adjectif',
      fr: fr(E(1705)), sub: rsOf(E(1705)),
      body: "Des enfants très obéissants : très passe, donc c'est une qualité. L'adjectif s'accorde. EN: très fits, so it is an adjective.",
    },
    {
      head: 'Test 2 : qui + verbe', label: 'le participe',
      fr: fr(E(1706)), sub: rsOf(E(1706)),
      body: "Une étudiante travaillant le soir, c'est une étudiante qui travaille le soir, et très ne passe pas : c'est un participe. Pose très d'abord, car qui + verbe marche aussi pour bien des adjectifs : une soirée qui fatigue. EN: très does not fit and qui + verb does, so it is a participle.",
    },
    {
      head: 'Test 3 : ce qui suit', label: 'complément, adverbe',
      fr: fr(E(1708)), sub: rsOf(E(1708)),
      body: "Un complément (à leur mère), un adverbe placé après (régulièrement) : ce sont des suites de verbe. Le participe les garde. EN: an object or an adverb after it.",
    },
    {
      head: 'La négation', label: 'ne… pas',
      fr: fr(E(1707)), sub: rsOf(E(1707)),
      body: "Ne parlant pas : dès que tu vois ne… pas autour de la forme en -ant, c'est un verbe, donc un participe, invariable. EN: a negation around it means a verb.",
    },
  ],
};

const A7_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-trier',
  layer: 'core',
  size: 'lg',
  title: 'Passe les tests',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('L’adjectif : très passe', [
      it(E(1705), 'très obéissants'),
      it(E(1709), 'très amusants'),
      it(E(1712), 'une chanson entraînante'),
      it(E(1717), 'une remarque blessante'),
    ], chk('« Une chanson entraînante » : quel test le montre ?',
      ['on peut dire très entraînante', 'on peut dire qui entraîne quelqu’un'], 0,
      'Très passe, et il n’y a aucun complément : un adjectif. EN: très fits.')),
    grp('Le participe : un complément', [
      it(E(1704), 'à leur mère'),
      it(E(1713), 'leurs parents'),
      it(E(1714), 'trois langues'),
      it(E(1716), 'le vélo'),
    ], chk('« Des mesures encourageant le vélo » : pourquoi pas encourageantes ?',
      ['encourager le vélo : il y a un complément', 'mesures est masculin'], 0,
      'Le vélo est le complément : c’est un participe. EN: an object.')),
    ctl('L’adverbe', '« Des élèves travaillant régulièrement » : l’adverbe est…',
      ['après : c’est un participe', 'avant : c’est un adjectif'], 0,
      'Régulièrement suit la forme, comme après un verbe. EN: after it, so a participle.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tests', 'participe', 'adjectif'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Un verbe ou une qualité, à l’oreille',
  frSub: 'Neuf phrases, trois tests',
  lines: [
    ln(E(1704)), ln(E(1705)), ln(E(1706)), ln(E(1707)), ln(E(1709)),
    ln(E(1712)), ln(E(1713)), ln(E(1716)), ln('fr.b1.recits-au-passe.1314'),
  ],
  questions: [
    { q: 'Première phrase : qu’ont fait les enfants ?', opts: ['ils sont allés se coucher', 'ils ont joué dehors'], correct: 0, why: 'Obéissant à leur mère, ils sont allés se coucher. EN: they went to bed.' },
    { q: 'Quatrième phrase : que voulaient les touristes ?', opts: ['connaître la route', 'un restaurant'], correct: 0, why: 'Ils nous ont demandé la route. EN: the way.' },
    { q: 'Sixième phrase : où passait la chanson ?', opts: ['à la radio', 'à la télévision'], correct: 0, why: 'Une chanson entraînante, à la radio. EN: on the radio.' },
    { q: 'Septième phrase : jusqu’à quand les jeunes ont-ils dansé ?', opts: ['minuit', 'deux heures du matin'], correct: 0, why: 'Jusqu’à minuit. EN: midnight.' },
    { q: 'Dernière phrase : exigeant y est…', opts: ['un adjectif : il suit être', 'un participe : il a un complément'], correct: 0, why: 'Le client était exigeant : une qualité. EN: an adjective.' },
  ],
  audio: REC('rec-b2-13-tests-ecoute'),
  say: REFRAME,
  terms: ['tests'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Les tests contre l’habitude',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Trois tests avant d’accorder',
    body: "Très passe : adjectif, accordé. Sinon, qui + verbe passe, ou il y a un complément d'objet, un adverbe après, une négation : participe, invariable. EN: très, adjective; otherwise qui + verb, object, adverb, negation: participle.",
  },
  cards: [
    trap(E(1704), 'un complément', 'Les enfants, obéissants à leur mère, sont allés se coucher.', 'À leur mère : un complément, donc un participe, sans s. EN: obéissant.'),
    trap(E(1705), 'très', 'Ce sont des enfants très obéissant.', 'Très : un adjectif, qui s’accorde. EN: obéissants.'),
    trap(E(1707), 'la négation', 'Des touristes ne parlants pas français nous ont demandé la route.', 'Ne… pas : un verbe, sans accord. EN: parlant.'),
    trap(E(1708), 'un adverbe après', 'Des élèves travaillants régulièrement réussissent mieux.', 'L’adverbe suit : un participe. EN: travaillant.'),
    trap(E(1712), 'une qualité', 'Une chanson entraînant passait à la radio.', 'Aucun complément, et très entraînante passe : un adjectif. EN: entraînante.'),
    trap(E(1716), 'un complément', 'Des mesures encourageantes le vélo seront votées en mars.', 'Le vélo est complément : participe. EN: encourageant.'),
  ],
  drill: [
    { promptSay: 'Ce sont des films très …', opts: ['amusant', 'amusants'], correct: 1 },
    { promptSay: 'Les jeunes, … leurs parents sur la piste, ont dansé.', opts: ['entraînant', 'entraînants'], correct: 0 },
    { promptSay: 'Une remarque … l’a fait pleurer.', opts: ['blessante', 'blessant'], correct: 0 },
    { promptSay: 'Des touristes ne … pas français nous ont demandé la route.', opts: ['parlant', 'parlants'], correct: 0 },
    { promptSay: 'Les guides, … trois langues, accueillent les groupes.', opts: ['parlants', 'parlant'], correct: 1 },
    { promptSay: 'Ce sont des résultats très …', opts: ['encourageant', 'encourageants'], correct: 1 },
    { promptSay: 'Une étudiante … le soir a peu de temps libre.', opts: ['travaillant', 'travaillante'], correct: 0 },
    { promptSay: 'Des élèves … régulièrement réussissent mieux.', opts: ['travaillants', 'travaillant'], correct: 1 },
  ],
  steps: STEPS('Trois tests avant d’accorder', 'Ce que l’habitude écrit'),
  audio: REC('rec-b2-13-piege-tests'),
  say: REFRAME,
  terms: ['tests', 'accord'],
};

const A7_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a7-focus',
  layer: 'core',
  sheetId: 'sheet-adjectif',
  title: 'Avant d’accorder une forme en -ant',
  points: [
    "Essaie très : s'il passe, c'est un adjectif, accordé. EN: try très.",
    "Si très ne passe pas, essaie qui + verbe : si le sens reste, c'est un participe. EN: then try qui + verb.",
    "Regarde ce qui suit : un complément d'objet ou un adverbe, c'est un participe. EN: look at what follows.",
    "Cherche ne… pas autour : c'est un verbe, sans accord. EN: a negation means a verb.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tests'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Choisir : la plainte des voisins', TEXTE_A7, [
  { q: 'Les soirées (dansant ou dansantes) ; des jeunes (arrivant ou arrivants).', a: "Les soirées dansantes : une qualité, comme des soirées animées. Des jeunes arrivant de tout le quartier : un complément, donc le participe." },
  { q: 'Une musique (entraînant ou entraînante).', a: "Entraînante : aucune suite, et très entraînante passe. C'est un adjectif." },
  { q: 'Les voisins, ne (supportant ou supportants) plus le bruit.', a: "Supportant : la négation ne… plus et le complément le bruit en font un verbe." },
  { q: '(demandant ou demandants) des horaires (respectant ou respectants) leur sommeil.', a: "Demandant, qui se rapporte aux voisins, et respectant : deux participes, chacun avec son complément (des horaires, leur sommeil)." },
], 'rec-b2-13-texte-a7', ['tests']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Très', 'Si tu peux ajouter très, la forme en -ant est…',
    ['un adjectif', 'un participe'], 0,
    'Très : une qualité, accordée. EN: an adjective.'),
  ctl('Le complément', '« Des mesures … le vélo »',
    ['encourageant', 'encourageantes'], 0,
    'Encourager le vélo : un participe. EN: encourageant.'),
  ctl('L’adverbe', '« Des élèves … régulièrement »',
    ['travaillant', 'travaillants'], 0,
    'L’adverbe après : un participe. EN: travaillant.'),
], ['tests']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Les trois tests',
    opener: {
      line: "Obéissant ou obéissants : ici tu poses trois questions à la forme en -ant, et elle te dit elle-même si elle s'accorde. EN: Obéissant or obéissants: here you ask the -ant form three questions, and it tells you itself whether it agrees.",
      imageRef: 'lessons/participe-adjectif/act07.jpg',
    },
    sections: [],
    milestone: "Tu tranches entre participe et adjectif avec très, qui + verbe, le complément, l'adverbe et la négation, avant d'écrire la terminaison. EN: You can decide participle or adjective with three tests.",
    estScreens: 38, restPoints: ['a7-trier', 'a7-piege'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_TRIER, A7_ECOUTE, A7_PIEGE, A7_FOCUS, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: -QUANT OU -CANT
 *
 *  The pairs that sound the same and split in writing: the participle keeps
 *  the verb's -qu- / -gu-, the adjective has -c- / -g-.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Le compte rendu de Samia',
  frSub: 'Le correcteur n’est pas d’accord',
  setting: 'Montréal, un bureau d’architectes. Samia rédige le compte rendu d’une longue réunion ; le correcteur de son ordinateur hésite, et elle appelle son collègue Karim.',
  bubbles: [
    { from: 'user', fr: 'J’écris : une réunion fatigante. Le correcteur me propose fatiguante.', en: 'I write: a tiring meeting. The spellchecker suggests fatiguante.' },
    { from: 'coach', fr: 'Refuse. L’adjectif s’écrit sans u : fatigant, fatigante.', en: 'Say no. The adjective is spelled without a u: fatigant, fatigante.', warn: 'L’adjectif : -gant' },
    { from: 'user', fr: 'Et le directeur, fatiguant tout le monde avec ses chiffres.', en: 'And the director, wearing everyone out with his figures.' },
    { from: 'coach', fr: 'Là, garde le u : fatiguer tout le monde, c’est un verbe, avec un complément.', en: 'There, keep the u: fatiguer tout le monde is a verb, with an object.', warn: 'Le participe : -guant' },
    { from: 'user', fr: 'Donc des arguments convaincants, mais le directeur, convainquant les sceptiques.', en: 'So convaincants arguments, but the director, convainquant the sceptics.' },
    { from: 'coach', fr: 'Exactement. Le participe garde le qu du verbe ; l’adjectif prend un c.', en: 'Exactly. The participle keeps the verb’s qu; the adjective takes a c.', warn: '-quant, -cant' },
  ],
  closing: { fr: 'Même son, deux orthographes : le participe garde le verbe, l’adjectif le change.', en: 'Same sound, two spellings: the participle keeps the verb, the adjective changes it.' },
  audio: REC('rec-b2-13-samia'),
  say: REFRAME,
  terms: ['paires'],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-table',
  layer: 'core',
  sheetId: 'sheet-paires',
  title: 'Six paires, un seul son',
  cols: ['Verbe', 'Participe', 'Adjectif ou nom'],
  rows: [
    { cells: ['fatiguer', 'fatiguant', 'fatigant'], say: fr(E(1720)),
      detail: { title: 'fatiguant, fatigant', body: "Nous fatiguons : le participe garde le u. L'adjectif le perd : des trajets fatigants. EN: the adjective drops the u.", say: fr(E(1721)) } },
    { cells: ['convaincre', 'convainquant', 'convaincant'], say: fr(E(1722)),
      detail: { title: 'convainquant, convaincant', body: "Nous convainquons : qu pour le participe, c pour l'adjectif. EN: qu or c.", say: fr(E(1723)) } },
    { cells: ['provoquer', 'provoquant', 'provocant'], say: fr(E(1724)),
      detail: { title: 'provoquant, provocant', body: "Provoquer des coupures : le participe. Une tenue provocante : l'adjectif. EN: causing, or provocative.", say: fr(E(1725)) } },
    { cells: ['suffoquer', 'suffoquant', 'suffocant'], say: fr(E(1726)),
      detail: { title: 'suffoquant, suffocant', body: "Une chaleur suffocante, une qualité ; suffoquant sous la fumée, une action. EN: stifling, or choking.", say: fr(E(1727)) } },
    { cells: ['communiquer', 'communiquant', 'communicant'], say: fr(E(1728)),
      detail: { title: 'communiquant, communicant', body: "Deux chambres communicantes, une qualité ; des services communiquant peu, une action. EN: connecting, or communicating.", say: fr(E(1729)) } },
    { cells: ['fabriquer', 'fabriquant', 'fabricant (nom)'], say: fr(E(1752)),
      detail: { title: 'fabriquant, fabricant', body: "Fabricant est un nom : un fabricant de vélos. Le participe : une entreprise fabriquant des vélos. EN: fabricant is a noun.", say: fr(E(1753)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['paires', 'noms'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Garder le qu, ou pas',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('L’adjectif : -cant, -gant', [
      it(E(1720), 'fatigants'),
      it(E(1722), 'convaincants'),
      it(E(1724), 'provocante'),
      it(E(1726), 'suffocante'),
    ], chk('« Ses explications étaient très … »',
      ['convaincantes', 'convainquantes', 'convainquant'], 0,
      'Très : un adjectif, donc -cant, accordé. EN: convaincantes.')),
    grp('Le participe : -quant, -guant', [
      it(E(1721), 'fatiguant tout le monde'),
      it(E(1723), 'convainquant les indécis'),
      it(E(1725), 'provoquant des coupures'),
      it(E(1727), 'suffoquant sous la fumée'),
    ], chk('Pourquoi convainquant garde-t-il le qu ?',
      ['il a un complément : c’est un verbe', 'il est au pluriel'], 0,
      'Convainquant les derniers indécis : le participe garde le radical du verbe. EN: the participle keeps the verb.')),
    ctl('Le son', '« fatiguant » et « fatigant » se prononcent…',
      ['pareil', 'différemment'], 0,
      'Même son : seule l’orthographe dit le rôle. EN: identical.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['paires'],
};

const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a8-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Même son : c’est le rôle qui choisit',
  itemIds: dicteeFor(8),
  audio: AUDIO,
  say: REFRAME,
  terms: ['paires'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Le qu qui reste, le c qui arrive',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le verbe garde qu et gu, l’adjectif prend c et g',
    body: "Le participe présent garde le radical du verbe : fatiguant, convainquant, provoquant, suffoquant, communiquant. L'adjectif verbal le change : fatigant, convaincant, provocant, suffocant, communicant. EN: the participle keeps -qu-/-gu-; the adjective has -c-/-g-.",
  },
  cards: [
    trap(E(1720), '-gant', 'Ces longs trajets en bus sont fatiguants.', 'Une qualité, après être : l’adjectif, sans u. EN: fatigants.'),
    trap(E(1721), '-guant', 'Fatigant tout le monde avec ses questions, il a fini par se taire.', 'Fatiguer tout le monde : un verbe, avec son u. EN: fatiguant.'),
    trap(E(1722), '-cant', 'Ses arguments étaient très convainquants.', 'Très : l’adjectif, en -cant. EN: convaincants.'),
    trap(E(1725), '-quant', 'La tempête, provocant des coupures d’électricité, a paralysé la région.', 'Provoquer des coupures : le participe garde qu. EN: provoquant.'),
    trap(E(1726), '-cant', 'Il faisait une chaleur suffoquante dans le métro.', 'Une qualité de la chaleur : suffocante. EN: suffocante.'),
    trap(E(1728), '-cant', 'L’appartement a deux chambres communiquantes.', 'Une qualité des chambres : communicantes. EN: communicantes.'),
  ],
  drill: [
    { promptSay: 'Ce voyage de nuit a été très …', opts: ['fatiguant', 'fatigant'], correct: 1 },
    { promptSay: '… les derniers indécis, le maire a fait voter le budget.', opts: ['Convainquant', 'Convaincant'], correct: 0 },
    { promptSay: 'Sa tenue était un peu …', opts: ['provocante', 'provoquante'], correct: 0 },
    { promptSay: 'Une panne … d’importants retards a touché la ligne verte.', opts: ['provocant', 'provoquant'], correct: 1 },
    { promptSay: '… sous la fumée, les habitants ont quitté l’immeuble.', opts: ['Suffoquant', 'Suffocant'], correct: 0 },
    { promptSay: 'Les services, … peu entre eux, perdent du temps.', opts: ['communicants', 'communiquant'], correct: 1 },
    { promptSay: 'C’est le principe des vases …', opts: ['communicants', 'communiquants'], correct: 0 },
    { promptSay: 'Plus fort, ce n’est pas plus …', opts: ['convainquant', 'convaincant'], correct: 1 },
  ],
  steps: STEPS('Le verbe garde qu et gu, l’adjectif prend c et g', 'Ce que le correcteur propose'),
  audio: REC('rec-b2-13-piege-paires'),
  say: REFRAME,
  terms: ['paires'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Les paires, en situation',
  frSub: 'Un débat, un voyage, une équipe',
  examples: [
    ex('fr.b2.opinions-et-avis.1615', `convaincant : l’adjectif, déjà dans ${ARGU_REF}`),
    ex(E(1733), 'très fatigant : l’adjectif, sans u'),
    ex(E(1729), 'communiquant peu : le participe, avec un adverbe'),
    ex(E(1734), 'ne communiquant que par courriel : la négation, le participe'),
    ex(E(1735), 'les vases communicants : une expression figée'),
    ex(E(1732), 'provoquant d’importants retards : un complément'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['paires'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Corriger : le compte rendu de Samia', TEXTE_A8, [
  { q: 'Première et deuxième erreurs.', a: "La réunion a été fatigante (une qualité : l'adjectif, sans u). Le directeur, convainquant les derniers sceptiques (un complément : le participe, avec qu)." },
  { q: 'Troisième erreur.', a: "Ses chiffres n'étaient pas très convaincants : très, donc l'adjectif, en -cant." },
  { q: 'Quatrième et cinquième erreurs.', a: "Une remarque provocante (une qualité de la remarque) et la chaleur suffocante (une qualité de la chaleur) : deux adjectifs, en -cant." },
  { q: 'Et « les deux bureaux sont communicants » ?', a: "C'est juste : une qualité des bureaux, après être. L'adjectif s'écrit communicant, et il s'accorde." },
], 'rec-b2-13-texte-a8', ['paires']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('L’adjectif', '« Une journée … »',
    ['fatigante', 'fatiguante'], 0,
    'Une qualité : l’adjectif, sans u. EN: fatigante.'),
  ctl('Le participe', '« … tout le monde avec ses questions, il a fini par se taire. »',
    ['Fatiguant', 'Fatigant'], 0,
    'Un complément : le participe, avec u. EN: fatiguant.'),
  ctl('La règle', 'Le participe présent garde…',
    ['le qu ou le gu du verbe', 'le c ou le g de l’adjectif'], 0,
    'Le participe reste un verbe : il garde son radical. EN: the verb stem.'),
], ['paires']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: '-quant ou -cant',
    opener: {
      line: "Fatiguant, fatigant : même son, deux orthographes. Ici tu apprends à écrire ce que ton oreille ne peut pas entendre. EN: Fatiguant, fatigant: same sound, two spellings. Here you learn to write what your ear cannot hear.",
      imageRef: 'lessons/participe-adjectif/act08.jpg',
    },
    sections: [],
    milestone: "Tu écris fatigant, convaincant, provocant, suffocant et communicant pour la qualité, et tu gardes qu et gu pour le participe. EN: You can spell the -cant/-gant adjectives and the -quant/-guant participles.",
    estScreens: 38, restPoints: ['a8-construire', 'a8-piege'],
  },
  sections: [A8_HISTOIRE, A8_TABLE, A8_CONSTRUIRE, A8_DICTEE, A8_PIEGE, A8_EXEMPLES, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: -ANT OU -ENT, ET LES NOMS
 *
 *  précédant / précédent and the rest: the participle always keeps -ant;
 *  the adjective and the noun take -ent. The nouns among the pairs.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Dix phrases, dix -ant ou -ent',
  frSub: 'À l’oreille, rien ne change',
  lines: [
    ln(E(1738)), ln(E(1739)), ln(E(1740)), ln(E(1741)), ln(E(1744)),
    ln(E(1745)), ln(E(1747)), ln(E(1750)), ln(E(1751)), ln(E(1752)),
  ],
  questions: [
    { q: 'Première phrase : quand la bibliothèque ouvre-t-elle tard ?', opts: ['la semaine avant les examens', 'pendant les vacances'], correct: 0, why: 'La semaine précédant les examens. EN: the week before the exams.' },
    { q: 'Troisième phrase : qu’est-ce qui a retardé la décision ?', opts: ['des avis qui n’étaient pas les mêmes', 'une absence'], correct: 0, why: 'Nos avis, différant sur ce point. EN: diverging opinions.' },
    { q: 'Cinquième phrase : quelle école a-t-elle choisie ?', opts: ['une école d’ingénieurs', 'une école de commerce'], correct: 0, why: 'Elle excellait en maths. EN: engineering.' },
    { q: 'Septième phrase : qu’est-ce qui inquiète les ménages ?', opts: ['le prix du pétrole', 'le prix des loyers'], correct: 0, why: 'Le pétrole, qui influe sur tous les prix. EN: oil prices.' },
    { q: 'Neuvième phrase : que reçoivent les adhérents ?', opts: ['la revue', 'une réduction'], correct: 0, why: 'La revue, chaque trimestre. EN: the magazine.' },
    { q: 'Dernière phrase : combien de personnes le fabricant emploie-t-il ?', opts: ['deux cents', 'deux mille'], correct: 0, why: 'Deux cents personnes. EN: two hundred.' },
  ],
  audio: REC('rec-b2-13-ent-ecoute'),
  say: REFRAME,
  terms: ['paires', 'noms'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-paires',
  title: 'Le a du verbe, le e de la qualité',
  frSub: 'Précédant, précédent, et les noms',
  hint: 'Quatre cartes. Les deux dernières sont des noms.',
  audio: REC('rec-b2-13-ent'),
  say: REFRAME,
  terms: ['paires', 'noms'],
  cards: [
    {
      head: 'Le participe garde -ant', label: 'précédant',
      fr: fr(E(1738)), sub: rsOf(E(1738)),
      body: "Précéder les examens : le participe a un complément et garde -ant, comme tous les participes présents, sans exception. EN: every present participle ends in -ant.",
    },
    {
      head: 'L’adjectif prend -ent', label: 'précédent',
      fr: fr(E(1739)), sub: rsOf(E(1739)),
      body: "La semaine précédente : une qualité, accordée, et en -ent. Même chose pour différent, négligent, excellent, influent, équivalent. Certains acceptent aussi un complément : une somme équivalente à deux mois de salaire, excellente en maths. Là, l'adjectif et le participe sont justes tous les deux. EN: the adjective takes -ent; with à or en after it, both forms can be right.",
    },
    {
      head: 'Le nom aussi', label: 'adhérent, président',
      fr: fr(E(1751)), sub: rsOf(E(1751)),
      body: "Les adhérents, le président, un précédent : ces noms prennent l'orthographe de l'adjectif. Le participe reste adhérant, présidant. EN: the noun is spelled like the adjective.",
    },
    {
      head: 'Fabricant, un nom', label: '-cant',
      fr: fr(E(1752)), sub: rsOf(E(1752)),
      body: "Fabricant est un nom, sans qu : un fabricant de vélos. Le participe, lui, s'écrit fabriquant : une entreprise fabriquant des vélos. EN: fabricant (noun), fabriquant (participle).",
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: '-ant ou -ent',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('-ant : le participe', [
      it(E(1740), 'différant sur ce point'),
      it(E(1742), 'négligeant ses études'),
      it(E(1744), 'excellant en mathématiques'),
      it(E(1748), 'équivalant à deux mois'),
    ], chk('Qu’ont en commun ces quatre formes ?',
      ['un complément : ce sont des participes en -ant', 'elles sont toutes au féminin'], 0,
      'Chacune a sa suite de verbe : un participe, en -ant. EN: participles, in -ant.')),
    grp('-ent : l’adjectif ou le nom', [
      it(E(1741), 'très différents'),
      it(E(1743), 'un employé négligent'),
      it(E(1746), 'très influent'),
      it(E(1749), 'équivalents'),
    ], chk('« Ces deux diplômes sont … »',
      ['équivalents', 'équivalants'], 0,
      'Une qualité, après être : l’adjectif, en -ent. EN: équivalents.')),
    ctl('Le nom', '« Les … reçoivent la revue. » (les membres du club)',
      ['adhérents', 'adhérants'], 0,
      'Un nom : l’orthographe de l’adjectif, en -ent. EN: adhérents.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['paires', 'noms'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Des noms, et leurs participes',
  frSub: 'Adhérent, président, fabricant, précédent',
  examples: [
    ex(E(1751), 'les adhérents : les membres, un nom'),
    ex(E(1750), 'adhérant à l’association : le participe, avec son complément'),
    ex(E(1754), 'la présidente, présidant : le nom, puis le participe'),
    ex('fr.b1.maison.076', 'le locataire précédent : l’adjectif'),
    ex('fr.b2.strategies-de-comprehension.1402', `un fabricant : le nom, déjà dans ${LECTURE_REF}`),
    ex(E(1753), 'fabriquant des vélos : le participe'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['noms'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de a et de e',
  errors: [
    {
      wrong: "La semaine précédent les examens, la bibliothèque ouvre jusqu'à minuit.",
      right: fr(E(1738)),
      why: "Normal : tu as vu la semaine précédente. Mais ici, la forme a un complément, les examens : c'est le participe, en -ant. EN: an object, so -ant.",
    },
    {
      wrong: 'Nous avons des avis très différants.',
      right: fr(E(1741)),
      why: "Normal : le verbe est différer, et son participe différant. Mais très différents dit une qualité : l'adjectif, en -ent. EN: the adjective is différent.",
    },
    {
      wrong: "C'est un homme politique très influant.",
      right: fr(E(1746)),
      why: "Normal : le verbe s'écrit influer, et son participe influant. Mais très influent est une qualité : l'adjectif, en -ent. EN: influent.",
    },
    {
      wrong: 'Les adhérants reçoivent la revue chaque trimestre.',
      right: fr(E(1751)),
      why: "Normal : adhérer donne adhérant. Mais les adhérents, ce sont des personnes : un nom, en -ent. EN: the noun is adhérent.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['paires', 'noms'],
};

const A9_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a9-flash',
  layer: 'core',
  title: 'Huit formes en -ant ou en -ent',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'the previous week', back: 'la semaine précédente', say: fr(E(1739)) },
    { front: 'in the week before the exams', back: 'la semaine précédant les examens', say: fr(E(1738)) },
    { front: 'very different', back: 'très différents', say: fr(E(1741)) },
    { front: 'neglecting', back: 'négligeant', say: fr(E(1742)) },
    { front: 'careless', back: 'négligent', say: fr(E(1743)) },
    { front: 'excellent results', back: 'd’excellents résultats', say: fr(E(1745)) },
    { front: 'influential', back: 'influent', say: fr(E(1746)) },
    { front: 'the members', back: 'les adhérents', say: fr(E(1751)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['paires', 'noms'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Choisir : la lettre du club', TEXTE_A9, [
  { q: 'Deux cents (adhérants ou adhérents).', a: "Adhérents : des personnes, les membres du club. C'est un nom, en -ent." },
  { q: 'La semaine (précédant ou précédent) l’assemblée ; le (présidant ou président).', a: "Précédant l'assemblée : un complément, donc le participe. Le président : un nom." },
  { q: 'Les membres (adhérant ou adhérent) au club avant mars.', a: "Adhérant au club : le participe, avec son complément. Ici, ce n'est pas un nom." },
  { q: 'Les avis (différants ou différents) ; le bureau, (négligeant ou négligent) rarement l’avis des membres.', a: "Différents : une qualité, après être, donc l'adjectif. Négligeant rarement l'avis des membres : un complément d'objet et un adverbe, donc le participe, en -ant." },
], 'rec-b2-13-texte-a9', ['paires', 'noms']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('-ant', 'Le participe présent se termine…',
    ['toujours en -ant', 'parfois en -ent'], 0,
    'Sans exception : -ant. EN: always -ant.'),
  ctl('-ent', '« Des goûts très … »',
    ['différents', 'différants'], 0,
    'Très : l’adjectif, en -ent. EN: différents.'),
  ctl('Le nom', '« Un … de vélos » (l’entreprise)',
    ['fabricant', 'fabriquant'], 0,
    'Un nom : fabricant, sans qu. EN: fabricant.'),
], ['paires', 'noms']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: '-ant ou -ent, et les noms',
    opener: {
      line: "La semaine précédant les examens, la semaine précédente : ici une seule lettre dit si la forme fait une action ou nomme une qualité. EN: The week before the exams, the previous week: here one letter tells you whether the form acts or names a quality.",
      imageRef: 'lessons/participe-adjectif/act09.jpg',
    },
    sections: [],
    milestone: "Tu écris -ant pour le participe, -ent pour l'adjectif et le nom, de précédent à adhérent, et tu reconnais les noms parmi les paires. EN: You can spell the -ant/-ent pairs and recognise the nouns.",
    estScreens: 38, restPoints: ['a9-cartes', 'a9-erreurs'],
  },
  sections: [A9_ECOUTE, A9_CARTES, A9_CONSTRUIRE, A9_EXEMPLES, A9_ERREURS, A9_FLASH, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: LE BON NOM
 *
 *  en sortant (the subject, lesson 12 in B2) against sortant (the noun it
 *  touches); the dangling participle and its repairs; the absolute
 *  participle with its own subject.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'Le service client',
  frSub: 'Qui a reçu la réclamation',
  setting: 'Nantes, le service client d’un magasin de meubles. Ahmed écrit ses premières réponses aux clients ; Mme Roy, sa responsable, relit chaque lettre.',
  bubbles: [
    { from: 'user', fr: 'Ayant reçu votre réclamation, celle-ci a été transmise au service livraison.', en: 'Having received your complaint, it has been passed on to the delivery department.' },
    { from: 'coach', fr: 'Relis : dans ta phrase, c’est celle-ci qui a reçu la réclamation. Elle se serait reçue elle-même.', en: 'Read it again: in your sentence, celle-ci received the complaint. It would have received itself.', warn: 'Le mauvais nom' },
    { from: 'user', fr: 'Alors : ayant reçu votre réclamation, nous l’avons transmise au service livraison.', en: 'So: having received your complaint, we have passed it on to the delivery department.' },
    { from: 'coach', fr: 'Voilà. Nous avons reçu, nous avons transmis : un seul sujet.', en: 'That is it. We received, we passed on: one subject.', warn: 'Le sujet réparé' },
    { from: 'user', fr: 'Et j’ai croisé la cliente sortant du magasin : c’est juste aussi.', en: 'And I ran into the customer coming out of the shop: that is right too.' },
    { from: 'coach', fr: 'C’est juste, mais alors c’est elle qui sortait. Si c’était toi, il fallait en sortant.', en: 'It is right, but then she was the one coming out. If it was you, you needed en sortant.', warn: 'Participe ou gérondif' },
  ],
  closing: { fr: 'Le participe va au nom qu’il touche ; le gérondif, au sujet.', en: 'The participle goes with the noun it touches; the gérondif, with the subject.' },
  audio: REC('rec-b2-13-ahmed'),
  say: REFRAME,
  terms: ['sujet', 'gerondif'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sujet',
  title: 'En sortant, sortant',
  frSub: 'Le sujet ou le nom le plus proche',
  hint: 'Quatre cartes. La dernière a son propre sujet.',
  audio: REC('rec-b2-13-sujet'),
  say: REFRAME,
  terms: ['sujet', 'gerondif'],
  cards: [
    {
      head: 'En sortant', label: Cap(GERONDIF_REF),
      fr: fr(G(1745)), sub: rsOf(G(1745)),
      body: `« ${B212_REFRAME} » En sortant : c'est moi, le sujet, qui sors du métro. EN: ${B212_REFRAME_EN}`,
    },
    {
      head: 'Sortant, après un nom', label: 'le participe',
      fr: fr(E(1760)), sub: rsOf(E(1760)),
      body: "Sans en, le participe se rattache au nom qu'il touche : Paul. C'est Paul qui sortait, comme dans j'ai croisé Paul qui sortait du métro. EN: without en, the nearest noun.",
    },
    {
      head: 'Sortant, en tête', label: 'le sujet',
      fr: fr(E(1761)), sub: rsOf(E(1761)),
      body: "En tête de phrase, le participe prend le sujet du verbe principal : c'est moi qui sortais. La place change tout. EN: at the head, the main subject.",
    },
    {
      head: 'Son propre sujet', label: 'le participe absolu',
      fr: fr(E(1764)), sub: rsOf(E(1764)),
      body: "Le musée étant fermé : le participe a ici son propre sujet, le musée. C'est correct, et très écrit : comme le musée est fermé. EN: a participle with its own subject is fine.",
    },
  ],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-trier',
  layer: 'core',
  size: 'lg',
  title: 'Qui fait l’action',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Qui sort du métro ?', [
      it(G(1745), 'en sortant : moi'),
      it(E(1760), 'sortant : Paul'),
      it(E(1761), 'sortant, en tête : moi'),
      it(G(1746), 'qui sortait : Paul'),
    ], chk('« J’ai croisé Paul sortant du métro. » Qui sortait ?',
      ['Paul', 'moi'], 0,
      'Le participe se rattache au nom le plus proche : Paul. EN: Paul.')),
    grp('Réparé', [
      it(E(1762), 'nous avons reçu, nous avons lu'),
      it(E(1763), 'une relative à la place'),
      it(E(1766), 'je, qui habite loin'),
      it(E(1767), 'comme j’habite loin'),
    ], chk('« Habitant loin, le bus est pratique. » Que dit la phrase, à la lettre ?',
      ['que le bus habite loin', 'que j’habite loin'], 0,
      'En tête, le participe prend le sujet : le bus. EN: the bus lives far away.')),
    ctl('Le participe absolu', '« La pluie ne cessant pas, le match a été reporté. » Est-ce correct ?',
      ['oui : la pluie est le sujet du participe', 'non : le match ne cesse pas'], 0,
      'Le participe a ici son propre sujet, la pluie. EN: it has its own subject.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet', 'gerondif'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui fait l’action, à l’oreille',
  frSub: 'Neuf phrases, un nom à chaque fois',
  lines: [
    ln(G(1745)), ln(G(1746)), ln(E(1760)), ln(E(1761)), ln(E(1764)),
    ln(E(1765)), ln(E(1770)), ln(E(1771)), ln(E(1772)),
  ],
  questions: [
    { q: 'Première phrase : qui sortait du métro ?', opts: ['moi', 'Paul'], correct: 0, why: 'En sortant : le sujet, moi. EN: me.' },
    { q: 'Troisième phrase : qui sortait du métro ?', opts: ['Paul', 'moi'], correct: 0, why: 'Sortant, juste après Paul : Paul. EN: Paul.' },
    { q: 'Cinquième phrase : pourquoi ira-t-on mardi ?', opts: ['le musée est fermé le lundi', 'il pleuvra lundi'], correct: 0, why: 'Le musée étant fermé le lundi. EN: closed on Mondays.' },
    { q: 'Sixième phrase : pourquoi le match a-t-il été reporté ?', opts: ['à cause de la pluie', 'à cause d’une grève'], correct: 0, why: 'La pluie ne cessant pas. EN: the rain.' },
    { q: 'Septième phrase : qui courait dans la cour ?', opts: ['les enfants', 'nous'], correct: 0, why: 'Courant, après enfants : les enfants. EN: the children.' },
    { q: 'Dernière phrase : qu’avons-nous fait après le départ des invités ?', opts: ['rangé le salon', 'fait la vaisselle'], correct: 0, why: 'Nous avons rangé le salon. EN: tidied the living room.' },
  ],
  audio: REC('rec-b2-13-sujet-ecoute'),
  say: REFRAME,
  terms: ['sujet'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Des participes sans le bon nom',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le participe va au nom qu’il touche',
    body: "En tête, le participe prend le sujet du verbe principal ; après un nom, il décrit ce nom. S'il n'a pas le bon nom, donne-lui son sujet, ou passe à comme, quand ou qui. EN: fix the subject or use a clause.",
  },
  cards: [
    trap(E(1762), 'la lettre', 'Ayant reçu votre lettre, celle-ci a retenu toute notre attention.', 'La lettre ne s’est pas reçue elle-même : nous. EN: we received it.'),
    trap(E(1766), 'le bus', 'Habitant loin, le bus est pratique.', 'Le bus n’habite nulle part : je. EN: I live far away.'),
    trap(E(1771), 'le quai', 'Voyant son train partir, le quai était déjà vide.', 'C’est elle qui voit : elle doit être le sujet. EN: she sees.'),
    trap(E(1764), 'le musée', 'Étant fermé le lundi, nous irons mardi au musée.', 'Nous ne sommes pas fermés : le musée. Donne-lui son sujet. EN: the museum is closed.'),
    trap(E(1659), 'la visite', 'Connaissant bien la ville, la visite a été facile.', 'La visite ne connaît pas la ville : Karim. EN: Karim knows the city.'),
    trap(E(1670), 'le week-end', 'Ayant fini son rapport, le week-end a pu commencer.', 'Le week-end n’a rien fini : elle. EN: she finished.'),
  ],
  drill: [
    { promptSay: 'Ayant reçu votre lettre, …', opts: ['nous l’avons lue avec attention', 'elle a été lue avec attention'], correct: 0 },
    { promptSay: 'C’est Paul qui sortait. J’ai croisé Paul … du métro.', opts: ['sortant', 'en sortant'], correct: 0 },
    { promptSay: 'C’est moi qui sortais. J’ai croisé Paul … du métro.', opts: ['sortant', 'en sortant'], correct: 1 },
    { promptSay: 'Habitant loin, …', opts: ['je trouve le bus pratique', 'le bus est pratique'], correct: 0 },
    { promptSay: '… fermé le lundi, nous irons mardi.', opts: ['Le musée étant', 'Étant'], correct: 0 },
    { promptSay: 'Elle voit son train partir. Voyant son train partir, … a couru sur le quai.', opts: ['le contrôleur', 'elle'], correct: 1 },
    { promptSay: 'La pluie ne … pas, le match a été reporté.', opts: ['cessant', 'cessante'], correct: 0 },
    { promptSay: 'On voyait des enfants … dans la cour.', opts: ['courants', 'courant'], correct: 1 },
  ],
  steps: STEPS('Le participe va au nom qu’il touche', 'Ce que la phrase dit à la lettre'),
  audio: REC('rec-b2-13-piege-sujet'),
  say: REFRAME,
  terms: ['sujet'],
};

const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-hacks',
  layer: 'core',
  sheetId: 'sheet-sujet',
  title: 'Trois astuces pour le bon nom',
  hacks: [
    { hack: 'Avant d’ouvrir une phrase par un participe, lis le sujet qui suit la virgule.', why: "C'est lui qui fera l'action en -ant. Si c'est une lettre, un bus ou un dossier, la phrase dit une absurdité. EN: read the subject after the comma." },
    { hack: 'Pour parler de toi après un nom, mets en.', why: "J'ai croisé Paul en sortant : toi. Sans en, c'est Paul qui sort. EN: en brings it back to the subject." },
    { hack: 'Dans une lettre formelle, fais suivre le participe de nous ou de je.', why: "Ayant reçu votre dossier, nous… : la formule est sûre, et le sujet est le bon. EN: in a formal letter, follow it with je or nous." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet', 'gerondif'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Corriger : la réponse du service client', TEXTE_A10, [
  { q: 'Première erreur : « ayant bien reçu votre réclamation, celle-ci a été transmise ».', a: "La réclamation ne s'est pas reçue elle-même. Ayant bien reçu votre réclamation, nous l'avons transmise à notre service livraison." },
  { q: 'Deuxième erreur : « habitant au cinquième étage, votre canapé sera livré… ».', a: "Le canapé n'habite pas au cinquième. Comme vous habitez au cinquième étage sans ascenseur, votre canapé sera livré par deux personnes." },
  { q: 'Troisième erreur : « en appelant notre entrepôt, un nouveau créneau vous sera proposé ».', a: "Un gérondif, lui aussi sans le bon sujet. Si vous appelez notre entrepôt, on vous proposera un nouveau créneau ; ou : en appelant notre entrepôt, vous obtiendrez un nouveau créneau." },
  { q: 'Et « restant à votre disposition, nous vous prions… » ?', a: "C'est juste : nous restons à votre disposition, et nous vous prions. Le participe a le bon sujet." },
], 'rec-b2-13-texte-a10', ['sujet', 'gerondif']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le gérondif', '« J’ai croisé Paul en sortant du métro. » Qui sortait ?',
    ['moi', 'Paul'], 0,
    'En sortant : le sujet. EN: me.'),
  ctl('Le participe', '« J’ai croisé Paul sortant du métro. » Qui sortait ?',
    ['Paul', 'moi'], 0,
    'Sortant : le nom le plus proche. EN: Paul.'),
  ctl('Réparer', '« Habitant loin, le bus est pratique » devient…',
    ['Comme j’habite loin, le bus est pratique.', 'Habitant loin, le bus m’est pratique.'], 0,
    'Comme + un sujet : le bon nom revient. EN: use comme.'),
], ['sujet', 'gerondif']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Le bon nom',
    opener: {
      line: "J'ai croisé Paul sortant du métro, et c'était lui qui sortait : ici tu apprends à quel nom s'accroche un participe. EN: I ran into Paul coming out of the metro, and he was the one coming out: here you learn which noun a participle hooks onto.",
      imageRef: 'lessons/participe-adjectif/act10.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre sortant et en sortant selon qui fait l'action, et tu répares un participe qui n'a pas le bon nom. EN: You can choose between participle and gérondif and repair a dangling participle.",
    estScreens: 38, restPoints: ['a10-trier', 'a10-piege'],
  },
  sections: [A10_HISTOIRE, A10_CARTES, A10_TRIER, A10_ECOUTE, A10_PIEGE, A10_HACKS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: TA CRITIQUE, TON ANNONCE
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La critique que tu vas imiter',
  frSub: 'Une exposition à Québec',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'aquarelles', en: 'watercolours', note: 'Des peintures légères, faites à l’eau.' },
    { word: 'aboutie', en: 'accomplished', note: 'Terminée, réussie jusqu’au bout.' },
    { word: 'jargon', en: 'jargon', note: 'Les mots de spécialistes, que le public ne comprend pas.' },
  ],
  questions: [
    { q: 'Global : de quel genre de texte s’agit-il, et pour qui est-il écrit ?', a: "Une critique d'exposition, pour des lecteurs qui hésitent à y aller : familles, amateurs de photo, curieux." },
    { q: 'Détail : quelle salle le critique préfère-t-il ?', a: "La quatrième, consacrée aux communautés vivant sur les rives : la plus émouvante." },
    { q: 'Forme : relève deux participes présents et dis ce qu’ils remplacent.', a: "Réunissant une centaine d'œuvres (qui réunit), montrant les glaces (qui montrent), accompagnant les œuvres (qui accompagnent), vivant sur les rives (qui vivent), cherchant à mieux comprendre (qui cherchent)." },
    { q: 'Forme : « aux visages souriants ou fatigués » : pourquoi souriants prend-il un s ?', a: "C'est un adjectif : il dit une qualité des visages, sans complément, et s'accorde avec eux, comme fatigués." },
    { q: 'Inférence : que reproche le critique à la dernière salle ?', a: "D'être un peu vide et moins aboutie que les précédentes, avec un éclairage trop faible." },
    { q: 'Position : comment sait-on que l’avis reste positif malgré les réserves ?', a: "Par la conclusion (une réussite, je la recommande) et par les adjectifs : vivant, saisissantes, émouvante, intelligente." },
  ],
  audio: REC('rec-b2-13-modele'),
  say: REFRAME,
  terms: ['adjectif', 'participe'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Décrire avec le participe, juger avec l’adjectif',
  steps: [
    "Choisis ton texte : une critique (livre, film, exposition) ou une offre d'emploi. EN: choose a review or a job advert.",
    "Présente l'objet en une phrase : le titre et le lieu, ou le poste et l'organisme. EN: introduce what you are writing about.",
    "Décris avec des participes présents : une exposition réunissant…, des candidats ayant… EN: describe with participles.",
    "Juge avec des adjectifs verbaux accordés : passionnante, fatigants, convaincante. EN: judge with agreed verbal adjectives.",
    "Relis : chaque participe a-t-il le bon nom, chaque adjectif son accord, chaque paire sa bonne orthographe ? EN: check nouns, agreement and pairs.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe', 'adjectif', 'paires'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Quatre phrases que ton texte contient',
  cases: [
    { situation: 'Tu présentes une exposition', fr: fr(E(1777)), en: en(E(1777)) },
    { situation: 'Tu juges un livre', fr: fr(E(1776)), en: en(E(1776)) },
    { situation: 'Tu nuances ta critique', fr: fr(E(1778)), en: en(E(1778)) },
    { situation: 'Tu fixes une règle dans une annonce', fr: fr(E(1786)), en: en(E(1786)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adjectif', 'registre'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'L’appel de Camille',
  frSub: 'Six tours, à voix haute',
  setting: 'Ton amie Camille tient une petite librairie à Namur. Elle doit écrire une annonce pour recruter un libraire et une critique pour sa lettre du mois, et elle t’appelle pour que tu l’aides.',
  turns: [
    {
      ai: 'Pour l’annonce, comment je dis « des gens qui aiment lire », en plus soigné ?', en: 'For the advert, how do I say "people who like reading" more formally?',
      user: 'Écris : des candidats aimant la lecture et sachant conseiller les clients.',
      userEn: 'Write: candidates who love reading and know how to advise customers. (Two participles, no agreement.)',
      alts: [
        { fr: 'Des personnes passionnées de lecture et sachant conseiller.', en: 'People passionate about reading and able to advise. (A past participle, then a present participle.)' },
        { fr: 'Des candidats qui aiment lire, si tu veux rester simple.', en: 'Candidates who like reading, if you want to keep it simple. (The relative clause: also right.)' },
      ],
    },
    {
      ai: 'Et le poste, je le décris comment ?', en: 'And the job, how do I describe it?',
      user: 'C’est un poste stimulant mais exigeant, comprenant deux samedis par mois.',
      userEn: 'It is a stimulating but demanding job, including two Saturdays a month. (Two adjectives, then a participle with its object.)',
      alts: [
        { fr: 'Un poste passionnant, avec deux samedis par mois.', en: 'A fascinating job, with two Saturdays a month.' },
        { fr: 'Un poste exigeant une grande disponibilité le samedi.', en: 'A job requiring a lot of availability on Saturdays. (Exigeant with an object: a participle.)' },
      ],
    },
    {
      ai: 'Pour la critique, le roman est long au milieu. Je le dis comment, sans être méchante ?', en: 'For the review, the novel drags in the middle. How do I say it without being mean?',
      user: 'Dis que le milieu est un peu lent, mais que la fin est bouleversante.',
      userEn: 'Say that the middle is a bit slow, but that the ending is overwhelming. (Bouleversante: an adjective, agreed with fin.)',
      alts: [
        { fr: 'Le milieu, un peu fatigant, n’enlève rien à la fin.', en: 'The middle, a little tiring, takes nothing away from the ending. (Fatigant, without u.)' },
        { fr: 'Quelques longueurs, mais une fin émouvante.', en: 'A few slow passages, but a moving ending.' },
      ],
    },
    {
      ai: 'J’ai écrit : les personnages sont convainquants. C’est bon ?', en: 'I wrote: the characters are convainquants. Is that right?',
      user: 'Non, écris convaincants, avec un c : c’est un adjectif.',
      userEn: 'No, write convaincants with a c: it is an adjective. (The adjective drops the qu.)',
      alts: [
        { fr: 'Avec très devant, ce serait très convaincants : l’adjectif, avec un c.', en: 'With très in front it would be très convaincants: the adjective, with a c.' },
        { fr: 'Convainquant, avec qu, c’est seulement quand il y a un complément.', en: 'Convainquant, with qu, is only when there is an object.' },
      ],
    },
    {
      ai: 'Et « ayant lu ce livre, il m’a beaucoup plu », ça va ?', en: 'And "having read this book, it really pleased me", is that all right?',
      user: 'Non : ce n’est pas le livre qui a lu. Écris : ayant lu ce livre, je l’ai beaucoup aimé.',
      userEn: 'No: the book did not do the reading. Write: having read this book, I really liked it. (The participle needs the right subject.)',
      alts: [
        { fr: 'Dis plutôt : j’ai lu ce livre, et il m’a beaucoup plu.', en: 'Say instead: I read this book and I really liked it. (Two clauses, no participle.)' },
        { fr: 'Ou : après l’avoir lu, je peux dire qu’il m’a beaucoup plu.', en: 'Or: after reading it, I can say I really liked it.' },
      ],
    },
    {
      ai: 'Merci ! Un dernier conseil pour la fin de l’annonce ?', en: 'Thanks! One last tip for the end of the advert?',
      user: 'Ajoute : les candidatures arrivant après le 30 avril ne seront pas étudiées.',
      userEn: 'Add: applications arriving after 30 April will not be considered. (A participle, the register of a written notice.)',
      alts: [
        { fr: 'Les personnes intéressées enverront leur CV avant la fin avril.', en: 'Interested candidates should send their CV before the end of April.' },
        { fr: 'Nous ne contacterons que les personnes retenues.', en: 'We will only contact the shortlisted candidates.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe', 'adjectif', 'sujet'],
};

const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Ta critique ou ton annonce',
  frSub: 'Mission écrite, format B2',
  brief: "Choisis l'un des deux textes. Soit une critique pour la rubrique « Vos avis » d'un site culturel : un livre, un film ou une exposition, présenté et jugé avec précision. Soit une offre d'emploi formelle pour un organisme que tu inventes : le poste, le profil, ce que vous offrez et comment postuler.",
  briefEn: 'Choose one of the two texts. Either a review for the « Your views » section of a cultural website: a book, a film or an exhibition, presented and judged precisely. Or a formal job advert for an organisation you invent: the job, the profile, what you offer and how to apply.',
  produce: "Écris un texte de 180 à 250 mots : au moins quatre adjectifs verbaux accordés pour juger ou décrire, au moins trois participes présents dont un participe composé (ayant ou étant), et au moins une forme d'une paire (fatigant, convaincant, précédant, différent, excellent…) bien orthographiée. Chaque participe se rattache au bon nom.",
  responseSpec: { kind: 'text', minWords: 180, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : Un vrai texte du genre choisi : une critique qui présente l'œuvre, la juge avec des arguments et la recommande ou non ; ou une annonce complète (poste, profil, offre, candidature). Entre 180 et 250 mots.",
          '2 : Le genre est reconnaissable, mais une partie manque (pas de recommandation, pas de façon de postuler) ou la longueur sort un peu des limites.',
          '1 : Une suite de phrases sans genre clair, ou un texte beaucoup trop court.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          "3 : Un plan clair (présentation, points forts, réserves, conclusion ; ou poste, profil, offre, candidature), des liens entre les parties, et des participes qui se rattachent tous au bon nom.",
          '2 : Le texte se suit, mais un participe est mal rattaché ou deux parties se mélangent.',
          '1 : On ne sait pas toujours de quoi ou de qui parle chaque participe.',
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          "2 : Des adjectifs verbaux variés pour juger (pas seulement intéressant), des participes présents simples et un participe composé, et au moins une paire bien choisie.",
          '1 : Toujours les mêmes formes, ou moins de quatre adjectifs verbaux et de trois participes.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          "2 : Les adjectifs verbaux s'accordent, les participes ne s'accordent jamais, les paires sont bien écrites (fatigant, convaincant, précédant les…), et chaque participe a le bon nom.",
          "1 : Des erreurs fréquentes (parlants, fatiguante, un participe rattaché au mauvais nom) gênent parfois la lecture.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          "2 : Le ton convient au genre : une critique personnelle mais argumentée, ou une annonce formelle et précise, avec le participe là où l'écrit l'attend.",
          '1 : Le texte sonne comme une conversation (genre, trop bien, j’ai kiffé) ou comme une liste sans phrases.',
        ],
      },
    ],
  },
  scaffold: [
    'Voilà un',
    'Ayant lu',
    'Réunissant',
    'Seul regret :',
    'Je le recommande aux lecteurs',
    'Nous recherchons une personne',
    'Les candidats ayant',
    'Les candidatures arrivant',
  ],
  modelAnswer: "Offre d'emploi : responsable de salle, café-librairie Les Pages, Liège. Notre café-librairie, ouvert il y a trois ans dans le quartier d'Outremeuse, recrute un ou une responsable de salle à temps plein. Le poste. Vous accueillerez une clientèle fidèle et exigeante : des étudiants, des familles et des habitués venant lire le journal chaque matin. Vous organiserez aussi nos soirées littéraires, réunissant chaque mois un auteur et une quarantaine de lecteurs. C'est un poste vivant et varié, mais parfois fatigant, comprenant un samedi sur deux. Le profil. Nous recherchons une personne ayant au moins deux ans d'expérience en restauration et aimant les livres autant que le café. Les candidats ayant déjà travaillé en librairie seront avantagés. Étant souvent seul en salle le matin, vous devrez savoir prendre des décisions rapides. Vous êtes souriant, organisé et convaincant quand il faut conseiller un livre. Ce que nous offrons. Une équipe accueillante, des horaires fixes, un salaire correspondant à votre expérience et des réductions intéressantes sur tout le catalogue. Pour postuler. Les personnes souhaitant nous rejoindre enverront un CV et quelques lignes sur leur livre préféré avant le 30 avril. Les candidatures arrivant après cette date ne seront pas étudiées. Les entretiens auront lieu la semaine précédant l'ouverture de la terrasse.\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : une annonce complète, avec le poste, le profil, ce que l'on offre et la façon de postuler.\n2. Cohérence : quatre parties annoncées par un titre ; chaque participe a le bon nom (des habitués venant, nos soirées réunissant, étant seul : vous).\n3. Étendue : des adjectifs verbaux pour juger (exigeante, vivant, fatigant, souriant, convaincant, accueillante, intéressantes) et des participes pour décrire (venant, réunissant, comprenant, ayant, aimant, correspondant, souhaitant, arrivant), dont un participe composé (ayant déjà travaillé).\n4. Correction : les paires sont justes (fatigant, convaincant, précédant l'ouverture) ; aucun participe ne s'accorde, tous les adjectifs s'accordent.\n5. Registre : une annonce formelle, en vous, avec le participe là où l'écrit l'attend.",
  modelAnswerEn: "Job advert: floor manager, Les Pages café-bookshop, Liège. Our café-bookshop, which opened three years ago in the Outremeuse district, is recruiting a full-time floor manager. The job. You will welcome a loyal and demanding clientele: students, families and regulars who come in to read the paper every morning. You will also organise our literary evenings, which bring together an author and some forty readers each month. It is a lively and varied job, but sometimes tiring, including every other Saturday. The profile. We are looking for someone with at least two years' experience in catering who loves books as much as coffee. Candidates who have already worked in a bookshop will have an advantage. As you will often be alone on the floor in the morning, you must be able to make quick decisions. You are cheerful, organised and convincing when it comes to recommending a book. What we offer. A welcoming team, fixed hours, a salary matching your experience and attractive discounts on the whole catalogue. How to apply. Anyone wishing to join us should send a CV and a few lines about their favourite book before 30 April. Applications arriving after that date will not be considered. Interviews will take place in the week before the terrace opens. The marker's notes (not counted): 1. Task: a complete advert, with the job, the profile, the offer and how to apply. 2. Coherence: four headed parts; every participle has the right noun. 3. Range: verbal adjectives to judge and participles to describe, including one perfect participle. 4. Accuracy: the pairs are right (fatigant, convaincant, précédant l'ouverture); no participle agrees, every adjective does. 5. Register: a formal advert, in vous, with the participle where writing expects it.",
  watchFor: [
    { pattern: 'An agreed present participle (des candidats parlants anglais, une dame portante un chapeau).', criterion: 'correction', feedback: 'Un participe présent ne s’accorde jamais : parlant, portant.', ref: 'a2-erreurs' },
    { pattern: 'A verbal adjective left without agreement (une soirée fatigant, des chapitres passionnant).', criterion: 'correction', feedback: 'L’adjectif verbal s’accorde : fatigante, passionnants.', ref: 'a6-erreurs' },
    { pattern: 'A -quant / -cant or -guant / -gant pair swapped (une journée fatiguante, des arguments convainquants).', criterion: 'correction', feedback: 'L’adjectif prend -cant ou -gant, le participe garde le verbe : fatigante, convaincants, convainquant les sceptiques.', ref: 'a8-piege' },
    { pattern: 'An -ant / -ent pair swapped, or a noun spelled as a participle (la semaine précédent les examens, les adhérants, un fabriquant).', criterion: 'correction', feedback: 'Le participe garde -ant ; l’adjectif et le nom prennent -ent : précédant les examens, les adhérents, un fabricant.', ref: 'a9-erreurs' },
    { pattern: 'A dangling participle: it attaches to the wrong noun (ayant lu ce livre, il m’a plu).', criterion: 'coherence', feedback: 'Donne au participe le bon sujet (ayant lu ce livre, je l’ai aimé) ou passe à comme, quand, qui.', ref: 'a10-piege' },
    { pattern: 'The wrong auxiliary or agreement in the participe composé (ayant arrivé, étant fini, s’étant trompé for a woman).', criterion: 'correction', feedback: 'Le même auxiliaire qu’au passé composé : étant arrivée, ayant fini ; avec être, l’accord.', ref: 'a5-erreurs' },
    { pattern: 'En added before a participle that describes a noun, or qui followed by an -ant form (une personne en sachant conduire, qui possédant).', criterion: 'correction', feedback: 'Pas de en quand la forme décrit un nom ; qui + verbe conjugué, ou -ant seul.', ref: 'a2-erreurs' },
    { pattern: 'A gérondif where a participle is meant, which changes who does the action (j’ai vu la cliente en sortant, when she was leaving).', criterion: 'coherence', feedback: 'En renvoie au sujet ; pour décrire l’autre personne, écris sortant ou qui sortait.', ref: 'a10-cartes' },
    { pattern: 'Participles piled into every sentence, or a spoken tone in a formal advert (on cherche des gens qui…, genre).', criterion: 'registre', feedback: 'Un participe par phrase suffit souvent ; une annonce s’écrit comme un avis, pas comme une conversation.', ref: 'a3-hacks' },
    { pattern: 'Fewer than four verbal adjectives, only intéressant or génial, or no participe composé.', criterion: 'etendue', feedback: 'Varie les adjectifs (passionnant, émouvant, décevant, stimulant) et ajoute un ayant ou étant + participe.', ref: 'a11-plan' },
    { pattern: 'A review with no judgement or recommendation, or an advert with no way to apply, or a body outside 180 to 250 words.', criterion: 'tache', feedback: 'Termine par une recommandation, ou par la façon de postuler.', ref: 'a11-plan' },
    { pattern: 'The parts of the review or the advert run together, with no plan and no links.', criterion: 'coherence', feedback: 'Un paragraphe par partie : présentation, points forts, réserves, conclusion ; ou poste, profil, offre, candidature.', ref: 'a11-lecture' },
  ],
  graderNotes: [
    'Count the words of the body only; a title, a greeting and a signature do not count. 180 to 250 with 10% tolerance (162 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'Judge each -ant form by its ROLE first: an object, an adverb placed after it or a negation make it a participle (invariable); très, a use after être or a pure quality make it an adjective (agreed). A qui + verbe paraphrase alone does not decide (une soirée qui fatigue is fine French for an adjective). Some adjectives take a complement (excellente en maths, une somme équivalente à, des avis différents sur ce point): accept the agreed adjective there too. Where both readings are defensible (des lumières clignotant ou clignotantes toute la nuit), accept either.',
    'An agreement error or a swapped spelling pair costs one « correction » point once, not per occurrence; a dangling participle costs « coherence » only if it actually misleads.',
    'Relative clauses (qui + verbe) are always correct: never score them as errors, but they earn no range credit. In a formal advert, reward the participle where the notice register expects it.',
    'The absolute participle with its own subject (le musée étant fermé, les invités étant partis) is correct: never score it as dangling. A letter formula is correct when the next subject is je or nous (Restant à votre disposition, nous…).',
    'Fixed phrases (étant donné que) and nouns (un adhérent, un fabricant, un président) count toward the spelling-pair requirement only when spelled correctly in the right role.',
    'The perfect participle with avoir follows the passé composé rule: accept agreement with a preceding direct object pronoun and do not penalise its absence.',
    'A review may be of a real or an invented work: do not check facts about real works or places.',
    'Writer and reader gender are unknown: judge agreement for internal consistency only (souriant or souriante for the writer).',
    'Accept regional vocabulary and conventions (Québec, Belgium, Switzerland, West Africa): fin de semaine, courriel, septante, CV or curriculum.',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 12 du B2 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe', 'adjectif', 'paires'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes phrases à voix haute',
  frSub: 'Le verbe qui ne bouge pas, la qualité qui s’accorde',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe', 'adjectif'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-paires',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le participe', v: 'qui + verbe, sans accord', say: fr(E(1616)),
      detail: { title: 'Le participe présent', body: "La forme en -ant sans en : elle garde sa suite de verbe et ne s'accorde jamais. EN: invariable, keeps its object.", say: fr(E(1618)) } },
    { k: 'le registre', v: 'l’avis, l’annonce, la presse', say: fr(E(1636)),
      detail: { title: 'Le registre', body: "Le participe à l'écrit ; à l'oral, qui + verbe ou ceux qui. EN: writing; speech says qui.", say: fr(E(1637)) } },
    { k: 'la cause', v: 'en tête : comme, parce que', say: fr(E(1652)),
      detail: { title: 'La cause', body: "En tête de phrase, le participe dit pourquoi, et prend le sujet du verbe principal. EN: a cause, with the main subject.", say: fr(E(1657)) } },
    { k: 'ayant, étant', v: 'fini avant ; accord avec être', say: fr(E(1670)),
      detail: { title: 'Le participe composé', body: "L'auxiliaire du passé composé ; avec étant, l'accord avec le sujet. EN: the passé composé auxiliary.", say: fr(E(1671)) } },
    { k: 'l’adjectif', v: 'une qualité, accordée', say: fr(E(1687)),
      detail: { title: 'L’adjectif verbal', body: "Il accepte très, suit être et s'accorde. EN: très, être, agreement.", say: fr(E(1686)) } },
    { k: 'les paires', v: 'fatigant, convaincant, précédent', say: fr(E(1720)),
      detail: { title: 'Les paires', body: "Le participe garde le verbe (fatiguant, précédant) ; l'adjectif et le nom changent. EN: the participle keeps the verb's spelling.", say: fr(E(1738)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe', 'adjectif', 'paires'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu écris le participe présent sans en, à la place de qui + verbe, en tête de phrase pour dire la cause, et au passé avec ayant ou étant. Tu juges avec l'adjectif verbal, accordé, et tu tranches entre les deux avec très, qui + verbe, le complément et la négation. Tu écris les paires sans faute et tu rattaches chaque participe au bon nom. Le piège qui reste, c'est l'habitude : accorder parlant parce que le nom est au pluriel. Avant l'examen, relis ton texte et, pour chaque forme en -ant, demande-toi : verbe ou qualité ? EN: For every -ant form, ask: verb or quality?",
  stats: [
    { k: 'Le participe', v: 'qui + verbe, invariable' },
    { k: 'L’adjectif', v: 'une qualité, accordée' },
    { k: 'Les tests', v: 'très, qui, le complément, ne… pas' },
    { k: 'Les paires', v: 'fatigant, convaincant, précédent' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 1 to 10, a round that
 *  recycles lessons 11, 18, 25, 31 and 35 in B1 and 10 and 12 in B2 (named
 *  in each question), and an exam-format round (TCF, DELF B2 and TEF items).
 *  `fold()` strips accents, commas, apostrophes and hyphens, so every typed
 *  answer turns on a letter of agreement, a spelling (qu or c, a or e), a
 *  word or a subject. Where a rewrite has more than one natural form, every
 *  equally correct form is in `accept`. */

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

const ANT = 'Écris la forme en -ant qui convient, accordée seulement s’il le faut.';
const ORTHO = 'Écris la forme qui convient, bien orthographiée et accordée s’il le faut.';

const MESSAGE_TEF = "Mesdames et messieurs, bienvenue à bord du train à destination de Genève. Les passagers voyageant avec un enfant sont invités à embarquer en premier. Les voyageurs ne possédant pas de billet sont priés de se présenter au contrôleur. Tout bagage laissé sans surveillance sera retiré. Bon voyage.";

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-accord', label: 'Parlant, sans s', targets: ['participe-accorde'],
      questions: [
        mc('« Nous recherchons deux assistantes … anglais et espagnol. »', ['parlant', 'parlantes', 'parlants'], 0, 'Un complément (anglais) : participe, sans accord. EN: parlant.', 'a1-scene'),
        mc('« L’équipe est jeune, … et accueillante. »', ['souriante', 'souriant'], 0, 'Une qualité de l’équipe : adjectif, accordé. EN: souriante.', 'a1-reperer'),
        mc('Dans l’offre de la Maison de la culture, « un poste exigeant, comprenant des soirées » : comprenant est…', ['un participe : il a un complément', 'un adjectif accordé', 'un gérondif'], 0, 'Comprendre des soirées : un verbe, sans accord. EN: a participle.', 'a1-lecture'),
        tI(ANT, 'Les personnes (souhaiter) postuler enverront leur dossier avant la fin du mois.', fr(E(1606)), 'Souhaiter postuler : un complément, donc souhaitant. EN: souhaitant.', 'a1-reperer'),
        tI(ANT, 'Les horaires sont variables et parfois (fatiguer).', fr(E(1610)), 'Une qualité, après être : fatigants, sans u. EN: fatigants.', 'a1-reperer'),
        eS('Les employés travaillants de nuit ont droit à une prime.', fr(E(1609)), 'De nuit suit le verbe : participe, sans s. EN: travaillant.', 'a1-usages', ['Les employés qui travaillent de nuit ont droit à une prime.']),
        lC('Écoute. Les deux formes en -ant de cette phrase…', fr(E(1605)), ['s’accordent : ce sont des adjectifs', 'ne s’accordent pas : ce sont des participes'], 0, 'Souriante, accueillante : on entend le t du féminin. EN: adjectives.', 'a1-reperer'),
        lC('Écoute. Qui sera prioritaire ?', fr(E(1603)), ['les candidats qui ont une expérience à l’étranger', 'tous les candidats'], 0, 'Ayant une expérience = qui ont une expérience. EN: those with experience abroad.', 'a1-lecture'),
      ],
    },
    {
      id: 'r2-qui', label: 'Qui + verbe', targets: ['qui-verbe'],
      questions: [
        mc('« Les étudiants ayant réussi l’examen » veut dire…', ['les étudiants qui ont réussi l’examen', 'tous les étudiants, puisqu’ils ont réussi'], 0, 'Le participe restreint : seulement ceux qui ont réussi. EN: only those who passed.', 'a2-rappel'),
        mc('« Je cherche une personne qui sait conduire. » Avec un participe :', ['une personne sachant conduire', 'une personne savant conduire', 'une personne en sachant conduire'], 0, 'Sachant, sans en. EN: sachant.', 'a2-construire'),
        mc('« Les clientes … depuis une heure commencent à s’impatienter. »', ['attendant', 'attendantes', 'qui attendant'], 0, 'Participe, invariable. EN: attendant.', 'a2-erreurs'),
        tI('Remplace qui + verbe par un participe présent.', 'Nous cherchons un appartement qui donne sur la cour.', fr(E(1625)), 'Qui donne devient donnant. EN: donnant.', 'a2-table'),
        tI('Remplace qui + verbe par un participe présent.', 'Des bénévoles qui connaissent bien le quartier guideront les visiteurs.', fr(E(1624)), 'Qui connaissent devient connaissant, sans accord. EN: connaissant.', 'a2-table'),
        tI('Écris le participe présent du verbe entre parenthèses.', 'Les enfants (avoir) moins de six ans entrent gratuitement.', fr(E(1629)), 'Avoir donne ayant. EN: ayant.', 'a2-construire'),
        eS('Les voyageurs qui possédant un billet électronique peuvent embarquer.', fr(E(1621)), 'Qui + verbe conjugué, ou -ant seul. EN: possédant, or qui possèdent.', 'a2-erreurs', ['Les voyageurs qui possèdent un billet électronique peuvent embarquer.']),
        lC('Écoute. Qu’a-t-il trouvé ?', fr(E(1633)), ['un portefeuille avec deux cents euros', 'deux cents euros par terre'], 0, 'Un portefeuille contenant deux cents euros. EN: a wallet with the money in it.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-registre', label: 'L’écrit et l’oral', targets: ['registre-oral'],
      questions: [
        mc('« Les voyageurs souhaitant descendre à Lausanne… » : où lis-tu cette phrase ?', ['sur un avis ou dans une annonce enregistrée', 'dans un message à un ami'], 0, 'Le participe est la forme de l’avis. EN: a notice.', 'a3-cartes'),
        mc('Au micro, pour être naturel, tu dis…', ['Ceux qui veulent descendre à Lausanne doivent changer de train.', 'Les voyageurs souhaitants descendre à Lausanne doivent changer de train.'], 0, 'À l’oral, ceux qui veulent. EN: ceux qui veulent.', 'a3-histoire'),
        mc('Un participe présent dans une conversation est…', ['correct, mais il sonne écrit', 'une faute de grammaire'], 0, 'Aucun registre n’est faux. EN: correct, just formal.', 'a3-cartes'),
        tI('Transforme en phrase d’avis, avec un participe présent.', 'Les gens qui arrivent en retard ne pourront pas entrer.', 'Les gens arrivant en retard ne pourront pas entrer.', 'Qui arrivent devient arrivant. EN: arrivant.', 'a3-trier', ['Les personnes arrivant en retard ne pourront pas entrer.', 'Les spectateurs arrivant en retard ne pourront pas entrer.', 'Les visiteurs arrivant en retard ne pourront pas entrer.']),
        tI(ANT, "Tout objet ne (porter) pas d'étiquette sera détruit.", fr(E(1638)), 'La négation autour : participe. EN: portant.', 'a3-exemples'),
        tI(ANT, 'Les locataires (posséder) un animal doivent le déclarer.', fr(E(1645)), 'Posséder un animal : participe. EN: possédant.', 'a3-trier'),
        eS('Tout dossier arrivants après la date limite sera refusé.', fr(E(1642)), 'Participe, sans accord : arrivant. EN: arrivant.', 'a3-exemples', ['Tout dossier qui arrive après la date limite sera refusé.']),
        lC('Écoute ce fait divers. Que s’est-il passé ?', fr(E(1647)), ['les pompiers ont secouru un randonneur blessé', 'un randonneur a appelé les pompiers pour un ami'], 0, 'Un randonneur souffrant d’une fracture. EN: an injured hiker.', 'a3-exemples'),
      ],
    },
    {
      id: 'r4-cause', label: 'En tête : la cause', targets: ['cause-en-tete'],
      questions: [
        mc('« Ne sachant que faire, il a appelé sa sœur. » Même sens :', ['Comme il ne savait pas quoi faire, il a appelé sa sœur.', 'Pour savoir quoi faire, il a appelé sa sœur.', 'Bien qu’il sache quoi faire, il a appelé sa sœur.'], 0, 'La cause : comme. EN: as.', 'a4-cartes'),
        mc('« Voyant l’heure, j’ai pris un taxi. » Qui a vu l’heure ?', ['moi', 'le chauffeur'], 0, 'Le sujet du verbe principal. EN: me.', 'a4-construire'),
        mc('« Étant donné que les prix augmentent… » : étant donné que est…', ['une locution figée, comme puisque', 'un participe à transformer en qui'], 0, 'Une locution de cause. EN: a fixed phrase.', 'a4-exemples'),
        tI('Réécris la phrase en commençant par un participe présent.', "Parce qu'ils craignaient la pluie, les organisateurs ont déplacé le concert.", fr(E(1657)), 'Craignant, sans accord ; le sujet reste les organisateurs. EN: craignant.', 'a4-construire'),
        tI('Réécris la phrase en commençant par un participe présent.', 'Comme elle habite loin du centre, elle prend sa voiture tous les jours.', fr(E(1655)), 'Habitant loin du centre, elle… EN: habitant.', 'a4-construire'),
        tI('Réécris la phrase en commençant par un participe présent, à la forme négative.', "Comme il ne connaissait personne à Genève, il s'est inscrit à un club de randonnée.", fr(E(1663)), 'Ne connaissant personne : ne avant, personne après. EN: ne connaissant personne.', 'a4-construire'),
        eS('Étante malade, je ne pourrai pas venir demain.', fr(E(1654)), 'Étant ne s’accorde jamais. EN: étant.', 'a4-piege', ['Comme je suis malade, je ne pourrai pas venir demain.', 'Parce que je suis malade, je ne pourrai pas venir demain.']),
        lC('Écoute. Pourquoi la jeune avocate s’est-elle tue ?', fr(E(1666)), ['elle manquait d’expérience', 'elle n’avait pas le droit de parler'], 0, 'Manquant d’expérience : la cause. EN: lack of experience.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-compose', label: 'Ayant fini, étant arrivée', targets: ['compose-faux'],
      questions: [
        mc('Arriver, au participe composé, pour elle :', ['étant arrivée', 'ayant arrivée', 'étant arrivé'], 0, 'Être, et l’accord avec elle. EN: étant arrivée.', 'a5-cartes'),
        mc('Finir, au participe composé :', ['ayant fini', 'étant fini'], 0, 'J’ai fini : ayant fini. EN: ayant fini.', 'a5-cartes'),
        mc('« Ayant fini son rapport, elle est partie. » À l’oral, on dit plutôt…', ['Après avoir fini son rapport, elle est partie.', 'En ayant fini son rapport, elle est partie.'], 0, 'Après avoir + participe : la tournure courante. EN: après avoir.', 'a5-exemples'),
        tI('Écris le participe composé du verbe entre parenthèses.', "(perdre) mes clés, j'ai dormi chez une amie.", fr(E(1673)), 'J’ai perdu : ayant perdu. EN: ayant perdu.', 'a5-construire'),
        tI('Écris le participe composé du verbe entre parenthèses, accordé s’il le faut.', '(se lever) tôt, les enfants dormaient déjà à neuf heures.', fr(E(1681)), 'Ils se sont levés : s’étant levés. EN: s’étant levés.', 'a5-construire'),
        tI('Écris le participe composé du verbe entre parenthèses, accordé s’il le faut.', '(rester) seule, elle a tout rangé.', fr(E(1683)), 'Elle est restée : étant restée. EN: étant restée.', 'a5-construire'),
        eS('Ayant arrivée en retard, elle a manqué le début du film.', fr(E(1671)), 'Arriver prend être : étant arrivée. EN: étant arrivée.', 'a5-erreurs', [fr(E(1672)), 'Arrivée en retard, elle a manqué le début du film.', 'Comme elle est arrivée en retard, elle a manqué le début du film.']),
        lC('Écoute. Qu’est-ce qui explique qu’il connaisse l’hiver ?', fr(E(1678)), ['il a vécu dix ans à Québec', 'il aime le ski'], 0, 'Ayant vécu dix ans à Québec. EN: ten years in Québec.', 'a5-construire'),
      ],
    },
    {
      id: 'r6-adjectif', label: 'Une qualité qui s’accorde', targets: ['adjectif-sans-accord'],
      questions: [
        mc('« C’était une soirée …, mais réussie. »', ['fatigante', 'fatigant', 'fatiguante'], 0, 'Une qualité : l’adjectif, accordé, sans u. EN: fatigante.', 'a6-cartes'),
        mc('« Une hôtesse … à chaque client distribuait les badges. »', ['souriant', 'souriante'], 0, 'À chaque client : un complément, donc le participe. EN: souriant.', 'a6-construire'),
        mc('Dans la critique de « La Maison des marées », « une pluie battante » : battante est…', ['un adjectif accordé avec pluie', 'un participe avec un complément'], 0, 'Une qualité de la pluie. EN: an adjective.', 'a6-lecture'),
        tI('Accorde l’adjectif verbal.', 'Les premières semaines ont été (stimulant).', fr(E(1692)), 'Semaines : féminin pluriel. EN: stimulantes.', 'a6-table'),
        tI('Accorde l’adjectif verbal.', 'Ces deux dernières semaines ont été vraiment (épuisant).', fr(E(1696)), 'Épuisantes. EN: épuisantes.', 'a6-table'),
        tI('Accorde l’adjectif verbal.', 'Il nous a raconté une histoire (émouvant).', fr(E(1697)), 'Histoire : féminin. EN: émouvante.', 'a6-construire'),
        eS('Ces chiffres sont très inquiétant.', fr(E(1688)), 'Très : un adjectif, accordé. EN: inquiétants.', 'a6-erreurs'),
        lC('Écoute. Comment était la fin du spectacle ?', fr(E(1701)), ['un peu décevante', 'très drôle'], 0, 'La fin, un peu décevante. EN: a little disappointing.', 'a6-table'),
      ],
    },
    {
      id: 'r7-tests', label: 'Les trois tests', targets: ['tests-rates'],
      questions: [
        mc('Tu peux ajouter très devant la forme en -ant. C’est…', ['un adjectif, qui s’accorde', 'un participe, invariable'], 0, 'Très : une qualité. EN: an adjective.', 'a7-cartes'),
        mc('« Les guides, … trois langues, accueillent les groupes. »', ['parlant', 'parlants'], 0, 'Trois langues : un complément. EN: parlant.', 'a7-trier'),
        mc('« Des touristes ne … pas français nous ont demandé la route. »', ['parlant', 'parlants'], 0, 'La négation : un verbe. EN: parlant.', 'a7-piege'),
        tI(ANT, 'Ce sont des enfants très (obéir).', fr(E(1705)), 'Très : l’adjectif, accordé. EN: obéissants.', 'a7-cartes'),
        tI(ANT, 'Des élèves (travailler) régulièrement réussissent mieux.', fr(E(1708)), 'L’adverbe après : participe. EN: travaillant.', 'a7-cartes'),
        tI(ANT, 'Des mesures (encourager) le vélo seront votées en mars.', fr(E(1716)), 'Le vélo : complément. EN: encourageant.', 'a7-trier'),
        eS('Une chanson entraînant passait à la radio.', fr(E(1712)), 'Une qualité : entraînante. EN: entraînante.', 'a7-piege'),
        lC('Écoute. La forme en -ant de cette phrase est…', fr(E(1713)), ['un participe : elle a un complément', 'un adjectif accordé'], 0, 'Entraîner leurs parents : un complément. EN: a participle.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-quant', label: '-quant ou -cant', targets: ['paire-cq'],
      questions: [
        mc('« Ces longs trajets en bus sont … »', ['fatigants', 'fatiguants'], 0, 'Une qualité : sans u. EN: fatigants.', 'a8-table'),
        mc('« … les derniers indécis, le maire a fait voter le budget. »', ['Convainquant', 'Convaincant'], 0, 'Un complément : le participe, avec qu. EN: convainquant.', 'a8-construire'),
        mc('Le participe présent de suffoquer :', ['suffoquant', 'suffocant'], 0, 'Le participe garde le qu. EN: suffoquant.', 'a8-table'),
        tI(ORTHO, 'Ses explications étaient très (convaincre).', fr(E(1731)), 'Très : l’adjectif, en -cant, accordé. EN: convaincantes.', 'a8-construire'),
        tI(ORTHO, "Une panne (provoquer) d'importants retards a touché la ligne verte.", fr(E(1732)), 'Un complément : provoquant. EN: provoquant.', 'a8-construire'),
        tI(ORTHO, "L'appartement a deux chambres (communiquer).", fr(E(1728)), 'Une qualité des chambres : communicantes. EN: communicantes.', 'a8-table'),
        eS('Il faisait une chaleur suffoquante dans le métro.', fr(E(1726)), 'Une qualité : suffocante. EN: suffocante.', 'a8-piege'),
        lC('Écoute. Fatigant s’écrit-il ici avec ou sans u ?', fr(E(1733)), ['sans u : c’est l’adjectif', 'avec u : c’est le participe'], 0, 'Très fatigant : une qualité. EN: no u.', 'a8-dictee'),
      ],
    },
    {
      id: 'r9-ent', label: '-ant ou -ent', targets: ['paire-ent'],
      questions: [
        mc('« La semaine … les examens, la bibliothèque ouvre tard. »', ['précédant', 'précédent', 'précédente'], 0, 'Un complément : le participe, en -ant. EN: précédant.', 'a9-cartes'),
        mc('« J’ai revu mes notes de la semaine … »', ['précédente', 'précédant'], 0, 'Une qualité : l’adjectif, en -ent, accordé. EN: précédente.', 'a9-cartes'),
        mc('« Les … reçoivent la revue chaque trimestre. »', ['adhérents', 'adhérants'], 0, 'Un nom : en -ent. EN: adhérents.', 'a9-construire'),
        tI(ORTHO, 'Nous avons des avis très (différer).', fr(E(1741)), 'Très : l’adjectif, en -ent. EN: différents.', 'a9-erreurs'),
        tI(ORTHO, '(négliger) ses études, il a raté son année.', fr(E(1742)), 'Un complément d’objet, ses études : le participe, en -ant. EN: négligeant.', 'a9-construire', ['En négligeant ses études, il a raté son année.']),
        tI(ORTHO, "C'est un homme politique très (influer).", fr(E(1746)), 'Très : l’adjectif, en -ent. EN: influent.', 'a9-erreurs'),
        eS('Une entreprise fabricant des vélos cherche un comptable.', fr(E(1753)), 'Un complément : le participe, fabriquant. EN: fabriquant.', 'a9-exemples', ['Une entreprise qui fabrique des vélos cherche un comptable.']),
        lC('Écoute. Dans cette phrase, fabricant est…', fr(E(1752)), ['un nom', 'un participe'], 0, 'Ce fabricant : un nom. EN: a noun.', 'a9-exemples'),
      ],
    },
    {
      id: 'r10-sujet', label: 'Le bon nom', targets: ['participe-pendant'],
      questions: [
        mc('« J’ai croisé Paul sortant du métro. » Qui sortait ?', ['Paul', 'moi'], 0, 'Le nom le plus proche : Paul. EN: Paul.', 'a10-cartes'),
        mc('« J’ai croisé Paul en sortant du métro. » Qui sortait ?', ['moi', 'Paul'], 0, 'Le gérondif : le sujet. EN: me.', 'a10-cartes'),
        mc('« Le musée étant fermé le lundi, nous irons mardi. » Cette phrase est…', ['correcte : le participe a son propre sujet', 'fausse : nous ne sommes pas fermés'], 0, 'Le participe absolu. EN: correct.', 'a10-cartes'),
        tI('Répare la phrase : garde « Habitant loin, » et fais de je le sujet du verbe trouver.', 'Habitant loin, le bus est pratique.', fr(E(1766)), 'Je habite loin, je trouve. EN: I am the subject.', 'a10-piege', ['Habitant loin, je trouve que le bus est pratique.']),
        tI('Répare la phrase avec comme.', 'Habitant loin, le bus est pratique pour moi.', fr(E(1767)), 'Comme + un sujet : je. EN: comme j’habite.', 'a10-trier', ["Comme j'habite loin, le bus est pratique.", "Comme j'habite loin, je trouve le bus pratique."]),
        tI('Réécris la phrase avec un participe présent en tête.', 'Elle a vu son train partir, alors elle a couru sur le quai.', fr(E(1771)), 'Voyant…, elle : le même sujet. EN: voyant.', 'a10-piege', ['Ayant vu son train partir, elle a couru sur le quai.']),
        eS('Ayant reçu votre lettre, celle-ci a retenu toute notre attention.', fr(E(1762)), 'La lettre ne s’est pas reçue : nous. EN: we are the subject.', 'a10-piege', [fr(E(1763)), "Ayant reçu votre lettre, nous l'avons lue attentivement.", "Ayant bien reçu votre lettre, nous l'avons lue avec attention.", "Ayant reçu votre lettre, nous y avons accordé toute notre attention."]),
        lC('Écoute. Pourquoi le match a-t-il été reporté ?', fr(E(1765)), ['il pleuvait sans arrêt', 'un joueur était blessé'], 0, 'La pluie ne cessant pas. EN: the rain.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(QUI_QUE_REF)} : « Le livre … je lis est passionnant. »`, ['que', 'qui'], 0, `« ${B111_REFRAME} » EN: ${B111_REFRAME_EN}`, 'a2-rappel'),
        mc(`${Cap(QUI_QUE_REF)} : « Les étudiants … travaillent beaucoup semblent réussir moins bien. »`, ['qui', 'que'], 0, 'Qui, sans sujet derrière : travaillant, avec un participe. EN: qui, or travaillant.', 'a2-table'),
        mc(`${Cap(PASSIF_REF)} : l’affiche dit « Tout objet ne portant pas d’étiquette sera détruit ». Au micro, tu dis plutôt…`, ['On détruira les bagages sans étiquette.', 'Tout objet ne portant pas d’étiquette sera détruit.'], 0, `« ${B118_REFRAME} » EN: ${B118_REFRAME_EN}`, 'a3-cartes'),
        mc(`${Cap(SUBORD_REF)} : « … il ne savait pas quoi faire, il a appelé sa sœur. »`, ['Comme', 'Pour que'], 0, `« ${B131_REFRAME} » EN: ${B131_REFRAME_EN}`, 'a4-cartes'),
        mc(`${Cap(REGISTRES_REF)} : « Les voyageurs souhaitant descendre » est…`, ['soutenu : la langue de l’écrit', 'familier'], 0, `« ${B125_REFRAME} » EN: ${B125_REFRAME_EN}`, 'a3-cartes'),
        tI(`${Cap(GERONDIF_REF)} : mets le verbe au gérondif. C’est toi qui sors.`, "J'ai croisé Paul (sortir) du métro.", fr(G(1745)), `« ${B212_REFRAME} » EN: ${B212_REFRAME_EN}`, 'a10-cartes'),
        mc(`${Cap(NOMINAL_REF)} : dans un avis, « en raison de travaux » remplace…`, ['parce qu’on fait des travaux', 'pendant les travaux'], 0, `« ${B210_REFRAME} » EN: ${B210_REFRAME_EN}`, 'a3-texte'),
        lC(`Écoute. ${Cap(EMOTIONS_REF)} : décevant est ici…`, fr('fr.b1.emotions.1039'), ['un adjectif, qui suit être', 'un participe avec un complément'], 0, 'Ce film était décevant : une qualité. EN: an adjective.', 'a6-table'),
      ],
    },
    {
      id: 'r12-examen', label: 'Comme à l’examen', targets: ['critique-plate'],
      questions: [
        mc('Format TCF. Choisissez la bonne réponse : « Les candidats … un diplôme étranger doivent le faire reconnaître. »', ['possédant', 'possédants', 'en possédant', 'qui possédant'], 0, 'Un complément : participe, invariable, sans en. EN: possédant.', 'a2-table'),
        mc('Format TCF : « Nous avons passé une soirée vraiment … »', ['amusante', 'amusant', 'amusants', 'en amusant'], 0, 'Vraiment : une qualité, accordée avec soirée. EN: amusante.', 'a6-cartes'),
        mc('Format DELF B2, compréhension écrite. « Le roman, un peu lent au milieu, reste bouleversant jusqu’à la dernière page. » Le critique…', ['recommande le livre malgré une réserve', 'déconseille le livre', 'n’a pas terminé le livre'], 0, 'Une réserve, puis un adjectif très positif. EN: recommends it with a reservation.', 'a6-lecture'),
        mc('Format DELF B2. « Ayant constaté une hausse des accidents, la mairie a réduit la vitesse. » Le participe composé indique…', ['une cause antérieure à la décision', 'une conséquence de la décision', 'une condition'], 0, 'Ayant constaté : avant, et c’est la raison. EN: an earlier cause.', 'a5-cartes'),
        tI('Format TCF, phrase à compléter. Écrivez la forme qui convient, bien orthographiée.', "Les arguments de l'avocate ont été très (convaincre).", "Les arguments de l'avocate ont été très convaincants.", 'Très : l’adjectif, en -cant, accordé. EN: convaincants.', 'a8-construire'),
        tI('Format DELF B2, production. Reformulez avec un participe présent.', 'Les visiteurs qui souhaitent une visite guidée doivent réserver.', 'Les visiteurs souhaitant une visite guidée doivent réserver.', 'Qui souhaitent devient souhaitant. EN: souhaitant.', 'a11-plan', ['Les visiteurs désirant une visite guidée doivent réserver.']),
        eS('Ayant lu ce roman en une nuit, il m’a laissé une impression durable.', "Ayant lu ce roman en une nuit, j'en garde une impression durable.", 'Ce n’est pas le roman qui a lu : je. EN: I am the one who read.', 'a10-piege',
          ["Ayant lu ce roman en une nuit, je garde une impression durable.", "Ayant lu ce roman en une nuit, j'en ai gardé une impression durable.", "Ayant lu ce roman en une nuit, j'ai gardé une impression durable."],
          'Format DELF B2, correction. Le participe n’a pas le bon sujet : garde « Ayant lu ce roman en une nuit, » et fais de je le sujet du verbe garder. EN: Keep the participle and make je the subject of garder.'),
        lC('Format TEF, compréhension orale. Écoutez l’annonce. Qui peut embarquer en premier ?', MESSAGE_TEF, ['les passagers voyageant avec un enfant', 'les voyageurs ne possédant pas de billet', 'les passagers ayant un gros bagage'], 0, 'Les passagers voyageant avec un enfant. EN: those with a child.', 'a3-exemples'),
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
spreadSlots(A11_QUIZ);

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'qui ont réussi', back: 'ayant réussi, sans accord', say: fr(E(1616)) },
    { front: 'à l’oral', back: 'ceux qui veulent, plutôt que souhaitant', say: fr(E(1637)) },
    { front: 'comme il ne savait pas', back: 'ne sachant que faire', say: fr(E(1652)) },
    { front: 'finie avant', back: 'ayant fini, étant arrivée', say: fr(E(1671)) },
    { front: 'une qualité', back: 'l’adjectif, accordé : fatigante', say: fr(E(1687)) },
    { front: 'le test de très', back: 'très passe : adjectif', say: fr(E(1705)) },
    { front: 'fatiguer, convaincre', back: 'fatiguant, convainquant ; fatigant, convaincant', say: fr(E(1723)) },
    { front: 'précéder, adhérer', back: 'précédant, adhérant ; précédent, adhérent', say: fr(E(1738)) },
    { front: 'sortant ou en sortant', back: 'le nom le plus proche, ou le sujet', say: fr(E(1760)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Un verbe ou une qualité',
  body: `${REFRAME} Tu as repris la forme en -ant de ${GERONDIF_REF}, la relative de ${QUI_QUE_REF} et les registres de ${REGISTRES_REF}, pour écrire comme un avis, une annonce ou une critique. La suite, c'est ${NEXT_REF} : l'infinitif, l'autre forme sans sujet, et ce qu'il permet de condenser. EN: Next, lesson 14 in B2: the infinitive, the other subjectless form.`,
  points: [
    'Le participe présent remplace qui + verbe et ne s’accorde jamais.',
    'L’adjectif verbal dit une qualité : il accepte très et s’accorde.',
    'Fatigant, convaincant, précédent : l’adjectif et le nom changent, le participe garde le verbe.',
    'Le participe va au nom qu’il touche ; le gérondif, au sujet.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe', 'adjectif', 'paires'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Ta critique, ton annonce',
    opener: {
      line: "Un livre à juger, un poste à pourvoir : ici tu décris avec le participe, tu juges avec l'adjectif, et tu passes l'examen. EN: A book to judge, a job to fill: here you describe with the participle, judge with the adjective, and sit the exam.",
      imageRef: 'lessons/participe-adjectif/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ta critique ou ton annonce et passé l'examen : quatre-vingt-seize questions, douze manches. EN: You wrote your review or advert and sat the exam: ninety-six questions, twelve rounds.",
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r4-cause', 'a11-quiz/r8-quant', 'a11-review'],
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
  { id: 'd-accord', title: 'Un verbe ou une qualité', format: 'sort' as const, coach: "Deux piles : la forme en -ant a un complément et ne bouge pas, ou elle dit une qualité et s'accorde. EN: verb or quality.", buckets: ['participe, sans accord', 'adjectif, accordé'], items: [E(1600), E(1603), E(1609), E(1605), E(1610), E(1612)], audio: AUDIO },
  { id: 'd-qui', title: 'Avec qui, sans qui', format: 'flashcard' as const, coach: "Lis chaque phrase, puis redis-la avec qui + verbe. EN: say each one again with qui.", items: [E(1616), E(1618), E(1621), E(1624), E(1625), E(1632)], audio: AUDIO },
  { id: 'd-registre', title: 'L’affiche ou la voix', format: 'sort' as const, coach: "Deux piles : la phrase d'un avis ou d'un journal, ou la phrase qu'on dit. EN: written or spoken.", buckets: ['l’écrit', 'l’oral'], items: [E(1636), E(1642), E(1648), E(1637), E(1643), E(1617)], audio: AUDIO },
  { id: 'd-cause', title: 'La raison en tête', format: 'flashcard' as const, coach: "Lis chaque phrase, puis dis-la avec comme. EN: say each one again with comme.", items: [E(1652), E(1654), E(1655), E(1657), E(1663), E(1666)], audio: AUDIO },
  { id: 'd-compose', title: 'Ayant ou étant', format: 'mcq' as const, coach: "Pense au passé composé : j'ai fini, ayant fini ; je suis arrivée, étant arrivée. EN: the passé composé auxiliary.", q: 'Arriver, au participe composé, pour elle :', opts: ['étant arrivée', 'ayant arrivé'], correct: 0, why: 'Elle est arrivée : étant arrivée. EN: étant arrivée.', items: [E(1670), E(1671), E(1673), E(1674), E(1677), E(1683)], audio: AUDIO },
  { id: 'd-adjectif', title: 'Une qualité accordée', format: 'mcq' as const, coach: "Une qualité du nom : l'adjectif prend son genre et son nombre. EN: agree it with the noun.", q: '« C’était une soirée … »', opts: ['fatigante', 'fatigant'], correct: 0, why: 'Soirée est féminin : fatigante. EN: fatigante.', items: [E(1686), E(1687), E(1689), E(1691), E(1692), E(1696)], audio: AUDIO },
  { id: 'd-tests', title: 'Passe les trois tests', format: 'sort' as const, coach: "Très passe : adjectif. Un complément, un adverbe après, ne… pas : participe. EN: sort by the tests.", buckets: ['participe', 'adjectif'], items: [E(1704), E(1707), E(1708), E(1705), E(1709), E(1712)], audio: AUDIO },
  { id: 'd-quant', title: 'Qu ou c', format: 'sort' as const, coach: "Deux piles : le participe garde qu et gu, l'adjectif prend c et g. EN: -quant or -cant.", buckets: ['participe : -quant, -guant', 'adjectif : -cant, -gant'], items: [E(1721), E(1723), E(1725), E(1720), E(1722), E(1726)], audio: AUDIO },
  { id: 'd-ent', title: 'A ou e', format: 'sort' as const, coach: "Deux piles : le participe en -ant, l'adjectif ou le nom en -ent. EN: -ant or -ent.", buckets: ['participe : -ant', 'adjectif ou nom : -ent'], items: [E(1738), E(1740), E(1742), E(1739), E(1741), E(1751)], audio: AUDIO },
  { id: 'd-sujet', title: 'Le bon nom', format: 'mcq' as const, coach: "Qui fait l'action en -ant ? En tête, le sujet ; après un nom, ce nom. EN: who does the -ant action?", q: '« Habitant loin, le bus est pratique. » Répare :', opts: ['Habitant loin, je trouve le bus pratique.', 'Habitant loin, le bus était pratique.'], correct: 0, why: 'Je habite loin, je trouve. EN: I am the subject.', items: [E(1760), E(1761), E(1762), E(1764), E(1766), E(1771)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 et le B2 en renfort', format: 'flashcard' as const, coach: "Six phrases des leçons précédentes : dis pour chacune si un participe présent irait, et pourquoi. EN: could each one take a participle?", items: ['fr.b1.pronoms-essentiels.1109', 'fr.b2.universite.1070', 'fr.b1.connecteurs-logiques.1240', 'fr.b1.emotions.1039', G(1745), G(1746)], audio: AUDIO },
  { id: 'd-critique', title: 'Ta critique, à voix haute', format: 'flashcard' as const, coach: "Lis chaque phrase de critique ou d'annonce, puis dis la tienne sur le même modèle. EN: read each one, then give your own.", items: [E(1776), E(1777), E(1779), E(1781), E(1784), E(1786)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'participe-accorde', description: 'Makes a present participle agree like an adjective (des assistantes parlantes anglais), or leaves a verbal adjective unagreed.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-accord', retest: 'd-accord' },
  { id: 'qui-verbe', description: 'Cannot turn qui + verb into a participle, adds en in front of it, or mixes the two (qui possédant).', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-qui', retest: 'd-qui' },
  { id: 'registre-oral', description: 'Uses participles in speech where qui + verb is expected, or writes a notice in conversational French.', detectOn: ['a3-trier', 'a3-hacks', 'a3-check', 'a11-mission'], drill: 'd-registre', retest: 'd-registre' },
  { id: 'cause-en-tete', description: 'Misses the causal reading of a fronted participle, misplaces ne… pas around it, or agrees étant.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-cause', retest: 'd-cause' },
  { id: 'compose-faux', description: 'Picks the wrong auxiliary in the perfect participle (ayant arrivé, étant fini) or forgets the agreement after étant.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a11-mission'], drill: 'd-compose', retest: 'd-compose' },
  { id: 'adjectif-sans-accord', description: 'Leaves a verbal adjective invariable (une soirée fatigant), or agrees a same-verb participle that has an object.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-adjectif', retest: 'd-adjectif' },
  { id: 'tests-rates', description: 'Decides participle or adjective by the noun’s gender and number instead of by très, qui + verb, an object, an adverb or a negation.', detectOn: ['a7-trier', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-tests', retest: 'd-tests' },
  { id: 'paire-cq', description: 'Swaps the -quant / -cant or -guant / -gant spellings (une journée fatiguante, convainquants for the adjective).', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-quant', retest: 'd-quant' },
  { id: 'paire-ent', description: 'Swaps the -ant / -ent spellings (la semaine précédent les examens, très différants) or spells a noun as a participle (les adhérants).', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-ent', retest: 'd-ent' },
  { id: 'participe-pendant', description: 'Writes a dangling participle that attaches to the wrong noun, or uses en sortant where sortant is meant (or the reverse).', detectOn: ['a10-trier', 'a10-piege', 'a10-check', 'a11-mission'], drill: 'd-sujet', retest: 'd-sujet' },
  { id: 'recyclage', description: 'Loses a contrast the participle sits on: qui against que, the written and spoken registers, comme for a cause, the gérondif and its subject.', detectOn: ['a2-rappel', 'a3-cartes', 'a10-cartes'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'critique-plate', description: 'In an exam-format review or advert, avoids the participle and the verbal adjective, or uses only one or two of them, so the range criterion is not met.', detectOn: ['a11-plan', 'a11-scenario', 'a11-mission'], drill: 'd-critique', retest: 'd-critique' },
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
  sheet('sheet-participe', 'Le participe présent', ['qui + verbe', 'le registre', 'la cause en tête', 'le participe composé'], [
    teach('sheet-participe-teach', 'Un verbe sans en, qui ne bouge pas',
      `${REFRAME} Le participe présent, c'est la forme en -ant du gérondif de ${GERONDIF_REF}, sans en. Il remplace qui + verbe, garde son complément, son adverbe et sa négation, et ne s'accorde jamais. EN: ${REFRAME_EN} The -ant form without en, never agreeing.`),
    table('sheet-participe-qui', 'Qui + verbe devient -ant', ['Avec qui', 'Avec le participe'], [
      ["les étudiants qui ont réussi l'examen", "les étudiants ayant réussi l'examen"],
      ['une personne qui sait conduire', 'une personne sachant conduire'],
      ['un appartement qui donne sur la cour', 'un appartement donnant sur la cour'],
      ["les participantes qui n'ont pas reçu de badge", "les participantes n'ayant pas reçu de badge"],
      ['à éviter : qui possédant', 'qui possèdent, ou possédant'],
    ]),
    table('sheet-participe-registre', "L'écrit et l'oral", ["À l'écrit (avis, presse)", "À l'oral"], [
      ['Les voyageurs souhaitant descendre à Lausanne…', 'Ceux qui veulent descendre à Lausanne…'],
      ["Tout objet ne portant pas d'étiquette sera détruit.", 'Les bagages sans étiquette seront détruits.'],
      ['Tout dossier arrivant après la date limite…', 'Les dossiers qui arrivent en retard…'],
    ]),
    table('sheet-participe-cause', 'La cause en tête', ['Participe', 'Conjonction'], [
      ['Ne sachant que faire, il a appelé sa sœur.', "Comme il ne savait pas quoi faire…"],
      ['Étant malade, je ne viendrai pas.', 'Comme je suis malade…'],
      ['Craignant la pluie, les organisateurs…', "Parce qu'ils craignaient la pluie…"],
      ['étant donné que (locution figée)', 'puisque'],
    ]),
    table('sheet-participe-compose', 'Le participe composé', ['Passé composé', 'Participe composé', 'Plus courant'], [
      ["j'ai fini", 'ayant fini', 'après avoir fini'],
      ['elle est arrivée', 'étant arrivée', 'après être arrivée'],
      ["elle s'est trompée", "s'étant trompée", "après s'être trompée"],
      ["ils n'ont pas été retenus", "n'ayant pas été retenus", 'qui n’ont pas été retenus'],
    ]),
  ]),
  sheet('sheet-adjectif', "L'adjectif verbal et les tests", ["l'accord", 'la place', 'les trois tests'], [
    teach('sheet-adjectif-teach', 'Une qualité, qui s’accorde',
      "L'adjectif verbal est une forme en -ant qui ne fait plus d'action : elle dit une qualité du nom. Il s'accorde, accepte très, suit être, et passe parfois devant le nom (une brillante carrière). Au féminin, le t s'entend. EN: a quality; it agrees, takes très and follows être."),
    table('sheet-adjectif-accord', "L'accord", ['Nom', 'Adjectif verbal'], [
      ['une soirée', 'fatigante'],
      ['des chapitres', 'passionnants'],
      ['des semaines', 'stimulantes, épuisantes'],
      ['une voix', 'apaisante'],
      ['des résultats', 'encourageants'],
    ]),
    table('sheet-adjectif-tests', 'Les trois tests', ['Question', 'Si oui', 'Exemple'], [
      ['Peux-tu ajouter très ?', 'adjectif, accordé', 'des enfants très obéissants'],
      ['Sinon, peux-tu dire qui + verbe ?', 'participe, invariable', 'une étudiante travaillant le soir'],
      ['Un complément d’objet ou un adverbe suit ?', 'participe', 'des élèves travaillant régulièrement'],
      ['Une négation autour ?', 'participe', 'des touristes ne parlant pas français'],
    ]),
    table('sheet-adjectif-roles', 'Le même verbe, deux rôles', ['Participe', 'Adjectif'], [
      ['une hôtesse souriant à chaque client', 'une hôtesse souriante'],
      ['une ville vivant du tourisme', 'une ville vivante'],
      ['des mesures encourageant le vélo', 'des résultats encourageants'],
    ]),
  ]),
  sheet('sheet-paires', 'Les paires qui s’écrivent autrement', ['-quant et -cant', '-guant et -gant', '-ant et -ent', 'les noms'], [
    teach('sheet-paires-teach', 'Même son, deux orthographes',
      "Le participe présent garde toujours le radical du verbe et finit en -ant. Une douzaine d'adjectifs et de noms changent : qu devient c, gu devient g, -ant devient -ent. À l'oreille, rien ne change : c'est le rôle qui choisit. EN: the participle keeps the verb; a dozen adjectives and nouns change."),
    table('sheet-paires-cq', 'qu ou c, gu ou g', ['Participe (un verbe)', 'Adjectif ou nom (une qualité)'], [
      ['fatiguant', 'fatigant'],
      ['convainquant', 'convaincant'],
      ['provoquant', 'provocant'],
      ['suffoquant', 'suffocant'],
      ['communiquant', 'communicant'],
      ['fabriquant', 'un fabricant (nom)'],
      ['naviguant, intriguant', 'navigant, intrigant'],
    ]),
    table('sheet-paires-ent', '-ant ou -ent', ['Participe (un verbe)', 'Adjectif ou nom'], [
      ['précédant', 'précédent (et un précédent)'],
      ['différant', 'différent'],
      ['négligeant', 'négligent'],
      ['excellant', 'excellent'],
      ['influant', 'influent'],
      ['équivalant', 'équivalent (et un équivalent)'],
      ['adhérant', 'adhérent (et un adhérent)'],
      ['présidant', 'un président (nom)'],
    ]),
  ]),
  sheet('sheet-sujet', 'Le bon nom', ['participe ou gérondif', 'le participe qui pend', 'les réparations', 'le participe absolu'], [
    teach('sheet-sujet-teach', 'Le nom qu’il touche',
      `Le gérondif (en + -ant) prend toujours le sujet du verbe principal, comme dans ${GERONDIF_REF}. Le participe se rattache au nom qu'il touche : en tête, au sujet ; après un nom, à ce nom. Sans le bon nom, donne-lui son sujet ou passe à comme, quand, qui. EN: the gérondif takes the subject; the participle, the nearest noun.`),
    table('sheet-sujet-gerondif', 'En sortant ou sortant', ['Phrase', 'Qui sort ?'], [
      ["J'ai croisé Paul en sortant du métro.", 'moi'],
      ["J'ai croisé Paul sortant du métro.", 'Paul'],
      ["Sortant du métro, j'ai croisé Paul.", 'moi'],
      ["J'ai croisé Paul qui sortait du métro.", 'Paul'],
    ]),
    table('sheet-sujet-reparer', 'Sans le bon nom, puis réparé', ['À éviter', 'Réparer : le sujet', 'Réparer : une subordonnée'], [
      ['Habitant loin, le bus est pratique.', 'Habitant loin, je trouve le bus pratique.', "Comme j'habite loin, le bus est pratique."],
      ['Ayant reçu votre lettre, celle-ci a retenu notre attention.', "Ayant reçu votre lettre, nous l'avons lue avec attention.", 'Votre lettre, que nous avons reçue, a retenu notre attention.'],
      ['Voyant son train partir, le quai était vide.', 'Voyant son train partir, elle a couru sur le quai.', 'Quand elle a vu son train partir, le quai était vide.'],
    ]),
    table('sheet-sujet-absolu', 'Le participe absolu : son propre sujet', ['Participe absolu', 'Équivalent'], [
      ['Le musée étant fermé le lundi, nous irons mardi.', 'Comme le musée est fermé le lundi…'],
      ['La pluie ne cessant pas, le match a été reporté.', 'Comme la pluie ne cessait pas…'],
      ['Les invités étant partis, nous avons rangé le salon.', 'Une fois les invités partis…'],
    ]),
  ]),
  sheet('sheet-ecrire', 'Écrire une critique ou une annonce', ['le plan de la critique', "le plan de l'annonce", 'la liste de contrôle'], [
    teach('sheet-ecrire-teach', 'Décrire avec le participe, juger avec l’adjectif',
      "Une critique présente l'œuvre, la décrit, dit ses points forts et ses réserves, puis recommande. Une annonce présente le poste, le profil, l'offre et la façon de postuler. Dans les deux, le participe décrit, l'adjectif verbal juge. EN: the participle describes, the adjective judges."),
    table('sheet-ecrire-critique', 'Le plan de la critique', ['Partie', 'Exemple'], [
      ["la présentation", "L'exposition, réunissant une centaine d'œuvres, se visite en une heure."],
      ['les points forts', 'Les dialogues sont vifs et les images, saisissantes.'],
      ['les réserves', "La fin, un peu décevante, n'enlève rien au plaisir."],
      ['la recommandation', 'Je recommande ce livre aux lecteurs aimant les longues sagas familiales.'],
    ]),
    table('sheet-ecrire-annonce', "Le plan de l'annonce", ['Partie', 'Exemple'], [
      ['le poste', 'Poste à pourvoir immédiatement, exigeant une grande disponibilité.'],
      ['le profil', "Les candidats ayant une expérience à l'étranger seront prioritaires."],
      ["l'offre", 'Nous offrons un cadre de travail stimulant et une équipe accueillante.'],
      ['la candidature', 'Les candidatures ne respectant pas ces critères ne seront pas étudiées.'],
    ]),
    table('sheet-ecrire-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Aucun participe accordé', 'parlant, ayant, sans e ni s'],
      ['Chaque adjectif accordé', 'passionnante, fatigants'],
      ['Les paires', 'fatigant, convaincant ; précédant les…, un adhérent'],
      ['Le bon nom', 'qui fait l’action en -ant ?'],
      ['Un participe composé', 'ayant lu, étant arrivée'],
      ['Le registre', 'le participe à l’écrit, qui + verbe à l’oral'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-13-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const EXERCISE = 'One voice, read as written WITH the bracketed words spoken as they are printed (the infinitive, or both choices joined by « ou »): this is the exercise text, not the answer.';
const TRAP = "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions in promptSound are NEVER spoken.";
const REC_DESC: Record<string, string> = {
  'rec-b2-13-annonce': 'The Montréal job advert (act 1), one female voice with a Québec accent, one take, the neutral tone of a recruitment podcast reading an advert. The participles are read at the pace of the rest; souriante and accueillante sound their final t.',
  'rec-b2-13-rappel': 'The four recap cards (act 2). One coach voice. Card one reads « en parlant » then « parlant » with a small pause; card four reads « attendant » with no t, as the rule demands.',
  'rec-b2-13-qui-ecoute': `${ONE_TAKE} Nine lines, the tone of notices and adverts read aloud. The last line (qui travaillent) is read like the others.`,
  'rec-b2-13-zoe': 'Zoé and Marc (act 3), Lausanne station, two voices, one take. Zoé first reads the notice stiffly, as written; Marc, older, relaxed, a Vaud accent welcome. The station ambience stays low.',
  'rec-b2-13-registre': 'The four register cards (act 3). One voice. Cards one to three in a neutral announcer tone; card four, the spoken one, relaxed and conversational.',
  'rec-b2-13-texte-a3': `The caretaker's message (act 3). ${EXERCISE} Read in a friendly spoken voice: the rewrite into a notice is the exercise.`,
  'rec-b2-13-lea': 'Léa and Hugo (act 4), Geneva, two voices, one take. Léa reads her blog lines as she types them; Hugo comments briefly, a light Swiss accent welcome.',
  'rec-b2-13-cause': 'The four cause cards (act 4). One voice. « Ne sachant que faire » is read as one group, with no pas.',
  'rec-b2-13-cause-ecoute': `${ONE_TAKE} Nine lines. Line nine (étant donné que) is read like the others, not singled out.`,
  'rec-b2-13-piege-cause': TRAP,
  'rec-b2-13-texte-a4': "Inès's story (act 4), one voice, read as written with every comme and parce que: the rewrite is the exercise.",
  'rec-b2-13-moussa': 'Moussa and Awa (act 5), Dakar, two voices, one take, a calm living room. Moussa reads his letter formally; Awa answers in an everyday tone. Senegalese accents welcome.',
  'rec-b2-13-compose': 'The four perfect-participle cards (act 5). One voice. « Étant arrivée » is read with the liaison [etɑ̃taʁive].',
  'rec-b2-13-texte-a5': `Lucie's journey (act 5). ${EXERCISE}`,
  'rec-b2-13-critique': 'The book review (act 6), one voice, one take, the tone of a literary radio programme: engaged, a little warm. The adjectives carry the judgement; do not over-stress them.',
  'rec-b2-13-adjectif': 'The four adjective cards (act 6). One voice. Card four reads « une hôtesse souriante » then « souriant à chaque client », so the t of the feminine is heard against its absence.',
  'rec-b2-13-texte-a6': `The Marseille postcard (act 6). ${EXERCISE} A light southern accent welcome.`,
  'rec-b2-13-samuel': 'Samuel and Claire (act 7), Lyon, two voices, one take. Claire, the proofreader, is quick and precise; Samuel hesitates a little.',
  'rec-b2-13-tests': 'The four test cards (act 7). One voice, neutral.',
  'rec-b2-13-tests-ecoute': `${ONE_TAKE} Nine lines, neutral.`,
  'rec-b2-13-piege-tests': TRAP,
  'rec-b2-13-texte-a7': `The neighbours' complaint (act 7). ${EXERCISE}`,
  'rec-b2-13-samia': 'Samia and Karim (act 8), Montréal, two voices, one take, an office. Both spell out letters when they need to (u, q, c).',
  'rec-b2-13-piege-paires': TRAP,
  'rec-b2-13-texte-a8': "Samia's minutes (act 8), one voice, read as written, wrong spellings included: they cannot be heard, which is the point.",
  'rec-b2-13-ent-ecoute': `${ONE_TAKE} Ten lines, neutral. Nothing in the voice marks -ant against -ent.`,
  'rec-b2-13-ent': 'The four -ant / -ent cards (act 9). One voice. Cards one and two are read with identical rhythm.',
  'rec-b2-13-texte-a9': `The hiking club's letter (act 9). ${EXERCISE}`,
  'rec-b2-13-ahmed': 'Ahmed and Mme Roy (act 10), Nantes, two voices, one take, an open-plan office. Ahmed reads his first sentence naturally, with no hint that it is wrong.',
  'rec-b2-13-sujet': 'The four subject cards (act 10). One voice. Card one reads the row of lesson 12 in B2; cards one and two with identical rhythm, so only « en » differs.',
  'rec-b2-13-sujet-ecoute': `${ONE_TAKE} Nine lines. Lines one to four (en sortant, qui sortait, sortant, sortant en tête) with identical rhythm.`,
  'rec-b2-13-piege-sujet': TRAP,
  'rec-b2-13-texte-a10': "The customer-service letter (act 10), one voice, formal, read as written, wrong forms included, without comment.",
  'rec-b2-13-modele': 'The exhibition review (act 11), one voice with a Québec accent, one take, warm and unhurried, as on a cultural radio slot.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 13',
  intro: 'One -ant form, two jobs. Without en, the present participle is still a verb: it replaces qui + verb (les étudiants ayant réussi l’examen), keeps its object and its negation, gives a cause at the head of a sentence (Ne sachant que faire, il a appelé sa sœur), takes a perfect form with ayant and étant, and never agrees. It belongs to notices, adverts and the press; speech says qui + verb. The verbal adjective names a quality (une soirée fatigante, des histoires passionnantes) and agrees like any adjective. You learn three tests to tell them apart, the dozen pairs that are spelled differently (fatiguant and fatigant, précédant and précédent) and the nouns among them (un adhérent, un fabricant), and how a participle attaches to the noun it touches, unlike the gérondif of lesson 12 in B2. The task: a review or a formal job advert of 180 to 250 words, graded on the B2 writing criteria.',
  skill: 'PE',
  grammarAssumed: [QUI_QUE_UNIT, PASSIF_UNIT, REGISTRES_UNIT, SUBORD_UNIT, GERONDIF_UNIT],
  grammarIntroduced: [
    'The present participle without en as a replacement for a qui relative clause, invariable, keeping its object, adverb and negation',
    'The register of the present participle: notices, forms, job adverts and the press, against qui + verb and ceux qui in speech',
    'The fronted present participle expressing cause (Ne sachant que faire…), equivalent to comme or parce que, with the main verb’s subject',
    'The perfect participle ayant / étant + past participle, its auxiliary, the agreement after étant, and après avoir as the everyday alternative',
    'The verbal adjective: a quality of the noun, agreement, très, use after être and occasional position before the noun',
    'Telling participle from verbal adjective with the très, qui + verb, object, adverb and negation tests',
    'The spelling pairs -quant / -cant and -guant / -gant (fatiguant, fatigant; convainquant, convaincant; provoquant, provocant; suffoquant, suffocant; communiquant, communicant)',
    'The spelling pairs -ant / -ent (précédant, précédent; différant, différent; négligeant, négligent; excellant, excellent; influant, influent; équivalant, équivalent; adhérant, adhérent) and the nouns among them (un adhérent, un fabricant, un président)',
    'Attachment of the participle to the noun it touches against the gérondif’s subject, the dangling participle and its repairs, and the absolute participle with its own subject',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "La même forme en -ant a deux rôles. Sans en, le participe présent reste un verbe : il remplace qui + verbe, dit une cause en tête de phrase, se met au passé avec ayant ou étant, et ne s'accorde jamais. L'adjectif verbal dit une qualité et s'accorde. Tu apprends à les distinguer, à écrire les paires comme fatigant et fatiguant, et à rattacher chaque participe au bon nom. À la fin, tu écris une critique ou une annonce de 180 à 250 mots.",
    minutes: 150,
    difficulty: 4,
    glyph: 'ant·ent',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: PARTICIPE_ADJECTIF_TERMS,
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
