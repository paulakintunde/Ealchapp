// c1.19.l1 « Les figures et leur effet » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (common block,
// wave 2 notes, wave 5 review lessons). Structural models: b2.30 « Lire un
// texte littéraire » (`../b2/lire-litterature-*`) and the reviewed C1
// workshop c1.08 « Persuader » (`./persuader-*`): layout and helpers copied.
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around ONE ANCHOR TEXT (a session of the
//   invented reading circle « les Mardis du texte », original, quoting a
//   short verified public-domain extract) and ONE FIGURE, in the same beats:
//
//     1. MEET THE TEXT     a `reading` (questions behind `questionsInModal`;
//                          the FIRST is always « Devine le sens »).
//     2. NOTICE THE MOVE   a `cardDeck`, `tapTable` or `examples`, linked to a
//                          sheet.
//     3. PRACTISE          on NEW material: a groupDrill (spot and name),
//                          then a trapDrill, a commonErrors or a listening.
//     4. USE IT            « Pour ton commentaire », always the same
//                          groupDrill shape: two sentences on the same
//                          figure, one that only names it, one that says its
//                          effect with a word of the text. Other defensible
//                          readings are accepted in every `why`.
//
//   then the act check (control pages, gated). Act 1 is the problem and the
//   recap; act 12 is the production act.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · figure · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le nom ne suffit pas    6  Léa’s draft and Mamadou’s note · naming is
//                                  not commenting; recap of b2.30 act 7,
//                                  b2.24, c1.06, c1.08 by trail position
//    2  La litote               6  Le Cid III, 4 · « Va, je ne te hais point »
//    3  L’antiphrase            6  Candide ch. III · the word that says its
//                                  opposite; the literary prétérition
//    4  La gradation            6  Le Cid I, 5 · read from its last term
//    5  Le chiasme              6  L’Avare III · crossing, with antithèse
//                                  and oxymore recalled
//    6  Le zeugme               6  « Booz endormi » · who defines it how
//    7  L’hypallage             6  « À Canaris » · a trait passed to a
//                                  neighbour
//    8  Métonymie, synecdoque   6  an original port chronicle
//    9  Les sons                6  Andromaque V, 5; « Chanson d’automne » ·
//                                  shown in text, one listening with lines
//   10  Le rythme               6  Pascal · ternaire, cadence
//   11  La rupture              6  Pascal · anacoluthe, asyndète, rejet,
//                                  phrase nominale
//   12  Ton commentaire        11  « Le Dormeur du val » · plan, role play,
//                                  TASK, quiz, review
//
//   TOTAL 77 missions, 12 acts (6 × 11, then 11). Corpus: 139 authored rows
//   (.1200-.1338) in twelve blocks plus 23 reused rows (20 in
//   seedPlusPacks, 3 Postgres-only in PG_ROWS; corpus header §A.3). 12
//   readings and 1 listening. Quiz: 11 rounds of 8. Eleven error triggers,
//   eleven drills, five reference sheets, thirteen terms, three tapTables.
//   Chapter artwork: `figures-effet-image-prompts.md`, 12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Nommer la figure, c’est la question ; dire son effet, c’est la
//   réponse. »
//   EN: Naming the figure is the question; saying its effect is the answer.
//
//   ONE METAPHOR, THE PRISM: the name is the glass, the effect is the band
//   of colour it throws. NOT « one figure, one effect » (two readings are
//   accepted when the words support both) and NOT « find as many figures
//   as possible » (act 9 refuses a sound with no meaning to serve).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the one-sentence effect of a figure; litote as a literary
//           figure; antiphrase as a figure (irony as the attitude);
//           gradation, chiasme, zeugme, hypallage, métonymie and synecdoque
//           read for their effect; allitération and assonance; rythme
//           ternaire and cadence; effects of rupture (anacoluthe, asyndète,
//           rejet, phrase nominale); the short literary commentary at C1.
//   QUOTES  b2.30’s reframe (act 1) and c1.08’s reframe (act 4), imported.
//   LEAVES  comparaison, métaphore, personnification to b2.30 act 7 (act 1
//           recap, act 7 distinction); anaphore, oxymore, antithèse,
//           hyperbole, euphémisme as known B2 terms; irony in reading to
//           b2.24 and c1.20; litote in speech to c1.06; persuasive
//           anaphore, gradation and prétérition to c1.08 (acts 1, 3, 4);
//           verb ellipsis to c1.05 (never named on screen).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; the circle’s members tutoient one another. Natural,
//   unsimplified C1 French; English authored on every learner string (`en`
//   or a final « EN: »), never on an answer. Every `say` is French.
//   Citations by trail position, never a raw id. Typographic ’ everywhere.
//   Public-domain extracts only, each verified word for word (corpus §A.7);
//   every other text « texte original écrit pour la leçon ». Effect claims
//   are interpretive: each `why` accepts other defensible readings. Sound
//   figures are SHOWN in text (TTS flattens them). Figure items carry ONE
//   defensible label. Mission slots spread by `balanceSlots()`, quiz by
//   `spreadSlots()`; no `why` names a position.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. Canon: Corneille (×3 lines), Voltaire, Molière, Hugo (×2), Racine,
//      Verlaine, Pascal (×2), Rimbaud. All France: no francophone-outside-
//      France PD author fits these figures as cleanly (Nelligan was b2.30’s).
//      Accept, or swap one (e.g. a Nelligan line for the assonance act)?
//   2. Pascal is quoted in the 1871 Hachette spelling (« m’effraye »,
//      « Cléopatre », « auroit »), as the verified edition prints it. Keep,
//      or modernise and cite a modern edition?
//   3. The task extract is « Le Dormeur du val » (a dead soldier, 1870).
//      The art prompt shows no wound. Acceptable in tone?
//   4. Zeugme: Fontanier’s classification (« par sous-entente », beside the
//      ellipse) is stated from a SECONDARY source; Le Robert refused
//      automated access for both zeugme and hypallage. Verify on Gallica /
//      Le Robert before publish, or drop Fontanier from the zeugme card?
//   5. Three reused rows are Postgres-only (fr.b2.litterature.075, .076,
//      .078) and need the decision 13 typography edit at import.
//   6. The roundup names « la leçon 20 du C1 » (live) as what comes next.
//   7. Rubric: six criteria, 20 points, as c1.08 and c1.24. Keep?
//   8. The task prints the sonnet twice (reading and brief): no `source`
//      field on `task`.
//   9. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, PG_ROWS,
  BROUILLON_TEXT, LITOTE_TEXT, CANDIDE_TEXT, GRADATION_TEXT, CHIASME_TEXT, ZEUGME_TEXT,
  HYPALLAGE_TEXT, METONYMIE_TEXT, SONS_TEXT, RYTHME_TEXT, RUPTURE_TEXT, DORMEUR_TEXT,
  B230_REFRAME, C108_REFRAME,
  LITT_UNIT, CRITIQUE_UNIT, NUANCER_UNIT, PERSUADER_UNIT,
  LITT_REF, CRITIQUE_REF, NUANCER_REF, PERSUADER_REF, LIGNES_REF,
} from './figures-effet-corpus.ts';
import { FIGURES_TERMS } from './figures-effet-terms.ts';

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
  if (!r) throw new Error(`c1.19: no item ${id}`);
  return r;
}
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.19: no ipa on ${id}`);
  return r.ipa;
}
/** The corpus row's respelling, BRACKETED for a section. Authored rows only. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.19: no authored respell on ${id}`);
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

/** THE « USE IT » BEAT: the act's one sentence for the graded commentary. */
function pourTonCommentaire(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ton commentaire', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

const LIT = (n: number) => `fr.b2.litterature.${String(n).padStart(3, '0')}`;
const SC2 = (n: number) => `fr.b2.strategies-de-comprehension.${n}`;
const NR = (n: number) => `fr.c1.nuances-et-registres.${n}`;
const RH = (n: number) => `fr.c1.rhetorique.${n}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE NOM NE SUFFIT PAS
 *
 *  The problem: Léa’s draft names every figure and says nothing. Then the
 *  recap of what the learner already owns, by trail position, rows reused.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Une copie qui ne dit rien', frSub: 'Les Mardis du texte',
  setting: { place: 'La bibliothèque des Tilleuls, salle de lecture', city: 'Montréal', time: '19 h', ambience: 'une grande table, des livres ouverts, une lampe, cinq lecteurs adultes' },
  beats: [
    { kind: 'narration', text: 'Mardi soir, à la bibliothèque des Tilleuls. Le cercle de lecture « les Mardis du texte » prépare un commentaire du Cid de Corneille. Mamadou Sarr, qui anime le cercle, rend à Léa le paragraphe qu’elle a écrit la semaine dernière.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Mamadou', fr: 'Tes figures sont toutes justes, Léa. Et pourtant, ton paragraphe ne dit rien.', en: 'Your figures are all correct, Léa. And yet your paragraph says nothing.', respell: '[tay fee-GÜR soh toot ZHÜST lay-A | ay poor-TAHⁿ | tohⁿ pa-ra-GRAF nuh dee RYEHⁿ]', stage: 'Il pose la feuille devant elle.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Léa', fr: 'J’ai pourtant trouvé la litote de Chimène. C’est bien une litote.', en: 'But I found Chimène’s litotes. It really is a litotes.', respell: '[zhay poor-TAHⁿ troo-VAY la lee-TOT duh shee-MENN | seh byehⁿ ün lee-TOT]', stage: 'Elle relit sa phrase.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Mamadou', fr: 'Oui. Maintenant, dis-moi ce qu’elle fait. Une seule phrase, pour ton correcteur.', en: 'Yes. Now tell me what it does. One sentence only, for your marker.', respell: '[WEE | mehⁿt-NAHⁿ | dee-MWA suh kel FEH | ün suhl FRAHZ poor tohⁿ ko-rek-TUHR]', stage: 'Le correcteur ne lira que cette phrase sur la litote.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle phrase Léa écrit-elle sur « Va, je ne te hais point » ?', size: 'lg',
      options: [
        { fr: src(E(1200)).fr, respell: rsOf(E(1200)), en: src(E(1200)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(1201)).fr, respell: rsOf(E(1201)), en: src(E(1201)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Mamadou souligne « avoue » et « n’a pas le droit ». Le correcteur voit une lecture : la figure, les mots, et ce qu’ils font au sens. Une autre lecture pourrait se défendre ; celle-ci se défend déjà.',
        breaks: 'Le correcteur coche « figure repérée », puis attend la suite. Il n’y en a pas. La phrase répète ce que le texte montre déjà, sans dire pourquoi Chimène parle ainsi.',
      },
    },
    {
      kind: 'break', heading: 'Le nom n’est que la moitié du travail',
      body: `${Cap(LITT_REF)} t’a appris à dire ce qu’une image fait voir ou sentir. Ici, chaque figure reçoit sa phrase d’effet : la figure, un mot du texte, ce qu’il produit. EN: Every figure gets its effect sentence.`,
      wrong: { fr: src(E(1200)).fr, ipa: ipaOf(E(1200)), respell: rsOf(E(1200)), en: src(E(1200)).en },
      right: { fr: src(E(1201)).fr, ipa: ipaOf(E(1201)), respell: rsOf(E(1201)), en: src(E(1201)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Cette leçon t’apprend dix figures et effets nouveaux, de la litote aux ruptures, toujours de la même façon : repérer, nommer, dire l’effet en une phrase. À la fin, tu écriras le commentaire d’un sonnet de Rimbaud.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['effet', 'litote'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Lire ce que les mots retiennent', s: 'Actes 2 à 4 : la litote, l’antiphrase, la gradation' },
    { t: 'Lire une construction', s: 'Actes 5 à 7 : le chiasme, le zeugme, l’hypallage' },
    { t: 'Entendre et compter', s: 'Actes 8 à 11 : la métonymie, les sons, le rythme, les ruptures' },
    { t: 'Écrire un commentaire', s: 'Acte 12 : un sonnet de Rimbaud, en 250 à 400 mots' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'Le brouillon de Léa', frSub: 'Et la note dans la marge',
  text: BROUILLON_TEXT,
  glossary: [
    { word: 'l’enquêteur', en: 'the investigator', note: 'Celui qui cherche et trouve les indices, sans encore les interpréter.' },
  ],
  questions: [
    { q: 'Devine le sens : « tout est juste, et rien n’est dit ». Que reproche Mamadou ?', a: 'Les noms des figures sont exacts, mais Léa ne dit pas ce que les figures font au sens.' },
    { q: 'Quels sont les trois gestes que Mamadou demande ?', a: 'Repérer, nommer, puis dire l’effet en une phrase, avec un mot du texte pour preuve.' },
    { q: 'Pourquoi la situation de Chimène compte-t-elle pour la litote ?', a: 'Elle parle à l’homme qui a tué son père : elle ne peut pas avouer son amour, alors elle nie la haine.' },
    { q: 'Que pense Mamadou d’une lecture personnelle ?', a: 'Elle se défend si les mots du texte la soutiennent, même si un autre lecteur en propose une autre.' },
    { q: 'Quelle phrase de Léa ne veut-il plus lire, et pourquoi ?', a: '« L’auteur emploie beaucoup d’images » : elle ne dit ni lesquelles, ni pour faire quoi.' },
  ],
  audio: REC('rec-c1-19-brouillon'), say: REFRAME, terms: ['effet', 'lecture'],
};

/** The recap: one group per lesson it builds on, rows reused by id. */
const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: 'Quatre leçons, un rappel',
  groups: [
    grp(Cap(LITT_REF), [
      it(LIT(1504), 'la comparaison'),
      it(LIT(1505), 'la métaphore'),
      it(LIT(1506), 'la personnification'),
      it(LIT(1512), 'la règle d’alors'),
    ], chk('Au B2, devant une image, tu as appris à…', ['dire ce qu’elle fait voir ou sentir', 'compter les adjectifs'], 0,
      `${Cap(LITT_REF)} disait : « ${B230_REFRAME} » Tu connais aussi l’anaphore, l’oxymore, l’antithèse, l’hyperbole et l’euphémisme. EN: now you go further, one figure at a time.`)),
    grp(`${Cap(CRITIQUE_REF)} et ${NUANCER_REF}`, [
      it(SC2(1501), 'l’ironie, au B2'),
      it(NR(1122), 'la litote, à l’oral'),
    ], chk('La litote, tu l’as déjà rencontrée…', ['à l’oral, pour nuancer avec tact', 'jamais'], 0,
      `${Cap(NUANCER_REF)} en a fait un outil de politesse. L’acte 2 la lit comme une figure littéraire. L’ironie de ${CRITIQUE_REF} revient à l’acte 3. EN: act 2 reads litotes as a literary figure.`)),
    grp(Cap(PERSUADER_REF), [
      it(RH(1128), 'anaphore et gradation'),
      it(RH(1140), 'la prétérition'),
    ], chk('Dans cette leçon, la question posée à une gradation était…', ['« est-elle loyale ? »', '« est-elle belle ? »'], 0,
      `Tu y jugeais des figures persuasives. Ici, tu lis leur effet dans un texte littéraire, sans les juger. EN: here you read the effect, you do not judge it.`)),
    ctl('Ce qui est nouveau', 'Qu’ajoute cette leçon ?', ['De nouveaux noms, à apprendre par cœur.', 'Pour chaque figure, une phrase sur son effet.'], 1,
      'Dix figures et effets nouveaux, et une habitude : une phrase d’effet par figure, prouvée par le texte. EN: one effect sentence per figure.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['effet'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment', sheetId: 'sheet-effet',
  cases: [
    { situation: 'Un commentaire de texte à l’examen', fr: src(E(1205)).fr, en: src(E(1205)).en },
    { situation: 'Un club de lecture où chacun défend sa lecture', fr: src(E(1206)).fr, en: src(E(1206)).en },
    { situation: 'Une critique de livre pour un journal', fr: src(E(1208)).fr, en: src(E(1208)).en },
    { situation: 'Une question d’examen sur le sens d’une phrase finale', fr: src(E(1203)).fr, en: src(E(1203)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['effet', 'lecture'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le nom', '« Il y a une litote. » Cette phrase…', ['pose la question', 'donne la réponse'], 0,
    `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('La preuve', 'Un effet se prouve par…', ['les mots du texte', 'le nom de l’auteur', 'la longueur du texte'], 0,
    'Un ou deux mots cités, et ce qu’ils produisent. EN: a quoted word and what it does.'),
  ctl('La mission', 'À la fin de la leçon, tu vas écrire…', ['un résumé du Cid', 'le commentaire d’un sonnet', 'une liste de figures'], 1,
    'Entre 250 et 400 mots, sur « Le Dormeur du val » de Rimbaud. EN: 250 to 400 words on a Rimbaud sonnet.'),
], ['effet']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le nom ne suffit pas',
    opener: {
      line: 'Une copie repère toutes les figures et ne dit rien : ici tu découvres que le nom n’est que la moitié du travail. EN: A draft spots every figure and says nothing: here you find that the name is only half the work.',
      imageRef: 'lessons/figures-effet/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais qu’une figure se commente par son effet, prouvé par les mots du texte. EN: You know a figure is commented on through its effect, proved by the text.',
    estScreens: 34, restPoints: ['a1-lecture', 'a1-rappel'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LA LITOTE
 *
 *  TEXT: Mamadou on Le Cid III, 4. FIGURE: litote as a literary figure,
 *  told from euphemism and from plain understatement.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a2-lecture', layer: 'core', questionsInModal: true,
  title: 'Ce que Chimène ne dit pas', frSub: 'Le Cid, acte III',
  text: LITOTE_TEXT,
  glossary: [
    { word: 'réplique', en: 'a line (in a play)', note: 'Ce qu’un personnage dit, au théâtre, avant que l’autre réponde.' },
  ],
  questions: [
    { q: 'Devine le sens : « sobres ». Que veut dire « trois mots sobres » ?', a: 'Trois mots simples, retenus, sans effet appuyé.' },
    { q: 'Pourquoi Chimène ne peut-elle pas dire « je t’aime » ?', a: 'Rodrigue a tué son père : l’honneur le lui interdit.' },
    { q: 'Que fait-elle à la place ?', a: 'Elle nie le contraire : « je ne te hais point ». La salle entend l’aveu.' },
    { q: 'Quelle lecture propose Inès, et que lui répond Mamadou ?', a: 'Une lecture plus froide : elle ne le déteste pas. Mamadou ne l’interdit pas, mais les répliques suivantes, « Tu le dois », « Je ne puis », penchent vers l’aveu.' },
    { q: 'Quelle phrase d’effet Hugues écrit-il ?', a: '« Trois mots sobres, un cri dessous. »' },
  ],
  audio: REC('rec-c1-19-litote'), say: REFRAME, terms: ['litote', 'lecture'],
};

const A2_LITOTE: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-litote', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-dire',
  title: 'Dire moins, faire entendre plus', frSub: 'Quatre cartes sur la litote',
  hint: 'Quatre cartes. Cherche ce que la phrase retient.',
  audio: AUDIO, say: REFRAME, terms: ['litote'],
  cards: [
    { head: 'Nier le contraire', label: 'Corneille', fr: src(E(1211)).fr, sub: rsOf(E(1211)),
      body: 'Selon Larousse, la litote affaiblit l’expression pour laisser entendre plus qu’on ne dit ; il cite ce vers. EN: Larousse’s own example of litotes.' },
    { head: 'L’effet', label: 'la retenue', fr: src(E(1218)).fr, sub: rsOf(E(1218)),
      body: 'La retenue n’efface pas la passion : elle la fait deviner. On peut aussi lire de la pudeur, ou de la lutte : les deux se défendent. EN: restraint lets passion be guessed; other readings hold.' },
    { head: 'La litote de tous les jours', label: 'une variante', fr: src(E(1215)).fr, sub: rsOf(E(1215)),
      body: '« N’être pas sans savoir » veut dire savoir très bien. Le piège : comprendre l’inverse. EN: it means he knew perfectly well.' },
    { head: 'Pas un euphémisme', label: 'la différence', fr: src(E(1216)).fr, sub: rsOf(E(1216)),
      body: '« Il nous a quittés » adoucit la mort : c’est un euphémisme. La litote, elle, renforce ce qu’elle semble affaiblir. EN: euphemism softens; litotes strengthens.' },
  ],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-trier', layer: 'core', size: 'lg',
  title: 'Litote ou pas ?', frSub: 'Le sens est-il plus fort que les mots ?',
  groups: [
    grp('Deux phrases', [
      it(E(1214), 'une affaire'),
      it(E(1217), 'un décès'),
    ], chk('Laquelle est une litote ?', ['« Ce n’est pas une petite affaire. »', '« Il nous a quittés cette nuit. »'], 0,
      '« Pas petite » veut dire très grande : le sens dépasse les mots. « Il nous a quittés » adoucit une mort : un euphémisme. EN: litotes here, euphemism there.')),
    grp('Le piège du sens', [
      it(E(1215)),
    ], chk('« Il n’était pas sans savoir ce qu’il risquait. » Il…', ['le savait très bien', 'l’ignorait'], 0,
      'Deux négations qui affirment : il savait. Beaucoup de lecteurs comprennent l’inverse. EN: he knew.')),
    ctl('La règle', 'Pour qu’il y ait litote, il faut…', ['une négation, toujours', 'que le sens soit plus fort que les mots'], 1,
      `${src(E(1221)).fr} Une négation ne suffit pas : « ce n’est pas grave » peut vouloir dire exactement cela. EN: a negation alone is not enough.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['litote'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a2-piege', layer: 'core', swipe: true,
  title: 'Six phrases d’effet ratées',
  rule: {
    title: 'La litote fait entendre plus',
    body: 'Une phrase d’effet sur une litote dit ce que le lecteur entend sous la retenue, avec un mot du texte. Elle ne dit pas seulement qu’il y a une négation. EN: say what the reader hears beneath the restraint.',
  },
  cards: [
    { promptLabel: 'le nom seul', promptSound: 'Dans ce vers, il y a une litote, donc c’est beau.', fr: src(E(1212)).fr, ipa: ipaOf(E(1212)), tip: 'Ce que Chimène nie, et ce qu’elle évite de nommer. EN: what she denies and avoids naming.' },
    { promptLabel: 'le contresens', promptSound: 'Chimène dit qu’elle est indifférente à Rodrigue.', fr: src(E(1219)).fr, ipa: ipaOf(E(1219)), tip: 'La salle entend un aveu, pas de l’indifférence. EN: a confession, not indifference.' },
    { promptLabel: 'la confusion', promptSound: 'Cette litote adoucit une réalité pénible.', fr: src(E(1216)).fr, ipa: ipaOf(E(1216)), tip: 'Adoucir, c’est l’euphémisme. EN: softening is euphemism.' },
    { promptLabel: 'sans preuve', promptSound: 'On sent qu’elle l’aime, c’est évident.', fr: src(E(1218)).fr, ipa: ipaOf(E(1218)), tip: 'Dis d’où vient l’évidence : la retenue de la phrase. EN: say where it comes from.' },
    { promptLabel: 'la négation prise pour une litote', promptSound: 'Ce n’est pas grave : c’est une litote.', fr: src(E(1221)).fr, ipa: ipaOf(E(1221)), tip: 'Une négation ne suffit pas. EN: a negation is not enough.' },
    { promptLabel: 'le lecteur oublié', promptSound: 'La litote est une figure de l’Antiquité.', fr: src(E(1222)).fr, ipa: ipaOf(E(1222)), tip: 'L’effet passe par le lecteur. EN: the effect goes through the reader.' },
  ],
  drill: [
    { promptSay: 'La litote affirme davantage en niant le … .', opts: ['contraire', 'verbe'], correct: 0 },
    { promptSay: '« Il nous a quittés » est un … .', opts: ['euphémisme', 'litote'], correct: 0 },
    { promptSay: '« Ce n’est pas une petite affaire » veut dire que l’affaire est … .', opts: ['grande', 'petite'], correct: 0 },
    { promptSay: 'Il n’était pas sans savoir : il … .', opts: ['savait', 'ignorait'], correct: 0 },
    { promptSay: 'La litote suppose un lecteur qui comprend à … .', opts: ['demi-mot', 'voix haute'], correct: 0 },
    { promptSay: 'Chimène nie la haine pour ne pas nommer … .', opts: ['l’amour', 'son père'], correct: 0 },
    { promptSay: 'Pour qu’il y ait litote, le sens doit être plus … que les mots.', opts: ['fort', 'faible'], correct: 0 },
    { promptSay: 'L’euphémisme … ; la litote fait entendre plus.', opts: ['adoucit', 'renforce'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'La litote fait entendre plus' },
    { label: 'Six cartes', kind: 'cards', title: 'Six phrases d’effet ratées' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-19-piege-litote'), say: REFRAME, terms: ['litote'],
};

const A2_COMMENTAIRE = pourTonCommentaire('a2-commentaire', 'Ta phrase sur la litote', [
  grp('Deux phrases sur Chimène', [
    it(E(1200), 'le nom seul'),
    it(E(1212), 'la figure et son effet'),
  ], chk('Laquelle irait dans un commentaire ?', ['« Il y a une litote. »', '« Chimène nie la haine pour ne pas nommer l’amour. »'], 1,
    'Elle dit ce que la figure fait, avec les mots du texte. Une lecture plus pudique se défendrait aussi. EN: it says what the figure does.')),
  grp('Une autre litote', [
    free('« Ce n’est pas une petite affaire », dit le notaire.', '“This is no small matter,” says the notary.', 'dans un roman inventé'),
  ], chk('Ta phrase d’effet :', ['La négation grandit l’affaire et laisse sentir l’inquiétude du notaire.', 'Il y a une négation.'], 0,
    'Le sens est plus fort que les mots, et tu dis ce que cela fait sentir. EN: name the meaning and the feeling.')),
], ['litote', 'effet']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La litote', 'La litote…', ['dit moins pour faire entendre plus', 'adoucit une réalité pénible'], 0,
    'Adoucir, c’est l’euphémisme. EN: softening is euphemism.'),
  ctl('Chimène', '« Va, je ne te hais point » fait entendre…', ['l’amour', 'l’indifférence', 'la haine'], 0,
    'Les deux répliques suivantes, « Tu le dois », « Je ne puis », vont dans ce sens. EN: the next lines confirm it.'),
  ctl('Le piège', '« Il n’était pas sans savoir » veut dire…', ['il le savait bien', 'il ne le savait pas'], 0,
    'Deux négations qui affirment. EN: he knew.'),
], ['litote']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La litote',
    opener: {
      line: 'Trois mots sobres, et toute une salle entend un aveu : ici tu lis ce qu’une phrase retient. EN: Three sober words, and a whole theatre hears a confession: here you read what a sentence holds back.',
      imageRef: 'lessons/figures-effet/act02.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais une litote, tu la distingues de l’euphémisme et tu dis ce qu’elle fait entendre. EN: You can recognise a litotes, tell it from euphemism, and say what it makes heard.',
    estScreens: 36, restPoints: ['a2-litote', 'a2-piege'],
  },
  sections: [A2_LECTURE, A2_LITOTE, A2_TRIER, A2_PIEGE, A2_COMMENTAIRE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — L’ANTIPHRASE
 *
 *  TEXT: Hugues reads Candide ch. III. FIGURE: the antiphrasis (a word that
 *  says its opposite), irony as the attitude; the literary prétérition in
 *  one card (c1.08 owns it in argument).
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a3-lecture', layer: 'core', questionsInModal: true,
  title: 'Une si belle bataille', frSub: 'Candide, chapitre III',
  text: CANDIDE_TEXT,
  glossary: [
    { word: 'leste', en: 'smart, nimble', note: 'Vif, alerte, élégant dans ses mouvements.' },
  ],
  questions: [
    { q: 'Devine le sens : « criblés de coups ». Comment sont les vieillards ?', a: 'Couverts de blessures, frappés de partout.' },
    { q: 'Pourquoi la première phrase ressemble-t-elle à un compte rendu de parade ?', a: 'Elle n’emploie que des mots d’éloge : beau, leste, brillant, bien ordonné.' },
    { q: 'Qu’est-ce qui dément ces mots ?', a: 'Les faits placés à côté : des milliers de morts, un village brûlé, des femmes égorgées.' },
    { q: 'Quelle différence Mamadou fait-il entre antiphrase et ironie ?', a: 'L’antiphrase est un mot isolé qui dit son contraire ; l’ironie est l’attitude de tout le chapitre.' },
    { q: 'Pourquoi l’indignation du lecteur dure-t-elle ?', a: 'Voltaire ne la dit pas : il laisse le lecteur faire le calcul lui-même.' },
  ],
  audio: REC('rec-c1-19-candide'), say: REFRAME, terms: ['antiphrase', 'effet'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a3-exemples', layer: 'core', sheetId: 'sheet-dire',
  title: 'Des mots qui disent leur contraire',
  examples: [
    ex(E(1223), 'quatre mots d’éloge pour deux armées qui vont s’entretuer'),
    ex(E(1224), 'un oxymore : la boucherie, et la gloire'),
    ex(E(1231), 'la loi invoquée pour justifier un massacre'),
    ex(E(1229), 'une antiphrase de tous les jours, devant un désastre'),
    ex(E(1233), 'une prétérition dans un récit : elle peint ce qu’elle dit taire'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['antiphrase'],
};

const A3_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-trier', layer: 'core', size: 'lg',
  title: 'Antiphrase, ironie, prétérition', frSub: 'Trois façons de dire autrement',
  groups: [
    grp('Le mot et l’attitude', [
      it(E(1227), 'un mot retourné'),
      it(E(1228), 'la règle'),
    ], chk('« Les héros » qui brûlent un village : c’est…', ['une antiphrase', 'une litote'], 0,
      'Un mot employé dans le sens contraire du sien. L’ironie, c’est l’attitude de Voltaire dans tout le chapitre. EN: one word turned inside out.')),
    grp(`Un rappel de ${PERSUADER_REF}`, [
      it(RH(1142), 'le nom'),
      it(E(1233), 'dans un récit'),
    ], chk('« Je ne peindrai pas la joie des vainqueurs : vous l’imaginez sans moi. » L’effet :', ['le lecteur imagine lui-même, et plus fort', 'le narrateur cache vraiment la scène'], 0,
      `${src(E(1234)).fr} Dans la leçon sur la persuasion, tu jugeais sa loyauté ; ici, tu lis ce qu’elle fait voir. EN: here you read what it makes visible.`)),
    ctl('Le contexte', 'Comment sait-on que « si beau » est une antiphrase ?', ['par les faits atroces qui suivent', 'parce que Voltaire l’annonce'], 0,
      `${src(SC2(1513)).fr} Un seul détail atroce suffit à retourner l’éloge. EN: the context turns the praise.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['antiphrase'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a3-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre lectures de Voltaire à reprendre',
  errors: [
    { wrong: 'Voltaire trouve la bataille belle.', right: 'Voltaire loue la bataille pour mieux la condamner.',
      why: 'Normal : la première phrase n’a que des mots d’éloge. Mais les faits qui suivent les démentent un par un. EN: the facts undo the praise.' },
    { wrong: '« Boucherie héroïque » est une antiphrase.', right: '« Boucherie héroïque » est un oxymore.',
      why: 'Les deux servent l’ironie, d’où la confusion. L’oxymore serre deux contraires dans un groupe ; l’antiphrase retourne un seul mot. EN: two contraries joined, not one word reversed.' },
    { wrong: 'L’antiphrase et l’ironie, c’est la même chose.', right: 'L’ironie est une attitude ; l’antiphrase est l’un de ses moyens.',
      why: 'On les emploie souvent l’un pour l’autre. Distinguer les deux rend ton commentaire plus précis. EN: precision, not a rule.' },
    { wrong: 'Voltaire est indigné, il le dit clairement.', right: 'Voltaire ne dit pas son indignation : il la fait naître chez le lecteur.',
      why: 'On attend qu’un auteur engagé s’exprime ouvertement. L’ironie laisse le travail au lecteur, et c’est ce qui la rend durable. EN: irony leaves the work to the reader.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['antiphrase', 'lecture'],
};

const A3_COMMENTAIRE = pourTonCommentaire('a3-commentaire', 'Ta phrase sur l’antiphrase', [
  grp('Deux phrases sur Candide', [
    free('Voltaire utilise une antiphrase avec le mot « héros ».', 'Voltaire uses an antiphrasis with the word “heroes”.', 'le nom seul'),
    it(E(1230), 'l’effet'),
  ], chk('Laquelle dit l’effet ?', ['« utilise une antiphrase »', '« le décalage entre les mots et les faits fait naître l’indignation »'], 1,
    'Elle dit ce que la figure produit chez le lecteur. On pourrait aussi parler de rire grinçant : la lecture se défend. EN: it says what the figure produces.')),
  grp('Ta phrase', [
    it(E(1225), 'pour ton commentaire'),
    it(E(1232), 'le détail qui retourne'),
  ], chk('Pour prouver une antiphrase, tu cites…', ['le mot d’éloge et le fait qui le dément', 'seulement le mot d’éloge'], 0,
    'L’antiphrase vit du contraste : cite les deux côtés. EN: quote both sides of the contrast.')),
], ['antiphrase', 'effet']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('L’antiphrase', 'L’antiphrase…', ['emploie un mot pour dire son contraire', 'serre deux contraires dans un groupe'], 0,
    'Serrer deux contraires, c’est l’oxymore. EN: that is the oxymoron.'),
  ctl('L’ironie', 'L’ironie est…', ['une attitude d’ensemble', 'un seul mot retourné'], 0,
    'L’antiphrase est l’un de ses moyens. EN: antiphrasis is one of its means.'),
  ctl('La prétérition', 'Dans un récit, la prétérition…', ['attire le regard sur ce qu’elle feint de cacher', 'cache vraiment la scène'], 0,
    'Le lecteur imagine, et souvent plus fort. EN: the reader imagines it, often more vividly.'),
], ['antiphrase']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'L’antiphrase',
    opener: {
      line: 'Une bataille « si belle » que des villages brûlent : ici tu lis le mot qui dit son contraire. EN: A battle “so fine” that villages burn: here you read the word that says its opposite.',
      imageRef: 'lessons/figures-effet/act03.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais une antiphrase, tu la distingues de l’ironie et de l’oxymore, et tu dis ce qu’elle fait naître. EN: You can recognise an antiphrasis, tell it from irony and oxymoron, and say what it stirs.',
    estScreens: 34, restPoints: ['a3-exemples', 'a3-erreurs'],
  },
  sections: [A3_LECTURE, A3_EXEMPLES, A3_TRIER, A3_ERREURS, A3_COMMENTAIRE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA GRADATION
 *
 *  TEXT: Inès on Le Cid I, 5. FIGURE: the gradation read from its point of
 *  arrival (c1.08 judged it for fairness; cited once).
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a4-lecture', layer: 'core', questionsInModal: true,
  title: 'Va, cours, vole', frSub: 'Le Cid, acte I',
  text: GRADATION_TEXT,
  glossary: [
    { word: 'tirade', en: 'a long speech (in a play)', note: 'Une longue réplique d’un personnage, au théâtre.' },
  ],
  questions: [
    { q: 'Devine le sens : « déplorer ». Que va faire Don Diègue de ses malheurs ?', a: 'Les pleurer, s’en lamenter.' },
    { q: 'Pourquoi Don Diègue confie-t-il sa vengeance à son fils ?', a: 'Il est trop vieux pour se battre.' },
    { q: 'Dans quel ordre vont les verbes ?', a: 'Aller, courir, voler : chacun va plus vite que le précédent ; puis venger, qui change de nature.' },
    { q: 'Où est le poids de la phrase, selon Inès ?', a: 'Sur le dernier mot, « venge » : toute la vitesse accumulée se jette sur lui.' },
    { q: 'Quelle différence Mamadou fait-il avec la leçon sur la persuasion ?', a: 'Là, on demandait si chaque marche était prouvée ; ici, ce que la gradation fait sentir.' },
  ],
  audio: REC('rec-c1-19-gradation'), say: REFRAME, terms: ['gradation', 'effet'],
};

const A4_GRADATION: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-gradation', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-construction',
  title: 'Une gradation se lit par la fin', frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Regarde où la phrase arrive.',
  audio: AUDIO, say: REFRAME, terms: ['gradation'],
  cards: [
    { head: 'Le point d’arrivée', label: 'la règle', fr: src(E(1237)).fr, sub: rsOf(E(1237)),
      body: `Tu connais déjà la définition par ${PERSUADER_REF}. Ici, regarde le dernier terme : c’est lui que la montée prépare. EN: read the last term.` },
    { head: 'Le poids du dernier mot', label: 'Corneille', fr: src(E(1238)).fr, sub: rsOf(E(1238)),
      body: '« Venge » change de nature : après trois verbes de mouvement, un acte. Toute la vitesse s’y jette. EN: the last verb changes kind.' },
    { head: 'Le rythme qui imite', label: 'l’effet', fr: src(E(1244)).fr, sub: rsOf(E(1244)),
      body: 'Des impératifs brefs, presque sans liaison : la phrase court elle-même. EN: the sentence itself runs.' },
    { head: 'La gradation qui descend', label: 'une chute', fr: src(E(1240)).fr, sub: rsOf(E(1240)),
      body: 'La maison, la chambre, le nom : chaque terme est plus petit. On sent une chute, jusqu’à l’effacement. EN: a descending gradation is felt as a fall.' },
  ],
};

const A4_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-trier', layer: 'core', size: 'lg',
  title: 'Gradation ou simple liste ?', frSub: 'L’ordre fait la figure',
  groups: [
    grp('Deux phrases', [
      it(E(1240), 'une vie'),
      free('Il a acheté du pain, des pommes et du fromage.', 'He bought bread, apples and cheese.', 'des courses'),
    ], chk('Laquelle est une gradation ?', ['la maison, la chambre, le nom', 'le pain, les pommes, le fromage'], 0,
      `${src(E(1243)).fr} Les courses n’ont aucun ordre d’intensité. EN: a shopping list has no order of intensity.`)),
    grp('Le sens de la montée', [
      it(E(1235), 'Don Diègue'),
      it(E(1240), 'une vie qui se défait'),
    ], chk('La phrase sur la maison, la chambre et le nom est…', ['descendante', 'ascendante'], 0,
      `${src(E(1241)).fr} EN: each term is smaller.`)),
    ctl('La règle', 'Ce qui fait la gradation, c’est…', ['le nombre de termes', 'l’ordre des termes'], 1,
      `${src(E(1245)).fr} EN: order, not number.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['gradation'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a4-piege', layer: 'core', swipe: true,
  title: 'Six phrases sur une gradation',
  rule: {
    title: 'Lis la montée par son point d’arrivée',
    body: 'Une phrase d’effet sur une gradation dit vers quoi elle monte, ou descend, et ce que cette montée fait sentir : l’urgence, l’élan, la chute. EN: say where it rises to and what that makes felt.',
  },
  cards: [
    { promptLabel: 'le nom seul', promptSound: 'Il y a une gradation dans ce vers.', fr: src(E(1236)).fr, ipa: ipaOf(E(1236)), tip: 'Dis comment la vitesse monte. EN: say how the speed rises.' },
    { promptLabel: 'le dernier terme oublié', promptSound: 'Les verbes montrent le mouvement.', fr: src(E(1238)).fr, ipa: ipaOf(E(1238)), tip: 'La montée prépare « venge ». EN: it builds to the last word.' },
    { promptLabel: 'l’effet sans le personnage', promptSound: 'La gradation est rapide.', fr: src(E(1239)).fr, ipa: ipaOf(E(1239)), tip: 'Qui presse qui, et pourquoi. EN: who urges whom.' },
    { promptLabel: 'la liste prise pour une gradation', promptSound: 'Pain, pommes, fromage : une gradation.', fr: src(E(1243)).fr, ipa: ipaOf(E(1243)), tip: 'Sans ordre d’intensité, pas de gradation. EN: no order, no gradation.' },
    { promptLabel: 'le sens inversé', promptSound: 'La maison, la chambre, le nom : ça monte.', fr: src(E(1241)).fr, ipa: ipaOf(E(1241)), tip: 'Chaque terme est plus petit : ça descend. EN: it falls.' },
    { promptLabel: 'le rythme oublié', promptSound: 'Corneille emploie quatre verbes.', fr: src(E(1244)).fr, ipa: ipaOf(E(1244)), tip: 'Le rythme bref imite l’élan. EN: the short rhythm imitates the rush.' },
  ],
  drill: [
    { promptSay: 'Une gradation se lit par son point d’… .', opts: ['arrivée', 'origine'], correct: 0 },
    { promptSay: 'Dans « va, cours, vole, et nous venge », le poids est sur … .', opts: ['venge', 'va'], correct: 0 },
    { promptSay: 'La maison, la chambre, le nom : la gradation est … .', opts: ['descendante', 'ascendante'], correct: 0 },
    { promptSay: 'Une énumération sans ordre n’est pas une … .', opts: ['gradation', 'phrase'], correct: 0 },
    { promptSay: 'Don Diègue est trop … pour se battre.', opts: ['vieux', 'jeune'], correct: 0 },
    { promptSay: 'Une gradation descendante fait sentir une … .', opts: ['chute', 'victoire'], correct: 0 },
    { promptSay: 'C’est l’ordre des termes, et non leur …, qui fait la gradation.', opts: ['nombre', 'ordre'], correct: 0 },
    { promptSay: 'Les impératifs brefs imitent l’… demandé.', opts: ['élan', 'oubli'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Lis la montée par la fin' },
    { label: 'Six cartes', kind: 'cards', title: 'Six phrases à reprendre' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-19-piege-gradation'), say: REFRAME, terms: ['gradation'],
};

const A4_COMMENTAIRE = pourTonCommentaire('a4-commentaire', 'Ta phrase sur la gradation', [
  grp('Deux phrases sur Don Diègue', [
    free('Corneille fait une gradation avec quatre verbes.', 'Corneille makes a gradation with four verbs.', 'le nom et un compte'),
    it(E(1239), 'le personnage et l’effet'),
  ], chk('Laquelle irait dans un commentaire ?', ['« fait une gradation avec quatre verbes »', '« Don Diègue presse son fils : l’ordre devient urgence »'], 1,
    'Elle dit ce que la montée fait sentir. On pourrait aussi y lire la frustration d’un vieil homme : cela se défend. EN: it says what the climb makes felt.')),
  grp(`Un écho de ${PERSUADER_REF}`, [
    it(RH(1130), 'le mot'),
  ], chk(`Là-bas, la règle était : « ${C108_REFRAME} » Ici, tu demandes…`, ['ce que la gradation fait sentir', 'si elle est loyale'], 0,
    'Une figure littéraire se lit ; une figure de plaidoyer se juge. EN: a literary figure is read, a persuasive one judged.')),
], ['gradation', 'effet']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La lecture', 'Une gradation se lit…', ['par son point d’arrivée', 'par son premier terme'], 0,
    'Le dernier terme porte le poids de la phrase. EN: the last term carries the weight.'),
  ctl('L’ordre', 'Pain, pommes, fromage, c’est…', ['une gradation', 'une simple énumération'], 1,
    'Aucun ordre d’intensité. EN: no order of intensity.'),
  ctl('La chute', 'Une gradation descendante fait sentir…', ['une chute', 'un élan', 'une hésitation'], 0,
    'Chaque terme est plus petit que le précédent. EN: each term is smaller.'),
], ['gradation']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La gradation',
    opener: {
      line: 'Aller, courir, voler, puis venger : ici tu lis une montée par le mot où elle arrive. EN: Go, run, fly, then avenge: here you read a climb from the word it arrives at.',
      imageRef: 'lessons/figures-effet/act04.jpg',
    },
    sections: [],
    milestone: 'Tu lis une gradation par son point d’arrivée et tu dis ce que sa montée, ou sa chute, fait sentir. EN: You can read a gradation from its end point and say what its rise or fall makes felt.',
    estScreens: 36, restPoints: ['a4-gradation', 'a4-piege'],
  },
  sections: [A4_LECTURE, A4_GRADATION, A4_TRIER, A4_PIEGE, A4_COMMENTAIRE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LE CHIASME
 *
 *  TEXT: Léa on L’Avare III (Valère’s maxim, Harpagon’s botched chiasmus).
 *  FIGURE: chiasmus; antithesis and oxymoron recalled as known B2 terms.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a5-lecture', layer: 'core', questionsInModal: true,
  title: 'Manger pour vivre', frSub: 'L’Avare, acte III',
  text: CHIASME_TEXT,
  glossary: [
    { word: 'sermonne', en: 'lectures', note: 'Faire la morale à quelqu’un, longuement.' },
  ],
  questions: [
    { q: 'Devine le sens : « graver ». Que veut dire « une maxime qu’on peut graver » ?', a: 'Une phrase si bien frappée qu’on pourrait l’inscrire dans la pierre et la retenir.' },
    { q: 'Comment les mots se disposent-ils dans la phrase de Valère ?', a: 'Manger, vivre, puis vivre, manger : les mêmes mots dans l’ordre inverse.' },
    { q: 'Que fait Harpagon de la maxime ?', a: 'Il la retourne : « Il faut vivre pour manger », la phrase du glouton, puis il s’arrête.' },
    { q: 'D’où vient le comique, selon Léa ?', a: 'De l’ordre inversé : la figure se casse dans la bouche de l’avare.' },
    { q: 'Quelle différence Mamadou rappelle-t-il entre antithèse, chiasme et oxymore ?', a: 'L’antithèse oppose sans croiser, le chiasme oppose en croisant, l’oxymore serre deux contraires dans un seul groupe.' },
  ],
  audio: REC('rec-c1-19-chiasme'), say: REFRAME, terms: ['chiasme', 'effet'],
};

const A5_CHIASME: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-chiasme', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-construction',
  title: 'Croiser, opposer, serrer', frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Suis l’ordre des mots.',
  audio: AUDIO, say: REFRAME, terms: ['chiasme'],
  cards: [
    { head: 'Le chiasme', label: 'A B, puis B A', fr: src(E(1251)).fr, sub: rsOf(E(1251)),
      body: 'Le jour, la nuit, puis la nuit, le jour : les termes reviennent croisés. Selon Larousse, le chiasme forme une antithèse ou un parallèle. EN: the terms come back crossed.' },
    { head: 'L’effet de maxime', label: 'Valère', fr: src(E(1254)).fr, sub: rsOf(E(1254)),
      body: 'Le croisement ferme la phrase sur elle-même : elle sonne comme une vérité générale. EN: the crossing closes the sentence like a maxim.' },
    { head: 'L’antithèse', label: 'un rappel du B2', fr: src(E(1252)).fr, sub: rsOf(E(1252)),
      body: 'Deux idées opposées, côte à côte, sans croisement. EN: opposition without crossing.' },
    { head: 'L’oxymore', label: 'Corneille', fr: src(E(1253)).fr, sub: rsOf(E(1253)),
      body: 'Deux contraires serrés dans un seul groupe : une clarté obscure. La nuit éclairée par les étoiles se voit mieux que par une description. EN: two contraries in one phrase.' },
  ],
};

const A5_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-trier', layer: 'core', size: 'lg',
  title: 'Chiasme, antithèse ou oxymore ?', frSub: 'Une figure par phrase',
  groups: [
    grp('Trois phrases', [
      it(E(1251)),
      it(E(1252)),
      it(E(1253)),
    ], chk('Laquelle est un chiasme ?', ['le jour, la nuit, puis la nuit, le jour', 'ici la fête, là-bas la faim', 'cette obscure clarté'], 0,
      'Les mêmes termes dans l’ordre inverse. La deuxième oppose sans croiser (antithèse) ; la troisième serre deux contraires (oxymore). EN: crossed terms.')),
    grp('Deux noms du B2', [
      it(LIT(75), 'le nom'),
      it(LIT(76), 'le nom'),
    ], chk('« Ici la fête, là-bas la faim » : c’est…', ['une antithèse', 'un oxymore'], 0,
      'Deux idées opposées, dans deux groupes séparés. EN: two opposed ideas, apart.')),
    ctl('La méthode', 'Pour voir un chiasme, tu…', ['cherches les mots qui reviennent dans l’ordre inverse', 'comptes les virgules'], 0,
      `${src(E(1257)).fr} EN: find the reversed repetition.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['chiasme'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a5-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre lectures de L’Avare à reprendre',
  errors: [
    { wrong: 'Harpagon répète la maxime de Valère.', right: 'Harpagon retourne la maxime et se trahit.',
      why: 'Il croit la répéter, et c’est ce qui est drôle : les mots sont les mêmes, l’ordre est inversé. EN: same words, reversed order.' },
    { wrong: 'Le chiasme sert seulement à faire joli.', right: 'Le croisement oppose deux façons de vivre.',
      why: 'On réduit souvent une figure à un ornement. Ici, l’ordre des mots porte toute la morale. EN: the order carries the moral.' },
    { wrong: '« Manger pour vivre » est une antithèse.', right: '« Manger pour vivre, vivre pour manger » est un chiasme.',
      why: 'Il y a bien une opposition, d’où la confusion. Mais c’est le croisement des mêmes mots qui fait la figure. EN: the crossing makes the figure.' },
    { wrong: 'Molière se moque de la nourriture.', right: 'Le comique naît de l’ordre inversé.',
      why: 'Le sujet est le souper, mais la cible est l’avare : sa langue fourche et dit le contraire de son vice. EN: the target is the miser.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['chiasme', 'lecture'],
};

const A5_COMMENTAIRE = pourTonCommentaire('a5-commentaire', 'Ta phrase sur le chiasme', [
  grp('Deux phrases sur Harpagon', [
    free('La phrase contient un chiasme : manger, vivre, vivre, manger.', 'The sentence contains a chiasmus: eat, live, live, eat.', 'le repérage'),
    it(E(1247), 'l’effet comique'),
  ], chk('Laquelle dit l’effet ?', ['« contient un chiasme »', '« retourne la maxime et se trahit »'], 1,
    'Elle dit ce que le chiasme raté révèle du personnage. Une lecture qui insiste sur la morale de Valère se défendrait aussi. EN: it says what the botched figure reveals.')),
  grp('Une même figure, deux effets', [
    it(E(1254), 'chez Valère'),
    it(E(1255), 'chez Harpagon'),
  ], chk('Le même chiasme produit…', ['une maxime chez l’un, le rire chez l’autre', 'toujours le même effet'], 0,
    `${src(E(1209)).fr} EN: the same figure, two effects.`)),
], ['chiasme', 'effet']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le chiasme', 'Le chiasme…', ['reprend les termes dans l’ordre inverse', 'serre deux contraires dans un groupe'], 0,
    'Serrer deux contraires, c’est l’oxymore. EN: that is the oxymoron.'),
  ctl('L’antithèse', 'L’antithèse…', ['oppose sans croiser', 'croise sans opposer'], 0,
    'Le chiasme, lui, oppose en croisant. EN: chiasmus opposes by crossing.'),
  ctl('Harpagon', 'Le comique de la réplique d’Harpagon vient…', ['de l’ordre inversé', 'du mot « souper »', 'de sa colère'], 0,
    'Il dit la phrase du glouton, lui l’avare. EN: he says the glutton’s line.'),
], ['chiasme']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le chiasme',
    opener: {
      line: 'Manger pour vivre, vivre pour manger : ici tu lis ce que fait l’ordre des mots quand il se croise. EN: Eat to live, live to eat: here you read what word order does when it crosses.',
      imageRef: 'lessons/figures-effet/act05.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais un chiasme, tu le distingues de l’antithèse et de l’oxymore, et tu dis ce que son croisement produit. EN: You can recognise a chiasmus, tell it from antithesis and oxymoron, and say what its crossing does.',
    estScreens: 34, restPoints: ['a5-chiasme', 'a5-erreurs'],
  },
  sections: [A5_LECTURE, A5_CHIASME, A5_TRIER, A5_ERREURS, A5_COMMENTAIRE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LE ZEUGME
 *
 *  TEXT: Hugues on « Booz endormi ». FIGURE: zeugma, with the dictionaries
 *  that define it differently, each named with « selon ».
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a6-lecture', layer: 'core', questionsInModal: true,
  title: 'Vêtu de probité', frSub: 'Hugo, « Booz endormi »',
  text: ZEUGME_TEXT,
  glossary: [
    { word: 'probité', en: 'probity, integrity', note: 'Une droiture scrupuleuse, qui ne trompe jamais.' },
  ],
  questions: [
    { q: 'Devine le sens : « candide ». Que veut dire « probité candide » ?', a: 'Une droiture pure, innocente, sans calcul.' },
    { q: 'Qu’est-ce qui « ne va pas » pour Inès ?', a: 'On est vêtu de lin, pas de probité : le même mot porte une vertu et un tissu.' },
    { q: 'Quel effet Hugues décrit-il ?', a: 'Le lin blanc rend la probité visible, comme si la droiture de Booz se voyait sur lui.' },
    { q: 'Quels sens du mot zeugme Mamadou distingue-t-il ?', a: 'Selon le TLFi, un sens grammatical (un mot exprimé une fois sert à deux propositions) et un sens rhétorique (un mot porte deux compléments qui ne vont pas avec lui de la même façon).' },
    { q: 'Que conseille-t-il quand les définitions varient ?', a: 'Décrire ce qu’on voit et dire l’effet.' },
  ],
  audio: REC('rec-c1-19-booz'), say: REFRAME, terms: ['zeugme', 'effet'],
};

const A6_SOURCES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a6-sources', layer: 'core', sheetId: 'sheet-construction',
  title: 'Qui dit quoi du zeugme',
  cols: ['Source', 'Ce qu’elle dit', 'Exemple'],
  rows: [
    { cells: ['Larousse', 'deux éléments pas sur le même plan', 'Hugo, Booz'], say: src(E(1258)).fr,
      detail: { title: 'Selon Larousse', body: 'Coordination de deux éléments qui ne sont pas sur le même plan, syntaxique ou sémantique. Il cite ce vers de Hugo. EN: two elements on different planes.', say: src(E(1260)).fr } },
    { cells: ['TLFi, sens rhétorique', 'un mot, deux emplois', 'pris le train et une décision'], say: src(E(1262)).fr,
      detail: { title: 'Le sens rhétorique', body: 'Selon le TLFi, un mot qui a plusieurs sens porte deux compléments qui ne correspondent pas au même emploi. EN: one word, two uses.', say: src(E(1263)).fr } },
    { cells: ['TLFi, sens grammatical', 'un élément sous-entendu', 'la mer immobile'], say: src(E(1266)).fr,
      detail: { title: 'Le sens grammatical', body: 'Un élément exprimé une fois sert aussi à la proposition voisine : « le ciel était gris et la mer immobile ». Le TLFi note que les grammairiens jugent fautif le zeugme mal construit. EN: one element serves two clauses.', say: src(E(1265)).fr } },
    { cells: ['Fontanier', 'près de l’ellipse', 'au XIXe siècle'], say: src(E(1265)).fr,
      detail: { title: 'Fontanier', body: 'Le grammairien classait le zeugme parmi les figures où quelque chose est sous-entendu, à côté de l’ellipse : le sens grammatical. EN: Fontanier put zeugma beside ellipsis.', say: src(E(1266)).fr } },
    { cells: ['ce que tu fais', 'décrire, puis dire l’effet', 'une vertu et un tissu'], say: src(E(1268)).fr,
      detail: { title: 'Quand les sources divergent', body: 'Ne tranche pas un débat de dictionnaires dans un commentaire. Décris l’attelage, cite les mots, dis l’effet. EN: describe, quote, say the effect.', say: src(E(1268)).fr } },
    { cells: ['l’effet', 'surprise, sourire, réflexion', 'le lin rend la vertu visible'], say: src(E(1264)).fr,
      detail: { title: 'Ce que fait un zeugme', body: 'L’esprit bute sur l’attelage, puis relie les deux termes : il sourit, ou il voit l’abstrait devenir concret. EN: a stumble, then a link.', say: src(E(1261)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['zeugme'],
};

const A6_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-trier', layer: 'core', size: 'lg',
  title: 'Où est l’attelage ?', frSub: 'Un mot, deux termes',
  groups: [
    grp('Deux zeugmes de tous les jours', [
      it(E(1262)),
      it(E(1263)),
    ], chk('Dans « Il a perdu ses clés et son sang-froid », le mot attelé est…', ['perdu', 'clés'], 0,
      '« Perdu » porte un objet et un état : deux emplois du même verbe. EN: one verb, two uses.')),
    grp('Hugo', [
      it(E(1258)),
      it(E(1259), 'ce que fait Hugo'),
    ], chk('Quels termes sont attelés à « vêtu » ?', ['une vertu et un tissu', 'deux couleurs'], 0,
      'La probité et le lin : l’abstrait et le concret. EN: the abstract and the concrete.')),
    ctl('Le sens grammatical', '« Le ciel était gris et la mer immobile. » Ce qui est sous-entendu :', ['« était »', '« gris »', 'rien'], 0,
      'Le verbe sert deux fois. Selon le TLFi, c’est aussi un zeugme, au sens grammatical. EN: the verb serves twice.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['zeugme'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a6-piege', layer: 'core', swipe: true,
  title: 'Six phrases sur un zeugme',
  rule: {
    title: 'Décris l’attelage, puis l’effet',
    body: 'Le nom du zeugme varie selon les dictionnaires ; l’effet, lui, se décrit : un même mot porte deux termes qui ne vont pas ensemble, et l’esprit doit les relier. EN: describe the yoking, then its effect.',
  },
  cards: [
    { promptLabel: 'le nom seul', promptSound: 'Ce vers contient un zeugme.', fr: src(E(1259)).fr, ipa: ipaOf(E(1259)), tip: 'Dis ce qui est attelé, et à quel mot. EN: say what is yoked.' },
    { promptLabel: 'l’effet oublié', promptSound: 'Booz porte du lin blanc.', fr: src(E(1261)).fr, ipa: ipaOf(E(1261)), tip: 'Le tissu fait voir la vertu. EN: the cloth shows the virtue.' },
    { promptLabel: 'la faute supposée', promptSound: 'Hugo a fait une erreur de construction.', fr: src(E(1264)).fr, ipa: ipaOf(E(1264)), tip: 'Voulu, l’attelage est une figure. EN: deliberate, so a figure.' },
    { promptLabel: 'le débat tranché', promptSound: 'Larousse a tort, seul le TLFi compte.', fr: src(E(1268)).fr, ipa: ipaOf(E(1268)), tip: 'Cite qui dit quoi, sans trancher. EN: cite, do not rule.' },
    { promptLabel: 'la règle floue', promptSound: 'Le zeugme répète deux fois le même mot.', fr: src(E(1260)).fr, ipa: ipaOf(E(1260)), tip: 'Un seul mot, deux termes différents. EN: one word, two unlike terms.' },
    { promptLabel: 'l’exemple raté', promptSound: 'Elle a pris le train et le bus.', fr: src(E(1262)).fr, ipa: ipaOf(E(1262)), tip: 'Le train et le bus vont ensemble : pas de zeugme. EN: no clash, no zeugma.' },
  ],
  drill: [
    { promptSay: 'Le zeugme rattache à un même mot deux termes de nature … .', opts: ['différente', 'identique'], correct: 0 },
    { promptSay: 'Dans « vêtu de probité candide et de lin blanc », le mot attelé est … .', opts: ['vêtu', 'blanc'], correct: 0 },
    { promptSay: 'Il a perdu ses clés et son … : c’est un zeugme.', opts: ['sang-froid', 'portefeuille'], correct: 0 },
    { promptSay: 'Selon le TLFi, le zeugme a aussi un sens … .', opts: ['grammatical', 'musical'], correct: 0 },
    { promptSay: 'Le zeugme surprend, puis fait … ou réfléchir.', opts: ['sourire', 'pleurer'], correct: 0 },
    { promptSay: 'Le lin blanc rend la probité … .', opts: ['visible', 'invisible'], correct: 0 },
    { promptSay: 'Quand les dictionnaires divergent, décris ce que tu vois et dis l’… .', opts: ['effet', 'auteur'], correct: 0 },
    { promptSay: '« Booz endormi » est un poème de … .', opts: ['Hugo', 'Racine'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Décris l’attelage, puis l’effet' },
    { label: 'Six cartes', kind: 'cards', title: 'Six phrases à reprendre' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-19-piege-zeugme'), say: REFRAME, terms: ['zeugme'],
};

const A6_COMMENTAIRE = pourTonCommentaire('a6-commentaire', 'Ta phrase sur le zeugme', [
  grp('Deux phrases sur Booz', [
    free('Ce vers est un zeugme selon Larousse.', 'This line is a zeugma according to Larousse.', 'la définition'),
    it(E(1261), 'l’effet'),
  ], chk('Laquelle irait dans un commentaire ?', ['« est un zeugme selon Larousse »', '« le tissu blanc rend la vertu visible »'], 1,
    'Le commentaire dit ce que la figure fait voir. Tu pourrais aussi parler de la pureté d’un patriarche biblique : la lecture se défend. EN: it says what the figure shows.')),
  grp('Un zeugme qui fait sourire', [
    it(E(1262)),
  ], chk('L’effet de « Elle a pris le train et une grande décision » :', ['le banal et le grave rapprochés font sourire', 'aucun'], 0,
    'Un geste quotidien et un choix de vie, sur le même verbe. EN: the trivial and the serious on one verb.')),
], ['zeugme', 'effet']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le zeugme', 'Le zeugme…', ['attelle deux termes de nature différente à un même mot', 'croise des termes dans l’ordre inverse'], 0,
    'Croiser, c’est le chiasme. EN: crossing is chiasmus.'),
  ctl('Les sources', 'Quand Larousse et le TLFi ne disent pas tout à fait la même chose, tu…', ['cites qui dit quoi et tu dis l’effet', 'choisis le plus récent'], 0,
    'Selon l’un, selon l’autre ; puis l’effet. EN: who says what, then the effect.'),
  ctl('Hugo', 'Dans le vers de Hugo, le lin blanc…', ['rend la vertu visible', 'contredit la vertu', 'n’a aucun rôle'], 0,
    'L’abstrait devient concret. EN: the abstract becomes concrete.'),
], ['zeugme']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Le zeugme',
    opener: {
      line: 'Vêtu de probité et de lin blanc : ici tu lis un mot qui porte deux choses qui ne vont pas ensemble. EN: Clothed in probity and white linen: here you read one word carrying two things that do not belong together.',
      imageRef: 'lessons/figures-effet/act06.jpg',
    },
    sections: [],
    milestone: 'Tu repères un zeugme, tu sais que les dictionnaires le définissent différemment, et tu dis son effet. EN: You can spot a zeugma, know that dictionaries define it differently, and say its effect.',
    estScreens: 38, restPoints: ['a6-sources', 'a6-piege'],
  },
  sections: [A6_LECTURE, A6_SOURCES, A6_TRIER, A6_PIEGE, A6_COMMENTAIRE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — L’HYPALLAGE
 *
 *  TEXT: Inès on « À Canaris ». FIGURE: hypallage, told from b2.30’s
 *  personification; Fontanier’s scepticism named.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a7-lecture', layer: 'core', questionsInModal: true,
  title: 'Un comptoir avide', frSub: 'Hugo, « À Canaris »',
  text: HYPALLAGE_TEXT,
  glossary: [
    { word: 'accoudé', en: 'leaning on his elbows', note: 'Appuyé sur les coudes.' },
  ],
  questions: [
    { q: 'Devine le sens : « méprise ». Que pense le poète de ces gens ?', a: 'Il les juge indignes, il n’a aucune estime pour eux.' },
    { q: 'Qui est vraiment avide ?', a: 'Le marchand : l’adjectif est passé de l’homme à son comptoir.' },
    { q: 'Quel effet Inès décrit-elle ?', a: 'L’avidité déborde de l’homme sur ce qu’il touche, comme si tout chez lui était devenu avide.' },
    { q: 'Pourquoi Mamadou cite-t-il Fontanier ?', a: 'Fontanier doutait de bien des hypallages que d’autres croyaient voir : il ne faut pas en voir partout.' },
    { q: 'Quand dirait-on plutôt personnification ?', a: 'Si le comptoir agissait, par exemple s’il réclamait de l’argent.' },
  ],
  audio: REC('rec-c1-19-canaris'), say: REFRAME, terms: ['hypallage', 'effet'],
};

const A7_HYPALLAGE: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a7-hypallage', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-construction',
  title: 'Un trait qui change de place', frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Demande-toi à qui l’adjectif revient.',
  audio: AUDIO, say: REFRAME, terms: ['hypallage'],
  cards: [
    { head: 'Le déplacement', label: 'Hugo', fr: src(E(1270)).fr, sub: rsOf(E(1270)),
      body: 'Selon Larousse, qui cite ce vers, l’hypallage attribue à un mot ce qui convient à un autre de la même phrase. EN: Larousse’s own example.' },
    { head: 'L’effet', label: 'le débordement', fr: src(E(1272)).fr, sub: rsOf(E(1272)),
      body: 'Le défaut envahit le décor : on voit l’homme à travers ses objets. EN: the flaw takes over the setting.' },
    { head: 'Deux mots pour une phrase', label: 'la densité', fr: src(E(1278)).fr, sub: rsOf(E(1278)),
      body: 'L’hypallage condense : une description demanderait une proposition entière. EN: it condenses.' },
    { head: 'Le sens reste clair', label: 'la limite', fr: src(E(1275)).fr, sub: rsOf(E(1275)),
      body: 'Selon le TLFi, personne ne se méprend sur le sens. L’Académie précise que le mot déplacé est le plus souvent un adjectif. EN: the meaning stays clear.' },
  ],
};

const A7_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-trier', layer: 'core', size: 'lg',
  title: 'À qui revient l’adjectif ?', frSub: 'Hypallage ou personnification',
  groups: [
    grp('Deux hypallages', [
      it(E(1273)),
      it(E(1274)),
    ], chk('Dans « Il fumait une pipe pensive », qui est pensif ?', ['l’homme', 'la pipe'], 0,
      'La pipe reçoit le trait de celui qui fume. EN: the pipe takes the smoker’s trait.')),
    grp(`Un rappel de ${LITT_REF}`, [
      it(LIT(1506), 'la personnification'),
      it(E(1279), 'la différence'),
    ], chk('« Le vent courait dans les rues en renversant les chaises. » C’est…', ['une personnification', 'une hypallage'], 0,
      'Le vent agit comme une personne. Une hypallage prêterait seulement à une chose le trait de son voisin. EN: the wind acts.')),
    ctl('La prudence', 'Fontanier, au XIXe siècle…', ['doutait de bien des hypallages que d’autres voyaient', 'en voyait dans chaque vers'], 0,
      `${src(E(1276)).fr} EN: do not see one everywhere.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['hypallage'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a7-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre lectures de l’hypallage à reprendre',
  errors: [
    { wrong: 'Le comptoir est avide : c’est une personnification.', right: 'Le comptoir reçoit l’avidité du marchand : c’est une hypallage.',
      why: 'Les deux donnent à une chose un trait humain, d’où la confusion. Mais le comptoir n’agit pas : il hérite du trait de son voisin. EN: it inherits, it does not act.' },
    { wrong: 'Hugo s’est trompé d’adjectif.', right: 'L’hypallage déplace un adjectif sans brouiller le sens.',
      why: 'On croit à une maladresse parce que l’adjectif semble mal placé. Il l’est exprès, et le sens reste clair. EN: deliberate, and still clear.' },
    { wrong: 'Il y a une hypallage dans chaque adjectif original.', right: 'Fontanier doutait de bien des hypallages que d’autres croyaient voir.',
      why: 'Une épithète inattendue est souvent une métaphore. Cherche si le trait appartient à un autre mot de la phrase. EN: check whose trait it is.' },
    { wrong: 'L’hypallage montre que le comptoir est grand.', right: 'L’avidité déborde de l’homme sur les choses qu’il touche.',
      why: 'On décrit l’objet au lieu de l’effet. L’effet porte sur l’homme, vu à travers ses objets. EN: the effect is on the man.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['hypallage', 'lecture'],
};

const A7_COMMENTAIRE = pourTonCommentaire('a7-commentaire', 'Ta phrase sur l’hypallage', [
  grp('Deux phrases sur Hugo', [
    free('Il y a une hypallage avec « avide ».', 'There is a hypallage with “greedy”.', 'le repérage'),
    it(E(1272), 'l’effet'),
  ], chk('Laquelle irait dans un commentaire ?', ['« il y a une hypallage avec avide »', '« l’avidité déborde de l’homme sur les choses qu’il touche »'], 1,
    'Elle dit ce que le déplacement produit. Une lecture plus satirique, le marchand réduit à son comptoir, se défend aussi. EN: it says what the shift produces.')),
  grp('Ta phrase', [
    it(E(1274), 'une rue fatiguée'),
  ], chk('L’effet de « Elle rentrait par une rue fatiguée » :', ['sa fatigue colore tout le trajet', 'la rue est en mauvais état'], 0,
    'Le trait de la femme passe à la rue. On peut aussi lire une rue vraiment triste : les deux se tiennent. EN: her tiredness colours the street.')),
], ['hypallage', 'effet']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('L’hypallage', 'L’hypallage…', ['prête à un mot le trait d’un autre mot de la phrase', 'fait agir une chose comme une personne'], 0,
    'Faire agir une chose, c’est la personnification. EN: acting is personification.'),
  ctl('Le comptoir', 'Dans « son comptoir avide », l’avide, c’est…', ['le marchand', 'le comptoir', 'le poète'], 0,
    'Le trait a changé de place. EN: the trait moved.'),
  ctl('Le sens', 'Une hypallage…', ['laisse le sens clair', 'rend le sens impossible'], 0,
    'Personne ne se méprend. EN: nobody misreads it.'),
], ['hypallage']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'L’hypallage',
    opener: {
      line: 'Un comptoir avide, et c’est le marchand qu’on voit : ici tu suis un trait qui change de place. EN: A greedy counter, and it is the merchant you see: here you follow a trait that changes places.',
      imageRef: 'lessons/figures-effet/act07.jpg',
    },
    sections: [],
    milestone: 'Tu repères une hypallage, tu la distingues de la personnification et tu dis ce que le déplacement produit. EN: You can spot a hypallage, tell it from personification, and say what the shift produces.',
    estScreens: 32, restPoints: ['a7-hypallage', 'a7-erreurs'],
  },
  sections: [A7_LECTURE, A7_HYPALLAGE, A7_TRIER, A7_ERREURS, A7_COMMENTAIRE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — MÉTONYMIE ET SYNECDOQUE
 *
 *  TEXT: an original port chronicle. FIGURE: naming by a real link
 *  (métonymie) and by the part (synecdoque), told from metaphor.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a8-lecture', layer: 'core', questionsInModal: true,
  title: 'La fin d’un port', frSub: 'Une chronique, texte original',
  text: METONYMIE_TEXT,
  glossary: [
    { word: 'conserverie', en: 'cannery', note: 'L’usine où l’on met le poisson en boîte.' },
  ],
  questions: [
    { q: 'Devine le sens : « la fin d’un monde ». Que veut dire la voisine ?', a: 'Qu’une manière de vivre entière disparaît avec la conserverie.' },
    { q: 'Que désigne « toute la salle » ?', a: 'Les gens qui sont dans la salle : le lieu pour ses occupants.' },
    { q: 'Que désigne « Paris » ?', a: 'Le gouvernement, qui siège à Paris.' },
    { q: 'Quelles synecdoques Hugues trouve-t-il ?', a: '« Une voile » pour un bateau, « des bouches à nourrir » pour des personnes.' },
    { q: 'Quel effet Mamadou donne-t-il à « des bouches à nourrir » ?', a: 'Réduire une famille à des bouches, c’est ne plus voir que sa faim.' },
  ],
  audio: REC('rec-c1-19-port'), say: REFRAME, terms: ['metonymie', 'effet'],
};

const A8_LIENS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a8-liens', layer: 'core', sheetId: 'sheet-sens',
  title: 'Six liens qui font une métonymie',
  cols: ['Le lien', 'Exemple', 'Ce qu’on désigne'],
  rows: [
    { cells: ['le lieu pour les gens', 'toute la salle', 'le public'], say: src(E(1280)).fr,
      detail: { title: 'Le lieu', body: 'La salle se lève : ce sont les gens qui s’y trouvent. L’effet : un mouvement d’ensemble, une seule masse. EN: the place for its people.', say: src(E(1280)).fr } },
    { cells: ['l’auteur pour l’œuvre', 'tout Hugo', 'ses livres'], say: src(E(1281)).fr,
      detail: { title: 'L’auteur', body: 'On lit « tout Hugo » : l’homme et l’œuvre se confondent. EN: the author for the works.', say: src(E(1281)).fr } },
    { cells: ['la capitale pour le pouvoir', 'Paris', 'le gouvernement'], say: src(E(1286)).fr,
      detail: { title: 'La capitale', body: 'Dans la chronique, « Paris n’a pas répondu » : un pouvoir lointain, sans visage. EN: a distant, faceless power.', say: src(E(1291)).fr } },
    { cells: ['l’ensemble pour les membres', 'le quartier', 'les habitants'], say: src(E(1286)).fr,
      detail: { title: 'L’ensemble', body: 'Le quartier signe : l’unanimité devient visible. EN: the whole for its members.', say: src(E(1286)).fr } },
    { cells: ['la partie pour le tout', 'une voile', 'un navire'], say: src(E(1282)).fr,
      detail: { title: 'La synecdoque', body: 'Selon Larousse, la synecdoque est une variété de métonymie ; il cite « une voile » pour un navire. EN: a kind of metonymy.', say: src(E(1284)).fr } },
    { cells: ['la partie pour la personne', 'des bouches à nourrir', 'des gens'], say: src(E(1285)).fr,
      detail: { title: 'Réduire à une partie', body: 'Choisir la bouche, c’est montrer le besoin. EN: choosing the mouth shows the need.', say: src(E(1288)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['metonymie'],
};

const A8_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-trier', layer: 'core', size: 'lg',
  title: 'Voisinage ou ressemblance ?', frSub: 'Métonymie ou métaphore',
  groups: [
    grp('Deux phrases', [
      it(E(1282)),
      it(LIT(1505), 'la métaphore, au B2'),
    ], chk('« On voyait une voile à l’horizon » : c’est…', ['une synecdoque', 'une métaphore'], 0,
      'La voile est une partie réelle du navire : pas de ressemblance, un lien. EN: a real part, not a likeness.')),
    grp('Trois métonymies', [
      it(E(1280)),
      it(E(1281)),
      it(E(1286)),
    ], chk('Dans ces trois phrases, le lien est…', ['réel : le lieu, l’auteur, l’ensemble', 'une ressemblance'], 0,
      `${src(E(1287)).fr} EN: a slide to a neighbour.`)),
    ctl('La règle', 'La synecdoque, c’est…', ['une variété de métonymie', 'une variété de comparaison'], 0,
      `${src(E(1284)).fr} EN: a kind of metonymy.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['metonymie'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a8-piege', layer: 'core', swipe: true,
  title: 'Six phrases sur une métonymie',
  rule: {
    title: 'Dis le lien, puis ce qu’il montre',
    body: 'Une phrase d’effet sur une métonymie dit quel lien remplace le mot attendu, et ce que ce choix met en avant : la masse, le pouvoir lointain, le besoin. EN: say the link, then what the choice foregrounds.',
  },
  cards: [
    { promptLabel: 'le nom seul', promptSound: 'Il y a une synecdoque dans la chronique.', fr: src(E(1288)).fr, ipa: ipaOf(E(1288)), tip: 'Dis ce que la partie choisie fait voir. EN: say what the chosen part shows.' },
    { promptLabel: 'la ressemblance supposée', promptSound: 'La voile ressemble à un bateau.', fr: src(E(1287)).fr, ipa: ipaOf(E(1287)), tip: 'La métonymie glisse vers un voisin. EN: a neighbour, not a likeness.' },
    { promptLabel: 'la règle floue', promptSound: 'La métonymie remplace un mot par un synonyme.', fr: src(E(1283)).fr, ipa: ipaOf(E(1283)), tip: 'Pas un synonyme : une chose liée. EN: a linked thing.' },
    { promptLabel: 'la partie oubliée', promptSound: 'La synecdoque compare deux choses.', fr: src(E(1284)).fr, ipa: ipaOf(E(1284)), tip: 'La partie pour le tout. EN: part for whole.' },
    { promptLabel: 'l’effet oublié', promptSound: 'Toute la salle désigne le public.', fr: src(E(1280)).fr, ipa: ipaOf(E(1280)), tip: 'Et l’effet : une foule qui se lève d’un bloc. EN: and the effect.' },
    { promptLabel: 'le lien inventé', promptSound: 'Paris est une métaphore de la France.', fr: src(E(1291)).fr, ipa: ipaOf(E(1291)), tip: 'Un lien réel : la capitale pour le pouvoir. EN: a real link.' },
  ],
  drill: [
    { promptSay: 'La métonymie nomme une chose par une autre qui lui est … .', opts: ['liée', 'semblable'], correct: 0 },
    { promptSay: 'Une voile pour un navire : c’est une … .', opts: ['synecdoque', 'métaphore'], correct: 0 },
    { promptSay: 'La synecdoque prend la … pour le tout.', opts: ['partie', 'couleur'], correct: 0 },
    { promptSay: 'Lire « tout Hugo », c’est lire ses … .', opts: ['livres', 'lettres d’amour'], correct: 0 },
    { promptSay: 'La métaphore saute vers une image ; la métonymie glisse vers un … .', opts: ['voisin', 'synonyme'], correct: 0 },
    { promptSay: 'Dans la chronique, « Paris » désigne le … .', opts: ['gouvernement', 'port'], correct: 0 },
    { promptSay: 'Dire « des bouches à nourrir », c’est réduire une personne à sa … .', opts: ['faim', 'voix'], correct: 0 },
    { promptSay: 'Selon Larousse, la synecdoque est une variété de … .', opts: ['métonymie', 'litote'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le lien, puis ce qu’il montre' },
    { label: 'Six cartes', kind: 'cards', title: 'Six phrases à reprendre' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-19-piege-metonymie'), say: REFRAME, terms: ['metonymie'],
};

const A8_COMMENTAIRE = pourTonCommentaire('a8-commentaire', 'Ta phrase sur la métonymie', [
  grp('Deux phrases sur la chronique', [
    free('Le mot « Paris » est une métonymie.', 'The word “Paris” is a metonymy.', 'le repérage'),
    free('En écrivant que Paris « n’a pas répondu », le chroniqueur fait du pouvoir une ville lointaine, sans visage.', 'By writing “Paris did not answer”, the columnist turns power into a distant, faceless city.', 'l’effet'),
  ], chk('Laquelle irait dans un commentaire ?', ['« Paris est une métonymie »', '« fait du pouvoir une ville lointaine, sans visage »'], 1,
    'Elle dit ce que le choix du mot produit. On peut aussi y entendre de l’amertume : la lecture se défend. EN: it says what the word choice produces.')),
  grp('Ta phrase', [
    it(E(1288), 'pour ton commentaire'),
  ], chk('Cette phrase d’effet est juste parce qu’elle…', ['dit ce que la partie choisie met en avant', 'compte les mots'], 0,
    'La bouche, c’est le besoin. EN: the mouth is the need.')),
], ['metonymie', 'effet']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La métonymie', 'La métonymie repose sur…', ['un lien réel', 'une ressemblance'], 0,
    'La ressemblance, c’est la métaphore. EN: likeness is metaphor.'),
  ctl('La synecdoque', 'Une voile pour un navire, c’est…', ['une synecdoque', 'une hypallage', 'une litote'], 0,
    'La partie pour le tout. EN: part for whole.'),
  ctl('L’effet', 'Dire « des bouches à nourrir » met en avant…', ['le besoin', 'la beauté'], 0,
    'On ne voit plus que la faim. EN: only the hunger.'),
], ['metonymie']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Métonymie et synecdoque',
    opener: {
      line: 'Une voile à l’horizon, et c’est tout un bateau : ici tu lis les mots qui nomment par le voisin. EN: A sail on the horizon, and it is a whole boat: here you read words that name by the neighbour.',
      imageRef: 'lessons/figures-effet/act08.jpg',
    },
    sections: [],
    milestone: 'Tu repères une métonymie et une synecdoque, tu les distingues de la métaphore et tu dis ce que le choix du mot met en avant. EN: You can spot metonymy and synecdoche, tell them from metaphor, and say what the word choice foregrounds.',
    estScreens: 38, restPoints: ['a8-liens', 'a8-piege'],
  },
  sections: [A8_LECTURE, A8_LIENS, A8_TRIER, A8_PIEGE, A8_COMMENTAIRE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LES SONS
 *
 *  TEXT: Racine’s serpents and Verlaine’s violins, written on the board.
 *  FIGURE: alliteration and assonance, SHOWN IN TEXT (device TTS flattens
 *  sounds), always tied to what the words say.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a9-lecture', layer: 'core', questionsInModal: true,
  title: 'Des serpents et des violons', frSub: 'Racine, Verlaine',
  text: SONS_TEXT,
  glossary: [
    { word: 'Furies', en: 'the Furies', note: 'Dans la mythologie, des déesses de la vengeance aux cheveux de serpents.' },
  ],
  questions: [
    { q: 'Devine le sens : « langueur ». Que ressent le poète ?', a: 'Une tristesse lente, sans force, qui dure.' },
    { q: 'Quel son revient dans le vers de Racine, et combien de fois ?', a: 'Le son [s], cinq fois : sont, ces, serpents, sifflent, sur.' },
    { q: 'Quel effet Mamadou lui donne-t-il ?', a: 'On entend le sifflement des serpents dans la bouche de l’acteur.' },
    { q: 'Qu’est-ce qui revient chez Verlaine ?', a: 'Des voyelles : les nasales de sanglots, longs, violons, mon, et les [o] de automne et monotone. C’est une assonance.' },
    { q: 'Pourquoi Hugues se trompe-t-il avec « sanglots longs » ?', a: 'Deux mots qui commencent par la même lettre ne font pas une allitération, et un son ne veut rien dire seul.' },
  ],
  audio: REC('rec-c1-19-sons'), say: REFRAME, terms: ['sons', 'effet'],
};

const A9_SONS: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a9-sons', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-sons',
  title: 'Consonnes et voyelles qui reviennent', frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Lis-les à voix haute, lentement.',
  audio: AUDIO, say: REFRAME, terms: ['sons'],
  cards: [
    { head: 'L’allitération', label: 'Racine', fr: src(E(1292)).fr, sub: rsOf(E(1292)),
      body: 'Sont, ces, serpents, sifflent, sur : cinq [s] en un vers. La consonne répétée imite le sifflement. EN: five [s] sounds imitate the hiss.' },
    { head: 'L’assonance', label: 'Verlaine', fr: src(E(1295)).fr, sub: rsOf(E(1295)),
      body: 'Sanglots, longs, violons : la voyelle nasale revient et s’allonge. On peut y entendre une plainte, ou un bercement : les deux se défendent. EN: the nasal vowel returns and drags.' },
    { head: 'Un son seul ne dit rien', label: 'le piège', fr: src(E(1296)).fr, sub: rsOf(E(1296)),
      body: 'Le [s] ne siffle que parce que le vers parle de serpents. Sans le sens, un son n’a pas d’effet. EN: a sound works only with the meaning.' },
    { head: 'L’œil, puis l’oreille', label: 'la méthode', fr: src(E(1302)).fr, sub: rsOf(E(1302)),
      body: 'Repère les lettres à l’écrit, puis dis le vers toi-même : la lecture synthétique de ton téléphone aplatit les sons. EN: spot on the page, check aloud; the phone’s voice flattens sounds.' },
  ],
};

const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-trier', layer: 'core', size: 'lg',
  title: 'Consonne ou voyelle ?', frSub: 'Allitération ou assonance',
  groups: [
    grp('Deux phrases inventées', [
      it(E(1298)),
      it(E(1299)),
    ], chk('« Le vent violent vrillait les volets » : ce qui revient, c’est…', ['une consonne, [v]', 'une voyelle, [u]'], 0,
      'Vent, violent, vrillait, volets : une allitération en [v], qui fait entendre le vent. EN: alliteration on [v].')),
    grp('Le son [u]', [
      it(E(1299)),
    ], chk('Dans « Tout est doux, tout est lourd, tout se tait autour », la figure est…', ['une assonance en [u]', 'une allitération en [t]'], 0,
      'Tout, doux, lourd, autour : une voyelle revient, et la phrase s’alourdit. Le [t] revient aussi ; l’assonance domine, mais on peut relever les deux. EN: the [u] dominates.')),
    ctl('Le piège', '« Les sanglots longs » : deux « l ». Est-ce une allitération ?', ['Oui, deux lettres suffisent.', 'Non : deux initiales identiques ne suffisent pas.'], 1,
      `${src(E(1297)).fr} EN: two matching initials are not enough.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sons'],
};

/** Lines SHOWN on purpose: the sounds must be read as well as heard. */
const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a9-ecoute', layer: 'core',
  title: 'Écoute, puis regarde les lettres', frSub: 'Huit phrases, lignes visibles',
  lines: [ln(E(1292)), ln(E(1293)), ln(E(1298)), ln(E(1299)), ln(E(1295)), ln(E(1296)), ln(E(1302)), ln(E(1303))],
  questions: [
    { q: 'Dans la première phrase, quel son entends-tu le plus ?', opts: ['[s]', '[r]', '[m]'], correct: 0,
      why: 'Sont, ces, serpents, sifflent, sur. EN: five [s].' },
    { q: 'La troisième phrase répète surtout…', opts: ['le [v]', 'le [u]'], correct: 0,
      why: 'Vent, violent, vrillait, volets. EN: [v] four times.' },
    { q: 'La quatrième phrase répète surtout…', opts: ['une voyelle', 'une consonne'], correct: 0,
      why: 'Le [u] de tout, doux, lourd, autour : une assonance. EN: an assonance.' },
    { q: 'Selon la sixième phrase, un son…', opts: ['renforce ce que disent les mots', 'a un sens à lui seul'], correct: 0,
      why: 'Sans le sens, pas d’effet sonore. EN: no effect without meaning.' },
    { q: 'Que conseillent les deux dernières phrases ?', opts: ['repérer à l’écrit, vérifier à voix haute', 'écouter seulement'], correct: 0,
      why: 'L’œil repère, l’oreille confirme. EN: eye first, then ear.' },
  ],
  audio: REC('rec-c1-19-ecoute-sons'), say: REFRAME, terms: ['sons'],
};

const A9_COMMENTAIRE = pourTonCommentaire('a9-commentaire', 'Ta phrase sur les sons', [
  grp('Deux phrases sur Racine', [
    free('Il y a beaucoup de « s » dans ce vers.', 'There are a lot of “s”s in this line.', 'le compte'),
    it(E(1293), 'l’effet'),
  ], chk('Laquelle irait dans un commentaire ?', ['« beaucoup de s »', '« le son [s], cinq fois répété, fait entendre le sifflement »'], 1,
    'Elle relie le son au sens du vers : les serpents. On pourrait aussi y entendre la folie d’Oreste qui s’emballe. EN: it ties the sound to the meaning.')),
  grp('Une phrase de trop', [
    free('Le [l] de « longs » exprime la tristesse.', 'The [l] in “longs” expresses sadness.', 'un son pris seul'),
  ], chk('Cette phrase d’effet…', ['prête un sens à un son isolé : elle ne se défend pas', 'est parfaite'], 0,
    'Un son ne veut rien dire seul. Pars des mots, puis montre comment les sons les renforcent. EN: start from the words.')),
], ['sons', 'effet']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Les noms', 'L’allitération répète…', ['une consonne', 'une voyelle'], 0,
    'L’assonance répète une voyelle. EN: assonance repeats a vowel.'),
  ctl('Le sens', 'Un son répété…', ['renforce ce que disent les mots', 'a toujours le même sens', 'ne sert à rien'], 0,
    'Le [s] siffle parce que le vers parle de serpents. EN: because of the serpents.'),
  ctl('La méthode', 'Pour repérer une assonance, tu…', ['regardes le texte, puis le dis à voix haute', 'écoutes seulement l’enregistrement'], 0,
    'La voix synthétique aplatit les sons. EN: synthetic voices flatten sounds.'),
], ['sons']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Les sons',
    opener: {
      line: 'Des serpents qui sifflent, des violons qui sanglotent : ici tu vois, puis tu entends, les sons qui servent le sens. EN: Hissing serpents, sobbing violins: here you see, then hear, the sounds that serve the meaning.',
      imageRef: 'lessons/figures-effet/act09.jpg',
    },
    sections: [],
    milestone: 'Tu repères une allitération et une assonance dans le texte écrit, et tu les relies au sens. EN: You can spot alliteration and assonance on the page and tie them to the meaning.',
    estScreens: 34, restPoints: ['a9-sons', 'a9-ecoute'],
  },
  sections: [A9_LECTURE, A9_SONS, A9_TRIER, A9_ECOUTE, A9_COMMENTAIRE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — LE RYTHME
 *
 *  TEXT: Pascal’s silence (1871 spelling). FIGURE: the length and grouping
 *  of members: rythme ternaire, cadence majeure and mineure.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a10-lecture', layer: 'core', questionsInModal: true,
  title: 'Le silence éternel', frSub: 'Pascal, Pensées',
  text: RYTHME_TEXT,
  glossary: [
    { word: 'immensité', en: 'immensity', note: 'Une étendue sans limites.' },
  ],
  questions: [
    { q: 'Devine le sens : « m’effraye ». Que ressent Pascal ?', a: 'De la peur, de l’effroi.' },
    { q: 'Combien de syllabes Mamadou compte-t-il dans chaque membre ?', a: 'Six, sept, puis deux : la phrase s’allonge, puis tombe.' },
    { q: 'Comment s’appelle une phrase qui finit sur le membre le plus court ?', a: 'Une cadence mineure.' },
    { q: 'Quel effet a la chute brève, selon lui ?', a: 'Elle fait entendre l’effroi d’un homme seul devant l’immensité.' },
    { q: 'Pourquoi parle-t-il d’orthographe ?', a: 'L’édition qu’il cite écrit « m’effraye » ; beaucoup d’éditions récentes écrivent « m’effraie ».' },
  ],
  audio: REC('rec-c1-19-pascal'), say: REFRAME, terms: ['rythme', 'effet'],
};

const A10_RYTHMES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a10-rythmes', layer: 'core', sheetId: 'sheet-sons',
  title: 'Six choses à regarder dans un rythme',
  cols: ['Ce qu’on regarde', 'Un exemple', 'Un effet possible'],
  rows: [
    { cells: ['la cadence mineure', 'Pascal', 'une chute, l’effroi'], say: src(E(1304)).fr,
      detail: { title: 'La cadence mineure', body: 'Le dernier membre est le plus court : la phrase tombe. EN: the last member is shortest.', say: src(E(1308)).fr } },
    { cells: ['la cadence majeure', 'des membres de plus en plus longs', 'un élargissement'], say: src(E(1307)).fr,
      detail: { title: 'La cadence majeure', body: 'Le dernier membre est le plus long : la phrase s’ouvre, s’élargit. EN: the last member is longest.', say: src(E(1310)).fr } },
    { cells: ['le rythme ternaire', 'lire, relire, et lire encore', 'un achèvement'], say: src(E(1309)).fr,
      detail: { title: 'Trois temps', body: 'Le troisième temps donne une impression de fin, de plénitude. EN: the third beat feels complete.', say: src(E(1306)).fr } },
    { cells: ['la phrase longue', 'l’étendue du ciel', 'l’ampleur'], say: src(E(1310)).fr,
      detail: { title: 'La longueur', body: 'Une phrase qui s’étend peut imiter ce qu’elle décrit : un paysage, une attente, une pensée qui cherche. EN: length can imitate what it describes.', say: src(E(1305)).fr } },
    { cells: ['les phrases courtes', 'un récit qui s’accélère', 'la tension'], say: src(LIT(1482)).fr,
      detail: { title: 'La brièveté', body: `${Cap(LITT_REF)} te l’a montré dans un récit. Ici, regarde aussi la dernière phrase brève après une longue. EN: brevity after length.`, say: src(LIT(1482)).fr } },
    { cells: ['le compte des syllabes', 'six, sept, deux', 'une preuve'], say: src(E(1313)).fr,
      detail: { title: 'Compter avant de parler', body: 'Une cadence se prouve par un compte : cite les membres, donne leur longueur. EN: prove a cadence by counting.', say: src(E(1313)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['rythme'],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-trier', layer: 'core', size: 'lg',
  title: 'Majeure, mineure, ternaire', frSub: 'Compte, puis nomme',
  groups: [
    grp('Pascal', [
      it(E(1304)),
      it(E(1305), 'ce que fait la phrase'),
    ], chk('Six, sept, deux syllabes : la cadence est…', ['mineure', 'majeure'], 0,
      'Le dernier membre est le plus court : elle tombe. EN: it falls.')),
    grp('Trois temps', [
      it(E(1309)),
    ], chk('« Il faut lire, relire, et lire encore » a un rythme…', ['ternaire', 'binaire'], 0,
      'Trois éléments, et le troisième, plus long, achève le mouvement. EN: three beats.')),
    ctl(`Un rappel de ${PERSUADER_REF}`, `« ${src(RH(1131)).fr} » Dans un texte littéraire, le rythme sert surtout à…`, ['faire sentir le sens', 'prouver une thèse'], 0,
      `${src(E(1314)).fr} EN: rhythm makes the meaning felt.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['rythme'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a10-piege', layer: 'core', swipe: true,
  title: 'Six phrases sur un rythme',
  rule: {
    title: 'Compte, puis dis ce que tu sens',
    body: 'Une phrase sur le rythme cite les membres, donne leur longueur, puis dit ce que la chute, l’ampleur ou les trois temps font sentir. EN: count, then say what it makes the reader feel.',
  },
  cards: [
    { promptLabel: 'le nom seul', promptSound: 'Pascal emploie une cadence mineure.', fr: src(E(1305)).fr, ipa: ipaOf(E(1305)), tip: 'Dis comment la phrase s’étend, puis tombe. EN: say how it stretches, then falls.' },
    { promptLabel: 'l’effet oublié', promptSound: 'La dernière partie est courte.', fr: src(E(1308)).fr, ipa: ipaOf(E(1308)), tip: 'Et ce que la chute fait entendre. EN: and what the fall makes heard.' },
    { promptLabel: 'le compte oublié', promptSound: 'La phrase est rythmée.', fr: src(E(1313)).fr, ipa: ipaOf(E(1313)), tip: 'Toute phrase a un rythme : compte. EN: every sentence has rhythm; count.' },
    { promptLabel: 'l’ornement', promptSound: 'Le rythme rend la phrase plus jolie.', fr: src(E(1314)).fr, ipa: ipaOf(E(1314)), tip: 'Pas un ornement : un sens. EN: not decoration.' },
    { promptLabel: 'la règle inversée', promptSound: 'La cadence mineure finit sur le membre le plus long.', fr: src(E(1307)).fr, ipa: ipaOf(E(1307)), tip: 'Mineure : le plus court. EN: minor ends shortest.' },
    { promptLabel: 'trois pris pour deux', promptSound: 'Lire, relire, et lire encore : un rythme binaire.', fr: src(E(1306)).fr, ipa: ipaOf(E(1306)), tip: 'Trois éléments : ternaire. EN: three is ternary.' },
  ],
  drill: [
    { promptSay: 'La cadence mineure finit sur le membre le plus … .', opts: ['court', 'long'], correct: 0 },
    { promptSay: 'Un rythme ternaire groupe … éléments.', opts: ['trois', 'deux'], correct: 0 },
    { promptSay: 'Chez Pascal, le dernier membre, « m’effraye », a … syllabes.', opts: ['deux', 'huit'], correct: 0 },
    { promptSay: 'La chute brève fait entendre l’… .', opts: ['effroi', 'ennui'], correct: 0 },
    { promptSay: 'Avant de parler de cadence, compte les … .', opts: ['syllabes', 'virgules'], correct: 0 },
    { promptSay: 'Le rythme n’est pas un … : il fait sentir le sens.', opts: ['ornement', 'sens'], correct: 0 },
    { promptSay: 'La cadence majeure finit sur le membre le plus … .', opts: ['long', 'court'], correct: 0 },
    { promptSay: 'Une phrase longue peut imiter l’… qu’elle décrit.', opts: ['étendue', 'auteur'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Compte, puis dis ce que tu sens' },
    { label: 'Six cartes', kind: 'cards', title: 'Six phrases à reprendre' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-19-piege-rythme'), say: REFRAME, terms: ['rythme'],
};

const A10_COMMENTAIRE = pourTonCommentaire('a10-commentaire', 'Ta phrase sur le rythme', [
  grp('Deux phrases sur Pascal', [
    free('La phrase de Pascal a un beau rythme.', 'Pascal’s sentence has a fine rhythm.', 'un jugement vague'),
    free('Après deux membres amples, « m’effraye » tombe en deux syllabes : l’homme paraît minuscule devant l’infini.', 'After two ample members, “m’effraye” falls in two syllables: the man seems tiny before the infinite.', 'le compte et l’effet'),
  ], chk('Laquelle irait dans un commentaire ?', ['« un beau rythme »', '« m’effraye tombe en deux syllabes : l’homme paraît minuscule »'], 1,
    'Elle compte, cite et dit l’effet. On pourrait aussi lire un aveu murmuré : cela se défend. EN: it counts, quotes and says the effect.')),
  grp('Ta phrase', [
    it(E(1310), 'la longueur'),
  ], chk('Pour Pascal, la longueur des deux premiers membres…', ['imite l’étendue des espaces', 'n’a aucun rôle'], 0,
    'La phrase s’étend comme le ciel. EN: the sentence stretches like the sky.')),
], ['rythme', 'effet']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La cadence', 'Une cadence mineure finit…', ['sur le membre le plus court', 'sur le membre le plus long'], 0,
    'La majeure finit sur le plus long. EN: major ends longest.'),
  ctl('Le ternaire', 'Un rythme ternaire…', ['groupe trois éléments', 'répète trois fois le même son', 'compte trois phrases'], 0,
    'Trois temps, et une impression d’achèvement. EN: three beats.'),
  ctl('La preuve', 'Une remarque sur le rythme se prouve par…', ['le compte des syllabes', 'une impression'], 0,
    'Cite les membres, donne leur longueur. EN: quote and count.'),
], ['rythme']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Le rythme',
    opener: {
      line: 'Une phrase qui s’étend comme le ciel, puis tombe en deux syllabes : ici tu comptes, puis tu entends le sens. EN: A sentence that stretches like the sky, then falls in two syllables: here you count, then hear the meaning.',
      imageRef: 'lessons/figures-effet/act10.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais un rythme ternaire, une cadence majeure ou mineure, et tu dis ce qu’ils font sentir, chiffres à l’appui. EN: You can recognise a ternary rhythm and a major or minor cadence, and say what they make felt, with counts.',
    estScreens: 38, restPoints: ['a10-rythmes', 'a10-piege'],
  },
  sections: [A10_LECTURE, A10_RYTHMES, A10_TRIER, A10_PIEGE, A10_COMMENTAIRE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — LES EFFETS DE RUPTURE
 *
 *  TEXT: Pascal’s Cleopatra (1871 spelling) and three original sentences.
 *  FIGURE: anacoluthe, asyndète, rejet, phrase nominale.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a11-lecture', layer: 'core', questionsInModal: true,
  title: 'Le nez de Cléopâtre', frSub: 'Pascal, et trois phrases brèves',
  text: RUPTURE_TEXT,
  glossary: [
    { word: 'disproportion', en: 'disproportion', note: 'Un écart énorme entre deux grandeurs.' },
  ],
  questions: [
    { q: 'Devine le sens : « bascule ». Que fait le monde, selon Mamadou ?', a: 'Il se renverse, il change complètement.' },
    { q: 'Quel est le sujet de « auroit changé » ?', a: 'Ce n’est pas le nez : c’est « toute la face de la terre ». La phrase change de construction en route.' },
    { q: 'Comment s’appelle cette construction brisée, et que fait-elle sentir ?', a: 'Une anacoluthe : la disproportion entre un détail minuscule et le monde entier.' },
    { q: 'Qu’est-ce qu’une asyndète ?', a: 'La suppression des mots de liaison : « Il entre, il regarde, il se tait. »' },
    { q: 'Que fait le rejet en poésie ?', a: 'La phrase déborde sur le vers suivant, et le mot rejeté se retrouve seul, en pleine lumière.' },
  ],
  audio: REC('rec-c1-19-cleopatre'), say: REFRAME, terms: ['rupture', 'effet'],
};

const A11_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a11-exemples', layer: 'core', sheetId: 'sheet-sons',
  title: 'Quatre ruptures voulues',
  examples: [
    ex(E(1315), 'l’anacoluthe : la phrase change de route'),
    ex(E(1316), 'ce qu’elle fait sentir : du nez au monde'),
    ex(E(1320), 'l’asyndète : des gestes sans liaison'),
    ex(E(1321), 'son effet : le lecteur fait les liens'),
    ex(E(1322), 'le rejet : un mot seul en tête de vers'),
    ex(E(1323), 'la phrase nominale : le mouvement s’arrête'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['rupture'],
};

const A11_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-trier', layer: 'core', size: 'lg',
  title: 'Quelle rupture ?', frSub: 'Construction, liaison, vers, verbe',
  groups: [
    grp('Pascal', [
      it(E(1315)),
      it(E(1317), 'la règle'),
    ], chk('La phrase de Pascal est une…', ['anacoluthe', 'asyndète'], 0,
      'La construction commencée avec le nez est abandonnée en route. EN: the construction is abandoned.')),
    grp('Trois gestes', [
      it(E(1320)),
    ], chk('« Il entre, il regarde, il se tait. » Il manque…', ['les mots de liaison', 'les verbes'], 0,
      `${src(E(1319)).fr} EN: no linking words.`)),
    ctl('Le vers', 'Un mot rejeté en tête du vers suivant est…', ['mis en relief', 'effacé'], 0,
      `${src(E(1322)).fr} EN: thrown into relief.`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['rupture'],
};

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a11-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre lectures de la rupture à reprendre',
  errors: [
    { wrong: 'Pascal a fait une faute de construction.', right: 'L’anacoluthe rompt la construction attendue, et c’est voulu.',
      why: 'Normal : à l’école, une phrase qui change de sujet est une faute. Ici, la cassure porte le sens : la disproportion. EN: here the break carries meaning.' },
    { wrong: '« Il entre, il regarde, il se tait » manque de liens : c’est mal écrit.', right: 'Sans liaison, les faits se heurtent et le lecteur fait les liens.',
      why: 'On a appris à lier ses phrases, et c’est juste dans une argumentation. Dans un récit, l’asyndète peut créer la tension. EN: in narrative, asyndeton can build tension.' },
    { wrong: 'Le rejet sert à respecter la rime.', right: 'Le rejet met un mot en relief en tête du vers suivant.',
      why: 'La contrainte du vers existe, mais le commentaire cherche l’effet : quel mot se retrouve seul, et pourquoi. EN: look for the isolated word.' },
    { wrong: 'Une phrase sans verbe est incomplète.', right: 'Une phrase nominale arrête le mouvement.',
      why: 'Grammaticalement, on attend un verbe. Stylistiquement, son absence fige l’instant. EN: its absence freezes the moment.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['rupture', 'lecture'],
};

const A11_COMMENTAIRE = pourTonCommentaire('a11-commentaire', 'Ta phrase sur une rupture', [
  grp('Deux phrases sur Pascal', [
    free('La phrase de Pascal est mal construite.', 'Pascal’s sentence is badly built.', 'un jugement'),
    it(E(1318), 'l’effet'),
  ], chk('Laquelle irait dans un commentaire ?', ['« mal construite »', '« la rupture fait sentir la disproportion entre la cause et l’effet »'], 1,
    'Elle dit ce que la cassure produit. On peut aussi lire l’ironie d’un moraliste sur l’histoire : la lecture se défend. EN: it says what the break produces.')),
  grp('Pour Rimbaud, la semaine prochaine', [
    it(E(1327), 'un rejet'),
  ], chk('Le rejet de « Dort » en tête de vers…', ['met le sommeil en relief, puis installe le doute', 'cache le mot'], 0,
    'Seul en tête de vers, le mot pèse ; tu le retrouveras dans le sonnet. EN: alone, the word weighs.')),
], ['rupture', 'effet']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('L’anacoluthe', 'L’anacoluthe…', ['rompt la construction attendue', 'supprime les liaisons'], 0,
    'Supprimer les liaisons, c’est l’asyndète. EN: that is asyndeton.'),
  ctl('Le rejet', 'Le rejet…', ['met un mot en relief en tête du vers suivant', 'répète un son', 'inverse deux mots'], 0,
    'La phrase déborde, le mot reste seul. EN: the word stands alone.'),
  ctl('Voulue', 'Une rupture voulue est…', ['une figure dont on dit l’effet', 'une faute à corriger'], 0,
    'Dis ce qu’elle casse, et pourquoi. EN: say what it breaks and why.'),
], ['rupture']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Les effets de rupture',
    opener: {
      line: 'Une phrase commence sur un nez et finit sur la face de la terre : ici tu lis ce qu’une cassure voulue fait sentir. EN: A sentence starts on a nose and ends on the face of the earth: here you read what a deliberate break makes felt.',
      imageRef: 'lessons/figures-effet/act11.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais une anacoluthe, une asyndète, un rejet et une phrase nominale, et tu dis ce que chaque rupture casse. EN: You can recognise anacoluthon, asyndeton, enjambment and a verbless sentence, and say what each break does.',
    estScreens: 34, restPoints: ['a11-exemples', 'a11-erreurs'],
  },
  sections: [A11_LECTURE, A11_EXEMPLES, A11_TRIER, A11_ERREURS, A11_COMMENTAIRE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TON COMMENTAIRE
 *
 *  The production act. Rimbaud’s sonnet is read, planned, rehearsed with
 *  Mamadou, then commented. The brief prints the sonnet again (no `source`
 *  field on `task`).
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a12-lecture', layer: 'core', questionsInModal: true,
  title: 'Le Dormeur du val', frSub: 'Rimbaud, octobre 1870',
  text: DORMEUR_TEXT,
  glossary: [
    { word: 'haillons', en: 'rags, tatters', note: 'Des vêtements en lambeaux ; ici, des reflets d’argent accrochés aux herbes.' },
  ],
  questions: [
    { q: 'Devine le sens : « sous la nue ». Où est étendu le soldat ?', a: 'Sous le ciel, sous les nuages, en plein air.' },
    { q: 'Quelle image le premier quatrain donne-t-il de la nature ?', a: 'Une nature vivante et lumineuse : la rivière chante, le soleil luit, le val mousse de rayons.' },
    { q: 'Quels mots, dès le deuxième quatrain, peuvent inquiéter ?', a: '« Pâle », puis la comparaison avec « un enfant malade », et « il a froid » en plein soleil.' },
    { q: 'Quels mots sont rejetés en tête de vers ?', a: '« D’argent », « Luit », « Dort », « Sourirait », « Tranquille ».' },
    { q: 'Que révèle le dernier vers ?', a: 'Les deux trous rouges : le soldat ne dort pas, il est mort.' },
    { q: 'Quelle lecture proposerais-tu du poème ?', a: 'Réponse libre. Par exemple : un piège tendu au lecteur, ou une berceuse funèbre. Elle se défend avec les mots du texte.' },
  ],
  audio: REC('rec-c1-19-dormeur'), say: REFRAME, terms: ['commentaire', 'lecture'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-effet',
  title: 'Six étapes pour ton commentaire',
  steps: [
    '1. Situe l’extrait en une phrase : l’auteur, la date, ce qu’on croit voir d’abord. EN: place the extract.',
    '2. Annonce ta lecture : « Je propose de lire ce poème comme… ». EN: announce your reading.',
    '3. Organise deux ou trois mouvements, par exemple le décor, les indices, la chute. EN: two or three movements.',
    '4. Pour chaque figure : nomme-la, cite un ou deux mots, dis l’effet en une phrase. EN: name, quote, effect.',
    '5. Reconnais au moins une autre lecture possible, et dis pourquoi tu gardes la tienne. EN: acknowledge another reading.',
    '6. Conclus en revenant à ta lecture, et ouvre sur un autre texte. EN: conclude and open out.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['commentaire', 'effet'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', title: 'Où tu commenteras',
  cases: [
    { situation: 'Un commentaire de texte à l’examen', fr: src(E(1328)).fr, en: src(E(1328)).en },
    { situation: 'Une discussion dans un club de lecture', fr: src(E(1329)).fr, en: src(E(1329)).en },
    { situation: 'Une critique de recueil pour une revue', fr: src(E(1330)).fr, en: src(E(1330)).en },
    { situation: 'Une question sur le sens d’une phrase finale', fr: src(E(1335)).fr, en: src(E(1335)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['commentaire', 'lecture'],
};

/** USE IT, out loud. Every French string uses the typographic ’. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core', title: 'Mamadou t’écoute',
  setting: 'Mardi soir, après la séance. Avant d’écrire ton commentaire du « Dormeur du val », tu en parles à Mamadou. Il te pose les questions d’un correcteur exigeant.',
  turns: [
    {
      ai: 'Alors, quelle est ta lecture de ce sonnet ?', en: 'So, what is your reading of this sonnet?',
      user: src(E(1328)).fr, userEn: 'I suggest reading this poem as a trap set for the reader. (A reading announced, not a summary.)',
      alts: [
        { fr: src(E(1329)).fr, en: src(E(1329)).en },
        { fr: 'Je le lis comme un tableau paisible que le dernier vers détruit.', en: 'I read it as a peaceful picture that the last line destroys.' },
      ],
    },
    {
      ai: 'Tu relèves des personnifications dans le premier quatrain. Et alors ?', en: 'You note personifications in the first quatrain. So what?',
      user: 'La rivière qui chante et le soleil qui luit font de la nature un lieu vivant, presque joyeux.', userEn: 'The singing river and the shining sun make nature a living, almost joyful place. (The figure and its effect.)',
      alts: [
        { fr: 'Elles installent une harmonie que le dernier vers va briser.', en: 'They set up a harmony that the last line will break.' },
        { fr: 'Elles rendent le décor si vivant que la mort y paraîtra plus choquante.', en: 'They make the setting so alive that death will seem more shocking in it.' },
      ],
    },
    {
      ai: 'Et ce « Dort » tout seul en début de vers ?', en: 'And that “Dort” all alone at the start of the line?',
      user: src(E(1327)).fr, userEn: 'The enjambed “Dort” sets up sleep, then doubt. (A rupture and its effect.)',
      alts: [
        { fr: 'Le rejet met le verbe en relief, et le lecteur s’y attarde.', en: 'The enjambment throws the verb into relief, and the reader lingers on it.' },
        { fr: src(E(1333)).fr, en: src(E(1333)).en },
      ],
    },
    {
      ai: 'Tu dis que c’est une berceuse. Inès dit que c’est un piège. Qui a raison ?', en: 'You say it is a lullaby. Inès says it is a trap. Who is right?',
      user: 'Les deux lectures se défendent ; je garde le piège, parce que les indices inquiétants s’accumulent jusqu’à la chute.', userEn: 'Both readings hold; I keep the trap, because the disturbing clues build up to the end. (A reading defended, another acknowledged.)',
      alts: [
        { fr: src(E(1336)).fr, en: src(E(1336)).en },
        { fr: 'Je peux même les réunir : une berceuse qui cache un piège.', en: 'I can even combine them: a lullaby hiding a trap.' },
      ],
    },
    {
      ai: 'Tu cites tout le dernier vers ?', en: 'Are you quoting the whole last line?',
      user: 'Non, je cite « deux trous rouges » : c’est assez pour prouver la chute.', userEn: 'No, I quote “deux trous rouges”: it is enough to prove the twist. (A short, exact quotation.)',
      alts: [
        { fr: src(E(1334)).fr, en: src(E(1334)).en },
        { fr: 'Je cite deux ou trois mots, et je dis ce qu’ils font.', en: 'I quote two or three words, and say what they do.' },
      ],
    },
    {
      ai: 'Et ta conclusion ?', en: 'And your conclusion?',
      user: 'Je reviens à ma lecture, puis j’ouvre sur l’ironie de Voltaire devant la guerre.', userEn: 'I come back to my reading, then open out onto Voltaire’s irony about war. (A conclusion that returns and opens.)',
      alts: [
        { fr: src(E(1331)).fr, en: src(E(1331)).en },
        { fr: 'Je montre que Rimbaud dénonce la guerre sans un mot de discours.', en: 'I show that Rimbaud denounces war without a word of speech-making.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['commentaire', 'lecture'],
};

const MODEL_ANSWER = '« Le Dormeur du val », sonnet qu’Arthur Rimbaud date d’octobre 1870, en pleine guerre, semble d’abord peindre un soldat qui se repose dans la nature. Je propose de le lire comme un piège tendu au lecteur : tout le poème prépare un dernier vers qui le retourne.\n\n'
  + 'Le décor, d’abord, est celui d’un tableau paisible. La rivière « chante », le soleil « Luit », le val « mousse de rayons » : ces personnifications et cette métaphore font de la nature un lieu vivant, presque joyeux. Les couleurs, l’« argent », le « cresson bleu », le « lit vert », installent une harmonie que rien ne semble troubler.\n\n'
  + 'Pourtant, des indices inquiètent dès le deuxième quatrain. Le rejet de « Dort », seul en tête de vers, met le sommeil en relief ; puis le verbe revient deux fois, et cette insistance finit par sonner faux. Le soldat est « Pâle », il sourit comme « un enfant malade » : la comparaison glisse une menace sous la douceur. L’apostrophe « Nature, berce-le chaudement » fait du paysage une mère qui veille un enfant ; on peut y entendre une berceuse, mais aussi une prière funèbre, d’autant que « il a froid » sonne étrangement en plein soleil.\n\n'
  + 'Enfin, le dernier vers produit une rupture brutale. Après le rejet de « Tranquille », une phrase brève, sans ornement, révèle « deux trous rouges ». Seule couleur de sang dans un poème de verts et de bleus, ce rouge change le sommeil en mort, et le lecteur comprend trop tard ce que les indices annonçaient. La sobriété de la chute, qui ne nomme ni la mort ni la balle, rend l’horreur plus forte qu’un cri.\n\n'
  + 'Ainsi, Rimbaud ne dénonce pas la guerre par un discours : il laisse le lecteur découvrir le cadavre au milieu des fleurs. Une lecture plus douce, celle d’une berceuse, reste possible, mais elle ne rend pas compte de la violence du dernier vers. Ce contraste entre la beauté du monde et la jeunesse sacrifiée rappelle l’ironie de Voltaire devant sa « boucherie héroïque ».';

const MODEL_ANSWER_EN = '“Le Dormeur du val”, a sonnet Arthur Rimbaud dated October 1870, in the middle of the war, seems at first to paint a soldier resting in nature. I suggest reading it as a trap set for the reader: the whole poem prepares a last line that turns it over.\n\n'
  + 'The setting, first, is a peaceful picture. The river “sings”, the sun “shines”, the valley “froths with rays”: these personifications and this metaphor make nature a living, almost joyful place. The colours, the “silver”, the “blue cress”, the “green bed”, set up a harmony that nothing seems to disturb.\n\n'
  + 'And yet clues are disturbing from the second quatrain on. The enjambed “Dort”, alone at the head of the line, throws sleep into relief; then the verb comes back twice, and this insistence ends up ringing false. The soldier is “pale”, he smiles like “a sick child”: the comparison slips a threat under the gentleness. The apostrophe “Nature, cradle him warmly” turns the landscape into a mother watching over a child; one can hear a lullaby in it, but also a funeral prayer, all the more since “he is cold” sounds strange in full sunlight.\n\n'
  + 'Finally, the last line produces a brutal break. After the enjambed “Tranquille”, a short, unadorned sentence reveals “two red holes”. The only colour of blood in a poem of greens and blues, this red turns sleep into death, and the reader understands too late what the clues announced. The restraint of the ending, which names neither death nor the bullet, makes the horror stronger than a scream.\n\n'
  + 'Thus Rimbaud does not denounce war through a speech: he lets the reader discover the corpse among the flowers. A gentler reading, that of a lullaby, remains possible, but it does not account for the violence of the last line. This contrast between the beauty of the world and sacrificed youth recalls Voltaire’s irony before his “heroic butchery”.';

/** THE GRADED TASK: a C1 commentary on Rimbaud’s sonnet. */
const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission', title: 'Écris ton commentaire', frSub: 'Mission écrite',
  brief: `Le cercle des Mardis du texte publie dans le bulletin de la bibliothèque des Tilleuls un commentaire par membre. Le tien porte sur « Le Dormeur du val » de Rimbaud. Propose une lecture du poème et prouve-la par ses figures et leurs effets. Voici le texte. ${DORMEUR_TEXT}`,
  briefEn: 'The Mardis du texte reading circle publishes one commentary per member in the library bulletin. Yours is on Rimbaud’s “Le Dormeur du val”. Propose a reading of the poem and prove it through its figures and their effects. The sonnet is printed here so you can write with it in front of you.',
  produce: 'Écris un commentaire de 250 à 400 mots : situe le poème, annonce ta lecture, organise deux ou trois mouvements, analyse au moins quatre figures ou choix de style de la leçon (dont un effet de rupture) en disant pour chacun son effet, cite peu mais juste, reconnais une autre lecture possible, et conclus.',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 400 },
  rubric: {
    criteria: [
      { key: 'lecture', label: 'Une lecture annoncée et défendue', maxPoints: 4, descriptors: [
        '4 : Une lecture précise est annoncée dès l’introduction, tenue jusqu’à la conclusion, et une autre lecture est reconnue avec une raison de garder la sienne.',
        '3 : Une lecture claire et tenue, mais aucune autre lecture n’est envisagée.',
        '2 : Une lecture vague (« le poème parle de la guerre »), ou qui se perd en route.',
        '1 : Pas de lecture : une paraphrase ou un résumé du poème.',
      ] },
      { key: 'effets', label: 'Des figures nommées avec leur effet', maxPoints: 4, descriptors: [
        '4 : Au moins quatre figures ou choix de style justement nommés, dont un effet de rupture, chacun suivi d’une phrase d’effet précise qui sert la lecture.',
        '3 : Quatre figures, mais un effet reste général ou un nom est faux.',
        '2 : Des figures nommées, mais la plupart sans effet, ou moins de quatre.',
        '1 : Une liste de noms, ou aucune figure.',
      ] },
      { key: 'preuves', label: 'Des citations courtes et justes', maxPoints: 3, descriptors: [
        '3 : Des citations brèves (un à cinq mots), exactes, intégrées à la phrase, chacune exploitée.',
        '2 : Des citations justes, mais trop longues ou parfois laissées sans commentaire.',
        '1 : Pas de citation, des citations fausses, ou des vers entiers recopiés.',
      ] },
      { key: 'structure', label: 'Un commentaire construit', maxPoints: 3, descriptors: [
        '3 : Une introduction qui situe et annonce, deux ou trois mouvements liés, une conclusion qui revient à la lecture et ouvre.',
        '2 : Les parties sont là, mais les liens ou l’ordre flottent.',
        '1 : Des remarques juxtaposées, sans fil.',
      ] },
      { key: 'precision', label: 'Un vocabulaire d’analyse précis', maxPoints: 3, descriptors: [
        '3 : Les termes d’analyse sont exacts et variés (rejet, comparaison, personnification, chute, cadence…), au présent de l’analyse, sans jargon inutile.',
        '2 : Un vocabulaire juste mais répétitif (« montre », « il y a »), ou un terme mal employé.',
        '1 : Peu de termes d’analyse, ou des termes souvent faux.',
      ] },
      { key: 'langue', label: 'Une langue maîtrisée', maxPoints: 3, descriptors: [
        '3 : Des phrases complexes maîtrisées, presque aucune erreur.',
        '2 : Quelques erreurs qui ne gênent pas la lecture.',
        '1 : Des erreurs fréquentes qui gênent la lecture.',
      ] },
    ],
  },
  scaffold: [
    'Ce sonnet, daté de…',
    'Je propose de lire ce poème comme…',
    'D’abord,',
    'Pourtant,',
    'Le rejet de…',
    'Enfin,',
    'On pourrait aussi y voir…',
    'Ainsi,',
  ],
  modelAnswer: MODEL_ANSWER,
  modelAnswerEn: MODEL_ANSWER_EN,
  watchFor: [
    { pattern: 'A list of figure names with no effect sentence (« il y a une personnification, une comparaison et un rejet »).', criterion: 'effets', feedback: 'Pour chaque figure, une phrase : ce qu’elle fait au sens, avec un mot du texte.', ref: 'a1-scene' },
    { pattern: 'No announced reading: the commentary paraphrases the sonnet line by line.', criterion: 'lecture', feedback: 'Annonce une lecture dès l’introduction (« Je propose de lire ce poème comme… ») et tiens-la jusqu’au bout.', ref: 'a12-plan' },
    { pattern: 'A single reading imposed as the only one, with no other reading acknowledged.', criterion: 'lecture', feedback: 'Reconnais une autre lecture possible, puis dis pourquoi tu gardes la tienne.', ref: 'a2-lecture' },
    { pattern: 'The ending treated as a plain statement of death, with no effect named (no rupture, no reader caught out).', criterion: 'effets', feedback: 'Dis ce que la chute casse : le lecteur découvre trop tard ce que les indices annonçaient.', ref: 'a11-lecture' },
    { pattern: 'Enjambments (« Dort », « Tranquille ») missed, or named without saying which word they isolate.', criterion: 'effets', feedback: 'Dis quel mot le rejet isole, et ce que ce relief fait sentir.', ref: 'a11-trier' },
    { pattern: 'Personification and hypallage, or metaphor and metonymy, confused.', criterion: 'precision', feedback: 'La rivière qui « chante » agit : personnification. Vérifie si une chose agit, reçoit le trait d’un voisin, ou est nommée par un lien réel.', ref: 'a7-trier' },
    { pattern: 'A sound effect asserted on two letters or with no link to the meaning.', criterion: 'effets', feedback: 'Un son ne veut rien dire seul : pars des mots, puis montre comment les sons les renforcent.', ref: 'a9-trier' },
    { pattern: 'Whole lines copied as quotations, or quotations left without comment.', criterion: 'preuves', feedback: 'Cite un à cinq mots, intégrés à ta phrase, et dis ce qu’ils font.', ref: 'a12-scenario' },
    { pattern: 'A misquotation (a word changed, « petit aval » or another variant presented as the text).', criterion: 'preuves', feedback: 'Recopie les mots exactement comme dans le texte donné.', ref: 'a12-lecture' },
    { pattern: 'The colours and the sun read as decoration, with no link to the twist.', criterion: 'lecture', feedback: 'Relie le décor lumineux à la chute : la beauté rend la mort plus choquante.', ref: 'a3-erreurs' },
    { pattern: 'Vague analysis verbs repeated (« montre », « il y a ») and the past tense for the analysis.', criterion: 'precision', feedback: 'Varie les verbes (souligne, installe, retourne, isole) et garde le présent de l’analyse.', ref: 'a12-plan' },
    { pattern: 'No conclusion, or a conclusion that only summarises without returning to the reading.', criterion: 'structure', feedback: 'Reviens à ta lecture, puis ouvre sur un autre texte ou une autre question.', ref: 'a12-scenario' },
  ],
  graderNotes: [
    'Word count: 250 to 400, quotations included, with 10% tolerance (225 to 440) before the criteria lose points for length. A title does not count.',
    'ANY defensible reading earns full marks under « lecture » if the words of the poem support it (trap, funeral lullaby, denunciation of war, nature as indifferent or as mother, the reader’s complicity). Never mark a reading wrong because it differs from the model answer. A reading the text contradicts (« the soldier is sleeping and wakes up ») caps « lecture » at 1.',
    'Figures that count toward the four (any, if named correctly and given an effect): personification (la rivière chante, le soleil luit), metaphor (mousse de rayons, lit vert, la lumière pleut), comparison (comme un enfant malade), apostrophe (Nature, berce-le), antithesis or contrast (couleurs / pâleur, soleil / froid), repetition of « dort », enjambment (rejet of D’argent, Luit, Dort, Sourirait, Tranquille), the short final sentence as rupture or chute, colour symbolism, sound effects tied to meaning, understatement in the ending. The effect of rupture required for 4 may be the final line, an enjambment, or the short sentence.',
    'Names: accept « rejet » and « enjambement » loosely (the learner need not distinguish rejet, contre-rejet and enjambement); accept « oxymore » or « antithèse » for a strong contrast if the effect is right; « la lumière pleut » may be called a metaphor or a synesthesia. Do not penalise a figure taught in lesson 30 in B2 (comparaison, métaphore, personnification) as « not from this lesson ».',
    'Facts: the sonnet is dated October 1870 (Franco-Prussian war). Do not require the war to be named; do not reward invented biography. « Petit aval » is a misprint of the 1891 edition: the brief prints « petit val ».',
    'Quotations: short and exact. A misquotation of one word loses at most one point under « preuves », once.',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['commentaire', 'effet'],
};

const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core', title: 'Dis tes phrases d’effet à voix haute', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['effet'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-effet',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la méthode', v: 'repère, nomme, dis l’effet', say: src(E(1205)).fr,
      detail: { title: 'Trois gestes', body: 'La figure, un ou deux mots cités, ce qu’ils produisent. EN: figure, quote, effect.', say: src(E(1208)).fr } },
    { k: 'dire moins, dire le contraire', v: 'litote, antiphrase, prétérition', say: src(E(1213)).fr,
      detail: { title: 'Ce que les mots retiennent', body: 'La litote fait entendre plus ; l’antiphrase dit le contraire ; la prétérition montre ce qu’elle feint de taire. EN: saying less, the opposite, or what is hidden.', say: src(E(1226)).fr } },
    { k: 'monter, croiser', v: 'gradation, chiasme', say: src(E(1237)).fr,
      detail: { title: 'L’ordre des mots', body: 'La gradation se lit par la fin ; le chiasme croise A B, B A. EN: read from the end; cross the terms.', say: src(E(1248)).fr } },
    { k: 'atteler, déplacer, glisser', v: 'zeugme, hypallage, métonymie', say: src(E(1260)).fr,
      detail: { title: 'Le mot à côté', body: 'Un mot porte deux termes ; un trait change de voisin ; un mot nomme par un lien réel. EN: yoke, shift, slide.', say: src(E(1283)).fr } },
    { k: 'entendre, compter', v: 'sons, rythme, cadence', say: src(E(1294)).fr,
      detail: { title: 'Les sons et le rythme', body: 'Un son renforce le sens ; une cadence se prouve par un compte. EN: sounds serve meaning; count the cadence.', say: src(E(1314)).fr } },
    { k: 'casser', v: 'anacoluthe, asyndète, rejet', say: src(E(1317)).fr,
      detail: { title: 'Les ruptures', body: 'Voulue, une rupture porte le sens : dis ce qu’elle casse. EN: say what the break breaks.', say: src(E(1322)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['effet', 'lecture'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu ne t’arrêtes plus au nom d’une figure : tu dis ce qu’elle fait au sens, avec un mot du texte pour preuve. Tu lis ce que retient une litote, ce que retourne une antiphrase, où arrive une gradation, ce que croise un chiasme, ce qu’attelle un zeugme, ce que déplace une hypallage, ce que nomme une métonymie ; tu repères les sons à l’écrit, tu comptes un rythme, tu dis ce que casse une rupture. Le piège qui reste est double : revenir à la liste de noms, ou prêter à une figure un effet que les mots ne soutiennent pas. Avant ton prochain commentaire, relis chaque phrase où tu nommes une figure et demande-toi : « Et alors ? » EN: Before your next commentary, reread every sentence that names a figure and ask: “So what?”',
  stats: [
    { k: 'Ce que les mots retiennent', v: 'litote, antiphrase, prétérition' },
    { k: 'L’ordre et la construction', v: 'gradation, chiasme, zeugme, hypallage' },
    { k: 'Le sens, les sons, le rythme', v: 'métonymie, sons, cadence, ruptures' },
    { k: 'La règle', v: 'nommer, c’est la question ; l’effet, la réponse' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 1 to 11. Each round
 *  targets a distinct errorTrigger. Mostly judgement (which sentence says
 *  the effect, which figure is this); `typeIn` asks for one word;
 *  `errorSpot` swaps one word of a judgement. `fold()` strips accents,
 *  punctuation and spacing, so nothing turns on them. The authored slots
 *  are then spread by `spreadSlots()`: no `why` names a position. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Une partie de la phrase est fausse. Écris la phrase juste. EN: Part of the sentence is wrong; write the correct sentence.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_Q): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'L’examen', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-effet', label: 'Le nom et l’effet', targets: ['nom-sans-effet'],
      questions: [
        mc('Quelle phrase irait dans un commentaire ?', ['En disant moins, Chimène avoue un amour qu’elle n’a pas le droit de dire.', 'Dans ce vers, il y a une litote.', 'Corneille emploie beaucoup de figures.'], 0, 'Elle nomme implicitement la figure, cite le sens et dit l’effet. EN: it says the effect.', 'a1-scene'),
        mc('Un effet se prouve par…', ['les mots du texte', 'la célébrité de l’auteur', 'le nombre de figures'], 0, 'Un ou deux mots cités. EN: quoted words.', 'a1-lecture'),
        mc('Un autre lecteur propose une lecture différente. Tu…', ['acceptes qu’elle se défende si les mots la soutiennent', 'la déclares fausse', 'abandonnes la tienne'], 0, 'Une lecture se défend ; une autre peut se défendre aussi. EN: several readings can hold.', 'a1-lecture'),
        mc('La règle de la leçon dit que nommer la figure, c’est…', ['la question', 'la réponse', 'tout le travail'], 0, `${REFRAME} EN: ${REFRAME_EN}`, 'a1-check'),
        tI('Complète la règle. Un mot.', 'Nommer la figure, c’est la question ; dire son …, c’est la réponse.', 'effet', 'Ce que la figure fait au sens. EN: its effect.', 'a1-check'),
        tI('Complète la méthode. Un mot.', 'Repère, …, puis dis l’effet en une phrase.', 'nomme', 'Les trois gestes. EN: spot, name, effect.', 'a1-usages'),
        eS('Une même figure produit toujours un seul effet.', 'Une même figure peut produire plusieurs effets.', 'Le chiasme fait une maxime chez Valère et rire chez Harpagon. EN: one figure, several effects.', 'a1-rappel', ['Une même figure peut avoir plusieurs effets.', 'Une même figure produit parfois plusieurs effets.']),
        lC('Écoute. Cette phrase dit-elle un effet ?', src(E(1200)).fr, ['Non : elle nomme seulement la figure.', 'Oui : elle dit ce que la litote produit.'], 0, 'Le nom seul ne dit rien de l’effet. EN: the name alone.', 'a1-scene'),
      ],
    },
    {
      id: 'r2-litote', label: 'La litote', targets: ['litote-contresens'],
      questions: [
        mc('« Va, je ne te hais point » fait entendre…', ['l’amour de Chimène', 'son indifférence', 'sa haine'], 0, 'Elle nie la haine pour ne pas nommer l’amour. EN: she implies love.', 'a2-lecture'),
        mc('« Il nous a quittés cette nuit » est…', ['un euphémisme', 'une litote', 'une antiphrase'], 0, 'Il adoucit la mort. EN: it softens death.', 'a2-trier'),
        mc('« Il n’était pas sans savoir ce qu’il risquait » : il…', ['le savait très bien', 'l’ignorait'], 0, 'Deux négations qui affirment. EN: he knew.', 'a2-trier'),
        mc('Pour qu’il y ait litote, il faut que…', ['le sens soit plus fort que les mots', 'la phrase contienne une négation', 'le texte soit en vers'], 0, 'Une négation ne suffit pas. EN: meaning stronger than words.', 'a2-trier'),
        tI('Complète. Un mot.', 'La litote affirme davantage en niant le … .', 'contraire', 'Nier la haine pour dire l’amour. EN: the opposite.', 'a2-litote'),
        tI('Complète. Un mot.', 'La litote suppose un lecteur qui comprend à …-mot.', 'demi', 'À demi-mot : sans que tout soit dit. EN: from a hint.', 'a2-piege'),
        eS('L’euphémisme renforce ; la litote adoucit.', 'L’euphémisme adoucit ; la litote fait entendre plus.', 'Les deux rôles sont inversés. EN: roles swapped.', 'a2-litote', ['L’euphémisme adoucit ; la litote renforce.', 'L’euphémisme adoucit, la litote renforce.']),
        lC('Écoute. Quelle figure ?', src(E(1214)).fr, ['une litote', 'un euphémisme', 'un chiasme'], 0, '« Pas petite » veut dire très grande. EN: litotes.', 'a2-trier'),
      ],
    },
    {
      id: 'r3-antiphrase', label: 'L’antiphrase', targets: ['antiphrase-prise-au-mot'],
      questions: [
        mc('Chez Voltaire, « si beau, si leste, si brillant » décrit une bataille. C’est…', ['une antiphrase : l’éloge sert à condamner', 'un éloge sincère de l’armée'], 0, 'Les faits qui suivent démentent l’éloge. EN: the facts undo the praise.', 'a3-lecture'),
        mc('« Cette boucherie héroïque » est…', ['un oxymore', 'une antiphrase', 'une litote'], 0, 'Deux contraires dans un seul groupe. EN: an oxymoron.', 'a3-erreurs'),
        mc('L’ironie, par rapport à l’antiphrase, est…', ['une attitude d’ensemble', 'un synonyme exact', 'une figure de son'], 0, 'L’antiphrase est l’un de ses moyens. EN: an attitude.', 'a3-trier'),
        mc('« Je ne peindrai pas la joie des vainqueurs : vous l’imaginez sans moi. » L’effet :', ['le lecteur imagine la scène lui-même', 'la scène reste vraiment cachée'], 0, 'La prétérition attire le regard sur ce qu’elle feint de cacher. EN: the reader pictures it.', 'a3-trier'),
        tI('Comment s’appelle un mot employé pour dire son contraire ? Un mot.', 'Appeler « héros » des incendiaires, c’est une … .', 'antiphrase', 'Le mot dit l’éloge, le contexte l’horreur. EN: antiphrasis.', 'a3-exemples', ['une antiphrase']),
        tI('Complète. Un mot.', 'Le décalage entre les mots et les faits fait naître l’… .', 'indignation', 'Voltaire la laisse au lecteur. EN: indignation.', 'a3-commentaire'),
        eS('Voltaire dit son indignation ouvertement.', 'Voltaire fait naître l’indignation chez le lecteur.', 'Il ne la dit pas : il la laisse au lecteur. EN: he leaves it to the reader.', 'a3-erreurs', ['Voltaire laisse naître l’indignation chez le lecteur.', 'Voltaire fait naître son indignation chez le lecteur.']),
        lC('Écoute. Que fait Voltaire ?', src(E(1225)).fr, ['Il loue pour condamner.', 'Il loue sincèrement.'], 0, 'L’éloge est une arme. EN: praise as a weapon.', 'a3-lecture'),
      ],
    },
    {
      id: 'r4-gradation', label: 'La gradation', targets: ['gradation-sans-arrivee'],
      questions: [
        mc('Dans « va, cours, vole, et nous venge », le poids est sur…', ['venge', 'va', 'cours'], 0, 'Le dernier terme porte la phrase. EN: the last term.', 'a4-gradation'),
        mc('« Il a perdu sa maison, puis sa chambre, puis son nom » : la gradation est…', ['descendante', 'ascendante'], 0, 'Chaque terme est plus petit. EN: it falls.', 'a4-trier'),
        mc('« Pain, pommes, fromage » est…', ['une énumération sans ordre', 'une gradation'], 0, 'Aucun ordre d’intensité. EN: no order.', 'a4-trier'),
        mc('Quelle phrase dit l’effet de la gradation de Corneille ?', ['Don Diègue presse son fils : l’ordre devient urgence.', 'Il y a quatre verbes à l’impératif.', 'C’est une gradation célèbre.'], 0, 'Elle dit ce que la montée fait sentir. EN: what the climb makes felt.', 'a4-commentaire'),
        tI('Complète. Un mot.', 'Une gradation se lit par son point d’… .', 'arrivée', 'Le dernier terme. EN: its end point.', 'a4-gradation', ['arrivee']),
        tI('Complète. Un mot.', 'Une gradation descendante fait sentir une … .', 'chute', 'Chaque terme est plus petit. EN: a fall.', 'a4-gradation'),
        eS('C’est le nombre des termes, et non leur ordre, qui fait la gradation.', 'C’est l’ordre des termes, et non leur nombre, qui fait la gradation.', 'Trois termes sans ordre ne font pas une gradation. EN: order, not number.', 'a4-trier'),
        lC('Écoute. Quelle figure ?', src(E(1235)).fr, ['une gradation', 'un chiasme', 'une litote'], 0, 'Des verbes de plus en plus rapides. EN: rising verbs.', 'a4-lecture'),
      ],
    },
    {
      id: 'r5-chiasme', label: 'Le chiasme', targets: ['chiasme-confondu'],
      questions: [
        mc('« Il faut manger pour vivre, et non pas vivre pour manger » est…', ['un chiasme', 'une antithèse simple', 'un oxymore'], 0, 'Les mêmes mots dans l’ordre inverse. EN: crossed terms.', 'a5-lecture'),
        mc('« Ici la fête, là-bas la faim » est…', ['une antithèse', 'un chiasme'], 0, 'Elle oppose sans croiser. EN: no crossing.', 'a5-trier'),
        mc('« Cette obscure clarté qui tombe des étoiles » contient…', ['un oxymore', 'un chiasme', 'une litote'], 0, 'Deux contraires dans un seul groupe. EN: an oxymoron.', 'a5-chiasme'),
        mc('D’où vient le comique de la réplique d’Harpagon ?', ['de l’ordre inversé du chiasme', 'du mot « souper »', 'de sa colère'], 0, 'Il dit la phrase du glouton. EN: the reversed order.', 'a5-erreurs'),
        tI('Comment s’appelle la figure qui croise les termes, A B puis B A ? Un mot.', 'A B, puis B A : c’est un … .', 'chiasme', 'Le croisement. EN: chiasmus.', 'a5-chiasme', ['un chiasme']),
        tI('Complète. Un mot.', 'Le chiasme donne à la phrase l’allure d’une … .', 'maxime', 'Une vérité générale, bien frappée. EN: a maxim.', 'a5-commentaire'),
        eS('L’antithèse oppose en croisant ; le chiasme oppose sans croiser.', 'L’antithèse oppose sans croiser ; le chiasme oppose en croisant.', 'Les deux rôles sont inversés. EN: roles swapped.', 'a5-chiasme', ['L’antithèse oppose ; le chiasme oppose en croisant.']),
        lC('Écoute. Quelle figure ?', src(E(1251)).fr, ['un chiasme', 'une gradation', 'une hypallage'], 0, 'Jour, nuit, puis nuit, jour. EN: crossed.', 'a5-trier'),
      ],
    },
    {
      id: 'r6-zeugme', label: 'Le zeugme', targets: ['zeugme-faute'],
      questions: [
        mc('Dans « vêtu de probité candide et de lin blanc », quel mot porte deux termes ?', ['vêtu', 'candide', 'blanc'], 0, 'Une vertu et un tissu. EN: clothed.', 'a6-trier'),
        mc('« Il a perdu ses clés et son sang-froid » est…', ['un zeugme', 'une litote', 'une métonymie'], 0, 'Un verbe, deux emplois. EN: zeugma.', 'a6-trier'),
        mc('Quand Larousse et le TLFi ne définissent pas le zeugme de la même façon, tu…', ['dis qui dit quoi, puis l’effet', 'choisis au hasard', 'évites le mot'], 0, 'Selon l’un, selon l’autre ; puis l’effet. EN: who says what.', 'a6-sources'),
        mc('L’effet du vers de Hugo :', ['le lin blanc rend la vertu visible', 'Hugo décrit seulement un vêtement', 'Hugo fait une faute'], 0, 'L’abstrait devient concret. On peut aussi lire la pureté d’un patriarche. EN: the virtue becomes visible.', 'a6-commentaire'),
        tI('Complète. Un mot.', 'Le zeugme surprend, puis fait … ou réfléchir.', 'sourire', 'L’esprit relie les deux termes. EN: smile.', 'a6-sources'),
        tI('Quel mot est sous-entendu ? Un mot.', 'Le ciel était gris et la mer immobile : le mot sous-entendu est … .', 'était', 'Le verbe sert deux fois : le sens grammatical du zeugme. EN: was.', 'a6-trier'),
        eS('Hugo a fait une erreur de construction.', 'Hugo a fait un zeugme voulu.', 'L’attelage est voulu : c’est une figure. EN: deliberate.', 'a6-piege', ['Hugo a fait un zeugme.', 'Hugo a écrit un zeugme voulu.', 'Hugo a fait un zeugme volontaire.']),
        lC('Écoute. Quelle figure ?', src(E(1262)).fr, ['un zeugme', 'un chiasme', 'une anacoluthe'], 0, 'Le train et une décision sur le même verbe. EN: zeugma.', 'a6-trier'),
      ],
    },
    {
      id: 'r7-hypallage', label: 'L’hypallage', targets: ['hypallage-personnification'],
      questions: [
        mc('Dans « son comptoir avide », qui est avide ?', ['le marchand', 'le comptoir', 'le poète'], 0, 'Le trait est passé de l’homme à l’objet. EN: the merchant.', 'a7-lecture'),
        mc('« Il fumait une pipe pensive » est…', ['une hypallage', 'une personnification', 'une gradation'], 0, 'La pipe reçoit le trait du fumeur. EN: hypallage.', 'a7-trier'),
        mc('« Le vent courait en renversant les chaises » est…', ['une personnification', 'une hypallage'], 0, 'Le vent agit. EN: it acts.', 'a7-trier'),
        mc('Quelle phrase dit l’effet de l’hypallage de Hugo ?', ['L’avidité déborde de l’homme sur les choses qu’il touche.', 'L’adjectif est mal placé.', 'Le comptoir est grand.'], 0, 'Elle dit ce que le déplacement produit. EN: the greed spills over.', 'a7-commentaire'),
        tI('Comment s’appelle cette figure ? Un mot.', 'Prêter à un mot le trait d’un autre mot de la phrase, c’est une … .', 'hypallage', 'Le comptoir avide. EN: hypallage.', 'a7-hypallage', ['une hypallage']),
        tI('Complète. Un mot.', 'L’hypallage déplace le plus souvent un … .', 'adjectif', 'Selon l’Académie. EN: an adjective.', 'a7-hypallage', ['adjectif qualificatif']),
        eS('Fontanier voyait des hypallages partout.', 'Fontanier doutait de bien des hypallages.', 'Il expliquait autrement beaucoup d’exemples de Dumarsais. EN: he doubted many.', 'a7-trier', ['Fontanier doutait de beaucoup d’hypallages.', 'Fontanier doutait de nombreuses hypallages.']),
        lC('Écoute. Quelle figure ?', src(E(1274)).fr, ['une hypallage', 'un zeugme', 'une litote'], 0, 'La fatigue de la femme passe à la rue. EN: hypallage.', 'a7-trier'),
      ],
    },
    {
      id: 'r8-metonymie', label: 'Métonymie et synecdoque', targets: ['metonymie-metaphore'],
      questions: [
        mc('« Toute la salle s’est levée » est…', ['une métonymie', 'une métaphore', 'une litote'], 0, 'Le lieu pour les gens. EN: metonymy.', 'a8-liens'),
        mc('« Une voile à l’horizon » pour un navire est…', ['une synecdoque', 'une métaphore', 'une hypallage'], 0, 'La partie pour le tout. EN: synecdoche.', 'a8-trier'),
        mc('La métonymie repose sur…', ['un lien réel', 'une ressemblance'], 0, 'La ressemblance, c’est la métaphore. EN: a real link.', 'a8-trier'),
        mc('« Des bouches à nourrir » met en avant…', ['le besoin', 'la beauté', 'la parole'], 0, 'Réduire une personne à sa faim. EN: the need.', 'a8-commentaire'),
        tI('Comment s’appelle la figure qui prend la partie pour le tout ? Un mot.', 'Une voile pour un navire : c’est une … .', 'synecdoque', 'Une variété de métonymie. EN: synecdoche.', 'a8-liens', ['une synecdoque']),
        tI('Complète. Un mot.', 'Lire « tout Hugo », c’est lire ses … .', 'livres', 'L’auteur pour l’œuvre. EN: books.', 'a8-liens', ['oeuvres', 'œuvres']),
        eS('La métaphore glisse vers un voisin ; la métonymie saute vers une image.', 'La métaphore saute vers une image ; la métonymie glisse vers un voisin.', 'Les deux rôles sont inversés. EN: roles swapped.', 'a8-trier'),
        lC('Écoute. Quelle figure ?', src(E(1281)).fr, ['une métonymie', 'une synecdoque de la partie', 'une antiphrase'], 0, 'L’auteur pour ses livres. EN: metonymy.', 'a8-liens'),
      ],
    },
    {
      id: 'r9-sons', label: 'Les sons', targets: ['son-sans-sens'],
      questions: [
        mc('« Pour qui sont ces serpents qui sifflent sur vos têtes ? » repose sur…', ['une allitération en [s]', 'une assonance en [a]', 'une litote'], 0, 'Cinq [s] imitent le sifflement. EN: alliteration.', 'a9-sons'),
        mc('L’assonance répète…', ['une voyelle', 'une consonne', 'un mot entier'], 0, 'L’allitération répète une consonne. EN: a vowel.', 'a9-sons'),
        mc('« Les sanglots longs » : deux mots en « l ». C’est…', ['insuffisant pour parler d’allitération', 'une allitération certaine'], 0, 'Deux initiales identiques ne suffisent pas. EN: not enough.', 'a9-trier'),
        mc('Quelle phrase d’effet se défend ?', ['Le son [s], cinq fois répété, fait entendre le sifflement des serpents.', 'Le [l] exprime la tristesse.', 'Il y a beaucoup de « s ».'], 0, 'Elle relie le son au sens du vers. EN: sound tied to meaning.', 'a9-commentaire'),
        tI('Comment s’appelle la répétition d’une consonne ? Un mot.', 'Vent, violent, vrillait, volets : c’est une … .', 'allitération', 'Le [v] répété. EN: alliteration.', 'a9-trier', ['une allitération', 'alliteration']),
        tI('Complète. Un mot.', 'Un son ne veut rien dire seul : il renforce ce que disent les … .', 'mots', 'Le son sert le sens. EN: words.', 'a9-sons'),
        eS('Pour repérer une assonance, écoute seulement l’enregistrement.', 'Pour repérer une assonance, regarde le texte, puis dis-le à voix haute.', 'La voix synthétique aplatit les sons. EN: eye first, then ear.', 'a9-sons', ['Pour repérer une assonance, regarde le texte puis lis-le à voix haute.', 'Pour repérer une assonance, lis le texte, puis dis-le à voix haute.']),
        lC('Écoute. Ce qui revient, c’est…', src(E(1299)).fr, ['le son [u]', 'le son [s]'], 0, 'Tout, doux, lourd, autour. EN: [u].', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-rythme', label: 'Le rythme', targets: ['rythme-sans-compte'],
      questions: [
        mc('Chez Pascal, six, sept, puis deux syllabes : la cadence est…', ['mineure', 'majeure'], 0, 'Le dernier membre est le plus court. EN: minor.', 'a10-lecture'),
        mc('« Il faut lire, relire, et lire encore » a un rythme…', ['ternaire', 'binaire'], 0, 'Trois éléments. EN: ternary.', 'a10-trier'),
        mc('La cadence majeure finit sur…', ['le membre le plus long', 'le membre le plus court'], 0, 'Elle s’élargit. EN: the longest.', 'a10-rythmes'),
        mc('Quelle phrase d’effet se défend sur Pascal ?', ['Après deux membres amples, « m’effraye » tombe en deux syllabes : l’homme paraît minuscule.', 'La phrase a un beau rythme.', 'Pascal écrit bien.'], 0, 'Elle compte, cite et dit l’effet. EN: count, quote, effect.', 'a10-commentaire'),
        tI('Complète. Un mot.', 'Avant de parler de cadence, compte les … .', 'syllabes', 'Une cadence se prouve. EN: syllables.', 'a10-rythmes'),
        tI('Complète. Un mot.', 'Le rythme n’est pas un … : il fait sentir le sens.', 'ornement', 'Le rythme porte le sens. EN: ornament.', 'a10-trier'),
        eS('La cadence mineure finit sur le membre le plus long.', 'La cadence mineure finit sur le membre le plus court.', 'La majeure finit sur le plus long. EN: shortest.', 'a10-piege'),
        lC('Écoute. Combien d’éléments ?', src(E(1309)).fr, ['trois', 'deux', 'quatre'], 0, 'Lire, relire, lire encore. EN: three.', 'a10-trier'),
      ],
    },
    {
      id: 'r11-rupture', label: 'Les ruptures', targets: ['rupture-faute'],
      questions: [
        mc('« Le nez de Cléopatre, s’il eût été plus court, toute la face de la terre auroit changé » est…', ['une anacoluthe', 'une asyndète', 'une gradation'], 0, 'La construction change en route. EN: anacoluthon.', 'a11-trier'),
        mc('« Il entre, il regarde, il se tait » est…', ['une asyndète', 'une anacoluthe', 'un zeugme'], 0, 'Aucun mot de liaison. EN: asyndeton.', 'a11-trier'),
        mc('Le rejet…', ['met un mot en relief en tête du vers suivant', 'répète une consonne', 'croise deux mots'], 0, 'Le mot reste seul, en pleine lumière. EN: relief.', 'a11-exemples'),
        mc('L’effet de l’anacoluthe de Pascal :', ['elle fait sentir la disproportion entre la cause et l’effet', 'elle prouve que Pascal écrivait mal'], 0, 'Un détail, et le monde qui bascule. EN: disproportion.', 'a11-commentaire'),
        tI('Comment s’appelle une construction brisée ? Un mot.', 'Une phrase qui change de construction en route contient une … .', 'anacoluthe', 'Pascal et le nez de Cléopatre. EN: anacoluthon.', 'a11-exemples', ['une anacoluthe']),
        tI('Complète. Un mot.', 'Une phrase nominale arrête le … .', 'mouvement', 'Sans verbe, l’instant se fige. EN: movement.', 'a11-erreurs'),
        eS('Une phrase sans verbe est toujours une faute.', 'Une phrase sans verbe peut être un effet voulu.', 'La phrase nominale arrête le mouvement. EN: it can be deliberate.', 'a11-erreurs', ['Une phrase sans verbe peut être voulue.', 'Une phrase sans verbe est parfois un effet voulu.', 'Une phrase sans verbe peut être un effet.']),
        lC('Écoute. Que fait cette phrase ?', src(E(1321)).fr, ['Elle dit l’effet de l’asyndète.', 'Elle définit le rejet.'], 0, 'Le lecteur fait les liens. EN: asyndeton’s effect.', 'a11-exemples'),
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
    { front: 'saying less to mean more', back: 'une litote', say: src(E(1213)).fr },
    { front: 'a word meaning its opposite', back: 'une antiphrase', say: src(E(1226)).fr },
    { front: 'terms rising in intensity', back: 'une gradation', say: src(E(1237)).fr },
    { front: 'A B, then B A', back: 'un chiasme', say: src(E(1248)).fr },
    { front: 'two unlike terms on one word', back: 'un zeugme', say: src(E(1260)).fr },
    { front: 'a trait lent to a neighbouring word', back: 'une hypallage', say: src(E(1271)).fr },
    { front: 'the part for the whole', back: 'une synecdoque', say: src(E(1284)).fr },
    { front: 'a repeated consonant', back: 'une allitération', say: src(E(1294)).fr },
    { front: 'a construction broken on purpose', back: 'une anacoluthe', say: src(E(1317)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Les figures et leur effet, en résumé',
  body: `${REFRAME} Tu sais maintenant repérer dix figures et choix de style de plus, les nommer, et surtout écrire la phrase qui dit ce qu’ils font au sens, avec les mots du texte pour preuve, en acceptant qu’une autre lecture se défende. Tu as écrit le commentaire d’un sonnet. La suite, ${LIGNES_REF} : lire entre les lignes, ce qu’un texte sous-entend sans le dire. EN: Next: reading between the lines, what a text implies without saying it.`,
  points: [
    'Litote, antiphrase, prétérition : ce que les mots retiennent ou retournent.',
    'Gradation, chiasme, zeugme, hypallage : ce que fait l’ordre et la construction.',
    'Métonymie, sons, rythme : le voisin, l’oreille, le compte.',
    'Une rupture voulue porte le sens : dis ce qu’elle casse.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['effet', 'lecture'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ton commentaire',
    opener: {
      line: 'Un soldat qui dort au soleil, et un dernier vers qui change tout : à toi de proposer une lecture et de la prouver. EN: A soldier asleep in the sun, and a last line that changes everything: your turn to propose a reading and prove it.',
      imageRef: 'lessons/figures-effet/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit un commentaire où chaque figure reçoit son effet, et passé l’examen : quatre-vingt-huit questions, onze rounds. EN: You wrote a commentary where every figure gets its effect, and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a12-lecture', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-antiphrase', 'a12-quiz/r6-zeugme', 'a12-quiz/r9-sons'],
  },
  sections: [
    A12_LECTURE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-effet', title: 'Du nom à l’effet', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : ce sont les gestes d’un bon commentaire. EN: say each line aloud.', items: [E(1202), E(1205), E(1206), E(1208), E(1209), E(1201)], audio: AUDIO },
  { id: 'd-litote', title: 'Litote ou euphémisme', format: 'sort' as const, coach: 'Deux piles : la phrase fait-elle entendre plus, ou adoucit-elle ? EN: more meant, or softened?', buckets: ['une litote', 'un euphémisme'], items: [E(1211), E(1217), E(1214), E(1215), E(1219), E(1218)], audio: AUDIO },
  { id: 'd-antiphrase', title: 'Le mot et les faits', format: 'mcq' as const, coach: 'Cherche le fait qui dément le mot. EN: find the fact that contradicts the word.', q: 'Voltaire appelle « héros » des soldats qui brûlent un village. Le mot…', opts: ['dit le contraire de ce que montrent les faits', 'dit ce que pense Voltaire'], correct: 0, why: 'C’est une antiphrase. EN: antiphrasis.', items: [E(1223), E(1225), E(1226), E(1227), E(1228), E(1230)], audio: AUDIO },
  { id: 'd-gradation', title: 'Où arrive la montée ?', format: 'mcq' as const, coach: 'Lis la gradation par son dernier terme. EN: read it from the end.', q: '« Va, cours, vole, et nous venge. » Le poids est sur…', opts: ['venge', 'va'], correct: 0, why: 'Toute la vitesse s’y jette. EN: the last word.', items: [E(1235), E(1236), E(1237), E(1238), E(1241), E(1245)], audio: AUDIO },
  { id: 'd-chiasme', title: 'Croiser ou opposer', format: 'mcq' as const, coach: 'Cherche les mots qui reviennent dans l’ordre inverse. EN: look for reversed repetition.', q: '« Le jour, elle rêvait la nuit ; la nuit, elle rêvait le jour. » C’est…', opts: ['un chiasme', 'une antithèse sans croisement'], correct: 0, why: 'Jour, nuit, puis nuit, jour. EN: chiasmus.', items: [E(1248), E(1249), E(1250), E(1251), E(1254), E(1257)], audio: AUDIO },
  { id: 'd-zeugme', title: 'Un mot, deux termes', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute, et cherche le mot attelé. EN: find the yoked word.', items: [E(1259), E(1260), E(1261), E(1262), E(1263), E(1264)], audio: AUDIO },
  { id: 'd-hypallage', title: 'À qui revient le trait ?', format: 'mcq' as const, coach: 'Demande-toi qui a vraiment le trait. EN: who really has the trait?', q: '« Il fumait une pipe pensive. » Qui est pensif ?', opts: ['l’homme', 'la pipe'], correct: 0, why: 'Le trait du fumeur passe à la pipe. EN: the smoker.', items: [E(1270), E(1271), E(1272), E(1273), E(1275), E(1279)], audio: AUDIO },
  { id: 'd-metonymie', title: 'Voisin ou ressemblance', format: 'mcq' as const, coach: 'Le lien est-il réel, ou une ressemblance ? EN: real link or likeness?', q: '« Toute la salle s’est levée. » Le lien est…', opts: ['réel : le lieu pour les gens', 'une ressemblance'], correct: 0, why: 'C’est une métonymie. EN: metonymy.', items: [E(1280), E(1282), E(1283), E(1284), E(1287), E(1288)], audio: AUDIO },
  { id: 'd-sons', title: 'Le son et le sens', format: 'mcq' as const, coach: 'Un son ne compte que s’il sert les mots. EN: a sound counts only if it serves the words.', q: 'Le [s] du vers de Racine fait entendre…', opts: ['le sifflement des serpents', 'la joie d’Oreste'], correct: 0, why: 'Le son renforce ce que dit le vers. EN: the hiss.', items: [E(1293), E(1294), E(1295), E(1296), E(1297), E(1302)], audio: AUDIO },
  { id: 'd-rythme', title: 'Compte, puis sens', format: 'mcq' as const, coach: 'Compte les syllabes des membres. EN: count the syllables.', q: 'Une phrase qui finit sur son membre le plus court a une cadence…', opts: ['mineure', 'majeure'], correct: 0, why: 'Elle tombe. EN: minor.', items: [E(1305), E(1306), E(1307), E(1308), E(1310), E(1314)], audio: AUDIO },
  { id: 'd-rupture', title: 'Ce que la rupture casse', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : une rupture voulue porte le sens. EN: say each line aloud.', items: [E(1317), E(1318), E(1319), E(1321), E(1322), E(1323)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'nom-sans-effet', description: 'Names a figure and stops, or lists figures, without a sentence on what each does to the meaning.', detectOn: ['a1-scene', 'a1-lecture', 'a1-check', 'a12-mission'], drill: 'd-effet', retest: 'd-effet' },
  { id: 'litote-contresens', description: 'Reads a litotes literally (Chimène as indifferent, « pas sans savoir » as ignorance), or confuses it with euphemism.', detectOn: ['a2-trier', 'a2-piege', 'a2-check', 'a12-mission'], drill: 'd-litote', retest: 'd-litote' },
  { id: 'antiphrase-prise-au-mot', description: 'Takes an antiphrasis as sincere praise, or confuses antiphrasis, irony and oxymoron.', detectOn: ['a3-trier', 'a3-erreurs', 'a3-check', 'a12-mission'], drill: 'd-antiphrase', retest: 'd-antiphrase' },
  { id: 'gradation-sans-arrivee', description: 'Calls any list a gradation, misses its direction, or comments on it without its point of arrival.', detectOn: ['a4-trier', 'a4-piege', 'a4-check', 'a12-mission'], drill: 'd-gradation', retest: 'd-gradation' },
  { id: 'chiasme-confondu', description: 'Confuses chiasmus with antithesis or oxymoron, or names the crossing without saying what it opposes.', detectOn: ['a5-trier', 'a5-erreurs', 'a5-check', 'a12-mission'], drill: 'd-chiasme', retest: 'd-chiasme' },
  { id: 'zeugme-faute', description: 'Reads a deliberate zeugma as a mistake, misses the yoked word, or settles a dictionary dispute instead of describing the effect.', detectOn: ['a6-trier', 'a6-piege', 'a6-check', 'a12-mission'], drill: 'd-zeugme', retest: 'd-zeugme' },
  { id: 'hypallage-personnification', description: 'Confuses hypallage with personification, or sees one in every unusual adjective.', detectOn: ['a7-trier', 'a7-erreurs', 'a7-check', 'a12-mission'], drill: 'd-hypallage', retest: 'd-hypallage' },
  { id: 'metonymie-metaphore', description: 'Confuses metonymy or synecdoche with metaphor, or names the link without saying what the word choice foregrounds.', detectOn: ['a8-trier', 'a8-piege', 'a8-check', 'a12-mission'], drill: 'd-metonymie', retest: 'd-metonymie' },
  { id: 'son-sans-sens', description: 'Asserts an alliteration on two letters, gives a sound a meaning of its own, or confuses alliteration and assonance.', detectOn: ['a9-trier', 'a9-ecoute', 'a9-check', 'a12-mission'], drill: 'd-sons', retest: 'd-sons' },
  { id: 'rythme-sans-compte', description: 'Comments on rhythm without counting, inverts major and minor cadence, or treats rhythm as ornament.', detectOn: ['a10-trier', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-rythme', retest: 'd-rythme' },
  { id: 'rupture-faute', description: 'Reads a deliberate break (anacoluthon, asyndeton, enjambment, verbless sentence) as a mistake, or names it without its effect.', detectOn: ['a11-trier', 'a11-erreurs', 'a11-check', 'a12-mission'], drill: 'd-rupture', retest: 'd-rupture' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here only; every sheet is reached by
 *  `sheetId` from at least one mission.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-effet', 'La phrase d’effet et le commentaire', ['les trois pièces d’une phrase d’effet', 'des verbes d’analyse', 'le plan du commentaire'], [
    teach('sheet-effet-teach', 'Nommer, citer, dire l’effet',
      `${REFRAME} Une phrase d’effet a trois pièces : la figure (nommée ou décrite), un ou deux mots du texte, et ce qu’ils produisent sur le sens ou sur le lecteur. Un effet est une interprétation : une autre lecture peut se défendre, à condition que les mots la soutiennent. EN: figure, quote, effect; other defensible readings are welcome.`),
    table('sheet-effet-pieces', 'Les trois pièces', ['Pièce', 'Exemple'], [
      ['la figure', 'la litote de Chimène'],
      ['les mots cités', '« je ne te hais point »'],
      ['l’effet', 'fait entendre un amour qu’elle n’a pas le droit de dire'],
    ]),
    table('sheet-effet-verbes', 'Des verbes d’analyse', ['Au lieu de', 'Essaie'], [
      ['montre', 'souligne, met en relief, fait sentir'],
      ['il y a', 'le poète emploie, la phrase repose sur'],
      ['c’est beau', 'cela installe, renforce, retourne'],
      ['l’auteur veut dire', 'le texte laisse entendre, suggère'],
    ]),
    table('sheet-effet-plan', 'Le plan du commentaire', ['Étape', 'Ce que tu écris'], [
      ['introduction', 'l’auteur, la date, ce qu’on croit voir ; ta lecture'],
      ['mouvement 1', 'une première série de figures, avec leurs effets'],
      ['mouvement 2', 'ce qui nuance ou retourne la première impression'],
      ['mouvement 3 (facultatif)', 'la chute ou la fin du texte'],
      ['conclusion', 'retour à ta lecture, une autre lecture reconnue, une ouverture'],
    ]),
  ]),
  sheet('sheet-dire', 'Dire moins, dire le contraire', ['litote et euphémisme', 'antiphrase et ironie', 'la prétérition dans un récit'], [
    teach('sheet-dire-teach', 'Ce que les mots retiennent ou retournent',
      `La litote dit moins pour faire entendre plus (selon Larousse, elle « affaiblit l’expression de la pensée pour laisser entendre plus qu’on ne dit »). L’euphémisme adoucit une réalité pénible. L’antiphrase emploie un mot dans le sens contraire ; l’ironie est l’attitude qu’elle sert. La prétérition, que ${PERSUADER_REF} jugeait dans un plaidoyer, attire dans un récit le regard sur ce qu’elle feint de taire. EN: saying less, softening, saying the opposite, pretending to hide.`),
    table('sheet-dire-table', 'Cinq figures voisines', ['Figure', 'Ce qu’elle fait', 'Exemple'], [
      ['la litote', 'fait entendre plus', 'Va, je ne te hais point. (Corneille)'],
      ['l’euphémisme', 'adoucit', 'Il nous a quittés cette nuit.'],
      ['l’antiphrase', 'dit le contraire', 'les « héros » qui brûlent un village (Voltaire)'],
      ['l’ironie', 'attitude d’ensemble', 'tout le chapitre III de Candide'],
      ['la prétérition', 'montre ce qu’elle feint de taire', 'Je ne peindrai pas la joie des vainqueurs…'],
    ]),
  ]),
  sheet('sheet-construction', 'L’ordre et la construction', ['gradation', 'chiasme, antithèse, oxymore', 'zeugme : qui dit quoi', 'hypallage'], [
    teach('sheet-construction-teach', 'Quand l’ordre des mots fait le sens',
      'La gradation range des termes par intensité et se lit par son point d’arrivée. Le chiasme croise les termes (A B, B A) ; l’antithèse oppose sans croiser ; l’oxymore serre deux contraires dans un groupe. Le zeugme attelle à un mot deux termes de nature différente. L’hypallage prête à un mot ce qui convient à un autre mot de la phrase. EN: order, crossing, yoking, shifting.'),
    table('sheet-construction-table', 'Six figures de construction', ['Figure', 'Le geste', 'Exemple de la leçon'], [
      ['la gradation', 'monter ou descendre', 'va, cours, vole, et nous venge (Corneille)'],
      ['le chiasme', 'croiser', 'manger pour vivre, vivre pour manger (Molière)'],
      ['l’antithèse', 'opposer', 'ici la fête, là-bas la faim'],
      ['l’oxymore', 'serrer deux contraires', 'cette obscure clarté (Corneille)'],
      ['le zeugme', 'atteler', 'vêtu de probité candide et de lin blanc (Hugo)'],
      ['l’hypallage', 'déplacer un trait', 'son comptoir avide (Hugo)'],
    ]),
    table('sheet-construction-sources', 'Zeugme et hypallage : qui dit quoi', ['Source', 'Zeugme', 'Hypallage'], [
      ['Larousse', 'éléments pas sur le même plan, syntaxique ou sémantique', 'attribuer à un mot ce qui convient à un autre de la phrase'],
      ['TLFi', 'sens grammatical (élément sous-entendu) et sens rhétorique (un mot, deux emplois)', 'même idée, sans que le sens soit brouillé ; parfois au masculin'],
      ['Académie, 9e édition', 'non cité ici', 'déplacer un terme, le plus souvent un adjectif'],
      ['Fontanier, XIXe siècle', 'près de l’ellipse, parmi les figures où l’on sous-entend', 'sceptique : bien des hypallages de Dumarsais s’expliquent autrement'],
    ]),
  ]),
  sheet('sheet-sens', 'Nommer par le voisin', ['métonymie', 'synecdoque', 'métaphore ou métonymie'], [
    teach('sheet-sens-teach', 'Un lien réel, pas une ressemblance',
      `La métonymie désigne une chose par une autre qui lui est réellement liée ; la synecdoque, variété de métonymie selon Larousse, prend la partie pour le tout. La métaphore, que ${LITT_REF} t’a montrée, passe par une ressemblance. Pour l’effet, demande-toi ce que le mot choisi met en avant : la masse, le pouvoir lointain, le besoin. EN: a real link, not a likeness; ask what the chosen word foregrounds.`),
    table('sheet-sens-table', 'Les liens les plus courants', ['Le lien', 'Exemple', 'On comprend'], [
      ['le lieu pour les gens', 'toute la salle s’est levée', 'le public'],
      ['l’auteur pour l’œuvre', 'lire tout Hugo', 'ses livres'],
      ['la capitale pour le pouvoir', 'Paris n’a pas répondu', 'le gouvernement'],
      ['le contenant pour le contenu', 'boire un verre', 'la boisson'],
      ['la partie pour le tout', 'une voile à l’horizon', 'un navire'],
      ['la partie pour la personne', 'des bouches à nourrir', 'des gens'],
    ]),
  ]),
  sheet('sheet-sons', 'Les sons, le rythme, les ruptures', ['allitération et assonance', 'cadence et rythme ternaire', 'quatre ruptures'], [
    teach('sheet-sons-teach', 'Voir, compter, puis entendre',
      'L’allitération répète une consonne, l’assonance une voyelle : repère-les à l’écrit, vérifie-les à voix haute, et relie-les toujours au sens. Le rythme se prouve par un compte de syllabes : une cadence majeure finit sur le membre le plus long, une mineure sur le plus court ; un rythme ternaire groupe trois éléments. Une rupture voulue casse une attente : dis ce qu’elle casse. EN: spot, count, then listen; say what a break breaks.'),
    table('sheet-sons-table', 'Sons et rythme', ['Figure', 'Ce qu’on repère', 'Exemple'], [
      ['l’allitération', 'une consonne répétée', 'ces serpents qui sifflent (Racine)'],
      ['l’assonance', 'une voyelle répétée', 'les sanglots longs des violons (Verlaine)'],
      ['la cadence mineure', 'le dernier membre est le plus court', 'Le silence éternel de ces espaces infinis m’effraye. (Pascal)'],
      ['le rythme ternaire', 'trois éléments', 'Il faut lire, relire, et lire encore.'],
    ]),
    table('sheet-sons-ruptures', 'Quatre ruptures', ['Rupture', 'Ce qu’elle casse', 'Exemple'], [
      ['l’anacoluthe', 'la construction', 'Le nez de Cléopatre, s’il eût été plus court, toute la face de la terre auroit changé. (Pascal)'],
      ['l’asyndète', 'les liaisons', 'Il entre, il regarde, il se tait.'],
      ['le rejet', 'la limite du vers', 'Dort ; il est étendu dans l’herbe… (Rimbaud)'],
      ['la phrase nominale', 'le mouvement', 'Silence. Puis la porte.'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-19-[a-z0-9-]+/g) ?? [])];

const PIEGE_BRIEF = 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.';
const REC_DESC: Record<string, string> = {
  'rec-c1-19-brouillon': 'Léa’s draft and Mamadou’s margin note (act 1), TWO VOICES, one take each: Léa, a woman in her thirties, Québec French, reading her draft a little proudly; Mamadou, a man in his fifties, Senegalese French, warm and precise. Quotations from Corneille read plainly, as quotations.',
  'rec-c1-19-litote': 'Mamadou’s session on Le Cid (act 2), ONE NARRATOR plus the quoted lines. The two lines of Rodrigue and Chimène’s « Va, je ne te hais point » read as theatre verse, with a breath at the line break, never declaimed. Inès and Hugues in the narrator’s voice with a slight change of tone if no second voice is available.',
  'rec-c1-19-candide': 'Hugues reads Voltaire (act 3), ONE VOICE, a man in his sixties, France French. The opening sentence of Candide chapter III read with deadpan solemnity, as if praising a parade: the irony must sit in the words, not in a wink.',
  'rec-c1-19-gradation': 'Inès on Le Cid I, 5 (act 4), ONE VOICE, a woman in her forties, Belgian French. Don Diègue’s line « va, cours, vole, et nous venge » with the four verbs gaining speed, no shouting.',
  'rec-c1-19-chiasme': 'Léa on L’Avare (act 5), ONE VOICE. Valère’s maxim even and clear; Harpagon’s botched version with a small stumble before « Non, ce n’est pas cela ».',
  'rec-c1-19-booz': 'Hugues reads « Booz endormi » (act 6), ONE VOICE. The two lines of verse with a breath at the line break; « Vêtu de probité candide et de lin blanc » at an even pace, both complements at the same weight.',
  'rec-c1-19-canaris': 'Inès reads Hugo’s « À Canaris » line (act 7), ONE VOICE. « Ce marchand accoudé sur son comptoir avide » plainly, no stress on « avide ».',
  'rec-c1-19-port': 'The port chronicle (act 8), ONE VOICE, an older man, Breton or Norman France French, a little weary. « Texte original écrit pour la leçon » read as a label.',
  'rec-c1-19-sons': 'Mamadou at the board (act 9), ONE VOICE. Racine’s line read at natural theatre pace, the [s] sounds NOT exaggerated; Verlaine’s stanza with a short pause at every line break, nasal vowels full. The learner sees the letters on screen: do not caricature the sounds.',
  'rec-c1-19-ecoute-sons': 'Eight lines, ONE TAKE, ONE VOICE, in authored order, lines visible to the learner. Natural pace; the sound figures (lines 1, 3, 4, 5) clear but never exaggerated.',
  'rec-c1-19-pascal': 'Mamadou on Pascal (act 10), ONE VOICE. The Pascal sentence read three times as the text says, the last word « m’effraye » short and low. Syllable counts read as numbers.',
  'rec-c1-19-cleopatre': 'The last session before the commentary (act 11), ONE VOICE. Pascal’s sentence with the old spellings pronounced in modern French (« auroit » as [o.ʁɛ]); a slight break after « plus court ». « Il entre, il regarde, il se tait » with the commas as real pauses.',
  'rec-c1-19-dormeur': 'THE TASK EXTRACT (act 12), ONE VOICE, a calm adult voice, France French, reading Rimbaud’s sonnet as poetry: a breath at every line end, the enjambed words (D’argent, Luit, Dort, Sourirait, Tranquille) carried over without an added pause before them. The last line at the same even weight as the rest: no dramatic drop. Read the title line as a label.',
  'rec-c1-19-piege-litote': PIEGE_BRIEF,
  'rec-c1-19-piege-gradation': PIEGE_BRIEF,
  'rec-c1-19-piege-zeugme': PIEGE_BRIEF,
  'rec-c1-19-piege-metonymie': PIEGE_BRIEF,
  'rec-c1-19-piege-rythme': PIEGE_BRIEF,
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 19',
  intro: 'At B2 you learned to name a comparison, a metaphor or a personification and say what it makes you see. At C1 you do this for every figure: litotes, antiphrasis, gradation, chiasmus, zeugma, hypallage, metonymy and synecdoche, sound figures, rhythm and cadence, deliberate breaks. The skill is one precise sentence on the effect, proved by the words of the text, with other readings allowed. Each act reads a short public-domain extract, from Corneille to Rimbaud. It ends with a 250 to 400 word commentary on « Le Dormeur du val ».',
  skill: 'CE',
  grammarAssumed: [LITT_UNIT, CRITIQUE_UNIT, NUANCER_UNIT, PERSUADER_UNIT],
  grammarIntroduced: [
    'The effect sentence: a figure named or described, one or two words quoted, and what they do to the meaning or the reader; interpretation defended by the text, other readings acknowledged',
    'Saying less or the opposite as literary figures: litotes (told from euphemism), antiphrasis (told from irony as an attitude and from oxymoron), the narrative paralipsis',
    'Figures of order and construction read for their effect: gradation read from its end point (rising and falling), chiasmus (with antithesis and oxymoron), zeugma (with the dictionaries’ differing definitions), hypallage (told from personification)',
    'Naming by a real link: metonymy and synecdoche, told from metaphor',
    'Sound and rhythm: alliteration and assonance shown in the written text and tied to meaning; ternary rhythm, major and minor cadence proved by syllable counts',
    'Effects of rupture: anacoluthon, asyndeton, enjambment (rejet), the verbless sentence; the short literary commentary at C1',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B2, tu as appris à nommer une comparaison, une métaphore ou une personnification et à dire ce qu’elle fait voir. Au C1, tu le fais pour toutes les figures : la litote, l’antiphrase, la gradation, le chiasme, le zeugme, l’hypallage, la métonymie, les sons, le rythme et les ruptures. La compétence, c’est une phrase précise sur l’effet, prouvée par les mots du texte. À la fin, tu écris en 250 à 400 mots le commentaire d’un sonnet de Rimbaud.',
    minutes: 180,
    difficulty: 4,
    glyph: 'effet',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: FIGURES_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, DORMEUR_TEXT };
export const lessonWithoutTask = (): Lesson => LESSON;
