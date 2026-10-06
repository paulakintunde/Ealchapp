// c1.10.l1 « Dissertation et synthèse » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (decisions 1,
// 23 and 24; wave 2 and wave 4 notes). Structural model: b2.23 « Argumenter »
// (`../b2/argumentation-*`); C1 voice and helpers as c1.08 (`./persuader-*`).
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around ONE ANCHOR TEXT (a copy, a
//   handout, three introductions, a dossier, a synthèse, an open letter, all
//   original, 220 to 380 words; act 6’s is a one-take listening) and ONE
//   MOVE, in the same beats:
//
//     1. MEET THE TEXT     a `reading` (questions behind `questionsInModal`;
//                          the FIRST is always « Devine le sens », the
//                          glossary keeps one entry) or, in act 6, a
//                          one-take `listening`.
//     2. NOTICE THE MOVE   a `cardDeck`, `tapTable`, `focus` or `examples`,
//                          linked to a sheet.
//     3. JUDGE IT          on NEW material: a groupDrill whose last page is a
//                          test, then a trapDrill or a commonErrors.
//     4. USE IT            « Pour ton essai », always the same groupDrill
//                          shape: the act’s one tool applied to the task’s
//                          dossier (the halle). Act 10 replaces it with the
//                          ungraded synthèse, built phrase by phrase, and a
//                          dictation (decision 24).
//
//   then the act check (control pages, gated). Act 1 is the problem scene
//   and the recap; act 12 is the production act.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le sujet qui piège          6  Karim’s introduction (scene, reading) ·
//                                      a restated subject; ONE recap page of
//                                      b2.22 and b2.23; the task announced
//    2  Les termes du sujet         6  Irène’s handout · defining, the small
//                                      word, delimiting
//    3  La tension                  6  three introductions · the
//                                      problématique as tension or paradox
//    4  Le plan analytique          6  Solène’s copy · constat, causes ranked,
//                                      enjeux
//    5  Le plan comparatif          6  Yanis’s copy · criterion by criterion
//    6  Choisir son plan            6  a tutorial (one-take listening) · the
//                                      problématique chooses; the third part
//                                      goes beyond
//    7  Les transitions-bilan       6  the model development · sum up, then
//                                      move on
//    8  Conclure et ouvrir          6  three conclusions · the answer that
//                                      keeps the tension, the earned ouverture
//    9  Lire un dossier             6  the boredom dossier · by ideas
//   10  Écrire la synthèse          6  two synthèses · the rules, practised
//                                      ungraded phrase by phrase
//   11  L’essai sur dossier         6  Nadia’s open letter · genre, addressee,
//                                      the dossier used, not copied
//   12  Ton essai                  11  the halle dossier · plan, role play,
//                                      TASK, quiz, review
//
//   TOTAL 77 missions, 12 acts (6 × 11, then 11). Corpus: 171 authored rows
//   (.1600-.1770) in twelve blocks plus 29 reused rows (20 in seedPlusPacks,
//   9 Postgres-only in PG_ROWS; see the corpus header §A.3). 11 readings
//   (acts 1-5 and 7-12) and 1 listening (act 6). Quiz: 11 rounds of 8.
//   Eleven error triggers, eleven drills, five reference sheets, twelve
//   terms, four tapTables (decision 16). Chapter artwork:
//   `dissertation-synthese-image-prompts.md`, 12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un sujet cache une tension : ton plan la déplie. »
//   EN: A subject hides a tension: your plan unfolds it.
//
//   ONE METAPHOR, THE FOLD: the subject is a folded sheet, the crease is the
//   tension; the plan unfolds it panel by panel, each transition is a crease,
//   the conclusion lays it flat and lifts one corner. It is NOT « find the
//   right answer » (act 6 refuses the averaged third part, act 8 the
//   one-sided conclusion) and NOT « every subject is for and against » (acts
//   4 and 5 unfold tensions with no « pour » and no « contre »).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    defining the subject’s terms as the way to its tension; the
//           problématique as a tension or a paradox; the analytical and
//           comparative plans; choosing a plan from the problématique and the
//           third part that goes beyond; the transition-bilan and the partial
//           conclusion; the conclusion that keeps the tension and the earned
//           ouverture (prolonger, déplacer, élargir); the WRITTEN synthèse of
//           documents; the essai argumenté from a dossier in a real genre.
//   QUOTES  b2.22’s and b2.23’s reframes (act 1), imported, never retyped.
//   LEAVES  the B2 introduction, conclusion, dialectical and thematic plans
//           and the B2 transition to b2.23 (recapped in act 1, cited in acts
//           6, 7, 8); « préciser les termes du débat » and plan announcement
//           to b2.22 (act 1, act 2); the spoken synthèse and spoken
//           problématique formulas to c1.09 (acts 3, 9); closure markers to
//           c1.07 (act 8); the strongest-form objection to c1.08 (act 11).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use what the situation needs (Irène and
//   her adult students say tu to each other; the letters say vous). Natural,
//   unsimplified C1 French; English authored on every learner string (`en`,
//   or a final « EN: »), never on an answer. Every `say` is French.
//   Citations by trail position in French, never a raw id. Typographic ’ in
//   every authored French string. The DALF is never named in learner text
//   (wave 4 brief); the synthèse rules are given as the genre’s rules.
//   Decision 24: ONE graded essay of 250 to 400 words from a dossier inlined
//   in the brief; the synthèse practised ungraded in act 10. Mission answer
//   slots spread by `balanceSlots()`; the quiz by `spreadSlots()`; no `why`
//   names a position. Invented people, places and outlets only; every
//   dossier figure invented and said to be.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. Topics: progress and time, leisure, comfort, board games, town and
//      country, children’s boredom, a greener school yard, and (the task)
//      restoring or transforming an old covered market. Approve?
//   2. The task genre is fixed as a « lettre ouverte au maire » (decision 24
//      allows lettre ouverte, article or contribution). One genre keeps the
//      rubric and the grader simple. Keep, or let the learner choose?
//   3. Rubric: six criteria, 20 points (decision 14), b2.23’s four
//      (consigne, argumentation, cohérence, langue) plus « précision
//      lexicale » and « structure de l’argumentation » as the wave 4 brief
//      asks. Keep the weights (3, 4, 4, 3, 3, 3)?
//   4. The synthèse rules (own words, key words but not sentences, no
//      opinion, no added idea, a word range) are taught as the genre’s
//      rules, without naming any exam; the act 10 practice cites no range
//      figure on screen except « la fourchette de la consigne », and the
//      model synthèse sits inside 200 to 240 words. Keep?
//   5. Nine reused rows are Postgres-only (PG_ROWS); four need the decision
//      13 typography edit at import (.036, .055, .096, .152). Accept, or swap
//      for authored rows?
//   6. The legacy discours-dexamen rows carry {sentence, review}: named in
//      missions, never released to the deck (NOT_DECK_ABLE). Fine?
//   7. The roundup names « la leçon 11 du C1 » (c1.11, same wave) as what
//      comes next (constant RAPPORTS_REF_PLANNED). If c1.11 slips out of
//      wave 4, that sentence must go.
//   8. The task prints the dossier twice (reading and brief), as c1.08 and
//      c1.24 do. Accept again, or move it to `parts` now that decision 30
//      allows text-only parts on open exam tasks?
//   9. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, DE, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, PG_ROWS, dicteeFor,
  COPIE_TEXT, TERMES_TEXT, TROIS_INTROS_TEXT, ANALYTIQUE_TEXT, COMPARATIF_TEXT, TRANSITIONS_TEXT,
  CONCLUSIONS_TEXT, DOSSIER_ENNUI_TEXT, SYNTHESE_A_TEXT, SYNTHESE_B_TEXT, LETTRE_TEXT, DOSSIER_TEXT,
  B222_REFRAME, B223_REFRAME,
  ACADEMIQUE_UNIT, ARGU_UNIT, REFORMULER_UNIT, PERSUADER_UNIT, EXPOSE_UNIT,
  ACADEMIQUE_REF, ARGU_REF, REFORMULER_REF, PERSUADER_REF, EXPOSE_REF,
} from './dissertation-synthese-corpus.ts';
import { DISSERTATION_TERMS } from './dissertation-synthese-terms.ts';

/** What comes next on the trail (c1.11, written in the same wave). Not in
 *  the seed yet, so typed from the plan. TODO(import): drop if c1.11 slips. */
const RAPPORTS_REF_PLANNED = 'la leçon 11 du C1';

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
const PG = new Map<string, SrcItem>(PG_ROWS.map((r) => [r.id, r]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));

/** An item's fr/en, from this corpus, the seed, or the Postgres-only rows.
 *  Throws on a typo, so no section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id) ?? PG.get(id);
  if (!r) throw new Error(`c1.10: no item ${id}`);
  return r;
}
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.10: no ipa on ${id}`);
  return r.ipa;
}
/** The corpus row's respelling, BRACKETED for a section. Authored rows only. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.10: no authored respell on ${id}`);
  return `[${r.respell}]`;
}
const fr = (id: string) => src(id).fr;

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const free = (f: string, en: string, note?: string): GItem => ({ fr: f, en, ...(note ? { note } : {}) });
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

/** THE « USE IT » BEAT: the act's one tool, applied to the halle dossier. */
function pourTonEssai(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ton essai', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

const PIEGE_STEPS = (cards: string, drill: string) => [
  { label: 'La règle', kind: 'rule' as const, title: 'La règle' },
  { label: 'Six cartes', kind: 'cards' as const, title: cards },
  { label: 'Écoute', kind: 'audio' as const, title: 'Écoute les six phrases justes' },
  { label: 'À toi', kind: 'drill' as const, title: drill, gate: true },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE SUJET QUI PIÈGE
 *
 *  The problem: Irène’s evening class at the Maison des savoirs of
 *  Sorbevaux. The learner must write the problématique for « Le progrès
 *  technique nous fait-il gagner du temps ? ». Then ONE recap page of the B2
 *  lessons this one builds on, rows reused by id.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Une problématique en dix minutes', frSub: 'Le cours du mardi soir',
  setting: { place: 'La Maison des savoirs', city: 'Sorbevaux', time: '19 h 10', ambience: 'une salle de classe pour adultes, des cafés en gobelet, le bruit des stylos' },
  beats: [
    { kind: 'narration', text: 'Mardi soir, à la Maison des savoirs de Sorbevaux. Irène Lamothe prépare une dizaine d’adultes à l’écrit argumenté. Elle écrit un sujet au tableau et donne dix minutes pour une seule phrase : la problématique.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Irène, la formatrice', fr: 'Le sujet : le progrès technique nous fait-il gagner du temps. Je veux votre problématique, pas votre plan.', en: 'The subject: does technical progress save us time. I want your problem question, not your plan.', respell: '[luh sü-ZHEH luh pro-greh tek-NEEK noo feh-TEEL ga-nyay dü TAHⁿ zhuh veu vot pro-blay-ma-TEEK pa vot PLAHⁿ]', stage: 'Elle souligne deux fois « gagner du temps ».', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Karim, ton voisin', fr: 'Facile. Je reprends le sujet et j’ajoute « nous nous demanderons si ».', en: 'Easy. I take the subject and add “we will ask whether”.', respell: '[fa-SEEL zhuh ruh-PRAHⁿ luh sü-ZHEH ay zha-ZHOOT noo noo duh-mahⁿ-duh-ROHⁿ SEE]', stage: 'Il a déjà fini.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: 'Attends. Je cherche d’abord ce qui, dans le sujet, fait problème.', en: 'Wait. I am first looking for what, in the subject, is a problem.', respell: '[a-TAHⁿ zhuh SHEHRSH da-BOR suh KEE dahⁿ luh sü-ZHEH feh pro-BLEMM]', stage: 'Tu relis le sujet mot par mot.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle problématique lis-tu à voix haute ?', size: 'lg',
      options: [
        { fr: fr(E(1600)), respell: rsOf(E(1600)), en: src(E(1600)).en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1601)), respell: rsOf(E(1601)), en: src(E(1601)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Irène écrit ta phrase au tableau. Deux idées vraies se heurtent : les machines font gagner du temps, et nous en manquons. La classe voit aussitôt de quoi parlera chaque partie.',
        breaks: 'Irène lit ta phrase, puis le sujet : c’est le même texte. La classe peut répondre « oui et non » sans avoir rien compris de plus. Ton plan devra deviner sa route.',
      },
    },
    {
      kind: 'break', heading: 'Recopier le sujet, ce n’est pas poser une problématique',
      body: `${Cap(ARGU_REF)} t’a appris que la problématique est la question que ton texte va trancher. Au C1, elle doit faire tension : deux idées vraies qui se heurtent. EN: At C1 the question must hold a tension: two true ideas that clash.`,
      wrong: { fr: fr(E(1600)), ipa: ipaOf(E(1600)), respell: rsOf(E(1600)), en: src(E(1600)).en },
      right: { fr: fr(E(1601)), ipa: ipaOf(E(1601)), respell: rsOf(E(1601)), en: src(E(1601)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Cette leçon t’apprend à trouver la tension d’un sujet, à choisir le plan qui la déplie, à relier les parties et à conclure. Tu t’exerceras à la synthèse, puis tu écriras une lettre ouverte de 250 à 400 mots sur dossier.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['tension', 'problematique'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Trouver la tension d’un sujet', s: 'Actes 2 et 3 : les termes, puis la problématique' },
    { t: 'Choisir le plan qui la déplie', s: 'Actes 4 à 6 : analytique, comparatif, et le bon choix' },
    { t: 'Relier et conclure', s: 'Actes 7 et 8 : la transition-bilan, l’ouverture' },
    { t: 'Écrire à partir de documents', s: 'Actes 9 à 12 : la synthèse, puis ton essai' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'L’introduction de Karim', frSub: 'Et la note d’Irène dans la marge',
  text: COPIE_TEXT,
  glossary: [
    { word: 'se dessine', en: 'takes shape', note: 'Apparaît peu à peu, comme un dessin qui prend forme.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « ton introduction est propre ». Que veut dire « propre » ici ?', a: 'Correcte et bien présentée, sans faute : soignée, mais sans plus.' },
    { q: 'Qu’est-ce qu’Irène reproche à la question de Karim ?', a: 'Elle recopie le sujet : elle n’apprend rien au lecteur et ne pose aucun problème.' },
    { q: 'Pourquoi dit-elle que la conclusion est « déjà écrite » ?', a: 'Parce que le plan oui, puis non, mène forcément à « oui et non ».' },
    { q: 'Quelle tension propose-t-elle ?', a: 'Chaque machine fait gagner quelques minutes, et pourtant nous avons l’impression de manquer de temps de plus en plus.' },
    { q: 'Que reproche-t-elle à la première phrase ?', a: '« Depuis toujours » ne dit rien qu’on ne sache déjà ; elle conseille de partir d’un fait précis.' },
  ],
  audio: REC('rec-c1-10-copie'), say: REFRAME, terms: ['tension', 'problematique'],
};

/** THE RECAP: ONE page for the two B2 lessons, rows reused by id. */
const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: `${Cap(ACADEMIQUE_REF)} et ${ARGU_REF}`,
  groups: [
    grp('Un rappel en une page', [
      it('fr.b2.universite.1043', 'annoncer son plan'),
      it('fr.b2.opinions-et-avis.1723', 'le mot'),
      it('fr.b2.opinions-et-avis.1726', 'les trois temps d’une introduction'),
      it('fr.b2.opinions-et-avis.1742', 'deux plans et leur règle'),
    ], chk('Au B2, la problématique était...', ['la question que ton texte allait trancher', 'le thème du texte'], 0,
      `${Cap(ARGU_REF)} la définissait ainsi, avec pour règle : « ${B223_REFRAME} » Ici, on va plus loin. EN: that was the B2 definition; this lesson goes further.`)),
    ctl('Ce qui est nouveau', 'Qu’ajoute cette leçon ?', ['Rien : c’est la même méthode.', 'La tension du sujet, deux plans de plus, la synthèse et l’essai sur dossier.'], 1,
      `${Cap(ACADEMIQUE_REF)} disait : « ${B222_REFRAME} » Tu y ajoutes la tension, deux plans et l’écrit sur dossier. EN: you add the tension, two plans, writing from a dossier.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['tension', 'problematique'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment', sheetId: 'sheet-sujet',
  cases: [
    { situation: 'Un sujet d’examen tombe, et tu as trois heures', fr: fr(E(1610)), en: src(E(1610)).en },
    { situation: 'Tu relis ton introduction', fr: fr(E(1611)), en: src(E(1611)).en },
    { situation: 'Tu hésites entre deux exercices', fr: fr(E(1609)), en: src(E(1609)).en },
    { situation: 'Le sujet te paraît évident', fr: fr(E(1603)), en: src(E(1603)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['tension'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La redite', 'Une problématique qui recopie le sujet...', ['n’apprend rien au lecteur', 'est la plus sûre'], 0,
    'Le lecteur connaît déjà le sujet ; il attend le problème. EN: the reader already has the subject.'),
  ctl('La tension', 'Une tension, c’est...', ['deux idées vraies qui se heurtent', 'une opinion forte', 'un problème de société'], 0,
    `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('La mission', 'À la fin de la leçon, tu vas écrire...', ['une synthèse notée', 'une lettre ouverte à partir d’un dossier', 'un compte rendu de réunion'], 1,
    'Entre 250 et 400 mots, à partir d’un dossier ; la synthèse, tu t’y exerces sans note. EN: 250 to 400 words from a dossier.'),
], ['tension']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le sujet qui piège',
    opener: {
      line: 'Un sujet au tableau, dix minutes, une phrase : ici tu découvres qu’une problématique n’est pas le sujet recopié, mais la tension qu’il cache. EN: A subject on the board, ten minutes, one sentence: here you find that a problem question is not the subject copied out, but the tension it hides.',
      imageRef: 'lessons/dissertation-synthese/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais qu’un sujet recopié n’est pas une problématique, et tu cherches ce qui, dans le sujet, fait problème. EN: You know a copied subject is not a problem question, and you look for what in the subject is a problem.',
    estScreens: 32, restPoints: ['a1-lecture', 'a1-rappel'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LES TERMES DU SUJET
 *
 *  TEXT: Irène’s handout on « Nos loisirs sont-ils encore du temps libre ? ».
 *  MOVE: define every word, the small ones first; find where two senses
 *  clash; delimit. b2.22 said « il convient de préciser les termes »; this
 *  act does it.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a2-lecture', layer: 'core', questionsInModal: true,
  title: 'Lire un sujet avant de l’écrire', frSub: 'La fiche d’Irène',
  text: TERMES_TEXT,
  glossary: [
    { word: 'embrasser', en: 'to take in, to cover', note: 'Ici : vouloir tout traiter à la fois.' },
  ],
  questions: [
    { q: 'Devine le sens : « tout embrasser ». Que veut dire « embrasser » ici ?', a: 'Vouloir tout traiter, prendre le sujet trop large.' },
    { q: 'Pourquoi le possessif « nos » compte-t-il ?', a: 'Il s’agit des loisirs de tout le monde, pas de ceux d’une élite.' },
    { q: 'Quels sont les deux sens de « libre » ?', a: 'Hors du travail et des obligations ; et, plus exigeant, un temps dont on dispose comme on veut.' },
    { q: 'Que suppose le mot « encore » ?', a: 'Que nos loisirs ont été du temps libre et risquent de ne plus l’être : quelque chose a changé.' },
    { q: 'Où se trouve la tension du sujet ?', a: 'Nos loisirs restent hors du travail, mais ils ressemblent de plus en plus à un emploi du temps : les deux sens de « libre » se heurtent.' },
    { q: 'Quelles sont les deux erreurs à éviter ?', a: 'Changer de sujet sans le voir, et tout embrasser au lieu de délimiter.' },
  ],
  audio: REC('rec-c1-10-termes'), say: REFRAME, terms: ['termes', 'tension'],
};

const A2_TERMES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-termes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-sujet',
  title: 'Quatre gestes avant d’écrire', frSub: 'Lire le sujet mot par mot',
  hint: 'Quatre cartes. Regarde ce que chaque geste fait apparaître.',
  audio: AUDIO, say: REFRAME, terms: ['termes'],
  cards: [
    { head: 'Définir chaque mot', label: 'le sens', fr: fr(E(1615)), sub: rsOf(E(1615)),
      body: `${Cap(ACADEMIQUE_REF)} te faisait annoncer qu’il fallait préciser les termes. Ici, tu le fais : une définition à toi, pas celle du dictionnaire recopiée. EN: you actually define, in your own words.` },
    { head: 'Le petit mot', label: 'encore, seulement, faut-il', fr: fr(E(1614)), sub: rsOf(E(1614)),
      body: 'Le petit mot que tout le monde saute porte souvent le problème : « encore » suppose un changement. EN: the small word often carries the problem.' },
    { head: 'Deux sens qui se heurtent', label: 'la tension', fr: fr(E(1617)), sub: rsOf(E(1617)),
      body: 'Mets les définitions côte à côte. Là où elles se contredisent, tu tiens ta tension. EN: where the definitions clash, you have your tension.' },
    { head: 'Délimiter', label: 'ni trop large, ni à côté', fr: fr(E(1621)), sub: rsOf(E(1621)),
      body: 'Dis tout de suite ce que tu traites et ce que tu laisses. Un sujet trop large n’a plus de tension. EN: say at once what you cover and what you leave.' },
  ],
};

const A2_JUGER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-juger', layer: 'core', size: 'lg',
  title: 'Annoncer ou définir', frSub: 'Des formules, puis des définitions',
  groups: [
    grp('Trois formules qui annoncent', [
      it('fr.b2.universite.1031', 'au B2'),
      it(DE(122), 'à l’oral'),
      it(DE(67), 'à l’oral'),
    ], chk('Ces trois phrases annoncent qu’on va définir. Que manque-t-il encore ?', ['la définition elle-même, et ce qu’elle révèle', 'une formule plus longue'], 0,
      'Annoncer ne suffit pas : c’est la définition qui fait apparaître le problème. EN: the definition itself is what reveals the problem.')),
    grp('Deux définitions de « temps libre »', [
      free('Le temps libre, c’est le temps où l’on ne travaille pas.', 'Free time is the time when you are not working.', 'le premier sens'),
      free('Le temps libre, c’est un temps dont on dispose comme on veut.', 'Free time is time you can use as you wish.', 'le sens exigeant'),
      it(DE(98), 'la formule qui distingue'),
    ], chk('Pourquoi garder les deux définitions ?', ['parce que le sujet se joue entre elles', 'pour allonger l’introduction'], 0,
      'Un loisir peut être hors du travail sans être libre : la tension est entre les deux sens. EN: the tension lies between the two meanings.')),
    ctl('Le test', '« Nos loisirs sont-ils encore du temps libre ? » Quel mot oublie-t-on le plus souvent ?', ['loisirs', 'encore', 'temps'], 1,
      'Sans « encore », on perd l’idée d’un changement, et donc le problème. EN: without “still”, the change disappears.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['termes', 'tension'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a2-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre façons de rater un sujet',
  errors: [
    { wrong: 'Selon le dictionnaire, le loisir est le temps libre. Le sujet est donc réglé.', right: 'Le loisir est hors du travail ; mais est-il encore un temps dont on dispose librement ?',
      why: 'Normal : citer le dictionnaire rassure. Mais une seule définition efface le problème au lieu de le montrer. EN: one definition erases the problem.' },
    { wrong: 'Nos loisirs sont-ils du temps libre ?', right: 'Nos loisirs sont-ils encore du temps libre ?',
      why: 'On lit vite, on saute le petit mot. Or « encore » porte toute la question du changement. EN: the small word carries the question.' },
    { wrong: 'Le travail prend de plus en plus de place dans nos vies.', right: 'Nos loisirs eux-mêmes ressemblent de plus en plus à un emploi du temps.',
      why: 'Le sujet voisin est plus facile, et on y glisse sans le voir. Le sujet parle des loisirs. EN: the neighbouring subject is easier, and off the point.' },
    { wrong: 'Je parlerai des loisirs, des vacances, des voyages et du sport.', right: fr(E(1621)),
      why: 'Vouloir tout dire semble complet. Mais un sujet trop large n’a plus de tension. EN: too broad, and the tension vanishes.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['termes'],
};

const A2_ESSAI = pourTonEssai('a2-essai', 'Les termes de ton sujet', [
  grp('Deux débuts pour la halle', [
    free('Depuis toujours, les hommes aiment les marchés.', 'People have always loved markets.', 'une généralité'),
    free('Préserver, c’est garder ce qui compte : encore faut-il savoir si c’est le bâtiment ou ce qui s’y passe.', 'Preserving means keeping what matters: we still need to know whether that is the building or what happens in it.', 'un mot défini'),
  ], chk('Lequel commence vraiment à répondre ?', ['« depuis toujours, les hommes aiment les marchés »', '« préserver, c’est garder ce qui compte »'], 1,
    'Définir « préserver » fait déjà apparaître deux réponses possibles. EN: defining “preserve” already shows two possible answers.')),
  grp('Ta méthode', [
    it(E(1625), 'garder le sens utile'),
    it(E(1612), 'la règle'),
  ], chk('Dans ton sujet, un mot a deux sens. Tu...', ['gardes celui qui fait apparaître la difficulté', 'choisis le plus simple pour aller vite'], 0,
    'Le sens qui fait problème est celui qui donnera un essai. EN: the meaning that causes trouble gives you an essay.')),
], ['termes', 'tension']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Définir', 'Définir les termes du sujet, c’est...', ['recopier le dictionnaire', 'chercher le sens qui fait problème'], 1,
    'Une définition utile fait apparaître la tension. EN: a useful definition reveals the tension.'),
  ctl('Le petit mot', 'Dans « Faut-il seulement punir ? », quel mot porte le problème ?', ['seulement', 'faut-il', 'punir'], 0,
    '« Seulement » dit qu’on se demande s’il faut faire autre chose aussi. EN: “only” raises what else could be done.'),
  ctl('Délimiter', 'Délimiter le sujet, c’est...', ['dire ce que tu traites et ce que tu laisses', 'parler de tout pour être complet'], 0,
    'Un sujet délimité garde sa tension. EN: a delimited subject keeps its tension.'),
], ['termes']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Les termes du sujet',
    opener: {
      line: 'Un petit mot oublié, « encore », et tout le sujet change : ici tu apprends à définir chaque terme jusqu’à ce que la tension apparaisse. EN: One forgotten small word, “still”, and the whole subject changes: here you learn to define every term until the tension appears.',
      imageRef: 'lessons/dissertation-synthese/act02.jpg',
    },
    sections: [],
    milestone: 'Tu définis chaque mot du sujet, petits mots compris, et tu repères où deux sens se heurtent. EN: You define every word of the subject, small ones included, and find where two meanings clash.',
    estScreens: 34, restPoints: ['a2-termes', 'a2-erreurs'],
  },
  sections: [A2_LECTURE, A2_TERMES, A2_JUGER, A2_ERREURS, A2_ESSAI, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LA TENSION
 *
 *  TEXT: three introductions to « Le confort nous rend-il plus libres ? ».
 *  MOVE: the problématique as a tension or a paradox; not a theme, not a
 *  list of problems, not a yes / no restatement. The spoken formulas are
 *  c1.09’s and are not taught.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a3-lecture', layer: 'core', questionsInModal: true,
  title: 'Trois introductions', frSub: 'Le confort nous rend-il plus libres ?',
  text: TROIS_INTROS_TEXT,
  glossary: [
    { word: 'coupure de courant', en: 'power cut', note: 'Le moment où l’électricité s’arrête.' },
  ],
  questions: [
    { q: 'Devine le sens : « la sédentarité ». Que veut dire ce mot ?', a: 'Le fait de rester assis, de bouger peu.' },
    { q: 'Que reproche Irène à l’introduction A ?', a: 'Sa question appelle oui ou non, et elle appelle « problématique » un simple thème.' },
    { q: 'Et à l’introduction B ?', a: 'Elle confond problématique et problèmes : elle énumère sans rien mettre en tension.' },
    { q: 'Quelles sont les deux idées vraies de l’introduction C ?', a: 'Le confort nous libère du froid, de la faim et de la fatigue ; mais on ne sait plus se passer de ce qui nous libère.' },
    { q: 'À quoi sert la scène de la coupure de courant ?', a: 'À montrer la dépendance par un fait précis, au lieu d’une généralité.' },
    { q: 'Le plan de l’introduction C sort-il de sa problématique ?', a: 'Oui : ce que le confort libère, puis ce qu’il rend dépendant, puis à quelles conditions il reste une liberté.' },
  ],
  audio: REC('rec-c1-10-intros'), say: REFRAME, terms: ['problematique', 'paradoxe'],
};

const A3_TENSION: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a3-tension', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-sujet',
  title: 'La problématique au C1', frSub: 'Une tension mise en question',
  hint: 'Quatre cartes. Cherche les deux idées vraies.',
  audio: AUDIO, say: REFRAME, terms: ['problematique', 'paradoxe'],
  cards: [
    { head: 'Deux idées vraies', label: 'face à face', fr: fr(E(1629)), sub: rsOf(E(1629)),
      body: 'Ni une opinion contre une erreur, ni le sujet recopié : deux idées que tu peux défendre toutes les deux. EN: two ideas you could defend.' },
    { head: 'Le paradoxe', label: 'la tension poussée au bout', fr: fr(E(1628)), sub: rsOf(E(1628)),
      body: 'Ce qui devait produire un effet produit son contraire. C’est la forme la plus forte de la tension. EN: something produces its own opposite.' },
    { head: 'La tension en question', label: 'par écrit', fr: fr(E(1630)), sub: rsOf(E(1630)),
      body: `${Cap(EXPOSE_REF)} t’a donné des formules pour la dire à voix haute. Par écrit, la question tient les deux idées dans la même phrase. EN: in writing, one question holds both ideas.` },
    { head: 'Ni thème, ni problèmes', label: 'les deux confusions', fr: fr(E(1632)), sub: rsOf(E(1632)),
      body: '« La problématique du confort » est un thème ; « le confort pose des problèmes » est une liste. Aucun des deux n’est une tension. EN: a theme or a list is not a tension.' },
  ],
};

const A3_JUGER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-juger', layer: 'core', size: 'lg',
  title: 'Est-ce une problématique ?', frSub: 'Trois questions, puis le B2 et le C1',
  groups: [
    grp('Trois questions sur le confort', [
      it(E(1633), 'oui ou non'),
      it(E(1634), 'un thème'),
      it(E(1631), 'une tension'),
    ], chk('Laquelle est une problématique de C1 ?', ['« bonne ou mauvaise chose »', '« la problématique du confort »', '« sans y perdre sa liberté »'], 2,
      'Elle met en tension profiter du confort et rester libre : deux réponses sérieuses sont possibles. EN: two serious answers are possible.')),
    grp('Au B2, puis au C1', [
      it('fr.b2.opinions-et-avis.1717', 'au B2'),
      it(DE(114), 'une question qui cache un enjeu'),
      it(E(1630), 'au C1'),
    ], chk('Qu’ajoute la question de C1 ?', ['les deux idées qui se heurtent, dans la même phrase', 'un mot plus soutenu'], 0,
      'La question du B2 demande s’il faut généraliser ; celle du C1 dit pourquoi c’est difficile. EN: the C1 question says why it is hard.')),
    ctl('Le test', fr(E(1639)), ['Oui, c’est le signe d’une vraie tension.', 'Non, une bonne question n’a qu’une réponse.'], 0,
      `Si une seule réponse est possible, il n’y a plus rien à déplier. ${REFRAME} EN: one answer only, nothing to unfold.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['problematique', 'tension'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a3-piege', layer: 'core', swipe: true,
  title: 'Six fausses problématiques',
  rule: {
    title: 'Une tension, pas un thème',
    body: 'Une problématique met face à face deux idées vraies, dans une question qui peut recevoir deux réponses sérieuses. Le thème, la liste et la redite n’en sont pas. EN: two true ideas, one question, two serious answers.',
  },
  cards: [
    { promptLabel: 'un thème', promptSound: fr(E(1634)), fr: fr(E(1630)), ipa: ipaOf(E(1630)), tip: 'Un thème annonce un domaine ; la tension dit ce qui résiste. EN: a theme is not a tension.' },
    { promptLabel: 'oui ou non', promptSound: fr(E(1633)), fr: fr(E(1631)), ipa: ipaOf(E(1631)), tip: '« Dans quelle mesure » ouvre une réponse nuancée, si la tension est dite. EN: a nuanced question.' },
    { promptLabel: 'le sujet recopié', promptSound: fr(E(1600)), fr: fr(E(1601)), ipa: ipaOf(E(1601)), tip: 'Deux idées vraies dans la même phrase. EN: two true ideas in one sentence.' },
    { promptLabel: 'un sujet sans le petit mot', promptSound: 'Les loisirs sont-ils du temps libre ?', fr: fr(E(1617)), ipa: ipaOf(E(1617)), tip: 'Le petit mot et les définitions font apparaître la tension. EN: the small word reveals it.' },
    { promptLabel: 'une liste de problèmes', promptSound: fr(E(1635)), fr: fr(E(1628)), ipa: ipaOf(E(1628)), tip: 'Un paradoxe, pas une énumération. EN: a paradox, not a list.' },
    { promptLabel: 'une question sans enjeu', promptSound: 'La halle est-elle ancienne ?', fr: fr(E(1761)), ipa: ipaOf(E(1761)), tip: 'Préserver et figer : deux idées qui tirent en sens contraire. EN: preserving versus freezing.' },
  ],
  drill: [
    { promptSay: 'Une problématique met face à face deux idées ... .', opts: ['vraies', 'fausses'], correct: 0 },
    { promptSay: '« La problématique du confort » est un ... .', opts: ['thème', 'paradoxe'], correct: 0 },
    { promptSay: 'Ce qui devait nous libérer finit par nous attacher : c’est un ... .', opts: ['paradoxe', 'constat', 'exemple'], correct: 0 },
    { promptSay: 'Une bonne question peut recevoir deux réponses ... .', opts: ['sérieuses', 'identiques'], correct: 0 },
    { promptSay: '« Le confort pose de nombreux problèmes » : c’est une ... .', opts: ['liste', 'tension'], correct: 0 },
    { promptSay: 'Sans tension, la question n’a plus besoin d’un ... .', opts: ['essai', 'titre'], correct: 0 },
    { promptSay: 'Une question qui appelle oui ou non est souvent une ... .', opts: ['redite', 'paradoxe', 'transition'], correct: 0 },
    { promptSay: 'Par écrit, la question tient les deux idées dans la même ... .', opts: ['phrase', 'partie'], correct: 0 },
  ],
  steps: PIEGE_STEPS('Ce qui ressemble à une problématique', 'Huit phrases'),
  audio: REC('rec-c1-10-piege-tension'), say: REFRAME, terms: ['problematique', 'paradoxe'],
};

const A3_ESSAI = pourTonEssai('a3-essai', 'Ta problématique', [
  grp('Deux questions pour la halle', [
    free('La halle doit-elle être restaurée ?', 'Should the market hall be restored?', 'oui ou non'),
    it(E(1761), 'une tension'),
  ], chk('Laquelle pourra porter tout ton essai ?', ['« doit-elle être restaurée ? »', '« préserver un lieu sans le figer ? »'], 1,
    'Préserver et figer tirent en sens contraire : ton plan aura quelque chose à déplier. EN: your plan will have something to unfold.')),
  grp('Ton test', [
    it(E(1638), 'sans tension'),
    it(E(1639), 'deux réponses'),
  ], chk('Ta question n’admet qu’une réponse. Tu...', ['la reformules jusqu’à trouver la tension', 'la gardes : elle est claire'], 0,
    'Une question à réponse unique ne demande pas d’essai. EN: a single-answer question needs no essay.')),
], ['problematique', 'tension']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La problématique', 'Au C1, une problématique est...', ['un thème', 'une tension mise en question', 'une liste de problèmes'], 1,
    'Deux idées vraies face à face, formulées en question. EN: a tension put as a question.'),
  ctl('Le paradoxe', '« Ce qui devait nous libérer finit par nous attacher » est...', ['un paradoxe', 'une généralité'], 0,
    'Un effet qui produit son contraire. EN: an effect producing its opposite.'),
  ctl('Le test', 'Une vraie problématique...', ['n’a qu’une réponse possible', 'peut recevoir deux réponses sérieuses'], 1,
    'Sinon, il n’y a rien à déplier. EN: otherwise there is nothing to unfold.'),
], ['problematique']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La tension',
    opener: {
      line: 'Trois introductions pour le même sujet, une seule qui pose un vrai problème : ici tu apprends à faire de ta question une tension. EN: Three introductions to the same subject, only one that sets a real problem: here you learn to turn your question into a tension.',
      imageRef: 'lessons/dissertation-synthese/act03.jpg',
    },
    sections: [],
    milestone: 'Tu formules une problématique qui met face à face deux idées vraies, et tu la distingues d’un thème ou d’une liste. EN: You word a problem question that sets two true ideas face to face, and tell it from a theme or a list.',
    estScreens: 36, restPoints: ['a3-tension', 'a3-piege'],
  },
  sections: [A3_LECTURE, A3_TENSION, A3_JUGER, A3_PIEGE, A3_ESSAI, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LE PLAN ANALYTIQUE
 *
 *  TEXT: Solène’s copy, « Pourquoi les adultes reviennent-ils aux jeux de
 *  société ? ». MOVE: explain before judging: constat, causes ranked from
 *  the most visible to the deepest, enjeux.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a4-lecture', layer: 'core', questionsInModal: true,
  title: 'La copie de Solène', frSub: 'Pourquoi les adultes reviennent aux jeux',
  text: ANALYTIQUE_TEXT,
  glossary: [
    { word: 'faire défiler', en: 'to scroll through', note: 'Faire passer sur un écran, du bout du doigt.' },
  ],
  questions: [
    { q: 'Devine le sens : « ce que la journée de travail n’offre plus guère ». Que veut dire « ne… plus guère » ?', a: 'Presque pas, très peu.' },
    { q: 'Quel est le constat de départ ?', a: 'Le bar à jeux affiche complet trois soirs par semaine, et ce sont des adultes qui empruntent les jeux à la médiathèque.' },
    { q: 'Pourquoi le prix ne suffit-il pas à tout expliquer ?', a: 'Parce que les jeux vidéo sont souvent moins chers encore.' },
    { q: 'Dans quel ordre Solène range-t-elle ses causes ?', a: 'De la plus visible, le prix, à la plus profonde, le besoin d’être ensemble.' },
    { q: 'Que révèle ce retour, selon elle ?', a: 'Un besoin de lien plus qu’un goût du jeu.' },
    { q: 'Solène dit-elle s’il faut s’en réjouir ?', a: 'Non : son analyse explique ; elle laisse le jugement pour plus tard.' },
  ],
  audio: REC('rec-c1-10-analytique'), say: REFRAME, terms: ['analytique'],
};

const A4_PLAN: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a4-plan', layer: 'core', sheetId: 'sheet-plans',
  title: 'Six pièces d’un plan analytique',
  cols: ['Pièce', 'Ce qu’elle fait', 'Chez Solène'],
  rows: [
    { cells: ['le constat', 'pose le phénomène', 'le bar à jeux complet'], say: fr(E(1644)),
      detail: { title: 'Le constat', body: 'Un fait précis, situé, qui appelle une explication. Pas une généralité. EN: a precise fact that calls for an explanation.', say: fr(E(1644)) } },
    { cells: ['la cause visible', 'donne l’explication évidente', 'le prix'], say: fr(E(1647)),
      detail: { title: 'La cause visible', body: 'Tu commences par l’explication que tout le monde voit, puis tu montres ses limites. EN: start with the obvious cause, then show its limits.', say: fr(E(1647)) } },
    { cells: ['la cause profonde', 'va sous la surface', 'le besoin d’être ensemble'], say: fr(E(1645)),
      detail: { title: 'La cause profonde', body: 'Celle qui explique ce que la cause visible n’explique pas. EN: the cause that explains what the visible one cannot.', say: fr(E(1645)) } },
    { cells: ['la hiérarchie', 'range et relie', 'le prix explique l’achat'], say: fr(E(1652)),
      detail: { title: 'Ranger les causes', body: 'Les causes ne se valent pas : dis laquelle compte le plus, et pourquoi. EN: causes are not equal; say which counts most.', say: fr(E(1654)) } },
    { cells: ['l’enjeu', 'dit ce que cela révèle', 'nos solitudes'], say: fr(E(1648)),
      detail: { title: 'L’enjeu', body: 'Ce que le phénomène dit de plus large que lui-même. EN: what the phenomenon says beyond itself.', say: fr(E(1648)) } },
    { cells: ['la limite', 'laisse le jugement', 'faut-il s’en réjouir ?'], say: fr(E(1653)),
      detail: { title: 'Expliquer avant de juger', body: 'L’analyse dit pourquoi. Le jugement, s’il vient, vient après, et il s’appuie sur elle. EN: explanation first, judgement after.', say: fr(E(1653)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['analytique'],
};

const A4_RANGER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-ranger', layer: 'core', size: 'lg',
  title: 'Ranger les causes', frSub: 'Du visible au profond',
  groups: [
    grp('Trois causes du retour des jeux', [
      free('Une boîte de jeu coûte moins qu’une soirée au restaurant.', 'A board game costs less than an evening at a restaurant.', 'le prix'),
      it(E(1646), 'la forme de la partie'),
      it(E(1645), 'les visages'),
    ], chk('Par laquelle commences-tu ?', ['le prix, la plus visible', 'les visages, la plus profonde'], 0,
      'On part de l’évidence pour descendre vers ce qu’elle n’explique pas. EN: from the obvious down to what it cannot explain.')),
    grp('Causes et effets de mode', [
      it(DE(152), 'à l’oral'),
      it(E(1654), 'la règle'),
      it(E(1648), 'la conclusion de Solène'),
    ], chk('Que demande la première phrase ?', ['de séparer ce qui dure de ce qui passe', 'de citer toutes les causes possibles'], 0,
      'Une cause profonde explique la durée ; un effet de mode, un moment. EN: deep causes explain what lasts.')),
    ctl('Le test', 'Un sujet en « pourquoi » appelle d’abord...', ['un jugement', 'une explication', 'une liste d’exemples'], 1,
      'Le plan analytique explique avant de juger. EN: explain before judging.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['analytique'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a4-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre analyses qui n’expliquent rien',
  errors: [
    { wrong: fr(E(1649)), right: 'Le prix explique l’achat ; le besoin d’être ensemble explique le retour.',
      why: 'Normal : aligner des qualités donne l’impression d’avancer. Mais un catalogue ne dit pas pourquoi. EN: a catalogue explains nothing.' },
    { wrong: 'Il y a trois causes : le prix, les visages, les règles.', right: fr(E(1652)),
      why: 'Les causes sont là, mais à plat. Sans ordre, le lecteur ne sait pas laquelle compte. EN: without order, no cause counts more.' },
    { wrong: 'Ce retour des jeux est une excellente nouvelle, et voici pourquoi.', right: fr(E(1653)),
      why: 'Juger d’abord semble plus engagé. Mais un jugement sans analyse ne repose sur rien. EN: judging first rests on nothing.' },
    { wrong: 'Faut-il jouer davantage ? D’abord le constat, puis les causes.', right: 'Faut-il jouer davantage ? D’abord ce que le jeu apporte, puis ses limites.',
      why: 'Le plan analytique est commode, mais un « faut-il » demande de peser, pas seulement d’expliquer. EN: “should we” asks you to weigh.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['analytique'],
};

const A4_ESSAI = pourTonEssai('a4-essai', 'Une partie analytique', [
  grp('Pourquoi la halle s’est vidée', [
    free('La halle est fermée, c’est triste, il faut faire quelque chose.', 'The hall is closed, it is sad, something must be done.', 'un jugement'),
    free('Avant sa fermeture, la moitié des étals étaient vides : il faut d’abord comprendre pourquoi.', 'Before it closed, half the stalls were empty: we must first understand why.', 'un constat qui appelle une analyse'),
  ], chk('Laquelle peut ouvrir une partie de ton essai ?', ['« c’est triste, il faut faire quelque chose »', '« la moitié des étals étaient vides »'], 1,
    'Un fait du dossier, puis ses causes : ta proposition reposera sur une analyse. EN: a fact, then its causes.')),
  grp('Tes causes', [
    it(E(1647), 'pas toutes égales'),
    it(E(1654), 'les relier'),
  ], chk('Tu trouves trois causes au déclin du marché. Tu...', ['les ranges et les relies', 'les cites dans l’ordre où elles te viennent'], 0,
    'Ranger, c’est déjà argumenter. EN: ordering is already arguing.')),
], ['analytique']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le plan', 'Le plan analytique suit l’ordre...', ['constat, causes, enjeux', 'pour, contre, avis', 'passé, présent, avenir'], 0,
    'Il explique un phénomène avant de le juger. EN: facts, causes, stakes.'),
  ctl('Les causes', 'Les causes se rangent...', ['de la plus visible à la plus profonde', 'au hasard'], 0,
    'Tu pars de l’évidence et tu descends. EN: from the obvious down.'),
  ctl('Le sujet', 'Quel sujet appelle le plus naturellement un plan analytique ?', ['Faut-il interdire les jeux d’argent ?', 'Pourquoi les adultes reviennent-ils aux jeux ?'], 1,
    'Un « pourquoi » demande une explication. EN: a “why” asks for an explanation.'),
], ['analytique']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Le plan analytique',
    opener: {
      line: 'Un bar à jeux plein trois soirs par semaine : ici tu apprends à expliquer un phénomène, cause après cause, avant de le juger. EN: A games bar full three evenings a week: here you learn to explain a phenomenon, cause by cause, before judging it.',
      imageRef: 'lessons/dissertation-synthese/act04.jpg',
    },
    sections: [],
    milestone: 'Tu construis un plan analytique : un constat précis, des causes rangées et reliées, un enjeu. EN: You build an analytical plan: a precise fact, causes ranked and linked, a stake.',
    estScreens: 34, restPoints: ['a4-plan', 'a4-erreurs'],
  },
  sections: [A4_LECTURE, A4_PLAN, A4_RANGER, A4_ERREURS, A4_ESSAI, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LE PLAN COMPARATIF
 *
 *  TEXT: Yanis’s copy, « Vivre en ville, vivre à la campagne ». MOVE:
 *  criterion by criterion, similarities then the difference that decides;
 *  the formal comparison links (à l’instar de, au même titre que, à la
 *  différence de, autant… autant).
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a5-lecture', layer: 'core', questionsInModal: true,
  title: 'La copie de Yanis', frSub: 'La ville et la campagne',
  text: COMPARATIF_TEXT,
  glossary: [
    { word: 'bourg', en: 'small market town', note: 'Un gros village, avec ses commerces et sa place.' },
  ],
  questions: [
    { q: 'Devine le sens : « on oppose volontiers ». Que veut dire « volontiers » ici ?', a: 'Souvent, facilement, par habitude.' },
    { q: 'Quelle est la ressemblance de départ ?', a: 'Les uns et les autres disent vivre là pour avoir du temps à soi.' },
    { q: 'Quels sont les trois critères ?', a: 'Le temps, l’espace et les liens.' },
    { q: 'Pourquoi Yanis ne fait-il pas une partie sur la ville et une sur la campagne ?', a: 'Parce que deux blocs juxtaposent ; chaque partie compare les deux sur un critère.' },
    { q: 'Où les deux façons de vivre se séparent-elles vraiment ?', a: 'Par le prix qu’elles font payer : l’une en espace, l’autre en trajets.' },
  ],
  audio: REC('rec-c1-10-comparatif'), say: REFRAME, terms: ['comparatif'],
};

const A5_COMPARER: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-comparer', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-plans',
  title: 'Comparer pour de bon', frSub: 'Quatre gestes de Yanis',
  hint: 'Quatre cartes. Regarde le critère de chaque phrase.',
  audio: AUDIO, say: REFRAME, terms: ['comparatif'],
  cards: [
    { head: 'Critère par critère', label: 'la structure', fr: fr(E(1656)), sub: rsOf(E(1656)),
      body: `${Cap(ARGU_REF)} t’a appris à relier deux points de vue dans une phrase. Ici, c’est tout le plan qui compare : un critère par partie. EN: here the whole plan compares.` },
    { head: 'La ressemblance', label: 'à l’instar de, au même titre que', fr: fr(E(1658)), sub: rsOf(E(1658)),
      body: 'Commence par ce qui rapproche : la différence n’en sera que plus nette. EN: start with what brings them together.' },
    { head: 'La différence qui décide', label: 'à la différence de', fr: fr(E(1659)), sub: rsOf(E(1659)),
      body: 'Toutes les différences ne comptent pas. Garde celle qui répond à ta problématique. EN: keep the difference that answers your question.' },
    { head: 'Deux faces d’une même chose', label: 'autant… autant', fr: fr(E(1661)), sub: rsOf(E(1661)),
      body: '« Autant… autant » tient deux vérités dans une seule phrase, comme une tension. EN: two truths in one sentence.' },
  ],
};

const A5_JUGER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-juger', layer: 'core', size: 'lg',
  title: 'Comparer ou juxtaposer', frSub: 'Deux plans, puis les liens',
  groups: [
    grp('Deux plans pour le même sujet', [
      it(E(1664), 'deux blocs'),
      free('Le temps, l’espace, les liens : chaque partie compare la ville et la campagne.', 'Time, space, connections: each part compares town and country.', 'trois critères'),
    ], chk('Lequel compare vraiment ?', ['les deux blocs', 'les trois critères'], 1,
      'Chaque partie met les deux réalités face à face. EN: each part sets both realities side by side.')),
    grp('Les liens de la comparaison', [
      it(E(1660), 'à l’instar de'),
      it(E(1662), 'au même titre que'),
      it('fr.b2.opinions-et-avis.1745', 'au B2'),
    ], chk('« À l’instar de » et « au même titre que » soulignent...', ['une ressemblance', 'une opposition'], 0,
      'Pour opposer, on écrit « à la différence de » ou « là où ». EN: for contrast, use other links.')),
    ctl('Le test', 'Ta comparaison relève dix différences. Tu gardes...', ['toutes, pour être complet', 'celle qui répond à ta problématique'], 1,
      fr(E(1666)) + ' EN: find where they truly part.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['comparatif'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a5-piege', layer: 'core', swipe: true,
  title: 'Six comparaisons qui boitent',
  rule: {
    title: 'Le même critère des deux côtés',
    body: 'Une comparaison met deux réalités face à face sur un même critère, avec le lien juste : ressemblance ou différence. EN: same criterion on both sides, with the right link.',
  },
  cards: [
    { promptLabel: 'à l’instar de pour opposer', promptSound: 'À l’instar de la ville, la campagne est calme.', fr: fr(E(1660)), ipa: ipaOf(E(1660)), tip: '« À l’instar de » dit « comme ». Pour opposer, « à la différence de ». EN: it means “like”.' },
    { promptLabel: 'au même titre que pour opposer', promptSound: 'Au même titre que la rue est bruyante, la place est calme.', fr: fr(E(1662)), ipa: ipaOf(E(1662)), tip: '« Au même titre que » met deux choses sur le même plan. EN: it puts two things on a par.' },
    { promptLabel: 'autant sans son double', promptSound: 'Autant la ville rapproche les gens, mais elle les presse.', fr: fr(E(1661)), ipa: ipaOf(E(1661)), tip: '« Autant… autant » : les deux moitiés, sans « mais ». EN: both halves, no “mais”.' },
    { promptLabel: 'deux blocs', promptSound: fr(E(1664)), fr: fr(E(1656)), ipa: ipaOf(E(1656)), tip: 'Un critère par partie, les deux réalités dans chaque partie. EN: one criterion per part.' },
    { promptLabel: 'une ressemblance floue', promptSound: 'La ville et la campagne sont un peu pareilles.', fr: fr(E(1658)), ipa: ipaOf(E(1658)), tip: 'Dis sur quoi elles se ressemblent. EN: say on what point.' },
    { promptLabel: 'une différence qui ne décide rien', promptSound: 'La ville a des trottoirs, la campagne a des chemins.', fr: fr(E(1659)), ipa: ipaOf(E(1659)), tip: 'Une différence qui touche ta question : le temps et l’espace. EN: a difference that matters.' },
  ],
  drill: [
    { promptSay: '... la ville, la campagne a ses embouteillages.', opts: ['À l’instar de', 'À la différence de'], correct: 0 },
    { promptSay: '... du citadin, le rural gagne de l’espace.', opts: ['À la différence', 'À l’instar'], correct: 0 },
    { promptSay: 'Autant la ville rapproche les gens, ... elle les presse.', opts: ['autant', 'mais', 'donc'], correct: 0 },
    { promptSay: 'Au même ... que le jardin, la place est un espace partagé.', opts: ['titre', 'point'], correct: 0 },
    { promptSay: 'Un plan comparatif avance critère par ... .', opts: ['critère', 'bloc'], correct: 0 },
    { promptSay: 'D’abord les ressemblances, puis la différence qui ... .', opts: ['décide', 'amuse'], correct: 0 },
    { promptSay: 'Une partie sur la ville puis une partie sur la campagne : c’est une ... .', opts: ['juxtaposition', 'comparaison'], correct: 0 },
    { promptSay: 'Comparer, c’est chercher où deux réalités se séparent ... .', opts: ['vraiment', 'jamais', 'parfois'], correct: 0 },
  ],
  steps: PIEGE_STEPS('Ce qu’une comparaison pressée écrit', 'Huit phrases'),
  audio: REC('rec-c1-10-piege-comparatif'), say: REFRAME, terms: ['comparatif'],
};

const A5_ESSAI = pourTonEssai('a5-essai', 'Comparer les deux projets', [
  grp('Deux façons de comparer les projets de la halle', [
    free('D’abord la restauration, ses atouts et ses défauts ; ensuite la transformation, ses atouts et ses défauts.', 'First the restoration, its strengths and weaknesses; then the transformation, its strengths and weaknesses.', 'deux blocs'),
    free('Le coût, la vie du marché, la mémoire du lieu : sur chaque point, les deux projets face à face.', 'Cost, the life of the market, the memory of the place: on each point, the two projects side by side.', 'trois critères'),
  ], chk('Laquelle t’aide à choisir ?', ['les deux blocs', 'les trois critères'], 1,
    'Sur chaque critère, le lecteur voit où les projets se séparent. EN: on each criterion, the reader sees where they part.')),
  grp('Tes liens', [
    it(E(1665), 'l’ordre'),
    it(E(1661), 'deux vérités'),
  ], chk('Les deux projets gardent le marché du matin. Tu l’écris comment ?', ['« À l’instar de la restauration, la transformation garde le marché du matin. »', '« À la différence de la restauration, la transformation garde le marché du matin. »'], 0,
    'C’est une ressemblance : « à l’instar de ». EN: a similarity.')),
], ['comparatif']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La structure', 'Un plan comparatif avance...', ['critère par critère', 'une réalité après l’autre'], 0,
    'Deux blocs juxtaposent ; les critères comparent. EN: criteria compare, blocks juxtapose.'),
  ctl('Le lien', '« À l’instar de » signifie...', ['comme', 'contrairement à', 'à cause de'], 0,
    'Il introduit une ressemblance. EN: it introduces a similarity.'),
  ctl('La fin', 'La conclusion d’une comparaison dit...', ['où les deux réalités se séparent vraiment', 'que tout est relatif'], 0,
    'Elle tranche la comparaison sur le point qui compte. EN: it settles the comparison.'),
], ['comparatif']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le plan comparatif',
    opener: {
      line: 'La ville et la campagne cherchent peut-être la même chose : ici tu apprends à comparer critère par critère, jusqu’au point où elles se séparent. EN: Town and country may be looking for the same thing: here you learn to compare criterion by criterion, down to where they part.',
      imageRef: 'lessons/dissertation-synthese/act05.jpg',
    },
    sections: [],
    milestone: 'Tu compares deux réalités critère par critère, avec le lien juste, et tu dis où elles se séparent. EN: You compare two realities criterion by criterion, with the right link, and say where they part.',
    estScreens: 36, restPoints: ['a5-comparer', 'a5-piege'],
  },
  sections: [A5_LECTURE, A5_COMPARER, A5_JUGER, A5_PIEGE, A5_ESSAI, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — CHOISIR SON PLAN
 *
 *  TEXT: a tutorial heard once (one-take listening): one subject, three
 *  students, three problématiques. MOVE: the problématique chooses the plan,
 *  not the surface of the subject (past b2.23’s « pour ou contre :
 *  dialectique »); the third part goes beyond instead of averaging.
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE EAR MISSION: one take, the tutorial as it would sound in class. */
const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a6-ecoute', layer: 'core', hideLines: true,
  title: 'Trois plans pour un sujet', frSub: 'Le tutorat du jeudi, une seule écoute',
  lines: [ln(E(1669)), ln(E(1670)), ln(E(1671)), ln(E(1672)), ln(E(1673)), ln(E(1674)), ln(E(1675)), ln(E(1676)), ln(E(1677)), ln(E(1678)), ln(E(1679)), ln(E(1680))],
  questions: [
    { q: 'Que reproche Irène à la troisième partie de Karim ?', opts: ['C’est un compromis, pas une tension.', 'Elle est trop longue.', 'Elle sort du sujet.'], correct: 0,
      why: '« Un peu des deux » fait la moyenne au lieu de dépasser l’opposition. EN: an average, not a step beyond.' },
    { q: 'Quel plan convient à la question de Solène ?', opts: ['un plan analytique', 'un plan comparatif'], correct: 0,
      why: 'Elle demande pourquoi l’ennui fait peur : il faut expliquer. EN: a “why” question.' },
    { q: 'Qu’a trouvé Yanis ?', opts: ['un paradoxe : l’ennui pèse, et les idées en naissent', 'une liste de causes'], correct: 0,
      why: 'Deux idées vraies qui se contredisent en apparence. EN: two true ideas in apparent contradiction.' },
    { q: 'Que fait la troisième partie de Yanis ?', opts: ['Elle cherche à quelles conditions l’ennui produit quelque chose.', 'Elle répète la première partie.', 'Elle donne son avis personnel.'], correct: 0,
      why: 'Elle dépasse les deux premières au lieu de les couper en deux. EN: it goes beyond the first two.' },
    { q: 'Selon Irène, qui choisit le plan ?', opts: ['la problématique', 'le premier mot du sujet'], correct: 0,
      why: 'Un « faut-il » n’impose pas un plan ; ta question, si. EN: your question decides.' },
  ],
  audio: REC('rec-c1-10-tutorat'), say: REFRAME, terms: ['problematique', 'tension'],
};

const A6_CHOIX: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a6-choix', layer: 'core', sheetId: 'sheet-plans',
  title: 'Ta problématique choisit le plan',
  cols: ['Ta problématique', 'Le plan', 'Les parties'],
  rows: [
    { cells: ['deux thèses qui s’affrontent', 'dialectique', 'l’une, l’autre, le dépassement'], say: fr(E(1682)),
      detail: { title: 'Le dialectique, au C1', body: 'La troisième partie ne fait pas la moyenne : elle dépasse l’opposition, souvent en disant à quelles conditions chaque thèse vaut. EN: the third part goes beyond, often by stating conditions.', say: fr(E(1682)) } },
    { cells: ['un phénomène à expliquer', 'analytique', 'constat, causes, enjeux'], say: fr(E(1642)),
      detail: { title: 'Pourquoi, comment l’expliquer', body: 'Tu expliques avant de juger, causes rangées. EN: explain, causes ranked.', say: fr(E(1643)) } },
    { cells: ['deux réalités à confronter', 'comparatif', 'un critère par partie'], say: fr(E(1656)),
      detail: { title: 'X et Y', body: 'Les mêmes critères des deux côtés, puis la différence qui décide. EN: same criteria, then the deciding difference.', say: fr(E(1665)) } },
    { cells: ['les aspects d’une question', 'thématique', 'un aspect par partie'], say: fr('fr.b2.opinions-et-avis.1731'),
      detail: { title: 'En quoi, quels effets', body: 'Chaque partie traite un aspect, et chacun répond à la même question. EN: one aspect per part, each answering the question.', say: fr(E(1684)) } },
    { cells: ['un paradoxe', 'un plan qui déplie', 'le coût, le gain, les conditions'], say: fr(E(1677)),
      detail: { title: 'Déplier un paradoxe', body: 'Ce que la chose coûte, ce qu’elle produit, puis à quelles conditions la tension se dénoue. EN: cost, gain, conditions.', say: fr(E(1678)) } },
    { cells: ['un « faut-il » sans tension', 'aucun encore', 'reformule d’abord'], say: fr(E(1681)),
      detail: { title: 'Pas de tension, pas de plan', body: 'Si ta question n’a qu’une réponse, reviens aux termes du sujet avant de choisir. EN: no tension, back to the terms.', say: fr(E(1686)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['problematique', 'analytique'],
};

const A6_JUGER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-juger', layer: 'core', size: 'lg',
  title: 'Quel plan pour quelle question ?', frSub: 'La règle du B2, puis celle du C1',
  groups: [
    grp('Au B2, puis au C1', [
      it('fr.b2.opinions-et-avis.1730', 'au B2'),
      it('fr.b2.opinions-et-avis.1732', 'la règle du B2'),
      it(E(1681), 'la règle du C1'),
    ], chk('Au C1, une question en « faut-il »...', ['appelle toujours un plan dialectique', 'appelle le plan que sa tension demande'], 1,
      'La règle du B2 reste un bon réflexe ; au C1, tu regardes d’abord ta problématique. EN: at C1, look at your question first.')),
    grp('Trois problématiques sur l’ennui', [
      free('Pourquoi l’ennui fait-il si peur aujourd’hui ?', 'Why is boredom so frightening today?', 'une explication'),
      free('L’ennui des enfants et celui des adultes sont-ils le même ennui ?', 'Are children’s boredom and adults’ boredom the same?', 'deux réalités'),
      free('Comment l’ennui, qui nous pèse, peut-il faire naître des idées ?', 'How can boredom, which weighs on us, give rise to ideas?', 'un paradoxe'),
    ], chk('La deuxième appelle un plan...', ['comparatif', 'analytique', 'thématique'], 0,
      'Deux réalités à confronter, sur les mêmes critères. EN: two realities on the same criteria.')),
    ctl('Le test', fr(E(1684)), ['Oui : sinon la partie est hors de la question.', 'Non : une partie peut parler d’autre chose.'], 0,
      'Une partie qui ne répond pas à la problématique répond à une autre question. EN: otherwise it answers another question.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['problematique', 'comparatif'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a6-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre plans mal choisis',
  errors: [
    { wrong: fr(E(1685)), right: fr(E(1682)),
      why: 'Normal : la moyenne paraît sage. Mais « un peu des deux » efface la tension au lieu de la dépasser. EN: the average erases the tension.' },
    { wrong: 'Faut-il avoir peur de l’ennui ? Oui ; non ; ça dépend.', right: 'L’ennui pèse ; il fait aussi naître des idées ; à quelles conditions ?',
      why: 'Le « faut-il » pousse au plan oui, non. Le paradoxe trouvé demande un plan qui le déplie. EN: the paradox needs a plan that unfolds it.' },
    { wrong: 'Problématique : pourquoi l’ennui fait-il peur ? Plan : pour, contre, avis.', right: 'Problématique : pourquoi l’ennui fait-il peur ? Plan : constat, causes, enjeux.',
      why: 'On garde le plan qu’on connaît. Mais il répond à une autre question que la sienne. EN: the plan answers another question.' },
    { wrong: 'Partie 1 : l’ennui est utile. Partie 2 : l’ennui sert à quelque chose.', right: 'Partie 1 : ce que l’ennui coûte. Partie 2 : ce qu’il produit.',
      why: 'Deux titres différents peuvent cacher la même idée. Chaque partie doit avancer. EN: each part must move forward.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['problematique'],
};

const A6_ESSAI = pourTonEssai('a6-essai', 'Le plan de ton essai', [
  grp('Deux plans pour la halle', [
    free('Partie 1 : la restauration. Partie 2 : la transformation. Partie 3 : un peu des deux.', 'Part 1: restoration. Part 2: transformation. Part 3: a bit of both.', 'la moyenne'),
    free('Partie 1 : ce qu’il faut préserver. Partie 2 : ce qui menace un lieu figé. Partie 3 : à quelles conditions préserver sans figer.', 'Part 1: what must be preserved. Part 2: what threatens a frozen place. Part 3: under what conditions to preserve without freezing.', 'le dépassement'),
  ], chk('Lequel déplie ta problématique ?', ['la moyenne', 'le dépassement'], 1,
    'Sa troisième partie cherche les conditions qui dénouent la tension. EN: it finds the conditions that resolve the tension.')),
  grp('Ta vérification', [
    it(E(1686), 'la bonne question'),
    it(E(1684), 'chaque partie'),
  ], chk('Une de tes parties ne répond pas à ta problématique. Tu...', ['la changes ou la supprimes', 'la gardes, elle est intéressante'], 0,
    'Intéressante ou non, elle répond à une autre question. EN: it answers another question.')),
], ['problematique', 'tension']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le choix', 'Qui choisit le plan ?', ['le premier mot du sujet', 'la problématique'], 1,
    'C’est la forme de ta tension qui décide. EN: the shape of your tension decides.'),
  ctl('Le dépassement', 'Au C1, la troisième partie d’un plan dialectique...', ['fait la moyenne des deux premières', 'dépasse l’opposition', 'répète la thèse'], 1,
    'Souvent, elle dit à quelles conditions chaque thèse vaut. EN: it often states conditions.'),
  ctl('Le paradoxe', 'Un paradoxe se traite...', ['en le dépliant', 'en le coupant en deux'], 0,
    'Le coût, le gain, puis les conditions. EN: cost, gain, conditions.'),
], ['problematique']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Choisir son plan',
    opener: {
      line: 'Un même sujet, trois étudiants, trois plans : ici tu apprends que ce n’est pas le sujet qui choisit le plan, mais ta problématique. EN: One subject, three students, three plans: here you learn that it is not the subject that chooses the plan, but your problem question.',
      imageRef: 'lessons/dissertation-synthese/act06.jpg',
    },
    sections: [],
    milestone: 'Tu choisis ton plan à partir de ta problématique, et ta troisième partie dépasse au lieu de faire la moyenne. EN: You choose your plan from your problem question, and your third part goes beyond instead of averaging.',
    estScreens: 34, restPoints: ['a6-choix', 'a6-erreurs'],
  },
  sections: [A6_ECOUTE, A6_CHOIX, A6_JUGER, A6_ERREURS, A6_ESSAI, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LES TRANSITIONS-BILAN
 *
 *  TEXT: the model development of « Le confort nous rend-il plus libres ? »
 *  with its two transitions, and the empty ones of the first draft. MOVE:
 *  sum up what the part established, then the limit or question that forces
 *  the next part (past b2.23’s « Après avoir vu…, examinons… »).
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a7-lecture', layer: 'core', questionsInModal: true,
  title: 'Le développement modèle', frSub: 'Le confort, en trois parties',
  text: TRANSITIONS_TEXT,
  glossary: [
    { word: 'contrepartie', en: 'price, other side of the deal', note: 'Ce qu’on paie, ou ce qu’on perd, en échange d’un avantage.' },
  ],
  questions: [
    { q: 'Devine le sens : « paralyser un immeuble ». Que veut dire « paralyser » ici ?', a: 'Empêcher de fonctionner, bloquer complètement.' },
    { q: 'Que dit la dernière phrase de la première partie ?', a: 'Ce que la partie a établi, la libération, puis la question qui relance : à quel prix.' },
    { q: 'Comment la deuxième partie commence-t-elle ?', a: 'Par la contrepartie que la première partie laissait dans l’ombre : elle annonce ce qu’elle ajoute.' },
    { q: 'Que fait la phrase « Si le confort libère le corps, il n’est pas certain qu’il libère l’esprit » ?', a: 'Elle concède la première partie et ouvre la limite que la suite va examiner.' },
    { q: 'Qu’avaient de faible les transitions du brouillon ?', a: 'Elles changeaient de sujet sans dire ce qui avait été établi, ni pourquoi aller plus loin.' },
  ],
  audio: REC('rec-c1-10-transitions'), say: REFRAME, terms: ['transition'],
};

const A7_LIENS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a7-liens', layer: 'core', sheetId: 'sheet-liens',
  title: 'Six transitions qui résument et relancent',
  cols: ['Le mouvement', 'Ce qu’il fait', 'La forme'],
  rows: [
    { cells: ['bilan, puis question', 'ferme et rouvre', 'donc… ; reste à savoir'], say: fr(E(1691)),
      detail: { title: 'Le bilan qui interroge', body: 'Tu dis ce que la partie a établi, puis la question qu’elle laisse. EN: what was established, then the open question.', say: fr(E(1691)) } },
    { cells: ['concession, puis limite', 'garde l’acquis, ouvre la faille', 'si… , il n’est pas certain que'], say: fr(E(1692)),
      detail: { title: 'Concéder pour avancer', body: 'Tu accordes ce que la partie a montré, et tu nommes ce qu’elle n’a pas réglé. EN: grant the point, name what remains.', say: fr(E(1692)) } },
    { cells: ['la contrepartie', 'montre l’ombre de l’acquis', 'pourtant, une contrepartie'], say: fr(E(1693)),
      detail: { title: 'La contrepartie', body: 'Le début de la partie suivante dit ce que la précédente laissait dans l’ombre. EN: the next part names what the last left out.', say: fr(E(1693)) } },
    { cells: ['une fois établi', 'passe de ce qu’on gagne à ce qu’on perd', 'une fois établi…, il faut'], say: fr(E(1694)),
      detail: { title: 'L’étape suivante', body: 'Une construction qui rappelle l’acquis et impose la suite. EN: recall the gain, impose the next step.', say: fr(E(1694)) } },
    { cells: ['l’approfondissement', 'creuse au lieu de changer', 'ce premier constat appelle'], say: fr(E(1695)),
      detail: { title: 'Aller plus loin', body: 'La partie suivante ne change pas de sujet : elle creuse le même. EN: dig deeper, do not switch.', say: fr(E(1695)) } },
    { cells: ['la conclusion partielle', 'tire la leçon de la partie', 'la dernière phrase'], say: fr(E(1697)),
      detail: { title: 'Fermer une partie', body: 'Une phrase qui dit ce qu’on retient. Elle sert de premier temps à la transition. EN: the lesson of the part, first half of the transition.', say: fr(E(1697)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['transition'],
};

const A7_JUGER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-juger', layer: 'core', size: 'lg',
  title: 'Annoncer ou relier', frSub: 'Le B2, le C1, puis trois transitions vides',
  groups: [
    grp('Au B2, puis au C1', [
      it('fr.b2.opinions-et-avis.1735', 'au B2'),
      it('fr.b2.universite.1036', 'au B2'),
      it(E(1691), 'au C1'),
    ], chk('Qu’a de plus la transition de C1 ?', ['ce que la partie a établi, et la question qui oblige à continuer', 'un connecteur plus rare'], 0,
      'Au B2, la transition rappelait le thème traité et annonçait le suivant. Au C1, elle dit ce que la partie a établi, puis pourquoi il faut continuer. EN: at C1 it states what was established, then why go on.')),
    grp('Trois transitions faibles', [
      it(E(1690), 'le brouillon'),
      it(E(1700), 'le brouillon'),
      it(DE(96), 'à l’oral'),
    ], chk('Leur défaut commun :', ['elles ne disent pas ce que la partie a établi', 'elles sont trop longues'], 0,
      'Le lecteur passe à la suite sans savoir pourquoi. EN: the reader moves on without knowing why.')),
    ctl('Le test', fr(E(1699)), ['Oui : sans lien, la partie suivante tombe du ciel.', 'Non : un simple « ensuite » suffit.'], 0,
      'Limite, objection ou approfondissement : le lecteur doit voir pourquoi la suite arrive. EN: the reader must see why.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['transition'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a7-piege', layer: 'core', swipe: true,
  title: 'Six transitions vides',
  rule: {
    title: 'Résumer, puis relancer',
    body: 'Une transition dit ce que la partie a établi, puis la limite ou la question qui oblige à aller plus loin. Annoncer seulement ne suffit pas. EN: say what was established, then why go further.',
  },
  cards: [
    { promptLabel: 'une annonce nue', promptSound: fr(E(1690)), fr: fr(E(1691)), ipa: ipaOf(E(1691)), tip: 'Le bilan d’abord, puis la question qui relance. EN: summary, then the question.' },
    { promptLabel: 'un changement de sujet', promptSound: fr(E(1700)), fr: fr(E(1694)), ipa: ipaOf(E(1694)), tip: 'Ce qu’on gagne, puis ce qu’on perd : le même sujet, creusé. EN: same subject, dug deeper.' },
    { promptLabel: 'un « ensuite » qui ne dit rien', promptSound: 'Ensuite, nous verrons les inconvénients.', fr: fr(E(1693)), ipa: ipaOf(E(1693)), tip: 'Dis la contrepartie que la partie laissait dans l’ombre. EN: name the hidden cost.' },
    { promptLabel: 'une contradiction brutale', promptSound: 'Mais en fait, le confort ne libère pas.', fr: fr(E(1692)), ipa: ipaOf(E(1692)), tip: 'Concède ce qui a été établi, puis ouvre la limite. EN: concede, then open the limit.' },
    { promptLabel: 'une partie sans fin', promptSound: 'Voilà pour la première partie.', fr: fr(E(1697)), ipa: ipaOf(E(1697)), tip: 'Une conclusion partielle tire la leçon. EN: a partial conclusion draws the lesson.' },
    { promptLabel: 'un pont sans raison', promptSound: 'Il y a aussi un autre aspect.', fr: fr(E(1695)), ipa: ipaOf(E(1695)), tip: 'Dis pourquoi cet aspect s’impose maintenant. EN: say why it comes now.' },
  ],
  drill: [
    { promptSay: 'Une bonne transition résume, puis ... .', opts: ['relance', 'répète'], correct: 0 },
    { promptSay: 'Le confort nous a donc libérés ; reste à savoir à quel ... .', opts: ['prix', 'moment'], correct: 0 },
    { promptSay: '... le confort libère le corps, il n’est pas certain qu’il libère l’esprit.', opts: ['Si', 'Comme', 'Car'], correct: 0 },
    { promptSay: 'Cette liberté a pourtant une ... .', opts: ['contrepartie', 'conclusion'], correct: 0 },
    { promptSay: 'Une fois ... ce que le confort donne, il faut mesurer ce qu’il prend.', opts: ['établi', 'oublié'], correct: 0 },
    { promptSay: '« Passons maintenant à la deuxième partie » ne dit pas ce qui a été ... .', opts: ['établi', 'écrit', 'lu'], correct: 0 },
    { promptSay: 'Chaque partie s’achève sur une conclusion ... .', opts: ['partielle', 'générale'], correct: 0 },
    { promptSay: 'Une transition qui n’annonce rien laisse le lecteur au milieu du ... .', opts: ['gué', 'texte'], correct: 0 },
  ],
  steps: PIEGE_STEPS('Ce que le brouillon écrivait', 'Huit phrases'),
  audio: REC('rec-c1-10-piege-transitions'), say: REFRAME, terms: ['transition'],
};

const A7_ESSAI = pourTonEssai('a7-essai', 'Tes transitions', [
  grp('Deux transitions pour la halle', [
    free('Passons maintenant au second projet.', 'Let us now turn to the second project.', 'une annonce'),
    free('Restaurer protège donc la mémoire du lieu ; encore faut-il que ce lieu reste habité.', 'So restoring protects the memory of the place; that place must still be lived in.', 'un bilan qui relance'),
  ], chk('Laquelle relie vraiment tes parties ?', ['« passons au second projet »', '« encore faut-il que ce lieu reste habité »'], 1,
    'Elle garde l’acquis et nomme ce qui manque. EN: it keeps the gain and names what is missing.')),
  grp('Ta règle', [
    it(E(1688), 'ce qu’elle dit'),
    it(E(1697), 'la fin de chaque partie'),
  ], chk('Ta première partie s’arrête sur un exemple. Tu ajoutes...', ['une phrase qui tire la leçon, puis la relance', 'un deuxième exemple'], 0,
    'La conclusion partielle, puis la transition. EN: the partial conclusion, then the transition.')),
], ['transition']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La transition', 'Une transition-bilan dit...', ['ce que la partie a établi, puis pourquoi continuer', 'seulement ce qui vient ensuite'], 0,
    'Elle résume, puis relance. EN: it sums up, then moves on.'),
  ctl('Le lien', 'Une transition montre un lien. Lequel n’en est pas un ?', ['une limite', 'une objection', 'un changement de sujet'], 2,
    'Changer de sujet, c’est rompre le fil. EN: switching subject breaks the thread.'),
  ctl('La fin de partie', 'La dernière phrase d’une partie...', ['tire la leçon de la partie', 'annonce la conclusion'], 0,
    'C’est la conclusion partielle. EN: the partial conclusion.'),
], ['transition']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Les transitions-bilan',
    opener: {
      line: 'Entre deux parties, une phrase qui dit ce qu’on a gagné et ce qu’il reste à comprendre : ici tu apprends la transition qui résume, puis relance. EN: Between two parts, a sentence that says what was gained and what remains to understand: here you learn the transition that sums up, then moves on.',
      imageRef: 'lessons/dissertation-synthese/act07.jpg',
    },
    sections: [],
    milestone: 'Tu fermes chaque partie sur sa leçon, et tu ouvres la suivante par la limite ou la question qui l’impose. EN: You close each part on its lesson and open the next with the limit or question that calls for it.',
    estScreens: 36, restPoints: ['a7-liens', 'a7-piege'],
  },
  sections: [A7_LECTURE, A7_LIENS, A7_JUGER, A7_PIEGE, A7_ESSAI, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — CONCLURE ET OUVRIR
 *
 *  TEXT: three conclusions to the same essay. MOVE: the summary of the path,
 *  the answer that keeps the tension, the ouverture the answer earns
 *  (prolonger, déplacer, élargir). Closure markers are c1.07’s, cited.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a8-lecture', layer: 'core', questionsInModal: true,
  title: 'Trois conclusions', frSub: 'Pour la même copie sur le confort',
  text: CONCLUSIONS_TEXT,
  glossary: [
    { word: 'juxtaposer', en: 'to set side by side', note: 'Mettre l’un à côté de l’autre, sans lien.' },
  ],
  questions: [
    { q: 'Devine le sens : « la moindre panne ». Que veut dire « la moindre » ?', a: 'La plus petite : même une petite panne suffit.' },
    { q: 'Quelle faute fait la conclusion A au milieu ?', a: 'Elle ajoute un argument nouveau : le coût du confort.' },
    { q: 'Pourquoi la réponse de la conclusion B ne suffit-elle pas ?', a: 'Elle juxtapose les deux parties, liberté et dépendance, sans répondre à la question.' },
    { q: 'Que répond la conclusion C ?', a: 'Que le confort ne nous rend libres que si nous restons capables de nous en passer.' },
    { q: 'D’où vient son ouverture ?', a: 'De sa propre réponse : si l’on doit savoir se passer du confort, peut-on l’apprendre aux enfants ?' },
  ],
  audio: REC('rec-c1-10-conclusions'), say: REFRAME, terms: ['ouverture'],
};

const A8_CONCLURE: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a8-conclure', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-liens',
  title: 'Une conclusion qui répond', frSub: 'Le bilan, la réponse, l’ouverture',
  hint: 'Quatre cartes. Demande-toi d’où vient chaque phrase.',
  audio: AUDIO, say: REFRAME, terms: ['ouverture', 'tension'],
  cards: [
    { head: 'Le bilan', label: 'le chemin parcouru', fr: fr(E(1710)), sub: rsOf(E(1710)),
      body: `${Cap(ARGU_REF)} t’a donné le bilan et la réponse. Pour les mots qui ferment un texte, ${REFORMULER_REF} les a déjà rangés. Ici, l’essentiel : ce que tu réponds. EN: here, what you answer matters.` },
    { head: 'La réponse qui garde la tension', label: 'ni un camp, ni la moyenne', fr: fr(E(1702)), sub: rsOf(E(1702)),
      body: 'La réponse tient les deux idées : le confort libère, à une condition. EN: the answer holds both ideas, under a condition.' },
    { head: 'Prolonger', label: 'une question née de la réponse', fr: fr(E(1706)), sub: rsOf(E(1706)),
      body: 'La meilleure ouverture sort de ta réponse : si l’on doit savoir se passer du confort, qui l’apprend ? EN: the best opening comes out of your answer.' },
    { head: 'Déplacer, élargir', label: 'une autre échelle, un autre domaine', fr: fr(E(1708)), sub: rsOf(E(1708)),
      body: 'Tu peux aussi porter la question ailleurs : les villes, le numérique. Jamais un nouvel argument. EN: carry the question elsewhere, never a new argument.' },
  ],
};

const A8_JUGER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-juger', layer: 'core', size: 'lg',
  title: 'Une fin qui ouvre ?', frSub: 'Trois fins creuses, trois ouvertures',
  groups: [
    grp('Trois fins', [
      it(E(1704), 'la conclusion A'),
      it(E(1705), 'la conclusion B'),
      it(DE(36), 'à l’oral'),
    ], chk('Leur défaut commun :', ['elles n’ouvrent aucune question que la réponse ait fait naître', 'elles sont trop savantes'], 0,
      'Une formule qui sert partout n’ouvre rien en particulier. EN: a formula that fits anywhere opens nothing.')),
    grp('Trois ouvertures', [
      it(E(1706), 'prolonger'),
      it(E(1707), 'déplacer'),
      it(E(1708), 'élargir'),
    ], chk('Laquelle porte la question à une autre échelle ?', ['les villes et leurs services', 'l’inconfort appris aux enfants', 'le numérique'], 0,
      'Du logement à la ville : la même question, plus grande. EN: the same question, on a bigger scale.')),
    ctl('Le test', fr(E(1711)), ['Oui : l’argument nouveau rouvre le débat, la question l’élargit.', 'Non : un dernier argument renforce la fin.'], 0,
      'Un argument dans la conclusion aurait dû être dans le développement. EN: an argument belongs in the body.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['ouverture'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a8-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre conclusions qui déçoivent',
  errors: [
    { wrong: fr(E(1712)), right: fr(E(1710)),
      why: 'Normal : on garde une idée pour la fin. Mais un argument nouveau rouvre ce que la conclusion devait fermer. EN: a new argument reopens the debate.' },
    { wrong: fr(E(1705)), right: fr(E(1706)),
      why: 'La formule sonne bien et sert partout. Une ouverture doit naître de ta réponse. EN: an opening must come from your answer.' },
    { wrong: 'Le confort est donc une liberté, mais aussi une dépendance.', right: fr(E(1702)),
      why: 'Juxtaposer les deux parties semble équilibré. Mais la réponse doit dire comment elles tiennent ensemble. EN: say how the two hold together.' },
    { wrong: 'Le confort nous rend donc dépendants, un point c’est tout.', right: 'Le confort a élargi nos libertés, mais il a créé des dépendances que la moindre panne révèle.',
      why: 'Choisir un camp paraît net. Mais oublier la première partie, c’est effacer la tension. EN: forgetting one part erases the tension.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['ouverture', 'tension'],
};

const A8_ESSAI = pourTonEssai('a8-essai', 'Ta conclusion', [
  grp('Deux fins pour ta lettre', [
    free('Seul l’avenir dira qui avait raison.', 'Only the future will say who was right.', 'une formule'),
    free('Reste à savoir si d’autres halles de la région, fermées elles aussi, pourraient suivre le même chemin.', 'It remains to be seen whether other halls in the region, also closed, could follow the same path.', 'une question qui déplace'),
  ], chk('Laquelle ouvre vraiment ?', ['« seul l’avenir dira »', '« d’autres halles de la région »'], 1,
    'Elle porte ta réponse à une autre échelle. EN: it carries your answer to another scale.')),
  grp('Ta réponse', [
    it(E(1768), 'ta thèse'),
    it(E(1701), 'la règle'),
  ], chk('Ta conclusion choisit la transformation. Elle...', ['garde ce que la restauration protège', 'oublie ce que disent les partisans de la restauration'], 0,
    'Ta réponse tient la tension : préserver sans figer. EN: your answer keeps the tension.')),
], ['ouverture', 'tension']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La réponse', 'La conclusion répond à la problématique...', ['en choisissant un camp et en oubliant l’autre', 'sans effacer la tension'], 1,
    'Elle garde ce que chaque partie a établi. EN: it keeps what each part established.'),
  ctl('L’ouverture', 'Une bonne ouverture...', ['naît de la réponse donnée', 'ajoute un dernier argument', 'demande l’avis du lecteur'], 0,
    'Elle prolonge, déplace ou élargit. EN: it extends, shifts or widens.'),
  ctl('Le cliché', '« Seul l’avenir nous le dira » est...', ['une ouverture creuse', 'une ouverture qui prolonge'], 0,
    'Elle sert partout, donc n’ouvre rien. EN: it fits anywhere, so it opens nothing.'),
], ['ouverture']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Conclure et ouvrir',
    opener: {
      line: 'Trois conclusions pour la même copie, une seule qui répond et ouvre : ici tu apprends à finir sans trahir la tension. EN: Three conclusions for the same essay, only one that answers and opens: here you learn to end without betraying the tension.',
      imageRef: 'lessons/dissertation-synthese/act08.jpg',
    },
    sections: [],
    milestone: 'Tu conclus par un bilan, une réponse qui garde la tension et une ouverture née de ta réponse. EN: You conclude with a summary, an answer that keeps the tension and an opening born of your answer.',
    estScreens: 34, restPoints: ['a8-conclure', 'a8-erreurs'],
  },
  sections: [A8_LECTURE, A8_CONCLURE, A8_JUGER, A8_ERREURS, A8_ESSAI, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LIRE UN DOSSIER
 *
 *  TEXT: the boredom dossier (three documents). MOVE: read by ideas, not by
 *  documents; convergences and divergences; a neutral problématique. The
 *  spoken synthèse is c1.09’s, cited and reused.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a9-lecture', layer: 'core', questionsInModal: true,
  title: 'Le dossier sur l’ennui', frSub: 'Trois documents',
  text: DOSSIER_ENNUI_TEXT,
  glossary: [
    { word: 'tourner en rond', en: 'to go round in circles', note: 'S’agiter sans rien faire de bon, ne pas avancer.' },
  ],
  questions: [
    { q: 'Devine le sens : « un mercredi pluvieux ». Que veut dire « pluvieux » ?', a: 'Où il pleut.' },
    { q: 'Quel est le thème commun aux trois documents ?', a: 'L’ennui des enfants, et ce qu’il faut en faire.' },
    { q: 'Sur quoi la psychologue et l’institutrice se rejoignent-elles ?', a: 'L’ennui est une étape utile : l’imagination s’y met en route, si on accepte de le traverser.' },
    { q: 'En quoi le père diverge-t-il ?', a: 'Il voit dans l’ennui une petite souffrance et préfère proposer une activité.' },
    { q: 'Quelle idée n’apparaît que dans un document, et pourquoi compte-t-elle ?', a: 'Les agendas trop pleins, chez la psychologue : elle explique pourquoi l’ennui devient rare.' },
  ],
  audio: REC('rec-c1-10-dossier-ennui'), say: REFRAME, terms: ['dossier', 'synthese'],
};

const A9_GRILLE: Sec<'focus'> = {
  type: 'focus', id: 'a9-grille', layer: 'core', sheetId: 'sheet-synthese',
  title: 'Lire un dossier par idées',
  points: [
    'Trouve le thème commun et la question que les documents se posent. EN: find the common theme and question.',
    'Pour chaque idée, note les documents qui la portent. EN: for each idea, note which documents carry it.',
    'Repère où ils se rejoignent, puis où ils divergent. EN: where they meet, then where they part.',
    'Ton plan suivra les idées, jamais l’ordre des documents. EN: your plan follows ideas, never document order.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['dossier', 'synthese'],
};

const A9_JUGER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-juger', layer: 'core', size: 'lg',
  title: 'Faire dialoguer les documents', frSub: 'Converger, diverger, classer',
  groups: [
    grp('Qui dit quoi', [
      it(E(1719), 'une convergence'),
      it(E(1720), 'une divergence'),
      it('fr.c1.discours-dexamen.1236', 'à l’oral'),
    ], chk('La troisième phrase vient d’une leçon sur l’oral. Elle vaut aussi à l’écrit ?', ['Oui : rejoindre, puis séparer, à l’écrit aussi.', 'Non : l’écrit suit l’ordre des documents.'], 0,
      `${Cap(EXPOSE_REF)} te l’a appris à voix haute. Par écrit, la règle tient, et d’autres s’y ajoutent. EN: in writing the rule holds, with more.`)),
    grp('Document par document, ou idée par idée', [
      it(E(1721), 'document par document'),
      it(E(1717), 'la règle'),
      it(DE(48), 'à l’oral'),
    ], chk('Pourquoi la première phrase est-elle faible ?', ['elle résume chaque document à la suite, sans les relier', 'elle est trop courte'], 0,
      'Trois résumés bout à bout ne font pas une synthèse. EN: three summaries end to end are not a synthesis.')),
    ctl('Le test', fr(E(1724)), ['Oui, si elle éclaire le débat.', 'Non, il faut au moins deux documents.'], 0,
      'Une idée isolée peut expliquer les autres. EN: a lone idea can explain the others.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['dossier', 'synthese'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a9-piege', layer: 'core', swipe: true,
  title: 'Six lectures document par document',
  rule: {
    title: 'Par idées, pas par documents',
    body: 'Une synthèse classe les idées du dossier : pour chacune, qui la porte, où les documents se rejoignent, où ils divergent. EN: sort ideas, not documents.',
  },
  cards: [
    { promptLabel: 'trois résumés à la suite', promptSound: fr(E(1721)), fr: fr(E(1739)), ipa: ipaOf(E(1739)), tip: 'Une idée, et les documents qui la portent. EN: one idea and its documents.' },
    { promptLabel: 'un document isolé', promptSound: 'Le document 2 est écrit par un père.', fr: fr(E(1744)), ipa: ipaOf(E(1744)), tip: 'Dis sa position par rapport aux autres : « en revanche ». EN: place it against the others.' },
    { promptLabel: 'un thème flou', promptSound: 'Les documents parlent des enfants.', fr: fr(E(1727)), ipa: ipaOf(E(1727)), tip: 'Le thème commun, et ce qui le divise. EN: the common theme and what divides it.' },
    { promptLabel: 'une convergence cachée', promptSound: 'La psychologue parle d’imagination. L’institutrice parle de sa classe.', fr: fr(E(1719)), ipa: ipaOf(E(1719)), tip: 'Elles disent la même chose : montre-le. EN: they agree; show it.' },
    { promptLabel: 'une divergence tue', promptSound: 'Le père a aussi un avis sur l’ennui.', fr: fr(E(1720)), ipa: ipaOf(E(1720)), tip: 'Dis en quoi il s’oppose. EN: say how he differs.' },
    { promptLabel: 'une idée oubliée', promptSound: 'Les agendas pleins, ce n’est que dans un document : je laisse.', fr: fr(E(1724)), ipa: ipaOf(E(1724)), tip: 'Une idée seule compte si elle éclaire le débat. EN: a lone idea counts.' },
  ],
  drill: [
    { promptSay: 'Je classe les idées du dossier, pas les ... .', opts: ['documents', 'idées'], correct: 0 },
    { promptSay: 'La psychologue et l’institutrice se ... sur l’utilité de l’ennui.', opts: ['rejoignent', 'opposent'], correct: 0 },
    { promptSay: 'Le père, lui, ... : il préfère proposer une activité.', opts: ['diverge', 'converge'], correct: 0 },
    { promptSay: 'Trois résumés à la suite ne font pas une ... .', opts: ['synthèse', 'conclusion', 'transition'], correct: 0 },
    { promptSay: 'Pour chaque idée, je note les documents qui la ... .', opts: ['portent', 'oublient'], correct: 0 },
    { promptSay: 'Le plan de la synthèse suit les ... .', opts: ['idées', 'documents'], correct: 0 },
    { promptSay: 'La synthèse a besoin d’une problématique, mais ... .', opts: ['neutre', 'engagée'], correct: 0 },
    { promptSay: 'Tous les documents parlent de l’ennui, mais pas de la même ... .', opts: ['façon', 'longueur', 'date'], correct: 0 },
  ],
  steps: PIEGE_STEPS('Ce qu’une lecture pressée écrit', 'Huit phrases'),
  audio: REC('rec-c1-10-piege-dossier'), say: REFRAME, terms: ['dossier', 'synthese'],
};

const A9_ESSAI = pourTonEssai('a9-essai', 'Lire ton dossier', [
  grp('Deux lectures du dossier de la halle', [
    free('Document 1 : un article. Document 2 : une architecte. Document 3 : une association.', 'Document 1: an article. Document 2: an architect. Document 3: an association.', 'document par document'),
    free('L’architecte et l’association veulent toutes deux faire revivre la halle ; elles divergent sur le moyen.', 'The architect and the association both want to revive the hall; they differ on the means.', 'par idées'),
  ], chk('Laquelle te donne un point d’appui pour ton essai ?', ['la liste des documents', 'la convergence et la divergence'], 1,
    'Un but commun, deux moyens : c’est la tension de ton dossier. EN: one goal, two means: your dossier’s tension.')),
  grp('Ta lecture', [
    it(E(1723), 'qui porte quoi'),
    it('fr.c1.discours-dexamen.1205', 'le geste'),
  ], chk('L’association et l’architecte parlent toutes deux des marchands. Tu...', ['le notes : c’est un point de rencontre', 'l’ignores : elles s’opposent'], 0,
    'Même des adversaires partagent souvent un point. EN: even opponents often share a point.')),
], ['dossier', 'synthese']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Lire', 'Pour une synthèse, on lit le dossier...', ['document par document', 'idée par idée'], 1,
    'Pour chaque idée, les documents qui la portent. EN: idea by idea.'),
  ctl('Converger', 'Deux documents disent la même chose avec d’autres mots. C’est...', ['une convergence', 'une divergence', 'une redite'], 0,
    'Ils se rejoignent : ta synthèse le dira en une phrase. EN: they meet.'),
  ctl('Le plan', 'Le plan d’une synthèse suit...', ['l’ordre des documents', 'les idées du dossier'], 1,
    'Jamais trois résumés bout à bout. EN: never three summaries end to end.'),
], ['dossier']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Lire un dossier',
    opener: {
      line: 'Une psychologue, un père, une institutrice parlent de l’ennui : ici tu apprends à lire un dossier par idées, là où les documents se rejoignent et se séparent. EN: A psychologist, a father and a teacher talk about boredom: here you learn to read a dossier by ideas, where the documents meet and part.',
      imageRef: 'lessons/dissertation-synthese/act09.jpg',
    },
    sections: [],
    milestone: 'Tu lis un dossier par idées et tu repères ses convergences et ses divergences. EN: You read a dossier by ideas and spot where it agrees and disagrees.',
    estScreens: 34, restPoints: ['a9-grille', 'a9-piege'],
  },
  sections: [A9_LECTURE, A9_GRILLE, A9_JUGER, A9_PIEGE, A9_ESSAI, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — ÉCRIRE LA SYNTHÈSE
 *
 *  TEXT: two synthèses of the act 9 dossier, a faulty one and a model (200
 *  to 240 words). MOVE: the rules of the written synthèse. Practised
 *  UNGRADED (decision 24): the learner builds a synthèse phrase by phrase.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a10-lecture', layer: 'core', questionsInModal: true,
  title: 'Deux synthèses du même dossier', frSub: 'La copie A, puis la copie B',
  text: `${SYNTHESE_A_TEXT} ${SYNTHESE_B_TEXT}`,
  glossary: [
    { word: 'fécond', en: 'fruitful', note: 'Qui produit quelque chose : des idées, des jeux.' },
  ],
  questions: [
    { q: 'Devine le sens : « l’abréger ». Que veut dire « abréger » ?', a: 'Le rendre plus court, y mettre fin plus tôt.' },
    { q: 'Comment la copie A est-elle organisée ?', a: 'Document par document : trois résumés à la suite.' },
    { q: 'Quelles phrases de la copie A sont interdites dans une synthèse ?', a: '« Il est évident que… » et « Heureusement… » donnent un avis ; « Des études récentes… » ajoute une idée absente du dossier.' },
    { q: 'La copie A recopie-t-elle des phrases ?', a: 'Oui : « le moment où l’imagination se met en route » et « une petite souffrance, qui finit souvent en dispute ».' },
    { q: 'Comment la copie B est-elle organisée ?', a: 'Par idées : ce qui rapproche deux documents, la condition qu’ils posent, puis la divergence du père.' },
    { q: 'Que fait la dernière phrase de la copie B ?', a: 'Elle dit où passe vraiment le désaccord, sans donner d’avis : sur la manière de répondre à l’ennui.' },
  ],
  audio: REC('rec-c1-10-syntheses'), say: REFRAME, terms: ['synthese', 'reformuler'],
};

const A10_REGLES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a10-regles', layer: 'core', sheetId: 'sheet-synthese',
  title: 'Six règles de la synthèse écrite',
  cols: ['La règle', 'Ce qu’elle interdit', 'Dans la copie B'],
  rows: [
    { cells: ['un texte nouveau', 'trois résumés à la suite', 'un plan par idées'], say: fr(E(1717)),
      detail: { title: 'Un seul texte', body: 'La synthèse est organisée par idées, avec un titre, une courte introduction et une conclusion brève. EN: one text, organised by ideas.', say: fr(E(1738)) } },
    { cells: ['tes mots', 'les phrases recopiées', 'anxieux, créatifs'], say: fr(E(1730)),
      detail: { title: 'Reformuler', body: 'Chaque idée est redite avec tes mots, sans changer son sens. EN: every idea in your words.', say: fr(E(1735)) } },
    { cells: ['le mot-clé permis', 'la phrase entière', 'l’ennui, l’imagination'], say: fr(E(1731)),
      detail: { title: 'Le mot-clé', body: 'Tu peux garder un mot-clé du dossier ; jamais une phrase entière. EN: a key word yes, a sentence no.', say: fr(E(1731)) } },
    { cells: ['aucun avis', 'heureusement, à mon avis', 'aucun jugement'], say: fr(E(1733)),
      detail: { title: 'Sans opinion', body: 'Pas de « je », pas d’adverbe qui juge, pas de conclusion qui tranche. EN: no “I”, no judging adverb.', say: fr(E(1742)) } },
    { cells: ['aucune idée ajoutée', 'ce que le dossier ne dit pas', 'rien hors du dossier'], say: fr(E(1732)),
      detail: { title: 'Rien que le dossier', body: 'Même juste, une idée absente des documents n’a pas sa place. EN: even a correct outside idea is out.', say: fr(E(1732)) } },
    { cells: ['la fourchette', 'trop court, trop long', 'dans la fourchette'], say: fr(E(1736)),
      detail: { title: 'Compter ses mots', body: 'On compte en général comme un mot tout ce qui se trouve entre deux espaces. Vérifie toujours la consigne. EN: count words, check the instructions.', say: fr(E(1736)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['synthese', 'reformuler'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a10-piege', layer: 'core', swipe: true,
  title: 'Six fautes de la copie A',
  rule: {
    title: 'Les documents, tes mots, pas ton avis',
    body: 'Une synthèse dit ce que disent les documents, avec tes mots, sans ton avis et sans idée ajoutée. EN: the documents, your words, no opinion.',
  },
  cards: [
    { promptLabel: 'un avis', promptSound: fr(E(1734)), fr: fr(E(1739)), ipa: ipaOf(E(1739)), tip: 'Dis ce que pensent les documents, pas toi. EN: what the documents think.' },
    { promptLabel: 'une idée ajoutée', promptSound: fr(E(1743)), fr: fr(E(1735)), ipa: ipaOf(E(1735)), tip: 'Rien qui ne soit dans le dossier. EN: nothing outside the dossier.' },
    { promptLabel: 'un adverbe qui juge', promptSound: fr(E(1740)), fr: fr(E(1744)), ipa: ipaOf(E(1744)), tip: '« En revanche » relie sans juger. EN: link without judging.' },
    { promptLabel: 'une phrase recopiée', promptSound: 'C’est une petite souffrance, qui finit souvent en dispute.', fr: fr(E(1730)), ipa: ipaOf(E(1730)), tip: 'Redis-le : un malaise qui tourne au conflit. EN: reword it.' },
    { promptLabel: 'trois résumés', promptSound: fr(E(1721)), fr: fr(E(1717)), ipa: ipaOf(E(1717)), tip: 'Par idées, jamais document par document. EN: by ideas.' },
    { promptLabel: 'une synthèse qui parle d’elle', promptSound: 'Je vais maintenant vous résumer ces documents.', fr: fr(E(1742)), ipa: ipaOf(E(1742)), tip: 'La synthèse s’efface : pas de « je ». EN: no “I”.' },
  ],
  drill: [
    { promptSay: 'Une synthèse dit ce que disent les documents, avec tes mots, sans ton ... .', opts: ['avis', 'plan'], correct: 0 },
    { promptSay: 'Je peux reprendre un mot-clé, jamais une phrase ... .', opts: ['entière', 'courte'], correct: 0 },
    { promptSay: 'Aucune idée ... au dossier, même juste.', opts: ['extérieure', 'centrale'], correct: 0 },
    { promptSay: '« Heureusement » donne un ... .', opts: ['jugement', 'exemple', 'chiffre'], correct: 0 },
    { promptSay: 'La consigne donne une ... de mots.', opts: ['fourchette', 'liste'], correct: 0 },
    { promptSay: 'Je ... chaque idée avec mes propres mots.', opts: ['reformule', 'recopie'], correct: 0 },
    { promptSay: 'La synthèse s’... derrière les documents.', opts: ['efface', 'impose'], correct: 0 },
    { promptSay: 'Pour le père, en ... , l’ennui reste une épreuve.', opts: ['revanche', 'effet', 'outre'], correct: 0 },
  ],
  steps: PIEGE_STEPS('Ce que la copie A écrivait', 'Huit phrases'),
  audio: REC('rec-c1-10-piege-synthese'), say: REFRAME, terms: ['synthese', 'reformuler'],
};

/** THE UNGRADED SYNTHÈSE (decision 24): built phrase by phrase on a new
 *  dossier summary, each page a choice between faithful and faulty lines. */
const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-construire', layer: 'core', size: 'lg',
  title: 'Ta synthèse, phrase par phrase', frSub: 'Sur le dossier de l’ennui, sans note',
  groups: [
    grp('L’introduction', [
      free('Trois documents s’interrogent sur l’ennui des enfants : une perte de temps, ou une ressource ?', 'Three documents examine children’s boredom: a waste of time, or a resource?', 'neutre'),
      free('L’ennui des enfants est un vrai problème de notre époque, et je vais le montrer.', 'Children’s boredom is a real problem of our time, and I am going to show it.', 'engagée'),
    ], chk('Laquelle ouvre ta synthèse ?', ['« une perte de temps, ou une ressource ? »', '« je vais le montrer »'], 0,
      'Une problématique neutre, et pas de « je ». EN: a neutral question, no “I”.')),
    grp('La première idée', [
      free('Pour la psychologue comme pour l’institutrice, l’ennui laisse à l’enfant le temps d’inventer.', 'For both the psychologist and the teacher, boredom gives the child time to invent.', 'reformulée'),
      free('L’ennui est souvent le moment où l’imagination se met en route.', 'Boredom is often the moment when the imagination gets going.', 'recopiée'),
    ], chk('Laquelle respecte les règles ?', ['« le temps d’inventer »', '« le moment où l’imagination se met en route »'], 0,
      'La seconde recopie le document 1 mot pour mot. EN: the second copies document 1.')),
    grp('La deuxième idée', [
      free('Le père, au contraire, juge cette attente pénible et préfère occuper ses enfants.', 'The father, by contrast, finds this waiting hard and prefers to keep his children busy.', 'fidèle'),
      free('Le père a tort : il devrait laisser ses enfants s’ennuyer.', 'The father is wrong: he should let his children be bored.', 'un avis'),
    ], chk('Laquelle garde la synthèse neutre ?', ['« au contraire, juge cette attente pénible »', '« le père a tort »'], 0,
      'Tu rends compte de sa position ; tu ne la juges pas. EN: report, do not judge.')),
    grp('La conclusion', [
      free('Le désaccord porte donc moins sur l’ennui lui-même que sur la façon d’y répondre.', 'The disagreement therefore concerns less boredom itself than how to respond to it.', 'un bilan'),
      free('Il faudrait aussi parler des écrans, qui changent tout.', 'We should also talk about screens, which change everything.', 'une idée ajoutée'),
    ], chk('Laquelle clôt ta synthèse ?', ['« moins sur l’ennui que sur la façon d’y répondre »', '« parler des écrans »'], 0,
      'Les écrans ne sont pas dans le dossier. EN: screens are not in the dossier.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['synthese', 'reformuler'],
};

const A10_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a10-dictee', layer: 'core',
  title: 'Écris les règles que tu entends',
  itemIds: dicteeFor(10),
  audio: AUDIO, say: REFRAME, terms: ['synthese'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('L’avis', 'Dans une synthèse, ton opinion...', ['vient à la fin', 'n’a pas sa place'], 1,
    'Ni « à mon avis », ni « heureusement ». EN: no opinion at all.'),
  ctl('Les mots', 'Tu peux reprendre du dossier...', ['un mot-clé', 'une phrase entière', 'un paragraphe'], 0,
    'Le reste, tu le reformules. EN: the rest you reword.'),
  ctl('Les idées', 'Une idée juste mais absente du dossier...', ['enrichit la synthèse', 'n’a pas sa place'], 1,
    'La synthèse ne dit que ce que disent les documents. EN: only what the documents say.'),
], ['synthese']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Écrire la synthèse',
    opener: {
      line: 'Deux synthèses du même dossier, l’une pleine d’avis, l’autre fidèle : ici tu apprends à écrire un texte nouveau avec tes mots, sans rien ajouter. EN: Two syntheses of the same dossier, one full of opinions, one faithful: here you learn to write a new text in your own words, adding nothing.',
      imageRef: 'lessons/dissertation-synthese/act10.jpg',
    },
    sections: [],
    milestone: 'Tu construis une synthèse par idées, avec tes mots, sans avis et sans idée ajoutée. EN: You build a synthesis by ideas, in your own words, without opinion or added ideas.',
    estScreens: 38, restPoints: ['a10-regles', 'a10-construire'],
  },
  sections: [A10_LECTURE, A10_REGLES, A10_PIEGE, A10_CONSTRUIRE, A10_DICTEE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — L’ESSAI SUR DOSSIER
 *
 *  TEXT: Nadia Chérif’s open letter on a greener school yard. MOVE: the
 *  essay in a real genre: addressee, situation, aim; the dossier used to
 *  support, never copied; the objection answered (c1.08 cited).
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a11-lecture', layer: 'core', questionsInModal: true,
  title: 'La lettre de Nadia', frSub: 'Pour une cour plantée',
  text: LETTRE_TEXT,
  glossary: [
    { word: 'bitume', en: 'asphalt', note: 'Le revêtement noir des routes et des cours.' },
  ],
  questions: [
    { q: 'Devine le sens : « ne relève pas du simple embellissement ». Que veut dire « relever de » ?', a: 'Appartenir à, être une affaire de : le projet n’est pas qu’une question de beauté.' },
    { q: 'À qui la lettre s’adresse-t-elle, et qui la lit ?', a: 'À la directrice de l’école ; publiée dans le journal, tout le monde peut la lire.' },
    { q: 'Comment Nadia utilise-t-elle le dossier ?', a: 'Elle cite un fait précis de chaque document pour appuyer une idée, sans recopier.' },
    { q: 'Quelles objections traite-t-elle ?', a: 'Le coût des arbres et l’entretien ; elle reconnaît l’inquiétude et propose une solution.' },
    { q: 'Que demande-t-elle précisément ?', a: 'Que le projet soit inscrit à l’ordre du jour du prochain conseil d’école.' },
  ],
  audio: REC('rec-c1-10-lettre'), say: REFRAME, terms: ['genre', 'dossier'],
};

const A11_GESTES: Sec<'examples'> = {
  type: 'examples', id: 'a11-gestes', layer: 'core', sheetId: 'sheet-essai',
  title: 'Six gestes de la lettre ouverte',
  examples: [
    ex('fr.c1.strategies-de-comprehension.2084', 'Le genre : une lettre à une personne, que tout le monde peut lire.'),
    ex(E(1748), 'Le destinataire et la place de l’auteure : qui écrit, à qui, au nom de qui.'),
    ex(E(1749), 'Un fait du dossier, attribué, qui appuie une idée.'),
    ex(E(1752), 'L’objection annoncée, puis une réponse qui la retourne.'),
    ex(E(1750), 'Une demande précise, que le destinataire peut accepter ou refuser.'),
    ex(E(1756), 'La formule finale, adaptée au destinataire.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'dossier'],
};

const A11_JUGER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-juger', layer: 'core', size: 'lg',
  title: 'Synthèse ou essai ?', frSub: 'Deux exercices, puis l’objection',
  groups: [
    grp('Deux exercices voisins', [
      it(E(1747), 'l’essai'),
      it(E(1729), 'la synthèse'),
      it(E(1746), 'le genre'),
    ], chk('Dans l’essai, ton avis...', ['est interdit, comme dans la synthèse', 'est le cœur du texte, appuyé sur le dossier'], 1,
      'La synthèse rend compte ; l’essai prend position. EN: the essay takes a position.')),
    grp('L’objection', [
      it('fr.c1.rhetorique.1168', 'la leçon sur la persuasion'),
      it(E(1752), 'chez Nadia'),
    ], chk('Que fait Nadia de l’objection sur l’entretien ?', ['elle la reconnaît et propose une solution', 'elle la passe sous silence'], 0,
      `${Cap(PERSUADER_REF)} te l’a appris : l’objection la plus forte, pas la plus facile. EN: the strongest objection.`)),
    ctl('Le test', fr(E(1753)), ['Oui : une lettre au maire ne s’écrit pas comme une copie d’examen.', 'Non : tous les essais ont le même ton.'], 0,
      'Le destinataire, la situation et le but décident du ton. EN: addressee, situation and aim set the tone.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'synthese'],
};

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a11-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre lettres qui manquent leur but',
  errors: [
    { wrong: fr(E(1751)), right: fr(E(1748)),
      why: 'Normal : on a appris la dissertation. Mais une lettre ouverte s’adresse à quelqu’un, dans une situation réelle. EN: a letter addresses someone.' },
    { wrong: fr(E(1758)), right: 'La cour est la plus chaude du quartier en été ; des arbres la rendraient utilisable en juin.',
      why: 'Les phrases courtes semblent claires. Mais sans liens, le lecteur doit deviner le raisonnement. EN: without links, the reasoning is hidden.' },
    { wrong: 'Une cour plantée protège les enfants de la chaleur et change les jeux, comme le dit le dossier.', right: 'Comme le rappelle l’article du Courrier, la cour a été fermée trois après-midi en juin, faute d’ombre.',
      why: '« Le dossier » rassure, mais ne prouve rien. Un fait précis, attribué, appuie l’idée. EN: a precise, attributed fact supports the idea.' },
    { wrong: 'Voilà ce que je pense de la cour. Merci.', right: fr(E(1750)),
      why: 'On croit avoir fini quand on a donné son avis. Une lettre ouverte demande quelque chose de précis. EN: ask for something precise.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'dossier'],
};

const A11_ESSAI = pourTonEssai('a11-essai', 'Le genre de ton essai', [
  grp('Deux débuts de lettre au maire', [
    free('Dans cette dissertation, nous verrons s’il faut restaurer la halle.', 'In this essay, we will see whether the hall should be restored.', 'le ton scolaire'),
    it(E(1759), 'une lettre'),
  ], chk('Lequel convient à une lettre ouverte ?', ['« dans cette dissertation »', '« Monsieur le Maire, j’habite le quartier »'], 1,
    'Un destinataire et la place de l’auteur, dès la première ligne. EN: addressee and writer’s standing from line one.')),
  grp('Le dossier dans ta lettre', [
    it(E(1765), 'un fait attribué'),
    it(E(1755), 'la règle'),
  ], chk('Tu veux parler du coût. Tu écris...', ['« selon le Courrier, la restauration coûterait quatre millions »', '« le dossier dit que c’est cher »'], 0,
    'Le chiffre et sa source, pas le dossier en bloc. EN: the figure and its source.')),
], ['genre', 'dossier']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('L’essai', 'L’essai argumenté, à la différence de la synthèse...', ['prend position', 'rend compte sans avis'], 0,
    'Il défend une thèse, pour un destinataire. EN: it defends a thesis for someone.'),
  ctl('Le dossier', 'Dans l’essai, le dossier sert à...', ['appuyer tes idées', 'remplacer tes idées', 'remplir la longueur'], 0,
    'Un fait précis et attribué appuie une idée. EN: a precise fact supports an idea.'),
  ctl('La fin', 'Une lettre ouverte se termine par...', ['une demande précise et une formule adaptée', 'un résumé du dossier'], 0,
    'Le destinataire doit savoir ce qu’on attend de lui. EN: the addressee must know what is asked.'),
], ['genre']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'L’essai sur dossier',
    opener: {
      line: 'Une mère d’élève écrit à la directrice, et tout le quartier peut la lire : ici tu apprends l’essai argumenté dans un vrai genre, appuyé sur un dossier. EN: A parent writes to the headteacher, and the whole neighbourhood can read it: here you learn the argumentative essay in a real genre, drawing on a dossier.',
      imageRef: 'lessons/dissertation-synthese/act11.jpg',
    },
    sections: [],
    milestone: 'Tu écris pour un destinataire, tu t’appuies sur le dossier sans le recopier et tu termines par une demande précise. EN: You write to an addressee, draw on the dossier without copying it, and end with a precise request.',
    estScreens: 34, restPoints: ['a11-gestes', 'a11-erreurs'],
  },
  sections: [A11_LECTURE, A11_GESTES, A11_JUGER, A11_ERREURS, A11_ESSAI, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TON ESSAI
 *
 *  The production act. The halle dossier (three documents, every figure
 *  invented and said to be) is read, planned, rehearsed with Karim, then
 *  written. The brief prints the dossier again (no `source` field on
 *  `task`).
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_DOSSIER: Sec<'reading'> = {
  type: 'reading', id: 'a12-dossier', layer: 'core', questionsInModal: true,
  title: 'Le dossier de ta mission', frSub: 'L’avenir de la halle',
  text: DOSSIER_TEXT,
  glossary: [
    { word: 'écrin', en: 'jewel case, setting', note: 'Une belle boîte pour un objet précieux ; ici, un beau bâtiment autour d’un marché.' },
  ],
  questions: [
    { q: 'Devine le sens : « des soirées branchées ». Que veut dire « branché » ici ?', a: 'À la mode, fréquenté par un public qui suit les tendances.' },
    { q: 'Quels sont les deux projets, et combien coûtent-ils ?', a: 'La restauration à l’identique, quatre millions ; la transformation avec ouverture le soir, cinq millions et demi.' },
    { q: 'Sur quoi l’architecte et l’association se rejoignent-elles ?', a: 'Toutes deux veulent faire revivre la halle et parlent des marchands.' },
    { q: 'Où divergent-elles ?', a: 'Sur le moyen : ouvrir le soir pour attirer du monde, ou aider d’abord les marchands à revenir dans une halle restaurée.' },
    { q: 'Quelle est la tension du dossier ?', a: 'Préserver un lieu sans le figer : le restaurer peut le laisser vide, le transformer peut chasser ceux qui le font vivre.' },
  ],
  audio: REC('rec-c1-10-dossier'), say: REFRAME, terms: ['dossier', 'tension'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-essai',
  title: 'Six étapes pour ta lettre',
  steps: [
    '1. Lis le dossier par idées et trouve sa tension : préserver sans figer. EN: read by ideas, find the tension.',
    '2. Commence par le destinataire et ta place : qui tu es, pourquoi tu écris. EN: addressee and standing.',
    '3. Pose ta problématique, puis ta position. EN: problem question, then position.',
    '4. Développe deux ou trois idées, chacune appuyée sur un fait attribué du dossier, reliées par des transitions-bilan. EN: two or three ideas, sourced, linked.',
    '5. Annonce l’objection principale, concède ce qui est juste, réponds. EN: objection, concession, answer.',
    '6. Conclus par une réponse qui garde la tension, une demande précise et la formule finale. EN: answer, request, closing formula.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'transition'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', title: 'Où tu écriras ainsi',
  cases: [
    { situation: 'Une consultation publique dans ta ville', fr: fr(E(1761)), en: src(E(1761)).en },
    { situation: 'Une lettre au conseil d’école', fr: fr(E(1755)), en: src(E(1755)).en },
    { situation: 'À l’examen, un essai sur dossier', fr: fr(E(1747)), en: src(E(1747)).en },
    { situation: 'Un courrier des lecteurs dans le journal local', fr: fr(E(1753)), en: src(E(1753)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre'],
};

/** USE IT, out loud. Every French string here uses the typographic ’ and
 *  quotes only authored rows. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core', title: 'Karim relit ton plan',
  setting: 'Jeudi soir, à la Maison des savoirs. Karim prépare lui aussi sa lettre sur la halle. Il a des idées « pour aller vite ». Tu lui réponds avec ce que tu as appris, une étape après l’autre.',
  turns: [
    {
      ai: 'Moi, je commence par « Depuis toujours, les marchés font la vie des villes ».', en: 'I start with “Markets have always been the life of towns”.',
      user: fr(E(1759)), userEn: 'Dear Mayor, I live in the market-hall district and used to do my shopping there every Saturday. (A real addressee and the writer’s standing, not a cliché.)',
      alts: [
        { fr: 'Je commence par me présenter au maire, et par dire pourquoi j’écris.', en: 'I start by introducing myself to the mayor and saying why I am writing.' },
        { fr: 'Je pars d’un fait du dossier : la moitié des étals étaient vides.', en: 'I start from a fact in the dossier: half the stalls were empty.' },
      ],
    },
    {
      ai: 'Ma problématique : faut-il restaurer la halle ?', en: 'My problem question: should the hall be restored?',
      user: fr(E(1761)), userEn: 'How can a place be preserved without freezing it? (A tension, not a yes or no.)',
      alts: [
        { fr: fr(E(1760)), en: src(E(1760)).en },
        { fr: 'Je cherche ce qui résiste : restaurer peut laisser la halle vide.', en: 'I look for what pushes back: restoring may leave the hall empty.' },
      ],
    },
    {
      ai: 'Et pour le plan, je fais pour, contre, et un peu des deux.', en: 'And for the plan, I do for, against, and a bit of both.',
      user: 'Ma troisième partie dira à quelles conditions on peut préserver sans figer, pas un peu des deux.', userEn: 'My third part will say under what conditions one can preserve without freezing, not a bit of both. (Going beyond, not averaging.)',
      alts: [
        { fr: fr(E(1682)), en: src(E(1682)).en },
        { fr: 'C’est ma problématique qui choisit le plan, pas le premier mot du sujet.', en: 'My problem question chooses the plan, not the first word of the subject.' },
      ],
    },
    {
      ai: 'Pour les chiffres, j’écris juste « le dossier dit que c’est cher ».', en: 'For the figures, I just write “the dossier says it is expensive”.',
      user: fr(E(1765)), userEn: 'According to the Courrier, the restoration would cost four million euros. (A precise fact, attributed.)',
      alts: [
        { fr: fr(E(1755)), en: src(E(1755)).en },
        { fr: 'Je cite l’architecte, qui dit que la moitié des étals étaient vides.', en: 'I quote the architect, who says half the stalls were empty.' },
      ],
    },
    {
      ai: 'Les Amis de la halle, je les ignore. Ils sont contre de toute façon.', en: 'The Friends of the Hall, I ignore them. They are against it anyway.',
      user: 'Je reconnais qu’ils ont raison sur un point : si les loyers montent, les petits producteurs partiront.', userEn: 'I grant them one point: if rents rise, the small producers will leave. (The objection at its strongest, conceded.)',
      alts: [
        { fr: fr(E(1767)), en: src(E(1767)).en },
        { fr: 'Je réponds à leur objection la plus forte, celle des loyers.', en: 'I answer their strongest objection, the one about rents.' },
      ],
    },
    {
      ai: 'Et à la fin, j’écris « Seul l’avenir nous le dira ».', en: 'And at the end, I write “Only the future will tell”.',
      user: fr(E(1764)), userEn: 'I ask you to keep the morning market and to open the hall in the evening. (A precise request, then the closing formula.)',
      alts: [
        { fr: fr(E(1768)), en: src(E(1768)).en },
        { fr: 'Je termine par une demande précise, puis par la formule pour le maire.', en: 'I end with a precise request, then the formula for the mayor.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'tension'],
};

/** THE GRADED TASK (decision 24): ONE essai argumenté, 250 to 400 words,
 *  in a real genre (a lettre ouverte), from the dossier inlined in the
 *  brief. Rubric: b2.23’s four plus lexical precision and argument
 *  structure, six criteria, 20 points (decision 14). */
const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission', title: 'Écris ta lettre ouverte', frSub: 'Mission écrite',
  brief: `La mairie de Sorbevaux ouvre une consultation publique sur l’avenir de sa halle, et le Courrier publiera les lettres des habitants. Écris une lettre ouverte au maire : prends position et appuie-toi sur le dossier, sans le recopier. Voici le dossier. ${DOSSIER_TEXT}`,
  briefEn: 'The town of Sorbevaux is holding a public consultation on the future of its market hall, and the Courrier will publish residents’ letters. Write an open letter to the mayor: take a position and draw on the dossier without copying it. The dossier, with invented documents and figures, is printed here so you can write with it in front of you.',
  produce: 'Écris une lettre ouverte de 250 à 400 mots au maire : présente-toi, pose une problématique qui fait tension, défends une position avec au moins deux faits attribués du dossier, relie tes idées par des transitions, traite l’objection principale de l’autre camp, conclus par une réponse et une demande précise, et termine par une formule adaptée.',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 400 },
  rubric: {
    criteria: [
      { key: 'consigne', label: 'La consigne et le genre', maxPoints: 3, descriptors: [
        '3 : Une vraie lettre ouverte au maire (adresse, place de l’auteur, demande, formule finale), dans la longueur demandée, sur la halle.',
        '2 : La lettre est là, mais un élément du genre manque (pas de demande, formule absente) ou le ton glisse vers la copie scolaire.',
        '1 : Ce n’est pas une lettre (une dissertation, un résumé du dossier) ou la longueur est très loin du compte.',
      ] },
      { key: 'argumentation', label: 'Une position et des appuis', maxPoints: 4, descriptors: [
        '4 : Une position nette, deux ou trois idées, chacune appuyée sur un fait précis et attribué du dossier, sans chiffre inventé ; l’objection principale est concédée en partie puis réfutée.',
        '3 : Une position nette et des appuis, mais un fait reste vague ou l’objection n’est pas concédée.',
        '2 : Une position, mais des idées peu appuyées, ou le dossier recopié au lieu d’être utilisé.',
        '1 : Pas de position claire, ou des affirmations sans aucun appui.',
      ] },
      { key: 'structure', label: 'La structure de l’argumentation', maxPoints: 4, descriptors: [
        '4 : Une problématique qui fait tension, un plan qui la déplie, une conclusion qui y répond sans l’effacer.',
        '3 : Une problématique et un plan clairs, mais la tension est faible ou la conclusion ne répond qu’en partie.',
        '2 : Un plan visible, mais sans vraie problématique, ou une troisième partie qui fait la moyenne.',
        '1 : Des idées juxtaposées, sans problématique ni progression.',
      ] },
      { key: 'coherence', label: 'Des liens qui tiennent', maxPoints: 3, descriptors: [
        '3 : Des transitions qui résument et relancent, des connecteurs justes, des reprises claires.',
        '2 : Les liens existent, mais certaines transitions annoncent sans résumer.',
        '1 : Des paragraphes posés les uns après les autres, sans lien.',
      ] },
      { key: 'lexique', label: 'La précision du vocabulaire', maxPoints: 3, descriptors: [
        '3 : Un vocabulaire précis et nuancé (préserver, figer, restaurer à l’identique, réversible, contrepartie), des reformulations du dossier plutôt que des reprises.',
        '2 : Un vocabulaire juste mais général, quelques répétitions ou reprises du dossier.',
        '1 : Un vocabulaire vague ou impropre qui brouille le propos.',
      ] },
      { key: 'langue', label: 'La correction de la langue', maxPoints: 3, descriptors: [
        '3 : Des phrases complexes maîtrisées (concession, condition, subjonctif), presque aucune erreur.',
        '2 : Quelques erreurs qui ne gênent pas la lecture.',
        '1 : Des erreurs fréquentes qui gênent la lecture.',
      ] },
    ],
  },
  scaffold: [
    'Monsieur le Maire,',
    'J’habite...',
    'Comment préserver...',
    'Selon le Courrier,',
    'On objectera que...',
    'Il est vrai que...',
    'Je vous demande donc...',
    'Je vous prie d’agréer,',
  ],
  modelAnswer: 'Monsieur le Maire, j’habite le quartier de la halle et j’y faisais mon marché chaque samedi, avant sa fermeture. Je vous écris pour que la consultation n’oppose pas deux camps qui veulent, au fond, la même chose. Restaurer ou transformer : la question est mal posée si l’on oublie ceux qui font vivre la halle. Comment préserver un lieu sans le figer ? Je défends la transformation, à des conditions précises. Restaurer à l’identique protégerait la mémoire du bâtiment, et je comprends ceux qui y tiennent : la halle appartient à l’histoire de la ville. Mais, comme le rappelle Inès Kerbrat, avant sa fermeture la halle n’accueillait déjà ses marchands que trois matins par semaine, avec un étal sur deux inoccupé. Une halle restaurée mais vide ne serait qu’un décor. La restauration préserve donc la pierre ; reste à savoir si elle préserve la vie qui l’habitait. Une ouverture le soir donnerait aux marchands du matin une clientèle nouvelle, et le projet garde le marché alimentaire. Selon le Courrier, il coûterait un million et demi de plus que la restauration, une somme réelle, que la ville doit justifier. On objectera, avec les Amis de la halle, qu’une transformation ferait monter les loyers des étals et chasserait les petits producteurs. L’objection est sérieuse, et je la partage en partie : une halle transformée qui chasserait ses marchands perdrait son âme. C’est pourquoi je vous demande de garder le marché du matin, de geler les loyers des étals pendant plusieurs années et d’ouvrir la halle le soir, avec des aménagements réversibles qui laissent la charpente visible. Ce que nous voulons préserver, ce n’est pas seulement la halle, c’est ce qui s’y passe. Reste à savoir si d’autres halles de la région, fermées elles aussi, pourraient suivre le même chemin. Je vous prie d’agréer, Monsieur le Maire, l’expression de ma haute considération.',
  modelAnswerEn: 'Dear Mayor, I live in the market-hall district and used to do my shopping there every Saturday, before it closed. I am writing so that the consultation does not set against each other two camps that, deep down, want the same thing. Restore or transform: the question is badly put if we forget those who keep the hall alive. How can a place be preserved without freezing it? I support the transformation, under precise conditions. Restoring it exactly as it was would protect the memory of the building, and I understand those attached to it: the hall belongs to the town’s history. But, as Inès Kerbrat points out, before it closed the hall already hosted its stallholders only three mornings a week, with one stall in two unoccupied. A restored but empty hall would be nothing but a stage set. Restoration therefore preserves the stone; the question is whether it preserves the life that filled it. Evening opening would give the morning stallholders new customers, and the project keeps the food market. According to the Courrier, it would cost one and a half million more than the restoration, a real sum that the town must justify. It will be objected, with the Friends of the Hall, that a transformation would push up stall rents and drive out small producers. The objection is serious, and I partly share it: a transformed hall that drove out its stallholders would lose its soul. That is why I ask you to keep the morning market, to freeze stall rents for several years and to open the hall in the evening, with reversible fittings that leave the roof frame visible. What we want to preserve is not only the hall, it is what happens in it. It remains to be seen whether other halls in the region, also closed, could follow the same path. Yours faithfully.',
  watchFor: [
    { pattern: 'No addressee, no writer’s standing, or a school-essay opening (« Depuis toujours », « Dans cette dissertation »).', criterion: 'consigne', feedback: 'Commence par le maire et par ta place dans le quartier : c’est une lettre, pas une copie d’examen.', ref: 'a11-gestes' },
    { pattern: 'The problématique restates the subject as a yes / no question (« faut-il restaurer la halle ? »).', criterion: 'structure', feedback: 'Cherche la tension : préserver sans figer. Ta question doit pouvoir recevoir deux réponses sérieuses.', ref: 'a3-tension' },
    { pattern: 'Key words of the subject left undefined, or the letter drifts to a neighbouring subject (tourism, town finances in general).', criterion: 'structure', feedback: 'Définis « préserver » : le bâtiment, ou ce qui s’y passe ? Reste sur la halle.', ref: 'a2-termes' },
    { pattern: 'A third part or conclusion that averages the two projects (« un peu des deux ») without stating conditions.', criterion: 'structure', feedback: 'Ne fais pas la moyenne : dis à quelles conditions on peut préserver sans figer.', ref: 'a6-erreurs' },
    { pattern: 'Facts from the dossier vague (« le dossier dit que ») or unattributed, or a figure invented beyond the dossier.', criterion: 'argumentation', feedback: 'Cite un fait précis avec sa source : le Courrier, l’architecte, l’association. N’invente aucun chiffre.', ref: 'a11-erreurs' },
    { pattern: 'Whole sentences copied from the dossier instead of reworded.', criterion: 'lexique', feedback: 'Reprends un mot-clé si tu veux, mais redis l’idée avec tes mots.', ref: 'a10-regles' },
    { pattern: 'Transitions that only announce (« passons maintenant à ») without saying what was established.', criterion: 'coherence', feedback: 'Résume ce que ton paragraphe a établi, puis dis pourquoi il faut aller plus loin.', ref: 'a7-liens' },
    { pattern: 'The main objection of the other side ignored, caricatured, or answered without any concession.', criterion: 'argumentation', feedback: 'Annonce l’objection de l’autre camp dans sa forme la plus forte, concède ce qui est juste, puis réponds.', ref: 'a11-juger' },
    { pattern: 'A conclusion that adds a new argument, chooses one side and forgets the other, or ends on an empty formula (« seul l’avenir nous le dira »).', criterion: 'structure', feedback: 'Conclus par une réponse qui garde la tension, puis une ouverture née de ta réponse.', ref: 'a8-erreurs' },
    { pattern: 'No precise request to the mayor, or no closing formula suited to him.', criterion: 'consigne', feedback: 'Demande quelque chose de précis, puis termine par la formule pour le maire.', ref: 'a11-gestes' },
    { pattern: 'Vague or repetitive vocabulary (« faire », « chose », « bien », « problème » repeated) where the dossier offers precise words.', criterion: 'lexique', feedback: 'Choisis le mot précis : préserver, figer, réversible, restaurer à l’identique.', ref: 'a12-plan' },
  ],
  graderNotes: [
    'Word count: 250 to 400 including the address and the closing formula, with 10% tolerance (225 to 440) before « consigne » loses a point for length.',
    'Either position (restoration, transformation, or a reasoned conditional choice) may earn full marks; the choice is never marked, only how it is argued.',
    'Facts: only figures and facts from the dossier (and general knowledge needing no figure). An invented figure caps « argumentation » at 2, even if plausible. Simple arithmetic on dossier figures (one and a half million more) is not an invention.',
    'Attribution: « selon le Courrier », « comme l’écrit l’architecte », « l’association rappelle que » all count. Copying two or more full sentences from the dossier caps « lexique » at 1.',
    'The problématique may be implicit in a sentence that holds the tension (« restaurer ne suffit pas si la halle reste vide ») ; it need not be a question.',
    'Plans: any plan that unfolds the tension is accepted (dialectical with a third part that states conditions, comparative by criteria, thematic). A third part that only says « un peu des deux » scores 2 at most under « structure ».',
    'Closing formulas: accept « Je vous prie d’agréer », « Veuillez agréer » with « l’expression de ma haute considération », « de mes salutations distinguées », « de mes salutations respectueuses », « de ma considération distinguée » or « de mes sentiments respectueux ». Accept « Madame la Maire » or « Madame le Maire » if the learner imagines a woman mayor.',
    'Do not mark spoken synthesis formulas or closure markers from other C1 lessons as errors; reward them only if used correctly.',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['genre', 'tension'],
};

const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core', title: 'Dis les phrases de ta lettre', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['tension'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-plans',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'les termes', v: 'définir chaque mot, petits mots compris', say: fr(E(1612)),
      detail: { title: 'Lire le sujet', body: 'Là où deux définitions se heurtent, tu tiens la tension. EN: where definitions clash, the tension.', say: fr(E(1618)) } },
    { k: 'la problématique', v: 'deux idées vraies en tension', say: fr(E(1629)),
      detail: { title: 'La tension', body: 'Ni thème, ni liste, ni redite : deux réponses sérieuses possibles. EN: two serious answers.', say: fr(E(1639)) } },
    { k: 'le plan', v: 'choisi par la problématique', say: fr(E(1681)),
      detail: { title: 'Quatre plans', body: 'Dialectique avec dépassement, thématique, analytique, comparatif. EN: four plans, one choice.', say: fr(E(1682)) } },
    { k: 'les transitions', v: 'résumer, puis relancer', say: fr(E(1689)),
      detail: { title: 'Le bilan qui relance', body: 'Ce que la partie a établi, puis pourquoi continuer. EN: what was established, why go on.', say: fr(E(1691)) } },
    { k: 'la conclusion', v: 'répondre sans effacer, puis ouvrir', say: fr(E(1701)),
      detail: { title: 'Conclure', body: 'Bilan, réponse qui garde la tension, ouverture née de la réponse. EN: summary, answer, opening.', say: fr(E(1714)) } },
    { k: 'synthèse et essai', v: 'rendre compte, ou prendre position', say: fr(E(1747)),
      detail: { title: 'Écrire sur dossier', body: 'La synthèse : tes mots, sans avis. L’essai : ta position, appuyée sur le dossier. EN: report, or argue.', say: fr(E(1729)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['tension', 'synthese'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu ne recopies plus le sujet en guise de problématique : tu définis ses termes, petits mots compris, jusqu’à trouver la tension qu’il cache. Tu choisis ton plan à partir d’elle, analytique, comparatif, thématique ou dialectique avec une troisième partie qui dépasse. Tu relies tes parties par des transitions qui résument puis relancent, et tu conclus par une réponse qui garde la tension et une ouverture qu’elle a fait naître. Tu sais lire un dossier par idées, en faire une synthèse avec tes mots et sans avis, et t’en servir pour défendre une position dans une vraie lettre. Le piège qui reste est discret : sous la pression du temps, la troisième partie redevient « un peu des deux ». Avant ton prochain essai, écris ta problématique, puis vérifie que chacune de tes parties y répond. EN: Before your next essay, write your problem question, then check that each part answers it.',
  stats: [
    { k: 'Le sujet', v: 'les termes, puis la tension' },
    { k: 'Les plans', v: 'analytique, comparatif, et le bon choix' },
    { k: 'Les liens', v: 'transitions-bilan, ouverture' },
    { k: 'Le dossier', v: 'synthèse sans avis, essai qui prend position' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 1 to 11. Each round
 *  targets a distinct errorTrigger. Mostly judgement, as a workshop quiz
 *  should; `typeIn` asks for one word; `errorSpot` swaps one word of a
 *  judgement. `fold()` strips accents, punctuation and spacing, so nothing
 *  turns on them. Authored slots are spread by `spreadSlots()`. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Une partie de la phrase est fausse. Écris la phrase juste. EN: Part of the sentence is wrong; write the correct sentence.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: ES_Q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'L’examen', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-sujet', label: 'Le sujet qui piège', targets: ['sujet-recopie'],
      questions: [
        mc('« Nous nous demanderons si le progrès technique nous fait gagner du temps. » Cette problématique...', ['recopie le sujet', 'met deux idées en tension', 'annonce le plan'], 0, 'Elle reprend le sujet mot pour mot. EN: it copies the subject.', 'a1-scene'),
        mc('Quelle problématique fait tension ?', ['Chaque machine nous fait gagner du temps : pourquoi en manquons-nous toujours ?', 'Le progrès technique est-il bon ?', 'Nous parlerons du progrès technique.'], 0, 'Deux idées vraies qui se heurtent. EN: two clashing truths.', 'a1-scene'),
        mc('Selon Irène, le plan oui, puis non, mène à...', ['une conclusion déjà écrite', 'une ouverture forte', 'un plan analytique'], 0, '« Oui et non » : la fin est connue d’avance. EN: the ending is known in advance.', 'a1-lecture'),
        mc('Une synthèse de documents...', ['rend compte de documents', 'répond à une question par une thèse', 'donne l’avis de son auteur'], 0, 'L’essai répond ; la synthèse rend compte. EN: the synthesis reports.', 'a1-usages'),
        tI('Complète la règle. Un mot.', 'Un sujet cache une ... : ton plan la déplie.', 'tension', `${REFRAME} EN: ${REFRAME_EN}`, 'a1-check'),
        tI('Complète la question à poser au sujet. Un mot.', 'Où le sujet ...-t-il ?', 'résiste', 'Chercher ce qui résiste, c’est chercher la tension. EN: look for what pushes back.', 'a1-usages'),
        eS('Recopier le sujet sous forme de question, c’est poser une problématique.', 'Recopier le sujet sous forme de question, ce n’est pas poser une problématique.', 'La redite n’apprend rien au lecteur. EN: a restatement teaches nothing.', 'a1-check', ['Recopier le sujet sous forme de question, ce n’est pas une problématique.']),
        lC('Écoute. Cette phrase pose-t-elle un problème ?', fr(E(1600)), ['Non : elle recopie le sujet.', 'Oui : elle met deux idées en tension.'], 0, 'Elle ajoute seulement « nous nous demanderons si ». EN: it only adds a formula.', 'a1-scene'),
      ],
    },
    {
      id: 'r2-termes', label: 'Les termes du sujet', targets: ['termes-ignores'],
      questions: [
        mc('« Nos loisirs sont-ils encore du temps libre ? » Que suppose « encore » ?', ['que quelque chose a changé', 'que les loisirs sont nombreux', 'rien de particulier'], 0, 'Un changement : nos loisirs ont été libres. EN: a change.', 'a2-lecture'),
        mc('Définir les termes du sujet, c’est...', ['chercher le sens qui fait problème', 'recopier le dictionnaire'], 0, 'Une définition utile fait apparaître la tension. EN: a useful definition shows the tension.', 'a2-termes'),
        mc('Écrire sur le travail pour ce sujet sur les loisirs, c’est...', ['un hors-sujet', 'une bonne délimitation', 'une définition'], 0, 'On glisse vers un sujet voisin plus facile. EN: an easier neighbouring subject.', 'a2-erreurs'),
        mc('Le second sens de « libre », selon Irène :', ['un temps dont on dispose comme on veut', 'un temps gratuit'], 0, 'Le sens exigeant, qui crée la tension. EN: the demanding sense.', 'a2-lecture'),
        tI('Complète. Un mot.', 'Définir les termes, c’est déjà commencer à ... .', 'répondre', 'La définition oriente la réponse. EN: defining already answers.', 'a2-termes'),
        tI('Comment appelle-t-on le geste de dire ce qu’on traite et ce qu’on laisse ? Un verbe.', 'Il faut ... le sujet.', 'délimiter', 'Un sujet trop large perd sa tension. EN: to set limits.', 'a2-termes', ['circonscrire']),
        eS('Je retiens le sens qui fait disparaître la difficulté.', 'Je retiens le sens qui fait apparaître la difficulté.', 'Le sens utile est celui qui pose problème. EN: the meaning that causes trouble.', 'a2-essai'),
        lC('Écoute. Cette phrase est-elle un bon début d’essai ?', fr(E(1624)), ['Non : c’est une généralité qui ne dit rien.', 'Oui : elle pose le thème.'], 0, '« Depuis toujours » ne nous apprend rien. EN: says nothing new.', 'a2-erreurs'),
      ],
    },
    {
      id: 'r3-tension', label: 'La tension', targets: ['problematique-sans-tension'],
      questions: [
        mc('« La problématique du confort » est...', ['un thème', 'une problématique', 'un paradoxe'], 0, 'Un domaine, pas une tension. EN: a theme.', 'a3-tension'),
        mc('« Ce qui devait nous libérer finit par nous attacher. » C’est...', ['un paradoxe', 'une liste de problèmes', 'un thème'], 0, 'Un effet qui produit son contraire. EN: a paradox.', 'a3-tension'),
        mc('Quelle introduction confond problématique et problèmes ?', ['celle qui énumère énergie, sédentarité et coût', 'celle de la coupure de courant'], 0, 'L’introduction B énumère sans mettre en tension. EN: it lists.', 'a3-lecture'),
        mc('Une vraie problématique...', ['peut recevoir deux réponses sérieuses', 'n’a qu’une réponse'], 0, 'Sinon, il n’y a rien à déplier. EN: two serious answers.', 'a3-juger'),
        tI('Complète. Un mot.', 'Une problématique met face à face deux idées ... toutes les deux.', 'vraies', 'Pas une vérité contre une erreur. EN: both true.', 'a3-tension'),
        tI('Comment appelle-t-on une tension poussée au bout, où une chose produit son contraire ? Un mot.', 'C’est un ... .', 'paradoxe', 'La forme la plus forte de la tension. EN: paradox.', 'a3-piege'),
        eS('Une problématique est un thème, pas une tension.', 'Une problématique est une tension, pas un thème.', 'Le thème annonce un domaine ; la tension dit ce qui résiste. EN: tension, not theme.', 'a3-tension', ['Une problématique est une tension et non un thème.']),
        lC('Écoute. Est-ce une problématique de C1 ?', fr(E(1630)), ['Oui : deux idées en tension dans une même question.', 'Non : elle appelle oui ou non.'], 0, 'Libérer de l’effort, rendre dépendant : la tension est là. EN: the tension is there.', 'a3-juger'),
      ],
    },
    {
      id: 'r4-analytique', label: 'Le plan analytique', targets: ['causes-en-vrac'],
      questions: [
        mc('Le plan analytique suit l’ordre...', ['constat, causes, enjeux', 'pour, contre, synthèse', 'causes, constat, avis'], 0, 'Expliquer avant de juger. EN: facts, causes, stakes.', 'a4-plan'),
        mc('Par quelle cause Solène commence-t-elle ?', ['le prix, la plus visible', 'le besoin d’être ensemble'], 0, 'Du visible au profond. EN: from visible to deep.', 'a4-lecture'),
        mc('Pourquoi le prix ne suffit-il pas ?', ['les jeux vidéo sont souvent moins chers encore', 'les jeux coûtent trop cher'], 0, 'Une cause visible a ses limites. EN: the visible cause has limits.', 'a4-lecture'),
        mc('« Les jeux sont amusants, anciens, variés. » C’est...', ['un catalogue', 'une analyse', 'une hiérarchie de causes'], 0, 'Des qualités alignées n’expliquent rien. EN: a catalogue.', 'a4-erreurs'),
        tI('Complète. Un mot.', 'Le plan analytique explique un phénomène avant de le ... .', 'juger', 'Le jugement vient après l’analyse. EN: before judging.', 'a4-plan'),
        tI('Complète. Un mot.', 'Il ne suffit pas d’aligner des causes, il faut les ... .', 'relier', 'Ranger et relier, c’est argumenter. EN: link them.', 'a4-ranger', ['hiérarchiser', 'ranger']),
        eS('Je range les causes de la plus profonde à la plus visible.', 'Je range les causes de la plus visible à la plus profonde.', 'On part de l’évidence pour descendre. EN: visible first.', 'a4-plan'),
        lC('Écoute. Que fait cette phrase dans un plan analytique ?', fr(E(1648)), ['Elle dit l’enjeu du phénomène.', 'Elle pose le constat.'], 0, 'Ce que le phénomène révèle. EN: the stake.', 'a4-plan'),
      ],
    },
    {
      id: 'r5-comparatif', label: 'Le plan comparatif', targets: ['comparaison-en-blocs'],
      questions: [
        mc('Un plan comparatif avance...', ['critère par critère', 'une réalité après l’autre'], 0, 'Deux blocs juxtaposent. EN: criterion by criterion.', 'a5-comparer'),
        mc('« À l’instar de » introduit...', ['une ressemblance', 'une opposition', 'une cause'], 0, 'Il veut dire « comme ». EN: a similarity.', 'a5-juger'),
        mc('Quels sont les trois critères de Yanis ?', ['le temps, l’espace, les liens', 'le prix, le bruit, la sécurité'], 0, 'Un critère par partie. EN: time, space, connections.', 'a5-lecture'),
        mc('« Autant la ville rapproche les gens, ... elle les presse. »', ['autant', 'mais', 'donc'], 0, 'Les deux moitiés, sans « mais ». EN: autant… autant.', 'a5-piege'),
        tI('Complète. Un mot.', 'Au même ... que le jardin, la place est un espace partagé.', 'titre', '« Au même titre que » met deux choses sur le même plan. EN: in the same way as.', 'a5-piege'),
        tI('Complète. Un mot.', 'D’abord les ressemblances, puis la différence qui ... .', 'décide', 'Garde la différence qui répond à ta question. EN: the deciding difference.', 'a5-comparer', ['compte', 'tranche']),
        eS('À l’instar du citadin, le rural gagne de l’espace et perd du temps sur la route.', 'À la différence du citadin, le rural gagne de l’espace et perd du temps sur la route.', 'C’est une opposition. EN: a contrast.', 'a5-piege', ['Contrairement au citadin, le rural gagne de l’espace et perd du temps sur la route.']),
        lC('Écoute. Ce plan compare-t-il vraiment ?', fr(E(1664)), ['Non : ce sont deux blocs.', 'Oui : critère par critère.'], 0, 'Une partie par réalité ne compare rien. EN: two blocks.', 'a5-juger'),
      ],
    },
    {
      id: 'r6-choix', label: 'Choisir son plan', targets: ['plan-par-reflexe'],
      questions: [
        mc('Qui choisit le plan, selon Irène ?', ['la problématique', 'le premier mot du sujet', 'le professeur'], 0, 'La forme de la tension décide. EN: the question decides.', 'a6-ecoute'),
        mc('« Pourquoi l’ennui fait-il si peur aujourd’hui ? » appelle un plan...', ['analytique', 'comparatif'], 0, 'Un « pourquoi » demande une explication. EN: analytical.', 'a6-choix'),
        mc('« L’ennui des enfants et celui des adultes sont-ils le même ennui ? » appelle un plan...', ['comparatif', 'analytique', 'thématique'], 0, 'Deux réalités à confronter. EN: comparative.', 'a6-juger'),
        mc('Au C1, la troisième partie d’un plan dialectique...', ['dépasse l’opposition', 'fait la moyenne'], 0, 'Souvent, elle dit à quelles conditions. EN: goes beyond.', 'a6-choix'),
        tI('Complète. Un mot.', 'Ce n’est pas le sujet qui choisit le plan, c’est la ... .', 'problématique', 'La règle du C1. EN: the problem question.', 'a6-juger'),
        tI('Complète. Un mot.', 'La troisième partie ... les deux premières ; elle ne les coupe pas en deux.', 'dépasse', 'Dépasser, pas faire la moyenne. EN: goes beyond.', 'a6-erreurs'),
        eS('Chaque partie peut parler d’autre chose que la problématique.', 'Chaque partie doit répondre à la problématique.', 'Sinon, elle répond à une autre question. EN: each part answers the question.', 'a6-juger', ['Chaque partie doit répondre, à sa manière, à la problématique.']),
        lC('Écoute. Que propose Karim pour sa troisième partie ?', fr(E(1672)), ['un compromis', 'un dépassement'], 0, '« Un peu des deux » : la moyenne. EN: a compromise.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-transitions', label: 'Les transitions-bilan', targets: ['transition-vide'],
      questions: [
        mc('« Passons maintenant à la deuxième partie. » Cette transition...', ['ne dit pas ce qui a été établi', 'résume et relance'], 0, 'Une annonce nue. EN: a bare announcement.', 'a7-piege'),
        mc('Une transition-bilan...', ['résume, puis relance', 'change de sujet', 'annonce la conclusion'], 0, 'Ce qui est établi, puis pourquoi continuer. EN: sums up, moves on.', 'a7-liens'),
        mc('« Si le confort libère le corps, il n’est pas certain qu’il libère l’esprit. » Cette phrase...', ['concède, puis ouvre une limite', 'change de sujet'], 0, 'Elle garde l’acquis et nomme la faille. EN: concedes, then limits.', 'a7-liens'),
        mc('La dernière phrase d’une partie est...', ['une conclusion partielle', 'une ouverture', 'une problématique'], 0, 'Elle tire la leçon de la partie. EN: a partial conclusion.', 'a7-liens'),
        tI('Complète. Un mot.', 'Le confort nous a donc libérés ; reste à savoir à quel ... .', 'prix', 'Le bilan, puis la question. EN: at what cost.', 'a7-lecture'),
        tI('Complète. Un mot.', 'Cette liberté a pourtant une ... .', 'contrepartie', 'Ce que la première partie laissait dans l’ombre. EN: a price.', 'a7-lecture'),
        eS('Une transition qui n’annonce rien guide le lecteur.', 'Une transition qui n’annonce rien laisse le lecteur au milieu du gué.', 'Le lecteur ne sait pas pourquoi la suite arrive. EN: it strands the reader.', 'a7-juger', ['Une transition qui n’annonce rien perd le lecteur.', 'Une transition qui n’annonce rien ne guide pas le lecteur.']),
        lC('Écoute. Cette transition résume-t-elle ?', fr(E(1691)), ['Oui : un bilan, puis une question.', 'Non : elle change de sujet.'], 0, 'Elle dit ce qui est établi, puis relance. EN: summary, then question.', 'a7-liens'),
      ],
    },
    {
      id: 'r8-conclure', label: 'Conclure et ouvrir', targets: ['conclusion-creuse'],
      questions: [
        mc('« De plus, le confort coûte cher aux ménages », dans une conclusion, c’est...', ['un argument nouveau, à éviter', 'une bonne ouverture', 'un bon bilan'], 0, 'Un argument rouvre le débat. EN: a new argument.', 'a8-erreurs'),
        mc('Une bonne ouverture...', ['naît de la réponse donnée', 'demande l’avis du lecteur', 'résume le texte'], 0, 'Elle prolonge, déplace ou élargit. EN: comes from the answer.', 'a8-conclure'),
        mc('« Le confort est une liberté, mais aussi une dépendance. » Cette réponse...', ['juxtapose sans répondre', 'garde la tension et répond'], 0, 'Elle pose les deux sans dire comment elles tiennent. EN: juxtaposes.', 'a8-erreurs'),
        mc('« La même question se pose pour les villes. » Cette ouverture...', ['déplace la question à une autre échelle', 'ajoute un argument'], 0, 'Une autre échelle. EN: shifts scale.', 'a8-juger'),
        tI('Complète. Un mot.', 'La conclusion répond à la problématique sans effacer la ... .', 'tension', 'Elle garde ce que chaque partie a établi. EN: the tension.', 'a8-conclure'),
        tI('Complète. Un mot.', 'Une ouverture ... la réflexion ; elle ne la recommence pas.', 'prolonge', 'Elle va plus loin, sans repartir de zéro. EN: extends.', 'a8-conclure', ['élargit']),
        eS('Aucune question nouvelle dans la conclusion, mais un argument nouveau à la fin.', 'Aucun argument nouveau dans la conclusion, mais une question nouvelle à la fin.', 'L’inverse : l’argument est interdit, la question bienvenue. EN: no new argument, a new question.', 'a8-juger'),
        lC('Écoute. Cette fin ouvre-t-elle vraiment ?', fr(E(1705)), ['Non : c’est une formule creuse.', 'Oui : elle prolonge la réponse.'], 0, 'Elle sert partout, donc n’ouvre rien. EN: empty formula.', 'a8-erreurs'),
      ],
    },
    {
      id: 'r9-dossier', label: 'Lire un dossier', targets: ['document-par-document'],
      questions: [
        mc('Pour une synthèse, on lit le dossier...', ['idée par idée', 'document par document'], 0, 'Pour chaque idée, ses documents. EN: idea by idea.', 'a9-grille'),
        mc('Sur quoi la psychologue et l’institutrice se rejoignent-elles ?', ['l’ennui est une étape utile', 'l’ennui est une souffrance', 'les écrans sont dangereux'], 0, 'Une convergence. EN: boredom is useful.', 'a9-lecture'),
        mc('Le père de famille...', ['diverge : il préfère occuper ses enfants', 'rejoint la psychologue'], 0, 'Une divergence. EN: he differs.', 'a9-lecture'),
        mc('« Le document 1 dit… Le document 2 dit… » C’est...', ['trois résumés à la suite', 'une synthèse', 'une grille de lecture'], 0, 'Sans lien entre les documents. EN: summaries end to end.', 'a9-juger'),
        tI('Complète. Un mot.', 'Je classe les idées du dossier, pas les ... .', 'documents', 'La règle de lecture. EN: not the documents.', 'a9-juger'),
        tI('Complète. Un mot.', 'La synthèse a besoin d’une problématique, mais ... .', 'neutre', 'Sans prendre parti. EN: neutral.', 'a9-piege'),
        eS('Une idée qu’un seul document avance ne compte pas.', 'Une idée qu’un seul document avance compte aussi, si elle éclaire le débat.', 'Une idée isolée peut éclairer les autres. EN: a lone idea can count.', 'a9-juger', ['Une idée qu’un seul document avance compte aussi.']),
        lC('Écoute. Que dit cette phrase du dossier ?', fr(E(1719)), ['une convergence entre deux documents', 'une divergence'], 0, 'Elles se rejoignent. EN: a convergence.', 'a9-juger'),
      ],
    },
    {
      id: 'r10-synthese', label: 'Écrire la synthèse', targets: ['synthese-avec-avis'],
      questions: [
        mc('« Il est évident que l’ennui est une chance. » Dans une synthèse, c’est...', ['un avis interdit', 'une reformulation'], 0, 'Un jugement personnel. EN: an opinion.', 'a10-piege'),
        mc('« Des études récentes montrent que les écrans… » Le problème :', ['une idée absente du dossier', 'une phrase trop courte', 'un mot-clé repris'], 0, 'Rien hors du dossier. EN: an outside idea.', 'a10-regles'),
        mc('Dans une synthèse, on peut reprendre...', ['un mot-clé', 'une phrase entière'], 0, 'Le reste se reformule. EN: a key word.', 'a10-regles'),
        mc('Comment la copie B est-elle organisée ?', ['par idées', 'document par document', 'par ordre d’importance des auteurs'], 0, 'Convergence, condition, divergence. EN: by ideas.', 'a10-lecture'),
        tI('Complète. Un mot.', 'Je ... chaque idée avec mes propres mots.', 'reformule', 'Reformuler prouve qu’on a compris. EN: reword.', 'a10-regles'),
        tI('Complète. Un mot.', 'La consigne donne une ... de mots, et je la respecte.', 'fourchette', 'Un minimum et un maximum. EN: a range.', 'a10-regles'),
        eS('Une synthèse dit ce que disent les documents, avec tes mots, et avec ton avis.', 'Une synthèse dit ce que disent les documents, avec tes mots, sans ton avis.', 'L’avis est interdit. EN: no opinion.', 'a10-piege'),
        lC('Écoute. Cette phrase a-t-elle sa place dans une synthèse ?', fr(E(1740)), ['Non : « heureusement » juge.', 'Oui : elle reformule un document.'], 0, 'Un adverbe qui juge. EN: a judging adverb.', 'a10-piege'),
      ],
    },
    {
      id: 'r11-essai', label: 'L’essai sur dossier', targets: ['essai-hors-genre'],
      questions: [
        mc('L’essai argumenté, à la différence de la synthèse...', ['prend position', 'rend compte sans avis'], 0, 'Il défend une thèse pour un destinataire. EN: takes a position.', 'a11-juger'),
        mc('« Dans cette dissertation, nous verrons… », dans une lettre ouverte, c’est...', ['un ton scolaire hors genre', 'un bon début', 'une formule de politesse'], 0, 'Une lettre s’adresse à quelqu’un. EN: school tone.', 'a11-erreurs'),
        mc('Quel appui sur le dossier est le meilleur ?', ['« Comme le rappelle l’article du Courrier, la cour a été fermée trois après-midi. »', '« Comme le dit le dossier, c’est important. »'], 0, 'Un fait précis, attribué. EN: precise and attributed.', 'a11-erreurs'),
        mc('Une lettre ouverte se termine par...', ['une demande précise et une formule adaptée', 'un résumé du dossier'], 0, 'Le destinataire sait ce qu’on attend. EN: request and formula.', 'a11-gestes'),
        tI('Complète. Un mot.', 'Un essai argumenté a un ..., une situation et un but.', 'destinataire', 'À qui tu écris. EN: an addressee.', 'a11-gestes'),
        tI('Complète. Un mot.', 'Je cite le dossier pour appuyer une idée, pas pour la ... .', 'remplacer', 'Le dossier appuie. EN: replace.', 'a11-gestes'),
        eS('L’essai prend position ; il recopie le dossier.', 'L’essai prend position ; il s’appuie sur le dossier sans le recopier.', 'Il utilise, il ne recopie pas. EN: draws on it, no copying.', 'a11-juger', ['L’essai prend position ; il s’appuie sur le dossier.']),
        lC('Écoute. Que fait cette phrase dans la lettre de Nadia ?', fr(E(1752)), ['Elle annonce une objection et y répond.', 'Elle formule la demande finale.'], 0, 'L’objection, puis sa réponse. EN: objection and answer.', 'a11-gestes'),
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
    { front: 'two true ideas that clash in a subject', back: 'la tension', say: fr(E(1606)) },
    { front: 'something that produces its own opposite', back: 'un paradoxe', say: fr(E(1628)) },
    { front: 'the small word that carries the problem', back: 'encore, seulement, faut-il', say: fr(E(1614)) },
    { front: 'facts, causes ranked, stakes', back: 'le plan analytique', say: fr(E(1642)) },
    { front: 'two realities, criterion by criterion', back: 'le plan comparatif', say: fr(E(1656)) },
    { front: 'what chooses the plan', back: 'la problématique', say: fr(E(1681)) },
    { front: 'sum up, then move on', back: 'la transition-bilan', say: fr(E(1689)) },
    { front: 'the last sentence, born of the answer', back: 'une ouverture qui prolonge', say: fr(E(1714)) },
    { front: 'the documents, your words, no opinion', back: 'la synthèse', say: fr(E(1729)) },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Dissertation et synthèse, en résumé',
  body: `${REFRAME} Tu sais maintenant lire un sujet jusqu’à sa tension, choisir le plan qui la déplie, relier tes parties et conclure sans trahir ce que tu as montré. Tu sais aussi rendre compte d’un dossier sans avis, et t’en servir pour défendre une position dans une vraie lettre. La suite, ${RAPPORTS_REF_PLANNED} : écrire au travail, dans le rapport et le compte rendu. EN: Next: writing at work, in reports and minutes.`,
  points: [
    'Les termes d’abord : le petit mot porte souvent le problème.',
    'La problématique est une tension ; le plan la déplie, la troisième partie la dépasse.',
    'Une transition résume, puis relance ; une ouverture naît de la réponse.',
    'La synthèse : tes mots, sans avis. L’essai : ta position, appuyée sur le dossier.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['tension', 'synthese'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ton essai',
    opener: {
      line: 'Une halle fermée, deux projets, une ville qui consulte : à toi d’écrire au maire une lettre qui pose la vraie question et y répond. EN: A closed market hall, two projects, a town that consults: your turn to write the mayor a letter that asks the real question and answers it.',
      imageRef: 'lessons/dissertation-synthese/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit une lettre ouverte construite sur un dossier et passé l’examen : quatre-vingt-huit questions, onze rounds. EN: You wrote an open letter built on a dossier and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a12-dossier', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-tension', 'a12-quiz/r6-choix', 'a12-quiz/r9-dossier'],
  },
  sections: [
    A12_DOSSIER, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-sujet', title: 'Ce qui résiste dans le sujet', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : ce sont les questions à poser à un sujet. EN: say each line aloud.', items: [E(1601), E(1602), E(1603), E(1606), E(1610), E(1611)], audio: AUDIO },
  { id: 'd-termes', title: 'Le mot qui compte', format: 'mcq' as const, coach: 'Cherche le petit mot qui porte le problème. EN: find the small word.', q: '« Faut-il seulement punir ? » Le mot qui porte le problème :', opts: ['seulement', 'punir'], correct: 0, why: 'Il demande s’il faut faire autre chose aussi. EN: “only”.', items: [E(1612), E(1614), E(1617), E(1619), E(1620), E(1625)], audio: AUDIO },
  { id: 'd-tension', title: 'Tension ou thème', format: 'sort' as const, coach: 'Deux piles : une tension, ou un faux-semblant ? EN: tension or fake?', buckets: ['une tension', 'un thème, une liste, une redite'], items: [E(1630), E(1634), E(1631), E(1635), E(1628), E(1633)], audio: AUDIO },
  { id: 'd-analytique', title: 'Constat, causes, enjeux', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute, dans l’ordre du plan analytique. EN: in analytical order.', items: [E(1644), E(1645), E(1647), E(1648), E(1652), E(1653)], audio: AUDIO },
  { id: 'd-comparatif', title: 'Ressembler ou différer', format: 'mcq' as const, coach: 'Choisis le lien qui dit la ressemblance ou la différence. EN: similarity or difference.', q: '... la ville, la campagne a ses embouteillages.', opts: ['À l’instar de', 'À la différence de'], correct: 0, why: 'C’est une ressemblance. EN: a similarity.', items: [E(1656), E(1658), E(1659), E(1660), E(1661), E(1662)], audio: AUDIO },
  { id: 'd-choix', title: 'Le plan qui convient', format: 'mcq' as const, coach: 'Regarde la problématique, pas le premier mot du sujet. EN: look at the question.', q: '« Pourquoi l’ennui fait-il si peur ? » Quel plan ?', opts: ['analytique', 'comparatif'], correct: 0, why: 'Un « pourquoi » demande une explication. EN: explain.', items: [E(1681), E(1682), E(1684), E(1677), E(1679), E(1686)], audio: AUDIO },
  { id: 'd-transitions', title: 'Résumer, puis relancer', format: 'flashcard' as const, coach: 'Dis chaque transition à voix haute : le bilan, puis la relance. EN: summary, then the next step.', items: [E(1688), E(1691), E(1692), E(1693), E(1694), E(1695)], audio: AUDIO },
  { id: 'd-conclure', title: 'Une fin qui ouvre', format: 'sort' as const, coach: 'Deux piles : une ouverture qui naît de la réponse, ou une fin creuse ? EN: earned or empty?', buckets: ['une vraie ouverture', 'une fin creuse'], items: [E(1706), E(1704), E(1707), E(1705), E(1708), E(1712)], audio: AUDIO },
  { id: 'd-dossier', title: 'Par idées', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : elles classent le dossier par idées. EN: they sort the dossier by ideas.', items: [E(1716), E(1717), E(1719), E(1720), E(1723), E(1727)], audio: AUDIO },
  { id: 'd-synthese', title: 'Fidèle ou interdit', format: 'sort' as const, coach: 'Deux piles : la phrase a-t-elle sa place dans une synthèse ? EN: allowed or not?', buckets: ['fidèle au dossier', 'interdit dans une synthèse'], items: [E(1739), E(1734), E(1735), E(1740), E(1744), E(1743)], audio: AUDIO },
  { id: 'd-essai', title: 'Les gestes de la lettre', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : adresse, appui, objection, demande. EN: address, support, objection, request.', items: [E(1748), E(1749), E(1752), E(1750), E(1755), E(1757)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'sujet-recopie', description: 'Restates the subject as the problem question, or opens on a generality, so the essay has nothing to unfold.', detectOn: ['a1-scene', 'a1-lecture', 'a1-check', 'a12-mission'], drill: 'd-sujet', retest: 'd-sujet' },
  { id: 'termes-ignores', description: 'Skips the small words of the subject, keeps a single dictionary meaning, or drifts to a neighbouring subject.', detectOn: ['a2-juger', 'a2-erreurs', 'a2-check', 'a12-mission'], drill: 'd-termes', retest: 'd-termes' },
  { id: 'problematique-sans-tension', description: 'Writes a theme, a list of problems or a yes / no question instead of a problem question that sets two true ideas against each other.', detectOn: ['a3-juger', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-tension', retest: 'd-tension' },
  { id: 'causes-en-vrac', description: 'Lists causes or qualities without ranking or linking them, or judges a phenomenon before explaining it.', detectOn: ['a4-ranger', 'a4-erreurs', 'a4-check', 'a12-mission'], drill: 'd-analytique', retest: 'd-analytique' },
  { id: 'comparaison-en-blocs', description: 'Compares in two blocks instead of criterion by criterion, or uses à l’instar de / au même titre que for a contrast.', detectOn: ['a5-juger', 'a5-piege', 'a5-check', 'a12-mission'], drill: 'd-comparatif', retest: 'd-comparatif' },
  { id: 'plan-par-reflexe', description: 'Picks the plan from the first word of the subject, or writes a third part that averages the first two instead of going beyond.', detectOn: ['a6-juger', 'a6-erreurs', 'a6-check', 'a12-mission'], drill: 'd-choix', retest: 'd-choix' },
  { id: 'transition-vide', description: 'Moves between parts with bare announcements (passons maintenant à) that say nothing of what was established or why the next part follows.', detectOn: ['a7-juger', 'a7-piege', 'a7-check', 'a12-mission'], drill: 'd-transitions', retest: 'd-transitions' },
  { id: 'conclusion-creuse', description: 'Ends with a new argument, a one-sided answer, a juxtaposition of the parts, or an empty formula instead of an earned opening.', detectOn: ['a8-juger', 'a8-erreurs', 'a8-check', 'a12-mission'], drill: 'd-conclure', retest: 'd-conclure' },
  { id: 'document-par-document', description: 'Reads and reports a dossier one document after another instead of by ideas, missing convergences and divergences.', detectOn: ['a9-juger', 'a9-piege', 'a9-check', 'a12-mission'], drill: 'd-dossier', retest: 'd-dossier' },
  { id: 'synthese-avec-avis', description: 'Puts an opinion, a judging adverb, an outside idea or copied sentences into a synthesis.', detectOn: ['a10-piege', 'a10-construire', 'a10-check', 'a12-mission'], drill: 'd-synthese', retest: 'd-synthese' },
  { id: 'essai-hors-genre', description: 'Writes a school essay instead of a letter, quotes the dossier vaguely or copies it, or forgets the addressee and the request.', detectOn: ['a11-juger', 'a11-erreurs', 'a11-check', 'a12-mission'], drill: 'd-essai', retest: 'd-essai' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here only; every sheet is reached by
 *  `sheetId` from at least one mission.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-sujet', 'Du sujet à la problématique', ['lire les termes', 'les fausses problématiques', 'formuler une tension'], [
    teach('sheet-sujet-teach', 'Trouver la tension',
      `${REFRAME} Lis chaque mot du sujet, y compris les petits (encore, seulement, faut-il, nos). Définis-les avec tes mots, puis mets les définitions côte à côte : là où deux sens se heurtent, tu tiens ta tension. Délimite ensuite ce que tu traites. Ta problématique met face à face deux idées vraies, dans une question qui peut recevoir deux réponses sérieuses. EN: Define every word, find where meanings clash, delimit, then put two true ideas into one question.`),
    table('sheet-sujet-faux', 'Ce qui n’est pas une problématique', ['La fausse piste', 'Exemple', 'Pourquoi ça ne marche pas'], [
      ['le sujet recopié', 'Nous nous demanderons si…', 'il n’apprend rien au lecteur'],
      ['le thème', 'la problématique du confort', 'un domaine, pas une tension'],
      ['la liste de problèmes', 'le confort pose de nombreux problèmes', 'il énumère sans opposer'],
      ['le oui ou non', 'le confort est-il bon ou mauvais ?', 'la réponse « oui et non » est écrite d’avance'],
      ['la généralité', 'depuis toujours, les hommes…', 'elle ne pose aucun problème'],
    ]),
    table('sheet-sujet-formes', 'Quelques formes écrites de la tension', ['Forme', 'Exemple'], [
      ['comment X, qui…, peut-il… ?', 'Comment le confort, qui nous libère de l’effort, peut-il nous rendre dépendants ?'],
      ['dans quelle mesure… sans… ?', 'Dans quelle mesure peut-on profiter du confort sans y perdre sa liberté ?'],
      ['constat : pourquoi… ?', 'Chaque machine nous fait gagner du temps : pourquoi en manquons-nous toujours ?'],
      ['comment… sans… ?', 'Comment préserver un lieu sans le figer ?'],
    ]),
  ]),
  sheet('sheet-plans', 'Les quatre plans et le choix', ['dialectique, thématique, analytique, comparatif', 'quelle problématique, quel plan'], [
    teach('sheet-plans-teach', 'La problématique choisit le plan',
      `${Cap(ARGU_REF)} t’a donné deux plans et une règle : pour ou contre, plan dialectique ; quels effets, plan thématique. Au C1, tu en as quatre, et ce n’est plus le premier mot du sujet qui décide : c’est la forme de ta tension. La troisième partie d’un plan dialectique ne fait pas la moyenne des deux premières ; elle les dépasse, souvent en disant à quelles conditions chaque thèse vaut. EN: Four plans; the shape of your tension chooses; the third part goes beyond.`),
    table('sheet-plans-table', 'Quatre plans', ['Plan', 'Pour quelle problématique', 'Les parties', 'Le piège'], [
      ['dialectique', 'deux thèses qui s’affrontent', 'l’une, l’autre, le dépassement', '« un peu des deux »'],
      ['thématique', 'les aspects d’une question', 'un aspect par partie', 'des aspects qui ne répondent pas à la question'],
      ['analytique', 'un phénomène à expliquer', 'constat, causes rangées, enjeux', 'le catalogue de causes'],
      ['comparatif', 'deux réalités à confronter', 'un critère par partie', 'deux blocs juxtaposés'],
    ]),
    table('sheet-plans-liens', 'Les liens de la comparaison', ['Lien', 'Il dit', 'Exemple'], [
      ['à l’instar de', 'une ressemblance (soutenu)', 'À l’instar de la ville, la campagne a ses embouteillages.'],
      ['au même titre que', 'deux choses sur le même plan', 'Au même titre que le jardin, la place est un espace partagé.'],
      ['à la différence de', 'une opposition', 'À la différence du citadin, le rural gagne de l’espace.'],
      ['autant… autant', 'deux faces d’une même chose', 'Autant la ville rapproche les gens, autant elle les presse.'],
    ]),
  ]),
  sheet('sheet-liens', 'Transitions et conclusion', ['la transition-bilan', 'la conclusion', 'trois ouvertures'], [
    teach('sheet-liens-teach', 'Résumer, relancer, conclure, ouvrir',
      `Une transition-bilan dit ce que la partie a établi, puis la limite, l’objection ou la question qui oblige à aller plus loin. La conclusion fait le bilan en une ou deux phrases, répond à la problématique sans effacer la tension, puis ouvre une question que sa réponse fait naître. Pour les mots qui ferment un texte, reporte-toi à ${REFORMULER_REF}. EN: Sum up, move on; answer without erasing the tension; open a question born of the answer.`),
    table('sheet-liens-transitions', 'Six transitions', ['Mouvement', 'Exemple'], [
      ['bilan, puis question', 'Le confort nous a donc libérés de bien des contraintes ; reste à savoir à quel prix.'],
      ['concession, puis limite', 'Si le confort libère le corps, il n’est pas certain qu’il libère l’esprit.'],
      ['la contrepartie', 'Cette liberté a pourtant une contrepartie, que la première partie laissait dans l’ombre.'],
      ['une fois établi', 'Une fois établi ce que le confort nous donne, il faut mesurer ce qu’il nous prend.'],
      ['l’approfondissement', 'Ce premier constat appelle une question plus délicate.'],
      ['à éviter', 'Passons maintenant à la deuxième partie.'],
    ]),
    table('sheet-liens-ouvertures', 'Trois ouvertures', ['Geste', 'Ce qu’il fait', 'Exemple'], [
      ['prolonger', 'pose la question que ta réponse fait naître', 'Reste à savoir si une société peut apprendre l’inconfort à ses enfants.'],
      ['déplacer', 'porte la question à une autre échelle', 'La même question se pose pour les villes et leurs services.'],
      ['élargir', 'porte la question à un domaine voisin', 'On pourrait en dire autant du numérique.'],
      ['à éviter', 'une formule qui sert partout', 'Seul l’avenir nous le dira.'],
    ]),
  ]),
  sheet('sheet-synthese', 'La synthèse de documents', ['lire par idées', 'les règles', 'compter ses mots'], [
    teach('sheet-synthese-teach', 'Un texte nouveau, tes mots, sans ton avis',
      `La synthèse de documents est un texte nouveau qui rend compte de plusieurs documents, organisé par idées et non document par document. Tu y écris avec tes propres mots : tu peux garder un mot-clé, jamais une phrase entière. Tu n’y donnes aucun avis et n’y ajoutes aucune idée absente du dossier, même juste. On compte en général comme un mot tout ce qui se trouve entre deux espaces ; vérifie toujours la consigne, qui fixe la fourchette. ${Cap(EXPOSE_REF)} t’a appris la synthèse à voix haute ; à l’écrit, ces règles s’y ajoutent. EN: One new text by ideas, your words, no opinion, no outside idea, within the word range.`),
    table('sheet-synthese-grille', 'Une grille de lecture', ['Idée', 'Document 1', 'Document 2', 'Document 3'], [
      ['l’ennui est une étape utile', 'oui : l’imagination se met en route', 'non : une petite souffrance', 'oui : les élèves inventent'],
      ['il faut le traverser', 'garder des heures vides', 'le raccourcir', 'accepter de le traverser'],
      ['les agendas trop pleins', 'oui', 'non évoqué', 'non évoqué'],
    ]),
    table('sheet-synthese-regles', 'Permis, interdit', ['Permis', 'Interdit'], [
      ['un plan par idées', 'trois résumés à la suite'],
      ['un mot-clé du dossier', 'une phrase recopiée'],
      ['selon l’auteure, pour le père, en revanche', 'à mon avis, heureusement, il est évident que'],
      ['ce que disent les documents', 'une idée extérieure, même juste'],
      ['une problématique neutre', 'une thèse personnelle'],
    ]),
  ]),
  sheet('sheet-essai', 'L’essai argumenté sur dossier', ['les gestes du genre', 'le plan de la lettre', 'les formules'], [
    teach('sheet-essai-teach', 'Prendre position pour quelqu’un',
      `L’essai argumenté prend une forme réelle : lettre ouverte, article, contribution. Il a un destinataire, une situation et un but. Il pose une problématique qui fait tension, défend une position, s’appuie sur des faits précis et attribués du dossier sans le recopier, traite l’objection la plus forte (${PERSUADER_REF}) et se termine par une demande précise. EN: A real genre, an addressee, a position supported by attributed facts, the strongest objection, a precise request.`),
    table('sheet-essai-plan', 'Le plan de la lettre ouverte', ['Étape', 'Ce que tu écris'], [
      ['1', 'l’adresse, ta place, pourquoi tu écris'],
      ['2', 'la problématique, puis ta position'],
      ['3', 'deux ou trois idées, chacune appuyée sur un fait attribué'],
      ['4', 'l’objection principale, concédée en partie, puis réfutée'],
      ['5', 'la réponse qui garde la tension, la demande précise'],
      ['6', 'la formule finale'],
    ]),
    table('sheet-essai-formules', 'Formules finales', ['Destinataire', 'Formule'], [
      ['un maire', 'Je vous prie d’agréer, Monsieur le Maire, l’expression de ma haute considération.'],
      ['une directrice', 'Veuillez agréer, Madame la Directrice, l’expression de mes salutations distinguées.'],
      ['un journal, un public', 'Je vous prie de croire à l’expression de mes sentiments les meilleurs.'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-10-[a-z0-9-]+/g) ?? [])];

const PIEGE_BRIEF = 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.';

const REC_DESC: Record<string, string> = {
  'rec-c1-10-copie': 'Karim’s introduction and Irène’s margin note (act 1), TWO VOICES, one take each. Karim: a man in his thirties reading his own copy, confident and flat. Irène: a teacher in her fifties, warm and direct, reading her note as if speaking to him. « Note d’Irène dans la marge » said as a label.',
  'rec-c1-10-termes': 'Irène’s handout (act 2), ONE VOICE, one take, a calm teaching voice. Each quoted word (« nos », « libre », « encore ») with a slight lift, never stressed theatrically.',
  'rec-c1-10-intros': 'The three introductions and Irène’s note (act 3), TWO VOICES: a neutral reader for « Introduction A / B / C » (labels said aloud), Irène for her note. Read A and B with the same seriousness as C: the learner must hear the weakness in the words.',
  'rec-c1-10-piege-tension': PIEGE_BRIEF,
  'rec-c1-10-analytique': 'Solène’s copy (act 4), ONE VOICE, one take, a woman in her twenties reading her own essay, clear and lively.',
  'rec-c1-10-comparatif': 'Yanis’s copy (act 5), ONE VOICE, one take, a man in his twenties, even and precise. « Le temps, d’abord », « L’espace, ensuite », « Les liens, enfin » with a small pause after each.',
  'rec-c1-10-piege-comparatif': PIEGE_BRIEF,
  'rec-c1-10-tutorat': 'REQUIRED FOR THE EAR MISSION (act 6): twelve lines, ONE TAKE, FOUR VOICES, in authored order, as a real tutorial in a small classroom. Irène (lines 1, 5, 7, 9, 11, 12), Karim (2, 4), Solène (6), Yanis (8, 10); line 3 is Irène. Natural conversational pace, light room tone allowed. Lines are hidden: the take must be continuous.',
  'rec-c1-10-transitions': 'The model development (act 7), TWO VOICES: a neutral reader for the essay (« Première partie », « Deuxième partie », « Troisième partie » said as labels), Irène for her remark. The two transitions at the same weight as the rest.',
  'rec-c1-10-piege-transitions': PIEGE_BRIEF,
  'rec-c1-10-conclusions': 'The three conclusions and Irène’s note (act 8), TWO VOICES: a neutral reader for « Conclusion A / B / C » (labels said aloud), Irène for her note. A’s final question with a real rising intonation; C’s last sentence plainly.',
  'rec-c1-10-dossier-ennui': 'The boredom dossier (act 9), FOUR VOICES: a neutral reader for « Document 1 / 2 / 3 » and the introductions; Agnès Morvillier, calm and professional; Bruno Lacaze, a father, slightly weary and humorous; Claire Dutertre, a primary teacher, warm. One take per document.',
  'rec-c1-10-syntheses': 'The two synthèses (act 10), ONE VOICE, one take, a neutral reader. « Copie A » and « Copie B » as labels. Read copy A without irony: its faults must be found in the words.',
  'rec-c1-10-piege-synthese': PIEGE_BRIEF,
  'rec-c1-10-piege-dossier': PIEGE_BRIEF,
  'rec-c1-10-lettre': 'Nadia Chérif’s open letter (act 11), ONE VOICE, one take, a woman in her forties, firm and courteous. The first sentence (the dossier summary) by a neutral reader if available; otherwise the same voice in a flatter tone.',
  'rec-c1-10-dossier': 'THE TASK DOSSIER (act 12), FOUR VOICES: a neutral administrative reader for the title, the note « Documents et chiffres inventés pour l’exercice » and Document 1; Inès Kerbrat, an architect, confident; Gérard Pelletan, an older man, earnest. « Document 1 / 2 / 3 » as labels. Figures in full words.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 10',
  intro: 'At B2 you learned to set a question, announce a plan and choose between a dialectical and a thematic plan. At C1 the question must hold a tension. This lesson teaches you to define a subject’s terms until its tension appears, to choose among four plans from that tension, to link parts with transitions that sum up and move on, and to conclude with an earned opening. It also trains the synthesis of documents, without opinion, and ends with a 250 to 400 word open letter written from a dossier.',
  skill: 'PE',
  grammarAssumed: [ACADEMIQUE_UNIT, ARGU_UNIT, REFORMULER_UNIT, PERSUADER_UNIT, EXPOSE_UNIT],
  grammarIntroduced: [
    'Reading a subject: defining every term including the small words (encore, seulement, faut-il), finding where two meanings clash, and delimiting the subject',
    'The problem question as a tension or a paradox, worded so that it can receive two serious answers, distinguished from a theme, a list of problems and a restated subject',
    'The analytical plan (facts, causes ranked from the most visible to the deepest, stakes) and the comparative plan (criterion by criterion, with à l’instar de, au même titre que, à la différence de, autant… autant)',
    'Choosing the plan from the problem question rather than from the surface of the subject; a dialectical third part that goes beyond instead of averaging',
    'The summing-up transition and the partial conclusion; the conclusion that answers without erasing the tension, and the opening it earns (extend, shift, widen)',
    'The written synthesis of documents (one new text organised by ideas, own words, key words but no whole sentences, no opinion, no outside idea, a word range) and the argumentative essay from a dossier in a real genre (an open letter)',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B2, tu as appris à poser une question, à annoncer un plan et à choisir entre le plan dialectique et le plan thématique. Au C1, ta question doit faire tension. Cette leçon t’apprend à définir les termes d’un sujet jusqu’à voir sa tension, à choisir parmi quatre plans à partir d’elle, à relier tes parties par des transitions qui résument puis relancent, et à conclure par une ouverture qui se mérite. Tu t’exerces aussi à la synthèse de documents, sans avis, et tu finis par une lettre ouverte de 250 à 400 mots écrite à partir d’un dossier.',
    minutes: 180,
    difficulty: 4,
    glyph: 'pli',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: DISSERTATION_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, DOSSIER_TEXT };
export const lessonWithoutTask = (): Lesson => LESSON;
