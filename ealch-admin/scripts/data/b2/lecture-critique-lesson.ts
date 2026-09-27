// b2.24.l1 « Lire de façon critique » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE, strategy
// variant) on top of B1-BUILD-PLAYBOOK.md, with the B2 rules of
// B2-BUILD-LOG.md. The B2 reading (CE) remediation target, and the direct
// successor of b1.37 « Lire sans tout comprendre ».
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 10 is built around ONE ANCHOR TEXT (200 to 350
//   words, a real B2 genre) and ONE MOVE, in the same four beats:
//
//     1. MEET THE TEXT     a `reading`, questions behind `questionsInModal`.
//                          Its FIRST question is always « Devine le sens » (a
//                          B2 word inferred from context), and the glossary
//                          keeps only what a B2 reader cannot infer (0 to 2
//                          entries). Then global, inference and stance
//                          questions, weighted to inference and stance.
//     2. NOTICE THE MOVE   a `tapTable`, `cardDeck`, `examples`, `focus` or
//                          `hacks`, linked to a sheet.
//     3. PRACTISE          two or three checks on NEW material.
//     4. USE IT            « Pour ta réponse critique », always the same
//                          groupDrill shape: a line of a critical response
//                          built with THIS act's move against the line a
//                          reader without it would write.
//
//   then the act check (control pages, gated). Act 1 is the problem scene;
//   act 11 is the production act (the task and the closing sections).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le titre affirme          6  a news article on napping at work
//                                    (scene) · headline vs what it proves
//    2  La thèse                  6  an opinion column on grades · topic vs
//                                    thesis, the concession before it
//    3  Preuve ou affirmation     7  a study summary on parks and teenagers
//                                    · evidence types, link vs cause
//    4  Ce que le texte suppose   6  a letter to the editor · the unstated
//                                    assumption
//    5  La distance de l’auteur   8  a local news story on a pool overrun ·
//                                    modalisation and reporting verbs
//    6  Le ton et l’ironie        6  an ironic blog post · irony, tone
//    7  À qui ça profite          6  a press release and the article about
//                                    it · interest, soft words, omissions
//    8  Fait, opinion,            7  an advertisement · fact, opinion,
//       interprétation               interpretation, the claim as a fact
//    9  Deux textes, un sujet     6  a report extract and a blog · comparing
//   10  À l’examen                7  a DELF B2-style column · inference and
//                                    stance questions, answering with a quote
//   11  Ta réponse critique      11  the task tribune · plan, role play,
//                                    TASK, quiz, review
//
//   TOTAL 76 missions, 11 acts (6,6,7,6,8,6,6,7,6,7,11). Corpus: 200
//   authored rows (.1400-.1599) in eleven blocks plus 15 reused seed rows.
//   11 anchor readings (acts 7 and 9 print two short texts each) and 3
//   listenings. Quiz: 11 rounds of 8. Eleven error triggers, eleven drills,
//   four reference sheets, ten terms. Chapter artwork:
//   `lecture-critique-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Ce qu’un texte affirme n’est pas ce qu’il prouve. »
//   EN: What a text claims is not what it proves.
//
//   ONE METAPHOR, THE MAGNIFYING GLASS. b1.37's lamp lit what carries the
//   meaning; the glass comes second, over a text already understood, and
//   separates the big claim from what holds it up. It is NOT « do not
//   believe what you read »: acts 5 and 10 ask for a stance reported
//   faithfully, and act 11 rewards naming a solid argument as solid.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    critical reading at B2: thesis vs topic; evidence vs assertion
//           (sample, link vs cause, example, authority); unstated
//           assumptions; the writer's distance (conditionnel de distance,
//           il semblerait que, prétendument, soi-disant, à en croire,
//           quotation marks, evaluative reporting verbs); tone and irony;
//           interest and soft words; fact, opinion, interpretation;
//           comparing two texts; DELF B2 / TCF inference and stance items
//           answered with a quotation; the written critical response.
//   QUOTES  b1.37's reframe (act 1), b1.34's and b1.08's (act 5), b1.32's
//           (act 2), each imported from its corpus, never retyped.
//   LEAVES  argument WRITING to b2.23 (parallel), listening for stance to
//           b2.25 (parallel), concession as grammar to b1.32 and b2.16.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use what the situation needs. Natural B2
//   French; English still authored on every learner string (`en`, or a final
//   « EN: »), and never on an answer. Every `say` is French. Citations by
//   trail position in French (« la leçon 37 du B1 »), never a raw id.
//   Typographic ’ in every authored French string. Mission answer slots are
//   spread by `balanceSlots()` (options and index rotated together, no text
//   changed); the quiz by `spreadSlots()`.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. Spaced reuse: the B2 plan asks every quiz for one round recycling
//      EARLIER B2 lessons. b2.24 is in wave 1 and no earlier B2 lesson
//      exists, so round 11 integrates this lesson instead. Add a recycling
//      round once b2.01 to b2.06 exist (the conditionnel passé of distance,
//      « aurait coûté », is the natural candidate)?
//   2. `task.briefEn`: schema.ts says « B1 only; B2 drops it », while the B2
//      build log says English stays on every learner string. It is kept.
//   3. The task text is printed twice (reading and brief), as in b1.37: no
//      `source` field on `task`. Accept again, or add the field?
//   4. Rubric: six criteria, 20 points (three CE, two PE, one for the
//      quotations), against the playbook's four and 12. Keep the B2 grid?
//   5. The three listenings are practice, not strategy (b2.25 owns
//      listening for stance). Keep them, or swap for readings?
//   6. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, B137, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE,
  SIESTE_TEXT, NOTES_TEXT, PARCS_TEXT, COURRIER_TEXT, PISCINE_TEXT, BLOG_TEXT,
  TRL_TEXT, MATELAS_TEXT, GRATUITE_TEXT, DECONNEXION_TEXT, ESPECES_TEXT,
  B137_REFRAME, B134_REFRAME, B108_REFRAME, B132_REFRAME,
  LECTURE_UNIT, MEDIAS_UNIT, CONDITIONNEL_UNIT, CONCESSION_UNIT, COURRIELS_UNIT,
  LECTURE_REF, MEDIAS_REF, CONDITIONNEL_REF, CONCESSION_REF, ARGUMENTATION_REF, ECOUTE_B2_REF,
} from './lecture-critique-corpus.ts';
import { LECTURE_CRITIQUE_TERMS } from './lecture-critique-terms.ts';

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
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.24: no item ${id}`);
  return r;
}
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.24: no ipa on ${id}`);
  return r.ipa;
}
/** The corpus row's respelling, BRACKETED for a section. Authored rows only. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`b2.24: no authored respell on ${id}`);
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

/** THE « USE IT » BEAT: the act's one tool for the graded task. */
function pourTaReponse(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ta réponse critique', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE TITRE AFFIRME
 *
 *  The problem: a learner who has b1.37's skill (the gist from the headline)
 *  repeats a headline at a meeting and is caught out, because the article
 *  itself questions what its headline claims.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Trente pour cent de productivité', frSub: 'La réunion du lundi',
  setting: { place: 'La salle de réunion de l’agence Lumen', city: 'Lyon', time: '9 h 30', ambience: 'un grand écran, des cafés, une équipe de huit' },
  beats: [
    { kind: 'narration', text: 'Lundi, 9 h 30, à l’agence Lumen, à Lyon. Réunion d’équipe. Ce week-end, tu as lu un article sur la sieste au bureau. Enfin, son titre et sa première phrase.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: 'J’ai lu qu’une sieste rend les équipes plus productives.', en: 'I read that a nap makes teams more productive.', respell: '[zhay LÜ kün SYEST rahⁿ lay-zay-KEEP plü pro-dük-TEEV]', stage: 'Tu proposes d’installer des capsules de repos dans l’agence.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Nadia, la directrice', fr: 'Dis-moi qui a fait cette étude, et sur combien de personnes.', en: 'Tell me who did this study, and on how many people.', respell: '[dee-MWA kee a feh set ay-TÜD ay sür kohⁿ-byehⁿ duh pehr-SONN]', stage: 'Elle ne dit ni oui ni non. Elle attend.', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'Tu rouvres l’article sur ton téléphone. Cette fois, tu le lis jusqu’au bout, pendant que Nadia sert le café.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Nadia se tourne vers toi. Que réponds-tu ?', size: 'lg',
      options: [
        { fr: src(E(1404)).fr, respell: rsOf(E(1404)), en: src(E(1404)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(1405)).fr, respell: rsOf(E(1405)), en: src(E(1405)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Nadia hoche la tête : « Donc une piste, pas une preuve. On en reparle quand une étude indépendante sortira. » Ta proposition reste sur la table, et ta crédibilité aussi.',
        breaks: 'Nadia sourit : « L’étude est payée par le fabricant des capsules. C’est écrit au sixième paragraphe. » Toute l’équipe l’avait lu, sauf toi.',
      },
    },
    {
      kind: 'break', heading: 'Tu as compris le titre, pas l’article',
      body: `${Cap(LECTURE_REF)} t’a appris à tirer le sens d’un titre. Ici, le titre affirme ce que l’article met en doute : une étude payée par le fabricant, des salariés qui se notent eux-mêmes. EN: The headline claims what the article itself questions.`,
      wrong: { fr: src(E(1404)).fr, ipa: ipaOf(E(1404)), respell: rsOf(E(1404)), en: src(E(1404)).en },
      right: { fr: src(E(1405)).fr, ipa: ipaOf(E(1405)), respell: rsOf(E(1405)), en: src(E(1405)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Cette leçon t’apprend à lire un texte que tu comprends déjà, mais pour le juger : sa thèse, ses preuves, ce qu’il suppose, son ton, et qui y gagne. À la fin, tu écriras une réponse critique de 150 à 200 mots sur une tribune.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['preuve', 'interet'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Trouver ce que le texte affirme', s: 'Actes 2 à 4 : la thèse, les preuves, les présupposés' },
    { t: 'Lire la position de l’auteur', s: 'Actes 5 et 6 : la distance, le ton et l’ironie' },
    { t: 'Savoir à qui profite un texte', s: 'Actes 7 à 9 : l’intérêt, fait ou interprétation, deux textes' },
    { t: 'Répondre en critique', s: 'Actes 10 et 11 : l’examen, puis ta réponse écrite' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'L’article en entier', frSub: 'Cette fois, jusqu’à la dernière ligne',
  text: SIESTE_TEXT,
  glossary: [
    { word: 'Encore faut-il', en: 'still, one has to', note: 'Tournure de l’écrit : elle annonce une réserve. EN: it introduces a reservation.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « l’étude a été financée par Somnéa ». Que veut dire « financée », et pourquoi ce mot compte-t-il ?', a: 'Payée. Et il compte : Somnéa fabrique les capsules que l’étude recommande.' },
    { q: 'Que dit le titre ? Que montre vraiment l’article ?', a: 'Le titre promet une arme de productivité. L’article montre que des salariés se sentent mieux, d’après leur propre note, dans une étude payée par le fabricant.' },
    { q: 'Quelles sont les trois faiblesses de l’étude ?', a: 'La productivité n’a pas été mesurée, les salariés savaient qu’ils participaient, et l’étude est financée par Somnéa.' },
    { q: 'Le journaliste est-il convaincu ? Quels mots le montrent ?', a: 'Non : « augmenterait », « semblent », « Encore faut-il regarder de près », « justement », et le chercheur qui juge le chiffre difficile à prendre au sérieux.' },
    { q: 'Qui a intérêt à ce qu’on croie le titre ?', a: 'Somnéa, qui vend les capsules et veut en équiper toutes les grandes entreprises de la région.' },
  ],
  audio: REC('rec-b2-24-sieste'), say: REFRAME, terms: ['preuve', 'distance', 'interet'],
};

const A1_LOUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-loupe', layer: 'core', size: 'lg',
  title: 'Le titre, puis la loupe', frSub: 'Ce qu’il affirme, ce qu’il prouve',
  groups: [
    grp('Ce que le haut de la page affirme', [
      it(E(1400), 'le titre : une question qui promet'),
      it(E(1401), 'la première phrase, au conditionnel'),
      it(E(1404), 'ce que tu as retenu'),
    ], chk('« Augmenterait » : le journaliste...', ['rapporte un résultat sans le garantir', 'donne un fait établi'], 0,
      'Le conditionnel met une distance : c’est le résultat annoncé par l’Institut. EN: the conditional reports the claim without endorsing it.')),
    grp('Ce que l’article prouve', [
      it(E(1403), 'la mesure'),
      it(E(1402), 'le financement'),
      it(E(1411), 'l’avis du chercheur'),
    ], chk('Après ces trois phrases, le chiffre de 30 %, c’est...', ['une affirmation fragile', 'une preuve solide', 'un fait vérifié'], 0,
      'Une impression notée par les salariés eux-mêmes, dans une étude payée par le fabricant. EN: a self-reported impression in a funded study.')),
    grp('Ce que tu sais déjà, et la suite', [
      it(B137(1005), 'la leçon 37 du B1'),
      it(B137(1006), 'ton réflexe de lecteur'),
      it(B137(1009), 'vrai pour le sens'),
      it(E(1412), 'la suite, ici'),
    ], chk('Le titre dit l’essentiel du SUJET. Dit-il ce que l’article PROUVE ?', ['Pas forcément : il faut lire jusqu’au bout.', 'Oui, toujours.'], 0,
      'Le titre donne le sens ; le corps de l’article dit ce qui le soutient. EN: the headline gives the topic; the body says what supports it.')),
    ctl('Le réflexe', `${Cap(LECTURE_REF)} disait : « ${B137_REFRAME} » Qu’ajoute cette leçon ?`,
      ['Rien : le sens suffit.', 'Le jugement : une fois le sens compris, ce qui le prouve.'], 1,
      'Comprendre ne suffit plus : à B2, tu pèses ce que tu as compris. EN: at B2 you weigh what you understood.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['preuve'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Un collègue partage une étude surprenante', fr: src(E(1409)).fr, en: src(E(1409)).en },
    { situation: 'Un article sur un projet de ta ville', fr: src(E(1407)).fr, en: src(E(1407)).en },
    { situation: 'Une publicité promet des résultats', fr: src(E(1408)).fr, en: src(E(1408)).en },
    { situation: 'Le DELF B2 te demande la position de l’auteur', fr: src(E(1410)).fr, en: src(E(1410)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['preuve', 'position'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le titre', 'Un titre dit « une étude montre ». Tu as...', ['une preuve', 'une affirmation à vérifier'], 1,
    'Le titre annonce ; le corps dit sur quoi ça repose. EN: a headline announces; the body shows the basis.'),
  ctl('Les trois questions', 'Face à une étude, tu demandes d’abord...', ['qui l’a faite et payée, et sur quelle mesure', 'si elle est récente', 'si le titre est long'], 0,
    'Qui, qui paie, comment : trois questions qui pèsent une étude. EN: who, who paid, how.'),
  ctl('La mission', 'À la fin de la leçon, tu vas écrire...', ['un résumé pour un ami', 'une réponse critique de 150 à 200 mots', 'une lettre au journal'], 1,
    'Tu résumeras une tribune, tu jugeras ses preuves et tu nommeras sa position, citations à l’appui. EN: summarise, judge, name the stance, with quotations.'),
], ['preuve', 'interet']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le titre affirme',
    opener: {
      line: 'Tu as compris le titre, et le titre t’a trompé : ici tu apprends à lire jusqu’à la preuve. EN: You understood the headline and it misled you: here you learn to read as far as the evidence.',
      imageRef: 'lessons/lecture-critique/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sépares ce qu’un titre affirme de ce que l’article prouve. EN: You can tell what a headline claims from what the article proves.',
    estScreens: 28, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_LOUPE, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LA THÈSE
 *
 *  TEXT: an opinion column on grades whose thesis arrives after a long
 *  concession. MOVE: tell the topic from the claim, and look for the claim
 *  after « pourtant », « mais », « donc », not in the first sentence.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_CHRONIQUE: Sec<'reading'> = {
  type: 'reading', id: 'a2-chronique', layer: 'core', questionsInModal: true,
  title: 'La chronique du mardi', frSub: 'Où est la thèse ?',
  text: NOTES_TEXT,
  glossary: [
    { word: 'pastilles', en: 'coloured dots', note: 'Petits ronds de couleur posés sur une copie.' },
  ],
  questions: [
    { q: 'Devine le sens : « Gardons les notes, et rendons-les bavardes. » Une note « bavarde », c’est quoi ?', a: 'Une note qui parle : accompagnée d’un commentaire qui explique ce qui est réussi et ce qui reste à travailler.' },
    { q: 'Quel est le sujet de la chronique ? Quelle est sa thèse ?', a: 'Le sujet : les notes à l’école. La thèse : il faut garder les notes, mais les accompagner d’un commentaire.' },
    { q: 'Où commence la thèse ? Quel mot l’annonce ?', a: '« On aurait tort, pourtant... ». Pourtant tourne le texte ; « donc » la redit plus loin.' },
    { q: 'Pourquoi l’auteure commence-t-elle par les arguments contre les notes ?', a: 'C’est une concession : elle montre qu’elle connaît ces arguments, ce qui rend sa thèse plus crédible.' },
    { q: 'Que représente le thermomètre dans le titre ?', a: 'La note : elle mesure le problème, elle ne le cause pas. Casser le thermomètre ne guérit pas la fièvre.' },
  ],
  audio: REC('rec-b2-24-notes'), say: REFRAME, terms: ['these'],
};

const A2_THESE: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-these', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-arguments',
  title: 'Sujet, concession, thèse', frSub: 'Trois choses qu’on confond',
  hint: 'Quatre cartes. Regarde où se cache la thèse.',
  audio: REC('rec-b2-24-these'), say: REFRAME, terms: ['these'],
  cards: [
    { head: 'Le sujet', label: 'de quoi ça parle', fr: src(E(1416)).fr, sub: rsOf(E(1416)),
      body: 'Le sujet est une question ouverte : on peut en faire dix textes différents. Il ne dit pas encore ce que pense l’auteur. EN: the topic is an open question; it does not yet say what the writer thinks.' },
    { head: 'La concession', label: Cap(CONCESSION_REF), fr: src(E(1419)).fr, sub: rsOf(E(1419)),
      body: `L’auteur accorde un point à l’autre camp. ${Cap(CONCESSION_REF)} disait : « ${B132_REFRAME} » EN: the writer grants a point; the thesis comes after.` },
    { head: 'Le tournant', label: 'pourtant, mais, donc', fr: src(E(1417)).fr, sub: rsOf(E(1417)),
      body: 'Après la concession, le texte tourne : c’est souvent là qu’est la thèse. EN: after the concession the text turns, and the thesis usually sits there.' },
    { head: 'La thèse en une phrase', label: 'avec tes mots', fr: src(E(1424)).fr, sub: rsOf(E(1424)),
      body: 'Un verbe de position (soutenir, défendre, affirmer), puis la thèse entière, condition comprise. EN: a stance verb, then the whole claim, condition included.' },
  ],
};

const A2_TROUVER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-trouver', layer: 'core', size: 'lg',
  title: 'Trouve la thèse', frSub: 'Trois autres textes',
  groups: [
    grp('Trois thèses', [
      it(E(1429), 'le vélo en hiver'),
      it(E(1430), 'le télétravail'),
      it(E(1431), 'le téléphone à l’école'),
    ], chk('Dans ces trois phrases, la thèse se trouve...', ['après la négation : ce n’est pas X, c’est Y', 'dans le premier mot', 'dans la question'], 0,
      'L’auteur écarte une idée pour poser la sienne. EN: the writer sets one idea aside to state their own.')),
    grp('Sujet ou thèse', [
      it(E(1421), 'de quoi ça parle'),
      it(E(1422), 'ce qu’on en affirme'),
      it(E(1423), 'les deux, séparés'),
    ], chk('« Les notes à l’école » : sujet ou thèse ?', ['un sujet', 'une thèse'], 0,
      'Rien n’y est affirmé : on ne peut être ni d’accord ni en désaccord. EN: nothing is claimed, so you cannot agree or disagree.')),
    ctl('La concession', '« Certes, les notes humilient parfois, mais elles informent. » La thèse est...',
      ['qu’elles informent', 'qu’elles humilient', 'qu’il faut les supprimer'], 0,
      'Ce qui suit « mais » l’emporte ; « certes » accorde seulement. EN: what follows mais carries the claim.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['these'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a2-piege', layer: 'core', swipe: true,
  title: 'Six fausses thèses',
  rule: {
    title: 'Le sujet n’est pas la thèse, la concession non plus',
    body: 'Une thèse affirme quelque chose sur le sujet, et on peut la contester. Cherche-la après pourtant, mais, donc, jamais dans ce que l’auteur accorde à l’autre camp. EN: a thesis is a contestable claim, found after the turn, not in the concession.',
  },
  cards: [
    { promptLabel: 'le sujet pris pour la thèse', promptSound: 'La chronique parle des notes à l’école.', fr: src(E(1417)).fr, ipa: ipaOf(E(1417)), tip: 'Parler des notes, c’est le sujet ; dire ce qui pose problème, c’est la thèse. EN: topic versus claim.' },
    { promptLabel: 'la concession prise pour la thèse', promptSound: 'L’auteure pense que les notes humilient les élèves.', fr: src(E(1424)).fr, ipa: ipaOf(E(1424)), tip: 'Elle l’accorde, puis elle tourne avec pourtant. EN: she grants it, then turns.' },
    { promptLabel: 'le camp inversé', promptSound: 'L’auteure veut supprimer les notes.', fr: src(E(1418)).fr, ipa: ipaOf(E(1418)), tip: 'C’est la question du débat, pas sa réponse. EN: that is the question, not her answer.' },
    { promptLabel: 'la négation oubliée', promptSound: 'Le télétravail isole les salariés.', fr: src(E(1430)).fr, ipa: ipaOf(E(1430)), tip: 'L’auteur dit l’inverse : ce sont les règles absentes qui isolent. EN: the writer says the opposite.' },
    { promptLabel: 'le mais oublié', promptSound: 'Il faut interdire les téléphones à l’école.', fr: src(E(1431)).fr, ipa: ipaOf(E(1431)), tip: 'Ce qui suit mais est la thèse. EN: what follows mais is the claim.' },
    { promptLabel: 'la condition oubliée', promptSound: 'Le vélo en hiver, c’est pour tout le monde.', fr: src(E(1429)).fr, ipa: ipaOf(E(1429)), tip: 'La thèse garde sa condition : à condition d’équiper les pistes. EN: keep the condition.' },
  ],
  drill: [
    { promptSay: 'La thèse, c’est ce que le texte ... sur le sujet.', opts: ['affirme', 'raconte'], correct: 0 },
    { promptSay: 'Après « Tout cela est vrai », la thèse arrive souvent avec ... .', opts: ['d’abord', 'pourtant'], correct: 1 },
    { promptSay: 'Selon la chronique, il faut ... les notes.', opts: ['supprimer', 'garder', 'cacher'], correct: 1 },
    { promptSay: 'Une note seule ne dit ... .', opts: ['rien', 'tout'], correct: 0 },
    { promptSay: 'Le problème n’est pas la note, mais ce qu’on en ... .', opts: ['dit', 'pense', 'fait'], correct: 2 },
    { promptSay: 'Dans le titre, le thermomètre, c’est ... .', opts: ['la note', 'l’élève'], correct: 0 },
    { promptSay: '« Certes..., mais... » : la thèse suit ... .', opts: ['certes', 'mais'], correct: 1 },
    { promptSay: 'Ce n’est pas le télétravail qui isole, c’est l’absence de ... .', opts: ['bureaux', 'collègues', 'règles'], correct: 2 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le sujet n’est pas la thèse' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qu’un lecteur pressé a retenu' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six thèses justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-24-piege-these'), say: REFRAME, terms: ['these'],
};

const A2_REPONSE = pourTaReponse('a2-reponse', 'Ta première phrase dit la thèse', [
  grp('Deux premières phrases', [
    it(E(1424), 'la thèse, avec un verbe de position'),
    it(E(1427), 'un seul argument'),
  ], chk('Laquelle ouvre une réponse critique ?', ['L’auteure soutient qu’il faut garder les notes.', 'Selon la chroniqueuse, une note sans commentaire ne dit rien.'], 0,
    'La première donne la thèse entière ; la seconde, un argument parmi d’autres. EN: the first states the whole claim.')),
  grp('Le sujet ou la thèse', [
    free('La chronique parle des notes à l’école.', 'The column is about grades at school.', 'le sujet seulement'),
    it(E(1423), 'le sujet, puis la thèse'),
  ], chk('Laquelle apprend quelque chose à ton lecteur ?', ['la première', 'la seconde'], 1,
    'Dire le sujet ne dit rien de la position. EN: naming the topic says nothing about the stance.')),
], ['these', 'citation']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Sujet ou thèse', 'Une thèse, c’est...', ['ce dont parle le texte', 'ce que le texte affirme, et qu’on peut contester'], 1,
    'Le sujet est neutre ; la thèse prend position. EN: the topic is neutral; the thesis takes a side.'),
  ctl('La place', 'Où chercher la thèse d’une chronique ?', ['dans la première phrase', 'après la concession, derrière pourtant ou mais', 'dans le titre seulement'], 1,
    'Beaucoup de textes accordent d’abord, puis affirment. EN: many texts concede first, then claim.'),
  ctl('En une phrase', 'Tu redis la thèse...', ['avec tes mots et sa condition', 'en recopiant la dernière phrase'], 0,
    'Tes mots prouvent que tu as compris ; la condition garde la nuance. EN: your words, and the condition.'),
], ['these']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La thèse',
    opener: {
      line: 'Une chronique parle des notes pendant dix lignes avant de dire ce qu’elle pense : ici tu trouves sa thèse. EN: A column discusses grades for ten lines before saying what it thinks: here you find its thesis.',
      imageRef: 'lessons/lecture-critique/act02.jpg',
    },
    sections: [],
    milestone: 'Tu distingues le sujet de la thèse et tu redis la thèse en une phrase. EN: You can tell the topic from the thesis and restate the thesis in one sentence.',
    estScreens: 30, restPoints: ['a2-these', 'a2-piege'],
  },
  sections: [A2_CHRONIQUE, A2_THESE, A2_TROUVER, A2_PIEGE, A2_REPONSE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — PREUVE OU AFFIRMATION
 *
 *  TEXT: a study summary that states its own limits. MOVE: weigh what holds
 *  a claim up (figure, study, example, testimony, authority, nothing), and
 *  never read a link as a cause.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_ETUDE: Sec<'reading'> = {
  type: 'reading', id: 'a3-etude', layer: 'core', questionsInModal: true,
  title: 'Parcs et adolescents', frSub: 'Un résumé d’étude, limites comprises',
  text: PARCS_TEXT,
  glossary: [
    { word: 'aisés', en: 'well-off', note: 'Qui ont de l’argent.' },
  ],
  questions: [
    { q: 'Devine le sens : « L’écart persiste quand on tient compte de l’âge et du sexe. » Que veut dire « persiste » ?', a: 'Reste, continue d’exister : la différence est toujours là.' },
    { q: 'Que montre l’étude, exactement ?', a: 'Que les ados qui vivent près d’un parc déclarent moins de symptômes d’anxiété : 21 % contre 29 %.' },
    { q: 'Pourquoi ne prouve-t-elle pas que les parcs réduisent l’anxiété ?', a: 'C’est un lien, pas une cause ; les quartiers à parcs sont plus aisés ; les symptômes sont déclarés par les élèves ; on ne sait pas s’ils vont au parc.' },
    { q: 'Les auteurs recommandent-ils de créer des parcs ?', a: 'Non : ils demandent d’autres études et disent que les résultats ne suffisent pas à recommander une politique.' },
    { q: 'Ce texte est-il fiable ? Pourquoi ?', a: 'Oui, justement parce qu’il dit sa méthode et ses limites. Un texte qui avoue ses limites est plus solide qu’un titre qui n’en a pas.' },
  ],
  audio: REC('rec-b2-24-parcs'), say: REFRAME, terms: ['preuve'],
};

const A3_PREUVES: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-preuves', layer: 'core', sheetId: 'sheet-arguments',
  title: 'Six façons de soutenir une idée',
  cols: ['Ce qu’on avance', 'Exemple', 'Son poids'],
  rows: [
    { cells: ['un chiffre sourcé', 'selon une étude sur 1 840 élèves', 'solide, si on sait comment'], say: src(E(1442)).fr,
      detail: { title: 'Le chiffre sourcé', body: 'Une source, une méthode, un échantillon : tu peux vérifier. Regarde ce que le chiffre compte vraiment. EN: a figure with a source and a sample can be checked.', say: src(E(1437)).fr } },
    { cells: ['une étude', 'l’étude montre un lien', 'dépend de la méthode'], say: src(E(1432)).fr,
      detail: { title: 'L’étude', body: 'Qui l’a faite, payée, sur combien de personnes, avec quelle mesure ? Un lien n’est pas une cause. EN: check who, who paid, how many, what was measured.', say: src(E(1438)).fr } },
    { cells: ['un exemple', 'mon voisin dort mieux', 'illustre, ne prouve pas'], say: src(E(1443)).fr,
      detail: { title: 'L’exemple', body: 'Un seul cas rend une idée concrète. Il ne dit rien des autres cas. EN: one case illustrates, it does not generalise.', say: src(E(1444)).fr } },
    { cells: ['un témoignage', 'une élève raconte', 'une personne, un regard'], say: src(E(1453)).fr,
      detail: { title: 'Le témoignage', body: 'Une voix vivante, souvent choisie parce qu’elle va dans le sens du texte. EN: a real voice, often chosen to fit the text.', say: 'Une élève raconte qu’elle se sent mieux depuis qu’elle court au parc.' } },
    { cells: ['une autorité', 'tous les experts sont d’accord', 'quels experts ?'], say: src(E(1451)).fr,
      detail: { title: 'L’autorité', body: 'Un titre ou un nom rassure, mais sans source précise, c’est une affirmation. EN: an unnamed authority is still just a claim.', say: 'Un chercheur, cité par son nom et son université, pèse plus que « les experts ».' } },
    { cells: ['rien', 'tout le monde sait que', 'une affirmation'], say: src(E(1440)).fr,
      detail: { title: 'L’affirmation seule', body: 'Évident, tout le monde sait, il est clair que : ces formules remplacent souvent la preuve. EN: these phrases often stand in for evidence.', say: src(E(1441)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['preuve'],
};

const A3_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-trier', layer: 'core', size: 'lg',
  title: 'Preuve ou affirmation', frSub: 'Sur quoi ça repose',
  groups: [
    grp('Ça repose sur quelque chose', [
      it(E(1442), 'une source, un échantillon'),
      it(E(1435), 'une conclusion prudente'),
      it('fr.b1.journalisme.1141', 'le réflexe du journaliste'),
    ], chk('Qu’est-ce qui rend solide le chiffre sur les 1 840 élèves ?', ['sa source et la taille de l’échantillon', 'le mot « étude » seul'], 0,
      'On sait qui a mesuré, quoi et sur combien de personnes. EN: we know who measured what, on how many.')),
    grp('Ça affirme seulement', [
      it(E(1440), 'tout le monde sait'),
      it(E(1441), 'il est évident'),
      it(E(1451), 'tous les experts'),
      it(E(1443), 'un seul cas'),
    ], chk('Ces quatre phrases ont en commun...', ['de ne donner aucune preuve vérifiable', 'de citer une étude', 'd’être forcément fausses'], 0,
      'Elles peuvent être vraies ; elles ne le prouvent pas. EN: they may be true; they do not prove it.')),
    ctl('Le lien et la cause', '« Les élèves qui vivent près d’un parc sont moins anxieux. » Cela prouve que le parc...',
      ['réduit l’anxiété', 'est lié à moins d’anxiété, sans qu’on sache pourquoi'], 1,
      'Les quartiers à parcs sont aussi plus aisés : une autre cause est possible. EN: another cause is possible.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['preuve'],
};

/** `hideLines`: the questions are about what the ear caught. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a3-ecoute', layer: 'core', hideLines: true,
  title: 'La minute santé', frSub: 'Un animateur, une chercheuse',
  lines: [ln(E(1446)), ln(E(1447)), ln(E(1448)), ln(E(1449)), ln(E(1450)), ln(E(1451)), ln(E(1452)), ln(E(1453))],
  questions: [
    { q: 'Dans sa première phrase, l’animateur présente-t-il l’étude fidèlement ?', opts: ['Non, il en fait une preuve.', 'Oui, mot pour mot.'], correct: 0, why: 'Il dit que les parcs « protègent » : l’étude n’a observé qu’un lien. EN: he turns a link into a cause.' },
    { q: 'Selon la chercheuse, que montre l’étude ?', opts: ['que les parcs guérissent l’anxiété', 'un lien, pas une cause', 'rien du tout'], correct: 1, why: 'Elle corrige l’animateur : un lien observé, pas une cause prouvée. EN: a link, not a cause.' },
    { q: 'Quelle autre explication est évoquée ?', opts: ['la météo', 'le sport à l’école', 'les moyens des familles'], correct: 2, why: 'Les familles près des parcs ont souvent plus de moyens. EN: families near parks are often better off.' },
    { q: 'Qui a jugé l’humeur des élèves ?', opts: ['un psychologue', 'les élèves eux-mêmes'], correct: 1, why: 'Les élèves ont décrit leur humeur : c’est déclaré, pas évalué. EN: self-reported.' },
    { q: 'La phrase sur les experts est...', opts: ['une affirmation sans source', 'un résultat de l’étude', 'une citation du rapport'], correct: 0, why: 'Aucun expert n’est nommé. EN: no expert is named.' },
    { q: 'Que demandent vraiment les auteurs ?', opts: ['des arbres partout', 'une deuxième étude'], correct: 1, why: 'Ils veulent suivre les élèves plus longtemps avant de conclure. EN: they want a second study first.' },
  ],
  audio: REC('rec-b2-24-minute-sante'), say: REFRAME, terms: ['preuve'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a3-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre preuves qui n’en sont pas',
  errors: [
    { wrong: 'Une étude prouve que les parcs réduisent l’anxiété.', right: 'Une étude montre un lien entre les parcs et moins d’anxiété, pas une cause.',
      why: 'Normal : « montrer » et « prouver » semblent proches. Mais un lien peut avoir une autre cause, ici le revenu. EN: a link may have another cause.' },
    { wrong: 'Tous les ados qui vivent près d’un parc sont moins anxieux.', right: 'En moyenne, les ados qui vivent près d’un parc déclarent moins de symptômes.',
      why: 'Le chiffre est une moyenne : il ne dit rien de chaque élève. EN: an average says nothing about each pupil.' },
    { wrong: 'Mon voisin dort mieux sans sucre : c’est prouvé.', right: 'Mon voisin dort mieux sans sucre : c’est un exemple, pas une preuve.',
      why: 'Un cas vécu convainc parce qu’il est concret. Il reste un seul cas. EN: one real case is still one case.' },
    { wrong: 'Les experts le disent, donc c’est vrai.', right: 'Quels experts, et sur quelle étude ?',
      why: 'Une autorité sans nom rassure sans rien prouver. Demande la source. EN: an unnamed authority proves nothing.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['preuve'],
};

const A3_REPONSE = pourTaReponse('a3-reponse', 'Tu juges une preuve, tu ne la recopies pas', [
  grp('Juger la preuve', [
    it(E(1432), 'le type de résultat'),
    it(E(1433), 'la mesure'),
    it(E(1434), 'une autre cause possible'),
  ], chk('Dans une réponse critique, tu écris...', ['« L’étude montre un lien, pas une cause, et les élèves ont déclaré eux-mêmes leurs symptômes. »', '« Selon l’étude, 21 % contre 29 %. »'], 0,
    'Le premier juge la preuve ; le second la recopie. EN: the first judges the evidence; the second copies it.')),
  grp('Deux jugements', [
    free('Cette étude est nulle.', 'This study is worthless.', 'un avis sans raison'),
    it(E(1435), 'un jugement fondé'),
  ], chk('Lequel est un jugement critique ?', ['le premier', 'le second'], 1,
    'Critiquer, c’est donner la raison du jugement. EN: criticism gives the reason for the judgement.')),
], ['preuve', 'citation']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('L’exemple', 'Un exemple dans un texte...', ['prouve l’idée', 'illustre l’idée'], 1,
    'Un cas rend l’idée concrète, il ne la généralise pas. EN: it illustrates, it does not prove.'),
  ctl('La formule', '« Il est évident que... » annonce souvent...', ['une affirmation sans preuve', 'un chiffre sourcé', 'une citation'], 0,
    'L’évidence remplace la démonstration. EN: obviousness stands in for proof.'),
  ctl('Le lien', 'Deux choses vont ensemble. Tu peux dire...', ['que l’une cause l’autre', 'qu’elles sont liées, sans plus'], 1,
    'Une corrélation n’est pas une causalité. EN: correlation is not causation.'),
], ['preuve']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Preuve ou affirmation',
    opener: {
      line: 'Une étude sérieuse avoue ses limites, un titre pressé les oublie : ici tu pèses les preuves. EN: A serious study admits its limits, a hasty headline forgets them: here you weigh the evidence.',
      imageRef: 'lessons/lecture-critique/act03.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais six sortes d’appui et tu sais qu’un lien n’est pas une cause. EN: You recognise six kinds of support and know that a link is not a cause.',
    estScreens: 36, restPoints: ['a3-preuves', 'a3-ecoute'],
  },
  sections: [A3_ETUDE, A3_PREUVES, A3_TRIER, A3_ECOUTE, A3_ERREURS, A3_REPONSE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — CE QUE LE TEXTE SUPPOSE
 *
 *  TEXT: a letter to the editor. MOVE: bring out the idea an argument needs
 *  and never states (after vs because, the general rule, the past that
 *  lasts, the false either/or). The letter is not mocked: its fact is real.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_COURRIER: Sec<'reading'> = {
  type: 'reading', id: 'a4-courrier', layer: 'core', questionsInModal: true,
  title: 'Le courrier des lecteurs', frSub: 'Ce que la lettre ne dit pas',
  text: COURRIER_TEXT,
  glossary: [
    { word: 'mercerie', en: 'haberdashery', note: 'Boutique de fils, boutons et tissus.' },
  ],
  questions: [
    { q: 'Devine le sens : « les piétons flânent davantage ». Que font-ils ?', a: 'Ils se promènent lentement, sans but précis. La suite le dit : « ils se promènent ».' },
    { q: 'Quelle est la thèse de M. Chappuis, et sur quel fait s’appuie-t-il ?', a: 'Il faut rouvrir la rue aux voitures. Le fait : trois commerces ont fermé depuis qu’elle est piétonne.' },
    { q: 'Quelles idées tient-il pour acquises sans les dire ?', a: 'Que la rue piétonne est la cause des fermetures, que les clients viennent en voiture, que les piétons n’achètent rien, et que ce qui marchait il y a vingt ans marcherait encore.' },
    { q: '« Soit on rouvre la rue, soit le centre meurt. » Qu’est-ce qui cloche ?', a: 'C’est un faux choix : il oublie toutes les autres solutions, comme un parking proche ou des livraisons.' },
    { q: 'Sa lettre est-elle sans valeur ?', a: 'Non : le fait est réel, et la question des personnes âgées qui viennent à pied est légitime. C’est le raisonnement qui repose sur des présupposés.' },
  ],
  audio: REC('rec-b2-24-courrier'), say: REFRAME, terms: ['presuppose'],
};

const A4_PRESUPPOSES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-presupposes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-arguments',
  title: 'Quatre idées jamais dites', frSub: 'Où se cachent les présupposés',
  hint: 'Quatre cartes. Demande-toi à chaque fois : que faut-il croire ?',
  audio: REC('rec-b2-24-presupposes'), say: REFRAME, terms: ['presuppose'],
  cards: [
    { head: 'Après, donc à cause de', label: 'la cause supposée', fr: src(E(1454)).fr, sub: rsOf(E(1454)),
      body: 'Deux faits se suivent, et le texte laisse croire que le premier cause le second. Internet, les loyers, la crise : d’autres causes sont possibles. EN: one thing after another is not one thing because of another.' },
    { head: 'Tous, toujours, jamais', label: 'la généralisation', fr: src(E(1464)).fr, sub: rsOf(E(1464)),
      body: 'Un mot comme « tous » fait d’une impression une loi. Un seul contre-exemple suffit à la casser. EN: all, always and never turn an impression into a law.' },
    { head: 'Le passé qui dure', label: 'la nostalgie', fr: src(E(1461)).fr, sub: rsOf(E(1461)),
      body: 'Ce qui marchait avant marcherait encore : le texte oublie que les habitudes changent. EN: the argument assumes nothing has changed.' },
    { head: 'Le faux choix', label: 'soit... soit...', fr: src(E(1462)).fr, sub: rsOf(E(1462)),
      body: 'Deux solutions seulement, dont une catastrophe : le lecteur est poussé vers l’autre. EN: a false either/or pushes you toward one option.' },
  ],
};

const A4_DEVOILER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-devoiler', layer: 'core', size: 'lg',
  title: 'Dévoile le présupposé', frSub: 'Pour que l’argument marche, que faut-il croire ?',
  groups: [
    grp('Dans la lettre', [
      it(E(1456), 'le client imaginé'),
      it(E(1467), 'le piéton imaginé'),
      it(E(1459), 'la règle'),
    ], chk('« Les clients d’avant venaient en voiture. » Pour que l’argument marche, il faut croire que...', ['les clients ne peuvent venir qu’en voiture', 'la rue était plus jolie avant'], 0,
      'Si l’on peut venir autrement, l’argument tombe. EN: if customers can come another way, the argument falls.')),
    grp('Trois autres arguments', [
      free('Depuis qu’on a installé des caméras, les vols ont baissé : les caméras marchent.', 'Since cameras went up, thefts have fallen: cameras work.', 'après, donc à cause de ?'),
      free('Les jeunes ne lisent plus : mon neveu n’ouvre jamais un livre.', 'Young people no longer read: my nephew never opens a book.', 'un cas pour tous ?'),
      free('Soit on baisse les impôts, soit les entreprises partent.', 'Either taxes go down or companies leave.', 'deux choix seulement ?'),
    ], chk('Ces trois arguments reposent sur...', ['une idée qu’ils ne disent pas', 'une étude citée', 'un fait vérifié'], 0,
      'Cause supposée, généralisation, faux choix : trois présupposés. EN: three unstated assumptions.')),
    ctl('Le faux choix', '« Soit on rouvre la rue, soit le centre meurt. » Ce raisonnement oublie...',
      ['la mercerie', 'qu’il existe sans doute d’autres solutions'], 1,
      'Un parking proche, des livraisons, des horaires : le choix n’est pas binaire. EN: there are other options.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['presuppose'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a4-piege', layer: 'core', swipe: true,
  title: 'Six idées avalées sans le voir',
  rule: {
    title: 'Ce qui n’est pas dit compte aussi',
    body: 'Un lecteur pressé reprend l’argument avec son présupposé. Un lecteur critique le sort au grand jour, sans se moquer : il dit ce que l’argument suppose. EN: a critical reader states the assumption aloud, without mockery.',
  },
  cards: [
    { promptLabel: 'la cause supposée', promptSound: 'Les commerces ont fermé à cause de la rue piétonne.', fr: src(E(1455)).fr, ipa: ipaOf(E(1455)), tip: 'La lettre dit « depuis que », pas « parce que ». EN: since, not because.' },
    { promptLabel: 'le passé qui dure', promptSound: 'Ces boutiques marchaient bien, donc elles marcheraient encore.', fr: src(E(1461)).fr, ipa: ipaOf(E(1461)), tip: 'Vingt ans ont passé : les habitudes d’achat aussi. EN: twenty years have changed shopping habits.' },
    { promptLabel: 'le faux choix', promptSound: 'Il n’y a que deux solutions : rouvrir ou mourir.', fr: src(E(1463)).fr, ipa: ipaOf(E(1463)), tip: 'Le « soit... soit... » cache toutes les autres pistes. EN: either/or hides other options.' },
    { promptLabel: 'le piéton imaginé', promptSound: 'Les piétons ne font pas leurs courses.', fr: src(E(1467)).fr, ipa: ipaOf(E(1467)), tip: 'La lettre l’affirme sans chiffre : c’est son présupposé. EN: asserted, never shown.' },
    { promptLabel: 'la généralisation', promptSound: 'Tous les jeunes passent leur vie sur leur téléphone.', fr: src(E(1468)).fr, ipa: ipaOf(E(1468)), tip: 'Beaucoup, ce n’est pas tous. EN: many is not all.' },
    { promptLabel: 'la nostalgie', promptSound: 'La rue d’avant était forcément meilleure.', fr: src(E(1469)).fr, ipa: ipaOf(E(1469)), tip: 'Le regret est sincère ; il n’est pas un argument. EN: regret is sincere, not an argument.' },
  ],
  drill: [
    { promptSay: 'Après, ce n’est pas forcément à ... de.', opts: ['côté', 'cause'], correct: 1 },
    { promptSay: 'Un présupposé, c’est une idée que le texte ne ... pas.', opts: ['dit', 'croit'], correct: 0 },
    { promptSay: 'M. Chappuis suppose que les clients viennent en ... .', opts: ['bus', 'vélo', 'voiture'], correct: 2 },
    { promptSay: '« Soit..., soit... » oublie qu’il existe d’autres ... .', opts: ['solutions', 'rues'], correct: 0 },
    { promptSay: '« Tous les jeunes » : c’est une ... .', opts: ['preuve', 'généralisation', 'source'], correct: 1 },
    { promptSay: 'Ce qui marchait il y a vingt ans ne marche pas ... aujourd’hui.', opts: ['jamais', 'forcément'], correct: 1 },
    { promptSay: 'Selon la lettre, les piétons n’... rien.', opts: ['achètent', 'regardent'], correct: 0 },
    { promptSay: 'Pour trouver le présupposé, demande-toi ce qu’il faut ... .', opts: ['écrire', 'compter', 'croire'], correct: 2 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Ce qui n’est pas dit' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qu’un lecteur pressé a avalé' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six lectures critiques' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-24-piege-presupposes'), say: REFRAME, terms: ['presuppose'],
};

const A4_REPONSE = pourTaReponse('a4-reponse', 'Tu nommes le présupposé, sans mépris', [
  grp('Nommer le présupposé', [
    it(E(1456), 'il suppose'),
    it(E(1459), 'le raisonnement repose sur'),
  ], chk('Laquelle nomme un présupposé ?', ['L’auteur n’aime pas la rue piétonne.', 'L’auteur suppose que les clients viennent en voiture.'], 1,
    'La seconde dit quelle idée non dite soutient l’argument. EN: the second names the unstated idea.')),
  grp('Juste, sans mépris', [
    free('Ce lecteur ne comprend rien à la ville moderne.', 'This reader understands nothing about the modern city.', 'une attaque'),
    it(E(1469), 'une critique qui respecte le regret'),
  ], chk('Laquelle est une critique recevable ?', ['la première', 'la seconde'], 1,
    'On critique un raisonnement, pas une personne. EN: criticise the reasoning, not the person.')),
], ['presuppose', 'citation']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le présupposé', 'Un présupposé est...', ['une idée que l’argument suppose sans la dire', 'une citation', 'une preuve chiffrée'], 0,
    'On ne le lit pas : on le déduit. EN: you infer it, you do not read it.'),
  ctl('Depuis que', '« Depuis que X, Y. » Le texte prouve que X cause Y ?', ['oui', 'non, il le laisse croire'], 1,
    'Deux faits qui se suivent peuvent avoir d’autres causes. EN: sequence is not cause.'),
  ctl('La question', 'Pour trouver un présupposé, tu te demandes...', ['qui a écrit le texte', 'combien il y a de mots', 'ce qu’il faut croire pour que l’argument marche'], 2,
    'La question qui fait apparaître l’idée cachée. EN: the question that reveals the hidden idea.'),
], ['presuppose']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Ce que le texte suppose',
    opener: {
      line: 'Un lecteur en colère écrit au journal, et sa lettre tient sur trois idées qu’il ne dit jamais : ici tu les fais apparaître. EN: An angry reader writes in, and the letter rests on three ideas it never states: here you bring them out.',
      imageRef: 'lessons/lecture-critique/act04.jpg',
    },
    sections: [],
    milestone: 'Tu fais apparaître l’idée qu’un argument suppose sans la dire. EN: You can bring out the idea an argument assumes without stating it.',
    estScreens: 30, restPoints: ['a4-presupposes', 'a4-piege'],
  },
  sections: [A4_COURRIER, A4_PRESUPPOSES, A4_DEVOILER, A4_PIEGE, A4_REPONSE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LA DISTANCE DE L’AUTEUR
 *
 *  TEXT: a local news story on a pool overrun. MOVE: read how far the
 *  journalist stands from each claim (conditionnel de distance, il
 *  semblerait que, prétendument, à en croire, quotation marks) and what the
 *  reporting verb says (reconnaître, prétendre, assurer, démentir). Goes
 *  past b1.37 act 9 and b1.34 acts 5 and 6.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_PISCINE: Sec<'reading'> = {
  type: 'reading', id: 'a5-piscine', layer: 'core', questionsInModal: true,
  title: 'La piscine de Belmont', frSub: 'Qui garantit quoi ?',
  text: PISCINE_TEXT,
  glossary: [
    { word: 'appel d’offres', en: 'call for tenders', note: 'Mise en concurrence de plusieurs entreprises pour un contrat public.' },
  ],
  questions: [
    { q: 'Devine le sens : « Le maire reconnaît un dépassement. » Qu’est-ce qu’un dépassement ici ?', a: 'Le coût a dépassé le budget prévu : 7,8 millions au lieu de 4.' },
    { q: 'Le journaliste affirme-t-il que la facture est de 7,8 millions ?', a: 'Non : « aurait coûté », « atteindrait », « selon des documents ». Il rapporte, il ne garantit pas.' },
    { q: 'Pourquoi « raisonnable » est-il entre guillemets ?', a: 'C’est le mot du maire. Les guillemets disent que le journaliste ne le reprend pas à son compte.' },
    { q: 'Que pense le journaliste de la raison donnée pour l’absence d’appel d’offres ? Quel mot le montre ?', a: 'Il en doute : « prétendument pour gagner du temps ».' },
    { q: 'Le journaliste accuse-t-il la mairie ?', a: 'Non, pas directement. Mais ses marques de distance et les faits qu’il choisit (le beau-frère, les pièces introuvables) orientent le lecteur vers le doute.' },
  ],
  audio: REC('rec-b2-24-piscine'), say: REFRAME, terms: ['distance'],
};

const A5_MARQUEURS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a5-marqueurs', layer: 'core', sheetId: 'sheet-position',
  title: 'Six marques de distance',
  cols: ['Marque', 'Exemple', 'Ce qu’elle dit'],
  rows: [
    { cells: ['le conditionnel', 'aurait coûté', 'pas confirmé'], say: src(E(1470)).fr,
      detail: { title: 'Le conditionnel de distance', body: `${Cap(CONDITIONNEL_REF)} disait : « ${B108_REFRAME} » Dans la presse, il dit aussi : ce qu’on rapporte, sans le garantir. EN: the press conditional reports without guaranteeing.`, say: src(E(1485)).fr } },
    { cells: ['selon, d’après', 'selon des documents', 'la source'], say: src(E(1471)).fr,
      detail: { title: 'La source', body: `${Cap(LECTURE_REF)} te l’a montré. À B2, regarde aussi quelle source : des documents, une personne, « nos sources » sans nom. EN: check which source.`, say: src(B137(1162)).fr } },
    { cells: ['il semblerait que', 'certaines pièces seraient introuvables', 'un doute prudent'], say: src(E(1474)).fr,
      detail: { title: 'Il semblerait que', body: 'Le journaliste avance une information sans la signer. Souvent suivi du subjonctif. EN: a cautious, unsigned claim.', say: src(E(1490)).fr } },
    { cells: ['prétendument, soi-disant', 'prétendument pour gagner du temps', 'le journaliste doute'], say: src(E(1473)).fr,
      detail: { title: 'Prétendument, soi-disant', body: 'La raison est donnée par quelqu’un d’autre, et le journaliste n’y croit guère. EN: the stated reason is doubted.', say: src(E(1491)).fr } },
    { cells: ['à en croire', 'à en croire l’entreprise', 'si on la croit'], say: src(E(1488)).fr,
      detail: { title: 'À en croire', body: 'Tout repose sur la parole de cette personne, et rien d’autre. EN: it rests on that person’s word alone.', say: src(E(1478)).fr } },
    { cells: ['les guillemets', 'un dépassement « raisonnable »', 'c’est son mot'], say: src(E(1472)).fr,
      detail: { title: 'Les guillemets', body: `Le mot est cité, pas repris. ${Cap(MEDIAS_REF)} disait : « ${B134_REFRAME} » EN: the word is quoted, not endorsed.`, say: src(E(1489)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['distance'],
};

const A5_VERBES: Sec<'examples'> = {
  type: 'examples', id: 'a5-verbes', layer: 'core', sheetId: 'sheet-position',
  title: 'Six verbes qui jugent',
  examples: [
    ex(E(1472), 'reconnaître : il admet ce qui le dérange'),
    ex(E(1481), 'admettre : une erreur avouée'),
    ex(E(1487), 'prétendre : le journaliste doute de lui'),
    ex(E(1483), 'assurer : il affirme avec force, sans preuve'),
    ex(E(1482), 'se targuer : il se vante'),
    ex(E(1475), 'démentir : il nie'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['distance', 'position'],
};

const A5_DEGRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-degre', layer: 'core', size: 'lg',
  title: 'Garanti ou rapporté', frSub: 'Le degré de certitude',
  groups: [
    grp('Rapporté, pas garanti', [
      it(B137(1161), 'selon : la source'),
      it(B137(1162), 'd’après, et le conditionnel'),
      it(E(1490), 'il semblerait que'),
      it('fr.b1.journalisme.1183', 'une source sans nom'),
    ], chk('Dans ces quatre phrases, le journaliste...', ['rapporte sans garantir', 'affirme un fait vérifié'], 0,
      'Chaque phrase renvoie à quelqu’un d’autre, ou à personne. EN: each points to someone else, or no one.')),
    grp('Le verbe juge la personne', [
      it(E(1486), 'reconnaît'),
      it(E(1487), 'prétend'),
      it(E(1484), 'affirme'),
    ], chk('Quel verbe montre que le journaliste doute de la personne ?', ['prétend', 'reconnaît', 'affirme'], 0,
      'Prétendre, c’est dire sans convaincre. Reconnaître, c’est avouer. Affirmer reste neutre. EN: prétendre signals doubt.')),
    ctl('Les guillemets', '« Ce “petit retard”, comme l’appelle la mairie, dure depuis un an. » Pour le journaliste, le retard est...',
      ['petit, comme dit la mairie', 'plus grand que ce qu’elle dit'], 1,
      'Un an, ce n’est pas petit : les guillemets marquent l’ironie. EN: a year is not small; the quotes mark irony.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['distance'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a5-ecoute', layer: 'core', hideLines: true,
  title: 'Le bulletin de midi', frSub: 'Qui garantit, qui doute ?',
  lines: [ln(E(1484)), ln(E(1485)), ln(E(1486)), ln(E(1487)), ln(E(1488)), ln(E(1489)), ln(E(1490)), ln(E(1491))],
  questions: [
    { q: 'Sur le stade, le journaliste met-il une distance avec le président du club ?', opts: ['Non : un verbe neutre, affirmer.', 'Oui : il le fait prétendre.'], correct: 0, why: 'Affirmer rapporte sans juger. EN: affirmer is neutral.' },
    { q: 'Le retard de quatre mois est-il confirmé ?', opts: ['Oui.', 'Non, il est au conditionnel.'], correct: 1, why: '« auraient pris » : l’information est rapportée. EN: the conditional reports it.' },
    { q: 'La ministre admet-elle un problème de budget ?', opts: ['Oui, elle le reconnaît.', 'Non, elle le dément.'], correct: 0, why: 'Reconnaître, c’est avouer ce qui dérange. EN: she admits it.' },
    { q: 'Le journaliste croit-il le directeur ?', opts: ['Il en doute.', 'Oui, sans réserve.'], correct: 0, why: 'Il le fait « prétendre ». EN: prétendre signals doubt.' },
    { q: 'Selon qui tout va bien ?', opts: ['la ministre', 'le journaliste', 'l’entreprise'], correct: 2, why: '« À en croire l’entreprise » : c’est sa parole seule. EN: on the company’s word alone.' },
    { q: 'Pourquoi le mot « petit » est-il marqué ?', opts: ['le chantier est petit', 'la mairie minimise un retard d’un an'], correct: 1, why: 'Le mot est cité pour montrer l’écart avec la réalité. EN: the word is quoted to show the gap.' },
  ],
  audio: REC('rec-b2-24-bulletin'), say: REFRAME, terms: ['distance'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a5-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre distances effacées',
  errors: [
    { wrong: 'La facture de la piscine atteint 7,8 millions.', right: 'Selon des documents, la facture atteindrait 7,8 millions.',
      why: 'Normal : le chiffre est précis, il a l’air sûr. Mais le conditionnel dit qu’il n’est pas confirmé. EN: precise is not confirmed.' },
    { wrong: 'Le maire reconnaît un dépassement raisonnable.', right: 'Le maire reconnaît un dépassement, qu’il juge « raisonnable ».',
      why: 'Sans guillemets, « raisonnable » devient l’avis du journaliste. EN: without quotes, the word becomes the journalist’s.' },
    { wrong: 'Le contrat a été attribué sans appel d’offres pour gagner du temps.', right: 'Le contrat a été attribué sans appel d’offres, prétendument pour gagner du temps.',
      why: 'Sans « prétendument », la raison devient un fait. EN: without prétendument, the excuse becomes fact.' },
    { wrong: 'Le journaliste accuse le maire de mentir.', right: 'Le journaliste rapporte les accusations, sans les reprendre à son compte.',
      why: 'L’autre excès : prendre la distance pour une accusation. Le journaliste doute, il n’accuse pas. EN: doubt is not accusation.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['distance'],
};

const A5_REPONSE = pourTaReponse('a5-reponse', 'Tu gardes la distance du texte', [
  grp('Rendre la distance', [
    it(E(1493), 'ta phrase'),
    it('fr.b1.journalisme.1157', 'le réflexe de la leçon 34 du B1'),
    it(E(1492), 'ta méthode'),
  ], chk('Dans ta réponse, tu écris...', ['« Le journaliste rapporte ces chiffres au conditionnel, sans les garantir. »', '« La piscine a coûté 7,8 millions. »'], 0,
    'Ta réponse rend la prudence du texte. EN: your response keeps the text’s caution.')),
  grp('Le verbe exact', [
    free('Le maire dit qu’il y a un dépassement.', 'The mayor says there is an overrun.', 'dire : trop plat'),
    free('Le maire reconnaît un dépassement.', 'The mayor admits an overrun.', 'reconnaître : il avoue'),
  ], chk('Laquelle rend la position du maire ?', ['la première', 'la seconde'], 1,
    'Reconnaître dit qu’il avoue à contrecœur. EN: reconnaître says he concedes it.')),
], ['distance', 'citation']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le conditionnel', '« La facture atteindrait 7,8 millions. » C’est...', ['un fait confirmé', 'une information rapportée'], 1,
    'Le conditionnel de la presse rapporte sans garantir. EN: reported, not confirmed.'),
  ctl('Prétendument', '« Prétendument pour gagner du temps » : le journaliste...', ['y croit', 'en doute', 'l’a vérifié'], 1,
    'Prétendument : c’est la raison donnée, pas forcément la vraie. EN: the stated reason, doubted.'),
  ctl('Le verbe', 'Quel verbe dit qu’on avoue quelque chose de gênant ?', ['reconnaître', 'se targuer', 'démentir'], 0,
    'Reconnaître : admettre ce qui dérange. EN: to admit something awkward.'),
], ['distance']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'La distance de l’auteur',
    opener: {
      line: 'Aurait coûté, prétendument, « raisonnable » : ici tu mesures la distance entre le journaliste et ce qu’il rapporte. EN: Reportedly, supposedly, "reasonable": here you measure the distance between the journalist and what he reports.',
      imageRef: 'lessons/lecture-critique/act05.jpg',
    },
    sections: [],
    milestone: 'Tu lis le degré de certitude d’une information et le jugement caché dans un verbe. EN: You can read how certain a claim is and the judgement hidden in a reporting verb.',
    estScreens: 38, restPoints: ['a5-marqueurs', 'a5-degre', 'a5-erreurs'],
  },
  sections: [A5_PISCINE, A5_MARQUEURS, A5_VERBES, A5_DEGRE, A5_ECOUTE, A5_ERREURS, A5_REPONSE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LE TON ET L’IRONIE
 *
 *  TEXT: an ironic blog post. MOVE: catch the sentence that means its
 *  opposite (antiphrasis, ironic quotation marks, exaggeration, the absurd
 *  comparison), and find the serious thesis under the irony.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_BLOG: Sec<'reading'> = {
  type: 'reading', id: 'a6-blog', layer: 'core', questionsInModal: true,
  title: 'Le blog de Léa', frSub: 'Elle dit merci. Le pense-t-elle ?',
  text: BLOG_TEXT,
  glossary: [
    { word: 'une goutte de sang', en: 'a drop of blood', note: 'Exagération : personne ne demande de sang pour un mot de passe.' },
  ],
  questions: [
    { q: 'Devine le sens : « La mairie annonce fièrement que 70 % des demandes... ». Que veut dire « fièrement » ?', a: 'Avec fierté, comme d’une réussite. Léa, elle, n’y voit aucune réussite.' },
    { q: 'Léa est-elle contente de la fermeture du guichet ? Comment le sais-tu ?', a: 'Non. Tout ce qu’elle raconte est un échec : mot de passe absurde, facture refusée, numéro qui renvoie au site.' },
    { q: 'Relève trois marques d’ironie.', a: '« Quelle bonne nouvelle », « sans doute trop moderne », « On n’arrête pas le progrès », les guillemets de « simplification », « Bref, bravo. Vraiment. »' },
    { q: 'Que veut montrer l’exemple des boulangeries ?', a: 'Que le chiffre de 70 % ne prouve rien : quand il n’y a plus d’autre moyen, tout le monde passe par le seul qui reste.' },
    { q: 'Où le ton devient-il sérieux, et quelle est la vraie thèse ?', a: 'Avec Mme Joly : supprimer le guichet exclut les habitants sans Internet, et la mairie présente comme un succès ce qui est une obligation.' },
  ],
  audio: REC('rec-b2-24-blog'), say: REFRAME, terms: ['ironie'],
};

const A6_SIGNES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a6-signes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-position',
  title: 'Quatre signes d’ironie', frSub: 'Quand le texte dit l’inverse',
  hint: 'Quatre cartes. Cherche l’écart entre les mots et la situation.',
  audio: REC('rec-b2-24-signes'), say: REFRAME, terms: ['ironie'],
  cards: [
    { head: 'Dire le contraire', label: 'l’antiphrase', fr: src(E(1494)).fr, sub: rsOf(E(1494)),
      body: 'Une « bonne nouvelle » que tout le texte présente comme mauvaise. L’écart avec la situation signale l’ironie. EN: the gap with the situation signals irony.' },
    { head: 'Les guillemets ironiques', label: 'le mot de l’autre', fr: src(E(1497)).fr, sub: rsOf(E(1497)),
      body: 'Léa reprend le mot de la mairie pour s’en moquer : la « simplification » a tout compliqué. EN: she quotes the town hall’s word to mock it.' },
    { head: 'L’exagération', label: 'trop pour être vrai', fr: 'une goutte de sang', sub: '[ün GOOT duh SAHⁿ]',
      body: 'Un détail impossible montre que l’auteur force le trait pour critiquer. EN: an impossible detail shows deliberate exaggeration.' },
    { head: 'La comparaison absurde', label: 'l’exemple qui démonte', fr: 'Si l’on fermait toutes les boulangeries sauf une...', sub: '[see lohⁿ fehr-MEH toot lay boo-lahⁿzh-REE sohf ÜN]',
      body: 'Un cas ridicule, construit comme le raisonnement de la mairie, pour en montrer le vide. EN: an absurd parallel exposes the reasoning.' },
  ],
};

const A6_LIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-lire', layer: 'core', size: 'lg',
  title: 'Ironique ou sérieux ?', frSub: 'Lis la situation, pas seulement les mots',
  groups: [
    grp('Quatre phrases', [
      it(E(1504), 'dans un bouchon'),
      it(E(1505), 'sur le quai'),
      it(E(1506), 'après une réforme'),
      it(E(1507), 'dans un éditorial'),
    ], chk('Combien de ces phrases sont ironiques ?', ['trois', 'une', 'quatre'], 0,
      'Les trois premières disent le contraire de la situation ; la dernière est sérieuse. EN: three say the opposite of the situation.')),
    grp('Ce que Léa pense vraiment', [
      it(E(1508), 'sa position'),
      it(E(1511), 'la simplification'),
      it(E(1510), 'le numéro'),
    ], chk('La vraie thèse du billet, c’est...', ['le guichet en ligne exclut une partie des habitants', 'le site est très moderne'], 0,
      'L’ironie sert une critique sérieuse : Mme Joly en est la preuve. EN: the irony serves a serious criticism.')),
    ctl('Le contexte', '« Bravo pour ce beau travail. » Seule, cette phrase est...',
      ['forcément ironique', 'impossible à juger sans contexte'], 1,
      'Sans situation, rien ne dit si c’est un compliment. EN: without context you cannot tell.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['ironie'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a6-piege', layer: 'core', swipe: true,
  title: 'Six phrases prises au mot',
  rule: {
    title: 'Prise au mot, l’ironie retourne le texte',
    body: 'Si une phrase contredit tout le reste du texte, elle ne dit pas ce qu’elle semble dire. Lis-la avec la situation, puis dis ce que l’auteur pense vraiment. EN: a sentence that contradicts the rest of the text does not mean what it says.',
  },
  cards: [
    { promptLabel: 'le compliment qui critique', promptSound: 'L’auteure trouve que la fermeture du guichet est une bonne nouvelle.', fr: src(E(1508)).fr, ipa: ipaOf(E(1508)), tip: 'Tout le billet raconte un échec. EN: the whole post describes a failure.' },
    { promptLabel: 'le « sans doute »', promptSound: 'L’auteure pense que le PDF est trop moderne.', fr: src(E(1509)).fr, ipa: ipaOf(E(1509)), tip: 'Le PDF est banal : c’est le site qui est absurde. EN: the PDF is ordinary.' },
    { promptLabel: 'le progrès', promptSound: 'L’auteure admire le progrès.', fr: src(E(1510)).fr, ipa: ipaOf(E(1510)), tip: 'Un numéro qui renvoie au site n’est pas un progrès. EN: that is not progress.' },
    { promptLabel: 'les guillemets', promptSound: 'La mairie a simplifié les démarches.', fr: src(E(1511)).fr, ipa: ipaOf(E(1511)), tip: 'Les guillemets reprennent le mot pour le contester. EN: the quotes contest the word.' },
    { promptLabel: 'le chiffre', promptSound: 'Les habitants préfèrent faire leurs demandes en ligne.', fr: src(E(1512)).fr, ipa: ipaOf(E(1512)), tip: 'Pas de choix, pas de préférence. EN: no choice, no preference.' },
    { promptLabel: 'la chute', promptSound: 'Léa félicite la mairie.', fr: src(E(1502)).fr, ipa: ipaOf(E(1502)), tip: '« Bref, bravo. Vraiment. » : le « vraiment » souligne l’ironie. EN: vraiment underlines the irony.' },
  ],
  drill: [
    { promptSay: '« Quelle bonne nouvelle » annonce ici une ... nouvelle.', opts: ['mauvaise', 'bonne'], correct: 0 },
    { promptSay: 'L’ironie dit le ... de ce qu’elle pense.', opts: ['résumé', 'contraire'], correct: 1 },
    { promptSay: 'Une goutte de sang, c’est une ... .', opts: ['exagération', 'preuve', 'source'], correct: 0 },
    { promptSay: 'Les guillemets autour de « simplification » marquent une ... .', opts: ['citation neutre', 'définition', 'moquerie'], correct: 2 },
    { promptSay: 'Les 70 % ne prouvent rien : il n’y a plus d’autre ... .', opts: ['site', 'moyen'], correct: 1 },
    { promptSay: 'Le ton devient sérieux quand Léa parle de sa ... .', opts: ['voisine', 'facture'], correct: 0 },
    { promptSay: 'Pour repérer l’ironie, il faut lire le ... .', opts: ['titre seul', 'dernier mot', 'contexte'], correct: 2 },
    { promptSay: 'Léa pense que la mairie a ... en fermant le guichet.', opts: ['bien fait', 'eu tort'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Prise au mot' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qu’un lecteur littéral a compris' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six lectures justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-24-piege-ironie'), say: REFRAME, terms: ['ironie'],
};

const A6_REPONSE = pourTaReponse('a6-reponse', 'Tu nommes le ton et tu le prouves', [
  grp('Nommer le ton', [
    it(E(1503), 'le ton et ce qu’il sert'),
    it(E(1502), 'la position'),
  ], chk('Dans ta réponse, tu écris...', ['« Léa trouve que c’est une bonne nouvelle. »', '« Le ton est ironique : Léa critique la fermeture du guichet. »'], 1,
    'Tu nommes le ton, puis ce qu’il veut dire. EN: name the tone, then what it means.')),
  grp('Citer l’ironie', [
    it(E(1496), 'la formule'),
    it(E(1498), 'la chute'),
  ], chk('Pour prouver l’ironie, tu cites...', ['« On n’arrête pas le progrès », juste après un numéro qui renvoie au site', 'le nom de la mairie'], 0,
    'Une citation qui montre l’écart entre les mots et la situation. EN: quote the gap between words and situation.')),
], ['ironie', 'citation']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('L’ironie', 'L’ironie, c’est...', ['dire le contraire de ce qu’on pense', 'mentir pour tromper'], 0,
    'L’ironiste veut être compris : il n’y a pas de tromperie. EN: irony wants to be understood.'),
  ctl('Le repère', 'Le signe le plus sûr de l’ironie est...', ['un mot difficile', 'un chiffre', 'l’écart entre les mots et la situation'], 2,
    'Une « bonne nouvelle » dans un récit d’échec. EN: good news inside a story of failure.'),
  ctl('La thèse', 'Sous l’ironie, un billet a...', ['une thèse sérieuse', 'aucune thèse'], 0,
    'On se moque pour critiquer quelque chose. EN: mockery serves a criticism.'),
], ['ironie']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Le ton et l’ironie',
    opener: {
      line: 'Léa dit « quelle bonne nouvelle » et pense l’inverse : ici tu apprends à ne pas prendre un texte au mot. EN: Léa says "what good news" and means the opposite: here you learn not to take a text at its word.',
      imageRef: 'lessons/lecture-critique/act06.jpg',
    },
    sections: [],
    milestone: 'Tu repères l’ironie et tu dis ce que l’auteur pense vraiment, citation à l’appui. EN: You can spot irony and say what the writer really thinks, with a quotation.',
    estScreens: 30, restPoints: ['a6-signes', 'a6-piege'],
  },
  sections: [A6_BLOG, A6_SIGNES, A6_LIRE, A6_PIEGE, A6_REPONSE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — À QUI ÇA PROFITE
 *
 *  TEXT: a transport company's press release, then the news story about the
 *  same plan. MOVE: ask who speaks and what they gain, translate the soft
 *  word, list what the text leaves out; without turning interest into a lie.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_DEUX: Sec<'reading'> = {
  type: 'reading', id: 'a7-deux', layer: 'core', questionsInModal: true,
  title: 'Un plan, deux textes', frSub: 'Le communiqué, puis l’article',
  text: TRL_TEXT,
  glossary: [
    { word: 'bourgmestre', en: 'mayor (in Belgium)', note: 'En Belgique, le maire de la commune.' },
  ],
  questions: [
    { q: 'Devine le sens : « TRL, qui a dégagé un bénéfice de 4,2 millions ». Que veut dire « dégager un bénéfice » ?', a: 'Gagner de l’argent, faire un profit : l’entreprise n’est pas en difficulté.' },
    { q: 'Qui parle dans le texte A ? Et dans le texte B ?', a: 'A : l’entreprise elle-même, par son communiqué. B : un journaliste, qui donne aussi la parole au syndicat et à une bourgmestre.' },
    { q: 'Que devient le « service à la demande » dans le texte B ?', a: 'La suppression de neuf lignes rurales : il faut réserver la veille, et il n’y a plus de bus le week-end.' },
    { q: 'Qu’est-ce que le communiqué ne dit pas ?', a: 'Le week-end sans bus, la réservation la veille, les vingt postes non remplacés, et que la Région paie les deux tiers des bus électriques.' },
    { q: 'Le communiqué ment-il ?', a: 'Pas vraiment : ce qu’il dit est vrai. Mais il choisit ses mots (plus souple, efficace) et tait ce qui dérange.' },
  ],
  audio: REC('rec-b2-24-trl'), say: REFRAME, terms: ['interet'],
};

const A7_MOTS: Sec<'examples'> = {
  type: 'examples', id: 'a7-mots', layer: 'core', sheetId: 'sheet-interets',
  title: 'Les mots doux, traduits',
  examples: [
    ex(E(1514), 'trois adjectifs flatteurs, aucun chiffre sur les pertes'),
    ex(E(1515), 'les autres lignes perdent donc des moyens'),
    ex(E(1516), 'bénéficier, pour dire : réserver la veille'),
    ex(E(1522), 'souvent : supprimer des lignes ou des arrêts'),
    ex(E(1523), 'souvent : une coupe qu’on ne veut pas nommer'),
    ex(E(1524), 'des postes supprimés, en douceur'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['interet'],
};

const A7_QUI: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-qui', layer: 'core', size: 'lg',
  title: 'Qui parle, qui gagne', frSub: 'Et ce qui manque',
  groups: [
    grp('Qui parle, et pour qui', [
      it(E(1530), 'la règle du communiqué'),
      it(E(1527), 'la voix des villages'),
      it(E(1528), 'le chiffre que l’article ajoute'),
    ], chk('Le directeur général cité dans le communiqué parle au nom de...', ['l’entreprise', 'les voyageurs', 'la Région'], 0,
      'Il signe pour TRL : son rôle est de présenter le plan sous son meilleur jour. EN: he speaks for the company.')),
    grp('Ce que le communiqué tait', [
      it(E(1517), 'la suppression'),
      it(E(1518), 'la réservation'),
      it(E(1519), 'le financement'),
      it(E(1531), 'le week-end'),
    ], chk('Pourquoi le communiqué ne dit-il pas que la Région paie la plupart des bus ?', ['L’entreprise préfère s’en attribuer le mérite.', 'Parce que c’est faux.'], 0,
      'Taire un fait vrai n’est pas mentir, mais c’est choisir. EN: leaving a fact out is a choice, not a lie.')),
    ctl('Le bon réflexe', 'Savoir à qui profite un texte, cela sert à...', ['prouver qu’il ment', 'savoir quoi vérifier ailleurs'], 1,
      'L’intérêt ne rend pas un texte faux : il te dit où regarder. EN: interest tells you where to look.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['interet'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a7-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre lectures trop rapides',
  errors: [
    { wrong: 'TRL améliore le service dans les villages.', right: 'TRL supprime les lignes régulières des villages et les remplace par un service à réserver la veille.',
      why: 'Normal : « plus souple » sonne comme un progrès. L’article montre ce que le mot recouvre. EN: the soft word hides a cut.' },
    { wrong: 'TRL paie quinze bus électriques.', right: 'Les quinze bus électriques sont financés aux deux tiers par la Région.',
      why: 'Le communiqué dit « investira », sans préciser avec quel argent. EN: invest, but with whose money?' },
    { wrong: 'Le communiqué ment, donc il faut tout rejeter.', right: 'Le communiqué choisit ses mots et ses faits : il faut le compléter, pas le jeter.',
      why: 'L’excès inverse : un texte intéressé peut dire des choses vraies. EN: an interested text can still be true.' },
    { wrong: 'L’article est neutre, donc il dit tout.', right: 'L’article donne surtout la parole aux opposants : il fait aussi des choix.',
      why: 'Aucun texte ne dit tout. Le lecteur critique pèse aussi l’article. EN: the article makes choices too.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['interet'],
};

const A7_REPONSE = pourTaReponse('a7-reponse', 'Tu nommes l’intérêt, sans procès d’intention', [
  grp('Nommer l’intérêt', [
    it(E(1526), 'une phrase de réponse'),
    it(E(1529), 'la méthode'),
  ], chk('Laquelle est une phrase de réponse critique ?', ['« TRL modernise son réseau. »', '« Le communiqué présente comme un progrès ce qui est une suppression. »'], 1,
    'La seconde dit ce que fait le texte, pas seulement ce qu’il dit. EN: the second says what the text does.')),
  grp('Prouvable ou non', [
    free('Le directeur ment pour faire des bénéfices.', 'The director lies to make profits.', 'une accusation'),
    free('Le communiqué, écrit par l’entreprise, ne dit rien des lignes supprimées.', 'The press release, written by the company, says nothing about the lines cut.', 'un constat'),
  ], chk('Laquelle peux-tu prouver avec le texte ?', ['la première', 'la seconde'], 1,
    'On juge ce qui est écrit, pas les intentions cachées. EN: judge what is written, not hidden motives.')),
], ['interet', 'citation']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le communiqué', 'Un communiqué de presse parle au nom...', ['du journal', 'de celui qui l’écrit'], 1,
    'L’entreprise écrit sur elle-même. EN: the organisation writes about itself.'),
  ctl('Le mot doux', '« Optimiser le réseau » peut cacher...', ['une suppression', 'une hausse de salaire', 'un nouveau logo'], 0,
    'Cherche ce que le mot remplace. EN: look for what the word replaces.'),
  ctl('L’intérêt', 'Un texte intéressé est-il forcément faux ?', ['oui', 'non, mais il faut le vérifier'], 1,
    'Il choisit ; à toi de compléter. EN: it selects; you complete.'),
], ['interet']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'À qui ça profite',
    opener: {
      line: 'L’entreprise parle de progrès, le journal parle de lignes supprimées : ici tu demandes qui gagne à chaque mot. EN: The company speaks of progress, the paper of cut lines: here you ask who gains from each word.',
      imageRef: 'lessons/lecture-critique/act07.jpg',
    },
    sections: [],
    milestone: 'Tu dis qui parle, ce qu’il gagne à le dire et ce que son texte tait, sans l’accuser de mentir. EN: You can say who speaks, what they gain and what their text leaves out, without calling it a lie.',
    estScreens: 30, restPoints: ['a7-mots', 'a7-erreurs'],
  },
  sections: [A7_DEUX, A7_MOTS, A7_QUI, A7_ERREURS, A7_REPONSE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — FAIT, OPINION, INTERPRÉTATION
 *
 *  TEXT: a mattress advert with its footnotes. MOVE: sort fact, opinion and
 *  interpretation, and catch the claim dressed as a fact. Goes past b1.37
 *  act 9 (fact vs opinion) with the third category, interpretation.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_PUB: Sec<'reading'> = {
  type: 'reading', id: 'a8-pub', layer: 'core', questionsInModal: true,
  title: 'Une publicité, notes comprises', frSub: 'Lis aussi les petites lignes',
  text: MATELAS_TEXT,
  glossary: [
    { word: 'mémoire de forme', en: 'memory (foam)', note: 'Une mousse à mémoire de forme prend la forme du corps.' },
  ],
  questions: [
    { q: 'Devine le sens : « un tissu refroidissant ». Que fait ce tissu ?', a: 'Il rafraîchit, il garde le corps au frais : re-, froid, -issant.' },
    { q: 'Relève deux faits vérifiables.', a: 'Livré en quarante-huit heures, essai de cent nuits, 30 % jusqu’au 15 octobre, trois couches de mousse.' },
    { q: 'Relève deux opinions.', a: '« le meilleur sommeil de votre vie », « je suis une autre personne ».' },
    { q: '« Ce n’est pas votre faute : c’est votre matelas. » Fait, opinion ou interprétation ?', a: 'Une interprétation : la pub propose une cause à ta fatigue, sans la prouver.' },
    { q: 'Que valent « cliniquement testé » et « neuf clients sur dix » ? Où est la réponse ?', a: 'Très peu : dans les notes en bas, un test fait par la marque sur 24 personnes, et des avis de clients qui ont choisi d’en laisser un.' },
  ],
  audio: REC('rec-b2-24-matelas'), say: REFRAME, terms: ['interpreter'],
};

const A8_TROIS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a8-trois', layer: 'core', sheetId: 'sheet-interets',
  title: 'Six choses qu’on lit comme des faits',
  cols: ['Ce que c’est', 'Exemple', 'Ce que tu en fais'],
  rows: [
    { cells: ['un fait vérifiable', 'livré en 48 heures', 'tu le reprends'], say: src(E(1544)).fr,
      detail: { title: 'Le fait', body: 'On peut le vérifier, et il ne dépend pas de l’avis de celui qui parle. EN: a fact can be checked, whoever says it.', say: src(E(1538)).fr } },
    { cells: ['une opinion', 'le meilleur sommeil de votre vie', 'tu l’attribues'], say: src(E(1535)).fr,
      detail: { title: 'L’opinion', body: 'Un jugement de valeur : beau, injuste, le meilleur. Dans ta réponse, dis qui le pense. EN: a value judgement; say whose it is.', say: src(E(1540)).fr } },
    { cells: ['une interprétation', 'c’est votre matelas', 'tu la discutes'], say: src(E(1536)).fr,
      detail: { title: 'L’interprétation', body: 'Elle relie des faits à une cause ou à un sens. D’autres interprétations sont possibles. EN: it links facts to a cause; others are possible.', say: src(E(1539)).fr } },
    { cells: ['un chiffre sans contexte', 'neuf clients sur dix', 'tu cherches qui compte'], say: src(E(1533)).fr,
      detail: { title: 'Le chiffre sans contexte', body: 'Qui a été interrogé, combien, par qui ? Ici, 312 clients qui avaient déjà laissé un avis. EN: ask who was counted.', say: src(E(1543)).fr } },
    { cells: ['une caution floue', 'cliniquement testé', 'tu demandes la source'], say: src(E(1542)).fr,
      detail: { title: 'La caution floue', body: 'Un mot scientifique rassure. La note en bas dit : 24 volontaires, testés par la marque. EN: a scientific word reassures; the footnote deflates it.', say: src(E(1534)).fr } },
    { cells: ['un témoignage choisi', 'je suis une autre personne', 'tu le prends pour un exemple'], say: 'Depuis que je dors sur Nuage+, je suis une autre personne.',
      detail: { title: 'Le témoignage choisi', body: 'La marque a choisi le client le plus enthousiaste. Un cas, pas une règle. EN: the brand picked its happiest customer.', say: src(E(1553)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['interpreter'],
};

const A8_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-trier', layer: 'core', size: 'lg',
  title: 'Fait, opinion ou interprétation', frSub: 'Trois piles',
  groups: [
    grp('Un chiffre, trois discours', [
      it(E(1538), 'le chiffre'),
      it(E(1539), 'ce qu’en fait le ministre'),
      it(E(1540), 'un jugement'),
      it(E(1554), 'la règle'),
    ], chk('« Le ministre y voit la preuve que sa réforme fonctionne. » C’est...', ['une interprétation', 'un fait', 'une rumeur'], 0,
      'Il relie la baisse à sa réforme : une cause proposée. EN: he proposes a cause.')),
    grp('Les chiffres de la pub', [
      it(E(1534), 'le test'),
      it(E(1543), 'les avis'),
      it(E(1542), 'la question à poser'),
      it(B137(1171), 'la leçon 37 du B1'),
    ], chk('Avec la note en bas de page, « neuf clients sur dix le recommandent » devient...', ['un chiffre fragile : seuls des clients déjà contents ont répondu', 'une preuve solide'], 0,
      'Ceux qui laissent un avis ne sont pas tous les clients. EN: reviewers are not all customers.')),
    ctl('L’opinion', '« Cette réforme est injuste. » C’est...', ['un fait', 'une opinion'], 1,
      'Injuste est un jugement : on peut en discuter, pas le vérifier. EN: a judgement, not a checkable fact.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['interpreter'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a8-ecoute', layer: 'core', hideLines: true,
  title: 'Le bilan de l’été', frSub: 'Un chiffre, plusieurs lectures',
  lines: [ln(E(1545)), ln(E(1546)), ln(E(1547)), ln(E(1548)), ln(E(1549)), ln(E(1550)), ln(E(1551)), ln(E(1552))],
  questions: [
    { q: 'La hausse du nombre de touristes, telle qu’on l’annonce au début, est...', opts: ['un fait chiffré', 'une opinion'], correct: 0, why: 'Un pourcentage, vérifiable. EN: a checkable figure.' },
    { q: 'À quoi l’office du tourisme attribue-t-il la hausse ?', opts: ['à la météo', 'à sa campagne', 'au festival'], correct: 1, why: 'Une interprétation qui l’arrange. EN: an interpretation that suits it.' },
    { q: 'L’habitant qui parle de juillet donne...', opts: ['un fait', 'une interprétation', 'une opinion'], correct: 2, why: '« Invivable » est un jugement. EN: a value judgement.' },
    { q: 'Selon le commerçant, d’où vient surtout la hausse ?', opts: ['de la campagne', 'de la météo'], correct: 1, why: 'Une autre interprétation du même chiffre. EN: another interpretation.' },
    { q: 'Quel fait pourrait aussi expliquer la hausse de juillet ?', opts: ['la dépense moyenne par jour', 'le festival déplacé en juillet'], correct: 1, why: 'Un fait entendu à la fin, que l’office du tourisme ne cite pas. EN: a fact the tourist office leaves out.' },
    { q: 'Combien d’explications de la hausse entends-tu ?', opts: ['une seule', 'trois : la campagne, la météo, le festival', 'aucune'], correct: 1, why: 'Un fait, plusieurs interprétations possibles. EN: one fact, several readings.' },
  ],
  audio: REC('rec-b2-24-bilan-ete'), say: REFRAME, terms: ['interpreter'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a8-piege', layer: 'core', swipe: true,
  title: 'Six slogans pris pour des faits',
  rule: {
    title: 'Une affirmation se présente souvent comme un fait',
    body: 'La publicité écrit ses opinions et ses interprétations au présent de vérité, comme des faits. Remets chaque phrase dans sa pile, et cherche la note en bas de page. EN: adverts state opinions as facts; sort them back, and read the footnote.',
  },
  cards: [
    { promptLabel: 'le test maison', promptSound: 'Nuage+ est cliniquement prouvé.', fr: src(E(1534)).fr, ipa: ipaOf(E(1534)), tip: 'Testé ne veut pas dire prouvé, et le test vient de la marque. EN: tested is not proven.' },
    { promptLabel: 'les avis choisis', promptSound: 'Neuf personnes sur dix recommandent Nuage+.', fr: src(E(1543)).fr, ipa: ipaOf(E(1543)), tip: 'Neuf clients sur dix parmi ceux qui ont laissé un avis. EN: among those who left a review.' },
    { promptLabel: 'la cause offerte', promptSound: 'Si tu es fatigué, c’est forcément à cause de ton matelas.', fr: src(E(1541)).fr, ipa: ipaOf(E(1541)), tip: 'La pub propose une cause ; il y en a d’autres. EN: one proposed cause among many.' },
    { promptLabel: 'la question oubliée', promptSound: 'Cliniquement testé, donc efficace.', fr: src(E(1542)).fr, ipa: ipaOf(E(1542)), tip: 'Par qui, sur combien : deux questions, deux réponses décevantes. EN: by whom, on how many?' },
    { promptLabel: 'l’opinion en slogan', promptSound: 'Nuage+ offre le meilleur sommeil qui existe.', fr: src(E(1553)).fr, ipa: ipaOf(E(1553)), tip: '« Le meilleur » est un jugement, pas une mesure. EN: the best is a judgement.' },
    { promptLabel: 'le fait qui reste', promptSound: 'Tout est faux dans cette publicité.', fr: src(E(1544)).fr, ipa: ipaOf(E(1544)), tip: 'L’excès inverse : les faits vérifiables restent des faits. EN: checkable facts remain facts.' },
  ],
  drill: [
    { promptSay: '« Livré en 48 heures », c’est un ... .', opts: ['fait', 'avis'], correct: 0 },
    { promptSay: '« Le meilleur sommeil de votre vie », c’est une ... .', opts: ['mesure', 'opinion'], correct: 1 },
    { promptSay: '« C’est votre matelas », c’est une ... .', opts: ['interprétation', 'citation', 'date'], correct: 0 },
    { promptSay: 'Le test a été réalisé par ... .', opts: ['un hôpital', 'une université', 'la marque'], correct: 2 },
    { promptSay: 'Les avis viennent de clients qui ont ... d’en laisser un.', opts: ['refusé', 'choisi'], correct: 1 },
    { promptSay: 'Une interprétation relie des faits à une ... .', opts: ['cause', 'date'], correct: 0 },
    { promptSay: 'Le test a porté sur ... volontaires.', opts: ['312', '24', '100'], correct: 1 },
    { promptSay: 'Pour juger « neuf sur dix », tu demandes qui a été ... .', opts: ['payé', 'filmé', 'compté'], correct: 2 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'L’affirmation déguisée' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la pub voulait te faire croire' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six lectures justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-24-piege-pub'), say: REFRAME, terms: ['interpreter'],
};

const A8_REPONSE = pourTaReponse('a8-reponse', 'Tu sépares le fait de sa lecture', [
  grp('Séparer les trois', [
    it(E(1554), 'le fait et son explication'),
    it(E(1537), 'les trois mots'),
  ], chk('Dans ta réponse, tu écris...', ['« La campagne a fait venir 12 % de touristes en plus. »', '« La hausse est un fait ; l’expliquer par la campagne est une interprétation. »'], 1,
    'Tu gardes le fait et tu signales l’interprétation. EN: keep the fact, flag the interpretation.')),
  grp('Juger une publicité', [
    free('Cette publicité est un mensonge.', 'This advert is a lie.', 'trop vite'),
    it(E(1534), 'un constat précis'),
  ], chk('Laquelle est une critique fondée ?', ['la première', 'la seconde'], 1,
    'La seconde s’appuie sur la note en bas de page. EN: the second rests on the footnote.')),
], ['interpreter', 'citation']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le fait', 'Un fait, c’est ce qui...', ['se vérifie', 'plaît à tous'], 0,
    'Vérifiable, quel que soit celui qui le dit. EN: checkable by anyone.'),
  ctl('L’interprétation', '« Le chômage baisse grâce à la réforme. » La partie « grâce à la réforme » est...', ['un fait', 'une interprétation', 'une rumeur'], 1,
    'Une cause proposée, discutable. EN: a proposed, debatable cause.'),
  ctl('Les petites lignes', 'Dans une publicité, la vraie valeur d’un chiffre se trouve souvent...', ['en gros, dans le titre', 'dans les notes en bas de page'], 1,
    'La promesse en grand, les limites en petit. EN: promise large, limits small.'),
], ['interpreter']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Fait, opinion, interprétation',
    opener: {
      line: 'Cliniquement testé, neuf clients sur dix : ici tu sépares ce qui se vérifie de ce qu’on veut te faire croire. EN: Clinically tested, nine customers out of ten: here you separate what can be checked from what you are meant to believe.',
      imageRef: 'lessons/lecture-critique/act08.jpg',
    },
    sections: [],
    milestone: 'Tu sépares le fait, l’opinion et l’interprétation, et tu lis les petites lignes. EN: You can separate fact, opinion and interpretation, and read the small print.',
    estScreens: 36, restPoints: ['a8-trois', 'a8-ecoute'],
  },
  sections: [A8_PUB, A8_TROIS, A8_TRIER, A8_ECOUTE, A8_PIEGE, A8_REPONSE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — DEUX TEXTES, UN SUJET
 *
 *  TEXT: an official report extract and a blog on free public transport.
 *  MOVE: compare the shared facts first, then what each draws from them,
 *  what each leaves out, and the tone.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_GRATUITE: Sec<'reading'> = {
  type: 'reading', id: 'a9-gratuite', layer: 'core', questionsInModal: true,
  title: 'Un an de bus gratuits', frSub: 'Un rapport, un blog',
  text: GRATUITE_TEXT,
  glossary: [
    { word: 'manque à gagner', en: 'lost revenue', note: 'L’argent qu’on ne touche plus.' },
  ],
  questions: [
    { q: 'Devine le sens : « Tout le monde s’extasie devant les 38 % de hausse. » Que veut dire « s’extasie » ?', a: 'Admire beaucoup, avec enthousiasme. Karim, lui, ne partage pas cet enthousiasme.' },
    { q: 'Sur quels faits les deux textes sont-ils d’accord ?', a: 'La hausse de 38 %, les nouveaux usagers qui marchaient avant, et le coût payé par les employeurs.' },
    { q: 'Que conclut le rapport ? Et le blog ?', a: 'Le rapport ne conclut pas : il faut attendre deux ans. Le blog a tranché : c’est un cadeau électoral.' },
    { q: 'Qu’est-ce que le blog passe sous silence ?', a: 'Les 19 % de trajets en voiture remplacés, et la recommandation d’attendre avant de juger.' },
    { q: 'Le blog a-t-il tort sur tout ?', a: 'Non : ses faits viennent du rapport. C’est sa conclusion, « un cadeau électoral », qui est une affirmation sans preuve.' },
  ],
  audio: REC('rec-b2-24-gratuite'), say: REFRAME, terms: ['confronter'],
};

const A9_GRILLE: Sec<'focus'> = {
  type: 'focus', id: 'a9-grille', layer: 'core', sheetId: 'sheet-interets',
  title: 'Quatre questions pour confronter',
  points: [
    'Les faits communs d’abord : ce que les deux textes admettent. EN: first the facts both texts accept.',
    'Les conclusions ensuite : ce que chacun en tire. EN: then what each draws from them.',
    'Les silences : ce que chacun choisit de ne pas dire. EN: what each chooses to leave out.',
    'Le ton et l’intérêt : prudent ou polémique, et pour qui. EN: tone and interest, and for whom.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['confronter'],
};

const A9_COMPARER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-comparer', layer: 'core', size: 'lg',
  title: 'Qui dit quoi', frSub: 'Le rapport, le blog',
  groups: [
    grp('Deux conclusions', [
      it(E(1558), 'le rapport'),
      it(E(1559), 'le blog'),
      it(E(1566), 'la comparaison'),
    ], chk('Le rapport recommande d’attendre deux ans. Et le blog ?', ['il a déjà tranché', 'il attend aussi'], 0,
      'Karim juge dès maintenant : un cadeau électoral. EN: the blogger has already decided.')),
    grp('Même chiffre, deux lectures', [
      it(E(1555), 'le chiffre commun'),
      it(E(1556), 'le détail qui compte'),
      it(E(1560), 'la phrase qui compare'),
      it(B137(1142), 'le mot pour opposer'),
    ], chk('Les deux textes parlent des nouveaux trajets qui se faisaient à pied. Le blog en conclut...', ['que la mesure n’est pas écologique', 'qu’il faut attendre'], 0,
      'Le rapport dit la même chose, mais refuse de conclure si tôt. EN: same fact, earlier conclusion.')),
    ctl('Ce qui manque', 'Quel chiffre du rapport le blog ne cite-t-il pas ?', ['les 38 % de hausse', 'les 19 % de trajets en voiture remplacés', 'les 9 millions'], 1,
      'Ce chiffre nuancerait sa colère : il le laisse de côté. EN: the one figure that would soften his case.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['confronter'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a9-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre comparaisons ratées',
  errors: [
    { wrong: 'Les deux textes disent la même chose.', right: 'Les deux textes citent les mêmes chiffres, mais n’en tirent pas la même conclusion.',
      why: 'Normal : les chiffres se ressemblent. La différence est dans ce qu’on en fait. EN: same figures, different conclusions.' },
    { wrong: 'Le rapport est pour la gratuité, le blog contre.', right: 'Le rapport ne conclut pas encore ; le blog est contre.',
      why: 'Prudent n’est pas favorable : le rapport attend. EN: cautious is not in favour.' },
    { wrong: 'Le blog invente ses chiffres.', right: 'Le blog reprend des chiffres vrais, mais il choisit ceux qui l’arrangent.',
      why: 'Le problème n’est pas le mensonge, c’est le tri. EN: the issue is selection, not invention.' },
    { wrong: 'Le rapport est officiel, donc il a raison.', right: 'Le rapport est prudent et sourcé ; cela ne le rend pas infaillible.',
      why: 'Une source officielle se lit aussi de façon critique. EN: official sources are read critically too.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['confronter'],
};

const A9_REPONSE = pourTaReponse('a9-reponse', 'Tu confrontes, tu ne juxtaposes pas', [
  grp('Une phrase qui confronte', [
    it(E(1566), 'alors que'),
    it(E(1561), 'point-virgule'),
  ], chk('Laquelle confronte vraiment les deux textes ?', ['« Le rapport parle de bus. Le blog aussi. »', '« Alors que le rapport attend, le blog a déjà tranché. »'], 1,
    'Une vraie confrontation dit en quoi ils diffèrent. EN: a real comparison says how they differ.')),
  grp('Dire ce qui manque', [
    it(E(1565), 'le silence du blog'),
    it(E(1568), 'le tri des chiffres'),
  ], chk('Ces deux phrases reprochent au blog...', ['de choisir ses chiffres', 'de mentir'], 0,
    'Tu critiques un choix, preuve à l’appui. EN: you criticise a selection, with evidence.')),
], ['confronter', 'citation']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('L’ordre', 'Pour comparer deux textes, tu commences par...', ['leur ton', 'les faits qu’ils partagent'], 1,
    'Les faits communs d’abord, puis les conclusions. EN: shared facts first.'),
  ctl('Même chiffre', 'Deux textes citent le même chiffre. Ils sont forcément d’accord ?', ['oui', 'non'], 1,
    'Le même chiffre peut servir deux thèses opposées. EN: one figure, two theses.'),
  ctl('Le silence', 'Ce qu’un texte ne dit pas...', ['ne compte pas', 'compte aussi', 'est toujours un mensonge'], 1,
    'Un silence est un choix, pas forcément un mensonge. EN: silence is a choice.'),
], ['confronter']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Deux textes, un sujet',
    opener: {
      line: 'Un rapport et un blog, les mêmes chiffres, deux conclusions : ici tu confrontes deux textes. EN: A report and a blog, the same figures, two conclusions: here you compare two texts.',
      imageRef: 'lessons/lecture-critique/act09.jpg',
    },
    sections: [],
    milestone: 'Tu confrontes deux textes : leurs faits communs, leurs conclusions, leurs silences et leur ton. EN: You can compare two texts: shared facts, conclusions, silences and tone.',
    estScreens: 28, restPoints: ['a9-grille'],
  },
  sections: [A9_GRATUITE, A9_GRILLE, A9_COMPARER, A9_ERREURS, A9_REPONSE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — À L’EXAMEN, INFÉRENCE ET POSITION
 *
 *  TEXT: a DELF B2-style opinion column. MOVE: tell the four question types
 *  apart (global, detail, inference, stance), and answer inference and
 *  stance items with a short quotation, the way the DELF « justifiez »
 *  items and the TCF / TEF four-option items are marked.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_EPREUVE: Sec<'reading'> = {
  type: 'reading', id: 'a10-epreuve', layer: 'core', questionsInModal: true,
  title: 'Compréhension des écrits, exercice 2', frSub: 'Comme au DELF B2',
  text: DECONNEXION_TEXT,
  glossary: [
    { word: 'travail de fond', en: 'in-depth work', note: 'Le travail qui demande du temps et de la concentration.' },
  ],
  questions: [
    { q: 'Devine le sens : « L’intention est louable. » Que veut dire « louable » ?', a: 'Qui mérite d’être approuvé : l’auteur reconnaît que le but est bon.' },
    { q: 'Question globale. De quel type de texte s’agit-il, et quel est son but ?', a: 'Un texte d’opinion : il argumente contre une solution unique, la coupure des serveurs.' },
    { q: 'Question de position. L’auteur est-il favorable à la coupure des serveurs ? Justifiez en citant le texte.', a: 'Non, même s’il approuve le but : « on aurait tort [...] de voir dans ce bouton rouge une solution miracle ».' },
    { q: 'Question d’inférence. Que veut montrer l’exemple de la mère de famille ?', a: 'Qu’une règle uniforme ignore la diversité des vies : certaines personnes choisissent de travailler le soir.' },
    { q: 'Vrai ou faux ? Justifiez. « Le recul de 12 % est présenté comme certain. »', a: 'Faux : « les arrêts maladie auraient reculé », au conditionnel.' },
    { q: 'Que désigne « ce bouton rouge » ?', a: 'La coupure des serveurs de messagerie le soir : une image de solution radicale et simple.' },
  ],
  audio: REC('rec-b2-24-deconnexion'), say: REFRAME, terms: ['position', 'citation'],
};

const A10_ASTUCES: Sec<'hacks'> = {
  type: 'hacks', id: 'a10-astuces', layer: 'core', sheetId: 'sheet-examen',
  title: 'Trois astuces pour les questions difficiles',
  hacks: [
    { hack: 'Classe la question avant de chercher.', why: 'Globale, détail, inférence ou position : chacune se cherche à un endroit différent du texte. EN: each question type is answered in a different place.' },
    { hack: 'Pour une position, cherche les concessions et les connecteurs.', why: 'L’avis se lit dans « louable », « cependant », « pour autant » : là où le texte tourne. EN: stance shows where the text turns.' },
    { hack: 'Justifie avec trois à dix mots, entre guillemets.', why: 'Le DELF note la justification : une courte citation exacte vaut plus qu’un paragraphe recopié. EN: a short exact quote scores; a copied paragraph does not.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['position', 'citation'],
};

const A10_TYPES: Sec<'examples'> = {
  type: 'examples', id: 'a10-types', layer: 'core', sheetId: 'sheet-examen',
  title: 'Les consignes de l’épreuve',
  examples: [
    ex(E(1573), 'ce que le texte laisse entendre sans le dire'),
    ex(E(1574), 'pour, contre, ou pour avec des réserves'),
    ex(E(1582), 'une question de position, sur ce texte'),
    ex(E(1576), 'la consigne du DELF : la réponse ne suffit pas'),
    ex(E(1575), 'une citation courte et exacte'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['position', 'citation'],
};

const A10_JUSTIFIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-justifier', layer: 'core', size: 'lg',
  title: 'Vrai ou faux, et pourquoi', frSub: 'Des questions au format DELF B2',
  groups: [
    grp('Vrai ou faux ? Justifiez.', [
      it(E(1581), 'le chiffre'),
      it(E(1570), 'la concession'),
      it(E(1571), 'la critique'),
    ], chk('« Selon l’auteur, couper les serveurs règle le problème. » Vrai ou faux ?', ['Faux : « il traite le symptôme et non la cause ».', 'Vrai : « L’intention est louable ».'], 0,
      'La concession n’est pas la thèse : l’auteur critique le moyen. EN: the concession is not the thesis.')),
    grp('La citation qui prouve', [
      it(E(1578), 'la position'),
      it(E(1579), 'le mot qui la trahit'),
      it(E(1580), 'le réflexe'),
    ], chk('Quelle citation prouve que l’auteur ne rejette pas la déconnexion ?', ['« Faut-il pour autant laisser faire ? Non. »', '« couper leurs serveurs de messagerie »', '« des délais réalistes »'], 0,
      'Il refuse de ne rien faire : il veut la déconnexion, autrement. EN: he wants disconnection, by other means.')),
    ctl('Inférence', '« La mère de famille [...] n’a pas besoin qu’on la protège d’elle-même. » L’auteur laisse entendre que la règle est...',
      ['infantilisante pour certains', 'trop douce', 'illégale'], 0,
      'Protéger quelqu’un de lui-même, c’est le traiter en enfant. EN: protecting someone from themselves treats them like a child.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['position', 'citation'],
};

const A10_PIEGES: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a10-pieges', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre réponses qui perdent des points',
  errors: [
    { wrong: 'L’auteur est contre la déconnexion.', right: 'L’auteur est pour la déconnexion, mais contre la coupure des serveurs.',
      why: 'Normal : le texte critique beaucoup. Mais il critique un moyen, pas le but. EN: he criticises the means, not the aim.' },
    { wrong: 'Faux.', right: 'Faux : les arrêts maladie « auraient reculé », au conditionnel.',
      why: 'Au DELF, une réponse sans justification ne rapporte rien. EN: an unjustified answer scores nothing.' },
    { wrong: 'Les arrêts maladie ont baissé de 12 % dans les entreprises.', right: 'Dans une société d’assurances, les arrêts maladie auraient reculé de 12 %.',
      why: 'Deux détails perdus : une seule entreprise, et le conditionnel. EN: one company, and not confirmed.' },
    { wrong: 'Justification : tout le deuxième paragraphe.', right: 'Justification : « il traite le symptôme et non la cause ».',
      why: 'Recopier un paragraphe montre que tu ne sais pas où est la preuve. EN: a whole paragraph shows you did not find the proof.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['position', 'citation'],
};

const A10_REPONSE = pourTaReponse('a10-reponse', 'Ta position s’appuie sur une citation', [
  grp('La réponse complète', [
    it(E(1580), 'le réflexe'),
    it(E(1575), 'la consigne'),
  ], chk('À l’examen, une réponse de position complète, c’est...', ['la position seule', 'la position, puis une courte citation'], 1,
    'La citation transforme ton avis en preuve. EN: the quote turns your view into evidence.')),
  grp('Deux réponses', [
    free('L’auteur est d’accord.', 'The writer agrees.', 'trop vague'),
    it(E(1578), 'précise et prouvable'),
  ], chk('Laquelle rapporterait des points au DELF ?', ['la première', 'la seconde'], 1,
    'D’accord avec quoi ? La seconde sépare l’objectif du moyen. EN: the second separates aim and means.')),
], ['position', 'citation']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Inférence', 'Une question d’inférence porte sur...', ['un détail écrit mot pour mot', 'ce que le texte laisse entendre'], 1,
    'Tu déduis, puis tu prouves avec le texte. EN: you infer, then prove.'),
  ctl('Position', 'La position de l’auteur se prouve avec...', ['ton avis sur le sujet', 'un mot ou une phrase du texte', 'le titre seul'], 1,
    'Toujours une trace dans le texte. EN: always a trace in the text.'),
  ctl('Justifier', 'Une bonne justification, c’est...', ['une citation courte et exacte', 'un paragraphe recopié'], 0,
    'Trois à dix mots, entre guillemets. EN: three to ten words, in quotation marks.'),
], ['position', 'citation']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'À l’examen',
    opener: {
      line: 'L’examinateur ne veut pas ton avis, il veut ta preuve : ici tu réponds aux questions d’inférence et de position, citation à l’appui. EN: The examiner does not want your opinion but your evidence: here you answer inference and stance questions with a quotation.',
      imageRef: 'lessons/lecture-critique/act10.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais une question d’inférence ou de position et tu la justifies par une courte citation. EN: You can recognise an inference or stance question and justify your answer with a short quotation.',
    estScreens: 34, restPoints: ['a10-types', 'a10-pieges'],
  },
  sections: [A10_EPREUVE, A10_ASTUCES, A10_TYPES, A10_JUSTIFIER, A10_PIEGES, A10_REPONSE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — TA RÉPONSE CRITIQUE
 *
 *  The production act. The task tribune is read with every move of the
 *  lesson, planned, rehearsed out loud with Inès, then answered in writing.
 *  The brief prints the tribune again (no `source` field on `task`).
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_TRIBUNE: Sec<'reading'> = {
  type: 'reading', id: 'a11-tribune', layer: 'core', questionsInModal: true,
  title: 'La tribune de ta mission', frSub: 'Toute la loupe, sur un seul texte',
  text: ESPECES_TEXT,
  glossary: [
    { word: 'travail au noir', en: 'undeclared work', note: 'Un travail payé sans être déclaré.' },
  ],
  questions: [
    { q: 'Devine le sens : « faire reculer l’économie souterraine ». Qu’est-ce que l’économie souterraine ?', a: 'L’activité cachée, non déclarée : la fraude et le travail au noir dont parle la phrase d’avant.' },
    { q: 'Quelle est la thèse de l’auteur ?', a: 'Il faut supprimer les espèces, et l’État doit fixer une date, par exemple 2030.' },
    { q: 'Quelles preuves avance-t-il, et que valent-elles ?', a: 'Un chiffre sourcé qui compte des paiements, pas des personnes ; un seul boulanger ; et « tout le monde le sait », une affirmation sans preuve.' },
    { q: 'Que suppose-t-il sans le dire ?', a: 'Que tout le monde a une carte ou un téléphone, que les personnes âgées s’adapteront, et que les pannes sont négligeables.' },
    { q: 'Quel est son ton ? Cite deux expressions.', a: 'Assuré, parfois méprisant : « il serait absurde », « une fois de plus », « j’en suis convaincu ».' },
    { q: 'Qui est l’auteur, et pourquoi est-ce important ?', a: 'Le fondateur d’une application de paiement : il a intérêt à la réforme qu’il défend.' },
  ],
  audio: REC('rec-b2-24-especes'), say: REFRAME, terms: ['these', 'preuve', 'interet'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a11-plan', layer: 'core', sheetId: 'sheet-examen',
  title: 'Cinq étapes pour ta réponse critique',
  steps: [
    '1. Résume la thèse en une phrase, avec tes mots : l’auteur soutient que... EN: state the thesis in your own words.',
    '2. Juge au moins deux preuves : solide, fragile, et pourquoi. EN: judge at least two pieces of evidence, and say why.',
    '3. Nomme un présupposé : il suppose que... EN: name one unstated assumption.',
    '4. Nomme le ton et l’intérêt de l’auteur, sans l’accuser. EN: name the tone and the writer’s stake, without accusing.',
    '5. Conclus en une phrase, et vérifie tes citations : trois à dix mots, entre guillemets. EN: conclude, and check your short quotations.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['these', 'citation'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a11-usages', layer: 'core', title: 'Où tu écriras une réponse critique',
  cases: [
    { situation: 'Au DELF B2, un texte d’opinion à commenter', fr: src(E(1590)).fr, en: src(E(1590)).en },
    { situation: 'Un collègue veut partager une tribune à toute l’équipe', fr: src(E(1592)).fr, en: src(E(1592)).en },
    { situation: 'Tu réponds dans le courrier des lecteurs', fr: src(E(1594)).fr, en: src(E(1594)).en },
    { situation: 'Tu conclus une analyse de texte en cours', fr: src(E(1596)).fr, en: src(E(1596)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['these', 'preuve'],
};

/** USE IT, out loud. Every French string here uses the typographic ’. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a11-scenario', layer: 'core', title: 'Inès veut partager la tribune',
  setting: 'À la pause, dans les bureaux d’une coopérative à Nantes. Ta collègue Inès a lu la tribune d’Hugo Lemaire et veut l’envoyer à toute l’équipe. Tu l’as lue aussi, avec la loupe.',
  turns: [
    {
      ai: 'Tu as lu la tribune sur les espèces ? Je voudrais l’envoyer à toute l’équipe.', en: 'Have you read the op-ed on cash? I would like to send it to the whole team.',
      user: src(E(1590)).fr, userEn: 'The writer argues that cash should be abolished by 2030. (The thesis first, in your own words.)',
      alts: [
        { fr: 'Oui : il veut que l’État fixe une date pour supprimer le liquide.', en: 'Yes: he wants the state to set a date to abolish cash.' },
        { fr: 'Oui, il propose d’en finir avec les pièces et les billets d’ici 2030.', en: 'Yes, he proposes doing away with coins and notes by 2030.' },
      ],
    },
    {
      ai: 'Il a des chiffres, pourtant.', en: 'He does have figures, though.',
      user: src(E(1599)).fr, userEn: 'Eight payments out of ten is not eight people out of ten. (Judging what the figure really counts.)',
      alts: [
        { fr: 'Un seul chiffre sourcé, et il compte des paiements, pas des personnes.', en: 'One sourced figure, and it counts payments, not people.' },
        { fr: 'Il cite un institut, mais son chiffre ne dit rien de ceux qui n’ont pas de carte.', en: 'He quotes an institute, but the figure says nothing about people without a card.' },
      ],
    },
    {
      ai: 'Et le boulanger de Nantes, alors ?', en: 'And what about the baker in Nantes?',
      user: 'C’est un témoignage, un seul cas : un exemple, pas une preuve.', userEn: 'It is a testimony, a single case: an example, not proof. (Weighing the anecdote.)',
      alts: [
        { fr: 'C’est vivant, mais un boulanger ne fait pas une étude.', en: 'It is vivid, but one baker is not a study.' },
        { fr: 'Ça rend l’idée concrète, ça ne prouve rien pour les autres commerçants.', en: 'It makes the idea concrete; it proves nothing about other shopkeepers.' },
      ],
    },
    {
      ai: 'Il dit que tout le monde sait que le liquide sert à la fraude.', en: 'He says everyone knows cash is used for fraud.',
      user: src(E(1592)).fr, userEn: 'This argument rests on a claim, not on evidence. (A bare assertion, named.)',
      alts: [
        { fr: '« Tout le monde le sait » remplace la preuve : il ne donne aucun chiffre sur la fraude.', en: '"Everyone knows it" stands in for evidence: he gives no figure on fraud.' },
        { fr: 'C’est possible, mais il ne le montre pas.', en: 'It is possible, but he does not show it.' },
      ],
    },
    {
      ai: 'Et les personnes âgées, il en parle ?', en: 'And older people, does he mention them?',
      user: 'Il suppose qu’elles s’adapteront, mais il ne le montre pas.', userEn: 'He assumes they will adapt, but does not show it. (The unstated assumption.)',
      alts: [
        { fr: src(E(1593)).fr, en: src(E(1593)).en },
        { fr: 'Il balaie l’objection en une phrase, sans aucun chiffre.', en: 'He brushes the objection aside in one sentence, with no figure.' },
      ],
    },
    {
      ai: 'Bon. Je ne l’envoie pas, alors ?', en: 'Right. So I should not send it?',
      user: 'Envoie-la si tu veux, mais précise que l’auteur dirige une application de paiement.', userEn: 'Send it if you like, but point out that the writer runs a payment app. (Naming the stake without calling him a liar.)',
      alts: [
        { fr: src(E(1594)).fr, en: src(E(1594)).en },
        { fr: src(E(1596)).fr, en: 'All in all, the thesis is clear, but the evidence is weak. (Your conclusion, fair to both sides.)' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['preuve', 'presuppose', 'interet'],
};

/** THE GRADED TASK, in the format of a DELF B2 critical response, graded on
 *  a grid that mirrors the B2 CE (understand, infer, identify the stance)
 *  and PE (coherence, range and accuracy) grids. */
const A11_MISSION: Sec<'task'> = {
  type: 'task', id: 'a11-mission', title: 'Réponds à la tribune', frSub: 'Mission écrite',
  brief: `Ta classe de préparation au DELF B2 étudie cette tribune. Ta professeure te demande une réponse critique : ce que dit l’auteur, ce que valent ses arguments, et d’où il parle. Voici la tribune. ${ESPECES_TEXT}`,
  briefEn: 'Your DELF B2 preparation class is studying this op-ed. Your teacher asks for a critical response: what the writer says, what his arguments are worth, and where he speaks from. The op-ed is printed here so you can write with it in front of you.',
  produce: 'Écris une réponse critique de 150 à 200 mots : résume la thèse avec tes mots, juge au moins deux de ses preuves, nomme un présupposé, le ton et l’intérêt de l’auteur, avec au moins deux courtes citations entre guillemets.',
  responseSpec: { kind: 'text', minWords: 150, maxWords: 200 },
  rubric: {
    criteria: [
      { key: 'these', label: 'La thèse, avec tes mots', maxPoints: 4, descriptors: [
        '4 : La thèse est juste et complète (supprimer les espèces, avec une date fixée par l’État), en une phrase, avec tes mots.',
        '3 : La thèse est juste mais incomplète (sans la date ou sans le rôle de l’État), ou en partie recopiée.',
        '2 : Tu donnes le sujet (les espèces) plutôt que la thèse, ou un seul argument à la place de la thèse.',
        '1 : La thèse manque, ou tu fais dire à l’auteur le contraire de ce qu’il pense.',
      ] },
      { key: 'preuves', label: 'Les preuves jugées', maxPoints: 4, descriptors: [
        '4 : Au moins deux preuves jugées, chacune avec sa raison : le chiffre compte des paiements, le boulanger est un seul cas, « tout le monde le sait » n’est pas une preuve.',
        '3 : Deux preuves jugées, dont une sans vraie raison, ou une seule preuve très bien jugée.',
        '2 : Les preuves sont citées ou résumées, mais pas jugées.',
        '1 : Aucune preuve n’est examinée, ou un jugement général sans raison (« c’est nul »).',
      ] },
      { key: 'position', label: 'Présupposé, ton et intérêt', maxPoints: 4, descriptors: [
        '4 : Un présupposé nommé (tout le monde a une carte, les personnes âgées s’adapteront), le ton qualifié, et l’intérêt de l’auteur signalé sans l’accuser de mentir.',
        '3 : Deux de ces trois éléments, bien formulés.',
        '2 : Un seul de ces éléments, ou l’intérêt présenté comme une preuve que tout est faux.',
        '1 : Rien sur la position ou le ton, ou une attaque contre la personne.',
      ] },
      { key: 'citations', label: 'Des citations qui prouvent', maxPoints: 2, descriptors: [
        '2 : Au moins deux citations courtes et exactes, entre guillemets, chacune au service d’un jugement.',
        '1 : Une seule citation, ou des citations trop longues ou sans lien avec ce que tu affirmes.',
      ] },
      { key: 'coherence', label: 'Un texte qui s’enchaîne', maxPoints: 3, descriptors: [
        '3 : Un ordre clair (thèse, preuves, position, conclusion) et des connecteurs variés (mais, en revanche, en effet, en somme).',
        '2 : L’ordre se suit, mais les liens sont pauvres ou répétés (et, et puis, aussi).',
        '1 : Des remarques juxtaposées, sans fil.',
      ] },
      { key: 'langue', label: 'Une langue juste et variée', maxPoints: 3, descriptors: [
        '3 : Un vocabulaire de l’analyse varié (soutenir, avancer, supposer, fragile, solide) et peu d’erreurs, qui ne gênent jamais la lecture.',
        '2 : Un vocabulaire correct mais répétitif (dit, dit, dit), ou des erreurs qui gênent parfois.',
        '1 : Des erreurs fréquentes qui gênent la compréhension.',
      ] },
    ],
  },
  scaffold: [
    'L’auteur soutient que...',
    'Pour appuyer sa thèse, il avance...',
    'Cet argument est fragile, car...',
    'En revanche,',
    'Il suppose que...',
    'Le ton est...',
    'On notera que l’auteur...',
    'En somme,',
  ],
  modelAnswer: 'Dans sa tribune, Hugo Lemaire soutient qu’il faut supprimer les espèces et demande à l’État de fixer une date, par exemple 2030. Sa thèse est claire, mais ses preuves sont fragiles. Son seul chiffre sourcé, « huit paiements sur dix » par carte, compte des paiements et non des personnes : il ne prouve donc pas que ceux qui paient en liquide soient une petite minorité. Le boulanger de Nantes n’est qu’un exemple, et l’idée que les espèces servent « d’abord à la fraude » repose sur une simple affirmation, introduite par « tout le monde le sait ». L’auteur suppose aussi que chacun possède une carte et que les personnes âgées « s’adapteront », sans le montrer. Son ton est assuré, parfois méprisant : selon lui, les pannes ne méritent même pas qu’on s’y arrête. Enfin, on notera qu’il a fondé une application de paiement : il a donc intérêt à la réforme qu’il défend. Cela ne rend pas son texte faux, mais invite à chercher d’autres sources avant de le suivre.',
  modelAnswerEn: 'In his op-ed, Hugo Lemaire argues that cash should be abolished and asks the state to set a date, 2030 for instance. His thesis is clear, but his evidence is weak. His only sourced figure, "eight payments out of ten" by card, counts payments, not people: so it does not prove that those who pay cash are a small minority. The Nantes baker is just one example, and the idea that cash is "first of all" for fraud rests on a mere claim, introduced by "everyone knows it". The writer also assumes that everyone has a card and that older people "will adapt", without showing it. His tone is self-assured, at times dismissive: in his view, outages are not even worth considering. Finally, he founded a payment app, so he has a stake in the reform he defends. That does not make his text false, but it is a reason to look for other sources before following him.',
  watchFor: [
    { pattern: 'The topic given instead of the thesis (« il parle des espèces »), or the thesis without its proposal of a date set by the state.', criterion: 'these', feedback: 'Tu donnes le sujet. Dis ce que l’auteur affirme : il veut supprimer les espèces, avec une date.', ref: 'a2-reponse' },
    { pattern: 'The thesis copied as a whole sentence from the tribune (« Il est temps de dire adieu aux espèces »).', criterion: 'these', feedback: 'Redis la thèse avec tes mots : l’auteur soutient que...', ref: 'a11-plan' },
    { pattern: 'The « huit paiements sur dix » figure accepted as proof that cash users are a small minority.', criterion: 'preuves', feedback: 'Regarde ce que compte le chiffre : des paiements, pas des personnes.', ref: 'a3-reponse' },
    { pattern: 'The baker’s anecdote treated as evidence for all shopkeepers.', criterion: 'preuves', feedback: 'Un boulanger, c’est un exemple. Dis-le : un seul cas ne prouve pas l’idée.', ref: 'a3-trier' },
    { pattern: '« Tout le monde le sait » repeated as a fact instead of named as a bare assertion.', criterion: 'preuves', feedback: 'Cette formule remplace la preuve : nomme-la comme une affirmation.', ref: 'a3-preuves' },
    { pattern: 'The evidence summarised or listed but never judged (solid, weak, why).', criterion: 'preuves', feedback: 'Tu cites les arguments ; juge-les : solide ou fragile, et pourquoi.', ref: 'a3-reponse' },
    { pattern: 'No unstated assumption named (everyone has a card, older people will adapt, outages are negligible).', criterion: 'position', feedback: 'Demande-toi ce que l’auteur doit croire pour que son argument marche, et écris : il suppose que...', ref: 'a4-reponse' },
    { pattern: 'The writer’s stake (founder of a payment app) left out, or used to call the whole tribune a lie.', criterion: 'position', feedback: 'Signale son intérêt, sans l’accuser : on notera que l’auteur a fondé une application de paiement.', ref: 'a7-reponse' },
    { pattern: 'The tone not named, or the tribune’s confident claims reported as neutral facts.', criterion: 'position', feedback: 'Qualifie le ton (assuré, méprisant) et cite une expression qui le montre.', ref: 'a6-reponse' },
    { pattern: 'Quotations missing, or whole sentences copied as « citations » without a judgement attached.', criterion: 'citations', feedback: 'Choisis trois à dix mots exacts, entre guillemets, et dis ce qu’ils prouvent.', ref: 'a10-reponse' },
    { pattern: 'A list of remarks with no order and connectors limited to et, aussi, et puis.', criterion: 'coherence', feedback: 'Suis l’ordre : thèse, preuves, position, conclusion, avec en revanche, en effet, en somme.', ref: 'a11-plan' },
    { pattern: 'The learner’s own opinion on cash replacing the analysis of the text.', criterion: 'coherence', feedback: 'On te demande de juger le texte, pas les espèces. Ton avis peut venir en une phrase, à la fin.', ref: 'a10-pieges' },
    { pattern: 'The same reporting verb repeated (il dit, il dit, il dit).', criterion: 'langue', feedback: 'Varie : il soutient, il avance, il affirme, il suppose, il reconnaît.', ref: 'a5-verbes' },
  ],
  graderNotes: [
    'Word count: 150 to 200, with 10% tolerance (135 to 220) before the criteria lose points for length. A title does not count.',
    'The learner may disagree with the grader about cash itself; the task marks the ANALYSIS of the text. A learner who finds the tribune convincing may still score full marks if the evidence is weighed, the assumptions named and the stake noted.',
    'Accept any two of: the payments-vs-people figure, the single baker, the bare assertion « tout le monde le sait », the dismissal of outages, the vague « d’autres pays ont déjà fait ce choix ». Each counts as a judged piece of evidence only if a reason is given.',
    'The stake must be named without an accusation. « Il ment pour vendre son application » is an ad hominem and loses the point it seems to earn under « position ».',
    'Quotations: three to ten words, exact, in guillemets. Accept straight or French quotation marks. A quotation over twenty words counts as copying, not quoting.',
    'The subjunctive after « il ne prouve pas que » and « bien que » is expected at B2 but not required; do not mark an indicative there as more than a minor error under « langue ».',
    'Accept European and Québec vocabulary alike (espèces, argent liquide, argent comptant, cash in quotes).',
    'Do not mark argument-WRITING features (counter-argument and rebuttal structure): they belong to lesson 23 in B2. This task marks reading, shown in writing.',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['these', 'preuve', 'citation'],
};

const A11_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a11-parler', layer: 'core', title: 'Dis ta réponse à voix haute', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['citation'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a11-cheat', layer: 'core', sheetId: 'sheet-examen',
  title: 'Toute la loupe sur un écran',
  rows: [
    { k: 'la thèse', v: 'ce que le texte affirme', say: src(E(1417)).fr,
      detail: { title: 'Sujet ou thèse', body: 'Cherche-la après la concession, redis-la avec tes mots. EN: look after the concession; restate it.', say: src(E(1424)).fr } },
    { k: 'la preuve', v: 'chiffre, étude, exemple, ou rien', say: src(E(1432)).fr,
      detail: { title: 'Peser les preuves', body: 'Qui, combien, quelle mesure. Un exemple illustre, une évidence ne prouve pas. EN: who, how many, what measure.', say: src(E(1444)).fr } },
    { k: 'le présupposé', v: 'ce qu’il croit sans le dire', say: src(E(1466)).fr,
      detail: { title: 'L’idée cachée', body: 'Après n’est pas à cause de ; tous n’est pas beaucoup ; deux choix n’épuisent pas tout. EN: after, all, either/or.', say: src(E(1460)).fr } },
    { k: 'la distance', v: 'conditionnel, guillemets, prétendument', say: src(E(1479)).fr,
      detail: { title: 'Rapporté ou garanti', body: 'Et le verbe : reconnaître, prétendre, assurer, démentir. EN: and the reporting verb.', say: src(E(1480)).fr } },
    { k: 'le ton, l’ironie', v: 'l’écart entre les mots et la situation', say: src(E(1501)).fr,
      detail: { title: 'Ne pas prendre au mot', body: 'Le contexte décide ; sous l’ironie, une thèse sérieuse. EN: context decides.', say: src(E(1513)).fr } },
    { k: 'l’intérêt', v: 'qui parle, et ce qu’il y gagne', say: src(E(1529)).fr,
      detail: { title: 'À qui ça profite', body: 'L’intérêt ne rend pas faux : il dit quoi vérifier. EN: interest tells you what to check.', say: src(E(1525)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['these', 'preuve', 'interet'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a11-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu lis maintenant un texte deux fois : une fois pour le comprendre, une fois à la loupe. Tu trouves sa thèse, tu pèses ses preuves, tu fais apparaître ce qu’il suppose, tu lis la distance, le ton et l’intérêt de celui qui écrit, et tu le confrontes à un autre texte. Le piège qui reste est double : tout croire, ou tout rejeter. Un texte intéressé peut dire vrai, et un rapport officiel peut se tromper. Avant l’examen, prends un éditorial, écris sa thèse en une phrase, puis une preuve solide et une preuve fragile, chacune avec une citation de moins de dix mots. EN: Before the exam, take an editorial and write its thesis in one sentence, then one strong and one weak piece of evidence, each with a quotation under ten words.',
  stats: [
    { k: 'Ce qu’il affirme', v: 'la thèse, après la concession' },
    { k: 'Ce qui le prouve', v: 'preuve, exemple ou affirmation' },
    { k: 'D’où il parle', v: 'distance, ton, intérêt' },
    { k: 'Ta réponse', v: 'résumer, juger, citer' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 1 to 10, plus a round
 *  on the task tribune. Each round targets a distinct errorTrigger. Mostly
 *  inference and stance on short texts; round 10 is in the DELF B2 format
 *  (four options, « justifiez »), round 11 opens in the TCF format. `fold()`
 *  strips accents, punctuation and spacing, so nothing turns on them. The
 *  authored slots are then spread by `spreadSlots()`: no `why` names a
 *  position. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Une partie de la phrase trahit le texte. Écris la phrase juste. EN: Part of the sentence betrays the text; write it correctly.', prompt, answer, accept: [answer], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a11-quiz', layer: 'core', title: 'L’examen', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-titre', label: 'Le titre et la preuve', targets: ['titre-pris-pour-preuve'],
      questions: [
        mc('Un titre annonce « Une étude montre que... ». Tu as...', ['une affirmation à vérifier', 'une preuve', 'un fait établi'], 0, 'Le titre annonce ; le corps dit sur quoi ça repose. EN: check the body.', 'a1-loupe'),
        mc('Dans l’article sur la sieste, qui a financé l’étude ?', ['l’Institut Morphée', 'un chercheur indépendant', 'Somnéa, qui fabrique les capsules', 'l’entreprise lyonnaise'], 2, 'Le fabricant des capsules a payé l’étude qui les recommande. EN: the pod maker paid.', 'a1-lecture'),
        mc('Comment la productivité a-t-elle été mesurée ?', ['par les ventes', 'par les salariés eux-mêmes, sur une échelle de 1 à 10', 'par un chronomètre'], 1, 'Elle n’a pas été mesurée : les salariés ont noté leur forme. EN: self-rated.', 'a1-lecture'),
        mc('« Encore faut-il regarder de près. » Le journaliste...', ['annonce une réserve', 'approuve l’étude'], 0, 'La formule ouvre la partie critique de l’article. EN: it opens the critical part.', 'a1-lecture'),
        tI('Complète la question critique. Un mot.', 'Qui a ... l’étude ?', 'payé', 'Qui paie une étude peut avoir intérêt à son résultat. EN: who paid for it.', 'a1-usages', ['financé', 'paye']),
        tI('Complète le réflexe. Un mot.', 'Le titre affirme ; l’article ... .', 'nuance', 'Le corps de l’article nuance ce que le titre promet. EN: the article qualifies.', 'a1-loupe'),
        eS('Selon l’article, une sieste augmente la productivité de 30 %, c’est prouvé.', 'Selon l’article, une sieste augmenterait la productivité de 30 %, mais ce n’est pas prouvé.', 'Le conditionnel et les réserves du journaliste. EN: reported, not proven.', 'a1-scene'),
        lC('Écoute. Cette phrase est-elle une preuve ou une réserve ?', src(E(1403)).fr, ['une réserve sur la mesure', 'une preuve de l’efficacité'], 0, 'Une note qu’on se donne à soi-même n’est pas une mesure. EN: self-rating is not measurement.', 'a1-loupe'),
      ],
    },
    {
      id: 'r2-these', label: 'La thèse', targets: ['theme-pour-these'],
      questions: [
        mc('« Faut-il supprimer les notes à l’école ? » C’est...', ['le sujet', 'la thèse'], 0, 'Une question ouverte : rien n’est encore affirmé. EN: nothing claimed yet.', 'a2-these'),
        mc('Dans la chronique, la thèse arrive...', ['dans la première phrase', 'après « Tout cela est vrai » et « pourtant »', 'dans le titre seulement'], 1, 'D’abord la concession, puis le tournant. EN: concession, then the turn.', 'a2-chronique'),
        mc('Texte : « Certes, le vélo est dangereux l’hiver. Mais avec des pistes déneigées, il devient sûr. » La thèse : le vélo d’hiver...', ['est dangereux', 'peut être sûr si les pistes sont entretenues', 'doit être interdit', 'n’intéresse personne'], 1, 'Ce qui suit « mais » l’emporte. EN: what follows mais carries the claim.', 'a2-trouver'),
        mc('Que représente le thermomètre dans le titre de la chronique ?', ['la note', 'l’élève', 'l’enseignant'], 0, 'La note mesure le problème, elle ne le cause pas. EN: the grade measures.', 'a2-chronique'),
        tI('Complète. Un mot.', 'Le problème n’est pas la note, mais ce qu’on en ... .', 'fait', 'La thèse porte sur l’usage de la note. EN: it is about how grades are used.', 'a2-piege'),
        tI('Quel mot tourne le texte après la concession ? Un mot.', 'On aurait tort, ..., d’en conclure qu’il faut casser le thermomètre.', 'pourtant', 'Pourtant annonce la thèse. EN: pourtant introduces the claim.', 'a2-these'),
        eS('L’auteure soutient qu’il faut supprimer les notes.', 'L’auteure soutient qu’il faut garder les notes.', 'Elle veut les garder, avec un commentaire. EN: keep them.', 'a2-reponse'),
        lC('Écoute. Cette phrase est-elle le sujet ou la thèse ?', src(E(1417)).fr, ['la thèse', 'le sujet'], 0, 'Elle affirme où est le problème : c’est la thèse. EN: a claim.', 'a2-these'),
      ],
    },
    {
      id: 'r3-preuve', label: 'Preuve ou affirmation', targets: ['affirmation-prise-pour-preuve'],
      questions: [
        mc('« Il est évident que la ville doit agir. » C’est...', ['une affirmation sans preuve', 'un chiffre sourcé', 'un témoignage'], 0, 'L’évidence remplace la démonstration. EN: obviousness replaces proof.', 'a3-preuves'),
        mc('Que montre l’étude de Sherbrooke ?', ['que les parcs guérissent l’anxiété', 'un lien entre parcs et moins d’anxiété', 'que les ados n’aiment pas les parcs'], 1, 'Un lien observé, pas une cause. EN: a link.', 'a3-etude'),
        mc('Pourquoi le revenu des familles pose-t-il problème dans l’étude ?', ['Les quartiers à parcs sont plus aisés : le revenu peut expliquer l’écart.', 'Il a été mal calculé.', 'Il n’y a aucun problème.', 'Les familles ont menti.'], 0, 'Une autre cause possible, non contrôlée. EN: an uncontrolled cause.', 'a3-etude'),
        mc('« Mon voisin a arrêté le sucre, et il dort mieux. » Cela...', ['illustre une idée', 'prouve une idée'], 0, 'Un seul cas. EN: one case.', 'a3-erreurs'),
        tI('Complète. Un mot.', 'L’étude montre un lien, pas une ... .', 'cause', 'Corrélation n’est pas causalité. EN: link, not cause.', 'a3-trier'),
        eS('Une étude prouve que les parcs réduisent l’anxiété des ados.', 'Une étude montre un lien entre les parcs et moins d’anxiété chez les ados.', 'Montrer un lien, ce n’est pas prouver une cause. EN: a link, not proof.', 'a3-erreurs'),
        mc('« Tous les experts sont d’accord. » Que demandes-tu ?', ['quels experts, et sur quelle étude', 'rien, c’est clair'], 0, 'Une autorité sans nom ne prouve rien. EN: name the experts.', 'a3-ecoute'),
        lC('Écoute. La chercheuse confirme-t-elle ce qu’a dit l’animateur ?', src(E(1448)).fr, ['non : un lien, pas une cause', 'oui, elle confirme'], 0, 'Elle corrige la « bonne nouvelle ». EN: she corrects him.', 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-presuppose', label: 'Le présupposé', targets: ['presuppose-avale'],
      questions: [
        mc('« Depuis que la rue est piétonne, trois commerces ont fermé. » La lettre laisse croire que...', ['la rue piétonne est la cause', 'Internet est la cause'], 0, 'Depuis que suggère une cause sans la prouver. EN: implied cause.', 'a4-courrier'),
        mc('« Soit on rouvre la rue, soit le centre meurt. » C’est...', ['un faux choix', 'une preuve', 'une concession'], 0, 'Deux options seulement, dont une catastrophe. EN: false either/or.', 'a4-presupposes'),
        mc('Texte : « Les jeunes ne lisent plus : mon neveu n’ouvre jamais un livre. » Ce raisonnement repose sur...', ['une généralisation à partir d’un cas', 'une étude', 'un chiffre sourcé', 'une citation'], 0, 'Un neveu pour tous les jeunes. EN: one case for all.', 'a4-devoiler'),
        mc('Quelle idée M. Chappuis tient-il pour acquise ?', ['que les clients viennent en voiture', 'que la rue est trop étroite', 'que les loyers baissent'], 0, 'Sans elle, son argument tombe. EN: without it, the argument falls.', 'a4-courrier'),
        tI('Complète. Un mot.', 'Pour que l’argument marche, que faut-il ... ?', 'croire', 'La question qui fait apparaître le présupposé. EN: what must you believe?', 'a4-presupposes', ['supposer']),
        tI('Comment appelle-t-on une idée que l’argument suppose sans la dire ? Un mot.', 'un ...', 'présupposé', 'Le présupposé. EN: an assumption.', 'a4-presupposes'),
        eS('Les commerces ont fermé à cause de la rue piétonne.', 'Les commerces ont fermé depuis que la rue est piétonne.', 'La lettre dit « depuis que », pas « à cause de ». EN: since, not because.', 'a4-piege'),
        lC('Écoute. Cette phrase nomme-t-elle un présupposé ?', src(E(1456)).fr, ['oui', 'non'], 0, '« Suppose » : l’idée non dite est nommée. EN: the assumption is named.', 'a4-reponse'),
      ],
    },
    {
      id: 'r5-distance', label: 'La distance', targets: ['distance-effacee'],
      questions: [
        mc('« La rénovation aurait coûté deux fois plus que prévu. » Le journaliste...', ['rapporte sans garantir', 'affirme un fait vérifié'], 0, 'Conditionnel de distance. EN: reported.', 'a5-marqueurs'),
        mc('« Prétendument pour gagner du temps. » Le journaliste...', ['doute de la raison donnée', 'approuve la raison', 'cite le maire mot pour mot'], 0, 'Prétendument : la raison avancée, mise en doute. EN: doubted.', 'a5-marqueurs'),
        mc('Quel verbe dit que la personne avoue quelque chose qui la gêne ?', ['prétendre', 'reconnaître', 'se targuer', 'assurer'], 1, 'Reconnaître : admettre. EN: to admit.', 'a5-verbes'),
        mc('Pourquoi « raisonnable » est-il entre guillemets ?', ['c’est le mot du maire, cité sans être repris', 'c’est un mot étranger'], 0, 'Les guillemets marquent la distance. EN: quoted, not endorsed.', 'a5-piscine'),
        tI('Complète avec l’adverbe de distance. Un mot.', 'Le contrat a été attribué sans appel d’offres, ... pour gagner du temps.', 'prétendument', 'Le journaliste doute de la raison. EN: supposedly.', 'a5-marqueurs', ['soi-disant']),
        tI('Complète. Deux mots.', '... que certaines pièces soient introuvables.', 'il semblerait', 'Une information avancée avec prudence. EN: it would seem.', 'a5-marqueurs', ['il semble']),
        eS('Selon des documents, la facture atteint 7,8 millions : c’est confirmé.', 'Selon des documents, la facture atteindrait 7,8 millions : ce n’est pas confirmé.', 'Le conditionnel dit que rien n’est confirmé. EN: not confirmed.', 'a5-erreurs'),
        lC('Écoute. Le journaliste croit-il cette personne ?', src(E(1487)).fr, ['il en doute', 'oui, sans réserve'], 0, 'Prétendre : dire sans convaincre. EN: prétendre signals doubt.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-ironie', label: 'Le ton et l’ironie', targets: ['ironie-prise-au-mot'],
      questions: [
        mc('« Quelle bonne nouvelle : le guichet a fermé. » Dans le blog de Léa, c’est...', ['de l’ironie', 'un compliment'], 0, 'Tout le billet raconte un échec. EN: the post describes a failure.', 'a6-blog'),
        mc('Que veut montrer l’exemple des boulangeries ?', ['que le chiffre de 70 % ne prouve rien', 'que Léa aime le pain', 'que la mairie ferme les commerces'], 0, 'Sans choix, un pourcentage ne dit rien d’une préférence. EN: no choice, no preference.', 'a6-signes'),
        mc('Texte : « Merci à la compagnie pour ces trois heures sur le quai, quel service exceptionnel. » L’auteur...', ['remercie sincèrement', 'critique la compagnie', 'félicite les voyageurs', 'ne donne aucun avis'], 1, 'Trois heures d’attente : les éloges sont ironiques. EN: the praise is ironic.', 'a6-lire'),
        mc('Le signe le plus sûr de l’ironie, c’est...', ['un mot rare', 'l’écart entre les mots et la situation', 'un point d’exclamation'], 1, 'Une « bonne nouvelle » dans un récit d’échec. EN: the gap.', 'a6-signes'),
        tI('Complète. Un mot.', 'L’ironie dit le ... de ce qu’elle pense.', 'contraire', 'Antiphrase : dire le contraire. EN: the opposite.', 'a6-piege', ['inverse']),
        eS('Léa trouve que le guichet en ligne est une bonne nouvelle.', 'Léa trouve que le guichet en ligne est une mauvaise idée.', 'Prise au mot, l’ironie retourne le texte. EN: taken literally, irony flips.', 'a6-piege'),
        mc('Où le ton du billet devient-il sérieux ?', ['quand Léa parle de sa voisine', 'dans le titre'], 0, 'Mme Joly porte la vraie critique. EN: the neighbour carries the real point.', 'a6-blog'),
        lC('Écoute. Ironique ou sérieux ?', src(E(1505)).fr, ['ironique', 'sérieux'], 0, 'Un retard n’a rien de génial. EN: a delay is not great.', 'a6-lire'),
      ],
    },
    {
      id: 'r7-interet', label: 'À qui ça profite', targets: ['interet-ignore'],
      questions: [
        mc('Un communiqué de presse parle au nom...', ['de l’entreprise qui l’écrit', 'du journal', 'des voyageurs'], 0, 'L’entreprise écrit sur elle-même. EN: the company speaks.', 'a7-qui'),
        mc('Dans l’article, que recouvre le « service à la demande » ?', ['la suppression de neuf lignes régulières', 'de nouveaux bus', 'une baisse des prix'], 0, 'Le mot doux cache une suppression. EN: a cut.', 'a7-deux'),
        mc('Qui paie la plus grande partie des bus électriques ?', ['TRL', 'la Région', 'les voyageurs', 'le syndicat'], 1, 'Deux tiers par la Région, que le communiqué ne cite pas. EN: the Region.', 'a7-deux'),
        mc('« Une adaptation nécessaire » cache souvent...', ['une coupe', 'un cadeau'], 0, 'Un mot doux pour une mauvaise nouvelle. EN: a soft word.', 'a7-mots'),
        tI('Complète la question critique. Un mot.', 'À qui ... ce plan ?', 'profite', 'Qui y gagne ? EN: who benefits?', 'a7-qui'),
        eS('Le communiqué ment sur tout.', 'Le communiqué choisit ses mots et ses faits.', 'Taire n’est pas mentir. EN: selecting is not lying.', 'a7-erreurs'),
        mc('Savoir à qui profite un texte sert à...', ['savoir quoi vérifier', 'prouver qu’il est faux'], 0, 'L’intérêt indique où regarder. EN: where to look.', 'a7-qui'),
        lC('Écoute. Cette phrase vient-elle du communiqué ou de l’article ?', src(E(1517)).fr, ['de l’article', 'du communiqué'], 0, 'Le communiqué ne parle jamais de suppression. EN: only the article says it.', 'a7-deux'),
      ],
    },
    {
      id: 'r8-interpretation', label: 'Fait, opinion, interprétation', targets: ['interpretation-comme-fait'],
      questions: [
        mc('« Le chômage a baissé de 0,3 point en un an. » C’est...', ['un fait', 'une interprétation', 'une opinion'], 0, 'Un chiffre vérifiable. EN: checkable.', 'a8-trier'),
        mc('« La réforme fonctionne, puisque le chômage baisse. » La partie « la réforme fonctionne » est...', ['une interprétation', 'un fait'], 0, 'Une cause proposée. EN: a proposed cause.', 'a8-trier'),
        mc('Selon la note en bas de page, le test de Nuage+ a été fait...', ['par un hôpital sur 312 patients', 'par la marque sur 24 volontaires', 'par une université', 'sur cent nuits'], 1, 'Un test maison, sur peu de monde. EN: in-house, small.', 'a8-pub'),
        mc('« Le meilleur sommeil de votre vie » est...', ['une opinion', 'un fait vérifiable'], 0, 'Un jugement, pas une mesure. EN: a judgement.', 'a8-trois'),
        tI('Complète. Un mot.', 'Une interprétation relie des faits à une ... .', 'cause', 'Elle propose une explication. EN: a cause.', 'a8-piege', ['explication']),
        eS('Neuf personnes sur dix recommandent Nuage+.', 'Neuf clients sur dix parmi ceux qui ont laissé un avis recommandent Nuage+.', 'Les avis viennent de clients volontaires. EN: self-selected reviewers.', 'a8-piege'),
        mc('À la radio, combien d’explications de la hausse du tourisme entend-on ?', ['trois', 'une'], 0, 'La campagne, la météo, le festival. EN: three readings.', 'a8-ecoute'),
        lC('Écoute. Fait, opinion ou interprétation ?', src(E(1546)).fr, ['une interprétation', 'un fait', 'une opinion'], 0, 'L’office relie la hausse à sa campagne. EN: an interpretation.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-confronter', label: 'Deux textes', targets: ['comparaison-plate'],
      questions: [
        mc('Sur quel fait le rapport et le blog s’accordent-ils ?', ['la hausse de 38 %', 'le cadeau électoral', 'une baisse de 20 % du trafic'], 0, 'Le chiffre commun. EN: the shared figure.', 'a9-gratuite'),
        mc('Que conclut le rapport ?', ['qu’il faut attendre avant de conclure', 'que la gratuité est un échec', 'que c’est un cadeau électoral', 'qu’il faut plus de pistes cyclables'], 0, 'Deux ans d’expérience avant de juger. EN: wait two years.', 'a9-gratuite'),
        mc('Quel chiffre le blog passe-t-il sous silence ?', ['les 19 % de trajets en voiture remplacés', 'les 38 % de hausse'], 0, 'Le seul qui nuancerait sa thèse. EN: the one that would weaken him.', 'a9-comparer'),
        mc('Pour comparer deux textes, tu commences par...', ['les faits qu’ils partagent', 'le ton'], 0, 'Les faits communs d’abord. EN: shared facts first.', 'a9-grille'),
        tI('Complète avec le mot qui oppose les deux textes. Deux mots.', 'Le rapport attend ; ..., le blog a déjà tranché.', 'en revanche', 'Un connecteur d’opposition. EN: on the other hand.', 'a9-comparer', ['par contre']),
        eS('Les deux textes disent la même chose.', 'Les deux textes citent les mêmes chiffres, mais pas la même conclusion.', 'Même chiffre, lectures opposées. EN: same figures, different conclusions.', 'a9-erreurs'),
        mc('Le ton du blog est...', ['polémique', 'prudent'], 0, 'Point d’exclamation, question rhétorique, accusation. EN: polemical.', 'a9-grille'),
        lC('Écoute. Cette phrase confronte-t-elle vraiment les deux textes ?', src(E(1566)).fr, ['oui', 'non'], 0, '« Alors que » oppose leurs positions. EN: it contrasts them.', 'a9-reponse'),
      ],
    },
    {
      id: 'r10-delf', label: 'Format DELF B2', targets: ['reponse-sans-preuve'],
      questions: [
        mc('Document : « L’intention est louable. On aurait tort, cependant, de voir dans ce bouton rouge une solution miracle. » La position de l’auteur est...', ['favorable au but, réservée sur le moyen', 'totalement favorable', 'totalement hostile', 'neutre'], 0, 'Une concession, puis « cependant ». EN: concession, then the turn.', 'a10-epreuve'),
        mc('Question de position. Quelle justification rapporte des points ?', ['« il traite le symptôme et non la cause »', '« je pense que l’auteur a raison »', 'tout le deuxième paragraphe'], 0, 'Une citation courte et exacte. EN: a short exact quote.', 'a10-pieges'),
        mc('« Les arrêts maladie auraient reculé de 12 %. » Vrai ou faux : le chiffre est présenté comme certain.', ['Faux : il est au conditionnel.', 'Vrai : c’est un chiffre.'], 0, 'Un chiffre peut être rapporté sans être garanti. EN: reported, not certain.', 'a10-justifier'),
        mc('Que désigne « ce bouton rouge » ?', ['la coupure des serveurs le soir', 'une alarme incendie', 'un téléphone'], 0, 'Une image pour une solution radicale et simple. EN: an image.', 'a10-epreuve'),
        mc('L’exemple de la mère de famille sert à montrer...', ['qu’une règle uniforme ignore la diversité des vies', 'que les mères travaillent trop', 'que les enfants dorment tard', 'que les réunions sont inutiles'], 0, 'Une question d’inférence : ce que l’exemple laisse entendre. EN: inference.', 'a10-justifier'),
        tI('Quel type de question demande ce que le texte laisse entendre ? Un mot.', 'une question d’...', 'inférence', 'L’inférence : déduire, puis prouver. EN: inference.', 'a10-types'),
        eS('Faux, parce que je ne suis pas d’accord.', 'Faux : le texte dit que les arrêts « auraient reculé ».', 'On justifie avec le texte, pas avec son avis. EN: justify with the text.', 'a10-pieges'),
        lC('Écoute. Cette phrase rapporte-t-elle un fait certain ?', src(E(1581)).fr, ['non, c’est au conditionnel', 'oui'], 0, 'Auraient reculé : rapporté. EN: reported.', 'a10-justifier'),
      ],
    },
    {
      id: 'r11-reponse', label: 'Ta réponse critique', targets: ['reponse-sans-jugement'],
      questions: [
        mc('Format TCF. Document : « Selon l’Institut Carrel, huit paiements sur dix se font par carte. » Ce chiffre prouve que...', ['la plupart des paiements se font par carte', 'huit personnes sur dix ont une carte', 'les espèces ont disparu', 'la fraude baisse'], 0, 'Il compte des paiements, rien d’autre. EN: it counts payments only.', 'a11-tribune'),
        mc('Pourquoi est-il utile de savoir qui est Hugo Lemaire ?', ['Il a fondé une application de paiement : il a intérêt à la réforme.', 'Il est boulanger à Nantes.', 'Il travaille à l’Institut Carrel.'], 0, 'Son intérêt dit quoi vérifier. EN: his stake.', 'a11-tribune'),
        mc('« Tout le monde le sait : les espèces servent d’abord à la fraude. » C’est...', ['une affirmation sans preuve', 'un chiffre sourcé', 'un témoignage'], 0, 'La formule remplace la preuve. EN: a bare assertion.', 'a11-tribune'),
        mc('« Elles s’adapteront, comme elles se sont adaptées au téléphone portable. » L’auteur suppose que...', ['les personnes âgées s’adapteront sans difficulté', 'les personnes âgées refusent le portable'], 0, 'Un présupposé non démontré. EN: an unproved assumption.', 'a11-scenario'),
        mc('Une réponse critique commence par...', ['ton avis sur les espèces', 'la thèse de l’auteur, avec tes mots', 'une longue citation'], 1, 'Résumer d’abord, juger ensuite. EN: summarise first.', 'a11-plan'),
        tI('Complète la phrase de réponse. Un mot.', 'On notera que l’auteur a ... à cette réforme.', 'intérêt', 'Signaler l’intérêt, sans accuser. EN: a stake.', 'a11-plan'),
        eS('L’auteur prouve que tout le monde peut payer par carte.', 'L’auteur suppose que tout le monde peut payer par carte.', 'Il ne le prouve pas : il le suppose. EN: assumed, not proven.', 'a11-tribune'),
        lC('Écoute. Cette phrase juge-t-elle les preuves de l’auteur ?', src(E(1596)).fr, ['oui', 'non'], 0, 'Elle distingue la thèse claire des preuves fragiles. EN: it judges them.', 'a11-plan'),
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
spreadSlots(A11_QUIZ);

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck', id: 'a11-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'ce que le texte affirme', back: 'la thèse', say: src(E(1424)).fr },
    { front: 'là où se cache la thèse', back: 'après la concession', say: src(E(1426)).fr },
    { front: 'un seul cas', back: 'un exemple, pas une preuve', say: src(E(1444)).fr },
    { front: 'deux choses liées', back: 'un lien, pas une cause', say: src(E(1432)).fr },
    { front: 'une idée jamais dite', back: 'un présupposé', say: src(E(1466)).fr },
    { front: 'supposedly', back: 'prétendument, soi-disant', say: src(E(1473)).fr },
    { front: 'dire le contraire pour critiquer', back: 'l’ironie', say: src(E(1501)).fr },
    { front: 'who benefits?', back: 'à qui ça profite ?', say: src(E(1520)).fr },
    { front: 'une réponse critique', back: 'résumer, juger, citer', say: src(E(1598)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a11-roundup', layer: 'core', title: 'Lire de façon critique, en résumé',
  body: `${REFRAME} Tu ne t’arrêtes plus au sens : tu tiens la loupe au-dessus du texte, tu sépares ce qu’il affirme de ce qui le soutient, et tu dis d’où parle celui qui l’écrit. La prochaine leçon fait la même chose avec l’oreille : ${ECOUTE_B2_REF} t’apprend à suivre un document audio à vitesse réelle, pour sa structure et ses positions. EN: Next: the same critical ear, at native speed.`,
  points: [
    'La thèse se cherche après la concession, et se redit avec tes mots.',
    'Un exemple illustre, une évidence affirme, un lien n’est pas une cause.',
    'Le conditionnel, les guillemets et le verbe disent la distance ; l’ironie dit l’inverse.',
    'Ta réponse résume, juge et cite : trois à dix mots, entre guillemets.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['these', 'distance', 'citation'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Ta réponse critique',
    opener: {
      line: 'Une tribune sûre d’elle, et ta loupe : à toi d’écrire ce qu’elle affirme, ce qu’elle prouve, et d’où elle parle. EN: A self-assured op-ed and your magnifying glass: your turn to write what it claims, what it proves and where it speaks from.',
      imageRef: 'lessons/lecture-critique/act11.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit une réponse critique à une tribune et passé l’examen : quatre-vingt-huit questions, onze rounds. EN: You wrote a critical response to an op-ed and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 140,
    restPoints: ['a11-tribune', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-preuve', 'a11-quiz/r6-ironie', 'a11-quiz/r9-confronter'],
  },
  sections: [
    A11_TRIBUNE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-titre', title: 'Les questions du lecteur critique', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : ce sont les questions à poser à un titre. EN: say each line aloud: the questions to ask a headline.', items: [E(1406), E(1407), E(1408), E(1409), E(1410), E(1412)], audio: AUDIO },
  { id: 'd-these', title: 'La thèse après le mais', format: 'mcq' as const, coach: 'Cherche le tournant : ce qui suit mais, pourtant ou donc. EN: look for the turn.', q: '« Certes, les notes humilient parfois, mais elles informent. » La thèse est...', opts: ['qu’elles informent', 'qu’elles humilient'], correct: 0, why: 'Ce qui suit « mais » l’emporte. EN: what follows mais.', items: [E(1417), E(1423), E(1424), E(1425), E(1428), E(1429)], audio: AUDIO },
  { id: 'd-preuve', title: 'Appuyé ou affirmé', format: 'sort' as const, coach: 'Deux piles : la phrase s’appuie sur quelque chose, ou elle affirme seulement ? EN: supported, or merely asserted?', buckets: ['ça s’appuie sur quelque chose', 'ça affirme seulement'], items: [E(1442), E(1440), E(1432), E(1441), E(1433), E(1451)], audio: AUDIO },
  { id: 'd-presuppose', title: 'Après, pas forcément à cause de', format: 'mcq' as const, coach: 'Demande-toi ce qu’il faut croire pour que l’argument marche. EN: what must you believe for it to work?', q: '« Depuis que la rue est piétonne, trois commerces ont fermé. » La rue est-elle forcément la cause ?', opts: ['non', 'oui'], correct: 0, why: 'D’autres causes sont possibles. EN: other causes are possible.', items: [E(1454), E(1455), E(1456), E(1461), E(1463), E(1467)], audio: AUDIO },
  { id: 'd-distance', title: 'Rapporté ou garanti', format: 'mcq' as const, coach: 'Cherche le conditionnel, les guillemets et le verbe. EN: look for the conditional, the quotes, the verb.', q: '« La facture atteindrait 7,8 millions. » Le journaliste...', opts: ['rapporte sans garantir', 'garantit le chiffre'], correct: 0, why: 'Le conditionnel met une distance. EN: reported.', items: [E(1470), E(1472), E(1473), E(1474), E(1479), E(1493)], audio: AUDIO },
  { id: 'd-ironie', title: 'Ce que Léa pense vraiment', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : elles disent ce que cache l’ironie. EN: read each aloud: what the irony hides.', items: [E(1501), E(1502), E(1503), E(1508), E(1511), E(1513)], audio: AUDIO },
  { id: 'd-interet', title: 'Le mot doux', format: 'mcq' as const, coach: 'Traduis le mot doux, puis cherche ce que le texte tait. EN: translate the soft word, then find the silence.', q: 'Un communiqué parle d’« optimiser le réseau ». Tu cherches...', opts: ['ce que le mot doux remplace', 'le nom du directeur'], correct: 0, why: 'Souvent une suppression. EN: often a cut.', items: [E(1520), E(1521), E(1525), E(1526), E(1529), E(1530)], audio: AUDIO },
  { id: 'd-interpretation', title: 'Le fait et sa lecture', format: 'sort' as const, coach: 'Deux piles : un fait qu’on vérifie, ou une lecture qu’on discute ? EN: a checkable fact, or a debatable reading?', buckets: ['un fait', 'une interprétation ou une opinion'], items: [E(1538), E(1539), E(1544), E(1540), E(1545), E(1546)], audio: AUDIO },
  { id: 'd-confronter', title: 'Confronter deux textes', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : les faits communs, puis les différences. EN: shared facts, then differences.', items: [E(1560), E(1561), E(1562), E(1563), E(1564), E(1567)], audio: AUDIO },
  { id: 'd-examen', title: 'Justifiez', format: 'mcq' as const, coach: 'Au DELF, la justification compte autant que la réponse. EN: the justification scores.', q: 'Au DELF, une réponse « Faux » sans citation...', opts: ['ne rapporte rien', 'rapporte tous les points'], correct: 0, why: 'Il faut prouver avec le texte. EN: prove it with the text.', items: [E(1573), E(1574), E(1575), E(1576), E(1578), E(1580)], audio: AUDIO },
  { id: 'd-reponse', title: 'La charpente de ta réponse', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : la charpente d’une réponse critique. EN: the frame of a critical response.', items: [E(1590), E(1591), E(1592), E(1593), E(1594), E(1596)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'titre-pris-pour-preuve', description: 'Repeats a headline or first sentence as established fact without reading the body that qualifies it.', detectOn: ['a1-scene', 'a1-loupe', 'a1-check', 'a11-mission'], drill: 'd-titre', retest: 'd-titre' },
  { id: 'theme-pour-these', description: 'Gives the topic, or the concession the writer grants, as the thesis.', detectOn: ['a2-trouver', 'a2-piege', 'a2-check', 'a11-mission'], drill: 'd-these', retest: 'd-these' },
  { id: 'affirmation-prise-pour-preuve', description: 'Accepts an anecdote, an unnamed authority, an obviousness formula or a correlation as proof.', detectOn: ['a3-trier', 'a3-erreurs', 'a3-check', 'a11-mission'], drill: 'd-preuve', retest: 'd-preuve' },
  { id: 'presuppose-avale', description: 'Restates an argument together with its unstated assumption (after as because, all from one case, a false either/or).', detectOn: ['a4-devoiler', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-presuppose', retest: 'd-presuppose' },
  { id: 'distance-effacee', description: 'Reports a conditional, quoted or prétendument claim as the writer’s own fact, or misreads doubt as accusation.', detectOn: ['a5-degre', 'a5-erreurs', 'a5-check', 'a11-mission'], drill: 'd-distance', retest: 'd-distance' },
  { id: 'ironie-prise-au-mot', description: 'Takes ironic praise literally and reports the opposite of the writer’s stance.', detectOn: ['a6-lire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-ironie', retest: 'd-ironie' },
  { id: 'interet-ignore', description: 'Reads a press release or interested text as neutral, or rejects it wholesale as a lie.', detectOn: ['a7-qui', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-interet', retest: 'd-interet' },
  { id: 'interpretation-comme-fait', description: 'Treats an interpretation, an opinion or an advert’s claim as a checkable fact.', detectOn: ['a8-trier', 'a8-piege', 'a8-check'], drill: 'd-interpretation', retest: 'd-interpretation' },
  { id: 'comparaison-plate', description: 'Compares two texts by listing each in turn, missing shared facts, diverging conclusions and omissions.', detectOn: ['a9-comparer', 'a9-erreurs', 'a9-check'], drill: 'd-confronter', retest: 'd-confronter' },
  { id: 'reponse-sans-preuve', description: 'Answers an exam inference or stance item with an opinion or no quotation, or copies a whole paragraph as justification.', detectOn: ['a10-justifier', 'a10-pieges', 'a10-check', 'a11-mission'], drill: 'd-examen', retest: 'd-examen' },
  { id: 'reponse-sans-jugement', description: 'Writes a critical response that summarises or gives a personal opinion without judging the evidence.', detectOn: ['a11-tribune', 'a11-cheat', 'a11-mission'], drill: 'd-reponse', retest: 'd-reponse' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here only; every sheet is reached by
 *  `sheetId` from at least one mission.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-arguments', 'Thèse, preuves, présupposés', ['la thèse', 'six sortes d’appui', 'les présupposés'], [
    teach('sheet-arguments-teach', 'Ce que le texte affirme, et sur quoi',
      `Le sujet dit de quoi parle un texte ; la thèse dit ce qu’il en affirme. Elle suit souvent une concession, que ${CONCESSION_REF} t’a appris à écrire. Une fois la thèse trouvée, regarde ce qui la soutient : un chiffre sourcé, une étude, un exemple, un témoignage, une autorité, ou rien. Puis cherche ce que l’argument suppose sans le dire. EN: Find the thesis, weigh what supports it, then bring out what it assumes.`),
    table('sheet-arguments-preuves', 'Six sortes d’appui', ['Appui', 'Question à poser', 'Poids'], [
      ['un chiffre sourcé', 'qui a compté, quoi, combien ?', 'solide si la méthode est claire'],
      ['une étude', 'qui l’a faite, payée, mesurée comment ?', 'un lien n’est pas une cause'],
      ['un exemple', 'est-ce un cas parmi d’autres ?', 'illustre, ne prouve pas'],
      ['un témoignage', 'pourquoi cette personne ?', 'une voix, souvent choisie'],
      ['une autorité', 'qui, exactement ?', 'rien sans nom ni source'],
      ['une évidence', 'tout le monde, vraiment ?', 'une affirmation'],
    ]),
    table('sheet-arguments-presupposes', 'Quatre présupposés fréquents', ['Forme', 'Exemple', 'Ce qu’il oublie'], [
      ['après, donc à cause de', 'Depuis que la rue est piétonne, trois commerces ont fermé.', 'les autres causes'],
      ['la généralisation', 'Tous les jeunes passent leur vie sur leur téléphone.', 'les contre-exemples'],
      ['le passé qui dure', 'Ces boutiques marchaient très bien il y a vingt ans.', 'que tout a changé'],
      ['le faux choix', 'Soit on rouvre la rue, soit le centre meurt.', 'les autres solutions'],
    ]),
  ]),
  sheet('sheet-position', 'La position de l’auteur', ['les marques de distance', 'les verbes qui jugent', 'l’ironie'], [
    teach('sheet-position-teach', 'Garanti, rapporté, ou dit à l’envers',
      `Un auteur peut garantir une information, la rapporter à distance, ou dire le contraire de ce qu’il pense. ${Cap(CONDITIONNEL_REF)} t’a donné le conditionnel : « ${B108_REFRAME} » Dans la presse, il rapporte sans garantir. ${Cap(MEDIAS_REF)} disait : « ${B134_REFRAME} » À B2, tu lis aussi le verbe choisi et les guillemets. EN: Read the conditional, the quotation marks and the reporting verb.`),
    table('sheet-position-marques', 'Les marques de distance', ['Marque', 'Exemple', 'Ce qu’elle dit'], [
      ['le conditionnel', 'La rénovation aurait coûté deux fois plus.', 'rapporté, pas confirmé'],
      ['selon, d’après', 'Selon des documents consultés...', 'la source, pas le journaliste'],
      ['il semblerait que', 'Il semblerait que des pièces soient introuvables.', 'un doute prudent'],
      ['prétendument, soi-disant', 'prétendument pour gagner du temps', 'le journaliste doute'],
      ['à en croire', 'À en croire l’entreprise, tout va bien.', 'sur sa seule parole'],
      ['les guillemets', 'un dépassement « raisonnable »', 'le mot de l’autre, pas le sien'],
    ]),
    table('sheet-position-verbes', 'Les verbes qui jugent', ['Verbe', 'Ce qu’il dit de la personne'], [
      ['affirmer, déclarer', 'neutre : elle dit'],
      ['reconnaître, admettre', 'elle avoue ce qui la dérange'],
      ['prétendre', 'elle le dit, on en doute'],
      ['assurer', 'elle insiste, sans preuve'],
      ['se targuer de', 'elle s’en vante'],
      ['démentir, nier', 'elle dit que c’est faux'],
    ]),
    table('sheet-position-ironie', 'Les signes de l’ironie', ['Signe', 'Exemple'], [
      ['l’antiphrase', 'Quelle bonne nouvelle : le guichet a fermé.'],
      ['les guillemets ironiques', 'la « simplification »'],
      ['l’exagération', 'une goutte de sang'],
      ['la comparaison absurde', 'si l’on fermait toutes les boulangeries sauf une'],
      ['la chute', 'Bref, bravo. Vraiment.'],
    ]),
  ]),
  sheet('sheet-interets', 'Intérêt, faits et deux textes', ['à qui ça profite', 'fait, opinion, interprétation', 'confronter deux textes'], [
    teach('sheet-interets-teach', 'Qui parle, et que dit-il vraiment',
      'Un communiqué parle pour l’entreprise, une publicité pour la marque, une tribune souvent pour son auteur. Cela ne rend pas le texte faux : cela dit quoi vérifier. Dans chaque texte, sépare le fait (vérifiable), l’opinion (un jugement) et l’interprétation (une cause proposée). Face à deux textes, pars des faits communs. EN: Know who speaks; separate fact, opinion and interpretation; compare from shared facts.'),
    table('sheet-interets-mots', 'Des mots doux, traduits', ['Le mot', 'Ce qu’il peut cacher'], [
      ['optimiser le réseau', 'supprimer des lignes ou des arrêts'],
      ['un service à la demande', 'réserver la veille, moins de passages'],
      ['une adaptation nécessaire', 'une coupe'],
      ['un plan de départs volontaires', 'des postes supprimés'],
      ['une réorganisation', 'des services regroupés ou fermés'],
      ['plus souple', 'moins garanti'],
    ]),
    table('sheet-interets-trois', 'Fait, opinion, interprétation', ['Catégorie', 'Exemple', 'Ce que tu en fais'], [
      ['un fait', 'Le chômage a baissé de 0,3 point en un an.', 'tu le reprends'],
      ['une opinion', 'Cette réforme est injuste.', 'tu dis qui la pense'],
      ['une interprétation', 'Le ministre y voit la preuve que sa réforme fonctionne.', 'tu la discutes'],
      ['une affirmation déguisée', 'Neuf clients sur dix le recommandent.', 'tu cherches qui a été compté'],
    ]),
    table('sheet-interets-confronter', 'Confronter deux textes', ['Étape', 'Question'], [
      ['1', 'Quels faits partagent-ils ?'],
      ['2', 'Que conclut chacun de ces faits ?'],
      ['3', 'Que passe chacun sous silence ?'],
      ['4', 'Quel ton, et quel intérêt ?'],
    ]),
  ]),
  sheet('sheet-examen', 'L’épreuve et la réponse critique', ['quatre types de questions', 'justifier', 'le plan de la réponse'], [
    teach('sheet-examen-teach', 'Répondre avec le texte',
      'Au DELF B2 et au TCF, une question est globale, de détail, d’inférence ou de position. Les deux dernières se prouvent toujours par le texte : une citation de trois à dix mots, exacte, entre guillemets. Ta réponse critique suit le même principe : résumer la thèse, juger les preuves, dire d’où parle l’auteur, citations à l’appui. EN: Inference and stance answers are proved with a short exact quotation; so is a critical response.'),
    table('sheet-examen-types', 'Quatre types de questions', ['Type', 'Ce qu’on te demande', 'Où chercher'], [
      ['globale', 'le genre, le but, le sujet', 'le titre, le début, la fin'],
      ['de détail', 'un chiffre, un nom, une date', 'repérer, puis lire la phrase'],
      ['d’inférence', 'ce que le texte laisse entendre', 'un exemple, une image, un connecteur'],
      ['de position', 'ce que pense l’auteur', 'les concessions, les adjectifs, le tournant'],
    ]),
    table('sheet-examen-plan', 'La réponse critique', ['Étape', 'Formules'], [
      ['la thèse', 'L’auteur soutient que...'],
      ['les preuves', 'Pour appuyer sa thèse, il avance... Cet argument est fragile, car...'],
      ['le présupposé', 'Il suppose que...'],
      ['le ton et l’intérêt', 'Le ton est... On notera que l’auteur...'],
      ['la conclusion', 'En somme, ...'],
      ['les citations', 'trois à dix mots, entre guillemets'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-24-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b2-24-sieste': 'The napping article (act 1), ONE VOICE, one take, France French, newsreader pace, not slowed. The headline as a headline; a slight beat before « Encore faut-il regarder de près », but no ironic tone anywhere: the learner must find the critical turn in the words.',
  'rec-b2-24-notes': 'The grades column (act 2), ONE VOICE, one take, a Belgian columnist reading her own piece, measured and warm. « Tout cela est vrai. » and « pourtant » at ordinary weight: the learner finds the turn, the voice does not point it out.',
  'rec-b2-24-these': 'The four thesis cards. Each card’s sentence read plainly; card one (the question) with a rising question intonation.',
  'rec-b2-24-piege-these': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-b2-24-parcs': 'The study summary (act 3), ONE VOICE, one take, Québec French, the neutral pace of a scientific summary read aloud. Say the section labels (Objectif, Méthode, Résultats, Limites) as headings. Figures in full: « mille huit cent quarante », « vingt et un pour cent ».',
  'rec-b2-24-minute-sante': 'REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, TWO VOICES, in authored order. Lines 1, 2 and 6: an upbeat radio host. Lines 3, 4, 5, 7 and 8: a calm female researcher, Québec French. Natural radio pace. The host must sound convinced, not sarcastic.',
  'rec-b2-24-courrier': 'The letter to the editor (act 4), ONE VOICE, one take, an older Swiss man reading his own letter, sincere and a little bitter, never caricatured. « Faut-il vous faire un dessin ? » as a real rhetorical question.',
  'rec-b2-24-presupposes': 'The four assumption cards, read plainly. Card four (soit... soit...) with a clear beat between the two halves.',
  'rec-b2-24-piege-presupposes': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-b2-24-piscine': 'The pool story (act 5), ONE VOICE, one take, Québec French, regional news pace. Quoted words (« dépassement », « raisonnable », « découvertes imprévues ») read with the slight lift a newsreader gives a quotation, no more. « prétendument » and « Il semblerait » at ordinary weight.',
  'rec-b2-24-bulletin': 'REQUIRED FOR THE EAR MISSION (act 5): eight news lines, ONE TAKE, ONE VOICE, in authored order, at midday-bulletin pace. The distance lives in the WORDS (auraient, prétend, à en croire, soi-disant): no sceptical tone on any line. « petit retard » with the same light lift as any quotation.',
  'rec-b2-24-blog': 'Léa’s blog post (act 6), ONE VOICE, one take, a woman in her thirties reading her own post, dry and deadpan. The irony must be audible to a native ear but never hammed: no laughing, no exaggerated stress on « bonne nouvelle » or « bravo ». The Mme Joly passage drops into a sincere tone.',
  'rec-b2-24-signes': 'The four irony cards, read deadpan. Card three (une goutte de sang) plainly, as a phrase.',
  'rec-b2-24-piege-ironie': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-b2-24-trl': 'The two TRL texts (act 7), TWO VOICES, one take each. Texte A: a bright corporate voice, the tone of a company announcement. Texte B: a neutral Belgian newsreader. The director’s and the mayor’s quotations in the reader’s voice with a slight lift. Say « Texte A » and « Texte B » as labels.',
  'rec-b2-24-matelas': 'The mattress advert (act 8), ONE VOICE, one take, the warm, persuasive voice of a radio advert, including the two footnotes read FAST and flat, as adverts read their small print: the contrast is the lesson.',
  'rec-b2-24-bilan-ete': 'REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, FOUR VOICES, in authored order, as a radio round-up. Newsreader for the factual lines (1, 4, 6, 8); a tourist-office spokesperson (2); a resident (3, 7); a shopkeeper (5). No line may signal fact or opinion by its tone: the learner decides from the words.',
  'rec-b2-24-piege-pub': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-b2-24-gratuite': 'The report and the blog (act 9), TWO VOICES. Texte A: a neutral, slightly formal voice reading an official report. Texte B: Karim, a young man, fast and indignant, as if recording his blog as a podcast. Say « Texte A » and « Texte B » as labels.',
  'rec-b2-24-deconnexion': 'The DELF-style column (act 10), ONE VOICE, one take, read like an exam audio script: even, clear, standard French, no performance. « L’intention est louable » and « cependant » at exactly the pace of the rest, because the items turn on them.',
  'rec-b2-24-especes': 'THE TASK TRIBUNE (act 11), ONE VOICE, one take, a confident man in his forties, the tone of a founder pitching an idea. Self-assured throughout; « tout le monde le sait » and « il serait absurde » said as he would say them, sure of himself, with no mockery from the reader.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 24',
  intro: 'At B1 you learned to get the meaning of a text above your level. At B2 that is no longer enough: exams, work and the news ask you to judge what you read. This lesson puts a magnifying glass on eleven real kinds of text: it finds the thesis behind the concession, weighs the evidence, brings out what an argument assumes, reads the writer’s distance, tone and irony, asks who benefits, and compares two texts on one topic. It ends with a 150 to 200 word critical response to an op-ed, marked on a DELF B2 grid.',
  skill: 'CE',
  grammarAssumed: [LECTURE_UNIT, MEDIAS_UNIT, CONDITIONNEL_UNIT, CONCESSION_UNIT, COURRIELS_UNIT],
  grammarIntroduced: [
    'Critical reading: telling a text’s topic from its thesis, and finding the thesis after a concession',
    'Weighing evidence: sourced figure, study, example, testimony, authority, bare assertion; correlation vs causation; the sample',
    'Bringing out unstated assumptions: post hoc reasoning, generalisation, the unchanging past, the false dilemma',
    'The writer’s distance: conditionnel de distance, il semblerait que, prétendument, soi-disant, à en croire, quotation marks, and evaluative reporting verbs (reconnaître, prétendre, assurer, se targuer, démentir)',
    'Tone and irony; interest and euphemism; fact, opinion and interpretation; comparing two texts; DELF B2 / TCF inference and stance items answered with a quotation; the written critical response',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B1, tu as appris à comprendre un texte au-dessus de ton niveau. Au B2, il faut le juger. Cette leçon passe onze textes à la loupe : elle trouve la thèse derrière la concession, pèse les preuves, fait apparaître ce qu’un argument suppose, lit la distance, le ton et l’ironie de l’auteur, demande à qui profite le texte et confronte deux textes sur un même sujet. À la fin, tu écris une réponse critique de 150 à 200 mots à une tribune.',
    minutes: 160,
    difficulty: 4,
    glyph: 'loupe',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: LECTURE_CRITIQUE_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, ESPECES_TEXT };
export const lessonWithoutTask = (): Lesson => LESSON;
