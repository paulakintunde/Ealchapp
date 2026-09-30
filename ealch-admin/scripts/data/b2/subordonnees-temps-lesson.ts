// b2.18.l1 « Les rapports de temps »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.15 cause-consequence
// and b2.16 concession-avancee), under the B2 rules of B2-BUILD-LOG.md (form,
// meaning, choice, text).
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema now, so the lesson validates with it in place (as b2.16 does).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act (B2): meet (scene, story, reading or listening), name
//   (cardDeck, tapTable, examples), build (groupDrill, gated), choose (a
//   drill where the PLACE ON THE LINE picks the form), trap (trapDrill
//   stepped or commonErrors), then from act 3 on the form INSIDE A TEXT of
//   60 to 120 words (complete, rewrite, sort), then the gated act check.
//
//    1  Mettre les faits dans l'ordre  6   an incident report; the scene's
//                                           wrong option is « avant que la
//                                           fuite a commencé »
//    2  La ligne du temps              7   the three relations, two moods;
//                                           recap of lessons 7 and 31 in B1,
//                                           6 and 14 in B2
//    3  Avant que, avant de            7   subjunctive even in the past, the
//                                           subjonctif passé for a fact done
//                                           first, one subject: avant de,
//                                           avant + nom, avant d'avoir
//    4  Jusqu'à ce que                 7   jusqu'à ce que against jusqu'au
//                                           moment où, en attendant que / de,
//                                           d'ici à ce que, d'ici que, tant
//                                           que... ne... pas
//    5  Le ne explétif                 7   the full teaching: where it goes,
//                                           optional, soutenu, NOT a
//                                           negation; ne... pas is; never
//                                           after sans que
//    6  En même temps                  7   quand, lorsque, pendant que (a
//                                           stretch), au moment où (an
//                                           instant), comme + imparfait
//    7  À mesure que, depuis que       7   à mesure que, chaque fois que,
//                                           toutes les fois que, tant que,
//                                           depuis que, maintenant que
//    8  Alors que : le temps ou non    7   alors que and tandis que in the
//                                           time sense against opposition
//                                           (lesson 16 in B2)
//    9  Quand tu arriveras             7   the future after every time word,
//                                           si keeps the present, the future
//                                           seen from the past
//   10  Après que                      7   the indicative norm, « après qu'il
//                                           soit parti » as spoken, the ways
//                                           out; the dangling infinitive
//   11  Dès que, une fois que          7   the compound tense follows the
//                                           other verb; passé antérieur for
//                                           recognition; une fois + participe
//   12  Ton compte rendu               11  model, plan, role play, TASK, quiz
//
//   TOTAL 87 missions, 12 acts. Corpus: 178 authored rows (.2400-.2599) in
//   twelve blocks plus 40 reused seed rows, released act by act through
//   `deckTranche`. Quiz: 12 rounds of 8 (one per act 2 to 11, a recycling
//   round citing lessons 7, 16 and 31 in B1 and 6, 7, 8, 12 and 16 in B2,
//   an exam-format round). Chapter artwork:
//   `subordonnees-temps-image-prompts.md`, twelve prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (a later lesson may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Vu du fait principal, ce qui n'a pas encore eu lieu prend le
//   subjonctif ; ce qui a lieu ou a déjà eu lieu prend l'indicatif. »
//   EN: Seen from the main event, what has not happened yet takes the
//   subjunctive; what is happening or has already happened takes the
//   indicative.
//
//   ONE METAPHOR, LA LIGNE VUE DU FAIT PRINCIPAL: two events on one line,
//   and the learner stands on the main one. Not yet there: subjunctive
//   (avant que, jusqu'à ce que, en attendant que, d'ici à ce que). There or
//   done: indicative (quand, pendant que, depuis que, après que, dès que),
//   future included. The expletive ne slips in only where the event is not
//   yet there. It is NOT « the uncertain takes the subjunctive » (avant que
//   le soleil se couche is certain). Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the time clause at B2, organised by the relation and its mood:
//           avant que with the subjonctif passé, avant de, avant + nom,
//           avant d'avoir; jusqu'à ce que against jusqu'au moment où, en
//           attendant que / de, d'ici à ce que (soutenu), d'ici que
//           (courant), tant que... ne... pas; THE EXPLETIVE NE IN FULL (the
//           rule other wave 6 lessons cite: NE_EXPLETIF_RULE in the corpus);
//           lorsque, au moment où, comme + imparfait; à mesure que, au fur
//           et à mesure que, chaque fois que, toutes les fois que, tant que,
//           depuis que, maintenant que; alors que and tandis que in the time
//           sense; the future after time words and the future in the past;
//           après que with the norm and the spoken variant; dès que,
//           aussitôt que, sitôt que, une fois que with the matching compound
//           tense; the passé antérieur for recognition; une fois + participe.
//   QUOTES  the reframes of lessons 7, 16 and 31 in B1 and 1, 6, 7, 8, 12,
//           14 and 16 in B2, re-exported from their corpus files; their rows
//           reused BY ID.
//   LEAVES  purpose (pour que, afin de) to lesson 17 in B2 and restriction
//           (à moins que) to lesson 19 in B2: both are named only where the
//           expletive ne follows them. The next lesson on the trail is
//           restriction, named in the roundup.
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
//   changes, no `why` names a position), as b2.16 does. Gate B2-2 spoken-
//   variant decision: the written norm is taught and tested; « après qu'il
//   soit parti » and « sans qu'on ne l'entende » are named as spoken or
//   contested and cost at most one point in the task; « avant que + indicatif »
//   is taught as simply wrong. The expletive ne is optional: every typed
//   answer after avant que accepts it and its absence (corpus §A.8).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. TWELVE acts and TWELVE quiz rounds: act 1 has no round of its own (as
//      lesson 16 in B2), so the rounds are acts 2 to 11, recycling, exam.
//   2. « AVANT QUE » WITH ONE SUBJECT (« je relis avant que je signe ») is
//      taught as « to avoid in careful writing », not as an error: the quiz
//      asks which sentence the written norm prefers, never marks it wrong in
//      a type-in, and the task does not penalise it. Agree?
//   3. « D'ICI QUE » is taught as courant (d'ici à ce que as soutenu), with
//      one familiar, ironic example row (.2454). Keep?
//   4. THE PASSÉ ANTÉRIEUR (dès qu'il eut fini) is recognition only (rows
//      .2575 and .2584 are flashcard rows with no voiceflash, never asked
//      for); the passé surcomposé (dès qu'il a eu fini) is not taught. Agree?
//   5. THE TASK: a compte rendu, 200 to 250 words, FIVE criteria (tâche 3,
//      cohérence 3, étendue 2, correction 2, registre 2 = 12), as lessons 15
//      and 16 in B2. Four situations to choose from. Annotation block inside
//      `modelAnswer`.
//   6. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' is inert; kept.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap, NE_EXPLETIF_RULE, NE_EXPLETIF_RULE_EN,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  LECTURE_RAPPORT, LECTURE_MODELE,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A11,
  B107_REFRAME, B107_REFRAME_EN, B116_REFRAME, B116_REFRAME_EN, B131_REFRAME, B131_REFRAME_EN,
  B201_REFRAME, B201_REFRAME_EN, B206_REFRAME, B206_REFRAME_EN, B207_REFRAME, B207_REFRAME_EN,
  B208_REFRAME, B208_REFRAME_EN, B212_REFRAME, B212_REFRAME_EN, B214_REFRAME, B214_REFRAME_EN,
  B216_REFRAME, B216_REFRAME_EN,
  FUTUR_USAGE_UNIT, SUBJ_INF_UNIT, SUBORD_UNIT, MODES_UNIT, FUT_ANT_UNIT,
  FUTUR_USAGE_REF, SI_REF, SUBJ_INF_REF, DISCOURS_REF, SUBORD_REF, PQP_REF, SUBJ_PASSE_REF,
  MODES_REF, FUT_ANT_REF, PS_REF, NOMINAL_REF, GERONDIF_REF, INF_REF, CONCESSION_REF,
  BUT_REF, RESTRICTION_REF,
} from './subordonnees-temps-corpus.ts';
import { SUBORDONNEES_TEMPS_TERMS } from './subordonnees-temps-terms.ts';

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
const CL = (n: number) => `fr.b1.connecteurs-logiques.${n}`;
const OA = (n: number) => `fr.b2.opinions-et-avis.${n}`;
const PF = (n: number) => `fr.b1.projets-et-futur.${n}`;
const FP = (n: number) => `fr.b2.faits-et-procedures.${n}`;
const PF2 = (n: number) => `fr.b2.projets-et-futur.${n}`;

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.18: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.18: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.18: no respell on ${id}`);
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
 *  ACT 1: METTRE LES FAITS DANS L'ORDRE
 *
 *  Meet the time clause, and the one rule under its moods. The scene's
 *  wrong option is « avant que + indicatif »: it asserts the leak as already
 *  there when the tenant left, which is exactly what the insurer must not
 *  read. NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const AVANT_QUE_INDIC = {
  fr: "J'ai quitté l'appartement avant que la fuite a commencé.",
  ipa: '/ʒe ki.te la.paʁ.tə.mɑ̃ a.vɑ̃ kə la fɥit a kɔ.mɑ̃.se/',
  respell: '[zhay kee-TAY la-par-tuh-MAHⁿ | a-vahⁿ kuh la FWEET | a ko-mahⁿ-SAY]',
  en: 'I left the flat before the leak started. (With an indicative that asserts the leak had already begun.)',
};

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La déclaration de sinistre',
  frSub: 'Chaque fait à sa place',
  setting: { place: "Au téléphone avec la compagnie d'assurance", city: 'Montréal', time: 'mardi, 10 h', ambience: 'un appartement en désordre, des serviettes par terre, un clavier au bout du fil' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, un mardi matin. Un tuyau a cédé chez toi pendant ton absence, et l'eau a coulé jusqu'à la cave. Tu appelles ton assurance. L'agente, Mme Lavoie, remplit ta déclaration.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mme Lavoie',
      fr: "Dites-moi d'abord à quelle heure vous avez quitté l'appartement.",
      en: 'First tell me what time you left the flat.',
      respell: '[deet-MWA da-BOR | a kel UHR | voo-za-vay kee-TAY la-par-tuh-MAHⁿ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Vers sept heures. Le gardien a vu l'eau à sept heures et demie.",
      en: 'Around seven. The caretaker saw the water at half past seven.',
      respell: '[vehr seh-TUHR | luh gar-DYEHⁿ a vü LOH | a seh-tuhr ay duh-MEE]',
      stage: 'Mme Lavoie tape chaque mot dans le dossier.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Pour l'assurance, une seule chose compte : la fuite avait-elle déjà commencé quand tu as fermé la porte ? Tu veux dire que non, dans une seule phrase.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Quelle phrase dit clairement que la fuite a commencé après ton départ.',
      size: 'lg',
      options: [
        { fr: AVANT_QUE_INDIC.fr, respell: AVANT_QUE_INDIC.respell, en: AVANT_QUE_INDIC.en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(2400)), respell: rsOf(E(2400)), en: en(E(2400)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Mme Lavoie note « départ avant le sinistre ». Ton dossier passe à l’expert sans question de plus.',
        breaks: 'Mme Lavoie s’arrête : « a commencé » pose la fuite comme déjà là. Elle écrit « à vérifier » et te demande si tu l’as vue en partant.',
      },
    },
    {
      kind: 'break',
      heading: 'Avant que : pas encore, donc le subjonctif',
      body: "Vu de ton départ, la fuite n'avait pas encore eu lieu : subjonctif, avant que la fuite commence. « A commencé » l'affirme comme un fait déjà là, et l'agente entend que tu l'as laissée couler. EN: seen from your departure, the leak had not happened yet: subjunctive.",
      wrong: { fr: AVANT_QUE_INDIC.fr, ipa: AVANT_QUE_INDIC.ipa, respell: AVANT_QUE_INDIC.respell, en: AVANT_QUE_INDIC.en },
      right: { fr: fr(E(2400)), ipa: ipaOf(E(2400)), respell: rsOf(E(2400)), en: en(E(2400)) },
      coach: `${REFRAME} EN: Seen from the main event: not yet, subjunctive; there or done, indicative.`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Ta déclaration est claire. Dans un compte rendu, chaque mot de temps place un fait avant, pendant ou après un autre, et le mode suit cette place. C'est le sujet de cette leçon.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['ligne', 'avant'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Placer un fait avant le fait principal', s: 'Actes 2 à 5 : avant que, jusqu’à ce que, en attendant que, le ne explétif' },
    { t: 'Dire ce qui se passe en même temps', s: 'Actes 6 à 8 : lorsque, au moment où, à mesure que, alors que' },
    { t: 'Dire ce qui est déjà fait, et l’avenir', s: 'Actes 9 à 11 : quand + futur, après que, dès que' },
    { t: 'Écrire un compte rendu de 200 à 250 mots', s: 'Acte 12 : les faits dans l’ordre, du début à la fin' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le dégât des eaux',
  frSub: 'Lis, et repère chaque mot de temps',
  text: LECTURE_RAPPORT,
  glossary: [
    { word: 'la vanne', en: 'the valve', note: 'Le robinet principal qui ferme l’eau de tout l’immeuble.' },
    { word: 'inondée', en: 'flooded', note: 'Pleine d’eau.' },
    { word: 'hors service', en: 'out of order', note: 'Qui ne marche plus.' },
    { word: 'avait cédé', en: 'had given way', note: 'Avait cassé sous la pression.' },
  ],
  questions: [
    { q: 'Global : à quoi sert ce compte rendu ?', a: "À informer les locataires : ce qui s'est passé, dans l'ordre, ce qui a été fait, et ce qu'on leur demande maintenant (ne rien jeter, prendre l'escalier B)." },
    { q: 'Ordre : qu’est-ce qui vient d’abord, la coupure de l’eau ou l’arrivée des pompiers ?', a: "La coupure de l'eau : le gardien coupe l'eau dès qu'il trouve la vanne, puis on appelle les pompiers, qui arrivent vingt minutes plus tard." },
    { q: 'Détail : jusqu’à quand les locataires sont-ils restés dans la cour ?', a: "Jusqu'à ce que l'électricien vérifie les compteurs ; personne n'a pu rentrer avant que l'immeuble soit déclaré sûr, vers midi." },
    { q: 'Inférence : pourquoi la gestionnaire précise-t-elle que le locataire était parti avant la fuite ?', a: "Pour dire qu'il n'est pas responsable : il ne pouvait ni voir la fuite ni l'arrêter." },
    { q: 'Forme : dans « avant que la fuite ne commence », la fuite a-t-elle commencé ?', a: "Oui, après son départ. Ce ne ne nie rien : c'est un ne explétif, que tu retrouveras à l'acte 5." },
    { q: 'Forme : trouve un mot de temps suivi du subjonctif, un de l’indicatif et un de l’infinitif.', a: "Avant que l'immeuble soit déclaré sûr, jusqu'à ce que l'électricien vérifie ; lorsque le gardien est arrivé, dès qu'il a trouvé ; après avoir séché." },
  ],
  audio: REC('rec-b2-18-rapport'),
  say: REFRAME,
  terms: ['ligne', 'rapport'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère la place de chaque fait',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Pas encore arrivé', [
      it(E(2400), 'la fuite commence après le départ'),
      it(E(2404), 'la vérification vient après l’attente'),
      it(E(2407), 'la déclaration vient après'),
      it(E(2413), 'un seul sujet : avant de'),
    ], chk('Dans ces phrases, au moment du fait principal, le fait qui suit avant que ou jusqu’à ce que…',
      ['n’a pas encore eu lieu', 'a déjà eu lieu', 'n’aura jamais lieu'], 0,
      'Pas encore : c’est pour cela que le subjonctif suit. EN: not yet, hence the subjunctive.')),
    grp('En cours ou déjà fait', [
      it(E(2401), 'l’arrivée du gardien, un fait'),
      it(E(2402), 'la vanne trouvée, puis l’eau coupée'),
      it(E(2403), 'deux actions en même temps'),
      it(E(2408), 'un point de départ'),
    ], chk('« Il a coupé l’eau dès qu’il a trouvé la vanne. » Qu’est-ce qui vient en premier ?',
      ['il trouve la vanne', 'il coupe l’eau', 'les deux en même temps'], 0,
      'La vanne, puis l’eau : dès que dit ce qui est fini juste avant. EN: first the valve.')),
    ctl('Le mode', '« Personne n’a pu rentrer avant que l’immeuble … déclaré sûr. »',
      ['soit', 'est'], 0,
      'La déclaration n’avait pas encore eu lieu : subjonctif. EN: soit.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ligne'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où l’ordre des faits compte',
  cases: [
    { situation: 'Tu déclares un sinistre à ton assurance', fr: fr(E(2400)), en: en(E(2400)) },
    { situation: 'Tu réponds à l’agente par courriel', fr: fr(E(2412)), en: en(E(2412)) },
    { situation: 'Tu écris au propriétaire pour ton entreprise', fr: fr(E(2413)), en: en(E(2413)) },
    { situation: 'Tu prépares la visite de l’expert', fr: fr(E(2410)), en: en(E(2410)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['rapport'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La ligne', 'Pour choisir le mode après un mot de temps, tu te places…',
    ['sur le fait principal', 'au moment où tu parles'], 0,
    'Vu du fait principal : pas encore, subjonctif ; déjà là, indicatif. EN: from the main event.'),
  ctl('Avant que', '« J’ai quitté l’appartement avant que la fuite … »',
    ['commence', 'a commencé'], 0,
    'Pas encore là quand tu pars : subjonctif. EN: commence.'),
  ctl('Lorsque', '« Lorsque le gardien … arrivé, l’eau coulait déjà. »',
    ['est', 'soit'], 0,
    'L’arrivée a eu lieu : indicatif. EN: est.'),
], ['ligne']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Mettre les faits dans l’ordre',
    opener: {
      line: "Une fuite, un gardien, des pompiers, une assurance : ici tu découvres que chaque mot de temps place un fait avant, pendant ou après un autre, et que le mode suit cette place. EN: A leak, a caretaker, firefighters, an insurer: here you find that each time word places an event, and the mood follows its place.",
      imageRef: 'lessons/subordonnees-temps/act01.jpg',
    },
    sections: [],
    milestone: "Tu repères les mots de temps dans un compte rendu, tu dis quel fait vient en premier, et tu sais qu'avant que ne prend jamais l'indicatif. EN: You can spot time words in a report, order the events, and never put an indicative after avant que.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: LA LIGNE DU TEMPS
 *
 *  The recap of lessons 7 and 31 in B1 and 6 and 14 in B2, then the map:
 *  one call, one train, placed before, during and after.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà',
  frSub: 'Quatre leçons, une même ligne',
  hint: 'Quatre cartes. Chacune rappelle une leçon.',
  audio: REC('rec-b2-18-rappel'),
  say: REFRAME,
  terms: ['ligne', 'sujet'],
  cards: [
    {
      head: 'La conjonction choisit', label: Cap(SUBORD_REF),
      fr: fr(CL(1339)), sub: rsOf(CL(1339)),
      body: `« ${B131_REFRAME} » Pendant que, depuis que, lorsque, après que : tu les connais. Ici, tu les places sur une ligne. EN: ${B131_REFRAME_EN}`,
    },
    {
      head: 'Le futur de quand', label: Cap(FUTUR_USAGE_REF),
      fr: fr(PF(433)), sub: rsOf(PF(433)),
      body: `« ${B107_REFRAME} » L'acte 9 étend cette règle à tous les mots de temps. EN: ${B107_REFRAME_EN}`,
    },
    {
      head: 'Avant, après', label: Cap(MODES_REF),
      fr: fr(OA(1938)), sub: rsOf(OA(1938)),
      body: `« ${B206_REFRAME} » Tu as opposé avant que et après que. Ici, la même idée vaut pour dix autres mots. EN: ${B206_REFRAME_EN}`,
    },
    {
      head: 'Un seul sujet', label: Cap(INF_REF),
      fr: fr(FP(1242)), sub: rsOf(FP(1242)),
      body: `« ${B214_REFRAME} » Après avoir signé, avant de partir : une seule personne, un infinitif. EN: ${B214_REFRAME_EN}`,
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-ligne',
  title: 'Trois places, deux modes',
  cols: ['Mot', 'Le fait', 'Forme'],
  rows: [
    { cells: ['avant que', 'pas encore', 'subjonctif'], say: fr(E(2417)),
      detail: { title: 'avant que', body: "Vu du fait principal, l'autre n'a pas encore eu lieu : subjonctif, même dans un récit au passé. EN: not yet: subjunctive.", say: fr(E(2426)) } },
    { cells: ['jusqu’à ce que', 'attendu', 'subjonctif'], say: fr(E(2423)),
      detail: { title: 'jusqu’à ce que', body: "La limite qu'on attend n'est pas encore là. En attendant que et d'ici à ce que suivent la même règle. EN: an awaited limit: subjunctive.", say: fr(E(2450)) } },
    { cells: ['avant de', 'un seul sujet', 'infinitif'], say: fr(E(2421)),
      detail: { title: 'avant de', body: "La même personne fait les deux actions : l'infinitif. EN: one subject: infinitive.", say: fr(E(2413)) } },
    { cells: ['pendant que, quand', 'en même temps', 'indicatif'], say: fr(E(2418)),
      detail: { title: 'pendant que, quand', body: "Le fait a lieu en même temps : il est réel, donc l'indicatif, au futur s'il le faut. EN: same time: indicative.", say: fr(E(2420)) } },
    { cells: ['après que, dès que', 'déjà fait', 'indicatif'], say: fr(E(2424)),
      detail: { title: 'après que, dès que', body: "Le fait a déjà eu lieu : l'indicatif. À l'oral, on entend après qu'il soit ; l'écrit garde l'indicatif. EN: already done: indicative.", say: fr(E(2419)) } },
    { cells: ['après + infinitif passé', 'un seul sujet', 'infinitif'], say: fr(E(2422)),
      detail: { title: 'après + infinitif passé', body: "Après être descendu, après avoir signé : une seule personne, et l'action est finie. EN: after + past infinitive.", say: fr(FP(1242)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ligne'],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-trier',
  layer: 'core',
  size: 'lg',
  title: 'La place, puis le mode',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Pas encore : subjonctif', [
      it(E(2417), 'avant que'),
      it(E(2423), 'jusqu’à ce que'),
      it(E(2426), 'avant que, en tête'),
      it(OA(1938), 'avant que, dans un récit'),
    ], chk('« Attends sur le quai jusqu’à ce que le train arrive. » Pendant que tu attends, le train…',
      ['n’est pas encore arrivé', 'est déjà arrivé', 'n’arrivera jamais'], 0,
      'Pas encore : jusqu’à ce que + subjonctif. EN: not yet.')),
    grp('En cours ou fait : indicatif', [
      it(E(2418), 'pendant que'),
      it(E(2419), 'dès que'),
      it(E(2424), 'après que'),
      it(PF2(1880), 'dès que, au futur antérieur'),
    ], chk('« Appelle-moi dès que le train sera parti. » Au moment de l’appel, le départ…',
      ['a déjà eu lieu', 'n’a pas encore eu lieu'], 0,
      'Dès que : fini avant l’appel, donc l’indicatif, au futur antérieur. EN: already done.')),
    ctl('Un seul sujet', '« Appelle-moi avant … dans le train. » (toi, deux fois, à l’écrit soigné)',
      ['de monter', 'que tu montes'], 0,
      'Une seule personne : avant de + infinitif. EN: one subject.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ligne', 'sujet'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Un appel, huit moments',
  frSub: 'Huit phrases à l’oreille',
  lines: [
    ln(E(2417)), ln(E(2418)), ln(E(2419)), ln(E(2420)),
    ln(E(2421)), ln(E(2422)), ln(E(2423)), ln(E(2424)),
  ],
  questions: [
    { q: 'Première phrase : le train est-il déjà parti au moment de l’appel ?', opts: ['non, pas encore', 'oui'], correct: 0, why: 'Avant que : le départ est à venir. EN: not yet.' },
    { q: 'Deuxième phrase : quand faut-il appeler ?', opts: ['pendant le trajet', 'avant le départ'], correct: 0, why: 'Pendant que le train roule. EN: during the journey.' },
    { q: 'Troisième phrase : le départ a-t-il eu lieu quand on appelle ?', opts: ['oui, juste avant', 'non'], correct: 0, why: 'Dès que + futur antérieur : c’est fait. EN: yes.' },
    { q: 'Sixième phrase : qui descend du train ?', opts: ['la personne qui appelle', 'une autre personne'], correct: 0, why: 'Après être descendu : un seul sujet, toi. EN: the caller.' },
    { q: 'Dernière phrase : qu’est-ce qui s’est vidé ?', opts: ['le quai', 'le train'], correct: 0, why: 'Après le départ, le quai s’est vidé. EN: the platform.' },
  ],
  audio: REC('rec-b2-18-ligne-ecoute'),
  say: REFRAME,
  terms: ['ligne'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre réflexes à corriger',
  errors: [
    {
      wrong: 'Appelle-moi avant que le train part.',
      right: fr(E(2417)),
      why: "Normal : l'anglais dit before the train leaves, au présent. Mais le départ n'a pas encore eu lieu : subjonctif, parte. EN: not yet: subjunctive.",
    },
    {
      wrong: 'Après que le train soit parti, le quai s’est vidé.',
      right: fr(E(2424)),
      why: "Normal : on l'entend partout, par analogie avec avant que. À l'écrit soigné, après que regarde un fait accompli : l'indicatif, est parti. EN: spoken, criticised in writing.",
    },
    {
      wrong: 'Appelle-moi quand tu es dans le train.',
      right: fr(E(2420)),
      why: "Normal : l'anglais dit when you are, et on l'entend aussi à l'oral. Mais le trajet, c'est plus tard : à l'écrit, le futur, quand tu seras. EN: the future after quand.",
    },
    {
      wrong: 'Appelle-moi avant que tu montes dans le train.',
      right: fr(E(2421)),
      why: "Normal : avant que marche avec deux personnes. Ici, c'est toi qui appelles et toi qui montes : l'écrit soigné dit avant de monter. EN: one subject: avant de.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ligne', 'oral'],
};

const A2_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a2-flash',
  layer: 'core',
  title: 'Huit moments à avoir en bouche',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'before the train leaves', back: 'avant que le train parte', say: fr(E(2417)) },
    { front: 'until the train arrives', back: 'jusqu’à ce que le train arrive', say: fr(E(2423)) },
    { front: 'before getting on', back: 'avant de monter', say: fr(E(2421)) },
    { front: 'while the train is moving', back: 'pendant que le train roule', say: fr(E(2418)) },
    { front: 'when you are on the train (later)', back: 'quand tu seras dans le train', say: fr(E(2420)) },
    { front: 'as soon as the train has left (later)', back: 'dès que le train sera parti', say: fr(E(2419)) },
    { front: 'after the train left', back: 'après que le train est parti', say: fr(E(2424)) },
    { front: 'after getting off', back: 'après être descendu', say: fr(E(2422)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ligne'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le subjonctif', 'Lequel prend le subjonctif ?',
    ['jusqu’à ce que', 'pendant que', 'après que'], 0,
    'Une limite attendue, pas encore là. EN: jusqu’à ce que.'),
  ctl('Après que', '« Après que le train … parti, le quai s’est vidé. »',
    ['est', 'soit'], 0,
    'Déjà fait : indicatif. EN: est.'),
  ctl('Un seul sujet', '« Appelle-moi … du train. »',
    ['après être descendu', 'après que tu es descendu'], 0,
    'Une seule personne, et l’appel est à venir : l’infinitif passé. EN: après être descendu.'),
], ['ligne']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La ligne du temps',
    opener: {
      line: "Un appel, un train qui part : ici tu places l'appel avant, pendant ou après le départ, et tu vois le mode changer avec la place. EN: A call and a departing train: here you place the call before, during or after, and watch the mood follow.",
      imageRef: 'lessons/subordonnees-temps/act02.jpg',
    },
    sections: [],
    milestone: "Tu sais quelle forme suit chaque mot de temps : subjonctif pour ce qui n'a pas encore eu lieu, indicatif pour le reste, infinitif pour un seul sujet. EN: You know which form follows each time word.",
    estScreens: 38, restPoints: ['a2-table', 'a2-ecoute'],
  },
  sections: [A2_RAPPEL, A2_TABLE, A2_TRIER, A2_ECOUTE, A2_ERREURS, A2_FLASH, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: AVANT QUE, AVANT DE
 *
 *  Past lessons 16 in B1 and 6 in B2: avant que keeps the subjunctive even
 *  in a past narrative, takes the subjonctif passé for an event finished
 *  first (lesson 5 in B2), and gives way to avant de, avant d'avoir or
 *  avant + nom.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'La procédure de Mme Keller',
  frSub: 'Avant, toujours avant',
  setting: 'Genève, la pharmacie Keller, avant l’ouverture. Mme Keller forme Lucas, un stagiaire, et lui dicte la procédure.',
  bubbles: [
    { from: 'narrator', fr: 'Lucas note tout ; Mme Keller insiste sur un seul mot : avant.', en: 'Lucas writes everything down; Mme Keller stresses a single word: before.' },
    { from: 'user', fr: fr(E(2432)), en: en(E(2432)) },
    { from: 'coach', fr: 'Avant de : c’est toi qui prépares et toi qui te laves les mains. Un seul sujet, un infinitif.', en: 'Avant de: you prepare and you wash your hands. One subject, an infinitive.', warn: 'Un seul sujet' },
    { from: 'user', fr: fr(E(2433)), en: en(E(2433)) },
    { from: 'coach', fr: 'Avant que : deux personnes, toi et le patient. Et son départ n’a pas encore eu lieu : subjonctif.', en: 'Avant que: two people, you and the patient. And his leaving has not happened yet: subjunctive.', warn: 'Deux sujets' },
    { from: 'user', fr: fr(E(2435)), en: en(E(2435)) },
    { from: 'coach', fr: 'Ait relu : la relecture doit être finie avant. C’est le subjonctif passé.', en: 'Ait relu: the rereading must be finished first. That is the subjonctif passé.', warn: 'Un fait fini avant' },
    { from: 'user', fr: fr(E(2445)), en: en(E(2445)) },
    { from: 'coach', fr: 'Avant la fermeture : un nom, et plus de verbe du tout.', en: 'Avant la fermeture: a noun, and no verb at all.', warn: 'Avant + nom' },
  ],
  closing: { fr: 'Avant de, avant que, avant + nom : trois façons de dire qu’un fait n’a pas encore eu lieu.', en: 'Avant de, avant que, avant + noun: three ways to say an event has not happened yet.' },
  audio: REC('rec-b2-18-keller'),
  say: REFRAME,
  terms: ['avant', 'sujet'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-avant',
  title: 'Avant que, plus loin',
  frSub: 'Ce que le B1 ne disait pas',
  hint: 'Quatre cartes. La dernière enlève le verbe.',
  audio: REC('rec-b2-18-avant'),
  say: REFRAME,
  terms: ['avant', 'sujet'],
  cards: [
    {
      head: 'Pas encore, même au passé', label: 'avant que',
      fr: fr(E(2444)), sub: rsOf(E(2444)),
      body: "Au moment du départ, le merci n'avait pas encore eu lieu. Même dans un récit au passé, le subjonctif présent suffit : puisse. EN: the present subjunctive, even in a past story.",
    },
    {
      head: 'Fini avant l’autre', label: Cap(SUBJ_PASSE_REF),
      fr: fr('fr.b2.emotions.1320'), sub: rsOf('fr.b2.emotions.1320'),
      body: "La relecture doit être finie avant la signature : subjonctif passé, qu'on ait relu. EN: done first: subjonctif passé.",
    },
    {
      head: 'Un seul sujet', label: Cap(SUBJ_INF_REF),
      fr: fr(E(2440)), sub: rsOf(E(2440)),
      body: `« ${B116_REFRAME} » Je relis avant de signer ; je relis avant que tu signes. EN: ${B116_REFRAME_EN}`,
    },
    {
      head: 'Sans verbe conjugué', label: 'deux raccourcis',
      fr: fr(E(2436)), sub: rsOf(E(2436)),
      body: "Avant la fermeture : un nom. Avant d'avoir fini : l'infinitif passé, pour un fait fini avant, avec un seul sujet. EN: a noun, or avant d'avoir + participle.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Avant que ou avant de',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Un sujet ou deux', [
      it(E(2440), 'toi seul : avant de'),
      it(E(2441), 'toi et un autre : avant que'),
      it(E(2443), 'toi seul : avant de'),
      it(E(2434), 'toi et les clients : avant que'),
    ], chk('« Réfléchis bien … au patient. » (toi, deux fois, à l’écrit soigné)',
      ['avant de répondre', 'avant que tu répondes'], 0,
      'Un seul sujet : avant de + infinitif. EN: avant de répondre.')),
    grp('Présent ou passé', [
      it(E(2433), 'le départ est à venir'),
      it(E(2435), 'la relecture doit être finie'),
      it(E(2447), 'la fermeture n’avait pas eu lieu'),
      it('fr.b2.emotions.1320', 'la relecture d’abord'),
    ], chk('« Ne donne rien avant que la pharmacienne … l’ordonnance. » (la relecture doit être finie)',
      ['ait relu', 'a relu', 'aura relu'], 0,
      'Avant que : subjonctif, et passé pour un fait fini avant. EN: ait relu.')),
    ctl('Le passé', '« Le médecin a rappelé avant que nous … fermé. »',
      ['ayons', 'avons'], 0,
      'Avant que : subjonctif, même au passé. EN: ayons.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avant', 'sujet'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Ce qui n’entre jamais après avant que',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Avant que : pas encore, donc subjonctif',
    body: "Avant que regarde un fait qui n'a pas encore eu lieu : subjonctif présent, ou passé pour un fait fini avant. Jamais l'indicatif, jamais le futur ; et avec un seul sujet, avant de. EN: always the subjunctive; one subject, avant de.",
  },
  cards: [
    trap(E(2433), 'avant que + indicatif', 'Vérifie la dose avant que le patient repart.', 'Pas encore reparti : subjonctif, reparte. EN: reparte.'),
    trap(E(2437), 'avant que + indicatif', 'Préviens le médecin avant qu’il est trop tard.', 'Avant que + subjonctif : soit. EN: soit.'),
    trap(E(2444), 'avant que + passé composé', 'Il est parti avant que j’ai pu le remercier.', 'Le merci n’a pas eu lieu : subjonctif, puisse. EN: puisse.'),
    trap(E(2440), 'un seul sujet', 'Je relis toujours avant que je signe.', 'Toi seul : avant de signer. EN: avant de.'),
    trap(E(2434), 'avant que + futur', 'Range les flacons avant que les clients arriveront.', 'Jamais de futur : arrivent, au subjonctif. EN: arrivent.'),
    trap(E(2436), 'avant d’avoir + participe', 'Avant d’avoir finir son stage, Lucas savait déjà préparer un sirop.', 'Avant d’avoir, puis le participe : fini. EN: fini.'),
  ],
  drill: [
    { promptSay: 'Vérifie la dose avant que le patient …', opts: ['reparte', 'repart'], correct: 0 },
    { promptSay: 'Préviens le médecin avant qu’il … trop tard.', opts: ['est', 'soit'], correct: 1 },
    { promptSay: 'Je relis toujours avant … signer.', opts: ['de', 'que je'], correct: 0 },
    { promptSay: 'Il est parti avant que je … le remercier.', opts: ['puisse', 'ai pu'], correct: 0 },
    { promptSay: 'Range les flacons avant que les clients …', opts: ['arriveront', 'arrivent'], correct: 1 },
    { promptSay: 'Ne donne rien avant que la pharmacienne … relu l’ordonnance.', opts: ['ait', 'a'], correct: 0 },
    { promptSay: 'Lave-toi les mains avant … toucher les médicaments.', opts: ['que tu', 'de'], correct: 1 },
    { promptSay: 'Le médecin a rappelé avant que nous … fermé.', opts: ['ayons', 'avons'], correct: 0 },
  ],
  steps: STEPS('Avant que : pas encore, donc subjonctif', 'Ce qui n’entre jamais après avant que'),
  audio: REC('rec-b2-18-piege-avant'),
  say: REFRAME,
  terms: ['avant', 'sujet'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq phrases, cinq nuances',
  frSub: 'Des leçons précédentes et de celle-ci',
  examples: [
    ex('fr.b1.opinions-et-avis.1065', 'deux personnes, un ordre : avant que + subjonctif'),
    ex('fr.b2.emotions.1320', 'la relecture finie avant : subjonctif passé'),
    ex(FP(1241), "un seul sujet, un fait fini avant : avant d'avoir fini"),
    ex('fr.b2.litterature.1280', "un récit au passé : avant qu'il ait fini"),
    ex(E(2447), 'le rappel avant la fermeture : subjonctif passé'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avant'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Compléter : la procédure de la pharmacie', TEXTE_A3, [
  { q: 'Les deux premières consignes : avant de (commencer) ; avant de (toucher).', a: "Avant de commencer ; avant de toucher : c'est toi qui fais les deux actions, un seul sujet, l'infinitif." },
  { q: 'Troisième consigne : avant que la pharmacienne (relire) l’ordonnance.', a: "Avant que la pharmacienne ait relu l'ordonnance : la relecture doit être finie avant, subjonctif passé. Avant qu'elle relise se dit aussi, sans insister sur la fin." },
  { q: 'Quatrième consigne : avant que le patient (repartir).', a: "Avant que le patient reparte : deux sujets, le départ n'a pas encore eu lieu, subjonctif." },
  { q: 'Dernière consigne : avant que le client suivant (arriver).', a: "Avant que le client suivant arrive : subjonctif. Plus soutenu, avec le ne explétif : avant que le client suivant n'arrive." },
], 'rec-b2-18-texte-a3', ['avant', 'sujet']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Avant que', '« Préviens le médecin avant qu’il … trop tard. »',
    ['soit', 'est', 'sera'], 0,
    'Pas encore : subjonctif. EN: soit.'),
  ctl('Un seul sujet', '« Je relis toujours … »',
    ['avant de signer', 'avant que je signe'], 0,
    'Un seul sujet : l’écrit soigné dit avant de. EN: avant de signer.'),
  ctl('Le passé', 'Pour un fait fini avant l’autre, avant que prend…',
    ['le subjonctif passé', 'le passé composé'], 0,
    'Avant qu’on ait relu : subjonctif passé. EN: the subjonctif passé.'),
], ['avant']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Avant que, avant de',
    opener: {
      line: "Une procédure où tout se fait avant quelque chose : ici tu gardes le subjonctif après avant que, même au passé, et tu passes à avant de quand une seule personne agit. EN: A procedure where everything happens before something: here you keep the subjunctive after avant que, and switch to avant de for one subject.",
      imageRef: 'lessons/subordonnees-temps/act03.jpg',
    },
    sections: [],
    milestone: "Tu mets le subjonctif, présent ou passé, après avant que, et avant de, avant d'avoir ou un nom quand une seule personne agit. EN: You can use avant que with the right subjunctive, and avant de for one subject.",
    estScreens: 38, restPoints: ['a3-construire', 'a3-piege'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_PIEGE, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: JUSQU'À CE QUE, EN ATTENDANT QUE, D'ICI QUE
 *
 *  The awaited limit takes the subjunctive, even in a past narrative;
 *  jusqu'au moment où states a dated fact in the indicative; en attendant de
 *  for one subject; d'ici à ce que (soutenu), d'ici que (courant); tant
 *  que... ne... pas says the same limit in the indicative.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Le train annulé',
  frSub: 'Attendre, et jusqu’à quand',
  setting: 'Bruxelles-Midi, 17 h. Le train pour Paris est annulé. Sarah et Thomas, deux collègues, attendent dans le hall.',
  bubbles: [
    { from: 'narrator', fr: 'Thomas s’énerve ; Sarah, elle, organise l’attente.', en: 'Thomas gets annoyed; Sarah organises the wait.' },
    { from: 'user', fr: fr(E(2450)), en: en(E(2450)) },
    { from: 'coach', fr: 'Jusqu’à ce que : la limite de l’attente. Le départ n’a pas encore eu lieu, donc le subjonctif.', en: 'Jusqu’à ce que: the end point of the wait. The departure has not happened yet, so the subjunctive.', warn: 'La limite' },
    { from: 'user', fr: fr(E(2451)), en: en(E(2451)) },
    { from: 'coach', fr: 'En attendant que : le même fait attendu, et on fait autre chose pendant ce temps.', en: 'En attendant que: the same awaited event, and something else to do meanwhile.', warn: 'En attendant que' },
    { from: 'user', fr: fr(E(2452)), en: en(E(2452)) },
    { from: 'coach', fr: 'En attendant de : Thomas attend, et c’est Thomas qui saura. Un seul sujet, l’infinitif.', en: 'En attendant de: Thomas waits, and Thomas will find out. One subject, the infinitive.', warn: 'Un seul sujet' },
    { from: 'user', fr: fr(E(2454)), en: en(E(2454)) },
    { from: 'coach', fr: 'D’ici que : jusqu’au moment où, avec un peu d’ironie. C’est courant ; d’ici à ce que est plus soutenu.', en: 'D’ici que: until the moment when, with a touch of irony. Everyday; d’ici à ce que is more formal.', warn: 'D’ici que' },
  ],
  closing: { fr: 'Jusqu’à ce que, en attendant que, d’ici que : une limite qu’on attend, donc le subjonctif.', en: 'Jusqu’à ce que, en attendant que, d’ici que: a limit still awaited, so the subjunctive.' },
  audio: REC('rec-b2-18-gare'),
  say: REFRAME,
  terms: ['limite', 'sujet'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-avant',
  title: 'La limite attendue',
  frSub: 'Subjonctif, sauf pour un fait daté',
  hint: 'Quatre cartes. La deuxième pose un fait.',
  audio: REC('rec-b2-18-limite'),
  say: REFRAME,
  terms: ['limite'],
  cards: [
    {
      head: 'Même au passé', label: 'jusqu’à ce que',
      fr: fr(E(2455)), sub: rsOf(E(2455)),
      body: "Quand le contrôleur répète l'annonce, la descente n'a pas encore eu lieu : subjonctif, descende, même dans un récit au passé. EN: subjunctive, even in a past story.",
    },
    {
      head: 'Un fait daté', label: 'jusqu’au moment où',
      fr: fr(E(2456)), sub: rsOf(E(2456)),
      body: "Pour poser l'arrivée comme un fait qui a bien eu lieu, à une heure précise : jusqu'au moment où + indicatif, est arrivé. EN: a dated fact: indicative.",
    },
    {
      head: 'Attendre que, attendre de', label: 'en attendant',
      fr: fr(E(2452)), sub: rsOf(E(2452)),
      body: "Deux sujets : en attendant que + subjonctif. Un seul : en attendant de + infinitif. Avec un nom : en attendant le train. EN: two subjects, que; one subject, de; or a noun.",
    },
    {
      head: 'La même limite', label: 'tant que… ne… pas',
      fr: fr(E(2458)), sub: rsOf(E(2458)),
      body: "Tant que le train n'est pas annoncé dit la même chose que jusqu'à ce qu'il soit annoncé, mais à l'indicatif. Sans négation, tant que veut dire aussi longtemps que. EN: tant que + negation means until.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Attendu ou daté',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Une limite attendue : subjonctif', [
      it(E(2450), 'jusqu’à ce que'),
      it(OA(1942), 'en attendant que'),
      it(E(2453), 'd’ici à ce que, soutenu'),
      it(OA(1950), 'jusqu’à ce que, au futur'),
    ], chk('« Garde ton billet jusqu’à ce que tu … remboursé. »',
      ['sois', 'es', 'seras'], 0,
      'Le remboursement n’a pas encore eu lieu : subjonctif. EN: sois.')),
    grp('Un fait ou une durée : indicatif', [
      it(E(2456), 'jusqu’au moment où'),
      it(E(2458), 'tant que + ne… pas'),
      it(E(2464), 'tant que, au futur'),
      it(PF(439), 'tant que + ne… pas, au futur'),
    ], chk('« Reste dans la salle tant que le train … pas annoncé. »',
      ['n’est', 'ne soit'], 0,
      'Tant que garde l’indicatif, même avec la négation. EN: n’est.')),
    ctl('Un seul sujet', '« … connaître l’horaire, j’ai prévenu mon client. » (à l’écrit soigné)',
      ['En attendant de', 'En attendant que je'], 0,
      'Une seule personne : en attendant de + infinitif. EN: en attendant de.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['limite', 'sujet'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Dans le hall de la gare',
  frSub: 'Huit phrases à l’oreille',
  lines: [
    ln(E(2450)), ln(E(2451)), ln(E(2453)), ln(E(2455)),
    ln(E(2456)), ln(E(2458)), ln('fr.b1.opinions-et-avis.1340'), ln('fr.b2.emotions.1321'),
  ],
  questions: [
    { q: 'Première phrase : combien de temps va-t-on rester ?', opts: ['jusqu’au départ du train', 'toute la nuit'], correct: 0, why: 'La limite, c’est le départ du train. EN: until the train leaves.' },
    { q: 'Deuxième phrase : que propose-t-on de faire pendant l’attente ?', opts: ['prendre un café', 'rentrer à la maison'], correct: 0, why: 'En attendant, un café. EN: a coffee.' },
    { q: 'Troisième phrase : jusqu’à quand faudra-t-il prendre le bus ?', opts: ['jusqu’à la réparation de la ligne', 'jusqu’à demain seulement'], correct: 0, why: 'D’ici à ce que : jusqu’à la réparation. EN: until the repair.' },
    { q: 'Cinquième phrase : le train est-il finalement arrivé ?', opts: ['oui', 'non'], correct: 0, why: 'Jusqu’au moment où : un fait qui a eu lieu. EN: yes.' },
    { q: 'Sixième phrase : quand peut-on quitter la salle d’attente ?', opts: ['quand le train est annoncé', 'tout de suite'], correct: 0, why: 'Tant que le train n’est pas annoncé, on reste. EN: once it is announced.' },
  ],
  audio: REC('rec-b2-18-limite-ecoute'),
  say: REFRAME,
  terms: ['limite'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre limites mal posées',
  errors: [
    {
      wrong: 'Nous resterons ici jusqu’à ce que le train repart.',
      right: fr(E(2450)),
      why: "Normal : l'anglais dit until the train leaves, au présent. Mais le départ est attendu, pas encore là : reparte. EN: jusqu'à ce que takes the subjunctive.",
    },
    {
      wrong: 'Le contrôleur a répété l’annonce jusqu’à ce que tout le monde est descendu.',
      right: fr(E(2455)),
      why: "Normal : au passé, on sait que la descente a eu lieu. Pour le dire, jusqu'au moment où + indicatif ; après jusqu'à ce que, toujours le subjonctif, descende. EN: jusqu'à ce que keeps the subjunctive.",
    },
    {
      wrong: 'Reste dans la salle d’attente tant que le train est annoncé.',
      right: fr(E(2458)),
      why: "Normal : until se dit parfois tant que. Mais sans négation, tant que veut dire aussi longtemps que : il faut tant que le train n'est pas annoncé. EN: until: tant que + ne… pas.",
    },
    {
      wrong: 'En attendant que je connaisse l’horaire, j’ai prévenu mon client.',
      right: fr(E(2452)),
      why: "Normal : en attendant que existe bien. Mais c'est toi qui attends et toi qui sauras : un seul sujet, en attendant de connaître. EN: one subject: en attendant de.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['limite', 'sujet'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Compléter : le courriel de Thomas', TEXTE_A4, [
  { q: 'Première phrase : je resterai à la gare (___) la compagnie (trouver) une solution.', a: "Jusqu'à ce que la compagnie trouve une solution : une limite attendue, subjonctif." },
  { q: 'Deuxième phrase : (___) (connaître) l’horaire du prochain départ, j’ai prévenu le client.', a: "En attendant de connaître l'horaire : Thomas attend et Thomas saura, un seul sujet, l'infinitif." },
  { q: 'Troisième phrase : (___) les travaux (être) finis, la compagnie propose des bus.', a: "En attendant que les travaux soient finis : deux sujets, un fait attendu, subjonctif." },
  { q: 'Dernière phrase : je ne pourrai rien vous confirmer (___) le train ne (être) pas annoncé.', a: "Tant que le train ne sera pas annoncé : tant que + négation, et l'avenir au futur. Sans ne… pas, on écrirait jusqu'à ce que le train soit annoncé." },
], 'rec-b2-18-texte-a4', ['limite']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La limite', '« Attends ici jusqu’à ce que je … »',
    ['revienne', 'reviens', 'reviendrai'], 0,
    'Une limite attendue : subjonctif. EN: revienne.'),
  ctl('Un fait daté', '« Nous avons attendu jusqu’au moment où le train … arrivé. »',
    ['est', 'soit'], 0,
    'Jusqu’au moment où : un fait, indicatif. EN: est.'),
  ctl('Tant que', '« Tant que tu n’as pas ton billet, reste ici » veut dire…',
    ['jusqu’à ce que tu aies ton billet', 'aussi longtemps que tu as ton billet'], 0,
    'Tant que + négation : jusqu’à ce que. EN: until.'),
], ['limite']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Jusqu’à ce que',
    opener: {
      line: "Un train annulé, une gare qui attend : ici tu dis jusqu'à quand et en attendant quoi, avec le subjonctif pour la limite qu'on attend. EN: A cancelled train and a waiting station: here you say until when and while waiting for what, with the subjunctive for the awaited limit.",
      imageRef: 'lessons/subordonnees-temps/act04.jpg',
    },
    sections: [],
    milestone: "Tu poses une limite avec jusqu'à ce que, en attendant que ou d'ici à ce que au subjonctif, et un fait daté avec jusqu'au moment où. EN: You can state an awaited limit in the subjunctive and a dated moment in the indicative.",
    estScreens: 38, restPoints: ['a4-cartes', 'a4-ecoute'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_ECOUTE, A4_ERREURS, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: LE NE EXPLÉTIF
 *
 *  THE FULL TEACHING, owned here for B2 (lessons 6 in B2 and 16 in B1 only
 *  named it). Where it slips in (avant que, à moins que, de peur que,
 *  craindre que, éviter que, a comparative): only where the event has not
 *  happened yet. Optional, soutenu, NOT a negation; ne... pas is. Never
 *  after sans que in careful writing, nor after après que or jusqu'à ce que.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Chez le notaire',
  frSub: 'Un ne qui ne nie rien',
  setting: 'Dakar, l’étude de Maître Sall, un vendredi à 16 h. Awa et son frère Moussa vendent la maison de leurs parents ; le notaire part en congé ce soir.',
  bubbles: [
    { from: 'narrator', fr: 'Moussa lit tout de travers : chaque ne lui semble dire non.', en: 'Moussa reads everything wrong: every ne seems to him to say no.' },
    { from: 'user', fr: fr(E(2468)), en: en(E(2468)) },
    { from: 'coach', fr: 'Moussa croit que le notaire ne part pas. Au contraire, il va partir : ce ne ne nie rien.', en: 'Moussa thinks the notary is not leaving. On the contrary, he is about to: this ne negates nothing.', warn: 'Un ne qui ne nie rien' },
    { from: 'user', fr: fr(E(2470)), en: en(E(2470)) },
    { from: 'coach', fr: 'Craindre que appelle souvent ce ne. Awa pense qu’il est peut-être trop tard ; elle ne dit pas le contraire.', en: 'Craindre que often brings this ne. Awa thinks it may be too late; she is not saying the opposite.', warn: 'Après craindre que' },
    { from: 'user', fr: fr(E(2472)), en: en(E(2472)) },
    { from: 'coach', fr: 'Ici, pas change tout : Awa a peur que les témoins manquent. Avec pas, c’est une vraie négation.', en: 'Here pas changes everything: Awa fears the witnesses will be missing. With pas, it is a real negation.', warn: 'Une vraie négation' },
    { from: 'user', fr: fr(E(2481)), en: en(E(2481)) },
    { from: 'coach', fr: 'Après un comparatif, le même ne : il est arrivé tôt, plus tôt que prévu. Rien n’est nié.', en: 'After a comparative, the same ne: he came early, earlier than expected. Nothing is negated.', warn: 'Après un comparatif' },
  ],
  closing: { fr: 'Un ne sans pas, après avant que, craindre que ou un comparatif : il ne nie rien, et tu peux l’enlever.', en: 'A ne without pas, after avant que, craindre que or a comparative: it negates nothing, and you can drop it.' },
  audio: REC('rec-b2-18-notaire'),
  say: REFRAME,
  terms: ['expletif'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-avant',
  title: 'Le ne explétif, en entier',
  frSub: 'Ce que la leçon 6 du B2 annonçait',
  hint: 'Quatre cartes. La troisième ajoute pas.',
  audio: REC('rec-b2-18-expletif'),
  say: REFRAME,
  terms: ['expletif', 'avant'],
  cards: [
    {
      head: 'Il ne nie rien', label: 'le ne explétif',
      fr: fr(E(2468)), sub: rsOf(E(2468)),
      body: `« ${NE_EXPLETIF_RULE} » Le notaire va bien partir. EN: ${NE_EXPLETIF_RULE_EN}`,
    },
    {
      head: 'Où il se glisse', label: 'pas encore arrivé',
      fr: fr(E(2475)), sub: rsOf(E(2475)),
      body: `Après avant que, à moins que (${RESTRICTION_REF}), de peur que (${BUT_REF}), craindre que, éviter que, et après un comparatif : là où le fait n'a pas encore eu lieu. EN: only where the event has not happened yet.`,
    },
    {
      head: 'La vraie négation', label: 'ne… pas',
      fr: fr(E(2472)), sub: rsOf(E(2472)),
      body: "Je crains qu'ils ne viennent : j'ai peur qu'ils viennent. Je crains qu'ils ne viennent pas : j'ai peur qu'ils manquent. Seul pas nie. EN: only pas negates.",
    },
    {
      head: 'Là où il n’entre pas', label: 'sans que, après que',
      fr: fr(E(2479)), sub: rsOf(E(2479)),
      body: "Sans que dit déjà sans : pas de ne à l'écrit soigné, même si on l'entend. Après que et jusqu'à ce que n'en prennent pas non plus. EN: no ne after sans que, après que, jusqu'à ce que.",
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Explétif ou négation',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Un ne qui ne nie rien', [
      it(E(2468), 'après avant que'),
      it(E(2470), 'après craindre que'),
      it(E(2473), 'après un comparatif'),
      it('fr.b1.maison.058', 'après un comparatif'),
    ], chk('« Le trajet a été plus long que je ne le pensais. » Je le pensais…',
      ['plus court', 'aussi long'], 0,
      'Le ne ne nie rien ; le comparatif dit que je le pensais plus court. EN: shorter.')),
    grp('Avec ou sans ne', [
      it(E(2469), 'sans ne : courant'),
      it(OA(1941), 'avec ne : soutenu'),
      it(OA(1940), 'sans ne : courant'),
      it('fr.b1.maison.004', 'avec n’ : soutenu'),
    ], chk('« Signons avant que le notaire parte » et « … ne parte » :',
      ['disent la même chose', 'disent le contraire'], 0,
      'Le ne explétif change le registre, pas le sens. EN: same meaning.')),
    ctl('La vraie négation', '« Je crains que les témoins ne viennent pas. » Awa a peur…',
      ['qu’ils manquent', 'qu’ils viennent'], 0,
      'Avec pas, c’est une vraie négation. EN: that they will not come.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expletif'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Six façons de mal traiter le ne',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Un ne sans pas ne nie rien',
    body: "Après avant que, craindre que, éviter que ou un comparatif, un ne seul ne nie rien : tu peux l'enlever. Il garde le subjonctif derrière lui, et l'élision devant une voyelle. Pour nier, ajoute pas. EN: a lone ne negates nothing; pas negates.",
  },
  cards: [
    trap(E(2468), 'ne + indicatif', 'Signons avant que le notaire ne part.', 'Avant que : subjonctif, avec ou sans ne. EN: parte.'),
    trap(E(2475), 'le pas de trop', 'Partons tôt, avant qu’il ne fasse pas nuit.', 'Avec pas, la phrase dirait le contraire. EN: pas would reverse it.'),
    trap(E(2479), 'sans que + ne', 'Elle est entrée sans qu’on ne l’entende.', 'Répandu à l’oral ; à l’écrit soigné, sans ne. EN: no ne.'),
    trap(E(2473), 'comparatif + pas', 'Le trajet a été plus long que je ne le pensais pas.', 'Après un comparatif, le ne seul, jamais pas. EN: no pas.'),
    trap(E(2471), 'l’élision oubliée', 'Je crains que l’orage ne éclate pendant la cérémonie.', 'Devant une voyelle, ne devient n’ : n’éclate. EN: n’éclate.'),
    trap(E(2474), 'éviter que + futur', 'Évitons que la dispute ne s’envenimera.', 'Éviter que : subjonctif, jamais de futur. EN: s’envenime.'),
  ],
  drill: [
    { promptSay: '« Avant qu’il ne parte » : il part…', opts: ['bientôt', 'jamais'], correct: 0 },
    { promptSay: 'Signons avant que le notaire ne …', opts: ['part', 'parte'], correct: 1 },
    { promptSay: 'Elle est entrée sans …', opts: ['qu’on l’entende', 'qu’on ne l’entende'], correct: 0 },
    { promptSay: '« Je crains qu’il ne vienne pas » : j’ai peur…', opts: ['qu’il manque', 'qu’il vienne'], correct: 0 },
    { promptSay: 'Le trajet a été plus long que je ne le …', opts: ['pensais pas', 'pensais'], correct: 1 },
    { promptSay: 'Je crains que l’orage … pendant la cérémonie.', opts: ['n’éclate', 'n’éclatera'], correct: 0 },
    { promptSay: 'Partons tôt, avant qu’il ne … nuit.', opts: ['fasse pas', 'fasse'], correct: 1 },
    { promptSay: '« Avant que le notaire parte » et « avant qu’il ne parte » :', opts: ['même sens', 'sens contraire'], correct: 0 },
  ],
  steps: STEPS('Un ne sans pas ne nie rien', 'Six façons de mal traiter le ne'),
  audio: REC('rec-b2-18-piege-expletif'),
  say: REFRAME,
  terms: ['expletif', 'oral'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Avec ou sans ne',
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['expletif'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Trier : la lettre du notaire', TEXTE_A5, [
  { q: 'Avant que les prix ne changent : ce ne nie-t-il ?', a: "Non : c'est un ne explétif après avant que. Les prix peuvent changer ; il faut signer avant." },
  { q: 'Je crains que la banque ne soit en retard ; à moins qu’elle ne confirme la date.', a: `Deux ne explétifs, après craindre que et après à moins que (${RESTRICTION_REF}). Le notaire craint un retard, et il préviendra si la banque ne confirme pas.` },
  { q: 'Je ne pourrai pas me déplacer ; l’acheteur ne demande aucune réduction.', a: "Deux vraies négations : ne… pas, ne… aucune. Ici, le ne va avec un deuxième mot." },
  { q: 'En meilleur état que je ne le pensais ; évitons que ce dossier ne traîne.', a: "Deux ne explétifs, après un comparatif et après éviter que. La maison est en bon état, et le dossier ne doit pas traîner." },
], 'rec-b2-18-texte-a5', ['expletif']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le sens', '« Réglons ce point avant qu’il ne soit trop tard. » Est-il déjà trop tard ?',
    ['non, pas encore', 'oui'], 0,
    'Le ne explétif ne nie rien, et avant que dit pas encore. EN: not yet.'),
  ctl('Le choix', 'Le ne explétif est…',
    ['facultatif et soutenu', 'obligatoire à l’écrit'], 0,
    'Tu peux l’écrire ou non : le sens ne change pas. EN: optional, formal.'),
  ctl('Sans que', '« Elle est entrée sans … »',
    ['qu’on l’entende', 'qu’on ne l’entende'], 0,
    'À l’écrit soigné, pas de ne après sans que. EN: qu’on l’entende.'),
], ['expletif']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le ne explétif',
    opener: {
      line: "Un ne sans pas dans la bouche d'un notaire : ici tu apprends à le lire, à l'écrire si tu veux, et à ne jamais le prendre pour une négation. EN: A ne with no pas from a notary: here you learn to read it, write it if you wish, and never take it for a negation.",
      imageRef: 'lessons/subordonnees-temps/act05.jpg',
    },
    sections: [],
    milestone: "Tu reconnais le ne explétif, tu sais où il peut se glisser, et tu ne le confonds plus avec une négation. EN: You can recognise the expletive ne, place it, and never read it as a negation.",
    estScreens: 36, restPoints: ['a5-cartes', 'a5-piege'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_CONSTRUIRE, A5_PIEGE, A5_DICTEE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: QUAND, LORSQUE, PENDANT QUE, AU MOMENT OÙ
 *
 *  Two events at the same time: the indicative. A stretch (pendant que), an
 *  instant (au moment où), the written quand (lorsque), comme + imparfait
 *  (time) against the comme of cause (lesson 31 in B1); one subject, the
 *  gérondif (lesson 12 in B2).
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'La déposition d’Émilie',
  frSub: 'Au même moment',
  setting: 'Québec, le poste de police du quartier Saint-Roch. L’agent Pelletier prend la déposition d’Émilie Roy, témoin d’un accident de vélo.',
  bubbles: [
    { from: 'narrator', fr: 'L’agent veut savoir ce qui se passait à chaque instant.', en: 'The officer wants to know what was going on at every moment.' },
    { from: 'user', fr: fr(E(2489)), en: en(E(2489)) },
    { from: 'coach', fr: 'Comme + imparfait, en tête : juste au moment où. Ce comme ne donne pas de raison.', en: 'Comme + imparfait at the front: just as. This comme gives no reason.', warn: 'Comme de temps' },
    { from: 'user', fr: fr(E(2487)), en: en(E(2487)) },
    { from: 'coach', fr: 'Pendant que : la traversée dure, et le virage arrive dedans. L’imparfait pour ce qui dure.', en: 'Pendant que: the crossing lasts, and the turn happens inside it. The imparfait for what lasts.', warn: 'Une durée' },
    { from: 'user', fr: fr(E(2486)), en: en(E(2486)) },
    { from: 'coach', fr: 'Au moment où : un instant précis, le passage au vert.', en: 'Au moment où: one precise instant, the light turning green.', warn: 'Un instant' },
    { from: 'user', fr: fr(E(2488)), en: en(E(2488)) },
    { from: 'coach', fr: 'Lorsque : le quand de l’écrit, parfait pour une déposition.', en: 'Lorsque: the written quand, just right for a statement.', warn: 'Lorsque' },
  ],
  closing: { fr: 'Pendant que pour ce qui dure, au moment où pour un instant, lorsque pour écrire quand : toujours l’indicatif.', en: 'Pendant que for what lasts, au moment où for an instant, lorsque for a written quand: always the indicative.' },
  audio: REC('rec-b2-18-emilie'),
  say: REFRAME,
  terms: ['pendant'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-pendant',
  title: 'Quatre façons de dire en même temps',
  frSub: 'Une durée, un instant, un registre',
  hint: 'Quatre cartes. La dernière n’est pas une cause.',
  audio: REC('rec-b2-18-pendant'),
  say: REFRAME,
  terms: ['pendant'],
  cards: [
    {
      head: 'Une durée', label: 'pendant que',
      fr: fr(CL(1334)), sub: rsOf(CL(1334)),
      body: `Une action qui dure, souvent à l'imparfait, et une autre qui arrive dedans. Deux sujets : pendant que. Un seul : le gérondif, comme dans ${GERONDIF_REF}. EN: a stretch of time; one subject, the gérondif.`,
    },
    {
      head: 'Un instant', label: 'au moment où',
      fr: fr(E(2486)), sub: rsOf(E(2486)),
      body: "Un point précis sur la ligne. Au moment où + passé composé pour un événement, + imparfait pour ce qui était en cours à cet instant. EN: a precise instant.",
    },
    {
      head: 'Le quand de l’écrit', label: 'lorsque',
      fr: fr(CL(1337)), sub: rsOf(CL(1337)),
      body: "Lorsque dit la même chose que quand, dans un registre plus soigné : un rapport, une déposition, une lettre. EN: the written quand.",
    },
    {
      head: 'Juste à ce moment', label: 'comme + imparfait',
      fr: fr(E(2489)), sub: rsOf(E(2489)),
      body: `En tête de phrase, comme + imparfait veut dire juste au moment où. Pour une cause, c'est le comme de ${SUBORD_REF}. Le comme de temps est surtout écrit. EN: just as; not the comme of cause.`,
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Une durée ou un instant',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Qui dure, ou qui tombe d’un coup', [
      it(E(2487), 'la traversée dure'),
      it(E(2496), 'la déposition dure'),
      it(E(2486), 'le passage au vert, un instant'),
      it('fr.b1.pronoms-essentiels.1320', 'un instant, au présent'),
    ], chk('« … le conducteur a vu le cycliste, il a freiné. »',
      ['Au moment où', 'Pendant que'], 0,
      'Voir, ici, c’est un instant : au moment où. EN: an instant.')),
    grp('Comme : un moment ou une raison', [
      it(E(2489), 'un moment'),
      it(E(2500), 'un moment'),
      it(CL(1242), 'une raison'),
      it(E(2491), 'un seul sujet : en conduisant'),
    ], chk('« Comme nous étions en avance, nous avons visité le musée. » Ce comme donne…',
      ['une raison', 'un moment précis'], 0,
      'Nous avions du temps, donc nous avons visité : une raison. EN: a reason.')),
    ctl('Le temps', '« Lorsque le cycliste est tombé, j’… au coin de la rue. »',
      ['étais', 'ai été'], 0,
      'La situation autour de l’instant : imparfait. EN: étais.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pendant'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Ce qu’a vu Émilie',
  frSub: 'Huit phrases, un carrefour',
  lines: [
    ln(E(2486)), ln(E(2487)), ln(E(2488)), ln(E(2489)),
    ln(E(2490)), ln(E(2494)), ln(E(2495)), ln(E(2496)),
  ],
  questions: [
    { q: 'Première phrase : quand la voiture a-t-elle démarré ?', opts: ['au passage au vert', 'avant le feu vert'], correct: 0, why: 'Au moment où : un instant. EN: at the green light.' },
    { q: 'Deuxième phrase : que faisait le cycliste quand la voiture a tourné ?', opts: ['il traversait', 'il attendait'], correct: 0, why: 'Pendant que : une action en cours. EN: he was crossing.' },
    { q: 'Quatrième phrase : que faisait la témoin au moment du choc ?', opts: ['elle sortait d’un magasin', 'elle entrait dans un magasin'], correct: 0, why: 'Comme + imparfait : juste au moment où elle sortait. EN: coming out.' },
    { q: 'Septième phrase : qui a appelé les secours ?', opts: ['un passant', 'la témoin'], correct: 0, why: 'Elle allait le faire ; un passant l’a fait. EN: a passer-by.' },
    { q: 'Dernière phrase : l’ambulance est-elle restée jusqu’à la fin de la déposition ?', opts: ['non', 'oui'], correct: 0, why: 'Elle est repartie pendant la déposition. EN: no.' },
  ],
  audio: REC('rec-b2-18-pendant-ecoute'),
  say: REFRAME,
  terms: ['pendant'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre moments mal pris',
  errors: [
    {
      wrong: 'Pendant que le feu est passé au vert, une voiture a démarré.',
      right: fr(E(2486)),
      why: "Normal : l'anglais dit while presque partout. Mais passer au vert est un instant, pas une durée : au moment où. EN: an instant needs au moment où.",
    },
    {
      wrong: 'Au moment où le camion recule, l’enfant a traversé.',
      right: fr(E(2498)),
      why: "Normal : le présent décrit bien une action en cours. Dans un récit au passé, l'action en cours se met à l'imparfait : reculait. EN: past narrative, action in progress: imparfait.",
    },
    {
      wrong: 'Comme je suis sortie de la boulangerie, j’ai entendu un choc.',
      right: fr(E(2489)),
      why: "Normal : deux faits passés, deux passés composés. Mais avec un passé composé, ce comme se lit comme une cause. Pour dire juste au moment où : comme + imparfait, je sortais. EN: time comme needs the imparfait.",
    },
    {
      wrong: 'En traversant la rue, la voiture a heurté le cycliste.',
      right: 'Pendant que le cycliste traversait la rue, la voiture l’a heurté.',
      why: `Normal : le gérondif est court. Mais « ${B212_REFRAME} » Ici, c'est le cycliste qui traverse, pas la voiture : pendant que. EN: two subjects: pendant que.`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pendant'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Compléter : la déposition d’Émilie', TEXTE_A6, [
  { q: 'Première et deuxième phrases : comme je (sortir) ; pendant que le cycliste (traverser).', a: "Comme je sortais, pendant que le cycliste traversait : deux actions en cours, à l'imparfait ; les événements (j'ai entendu, a tourné) sont au passé composé." },
  { q: 'Troisième phrase : quand j’ai tourné la tête, le vélo (être) déjà par terre.', a: "Le vélo était déjà par terre : un état au moment où elle tourne la tête, l'imparfait." },
  { q: 'Quatrième phrase : pendant que ou au moment où ?', a: "Au moment où le conducteur a vu le cycliste : voir est ici un instant, au passé composé. Pendant que demanderait une action qui dure." },
  { q: 'Dernière phrase : lorsque la police est arrivée, le cycliste (être) assis.', a: "Le cycliste était assis : la situation autour de l'instant, l'imparfait. Lorsque, le quand de l'écrit, convient à une déposition." },
], 'rec-b2-18-texte-a6', ['pendant']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Un instant', '« … le feu est passé au vert, une voiture a démarré. »',
    ['Au moment où', 'Pendant que'], 0,
    'Un instant : au moment où. EN: au moment où.'),
  ctl('Lorsque', 'Lorsque, c’est…',
    ['le quand de l’écrit', 'un mot qui demande le subjonctif'], 0,
    'Même sens que quand, plus soigné, et l’indicatif. EN: the written quand.'),
  ctl('Comme', '« Comme je sortais, j’ai entendu un choc. » Ce comme veut dire…',
    ['juste au moment où', 'puisque'], 0,
    'Comme + imparfait en tête : un moment. EN: just as.'),
], ['pendant']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'En même temps',
    opener: {
      line: "Un accident vu du trottoir : ici tu dis ce qui se passait au même moment, avec une durée, un instant ou le quand de l'écrit, toujours à l'indicatif. EN: An accident seen from the pavement: here you say what was going on at the same moment, always in the indicative.",
      imageRef: 'lessons/subordonnees-temps/act06.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre pendant que, au moment où, lorsque et comme selon la durée et le registre, et tu mets l'imparfait à ce qui était en cours. EN: You can choose pendant que, au moment où, lorsque or comme, with the imparfait for what was under way.",
    estScreens: 38, restPoints: ['a6-cartes', 'a6-ecoute'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_ECOUTE, A6_ERREURS, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: À MESURE QUE, CHAQUE FOIS QUE, TANT QUE, DEPUIS QUE
 *
 *  Progression, repetition, duration, starting point, new situation: real
 *  facts, so the indicative. Past lesson 31 in B1 (depuis que) and lesson 7
 *  in B1 (tant que + futur).
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Le portrait de Fatou',
  frSub: 'Vingt ans en quelques phrases',
  setting: 'Marseille, une boulangerie du Panier, 6 h du matin. Hugo, journaliste d’une radio locale, interroge Fatou Camara pendant qu’elle sort les premières baguettes.',
  bubbles: [
    { from: 'narrator', fr: 'Hugo prépare un portrait ; Fatou raconte vingt ans en quatre phrases.', en: 'Hugo is preparing a profile; Fatou tells twenty years in four sentences.' },
    { from: 'user', fr: fr(E(2507)), en: en(E(2507)) },
    { from: 'coach', fr: 'Toutes les fois que : chaque fois que, en plus soutenu. Un fait qui se répète, à l’indicatif.', en: 'Toutes les fois que: chaque fois que, more formal. A fact that repeats, in the indicative.', warn: 'La répétition' },
    { from: 'user', fr: fr(E(2504)), en: en(E(2504)) },
    { from: 'coach', fr: 'À mesure que : deux choses avancent ensemble, les clients et la production.', en: 'À mesure que: two things move forward together, the customers and production.', warn: 'Deux progressions' },
    { from: 'user', fr: fr(E(2509)), en: en(E(2509)) },
    { from: 'coach', fr: 'Depuis que : le point de départ, et la situation qui dure encore, au présent.', en: 'Depuis que: the starting point, and a situation still going on, in the present.', warn: 'Le point de départ' },
    { from: 'user', fr: fr(E(2508)), en: en(E(2508)) },
    { from: 'coach', fr: 'Tant que : aussi longtemps que. Et c’est l’avenir, donc le futur des deux côtés.', en: 'Tant que: as long as. And it is the future, so the future on both sides.', warn: 'Aussi longtemps que' },
  ],
  closing: { fr: 'Répéter, progresser, durer, commencer : des faits réels, donc l’indicatif.', en: 'Repeating, growing, lasting, starting: real facts, so the indicative.' },
  audio: REC('rec-b2-18-fatou'),
  say: REFRAME,
  terms: ['duree'],
};

const A7_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-table',
  layer: 'core',
  sheetId: 'sheet-pendant',
  title: 'Six mots pour la durée',
  cols: ['Mot', 'Ce qu’il dit', 'Registre'],
  rows: [
    { cells: ['à mesure que', 'deux progressions', 'courant'], say: fr(E(2504)),
      detail: { title: 'à mesure que', body: "Les deux faits avancent au même pas : plus l'un grandit, plus l'autre change. EN: two things moving forward together.", say: fr(E(2517)) } },
    { cells: ['au fur et à mesure que', 'deux progressions', 'courant, oral'], say: fr(E(2505)),
      detail: { title: 'au fur et à mesure que', body: "Le même sens, plus fréquent à l'oral. Au fur et à mesure s'emploie aussi seul, en fin de phrase. EN: same meaning, more spoken.", say: fr('fr.b2.ecologie.003') } },
    { cells: ['chaque fois que', 'une répétition', 'courant'], say: fr(E(2506)),
      detail: { title: 'chaque fois que', body: "Un fait qui revient, et la même suite à chaque fois. EN: every time.", say: fr(E(2515)) } },
    { cells: ['toutes les fois que', 'une répétition', 'soutenu'], say: fr(E(2507)),
      detail: { title: 'toutes les fois que', body: "Le même sens que chaque fois que, dans un registre plus soigné. EN: every time, formal.", say: fr(E(2507)) } },
    { cells: ['tant que', 'aussi longtemps que', 'courant'], say: fr(E(2514)),
      detail: { title: 'tant que', body: "Une durée dont dépend l'autre fait ; avec ne… pas, tant que dit jusqu'à ce que. EN: as long as.", say: fr(E(2508)) } },
    { cells: ['depuis que, maintenant que', 'un début, un changement', 'courant'], say: fr(E(2509)),
      detail: { title: 'depuis que, maintenant que', body: "Depuis que date le début d'une situation qui dure ; maintenant que ajoute une raison. EN: since; now that.", say: fr(E(2510)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['duree'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Progresser, répéter, durer',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Progresser ou répéter', [
      it(E(2504), 'à mesure que'),
      it(E(2505), 'au fur et à mesure que'),
      it(E(2506), 'chaque fois que'),
      it(E(2517), 'à mesure que'),
    ], chk('« … le four est en panne, nous perdons une matinée. »',
      ['Chaque fois que', 'À mesure que'], 0,
      'Un fait qui revient : chaque fois que. EN: every time.')),
    grp('Durer ou commencer', [
      it(PF(438), 'tant que, au futur'),
      it(E(2509), 'depuis que'),
      it(CL(1335), 'depuis que'),
      it(OA(1944), 'maintenant que'),
    ], chk('« … j’ai ouvert la boulangerie, je me lève à quatre heures. »',
      ['Depuis que', 'Tant que'], 0,
      'Un point de départ, et la situation dure : depuis que. EN: since.')),
    ctl('Le mode', '« Depuis que le quartier … changé, les clients sont plus nombreux. »',
      ['a', 'ait'], 0,
      'Un fait réel : indicatif. EN: a changé.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['duree'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Des faits réels, jamais le subjonctif',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Des faits réels : l’indicatif',
    body: "À mesure que, chaque fois que, tant que, depuis que et maintenant que posent des faits réels : l'indicatif, au futur pour l'avenir. Devant un nom, depuis ; devant une phrase, depuis que. EN: all take the indicative; depuis before a noun, depuis que before a clause.",
  },
  cards: [
    trap(E(2509), 'depuis que + subjonctif', 'Depuis que j’aie ouvert la boulangerie, je me lève à quatre heures.', 'Un fait réel : j’ai ouvert. EN: indicative.'),
    trap(E(2506), 'chaque fois que + subjonctif', 'Chaque fois qu’un client revienne, je reconnais son visage.', 'Un fait qui se répète : revient. EN: revient.'),
    trap(E(2504), 'à mesure que + passé composé', 'À mesure que les clients sont arrivés, nous augmentions la production.', 'Une progression dure : imparfait, arrivaient. EN: arrivaient.'),
    trap(E(2519), 'maintenant que + subjonctif', 'Maintenant que la boutique soit connue, les gâteaux se réservent la veille.', 'Un fait nouveau et réel : est. EN: est.'),
    trap(E(2518), 'depuis sans que', 'Depuis le quartier a changé, les clients sont plus nombreux.', 'Devant une phrase, depuis que. EN: depuis que.'),
    trap(E(2514), 'tant que + subjonctif', 'Tant qu’il y ait du monde, la boutique reste ouverte.', 'Aussi longtemps que : un fait réel, il y a. EN: il y a.'),
  ],
  drill: [
    { promptSay: 'Depuis que j’… la boulangerie, je me lève à quatre heures.', opts: ['ai ouvert', 'aie ouvert'], correct: 0 },
    { promptSay: 'Chaque fois qu’un client …, je reconnais son visage.', opts: ['revienne', 'revient'], correct: 1 },
    { promptSay: '… la boutique grandissait, l’équipe changeait.', opts: ['Au fur et à mesure que', 'Depuis que'], correct: 0 },
    { promptSay: 'Maintenant que la boutique … connue, les gâteaux se réservent la veille.', opts: ['est', 'soit'], correct: 0 },
    { promptSay: 'Tant qu’il y … du monde, la boutique reste ouverte.', opts: ['ait', 'a'], correct: 1 },
    { promptSay: '… le quartier a changé, les clients sont plus nombreux.', opts: ['Depuis', 'Depuis que'], correct: 1 },
    { promptSay: 'Tant que tu ne … pas prêt, nous ne partirons pas.', opts: ['seras', 'sois'], correct: 0 },
    { promptSay: 'À mesure que je …, j’aime davantage le calme.', opts: ['vieillis', 'vieillisse'], correct: 0 },
  ],
  steps: STEPS('Des faits réels : l’indicatif', 'Des faits réels, jamais le subjonctif'),
  audio: REC('rec-b2-18-piege-duree'),
  say: REFRAME,
  terms: ['duree'],
};

const A7_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a7-hacks',
  layer: 'core',
  sheetId: 'sheet-pendant',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Pour choisir entre à mesure que et chaque fois que, essaie « plus… plus ».', why: "Si « plus il y a de clients, plus on produit » marche, c'est une progression : à mesure que. Sinon, c'est une répétition. EN: if plus… plus works, use à mesure que." },
    { hack: 'Tant que + ne… pas, c’est jusqu’à ce que à l’indicatif.', why: "Tant que tu n'es pas prêt dit jusqu'à ce que tu sois prêt : la même limite, un autre mode. EN: tant que + negation means jusqu'à ce que." },
    { hack: 'Maintenant que répond à pourquoi ; depuis que répond à depuis quand.', why: "Maintenant que mon fils m'aide, je dors plus : c'est la raison. Depuis qu'il m'aide : c'est le début. EN: now that gives a reason; since gives a start." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['duree', 'limite'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Compléter : la biographie de Fatou', TEXTE_A7, [
  { q: 'Les deux premiers blancs : (___) elle rentrait au pays ; (___) les clients arrivaient.', a: "Toutes les fois qu'elle rentrait au pays : une répétition, soutenue. À mesure que les clients arrivaient : deux progressions ensemble. Les deux à l'indicatif." },
  { q: 'Troisième : (___) elle a ouvert sa boutique, elle se lève à quatre heures.', a: "Depuis qu'elle a ouvert sa boutique : un point de départ, et la situation dure encore, au présent." },
  { q: 'Quatrième : (___) son fils travaille avec elle, Fatou dort un peu plus.', a: "Maintenant que son fils travaille avec elle : une situation nouvelle qui explique la suite. Depuis que irait aussi, sans l'idée de raison." },
  { q: 'Dernier : (___) elle aura de la farine, elle ouvrira le matin.', a: "Tant qu'elle aura de la farine : aussi longtemps que, et l'avenir au futur des deux côtés." },
], 'rec-b2-18-texte-a7', ['duree']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La progression', '« … les clients arrivaient, nous augmentions la production. »',
    ['À mesure que', 'Depuis que'], 0,
    'Deux faits qui avancent ensemble. EN: à mesure que.'),
  ctl('Le mode', 'À mesure que, chaque fois que et tant que prennent…',
    ['l’indicatif', 'le subjonctif'], 0,
    'Des faits réels : l’indicatif. EN: the indicative.'),
  ctl('Maintenant que', '« Maintenant que mon fils travaille avec moi » ajoute…',
    ['une raison', 'une durée chiffrée'], 0,
    'Une situation nouvelle, et la raison de la suite. EN: a reason.'),
], ['duree']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'À mesure que, depuis que',
    opener: {
      line: "Vingt ans d'une boulangerie en quelques phrases : ici tu dis ce qui progresse, ce qui se répète, ce qui dure et ce qui a commencé, toujours à l'indicatif. EN: Twenty years of a bakery in a few sentences: here you say what grows, repeats, lasts or began, always in the indicative.",
      imageRef: 'lessons/subordonnees-temps/act07.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre à mesure que, chaque fois que, tant que, depuis que et maintenant que selon ce que tu veux dire, avec l'indicatif. EN: You can choose among à mesure que, chaque fois que, tant que, depuis que and maintenant que.",
    estScreens: 36, restPoints: ['a7-table', 'a7-piege'],
  },
  sections: [A7_HISTOIRE, A7_TABLE, A7_CONSTRUIRE, A7_PIEGE, A7_HACKS, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: ALORS QUE, TANDIS QUE : LE TEMPS OU L'OPPOSITION
 *
 *  Lesson 16 in B2 taught alors que and tandis que as opposition (and alors
 *  que as concession). Here: their TIME sense, and the test that tells them
 *  apart (pendant que or en revanche). The indicative in every sense.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Le journal du soir',
  frSub: 'Le temps ou l’opposition',
  setting: 'Lyon, un appartement en colocation, le soir. Léna lit le journal local à voix haute ; Karim, son colocataire, commente.',
  bubbles: [
    { from: 'narrator', fr: 'Léna lit un fait divers ; Karim veut savoir ce qui s’est passé en même temps.', en: 'Léna reads out a news item; Karim wants to know what happened at the same time.' },
    { from: 'user', fr: fr(E(2534)), en: en(E(2534)) },
    { from: 'coach', fr: 'Alors que + imparfait : tout le monde dormait au moment de l’alarme. C’est le temps.', en: 'Alors que + imparfait: everyone was asleep when the alarm went off. This is time.', warn: 'Le temps' },
    { from: 'user', fr: fr(E(2526)), en: en(E(2526)) },
    { from: 'coach', fr: 'Tandis que compare ici deux étages, l’un inondé, l’autre sec. C’est l’opposition.', en: 'Here tandis que compares two floors, one flooded, the other dry. This is contrast.', warn: 'L’opposition' },
    { from: 'user', fr: fr(E(2524)), en: en(E(2524)) },
    { from: 'coach', fr: 'Karim et Léna ne se croisent pas dans le temps : leurs goûts s’opposent. Tu peux dire en revanche.', en: 'Karim and Léna do not cross in time: their tastes are opposed. You can say en revanche.', warn: 'Le test : en revanche' },
    { from: 'user', fr: fr(E(2531)), en: en(E(2531)) },
    { from: 'coach', fr: 'Deux actions au même moment : tandis que, au sens de pendant que.', en: 'Two actions at the same moment: tandis que in the sense of pendant que.', warn: 'Le test : pendant que' },
  ],
  closing: { fr: 'Si pendant que convient, c’est le temps ; si en revanche convient, c’est l’opposition. Dans les deux cas, l’indicatif.', en: 'If pendant que fits, it is time; if en revanche fits, it is contrast. Either way, the indicative.' },
  audio: REC('rec-b2-18-colocation'),
  say: REFRAME,
  terms: ['alors'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-pendant',
  title: 'Deux mots, deux sens',
  frSub: 'Après la leçon 16 du B2',
  hint: 'Quatre cartes. La deuxième rappelle la concession.',
  audio: REC('rec-b2-18-alors'),
  say: REFRAME,
  terms: ['alors'],
  cards: [
    {
      head: 'Le temps', label: 'alors que + imparfait',
      fr: fr(E(2522)), sub: rsOf(E(2522)),
      body: "Une action en cours, croisée par un événement : ici alors que veut dire pendant que. EN: while, in the time sense.",
    },
    {
      head: 'L’opposition', label: Cap(CONCESSION_REF),
      fr: fr('fr.b2.connecteurs-logiques.2171'), sub: rsOf('fr.b2.connecteurs-logiques.2171'),
      body: `« ${B216_REFRAME} » Ici, rien n'est concédé : deux faits comparés, et alors que veut dire en revanche. EN: two facts compared.`,
    },
    {
      head: 'Tandis que, deux sens', label: 'tandis que',
      fr: fr(CL(1530)), sub: rsOf(CL(1530)),
      body: "Tandis que tu travailles, je fais les courses : le temps. Le premier étage était inondé, tandis que le deuxième était sec : l'opposition. EN: tandis que, time or contrast.",
    },
    {
      head: 'Une attente déçue', label: 'alors que',
      fr: fr('fr.b2.connecteurs-logiques.2173'), sub: rsOf('fr.b2.connecteurs-logiques.2173'),
      body: "Il est parti alors qu'il avait promis de finir : ce qui aurait dû le retenir ne l'a pas retenu. C'est le troisième sens, la concession. EN: an expectation let down.",
    },
  ],
};

const A8_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-trier',
  layer: 'core',
  size: 'lg',
  title: 'Pendant que ou en revanche',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le temps : pendant que', [
      it(E(2522), 'une action en cours'),
      it(E(2523), 'deux scènes au même moment'),
      it(E(2529), 'une action en cours'),
      it(E(2533), 'deux actions au présent'),
    ], chk('« Tandis que tu es au téléphone, je vais chercher le courrier. » On peut dire…',
      ['pendant que tu es au téléphone', 'en revanche, tu es au téléphone'], 0,
      'Deux actions au même moment : le temps. EN: time.')),
    grp('L’opposition : en revanche', [
      it(E(2524), 'deux goûts'),
      it(E(2526), 'deux étages'),
      it(E(2530), 'deux souhaits'),
      it(E(2535), 'deux horaires'),
    ], chk('« Ma sœur travaille de nuit, tandis que moi, je travaille de jour. » On peut dire…',
      ['moi, en revanche, je travaille de jour', 'pendant que je travaille de jour'], 0,
      'Deux faits comparés : l’opposition. EN: contrast.')),
    ctl('Le temps', '« Alors qu’il … la place, il a reçu un appel. »',
      ['traversait', 'traverse', 'a traversé'], 0,
      'Au sens du temps : une action en cours, à l’imparfait. EN: traversait.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['alors'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le temps ou l’opposition',
  frSub: 'Neuf phrases à l’oreille',
  lines: [
    ln(E(2522)), ln(E(2523)), ln(E(2524)), ln(E(2525)),
    ln(E(2526)), ln(E(2529)), ln(E(2534)), ln(CL(1524)), ln(E(2535)),
  ],
  questions: [
    { q: 'Première phrase : quand a-t-il reçu l’appel ?', opts: ['en traversant la place', 'une fois de l’autre côté'], correct: 0, why: 'Alors que + imparfait : pendant qu’il traversait. EN: while crossing.' },
    { q: 'Troisième phrase : les deux colocataires aiment-ils la même chose ?', opts: ['non, leurs goûts s’opposent', 'oui'], correct: 0, why: 'Alors que compare deux goûts : l’opposition. EN: no.' },
    { q: 'Quatrième phrase : qui était levé en premier ?', opts: ['les boulangers', 'le reste de la ville'], correct: 0, why: 'Leur fournée était déjà finie quand la ville se réveillait. EN: the bakers.' },
    { q: 'Cinquième phrase : le deuxième étage a-t-il été inondé ?', opts: ['non, il est resté sec', 'oui'], correct: 0, why: 'Tandis que oppose les deux étages. EN: no.' },
    { q: 'Dernière phrase : la personne et sa sœur travaillent-elles aux mêmes heures ?', opts: ['non', 'oui'], correct: 0, why: 'De nuit, de jour : l’opposition. EN: no.' },
  ],
  audio: REC('rec-b2-18-alors-ecoute'),
  say: REFRAME,
  terms: ['alors'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre sens brouillés',
  errors: [
    {
      wrong: 'Alors qu’il a traversé la place, il a reçu un appel de sa sœur.',
      right: fr(E(2522)),
      why: "Normal : deux faits passés, deux passés composés. Mais au sens du temps, alors que veut une action en cours : traversait. Avec un passé composé, on lirait une opposition. EN: time alors que needs the imparfait.",
    },
    {
      wrong: 'Mon colocataire adore le bruit, pendant que moi, j’ai besoin de calme.',
      right: fr(E(2524)),
      why: "Normal : while traduit les deux. Mais ici, les goûts s'opposent, ils ne se croisent pas dans le temps : alors que ou tandis que. Pendant que ne dit que le temps. EN: pendant que is time only.",
    },
    {
      wrong: 'Le premier étage était inondé, tandis que le deuxième soit resté sec.',
      right: fr(E(2526)),
      why: "Normal : une opposition fait penser à bien que et au subjonctif. Mais alors que et tandis que posent deux faits réels : l'indicatif, était resté. EN: the indicative in every sense.",
    },
    {
      wrong: 'Tandis que Lyon se réveille, les boulangers avaient déjà fini leur première fournée.',
      right: fr(E(2525)),
      why: "Normal : le réveil de la ville ressemble à une scène générale, au présent. Mais le récit est au passé, et l'action en cours se met à l'imparfait : se réveillait. EN: keep the past narrative.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['alors'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Trier : le fait divers lyonnais', TEXTE_A8, [
  { q: 'Alors que tout le monde dormait ; tandis que les pompiers déroulaient les tuyaux.', a: "Le temps, deux fois : pendant que tout le monde dormait, pendant que les pompiers déroulaient. Deux actions en cours, à l'imparfait." },
  { q: 'Le premier étage a été détruit, tandis que le deuxième est resté intact.', a: "L'opposition : le deuxième, en revanche, est resté intact. Deux étages comparés." },
  { q: 'Un voisin, alors qu’il rentrait du travail, a vu la fumée le premier.', a: "Le temps : pendant qu'il rentrait. Une action en cours, croisée par la fumée." },
  { q: 'Les habitants veulent rentrer dès demain, alors que les pompiers le déconseillent.', a: "L'opposition, et même une concession : ils veulent rentrer malgré l'avis des pompiers. Pendant que ne marcherait pas." },
], 'rec-b2-18-texte-a8', ['alors']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le test', 'Pour savoir si alors que marque le temps, tu essaies…',
    ['pendant que', 'parce que'], 0,
    'Si pendant que convient, c’est le temps. EN: pendant que.'),
  ctl('L’opposition', '« Les étudiants veulent une salle de concert, alors que les retraités préfèrent un marché. » C’est…',
    ['l’opposition', 'le temps'], 0,
    'Deux souhaits comparés. EN: contrast.'),
  ctl('Le mode', 'Alors que et tandis que prennent…',
    ['l’indicatif, dans tous les sens', 'le subjonctif pour l’opposition'], 0,
    'Deux faits réels : l’indicatif. EN: the indicative.'),
], ['alors']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Alors que : le temps ou non',
    opener: {
      line: "Un même mot pour deux choses : ici tu dis si alors que et tandis que marquent le temps ou l'opposition, avec un test simple. EN: One word, two jobs: here you tell whether alors que and tandis que mark time or contrast, with a simple test.",
      imageRef: 'lessons/subordonnees-temps/act08.jpg',
    },
    sections: [],
    milestone: "Tu reconnais le sens de temps et le sens d'opposition d'alors que et de tandis que, et tu mets l'imparfait au sens du temps. EN: You can tell time from contrast in alors que and tandis que.",
    estScreens: 38, restPoints: ['a8-cartes', 'a8-ecoute'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_TRIER, A8_ECOUTE, A8_ERREURS, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: QUAND TU ARRIVERAS
 *
 *  Past lesson 7 in B1 (quand and dès que + futur): the same rule for every
 *  time word, si as the one exception (lesson 10 in B1), a habit in the
 *  present, and the future seen from the past as a conditional (lesson 19
 *  in B1).
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Les consignes de Julien',
  frSub: 'L’avenir au futur',
  setting: 'Toulouse, la veille d’un départ. Julien part deux semaines à Lisbonne ; Inès, une amie, gardera sa maison. Il lui laisse ses consignes.',
  bubbles: [
    { from: 'narrator', fr: 'Julien parle vite ; Inès note ses consignes, d’abord dans sa tête en anglais.', en: 'Julien talks fast; Inès notes his instructions, first in English in her head.' },
    { from: 'user', fr: fr(E(2538)), en: en(E(2538)) },
    { from: 'coach', fr: 'When you arrive, mais quand tu arriveras : l’arrivée est dans l’avenir, donc le futur.', en: 'When you arrive, but quand tu arriveras: the arrival is in the future, so the future.', warn: 'Le futur, pas le présent' },
    { from: 'user', fr: fr(E(2539)), en: en(E(2539)) },
    { from: 'coach', fr: 'Pendant que, tant que, chaque fois que : même règle. L’avenir se dit au futur, des deux côtés.', en: 'Pendant que, tant que, chaque fois que: same rule. The future goes in the future, on both sides.', warn: 'Tous les mots de temps' },
    { from: 'user', fr: fr(E(2549)), en: en(E(2549)) },
    { from: 'coach', fr: 'Si garde le présent, même pour demain. C’est le seul.', en: 'Si keeps the present, even for tomorrow. It is the only one.', warn: 'Sauf si' },
    { from: 'user', fr: fr(E(2546)), en: en(E(2546)) },
    { from: 'coach', fr: 'Raconté plus tard, le futur devient un conditionnel : il appellerait quand il arriverait.', en: 'Told later, the future becomes a conditional: he would call when he arrived.', warn: 'Le futur vu du passé' },
  ],
  closing: { fr: 'Quand tu arriveras, pendant que je serai, tant qu’il fera chaud : l’avenir au futur. Si tu as un problème : le présent.', en: 'When you arrive, while I am away, as long as it is hot: the future. If you have a problem: the present.' },
  audio: REC('rec-b2-18-julien'),
  say: REFRAME,
  terms: ['futur'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-apres',
  title: 'Le futur après le mot de temps',
  frSub: 'Là où l’anglais met le présent',
  hint: 'Quatre cartes. La troisième est l’exception.',
  audio: REC('rec-b2-18-futur'),
  say: REFRAME,
  terms: ['futur'],
  cards: [
    {
      head: 'Le piège de l’anglais', label: Cap(FUTUR_USAGE_REF),
      fr: fr(E(2538)), sub: rsOf(E(2538)),
      body: `« ${B107_REFRAME} » When you arrive se dit quand tu arriveras. EN: ${B107_REFRAME_EN}`,
    },
    {
      head: 'Tous les mots de temps', label: 'la même règle',
      fr: fr(E(2540)), sub: rsOf(E(2540)),
      body: "Pendant que, tant que, chaque fois que, lorsque, au moment où, dès que : pour l'avenir, le futur. EN: every time word takes the future for the future.",
    },
    {
      head: 'Sauf si', label: Cap(SI_REF),
      fr: fr(E(2549)), sub: rsOf(E(2549)),
      body: "Si reste au présent, même quand il parle de demain : si tu as un problème, appelle. Jamais si tu auras. EN: si keeps the present.",
    },
    {
      head: 'Le futur vu du passé', label: Cap(DISCOURS_REF),
      fr: fr(E(2546)), sub: rsOf(E(2546)),
      body: "Quand on raconte au passé, le futur devient un conditionnel, et le futur antérieur un conditionnel passé : dès qu'elle aurait fini. EN: the future seen from the past is a conditional.",
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Futur ou présent',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('L’avenir : le futur', [
      it(E(2538), 'quand'),
      it(E(2542), 'lorsque'),
      it(E(2550), 'quand'),
      it(PF(436), 'lorsque'),
    ], chk('« Quand tu … Marc demain, dis-lui bonjour. » (à l’écrit)',
      ['verras', 'vois', 'voies'], 0,
      'Demain : le futur après quand. EN: verras.')),
    grp('Une habitude, ou si : le présent', [
      it(E(2553), 'une habitude'),
      it(E(2549), 'si'),
      it(E(2499), 'une règle générale'),
      it(E(2506), 'une habitude'),
    ], chk('« Si tu … un problème, appelle ma voisine. »',
      ['as', 'auras'], 0,
      'Si garde le présent. EN: as.')),
    ctl('Le passé', '« Julien a promis qu’il appellerait quand il … »',
      ['arriverait', 'arrivera'], 0,
      'Le futur vu du passé : conditionnel. EN: arriverait.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['futur'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Le présent de l’anglais',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'L’avenir au futur, partout sauf après si',
    body: "Après quand, lorsque, pendant que, tant que, chaque fois que, au moment où et dès que, l'avenir se dit au futur à l'écrit. Si garde le présent. Vu du passé, le futur devient un conditionnel. EN: the future after time words; the present after si.",
  },
  cards: [
    trap(E(2538), 'quand + présent', 'Quand tu arrives, la clé sera sous le pot de fleurs.', 'L’arrivée est à venir : arriveras. EN: arriveras.'),
    trap(E(2539), 'pendant que + présent', 'Pendant que je suis à Lisbonne, tu pourras utiliser mon vélo.', 'Le séjour est à venir : serai. EN: serai.'),
    trap(E(2549), 'si + futur', 'Si tu auras un problème, appelle ma voisine.', 'Jamais de futur après si : as. EN: as.'),
    trap(E(2546), 'un seul conditionnel', 'Julien a promis qu’il appellerait quand il arrivera à Lisbonne.', 'Les deux verbes passent au conditionnel : arriverait. EN: arriverait.'),
    trap(E(2547), 'quand + présent', 'Quand tu vois Marc demain, dis-lui que j’ai laissé ses clés.', 'Demain : verras. EN: verras.'),
    trap(E(2551), 'dès que, vu du passé', 'Elle m’avait dit qu’elle passerait dès qu’elle aura fini.', 'Vu du passé, le futur antérieur devient conditionnel passé : aurait fini. EN: aurait fini.'),
  ],
  drill: [
    { promptSay: 'Quand tu …, la clé sera sous le pot de fleurs.', opts: ['arrives', 'arriveras'], correct: 1 },
    { promptSay: 'Si tu … un problème, appelle ma voisine.', opts: ['as', 'auras'], correct: 0 },
    { promptSay: 'Pendant que je … à Lisbonne, tu pourras utiliser mon vélo.', opts: ['serai', 'suis'], correct: 0 },
    { promptSay: 'Lorsque le plombier …, montre-lui la salle de bains.', opts: ['viendra', 'vient'], correct: 0 },
    { promptSay: 'Julien a promis qu’il appellerait quand il …', opts: ['arrivera', 'arriverait'], correct: 1 },
    { promptSay: 'Quand il … chaud, j’arrose le soir. (une habitude)', opts: ['fait', 'fera'], correct: 0 },
    { promptSay: 'Elle m’avait dit qu’elle passerait dès qu’elle … fini.', opts: ['aurait', 'aura'], correct: 0 },
    { promptSay: 'Chaque fois que tu …, ferme bien la porte du jardin.', opts: ['sortiras', 'sortes'], correct: 0 },
  ],
  steps: STEPS('L’avenir au futur, partout sauf après si', 'Le présent de l’anglais'),
  audio: REC('rec-b2-18-piege-futur'),
  say: REFRAME,
  terms: ['futur'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Cinq phrases tournées vers l’avenir',
  frSub: 'Du B1 à aujourd’hui',
  examples: [
    ex(PF(436), 'lorsque + futur : un séjour à venir'),
    ex(PF(440), 'pendant que + futur, des deux côtés'),
    ex(PF(574), `la règle de ${FUTUR_USAGE_REF}`),
    ex(E(2552), 'pendant que + futur : deux tâches à venir'),
    ex(E(2551), 'le futur antérieur vu du passé : aurait fini'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['futur'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Compléter : le courriel de Julien', TEXTE_A9, [
  { q: 'Quand tu (arriver) ; pendant que je (être) à Lisbonne.', a: "Quand tu arriveras ; pendant que je serai à Lisbonne : l'avenir, donc le futur après le mot de temps." },
  { q: 'Tant qu’il (faire) chaud ; lorsque le plombier (venir).', a: "Tant qu'il fera chaud ; lorsque le plombier viendra : le futur, même règle. Tant qu'il fait chaud irait aussi si la chaleur est déjà là." },
  { q: 'Si tu (avoir) un problème.', a: "Si tu as un problème : si garde le présent, jamais le futur." },
  { q: 'Je t’appellerai dès que je (arriver) là-bas.', a: "Dès que je serai arrivé, ou dès que j'arriverai : l'arrivée d'abord (futur antérieur), ou au même moment (futur)." },
], 'rec-b2-18-texte-a9', ['futur']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le futur', '« Lorsque le plombier … demain, montre-lui la salle de bains. » (à l’écrit)',
    ['viendra', 'vient', 'vienne'], 0,
    'L’avenir : le futur. EN: viendra.'),
  ctl('Si', '« Si tu … un problème, appelle ma voisine. »',
    ['as', 'auras'], 0,
    'Si garde le présent. EN: as.'),
  ctl('Le passé', '« Il a dit qu’il appellerait quand il … »',
    ['arriverait', 'arriverai'], 0,
    'Le futur vu du passé : conditionnel. EN: arriverait.'),
], ['futur']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Quand tu arriveras',
    opener: {
      line: "Des consignes pour quelqu'un qui garde ta maison : ici tu mets l'avenir au futur après chaque mot de temps, là où l'anglais met le présent. EN: Instructions for a house-sitter: here you put the future after every time word, where English uses the present.",
      imageRef: 'lessons/subordonnees-temps/act09.jpg',
    },
    sections: [],
    milestone: "Tu mets le futur après quand, lorsque, pendant que, tant que et dès que pour l'avenir, le présent après si, et le conditionnel dans un récit au passé. EN: You can use the future after time words, the present after si, and the conditional in a past report.",
    estScreens: 38, restPoints: ['a9-cartes', 'a9-piege'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_CONSTRUIRE, A9_PIEGE, A9_EXEMPLES, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: APRÈS QUE, ET COMMENT L'ÉVITER
 *
 *  Past lessons 31 in B1 and 6 in B2 (après que + indicatif, named): the
 *  tense after après que by the other verb, « après qu'il soit parti » as
 *  the spoken, contested form (gate B2-2 decision), the ways out (après +
 *  nom, lesson 10 in B2; après + infinitif passé, lesson 14 in B2) and the
 *  dangling infinitive.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'L’assemblée de l’association',
  frSub: 'Huit moments d’une soirée',
  lines: [
    ln(E(2556)), ln(E(2557)), ln(E(2559)), ln(E(2562)),
    ln(E(2563)), ln(E(2558)), ln(E(2566)), ln(E(2567)),
  ],
  questions: [
    { q: 'Première phrase : qui a parlé en premier ?', opts: ['la présidente', 'le trésorier'], correct: 0, why: 'Après que : l’ouverture de la séance vient d’abord. EN: the chair.' },
    { q: 'Deuxième phrase : le trésorier a-t-il répondu avant de présenter les comptes ?', opts: ['non, après', 'oui'], correct: 0, why: 'Après avoir présenté : la présentation d’abord. EN: no, afterwards.' },
    { q: 'Quatrième phrase : qui était en retard ?', opts: ['la vice-présidente', 'le secrétaire'], correct: 0, why: 'Après être arrivée en retard : elle-même, et elle s’excuse. EN: the vice-chair.' },
    { q: 'Cinquième phrase : a-t-on voté avant que tout le monde ait parlé ?', opts: ['non', 'oui'], correct: 0, why: 'Une fois que chacun s’est exprimé : le vote vient après. EN: no.' },
    { q: 'Dernière phrase : les membres sont-ils déjà prévenus ?', opts: ['non, pas encore', 'oui'], correct: 0, why: 'Après qu’on aura fixé la date : c’est pour plus tard. EN: not yet.' },
  ],
  audio: REC('rec-b2-18-apres-ecoute'),
  say: REFRAME,
  terms: ['apres'],
};

const A10_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a10-table',
  layer: 'core',
  sheetId: 'sheet-apres',
  title: 'Après, six tournures',
  cols: ['Tournure', 'Pour', 'Exemple'],
  rows: [
    { cells: ['après que + passé composé', 'un fait passé', 'après qu’il a été élu'], say: fr(E(2559)),
      detail: { title: 'après que + passé composé', body: "Le fait a eu lieu : l'indicatif. C'est la forme la plus courante dans un compte rendu. EN: a past event: indicative.", say: fr(OA(1937)) } },
    { cells: ['après que + plus-que-parfait', 'une habitude passée', 'après qu’ils avaient voté'], say: fr(E(2568)),
      detail: { title: 'après que + plus-que-parfait', body: "Pour une habitude au passé, le fait fini avant passe au plus-que-parfait, et l'autre verbe à l'imparfait. EN: past habit: pluperfect.", say: fr(E(2568)) } },
    { cells: ['après que + futur antérieur', 'l’avenir', 'après qu’on aura fixé'], say: fr(E(2567)),
      detail: { title: 'après que + futur antérieur', body: `Pour l'avenir, le fait fini d'abord : futur antérieur, comme dans ${FUT_ANT_REF}. EN: future: futur antérieur.`, say: fr(E(2567)) } },
    { cells: ['après + infinitif passé', 'un seul sujet', 'après avoir présenté'], say: fr(E(2557)),
      detail: { title: 'après + infinitif passé', body: "La même personne dans les deux parties : après avoir, après être, et le participe. EN: one subject: après + past infinitive.", say: fr(E(2562)) } },
    { cells: ['après + nom', 'plus court', 'après le vote'], say: fr(E(2558)),
      detail: { title: 'après + nom', body: `Le verbe devient un nom, comme dans ${NOMINAL_REF} : après son élection. EN: a noun.`, say: fr(E(2566)) } },
    { cells: ['une fois que', 'déjà fait', 'une fois que chacun…'], say: fr(E(2563)),
      detail: { title: 'une fois que', body: "Le même sens qu'après que, sans la tentation du subjonctif. EN: once.", say: fr(PF2(1882)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['apres'],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Une phrase, un nom ou un infinitif',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Une phrase complète : après que + indicatif', [
      it(E(2556), 'passé composé'),
      it(E(2559), 'passé composé, au passif'),
      it(OA(1937), 'passé composé'),
      it(OA(1939), 'passé composé, avec être'),
    ], chk('« Après que la présidente … la séance, le trésorier a parlé. »',
      ['a ouvert', 'ait ouvert', 'ouvre'], 0,
      'Un fait accompli : indicatif. EN: a ouvert.')),
    grp('Plus court : un nom ou un infinitif', [
      it(E(2557), 'après avoir'),
      it(E(2558), 'après + nom'),
      it(OA(1945), 'après avoir, le même sujet'),
      it(FP(1211), 'après être'),
    ], chk('« Après … les comptes, le trésorier a répondu aux questions. » (lui seul)',
      ['avoir présenté', 'que le trésorier a présenté'], 0,
      'Un seul sujet : après + infinitif passé. EN: avoir présenté.')),
    ctl('Le sujet', '« Après avoir voté, … »',
      ['le conseil a levé la séance', 'la séance a été levée'], 0,
      'L’infinitif prend le sujet de la phrase : c’est le conseil qui a voté. EN: the council voted.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['apres', 'sujet'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Après qu’il soit parti, et les autres',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Après que regarde un fait accompli',
    body: "Après que + indicatif, parce que le fait a eu lieu. « Après qu'il soit parti » s'entend partout ; à l'écrit, il coûte. Et après + infinitif passé veut le même sujet dans les deux parties. EN: indicative after après que; the same subject for après + past infinitive.",
  },
  cards: [
    trap(E(2564), 'après que + subjonctif (oral)', 'Après que le trésorier soit parti, nous avons abordé le budget.', 'À l’oral, on l’entend ; à l’écrit, est parti. EN: est parti.'),
    trap(E(2556), 'après que + subjonctif (oral)', 'Après que la présidente ait ouvert la séance, le trésorier a présenté les comptes.', 'L’ouverture a eu lieu : a ouvert. EN: a ouvert.'),
    trap(E(2565), 'le sujet qui change', 'Après avoir voté le budget, le bureau a été élu par l’assemblée.', 'C’est l’assemblée qui a voté : elle doit être le sujet. EN: same subject.'),
    trap(E(2562), 'l’accord oublié', 'Après être arrivé en retard, la vice-présidente s’est excusée.', 'Avec être, le participe s’accorde : arrivée. EN: arrivée.'),
    trap(E(2567), 'après que + futur simple', 'Après qu’on fixera la date, nous préviendrons les membres.', 'La date fixée d’abord : futur antérieur, aura fixé. EN: aura fixé.'),
    trap(E(2558), 'après que + nom', 'Après que le vote, la séance a été levée.', 'Devant un nom, après seul : après le vote. EN: après le vote.'),
  ],
  drill: [
    { promptSay: 'Après que la présidente … la séance, le trésorier a parlé.', opts: ['a ouvert', 'ait ouvert'], correct: 0 },
    { promptSay: 'Après … les comptes, le trésorier a répondu.', opts: ['avoir présenté', 'présentant'], correct: 0 },
    { promptSay: 'Après qu’il … élu, le secrétaire a pris la parole.', opts: ['ait été', 'a été'], correct: 1 },
    { promptSay: 'Après …, la séance a été levée.', opts: ['le vote', 'que le vote'], correct: 0 },
    { promptSay: 'Après qu’on … la date, nous préviendrons les membres.', opts: ['fixera', 'aura fixé'], correct: 1 },
    { promptSay: 'Après être … en retard, la vice-présidente s’est excusée.', opts: ['arrivée', 'arrivé'], correct: 0 },
    { promptSay: 'Après avoir voté, …', opts: ['le conseil a levé la séance', 'la séance a été levée'], correct: 0 },
    { promptSay: 'Une fois que chacun …, nous avons voté.', opts: ['s’est exprimé', 'se soit exprimé'], correct: 0 },
  ],
  steps: STEPS('Après que regarde un fait accompli', 'Après qu’il soit parti, et les autres'),
  audio: REC('rec-b2-18-piege-apres'),
  say: REFRAME,
  terms: ['apres', 'oral'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-apres',
  title: 'Ce qu’il faut retenir d’après que',
  points: [
    "Après que regarde un fait accompli : l'indicatif, au temps qui convient. EN: the indicative.",
    "« Après qu'il soit parti » s'entend partout, mais reste critiqué à l'écrit : à l'examen, il coûte un point. EN: spoken, criticised in writing.",
    "Pour éviter la question : après + nom, ou après + infinitif passé si le sujet est le même. EN: a noun or a past infinitive.",
    "L'infinitif prend le sujet de la phrase : après avoir voté, le conseil…, jamais la séance. EN: keep the same subject.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['apres', 'oral'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Réécrire : le procès-verbal de Liège', TEXTE_A10, [
  { q: 'Premier crochet : après que la présidente ait ouvert la séance.', a: "Après que la présidente a ouvert la séance : l'ouverture a eu lieu, donc l'indicatif. Ou plus court : après l'ouverture de la séance." },
  { q: 'Deuxième crochet : le trésorier deux fois.', a: "Après avoir présenté les comptes, le trésorier a répondu aux questions : un seul sujet, l'infinitif passé." },
  { q: 'Troisième crochet : après qu’il soit parti.', a: "Après qu'il est parti, ou après son départ : à l'écrit, pas de subjonctif après après que." },
  { q: 'Dernier crochet : après que nous avons voté.', a: "Il est déjà correct. Plus léger : après le vote, la séance a été levée à 22 h." },
], 'rec-b2-18-texte-a10', ['apres']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Après que', '« Après qu’il … élu, le secrétaire a pris la parole. »',
    ['a été', 'ait été'], 0,
    'Un fait accompli : indicatif. EN: a été.'),
  ctl('L’oral', '« Après qu’il soit parti », à l’écrit soigné, c’est…',
    ['une forme critiquée', 'la forme la plus soignée'], 0,
    'Répandu à l’oral, critiqué à l’écrit. EN: criticised in writing.'),
  ctl('La sortie', 'Pour éviter après que, tu peux écrire…',
    ['après son départ', 'après qu’il parte'], 0,
    'Un nom : plus de mode à choisir. EN: a noun.'),
], ['apres']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Après que',
    opener: {
      line: "Un procès-verbal où tout arrive après autre chose : ici tu gardes l'indicatif après après que, même quand l'oreille entend le subjonctif, et tu apprends à l'éviter. EN: Minutes where everything comes after something else: here you keep the indicative after après que, and learn to avoid it.",
      imageRef: 'lessons/subordonnees-temps/act10.jpg',
    },
    sections: [],
    milestone: "Tu écris après que avec l'indicatif, tu reconnais la forme orale qu'on critique, et tu passes à après + nom ou après + infinitif passé quand c'est plus clair. EN: You can write après que with the indicative and use the ways out.",
    estScreens: 38, restPoints: ['a10-table', 'a10-piege'],
  },
  sections: [A10_ECOUTE, A10_TABLE, A10_CONSTRUIRE, A10_PIEGE, A10_FOCUS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: DÈS QUE, AUSSITÔT QUE, UNE FOIS QUE : L'ANTÉRIORITÉ
 *
 *  Past lesson 7 in B2 (dès que + futur antérieur) and lesson 1 in B2 (the
 *  plus-que-parfait): the compound tense after dès que follows the tense of
 *  the other verb. The passé antérieur for recognition only (lesson 8 in
 *  B2); sitôt / une fois + participe; dès que with the same simple tense
 *  for events that follow at once.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a11-histoire',
  layer: 'core',
  title: 'Le grand-père de Léa',
  frSub: 'Fini juste avant',
  setting: 'Nice, un balcon face à la mer. Léa, dix-sept ans, interroge son grand-père Marcel pour un devoir sur l’enfance d’autrefois.',
  bubbles: [
    { from: 'narrator', fr: 'Marcel raconte ses habitudes ; Léa note la chronologie.', en: 'Marcel talks about his old habits; Léa notes the order of events.' },
    { from: 'user', fr: fr(E(2573)), en: en(E(2573)) },
    { from: 'coach', fr: 'Une habitude au passé : dès que + plus-que-parfait, puis l’imparfait. Les devoirs étaient finis avant la plage.', en: 'A past habit: dès que + pluperfect, then the imparfait. The homework was done before the beach.', warn: 'Imparfait : plus-que-parfait' },
    { from: 'user', fr: fr(E(2578)), en: en(E(2578)) },
    { from: 'coach', fr: 'Sitôt arrivé : sitôt + participe, un raccourci soutenu pour dès qu’il était arrivé.', en: 'Sitôt arrivé: sitôt + participle, a formal shortcut for dès qu’il était arrivé.', warn: 'Sitôt + participe' },
    { from: 'user', fr: fr(E(2579)), en: en(E(2579)) },
    { from: 'coach', fr: 'Une fois le repas terminé : le même raccourci, avec un nom et un participe.', en: 'Une fois le repas terminé: the same shortcut, with a noun and a participle.', warn: 'Une fois + participe' },
    { from: 'user', fr: fr(E(2574)), en: en(E(2574)) },
    { from: 'coach', fr: 'Et pour l’avenir, Léa dit : dès que + futur antérieur, puis le futur.', en: 'And for the future, Léa says: dès que + futur antérieur, then the future.', warn: 'Futur : futur antérieur' },
  ],
  closing: { fr: 'Dès que + un temps composé, accordé au temps de l’autre verbe : c’est le fait fini juste avant.', en: 'Dès que + a compound tense matched to the other verb: the event finished just before.' },
  audio: REC('rec-b2-18-marcel'),
  say: REFRAME,
  terms: ['anteriorite'],
};

const A11_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a11-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-apres',
  title: 'Le temps composé qui va avec',
  frSub: 'Quatre temps, une échelle',
  hint: 'Quatre cartes. La dernière se lit seulement.',
  audio: REC('rec-b2-18-anteriorite'),
  say: REFRAME,
  terms: ['anteriorite'],
  cards: [
    {
      head: 'Avec un présent', label: 'passé composé',
      fr: fr(E(2572)), sub: rsOf(E(2572)),
      body: "Une habitude d'aujourd'hui : le café est fini, puis je pars. Dès que + passé composé, puis le présent. EN: a present habit: passé composé.",
    },
    {
      head: 'Avec un imparfait', label: Cap(PQP_REF),
      fr: fr(E(2573)), sub: rsOf(E(2573)),
      body: `« ${B201_REFRAME} » Une habitude d'autrefois : dès que + plus-que-parfait, puis l'imparfait. EN: ${B201_REFRAME_EN}`,
    },
    {
      head: 'Avec un futur', label: Cap(FUT_ANT_REF),
      fr: fr(E(2574)), sub: rsOf(E(2574)),
      body: `« ${B207_REFRAME} » Dès que + futur antérieur, puis le futur. EN: ${B207_REFRAME_EN}`,
    },
    {
      head: 'Avec un passé simple', label: Cap(PS_REF),
      fr: fr(E(2575)), sub: rsOf(E(2575)),
      body: `« ${B208_REFRAME} » Eut fini : le passé antérieur, à lire. Toi, tu écris dès qu'il a fini. EN: the passé antérieur, read not written.`,
    },
  ],
};

const A11_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-construire',
  layer: 'core',
  size: 'lg',
  title: 'Accorder le temps composé',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le temps composé qui va avec', [
      it(E(2572), 'présent : passé composé'),
      it(E(2573), 'imparfait : plus-que-parfait'),
      it(E(2574), 'futur : futur antérieur'),
      it(PF2(1889), 'futur : futur antérieur'),
    ], chk('« Dès que nous … dîné, mon père sortait les cartes. »',
      ['avions', 'avons', 'aurons'], 0,
      'Imparfait ensuite : plus-que-parfait avant. EN: avions dîné.')),
    grp('Fini avant, ou tout de suite après', [
      it(E(2576), 'fini avant : plus-que-parfait'),
      it(E(2585), 'fini avant : plus-que-parfait'),
      it(PF(460), 'aussitôt : deux imparfaits'),
      it(E(2586), 'aussitôt : deux imparfaits'),
    ], chk('« Dès que la cloche sonnait, tout le monde sortait. » La sortie vient…',
      ['au moment même où la cloche sonne', 'longtemps après la cloche'], 0,
      'Deux imparfaits : les deux faits se suivent sans écart. EN: at that very moment.')),
    ctl('Le raccourci', '« … arrivé, mon grand-père allumait la radio. » (soutenu)',
      ['Sitôt', 'Dès que'], 0,
      'Sitôt + participe : un raccourci soutenu. Dès que demande un verbe conjugué. EN: sitôt.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['anteriorite'],
};

const A11_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a11-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Fini, puis la suite',
  frSub: 'Neuf phrases, quatre époques',
  lines: [
    ln(E(2572)), ln(E(2573)), ln(E(2574)), ln(E(2576)), ln(E(2577)),
    ln(E(2579)), ln(E(2585)), ln(E(2587)), ln(PF2(1882)),
  ],
  questions: [
    { q: 'Première phrase : que fait la personne avant de partir au travail ?', opts: ['finir son café', 'préparer le repas'], correct: 0, why: 'Dès que + passé composé : le café est fini d’abord. EN: finish the coffee.' },
    { q: 'Deuxième phrase : cette habitude est-elle actuelle ?', opts: ['non, c’est un souvenir', 'oui'], correct: 0, why: 'Plus-que-parfait et imparfait : une habitude d’autrefois. EN: no, a memory.' },
    { q: 'Troisième phrase : le livre est-il déjà prêté ?', opts: ['non, pas encore', 'oui'], correct: 0, why: 'Futur antérieur : la lecture d’abord, le prêt ensuite. EN: not yet.' },
    { q: 'Cinquième phrase : quand étale-t-on la pâte ?', opts: ['après son repos', 'avant son repos'], correct: 0, why: 'Une fois que la pâte a reposé. EN: after resting.' },
    { q: 'Dernière phrase : que faut-il avoir compris d’abord ?', opts: ['le principe', 'la dernière étape'], correct: 0, why: 'Une fois que tu auras compris le principe, tout ira vite. EN: the principle.' },
  ],
  audio: REC('rec-b2-18-anteriorite-ecoute'),
  say: REFRAME,
  terms: ['anteriorite'],
};

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a11-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre temps mal accordés',
  errors: [
    {
      wrong: 'Dès que j’ai fini ce livre, je te le prêterai.',
      right: fr(E(2574)),
      why: "Normal : l'anglais dit as soon as I have finished. Mais le livre sera fini dans l'avenir : futur antérieur, j'aurai fini. EN: future: futur antérieur.",
    },
    {
      wrong: 'Dès que nous avons dîné, mon père sortait les cartes.',
      right: fr(E(2582)),
      why: "Normal : le dîner est fini, donc un passé composé. Mais l'autre verbe est à l'imparfait : le temps composé suit, avions dîné. EN: imparfait after, pluperfect before.",
    },
    {
      wrong: 'Une fois que le repas terminé, nous faisions la sieste.',
      right: fr(E(2579)),
      why: "Normal : une fois que appelle d'habitude un verbe. Sans verbe conjugué, on enlève que : une fois le repas terminé. EN: une fois + noun + participle, no que.",
    },
    {
      wrong: 'Dès qu’il eut fini son repas, il est sorti sur la terrasse.',
      right: 'Dès qu’il a fini son repas, il est sorti sur la terrasse.',
      why: "Normal : eut fini se lit dans les romans. Mais il va avec le passé simple ; avec un passé composé, écris dès qu'il a fini. EN: the passé antérieur goes with the passé simple.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['anteriorite'],
};

const A11_TEXTE = dansUnTexte('a11-texte', 'Reconnaître : un extrait de roman', TEXTE_A11, [
  { q: 'Trouve les deux passés antérieurs.', a: "Eut fini et fut partie : avoir et être au passé simple, puis le participe. Chacun dit un fait fini juste avant un passé simple (sortit, sembla)." },
  { q: 'Comment l’écrirait-on aujourd’hui ?', a: "Dès qu'il a fini son repas, il est sorti sur la terrasse. Aussitôt qu'elle est partie, la maison a semblé vide." },
  { q: 'Et la phrase de Léa : dès que tu avais fini ta journée, tu t’asseyais…', a: "Une habitude passée : dès que + plus-que-parfait, puis l'imparfait. Le temps composé suit le temps de l'autre verbe." },
  { q: 'Pourquoi pas « dès que tu as fini ta journée, tu t’asseyais » ?', a: "Parce que l'autre verbe est à l'imparfait : le fait fini avant passe au plus-que-parfait, avais fini." },
], 'rec-b2-18-texte-a11', ['anteriorite']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le futur', '« Dès que j’… fini ce livre, je te le prêterai. »',
    ['aurai', 'ai', 'avais'], 0,
    'Futur ensuite : futur antérieur. EN: aurai fini.'),
  ctl('L’imparfait', '« Dès que nous … dîné, mon père sortait les cartes. »',
    ['avions', 'avons'], 0,
    'Imparfait ensuite : plus-que-parfait. EN: avions.'),
  ctl('Le passé antérieur', '« Dès qu’il eut fini, il sortit » : ce temps, tu…',
    ['le reconnais dans un roman', 'l’écris dans un courriel'], 0,
    'Un temps de l’écrit littéraire, à lire. EN: recognise it.'),
], ['anteriorite']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Dès que, une fois que',
    opener: {
      line: "Les habitudes d'un grand-père, un roman, un livre à prêter : ici tu dis ce qui est fini juste avant, avec le temps composé qui va avec l'autre verbe. EN: A grandfather's habits, a novel, a book to lend: here you say what is finished just before, with the compound tense that matches the other verb.",
      imageRef: 'lessons/subordonnees-temps/act11.jpg',
    },
    sections: [],
    milestone: "Tu accordes le temps composé après dès que, aussitôt que et une fois que au temps de l'autre verbe, et tu reconnais le passé antérieur. EN: You can match the compound tense after dès que to the other verb, and recognise the passé antérieur.",
    estScreens: 38, restPoints: ['a11-cartes', 'a11-ecoute'],
  },
  sections: [A11_HISTOIRE, A11_CARTES, A11_CONSTRUIRE, A11_ECOUTE, A11_ERREURS, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12: TON COMPTE RENDU
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le compte rendu que tu vas imiter',
  frSub: 'L’évacuation de la piscine',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'maîtres-nageurs', en: 'lifeguards', note: 'Les personnes qui surveillent le bassin et enseignent la natation.' },
    { word: 'la chaufferie', en: 'the boiler room', note: 'La salle où se trouve le chauffage du bâtiment.' },
    { word: 'une fausse alerte', en: 'a false alarm', note: 'Une alarme qui sonne sans vrai danger.' },
    { word: 'défectueux', en: 'faulty', note: 'Qui ne fonctionne pas comme il faut.' },
  ],
  questions: [
    { q: 'Global : à qui s’adresse ce texte, et pourquoi ?', a: "Au conseil d'administration du centre : le responsable rend compte d'un incident, dans l'ordre, puis dit ce qui a été fait et ce qu'il propose." },
    { q: 'Ordre : qu’a fait le responsable pendant l’évacuation ?', a: "Il a appelé les pompiers pendant que les maîtres-nageurs faisaient sortir le public ; puis, dès que le bâtiment a été vide, il a compté les personnes présentes." },
    { q: 'Détail : jusqu’à quand le public est-il resté dehors ?', a: "Jusqu'à ce que les pompiers autorisent le retour, vers 19 h 30." },
    { q: 'Inférence : pourquoi préciser que personne ne manquait ?', a: "Pour rassurer le conseil : l'évacuation a marché, et personne n'est resté dans le bâtiment." },
    { q: 'Forme : trouve un mot de temps suivi du subjonctif, un de l’indicatif et un de l’infinitif.', a: "Avant que l'alarme se déclenche, jusqu'à ce que les pompiers autorisent, en attendant que le système soit vérifié ; au moment où l'alarme a retenti, dès que le bâtiment a été vide ; après avoir inspecté, avant d'avoir pu reprendre." },
    { q: 'Structure : comment le texte se termine-t-il ?', a: "Par la suite : ce qui se passera (je vous tiendrai informés dès que…), ce qui est suspendu en attendant, et une proposition pour l'avenir." },
  ],
  audio: REC('rec-b2-18-modele'),
  say: REFRAME,
  terms: ['rapport', 'ligne'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  sheetId: 'sheet-rapport',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Du début à la suite',
  steps: [
    'Annonce l’objet : quel incident, où, quand, et pour qui tu écris. EN: say what, where, when and for whom.',
    'Pose la situation avant l’incident : avant que…, rien ne laissait prévoir. EN: set the scene before the incident.',
    'Raconte les faits dans l’ordre, avec des mots de temps variés : au moment où, pendant que, dès que, jusqu’à ce que. EN: tell the events in order with varied time words.',
    'Dis ce qui a été fait ensuite : après avoir…, depuis que… EN: say what was done next.',
    'Termine par la suite, au futur : je vous tiendrai informés dès que…, en attendant que… EN: end with what comes next.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['rapport', 'ligne'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  sheetId: 'sheet-rapport',
  title: 'Quatre phrases que tout compte rendu contient',
  cases: [
    { situation: 'Tu annonces la chronologie', fr: fr(E(2590)), en: en(E(2590)) },
    { situation: 'Tu poses la situation avant l’incident', fr: fr(E(2591)), en: en(E(2591)) },
    { situation: 'Tu racontes deux actions en même temps', fr: fr(E(2593)), en: en(E(2593)) },
    { situation: 'Tu annonces la suite', fr: fr(E(2598)), en: en(E(2598)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['rapport'],
};

const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'La panne au bureau',
  frSub: 'Six tours, à voix haute',
  setting: 'Tu travailles à Lausanne. Ce matin, le serveur informatique de ton service est tombé en panne. Ta responsable, en déplacement, t’appelle pour savoir ce qui s’est passé.',
  turns: [
    {
      ai: 'Bonjour, qu’est-ce qui s’est passé exactement ?', en: 'Hello, what exactly happened?',
      user: 'Au moment où j’ai allumé mon ordinateur, plus rien ne marchait.',
      userEn: 'The moment I switched on my computer, nothing was working any more. (Au moment où: an instant.)',
      alts: [
        { fr: 'Lorsque je suis arrivé au bureau, le serveur était déjà en panne.', en: 'When I got to the office, the server was already down. (Lorsque, and the imparfait for the situation.)' },
        { fr: 'Quand j’ai allumé mon ordinateur, le réseau ne répondait plus.', en: 'When I switched on my computer, the network was no longer responding. (Quand: also right.)' },
      ],
    },
    {
      ai: 'Et qu’avez-vous fait ?', en: 'And what did you do?',
      user: 'J’ai prévenu le technicien dès que j’ai compris que tout le service était touché.',
      userEn: 'I warned the technician as soon as I realised the whole department was affected. (Dès que: done just before.)',
      alts: [
        { fr: 'Pendant que mes collègues redémarraient leurs postes, j’ai appelé le technicien.', en: 'While my colleagues were restarting their computers, I called the technician. (Pendant que + imparfait.)' },
        { fr: 'Après avoir vérifié les câbles, j’ai appelé le technicien.', en: 'After checking the cables, I called the technician. (Après + past infinitive, one subject.)' },
      ],
    },
    {
      ai: 'Le technicien est déjà passé ?', en: 'Has the technician been already?',
      user: 'Pas encore : il viendra avant que l’équipe de l’après-midi arrive.',
      userEn: 'Not yet: he will come before the afternoon team arrives. (Avant que + subjunctive.)',
      alts: [
        { fr: 'Pas encore : il viendra avant que l’équipe de l’après-midi n’arrive.', en: 'Not yet: he will come before the afternoon team arrives. (With the expletive ne: also right, more formal.)' },
        { fr: 'Non, il passera vers treize heures, avant la réunion.', en: 'No, he will come round at about one, before the meeting. (Avant + noun.)' },
      ],
    },
    {
      ai: 'Et en attendant, comment travaillez-vous ?', en: 'And in the meantime, how are you working?',
      user: 'En attendant que le serveur soit réparé, nous travaillons sur nos portables.',
      userEn: 'Until the server is repaired, we are working on our laptops. (En attendant que + subjunctive.)',
      alts: [
        { fr: 'Jusqu’à ce que le serveur soit réparé, nous travaillons sur papier.', en: 'Until the server is repaired, we are working on paper. (Jusqu’à ce que + subjunctive.)' },
        { fr: 'Tant que le serveur ne sera pas réparé, nous travaillerons sur nos portables.', en: 'As long as the server is not repaired, we will work on our laptops. (Tant que + ne… pas, in the future.)' },
      ],
    },
    {
      ai: 'Quand saurons-nous si des fichiers sont perdus ?', en: 'When will we know whether any files are lost?',
      user: 'Je vous le dirai dès que le technicien aura fini son diagnostic.',
      userEn: 'I will tell you as soon as the technician has finished his diagnosis. (Dès que + futur antérieur.)',
      alts: [
        { fr: 'Quand le technicien aura terminé, je vous appellerai.', en: 'When the technician has finished, I will call you. (Quand + futur antérieur.)' },
        { fr: 'Une fois que le diagnostic sera fait, je vous écrirai.', en: 'Once the diagnosis is done, I will write to you. (Une fois que, in the future.)' },
      ],
    },
    {
      ai: 'Parfait. Vous m’enverrez un compte rendu ?', en: 'Perfect. Will you send me a report?',
      user: 'Oui, je vous l’enverrai après avoir parlé au technicien.',
      userEn: 'Yes, I will send it after talking to the technician. (Après + past infinitive.)',
      alts: [
        { fr: 'Oui, je vous l’enverrai ce soir, après la réparation.', en: 'Yes, I will send it tonight, after the repair. (Après + noun.)' },
        { fr: 'Oui, dès que tout sera rentré dans l’ordre.', en: 'Yes, as soon as everything is back to normal. (Dès que, in the future.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['rapport', 'ligne'],
};

const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Ton compte rendu : les faits dans l’ordre',
  frSub: 'Mission écrite, format DELF B2',
  brief: "Tu as été témoin ou acteur d'un incident : une panne dans ton bureau, un dégât des eaux dans ton immeuble, une alarme pendant un événement, ou un retard important lors d'un voyage de groupe. La personne responsable (ta cheffe, le syndic, l'organisatrice) te demande un compte rendu écrit. Raconte les faits dans l'ordre, du début à la fin, puis dis ce qui a été fait et ce qui reste à faire.",
  briefEn: 'You witnessed or took part in an incident: a breakdown at your office, water damage in your building, an alarm during an event, or a long delay on a group trip. The person in charge (your manager, the property manager, the organiser) asks you for a written report. Tell the events in order, from start to finish, then say what was done and what remains to be done.',
  produce: "Écris un compte rendu de 200 à 250 mots qui ordonne les faits, avec au moins quatre mots de temps différents, dans les trois formes : au moins un suivi du subjonctif (avant que, jusqu'à ce que, en attendant que), au moins un suivi de l'indicatif (lorsque, pendant que, au moment où, dès que, après que) et au moins un suivi d'un infinitif (avant de, après avoir). Termine par la suite, au futur.",
  responseSpec: { kind: 'text', minWords: 200, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : Un compte rendu complet : l'objet (quoi, où, quand), les faits dans l'ordre du début à la fin, ce qui a été fait et la suite. Entre 200 et 250 mots.",
          "2 : Les faits sont là, mais une étape manque (la situation de départ, ce qui a été fait ou la suite), ou la longueur sort un peu des limites.",
          "1 : Une liste de faits sans ordre ni suite, ou un texte beaucoup trop court.",
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          "3 : Le lecteur suit la chronologie sans effort : chaque fait est placé avant, pendant ou après un autre, et un paragraphe mène au suivant.",
          "2 : La chronologie se suit, mais deux faits se mélangent ou un saut dans le temps n'est pas signalé.",
          "1 : On ne sait pas toujours dans quel ordre les faits se sont passés.",
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          "2 : Au moins quatre mots de temps différents, dans les trois formes : un subjonctif (avant que, jusqu'à ce que, en attendant que), un indicatif (lorsque, au moment où, dès que, après que) et un infinitif (avant de, après avoir).",
          "1 : Les mots de temps se répètent (quand, puis, après), ou une des trois formes manque.",
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          "2 : Le mode suit la place du fait : subjonctif après avant que et jusqu'à ce que, indicatif après après que et dès que, futur pour l'avenir après quand et dès que, temps composé accordé à l'autre verbe.",
          "1 : Des erreurs de mode ou de temps fréquentes (avant que + indicatif, quand + présent pour l'avenir) gênent parfois la lecture.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          "2 : Le registre d'un compte rendu : neutre et précis, des faits datés, aucune formule orale ; lorsque et les tournures soignées sont bienvenues.",
          "1 : Le texte sonne comme une conversation, ou mêle faits et émotions au point de brouiller la chronologie.",
        ],
      },
    ],
  },
  scaffold: [
    'Voici, dans l’ordre,',
    'Avant que',
    'Au moment où',
    'Pendant que',
    'Dès que',
    'Jusqu’à ce que',
    'Après avoir',
    'En attendant que',
  ],
  modelAnswer: "Objet : compte rendu de la sortie scolaire du 12 mai à Bruges\n\nMadame la Directrice,\n\nvoici, dans l'ordre, le compte rendu de l'incident survenu lors de notre sortie à Bruges. Nous avons quitté l'école à 7 h 30 avec quarante-deux élèves et trois accompagnateurs ; avant de partir, j'avais vérifié la liste des élèves. Vers 9 h, alors que nous roulions sur l'autoroute, le car s'est brusquement arrêté. Le chauffeur l'a garé sur la bande d'arrêt d'urgence dès qu'il a senti une odeur de brûlé. Pendant qu'il appelait la compagnie, nous avons fait descendre les élèves derrière la glissière de sécurité. Nous sommes restés au bord de la route jusqu'à ce qu'un car de remplacement arrive, soit près de deux heures. En attendant qu'il arrive, les élèves ont pris leur pique-nique, et personne n'a été blessé. Lorsque le nouveau car est enfin arrivé, il était trop tard pour visiter le musée : après avoir consulté mes collègues, j'ai décidé d'annuler la visite et de garder la promenade en ville. Nous sommes rentrés à 19 h, avant que les parents ne commencent à s'inquiéter, puisque je les avais prévenus par message. Après que les élèves sont partis, j'ai rempli le rapport destiné à la compagnie. Je vous transmettrai sa réponse dès que je l'aurai reçue. Enfin, je vous propose de reporter la visite du musée au mois de juin.\n\nVeuillez agréer, Madame la Directrice, mes salutations distinguées.\nChloé Martin, professeure d'histoire\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : l'objet (quelle sortie, quand), les faits dans l'ordre, ce qui a été fait (le rapport, la décision) et la suite (la réponse, le report).\n2. Cohérence : chaque fait est placé par un mot de temps (avant de, alors que, dès que, pendant que, jusqu'à ce que, lorsque, après que) ; aucun saut n'est laissé sans repère.\n3. Étendue : subjonctif (jusqu'à ce qu'un car arrive, en attendant qu'il arrive, avant que les parents ne commencent), indicatif (dès qu'il a senti, lorsque le car est arrivé, après que les élèves sont partis), infinitif (avant de partir, après avoir consulté), futur antérieur (dès que je l'aurai reçue).\n4. Correction : le subjonctif après avant que et jusqu'à ce que, l'indicatif après après que, le futur antérieur pour la réponse attendue ; le ne explétif est facultatif.\n5. Registre : un compte rendu à une directrice, neutre et daté ; lorsque et le ne explétif montrent un registre soigné.",
  modelAnswerEn: "Subject: report on the school trip to Bruges on 12 May. Dear Headteacher, here, in order, is my report on the incident during our trip to Bruges. We left the school at 7.30 with forty-two pupils and three staff; before leaving, I had checked the list of pupils. Around 9 o'clock, as we were driving along the motorway, the coach suddenly stopped. The driver pulled it onto the hard shoulder as soon as he smelled burning. While he was calling the company, we got the pupils off behind the crash barrier. We stayed by the roadside until a replacement coach arrived, nearly two hours. While we waited for it, the pupils ate their packed lunch, and nobody was hurt. When the new coach finally arrived, it was too late to visit the museum: after consulting my colleagues, I decided to cancel the visit and keep the walk around the town. We got back at 7 pm, before the parents started to worry, since I had warned them by text. After the pupils left, I filled in the report for the company. I will pass its answer on to you as soon as I have received it. Finally, I suggest moving the museum visit to June. Yours faithfully, Chloé Martin, history teacher. The marker's notes (not counted): 1. Task: the subject, the events in order, what was done, what comes next. 2. Coherence: every event placed by a time word. 3. Range: subjunctive, indicative, infinitive and futur antérieur. 4. Accuracy: the mood follows the place of the event; the expletive ne is optional. 5. Register: neutral, dated, careful.",
  watchFor: [
    { pattern: 'An indicative, a passé composé or a future after avant que, jusqu’à ce que or en attendant que (avant qu’il est arrivé).', criterion: 'correction', feedback: 'Avant que, jusqu’à ce que, en attendant que : le fait n’a pas encore eu lieu, donc le subjonctif, avant qu’il arrive.', ref: 'a3-piege' },
    { pattern: 'Après que followed by a subjunctive (après qu’il soit parti).', criterion: 'correction', feedback: 'À l’écrit, après que prend l’indicatif : après qu’il est parti. Ou plus court : après son départ.', ref: 'a10-piege' },
    { pattern: 'The present used for a future event after quand, lorsque, dès que or pendant que (quand il arrive demain), or a future after si.', criterion: 'correction', feedback: 'L’avenir se dit au futur après le mot de temps : quand il arrivera. Seul si garde le présent.', ref: 'a9-piege' },
    { pattern: 'A compound tense after dès que or une fois que that does not match the other verb (dès que nous avons dîné, il sortait).', criterion: 'correction', feedback: 'Le temps composé suit l’autre verbe : dès que nous avions dîné, il sortait.', ref: 'a11-erreurs' },
    { pattern: 'The expletive ne used with pas where nothing is negated (avant qu’il ne parte pas).', criterion: 'correction', feedback: 'Le ne explétif ne nie rien ; avec pas, la phrase dit le contraire. Enlève pas.', ref: 'a5-piege' },
    { pattern: 'Avant que or en attendant que with the same subject in both clauses (avant que je parte, je…).', criterion: 'registre', feedback: 'Avec une seule personne, l’écrit soigné préfère l’infinitif : avant de partir, en attendant de savoir.', ref: 'a3-construire' },
    { pattern: 'An infinitive whose implied subject differs from the main subject (après avoir voté, la séance a été levée).', criterion: 'correction', feedback: 'L’infinitif prend le sujet de la phrase : après avoir voté, le conseil a levé la séance.', ref: 'a10-construire' },
    { pattern: 'Pendant que used for an instant or au moment où for a long stretch, or the ongoing background put in the passé composé.', criterion: 'coherence', feedback: 'Pendant que pour ce qui dure, au moment où pour un instant ; l’imparfait pour ce qui était en cours.', ref: 'a6-construire' },
    { pattern: 'Events listed without time words, or only with puis, ensuite and après, so the order is unclear.', criterion: 'coherence', feedback: 'Place chaque fait par rapport à un autre : avant que, pendant que, dès que, jusqu’à ce que.', ref: 'a12-plan' },
    { pattern: 'Fewer than four different time words, or one of the three forms (subjunctive, indicative, infinitive) missing.', criterion: 'etendue', feedback: 'Varie les formes : un subjonctif, un indicatif, un infinitif, et au moins quatre mots de temps différents.', ref: 'a2-table' },
    { pattern: 'No subject line or opening, no ending (what was done, what comes next), or a body outside 200 to 250 words.', criterion: 'tache', feedback: 'Annonce l’incident au début, et termine par ce qui a été fait et la suite, au futur.', ref: 'a12-lecture' },
    { pattern: 'A conversational register (du coup, genre, trop bizarre) or feelings that break the chronology.', criterion: 'registre', feedback: 'Un compte rendu reste neutre et daté : les faits d’abord, les impressions à la fin, s’il en faut.', ref: 'a12-lecture' },
  ],
  graderNotes: [
    'Count the words of the body only: the subject line (Objet), the greeting and the sign-off do not count. 200 to 250 with 10% tolerance (180 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'SPOKEN-VARIANT DECISION (gate B2-2, Paul 2026-09-29): the written norm is what is taught and tested. « Après que + subjonctif » (après qu’il soit parti) and « sans que … ne » are spoken or contested forms: name them in the feedback and remove at most ONE « correction » point in total for them, however often they occur. « Avant que + indicatif » and « jusqu’à ce que + indicatif » are NOT variants: they are errors and are marked as such.',
    'THE EXPLETIVE NE IS OPTIONAL: accept avant que, à moins que, de peur que, craindre que and a comparative with or without it. Never mark its absence and never mark its presence; mark it only when pas is added where nothing is negated.',
    'Accept both tenses where both are correct: dès que + futur simple or futur antérieur for the future (dès que j’arriverai, dès que je serai arrivé); tant que + présent for a situation already under way (tant qu’il fait chaud, arrose); jusqu’à ce que + subjonctif présent or passé; quand + présent for a habit.',
    'Avant que with the same subject in both clauses (avant que je parte, je…) is to avoid in careful writing: name it and suggest avant de, but do not deduct a point for it (open question 2 in the lesson header).',
    'Accept the passé composé after après que with a passé composé main verb (après qu’il est parti, nous avons fermé), as lessons 31 in B1 and 6 in B2 teach; do not require the passé antérieur or the passé surcomposé. A correct passé antérieur with a passé simple is accepted but never expected.',
    'Alors que and tandis que may mark time or opposition; accept either reading where the context allows it, and check only the tense (the imparfait for an action in progress in the time sense).',
    'Writer and reader gender are unknown: judge agreement for internal consistency only.',
    'Accept regional vocabulary and settings (Québec, Belgium, Switzerland, West Africa): courriel and mail, septante, stationnement and parking, dîner for the midday meal.',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 6 du B2 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['rapport', 'ligne'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Dis tes faits dans l’ordre, à voix haute',
  frSub: 'Avant, pendant, après',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ligne', 'rapport'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-ligne',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'pas encore', v: 'avant que, jusqu’à ce que : subjonctif', say: fr(E(2417)),
      detail: { title: 'Pas encore', body: "Avant que, jusqu'à ce que, en attendant que, d'ici à ce que : le fait n'a pas encore eu lieu. Le ne explétif peut s'y glisser. EN: not yet: subjunctive.", say: fr(E(2450)) } },
    { k: 'un seul sujet', v: 'avant de, après avoir : infinitif', say: fr(E(2440)),
      detail: { title: 'Un seul sujet', body: "Avant de partir, en attendant de savoir, après avoir fini : une personne, un infinitif. EN: one subject: infinitive.", say: fr(E(2557)) } },
    { k: 'en même temps', v: 'quand, lorsque, pendant que, au moment où', say: fr(E(2487)),
      detail: { title: 'En même temps', body: "Pendant que pour une durée, au moment où pour un instant, lorsque pour l'écrit : l'indicatif. EN: same time: indicative.", say: fr(E(2486)) } },
    { k: 'la durée', v: 'à mesure que, chaque fois que, tant que, depuis que', say: fr(E(2504)),
      detail: { title: 'La durée', body: "Progression, répétition, durée, point de départ : l'indicatif. Alors que et tandis que disent aussi le temps. EN: all indicative.", say: fr(E(2509)) } },
    { k: 'déjà fait', v: 'après que, dès que : indicatif', say: fr(E(2556)),
      detail: { title: 'Déjà fait', body: "Après que + indicatif ; dès que + le temps composé qui va avec l'autre verbe. EN: already done: indicative.", say: fr(E(2573)) } },
    { k: "l'avenir", v: 'quand tu arriveras : futur', say: fr(E(2538)),
      detail: { title: "L'avenir", body: "Le futur après chaque mot de temps, le présent après si, le conditionnel vu du passé. EN: the future after time words.", say: fr(E(2549)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ligne', 'futur'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu places chaque fait sur la ligne, vu du fait principal, et le mode suit : le subjonctif pour ce qui n'a pas encore eu lieu (avant que, jusqu'à ce que, en attendant que, d'ici à ce que), l'indicatif pour ce qui a lieu ou a déjà eu lieu (quand, lorsque, pendant que, au moment où, à mesure que, tant que, depuis que, après que, dès que), l'infinitif pour un seul sujet. Tu mets le futur après les mots de temps pour l'avenir, tu accordes le temps composé après dès que, et tu lis le ne explétif sans le prendre pour une négation. Le piège qui reste, c'est l'oreille : après qu'il soit parti et quand tu arrives demain s'entendent partout. Avant l'examen, relis ton compte rendu et, pour chaque mot de temps, demande-toi si ce fait avait déjà eu lieu au moment du fait principal. EN: For every time word in your report, ask whether that event had already happened at the moment of the main one.",
  stats: [
    { k: 'Pas encore', v: 'avant que, jusqu’à ce que' },
    { k: 'En même temps', v: 'pendant que, au moment où' },
    { k: 'Déjà fait', v: 'après que, dès que' },
    { k: 'Le ne explétif', v: 'il ne nie rien' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 2 to 11, a round that
 *  recycles lessons 7, 16 and 31 in B1 and 6, 7, 8, 12 and 16 in B2 (named
 *  in each question), and an exam-format round (DELF B2, TCF). `fold()`
 *  strips accents, commas, apostrophes, hyphens and spaces, never letters:
 *  so the expletive ne is two more letters, and every typed answer after
 *  avant que lists the sentence WITH and WITHOUT it (corpus §A.8). Every
 *  typed answer turns on a mood, a tense or a word choice, and every equally
 *  correct answer is listed in `accept`. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.';
const ES_SOIGNE = "À l'écrit soigné, une forme ne va pas. Écris la phrase correcte. EN: In careful writing, one form is wrong; write the sentence correctly.";
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_Q): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const MODE_Q = 'Mets le verbe entre parenthèses à la forme qui convient, et écris la phrase.';

const EXTRAIT_DELF = "Au moment où l'alarme a retenti, j'étais à l'accueil. Pendant que les maîtres-nageurs faisaient sortir le public, j'ai appelé les pompiers. Et dès que le bâtiment a été vide, nous avons compté tout le monde : personne ne manquait.";

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a12-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r2-ligne', label: 'La ligne du temps', targets: ['mode-inverse'],
      questions: [
        mc('Après jusqu’à ce que, quelle forme ?', ['le subjonctif', 'l’indicatif', 'l’infinitif'], 0, 'Une limite attendue, pas encore là : subjonctif. EN: the subjunctive.', 'a2-table'),
        mc('Après pendant que, quelle forme ?', ['l’indicatif', 'le subjonctif', 'l’infinitif'], 0, 'Un fait en même temps, donc réel : indicatif. EN: the indicative.', 'a2-table'),
        mc('« Appelle-moi avant … dans le train. » À l’écrit soigné, avec une seule personne :', ['de monter', 'que tu montes'], 0, 'Un seul sujet : avant de + infinitif. EN: avant de.', 'a2-trier'),
        tI(MODE_Q, 'Appelle-moi avant que le train (partir).', fr(E(2417)), 'Pas encore parti : subjonctif, parte. EN: parte.', 'a2-table',
          ['Appelle-moi avant que le train ne parte.']),
        tI('Mets le verbe au passé composé, et écris la phrase.', "Après que le train (partir), le quai s'est vidé.", fr(E(2424)), 'Déjà fait : indicatif, est parti. EN: est parti.', 'a2-table'),
        tI('Mets le verbe au futur, et écris la phrase.', 'Appelle-moi quand tu (être) dans le train.', fr(E(2420)), 'L’avenir : le futur après quand. EN: seras.', 'a2-erreurs'),
        eS('Appelle-moi avant que le train part.', fr(E(2417)), 'Avant que : subjonctif, parte. EN: parte.', 'a2-erreurs',
          ['Appelle-moi avant que le train ne parte.', 'Appelle-moi avant le départ du train.']),
        lC('Écoute. Au moment de l’appel, le train est-il déjà parti ?', fr(E(2419)), ['oui, juste avant', 'non, pas encore', 'on ne peut pas le savoir'], 0, 'Dès que + futur antérieur : le départ est fait. EN: yes.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-avant', label: 'Avant que, avant de', targets: ['avant-que-indicatif'],
      questions: [
        mc('« Vérifie la dose avant que le patient … »', ['reparte', 'repart', 'repartira'], 0, 'Pas encore reparti : subjonctif. EN: reparte.', 'a3-cartes'),
        mc('« Il est parti avant que je … le remercier. »', ['puisse', 'ai pu', 'pouvais'], 0, 'Le merci n’a pas eu lieu : subjonctif, même au passé. EN: puisse.', 'a3-cartes'),
        mc('À l’écrit soigné, une seule personne : quelle phrase ?', ['Je relis toujours avant de signer.', 'Je relis toujours avant que je signe.'], 0, 'Un seul sujet : avant de + infinitif. EN: avant de.', 'a3-construire'),
        tI(MODE_Q, 'Range les flacons avant que les clients (arriver).', fr(E(2434)), 'Avant que : subjonctif, arrivent. EN: arrivent.', 'a3-piege',
          ["Range les flacons avant que les clients n'arrivent."]),
        tI('Mets le verbe au subjonctif passé, et écris la phrase.', "Ne donne rien avant que la pharmacienne (relire) l'ordonnance.", fr(E(2435)), 'Relue d’abord : subjonctif passé, ait relu. EN: ait relu.', 'a3-cartes',
          ["Ne donne rien avant que la pharmacienne n'ait relu l'ordonnance."]),
        eS('Préviens le médecin avant qu’il est trop tard.', fr(E(2437)), 'Avant que : subjonctif, soit. EN: soit.', 'a3-piege',
          ["Préviens le médecin avant qu'il ne soit trop tard."]),
        eS('Le médecin a rappelé avant que nous avons fermé.', fr(E(2447)), 'Avant que : subjonctif, même au passé. EN: ayons fermé.', 'a3-construire',
          ["Le médecin a rappelé avant que nous n'ayons fermé.", 'Le médecin a rappelé avant que nous fermions.', 'Le médecin a rappelé avant que nous ne fermions.', 'Le médecin a rappelé avant la fermeture.']),
        lC('Écoute. Faut-il relire le contrat avant de signer ?', fr('fr.b2.emotions.1320'), ['oui, la relecture d’abord', 'non, on relira après'], 0, 'Avant qu’on ait relu : la relecture finie d’abord. EN: yes.', 'a3-exemples'),
      ],
    },
    {
      id: 'r4-limite', label: 'Jusqu’à ce que', targets: ['limite-bancale'],
      questions: [
        mc('« Nous resterons ici jusqu’à ce que le train … »', ['reparte', 'repart', 'repartira'], 0, 'Une limite attendue : subjonctif. EN: reparte.', 'a4-cartes'),
        mc('« Nous avons attendu jusqu’au moment où le train … arrivé. »', ['est', 'soit'], 0, 'Un fait daté : indicatif. EN: est.', 'a4-cartes'),
        mc('« Reste dans la salle tant que le train n’est pas annoncé. » Même sens :', ['jusqu’à ce que le train soit annoncé', 'aussi longtemps que le train est annoncé'], 0, 'Tant que + négation : jusqu’à ce que. EN: until.', 'a4-cartes'),
        tI(MODE_Q, "Garde ton billet jusqu'à ce que tu (être) remboursé.", fr(E(2461)), 'Jusqu’à ce que : subjonctif, sois. EN: sois.', 'a4-construire',
          ["Garde ton billet jusqu'à ce que tu sois remboursée."]),
        tI(MODE_Q, 'En attendant que les travaux (être) finis, la compagnie propose des bus.', fr(E(2462)), 'En attendant que : subjonctif, soient. EN: soient.', 'a4-construire'),
        eS("Le contrôleur a répété l'annonce jusqu'à ce que tout le monde est descendu.", fr(E(2455)), 'Jusqu’à ce que : subjonctif, descende. EN: descende.', 'a4-erreurs',
          ["Le contrôleur a répété l'annonce jusqu'au moment où tout le monde est descendu.", "Le contrôleur a répété l'annonce jusqu'à ce que tout le monde soit descendu."]),
        eS("Reste dans la salle d'attente tant que le train est annoncé.", fr(E(2458)), 'Pour dire until : tant que + ne… pas. EN: n’est pas annoncé.', 'a4-erreurs',
          ["Reste dans la salle d'attente jusqu'à ce que le train soit annoncé."]),
        lC('Écoute. Le train est-il finalement arrivé ?', fr(E(2456)), ['oui', 'non', 'on ne le sait pas encore'], 0, 'Jusqu’au moment où + indicatif : un fait qui a eu lieu. EN: yes.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-expletif', label: 'Le ne explétif', targets: ['ne-mal-lu'],
      questions: [
        mc('« Signons avant que le notaire ne parte. » Le notaire…', ['va partir', 'ne partira pas', 'est déjà parti'], 0, 'Le ne explétif ne nie rien. EN: he is going to leave.', 'a5-cartes'),
        mc('« Je crains que les témoins ne viennent pas. » J’ai peur…', ['qu’ils manquent', 'qu’ils viennent'], 0, 'Avec pas, une vraie négation. EN: that they will not come.', 'a5-cartes'),
        mc('Après quel mot le ne explétif n’a-t-il pas sa place à l’écrit soigné ?', ['sans que', 'avant que', 'craindre que'], 0, 'Sans que dit déjà sans. EN: sans que.', 'a5-cartes'),
        mc('Le ne explétif est…', ['facultatif : le sens ne change pas', 'obligatoire après avant que', 'une négation plus polie'], 0, 'Facultatif et soutenu. EN: optional.', 'a5-construire'),
        tI('Mets le verbe au subjonctif en gardant le ne explétif, et écris la phrase.', "Réglons ce point avant qu'il ne (être) trop tard.", fr(E(2480)), 'Avant que + subjonctif : ne soit. EN: ne soit.', 'a5-piege'),
        tI('Réécris la phrase sans le ne explétif.', 'Signons avant que le notaire ne parte.', fr(E(2469)), 'Sans le ne, le sens ne change pas. EN: same meaning.', 'a5-construire'),
        eS("Elle est entrée sans qu'on ne l'entende.", fr(E(2479)), 'À l’écrit soigné, pas de ne après sans que. EN: no ne.', 'a5-piege', [], ES_SOIGNE),
        lC('Écoute. Le trajet a-t-il été plus court que prévu ?', fr(E(2473)), ['non, plus long', 'oui, plus court'], 0, 'Plus long que je ne le pensais : le ne ne nie rien. EN: no, longer.', 'a5-construire'),
      ],
    },
    {
      id: 'r6-simultane', label: 'En même temps', targets: ['moment-flou'],
      questions: [
        mc('« … le feu est passé au vert, une voiture a démarré. »', ['Au moment où', 'Pendant que'], 0, 'Un instant : au moment où. EN: au moment où.', 'a6-cartes'),
        mc('« Comme je sortais, j’ai entendu un choc. » Ce comme veut dire…', ['juste au moment où', 'puisque', 'de la même façon que'], 0, 'Comme + imparfait en tête : un moment. EN: just as.', 'a6-cartes'),
        mc('Lorsque, c’est…', ['quand, en plus soigné', 'un mot suivi du subjonctif', 'pendant que, en plus court'], 0, 'Le quand de l’écrit, à l’indicatif. EN: the written quand.', 'a6-cartes'),
        tI('Mets le verbe à l’imparfait, et écris la phrase.', "Au moment où le camion (reculer), l'enfant a traversé.", fr(E(2498)), 'Une action en cours : reculait. EN: reculait.', 'a6-construire'),
        tI('Mets le verbe au temps de la situation, et écris la phrase.', "Lorsque le cycliste est tombé, j'(être) au coin de la rue.", fr(E(2497)), 'La situation autour de l’instant : imparfait, étais. EN: étais.', 'a6-construire'),
        eS('Pendant que le feu est passé au vert, une voiture a démarré.', fr(E(2486)), 'Un instant : au moment où. EN: au moment où.', 'a6-erreurs',
          ['Quand le feu est passé au vert, une voiture a démarré.', 'Lorsque le feu est passé au vert, une voiture a démarré.', 'Dès que le feu est passé au vert, une voiture a démarré.']),
        eS('Comme je suis sortie de la boulangerie, j’ai entendu un choc.', fr(E(2489)), 'Le comme de temps veut l’imparfait : je sortais. EN: je sortais.', 'a6-erreurs',
          ["Au moment où je sortais de la boulangerie, j'ai entendu un choc.", "Alors que je sortais de la boulangerie, j'ai entendu un choc.", "Pendant que je sortais de la boulangerie, j'ai entendu un choc.", "Quand je sortais de la boulangerie, j'ai entendu un choc.", "Comme je sortais de la boulangerie, j'ai entendu un bruit de choc."]),
        lC('Écoute. Que faisait le cycliste quand la voiture a tourné ?', fr(E(2487)), ['il traversait', 'il attendait au feu', 'il était déjà par terre'], 0, 'Pendant que + imparfait : une action en cours. EN: he was crossing.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-duree', label: 'À mesure que, depuis que', targets: ['duree-confondue'],
      questions: [
        mc('« … les clients arrivaient, nous augmentions la production. »', ['À mesure que', 'Depuis que', 'Jusqu’à ce que'], 0, 'Deux progressions ensemble. EN: à mesure que.', 'a7-table'),
        mc('« … j’ai ouvert la boulangerie, je me lève à quatre heures. »', ['Depuis que', 'Tant que', 'Avant que'], 0, 'Un point de départ, et la situation dure. EN: depuis que.', 'a7-construire'),
        mc('Toutes les fois que, c’est…', ['chaque fois que, en plus soutenu', 'jusqu’à ce que, au pluriel', 'tant que, au passé'], 0, 'Même sens, registre plus soigné. EN: every time, formal.', 'a7-table'),
        tI(MODE_Q, 'Chaque fois que le four (être) en panne, nous perdons une matinée.', fr(E(2515)), 'Une répétition réelle : indicatif, est. EN: est.', 'a7-construire'),
        tI('Mets le verbe au futur, et écris la phrase.', 'Tant que tu ne (être) pas prêt, nous ne partirons pas.', fr(E(2516)), 'Tant que + ne… pas, et l’avenir : seras. EN: seras.', 'a7-piege',
          ['Tant que tu ne seras pas prête, nous ne partirons pas.']),
        eS("Depuis que j'aie ouvert la boulangerie, je me lève à quatre heures.", fr(E(2509)), 'Un fait réel : indicatif, ai ouvert. EN: ai ouvert.', 'a7-piege'),
        eS('Maintenant que la boutique soit connue, les gâteaux se réservent la veille.', fr(E(2519)), 'Maintenant que : un fait réel, est. EN: est.', 'a7-piege',
          ['Depuis que la boutique est connue, les gâteaux se réservent la veille.']),
        lC('Écoute. Que dit cette phrase ?', fr(E(2506)), ['une répétition', 'une progression', 'un point de départ'], 0, 'Chaque fois que : un fait qui revient. EN: a repetition.', 'a7-table'),
      ],
    },
    {
      id: 'r8-alors', label: 'Alors que : le temps ou non', targets: ['alors-que-sens'],
      questions: [
        mc('« Alors qu’il traversait la place, il a reçu un appel. » Alors que marque…', ['le temps', 'l’opposition'], 0, 'On peut dire pendant que. EN: time.', 'a8-cartes'),
        mc('« Ma sœur travaille de nuit, tandis que moi, je travaille de jour. » Tandis que marque…', ['l’opposition', 'le temps'], 0, 'On peut dire en revanche. EN: contrast.', 'a8-trier'),
        mc('« Il a quitté la réunion alors qu’elle n’était pas finie. » Ici, alors que…', ['dit une attente déçue : une concession', 'dit seulement le moment du départ'], 0, 'La réunion aurait dû le retenir. EN: a concession.', 'a8-cartes'),
        tI('Mets le verbe à l’imparfait, et écris la phrase.', "Alors que tout le monde (dormir), l'alarme s'est déclenchée.", fr(E(2534)), 'Au sens du temps : une action en cours. EN: dormait.', 'a8-trier'),
        tI('Mets le verbe au plus-que-parfait, et écris la phrase.', 'Le premier étage était inondé, tandis que le deuxième (rester) sec.', fr(E(2526)), 'Tandis que : l’indicatif. EN: était resté.', 'a8-erreurs'),
        eS('Mon colocataire adore le bruit, pendant que moi, j’ai besoin de calme.', fr(E(2524)), 'Deux goûts opposés : alors que ou tandis que. EN: alors que.', 'a8-erreurs',
          ["Mon colocataire adore le bruit, tandis que moi, j'ai besoin de calme."]),
        eS('Alors qu’il a traversé la place, il a reçu un appel de sa sœur.', fr(E(2522)), 'Au sens du temps : l’imparfait, traversait. EN: traversait.', 'a8-erreurs',
          ["Pendant qu'il traversait la place, il a reçu un appel de sa sœur.", "Tandis qu'il traversait la place, il a reçu un appel de sa sœur.", "Au moment où il traversait la place, il a reçu un appel de sa sœur.", "Comme il traversait la place, il a reçu un appel de sa sœur."]),
        lC('Écoute. Le temps ou l’opposition ?', fr(E(2530)), ['l’opposition : deux souhaits', 'le temps : deux actions en même temps'], 0, 'Étudiants et retraités veulent des choses différentes. EN: contrast.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-futur', label: 'Quand tu arriveras', targets: ['present-anglais'],
      questions: [
        mc('À l’écrit, « When you arrive, call me » :', ['Quand tu arriveras, appelle-moi.', 'Quand tu arrivais, appelle-moi.', 'Quand tu arriverais, appelle-moi.'], 0, 'L’avenir : le futur après quand. EN: arriveras.', 'a9-cartes'),
        mc('« Si tu … un problème, appelle ma voisine. »', ['as', 'auras', 'aurais'], 0, 'Si garde le présent. EN: as.', 'a9-cartes'),
        mc('« Julien a promis qu’il appellerait quand il … à Lisbonne. »', ['arriverait', 'arrivera', 'arrive'], 0, 'Le futur vu du passé : conditionnel. EN: arriverait.', 'a9-cartes'),
        tI('Mets le verbe au futur, et écris la phrase.', "Quand tu (voir) Marc, dis-lui que j'ai laissé ses clés.", fr(E(2547)), 'L’avenir : verras. EN: verras.', 'a9-piege'),
        tI('Mets le verbe au futur, et écris la phrase.', 'Pendant que je (être) à Lisbonne, tu pourras utiliser mon vélo.', fr(E(2539)), 'Le séjour est à venir : serai. EN: serai.', 'a9-piege'),
        eS('Si tu auras un problème, appelle ma voisine.', fr(E(2549)), 'Jamais de futur après si. EN: as.', 'a9-piege'),
        eS("Elle m'avait dit qu'elle passerait dès qu'elle aura fini.", fr(E(2551)), 'Vu du passé : conditionnel passé, aurait fini. EN: aurait fini.', 'a9-piege',
          ["Elle m'avait dit qu'elle passerait dès qu'elle finirait."]),
        lC('Écoute. Cette phrase parle…', fr(E(2553)), ['d’une habitude', 'd’un projet pour demain'], 0, 'Quand + présent : une habitude. EN: a habit.', 'a9-construire'),
      ],
    },
    {
      id: 'r10-apres', label: 'Après que', targets: ['apres-que-subjonctif'],
      questions: [
        mc('À l’écrit : « Après qu’il … élu, le secrétaire a pris la parole. »', ['a été', 'ait été', 'soit'], 0, 'Un fait accompli : indicatif. EN: a été.', 'a10-table'),
        mc('« Après avoir voté, … »', ['le conseil a levé la séance', 'la séance a été levée'], 0, 'L’infinitif prend le sujet de la phrase. EN: the council.', 'a10-construire'),
        mc('« Après qu’on … la date, nous préviendrons les membres. »', ['aura fixé', 'fixera', 'ait fixé'], 0, 'La date fixée d’abord, dans l’avenir : futur antérieur. EN: aura fixé.', 'a10-table'),
        tI('Réécris en une phrase avec après + infinitif passé.', 'Le trésorier a présenté les comptes, puis il a répondu aux questions.', fr(E(2557)), 'Un seul sujet : après avoir présenté. EN: après avoir.', 'a10-construire',
          ['Après avoir présenté les comptes, il a répondu aux questions.', 'Le trésorier a répondu aux questions après avoir présenté les comptes.']),
        tI('Réécris avec après + nom.', "Après qu'on a voté, la séance a été levée.", fr(E(2558)), 'Voter devient le vote. EN: après le vote.', 'a10-table',
          ['La séance a été levée après le vote.']),
        eS('Après que le trésorier soit parti, nous avons abordé le budget.', fr(E(2564)), 'À l’écrit, après que + indicatif : est parti. EN: est parti.', 'a10-piege',
          ['Après le départ du trésorier, nous avons abordé le budget.'], ES_SOIGNE),
        eS('Après être arrivé en retard, la vice-présidente s’est excusée.', fr(E(2562)), 'Avec être, l’accord : arrivée. EN: arrivée.', 'a10-piege'),
        lC('Écoute. Les membres sont-ils déjà prévenus ?', fr(E(2567)), ['non, pas encore', 'oui', 'ils ne le seront pas'], 0, 'Après qu’on aura fixé : c’est pour plus tard. EN: not yet.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-anteriorite', label: 'Dès que, une fois que', targets: ['temps-compose-manque'],
      questions: [
        mc('« Dès que j’… fini ce livre, je te le prêterai. »', ['aurai', 'ai', 'avais'], 0, 'Futur ensuite : futur antérieur. EN: aurai.', 'a11-cartes'),
        mc('« Dès que nous … dîné, mon père sortait les cartes. »', ['avions', 'avons', 'aurons'], 0, 'Imparfait ensuite : plus-que-parfait. EN: avions.', 'a11-cartes'),
        mc('« Dès qu’il eut fini son repas, il sortit. » Aujourd’hui, on écrit :', ['Dès qu’il a fini son repas, il est sorti.', 'Dès qu’il a fini son repas, il sortit.', 'Dès qu’il eut fini son repas, il est sorti.'], 0, 'Le passé antérieur va avec le passé simple ; aujourd’hui, le passé composé. EN: dès qu’il a fini.', 'a11-erreurs'),
        tI('Mets le verbe au plus-que-parfait, et écris la phrase.', 'Aussitôt que la cloche (sonner), nous courions vers la sortie.', fr(E(2576)), 'Une habitude passée, la cloche d’abord : avait sonné. EN: avait sonné.', 'a11-construire'),
        tI('Mets le verbe au futur antérieur, et écris la phrase.', 'Aussitôt que tu (recevoir) le paquet, préviens ta grand-mère.', fr(E(2583)), 'L’avenir, le paquet d’abord : auras reçu. EN: auras reçu.', 'a11-cartes'),
        eS('Une fois que le repas terminé, nous faisions la sieste.', fr(E(2579)), 'Sans verbe conjugué, pas de que. EN: une fois le repas terminé.', 'a11-erreurs',
          ['Une fois que le repas était terminé, nous faisions la sieste.', 'Une fois que le repas avait été terminé, nous faisions la sieste.']),
        eS('Dès que nous avons dîné, mon père sortait les cartes.', fr(E(2582)), 'Imparfait ensuite : avions dîné. EN: avions dîné.', 'a11-erreurs',
          ['Dès que nous avons dîné, mon père sort les cartes.']),
        lC('Écoute. Cette habitude est-elle actuelle ?', fr(E(2573)), ['non, c’est un souvenir', 'oui, elle dure encore'], 0, 'Plus-que-parfait et imparfait : autrefois. EN: no.', 'a11-ecoute'),
      ],
    },
    {
      id: 'r12-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(SUBORD_REF)} : « Après qu’il … parti, nous avons fermé le bureau. »`, ['est', 'soit'], 0, `« ${B131_REFRAME} » EN: ${B131_REFRAME_EN}`, 'a2-rappel'),
        mc(`${Cap(FUTUR_USAGE_REF)} : « Dès que tu … prêt, on partira. »`, ['seras', 'es'], 0, `« ${B107_REFRAME} » EN: ${B107_REFRAME_EN}`, 'a2-rappel'),
        mc(`${Cap(SUBJ_INF_REF)} : à l’écrit soigné, « Je relis toujours … »`, ['avant de signer', 'avant que je signe'], 0, `« ${B116_REFRAME} » EN: ${B116_REFRAME_EN}`, 'a3-cartes'),
        tI(`${Cap(MODES_REF)} : mets le verbe au mode qui convient, et écris la phrase.`, 'Avant que le conseil (prendre) sa décision, les habitants ont manifesté.', fr(OA(1938)), `« ${B206_REFRAME} » EN: ${B206_REFRAME_EN}`, 'a2-rappel',
          ['Avant que le conseil ne prenne sa décision, les habitants ont manifesté.']),
        tI(`${Cap(FUT_ANT_REF)} : mets le verbe au futur antérieur, et écris la phrase.`, "Dès que nous (vendre) l'appartement, nous déménagerons.", fr(PF2(1889)), `« ${B207_REFRAME} » EN: ${B207_REFRAME_EN}`, 'a11-cartes'),
        mc(`${Cap(PS_REF)} : « Quand il eut fini, il se leva. » Eut fini est…`, ['un passé antérieur', 'un plus-que-parfait', 'un passé simple'], 0, `« ${B208_REFRAME} » EN: ${B208_REFRAME_EN}`, 'a11-cartes'),
        mc(`${Cap(GERONDIF_REF)} : « Le prof parle ; les étudiants prennent des notes. » En une phrase :`, ['Pendant que le prof parle, les étudiants prennent des notes.', 'En parlant, les étudiants prennent des notes.'], 0, `« ${B212_REFRAME} » EN: ${B212_REFRAME_EN}`, 'a6-cartes'),
        lC(`Écoute. ${Cap(CONCESSION_REF)} : alors que marque ici…`, fr('fr.b2.connecteurs-logiques.2171'), ['l’opposition : deux villes comparées', 'le temps : deux actions en même temps'], 0, `« ${B216_REFRAME} » EN: ${B216_REFRAME_EN}`, 'a8-cartes'),
      ],
    },
    {
      id: 'r13-examen', label: 'Comme à l’examen', targets: ['rapport-desordonne'],
      questions: [
        mc('Format DELF B2, production écrite. Pour ouvrir un compte rendu, quelle phrase convient ?', ['Voici, dans l’ordre, le déroulement des faits.', 'Bon, alors, en gros, il s’est passé un truc.', 'Je vais vous dire ce que je pense de cette histoire.'], 0, 'Un compte rendu annonce la chronologie, dans un registre neutre. EN: announce the order.', 'a12-plan'),
        mc('Format TCF. Choisissez la bonne réponse : « Nous sommes restés sur le parking … les pompiers aient autorisé le retour. »', ['jusqu’à ce que', 'pendant que', 'depuis que', 'dès que'], 0, 'Une limite attendue, suivie d’un subjonctif passé. EN: jusqu’à ce que.', 'a12-lecture'),
        mc('Format TCF : « En attendant que le système … vérifié, les cours du soir sont suspendus. »', ['soit', 'est', 'sera', 'a été'], 0, 'En attendant que + subjonctif. EN: soit.', 'a4-cartes'),
        mc('Format DELF B2, compréhension écrite. « Au moment où l’alarme a retenti, une cinquantaine de nageurs se trouvaient dans le bassin. » Le texte dit que…', ['les nageurs étaient déjà dans l’eau quand l’alarme a sonné', 'les nageurs sont entrés dans l’eau après l’alarme', 'personne ne nageait à ce moment-là'], 0, 'Au moment où + imparfait : ce qui était en cours à l’instant de l’alarme. EN: they were already swimming.', 'a12-lecture'),
        tI('Format DELF B2, production. Réécris en une phrase avec dès que.', 'Le bâtiment a été vide. Aussitôt, nous avons compté les personnes présentes.', fr(E(2594)), 'Dès que : le fait fini juste avant. EN: dès que.', 'a12-lecture',
          ['Nous avons compté les personnes présentes dès que le bâtiment a été vide.', 'Dès que le bâtiment a été vidé, nous avons compté les personnes présentes.', 'Nous avons compté les personnes présentes dès que le bâtiment a été vidé.']),
        tI('Format TCF, phrase à compléter. Mets le verbe au futur antérieur, et écris la phrase.', "Je vous tiendrai informés dès que le rapport de l'installateur me (parvenir).", fr(E(2598)), 'L’avenir, le rapport reçu d’abord : sera parvenu. EN: sera parvenu.', 'a12-lecture',
          ["Je vous tiendrai informées dès que le rapport de l'installateur me sera parvenu."]),
        eS('Après que les pompiers aient inspecté la chaufferie, ils ont conclu à une fausse alerte.', 'Après que les pompiers ont inspecté la chaufferie, ils ont conclu à une fausse alerte.', 'À l’écrit, après que + indicatif ; ou un seul sujet : après avoir inspecté. EN: ont inspecté.', 'a10-piege',
          ["Après avoir inspecté la chaufferie, les pompiers ont conclu à une fausse alerte.", "Après avoir inspecté la chaufferie, ils ont conclu à une fausse alerte.", "Après l'inspection de la chaufferie, les pompiers ont conclu à une fausse alerte."],
          "Format DELF B2, correction. À l'écrit soigné, une forme ne va pas : écris la phrase correcte. EN: In careful writing, one form is wrong; write the sentence correctly."),
        lC('Format DELF B2, compréhension orale. Écoute cet extrait. Qu’a fait le responsable pendant que le public sortait ?', EXTRAIT_DELF, ['il a appelé les pompiers', 'il a compté les nageurs', 'il est resté au bord du bassin'], 0, 'Pendant que les maîtres-nageurs faisaient sortir le public, il appelait les pompiers. EN: he called the fire brigade.', 'a12-lecture'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.16 does. */
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
    { front: 'before the train leaves', back: 'avant que le train parte (subjonctif)', say: fr(E(2417)) },
    { front: 'until I come back', back: 'jusqu’à ce que je revienne', say: fr('fr.b1.opinions-et-avis.1340') },
    { front: 'before it is too late (formal)', back: 'avant qu’il ne soit trop tard : le ne ne nie rien', say: fr(E(2480)) },
    { front: 'just as the light turned green', back: 'au moment où le feu est passé au vert', say: fr(E(2486)) },
    { front: 'as the customers came in', back: 'à mesure que les clients arrivaient', say: fr(E(2504)) },
    { front: 'as I was coming home (time)', back: 'alors que je rentrais', say: fr(E(2529)) },
    { front: 'when you arrive (later)', back: 'quand tu arriveras', say: fr(E(2538)) },
    { front: 'after he was elected', back: 'après qu’il a été élu (indicatif)', say: fr(E(2559)) },
    { front: 'as soon as I had finished (a past habit)', back: 'dès que j’avais fini', say: fr(E(2573)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Chaque fait à sa place',
  body: `${REFRAME} Tu as repris ${SUBORD_REF}, ${MODES_REF} et ${FUT_ANT_REF} pour en faire une ligne complète : avant, pendant, après, le ne explétif, le futur de l'avenir et le temps composé qui va avec l'autre verbe. La suite, c'est ${RESTRICTION_REF} : la restriction, avec ne… que, seulement, à moins que et sauf si. EN: Next comes restriction, with ne… que, seulement, à moins que and sauf si.`,
  points: [
    'Pas encore : avant que, jusqu’à ce que, le subjonctif.',
    'En même temps ou déjà fait : l’indicatif, et le futur pour l’avenir.',
    'Un seul sujet : avant de, après avoir.',
    'Le ne explétif ne nie rien.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ligne', 'expletif', 'anteriorite'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ton compte rendu',
    opener: {
      line: "Une alarme, une piscine à évacuer, un conseil à informer : ici tu écris un compte rendu qui met chaque fait à sa place, puis tu passes l'examen. EN: An alarm, a pool to evacuate, a board to inform: here you write a report that puts every event in its place, then sit the exam.",
      imageRef: 'lessons/subordonnees-temps/act12.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton compte rendu et passé l'examen : quatre-vingt-seize questions, douze manches. EN: You wrote your report and sat the exam: ninety-six questions, twelve rounds.",
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r5-expletif', 'a12-quiz/r9-futur', 'a12-review'],
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
  { id: 'd-ligne', title: 'Pas encore, ou déjà là', format: 'sort' as const, coach: "Deux piles : au moment du fait principal, l'autre fait n'a-t-il pas encore eu lieu, ou est-il déjà là ? EN: not yet, or already there?", buckets: ['pas encore : subjonctif', 'déjà là : indicatif'], items: [E(2417), E(2423), E(2426), E(2418), E(2419), E(2424)], audio: AUDIO },
  { id: 'd-avant', title: 'Avant que, toujours le subjonctif', format: 'mcq' as const, coach: "Avant que regarde ce qui n'a pas encore eu lieu : le subjonctif, et avant de pour un seul sujet. EN: avant que: subjunctive; one subject: avant de.", q: 'Vérifie la dose avant que le patient …', opts: ['reparte', 'repart'], correct: 0, why: 'Pas encore reparti : subjonctif. EN: reparte.', items: [E(2433), E(2434), E(2435), E(2437), E(2440), E(2444)], audio: AUDIO },
  { id: 'd-limite', title: 'La même limite, deux façons', format: 'flashcard' as const, coach: "Lis chaque phrase, puis dis-la autrement : jusqu'à ce que + subjonctif, ou tant que + ne… pas. EN: say each limit both ways.", items: [E(2450), E(2455), E(2458), E(2459), E(2461), E(2462)], audio: AUDIO },
  { id: 'd-expletif', title: 'Un ne qui ne nie rien', format: 'mcq' as const, coach: "Un ne sans pas, après avant que, craindre que ou un comparatif, ne nie rien. EN: a lone ne negates nothing.", q: '« Avant qu’il ne parte » : il part…', opts: ['bientôt', 'jamais'], correct: 0, why: 'Le ne explétif ne nie rien. EN: soon.', items: [E(2468), E(2470), E(2472), E(2473), E(2475), E(2479)], audio: AUDIO },
  { id: 'd-simultane', title: 'Une durée ou un instant', format: 'sort' as const, coach: "Deux piles : une action qui dure (pendant que), ou un instant précis (au moment où). EN: a stretch or an instant?", buckets: ['une durée', 'un instant'], items: [E(2487), E(2496), E(2403), E(2486), E(2495), E(2411)], audio: AUDIO },
  { id: 'd-duree', title: 'Progresser, répéter, durer, commencer', format: 'flashcard' as const, coach: "Lis chaque phrase et dis ce qu'elle fait : une progression, une répétition, une durée ou un début. EN: which one is it?", items: [E(2504), E(2506), E(2508), E(2509), E(2510), E(2514)], audio: AUDIO },
  { id: 'd-alors', title: 'Le temps ou l’opposition', format: 'sort' as const, coach: "Deux piles : pendant que convient (le temps), ou en revanche convient (l'opposition). EN: time or contrast?", buckets: ['le temps', 'l’opposition'], items: [E(2522), E(2529), E(2534), E(2524), E(2526), E(2535)], audio: AUDIO },
  { id: 'd-futur', title: 'L’avenir au futur', format: 'mcq' as const, coach: "Après quand, lorsque, pendant que, tant que ou dès que, l'avenir se dit au futur ; seul si garde le présent. EN: future after time words.", q: 'À l’écrit : quand tu …, la clé sera sous le pot de fleurs.', opts: ['arriveras', 'arrives'], correct: 0, why: 'L’avenir : le futur après quand. EN: arriveras.', items: [E(2538), E(2539), E(2540), E(2542), E(2547), E(2549)], audio: AUDIO },
  { id: 'd-apres', title: 'Une phrase, un nom ou un infinitif', format: 'sort' as const, coach: "Deux piles : après que + indicatif, ou le raccourci, après + infinitif passé ou nom. EN: clause or shortcut?", buckets: ['après que + indicatif', 'après + infinitif ou nom'], items: [E(2556), E(2559), E(2564), E(2557), E(2558), E(2565)], audio: AUDIO },
  { id: 'd-anteriorite', title: 'Le temps composé qui va avec', format: 'flashcard' as const, coach: "Lis chaque phrase, puis dis quel temps composé va avec l'autre verbe. EN: say which compound tense matches.", items: [E(2572), E(2573), E(2574), E(2576), E(2582), E(2583)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 et le B2 en renfort', format: 'flashcard' as const, coach: "Six phrases des leçons précédentes : dis le mot de temps et la forme qui le suit. EN: name the time word and its form.", items: [CL(1339), PF(433), OA(1938), FP(1242), PF2(1889), 'fr.b2.connecteurs-logiques.2171'], audio: AUDIO },
  { id: 'd-rapport', title: 'Les faits dans l’ordre', format: 'flashcard' as const, coach: "Lis chaque phrase du compte rendu, puis dis la tienne sur le même modèle, pour ton incident. EN: read each one, then make your own.", items: [E(2590), E(2591), E(2592), E(2593), E(2595), E(2598)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'mode-inverse', description: 'Picks the mood by English habit or by certainty instead of by the place of the event on the line: an indicative for what has not happened yet, a subjunctive for what has.', detectOn: ['a2-trier', 'a2-erreurs', 'a2-check', 'a12-mission'], drill: 'd-ligne', retest: 'd-ligne' },
  { id: 'avant-que-indicatif', description: 'Writes avant que with the indicative, the passé composé or a future, misses the subjonctif passé for an event done first, or keeps avant que with one subject.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-avant', retest: 'd-avant' },
  { id: 'limite-bancale', description: 'Puts the indicative after jusqu’à ce que or en attendant que, uses tant que without ne… pas to mean until, or confuses jusqu’à ce que with jusqu’au moment où.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a12-mission'], drill: 'd-limite', retest: 'd-limite' },
  { id: 'ne-mal-lu', description: 'Reads the expletive ne as a negation, adds pas where nothing is negated, or puts a ne after sans que in careful writing.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a12-mission'], drill: 'd-expletif', retest: 'd-expletif' },
  { id: 'moment-flou', description: 'Uses pendant que for an instant or au moment où for a stretch of time, reads temporal comme as a cause, or puts the ongoing background in the passé composé.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a12-mission'], drill: 'd-simultane', retest: 'd-simultane' },
  { id: 'duree-confondue', description: 'Confuses à mesure que with chaque fois que or depuis que with maintenant que, or puts a subjunctive after these indicative time words.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a12-mission'], drill: 'd-duree', retest: 'd-duree' },
  { id: 'alors-que-sens', description: 'Cannot tell the time sense of alors que and tandis que from their opposition sense, uses pendant que for a contrast, or a passé composé where an action in progress is meant.', detectOn: ['a8-trier', 'a8-erreurs', 'a8-check', 'a12-mission'], drill: 'd-alors', retest: 'd-alors' },
  { id: 'present-anglais', description: 'Uses the present after quand, lorsque, pendant que or tant que for a future event, a future after si, or keeps a future in a past report.', detectOn: ['a9-construire', 'a9-piege', 'a9-check', 'a12-mission'], drill: 'd-futur', retest: 'd-futur' },
  { id: 'apres-que-subjonctif', description: 'Writes après que with the subjunctive, lets an infinitive after après take a different subject, or forgets the agreement after être.', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-apres', retest: 'd-apres' },
  { id: 'temps-compose-manque', description: 'Uses a compound tense after dès que or une fois que that does not match the other verb, or mixes the passé antérieur with the passé composé.', detectOn: ['a11-construire', 'a11-erreurs', 'a11-check', 'a12-mission'], drill: 'd-anteriorite', retest: 'd-anteriorite' },
  { id: 'recyclage', description: 'Loses a contrast this lesson sits on: après que against avant que, quand + futur, one subject and the infinitive, the futur antérieur, the gérondif, or alors que of opposition.', detectOn: ['a2-rappel', 'a3-cartes', 'a11-cartes'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'rapport-desordonne', description: 'In an exam-format report, lists events without time words, or leaves the order, the outcome or the next steps unclear.', detectOn: ['a12-plan', 'a12-scenario', 'a12-mission'], drill: 'd-rapport', retest: 'd-rapport' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names a position. As b2.16 does. */
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
  sheet('sheet-ligne', 'La ligne du temps', ['les trois relations', 'la forme après chaque mot', 'ce qui se dit, ce qui s’écrit'], [
    teach('sheet-ligne-teach', 'Vu du fait principal',
      `${REFRAME} Place les deux faits sur la ligne et tiens-toi sur le fait principal. Pas encore là : subjonctif. En même temps ou déjà fait : indicatif, au futur pour l'avenir. Une seule personne : l'infinitif. EN: ${REFRAME_EN}`),
    table('sheet-ligne-table', 'Trois relations, deux modes', ['Relation', 'Mots', 'Forme', 'Exemple'], [
      ['le fait principal vient avant', "avant que, jusqu'à ce que, en attendant que, d'ici à ce que", 'subjonctif', 'Appelle-moi avant que le train parte.'],
      ['avant, un seul sujet', 'avant de, en attendant de', 'infinitif', 'Appelle-moi avant de monter dans le train.'],
      ['en même temps', 'quand, lorsque, pendant que, au moment où, comme, alors que, tandis que', 'indicatif', 'Appelle-moi pendant que le train roule.'],
      ['la durée', 'à mesure que, chaque fois que, tant que, depuis que, maintenant que', 'indicatif', 'Depuis que la ligne est fermée, je prends le bus.'],
      ['le fait principal vient après', 'après que, dès que, aussitôt que, une fois que', 'indicatif', "Après que le train est parti, le quai s'est vidé."],
      ['après, un seul sujet', 'après + infinitif passé', 'infinitif', 'Appelle-moi après être descendu du train.'],
      ["l'avenir", 'tous les mots de temps, sauf si', 'futur', 'Appelle-moi quand tu seras dans le train.'],
    ]),
    table('sheet-ligne-oral', 'Ce qui se dit, ce qui s’écrit', ['Forme', 'Statut', 'À écrire'], [
      ["après qu'il soit parti", "oral : répandu, critiqué à l'écrit", "après qu'il est parti, après son départ"],
      ["sans qu'on ne l'entende", "oral : répandu, évité à l'écrit soigné", "sans qu'on l'entende"],
      ['quand tu arrives (demain)', "oral : fréquent ; l'écrit met le futur", 'quand tu arriveras'],
      ['avant que je parte, je…', "à éviter à l'écrit soigné", 'avant de partir, je…'],
      ['avant que la fuite a commencé', "faute, à l'oral comme à l'écrit", 'avant que la fuite commence'],
      ["jusqu'à ce qu'il est revenu", 'faute', "jusqu'à ce qu'il revienne ; jusqu'au moment où il est revenu"],
    ]),
  ]),
  sheet('sheet-avant', 'Avant que, jusqu’à ce que, le ne explétif', ['avant que et avant de', 'la limite attendue', 'le ne explétif'], [
    teach('sheet-avant-teach', 'Pas encore là',
      "Avant que, jusqu'à ce que, en attendant que et d'ici à ce que regardent un fait qui n'a pas encore eu lieu au moment du fait principal : le subjonctif, présent, ou passé pour un fait fini avant. Avec une seule personne, l'infinitif : avant de, en attendant de. EN: not yet there: the subjunctive; one subject: the infinitive."),
    table('sheet-avant-table', 'Avant et la limite', ['Tournure', 'Forme', 'Exemple'], [
      ['avant que', 'subjonctif', 'Vérifie la dose avant que le patient reparte.'],
      ['avant que (fait fini avant)', 'subjonctif passé', "Ne donne rien avant que la pharmacienne ait relu l'ordonnance."],
      ["avant de, avant d'avoir", 'infinitif (un seul sujet)', 'Je relis toujours avant de signer.'],
      ['avant + nom', 'nom', 'Avant la fermeture, on compte la caisse.'],
      ["jusqu'à ce que", 'subjonctif, même au passé', "Le contrôleur a répété l'annonce jusqu'à ce que tout le monde descende."],
      ["jusqu'au moment où", 'indicatif (un fait daté)', "Nous avons attendu jusqu'au moment où le train est enfin arrivé."],
      ['en attendant que, en attendant de', 'subjonctif, ou infinitif', 'En attendant que le train reparte, allons prendre un café.'],
      ["d'ici à ce que (soutenu), d'ici que (courant)", 'subjonctif', "D'ici à ce que la ligne soit réparée, il faudra prendre le bus."],
      ['tant que… ne… pas', "indicatif (le sens de jusqu'à ce que)", "Reste ici tant que le train n'est pas annoncé."],
    ]),
    teach('sheet-avant-ne-teach', 'Le ne explétif', `${NE_EXPLETIF_RULE} Il se lit sans être une négation : avant qu'il ne parte, il va partir. Pour nier, il faut pas. EN: ${NE_EXPLETIF_RULE_EN}`),
    table('sheet-avant-ne', 'Le ne explétif', ['Où', 'Exemple', 'Remarque'], [
      ['avant que', 'Signons avant que le notaire ne parte.', 'facultatif, soutenu'],
      ['à moins que', "Je vous préviendrai, à moins qu'elle ne confirme.", `voir ${RESTRICTION_REF}`],
      ['de peur que, de crainte que', "Il parle bas, de peur qu'on ne l'entende.", `voir ${BUT_REF}`],
      ['craindre que, avoir peur que', "Je crains qu'il ne soit trop tard.", 'le ne ne nie rien'],
      ['éviter que, empêcher que', "Évitons que la dispute ne s'envenime.", 'facultatif'],
      ['un comparatif', 'Le trajet a été plus long que je ne le pensais.', 'facultatif'],
      ["sans que, après que, jusqu'à ce que", "Elle est entrée sans qu'on l'entende.", "pas de ne à l'écrit soigné"],
      ['ne… pas', 'Je crains que les témoins ne viennent pas.', 'une vraie négation'],
    ]),
  ]),
  sheet('sheet-pendant', 'En même temps, la durée, alors que', ['quand, lorsque, pendant que, au moment où', 'à mesure que, tant que, depuis que', 'alors que : le temps ou l’opposition'], [
    teach('sheet-pendant-teach', 'Des faits réels',
      "Quand deux faits se passent en même temps, ou quand l'un dure, se répète ou commence, les deux sont réels : l'indicatif. Mets l'imparfait à ce qui était en cours, le passé composé à l'événement. Alors que et tandis que disent le temps si pendant que convient, l'opposition si en revanche convient. EN: all indicative; the imparfait for what was under way."),
    table('sheet-pendant-meme', 'En même temps', ['Mot', 'Sens', 'Exemple'], [
      ['quand', 'le mot courant', "Quand j'ai tourné la tête, le vélo était déjà par terre."],
      ['lorsque', "le quand de l'écrit", 'Lorsque la police est arrivée, le cycliste était assis sur le trottoir.'],
      ['pendant que', 'une durée, deux sujets', 'Pendant que le cycliste traversait, la voiture a tourné à droite.'],
      ['au moment où', 'un instant', 'Au moment où le feu est passé au vert, une voiture a démarré.'],
      ['comme + imparfait', 'juste au moment où (écrit)', "Comme je sortais de la boulangerie, j'ai entendu un choc."],
      ['en + participe présent', 'un seul sujet', 'Le conducteur téléphonait en conduisant.'],
    ]),
    table('sheet-pendant-duree', 'La durée', ['Mot', 'Sens', 'Exemple'], [
      ['à mesure que, au fur et à mesure que', 'deux progressions', "À mesure que l'eau baissait, on découvrait les dégâts."],
      ['chaque fois que, toutes les fois que (soutenu)', 'une répétition', "Chaque fois qu'un client revient, je reconnais son visage."],
      ['tant que', 'aussi longtemps que', "Tant qu'il y a du monde, la boutique reste ouverte."],
      ['depuis que', 'un point de départ', "Depuis que j'ai ouvert la boulangerie, je me lève à quatre heures."],
      ['maintenant que', 'une situation nouvelle, une raison', 'Maintenant que la boutique est connue, les gâteaux se réservent la veille.'],
    ]),
    table('sheet-pendant-alors', 'Alors que, tandis que', ['Sens', 'Test', 'Exemple'], [
      ['le temps', 'pendant que convient', "Alors que je rentrais du travail, j'ai vu de la fumée au-dessus des toits."],
      ["l'opposition", 'en revanche convient', 'Ma sœur travaille de nuit, tandis que moi, je travaille de jour.'],
      ['la concession', 'et pourtant convient', "Il a quitté la réunion alors qu'elle n'était pas finie."],
    ]),
  ]),
  sheet('sheet-apres', 'Après, dès que, et le futur', ['après que et ses sorties', 'dès que : le temps composé qui va avec', 'le futur après le mot de temps'], [
    teach('sheet-apres-teach', 'Déjà fait, ou à venir',
      "Après que, dès que, aussitôt que et une fois que regardent un fait déjà fait : l'indicatif. Le temps composé suit le temps de l'autre verbe. Pour l'avenir, tous les mots de temps prennent le futur, sauf si. EN: already done: indicative; the future after time words, except si."),
    table('sheet-apres-echelle', "Dès que : l'échelle", ["L'autre verbe", 'Après dès que', 'Exemple'], [
      ['présent', 'passé composé', "Dès que j'ai fini mon café, je pars au travail."],
      ['imparfait', 'plus-que-parfait', "Dès que j'avais fini mes devoirs, je descendais jouer sur la plage."],
      ['futur', 'futur antérieur', "Dès que j'aurai fini ce livre, je te le prêterai."],
      ['passé simple (livres)', 'passé antérieur, à lire', "Dès qu'il eut fini son repas, il sortit sur la terrasse."],
      ['au même moment', 'le même temps simple', 'Dès que la cloche sonnait, tout le monde sortait.'],
      ['sans verbe conjugué', 'sitôt, une fois + participe', 'Une fois le repas terminé, nous faisions la sieste.'],
    ]),
    table('sheet-apres-que', 'Après que', ['Tournure', 'Pour', 'Exemple'], [
      ['après que + indicatif', 'un fait passé', "Après qu'il a été élu, le nouveau secrétaire a pris la parole."],
      ['après que + futur antérieur', "l'avenir", "Après qu'on aura fixé la date, nous préviendrons les membres."],
      ['après + infinitif passé', 'un seul sujet', 'Après avoir présenté les comptes, le trésorier a répondu aux questions.'],
      ['après + nom', 'plus court', 'Après le vote, la séance a été levée.'],
      ["après qu'il soit parti", "oral, critiqué à l'écrit", "après qu'il est parti"],
    ]),
    table('sheet-apres-futur', 'Le futur après le mot de temps', ['Mot', "Pour l'avenir", 'Exemple'], [
      ['quand, lorsque', 'futur', 'Quand tu arriveras, la clé sera sous le pot de fleurs.'],
      ['pendant que, tant que', 'futur', 'Pendant que je serai à Lisbonne, tu pourras utiliser mon vélo.'],
      ['dès que, une fois que', 'futur ou futur antérieur', 'Une fois que tout le monde sera arrivé, nous passerons à table.'],
      ['si', 'présent, jamais le futur', 'Si tu as un problème, appelle ma voisine.'],
      ['vu du passé', 'conditionnel', "Julien a promis qu'il appellerait quand il arriverait à Lisbonne."],
    ]),
  ]),
  sheet('sheet-rapport', 'Le compte rendu (DELF B2)', ['le plan', 'les phrases utiles', 'la liste de contrôle'], [
    teach('sheet-rapport-teach', "Les faits dans l'ordre",
      "Un compte rendu raconte un incident dans l'ordre, du début à la fin, puis dit ce qui a été fait et la suite. Chaque fait est placé par un mot de temps, et le registre reste neutre et daté. EN: events in order, then what was done and what comes next."),
    table('sheet-rapport-plan', 'Le plan', ['Partie', 'Tournure', 'Exemple'], [
      ["l'objet", "voici, dans l'ordre", "Voici, dans l'ordre, le déroulement des faits."],
      ["avant l'incident", 'avant que + subjonctif', "Avant que l'alarme se déclenche, rien ne laissait prévoir l'incident."],
      ["l'incident", 'au moment où, lorsque', "Au moment où l'alarme a retenti, une cinquantaine de nageurs se trouvaient dans le bassin."],
      ['ce qui a été fait', 'pendant que, dès que, après avoir', "Pendant que les maîtres-nageurs faisaient sortir le public, j'ai appelé les pompiers."],
      ["la fin de l'incident", "jusqu'à ce que", "Nous sommes restés sur le parking jusqu'à ce que les pompiers autorisent le retour."],
      ['la suite', 'dès que + futur, en attendant que', "Je vous tiendrai informés dès que le rapport de l'installateur me sera parvenu."],
    ]),
    table('sheet-rapport-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ["L'objet est annoncé", 'quoi, où, quand, pour qui'],
      ['Chaque fait est placé', "avant que, pendant que, dès que, jusqu'à ce que"],
      ['Au moins quatre mots de temps', 'un subjonctif, un indicatif, un infinitif'],
      ['Le mode suit la place du fait', 'pas encore : subjonctif ; déjà là : indicatif'],
      ["L'avenir est au futur", "dès que je l'aurai reçu, quand il passera"],
      ['Pas de subjonctif après après que', "après qu'il est parti, après son départ"],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-18-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const EXERCISE = 'One voice, read as written WITH the bracketed infinitives, blanks and choices spoken as printed (a blank is a short pause): this is the exercise text, not the answer.';
const TRAP = "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions in promptSound are NEVER spoken.";
const REC_DESC: Record<string, string> = {
  'rec-b2-18-rapport': "Sylvie Tremblay's incident report (act 1), one female voice with a Québec accent, one take, a building manager reading her own notice: clear, factual, unhurried. The time words are read at the pace of the rest; « avant que la fuite ne commence » with a light, unstressed ne.",
  'rec-b2-18-rappel': 'The four recap cards (act 2). One coach voice, calm.',
  'rec-b2-18-ligne-ecoute': `${ONE_TAKE} Eight lines. Every line starts « Appelle-moi », « Attends » or « Après que »: keep the same melody so only the time word changes.`,
  'rec-b2-18-keller': 'Mme Keller and a coach voice (act 3), Geneva, one take, a pharmacy before opening. Mme Keller dictates, precise and kind. A Swiss accent is welcome.',
  'rec-b2-18-avant': 'The four avant que cards (act 3). One voice.',
  'rec-b2-18-piege-avant': TRAP,
  'rec-b2-18-texte-a3': `The pharmacy procedure (act 3). ${EXERCISE}`,
  'rec-b2-18-gare': 'Sarah, Thomas and a coach voice (act 4), Brussels-Midi station, one take, a busy hall behind them. Sarah is calm and practical; Thomas sighs. A Belgian accent is welcome for Sarah.',
  'rec-b2-18-limite': 'The four limit cards (act 4). One voice.',
  'rec-b2-18-limite-ecoute': `${ONE_TAKE} Eight lines, a station announcer's clarity without the echo.`,
  'rec-b2-18-texte-a4': `Thomas's email (act 4). ${EXERCISE}`,
  'rec-b2-18-notaire': 'Awa, Moussa and a coach voice (act 5), Dakar, one take, a notary’s office on a Friday afternoon. Awa is patient; Moussa reads too fast and worries. A light Senegalese accent is welcome.',
  'rec-b2-18-expletif': 'The four expletive-ne cards (act 5). One voice. Every expletive ne is light and unstressed, never an audible « non »; card three stresses « pas » a little, as the one real negation.',
  'rec-b2-18-piege-expletif': `${TRAP} Read every expletive ne light and unstressed.`,
  'rec-b2-18-texte-a5': "Maître Sall's letter (act 5), one male voice, formal, a notary reading his own letter; every ne read as written, none stressed.",
  'rec-b2-18-emilie': 'Émilie, officer Pelletier and a coach voice (act 6), Québec City, one take, a police station. Émilie is still a little shaken; the officer is steady. Québec accents are welcome.',
  'rec-b2-18-pendant': 'The four same-time cards (act 6). One voice.',
  'rec-b2-18-pendant-ecoute': `${ONE_TAKE} Eight lines, Émilie's voice, as if replaying the scene.`,
  'rec-b2-18-texte-a6': `Émilie's statement (act 6). ${EXERCISE}`,
  'rec-b2-18-fatou': 'Fatou, Hugo and a coach voice (act 7), Marseille, one take, a bakery at dawn, the oven door opening once. Fatou is warm and quick; a light Senegalese accent is welcome, Hugo a Marseille one.',
  'rec-b2-18-piege-duree': TRAP,
  'rec-b2-18-texte-a7': `Fatou's biography (act 7). ${EXERCISE}`,
  'rec-b2-18-colocation': 'Léna, Karim and a coach voice (act 8), Lyon, one take, a flat in the evening, a newspaper rustling. Léna reads aloud; Karim comments, amused.',
  'rec-b2-18-alors': 'The four alors que / tandis que cards (act 8). One voice. Read the time and the opposition senses with the same melody: only the meaning differs.',
  'rec-b2-18-alors-ecoute': `${ONE_TAKE} Nine lines. Do not stress alors que or tandis que differently by sense.`,
  'rec-b2-18-texte-a8': 'The Lyon news item (act 8), one voice, a radio newsreader, read as written.',
  'rec-b2-18-julien': 'Julien, Inès and a coach voice (act 9), Toulouse, one take, a kitchen the evening before a trip. Julien talks fast; Inès repeats slowly. A light southern accent is welcome.',
  'rec-b2-18-futur': 'The four future cards (act 9). One voice.',
  'rec-b2-18-piege-futur': TRAP,
  'rec-b2-18-texte-a9': `Julien's email (act 9). ${EXERCISE}`,
  'rec-b2-18-apres-ecoute': `${ONE_TAKE} Eight lines read like a secretary rereading the minutes aloud, even and clear. A Belgian accent is welcome.`,
  'rec-b2-18-piege-apres': TRAP,
  'rec-b2-18-texte-a10': 'The Liège minutes (act 10), one voice, read as written, INCLUDING the faulty passages in brackets: the rewrite is the exercise.',
  'rec-b2-18-marcel': 'Marcel, Léa and a coach voice (act 11), Nice, one take, a balcony over the sea. Marcel is old and unhurried; Léa is seventeen and quick. A light Niçois accent is welcome for Marcel.',
  'rec-b2-18-anteriorite': 'The four dès que cards (act 11). One voice. Card four reads the passé antérieur « eut fini » clearly, [y.fi.ni].',
  'rec-b2-18-anteriorite-ecoute': `${ONE_TAKE} Nine lines. Lines two and seven are memories: read them a touch slower, not sadder.`,
  'rec-b2-18-texte-a11': 'The novel extract and Léa’s remark (act 11): one narrator voice for the extract, one young female voice for Léa.',
  'rec-b2-18-modele': "Olivier Lemaire's report (act 12), one male voice, one take, a sports-centre manager reading to a board: factual, orderly, calm. A Belgian accent is welcome.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 18',
  intro: 'At B1 you learned pendant que, depuis que, lorsque and après que, and quand + futur. At B2 you map every time word by where its event sits on the line, SEEN FROM THE MAIN EVENT: what has not happened yet takes the subjunctive (avant que, jusqu’à ce que, en attendant que, d’ici à ce que), what is happening or has happened takes the indicative (quand, lorsque, pendant que, au moment où, à mesure que, chaque fois que, tant que, depuis que, maintenant que, après que, dès que), and one subject takes an infinitive (avant de, après avoir). You learn the expletive ne in full, which negates nothing; the time and opposition senses of alors que and tandis que; the future after time words; the compound tense that matches the other verb after dès que; and which spoken forms (après qu’il soit parti) are criticised in writing. The task: a 200 to 250 word chronological report in DELF B2 format.',
  skill: 'PE',
  grammarAssumed: [FUTUR_USAGE_UNIT, SUBJ_INF_UNIT, SUBORD_UNIT, MODES_UNIT, FUT_ANT_UNIT],
  grammarIntroduced: [
    'Time clauses organised by the place of the subordinate event seen from the main one: not yet (subjunctive), during or already done (indicative), one subject (infinitive)',
    'Avant que with the subjunctive even in a past narrative and with the subjonctif passé for an event finished first; avant de, avant d’avoir and avant + noun for one subject',
    'Jusqu’à ce que against jusqu’au moment où, en attendant que and en attendant de, d’ici à ce que (formal) and d’ici que (everyday), and tant que… ne… pas as the indicative equivalent of until',
    'The expletive ne in full: after avant que, à moins que, de peur que, craindre que, éviter que and a comparative; optional, formal, not a negation; never after sans que in careful writing; ne… pas as the real negation',
    'Simultaneity with the indicative: quand, lorsque (written), pendant que (a stretch), au moment où (an instant), comme + imparfait (time) against the comme of cause',
    'À mesure que and au fur et à mesure que, chaque fois que and toutes les fois que, tant que, depuis que and maintenant que, all with the indicative',
    'Alors que and tandis que in their time sense against their opposition sense, with the pendant que / en revanche test',
    'The future after every time word for a future event (the English present is wrong in writing), si as the one exception, and the conditional for the future seen from the past',
    'Après que with the indicative as the norm, « après qu’il soit parti » named as spoken and contested, après + noun and après + past infinitive as ways out, and the dangling infinitive',
    'Dès que, aussitôt que, sitôt que and une fois que with the compound tense that matches the other verb; the passé antérieur for recognition; une fois and sitôt + participle',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Au B1, tu as appris pendant que, depuis que, lorsque et après que, et le futur après quand. Ici, tu places chaque fait sur la ligne, vu du fait principal : ce qui n'a pas encore eu lieu prend le subjonctif, ce qui a lieu ou a déjà eu lieu prend l'indicatif, et un seul sujet prend l'infinitif. Tu apprends le ne explétif en entier, les deux sens d'alors que, le futur après les mots de temps et le temps composé après dès que. À la fin, tu écris un compte rendu de 200 à 250 mots qui met chaque fait à sa place.",
    minutes: 160,
    difficulty: 4,
    glyph: 'avant',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: SUBORDONNEES_TEMPS_TERMS,
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
